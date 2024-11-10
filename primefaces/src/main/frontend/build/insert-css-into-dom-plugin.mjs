// @ts-check

/**
 * @typedef {{
 * }} InsertCssIntoDomPluginOptions
 */
undefined;

import path from "node:path";

const PluginName = "insert-css-into-dom-plugin";
const NamespaceInsertCssImport = "insert-css-into-dom-plugin/import";
const NamespaceInsertCssRequire = "insert-css-into-dom-plugin/require";

/**
 * Creates JavaScript code that inserts the CSS into the DOM.
 * @param {string} cssFile Path to the CSS file.
 * @param {import("esbuild").PluginBuild} build
 * @returns {Promise<string[]>} JavaScript code lines that inserts the CSS into the DOM.
 */
async function generateInsertCssIntoDomCode(cssFile, build) {
    const result = await build.esbuild.build({
        entryPoints: [cssFile],
        bundle: true,
        sourcemap: build.initialOptions.sourcemap ? "inline" : false,
        minify: build.initialOptions.minify,
        write: false,
        loader: { 
            ".css": "css",
            ".png": "dataurl",
            ".jpg": "dataurl",
            ".jpeg": "dataurl",
            ".gif": "dataurl",
            ".svg": "dataurl",
            ".ttf": "dataurl",
            ".eot": "dataurl",
            ".otf": "dataurl",
            ".woff": "dataurl",
            ".woff2": "dataurl",
        },
    });
    const cssContent = result.outputFiles?.[0]?.text ?? "";
    return [
        "const style = document.createElement(\"style\");",
        `style.textContent = ${JSON.stringify(cssContent)};`,
        "document.head.appendChild(style);",
    ];
}


/**
 * Plugin for esbuild that inserts imported CSS files into the DOM when loaded.
 * Basically, transforms `import "file.css"` into `import("file.js")`, where
 * `file.js` is a JavaScript file that contains the CSS and inserts it into the DOM.
 * @param {InsertCssIntoDomPluginOptions} options 
 * @returns {import("esbuild").Plugin}
 */
export function insertCssIntoDomPlugin(options) {
    return {
        name: PluginName,
        setup: build => {
            build.onResolve(
                { filter: /\.css$/, namespace: "file" },
                args => {
                    if (args.kind === "dynamic-import" || args.kind === "import-statement") {
                        const filePath = path.join(args.resolveDir, args.path);
                        return { path: filePath + ".js", namespace: NamespaceInsertCssImport };
                    }
                    if (args.kind === "require-call" || args.kind === "require-resolve") {
                        const filePath = path.join(args.resolveDir, args.path);
                        return { path: filePath + ".js", namespace: NamespaceInsertCssRequire };
                    }
                    return undefined;
                },
            );
            build.onLoad(
                { filter: /.*/, namespace: NamespaceInsertCssImport },
                async args => {
                    const cssFile = args.path.substring(0, args.path.length - ".js".length);
                    return {
                        contents: [
                            ...await generateInsertCssIntoDomCode(cssFile, build),
                            "export {};"
                        ].join("\n"),
                        loader: "js",
                    };
                },
            );
            build.onLoad(
                { filter: /.*/, namespace: NamespaceInsertCssRequire },
                async args => {
                    const cssFile = args.path.substring(0, args.path.length - ".js".length);
                    return {
                        contents: [
                            ...await generateInsertCssIntoDomCode(cssFile, build),
                            "module.exports = undefined;",
                        ].join("\n"),
                        loader: "js",
                    };
                },
            );
        },
    };
};


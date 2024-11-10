// @ts-check

import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs/promises";

import * as esbuild from "esbuild";

import { insertCssIntoDomPlugin } from "./insert-css-into-dom-plugin.mjs";
import { facesResourceLoaderPlugin } from "./faces-resource-loader-plugin.mjs";
import { bannedDependenciesPlugin } from "./banned-dependencies-plugin.mjs";

const isProduction = process.env.NODE_ENV !== "development";

const baseDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const bundlesDir = path.join(baseDir, "bundles", "all");
const srcDir = path.join(baseDir, "src");
const resourcesDir = path.resolve(baseDir, "..", "..", "..", "target", "generated-resources", "META-INF", "resources");
const outputDir = path.join(resourcesDir, "primefaces");

const BannedDependencies = [
   {
      pattern: /^vis-(timeline|data|util)$/,
      reason: "Do not use vis packages directly, use their ESM variant, e.g. 'vis-data/esnext/esm/vis-data.js'. Only these match the (peer) dependencies declared in their respective package.json.",
   }
];

async function main() {
   const entryPoints = await fs.readdir(bundlesDir, { recursive: true });
   const absEntryPoints = await Promise.all(entryPoints
      .map(e => path.resolve(bundlesDir, e))
      .map(async e => {
         const stat = await fs.stat(e);
         return stat.isFile() ? e : undefined;
      }));
   const filteredEntryPoints = absEntryPoints.filter(e => e !== undefined);
   console.log("Building modern bundles for entry points:", filteredEntryPoints);
   await esbuild.build({
      absWorkingDir: baseDir,
      entryPoints: filteredEntryPoints,
      bundle: true,
      splitting: true,
      charset: "utf8",
      target: "es2016",
      format: "esm",
      platform: "browser",
      legalComments: "external",
      minify: isProduction,
      sourcemap: isProduction ? false : "inline",
      outdir: "dist",
      plugins: [
         bannedDependenciesPlugin({ bannedDependencies: BannedDependencies }),
         insertCssIntoDomPlugin({}),
         facesResourceLoaderPlugin({
            extensions: ["png", "jpg", "jpeg", "gif", "svg", "woff", "woff2", "ttf", "eot"],
            inputDir: srcDir,
            outputDir: outputDir,
            resourceBase: resourcesDir,
            useLibrary: true,
         }),
      ],
   });
}

main().catch((error) => {
   console.error(error);
   process.exit(1);
});
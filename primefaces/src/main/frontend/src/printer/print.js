/**
 * Prints a component / widget.
 * @param {string} element A search expression with one or multiple components to print.
 * @param {JQueryPrint.PrintSettings} config Configuration for printing.
 */
export async function printComponents(expressions, config) {
    await import("./printer.js");
    const element = PrimeFaces.expressions.SearchExpressionFacade.resolveComponentsAsSelector(document.body, expressions);
    element.print(config);
}
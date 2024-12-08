import "./src/timeline.widget.js";
import { createVisGlobal, type VisGlobal } from "./src/create-vis-global.js";

declare global {
    const vis: VisGlobal;
    interface Window {
        vis: VisGlobal;
    }
}

// Their type declarations are wrong, timeline exists as a named export
declare module "vis-timeline" {
    export const timeline: unknown;
}

// Expose some vis features to the global scope
Object.assign(window, { vis: createVisGlobal(), });
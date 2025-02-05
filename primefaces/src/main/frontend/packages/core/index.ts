import Cookies from "js-cookie";

import "./src/core/core.js";
import { env, type Environment } from "./src/core/core.env.js";
import { ab, ajax, globalAjaxSetup, type Ajax } from "./src/core/core.ajax.js";
import { csp, type Csp } from "./src/core/core.csp.js";
import { expressions, type Expressions } from "./src/core/core.expressions.js";
import { globalUtilsSetup, metaKey, utils, type Utils } from "./src/core/core.utils.js";
import { BaseWidget, DeferredWidget, DynamicOverlayWidget } from "./src/core/core.widget.js";
import { resources, type Resources} from "./src/core/core.resources.js";
import { clientwindow, type ClientWindow } from "./src/core/core.clientwindow.js";

import { AjaxExceptionHandler } from "./src/ajaxexceptionhandler/ajaxexceptionhandler.js";
import { AjaxStatus } from "./src/ajaxstatus/ajaxstatus.js";
import { Poll } from "./src/poll/poll.js";

import "./src/validation/validation.common.js";
import "./src/validation/validation.converters.js";
import "./src/validation/validation.validators.js";
import "./src/validation/validation.highlighters.js";

declare global {
    interface Window {
        Cookies: typeof Cookies;
    }
    namespace PrimeType {
        export interface PrimeFaces {
            ab: typeof ab;
            metaKey: typeof metaKey;

            ajax: Ajax;
            clientwindow: ClientWindow;
            csp: Csp;
            env: Environment;
            expressions: Expressions;
            resources: Resources;
            utils: Utils;
        }

        export interface WidgetRegistry {
            AjaxExceptionHandler: typeof AjaxExceptionHandler;
            AjaxStatus: typeof AjaxStatus;
            BaseWidget: typeof BaseWidget;
            DeferredWidget: typeof DeferredWidget;
            DynamicOverlayWidget: typeof DynamicOverlayWidget;
            Poll: typeof Poll;
        }
    }
}

function exposeToGlobalScope() {
    if("PrimeFaces" in window) {
        PrimeFaces.debug("PrimeFaces already loaded, ignoring duplicate execution.");
        return;
    }

    // Expose js-cookie to the global scope
    Object.assign(window, { Cookies });

    // Expose core to the global scope
    Object.assign(PrimeFaces, {
        ab,
        ajax,
        clientwindow,
        csp,
        env,
        expressions,
        metaKey,
        resources,
        utils,
    });

    // Expose widgets to the global scope
    // @ts-expect-error
    PrimeFaces.widget ??= {};
    Object.assign(PrimeFaces.widget, {
        AjaxExceptionHandler,
        AjaxStatus,
        BaseWidget,
        DeferredWidget,
        DynamicOverlayWidget,
        Poll,
    });

    // Global setup
    globalAjaxSetup();
    globalUtilsSetup();
}

exposeToGlobalScope();
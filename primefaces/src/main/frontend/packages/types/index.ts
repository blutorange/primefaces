declare global {
    namespace PrimeType {
            /**
            * This interface contains the  widget classes that are currently available. The key is the name of the widget, the
            * value the class (constructor) of the widget. Please note that widgets are usually created by the PrimeFaces
            * framework and should not be created manually.
            * 
            * Available via `PrimeFaces.widget`.
            *
            * There are a few base classes defined by PrimeFaces that you can use when writing the client-side part of your
            * custom widget:
            *
            * - `PrimeFaces.widget.BaseWidget`: Base class that you should extend if you do not require any advanced functionality.
            * - `PrimeFaces.widget.DeferredWidget`: When you widget needs to be initialized on the client in a way that requires the
            * element to be visible, you can use this class as a base. A widget may not be visible, for example, when it is
            * inside a dialog or tab. The deferred widget provides the method `DeferredWidget.addDeferredRender`
            * (to register a listener) and `DeferredWidget.renderDeferred` (to render the widget once it is visible).
            * - `PrimeFaces.widget.DynamicOverlayWidget`: When your widget is an overlay with dynamically loaded content, you can use this
            * base class.
            */
            export interface WidgetRegistry {
        }
        
        export interface WindowExtensions {
            PrimeFaces: PrimeFaces;
        }
        
        export interface PrimeFaces {
            /**
            * This object contains the  widget classes that are currently available. The key is the name of the widget, the
            * value the class (constructor) of the widget. Please note that widgets are usually created by the PrimeFaces
            * framework and should not be created manually.
            *
            * There are a few base classes defined by PrimeFaces that you can use when writing the client-side part of your
            * custom widget:
            *
            * - `PrimeFaces.widget.BaseWidget`: Base class that you should extend if you do not require any advanced functionality.
            * - `PrimeFaces.widget.DeferredWidget`: When you widget needs to be initialized on the client in a way that requires the
            * element to be visible, you can use this class as a base. A widget may not be visible, for example, when it is
            * inside a dialog or tab. The deferred widget provides the method `DeferredWidget.addDeferredRender`
            * (to register a listener) and `DeferredWidget.renderDeferred` (to render the widget once it is visible).
            * - `PrimeFaces.widget.DynamicOverlayWidget`: When your widget is an overlay with dynamically loaded content, you can use this
            * base class.
            *
            * Note to TypeScript users: you could use these widget classes to check whether a widget instance is of a certain
            * type:
            *
            * <details>
            *
            * <summary>Click to view</summary>
            *
            * ```typescript
            * type Constructor<T> = new (...args: any) => T;
            *
            * function getWidgetName(
            *   widgetType:
            *     PrimeFaces.widget.BaseWidget
            *     | Constructor<PrimeFaces.widget.BaseWidget>
            * ): string {
            *   if (typeof widgetType === "function") {
            *     for (const [name, type] of Object.entries(PrimeFaces.widget)) {
            *       if (type === widgetType) {
            *         return name;
            *       }
            *     }
            *   }
            *   else {
            *     const widgetClass = Object.getPrototypeOf(widgetType);
            *     for (const [name, type] of Object.entries(PrimeFaces.widget)) {
            *       if (
            *         "prototype" in type && widgetClass === type.prototype
            *         || widgetClass === type
            *       ) {
            *         return name;
            *       }
            *     }
            *   }
            *   return "BaseWidget";
            * }
            *
            * function getWidgetOfType<
            *   C extends Constructor<any> = Constructor<PrimeFaces.widget.BaseWidget>
            * >(widgetVar: string, widgetType: C): InstanceType<C> | undefined {
            *   const widget = PF(widgetVar);
            *   if (widget !== undefined && widget !== null) {
            *     if (widget instanceof widgetType) {
            *       // [at]ts-ignore
            *       return widget;
            *     }
            *     else {
            *       PrimeFaces.error([
            *         `Widget for var '${widgetVar}' of type '${getWidgetName(widget)}'`,
            *         `was found, but expected type '${getWidgetName(widgetType)}'!`
            *       ].join(" "));
            *       return undefined;
            *     }
            *   }
            *   else {
            *     return undefined;
            *   }
            * }
            * ```
            *
            * </details>
            *
            * This function could then be called like this:
            *
            * ```typescript
            * // Automatically inferred to be of type "PrimeFaces.widget.Chart | undefined"
            * const chart = getWidgetByVar("charWidgetVar", PrimeFaces.widget.Chart);
            * ```
            */
            widget: WidgetRegistry;
        }
    }
    
    
    let PrimeFaces: PrimeType.PrimeFaces;
    
    interface Window extends PrimeType.WindowExtensions {}
}

export {}
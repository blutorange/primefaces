// Hopefully we can remove this soon
// https://github.com/fengyuanchen/cropperjs/issues/1227

declare module "cropperjs" {
    type Matrix2D = [number, number, number, number, number, number];

    // CropperCanvas events
    type CanvasActionScale = "scale";
    type CanvasActionOther = "transform" | "select" | "move" | "rotate" | "n-resize" | "e-resize" | "s-resize" | "w-resize" | "ne-resize" | "nw-resize" | "se-resize" | "sw-resize";
    type CanvasAction = CanvasActionScale | CanvasActionOther;
    type CanvasActionEventWheel = WheelEvent;
    type CanvasActionEventOther = PointerEvent | TouchEvent | MouseEvent;
    type CanvasActionEvent = CanvasActionEventWheel | CanvasActionEventOther;
    /** Base event data for the action events of the cropper canvas. */
    interface CanvasActionEventDetailsBase<A extends CanvasAction, E extends CanvasActionEvent> {
        /**
         * The action type.
         */
        action: A;

        /**
         * The related native event that triggered this event.
         */
        relatedEvent: E;

        /**
         * The scaling factor, only available when the action is "scale" or "transform".
         */
        scale?: number;

        /**
         * The scaling factor, only available when the action is "rotate"or "transform".
         */
        rotate?: number;

        /**
         * The starting pageX value, only available when the relatedEvent is PointerEvent, TouchEvent, or MouseEvent.
         */
        startX?: number;

        /**
         * The starting pageY value, only available when the relatedEvent is PointerEvent, TouchEvent, or MouseEvent.
         */
        startY?: number;

        /**
         * The ending pageX value, only available when the relatedEvent is PointerEvent, TouchEvent, or MouseEvent.
         */
        endX?: number;

        /**
         * The ending pageY value, only available when the relatedEvent is PointerEvent, TouchEvent, or MouseEvent.
         */
        endY?: number;
    }
    /** The related data of the action. */
    type CanvasActionStartEventDetails = CanvasActionEventDetailsBase<CanvasActionOther, CanvasActionEventOther>;
    /** The related data of the action. */
    type CanvasActionMoveEventDetails = CanvasActionEventDetailsBase<CanvasActionOther, CanvasActionEventOther>;
    /** The related data of the action. */
    type CanvasActionEndEventDetails = CanvasActionEventDetailsBase<CanvasActionOther, CanvasActionEventOther>
    /** The related data of the action. */
    type CanvasActionEventDetails = CanvasActionEventDetailsBase<CanvasAction, CanvasActionEvent>;
    interface CropperCanvasEventHandlersEventMap {
        /** The event is fired when a pointer changes on the canvas. */
        action: CustomEvent<CanvasActionEventDetails>;
        /** The event is fired when a pointer becomes active. */
        actionstart: CustomEvent<CanvasActionStartEventDetails>;
        /** This event is fired when a pointer changes coordinates. */
        actionmove: CustomEvent<CanvasActionMoveEventDetails>;
        /** This event is fired when a pointer is no longer active. */
        actionend: CustomEvent<CanvasActionEndEventDetails>;
    }
    interface CropperCanvas {
        addEventListener<K extends keyof CropperCanvasEventHandlersEventMap>(type: K, listener: (this: Element, ev: CropperCanvasEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof CropperCanvasEventHandlersEventMap>(type: K, listener: (this: HTMLElement, ev: CropperCanvasEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }

    // CropperImage events
    /**
     * The transform information of the image.
     */
    interface ImageTransformEventDetails {
        /**
         * The new (next) matrix object.
         */
        matrix: Matrix2D;

        /**
         * The old (current) matrix object.
         */
        oldMatrix: Matrix2D;
    }
    interface CropperImageEventHandlersEventMap {
        /** The event is fired when the transform CSS property of the element is going to change. */
        transform: CustomEvent<ImageTransformEventDetails>;
    }
    interface CropperImage {
        addEventListener<K extends keyof CropperImageEventHandlersEventMap>(type: K, listener: (this: Element, ev: CropperImageEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof CropperImageEventHandlersEventMap>(type: K, listener: (this: HTMLElement, ev: CropperImageEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }

    // CropperSelection events
    /**
     * The position and size data of the selection.
     */
    interface SelectionChangeEventDetails {
        /**
         * The x-axis coordinate of the selection.
         */
        x: number;

        /**
         * The y-axis coordinate of the selection.
         */
        y: number;

        /**
         * The width of the selection.
         */
        width: number;

        /**
         * The height of the selection.
         */
        height: number;
    }
    interface CropperSelectionEventHandlersEventMap {
        /** The event is fired when the position or size of the selection is going to change. */
        change: CustomEvent<SelectionChangeEventDetails>;
    }
    interface CropperSelection {
        addEventListener<K extends keyof CropperSelectionEventHandlersEventMap>(type: K, listener: (this: Element, ev: CropperSelectionEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof CropperSelectionEventHandlersEventMap>(type: K, listener: (this: HTMLElement, ev: CropperSelectionEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
}

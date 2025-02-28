/**
 * The class with functionality related to working with dialogs and the dialog framework.
*/
// Note: Named "Dialogs" to avoid name collision with the "Dialog" widget class
export class Dialogs {
    DialogHandler: DialogHandler = new DialogHandler();
}

/**
 * The class with functionality for handling dialogs, as part of the dialog framework.
 */
export class DialogHandler {
    /**
     * Opens the dialog as specified by the given configuration. When the dialog is dynamic, loads the content from
     * the server.
     * @param cfg Configuration of the dialog.
     */
    openDialog(cfg: PrimeType.dialog.DialogHandlerCfg): void {
        var rootWindow = this.findRootWindow(),
        dialogId = cfg.sourceComponentId + '_dlg';

        if(rootWindow.document.getElementById(dialogId)) {
            return;
        }

        // The widget that opens a dialog can be nested inside of a frame which might be nested again.
        // The dialog is put in the outermost frame to be able to fill the whole browser tab,
        // so we traverse upwards to find the root window and put the dialog DOM in there.
        // When a dialog is closed, we need to clean up the global variables and notify the source widget for the dialog return feature.
        // Accessing a component nested within frames requires recursive resolving of frames.
        // Every frame has it's own contentWindow and thus also it's own document object.
        // To be able to access a DOM element from an outer frame, one needs to first resolve the containing frame,
        // and then resolve the element from the contentWindow. With nested frames, nested frame resolving has to be done.
        // In order to do this, we traverse up the window frameElement until we reach the top window.
        // While traversing up, we construct a selector for finding the frameElement from within the parent window.
        // We build up the selectors backwards as we traverse up. Imagine the example
        //
        // --------------------------------------------------
        // | Frame 1                                        |
        // |           -------------------------------      |
        // |           | Frame 1_1                   |      |
        // |           |                             |      |
        // |           |  ------------               |      |
        // |           |  | Button 1 |               |      |
        // |           |  ------------               |      |
        // |           |                             |      |
        // |           -------------------------------      |
        // |------------------------------------------------|
        // | Frame 2                                        |
        // |                                                |
        // |                                                |
        // |                                                |
        // --------------------------------------------------
        //
        // Here "Button 1" is our source widget that opened the dialog.
        // The root window contains two frames "Frame 1" and "Frame 2".
        // The "Frame 1" contains another frame "Frame 1_1" within which the widget lives.
        // Since we have to install the dialog in the root window, we need to be able to get access
        // to the source widget when closing the dialog.
        // The only way to find the DOM node, is by traversing into "Frame 1" then into "Frame 1_1" and look it up there.
        // So from the root window we do e.g. `$(rootWindow.document).find("#frame1").contentWindow` to get into "Frame 1".
        // We do the same to get into "Frame 1_1" e.g. `$(frame1Window.document).find("#frame1_1").contentWindow`.
        // Finally, we can look up the source widget `$(frame1_1Window.document).find("#sourceWidgetId")`.

        var sourceFrames = function() {
            var w = window;
            var sourceFrames = [];
            // Traverse up frameElement i.e. while we are in frames
            while(w.frameElement) {
                var parent = w.parent;
                if (parent.PF === undefined) {
                    break;
                }

                // Since we traverse DOM elements upwards, we build the selector backwards i.e. from target to source.
                // This is why we use `unshift` which is like an `addAtIndex(0, object)`.
                // If an element has an id, we can use that to uniquely identify the DOM element and can jump to the next parent window.
                // If we can't find an id, we collect class names and the tag name of an element.
                // If that doesn't uniquely identify an element within it's parent, we also append the node index via the `:eq(index)` selector.
                // We connect selectors for each DOM element with the `>` operator.
                var e = w.frameElement;
                var pieces = [];

                // Traverse up tags from the frameElement to generate an identifying selector
                for (; e && e.tagName !== undefined; e = e.parentNode) {
                    if (e.id && !/\s/.test(e.id)) {
                        // If we find a parent with an id, we can use that as basis and stop there
                        pieces.unshift(e.id);
                        pieces.unshift('#');
                        pieces.unshift(' > ');
                        break;
                    } else if (e.className) {
                        // Without an id, we try to use a combination of :eq, class names and tag name and hope a parent has an id
                        var classes = e.className.split(' ');
                        var classSelectorPieces = [];
                        for (var i in classes) {
                            if (classes.hasOwnProperty(i) && classes[i]) {
                                classSelectorPieces.unshift(classes[i]);
                                classSelectorPieces.unshift('.');
                            }
                        }
                        classSelectorPieces.unshift(e.tagName);

                        var classSelector = classSelectorPieces.join('');
                        var elems = $(e.parentNode).find(classSelector);
                        if (elems.length > 1) {
                            pieces.unshift(":eq(" + elems.index(e) + ")");
                        }
                        pieces.unshift(classSelector);
                    } else {
                        // Without classes, we try to work with :eq and the tag name
                        var tagElems = $(e.parentNode).find(e.tagName);
                        if (tagElems.length > 1) {
                            pieces.unshift(":eq(" + tagElems.index(e) + ")");
                        }
                        pieces.unshift(e.tagName);
                    }
                    pieces.unshift(' > ');
                }

                var s = pieces.slice(1).join('');

                sourceFrames.unshift(s);
                w = parent;
            };

            return sourceFrames;
        }();

        const dialogWidgetVar = cfg.options.widgetVar || cfg.sourceComponentId.replace(/:/g, '_') + '_dlgwidget';

        const styleClass = cfg.options.styleClass||'';
        const dialogDOM = $('<div id="' + dialogId + '" class="ui-dialog ui-widget ui-widget-content ui-shadow ui-hidden-container ui-overlay-hidden ' + styleClass + '"' +
                ' data-pfdlgcid="' + PrimeFaces.escapeHTML(cfg.pfdlgcid) + '" data-widget="' + dialogWidgetVar + '"></div>')
                .append('<div class="ui-dialog-titlebar ui-widget-header ui-helper-clearfix"><span id="' + dialogId + '_title" class="ui-dialog-title"></span></div>');

        const titlebar = dialogDOM.children('.ui-dialog-titlebar');
        if(cfg.options.closable !== false) {
            titlebar.append('<a class="ui-dialog-titlebar-icon ui-dialog-titlebar-close" href="#" role="button"><span class="ui-icon ui-icon-closethick"></span></a>');
        }

        if(cfg.options.minimizable) {
            titlebar.append('<a class="ui-dialog-titlebar-icon ui-dialog-titlebar-minimize" href="#" role="button"><span class="ui-icon ui-icon-minus"></span></a>');
        }

        if(cfg.options.maximizable) {
            titlebar.append('<a class="ui-dialog-titlebar-icon ui-dialog-titlebar-maximize" href="#" role="button"><span class="ui-icon ui-icon-extlink"></span></a>');
        }

        var iframeStyleClass = cfg.options.iframeStyleClass||'';
        dialogDOM.append('<div class="ui-dialog-content ui-widget-content ui-df-content" style="height: auto;">' +
                '<iframe class="' + iframeStyleClass + '" style="border:0 none" frameborder="0"></iframe>' +
                '</div>');

        dialogDOM.appendTo(rootWindow.document.body);

        var dialogFrame = dialogDOM.find('iframe'),
        symbol = cfg.url.indexOf('?') === -1 ? '?' : '&',
        frameURL = cfg.url.indexOf('pfdlgcid') === -1 ? cfg.url + symbol + 'pfdlgcid=' + cfg.pfdlgcid: cfg.url,
        frameWidth = cfg.options.contentWidth||640;

        dialogFrame.width(frameWidth);

        if(cfg.options.iframeTitle) {
            dialogFrame.attr('title', cfg.options.iframeTitle);
        }

        dialogFrame.on('load', function() {
            const $frame = $(this);
            let headerElement: JQuery = $frame.contents().find('title');
            let isCustomHeader = false;

            if(cfg.options.headerElement) {
                const customHeaderId = PrimeFaces.escapeClientId(cfg.options.headerElement);
                const customHeaderElement = dialogFrame.contents().find(customHeaderId);

                if(customHeaderElement.length) {
                    headerElement = customHeaderElement;
                    isCustomHeader = true;
                }
            }

            if(!$frame.data('initialized')) {
                PrimeFaces.cw.call(rootWindow.PrimeFaces, 'DynamicDialog', dialogWidgetVar, {
                    id: dialogId,
                    position: cfg.options.position||'center',
                    sourceFrames: sourceFrames,
                    sourceComponentId: cfg.sourceComponentId,
                    sourceWidgetVar: cfg.sourceWidgetVar,
                    onShow: function() {
                        if (cfg.options.onShow) {
                            var onShowFunction = '(function(ext){' + cfg.options.onShow + '})';
                            var onShowCallback = rootWindow.PrimeFaces.csp.NONCE_VALUE
                                ? PrimeFaces.csp.evalResult(onShowFunction, rootWindow.PrimeFaces.csp.NONCE_VALUE, rootWindow)
                                : rootWindow.eval(onShowFunction);
                            if (onShowCallback) {
                                onShowCallback.call(this);
                            }
                        }
                    },
                    onHide: function() {
                        if (cfg.options.onHide) {
                            var onHideFunction = '(function(ext){' + cfg.options.onHide + '})';
                            var onHideCallback = rootWindow.PrimeFaces.csp.NONCE_VALUE
                                ? PrimeFaces.csp.evalResult(onHideFunction, rootWindow.PrimeFaces.csp.NONCE_VALUE, rootWindow)
                                : rootWindow.eval(onHideFunction);
                            if (onHideCallback) {
                                onHideCallback.call(this);
                            }
                        }

                        var $dialogWidget = this,
                        dialogFrame = this.content.children('iframe');

                        if(dialogFrame.get(0).contentWindow.PrimeFaces) {
                            this.destroyIntervalId = setInterval(function() {
                                if(dialogFrame.get(0).contentWindow.PrimeFaces.ajax.Queue.isEmpty()) {
                                    clearInterval($dialogWidget.destroyIntervalId);
                                    dialogFrame.attr('src','about:blank');
                                    $dialogWidget.jq.remove();
                                }
                            }, 10);
                        }
                        else {
                            dialogFrame.attr('src','about:blank');
                            $dialogWidget.jq.remove();
                        }

                        rootWindow.PrimeFaces.widgets[dialogWidgetVar] = undefined;
                    },
                    getModalTabbables: function(){
                        return $frame.contents().find(':tabbable');
                    },
                    modal: cfg.options.modal,
                    blockScroll: cfg.options.blockScroll,
                    resizable: cfg.options.resizable,
                    hasIframe: true,
                    iframe: $frame,
                    draggable: cfg.options.draggable,
                    width: cfg.options.width,
                    height: cfg.options.height,
                    minimizable: cfg.options.minimizable,
                    maximizable: cfg.options.maximizable,
                    headerElement: cfg.options.headerElement,
                    responsive: cfg.options.responsive,
                    closeOnEscape: cfg.options.closeOnEscape,
                    fitViewport: cfg.options.fitViewport,
                    resizeObserver: cfg.options.resizeObserver,
                    resizeObserverCenter: cfg.options.resizeObserverCenter
                });
            }

            const title = rootWindow.PF(dialogWidgetVar).titlebar.children('span.ui-dialog-title');
            if(headerElement.length > 0) {
                if(isCustomHeader) {
                    title.append(headerElement);
                    headerElement.show();
                }
                else {
                    title.text(headerElement.text());
                }

                dialogFrame.attr('title', title.text());
            }

            // adjust height
            let frameHeight: number;
            if(cfg.options.contentHeight) {
                frameHeight = cfg.options.contentHeight;
            }
            else {
                const frame = $frame.get(0);
                if (frame && frame.contentWindow) {
                    const frameBody = frame.contentWindow.document.body;
                    const frameBodyStyle = window.getComputedStyle(frameBody);
                    frameHeight = frameBody.scrollHeight + parseFloat(frameBodyStyle.marginTop) + parseFloat(frameBodyStyle.marginBottom);
                } else {
                    frameHeight = 0;
                }
            }

            $frame.css('height', String(frameHeight));

            // fix #1290 - dialogs are not centered vertically
            dialogFrame.data('initialized', true);
            rootWindow.PF(dialogWidgetVar).show();
        })
        .attr('src', frameURL);
    }

    /**
     * Closes the dialog as specified by the given configuration.
     * @param cfg Configuration of the dialog.
     */
    closeDialog(cfg: PrimeType.dialog.DialogHandlerCfg): void {
        const rootWindow = this.findRootWindow();
        const dlgs = $(rootWindow.document.body).children('div.ui-dialog[data-pfdlgcid="' + CSS.escape(cfg.pfdlgcid) +'"]').not('[data-queuedforremoval]');
        const dlgsLength = dlgs.length;
        const dlg = dlgs.eq(dlgsLength - 1);
        const parentDlg = dlgsLength > 1 ? dlgs.eq(dlgsLength - 2) : null;
        let dialogReturnBehavior: null = null;
        let windowContext: Window | null = null;

        const dlgWidget = rootWindow.PF(dlg.data('widget'));
        if(!dlgWidget) {
            // GitHub #2039 dialog may already be closed on slow internet
            PrimeFaces.error('Dialog widget was not found to close.');
            return;
        }

        const  sourceWidgetVar = dlgWidget.cfg.sourceWidgetVar;
        const sourceComponentId = dlgWidget.cfg.sourceComponentId;

        dlg.attr('data-queuedforremoval', "true");

        if(parentDlg) {
            const parentDlgFrame = parentDlg.find('> .ui-dialog-content > iframe').get(0);
            windowContext = parentDlgFrame.contentWindow || parentDlgFrame;
        }
        else {
            // We have to resolve the frames from the root window to the source widget to invoke the dialog return behavior
            // Each source frame element is a selector. We step into every nested frame until we are in the source widget frame.
            windowContext = rootWindow;
            var frames = dlgWidget.cfg.sourceFrames;
            for (const frame of frames) {
                windowContext = $(windowContext.document).find(frame).get(0).contentWindow;
            }
        }

        if(sourceWidgetVar) {
            var sourceWidget = windowContext.PF(sourceWidgetVar);
            dialogReturnBehavior = sourceWidget.cfg.behaviors ? sourceWidget.cfg.behaviors['dialogReturn']: null;
        }
        else if(sourceComponentId) {
            var dialogReturnBehaviorStr = $(windowContext.document.getElementById(sourceComponentId)).data('dialogreturn');
            if(dialogReturnBehaviorStr) {
                var dialogFunction = '(function(ext){this.' + dialogReturnBehaviorStr + '})';
                if (windowContext.PrimeFaces.csp.NONCE_VALUE) {
                    dialogReturnBehavior = PrimeFaces.csp.evalResult(dialogFunction, windowContext.PrimeFaces.csp.NONCE_VALUE, windowContext);
                }
                else {
                    dialogReturnBehavior = windowContext.eval(dialogFunction);
                }
            }
        }

        if(dialogReturnBehavior) {
            var ext = {
                    params: [
                        {name: sourceComponentId + '_pfdlgcid', value: cfg.pfdlgcid}
                    ]
                };

            dialogReturnBehavior.call(windowContext, ext);
        }

        dlgWidget.hide();
    }

    /**
     * Displays a message in the messages dialog.
     * @param msg Details of the message to show.
     */
    showMessageInDialog(msg: PrimeType.widget.ConfirmDialog.ConfirmDialogMessage): void {
        if(!this.messageDialog) {
            $('<div id="primefacesmessagedlg" class="ui-message-dialog ui-dialog ui-widget ui-widget-content ui-shadow ui-hidden-container"></div>')
                        .append('<div class="ui-dialog-titlebar ui-widget-header ui-helper-clearfix"><span class="ui-dialog-title"></span>' +
                        '<a class="ui-dialog-titlebar-icon ui-dialog-titlebar-close" href="#" role="button"><span class="ui-icon ui-icon-closethick"></span></a></div>' +
                        '<div class="ui-dialog-content ui-widget-content" style="height: auto;"></div>')
                        .appendTo(document.body);

            PrimeFaces.cw('Dialog', 'primefacesmessagedialog', {
                id: 'primefacesmessagedlg',
                modal:true,
                draggable: false,
                resizable: false,
                showEffect: 'fade',
                hideEffect: 'fade'
            });
            this.messageDialog = PF('primefacesmessagedialog');
            this.messageDialog.titleContainer = this.messageDialog.titlebar.children('span.ui-dialog-title');
        }

        var escape = msg.escape !== false;
        var summaryHtml = msg.summary ? msg.summary.split(/\r\n|\n|\r/g).map(function(line) { return escape ? PrimeFaces.escapeHTML(line) : line; }).join("<br>") : "";
        this.messageDialog.titleContainer.html(summaryHtml);

        var detailHtml = msg.detail ? msg.detail.split(/\r\n|\n|\r/g).map(function(line) { return escape ? PrimeFaces.escapeHTML(line) : line; }).join("<br>") : "";
        this.messageDialog.content.html('').append('<span class="ui-dialog-message ui-messages-' + msg.severity.split(' ')[0].toLowerCase() + '-icon"></span>')
            .append('<span class="ui-dialog-message-content"></span');
        this.messageDialog.content.children('.ui-dialog-message-content').append(detailHtml);
        this.messageDialog.show();
    }

    /**
     * Asks the user to confirm an action. Shows a confirmation dialog with the given message. Requires a global
     * `<p:confirmDialog>` to be available on the current page.
     * @param msg Message to show in the confirmation dialog.
     */
    confirm(msg: PrimeType.dialog.ExtendedConfirmDialogMessage): void {
        if (PrimeFaces.confirmDialog) {
            PrimeFaces.confirmSource = (typeof(msg.source) === 'string') ? $(PrimeFaces.escapeClientId(msg.source)) : $(msg.source);
            PrimeFaces.confirmDialog.showMessage(msg);
        }
        else {
            PrimeFaces.warn('No global confirmation dialog available.');
        }
    }

    /**
     * Returns the current window instance. When inside an iframe, returns the window instance of the topmost
     * document.
     * @returns The root window instance.
     */
    findRootWindow(): Window {
        // Note that the determination of the sourceFrames is tightly coupled to the same traversing logic, so keep both in sync
        let w: Window = window;
        while(w.frameElement) {
            const parent = w.parent;
            if (parent.PF === undefined) {
                break;
            }
            w = parent;
        };

        return w;
    }
}

/**
 * The object with functionality related to working with dialogs and the dialog framework.
 */
export const dialog: Dialogs = new Dialogs();
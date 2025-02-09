import { BaseWidget, type BaseWidgetCfg } from "../core/core.widget.js";

/**
 * The configuration for the {@link  AjaxStatus AjaxStatus widget}.
 * You can access this configuration via {@link BaseWidget.cfg}. Please note that this
 * configuration is usually meant to be read-only and should not be modified.
 */
export interface AjaxStatusCfg extends BaseWidgetCfg {
    /**
     * Client-side callback for when the AJAX behavior completes, i.e. when the request finishes, irrespective of whether it
     * succeeded or failed.
     */
    complete: PrimeType.widget.AjaxStatus.PfAjaxCompleteCallback | jsf.ajax.OnEventCallback | jsf.ajax.OnErrorCallback;
    /**
     * Delay in milliseconds before displaying the AJAX status. Default is `0`, meaning immediate.
     */
    delay: number;
    /**
     * Client-side callback
     * for when the AJAX behavior fails, i.e. when the request fails.
     */
    error: PrimeType.widget.AjaxStatus.PfAjaxErrorCallback | jsf.ajax.OnErrorCallback;
    /**
     * Client-side callback for when the AJAX behavior completes, i.e. when the request finishes, irrespective of whether it
     * succeeded or failed.
     */
    facesComplete: PrimeType.widget.AjaxStatus.PfAjaxCompleteCallback | jsf.ajax.OnEventCallback | jsf.ajax.OnErrorCallback;
    /**
     * Client-side callback
     * for when the AJAX behavior starts, i.e. the request is about to be sent.
     */
    start: PrimeType.widget.AjaxStatus.PfAjaxStartCallback | jsf.ajax.OnEventCallback;
    /**
     * Client-side
     * callback for when the AJAX  behavior completes successfully, i.e. when the request succeeds.
     */
    success: PrimeType.widget.AjaxStatus.PfAjaxSuccessCallback | jsf.ajax.OnEventCallback;
}

/**
 * __PrimeFaces AjaxStatus Widget__
 * 
 * AjaxStatus is a global notifier for AJAX requests.
 * 
 * For the callbacks that can be set via the `onstart`, `onsuccess`, `onerror` and `oncomplete` attributes, see
 * {@link PrimeType.widget.AjaxStatus.PfAjaxStartCallback PfAjaxStartCallback},
 * {@link PrimeType.widget.AjaxStatus.PfAjaxSuccessCallback PfAjaxSuccessCallback},
 * {@link PrimeType.widget.AjaxStatus.PfAjaxErrorCallback PfAjaxErrorCallback}, and
 * {@link PrimeType.widget.AjaxStatus.PfAjaxCompleteCallback PfAjaxCompleteCallback}.
 * 
 * @typeParam Cfg Type of the configuration object.
 */
export class AjaxStatus<Cfg extends AjaxStatusCfg = AjaxStatusCfg> extends BaseWidget<Cfg> {
    private hasSuccessOrErrorFacet: boolean = false;
    private timeout: number | null = null;

    override init(cfg: PrimeType.widget.PartialWidgetCfg<Cfg>): void {
        super.init(cfg);
        this.hasSuccessOrErrorFacet = false;

        this.bind();
    }

    /**
     * Listen to the relevant events on the document element.
     */
    private bind(): void {
        var namespace = '.status' + this.id;
        $(document).on('pfAjaxStart' + namespace, (...args) => {
            this.timeout = PrimeFaces.queueTask(() => {
                this.trigger('start', args);
            }, this.cfg.delay);
        })
        .on('pfAjaxError' + namespace, (e, xhr, settings, error) => {
            this.trigger('error', [xhr, settings, error]);
        })
        .on('pfAjaxSuccess' + namespace, (e, xhr, settings) => {
            this.trigger('success', [xhr, settings]);
        })
        .on('pfAjaxComplete' + namespace, (e, xhr, settings, args) => {
            if(this.timeout && args && !args.redirect) {
                this.deleteTimeout();
            }
            this.trigger('complete', [xhr, settings, args]);
        });
        this.addDestroyListener(() => {
            $(document).off(namespace);
        });

        // also bind to JSF (f:ajax) events
        // NOTE: PF always fires "complete" as last event, whereas JSF last events are either "success" or "error"
        if (window.jsf && jsf.ajax) {
            jsf.ajax.addOnEvent((...args) => {
                const data = args[0];
                if(data.status === 'begin') {
                    this.timeout = PrimeFaces.queueTask(() => {
                        this.trigger('start', args);
                    }, this.cfg.delay);
                }
                else if(data.status === 'complete') {
                    // ignore PF complete event when JSF success/error event is fired right after
                }
                else if(data.status === 'success') {
                    this.deleteTimeout();
                    this.trigger('success', args);
                    this.trigger('facesComplete', args);
                }
            });

            jsf.ajax.addOnError((...args) => {
                this.deleteTimeout();
                this.trigger('error', args);
                this.trigger('facesComplete', args);
            });
        }
    }

    /**
     * Triggers the given event by invoking the event handler, usually defined on the `<p:ajaxStatus/>` tag.
     * @typeParam Event A name of one of the supported events that should be triggered.
     * @param event A name of one of the supported events that should be triggered.
     * @param args Arguments that are passed to the
     * event handler.
     */
    trigger<Event extends PrimeType.widget.AjaxStatus.AjaxStatusEventType>(
        event: Event, 
        args: Parameters<PrimeType.widget.AjaxStatus.EventToCallbackMap[Event]>
    ): void {
        var callback = this.cfg[event satisfies PrimeType.widget.AjaxStatus.AjaxStatusEventType];
        if (callback) {
            // @ts-expect-error
            callback.apply(document, args);
        }

        // Get the facet based on the event
        var facets = this.jq.children();
        var facet = facets.filter(this.toFacetId(event));
        var hasFacet = facet && facet.length > 0;

        // We have the following events:
        // 1) start
        // 2) success or error
        // 3) complete
        switch (event) {
            case 'start':
                // always hide other facets on start
                facets.hide();

                if (hasFacet) {
                    facet.show();
                }
                break;

            case 'success':
            case 'error':
                // we now expect that either a complete or success/error facet is defined
                // if no success/error is defined, lets just rely upon the complete-facet
                if (hasFacet) {
                    facets.hide();
                    facet.show();
                    this.hasSuccessOrErrorFacet = true;
                }
                break;

            case 'complete':
                // if the current request leads in a redirect, skip hiding the previous facet (in best case this is the start-facet)
                // when a success/error-facet is defined, this wont work as expected as the 'redirect' information is not available before
                var pfArgs = args[2] as PrimeType.ajax.PrimeFacesArgs | undefined;
                if (!pfArgs || pfArgs.redirect) {
                    return;
                }
                // Fallthrough intentional to handle both PF and JSF complete events
            case 'facesComplete':
                // #11824 hide the start facet if there was no error/success facet or there is a complete facet
                if (this.hasSuccessOrErrorFacet === false || hasFacet) {
                    facets.hide();
                }
                // Show complete-facet if defined
                if (hasFacet) {
                    facet.show();
                }
                break;
        }
    }

    /**
     * Finds the facet ID of the given event.
     * @param event One of the supported event
     * @return {string} The ID of the facet element for the given event
     */
    private toFacetId(event: PrimeType.widget.AjaxStatus.AjaxStatusEventType): string {
        if (event === 'facesComplete') {
            event = 'complete';
        }
        return this.jqId + '_' + event;
    }

    /**
     * Clears the ste-timeout timer for the delay.
     */
    private deleteTimeout() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }
}
/**
 * The configuration for the {@link  Messages} widget.
 * 
 * You can access this configuration via {@link Messages.cfg | cfg}. Please note that this
 * configuration is usually meant to be read-only and should not be modified.
 */
export interface MessagesCfg extends PrimeType.widget.BaseWidgetCfg {
}

/**
 * __PrimeFaces Messages Widget__
 * 
 * Messages is a pre-skinned extended version of the standard Jakarta Faces messages component.
 * 
 * @typeParam Cfg Type of the configuration object.
 */
export class Messages<Cfg extends MessagesCfg = MessagesCfg> extends PrimeFaces.widget.BaseWidget<Cfg> {
    /**
     * The DOM element for the icon that closes this panel.
     */
    closer: JQuery = $();

    override init(cfg: PrimeType.widget.PartialWidgetCfg<Cfg>): void {
        super.init(cfg);
        this.closer = $('.ui-messages-close');
        PrimeFaces.skinCloseAction(this.closer);
    }

    /**
     * Creates the HTML elements for the given faces message, and adds it to the DOM.
     * @param msg A message to translate into an HTML element.
     */
    appendMessage(msg: PrimeType.FacesMessage): void {
        const closeLabel = this.getAriaLabel('close');

        let severityContainer =  this.jq.children('div.ui-messages-' + msg.severity);
        if (severityContainer.length === 0) {
            severityContainer = this.jq.append(
                 '<div class="ui-messages-' + msg.severity + '">' +
                    '<a href="#" class="ui-messages-close" onclick="$(this).parent().slideUp();return false;" role="button" aria-label="'+closeLabel+'">' +
                        '<span class="ui-icon ui-icon-close"></span>' +
                    '</a>' +
                    '<span class="ui-messages-' + msg.severity + '-icon"></span>' +
                    '<ul>' +

                    '</ul>' +
                '</div>');
        }

        severityContainer.find('ul').append(
            '<li>' +
                '<span class="ui-messages-' + msg.severity + '-summary">' + (msg.summary ? msg.summary : '') + '</span>' +
                '<span class="ui-messages-' + msg.severity + '-detail">' + (msg.detail ? msg.detail : '') + '</span>' +
            '</li>');
    }

    /**
     * Clears all current messages from the DOM.
     */
    clearMessages(): void {
        this.jq.children().remove();
    }
}
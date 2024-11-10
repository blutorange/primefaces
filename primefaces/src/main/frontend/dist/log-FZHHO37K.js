import {
  BaseWidget
} from "./chunk-HGD6GSK5.js";
import "./chunk-YRJTWU7C.js";

// src/log/log.js
var Log = class extends BaseWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    this.header = this.jq.children(".ui-log-header");
    this.content = this.jq.children(".ui-log-content");
    this.itemsContainer = this.content.find(".ui-log-items");
    this.filters = this.header.children(".ui-log-button");
    this.severity = "all";
    var _self = this;
    this.jq.draggable({ handle: this.header });
    this.jq.zIndex(PrimeFaces.nextZindex());
    this.header.on("mousedown", function() {
      _self.jq.zIndex(PrimeFaces.nextZindex());
    });
    this.bindEvents();
    this.jq.appendTo("body");
    PrimeFaces.logger = this;
  }
  /**
   * Sets up all event listeners that are required by this widget.
   * @private
   */
  bindEvents() {
    var _self = this;
    this.header.children(".ui-log-button").on("mouseover", function() {
      var el = $(this);
      if (!el.hasClass("ui-state-active"))
        $(this).addClass("ui-state-hover");
    }).on("mouseout", function() {
      $(this).removeClass("ui-state-hover");
    });
    this.header.children(".ui-log-clear").on("click", function(e) {
      _self.itemsContainer.html("");
      _self.filters.filter(".ui-state-active").removeClass("ui-state-active");
      _self.filters.filter(".ui-log-all").addClass("ui-state-active");
      _self.severity = "all";
      e.preventDefault();
    });
    this.header.children(".ui-log-all").on("click", function(e) {
      _self.itemsContainer.children().show();
      _self.filters.filter(".ui-state-active").removeClass("ui-state-active");
      $(this).addClass("ui-state-active").removeClass("ui-state-hover");
      _self.severity = "all";
      e.preventDefault();
    });
    this.header.children(".ui-log-info").on("click", function(e) {
      _self.handleFilterClick(e, ".ui-log-item-info", "info", $(this));
    });
    this.header.children(".ui-log-warn").on("click", function(e) {
      _self.handleFilterClick(e, ".ui-log-item-warn", "warn", $(this));
    });
    this.header.children(".ui-log-debug").on("click", function(e) {
      _self.handleFilterClick(e, ".ui-log-item-debug", "debug", $(this));
    });
    this.header.children(".ui-log-error").on("click", function(e) {
      _self.handleFilterClick(e, ".ui-log-item-error", "error", $(this));
    });
  }
  /**
   * Logs the given message at the `info` level.
   * @param {string} msg Message to log
   */
  info(msg) {
    this.add(msg, "info", "ui-icon-info");
  }
  /**
   * Logs the given message at the `warn` level.
   * @param {string} msg Message to log
   */
  warn(msg) {
    this.add(msg, "warn", "ui-icon-notice");
  }
  /**
   * Logs the given message at the `debug` level.
   * @param {string} msg Message to log
   */
  debug(msg) {
    this.add(msg, "debug", "ui-icon-search");
  }
  /**
   * Logs the given message at the `error` level.
   * @param {string} msg Message to log
   */
  error(msg) {
    this.add(msg, "error", "ui-icon-alert");
  }
  /**
   * Logs a message at the given severity level.
   * @param {string} msg Message to log
   * @param {PrimeFaces.widget.Log.Severity} severity Severity of the log message
   * @param {string} icon Icon to show near the log message
   */
  add(msg, severity, icon) {
    var visible = this.severity == severity || this.severity == "all", style = visible ? "display:block" : "display:none";
    var item = '<li class="ui-log-item ui-log-item-' + severity + ' ui-helper-clearfix" style="' + style + '"><span class="ui-icon ' + icon + '"></span>' + (/* @__PURE__ */ new Date()).toLocaleString() + " : " + PrimeFaces.escapeHTML(msg) + "</li>";
    this.itemsContainer.append(item);
  }
  /**
   * Hides all log messages except those at the given severity level
   * @param {PrimeFaces.widget.Log.Severity} severity Severity of the log messages to show
   */
  filter(severity) {
    this.itemsContainer.children().hide().filter(severity).show();
  }
  /**
   * Callback for when a click occurred on the log message header.
   * @private
   * @param {JQuery.TriggeredEvent} event The event that occurred.
   * @param {string} severityClass Class for the severity of the log message.
   * @param {PrimeFaces.widget.Log.Severity} severity Severity of the log message. 
   * @param {JQuery} button The button that was pressed.
   */
  handleFilterClick(event, severityClass, severity, button) {
    this.filter(severityClass);
    this.filters.filter(".ui-state-active").removeClass("ui-state-active");
    button.addClass("ui-state-active").removeClass("ui-state-hover");
    this.severity = severity;
    event.preventDefault();
  }
  /**
   * Shows all log messages.
   */
  show() {
    this.jq.show();
  }
  /**
   * Hides all log messages.
   */
  hide() {
    this.jq.hide();
  }
};
export {
  Log
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2xvZy9sb2cuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IEJhc2VXaWRnZXQgfSBmcm9tIFwiLi4vY29yZS9jb3JlLndpZGdldC5qc1wiO1xuXG4vKipcbiAqIF9fUHJpbWVGYWNlcyBMb2cgV2lkZ2V0X19cbiAqIFxuICogTG9nIGNvbXBvbmVudCBpcyBhIHZpc3VhbCBjb25zb2xlIHRvIGRpc3BsYXkgbG9ncyBvbiBKU0YgcGFnZXMuXG4gKiBcbiAqIFRoZSBMb2cgQVBJIGlzIGFsc28gYXZhaWxhYmxlIHZpYSBnbG9iYWwgUHJpbWVGYWNlcyBvYmplY3QgaW4gY2FzZSB5b3XigJlkIGxpa2UgdG8gdXNlIHRoZSBsb2cgY29tcG9uZW50IHRvIGRpc3BsYXlcbiAqIHlvdXIgbG9nczpcbiAqIFxuICogYGBgamF2YXNjcmlwdFxuICogUHJpbWVGYWNlcy5pbmZvKFwiSW5mbyBtZXNzYWdlXCIpO1xuICogUHJpbWVGYWNlcy5kZWJ1ZyhcIkRlYnVnIG1lc3NhZ2VcIik7XG4gKiBQcmltZUZhY2VzLndhcm4oXCJXYXJuaW5nIG1lc3NhZ2VcIik7XG4gKiBQcmltZUZhY2VzLmVycm9yKFwiRXJyb3IgbWVzc2FnZVwiKTtcbiAqIGBgYFxuICogXG4gKiBAdHlwZWRlZiB7XCJhbGxcIiB8IFwiaW5mb1wiIHwgXCJ3YXJuXCIgfCBcImRlYnVnXCIgfCBcImVycm9yXCJ9IFByaW1lRmFjZXMud2lkZ2V0LkxvZy5TZXZlcml0eSBBdmFpbGFibGUgc2V2ZXJpdHkgbGV2ZWxzIGZvciBsb2cgbWVzc2FnZXMgdXNlZCBieVxuICogdGhlIGBMb2dgIHdpZGdldC5cbiAqIFxuICogQHByb3Age0pRdWVyeX0gY29udGVudCBUaGUgRE9NIGVsZW1lbnQgZm9yIHRoZSBjb250ZW50IHdpdGggdGhlIGxvZyBtZXNzYWdlc1xuICogQHByb3Age0pRdWVyeX0gaGVhZGVyIFRoZSBET00gZWxlbWVudCBmb3IgdGhlIGhlYWRlclxuICogQHByb3Age0pRdWVyeX0gaXRlbXNDb250YWluZXIgVGhlIERPTSBlbGVtZW50IGZvciB0aGUgaXRlbXMgY29udGFpbmVyXG4gKiBAcHJvcCB7SlF1ZXJ5fSBmaWx0ZXJzIFRoZSBET00gZWxlbWVudHMgZm9yIHRoZSBmaWx0ZXIgYnV0dG9uc1xuICogQHByb3Age1ByaW1lRmFjZXMud2lkZ2V0LkxvZy5TZXZlcml0eX0gc2V2ZXJpdHkgVGhlIGN1cnJlbnQgc2V2ZXJpdHkgbGV2ZWwgdGhhdCBjb250cm9scyB3aGljaCBsb2cgbWVzc2FnZXMgYXJlIHNob3duXG4gKiBcbiAqIEBpbnRlcmZhY2Uge1ByaW1lRmFjZXMud2lkZ2V0LkxvZ0NmZ30gY2ZnIFRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUge0BsaW5rICBMb2d8TG9nIHdpZGdldH0uIFlvdSBjYW4gYWNjZXNzIHRoaXNcbiAqIGNvbmZpZ3VyYXRpb24gdmlhIHtAbGluayBQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0LmNmZ3xCYXNlV2lkZ2V0LmNmZ30uIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBjb25maWd1cmF0aW9uIGlzXG4gKiB1c3VhbGx5IG1lYW50IHRvIGJlIHJlYWQtb25seSBhbmQgc2hvdWxkIG5vdCBiZSBtb2RpZmllZC5cbiAqIEBleHRlbmRzIHtQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0Q2ZnfSBjZmdcbiAqL1xuZXhwb3J0IGNsYXNzIExvZyBleHRlbmRzIEJhc2VXaWRnZXQge1xuICAgIFxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLlBhcnRpYWxXaWRnZXRDZmc8VENmZz59IGNmZ1xuICAgICAqL1xuICAgIGluaXQoY2ZnKSB7XG4gICAgICAgIHN1cGVyLmluaXQoY2ZnKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaGVhZGVyID0gdGhpcy5qcS5jaGlsZHJlbignLnVpLWxvZy1oZWFkZXInKTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5qcS5jaGlsZHJlbignLnVpLWxvZy1jb250ZW50Jyk7XG4gICAgICAgIHRoaXMuaXRlbXNDb250YWluZXIgPSB0aGlzLmNvbnRlbnQuZmluZCgnLnVpLWxvZy1pdGVtcycpO1xuICAgICAgICB0aGlzLmZpbHRlcnMgPSB0aGlzLmhlYWRlci5jaGlsZHJlbignLnVpLWxvZy1idXR0b24nKTtcbiAgICAgICAgdGhpcy5zZXZlcml0eSA9ICdhbGwnO1xuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vbWFrZSBkcmFnZ2FibGVcbiAgICAgICAgdGhpcy5qcS5kcmFnZ2FibGUoe2hhbmRsZTp0aGlzLmhlYWRlcn0pO1xuICAgICAgICBcbiAgICAgICAgLy96LWluZGV4XG4gICAgICAgIHRoaXMuanEuekluZGV4KFByaW1lRmFjZXMubmV4dFppbmRleCgpKTtcbiAgICAgICAgdGhpcy5oZWFkZXIub24oXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfc2VsZi5qcS56SW5kZXgoUHJpbWVGYWNlcy5uZXh0WmluZGV4KCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL2F0dGFjaCBldmVudHNcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgLy9hcHBlbmQgdG8gYm9keVxuICAgICAgICB0aGlzLmpxLmFwcGVuZFRvKCdib2R5Jyk7XG5cbiAgICAgICAgLy9hdHRhY2hcbiAgICAgICAgUHJpbWVGYWNlcy5sb2dnZXIgPSB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYWxsIGV2ZW50IGxpc3RlbmVycyB0aGF0IGFyZSByZXF1aXJlZCBieSB0aGlzIHdpZGdldC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy92aXN1YWxzXG4gICAgICAgIHRoaXMuaGVhZGVyLmNoaWxkcmVuKCcudWktbG9nLWJ1dHRvbicpLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGlmKCFlbC5oYXNDbGFzcygndWktc3RhdGUtYWN0aXZlJykpXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygndWktc3RhdGUtaG92ZXInKTtcbiAgICAgICAgfSkub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWhvdmVyJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vY2xlYXJcbiAgICAgICAgdGhpcy5oZWFkZXIuY2hpbGRyZW4oJy51aS1sb2ctY2xlYXInKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIF9zZWxmLml0ZW1zQ29udGFpbmVyLmh0bWwoJycpO1xuICAgICAgICAgICAgX3NlbGYuZmlsdGVycy5maWx0ZXIoJy51aS1zdGF0ZS1hY3RpdmUnKS5yZW1vdmVDbGFzcygndWktc3RhdGUtYWN0aXZlJyk7XG4gICAgICAgICAgICBfc2VsZi5maWx0ZXJzLmZpbHRlcignLnVpLWxvZy1hbGwnKS5hZGRDbGFzcygndWktc3RhdGUtYWN0aXZlJyk7XG4gICAgICAgICAgICBfc2VsZi5zZXZlcml0eSA9ICdhbGwnO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL2FsbFxuICAgICAgICB0aGlzLmhlYWRlci5jaGlsZHJlbignLnVpLWxvZy1hbGwnKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIF9zZWxmLml0ZW1zQ29udGFpbmVyLmNoaWxkcmVuKCkuc2hvdygpO1xuICAgICAgICAgICAgX3NlbGYuZmlsdGVycy5maWx0ZXIoJy51aS1zdGF0ZS1hY3RpdmUnKS5yZW1vdmVDbGFzcygndWktc3RhdGUtYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd1aS1zdGF0ZS1hY3RpdmUnKS5yZW1vdmVDbGFzcygndWktc3RhdGUtaG92ZXInKTtcbiAgICAgICAgICAgIF9zZWxmLnNldmVyaXR5ID0gJ2FsbCc7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vaW5mb1xuICAgICAgICB0aGlzLmhlYWRlci5jaGlsZHJlbignLnVpLWxvZy1pbmZvJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBfc2VsZi5oYW5kbGVGaWx0ZXJDbGljayhlLCAnLnVpLWxvZy1pdGVtLWluZm8nLCAnaW5mbycsICQodGhpcykpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL3dhcm5cbiAgICAgICAgdGhpcy5oZWFkZXIuY2hpbGRyZW4oJy51aS1sb2ctd2FybicpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgX3NlbGYuaGFuZGxlRmlsdGVyQ2xpY2soZSwgJy51aS1sb2ctaXRlbS13YXJuJywgJ3dhcm4nLCAkKHRoaXMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9kZWJ1Z1xuICAgICAgICB0aGlzLmhlYWRlci5jaGlsZHJlbignLnVpLWxvZy1kZWJ1ZycpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgX3NlbGYuaGFuZGxlRmlsdGVyQ2xpY2soZSwgJy51aS1sb2ctaXRlbS1kZWJ1ZycsICdkZWJ1ZycsICQodGhpcykpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL2Vycm9yXG4gICAgICAgIHRoaXMuaGVhZGVyLmNoaWxkcmVuKCcudWktbG9nLWVycm9yJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBfc2VsZi5oYW5kbGVGaWx0ZXJDbGljayhlLCAnLnVpLWxvZy1pdGVtLWVycm9yJywgJ2Vycm9yJywgJCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBMb2dzIHRoZSBnaXZlbiBtZXNzYWdlIGF0IHRoZSBgaW5mb2AgbGV2ZWwuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1zZyBNZXNzYWdlIHRvIGxvZ1xuICAgICAqL1xuICAgIGluZm8obXNnKSB7XG4gICAgICAgIHRoaXMuYWRkKG1zZywgJ2luZm8nLCAndWktaWNvbi1pbmZvJyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIExvZ3MgdGhlIGdpdmVuIG1lc3NhZ2UgYXQgdGhlIGB3YXJuYCBsZXZlbC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbXNnIE1lc3NhZ2UgdG8gbG9nXG4gICAgICovXG4gICAgd2Fybihtc2cpIHtcbiAgICAgICAgdGhpcy5hZGQobXNnLCAnd2FybicsICd1aS1pY29uLW5vdGljZScpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBMb2dzIHRoZSBnaXZlbiBtZXNzYWdlIGF0IHRoZSBgZGVidWdgIGxldmVsLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgTWVzc2FnZSB0byBsb2dcbiAgICAgKi9cbiAgICBkZWJ1Zyhtc2cpIHtcbiAgICAgICAgdGhpcy5hZGQobXNnLCAnZGVidWcnLCAndWktaWNvbi1zZWFyY2gnKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9ncyB0aGUgZ2l2ZW4gbWVzc2FnZSBhdCB0aGUgYGVycm9yYCBsZXZlbC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbXNnIE1lc3NhZ2UgdG8gbG9nXG4gICAgICovXG4gICAgZXJyb3IobXNnKSB7XG4gICAgICAgIHRoaXMuYWRkKG1zZywgJ2Vycm9yJywgJ3VpLWljb24tYWxlcnQnKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogTG9ncyBhIG1lc3NhZ2UgYXQgdGhlIGdpdmVuIHNldmVyaXR5IGxldmVsLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgTWVzc2FnZSB0byBsb2dcbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMud2lkZ2V0LkxvZy5TZXZlcml0eX0gc2V2ZXJpdHkgU2V2ZXJpdHkgb2YgdGhlIGxvZyBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGljb24gSWNvbiB0byBzaG93IG5lYXIgdGhlIGxvZyBtZXNzYWdlXG4gICAgICovXG4gICAgYWRkKG1zZywgc2V2ZXJpdHksIGljb24pIHtcbiAgICAgICAgdmFyIHZpc2libGUgPSB0aGlzLnNldmVyaXR5ID09IHNldmVyaXR5IHx8IHRoaXMuc2V2ZXJpdHkgPT0gJ2FsbCcsXG4gICAgICAgIHN0eWxlID0gdmlzaWJsZSA/ICdkaXNwbGF5OmJsb2NrJyA6ICdkaXNwbGF5Om5vbmUnO1xuXG4gICAgICAgIHZhciBpdGVtID0gJzxsaSBjbGFzcz1cInVpLWxvZy1pdGVtIHVpLWxvZy1pdGVtLScgKyBzZXZlcml0eSArICcgdWktaGVscGVyLWNsZWFyZml4XCIgc3R5bGU9XCInICsgc3R5bGUgKyBcbiAgICAgICAgICAgICdcIj48c3BhbiBjbGFzcz1cInVpLWljb24gJyArIGljb24gKyAnXCI+PC9zcGFuPicgKyBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkgKyAnIDogJyAgKyBQcmltZUZhY2VzLmVzY2FwZUhUTUwobXNnKSArICc8L2xpPic7XG5cbiAgICAgICAgdGhpcy5pdGVtc0NvbnRhaW5lci5hcHBlbmQoaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZXMgYWxsIGxvZyBtZXNzYWdlcyBleGNlcHQgdGhvc2UgYXQgdGhlIGdpdmVuIHNldmVyaXR5IGxldmVsXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLndpZGdldC5Mb2cuU2V2ZXJpdHl9IHNldmVyaXR5IFNldmVyaXR5IG9mIHRoZSBsb2cgbWVzc2FnZXMgdG8gc2hvd1xuICAgICAqL1xuICAgIGZpbHRlcihzZXZlcml0eSkge1xuICAgICAgICB0aGlzLml0ZW1zQ29udGFpbmVyLmNoaWxkcmVuKCkuaGlkZSgpLmZpbHRlcihzZXZlcml0eSkuc2hvdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZvciB3aGVuIGEgY2xpY2sgb2NjdXJyZWQgb24gdGhlIGxvZyBtZXNzYWdlIGhlYWRlci5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7SlF1ZXJ5LlRyaWdnZXJlZEV2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBvY2N1cnJlZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2V2ZXJpdHlDbGFzcyBDbGFzcyBmb3IgdGhlIHNldmVyaXR5IG9mIHRoZSBsb2cgbWVzc2FnZS5cbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMud2lkZ2V0LkxvZy5TZXZlcml0eX0gc2V2ZXJpdHkgU2V2ZXJpdHkgb2YgdGhlIGxvZyBtZXNzYWdlLiBcbiAgICAgKiBAcGFyYW0ge0pRdWVyeX0gYnV0dG9uIFRoZSBidXR0b24gdGhhdCB3YXMgcHJlc3NlZC5cbiAgICAgKi9cbiAgICBoYW5kbGVGaWx0ZXJDbGljayhldmVudCwgc2V2ZXJpdHlDbGFzcywgc2V2ZXJpdHksIGJ1dHRvbikge1xuICAgICAgICB0aGlzLmZpbHRlcihzZXZlcml0eUNsYXNzKTtcbiAgICAgICAgdGhpcy5maWx0ZXJzLmZpbHRlcignLnVpLXN0YXRlLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1hY3RpdmUnKTtcbiAgICAgICAgYnV0dG9uLmFkZENsYXNzKCd1aS1zdGF0ZS1hY3RpdmUnKS5yZW1vdmVDbGFzcygndWktc3RhdGUtaG92ZXInKTtcbiAgICAgICAgdGhpcy5zZXZlcml0eSA9IHNldmVyaXR5O1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBTaG93cyBhbGwgbG9nIG1lc3NhZ2VzLlxuICAgICAqL1xuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuanEuc2hvdygpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBIaWRlcyBhbGwgbG9nIG1lc3NhZ2VzLlxuICAgICAqL1xuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuanEuaGlkZSgpO1xuICAgIH1cbiAgICBcbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7QUErQk8sSUFBTSxNQUFOLGNBQWtCLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPaEMsS0FBSyxLQUFLO0FBQ04sVUFBTSxLQUFLLEdBQUc7QUFFZCxTQUFLLFNBQVMsS0FBSyxHQUFHLFNBQVMsZ0JBQWdCO0FBQy9DLFNBQUssVUFBVSxLQUFLLEdBQUcsU0FBUyxpQkFBaUI7QUFDakQsU0FBSyxpQkFBaUIsS0FBSyxRQUFRLEtBQUssZUFBZTtBQUN2RCxTQUFLLFVBQVUsS0FBSyxPQUFPLFNBQVMsZ0JBQWdCO0FBQ3BELFNBQUssV0FBVztBQUNoQixRQUFJLFFBQVE7QUFHWixTQUFLLEdBQUcsVUFBVSxFQUFDLFFBQU8sS0FBSyxPQUFNLENBQUM7QUFHdEMsU0FBSyxHQUFHLE9BQU8sV0FBVyxXQUFXLENBQUM7QUFDdEMsU0FBSyxPQUFPLEdBQUcsYUFBYSxXQUFXO0FBQ25DLFlBQU0sR0FBRyxPQUFPLFdBQVcsV0FBVyxDQUFDO0FBQUEsSUFDM0MsQ0FBQztBQUdELFNBQUssV0FBVztBQUdoQixTQUFLLEdBQUcsU0FBUyxNQUFNO0FBR3ZCLGVBQVcsU0FBUztBQUFBLEVBQ3hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLGFBQWE7QUFDVCxRQUFJLFFBQVE7QUFHWixTQUFLLE9BQU8sU0FBUyxnQkFBZ0IsRUFBRSxHQUFHLGFBQWEsV0FBVztBQUM5RCxVQUFJLEtBQUssRUFBRSxJQUFJO0FBQ2YsVUFBRyxDQUFDLEdBQUcsU0FBUyxpQkFBaUI7QUFDN0IsVUFBRSxJQUFJLEVBQUUsU0FBUyxnQkFBZ0I7QUFBQSxJQUN6QyxDQUFDLEVBQUUsR0FBRyxZQUFZLFdBQVc7QUFDekIsUUFBRSxJQUFJLEVBQUUsWUFBWSxnQkFBZ0I7QUFBQSxJQUN4QyxDQUFDO0FBR0QsU0FBSyxPQUFPLFNBQVMsZUFBZSxFQUFFLEdBQUcsU0FBUyxTQUFTLEdBQUc7QUFDMUQsWUFBTSxlQUFlLEtBQUssRUFBRTtBQUM1QixZQUFNLFFBQVEsT0FBTyxrQkFBa0IsRUFBRSxZQUFZLGlCQUFpQjtBQUN0RSxZQUFNLFFBQVEsT0FBTyxhQUFhLEVBQUUsU0FBUyxpQkFBaUI7QUFDOUQsWUFBTSxXQUFXO0FBQ2pCLFFBQUUsZUFBZTtBQUFBLElBQ3JCLENBQUM7QUFHRCxTQUFLLE9BQU8sU0FBUyxhQUFhLEVBQUUsR0FBRyxTQUFTLFNBQVMsR0FBRztBQUN4RCxZQUFNLGVBQWUsU0FBUyxFQUFFLEtBQUs7QUFDckMsWUFBTSxRQUFRLE9BQU8sa0JBQWtCLEVBQUUsWUFBWSxpQkFBaUI7QUFDdEUsUUFBRSxJQUFJLEVBQUUsU0FBUyxpQkFBaUIsRUFBRSxZQUFZLGdCQUFnQjtBQUNoRSxZQUFNLFdBQVc7QUFDakIsUUFBRSxlQUFlO0FBQUEsSUFDckIsQ0FBQztBQUdELFNBQUssT0FBTyxTQUFTLGNBQWMsRUFBRSxHQUFHLFNBQVMsU0FBUyxHQUFHO0FBQ3pELFlBQU0sa0JBQWtCLEdBQUcscUJBQXFCLFFBQVEsRUFBRSxJQUFJLENBQUM7QUFBQSxJQUNuRSxDQUFDO0FBR0QsU0FBSyxPQUFPLFNBQVMsY0FBYyxFQUFFLEdBQUcsU0FBUyxTQUFTLEdBQUc7QUFDekQsWUFBTSxrQkFBa0IsR0FBRyxxQkFBcUIsUUFBUSxFQUFFLElBQUksQ0FBQztBQUFBLElBQ25FLENBQUM7QUFHRCxTQUFLLE9BQU8sU0FBUyxlQUFlLEVBQUUsR0FBRyxTQUFTLFNBQVMsR0FBRztBQUMxRCxZQUFNLGtCQUFrQixHQUFHLHNCQUFzQixTQUFTLEVBQUUsSUFBSSxDQUFDO0FBQUEsSUFDckUsQ0FBQztBQUdELFNBQUssT0FBTyxTQUFTLGVBQWUsRUFBRSxHQUFHLFNBQVMsU0FBUyxHQUFHO0FBQzFELFlBQU0sa0JBQWtCLEdBQUcsc0JBQXNCLFNBQVMsRUFBRSxJQUFJLENBQUM7QUFBQSxJQUNyRSxDQUFDO0FBQUEsRUFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxLQUFLLEtBQUs7QUFDTixTQUFLLElBQUksS0FBSyxRQUFRLGNBQWM7QUFBQSxFQUN4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxLQUFLLEtBQUs7QUFDTixTQUFLLElBQUksS0FBSyxRQUFRLGdCQUFnQjtBQUFBLEVBQzFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLE1BQU0sS0FBSztBQUNQLFNBQUssSUFBSSxLQUFLLFNBQVMsZ0JBQWdCO0FBQUEsRUFDM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsTUFBTSxLQUFLO0FBQ1AsU0FBSyxJQUFJLEtBQUssU0FBUyxlQUFlO0FBQUEsRUFDMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFBLElBQUksS0FBSyxVQUFVLE1BQU07QUFDckIsUUFBSSxVQUFVLEtBQUssWUFBWSxZQUFZLEtBQUssWUFBWSxPQUM1RCxRQUFRLFVBQVUsa0JBQWtCO0FBRXBDLFFBQUksT0FBTyx3Q0FBd0MsV0FBVyxpQ0FBaUMsUUFDM0YsNEJBQTRCLE9BQU8sZUFBYyxvQkFBSSxLQUFLLEdBQUUsZUFBZSxJQUFJLFFBQVMsV0FBVyxXQUFXLEdBQUcsSUFBSTtBQUV6SCxTQUFLLGVBQWUsT0FBTyxJQUFJO0FBQUEsRUFDbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsT0FBTyxVQUFVO0FBQ2IsU0FBSyxlQUFlLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxRQUFRLEVBQUUsS0FBSztBQUFBLEVBQ2hFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBVUEsa0JBQWtCLE9BQU8sZUFBZSxVQUFVLFFBQVE7QUFDdEQsU0FBSyxPQUFPLGFBQWE7QUFDekIsU0FBSyxRQUFRLE9BQU8sa0JBQWtCLEVBQUUsWUFBWSxpQkFBaUI7QUFDckUsV0FBTyxTQUFTLGlCQUFpQixFQUFFLFlBQVksZ0JBQWdCO0FBQy9ELFNBQUssV0FBVztBQUNoQixVQUFNLGVBQWU7QUFBQSxFQUN6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsT0FBTztBQUNILFNBQUssR0FBRyxLQUFLO0FBQUEsRUFDakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLE9BQU87QUFDSCxTQUFLLEdBQUcsS0FBSztBQUFBLEVBQ2pCO0FBRUo7IiwKICAibmFtZXMiOiBbXQp9Cg==

import {
  require_moment
} from "./chunk-DU4T2FPE.js";
import {
  require_jquery_browser
} from "./chunk-EGND3OJM.js";
import "./chunk-25GSMOF2.js";
import {
  init_jquery_module,
  jquery_module_default
} from "./chunk-AGY32TFX.js";
import {
  getWidgetIfPresent,
  loadWidget
} from "./chunk-HGD6GSK5.js";
import {
  __async,
  __toESM
} from "./chunk-YRJTWU7C.js";

// ../../../../../../.yarn/berry/cache/js-cookie-npm-3.0.5-8fc8fcc9b4-10c0.zip/node_modules/js-cookie/dist/js.cookie.mjs
function assign(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}
var defaultConverter = {
  read: function(value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function init(converter, defaultAttributes) {
  function set(name, value, attributes) {
    if (typeof document === "undefined") {
      return;
    }
    attributes = assign({}, defaultAttributes, attributes);
    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }
    name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
    var stringifiedAttributes = "";
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue;
      }
      stringifiedAttributes += "; " + attributeName;
      if (attributes[attributeName] === true) {
        continue;
      }
      stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
    }
    return document.cookie = name + "=" + converter.write(value, name) + stringifiedAttributes;
  }
  function get(name) {
    if (typeof document === "undefined" || arguments.length && !name) {
      return;
    }
    var cookies = document.cookie ? document.cookie.split("; ") : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split("=");
      var value = parts.slice(1).join("=");
      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);
        if (name === found) {
          break;
        }
      } catch (e) {
      }
    }
    return name ? jar[name] : jar;
  }
  return Object.create(
    {
      set,
      get,
      remove: function(name, attributes) {
        set(
          name,
          "",
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function(attributes) {
        return init(this.converter, assign({}, this.attributes, attributes));
      },
      withConverter: function(converter2) {
        return init(assign({}, this.converter, converter2), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  );
}
var api = init(defaultConverter, { path: "/" });

// src/core/core.js
(function(window2) {
  if (window2.PrimeFaces) {
    window2.PrimeFaces.debug("PrimeFaces already loaded, ignoring duplicate execution.");
    return;
  }
  var PrimeFaces2 = {
    /**
     * Creates an ID to a CSS ID selector that matches elements with that ID. For example:
     * ```
     * PrimeFaces.escapeClientId("form:input"); // => "#form\:input"
     * PrimeFaces.escapeClientId("form#input"); // => "#form#input"
     * ```
     *
     * __Please note that this method does not escape all characters that need to be escaped and will not work with arbitrary IDs__
     * @param {string} id ID to convert.
     * @return {string} A CSS ID selector for the given ID.
     */
    escapeClientId: function(id) {
      return "#" + id.replace(/:/g, "\\:");
    },
    /**
     * Registeres a listener that will be called as soon as the given element was loaded completely. Please note the
     * listener may be called synchronously (immediately) or asynchronously, depending on whether the element is
     * already loaded.
     * @param {JQuery} element Element to wait for
     * @param {() => void} listener Listener to call once the element is loaded
     */
    onElementLoad: function(element, listener) {
      if (element.prop("complete")) {
        listener();
      } else {
        element.on("load", listener);
      }
    },
    /**
     * Finds a widget in the current page with the given ID.
     * @param {string} id ID of the widget to retrieve.
     * @return {PrimeFaces.widget.BaseWidget | null} The widget with the given ID, of `null` if no such widget was
     * found.
     */
    getWidgetById: function(id) {
      for (var widgetVar in PrimeFaces2.widgets) {
        var widget2 = PrimeFaces2.widgets[widgetVar];
        if (widget2 && widget2.id === id) {
          return widget2;
        }
      }
      return null;
    },
    /**
     * Finds all widgets in the current page that are of the given type.
     * @template {new(...args: never[]) => unknown} TWidget Type of the widgets of interest, e.g.
     * `PrimeFaces.widget.DataTable`.
     * @param {TWidget} type The (proto)type of the widgets of interest, e.g., `PrimeFaces.widget.DataTable`.
     * @return  {InstanceType<TWidget>[]} An array of widgets that are of the requested type. If no suitable widgets
     * are found on the current page, an empty array will be returned.
     */
    getWidgetsByType: function(type) {
      return $.map(this.widgets, function(widget2, key) {
        return type.prototype.isPrototypeOf(widget2) ? widget2 : null;
      });
    },
    /**
     * Gets the form by id or the closest form if the id is not a form itself.
     * In AJAX we also have a fallback for the first form in DOM, this should not be used here.
     *
     * @param {string} id ID of the component to get the closest form or if its a form itself
     * @return {JQuery} the form or NULL if no form found
     */
    getClosestForm: function(id) {
      var form = $(PrimeFaces2.escapeClientId(id));
      if (!form.is("form")) {
        form = form.closest("form");
      }
      if (!form) {
        PrimeFaces2.error("Form element could not be found for id: " + id);
      }
      return form;
    },
    /**
     * Adds hidden input elements to the given form. For each key-value pair, a new hidden input element is created
     * with the given value and the key used as the name.
     * @param {string} parent The ID of a FORM element.
     * @param {Record<string, string>} params An object with key-value pairs.
     * @return {typeof PrimeFaces} This object for chaining.
     */
    addSubmitParam: function(parent, params) {
      var form = PrimeFaces2.getClosestForm(parent);
      for (var key in params) {
        form.append('<input type="hidden" name="' + PrimeFaces2.escapeHTML(key) + '" value="' + PrimeFaces2.escapeHTML(params[key]) + '" class="ui-submit-param"></input>');
      }
      return this;
    },
    /**
     * Submits the given form, and clears all `ui-submit-param`s after that to prevent dom caching issues.
     *
     * If a target is given, it is set on the form temporarily before it is submitted. Afterwards, the original
     * target attribute of the form is restored.
     * @param {string} formId ID of the FORM element.
     * @param {string} [target] The target attribute to use on the form during the submit process.
     */
    submit: function(formId, target) {
      var form = PrimeFaces2.getClosestForm(formId);
      var prevTarget;
      if (target) {
        prevTarget = form.attr("target");
        form.attr("target", target);
      }
      form.trigger("submit");
      form.children("input.ui-submit-param").remove();
      if (target) {
        if (prevTarget !== void 0) {
          form.attr("target", prevTarget);
        } else {
          form.removeAttr("target");
        }
      }
    },
    /**
     * Aborts all pending AJAX requests. This includes both requests that were already sent but did not receive a
     * response yet, as well as requests that are waiting in the queue and have not been sent yet.
     */
    abortXHRs: function() {
      PrimeFaces2.ajax.Queue.abortAll();
    },
    /**
     * Attaches the given behaviors to the element. For each behavior, an event listener is registered on the
     * element. Then, when the event is triggered, the behavior callback is invoked.
     * @param {JQuery} element The element for which to attach the behaviors.
     * @param {Record<string, (this: JQuery, event: JQuery.TriggeredEvent) => void>} behaviors An object with an event name
     * as the key and event handlers for that event as the value. Each event handler is called with the given
     * element as the this context and the event that occurred as the first argument.
     */
    attachBehaviors: function(element, behaviors) {
      $.each(behaviors, function(event, fn) {
        element.on(event, function(e) {
          fn.call(element, e);
        });
      });
    },
    /**
     * Fetches the value of a cookie by its name
     * @param {string} name Name of a cookie
     * @return {string | undefined} The value of the given cookie, or `undefined` if no such cookie exists
     */
    getCookie: function(name) {
      return api.get(name);
    },
    /**
     * Sets the value of a specified cookie with additional security configurations.
     * If the page is served over HTTPS and cookies are configured to be secure in the settings,
     * the secure flag will be set. The SameSite attribute is set based on the settings or defaults to 'Lax'.
     * @param {string} name The name of the cookie.
     * @param {string} value The value to set for the cookie.
     * @param {Partial<Cookies.CookieAttributes>} [cfg] Configuration for this cookie: when it expires, its
     * paths and domain and whether it is secure cookie.
     */
    setCookie: function(name, value, cfg) {
      cfg.secure = location.protocol === "https:" && PrimeFaces2.settings.cookiesSecure;
      cfg.sameSite = PrimeFaces2.settings.cookiesSameSite || "Lax";
      if (!cfg.secure && cfg.sameSite === "None") {
        cfg.sameSite = "Lax";
      }
      api.set(name, value, cfg);
    },
    /**
     * Deletes the given cookie.
     * @param {string} name Name of the cookie to delete
     * @param {Partial<Cookies.CookieAttributes>} [cfg] The cookie configuration used to set the cookie.
     */
    deleteCookie: function(name, cfg) {
      api.remove(name, cfg);
    },
    /**
     * Checks whether cookies are enabled in the current browser.
     * @return {boolean} `true` if cookies are enabled and can be used, `false` otherwise.
     */
    cookiesEnabled: function() {
      if (navigator.cookieEnabled) {
        return true;
      } else {
        document.cookie = "testcookie";
        return document.cookie.includes("testcookie");
      }
    },
    /**
     * Generates a unique key for using in HTML5 local storage by combining the context, view, id, and key.
     * @param {string} id ID of the component
     * @param {string} key a unique key name such as the component name
     * @param {boolean} global if global then do not include the view id
     * @return {string} the generated key comprising of context + view + id + key
     */
    createStorageKey: function(id, key, global) {
      var sk = PrimeFaces2.settings.contextPath.replace(/\//g, "-") + (global ? "" : PrimeFaces2.settings.viewId.replace(/\//g, "-")) + id + "-" + key;
      return sk.toLowerCase();
    },
    /**
     * Updates the class of the given INPUT element to indicate whether the element contains data or not. Used for
     * example in floating labels.
     * @param {JQuery} input The text input to modify
     * @param {JQuery} parent The parent element of the input.
     */
    updateFilledState: function(input, parent) {
      var value = input.val();
      if (typeof value == "undefined") {
        return;
      }
      if (value.length) {
        input.addClass("ui-state-filled");
        if (parent.is("span:not('.ui-float-label')")) {
          parent.addClass("ui-inputwrapper-filled");
        }
      } else {
        input.removeClass("ui-state-filled");
        parent.removeClass("ui-inputwrapper-filled");
      }
    },
    /**
     * INPUT elements may have different states, such as `hovering` or `focused`. For each state, there is a
     * corresponding style class that is added to the input when it is in that state, such as `ui-state-hover` or
     * `ui-state-focus`. These classes are used by CSS rules for styling. This method sets up an input element so
     * that the classes are added correctly (by adding event listeners).
     * @param {JQuery} input INPUT element to skin
     * @return {typeof PrimeFaces} this for chaining
     */
    skinInput: function(input) {
      var parent = input.parent(), updateFilledStateOnBlur = function() {
        if (parent.hasClass("ui-inputwrapper-focus")) {
          parent.removeClass("ui-inputwrapper-focus");
        }
        PrimeFaces2.updateFilledState(input, parent);
      };
      PrimeFaces2.updateFilledState(input, parent);
      input.on("mouseenter", function() {
        $(this).addClass("ui-state-hover");
      }).on("mouseleave", function() {
        $(this).removeClass("ui-state-hover");
      }).on("focus", function() {
        $(this).addClass("ui-state-focus");
        if (parent.is("span:not('.ui-float-label')")) {
          parent.addClass("ui-inputwrapper-focus");
        }
      }).on("blur animationstart", function() {
        $(this).removeClass("ui-state-focus");
        if (input.hasClass("hasDatepicker") || input.attr("inputmode") === "numeric") {
          setTimeout(function() {
            updateFilledStateOnBlur();
          }, 150);
        } else {
          updateFilledStateOnBlur();
        }
      });
      if (input.is("textarea")) {
        input.attr("aria-multiline", true);
      }
      if (input.is('[class*="-filter"]')) {
        var ariaLabel = input.attr("aria-label");
        if (!ariaLabel) {
          input.attr("aria-label", PrimeFaces2.getLocaleLabel("filter"));
        }
      }
      return this;
    },
    /**
     * BUTTON elements may have different states, such as `hovering` or `focused`. For each state, there is a
     * corresponding style class that is added to the button when it is in that state, such as `ui-state-hover` or
     * `ui-state-focus`. These classes are used by CSS rules for styling. This method sets up a button element so
     * that the classes are added correctly (by adding event listeners).
     * @param {JQuery} button BUTTON element to skin
     * @return {typeof PrimeFaces} this for chaining
     */
    skinButton: function(button) {
      button.on("mouseover", function() {
        var el = $(this);
        if (!button.prop("disabled")) {
          el.addClass("ui-state-hover");
        }
      }).on("mouseout", function() {
        $(this).removeClass("ui-state-active ui-state-hover");
      }).on("mousedown", function() {
        var el = $(this);
        if (!button.prop("disabled")) {
          el.addClass("ui-state-active").removeClass("ui-state-hover");
        }
      }).on("mouseup", function() {
        $(this).removeClass("ui-state-active").addClass("ui-state-hover");
      }).on("focus", function() {
        $(this).addClass("ui-state-focus");
      }).on("blur", function() {
        $(this).removeClass("ui-state-focus ui-state-active");
      }).on("keydown", function(e) {
        if (e.code === "Space" || e.key === "Enter") {
          $(this).addClass("ui-state-active");
        }
      }).on("keyup", function() {
        $(this).removeClass("ui-state-active");
      });
      return this;
    },
    /**
     * There are many Close buttons in PF that should get aria-label="close" and role="button".
     * @param {JQuery} element BUTTON or LINK element
     * @return {JQuery} this for chaining
     */
    skinCloseAction: function(element) {
      if (!element || element.length === 0) return element;
      element.attr("aria-label", PrimeFaces2.getAriaLabel("close"));
      element.attr("role", "button");
      return element;
    },
    /**
     * Applies the inline AJAX status (ui-state-loading) to the given widget / button.
     * @param {PrimeFaces.widget.BaseWidget} [widget] the widget.
     * @param {JQuery} [button] The button DOM element.
     * @param {(widget: PrimeFaces.widget.BaseWidget, settings: JQuery.AjaxSettings) => boolean} [isXhrSource] Callback that checks if the widget is the source of the current AJAX request.
     */
    bindButtonInlineAjaxStatus: function(widget2, button, isXhrSource) {
      if (!isXhrSource) {
        isXhrSource = function(widget3, settings) {
          return PrimeFaces2.ajax.Utils.isXhrSource(widget3, settings);
        };
      }
      widget2.ajaxCount = 0;
      var namespace = "." + widget2.id;
      $(document).on("pfAjaxSend" + namespace, function(e, xhr, settings) {
        if (isXhrSource.call(this, widget2, settings)) {
          widget2.ajaxCount++;
          if (widget2.ajaxCount > 1) {
            return;
          }
          button.addClass("ui-state-loading");
          widget2.ajaxStart = Date.now();
          if (typeof widget2.disable === "function" && widget2.cfg.disableOnAjax !== false) {
            widget2.disable();
          }
          var loadIcon = $('<span class="ui-icon-loading ui-icon ui-c pi pi-spin pi-spinner"></span>');
          var uiIcon = button.find(".ui-icon");
          if (uiIcon.length) {
            var prefix = "ui-button-icon-";
            loadIcon.addClass(prefix + uiIcon.attr("class").includes(prefix + "left") ? "left" : "right");
          }
          button.prepend(loadIcon);
        }
      }).on("pfAjaxComplete" + namespace, function(e, xhr, settings, args) {
        if (isXhrSource.call(this, widget2, settings)) {
          widget2.ajaxCount--;
          if (widget2.ajaxCount > 0 || !args || args.redirect) {
            return;
          }
          PrimeFaces2.queueTask(
            function() {
              PrimeFaces2.buttonEndAjaxDisabled(widget2, button);
            },
            Math.max(PrimeFaces2.ajax.minLoadAnimation + widget2.ajaxStart - Date.now(), 0)
          );
          delete widget2.ajaxStart;
        }
      });
      widget2.addDestroyListener(function() {
        $(document).off(namespace);
      });
    },
    /**
     * Ends the AJAX disabled state.
     * @param {PrimeFaces.widget.BaseWidget} [widget] the widget.
     * @param {JQuery} [button] The button DOM element.
     */
    buttonEndAjaxDisabled: function(widget2, button) {
      button.removeClass("ui-state-loading");
      if (typeof widget2.enable === "function" && widget2.cfg.disableOnAjax !== false && !widget2.cfg.disabledAttr) {
        widget2.enable();
      }
      button.find(".ui-icon-loading").remove();
    },
    /**
     * SELECT elements may have different states, such as `hovering` or `focused`. For each state, there is a
     * corresponding style class that is added to the select when it is in that state, such as `ui-state-hover` or
     * `ui-state-focus`. These classes are used by CSS rules for styling. This method sets up a select element so
     * that the classes are added correctly (by adding event listeners).
     * @param {JQuery} select SELECT element to skin
     * @return {typeof PrimeFaces} this for chaining
     */
    skinSelect: function(select) {
      select.on("mouseover", function() {
        var el = $(this);
        if (!el.hasClass("ui-state-focus"))
          el.addClass("ui-state-hover");
      }).on("mouseout", function() {
        $(this).removeClass("ui-state-hover");
      }).on("focus", function() {
        $(this).addClass("ui-state-focus").removeClass("ui-state-hover");
      }).on("blur", function() {
        $(this).removeClass("ui-state-focus ui-state-hover");
      });
      return this;
    },
    /**
     * Logs the given message at the `info` level.
     * @param {string} log Message to log
     */
    info: function(log) {
      if (this.logger) {
        this.logger.info(log);
      }
      if (PrimeFaces2.isDevelopmentProjectStage() && window2.console) {
        console.info(log);
      }
    },
    /**
     * Logs the given message at the `debug` level.
     * @param {string} log Message to log
     */
    debug: function(log) {
      if (this.logger) {
        this.logger.debug(log);
      }
      if (PrimeFaces2.isDevelopmentProjectStage() && window2.console) {
        console.debug(log);
      }
    },
    /**
     * Logs the given message at the `warn` level.
     * @param {string} log Message to log
     */
    warn: function(log) {
      if (this.logger) {
        this.logger.warn(log);
      }
      if (PrimeFaces2.isDevelopmentProjectStage() && window2.console) {
        console.warn(log);
      }
    },
    /**
     * Logs the given message at the `error` level.
     * @param {string} log Message to log
     */
    error: function(log) {
      if (this.logger) {
        this.logger.error(log);
      }
      if (PrimeFaces2.isDevelopmentProjectStage() && window2.console) {
        console.error(log);
      }
    },
    /**
     * Checks whether the current application is running in a development environment or a production environment.
     * @return {boolean} `true` if this is a development environment, `false` otherwise.
     */
    isDevelopmentProjectStage: function() {
      return PrimeFaces2.settings.projectStage === "Development";
    },
    /**
     * Checks whether the current application is running in a production environment.
     * @return {boolean} `true` if this is a production environment, `false` otherwise.
     */
    isProductionProjectStage: function() {
      return PrimeFaces2.settings.projectStage === "Production";
    },
    /**
     * Handles the error case when a widget was requested that is not available. Currently just logs an error
     * message.
     * @param {string} widgetVar Widget variables of a widget
     */
    widgetNotAvailable: function(widgetVar) {
      PrimeFaces2.error("Widget for var '" + widgetVar + "' not available!");
    },
    /**
     * Takes an input or textarea element and sets the caret (text cursor) position to the end of the the text.
     * @param {JQuery} element An input or textarea element.
     */
    setCaretToEnd: function(element) {
      if (element) {
        element.trigger("focus");
        var length = element.value.length;
        if (length > 0) {
          if (element.setSelectionRange) {
            element.setSelectionRange(0, length);
          } else if (element.createTextRange) {
            var range = element.createTextRange();
            range.collapse(true);
            range.moveEnd("character", 1);
            range.moveStart("character", 1);
            range.select();
          }
        }
      }
    },
    /**
     * Gets the currently loaded PrimeFaces theme CSS link.
     * @return {string} The full URL to the theme CSS
     */
    getThemeLink: function() {
      var themeLink = $('link[href*="' + PrimeFaces2.RESOURCE_IDENTIFIER + '/theme.css"]');
      if (themeLink.length === 0) {
        themeLink = $('link[href*="' + PrimeFaces2.RESOURCE_IDENTIFIER + '=theme.css"]');
      }
      return themeLink;
    },
    /**
     * Gets the currently loaded PrimeFaces theme.
     * @return {string} The current theme, such as `omega` or `luna-amber`. Empty string when no theme is loaded.
     */
    getTheme: function() {
      return PrimeFaces2.env.getTheme();
    },
    /**
     * Changes the current theme to the given theme (by exchanging CSS files). Requires that the theme was
     * installed and is available.
     * @param {string} newTheme The new theme, eg. `luna-amber`, `nova-dark`, or `omega`.
     */
    changeTheme: function(newTheme) {
      if (newTheme && newTheme !== "") {
        var themeLink = PrimeFaces2.getThemeLink();
        var themeURL = themeLink.attr("href"), plainURL = themeURL.split("&")[0], oldTheme = plainURL.split("ln=")[1], newThemeURL = themeURL.replace(oldTheme, "primefaces-" + newTheme);
        themeLink.attr("href", newThemeURL);
      }
    },
    /**
     * Creates a regexp that matches the given text literal, and HTML-escapes that result.
     * @param {string} text The literal text to escape.
     * @return {string} A regexp that matches the given text, escaped to be used as a text-literal within an HTML
     * document.
     */
    escapeRegExp: function(text) {
      return this.escapeHTML(text.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"));
    },
    /**
     * Escapes the given value to be used as the content of an HTML element or attribute.
     * @param {string} value A string to be escaped
     * @param {boolean | undefined} preventDoubleEscaping if true will not include ampersand to prevent double escaping
     * @return {string} The given value, escaped to be used as a text-literal within an HTML document.
     */
    escapeHTML: function(value, preventDoubleEscaping) {
      var regex = preventDoubleEscaping ? /[<>"'`=\/]/g : /[&<>"'`=\/]/g;
      return String(value).replace(regex, function(s) {
        return PrimeFaces2.entityMap[s];
      });
    },
    /**
     * Clears the text selected by the user on the current page.
     */
    clearSelection: function() {
      if (window2.getSelection) {
        if (window2.getSelection().empty) {
          window2.getSelection().empty();
        } else if (window2.getSelection().removeAllRanges && window2.getSelection().rangeCount > 0 && window2.getSelection().getRangeAt(0).getClientRects().length > 0) {
          window2.getSelection().removeAllRanges();
        }
      } else if (document.selection && document.selection.empty) {
        try {
          document.selection.empty();
        } catch (error) {
        }
      }
    },
    /**
     * Finds the text currently selected by the user on the current page.
     * @return {string | Selection} The text currently selected by the user on the current page.
     */
    getSelection: function() {
      var text = "";
      if (window2.getSelection) {
        text = window2.getSelection();
      } else if (document.getSelection) {
        text = document.getSelection();
      } else if (document.selection) {
        text = document.selection.createRange().text;
      }
      return text;
    },
    /**
     * Checks whether any text on the current page is selected by the user.
     * @return {boolean} `true` if text is selected, `false` otherwise.
     */
    hasSelection: function() {
      return this.getSelection().length > 0;
    },
    /**
     * A shortcut for {@link createWidget}.
     * @param {string} widgetName Name of the widget class, as registered in {@link PrimeFaces.widget}.
     * @param {string} widgetVar Widget variable of the widget
     * @param {PrimeFaces.widget.BaseWidgetCfg} cfg Configuration for the widget
     */
    cw: function(widgetName, widgetVar, cfg) {
      this.createWidget(widgetName, widgetVar, cfg);
    },
    /**
     * Deprecated, use {@link PrimeFaces.resources.getFacesResource} instead.
     * @deprecated
     * @param {string} name Name of the resource
     * @param {string} library Library of the resource
     * @param {string} version Version of the resource
     * @return {string} The URL for accessing the given resource.
     */
    getFacesResource: function(name, library, version) {
      return PrimeFaces2.resources.getFacesResource(name, library, version);
    },
    /**
     * Creates a new widget of the given type and with the given configuration. Registers that widget in the widgets
     * registry {@link PrimeFaces.widgets}. If this method is called in response to an AJAX request and the method
     * exists already, it is refreshed.
     * @param {string} widgetName Name of the widget class, as registered in `PrimeFaces.widget`
     * @param {string} widgetVar Widget variable of the widget
     * @param {PrimeFaces.widget.BaseWidgetCfg} cfg Configuration for the widget
     */
    createWidget: function(widgetName, widgetVar, cfg) {
      cfg.widgetVar = widgetVar;
      loadWidget(widgetName, (result) => {
        if (result.status === "rejected") {
          PrimeFaces2.error(String(result.reason));
          return;
        }
        const widget2 = this.widgets[widgetVar];
        const widgetType = result.value;
        if (widget2 && widget2.constructor === widgetType) {
          widget2.refresh(cfg);
          if (cfg.postRefresh) {
            cfg.postRefresh.call(widget2, widget2);
          }
        } else {
          if (cfg.preConstruct) {
            cfg.preConstruct.call(null, cfg);
          }
          var newWidget = new widgetType(cfg);
          this.widgets[widgetVar] = newWidget;
          if (cfg.postConstruct) {
            cfg.postConstruct.call(newWidget, newWidget);
          }
        }
      });
    },
    /**
     * Checks whether an items is contained in the given array. The items is compared against the array entries
     * via the `===` operator.
     * @template [T=unknown] Type of the array items
     * @param {T[]} arr An array with items
     * @param {T} item An item to check
     * @return {boolean} `true` if the given item is in the given array, `false` otherwise.
     */
    inArray: function(arr, item) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          return true;
        }
      }
      return false;
    },
    /**
     * Checks whether a value is of type `number` and is neither `Infinity` nor `NaN`.
     * @param {unknown} value A value to check
     * @return {boolean} `true` if the given value is a finite number (neither `NaN` nor +/- `Infinity`),
     * `false` otherwise.
     */
    isNumber: function(value) {
      return typeof value === "number" && isFinite(value);
    },
    /**
     * Attempts to put focus an element:
     *
     * - When `id` is given, puts focus on the element with that `id`
     * - Otherwise, when `context` is given, puts focus on the first focusable element within that context
     * (container)
     * - Otherwise, puts focus on the first focusable element in the page.
     * @param {string} [id] ID of an element to focus.
     * @param {string} [context] The ID of a container with an element to focus
     */
    focus: function(id, context) {
      var selector = ":not(:submit):not(:button):input:visible:enabled[name]";
      if (context) {
        var container = $(PrimeFaces2.escapeClientId(context));
        if (container.hasClass("ui-dialog")) {
          selector += ", a:first";
        }
      }
      setTimeout(function() {
        var focusFirstElement = function(elements) {
          if (!elements || elements.length === 0) {
            return;
          }
          var firstElement = elements.eq(0);
          var inputs = elements.filter(":input");
          if (inputs.length > 0) {
            firstElement = inputs.eq(0);
          }
          PrimeFaces2.focusElement(firstElement);
        };
        if (id) {
          var jq = $(PrimeFaces2.escapeClientId(id));
          if (jq.is(selector)) {
            jq.trigger("focus");
          } else {
            focusFirstElement(jq.find(selector));
          }
        } else if (context) {
          focusFirstElement($(PrimeFaces2.escapeClientId(context)).find(selector));
        } else {
          focusFirstElement($(selector));
        }
      }, 50);
      PrimeFaces2.customFocus = true;
    },
    /**
     * Puts focus on the given element.
     * @param {JQuery} el Element to focus
     */
    focusElement: function(el) {
      if (el.is(":radio")) {
        if (el.hasClass("ui-helper-hidden-accessible")) {
          el.parent().trigger("focus");
        } else {
          var checkedRadio = $(':radio[name="' + CSS.escape(el.attr("name")) + '"]').filter(":checked");
          if (checkedRadio.length)
            checkedRadio.trigger("focus");
          else
            el.trigger("focus");
        }
      } else {
        el.trigger("focus");
      }
    },
    /**
     * As a `<p:fileDownload>` process is implemented as a norma, non-AJAX request, `<p:ajaxStatus>` will not work.
     * Still, PrimeFaces provides a feature to monitor file downloads via this client-side function. This is done
     * by sending a cookie with the HTTP response of the file download request. On the client-side, polling is used
     * to check when the cookie is set.
     *
     * The example below displays a modal dialog when a download begins and hides it when the download is complete:
     *
     * Client-side callbacks:
     *
     * ```javascript
     * function showStatus() {
     *   PF('statusDialog').show();
     * }
     * function hideStatus() {
     *   PF('statusDialog').hide();
     * }
     * ```
     *
     * Server-side XHTML view:
     *
     * ```xml
     * <p:commandButton value="Download" ajax="false" onclick="PrimeFaces.monitorDownload(showStatus, hideStatus)">
     *   <p:fileDownload value="#{fileDownloadController.file}"/>
     * </p:commandButton>
     * ```
     * @param {() => void} start Callback that is invoked when the download starts.
     * @param {() => void} complete Callback that is invoked when the download ends.
     * @param {string} [monitorKey] Name of the cookie for monitoring the download. The cookie name defaults to
     * `primefaces.download` + the current viewId. When a monitor key is given, the name of the cookie will consist of a prefix and the
     * given monitor key.
     */
    monitorDownload: function(start, complete, monitorKey) {
      if (this.cookiesEnabled()) {
        if (start) {
          start();
        }
        var cookieName = "primefaces.download" + PrimeFaces2.settings.viewId.replace(/\//g, "_");
        cookieName = cookieName.substr(0, cookieName.lastIndexOf("."));
        if (monitorKey && monitorKey !== "") {
          cookieName += "_" + monitorKey;
        }
        var cookiePath = PrimeFaces2.settings.contextPath;
        if (!cookiePath || cookiePath === "") {
          cookiePath = "/";
        }
        window2.downloadMonitor = setInterval(function() {
          var downloadComplete = PrimeFaces2.getCookie(cookieName);
          if (downloadComplete === "true") {
            if (complete) {
              complete();
            }
            clearInterval(window2.downloadMonitor);
            PrimeFaces2.setCookie(cookieName, null, { path: cookiePath });
          }
        }, 1e3);
      }
    },
    /**
     * Scrolls to a component with given client id
     * @param {string} id The ID of an element to scroll to.
     * @param {string | number | undefined} duration string or number determining how long the animation will run. Default to 400
     */
    scrollTo: function(id, duration) {
      var offset = $(PrimeFaces2.escapeClientId(id)).offset();
      var scrollBehavior = "scroll-behavior";
      var target = $("html,body");
      var sbValue = target.css(scrollBehavior);
      var animationDuration = duration || 400;
      target.css(scrollBehavior, "auto");
      target.animate(
        { scrollTop: offset.top, scrollLeft: offset.left },
        animationDuration,
        "easeInCirc",
        function() {
          target.css(scrollBehavior, sbValue);
        }
      );
    },
    /**
     * Aligns container scrollbar to keep item in container viewport, algorithm copied from JQueryUI menu widget.
     * @param {JQuery} container The container with a scrollbar that contains the item.
     * @param {JQuery} item The item to scroll into view.
     */
    scrollInView: function(container, item) {
      if (item === null || item.length === 0) {
        return;
      }
      var borderTop = parseFloat(container.css("borderTopWidth")) || 0, paddingTop = parseFloat(container.css("paddingTop")) || 0, offset = item.offset().top - container.offset().top - borderTop - paddingTop, scroll = container.scrollTop(), elementHeight = container.height(), itemHeight = item.outerHeight(true);
      if (offset < 0) {
        container.scrollTop(scroll + offset);
      } else if (offset + itemHeight > elementHeight) {
        container.scrollTop(scroll + offset - elementHeight + itemHeight);
      }
    },
    /**
     * Finds the width of the scrollbar that is used by the current browser, as scrollbar widths are different for
     * across different browsers.
     * @return {number} The width of the scrollbars of the current browser.
     */
    calculateScrollbarWidth: function() {
      if (!this.scrollbarWidth) {
        var $div = $("<div></div>").css({ width: "100px", height: "100px", overflow: "auto", position: "absolute", top: "-1000px", left: "-1000px" }).prependTo("body").append("<div></div>").find("div").css({ width: "100%", height: "200px" });
        this.scrollbarWidth = 100 - $div.width();
        $div.parent().remove();
      }
      return this.scrollbarWidth;
    },
    /**
     * A function that is used as the handler function for HTML event tags (`onclick`, `onkeyup` etc.). When a
     * component has got an `onclick` etc attribute, the JavaScript for that attribute is called by this method.
     * @param {HTMLElement} element Element on which the event occurred.
     * @param {Event} event Event that occurred.
     * @param {((this: HTMLElement, event: Event) => boolean | undefined)[]} functions A list of callback
     * functions. If any returns `false`, the default action of the event is prevented.
     */
    bcn: function(element, event, functions) {
      if (functions) {
        for (var i = 0; i < functions.length; i++) {
          var retVal = functions[i].call(element, event);
          if (retVal === false) {
            if (event.preventDefault) {
              event.preventDefault();
            } else {
              event.returnValue = false;
            }
            break;
          }
        }
      }
    },
    /**
     * A function that is used as the handler function for AJAX behaviors. When a component has got an AJAX
     * behavior, the JavaScript that implements behavior's client-side logic is called by this method.
     * @param {Partial<PrimeFaces.ajax.ConfigurationExtender>} ext Additional options to override the current
     * options.
     * @param {Event} event Event that occurred.
     * @param {((this: typeof PrimeFaces, ext: Partial<PrimeFaces.ajax.ConfigurationExtender>, event: Event) => boolean | undefined)[]} fns
     * A list of callback functions. If any returns `false`, the other callbacks are not invoked.
     */
    bcnu: function(ext, event, fns) {
      if (fns) {
        for (var i = 0; i < fns.length; i++) {
          var retVal = fns[i].call(this, ext, event);
          if (retVal === false) {
            break;
          }
        }
      }
    },
    /**
     * Deprecated, use `PrimeFaces.dialog.DialogHandler.openDialog` instead.
        * @deprecated
        * @param {PrimeFaces.dialog.DialogHandlerCfg} cfg Configuration of the dialog.
     */
    openDialog: function(cfg) {
      if (PrimeFaces2.dialog) {
        PrimeFaces2.dialog.DialogHandler.openDialog(cfg);
      }
    },
    /**
    * Deprecated, use `PrimeFaces.dialog.DialogHandler.closeDialog` instead.
       * @deprecated
       * @param {PrimeFaces.dialog.DialogHandlerCfg} cfg Configuration of the dialog.
       */
    closeDialog: function(cfg) {
      if (PrimeFaces2.dialog) {
        PrimeFaces2.dialog.DialogHandler.closeDialog(cfg);
      }
    },
    /**
    * Deprecated, use {@link PrimeFaces.dialog.DialogHandler.showMessageInDialog} instead.
       * @deprecated
       * @param {PrimeFaces.widget.ConfirmDialog.ConfirmDialogMessage} msg Message to show in a dialog.
       */
    showMessageInDialog: function(msg) {
      if (PrimeFaces2.dialog) {
        PrimeFaces2.dialog.DialogHandler.showMessageInDialog(msg);
      }
    },
    /**
     * Displays dialog or popup according to the type of confirm component.
     * @deprecated Deprecated, use {@link PrimeFaces.dialog.DialogHandler.confirm} instead.
     * @param {PrimeFaces.dialog.ExtendedConfirmDialogMessage} msg Message to show with the confirm dialog or popup.
     */
    confirm: function(msg) {
      if (msg.type === "popup" && PrimeFaces2.confirmPopup) {
        PrimeFaces2.confirmPopup.showMessage(msg);
      } else if (PrimeFaces2.dialog) {
        PrimeFaces2.dialog.DialogHandler.confirm(msg);
      }
    },
    /**
     * Some widgets need to compute their dimensions based on their parent element(s). This requires that such
     * widgets are not rendered until they have become visible. A widget may not be visible, for example, when it
     * is inside a tab that is not shown when the page is rendered. PrimeFaces provides a global mechanism for
     * widgets to render once they are visible. This is done by keeping a list of widgets that need to be rendered,
     * and checking on every change (AJAX request, tab change etc.) whether any of those have become visible. A
     * widgets should extend `PrimeFaces.widget.DeferredWidget` to make use of this functionality.
     *
     * This is the list of renders for widgets that are currently waiting to become visible.
     *
     * @type {PrimeFaces.DeferredRender[]}
     */
    deferredRenders: [],
    /**
     * Some widgets need to compute their dimensions based on their parent element(s). This requires that such
     * widgets are not rendered until they have become visible. A widget may not be visible, for example, when it
     * is inside a tab that is not shown when the page is rendered. PrimeFaces provides a global mechanism for
     * widgets to render once they are visible. This is done by keeping a list of widgets that need to be rendered,
     * and checking on every change (AJAX request, tab change etc.) whether any of those have become visible. A
     * widgets should extend `PrimeFaces.widget.DeferredWidget` to make use of this functionality.
     *
     * Adds a deferred render to the global list.  If this widdget has already been added only the last instance
     * will be added to the stack.
     *
     * @param {string} widgetId The ID of a deferred widget.
     * @param {string} containerId ID of the container that should be visible before the widget can be rendered.
     * @param {() => boolean} fn Callback that is invoked when the widget _may_ possibly have become visible. Should
     * return `true` when the widget was rendered, or `false` when the widget still needs to be rendered later.
     */
    addDeferredRender: function(widgetId, containerId, fn) {
      this.deferredRenders = this.deferredRenders.filter((deferredRender) => {
        return !(deferredRender.widget === widgetId && deferredRender.container === containerId);
      });
      this.deferredRenders.push({ widget: widgetId, container: containerId, callback: fn });
    },
    /**
     * Some widgets need to compute their dimensions based on their parent element(s). This requires that such
     * widgets are not rendered until they have become visible. A widget may not be visible, for example, when it
     * is inside a tab that is not shown when the page is rendered. PrimeFaces provides a global mechanism for
     * widgets to render once they are visible. This is done by keeping a list of widgets that need to be rendered,
     * and checking on every change (AJAX request, tab change etc.) whether any of those have become visible. A
     * widgets should extend `PrimeFaces.widget.DeferredWidget` to make use of this functionality.
     *
     * Removes a deferred render from the global list.
     *
     * @param {string} widgetId The ID of a deferred widget.
     */
    removeDeferredRenders: function(widgetId) {
      this.deferredRenders = this.deferredRenders.filter(function(deferredRender) {
        return deferredRender.widget !== widgetId;
      });
    },
    /**
     * Some widgets need to compute their dimensions based on their parent element(s). This requires that such
     * widgets are not rendered until they have become visible. A widget may not be visible, for example, when it
     * is inside a tab that is not shown when the page is rendered. PrimeFaces provides a global mechanism for
     * widgets to render once they are visible. This is done by keeping a list of widgets that need to be rendered,
     * and checking on every change (AJAX request, tab change etc.) whether any of those have become visible. A
     * widgets should extend `PrimeFaces.widget.DeferredWidget` to make use of this functionality.
     *
     * Invokes all deferred renders. This is usually called when an action was performed that _may_ have resulted
     * in a container now being visible. This includes actions such as an AJAX request request was made or a tab
     * change.
     *
     * @param {string} containerId ID of the container that _may_ have become visible.
     */
    invokeDeferredRenders: function(containerId) {
      var widgetsToRemove = [];
      for (var i = 0; i < this.deferredRenders.length; i++) {
        var deferredRender = this.deferredRenders[i];
        if (deferredRender.container === containerId) {
          var rendered = deferredRender.callback.call();
          if (rendered) {
            widgetsToRemove.push(deferredRender.widget);
          }
        }
      }
      for (var j = 0; j < widgetsToRemove.length; j++) {
        this.removeDeferredRenders(widgetsToRemove[j]);
      }
    },
    /**
     * Finds the current locale with the i18n keys and the associated translations. Uses the current language key
     * as specified by `PrimeFaces.settings.locale`. When no locale was found for the given locale, falls back to
     * the default English locale.
     * @param {string} [cfgLocale] optional configuration locale from the widget
     * @return {PrimeFaces.Locale} The current locale with the key-value pairs.
     */
    getLocaleSettings: function(cfgLocale) {
      var locale;
      if (cfgLocale) {
        locale = PrimeFaces2.locales[cfgLocale];
      } else {
        if (this.localeSettings) {
          return this.localeSettings;
        }
        locale = PrimeFaces2.locales[PrimeFaces2.settings.locale];
      }
      if (!locale) {
        var localeKey = cfgLocale ? cfgLocale : PrimeFaces2.settings.locale;
        var strippedLocaleKey = localeKey ? localeKey.split("_")[0] : null;
        if (strippedLocaleKey) {
          locale = PrimeFaces2.locales[strippedLocaleKey];
        }
      }
      if (!locale) {
        locale = PrimeFaces2.locales["en_US"];
      }
      if (!cfgLocale) {
        this.localeSettings = locale;
      }
      return locale;
    },
    /**
     * Retrieves a localized ARIA label based on the provided key. If the key is not found in the current locale,
     * it falls back to the US English locale. If the key is still not found, it uses a default value or a placeholder
     * indicating the missing key. This method also supports dynamic replacement of placeholders within the label
     * string using the `options` object.
     * 
     * @param {string} key - The key to retrieve the ARIA label for.
     * @param {string} [defaultValue] - The default value to use if the key is not found.
     * @param {unknown} [options] - An object containing placeholder replacements in the format `{placeholderKey: replacementValue}`.
     * @returns {string} - The localized ARIA label, with placeholders replaced by their corresponding values from `options` if provided.
     */
    getAriaLabel: function(key, defaultValue, options) {
      var ariaLocaleSettings = this.getLocaleSettings()["aria"] || {};
      var label = ariaLocaleSettings[key] || PrimeFaces2.locales["en_US"]["aria"][key] || defaultValue || "???" + key + "???";
      if (options) {
        for (const valKey in options) {
          label = label.replace(`{${valKey}}`, options[valKey]);
        }
      }
      return label.trim();
    },
    /**
     * Attempt to look up the locale key by current locale and fall back to US English if not found.
     * @param {string} key The locale key
     * @return {string} The translation for the given key
     */
    getLocaleLabel: function(key) {
      var locale = this.getLocaleSettings();
      return locale && locale[key] ? locale[key] : PrimeFaces2.locales["en_US"][key];
    },
    /**
     * Loop over all locales and set the label to the new value in all locales.
     * @param {string} localeKey The locale key
     * @param {string} localeValue The locale value
     */
    setGlobalLocaleValue: function(localeKey, localeValue) {
      function iterateLocale(locale, lkey, lvalue) {
        for (var key in locale) {
          if (typeof locale[key] === "object") {
            iterateLocale(locale[key], lkey, lvalue);
          } else {
            if (key === lkey) {
              locale[key] = lvalue;
            }
          }
        }
      }
      for (var lang in PrimeFaces2.locales) {
        if (typeof PrimeFaces2.locales[lang] === "object") {
          iterateLocale(PrimeFaces2.locales[lang], localeKey, localeValue);
        }
      }
    },
    /**
     * For 4.0 jQuery deprecated $.trim in favor of PrimeFaces.trim however that does not handle
     * NULL and jQuery did so this function allows a drop in replacement.
     *
     * @param {string} value the String to trim
     * @return {string} trimmed value or "" if it was NULL
     */
    trim: function(value) {
      if (!value) {
        return "";
      }
      if (typeof value === "string" || value instanceof String) {
        return value.trim();
      }
      return value;
    },
    /**
     * Generate a RFC-4122 compliant UUID to be used as a unique identifier.
     *
     * Uses crypto.randomUUID() if available, otherwise falls back to a custom implementation.
     *
     * See https://www.ietf.org/rfc/rfc4122.txt
     *
     * @return {string} A random UUID.
     */
    uuid: function() {
      if (typeof crypto.randomUUID === "function") {
        return crypto.randomUUID();
      } else {
        return ("10000000-1000-4000-8000" + -1e11).replace(
          /[018]/g,
          (c) => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
      }
    },
    /**
     * Increment and return the next `z-index` for CSS as a string.
     * Note that jQuery will no longer accept numeric values in {@link JQuery.css | $.fn.css} as of version 4.0.
     *
     * @return {string} the next `z-index` as a string.
     */
    nextZindex: function() {
      return String(++PrimeFaces2.zindex);
    },
    /**
      * Converts a date into an ISO-8601 date without using the browser timezone offset.
      *
      * See https://stackoverflow.com/questions/10830357/javascript-toisostring-ignores-timezone-offset
      *
      * @param {Date} date the date to convert
      * @return {string} ISO-8601 version of the date
      */
    toISOString: function(date) {
      return new Date(date.getTime() - date.getTimezoneOffset() * 6e4).toISOString();
    },
    /**
     * Converts the provided string to searchable form.
     * 
     * @param {string} string to normalize.
     * @param {boolean} lowercase flag indicating whether the string should be lower cased.
     * @param {boolean} normalize flag indicating whether the string should be normalized (accents to be removed
     * from characters).
     * @returns {string} searchable string.
     */
    toSearchable: function(string, lowercase, normalize) {
      if (!string) return "";
      var result = normalize ? string.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : string;
      return lowercase ? result.toLowerCase() : result;
    },
    /**
     * Reset any state variables on update="@all".
     */
    resetState: function() {
      PrimeFaces2.utils.killswitch();
      PrimeFaces2.zindex = 1e3;
      PrimeFaces2.detachedWidgets = [];
      PrimeFaces2.animationActive = false;
      PrimeFaces2.customFocus = false;
      PrimeFaces2.widgets = {};
    },
    /**
     * Queue a microtask if delay is 0 or less and setTimeout if > 0.
     *
     * @param {() => void} fn the function to call after the delay
     * @param {number | undefined} [delay] the optional delay in milliseconds
     * @return {number | undefined} the id associated to the timeout or undefined if no timeout used
     */
    queueTask: function(fn, delay) {
      return PrimeFaces2.utils.queueTask(fn, delay);
    },
    /**
     * Logs the current PrimeFaces and jQuery version to console.
     */
    version: function() {
      var version = "PrimeFaces " + PrimeFaces2.VERSION + " (jQuery " + jQuery.fn.jquery + " / UI " + $.ui.version + ")";
      console.log(version);
    },
    /**
     * A tracker for the current z-index, used for example when creating multiple modal dialogs.
     * @type {number}
     */
    zindex: 1e3,
    /**
     * Global flag for enabling or disabling both jQuery and CSS animations.
     * @type {boolean}
     */
    animationEnabled: true,
    /**
    * Flag for detecting whether animation is currently running. Similar to jQuery.active flag and is useful
    * for scripts or automation tests to determine if the animation is currently running.
    * @type {boolean}
    */
    animationActive: false,
    /**
     * Used to store whether a custom focus has been rendered. This avoids having to retain the last focused element
     * after AJAX update.
     * @type {boolean}
     */
    customFocus: false,
    /**
     * PrimeFaces per defaults hides all overlays on scrolling/resizing to avoid positioning problems.
     * This is really hard to overcome in selenium tests and we can disable this behavior with this setting.
     * @type {boolean}
     */
    hideOverlaysOnViewportChange: true,
    /**
     * A list of widgets that were once instantiated, but are not removed from the DOM, such as due to the result
     * of an AJAX update request.
     * @type {PrimeFaces.widget.BaseWidget[]}
     * @readonly
     */
    detachedWidgets: [],
    /**
     * Name of the POST parameter that indicates whether the request is an AJAX request.
     * @type {string}
     * @readonly
     */
    PARTIAL_REQUEST_PARAM: "javax.faces.partial.ajax",
    /**
     * Name of the POST parameter that contains the list of components to be updated.
     * @type {string}
     * @readonly
     */
    PARTIAL_UPDATE_PARAM: "javax.faces.partial.render",
    /**
     * Name of the POST parameter that contains the list of components to process.
     * @type {string}
     * @readonly
     */
    PARTIAL_PROCESS_PARAM: "javax.faces.partial.execute",
    /**
     * Name of the POST parameter that indicates which element or component triggered the AJAX request.
     * @type {string}
     * @readonly
     */
    PARTIAL_SOURCE_PARAM: "javax.faces.source",
    /**
     * Name of the POST parameter that contains the name of the current behavior event.
     * @type {string}
     * @readonly
     */
    BEHAVIOR_EVENT_PARAM: "javax.faces.behavior.event",
    /**
     * Name of the POST parameter that contains the name of the current partial behavior event.
     * @type {string}
     * @readonly
     */
    PARTIAL_EVENT_PARAM: "javax.faces.partial.event",
    /**
     * Name of the POST parameter that indicates whether forms should have their values reset.
     * @type {string}
     * @readonly
     */
    RESET_VALUES_PARAM: "javax.faces.partial.resetValues",
    /**
     * Name of the POST parameter that indicates whether `<p:autoUpdate>` tags should be ignored.
     * @type {string}
     * @readonly
     */
    IGNORE_AUTO_UPDATE_PARAM: "primefaces.ignoreautoupdate",
    /**
     * Name of the POST parameter that indicates whether children should be skipped.
     * @type {string}
     * @readonly
     */
    SKIP_CHILDREN_PARAM: "primefaces.skipchildren",
    /**
     * Name of the POST parameter that contains the current view state.
     * @type {string}
     * @readonly
     */
    VIEW_STATE: "javax.faces.ViewState",
    /**
     * Name of the POST parameter with the current client window.
     * @type {string}
     * @readonly
     */
    CLIENT_WINDOW: "javax.faces.ClientWindow",
    /**
     * Name of the POST parameter that contains the view root.
     * @type {string}
     * @readonly
     */
    VIEW_ROOT: "javax.faces.ViewRoot",
    /**
     * Name of the POST parameter with the current client ID
     * @type {string}
     * @readonly
     */
    CLIENT_ID_DATA: "primefaces.clientid",
    /**
     * Name of the faces resource servlet, eg. `javax.faces.resource`.
     * @type {string}
     * @readonly
     */
    RESOURCE_IDENTIFIER: "javax.faces.resource",
    /**
     * The current version of PrimeFaces.
     * @type {string}
     * @readonly
     */
    VERSION: "${project.version}"
  };
  PrimeFaces2.settings = {};
  PrimeFaces2.util = {};
  PrimeFaces2.widgets = {};
  PrimeFaces2.locales = {
    "en_US": {
      "accept": "Yes",
      "addRule": "Add Rule",
      "am": "AM",
      "apply": "Apply",
      "cancel": "Cancel",
      "choose": "Choose",
      "chooseDate": "Choose Date",
      "chooseMonth": "Choose Month",
      "chooseYear": "Choose Year",
      "clear": "Clear",
      "completed": "Completed",
      "contains": "Contains",
      "custom": "Custom",
      "dateAfter": "Date is after",
      "dateBefore": "Date is before",
      "dateFormat": "mm/dd/yy",
      "dateIs": "Date is",
      "dateIsNot": "Date is not",
      "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "dayNamesMin": ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      "dayNamesShort": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      "emptyFilterMessage": "No results found",
      "emptyMessage": "No available options",
      "emptySearchMessage": "No results found",
      "emptySelectionMessage": "No selected item",
      "endsWith": "Ends with",
      "equals": "Equals",
      "fileSizeTypes": ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      "filter": "Filter",
      "firstDayOfWeek": 0,
      "gt": "Greater than",
      "gte": "Greater than or equal to",
      "lt": "Less than",
      "lte": "Less than or equal to",
      "matchAll": "Match All",
      "matchAny": "Match Any",
      "medium": "Medium",
      "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      "monthNamesShort": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      "nextDecade": "Next Decade",
      "nextHour": "Next Hour",
      "nextMinute": "Next Minute",
      "nextMonth": "Next Month",
      "nextSecond": "Next Second",
      "nextYear": "Next Year",
      "noFilter": "No Filter",
      "notContains": "Not contains",
      "notEquals": "Not equals",
      "now": "Now",
      "passwordPrompt": "Enter a password",
      "pending": "Pending",
      "pm": "PM",
      "prevDecade": "Previous Decade",
      "prevHour": "Previous Hour",
      "prevMinute": "Previous Minute",
      "prevMonth": "Previous Month",
      "prevSecond": "Previous Second",
      "prevYear": "Previous Year",
      "reject": "No",
      "removeRule": "Remove Rule",
      "searchMessage": "{0} results are available",
      "selectionMessage": "{0} items selected",
      "showMonthAfterYear": false,
      "startsWith": "Starts with",
      "strong": "Strong",
      "today": "Today",
      "upload": "Upload",
      "weak": "Weak",
      "weekHeader": "Wk",
      "weekNumberTitle": "W",
      "isRTL": false,
      "yearSuffix": "",
      "timeOnlyTitle": "Only Time",
      "timeText": "Time",
      "hourText": "Hour",
      "minuteText": "Minute",
      "secondText": "Second",
      "millisecondText": "Millisecond",
      "year": "Year",
      "month": "Month",
      "week": "Week",
      "day": "Day",
      "list": "Agenda",
      "allDayText": "All Day",
      "moreLinkText": "More...",
      "noEventsText": "No Events",
      "aria": {
        "cancelEdit": "Cancel Edit",
        "close": "Close",
        "collapseLabel": "Collapse",
        "collapseRow": "Row Collapsed",
        "editRow": "Edit Row",
        "expandLabel": "Expand",
        "expandRow": "Row Expanded",
        "falseLabel": "False",
        "filterConstraint": "Filter Constraint",
        "filterOperator": "Filter Operator",
        "firstPageLabel": "First Page",
        "gridView": "Grid View",
        "hideFilterMenu": "Hide Filter Menu",
        "jumpToPageDropdownLabel": "Jump to Page Dropdown",
        "jumpToPageInputLabel": "Jump to Page Input",
        "lastPageLabel": "Last Page",
        "listView": "List View",
        "moveAllToSource": "Move All to Source",
        "moveAllToTarget": "Move All to Target",
        "moveBottom": "Move Bottom",
        "moveDown": "Move Down",
        "moveToSource": "Move to Source",
        "moveToTarget": "Move to Target",
        "moveTop": "Move Top",
        "moveUp": "Move Up",
        "navigation": "Navigation",
        "next": "Next",
        "nextPageLabel": "Next Page",
        "nullLabel": "Not Selected",
        "pageLabel": "Page {page}",
        "otpLabel": "Please enter one time password character {0}",
        "passwordHide": "Hide Password",
        "passwordShow": "Show Password",
        "previous": "Previous",
        "previousPageLabel": "Previous Page",
        "rotateLeft": "Rotate Left",
        "rotateRight": "Rotate Right",
        "rowsPerPageLabel": "Rows per page",
        "saveEdit": "Save Edit",
        "scrollTop": "Scroll Top",
        "selectAll": "All items selected",
        "selectLabel": "Select",
        "selectRow": "Row Selected",
        "showFilterMenu": "Show Filter Menu",
        "slide": "Slide",
        "slideNumber": "{slideNumber}",
        "star": "1 star",
        "stars": "{star} stars",
        "trueLabel": "True",
        "unselectAll": "All items unselected",
        "unselectLabel": "Unselect",
        "unselectRow": "Row Unselected",
        "zoomImage": "Zoom Image",
        "zoomIn": "Zoom In",
        "zoomOut": "Zoom Out",
        "datatable.sort.ASC": "activate to sort column ascending",
        "datatable.sort.DESC": "activate to sort column descending",
        "datatable.sort.NONE": "activate to remove sorting on column",
        "colorpicker.OPEN": "Open color picker",
        "colorpicker.CLOSE": "Close color picker",
        "colorpicker.CLEAR": "Clear the selected color",
        "colorpicker.MARKER": "Saturation: {s}. Brightness: {v}.",
        "colorpicker.HUESLIDER": "Hue slider",
        "colorpicker.ALPHASLIDER": "Opacity slider",
        "colorpicker.INPUT": "Color value field",
        "colorpicker.FORMAT": "Color format",
        "colorpicker.SWATCH": "Color swatch",
        "colorpicker.INSTRUCTION": "Saturation and brightness selector. Use up, down, left and right arrow keys to select.",
        "spinner.INCREASE": "Increase Value",
        "spinner.DECREASE": "Decrease Value",
        "switch.ON": "On",
        "switch.OFF": "Off",
        "messages.ERROR": "Error",
        "messages.FATAL": "Fatal",
        "messages.INFO": "Information",
        "messages.WARN": "Warning"
      }
    }
  };
  PrimeFaces2.locales["en"] = PrimeFaces2.locales["en_US"];
  PrimeFaces2.entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;",
    "`": "&#x60;",
    "=": "&#x3D;"
  };
  PF = function(widgetVar) {
    var widgetInstance = PrimeFaces2.widgets[widgetVar];
    if (!widgetInstance) {
      PrimeFaces2.widgetNotAvailable(widgetVar);
    }
    return widgetInstance;
  };
  window2.PrimeFaces = PrimeFaces2;
})(window);

// src/core/core.env.js
var import_jquery = __toESM(require_jquery_browser());
if (!PrimeFaces.env) {
  PrimeFaces.env = {
    /**
     * `true` if the current browser is a mobile browser, `false` otherwise.
     * @type {boolean}
     */
    mobile: false,
    /**
     * `true` if the current browser supports touch, `false` otherwise.
     * @type {boolean}
     */
    touch: false,
    /**
     * `true` if the current browser is an IOS browser, `false` otherwise.
     * @type {boolean}
     */
    ios: false,
    /**
     * `true` if the current browser is an Android browser, `false` otherwise.
     * @type {boolean}
     */
    android: false,
    /**
     * The current browser type.
     * @type {string}
     */
    browser: null,
    /**
     * `true` if the user's current OS setting prefers dark mode, `false` otherwise.
     * @type {boolean}
     */
    preferredColorSchemeDark: false,
    /**
     * `true` if the user's current OS setting prefers light mode, `false` otherwise.
     * @type {boolean}
     */
    preferredColorSchemeLight: false,
    /**
     * `true` if the user's current OS setting prefers reduced motion or animations, `false` otherwise.
     * @type {boolean}
     */
    prefersReducedMotion: false,
    /**
     * Initializes the environment by reading the browser environment.
     */
    init: function() {
      this.browser = import_jquery.default;
      this.mobile = this.browser.mobile;
      this.touch = "ontouchstart" in window || window.navigator.msMaxTouchPoints || PrimeFaces.env.mobile;
      this.ios = /iPhone|iPad|iPod/i.test(window.navigator.userAgent) || /mac/i.test(window.navigator.userAgent) && PrimeFaces.env.touch;
      this.android = /(android)/i.test(window.navigator.userAgent);
      this.preferredColorSchemeDark = PrimeFaces.env.evaluateMediaQuery("(prefers-color-scheme: dark)");
      this.preferredColorSchemeLight = !this.preferredColorSchemeDark;
      this.prefersReducedMotion = PrimeFaces.env.evaluateMediaQuery("(prefers-reduced-motion: reduce)");
    },
    /**
      * Gets the currently loaded PrimeFaces theme.
      * @return {string} The current theme, such as `omega` or `luna-amber`. Empty string when no theme is loaded.
      */
    getTheme: function() {
      var themeLink = PrimeFaces.getThemeLink();
      if (themeLink.length === 0) {
        return "";
      }
      var themeURL = themeLink.attr("href"), plainURL = themeURL.split("&")[0], oldTheme = plainURL.split("ln=primefaces-")[1];
      return oldTheme;
    },
    /**
     * A widget is touch enabled if the browser supports touch AND the widget has the touchable property enabled.
     * The default will be true if it widget status can't be determined.
     * 
     * @param {PrimeFaces.widget.BaseWidgetCfg} cfg the widget configuration
     * @return {boolean} true if touch is enabled, false if disabled
     */
    isTouchable: function(cfg) {
      var widgetTouchable = cfg == void 0 || (cfg.touchable != void 0 ? cfg.touchable : true);
      return PrimeFaces.env.touch && widgetTouchable;
    },
    /**
     * Gets the user's preferred color scheme set in their operating system.
     * 
     * @return {string} either 'dark' or 'light'
     */
    getOSPreferredColorScheme: function() {
      return PrimeFaces.env.preferredColorSchemeLight ? "light" : "dark";
    },
    /**
      * Based on the current PrimeFaces theme determine if light or dark contrast is being applied.
      * 
      * @return {string} either 'dark' or 'light'
      */
    getThemeContrast: function() {
      var theme = PrimeFaces.env.getTheme();
      var darkRegex = /(^(arya|vela|.+-(dim|dark))$)/gm;
      return darkRegex.test(theme) ? "dark" : "light";
    },
    /**
     * Evaluate a media query and return true/false if its a match.
     *
     * @param {string} mediaquery the media query to evaluate
     * @return {boolean} true if it matches the query false if not
     */
    evaluateMediaQuery: function(mediaquery) {
      return window.matchMedia && window.matchMedia(mediaquery).matches;
    },
    /**
     * Media query to determine if screen size is below pixel count.
     * @param {number} pixels the number of pixels to check
     * @return {boolean} true if screen is less than number of pixels
     */
    isScreenSizeLessThan: function(pixels) {
      return PrimeFaces.env.evaluateMediaQuery("(max-width: " + pixels + "px)");
    },
    /**
     * Media query to determine if screen size is above pixel count.
     * @param {number} pixels the number of pixels to check
     * @return {boolean} true if screen is greater than number of pixels
     */
    isScreenSizeGreaterThan: function(pixels) {
      return PrimeFaces.env.evaluateMediaQuery("(min-width: " + pixels + "px)");
    }
  };
  PrimeFaces.env.init();
}

// src/core/core.ajax.js
if (!PrimeFaces.ajax) {
  PrimeFaces.ab = function(cfg, ext) {
    for (var option in cfg) {
      if (!cfg.hasOwnProperty(option)) {
        continue;
      }
      if (PrimeFaces.ajax.CFG_SHORTCUTS[option]) {
        cfg[PrimeFaces.ajax.CFG_SHORTCUTS[option]] = cfg[option];
        delete cfg[option];
      }
    }
    return PrimeFaces.ajax.Request.handle(cfg, ext);
  };
  PrimeFaces.ajax = {
    /**
     * Name for the ID of the HEAD element, used in AJAX requests.
     * @type {string}
     * @readonly
     */
    VIEW_HEAD: "javax.faces.ViewHead",
    /**
     * Name for the ID of the BODY element, used in AJAX requests.
     * @type {string}
     * @readonly
     */
    VIEW_BODY: "javax.faces.ViewBody",
    /**
     * Name for the ID of a resource entry, used in AJAX requests.
     * @type {string}
     * @readonly
     */
    RESOURCE: "javax.faces.Resource",
    /**
     * Parameter shortcut mapping for the method `PrimeFaces.ab`.
     * @type {Record<string, string>}
     */
    CFG_SHORTCUTS: {
      "s": "source",
      "f": "formId",
      "p": "process",
      "u": "update",
      "e": "event",
      "a": "async",
      "g": "global",
      "d": "delay",
      "t": "timeout",
      "sc": "skipChildren",
      "iau": "ignoreAutoUpdate",
      "ps": "partialSubmit",
      "psf": "partialSubmitFilter",
      "rv": "resetValues",
      "fp": "fragmentProcess",
      "fu": "fragmentUpdate",
      "pa": "params",
      "onst": "onstart",
      "oner": "onerror",
      "onsu": "onsuccess",
      "onco": "oncomplete"
    },
    /**
     * Minimum number of milliseconds to show inline Ajax load animations.
     * @type {number}
     */
    minLoadAnimation: 500,
    /**
     * This object contains utility methods for AJAX requests, primarily used internally.
     * @interface {PrimeFaces.ajax.Utils} . The class for the object with the AJAX utility methods, used for
     * handling and working with AJAX requests and updates.
     * @type {PrimeFaces.ajax.Utils}
     * @readonly
     */
    Utils: {
      /**
       * Iterates over all immediate children of the given node and returns the concatenated content (`node value`)
       * of each such child node. For the document itself, the node value is `null`.
       * For text, comment, and CDATA nodes, the `node value` is the (text) content of the node.
       * For attribute nodes, the value of the attribute is used.
       * @param {HTMLElement} node An HTML node for which to retrieve the content.
       * @return {string} The content of all immediate child nodes, concatenated together.
       */
      getContent: function(node) {
        var content = "";
        for (var i = 0; i < node.childNodes.length; i++) {
          content += node.childNodes[i].nodeValue;
        }
        return content;
      },
      /**
       * Resolves the URL which should be used for the POST request.
       * For portlets, a different URL is used.
       *
       * @param {JQuery} form The closest form of the request source.
       * @return {string} The POST url.
       */
      getPostUrl: function(form) {
        var postURL = form.attr("action");
        var encodedURLInput = form.children("input[name*='javax.faces.encodedURL']");
        if (encodedURLInput.length > 0) {
          postURL = encodedURLInput.val();
        }
        return postURL;
      },
      /**
       * Gets a selector to resolve all forms which needs to be updated with a new ViewState.
       * This is required in portlets as the DOM contains forms of multiple JSF views / applications.
       *
       * @param {JQuery} form The closest form of the request source.
       * @param {string} parameterPrefix The portlet parameter prefix.
       * @return {string | null} The selector for the forms, or `null` when no forms need to be updated.
       */
      getPorletForms: function(form, parameterPrefix) {
        var encodedURLInput = form.children("input[name*='javax.faces.encodedURL']");
        if (encodedURLInput.length > 0) {
          return 'form[id*="' + parameterPrefix + '"]';
        }
        return null;
      },
      /**
       * Get source ID from settings.
       *
       * @param {JQuery.AjaxSettings} settings containing source ID.
       * @return {string} The source ID from settings or `null` if settings does not contain a source.
       */
      getSourceId: function(settings) {
        if (settings && settings.source) {
          return typeof settings.source === "string" ? settings.source : settings.source.name;
        }
        return null;
      },
      /**
       * Checks whether the component ID from the provided widget equals the source ID from the provided
       * settings.
       *
       * @param {PrimeFaces.widget.BaseWidget} widget of the component to check for being the source.
       * @param {JQuery.AjaxSettings} settings containing source ID.
       * @returns {boolean} `true` if the component ID from the provided widget equals the source ID from the
       * provided settings.
       */
      isXhrSource: function(widget2, settings) {
        return widget2.id === PrimeFaces.ajax.Utils.getSourceId(settings);
      },
      /**
       * Checks whether one of component's triggers equals the source ID from the provided settings.
       *
       * @param {PrimeFaces.widget.BaseWidget} widget of the component to check for being the source.
       * @param {JQuery.AjaxSettings} settings containing source ID.
       * @param {boolean} triggerMustExist flag to check if the trigger must exist
       * @returns {boolean} `true` if if one of component's triggers equals the source ID from the provided settings.
       */
      isXhrSourceATrigger: function(widget2, settings, triggerMustExist) {
        var sourceId = PrimeFaces.ajax.Utils.getSourceId(settings);
        if (!sourceId) {
          return false;
        }
        var cfgTrigger = widget2.cfg.trigger || widget2.cfg.triggers;
        var triggers = PrimeFaces.expressions.SearchExpressionFacade.resolveComponents(widget2.jq, cfgTrigger);
        if (!triggers || triggers.length === 0) {
          return !triggerMustExist;
        }
        return $.inArray(sourceId, triggers) !== -1;
      },
      /**
       * Is this script an AJAX request?
       * @param {string} script the JS script to check
       * @returns {boolean} `true` if this script contains an AJAX request
       */
      isAjaxRequest: function(script) {
        return script.includes("PrimeFaces.ab(") || script.includes("pf.ab(") || script.includes("mojarra.ab(") || script.includes("myfaces.ab(") || script.includes("jsf.ajax.request") || script.includes("faces.ajax.request");
      },
      /**
       * Updates the main hidden input element for each form.
       * @param {string} name Name of the hidden form input element, usually the same as the form.
       * @param {string} value Value to set on the hidden input element.
       * @param {PrimeFaces.ajax.pfXHR} [xhr] Optional XHR request with `pfSettings` or `pfArgs` with further
       * data, such as which forms should be updated.
       */
      updateFormStateInput: function(name, value, xhr) {
        var trimmedValue = PrimeFaces.trim(value);
        var forms = null;
        if (xhr && xhr.pfSettings && xhr.pfSettings.portletForms) {
          forms = $(xhr.pfSettings.portletForms);
        } else {
          forms = $("form");
        }
        var parameterPrefix = "";
        if (xhr && xhr.pfArgs && xhr.pfArgs.parameterPrefix) {
          parameterPrefix = xhr.pfArgs.parameterPrefix;
        }
        for (var i = 0; i < forms.length; i++) {
          var form = forms.eq(i);
          if (form.attr("method") === "post") {
            var input = form.children("input[name='" + CSS.escape(parameterPrefix + name) + "']");
            if (input.length > 0) {
              input.val(trimmedValue);
            } else {
              form.append('<input type="hidden" name="' + parameterPrefix + name + '" value="' + trimmedValue + '"></input>');
            }
          }
        }
      },
      /**
       * Updates the HTML `head` element of the current document with the content received from an AJAX request.
       * This method ensures that any new JavaScript or CSS resources are only added if they are not already present.
       * If the content does not contain any JavaScript or CSS links, it is directly appended to the head.
       * 
       * @param {string} content The content of the changeset that was returned by an AJAX request.
       */
      updateResource: function(content) {
        var $head = $("head");
        try {
          var $content = $(content);
          var filteredContent = $content.length > 0 ? $content.filter("link[href], script[src]") : $();
          if (filteredContent.length === 0) {
            PrimeFaces.debug("Adding content to the head because it lacks any JavaScript or CSS links...");
            $head.append(content);
          } else {
            filteredContent.each(function() {
              var $resource = $(this);
              var src = $resource.attr("href") || $resource.attr("src");
              var type = this.tagName.toLowerCase();
              var $resources = $head.find(type + '[src="' + src + '"], ' + type + '[href="' + src + '"]');
              if ($resources.length === 0) {
                PrimeFaces.debug("Appending " + type + " to head: " + src);
                $head.append($resource);
              }
            });
          }
        } catch (error) {
          PrimeFaces.debug("Appending content to the head as it contains only raw JavaScript code...");
          $head.append(content);
        }
      },
      /**
       * Updates the HTML `head` element of the current document with the content received from an AJAX request.
       * @param {string} content The content of the changeset that was returned by an AJAX request.
       */
      updateHead: function(content) {
        var cache = $.ajaxSetup()["cache"];
        $.ajaxSetup()["cache"] = true;
        var headStartTag = new RegExp("<head[^>]*>", "gi").exec(content)[0];
        var headStartIndex = content.indexOf(headStartTag) + headStartTag.length;
        $("head").html(content.substring(headStartIndex, content.lastIndexOf("</head>")));
        $.ajaxSetup()["cache"] = cache;
      },
      /**
       * Updates the HTML `body` element of the current document with the content received from an AJAX request.
       * @param {string} content The content of the changeset that was returned by an AJAX request.
       */
      updateBody: function(content) {
        var bodyStartTag = new RegExp("<body[^>]*>", "gi").exec(content)[0];
        var bodyStartIndex = content.indexOf(bodyStartTag) + bodyStartTag.length;
        $("body").html(content.substring(bodyStartIndex, content.lastIndexOf("</body>")));
      },
      /**
       * Updates an element with the given ID by applying a change set that was returned by an AJAX request. This
       * involves replacing the HTML content of the element with the new content.
       * @param {string} id ID of the element that is to be updated.
       * @param {string} content The new content of the changeset as returned by an AJAX request.
       * @param {PrimeFaces.ajax.pfXHR} [xhr] Optional XHR request with `pfSettings` or `pfArgs` with further
       * data, such as which forms should be updated.
       */
      updateElement: function(id, content, xhr) {
        if (id.indexOf(PrimeFaces.VIEW_STATE) !== -1) {
          PrimeFaces.ajax.Utils.updateFormStateInput(PrimeFaces.VIEW_STATE, content, xhr);
        } else if (id.indexOf(PrimeFaces.CLIENT_WINDOW) !== -1) {
          PrimeFaces.ajax.Utils.updateFormStateInput(PrimeFaces.CLIENT_WINDOW, content, xhr);
        } else if (id === PrimeFaces.VIEW_ROOT) {
          var ajaxUtils = PrimeFaces.ajax.Utils;
          window.PrimeFaces.resetState();
          ajaxUtils.updateHead(content);
          ajaxUtils.updateBody(content);
        } else if (id === PrimeFaces.ajax.VIEW_HEAD) {
          PrimeFaces.ajax.Utils.updateHead(content);
        } else if (id === PrimeFaces.ajax.VIEW_BODY) {
          PrimeFaces.ajax.Utils.updateBody(content);
        } else if (id === PrimeFaces.ajax.RESOURCE) {
          PrimeFaces.ajax.Utils.updateResource(content);
        } else if (id === $("head")[0].id) {
          PrimeFaces.ajax.Utils.updateHead(content);
        } else {
          var target = $(PrimeFaces.escapeClientId(id));
          if (target.length === 0) {
            PrimeFaces.warn("DOM element with id '" + id + "' cant be found; skip update...");
          } else {
            var removedContent = target.replaceWith(content);
            PrimeFaces.utils.cleanseDomElement(removedContent);
          }
        }
      }
    },
    /**
     * This object contains functionality related to queuing AJAX requests to ensure that they are (a) sent in the
     * proper order and (b) that each response is processed in the same order as the requests were sent.
     * @interface {PrimeFaces.ajax.Queue} . The interface for the object containing functionality related to queuing
     * AJAX requests. The queue ensures that requests are (a) sent in the order as they were issued, and (b) that
     * each response is processed in the same order as the requests were sent.
     * @type {PrimeFaces.ajax.Queue}
     * @readonly
     */
    Queue: {
      /**
       * A map between the source ID and  the timeout IDs (as returned by `setTimeout`). Used for AJAX requests
       * with a specified delay (such as remote commands that have a delay set).
       * @type {Record<string, number>}
       */
      delays: {},
      /**
       * A list of requests that are waiting to be sent.
       * @type {Partial<PrimeFaces.ajax.Configuration>[]}
       */
      requests: new Array(),
      /**
       * A list of sent AJAX requests, i.e. HTTP requests that were already started. This is used, for example, to
       * abort requests that were sent already when that becomes necessary.
       *
       * @type {PrimeFaces.ajax.pfXHR[]}
       */
      xhrs: new Array(),
      /**
       * Offers an AJAX request to this queue. The request is sent once all other requests in this queue have
       * been sent. If a delay is set on the request configuration, the request is not sent before the specified
       * delay has elapsed.
       * @param {Partial<PrimeFaces.ajax.Configuration>} request The request to send.
       */
      offer: function(request) {
        if (request.delay) {
          var sourceId = null, $this = this, sourceId = typeof request.source === "string" ? request.source : $(request.source).attr("id"), createTimeout = function() {
            return PrimeFaces.queueTask(function() {
              $this.requests.push(request);
              if ($this.requests.length === 1) {
                PrimeFaces.ajax.Request.send(request);
              }
            }, request.delay);
          };
          if (this.delays[sourceId]) {
            clearTimeout(this.delays[sourceId].timeout);
            this.delays[sourceId].timeout = createTimeout();
          } else {
            this.delays[sourceId] = {
              timeout: createTimeout()
            };
          }
        } else {
          this.requests.push(request);
          if (this.requests.length === 1) {
            PrimeFaces.ajax.Request.send(request);
          }
        }
      },
      /**
       * Removes the topmost request (the requests that was just sent) from this queue; and starts the second
       * topmost request.
       * @return {Partial<PrimeFaces.ajax.Configuration> | null} The topmost request in this queue, or `null` if this queue
       * is empty.
       */
      poll: function() {
        if (this.isEmpty()) {
          return null;
        }
        var processed = this.requests.shift(), next = this.peek();
        if (next) {
          PrimeFaces.ajax.Request.send(next);
        }
        return processed;
      },
      /**
       * Returns the request that is scheduled to be sent next, but does not modify the queue in any way.
       * @return {Partial<PrimeFaces.ajax.Configuration> | null} The topmost request in this queue that is to be sent next,
       * or `null` when this queue is empty.
       */
      peek: function() {
        if (this.isEmpty()) {
          return null;
        }
        return this.requests[0];
      },
      /**
       * Checks whether this queue contains any scheduled AJAX requests.
       * @return {boolean} `true` if this queue contains no scheduled requests, `false` otherwise.
       */
      isEmpty: function() {
        return this.requests.length === 0;
      },
      /**
       * Adds a newly sent XHR request to the list of sent requests (`PrimeFaces.ajax.xhrs`).
       * @param {PrimeFaces.ajax.pfXHR} xhr XHR request to add.
       */
      addXHR: function(xhr) {
        this.xhrs.push(xhr);
      },
      /**
       * Removes an XHR request from the list of sent requests (`PrimeFaces.ajax.xhrs`). Usually called once the
       * AJAX request is done, having resulted in either a success or an error.
       * @param {PrimeFaces.ajax.pfXHR} xhr XHR request to remove.
       */
      removeXHR: function(xhr) {
        var index = $.inArray(xhr, this.xhrs);
        if (index > -1) {
          this.xhrs.splice(index, 1);
        }
      },
      /**
       * Aborts all requests that were already sent, but have not yet received an answer from the server. Also
       * removes all requests that are waiting in the queue and have not been sent yet.
       */
      abortAll: function() {
        this.requests = new Array();
        for (var i = 0; i < this.xhrs.length; i++) {
          var xhr = this.xhrs[i];
          if (xhr.readyState !== 4) {
            xhr.abort();
          }
        }
        this.xhrs = new Array();
      }
    },
    /**
     * The interface for the object containing low-level functionality related to sending AJAX requests.
     * @interface {PrimeFaces.ajax.Request}. The interface for the object containing functionality related to
     * sending AJAX requests.
     * @type {PrimeFaces.ajax.Request}
     * @readonly
     */
    Request: {
      /**
       * Handles the given AJAX request, either by sending it immediately (if `async` is set to `true`), or by
       * adding it to the AJAX queue otherwise. The AJAX queue ensures that requests are sent and handled in the
       * order they were started. See also {@link jsf.ajax.request}.
       * @param {Partial<PrimeFaces.ajax.Configuration>} cfg Configuration for the AJAX request to send, such as
       * the HTTP method, the URL, and the content of the request.
       * @param {Partial<PrimeFaces.ajax.ConfigurationExtender>} [ext] Optional extender with additional options
       * that overwrite the options given in `cfg`.
       * @return {Promise<PrimeFaces.ajax.ResponseData>} A promise that resolves once the AJAX requests is done.
       * Use this to run custom JavaScript logic. When the AJAX request succeeds, the promise is fulfilled.
       * Otherwise, when the AJAX request fails, the promise is rejected. If the promise is rejected, the
       * rejection handler receives an object of type {@link PrimeFaces.ajax.FailedRequestData}.
       */
      handle: function(cfg, ext) {
        cfg.ext = ext;
        cfg.promise = cfg.promise || $.Deferred();
        if (PrimeFaces.settings.earlyPostParamEvaluation) {
          cfg.earlyPostParams = PrimeFaces.ajax.Request.collectEarlyPostParams(cfg);
        }
        if (cfg.async) {
          PrimeFaces.ajax.Request.send(cfg);
        } else {
          PrimeFaces.ajax.Queue.offer(cfg);
        }
        return cfg.promise.promise();
      },
      /**
       * Performs the early collection of post parameters (form element values) if the request is configured that
       * way. See: https://github.com/primefaces/primefaces/issues/109
       *
       * @param {Partial<PrimeFaces.ajax.Configuration>} cfg Configuration for the AJAX request to send, such as
       * the HTTP method, the URL, and the content of the request.
       * @return {PrimeFaces.ajax.RequestParameter[]} The collected form element values to be sent with the request.
       */
      collectEarlyPostParams: function(cfg) {
        var earlyPostParams;
        var sourceElement;
        if (typeof cfg.source === "string") {
          sourceElement = $(PrimeFaces.escapeClientId(cfg.source));
        } else {
          sourceElement = $(cfg.source);
        }
        if (sourceElement.is(":input") && sourceElement.is(":not(:button)")) {
          earlyPostParams = [];
          if (sourceElement.is(":checkbox")) {
            var checkboxPostParams = $("input[name='" + CSS.escape(sourceElement.attr("name")) + "']").filter(":checked").serializeArray();
            $.merge(earlyPostParams, checkboxPostParams);
          } else {
            earlyPostParams.push({
              name: sourceElement.attr("name"),
              value: sourceElement.val()
            });
          }
        } else {
          earlyPostParams = sourceElement.serializeArray();
        }
        return earlyPostParams;
      },
      /**
       * Starts the given AJAX request immediately by sending the data to the server. Contrast with
       * {@link handle}, which may queue AJAX requests, depending on how they are configured.
       * @param {Partial<PrimeFaces.ajax.Configuration>} cfg Configuration for the AJAX request to send, such as
       * the HTTP method, the URL, and the content of the request.
       * @return {boolean|undefined} `false` if the AJAX request is to be canceled, `true` or `undefined`
       * otherwise.
       */
      send: function(cfg) {
        PrimeFaces.debug("Initiating ajax request.");
        PrimeFaces.customFocus = false;
        var global = cfg.global === true || cfg.global === void 0 ? true : false, form = null, sourceId = null, retVal = null;
        if (cfg.onstart) {
          retVal = cfg.onstart.call(this, cfg);
        }
        if (cfg.ext && cfg.ext.onstart) {
          retVal = cfg.ext.onstart.call(this, cfg);
        }
        if (retVal === false) {
          PrimeFaces.debug("AJAX request cancelled by onstart callback.");
          if (!cfg.async) {
            PrimeFaces.ajax.Queue.poll();
          }
          if (cfg.promise) {
            cfg.promise.reject({ textStatus: "error", errorThrown: "AJAX request cancelled by onstart callback." });
          }
          return false;
        }
        if (global) {
          $(document).trigger("pfAjaxStart");
        }
        if (typeof cfg.source === "string") {
          sourceId = cfg.source;
        } else {
          sourceId = $(cfg.source).attr("id");
        }
        var $source = $(PrimeFaces.escapeClientId(sourceId));
        if (cfg.formId) {
          form = PrimeFaces.expressions.SearchExpressionFacade.resolveComponentsAsSelector($source, cfg.formId);
        } else {
          form = $source.closest("form");
          if (form.length === 0) {
            form = $("form").eq(0);
          }
        }
        PrimeFaces.debug("Form to post " + form.attr("id") + ".");
        var formData;
        var scanForFiles;
        var multipart = form.attr("enctype") === "multipart/form-data";
        if (multipart) {
          formData = new FormData();
          scanForFiles = $();
        }
        var postURL = PrimeFaces.ajax.Utils.getPostUrl(form);
        var postParams = [];
        var parameterPrefix = PrimeFaces.ajax.Request.extractParameterNamespace(form);
        PrimeFaces.debug("URL to post " + postURL + ".");
        PrimeFaces.ajax.Request.addParam(postParams, PrimeFaces.PARTIAL_REQUEST_PARAM, true, parameterPrefix);
        PrimeFaces.ajax.Request.addParam(postParams, PrimeFaces.PARTIAL_SOURCE_PARAM, sourceId, parameterPrefix);
        if (cfg.resetValues) {
          PrimeFaces.ajax.Request.addParam(postParams, PrimeFaces.RESET_VALUES_PARAM, true, parameterPrefix);
        }
        if (cfg.ignoreAutoUpdate) {
          PrimeFaces.ajax.Request.addParam(postParams, PrimeFaces.IGNORE_AUTO_UPDATE_PARAM, true, parameterPrefix);
        }
        if (cfg.skipChildren === false) {
          PrimeFaces.ajax.Request.addParam(postParams, PrimeFaces.SKIP_CHILDREN_PARAM, false, parameterPrefix);
        }
        var processArray = PrimeFaces.ajax.Request.resolveComponentsForAjaxCall($source, cfg, "process");
        if (cfg.fragmentProcess) {
          processArray.push(cfg.fragmentProcess);
        }
        var processIds = "@none";
        if (processArray.length > 0) {
          processIds = processArray.join(" ");
        } else {
          var definedProcess = PrimeFaces.ajax.Request.resolveComponentsForAjaxCall($source, cfg, "process");
          if (definedProcess === void 0 || definedProcess.length === 0) {
            processIds = "@all";
          }
        }
        if (!processIds.includes("@none")) {
          PrimeFaces.ajax.Request.addParam(postParams, PrimeFaces.PARTIAL_PROCESS_PARAM, processIds, parameterPrefix);
        }
        var updateArray = PrimeFaces.ajax.Request.resolveComponentsForAjaxCall($source, cfg, "update");
        if (cfg.fragmentUpdate) {
          updateArray.push(cfg.fragmentUpdate);
        }
        if (updateArray.length > 0) {
          PrimeFaces.ajax.Request.addParam(postParams, PrimeFaces.PARTIAL_UPDATE_PARAM, updateArray.join(" "), parameterPrefix);
        }
        if (cfg.event) {
          PrimeFaces.ajax.Request.addParam(postParams, PrimeFaces.BEHAVIOR_EVENT_PARAM, cfg.event, parameterPrefix);
          var domEvent = cfg.event;
          if (cfg.event === "valueChange")
            domEvent = "change";
          else if (cfg.event === "action")
            domEvent = "click";
          PrimeFaces.ajax.Request.addParam(postParams, PrimeFaces.PARTIAL_EVENT_PARAM, domEvent, parameterPrefix);
        } else {
          PrimeFaces.ajax.Request.addParam(postParams, sourceId, sourceId, parameterPrefix);
        }
        if (cfg.params) {
          PrimeFaces.ajax.Request.addParams(postParams, cfg.params, parameterPrefix);
        }
        if (cfg.ext && cfg.ext.params) {
          PrimeFaces.ajax.Request.addParams(postParams, cfg.ext.params, parameterPrefix);
        }
        if (cfg.partialSubmit === void 0) {
          cfg.partialSubmit = PrimeFaces.settings.partialSubmit;
        }
        if (cfg.ext && cfg.ext.partialSubmit) {
          cfg.partialSubmit = cfg.ext.partialSubmit;
        }
        if (cfg.partialSubmit && processIds.indexOf("@all") === -1) {
          var formProcessed = false;
          if (processIds.indexOf("@none") === -1) {
            var partialSubmitFilter = cfg.partialSubmitFilter || ":input";
            for (var i = 0; i < processArray.length; i++) {
              var jqProcess = $(PrimeFaces.escapeClientId(processArray[i]));
              var componentPostParams = null;
              if (jqProcess.is("form")) {
                componentPostParams = jqProcess.serializeArray();
                formProcessed = true;
                if (multipart) {
                  scanForFiles = scanForFiles.add(jqProcess);
                }
              } else if (jqProcess.is(":input")) {
                componentPostParams = jqProcess.serializeArray();
                if (multipart) {
                  scanForFiles = scanForFiles.add(jqProcess);
                }
              } else {
                var filtered = jqProcess.find(partialSubmitFilter);
                componentPostParams = filtered.serializeArray();
                if (multipart) {
                  scanForFiles = scanForFiles.add(filtered);
                }
              }
              postParams = PrimeFaces.ajax.Request.arrayCompare(componentPostParams, postParams);
              if (cfg.ext && cfg.ext.partialSubmitParameterFilter) {
                var filteredParams = cfg.ext.partialSubmitParameterFilter.call(this, componentPostParams);
                $.merge(postParams, filteredParams);
              } else {
                $.merge(postParams, componentPostParams);
              }
            }
          }
          if (!formProcessed) {
            PrimeFaces.ajax.Request.addParamFromInput(postParams, PrimeFaces.VIEW_STATE, form, parameterPrefix);
            PrimeFaces.ajax.Request.addParamFromInput(postParams, PrimeFaces.CLIENT_WINDOW, form, parameterPrefix);
            PrimeFaces.ajax.Request.addParamFromInput(postParams, PrimeFaces.csp.NONCE_INPUT, form, parameterPrefix);
            PrimeFaces.ajax.Request.addParamFromInput(postParams, "dsPostWindowId", form, parameterPrefix);
            PrimeFaces.ajax.Request.addParamFromInput(postParams, "dspwid", form, parameterPrefix);
            PrimeFaces.ajax.Request.addParamFromInput(postParams, "_csrf", form, parameterPrefix);
          }
        } else {
          $.merge(postParams, form.serializeArray());
          if (multipart) {
            scanForFiles = scanForFiles.add(form);
          }
        }
        if (PrimeFaces.settings.earlyPostParamEvaluation && cfg.earlyPostParams) {
          postParams = PrimeFaces.ajax.Request.arrayCompare(cfg.earlyPostParams, postParams);
          $.merge(postParams, cfg.earlyPostParams);
        }
        if (multipart) {
          var fileInputs = $();
          scanForFiles.each(function(index, value) {
            var $value = $(value);
            if ($value.is(':input[type="file"]')) {
              fileInputs = fileInputs.add($value);
            } else {
              fileInputs = fileInputs.add($value.find('input[type="file"]'));
            }
          });
          fileInputs.each(function(index, value) {
            for (var i2 = 0; i2 < value.files.length; i2++) {
              formData.append(value.id, value.files[i2]);
            }
          });
        }
        var xhrOptions = {
          url: postURL,
          type: "POST",
          cache: false,
          dataType: "xml",
          portletForms: PrimeFaces.ajax.Utils.getPorletForms(form, parameterPrefix),
          source: cfg.source,
          global: false,
          beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Faces-Request", "partial/ajax");
            xhr.pfSettings = settings;
            xhr.pfArgs = {};
            if (global) {
              $(document).trigger("pfAjaxSend", [xhr, this]);
            }
          }
        };
        if (multipart) {
          $.each(postParams, function(index, value) {
            formData.append(value.name, value.value);
          });
          xhrOptions.data = formData;
          xhrOptions.enctype = "multipart/form-data";
          xhrOptions.processData = false;
          xhrOptions.contentType = false;
        } else {
          var postData = $.param(postParams);
          PrimeFaces.debug("Post Data:" + postData);
          xhrOptions.data = postData;
        }
        var nonce = form.children("input[name='" + CSS.escape(PrimeFaces.csp.NONCE_INPUT) + "']");
        if (nonce.length > 0) {
          xhrOptions.nonce = nonce.val();
        }
        if (cfg.timeout) {
          xhrOptions["timeout"] = cfg.timeout;
        }
        var jqXhr = $.ajax(xhrOptions).fail(function(xhr, status, errorThrown) {
          if (cfg.promise) {
            cfg.promise.reject({ jqXHR: xhr, textStatus: status, errorThrown });
          }
          var location2 = xhr.getResponseHeader("Location");
          if (xhr.status === 401 && location2) {
            PrimeFaces.debug("Unauthorized status received. Redirecting to " + location2);
            window.location = location2;
            return;
          }
          if (cfg.onerror) {
            cfg.onerror.call(this, xhr, status, errorThrown);
          }
          if (cfg.ext && cfg.ext.onerror) {
            cfg.ext.onerror.call(this, xhr, status, errorThrown);
          }
          $(document).trigger("pfAjaxError", [xhr, this, errorThrown]);
          PrimeFaces.error("Request return with error:" + status + ".");
        }).done(function(data, status, xhr) {
          PrimeFaces.debug("Response received successfully.");
          try {
            var parsed;
            if (cfg.promise) {
              cfg.promise.resolve({ document: data, textStatus: status, jqXHR: xhr });
            }
            if (cfg.onsuccess) {
              parsed = cfg.onsuccess.call(this, data, status, xhr);
            }
            if (cfg.ext && cfg.ext.onsuccess && !parsed) {
              parsed = cfg.ext.onsuccess.call(this, data, status, xhr);
            }
            if (global) {
              $(document).trigger("pfAjaxSuccess", [xhr, this]);
            }
            if (parsed) {
              return;
            } else {
              PrimeFaces.ajax.Response.handle(data, status, xhr);
            }
          } catch (err) {
            PrimeFaces.error(err);
          }
          if (global) {
            $(document).trigger("pfAjaxUpdated", [xhr, this, xhr.pfArgs]);
          }
          PrimeFaces.debug("DOM is updated.");
        }).always(function(data, status, xhr) {
          if (cfg.ext && cfg.ext.oncomplete) {
            cfg.ext.oncomplete.call(this, xhr, status, xhr.pfArgs, data);
          }
          if (cfg.oncomplete) {
            cfg.oncomplete.call(this, xhr, status, xhr.pfArgs, data);
          }
          if (global) {
            $(document).trigger("pfAjaxComplete", [xhr, this, xhr.pfArgs]);
          }
          PrimeFaces.debug("Response completed.");
          PrimeFaces.ajax.Queue.removeXHR(xhr);
          if (!cfg.async) {
            PrimeFaces.ajax.Queue.poll();
          }
        });
        PrimeFaces.ajax.Queue.addXHR(jqXhr);
      },
      /**
       * Collects all `process` or `update` search expressions from the given AJAX call configuration and returns
       * them as one search expression.
       * @param {Partial<PrimeFaces.ajax.Configuration>} cfg An AJAX call configuration.
       * @param {"process" | "update"} type Whether to resolve the `process` or `update` expressions.
       * @return {string} All process or update search expression from the given configuration.
       */
      resolveExpressionsForAjaxCall: function(cfg, type) {
        var expressions = "";
        if (cfg[type]) {
          expressions += cfg[type];
        }
        if (cfg.ext && cfg.ext[type]) {
          expressions += " " + cfg.ext[type];
        }
        return expressions;
      },
      /**
       * Given an AJAX call configuration, resolves the components for the `process` or `update` search
       * expressions given by the configurations. Resolves the search expressions to the actual components and
       * returns a list of their IDs.
       *
       * @param {JQuery} source the source element.
       * @param {Partial<PrimeFaces.ajax.Configuration>} cfg An AJAX call configuration.
       * @param {"process" | "update"} type Whether to resolve the `process` or `update` expressions.
       * @return {string[]} A list of IDs with the components to which the process or update expressions refer.
       */
      resolveComponentsForAjaxCall: function(source, cfg, type) {
        var expressions = PrimeFaces.ajax.Request.resolveExpressionsForAjaxCall(cfg, type);
        return PrimeFaces.expressions.SearchExpressionFacade.resolveComponents(source, expressions);
      },
      /**
       * Appends a request parameter to the given list of parameters.
       * Optionally add a prefix to the name, this is used for portlet namespacing.
       * @template [TValue=unknown] Type of the parameter value.
       * @param {PrimeFaces.ajax.RequestParameter<string, TValue>[]} params List of parameters to which a new
       * parameter is added.
       * @param {string} name Name of the new parameter to add.
       * @param {TValue} value Value of the parameter to add.
       * @param {string} [parameterPrefix] Optional prefix that is added in front of the name.
       */
      addParam: function(params, name, value, parameterPrefix) {
        if (parameterPrefix || !name.indexOf(parameterPrefix) === 0) {
          params.push({ name: parameterPrefix + name, value });
        } else {
          params.push({ name, value });
        }
      },
      /**
       * Appends a request parameter to the given list of parameters.
       * Optionally add a prefix to the name, this is used for portlet namespacing.
       * @param {FormData} formData the form data to add to the form.
       * @param {string} name Name of the new parameter to add.
       * @param {string | Blob} value Value of the parameter to add.
       * @param {string} [parameterPrefix] Optional prefix that is added in front of the name.
       */
      addFormData: function(formData, name, value, parameterPrefix) {
        if (parameterPrefix || !name.indexOf(parameterPrefix) === 0) {
          formData.append(parameterPrefix + name, value);
        } else {
          formData.append(name, value);
        }
      },
      /**
       * Adds a list of callback parameters to the given list. Optionally prepends a prefix to the name of each
       * added parameter.
       * @template [TValue=unknown] Type of the parameter values.
       * @param {PrimeFaces.ajax.RequestParameter<string, TValue>[]} params List of callback parameters to which
       * parameters are added.
       * @param {PrimeFaces.ajax.RequestParameter<string, TValue>[]} paramsToAdd List of callback parameters to
       * add.
       * @param {string} [parameterPrefix] Optional prefix that is added in front of the name of the added
       * callback parameters.
       */
      addParams: function(params, paramsToAdd, parameterPrefix) {
        for (var i = 0; i < paramsToAdd.length; i++) {
          var param = paramsToAdd[i];
          if (parameterPrefix && !param.name.indexOf(parameterPrefix) === 0) {
            param.name = parameterPrefix + param.name;
          }
          params.push(param);
        }
      },
      /**
       * Adds a new request parameter to the given list. The value of the parameter is taken from the input
       * element of the given form. The input element must have the same name as the name of the parameter to add.
       * Optionally add a prefix to the name, which used for portlet namespacing.
       * @param {PrimeFaces.ajax.RequestParameter[]} params List of request parameters to the new
       * parameter is added.
       * @param {string} name Name of the new parameter to add
       * @param {JQuery} form An HTML FORM element that contains an INPUT element with the given name.
       * @param {string} [parameterPrefix] Optional prefix that is added in front of the name.
       */
      addParamFromInput: function(params, name, form, parameterPrefix) {
        var input = null, escapedName = CSS.escape(name);
        if (parameterPrefix) {
          input = form.children("input[name*='" + escapedName + "']");
        } else {
          input = form.children("input[name='" + escapedName + "']");
        }
        if (input && input.length > 0) {
          var value = input.val();
          PrimeFaces.ajax.Request.addParam(params, name, value, parameterPrefix);
        }
      },
      /**
       * Adds a new request parameter to the given FormData. The value of the parameter is taken from the input
       * element of the given form. The input element must have the same name as the name of the parameter to add.
       * Optionally add a prefix to the name, which used for portlet namespacing.
       * @param {FormData} formData The FormData.
       * @param {string} name Name of the new parameter to add
       * @param {JQuery} form An HTML FORM element that contains an INPUT element with the given name.
       * @param {string} [parameterPrefix] Optional prefix that is added in front of the name.
       */
      addFormDataFromInput: function(formData, name, form, parameterPrefix) {
        var input = null, escapedName = CSS.escape(name);
        if (parameterPrefix) {
          input = form.children("input[name*='" + escapedName + "']");
        } else {
          input = form.children("input[name='" + escapedName + "']");
        }
        if (input && input.length > 0) {
          var value = input.val();
          PrimeFaces.ajax.Request.addFormData(formData, name, value, parameterPrefix);
        }
      },
      /**
       * Finds the namespace (prefix) for the parameters of the given form.
       * This is required for Porlets as a Portlet contains multiple JSF views and we must only process and update the forms/inputs of the current view / application.
       * Later the namespace is used for all post params.
       * @param {JQuery} form An HTML FORM element.
       * @return {string | null} The namespace for the parameters of the given form, or `null` when the form does
       * not specifiy a namespace.
       */
      extractParameterNamespace: function(form) {
        var input = form.children("input[name*='" + PrimeFaces.VIEW_STATE + "']");
        if (input && input.length > 0) {
          var name = input[0].name;
          if (name.length > PrimeFaces.VIEW_STATE.length) {
            return name.substring(0, name.indexOf(PrimeFaces.VIEW_STATE));
          }
        }
        return null;
      },
      /**
       * Creates a new array with all parameters from the second array that are not in the first array. That is,
       * removes all parameters from the second array whose name is equal to one of the parameters in the first
       * array. The given input array are not modified.
       * @template [TValue=unknown] Type of the parameter values.
       * @param {PrimeFaces.ajax.RequestParameter<string, TValue>[]} arr1 A list of parameters for comparison.
       * @param {PrimeFaces.ajax.RequestParameter<string, TValue>[]} arr2 A list of additional parameters.
       * @return {PrimeFaces.ajax.RequestParameter<string, TValue>[]} An list of parameters that are in the second
       * array, but not in the first.
       */
      arrayCompare: function(arr1, arr2) {
        $.each(arr1, function(index1, param1) {
          arr2 = $.grep(arr2, function(param2, index2) {
            if (param2.name === param1.name) {
              return false;
            }
            return true;
          });
        });
        return arr2;
      },
      /**
       * Creates a FormData which can be used for a Faces AJAX request on the current view.
       * It already contains all required parameters like ViewState or ClientWindow.
       *
       * @param {JQuery} form The closest form of the request source.
       * @param {string} parameterPrefix The Portlet parameter namespace.
       * @param {string} source The id of the request source.
       * @param {string} [process] A comma separated list of components which should be processed.
       * @param {string} [update] A comma separated list of components which should be updated.
       * @return {FormData} The newly created form data.
       */
      createFacesAjaxFormData: function(form, parameterPrefix, source, process, update) {
        var formData = new FormData();
        PrimeFaces.ajax.Request.addFormData(formData, PrimeFaces.PARTIAL_REQUEST_PARAM, true, parameterPrefix);
        PrimeFaces.ajax.Request.addFormData(formData, PrimeFaces.PARTIAL_SOURCE_PARAM, source, parameterPrefix);
        if (process) {
          PrimeFaces.ajax.Request.addFormData(formData, PrimeFaces.PARTIAL_PROCESS_PARAM, process, parameterPrefix);
        }
        if (update) {
          PrimeFaces.ajax.Request.addFormData(formData, PrimeFaces.PARTIAL_UPDATE_PARAM, update, parameterPrefix);
        }
        PrimeFaces.ajax.Request.addFormDataFromInput(formData, PrimeFaces.VIEW_STATE, form, parameterPrefix);
        PrimeFaces.ajax.Request.addFormDataFromInput(formData, PrimeFaces.CLIENT_WINDOW, form, parameterPrefix);
        PrimeFaces.ajax.Request.addFormDataFromInput(formData, PrimeFaces.csp.NONCE_INPUT, form, parameterPrefix);
        PrimeFaces.ajax.Request.addFormDataFromInput(formData, "dsPostWindowId", form, parameterPrefix);
        PrimeFaces.ajax.Request.addFormDataFromInput(formData, "dspwid", form, parameterPrefix);
        PrimeFaces.ajax.Request.addFormDataFromInput(formData, "_csrf", form, parameterPrefix);
        return formData;
      }
    },
    /**
     * The interface for the object containing low-level functionality related to handling AJAX responses. Note that
     * the different types of AJAX actions are handles by the `PrimeFaces.ResponseProcessor`.
     * @interface {PrimeFaces.ajax.Response} . The interface for the object containing functionality related to
     * handling AJAX responses
     * @type {PrimeFaces.ajax.Response}
     * @readonly
     */
    Response: {
      /**
       * Handles the response of an AJAX request. The response consists of one or more actions such as executing a
       * script or updating a DOM element. See also {@link jsf.ajax.response}.
       *
       * Also updates the specified components if any and synchronizes the client side JSF state. DOM updates are
       * implemented using jQuery which uses a very algorithm.
       *
       * @template {PrimeFaces.widget.BaseWidget} [TWidget=PrimeFaces.widget.BaseWidget] Type of the widget which
       * triggered the AJAX request.
       * @param {XMLDocument} xml The XML that was returned by the AJAX request.
       * @param {JQuery.Ajax.SuccessTextStatus} status Text status of the request.
       * @param {PrimeFaces.ajax.pfXHR} xhr The XHR request to which a response was received.
       * @param {PrimeFaces.ajax.UpdateHandler<TWidget>} [updateHandler] Optional handler for `update` actions.
       */
      handle: function(xml, status, xhr, updateHandler) {
        if (xml === void 0 || xml === null) {
          return;
        }
        var partialResponseNode = xml.getElementsByTagName("partial-response")[0];
        for (var i = 0; i < partialResponseNode.childNodes.length; i++) {
          var currentNode = partialResponseNode.childNodes[i];
          switch (currentNode.nodeName) {
            case "redirect":
              xhr.pfArgs.redirect = true;
              PrimeFaces.ajax.ResponseProcessor.doRedirect(currentNode);
              break;
            case "changes":
              var activeElement = $(document.activeElement);
              var activeElementId = activeElement.attr("id");
              var activeElementSelection;
              if (activeElement.length > 0 && activeElement.is("input") && typeof $.fn.getSelection === "function") {
                activeElementSelection = activeElement.getSelection();
              }
              for (var j = 0; j < currentNode.childNodes.length; j++) {
                var currentChangeNode = currentNode.childNodes[j];
                switch (currentChangeNode.nodeName) {
                  case "update":
                    PrimeFaces.ajax.ResponseProcessor.doUpdate(currentChangeNode, xhr, updateHandler);
                    break;
                  case "delete":
                    PrimeFaces.ajax.ResponseProcessor.doDelete(currentChangeNode);
                    break;
                  case "insert":
                    PrimeFaces.ajax.ResponseProcessor.doInsert(currentChangeNode);
                    break;
                  case "attributes":
                    PrimeFaces.ajax.ResponseProcessor.doAttributes(currentChangeNode);
                    break;
                  case "eval":
                    PrimeFaces.ajax.ResponseProcessor.doEval(currentChangeNode, xhr);
                    break;
                  case "extension":
                    PrimeFaces.ajax.ResponseProcessor.doExtension(currentChangeNode, xhr);
                    break;
                }
              }
              PrimeFaces.ajax.Response.handleReFocus(activeElementId, activeElementSelection);
              PrimeFaces.ajax.Response.destroyDetachedWidgets();
              break;
            case "eval":
              PrimeFaces.ajax.ResponseProcessor.doEval(currentNode);
              break;
            case "extension":
              PrimeFaces.ajax.ResponseProcessor.doExtension(currentNode, xhr);
              break;
            case "error":
              PrimeFaces.ajax.ResponseProcessor.doError(currentNode, xhr);
              break;
          }
        }
      },
      /**
       * Puts focus on the given element if necessary.
       * @param {string} activeElementId ID of the active to refocus.
       * @param {PrimeFaces.ajax.ActiveElementSelection} [activeElementSelection] The range to select, for INPUT
       * and TEXTAREA elements.
       */
      handleReFocus: function(activeElementId, activeElementSelection) {
        if (PrimeFaces.customFocus === true) {
          PrimeFaces.customFocus = false;
          return;
        }
        if (!activeElementId) {
          return;
        }
        var elementToFocus = $(PrimeFaces.escapeClientId(activeElementId));
        if (elementToFocus.length > 0) {
          var refocus = function() {
            if (activeElementId !== $(document.activeElement).attr("id")) {
              elementToFocus.trigger("focus");
              if (activeElementSelection) {
                elementToFocus.setSelection(activeElementSelection.start, activeElementSelection.end);
              }
            }
          };
          refocus();
        }
      },
      /**
       * Destroys all widgets that are not part of the DOM anymore, usually because they were removed by an AJAX
       * update. Calls the `destroy` method on the widget and removes the widget from the global widget registry.
       */
      destroyDetachedWidgets: function() {
        for (var i = 0; i < PrimeFaces.detachedWidgets.length; i++) {
          var widgetVar = PrimeFaces.detachedWidgets[i];
          var widget2 = PF(widgetVar);
          if (widget2 && widget2.isDetached() === true) {
            try {
              widget2.destroy();
              delete PrimeFaces.widgets[widgetVar];
              widget2 = null;
            } catch (e) {
              PrimeFaces.warn("Error destroying widget: " + widgetVar);
            }
          }
        }
        PrimeFaces.detachedWidgets = [];
      }
    },
    /**
     * The interface for the object containing low-level functionality related to processing the different types
     * of actions from AJAX responses.
     * @interface {PrimeFaces.ajax.ResponseProcessor} . The interface for the object containing functionality related to
     * processing the different types of actions from AJAX responses.
     * @type {PrimeFaces.ajax.ResponseProcessor}
     * @readonly
     */
    ResponseProcessor: {
      /**
       * Handles a `redirect` AJAX action by performing a redirect to the target URL.
       * @param {Node} node The XML node of the `redirect` action.
       */
      doRedirect: function(node) {
        try {
          window.location.assign(node.getAttribute("url"));
        } catch (error) {
          PrimeFaces.warn("Error redirecting to URL: " + node.getAttribute("url"));
        }
      },
      /**
       * Handles an `update` AJAX action by calling the given update handler. When no update handler is given,
       * replaces the HTML content of the element with the new content.
       * @template {PrimeFaces.widget.BaseWidget} [TWidget=PrimeFaces.widget.BaseWidget] Type of the widget which
       * triggered the AJAX request.
       * @param {Node} node The XML node of the `update` action.
       * @param {PrimeFaces.ajax.pfXHR} xhr The XHR request to which a response was received.
       * @param {PrimeFaces.ajax.UpdateHandler<TWidget>} [updateHandler] Optional handler for the update.
       */
      doUpdate: function(node, xhr, updateHandler) {
        var id = node.getAttribute("id"), content = PrimeFaces.ajax.Utils.getContent(node);
        if (updateHandler && updateHandler.widget && updateHandler.widget.id === id) {
          updateHandler.handle.call(updateHandler.widget, content);
        } else {
          PrimeFaces.ajax.Utils.updateElement(id, content, xhr);
        }
      },
      /**
       * Handles an `eval` AJAX action by evaluating the returned JavaScript.
       * @param {Node} node The XML node of the `eval` action.
       * @param {PrimeFaces.ajax.pfXHR} xhr The XHR request to which a response was received.
       */
      doEval: function(node, xhr) {
        var textContent = node.textContent || node.innerText || node.text;
        var nonce;
        if (xhr && xhr.pfSettings && xhr.pfSettings.nonce) {
          nonce = xhr.pfSettings.nonce;
        }
        PrimeFaces.csp.eval(textContent, nonce);
      },
      /**
       * Handles an `extension` AJAX action by extending the `pfArgs` property on the jQuery XHR object.
       * @param {Node} node The XML node of the `extension` action.
       * @param {PrimeFaces.ajax.pfXHR} xhr The XHR request to which a response was received.
       */
      doExtension: function(node, xhr) {
        if (xhr) {
          if (node.getAttribute("ln") === "primefaces" && node.getAttribute("type") === "args") {
            var textContent = node.textContent || node.innerText || node.text;
            if (xhr.pfArgs) {
              var json = JSON.parse(textContent);
              for (var name in json) {
                xhr.pfArgs[name] = json[name];
              }
            } else {
              xhr.pfArgs = JSON.parse(textContent);
            }
          }
        }
      },
      /**
       * Handles an `error` AJAX action by doing nothing currently.
       * @param {Node} node The XML node of the `error` action.
       * @param {PrimeFaces.ajax.pfXHR} xhr The XHR request to which a response was received.
       */
      doError: function(node, xhr) {
      },
      /**
       * Handles a `delete` AJAX action by remove the DOM element.
       * @param {Node} node The XML node of the `delete` action.
       */
      doDelete: function(node) {
        var id = node.getAttribute("id");
        $(PrimeFaces.escapeClientId(id)).remove();
      },
      /**
       * Handles an `insert` AJAX action by inserting a newly creating DOM element.
       * @param {Node} node The XML node of the `insert` action.
       * @return {boolean | undefined} `false` if the AJAX action could not be performed, `true` or `undefined`
       * otherwise.
       */
      doInsert: function(node) {
        if (!node.childNodes) {
          return false;
        }
        for (var i = 0; i < node.childNodes.length; i++) {
          var childNode = node.childNodes[i];
          var id = childNode.getAttribute("id");
          var jq = $(PrimeFaces.escapeClientId(id));
          var content = PrimeFaces.ajax.Utils.getContent(childNode);
          if (childNode.nodeName === "after") {
            $(content).insertAfter(jq);
          } else if (childNode.nodeName === "before") {
            $(content).insertBefore(jq);
          }
        }
      },
      /**
       * Handles an `attributes` AJAX action by setting the attributes on the DOM element.
       * @param {Node} node The XML node of the `attributes` action.
       * @return {boolean | undefined} `false` if the AJAX action could not be performed, `true` or `undefined`
       * otherwise.
       */
      doAttributes: function(node) {
        if (!node.childNodes) {
          return false;
        }
        var id = node.getAttribute("id");
        var jq = $(PrimeFaces.escapeClientId(id));
        for (var i = 0; i < node.childNodes.length; i++) {
          var attrNode = node.childNodes[i];
          var attrName = attrNode.getAttribute("name");
          var attrValue = attrNode.getAttribute("value");
          if (!attrName) {
            return;
          }
          if (!attrValue || attrValue === null) {
            attrValue = "";
          }
          jq.attr(attrName, attrValue);
        }
      }
    },
    /**
     * Only available for backward compatibility, do not use in new code.
     * @deprecated Use `PrimeFaces.ajax.Request.handle` instead.
     * @param {Partial<PrimeFaces.ajax.Configuration>} cfg Configuration for the AJAX request to send, such as
     * the HTTP method, the URL, and the content of the request.
     * @param {Partial<PrimeFaces.ajax.ConfigurationExtender>} [ext] Optional extender with additional options
     * that overwrite the options given in `cfg`.
     * @return {undefined} Always returns `undefined`.
     */
    AjaxRequest: function(cfg, ext) {
      return PrimeFaces.ajax.Request.handle(cfg, ext);
    }
  };
  unloadEvent = "onpagehide" in window ? "pagehide" : "unload";
  $(window).on(unloadEvent, function() {
    PrimeFaces.ajax.Queue.abortAll();
  });
}
var unloadEvent;

// src/core/core.csp.js
if (!PrimeFaces.csp) {
  PrimeFaces.csp = {
    /**
     * Name of the POST parameter for transmitting the nonce.
     * @type {string}
     * @readonly
     */
    NONCE_INPUT: "primefaces.nonce",
    /**
     * The value of the nonce to be used.
     * @type {string}
     */
    NONCE_VALUE: "",
    /**
     * Map of currently registered CSP events on this page.
     * @type {Map<string,Map<string,boolean>>}
     */
    EVENT_REGISTRY: /* @__PURE__ */ new Map(),
    /**
     * Sets the given nonce to all forms on the current page.
     * @param {string} nonce Nonce to set. This value is usually supplied by the server.
     */
    init: function(nonce) {
      PrimeFaces.csp.NONCE_VALUE = nonce;
      var forms = document.getElementsByTagName("form");
      for (var i = 0; i < forms.length; i++) {
        var form = forms[i];
        if (!PrimeFaces.csp.isFacesForm(form)) {
          continue;
        }
        var input = form.elements[PrimeFaces.csp.NONCE_INPUT];
        if (!input) {
          input = document.createElement("input");
          input.setAttribute("name", PrimeFaces.csp.NONCE_INPUT);
          input.setAttribute("type", "hidden");
          form.appendChild(input);
        }
        input.setAttribute("value", nonce);
      }
    },
    /**
     * Checks if the given form is a Faces form.
     * @param {HTMLInputElement} [form] The form to check.
     * @return {boolean} true if the form is a Faces form.
     */
    isFacesForm: function(form) {
      if (form.method === "post") {
        for (let child of form.children) {
          if (child instanceof HTMLInputElement && child.name && child.name.includes(PrimeFaces.VIEW_STATE)) {
            return true;
          }
        }
      }
      return false;
    },
    /**
     * Registers an event listener for the given element.
     * @param {string} id ID of an element
     * @param {string} [event] Event to listen to, with the `on` prefix, such as `onclick` or `onblur`.
     * @param {() => boolean} [js] Callback that may return `false` to prevent the default behavior of the event.
     */
    register: function(id, event, js) {
      if (event) {
        var shortenedEvent = event.substring(2, event.length), element = document.getElementById(id), jqEvent = shortenedEvent + "." + id, isAjaxified = PrimeFaces.ajax.Utils.isAjaxRequest(js.toString());
        var jsWrapper = function(event2) {
          var retVal = js.call(element, event2);
          if (retVal === false && (typeof event2.cancelable !== "boolean" || event2.cancelable)) {
            event2.preventDefault();
          }
        };
        if (event === "onload" && element instanceof HTMLBodyElement) {
          element = window;
        }
        $(element).off(jqEvent).on(jqEvent, jsWrapper).attr("data-ajax", isAjaxified);
        if (!PrimeFaces.isProductionProjectStage()) {
          if (!PrimeFaces.csp.EVENT_REGISTRY.has(id)) {
            PrimeFaces.csp.EVENT_REGISTRY.set(id, /* @__PURE__ */ new Map());
          }
          PrimeFaces.csp.EVENT_REGISTRY.get(id).set(jqEvent, isAjaxified);
        }
      }
    },
    /**
     * Does this component have a registered AJAX event.
     * @param {string} id ID of an element
     * @param {string} [event] Event to listen to, with the `on` prefix, such as `onclick` or `onblur`.
     * @return {boolean|undefined} true if component has this AJAX event
     */
    hasRegisteredAjaxifiedEvent: function(id, event) {
      if (PrimeFaces.isProductionProjectStage()) {
        console.error("PrimeFaces CSP registry may not be used in JSF Production mode.");
        return false;
      }
      if (PrimeFaces.csp.EVENT_REGISTRY.has(id)) {
        var shortenedEvent = event.substring(2, event.length), jqEvent = shortenedEvent + "." + id;
        return PrimeFaces.csp.EVENT_REGISTRY.get(id).get(jqEvent);
      }
      return false;
    },
    /**
     * Perform a CSP safe `eval()`.
     *
     * @param {string} js The JavaScript code to evaluate.
     * @param {string} [nonceValue] Nonce value. Leave out if not using CSP.
     * @param {string} [windowContext] Optional Window context to call eval from.
     */
    eval: function(js, nonceValue, windowContext) {
      var options = {};
      if (nonceValue) {
        options = { nonce: nonceValue };
      } else if (PrimeFaces.csp.NONCE_VALUE) {
        if (windowContext) {
          options = { nonce: windowContext.PrimeFaces.csp.NONCE_VALUE };
        } else {
          options = { nonce: PrimeFaces.csp.NONCE_VALUE };
        }
      }
      if (windowContext) {
        $.globalEval(js, options, windowContext.document);
      } else {
        $.globalEval(js, options);
      }
    },
    /**
     * Perform a CSP safe `eval()` with a return result value.
     *
     * @param {string} js The JavaScript code to evaluate.
     * @param {string} [nonceValue] Nonce value. Leave out if not using CSP.
     * @param {string} [windowContext] Optional Window context to call eval from.
     * @return {unknown} The result of the evaluated JavaScript code.
     * @see https://stackoverflow.com/a/33945236/502366
     */
    evalResult: function(js, nonceValue, windowContext) {
      var executeJs = "var cspResult = " + js;
      PrimeFaces.csp.eval(executeJs, nonceValue, windowContext);
      return windowContext ? windowContext.cspResult : cspResult;
    },
    /**
     * CSP won't allow string-to-JavaScript methods like `eval()` and `new Function()`.
     * This method uses JQuery `globalEval` to safely evaluate the function if CSP is enabled.
     *
     * @param {HTMLElement} id The element executing the function (aka `this`).
     * @param {string} js The JavaScript code to evaluate. Two variables will be in scope for the code: (a) the
     * `this` context, which is set to the given `id`, and (b) the `event` variable, which is set to the given `e`.
     * @param {JQuery.TriggeredEvent} e The event from the caller to pass through.
     */
    executeEvent: function(id, js, e) {
      var scriptEval = "var cspFunction = function(event){" + js + "}";
      PrimeFaces.csp.eval(scriptEval, PrimeFaces.csp.NONCE_VALUE);
      cspFunction.call(id, e);
    },
    /**
     * GitHub #5790: When using jQuery to trigger a click event on a button while using CSP
     * we must set preventDefault or else it will trigger a non-ajax button click.
     * 
     * @param {JQuery} target The target of this click event.
     * @return {JQuery.TriggeredEvent} the JQuery click event
     */
    clickEvent: function(target) {
      var clickEvent = $.Event("click");
      if (PrimeFaces.csp.NONCE_VALUE && target.attr("data-ajax") !== "false") {
        clickEvent.preventDefault();
      }
      return clickEvent;
    }
  };
}

// src/core/core.expressions.js
if (!PrimeFaces.expressions) {
  PrimeFaces.expressions = {};
  PrimeFaces.expressions.SearchExpressionFacade = {
    /**
     * Takes a search expression that may contain multiple components, separated by commas or whitespaces. Resolves
     * each search expression to the component it refers to and returns a JQuery object with the DOM elements of
     * the resolved components.
     * @param {JQuery} source the source element where to start the search (e.g. required for @form).
     * @param {string | HTMLElement | JQuery} expressions A search expression with one or multiple components to resolve.
     * @return {JQuery} A list with the resolved components.
     */
    resolveComponentsAsSelector: function(source, expressions) {
      if (expressions instanceof $) {
        return expressions;
      }
      if (expressions instanceof HTMLElement) {
        return $(expressions);
      }
      var splittedExpressions = PrimeFaces.expressions.SearchExpressionFacade.splitExpressions(expressions);
      var elements = $();
      if (splittedExpressions) {
        for (var i = 0; i < splittedExpressions.length; ++i) {
          var expression = PrimeFaces.trim(splittedExpressions[i]);
          if (expression.length > 0) {
            if (expression == "@none" || expression == "@all" || expression.indexOf("@obs(") == 0) {
              continue;
            }
            if (expression.indexOf("@") == -1) {
              elements = elements.add(
                $(document.getElementById(expression))
              );
            } else if (expression.indexOf("@widgetVar(") == 0) {
              var widgetVar = expression.substring(11, expression.length - 1);
              var widget2 = PrimeFaces.widgets[widgetVar];
              if (widget2) {
                elements = elements.add(
                  $(document.getElementById(widget2.id))
                );
              } else {
                PrimeFaces.widgetNotAvailable(widgetVar);
              }
            } else if (expression.indexOf("@(") == 0) {
              elements = elements.add(
                $(expression.substring(2, expression.length - 1))
              );
            } else if (expression == "@form") {
              var form = source.closest("form");
              if (form.length == 0) {
                PrimeFaces.error("Could not resolve @form for source '" + source.attr("id") + "'");
              } else {
                elements = elements.add(form[0]);
              }
            }
          }
        }
      }
      return elements;
    },
    /**
     * Takes a search expression that may contain multiple components, separated by commas or whitespaces. Resolves
     * each search expression to the component it refers to and returns a list of IDs of the resolved components.
     *
     * @param {JQuery} source the source element where to start the search (e.g. required for @form).
     * @param {string} expressions A search expression with one or multiple components to resolve.
     * @return {string[]} A list of IDs with the resolved components.
     */
    resolveComponents: function(source, expressions) {
      var splittedExpressions = PrimeFaces.expressions.SearchExpressionFacade.splitExpressions(expressions), ids = [];
      if (splittedExpressions) {
        for (var i = 0; i < splittedExpressions.length; ++i) {
          var expression = PrimeFaces.trim(splittedExpressions[i]);
          if (expression.length > 0) {
            if (expression.indexOf("@") == -1 || expression == "@none" || expression == "@all" || expression.indexOf("@obs(") == 0) {
              if (!PrimeFaces.inArray(ids, expression)) {
                ids.push(expression);
              }
            } else if (expression.indexOf("@widgetVar(") == 0) {
              var widgetVar = expression.substring(11, expression.length - 1), widget2 = PrimeFaces.widgets[widgetVar];
              if (widget2) {
                if (!PrimeFaces.inArray(ids, widget2.id)) {
                  ids.push(widget2.id);
                }
              } else {
                PrimeFaces.widgetNotAvailable(widgetVar);
              }
            } else if (expression.indexOf("@(") == 0) {
              var elements = $(expression.substring(2, expression.length - 1));
              for (var j = 0; j < elements.length; j++) {
                var element = $(elements[j]), clientId = element.data(PrimeFaces.CLIENT_ID_DATA) || element.attr("id");
                if (clientId && !PrimeFaces.inArray(ids, clientId)) {
                  ids.push(clientId);
                }
              }
            } else if (expression == "@form") {
              var form = source.closest("form");
              if (form.length == 0) {
                PrimeFaces.error("Could not resolve @form for source '" + source.attr("id") + "'");
              } else {
                var clientId = form.data(PrimeFaces.CLIENT_ID_DATA) || form.attr("id");
                if (!PrimeFaces.inArray(ids, clientId)) {
                  ids.push(clientId);
                }
              }
            }
          }
        }
      }
      return ids;
    },
    /**
     * Splits the given search expression into its components. The components of a search expression are separated
     * by either a comman or a whitespace.
     * ```javascript
     * splitExpressions("") // => [""]
     * splitExpressions("form") // => ["form"]
     * splitExpressions("form,input") // => ["form", "input"]
     * splitExpressions("form input") // => ["form", "input"]
     * splitExpressions("form,@child(1,2)") // => ["form", "child(1,2)"]
     * ```
     * @param {string} expression A search expression to split.
     * @return {string[]} The individual components of the given search expression.
     */
    splitExpressions: function(expression) {
      var expressions = [];
      var buffer = "";
      var parenthesesCounter = 0;
      if (!expression) {
        return expressions;
      }
      for (var i = 0; i < expression.length; i++) {
        var c = expression[i];
        if (c === "(") {
          parenthesesCounter++;
        }
        if (c === ")") {
          parenthesesCounter--;
        }
        if ((c === " " || c === ",") && parenthesesCounter === 0) {
          expressions.push(buffer);
          buffer = "";
        } else {
          buffer += c;
        }
      }
      expressions.push(buffer);
      return expressions;
    }
  };
}

// src/core/core.utils.js
if (!PrimeFaces.utils) {
  PF.metaKey = function(e) {
    return PrimeFaces.utils.isMetaKey(e);
  };
  PrimeFaces.utils = {
    /**
     * Finds the element to which the overlay panel should be appended. If none is specified explicitly, append the
     * panel to the body.
     * @param {PrimeFaces.widget.DynamicOverlayWidget} widget A widget that has a panel to be appended.
     * @param {JQuery} target The DOM element that is the target of this overlay
     * @param {JQuery} overlay The DOM element for the overlay.
     * @return {string | null} The search expression for the element to which the overlay panel should be appended.
     */
    resolveAppendTo: function(widget2, target, overlay) {
      if (widget2 && target && target[0]) {
        var dialog = target[0].closest(".ui-dialog");
        if (dialog && overlay && overlay.length) {
          var $dialog = $(dialog);
          if ($dialog.css("position") === "fixed") {
            overlay.css("position", "fixed");
          }
          if (!widget2.cfg.appendTo) {
            widget2.cfg.appendTo = "@(body)";
            return widget2.cfg.appendTo;
          }
        }
        return widget2.cfg.appendTo;
      }
      return null;
    },
    /**
     * Finds the container element to which an overlay widget should be appended. This is either the element
     * specified by the widget configurations's `appendTo` attribute, or the document BODY element otherwise.
     * @param {PrimeFaces.widget.DynamicOverlayWidget} widget A widget to be displayed as an overlay.
     * @return {JQuery} The container DOM element to which the overlay is to be appended.
     */
    resolveDynamicOverlayContainer: function(widget2) {
      return widget2.cfg.appendTo ? PrimeFaces.expressions.SearchExpressionFacade.resolveComponentsAsSelector(widget2.jq, widget2.cfg.appendTo) : $(document.body);
    },
    /**
     * Cleanup the `detached` overlay.
     *
     * If you update a component, the overlay is rendered as specified in the component tree (XHTML view), but moved
     * to a different container via JavaScript.
     *
     * This means that after an AJAX update, we now have 2 overlays with the same id:
     *
     * 1. The newly rendered overlay, as a child of the element specified by the component tree (XHTML view)
     * 1. The old, detached overlay, as a child of the element specified by `appendTo` attribute
     *
     * We now need to remove the detached overlay. This is done by this function.
     * @param {PrimeFaces.widget.DynamicOverlayWidget} widget The (old) overlay widget instance.
     * @param {JQuery} overlay The DOM element for the overlay.
     * @param {string} overlayId ID of the overlay, usually the widget ID.
     * @param {JQuery} appendTo The container to which the overlay is appended.
     */
    cleanupDynamicOverlay: function(widget2, overlay, overlayId, appendTo) {
      if (widget2.cfg.appendTo) {
        var overlays = $("[id='" + overlayId + "']");
        if (overlays.length > 1) {
          appendTo.children("[id='" + overlayId + "']").remove();
        }
      }
    },
    /**
     * Removes the overlay from the overlay container as specified by the `appendTo` attribute.
     * @param {PrimeFaces.widget.DynamicOverlayWidget} widget The overlay widget instance.
     * @param {JQuery} overlay The (new) DOM element of the overlay.
     * @param {string} overlayId ID of the the overlay, usually the widget ID.
     * @param {JQuery} appendTo The container to which the overlay is appended.
     */
    removeDynamicOverlay: function(widget2, overlay, overlayId, appendTo) {
      appendTo.children("[id='" + overlayId + "']").not(overlay).remove();
    },
    /**
     * An overlay widget is moved in the DOM to the position as specified by the `appendTo` attribute. This function
     * moves the widget to its position in the DOM and removes old elements from previous AJAX updates.
     * @param {PrimeFaces.widget.BaseWidget} widget The overlay widget instance.
     * @param {JQuery} overlay The DOM element for the overlay.
     * @param {string} overlayId ID of the overlay, usually the widget ID.
     * @param {JQuery} appendTo The container to which the overlay is appended.
     */
    appendDynamicOverlay: function(widget2, overlay, overlayId, appendTo) {
      var elementParent = overlay.parent();
      if (!elementParent.is(appendTo) && !appendTo.is(overlay)) {
        PrimeFaces.utils.removeDynamicOverlay(widget2, overlay, overlayId, appendTo);
        overlay.appendTo(appendTo);
      }
    },
    /**
     * Creates a new (empty) container for a modal overlay. A modal overlay is an overlay that blocks the content
     * below it. To remove the modal overlay, use `PrimeFaces.utils.removeModal`.
     * @param {PrimeFaces.widget.BaseWidget} widget An overlay widget instance.
     * @param {JQuery} overlay The modal overlay element should be a DIV.
     * @param {() => JQuery} tabbablesCallback A supplier function that return a list of tabbable elements. A
     * tabbable element is an element to which the user can navigate to via the tab key.
     * @return {JQuery} The DOM element for the newly added modal overlay container.
     */
    addModal: function(widget2, overlay, tabbablesCallback) {
      var id = widget2.id, zIndex = overlay.css("z-index") - 1;
      const ConfirmDialog = getWidgetIfPresent("ConfirmDialog");
      var role = ConfirmDialog !== void 0 && widget2 instanceof ConfirmDialog ? "alertdialog" : "dialog";
      overlay.attr({
        "role": role,
        "aria-hidden": false,
        "aria-modal": true,
        "aria-live": "polite"
      });
      PrimeFaces.utils.preventTabbing(widget2, id, zIndex, tabbablesCallback);
      if (widget2.cfg.blockScroll) {
        PrimeFaces.utils.preventScrolling();
      }
      var modalId = id + "_modal";
      var modalOverlay = $('<div id="' + modalId + '" class="ui-widget-overlay ui-dialog-mask"></div>');
      modalOverlay.appendTo($(document.body));
      modalOverlay.css("z-index", String(zIndex));
      return modalOverlay;
    },
    /**
     * Given a modal overlay, prevents navigating via the tab key to elements outside of that modal overlay. Use
     * `PrimeFaces.utils.enableTabbing` to restore the original behavior.
     * @param {PrimeFaces.widget.BaseWidget} widget An overlay widget instance.
     * @param {string} id ID of a modal overlay widget.
     * @param {number} zIndex The z-index of the modal overlay.
     * @param {() => JQuery} tabbablesCallback A supplier function that return a list of tabbable elements. A
     * tabbable element is an element to which the user can navigate to via the tab key.
     */
    preventTabbing: function(widget2, id, zIndex, tabbablesCallback) {
      var $documentInIframe = widget2.cfg && widget2.cfg.iframe ? widget2.cfg.iframe.get(0).contentWindow.document : void 0;
      var $document = $($documentInIframe ? [document, $documentInIframe] : document);
      $document.on("focus." + id + " mousedown." + id + " mouseup." + id, function(event) {
        var target = $(event.target);
        if (!target.is(document.body) && (!$documentInIframe && target.zIndex() < zIndex && target.parent().zIndex() < zIndex)) {
          event.preventDefault();
        }
      });
      $document.on("keydown." + id, function(event) {
        var target = $(event.target);
        if (event.key === "Tab") {
          var tabbables = tabbablesCallback();
          if (tabbables.length) {
            var first = tabbables.filter(":first"), last = tabbables.filter(":last"), focusingRadioItem = null;
            if (first.is(":radio")) {
              focusingRadioItem = tabbables.filter('[name="' + CSS.escape(first.attr("name")) + '"]').filter(":checked");
              if (focusingRadioItem.length > 0) {
                first = focusingRadioItem;
              }
            }
            if (last.is(":radio")) {
              focusingRadioItem = tabbables.filter('[name="' + CSS.escape(last.attr("name")) + '"]').filter(":checked");
              if (focusingRadioItem.length > 0) {
                last = focusingRadioItem;
              }
            }
            if (target.is(document.body)) {
              first.focus(1);
              event.preventDefault();
            } else if (event.target === last[0] && !event.shiftKey) {
              first.focus(1);
              event.preventDefault();
            } else if (event.target === first[0] && event.shiftKey) {
              last.focus(1);
              event.preventDefault();
            }
          }
        } else if (event.ctrlKey) {
          return;
        } else if (!target.is(document.body) && (!$documentInIframe && target.zIndex() < zIndex && target.parent().zIndex() < zIndex)) {
          event.preventDefault();
        }
      });
    },
    /**
     * Given a modal overlay widget, removes the modal overlay element from the DOM. This reverts the changes as
     * made by `PrimeFaces.utils.addModal`.
     * @param {PrimeFaces.widget.BaseWidget} widget A modal overlay widget instance.
     * @param {JQuery | null} [overlay] The modal overlay element should be a DIV.
     */
    removeModal: function(widget2, overlay) {
      var id = widget2.id;
      var modalId = id + "_modal";
      if (overlay) {
        overlay.attr({
          "aria-hidden": true,
          "aria-modal": false,
          "aria-live": "off"
        });
      }
      $(PrimeFaces.escapeClientId(modalId)).remove();
      $(document.body).children("[id='" + modalId + "']").remove();
      if (widget2.cfg.blockScroll) {
        PrimeFaces.utils.enableScrolling();
      }
      PrimeFaces.utils.enableTabbing(widget2, id);
    },
    /**
     * Enables navigating to an element via the tab key outside an overlay widget. Usually called when a modal
     * overlay is removed. This reverts the changes as made by `PrimeFaces.utils.preventTabbing`.
     * @param {PrimeFaces.widget.BaseWidget} widget A modal overlay widget instance.
     * @param {string} id ID of a modal overlay, usually the widget ID.
     */
    enableTabbing: function(widget2, id) {
      var $documentInIframe = widget2.cfg && widget2.cfg.iframe ? widget2.cfg.iframe.get(0).contentWindow.document : void 0;
      var $document = $($documentInIframe ? [document, $documentInIframe] : document);
      $document.off("focus." + id + " mousedown." + id + " mouseup." + id + " keydown." + id);
    },
    /**
     * Checks if a modal with the given ID is currently displayed.
     * @param {string} id The base ID of a modal overlay, usually the widget ID.
     * @return {boolean} Whether the modal with the given ID is displayed.
     */
    isModalActive: function(id) {
      var modalId = id + "_modal";
      return $(PrimeFaces.escapeClientId(modalId)).length === 1 || $(document.body).children("[id='" + modalId + "']").length === 1;
    },
    /**
     * Is this scrollable parent a type that should be bound to the window element.
     *
     * @param {JQuery | undefined | null} jq An element to check if should be bound to window scroll. 
     * @return {boolean} true this this JQ should be bound to the window scroll event
     */
    isScrollParentWindow: function(jq) {
      return jq && (jq.is("body") || jq.is("html") || jq[0].nodeType === 9);
    },
    /**
     * Registers a callback on the document that is invoked when the user clicks on an element outside the overlay
     * widget.
     *
     * @param {PrimeFaces.widget.BaseWidget} widget An overlay widget instance.
     * @param {string} hideNamespace A click event with a namespace to listen to, such as `mousedown.widgetId`.
     * @param {JQuery} overlay The DOM element for the overlay.
     * @param {((event: JQuery.TriggeredEvent) => JQuery) | undefined} resolveIgnoredElementsCallback The callback which
     * resolves the elements to ignore when the user clicks outside the overlay. The `hideCallback` is not invoked
     * when the user clicks on one those elements.
     * @param {(event: JQuery.TriggeredEvent, eventTarget: JQuery) => void} hideCallback A callback that is invoked when the
     * user clicks on an element outside the overlay widget.
     * @return {PrimeFaces.UnbindCallback} Unbind callback handler
     */
    registerHideOverlayHandler: function(widget2, hideNamespace, overlay, resolveIgnoredElementsCallback, hideCallback) {
      widget2.addDestroyListener(function() {
        $(document).off(hideNamespace);
      });
      $(document).off(hideNamespace).on(hideNamespace, function(e) {
        if (overlay.is(":hidden") || overlay.css("visibility") === "hidden") {
          return;
        }
        var $eventTarget = $(e.target);
        if (resolveIgnoredElementsCallback) {
          var elementsToIgnore = resolveIgnoredElementsCallback(e);
          if (elementsToIgnore) {
            if (elementsToIgnore.is($eventTarget) || elementsToIgnore.has($eventTarget).length > 0) {
              return;
            }
          }
        }
        if (PrimeFaces.hideOverlaysOnViewportChange === true) {
          hideCallback(e, $eventTarget);
        }
      });
      return {
        unbind: function() {
          $(document).off(hideNamespace);
        }
      };
    },
    /**
     * Registers a callback that is invoked when the window is resized.
     * @param {PrimeFaces.widget.BaseWidget} widget A widget instance for which to register a resize handler.
     * @param {string} resizeNamespace A resize event with a namespace to listen to, such as `resize.widgetId`.
     * @param {JQuery | undefined} element An element that prevents the callback from being invoked when it is not
     * visible, usually a child element of the widget.
     * @param {(event: JQuery.TriggeredEvent) => void} resizeCallback A callback that is invoked when the window is resized.
     * @param {string} [params] Optional CSS selector. If given, the callback is invoked only when the resize event
     * is triggered on an element the given selector.
     * @return {PrimeFaces.UnbindCallback} Unbind callback handler
     */
    registerResizeHandler: function(widget2, resizeNamespace, element, resizeCallback, params) {
      const unbindResizeHandler = function() {
        $(window).off(resizeNamespace);
      };
      if (PrimeFaces.env.mobile) {
        return { unbind: unbindResizeHandler };
      }
      widget2.addDestroyListener(unbindResizeHandler);
      widget2.addRefreshListener(unbindResizeHandler);
      $(window).off(resizeNamespace).on(resizeNamespace, params || null, function(e) {
        if (element && (element.is(":hidden") || element.css("visibility") === "hidden")) {
          return;
        }
        resizeCallback(e);
      });
      return { unbind: unbindResizeHandler };
    },
    /**
     * Sets up an overlay widget. Appends the overlay widget to the element as specified by the `appendTo`
     * attribute. Also makes sure the overlay widget is handled properly during AJAX updates.
     * @param {PrimeFaces.widget.DynamicOverlayWidget} widget An overlay widget instance.
     * @param {JQuery} overlay The DOM element for the overlay.
     * @param {string} overlayId The ID of the overlay, usually the widget ID.
     * @return {JQuery} The overlay that was passed to this function.
     */
    registerDynamicOverlay: function(widget2, overlay, overlayId) {
      if (widget2.cfg.appendTo) {
        var appendTo = PrimeFaces.utils.resolveDynamicOverlayContainer(widget2);
        PrimeFaces.utils.appendDynamicOverlay(widget2, overlay, overlayId, appendTo);
        widget2.addDestroyListener(function() {
          var appendTo2 = PrimeFaces.utils.resolveDynamicOverlayContainer(widget2);
          PrimeFaces.utils.removeDynamicOverlay(widget2, null, overlayId, appendTo2);
        });
        widget2.addRefreshListener(function() {
          var appendTo2 = PrimeFaces.utils.resolveDynamicOverlayContainer(widget2);
          PrimeFaces.utils.cleanupDynamicOverlay(widget2, overlay, overlayId, appendTo2);
        });
      }
      return overlay;
    },
    /**
     * Registers a callback that is invoked when a scroll event is triggered on the DOM element for the widget.
     * @param {PrimeFaces.widget.BaseWidget} widget A widget instance for which to register a scroll handler.
     * @param {string} scrollNamespace A scroll event with a namespace, such as `scroll.widgetId`.
     * @param {(event: JQuery.TriggeredEvent) => void} scrollCallback A callback that is invoked when a scroll event
     * occurs on the widget.
     * @return {PrimeFaces.UnbindCallback} unbind callback handler
     */
    registerScrollHandler: function(widget2, scrollNamespace, scrollCallback) {
      var widgetJq = widget2.getJQ();
      var scrollParent = widgetJq && typeof widgetJq.scrollParent === "function" ? widgetJq.scrollParent() : null;
      if (!scrollParent || PrimeFaces.utils.isScrollParentWindow(scrollParent)) {
        scrollParent = $(window);
      }
      var scrollHandler = function(e) {
        scrollCallback(e);
      };
      scrollParent.off(scrollNamespace).on(scrollNamespace, scrollHandler);
      widget2.addDestroyListener(function() {
        scrollParent.off(scrollNamespace, scrollHandler);
      });
      widget2.addRefreshListener(function() {
        scrollParent.off(scrollNamespace, scrollHandler);
      });
      return {
        unbind: function() {
          scrollParent.off(scrollNamespace, scrollHandler);
        }
      };
    },
    /**
     * Registers a callback that is invoked when a scroll event is triggered on The DOM element for the widget that
     * has a connected overlay.
     * @param {PrimeFaces.widget.BaseWidget} widget A widget instance for which to register a scroll handler.
     * @param {string} scrollNamespace A scroll event with a namespace, such as `scroll.widgetId`.
     * @param {JQuery | undefined} element A DOM element used to find scrollable parents.
     * @param {(event: JQuery.TriggeredEvent) => void} scrollCallback A callback that is invoked when a scroll event
     * occurs on the widget.
     * @return {PrimeFaces.UnbindCallback} unbind callback handler
     */
    registerConnectedOverlayScrollHandler: function(widget2, scrollNamespace, element, scrollCallback) {
      var scrollableParents = PrimeFaces.utils.getScrollableParents((element || widget2.getJQ()).get(0));
      for (var i = 0; i < scrollableParents.length; i++) {
        var scrollParent = $(scrollableParents[i]);
        widget2.addDestroyListener(function() {
          scrollParent.off(scrollNamespace);
        });
        scrollParent.off(scrollNamespace).on(scrollNamespace, function(e) {
          scrollCallback(e);
        });
      }
      return {
        unbind: function() {
          for (var i2 = 0; i2 < scrollableParents.length; i2++) {
            $(scrollableParents[i2]).off(scrollNamespace);
          }
        }
      };
    },
    /**
     * Finds scrollable parents (not  the document).
     * @param {Element} element An element used to find its scrollable parents.
     * @return {Element[]} the list of scrollable parents.
     */
    getScrollableParents: function(element) {
      var scrollableParents = [];
      var getParents = function(element2, parents2) {
        return element2["parentNode"] == null ? parents2 : getParents(element2.parentNode, parents2.concat([element2.parentNode]));
      };
      var addScrollableParent = function(node) {
        if (PrimeFaces.utils.isScrollParentWindow($(node))) {
          scrollableParents.push(window);
        } else {
          scrollableParents.push(node);
        }
      };
      if (element) {
        var parents = getParents(element, []);
        var overflowRegex = /(auto|scroll)/;
        var overflowCheck = function(node) {
          var styleDeclaration = window["getComputedStyle"](node, null);
          return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
        };
        for (var i = 0; i < parents.length; i++) {
          var parent = parents[i];
          var scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
          if (scrollSelectors) {
            var selectors = scrollSelectors.split(",");
            for (var j = 0; j < selectors.length; j++) {
              var selector = selectors[j];
              var el = parent.querySelector(selector);
              if (el && overflowCheck(el)) {
                addScrollableParent(el);
              }
            }
          }
          if (parent.nodeType !== 9 && overflowCheck(parent)) {
            addScrollableParent(parent);
          }
        }
      }
      if (scrollableParents.length === 0) {
        scrollableParents.push(window);
      }
      return scrollableParents;
    },
    /**
     * Removes a scroll handler as registered by `PrimeFaces.utils.registerScrollHandler`.
     * @param {PrimeFaces.widget.BaseWidget} widget A widget instance for which a scroll handler was registered.
     * @param {string} scrollNamespace A scroll event with a namespace, such as `scroll.widgetId`.
     */
    unbindScrollHandler: function(widget2, scrollNamespace) {
      var scrollParent = widget2.getJQ().scrollParent();
      if (PrimeFaces.utils.isScrollParentWindow(scrollParent)) {
        $(window).off(scrollNamespace);
      } else {
        scrollParent.off(scrollNamespace);
      }
    },
    /**
     * Prevents the user from scrolling the document BODY element. You can enable scrolling again via
     * `PrimeFaces.utils.enableScrolling`.
     */
    preventScrolling: function() {
      $(document.body).addClass("ui-overflow-hidden");
    },
    /**
     * Enables scrolling again if previously disabled via `PrimeFaces.utils.preventScrolling`.
     */
    enableScrolling: function() {
      $(document.body).removeClass("ui-overflow-hidden");
    },
    /**
     * Calculates an element offset relative to the current scroll position of the window.
     * @param {JQuery} element An element for which to calculate the scroll position.
     * @return {JQuery.Coordinates} The offset of the given element, relative to the current scroll position of the
     * window.
     */
    calculateRelativeOffset: function(element) {
      var result = {
        left: 0,
        top: 0
      };
      var offset = element.offset();
      var scrollTop = $(window).scrollTop();
      var scrollLeft = $(window).scrollLeft();
      result.top = offset.top - scrollTop;
      result.left = offset.left - scrollLeft;
      return result;
    },
    /**
     * Blocks the enter key for an event like `keyup` or `keydown`. Useful in filter input events in many
     * components.
     * @param {JQuery.TriggeredEvent} e The key event that occurred.
     * @return {boolean} `true` if ENTER key was blocked, false if not.
     */
    blockEnterKey: function(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        return true;
      }
      return false;
    },
    /**
     * Is this CMD on MacOs or CTRL key on other OSes. 
     * @param {JQuery.TriggeredEvent} e The key event that occurred.
     * @return {boolean} `true` if the key is a meta key, or `false` otherwise.
     */
    isMetaKey: function(e) {
      if (e.originalEvent) {
        return PrimeFaces.env.browser.mac ? e.originalEvent.metaKey : e.originalEvent.ctrlKey;
      } else {
        return PrimeFaces.env.browser.mac ? e.metaKey : e.ctrlKey;
      }
    },
    /**
     * Is this SPACE or ENTER key. Used throughout codebase to trigger and action.
     * @param {JQuery.TriggeredEvent} e The key event that occurred.
     * @return {boolean} `true` if the key is an action key, or `false` otherwise.
     */
    isActionKey: function(e) {
      return e.code === "Space" || e.key === "Enter";
    },
    /**
     * Checks if the key pressed is a printable key like 'a' or '4' etc.
     * @param {JQuery.TriggeredEvent} e The key event that occurred.
     * @return {boolean} `true` if the key is a printable key, or `false` otherwise.
     */
    isPrintableKey: function(e) {
      return e && e.key && (e.key.length === 1 || e.key === "Unidentified");
    },
    /**
     * Checks if the key pressed is cut, copy, or paste.
     * @param {JQuery.TriggeredEvent} e The key event that occurred.
     * @return {boolean} `true` if the key is cut/copy/paste, or `false` otherwise.
     */
    isClipboardKey: function(e) {
      switch (e.key) {
        case "a":
        case "A":
        case "c":
        case "C":
        case "x":
        case "X":
        case "v":
        case "V":
          return PrimeFaces.utils.isMetaKey(e);
        default:
          return false;
      }
    },
    /**
     * Ignores unprintable keys on filter input text box. Useful in filter input events in many components.
     * @param {JQuery.TriggeredEvent} e The key event that occurred.
     * @return {boolean} `true` if the one of the keys to ignore was pressed, or `false` otherwise.
     */
    ignoreFilterKey: function(e) {
      if (PrimeFaces.utils.isClipboardKey(e)) {
        return false;
      }
      switch (e.code) {
        case "Backspace":
        case "Enter":
        case "NumpadEnter":
        case "Delete":
          return false;
        default:
          return !PrimeFaces.utils.isPrintableKey(e);
      }
    },
    /**
     * Exclude elements such as buttons, links, inputs from being touch swiped.  Users can always add
     * `class="noSwipe"` to any element to exclude it as well.
     * @return {string} A CSS selector for the elements to be excluded from being touch swiped.
     */
    excludedSwipeElements: function() {
      return ":button:enabled, :input:enabled, a, [role='combobox'], .noSwipe";
    },
    /**
     * Helper to open a new URL and if CTRL is held down open in new browser tab.
     *
     * @param {JQuery.TriggeredEvent} event The click event that occurred.
     * @param {JQuery} link The URL anchor link that was clicked.
     */
    openLink: function(event, link) {
      var href = link.attr("href");
      var win;
      if (href && href !== "#") {
        if (event.ctrlKey) {
          win = window.open(href, "_blank");
        } else {
          var target = link.attr("target") || "_self";
          win = window.open(href, target);
        }
        if (win) {
          win.focus();
        }
      }
      event.preventDefault();
    },
    /**
     * Enables a widget for editing and sets it style as enabled.
     *
     * @param {JQuery} jq a required jQuery element to enable
     * @param {JQuery | undefined | null} [input] an optional jQuery input to enable (will use jq if null)
     */
    enableInputWidget: function(jq, input) {
      if (!input) {
        input = jq;
      }
      if (input.is(":disabled")) {
        input.prop("disabled", false);
      }
      jq.removeClass("ui-state-disabled");
    },
    /**
     * Disables a widget from editing and sets it style as disabled.
     *
     * @param {JQuery} jq a required jQuery element to disable
     * @param {JQuery | undefined | null} [input] an optional jQuery input to disable (will use jq if null)
     */
    disableInputWidget: function(jq, input) {
      if (!input) {
        input = jq;
      }
      if (!input.is(":disabled")) {
        input.prop("disabled", true);
      }
      jq.addClass("ui-state-disabled");
    },
    /**
     * Enables a button.
     *
     * @param {JQuery} jq a required jQuery element to enable
     */
    enableButton: function(jq) {
      if (jq) {
        jq.removeClass("ui-state-disabled").prop("disabled", false).removeAttr("aria-disabled");
      }
    },
    /**
     * Disables a button from being clicked.
     *
     * @param {JQuery} jq a required jQuery button to disable
     */
    disableButton: function(jq) {
      if (jq) {
        jq.removeClass("ui-state-hover ui-state-focus ui-state-active").addClass("ui-state-disabled").attr("disabled", "disabled").attr("aria-disabled", "true");
      }
    },
    /**
     * Enables CSS and jQuery animation.
     */
    enableAnimations: function() {
      $.fx.off = false;
      PrimeFaces.animationEnabled = true;
    },
    /**
     * Disables CSS and jQuery animation.
     */
    disableAnimations: function() {
      $.fx.off = true;
      PrimeFaces.animationEnabled = false;
    },
    /**
     * CSS Transition method for overlay panels such as SelectOneMenu/SelectCheckboxMenu/Datepicker's panel etc.
     * @param {JQuery | undefined | null} element An element for which to execute the transition.
     * @param {string | undefined | null} className Class name used for transition phases.
     * @return {PrimeFaces.CssTransitionHandler | null} Two handlers named `show` and `hide` that should be invoked
     * when the element gets shown and hidden. If the given element or className property is `undefined` or `null`,
     * this function returns `null`.
     */
    registerCSSTransition: function(element, className) {
      if (element && className != null) {
        var classNameStates = {
          "enter": className + "-enter",
          "enterActive": className + "-enter-active",
          "enterDone": className + "-enter-done",
          "exit": className + "-exit",
          "exitActive": className + "-exit-active",
          "exitDone": className + "-exit-done"
        };
        var callTransitionEvent = function(callbacks, key, param) {
          if (callbacks != null && callbacks[key] != null) {
            callbacks[key].call(param);
          }
        };
        return {
          show: function(callbacks) {
            element.removeClass([classNameStates.exit, classNameStates.exitActive, classNameStates.exitDone]);
            if (element.is(":hidden")) {
              if (PrimeFaces.animationEnabled) {
                PrimeFaces.animationActive = true;
                element.css("display", "block").addClass(classNameStates.enter);
                callTransitionEvent(callbacks, "onEnter");
                requestAnimationFrame(function() {
                  PrimeFaces.queueTask(function() {
                    element.addClass(classNameStates.enterActive);
                  });
                  element.one("transitionrun.css-transition-show", function(event) {
                    callTransitionEvent(callbacks, "onEntering", event);
                  }).one("transitioncancel.css-transition-show", function() {
                    element.removeClass([classNameStates.enter, classNameStates.enterActive, classNameStates.enterDone]);
                    PrimeFaces.animationActive = false;
                  }).one("transitionend.css-transition-show", function(event) {
                    element.removeClass([classNameStates.enterActive, classNameStates.enter]).addClass(classNameStates.enterDone);
                    callTransitionEvent(callbacks, "onEntered", event);
                    PrimeFaces.animationActive = false;
                  });
                });
              } else {
                element.css("display", "block");
                callTransitionEvent(callbacks, "onEnter");
                callTransitionEvent(callbacks, "onEntering");
                callTransitionEvent(callbacks, "onEntered");
              }
            }
          },
          hide: function(callbacks) {
            element.removeClass([classNameStates.enter, classNameStates.enterActive, classNameStates.enterDone]);
            if (element.is(":visible")) {
              if (PrimeFaces.animationEnabled) {
                PrimeFaces.animationActive = true;
                element.addClass(classNameStates.exit);
                callTransitionEvent(callbacks, "onExit");
                PrimeFaces.queueTask(function() {
                  element.addClass(classNameStates.exitActive);
                });
                element.one("transitionrun.css-transition-hide", function(event) {
                  callTransitionEvent(callbacks, "onExiting", event);
                }).one("transitioncancel.css-transition-hide", function() {
                  element.removeClass([classNameStates.exit, classNameStates.exitActive, classNameStates.exitDone]);
                  PrimeFaces.animationActive = false;
                }).one("transitionend.css-transition-hide", function(event) {
                  element.css("display", "none").removeClass([classNameStates.exitActive, classNameStates.exit]).addClass(classNameStates.exitDone);
                  callTransitionEvent(callbacks, "onExited", event);
                  PrimeFaces.animationActive = false;
                });
              } else {
                callTransitionEvent(callbacks, "onExit");
                callTransitionEvent(callbacks, "onExiting");
                callTransitionEvent(callbacks, "onExited");
                element.css("display", "none");
              }
            }
          }
        };
      }
      return null;
    },
    /**
     * Count the bytes of the inputtext.
     * borrowed from the ckeditor wordcount plugin
     * @private
     * @param {string} text Text to count bytes from.
     * @return {number} the byte count
     */
    countBytes: function(text) {
      var count = 0, stringLength = text.length, i;
      text = String(text || "");
      for (i = 0; i < stringLength; i++) {
        var partCount = encodeURI(text[i]).split("%").length;
        count += partCount === 1 ? 1 : partCount - 1;
      }
      return count;
    },
    /**
     * Formats the allowTypes regex pattern in a more human-friendly format.
     * @param {string} allowTypes The allowTypes regex pattern to format
     * @return {string} The allowTypes formatted in a more human-friendly format.
     */
    formatAllowTypes: function(allowTypes) {
      return allowTypes === void 0 ? "" : allowTypes.replace("/(\\.|\\/)(", "").replace(")$/", "");
    },
    /**
     * Formats the given data size in a more human-friendly format, e.g., `1.5 MB` etc.
     * @param {number} bytes File size in bytes to format
     * @return {string} The given file size, formatted in a more human-friendly format.
     */
    formatBytes: function(bytes) {
      if (bytes === void 0)
        return "";
      if (bytes === 0)
        return "N/A";
      var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      if (i === 0)
        return bytes + " " + sizes[i];
      else
        return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
    },
    /**
     * This method concatenates the classes into a string according to the condition of the arguments and returns it.
     * @private
     * @return {string} class
     */
    styleClass: function() {
      var args = Array.prototype.slice.call(arguments);
      if (args) {
        var classes = [];
        for (var i = 0; i < args.length; i++) {
          var className = args[i];
          if (!className) continue;
          var type = typeof className;
          if (type === "string" || type === "number") {
            classes.push(className);
          } else if (type === "object") {
            var _classes = Array.isArray(className) ? className : Object.keys(className).map(function(key) {
              return !!className[key] ? key : null;
            });
            classes = _classes.length ? classes.concat(_classes.filter(function(c) {
              return !!c;
            })) : classes;
          }
        }
        return classes.join(" ");
      }
      return void 0;
    },
    /**
     * When configuring numeric value like 'showDelay' and the user wants '0' we can't treat 0 as Falsey 
     * so we make the value 0.  Otherwise Falsey returns the default value.
     *
     * @param {number|undefined} value the original value
     * @param {number} defaultValue the required default value if value is not set
     * @return {number} the calculated value
     */
    defaultNumeric: function(value, defaultValue) {
      if (value === 0) {
        return 0;
      }
      return value || defaultValue;
    },
    /**
     * Is this component wrapped in a float label?
     *
     * @param {JQuery | undefined | null} jq An element to check if wrapped in float label. 
     * @return {boolean} true this this JQ has a float label parent
     */
    hasFloatLabel: function(jq) {
      if (!jq || !jq.parent()) {
        return false;
      }
      return jq.parent().hasClass("ui-float-label");
    },
    /**
     * Handles floating label CSS if wrapped in a floating label.
     * @private
     * @param {JQuery | undefined} element the to add the CSS classes to
     * @param {JQuery | undefined} inputs the input(s) to check if filled
     * @param {boolean | undefined} hasFloatLabel true if this is wrapped in a floating label
     */
    updateFloatLabel: function(element, inputs, hasFloatLabel) {
      if (!element || !inputs || !hasFloatLabel) {
        return;
      }
      var isEmpty = true;
      inputs.each(function() {
        var input = $(this);
        if (input.is("select")) {
          if (input.attr("multiple")) {
            isEmpty = input.find("option:selected").length === 0;
          } else {
            var value = input.find("option:selected").attr("value");
            isEmpty = value === null || value === "";
          }
        } else {
          var value = input.val();
          isEmpty = value === null || value === "";
        }
        if (!isEmpty) {
          return false;
        }
      });
      if (isEmpty) {
        element.removeClass("ui-inputwrapper-filled");
      } else {
        element.addClass("ui-inputwrapper-filled");
      }
    },
    /**
     * Decode escaped XML into regular string.
     *
     * @param {string | undefined} input the input to check if filled
     * @return {string | undefined} either the original string or escaped XML
     */
    decodeXml: function(input) {
      if (/&amp;|&quot;|&#39;|'&lt;|&gt;/.test(input)) {
        var doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
      }
      return input;
    },
    /**
     * Queue a microtask if delay is 0 or less and setTimeout if > 0.
     *
     * @param {() => void} fn the function to call after the delay
     * @param {number | undefined} [delay] the optional delay in milliseconds
     * @return {number | undefined} the id associated to the timeout or undefined if no timeout used
     */
    queueTask: function(fn, delay) {
      if (!delay || delay <= 0) {
        window.queueMicrotask(fn);
        return void 0;
      }
      return window.setTimeout(fn, delay);
    },
    /**
     * Killswitch that kills all AJAX requests, running Pollers and IdleMonitors.
     * @see {@link https://github.com/primefaces/primefaces/issues/10299|GitHub Issue 10299}
     */
    killswitch: function() {
      PrimeFaces.warn("Abort all AJAX requests!");
      PrimeFaces.ajax.Queue.abortAll();
      for (var item in PrimeFaces.widgets) {
        widget = PrimeFaces.widgets[item];
        const Poll = getWidgetIfPresent("Poll");
        if (Poll !== void 0 && widget instanceof Poll) {
          PrimeFaces.warn("Stopping Poll");
          widget.stop();
        }
        const IdleMonitor = getWidgetIfPresent("IdleMonitor");
        if (IdleMonitor !== void 0 && widget instanceof IdleMonitor) {
          PrimeFaces.warn("Stopping IdleMonitor");
          widget.pause();
        }
      }
    },
    /**
     * Retrieves the subsequent z-index for a sticky element. Typically, a sticky element requires a 
     * z-index higher than the current one, but certain scenarios arise, such as when an overlay mask 
     * is present or when there are multiple sticky elements on the page, necessitating a z-index 
     * one lower than the highest among them.
     *
     * @return {string} the next `z-index` as a string.
     * @see {@link https://github.com/primefaces/primefaces/issues/10299|GitHub Issue 10299}
     * @see {@link https://github.com/primefaces/primefaces/issues/9259|GitHub Issue 9259}
     */
    nextStickyZindex: function() {
      var highestStickyZIndex = parseInt($(".ui-sticky:visible").last().zIndex()) || parseInt(PrimeFaces.nextZindex()) + 1;
      var overlays = $(".ui-widget-overlay:visible");
      if (overlays.length) {
        overlays.each(function() {
          var overlayZIndex = parseInt($(this).zIndex()) - 1;
          highestStickyZIndex = Math.min(overlayZIndex, highestStickyZIndex);
        });
      } else {
        PrimeFaces.zindex = highestStickyZIndex - 1;
      }
      return highestStickyZIndex - 1;
    },
    /**
     * Deletes all events, 'on' attributes, data, and the element itself in a recursive manner, 
     * ensuring that the garbage collector does not retain any references to this element or its children.
     *
     * @param {JQuery | undefined} jq jQuery object to cleanse
     * @param {boolean} [clearData] flag to clear data off elements (default to true)
     * @param {boolean} [removeElement] flag to remove the element from DOM (default to true)
     * @see {@link https://github.com/primefaces/primefaces/issues/11696|GitHub Issue 11696}
     * @see {@link https://github.com/primefaces/primefaces/issues/11702|GitHub Issue 11702}
     */
    cleanseDomElement: function(jq, clearData = true, removeElement = true) {
      if (!jq || !jq.length) {
        return;
      }
      if (!jq.is("select, svg, svg *")) {
        jq.children().each(function() {
          PrimeFaces.utils.cleanseDomElement($(this), clearData, removeElement);
        });
      }
      var attributes = jq[0].attributes;
      for (var i = 0; i < attributes.length; i++) {
        var attributeName = attributes[i].name;
        if (attributeName.startsWith("on")) {
          jq.removeAttr(attributeName);
        }
      }
      if (removeElement) {
        jq.triggerHandler("remove");
        jq.get(0).remove();
      }
      jq.off();
      if (clearData) {
        jq.removeData();
      }
    },
    /**
     * Replaces a specific CSS icon class on an element and appends a new icon class.
     * If the target class is found, all classes after it are removed and the new class is added.
     *
     * @param {JQuery | undefined} jq - The jQuery element to modify.
     * @param {string} addIcon - The new CSS icon class to add.
     */
    replaceIcon: function(jq, addIcon) {
      if (!jq || !jq.length) {
        return;
      }
      var classes = jq.attr("class").split(" ");
      var targetIndex = classes.indexOf("ui-c");
      if (targetIndex !== -1) {
        var newClasses = classes.slice(0, targetIndex + 1).join(" ") + " " + addIcon;
        jq.attr("class", newClasses).data("p-icon", addIcon);
      }
    }
  };
  if (PrimeFaces.env.prefersReducedMotion) {
    PrimeFaces.utils.disableAnimations();
    PrimeFaces.warn("Animations are disabled because OS has requested prefers-reduced-motion: reduce");
  }
}

// src/core/core.resources.js
if (!PrimeFaces.resources) {
  PrimeFaces.resources = {
    /**
     * Builds a JSF resource URL for given resource.
     * 
     * ```javascript
     * getFacesResource("main.css", "pf", "4.2.0") // => "https://www.primefaces.org/showcase/javax.faces.resource/main.css.xhtml?ln=pf&v=4.2.0"
     * ```
     *
     * @param {string} name The name of the resource, such as `primefaces.js`.
     * @param {string} library The library of the resource, such as `primefaces`.
     * @param {string} version The version of the library, such as `5.1`.
     * @return {string} The JSF resource URL for loading the resource.
     */
    getFacesResource: function(name, library, version) {
      if (name.indexOf("/") === 0) {
        name = name.substring(1, name.length);
      }
      var scriptURI = PrimeFaces.resources.getResourceScriptURI();
      var scriptName = PrimeFaces.resources.getResourceScriptName(scriptURI);
      scriptURI = scriptURI.replace(scriptName, name);
      var libraryRegex = new RegExp("[?&]([^&=]*)ln=(.*?)(&|$)");
      var currentLibraryName = "ln=" + libraryRegex.exec(scriptURI)[2];
      var namespace = "";
      var urlParametersAreNamespaced = !(scriptURI.indexOf("?" + currentLibraryName) > -1 || scriptURI.indexOf("&" + currentLibraryName) > -1);
      if (urlParametersAreNamespaced) {
        namespace = new RegExp("[?&]([^&=]+)" + currentLibraryName + "($|&)").exec(scriptURI)[1];
      }
      scriptURI = scriptURI.replace(namespace + currentLibraryName, namespace + "ln=" + library);
      if (version) {
        var extractedVersion = new RegExp("[?&]" + namespace + "v=([^&]*)").exec(scriptURI)[1];
        scriptURI = scriptURI.replace(namespace + "v=" + extractedVersion, namespace + "v=" + version);
      }
      var prefix = window.location.protocol + "//" + window.location.host;
      return scriptURI.indexOf(prefix) >= 0 ? scriptURI : prefix + scriptURI;
    },
    /**
     * Checks if the FacesServlet is mapped with an extension mapping. Common extension mapping are for example:
     * 
     * - .jsf
     * - .xhtml
     * 
     * @return {boolean} `true` if the FacesServlet is mapped with an extension mapping, `false` otherwise.
     */
    isExtensionMapping: function() {
      if (!PrimeFaces.resources.IS_EXTENSION_MAPPING) {
        var scriptURI = PrimeFaces.resources.getResourceScriptURI();
        var scriptName = PrimeFaces.resources.getResourceScriptName(scriptURI);
        PrimeFaces.resources.IS_EXTENSION_MAPPING = scriptURI.charAt(scriptURI.indexOf(scriptName) + scriptName.length) === ".";
      }
      return PrimeFaces.IS_EXTENSION_MAPPING;
    },
    /**
     * Finds the URL extension of currently included resources, such as `jsf` or `xhtml`.
     * 
     * This should only be used if extensions mapping is used, see `PrimeFaces.isExtensionMapping`.
     * 
     * @return {string} The URL extension.
     */
    getResourceUrlExtension: function() {
      if (!PrimeFaces.resources.RESOURCE_URL_EXTENSION) {
        var scriptURI = PrimeFaces.resources.getResourceScriptURI();
        var scriptName = PrimeFaces.resources.getResourceScriptName(scriptURI);
        PrimeFaces.resources.RESOURCE_URL_EXTENSION = RegExp(scriptName + ".([^?]*)").exec(scriptURI)[1];
      }
      return PrimeFaces.resources.RESOURCE_URL_EXTENSION;
    },
    /**
     * Given a URI, find the name of the script, such as `primefaces-extensions.js`.
     * 
     * @param {string} scriptURI The URI of a script
     * @return {string} The name of the script.
     */
    getResourceScriptName: function(scriptURI) {
      var scriptRegex = new RegExp("\\/?" + PrimeFaces.RESOURCE_IDENTIFIER + "(\\/|=)(.*?)\\.js");
      return scriptRegex.exec(scriptURI)[2] + ".js";
    },
    /**
     * Gets the resource URI of the first Javascript JS file served as a JSF resource.
     * 
     * @return {string} The first JavasScript resource URI.
     */
    getResourceScriptURI: function() {
      if (!PrimeFaces.resources.SCRIPT_URI) {
        let findScriptWithVersionParam2 = function(scripts) {
          scripts.each(function() {
            var src = $(this).attr("src");
            if (src && src.indexOf("v=") !== -1) {
              PrimeFaces.resources.SCRIPT_URI = src;
              return false;
            }
          });
        };
        var findScriptWithVersionParam = findScriptWithVersionParam2;
        findScriptWithVersionParam2($('script[src*="/' + PrimeFaces.RESOURCE_IDENTIFIER + '/"]'));
        if (!PrimeFaces.resources.SCRIPT_URI) {
          findScriptWithVersionParam2($('script[src*="' + PrimeFaces.RESOURCE_IDENTIFIER + '="]'));
        }
      }
      return PrimeFaces.resources.SCRIPT_URI;
    }
  };
}

// src/core/core.clientwindow.js
if (!PrimeFaces.clientwindow) {
  PrimeFaces.clientwindow = {
    /**
     * The name of the URL parameter holding the client window ID.
     * @type {string}
     * @readonly
     */
    CLIENT_WINDOW_URL_PARAM: "jfwid",
    /**
     * The key for the session storage entry holding the client window ID.
     * @type {string}
     * @readonly
     */
    CLIENT_WINDOW_SESSION_STORAGE: "pf.windowId",
    /**
     * The value of the temporary client window ID, used for requesting a new ID, see
     * {@link requestNewClientWindowId}.
     * @type {string}
     * @readonly
     */
    TEMP_CLIENT_WINDOW_ID: "temp",
    /**
     * The number of characters of the client window ID. Each client window ID must be of this length, or it is
     * invalid.
     * @type {number}
     * @readonly
     */
    LENGTH_CLIENT_WINDOW_ID: 5,
    /**
     * Whether the {@link init} function was called already.
     * @type {boolean}
     */
    initialized: false,
    /**
     * The current window ID, as received from the server. May be `null` when to ID was provided.
     * @type {null | string}
     */
    clientWindowId: null,
    /**
     * Whether the currently loaded page is from the first redirect.
     * @type {boolean}
     */
    initialRedirect: false,
    /**
     * Initializes the client window feature. Usually invoked on page load. This method should only be called once
     * per page.
     * @param {string} clientWindowId The current client window ID.
     * @param {boolean} initialRedirect Whether the currently loaded page is from the first redirect.
     */
    init: function(clientWindowId, initialRedirect) {
      if (PrimeFaces.clientwindow.initialized === true) {
        return;
      }
      this.initialized = true;
      this.clientWindowId = clientWindowId;
      this.initialRedirect = initialRedirect;
      this.cleanupCookies();
      this.assertClientWindowId();
    },
    /**
     * Makes sure the temporary cookie for the client window ID is expired.
     */
    cleanupCookies: function() {
      var urlWindowId = this.getUrlParameter(window.location.href, this.CLIENT_WINDOW_URL_PARAM);
      if (urlWindowId) {
        this.expireCookie("pf.initialredirect-" + urlWindowId);
      }
    },
    /**
     * Checks whether the client window ID is valid. If not, requests a new client window ID from the server via
     * reloading the current page.
     */
    assertClientWindowId: function() {
      var urlClientWindowId = this.getUrlParameter(window.location.href, this.CLIENT_WINDOW_URL_PARAM);
      var sessionStorageClientWindowId = sessionStorage.getItem(this.CLIENT_WINDOW_SESSION_STORAGE);
      if (sessionStorageClientWindowId === null) {
        if (this.initialRedirect && urlClientWindowId === this.clientWindowId) {
          sessionStorage.setItem(this.CLIENT_WINDOW_SESSION_STORAGE, this.clientWindowId);
        } else {
          this.requestNewClientWindowId();
        }
      } else {
        if (sessionStorageClientWindowId === this.TEMP_CLIENT_WINDOW_ID) {
          sessionStorage.setItem(this.CLIENT_WINDOW_SESSION_STORAGE, this.clientWindowId);
        } else if (sessionStorageClientWindowId.length !== this.LENGTH_CLIENT_WINDOW_ID) {
          this.requestNewClientWindowId();
        } else if (sessionStorageClientWindowId !== urlClientWindowId || sessionStorageClientWindowId !== this.clientWindowId) {
          window.location = this.replaceUrlParam(window.location.href, this.CLIENT_WINDOW_URL_PARAM, sessionStorageClientWindowId);
        }
      }
    },
    /**
     * Expires the current client window ID by replacing it with a temporary, invalid client window ID. Then reloads
     * the current page to request a new ID from the server.
     */
    requestNewClientWindowId: function() {
      sessionStorage.setItem(this.CLIENT_WINDOW_SESSION_STORAGE, this.TEMP_CLIENT_WINDOW_ID);
      window.location = this.replaceUrlParam(window.location.href, this.CLIENT_WINDOW_URL_PARAM, null);
    },
    /**
     * Returns the value of the URL parameter with the given name. When the URL contains multiple URL parameters
     * with the same name, the value of the first URL parameter is returned.
     * @param {string} uri An URL from which to extract an URL parameter.
     * @param {string} name Name of the URL parameter to retrieve.
     * @return {string | null} The value of the given URL parameter. Returns the empty string when the URL parameter
     * is present, but has no value. Returns `null` when no URL parameter with the given name exists.
     */
    getUrlParameter: function(uri, name) {
      var a = document.createElement("a");
      a.href = uri;
      var queryString = a.search;
      if (queryString && queryString.length > 0) {
        var queryParameters = queryString.substring(1).split("&");
        for (var i = 0; i < queryParameters.length; i++) {
          var queryParameter = queryParameters[i].split("=");
          if (queryParameter[0] === name) {
            return queryParameter.length > 1 ? decodeURIComponent(queryParameter[1]) : "";
          }
        }
      }
      return null;
    },
    /**
     * Given a URL, removes all URL parameters with the given name, adds a new URL parameter with the given value,
     * and returns the new URL with the replaced parameter. If the URL contains multiple URL parameters with the
     * same name, they are all removed.
     * @param {string} uri The URL for which to change an URL parameter.
     * @param {string} parameterName Name of the URL parameter to change.
     * @param {string | null} [parameterValue] New value for the URL parameter. If `null` or not given, the empty
     * string is used.
     * @return {string} The given URL, but with value of the given URL parameter changed to the new value.
     */
    replaceUrlParam: function(uri, parameterName, parameterValue) {
      var a = document.createElement("a");
      a.href = uri;
      if (!parameterValue || parameterValue.trim().length === 0) {
        parameterValue = "";
      }
      if (parameterValue.length === 0) {
        if (a.search.length === 0 || a.search.indexOf(parameterName + "=") === -1) {
          return a.href;
        }
      }
      if (a.search.length === 0) {
        a.search = "?" + encodeURIComponent(parameterName) + "=" + encodeURIComponent(parameterValue);
        return a.href;
      }
      var oldParameters = a.search.substring(1).split("&");
      var newParameters = [];
      newParameters.push(parameterName + "=" + encodeURIComponent(parameterValue));
      for (var i = 0; i < oldParameters.length; i++) {
        var oldParameterPair = oldParameters[i];
        if (oldParameterPair.length > 0) {
          var oldParameterName = oldParameterPair.split("=")[0];
          var oldParameterValue = oldParameterPair.split("=")[1];
          if (oldParameterValue && oldParameterValue.trim().length > 0) {
            if (oldParameterName !== parameterName) {
              newParameters.push(oldParameterName + "=" + oldParameterValue);
            }
          }
        }
      }
      a.search = "?" + newParameters.join("&");
      return a.href;
    },
    /**
     * Expires the cookie with the given name by setting a cookie with the appropriate `max-age` and `expires`
     * settings.
     * @param {string} cookieName Name of the cookie to expire.
     */
    expireCookie: function(cookieName) {
      PrimeFaces.setCookie(cookieName, "true", { path: "/", expires: -10, "max-age": "0" });
    }
  };
}

// src/validation/validation.common.js
if (window.PrimeFaces) {
  PrimeFaces.vb = function(cfg) {
    for (var option in cfg) {
      if (!cfg.hasOwnProperty(option)) {
        continue;
      }
      if (PrimeFaces.validation.CFG_SHORTCUTS[option]) {
        cfg[PrimeFaces.validation.CFG_SHORTCUTS[option]] = cfg[option];
        delete cfg[option];
      }
    }
    var highlight = cfg.highlight || true;
    var focus = cfg.focus || true;
    var renderMessages = cfg.renderMessages || true;
    var validateInvisibleElements = cfg.validateInvisibleElements || false;
    var logUnrenderedMessages = cfg.logUnrenderedMessages || renderMessages;
    var $source = $(cfg.source);
    var process = PrimeFaces.validation.Utils.resolveProcess(cfg, $source);
    var update = PrimeFaces.validation.Utils.resolveUpdate(cfg, $source);
    var result = PrimeFaces.validation.validate($source, process, update, highlight, focus, renderMessages, validateInvisibleElements, logUnrenderedMessages);
    return result.valid;
  };
  PrimeFaces.vi = function(element, highlight, renderMessages) {
    return PrimeFaces.validation.validateInstant(element, highlight, renderMessages);
  };
  $.extend(PrimeFaces.locales["en_US"], {
    decimalSeparator: ".",
    groupingSeparator: ",",
    messages: {
      "javax.faces.component.UIInput.REQUIRED": "{0}: Validation Error: Value is required.",
      "javax.faces.converter.IntegerConverter.INTEGER": "{2}: '{0}' must be a number consisting of one or more digits.",
      "javax.faces.converter.IntegerConverter.INTEGER_detail": "{2}: '{0}' must be a number between -2147483648 and 2147483647 Example: {1}",
      "javax.faces.converter.LongConverter.LONG": "{2}: '{0}' must be a number consisting of one or more digits.",
      "javax.faces.converter.LongConverter.LONG_detail": "{2}: '{0}' must be a number between -9223372036854775808 to 9223372036854775807 Example: {1}",
      "javax.faces.converter.DoubleConverter.DOUBLE": "{2}: '{0}' must be a number consisting of one or more digits.",
      "javax.faces.converter.DoubleConverter.DOUBLE_detail": "{2}: '{0}' must be a number between 4.9E-324 and 1.7976931348623157E308  Example: {1}",
      "javax.faces.converter.BigDecimalConverter.DECIMAL": "{2}: '{0}' must be a signed decimal number.",
      "javax.faces.converter.BigDecimalConverter.DECIMAL_detail": "{2}: '{0}' must be a signed decimal number consisting of zero or more digits, that may be followed by a decimal point and fraction.  Example: {1}",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER": "{2}: '{0}' must be a number consisting of one or more digits.",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail": "{2}: '{0}' must be a number consisting of one or more digits. Example: {1}",
      "javax.faces.converter.ByteConverter.BYTE": "{2}: '{0}' must be a number between -128 and 127.",
      "javax.faces.converter.ByteConverter.BYTE_detail": "{2}: '{0}' must be a number between -128 and 127.  Example: {1}",
      "javax.faces.converter.CharacterConverter.CHARACTER": "{1}: '{0}' must be a valid character.",
      "javax.faces.converter.CharacterConverter.CHARACTER_detail": "{1}: '{0}' must be a valid ASCII character.",
      "javax.faces.converter.ShortConverter.SHORT": "{2}: '{0}' must be a number consisting of one or more digits.",
      "javax.faces.converter.ShortConverter.SHORT_detail": "{2}: '{0}' must be a number between -32768 and 32767 Example: {1}",
      "javax.faces.converter.BooleanConverter.BOOLEAN": "{1}: '{0}' must be 'true' or 'false'",
      "javax.faces.converter.BooleanConverter.BOOLEAN_detail": "{1}: '{0}' must be 'true' or 'false'.  Any value other than 'true' will evaluate to 'false'.",
      "javax.faces.validator.LongRangeValidator.MAXIMUM": "{1}: Validation Error: Value is greater than allowable maximum of '{0}'",
      "javax.faces.validator.LongRangeValidator.MINIMUM": "{1}: Validation Error: Value is less than allowable minimum of '{0}'",
      "javax.faces.validator.LongRangeValidator.NOT_IN_RANGE": "{2}: Validation Error: Specified attribute is not between the expected values of {0} and {1}.",
      "javax.faces.validator.LongRangeValidator.TYPE={0}": "Validation Error: Value is not of the correct type.",
      "javax.faces.validator.DoubleRangeValidator.MAXIMUM": "{1}: Validation Error: Value is greater than allowable maximum of '{0}'",
      "javax.faces.validator.DoubleRangeValidator.MINIMUM": "{1}: Validation Error: Value is less than allowable minimum of '{0}'",
      "javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE": "{2}: Validation Error: Specified attribute is not between the expected values of {0} and {1}",
      "javax.faces.validator.DoubleRangeValidator.TYPE={0}": "Validation Error: Value is not of the correct type",
      "javax.faces.converter.FloatConverter.FLOAT": "{2}: '{0}' must be a number consisting of one or more digits.",
      "javax.faces.converter.FloatConverter.FLOAT_detail": "{2}: '{0}' must be a number between 1.4E-45 and 3.4028235E38  Example: {1}",
      "javax.faces.converter.DateTimeConverter.DATE": "{2}: '{0}' could not be understood as a date.",
      "javax.faces.converter.DateTimeConverter.DATE_detail": "{2}: '{0}' could not be understood as a date. Example: {1}",
      "javax.faces.converter.DateTimeConverter.TIME": "{2}: '{0}' could not be understood as a time.",
      "javax.faces.converter.DateTimeConverter.TIME_detail": "{2}: '{0}' could not be understood as a time. Example: {1}",
      "javax.faces.converter.DateTimeConverter.DATETIME": "{2}: '{0}' could not be understood as a date and time.",
      "javax.faces.converter.DateTimeConverter.DATETIME_detail": "{2}: '{0}' could not be understood as a date and time. Example: {1}",
      "javax.faces.converter.DateTimeConverter.PATTERN_TYPE": "{1}: A 'pattern' or 'type' attribute must be specified to convert the value '{0}'",
      "javax.faces.converter.NumberConverter.CURRENCY": "{2}: '{0}' could not be understood as a currency value.",
      "javax.faces.converter.NumberConverter.CURRENCY_detail": "{2}: '{0}' could not be understood as a currency value. Example: {1}",
      "javax.faces.converter.NumberConverter.PERCENT": "{2}: '{0}' could not be understood as a percentage.",
      "javax.faces.converter.NumberConverter.PERCENT_detail": "{2}: '{0}' could not be understood as a percentage. Example: {1}",
      "javax.faces.converter.NumberConverter.NUMBER": "{2}: '{0}' is not a number.",
      "javax.faces.converter.NumberConverter.NUMBER_detail": "{2}: '{0}' is not a number. Example: {1}",
      "javax.faces.converter.NumberConverter.PATTERN": "{2}: '{0}' is not a number pattern.",
      "javax.faces.converter.NumberConverter.PATTERN_detail": "{2}: '{0}' is not a number pattern. Example: {1}",
      "javax.faces.validator.LengthValidator.MINIMUM": "{1}: Validation Error: Length is less than allowable minimum of '{0}'",
      "javax.faces.validator.LengthValidator.MAXIMUM": "{1}: Validation Error: Length is greater than allowable maximum of '{0}'",
      "javax.faces.validator.RegexValidator.PATTERN_NOT_SET": "Regex pattern must be set.",
      "javax.faces.validator.RegexValidator.PATTERN_NOT_SET_detail": "Regex pattern must be set to non-empty value.",
      "javax.faces.validator.RegexValidator.NOT_MATCHED": "Regex Pattern not matched",
      "javax.faces.validator.RegexValidator.NOT_MATCHED_detail": "Regex pattern of '{0}' not matched",
      "javax.faces.validator.RegexValidator.MATCH_EXCEPTION": "Error in regular expression.",
      "javax.faces.validator.RegexValidator.MATCH_EXCEPTION_detail": "Error in regular expression, '{0}'"
    }
  });
  PrimeFaces.validator = {};
  PrimeFaces.converter = {};
  PrimeFaces.validation = {
    /**
     * Is the Ajax-complete-handler bound?
     * @type {boolean}
     * @private
     */
    ajaxCompleteBound: false,
    /**
     * Parameter shortcut mapping for the method `PrimeFaces.vb`.
     * @type {Record<string, string>}
     */
    CFG_SHORTCUTS: {
      "s": "source",
      "p": "process",
      "u": "update",
      "a": "ajax",
      "h": "highlight",
      "f": "focus",
      "r": "renderMessages",
      "v": "validateInvisibleElements"
    },
    /**
     * Triggers client-side-validation of single or multiple containers (complex validation or simple inputs).
     * @function
     * @param {JQuery} source The source element.
     * @param {string | HTMLElement | JQuery} process The elements to be processed.
     * @param {string | HTMLElement | JQuery} update The elements to be updated.
     * @param {boolean} highlight If invalid elements should be highlighted.
     * @param {boolean} focus If the first invalid element should be focused.
     * @param {boolean} renderMessages If messages should be rendered.
     * @param {boolean} validateInvisibleElements If invisible elements should be validated.
     * @param {boolean} logUnrenderedMessages If unrendered messages should be logged.
     * @return {PrimeFaces.validation.ValidationResult} The validation result.
     */
    validate: function(source, process, update, highlight, focus, renderMessages, validateInvisibleElements, logUnrenderedMessages) {
      var vc = PrimeFaces.validation.ValidationContext;
      process = PrimeFaces.expressions.SearchExpressionFacade.resolveComponentsAsSelector(source, process);
      var inputs = $();
      for (var i = 0; i < process.length; i++) {
        var component = process.eq(i);
        if (component.is(":input")) {
          inputs = inputs.add(component);
        } else {
          inputs = inputs.add(component.find(":input:enabled:not(:button)[name]"));
        }
      }
      if (validateInvisibleElements === false) {
        inputs = inputs.filter(":visible");
      }
      for (var i = 0; i < inputs.length; i++) {
        PrimeFaces.validation.validateInput(source, inputs.eq(i), highlight);
      }
      var nonInputs = $();
      for (var i = 0; i < process.length; i++) {
        var component = process.eq(i);
        if (component.is(":not(:input)")) {
          nonInputs = nonInputs.add(component);
        }
        nonInputs = nonInputs.add(component.find(":not(:input)"));
      }
      nonInputs = nonInputs.filter("[data-p-val]");
      if (validateInvisibleElements === false) {
        nonInputs = nonInputs.filter(":visible");
      }
      for (var i = 0; i < nonInputs.length; i++) {
        PrimeFaces.validation.validateComplex(source, nonInputs.eq(i), highlight);
      }
      if (vc.isEmpty()) {
        return { valid: true, messages: {}, hasUnrenderedMessage: false };
      }
      if (renderMessages === true) {
        update = PrimeFaces.expressions.SearchExpressionFacade.resolveComponentsAsSelector(source, update);
        for (var i = 0; i < update.length; i++) {
          var component = update.eq(i);
          PrimeFaces.validation.Utils.renderMessages(vc.messages, component);
        }
      }
      if (focus === true) {
        for (var key in vc.messages) {
          if (vc.messages.hasOwnProperty(key)) {
            var el = $(PrimeFaces.escapeClientId(key));
            if (!el.is(":focusable")) {
              el.find(":focusable:first").trigger("focus");
            } else {
              el.trigger("focus");
            }
            break;
          }
        }
      }
      var result = {
        valid: vc.isEmpty(),
        messages: vc.messages,
        hasUnrenderedMessage: false
      };
      for (let clientId in vc.messages) {
        var msgs = vc.messages[clientId];
        for (let msg of msgs) {
          if (!msg.rendered) {
            result.hasUnrenderedMessage = true;
          }
        }
      }
      if (renderMessages && logUnrenderedMessages && result.hasUnrenderedMessage) {
        PrimeFaces.warn("There are some unhandled FacesMessages, this means not every FacesMessage had a chance to be rendered. These unhandled FacesMessages are:");
        for (let clientId in vc.messages) {
          var msgs = vc.messages[clientId];
          for (let msg of msgs) {
            if (!msg.rendered) {
              PrimeFaces.warn(msg.detail);
            }
          }
        }
      }
      vc.clear();
      return result;
    },
    /**
     * Searches for all CommandButtons with turned on dynamic CSV and triggers CSV.
     * @function
     */
    validateButtonsCsvRequirements: function() {
      $("[data-pf-validateclient-dynamic]").each((index, btn) => {
        this.validateButtonCsvRequirements(btn);
      });
    },
    /**
     * Validates the CSV-requirements of a CommandButton.
     * @function
     * @param {HTMLButtonElement} btn CommandButton which´s CSV-requirements should be validated.
     */
    validateButtonCsvRequirements: function(btn) {
      const $source = $(btn);
      const cfg = {
        ajax: btn.dataset.pfValidateclientAjax,
        process: btn.dataset.pfValidateclientProcess,
        update: btn.dataset.pfValidateclientUpdate
      };
      const process = PrimeFaces.validation.Utils.resolveProcess(cfg, $source);
      const update = PrimeFaces.validation.Utils.resolveUpdate(cfg, $source);
      const widget2 = PrimeFaces.getWidgetById(btn.id);
      if (widget2) {
        if (PrimeFaces.validation.validate($source, process, update, false, false, false, false, false).valid) {
          widget2.jq.addClass("ui-state-csv-valid");
          widget2.jq.removeClass("ui-state-csv-invalid");
          widget2.enable();
        } else {
          widget2.jq.addClass("ui-state-csv-invalid");
          widget2.jq.removeClass("ui-state-csv-valid");
          widget2.disable();
        }
      } else {
        console.warn("No widget found for ID " + btn.id);
      }
      PrimeFaces.validation.ValidationContext.clear();
    },
    /**
     * Performs a client-side validation of the given element. The context of this validation is a single field only.
     * If the element is valid, removes old messages from the element.
     * If the value of the element is invalid, adds the appropriate validation failure messages.
     * This is used by `p:clientValidator`.
     * @function
     * @param {string | HTMLElement | JQuery} el The ID of an input to validate, or the input itself.
     * @param {boolean} highlight If the invalid element should be highlighted.
     * @param {boolean} renderMessages If messages should be rendered.
     * @return {boolean} `true` if the element is valid, or `false` otherwise.
     */
    validateInstant: function(el, highlight, renderMessages) {
      highlight = highlight === void 0 ? true : highlight;
      renderMessages = renderMessages === void 0 ? true : renderMessages;
      var vc = PrimeFaces.validation.ValidationContext;
      var element = typeof el === "string" ? $(PrimeFaces.escapeClientId(el)) : $(el);
      var clientId = element.data(PrimeFaces.CLIENT_ID_DATA) || element.attr("id");
      var messageComponentId = element.data("target-message");
      var messageComponent = null;
      if (renderMessages === true) {
        if (messageComponentId) {
          messageComponent = messageComponentId === "p-unbound" ? null : $(PrimeFaces.escapeClientId(messageComponentId));
        } else {
          var messageComponents = element.closest("form").find("div.ui-message");
          messageComponent = PrimeFaces.validation.Utils.findTargetMessageComponent(clientId, messageComponents);
          if (messageComponent) {
            element.data("target-message", messageComponent.attr("id"));
          } else {
            element.data("target-message", "p-unbound");
          }
        }
        if (messageComponent) {
          var messageWidget = PrimeFaces.getWidgetById(messageComponent.attr("id"));
          messageWidget.clearMessage();
        }
      }
      this.validateButtonsCsvRequirements();
      PrimeFaces.validation.validateInput(element, element, highlight);
      if (!vc.isEmpty()) {
        if (messageComponent) {
          var messageWidget = PrimeFaces.getWidgetById(messageComponent.attr("id"));
          messageWidget.renderMessage(vc.messages[clientId][0]);
        }
        vc.clear();
        return false;
      } else {
        vc.clear();
        return true;
      }
    },
    /**
     * __NOTE__: This is a internal method and should only by used by `PrimeFaces.validation.validate`.
     *
     * Performs a client-side validation of (the value of) the given input element. If the element is valid, removes old
     * messages from the element. If the value of the element is invalid, adds the appropriate validation failure
     * messages.
     * @function
     * @internal
     * @param {JQuery} source The source element.
     * @param {JQuery} element A JQuery instance with a single input element to validate.
     * @param {boolean} highlight If the invalid element should be highlighted.
     */
    validateInput: function(source, element, highlight) {
      var vc = PrimeFaces.validation.ValidationContext;
      if (element.is(":checkbox,:radio") && element.data("p-grouped")) {
        var groupName = element.attr("name");
        if (!vc.isGroupValidated(groupName)) {
          vc.addElementGroup(groupName);
        } else {
          return;
        }
      }
      if (element.parent().hasClass("ui-inputnumber")) {
        element = element.parent().children("input:hidden");
      }
      var submittedValue = PrimeFaces.validation.Utils.getSubmittedValue(element), valid = true, converterId = element.data("p-con");
      if (PrimeFaces.settings.considerEmptyStringNull && (!submittedValue || submittedValue.length === 0)) {
        submittedValue = null;
      }
      var newValue = null;
      if (converterId) {
        try {
          newValue = PrimeFaces.converter[converterId].convert(element, submittedValue);
        } catch (ce) {
          var converterMessageStr = element.data("p-cmsg"), converterMsg = converterMessageStr ? { summary: converterMessageStr, detail: converterMessageStr } : ce;
          valid = false;
          vc.addMessage(element, converterMsg);
        }
      } else {
        newValue = submittedValue;
      }
      var required = element.data("p-required");
      if (required) {
        element.attr("aria-required", true);
      }
      if (valid && required && (newValue === null || newValue === "")) {
        var requiredMessageStr = element.data("p-rmsg");
        var requiredMsg = requiredMessageStr ? { summary: requiredMessageStr, detail: requiredMessageStr } : vc.getMessage("javax.faces.component.UIInput.REQUIRED", vc.getLabel(element));
        vc.addMessage(element, requiredMsg);
        valid = false;
      }
      if (valid && (submittedValue !== null && PrimeFaces.trim(submittedValue).length > 0 || PrimeFaces.settings.validateEmptyFields)) {
        var validatorIds = element.data("p-val");
        if (validatorIds) {
          validatorIds = validatorIds.split(",");
          for (var j = 0; j < validatorIds.length; j++) {
            var validatorId = validatorIds[j], validator = PrimeFaces.validator[validatorId];
            if (validator) {
              try {
                validator.validate(element, newValue);
              } catch (ve) {
                var validatorMessageStr = element.data("p-vmsg");
                var validatorMsg = validatorMessageStr ? { summary: validatorMessageStr, detail: validatorMessageStr } : ve;
                if (Array.isArray(validatorMsg)) {
                  validatorMsg.forEach((msg) => vc.addMessage(element, msg));
                } else {
                  vc.addMessage(element, validatorMsg);
                }
                valid = false;
              }
            }
          }
        }
      }
      var highlighterType = element.data("p-hl") || "default", highlighter = PrimeFaces.validator.Highlighter.types[highlighterType];
      if (valid) {
        highlighter.unhighlight(element);
        element.attr("aria-invalid", false);
      } else {
        if (highlight) {
          highlighter.highlight(element);
        }
        element.attr("aria-invalid", true);
      }
    },
    /**
     * __NOTE__: This is an internal method and should only be used by `PrimeFaces.validation.validate`.
     *
     * Performs a client-side validation of (the value of) the given container element. If the element is valid,
     * removes old messages from the element. If the value of the element is invalid, adds the appropriate
     * validation failure messages.
     * @function
     * @internal
     * @param {JQuery} source the source element.
     * @param {JQuery} element A JQuery instance with a single input element to validate.
     * @param {boolean} highlight If the invalid element should be highlighted.
     * @returns {boolean} `true` if the value of the element is valid, `false` otherwise.
     */
    validateComplex: function(source, element, highlight) {
      var vc = PrimeFaces.validation.ValidationContext;
      var valid = true;
      var validatorIds = element.data("p-val");
      if (validatorIds) {
        validatorIds = validatorIds.split(",");
        for (var j = 0; j < validatorIds.length; j++) {
          var validatorId = validatorIds[j], validator = PrimeFaces.validator[validatorId];
          if (validator) {
            try {
              validator.validate(source, element);
            } catch (ve) {
              var validatorMessageStr = element.data("p-vmsg");
              var validatorMsg = validatorMessageStr ? { summary: validatorMessageStr, detail: validatorMessageStr } : ve;
              vc.addMessage(element, validatorMsg);
              valid = false;
              var highlighterType = element.data("p-hl");
              var highlighter = highlighterType ? PrimeFaces.validator.Highlighter.types[highlighterType] : PrimeFaces.validator.Highlighter.types[validatorId];
              if (valid) {
                if (highlighter) {
                  highlighter.unhighlight(element);
                }
                element.attr("aria-invalid", false);
              } else {
                if (highlight && highlighter) {
                  highlighter.highlight(element);
                }
                element.attr("aria-invalid", true);
              }
            }
          }
        }
      }
      return valid;
    },
    /**
     * __NOTE__: This is an internal method and should only be used by PrimeFaces itself.
     *
     * Bind to Ajax-Complete-events to update CSV-state after an Ajax-call may have changed state.
     * @internal
     */
    bindAjaxComplete: function() {
      if (this.ajaxCompleteBound) return;
      var $this = this;
      $(document).on("pfAjaxComplete", function(e, xhr, settings, args) {
        $this.validateButtonsCsvRequirements();
      });
      if (window.jsf && jsf.ajax) {
        jsf.ajax.addOnEvent(function(data) {
          if (data.status === "success" || data.status === "error") {
            $this.validateButtonsCsvRequirements();
          }
        });
      }
      this.ajaxCompleteBound = true;
    }
  };
  PrimeFaces.validation.ValidationContext = {
    /**
     * A map between the client ID of an element and a list of faces message for that element.
     * @type {Record<string, PrimeFaces.FacesMessage[]>}
     */
    messages: {},
    /**
     * A list of element groups to be validated. Usually corresponds to the name of single form element. For some
     * cases such as a select list of checkboxes, a group may correspond to multiple DOM elements.
     * @type {string[]}
     */
    elementGroups: [],
    /**
     * Adds a faces message to the given element.
     * @param {string | HTMLElement | JQuery} target Element to which to add the message.
     * @param {PrimeFaces.FacesMessage} msg Message to add to the given message.
     */
    addMessage: function(target, msg) {
      var clientId;
      if (target instanceof $) {
        clientId = target.data(PrimeFaces.CLIENT_ID_DATA) || target.attr("id");
      } else if (target instanceof HTMLElement) {
        clientId = target.id;
      } else {
        clientId = target;
      }
      if (!this.messages[clientId]) {
        this.messages[clientId] = [];
      }
      if (!msg.hasOwnProperty("summary") && !msg.hasOwnProperty("detail")) {
        msg = {
          summary: PrimeFaces.getLocaleSettings()["unexpectedError"],
          detail: msg.toString()
        };
      }
      if (!msg.severity) {
        msg.severity = "error";
      }
      msg.rendered = false;
      this.messages[clientId].push(msg);
    },
    /**
     * Reports how many messages were added to this validation context. Note that each component may have several
     * messages.
     * @return {number} The number of messages added to this validation context.
     */
    getMessagesLength: function() {
      var length = 0, key;
      for (key in this.messages) {
        if (this.messages.hasOwnProperty(key)) {
          length++;
        }
      }
      return length;
    },
    /**
     * Checks whether this validation context contains any messages at all.
     * @return {boolean} `true` if this validation context contains zero messages, or `false` otherwise.
     */
    isEmpty: function() {
      return this.getMessagesLength() === 0;
    },
    /**
     * Removes all messages from this validation context.
     */
    clear: function() {
      this.messages = {};
      this.elementGroups = [];
    },
    /**
     * Shortcut for PrimeFaces.validation.Utils.getMessage.
     * @param {string} key The i18n key of a message, such as `javax.faces.component.UIInput.REQUIRED` or
     * `javax.faces.validator.LengthValidator.MINIMUM`.
     * @return {PrimeFaces.FacesMessage | null} The localized faces message for the given key, or `null` if no
     * translation was found for the key.
     */
    getMessage: function(key) {
      var params = Array.from(arguments);
      params.shift();
      return PrimeFaces.validation.Utils.getMessage(key, params);
    },
    /**
     * Shortcut for PrimeFaces.validation.Utils.getLabel.
     * @param {JQuery} element A DOM element for which to find the label.
     * @return {string} The label of the given element.
     */
    getLabel: function(element) {
      return PrimeFaces.validation.Utils.getLabel(element);
    },
    /**
     * Checks whether the given element group is in the list of groups to be validated. An element group is often
     * just the name of a single INPUT, TEXTAREA or SELECT element, but may also consist of multiple DOM elements,
     * such as in the case of a select list of checkboxes.
     * @param {string} name Name of an element group to check.
     * @return {boolean} `true` if the given group is to be validated, or `false` otherwise.
     */
    isGroupValidated: function(name) {
      for (var i = 0; i < this.elementGroups.length; i++) {
        if (this.elementGroups[i] === name) {
          return true;
        }
      }
      return false;
    },
    /**
     * Adds a group to the list of element groups to validate. An element group is often just the name of a single
     * INPUT, TEXTAREA or SELECT element, but may also consist of multiple DOM elements, such as in the case of
     * select list of checkboxes.
     * @param {string} name Name of an element group to add.
     */
    addElementGroup: function(name) {
      this.elementGroups.push(name);
    }
  };
  PrimeFaces.validation.Utils = {
    /**
     * Finds the localized text of the given message key. When the current locale does not contain a translation,
     * falls back to the default English locale.
     * @param {string} key The i18n key of a message, such as `javax.faces.component.UIInput.REQUIRED` or
     * `javax.faces.validator.LengthValidator.MINIMUM`.
     * @param {string[]} params A list of parameters for the placeholders.
     * @return {PrimeFaces.FacesMessage | null} The localized faces message for the given key, or `null` if no
     * translation was found for the key.
     */
    getMessage: function(key, params) {
      var locale = PrimeFaces.getLocaleSettings();
      var bundle = locale.messages && locale.messages[key] ? locale : PrimeFaces.locales["en_US"];
      var summary = bundle.messages[key];
      if (!summary) {
        return {
          summary: "### Message '" + key + "' not found ###",
          detail: "### Message '" + key + "' not found ###"
        };
      }
      summary = PrimeFaces.validation.Utils.format(summary, params);
      var detail = bundle.messages[key + "_detail"];
      detail = detail ? PrimeFaces.validation.Utils.format(detail, params) : summary;
      return {
        summary,
        detail
      };
    },
    /**
     * Given a message with placeholders, replaces the placeholders with the given parameters. The format of the
     * message is similar to, but not quite the same as, the format used by `java.text.MessageFormat`.
     * ```javascript
     * format("Value required for element {0}", ["email"]) // => "Value required for element email"
     * format("Use {0} braces like this: '{0}'", ["simple"]) // => "Use simple braces like this: 'simple'"
     * ```
     * @param {string} str A message with placeholders.
     * @param {string[]} params A list of parameters for the placeholders.
     * @return {string} The string with the placeholders replaced with the given params.
     */
    format: function(str, params) {
      var s = str;
      for (var i = 0; i < params.length; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, params[i]);
      }
      return s;
    },
    /**
     * Finds the label of a DOM element. This is either a custom label set on a component, or just the ID of the
     * element. This label is used, for example, as part of a validation error message for the element.
     * @param {JQuery} element A DOM element for which to find the label.
     * @return {string} The label of the given element.
     */
    getLabel: function(element) {
      return element.data("p-label") || element.attr("id");
    },
    /**
     * Given a form element (such as input, textarea, select), finds the value that would be sent when the form is
     * submitted.
     * @param {JQuery} element A form element for which to find its value.
     * @return {string} The value of the form element, or the empty string when it does not have a value.
     */
    getSubmittedValue: function(element) {
      var value;
      if (element.is(":radio")) {
        value = $('input:radio[name="' + CSS.escape(element.attr("name")) + '"]:checked').val();
      } else if (element.is(":checkbox")) {
        value = element.data("p-grouped") ? $('input:checkbox[name="' + CSS.escape(element.attr("name")) + '"]:checked').val() : element.prop("checked").toString();
      } else if (element.is(":file")) {
        value = element[0].files;
      } else {
        value = element.val();
      }
      return value === void 0 ? "" : value;
    },
    /**
     * For a given ID of a component, finds the DOM element with the message for that component.
     * @param {string} clientId ID of a component for which to find the ui message.
     * @param {JQuery} messageComponents A JQuery instance with a list of `ui-message`s, or `null` if no
     * such element exists.
     * @return {JQuery | null} The DOM element with the messages for the given component, or `null` when no such
     * element could be found.
     */
    findTargetMessageComponent: function(clientId, messageComponents) {
      for (var i = 0; i < messageComponents.length; i++) {
        var messageComponent = messageComponents.eq(i);
        if (messageComponent.data("target") === clientId) {
          return messageComponent;
        }
      }
      return null;
    },
    /**
     * Renders all given messages in the given container.
     * @param {Record<string, PrimeFaces.FacesMessage[]>} messages The messages to render.
     * @param {JQuery} container The container for the messages. Either the element with the class `ui-messages`, or
     * a parent of such an element.
     */
    renderMessages: function(messages, container) {
      var messagesComponents = $(), messageComponents = $(), growlComponents = $();
      container.each(function() {
        var $this = $(this);
        if ($this.is("div.ui-messages")) {
          messagesComponents = messagesComponents.add($this);
        } else {
          messagesComponents = messagesComponents.add($this.find("div.ui-messages"));
        }
        if ($this.is("div.ui-message")) {
          messageComponents = messageComponents.add($this);
        } else {
          messageComponents = messageComponents.add($this.find("div.ui-message"));
        }
        if ($this.is(".ui-growl-pl")) {
          growlComponents = growlComponents.add($this);
        } else {
          growlComponents = growlComponents.add($this.find(".ui-growl-pl"));
        }
      });
      messagesComponents = messagesComponents.filter(function(idx) {
        if ($(this).is(".ui-fileupload-messages")) {
          return false;
        }
        return $(this).data("severity").indexOf("error") !== -1;
      });
      growlComponents = growlComponents.filter(function(idx) {
        return $(this).data("severity").indexOf("error") !== -1;
      });
      for (var i = 0; i < messagesComponents.length; i++) {
        var messagesComponent = messagesComponents.eq(i), globalOnly = messagesComponent.data("global"), redisplay = messagesComponent.data("redisplay"), showSummary = messagesComponent.data("summary"), showDetail = messagesComponent.data("detail"), messagesWidget = PrimeFaces.getWidgetById(messagesComponent.attr("id"));
        messagesWidget.clearMessages();
        for (let clientId in messages) {
          for (let msg of messages[clientId]) {
            if (globalOnly || msg.rendered && !redisplay) {
              continue;
            }
            if (!showSummary) {
              msg.summary = "";
            }
            if (!showDetail) {
              msg.detail = "";
            }
            messagesWidget.appendMessage(msg);
            msg.rendered = true;
          }
        }
      }
      for (var i = 0; i < growlComponents.length; i++) {
        var growlComponent = growlComponents.eq(i), redisplay = growlComponent.data("redisplay"), globalOnly = growlComponent.data("global"), showSummary = growlComponent.data("summary"), showDetail = growlComponent.data("detail"), growlWidget = PrimeFaces.getWidgetById(growlComponent.attr("id"));
        growlWidget.removeAll();
        for (let clientId in messages) {
          for (let msg of messages[clientId]) {
            if (globalOnly || msg.rendered && !redisplay) {
              continue;
            }
            if (!showSummary) {
              msg.summary = "";
            }
            if (!showDetail) {
              msg.detail = "";
            }
            growlWidget.renderMessage(msg);
            msg.rendered = true;
          }
        }
      }
      for (var i = 0; i < messageComponents.length; i++) {
        var messageComponent = messageComponents.eq(i), target = messageComponent.data("target"), redisplay = messageComponent.data("redisplay"), messageWidget = PrimeFaces.getWidgetById(messageComponent.attr("id"));
        messageWidget.clearMessage();
        for (let clientId in messages) {
          if (target !== clientId) {
            continue;
          }
          for (let msg of messages[clientId]) {
            if (msg.rendered && !redisplay) {
              continue;
            }
            messageWidget.renderMessage(msg);
            msg.rendered = true;
          }
        }
      }
    },
    /**
     * Resolves process-attribute of a PrimeFaces-component. (e.g. CommandButton)
     * @param {PrimeFaces.validation.Configuration} cfg Configuration of the PrimeFaces-component.
     * @param {JQuery} source The source element.
     * @returns {JQuery} Resolved jQuery-element.
     */
    resolveProcess: function(cfg, source) {
      if (cfg.ajax && cfg.process) {
        return PrimeFaces.expressions.SearchExpressionFacade.resolveComponentsAsSelector(source, cfg.process);
      } else {
        return source.closest("form");
      }
    },
    /**
     * Resolves update-attribute of a PrimeFaces-component. (e.g. CommandButton)
     * @param {PrimeFaces.validation.Configuration} cfg Configuration of the PrimeFaces-component.
     * @param {JQuery} source The source element.
     * @returns {JQuery} Resolved jQuery-element.
     */
    resolveUpdate: function(cfg, source) {
      if (cfg.ajax && cfg.update) {
        return PrimeFaces.expressions.SearchExpressionFacade.resolveComponentsAsSelector(source, cfg.update);
      } else {
        return source.closest("form");
      }
    }
  };
}

// src/validation/validation.converters.js
var import_moment = __toESM(require_moment());
if (window.PrimeFaces) {
  PrimeFaces.converter["javax.faces.Integer"] = {
    regex: /^[-+]?\d+$/,
    MESSAGE_ID: "javax.faces.converter.IntegerConverter.INTEGER",
    convert: function(element, submittedValue) {
      if (submittedValue === null) {
        return null;
      }
      if (PrimeFaces.trim(submittedValue).length === 0) {
        return null;
      }
      var vc = PrimeFaces.validation.ValidationContext;
      if (!this.regex.test(submittedValue)) {
        throw vc.getMessage(this.MESSAGE_ID, submittedValue, 9346, vc.getLabel(element));
      }
      return parseInt(submittedValue);
    }
  };
  PrimeFaces.converter["javax.faces.Long"] = {
    regex: /^[-+]?\d+$/,
    MESSAGE_ID: "javax.faces.converter.LongConverter.LONG",
    convert: function(element, submittedValue) {
      if (submittedValue === null) {
        return null;
      }
      if (PrimeFaces.trim(submittedValue).length === 0) {
        return null;
      }
      var vc = PrimeFaces.validation.ValidationContext;
      if (!this.regex.test(submittedValue)) {
        throw vc.getMessage(this.MESSAGE_ID, submittedValue, 98765432, vc.getLabel(element));
      }
      return parseInt(submittedValue);
    }
  };
  PrimeFaces.converter["javax.faces.Double"] = {
    regex: /^[-+]?\d*(\.\d+)?[d]?$/,
    MESSAGE_ID: "javax.faces.converter.DoubleConverter.DOUBLE",
    convert: function(element, submittedValue) {
      if (submittedValue === null) {
        return null;
      }
      if (PrimeFaces.trim(submittedValue).length === 0) {
        return null;
      }
      var vc = PrimeFaces.validation.ValidationContext;
      if (!this.regex.test(submittedValue)) {
        throw vc.getMessage(this.MESSAGE_ID, submittedValue, 1999999, vc.getLabel(element));
      }
      return parseFloat(submittedValue);
    }
  };
  PrimeFaces.converter["javax.faces.Float"] = {
    regex: /^[-+]?\d+(\.\d+)?[f]?$/,
    MESSAGE_ID: "javax.faces.converter.FloatConverter.FLOAT",
    convert: function(element, submittedValue) {
      if (submittedValue === null) {
        return null;
      }
      if (PrimeFaces.trim(submittedValue).length === 0) {
        return null;
      }
      var vc = PrimeFaces.validation.ValidationContext;
      if (!this.regex.test(submittedValue)) {
        throw vc.getMessage(this.MESSAGE_ID, submittedValue, 2e9, vc.getLabel(element));
      }
      return parseFloat(submittedValue);
    }
  };
  PrimeFaces.converter["javax.faces.Short"] = {
    regex: /^[-+]?\d+$/,
    MESSAGE_ID: "javax.faces.converter.ShortConverter.SHORT",
    convert: function(element, submittedValue) {
      if (submittedValue === null) {
        return null;
      }
      if (PrimeFaces.trim(submittedValue).length === 0) {
        return null;
      }
      var vc = PrimeFaces.validation.ValidationContext;
      if (!this.regex.test(submittedValue)) {
        throw vc.getMessage(this.MESSAGE_ID, submittedValue, 32456, vc.getLabel(element));
      }
      return parseInt(submittedValue);
    }
  };
  PrimeFaces.converter["javax.faces.BigInteger"] = {
    regex: /^[-+]?\d+$/,
    MESSAGE_ID: "javax.faces.converter.BigIntegerConverter.BIGINTEGER",
    convert: function(element, submittedValue) {
      if (submittedValue === null) {
        return null;
      }
      if (PrimeFaces.trim(submittedValue).length === 0) {
        return null;
      }
      var vc = PrimeFaces.validation.ValidationContext;
      if (!this.regex.test(submittedValue)) {
        throw vc.getMessage(this.MESSAGE_ID, submittedValue, 9876, vc.getLabel(element));
      }
      return parseInt(submittedValue);
    }
  };
  PrimeFaces.converter["javax.faces.BigDecimal"] = {
    regex: /^[-+]?\d+(\.\d+)?[d]?$/,
    MESSAGE_ID: "javax.faces.converter.BigDecimalConverter.DECIMAL",
    convert: function(element, submittedValue) {
      if (submittedValue === null) {
        return null;
      }
      if (PrimeFaces.trim(submittedValue).length === 0) {
        return null;
      }
      var vc = PrimeFaces.validation.ValidationContext;
      if (!this.regex.test(submittedValue)) {
        throw vc.getMessage(this.MESSAGE_ID, submittedValue, 198.23, vc.getLabel(element));
      }
      return parseFloat(submittedValue);
    }
  };
  PrimeFaces.converter["javax.faces.Byte"] = {
    regex: /^-?\d+$/,
    MESSAGE_ID: "javax.faces.converter.ByteConverter.BYTE",
    convert: function(element, submittedValue) {
      if (submittedValue === null) {
        return null;
      }
      if (PrimeFaces.trim(submittedValue).length === 0) {
        return null;
      }
      var vc = PrimeFaces.validation.ValidationContext;
      if (!this.regex.test(submittedValue)) {
        throw vc.getMessage(this.MESSAGE_ID, submittedValue, -12, vc.getLabel(element));
      } else {
        var byteValue = parseInt(submittedValue);
        if (byteValue < -128 || byteValue > 127)
          throw vc.getMessage(this.MESSAGE_ID, submittedValue, -12, vc.getLabel(element));
        else
          return byteValue;
      }
    }
  };
  PrimeFaces.converter["javax.faces.Character"] = {
    MESSAGE_ID: "javax.faces.converter.CharacterConverter.CHARACTER",
    convert: function(element, submittedValue) {
      if (submittedValue === null) {
        return null;
      }
      if (PrimeFaces.trim(submittedValue).length === 0) {
        return null;
      }
      var vc = PrimeFaces.validation.ValidationContext;
      try {
        return submittedValue.charAt(0);
      } catch (exception) {
        throw vc.getMessage(this.MESSAGE_ID, submittedValue, vc.getLabel(element));
      }
    }
  };
  PrimeFaces.converter["javax.faces.Boolean"] = {
    regex: /^[-+]?\d+$/,
    MESSAGE_ID: "javax.faces.converter.BooleanConverter.BOOLEAN",
    convert: function(element, submittedValue) {
      if (submittedValue === null) {
        return null;
      }
      if (PrimeFaces.trim(submittedValue).length === 0) {
        return null;
      }
      var vc = PrimeFaces.validation.ValidationContext;
      try {
        return submittedValue === "true" || submittedValue === "on" || submittedValue === "yes" ? true : false;
      } catch (exception) {
        throw vc.getMessage(this.MESSAGE_ID, submittedValue, vc.getLabel(element));
      }
    }
  };
  PrimeFaces.converter["javax.faces.DateTime"] = {
    DATE_ID: "javax.faces.converter.DateTimeConverter.DATE",
    TIME_ID: "javax.faces.converter.DateTimeConverter.TIME",
    DATETIME_ID: "javax.faces.converter.DateTimeConverter.DATETIME",
    convert: function(element, submittedValue) {
      if (submittedValue === null) {
        return null;
      }
      if (PrimeFaces.trim(submittedValue).length === 0) {
        return null;
      }
      var vc = PrimeFaces.validation.ValidationContext, javaPattern = element.data("p-pattern"), type = element.data("p-dttype"), datePattern = null, timePattern = null;
      try {
        if (javaPattern) {
          var patternTokens = javaPattern.split(" ");
          for (var i = 0; i < patternTokens.length; i++) {
            if (patternTokens[i].toLowerCase().indexOf("h") !== -1) {
              timePattern = patternTokens[i];
            } else if (patternTokens[i].toLowerCase().indexOf("t") !== -1 && timePattern) {
              timePattern = timePattern + " " + patternTokens[i];
            } else {
              datePattern = patternTokens[i];
            }
          }
        } else {
          datePattern = element.data("p-dspattern");
          timePattern = element.data("p-tspattern");
        }
        const convertDate = (submittedValue2, format) => (0, import_moment.default)(submittedValue2, (0, import_moment.default)().toMomentFormatString(format)).toDate();
        if (timePattern && datePattern) {
          return convertDate(submittedValue, javaPattern);
        } else if (timePattern) {
          return convertDate(submittedValue, timePattern);
        } else {
          return convertDate(submittedValue, datePattern);
        }
      } catch (exception) {
        var now = (0, import_moment.default)().formatWithJDF(javaPattern);
        if (type === "date")
          throw vc.getMessage(this.DATE_ID, submittedValue, now, vc.getLabel(element));
        else if (type === "time")
          throw vc.getMessage(this.TIME_ID, submittedValue, now, vc.getLabel(element));
        else if (type === "both")
          throw vc.getMessage(this.DATETIME_ID, submittedValue, now, vc.getLabel(element));
      }
    }
  };
  PrimeFaces.converter["javax.faces.Number"] = {
    CURRENCY_ID: "javax.faces.converter.NumberConverter.CURRENCY",
    NUMBER_ID: "javax.faces.converter.NumberConverter.NUMBER",
    PATTERN_ID: "javax.faces.converter.NumberConverter.PATTERN",
    PERCENT_ID: "javax.faces.converter.NumberConverter.PERCENT",
    REGEX: /^[-+]?\d+(\,\d+)?(\.\d+)?[d]?$/,
    convert: function(element, submittedValue) {
      if (submittedValue === null) {
        return null;
      }
      if (PrimeFaces.trim(submittedValue).length === 0) {
        return null;
      }
      var vc = PrimeFaces.validation.ValidationContext, locale = PrimeFaces.getLocaleSettings(), type = element.data("p-notype"), maxIntegerDigits = element.data("p-maxint"), minFractionDigits = element.data("p-minfrac"), integerOnly = element.data("p-intonly");
      if (type === "currency") {
        var currencySymbol = element.data("p-curs");
        if (currencySymbol) {
          if (submittedValue.indexOf(currencySymbol) === -1)
            throw vc.getMessage(this.CURRENCY_ID, submittedValue, currencySymbol + "100", vc.getLabel(element));
          else
            submittedValue = submittedValue.substring(currencySymbol.length);
        }
      } else if (type === "percent") {
        if (submittedValue.lastIndexOf("%") !== submittedValue.length - 1)
          throw vc.getMessage(this.PERCENT_ID, submittedValue, "50%", vc.getLabel(element));
        else
          submittedValue = submittedValue.replace(/%/g, "");
      }
      if (!this.REGEX.test(submittedValue)) {
        throw vc.getMessage(this.NUMBER_ID, submittedValue, 50, vc.getLabel(element));
      }
      var tokens = submittedValue.split(locale.decimalSeparator), intValue = tokens[0].replace(new RegExp(locale.groupingSeparator, "g"), ""), decimalValue = tokens[1];
      if (maxIntegerDigits && intValue.length > maxIntegerDigits)
        intValue = intValue.substring(intValue.length - maxIntegerDigits);
      if (decimalValue && minFractionDigits && decimalValue.length > minFractionDigits)
        decimalValue = decimalValue.substring(0, minFractionDigits);
      if (integerOnly) {
        return parseInt(intValue);
      } else {
        return parseInt(intValue) + parseFloat("." + decimalValue);
      }
    }
  };
}

// src/validation/validation.validators.js
if (window.PrimeFaces) {
  PrimeFaces.validator["javax.faces.Length"] = {
    MINIMUM_MESSAGE_ID: "javax.faces.validator.LengthValidator.MINIMUM",
    MAXIMUM_MESSAGE_ID: "javax.faces.validator.LengthValidator.MAXIMUM",
    validate: function(element) {
      var length = element.val().length, min = element.data("p-minlength"), max = element.data("p-maxlength"), vc = PrimeFaces.validation.ValidationContext;
      if (max !== void 0 && length > max) {
        throw vc.getMessage(this.MAXIMUM_MESSAGE_ID, max, vc.getLabel(element));
      }
      if (min !== void 0 && length < min) {
        throw vc.getMessage(this.MINIMUM_MESSAGE_ID, min, vc.getLabel(element));
      }
    }
  };
  PrimeFaces.validator["javax.faces.LongRange"] = {
    MINIMUM_MESSAGE_ID: "javax.faces.validator.LongRangeValidator.MINIMUM",
    MAXIMUM_MESSAGE_ID: "javax.faces.validator.LongRangeValidator.MAXIMUM",
    NOT_IN_RANGE_MESSAGE_ID: "javax.faces.validator.LongRangeValidator.NOT_IN_RANGE",
    TYPE_MESSAGE_ID: "javax.faces.validator.LongRangeValidator.TYPE",
    regex: /^-?\d+$/,
    validate: function(element, value) {
      if (value !== null) {
        var min = element.data("p-minvalue"), max = element.data("p-maxvalue"), vc = PrimeFaces.validation.ValidationContext;
        if (!this.regex.test(value)) {
          throw vc.getMessage(this.TYPE_MESSAGE_ID, vc.getLabel(element));
        }
        if (max !== void 0 && min !== void 0 && (value < min || value > max)) {
          throw vc.getMessage(this.NOT_IN_RANGE_MESSAGE_ID, min, max, vc.getLabel(element));
        } else if (max !== void 0 && min === void 0 && value > max) {
          throw vc.getMessage(this.MAXIMUM_MESSAGE_ID, max, vc.getLabel(element));
        } else if (min !== void 0 && max === void 0 && value < min) {
          throw vc.getMessage(this.MINIMUM_MESSAGE_ID, min, vc.getLabel(element));
        }
      }
    }
  };
  PrimeFaces.validator["javax.faces.DoubleRange"] = {
    MINIMUM_MESSAGE_ID: "javax.faces.validator.DoubleRangeValidator.MINIMUM",
    MAXIMUM_MESSAGE_ID: "javax.faces.validator.DoubleRangeValidator.MAXIMUM",
    NOT_IN_RANGE_MESSAGE_ID: "javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE",
    TYPE_MESSAGE_ID: "javax.faces.validator.DoubleRangeValidator.TYPE",
    regex: /^[-+]?\d*(\.\d+)?[d]?$/,
    validate: function(element, value) {
      if (value !== null) {
        var min = element.data("p-minvalue"), max = element.data("p-maxvalue"), vc = PrimeFaces.validation.ValidationContext;
        if (!this.regex.test(value)) {
          throw vc.getMessage(this.TYPE_MESSAGE_ID, vc.getLabel(element));
        }
        if (max !== void 0 && min !== void 0 && (value < min || value > max)) {
          throw vc.getMessage(this.NOT_IN_RANGE_MESSAGE_ID, min, max, vc.getLabel(element));
        } else if (max !== void 0 && min === void 0 && value > max) {
          throw vc.getMessage(this.MAXIMUM_MESSAGE_ID, max, vc.getLabel(element));
        } else if (min !== void 0 && max === void 0 && value < min) {
          throw vc.getMessage(this.MINIMUM_MESSAGE_ID, min, vc.getLabel(element));
        }
      }
    }
  };
  PrimeFaces.validator["javax.faces.RegularExpression"] = {
    PATTERN_NOT_SET_MESSAGE_ID: "javax.faces.validator.RegexValidator.PATTERN_NOT_SET",
    NOT_MATCHED_MESSAGE_ID: "javax.faces.validator.RegexValidator.NOT_MATCHED",
    MATCH_EXCEPTION_MESSAGE_ID: "javax.faces.validator.RegexValidator.MATCH_EXCEPTION",
    validate: function(element, value) {
      if (value !== null) {
        var pattern = element.data("p-regex"), vc = PrimeFaces.validation.ValidationContext;
        if (!pattern) {
          throw vc.getMessage(this.PATTERN_NOT_SET_MESSAGE_ID);
        }
        var regex = new RegExp(pattern);
        if (!regex.test(value)) {
          throw vc.getMessage(this.NOT_MATCHED_MESSAGE_ID, pattern);
        }
      }
    }
  };
  PrimeFaces.validator["primefaces.File"] = {
    FILE_LIMIT_MESSAGE_ID: "primefaces.FileValidator.FILE_LIMIT",
    ALLOW_TYPES_MESSAGE_ID: "primefaces.FileValidator.ALLOW_TYPES",
    SIZE_LIMIT_MESSAGE_ID: "primefaces.FileValidator.SIZE_LIMIT",
    validate: function(element, value) {
      if (value !== null) {
        var filelimit = element.data("p-filelimit"), allowtypes = element.data("p-allowtypes"), sizelimit = element.data("p-sizelimit"), vc = PrimeFaces.validation.ValidationContext, messages = [];
        var allowtypesRegExp = null;
        if (allowtypes) {
          var regexParts = allowtypes.match(/^\/(.*)\/([a-z]*)$/);
          var transformedAllowtypes = regexParts[1];
          var flags = regexParts[2];
          allowtypesRegExp = new RegExp(transformedAllowtypes, flags);
        }
        if (filelimit && value.length > filelimit) {
          messages.push(vc.getMessage(this.FILE_LIMIT_MESSAGE_ID, filelimit));
        }
        for (var file of value) {
          if (allowtypesRegExp && (!allowtypesRegExp.test(file.type) && !allowtypesRegExp.test(file.name))) {
            messages.push(vc.getMessage(this.ALLOW_TYPES_MESSAGE_ID, file.name, PrimeFaces.utils.formatAllowTypes(allowtypes)));
          }
          if (sizelimit && file.size > sizelimit) {
            messages.push(vc.getMessage(this.SIZE_LIMIT_MESSAGE_ID, file.name, PrimeFaces.utils.formatBytes(sizelimit)));
          }
        }
        if (messages.length > 0) {
          throw messages;
        }
      }
    }
  };
}

// src/validation/validation.highlighters.js
if (window.PrimeFaces) {
  PrimeFaces.validator.Highlighter = {
    /**
     * When an element is invalid due to a validation error, the user needs to be informed. This method highlights
     * the label for the given element by adding an appropriate CSS class.
     * @param {JQuery} forElement Element with a label to highlight.
     */
    highlightLabel: function(forElement) {
      var label = $("label[for='" + forElement.attr("id") + "']");
      if (label.hasClass("ui-outputlabel")) {
        label.addClass("ui-state-error");
      }
    },
    /**
     * When an element is invalid due to a validation error, the user needs to be informed. This method removes the
     * highlighting on a label for the given element by removing the appropriate CSS class.
     * @param {JQuery} forElement Element with a label to unhighlight.
     */
    unhighlightLabel: function(forElement) {
      var label = $("label[for='" + forElement.attr("id") + "']");
      if (label.hasClass("ui-outputlabel")) {
        label.removeClass("ui-state-error");
      }
    },
    /**
     * Applies ui-state-XXX - css-classes to an element (component).
     * @param {JQuery} element Element to which apply the css-classes.
     * @param {boolean} valid Is the input of the element valid?
     */
    applyStateCssClasses: function(element, valid) {
      if (valid) {
        element.removeClass("ui-state-error");
        element.removeClass("ui-state-csv-invalid").addClass("ui-state-csv-valid");
      } else {
        element.addClass("ui-state-error");
        element.addClass("ui-state-csv-invalid").removeClass("ui-state-csv-valid");
      }
    },
    /**
     * A map between a widget type and the corresponding highlight handler for that type.
     * @type {Record<string, PrimeFaces.validation.Highlighter>}
     */
    types: {
      "default": {
        highlight: function(element) {
          PrimeFaces.validator.Highlighter.highlightLabel(element);
          PrimeFaces.validator.Highlighter.applyStateCssClasses(element, false);
        },
        unhighlight: function(element) {
          PrimeFaces.validator.Highlighter.unhighlightLabel(element);
          PrimeFaces.validator.Highlighter.applyStateCssClasses(element, true);
        }
      },
      "booleanchkbox": {
        highlight: function(element) {
          PrimeFaces.validator.Highlighter.highlightLabel(element);
          PrimeFaces.validator.Highlighter.applyStateCssClasses(element.parent().next(), false);
        },
        unhighlight: function(element) {
          PrimeFaces.validator.Highlighter.unhighlightLabel(element);
          PrimeFaces.validator.Highlighter.applyStateCssClasses(element.parent().next(), true);
        }
      },
      "manychkbox": {
        highlight: function(element) {
          var custom = element.hasClass("ui-chkbox-clone"), chkboxes;
          if (custom) {
            var groupedInputs = $('input[name="' + CSS.escape(element.attr("name")) + '"].ui-chkbox-clone');
            chkboxes = groupedInputs.parent().next();
          } else {
            var container = element.closest(".ui-selectmanycheckbox");
            chkboxes = container.find("div.ui-chkbox-box");
          }
          for (var i = 0; i < chkboxes.length; i++) {
            PrimeFaces.validator.Highlighter.applyStateCssClasses(chkboxes.eq(i), false);
          }
        },
        unhighlight: function(element) {
          var custom = element.hasClass("ui-chkbox-clone"), chkboxes;
          if (custom) {
            var groupedInputs = $('input[name="' + element.attr("name") + '"].ui-chkbox-clone');
            chkboxes = groupedInputs.parent().next();
          } else {
            var container = element.closest(".ui-selectmanycheckbox");
            chkboxes = container.find("div.ui-chkbox-box");
          }
          for (var i = 0; i < chkboxes.length; i++) {
            PrimeFaces.validator.Highlighter.applyStateCssClasses(chkboxes.eq(i), true);
          }
        }
      },
      "listbox": {
        highlight: function(element) {
          PrimeFaces.validator.Highlighter.applyStateCssClasses(element.closest(".ui-inputfield"), false);
          PrimeFaces.validator.Highlighter.highlightLabel(element.closest(".ui-inputfield"));
        },
        unhighlight: function(element) {
          PrimeFaces.validator.Highlighter.applyStateCssClasses(element.closest(".ui-inputfield"), true);
          PrimeFaces.validator.Highlighter.unhighlightLabel(element.closest(".ui-inputfield"));
        }
      },
      "onemenu": {
        highlight: function(element) {
          var siblings = element.parent().siblings(".ui-selectonemenu-trigger");
          PrimeFaces.validator.Highlighter.applyStateCssClasses(siblings, false);
          PrimeFaces.validator.Highlighter.applyStateCssClasses(siblings.parent(), false);
          PrimeFaces.validator.Highlighter.highlightLabel(this.getFocusElement(element));
        },
        unhighlight: function(element) {
          var siblings = element.parent().siblings(".ui-selectonemenu-trigger");
          PrimeFaces.validator.Highlighter.applyStateCssClasses(siblings, true);
          PrimeFaces.validator.Highlighter.applyStateCssClasses(siblings.parent(), true);
          PrimeFaces.validator.Highlighter.unhighlightLabel(this.getFocusElement(element));
        },
        getFocusElement: function(element) {
          return element.closest(".ui-selectonemenu").find(".ui-helper-hidden-accessible > input");
        }
      },
      "spinner": {
        highlight: function(element) {
          PrimeFaces.validator.Highlighter.applyStateCssClasses(element.parent(), false);
          PrimeFaces.validator.Highlighter.highlightLabel(element.parent());
        },
        unhighlight: function(element) {
          PrimeFaces.validator.Highlighter.applyStateCssClasses(element.parent(), true);
          PrimeFaces.validator.Highlighter.unhighlightLabel(element.parent());
        }
      },
      "oneradio": {
        highlight: function(element) {
          var container = element.closest(".ui-selectoneradio"), radios = container.find("div.ui-radiobutton-box");
          for (var i = 0; i < radios.length; i++) {
            PrimeFaces.validator.Highlighter.applyStateCssClasses(radios.eq(i), false);
          }
          PrimeFaces.validator.Highlighter.highlightLabel(container);
        },
        unhighlight: function(element) {
          var container = element.closest(".ui-selectoneradio"), radios = container.find("div.ui-radiobutton-box");
          for (var i = 0; i < radios.length; i++) {
            PrimeFaces.validator.Highlighter.applyStateCssClasses(radios.eq(i), true);
          }
          PrimeFaces.validator.Highlighter.unhighlightLabel(container);
        }
      },
      "booleanbutton": {
        highlight: function(element) {
          PrimeFaces.validator.Highlighter.applyStateCssClasses(element.parent().parent(), false);
        },
        unhighlight: function(element) {
          PrimeFaces.validator.Highlighter.applyStateCssClasses(element.parent().parent(), true);
        }
      },
      "toggleswitch": {
        highlight: function(element) {
          PrimeFaces.validator.Highlighter.applyStateCssClasses(element.parent().next(), false);
        },
        unhighlight: function(element) {
          PrimeFaces.validator.Highlighter.applyStateCssClasses(element.parent().next(), true);
        }
      },
      "inputnumber": {
        highlight: function(element) {
          var orginalInput = element.prev("input");
          PrimeFaces.validator.Highlighter.highlightLabel(orginalInput);
          orginalInput.parent().addClass("ui-state-error");
          PrimeFaces.validator.Highlighter.applyStateCssClasses(orginalInput, false);
        },
        unhighlight: function(element) {
          var orginalInput = element.prev("input");
          PrimeFaces.validator.Highlighter.unhighlightLabel(orginalInput);
          orginalInput.parent().removeClass("ui-state-error");
          PrimeFaces.validator.Highlighter.applyStateCssClasses(orginalInput, true);
        }
      }
    }
  };
}

// src/printer/print.js
function printComponents(expressions, config) {
  return __async(this, null, function* () {
    yield import("./printer-SZTOR7WF.js");
    const element = PrimeFaces.expressions.SearchExpressionFacade.resolveComponentsAsSelector(document.body, expressions);
    element.print(config);
  });
}

// src/hotkey/hotkey-wrapper.js
init_jquery_module();
function bindHotKey(event, bind, callback) {
  return __async(this, null, function* () {
    yield import("./hotkey-F76OXDM7.js");
    jquery_module_default(document).off(event).on(event, null, bind, callback);
  });
}
function unbindHotKey(event) {
  jquery_module_default(document).off(event);
}

// src/filedownload/1-pf-filedownload.js
function download(url, mimeType, fileName, cookieName) {
  return __async(this, null, function* () {
    const downloadJs = yield import("./download-I5IGQLWJ.js");
    var cookiePath = PrimeFaces.settings.contextPath;
    if (!cookiePath || cookiePath === "") {
      cookiePath = "/";
    }
    var x = new XMLHttpRequest();
    x.open("GET", url, true);
    x.responseType = "blob";
    x.onload = function(e) {
      downloadJs(x.response, fileName, mimeType);
      PrimeFaces.setCookie(cookieName, "true", { path: cookiePath });
    };
    x.send();
  });
}

// bundles/all/index.ts
Object.assign(PrimeFaces, { printComponents });
Object.assign(PrimeFaces, { bindHotKey, unbindHotKey });
Object.assign(PrimeFaces, { download });
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvanMtY29va2llLW5wbS0zLjAuNS04ZmM4ZmNjOWI0LTEwYzAuemlwL25vZGVfbW9kdWxlcy9qcy1jb29raWUvZGlzdC9qcy5jb29raWUubWpzIiwgIi4uL3NyYy9jb3JlL2NvcmUuanMiLCAiLi4vc3JjL2NvcmUvY29yZS5lbnYuanMiLCAiLi4vc3JjL2NvcmUvY29yZS5hamF4LmpzIiwgIi4uL3NyYy9jb3JlL2NvcmUuY3NwLmpzIiwgIi4uL3NyYy9jb3JlL2NvcmUuZXhwcmVzc2lvbnMuanMiLCAiLi4vc3JjL2NvcmUvY29yZS51dGlscy5qcyIsICIuLi9zcmMvY29yZS9jb3JlLnJlc291cmNlcy5qcyIsICIuLi9zcmMvY29yZS9jb3JlLmNsaWVudHdpbmRvdy5qcyIsICIuLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0aW9uLmNvbW1vbi5qcyIsICIuLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0aW9uLmNvbnZlcnRlcnMuanMiLCAiLi4vc3JjL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi52YWxpZGF0b3JzLmpzIiwgIi4uL3NyYy92YWxpZGF0aW9uL3ZhbGlkYXRpb24uaGlnaGxpZ2h0ZXJzLmpzIiwgIi4uL3NyYy9wcmludGVyL3ByaW50LmpzIiwgIi4uL3NyYy9ob3RrZXkvaG90a2V5LXdyYXBwZXIuanMiLCAiLi4vc3JjL2ZpbGVkb3dubG9hZC8xLXBmLWZpbGVkb3dubG9hZC5qcyIsICIuLi9idW5kbGVzL2FsbC9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyohIGpzLWNvb2tpZSB2My4wLjUgfCBNSVQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXZhciAqL1xuZnVuY3Rpb24gYXNzaWduICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXRcbn1cbi8qIGVzbGludC1lbmFibGUgbm8tdmFyICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXZhciAqL1xudmFyIGRlZmF1bHRDb252ZXJ0ZXIgPSB7XG4gIHJlYWQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZVswXSA9PT0gJ1wiJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8oJVtcXGRBLUZdezJ9KSsvZ2ksIGRlY29kZVVSSUNvbXBvbmVudClcbiAgfSxcbiAgd3JpdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLnJlcGxhY2UoXG4gICAgICAvJSgyWzM0NkJGXXwzW0FDLUZdfDQwfDVbQkRFXXw2MHw3W0JDRF0pL2csXG4gICAgICBkZWNvZGVVUklDb21wb25lbnRcbiAgICApXG4gIH1cbn07XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXZhciAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cblxuZnVuY3Rpb24gaW5pdCAoY29udmVydGVyLCBkZWZhdWx0QXR0cmlidXRlcykge1xuICBmdW5jdGlvbiBzZXQgKG5hbWUsIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF0dHJpYnV0ZXMgPSBhc3NpZ24oe30sIGRlZmF1bHRBdHRyaWJ1dGVzLCBhdHRyaWJ1dGVzKTtcblxuICAgIGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuICAgICAgYXR0cmlidXRlcy5leHBpcmVzID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGU1KTtcbiAgICB9XG4gICAgaWYgKGF0dHJpYnV0ZXMuZXhwaXJlcykge1xuICAgICAgYXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgbmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKVxuICAgICAgLnJlcGxhY2UoLyUoMlszNDZCXXw1RXw2MHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KVxuICAgICAgLnJlcGxhY2UoL1soKV0vZywgZXNjYXBlKTtcblxuICAgIHZhciBzdHJpbmdpZmllZEF0dHJpYnV0ZXMgPSAnJztcbiAgICBmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJzsgJyArIGF0dHJpYnV0ZU5hbWU7XG5cbiAgICAgIGlmIChhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIENvbnNpZGVycyBSRkMgNjI2NSBzZWN0aW9uIDUuMjpcbiAgICAgIC8vIC4uLlxuICAgICAgLy8gMy4gIElmIHRoZSByZW1haW5pbmcgdW5wYXJzZWQtYXR0cmlidXRlcyBjb250YWlucyBhICV4M0IgKFwiO1wiKVxuICAgICAgLy8gICAgIGNoYXJhY3RlcjpcbiAgICAgIC8vIENvbnN1bWUgdGhlIGNoYXJhY3RlcnMgb2YgdGhlIHVucGFyc2VkLWF0dHJpYnV0ZXMgdXAgdG8sXG4gICAgICAvLyBub3QgaW5jbHVkaW5nLCB0aGUgZmlyc3QgJXgzQiAoXCI7XCIpIGNoYXJhY3Rlci5cbiAgICAgIC8vIC4uLlxuICAgICAgc3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc9JyArIGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0uc3BsaXQoJzsnKVswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKGRvY3VtZW50LmNvb2tpZSA9XG4gICAgICBuYW1lICsgJz0nICsgY29udmVydGVyLndyaXRlKHZhbHVlLCBuYW1lKSArIHN0cmluZ2lmaWVkQXR0cmlidXRlcylcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldCAobmFtZSkge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8IChhcmd1bWVudHMubGVuZ3RoICYmICFuYW1lKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gVG8gcHJldmVudCB0aGUgZm9yIGxvb3AgaW4gdGhlIGZpcnN0IHBsYWNlIGFzc2lnbiBhbiBlbXB0eSBhcnJheVxuICAgIC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLlxuICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llID8gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpIDogW107XG4gICAgdmFyIGphciA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBhcnRzID0gY29va2llc1tpXS5zcGxpdCgnPScpO1xuICAgICAgdmFyIHZhbHVlID0gcGFydHMuc2xpY2UoMSkuam9pbignPScpO1xuXG4gICAgICB0cnkge1xuICAgICAgICB2YXIgZm91bmQgPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMF0pO1xuICAgICAgICBqYXJbZm91bmRdID0gY29udmVydGVyLnJlYWQodmFsdWUsIGZvdW5kKTtcblxuICAgICAgICBpZiAobmFtZSA9PT0gZm91bmQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIHJldHVybiBuYW1lID8gamFyW25hbWVdIDogamFyXG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShcbiAgICB7XG4gICAgICBzZXQsXG4gICAgICBnZXQsXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIChuYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHNldChcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgICcnLFxuICAgICAgICAgIGFzc2lnbih7fSwgYXR0cmlidXRlcywge1xuICAgICAgICAgICAgZXhwaXJlczogLTFcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHdpdGhBdHRyaWJ1dGVzOiBmdW5jdGlvbiAoYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm4gaW5pdCh0aGlzLmNvbnZlcnRlciwgYXNzaWduKHt9LCB0aGlzLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZXMpKVxuICAgICAgfSxcbiAgICAgIHdpdGhDb252ZXJ0ZXI6IGZ1bmN0aW9uIChjb252ZXJ0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGluaXQoYXNzaWduKHt9LCB0aGlzLmNvbnZlcnRlciwgY29udmVydGVyKSwgdGhpcy5hdHRyaWJ1dGVzKVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgYXR0cmlidXRlczogeyB2YWx1ZTogT2JqZWN0LmZyZWV6ZShkZWZhdWx0QXR0cmlidXRlcykgfSxcbiAgICAgIGNvbnZlcnRlcjogeyB2YWx1ZTogT2JqZWN0LmZyZWV6ZShjb252ZXJ0ZXIpIH1cbiAgICB9XG4gIClcbn1cblxudmFyIGFwaSA9IGluaXQoZGVmYXVsdENvbnZlcnRlciwgeyBwYXRoOiAnLycgfSk7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXZhciAqL1xuXG5leHBvcnQgeyBhcGkgYXMgZGVmYXVsdCB9O1xuIiwgImltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCB7IGxvYWRXaWRnZXQgfSBmcm9tIFwiLi9jb3JlLndpZGdldC5yZWdpc3RyeS5qc1wiO1xuXG4oZnVuY3Rpb24od2luZG93KSB7XG5cbiAgICBpZih3aW5kb3cuUHJpbWVGYWNlcykge1xuICAgICAgICB3aW5kb3cuUHJpbWVGYWNlcy5kZWJ1ZyhcIlByaW1lRmFjZXMgYWxyZWFkeSBsb2FkZWQsIGlnbm9yaW5nIGR1cGxpY2F0ZSBleGVjdXRpb24uXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyB0aGUgbWFpbiBnbG9iYWwgb2JqZWN0IGZvciBhY2Nlc3NpbmcgdGhlIGNsaWVudC1zaWRlIEFQSSBvZiBQcmltZUZhY2VzLiBCcm9hZGx5IHNwZWFraW5nLCBpdCBjb25zaXN0c1xuICAgICAqIG9mIHRoZSBmb2xsb3dpbmcgZW50cmllczpcbiAgICAgKlxuICAgICAqIC0ge0BsaW5rIFByaW1lRmFjZXMuYWpheH0gVGhlIEFKQVggbW9kdWxlIHdpdGggZnVuY3Rpb25hbGl0eSBmb3Igc2VuZGluZyBBSkFYIHJlcXVlc3RzXG4gICAgICogLSB7QGxpbmsgUHJpbWVGYWNlcy5jbGllbnR3aW5kb3d9IFRoZSBjbGllbnQgd2luZG93IG1vZHVsZSBmb3IgbXVsdGlwbGUgd2luZG93IHN1cHBvcnQgaW4gUHJpbWVGYWNlcyBhcHBsaWNhdGlvbnMuXG4gICAgICogLSB7QGxpbmsgUHJpbWVGYWNlcy5jc3B9IFRoZSAgQ1NQIG1vZHVsZSBmb3IgdGhlIEhUVFAgQ29udGVudC1TZWN1cml0eS1Qb2xpY3kgKENTUCkgcG9saWN5IGBzY3JpcHQtc3JjYCBkaXJlY3RpdmUuXG4gICAgICogLSB7QGxpbmsgUHJpbWVGYWNlcy5kaWFsb2d9IFRoZSBkaWFsb2cgbW9kdWxlIHdpdGggZnVuY3Rpb25hbGl0eSByZWxhdGVkIHRvIHRoZSBkaWFsb2cgZnJhbWV3b3JrXG4gICAgICogLSB7QGxpbmsgUHJpbWVGYWNlcy5lbnZ9IFRoZSBlbnZpcm9ubWVudCBtb2R1bGUgd2l0aCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBicm93c2VyXG4gICAgICogLSB7QGxpbmsgUHJpbWVGYWNlcy5leHByZXNzaW9uc30gVGhlIHNlYXJjaCBleHByZXNzaW9ucyBtb2R1bGUgd2l0aCBmdW5jdGlvbmFsaXR5IGZvciB3b3JraW5nIHdpdGggc2VhcmNoIGV4cHJlc3Npb25cbiAgICAgKiAtIHtAbGluayBQcmltZUZhY2VzLnJlc291cmNlc30gVGhlIHJlc291cmNlcyBtb2R1bGUgd2l0aCBmdW5jdGlvbmFsaXR5IGZvciBjcmVhdGluZyByZXNvdXJjZSBsaW5rc1xuICAgICAqIC0ge0BsaW5rIFByaW1lRmFjZXMudXRpbHN9IFRoZSB1dGlsaXR5IG1vZHVsZSB3aXRoIGZ1bmN0aW9uYWxpdHkgdGhhdCBkb2VzIG5vdCBmaXQgYW55d2hlcmUgZWxzZVxuICAgICAqIC0ge0BsaW5rIFByaW1lRmFjZXMud2lkZ2V0fSBUaGUgcmVnaXN0cnkgd2l0aCBhbGwgYXZhaWxhYmxlIHdpZGdldCBjbGFzc2VzXG4gICAgICogLSB7QGxpbmsgUHJpbWVGYWNlcy53aWRnZXRzfSBUaGUgcmVnaXN0cnkgd2l0aCBhbGwgY3VycmVudGx5IGluc3RhbnRpYXRlZCB3aWRnZXRzXG4gICAgICogLSBTZXZlcmFsIG90aGVyIHV0aWxpdHkgbWV0aG9kcyBkZWZpbmVkIGRpcmVjdGx5IG9uIHRoZSBgUHJpbWVGYWNlc2Agb2JqZWN0LCBzdWNoIGFzXG4gICAgICoge0BsaW5rIFByaW1lRmFjZXMubW9uaXRvckRvd25sb2FkfSwge0BsaW5rIFByaW1lRmFjZXMuZ2V0V2lkZ2V0QnlJZH0sIG9yIHtAbGluayBQcmltZUZhY2VzLmVzY2FwZUhUTUx9LlxuICAgICAqXG4gICAgICogQG5hbWVzcGFjZSB7UHJpbWVGYWNlc31cbiAgICAgKlxuICAgICAqIEBpbnRlcmZhY2Uge1ByaW1lRmFjZXMuRGVmZXJyZWRSZW5kZXJ9IERlZmVycmVkUmVuZGVyIFJlcHJlc2VudHMgYSBkZWZlcnJlZCByZW5kZXIgYWRkZWQgZm9yIGEgZGVmZXJyZWQgd2lkZ2V0LlxuICAgICAqIFNvbWUgd2lkZ2V0cyBuZWVkIHRvIGNvbXB1dGUgdGhlaXIgZGltZW5zaW9ucyBiYXNlZCBvbiB0aGVpciBwYXJlbnQgZWxlbWVudChzKS4gVGhpcyByZXF1aXJlcyB0aGF0IHN1Y2ggd2lkZ2V0c1xuICAgICAqIGFyZSBub3QgcmVuZGVyZWQgdW50aWwgdGhleSBoYXZlIGJlY29tZSB2aXNpYmxlLiBBIHdpZGdldCBtYXkgbm90IGJlIHZpc2libGUsIGZvciBleGFtcGxlLCB3aGVuIGl0IGlzIGluc2lkZSBhXG4gICAgICogdGFiIHRoYXQgaXMgbm90IHNob3duIHdoZW4gdGhlIHBhZ2UgaXMgcmVuZGVyZWQuIFByaW1lRmFjZXMgcHJvdmlkZXMgYSBnbG9iYWwgbWVjaGFuaXNtIGZvciB3aWRnZXRzIHRvIHJlbmRlclxuICAgICAqIG9uY2UgdGhleSBhcmUgdmlzaWJsZS4gVGhpcyBpcyBkb25lIGJ5IGtlZXBpbmcgYSBsaXN0IG9mIHdpZGdldHMgdGhhdCBuZWVkIHRvIGJlIHJlbmRlcmVkLCBhbmQgY2hlY2tpbmcgb24gZXZlcnlcbiAgICAgKiBjaGFuZ2UgKEFKQVggcmVxdWVzdCwgdGFiIGNoYW5nZSBldGMuKSB3aGV0aGVyIGFueSBvZiB0aG9zZSBoYXZlIGJlY29tZSB2aXNpYmxlLiBBIHdpZGdldHMgc2hvdWxkIGV4dGVuZFxuICAgICAqIGBQcmltZUZhY2VzLndpZGdldC5EZWZlcnJlZFdpZGdldGAgdG8gbWFrZSB1c2Ugb2YgdGhpcyBmdW5jdGlvbmFsaXR5LlxuICAgICAqIEBwcm9wIHtzdHJpbmd9IERlZmVycmVkUmVuZGVyLndpZGdldCBUaGUgSUQgb2YgYSBkZWZlcnJlZCB3aWRnZXQuXG4gICAgICogQHByb3Age3N0cmluZ30gRGVmZXJyZWRSZW5kZXIuY29udGFpbmVyIElEIG9mIHRoZSBjb250YWluZXIgdGhhdCBzaG91bGQgYmUgdmlzaWJsZSBiZWZvcmUgdGhlIHdpZGdldCBjYW4gYmUgcmVuZGVyZWQuXG4gICAgICogQG1ldGhvZCBEZWZlcnJlZFJlbmRlci5jYWxsYmFjayBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiB0aGUgd2lkZ2V0IF9tYXlfIHBvc3NpYmx5IGhhdmUgYmVjb21lIHZpc2libGUuXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIHdpZGdldCBjYW4gYmUgcmVuZGVyZWQgYW5kIGlmIHNvLCByZW5kZXJzIGl0LlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IERlZmVycmVkUmVuZGVyLmNhbGxiYWNrIGB0cnVlYCB3aGVuIHRoZSB3aWRnZXQgd2FzIHJlbmRlcmVkLCBvciBgZmFsc2VgIHdoZW4gdGhlIHdpZGdldCBzdGlsbFxuICAgICAqIG5lZWRzIHRvIGJlIHJlbmRlcmVkIGxhdGVyLlxuICAgICAqL1xuICAgIHZhciBQcmltZUZhY2VzID0ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGFuIElEIHRvIGEgQ1NTIElEIHNlbGVjdG9yIHRoYXQgbWF0Y2hlcyBlbGVtZW50cyB3aXRoIHRoYXQgSUQuIEZvciBleGFtcGxlOlxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICogUHJpbWVGYWNlcy5lc2NhcGVDbGllbnRJZChcImZvcm06aW5wdXRcIik7IC8vID0+IFwiI2Zvcm1cXDppbnB1dFwiXG4gICAgICAgICAqIFByaW1lRmFjZXMuZXNjYXBlQ2xpZW50SWQoXCJmb3JtI2lucHV0XCIpOyAvLyA9PiBcIiNmb3JtI2lucHV0XCJcbiAgICAgICAgICogYGBgXG4gICAgICAgICAqXG4gICAgICAgICAqIF9fUGxlYXNlIG5vdGUgdGhhdCB0aGlzIG1ldGhvZCBkb2VzIG5vdCBlc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBuZWVkIHRvIGJlIGVzY2FwZWQgYW5kIHdpbGwgbm90IHdvcmsgd2l0aCBhcmJpdHJhcnkgSURzX19cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIElEIHRvIGNvbnZlcnQuXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gQSBDU1MgSUQgc2VsZWN0b3IgZm9yIHRoZSBnaXZlbiBJRC5cbiAgICAgICAgICovXG4gICAgICAgIGVzY2FwZUNsaWVudElkIDogZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIiNcIiArIGlkLnJlcGxhY2UoLzovZyxcIlxcXFw6XCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlcmVzIGEgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGNhbGxlZCBhcyBzb29uIGFzIHRoZSBnaXZlbiBlbGVtZW50IHdhcyBsb2FkZWQgY29tcGxldGVseS4gUGxlYXNlIG5vdGUgdGhlXG4gICAgICAgICAqIGxpc3RlbmVyIG1heSBiZSBjYWxsZWQgc3luY2hyb25vdXNseSAoaW1tZWRpYXRlbHkpIG9yIGFzeW5jaHJvbm91c2x5LCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZWxlbWVudCBpc1xuICAgICAgICAgKiBhbHJlYWR5IGxvYWRlZC5cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IGVsZW1lbnQgRWxlbWVudCB0byB3YWl0IGZvclxuICAgICAgICAgKiBAcGFyYW0geygpID0+IHZvaWR9IGxpc3RlbmVyIExpc3RlbmVyIHRvIGNhbGwgb25jZSB0aGUgZWxlbWVudCBpcyBsb2FkZWRcbiAgICAgICAgICovXG4gICAgICAgIG9uRWxlbWVudExvYWQ6IGZ1bmN0aW9uKGVsZW1lbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5wcm9wKCdjb21wbGV0ZScpKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQub24oJ2xvYWQnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbmRzIGEgd2lkZ2V0IGluIHRoZSBjdXJyZW50IHBhZ2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBJRCBvZiB0aGUgd2lkZ2V0IHRvIHJldHJpZXZlLlxuICAgICAgICAgKiBAcmV0dXJuIHtQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0IHwgbnVsbH0gVGhlIHdpZGdldCB3aXRoIHRoZSBnaXZlbiBJRCwgb2YgYG51bGxgIGlmIG5vIHN1Y2ggd2lkZ2V0IHdhc1xuICAgICAgICAgKiBmb3VuZC5cbiAgICAgICAgICovXG4gICAgICAgIGdldFdpZGdldEJ5SWQgOiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgZm9yICh2YXIgd2lkZ2V0VmFyIGluIFByaW1lRmFjZXMud2lkZ2V0cykge1xuICAgICAgICAgICAgICAgIHZhciB3aWRnZXQgPSBQcmltZUZhY2VzLndpZGdldHNbd2lkZ2V0VmFyXTtcbiAgICAgICAgICAgICAgICBpZiAod2lkZ2V0ICYmIHdpZGdldC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpZGdldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaW5kcyBhbGwgd2lkZ2V0cyBpbiB0aGUgY3VycmVudCBwYWdlIHRoYXQgYXJlIG9mIHRoZSBnaXZlbiB0eXBlLlxuICAgICAgICAgKiBAdGVtcGxhdGUge25ldyguLi5hcmdzOiBuZXZlcltdKSA9PiB1bmtub3dufSBUV2lkZ2V0IFR5cGUgb2YgdGhlIHdpZGdldHMgb2YgaW50ZXJlc3QsIGUuZy5cbiAgICAgICAgICogYFByaW1lRmFjZXMud2lkZ2V0LkRhdGFUYWJsZWAuXG4gICAgICAgICAqIEBwYXJhbSB7VFdpZGdldH0gdHlwZSBUaGUgKHByb3RvKXR5cGUgb2YgdGhlIHdpZGdldHMgb2YgaW50ZXJlc3QsIGUuZy4sIGBQcmltZUZhY2VzLndpZGdldC5EYXRhVGFibGVgLlxuICAgICAgICAgKiBAcmV0dXJuICB7SW5zdGFuY2VUeXBlPFRXaWRnZXQ+W119IEFuIGFycmF5IG9mIHdpZGdldHMgdGhhdCBhcmUgb2YgdGhlIHJlcXVlc3RlZCB0eXBlLiBJZiBubyBzdWl0YWJsZSB3aWRnZXRzXG4gICAgICAgICAqIGFyZSBmb3VuZCBvbiB0aGUgY3VycmVudCBwYWdlLCBhbiBlbXB0eSBhcnJheSB3aWxsIGJlIHJldHVybmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0V2lkZ2V0c0J5VHlwZTogZnVuY3Rpb24odHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuICQubWFwKHRoaXMud2lkZ2V0cywgZnVuY3Rpb24od2lkZ2V0LCBrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZih3aWRnZXQpID8gd2lkZ2V0IDogbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBmb3JtIGJ5IGlkIG9yIHRoZSBjbG9zZXN0IGZvcm0gaWYgdGhlIGlkIGlzIG5vdCBhIGZvcm0gaXRzZWxmLlxuICAgICAgICAgKiBJbiBBSkFYIHdlIGFsc28gaGF2ZSBhIGZhbGxiYWNrIGZvciB0aGUgZmlyc3QgZm9ybSBpbiBET00sIHRoaXMgc2hvdWxkIG5vdCBiZSB1c2VkIGhlcmUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBJRCBvZiB0aGUgY29tcG9uZW50IHRvIGdldCB0aGUgY2xvc2VzdCBmb3JtIG9yIGlmIGl0cyBhIGZvcm0gaXRzZWxmXG4gICAgICAgICAqIEByZXR1cm4ge0pRdWVyeX0gdGhlIGZvcm0gb3IgTlVMTCBpZiBubyBmb3JtIGZvdW5kXG4gICAgICAgICAqL1xuICAgICAgICBnZXRDbG9zZXN0Rm9ybTogZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIHZhciBmb3JtID0gJChQcmltZUZhY2VzLmVzY2FwZUNsaWVudElkKGlkKSk7XG4gICAgICAgICAgICBpZiAoIWZvcm0uaXMoJ2Zvcm0nKSkge1xuICAgICAgICAgICAgICAgIGZvcm0gPSBmb3JtLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZm9ybSkge1xuICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuZXJyb3IoJ0Zvcm0gZWxlbWVudCBjb3VsZCBub3QgYmUgZm91bmQgZm9yIGlkOiAnICsgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZvcm07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgaGlkZGVuIGlucHV0IGVsZW1lbnRzIHRvIHRoZSBnaXZlbiBmb3JtLiBGb3IgZWFjaCBrZXktdmFsdWUgcGFpciwgYSBuZXcgaGlkZGVuIGlucHV0IGVsZW1lbnQgaXMgY3JlYXRlZFxuICAgICAgICAgKiB3aXRoIHRoZSBnaXZlbiB2YWx1ZSBhbmQgdGhlIGtleSB1c2VkIGFzIHRoZSBuYW1lLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50IFRoZSBJRCBvZiBhIEZPUk0gZWxlbWVudC5cbiAgICAgICAgICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSBwYXJhbXMgQW4gb2JqZWN0IHdpdGgga2V5LXZhbHVlIHBhaXJzLlxuICAgICAgICAgKiBAcmV0dXJuIHt0eXBlb2YgUHJpbWVGYWNlc30gVGhpcyBvYmplY3QgZm9yIGNoYWluaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgYWRkU3VibWl0UGFyYW0gOiBmdW5jdGlvbihwYXJlbnQsIHBhcmFtcykge1xuICAgICAgICAgICAgdmFyIGZvcm0gPSBQcmltZUZhY2VzLmdldENsb3Nlc3RGb3JtKHBhcmVudCk7XG5cbiAgICAgICAgICAgIGZvcih2YXIga2V5IGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKFwiPGlucHV0IHR5cGU9XFxcImhpZGRlblxcXCIgbmFtZT1cXFwiXCIgKyBQcmltZUZhY2VzLmVzY2FwZUhUTUwoa2V5KSArIFwiXFxcIiB2YWx1ZT1cXFwiXCIgKyBQcmltZUZhY2VzLmVzY2FwZUhUTUwocGFyYW1zW2tleV0pICsgXCJcXFwiIGNsYXNzPVxcXCJ1aS1zdWJtaXQtcGFyYW1cXFwiPjwvaW5wdXQ+XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU3VibWl0cyB0aGUgZ2l2ZW4gZm9ybSwgYW5kIGNsZWFycyBhbGwgYHVpLXN1Ym1pdC1wYXJhbWBzIGFmdGVyIHRoYXQgdG8gcHJldmVudCBkb20gY2FjaGluZyBpc3N1ZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIElmIGEgdGFyZ2V0IGlzIGdpdmVuLCBpdCBpcyBzZXQgb24gdGhlIGZvcm0gdGVtcG9yYXJpbHkgYmVmb3JlIGl0IGlzIHN1Ym1pdHRlZC4gQWZ0ZXJ3YXJkcywgdGhlIG9yaWdpbmFsXG4gICAgICAgICAqIHRhcmdldCBhdHRyaWJ1dGUgb2YgdGhlIGZvcm0gaXMgcmVzdG9yZWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtSWQgSUQgb2YgdGhlIEZPUk0gZWxlbWVudC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt0YXJnZXRdIFRoZSB0YXJnZXQgYXR0cmlidXRlIHRvIHVzZSBvbiB0aGUgZm9ybSBkdXJpbmcgdGhlIHN1Ym1pdCBwcm9jZXNzLlxuICAgICAgICAgKi9cbiAgICAgICAgc3VibWl0IDogZnVuY3Rpb24oZm9ybUlkLCB0YXJnZXQpIHtcbiAgICAgICAgICAgIHZhciBmb3JtID0gUHJpbWVGYWNlcy5nZXRDbG9zZXN0Rm9ybShmb3JtSWQpO1xuICAgICAgICAgICAgdmFyIHByZXZUYXJnZXQ7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBwcmV2VGFyZ2V0ID0gZm9ybS5hdHRyKCd0YXJnZXQnKTtcbiAgICAgICAgICAgICAgICBmb3JtLmF0dHIoJ3RhcmdldCcsIHRhcmdldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcm0udHJpZ2dlcignc3VibWl0Jyk7XG4gICAgICAgICAgICBmb3JtLmNoaWxkcmVuKCdpbnB1dC51aS1zdWJtaXQtcGFyYW0nKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2VGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5hdHRyKCd0YXJnZXQnLCBwcmV2VGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlbW92ZUF0dHIoJ3RhcmdldCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWJvcnRzIGFsbCBwZW5kaW5nIEFKQVggcmVxdWVzdHMuIFRoaXMgaW5jbHVkZXMgYm90aCByZXF1ZXN0cyB0aGF0IHdlcmUgYWxyZWFkeSBzZW50IGJ1dCBkaWQgbm90IHJlY2VpdmUgYVxuICAgICAgICAgKiByZXNwb25zZSB5ZXQsIGFzIHdlbGwgYXMgcmVxdWVzdHMgdGhhdCBhcmUgd2FpdGluZyBpbiB0aGUgcXVldWUgYW5kIGhhdmUgbm90IGJlZW4gc2VudCB5ZXQuXG4gICAgICAgICAqL1xuICAgICAgICBhYm9ydFhIUnMgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFByaW1lRmFjZXMuYWpheC5RdWV1ZS5hYm9ydEFsbCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBdHRhY2hlcyB0aGUgZ2l2ZW4gYmVoYXZpb3JzIHRvIHRoZSBlbGVtZW50LiBGb3IgZWFjaCBiZWhhdmlvciwgYW4gZXZlbnQgbGlzdGVuZXIgaXMgcmVnaXN0ZXJlZCBvbiB0aGVcbiAgICAgICAgICogZWxlbWVudC4gVGhlbiwgd2hlbiB0aGUgZXZlbnQgaXMgdHJpZ2dlcmVkLCB0aGUgYmVoYXZpb3IgY2FsbGJhY2sgaXMgaW52b2tlZC5cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IGVsZW1lbnQgVGhlIGVsZW1lbnQgZm9yIHdoaWNoIHRvIGF0dGFjaCB0aGUgYmVoYXZpb3JzLlxuICAgICAgICAgKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsICh0aGlzOiBKUXVlcnksIGV2ZW50OiBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQpID0+IHZvaWQ+fSBiZWhhdmlvcnMgQW4gb2JqZWN0IHdpdGggYW4gZXZlbnQgbmFtZVxuICAgICAgICAgKiBhcyB0aGUga2V5IGFuZCBldmVudCBoYW5kbGVycyBmb3IgdGhhdCBldmVudCBhcyB0aGUgdmFsdWUuIEVhY2ggZXZlbnQgaGFuZGxlciBpcyBjYWxsZWQgd2l0aCB0aGUgZ2l2ZW5cbiAgICAgICAgICogZWxlbWVudCBhcyB0aGUgdGhpcyBjb250ZXh0IGFuZCB0aGUgZXZlbnQgdGhhdCBvY2N1cnJlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXG4gICAgICAgICAqL1xuICAgICAgICBhdHRhY2hCZWhhdmlvcnMgOiBmdW5jdGlvbihlbGVtZW50LCBiZWhhdmlvcnMpIHtcbiAgICAgICAgICAgICQuZWFjaChiZWhhdmlvcnMsIGZ1bmN0aW9uKGV2ZW50LCBmbikge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQub24oZXZlbnQsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm4uY2FsbChlbGVtZW50LCBlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGZXRjaGVzIHRoZSB2YWx1ZSBvZiBhIGNvb2tpZSBieSBpdHMgbmFtZVxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIGEgY29va2llXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZyB8IHVuZGVmaW5lZH0gVGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBjb29raWUsIG9yIGB1bmRlZmluZWRgIGlmIG5vIHN1Y2ggY29va2llIGV4aXN0c1xuICAgICAgICAgKi9cbiAgICAgICAgZ2V0Q29va2llIDogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIENvb2tpZXMuZ2V0KG5hbWUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiBhIHNwZWNpZmllZCBjb29raWUgd2l0aCBhZGRpdGlvbmFsIHNlY3VyaXR5IGNvbmZpZ3VyYXRpb25zLlxuICAgICAgICAgKiBJZiB0aGUgcGFnZSBpcyBzZXJ2ZWQgb3ZlciBIVFRQUyBhbmQgY29va2llcyBhcmUgY29uZmlndXJlZCB0byBiZSBzZWN1cmUgaW4gdGhlIHNldHRpbmdzLFxuICAgICAgICAgKiB0aGUgc2VjdXJlIGZsYWcgd2lsbCBiZSBzZXQuIFRoZSBTYW1lU2l0ZSBhdHRyaWJ1dGUgaXMgc2V0IGJhc2VkIG9uIHRoZSBzZXR0aW5ncyBvciBkZWZhdWx0cyB0byAnTGF4Jy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvb2tpZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgZm9yIHRoZSBjb29raWUuXG4gICAgICAgICAqIEBwYXJhbSB7UGFydGlhbDxDb29raWVzLkNvb2tpZUF0dHJpYnV0ZXM+fSBbY2ZnXSBDb25maWd1cmF0aW9uIGZvciB0aGlzIGNvb2tpZTogd2hlbiBpdCBleHBpcmVzLCBpdHNcbiAgICAgICAgICogcGF0aHMgYW5kIGRvbWFpbiBhbmQgd2hldGhlciBpdCBpcyBzZWN1cmUgY29va2llLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0Q29va2llIDogZnVuY3Rpb24obmFtZSwgdmFsdWUsIGNmZykge1xuICAgICAgICAgICAgY2ZnLnNlY3VyZSA9IGxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyAmJiBQcmltZUZhY2VzLnNldHRpbmdzLmNvb2tpZXNTZWN1cmU7XG4gICAgICAgICAgICBjZmcuc2FtZVNpdGUgPSBQcmltZUZhY2VzLnNldHRpbmdzLmNvb2tpZXNTYW1lU2l0ZSB8fCBcIkxheFwiO1xuICAgICAgICAgICAgLy8gXCJOb25lXCIgaXMgb25seSBhbGxvd2VkIHdoZW4gU2VjdXJlIGF0dHJpYnV0ZSBzbyBkZWZhdWx0IHRvIExheCBpZiB1bnNlY3VyZVxuICAgICAgICAgICAgaWYgKCFjZmcuc2VjdXJlICYmIGNmZy5zYW1lU2l0ZSA9PT0gXCJOb25lXCIpIHtcbiAgICAgICAgICAgICAgICBjZmcuc2FtZVNpdGUgPSBcIkxheFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDb29raWVzLnNldChuYW1lLCB2YWx1ZSwgY2ZnKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVsZXRlcyB0aGUgZ2l2ZW4gY29va2llLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBjb29raWUgdG8gZGVsZXRlXG4gICAgICAgICAqIEBwYXJhbSB7UGFydGlhbDxDb29raWVzLkNvb2tpZUF0dHJpYnV0ZXM+fSBbY2ZnXSBUaGUgY29va2llIGNvbmZpZ3VyYXRpb24gdXNlZCB0byBzZXQgdGhlIGNvb2tpZS5cbiAgICAgICAgICovXG4gICAgICAgIGRlbGV0ZUNvb2tpZTogZnVuY3Rpb24obmFtZSwgY2ZnKSB7XG4gICAgICAgICAgICBDb29raWVzLnJlbW92ZShuYW1lLCBjZmcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVja3Mgd2hldGhlciBjb29raWVzIGFyZSBlbmFibGVkIGluIHRoZSBjdXJyZW50IGJyb3dzZXIuXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiBjb29raWVzIGFyZSBlbmFibGVkIGFuZCBjYW4gYmUgdXNlZCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gICAgICAgICAqL1xuICAgICAgICBjb29raWVzRW5hYmxlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJ0ZXN0Y29va2llXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNvb2tpZS5pbmNsdWRlcyhcInRlc3Rjb29raWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdlbmVyYXRlcyBhIHVuaXF1ZSBrZXkgZm9yIHVzaW5nIGluIEhUTUw1IGxvY2FsIHN0b3JhZ2UgYnkgY29tYmluaW5nIHRoZSBjb250ZXh0LCB2aWV3LCBpZCwgYW5kIGtleS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIElEIG9mIHRoZSBjb21wb25lbnRcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBhIHVuaXF1ZSBrZXkgbmFtZSBzdWNoIGFzIHRoZSBjb21wb25lbnQgbmFtZVxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGdsb2JhbCBpZiBnbG9iYWwgdGhlbiBkbyBub3QgaW5jbHVkZSB0aGUgdmlldyBpZFxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBnZW5lcmF0ZWQga2V5IGNvbXByaXNpbmcgb2YgY29udGV4dCArIHZpZXcgKyBpZCArIGtleVxuICAgICAgICAgKi9cbiAgICAgICAgY3JlYXRlU3RvcmFnZUtleSA6IGZ1bmN0aW9uKGlkLCBrZXksIGdsb2JhbCkge1xuICAgICAgICAgICAgdmFyIHNrID0gUHJpbWVGYWNlcy5zZXR0aW5ncy5jb250ZXh0UGF0aC5yZXBsYWNlKC9cXC8vZywgJy0nKVxuICAgICAgICAgICAgICAgICAgICArIChnbG9iYWwgPyAnJyA6IFByaW1lRmFjZXMuc2V0dGluZ3Mudmlld0lkLnJlcGxhY2UoL1xcLy9nLCAnLScpKVxuICAgICAgICAgICAgICAgICAgICArIGlkICsgJy0nXG4gICAgICAgICAgICAgICAgICAgICsga2V5O1xuICAgICAgICAgICAgcmV0dXJuIHNrLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZXMgdGhlIGNsYXNzIG9mIHRoZSBnaXZlbiBJTlBVVCBlbGVtZW50IHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIGVsZW1lbnQgY29udGFpbnMgZGF0YSBvciBub3QuIFVzZWQgZm9yXG4gICAgICAgICAqIGV4YW1wbGUgaW4gZmxvYXRpbmcgbGFiZWxzLlxuICAgICAgICAgKiBAcGFyYW0ge0pRdWVyeX0gaW5wdXQgVGhlIHRleHQgaW5wdXQgdG8gbW9kaWZ5XG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBwYXJlbnQgVGhlIHBhcmVudCBlbGVtZW50IG9mIHRoZSBpbnB1dC5cbiAgICAgICAgICovXG4gICAgICAgIHVwZGF0ZUZpbGxlZFN0YXRlOiBmdW5jdGlvbihpbnB1dCwgcGFyZW50KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBpbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZih2YWx1ZSkgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5hZGRDbGFzcygndWktc3RhdGUtZmlsbGVkJyk7XG5cbiAgICAgICAgICAgICAgICBpZihwYXJlbnQuaXMoXCJzcGFuOm5vdCgnLnVpLWZsb2F0LWxhYmVsJylcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFkZENsYXNzKCd1aS1pbnB1dHdyYXBwZXItZmlsbGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5yZW1vdmVDbGFzcygndWktc3RhdGUtZmlsbGVkJyk7XG4gICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNsYXNzKCd1aS1pbnB1dHdyYXBwZXItZmlsbGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElOUFVUIGVsZW1lbnRzIG1heSBoYXZlIGRpZmZlcmVudCBzdGF0ZXMsIHN1Y2ggYXMgYGhvdmVyaW5nYCBvciBgZm9jdXNlZGAuIEZvciBlYWNoIHN0YXRlLCB0aGVyZSBpcyBhXG4gICAgICAgICAqIGNvcnJlc3BvbmRpbmcgc3R5bGUgY2xhc3MgdGhhdCBpcyBhZGRlZCB0byB0aGUgaW5wdXQgd2hlbiBpdCBpcyBpbiB0aGF0IHN0YXRlLCBzdWNoIGFzIGB1aS1zdGF0ZS1ob3ZlcmAgb3JcbiAgICAgICAgICogYHVpLXN0YXRlLWZvY3VzYC4gVGhlc2UgY2xhc3NlcyBhcmUgdXNlZCBieSBDU1MgcnVsZXMgZm9yIHN0eWxpbmcuIFRoaXMgbWV0aG9kIHNldHMgdXAgYW4gaW5wdXQgZWxlbWVudCBzb1xuICAgICAgICAgKiB0aGF0IHRoZSBjbGFzc2VzIGFyZSBhZGRlZCBjb3JyZWN0bHkgKGJ5IGFkZGluZyBldmVudCBsaXN0ZW5lcnMpLlxuICAgICAgICAgKiBAcGFyYW0ge0pRdWVyeX0gaW5wdXQgSU5QVVQgZWxlbWVudCB0byBza2luXG4gICAgICAgICAqIEByZXR1cm4ge3R5cGVvZiBQcmltZUZhY2VzfSB0aGlzIGZvciBjaGFpbmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgc2tpbklucHV0IDogZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBpbnB1dC5wYXJlbnQoKSxcbiAgICAgICAgICAgIHVwZGF0ZUZpbGxlZFN0YXRlT25CbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmKHBhcmVudC5oYXNDbGFzcygndWktaW5wdXR3cmFwcGVyLWZvY3VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNsYXNzKCd1aS1pbnB1dHdyYXBwZXItZm9jdXMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUHJpbWVGYWNlcy51cGRhdGVGaWxsZWRTdGF0ZShpbnB1dCwgcGFyZW50KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFByaW1lRmFjZXMudXBkYXRlRmlsbGVkU3RhdGUoaW5wdXQsIHBhcmVudCk7XG5cbiAgICAgICAgICAgIGlucHV0Lm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd1aS1zdGF0ZS1ob3ZlcicpO1xuICAgICAgICAgICAgfSkub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWhvdmVyJyk7XG4gICAgICAgICAgICB9KS5vbihcImZvY3VzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3VpLXN0YXRlLWZvY3VzJyk7XG5cbiAgICAgICAgICAgICAgICBpZihwYXJlbnQuaXMoXCJzcGFuOm5vdCgnLnVpLWZsb2F0LWxhYmVsJylcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFkZENsYXNzKCd1aS1pbnB1dHdyYXBwZXItZm9jdXMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5vbihcImJsdXIgYW5pbWF0aW9uc3RhcnRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy9hbmltYXRpb25zdGFydCBpcyB0byBmaXggYXV0b2ZpbGwgaXNzdWUgaHR0cHM6Ly9naXRodWIuY29tL3ByaW1lZmFjZXMvcHJpbWVmYWNlcy9pc3N1ZXMvMTI0NDRcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1mb2N1cycpO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGlucHV0IGlzIGEgZGF0ZXBpY2tlciBvciBhIG51bWJlciBpbnB1dCwgd2FpdCBhIGJpdCBiZWZvcmUgdXBkYXRpbmcgdGhlIGZpbGxlZCBzdGF0ZVxuICAgICAgICAgICAgICAgIGlmKGlucHV0Lmhhc0NsYXNzKCdoYXNEYXRlcGlja2VyJykgfHwgaW5wdXQuYXR0cignaW5wdXRtb2RlJykgPT09ICdudW1lcmljJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRmlsbGVkU3RhdGVPbkJsdXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZpbGxlZFN0YXRlT25CbHVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmKGlucHV0LmlzKCd0ZXh0YXJlYScpKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQuYXR0cignYXJpYS1tdWx0aWxpbmUnLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQVJJQSBmb3IgZmlsdGVyIHR5cGUgaW5wdXRzXG4gICAgICAgICAgICBpZiAoaW5wdXQuaXMoJ1tjbGFzcyo9XCItZmlsdGVyXCJdJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJpYUxhYmVsID0gaW5wdXQuYXR0cignYXJpYS1sYWJlbCcpO1xuICAgICAgICAgICAgICAgIGlmICghYXJpYUxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmF0dHIoJ2FyaWEtbGFiZWwnLCBQcmltZUZhY2VzLmdldExvY2FsZUxhYmVsKCdmaWx0ZXInKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQlVUVE9OIGVsZW1lbnRzIG1heSBoYXZlIGRpZmZlcmVudCBzdGF0ZXMsIHN1Y2ggYXMgYGhvdmVyaW5nYCBvciBgZm9jdXNlZGAuIEZvciBlYWNoIHN0YXRlLCB0aGVyZSBpcyBhXG4gICAgICAgICAqIGNvcnJlc3BvbmRpbmcgc3R5bGUgY2xhc3MgdGhhdCBpcyBhZGRlZCB0byB0aGUgYnV0dG9uIHdoZW4gaXQgaXMgaW4gdGhhdCBzdGF0ZSwgc3VjaCBhcyBgdWktc3RhdGUtaG92ZXJgIG9yXG4gICAgICAgICAqIGB1aS1zdGF0ZS1mb2N1c2AuIFRoZXNlIGNsYXNzZXMgYXJlIHVzZWQgYnkgQ1NTIHJ1bGVzIGZvciBzdHlsaW5nLiBUaGlzIG1ldGhvZCBzZXRzIHVwIGEgYnV0dG9uIGVsZW1lbnQgc29cbiAgICAgICAgICogdGhhdCB0aGUgY2xhc3NlcyBhcmUgYWRkZWQgY29ycmVjdGx5IChieSBhZGRpbmcgZXZlbnQgbGlzdGVuZXJzKS5cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IGJ1dHRvbiBCVVRUT04gZWxlbWVudCB0byBza2luXG4gICAgICAgICAqIEByZXR1cm4ge3R5cGVvZiBQcmltZUZhY2VzfSB0aGlzIGZvciBjaGFpbmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgc2tpbkJ1dHRvbiA6IGZ1bmN0aW9uKGJ1dHRvbikge1xuICAgICAgICAgICAgYnV0dG9uLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZighYnV0dG9uLnByb3AoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ3VpLXN0YXRlLWhvdmVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1hY3RpdmUgdWktc3RhdGUtaG92ZXInKTtcbiAgICAgICAgICAgIH0pLm9uKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYoIWJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCd1aS1zdGF0ZS1hY3RpdmUnKS5yZW1vdmVDbGFzcygndWktc3RhdGUtaG92ZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5vbihcIm1vdXNldXBcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndWktc3RhdGUtYWN0aXZlJykuYWRkQ2xhc3MoJ3VpLXN0YXRlLWhvdmVyJyk7XG4gICAgICAgICAgICB9KS5vbihcImZvY3VzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3VpLXN0YXRlLWZvY3VzJyk7XG4gICAgICAgICAgICB9KS5vbihcImJsdXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndWktc3RhdGUtZm9jdXMgdWktc3RhdGUtYWN0aXZlJyk7XG4gICAgICAgICAgICB9KS5vbihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmKGUuY29kZSA9PT0gJ1NwYWNlJyB8fCBlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd1aS1zdGF0ZS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5vbihcImtleXVwXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWFjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZXJlIGFyZSBtYW55IENsb3NlIGJ1dHRvbnMgaW4gUEYgdGhhdCBzaG91bGQgZ2V0IGFyaWEtbGFiZWw9XCJjbG9zZVwiIGFuZCByb2xlPVwiYnV0dG9uXCIuXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBlbGVtZW50IEJVVFRPTiBvciBMSU5LIGVsZW1lbnRcbiAgICAgICAgICogQHJldHVybiB7SlF1ZXJ5fSB0aGlzIGZvciBjaGFpbmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgc2tpbkNsb3NlQWN0aW9uIDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQubGVuZ3RoID09PSAwKSByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgIGVsZW1lbnQuYXR0cignYXJpYS1sYWJlbCcsIFByaW1lRmFjZXMuZ2V0QXJpYUxhYmVsKCdjbG9zZScpKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXR0cigncm9sZScsICdidXR0b24nKTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcHBsaWVzIHRoZSBpbmxpbmUgQUpBWCBzdGF0dXMgKHVpLXN0YXRlLWxvYWRpbmcpIHRvIHRoZSBnaXZlbiB3aWRnZXQgLyBidXR0b24uXG4gICAgICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldH0gW3dpZGdldF0gdGhlIHdpZGdldC5cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IFtidXR0b25dIFRoZSBidXR0b24gRE9NIGVsZW1lbnQuXG4gICAgICAgICAqIEBwYXJhbSB7KHdpZGdldDogUHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldCwgc2V0dGluZ3M6IEpRdWVyeS5BamF4U2V0dGluZ3MpID0+IGJvb2xlYW59IFtpc1hoclNvdXJjZV0gQ2FsbGJhY2sgdGhhdCBjaGVja3MgaWYgdGhlIHdpZGdldCBpcyB0aGUgc291cmNlIG9mIHRoZSBjdXJyZW50IEFKQVggcmVxdWVzdC5cbiAgICAgICAgICovXG4gICAgICAgIGJpbmRCdXR0b25JbmxpbmVBamF4U3RhdHVzOiBmdW5jdGlvbih3aWRnZXQsIGJ1dHRvbiwgaXNYaHJTb3VyY2UpIHtcbiAgICAgICAgICAgIGlmICghaXNYaHJTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBpc1hoclNvdXJjZSA9IGZ1bmN0aW9uKHdpZGdldCwgc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByaW1lRmFjZXMuYWpheC5VdGlscy5pc1hoclNvdXJjZSh3aWRnZXQsIHNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aWRnZXQuYWpheENvdW50ID0gMDtcbiAgICAgICAgICAgIHZhciBuYW1lc3BhY2UgPSAnLicgKyB3aWRnZXQuaWQ7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbigncGZBamF4U2VuZCcgKyBuYW1lc3BhY2UsIGZ1bmN0aW9uKGUsIHhociwgc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNYaHJTb3VyY2UuY2FsbCh0aGlzLCB3aWRnZXQsIHNldHRpbmdzKSkge1xuICAgICAgICAgICAgICAgICAgICB3aWRnZXQuYWpheENvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWRnZXQuYWpheENvdW50ID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZENsYXNzKCd1aS1zdGF0ZS1sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIHdpZGdldC5hamF4U3RhcnQgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2lkZ2V0LmRpc2FibGUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHdpZGdldC5jZmcuZGlzYWJsZU9uQWpheCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5kaXNhYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgbG9hZEljb24gPSAkKCc8c3BhbiBjbGFzcz1cInVpLWljb24tbG9hZGluZyB1aS1pY29uIHVpLWMgcGkgcGktc3BpbiBwaS1zcGlubmVyXCI+PC9zcGFuPicpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdWlJY29uID0gYnV0dG9uLmZpbmQoJy51aS1pY29uJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1aUljb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJlZml4ID0gJ3VpLWJ1dHRvbi1pY29uLSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkSWNvbi5hZGRDbGFzcyhwcmVmaXggKyB1aUljb24uYXR0cignY2xhc3MnKS5pbmNsdWRlcyhwcmVmaXggKyAnbGVmdCcpID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnByZXBlbmQobG9hZEljb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLm9uKCdwZkFqYXhDb21wbGV0ZScgKyBuYW1lc3BhY2UsIGZ1bmN0aW9uKGUsIHhociwgc2V0dGluZ3MsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNYaHJTb3VyY2UuY2FsbCh0aGlzLCB3aWRnZXQsIHNldHRpbmdzKSkge1xuICAgICAgICAgICAgICAgICAgICB3aWRnZXQuYWpheENvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWRnZXQuYWpheENvdW50ID4gMCB8fCAhYXJncyB8fCBhcmdzLnJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnF1ZXVlVGFzayhcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCl7IFByaW1lRmFjZXMuYnV0dG9uRW5kQWpheERpc2FibGVkKHdpZGdldCwgYnV0dG9uKTsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWF4KFByaW1lRmFjZXMuYWpheC5taW5Mb2FkQW5pbWF0aW9uICsgd2lkZ2V0LmFqYXhTdGFydCAtIERhdGUubm93KCksIDApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB3aWRnZXQuYWpheFN0YXJ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2lkZ2V0LmFkZERlc3Ryb3lMaXN0ZW5lcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYobmFtZXNwYWNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmRzIHRoZSBBSkFYIGRpc2FibGVkIHN0YXRlLlxuICAgICAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXR9IFt3aWRnZXRdIHRoZSB3aWRnZXQuXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBbYnV0dG9uXSBUaGUgYnV0dG9uIERPTSBlbGVtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgYnV0dG9uRW5kQWpheERpc2FibGVkOiBmdW5jdGlvbih3aWRnZXQsIGJ1dHRvbikge1xuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1sb2FkaW5nJyk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2lkZ2V0LmVuYWJsZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICYmIHdpZGdldC5jZmcuZGlzYWJsZU9uQWpheCAhPT0gZmFsc2VcbiAgICAgICAgICAgICAgICAmJiAhd2lkZ2V0LmNmZy5kaXNhYmxlZEF0dHIpIHtcbiAgICAgICAgICAgICAgICB3aWRnZXQuZW5hYmxlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbi5maW5kKCcudWktaWNvbi1sb2FkaW5nJykucmVtb3ZlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNFTEVDVCBlbGVtZW50cyBtYXkgaGF2ZSBkaWZmZXJlbnQgc3RhdGVzLCBzdWNoIGFzIGBob3ZlcmluZ2Agb3IgYGZvY3VzZWRgLiBGb3IgZWFjaCBzdGF0ZSwgdGhlcmUgaXMgYVxuICAgICAgICAgKiBjb3JyZXNwb25kaW5nIHN0eWxlIGNsYXNzIHRoYXQgaXMgYWRkZWQgdG8gdGhlIHNlbGVjdCB3aGVuIGl0IGlzIGluIHRoYXQgc3RhdGUsIHN1Y2ggYXMgYHVpLXN0YXRlLWhvdmVyYCBvclxuICAgICAgICAgKiBgdWktc3RhdGUtZm9jdXNgLiBUaGVzZSBjbGFzc2VzIGFyZSB1c2VkIGJ5IENTUyBydWxlcyBmb3Igc3R5bGluZy4gVGhpcyBtZXRob2Qgc2V0cyB1cCBhIHNlbGVjdCBlbGVtZW50IHNvXG4gICAgICAgICAqIHRoYXQgdGhlIGNsYXNzZXMgYXJlIGFkZGVkIGNvcnJlY3RseSAoYnkgYWRkaW5nIGV2ZW50IGxpc3RlbmVycykuXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBzZWxlY3QgU0VMRUNUIGVsZW1lbnQgdG8gc2tpblxuICAgICAgICAgKiBAcmV0dXJuIHt0eXBlb2YgUHJpbWVGYWNlc30gdGhpcyBmb3IgY2hhaW5pbmdcbiAgICAgICAgICovXG4gICAgICAgIHNraW5TZWxlY3QgOiBmdW5jdGlvbihzZWxlY3QpIHtcbiAgICAgICAgICAgIHNlbGVjdC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmKCFlbC5oYXNDbGFzcygndWktc3RhdGUtZm9jdXMnKSlcbiAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ3VpLXN0YXRlLWhvdmVyJyk7XG4gICAgICAgICAgICB9KS5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWhvdmVyJyk7XG4gICAgICAgICAgICB9KS5vbihcImZvY3VzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3VpLXN0YXRlLWZvY3VzJykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWhvdmVyJyk7XG4gICAgICAgICAgICB9KS5vbihcImJsdXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndWktc3RhdGUtZm9jdXMgdWktc3RhdGUtaG92ZXInKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogTG9ncyB0aGUgZ2l2ZW4gbWVzc2FnZSBhdCB0aGUgYGluZm9gIGxldmVsLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbG9nIE1lc3NhZ2UgdG8gbG9nXG4gICAgICAgICAqL1xuICAgICAgICBpbmZvOiBmdW5jdGlvbihsb2cpIHtcbiAgICAgICAgICAgIGlmKHRoaXMubG9nZ2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhsb2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFByaW1lRmFjZXMuaXNEZXZlbG9wbWVudFByb2plY3RTdGFnZSgpICYmIHdpbmRvdy5jb25zb2xlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKGxvZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExvZ3MgdGhlIGdpdmVuIG1lc3NhZ2UgYXQgdGhlIGBkZWJ1Z2AgbGV2ZWwuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2cgTWVzc2FnZSB0byBsb2dcbiAgICAgICAgICovXG4gICAgICAgIGRlYnVnOiBmdW5jdGlvbihsb2cpIHtcbiAgICAgICAgICAgIGlmKHRoaXMubG9nZ2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcobG9nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChQcmltZUZhY2VzLmlzRGV2ZWxvcG1lbnRQcm9qZWN0U3RhZ2UoKSAmJiB3aW5kb3cuY29uc29sZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcobG9nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogTG9ncyB0aGUgZ2l2ZW4gbWVzc2FnZSBhdCB0aGUgYHdhcm5gIGxldmVsLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbG9nIE1lc3NhZ2UgdG8gbG9nXG4gICAgICAgICAqL1xuICAgICAgICB3YXJuOiBmdW5jdGlvbihsb2cpIHtcbiAgICAgICAgICAgIGlmKHRoaXMubG9nZ2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIud2Fybihsb2cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoUHJpbWVGYWNlcy5pc0RldmVsb3BtZW50UHJvamVjdFN0YWdlKCkgJiYgd2luZG93LmNvbnNvbGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4obG9nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogTG9ncyB0aGUgZ2l2ZW4gbWVzc2FnZSBhdCB0aGUgYGVycm9yYCBsZXZlbC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxvZyBNZXNzYWdlIHRvIGxvZ1xuICAgICAgICAgKi9cbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGxvZykge1xuICAgICAgICAgICAgaWYodGhpcy5sb2dnZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihsb2cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoUHJpbWVGYWNlcy5pc0RldmVsb3BtZW50UHJvamVjdFN0YWdlKCkgJiYgd2luZG93LmNvbnNvbGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGxvZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBjdXJyZW50IGFwcGxpY2F0aW9uIGlzIHJ1bm5pbmcgaW4gYSBkZXZlbG9wbWVudCBlbnZpcm9ubWVudCBvciBhIHByb2R1Y3Rpb24gZW52aXJvbm1lbnQuXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGlzIGlzIGEgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgaXNEZXZlbG9wbWVudFByb2plY3RTdGFnZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJpbWVGYWNlcy5zZXR0aW5ncy5wcm9qZWN0U3RhZ2UgPT09ICdEZXZlbG9wbWVudCc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBjdXJyZW50IGFwcGxpY2F0aW9uIGlzIHJ1bm5pbmcgaW4gYSBwcm9kdWN0aW9uIGVudmlyb25tZW50LlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhpcyBpcyBhIHByb2R1Y3Rpb24gZW52aXJvbm1lbnQsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgaXNQcm9kdWN0aW9uUHJvamVjdFN0YWdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBQcmltZUZhY2VzLnNldHRpbmdzLnByb2plY3RTdGFnZSA9PT0gJ1Byb2R1Y3Rpb24nO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVzIHRoZSBlcnJvciBjYXNlIHdoZW4gYSB3aWRnZXQgd2FzIHJlcXVlc3RlZCB0aGF0IGlzIG5vdCBhdmFpbGFibGUuIEN1cnJlbnRseSBqdXN0IGxvZ3MgYW4gZXJyb3JcbiAgICAgICAgICogbWVzc2FnZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHdpZGdldFZhciBXaWRnZXQgdmFyaWFibGVzIG9mIGEgd2lkZ2V0XG4gICAgICAgICAqL1xuICAgICAgICB3aWRnZXROb3RBdmFpbGFibGU6IGZ1bmN0aW9uKHdpZGdldFZhcikge1xuICAgICAgICAgICBQcmltZUZhY2VzLmVycm9yKFwiV2lkZ2V0IGZvciB2YXIgJ1wiICsgd2lkZ2V0VmFyICsgXCInIG5vdCBhdmFpbGFibGUhXCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUYWtlcyBhbiBpbnB1dCBvciB0ZXh0YXJlYSBlbGVtZW50IGFuZCBzZXRzIHRoZSBjYXJldCAodGV4dCBjdXJzb3IpIHBvc2l0aW9uIHRvIHRoZSBlbmQgb2YgdGhlIHRoZSB0ZXh0LlxuICAgICAgICAgKiBAcGFyYW0ge0pRdWVyeX0gZWxlbWVudCBBbiBpbnB1dCBvciB0ZXh0YXJlYSBlbGVtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0Q2FyZXRUb0VuZDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgaWYoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gZWxlbWVudC52YWx1ZS5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBpZihsZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlbGVtZW50LmNyZWF0ZVRleHRSYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciByYW5nZSA9IGVsZW1lbnQuY3JlYXRlVGV4dFJhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgcmFuZ2UubW92ZUVuZCgnY2hhcmFjdGVyJywgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgcmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICByYW5nZS5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgY3VycmVudGx5IGxvYWRlZCBQcmltZUZhY2VzIHRoZW1lIENTUyBsaW5rLlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBmdWxsIFVSTCB0byB0aGUgdGhlbWUgQ1NTXG4gICAgICAgICAqL1xuICAgICAgICBnZXRUaGVtZUxpbmsgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0aGVtZUxpbmsgPSAkKCdsaW5rW2hyZWYqPVwiJyArIFByaW1lRmFjZXMuUkVTT1VSQ0VfSURFTlRJRklFUiArICcvdGhlbWUuY3NzXCJdJyk7XG4gICAgICAgICAgICAvLyBwb3J0bGV0XG4gICAgICAgICAgICBpZiAodGhlbWVMaW5rLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoZW1lTGluayA9ICQoJ2xpbmtbaHJlZio9XCInICsgUHJpbWVGYWNlcy5SRVNPVVJDRV9JREVOVElGSUVSICsgJz10aGVtZS5jc3NcIl0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGVtZUxpbms7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIGN1cnJlbnRseSBsb2FkZWQgUHJpbWVGYWNlcyB0aGVtZS5cbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgY3VycmVudCB0aGVtZSwgc3VjaCBhcyBgb21lZ2FgIG9yIGBsdW5hLWFtYmVyYC4gRW1wdHkgc3RyaW5nIHdoZW4gbm8gdGhlbWUgaXMgbG9hZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0VGhlbWUgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBQcmltZUZhY2VzLmVudi5nZXRUaGVtZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGFuZ2VzIHRoZSBjdXJyZW50IHRoZW1lIHRvIHRoZSBnaXZlbiB0aGVtZSAoYnkgZXhjaGFuZ2luZyBDU1MgZmlsZXMpLiBSZXF1aXJlcyB0aGF0IHRoZSB0aGVtZSB3YXNcbiAgICAgICAgICogaW5zdGFsbGVkIGFuZCBpcyBhdmFpbGFibGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdUaGVtZSBUaGUgbmV3IHRoZW1lLCBlZy4gYGx1bmEtYW1iZXJgLCBgbm92YS1kYXJrYCwgb3IgYG9tZWdhYC5cbiAgICAgICAgICovXG4gICAgICAgIGNoYW5nZVRoZW1lOiBmdW5jdGlvbihuZXdUaGVtZSkge1xuICAgICAgICAgICAgaWYobmV3VGhlbWUgJiYgbmV3VGhlbWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRoZW1lTGluayA9IFByaW1lRmFjZXMuZ2V0VGhlbWVMaW5rKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGhlbWVVUkwgPSB0aGVtZUxpbmsuYXR0cignaHJlZicpLFxuICAgICAgICAgICAgICAgICAgICBwbGFpblVSTCA9IHRoZW1lVVJMLnNwbGl0KCcmJylbMF0sXG4gICAgICAgICAgICAgICAgICAgIG9sZFRoZW1lID0gcGxhaW5VUkwuc3BsaXQoJ2xuPScpWzFdLFxuICAgICAgICAgICAgICAgICAgICBuZXdUaGVtZVVSTCA9IHRoZW1lVVJMLnJlcGxhY2Uob2xkVGhlbWUsICdwcmltZWZhY2VzLScgKyBuZXdUaGVtZSk7XG5cbiAgICAgICAgICAgICAgICB0aGVtZUxpbmsuYXR0cignaHJlZicsIG5ld1RoZW1lVVJMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIHJlZ2V4cCB0aGF0IG1hdGNoZXMgdGhlIGdpdmVuIHRleHQgbGl0ZXJhbCwgYW5kIEhUTUwtZXNjYXBlcyB0aGF0IHJlc3VsdC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIGxpdGVyYWwgdGV4dCB0byBlc2NhcGUuXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gQSByZWdleHAgdGhhdCBtYXRjaGVzIHRoZSBnaXZlbiB0ZXh0LCBlc2NhcGVkIHRvIGJlIHVzZWQgYXMgYSB0ZXh0LWxpdGVyYWwgd2l0aGluIGFuIEhUTUxcbiAgICAgICAgICogZG9jdW1lbnQuXG4gICAgICAgICAqL1xuICAgICAgICBlc2NhcGVSZWdFeHA6IGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVzY2FwZUhUTUwodGV4dC5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZywgXCJcXFxcJDFcIikpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFc2NhcGVzIHRoZSBnaXZlbiB2YWx1ZSB0byBiZSB1c2VkIGFzIHRoZSBjb250ZW50IG9mIGFuIEhUTUwgZWxlbWVudCBvciBhdHRyaWJ1dGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBBIHN0cmluZyB0byBiZSBlc2NhcGVkXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbiB8IHVuZGVmaW5lZH0gcHJldmVudERvdWJsZUVzY2FwaW5nIGlmIHRydWUgd2lsbCBub3QgaW5jbHVkZSBhbXBlcnNhbmQgdG8gcHJldmVudCBkb3VibGUgZXNjYXBpbmdcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgZ2l2ZW4gdmFsdWUsIGVzY2FwZWQgdG8gYmUgdXNlZCBhcyBhIHRleHQtbGl0ZXJhbCB3aXRoaW4gYW4gSFRNTCBkb2N1bWVudC5cbiAgICAgICAgICovXG4gICAgICAgIGVzY2FwZUhUTUw6IGZ1bmN0aW9uKHZhbHVlLCBwcmV2ZW50RG91YmxlRXNjYXBpbmcpIHtcbiAgICAgICAgICAgIHZhciByZWdleCA9IHByZXZlbnREb3VibGVFc2NhcGluZyA/IC9bPD5cIidgPVxcL10vZyA6IC9bJjw+XCInYD1cXC9dL2c7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKS5yZXBsYWNlKHJlZ2V4LCBmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcmltZUZhY2VzLmVudGl0eU1hcFtzXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbGVhcnMgdGhlIHRleHQgc2VsZWN0ZWQgYnkgdGhlIHVzZXIgb24gdGhlIGN1cnJlbnQgcGFnZS5cbiAgICAgICAgICovXG4gICAgICAgIGNsZWFyU2VsZWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMgJiYgd2luZG93LmdldFNlbGVjdGlvbigpLnJhbmdlQ291bnQgPiAwICYmIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApLmdldENsaWVudFJlY3RzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLmVtcHR5KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuc2VsZWN0aW9uLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvL2lnbm9yZSBJRSBidWdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbmRzIHRoZSB0ZXh0IGN1cnJlbnRseSBzZWxlY3RlZCBieSB0aGUgdXNlciBvbiB0aGUgY3VycmVudCBwYWdlLlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmcgfCBTZWxlY3Rpb259IFRoZSB0ZXh0IGN1cnJlbnRseSBzZWxlY3RlZCBieSB0aGUgdXNlciBvbiB0aGUgY3VycmVudCBwYWdlLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0U2VsZWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gJyc7XG4gICAgICAgICAgICBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIHRleHQgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldFNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIHRleHQgPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGV4dCA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLnRleHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVja3Mgd2hldGhlciBhbnkgdGV4dCBvbiB0aGUgY3VycmVudCBwYWdlIGlzIHNlbGVjdGVkIGJ5IHRoZSB1c2VyLlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgdGV4dCBpcyBzZWxlY3RlZCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gICAgICAgICAqL1xuICAgICAgICBoYXNTZWxlY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2VsZWN0aW9uKCkubGVuZ3RoID4gMDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBzaG9ydGN1dCBmb3Ige0BsaW5rIGNyZWF0ZVdpZGdldH0uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB3aWRnZXROYW1lIE5hbWUgb2YgdGhlIHdpZGdldCBjbGFzcywgYXMgcmVnaXN0ZXJlZCBpbiB7QGxpbmsgUHJpbWVGYWNlcy53aWRnZXR9LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gd2lkZ2V0VmFyIFdpZGdldCB2YXJpYWJsZSBvZiB0aGUgd2lkZ2V0XG4gICAgICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldENmZ30gY2ZnIENvbmZpZ3VyYXRpb24gZm9yIHRoZSB3aWRnZXRcbiAgICAgICAgICovXG4gICAgICAgIGN3IDogZnVuY3Rpb24od2lkZ2V0TmFtZSwgd2lkZ2V0VmFyLCBjZmcpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlV2lkZ2V0KHdpZGdldE5hbWUsIHdpZGdldFZhciwgY2ZnKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVwcmVjYXRlZCwgdXNlIHtAbGluayBQcmltZUZhY2VzLnJlc291cmNlcy5nZXRGYWNlc1Jlc291cmNlfSBpbnN0ZWFkLlxuICAgICAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSByZXNvdXJjZVxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGlicmFyeSBMaWJyYXJ5IG9mIHRoZSByZXNvdXJjZVxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiBWZXJzaW9uIG9mIHRoZSByZXNvdXJjZVxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBVUkwgZm9yIGFjY2Vzc2luZyB0aGUgZ2l2ZW4gcmVzb3VyY2UuXG4gICAgICAgICAqL1xuICAgICAgICBnZXRGYWNlc1Jlc291cmNlIDogZnVuY3Rpb24obmFtZSwgbGlicmFyeSwgdmVyc2lvbikge1xuICAgICAgICAgICByZXR1cm4gUHJpbWVGYWNlcy5yZXNvdXJjZXMuZ2V0RmFjZXNSZXNvdXJjZShuYW1lLCBsaWJyYXJ5LCB2ZXJzaW9uKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG5ldyB3aWRnZXQgb2YgdGhlIGdpdmVuIHR5cGUgYW5kIHdpdGggdGhlIGdpdmVuIGNvbmZpZ3VyYXRpb24uIFJlZ2lzdGVycyB0aGF0IHdpZGdldCBpbiB0aGUgd2lkZ2V0c1xuICAgICAgICAgKiByZWdpc3RyeSB7QGxpbmsgUHJpbWVGYWNlcy53aWRnZXRzfS4gSWYgdGhpcyBtZXRob2QgaXMgY2FsbGVkIGluIHJlc3BvbnNlIHRvIGFuIEFKQVggcmVxdWVzdCBhbmQgdGhlIG1ldGhvZFxuICAgICAgICAgKiBleGlzdHMgYWxyZWFkeSwgaXQgaXMgcmVmcmVzaGVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gd2lkZ2V0TmFtZSBOYW1lIG9mIHRoZSB3aWRnZXQgY2xhc3MsIGFzIHJlZ2lzdGVyZWQgaW4gYFByaW1lRmFjZXMud2lkZ2V0YFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gd2lkZ2V0VmFyIFdpZGdldCB2YXJpYWJsZSBvZiB0aGUgd2lkZ2V0XG4gICAgICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldENmZ30gY2ZnIENvbmZpZ3VyYXRpb24gZm9yIHRoZSB3aWRnZXRcbiAgICAgICAgICovXG4gICAgICAgIGNyZWF0ZVdpZGdldCA6IGZ1bmN0aW9uKHdpZGdldE5hbWUsIHdpZGdldFZhciwgY2ZnKSB7XG4gICAgICAgICAgICBjZmcud2lkZ2V0VmFyID0gd2lkZ2V0VmFyO1xuICAgICAgICAgICAgbG9hZFdpZGdldCh3aWRnZXROYW1lLCByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAncmVqZWN0ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuZXJyb3IoU3RyaW5nKHJlc3VsdC5yZWFzb24pKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHdpZGdldCA9IHRoaXMud2lkZ2V0c1t3aWRnZXRWYXJdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdpZGdldFR5cGUgPSByZXN1bHQudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvL2FqYXggdXBkYXRlXG4gICAgICAgICAgICAgICAgaWYod2lkZ2V0ICYmICh3aWRnZXQuY29uc3RydWN0b3IgPT09IHdpZGdldFR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZGdldC5yZWZyZXNoKGNmZyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZmcucG9zdFJlZnJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNmZy5wb3N0UmVmcmVzaC5jYWxsKHdpZGdldCwgd2lkZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vcGFnZSBpbml0XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZmcucHJlQ29uc3RydWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZmcucHJlQ29uc3RydWN0LmNhbGwobnVsbCwgY2ZnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3V2lkZ2V0ID0gbmV3IHdpZGdldFR5cGUoY2ZnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aWRnZXRzW3dpZGdldFZhcl0gPSBuZXdXaWRnZXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZmcucG9zdENvbnN0cnVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICBjZmcucG9zdENvbnN0cnVjdC5jYWxsKG5ld1dpZGdldCwgbmV3V2lkZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVja3Mgd2hldGhlciBhbiBpdGVtcyBpcyBjb250YWluZWQgaW4gdGhlIGdpdmVuIGFycmF5LiBUaGUgaXRlbXMgaXMgY29tcGFyZWQgYWdhaW5zdCB0aGUgYXJyYXkgZW50cmllc1xuICAgICAgICAgKiB2aWEgdGhlIGA9PT1gIG9wZXJhdG9yLlxuICAgICAgICAgKiBAdGVtcGxhdGUgW1Q9dW5rbm93bl0gVHlwZSBvZiB0aGUgYXJyYXkgaXRlbXNcbiAgICAgICAgICogQHBhcmFtIHtUW119IGFyciBBbiBhcnJheSB3aXRoIGl0ZW1zXG4gICAgICAgICAqIEBwYXJhbSB7VH0gaXRlbSBBbiBpdGVtIHRvIGNoZWNrXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZ2l2ZW4gaXRlbSBpcyBpbiB0aGUgZ2l2ZW4gYXJyYXksIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgaW5BcnJheTogZnVuY3Rpb24oYXJyLCBpdGVtKSB7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoYXJyW2ldID09PSBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVja3Mgd2hldGhlciBhIHZhbHVlIGlzIG9mIHR5cGUgYG51bWJlcmAgYW5kIGlzIG5laXRoZXIgYEluZmluaXR5YCBub3IgYE5hTmAuXG4gICAgICAgICAqIEBwYXJhbSB7dW5rbm93bn0gdmFsdWUgQSB2YWx1ZSB0byBjaGVja1xuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZmluaXRlIG51bWJlciAobmVpdGhlciBgTmFOYCBub3IgKy8tIGBJbmZpbml0eWApLFxuICAgICAgICAgKiBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICAgICAgICovXG4gICAgICAgIGlzTnVtYmVyOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsdWUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBdHRlbXB0cyB0byBwdXQgZm9jdXMgYW4gZWxlbWVudDpcbiAgICAgICAgICpcbiAgICAgICAgICogLSBXaGVuIGBpZGAgaXMgZ2l2ZW4sIHB1dHMgZm9jdXMgb24gdGhlIGVsZW1lbnQgd2l0aCB0aGF0IGBpZGBcbiAgICAgICAgICogLSBPdGhlcndpc2UsIHdoZW4gYGNvbnRleHRgIGlzIGdpdmVuLCBwdXRzIGZvY3VzIG9uIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCB3aXRoaW4gdGhhdCBjb250ZXh0XG4gICAgICAgICAqIChjb250YWluZXIpXG4gICAgICAgICAqIC0gT3RoZXJ3aXNlLCBwdXRzIGZvY3VzIG9uIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBpbiB0aGUgcGFnZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtpZF0gSUQgb2YgYW4gZWxlbWVudCB0byBmb2N1cy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtjb250ZXh0XSBUaGUgSUQgb2YgYSBjb250YWluZXIgd2l0aCBhbiBlbGVtZW50IHRvIGZvY3VzXG4gICAgICAgICAqL1xuICAgICAgICBmb2N1czogZnVuY3Rpb24oaWQsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RvciA9ICc6bm90KDpzdWJtaXQpOm5vdCg6YnV0dG9uKTppbnB1dDp2aXNpYmxlOmVuYWJsZWRbbmFtZV0nO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBpZiBsb29raW5nIGluIGNvbnRhaW5lciBsaWtlIGRpYWxvZyBhbHNvIGNoZWNrIGZvciBmaXJzdCBsaW5rXG4gICAgICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSAkKFByaW1lRmFjZXMuZXNjYXBlQ2xpZW50SWQoY29udGV4dCkpO1xuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIuaGFzQ2xhc3MoJ3VpLWRpYWxvZycpKSB7XG4gICAgICAgICAgICAgICAgICAgICBzZWxlY3RvciArPSAnLCBhOmZpcnN0JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvY3VzRmlyc3RFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50cyB8fCBlbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gZmlyc3QgZWxlbWVudCBjb3VsZCBiZSB0aGUgZGlhbG9nIGNsb3NlIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB2YXIgZmlyc3RFbGVtZW50ID0gZWxlbWVudHMuZXEoMCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3Agb3ZlciBlbGVtZW50cyBsb29raW5nIGZvciBhbiBpbnB1dFxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5wdXRzID0gZWxlbWVudHMuZmlsdGVyKFwiOmlucHV0XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0RWxlbWVudCA9IGlucHV0cy5lcSgwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5mb2N1c0VsZW1lbnQoZmlyc3RFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGpxID0gJChQcmltZUZhY2VzLmVzY2FwZUNsaWVudElkKGlkKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoanEuaXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqcS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNGaXJzdEVsZW1lbnQoanEuZmluZChzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICBmb2N1c0ZpcnN0RWxlbWVudCgkKFByaW1lRmFjZXMuZXNjYXBlQ2xpZW50SWQoY29udGV4dCkpLmZpbmQoc2VsZWN0b3IpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNGaXJzdEVsZW1lbnQoJChzZWxlY3RvcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUwKTtcblxuICAgICAgICAgICAgLy8gcmVtZW1iZXIgdGhhdCBhIGN1c3RvbSBmb2N1cyBoYXMgYmVlbiByZW5kZXJlZFxuICAgICAgICAgICAgLy8gdGhpcyBhdm9pZHMgdG8gcmV0YWluIHRoZSBsYXN0IGZvY3VzIGFmdGVyIGFqYXggdXBkYXRlXG4gICAgICAgICAgICBQcmltZUZhY2VzLmN1c3RvbUZvY3VzID0gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHV0cyBmb2N1cyBvbiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IGVsIEVsZW1lbnQgdG8gZm9jdXNcbiAgICAgICAgICovXG4gICAgICAgIGZvY3VzRWxlbWVudDogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGlmKGVsLmlzKCc6cmFkaW8nKSkge1xuICAgICAgICAgICAgICAgIC8vIGdpdGh1YiBpc3N1ZTogIzI1ODJcbiAgICAgICAgICAgICAgICBpZihlbC5oYXNDbGFzcygndWktaGVscGVyLWhpZGRlbi1hY2Nlc3NpYmxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwucGFyZW50KCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGVja2VkUmFkaW8gPSAkKCc6cmFkaW9bbmFtZT1cIicgKyBDU1MuZXNjYXBlKGVsLmF0dHIoJ25hbWUnKSkgKyAnXCJdJykuZmlsdGVyKCc6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICBpZihjaGVja2VkUmFkaW8ubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFJhZGlvLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWwudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQXMgYSBgPHA6ZmlsZURvd25sb2FkPmAgcHJvY2VzcyBpcyBpbXBsZW1lbnRlZCBhcyBhIG5vcm1hLCBub24tQUpBWCByZXF1ZXN0LCBgPHA6YWpheFN0YXR1cz5gIHdpbGwgbm90IHdvcmsuXG4gICAgICAgICAqIFN0aWxsLCBQcmltZUZhY2VzIHByb3ZpZGVzIGEgZmVhdHVyZSB0byBtb25pdG9yIGZpbGUgZG93bmxvYWRzIHZpYSB0aGlzIGNsaWVudC1zaWRlIGZ1bmN0aW9uLiBUaGlzIGlzIGRvbmVcbiAgICAgICAgICogYnkgc2VuZGluZyBhIGNvb2tpZSB3aXRoIHRoZSBIVFRQIHJlc3BvbnNlIG9mIHRoZSBmaWxlIGRvd25sb2FkIHJlcXVlc3QuIE9uIHRoZSBjbGllbnQtc2lkZSwgcG9sbGluZyBpcyB1c2VkXG4gICAgICAgICAqIHRvIGNoZWNrIHdoZW4gdGhlIGNvb2tpZSBpcyBzZXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoZSBleGFtcGxlIGJlbG93IGRpc3BsYXlzIGEgbW9kYWwgZGlhbG9nIHdoZW4gYSBkb3dubG9hZCBiZWdpbnMgYW5kIGhpZGVzIGl0IHdoZW4gdGhlIGRvd25sb2FkIGlzIGNvbXBsZXRlOlxuICAgICAgICAgKlxuICAgICAgICAgKiBDbGllbnQtc2lkZSBjYWxsYmFja3M6XG4gICAgICAgICAqXG4gICAgICAgICAqIGBgYGphdmFzY3JpcHRcbiAgICAgICAgICogZnVuY3Rpb24gc2hvd1N0YXR1cygpIHtcbiAgICAgICAgICogICBQRignc3RhdHVzRGlhbG9nJykuc2hvdygpO1xuICAgICAgICAgKiB9XG4gICAgICAgICAqIGZ1bmN0aW9uIGhpZGVTdGF0dXMoKSB7XG4gICAgICAgICAqICAgUEYoJ3N0YXR1c0RpYWxvZycpLmhpZGUoKTtcbiAgICAgICAgICogfVxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICpcbiAgICAgICAgICogU2VydmVyLXNpZGUgWEhUTUwgdmlldzpcbiAgICAgICAgICpcbiAgICAgICAgICogYGBgeG1sXG4gICAgICAgICAqIDxwOmNvbW1hbmRCdXR0b24gdmFsdWU9XCJEb3dubG9hZFwiIGFqYXg9XCJmYWxzZVwiIG9uY2xpY2s9XCJQcmltZUZhY2VzLm1vbml0b3JEb3dubG9hZChzaG93U3RhdHVzLCBoaWRlU3RhdHVzKVwiPlxuICAgICAgICAgKiAgIDxwOmZpbGVEb3dubG9hZCB2YWx1ZT1cIiN7ZmlsZURvd25sb2FkQ29udHJvbGxlci5maWxlfVwiLz5cbiAgICAgICAgICogPC9wOmNvbW1hbmRCdXR0b24+XG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKiBAcGFyYW0geygpID0+IHZvaWR9IHN0YXJ0IENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIHRoZSBkb3dubG9hZCBzdGFydHMuXG4gICAgICAgICAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY29tcGxldGUgQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gdGhlIGRvd25sb2FkIGVuZHMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbW9uaXRvcktleV0gTmFtZSBvZiB0aGUgY29va2llIGZvciBtb25pdG9yaW5nIHRoZSBkb3dubG9hZC4gVGhlIGNvb2tpZSBuYW1lIGRlZmF1bHRzIHRvXG4gICAgICAgICAqIGBwcmltZWZhY2VzLmRvd25sb2FkYCArIHRoZSBjdXJyZW50IHZpZXdJZC4gV2hlbiBhIG1vbml0b3Iga2V5IGlzIGdpdmVuLCB0aGUgbmFtZSBvZiB0aGUgY29va2llIHdpbGwgY29uc2lzdCBvZiBhIHByZWZpeCBhbmQgdGhlXG4gICAgICAgICAqIGdpdmVuIG1vbml0b3Iga2V5LlxuICAgICAgICAgKi9cbiAgICAgICAgbW9uaXRvckRvd25sb2FkOiBmdW5jdGlvbihzdGFydCwgY29tcGxldGUsIG1vbml0b3JLZXkpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuY29va2llc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgICAgIGlmKHN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGNvb2tpZU5hbWUgPSAncHJpbWVmYWNlcy5kb3dubG9hZCcgKyBQcmltZUZhY2VzLnNldHRpbmdzLnZpZXdJZC5yZXBsYWNlKC9cXC8vZywgJ18nKTtcbiAgICAgICAgICAgICAgICBjb29raWVOYW1lID0gY29va2llTmFtZS5zdWJzdHIoMCwgY29va2llTmFtZS5sYXN0SW5kZXhPZihcIi5cIikpO1xuICAgICAgICAgICAgICAgIGlmIChtb25pdG9yS2V5ICYmIG1vbml0b3JLZXkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZU5hbWUgKz0gJ18nICsgbW9uaXRvcktleTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgY29va2llUGF0aCA9IFByaW1lRmFjZXMuc2V0dGluZ3MuY29udGV4dFBhdGg7XG4gICAgICAgICAgICAgICAgaWYgKCFjb29raWVQYXRoIHx8IGNvb2tpZVBhdGggPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVBhdGggPSAnLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2luZG93LmRvd25sb2FkTW9uaXRvciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZG93bmxvYWRDb21wbGV0ZSA9IFByaW1lRmFjZXMuZ2V0Q29va2llKGNvb2tpZU5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGRvd25sb2FkQ29tcGxldGUgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3aW5kb3cuZG93bmxvYWRNb25pdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuc2V0Q29va2llKGNvb2tpZU5hbWUsIG51bGwsIHsgcGF0aDogY29va2llUGF0aCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTY3JvbGxzIHRvIGEgY29tcG9uZW50IHdpdGggZ2l2ZW4gY2xpZW50IGlkXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgSUQgb2YgYW4gZWxlbWVudCB0byBzY3JvbGwgdG8uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkfSBkdXJhdGlvbiBzdHJpbmcgb3IgbnVtYmVyIGRldGVybWluaW5nIGhvdyBsb25nIHRoZSBhbmltYXRpb24gd2lsbCBydW4uIERlZmF1bHQgdG8gNDAwXG4gICAgICAgICAqL1xuICAgICAgICBzY3JvbGxUbzogZnVuY3Rpb24oaWQsIGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gJChQcmltZUZhY2VzLmVzY2FwZUNsaWVudElkKGlkKSkub2Zmc2V0KCk7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsQmVoYXZpb3IgPSAnc2Nyb2xsLWJlaGF2aW9yJztcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKCdodG1sLGJvZHknKTtcbiAgICAgICAgICAgIHZhciBzYlZhbHVlID0gdGFyZ2V0LmNzcyhzY3JvbGxCZWhhdmlvcik7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiB8fCA0MDA7XG4gICAgICAgICAgICB0YXJnZXQuY3NzKHNjcm9sbEJlaGF2aW9yLCAnYXV0bycpO1xuICAgICAgICAgICAgdGFyZ2V0LmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgICAgIHsgc2Nyb2xsVG9wOiBvZmZzZXQudG9wLCBzY3JvbGxMZWZ0OiBvZmZzZXQubGVmdCB9LFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgJ2Vhc2VJbkNpcmMnLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpeyB0YXJnZXQuY3NzKHNjcm9sbEJlaGF2aW9yLCBzYlZhbHVlKSB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGlnbnMgY29udGFpbmVyIHNjcm9sbGJhciB0byBrZWVwIGl0ZW0gaW4gY29udGFpbmVyIHZpZXdwb3J0LCBhbGdvcml0aG0gY29waWVkIGZyb20gSlF1ZXJ5VUkgbWVudSB3aWRnZXQuXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBjb250YWluZXIgVGhlIGNvbnRhaW5lciB3aXRoIGEgc2Nyb2xsYmFyIHRoYXQgY29udGFpbnMgdGhlIGl0ZW0uXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBpdGVtIFRoZSBpdGVtIHRvIHNjcm9sbCBpbnRvIHZpZXcuXG4gICAgICAgICAqL1xuICAgICAgICBzY3JvbGxJblZpZXc6IGZ1bmN0aW9uKGNvbnRhaW5lciwgaXRlbSkge1xuICAgICAgICAgICAgaWYoaXRlbSA9PT0gbnVsbCB8fCBpdGVtLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGJvcmRlclRvcCA9IHBhcnNlRmxvYXQoY29udGFpbmVyLmNzcygnYm9yZGVyVG9wV2lkdGgnKSkgfHwgMCxcbiAgICAgICAgICAgIHBhZGRpbmdUb3AgPSBwYXJzZUZsb2F0KGNvbnRhaW5lci5jc3MoJ3BhZGRpbmdUb3AnKSkgfHwgMCxcbiAgICAgICAgICAgIG9mZnNldCA9IGl0ZW0ub2Zmc2V0KCkudG9wIC0gY29udGFpbmVyLm9mZnNldCgpLnRvcCAtIGJvcmRlclRvcCAtIHBhZGRpbmdUb3AsXG4gICAgICAgICAgICBzY3JvbGwgPSBjb250YWluZXIuc2Nyb2xsVG9wKCksXG4gICAgICAgICAgICBlbGVtZW50SGVpZ2h0ID0gY29udGFpbmVyLmhlaWdodCgpLFxuICAgICAgICAgICAgaXRlbUhlaWdodCA9IGl0ZW0ub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgICAgIGlmKG9mZnNldCA8IDApIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wKHNjcm9sbCArIG9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKChvZmZzZXQgKyBpdGVtSGVpZ2h0KSA+IGVsZW1lbnRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wKHNjcm9sbCArIG9mZnNldCAtIGVsZW1lbnRIZWlnaHQgKyBpdGVtSGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRmluZHMgdGhlIHdpZHRoIG9mIHRoZSBzY3JvbGxiYXIgdGhhdCBpcyB1c2VkIGJ5IHRoZSBjdXJyZW50IGJyb3dzZXIsIGFzIHNjcm9sbGJhciB3aWR0aHMgYXJlIGRpZmZlcmVudCBmb3JcbiAgICAgICAgICogYWNyb3NzIGRpZmZlcmVudCBicm93c2Vycy5cbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgd2lkdGggb2YgdGhlIHNjcm9sbGJhcnMgb2YgdGhlIGN1cnJlbnQgYnJvd3Nlci5cbiAgICAgICAgICovXG4gICAgICAgIGNhbGN1bGF0ZVNjcm9sbGJhcldpZHRoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLnNjcm9sbGJhcldpZHRoKSB7XG4gICAgICAgICAgICAgICAgdmFyICRkaXYgPSAkKCc8ZGl2PjwvZGl2PicpXG4gICAgICAgICAgICAgICAgICAgIC5jc3MoeyB3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnMTAwcHgnLCBvdmVyZmxvdzogJ2F1dG8nLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnLTEwMDBweCcsIGxlZnQ6ICctMTAwMHB4JyB9KVxuICAgICAgICAgICAgICAgICAgICAucHJlcGVuZFRvKCdib2R5JykuYXBwZW5kKCc8ZGl2PjwvZGl2PicpLmZpbmQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMjAwcHgnIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGggPSAxMDAgLSAkZGl2LndpZHRoKCk7XG4gICAgICAgICAgICAgICAgJGRpdi5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsYmFyV2lkdGg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIGFzIHRoZSBoYW5kbGVyIGZ1bmN0aW9uIGZvciBIVE1MIGV2ZW50IHRhZ3MgKGBvbmNsaWNrYCwgYG9ua2V5dXBgIGV0Yy4pLiBXaGVuIGFcbiAgICAgICAgICogY29tcG9uZW50IGhhcyBnb3QgYW4gYG9uY2xpY2tgIGV0YyBhdHRyaWJ1dGUsIHRoZSBKYXZhU2NyaXB0IGZvciB0aGF0IGF0dHJpYnV0ZSBpcyBjYWxsZWQgYnkgdGhpcyBtZXRob2QuXG4gICAgICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCBvbiB3aGljaCB0aGUgZXZlbnQgb2NjdXJyZWQuXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IEV2ZW50IHRoYXQgb2NjdXJyZWQuXG4gICAgICAgICAqIEBwYXJhbSB7KCh0aGlzOiBIVE1MRWxlbWVudCwgZXZlbnQ6IEV2ZW50KSA9PiBib29sZWFuIHwgdW5kZWZpbmVkKVtdfSBmdW5jdGlvbnMgQSBsaXN0IG9mIGNhbGxiYWNrXG4gICAgICAgICAqIGZ1bmN0aW9ucy4gSWYgYW55IHJldHVybnMgYGZhbHNlYCwgdGhlIGRlZmF1bHQgYWN0aW9uIG9mIHRoZSBldmVudCBpcyBwcmV2ZW50ZWQuXG4gICAgICAgICAqL1xuICAgICAgICBiY246IGZ1bmN0aW9uKGVsZW1lbnQsIGV2ZW50LCBmdW5jdGlvbnMpIHtcbiAgICAgICAgICAgIGlmKGZ1bmN0aW9ucykge1xuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBmdW5jdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJldFZhbCA9IGZ1bmN0aW9uc1tpXS5jYWxsKGVsZW1lbnQsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgaWYocmV0VmFsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIGFzIHRoZSBoYW5kbGVyIGZ1bmN0aW9uIGZvciBBSkFYIGJlaGF2aW9ycy4gV2hlbiBhIGNvbXBvbmVudCBoYXMgZ290IGFuIEFKQVhcbiAgICAgICAgICogYmVoYXZpb3IsIHRoZSBKYXZhU2NyaXB0IHRoYXQgaW1wbGVtZW50cyBiZWhhdmlvcidzIGNsaWVudC1zaWRlIGxvZ2ljIGlzIGNhbGxlZCBieSB0aGlzIG1ldGhvZC5cbiAgICAgICAgICogQHBhcmFtIHtQYXJ0aWFsPFByaW1lRmFjZXMuYWpheC5Db25maWd1cmF0aW9uRXh0ZW5kZXI+fSBleHQgQWRkaXRpb25hbCBvcHRpb25zIHRvIG92ZXJyaWRlIHRoZSBjdXJyZW50XG4gICAgICAgICAqIG9wdGlvbnMuXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IEV2ZW50IHRoYXQgb2NjdXJyZWQuXG4gICAgICAgICAqIEBwYXJhbSB7KCh0aGlzOiB0eXBlb2YgUHJpbWVGYWNlcywgZXh0OiBQYXJ0aWFsPFByaW1lRmFjZXMuYWpheC5Db25maWd1cmF0aW9uRXh0ZW5kZXI+LCBldmVudDogRXZlbnQpID0+IGJvb2xlYW4gfCB1bmRlZmluZWQpW119IGZuc1xuICAgICAgICAgKiBBIGxpc3Qgb2YgY2FsbGJhY2sgZnVuY3Rpb25zLiBJZiBhbnkgcmV0dXJucyBgZmFsc2VgLCB0aGUgb3RoZXIgY2FsbGJhY2tzIGFyZSBub3QgaW52b2tlZC5cbiAgICAgICAgICovXG4gICAgICAgIGJjbnU6IGZ1bmN0aW9uKGV4dCwgZXZlbnQsIGZucykge1xuICAgICAgICAgICAgaWYoZm5zKSB7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmV0VmFsID0gZm5zW2ldLmNhbGwodGhpcywgZXh0LCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJldFZhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgXHQvKipcbiAgICBcdCAqIERlcHJlY2F0ZWQsIHVzZSBgUHJpbWVGYWNlcy5kaWFsb2cuRGlhbG9nSGFuZGxlci5vcGVuRGlhbG9nYCBpbnN0ZWFkLlxuICAgICAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMuZGlhbG9nLkRpYWxvZ0hhbmRsZXJDZmd9IGNmZyBDb25maWd1cmF0aW9uIG9mIHRoZSBkaWFsb2cuXG4gICAgXHQgKi9cbiAgICAgICAgb3BlbkRpYWxvZzogZnVuY3Rpb24oY2ZnKSB7XG4gICAgICAgICAgICBpZiAoUHJpbWVGYWNlcy5kaWFsb2cpIHtcbiAgICAgICAgXHRQcmltZUZhY2VzLmRpYWxvZy5EaWFsb2dIYW5kbGVyLm9wZW5EaWFsb2coY2ZnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICBcdCAqIERlcHJlY2F0ZWQsIHVzZSBgUHJpbWVGYWNlcy5kaWFsb2cuRGlhbG9nSGFuZGxlci5jbG9zZURpYWxvZ2AgaW5zdGVhZC5cbiAgICAgICAgICogQGRlcHJlY2F0ZWRcbiAgICAgICAgICogQHBhcmFtIHtQcmltZUZhY2VzLmRpYWxvZy5EaWFsb2dIYW5kbGVyQ2ZnfSBjZmcgQ29uZmlndXJhdGlvbiBvZiB0aGUgZGlhbG9nLlxuICAgICAgICAgKi9cbiAgICAgICAgY2xvc2VEaWFsb2c6IGZ1bmN0aW9uKGNmZykge1xuICAgICAgICAgICAgaWYgKFByaW1lRmFjZXMuZGlhbG9nKSB7XG4gICAgICAgIFx0UHJpbWVGYWNlcy5kaWFsb2cuRGlhbG9nSGFuZGxlci5jbG9zZURpYWxvZyhjZmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgIFx0ICogRGVwcmVjYXRlZCwgdXNlIHtAbGluayBQcmltZUZhY2VzLmRpYWxvZy5EaWFsb2dIYW5kbGVyLnNob3dNZXNzYWdlSW5EaWFsb2d9IGluc3RlYWQuXG4gICAgICAgICAqIEBkZXByZWNhdGVkXG4gICAgICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy53aWRnZXQuQ29uZmlybURpYWxvZy5Db25maXJtRGlhbG9nTWVzc2FnZX0gbXNnIE1lc3NhZ2UgdG8gc2hvdyBpbiBhIGRpYWxvZy5cbiAgICAgICAgICovXG4gICAgICAgIHNob3dNZXNzYWdlSW5EaWFsb2c6IGZ1bmN0aW9uKG1zZykge1xuICAgICAgICAgICAgaWYgKFByaW1lRmFjZXMuZGlhbG9nKSB7XG4gICAgICAgIFx0UHJpbWVGYWNlcy5kaWFsb2cuRGlhbG9nSGFuZGxlci5zaG93TWVzc2FnZUluRGlhbG9nKG1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc3BsYXlzIGRpYWxvZyBvciBwb3B1cCBhY2NvcmRpbmcgdG8gdGhlIHR5cGUgb2YgY29uZmlybSBjb21wb25lbnQuXG4gICAgICAgICAqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQsIHVzZSB7QGxpbmsgUHJpbWVGYWNlcy5kaWFsb2cuRGlhbG9nSGFuZGxlci5jb25maXJtfSBpbnN0ZWFkLlxuICAgICAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMuZGlhbG9nLkV4dGVuZGVkQ29uZmlybURpYWxvZ01lc3NhZ2V9IG1zZyBNZXNzYWdlIHRvIHNob3cgd2l0aCB0aGUgY29uZmlybSBkaWFsb2cgb3IgcG9wdXAuXG4gICAgICAgICAqL1xuICAgICAgICBjb25maXJtOiBmdW5jdGlvbihtc2cpIHtcbiAgICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3BvcHVwJyAmJiBQcmltZUZhY2VzLmNvbmZpcm1Qb3B1cCkge1xuICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuY29uZmlybVBvcHVwLnNob3dNZXNzYWdlKG1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChQcmltZUZhY2VzLmRpYWxvZykge1xuICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuZGlhbG9nLkRpYWxvZ0hhbmRsZXIuY29uZmlybShtc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTb21lIHdpZGdldHMgbmVlZCB0byBjb21wdXRlIHRoZWlyIGRpbWVuc2lvbnMgYmFzZWQgb24gdGhlaXIgcGFyZW50IGVsZW1lbnQocykuIFRoaXMgcmVxdWlyZXMgdGhhdCBzdWNoXG4gICAgICAgICAqIHdpZGdldHMgYXJlIG5vdCByZW5kZXJlZCB1bnRpbCB0aGV5IGhhdmUgYmVjb21lIHZpc2libGUuIEEgd2lkZ2V0IG1heSBub3QgYmUgdmlzaWJsZSwgZm9yIGV4YW1wbGUsIHdoZW4gaXRcbiAgICAgICAgICogaXMgaW5zaWRlIGEgdGFiIHRoYXQgaXMgbm90IHNob3duIHdoZW4gdGhlIHBhZ2UgaXMgcmVuZGVyZWQuIFByaW1lRmFjZXMgcHJvdmlkZXMgYSBnbG9iYWwgbWVjaGFuaXNtIGZvclxuICAgICAgICAgKiB3aWRnZXRzIHRvIHJlbmRlciBvbmNlIHRoZXkgYXJlIHZpc2libGUuIFRoaXMgaXMgZG9uZSBieSBrZWVwaW5nIGEgbGlzdCBvZiB3aWRnZXRzIHRoYXQgbmVlZCB0byBiZSByZW5kZXJlZCxcbiAgICAgICAgICogYW5kIGNoZWNraW5nIG9uIGV2ZXJ5IGNoYW5nZSAoQUpBWCByZXF1ZXN0LCB0YWIgY2hhbmdlIGV0Yy4pIHdoZXRoZXIgYW55IG9mIHRob3NlIGhhdmUgYmVjb21lIHZpc2libGUuIEFcbiAgICAgICAgICogd2lkZ2V0cyBzaG91bGQgZXh0ZW5kIGBQcmltZUZhY2VzLndpZGdldC5EZWZlcnJlZFdpZGdldGAgdG8gbWFrZSB1c2Ugb2YgdGhpcyBmdW5jdGlvbmFsaXR5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGlzIHRoZSBsaXN0IG9mIHJlbmRlcnMgZm9yIHdpZGdldHMgdGhhdCBhcmUgY3VycmVudGx5IHdhaXRpbmcgdG8gYmVjb21lIHZpc2libGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtQcmltZUZhY2VzLkRlZmVycmVkUmVuZGVyW119XG4gICAgICAgICAqL1xuICAgICAgICBkZWZlcnJlZFJlbmRlcnM6IFtdLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTb21lIHdpZGdldHMgbmVlZCB0byBjb21wdXRlIHRoZWlyIGRpbWVuc2lvbnMgYmFzZWQgb24gdGhlaXIgcGFyZW50IGVsZW1lbnQocykuIFRoaXMgcmVxdWlyZXMgdGhhdCBzdWNoXG4gICAgICAgICAqIHdpZGdldHMgYXJlIG5vdCByZW5kZXJlZCB1bnRpbCB0aGV5IGhhdmUgYmVjb21lIHZpc2libGUuIEEgd2lkZ2V0IG1heSBub3QgYmUgdmlzaWJsZSwgZm9yIGV4YW1wbGUsIHdoZW4gaXRcbiAgICAgICAgICogaXMgaW5zaWRlIGEgdGFiIHRoYXQgaXMgbm90IHNob3duIHdoZW4gdGhlIHBhZ2UgaXMgcmVuZGVyZWQuIFByaW1lRmFjZXMgcHJvdmlkZXMgYSBnbG9iYWwgbWVjaGFuaXNtIGZvclxuICAgICAgICAgKiB3aWRnZXRzIHRvIHJlbmRlciBvbmNlIHRoZXkgYXJlIHZpc2libGUuIFRoaXMgaXMgZG9uZSBieSBrZWVwaW5nIGEgbGlzdCBvZiB3aWRnZXRzIHRoYXQgbmVlZCB0byBiZSByZW5kZXJlZCxcbiAgICAgICAgICogYW5kIGNoZWNraW5nIG9uIGV2ZXJ5IGNoYW5nZSAoQUpBWCByZXF1ZXN0LCB0YWIgY2hhbmdlIGV0Yy4pIHdoZXRoZXIgYW55IG9mIHRob3NlIGhhdmUgYmVjb21lIHZpc2libGUuIEFcbiAgICAgICAgICogd2lkZ2V0cyBzaG91bGQgZXh0ZW5kIGBQcmltZUZhY2VzLndpZGdldC5EZWZlcnJlZFdpZGdldGAgdG8gbWFrZSB1c2Ugb2YgdGhpcyBmdW5jdGlvbmFsaXR5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBBZGRzIGEgZGVmZXJyZWQgcmVuZGVyIHRvIHRoZSBnbG9iYWwgbGlzdC4gIElmIHRoaXMgd2lkZGdldCBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIG9ubHkgdGhlIGxhc3QgaW5zdGFuY2VcbiAgICAgICAgICogd2lsbCBiZSBhZGRlZCB0byB0aGUgc3RhY2suXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB3aWRnZXRJZCBUaGUgSUQgb2YgYSBkZWZlcnJlZCB3aWRnZXQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb250YWluZXJJZCBJRCBvZiB0aGUgY29udGFpbmVyIHRoYXQgc2hvdWxkIGJlIHZpc2libGUgYmVmb3JlIHRoZSB3aWRnZXQgY2FuIGJlIHJlbmRlcmVkLlxuICAgICAgICAgKiBAcGFyYW0geygpID0+IGJvb2xlYW59IGZuIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIHRoZSB3aWRnZXQgX21heV8gcG9zc2libHkgaGF2ZSBiZWNvbWUgdmlzaWJsZS4gU2hvdWxkXG4gICAgICAgICAqIHJldHVybiBgdHJ1ZWAgd2hlbiB0aGUgd2lkZ2V0IHdhcyByZW5kZXJlZCwgb3IgYGZhbHNlYCB3aGVuIHRoZSB3aWRnZXQgc3RpbGwgbmVlZHMgdG8gYmUgcmVuZGVyZWQgbGF0ZXIuXG4gICAgICAgICAqL1xuICAgICAgICBhZGREZWZlcnJlZFJlbmRlcjogZnVuY3Rpb24od2lkZ2V0SWQsIGNvbnRhaW5lcklkLCBmbikge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGV4aXN0aW5nXG4gICAgICAgICAgICB0aGlzLmRlZmVycmVkUmVuZGVycyA9IHRoaXMuZGVmZXJyZWRSZW5kZXJzLmZpbHRlcihkZWZlcnJlZFJlbmRlciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEoZGVmZXJyZWRSZW5kZXIud2lkZ2V0ID09PSB3aWRnZXRJZCAmJiBkZWZlcnJlZFJlbmRlci5jb250YWluZXIgPT09IGNvbnRhaW5lcklkKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBhZGQgbmV3XG4gICAgICAgICAgICB0aGlzLmRlZmVycmVkUmVuZGVycy5wdXNoKHsgd2lkZ2V0OiB3aWRnZXRJZCwgY29udGFpbmVyOiBjb250YWluZXJJZCwgY2FsbGJhY2s6IGZuIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTb21lIHdpZGdldHMgbmVlZCB0byBjb21wdXRlIHRoZWlyIGRpbWVuc2lvbnMgYmFzZWQgb24gdGhlaXIgcGFyZW50IGVsZW1lbnQocykuIFRoaXMgcmVxdWlyZXMgdGhhdCBzdWNoXG4gICAgICAgICAqIHdpZGdldHMgYXJlIG5vdCByZW5kZXJlZCB1bnRpbCB0aGV5IGhhdmUgYmVjb21lIHZpc2libGUuIEEgd2lkZ2V0IG1heSBub3QgYmUgdmlzaWJsZSwgZm9yIGV4YW1wbGUsIHdoZW4gaXRcbiAgICAgICAgICogaXMgaW5zaWRlIGEgdGFiIHRoYXQgaXMgbm90IHNob3duIHdoZW4gdGhlIHBhZ2UgaXMgcmVuZGVyZWQuIFByaW1lRmFjZXMgcHJvdmlkZXMgYSBnbG9iYWwgbWVjaGFuaXNtIGZvclxuICAgICAgICAgKiB3aWRnZXRzIHRvIHJlbmRlciBvbmNlIHRoZXkgYXJlIHZpc2libGUuIFRoaXMgaXMgZG9uZSBieSBrZWVwaW5nIGEgbGlzdCBvZiB3aWRnZXRzIHRoYXQgbmVlZCB0byBiZSByZW5kZXJlZCxcbiAgICAgICAgICogYW5kIGNoZWNraW5nIG9uIGV2ZXJ5IGNoYW5nZSAoQUpBWCByZXF1ZXN0LCB0YWIgY2hhbmdlIGV0Yy4pIHdoZXRoZXIgYW55IG9mIHRob3NlIGhhdmUgYmVjb21lIHZpc2libGUuIEFcbiAgICAgICAgICogd2lkZ2V0cyBzaG91bGQgZXh0ZW5kIGBQcmltZUZhY2VzLndpZGdldC5EZWZlcnJlZFdpZGdldGAgdG8gbWFrZSB1c2Ugb2YgdGhpcyBmdW5jdGlvbmFsaXR5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBSZW1vdmVzIGEgZGVmZXJyZWQgcmVuZGVyIGZyb20gdGhlIGdsb2JhbCBsaXN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gd2lkZ2V0SWQgVGhlIElEIG9mIGEgZGVmZXJyZWQgd2lkZ2V0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3ZlRGVmZXJyZWRSZW5kZXJzOiBmdW5jdGlvbih3aWRnZXRJZCkge1xuICAgICAgICAgICAgdGhpcy5kZWZlcnJlZFJlbmRlcnMgPSB0aGlzLmRlZmVycmVkUmVuZGVycy5maWx0ZXIoZnVuY3Rpb24oZGVmZXJyZWRSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWRSZW5kZXIud2lkZ2V0ICE9PSB3aWRnZXRJZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTb21lIHdpZGdldHMgbmVlZCB0byBjb21wdXRlIHRoZWlyIGRpbWVuc2lvbnMgYmFzZWQgb24gdGhlaXIgcGFyZW50IGVsZW1lbnQocykuIFRoaXMgcmVxdWlyZXMgdGhhdCBzdWNoXG4gICAgICAgICAqIHdpZGdldHMgYXJlIG5vdCByZW5kZXJlZCB1bnRpbCB0aGV5IGhhdmUgYmVjb21lIHZpc2libGUuIEEgd2lkZ2V0IG1heSBub3QgYmUgdmlzaWJsZSwgZm9yIGV4YW1wbGUsIHdoZW4gaXRcbiAgICAgICAgICogaXMgaW5zaWRlIGEgdGFiIHRoYXQgaXMgbm90IHNob3duIHdoZW4gdGhlIHBhZ2UgaXMgcmVuZGVyZWQuIFByaW1lRmFjZXMgcHJvdmlkZXMgYSBnbG9iYWwgbWVjaGFuaXNtIGZvclxuICAgICAgICAgKiB3aWRnZXRzIHRvIHJlbmRlciBvbmNlIHRoZXkgYXJlIHZpc2libGUuIFRoaXMgaXMgZG9uZSBieSBrZWVwaW5nIGEgbGlzdCBvZiB3aWRnZXRzIHRoYXQgbmVlZCB0byBiZSByZW5kZXJlZCxcbiAgICAgICAgICogYW5kIGNoZWNraW5nIG9uIGV2ZXJ5IGNoYW5nZSAoQUpBWCByZXF1ZXN0LCB0YWIgY2hhbmdlIGV0Yy4pIHdoZXRoZXIgYW55IG9mIHRob3NlIGhhdmUgYmVjb21lIHZpc2libGUuIEFcbiAgICAgICAgICogd2lkZ2V0cyBzaG91bGQgZXh0ZW5kIGBQcmltZUZhY2VzLndpZGdldC5EZWZlcnJlZFdpZGdldGAgdG8gbWFrZSB1c2Ugb2YgdGhpcyBmdW5jdGlvbmFsaXR5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBJbnZva2VzIGFsbCBkZWZlcnJlZCByZW5kZXJzLiBUaGlzIGlzIHVzdWFsbHkgY2FsbGVkIHdoZW4gYW4gYWN0aW9uIHdhcyBwZXJmb3JtZWQgdGhhdCBfbWF5XyBoYXZlIHJlc3VsdGVkXG4gICAgICAgICAqIGluIGEgY29udGFpbmVyIG5vdyBiZWluZyB2aXNpYmxlLiBUaGlzIGluY2x1ZGVzIGFjdGlvbnMgc3VjaCBhcyBhbiBBSkFYIHJlcXVlc3QgcmVxdWVzdCB3YXMgbWFkZSBvciBhIHRhYlxuICAgICAgICAgKiBjaGFuZ2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb250YWluZXJJZCBJRCBvZiB0aGUgY29udGFpbmVyIHRoYXQgX21heV8gaGF2ZSBiZWNvbWUgdmlzaWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIGludm9rZURlZmVycmVkUmVuZGVyczogZnVuY3Rpb24oY29udGFpbmVySWQpIHtcbiAgICAgICAgICAgIHZhciB3aWRnZXRzVG9SZW1vdmUgPSBbXTtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmRlZmVycmVkUmVuZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZFJlbmRlciA9IHRoaXMuZGVmZXJyZWRSZW5kZXJzW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYoZGVmZXJyZWRSZW5kZXIuY29udGFpbmVyID09PSBjb250YWluZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVuZGVyZWQgPSBkZWZlcnJlZFJlbmRlci5jYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlbmRlcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRzVG9SZW1vdmUucHVzaChkZWZlcnJlZFJlbmRlci53aWRnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgd2lkZ2V0c1RvUmVtb3ZlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVEZWZlcnJlZFJlbmRlcnMod2lkZ2V0c1RvUmVtb3ZlW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaW5kcyB0aGUgY3VycmVudCBsb2NhbGUgd2l0aCB0aGUgaTE4biBrZXlzIGFuZCB0aGUgYXNzb2NpYXRlZCB0cmFuc2xhdGlvbnMuIFVzZXMgdGhlIGN1cnJlbnQgbGFuZ3VhZ2Uga2V5XG4gICAgICAgICAqIGFzIHNwZWNpZmllZCBieSBgUHJpbWVGYWNlcy5zZXR0aW5ncy5sb2NhbGVgLiBXaGVuIG5vIGxvY2FsZSB3YXMgZm91bmQgZm9yIHRoZSBnaXZlbiBsb2NhbGUsIGZhbGxzIGJhY2sgdG9cbiAgICAgICAgICogdGhlIGRlZmF1bHQgRW5nbGlzaCBsb2NhbGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbY2ZnTG9jYWxlXSBvcHRpb25hbCBjb25maWd1cmF0aW9uIGxvY2FsZSBmcm9tIHRoZSB3aWRnZXRcbiAgICAgICAgICogQHJldHVybiB7UHJpbWVGYWNlcy5Mb2NhbGV9IFRoZSBjdXJyZW50IGxvY2FsZSB3aXRoIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXRMb2NhbGVTZXR0aW5nczogZnVuY3Rpb24oY2ZnTG9jYWxlKSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxlO1xuXG4gICAgICAgICAgICBpZihjZmdMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAvLyB3aWRnZXQgbG9jYWxlIG11c3Qgbm90IGJlIGNhY2hlZCBzaW5jZSBpdCBjYW4gY2hhbmdlIHBlciB3aWRnZXRcbiAgICAgICAgICAgICAgICBsb2NhbGUgPSBQcmltZUZhY2VzLmxvY2FsZXNbY2ZnTG9jYWxlXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZ2xvYmFsIHNldHRpbmdzIHNvIHJldHVybiBjYWNoZWQgdmFsdWUgaWYgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgICAgICAgICBpZih0aGlzLmxvY2FsZVNldHRpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZVNldHRpbmdzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2NhbGUgPSBQcmltZUZhY2VzLmxvY2FsZXNbUHJpbWVGYWNlcy5zZXR0aW5ncy5sb2NhbGVdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0cnkgYW5kIHN0cmlwIHNwZWNpZmljIGxhbmd1YWdlIGZyb20gbmxfQkUgdG8ganVzdCBubFxuICAgICAgICAgICAgaWYgKCFsb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbG9jYWxlS2V5ID0gY2ZnTG9jYWxlID8gY2ZnTG9jYWxlIDogUHJpbWVGYWNlcy5zZXR0aW5ncy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgdmFyIHN0cmlwcGVkTG9jYWxlS2V5ID0gbG9jYWxlS2V5ID8gbG9jYWxlS2V5LnNwbGl0KCdfJylbMF0gOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChzdHJpcHBlZExvY2FsZUtleSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGUgPSBQcmltZUZhY2VzLmxvY2FsZXNbc3RyaXBwZWRMb2NhbGVLZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgYWxsIGVsc2UgZmFpbHMgZGVmYXVsdCB0byBVUyBFbmdsaXNoXG4gICAgICAgICAgICBpZighbG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxlID0gUHJpbWVGYWNlcy5sb2NhbGVzWydlbl9VUyddO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjYWNoZSBkZWZhdWx0IGdsb2JhbCBzZXR0aW5nc1xuICAgICAgICAgICAgaWYoIWNmZ0xvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlU2V0dGluZ3MgPSBsb2NhbGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBsb2NhbGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHJpZXZlcyBhIGxvY2FsaXplZCBBUklBIGxhYmVsIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBrZXkuIElmIHRoZSBrZXkgaXMgbm90IGZvdW5kIGluIHRoZSBjdXJyZW50IGxvY2FsZSxcbiAgICAgICAgICogaXQgZmFsbHMgYmFjayB0byB0aGUgVVMgRW5nbGlzaCBsb2NhbGUuIElmIHRoZSBrZXkgaXMgc3RpbGwgbm90IGZvdW5kLCBpdCB1c2VzIGEgZGVmYXVsdCB2YWx1ZSBvciBhIHBsYWNlaG9sZGVyXG4gICAgICAgICAqIGluZGljYXRpbmcgdGhlIG1pc3Npbmcga2V5LiBUaGlzIG1ldGhvZCBhbHNvIHN1cHBvcnRzIGR5bmFtaWMgcmVwbGFjZW1lbnQgb2YgcGxhY2Vob2xkZXJzIHdpdGhpbiB0aGUgbGFiZWxcbiAgICAgICAgICogc3RyaW5nIHVzaW5nIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgdG8gcmV0cmlldmUgdGhlIEFSSUEgbGFiZWwgZm9yLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2RlZmF1bHRWYWx1ZV0gLSBUaGUgZGVmYXVsdCB2YWx1ZSB0byB1c2UgaWYgdGhlIGtleSBpcyBub3QgZm91bmQuXG4gICAgICAgICAqIEBwYXJhbSB7dW5rbm93bn0gW29wdGlvbnNdIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgcGxhY2Vob2xkZXIgcmVwbGFjZW1lbnRzIGluIHRoZSBmb3JtYXQgYHtwbGFjZWhvbGRlcktleTogcmVwbGFjZW1lbnRWYWx1ZX1gLlxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIFRoZSBsb2NhbGl6ZWQgQVJJQSBsYWJlbCwgd2l0aCBwbGFjZWhvbGRlcnMgcmVwbGFjZWQgYnkgdGhlaXIgY29ycmVzcG9uZGluZyB2YWx1ZXMgZnJvbSBgb3B0aW9uc2AgaWYgcHJvdmlkZWQuXG4gICAgICAgICAqL1xuICAgICAgICBnZXRBcmlhTGFiZWw6IGZ1bmN0aW9uKGtleSwgZGVmYXVsdFZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgYXJpYUxvY2FsZVNldHRpbmdzID0gdGhpcy5nZXRMb2NhbGVTZXR0aW5ncygpWydhcmlhJ10gfHwge307XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBhcmlhTG9jYWxlU2V0dGluZ3Nba2V5XSB8fCBQcmltZUZhY2VzLmxvY2FsZXNbJ2VuX1VTJ11bJ2FyaWEnXVtrZXldIHx8IGRlZmF1bHRWYWx1ZSB8fCBcIj8/P1wiICsga2V5ICsgXCI/Pz9cIjtcbiAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB2YWxLZXkgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnJlcGxhY2UoYHske3ZhbEtleX19YCwgb3B0aW9uc1t2YWxLZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbGFiZWwudHJpbSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBdHRlbXB0IHRvIGxvb2sgdXAgdGhlIGxvY2FsZSBrZXkgYnkgY3VycmVudCBsb2NhbGUgYW5kIGZhbGwgYmFjayB0byBVUyBFbmdsaXNoIGlmIG5vdCBmb3VuZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgbG9jYWxlIGtleVxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSB0cmFuc2xhdGlvbiBmb3IgdGhlIGdpdmVuIGtleVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0TG9jYWxlTGFiZWw6IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgdmFyIGxvY2FsZSA9IHRoaXMuZ2V0TG9jYWxlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIHJldHVybiAobG9jYWxlJiZsb2NhbGVba2V5XSkgPyBsb2NhbGVba2V5XSA6IFByaW1lRmFjZXMubG9jYWxlc1snZW5fVVMnXVtrZXldO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIExvb3Agb3ZlciBhbGwgbG9jYWxlcyBhbmQgc2V0IHRoZSBsYWJlbCB0byB0aGUgbmV3IHZhbHVlIGluIGFsbCBsb2NhbGVzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlS2V5IFRoZSBsb2NhbGUga2V5XG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGVWYWx1ZSBUaGUgbG9jYWxlIHZhbHVlXG4gICAgICAgICAqL1xuICAgICAgICBzZXRHbG9iYWxMb2NhbGVWYWx1ZTogZnVuY3Rpb24obG9jYWxlS2V5LCBsb2NhbGVWYWx1ZSkge1xuICAgICAgICAgICAgLy8gUmVjdXJzaXZlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3ZlciBuZXN0ZWQgb2JqZWN0c1xuICAgICAgICAgICAgZnVuY3Rpb24gaXRlcmF0ZUxvY2FsZShsb2NhbGUsIGxrZXksIGx2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBsb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsb2NhbGVba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3QsIGNhbGwgdGhlIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlTG9jYWxlKGxvY2FsZVtrZXldLCBsa2V5LCBsdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBzZXQgdGhlIG5ldyB2YWx1ZSBpZiBmb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gbGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZVtrZXldID0gbHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpdGVyYXRlIG92ZXIgYWxsIGxvY2FsZXMgYW5kIHRyeSBhbmQgc2V0IHRoZSBrZXkgaW4gZWFjaCBsb2NhbGVcbiAgICAgICAgICAgIGZvciAodmFyIGxhbmcgaW4gUHJpbWVGYWNlcy5sb2NhbGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBQcmltZUZhY2VzLmxvY2FsZXNbbGFuZ10gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVMb2NhbGUoUHJpbWVGYWNlcy5sb2NhbGVzW2xhbmddLCBsb2NhbGVLZXksIGxvY2FsZVZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRm9yIDQuMCBqUXVlcnkgZGVwcmVjYXRlZCAkLnRyaW0gaW4gZmF2b3Igb2YgUHJpbWVGYWNlcy50cmltIGhvd2V2ZXIgdGhhdCBkb2VzIG5vdCBoYW5kbGVcbiAgICAgICAgICogTlVMTCBhbmQgalF1ZXJ5IGRpZCBzbyB0aGlzIGZ1bmN0aW9uIGFsbG93cyBhIGRyb3AgaW4gcmVwbGFjZW1lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSB0aGUgU3RyaW5nIHRvIHRyaW1cbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSB0cmltbWVkIHZhbHVlIG9yIFwiXCIgaWYgaXQgd2FzIE5VTExcbiAgICAgICAgICovXG4gICAgICAgIHRyaW06IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmV0dXJuIG9yaWdpbmFsIHZhbHVlIGlmIGl0IHdhcyBub3QgYSBzdHJpbmdcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2VuZXJhdGUgYSBSRkMtNDEyMiBjb21wbGlhbnQgVVVJRCB0byBiZSB1c2VkIGFzIGEgdW5pcXVlIGlkZW50aWZpZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIFVzZXMgY3J5cHRvLnJhbmRvbVVVSUQoKSBpZiBhdmFpbGFibGUsIG90aGVyd2lzZSBmYWxscyBiYWNrIHRvIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBTZWUgaHR0cHM6Ly93d3cuaWV0Zi5vcmcvcmZjL3JmYzQxMjIudHh0XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gQSByYW5kb20gVVVJRC5cbiAgICAgICAgICovXG4gICAgICAgIHV1aWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8ucmFuZG9tVVVJRCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChbMWU3XSArIC0xZTMgKyAtNGUzICsgLThlMyArIC0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCBjID0+XG4gICAgICAgICAgICAgICAgICAgIChjIF4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxKSlbMF0gJiAxNSA+PiBjIC8gNCkudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5jcmVtZW50IGFuZCByZXR1cm4gdGhlIG5leHQgYHotaW5kZXhgIGZvciBDU1MgYXMgYSBzdHJpbmcuXG4gICAgICAgICAqIE5vdGUgdGhhdCBqUXVlcnkgd2lsbCBubyBsb25nZXIgYWNjZXB0IG51bWVyaWMgdmFsdWVzIGluIHtAbGluayBKUXVlcnkuY3NzIHwgJC5mbi5jc3N9IGFzIG9mIHZlcnNpb24gNC4wLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBuZXh0IGB6LWluZGV4YCBhcyBhIHN0cmluZy5cbiAgICAgICAgICovXG4gICAgICAgIG5leHRaaW5kZXg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZygrK1ByaW1lRmFjZXMuemluZGV4KTtcbiAgICAgICAgfSxcblxuICAgICAgIC8qKlxuICAgICAgICAgKiBDb252ZXJ0cyBhIGRhdGUgaW50byBhbiBJU08tODYwMSBkYXRlIHdpdGhvdXQgdXNpbmcgdGhlIGJyb3dzZXIgdGltZXpvbmUgb2Zmc2V0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA4MzAzNTcvamF2YXNjcmlwdC10b2lzb3N0cmluZy1pZ25vcmVzLXRpbWV6b25lLW9mZnNldFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUgdGhlIGRhdGUgdG8gY29udmVydFxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IElTTy04NjAxIHZlcnNpb24gb2YgdGhlIGRhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRvSVNPU3RyaW5nOiBmdW5jdGlvbihkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgLSAoZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKS50b0lTT1N0cmluZygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb252ZXJ0cyB0aGUgcHJvdmlkZWQgc3RyaW5nIHRvIHNlYXJjaGFibGUgZm9ybS5cbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgdG8gbm9ybWFsaXplLlxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvd2VyY2FzZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgc3RyaW5nIHNob3VsZCBiZSBsb3dlciBjYXNlZC5cbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBub3JtYWxpemUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHN0cmluZyBzaG91bGQgYmUgbm9ybWFsaXplZCAoYWNjZW50cyB0byBiZSByZW1vdmVkXG4gICAgICAgICAqIGZyb20gY2hhcmFjdGVycykuXG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHNlYXJjaGFibGUgc3RyaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgdG9TZWFyY2hhYmxlOiBmdW5jdGlvbihzdHJpbmcsIGxvd2VyY2FzZSwgbm9ybWFsaXplKSB7XG4gICAgICAgICAgICBpZiAoIXN0cmluZykgcmV0dXJuICcnO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG5vcm1hbGl6ZSA/IHN0cmluZy5ub3JtYWxpemUoJ05GRCcpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKSA6IHN0cmluZztcbiAgICAgICAgICAgIHJldHVybiBsb3dlcmNhc2UgPyByZXN1bHQudG9Mb3dlckNhc2UoKSA6IHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVzZXQgYW55IHN0YXRlIHZhcmlhYmxlcyBvbiB1cGRhdGU9XCJAYWxsXCIuXG4gICAgICAgICAqL1xuICAgICAgICByZXNldFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIHRlcm1pbmF0ZSBhbGwgQUpBWCByZXF1ZXN0cywgcG9sbGVycywgZXRjXG4gICAgICAgICAgICBQcmltZUZhY2VzLnV0aWxzLmtpbGxzd2l0Y2goKTtcblxuICAgICAgICAgICAgUHJpbWVGYWNlcy56aW5kZXggPSAxMDAwO1xuICAgICAgICAgICAgUHJpbWVGYWNlcy5kZXRhY2hlZFdpZGdldHMgPSBbXTtcbiAgICAgICAgICAgIFByaW1lRmFjZXMuYW5pbWF0aW9uQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBQcmltZUZhY2VzLmN1c3RvbUZvY3VzID0gZmFsc2U7XG4gICAgICAgICAgICBQcmltZUZhY2VzLndpZGdldHMgPSB7fTsgICAgICAgICAgICBcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUXVldWUgYSBtaWNyb3Rhc2sgaWYgZGVsYXkgaXMgMCBvciBsZXNzIGFuZCBzZXRUaW1lb3V0IGlmID4gMC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHsoKSA9PiB2b2lkfSBmbiB0aGUgZnVuY3Rpb24gdG8gY2FsbCBhZnRlciB0aGUgZGVsYXlcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXIgfCB1bmRlZmluZWR9IFtkZWxheV0gdGhlIG9wdGlvbmFsIGRlbGF5IGluIG1pbGxpc2Vjb25kc1xuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXIgfCB1bmRlZmluZWR9IHRoZSBpZCBhc3NvY2lhdGVkIHRvIHRoZSB0aW1lb3V0IG9yIHVuZGVmaW5lZCBpZiBubyB0aW1lb3V0IHVzZWRcbiAgICAgICAgICovXG4gICAgICAgIHF1ZXVlVGFzazogZnVuY3Rpb24oZm4sIGRlbGF5KSB7XG4gICAgICAgICAgICByZXR1cm4gUHJpbWVGYWNlcy51dGlscy5xdWV1ZVRhc2soZm4sIGRlbGF5KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogTG9ncyB0aGUgY3VycmVudCBQcmltZUZhY2VzIGFuZCBqUXVlcnkgdmVyc2lvbiB0byBjb25zb2xlLlxuICAgICAgICAgKi9cbiAgICAgICAgdmVyc2lvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdmVyc2lvbiA9ICdQcmltZUZhY2VzICcgKyBQcmltZUZhY2VzLlZFUlNJT04gKyAnIChqUXVlcnkgJyArIGpRdWVyeS5mbi5qcXVlcnkgKyAnIC8gVUkgJyArICQudWkudmVyc2lvbiArICcpJztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZlcnNpb24pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHRyYWNrZXIgZm9yIHRoZSBjdXJyZW50IHotaW5kZXgsIHVzZWQgZm9yIGV4YW1wbGUgd2hlbiBjcmVhdGluZyBtdWx0aXBsZSBtb2RhbCBkaWFsb2dzLlxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgemluZGV4IDogMTAwMCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2xvYmFsIGZsYWcgZm9yIGVuYWJsaW5nIG9yIGRpc2FibGluZyBib3RoIGpRdWVyeSBhbmQgQ1NTIGFuaW1hdGlvbnMuXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgYW5pbWF0aW9uRW5hYmxlZCA6IHRydWUsXG5cbiAgICAgICAgIC8qKlxuICAgICAgICAgKiBGbGFnIGZvciBkZXRlY3Rpbmcgd2hldGhlciBhbmltYXRpb24gaXMgY3VycmVudGx5IHJ1bm5pbmcuIFNpbWlsYXIgdG8galF1ZXJ5LmFjdGl2ZSBmbGFnIGFuZCBpcyB1c2VmdWxcbiAgICAgICAgICogZm9yIHNjcmlwdHMgb3IgYXV0b21hdGlvbiB0ZXN0cyB0byBkZXRlcm1pbmUgaWYgdGhlIGFuaW1hdGlvbiBpcyBjdXJyZW50bHkgcnVubmluZy5cbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBhbmltYXRpb25BY3RpdmUgOiBmYWxzZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVXNlZCB0byBzdG9yZSB3aGV0aGVyIGEgY3VzdG9tIGZvY3VzIGhhcyBiZWVuIHJlbmRlcmVkLiBUaGlzIGF2b2lkcyBoYXZpbmcgdG8gcmV0YWluIHRoZSBsYXN0IGZvY3VzZWQgZWxlbWVudFxuICAgICAgICAgKiBhZnRlciBBSkFYIHVwZGF0ZS5cbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBjdXN0b21Gb2N1cyA6IGZhbHNlLFxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByaW1lRmFjZXMgcGVyIGRlZmF1bHRzIGhpZGVzIGFsbCBvdmVybGF5cyBvbiBzY3JvbGxpbmcvcmVzaXppbmcgdG8gYXZvaWQgcG9zaXRpb25pbmcgcHJvYmxlbXMuXG4gICAgICAgICAqIFRoaXMgaXMgcmVhbGx5IGhhcmQgdG8gb3ZlcmNvbWUgaW4gc2VsZW5pdW0gdGVzdHMgYW5kIHdlIGNhbiBkaXNhYmxlIHRoaXMgYmVoYXZpb3Igd2l0aCB0aGlzIHNldHRpbmcuXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgaGlkZU92ZXJsYXlzT25WaWV3cG9ydENoYW5nZSA6IHRydWUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgbGlzdCBvZiB3aWRnZXRzIHRoYXQgd2VyZSBvbmNlIGluc3RhbnRpYXRlZCwgYnV0IGFyZSBub3QgcmVtb3ZlZCBmcm9tIHRoZSBET00sIHN1Y2ggYXMgZHVlIHRvIHRoZSByZXN1bHRcbiAgICAgICAgICogb2YgYW4gQUpBWCB1cGRhdGUgcmVxdWVzdC5cbiAgICAgICAgICogQHR5cGUge1ByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXRbXX1cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICBkZXRhY2hlZFdpZGdldHMgOiBbXSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogTmFtZSBvZiB0aGUgUE9TVCBwYXJhbWV0ZXIgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgcmVxdWVzdCBpcyBhbiBBSkFYIHJlcXVlc3QuXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgUEFSVElBTF9SRVFVRVNUX1BBUkFNIDogXCJqYXZheC5mYWNlcy5wYXJ0aWFsLmFqYXhcIixcblxuICAgICAgICAvKipcbiAgICAgICAgICogTmFtZSBvZiB0aGUgUE9TVCBwYXJhbWV0ZXIgdGhhdCBjb250YWlucyB0aGUgbGlzdCBvZiBjb21wb25lbnRzIHRvIGJlIHVwZGF0ZWQuXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgUEFSVElBTF9VUERBVEVfUEFSQU0gOiBcImphdmF4LmZhY2VzLnBhcnRpYWwucmVuZGVyXCIsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWUgb2YgdGhlIFBPU1QgcGFyYW1ldGVyIHRoYXQgY29udGFpbnMgdGhlIGxpc3Qgb2YgY29tcG9uZW50cyB0byBwcm9jZXNzLlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIFBBUlRJQUxfUFJPQ0VTU19QQVJBTSA6IFwiamF2YXguZmFjZXMucGFydGlhbC5leGVjdXRlXCIsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWUgb2YgdGhlIFBPU1QgcGFyYW1ldGVyIHRoYXQgaW5kaWNhdGVzIHdoaWNoIGVsZW1lbnQgb3IgY29tcG9uZW50IHRyaWdnZXJlZCB0aGUgQUpBWCByZXF1ZXN0LlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIFBBUlRJQUxfU09VUkNFX1BBUkFNIDogXCJqYXZheC5mYWNlcy5zb3VyY2VcIixcblxuICAgICAgICAvKipcbiAgICAgICAgICogTmFtZSBvZiB0aGUgUE9TVCBwYXJhbWV0ZXIgdGhhdCBjb250YWlucyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBiZWhhdmlvciBldmVudC5cbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICBCRUhBVklPUl9FVkVOVF9QQVJBTSA6IFwiamF2YXguZmFjZXMuYmVoYXZpb3IuZXZlbnRcIixcblxuICAgICAgICAvKipcbiAgICAgICAgICogTmFtZSBvZiB0aGUgUE9TVCBwYXJhbWV0ZXIgdGhhdCBjb250YWlucyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBwYXJ0aWFsIGJlaGF2aW9yIGV2ZW50LlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIFBBUlRJQUxfRVZFTlRfUEFSQU0gOiBcImphdmF4LmZhY2VzLnBhcnRpYWwuZXZlbnRcIixcblxuICAgICAgICAvKipcbiAgICAgICAgICogTmFtZSBvZiB0aGUgUE9TVCBwYXJhbWV0ZXIgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciBmb3JtcyBzaG91bGQgaGF2ZSB0aGVpciB2YWx1ZXMgcmVzZXQuXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgUkVTRVRfVkFMVUVTX1BBUkFNIDogXCJqYXZheC5mYWNlcy5wYXJ0aWFsLnJlc2V0VmFsdWVzXCIsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWUgb2YgdGhlIFBPU1QgcGFyYW1ldGVyIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgYDxwOmF1dG9VcGRhdGU+YCB0YWdzIHNob3VsZCBiZSBpZ25vcmVkLlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIElHTk9SRV9BVVRPX1VQREFURV9QQVJBTSA6IFwicHJpbWVmYWNlcy5pZ25vcmVhdXRvdXBkYXRlXCIsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWUgb2YgdGhlIFBPU1QgcGFyYW1ldGVyIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW4gc2hvdWxkIGJlIHNraXBwZWQuXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgU0tJUF9DSElMRFJFTl9QQVJBTSA6IFwicHJpbWVmYWNlcy5za2lwY2hpbGRyZW5cIixcblxuICAgICAgICAvKipcbiAgICAgICAgICogTmFtZSBvZiB0aGUgUE9TVCBwYXJhbWV0ZXIgdGhhdCBjb250YWlucyB0aGUgY3VycmVudCB2aWV3IHN0YXRlLlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIFZJRVdfU1RBVEUgOiBcImphdmF4LmZhY2VzLlZpZXdTdGF0ZVwiLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOYW1lIG9mIHRoZSBQT1NUIHBhcmFtZXRlciB3aXRoIHRoZSBjdXJyZW50IGNsaWVudCB3aW5kb3cuXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgQ0xJRU5UX1dJTkRPVyA6IFwiamF2YXguZmFjZXMuQ2xpZW50V2luZG93XCIsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWUgb2YgdGhlIFBPU1QgcGFyYW1ldGVyIHRoYXQgY29udGFpbnMgdGhlIHZpZXcgcm9vdC5cbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICBWSUVXX1JPT1QgOiBcImphdmF4LmZhY2VzLlZpZXdSb290XCIsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWUgb2YgdGhlIFBPU1QgcGFyYW1ldGVyIHdpdGggdGhlIGN1cnJlbnQgY2xpZW50IElEXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgQ0xJRU5UX0lEX0RBVEEgOiBcInByaW1lZmFjZXMuY2xpZW50aWRcIixcblxuICAgICAgICAvKipcbiAgICAgICAgICogTmFtZSBvZiB0aGUgZmFjZXMgcmVzb3VyY2Ugc2VydmxldCwgZWcuIGBqYXZheC5mYWNlcy5yZXNvdXJjZWAuXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgUkVTT1VSQ0VfSURFTlRJRklFUjogJ2phdmF4LmZhY2VzLnJlc291cmNlJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGN1cnJlbnQgdmVyc2lvbiBvZiBQcmltZUZhY2VzLlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIFZFUlNJT046ICcke3Byb2plY3QudmVyc2lvbn0nXG4gICAgfTtcblxuICAgIC8vIFByaW1lRmFjZXMgTmFtZXNwYWNlc1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHdpdGggc29tZSBydW50aW1lIHNldHRpbmdzLCBzdWNoIGFzIHRoZSBjdXJyZW50IGxvY2FsZS5cbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICpcbiAgICAgKiBAcHJvcCB7c3RyaW5nfSBsb2NhbGUgVGhlIGN1cnJlbnQgbG9jYWxlLCBzdWNoIGFzIGBlbmAsYGVuX1VTYCwgb3IgYGphYC5cbiAgICAgKiBAcmVhZG9ubHkgbG9jYWxlXG4gICAgICpcbiAgICAgKiBAcHJvcCB7Ym9vbGVhbn0gdmFsaWRhdGVFbXB0eUZpZWxkcyBgdHJ1ZWAgaWYgZW1wdHkgKGlucHV0IGV0Yy4pIGZpZWxkcyBzaG91bGQgYmUgdmFsaWRhdGVkLCBvciBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICAgKiBAcmVhZG9ubHkgdmFsaWRhdGVFbXB0eUZpZWxkc1xuICAgICAqXG4gICAgICogQHByb3Age2Jvb2xlYW59IGNvbnNpZGVyRW1wdHlTdHJpbmdOdWxsIGB0cnVlYCBpZiB0aGUgZW1wdHkgc3RyaW5nIGFuZCBgbnVsbGAgc2hvdWxkIGJlIHRyZWF0ZWQgdGhlIHNhbWUgd2F5LCBvclxuICAgICAqIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAqIEByZWFkb25seSBjb25zaWRlckVtcHR5U3RyaW5nTnVsbFxuICAgICAqL1xuICAgIFByaW1lRmFjZXMuc2V0dGluZ3MgPSB7fTtcbiAgICBQcmltZUZhY2VzLnV0aWwgPSB7fTtcbiAgICAvKipcbiAgICAgKiBBIHJlZ2lzdHJ5IG9mIGFsbCBpbnN0YW50aWF0ZWQgd2lkZ2V0cyB0aGF0IGFyZSBhdmFpbGFibGUgb24gdGhlIGN1cnJlbnQgcGFnZS5cbiAgICAgKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgUHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldD59XG4gICAgICovXG4gICAgUHJpbWVGYWNlcy53aWRnZXRzID0ge307XG5cbiAgICAvKipcbiAgICAgKiBBIG1hcCB3aXRoIGxhbmd1YWdlIHNwZWNpZmljIHRyYW5zbGF0aW9ucy4gVGhpcyBpcyBhIG1hcCBiZXR3ZWVuIHRoZSBsYW5ndWFnZSBrZXlzIGFuZCBhbm90aGVyIG1hcCB3aXRoIHRoZSBpMThuXG4gICAgICoga2V5cyBtYXBwZWQgdG8gdGhlIHRyYW5zbGF0aW9uLlxuICAgICAqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBQcmltZUZhY2VzLkxvY2FsZT59XG4gICAgICovXG4gICAgUHJpbWVGYWNlcy5sb2NhbGVzID0ge1xuICAgICAgICAnZW5fVVMnOiB7XG4gICAgICAgICAgICBcImFjY2VwdFwiOiBcIlllc1wiLFxuICAgICAgICAgICAgXCJhZGRSdWxlXCI6IFwiQWRkIFJ1bGVcIixcbiAgICAgICAgICAgIFwiYW1cIjogXCJBTVwiLFxuICAgICAgICAgICAgXCJhcHBseVwiOiBcIkFwcGx5XCIsXG4gICAgICAgICAgICBcImNhbmNlbFwiOiBcIkNhbmNlbFwiLFxuICAgICAgICAgICAgXCJjaG9vc2VcIjogXCJDaG9vc2VcIixcbiAgICAgICAgICAgIFwiY2hvb3NlRGF0ZVwiOiBcIkNob29zZSBEYXRlXCIsXG4gICAgICAgICAgICBcImNob29zZU1vbnRoXCI6IFwiQ2hvb3NlIE1vbnRoXCIsXG4gICAgICAgICAgICBcImNob29zZVllYXJcIjogXCJDaG9vc2UgWWVhclwiLFxuICAgICAgICAgICAgXCJjbGVhclwiOiBcIkNsZWFyXCIsXG4gICAgICAgICAgICBcImNvbXBsZXRlZFwiOiBcIkNvbXBsZXRlZFwiLFxuICAgICAgICAgICAgXCJjb250YWluc1wiOiBcIkNvbnRhaW5zXCIsXG4gICAgICAgICAgICBcImN1c3RvbVwiOiBcIkN1c3RvbVwiLFxuICAgICAgICAgICAgXCJkYXRlQWZ0ZXJcIjogXCJEYXRlIGlzIGFmdGVyXCIsXG4gICAgICAgICAgICBcImRhdGVCZWZvcmVcIjogXCJEYXRlIGlzIGJlZm9yZVwiLFxuICAgICAgICAgICAgXCJkYXRlRm9ybWF0XCI6IFwibW0vZGQveXlcIixcbiAgICAgICAgICAgIFwiZGF0ZUlzXCI6IFwiRGF0ZSBpc1wiLFxuICAgICAgICAgICAgXCJkYXRlSXNOb3RcIjogXCJEYXRlIGlzIG5vdFwiLFxuICAgICAgICAgICAgXCJkYXlOYW1lc1wiOiBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXSxcbiAgICAgICAgICAgIFwiZGF5TmFtZXNNaW5cIjogW1wiU3VcIiwgXCJNb1wiLCBcIlR1XCIsIFwiV2VcIiwgXCJUaFwiLCBcIkZyXCIsIFwiU2FcIl0sXG4gICAgICAgICAgICBcImRheU5hbWVzU2hvcnRcIjogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICAgICAgICAgICAgXCJlbXB0eUZpbHRlck1lc3NhZ2VcIjogXCJObyByZXN1bHRzIGZvdW5kXCIsXG4gICAgICAgICAgICBcImVtcHR5TWVzc2FnZVwiOiBcIk5vIGF2YWlsYWJsZSBvcHRpb25zXCIsXG4gICAgICAgICAgICBcImVtcHR5U2VhcmNoTWVzc2FnZVwiOiBcIk5vIHJlc3VsdHMgZm91bmRcIixcbiAgICAgICAgICAgIFwiZW1wdHlTZWxlY3Rpb25NZXNzYWdlXCI6IFwiTm8gc2VsZWN0ZWQgaXRlbVwiLFxuICAgICAgICAgICAgXCJlbmRzV2l0aFwiOiBcIkVuZHMgd2l0aFwiLFxuICAgICAgICAgICAgXCJlcXVhbHNcIjogXCJFcXVhbHNcIixcbiAgICAgICAgICAgIFwiZmlsZVNpemVUeXBlc1wiOiBbXCJCXCIsIFwiS0JcIiwgXCJNQlwiLCBcIkdCXCIsIFwiVEJcIiwgXCJQQlwiLCBcIkVCXCIsIFwiWkJcIiwgXCJZQlwiXSxcbiAgICAgICAgICAgIFwiZmlsdGVyXCI6IFwiRmlsdGVyXCIsXG4gICAgICAgICAgICBcImZpcnN0RGF5T2ZXZWVrXCI6IDAsXG4gICAgICAgICAgICBcImd0XCI6IFwiR3JlYXRlciB0aGFuXCIsXG4gICAgICAgICAgICBcImd0ZVwiOiBcIkdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0b1wiLFxuICAgICAgICAgICAgXCJsdFwiOiBcIkxlc3MgdGhhblwiLFxuICAgICAgICAgICAgXCJsdGVcIjogXCJMZXNzIHRoYW4gb3IgZXF1YWwgdG9cIixcbiAgICAgICAgICAgIFwibWF0Y2hBbGxcIjogXCJNYXRjaCBBbGxcIixcbiAgICAgICAgICAgIFwibWF0Y2hBbnlcIjogXCJNYXRjaCBBbnlcIixcbiAgICAgICAgICAgIFwibWVkaXVtXCI6IFwiTWVkaXVtXCIsXG4gICAgICAgICAgICBcIm1vbnRoTmFtZXNcIjogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG4gICAgICAgICAgICBcIm1vbnRoTmFtZXNTaG9ydFwiOiBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl0sXG4gICAgICAgICAgICBcIm5leHREZWNhZGVcIjogXCJOZXh0IERlY2FkZVwiLFxuICAgICAgICAgICAgXCJuZXh0SG91clwiOiBcIk5leHQgSG91clwiLFxuICAgICAgICAgICAgXCJuZXh0TWludXRlXCI6IFwiTmV4dCBNaW51dGVcIixcbiAgICAgICAgICAgIFwibmV4dE1vbnRoXCI6IFwiTmV4dCBNb250aFwiLFxuICAgICAgICAgICAgXCJuZXh0U2Vjb25kXCI6IFwiTmV4dCBTZWNvbmRcIixcbiAgICAgICAgICAgIFwibmV4dFllYXJcIjogXCJOZXh0IFllYXJcIixcbiAgICAgICAgICAgIFwibm9GaWx0ZXJcIjogXCJObyBGaWx0ZXJcIixcbiAgICAgICAgICAgIFwibm90Q29udGFpbnNcIjogXCJOb3QgY29udGFpbnNcIixcbiAgICAgICAgICAgIFwibm90RXF1YWxzXCI6IFwiTm90IGVxdWFsc1wiLFxuICAgICAgICAgICAgXCJub3dcIjogXCJOb3dcIixcbiAgICAgICAgICAgIFwicGFzc3dvcmRQcm9tcHRcIjogXCJFbnRlciBhIHBhc3N3b3JkXCIsXG4gICAgICAgICAgICBcInBlbmRpbmdcIjogXCJQZW5kaW5nXCIsXG4gICAgICAgICAgICBcInBtXCI6IFwiUE1cIixcbiAgICAgICAgICAgIFwicHJldkRlY2FkZVwiOiBcIlByZXZpb3VzIERlY2FkZVwiLFxuICAgICAgICAgICAgXCJwcmV2SG91clwiOiBcIlByZXZpb3VzIEhvdXJcIixcbiAgICAgICAgICAgIFwicHJldk1pbnV0ZVwiOiBcIlByZXZpb3VzIE1pbnV0ZVwiLFxuICAgICAgICAgICAgXCJwcmV2TW9udGhcIjogXCJQcmV2aW91cyBNb250aFwiLFxuICAgICAgICAgICAgXCJwcmV2U2Vjb25kXCI6IFwiUHJldmlvdXMgU2Vjb25kXCIsXG4gICAgICAgICAgICBcInByZXZZZWFyXCI6IFwiUHJldmlvdXMgWWVhclwiLFxuICAgICAgICAgICAgXCJyZWplY3RcIjogXCJOb1wiLFxuICAgICAgICAgICAgXCJyZW1vdmVSdWxlXCI6IFwiUmVtb3ZlIFJ1bGVcIixcbiAgICAgICAgICAgIFwic2VhcmNoTWVzc2FnZVwiOiBcInswfSByZXN1bHRzIGFyZSBhdmFpbGFibGVcIixcbiAgICAgICAgICAgIFwic2VsZWN0aW9uTWVzc2FnZVwiOiBcInswfSBpdGVtcyBzZWxlY3RlZFwiLFxuICAgICAgICAgICAgXCJzaG93TW9udGhBZnRlclllYXJcIjogZmFsc2UsXG4gICAgICAgICAgICBcInN0YXJ0c1dpdGhcIjogXCJTdGFydHMgd2l0aFwiLFxuICAgICAgICAgICAgXCJzdHJvbmdcIjogXCJTdHJvbmdcIixcbiAgICAgICAgICAgIFwidG9kYXlcIjogXCJUb2RheVwiLFxuICAgICAgICAgICAgXCJ1cGxvYWRcIjogXCJVcGxvYWRcIixcbiAgICAgICAgICAgIFwid2Vha1wiOiBcIldlYWtcIixcbiAgICAgICAgICAgIFwid2Vla0hlYWRlclwiOiBcIldrXCIsXG4gICAgICAgICAgICBcIndlZWtOdW1iZXJUaXRsZVwiOiBcIldcIixcbiAgICAgICAgICAgIFwiaXNSVExcIjogZmFsc2UsXG4gICAgICAgICAgICBcInllYXJTdWZmaXhcIjogXCJcIixcbiAgICAgICAgICAgIFwidGltZU9ubHlUaXRsZVwiOiBcIk9ubHkgVGltZVwiLFxuICAgICAgICAgICAgXCJ0aW1lVGV4dFwiOiBcIlRpbWVcIixcbiAgICAgICAgICAgIFwiaG91clRleHRcIjogXCJIb3VyXCIsXG4gICAgICAgICAgICBcIm1pbnV0ZVRleHRcIjogXCJNaW51dGVcIixcbiAgICAgICAgICAgIFwic2Vjb25kVGV4dFwiOiBcIlNlY29uZFwiLFxuICAgICAgICAgICAgXCJtaWxsaXNlY29uZFRleHRcIjogXCJNaWxsaXNlY29uZFwiLFxuICAgICAgICAgICAgXCJ5ZWFyXCI6IFwiWWVhclwiLFxuICAgICAgICAgICAgXCJtb250aFwiOiBcIk1vbnRoXCIsXG4gICAgICAgICAgICBcIndlZWtcIjogXCJXZWVrXCIsXG4gICAgICAgICAgICBcImRheVwiOiBcIkRheVwiLFxuICAgICAgICAgICAgXCJsaXN0XCI6IFwiQWdlbmRhXCIsXG4gICAgICAgICAgICBcImFsbERheVRleHRcIjogXCJBbGwgRGF5XCIsXG4gICAgICAgICAgICBcIm1vcmVMaW5rVGV4dFwiOiBcIk1vcmUuLi5cIixcbiAgICAgICAgICAgIFwibm9FdmVudHNUZXh0XCI6IFwiTm8gRXZlbnRzXCIsXG4gICAgICAgICAgICBcImFyaWFcIjoge1xuICAgICAgICAgICAgICAgIFwiY2FuY2VsRWRpdFwiOiBcIkNhbmNlbCBFZGl0XCIsXG4gICAgICAgICAgICAgICAgXCJjbG9zZVwiOiBcIkNsb3NlXCIsXG4gICAgICAgICAgICAgICAgXCJjb2xsYXBzZUxhYmVsXCI6IFwiQ29sbGFwc2VcIixcbiAgICAgICAgICAgICAgICBcImNvbGxhcHNlUm93XCI6IFwiUm93IENvbGxhcHNlZFwiLFxuICAgICAgICAgICAgICAgIFwiZWRpdFJvd1wiOiBcIkVkaXQgUm93XCIsXG4gICAgICAgICAgICAgICAgXCJleHBhbmRMYWJlbFwiOiBcIkV4cGFuZFwiLFxuICAgICAgICAgICAgICAgIFwiZXhwYW5kUm93XCI6IFwiUm93IEV4cGFuZGVkXCIsXG4gICAgICAgICAgICAgICAgXCJmYWxzZUxhYmVsXCI6IFwiRmFsc2VcIixcbiAgICAgICAgICAgICAgICBcImZpbHRlckNvbnN0cmFpbnRcIjogXCJGaWx0ZXIgQ29uc3RyYWludFwiLFxuICAgICAgICAgICAgICAgIFwiZmlsdGVyT3BlcmF0b3JcIjogXCJGaWx0ZXIgT3BlcmF0b3JcIixcbiAgICAgICAgICAgICAgICBcImZpcnN0UGFnZUxhYmVsXCI6IFwiRmlyc3QgUGFnZVwiLFxuICAgICAgICAgICAgICAgIFwiZ3JpZFZpZXdcIjogXCJHcmlkIFZpZXdcIixcbiAgICAgICAgICAgICAgICBcImhpZGVGaWx0ZXJNZW51XCI6IFwiSGlkZSBGaWx0ZXIgTWVudVwiLFxuICAgICAgICAgICAgICAgIFwianVtcFRvUGFnZURyb3Bkb3duTGFiZWxcIjogXCJKdW1wIHRvIFBhZ2UgRHJvcGRvd25cIixcbiAgICAgICAgICAgICAgICBcImp1bXBUb1BhZ2VJbnB1dExhYmVsXCI6IFwiSnVtcCB0byBQYWdlIElucHV0XCIsXG4gICAgICAgICAgICAgICAgXCJsYXN0UGFnZUxhYmVsXCI6IFwiTGFzdCBQYWdlXCIsXG4gICAgICAgICAgICAgICAgXCJsaXN0Vmlld1wiOiBcIkxpc3QgVmlld1wiLFxuICAgICAgICAgICAgICAgIFwibW92ZUFsbFRvU291cmNlXCI6IFwiTW92ZSBBbGwgdG8gU291cmNlXCIsXG4gICAgICAgICAgICAgICAgXCJtb3ZlQWxsVG9UYXJnZXRcIjogXCJNb3ZlIEFsbCB0byBUYXJnZXRcIixcbiAgICAgICAgICAgICAgICBcIm1vdmVCb3R0b21cIjogXCJNb3ZlIEJvdHRvbVwiLFxuICAgICAgICAgICAgICAgIFwibW92ZURvd25cIjogXCJNb3ZlIERvd25cIixcbiAgICAgICAgICAgICAgICBcIm1vdmVUb1NvdXJjZVwiOiBcIk1vdmUgdG8gU291cmNlXCIsXG4gICAgICAgICAgICAgICAgXCJtb3ZlVG9UYXJnZXRcIjogXCJNb3ZlIHRvIFRhcmdldFwiLFxuICAgICAgICAgICAgICAgIFwibW92ZVRvcFwiOiBcIk1vdmUgVG9wXCIsXG4gICAgICAgICAgICAgICAgXCJtb3ZlVXBcIjogXCJNb3ZlIFVwXCIsXG4gICAgICAgICAgICAgICAgXCJuYXZpZ2F0aW9uXCI6IFwiTmF2aWdhdGlvblwiLFxuICAgICAgICAgICAgICAgIFwibmV4dFwiOiBcIk5leHRcIixcbiAgICAgICAgICAgICAgICBcIm5leHRQYWdlTGFiZWxcIjogXCJOZXh0IFBhZ2VcIixcbiAgICAgICAgICAgICAgICBcIm51bGxMYWJlbFwiOiBcIk5vdCBTZWxlY3RlZFwiLFxuICAgICAgICAgICAgICAgIFwicGFnZUxhYmVsXCI6IFwiUGFnZSB7cGFnZX1cIixcbiAgICAgICAgICAgICAgICBcIm90cExhYmVsXCI6IFwiUGxlYXNlIGVudGVyIG9uZSB0aW1lIHBhc3N3b3JkIGNoYXJhY3RlciB7MH1cIixcbiAgICAgICAgICAgICAgICBcInBhc3N3b3JkSGlkZVwiOiBcIkhpZGUgUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICBcInBhc3N3b3JkU2hvd1wiOiBcIlNob3cgUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICBcInByZXZpb3VzXCI6IFwiUHJldmlvdXNcIixcbiAgICAgICAgICAgICAgICBcInByZXZpb3VzUGFnZUxhYmVsXCI6IFwiUHJldmlvdXMgUGFnZVwiLFxuICAgICAgICAgICAgICAgIFwicm90YXRlTGVmdFwiOiBcIlJvdGF0ZSBMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJyb3RhdGVSaWdodFwiOiBcIlJvdGF0ZSBSaWdodFwiLFxuICAgICAgICAgICAgICAgIFwicm93c1BlclBhZ2VMYWJlbFwiOiBcIlJvd3MgcGVyIHBhZ2VcIixcbiAgICAgICAgICAgICAgICBcInNhdmVFZGl0XCI6IFwiU2F2ZSBFZGl0XCIsXG4gICAgICAgICAgICAgICAgXCJzY3JvbGxUb3BcIjogXCJTY3JvbGwgVG9wXCIsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3RBbGxcIjogXCJBbGwgaXRlbXMgc2VsZWN0ZWRcIixcbiAgICAgICAgICAgICAgICBcInNlbGVjdExhYmVsXCI6IFwiU2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3RSb3dcIjogXCJSb3cgU2VsZWN0ZWRcIixcbiAgICAgICAgICAgICAgICBcInNob3dGaWx0ZXJNZW51XCI6IFwiU2hvdyBGaWx0ZXIgTWVudVwiLFxuICAgICAgICAgICAgICAgIFwic2xpZGVcIjogXCJTbGlkZVwiLFxuICAgICAgICAgICAgICAgIFwic2xpZGVOdW1iZXJcIjogXCJ7c2xpZGVOdW1iZXJ9XCIsXG4gICAgICAgICAgICAgICAgXCJzdGFyXCI6IFwiMSBzdGFyXCIsXG4gICAgICAgICAgICAgICAgXCJzdGFyc1wiOiBcIntzdGFyfSBzdGFyc1wiLFxuICAgICAgICAgICAgICAgIFwidHJ1ZUxhYmVsXCI6IFwiVHJ1ZVwiLFxuICAgICAgICAgICAgICAgIFwidW5zZWxlY3RBbGxcIjogXCJBbGwgaXRlbXMgdW5zZWxlY3RlZFwiLFxuICAgICAgICAgICAgICAgIFwidW5zZWxlY3RMYWJlbFwiOiBcIlVuc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgXCJ1bnNlbGVjdFJvd1wiOiBcIlJvdyBVbnNlbGVjdGVkXCIsXG4gICAgICAgICAgICAgICAgXCJ6b29tSW1hZ2VcIjogXCJab29tIEltYWdlXCIsXG4gICAgICAgICAgICAgICAgXCJ6b29tSW5cIjogXCJab29tIEluXCIsXG4gICAgICAgICAgICAgICAgXCJ6b29tT3V0XCI6IFwiWm9vbSBPdXRcIixcbiAgICAgICAgICAgICAgICBcImRhdGF0YWJsZS5zb3J0LkFTQ1wiOiBcImFjdGl2YXRlIHRvIHNvcnQgY29sdW1uIGFzY2VuZGluZ1wiLFxuICAgICAgICAgICAgICAgIFwiZGF0YXRhYmxlLnNvcnQuREVTQ1wiOiBcImFjdGl2YXRlIHRvIHNvcnQgY29sdW1uIGRlc2NlbmRpbmdcIixcbiAgICAgICAgICAgICAgICBcImRhdGF0YWJsZS5zb3J0Lk5PTkVcIjogXCJhY3RpdmF0ZSB0byByZW1vdmUgc29ydGluZyBvbiBjb2x1bW5cIixcbiAgICAgICAgICAgICAgICBcImNvbG9ycGlja2VyLk9QRU5cIjogXCJPcGVuIGNvbG9yIHBpY2tlclwiLFxuICAgICAgICAgICAgICAgIFwiY29sb3JwaWNrZXIuQ0xPU0VcIjogXCJDbG9zZSBjb2xvciBwaWNrZXJcIixcbiAgICAgICAgICAgICAgICBcImNvbG9ycGlja2VyLkNMRUFSXCI6IFwiQ2xlYXIgdGhlIHNlbGVjdGVkIGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJjb2xvcnBpY2tlci5NQVJLRVJcIjogXCJTYXR1cmF0aW9uOiB7c30uIEJyaWdodG5lc3M6IHt2fS5cIixcbiAgICAgICAgICAgICAgICBcImNvbG9ycGlja2VyLkhVRVNMSURFUlwiOiBcIkh1ZSBzbGlkZXJcIixcbiAgICAgICAgICAgICAgICBcImNvbG9ycGlja2VyLkFMUEhBU0xJREVSXCI6IFwiT3BhY2l0eSBzbGlkZXJcIixcbiAgICAgICAgICAgICAgICBcImNvbG9ycGlja2VyLklOUFVUXCI6IFwiQ29sb3IgdmFsdWUgZmllbGRcIixcbiAgICAgICAgICAgICAgICBcImNvbG9ycGlja2VyLkZPUk1BVFwiOiBcIkNvbG9yIGZvcm1hdFwiLFxuICAgICAgICAgICAgICAgIFwiY29sb3JwaWNrZXIuU1dBVENIXCI6IFwiQ29sb3Igc3dhdGNoXCIsXG4gICAgICAgICAgICAgICAgXCJjb2xvcnBpY2tlci5JTlNUUlVDVElPTlwiOiBcIlNhdHVyYXRpb24gYW5kIGJyaWdodG5lc3Mgc2VsZWN0b3IuIFVzZSB1cCwgZG93biwgbGVmdCBhbmQgcmlnaHQgYXJyb3cga2V5cyB0byBzZWxlY3QuXCIsXG4gICAgICAgICAgICAgICAgXCJzcGlubmVyLklOQ1JFQVNFXCI6IFwiSW5jcmVhc2UgVmFsdWVcIixcbiAgICAgICAgICAgICAgICBcInNwaW5uZXIuREVDUkVBU0VcIjogXCJEZWNyZWFzZSBWYWx1ZVwiLFxuICAgICAgICAgICAgICAgIFwic3dpdGNoLk9OXCI6IFwiT25cIixcbiAgICAgICAgICAgICAgICBcInN3aXRjaC5PRkZcIjogXCJPZmZcIixcbiAgICAgICAgICAgICAgICBcIm1lc3NhZ2VzLkVSUk9SXCI6IFwiRXJyb3JcIixcbiAgICAgICAgICAgICAgICBcIm1lc3NhZ2VzLkZBVEFMXCI6IFwiRmF0YWxcIixcbiAgICAgICAgICAgICAgICBcIm1lc3NhZ2VzLklORk9cIjogXCJJbmZvcm1hdGlvblwiLFxuICAgICAgICAgICAgICAgIFwibWVzc2FnZXMuV0FSTlwiOiBcIldhcm5pbmdcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFByaW1lRmFjZXMubG9jYWxlc1snZW4nXSA9IFByaW1lRmFjZXMubG9jYWxlc1snZW5fVVMnXTtcblxuICAgIC8qKlxuICAgICAqIEEgbWFwIGJldHdlZW4gc29tZSBIVE1MIGVudGl0aWVzIGFuZCB0aGVpciBIVE1MLWVzY2FwZWQgZXF1aXZhbGVudC5cbiAgICAgKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgc3RyaW5nPn1cbiAgICAgKi9cbiAgICBQcmltZUZhY2VzLmVudGl0eU1hcCA9IHtcbiAgICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICAgJz4nOiAnJmd0OycsXG4gICAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgICBcIidcIjogJyYjMzk7JyxcbiAgICAgICAgJy8nOiAnJiN4MkY7JyxcbiAgICAgICAgJ2AnOiAnJiN4NjA7JyxcbiAgICAgICAgJz0nOiAnJiN4M0Q7J1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBhbmQgcmV0dXJucyBhIHdpZGdldFxuICAgICAqXG4gICAgICogTm90ZSB0byB0eXBlc2NyaXB0IHVzZXJzOiBZb3Ugc2hvdWxkIGRlZmluZSBhIG1ldGhvZCB0aGF0IHRha2VzIGEgd2lkZ2V0IHZhcmlhYmxlcyBhbmQgd2lkZ2V0IGNvbnN0cnVjdG9yLCBhbmRcbiAgICAgKiBjaGVjayB3aGV0aGVyIHRoZSB3aWRnZXQgaXMgb2YgdGhlIGdpdmVuIHR5cGUuIElmIHNvLCB5b3UgY2FuIHJldHVybiB0aGUgd2lkZ2V0IGFuZCBjYXN0IGl0IHRvIHRoZSBkZXNpcmVkIHR5cGU6XG4gICAgICogYGBgdHlwZXNjcmlwdFxuICAgICAqIGltcG9ydCB7IEJhc2VXaWRnZXQgfSBmcm9tIFwiQHByaW1lZmFjZXMvcHJpbWVmYWNlc1wiO1xuICAgICAqIGZ1bmN0aW9uIGdldFdpZGdldDxUIGV4dGVuZHMgQmFzZVdpZGdldD4od2lkZ2V0VmFyLCB3aWRnZXRDbGFzczogbmV3KCkgPT4gVCk6IFQgfCB1bmRlZmluZWQge1xuICAgICAqICAgY29uc3Qgd2lkZ2V0ID0gUHJpbWVGYWNlcy53aWRnZXRbd2lkZ2V0VmFyXTtcbiAgICAgKiAgIHJldHVybiB3aWRnZXQgIT09IHVuZGVmaW5lZCAmJiB3aWRnZXQgaW5zdGFuY2VvZiBjb25zdHJ1Y3RvciA/IHdpZGdldENsYXNzIDogdW5kZWZpbmVkO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gd2lkZ2V0VmFyIFRoZSB3aWRnZXQgdmFyaWFibGUgb2YgYSB3aWRnZXQuXG4gICAgICogQHJldHVybiB7UHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldCB8IHVuZGVmaW5lZH0gVGhlIHdpZGdldCBpbnN0YW5jZSwgb3IgYHVuZGVmaW5lZGAgaWYgbm8gc3VjaCB3aWRnZXQgZXhpc3RzXG4gICAgICogY3VycmVudGx5LlxuICAgICAqL1xuICAgIFBGID0gZnVuY3Rpb24od2lkZ2V0VmFyKSB7XG4gICAgXHR2YXIgd2lkZ2V0SW5zdGFuY2UgPSBQcmltZUZhY2VzLndpZGdldHNbd2lkZ2V0VmFyXTtcblxuICAgIFx0aWYgKCF3aWRnZXRJbnN0YW5jZSkge1xuXHQgICAgICAgIFByaW1lRmFjZXMud2lkZ2V0Tm90QXZhaWxhYmxlKHdpZGdldFZhcik7XG4gICAgXHR9XG5cbiAgICAgICAgcmV0dXJuIHdpZGdldEluc3RhbmNlO1xuICAgIH07XG5cbiAgICAvL2V4cG9zZSBnbG9iYWxseVxuICAgIHdpbmRvdy5QcmltZUZhY2VzID0gUHJpbWVGYWNlcztcblxufSkod2luZG93KTtcbiIsICJpbXBvcnQgalFCcm93c2VyIGZyb20gXCJqcXVlcnkuYnJvd3NlclwiO1xuXG5pZiAoIVByaW1lRmFjZXMuZW52KSB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb2JqZWN0IHdpdGggZnVuY3Rpb25hbGl0eSByZWxhdGVkIHRvIHRoZSBicm93c2VyIGVudmlyb25tZW50LCBzdWNoIGFzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IGJyb3dzZXIuXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqL1xuICAgIFByaW1lRmFjZXMuZW52ID0ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgdHJ1ZWAgaWYgdGhlIGN1cnJlbnQgYnJvd3NlciBpcyBhIG1vYmlsZSBicm93c2VyLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBtb2JpbGUgOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGB0cnVlYCBpZiB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHRvdWNoLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0b3VjaCA6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogYHRydWVgIGlmIHRoZSBjdXJyZW50IGJyb3dzZXIgaXMgYW4gSU9TIGJyb3dzZXIsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGlvczogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgdHJ1ZWAgaWYgdGhlIGN1cnJlbnQgYnJvd3NlciBpcyBhbiBBbmRyb2lkIGJyb3dzZXIsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGFuZHJvaWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGN1cnJlbnQgYnJvd3NlciB0eXBlLlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgYnJvd3NlciA6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgdHJ1ZWAgaWYgdGhlIHVzZXIncyBjdXJyZW50IE9TIHNldHRpbmcgcHJlZmVycyBkYXJrIG1vZGUsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHByZWZlcnJlZENvbG9yU2NoZW1lRGFyayA6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogYHRydWVgIGlmIHRoZSB1c2VyJ3MgY3VycmVudCBPUyBzZXR0aW5nIHByZWZlcnMgbGlnaHQgbW9kZSwgYGZhbHNlYCBvdGhlcndpc2UuXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgcHJlZmVycmVkQ29sb3JTY2hlbWVMaWdodCA6IGZhbHNlLFxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGB0cnVlYCBpZiB0aGUgdXNlcidzIGN1cnJlbnQgT1Mgc2V0dGluZyBwcmVmZXJzIHJlZHVjZWQgbW90aW9uIG9yIGFuaW1hdGlvbnMsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHByZWZlcnNSZWR1Y2VkTW90aW9uIDogZmFsc2UsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWxpemVzIHRoZSBlbnZpcm9ubWVudCBieSByZWFkaW5nIHRoZSBicm93c2VyIGVudmlyb25tZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgaW5pdCA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5icm93c2VyID0galFCcm93c2VyO1xuICAgICAgICAgICAgdGhpcy5tb2JpbGUgPSB0aGlzLmJyb3dzZXIubW9iaWxlO1xuICAgICAgICAgICAgdGhpcy50b3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCB3aW5kb3cubmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgfHwgUHJpbWVGYWNlcy5lbnYubW9iaWxlO1xuICAgICAgICAgICAgdGhpcy5pb3MgPSAvaVBob25lfGlQYWR8aVBvZC9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICgvbWFjL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgUHJpbWVGYWNlcy5lbnYudG91Y2gpO1xuICAgICAgICAgICAgdGhpcy5hbmRyb2lkID0gLyhhbmRyb2lkKS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgICAgICAgdGhpcy5wcmVmZXJyZWRDb2xvclNjaGVtZURhcmsgPSBQcmltZUZhY2VzLmVudi5ldmFsdWF0ZU1lZGlhUXVlcnkoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKTtcbiAgICAgICAgICAgIHRoaXMucHJlZmVycmVkQ29sb3JTY2hlbWVMaWdodCA9ICF0aGlzLnByZWZlcnJlZENvbG9yU2NoZW1lRGFyaztcbiAgICAgICAgICAgIHRoaXMucHJlZmVyc1JlZHVjZWRNb3Rpb24gPSAgUHJpbWVGYWNlcy5lbnYuZXZhbHVhdGVNZWRpYVF1ZXJ5KCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpO1xuICAgICAgICB9LFxuXG4gICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIGN1cnJlbnRseSBsb2FkZWQgUHJpbWVGYWNlcyB0aGVtZS5cbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgY3VycmVudCB0aGVtZSwgc3VjaCBhcyBgb21lZ2FgIG9yIGBsdW5hLWFtYmVyYC4gRW1wdHkgc3RyaW5nIHdoZW4gbm8gdGhlbWUgaXMgbG9hZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0VGhlbWUgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0aGVtZUxpbmsgPSBQcmltZUZhY2VzLmdldFRoZW1lTGluaygpO1xuICAgICAgICAgICAgaWYgKHRoZW1lTGluay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHRoZW1lVVJMID0gdGhlbWVMaW5rLmF0dHIoJ2hyZWYnKSxcbiAgICAgICAgICAgICAgICBwbGFpblVSTCA9IHRoZW1lVVJMLnNwbGl0KCcmJylbMF0sXG4gICAgICAgICAgICAgICAgb2xkVGhlbWUgPSBwbGFpblVSTC5zcGxpdCgnbG49cHJpbWVmYWNlcy0nKVsxXTtcblxuICAgICAgICAgICAgcmV0dXJuIG9sZFRoZW1lO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHdpZGdldCBpcyB0b3VjaCBlbmFibGVkIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIHRvdWNoIEFORCB0aGUgd2lkZ2V0IGhhcyB0aGUgdG91Y2hhYmxlIHByb3BlcnR5IGVuYWJsZWQuXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IHdpbGwgYmUgdHJ1ZSBpZiBpdCB3aWRnZXQgc3RhdHVzIGNhbid0IGJlIGRldGVybWluZWQuXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXRDZmd9IGNmZyB0aGUgd2lkZ2V0IGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0b3VjaCBpcyBlbmFibGVkLCBmYWxzZSBpZiBkaXNhYmxlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXNUb3VjaGFibGU6IGZ1bmN0aW9uKGNmZykge1xuICAgICAgICAgICAgdmFyIHdpZGdldFRvdWNoYWJsZSA9IChjZmcgPT0gdW5kZWZpbmVkKSB8fCAoY2ZnLnRvdWNoYWJsZSAhPSB1bmRlZmluZWQgPyBjZmcudG91Y2hhYmxlIDogdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gUHJpbWVGYWNlcy5lbnYudG91Y2ggJiYgd2lkZ2V0VG91Y2hhYmxlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSB1c2VyJ3MgcHJlZmVycmVkIGNvbG9yIHNjaGVtZSBzZXQgaW4gdGhlaXIgb3BlcmF0aW5nIHN5c3RlbS5cbiAgICAgICAgICogXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gZWl0aGVyICdkYXJrJyBvciAnbGlnaHQnXG4gICAgICAgICAqL1xuICAgICAgICBnZXRPU1ByZWZlcnJlZENvbG9yU2NoZW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBQcmltZUZhY2VzLmVudi5wcmVmZXJyZWRDb2xvclNjaGVtZUxpZ2h0ID8gJ2xpZ2h0JyA6ICdkYXJrJztcbiAgICAgICAgfSxcblxuICAgICAgIC8qKlxuICAgICAgICAgKiBCYXNlZCBvbiB0aGUgY3VycmVudCBQcmltZUZhY2VzIHRoZW1lIGRldGVybWluZSBpZiBsaWdodCBvciBkYXJrIGNvbnRyYXN0IGlzIGJlaW5nIGFwcGxpZWQuXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IGVpdGhlciAnZGFyaycgb3IgJ2xpZ2h0J1xuICAgICAgICAgKi9cbiAgICAgICAgZ2V0VGhlbWVDb250cmFzdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdGhlbWUgPSBQcmltZUZhY2VzLmVudi5nZXRUaGVtZSgpO1xuICAgICAgICAgICAgdmFyIGRhcmtSZWdleCA9IC8oXihhcnlhfHZlbGF8ListKGRpbXxkYXJrKSkkKS9nbTtcbiAgICAgICAgICAgIHJldHVybiBkYXJrUmVnZXgudGVzdCh0aGVtZSkgPyAnZGFyaycgOiAnbGlnaHQnO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2YWx1YXRlIGEgbWVkaWEgcXVlcnkgYW5kIHJldHVybiB0cnVlL2ZhbHNlIGlmIGl0cyBhIG1hdGNoLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVkaWFxdWVyeSB0aGUgbWVkaWEgcXVlcnkgdG8gZXZhbHVhdGVcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBpdCBtYXRjaGVzIHRoZSBxdWVyeSBmYWxzZSBpZiBub3RcbiAgICAgICAgICovXG4gICAgICAgIGV2YWx1YXRlTWVkaWFRdWVyeTogZnVuY3Rpb24obWVkaWFxdWVyeSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKG1lZGlhcXVlcnkpLm1hdGNoZXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1lZGlhIHF1ZXJ5IHRvIGRldGVybWluZSBpZiBzY3JlZW4gc2l6ZSBpcyBiZWxvdyBwaXhlbCBjb3VudC5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHBpeGVscyB0aGUgbnVtYmVyIG9mIHBpeGVscyB0byBjaGVja1xuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHNjcmVlbiBpcyBsZXNzIHRoYW4gbnVtYmVyIG9mIHBpeGVsc1xuICAgICAgICAgKi9cbiAgICAgICAgaXNTY3JlZW5TaXplTGVzc1RoYW46IGZ1bmN0aW9uKHBpeGVscykge1xuICAgICAgICAgICAgcmV0dXJuIFByaW1lRmFjZXMuZW52LmV2YWx1YXRlTWVkaWFRdWVyeSgnKG1heC13aWR0aDogJyArIHBpeGVscyArICdweCknKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWVkaWEgcXVlcnkgdG8gZGV0ZXJtaW5lIGlmIHNjcmVlbiBzaXplIGlzIGFib3ZlIHBpeGVsIGNvdW50LlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gcGl4ZWxzIHRoZSBudW1iZXIgb2YgcGl4ZWxzIHRvIGNoZWNrXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgc2NyZWVuIGlzIGdyZWF0ZXIgdGhhbiBudW1iZXIgb2YgcGl4ZWxzXG4gICAgICAgICAqL1xuICAgICAgICBpc1NjcmVlblNpemVHcmVhdGVyVGhhbjogZnVuY3Rpb24ocGl4ZWxzKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJpbWVGYWNlcy5lbnYuZXZhbHVhdGVNZWRpYVF1ZXJ5KCcobWluLXdpZHRoOiAnICsgcGl4ZWxzICsgJ3B4KScpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFByaW1lRmFjZXMuZW52LmluaXQoKTtcblxufVxuIiwgImlmICghUHJpbWVGYWNlcy5hamF4KSB7XG5cbiAgICAvKipcbiAgICAgKiBBIHNob3J0Y3V0IGZvciBgUHJpbWVGYWNlcy5hamF4LlJlcXVlc3QuaGFuZGxlKGNmZywgZXh0KWAsIHdpdGggc2hvcnRlciBvcHRpb24gbmFtZXMuIFNlbmRzIGFuIEFKQVggcmVxdWVzdCB0b1xuICAgICAqIHRoZSBzZXJ2ZXIgYW5kIHByb2Nlc3NlcyB0aGUgcmVzcG9uc2UuIFlvdSBjYW4gdXNlIHRoaXMgbWV0aG9kIGlmIHlvdSBuZWVkIG1vcmUgZmluZS1ncmFpbmVkIGNvbnRyb2wgb3ZlciB3aGljaFxuICAgICAqIGNvbXBvbmVudHMgeW91IHdhbnQgdG8gdXBkYXRlIG9yIHByb2Nlc3MsIG9yIGlmIHlvdSBuZWVkIHRvIGNoYW5nZSBzb21lIG90aGVyIEFKQVggb3B0aW9ucy5cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge1BhcnRpYWw8UHJpbWVGYWNlcy5hamF4LlNob3J0aGFuZENvbmZpZ3VyYXRpb24+fSBjZmcgQ29uZmlndXJhdGlvbiBmb3IgdGhlIEFKQVggcmVxdWVzdCwgd2l0aCBzaG9ydGhhbmRcbiAgICAgKiBvcHRpb25zLiBUaGUgaW5kaXZpZHVhbCBvcHRpb25zIGFyZSBkb2N1bWVudGVkIGluIGBQcmltZUZhY2VzLmFqYXguQ29uZmlndXJhdGlvbmAuXG4gICAgICogQHBhcmFtIHtQYXJ0aWFsPFByaW1lRmFjZXMuYWpheC5Db25maWd1cmF0aW9uRXh0ZW5kZXI+fSBbZXh0XSBPcHRpb25hbCBleHRlbmRlciB3aXRoIGFkZGl0aW9uYWwgb3B0aW9ucyB0aGF0XG4gICAgICogb3ZlcndyaXRlIHRoZSBvcHRpb25zIGdpdmVuIGluIGBjZmdgLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UHJpbWVGYWNlcy5hamF4LlJlc3BvbnNlRGF0YT59IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uY2UgdGhlIEFKQVggcmVxdWVzdHMgaXMgZG9uZS4gVXNlIHRoaXNcbiAgICAgKiB0byBydW4gY3VzdG9tIEphdmFTY3JpcHQgbG9naWMuIFdoZW4gdGhlIEFKQVggcmVxdWVzdCBzdWNjZWVkcywgdGhlIHByb21pc2UgaXMgZnVsZmlsbGVkLiBPdGhlcndpc2UsIHdoZW4gdGhlXG4gICAgICogQUpBWCByZXF1ZXN0IGZhaWxzLCB0aGUgcHJvbWlzZSBpcyByZWplY3RlZC4gSWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQsIHRoZSByZWplY3Rpb24gaGFuZGxlciByZWNlaXZlcyBhbiBvYmplY3RcbiAgICAgKiBvZiB0eXBlIHtAbGluayBQcmltZUZhY2VzLmFqYXguRmFpbGVkUmVxdWVzdERhdGF9LlxuICAgICAqL1xuICAgIFByaW1lRmFjZXMuYWIgPSBmdW5jdGlvbihjZmcsIGV4dCkge1xuICAgICAgICBmb3IgKHZhciBvcHRpb24gaW4gY2ZnKSB7XG4gICAgICAgICAgICBpZiAoIWNmZy5oYXNPd25Qcm9wZXJ0eShvcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGp1c3QgcGFzcyB0aG91Z2ggaWYgbm8gbWFwcGluZyBpcyBhdmFpbGFibGVcbiAgICAgICAgICAgIGlmIChQcmltZUZhY2VzLmFqYXguQ0ZHX1NIT1JUQ1VUU1tvcHRpb25dKSB7XG4gICAgICAgICAgICAgICAgY2ZnW1ByaW1lRmFjZXMuYWpheC5DRkdfU0hPUlRDVVRTW29wdGlvbl1dID0gY2ZnW29wdGlvbl07XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNmZ1tvcHRpb25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByaW1lRmFjZXMuYWpheC5SZXF1ZXN0LmhhbmRsZShjZmcsIGV4dCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvYmplY3Qgd2l0aCBmdW5jdGlvbmFsaXR5IHJlbGF0ZWQgdG8gc2VuZGluZyBhbmQgcmVjZWl2aW5nIEFKQVggcmVxdWVzdHMgdGhhdCBhcmUgbWFkZSBieSBQcmltZUZhY2VzLiBFYWNoXG4gICAgICogcmVxdWVzdCByZWNlaXZlcyBhbiBYTUwgcmVzcG9uc2UsIHdoaWNoIGNvbnNpc3RzIG9mIG9uZSBvciBtdWx0aXBsZSBhY3Rpb25zIHRoYXQgYXJlIHRvIGJlIHBlcmZvcm1lZC4gVGhpc1xuICAgICAqIGluY2x1ZGVzIGNyZWF0aW5nIG5ldyBET00gZWxlbWVudHMsIGRlbGV0aW5nIG9yIHVwZGF0aW5nIGV4aXN0aW5nIGVsZW1lbnRzLCBvciBleGVjdXRpbmcgc29tZSBKYXZhU2NyaXB0LlxuICAgICAqXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqL1xuICAgIFByaW1lRmFjZXMuYWpheCA9IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTmFtZSBmb3IgdGhlIElEIG9mIHRoZSBIRUFEIGVsZW1lbnQsIHVzZWQgaW4gQUpBWCByZXF1ZXN0cy5cbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICBWSUVXX0hFQUQgOiBcImphdmF4LmZhY2VzLlZpZXdIZWFkXCIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOYW1lIGZvciB0aGUgSUQgb2YgdGhlIEJPRFkgZWxlbWVudCwgdXNlZCBpbiBBSkFYIHJlcXVlc3RzLlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIFZJRVdfQk9EWSA6IFwiamF2YXguZmFjZXMuVmlld0JvZHlcIixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWUgZm9yIHRoZSBJRCBvZiBhIHJlc291cmNlIGVudHJ5LCB1c2VkIGluIEFKQVggcmVxdWVzdHMuXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgUkVTT1VSQ0UgOiBcImphdmF4LmZhY2VzLlJlc291cmNlXCIsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhcmFtZXRlciBzaG9ydGN1dCBtYXBwaW5nIGZvciB0aGUgbWV0aG9kIGBQcmltZUZhY2VzLmFiYC5cbiAgICAgICAgICogQHR5cGUge1JlY29yZDxzdHJpbmcsIHN0cmluZz59XG4gICAgICAgICAqL1xuICAgICAgICBDRkdfU0hPUlRDVVRTIDoge1xuICAgICAgICAgICAgJ3MnOiAnc291cmNlJyxcbiAgICAgICAgICAgICdmJzogJ2Zvcm1JZCcsXG4gICAgICAgICAgICAncCc6ICdwcm9jZXNzJyxcbiAgICAgICAgICAgICd1JzogJ3VwZGF0ZScsXG4gICAgICAgICAgICAnZSc6ICdldmVudCcsXG4gICAgICAgICAgICAnYSc6ICdhc3luYycsXG4gICAgICAgICAgICAnZyc6ICdnbG9iYWwnLFxuICAgICAgICAgICAgJ2QnOiAnZGVsYXknLFxuICAgICAgICAgICAgJ3QnOiAndGltZW91dCcsXG4gICAgICAgICAgICAnc2MnOiAnc2tpcENoaWxkcmVuJyxcbiAgICAgICAgICAgICdpYXUnOiAnaWdub3JlQXV0b1VwZGF0ZScsXG4gICAgICAgICAgICAncHMnOiAncGFydGlhbFN1Ym1pdCcsXG4gICAgICAgICAgICAncHNmJzogJ3BhcnRpYWxTdWJtaXRGaWx0ZXInLFxuICAgICAgICAgICAgJ3J2JzogJ3Jlc2V0VmFsdWVzJyxcbiAgICAgICAgICAgICdmcCc6ICdmcmFnbWVudFByb2Nlc3MnLFxuICAgICAgICAgICAgJ2Z1JzogJ2ZyYWdtZW50VXBkYXRlJyxcbiAgICAgICAgICAgICdwYSc6ICdwYXJhbXMnLFxuICAgICAgICAgICAgJ29uc3QnOiAnb25zdGFydCcsXG4gICAgICAgICAgICAnb25lcic6ICdvbmVycm9yJyxcbiAgICAgICAgICAgICdvbnN1JzogJ29uc3VjY2VzcycsXG4gICAgICAgICAgICAnb25jbyc6ICdvbmNvbXBsZXRlJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNaW5pbXVtIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gc2hvdyBpbmxpbmUgQWpheCBsb2FkIGFuaW1hdGlvbnMuXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBtaW5Mb2FkQW5pbWF0aW9uIDogNTAwLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIG9iamVjdCBjb250YWlucyB1dGlsaXR5IG1ldGhvZHMgZm9yIEFKQVggcmVxdWVzdHMsIHByaW1hcmlseSB1c2VkIGludGVybmFsbHkuXG4gICAgICAgICAqIEBpbnRlcmZhY2Uge1ByaW1lRmFjZXMuYWpheC5VdGlsc30gLiBUaGUgY2xhc3MgZm9yIHRoZSBvYmplY3Qgd2l0aCB0aGUgQUpBWCB1dGlsaXR5IG1ldGhvZHMsIHVzZWQgZm9yXG4gICAgICAgICAqIGhhbmRsaW5nIGFuZCB3b3JraW5nIHdpdGggQUpBWCByZXF1ZXN0cyBhbmQgdXBkYXRlcy5cbiAgICAgICAgICogQHR5cGUge1ByaW1lRmFjZXMuYWpheC5VdGlsc31cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICBVdGlsczoge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJdGVyYXRlcyBvdmVyIGFsbCBpbW1lZGlhdGUgY2hpbGRyZW4gb2YgdGhlIGdpdmVuIG5vZGUgYW5kIHJldHVybnMgdGhlIGNvbmNhdGVuYXRlZCBjb250ZW50IChgbm9kZSB2YWx1ZWApXG4gICAgICAgICAgICAgKiBvZiBlYWNoIHN1Y2ggY2hpbGQgbm9kZS4gRm9yIHRoZSBkb2N1bWVudCBpdHNlbGYsIHRoZSBub2RlIHZhbHVlIGlzIGBudWxsYC5cbiAgICAgICAgICAgICAqIEZvciB0ZXh0LCBjb21tZW50LCBhbmQgQ0RBVEEgbm9kZXMsIHRoZSBgbm9kZSB2YWx1ZWAgaXMgdGhlICh0ZXh0KSBjb250ZW50IG9mIHRoZSBub2RlLlxuICAgICAgICAgICAgICogRm9yIGF0dHJpYnV0ZSBub2RlcywgdGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgaXMgdXNlZC5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGUgQW4gSFRNTCBub2RlIGZvciB3aGljaCB0byByZXRyaWV2ZSB0aGUgY29udGVudC5cbiAgICAgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGNvbnRlbnQgb2YgYWxsIGltbWVkaWF0ZSBjaGlsZCBub2RlcywgY29uY2F0ZW5hdGVkIHRvZ2V0aGVyLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRDb250ZW50OiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSAnJztcblxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCArPSBub2RlLmNoaWxkTm9kZXNbaV0ubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXNvbHZlcyB0aGUgVVJMIHdoaWNoIHNob3VsZCBiZSB1c2VkIGZvciB0aGUgUE9TVCByZXF1ZXN0LlxuICAgICAgICAgICAgICogRm9yIHBvcnRsZXRzLCBhIGRpZmZlcmVudCBVUkwgaXMgdXNlZC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0pRdWVyeX0gZm9ybSBUaGUgY2xvc2VzdCBmb3JtIG9mIHRoZSByZXF1ZXN0IHNvdXJjZS5cbiAgICAgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIFBPU1QgdXJsLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRQb3N0VXJsOiBmdW5jdGlvbihmb3JtKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvc3RVUkwgPSBmb3JtLmF0dHIoJ2FjdGlvbicpO1xuICAgICAgICAgICAgICAgIHZhciBlbmNvZGVkVVJMSW5wdXQgPSBmb3JtLmNoaWxkcmVuKFwiaW5wdXRbbmFtZSo9J2phdmF4LmZhY2VzLmVuY29kZWRVUkwnXVwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChlbmNvZGVkVVJMSW5wdXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBwb3N0VVJMID0gZW5jb2RlZFVSTElucHV0LnZhbCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwb3N0VVJMO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHZXRzIGEgc2VsZWN0b3IgdG8gcmVzb2x2ZSBhbGwgZm9ybXMgd2hpY2ggbmVlZHMgdG8gYmUgdXBkYXRlZCB3aXRoIGEgbmV3IFZpZXdTdGF0ZS5cbiAgICAgICAgICAgICAqIFRoaXMgaXMgcmVxdWlyZWQgaW4gcG9ydGxldHMgYXMgdGhlIERPTSBjb250YWlucyBmb3JtcyBvZiBtdWx0aXBsZSBKU0Ygdmlld3MgLyBhcHBsaWNhdGlvbnMuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IGZvcm0gVGhlIGNsb3Nlc3QgZm9ybSBvZiB0aGUgcmVxdWVzdCBzb3VyY2UuXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1ldGVyUHJlZml4IFRoZSBwb3J0bGV0IHBhcmFtZXRlciBwcmVmaXguXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmcgfCBudWxsfSBUaGUgc2VsZWN0b3IgZm9yIHRoZSBmb3Jtcywgb3IgYG51bGxgIHdoZW4gbm8gZm9ybXMgbmVlZCB0byBiZSB1cGRhdGVkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRQb3JsZXRGb3JtczogZnVuY3Rpb24oZm9ybSwgcGFyYW1ldGVyUHJlZml4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGVuY29kZWRVUkxJbnB1dCA9IGZvcm0uY2hpbGRyZW4oXCJpbnB1dFtuYW1lKj0namF2YXguZmFjZXMuZW5jb2RlZFVSTCddXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVuY29kZWRVUkxJbnB1dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZm9ybVtpZCo9XCInICsgcGFyYW1ldGVyUHJlZml4ICsgJ1wiXSc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEdldCBzb3VyY2UgSUQgZnJvbSBzZXR0aW5ncy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0pRdWVyeS5BamF4U2V0dGluZ3N9IHNldHRpbmdzIGNvbnRhaW5pbmcgc291cmNlIElELlxuICAgICAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgc291cmNlIElEIGZyb20gc2V0dGluZ3Mgb3IgYG51bGxgIGlmIHNldHRpbmdzIGRvZXMgbm90IGNvbnRhaW4gYSBzb3VyY2UuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldFNvdXJjZUlkOiBmdW5jdGlvbihzZXR0aW5ncykge1xuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncyAmJiBzZXR0aW5ncy5zb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBzZXR0aW5ncy5zb3VyY2UgPT09ICdzdHJpbmcnID8gc2V0dGluZ3Muc291cmNlIDogc2V0dGluZ3Muc291cmNlLm5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgY29tcG9uZW50IElEIGZyb20gdGhlIHByb3ZpZGVkIHdpZGdldCBlcXVhbHMgdGhlIHNvdXJjZSBJRCBmcm9tIHRoZSBwcm92aWRlZFxuICAgICAgICAgICAgICogc2V0dGluZ3MuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtIHtQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0fSB3aWRnZXQgb2YgdGhlIGNvbXBvbmVudCB0byBjaGVjayBmb3IgYmVpbmcgdGhlIHNvdXJjZS5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5LkFqYXhTZXR0aW5nc30gc2V0dGluZ3MgY29udGFpbmluZyBzb3VyY2UgSUQuXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSBjb21wb25lbnQgSUQgZnJvbSB0aGUgcHJvdmlkZWQgd2lkZ2V0IGVxdWFscyB0aGUgc291cmNlIElEIGZyb20gdGhlXG4gICAgICAgICAgICAgKiBwcm92aWRlZCBzZXR0aW5ncy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaXNYaHJTb3VyY2U6IGZ1bmN0aW9uKHdpZGdldCwgc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2lkZ2V0LmlkID09PSBQcmltZUZhY2VzLmFqYXguVXRpbHMuZ2V0U291cmNlSWQoc2V0dGluZ3MpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDaGVja3Mgd2hldGhlciBvbmUgb2YgY29tcG9uZW50J3MgdHJpZ2dlcnMgZXF1YWxzIHRoZSBzb3VyY2UgSUQgZnJvbSB0aGUgcHJvdmlkZWQgc2V0dGluZ3MuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtIHtQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0fSB3aWRnZXQgb2YgdGhlIGNvbXBvbmVudCB0byBjaGVjayBmb3IgYmVpbmcgdGhlIHNvdXJjZS5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5LkFqYXhTZXR0aW5nc30gc2V0dGluZ3MgY29udGFpbmluZyBzb3VyY2UgSUQuXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHRyaWdnZXJNdXN0RXhpc3QgZmxhZyB0byBjaGVjayBpZiB0aGUgdHJpZ2dlciBtdXN0IGV4aXN0XG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIGlmIG9uZSBvZiBjb21wb25lbnQncyB0cmlnZ2VycyBlcXVhbHMgdGhlIHNvdXJjZSBJRCBmcm9tIHRoZSBwcm92aWRlZCBzZXR0aW5ncy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaXNYaHJTb3VyY2VBVHJpZ2dlcjogZnVuY3Rpb24od2lkZ2V0LCBzZXR0aW5ncywgdHJpZ2dlck11c3RFeGlzdCkge1xuICAgICAgICAgICAgICAgIHZhciBzb3VyY2VJZCA9IFByaW1lRmFjZXMuYWpheC5VdGlscy5nZXRTb3VyY2VJZChzZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgaWYgKCFzb3VyY2VJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjZmdUcmlnZ2VyID0gd2lkZ2V0LmNmZy50cmlnZ2VyIHx8IHdpZGdldC5jZmcudHJpZ2dlcnM7XG4gICAgICAgICAgICAgICAgLy8gd2UgbXVzdCBldmFsdWF0ZSBpdCBlYWNoIHRpbWUgYXMgdGhlIERPTSBtaWdodCBoYXMgYmVlbiBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgdmFyIHRyaWdnZXJzID0gUHJpbWVGYWNlcy5leHByZXNzaW9ucy5TZWFyY2hFeHByZXNzaW9uRmFjYWRlLnJlc29sdmVDb21wb25lbnRzKHdpZGdldC5qcSwgY2ZnVHJpZ2dlcik7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0cmlnZ2VyIGlzIG51bGwgaXQgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIERPTSBzbyB3ZSBuZWVkIHRvIGhpZGUgdGhlIGJsb2NrIFVJXG4gICAgICAgICAgICAgICAgaWYgKCF0cmlnZ2VycyB8fCB0cmlnZ2Vycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0cmlnZ2VyTXVzdEV4aXN0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAkLmluQXJyYXkoc291cmNlSWQsIHRyaWdnZXJzKSAhPT0gLTE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElzIHRoaXMgc2NyaXB0IGFuIEFKQVggcmVxdWVzdD9cbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzY3JpcHQgdGhlIEpTIHNjcmlwdCB0byBjaGVja1xuICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGlzIHNjcmlwdCBjb250YWlucyBhbiBBSkFYIHJlcXVlc3RcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaXNBamF4UmVxdWVzdDogZnVuY3Rpb24oc2NyaXB0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjcmlwdC5pbmNsdWRlcyhcIlByaW1lRmFjZXMuYWIoXCIpIHx8IHNjcmlwdC5pbmNsdWRlcyhcInBmLmFiKFwiKVxuICAgICAgICAgICAgICAgICAgICB8fCBzY3JpcHQuaW5jbHVkZXMoXCJtb2phcnJhLmFiKFwiKVxuICAgICAgICAgICAgICAgICAgICB8fCBzY3JpcHQuaW5jbHVkZXMoXCJteWZhY2VzLmFiKFwiKVxuICAgICAgICAgICAgICAgICAgICB8fCBzY3JpcHQuaW5jbHVkZXMoXCJqc2YuYWpheC5yZXF1ZXN0XCIpIHx8IHNjcmlwdC5pbmNsdWRlcyhcImZhY2VzLmFqYXgucmVxdWVzdFwiKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXBkYXRlcyB0aGUgbWFpbiBoaWRkZW4gaW5wdXQgZWxlbWVudCBmb3IgZWFjaCBmb3JtLlxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTmFtZSBvZiB0aGUgaGlkZGVuIGZvcm0gaW5wdXQgZWxlbWVudCwgdXN1YWxseSB0aGUgc2FtZSBhcyB0aGUgZm9ybS5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBWYWx1ZSB0byBzZXQgb24gdGhlIGhpZGRlbiBpbnB1dCBlbGVtZW50LlxuICAgICAgICAgICAgICogQHBhcmFtIHtQcmltZUZhY2VzLmFqYXgucGZYSFJ9IFt4aHJdIE9wdGlvbmFsIFhIUiByZXF1ZXN0IHdpdGggYHBmU2V0dGluZ3NgIG9yIGBwZkFyZ3NgIHdpdGggZnVydGhlclxuICAgICAgICAgICAgICogZGF0YSwgc3VjaCBhcyB3aGljaCBmb3JtcyBzaG91bGQgYmUgdXBkYXRlZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlSW5wdXQ6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCB4aHIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdHJpbW1lZFZhbHVlID0gUHJpbWVGYWNlcy50cmltKHZhbHVlKTtcblxuICAgICAgICAgICAgICAgIHZhciBmb3JtcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHhociAmJiB4aHIucGZTZXR0aW5ncyAmJiB4aHIucGZTZXR0aW5ncy5wb3J0bGV0Rm9ybXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybXMgPSAkKHhoci5wZlNldHRpbmdzLnBvcnRsZXRGb3Jtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3JtcyA9ICQoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1ldGVyUHJlZml4ID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHhociAmJiB4aHIucGZBcmdzICYmIHhoci5wZkFyZ3MucGFyYW1ldGVyUHJlZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlclByZWZpeCA9IHhoci5wZkFyZ3MucGFyYW1ldGVyUHJlZml4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm0gPSBmb3Jtcy5lcShpKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybS5hdHRyKCdtZXRob2QnKSA9PT0gJ3Bvc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSBmb3JtLmNoaWxkcmVuKFwiaW5wdXRbbmFtZT0nXCIgKyBDU1MuZXNjYXBlKHBhcmFtZXRlclByZWZpeCArIG5hbWUpICsgXCInXVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWwodHJpbW1lZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIicgKyBwYXJhbWV0ZXJQcmVmaXggKyBuYW1lICsgJ1wiIHZhbHVlPVwiJyArIHRyaW1tZWRWYWx1ZSArICdcIj48L2lucHV0PicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVcGRhdGVzIHRoZSBIVE1MIGBoZWFkYCBlbGVtZW50IG9mIHRoZSBjdXJyZW50IGRvY3VtZW50IHdpdGggdGhlIGNvbnRlbnQgcmVjZWl2ZWQgZnJvbSBhbiBBSkFYIHJlcXVlc3QuXG4gICAgICAgICAgICAgKiBUaGlzIG1ldGhvZCBlbnN1cmVzIHRoYXQgYW55IG5ldyBKYXZhU2NyaXB0IG9yIENTUyByZXNvdXJjZXMgYXJlIG9ubHkgYWRkZWQgaWYgdGhleSBhcmUgbm90IGFscmVhZHkgcHJlc2VudC5cbiAgICAgICAgICAgICAqIElmIHRoZSBjb250ZW50IGRvZXMgbm90IGNvbnRhaW4gYW55IEphdmFTY3JpcHQgb3IgQ1NTIGxpbmtzLCBpdCBpcyBkaXJlY3RseSBhcHBlbmRlZCB0byB0aGUgaGVhZC5cbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgVGhlIGNvbnRlbnQgb2YgdGhlIGNoYW5nZXNldCB0aGF0IHdhcyByZXR1cm5lZCBieSBhbiBBSkFYIHJlcXVlc3QuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVwZGF0ZVJlc291cmNlOiBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICAgICAgICAgIHZhciAkaGVhZCA9ICQoXCJoZWFkXCIpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkY29udGVudCA9ICQoY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWx0ZXJlZENvbnRlbnQgPSAkY29udGVudC5sZW5ndGggPiAwID8gJGNvbnRlbnQuZmlsdGVyKFwibGlua1tocmVmXSwgc2NyaXB0W3NyY11cIikgOiAkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlcmVkQ29udGVudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuZGVidWcoXCJBZGRpbmcgY29udGVudCB0byB0aGUgaGVhZCBiZWNhdXNlIGl0IGxhY2tzIGFueSBKYXZhU2NyaXB0IG9yIENTUyBsaW5rcy4uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRoZWFkLmFwcGVuZChjb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICMxMTcxNCBJdGVyYXRlIHRocm91Z2ggZWFjaCBzY3JpcHQgYW5kIHN0eWxlc2hlZXQgdGFnIGluIHRoZSBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVja2luZyBpZiByZXNvdXJjZSBpcyBhbHJlYWR5IGF0dGFjaGVkIHRvIHRoZSBoZWFkIGFuZCBhZGRpbmcgaXQgaWYgbm90XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZENvbnRlbnQuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRyZXNvdXJjZSA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNyYyA9ICRyZXNvdXJjZS5hdHRyKFwiaHJlZlwiKSB8fCAkcmVzb3VyY2UuYXR0cihcInNyY1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IHRoaXMudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkcmVzb3VyY2VzID0gJGhlYWQuZmluZCh0eXBlICsgJ1tzcmM9XCInICsgc3JjICsgJ1wiXSwgJyArIHR5cGUgKyAnW2hyZWY9XCInICsgc3JjICsgJ1wiXScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgc2NyaXB0IG9yIHN0eWxlc2hlZXQgYWxyZWFkeSBleGlzdHMgYW5kIGFkZCBpdCB0byBoZWFkIGlmIGl0IGRvZXMgbm90XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRyZXNvdXJjZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuZGVidWcoXCJBcHBlbmRpbmcgXCIgKyB0eXBlICsgXCIgdG8gaGVhZDogXCIgKyBzcmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVhZC5hcHBlbmQoJHJlc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1ZRkFDRVMtNDM3OCBpcyBpbmNvcnJlY3RseSBzZW5kaW5nIGV4ZWN1dGFibGUgY29kZSBoZXJlIGluIHRoZSBSZXNvdXJjZSBzZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuZGVidWcoXCJBcHBlbmRpbmcgY29udGVudCB0byB0aGUgaGVhZCBhcyBpdCBjb250YWlucyBvbmx5IHJhdyBKYXZhU2NyaXB0IGNvZGUuLi5cIik7XG4gICAgICAgICAgICAgICAgICAgICRoZWFkLmFwcGVuZChjb250ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVwZGF0ZXMgdGhlIEhUTUwgYGhlYWRgIGVsZW1lbnQgb2YgdGhlIGN1cnJlbnQgZG9jdW1lbnQgd2l0aCB0aGUgY29udGVudCByZWNlaXZlZCBmcm9tIGFuIEFKQVggcmVxdWVzdC5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IFRoZSBjb250ZW50IG9mIHRoZSBjaGFuZ2VzZXQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYW4gQUpBWCByZXF1ZXN0LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB1cGRhdGVIZWFkOiBmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhY2hlID0gJC5hamF4U2V0dXAoKVsnY2FjaGUnXTtcbiAgICAgICAgICAgICAgICAkLmFqYXhTZXR1cCgpWydjYWNoZSddID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBoZWFkU3RhcnRUYWcgPSBuZXcgUmVnRXhwKFwiPGhlYWRbXj5dKj5cIiwgXCJnaVwiKS5leGVjKGNvbnRlbnQpWzBdO1xuICAgICAgICAgICAgICAgIHZhciBoZWFkU3RhcnRJbmRleCA9IGNvbnRlbnQuaW5kZXhPZihoZWFkU3RhcnRUYWcpICsgaGVhZFN0YXJ0VGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAkKCdoZWFkJykuaHRtbChjb250ZW50LnN1YnN0cmluZyhoZWFkU3RhcnRJbmRleCwgY29udGVudC5sYXN0SW5kZXhPZihcIjwvaGVhZD5cIikpKTtcblxuICAgICAgICAgICAgICAgICQuYWpheFNldHVwKClbJ2NhY2hlJ10gPSBjYWNoZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXBkYXRlcyB0aGUgSFRNTCBgYm9keWAgZWxlbWVudCBvZiB0aGUgY3VycmVudCBkb2N1bWVudCB3aXRoIHRoZSBjb250ZW50IHJlY2VpdmVkIGZyb20gYW4gQUpBWCByZXF1ZXN0LlxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgVGhlIGNvbnRlbnQgb2YgdGhlIGNoYW5nZXNldCB0aGF0IHdhcyByZXR1cm5lZCBieSBhbiBBSkFYIHJlcXVlc3QuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHVwZGF0ZUJvZHk6IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYm9keVN0YXJ0VGFnID0gbmV3IFJlZ0V4cChcIjxib2R5W14+XSo+XCIsIFwiZ2lcIikuZXhlYyhjb250ZW50KVswXTtcbiAgICAgICAgICAgICAgICB2YXIgYm9keVN0YXJ0SW5kZXggPSBjb250ZW50LmluZGV4T2YoYm9keVN0YXJ0VGFnKSArIGJvZHlTdGFydFRhZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmh0bWwoY29udGVudC5zdWJzdHJpbmcoYm9keVN0YXJ0SW5kZXgsIGNvbnRlbnQubGFzdEluZGV4T2YoXCI8L2JvZHk+XCIpKSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVwZGF0ZXMgYW4gZWxlbWVudCB3aXRoIHRoZSBnaXZlbiBJRCBieSBhcHBseWluZyBhIGNoYW5nZSBzZXQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYW4gQUpBWCByZXF1ZXN0LiBUaGlzXG4gICAgICAgICAgICAgKiBpbnZvbHZlcyByZXBsYWNpbmcgdGhlIEhUTUwgY29udGVudCBvZiB0aGUgZWxlbWVudCB3aXRoIHRoZSBuZXcgY29udGVudC5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBJRCBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIHRvIGJlIHVwZGF0ZWQuXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCBUaGUgbmV3IGNvbnRlbnQgb2YgdGhlIGNoYW5nZXNldCBhcyByZXR1cm5lZCBieSBhbiBBSkFYIHJlcXVlc3QuXG4gICAgICAgICAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMuYWpheC5wZlhIUn0gW3hocl0gT3B0aW9uYWwgWEhSIHJlcXVlc3Qgd2l0aCBgcGZTZXR0aW5nc2Agb3IgYHBmQXJnc2Agd2l0aCBmdXJ0aGVyXG4gICAgICAgICAgICAgKiBkYXRhLCBzdWNoIGFzIHdoaWNoIGZvcm1zIHNob3VsZCBiZSB1cGRhdGVkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB1cGRhdGVFbGVtZW50OiBmdW5jdGlvbihpZCwgY29udGVudCwgeGhyKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaWQuaW5kZXhPZihQcmltZUZhY2VzLlZJRVdfU1RBVEUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguVXRpbHMudXBkYXRlRm9ybVN0YXRlSW5wdXQoUHJpbWVGYWNlcy5WSUVXX1NUQVRFLCBjb250ZW50LCB4aHIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpZC5pbmRleE9mKFByaW1lRmFjZXMuQ0xJRU5UX1dJTkRPVykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYWpheC5VdGlscy51cGRhdGVGb3JtU3RhdGVJbnB1dChQcmltZUZhY2VzLkNMSUVOVF9XSU5ET1csIGNvbnRlbnQsIHhocik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHVzZWQgYnkgQGFsbFxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlkID09PSBQcmltZUZhY2VzLlZJRVdfUk9PVCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGJhY2t1cCBvdXIgdXRpbHMsIHdlIHJlc2V0IGl0IHNvb25cbiAgICAgICAgICAgICAgICAgICAgdmFyIGFqYXhVdGlscyA9IFByaW1lRmFjZXMuYWpheC5VdGlscztcblxuICAgICAgICAgICAgICAgICAgICAvLyByZXNldCBQcmltZUZhY2VzIEpTIHN0YXRlIGJlY2F1c2UgdGhlIHZpZXcgaXMgY29tcGxldGVseSByZXBsYWNlZCB3aXRoIGEgbmV3IG9uZVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuUHJpbWVGYWNlcy5yZXNldFN0YXRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgYWpheFV0aWxzLnVwZGF0ZUhlYWQoY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGFqYXhVdGlscy51cGRhdGVCb2R5KGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpZCA9PT0gUHJpbWVGYWNlcy5hamF4LlZJRVdfSEVBRCkge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguVXRpbHMudXBkYXRlSGVhZChjb250ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaWQgPT09IFByaW1lRmFjZXMuYWpheC5WSUVXX0JPRFkpIHtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlV0aWxzLnVwZGF0ZUJvZHkoY29udGVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlkID09PSBQcmltZUZhY2VzLmFqYXguUkVTT1VSQ0UpIHtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlV0aWxzLnVwZGF0ZVJlc291cmNlKGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpZCA9PT0gJCgnaGVhZCcpWzBdLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYWpheC5VdGlscy51cGRhdGVIZWFkKGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQoUHJpbWVGYWNlcy5lc2NhcGVDbGllbnRJZChpZCkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy53YXJuKFwiRE9NIGVsZW1lbnQgd2l0aCBpZCAnXCIgKyBpZCArIFwiJyBjYW50IGJlIGZvdW5kOyBza2lwIHVwZGF0ZS4uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZW1vdmVkQ29udGVudCA9IHRhcmdldC5yZXBsYWNlV2l0aChjb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRldGFjaCBhbGwgaGFuZGxlcnMgYW5kIGRhdGEgdG8gY2xlYW4gdXAgRE9NXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnV0aWxzLmNsZWFuc2VEb21FbGVtZW50KHJlbW92ZWRDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBvYmplY3QgY29udGFpbnMgZnVuY3Rpb25hbGl0eSByZWxhdGVkIHRvIHF1ZXVpbmcgQUpBWCByZXF1ZXN0cyB0byBlbnN1cmUgdGhhdCB0aGV5IGFyZSAoYSkgc2VudCBpbiB0aGVcbiAgICAgICAgICogcHJvcGVyIG9yZGVyIGFuZCAoYikgdGhhdCBlYWNoIHJlc3BvbnNlIGlzIHByb2Nlc3NlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgcmVxdWVzdHMgd2VyZSBzZW50LlxuICAgICAgICAgKiBAaW50ZXJmYWNlIHtQcmltZUZhY2VzLmFqYXguUXVldWV9IC4gVGhlIGludGVyZmFjZSBmb3IgdGhlIG9iamVjdCBjb250YWluaW5nIGZ1bmN0aW9uYWxpdHkgcmVsYXRlZCB0byBxdWV1aW5nXG4gICAgICAgICAqIEFKQVggcmVxdWVzdHMuIFRoZSBxdWV1ZSBlbnN1cmVzIHRoYXQgcmVxdWVzdHMgYXJlIChhKSBzZW50IGluIHRoZSBvcmRlciBhcyB0aGV5IHdlcmUgaXNzdWVkLCBhbmQgKGIpIHRoYXRcbiAgICAgICAgICogZWFjaCByZXNwb25zZSBpcyBwcm9jZXNzZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIHJlcXVlc3RzIHdlcmUgc2VudC5cbiAgICAgICAgICogQHR5cGUge1ByaW1lRmFjZXMuYWpheC5RdWV1ZX1cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICBRdWV1ZToge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgbWFwIGJldHdlZW4gdGhlIHNvdXJjZSBJRCBhbmQgIHRoZSB0aW1lb3V0IElEcyAoYXMgcmV0dXJuZWQgYnkgYHNldFRpbWVvdXRgKS4gVXNlZCBmb3IgQUpBWCByZXF1ZXN0c1xuICAgICAgICAgICAgICogd2l0aCBhIHNwZWNpZmllZCBkZWxheSAoc3VjaCBhcyByZW1vdGUgY29tbWFuZHMgdGhhdCBoYXZlIGEgZGVsYXkgc2V0KS5cbiAgICAgICAgICAgICAqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBudW1iZXI+fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkZWxheXM6IHt9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgbGlzdCBvZiByZXF1ZXN0cyB0aGF0IGFyZSB3YWl0aW5nIHRvIGJlIHNlbnQuXG4gICAgICAgICAgICAgKiBAdHlwZSB7UGFydGlhbDxQcmltZUZhY2VzLmFqYXguQ29uZmlndXJhdGlvbj5bXX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVxdWVzdHM6IG5ldyBBcnJheSgpLFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgbGlzdCBvZiBzZW50IEFKQVggcmVxdWVzdHMsIGkuZS4gSFRUUCByZXF1ZXN0cyB0aGF0IHdlcmUgYWxyZWFkeSBzdGFydGVkLiBUaGlzIGlzIHVzZWQsIGZvciBleGFtcGxlLCB0b1xuICAgICAgICAgICAgICogYWJvcnQgcmVxdWVzdHMgdGhhdCB3ZXJlIHNlbnQgYWxyZWFkeSB3aGVuIHRoYXQgYmVjb21lcyBuZWNlc3NhcnkuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHR5cGUge1ByaW1lRmFjZXMuYWpheC5wZlhIUltdfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB4aHJzOiBuZXcgQXJyYXkoKSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBPZmZlcnMgYW4gQUpBWCByZXF1ZXN0IHRvIHRoaXMgcXVldWUuIFRoZSByZXF1ZXN0IGlzIHNlbnQgb25jZSBhbGwgb3RoZXIgcmVxdWVzdHMgaW4gdGhpcyBxdWV1ZSBoYXZlXG4gICAgICAgICAgICAgKiBiZWVuIHNlbnQuIElmIGEgZGVsYXkgaXMgc2V0IG9uIHRoZSByZXF1ZXN0IGNvbmZpZ3VyYXRpb24sIHRoZSByZXF1ZXN0IGlzIG5vdCBzZW50IGJlZm9yZSB0aGUgc3BlY2lmaWVkXG4gICAgICAgICAgICAgKiBkZWxheSBoYXMgZWxhcHNlZC5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7UGFydGlhbDxQcmltZUZhY2VzLmFqYXguQ29uZmlndXJhdGlvbj59IHJlcXVlc3QgVGhlIHJlcXVlc3QgdG8gc2VuZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb2ZmZXI6IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICBpZihyZXF1ZXN0LmRlbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzb3VyY2VJZCA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICR0aGlzID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlSWQgPSAodHlwZW9mKHJlcXVlc3Quc291cmNlKSA9PT0gJ3N0cmluZycpID8gcmVxdWVzdC5zb3VyY2U6ICQocmVxdWVzdC5zb3VyY2UpLmF0dHIoJ2lkJyksXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJpbWVGYWNlcy5xdWV1ZVRhc2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLnJlcXVlc3RzLnB1c2gocmVxdWVzdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoJHRoaXMucmVxdWVzdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5zZW5kKHJlcXVlc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgcmVxdWVzdC5kZWxheSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kZWxheXNbc291cmNlSWRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheXNbc291cmNlSWRdLnRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxheXNbc291cmNlSWRdLnRpbWVvdXQgPSBjcmVhdGVUaW1lb3V0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGF5c1tzb3VyY2VJZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogY3JlYXRlVGltZW91dCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RzLnB1c2gocmVxdWVzdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5yZXF1ZXN0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYWpheC5SZXF1ZXN0LnNlbmQocmVxdWVzdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJlbW92ZXMgdGhlIHRvcG1vc3QgcmVxdWVzdCAodGhlIHJlcXVlc3RzIHRoYXQgd2FzIGp1c3Qgc2VudCkgZnJvbSB0aGlzIHF1ZXVlOyBhbmQgc3RhcnRzIHRoZSBzZWNvbmRcbiAgICAgICAgICAgICAqIHRvcG1vc3QgcmVxdWVzdC5cbiAgICAgICAgICAgICAqIEByZXR1cm4ge1BhcnRpYWw8UHJpbWVGYWNlcy5hamF4LkNvbmZpZ3VyYXRpb24+IHwgbnVsbH0gVGhlIHRvcG1vc3QgcmVxdWVzdCBpbiB0aGlzIHF1ZXVlLCBvciBgbnVsbGAgaWYgdGhpcyBxdWV1ZVxuICAgICAgICAgICAgICogaXMgZW1wdHkuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHBvbGw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBwcm9jZXNzZWQgPSB0aGlzLnJlcXVlc3RzLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgbmV4dCA9IHRoaXMucGVlaygpO1xuXG4gICAgICAgICAgICAgICAgaWYobmV4dCkge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5zZW5kKG5leHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzZWQ7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybnMgdGhlIHJlcXVlc3QgdGhhdCBpcyBzY2hlZHVsZWQgdG8gYmUgc2VudCBuZXh0LCBidXQgZG9lcyBub3QgbW9kaWZ5IHRoZSBxdWV1ZSBpbiBhbnkgd2F5LlxuICAgICAgICAgICAgICogQHJldHVybiB7UGFydGlhbDxQcmltZUZhY2VzLmFqYXguQ29uZmlndXJhdGlvbj4gfCBudWxsfSBUaGUgdG9wbW9zdCByZXF1ZXN0IGluIHRoaXMgcXVldWUgdGhhdCBpcyB0byBiZSBzZW50IG5leHQsXG4gICAgICAgICAgICAgKiBvciBgbnVsbGAgd2hlbiB0aGlzIHF1ZXVlIGlzIGVtcHR5LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwZWVrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0c1swXTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2hlY2tzIHdoZXRoZXIgdGhpcyBxdWV1ZSBjb250YWlucyBhbnkgc2NoZWR1bGVkIEFKQVggcmVxdWVzdHMuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhpcyBxdWV1ZSBjb250YWlucyBubyBzY2hlZHVsZWQgcmVxdWVzdHMsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpc0VtcHR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0cy5sZW5ndGggPT09IDA7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEFkZHMgYSBuZXdseSBzZW50IFhIUiByZXF1ZXN0IHRvIHRoZSBsaXN0IG9mIHNlbnQgcmVxdWVzdHMgKGBQcmltZUZhY2VzLmFqYXgueGhyc2ApLlxuICAgICAgICAgICAgICogQHBhcmFtIHtQcmltZUZhY2VzLmFqYXgucGZYSFJ9IHhociBYSFIgcmVxdWVzdCB0byBhZGQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGFkZFhIUjogZnVuY3Rpb24oeGhyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54aHJzLnB1c2goeGhyKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVtb3ZlcyBhbiBYSFIgcmVxdWVzdCBmcm9tIHRoZSBsaXN0IG9mIHNlbnQgcmVxdWVzdHMgKGBQcmltZUZhY2VzLmFqYXgueGhyc2ApLiBVc3VhbGx5IGNhbGxlZCBvbmNlIHRoZVxuICAgICAgICAgICAgICogQUpBWCByZXF1ZXN0IGlzIGRvbmUsIGhhdmluZyByZXN1bHRlZCBpbiBlaXRoZXIgYSBzdWNjZXNzIG9yIGFuIGVycm9yLlxuICAgICAgICAgICAgICogQHBhcmFtIHtQcmltZUZhY2VzLmFqYXgucGZYSFJ9IHhociBYSFIgcmVxdWVzdCB0byByZW1vdmUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlbW92ZVhIUjogZnVuY3Rpb24oeGhyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gJC5pbkFycmF5KHhociwgdGhpcy54aHJzKTtcbiAgICAgICAgICAgICAgICBpZihpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueGhycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQWJvcnRzIGFsbCByZXF1ZXN0cyB0aGF0IHdlcmUgYWxyZWFkeSBzZW50LCBidXQgaGF2ZSBub3QgeWV0IHJlY2VpdmVkIGFuIGFuc3dlciBmcm9tIHRoZSBzZXJ2ZXIuIEFsc29cbiAgICAgICAgICAgICAqIHJlbW92ZXMgYWxsIHJlcXVlc3RzIHRoYXQgYXJlIHdhaXRpbmcgaW4gdGhlIHF1ZXVlIGFuZCBoYXZlIG5vdCBiZWVuIHNlbnQgeWV0LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBhYm9ydEFsbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gY2xlYXIgb3V0IGFueSBwZW5kaW5nIHJlcXVlc3RzXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0cyA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gYWJvcnQgYW55IGluLWZsaWdodCB0aGF0IGFyZSBub3QgRE9ORSg0KVxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnhocnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IHRoaXMueGhyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMueGhycyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaW50ZXJmYWNlIGZvciB0aGUgb2JqZWN0IGNvbnRhaW5pbmcgbG93LWxldmVsIGZ1bmN0aW9uYWxpdHkgcmVsYXRlZCB0byBzZW5kaW5nIEFKQVggcmVxdWVzdHMuXG4gICAgICAgICAqIEBpbnRlcmZhY2Uge1ByaW1lRmFjZXMuYWpheC5SZXF1ZXN0fS4gVGhlIGludGVyZmFjZSBmb3IgdGhlIG9iamVjdCBjb250YWluaW5nIGZ1bmN0aW9uYWxpdHkgcmVsYXRlZCB0b1xuICAgICAgICAgKiBzZW5kaW5nIEFKQVggcmVxdWVzdHMuXG4gICAgICAgICAqIEB0eXBlIHtQcmltZUZhY2VzLmFqYXguUmVxdWVzdH1cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICBSZXF1ZXN0OiB7XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSGFuZGxlcyB0aGUgZ2l2ZW4gQUpBWCByZXF1ZXN0LCBlaXRoZXIgYnkgc2VuZGluZyBpdCBpbW1lZGlhdGVseSAoaWYgYGFzeW5jYCBpcyBzZXQgdG8gYHRydWVgKSwgb3IgYnlcbiAgICAgICAgICAgICAqIGFkZGluZyBpdCB0byB0aGUgQUpBWCBxdWV1ZSBvdGhlcndpc2UuIFRoZSBBSkFYIHF1ZXVlIGVuc3VyZXMgdGhhdCByZXF1ZXN0cyBhcmUgc2VudCBhbmQgaGFuZGxlZCBpbiB0aGVcbiAgICAgICAgICAgICAqIG9yZGVyIHRoZXkgd2VyZSBzdGFydGVkLiBTZWUgYWxzbyB7QGxpbmsganNmLmFqYXgucmVxdWVzdH0uXG4gICAgICAgICAgICAgKiBAcGFyYW0ge1BhcnRpYWw8UHJpbWVGYWNlcy5hamF4LkNvbmZpZ3VyYXRpb24+fSBjZmcgQ29uZmlndXJhdGlvbiBmb3IgdGhlIEFKQVggcmVxdWVzdCB0byBzZW5kLCBzdWNoIGFzXG4gICAgICAgICAgICAgKiB0aGUgSFRUUCBtZXRob2QsIHRoZSBVUkwsIGFuZCB0aGUgY29udGVudCBvZiB0aGUgcmVxdWVzdC5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7UGFydGlhbDxQcmltZUZhY2VzLmFqYXguQ29uZmlndXJhdGlvbkV4dGVuZGVyPn0gW2V4dF0gT3B0aW9uYWwgZXh0ZW5kZXIgd2l0aCBhZGRpdGlvbmFsIG9wdGlvbnNcbiAgICAgICAgICAgICAqIHRoYXQgb3ZlcndyaXRlIHRoZSBvcHRpb25zIGdpdmVuIGluIGBjZmdgLlxuICAgICAgICAgICAgICogQHJldHVybiB7UHJvbWlzZTxQcmltZUZhY2VzLmFqYXguUmVzcG9uc2VEYXRhPn0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgb25jZSB0aGUgQUpBWCByZXF1ZXN0cyBpcyBkb25lLlxuICAgICAgICAgICAgICogVXNlIHRoaXMgdG8gcnVuIGN1c3RvbSBKYXZhU2NyaXB0IGxvZ2ljLiBXaGVuIHRoZSBBSkFYIHJlcXVlc3Qgc3VjY2VlZHMsIHRoZSBwcm9taXNlIGlzIGZ1bGZpbGxlZC5cbiAgICAgICAgICAgICAqIE90aGVyd2lzZSwgd2hlbiB0aGUgQUpBWCByZXF1ZXN0IGZhaWxzLCB0aGUgcHJvbWlzZSBpcyByZWplY3RlZC4gSWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQsIHRoZVxuICAgICAgICAgICAgICogcmVqZWN0aW9uIGhhbmRsZXIgcmVjZWl2ZXMgYW4gb2JqZWN0IG9mIHR5cGUge0BsaW5rIFByaW1lRmFjZXMuYWpheC5GYWlsZWRSZXF1ZXN0RGF0YX0uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGhhbmRsZTogZnVuY3Rpb24oY2ZnLCBleHQpIHtcbiAgICAgICAgICAgICAgICBjZmcuZXh0ID0gZXh0O1xuICAgICAgICAgICAgICAgIGNmZy5wcm9taXNlID0gY2ZnLnByb21pc2UgfHwgJC5EZWZlcnJlZCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKFByaW1lRmFjZXMuc2V0dGluZ3MuZWFybHlQb3N0UGFyYW1FdmFsdWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNmZy5lYXJseVBvc3RQYXJhbXMgPSBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5jb2xsZWN0RWFybHlQb3N0UGFyYW1zKGNmZyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoY2ZnLmFzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYWpheC5SZXF1ZXN0LnNlbmQoY2ZnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYWpheC5RdWV1ZS5vZmZlcihjZmcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBjZmcucHJvbWlzZS5wcm9taXNlKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFBlcmZvcm1zIHRoZSBlYXJseSBjb2xsZWN0aW9uIG9mIHBvc3QgcGFyYW1ldGVycyAoZm9ybSBlbGVtZW50IHZhbHVlcykgaWYgdGhlIHJlcXVlc3QgaXMgY29uZmlndXJlZCB0aGF0XG4gICAgICAgICAgICAgKiB3YXkuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3ByaW1lZmFjZXMvcHJpbWVmYWNlcy9pc3N1ZXMvMTA5XG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtIHtQYXJ0aWFsPFByaW1lRmFjZXMuYWpheC5Db25maWd1cmF0aW9uPn0gY2ZnIENvbmZpZ3VyYXRpb24gZm9yIHRoZSBBSkFYIHJlcXVlc3QgdG8gc2VuZCwgc3VjaCBhc1xuICAgICAgICAgICAgICogdGhlIEhUVFAgbWV0aG9kLCB0aGUgVVJMLCBhbmQgdGhlIGNvbnRlbnQgb2YgdGhlIHJlcXVlc3QuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtQcmltZUZhY2VzLmFqYXguUmVxdWVzdFBhcmFtZXRlcltdfSBUaGUgY29sbGVjdGVkIGZvcm0gZWxlbWVudCB2YWx1ZXMgdG8gYmUgc2VudCB3aXRoIHRoZSByZXF1ZXN0LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb2xsZWN0RWFybHlQb3N0UGFyYW1zOiBmdW5jdGlvbihjZmcpIHtcblxuICAgICAgICAgICAgICAgIHZhciBlYXJseVBvc3RQYXJhbXM7XG5cbiAgICAgICAgICAgICAgICB2YXIgc291cmNlRWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKGNmZy5zb3VyY2UpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VFbGVtZW50ID0gJChQcmltZUZhY2VzLmVzY2FwZUNsaWVudElkKGNmZy5zb3VyY2UpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZUVsZW1lbnQgPSAkKGNmZy5zb3VyY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc291cmNlRWxlbWVudC5pcygnOmlucHV0JykgJiYgc291cmNlRWxlbWVudC5pcygnOm5vdCg6YnV0dG9uKScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVhcmx5UG9zdFBhcmFtcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VFbGVtZW50LmlzKCc6Y2hlY2tib3gnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrYm94UG9zdFBhcmFtcyA9ICQoXCJpbnB1dFtuYW1lPSdcIiArIENTUy5lc2NhcGUoc291cmNlRWxlbWVudC5hdHRyKCduYW1lJykpICsgXCInXVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCc6Y2hlY2tlZCcpLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLm1lcmdlKGVhcmx5UG9zdFBhcmFtcywgY2hlY2tib3hQb3N0UGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhcmx5UG9zdFBhcmFtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBzb3VyY2VFbGVtZW50LmF0dHIoJ25hbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc291cmNlRWxlbWVudC52YWwoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVhcmx5UG9zdFBhcmFtcyA9IHNvdXJjZUVsZW1lbnQuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZWFybHlQb3N0UGFyYW1zO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTdGFydHMgdGhlIGdpdmVuIEFKQVggcmVxdWVzdCBpbW1lZGlhdGVseSBieSBzZW5kaW5nIHRoZSBkYXRhIHRvIHRoZSBzZXJ2ZXIuIENvbnRyYXN0IHdpdGhcbiAgICAgICAgICAgICAqIHtAbGluayBoYW5kbGV9LCB3aGljaCBtYXkgcXVldWUgQUpBWCByZXF1ZXN0cywgZGVwZW5kaW5nIG9uIGhvdyB0aGV5IGFyZSBjb25maWd1cmVkLlxuICAgICAgICAgICAgICogQHBhcmFtIHtQYXJ0aWFsPFByaW1lRmFjZXMuYWpheC5Db25maWd1cmF0aW9uPn0gY2ZnIENvbmZpZ3VyYXRpb24gZm9yIHRoZSBBSkFYIHJlcXVlc3QgdG8gc2VuZCwgc3VjaCBhc1xuICAgICAgICAgICAgICogdGhlIEhUVFAgbWV0aG9kLCB0aGUgVVJMLCBhbmQgdGhlIGNvbnRlbnQgb2YgdGhlIHJlcXVlc3QuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufHVuZGVmaW5lZH0gYGZhbHNlYCBpZiB0aGUgQUpBWCByZXF1ZXN0IGlzIHRvIGJlIGNhbmNlbGVkLCBgdHJ1ZWAgb3IgYHVuZGVmaW5lZGBcbiAgICAgICAgICAgICAqIG90aGVyd2lzZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VuZDogZnVuY3Rpb24oY2ZnKSB7XG4gICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5kZWJ1ZygnSW5pdGlhdGluZyBhamF4IHJlcXVlc3QuJyk7XG5cbiAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmN1c3RvbUZvY3VzID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB2YXIgZ2xvYmFsID0gKGNmZy5nbG9iYWwgPT09IHRydWUgfHwgY2ZnLmdsb2JhbCA9PT0gdW5kZWZpbmVkKSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb3JtID0gbnVsbCxcbiAgICAgICAgICAgICAgICBzb3VyY2VJZCA9IG51bGwsXG4gICAgICAgICAgICAgICAgcmV0VmFsID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmKGNmZy5vbnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldFZhbCA9IGNmZy5vbnN0YXJ0LmNhbGwodGhpcywgY2ZnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY2ZnLmV4dCAmJiBjZmcuZXh0Lm9uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0VmFsID0gY2ZnLmV4dC5vbnN0YXJ0LmNhbGwodGhpcywgY2ZnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihyZXRWYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuZGVidWcoJ0FKQVggcmVxdWVzdCBjYW5jZWxsZWQgYnkgb25zdGFydCBjYWxsYmFjay4nKTtcblxuICAgICAgICAgICAgICAgICAgICAvL3JlbW92ZSBmcm9tIHF1ZXVlXG4gICAgICAgICAgICAgICAgICAgIGlmKCFjZmcuYXN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYWpheC5RdWV1ZS5wb2xsKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2ZnLnByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNmZy5wcm9taXNlLnJlamVjdCh7IHRleHRTdGF0dXM6ICdlcnJvcicsIGVycm9yVGhyb3duOiAnQUpBWCByZXF1ZXN0IGNhbmNlbGxlZCBieSBvbnN0YXJ0IGNhbGxiYWNrLicgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7ICAvL2NhbmNlbCByZXF1ZXN0XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoZ2xvYmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ3BmQWpheFN0YXJ0Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9zb3VyY2UgY2FuIGJlIGEgY2xpZW50IGlkIG9yIGFuIGVsZW1lbnQgZGVmaW5lZCBieSB0aGlzIGtleXdvcmRcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YoY2ZnLnNvdXJjZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZUlkID0gY2ZnLnNvdXJjZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2VJZCA9ICQoY2ZnLnNvdXJjZSkuYXR0cignaWQnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgJHNvdXJjZSA9ICQoUHJpbWVGYWNlcy5lc2NhcGVDbGllbnRJZChzb3VyY2VJZCkpO1xuXG4gICAgICAgICAgICAgICAgaWYoY2ZnLmZvcm1JZCkge1xuICAgICAgICAgICAgICAgICAgICAvL0V4cGxpY2l0IGZvcm0gaXMgZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICBmb3JtID0gUHJpbWVGYWNlcy5leHByZXNzaW9ucy5TZWFyY2hFeHByZXNzaW9uRmFjYWRlLnJlc29sdmVDb21wb25lbnRzQXNTZWxlY3Rvcigkc291cmNlLCBjZmcuZm9ybUlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbG9vayBmb3IgYSBwYXJlbnQgb2Ygc291cmNlXG4gICAgICAgICAgICAgICAgICAgIGZvcm0gPSAkc291cmNlLmNsb3Nlc3QoJ2Zvcm0nKTtcblxuICAgICAgICAgICAgICAgICAgICAvL3NvdXJjZSBoYXMgbm8gcGFyZW50IGZvcm0gc28gdXNlIGZpcnN0IGZvcm0gaW4gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtID0gJCgnZm9ybScpLmVxKDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5kZWJ1ZygnRm9ybSB0byBwb3N0ICcgKyBmb3JtLmF0dHIoJ2lkJykgKyAnLicpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhO1xuICAgICAgICAgICAgICAgIHZhciBzY2FuRm9yRmlsZXM7XG4gICAgICAgICAgICAgICAgdmFyIG11bHRpcGFydCA9IGZvcm0uYXR0cignZW5jdHlwZScpID09PSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgICAgICAgICAgICAgaWYgKG11bHRpcGFydCkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICBzY2FuRm9yRmlsZXMgPSAkKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHBvc3RVUkwgPSBQcmltZUZhY2VzLmFqYXguVXRpbHMuZ2V0UG9zdFVybChmb3JtKTtcbiAgICAgICAgICAgICAgICB2YXIgcG9zdFBhcmFtcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgLy8gU2VlICM2ODU3IC0gcGFyYW1ldGVyIG5hbWVzcGFjZSBmb3IgUG9ydGxldHNcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1ldGVyUHJlZml4ID0gUHJpbWVGYWNlcy5hamF4LlJlcXVlc3QuZXh0cmFjdFBhcmFtZXRlck5hbWVzcGFjZShmb3JtKTtcblxuICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuZGVidWcoJ1VSTCB0byBwb3N0ICcgKyBwb3N0VVJMICsgJy4nKTtcblxuICAgICAgICAgICAgICAgIC8vcGFydGlhbCBhamF4XG4gICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlcXVlc3QuYWRkUGFyYW0ocG9zdFBhcmFtcywgUHJpbWVGYWNlcy5QQVJUSUFMX1JFUVVFU1RfUEFSQU0sIHRydWUsIHBhcmFtZXRlclByZWZpeCk7XG5cbiAgICAgICAgICAgICAgICAvL3NvdXJjZVxuICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYWpheC5SZXF1ZXN0LmFkZFBhcmFtKHBvc3RQYXJhbXMsIFByaW1lRmFjZXMuUEFSVElBTF9TT1VSQ0VfUEFSQU0sIHNvdXJjZUlkLCBwYXJhbWV0ZXJQcmVmaXgpO1xuXG4gICAgICAgICAgICAgICAgLy9yZXNldFZhbHVlc1xuICAgICAgICAgICAgICAgIGlmIChjZmcucmVzZXRWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlcXVlc3QuYWRkUGFyYW0ocG9zdFBhcmFtcywgUHJpbWVGYWNlcy5SRVNFVF9WQUxVRVNfUEFSQU0sIHRydWUsIHBhcmFtZXRlclByZWZpeCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9pZ25vcmVBdXRvVXBkYXRlXG4gICAgICAgICAgICAgICAgaWYgKGNmZy5pZ25vcmVBdXRvVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYWpheC5SZXF1ZXN0LmFkZFBhcmFtKHBvc3RQYXJhbXMsIFByaW1lRmFjZXMuSUdOT1JFX0FVVE9fVVBEQVRFX1BBUkFNLCB0cnVlLCBwYXJhbWV0ZXJQcmVmaXgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vc2tpcCBjaGlsZHJlblxuICAgICAgICAgICAgICAgIGlmIChjZmcuc2tpcENoaWxkcmVuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5hZGRQYXJhbShwb3N0UGFyYW1zLCBQcmltZUZhY2VzLlNLSVBfQ0hJTERSRU5fUEFSQU0sIGZhbHNlLCBwYXJhbWV0ZXJQcmVmaXgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vcHJvY2Vzc1xuICAgICAgICAgICAgICAgIHZhciBwcm9jZXNzQXJyYXkgPSBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5yZXNvbHZlQ29tcG9uZW50c0ZvckFqYXhDYWxsKCRzb3VyY2UsIGNmZywgJ3Byb2Nlc3MnKTtcbiAgICAgICAgICAgICAgICBpZihjZmcuZnJhZ21lbnRQcm9jZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NBcnJheS5wdXNoKGNmZy5mcmFnbWVudFByb2Nlc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0ID09IEBub25lXG4gICAgICAgICAgICAgICAgdmFyIHByb2Nlc3NJZHMgPSAnQG5vbmUnO1xuICAgICAgICAgICAgICAgIC8vIHVzZSBkZWZpbmVkIHByb2Nlc3MgKyByZXNvbHZlZCBrZXl3b3JkcyAoQHdpZGdldCwgUEZTKT9cbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzc0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0lkcyA9IHByb2Nlc3NBcnJheS5qb2luKCcgJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrIHRvIEBhbGwgaWYgbm8gcHJvY2VzcyB3YXMgZGVmaW5lZCBieSB0aGUgdXNlclxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmaW5lZFByb2Nlc3MgPSBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5yZXNvbHZlQ29tcG9uZW50c0ZvckFqYXhDYWxsKCRzb3VyY2UsIGNmZywgJ3Byb2Nlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZmluZWRQcm9jZXNzID09PSB1bmRlZmluZWQgfHwgZGVmaW5lZFByb2Nlc3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzSWRzID0gJ0BhbGwnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghcHJvY2Vzc0lkcy5pbmNsdWRlcygnQG5vbmUnKSkge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5hZGRQYXJhbShwb3N0UGFyYW1zLCBQcmltZUZhY2VzLlBBUlRJQUxfUFJPQ0VTU19QQVJBTSwgcHJvY2Vzc0lkcywgcGFyYW1ldGVyUHJlZml4KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL3VwZGF0ZVxuICAgICAgICAgICAgICAgIHZhciB1cGRhdGVBcnJheSA9IFByaW1lRmFjZXMuYWpheC5SZXF1ZXN0LnJlc29sdmVDb21wb25lbnRzRm9yQWpheENhbGwoJHNvdXJjZSwgY2ZnLCAndXBkYXRlJyk7XG4gICAgICAgICAgICAgICAgaWYoY2ZnLmZyYWdtZW50VXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFycmF5LnB1c2goY2ZnLmZyYWdtZW50VXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodXBkYXRlQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5hZGRQYXJhbShwb3N0UGFyYW1zLCBQcmltZUZhY2VzLlBBUlRJQUxfVVBEQVRFX1BBUkFNLCB1cGRhdGVBcnJheS5qb2luKCcgJyksIHBhcmFtZXRlclByZWZpeCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9iZWhhdmlvciBldmVudFxuICAgICAgICAgICAgICAgIGlmKGNmZy5ldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5hZGRQYXJhbShwb3N0UGFyYW1zLCBQcmltZUZhY2VzLkJFSEFWSU9SX0VWRU5UX1BBUkFNLCBjZmcuZXZlbnQsIHBhcmFtZXRlclByZWZpeCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRvbUV2ZW50ID0gY2ZnLmV2ZW50O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGNmZy5ldmVudCA9PT0gJ3ZhbHVlQ2hhbmdlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbUV2ZW50ID0gJ2NoYW5nZSc7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoY2ZnLmV2ZW50ID09PSAnYWN0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbUV2ZW50ID0gJ2NsaWNrJztcblxuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5hZGRQYXJhbShwb3N0UGFyYW1zLCBQcmltZUZhY2VzLlBBUlRJQUxfRVZFTlRfUEFSQU0sIGRvbUV2ZW50LCBwYXJhbWV0ZXJQcmVmaXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlcXVlc3QuYWRkUGFyYW0ocG9zdFBhcmFtcywgc291cmNlSWQsIHNvdXJjZUlkLCBwYXJhbWV0ZXJQcmVmaXgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vcGFyYW1zXG4gICAgICAgICAgICAgICAgaWYoY2ZnLnBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5hZGRQYXJhbXMocG9zdFBhcmFtcywgY2ZnLnBhcmFtcywgcGFyYW1ldGVyUHJlZml4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY2ZnLmV4dCAmJiBjZmcuZXh0LnBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5hZGRQYXJhbXMocG9zdFBhcmFtcywgY2ZnLmV4dC5wYXJhbXMsIHBhcmFtZXRlclByZWZpeCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdHJ5IHRvIGdldCBwYXJ0aWFsU3VibWl0IGZyb20gZ2xvYmFsIGNvbmZpZ1xuICAgICAgICAgICAgICAgIGlmIChjZmcucGFydGlhbFN1Ym1pdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNmZy5wYXJ0aWFsU3VibWl0ID0gUHJpbWVGYWNlcy5zZXR0aW5ncy5wYXJ0aWFsU3VibWl0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3Igb3ZlcndyaXRlXG4gICAgICAgICAgICAgICAgaWYgKGNmZy5leHQgJiYgY2ZnLmV4dC5wYXJ0aWFsU3VibWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNmZy5wYXJ0aWFsU3VibWl0ID0gY2ZnLmV4dC5wYXJ0aWFsU3VibWl0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIE9ubHkgYWRkIHBhcmFtcyBvZiBwcm9jZXNzIGNvbXBvbmVudHMgYW5kIHRoZWlyIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICogaWYgcGFydGlhbCBzdWJtaXQgaXMgZW5hYmxlZCBhbmQgdGhlcmUgYXJlIGNvbXBvbmVudHMgdG8gcHJvY2VzcyBwYXJ0aWFsbHlcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZihjZmcucGFydGlhbFN1Ym1pdCAmJiBwcm9jZXNzSWRzLmluZGV4T2YoJ0BhbGwnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm1Qcm9jZXNzZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzc0lkcy5pbmRleE9mKCdAbm9uZScpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnRpYWxTdWJtaXRGaWx0ZXIgPSBjZmcucGFydGlhbFN1Ym1pdEZpbHRlcnx8JzppbnB1dCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb2Nlc3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBqcVByb2Nlc3MgPSAkKFByaW1lRmFjZXMuZXNjYXBlQ2xpZW50SWQocHJvY2Vzc0FycmF5W2ldKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbXBvbmVudFBvc3RQYXJhbXMgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoanFQcm9jZXNzLmlzKCdmb3JtJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UG9zdFBhcmFtcyA9IGpxUHJvY2Vzcy5zZXJpYWxpemVBcnJheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtUHJvY2Vzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG11bHRpcGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbkZvckZpbGVzID0gc2NhbkZvckZpbGVzLmFkZChqcVByb2Nlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoanFQcm9jZXNzLmlzKCc6aW5wdXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRQb3N0UGFyYW1zID0ganFQcm9jZXNzLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdWx0aXBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYW5Gb3JGaWxlcyA9IHNjYW5Gb3JGaWxlcy5hZGQoanFQcm9jZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbHRlcmVkID0ganFQcm9jZXNzLmZpbmQocGFydGlhbFN1Ym1pdEZpbHRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFBvc3RQYXJhbXMgPSBmaWx0ZXJlZC5zZXJpYWxpemVBcnJheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobXVsdGlwYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FuRm9yRmlsZXMgPSBzY2FuRm9yRmlsZXMuYWRkKGZpbHRlcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RQYXJhbXMgPSBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5hcnJheUNvbXBhcmUoY29tcG9uZW50UG9zdFBhcmFtcywgcG9zdFBhcmFtcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2ZnLmV4dCAmJiBjZmcuZXh0LnBhcnRpYWxTdWJtaXRQYXJhbWV0ZXJGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbHRlcmVkUGFyYW1zID0gY2ZnLmV4dC5wYXJ0aWFsU3VibWl0UGFyYW1ldGVyRmlsdGVyLmNhbGwodGhpcywgY29tcG9uZW50UG9zdFBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQubWVyZ2UocG9zdFBhcmFtcywgZmlsdGVyZWRQYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5tZXJnZShwb3N0UGFyYW1zLCBjb21wb25lbnRQb3N0UGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvL2FkZCBmb3JtIHN0YXRlIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZvcm1Qcm9jZXNzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZhY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5hZGRQYXJhbUZyb21JbnB1dChwb3N0UGFyYW1zLCBQcmltZUZhY2VzLlZJRVdfU1RBVEUsIGZvcm0sIHBhcmFtZXRlclByZWZpeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5hZGRQYXJhbUZyb21JbnB1dChwb3N0UGFyYW1zLCBQcmltZUZhY2VzLkNMSUVOVF9XSU5ET1csIGZvcm0sIHBhcmFtZXRlclByZWZpeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQcmltZUZhY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5hZGRQYXJhbUZyb21JbnB1dChwb3N0UGFyYW1zLCBQcmltZUZhY2VzLmNzcC5OT05DRV9JTlBVVCwgZm9ybSwgcGFyYW1ldGVyUHJlZml4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbHRhU3Bpa2VcbiAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYWpheC5SZXF1ZXN0LmFkZFBhcmFtRnJvbUlucHV0KHBvc3RQYXJhbXMsICdkc1Bvc3RXaW5kb3dJZCcsIGZvcm0sIHBhcmFtZXRlclByZWZpeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5hZGRQYXJhbUZyb21JbnB1dChwb3N0UGFyYW1zLCAnZHNwd2lkJywgZm9ybSwgcGFyYW1ldGVyUHJlZml4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNwcmluZyBTZWN1cml0eVxuICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlcXVlc3QuYWRkUGFyYW1Gcm9tSW5wdXQocG9zdFBhcmFtcywgJ19jc3JmJywgZm9ybSwgcGFyYW1ldGVyUHJlZml4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkLm1lcmdlKHBvc3RQYXJhbXMsIGZvcm0uc2VyaWFsaXplQXJyYXkoKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdWx0aXBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYW5Gb3JGaWxlcyA9IHNjYW5Gb3JGaWxlcy5hZGQoZm9ybSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgcG9zdFBhcmFtIGlmIGFscmVhZHkgYXZhaWxhYmxlIGluIGVhcmx5UG9zdFBhcmFtc1xuICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBza2lwIGZpbGVzIGhlcmUsIHRoZXkgbGlrZWx5IHdvbnQgY2hhbmdlIGR1cmluZyB0aGF0IHRpbWVcbiAgICAgICAgICAgICAgICBpZiAoUHJpbWVGYWNlcy5zZXR0aW5ncy5lYXJseVBvc3RQYXJhbUV2YWx1YXRpb24gJiYgY2ZnLmVhcmx5UG9zdFBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICBwb3N0UGFyYW1zID0gUHJpbWVGYWNlcy5hamF4LlJlcXVlc3QuYXJyYXlDb21wYXJlKGNmZy5lYXJseVBvc3RQYXJhbXMsIHBvc3RQYXJhbXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICQubWVyZ2UocG9zdFBhcmFtcywgY2ZnLmVhcmx5UG9zdFBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gc2NhbiBmb3IgZmlsZXMgYW5kIGFwcGVuZCB0byBmb3JtRGF0YVxuICAgICAgICAgICAgICAgIGlmIChtdWx0aXBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGVJbnB1dHMgPSAkKCk7XG4gICAgICAgICAgICAgICAgICAgIHNjYW5Gb3JGaWxlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICR2YWx1ZSA9ICQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCR2YWx1ZS5pcygnOmlucHV0W3R5cGU9XCJmaWxlXCJdJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlSW5wdXRzID0gZmlsZUlucHV0cy5hZGQoJHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVJbnB1dHMgPSBmaWxlSW5wdXRzLmFkZCgkdmFsdWUuZmluZCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGZpbGVJbnB1dHMuZWFjaChmdW5jdGlvbihpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUuZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQodmFsdWUuaWQsIHZhbHVlLmZpbGVzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHhock9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA6IHBvc3RVUkwsXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgY2FjaGUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGUgOiBcInhtbFwiLFxuICAgICAgICAgICAgICAgICAgICBwb3J0bGV0Rm9ybXM6IFByaW1lRmFjZXMuYWpheC5VdGlscy5nZXRQb3JsZXRGb3Jtcyhmb3JtLCBwYXJhbWV0ZXJQcmVmaXgpLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IGNmZy5zb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKHhociwgc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdGYWNlcy1SZXF1ZXN0JywgJ3BhcnRpYWwvYWpheCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnBmU2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgICAgICAgICAgICAgICAgIHhoci5wZkFyZ3MgPSB7fTsgLy8gZGVmYXVsdCBzaG91bGQgYmUgYW4gZW1wdHkgb2JqZWN0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdsb2JhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ3BmQWpheFNlbmQnLCBbeGhyLCB0aGlzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gIzYzNjAgcmVzcGVjdCBmb3JtIGVuY3R5cGUgbXVsdGlwYXJ0L2Zvcm0tZGF0YVxuICAgICAgICAgICAgICAgIGlmIChtdWx0aXBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKHBvc3RQYXJhbXMsIGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHZhbHVlLm5hbWUsIHZhbHVlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgeGhyT3B0aW9ucy5kYXRhID0gZm9ybURhdGE7XG4gICAgICAgICAgICAgICAgICAgIHhock9wdGlvbnMuZW5jdHlwZSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcbiAgICAgICAgICAgICAgICAgICAgeGhyT3B0aW9ucy5wcm9jZXNzRGF0YSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB4aHJPcHRpb25zLmNvbnRlbnRUeXBlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcG9zdERhdGEgPSAkLnBhcmFtKHBvc3RQYXJhbXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuZGVidWcoJ1Bvc3QgRGF0YTonICsgcG9zdERhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgIHhock9wdGlvbnMuZGF0YSA9IHBvc3REYXRhO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBub25jZSA9IGZvcm0uY2hpbGRyZW4oXCJpbnB1dFtuYW1lPSdcIiArIENTUy5lc2NhcGUoUHJpbWVGYWNlcy5jc3AuTk9OQ0VfSU5QVVQpICsgXCInXVwiKTtcbiAgICAgICAgICAgICAgICBpZiAobm9uY2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB4aHJPcHRpb25zLm5vbmNlID0gbm9uY2UudmFsKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNmZy50aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHhock9wdGlvbnNbJ3RpbWVvdXQnXSA9IGNmZy50aW1lb3V0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBqcVhociA9ICQuYWpheCh4aHJPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAuZmFpbChmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZmcucHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNmZy5wcm9taXNlLnJlamVjdCh7anFYSFI6IHhociwgdGV4dFN0YXR1czogc3RhdHVzLCBlcnJvclRocm93bjogZXJyb3JUaHJvd259KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKFwiTG9jYXRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gNDAxICYmIGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5kZWJ1ZygnVW5hdXRob3JpemVkIHN0YXR1cyByZWNlaXZlZC4gUmVkaXJlY3RpbmcgdG8gJyArIGxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjZmcub25lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNmZy5vbmVycm9yLmNhbGwodGhpcywgeGhyLCBzdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNmZy5leHQgJiYgY2ZnLmV4dC5vbmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2ZnLmV4dC5vbmVycm9yLmNhbGwodGhpcywgeGhyLCBzdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcigncGZBamF4RXJyb3InLCBbeGhyLCB0aGlzLCBlcnJvclRocm93bl0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmVycm9yKCdSZXF1ZXN0IHJldHVybiB3aXRoIGVycm9yOicgKyBzdGF0dXMgKyAnLicpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZG9uZShmdW5jdGlvbihkYXRhLCBzdGF0dXMsIHhocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5kZWJ1ZygnUmVzcG9uc2UgcmVjZWl2ZWQgc3VjY2Vzc2Z1bGx5LicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyc2VkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzb2x2ZSBwcm9taXNlIGZvciBjdXN0b20gSmF2YVNjcmlwdCBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJvbWlzZSBoYW5kbGVycyBhcmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5IHNvIHRoZXkgYXJlIHJ1biBhZnRlciB0aGUgcmVzcG9uc2Ugd2FzIGhhbmRsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2ZnLnByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2ZnLnByb21pc2UucmVzb2x2ZSh7ZG9jdW1lbnQ6IGRhdGEsIHRleHRTdGF0dXM6IHN0YXR1cywganFYSFI6IHhocn0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2FsbCB1c2VyIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2ZnLm9uc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWQgPSBjZmcub25zdWNjZXNzLmNhbGwodGhpcywgZGF0YSwgc3RhdHVzLCB4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZXh0ZW5zaW9uIGNhbGxiYWNrIHRoYXQgbWlnaHQgcGFyc2UgcmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjZmcuZXh0ICYmIGNmZy5leHQub25zdWNjZXNzICYmICFwYXJzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0gY2ZnLmV4dC5vbnN1Y2Nlc3MuY2FsbCh0aGlzLCBkYXRhLCBzdGF0dXMsIHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZ2xvYmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ3BmQWpheFN1Y2Nlc3MnLCBbeGhyLCB0aGlzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kbyBub3QgZXhlY3V0ZSBkZWZhdWx0IGhhbmRsZXIgYXMgcmVzcG9uc2UgYWxyZWFkeSBoYXMgYmVlbiBwYXJzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwYXJzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlc3BvbnNlLmhhbmRsZShkYXRhLCBzdGF0dXMsIHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihnbG9iYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdwZkFqYXhVcGRhdGVkJywgW3hociwgdGhpcywgeGhyLnBmQXJnc10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmRlYnVnKCdET00gaXMgdXBkYXRlZC4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmFsd2F5cyhmdW5jdGlvbihkYXRhLCBzdGF0dXMsIHhocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmlyc3QgY2FsbCB0aGUgZXh0ZW5zaW9uIGNhbGxiYWNrIChlLmcuIGRhdGF0YWJsZSBwYWdpbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjZmcuZXh0ICYmIGNmZy5leHQub25jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNmZy5leHQub25jb21wbGV0ZS5jYWxsKHRoaXMsIHhociwgc3RhdHVzLCB4aHIucGZBcmdzLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWZ0ZXIgdGhhdCwgY2FsbCB0aGUgZW5kIHVzZXIncyBjYWxsYmFjaywgd2hpY2ggc2hvdWxkIGJlIGNhbGxlZCB3aGVuIGV2ZXJ5dGhpbmcgaXMgcmVhZHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNmZy5vbmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2ZnLm9uY29tcGxldGUuY2FsbCh0aGlzLCB4aHIsIHN0YXR1cywgeGhyLnBmQXJncywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGdsb2JhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ3BmQWpheENvbXBsZXRlJywgW3hociwgdGhpcywgeGhyLnBmQXJnc10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmRlYnVnKCdSZXNwb25zZSBjb21wbGV0ZWQuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYWpheC5RdWV1ZS5yZW1vdmVYSFIoeGhyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWNmZy5hc3luYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYWpheC5RdWV1ZS5wb2xsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlF1ZXVlLmFkZFhIUihqcVhocik7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENvbGxlY3RzIGFsbCBgcHJvY2Vzc2Agb3IgYHVwZGF0ZWAgc2VhcmNoIGV4cHJlc3Npb25zIGZyb20gdGhlIGdpdmVuIEFKQVggY2FsbCBjb25maWd1cmF0aW9uIGFuZCByZXR1cm5zXG4gICAgICAgICAgICAgKiB0aGVtIGFzIG9uZSBzZWFyY2ggZXhwcmVzc2lvbi5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7UGFydGlhbDxQcmltZUZhY2VzLmFqYXguQ29uZmlndXJhdGlvbj59IGNmZyBBbiBBSkFYIGNhbGwgY29uZmlndXJhdGlvbi5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7XCJwcm9jZXNzXCIgfCBcInVwZGF0ZVwifSB0eXBlIFdoZXRoZXIgdG8gcmVzb2x2ZSB0aGUgYHByb2Nlc3NgIG9yIGB1cGRhdGVgIGV4cHJlc3Npb25zLlxuICAgICAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBBbGwgcHJvY2VzcyBvciB1cGRhdGUgc2VhcmNoIGV4cHJlc3Npb24gZnJvbSB0aGUgZ2l2ZW4gY29uZmlndXJhdGlvbi5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVzb2x2ZUV4cHJlc3Npb25zRm9yQWpheENhbGw6IGZ1bmN0aW9uKGNmZywgdHlwZSkge1xuICAgICAgICAgICAgICAgIHZhciBleHByZXNzaW9ucyA9ICcnO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNmZ1t0eXBlXSkge1xuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9ucyArPSBjZmdbdHlwZV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNmZy5leHQgJiYgY2ZnLmV4dFt0eXBlXSkge1xuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9ucyArPSBcIiBcIiArIGNmZy5leHRbdHlwZV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4cHJlc3Npb25zO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBHaXZlbiBhbiBBSkFYIGNhbGwgY29uZmlndXJhdGlvbiwgcmVzb2x2ZXMgdGhlIGNvbXBvbmVudHMgZm9yIHRoZSBgcHJvY2Vzc2Agb3IgYHVwZGF0ZWAgc2VhcmNoXG4gICAgICAgICAgICAgKiBleHByZXNzaW9ucyBnaXZlbiBieSB0aGUgY29uZmlndXJhdGlvbnMuIFJlc29sdmVzIHRoZSBzZWFyY2ggZXhwcmVzc2lvbnMgdG8gdGhlIGFjdHVhbCBjb21wb25lbnRzIGFuZFxuICAgICAgICAgICAgICogcmV0dXJucyBhIGxpc3Qgb2YgdGhlaXIgSURzLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBzb3VyY2UgdGhlIHNvdXJjZSBlbGVtZW50LlxuICAgICAgICAgICAgICogQHBhcmFtIHtQYXJ0aWFsPFByaW1lRmFjZXMuYWpheC5Db25maWd1cmF0aW9uPn0gY2ZnIEFuIEFKQVggY2FsbCBjb25maWd1cmF0aW9uLlxuICAgICAgICAgICAgICogQHBhcmFtIHtcInByb2Nlc3NcIiB8IFwidXBkYXRlXCJ9IHR5cGUgV2hldGhlciB0byByZXNvbHZlIHRoZSBgcHJvY2Vzc2Agb3IgYHVwZGF0ZWAgZXhwcmVzc2lvbnMuXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmdbXX0gQSBsaXN0IG9mIElEcyB3aXRoIHRoZSBjb21wb25lbnRzIHRvIHdoaWNoIHRoZSBwcm9jZXNzIG9yIHVwZGF0ZSBleHByZXNzaW9ucyByZWZlci5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVzb2x2ZUNvbXBvbmVudHNGb3JBamF4Q2FsbDogZnVuY3Rpb24oc291cmNlLCBjZmcsIHR5cGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXhwcmVzc2lvbnMgPSBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5yZXNvbHZlRXhwcmVzc2lvbnNGb3JBamF4Q2FsbChjZmcsIHR5cGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcmltZUZhY2VzLmV4cHJlc3Npb25zLlNlYXJjaEV4cHJlc3Npb25GYWNhZGUucmVzb2x2ZUNvbXBvbmVudHMoc291cmNlLCBleHByZXNzaW9ucyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEFwcGVuZHMgYSByZXF1ZXN0IHBhcmFtZXRlciB0byB0aGUgZ2l2ZW4gbGlzdCBvZiBwYXJhbWV0ZXJzLlxuICAgICAgICAgICAgICogT3B0aW9uYWxseSBhZGQgYSBwcmVmaXggdG8gdGhlIG5hbWUsIHRoaXMgaXMgdXNlZCBmb3IgcG9ydGxldCBuYW1lc3BhY2luZy5cbiAgICAgICAgICAgICAqIEB0ZW1wbGF0ZSBbVFZhbHVlPXVua25vd25dIFR5cGUgb2YgdGhlIHBhcmFtZXRlciB2YWx1ZS5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy5hamF4LlJlcXVlc3RQYXJhbWV0ZXI8c3RyaW5nLCBUVmFsdWU+W119IHBhcmFtcyBMaXN0IG9mIHBhcmFtZXRlcnMgdG8gd2hpY2ggYSBuZXdcbiAgICAgICAgICAgICAqIHBhcmFtZXRlciBpcyBhZGRlZC5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIG5ldyBwYXJhbWV0ZXIgdG8gYWRkLlxuICAgICAgICAgICAgICogQHBhcmFtIHtUVmFsdWV9IHZhbHVlIFZhbHVlIG9mIHRoZSBwYXJhbWV0ZXIgdG8gYWRkLlxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbWV0ZXJQcmVmaXhdIE9wdGlvbmFsIHByZWZpeCB0aGF0IGlzIGFkZGVkIGluIGZyb250IG9mIHRoZSBuYW1lLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBhZGRQYXJhbTogZnVuY3Rpb24ocGFyYW1zLCBuYW1lLCB2YWx1ZSwgcGFyYW1ldGVyUHJlZml4KSB7XG4gICAgICAgICAgICAgICAgLy8gYWRkIG5hbWVzcGFjZSBpZiBub3QgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlclByZWZpeCB8fCAhbmFtZS5pbmRleE9mKHBhcmFtZXRlclByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goeyBuYW1lOnBhcmFtZXRlclByZWZpeCArIG5hbWUsIHZhbHVlOnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goeyBuYW1lOm5hbWUsIHZhbHVlOnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBcHBlbmRzIGEgcmVxdWVzdCBwYXJhbWV0ZXIgdG8gdGhlIGdpdmVuIGxpc3Qgb2YgcGFyYW1ldGVycy5cbiAgICAgICAgICAgICAqIE9wdGlvbmFsbHkgYWRkIGEgcHJlZml4IHRvIHRoZSBuYW1lLCB0aGlzIGlzIHVzZWQgZm9yIHBvcnRsZXQgbmFtZXNwYWNpbmcuXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0Zvcm1EYXRhfSBmb3JtRGF0YSB0aGUgZm9ybSBkYXRhIHRvIGFkZCB0byB0aGUgZm9ybS5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIG5ldyBwYXJhbWV0ZXIgdG8gYWRkLlxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmcgfCBCbG9ifSB2YWx1ZSBWYWx1ZSBvZiB0aGUgcGFyYW1ldGVyIHRvIGFkZC5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcGFyYW1ldGVyUHJlZml4XSBPcHRpb25hbCBwcmVmaXggdGhhdCBpcyBhZGRlZCBpbiBmcm9udCBvZiB0aGUgbmFtZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgYWRkRm9ybURhdGE6IGZ1bmN0aW9uKGZvcm1EYXRhLCBuYW1lLCB2YWx1ZSwgcGFyYW1ldGVyUHJlZml4KSB7XG4gICAgICAgICAgICAgICAgLy8gYWRkIG5hbWVzcGFjZSBpZiBub3QgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlclByZWZpeCB8fCAhbmFtZS5pbmRleE9mKHBhcmFtZXRlclByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHBhcmFtZXRlclByZWZpeCArIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBZGRzIGEgbGlzdCBvZiBjYWxsYmFjayBwYXJhbWV0ZXJzIHRvIHRoZSBnaXZlbiBsaXN0LiBPcHRpb25hbGx5IHByZXBlbmRzIGEgcHJlZml4IHRvIHRoZSBuYW1lIG9mIGVhY2hcbiAgICAgICAgICAgICAqIGFkZGVkIHBhcmFtZXRlci5cbiAgICAgICAgICAgICAqIEB0ZW1wbGF0ZSBbVFZhbHVlPXVua25vd25dIFR5cGUgb2YgdGhlIHBhcmFtZXRlciB2YWx1ZXMuXG4gICAgICAgICAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMuYWpheC5SZXF1ZXN0UGFyYW1ldGVyPHN0cmluZywgVFZhbHVlPltdfSBwYXJhbXMgTGlzdCBvZiBjYWxsYmFjayBwYXJhbWV0ZXJzIHRvIHdoaWNoXG4gICAgICAgICAgICAgKiBwYXJhbWV0ZXJzIGFyZSBhZGRlZC5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy5hamF4LlJlcXVlc3RQYXJhbWV0ZXI8c3RyaW5nLCBUVmFsdWU+W119IHBhcmFtc1RvQWRkIExpc3Qgb2YgY2FsbGJhY2sgcGFyYW1ldGVycyB0b1xuICAgICAgICAgICAgICogYWRkLlxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbWV0ZXJQcmVmaXhdIE9wdGlvbmFsIHByZWZpeCB0aGF0IGlzIGFkZGVkIGluIGZyb250IG9mIHRoZSBuYW1lIG9mIHRoZSBhZGRlZFxuICAgICAgICAgICAgICogY2FsbGJhY2sgcGFyYW1ldGVycy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgYWRkUGFyYW1zOiBmdW5jdGlvbihwYXJhbXMsIHBhcmFtc1RvQWRkLCBwYXJhbWV0ZXJQcmVmaXgpIHtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW1zVG9BZGQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gcGFyYW1zVG9BZGRbaV07XG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBuYW1lc3BhY2UgaWYgbm90IGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVyUHJlZml4ICYmICFwYXJhbS5uYW1lLmluZGV4T2YocGFyYW1ldGVyUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW0ubmFtZSA9IHBhcmFtZXRlclByZWZpeCArIHBhcmFtLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChwYXJhbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBZGRzIGEgbmV3IHJlcXVlc3QgcGFyYW1ldGVyIHRvIHRoZSBnaXZlbiBsaXN0LiBUaGUgdmFsdWUgb2YgdGhlIHBhcmFtZXRlciBpcyB0YWtlbiBmcm9tIHRoZSBpbnB1dFxuICAgICAgICAgICAgICogZWxlbWVudCBvZiB0aGUgZ2l2ZW4gZm9ybS4gVGhlIGlucHV0IGVsZW1lbnQgbXVzdCBoYXZlIHRoZSBzYW1lIG5hbWUgYXMgdGhlIG5hbWUgb2YgdGhlIHBhcmFtZXRlciB0byBhZGQuXG4gICAgICAgICAgICAgKiBPcHRpb25hbGx5IGFkZCBhIHByZWZpeCB0byB0aGUgbmFtZSwgd2hpY2ggdXNlZCBmb3IgcG9ydGxldCBuYW1lc3BhY2luZy5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy5hamF4LlJlcXVlc3RQYXJhbWV0ZXJbXX0gcGFyYW1zIExpc3Qgb2YgcmVxdWVzdCBwYXJhbWV0ZXJzIHRvIHRoZSBuZXdcbiAgICAgICAgICAgICAqIHBhcmFtZXRlciBpcyBhZGRlZC5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIG5ldyBwYXJhbWV0ZXIgdG8gYWRkXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0pRdWVyeX0gZm9ybSBBbiBIVE1MIEZPUk0gZWxlbWVudCB0aGF0IGNvbnRhaW5zIGFuIElOUFVUIGVsZW1lbnQgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcGFyYW1ldGVyUHJlZml4XSBPcHRpb25hbCBwcmVmaXggdGhhdCBpcyBhZGRlZCBpbiBmcm9udCBvZiB0aGUgbmFtZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgYWRkUGFyYW1Gcm9tSW5wdXQ6IGZ1bmN0aW9uKHBhcmFtcywgbmFtZSwgZm9ybSwgcGFyYW1ldGVyUHJlZml4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZXNjYXBlZE5hbWUgPSBDU1MuZXNjYXBlKG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJQcmVmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQgPSBmb3JtLmNoaWxkcmVuKFwiaW5wdXRbbmFtZSo9J1wiICsgZXNjYXBlZE5hbWUgKyBcIiddXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQgPSBmb3JtLmNoaWxkcmVuKFwiaW5wdXRbbmFtZT0nXCIgKyBlc2NhcGVkTmFtZSArIFwiJ11cIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0ICYmIGlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5wdXQudmFsKCk7XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYWpheC5SZXF1ZXN0LmFkZFBhcmFtKHBhcmFtcywgbmFtZSwgdmFsdWUsIHBhcmFtZXRlclByZWZpeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEFkZHMgYSBuZXcgcmVxdWVzdCBwYXJhbWV0ZXIgdG8gdGhlIGdpdmVuIEZvcm1EYXRhLiBUaGUgdmFsdWUgb2YgdGhlIHBhcmFtZXRlciBpcyB0YWtlbiBmcm9tIHRoZSBpbnB1dFxuICAgICAgICAgICAgICogZWxlbWVudCBvZiB0aGUgZ2l2ZW4gZm9ybS4gVGhlIGlucHV0IGVsZW1lbnQgbXVzdCBoYXZlIHRoZSBzYW1lIG5hbWUgYXMgdGhlIG5hbWUgb2YgdGhlIHBhcmFtZXRlciB0byBhZGQuXG4gICAgICAgICAgICAgKiBPcHRpb25hbGx5IGFkZCBhIHByZWZpeCB0byB0aGUgbmFtZSwgd2hpY2ggdXNlZCBmb3IgcG9ydGxldCBuYW1lc3BhY2luZy5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhIFRoZSBGb3JtRGF0YS5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgdGhlIG5ldyBwYXJhbWV0ZXIgdG8gYWRkXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0pRdWVyeX0gZm9ybSBBbiBIVE1MIEZPUk0gZWxlbWVudCB0aGF0IGNvbnRhaW5zIGFuIElOUFVUIGVsZW1lbnQgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcGFyYW1ldGVyUHJlZml4XSBPcHRpb25hbCBwcmVmaXggdGhhdCBpcyBhZGRlZCBpbiBmcm9udCBvZiB0aGUgbmFtZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgYWRkRm9ybURhdGFGcm9tSW5wdXQ6IGZ1bmN0aW9uKGZvcm1EYXRhLCBuYW1lLCBmb3JtLCBwYXJhbWV0ZXJQcmVmaXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICBlc2NhcGVkTmFtZSA9IENTUy5lc2NhcGUobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlclByZWZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dCA9IGZvcm0uY2hpbGRyZW4oXCJpbnB1dFtuYW1lKj0nXCIgKyBlc2NhcGVkTmFtZSArIFwiJ11cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dCA9IGZvcm0uY2hpbGRyZW4oXCJpbnB1dFtuYW1lPSdcIiArIGVzY2FwZWROYW1lICsgXCInXVwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQgJiYgaW5wdXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpbnB1dC52YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlcXVlc3QuYWRkRm9ybURhdGEoZm9ybURhdGEsIG5hbWUsIHZhbHVlLCBwYXJhbWV0ZXJQcmVmaXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRmluZHMgdGhlIG5hbWVzcGFjZSAocHJlZml4KSBmb3IgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIGdpdmVuIGZvcm0uXG4gICAgICAgICAgICAgKiBUaGlzIGlzIHJlcXVpcmVkIGZvciBQb3JsZXRzIGFzIGEgUG9ydGxldCBjb250YWlucyBtdWx0aXBsZSBKU0Ygdmlld3MgYW5kIHdlIG11c3Qgb25seSBwcm9jZXNzIGFuZCB1cGRhdGUgdGhlIGZvcm1zL2lucHV0cyBvZiB0aGUgY3VycmVudCB2aWV3IC8gYXBwbGljYXRpb24uXG4gICAgICAgICAgICAgKiBMYXRlciB0aGUgbmFtZXNwYWNlIGlzIHVzZWQgZm9yIGFsbCBwb3N0IHBhcmFtcy5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBmb3JtIEFuIEhUTUwgRk9STSBlbGVtZW50LlxuICAgICAgICAgICAgICogQHJldHVybiB7c3RyaW5nIHwgbnVsbH0gVGhlIG5hbWVzcGFjZSBmb3IgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIGdpdmVuIGZvcm0sIG9yIGBudWxsYCB3aGVuIHRoZSBmb3JtIGRvZXNcbiAgICAgICAgICAgICAqIG5vdCBzcGVjaWZpeSBhIG5hbWVzcGFjZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZXh0cmFjdFBhcmFtZXRlck5hbWVzcGFjZTogZnVuY3Rpb24oZm9ybSkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IGZvcm0uY2hpbGRyZW4oXCJpbnB1dFtuYW1lKj0nXCIgKyBQcmltZUZhY2VzLlZJRVdfU1RBVEUgKyBcIiddXCIpO1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gaW5wdXRbMF0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUubGVuZ3RoID4gUHJpbWVGYWNlcy5WSUVXX1NUQVRFLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hbWUuc3Vic3RyaW5nKDAsIG5hbWUuaW5kZXhPZihQcmltZUZhY2VzLlZJRVdfU1RBVEUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IGFycmF5IHdpdGggYWxsIHBhcmFtZXRlcnMgZnJvbSB0aGUgc2Vjb25kIGFycmF5IHRoYXQgYXJlIG5vdCBpbiB0aGUgZmlyc3QgYXJyYXkuIFRoYXQgaXMsXG4gICAgICAgICAgICAgKiByZW1vdmVzIGFsbCBwYXJhbWV0ZXJzIGZyb20gdGhlIHNlY29uZCBhcnJheSB3aG9zZSBuYW1lIGlzIGVxdWFsIHRvIG9uZSBvZiB0aGUgcGFyYW1ldGVycyBpbiB0aGUgZmlyc3RcbiAgICAgICAgICAgICAqIGFycmF5LiBUaGUgZ2l2ZW4gaW5wdXQgYXJyYXkgYXJlIG5vdCBtb2RpZmllZC5cbiAgICAgICAgICAgICAqIEB0ZW1wbGF0ZSBbVFZhbHVlPXVua25vd25dIFR5cGUgb2YgdGhlIHBhcmFtZXRlciB2YWx1ZXMuXG4gICAgICAgICAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMuYWpheC5SZXF1ZXN0UGFyYW1ldGVyPHN0cmluZywgVFZhbHVlPltdfSBhcnIxIEEgbGlzdCBvZiBwYXJhbWV0ZXJzIGZvciBjb21wYXJpc29uLlxuICAgICAgICAgICAgICogQHBhcmFtIHtQcmltZUZhY2VzLmFqYXguUmVxdWVzdFBhcmFtZXRlcjxzdHJpbmcsIFRWYWx1ZT5bXX0gYXJyMiBBIGxpc3Qgb2YgYWRkaXRpb25hbCBwYXJhbWV0ZXJzLlxuICAgICAgICAgICAgICogQHJldHVybiB7UHJpbWVGYWNlcy5hamF4LlJlcXVlc3RQYXJhbWV0ZXI8c3RyaW5nLCBUVmFsdWU+W119IEFuIGxpc3Qgb2YgcGFyYW1ldGVycyB0aGF0IGFyZSBpbiB0aGUgc2Vjb25kXG4gICAgICAgICAgICAgKiBhcnJheSwgYnV0IG5vdCBpbiB0aGUgZmlyc3QuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGFycmF5Q29tcGFyZTogZnVuY3Rpb24oYXJyMSwgYXJyMikge1xuICAgICAgICAgICAgICAgIC8vIGxvb3AgYXJyMSBwYXJhbXNcbiAgICAgICAgICAgICAgICAkLmVhY2goYXJyMSwgZnVuY3Rpb24oaW5kZXgxLCBwYXJhbTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCBhcnIyIHBhcmFtcyBhbmQgcmVtb3ZlIGl0LCBpZiBpdCdzIHRoZSBzYW1lIHBhcmFtIGFzIHRoZSBhcnIxIHBhcmFtXG4gICAgICAgICAgICAgICAgICAgIGFycjIgPSAkLmdyZXAoYXJyMiwgZnVuY3Rpb24ocGFyYW0yLCBpbmRleDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbTIubmFtZSA9PT0gcGFyYW0xLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyMjtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ3JlYXRlcyBhIEZvcm1EYXRhIHdoaWNoIGNhbiBiZSB1c2VkIGZvciBhIEZhY2VzIEFKQVggcmVxdWVzdCBvbiB0aGUgY3VycmVudCB2aWV3LlxuICAgICAgICAgICAgICogSXQgYWxyZWFkeSBjb250YWlucyBhbGwgcmVxdWlyZWQgcGFyYW1ldGVycyBsaWtlIFZpZXdTdGF0ZSBvciBDbGllbnRXaW5kb3cuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IGZvcm0gVGhlIGNsb3Nlc3QgZm9ybSBvZiB0aGUgcmVxdWVzdCBzb3VyY2UuXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1ldGVyUHJlZml4IFRoZSBQb3J0bGV0IHBhcmFtZXRlciBuYW1lc3BhY2UuXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIFRoZSBpZCBvZiB0aGUgcmVxdWVzdCBzb3VyY2UuXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Byb2Nlc3NdIEEgY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgY29tcG9uZW50cyB3aGljaCBzaG91bGQgYmUgcHJvY2Vzc2VkLlxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt1cGRhdGVdIEEgY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgY29tcG9uZW50cyB3aGljaCBzaG91bGQgYmUgdXBkYXRlZC5cbiAgICAgICAgICAgICAqIEByZXR1cm4ge0Zvcm1EYXRhfSBUaGUgbmV3bHkgY3JlYXRlZCBmb3JtIGRhdGEuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNyZWF0ZUZhY2VzQWpheEZvcm1EYXRhOiBmdW5jdGlvbihmb3JtLCBwYXJhbWV0ZXJQcmVmaXgsIHNvdXJjZSwgcHJvY2VzcywgdXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5hZGRGb3JtRGF0YShmb3JtRGF0YSwgUHJpbWVGYWNlcy5QQVJUSUFMX1JFUVVFU1RfUEFSQU0sIHRydWUsIHBhcmFtZXRlclByZWZpeCk7XG4gICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlcXVlc3QuYWRkRm9ybURhdGEoZm9ybURhdGEsIFByaW1lRmFjZXMuUEFSVElBTF9TT1VSQ0VfUEFSQU0sIHNvdXJjZSwgcGFyYW1ldGVyUHJlZml4KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5hZGRGb3JtRGF0YShmb3JtRGF0YSwgUHJpbWVGYWNlcy5QQVJUSUFMX1BST0NFU1NfUEFSQU0sIHByb2Nlc3MsIHBhcmFtZXRlclByZWZpeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlcXVlc3QuYWRkRm9ybURhdGEoZm9ybURhdGEsIFByaW1lRmFjZXMuUEFSVElBTF9VUERBVEVfUEFSQU0sIHVwZGF0ZSwgcGFyYW1ldGVyUHJlZml4KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBGYWNlc1xuICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYWpheC5SZXF1ZXN0LmFkZEZvcm1EYXRhRnJvbUlucHV0KGZvcm1EYXRhLCBQcmltZUZhY2VzLlZJRVdfU1RBVEUsIGZvcm0sIHBhcmFtZXRlclByZWZpeCk7XG4gICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlcXVlc3QuYWRkRm9ybURhdGFGcm9tSW5wdXQoZm9ybURhdGEsIFByaW1lRmFjZXMuQ0xJRU5UX1dJTkRPVywgZm9ybSwgcGFyYW1ldGVyUHJlZml4KTtcbiAgICAgICAgICAgICAgICAvLyBQcmltZUZhY2VzXG4gICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlcXVlc3QuYWRkRm9ybURhdGFGcm9tSW5wdXQoZm9ybURhdGEsIFByaW1lRmFjZXMuY3NwLk5PTkNFX0lOUFVULCBmb3JtLCBwYXJhbWV0ZXJQcmVmaXgpO1xuICAgICAgICAgICAgICAgIC8vIERlbHRhU3Bpa2VcbiAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5hZGRGb3JtRGF0YUZyb21JbnB1dChmb3JtRGF0YSwgJ2RzUG9zdFdpbmRvd0lkJywgZm9ybSwgcGFyYW1ldGVyUHJlZml4KTtcbiAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5hZGRGb3JtRGF0YUZyb21JbnB1dChmb3JtRGF0YSwgJ2RzcHdpZCcsIGZvcm0sIHBhcmFtZXRlclByZWZpeCk7XG4gICAgICAgICAgICAgICAgLy8gU3ByaW5nIFNlY3VyaXR5XG4gICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlcXVlc3QuYWRkRm9ybURhdGFGcm9tSW5wdXQoZm9ybURhdGEsICdfY3NyZicsIGZvcm0sIHBhcmFtZXRlclByZWZpeCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybURhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpbnRlcmZhY2UgZm9yIHRoZSBvYmplY3QgY29udGFpbmluZyBsb3ctbGV2ZWwgZnVuY3Rpb25hbGl0eSByZWxhdGVkIHRvIGhhbmRsaW5nIEFKQVggcmVzcG9uc2VzLiBOb3RlIHRoYXRcbiAgICAgICAgICogdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBBSkFYIGFjdGlvbnMgYXJlIGhhbmRsZXMgYnkgdGhlIGBQcmltZUZhY2VzLlJlc3BvbnNlUHJvY2Vzc29yYC5cbiAgICAgICAgICogQGludGVyZmFjZSB7UHJpbWVGYWNlcy5hamF4LlJlc3BvbnNlfSAuIFRoZSBpbnRlcmZhY2UgZm9yIHRoZSBvYmplY3QgY29udGFpbmluZyBmdW5jdGlvbmFsaXR5IHJlbGF0ZWQgdG9cbiAgICAgICAgICogaGFuZGxpbmcgQUpBWCByZXNwb25zZXNcbiAgICAgICAgICogQHR5cGUge1ByaW1lRmFjZXMuYWpheC5SZXNwb25zZX1cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICBSZXNwb25zZToge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEhhbmRsZXMgdGhlIHJlc3BvbnNlIG9mIGFuIEFKQVggcmVxdWVzdC4gVGhlIHJlc3BvbnNlIGNvbnNpc3RzIG9mIG9uZSBvciBtb3JlIGFjdGlvbnMgc3VjaCBhcyBleGVjdXRpbmcgYVxuICAgICAgICAgICAgICogc2NyaXB0IG9yIHVwZGF0aW5nIGEgRE9NIGVsZW1lbnQuIFNlZSBhbHNvIHtAbGluayBqc2YuYWpheC5yZXNwb25zZX0uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQWxzbyB1cGRhdGVzIHRoZSBzcGVjaWZpZWQgY29tcG9uZW50cyBpZiBhbnkgYW5kIHN5bmNocm9uaXplcyB0aGUgY2xpZW50IHNpZGUgSlNGIHN0YXRlLiBET00gdXBkYXRlcyBhcmVcbiAgICAgICAgICAgICAqIGltcGxlbWVudGVkIHVzaW5nIGpRdWVyeSB3aGljaCB1c2VzIGEgdmVyeSBhbGdvcml0aG0uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHRlbXBsYXRlIHtQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0fSBbVFdpZGdldD1QcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0XSBUeXBlIG9mIHRoZSB3aWRnZXQgd2hpY2hcbiAgICAgICAgICAgICAqIHRyaWdnZXJlZCB0aGUgQUpBWCByZXF1ZXN0LlxuICAgICAgICAgICAgICogQHBhcmFtIHtYTUxEb2N1bWVudH0geG1sIFRoZSBYTUwgdGhhdCB3YXMgcmV0dXJuZWQgYnkgdGhlIEFKQVggcmVxdWVzdC5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5LkFqYXguU3VjY2Vzc1RleHRTdGF0dXN9IHN0YXR1cyBUZXh0IHN0YXR1cyBvZiB0aGUgcmVxdWVzdC5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy5hamF4LnBmWEhSfSB4aHIgVGhlIFhIUiByZXF1ZXN0IHRvIHdoaWNoIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlxuICAgICAgICAgICAgICogQHBhcmFtIHtQcmltZUZhY2VzLmFqYXguVXBkYXRlSGFuZGxlcjxUV2lkZ2V0Pn0gW3VwZGF0ZUhhbmRsZXJdIE9wdGlvbmFsIGhhbmRsZXIgZm9yIGB1cGRhdGVgIGFjdGlvbnMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGhhbmRsZTogZnVuY3Rpb24oeG1sLCBzdGF0dXMsIHhociwgdXBkYXRlSGFuZGxlcikge1xuICAgICAgICAgICAgICAgIGlmICh4bWwgPT09IHVuZGVmaW5lZCB8fCB4bWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBwYXJ0aWFsUmVzcG9uc2VOb2RlID0geG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFydGlhbC1yZXNwb25zZVwiKVswXTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydGlhbFJlc3BvbnNlTm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHBhcnRpYWxSZXNwb25zZU5vZGUuY2hpbGROb2Rlc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGN1cnJlbnROb2RlLm5vZGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVkaXJlY3RcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIucGZBcmdzLnJlZGlyZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVzcG9uc2VQcm9jZXNzb3IuZG9SZWRpcmVjdChjdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjaGFuZ2VzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50SWQgPSBhY3RpdmVFbGVtZW50LmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnRTZWxlY3Rpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQubGVuZ3RoID4gMCAmJiBhY3RpdmVFbGVtZW50LmlzKCdpbnB1dCcpICYmIHR5cGVvZiAkLmZuLmdldFNlbGVjdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnRTZWxlY3Rpb24gPSBhY3RpdmVFbGVtZW50LmdldFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY3VycmVudE5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudENoYW5nZU5vZGUgPSBjdXJyZW50Tm9kZS5jaGlsZE5vZGVzW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGN1cnJlbnRDaGFuZ2VOb2RlLm5vZGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidXBkYXRlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlc3BvbnNlUHJvY2Vzc29yLmRvVXBkYXRlKGN1cnJlbnRDaGFuZ2VOb2RlLCB4aHIsIHVwZGF0ZUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRlbGV0ZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYWpheC5SZXNwb25zZVByb2Nlc3Nvci5kb0RlbGV0ZShjdXJyZW50Q2hhbmdlTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaW5zZXJ0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlc3BvbnNlUHJvY2Vzc29yLmRvSW5zZXJ0KGN1cnJlbnRDaGFuZ2VOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhdHRyaWJ1dGVzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlc3BvbnNlUHJvY2Vzc29yLmRvQXR0cmlidXRlcyhjdXJyZW50Q2hhbmdlTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZXZhbFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYWpheC5SZXNwb25zZVByb2Nlc3Nvci5kb0V2YWwoY3VycmVudENoYW5nZU5vZGUsIHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZXh0ZW5zaW9uXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlc3BvbnNlUHJvY2Vzc29yLmRvRXh0ZW5zaW9uKGN1cnJlbnRDaGFuZ2VOb2RlLCB4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlc3BvbnNlLmhhbmRsZVJlRm9jdXMoYWN0aXZlRWxlbWVudElkLCBhY3RpdmVFbGVtZW50U2VsZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVzcG9uc2UuZGVzdHJveURldGFjaGVkV2lkZ2V0cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZXZhbFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYWpheC5SZXNwb25zZVByb2Nlc3Nvci5kb0V2YWwoY3VycmVudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZXh0ZW5zaW9uXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlc3BvbnNlUHJvY2Vzc29yLmRvRXh0ZW5zaW9uKGN1cnJlbnROb2RlLCB4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZXJyb3JcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVzcG9uc2VQcm9jZXNzb3IuZG9FcnJvcihjdXJyZW50Tm9kZSwgeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUHV0cyBmb2N1cyBvbiB0aGUgZ2l2ZW4gZWxlbWVudCBpZiBuZWNlc3NhcnkuXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aXZlRWxlbWVudElkIElEIG9mIHRoZSBhY3RpdmUgdG8gcmVmb2N1cy5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy5hamF4LkFjdGl2ZUVsZW1lbnRTZWxlY3Rpb259IFthY3RpdmVFbGVtZW50U2VsZWN0aW9uXSBUaGUgcmFuZ2UgdG8gc2VsZWN0LCBmb3IgSU5QVVRcbiAgICAgICAgICAgICAqIGFuZCBURVhUQVJFQSBlbGVtZW50cy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaGFuZGxlUmVGb2N1cyA6IGZ1bmN0aW9uKGFjdGl2ZUVsZW1lbnRJZCwgYWN0aXZlRWxlbWVudFNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIHNraXAgd2hlbiBjdXN0b21Gb2N1cyBpcyBhY3RpdmVcbiAgICAgICAgICAgICAgICBpZiAoUHJpbWVGYWNlcy5jdXN0b21Gb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmN1c3RvbUZvY3VzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBubyBhY3RpdmUgZWxlbWVudCByZW1lbWJlcmVkXG4gICAgICAgICAgICAgICAgaWYgKCFhY3RpdmVFbGVtZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50VG9Gb2N1cyA9ICQoUHJpbWVGYWNlcy5lc2NhcGVDbGllbnRJZChhY3RpdmVFbGVtZW50SWQpKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFRvRm9jdXMubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWZvY3VzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbHJlYWR5IGZvY3Vzc2VkP1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnRJZCAhPT0gJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5hdHRyKCdpZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VG9Gb2N1cy50cmlnZ2VyKCdmb2N1cycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVhcHBseSBjdXJzb3IgLyBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudFNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VG9Gb2N1cy5zZXRTZWxlY3Rpb24oYWN0aXZlRWxlbWVudFNlbGVjdGlvbi5zdGFydCwgYWN0aXZlRWxlbWVudFNlbGVjdGlvbi5lbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZWZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZXN0cm95cyBhbGwgd2lkZ2V0cyB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGUgRE9NIGFueW1vcmUsIHVzdWFsbHkgYmVjYXVzZSB0aGV5IHdlcmUgcmVtb3ZlZCBieSBhbiBBSkFYXG4gICAgICAgICAgICAgKiB1cGRhdGUuIENhbGxzIHRoZSBgZGVzdHJveWAgbWV0aG9kIG9uIHRoZSB3aWRnZXQgYW5kIHJlbW92ZXMgdGhlIHdpZGdldCBmcm9tIHRoZSBnbG9iYWwgd2lkZ2V0IHJlZ2lzdHJ5LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkZXN0cm95RGV0YWNoZWRXaWRnZXRzIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVzdHJveSBkZXRhY2hlZCB3aWRnZXRzXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBQcmltZUZhY2VzLmRldGFjaGVkV2lkZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgd2lkZ2V0VmFyID0gUHJpbWVGYWNlcy5kZXRhY2hlZFdpZGdldHNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHdpZGdldCA9IFBGKHdpZGdldFZhcik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWRnZXQgJiYgd2lkZ2V0LmlzRGV0YWNoZWQoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBQcmltZUZhY2VzLndpZGdldHNbd2lkZ2V0VmFyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyBQcmltZUZhY2VzLndhcm4oXCJFcnJvciBkZXN0cm95aW5nIHdpZGdldDogXCIgKyB3aWRnZXRWYXIpIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuZGV0YWNoZWRXaWRnZXRzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpbnRlcmZhY2UgZm9yIHRoZSBvYmplY3QgY29udGFpbmluZyBsb3ctbGV2ZWwgZnVuY3Rpb25hbGl0eSByZWxhdGVkIHRvIHByb2Nlc3NpbmcgdGhlIGRpZmZlcmVudCB0eXBlc1xuICAgICAgICAgKiBvZiBhY3Rpb25zIGZyb20gQUpBWCByZXNwb25zZXMuXG4gICAgICAgICAqIEBpbnRlcmZhY2Uge1ByaW1lRmFjZXMuYWpheC5SZXNwb25zZVByb2Nlc3Nvcn0gLiBUaGUgaW50ZXJmYWNlIGZvciB0aGUgb2JqZWN0IGNvbnRhaW5pbmcgZnVuY3Rpb25hbGl0eSByZWxhdGVkIHRvXG4gICAgICAgICAqIHByb2Nlc3NpbmcgdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBhY3Rpb25zIGZyb20gQUpBWCByZXNwb25zZXMuXG4gICAgICAgICAqIEB0eXBlIHtQcmltZUZhY2VzLmFqYXguUmVzcG9uc2VQcm9jZXNzb3J9XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgUmVzcG9uc2VQcm9jZXNzb3I6IHtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBIYW5kbGVzIGEgYHJlZGlyZWN0YCBBSkFYIGFjdGlvbiBieSBwZXJmb3JtaW5nIGEgcmVkaXJlY3QgdG8gdGhlIHRhcmdldCBVUkwuXG4gICAgICAgICAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIFhNTCBub2RlIG9mIHRoZSBgcmVkaXJlY3RgIGFjdGlvbi5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZG9SZWRpcmVjdCA6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKG5vZGUuZ2V0QXR0cmlidXRlKCd1cmwnKSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy53YXJuKCdFcnJvciByZWRpcmVjdGluZyB0byBVUkw6ICcgKyBub2RlLmdldEF0dHJpYnV0ZSgndXJsJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSGFuZGxlcyBhbiBgdXBkYXRlYCBBSkFYIGFjdGlvbiBieSBjYWxsaW5nIHRoZSBnaXZlbiB1cGRhdGUgaGFuZGxlci4gV2hlbiBubyB1cGRhdGUgaGFuZGxlciBpcyBnaXZlbixcbiAgICAgICAgICAgICAqIHJlcGxhY2VzIHRoZSBIVE1MIGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQgd2l0aCB0aGUgbmV3IGNvbnRlbnQuXG4gICAgICAgICAgICAgKiBAdGVtcGxhdGUge1ByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXR9IFtUV2lkZ2V0PVByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXRdIFR5cGUgb2YgdGhlIHdpZGdldCB3aGljaFxuICAgICAgICAgICAgICogdHJpZ2dlcmVkIHRoZSBBSkFYIHJlcXVlc3QuXG4gICAgICAgICAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIFhNTCBub2RlIG9mIHRoZSBgdXBkYXRlYCBhY3Rpb24uXG4gICAgICAgICAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMuYWpheC5wZlhIUn0geGhyIFRoZSBYSFIgcmVxdWVzdCB0byB3aGljaCBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy5hamF4LlVwZGF0ZUhhbmRsZXI8VFdpZGdldD59IFt1cGRhdGVIYW5kbGVyXSBPcHRpb25hbCBoYW5kbGVyIGZvciB0aGUgdXBkYXRlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkb1VwZGF0ZSA6IGZ1bmN0aW9uKG5vZGUsIHhociwgdXBkYXRlSGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBQcmltZUZhY2VzLmFqYXguVXRpbHMuZ2V0Q29udGVudChub2RlKTtcblxuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVIYW5kbGVyICYmIHVwZGF0ZUhhbmRsZXIud2lkZ2V0ICYmIHVwZGF0ZUhhbmRsZXIud2lkZ2V0LmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVIYW5kbGVyLmhhbmRsZS5jYWxsKHVwZGF0ZUhhbmRsZXIud2lkZ2V0LCBjb250ZW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguVXRpbHMudXBkYXRlRWxlbWVudChpZCwgY29udGVudCwgeGhyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEhhbmRsZXMgYW4gYGV2YWxgIEFKQVggYWN0aW9uIGJ5IGV2YWx1YXRpbmcgdGhlIHJldHVybmVkIEphdmFTY3JpcHQuXG4gICAgICAgICAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIFhNTCBub2RlIG9mIHRoZSBgZXZhbGAgYWN0aW9uLlxuICAgICAgICAgICAgICogQHBhcmFtIHtQcmltZUZhY2VzLmFqYXgucGZYSFJ9IHhociBUaGUgWEhSIHJlcXVlc3QgdG8gd2hpY2ggYSByZXNwb25zZSB3YXMgcmVjZWl2ZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRvRXZhbCA6IGZ1bmN0aW9uKG5vZGUsIHhocikge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0Q29udGVudCA9IG5vZGUudGV4dENvbnRlbnQgfHwgbm9kZS5pbm5lclRleHQgfHwgbm9kZS50ZXh0O1xuXG4gICAgICAgICAgICAgICAgdmFyIG5vbmNlO1xuICAgICAgICAgICAgICAgIGlmICh4aHIgJiYgeGhyLnBmU2V0dGluZ3MgJiYgeGhyLnBmU2V0dGluZ3Mubm9uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9uY2UgPSB4aHIucGZTZXR0aW5ncy5ub25jZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5jc3AuZXZhbCh0ZXh0Q29udGVudCwgbm9uY2UpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBIYW5kbGVzIGFuIGBleHRlbnNpb25gIEFKQVggYWN0aW9uIGJ5IGV4dGVuZGluZyB0aGUgYHBmQXJnc2AgcHJvcGVydHkgb24gdGhlIGpRdWVyeSBYSFIgb2JqZWN0LlxuICAgICAgICAgICAgICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBYTUwgbm9kZSBvZiB0aGUgYGV4dGVuc2lvbmAgYWN0aW9uLlxuICAgICAgICAgICAgICogQHBhcmFtIHtQcmltZUZhY2VzLmFqYXgucGZYSFJ9IHhociBUaGUgWEhSIHJlcXVlc3QgdG8gd2hpY2ggYSByZXNwb25zZSB3YXMgcmVjZWl2ZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRvRXh0ZW5zaW9uIDogZnVuY3Rpb24obm9kZSwgeGhyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhocikge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoXCJsblwiKSA9PT0gXCJwcmltZWZhY2VzXCIgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcImFyZ3NcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRleHRDb250ZW50ID0gbm9kZS50ZXh0Q29udGVudCB8fCBub2RlLmlubmVyVGV4dCB8fCBub2RlLnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgcGZBcmdzIGFyZSBhbHJlYWR5IGRlZmluZWQgZS5nLiBpZiBQb3J0bGV0IHBhcmFtZXRlciBuYW1lc3BhY2luZyBpcyBlbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgXCJwYXJhbWV0ZXJQcmVmaXhcIiB3aWxsIGJlIGVuY29kZWQgb24gZG9jdW1lbnQgc3RhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBvdGhlciBwYXJhbWV0ZXJzIHdpbGwgYmUgZW5jb2RlZCBvbiBkb2N1bWVudCBlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC0tPiBzZWUgUHJpbWVQYXJ0aWFsUmVzcG9uc2VXcml0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIucGZBcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKHRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIGpzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnBmQXJnc1tuYW1lXSA9IGpzb25bbmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnBmQXJncyA9IEpTT04ucGFyc2UodGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBIYW5kbGVzIGFuIGBlcnJvcmAgQUpBWCBhY3Rpb24gYnkgZG9pbmcgbm90aGluZyBjdXJyZW50bHkuXG4gICAgICAgICAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIFhNTCBub2RlIG9mIHRoZSBgZXJyb3JgIGFjdGlvbi5cbiAgICAgICAgICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy5hamF4LnBmWEhSfSB4aHIgVGhlIFhIUiByZXF1ZXN0IHRvIHdoaWNoIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkb0Vycm9yIDogZnVuY3Rpb24obm9kZSwgeGhyKSB7XG4gICAgICAgICAgICAgICAgLy8gY3VycmVudGx5IG5vdGhpbmcuLi5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSGFuZGxlcyBhIGBkZWxldGVgIEFKQVggYWN0aW9uIGJ5IHJlbW92ZSB0aGUgRE9NIGVsZW1lbnQuXG4gICAgICAgICAgICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIFhNTCBub2RlIG9mIHRoZSBgZGVsZXRlYCBhY3Rpb24uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRvRGVsZXRlIDogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgICAgICAgICQoUHJpbWVGYWNlcy5lc2NhcGVDbGllbnRJZChpZCkpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBIYW5kbGVzIGFuIGBpbnNlcnRgIEFKQVggYWN0aW9uIGJ5IGluc2VydGluZyBhIG5ld2x5IGNyZWF0aW5nIERPTSBlbGVtZW50LlxuICAgICAgICAgICAgICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBYTUwgbm9kZSBvZiB0aGUgYGluc2VydGAgYWN0aW9uLlxuICAgICAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbiB8IHVuZGVmaW5lZH0gYGZhbHNlYCBpZiB0aGUgQUpBWCBhY3Rpb24gY291bGQgbm90IGJlIHBlcmZvcm1lZCwgYHRydWVgIG9yIGB1bmRlZmluZWRgXG4gICAgICAgICAgICAgKiBvdGhlcndpc2UuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRvSW5zZXJ0IDogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIGlmICghbm9kZS5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGROb2RlID0gbm9kZS5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBjaGlsZE5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgICAgICAgICAgICB2YXIganEgPSAkKFByaW1lRmFjZXMuZXNjYXBlQ2xpZW50SWQoaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBQcmltZUZhY2VzLmFqYXguVXRpbHMuZ2V0Q29udGVudChjaGlsZE5vZGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGUubm9kZU5hbWUgPT09IFwiYWZ0ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChjb250ZW50KS5pbnNlcnRBZnRlcihqcSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGROb2RlLm5vZGVOYW1lID09PSBcImJlZm9yZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGNvbnRlbnQpLmluc2VydEJlZm9yZShqcSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEhhbmRsZXMgYW4gYGF0dHJpYnV0ZXNgIEFKQVggYWN0aW9uIGJ5IHNldHRpbmcgdGhlIGF0dHJpYnV0ZXMgb24gdGhlIERPTSBlbGVtZW50LlxuICAgICAgICAgICAgICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBYTUwgbm9kZSBvZiB0aGUgYGF0dHJpYnV0ZXNgIGFjdGlvbi5cbiAgICAgICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW4gfCB1bmRlZmluZWR9IGBmYWxzZWAgaWYgdGhlIEFKQVggYWN0aW9uIGNvdWxkIG5vdCBiZSBwZXJmb3JtZWQsIGB0cnVlYCBvciBgdW5kZWZpbmVkYFxuICAgICAgICAgICAgICogb3RoZXJ3aXNlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkb0F0dHJpYnV0ZXMgOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgICAgICAgIHZhciBqcSA9ICQoUHJpbWVGYWNlcy5lc2NhcGVDbGllbnRJZChpZCkpO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJOb2RlID0gbm9kZS5jaGlsZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXR0ck5hbWUgPSBhdHRyTm9kZS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXR0clZhbHVlID0gYXR0ck5vZGUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhdHRyTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhdHRyVmFsdWUgfHwgYXR0clZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyVmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAganEuYXR0cihhdHRyTmFtZSwgYXR0clZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ubHkgYXZhaWxhYmxlIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBkbyBub3QgdXNlIGluIG5ldyBjb2RlLlxuICAgICAgICAgKiBAZGVwcmVjYXRlZCBVc2UgYFByaW1lRmFjZXMuYWpheC5SZXF1ZXN0LmhhbmRsZWAgaW5zdGVhZC5cbiAgICAgICAgICogQHBhcmFtIHtQYXJ0aWFsPFByaW1lRmFjZXMuYWpheC5Db25maWd1cmF0aW9uPn0gY2ZnIENvbmZpZ3VyYXRpb24gZm9yIHRoZSBBSkFYIHJlcXVlc3QgdG8gc2VuZCwgc3VjaCBhc1xuICAgICAgICAgKiB0aGUgSFRUUCBtZXRob2QsIHRoZSBVUkwsIGFuZCB0aGUgY29udGVudCBvZiB0aGUgcmVxdWVzdC5cbiAgICAgICAgICogQHBhcmFtIHtQYXJ0aWFsPFByaW1lRmFjZXMuYWpheC5Db25maWd1cmF0aW9uRXh0ZW5kZXI+fSBbZXh0XSBPcHRpb25hbCBleHRlbmRlciB3aXRoIGFkZGl0aW9uYWwgb3B0aW9uc1xuICAgICAgICAgKiB0aGF0IG92ZXJ3cml0ZSB0aGUgb3B0aW9ucyBnaXZlbiBpbiBgY2ZnYC5cbiAgICAgICAgICogQHJldHVybiB7dW5kZWZpbmVkfSBBbHdheXMgcmV0dXJucyBgdW5kZWZpbmVkYC5cbiAgICAgICAgICovXG4gICAgICAgIEFqYXhSZXF1ZXN0OiBmdW5jdGlvbihjZmcsIGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIFByaW1lRmFjZXMuYWpheC5SZXF1ZXN0LmhhbmRsZShjZmcsIGV4dCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHVubG9hZEV2ZW50ID0gKFwib25wYWdlaGlkZVwiIGluIHdpbmRvdykgPyBcInBhZ2VoaWRlXCIgOiBcInVubG9hZFwiO1xuICAgICQod2luZG93KS5vbih1bmxvYWRFdmVudCwgZnVuY3Rpb24oKSB7XG4gICAgICAgIFByaW1lRmFjZXMuYWpheC5RdWV1ZS5hYm9ydEFsbCgpO1xuICAgIH0pO1xuXG59IiwgImlmICghUHJpbWVGYWNlcy5jc3ApIHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvYmplY3Qgd2l0aCBmdW5jdGlvbmFsaXR5IHJlbGF0ZWQgdG8gaGFuZGxpbmcgdGhlIGBzY3JpcHQtc3JjYCBkaXJlY3RpdmUgb2YgdGhlIEhUVFAgQ29udGVudC1TZWN1cml0eS1Qb2xpY3lcbiAgICAgKiAoQ1NQKSBwb2xpY3kuIFRoaXMgbWFrZXMgdXNlIG9mIGEgbm9uY2UgKG51bWJlciB1c2VkIG9uY2UpLiBUaGUgc2VydmVyIG11c3QgZ2VuZXJhdGUgYSB1bmlxdWUgbm9uY2UgdmFsdWUgZWFjaFxuICAgICAqIHRpbWUgaXQgdHJhbnNtaXRzIGEgcG9saWN5LiBcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICovXG4gICAgUHJpbWVGYWNlcy5jc3AgPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWUgb2YgdGhlIFBPU1QgcGFyYW1ldGVyIGZvciB0cmFuc21pdHRpbmcgdGhlIG5vbmNlLlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIE5PTkNFX0lOUFVUIDogXCJwcmltZWZhY2VzLm5vbmNlXCIsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgbm9uY2UgdG8gYmUgdXNlZC5cbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIE5PTkNFX1ZBTFVFIDogXCJcIixcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFwIG9mIGN1cnJlbnRseSByZWdpc3RlcmVkIENTUCBldmVudHMgb24gdGhpcyBwYWdlLlxuICAgICAgICAgKiBAdHlwZSB7TWFwPHN0cmluZyxNYXA8c3RyaW5nLGJvb2xlYW4+Pn1cbiAgICAgICAgICovXG4gICAgICAgIEVWRU5UX1JFR0lTVFJZIDogbmV3IE1hcCgpLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSBnaXZlbiBub25jZSB0byBhbGwgZm9ybXMgb24gdGhlIGN1cnJlbnQgcGFnZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5vbmNlIE5vbmNlIHRvIHNldC4gVGhpcyB2YWx1ZSBpcyB1c3VhbGx5IHN1cHBsaWVkIGJ5IHRoZSBzZXJ2ZXIuXG4gICAgICAgICAqL1xuICAgICAgICBpbml0IDogZnVuY3Rpb24obm9uY2UpIHtcbiAgICAgICAgICAgIFByaW1lRmFjZXMuY3NwLk5PTkNFX1ZBTFVFID0gbm9uY2U7XG5cbiAgICAgICAgICAgIHZhciBmb3JtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZm9ybSA9IGZvcm1zW2ldO1xuICAgICAgICAgICAgICAgIGlmICghUHJpbWVGYWNlcy5jc3AuaXNGYWNlc0Zvcm0oZm9ybSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gZm9ybS5lbGVtZW50c1tQcmltZUZhY2VzLmNzcC5OT05DRV9JTlBVVF07XG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBQcmltZUZhY2VzLmNzcC5OT05DRV9JTlBVVCk7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBub25jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gZm9ybSBpcyBhIEZhY2VzIGZvcm0uXG4gICAgICAgICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gW2Zvcm1dIFRoZSBmb3JtIHRvIGNoZWNrLlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBmb3JtIGlzIGEgRmFjZXMgZm9ybS5cbiAgICAgICAgICovXG4gICAgICAgIGlzRmFjZXNGb3JtOiBmdW5jdGlvbihmb3JtKSB7XG4gICAgICAgICAgICBpZiAoZm9ybS5tZXRob2QgPT09ICdwb3N0Jykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGZvcm0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBjaGlsZC5uYW1lICYmIGNoaWxkLm5hbWUuaW5jbHVkZXMoUHJpbWVGYWNlcy5WSUVXX1NUQVRFKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBJRCBvZiBhbiBlbGVtZW50XG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbZXZlbnRdIEV2ZW50IHRvIGxpc3RlbiB0bywgd2l0aCB0aGUgYG9uYCBwcmVmaXgsIHN1Y2ggYXMgYG9uY2xpY2tgIG9yIGBvbmJsdXJgLlxuICAgICAgICAgKiBAcGFyYW0geygpID0+IGJvb2xlYW59IFtqc10gQ2FsbGJhY2sgdGhhdCBtYXkgcmV0dXJuIGBmYWxzZWAgdG8gcHJldmVudCB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiB0aGUgZXZlbnQuXG4gICAgICAgICAqL1xuICAgICAgICByZWdpc3RlcjogZnVuY3Rpb24oaWQsIGV2ZW50LCBqcyl7XG4gICAgICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2hvcnRlbmVkRXZlbnQgPSBldmVudC5zdWJzdHJpbmcoMiwgZXZlbnQubGVuZ3RoKSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSxcbiAgICAgICAgICAgICAgICAgICAganFFdmVudCA9IHNob3J0ZW5lZEV2ZW50ICsgJy4nICsgaWQsXG4gICAgICAgICAgICAgICAgICAgIGlzQWpheGlmaWVkID0gUHJpbWVGYWNlcy5hamF4LlV0aWxzLmlzQWpheFJlcXVlc3QoanMudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgZXZlbnRoYW5kbGVyIHJldHVybiBmYWxzZSwgd2UgbXVzdCB1c2UgcHJldmVudERlZmF1bHRcbiAgICAgICAgICAgICAgICB2YXIganNXcmFwcGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJldFZhbCA9IGpzLmNhbGwoZWxlbWVudCwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmV0VmFsID09PSBmYWxzZSAmJiAodHlwZW9mIGV2ZW50LmNhbmNlbGFibGUgIT09ICdib29sZWFuJyB8fCBldmVudC5jYW5jZWxhYmxlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyAjOTAwMiBib2R5IG9ubG9hZCByZXdyaXRlIGFzIHdpbmRvdyBvbmxvYWRcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQgPT09ICdvbmxvYWQnICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQm9keUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IHdpbmRvdztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLm9mZihqcUV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAub24oanFFdmVudCwganNXcmFwcGVyKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1hamF4JywgaXNBamF4aWZpZWQpO1xuXG4gICAgICAgICAgICAgICAgLy9Db2xsZWN0IHNvbWUgYmFzaWMgaW5mb3JtYXRpb24gYWJvdXQgcmVnaXN0ZXJlZCBBSkFYaWZpZWQgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgaWYgKCFQcmltZUZhY2VzLmlzUHJvZHVjdGlvblByb2plY3RTdGFnZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghUHJpbWVGYWNlcy5jc3AuRVZFTlRfUkVHSVNUUlkuaGFzKGlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5jc3AuRVZFTlRfUkVHSVNUUlkuc2V0KGlkLCBuZXcgTWFwKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuY3NwLkVWRU5UX1JFR0lTVFJZLmdldChpZCkuc2V0KGpxRXZlbnQsIGlzQWpheGlmaWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERvZXMgdGhpcyBjb21wb25lbnQgaGF2ZSBhIHJlZ2lzdGVyZWQgQUpBWCBldmVudC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIElEIG9mIGFuIGVsZW1lbnRcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtldmVudF0gRXZlbnQgdG8gbGlzdGVuIHRvLCB3aXRoIHRoZSBgb25gIHByZWZpeCwgc3VjaCBhcyBgb25jbGlja2Agb3IgYG9uYmx1cmAuXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW58dW5kZWZpbmVkfSB0cnVlIGlmIGNvbXBvbmVudCBoYXMgdGhpcyBBSkFYIGV2ZW50XG4gICAgICAgICAqL1xuICAgICAgICBoYXNSZWdpc3RlcmVkQWpheGlmaWVkRXZlbnQ6IGZ1bmN0aW9uKGlkLCBldmVudCkge1xuICAgICAgICAgICAgaWYgKFByaW1lRmFjZXMuaXNQcm9kdWN0aW9uUHJvamVjdFN0YWdlKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUHJpbWVGYWNlcyBDU1AgcmVnaXN0cnkgbWF5IG5vdCBiZSB1c2VkIGluIEpTRiBQcm9kdWN0aW9uIG1vZGUuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChQcmltZUZhY2VzLmNzcC5FVkVOVF9SRUdJU1RSWS5oYXMoaWQpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNob3J0ZW5lZEV2ZW50ID0gZXZlbnQuc3Vic3RyaW5nKDIsIGV2ZW50Lmxlbmd0aCksXG4gICAgICAgICAgICAgICAgICAgIGpxRXZlbnQgPSBzaG9ydGVuZWRFdmVudCArICcuJyArIGlkO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcmltZUZhY2VzLmNzcC5FVkVOVF9SRUdJU1RSWS5nZXQoaWQpLmdldChqcUV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUGVyZm9ybSBhIENTUCBzYWZlIGBldmFsKClgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30ganMgVGhlIEphdmFTY3JpcHQgY29kZSB0byBldmFsdWF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtub25jZVZhbHVlXSBOb25jZSB2YWx1ZS4gTGVhdmUgb3V0IGlmIG5vdCB1c2luZyBDU1AuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbd2luZG93Q29udGV4dF0gT3B0aW9uYWwgV2luZG93IGNvbnRleHQgdG8gY2FsbCBldmFsIGZyb20uXG4gICAgICAgICAqL1xuICAgICAgICBldmFsOiBmdW5jdGlvbiAoanMsIG5vbmNlVmFsdWUsIHdpbmRvd0NvbnRleHQpIHtcbiAgICAgICAgICAgIC8vIGFzc2lnbiB0aGUgTk9OQ0UgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgaWYgKG5vbmNlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0ge25vbmNlOiBub25jZVZhbHVlfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUHJpbWVGYWNlcy5jc3AuTk9OQ0VfVkFMVUUpIHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93Q29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0ge25vbmNlOiB3aW5kb3dDb250ZXh0LlByaW1lRmFjZXMuY3NwLk5PTkNFX1ZBTFVFfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0ge25vbmNlOiBQcmltZUZhY2VzLmNzcC5OT05DRV9WQUxVRX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBldmFsdWF0ZSB0aGUgc2NyaXB0XG4gICAgICAgICAgICBpZiAod2luZG93Q29udGV4dCkge1xuICAgICAgICAgICAgICAgICQuZ2xvYmFsRXZhbChqcywgb3B0aW9ucywgd2luZG93Q29udGV4dC5kb2N1bWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQuZ2xvYmFsRXZhbChqcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICogUGVyZm9ybSBhIENTUCBzYWZlIGBldmFsKClgIHdpdGggYSByZXR1cm4gcmVzdWx0IHZhbHVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30ganMgVGhlIEphdmFTY3JpcHQgY29kZSB0byBldmFsdWF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtub25jZVZhbHVlXSBOb25jZSB2YWx1ZS4gTGVhdmUgb3V0IGlmIG5vdCB1c2luZyBDU1AuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbd2luZG93Q29udGV4dF0gT3B0aW9uYWwgV2luZG93IGNvbnRleHQgdG8gY2FsbCBldmFsIGZyb20uXG4gICAgICAgICAqIEByZXR1cm4ge3Vua25vd259IFRoZSByZXN1bHQgb2YgdGhlIGV2YWx1YXRlZCBKYXZhU2NyaXB0IGNvZGUuXG4gICAgICAgICAqIEBzZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMzOTQ1MjM2LzUwMjM2NlxuICAgICAgICAgKi9cbiAgICAgICAgZXZhbFJlc3VsdDogZnVuY3Rpb24gKGpzLCBub25jZVZhbHVlLCB3aW5kb3dDb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgZXhlY3V0ZUpzID0gXCJ2YXIgY3NwUmVzdWx0ID0gXCIgKyBqcztcbiAgICAgICAgICAgIFByaW1lRmFjZXMuY3NwLmV2YWwoZXhlY3V0ZUpzLCBub25jZVZhbHVlLCB3aW5kb3dDb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dDb250ZXh0ID8gd2luZG93Q29udGV4dC5jc3BSZXN1bHQgOiBjc3BSZXN1bHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENTUCB3b24ndCBhbGxvdyBzdHJpbmctdG8tSmF2YVNjcmlwdCBtZXRob2RzIGxpa2UgYGV2YWwoKWAgYW5kIGBuZXcgRnVuY3Rpb24oKWAuXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIHVzZXMgSlF1ZXJ5IGBnbG9iYWxFdmFsYCB0byBzYWZlbHkgZXZhbHVhdGUgdGhlIGZ1bmN0aW9uIGlmIENTUCBpcyBlbmFibGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpZCBUaGUgZWxlbWVudCBleGVjdXRpbmcgdGhlIGZ1bmN0aW9uIChha2EgYHRoaXNgKS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGpzIFRoZSBKYXZhU2NyaXB0IGNvZGUgdG8gZXZhbHVhdGUuIFR3byB2YXJpYWJsZXMgd2lsbCBiZSBpbiBzY29wZSBmb3IgdGhlIGNvZGU6IChhKSB0aGVcbiAgICAgICAgICogYHRoaXNgIGNvbnRleHQsIHdoaWNoIGlzIHNldCB0byB0aGUgZ2l2ZW4gYGlkYCwgYW5kIChiKSB0aGUgYGV2ZW50YCB2YXJpYWJsZSwgd2hpY2ggaXMgc2V0IHRvIHRoZSBnaXZlbiBgZWAuXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5LlRyaWdnZXJlZEV2ZW50fSBlIFRoZSBldmVudCBmcm9tIHRoZSBjYWxsZXIgdG8gcGFzcyB0aHJvdWdoLlxuICAgICAgICAgKi9cbiAgICAgICAgZXhlY3V0ZUV2ZW50OiBmdW5jdGlvbihpZCwganMsIGUpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgd3JhcHBlciBmdW5jdGlvblxuICAgICAgICAgICAgdmFyIHNjcmlwdEV2YWwgPSAndmFyIGNzcEZ1bmN0aW9uID0gZnVuY3Rpb24oZXZlbnQpeycrIGpzICsnfSc7XG5cbiAgICAgICAgICAgIC8vIGV2YWx1YXRlIEpTIGludG8gYSBmdW5jdGlvblxuICAgICAgICAgICAgUHJpbWVGYWNlcy5jc3AuZXZhbChzY3JpcHRFdmFsLCBQcmltZUZhY2VzLmNzcC5OT05DRV9WQUxVRSk7XG5cbiAgICAgICAgICAgIC8vIGNhbGwgdGhlIGZ1bmN0aW9uXG4gICAgICAgICAgICBjc3BGdW5jdGlvbi5jYWxsKGlkLCBlKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2l0SHViICM1NzkwOiBXaGVuIHVzaW5nIGpRdWVyeSB0byB0cmlnZ2VyIGEgY2xpY2sgZXZlbnQgb24gYSBidXR0b24gd2hpbGUgdXNpbmcgQ1NQXG4gICAgICAgICAqIHdlIG11c3Qgc2V0IHByZXZlbnREZWZhdWx0IG9yIGVsc2UgaXQgd2lsbCB0cmlnZ2VyIGEgbm9uLWFqYXggYnV0dG9uIGNsaWNrLlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IHRhcmdldCBUaGUgdGFyZ2V0IG9mIHRoaXMgY2xpY2sgZXZlbnQuXG4gICAgICAgICAqIEByZXR1cm4ge0pRdWVyeS5UcmlnZ2VyZWRFdmVudH0gdGhlIEpRdWVyeSBjbGljayBldmVudFxuICAgICAgICAgKi9cbiAgICAgICAgY2xpY2tFdmVudDogZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICB2YXIgY2xpY2tFdmVudCA9ICQuRXZlbnQoICdjbGljaycgKTtcbiAgICAgICAgICAgIGlmIChQcmltZUZhY2VzLmNzcC5OT05DRV9WQUxVRSAmJiB0YXJnZXQuYXR0cignZGF0YS1hamF4JykgIT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2xpY2tFdmVudDtcbiAgICAgICAgfVxuXG4gICAgfTtcblxufTsiLCAiaWYgKCFQcmltZUZhY2VzLmV4cHJlc3Npb25zKSB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb2JqZWN0IHdpdGggZnVuY3Rpb25hbGl0eSByZWxhdGVkIHRvIHdvcmtpbmcgd2l0aCBzZWFyY2ggZXhwcmVzc2lvbnMuXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqL1xuICAgIFByaW1lRmFjZXMuZXhwcmVzc2lvbnMgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlcmZhY2Ugb2YgdGhlIG9iamVjdCB3aXRoIGFsbCBtZXRob2RzIGZvciB3b3JraW5nIHdpdGggc2VhcmNoIGV4cHJlc3Npb25zLlxuICAgICAqIEBpbnRlcmZhY2Uge1ByaW1lRmFjZXMuZXhwcmVzc2lvbnMuU2VhcmNoRXhwcmVzc2lvbkZhY2FkZU9iamVjdH1cbiAgICAgKiBAY29uc3RhbnQge1ByaW1lRmFjZXMuZXhwcmVzc2lvbnMuU2VhcmNoRXhwcmVzc2lvbkZhY2FkZX0gLiBUaGUgb2JqZWN0IHdpdGggYWxsIG1ldGhvZHMgZm9yIHdvcmtpbmcgd2l0aCBzZWFyY2hcbiAgICAgKiBleHByZXNzaW9ucy5cbiAgICAgKi9cbiAgICBQcmltZUZhY2VzLmV4cHJlc3Npb25zLlNlYXJjaEV4cHJlc3Npb25GYWNhZGUgPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRha2VzIGEgc2VhcmNoIGV4cHJlc3Npb24gdGhhdCBtYXkgY29udGFpbiBtdWx0aXBsZSBjb21wb25lbnRzLCBzZXBhcmF0ZWQgYnkgY29tbWFzIG9yIHdoaXRlc3BhY2VzLiBSZXNvbHZlc1xuICAgICAgICAgKiBlYWNoIHNlYXJjaCBleHByZXNzaW9uIHRvIHRoZSBjb21wb25lbnQgaXQgcmVmZXJzIHRvIGFuZCByZXR1cm5zIGEgSlF1ZXJ5IG9iamVjdCB3aXRoIHRoZSBET00gZWxlbWVudHMgb2ZcbiAgICAgICAgICogdGhlIHJlc29sdmVkIGNvbXBvbmVudHMuXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBzb3VyY2UgdGhlIHNvdXJjZSBlbGVtZW50IHdoZXJlIHRvIHN0YXJ0IHRoZSBzZWFyY2ggKGUuZy4gcmVxdWlyZWQgZm9yIEBmb3JtKS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmcgfCBIVE1MRWxlbWVudCB8IEpRdWVyeX0gZXhwcmVzc2lvbnMgQSBzZWFyY2ggZXhwcmVzc2lvbiB3aXRoIG9uZSBvciBtdWx0aXBsZSBjb21wb25lbnRzIHRvIHJlc29sdmUuXG4gICAgICAgICAqIEByZXR1cm4ge0pRdWVyeX0gQSBsaXN0IHdpdGggdGhlIHJlc29sdmVkIGNvbXBvbmVudHMuXG4gICAgICAgICAqL1xuICAgICAgICByZXNvbHZlQ29tcG9uZW50c0FzU2VsZWN0b3I6IGZ1bmN0aW9uKHNvdXJjZSwgZXhwcmVzc2lvbnMpIHtcblxuICAgICAgICAgICAgaWYgKGV4cHJlc3Npb25zIGluc3RhbmNlb2YgJCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleHByZXNzaW9ucztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV4cHJlc3Npb25zIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJChleHByZXNzaW9ucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzcGxpdHRlZEV4cHJlc3Npb25zID0gUHJpbWVGYWNlcy5leHByZXNzaW9ucy5TZWFyY2hFeHByZXNzaW9uRmFjYWRlLnNwbGl0RXhwcmVzc2lvbnMoZXhwcmVzc2lvbnMpO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gJCgpO1xuXG4gICAgICAgICAgICBpZiAoc3BsaXR0ZWRFeHByZXNzaW9ucykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3BsaXR0ZWRFeHByZXNzaW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXhwcmVzc2lvbiA9ICBQcmltZUZhY2VzLnRyaW0oc3BsaXR0ZWRFeHByZXNzaW9uc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleHByZXNzaW9uLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2tpcCB1bnJlc29sdmFibGUga2V5d29yZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHByZXNzaW9uID09ICdAbm9uZScgfHwgZXhwcmVzc2lvbiA9PSAnQGFsbCcgfHwgZXhwcmVzc2lvbi5pbmRleE9mKFwiQG9icyhcIikgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBqdXN0IGEgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHByZXNzaW9uLmluZGV4T2YoXCJAXCIpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMgPSBlbGVtZW50cy5hZGQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV4cHJlc3Npb24pKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAd2lkZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChleHByZXNzaW9uLmluZGV4T2YoXCJAd2lkZ2V0VmFyKFwiKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdpZGdldFZhciA9IGV4cHJlc3Npb24uc3Vic3RyaW5nKDExLCBleHByZXNzaW9uLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3aWRnZXQgPSBQcmltZUZhY2VzLndpZGdldHNbd2lkZ2V0VmFyXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aWRnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMgPSBlbGVtZW50cy5hZGQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh3aWRnZXQuaWQpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy53aWRnZXROb3RBdmFpbGFibGUod2lkZ2V0VmFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQRlNcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGV4cHJlc3Npb24uaW5kZXhPZihcIkAoXCIpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnZlcnRzIHBmcyB0byBqcSBzZWxlY3RvciBlLmcuIEAoZGl2Lm15c3R5bGUgOmlucHV0KSB0byBkaXYubXlzdHlsZSA6aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cyA9IGVsZW1lbnRzLmFkZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZXhwcmVzc2lvbi5zdWJzdHJpbmcoMiwgZXhwcmVzc2lvbi5sZW5ndGggLSAxKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZXhwcmVzc2lvbiA9PSAnQGZvcm0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm0gPSBzb3VyY2UuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuZXJyb3IoXCJDb3VsZCBub3QgcmVzb2x2ZSBAZm9ybSBmb3Igc291cmNlICdcIiArIHNvdXJjZS5hdHRyKCdpZCcpICsgXCInXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHMgPSBlbGVtZW50cy5hZGQoZm9ybVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRha2VzIGEgc2VhcmNoIGV4cHJlc3Npb24gdGhhdCBtYXkgY29udGFpbiBtdWx0aXBsZSBjb21wb25lbnRzLCBzZXBhcmF0ZWQgYnkgY29tbWFzIG9yIHdoaXRlc3BhY2VzLiBSZXNvbHZlc1xuICAgICAgICAgKiBlYWNoIHNlYXJjaCBleHByZXNzaW9uIHRvIHRoZSBjb21wb25lbnQgaXQgcmVmZXJzIHRvIGFuZCByZXR1cm5zIGEgbGlzdCBvZiBJRHMgb2YgdGhlIHJlc29sdmVkIGNvbXBvbmVudHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBzb3VyY2UgdGhlIHNvdXJjZSBlbGVtZW50IHdoZXJlIHRvIHN0YXJ0IHRoZSBzZWFyY2ggKGUuZy4gcmVxdWlyZWQgZm9yIEBmb3JtKS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25zIEEgc2VhcmNoIGV4cHJlc3Npb24gd2l0aCBvbmUgb3IgbXVsdGlwbGUgY29tcG9uZW50cyB0byByZXNvbHZlLlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmdbXX0gQSBsaXN0IG9mIElEcyB3aXRoIHRoZSByZXNvbHZlZCBjb21wb25lbnRzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVzb2x2ZUNvbXBvbmVudHM6IGZ1bmN0aW9uKHNvdXJjZSwgZXhwcmVzc2lvbnMpIHtcbiAgICAgICAgICAgIHZhciBzcGxpdHRlZEV4cHJlc3Npb25zID0gUHJpbWVGYWNlcy5leHByZXNzaW9ucy5TZWFyY2hFeHByZXNzaW9uRmFjYWRlLnNwbGl0RXhwcmVzc2lvbnMoZXhwcmVzc2lvbnMpLFxuICAgICAgICAgICAgaWRzID0gW107XG5cbiAgICAgICAgICAgIGlmIChzcGxpdHRlZEV4cHJlc3Npb25zKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGxpdHRlZEV4cHJlc3Npb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleHByZXNzaW9uID0gIFByaW1lRmFjZXMudHJpbShzcGxpdHRlZEV4cHJlc3Npb25zW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cHJlc3Npb24ubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBqdXN0IGEgaWQgb3IgcGFzc3Ryb3VnaCBrZXl3b3Jkc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4cHJlc3Npb24uaW5kZXhPZihcIkBcIikgPT0gLTEgfHwgZXhwcmVzc2lvbiA9PSAnQG5vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGV4cHJlc3Npb24gPT0gJ0BhbGwnIHx8IGV4cHJlc3Npb24uaW5kZXhPZihcIkBvYnMoXCIpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIVByaW1lRmFjZXMuaW5BcnJheShpZHMsIGV4cHJlc3Npb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkcy5wdXNoKGV4cHJlc3Npb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB3aWRnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGV4cHJlc3Npb24uaW5kZXhPZihcIkB3aWRnZXRWYXIoXCIpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2lkZ2V0VmFyID0gZXhwcmVzc2lvbi5zdWJzdHJpbmcoMTEsIGV4cHJlc3Npb24ubGVuZ3RoIC0gMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0ID0gUHJpbWVGYWNlcy53aWRnZXRzW3dpZGdldFZhcl07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2lkZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghUHJpbWVGYWNlcy5pbkFycmF5KGlkcywgd2lkZ2V0LmlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRzLnB1c2god2lkZ2V0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMud2lkZ2V0Tm90QXZhaWxhYmxlKHdpZGdldFZhcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUEZTXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChleHByZXNzaW9uLmluZGV4T2YoXCJAKFwiKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb252ZXJ0cyBwZnMgdG8ganEgc2VsZWN0b3IgZS5nLiBAKGRpdi5teXN0eWxlIDppbnB1dCkgdG8gZGl2Lm15c3R5bGUgOmlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gJChleHByZXNzaW9uLnN1YnN0cmluZygyLCBleHByZXNzaW9uLmxlbmd0aCAtIDEpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZWxlbWVudHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAkKGVsZW1lbnRzW2pdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50SWQgPSBlbGVtZW50LmRhdGEoUHJpbWVGYWNlcy5DTElFTlRfSURfREFUQSkgfHwgZWxlbWVudC5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGllbnRJZCAmJiAhUHJpbWVGYWNlcy5pbkFycmF5KGlkcywgY2xpZW50SWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZHMucHVzaChjbGllbnRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChleHByZXNzaW9uID09ICdAZm9ybScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybSA9IHNvdXJjZS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5lcnJvcihcIkNvdWxkIG5vdCByZXNvbHZlIEBmb3JtIGZvciBzb3VyY2UgJ1wiICsgc291cmNlLmF0dHIoJ2lkJykgKyBcIidcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2xpZW50SWQgPSBmb3JtLmRhdGEoUHJpbWVGYWNlcy5DTElFTlRfSURfREFUQSkgfHwgZm9ybS5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIVByaW1lRmFjZXMuaW5BcnJheShpZHMsIGNsaWVudElkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRzLnB1c2goY2xpZW50SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaWRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTcGxpdHMgdGhlIGdpdmVuIHNlYXJjaCBleHByZXNzaW9uIGludG8gaXRzIGNvbXBvbmVudHMuIFRoZSBjb21wb25lbnRzIG9mIGEgc2VhcmNoIGV4cHJlc3Npb24gYXJlIHNlcGFyYXRlZFxuICAgICAgICAgKiBieSBlaXRoZXIgYSBjb21tYW4gb3IgYSB3aGl0ZXNwYWNlLlxuICAgICAgICAgKiBgYGBqYXZhc2NyaXB0XG4gICAgICAgICAqIHNwbGl0RXhwcmVzc2lvbnMoXCJcIikgLy8gPT4gW1wiXCJdXG4gICAgICAgICAqIHNwbGl0RXhwcmVzc2lvbnMoXCJmb3JtXCIpIC8vID0+IFtcImZvcm1cIl1cbiAgICAgICAgICogc3BsaXRFeHByZXNzaW9ucyhcImZvcm0saW5wdXRcIikgLy8gPT4gW1wiZm9ybVwiLCBcImlucHV0XCJdXG4gICAgICAgICAqIHNwbGl0RXhwcmVzc2lvbnMoXCJmb3JtIGlucHV0XCIpIC8vID0+IFtcImZvcm1cIiwgXCJpbnB1dFwiXVxuICAgICAgICAgKiBzcGxpdEV4cHJlc3Npb25zKFwiZm9ybSxAY2hpbGQoMSwyKVwiKSAvLyA9PiBbXCJmb3JtXCIsIFwiY2hpbGQoMSwyKVwiXVxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb24gQSBzZWFyY2ggZXhwcmVzc2lvbiB0byBzcGxpdC5cbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nW119IFRoZSBpbmRpdmlkdWFsIGNvbXBvbmVudHMgb2YgdGhlIGdpdmVuIHNlYXJjaCBleHByZXNzaW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgc3BsaXRFeHByZXNzaW9uczogZnVuY3Rpb24oZXhwcmVzc2lvbikge1xuXG4gICAgICAgICAgICB2YXIgZXhwcmVzc2lvbnMgPSBbXTtcbiAgICAgICAgICAgIHZhciBidWZmZXIgPSAnJztcblxuICAgICAgICAgICAgdmFyIHBhcmVudGhlc2VzQ291bnRlciA9IDA7XG5cbiAgICAgICAgICAgIGlmICghZXhwcmVzc2lvbikge3JldHVybiBleHByZXNzaW9uczt9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwcmVzc2lvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjID0gZXhwcmVzc2lvbltpXTtcblxuICAgICAgICAgICAgICAgIGlmIChjID09PSAnKCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50aGVzZXNDb3VudGVyKys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGMgPT09ICcpJykge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRoZXNlc0NvdW50ZXItLTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoKGMgPT09ICcgJyB8fCBjID09PSAnLCcpICYmIHBhcmVudGhlc2VzQ291bnRlciA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBsZXRzIGFkZCB0b2tlbiBpbnNpZGUgYnVmZmVyIHRvIG91ciB0b2tlbnNcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbnMucHVzaChidWZmZXIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBub3cgd2UgbmVlZCB0byBjbGVhciBidWZmZXJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gJyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsZXRzIG5vdCBmb3JnZXQgYWJvdXQgcGFydCBhZnRlciB0aGUgc2VwYXJhdG9yXG4gICAgICAgICAgICBleHByZXNzaW9ucy5wdXNoKGJ1ZmZlcik7XG5cbiAgICAgICAgICAgIHJldHVybiBleHByZXNzaW9ucztcbiAgICAgICAgfVxuICAgIH07XG59IiwgImltcG9ydCB7IGdldFdpZGdldElmUHJlc2VudCB9IGZyb20gXCIuL2NvcmUud2lkZ2V0LnJlZ2lzdHJ5LmpzXCI7XG5cbmlmICghUHJpbWVGYWNlcy51dGlscykge1xuICAgIFxuICAgLyoqXG4gICAgKiBTaG9ydGN1dCBmb3IgaXMgdGhpcyBDTUQgb24gTWFjT3Mgb3IgQ1RSTCBrZXkgb24gb3RoZXIgT1Nlcy4gXG4gICAgKiBAcGFyYW0ge0pRdWVyeS5UcmlnZ2VyZWRFdmVudH0gZSBUaGUga2V5IGV2ZW50IHRoYXQgb2NjdXJyZWQuXG4gICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIGtleSBpcyBhIG1ldGEga2V5LCBvciBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICAqL1xuICAgIFBGLm1ldGFLZXkgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBQcmltZUZhY2VzLnV0aWxzLmlzTWV0YUtleShlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9iamVjdCB3aXRoIHZhcmlvdXMgdXRpbGl0aWVzIG5lZWRlZCBieSBQcmltZUZhY2VzLlxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKi9cbiAgICBQcmltZUZhY2VzLnV0aWxzID0ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaW5kcyB0aGUgZWxlbWVudCB0byB3aGljaCB0aGUgb3ZlcmxheSBwYW5lbCBzaG91bGQgYmUgYXBwZW5kZWQuIElmIG5vbmUgaXMgc3BlY2lmaWVkIGV4cGxpY2l0bHksIGFwcGVuZCB0aGVcbiAgICAgICAgICogcGFuZWwgdG8gdGhlIGJvZHkuXG4gICAgICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy53aWRnZXQuRHluYW1pY092ZXJsYXlXaWRnZXR9IHdpZGdldCBBIHdpZGdldCB0aGF0IGhhcyBhIHBhbmVsIHRvIGJlIGFwcGVuZGVkLlxuICAgICAgICAgKiBAcGFyYW0ge0pRdWVyeX0gdGFyZ2V0IFRoZSBET00gZWxlbWVudCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhpcyBvdmVybGF5XG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBvdmVybGF5IFRoZSBET00gZWxlbWVudCBmb3IgdGhlIG92ZXJsYXkuXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZyB8IG51bGx9IFRoZSBzZWFyY2ggZXhwcmVzc2lvbiBmb3IgdGhlIGVsZW1lbnQgdG8gd2hpY2ggdGhlIG92ZXJsYXkgcGFuZWwgc2hvdWxkIGJlIGFwcGVuZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVzb2x2ZUFwcGVuZFRvOiBmdW5jdGlvbih3aWRnZXQsIHRhcmdldCwgb3ZlcmxheSkge1xuICAgICAgICAgICAgaWYgKHdpZGdldCAmJiB0YXJnZXQgJiYgdGFyZ2V0WzBdKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpYWxvZyA9IHRhcmdldFswXS5jbG9zZXN0KCcudWktZGlhbG9nJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGlhbG9nICYmIG92ZXJsYXkgJiYgb3ZlcmxheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICRkaWFsb2cgPSAkKGRpYWxvZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9zZXQgcG9zaXRpb24gYXMgZml4ZWQgdG8gc2Nyb2xsIHdpdGggZGlhbG9nXG4gICAgICAgICAgICAgICAgICAgIGlmICgkZGlhbG9nLmNzcygncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5jc3MoJ3Bvc2l0aW9uJywgJ2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvL2FwcGVuZCB0byBib2R5IGlmIG5vdCBhbHJlYWR5IGFwcGVuZGVkIGJ5IHVzZXIgY2hvaWNlXG4gICAgICAgICAgICAgICAgICAgIGlmKCF3aWRnZXQuY2ZnLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuY2ZnLmFwcGVuZFRvID0gXCJAKGJvZHkpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2lkZ2V0LmNmZy5hcHBlbmRUbztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB3aWRnZXQuY2ZnLmFwcGVuZFRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRmluZHMgdGhlIGNvbnRhaW5lciBlbGVtZW50IHRvIHdoaWNoIGFuIG92ZXJsYXkgd2lkZ2V0IHNob3VsZCBiZSBhcHBlbmRlZC4gVGhpcyBpcyBlaXRoZXIgdGhlIGVsZW1lbnRcbiAgICAgICAgICogc3BlY2lmaWVkIGJ5IHRoZSB3aWRnZXQgY29uZmlndXJhdGlvbnMncyBgYXBwZW5kVG9gIGF0dHJpYnV0ZSwgb3IgdGhlIGRvY3VtZW50IEJPRFkgZWxlbWVudCBvdGhlcndpc2UuXG4gICAgICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy53aWRnZXQuRHluYW1pY092ZXJsYXlXaWRnZXR9IHdpZGdldCBBIHdpZGdldCB0byBiZSBkaXNwbGF5ZWQgYXMgYW4gb3ZlcmxheS5cbiAgICAgICAgICogQHJldHVybiB7SlF1ZXJ5fSBUaGUgY29udGFpbmVyIERPTSBlbGVtZW50IHRvIHdoaWNoIHRoZSBvdmVybGF5IGlzIHRvIGJlIGFwcGVuZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVzb2x2ZUR5bmFtaWNPdmVybGF5Q29udGFpbmVyOiBmdW5jdGlvbih3aWRnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiB3aWRnZXQuY2ZnLmFwcGVuZFRvXG4gICAgICAgICAgICAgICAgPyBQcmltZUZhY2VzLmV4cHJlc3Npb25zLlNlYXJjaEV4cHJlc3Npb25GYWNhZGUucmVzb2x2ZUNvbXBvbmVudHNBc1NlbGVjdG9yKHdpZGdldC5qcSwgd2lkZ2V0LmNmZy5hcHBlbmRUbylcbiAgICAgICAgICAgICAgICA6ICQoZG9jdW1lbnQuYm9keSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENsZWFudXAgdGhlIGBkZXRhY2hlZGAgb3ZlcmxheS5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgeW91IHVwZGF0ZSBhIGNvbXBvbmVudCwgdGhlIG92ZXJsYXkgaXMgcmVuZGVyZWQgYXMgc3BlY2lmaWVkIGluIHRoZSBjb21wb25lbnQgdHJlZSAoWEhUTUwgdmlldyksIGJ1dCBtb3ZlZFxuICAgICAgICAgKiB0byBhIGRpZmZlcmVudCBjb250YWluZXIgdmlhIEphdmFTY3JpcHQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgbWVhbnMgdGhhdCBhZnRlciBhbiBBSkFYIHVwZGF0ZSwgd2Ugbm93IGhhdmUgMiBvdmVybGF5cyB3aXRoIHRoZSBzYW1lIGlkOlxuICAgICAgICAgKlxuICAgICAgICAgKiAxLiBUaGUgbmV3bHkgcmVuZGVyZWQgb3ZlcmxheSwgYXMgYSBjaGlsZCBvZiB0aGUgZWxlbWVudCBzcGVjaWZpZWQgYnkgdGhlIGNvbXBvbmVudCB0cmVlIChYSFRNTCB2aWV3KVxuICAgICAgICAgKiAxLiBUaGUgb2xkLCBkZXRhY2hlZCBvdmVybGF5LCBhcyBhIGNoaWxkIG9mIHRoZSBlbGVtZW50IHNwZWNpZmllZCBieSBgYXBwZW5kVG9gIGF0dHJpYnV0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBXZSBub3cgbmVlZCB0byByZW1vdmUgdGhlIGRldGFjaGVkIG92ZXJsYXkuIFRoaXMgaXMgZG9uZSBieSB0aGlzIGZ1bmN0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMud2lkZ2V0LkR5bmFtaWNPdmVybGF5V2lkZ2V0fSB3aWRnZXQgVGhlIChvbGQpIG92ZXJsYXkgd2lkZ2V0IGluc3RhbmNlLlxuICAgICAgICAgKiBAcGFyYW0ge0pRdWVyeX0gb3ZlcmxheSBUaGUgRE9NIGVsZW1lbnQgZm9yIHRoZSBvdmVybGF5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3ZlcmxheUlkIElEIG9mIHRoZSBvdmVybGF5LCB1c3VhbGx5IHRoZSB3aWRnZXQgSUQuXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBhcHBlbmRUbyBUaGUgY29udGFpbmVyIHRvIHdoaWNoIHRoZSBvdmVybGF5IGlzIGFwcGVuZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgY2xlYW51cER5bmFtaWNPdmVybGF5OiBmdW5jdGlvbih3aWRnZXQsIG92ZXJsYXksIG92ZXJsYXlJZCwgYXBwZW5kVG8pIHtcbiAgICAgICAgICAgIGlmICh3aWRnZXQuY2ZnLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICAgICAgdmFyIG92ZXJsYXlzID0gJChcIltpZD0nXCIgKyBvdmVybGF5SWQgKyBcIiddXCIpO1xuICAgICAgICAgICAgICAgIGlmIChvdmVybGF5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvLmNoaWxkcmVuKFwiW2lkPSdcIiArIG92ZXJsYXlJZCArIFwiJ11cIikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBvdmVybGF5IGZyb20gdGhlIG92ZXJsYXkgY29udGFpbmVyIGFzIHNwZWNpZmllZCBieSB0aGUgYGFwcGVuZFRvYCBhdHRyaWJ1dGUuXG4gICAgICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy53aWRnZXQuRHluYW1pY092ZXJsYXlXaWRnZXR9IHdpZGdldCBUaGUgb3ZlcmxheSB3aWRnZXQgaW5zdGFuY2UuXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBvdmVybGF5IFRoZSAobmV3KSBET00gZWxlbWVudCBvZiB0aGUgb3ZlcmxheS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG92ZXJsYXlJZCBJRCBvZiB0aGUgdGhlIG92ZXJsYXksIHVzdWFsbHkgdGhlIHdpZGdldCBJRC5cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IGFwcGVuZFRvIFRoZSBjb250YWluZXIgdG8gd2hpY2ggdGhlIG92ZXJsYXkgaXMgYXBwZW5kZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdmVEeW5hbWljT3ZlcmxheTogZnVuY3Rpb24od2lkZ2V0LCBvdmVybGF5LCBvdmVybGF5SWQsIGFwcGVuZFRvKSB7XG4gICAgICAgICAgICBhcHBlbmRUby5jaGlsZHJlbihcIltpZD0nXCIgKyAgb3ZlcmxheUlkICsgXCInXVwiKS5ub3Qob3ZlcmxheSkucmVtb3ZlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIG92ZXJsYXkgd2lkZ2V0IGlzIG1vdmVkIGluIHRoZSBET00gdG8gdGhlIHBvc2l0aW9uIGFzIHNwZWNpZmllZCBieSB0aGUgYGFwcGVuZFRvYCBhdHRyaWJ1dGUuIFRoaXMgZnVuY3Rpb25cbiAgICAgICAgICogbW92ZXMgdGhlIHdpZGdldCB0byBpdHMgcG9zaXRpb24gaW4gdGhlIERPTSBhbmQgcmVtb3ZlcyBvbGQgZWxlbWVudHMgZnJvbSBwcmV2aW91cyBBSkFYIHVwZGF0ZXMuXG4gICAgICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldH0gd2lkZ2V0IFRoZSBvdmVybGF5IHdpZGdldCBpbnN0YW5jZS5cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IG92ZXJsYXkgVGhlIERPTSBlbGVtZW50IGZvciB0aGUgb3ZlcmxheS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG92ZXJsYXlJZCBJRCBvZiB0aGUgb3ZlcmxheSwgdXN1YWxseSB0aGUgd2lkZ2V0IElELlxuICAgICAgICAgKiBAcGFyYW0ge0pRdWVyeX0gYXBwZW5kVG8gVGhlIGNvbnRhaW5lciB0byB3aGljaCB0aGUgb3ZlcmxheSBpcyBhcHBlbmRlZC5cbiAgICAgICAgICovXG4gICAgICAgIGFwcGVuZER5bmFtaWNPdmVybGF5OiBmdW5jdGlvbih3aWRnZXQsIG92ZXJsYXksIG92ZXJsYXlJZCwgYXBwZW5kVG8pIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50UGFyZW50ID0gb3ZlcmxheS5wYXJlbnQoKTtcblxuICAgICAgICAgICAgLy8gc2tpcCB3aGVuIHRoZSBwYXJlbnQgY3VycmVudGx5IGlzIGFscmVhZHkgdGhlIHNhbWVcbiAgICAgICAgICAgIC8vIHRoaXMgbGlrZWx5IGhhcHBlbnMgd2hlbiB0aGUgZGlhbG9nIGlzIHVwZGF0ZWQgZGlyZWN0bHkgaW5zdGVhZCBvZiBhIGNvbnRhaW5lclxuICAgICAgICAgICAgLy8gYXMgb3VyIGFqYXggdXBkYXRlIG1lY2hhbmlzbSBqdXN0IHVwZGF0ZXMgYnkgaWRcbiAgICAgICAgICAgIGlmICghZWxlbWVudFBhcmVudC5pcyhhcHBlbmRUbylcbiAgICAgICAgICAgICAgICAgICAgJiYgIWFwcGVuZFRvLmlzKG92ZXJsYXkpKSB7XG5cbiAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnV0aWxzLnJlbW92ZUR5bmFtaWNPdmVybGF5KHdpZGdldCwgb3ZlcmxheSwgb3ZlcmxheUlkLCBhcHBlbmRUbyk7XG5cbiAgICAgICAgICAgICAgICBvdmVybGF5LmFwcGVuZFRvKGFwcGVuZFRvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIG5ldyAoZW1wdHkpIGNvbnRhaW5lciBmb3IgYSBtb2RhbCBvdmVybGF5LiBBIG1vZGFsIG92ZXJsYXkgaXMgYW4gb3ZlcmxheSB0aGF0IGJsb2NrcyB0aGUgY29udGVudFxuICAgICAgICAgKiBiZWxvdyBpdC4gVG8gcmVtb3ZlIHRoZSBtb2RhbCBvdmVybGF5LCB1c2UgYFByaW1lRmFjZXMudXRpbHMucmVtb3ZlTW9kYWxgLlxuICAgICAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXR9IHdpZGdldCBBbiBvdmVybGF5IHdpZGdldCBpbnN0YW5jZS5cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IG92ZXJsYXkgVGhlIG1vZGFsIG92ZXJsYXkgZWxlbWVudCBzaG91bGQgYmUgYSBESVYuXG4gICAgICAgICAqIEBwYXJhbSB7KCkgPT4gSlF1ZXJ5fSB0YWJiYWJsZXNDYWxsYmFjayBBIHN1cHBsaWVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJuIGEgbGlzdCBvZiB0YWJiYWJsZSBlbGVtZW50cy4gQVxuICAgICAgICAgKiB0YWJiYWJsZSBlbGVtZW50IGlzIGFuIGVsZW1lbnQgdG8gd2hpY2ggdGhlIHVzZXIgY2FuIG5hdmlnYXRlIHRvIHZpYSB0aGUgdGFiIGtleS5cbiAgICAgICAgICogQHJldHVybiB7SlF1ZXJ5fSBUaGUgRE9NIGVsZW1lbnQgZm9yIHRoZSBuZXdseSBhZGRlZCBtb2RhbCBvdmVybGF5IGNvbnRhaW5lci5cbiAgICAgICAgICovXG4gICAgICAgIGFkZE1vZGFsOiBmdW5jdGlvbih3aWRnZXQsIG92ZXJsYXksIHRhYmJhYmxlc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSB3aWRnZXQuaWQsXG4gICAgICAgICAgICAgICAgekluZGV4ID0gb3ZlcmxheS5jc3MoJ3otaW5kZXgnKSAtIDE7XG5cbiAgICAgICAgICAgIGNvbnN0IENvbmZpcm1EaWFsb2cgPSBnZXRXaWRnZXRJZlByZXNlbnQoXCJDb25maXJtRGlhbG9nXCIpO1xuICAgICAgICAgICAgdmFyIHJvbGUgPSBDb25maXJtRGlhbG9nICE9PSB1bmRlZmluZWQgJiYgd2lkZ2V0IGluc3RhbmNlb2YgQ29uZmlybURpYWxvZyA/ICdhbGVydGRpYWxvZycgOiAnZGlhbG9nJztcbiAgICAgICAgICAgIG92ZXJsYXkuYXR0cih7XG4gICAgICAgICAgICAgICAgJ3JvbGUnOiByb2xlXG4gICAgICAgICAgICAgICAgLCdhcmlhLWhpZGRlbic6IGZhbHNlXG4gICAgICAgICAgICAgICAgLCdhcmlhLW1vZGFsJzogdHJ1ZVxuICAgICAgICAgICAgICAgICwnYXJpYS1saXZlJzogJ3BvbGl0ZSdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBQcmltZUZhY2VzLnV0aWxzLnByZXZlbnRUYWJiaW5nKHdpZGdldCwgaWQsIHpJbmRleCwgdGFiYmFibGVzQ2FsbGJhY2spO1xuXG4gICAgICAgICAgICBpZiAod2lkZ2V0LmNmZy5ibG9ja1Njcm9sbCkge1xuICAgICAgICAgICAgICAgIFByaW1lRmFjZXMudXRpbHMucHJldmVudFNjcm9sbGluZygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbW9kYWxJZCA9IGlkICsgJ19tb2RhbCc7XG4gICAgICAgICAgICB2YXIgbW9kYWxPdmVybGF5ID0gJCgnPGRpdiBpZD1cIicgKyBtb2RhbElkICsgJ1wiIGNsYXNzPVwidWktd2lkZ2V0LW92ZXJsYXkgdWktZGlhbG9nLW1hc2tcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgIG1vZGFsT3ZlcmxheS5hcHBlbmRUbygkKGRvY3VtZW50LmJvZHkpKTtcbiAgICAgICAgICAgIG1vZGFsT3ZlcmxheS5jc3MoJ3otaW5kZXgnICwgU3RyaW5nKHpJbmRleCkpO1xuXG4gICAgICAgICAgICByZXR1cm4gbW9kYWxPdmVybGF5O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHaXZlbiBhIG1vZGFsIG92ZXJsYXksIHByZXZlbnRzIG5hdmlnYXRpbmcgdmlhIHRoZSB0YWIga2V5IHRvIGVsZW1lbnRzIG91dHNpZGUgb2YgdGhhdCBtb2RhbCBvdmVybGF5LiBVc2VcbiAgICAgICAgICogYFByaW1lRmFjZXMudXRpbHMuZW5hYmxlVGFiYmluZ2AgdG8gcmVzdG9yZSB0aGUgb3JpZ2luYWwgYmVoYXZpb3IuXG4gICAgICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldH0gd2lkZ2V0IEFuIG92ZXJsYXkgd2lkZ2V0IGluc3RhbmNlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgSUQgb2YgYSBtb2RhbCBvdmVybGF5IHdpZGdldC5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHpJbmRleCBUaGUgei1pbmRleCBvZiB0aGUgbW9kYWwgb3ZlcmxheS5cbiAgICAgICAgICogQHBhcmFtIHsoKSA9PiBKUXVlcnl9IHRhYmJhYmxlc0NhbGxiYWNrIEEgc3VwcGxpZXIgZnVuY3Rpb24gdGhhdCByZXR1cm4gYSBsaXN0IG9mIHRhYmJhYmxlIGVsZW1lbnRzLiBBXG4gICAgICAgICAqIHRhYmJhYmxlIGVsZW1lbnQgaXMgYW4gZWxlbWVudCB0byB3aGljaCB0aGUgdXNlciBjYW4gbmF2aWdhdGUgdG8gdmlhIHRoZSB0YWIga2V5LlxuICAgICAgICAgKi9cbiAgICAgICAgcHJldmVudFRhYmJpbmc6IGZ1bmN0aW9uKHdpZGdldCwgaWQsIHpJbmRleCwgdGFiYmFibGVzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vRGlzYWJsZSB0YWJiaW5nIG91dCBvZiBtb2RhbCBhbmQgc3RvcCBldmVudHMgZnJvbSB0YXJnZXRzIG91dHNpZGUgb2YgdGhlIG92ZXJsYXkgZWxlbWVudFxuICAgICAgICAgICAgdmFyICRkb2N1bWVudEluSWZyYW1lID0gd2lkZ2V0LmNmZyAmJiB3aWRnZXQuY2ZnLmlmcmFtZSA/IHdpZGdldC5jZmcuaWZyYW1lLmdldCgwKS5jb250ZW50V2luZG93LmRvY3VtZW50IDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyICRkb2N1bWVudCA9ICQoJGRvY3VtZW50SW5JZnJhbWUgPyBbZG9jdW1lbnQsICRkb2N1bWVudEluSWZyYW1lXSA6IGRvY3VtZW50KTtcbiAgICAgICAgICAgICRkb2N1bWVudC5vbignZm9jdXMuJyArIGlkICsgJyBtb3VzZWRvd24uJyArIGlkICsgJyBtb3VzZXVwLicgKyBpZCwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0LmlzKGRvY3VtZW50LmJvZHkpICYmICghJGRvY3VtZW50SW5JZnJhbWUgJiYgdGFyZ2V0LnpJbmRleCgpIDwgekluZGV4ICYmIHRhcmdldC5wYXJlbnQoKS56SW5kZXgoKSA8IHpJbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICRkb2N1bWVudC5vbigna2V5ZG93bi4nICsgaWQsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFiYmFibGVzID0gdGFiYmFibGVzQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYmJhYmxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdCA9IHRhYmJhYmxlcy5maWx0ZXIoJzpmaXJzdCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdCA9IHRhYmJhYmxlcy5maWx0ZXIoJzpsYXN0JyksXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c2luZ1JhZGlvSXRlbSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZpcnN0LmlzKCc6cmFkaW8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzaW5nUmFkaW9JdGVtID0gdGFiYmFibGVzLmZpbHRlcignW25hbWU9XCInICsgQ1NTLmVzY2FwZShmaXJzdC5hdHRyKCduYW1lJykpICsgJ1wiXScpLmZpbHRlcignOmNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihmb2N1c2luZ1JhZGlvSXRlbS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0ID0gZm9jdXNpbmdSYWRpb0l0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihsYXN0LmlzKCc6cmFkaW8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzaW5nUmFkaW9JdGVtID0gdGFiYmFibGVzLmZpbHRlcignW25hbWU9XCInICsgQ1NTLmVzY2FwZShsYXN0LmF0dHIoJ25hbWUnKSkgKyAnXCJdJykuZmlsdGVyKCc6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZvY3VzaW5nUmFkaW9JdGVtLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdCA9IGZvY3VzaW5nUmFkaW9JdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGFyZ2V0LmlzKGRvY3VtZW50LmJvZHkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QuZm9jdXMoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0ID09PSBsYXN0WzBdICYmICFldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0LmZvY3VzKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChldmVudC50YXJnZXQgPT09IGZpcnN0WzBdICYmIGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdC5mb2N1cygxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LmN0cmxLZXkpIHsgXG4gICAgICAgICAgICAgICAgICAgIC8vICM4OTY1IGFsbG93IGN1dCwgY29weSwgcGFzdGVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghdGFyZ2V0LmlzKGRvY3VtZW50LmJvZHkpICYmICghJGRvY3VtZW50SW5JZnJhbWUgJiYgdGFyZ2V0LnpJbmRleCgpIDwgekluZGV4ICYmIHRhcmdldC5wYXJlbnQoKS56SW5kZXgoKSA8IHpJbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2l2ZW4gYSBtb2RhbCBvdmVybGF5IHdpZGdldCwgcmVtb3ZlcyB0aGUgbW9kYWwgb3ZlcmxheSBlbGVtZW50IGZyb20gdGhlIERPTS4gVGhpcyByZXZlcnRzIHRoZSBjaGFuZ2VzIGFzXG4gICAgICAgICAqIG1hZGUgYnkgYFByaW1lRmFjZXMudXRpbHMuYWRkTW9kYWxgLlxuICAgICAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXR9IHdpZGdldCBBIG1vZGFsIG92ZXJsYXkgd2lkZ2V0IGluc3RhbmNlLlxuICAgICAgICAgKiBAcGFyYW0ge0pRdWVyeSB8IG51bGx9IFtvdmVybGF5XSBUaGUgbW9kYWwgb3ZlcmxheSBlbGVtZW50IHNob3VsZCBiZSBhIERJVi5cbiAgICAgICAgICovXG4gICAgICAgIHJlbW92ZU1vZGFsOiBmdW5jdGlvbih3aWRnZXQsIG92ZXJsYXkpIHtcbiAgICAgICAgICAgIHZhciBpZCA9IHdpZGdldC5pZDtcbiAgICAgICAgICAgIHZhciBtb2RhbElkID0gaWQgKyAnX21vZGFsJztcblxuICAgICAgICAgICAgaWYgKG92ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICBvdmVybGF5LmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICwnYXJpYS1tb2RhbCc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICwnYXJpYS1saXZlJzogJ29mZidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgdGhlIGlkIGNvbnRhaW5zIGEgJzonXG4gICAgICAgICAgICAkKFByaW1lRmFjZXMuZXNjYXBlQ2xpZW50SWQobW9kYWxJZCkpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgaWQgZG9lcyBOT1QgY29udGFpbiBhICc6J1xuICAgICAgICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbihcIltpZD0nXCIgKyBtb2RhbElkICsgXCInXVwiKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgaWYgKHdpZGdldC5jZmcuYmxvY2tTY3JvbGwpIHtcbiAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnV0aWxzLmVuYWJsZVNjcm9sbGluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUHJpbWVGYWNlcy51dGlscy5lbmFibGVUYWJiaW5nKHdpZGdldCwgaWQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmFibGVzIG5hdmlnYXRpbmcgdG8gYW4gZWxlbWVudCB2aWEgdGhlIHRhYiBrZXkgb3V0c2lkZSBhbiBvdmVybGF5IHdpZGdldC4gVXN1YWxseSBjYWxsZWQgd2hlbiBhIG1vZGFsXG4gICAgICAgICAqIG92ZXJsYXkgaXMgcmVtb3ZlZC4gVGhpcyByZXZlcnRzIHRoZSBjaGFuZ2VzIGFzIG1hZGUgYnkgYFByaW1lRmFjZXMudXRpbHMucHJldmVudFRhYmJpbmdgLlxuICAgICAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXR9IHdpZGdldCBBIG1vZGFsIG92ZXJsYXkgd2lkZ2V0IGluc3RhbmNlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgSUQgb2YgYSBtb2RhbCBvdmVybGF5LCB1c3VhbGx5IHRoZSB3aWRnZXQgSUQuXG4gICAgICAgICAqL1xuICAgICAgICBlbmFibGVUYWJiaW5nOiBmdW5jdGlvbih3aWRnZXQsIGlkKSB7XG4gICAgICAgICAgICB2YXIgJGRvY3VtZW50SW5JZnJhbWUgPSB3aWRnZXQuY2ZnICYmIHdpZGdldC5jZmcuaWZyYW1lID8gd2lkZ2V0LmNmZy5pZnJhbWUuZ2V0KDApLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgJGRvY3VtZW50ID0gJCgkZG9jdW1lbnRJbklmcmFtZSA/IFtkb2N1bWVudCwgJGRvY3VtZW50SW5JZnJhbWVdIDogZG9jdW1lbnQpO1xuXG4gICAgICAgICAgICAkZG9jdW1lbnQub2ZmKCdmb2N1cy4nICsgaWQgKyAnIG1vdXNlZG93bi4nICsgaWQgKyAnIG1vdXNldXAuJyArIGlkICsgJyBrZXlkb3duLicgKyBpZCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrcyBpZiBhIG1vZGFsIHdpdGggdGhlIGdpdmVuIElEIGlzIGN1cnJlbnRseSBkaXNwbGF5ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYmFzZSBJRCBvZiBhIG1vZGFsIG92ZXJsYXksIHVzdWFsbHkgdGhlIHdpZGdldCBJRC5cbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gV2hldGhlciB0aGUgbW9kYWwgd2l0aCB0aGUgZ2l2ZW4gSUQgaXMgZGlzcGxheWVkLlxuICAgICAgICAgKi9cbiAgICAgICAgaXNNb2RhbEFjdGl2ZTogZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIHZhciBtb2RhbElkID0gaWQgKyAnX21vZGFsJztcblxuICAgICAgICAgICAgcmV0dXJuICQoUHJpbWVGYWNlcy5lc2NhcGVDbGllbnRJZChtb2RhbElkKSkubGVuZ3RoID09PSAxXG4gICAgICAgICAgICAgICAgfHwgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbihcIltpZD0nXCIgKyBtb2RhbElkICsgXCInXVwiKS5sZW5ndGggPT09IDE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHRoaXMgc2Nyb2xsYWJsZSBwYXJlbnQgYSB0eXBlIHRoYXQgc2hvdWxkIGJlIGJvdW5kIHRvIHRoZSB3aW5kb3cgZWxlbWVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnkgfCB1bmRlZmluZWQgfCBudWxsfSBqcSBBbiBlbGVtZW50IHRvIGNoZWNrIGlmIHNob3VsZCBiZSBib3VuZCB0byB3aW5kb3cgc2Nyb2xsLiBcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSB0aGlzIHRoaXMgSlEgc2hvdWxkIGJlIGJvdW5kIHRvIHRoZSB3aW5kb3cgc2Nyb2xsIGV2ZW50XG4gICAgICAgICAqL1xuICAgICAgICBpc1Njcm9sbFBhcmVudFdpbmRvdzogZnVuY3Rpb24oanEpIHtcbiAgICAgICAgICAgIHJldHVybiBqcSAmJiAoanEuaXMoJ2JvZHknKSB8fCBqcS5pcygnaHRtbCcpIHx8IGpxWzBdLm5vZGVUeXBlID09PSA5KTsgLy8gbm9kZVR5cGUgOSBpcyBmb3IgZG9jdW1lbnQgZWxlbWVudDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgb24gdGhlIGRvY3VtZW50IHRoYXQgaXMgaW52b2tlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhbiBlbGVtZW50IG91dHNpZGUgdGhlIG92ZXJsYXlcbiAgICAgICAgICogd2lkZ2V0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXR9IHdpZGdldCBBbiBvdmVybGF5IHdpZGdldCBpbnN0YW5jZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGhpZGVOYW1lc3BhY2UgQSBjbGljayBldmVudCB3aXRoIGEgbmFtZXNwYWNlIHRvIGxpc3RlbiB0bywgc3VjaCBhcyBgbW91c2Vkb3duLndpZGdldElkYC5cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IG92ZXJsYXkgVGhlIERPTSBlbGVtZW50IGZvciB0aGUgb3ZlcmxheS5cbiAgICAgICAgICogQHBhcmFtIHsoKGV2ZW50OiBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQpID0+IEpRdWVyeSkgfCB1bmRlZmluZWR9IHJlc29sdmVJZ25vcmVkRWxlbWVudHNDYWxsYmFjayBUaGUgY2FsbGJhY2sgd2hpY2hcbiAgICAgICAgICogcmVzb2x2ZXMgdGhlIGVsZW1lbnRzIHRvIGlnbm9yZSB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZSBvdmVybGF5LiBUaGUgYGhpZGVDYWxsYmFja2AgaXMgbm90IGludm9rZWRcbiAgICAgICAgICogd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gb25lIHRob3NlIGVsZW1lbnRzLlxuICAgICAgICAgKiBAcGFyYW0geyhldmVudDogSlF1ZXJ5LlRyaWdnZXJlZEV2ZW50LCBldmVudFRhcmdldDogSlF1ZXJ5KSA9PiB2b2lkfSBoaWRlQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiB0aGVcbiAgICAgICAgICogdXNlciBjbGlja3Mgb24gYW4gZWxlbWVudCBvdXRzaWRlIHRoZSBvdmVybGF5IHdpZGdldC5cbiAgICAgICAgICogQHJldHVybiB7UHJpbWVGYWNlcy5VbmJpbmRDYWxsYmFja30gVW5iaW5kIGNhbGxiYWNrIGhhbmRsZXJcbiAgICAgICAgICovXG4gICAgICAgIHJlZ2lzdGVySGlkZU92ZXJsYXlIYW5kbGVyOiBmdW5jdGlvbih3aWRnZXQsIGhpZGVOYW1lc3BhY2UsIG92ZXJsYXksIHJlc29sdmVJZ25vcmVkRWxlbWVudHNDYWxsYmFjaywgaGlkZUNhbGxiYWNrKSB7XG5cbiAgICAgICAgICAgIHdpZGdldC5hZGREZXN0cm95TGlzdGVuZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkub2ZmKGhpZGVOYW1lc3BhY2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9mZihoaWRlTmFtZXNwYWNlKS5vbihoaWRlTmFtZXNwYWNlLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJsYXkuaXMoJzpoaWRkZW4nKSB8fCBvdmVybGF5LmNzcygndmlzaWJpbGl0eScpID09PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyICRldmVudFRhcmdldCA9ICQoZS50YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZyB3aGVuIHRoZSBlbGVtZW50IHNob3VsZCBiZSBpZ25vcmVkXG4gICAgICAgICAgICAgICAgaWYgKHJlc29sdmVJZ25vcmVkRWxlbWVudHNDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudHNUb0lnbm9yZSA9IHJlc29sdmVJZ25vcmVkRWxlbWVudHNDYWxsYmFjayhlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzVG9JZ25vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50c1RvSWdub3JlLmlzKCRldmVudFRhcmdldCkgfHwgZWxlbWVudHNUb0lnbm9yZS5oYXMoJGV2ZW50VGFyZ2V0KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFByaW1lRmFjZXMuaGlkZU92ZXJsYXlzT25WaWV3cG9ydENoYW5nZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBoaWRlQ2FsbGJhY2soZSwgJGV2ZW50VGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1bmJpbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoaGlkZU5hbWVzcGFjZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxuICAgICAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXR9IHdpZGdldCBBIHdpZGdldCBpbnN0YW5jZSBmb3Igd2hpY2ggdG8gcmVnaXN0ZXIgYSByZXNpemUgaGFuZGxlci5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHJlc2l6ZU5hbWVzcGFjZSBBIHJlc2l6ZSBldmVudCB3aXRoIGEgbmFtZXNwYWNlIHRvIGxpc3RlbiB0bywgc3VjaCBhcyBgcmVzaXplLndpZGdldElkYC5cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnkgfCB1bmRlZmluZWR9IGVsZW1lbnQgQW4gZWxlbWVudCB0aGF0IHByZXZlbnRzIHRoZSBjYWxsYmFjayBmcm9tIGJlaW5nIGludm9rZWQgd2hlbiBpdCBpcyBub3RcbiAgICAgICAgICogdmlzaWJsZSwgdXN1YWxseSBhIGNoaWxkIGVsZW1lbnQgb2YgdGhlIHdpZGdldC5cbiAgICAgICAgICogQHBhcmFtIHsoZXZlbnQ6IEpRdWVyeS5UcmlnZ2VyZWRFdmVudCkgPT4gdm9pZH0gcmVzaXplQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcGFyYW1zXSBPcHRpb25hbCBDU1Mgc2VsZWN0b3IuIElmIGdpdmVuLCB0aGUgY2FsbGJhY2sgaXMgaW52b2tlZCBvbmx5IHdoZW4gdGhlIHJlc2l6ZSBldmVudFxuICAgICAgICAgKiBpcyB0cmlnZ2VyZWQgb24gYW4gZWxlbWVudCB0aGUgZ2l2ZW4gc2VsZWN0b3IuXG4gICAgICAgICAqIEByZXR1cm4ge1ByaW1lRmFjZXMuVW5iaW5kQ2FsbGJhY2t9IFVuYmluZCBjYWxsYmFjayBoYW5kbGVyXG4gICAgICAgICAqL1xuICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uKHdpZGdldCwgcmVzaXplTmFtZXNwYWNlLCBlbGVtZW50LCByZXNpemVDYWxsYmFjaywgcGFyYW1zKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHVuYmluZFJlc2l6ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykub2ZmKHJlc2l6ZU5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyAjMTIxNzIgLSByZXR1cm4gZWFybHkgaWYgbW9iaWxlIGJyb3dzZXJcbiAgICAgICAgICAgIGlmIChQcmltZUZhY2VzLmVudi5tb2JpbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB1bmJpbmQ6IHVuYmluZFJlc2l6ZUhhbmRsZXIgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2lkZ2V0LmFkZERlc3Ryb3lMaXN0ZW5lcih1bmJpbmRSZXNpemVIYW5kbGVyKTtcbiAgICAgICAgICAgIHdpZGdldC5hZGRSZWZyZXNoTGlzdGVuZXIodW5iaW5kUmVzaXplSGFuZGxlcik7XG5cbiAgICAgICAgICAgICQod2luZG93KS5vZmYocmVzaXplTmFtZXNwYWNlKS5vbihyZXNpemVOYW1lc3BhY2UsIHBhcmFtcyB8fCBudWxsLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgKGVsZW1lbnQuaXMoXCI6aGlkZGVuXCIpIHx8IGVsZW1lbnQuY3NzKCd2aXNpYmlsaXR5JykgPT09ICdoaWRkZW4nKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzaXplQ2FsbGJhY2soZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHsgdW5iaW5kOiB1bmJpbmRSZXNpemVIYW5kbGVyIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdXAgYW4gb3ZlcmxheSB3aWRnZXQuIEFwcGVuZHMgdGhlIG92ZXJsYXkgd2lkZ2V0IHRvIHRoZSBlbGVtZW50IGFzIHNwZWNpZmllZCBieSB0aGUgYGFwcGVuZFRvYFxuICAgICAgICAgKiBhdHRyaWJ1dGUuIEFsc28gbWFrZXMgc3VyZSB0aGUgb3ZlcmxheSB3aWRnZXQgaXMgaGFuZGxlZCBwcm9wZXJseSBkdXJpbmcgQUpBWCB1cGRhdGVzLlxuICAgICAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMud2lkZ2V0LkR5bmFtaWNPdmVybGF5V2lkZ2V0fSB3aWRnZXQgQW4gb3ZlcmxheSB3aWRnZXQgaW5zdGFuY2UuXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBvdmVybGF5IFRoZSBET00gZWxlbWVudCBmb3IgdGhlIG92ZXJsYXkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvdmVybGF5SWQgVGhlIElEIG9mIHRoZSBvdmVybGF5LCB1c3VhbGx5IHRoZSB3aWRnZXQgSUQuXG4gICAgICAgICAqIEByZXR1cm4ge0pRdWVyeX0gVGhlIG92ZXJsYXkgdGhhdCB3YXMgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWdpc3RlckR5bmFtaWNPdmVybGF5OiBmdW5jdGlvbih3aWRnZXQsIG92ZXJsYXksIG92ZXJsYXlJZCkge1xuXG4gICAgICAgICAgICBpZiAod2lkZ2V0LmNmZy5hcHBlbmRUbykge1xuICAgICAgICAgICAgICAgIHZhciBhcHBlbmRUbyA9IFByaW1lRmFjZXMudXRpbHMucmVzb2x2ZUR5bmFtaWNPdmVybGF5Q29udGFpbmVyKHdpZGdldCk7XG4gICAgICAgICAgICAgICAgUHJpbWVGYWNlcy51dGlscy5hcHBlbmREeW5hbWljT3ZlcmxheSh3aWRnZXQsIG92ZXJsYXksIG92ZXJsYXlJZCwgYXBwZW5kVG8pO1xuXG4gICAgICAgICAgICAgICAgd2lkZ2V0LmFkZERlc3Ryb3lMaXN0ZW5lcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFwcGVuZFRvID0gUHJpbWVGYWNlcy51dGlscy5yZXNvbHZlRHluYW1pY092ZXJsYXlDb250YWluZXIod2lkZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFzcyBudWxsIGFzIG92ZXJsYXkgLSBhcyBldmVyeSEgb3ZlcmxheSB3aXRoIHRoaXMgb3ZlcmxheUlkIGNhbiBiZSByZW1vdmVkIG9uIGRlc3Ryb3lpbmcgdGhlIHdob2xlIHdpZGdldFxuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnV0aWxzLnJlbW92ZUR5bmFtaWNPdmVybGF5KHdpZGdldCwgbnVsbCwgb3ZlcmxheUlkLCBhcHBlbmRUbyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB3aWRnZXQuYWRkUmVmcmVzaExpc3RlbmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXBwZW5kVG8gPSBQcmltZUZhY2VzLnV0aWxzLnJlc29sdmVEeW5hbWljT3ZlcmxheUNvbnRhaW5lcih3aWRnZXQpO1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnV0aWxzLmNsZWFudXBEeW5hbWljT3ZlcmxheSh3aWRnZXQsIG92ZXJsYXksIG92ZXJsYXlJZCwgYXBwZW5kVG8pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb3ZlcmxheTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gYSBzY3JvbGwgZXZlbnQgaXMgdHJpZ2dlcmVkIG9uIHRoZSBET00gZWxlbWVudCBmb3IgdGhlIHdpZGdldC5cbiAgICAgICAgICogQHBhcmFtIHtQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0fSB3aWRnZXQgQSB3aWRnZXQgaW5zdGFuY2UgZm9yIHdoaWNoIHRvIHJlZ2lzdGVyIGEgc2Nyb2xsIGhhbmRsZXIuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzY3JvbGxOYW1lc3BhY2UgQSBzY3JvbGwgZXZlbnQgd2l0aCBhIG5hbWVzcGFjZSwgc3VjaCBhcyBgc2Nyb2xsLndpZGdldElkYC5cbiAgICAgICAgICogQHBhcmFtIHsoZXZlbnQ6IEpRdWVyeS5UcmlnZ2VyZWRFdmVudCkgPT4gdm9pZH0gc2Nyb2xsQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBhIHNjcm9sbCBldmVudFxuICAgICAgICAgKiBvY2N1cnMgb24gdGhlIHdpZGdldC5cbiAgICAgICAgICogQHJldHVybiB7UHJpbWVGYWNlcy5VbmJpbmRDYWxsYmFja30gdW5iaW5kIGNhbGxiYWNrIGhhbmRsZXJcbiAgICAgICAgICovXG4gICAgICAgIHJlZ2lzdGVyU2Nyb2xsSGFuZGxlcjogZnVuY3Rpb24od2lkZ2V0LCBzY3JvbGxOYW1lc3BhY2UsIHNjcm9sbENhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgd2lkZ2V0SnEgPSB3aWRnZXQuZ2V0SlEoKTtcbiAgICAgICAgICAgIHZhciBzY3JvbGxQYXJlbnQgPSAod2lkZ2V0SnEgJiYgdHlwZW9mIHdpZGdldEpxLnNjcm9sbFBhcmVudCA9PT0gJ2Z1bmN0aW9uJykgPyB3aWRnZXRKcS5zY3JvbGxQYXJlbnQoKSA6IG51bGw7XG5cbiAgICAgICAgICAgIGlmICghc2Nyb2xsUGFyZW50IHx8IFByaW1lRmFjZXMudXRpbHMuaXNTY3JvbGxQYXJlbnRXaW5kb3coc2Nyb2xsUGFyZW50KSkge1xuICAgICAgICAgICAgICAgIHNjcm9sbFBhcmVudCA9ICQod2luZG93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVG8gYXZvaWQgaG9sZGluZyB0aGUgJCh3aW5kb3cpIHZhcmlhYmxlIGV4cGxpY2l0bHksIHlvdSBjYW4gZGlyZWN0bHkgYmluZCBhbmQgdW5iaW5kIFxuICAgICAgICAgICAgLy8gdGhlIHNjcm9sbCBldmVudCBvbiB0aGUgd2luZG93IHdpdGhpbiB0aGUgZnVuY3Rpb24gaXRzZWxmLlxuICAgICAgICAgICAgdmFyIHNjcm9sbEhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsQ2FsbGJhY2soZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzY3JvbGxQYXJlbnQub2ZmKHNjcm9sbE5hbWVzcGFjZSkub24oc2Nyb2xsTmFtZXNwYWNlLCBzY3JvbGxIYW5kbGVyKTtcblxuICAgICAgICAgICAgd2lkZ2V0LmFkZERlc3Ryb3lMaXN0ZW5lcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxQYXJlbnQub2ZmKHNjcm9sbE5hbWVzcGFjZSwgc2Nyb2xsSGFuZGxlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpZGdldC5hZGRSZWZyZXNoTGlzdGVuZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsUGFyZW50Lm9mZihzY3JvbGxOYW1lc3BhY2UsIHNjcm9sbEhhbmRsZXIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdW5iaW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsUGFyZW50Lm9mZihzY3JvbGxOYW1lc3BhY2UsIHNjcm9sbEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGEgc2Nyb2xsIGV2ZW50IGlzIHRyaWdnZXJlZCBvbiBUaGUgRE9NIGVsZW1lbnQgZm9yIHRoZSB3aWRnZXQgdGhhdFxuICAgICAgICAgKiBoYXMgYSBjb25uZWN0ZWQgb3ZlcmxheS5cbiAgICAgICAgICogQHBhcmFtIHtQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0fSB3aWRnZXQgQSB3aWRnZXQgaW5zdGFuY2UgZm9yIHdoaWNoIHRvIHJlZ2lzdGVyIGEgc2Nyb2xsIGhhbmRsZXIuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzY3JvbGxOYW1lc3BhY2UgQSBzY3JvbGwgZXZlbnQgd2l0aCBhIG5hbWVzcGFjZSwgc3VjaCBhcyBgc2Nyb2xsLndpZGdldElkYC5cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnkgfCB1bmRlZmluZWR9IGVsZW1lbnQgQSBET00gZWxlbWVudCB1c2VkIHRvIGZpbmQgc2Nyb2xsYWJsZSBwYXJlbnRzLlxuICAgICAgICAgKiBAcGFyYW0geyhldmVudDogSlF1ZXJ5LlRyaWdnZXJlZEV2ZW50KSA9PiB2b2lkfSBzY3JvbGxDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGEgc2Nyb2xsIGV2ZW50XG4gICAgICAgICAqIG9jY3VycyBvbiB0aGUgd2lkZ2V0LlxuICAgICAgICAgKiBAcmV0dXJuIHtQcmltZUZhY2VzLlVuYmluZENhbGxiYWNrfSB1bmJpbmQgY2FsbGJhY2sgaGFuZGxlclxuICAgICAgICAgKi9cbiAgICAgICAgcmVnaXN0ZXJDb25uZWN0ZWRPdmVybGF5U2Nyb2xsSGFuZGxlcjogZnVuY3Rpb24od2lkZ2V0LCBzY3JvbGxOYW1lc3BhY2UsIGVsZW1lbnQsIHNjcm9sbENhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsYWJsZVBhcmVudHMgPSBQcmltZUZhY2VzLnV0aWxzLmdldFNjcm9sbGFibGVQYXJlbnRzKChlbGVtZW50IHx8IHdpZGdldC5nZXRKUSgpKS5nZXQoMCkpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNjcm9sbGFibGVQYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFBhcmVudCA9ICQoc2Nyb2xsYWJsZVBhcmVudHNbaV0pO1xuXG4gICAgICAgICAgICAgICAgd2lkZ2V0LmFkZERlc3Ryb3lMaXN0ZW5lcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsUGFyZW50Lm9mZihzY3JvbGxOYW1lc3BhY2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc2Nyb2xsUGFyZW50Lm9mZihzY3JvbGxOYW1lc3BhY2UpLm9uKHNjcm9sbE5hbWVzcGFjZSwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxDYWxsYmFjayhlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1bmJpbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNjcm9sbGFibGVQYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHNjcm9sbGFibGVQYXJlbnRzW2ldKS5vZmYoc2Nyb2xsTmFtZXNwYWNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbmRzIHNjcm9sbGFibGUgcGFyZW50cyAobm90ICB0aGUgZG9jdW1lbnQpLlxuICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgQW4gZWxlbWVudCB1c2VkIHRvIGZpbmQgaXRzIHNjcm9sbGFibGUgcGFyZW50cy5cbiAgICAgICAgICogQHJldHVybiB7RWxlbWVudFtdfSB0aGUgbGlzdCBvZiBzY3JvbGxhYmxlIHBhcmVudHMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXRTY3JvbGxhYmxlUGFyZW50czogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIHNjcm9sbGFibGVQYXJlbnRzID0gW107XG4gICAgICAgICAgICB2YXIgZ2V0UGFyZW50cyA9IGZ1bmN0aW9uKGVsZW1lbnQsIHBhcmVudHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudFsncGFyZW50Tm9kZSddID09IG51bGwgPyBwYXJlbnRzIDogZ2V0UGFyZW50cyhlbGVtZW50LnBhcmVudE5vZGUsIHBhcmVudHMuY29uY2F0KFtlbGVtZW50LnBhcmVudE5vZGVdKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgYWRkU2Nyb2xsYWJsZVBhcmVudCA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoUHJpbWVGYWNlcy51dGlscy5pc1Njcm9sbFBhcmVudFdpbmRvdygkKG5vZGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50cy5wdXNoKHdpbmRvdyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudHMucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnRzID0gZ2V0UGFyZW50cyhlbGVtZW50LCBbXSk7XG4gICAgICAgICAgICAgICAgdmFyIG92ZXJmbG93UmVnZXggPSAvKGF1dG98c2Nyb2xsKS87XG4gICAgICAgICAgICAgICAgdmFyIG92ZXJmbG93Q2hlY2sgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZURlY2xhcmF0aW9uID0gd2luZG93WydnZXRDb21wdXRlZFN0eWxlJ10obm9kZSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdmVyZmxvd1JlZ2V4LnRlc3Qoc3R5bGVEZWNsYXJhdGlvbi5nZXRQcm9wZXJ0eVZhbHVlKCdvdmVyZmxvdycpKSB8fCBvdmVyZmxvd1JlZ2V4LnRlc3Qoc3R5bGVEZWNsYXJhdGlvbi5nZXRQcm9wZXJ0eVZhbHVlKCdvdmVyZmxvd1gnKSkgfHwgb3ZlcmZsb3dSZWdleC50ZXN0KHN0eWxlRGVjbGFyYXRpb24uZ2V0UHJvcGVydHlWYWx1ZSgnb3ZlcmZsb3dZJykpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHBhcmVudHNbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGxTZWxlY3RvcnMgPSBwYXJlbnQubm9kZVR5cGUgPT09IDEgJiYgcGFyZW50LmRhdGFzZXRbJ3Njcm9sbHNlbGVjdG9ycyddO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsU2VsZWN0b3JzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0b3JzID0gc2Nyb2xsU2VsZWN0b3JzLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlbGVjdG9ycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IHNlbGVjdG9yc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsICYmIG92ZXJmbG93Q2hlY2soZWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFNjcm9sbGFibGVQYXJlbnQoZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnQubm9kZVR5cGUgIT09IDkgJiYgb3ZlcmZsb3dDaGVjayhwYXJlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRTY3JvbGxhYmxlUGFyZW50KHBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIG5vIHBhcmVudHMgbWFrZSBpdCB0aGUgd2luZG93XG4gICAgICAgICAgICBpZiAoc2Nyb2xsYWJsZVBhcmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudHMucHVzaCh3aW5kb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2Nyb2xsYWJsZVBhcmVudHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgYSBzY3JvbGwgaGFuZGxlciBhcyByZWdpc3RlcmVkIGJ5IGBQcmltZUZhY2VzLnV0aWxzLnJlZ2lzdGVyU2Nyb2xsSGFuZGxlcmAuXG4gICAgICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldH0gd2lkZ2V0IEEgd2lkZ2V0IGluc3RhbmNlIGZvciB3aGljaCBhIHNjcm9sbCBoYW5kbGVyIHdhcyByZWdpc3RlcmVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2Nyb2xsTmFtZXNwYWNlIEEgc2Nyb2xsIGV2ZW50IHdpdGggYSBuYW1lc3BhY2UsIHN1Y2ggYXMgYHNjcm9sbC53aWRnZXRJZGAuXG4gICAgICAgICAqL1xuICAgICAgICB1bmJpbmRTY3JvbGxIYW5kbGVyOiBmdW5jdGlvbih3aWRnZXQsIHNjcm9sbE5hbWVzcGFjZSkge1xuICAgICAgICAgICAgdmFyIHNjcm9sbFBhcmVudCA9IHdpZGdldC5nZXRKUSgpLnNjcm9sbFBhcmVudCgpO1xuICAgICAgICAgICAgaWYgKFByaW1lRmFjZXMudXRpbHMuaXNTY3JvbGxQYXJlbnRXaW5kb3coc2Nyb2xsUGFyZW50KSkge1xuICAgICAgICAgICAgICAgICQod2luZG93KS5vZmYoc2Nyb2xsTmFtZXNwYWNlKTsgLy8gVW5iaW5kIGRpcmVjdGx5IGZyb20gd2luZG93XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjcm9sbFBhcmVudC5vZmYoc2Nyb2xsTmFtZXNwYWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJldmVudHMgdGhlIHVzZXIgZnJvbSBzY3JvbGxpbmcgdGhlIGRvY3VtZW50IEJPRFkgZWxlbWVudC4gWW91IGNhbiBlbmFibGUgc2Nyb2xsaW5nIGFnYWluIHZpYVxuICAgICAgICAgKiBgUHJpbWVGYWNlcy51dGlscy5lbmFibGVTY3JvbGxpbmdgLlxuICAgICAgICAgKi9cbiAgICAgICAgcHJldmVudFNjcm9sbGluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKCd1aS1vdmVyZmxvdy1oaWRkZW4nKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5hYmxlcyBzY3JvbGxpbmcgYWdhaW4gaWYgcHJldmlvdXNseSBkaXNhYmxlZCB2aWEgYFByaW1lRmFjZXMudXRpbHMucHJldmVudFNjcm9sbGluZ2AuXG4gICAgICAgICAqL1xuICAgICAgICBlbmFibGVTY3JvbGxpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChkb2N1bWVudC5ib2R5KS5yZW1vdmVDbGFzcygndWktb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGN1bGF0ZXMgYW4gZWxlbWVudCBvZmZzZXQgcmVsYXRpdmUgdG8gdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSB3aW5kb3cuXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBlbGVtZW50IEFuIGVsZW1lbnQgZm9yIHdoaWNoIHRvIGNhbGN1bGF0ZSB0aGUgc2Nyb2xsIHBvc2l0aW9uLlxuICAgICAgICAgKiBAcmV0dXJuIHtKUXVlcnkuQ29vcmRpbmF0ZXN9IFRoZSBvZmZzZXQgb2YgdGhlIGdpdmVuIGVsZW1lbnQsIHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBvZiB0aGVcbiAgICAgICAgICogd2luZG93LlxuICAgICAgICAgKi9cbiAgICAgICAgY2FsY3VsYXRlUmVsYXRpdmVPZmZzZXQ6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgIGxlZnQgOiAwLFxuICAgICAgICAgICAgICAgIHRvcCA6IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZWxlbWVudC5vZmZzZXQoKTtcbiAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsTGVmdCA9ICQod2luZG93KS5zY3JvbGxMZWZ0KCk7XG4gICAgICAgICAgICByZXN1bHQudG9wID0gb2Zmc2V0LnRvcCAtIHNjcm9sbFRvcDtcbiAgICAgICAgICAgIHJlc3VsdC5sZWZ0ID0gb2Zmc2V0LmxlZnQgLSBzY3JvbGxMZWZ0O1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQmxvY2tzIHRoZSBlbnRlciBrZXkgZm9yIGFuIGV2ZW50IGxpa2UgYGtleXVwYCBvciBga2V5ZG93bmAuIFVzZWZ1bCBpbiBmaWx0ZXIgaW5wdXQgZXZlbnRzIGluIG1hbnlcbiAgICAgICAgICogY29tcG9uZW50cy5cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnkuVHJpZ2dlcmVkRXZlbnR9IGUgVGhlIGtleSBldmVudCB0aGF0IG9jY3VycmVkLlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgRU5URVIga2V5IHdhcyBibG9ja2VkLCBmYWxzZSBpZiBub3QuXG4gICAgICAgICAqL1xuICAgICAgICBibG9ja0VudGVyS2V5OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZihlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHRoaXMgQ01EIG9uIE1hY09zIG9yIENUUkwga2V5IG9uIG90aGVyIE9TZXMuIFxuICAgICAgICAgKiBAcGFyYW0ge0pRdWVyeS5UcmlnZ2VyZWRFdmVudH0gZSBUaGUga2V5IGV2ZW50IHRoYXQgb2NjdXJyZWQuXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUga2V5IGlzIGEgbWV0YSBrZXksIG9yIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgaXNNZXRhS2V5OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgZXZlbnQgcmV0dXJucyB0aGUgbWV0YWtleSB2YWx1ZSBhdCB0aGUgdGltZSB0aGUgZXZlbnQgd2FzIGdlbmVyYXRlZFxuICAgICAgICAgICAgICAgIHJldHVybiBQcmltZUZhY2VzLmVudi5icm93c2VyLm1hYyA/IGUub3JpZ2luYWxFdmVudC5tZXRhS2V5IDogZS5vcmlnaW5hbEV2ZW50LmN0cmxLZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBqUXVlcnkgcmV0dXJucyB0aGUgcmVhbCB0aW1lIHZhbHVlIG9mIHRoZSBtZXRhIGtleVxuICAgICAgICAgICAgICAgIHJldHVybiBQcmltZUZhY2VzLmVudi5icm93c2VyLm1hYyA/IGUubWV0YUtleSAgOiBlLmN0cmxLZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHRoaXMgU1BBQ0Ugb3IgRU5URVIga2V5LiBVc2VkIHRocm91Z2hvdXQgY29kZWJhc2UgdG8gdHJpZ2dlciBhbmQgYWN0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge0pRdWVyeS5UcmlnZ2VyZWRFdmVudH0gZSBUaGUga2V5IGV2ZW50IHRoYXQgb2NjdXJyZWQuXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUga2V5IGlzIGFuIGFjdGlvbiBrZXksIG9yIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgaXNBY3Rpb25LZXk6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmNvZGUgPT09ICdTcGFjZScgfHwgZS5rZXkgPT09ICdFbnRlcic7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrcyBpZiB0aGUga2V5IHByZXNzZWQgaXMgYSBwcmludGFibGUga2V5IGxpa2UgJ2EnIG9yICc0JyBldGMuXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5LlRyaWdnZXJlZEV2ZW50fSBlIFRoZSBrZXkgZXZlbnQgdGhhdCBvY2N1cnJlZC5cbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSBrZXkgaXMgYSBwcmludGFibGUga2V5LCBvciBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICAgICAgICovXG4gICAgICAgIGlzUHJpbnRhYmxlS2V5OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICByZXR1cm4gZSAmJiBlLmtleSAmJiAoZS5rZXkubGVuZ3RoID09PSAxIHx8IGUua2V5ID09PSAnVW5pZGVudGlmaWVkJyk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2tzIGlmIHRoZSBrZXkgcHJlc3NlZCBpcyBjdXQsIGNvcHksIG9yIHBhc3RlLlxuICAgICAgICAgKiBAcGFyYW0ge0pRdWVyeS5UcmlnZ2VyZWRFdmVudH0gZSBUaGUga2V5IGV2ZW50IHRoYXQgb2NjdXJyZWQuXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUga2V5IGlzIGN1dC9jb3B5L3Bhc3RlLCBvciBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICAgICAgICovXG4gICAgICAgIGlzQ2xpcGJvYXJkS2V5OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnWCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcmltZUZhY2VzLnV0aWxzLmlzTWV0YUtleShlKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElnbm9yZXMgdW5wcmludGFibGUga2V5cyBvbiBmaWx0ZXIgaW5wdXQgdGV4dCBib3guIFVzZWZ1bCBpbiBmaWx0ZXIgaW5wdXQgZXZlbnRzIGluIG1hbnkgY29tcG9uZW50cy5cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnkuVHJpZ2dlcmVkRXZlbnR9IGUgVGhlIGtleSBldmVudCB0aGF0IG9jY3VycmVkLlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIG9uZSBvZiB0aGUga2V5cyB0byBpZ25vcmUgd2FzIHByZXNzZWQsIG9yIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgaWdub3JlRmlsdGVyS2V5OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAvLyBjdXQgY29weSBwYXN0ZSBhbGxvd3MgZmlsdGVyIHRvIHRyaWdnZXJcbiAgICAgICAgICAgIGlmIChQcmltZUZhY2VzLnV0aWxzLmlzQ2xpcGJvYXJkS2V5KGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYmFja3NwYWNlLGVudGVyLGRlbGV0ZSB0cmlnZ2VyIGEgZmlsdGVyIGFzIHdlbGwgYXMgcHJpbnRhYmxlIGtleSBsaWtlICdhJ1xuICAgICAgICAgICAgc3dpdGNoIChlLmNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdCYWNrc3BhY2UnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICAgICAgICBjYXNlICdOdW1wYWRFbnRlcic6XG4gICAgICAgICAgICAgICAgY2FzZSAnRGVsZXRlJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhUHJpbWVGYWNlcy51dGlscy5pc1ByaW50YWJsZUtleShlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXhjbHVkZSBlbGVtZW50cyBzdWNoIGFzIGJ1dHRvbnMsIGxpbmtzLCBpbnB1dHMgZnJvbSBiZWluZyB0b3VjaCBzd2lwZWQuICBVc2VycyBjYW4gYWx3YXlzIGFkZFxuICAgICAgICAgKiBgY2xhc3M9XCJub1N3aXBlXCJgIHRvIGFueSBlbGVtZW50IHRvIGV4Y2x1ZGUgaXQgYXMgd2VsbC5cbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBBIENTUyBzZWxlY3RvciBmb3IgdGhlIGVsZW1lbnRzIHRvIGJlIGV4Y2x1ZGVkIGZyb20gYmVpbmcgdG91Y2ggc3dpcGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgZXhjbHVkZWRTd2lwZUVsZW1lbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBcIjpidXR0b246ZW5hYmxlZCwgOmlucHV0OmVuYWJsZWQsIGEsIFtyb2xlPSdjb21ib2JveCddLCAubm9Td2lwZVwiO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIZWxwZXIgdG8gb3BlbiBhIG5ldyBVUkwgYW5kIGlmIENUUkwgaXMgaGVsZCBkb3duIG9wZW4gaW4gbmV3IGJyb3dzZXIgdGFiLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0pRdWVyeS5UcmlnZ2VyZWRFdmVudH0gZXZlbnQgVGhlIGNsaWNrIGV2ZW50IHRoYXQgb2NjdXJyZWQuXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBsaW5rIFRoZSBVUkwgYW5jaG9yIGxpbmsgdGhhdCB3YXMgY2xpY2tlZC5cbiAgICAgICAgICovXG4gICAgICAgIG9wZW5MaW5rOiBmdW5jdGlvbihldmVudCwgbGluaykge1xuICAgICAgICAgICAgdmFyIGhyZWYgPSBsaW5rLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgIHZhciB3aW47XG4gICAgICAgICAgICBpZihocmVmICYmIGhyZWYgIT09ICcjJykge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbiA9IHdpbmRvdy5vcGVuKGhyZWYsICdfYmxhbmsnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gbGluay5hdHRyKCd0YXJnZXQnKSB8fCAnX3NlbGYnO1xuICAgICAgICAgICAgICAgICAgICB3aW4gPSB3aW5kb3cub3BlbihocmVmLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAod2luKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbi5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuYWJsZXMgYSB3aWRnZXQgZm9yIGVkaXRpbmcgYW5kIHNldHMgaXQgc3R5bGUgYXMgZW5hYmxlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IGpxIGEgcmVxdWlyZWQgalF1ZXJ5IGVsZW1lbnQgdG8gZW5hYmxlXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5IHwgdW5kZWZpbmVkIHwgbnVsbH0gW2lucHV0XSBhbiBvcHRpb25hbCBqUXVlcnkgaW5wdXQgdG8gZW5hYmxlICh3aWxsIHVzZSBqcSBpZiBudWxsKVxuICAgICAgICAgKi9cbiAgICAgICAgZW5hYmxlSW5wdXRXaWRnZXQ6IGZ1bmN0aW9uKGpxLCBpbnB1dCkge1xuICAgICAgICAgICAgaWYoIWlucHV0KSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBqcTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbnB1dC5pcygnOmRpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGpxLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1kaXNhYmxlZCcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNhYmxlcyBhIHdpZGdldCBmcm9tIGVkaXRpbmcgYW5kIHNldHMgaXQgc3R5bGUgYXMgZGlzYWJsZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBqcSBhIHJlcXVpcmVkIGpRdWVyeSBlbGVtZW50IHRvIGRpc2FibGVcbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnkgfCB1bmRlZmluZWQgfCBudWxsfSBbaW5wdXRdIGFuIG9wdGlvbmFsIGpRdWVyeSBpbnB1dCB0byBkaXNhYmxlICh3aWxsIHVzZSBqcSBpZiBudWxsKVxuICAgICAgICAgKi9cbiAgICAgICAgZGlzYWJsZUlucHV0V2lkZ2V0OiBmdW5jdGlvbihqcSwgaW5wdXQpIHtcbiAgICAgICAgICAgIGlmKCFpbnB1dCkge1xuICAgICAgICAgICAgICAgIGlucHV0ID0ganE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWlucHV0LmlzKCc6ZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgIGlucHV0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBqcS5hZGRDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5hYmxlcyBhIGJ1dHRvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IGpxIGEgcmVxdWlyZWQgalF1ZXJ5IGVsZW1lbnQgdG8gZW5hYmxlXG4gICAgICAgICAqL1xuICAgICAgICBlbmFibGVCdXR0b246IGZ1bmN0aW9uKGpxKSB7XG4gICAgICAgICAgICBpZiAoanEpIHtcbiAgICAgICAgICAgICAgICBqcS5yZW1vdmVDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgLnByb3AoIFwiZGlzYWJsZWRcIiwgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1kaXNhYmxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNhYmxlcyBhIGJ1dHRvbiBmcm9tIGJlaW5nIGNsaWNrZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBqcSBhIHJlcXVpcmVkIGpRdWVyeSBidXR0b24gdG8gZGlzYWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgZGlzYWJsZUJ1dHRvbjogZnVuY3Rpb24oanEpIHtcbiAgICAgICAgICAgIGlmIChqcSkge1xuICAgICAgICAgICAgICAgIGpxLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1ob3ZlciB1aS1zdGF0ZS1mb2N1cyB1aS1zdGF0ZS1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCd1aS1zdGF0ZS1kaXNhYmxlZCcpXG4gICAgICAgICAgICAgICAgICAuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbmFibGVzIENTUyBhbmQgalF1ZXJ5IGFuaW1hdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIGVuYWJsZUFuaW1hdGlvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJC5meC5vZmYgPSBmYWxzZTtcbiAgICAgICAgICAgIFByaW1lRmFjZXMuYW5pbWF0aW9uRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc2FibGVzIENTUyBhbmQgalF1ZXJ5IGFuaW1hdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVBbmltYXRpb25zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQuZngub2ZmID0gdHJ1ZTtcbiAgICAgICAgICAgIFByaW1lRmFjZXMuYW5pbWF0aW9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDU1MgVHJhbnNpdGlvbiBtZXRob2QgZm9yIG92ZXJsYXkgcGFuZWxzIHN1Y2ggYXMgU2VsZWN0T25lTWVudS9TZWxlY3RDaGVja2JveE1lbnUvRGF0ZXBpY2tlcidzIHBhbmVsIGV0Yy5cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnkgfCB1bmRlZmluZWQgfCBudWxsfSBlbGVtZW50IEFuIGVsZW1lbnQgZm9yIHdoaWNoIHRvIGV4ZWN1dGUgdGhlIHRyYW5zaXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbH0gY2xhc3NOYW1lIENsYXNzIG5hbWUgdXNlZCBmb3IgdHJhbnNpdGlvbiBwaGFzZXMuXG4gICAgICAgICAqIEByZXR1cm4ge1ByaW1lRmFjZXMuQ3NzVHJhbnNpdGlvbkhhbmRsZXIgfCBudWxsfSBUd28gaGFuZGxlcnMgbmFtZWQgYHNob3dgIGFuZCBgaGlkZWAgdGhhdCBzaG91bGQgYmUgaW52b2tlZFxuICAgICAgICAgKiB3aGVuIHRoZSBlbGVtZW50IGdldHMgc2hvd24gYW5kIGhpZGRlbi4gSWYgdGhlIGdpdmVuIGVsZW1lbnQgb3IgY2xhc3NOYW1lIHByb3BlcnR5IGlzIGB1bmRlZmluZWRgIG9yIGBudWxsYCxcbiAgICAgICAgICogdGhpcyBmdW5jdGlvbiByZXR1cm5zIGBudWxsYC5cbiAgICAgICAgICovXG4gICAgICAgIHJlZ2lzdGVyQ1NTVHJhbnNpdGlvbjogZnVuY3Rpb24oZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBjbGFzc05hbWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBjbGFzc05hbWVTdGF0ZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgJ2VudGVyJzogY2xhc3NOYW1lICsgJy1lbnRlcicsXG4gICAgICAgICAgICAgICAgICAgJ2VudGVyQWN0aXZlJzogY2xhc3NOYW1lICsgJy1lbnRlci1hY3RpdmUnLFxuICAgICAgICAgICAgICAgICAgICdlbnRlckRvbmUnOiBjbGFzc05hbWUgKyAnLWVudGVyLWRvbmUnLFxuICAgICAgICAgICAgICAgICAgICdleGl0JzogY2xhc3NOYW1lICsgJy1leGl0JyxcbiAgICAgICAgICAgICAgICAgICAnZXhpdEFjdGl2ZSc6IGNsYXNzTmFtZSArICctZXhpdC1hY3RpdmUnLFxuICAgICAgICAgICAgICAgICAgICdleGl0RG9uZSc6IGNsYXNzTmFtZSArICctZXhpdC1kb25lJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIGNhbGxUcmFuc2l0aW9uRXZlbnQgPSBmdW5jdGlvbihjYWxsYmFja3MsIGtleSwgcGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrcyAhPSBudWxsICYmIGNhbGxiYWNrc1trZXldICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc1trZXldLmNhbGwocGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZ1bmN0aW9uKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jbGVhciBleGl0IHN0YXRlIGNsYXNzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoW2NsYXNzTmFtZVN0YXRlcy5leGl0LCBjbGFzc05hbWVTdGF0ZXMuZXhpdEFjdGl2ZSwgY2xhc3NOYW1lU3RhdGVzLmV4aXREb25lXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoUHJpbWVGYWNlcy5hbmltYXRpb25FbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYW5pbWF0aW9uQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKS5hZGRDbGFzcyhjbGFzc05hbWVTdGF0ZXMuZW50ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsVHJhbnNpdGlvbkV2ZW50KGNhbGxiYWNrcywgJ29uRW50ZXInKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnF1ZXVlVGFzayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKGNsYXNzTmFtZVN0YXRlcy5lbnRlckFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5vbmUoJ3RyYW5zaXRpb25ydW4uY3NzLXRyYW5zaXRpb24tc2hvdycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbFRyYW5zaXRpb25FdmVudChjYWxsYmFja3MsICdvbkVudGVyaW5nJywgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkub25lKCd0cmFuc2l0aW9uY2FuY2VsLmNzcy10cmFuc2l0aW9uLXNob3cnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKFtjbGFzc05hbWVTdGF0ZXMuZW50ZXIsIGNsYXNzTmFtZVN0YXRlcy5lbnRlckFjdGl2ZSwgY2xhc3NOYW1lU3RhdGVzLmVudGVyRG9uZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYW5pbWF0aW9uQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5vbmUoJ3RyYW5zaXRpb25lbmQuY3NzLXRyYW5zaXRpb24tc2hvdycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcyhbY2xhc3NOYW1lU3RhdGVzLmVudGVyQWN0aXZlLCBjbGFzc05hbWVTdGF0ZXMuZW50ZXJdKS5hZGRDbGFzcyhjbGFzc05hbWVTdGF0ZXMuZW50ZXJEb25lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsVHJhbnNpdGlvbkV2ZW50KGNhbGxiYWNrcywgJ29uRW50ZXJlZCcsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFuaW1hdGlvbkFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5pbWF0aW9uIGdsb2JhbGx5IGRpc2FibGVkIHN0aWxsIGNhbGwgZG93bnN0cmVhbSBjYWxsYmFja3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbFRyYW5zaXRpb25FdmVudChjYWxsYmFja3MsICdvbkVudGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxUcmFuc2l0aW9uRXZlbnQoY2FsbGJhY2tzLCAnb25FbnRlcmluZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsVHJhbnNpdGlvbkV2ZW50KGNhbGxiYWNrcywgJ29uRW50ZXJlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaGlkZTogZnVuY3Rpb24oY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NsZWFyIGVudGVyIHN0YXRlIGNsYXNzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoW2NsYXNzTmFtZVN0YXRlcy5lbnRlciwgY2xhc3NOYW1lU3RhdGVzLmVudGVyQWN0aXZlLCBjbGFzc05hbWVTdGF0ZXMuZW50ZXJEb25lXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFByaW1lRmFjZXMuYW5pbWF0aW9uRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFuaW1hdGlvbkFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoY2xhc3NOYW1lU3RhdGVzLmV4aXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsVHJhbnNpdGlvbkV2ZW50KGNhbGxiYWNrcywgJ29uRXhpdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMucXVldWVUYXNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWVTdGF0ZXMuZXhpdEFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub25lKCd0cmFuc2l0aW9ucnVuLmNzcy10cmFuc2l0aW9uLWhpZGUnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbFRyYW5zaXRpb25FdmVudChjYWxsYmFja3MsICdvbkV4aXRpbmcnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLm9uZSgndHJhbnNpdGlvbmNhbmNlbC5jc3MtdHJhbnNpdGlvbi1oaWRlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKFtjbGFzc05hbWVTdGF0ZXMuZXhpdCwgY2xhc3NOYW1lU3RhdGVzLmV4aXRBY3RpdmUsIGNsYXNzTmFtZVN0YXRlcy5leGl0RG9uZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hbmltYXRpb25BY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkub25lKCd0cmFuc2l0aW9uZW5kLmNzcy10cmFuc2l0aW9uLWhpZGUnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpLnJlbW92ZUNsYXNzKFtjbGFzc05hbWVTdGF0ZXMuZXhpdEFjdGl2ZSwgY2xhc3NOYW1lU3RhdGVzLmV4aXRdKS5hZGRDbGFzcyhjbGFzc05hbWVTdGF0ZXMuZXhpdERvbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbFRyYW5zaXRpb25FdmVudChjYWxsYmFja3MsICdvbkV4aXRlZCcsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYW5pbWF0aW9uQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5pbWF0aW9uIGdsb2JhbGx5IGRpc2FibGVkIHN0aWxsIGNhbGwgZG93bnN0cmVhbSBjYWxsYmFja3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbFRyYW5zaXRpb25FdmVudChjYWxsYmFja3MsICdvbkV4aXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbFRyYW5zaXRpb25FdmVudChjYWxsYmFja3MsICdvbkV4aXRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbFRyYW5zaXRpb25FdmVudChjYWxsYmFja3MsICdvbkV4aXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvdW50IHRoZSBieXRlcyBvZiB0aGUgaW5wdXR0ZXh0LlxuICAgICAgICAgKiBib3Jyb3dlZCBmcm9tIHRoZSBja2VkaXRvciB3b3JkY291bnQgcGx1Z2luXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRleHQgdG8gY291bnQgYnl0ZXMgZnJvbS5cbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgYnl0ZSBjb3VudFxuICAgICAgICAgKi9cbiAgICAgICAgY291bnRCeXRlczogZnVuY3Rpb24odGV4dCkge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMCwgc3RyaW5nTGVuZ3RoID0gdGV4dC5sZW5ndGgsIGk7XG4gICAgICAgICAgICB0ZXh0ID0gU3RyaW5nKHRleHQgfHwgXCJcIik7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3RyaW5nTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydENvdW50ID0gZW5jb2RlVVJJKHRleHRbaV0pLnNwbGl0KFwiJVwiKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY291bnQgKz0gcGFydENvdW50ID09PSAxID8gMSA6IHBhcnRDb3VudCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcm1hdHMgdGhlIGFsbG93VHlwZXMgcmVnZXggcGF0dGVybiBpbiBhIG1vcmUgaHVtYW4tZnJpZW5kbHkgZm9ybWF0LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWxsb3dUeXBlcyBUaGUgYWxsb3dUeXBlcyByZWdleCBwYXR0ZXJuIHRvIGZvcm1hdFxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBhbGxvd1R5cGVzIGZvcm1hdHRlZCBpbiBhIG1vcmUgaHVtYW4tZnJpZW5kbHkgZm9ybWF0LlxuICAgICAgICAgKi9cbiAgICAgICAgZm9ybWF0QWxsb3dUeXBlczogZnVuY3Rpb24oYWxsb3dUeXBlcykge1xuICAgICAgICAgICAgcmV0dXJuIGFsbG93VHlwZXMgPT09IHVuZGVmaW5lZCA/ICcnIDogYWxsb3dUeXBlcy5yZXBsYWNlKFwiLyhcXFxcLnxcXFxcLykoXCIsIFwiXCIpLnJlcGxhY2UoXCIpJC9cIiwgXCJcIik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcm1hdHMgdGhlIGdpdmVuIGRhdGEgc2l6ZSBpbiBhIG1vcmUgaHVtYW4tZnJpZW5kbHkgZm9ybWF0LCBlLmcuLCBgMS41IE1CYCBldGMuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBieXRlcyBGaWxlIHNpemUgaW4gYnl0ZXMgdG8gZm9ybWF0XG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGdpdmVuIGZpbGUgc2l6ZSwgZm9ybWF0dGVkIGluIGEgbW9yZSBodW1hbi1mcmllbmRseSBmb3JtYXQuXG4gICAgICAgICAqL1xuICAgICAgICBmb3JtYXRCeXRlczogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgICAgICAgIGlmIChieXRlcyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcblxuICAgICAgICAgICAgaWYgKGJ5dGVzID09PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybiAnTi9BJztcblxuICAgICAgICAgICAgdmFyIHNpemVzID0gWydCeXRlcycsICdLQicsICdNQicsICdHQicsICdUQiddO1xuICAgICAgICAgICAgdmFyIGkgPSBwYXJzZUludChNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKDEwMjQpKSk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gYnl0ZXMgKyAnICcgKyBzaXplc1tpXTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gKGJ5dGVzIC8gTWF0aC5wb3coMTAyNCwgaSkpLnRvRml4ZWQoMSkgKyAnICcgKyBzaXplc1tpXTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBtZXRob2QgY29uY2F0ZW5hdGVzIHRoZSBjbGFzc2VzIGludG8gYSBzdHJpbmcgYWNjb3JkaW5nIHRvIHRoZSBjb25kaXRpb24gb2YgdGhlIGFyZ3VtZW50cyBhbmQgcmV0dXJucyBpdC5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBjbGFzc1xuICAgICAgICAgKi9cbiAgICAgICAgc3R5bGVDbGFzczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgIGlmIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gYXJnc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNsYXNzTmFtZSkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgY2xhc3NOYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfY2xhc3NlcyA9IEFycmF5LmlzQXJyYXkoY2xhc3NOYW1lKSA/IGNsYXNzTmFtZSA6IE9iamVjdC5rZXlzKGNsYXNzTmFtZSkubWFwKGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gISFjbGFzc05hbWVba2V5XSA/IGtleSA6IG51bGwgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMgPSBfY2xhc3Nlcy5sZW5ndGggPyBjbGFzc2VzLmNvbmNhdChfY2xhc3Nlcy5maWx0ZXIoZnVuY3Rpb24oYykgeyByZXR1cm4gISFjIH0pKSA6IGNsYXNzZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gY29uZmlndXJpbmcgbnVtZXJpYyB2YWx1ZSBsaWtlICdzaG93RGVsYXknIGFuZCB0aGUgdXNlciB3YW50cyAnMCcgd2UgY2FuJ3QgdHJlYXQgMCBhcyBGYWxzZXkgXG4gICAgICAgICAqIHNvIHdlIG1ha2UgdGhlIHZhbHVlIDAuICBPdGhlcndpc2UgRmFsc2V5IHJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfHVuZGVmaW5lZH0gdmFsdWUgdGhlIG9yaWdpbmFsIHZhbHVlXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWZhdWx0VmFsdWUgdGhlIHJlcXVpcmVkIGRlZmF1bHQgdmFsdWUgaWYgdmFsdWUgaXMgbm90IHNldFxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBjYWxjdWxhdGVkIHZhbHVlXG4gICAgICAgICAqL1xuICAgICAgICBkZWZhdWx0TnVtZXJpYzogZnVuY3Rpb24odmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgfHwgZGVmYXVsdFZhbHVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGlzIGNvbXBvbmVudCB3cmFwcGVkIGluIGEgZmxvYXQgbGFiZWw/XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5IHwgdW5kZWZpbmVkIHwgbnVsbH0ganEgQW4gZWxlbWVudCB0byBjaGVjayBpZiB3cmFwcGVkIGluIGZsb2F0IGxhYmVsLiBcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSB0aGlzIHRoaXMgSlEgaGFzIGEgZmxvYXQgbGFiZWwgcGFyZW50XG4gICAgICAgICAqL1xuICAgICAgICBoYXNGbG9hdExhYmVsOiBmdW5jdGlvbihqcSkge1xuICAgICAgICAgICAgaWYgKCFqcSB8fCAhanEucGFyZW50KCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ganEucGFyZW50KCkuaGFzQ2xhc3MoJ3VpLWZsb2F0LWxhYmVsJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZXMgZmxvYXRpbmcgbGFiZWwgQ1NTIGlmIHdyYXBwZWQgaW4gYSBmbG9hdGluZyBsYWJlbC5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnkgfCB1bmRlZmluZWR9IGVsZW1lbnQgdGhlIHRvIGFkZCB0aGUgQ1NTIGNsYXNzZXMgdG9cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnkgfCB1bmRlZmluZWR9IGlucHV0cyB0aGUgaW5wdXQocykgdG8gY2hlY2sgaWYgZmlsbGVkXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbiB8IHVuZGVmaW5lZH0gaGFzRmxvYXRMYWJlbCB0cnVlIGlmIHRoaXMgaXMgd3JhcHBlZCBpbiBhIGZsb2F0aW5nIGxhYmVsXG4gICAgICAgICAqL1xuICAgICAgICB1cGRhdGVGbG9hdExhYmVsOiBmdW5jdGlvbihlbGVtZW50LCBpbnB1dHMsIGhhc0Zsb2F0TGFiZWwpIHtcbiAgICAgICAgICAgIGlmICghZWxlbWVudCB8fCAhaW5wdXRzIHx8ICFoYXNGbG9hdExhYmVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaXNFbXB0eSA9IHRydWU7XG4gICAgICAgICAgICBpbnB1dHMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LmF0dHIoJ211bHRpcGxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1wdHkgPSBpbnB1dC5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5sZW5ndGggPT09IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpbnB1dC5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5hdHRyKCd2YWx1ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNFbXB0eSA9IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5wdXQudmFsKCk7XG4gICAgICAgICAgICAgICAgICAgIGlzRW1wdHkgPSB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gJyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFpc0VtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGlzRW1wdHkpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCd1aS1pbnB1dHdyYXBwZXItZmlsbGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCd1aS1pbnB1dHdyYXBwZXItZmlsbGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY29kZSBlc2NhcGVkIFhNTCBpbnRvIHJlZ3VsYXIgc3RyaW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZyB8IHVuZGVmaW5lZH0gaW5wdXQgdGhlIGlucHV0IHRvIGNoZWNrIGlmIGZpbGxlZFxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmcgfCB1bmRlZmluZWR9IGVpdGhlciB0aGUgb3JpZ2luYWwgc3RyaW5nIG9yIGVzY2FwZWQgWE1MXG4gICAgICAgICAqL1xuICAgICAgICBkZWNvZGVYbWw6IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgICAgICBpZiAoLyZhbXA7fCZxdW90O3wmIzM5O3wnJmx0O3wmZ3Q7Ly50ZXN0KGlucHV0KSkge1xuICAgICAgICAgICAgICAgIHZhciBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGlucHV0LCBcInRleHQvaHRtbFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jLmRvY3VtZW50RWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBRdWV1ZSBhIG1pY3JvdGFzayBpZiBkZWxheSBpcyAwIG9yIGxlc3MgYW5kIHNldFRpbWVvdXQgaWYgPiAwLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geygpID0+IHZvaWR9IGZuIHRoZSBmdW5jdGlvbiB0byBjYWxsIGFmdGVyIHRoZSBkZWxheVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlciB8IHVuZGVmaW5lZH0gW2RlbGF5XSB0aGUgb3B0aW9uYWwgZGVsYXkgaW4gbWlsbGlzZWNvbmRzXG4gICAgICAgICAqIEByZXR1cm4ge251bWJlciB8IHVuZGVmaW5lZH0gdGhlIGlkIGFzc29jaWF0ZWQgdG8gdGhlIHRpbWVvdXQgb3IgdW5kZWZpbmVkIGlmIG5vIHRpbWVvdXQgdXNlZFxuICAgICAgICAgKi9cbiAgICAgICAgcXVldWVUYXNrOiBmdW5jdGlvbihmbiwgZGVsYXkpIHtcbiAgICAgICAgICAgIC8vIGlmIGRlbGF5IGlzIDAgdXNlIG1pY3JvdGFza1xuICAgICAgICAgICAgaWYgKCFkZWxheSB8fCBkZWxheSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gcXVldWVNaWNyb3Rhc2sgYWRkcyB0aGUgZnVuY3Rpb24gKHRhc2spIGludG8gYSBxdWV1ZSBhbmQgZWFjaCBmdW5jdGlvbiBpcyBleGVjdXRlZCBvbmUgYnkgb25lIChGSUZPKVxuICAgICAgICAgICAgICAgIC8vIGFmdGVyIHRoZSBjdXJyZW50IHRhc2sgaGFzIGNvbXBsZXRlZCBpdHMgd29yayBhbmQgd2hlbiB0aGVyZSBpcyBubyBvdGhlciBjb2RlIHdhaXRpbmcgdG8gYmUgcnVuIFxuICAgICAgICAgICAgICAgIC8vIGJlZm9yZSBjb250cm9sIG9mIHRoZSBleGVjdXRpb24gY29udGV4dCBpcyByZXR1cm5lZCB0byB0aGUgYnJvd3NlcidzIGV2ZW50IGxvb3AuXG4gICAgICAgICAgICAgICAgd2luZG93LnF1ZXVlTWljcm90YXNrKGZuKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSW4gdGhlIGNhc2Ugb2Ygc2V0VGltZW91dCwgZWFjaCB0YXNrIGlzIGV4ZWN1dGVkIGZyb20gdGhlIGV2ZW50IHF1ZXVlLCBhZnRlciBjb250cm9sIGlzIGdpdmVuIHRvIHRoZSBldmVudCBsb29wLlxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGZuLCBkZWxheSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEtpbGxzd2l0Y2ggdGhhdCBraWxscyBhbGwgQUpBWCByZXF1ZXN0cywgcnVubmluZyBQb2xsZXJzIGFuZCBJZGxlTW9uaXRvcnMuXG4gICAgICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmltZWZhY2VzL3ByaW1lZmFjZXMvaXNzdWVzLzEwMjk5fEdpdEh1YiBJc3N1ZSAxMDI5OX1cbiAgICAgICAgICovXG4gICAgICAgIGtpbGxzd2l0Y2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgUHJpbWVGYWNlcy53YXJuKFwiQWJvcnQgYWxsIEFKQVggcmVxdWVzdHMhXCIpO1xuICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlF1ZXVlLmFib3J0QWxsKCk7XG5cbiAgICAgICAgICAgIC8vIHN0b3AgYWxsIHBvbGxlcnMgYW5kIGlkbGUgbW9uaXRvcnNcbiAgICAgICAgICAgIGZvciAodmFyIGl0ZW0gaW4gUHJpbWVGYWNlcy53aWRnZXRzKSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0ID0gUHJpbWVGYWNlcy53aWRnZXRzW2l0ZW1dO1xuICAgICAgICAgICAgICAgIGNvbnN0IFBvbGwgPSBnZXRXaWRnZXRJZlByZXNlbnQoXCJQb2xsXCIpO1xuICAgICAgICAgICAgICAgIGlmIChQb2xsICE9PSB1bmRlZmluZWQgJiYgd2lkZ2V0IGluc3RhbmNlb2YgUG9sbCkge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLndhcm4oXCJTdG9wcGluZyBQb2xsXCIpO1xuICAgICAgICAgICAgICAgICAgICB3aWRnZXQuc3RvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBJZGxlTW9uaXRvciA9IGdldFdpZGdldElmUHJlc2VudChcIklkbGVNb25pdG9yXCIpO1xuICAgICAgICAgICAgICAgIGlmIChJZGxlTW9uaXRvciAhPT0gdW5kZWZpbmVkICYmIHdpZGdldCBpbnN0YW5jZW9mIElkbGVNb25pdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMud2FybihcIlN0b3BwaW5nIElkbGVNb25pdG9yXCIpO1xuICAgICAgICAgICAgICAgICAgICB3aWRnZXQucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHJpZXZlcyB0aGUgc3Vic2VxdWVudCB6LWluZGV4IGZvciBhIHN0aWNreSBlbGVtZW50LiBUeXBpY2FsbHksIGEgc3RpY2t5IGVsZW1lbnQgcmVxdWlyZXMgYSBcbiAgICAgICAgICogei1pbmRleCBoaWdoZXIgdGhhbiB0aGUgY3VycmVudCBvbmUsIGJ1dCBjZXJ0YWluIHNjZW5hcmlvcyBhcmlzZSwgc3VjaCBhcyB3aGVuIGFuIG92ZXJsYXkgbWFzayBcbiAgICAgICAgICogaXMgcHJlc2VudCBvciB3aGVuIHRoZXJlIGFyZSBtdWx0aXBsZSBzdGlja3kgZWxlbWVudHMgb24gdGhlIHBhZ2UsIG5lY2Vzc2l0YXRpbmcgYSB6LWluZGV4IFxuICAgICAgICAgKiBvbmUgbG93ZXIgdGhhbiB0aGUgaGlnaGVzdCBhbW9uZyB0aGVtLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBuZXh0IGB6LWluZGV4YCBhcyBhIHN0cmluZy5cbiAgICAgICAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3ByaW1lZmFjZXMvcHJpbWVmYWNlcy9pc3N1ZXMvMTAyOTl8R2l0SHViIElzc3VlIDEwMjk5fVxuICAgICAgICAgKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vcHJpbWVmYWNlcy9wcmltZWZhY2VzL2lzc3Vlcy85MjU5fEdpdEh1YiBJc3N1ZSA5MjU5fVxuICAgICAgICAgKi9cbiAgICAgICAgbmV4dFN0aWNreVppbmRleDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIHotaW5kZXggb2YgdGhlIGhpZ2hlc3QgdmlzaWJsZSBzdGlja3ksIG9yIHVzZSBQcmltZUZhY2VzLm5leHRaaW5kZXgoKSArIDEgaWYgbm9uZSBmb3VuZFxuICAgICAgICAgICAgdmFyIGhpZ2hlc3RTdGlja3laSW5kZXggPSBwYXJzZUludCgkKCcudWktc3RpY2t5OnZpc2libGUnKS5sYXN0KCkuekluZGV4KCkpIHx8IHBhcnNlSW50KFByaW1lRmFjZXMubmV4dFppbmRleCgpKSArIDE7XG5cbiAgICAgICAgICAgIC8vIEdpdEh1YiAjOTI5NSBBZGp1c3Qgei1pbmRleCBiYXNlZCBvbiBvdmVybGF5c1xuICAgICAgICAgICAgdmFyIG92ZXJsYXlzID0gJCgnLnVpLXdpZGdldC1vdmVybGF5OnZpc2libGUnKTtcbiAgICAgICAgICAgIGlmIChvdmVybGF5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBvdmVybGF5cy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG92ZXJsYXlaSW5kZXggPSBwYXJzZUludCgkKHRoaXMpLnpJbmRleCgpKSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RTdGlja3laSW5kZXggPSBNYXRoLm1pbihvdmVybGF5WkluZGV4LCBoaWdoZXN0U3RpY2t5WkluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gIzEyMTUxIEFkanVzdCB6LWluZGV4IGZvciBzdGlja3kgZWxlbWVudHMgd2hlbiBhbiBvdmVybGF5IG1hc2sgaXMgbm90IHByZXNlbnRcbiAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnppbmRleCA9IGhpZ2hlc3RTdGlja3laSW5kZXggLSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEZWNyZWFzZSB6SW5kZXggYnkgMSBhbmQgcmV0dXJuXG4gICAgICAgICAgICByZXR1cm4gaGlnaGVzdFN0aWNreVpJbmRleCAtIDE7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICogRGVsZXRlcyBhbGwgZXZlbnRzLCAnb24nIGF0dHJpYnV0ZXMsIGRhdGEsIGFuZCB0aGUgZWxlbWVudCBpdHNlbGYgaW4gYSByZWN1cnNpdmUgbWFubmVyLCBcbiAgICAgICAgICogZW5zdXJpbmcgdGhhdCB0aGUgZ2FyYmFnZSBjb2xsZWN0b3IgZG9lcyBub3QgcmV0YWluIGFueSByZWZlcmVuY2VzIHRvIHRoaXMgZWxlbWVudCBvciBpdHMgY2hpbGRyZW4uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5IHwgdW5kZWZpbmVkfSBqcSBqUXVlcnkgb2JqZWN0IHRvIGNsZWFuc2VcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBbY2xlYXJEYXRhXSBmbGFnIHRvIGNsZWFyIGRhdGEgb2ZmIGVsZW1lbnRzIChkZWZhdWx0IHRvIHRydWUpXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JlbW92ZUVsZW1lbnRdIGZsYWcgdG8gcmVtb3ZlIHRoZSBlbGVtZW50IGZyb20gRE9NIChkZWZhdWx0IHRvIHRydWUpXG4gICAgICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmltZWZhY2VzL3ByaW1lZmFjZXMvaXNzdWVzLzExNjk2fEdpdEh1YiBJc3N1ZSAxMTY5Nn1cbiAgICAgICAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3ByaW1lZmFjZXMvcHJpbWVmYWNlcy9pc3N1ZXMvMTE3MDJ8R2l0SHViIElzc3VlIDExNzAyfVxuICAgICAgICAgKi9cbiAgICAgICAgY2xlYW5zZURvbUVsZW1lbnQ6IGZ1bmN0aW9uKGpxLCBjbGVhckRhdGEgPSB0cnVlLCByZW1vdmVFbGVtZW50ID0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKCFqcSB8fCAhanEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL1NraXAgY2xlYW5zZSBvZiBzZWxlY3QgYW5kIHN2ZyB0YWdzLCBpdCBjYW4gaW1wYWN0IHBlcmZvcm1hbmNlIGlmIGEgbG90IG9mIHRhZ3MgYXJlIHByZXNlbnQuIFRoZXkgZG9uJ3QgaGF2ZSBQRiBsaXN0ZW5lcnMgYXR0YWNoZWQsIHNvIGNsZWFuc2UgaXQncyB1bm5lY2VzYXJ5LlxuICAgICAgICAgICAgaWYgKCFqcS5pcyhcInNlbGVjdCwgc3ZnLCBzdmcgKlwiKSkge1xuICAgICAgICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IHJlbW92ZSBldmVudHMgZnJvbSBjaGlsZHJlbiBlbGVtZW50c1xuICAgICAgICAgICAgICAgIGpxLmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy51dGlscy5jbGVhbnNlRG9tRWxlbWVudCgkKHRoaXMpLCBjbGVhckRhdGEsIHJlbW92ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIGlubGluZSBldmVudCBhdHRyaWJ1dGVzXG4gICAgICAgICAgICB2YXIgYXR0cmlidXRlcyA9IGpxWzBdLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZXNbaV0ubmFtZTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlTmFtZS5zdGFydHNXaXRoKFwib25cIikpIHtcbiAgICAgICAgICAgICAgICAgICAganEucmVtb3ZlQXR0cihhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRyaWdnZXIgb25SZW1vdmUgZXZlbnRzIGZvciB3aWRnZXQuZGVzdHJveSBhbmQgcmVtb3ZlIHRoZSBlbGVtZW50IGZyb20gdGhlIERPTVxuICAgICAgICAgICAgLy8gSU1QT1JUQU5UOiBUaGlzIG11c3Qgb2NjdXIgYmVmb3JlIGpxLm9mZigpIHRvIGVuc3VyZSB0aGUgb24oXCJyZW1vdmVcIikgZXZlbnRzIHJlbWFpbiByZWdpc3RlcmVkLlxuICAgICAgICAgICAgaWYgKHJlbW92ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBqcS50cmlnZ2VySGFuZGxlcihcInJlbW92ZVwiKTtcbiAgICAgICAgICAgICAgICBqcS5nZXQoMCkucmVtb3ZlKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICAgICAganEub2ZmKCk7XG5cbiAgICAgICAgICAgIC8vIENsZWFyIGRhdGFcbiAgICAgICAgICAgIGlmIChjbGVhckRhdGEpIHtcbiAgICAgICAgICAgICAgICBqcS5yZW1vdmVEYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICogUmVwbGFjZXMgYSBzcGVjaWZpYyBDU1MgaWNvbiBjbGFzcyBvbiBhbiBlbGVtZW50IGFuZCBhcHBlbmRzIGEgbmV3IGljb24gY2xhc3MuXG4gICAgICAgICAqIElmIHRoZSB0YXJnZXQgY2xhc3MgaXMgZm91bmQsIGFsbCBjbGFzc2VzIGFmdGVyIGl0IGFyZSByZW1vdmVkIGFuZCB0aGUgbmV3IGNsYXNzIGlzIGFkZGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0pRdWVyeSB8IHVuZGVmaW5lZH0ganEgLSBUaGUgalF1ZXJ5IGVsZW1lbnQgdG8gbW9kaWZ5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWRkSWNvbiAtIFRoZSBuZXcgQ1NTIGljb24gY2xhc3MgdG8gYWRkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwbGFjZUljb246IGZ1bmN0aW9uKGpxLCBhZGRJY29uKSB7XG4gICAgICAgICAgICBpZiAoIWpxIHx8ICFqcS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBHZXQgdGhlIHZhbHVlIG9mIHRoZSAnY2xhc3MnIGF0dHJpYnV0ZSBhbmQgc3BsaXQgaXQgaW50byBhbiBhcnJheVxuICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSBqcS5hdHRyKCdjbGFzcycpLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSB0YXJnZXQgY2xhc3NcbiAgICAgICAgICAgIHZhciB0YXJnZXRJbmRleCA9IGNsYXNzZXMuaW5kZXhPZigndWktYycpO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IGNsYXNzIGlzIGZvdW5kLCByZW1vdmUgYWxsIGNsYXNzZXMgYWZ0ZXIgaXQgYW5kIGFkZCB0aGUgbmV3IGNsYXNzXG4gICAgICAgICAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBuZXcgY2xhc3Mgc3RyaW5nIGJ5IGtlZXBpbmcgY2xhc3NlcyB1cCB0byBhbmQgaW5jbHVkaW5nIHRoZSB0YXJnZXQgY2xhc3MsIHRoZW4gYWRkaW5nIHRoZSBuZXcgY2xhc3NcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2xhc3NlcyA9IGNsYXNzZXMuc2xpY2UoMCwgdGFyZ2V0SW5kZXggKyAxKS5qb2luKCcgJykgKyAnICcgKyBhZGRJY29uO1xuXG4gICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBuZXcgY2xhc3Mgc3RyaW5nIG9uIHRoZSBlbGVtZW50IGFuZCBzdG9yZSB0aGUgbmV3IGNsYXNzIGluIHRoZSAncC1pY29uJyBkYXRhIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgIGpxLmF0dHIoJ2NsYXNzJywgbmV3Q2xhc3NlcykuZGF0YSgncC1pY29uJywgYWRkSWNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHNldCBhbmltYXRpb24gc3RhdGUgZ2xvYmFsbHlcbiAgICBpZiAoUHJpbWVGYWNlcy5lbnYucHJlZmVyc1JlZHVjZWRNb3Rpb24pIHtcbiAgICAgICAgUHJpbWVGYWNlcy51dGlscy5kaXNhYmxlQW5pbWF0aW9ucygpO1xuICAgICAgICBQcmltZUZhY2VzLndhcm4oXCJBbmltYXRpb25zIGFyZSBkaXNhYmxlZCBiZWNhdXNlIE9TIGhhcyByZXF1ZXN0ZWQgcHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlXCIpXG4gICAgfVxufVxuIiwgImlmICghUHJpbWVGYWNlcy5yZXNvdXJjZXMpIHtcblxuICAgLyoqXG4gICAgKiBUaGUgb2JqZWN0IHdpdGggZnVuY3Rpb25hbGl0eSByZWxhdGVkIHRvIGhhbmRsaW5nIHJlc291cmNlcyBvbiB0aGUgc2VydmVyLCBzdWNoIGFzIENTUyBhbmQgSmF2YVNjcmlwdCBmaWxlcy5cbiAgICAqIFxuICAgICogQG5hbWVzcGFjZVxuICAgICovXG4gICAgUHJpbWVGYWNlcy5yZXNvdXJjZXMgPSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogQnVpbGRzIGEgSlNGIHJlc291cmNlIFVSTCBmb3IgZ2l2ZW4gcmVzb3VyY2UuXG4gICAgICAgICAgICogXG4gICAgICAgICAgICogYGBgamF2YXNjcmlwdFxuICAgICAgICAgICAqIGdldEZhY2VzUmVzb3VyY2UoXCJtYWluLmNzc1wiLCBcInBmXCIsIFwiNC4yLjBcIikgLy8gPT4gXCJodHRwczovL3d3dy5wcmltZWZhY2VzLm9yZy9zaG93Y2FzZS9qYXZheC5mYWNlcy5yZXNvdXJjZS9tYWluLmNzcy54aHRtbD9sbj1wZiZ2PTQuMi4wXCJcbiAgICAgICAgICAgKiBgYGBcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSByZXNvdXJjZSwgc3VjaCBhcyBgcHJpbWVmYWNlcy5qc2AuXG4gICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxpYnJhcnkgVGhlIGxpYnJhcnkgb2YgdGhlIHJlc291cmNlLCBzdWNoIGFzIGBwcmltZWZhY2VzYC5cbiAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvbiBUaGUgdmVyc2lvbiBvZiB0aGUgbGlicmFyeSwgc3VjaCBhcyBgNS4xYC5cbiAgICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBKU0YgcmVzb3VyY2UgVVJMIGZvciBsb2FkaW5nIHRoZSByZXNvdXJjZS5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBnZXRGYWNlc1Jlc291cmNlIDogZnVuY3Rpb24obmFtZSwgbGlicmFyeSwgdmVyc2lvbikge1xuICAgICAgICAgICAgIC8vIGp1c3QgZ2V0IHN1cmUgLSBuYW1lIHNob3VkbG4ndCBzdGFydCB3aXRoIGEgc2xhc2hcbiAgICAgICAgICAgICBpZiAobmFtZS5pbmRleE9mKCcvJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gbmFtZS5zdWJzdHJpbmcoMSwgbmFtZS5sZW5ndGgpO1xuICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIC8vIGZpbmQgYW55IEpTIHNlcnZlZCBKU0YgcmVzb3VyY2VcbiAgICAgICAgICAgICB2YXIgc2NyaXB0VVJJID0gUHJpbWVGYWNlcy5yZXNvdXJjZXMuZ2V0UmVzb3VyY2VTY3JpcHRVUkkoKTtcbiAgICAgICAgICAgICB2YXIgc2NyaXB0TmFtZSA9IFByaW1lRmFjZXMucmVzb3VyY2VzLmdldFJlc291cmNlU2NyaXB0TmFtZShzY3JpcHRVUkkpO1xuXG4gICAgICAgICAgICAgLy8gcmVwbGFjZSBjb3JlLmpzIHdpdGggb3VyIGN1c3RvbSBuYW1lXG4gICAgICAgICAgICAgc2NyaXB0VVJJID0gc2NyaXB0VVJJLnJlcGxhY2Uoc2NyaXB0TmFtZSwgbmFtZSk7XG5cbiAgICAgICAgICAgICAvLyBmaW5kIHRoZSBsaWJyYXJ5IGxpa2UgbG49cHJpbWVmYWNlc1xuICAgICAgICAgICAgIHZhciBsaWJyYXJ5UmVnZXggPSBuZXcgUmVnRXhwKCdbPyZdKFteJj1dKilsbj0oLio/KSgmfCQpJyk7XG5cbiAgICAgICAgICAgICAvLyBmaW5kIGxpYnJhcnkgdG8gcmVwbGFjZSBlLmcuICdsbj1wcmltZWZhY2VzJ1xuICAgICAgICAgICAgIHZhciBjdXJyZW50TGlicmFyeU5hbWUgPSAnbG49JyArIGxpYnJhcnlSZWdleC5leGVjKHNjcmlwdFVSSSlbMl07XG5cbiAgICAgICAgICAgICAvLyBJbiBhIHBvcnRsZXQgZW52aXJvbm1lbnQsIHVybCBwYXJhbWV0ZXJzIG1heSBiZSBuYW1lc3BhY2VkLlxuICAgICAgICAgICAgIHZhciBuYW1lc3BhY2UgPSAnJztcbiAgICAgICAgICAgICB2YXIgdXJsUGFyYW1ldGVyc0FyZU5hbWVzcGFjZWQgPSAhKHNjcmlwdFVSSS5pbmRleE9mKCc/JyArIGN1cnJlbnRMaWJyYXJ5TmFtZSkgPiAtMSB8fCBcbiAgICAgICAgICAgICAgICAgICBzY3JpcHRVUkkuaW5kZXhPZignJicrIGN1cnJlbnRMaWJyYXJ5TmFtZSkgPiAtMSk7XG5cbiAgICAgICAgICAgICBpZiAodXJsUGFyYW1ldGVyc0FyZU5hbWVzcGFjZWQpIHtcbiAgICAgICAgICAgICAgICBuYW1lc3BhY2UgPSBuZXcgUmVnRXhwKCdbPyZdKFteJj1dKyknICsgY3VycmVudExpYnJhcnlOYW1lICsgJygkfCYpJykuZXhlYyhzY3JpcHRVUkkpWzFdO1xuICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIC8vIElmIHRoZSBwYXJhbWV0ZXJzIGFyZSBuYW1lc3BhY2VkLCB0aGUgbmFtZXNwYWNlIG11c3QgYmUgaW5jbHVkZWRcbiAgICAgICAgICAgICAvLyB3aGVuIHJlcGxhY2luZyBwYXJhbWV0ZXJzLlxuICAgICAgICAgICAgIHNjcmlwdFVSSSA9IHNjcmlwdFVSSS5yZXBsYWNlKG5hbWVzcGFjZSArIGN1cnJlbnRMaWJyYXJ5TmFtZSwgbmFtZXNwYWNlICsgJ2xuPScgKyBsaWJyYXJ5KTtcblxuICAgICAgICAgICAgIGlmICh2ZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV4dHJhY3RlZFZlcnNpb24gPSBuZXcgUmVnRXhwKCdbPyZdJyArIG5hbWVzcGFjZSArICd2PShbXiZdKiknKS5leGVjKHNjcmlwdFVSSSlbMV07XG4gICAgICAgICAgICAgICAgc2NyaXB0VVJJID0gc2NyaXB0VVJJLnJlcGxhY2UobmFtZXNwYWNlICsgJ3Y9JyArIGV4dHJhY3RlZFZlcnNpb24sIG5hbWVzcGFjZSArICd2PScgKyB2ZXJzaW9uKTtcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICB2YXIgcHJlZml4ID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xuICAgICAgICAgICAgIHJldHVybiBzY3JpcHRVUkkuaW5kZXhPZihwcmVmaXgpID49IDAgPyBzY3JpcHRVUkkgOiBwcmVmaXggKyBzY3JpcHRVUkk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIENoZWNrcyBpZiB0aGUgRmFjZXNTZXJ2bGV0IGlzIG1hcHBlZCB3aXRoIGFuIGV4dGVuc2lvbiBtYXBwaW5nLiBDb21tb24gZXh0ZW5zaW9uIG1hcHBpbmcgYXJlIGZvciBleGFtcGxlOlxuICAgICAgICAgICAqIFxuICAgICAgICAgICAqIC0gLmpzZlxuICAgICAgICAgICAqIC0gLnhodG1sXG4gICAgICAgICAgICogXG4gICAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSBGYWNlc1NlcnZsZXQgaXMgbWFwcGVkIHdpdGggYW4gZXh0ZW5zaW9uIG1hcHBpbmcsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlzRXh0ZW5zaW9uTWFwcGluZyA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgIGlmICghUHJpbWVGYWNlcy5yZXNvdXJjZXMuSVNfRVhURU5TSU9OX01BUFBJTkcpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2NyaXB0VVJJID0gUHJpbWVGYWNlcy5yZXNvdXJjZXMuZ2V0UmVzb3VyY2VTY3JpcHRVUkkoKTtcbiAgICAgICAgICAgICAgICB2YXIgc2NyaXB0TmFtZSA9IFByaW1lRmFjZXMucmVzb3VyY2VzLmdldFJlc291cmNlU2NyaXB0TmFtZShzY3JpcHRVUkkpO1xuICAgICAgICAgICAgICAgIFByaW1lRmFjZXMucmVzb3VyY2VzLklTX0VYVEVOU0lPTl9NQVBQSU5HID0gc2NyaXB0VVJJLmNoYXJBdChzY3JpcHRVUkkuaW5kZXhPZihzY3JpcHROYW1lKSArIHNjcmlwdE5hbWUubGVuZ3RoKSA9PT0gJy4nO1xuICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIHJldHVybiBQcmltZUZhY2VzLklTX0VYVEVOU0lPTl9NQVBQSU5HO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBGaW5kcyB0aGUgVVJMIGV4dGVuc2lvbiBvZiBjdXJyZW50bHkgaW5jbHVkZWQgcmVzb3VyY2VzLCBzdWNoIGFzIGBqc2ZgIG9yIGB4aHRtbGAuXG4gICAgICAgICAgICogXG4gICAgICAgICAgICogVGhpcyBzaG91bGQgb25seSBiZSB1c2VkIGlmIGV4dGVuc2lvbnMgbWFwcGluZyBpcyB1c2VkLCBzZWUgYFByaW1lRmFjZXMuaXNFeHRlbnNpb25NYXBwaW5nYC5cbiAgICAgICAgICAgKiBcbiAgICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBVUkwgZXh0ZW5zaW9uLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGdldFJlc291cmNlVXJsRXh0ZW5zaW9uIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgaWYgKCFQcmltZUZhY2VzLnJlc291cmNlcy5SRVNPVVJDRV9VUkxfRVhURU5TSU9OKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjcmlwdFVSSSA9IFByaW1lRmFjZXMucmVzb3VyY2VzLmdldFJlc291cmNlU2NyaXB0VVJJKCk7XG4gICAgICAgICAgICAgICAgdmFyIHNjcmlwdE5hbWUgPSBQcmltZUZhY2VzLnJlc291cmNlcy5nZXRSZXNvdXJjZVNjcmlwdE5hbWUoc2NyaXB0VVJJKTtcbiAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnJlc291cmNlcy5SRVNPVVJDRV9VUkxfRVhURU5TSU9OID0gUmVnRXhwKHNjcmlwdE5hbWUgKyAnLihbXj9dKiknKS5leGVjKHNjcmlwdFVSSSlbMV07XG4gICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgcmV0dXJuIFByaW1lRmFjZXMucmVzb3VyY2VzLlJFU09VUkNFX1VSTF9FWFRFTlNJT047XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEdpdmVuIGEgVVJJLCBmaW5kIHRoZSBuYW1lIG9mIHRoZSBzY3JpcHQsIHN1Y2ggYXMgYHByaW1lZmFjZXMtZXh0ZW5zaW9ucy5qc2AuXG4gICAgICAgICAgICogXG4gICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHNjcmlwdFVSSSBUaGUgVVJJIG9mIGEgc2NyaXB0XG4gICAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgc2NyaXB0LlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGdldFJlc291cmNlU2NyaXB0TmFtZSA6IGZ1bmN0aW9uKHNjcmlwdFVSSSkge1xuICAgICAgICAgICAgIC8vIGZpbmQgc2NyaXB0Li4ubm9ybWFsIGlzICcvY29yZS5qcycgYW5kIHBvcnRsZXRzIGFyZSAnPWNvcmUuanMnXG4gICAgICAgICAgICAgdmFyIHNjcmlwdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXFxcXC8/JyArIFByaW1lRmFjZXMuUkVTT1VSQ0VfSURFTlRJRklFUiArICcoXFxcXC98PSkoLio/KVxcXFwuanMnKTtcbiAgICAgICAgICAgICByZXR1cm4gc2NyaXB0UmVnZXguZXhlYyhzY3JpcHRVUkkpWzJdICsgJy5qcyc7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEdldHMgdGhlIHJlc291cmNlIFVSSSBvZiB0aGUgZmlyc3QgSmF2YXNjcmlwdCBKUyBmaWxlIHNlcnZlZCBhcyBhIEpTRiByZXNvdXJjZS5cbiAgICAgICAgICAgKiBcbiAgICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBmaXJzdCBKYXZhc1NjcmlwdCByZXNvdXJjZSBVUkkuXG4gICAgICAgICAgICovXG4gICAgICAgICAgZ2V0UmVzb3VyY2VTY3JpcHRVUkkgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKCFQcmltZUZhY2VzLnJlc291cmNlcy5TQ1JJUFRfVVJJKSB7XG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiBmaW5kU2NyaXB0V2l0aFZlcnNpb25QYXJhbShzY3JpcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2NyaXB0cy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3JjID0gJCh0aGlzKS5hdHRyKCdzcmMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNyYyAmJiBzcmMuaW5kZXhPZigndj0nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMucmVzb3VyY2VzLlNDUklQVF9VUkkgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIEV4aXQgdGhlIGxvb3AgZWFybHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAvLyBub3JtYWwgJy9zaG93Y2FzZS9qYXZheC5mYWNlcy5yZXNvdXJjZS9qcXVlcnkvanF1ZXJ5LmpzLnhodG1sP2xuPXByaW1lZmFjZXMmdj0xMy4wLjUnXG4gICAgICAgICAgICAgICAgICBmaW5kU2NyaXB0V2l0aFZlcnNpb25QYXJhbSgkKCdzY3JpcHRbc3JjKj1cIi8nICsgUHJpbWVGYWNlcy5SRVNPVVJDRV9JREVOVElGSUVSICsgJy9cIl0nKSk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIHBvcnRsZXQgJ2phdmF4LmZhY2VzLnJlc291cmNlPWpxdWVyeS9qcXVlcnkuanMueGh0bWw/bG49cHJpbWVmYWNlcyZ2PTEzLjAuNSdcbiAgICAgICAgICAgICAgICAgIGlmICghUHJpbWVGYWNlcy5yZXNvdXJjZXMuU0NSSVBUX1VSSSkge1xuICAgICAgICAgICAgICAgICAgICAgIGZpbmRTY3JpcHRXaXRoVmVyc2lvblBhcmFtKCQoJ3NjcmlwdFtzcmMqPVwiJyArIFByaW1lRmFjZXMuUkVTT1VSQ0VfSURFTlRJRklFUiArICc9XCJdJykpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBQcmltZUZhY2VzLnJlc291cmNlcy5TQ1JJUFRfVVJJO1xuICAgICAgICAgIH1cbiAgICB9O1xuXG59IiwgImlmICghUHJpbWVGYWNlcy5jbGllbnR3aW5kb3cpIHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvYmplY3Qgd2l0aCBmdW5jdGlvbmFsaXR5IHJlbGF0ZWQgdG8gbXVsdGlwbGUgd2luZG93IHN1cHBvcnQgaW4gUHJpbWVGYWNlcyBhcHBsaWNhdGlvbnMuXG4gICAgICogXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqL1xuICAgIFByaW1lRmFjZXMuY2xpZW50d2luZG93ID0ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgVVJMIHBhcmFtZXRlciBob2xkaW5nIHRoZSBjbGllbnQgd2luZG93IElELlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcmVhZG9ubHlcbiAgICAgICAgICovXG4gICAgICAgIENMSUVOVF9XSU5ET1dfVVJMX1BBUkFNIDogXCJqZndpZFwiLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUga2V5IGZvciB0aGUgc2Vzc2lvbiBzdG9yYWdlIGVudHJ5IGhvbGRpbmcgdGhlIGNsaWVudCB3aW5kb3cgSUQuXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKi9cbiAgICAgICAgQ0xJRU5UX1dJTkRPV19TRVNTSU9OX1NUT1JBR0UgOiBcInBmLndpbmRvd0lkXCIsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgdGVtcG9yYXJ5IGNsaWVudCB3aW5kb3cgSUQsIHVzZWQgZm9yIHJlcXVlc3RpbmcgYSBuZXcgSUQsIHNlZVxuICAgICAgICAgKiB7QGxpbmsgcmVxdWVzdE5ld0NsaWVudFdpbmRvd0lkfS5cbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICBURU1QX0NMSUVOVF9XSU5ET1dfSUQgOiBcInRlbXBcIixcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIG9mIHRoZSBjbGllbnQgd2luZG93IElELiBFYWNoIGNsaWVudCB3aW5kb3cgSUQgbXVzdCBiZSBvZiB0aGlzIGxlbmd0aCwgb3IgaXQgaXNcbiAgICAgICAgICogaW52YWxpZC5cbiAgICAgICAgICogQHR5cGUge251bWJlcn1cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICBMRU5HVEhfQ0xJRU5UX1dJTkRPV19JRCA6IDUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZXRoZXIgdGhlIHtAbGluayBpbml0fSBmdW5jdGlvbiB3YXMgY2FsbGVkIGFscmVhZHkuXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgaW5pdGlhbGl6ZWQgOiBmYWxzZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGN1cnJlbnQgd2luZG93IElELCBhcyByZWNlaXZlZCBmcm9tIHRoZSBzZXJ2ZXIuIE1heSBiZSBgbnVsbGAgd2hlbiB0byBJRCB3YXMgcHJvdmlkZWQuXG4gICAgICAgICAqIEB0eXBlIHtudWxsIHwgc3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgY2xpZW50V2luZG93SWQgOiBudWxsLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGV0aGVyIHRoZSBjdXJyZW50bHkgbG9hZGVkIHBhZ2UgaXMgZnJvbSB0aGUgZmlyc3QgcmVkaXJlY3QuXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgaW5pdGlhbFJlZGlyZWN0IDogZmFsc2UsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWxpemVzIHRoZSBjbGllbnQgd2luZG93IGZlYXR1cmUuIFVzdWFsbHkgaW52b2tlZCBvbiBwYWdlIGxvYWQuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBvbmNlXG4gICAgICAgICAqIHBlciBwYWdlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50V2luZG93SWQgVGhlIGN1cnJlbnQgY2xpZW50IHdpbmRvdyBJRC5cbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBpbml0aWFsUmVkaXJlY3QgV2hldGhlciB0aGUgY3VycmVudGx5IGxvYWRlZCBwYWdlIGlzIGZyb20gdGhlIGZpcnN0IHJlZGlyZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oY2xpZW50V2luZG93SWQsIGluaXRpYWxSZWRpcmVjdCkge1xuICAgICAgICAgICAgaWYgKFByaW1lRmFjZXMuY2xpZW50d2luZG93LmluaXRpYWxpemVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5jbGllbnRXaW5kb3dJZCA9IGNsaWVudFdpbmRvd0lkO1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsUmVkaXJlY3QgPSBpbml0aWFsUmVkaXJlY3Q7XG5cbiAgICAgICAgICAgIHRoaXMuY2xlYW51cENvb2tpZXMoKTtcbiAgICAgICAgICAgIHRoaXMuYXNzZXJ0Q2xpZW50V2luZG93SWQoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFrZXMgc3VyZSB0aGUgdGVtcG9yYXJ5IGNvb2tpZSBmb3IgdGhlIGNsaWVudCB3aW5kb3cgSUQgaXMgZXhwaXJlZC5cbiAgICAgICAgICovXG4gICAgICAgIGNsZWFudXBDb29raWVzIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdXJsV2luZG93SWQgPSB0aGlzLmdldFVybFBhcmFtZXRlcih3aW5kb3cubG9jYXRpb24uaHJlZiwgdGhpcy5DTElFTlRfV0lORE9XX1VSTF9QQVJBTSk7XG4gICAgICAgICAgICBpZiAodXJsV2luZG93SWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGlyZUNvb2tpZSgncGYuaW5pdGlhbHJlZGlyZWN0LScgKyB1cmxXaW5kb3dJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBjbGllbnQgd2luZG93IElEIGlzIHZhbGlkLiBJZiBub3QsIHJlcXVlc3RzIGEgbmV3IGNsaWVudCB3aW5kb3cgSUQgZnJvbSB0aGUgc2VydmVyIHZpYVxuICAgICAgICAgKiByZWxvYWRpbmcgdGhlIGN1cnJlbnQgcGFnZS5cbiAgICAgICAgICovXG4gICAgICAgIGFzc2VydENsaWVudFdpbmRvd0lkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB1cmxDbGllbnRXaW5kb3dJZCA9IHRoaXMuZ2V0VXJsUGFyYW1ldGVyKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0aGlzLkNMSUVOVF9XSU5ET1dfVVJMX1BBUkFNKTtcbiAgICAgICAgICAgIHZhciBzZXNzaW9uU3RvcmFnZUNsaWVudFdpbmRvd0lkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSh0aGlzLkNMSUVOVF9XSU5ET1dfU0VTU0lPTl9TVE9SQUdFKTtcblxuICAgICAgICAgICAgLy8gc2Vzc2lvbiBzdG9yeSBlbXB0eSAtPiBcIm9wZW4gaW4gbmV3IHRhYi93aW5kb3dcIiB3YXMgdXNlZFxuICAgICAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlQ2xpZW50V2luZG93SWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBpbml0aWFsIHJlZGlyZWN0XG4gICAgICAgICAgICAgICAgLy8gLT4gdGhlIHdpbmRvd0lkIGlzIHZhbGlkIC0gd2UgZG9uJ3QgbmVlZCB0byBhIHNlY29uZCByZXF1ZXN0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5pdGlhbFJlZGlyZWN0ICYmIHVybENsaWVudFdpbmRvd0lkID09PSB0aGlzLmNsaWVudFdpbmRvd0lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odGhpcy5DTElFTlRfV0lORE9XX1NFU1NJT05fU1RPUkFHRSwgdGhpcy5jbGllbnRXaW5kb3dJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICE9IGluaXRpYWwgcmVkaXJlY3RcbiAgICAgICAgICAgICAgICAvLyAtPiByZXF1ZXN0IGEgbmV3IHdpbmRvd0lkIHRvIGF2b2lkIG11bHRpcGxlIHRhYnMgd2l0aCB0aGUgc2FtZSB3aW5kb3dJZFxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3ROZXdDbGllbnRXaW5kb3dJZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHdlIHRyaWdnZXJlZCB0aGUgd2luZG93SWQgcmVjcmVhdGlvbiBsYXN0IHJlcXVlc3RcbiAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2VDbGllbnRXaW5kb3dJZCA9PT0gdGhpcy5URU1QX0NMSUVOVF9XSU5ET1dfSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh0aGlzLkNMSUVOVF9XSU5ET1dfU0VTU0lPTl9TVE9SQUdFLCB0aGlzLmNsaWVudFdpbmRvd0lkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gc2VjdXJpdHkgY2hlY2sgbGVuZ3RoXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2Vzc2lvblN0b3JhZ2VDbGllbnRXaW5kb3dJZC5sZW5ndGggIT09IHRoaXMuTEVOR1RIX0NMSUVOVF9XSU5ET1dfSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0TmV3Q2xpZW50V2luZG93SWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gc2Vzc2lvbiBzdG9yYWdlIHdpbmRvd0lkIGRvZXNuJ3QgbWF0Y2ggcmVxdWVzdGVkIHdpbmRvd0lkXG4gICAgICAgICAgICAgICAgLy8gLT4gcmVkaXJlY3QgdG8gdGhlIHNhbWUgdmlldyB3aXRoIGN1cnJlbnQgd2luZG93SWQgZnJvbSB0aGUgd2luZG93IG5hbWVcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZXNzaW9uU3RvcmFnZUNsaWVudFdpbmRvd0lkICE9PSB1cmxDbGllbnRXaW5kb3dJZCB8fCBzZXNzaW9uU3RvcmFnZUNsaWVudFdpbmRvd0lkICE9PSB0aGlzLmNsaWVudFdpbmRvd0lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMucmVwbGFjZVVybFBhcmFtKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0aGlzLkNMSUVOVF9XSU5ET1dfVVJMX1BBUkFNLCBzZXNzaW9uU3RvcmFnZUNsaWVudFdpbmRvd0lkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICogRXhwaXJlcyB0aGUgY3VycmVudCBjbGllbnQgd2luZG93IElEIGJ5IHJlcGxhY2luZyBpdCB3aXRoIGEgdGVtcG9yYXJ5LCBpbnZhbGlkIGNsaWVudCB3aW5kb3cgSUQuIFRoZW4gcmVsb2Fkc1xuICAgICAgICAgKiB0aGUgY3VycmVudCBwYWdlIHRvIHJlcXVlc3QgYSBuZXcgSUQgZnJvbSB0aGUgc2VydmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVxdWVzdE5ld0NsaWVudFdpbmRvd0lkIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRoaXMuQ0xJRU5UX1dJTkRPV19TRVNTSU9OX1NUT1JBR0UsIHRoaXMuVEVNUF9DTElFTlRfV0lORE9XX0lEKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gd2UgcmVtb3ZlIHRoZSB3aW5kb3dJZCBpZiBhdmFpbGFibGUgYW5kIHJlZGlyZWN0IHRvIHRoZSBzYW1lIHVybCBhZ2FpbiB0byBjcmVhdGUgYSBuZXcgd2luZG93SWRcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMucmVwbGFjZVVybFBhcmFtKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0aGlzLkNMSUVOVF9XSU5ET1dfVVJMX1BBUkFNLCBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIFVSTCBwYXJhbWV0ZXIgd2l0aCB0aGUgZ2l2ZW4gbmFtZS4gV2hlbiB0aGUgVVJMIGNvbnRhaW5zIG11bHRpcGxlIFVSTCBwYXJhbWV0ZXJzXG4gICAgICAgICAqIHdpdGggdGhlIHNhbWUgbmFtZSwgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBVUkwgcGFyYW1ldGVyIGlzIHJldHVybmVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJpIEFuIFVSTCBmcm9tIHdoaWNoIHRvIGV4dHJhY3QgYW4gVVJMIHBhcmFtZXRlci5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTmFtZSBvZiB0aGUgVVJMIHBhcmFtZXRlciB0byByZXRyaWV2ZS5cbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nIHwgbnVsbH0gVGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBVUkwgcGFyYW1ldGVyLiBSZXR1cm5zIHRoZSBlbXB0eSBzdHJpbmcgd2hlbiB0aGUgVVJMIHBhcmFtZXRlclxuICAgICAgICAgKiBpcyBwcmVzZW50LCBidXQgaGFzIG5vIHZhbHVlLiBSZXR1cm5zIGBudWxsYCB3aGVuIG5vIFVSTCBwYXJhbWV0ZXIgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBleGlzdHMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXRVcmxQYXJhbWV0ZXIgOiBmdW5jdGlvbih1cmksIG5hbWUpIHtcbiAgICAgICAgICAgICAvLyBjcmVhdGUgYW4gYW5jaG9yIG9iamVjdCB3aXRoIHRoZSB1cmkgYW5kIGxldCB0aGUgYnJvd3NlciBwYXJzZSBpdFxuICAgICAgICAgICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgIGEuaHJlZiA9IHVyaTtcblxuICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGEgcXVlcnkgc3RyaW5nIGlzIGF2YWlsYWJsZVxuICAgICAgICAgICAgIHZhciBxdWVyeVN0cmluZyA9IGEuc2VhcmNoO1xuICAgICAgICAgICAgIGlmIChxdWVyeVN0cmluZyAmJiBxdWVyeVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSBvZiBxdWVyeSBwYXJhbWV0ZXJzIC0gc3Vic3RyaW5nKDEpIHJlbW92ZXMgdGhlID8gYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgcXVlcnlcbiAgICAgICAgICAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHF1ZXJ5U3RyaW5nLnN1YnN0cmluZygxKS5zcGxpdChcIiZcIik7XG4gICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlcnlQYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXIgPSBxdWVyeVBhcmFtZXRlcnNbaV0uc3BsaXQoXCI9XCIpO1xuICAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1ldGVyWzBdID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5UGFyYW1ldGVyLmxlbmd0aCA+IDEgPyBkZWNvZGVVUklDb21wb25lbnQocXVlcnlQYXJhbWV0ZXJbMV0pIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHaXZlbiBhIFVSTCwgcmVtb3ZlcyBhbGwgVVJMIHBhcmFtZXRlcnMgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgYWRkcyBhIG5ldyBVUkwgcGFyYW1ldGVyIHdpdGggdGhlIGdpdmVuIHZhbHVlLFxuICAgICAgICAgKiBhbmQgcmV0dXJucyB0aGUgbmV3IFVSTCB3aXRoIHRoZSByZXBsYWNlZCBwYXJhbWV0ZXIuIElmIHRoZSBVUkwgY29udGFpbnMgbXVsdGlwbGUgVVJMIHBhcmFtZXRlcnMgd2l0aCB0aGVcbiAgICAgICAgICogc2FtZSBuYW1lLCB0aGV5IGFyZSBhbGwgcmVtb3ZlZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHVyaSBUaGUgVVJMIGZvciB3aGljaCB0byBjaGFuZ2UgYW4gVVJMIHBhcmFtZXRlci5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtZXRlck5hbWUgTmFtZSBvZiB0aGUgVVJMIHBhcmFtZXRlciB0byBjaGFuZ2UuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbH0gW3BhcmFtZXRlclZhbHVlXSBOZXcgdmFsdWUgZm9yIHRoZSBVUkwgcGFyYW1ldGVyLiBJZiBgbnVsbGAgb3Igbm90IGdpdmVuLCB0aGUgZW1wdHlcbiAgICAgICAgICogc3RyaW5nIGlzIHVzZWQuXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGdpdmVuIFVSTCwgYnV0IHdpdGggdmFsdWUgb2YgdGhlIGdpdmVuIFVSTCBwYXJhbWV0ZXIgY2hhbmdlZCB0byB0aGUgbmV3IHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVwbGFjZVVybFBhcmFtIDogZnVuY3Rpb24odXJpLCBwYXJhbWV0ZXJOYW1lLCBwYXJhbWV0ZXJWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBhLmhyZWYgPSB1cmk7XG5cbiAgICAgICAgICAgIC8vIHNldCBlbXB0eSBzdHJpbmcgYXMgdmFsdWUgaWYgbm90IGRlZmluZWQgb3IgZW1wdHlcbiAgICAgICAgICAgIGlmICghcGFyYW1ldGVyVmFsdWUgfHwgcGFyYW1ldGVyVmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlclZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHZhbHVlIGlzIGVtcHR5XG4gICAgICAgICAgICBpZiAocGFyYW1ldGVyVmFsdWUubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBib3RoIHZhbHVlIGFuZCBxdWVyeSBzdHJpbmcgaXMgZW1wdHkgKG9yIGRvZXNuJ3QgY29udGFpbiB0aGUgcGFyYW0pLCBkb24ndCB0b3VjaCB0aGUgdXJsXG4gICAgICAgICAgICAgICAgaWYgKGEuc2VhcmNoLmxlbmd0aCA9PT0gMCB8fCBhLnNlYXJjaC5pbmRleE9mKHBhcmFtZXRlck5hbWUgKyBcIj1cIikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmhyZWY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBxdWVyeSBzdHJpbmcgaXMgZW1wdHksIGp1c3QgYXBwZW5kIG91ciBuZXcgcGFyYW1ldGVyXG4gICAgICAgICAgICBpZiAoYS5zZWFyY2gubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYS5zZWFyY2ggPSAnPycgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1ldGVyTmFtZSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbWV0ZXJWYWx1ZSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYS5ocmVmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgb2xkUGFyYW1ldGVycyA9IGEuc2VhcmNoLnN1YnN0cmluZygxKS5zcGxpdCgnJicpO1xuICAgICAgICAgICAgdmFyIG5ld1BhcmFtZXRlcnMgPSBbXTtcbiAgICAgICAgICAgIG5ld1BhcmFtZXRlcnMucHVzaChwYXJhbWV0ZXJOYW1lICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1ldGVyVmFsdWUpKTtcblxuICAgICAgICAgICAgLy8gbG9vcCBvbGQgcGFyYW1ldGVycywgcmVtb3ZlIGVtcHR5IG9uZXMgYW5kIHJlbW92ZSB0aGUgcGFyYW1ldGVyIHdpdGggdGhlIHNhbWUgbmFtZSBhcyB0aGUgbmV3IG9uZVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvbGRQYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9sZFBhcmFtZXRlclBhaXIgPSBvbGRQYXJhbWV0ZXJzW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9sZFBhcmFtZXRlclBhaXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkUGFyYW1ldGVyTmFtZSA9IG9sZFBhcmFtZXRlclBhaXIuc3BsaXQoJz0nKVswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZFBhcmFtZXRlclZhbHVlID0gb2xkUGFyYW1ldGVyUGFpci5zcGxpdCgnPScpWzFdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGRvbid0IGFkZCBlbXB0eSBwYXJhbWV0ZXJzIGFnYWluXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRQYXJhbWV0ZXJWYWx1ZSAmJiBvbGRQYXJhbWV0ZXJWYWx1ZS50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2tpcCB0aGUgdGhlIG9sZCBwYXJhbWV0ZXIgaWYgaXQncyB0aGUgc2FtZSBhcyB0aGUgbmV3IHBhcmFtZXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFBhcmFtZXRlck5hbWUgIT09IHBhcmFtZXRlck5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQYXJhbWV0ZXJzLnB1c2gob2xkUGFyYW1ldGVyTmFtZSArIFwiPVwiICsgb2xkUGFyYW1ldGVyVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBqb2luIG5ldyBwYXJhbWV0ZXJzXG4gICAgICAgICAgICBhLnNlYXJjaCA9ICc/JyArIG5ld1BhcmFtZXRlcnMuam9pbignJicpO1xuXG4gICAgICAgICAgICByZXR1cm4gYS5ocmVmO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeHBpcmVzIHRoZSBjb29raWUgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBieSBzZXR0aW5nIGEgY29va2llIHdpdGggdGhlIGFwcHJvcHJpYXRlIGBtYXgtYWdlYCBhbmQgYGV4cGlyZXNgXG4gICAgICAgICAqIHNldHRpbmdzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29va2llTmFtZSBOYW1lIG9mIHRoZSBjb29raWUgdG8gZXhwaXJlLlxuICAgICAgICAgKi9cbiAgICAgICAgZXhwaXJlQ29va2llIDogZnVuY3Rpb24oY29va2llTmFtZSkge1xuICAgICAgICAgICAgUHJpbWVGYWNlcy5zZXRDb29raWUoY29va2llTmFtZSwgJ3RydWUnLCB7IHBhdGg6ICcvJywgZXhwaXJlczogLTEwLCAnbWF4LWFnZSc6ICcwJyB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XHRcbiIsICIvLyBzZWUgIzczOTVcbi8vIHdlIGFsd2F5cyBhZGQgdmFsaWRhdGlvbi9iZWFudmFsaWRhdGlvbi5qcyBvbiBlYWNoIHBhZ2UsIGFsc28gaWYgbm8gUHJpbWVGYWNlcyBjb21wb25lbnQgaXMgYXZhaWxhYmxlXG4vLyBzby4uLiBqdXN0IGNoZWNrIGlmIHByaW1lZmFjZXMuanMgd2FzIHJlbmRlcmVkXG5pZiAod2luZG93LlByaW1lRmFjZXMpIHtcblxuICAgIC8qKlxuICAgICAqIEEgc2hvcnRjdXQgZm9yIGBQcmltZUZhY2VzLnZhbGlkYXRpb24udmFsaWRhdGVgIHVzZWQgYnkgc2VydmVyLXNpZGUgcmVuZGVyZXJzLlxuICAgICAqIElmIHRoZSBgYWpheGAgYXR0cmlidXRlIGlzIHNldCB0byBgdHJ1ZWAgKHRoZSBkZWZhdWx0IGlzIGBmYWxzZWApLCBhbGwgaW5wdXRzIGNvbmZpZ3VyZWQgYnkgdGhlIGBwcm9jZXNzYCBhdHRyaWJ1dGUgYXJlIHZhbGlkYXRlZFxuICAgICAqIGFuZCBhbGwgbWVzc2FnZXMgZm9yIHRoZSBpbnB1dHMgY29uZmlndXJlZCBieSB0aGUgYHVwZGF0ZWAgYXR0cmlidXRlIGFyZSByZW5kZXJlZC5cbiAgICAgKiBPdGhlcndpc2UsIGlmIHRoZSBgYWpheGAgYXR0cmlidXRlIGlzIHNldCB0byB0aGUgYGZhbHNlYCwgYWxsIGlucHV0cyBvZiB0aGUgcGFyZW50IGZvcm0sIG9mIHRoZSBgc291cmNlYCBhdHRyaWJ1dGUsIGFyZSBwcm9jZXNzZWQgYW5kIHVwZGF0ZWQuXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtQYXJ0aWFsPFByaW1lRmFjZXMudmFsaWRhdGlvbi5TaG9ydGhhbmRDb25maWd1cmF0aW9uPn0gY2ZnIEFuIGNvbmZpZ3VyYXRpb24uXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSByZXF1ZXN0IHdvdWxkIG5vdCByZXN1bHQgaW4gdmFsaWRhdGlvbiBlcnJvcnMsIG9yIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIFByaW1lRmFjZXMudmIgPSBmdW5jdGlvbihjZmcpIHtcbiAgICAgICAgZm9yICh2YXIgb3B0aW9uIGluIGNmZykge1xuICAgICAgICAgICAgaWYgKCFjZmcuaGFzT3duUHJvcGVydHkob3B0aW9uKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBqdXN0IHBhc3MgdGhvdWdoIGlmIG5vIG1hcHBpbmcgaXMgYXZhaWxhYmxlXG4gICAgICAgICAgICBpZiAoUHJpbWVGYWNlcy52YWxpZGF0aW9uLkNGR19TSE9SVENVVFNbb3B0aW9uXSkge1xuICAgICAgICAgICAgICAgIGNmZ1tQcmltZUZhY2VzLnZhbGlkYXRpb24uQ0ZHX1NIT1JUQ1VUU1tvcHRpb25dXSA9IGNmZ1tvcHRpb25dO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBjZmdbb3B0aW9uXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoaWdobGlnaHQgPSBjZmcuaGlnaGxpZ2h0IHx8IHRydWU7XG4gICAgICAgIHZhciBmb2N1cyA9IGNmZy5mb2N1cyB8fCB0cnVlO1xuICAgICAgICB2YXIgcmVuZGVyTWVzc2FnZXMgPSBjZmcucmVuZGVyTWVzc2FnZXMgfHwgdHJ1ZTtcbiAgICAgICAgdmFyIHZhbGlkYXRlSW52aXNpYmxlRWxlbWVudHMgPSBjZmcudmFsaWRhdGVJbnZpc2libGVFbGVtZW50cyB8fCBmYWxzZTtcbiAgICAgICAgdmFyIGxvZ1VucmVuZGVyZWRNZXNzYWdlcyA9IGNmZy5sb2dVbnJlbmRlcmVkTWVzc2FnZXMgfHwgcmVuZGVyTWVzc2FnZXM7XG5cbiAgICAgICAgdmFyICRzb3VyY2UgPSAkKGNmZy5zb3VyY2UpO1xuXG4gICAgICAgIHZhciBwcm9jZXNzID0gUHJpbWVGYWNlcy52YWxpZGF0aW9uLlV0aWxzLnJlc29sdmVQcm9jZXNzKGNmZywgJHNvdXJjZSk7XG4gICAgICAgIHZhciB1cGRhdGUgPSBQcmltZUZhY2VzLnZhbGlkYXRpb24uVXRpbHMucmVzb2x2ZVVwZGF0ZShjZmcsICRzb3VyY2UpO1xuXG4gICAgICAgIHZhciByZXN1bHQgPSBQcmltZUZhY2VzLnZhbGlkYXRpb24udmFsaWRhdGUoJHNvdXJjZSwgcHJvY2VzcywgdXBkYXRlLCBoaWdobGlnaHQsIGZvY3VzLCByZW5kZXJNZXNzYWdlcywgdmFsaWRhdGVJbnZpc2libGVFbGVtZW50cywgbG9nVW5yZW5kZXJlZE1lc3NhZ2VzKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC52YWxpZDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQSBzaG9ydGN1dCBmb3IgYFByaW1lRmFjZXMudmFsaWRhdGlvbi52YWxpZGF0ZUluc3RhbnRgLiBUaGlzIGlzIHVzZWQgYnkgYHA6Y2xpZW50VmFsaWRhdG9yYC5cbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZyB8IEhUTUxFbGVtZW50IHwgSlF1ZXJ5fSBlbGVtZW50IFRoZSBJRCBvZiBhbiBlbGVtZW50IHRvIHZhbGlkYXRlLCBvciB0aGUgZWxlbWVudCBpdHNlbGYuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBoaWdobGlnaHQgSWYgdGhlIGludmFsaWQgZWxlbWVudCBzaG91bGQgYmUgaGlnaGxpZ2h0ZWQuXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZW5kZXJNZXNzYWdlcyBJZiBtZXNzYWdlcyBzaG91bGQgYmUgcmVuZGVyZWQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSBlbGVtZW50IGlzIHZhbGlkLCBvciBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBQcmltZUZhY2VzLnZpID0gZnVuY3Rpb24oZWxlbWVudCwgaGlnaGxpZ2h0LCByZW5kZXJNZXNzYWdlcykge1xuICAgICAgICByZXR1cm4gUHJpbWVGYWNlcy52YWxpZGF0aW9uLnZhbGlkYXRlSW5zdGFudChlbGVtZW50LCBoaWdobGlnaHQsIHJlbmRlck1lc3NhZ2VzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJpbWVGYWNlcyBDbGllbnQgU2lkZSBWYWxpZGF0aW9uIEZyYW1ld29ya1xuICAgICAqL1xuICAgICQuZXh0ZW5kKFByaW1lRmFjZXMubG9jYWxlc1snZW5fVVMnXSx7XG4gICAgICAgIGRlY2ltYWxTZXBhcmF0b3I6ICcuJyxcbiAgICAgICAgZ3JvdXBpbmdTZXBhcmF0b3I6ICcsJyxcbiAgICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy5jb21wb25lbnQuVUlJbnB1dC5SRVFVSVJFRCc6ICd7MH06IFZhbGlkYXRpb24gRXJyb3I6IFZhbHVlIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMuY29udmVydGVyLkludGVnZXJDb252ZXJ0ZXIuSU5URUdFUic6ICd7Mn06IFxcJ3swfVxcJyBtdXN0IGJlIGEgbnVtYmVyIGNvbnNpc3Rpbmcgb2Ygb25lIG9yIG1vcmUgZGlnaXRzLicsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMuY29udmVydGVyLkludGVnZXJDb252ZXJ0ZXIuSU5URUdFUl9kZXRhaWwnOiAnezJ9OiBcXCd7MH1cXCcgbXVzdCBiZSBhIG51bWJlciBiZXR3ZWVuIC0yMTQ3NDgzNjQ4IGFuZCAyMTQ3NDgzNjQ3IEV4YW1wbGU6IHsxfScsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMuY29udmVydGVyLkxvbmdDb252ZXJ0ZXIuTE9ORyc6ICd7Mn06IFxcJ3swfVxcJyBtdXN0IGJlIGEgbnVtYmVyIGNvbnNpc3Rpbmcgb2Ygb25lIG9yIG1vcmUgZGlnaXRzLicsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMuY29udmVydGVyLkxvbmdDb252ZXJ0ZXIuTE9OR19kZXRhaWwnOiAnezJ9OiBcXCd7MH1cXCcgbXVzdCBiZSBhIG51bWJlciBiZXR3ZWVuIC05MjIzMzcyMDM2ODU0Nzc1ODA4IHRvIDkyMjMzNzIwMzY4NTQ3NzU4MDcgRXhhbXBsZTogezF9JyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuRG91YmxlQ29udmVydGVyLkRPVUJMRSc6ICd7Mn06IFxcJ3swfVxcJyBtdXN0IGJlIGEgbnVtYmVyIGNvbnNpc3Rpbmcgb2Ygb25lIG9yIG1vcmUgZGlnaXRzLicsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMuY29udmVydGVyLkRvdWJsZUNvbnZlcnRlci5ET1VCTEVfZGV0YWlsJzogJ3syfTogXFwnezB9XFwnIG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiA0LjlFLTMyNCBhbmQgMS43OTc2OTMxMzQ4NjIzMTU3RTMwOCAgRXhhbXBsZTogezF9JyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuQmlnRGVjaW1hbENvbnZlcnRlci5ERUNJTUFMJzogJ3syfTogXFwnezB9XFwnIG11c3QgYmUgYSBzaWduZWQgZGVjaW1hbCBudW1iZXIuJyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuQmlnRGVjaW1hbENvbnZlcnRlci5ERUNJTUFMX2RldGFpbCc6ICd7Mn06IFxcJ3swfVxcJyBtdXN0IGJlIGEgc2lnbmVkIGRlY2ltYWwgbnVtYmVyIGNvbnNpc3Rpbmcgb2YgemVybyBvciBtb3JlIGRpZ2l0cywgdGhhdCBtYXkgYmUgZm9sbG93ZWQgYnkgYSBkZWNpbWFsIHBvaW50IGFuZCBmcmFjdGlvbi4gIEV4YW1wbGU6IHsxfScsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMuY29udmVydGVyLkJpZ0ludGVnZXJDb252ZXJ0ZXIuQklHSU5URUdFUic6ICd7Mn06IFxcJ3swfVxcJyBtdXN0IGJlIGEgbnVtYmVyIGNvbnNpc3Rpbmcgb2Ygb25lIG9yIG1vcmUgZGlnaXRzLicsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMuY29udmVydGVyLkJpZ0ludGVnZXJDb252ZXJ0ZXIuQklHSU5URUdFUl9kZXRhaWwnOiAnezJ9OiBcXCd7MH1cXCcgbXVzdCBiZSBhIG51bWJlciBjb25zaXN0aW5nIG9mIG9uZSBvciBtb3JlIGRpZ2l0cy4gRXhhbXBsZTogezF9JyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuQnl0ZUNvbnZlcnRlci5CWVRFJzogJ3syfTogXFwnezB9XFwnIG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiAtMTI4IGFuZCAxMjcuJyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuQnl0ZUNvbnZlcnRlci5CWVRFX2RldGFpbCc6ICd7Mn06IFxcJ3swfVxcJyBtdXN0IGJlIGEgbnVtYmVyIGJldHdlZW4gLTEyOCBhbmQgMTI3LiAgRXhhbXBsZTogezF9JyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuQ2hhcmFjdGVyQ29udmVydGVyLkNIQVJBQ1RFUic6ICd7MX06IFxcJ3swfVxcJyBtdXN0IGJlIGEgdmFsaWQgY2hhcmFjdGVyLicsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMuY29udmVydGVyLkNoYXJhY3RlckNvbnZlcnRlci5DSEFSQUNURVJfZGV0YWlsJzogJ3sxfTogXFwnezB9XFwnIG11c3QgYmUgYSB2YWxpZCBBU0NJSSBjaGFyYWN0ZXIuJyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuU2hvcnRDb252ZXJ0ZXIuU0hPUlQnOiAnezJ9OiBcXCd7MH1cXCcgbXVzdCBiZSBhIG51bWJlciBjb25zaXN0aW5nIG9mIG9uZSBvciBtb3JlIGRpZ2l0cy4nLFxuICAgICAgICAgICAgJ2phdmF4LmZhY2VzLmNvbnZlcnRlci5TaG9ydENvbnZlcnRlci5TSE9SVF9kZXRhaWwnOiAnezJ9OiBcXCd7MH1cXCcgbXVzdCBiZSBhIG51bWJlciBiZXR3ZWVuIC0zMjc2OCBhbmQgMzI3NjcgRXhhbXBsZTogezF9JyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuQm9vbGVhbkNvbnZlcnRlci5CT09MRUFOJzogJ3sxfTogXFwnezB9XFwnIG11c3QgYmUgXFwndHJ1ZVxcJyBvciBcXCdmYWxzZVxcJycsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMuY29udmVydGVyLkJvb2xlYW5Db252ZXJ0ZXIuQk9PTEVBTl9kZXRhaWwnOiAnezF9OiBcXCd7MH1cXCcgbXVzdCBiZSBcXCd0cnVlXFwnIG9yIFxcJ2ZhbHNlXFwnLiAgQW55IHZhbHVlIG90aGVyIHRoYW4gXFwndHJ1ZVxcJyB3aWxsIGV2YWx1YXRlIHRvIFxcJ2ZhbHNlXFwnLicsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMudmFsaWRhdG9yLkxvbmdSYW5nZVZhbGlkYXRvci5NQVhJTVVNJzogJ3sxfTogVmFsaWRhdGlvbiBFcnJvcjogVmFsdWUgaXMgZ3JlYXRlciB0aGFuIGFsbG93YWJsZSBtYXhpbXVtIG9mIFxcJ3swfVxcJycsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMudmFsaWRhdG9yLkxvbmdSYW5nZVZhbGlkYXRvci5NSU5JTVVNJzogJ3sxfTogVmFsaWRhdGlvbiBFcnJvcjogVmFsdWUgaXMgbGVzcyB0aGFuIGFsbG93YWJsZSBtaW5pbXVtIG9mIFxcJ3swfVxcJycsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMudmFsaWRhdG9yLkxvbmdSYW5nZVZhbGlkYXRvci5OT1RfSU5fUkFOR0UnOiAnezJ9OiBWYWxpZGF0aW9uIEVycm9yOiBTcGVjaWZpZWQgYXR0cmlidXRlIGlzIG5vdCBiZXR3ZWVuIHRoZSBleHBlY3RlZCB2YWx1ZXMgb2YgezB9IGFuZCB7MX0uJyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy52YWxpZGF0b3IuTG9uZ1JhbmdlVmFsaWRhdG9yLlRZUEU9ezB9JzogJ1ZhbGlkYXRpb24gRXJyb3I6IFZhbHVlIGlzIG5vdCBvZiB0aGUgY29ycmVjdCB0eXBlLicsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMudmFsaWRhdG9yLkRvdWJsZVJhbmdlVmFsaWRhdG9yLk1BWElNVU0nOiAnezF9OiBWYWxpZGF0aW9uIEVycm9yOiBWYWx1ZSBpcyBncmVhdGVyIHRoYW4gYWxsb3dhYmxlIG1heGltdW0gb2YgXFwnezB9XFwnJyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy52YWxpZGF0b3IuRG91YmxlUmFuZ2VWYWxpZGF0b3IuTUlOSU1VTSc6ICd7MX06IFZhbGlkYXRpb24gRXJyb3I6IFZhbHVlIGlzIGxlc3MgdGhhbiBhbGxvd2FibGUgbWluaW11bSBvZiBcXCd7MH1cXCcnLFxuICAgICAgICAgICAgJ2phdmF4LmZhY2VzLnZhbGlkYXRvci5Eb3VibGVSYW5nZVZhbGlkYXRvci5OT1RfSU5fUkFOR0UnOiAnezJ9OiBWYWxpZGF0aW9uIEVycm9yOiBTcGVjaWZpZWQgYXR0cmlidXRlIGlzIG5vdCBiZXR3ZWVuIHRoZSBleHBlY3RlZCB2YWx1ZXMgb2YgezB9IGFuZCB7MX0nLFxuICAgICAgICAgICAgJ2phdmF4LmZhY2VzLnZhbGlkYXRvci5Eb3VibGVSYW5nZVZhbGlkYXRvci5UWVBFPXswfSc6ICdWYWxpZGF0aW9uIEVycm9yOiBWYWx1ZSBpcyBub3Qgb2YgdGhlIGNvcnJlY3QgdHlwZScsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMuY29udmVydGVyLkZsb2F0Q29udmVydGVyLkZMT0FUJzogJ3syfTogXFwnezB9XFwnIG11c3QgYmUgYSBudW1iZXIgY29uc2lzdGluZyBvZiBvbmUgb3IgbW9yZSBkaWdpdHMuJyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuRmxvYXRDb252ZXJ0ZXIuRkxPQVRfZGV0YWlsJzogJ3syfTogXFwnezB9XFwnIG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiAxLjRFLTQ1IGFuZCAzLjQwMjgyMzVFMzggIEV4YW1wbGU6IHsxfScsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMuY29udmVydGVyLkRhdGVUaW1lQ29udmVydGVyLkRBVEUnOiAnezJ9OiBcXCd7MH1cXCcgY291bGQgbm90IGJlIHVuZGVyc3Rvb2QgYXMgYSBkYXRlLicsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMuY29udmVydGVyLkRhdGVUaW1lQ29udmVydGVyLkRBVEVfZGV0YWlsJzogJ3syfTogXFwnezB9XFwnIGNvdWxkIG5vdCBiZSB1bmRlcnN0b29kIGFzIGEgZGF0ZS4gRXhhbXBsZTogezF9JyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuRGF0ZVRpbWVDb252ZXJ0ZXIuVElNRSc6ICd7Mn06IFxcJ3swfVxcJyBjb3VsZCBub3QgYmUgdW5kZXJzdG9vZCBhcyBhIHRpbWUuJyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuRGF0ZVRpbWVDb252ZXJ0ZXIuVElNRV9kZXRhaWwnOiAnezJ9OiBcXCd7MH1cXCcgY291bGQgbm90IGJlIHVuZGVyc3Rvb2QgYXMgYSB0aW1lLiBFeGFtcGxlOiB7MX0nLFxuICAgICAgICAgICAgJ2phdmF4LmZhY2VzLmNvbnZlcnRlci5EYXRlVGltZUNvbnZlcnRlci5EQVRFVElNRSc6ICd7Mn06IFxcJ3swfVxcJyBjb3VsZCBub3QgYmUgdW5kZXJzdG9vZCBhcyBhIGRhdGUgYW5kIHRpbWUuJyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuRGF0ZVRpbWVDb252ZXJ0ZXIuREFURVRJTUVfZGV0YWlsJzogJ3syfTogXFwnezB9XFwnIGNvdWxkIG5vdCBiZSB1bmRlcnN0b29kIGFzIGEgZGF0ZSBhbmQgdGltZS4gRXhhbXBsZTogezF9JyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuRGF0ZVRpbWVDb252ZXJ0ZXIuUEFUVEVSTl9UWVBFJzogJ3sxfTogQSBcXCdwYXR0ZXJuXFwnIG9yIFxcJ3R5cGVcXCcgYXR0cmlidXRlIG11c3QgYmUgc3BlY2lmaWVkIHRvIGNvbnZlcnQgdGhlIHZhbHVlIFxcJ3swfVxcJycsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMuY29udmVydGVyLk51bWJlckNvbnZlcnRlci5DVVJSRU5DWSc6ICd7Mn06IFxcJ3swfVxcJyBjb3VsZCBub3QgYmUgdW5kZXJzdG9vZCBhcyBhIGN1cnJlbmN5IHZhbHVlLicsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMuY29udmVydGVyLk51bWJlckNvbnZlcnRlci5DVVJSRU5DWV9kZXRhaWwnOiAnezJ9OiBcXCd7MH1cXCcgY291bGQgbm90IGJlIHVuZGVyc3Rvb2QgYXMgYSBjdXJyZW5jeSB2YWx1ZS4gRXhhbXBsZTogezF9JyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuTnVtYmVyQ29udmVydGVyLlBFUkNFTlQnOiAnezJ9OiBcXCd7MH1cXCcgY291bGQgbm90IGJlIHVuZGVyc3Rvb2QgYXMgYSBwZXJjZW50YWdlLicsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMuY29udmVydGVyLk51bWJlckNvbnZlcnRlci5QRVJDRU5UX2RldGFpbCc6ICd7Mn06IFxcJ3swfVxcJyBjb3VsZCBub3QgYmUgdW5kZXJzdG9vZCBhcyBhIHBlcmNlbnRhZ2UuIEV4YW1wbGU6IHsxfScsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMuY29udmVydGVyLk51bWJlckNvbnZlcnRlci5OVU1CRVInOiAnezJ9OiBcXCd7MH1cXCcgaXMgbm90IGEgbnVtYmVyLicsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMuY29udmVydGVyLk51bWJlckNvbnZlcnRlci5OVU1CRVJfZGV0YWlsJzogJ3syfTogXFwnezB9XFwnIGlzIG5vdCBhIG51bWJlci4gRXhhbXBsZTogezF9JyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuTnVtYmVyQ29udmVydGVyLlBBVFRFUk4nOiAnezJ9OiBcXCd7MH1cXCcgaXMgbm90IGEgbnVtYmVyIHBhdHRlcm4uJyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuTnVtYmVyQ29udmVydGVyLlBBVFRFUk5fZGV0YWlsJzogJ3syfTogXFwnezB9XFwnIGlzIG5vdCBhIG51bWJlciBwYXR0ZXJuLiBFeGFtcGxlOiB7MX0nLFxuICAgICAgICAgICAgJ2phdmF4LmZhY2VzLnZhbGlkYXRvci5MZW5ndGhWYWxpZGF0b3IuTUlOSU1VTSc6ICd7MX06IFZhbGlkYXRpb24gRXJyb3I6IExlbmd0aCBpcyBsZXNzIHRoYW4gYWxsb3dhYmxlIG1pbmltdW0gb2YgXFwnezB9XFwnJyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy52YWxpZGF0b3IuTGVuZ3RoVmFsaWRhdG9yLk1BWElNVU0nOiAnezF9OiBWYWxpZGF0aW9uIEVycm9yOiBMZW5ndGggaXMgZ3JlYXRlciB0aGFuIGFsbG93YWJsZSBtYXhpbXVtIG9mIFxcJ3swfVxcJycsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMudmFsaWRhdG9yLlJlZ2V4VmFsaWRhdG9yLlBBVFRFUk5fTk9UX1NFVCc6ICdSZWdleCBwYXR0ZXJuIG11c3QgYmUgc2V0LicsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMudmFsaWRhdG9yLlJlZ2V4VmFsaWRhdG9yLlBBVFRFUk5fTk9UX1NFVF9kZXRhaWwnOiAnUmVnZXggcGF0dGVybiBtdXN0IGJlIHNldCB0byBub24tZW1wdHkgdmFsdWUuJyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy52YWxpZGF0b3IuUmVnZXhWYWxpZGF0b3IuTk9UX01BVENIRUQnOiAnUmVnZXggUGF0dGVybiBub3QgbWF0Y2hlZCcsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMudmFsaWRhdG9yLlJlZ2V4VmFsaWRhdG9yLk5PVF9NQVRDSEVEX2RldGFpbCc6ICdSZWdleCBwYXR0ZXJuIG9mIFxcJ3swfVxcJyBub3QgbWF0Y2hlZCcsXG4gICAgICAgICAgICAnamF2YXguZmFjZXMudmFsaWRhdG9yLlJlZ2V4VmFsaWRhdG9yLk1BVENIX0VYQ0VQVElPTic6ICdFcnJvciBpbiByZWd1bGFyIGV4cHJlc3Npb24uJyxcbiAgICAgICAgICAgICdqYXZheC5mYWNlcy52YWxpZGF0b3IuUmVnZXhWYWxpZGF0b3IuTUFUQ0hfRVhDRVBUSU9OX2RldGFpbCc6ICdFcnJvciBpbiByZWd1bGFyIGV4cHJlc3Npb24sIFxcJ3swfVxcJydcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHdpdGggdGhlIGNsaWVudC1zaWRlIGltcGxlbWVudGF0aW9uIG9mIHNvbWUgZmFjZXMgdmFsaWRhdG9ycy4gVXNlZCBmb3IgaW1wbGVtZW50aW5nIGNsaWVudC1zaWRlXG4gICAgICogdmFsaWRhdGlvbiBmb3IgcXVpY2sgZmVlZGJhY2suXG4gICAgICogQHR5cGUge1JlY29yZDxzdHJpbmcsIFByaW1lRmFjZXMuVmFsaWRhdG9yPn1cbiAgICAgKi9cbiAgICBQcmltZUZhY2VzLnZhbGlkYXRvciA9IHsgfTtcblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCB3aXRoIHRoZSBjbGllbnQtc2lkZSBpbXBsZW1lbnRhdGlvbiBvZiBzb21lIGZhY2VzIGNvbnZlcnRlcnMuXG4gICAgICogQHR5cGUge1JlY29yZDxzdHJpbmcsIFByaW1lRmFjZXMuQ29udmVydGVyPn1cbiAgICAgKi9cbiAgICBQcmltZUZhY2VzLmNvbnZlcnRlciA9IHsgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBtb2R1bGUgZm9yIGVuYWJsaW5nIGNsaWVudCBzaWRlIHZhbGlkYXRpb24gb2YgZm9ybSBmaWVsZHMuXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqL1xuICAgIFByaW1lRmFjZXMudmFsaWRhdGlvbiA9IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhlIEFqYXgtY29tcGxldGUtaGFuZGxlciBib3VuZD9cbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBhamF4Q29tcGxldGVCb3VuZDogZmFsc2UsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBhcmFtZXRlciBzaG9ydGN1dCBtYXBwaW5nIGZvciB0aGUgbWV0aG9kIGBQcmltZUZhY2VzLnZiYC5cbiAgICAgICAgICogQHR5cGUge1JlY29yZDxzdHJpbmcsIHN0cmluZz59XG4gICAgICAgICAqL1xuICAgICAgICBDRkdfU0hPUlRDVVRTIDoge1xuICAgICAgICAgICAgJ3MnOiAnc291cmNlJyxcbiAgICAgICAgICAgICdwJzogJ3Byb2Nlc3MnLFxuICAgICAgICAgICAgJ3UnOiAndXBkYXRlJyxcbiAgICAgICAgICAgICdhJzogJ2FqYXgnLFxuICAgICAgICAgICAgJ2gnOiAnaGlnaGxpZ2h0JyxcbiAgICAgICAgICAgICdmJzogJ2ZvY3VzJyxcbiAgICAgICAgICAgICdyJzogJ3JlbmRlck1lc3NhZ2VzJyxcbiAgICAgICAgICAgICd2JzogJ3ZhbGlkYXRlSW52aXNpYmxlRWxlbWVudHMnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRyaWdnZXJzIGNsaWVudC1zaWRlLXZhbGlkYXRpb24gb2Ygc2luZ2xlIG9yIG11bHRpcGxlIGNvbnRhaW5lcnMgKGNvbXBsZXggdmFsaWRhdGlvbiBvciBzaW1wbGUgaW5wdXRzKS5cbiAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBzb3VyY2UgVGhlIHNvdXJjZSBlbGVtZW50LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZyB8IEhUTUxFbGVtZW50IHwgSlF1ZXJ5fSBwcm9jZXNzIFRoZSBlbGVtZW50cyB0byBiZSBwcm9jZXNzZWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgSFRNTEVsZW1lbnQgfCBKUXVlcnl9IHVwZGF0ZSBUaGUgZWxlbWVudHMgdG8gYmUgdXBkYXRlZC5cbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBoaWdobGlnaHQgSWYgaW52YWxpZCBlbGVtZW50cyBzaG91bGQgYmUgaGlnaGxpZ2h0ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZm9jdXMgSWYgdGhlIGZpcnN0IGludmFsaWQgZWxlbWVudCBzaG91bGQgYmUgZm9jdXNlZC5cbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSByZW5kZXJNZXNzYWdlcyBJZiBtZXNzYWdlcyBzaG91bGQgYmUgcmVuZGVyZWQuXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsaWRhdGVJbnZpc2libGVFbGVtZW50cyBJZiBpbnZpc2libGUgZWxlbWVudHMgc2hvdWxkIGJlIHZhbGlkYXRlZC5cbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBsb2dVbnJlbmRlcmVkTWVzc2FnZXMgSWYgdW5yZW5kZXJlZCBtZXNzYWdlcyBzaG91bGQgYmUgbG9nZ2VkLlxuICAgICAgICAgKiBAcmV0dXJuIHtQcmltZUZhY2VzLnZhbGlkYXRpb24uVmFsaWRhdGlvblJlc3VsdH0gVGhlIHZhbGlkYXRpb24gcmVzdWx0LlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsaWRhdGUgOiBmdW5jdGlvbihzb3VyY2UsIHByb2Nlc3MsIHVwZGF0ZSwgaGlnaGxpZ2h0LCBmb2N1cywgcmVuZGVyTWVzc2FnZXMsIHZhbGlkYXRlSW52aXNpYmxlRWxlbWVudHMsIGxvZ1VucmVuZGVyZWRNZXNzYWdlcykge1xuICAgICAgICAgICAgdmFyIHZjID0gUHJpbWVGYWNlcy52YWxpZGF0aW9uLlZhbGlkYXRpb25Db250ZXh0O1xuXG4gICAgICAgICAgICBwcm9jZXNzID0gUHJpbWVGYWNlcy5leHByZXNzaW9ucy5TZWFyY2hFeHByZXNzaW9uRmFjYWRlLnJlc29sdmVDb21wb25lbnRzQXNTZWxlY3Rvcihzb3VyY2UsIHByb2Nlc3MpO1xuXG4gICAgICAgICAgICAvLyB2YWxpZGF0ZSBhbGwgaW5wdXRzIGZpcnN0XG4gICAgICAgICAgICB2YXIgaW5wdXRzID0gJCgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9jZXNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbXBvbmVudCA9IHByb2Nlc3MuZXEoaSk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5pcygnOmlucHV0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzID0gaW5wdXRzLmFkZChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzID0gaW5wdXRzLmFkZChjb21wb25lbnQuZmluZCgnOmlucHV0OmVuYWJsZWQ6bm90KDpidXR0b24pW25hbWVdJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZUludmlzaWJsZUVsZW1lbnRzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlucHV0cyA9IGlucHV0cy5maWx0ZXIoJzp2aXNpYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIFByaW1lRmFjZXMudmFsaWRhdGlvbi52YWxpZGF0ZUlucHV0KHNvdXJjZSwgaW5wdXRzLmVxKGkpLCBoaWdobGlnaHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB2YWxpZGF0ZSBjb21wbGV4IHZhbGlkYXRpb25zLCB3aGljaCBjYW4gYmUgYXBwbGllZCB0byBhbnkgY29udGFpbmVyIGVsZW1lbnRcbiAgICAgICAgICAgIHZhciBub25JbnB1dHMgPSAkKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb2Nlc3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gcHJvY2Vzcy5lcShpKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LmlzKCc6bm90KDppbnB1dCknKSkge1xuICAgICAgICAgICAgICAgICAgICBub25JbnB1dHMgPSBub25JbnB1dHMuYWRkKGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vbklucHV0cyA9IG5vbklucHV0cy5hZGQoY29tcG9uZW50LmZpbmQoJzpub3QoOmlucHV0KScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vbklucHV0cyA9IG5vbklucHV0cy5maWx0ZXIoJ1tkYXRhLXAtdmFsXScpO1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRlSW52aXNpYmxlRWxlbWVudHMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbm9uSW5wdXRzID0gbm9uSW5wdXRzLmZpbHRlcignOnZpc2libGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9uSW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgUHJpbWVGYWNlcy52YWxpZGF0aW9uLnZhbGlkYXRlQ29tcGxleChzb3VyY2UsIG5vbklucHV0cy5lcShpKSwgaGlnaGxpZ2h0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZWFybHkgZXhpdCAtIHdlIGRvbid0IG5lZWQgdG8gcmVuZGVyIG1lc3NhZ2VzXG4gICAgICAgICAgICBpZiAodmMuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IHRydWUsIG1lc3NhZ2VzOiB7fSwgaGFzVW5yZW5kZXJlZE1lc3NhZ2U6IGZhbHNlIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJlbmRlciBtZXNzYWdlc1xuICAgICAgICAgICAgaWYgKHJlbmRlck1lc3NhZ2VzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlID0gUHJpbWVGYWNlcy5leHByZXNzaW9ucy5TZWFyY2hFeHByZXNzaW9uRmFjYWRlLnJlc29sdmVDb21wb25lbnRzQXNTZWxlY3Rvcihzb3VyY2UsIHVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1cGRhdGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbXBvbmVudCA9IHVwZGF0ZS5lcShpKTtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy52YWxpZGF0aW9uLlV0aWxzLnJlbmRlck1lc3NhZ2VzKHZjLm1lc3NhZ2VzLCBjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9mb2N1cyBmaXJzdCBlbGVtZW50XG4gICAgICAgICAgICBpZiAoZm9jdXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmMubWVzc2FnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZjLm1lc3NhZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQoUHJpbWVGYWNlcy5lc2NhcGVDbGllbnRJZChrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWwuaXMoJzpmb2N1c2FibGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmZpbmQoJzpmb2N1c2FibGU6Zmlyc3QnKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgIHZhbGlkOiB2Yy5pc0VtcHR5KCksXG4gICAgICAgICAgICAgICAgbWVzc2FnZXMgOiB2Yy5tZXNzYWdlcyxcbiAgICAgICAgICAgICAgICBoYXNVbnJlbmRlcmVkTWVzc2FnZTogZmFsc2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZvciAobGV0IGNsaWVudElkIGluIHZjLm1lc3NhZ2VzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1zZ3MgPSB2Yy5tZXNzYWdlc1tjbGllbnRJZF07XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbXNnIG9mIG1zZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtc2cucmVuZGVyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5oYXNVbnJlbmRlcmVkTWVzc2FnZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZW5kZXJNZXNzYWdlcyAmJiBsb2dVbnJlbmRlcmVkTWVzc2FnZXMgJiYgcmVzdWx0Lmhhc1VucmVuZGVyZWRNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgUHJpbWVGYWNlcy53YXJuKFwiVGhlcmUgYXJlIHNvbWUgdW5oYW5kbGVkIEZhY2VzTWVzc2FnZXMsIHRoaXMgbWVhbnMgbm90IGV2ZXJ5IEZhY2VzTWVzc2FnZSBoYWQgYSBjaGFuY2UgdG8gYmUgcmVuZGVyZWQuIFRoZXNlIHVuaGFuZGxlZCBGYWNlc01lc3NhZ2VzIGFyZTpcIik7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjbGllbnRJZCBpbiB2Yy5tZXNzYWdlcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbXNncyA9IHZjLm1lc3NhZ2VzW2NsaWVudElkXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbXNnIG9mIG1zZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbXNnLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy53YXJuKG1zZy5kZXRhaWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2Yy5jbGVhcigpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlYXJjaGVzIGZvciBhbGwgQ29tbWFuZEJ1dHRvbnMgd2l0aCB0dXJuZWQgb24gZHluYW1pYyBDU1YgYW5kIHRyaWdnZXJzIENTVi5cbiAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAqL1xuICAgICAgICB2YWxpZGF0ZUJ1dHRvbnNDc3ZSZXF1aXJlbWVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJ1tkYXRhLXBmLXZhbGlkYXRlY2xpZW50LWR5bmFtaWNdJykuZWFjaCgoaW5kZXgsIGJ0bikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVCdXR0b25Dc3ZSZXF1aXJlbWVudHMoYnRuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZGF0ZXMgdGhlIENTVi1yZXF1aXJlbWVudHMgb2YgYSBDb21tYW5kQnV0dG9uLlxuICAgICAgICAgKiBAZnVuY3Rpb25cbiAgICAgICAgICogQHBhcmFtIHtIVE1MQnV0dG9uRWxlbWVudH0gYnRuIENvbW1hbmRCdXR0b24gd2hpY2jCtHMgQ1NWLXJlcXVpcmVtZW50cyBzaG91bGQgYmUgdmFsaWRhdGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsaWRhdGVCdXR0b25Dc3ZSZXF1aXJlbWVudHM6IGZ1bmN0aW9uKGJ0bikge1xuICAgICAgICAgICAgY29uc3QgJHNvdXJjZSA9ICQoYnRuKTtcbiAgICAgICAgICAgIGNvbnN0IGNmZyA9IHtcbiAgICAgICAgICAgICAgICBhamF4OiBidG4uZGF0YXNldC5wZlZhbGlkYXRlY2xpZW50QWpheCxcbiAgICAgICAgICAgICAgICBwcm9jZXNzOiBidG4uZGF0YXNldC5wZlZhbGlkYXRlY2xpZW50UHJvY2VzcyxcbiAgICAgICAgICAgICAgICB1cGRhdGU6IGJ0bi5kYXRhc2V0LnBmVmFsaWRhdGVjbGllbnRVcGRhdGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzID0gUHJpbWVGYWNlcy52YWxpZGF0aW9uLlV0aWxzLnJlc29sdmVQcm9jZXNzKGNmZywgJHNvdXJjZSk7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGUgPSBQcmltZUZhY2VzLnZhbGlkYXRpb24uVXRpbHMucmVzb2x2ZVVwZGF0ZShjZmcsICRzb3VyY2UpO1xuXG4gICAgICAgICAgICBjb25zdCB3aWRnZXQgPSBQcmltZUZhY2VzLmdldFdpZGdldEJ5SWQoYnRuLmlkKTtcblxuICAgICAgICAgICAgaWYgKHdpZGdldCkge1xuICAgICAgICAgICAgICAgIGlmIChQcmltZUZhY2VzLnZhbGlkYXRpb24udmFsaWRhdGUoJHNvdXJjZSwgcHJvY2VzcywgdXBkYXRlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UpLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZGdldC5qcS5hZGRDbGFzcygndWktc3RhdGUtY3N2LXZhbGlkJyk7XG4gICAgICAgICAgICAgICAgICAgIHdpZGdldC5qcS5yZW1vdmVDbGFzcygndWktc3RhdGUtY3N2LWludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZGdldC5qcS5hZGRDbGFzcygndWktc3RhdGUtY3N2LWludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmpxLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1jc3YtdmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LmRpc2FibGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTm8gd2lkZ2V0IGZvdW5kIGZvciBJRCAnICsgYnRuLmlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUHJpbWVGYWNlcy52YWxpZGF0aW9uLlZhbGlkYXRpb25Db250ZXh0LmNsZWFyKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBlcmZvcm1zIGEgY2xpZW50LXNpZGUgdmFsaWRhdGlvbiBvZiB0aGUgZ2l2ZW4gZWxlbWVudC4gVGhlIGNvbnRleHQgb2YgdGhpcyB2YWxpZGF0aW9uIGlzIGEgc2luZ2xlIGZpZWxkIG9ubHkuXG4gICAgICAgICAqIElmIHRoZSBlbGVtZW50IGlzIHZhbGlkLCByZW1vdmVzIG9sZCBtZXNzYWdlcyBmcm9tIHRoZSBlbGVtZW50LlxuICAgICAgICAgKiBJZiB0aGUgdmFsdWUgb2YgdGhlIGVsZW1lbnQgaXMgaW52YWxpZCwgYWRkcyB0aGUgYXBwcm9wcmlhdGUgdmFsaWRhdGlvbiBmYWlsdXJlIG1lc3NhZ2VzLlxuICAgICAgICAgKiBUaGlzIGlzIHVzZWQgYnkgYHA6Y2xpZW50VmFsaWRhdG9yYC5cbiAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgSFRNTEVsZW1lbnQgfCBKUXVlcnl9IGVsIFRoZSBJRCBvZiBhbiBpbnB1dCB0byB2YWxpZGF0ZSwgb3IgdGhlIGlucHV0IGl0c2VsZi5cbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBoaWdobGlnaHQgSWYgdGhlIGludmFsaWQgZWxlbWVudCBzaG91bGQgYmUgaGlnaGxpZ2h0ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVuZGVyTWVzc2FnZXMgSWYgbWVzc2FnZXMgc2hvdWxkIGJlIHJlbmRlcmVkLlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIGVsZW1lbnQgaXMgdmFsaWQsIG9yIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsaWRhdGVJbnN0YW50IDogZnVuY3Rpb24oZWwsIGhpZ2hsaWdodCwgcmVuZGVyTWVzc2FnZXMpIHtcbiAgICAgICAgICAgIGhpZ2hsaWdodCA9IChoaWdobGlnaHQgPT09IHVuZGVmaW5lZCkgPyB0cnVlIDogaGlnaGxpZ2h0O1xuICAgICAgICAgICAgcmVuZGVyTWVzc2FnZXMgPSAocmVuZGVyTWVzc2FnZXMgPT09IHVuZGVmaW5lZCkgPyB0cnVlIDogcmVuZGVyTWVzc2FnZXM7XG5cbiAgICAgICAgICAgIHZhciB2YyA9IFByaW1lRmFjZXMudmFsaWRhdGlvbi5WYWxpZGF0aW9uQ29udGV4dDtcblxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0eXBlb2YgZWwgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyAkKFByaW1lRmFjZXMuZXNjYXBlQ2xpZW50SWQoZWwpKVxuICAgICAgICAgICAgICAgIDogJChlbCk7XG4gICAgICAgICAgICB2YXIgY2xpZW50SWQgPSBlbGVtZW50LmRhdGEoUHJpbWVGYWNlcy5DTElFTlRfSURfREFUQSkgfHwgZWxlbWVudC5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICB2YXIgbWVzc2FnZUNvbXBvbmVudElkID0gZWxlbWVudC5kYXRhKCd0YXJnZXQtbWVzc2FnZScpO1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2VDb21wb25lbnQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHJlbmRlck1lc3NhZ2VzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VDb21wb25lbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQ29tcG9uZW50ID0gbWVzc2FnZUNvbXBvbmVudElkID09PSAncC11bmJvdW5kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICQoUHJpbWVGYWNlcy5lc2NhcGVDbGllbnRJZChtZXNzYWdlQ29tcG9uZW50SWQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlQ29tcG9uZW50cyA9IGVsZW1lbnQuY2xvc2VzdCgnZm9ybScpLmZpbmQoJ2Rpdi51aS1tZXNzYWdlJyk7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VDb21wb25lbnQgPSBQcmltZUZhY2VzLnZhbGlkYXRpb24uVXRpbHMuZmluZFRhcmdldE1lc3NhZ2VDb21wb25lbnQoY2xpZW50SWQsIG1lc3NhZ2VDb21wb25lbnRzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZUNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhKCd0YXJnZXQtbWVzc2FnZScsIG1lc3NhZ2VDb21wb25lbnQuYXR0cignaWQnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEoJ3RhcmdldC1tZXNzYWdlJywgJ3AtdW5ib3VuZCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2VXaWRnZXQgPSBQcmltZUZhY2VzLmdldFdpZGdldEJ5SWQobWVzc2FnZUNvbXBvbmVudC5hdHRyKCdpZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVdpZGdldC5jbGVhck1lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVCdXR0b25zQ3N2UmVxdWlyZW1lbnRzKCk7XG5cbiAgICAgICAgICAgIFByaW1lRmFjZXMudmFsaWRhdGlvbi52YWxpZGF0ZUlucHV0KGVsZW1lbnQsIGVsZW1lbnQsIGhpZ2hsaWdodCk7XG5cbiAgICAgICAgICAgIGlmICghdmMuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2VXaWRnZXQgPSBQcmltZUZhY2VzLmdldFdpZGdldEJ5SWQobWVzc2FnZUNvbXBvbmVudC5hdHRyKCdpZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVdpZGdldC5yZW5kZXJNZXNzYWdlKHZjLm1lc3NhZ2VzW2NsaWVudElkXVswXSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2Yy5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBfX05PVEVfXzogVGhpcyBpcyBhIGludGVybmFsIG1ldGhvZCBhbmQgc2hvdWxkIG9ubHkgYnkgdXNlZCBieSBgUHJpbWVGYWNlcy52YWxpZGF0aW9uLnZhbGlkYXRlYC5cbiAgICAgICAgICpcbiAgICAgICAgICogUGVyZm9ybXMgYSBjbGllbnQtc2lkZSB2YWxpZGF0aW9uIG9mICh0aGUgdmFsdWUgb2YpIHRoZSBnaXZlbiBpbnB1dCBlbGVtZW50LiBJZiB0aGUgZWxlbWVudCBpcyB2YWxpZCwgcmVtb3ZlcyBvbGRcbiAgICAgICAgICogbWVzc2FnZXMgZnJvbSB0aGUgZWxlbWVudC4gSWYgdGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50IGlzIGludmFsaWQsIGFkZHMgdGhlIGFwcHJvcHJpYXRlIHZhbGlkYXRpb24gZmFpbHVyZVxuICAgICAgICAgKiBtZXNzYWdlcy5cbiAgICAgICAgICogQGZ1bmN0aW9uXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKiBAcGFyYW0ge0pRdWVyeX0gc291cmNlIFRoZSBzb3VyY2UgZWxlbWVudC5cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IGVsZW1lbnQgQSBKUXVlcnkgaW5zdGFuY2Ugd2l0aCBhIHNpbmdsZSBpbnB1dCBlbGVtZW50IHRvIHZhbGlkYXRlLlxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGhpZ2hsaWdodCBJZiB0aGUgaW52YWxpZCBlbGVtZW50IHNob3VsZCBiZSBoaWdobGlnaHRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHZhbGlkYXRlSW5wdXQgOiBmdW5jdGlvbihzb3VyY2UsIGVsZW1lbnQsIGhpZ2hsaWdodCkge1xuICAgICAgICAgICAgdmFyIHZjID0gUHJpbWVGYWNlcy52YWxpZGF0aW9uLlZhbGlkYXRpb25Db250ZXh0O1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pcygnOmNoZWNrYm94LDpyYWRpbycpICYmIGVsZW1lbnQuZGF0YSgncC1ncm91cGVkJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgZ3JvdXBOYW1lID0gZWxlbWVudC5hdHRyKCduYW1lJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXZjLmlzR3JvdXBWYWxpZGF0ZWQoZ3JvdXBOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB2Yy5hZGRFbGVtZW50R3JvdXAoZ3JvdXBOYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnQoKS5oYXNDbGFzcygndWktaW5wdXRudW1iZXInKSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudCgpLmNoaWxkcmVuKCdpbnB1dDpoaWRkZW4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHN1Ym1pdHRlZFZhbHVlID0gUHJpbWVGYWNlcy52YWxpZGF0aW9uLlV0aWxzLmdldFN1Ym1pdHRlZFZhbHVlKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb252ZXJ0ZXJJZCA9IGVsZW1lbnQuZGF0YSgncC1jb24nKTtcblxuICAgICAgICAgICAgaWYgKFByaW1lRmFjZXMuc2V0dGluZ3MuY29uc2lkZXJFbXB0eVN0cmluZ051bGwgJiYgKCghc3VibWl0dGVkVmFsdWUpIHx8IHN1Ym1pdHRlZFZhbHVlLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBzdWJtaXR0ZWRWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBpZiAoY29udmVydGVySWQpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IFByaW1lRmFjZXMuY29udmVydGVyW2NvbnZlcnRlcklkXS5jb252ZXJ0KGVsZW1lbnQsIHN1Ym1pdHRlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb252ZXJ0ZXJNZXNzYWdlU3RyID0gZWxlbWVudC5kYXRhKCdwLWNtc2cnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnRlck1zZyA9IChjb252ZXJ0ZXJNZXNzYWdlU3RyKSA/IHtzdW1tYXJ5OmNvbnZlcnRlck1lc3NhZ2VTdHIsZGV0YWlsOmNvbnZlcnRlck1lc3NhZ2VTdHJ9IDogY2U7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHZjLmFkZE1lc3NhZ2UoZWxlbWVudCwgY29udmVydGVyTXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHN1Ym1pdHRlZFZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcmVxdWlyZWQgPSBlbGVtZW50LmRhdGEoJ3AtcmVxdWlyZWQnKTtcbiAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXR0cignYXJpYS1yZXF1aXJlZCcsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsaWQgJiYgcmVxdWlyZWQgJiYgKG5ld1ZhbHVlID09PSBudWxsIHx8IG5ld1ZhbHVlID09PSAnJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWlyZWRNZXNzYWdlU3RyID0gZWxlbWVudC5kYXRhKCdwLXJtc2cnKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWlyZWRNc2cgPSByZXF1aXJlZE1lc3NhZ2VTdHJcbiAgICAgICAgICAgICAgICAgICAgPyB7IHN1bW1hcnk6IHJlcXVpcmVkTWVzc2FnZVN0ciwgZGV0YWlsOiByZXF1aXJlZE1lc3NhZ2VTdHIgfVxuICAgICAgICAgICAgICAgICAgICA6IHZjLmdldE1lc3NhZ2UoJ2phdmF4LmZhY2VzLmNvbXBvbmVudC5VSUlucHV0LlJFUVVJUkVEJywgdmMuZ2V0TGFiZWwoZWxlbWVudCkpO1xuXG4gICAgICAgICAgICAgICAgdmMuYWRkTWVzc2FnZShlbGVtZW50LCByZXF1aXJlZE1zZyk7XG5cbiAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsaWRcbiAgICAgICAgICAgICAgICAmJiAoKHN1Ym1pdHRlZFZhbHVlICE9PSBudWxsICYmIFByaW1lRmFjZXMudHJpbShzdWJtaXR0ZWRWYWx1ZSkubGVuZ3RoID4gMCkgfHwgUHJpbWVGYWNlcy5zZXR0aW5ncy52YWxpZGF0ZUVtcHR5RmllbGRzKSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWxpZGF0b3JJZHMgPSBlbGVtZW50LmRhdGEoJ3AtdmFsJyk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRvcklkcykge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JJZHMgPSB2YWxpZGF0b3JJZHMuc3BsaXQoJywnKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbGlkYXRvcklkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRvcklkID0gdmFsaWRhdG9ySWRzW2pdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvciA9IFByaW1lRmFjZXMudmFsaWRhdG9yW3ZhbGlkYXRvcklkXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvci52YWxpZGF0ZShlbGVtZW50LCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoICh2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWRhdG9yTWVzc2FnZVN0ciA9IGVsZW1lbnQuZGF0YSgncC12bXNnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZGF0b3JNc2cgPSB2YWxpZGF0b3JNZXNzYWdlU3RyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtzdW1tYXJ5OiB2YWxpZGF0b3JNZXNzYWdlU3RyLCBkZXRhaWw6IHZhbGlkYXRvck1lc3NhZ2VTdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbGlkYXRvck1zZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGUuZy4gUHJpbWVGYWNlcy52YWxpZGF0b3JbJ3ByaW1lZmFjZXMuRmlsZSddIG1heSByZXR1cm4gYW4gYXJyYXkgb2YgbWVzc2FnZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvck1zZy5mb3JFYWNoKChtc2cpID0+IHZjLmFkZE1lc3NhZ2UoZWxlbWVudCwgbXNnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2Yy5hZGRNZXNzYWdlKGVsZW1lbnQsIHZhbGlkYXRvck1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGhpZ2hsaWdodGVyVHlwZSA9IGVsZW1lbnQuZGF0YSgncC1obCcpIHx8ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICBoaWdobGlnaHRlciA9IFByaW1lRmFjZXMudmFsaWRhdG9yLkhpZ2hsaWdodGVyLnR5cGVzW2hpZ2hsaWdodGVyVHlwZV07XG5cbiAgICAgICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVyLnVuaGlnaGxpZ2h0KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXR0cignYXJpYS1pbnZhbGlkJywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRlci5oaWdobGlnaHQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXR0cignYXJpYS1pbnZhbGlkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIF9fTk9URV9fOiBUaGlzIGlzIGFuIGludGVybmFsIG1ldGhvZCBhbmQgc2hvdWxkIG9ubHkgYmUgdXNlZCBieSBgUHJpbWVGYWNlcy52YWxpZGF0aW9uLnZhbGlkYXRlYC5cbiAgICAgICAgICpcbiAgICAgICAgICogUGVyZm9ybXMgYSBjbGllbnQtc2lkZSB2YWxpZGF0aW9uIG9mICh0aGUgdmFsdWUgb2YpIHRoZSBnaXZlbiBjb250YWluZXIgZWxlbWVudC4gSWYgdGhlIGVsZW1lbnQgaXMgdmFsaWQsXG4gICAgICAgICAqIHJlbW92ZXMgb2xkIG1lc3NhZ2VzIGZyb20gdGhlIGVsZW1lbnQuIElmIHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCBpcyBpbnZhbGlkLCBhZGRzIHRoZSBhcHByb3ByaWF0ZVxuICAgICAgICAgKiB2YWxpZGF0aW9uIGZhaWx1cmUgbWVzc2FnZXMuXG4gICAgICAgICAqIEBmdW5jdGlvblxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IHNvdXJjZSB0aGUgc291cmNlIGVsZW1lbnQuXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBlbGVtZW50IEEgSlF1ZXJ5IGluc3RhbmNlIHdpdGggYSBzaW5nbGUgaW5wdXQgZWxlbWVudCB0byB2YWxpZGF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBoaWdobGlnaHQgSWYgdGhlIGludmFsaWQgZWxlbWVudCBzaG91bGQgYmUgaGlnaGxpZ2h0ZWQuXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50IGlzIHZhbGlkLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICAgICAgICovXG4gICAgICAgIHZhbGlkYXRlQ29tcGxleCA6IGZ1bmN0aW9uKHNvdXJjZSwgZWxlbWVudCwgaGlnaGxpZ2h0KSB7XG4gICAgICAgICAgICB2YXIgdmMgPSBQcmltZUZhY2VzLnZhbGlkYXRpb24uVmFsaWRhdGlvbkNvbnRleHQ7XG4gICAgICAgICAgICB2YXIgdmFsaWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB2YXIgdmFsaWRhdG9ySWRzID0gZWxlbWVudC5kYXRhKCdwLXZhbCcpO1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRvcklkcykge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvcklkcyA9IHZhbGlkYXRvcklkcy5zcGxpdCgnLCcpO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxpZGF0b3JJZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRvcklkID0gdmFsaWRhdG9ySWRzW2pdLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yID0gUHJpbWVGYWNlcy52YWxpZGF0b3JbdmFsaWRhdG9ySWRdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yLnZhbGlkYXRlKHNvdXJjZSwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAodmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWRhdG9yTWVzc2FnZVN0ciA9IGVsZW1lbnQuZGF0YSgncC12bXNnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRvck1zZyA9IHZhbGlkYXRvck1lc3NhZ2VTdHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7c3VtbWFyeTogdmFsaWRhdG9yTWVzc2FnZVN0ciwgZGV0YWlsOiB2YWxpZGF0b3JNZXNzYWdlU3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmMuYWRkTWVzc2FnZShlbGVtZW50LCB2YWxpZGF0b3JNc2cpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoaWdobGlnaHRlclR5cGUgPSBlbGVtZW50LmRhdGEoJ3AtaGwnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoaWdobGlnaHRlciA9IGhpZ2hsaWdodGVyVHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFByaW1lRmFjZXMudmFsaWRhdG9yLkhpZ2hsaWdodGVyLnR5cGVzW2hpZ2hsaWdodGVyVHlwZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBQcmltZUZhY2VzLnZhbGlkYXRvci5IaWdobGlnaHRlci50eXBlc1t2YWxpZGF0b3JJZF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhpZ2hsaWdodGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRlci51bmhpZ2hsaWdodChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmF0dHIoJ2FyaWEtaW52YWxpZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoaWdobGlnaHQgJiYgaGlnaGxpZ2h0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVyLmhpZ2hsaWdodChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmF0dHIoJ2FyaWEtaW52YWxpZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgICAgICB9LFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIF9fTk9URV9fOiBUaGlzIGlzIGFuIGludGVybmFsIG1ldGhvZCBhbmQgc2hvdWxkIG9ubHkgYmUgdXNlZCBieSBQcmltZUZhY2VzIGl0c2VsZi5cbiAgICAgICAgICpcbiAgICAgICAgICogQmluZCB0byBBamF4LUNvbXBsZXRlLWV2ZW50cyB0byB1cGRhdGUgQ1NWLXN0YXRlIGFmdGVyIGFuIEFqYXgtY2FsbCBtYXkgaGF2ZSBjaGFuZ2VkIHN0YXRlLlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIGJpbmRBamF4Q29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWpheENvbXBsZXRlQm91bmQpIHJldHVybjtcblxuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcblxuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ3BmQWpheENvbXBsZXRlJywgZnVuY3Rpb24oZSwgeGhyLCBzZXR0aW5ncywgYXJncykge1xuICAgICAgICAgICAgICAgICR0aGlzLnZhbGlkYXRlQnV0dG9uc0NzdlJlcXVpcmVtZW50cygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGFsc28gYmluZCB0byBKU0YgKGY6YWpheCkgZXZlbnRzXG4gICAgICAgICAgICAvLyBOT1RFOiBQRiBhbHdheXMgZmlyZXMgXCJjb21wbGV0ZVwiIGFzIGxhc3QgZXZlbnQsIHdoZXJlYXMgSlNGIGxhc3QgZXZlbnRzIGFyZSBlaXRoZXIgXCJzdWNjZXNzXCIgb3IgXCJlcnJvclwiXG4gICAgICAgICAgICBpZiAod2luZG93LmpzZiAmJiBqc2YuYWpheCkge1xuICAgICAgICAgICAgICAgIGpzZi5hamF4LmFkZE9uRXZlbnQoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnIHx8IGRhdGEuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy52YWxpZGF0ZUJ1dHRvbnNDc3ZSZXF1aXJlbWVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFqYXhDb21wbGV0ZUJvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb2JqZWN0IHRoYXQgY29udGFpbnMgZnVuY3Rpb25hbGl0eSByZWxhdGVkIHRvIGhhbmRsaW5nIGZhY2VzIG1lc3NhZ2VzLCBlc3BlY2lhbGx5IHZhbGlkYXRpb24gZXJycm9yIG1lc3NhZ2VzLlxuICAgICAqIENvbnRhaW5zIG1ldGhvZHMgZm9yIGNsZWFyaW5nIG1lc3NhZ2Ugb2YgYW4gZWxlbWVudCBvciBhZGRpbmcgbWVzc2FnZXMgdG8gYW4gZWxlbWVudC5cbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICovXG4gICAgUHJpbWVGYWNlcy52YWxpZGF0aW9uLlZhbGlkYXRpb25Db250ZXh0ID0ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIG1hcCBiZXR3ZWVuIHRoZSBjbGllbnQgSUQgb2YgYW4gZWxlbWVudCBhbmQgYSBsaXN0IG9mIGZhY2VzIG1lc3NhZ2UgZm9yIHRoYXQgZWxlbWVudC5cbiAgICAgICAgICogQHR5cGUge1JlY29yZDxzdHJpbmcsIFByaW1lRmFjZXMuRmFjZXNNZXNzYWdlW10+fVxuICAgICAgICAgKi9cbiAgICAgICAgbWVzc2FnZXM6IHt9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGxpc3Qgb2YgZWxlbWVudCBncm91cHMgdG8gYmUgdmFsaWRhdGVkLiBVc3VhbGx5IGNvcnJlc3BvbmRzIHRvIHRoZSBuYW1lIG9mIHNpbmdsZSBmb3JtIGVsZW1lbnQuIEZvciBzb21lXG4gICAgICAgICAqIGNhc2VzIHN1Y2ggYXMgYSBzZWxlY3QgbGlzdCBvZiBjaGVja2JveGVzLCBhIGdyb3VwIG1heSBjb3JyZXNwb25kIHRvIG11bHRpcGxlIERPTSBlbGVtZW50cy5cbiAgICAgICAgICogQHR5cGUge3N0cmluZ1tdfVxuICAgICAgICAgKi9cbiAgICAgICAgZWxlbWVudEdyb3VwczogW10sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgYSBmYWNlcyBtZXNzYWdlIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZyB8IEhUTUxFbGVtZW50IHwgSlF1ZXJ5fSB0YXJnZXQgRWxlbWVudCB0byB3aGljaCB0byBhZGQgdGhlIG1lc3NhZ2UuXG4gICAgICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy5GYWNlc01lc3NhZ2V9IG1zZyBNZXNzYWdlIHRvIGFkZCB0byB0aGUgZ2l2ZW4gbWVzc2FnZS5cbiAgICAgICAgICovXG4gICAgICAgIGFkZE1lc3NhZ2U6IGZ1bmN0aW9uKHRhcmdldCwgbXNnKSB7XG4gICAgICAgICAgICB2YXIgY2xpZW50SWQ7XG4gICAgICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgJCkge1xuICAgICAgICAgICAgICAgIGNsaWVudElkID0gdGFyZ2V0LmRhdGEoUHJpbWVGYWNlcy5DTElFTlRfSURfREFUQSl8fHRhcmdldC5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjbGllbnRJZCA9IHRhcmdldC5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsaWVudElkID0gdGFyZ2V0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighdGhpcy5tZXNzYWdlc1tjbGllbnRJZF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2NsaWVudElkXSA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpbiBjYXNlIG9mIGEgZXhjZXB0aW9uIC0+IGxldHMgd3JhcCBpdCBpbnRvIGEgJ3VuZXhjZXB0ZWQgZXJyb3InXG4gICAgICAgICAgICBpZiAoIW1zZy5oYXNPd25Qcm9wZXJ0eSgnc3VtbWFyeScpICYmICFtc2cuaGFzT3duUHJvcGVydHkoJ2RldGFpbCcpKSB7XG4gICAgICAgICAgICAgICAgbXNnID0ge1xuICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5IDogUHJpbWVGYWNlcy5nZXRMb2NhbGVTZXR0aW5ncygpWyd1bmV4cGVjdGVkRXJyb3InXSxcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsIDogbXNnLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW1zZy5zZXZlcml0eSkge1xuICAgICAgICAgICAgICAgIG1zZy5zZXZlcml0eSA9IFwiZXJyb3JcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbXNnLnJlbmRlcmVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXNbY2xpZW50SWRdLnB1c2gobXNnKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVwb3J0cyBob3cgbWFueSBtZXNzYWdlcyB3ZXJlIGFkZGVkIHRvIHRoaXMgdmFsaWRhdGlvbiBjb250ZXh0LiBOb3RlIHRoYXQgZWFjaCBjb21wb25lbnQgbWF5IGhhdmUgc2V2ZXJhbFxuICAgICAgICAgKiBtZXNzYWdlcy5cbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIG1lc3NhZ2VzIGFkZGVkIHRvIHRoaXMgdmFsaWRhdGlvbiBjb250ZXh0LlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0TWVzc2FnZXNMZW5ndGg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IDAsIGtleTtcblxuICAgICAgICAgICAgZm9yIChrZXkgaW4gdGhpcy5tZXNzYWdlcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1lc3NhZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVja3Mgd2hldGhlciB0aGlzIHZhbGlkYXRpb24gY29udGV4dCBjb250YWlucyBhbnkgbWVzc2FnZXMgYXQgYWxsLlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhpcyB2YWxpZGF0aW9uIGNvbnRleHQgY29udGFpbnMgemVybyBtZXNzYWdlcywgb3IgYGZhbHNlYCBvdGhlcndpc2UuXG4gICAgICAgICAqL1xuICAgICAgICBpc0VtcHR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE1lc3NhZ2VzTGVuZ3RoKCkgPT09IDA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgYWxsIG1lc3NhZ2VzIGZyb20gdGhpcyB2YWxpZGF0aW9uIGNvbnRleHQuXG4gICAgICAgICAqL1xuICAgICAgICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzID0ge307XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRHcm91cHMgPSBbXTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvcnRjdXQgZm9yIFByaW1lRmFjZXMudmFsaWRhdGlvbi5VdGlscy5nZXRNZXNzYWdlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBpMThuIGtleSBvZiBhIG1lc3NhZ2UsIHN1Y2ggYXMgYGphdmF4LmZhY2VzLmNvbXBvbmVudC5VSUlucHV0LlJFUVVJUkVEYCBvclxuICAgICAgICAgKiBgamF2YXguZmFjZXMudmFsaWRhdG9yLkxlbmd0aFZhbGlkYXRvci5NSU5JTVVNYC5cbiAgICAgICAgICogQHJldHVybiB7UHJpbWVGYWNlcy5GYWNlc01lc3NhZ2UgfCBudWxsfSBUaGUgbG9jYWxpemVkIGZhY2VzIG1lc3NhZ2UgZm9yIHRoZSBnaXZlbiBrZXksIG9yIGBudWxsYCBpZiBub1xuICAgICAgICAgKiB0cmFuc2xhdGlvbiB3YXMgZm91bmQgZm9yIHRoZSBrZXkuXG4gICAgICAgICAqL1xuICAgICAgICBnZXRNZXNzYWdlOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBwYXJhbXMuc2hpZnQoKTsgLy8gcmVtb3ZlIGZpcnN0IHBhcmFtICdrZXknXG5cbiAgICAgICAgICAgIHJldHVybiBQcmltZUZhY2VzLnZhbGlkYXRpb24uVXRpbHMuZ2V0TWVzc2FnZShrZXksIHBhcmFtcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3J0Y3V0IGZvciBQcmltZUZhY2VzLnZhbGlkYXRpb24uVXRpbHMuZ2V0TGFiZWwuXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBlbGVtZW50IEEgRE9NIGVsZW1lbnQgZm9yIHdoaWNoIHRvIGZpbmQgdGhlIGxhYmVsLlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBsYWJlbCBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICAgICAgICovXG4gICAgICAgIGdldExhYmVsOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gUHJpbWVGYWNlcy52YWxpZGF0aW9uLlV0aWxzLmdldExhYmVsKGVsZW1lbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBncm91cCBpcyBpbiB0aGUgbGlzdCBvZiBncm91cHMgdG8gYmUgdmFsaWRhdGVkLiBBbiBlbGVtZW50IGdyb3VwIGlzIG9mdGVuXG4gICAgICAgICAqIGp1c3QgdGhlIG5hbWUgb2YgYSBzaW5nbGUgSU5QVVQsIFRFWFRBUkVBIG9yIFNFTEVDVCBlbGVtZW50LCBidXQgbWF5IGFsc28gY29uc2lzdCBvZiBtdWx0aXBsZSBET00gZWxlbWVudHMsXG4gICAgICAgICAqIHN1Y2ggYXMgaW4gdGhlIGNhc2Ugb2YgYSBzZWxlY3QgbGlzdCBvZiBjaGVja2JveGVzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIGFuIGVsZW1lbnQgZ3JvdXAgdG8gY2hlY2suXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZ2l2ZW4gZ3JvdXAgaXMgdG8gYmUgdmFsaWRhdGVkLCBvciBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICAgICAgICovXG4gICAgICAgIGlzR3JvdXBWYWxpZGF0ZWQ6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lbGVtZW50R3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudEdyb3Vwc1tpXSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgYSBncm91cCB0byB0aGUgbGlzdCBvZiBlbGVtZW50IGdyb3VwcyB0byB2YWxpZGF0ZS4gQW4gZWxlbWVudCBncm91cCBpcyBvZnRlbiBqdXN0IHRoZSBuYW1lIG9mIGEgc2luZ2xlXG4gICAgICAgICAqIElOUFVULCBURVhUQVJFQSBvciBTRUxFQ1QgZWxlbWVudCwgYnV0IG1heSBhbHNvIGNvbnNpc3Qgb2YgbXVsdGlwbGUgRE9NIGVsZW1lbnRzLCBzdWNoIGFzIGluIHRoZSBjYXNlIG9mXG4gICAgICAgICAqIHNlbGVjdCBsaXN0IG9mIGNoZWNrYm94ZXMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgYW4gZWxlbWVudCBncm91cCB0byBhZGQuXG4gICAgICAgICAqL1xuICAgICAgICBhZGRFbGVtZW50R3JvdXA6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudEdyb3Vwcy5wdXNoKG5hbWUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1vc3RseSBpbnRlcm5hbCB1dGlsaXR5IG1ldGhvZHMgdXNlZCB0byB2YWxpZGF0ZSBkYXRhIG9uIHRoZSBjbGllbnQuXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqL1xuICAgIFByaW1lRmFjZXMudmFsaWRhdGlvbi5VdGlscyA9IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRmluZHMgdGhlIGxvY2FsaXplZCB0ZXh0IG9mIHRoZSBnaXZlbiBtZXNzYWdlIGtleS4gV2hlbiB0aGUgY3VycmVudCBsb2NhbGUgZG9lcyBub3QgY29udGFpbiBhIHRyYW5zbGF0aW9uLFxuICAgICAgICAgKiBmYWxscyBiYWNrIHRvIHRoZSBkZWZhdWx0IEVuZ2xpc2ggbG9jYWxlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBpMThuIGtleSBvZiBhIG1lc3NhZ2UsIHN1Y2ggYXMgYGphdmF4LmZhY2VzLmNvbXBvbmVudC5VSUlucHV0LlJFUVVJUkVEYCBvclxuICAgICAgICAgKiBgamF2YXguZmFjZXMudmFsaWRhdG9yLkxlbmd0aFZhbGlkYXRvci5NSU5JTVVNYC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyYW1zIEEgbGlzdCBvZiBwYXJhbWV0ZXJzIGZvciB0aGUgcGxhY2Vob2xkZXJzLlxuICAgICAgICAgKiBAcmV0dXJuIHtQcmltZUZhY2VzLkZhY2VzTWVzc2FnZSB8IG51bGx9IFRoZSBsb2NhbGl6ZWQgZmFjZXMgbWVzc2FnZSBmb3IgdGhlIGdpdmVuIGtleSwgb3IgYG51bGxgIGlmIG5vXG4gICAgICAgICAqIHRyYW5zbGF0aW9uIHdhcyBmb3VuZCBmb3IgdGhlIGtleS5cbiAgICAgICAgICovXG4gICAgICAgIGdldE1lc3NhZ2U6IGZ1bmN0aW9uKGtleSwgcGFyYW1zKSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxlID0gUHJpbWVGYWNlcy5nZXRMb2NhbGVTZXR0aW5ncygpO1xuICAgICAgICAgICAgdmFyIGJ1bmRsZSA9IChsb2NhbGUubWVzc2FnZXMgJiYgbG9jYWxlLm1lc3NhZ2VzW2tleV0pID8gbG9jYWxlIDogUHJpbWVGYWNlcy5sb2NhbGVzWydlbl9VUyddO1xuXG4gICAgICAgICAgICB2YXIgc3VtbWFyeSA9IGJ1bmRsZS5tZXNzYWdlc1trZXldO1xuICAgICAgICAgICAgaWYgKCFzdW1tYXJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtbWFyeTogXCIjIyMgTWVzc2FnZSAnXCIgKyBrZXkgKyBcIicgbm90IGZvdW5kICMjI1wiLFxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IFwiIyMjIE1lc3NhZ2UgJ1wiICsga2V5ICsgXCInIG5vdCBmb3VuZCAjIyNcIlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN1bW1hcnkgPSBQcmltZUZhY2VzLnZhbGlkYXRpb24uVXRpbHMuZm9ybWF0KHN1bW1hcnksIHBhcmFtcyk7XG5cbiAgICAgICAgICAgIHZhciBkZXRhaWwgPSBidW5kbGUubWVzc2FnZXNba2V5ICsgJ19kZXRhaWwnXTtcbiAgICAgICAgICAgIGRldGFpbCA9IChkZXRhaWwpID8gUHJpbWVGYWNlcy52YWxpZGF0aW9uLlV0aWxzLmZvcm1hdChkZXRhaWwsIHBhcmFtcykgOiBzdW1tYXJ5O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN1bW1hcnk6IHN1bW1hcnksXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBkZXRhaWxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdpdmVuIGEgbWVzc2FnZSB3aXRoIHBsYWNlaG9sZGVycywgcmVwbGFjZXMgdGhlIHBsYWNlaG9sZGVycyB3aXRoIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLiBUaGUgZm9ybWF0IG9mIHRoZVxuICAgICAgICAgKiBtZXNzYWdlIGlzIHNpbWlsYXIgdG8sIGJ1dCBub3QgcXVpdGUgdGhlIHNhbWUgYXMsIHRoZSBmb3JtYXQgdXNlZCBieSBgamF2YS50ZXh0Lk1lc3NhZ2VGb3JtYXRgLlxuICAgICAgICAgKiBgYGBqYXZhc2NyaXB0XG4gICAgICAgICAqIGZvcm1hdChcIlZhbHVlIHJlcXVpcmVkIGZvciBlbGVtZW50IHswfVwiLCBbXCJlbWFpbFwiXSkgLy8gPT4gXCJWYWx1ZSByZXF1aXJlZCBmb3IgZWxlbWVudCBlbWFpbFwiXG4gICAgICAgICAqIGZvcm1hdChcIlVzZSB7MH0gYnJhY2VzIGxpa2UgdGhpczogJ3swfSdcIiwgW1wic2ltcGxlXCJdKSAvLyA9PiBcIlVzZSBzaW1wbGUgYnJhY2VzIGxpa2UgdGhpczogJ3NpbXBsZSdcIlxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciBBIG1lc3NhZ2Ugd2l0aCBwbGFjZWhvbGRlcnMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmFtcyBBIGxpc3Qgb2YgcGFyYW1ldGVycyBmb3IgdGhlIHBsYWNlaG9sZGVycy5cbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgc3RyaW5nIHdpdGggdGhlIHBsYWNlaG9sZGVycyByZXBsYWNlZCB3aXRoIHRoZSBnaXZlbiBwYXJhbXMuXG4gICAgICAgICAqL1xuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHN0ciwgcGFyYW1zKSB7XG4gICAgICAgICAgICB2YXIgcyA9IHN0cjtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cCgnXFxcXHsnICsgaSArICdcXFxcfScsICdnbScpO1xuICAgICAgICAgICAgICAgIHMgPSBzLnJlcGxhY2UocmVnLCBwYXJhbXNbaV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRmluZHMgdGhlIGxhYmVsIG9mIGEgRE9NIGVsZW1lbnQuIFRoaXMgaXMgZWl0aGVyIGEgY3VzdG9tIGxhYmVsIHNldCBvbiBhIGNvbXBvbmVudCwgb3IganVzdCB0aGUgSUQgb2YgdGhlXG4gICAgICAgICAqIGVsZW1lbnQuIFRoaXMgbGFiZWwgaXMgdXNlZCwgZm9yIGV4YW1wbGUsIGFzIHBhcnQgb2YgYSB2YWxpZGF0aW9uIGVycm9yIG1lc3NhZ2UgZm9yIHRoZSBlbGVtZW50LlxuICAgICAgICAgKiBAcGFyYW0ge0pRdWVyeX0gZWxlbWVudCBBIERPTSBlbGVtZW50IGZvciB3aGljaCB0byBmaW5kIHRoZSBsYWJlbC5cbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgbGFiZWwgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAgICAgICAqL1xuICAgICAgICBnZXRMYWJlbDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZGF0YSgncC1sYWJlbCcpIHx8IGVsZW1lbnQuYXR0cignaWQnKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2l2ZW4gYSBmb3JtIGVsZW1lbnQgKHN1Y2ggYXMgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QpLCBmaW5kcyB0aGUgdmFsdWUgdGhhdCB3b3VsZCBiZSBzZW50IHdoZW4gdGhlIGZvcm0gaXNcbiAgICAgICAgICogc3VibWl0dGVkLlxuICAgICAgICAgKiBAcGFyYW0ge0pRdWVyeX0gZWxlbWVudCBBIGZvcm0gZWxlbWVudCBmb3Igd2hpY2ggdG8gZmluZCBpdHMgdmFsdWUuXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHZhbHVlIG9mIHRoZSBmb3JtIGVsZW1lbnQsIG9yIHRoZSBlbXB0eSBzdHJpbmcgd2hlbiBpdCBkb2VzIG5vdCBoYXZlIGEgdmFsdWUuXG4gICAgICAgICAqL1xuICAgICAgICBnZXRTdWJtaXR0ZWRWYWx1ZTogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pcygnOnJhZGlvJykpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICQoJ2lucHV0OnJhZGlvW25hbWU9XCInICsgQ1NTLmVzY2FwZShlbGVtZW50LmF0dHIoJ25hbWUnKSkgKyAnXCJdOmNoZWNrZWQnKS52YWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnQuaXMoJzpjaGVja2JveCcpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBlbGVtZW50LmRhdGEoJ3AtZ3JvdXBlZCcpID8gJCgnaW5wdXQ6Y2hlY2tib3hbbmFtZT1cIicgKyBDU1MuZXNjYXBlKGVsZW1lbnQuYXR0cignbmFtZScpKSArICdcIl06Y2hlY2tlZCcpLnZhbCgpOiBlbGVtZW50LnByb3AoJ2NoZWNrZWQnKS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5pcygnOmZpbGUnKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZWxlbWVudFswXS5maWxlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZWxlbWVudC52YWwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyAnJzogdmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvciBhIGdpdmVuIElEIG9mIGEgY29tcG9uZW50LCBmaW5kcyB0aGUgRE9NIGVsZW1lbnQgd2l0aCB0aGUgbWVzc2FnZSBmb3IgdGhhdCBjb21wb25lbnQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRJZCBJRCBvZiBhIGNvbXBvbmVudCBmb3Igd2hpY2ggdG8gZmluZCB0aGUgdWkgbWVzc2FnZS5cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IG1lc3NhZ2VDb21wb25lbnRzIEEgSlF1ZXJ5IGluc3RhbmNlIHdpdGggYSBsaXN0IG9mIGB1aS1tZXNzYWdlYHMsIG9yIGBudWxsYCBpZiBub1xuICAgICAgICAgKiBzdWNoIGVsZW1lbnQgZXhpc3RzLlxuICAgICAgICAgKiBAcmV0dXJuIHtKUXVlcnkgfCBudWxsfSBUaGUgRE9NIGVsZW1lbnQgd2l0aCB0aGUgbWVzc2FnZXMgZm9yIHRoZSBnaXZlbiBjb21wb25lbnQsIG9yIGBudWxsYCB3aGVuIG5vIHN1Y2hcbiAgICAgICAgICogZWxlbWVudCBjb3VsZCBiZSBmb3VuZC5cbiAgICAgICAgICovXG4gICAgICAgIGZpbmRUYXJnZXRNZXNzYWdlQ29tcG9uZW50OiBmdW5jdGlvbihjbGllbnRJZCwgbWVzc2FnZUNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWVzc2FnZUNvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZUNvbXBvbmVudCA9IG1lc3NhZ2VDb21wb25lbnRzLmVxKGkpO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlQ29tcG9uZW50LmRhdGEoJ3RhcmdldCcpID09PSBjbGllbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZUNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbmRlcnMgYWxsIGdpdmVuIG1lc3NhZ2VzIGluIHRoZSBnaXZlbiBjb250YWluZXIuXG4gICAgICAgICAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgUHJpbWVGYWNlcy5GYWNlc01lc3NhZ2VbXT59IG1lc3NhZ2VzIFRoZSBtZXNzYWdlcyB0byByZW5kZXIuXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBjb250YWluZXIgVGhlIGNvbnRhaW5lciBmb3IgdGhlIG1lc3NhZ2VzLiBFaXRoZXIgdGhlIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3MgYHVpLW1lc3NhZ2VzYCwgb3JcbiAgICAgICAgICogYSBwYXJlbnQgb2Ygc3VjaCBhbiBlbGVtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVuZGVyTWVzc2FnZXM6IGZ1bmN0aW9uKG1lc3NhZ2VzLCBjb250YWluZXIpIHtcbiAgICAgICAgICAgIHZhciBtZXNzYWdlc0NvbXBvbmVudHMgPSAkKCksXG4gICAgICAgICAgICAgICAgbWVzc2FnZUNvbXBvbmVudHMgPSAkKCksXG4gICAgICAgICAgICAgICAgZ3Jvd2xDb21wb25lbnRzID0gJCgpO1xuXG4gICAgICAgICAgICBjb250YWluZXIuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCR0aGlzLmlzKCdkaXYudWktbWVzc2FnZXMnKSkge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlc0NvbXBvbmVudHMgPSBtZXNzYWdlc0NvbXBvbmVudHMuYWRkKCR0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzQ29tcG9uZW50cyA9IG1lc3NhZ2VzQ29tcG9uZW50cy5hZGQoJHRoaXMuZmluZCgnZGl2LnVpLW1lc3NhZ2VzJykpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkdGhpcy5pcygnZGl2LnVpLW1lc3NhZ2UnKSkge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQ29tcG9uZW50cyA9IG1lc3NhZ2VDb21wb25lbnRzLmFkZCgkdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlQ29tcG9uZW50cyA9IG1lc3NhZ2VDb21wb25lbnRzLmFkZCgkdGhpcy5maW5kKCdkaXYudWktbWVzc2FnZScpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJHRoaXMuaXMoJy51aS1ncm93bC1wbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3dsQ29tcG9uZW50cyA9IGdyb3dsQ29tcG9uZW50cy5hZGQoJHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ3Jvd2xDb21wb25lbnRzID0gZ3Jvd2xDb21wb25lbnRzLmFkZCgkdGhpcy5maW5kKCcudWktZ3Jvd2wtcGwnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGZpbHRlciBvdXQgYnkgc2V2ZXJpdHlcbiAgICAgICAgICAgIG1lc3NhZ2VzQ29tcG9uZW50cyA9IG1lc3NhZ2VzQ29tcG9uZW50cy5maWx0ZXIoZnVuY3Rpb24oaWR4KSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaXMoJy51aS1maWxldXBsb2FkLW1lc3NhZ2VzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5kYXRhKCdzZXZlcml0eScpLmluZGV4T2YoJ2Vycm9yJykgIT09IC0xO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBncm93bENvbXBvbmVudHMgPSBncm93bENvbXBvbmVudHMuZmlsdGVyKGZ1bmN0aW9uKGlkeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLmRhdGEoJ3NldmVyaXR5JykuaW5kZXhPZignZXJyb3InKSAhPT0gLTE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXNzYWdlc0NvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZXNDb21wb25lbnQgPSBtZXNzYWdlc0NvbXBvbmVudHMuZXEoaSksXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbE9ubHkgPSBtZXNzYWdlc0NvbXBvbmVudC5kYXRhKCdnbG9iYWwnKSxcbiAgICAgICAgICAgICAgICAgICAgcmVkaXNwbGF5ID0gbWVzc2FnZXNDb21wb25lbnQuZGF0YSgncmVkaXNwbGF5JyksXG4gICAgICAgICAgICAgICAgICAgIHNob3dTdW1tYXJ5ID0gbWVzc2FnZXNDb21wb25lbnQuZGF0YSgnc3VtbWFyeScpLFxuICAgICAgICAgICAgICAgICAgICBzaG93RGV0YWlsID0gbWVzc2FnZXNDb21wb25lbnQuZGF0YSgnZGV0YWlsJyksXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzV2lkZ2V0ID0gUHJpbWVGYWNlcy5nZXRXaWRnZXRCeUlkKG1lc3NhZ2VzQ29tcG9uZW50LmF0dHIoJ2lkJykpO1xuXG4gICAgICAgICAgICAgICAgbWVzc2FnZXNXaWRnZXQuY2xlYXJNZXNzYWdlcygpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2xpZW50SWQgaW4gbWVzc2FnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbXNnIG9mIG1lc3NhZ2VzW2NsaWVudElkXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsb2JhbE9ubHkgfHwgKG1zZy5yZW5kZXJlZCAmJiAhcmVkaXNwbGF5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNob3dTdW1tYXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnLnN1bW1hcnkgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2hvd0RldGFpbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZy5kZXRhaWwgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXNXaWRnZXQuYXBwZW5kTWVzc2FnZShtc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXNnLnJlbmRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm93bENvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZ3Jvd2xDb21wb25lbnQgPSBncm93bENvbXBvbmVudHMuZXEoaSksXG4gICAgICAgICAgICAgICAgICAgIHJlZGlzcGxheSA9IGdyb3dsQ29tcG9uZW50LmRhdGEoJ3JlZGlzcGxheScpLFxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxPbmx5ID0gZ3Jvd2xDb21wb25lbnQuZGF0YSgnZ2xvYmFsJyksXG4gICAgICAgICAgICAgICAgICAgIHNob3dTdW1tYXJ5ID0gZ3Jvd2xDb21wb25lbnQuZGF0YSgnc3VtbWFyeScpLFxuICAgICAgICAgICAgICAgICAgICBzaG93RGV0YWlsID0gZ3Jvd2xDb21wb25lbnQuZGF0YSgnZGV0YWlsJyksXG4gICAgICAgICAgICAgICAgICAgIGdyb3dsV2lkZ2V0ID0gUHJpbWVGYWNlcy5nZXRXaWRnZXRCeUlkKGdyb3dsQ29tcG9uZW50LmF0dHIoJ2lkJykpO1xuXG4gICAgICAgICAgICAgICAgZ3Jvd2xXaWRnZXQucmVtb3ZlQWxsKCk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjbGllbnRJZCBpbiBtZXNzYWdlcykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBtc2cgb2YgbWVzc2FnZXNbY2xpZW50SWRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsT25seSB8fCAobXNnLnJlbmRlcmVkICYmICFyZWRpc3BsYXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2hvd1N1bW1hcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cuc3VtbWFyeSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzaG93RGV0YWlsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnLmRldGFpbCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBncm93bFdpZGdldC5yZW5kZXJNZXNzYWdlKG1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtc2cucmVuZGVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1lc3NhZ2VDb21wb25lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2VDb21wb25lbnQgPSBtZXNzYWdlQ29tcG9uZW50cy5lcShpKSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gbWVzc2FnZUNvbXBvbmVudC5kYXRhKCd0YXJnZXQnKSxcbiAgICAgICAgICAgICAgICAgICAgcmVkaXNwbGF5ID0gbWVzc2FnZUNvbXBvbmVudC5kYXRhKCdyZWRpc3BsYXknKSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVdpZGdldCA9IFByaW1lRmFjZXMuZ2V0V2lkZ2V0QnlJZChtZXNzYWdlQ29tcG9uZW50LmF0dHIoJ2lkJykpO1xuXG4gICAgICAgICAgICAgICAgbWVzc2FnZVdpZGdldC5jbGVhck1lc3NhZ2UoKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNsaWVudElkIGluIG1lc3NhZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgIT09IGNsaWVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBtc2cgb2YgbWVzc2FnZXNbY2xpZW50SWRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXNnLnJlbmRlcmVkICYmICFyZWRpc3BsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVdpZGdldC5yZW5kZXJNZXNzYWdlKG1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtc2cucmVuZGVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXNvbHZlcyBwcm9jZXNzLWF0dHJpYnV0ZSBvZiBhIFByaW1lRmFjZXMtY29tcG9uZW50LiAoZS5nLiBDb21tYW5kQnV0dG9uKVxuICAgICAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMudmFsaWRhdGlvbi5Db25maWd1cmF0aW9ufSBjZmcgQ29uZmlndXJhdGlvbiBvZiB0aGUgUHJpbWVGYWNlcy1jb21wb25lbnQuXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBzb3VyY2UgVGhlIHNvdXJjZSBlbGVtZW50LlxuICAgICAgICAgKiBAcmV0dXJucyB7SlF1ZXJ5fSBSZXNvbHZlZCBqUXVlcnktZWxlbWVudC5cbiAgICAgICAgICovXG4gICAgICAgIHJlc29sdmVQcm9jZXNzOiBmdW5jdGlvbihjZmcsIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGNmZy5hamF4ICYmIGNmZy5wcm9jZXNzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByaW1lRmFjZXMuZXhwcmVzc2lvbnMuU2VhcmNoRXhwcmVzc2lvbkZhY2FkZS5yZXNvbHZlQ29tcG9uZW50c0FzU2VsZWN0b3Ioc291cmNlLCBjZmcucHJvY2Vzcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzb3VyY2UuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXNvbHZlcyB1cGRhdGUtYXR0cmlidXRlIG9mIGEgUHJpbWVGYWNlcy1jb21wb25lbnQuIChlLmcuIENvbW1hbmRCdXR0b24pXG4gICAgICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy52YWxpZGF0aW9uLkNvbmZpZ3VyYXRpb259IGNmZyBDb25maWd1cmF0aW9uIG9mIHRoZSBQcmltZUZhY2VzLWNvbXBvbmVudC5cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IHNvdXJjZSBUaGUgc291cmNlIGVsZW1lbnQuXG4gICAgICAgICAqIEByZXR1cm5zIHtKUXVlcnl9IFJlc29sdmVkIGpRdWVyeS1lbGVtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVzb2x2ZVVwZGF0ZTogZnVuY3Rpb24oY2ZnLCBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChjZmcuYWpheCAmJiBjZmcudXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByaW1lRmFjZXMuZXhwcmVzc2lvbnMuU2VhcmNoRXhwcmVzc2lvbkZhY2FkZS5yZXNvbHZlQ29tcG9uZW50c0FzU2VsZWN0b3Ioc291cmNlLCBjZmcudXBkYXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG59XG4iLCAiLy8gc2VlICM3Mzk1XG4vLyB3ZSBhbHdheXMgYWRkIHZhbGlkYXRpb24vYmVhbnZhbGlkYXRpb24uanMgb24gZWFjaCBwYWdlLCBhbHNvIGlmIG5vIFByaW1lRmFjZXMgY29tcG9uZW50IGlzIGF2YWlsYWJsZVxuLy8gc28uLi4ganVzdCBjaGVjayBpZiBwcmltZWZhY2VzLmpzIHdhcyByZW5kZXJlZFxuXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcblxuaWYgKHdpbmRvdy5QcmltZUZhY2VzKSB7XG5cbiAgICBQcmltZUZhY2VzLmNvbnZlcnRlclsnamF2YXguZmFjZXMuSW50ZWdlciddID0ge1xuXG4gICAgICAgIHJlZ2V4OiAvXlstK10/XFxkKyQvLFxuXG4gICAgICAgIE1FU1NBR0VfSUQ6ICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuSW50ZWdlckNvbnZlcnRlci5JTlRFR0VSJyxcblxuICAgICAgICBjb252ZXJ0OiBmdW5jdGlvbihlbGVtZW50LCBzdWJtaXR0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgaWYoc3VibWl0dGVkVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoUHJpbWVGYWNlcy50cmltKHN1Ym1pdHRlZFZhbHVlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHZjID0gUHJpbWVGYWNlcy52YWxpZGF0aW9uLlZhbGlkYXRpb25Db250ZXh0O1xuXG4gICAgICAgICAgICBpZighdGhpcy5yZWdleC50ZXN0KHN1Ym1pdHRlZFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IHZjLmdldE1lc3NhZ2UodGhpcy5NRVNTQUdFX0lELCBzdWJtaXR0ZWRWYWx1ZSwgOTM0NiwgdmMuZ2V0TGFiZWwoZWxlbWVudCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoc3VibWl0dGVkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFByaW1lRmFjZXMuY29udmVydGVyWydqYXZheC5mYWNlcy5Mb25nJ10gPSB7XG5cbiAgICAgICAgcmVnZXg6IC9eWy0rXT9cXGQrJC8sXG5cbiAgICAgICAgTUVTU0FHRV9JRDogJ2phdmF4LmZhY2VzLmNvbnZlcnRlci5Mb25nQ29udmVydGVyLkxPTkcnLFxuXG4gICAgICAgIGNvbnZlcnQ6IGZ1bmN0aW9uKGVsZW1lbnQsIHN1Ym1pdHRlZFZhbHVlKSB7XG4gICAgICAgICAgICBpZihzdWJtaXR0ZWRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihQcmltZUZhY2VzLnRyaW0oc3VibWl0dGVkVmFsdWUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdmMgPSBQcmltZUZhY2VzLnZhbGlkYXRpb24uVmFsaWRhdGlvbkNvbnRleHQ7XG5cbiAgICAgICAgICAgIGlmKCF0aGlzLnJlZ2V4LnRlc3Qoc3VibWl0dGVkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgdmMuZ2V0TWVzc2FnZSh0aGlzLk1FU1NBR0VfSUQsIHN1Ym1pdHRlZFZhbHVlLCA5ODc2NTQzMiwgdmMuZ2V0TGFiZWwoZWxlbWVudCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoc3VibWl0dGVkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFByaW1lRmFjZXMuY29udmVydGVyWydqYXZheC5mYWNlcy5Eb3VibGUnXSA9IHtcblxuICAgICAgICByZWdleDogL15bLStdP1xcZCooXFwuXFxkKyk/W2RdPyQvLFxuXG4gICAgICAgIE1FU1NBR0VfSUQ6ICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuRG91YmxlQ29udmVydGVyLkRPVUJMRScsXG5cbiAgICAgICAgY29udmVydDogZnVuY3Rpb24oZWxlbWVudCwgc3VibWl0dGVkVmFsdWUpIHtcbiAgICAgICAgICAgIGlmKHN1Ym1pdHRlZFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKFByaW1lRmFjZXMudHJpbShzdWJtaXR0ZWRWYWx1ZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB2YyA9IFByaW1lRmFjZXMudmFsaWRhdGlvbi5WYWxpZGF0aW9uQ29udGV4dDtcblxuICAgICAgICAgICAgaWYoIXRoaXMucmVnZXgudGVzdChzdWJtaXR0ZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyB2Yy5nZXRNZXNzYWdlKHRoaXMuTUVTU0FHRV9JRCwgc3VibWl0dGVkVmFsdWUsIDE5OTk5OTksIHZjLmdldExhYmVsKGVsZW1lbnQpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc3VibWl0dGVkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFByaW1lRmFjZXMuY29udmVydGVyWydqYXZheC5mYWNlcy5GbG9hdCddID0ge1xuXG4gICAgICAgIHJlZ2V4OiAvXlstK10/XFxkKyhcXC5cXGQrKT9bZl0/JC8sXG5cbiAgICAgICAgTUVTU0FHRV9JRDogJ2phdmF4LmZhY2VzLmNvbnZlcnRlci5GbG9hdENvbnZlcnRlci5GTE9BVCcsXG5cbiAgICAgICAgY29udmVydDogZnVuY3Rpb24oZWxlbWVudCwgc3VibWl0dGVkVmFsdWUpIHtcbiAgICAgICAgICAgIGlmKHN1Ym1pdHRlZFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKFByaW1lRmFjZXMudHJpbShzdWJtaXR0ZWRWYWx1ZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB2YyA9IFByaW1lRmFjZXMudmFsaWRhdGlvbi5WYWxpZGF0aW9uQ29udGV4dDtcblxuICAgICAgICAgICAgaWYoIXRoaXMucmVnZXgudGVzdChzdWJtaXR0ZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyB2Yy5nZXRNZXNzYWdlKHRoaXMuTUVTU0FHRV9JRCwgc3VibWl0dGVkVmFsdWUsIDIwMDAwMDAwMDAsIHZjLmdldExhYmVsKGVsZW1lbnQpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc3VibWl0dGVkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFByaW1lRmFjZXMuY29udmVydGVyWydqYXZheC5mYWNlcy5TaG9ydCddID0ge1xuXG4gICAgICAgIHJlZ2V4OiAvXlstK10/XFxkKyQvLFxuXG4gICAgICAgIE1FU1NBR0VfSUQ6ICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuU2hvcnRDb252ZXJ0ZXIuU0hPUlQnLFxuXG4gICAgICAgIGNvbnZlcnQ6IGZ1bmN0aW9uKGVsZW1lbnQsIHN1Ym1pdHRlZFZhbHVlKSB7XG4gICAgICAgICAgICBpZihzdWJtaXR0ZWRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihQcmltZUZhY2VzLnRyaW0oc3VibWl0dGVkVmFsdWUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdmMgPSBQcmltZUZhY2VzLnZhbGlkYXRpb24uVmFsaWRhdGlvbkNvbnRleHQ7XG5cbiAgICAgICAgICAgIGlmKCF0aGlzLnJlZ2V4LnRlc3Qoc3VibWl0dGVkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgdmMuZ2V0TWVzc2FnZSh0aGlzLk1FU1NBR0VfSUQsIHN1Ym1pdHRlZFZhbHVlLCAzMjQ1NiwgdmMuZ2V0TGFiZWwoZWxlbWVudCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoc3VibWl0dGVkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFByaW1lRmFjZXMuY29udmVydGVyWydqYXZheC5mYWNlcy5CaWdJbnRlZ2VyJ10gPSB7XG5cbiAgICAgICAgcmVnZXg6IC9eWy0rXT9cXGQrJC8sXG5cbiAgICAgICAgTUVTU0FHRV9JRDogJ2phdmF4LmZhY2VzLmNvbnZlcnRlci5CaWdJbnRlZ2VyQ29udmVydGVyLkJJR0lOVEVHRVInLFxuXG4gICAgICAgIGNvbnZlcnQ6IGZ1bmN0aW9uKGVsZW1lbnQsIHN1Ym1pdHRlZFZhbHVlKSB7XG4gICAgICAgICAgICBpZihzdWJtaXR0ZWRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihQcmltZUZhY2VzLnRyaW0oc3VibWl0dGVkVmFsdWUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdmMgPSBQcmltZUZhY2VzLnZhbGlkYXRpb24uVmFsaWRhdGlvbkNvbnRleHQ7XG5cbiAgICAgICAgICAgIGlmKCF0aGlzLnJlZ2V4LnRlc3Qoc3VibWl0dGVkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgdmMuZ2V0TWVzc2FnZSh0aGlzLk1FU1NBR0VfSUQsIHN1Ym1pdHRlZFZhbHVlLCA5ODc2LCB2Yy5nZXRMYWJlbChlbGVtZW50KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChzdWJtaXR0ZWRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUHJpbWVGYWNlcy5jb252ZXJ0ZXJbJ2phdmF4LmZhY2VzLkJpZ0RlY2ltYWwnXSA9IHtcblxuICAgICAgICByZWdleDogL15bLStdP1xcZCsoXFwuXFxkKyk/W2RdPyQvLFxuXG4gICAgICAgIE1FU1NBR0VfSUQ6ICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuQmlnRGVjaW1hbENvbnZlcnRlci5ERUNJTUFMJyxcblxuICAgICAgICBjb252ZXJ0OiBmdW5jdGlvbihlbGVtZW50LCBzdWJtaXR0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgaWYoc3VibWl0dGVkVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoUHJpbWVGYWNlcy50cmltKHN1Ym1pdHRlZFZhbHVlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHZjID0gUHJpbWVGYWNlcy52YWxpZGF0aW9uLlZhbGlkYXRpb25Db250ZXh0O1xuXG4gICAgICAgICAgICBpZighdGhpcy5yZWdleC50ZXN0KHN1Ym1pdHRlZFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IHZjLmdldE1lc3NhZ2UodGhpcy5NRVNTQUdFX0lELCBzdWJtaXR0ZWRWYWx1ZSwgMTk4LjIzLCB2Yy5nZXRMYWJlbChlbGVtZW50KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHN1Ym1pdHRlZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBQcmltZUZhY2VzLmNvbnZlcnRlclsnamF2YXguZmFjZXMuQnl0ZSddID0ge1xuXG4gICAgICAgIHJlZ2V4OiAvXi0/XFxkKyQvLFxuXG4gICAgICAgIE1FU1NBR0VfSUQ6ICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuQnl0ZUNvbnZlcnRlci5CWVRFJyxcblxuICAgICAgICBjb252ZXJ0OiBmdW5jdGlvbihlbGVtZW50LCBzdWJtaXR0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgaWYoc3VibWl0dGVkVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoUHJpbWVGYWNlcy50cmltKHN1Ym1pdHRlZFZhbHVlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHZjID0gUHJpbWVGYWNlcy52YWxpZGF0aW9uLlZhbGlkYXRpb25Db250ZXh0O1xuXG4gICAgICAgICAgICBpZighdGhpcy5yZWdleC50ZXN0KHN1Ym1pdHRlZFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IHZjLmdldE1lc3NhZ2UodGhpcy5NRVNTQUdFX0lELCBzdWJtaXR0ZWRWYWx1ZSwgLTEyLCB2Yy5nZXRMYWJlbChlbGVtZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgYnl0ZVZhbHVlID0gcGFyc2VJbnQoc3VibWl0dGVkVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgaWYoYnl0ZVZhbHVlIDwgLTEyOCB8fCBieXRlVmFsdWUgPiAxMjcpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IHZjLmdldE1lc3NhZ2UodGhpcy5NRVNTQUdFX0lELCBzdWJtaXR0ZWRWYWx1ZSwgLTEyLCB2Yy5nZXRMYWJlbChlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnl0ZVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFByaW1lRmFjZXMuY29udmVydGVyWydqYXZheC5mYWNlcy5DaGFyYWN0ZXInXSA9IHtcblxuICAgICAgICBNRVNTQUdFX0lEOiAnamF2YXguZmFjZXMuY29udmVydGVyLkNoYXJhY3RlckNvbnZlcnRlci5DSEFSQUNURVInLFxuXG4gICAgICAgIGNvbnZlcnQ6IGZ1bmN0aW9uKGVsZW1lbnQsIHN1Ym1pdHRlZFZhbHVlKSB7XG4gICAgICAgICAgICBpZihzdWJtaXR0ZWRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihQcmltZUZhY2VzLnRyaW0oc3VibWl0dGVkVmFsdWUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdmMgPSBQcmltZUZhY2VzLnZhbGlkYXRpb24uVmFsaWRhdGlvbkNvbnRleHQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1Ym1pdHRlZFZhbHVlLmNoYXJBdCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHRocm93IHZjLmdldE1lc3NhZ2UodGhpcy5NRVNTQUdFX0lELCBzdWJtaXR0ZWRWYWx1ZSwgdmMuZ2V0TGFiZWwoZWxlbWVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFByaW1lRmFjZXMuY29udmVydGVyWydqYXZheC5mYWNlcy5Cb29sZWFuJ10gPSB7XG5cbiAgICAgICAgcmVnZXg6IC9eWy0rXT9cXGQrJC8sXG5cbiAgICAgICAgTUVTU0FHRV9JRDogJ2phdmF4LmZhY2VzLmNvbnZlcnRlci5Cb29sZWFuQ29udmVydGVyLkJPT0xFQU4nLFxuXG4gICAgICAgIGNvbnZlcnQ6IGZ1bmN0aW9uKGVsZW1lbnQsIHN1Ym1pdHRlZFZhbHVlKSB7XG4gICAgICAgICAgICBpZihzdWJtaXR0ZWRWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihQcmltZUZhY2VzLnRyaW0oc3VibWl0dGVkVmFsdWUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdmMgPSBQcmltZUZhY2VzLnZhbGlkYXRpb24uVmFsaWRhdGlvbkNvbnRleHQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgoc3VibWl0dGVkVmFsdWUgPT09ICd0cnVlJyB8fCBzdWJtaXR0ZWRWYWx1ZSA9PT0gJ29uJyB8fCBzdWJtaXR0ZWRWYWx1ZSA9PT0gJ3llcycpID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHRocm93IHZjLmdldE1lc3NhZ2UodGhpcy5NRVNTQUdFX0lELCBzdWJtaXR0ZWRWYWx1ZSwgdmMuZ2V0TGFiZWwoZWxlbWVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFByaW1lRmFjZXMuY29udmVydGVyWydqYXZheC5mYWNlcy5EYXRlVGltZSddID0ge1xuXG4gICAgICAgIERBVEVfSUQ6ICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuRGF0ZVRpbWVDb252ZXJ0ZXIuREFURScsXG4gICAgICAgIFRJTUVfSUQ6ICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuRGF0ZVRpbWVDb252ZXJ0ZXIuVElNRScsXG4gICAgICAgIERBVEVUSU1FX0lEOiAnamF2YXguZmFjZXMuY29udmVydGVyLkRhdGVUaW1lQ29udmVydGVyLkRBVEVUSU1FJyxcblxuICAgICAgICBjb252ZXJ0OiBmdW5jdGlvbihlbGVtZW50LCBzdWJtaXR0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgaWYoc3VibWl0dGVkVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoUHJpbWVGYWNlcy50cmltKHN1Ym1pdHRlZFZhbHVlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHZjID0gUHJpbWVGYWNlcy52YWxpZGF0aW9uLlZhbGlkYXRpb25Db250ZXh0LFxuICAgICAgICAgICAgamF2YVBhdHRlcm4gPSBlbGVtZW50LmRhdGEoJ3AtcGF0dGVybicpLFxuICAgICAgICAgICAgdHlwZSA9IGVsZW1lbnQuZGF0YSgncC1kdHR5cGUnKSxcbiAgICAgICAgICAgIGRhdGVQYXR0ZXJuID0gbnVsbCxcbiAgICAgICAgICAgIHRpbWVQYXR0ZXJuID0gbnVsbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoamF2YVBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhdHRlcm5Ub2tlbnMgPSBqYXZhUGF0dGVybi5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0dGVyblRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhdHRlcm5Ub2tlbnNbaV0udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdoJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZVBhdHRlcm4gPSBwYXR0ZXJuVG9rZW5zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGF0dGVyblRva2Vuc1tpXS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3QnKSAhPT0gLTEgJiYgdGltZVBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lUGF0dGVybiA9IHRpbWVQYXR0ZXJuICsgXCIgXCIgKyBwYXR0ZXJuVG9rZW5zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVBhdHRlcm4gPSBwYXR0ZXJuVG9rZW5zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYXRlUGF0dGVybiA9IGVsZW1lbnQuZGF0YSgncC1kc3BhdHRlcm4nKTtcbiAgICAgICAgICAgICAgICAgICAgdGltZVBhdHRlcm4gPSBlbGVtZW50LmRhdGEoJ3AtdHNwYXR0ZXJuJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY29udmVydCBKYXZhIHBhdHRlcm4gaW50byBNb21lbnQgcGF0dGVybiBhbmQgcmV0dXJuIGEgRGF0ZSgpXG4gICAgICAgICAgICAgICAgY29uc3QgY29udmVydERhdGUgPSAoc3VibWl0dGVkVmFsdWUsIGZvcm1hdCkgPT4gbW9tZW50KHN1Ym1pdHRlZFZhbHVlLCBtb21lbnQoKS50b01vbWVudEZvcm1hdFN0cmluZyhmb3JtYXQpKS50b0RhdGUoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aW1lUGF0dGVybiAmJiBkYXRlUGF0dGVybikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udmVydERhdGUoc3VibWl0dGVkVmFsdWUsIGphdmFQYXR0ZXJuKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRpbWVQYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb252ZXJ0RGF0ZShzdWJtaXR0ZWRWYWx1ZSwgdGltZVBhdHRlcm4pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb252ZXJ0RGF0ZShzdWJtaXR0ZWRWYWx1ZSwgZGF0ZVBhdHRlcm4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBtb21lbnQoKS5mb3JtYXRXaXRoSkRGKGphdmFQYXR0ZXJuKTtcblxuICAgICAgICAgICAgICAgIGlmKHR5cGUgPT09ICdkYXRlJylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgdmMuZ2V0TWVzc2FnZSh0aGlzLkRBVEVfSUQsIHN1Ym1pdHRlZFZhbHVlLCBub3csIHZjLmdldExhYmVsKGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHR5cGUgPT09ICd0aW1lJylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgdmMuZ2V0TWVzc2FnZSh0aGlzLlRJTUVfSUQsIHN1Ym1pdHRlZFZhbHVlLCBub3csIHZjLmdldExhYmVsKGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHR5cGUgPT09ICdib3RoJylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgdmMuZ2V0TWVzc2FnZSh0aGlzLkRBVEVUSU1FX0lELCBzdWJtaXR0ZWRWYWx1ZSwgbm93LCB2Yy5nZXRMYWJlbChlbGVtZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUHJpbWVGYWNlcy5jb252ZXJ0ZXJbJ2phdmF4LmZhY2VzLk51bWJlciddID0ge1xuXG4gICAgICAgIENVUlJFTkNZX0lEOiAnamF2YXguZmFjZXMuY29udmVydGVyLk51bWJlckNvbnZlcnRlci5DVVJSRU5DWScsXG4gICAgICAgIE5VTUJFUl9JRDogJ2phdmF4LmZhY2VzLmNvbnZlcnRlci5OdW1iZXJDb252ZXJ0ZXIuTlVNQkVSJyxcbiAgICAgICAgUEFUVEVSTl9JRDogJ2phdmF4LmZhY2VzLmNvbnZlcnRlci5OdW1iZXJDb252ZXJ0ZXIuUEFUVEVSTicsXG4gICAgICAgIFBFUkNFTlRfSUQ6ICdqYXZheC5mYWNlcy5jb252ZXJ0ZXIuTnVtYmVyQ29udmVydGVyLlBFUkNFTlQnLFxuICAgICAgICBSRUdFWDogL15bLStdP1xcZCsoXFwsXFxkKyk/KFxcLlxcZCspP1tkXT8kLyxcblxuICAgICAgICBjb252ZXJ0OiBmdW5jdGlvbihlbGVtZW50LCBzdWJtaXR0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgaWYoc3VibWl0dGVkVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoUHJpbWVGYWNlcy50cmltKHN1Ym1pdHRlZFZhbHVlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHZjID0gUHJpbWVGYWNlcy52YWxpZGF0aW9uLlZhbGlkYXRpb25Db250ZXh0LFxuICAgICAgICAgICAgbG9jYWxlID0gUHJpbWVGYWNlcy5nZXRMb2NhbGVTZXR0aW5ncygpLFxuICAgICAgICAgICAgdHlwZSA9IGVsZW1lbnQuZGF0YSgncC1ub3R5cGUnKSxcbiAgICAgICAgICAgIG1heEludGVnZXJEaWdpdHMgPSBlbGVtZW50LmRhdGEoJ3AtbWF4aW50JyksXG4gICAgICAgICAgICBtaW5GcmFjdGlvbkRpZ2l0cyA9IGVsZW1lbnQuZGF0YSgncC1taW5mcmFjJyksXG4gICAgICAgICAgICBpbnRlZ2VyT25seSA9IGVsZW1lbnQuZGF0YSgncC1pbnRvbmx5Jyk7XG5cbiAgICAgICAgICAgIGlmKHR5cGUgPT09ICdjdXJyZW5jeScpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVuY3lTeW1ib2wgPSBlbGVtZW50LmRhdGEoJ3AtY3VycycpO1xuXG4gICAgICAgICAgICAgICAgaWYoY3VycmVuY3lTeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoc3VibWl0dGVkVmFsdWUuaW5kZXhPZihjdXJyZW5jeVN5bWJvbCkgPT09IC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgdmMuZ2V0TWVzc2FnZSh0aGlzLkNVUlJFTkNZX0lELCBzdWJtaXR0ZWRWYWx1ZSwgY3VycmVuY3lTeW1ib2wgKyAnMTAwJywgdmMuZ2V0TGFiZWwoZWxlbWVudCkpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0ZWRWYWx1ZSA9IHN1Ym1pdHRlZFZhbHVlLnN1YnN0cmluZyhjdXJyZW5jeVN5bWJvbC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYodHlwZSA9PT0gJ3BlcmNlbnQnKSB7XG4gICAgICAgICAgICAgICAgaWYoc3VibWl0dGVkVmFsdWUubGFzdEluZGV4T2YoJyUnKSAhPT0gKHN1Ym1pdHRlZFZhbHVlLmxlbmd0aCAtIDEpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyB2Yy5nZXRNZXNzYWdlKHRoaXMuUEVSQ0VOVF9JRCwgc3VibWl0dGVkVmFsdWUsICc1MCUnLCB2Yy5nZXRMYWJlbChlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBzdWJtaXR0ZWRWYWx1ZSA9IHN1Ym1pdHRlZFZhbHVlLnJlcGxhY2UoLyUvZywgJycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighdGhpcy5SRUdFWC50ZXN0KHN1Ym1pdHRlZFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IHZjLmdldE1lc3NhZ2UodGhpcy5OVU1CRVJfSUQsIHN1Ym1pdHRlZFZhbHVlLCA1MCwgdmMuZ2V0TGFiZWwoZWxlbWVudCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdG9rZW5zID0gc3VibWl0dGVkVmFsdWUuc3BsaXQobG9jYWxlLmRlY2ltYWxTZXBhcmF0b3IpLFxuICAgICAgICAgICAgaW50VmFsdWUgPSB0b2tlbnNbMF0ucmVwbGFjZShuZXcgUmVnRXhwKGxvY2FsZS5ncm91cGluZ1NlcGFyYXRvciwgJ2cnKSwgJycpLFxuICAgICAgICAgICAgZGVjaW1hbFZhbHVlID0gdG9rZW5zWzFdO1xuXG4gICAgICAgICAgICBpZihtYXhJbnRlZ2VyRGlnaXRzICYmIGludFZhbHVlLmxlbmd0aCA+IG1heEludGVnZXJEaWdpdHMpXG4gICAgICAgICAgICAgICAgaW50VmFsdWUgPSBpbnRWYWx1ZS5zdWJzdHJpbmcoaW50VmFsdWUubGVuZ3RoIC0gbWF4SW50ZWdlckRpZ2l0cyk7XG5cbiAgICAgICAgICAgIGlmKGRlY2ltYWxWYWx1ZSAmJiBtaW5GcmFjdGlvbkRpZ2l0cyAmJiBkZWNpbWFsVmFsdWUubGVuZ3RoID4gbWluRnJhY3Rpb25EaWdpdHMpXG4gICAgICAgICAgICAgICAgZGVjaW1hbFZhbHVlID0gZGVjaW1hbFZhbHVlLnN1YnN0cmluZygwLCBtaW5GcmFjdGlvbkRpZ2l0cyk7XG5cbiAgICAgICAgICAgIGlmKGludGVnZXJPbmx5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGludFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChpbnRWYWx1ZSkgKyBwYXJzZUZsb2F0KCcuJyArIGRlY2ltYWxWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufSIsICIvLyBzZWUgIzczOTVcbi8vIHdlIGFsd2F5cyBhZGQgdmFsaWRhdGlvbi9iZWFudmFsaWRhdGlvbi5qcyBvbiBlYWNoIHBhZ2UsIGFsc28gaWYgbm8gUHJpbWVGYWNlcyBjb21wb25lbnQgaXMgYXZhaWxhYmxlXG4vLyBzby4uLiBqdXN0IGNoZWNrIGlmIHByaW1lZmFjZXMuanMgd2FzIHJlbmRlcmVkXG5pZiAod2luZG93LlByaW1lRmFjZXMpIHtcblxuICAgIFByaW1lRmFjZXMudmFsaWRhdG9yWydqYXZheC5mYWNlcy5MZW5ndGgnXSA9IHtcbiAgICAgICAgTUlOSU1VTV9NRVNTQUdFX0lEOiAnamF2YXguZmFjZXMudmFsaWRhdG9yLkxlbmd0aFZhbGlkYXRvci5NSU5JTVVNJyxcbiAgICAgICAgTUFYSU1VTV9NRVNTQUdFX0lEOiAnamF2YXguZmFjZXMudmFsaWRhdG9yLkxlbmd0aFZhbGlkYXRvci5NQVhJTVVNJyxcblxuICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGVsZW1lbnQudmFsKCkubGVuZ3RoLFxuICAgICAgICAgICAgbWluID0gZWxlbWVudC5kYXRhKCdwLW1pbmxlbmd0aCcpLFxuICAgICAgICAgICAgbWF4ID0gZWxlbWVudC5kYXRhKCdwLW1heGxlbmd0aCcpLFxuICAgICAgICAgICAgdmMgPSBQcmltZUZhY2VzLnZhbGlkYXRpb24uVmFsaWRhdGlvbkNvbnRleHQ7XG5cbiAgICAgICAgICAgIGlmKG1heCAhPT0gdW5kZWZpbmVkICYmIGxlbmd0aCA+IG1heCkge1xuICAgICAgICAgICAgICAgIHRocm93IHZjLmdldE1lc3NhZ2UodGhpcy5NQVhJTVVNX01FU1NBR0VfSUQsIG1heCwgdmMuZ2V0TGFiZWwoZWxlbWVudCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihtaW4gIT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPCBtaW4pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyB2Yy5nZXRNZXNzYWdlKHRoaXMuTUlOSU1VTV9NRVNTQUdFX0lELCBtaW4sIHZjLmdldExhYmVsKGVsZW1lbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBQcmltZUZhY2VzLnZhbGlkYXRvclsnamF2YXguZmFjZXMuTG9uZ1JhbmdlJ10gPSB7XG4gICAgICAgIE1JTklNVU1fTUVTU0FHRV9JRDogJ2phdmF4LmZhY2VzLnZhbGlkYXRvci5Mb25nUmFuZ2VWYWxpZGF0b3IuTUlOSU1VTScsXG4gICAgICAgIE1BWElNVU1fTUVTU0FHRV9JRDogJ2phdmF4LmZhY2VzLnZhbGlkYXRvci5Mb25nUmFuZ2VWYWxpZGF0b3IuTUFYSU1VTScsXG4gICAgICAgIE5PVF9JTl9SQU5HRV9NRVNTQUdFX0lEOiAnamF2YXguZmFjZXMudmFsaWRhdG9yLkxvbmdSYW5nZVZhbGlkYXRvci5OT1RfSU5fUkFOR0UnLFxuICAgICAgICBUWVBFX01FU1NBR0VfSUQ6ICdqYXZheC5mYWNlcy52YWxpZGF0b3IuTG9uZ1JhbmdlVmFsaWRhdG9yLlRZUEUnLFxuICAgICAgICByZWdleDogL14tP1xcZCskLyxcblxuICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24oZWxlbWVudCwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1pbiA9IGVsZW1lbnQuZGF0YSgncC1taW52YWx1ZScpLFxuICAgICAgICAgICAgICAgIG1heCA9IGVsZW1lbnQuZGF0YSgncC1tYXh2YWx1ZScpLFxuICAgICAgICAgICAgICAgIHZjID0gUHJpbWVGYWNlcy52YWxpZGF0aW9uLlZhbGlkYXRpb25Db250ZXh0O1xuXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMucmVnZXgudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgdmMuZ2V0TWVzc2FnZSh0aGlzLlRZUEVfTUVTU0FHRV9JRCwgdmMuZ2V0TGFiZWwoZWxlbWVudCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKChtYXggIT09IHVuZGVmaW5lZCAmJiBtaW4gIT09IHVuZGVmaW5lZCkgJiYgKHZhbHVlIDwgbWluIHx8IHZhbHVlID4gbWF4KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyB2Yy5nZXRNZXNzYWdlKHRoaXMuTk9UX0lOX1JBTkdFX01FU1NBR0VfSUQsIG1pbiwgbWF4LCB2Yy5nZXRMYWJlbChlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoKG1heCAhPT0gdW5kZWZpbmVkICYmIG1pbiA9PT0gdW5kZWZpbmVkKSAmJiAodmFsdWUgPiBtYXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHZjLmdldE1lc3NhZ2UodGhpcy5NQVhJTVVNX01FU1NBR0VfSUQsIG1heCwgdmMuZ2V0TGFiZWwoZWxlbWVudCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKChtaW4gIT09IHVuZGVmaW5lZCAmJiBtYXggPT09IHVuZGVmaW5lZCkgJiYgKHZhbHVlIDwgbWluKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyB2Yy5nZXRNZXNzYWdlKHRoaXMuTUlOSU1VTV9NRVNTQUdFX0lELCBtaW4sIHZjLmdldExhYmVsKGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUHJpbWVGYWNlcy52YWxpZGF0b3JbJ2phdmF4LmZhY2VzLkRvdWJsZVJhbmdlJ10gPSB7XG4gICAgICAgIE1JTklNVU1fTUVTU0FHRV9JRDogJ2phdmF4LmZhY2VzLnZhbGlkYXRvci5Eb3VibGVSYW5nZVZhbGlkYXRvci5NSU5JTVVNJyxcbiAgICAgICAgTUFYSU1VTV9NRVNTQUdFX0lEOiAnamF2YXguZmFjZXMudmFsaWRhdG9yLkRvdWJsZVJhbmdlVmFsaWRhdG9yLk1BWElNVU0nLFxuICAgICAgICBOT1RfSU5fUkFOR0VfTUVTU0FHRV9JRDogJ2phdmF4LmZhY2VzLnZhbGlkYXRvci5Eb3VibGVSYW5nZVZhbGlkYXRvci5OT1RfSU5fUkFOR0UnLFxuICAgICAgICBUWVBFX01FU1NBR0VfSUQ6ICdqYXZheC5mYWNlcy52YWxpZGF0b3IuRG91YmxlUmFuZ2VWYWxpZGF0b3IuVFlQRScsXG4gICAgICAgIHJlZ2V4OiAvXlstK10/XFxkKihcXC5cXGQrKT9bZF0/JC8sXG5cbiAgICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZih2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBtaW4gPSBlbGVtZW50LmRhdGEoJ3AtbWludmFsdWUnKSxcbiAgICAgICAgICAgICAgICBtYXggPSBlbGVtZW50LmRhdGEoJ3AtbWF4dmFsdWUnKSxcbiAgICAgICAgICAgICAgICB2YyA9IFByaW1lRmFjZXMudmFsaWRhdGlvbi5WYWxpZGF0aW9uQ29udGV4dDtcblxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnJlZ2V4LnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHZjLmdldE1lc3NhZ2UodGhpcy5UWVBFX01FU1NBR0VfSUQsIHZjLmdldExhYmVsKGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZigobWF4ICE9PSB1bmRlZmluZWQgJiYgbWluICE9PSB1bmRlZmluZWQpICYmICh2YWx1ZSA8IG1pbiB8fCB2YWx1ZSA+IG1heCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgdmMuZ2V0TWVzc2FnZSh0aGlzLk5PVF9JTl9SQU5HRV9NRVNTQUdFX0lELCBtaW4sIG1heCwgdmMuZ2V0TGFiZWwoZWxlbWVudCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKChtYXggIT09IHVuZGVmaW5lZCAmJiBtaW4gPT09IHVuZGVmaW5lZCkgJiYgKHZhbHVlID4gbWF4KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyB2Yy5nZXRNZXNzYWdlKHRoaXMuTUFYSU1VTV9NRVNTQUdFX0lELCBtYXgsIHZjLmdldExhYmVsKGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZigobWluICE9PSB1bmRlZmluZWQgJiYgbWF4ID09PSB1bmRlZmluZWQpICYmICh2YWx1ZSA8IG1pbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgdmMuZ2V0TWVzc2FnZSh0aGlzLk1JTklNVU1fTUVTU0FHRV9JRCwgbWluLCB2Yy5nZXRMYWJlbChlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFByaW1lRmFjZXMudmFsaWRhdG9yWydqYXZheC5mYWNlcy5SZWd1bGFyRXhwcmVzc2lvbiddID0ge1xuICAgICAgICBQQVRURVJOX05PVF9TRVRfTUVTU0FHRV9JRDogJ2phdmF4LmZhY2VzLnZhbGlkYXRvci5SZWdleFZhbGlkYXRvci5QQVRURVJOX05PVF9TRVQnLFxuICAgICAgICBOT1RfTUFUQ0hFRF9NRVNTQUdFX0lEOiAnamF2YXguZmFjZXMudmFsaWRhdG9yLlJlZ2V4VmFsaWRhdG9yLk5PVF9NQVRDSEVEJyxcbiAgICAgICAgTUFUQ0hfRVhDRVBUSU9OX01FU1NBR0VfSUQ6ICdqYXZheC5mYWNlcy52YWxpZGF0b3IuUmVnZXhWYWxpZGF0b3IuTUFUQ0hfRVhDRVBUSU9OJyxcblxuICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24oZWxlbWVudCwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBlbGVtZW50LmRhdGEoJ3AtcmVnZXgnKSxcbiAgICAgICAgICAgICAgICB2YyA9IFByaW1lRmFjZXMudmFsaWRhdGlvbi5WYWxpZGF0aW9uQ29udGV4dDtcblxuICAgICAgICAgICAgICAgIGlmKCFwYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHZjLmdldE1lc3NhZ2UodGhpcy5QQVRURVJOX05PVF9TRVRfTUVTU0FHRV9JRCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcbiAgICAgICAgICAgICAgICBpZighcmVnZXgudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgdmMuZ2V0TWVzc2FnZSh0aGlzLk5PVF9NQVRDSEVEX01FU1NBR0VfSUQsIHBhdHRlcm4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBQcmltZUZhY2VzLnZhbGlkYXRvclsncHJpbWVmYWNlcy5GaWxlJ10gPSB7XG4gICAgICAgIEZJTEVfTElNSVRfTUVTU0FHRV9JRDogJ3ByaW1lZmFjZXMuRmlsZVZhbGlkYXRvci5GSUxFX0xJTUlUJyxcbiAgICAgICAgQUxMT1dfVFlQRVNfTUVTU0FHRV9JRDogJ3ByaW1lZmFjZXMuRmlsZVZhbGlkYXRvci5BTExPV19UWVBFUycsXG4gICAgICAgIFNJWkVfTElNSVRfTUVTU0FHRV9JRDogJ3ByaW1lZmFjZXMuRmlsZVZhbGlkYXRvci5TSVpFX0xJTUlUJyxcblxuICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24oZWxlbWVudCwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmKHZhbHVlICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgZmlsZWxpbWl0ID0gZWxlbWVudC5kYXRhKCdwLWZpbGVsaW1pdCcpLFxuICAgICAgICAgICAgICAgICAgICBhbGxvd3R5cGVzID0gZWxlbWVudC5kYXRhKCdwLWFsbG93dHlwZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZWxpbWl0ID0gZWxlbWVudC5kYXRhKCdwLXNpemVsaW1pdCcpLFxuICAgICAgICAgICAgICAgICAgICB2YyA9IFByaW1lRmFjZXMudmFsaWRhdGlvbi5WYWxpZGF0aW9uQ29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIHZhciBhbGxvd3R5cGVzUmVnRXhwID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoYWxsb3d0eXBlcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBub3JtYWxseSBhIHJlZ2V4IGlzIGEgb2JqZWN0IGxpa2UgLyhcXC58XFwvKShjc3YpJC9cbiAgICAgICAgICAgICAgICAgICAgLy8gYnV0IGFzIHdlIHBhcnNlIHRoZSBkYXRhLWF0dHJpYnV0ZSBmcm9tIHN0cmluZyB0byBSZWdFeCBvYmplY3QsIHdlIG11c3QgcmVtb3ZlIGxlYWRpbmcgYW5kIGVuZGluZyBzbGFzaGVzXG4gICAgICAgICAgICAgICAgICAgIHZhciByZWdleFBhcnRzID0gYWxsb3d0eXBlcy5tYXRjaCgvXlxcLyguKilcXC8oW2Etel0qKSQvKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zZm9ybWVkQWxsb3d0eXBlcyA9IHJlZ2V4UGFydHNbMV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbGFncyA9IHJlZ2V4UGFydHNbMl07XG4gICAgICAgICAgICAgICAgICAgIGFsbG93dHlwZXNSZWdFeHAgPSBuZXcgUmVnRXhwKHRyYW5zZm9ybWVkQWxsb3d0eXBlcywgZmxhZ3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChmaWxlbGltaXQgJiYgdmFsdWUubGVuZ3RoID4gZmlsZWxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2godmMuZ2V0TWVzc2FnZSh0aGlzLkZJTEVfTElNSVRfTUVTU0FHRV9JRCwgZmlsZWxpbWl0KSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZmlsZSBvZiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsb3d0eXBlc1JlZ0V4cCAmJiAoIWFsbG93dHlwZXNSZWdFeHAudGVzdChmaWxlLnR5cGUpICYmICFhbGxvd3R5cGVzUmVnRXhwLnRlc3QoZmlsZS5uYW1lKSkpICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKHZjLmdldE1lc3NhZ2UodGhpcy5BTExPV19UWVBFU19NRVNTQUdFX0lELCBmaWxlLm5hbWUsIFByaW1lRmFjZXMudXRpbHMuZm9ybWF0QWxsb3dUeXBlcyhhbGxvd3R5cGVzKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpemVsaW1pdCAmJiBmaWxlLnNpemUgPiBzaXplbGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2godmMuZ2V0TWVzc2FnZSh0aGlzLlNJWkVfTElNSVRfTUVTU0FHRV9JRCwgZmlsZS5uYW1lLCBQcmltZUZhY2VzLnV0aWxzLmZvcm1hdEJ5dGVzKHNpemVsaW1pdCkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG1lc3NhZ2VzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xufVxuIiwgIi8vIHNlZSAjNzM5NVxuLy8gd2UgYWx3YXlzIGFkZCB2YWxpZGF0aW9uL2JlYW52YWxpZGF0aW9uLmpzIG9uIGVhY2ggcGFnZSwgYWxzbyBpZiBubyBQcmltZUZhY2VzIGNvbXBvbmVudCBpcyBhdmFpbGFibGVcbi8vIHNvLi4uIGp1c3QgY2hlY2sgaWYgcHJpbWVmYWNlcy5qcyB3YXMgcmVuZGVyZWRcbmlmICh3aW5kb3cuUHJpbWVGYWNlcykge1xuXG4gICAgLyoqXG4gICAgICogV2hlbiBhbiBlbGVtZW50IGlzIGludmFsaWQgZHVlIHRvIGEgdmFsaWRhdGlvbiBlcnJvciwgdGhlIHVzZXIgbmVlZHMgdG8gYmUgaW5mb3JtZWQuIFRoaXMgaGlnaGxpZ2h0ZXIgaXNcbiAgICAgKiByZXNwb25zaWJsZSBmb3IgY2hhbmdpbmcgdGhlIHZpc3VhbCBzdGF0ZSBvZiBhbiBlbGVtZW50IHNvIHRoYXQgdGhlIHVzZXIgbm90aWNlcyB0aGUgaW52YWxpZCBlbGVtZW50LlxuICAgICAqIEBpbnRlcmZhY2Uge1ByaW1lRmFjZXMuSGlnaGxpZ2h0ZXJ9XG4gICAgICovXG4gICAgUHJpbWVGYWNlcy52YWxpZGF0b3IuSGlnaGxpZ2h0ZXIgPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gYW4gZWxlbWVudCBpcyBpbnZhbGlkIGR1ZSB0byBhIHZhbGlkYXRpb24gZXJyb3IsIHRoZSB1c2VyIG5lZWRzIHRvIGJlIGluZm9ybWVkLiBUaGlzIG1ldGhvZCBoaWdobGlnaHRzXG4gICAgICAgICAqIHRoZSBsYWJlbCBmb3IgdGhlIGdpdmVuIGVsZW1lbnQgYnkgYWRkaW5nIGFuIGFwcHJvcHJpYXRlIENTUyBjbGFzcy5cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IGZvckVsZW1lbnQgRWxlbWVudCB3aXRoIGEgbGFiZWwgdG8gaGlnaGxpZ2h0LlxuICAgICAgICAgKi9cbiAgICAgICAgaGlnaGxpZ2h0TGFiZWw6IGZ1bmN0aW9uKGZvckVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9ICQoXCJsYWJlbFtmb3I9J1wiICsgZm9yRWxlbWVudC5hdHRyKCdpZCcpICsgXCInXVwiKTtcbiAgICAgICAgICAgIGlmIChsYWJlbC5oYXNDbGFzcygndWktb3V0cHV0bGFiZWwnKSkge1xuICAgICAgICAgICAgICAgIGxhYmVsLmFkZENsYXNzKCd1aS1zdGF0ZS1lcnJvcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIGFuIGVsZW1lbnQgaXMgaW52YWxpZCBkdWUgdG8gYSB2YWxpZGF0aW9uIGVycm9yLCB0aGUgdXNlciBuZWVkcyB0byBiZSBpbmZvcm1lZC4gVGhpcyBtZXRob2QgcmVtb3ZlcyB0aGVcbiAgICAgICAgICogaGlnaGxpZ2h0aW5nIG9uIGEgbGFiZWwgZm9yIHRoZSBnaXZlbiBlbGVtZW50IGJ5IHJlbW92aW5nIHRoZSBhcHByb3ByaWF0ZSBDU1MgY2xhc3MuXG4gICAgICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBmb3JFbGVtZW50IEVsZW1lbnQgd2l0aCBhIGxhYmVsIHRvIHVuaGlnaGxpZ2h0LlxuICAgICAgICAgKi9cbiAgICAgICAgdW5oaWdobGlnaHRMYWJlbDogZnVuY3Rpb24oZm9yRWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGxhYmVsID0gJChcImxhYmVsW2Zvcj0nXCIgKyBmb3JFbGVtZW50LmF0dHIoJ2lkJykgKyBcIiddXCIpO1xuICAgICAgICAgICAgaWYgKGxhYmVsLmhhc0NsYXNzKCd1aS1vdXRwdXRsYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWVycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFwcGxpZXMgdWktc3RhdGUtWFhYIC0gY3NzLWNsYXNzZXMgdG8gYW4gZWxlbWVudCAoY29tcG9uZW50KS5cbiAgICAgICAgICogQHBhcmFtIHtKUXVlcnl9IGVsZW1lbnQgRWxlbWVudCB0byB3aGljaCBhcHBseSB0aGUgY3NzLWNsYXNzZXMuXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsaWQgSXMgdGhlIGlucHV0IG9mIHRoZSBlbGVtZW50IHZhbGlkP1xuICAgICAgICAgKi9cbiAgICAgICAgYXBwbHlTdGF0ZUNzc0NsYXNzZXM6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbGlkKSB7XG4gICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1lcnJvcicpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWNzdi1pbnZhbGlkJykuYWRkQ2xhc3MoJ3VpLXN0YXRlLWNzdi12YWxpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygndWktc3RhdGUtZXJyb3InKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKCd1aS1zdGF0ZS1jc3YtaW52YWxpZCcpLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1jc3YtdmFsaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBtYXAgYmV0d2VlbiBhIHdpZGdldCB0eXBlIGFuZCB0aGUgY29ycmVzcG9uZGluZyBoaWdobGlnaHQgaGFuZGxlciBmb3IgdGhhdCB0eXBlLlxuICAgICAgICAgKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgUHJpbWVGYWNlcy52YWxpZGF0aW9uLkhpZ2hsaWdodGVyPn1cbiAgICAgICAgICovXG4gICAgICAgIHR5cGVzIDoge1xuXG4gICAgICAgICAgICAnZGVmYXVsdCc6IHtcblxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnZhbGlkYXRvci5IaWdobGlnaHRlci5oaWdobGlnaHRMYWJlbChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy52YWxpZGF0b3IuSGlnaGxpZ2h0ZXIuYXBwbHlTdGF0ZUNzc0NsYXNzZXMoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB1bmhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnZhbGlkYXRvci5IaWdobGlnaHRlci51bmhpZ2hsaWdodExhYmVsKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnZhbGlkYXRvci5IaWdobGlnaHRlci5hcHBseVN0YXRlQ3NzQ2xhc3NlcyhlbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnYm9vbGVhbmNoa2JveCc6IHtcblxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnZhbGlkYXRvci5IaWdobGlnaHRlci5oaWdobGlnaHRMYWJlbChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy52YWxpZGF0b3IuSGlnaGxpZ2h0ZXIuYXBwbHlTdGF0ZUNzc0NsYXNzZXMoZWxlbWVudC5wYXJlbnQoKS5uZXh0KCksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgdW5oaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy52YWxpZGF0b3IuSGlnaGxpZ2h0ZXIudW5oaWdobGlnaHRMYWJlbChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy52YWxpZGF0b3IuSGlnaGxpZ2h0ZXIuYXBwbHlTdGF0ZUNzc0NsYXNzZXMoZWxlbWVudC5wYXJlbnQoKS5uZXh0KCksIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJ21hbnljaGtib3gnOiB7XG5cbiAgICAgICAgICAgICAgICBoaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1c3RvbSA9IGVsZW1lbnQuaGFzQ2xhc3MoJ3VpLWNoa2JveC1jbG9uZScpLFxuICAgICAgICAgICAgICAgICAgICBjaGtib3hlcztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1c3RvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdyb3VwZWRJbnB1dHMgPSAkKCdpbnB1dFtuYW1lPVwiJyArIENTUy5lc2NhcGUoZWxlbWVudC5hdHRyKCduYW1lJykpICsgJ1wiXS51aS1jaGtib3gtY2xvbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoa2JveGVzID0gZ3JvdXBlZElucHV0cy5wYXJlbnQoKS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZWxlbWVudC5jbG9zZXN0KCcudWktc2VsZWN0bWFueWNoZWNrYm94Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGtib3hlcyA9IGNvbnRhaW5lci5maW5kKCdkaXYudWktY2hrYm94LWJveCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNoa2JveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnZhbGlkYXRvci5IaWdobGlnaHRlci5hcHBseVN0YXRlQ3NzQ2xhc3NlcyhjaGtib3hlcy5lcShpKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHVuaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXN0b20gPSBlbGVtZW50Lmhhc0NsYXNzKCd1aS1jaGtib3gtY2xvbmUnKSxcbiAgICAgICAgICAgICAgICAgICAgY2hrYm94ZXM7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihjdXN0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBncm91cGVkSW5wdXRzID0gJCgnaW5wdXRbbmFtZT1cIicgKyBlbGVtZW50LmF0dHIoJ25hbWUnKSArICdcIl0udWktY2hrYm94LWNsb25lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGtib3hlcyA9IGdyb3VwZWRJbnB1dHMucGFyZW50KCkubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGVsZW1lbnQuY2xvc2VzdCgnLnVpLXNlbGVjdG1hbnljaGVja2JveCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hrYm94ZXMgPSBjb250YWluZXIuZmluZCgnZGl2LnVpLWNoa2JveC1ib3gnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjaGtib3hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy52YWxpZGF0b3IuSGlnaGxpZ2h0ZXIuYXBwbHlTdGF0ZUNzc0NsYXNzZXMoY2hrYm94ZXMuZXEoaSksIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnbGlzdGJveCc6IHtcblxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnZhbGlkYXRvci5IaWdobGlnaHRlci5hcHBseVN0YXRlQ3NzQ2xhc3NlcyhlbGVtZW50LmNsb3Nlc3QoJy51aS1pbnB1dGZpZWxkJyksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy52YWxpZGF0b3IuSGlnaGxpZ2h0ZXIuaGlnaGxpZ2h0TGFiZWwoZWxlbWVudC5jbG9zZXN0KCcudWktaW5wdXRmaWVsZCcpKTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgdW5oaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy52YWxpZGF0b3IuSGlnaGxpZ2h0ZXIuYXBwbHlTdGF0ZUNzc0NsYXNzZXMoZWxlbWVudC5jbG9zZXN0KCcudWktaW5wdXRmaWVsZCcpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy52YWxpZGF0b3IuSGlnaGxpZ2h0ZXIudW5oaWdobGlnaHRMYWJlbChlbGVtZW50LmNsb3Nlc3QoJy51aS1pbnB1dGZpZWxkJykpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJ29uZW1lbnUnOiB7XG5cbiAgICAgICAgICAgICAgICBoaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNpYmxpbmdzID0gZWxlbWVudC5wYXJlbnQoKS5zaWJsaW5ncygnLnVpLXNlbGVjdG9uZW1lbnUtdHJpZ2dlcicpO1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnZhbGlkYXRvci5IaWdobGlnaHRlci5hcHBseVN0YXRlQ3NzQ2xhc3NlcyhzaWJsaW5ncywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnZhbGlkYXRvci5IaWdobGlnaHRlci5hcHBseVN0YXRlQ3NzQ2xhc3NlcyhzaWJsaW5ncy5wYXJlbnQoKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnZhbGlkYXRvci5IaWdobGlnaHRlci5oaWdobGlnaHRMYWJlbCh0aGlzLmdldEZvY3VzRWxlbWVudChlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHVuaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzaWJsaW5ncyA9IGVsZW1lbnQucGFyZW50KCkuc2libGluZ3MoJy51aS1zZWxlY3RvbmVtZW51LXRyaWdnZXInKTtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy52YWxpZGF0b3IuSGlnaGxpZ2h0ZXIuYXBwbHlTdGF0ZUNzc0NsYXNzZXMoc2libGluZ3MsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnZhbGlkYXRvci5IaWdobGlnaHRlci5hcHBseVN0YXRlQ3NzQ2xhc3NlcyhzaWJsaW5ncy5wYXJlbnQoKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMudmFsaWRhdG9yLkhpZ2hsaWdodGVyLnVuaGlnaGxpZ2h0TGFiZWwodGhpcy5nZXRGb2N1c0VsZW1lbnQoZWxlbWVudCkpO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBnZXRGb2N1c0VsZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdCgnLnVpLXNlbGVjdG9uZW1lbnUnKS5maW5kKCcudWktaGVscGVyLWhpZGRlbi1hY2Nlc3NpYmxlID4gaW5wdXQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnc3Bpbm5lcic6IHtcblxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnZhbGlkYXRvci5IaWdobGlnaHRlci5hcHBseVN0YXRlQ3NzQ2xhc3NlcyhlbGVtZW50LnBhcmVudCgpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMudmFsaWRhdG9yLkhpZ2hsaWdodGVyLmhpZ2hsaWdodExhYmVsKGVsZW1lbnQucGFyZW50KCkpO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB1bmhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnZhbGlkYXRvci5IaWdobGlnaHRlci5hcHBseVN0YXRlQ3NzQ2xhc3NlcyhlbGVtZW50LnBhcmVudCgpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy52YWxpZGF0b3IuSGlnaGxpZ2h0ZXIudW5oaWdobGlnaHRMYWJlbChlbGVtZW50LnBhcmVudCgpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICdvbmVyYWRpbyc6IHtcblxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZWxlbWVudC5jbG9zZXN0KCcudWktc2VsZWN0b25lcmFkaW8nKSxcbiAgICAgICAgICAgICAgICAgICAgcmFkaW9zID0gY29udGFpbmVyLmZpbmQoJ2Rpdi51aS1yYWRpb2J1dHRvbi1ib3gnKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnZhbGlkYXRvci5IaWdobGlnaHRlci5hcHBseVN0YXRlQ3NzQ2xhc3NlcyhyYWRpb3MuZXEoaSksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnZhbGlkYXRvci5IaWdobGlnaHRlci5oaWdobGlnaHRMYWJlbChjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB1bmhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZWxlbWVudC5jbG9zZXN0KCcudWktc2VsZWN0b25lcmFkaW8nKSxcbiAgICAgICAgICAgICAgICAgICAgcmFkaW9zID0gY29udGFpbmVyLmZpbmQoJ2Rpdi51aS1yYWRpb2J1dHRvbi1ib3gnKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnZhbGlkYXRvci5IaWdobGlnaHRlci5hcHBseVN0YXRlQ3NzQ2xhc3NlcyhyYWRpb3MuZXEoaSksIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMudmFsaWRhdG9yLkhpZ2hsaWdodGVyLnVuaGlnaGxpZ2h0TGFiZWwoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICdib29sZWFuYnV0dG9uJzoge1xuXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMudmFsaWRhdG9yLkhpZ2hsaWdodGVyLmFwcGx5U3RhdGVDc3NDbGFzc2VzKGVsZW1lbnQucGFyZW50KCkucGFyZW50KCksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgdW5oaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy52YWxpZGF0b3IuSGlnaGxpZ2h0ZXIuYXBwbHlTdGF0ZUNzc0NsYXNzZXMoZWxlbWVudC5wYXJlbnQoKS5wYXJlbnQoKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAndG9nZ2xlc3dpdGNoJzoge1xuXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMudmFsaWRhdG9yLkhpZ2hsaWdodGVyLmFwcGx5U3RhdGVDc3NDbGFzc2VzKGVsZW1lbnQucGFyZW50KCkubmV4dCgpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHVuaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMudmFsaWRhdG9yLkhpZ2hsaWdodGVyLmFwcGx5U3RhdGVDc3NDbGFzc2VzKGVsZW1lbnQucGFyZW50KCkubmV4dCgpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICdpbnB1dG51bWJlcic6IHtcblxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3JnaW5hbElucHV0ID0gZWxlbWVudC5wcmV2KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy52YWxpZGF0b3IuSGlnaGxpZ2h0ZXIuaGlnaGxpZ2h0TGFiZWwob3JnaW5hbElucHV0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VlICMzNzA2XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmdpbmFsSW5wdXQucGFyZW50KCkuYWRkQ2xhc3MoJ3VpLXN0YXRlLWVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMudmFsaWRhdG9yLkhpZ2hsaWdodGVyLmFwcGx5U3RhdGVDc3NDbGFzc2VzKG9yZ2luYWxJbnB1dCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBvcmdpbmFsSW5wdXQucGFyZW50KCkuYWRkQ2xhc3MoJ3VpLXN0YXRlLWNzdi1pbnZhbGlkJykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWNzdi12YWxpZCcpOyAvLyBtYWtlcyB2aXN1YWwgbm8gc2Vuc2VcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgdW5oaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9yZ2luYWxJbnB1dCA9IGVsZW1lbnQucHJldignaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy52YWxpZGF0b3IuSGlnaGxpZ2h0ZXIudW5oaWdobGlnaHRMYWJlbChvcmdpbmFsSW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlZSAjMzcwNlxuICAgICAgICAgICAgICAgICAgICBvcmdpbmFsSW5wdXQucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMudmFsaWRhdG9yLkhpZ2hsaWdodGVyLmFwcGx5U3RhdGVDc3NDbGFzc2VzKG9yZ2luYWxJbnB1dCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9yZ2luYWxJbnB1dC5wYXJlbnQoKS5yZW1vdmVDbGFzcygndWktc3RhdGUtY3N2LWludmFsaWQnKS5hZGRDbGFzcygndWktc3RhdGUtY3N2LXZhbGlkJyk7IC8vIG1ha2VzIHZpc3VhbCBubyBzZW5zZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn0iLCAiLyoqXG4gKiBQcmludHMgYSBjb21wb25lbnQgLyB3aWRnZXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudCBBIHNlYXJjaCBleHByZXNzaW9uIHdpdGggb25lIG9yIG11bHRpcGxlIGNvbXBvbmVudHMgdG8gcHJpbnQuXG4gKiBAcGFyYW0ge0pRdWVyeVByaW50LlByaW50U2V0dGluZ3N9IGNvbmZpZyBDb25maWd1cmF0aW9uIGZvciBwcmludGluZy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByaW50Q29tcG9uZW50cyhleHByZXNzaW9ucywgY29uZmlnKSB7XG4gICAgYXdhaXQgaW1wb3J0KFwiLi9wcmludGVyLmpzXCIpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBQcmltZUZhY2VzLmV4cHJlc3Npb25zLlNlYXJjaEV4cHJlc3Npb25GYWNhZGUucmVzb2x2ZUNvbXBvbmVudHNBc1NlbGVjdG9yKGRvY3VtZW50LmJvZHksIGV4cHJlc3Npb25zKTtcbiAgICBlbGVtZW50LnByaW50KGNvbmZpZyk7XG59IiwgImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcblxuLyoqXG4gKiBCaW5kcyBhIGhvdGtleSB0byBhbiBldmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBFdmVudCBuYW1lLCBzdWNoIGFzIGBrZXlkb3duYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBiaW5kIEhvdEtleSB0byBiaW5kLCBzdWNoIGFzIGBjdHJsK3NoaWZ0K3NgLlxuICogQHBhcmFtIHsoKSA9PiBib29sZWFufSBjYWxsYmFjayBDYWxsYmFjayB0byBleGVjdXRlIHdoZW4gdGhlIGhvdGtleSBpcyBwcmVzc2VkLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYmluZEhvdEtleShldmVudCwgYmluZCwgY2FsbGJhY2spIHtcbiAgICBhd2FpdCBpbXBvcnQoXCIuL2hvdGtleS5qc1wiKTtcbiAgICAkKGRvY3VtZW50KS5vZmYoZXZlbnQpLm9uKGV2ZW50LCBudWxsLCBiaW5kLCBjYWxsYmFjayk7XG59XG5cbi8qKlxuICogVW5iaW5kcyBhIGhvdGtleSBmcm9tIGFuIGV2ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IEV2ZW50IG5hbWUsIHN1Y2ggYXMgYGtleWRvd25gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5iaW5kSG90S2V5KGV2ZW50KSB7XG4gICAgJChkb2N1bWVudCkub2ZmKGV2ZW50KTtcbn0iLCAiLyoqXG4gKiBGZXRjaGVzIHRoZSByZXNvdXJjZSBhdCB0aGUgZ2l2ZW4gVVJMIGFuZCBwcm9tcHRzIHRoZSB1c2VyIHRvIGRvd25sb2FkIHRoYXQgZmlsZSwgd2l0aG91dCBsZWF2aW5nIHRoZSBjdXJyZW50XG4gKiBwYWdlLiBUaGlzIGZ1bmN0aW9uIGlzIHVzdWFsbHkgY2FsbGVkIGJ5IHNlcnZlci1zaWRlIGNvZGUgdG8gZG93bmxvYWQgYSBkYXRhIFVSSSBvciBhIGRhdGEgZnJvbSBhIHJlbW90ZSBVUkwuXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVVJMIHBvaW50aW5nIHRvIHRoZSByZXNvdXJjZSB0byBkb3dubG9hZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtaW1lVHlwZSBUaGUgTUlNRSBjb250ZW50LXR5cGUgb2YgdGhlIGZpbGUgdG8gZG93bmxvYWQuIEl0IGhlbHBzIHRoZSBicm93c2VyIHByZXNlbnQgZnJpZW5kbGllclxuICogaW5mb3JtYXRpb24gYWJvdXQgdGhlIGRvd25sb2FkIHRvIHRoZSB1c2VyLCBlbmNvdXJhZ2luZyB0aGVtIHRvIGFjY2VwdCB0aGUgZG93bmxvYWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgVGhlIG5hbWUgb2YgdGhlIGZpbGUgdG8gYmUgY3JlYXRlZC4gTm90ZSB0aGF0IG9sZGVyIGJyb3dzZXJzIChsaWtlIEZGMy41LCBDaDUpIGRvIG5vdFxuICogaG9ub3IgdGhlIGZpbGUgbmFtZSB5b3UgcHJvdmlkZSwgaW5zdGVhZCB0aGV5IGF1dG9tYXRpY2FsbHkgbmFtZSB0aGUgZG93bmxvYWRlZCBmaWxlLlxuICogQHBhcmFtIHtzdHJpbmd9IGNvb2tpZU5hbWUgTmFtZSBvZiB0aGUgZmlsZSBkb3dubG9hZCBjb29raWUgKGJ5IGRlZmF1bHQgYHByaW1lZmFjZXMuZG93bmxvYWRgKS4gVGhpcyBmdW5jdGlvblxuICogbWFrZXMgc3VyZSB0aGUgY29va2llIGlzIHNldCBwcm9wZXJseSB3aGVuIHRoZSBkb3dubG9hZCBmaW5pc2hlcy5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvd25sb2FkKHVybCwgbWltZVR5cGUsIGZpbGVOYW1lLCBjb29raWVOYW1lKSB7XG4gICAgY29uc3QgZG93bmxvYWRKcyA9IGF3YWl0IGltcG9ydChcImRvd25sb2FkanNcIik7XG4gICAgdmFyIGNvb2tpZVBhdGggPSBQcmltZUZhY2VzLnNldHRpbmdzLmNvbnRleHRQYXRoO1xuICAgIGlmICghY29va2llUGF0aCB8fCBjb29raWVQYXRoID09PSAnJykge1xuICAgICAgICBjb29raWVQYXRoID0gJy8nO1xuICAgIH1cblxuICAgIHZhciB4ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeC5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgeC5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgeC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBkb3dubG9hZEpzKHgucmVzcG9uc2UsIGZpbGVOYW1lLCBtaW1lVHlwZSk7XG4gICAgICAgIFByaW1lRmFjZXMuc2V0Q29va2llKGNvb2tpZU5hbWUsIFwidHJ1ZVwiLCB7cGF0aDogY29va2llUGF0aH0pO1xuICAgIH07XG4gICAgeC5zZW5kKCk7XG59XG4iLCAiaW1wb3J0IFwiLi4vLi4vc3JjL2NvcmUvY29yZS5qc1wiO1xuaW1wb3J0IFwiLi4vLi4vc3JjL2NvcmUvY29yZS5lbnYuanNcIjtcbmltcG9ydCBcIi4uLy4uL3NyYy9jb3JlL2NvcmUuYWpheC5qc1wiO1xuaW1wb3J0IFwiLi4vLi4vc3JjL2NvcmUvY29yZS5jc3AuanNcIjtcbmltcG9ydCBcIi4uLy4uL3NyYy9jb3JlL2NvcmUuZXhwcmVzc2lvbnMuanNcIjtcbmltcG9ydCBcIi4uLy4uL3NyYy9jb3JlL2NvcmUudXRpbHMuanNcIjtcbmltcG9ydCBcIi4uLy4uL3NyYy9jb3JlL2NvcmUucmVzb3VyY2VzLmpzXCI7XG5pbXBvcnQgXCIuLi8uLi9zcmMvY29yZS9jb3JlLmNsaWVudHdpbmRvdy5qc1wiO1xuaW1wb3J0IFwiLi4vLi4vc3JjL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5jb21tb24uanNcIjtcbmltcG9ydCBcIi4uLy4uL3NyYy92YWxpZGF0aW9uL3ZhbGlkYXRpb24uY29udmVydGVycy5qc1wiO1xuaW1wb3J0IFwiLi4vLi4vc3JjL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi52YWxpZGF0b3JzLmpzXCI7XG5pbXBvcnQgXCIuLi8uLi9zcmMvdmFsaWRhdGlvbi92YWxpZGF0aW9uLmhpZ2hsaWdodGVycy5qc1wiO1xuXG5pbXBvcnQgeyBwcmludENvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vc3JjL3ByaW50ZXIvcHJpbnQuanNcIjtcbk9iamVjdC5hc3NpZ24oUHJpbWVGYWNlcywgeyBwcmludENvbXBvbmVudHMgfSk7XG5cbmltcG9ydCB7IGJpbmRIb3RLZXksIHVuYmluZEhvdEtleSB9IGZyb20gXCIuLi8uLi9zcmMvaG90a2V5L2hvdGtleS13cmFwcGVyLmpzXCI7XG5PYmplY3QuYXNzaWduKFByaW1lRmFjZXMsIHsgYmluZEhvdEtleSwgdW5iaW5kSG90S2V5IH0pO1xuXG5pbXBvcnQgeyBkb3dubG9hZCB9IGZyb20gXCIuLi8uLi9zcmMvZmlsZWRvd25sb2FkLzEtcGYtZmlsZWRvd25sb2FkLmpzXCI7XG5PYmplY3QuYXNzaWduKFByaW1lRmFjZXMsIHsgZG93bmxvYWQgfSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTLE9BQVEsUUFBUTtBQUN2QixXQUFTLElBQUksR0FBRyxJQUFJLFVBQVUsUUFBUSxLQUFLO0FBQ3pDLFFBQUksU0FBUyxVQUFVLENBQUM7QUFDeEIsYUFBUyxPQUFPLFFBQVE7QUFDdEIsYUFBTyxHQUFHLElBQUksT0FBTyxHQUFHO0FBQUEsSUFDMUI7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUO0FBSUEsSUFBSSxtQkFBbUI7QUFBQSxFQUNyQixNQUFNLFNBQVUsT0FBTztBQUNyQixRQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUs7QUFDcEIsY0FBUSxNQUFNLE1BQU0sR0FBRyxFQUFFO0FBQUEsSUFDM0I7QUFDQSxXQUFPLE1BQU0sUUFBUSxvQkFBb0Isa0JBQWtCO0FBQUEsRUFDN0Q7QUFBQSxFQUNBLE9BQU8sU0FBVSxPQUFPO0FBQ3RCLFdBQU8sbUJBQW1CLEtBQUssRUFBRTtBQUFBLE1BQy9CO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFLQSxTQUFTLEtBQU0sV0FBVyxtQkFBbUI7QUFDM0MsV0FBUyxJQUFLLE1BQU0sT0FBTyxZQUFZO0FBQ3JDLFFBQUksT0FBTyxhQUFhLGFBQWE7QUFDbkM7QUFBQSxJQUNGO0FBRUEsaUJBQWEsT0FBTyxDQUFDLEdBQUcsbUJBQW1CLFVBQVU7QUFFckQsUUFBSSxPQUFPLFdBQVcsWUFBWSxVQUFVO0FB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QUE7QUFDdkQsVUFBTSxPQUFPLHVCQUFjO0FBQzNCLFVBQU0sVUFBVSxXQUFXLFlBQVksdUJBQXVCLDRCQUE0QixTQUFTLE1BQU0sV0FBVztBQUNwSCxZQUFRLE1BQU0sTUFBTTtBQUFBLEVBQ3hCO0FBQUE7OztBQ1RBO0FBUUEsU0FBc0IsV0FBVyxPQUFPLE1BQU0sVUFBVTtBQUFBO0FBQ3BELFVBQU0sT0FBTyxzQkFBYTtBQUMxQiwwQkFBRSxRQUFRLEVBQUUsSUFBSSxLQUFLLEVBQUUsR0FBRyxPQUFPLE1BQU0sTUFBTSxRQUFRO0FBQUEsRUFDekQ7QUFBQTtBQU1PLFNBQVMsYUFBYSxPQUFPO0FBQ2hDLHdCQUFFLFFBQVEsRUFBRSxJQUFJLEtBQUs7QUFDekI7OztBQ1BBLFNBQXNCLFNBQVMsS0FBSyxVQUFVLFVBQVUsWUFBWTtBQUFBO0FBQ2hFLFVBQU0sYUFBYSxNQUFNLE9BQU8sd0JBQVk7QUFDNUMsUUFBSSxhQUFhLFdBQVcsU0FBUztBQUNyQyxRQUFJLENBQUMsY0FBYyxlQUFlLElBQUk7QUFDbEMsbUJBQWE7QUFBQSxJQUNqQjtBQUVBLFFBQUksSUFBSSxJQUFJLGVBQWU7QUFDM0IsTUFBRSxLQUFLLE9BQU8sS0FBSyxJQUFJO0FBQ3ZCLE1BQUUsZUFBZTtBQUNqQixNQUFFLFNBQVMsU0FBVSxHQUFHO0FBQ3BCLGlCQUFXLEVBQUUsVUFBVSxVQUFVLFFBQVE7QUFDekMsaUJBQVcsVUFBVSxZQUFZLFFBQVEsRUFBQyxNQUFNLFdBQVUsQ0FBQztBQUFBLElBQy9EO0FBQ0EsTUFBRSxLQUFLO0FBQUEsRUFDWDtBQUFBOzs7QUNiQSxPQUFPLE9BQU8sWUFBWSxFQUFFLGdCQUFnQixDQUFDO0FBRzdDLE9BQU8sT0FBTyxZQUFZLEVBQUUsWUFBWSxhQUFhLENBQUM7QUFHdEQsT0FBTyxPQUFPLFlBQVksRUFBRSxTQUFTLENBQUM7IiwKICAibmFtZXMiOiBbImNvbnZlcnRlciIsICJ3aW5kb3ciLCAiUHJpbWVGYWNlcyIsICJ3aWRnZXQiLCAialFCcm93c2VyIiwgIndpZGdldCIsICJpIiwgImxvY2F0aW9uIiwgImV2ZW50IiwgIndpZGdldCIsICJ3aWRnZXQiLCAiYXBwZW5kVG8iLCAiaSIsICJlbGVtZW50IiwgInBhcmVudHMiLCAiZmluZFNjcmlwdFdpdGhWZXJzaW9uUGFyYW0iLCAid2lkZ2V0IiwgInN1Ym1pdHRlZFZhbHVlIiwgIm1vbWVudCJdCn0K

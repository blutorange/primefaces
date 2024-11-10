import {
  BaseWidget
} from "./chunk-HGD6GSK5.js";
import {
  __commonJS,
  __toESM
} from "./chunk-YRJTWU7C.js";

// src/keyboard/0-jquery.keypad.js
var require_jquery_keypad = __commonJS({
  "src/keyboard/0-jquery.keypad.js"(exports, module) {
    (function() {
      "use strict";
      var initializing = false;
      window.JQClass = function() {
      };
      JQClass.classes = {};
      JQClass.extend = function extender(prop) {
        var base = this.prototype;
        initializing = true;
        var prototype = new this();
        initializing = false;
        for (var name in prop) {
          if (typeof prop[name] === "function" && typeof base[name] === "function") {
            prototype[name] = /* @__PURE__ */ function(name2, fn) {
              return function() {
                var __super = this._super;
                this._super = function(args) {
                  return base[name2].apply(this, args || []);
                };
                var ret = fn.apply(this, arguments);
                this._super = __super;
                return ret;
              };
            }(name, prop[name]);
          } else if (typeof prop[name] === "object" && typeof base[name] === "object" && name === "defaultOptions") {
            var obj1 = base[name];
            var obj2 = prop[name];
            var obj3 = {};
            var key2;
            for (key2 in obj1) {
              obj3[key2] = obj1[key2];
            }
            for (key2 in obj2) {
              obj3[key2] = obj2[key2];
            }
            prototype[name] = obj3;
          } else {
            prototype[name] = prop[name];
          }
        }
        function JQClass2() {
          if (!initializing && this._init) {
            this._init.apply(this, arguments);
          }
        }
        JQClass2.prototype = prototype;
        JQClass2.prototype.constructor = JQClass2;
        JQClass2.extend = extender;
        return JQClass2;
      };
    })();
    (function($) {
      "use strict";
      JQClass.classes.JQPlugin = JQClass.extend({
        /** Name to identify this plugin.
        	@example name: 'tabs' */
        name: "plugin",
        /** Default options for instances of this plugin (default: {}).
        			@example defaultOptions: {
          selectedClass: 'selected',
          triggers: 'click'
        } */
        defaultOptions: {},
        /** Options dependent on the locale.
        			Indexed by language and (optional) country code, with '' denoting the default language (English/US).
        			Normally additional languages would be provided as separate files to all them to be included as needed.
        			@example regionalOptions: {
          '': {
            greeting: 'Hi'
          }
        } */
        regionalOptions: {},
        /** Whether or not a deep merge should be performed when accumulating options.
        	The default is <code>true</code> but can be overridden in a sub-class. */
        deepMerge: true,
        /** Retrieve a marker class for affected elements.
        	In the format: <code>is-&lt;pluginName&gt;</code>.
        	@protected
        	@return {string} The marker class. */
        _getMarker: function() {
          return "is-" + this.name;
        },
        /** Initialise the plugin.
        	Create the jQuery bridge - plugin name <code>xyz</code>
        	produces singleton <code>$.xyz</code> and collection function <code>$.fn.xyz</code>.
        	@protected */
        _init: function() {
          $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
          var jqName = camelCase(this.name);
          $[jqName] = this;
          $.fn[jqName] = function(options) {
            var otherArgs = Array.prototype.slice.call(arguments, 1);
            var inst = this;
            var returnValue = this;
            this.each(function() {
              if (typeof options === "string") {
                if (options[0] === "_" || !$[jqName][options]) {
                  throw "Unknown method: " + options;
                }
                var methodValue = $[jqName][options].apply($[jqName], [this].concat(otherArgs));
                if (methodValue !== inst && methodValue !== void 0) {
                  returnValue = methodValue;
                  return false;
                }
              } else {
                $[jqName]._attach(this, options);
              }
            });
            return returnValue;
          };
        },
        /** Set default options for all subsequent instances.
        	@param {object} options The new default options.
        	@example $.pluginName.setDefaults({name: value, ...}) */
        setDefaults: function(options) {
          $.extend(this.defaultOptions, options || {});
        },
        /** Initialise an element. Called internally only.
        	Adds an instance object as data named for the plugin.
        	Override {@linkcode module:JQPlugin~_postAttach|_postAttach} for plugin-specific processing.
        	@private
        	@param {Element} elem The element to enhance.
        	@param {object} options Overriding settings. */
        _attach: function(elem2, options) {
          elem2 = $(elem2);
          if (elem2.hasClass(this._getMarker())) {
            return;
          }
          elem2.addClass(this._getMarker());
          options = $.extend(this.deepMerge, {}, this.defaultOptions, this._getMetadata(elem2), options || {});
          var inst = $.extend({ name: this.name, elem: elem2, options }, this._instSettings(elem2, options));
          elem2.data(this.name, inst);
          this._postAttach(elem2, inst);
          this.option(elem2, options);
        },
        /** Retrieve additional instance settings.
        			Override this in a sub-class to provide extra settings.
        			These are added directly to the instance object.
        			Default attributes of an instance object are shown as properties below:
        			@protected
        			@param {jQuery} elem The current jQuery element.
        			@param {object} options The instance options.
        			@return {object} Any extra instance values.
        			@property {Element} elem The element to which this instance applies.
        			@property {string} name The name of this plugin.
        			@property {object} options The accumulated options for this instance.
        			@example _instSettings: function(elem, options) {
          return {nav: elem.find(options.navSelector)};
        } */
        _instSettings: function(elem2, options) {
          return {};
        },
        /** Plugin specific post initialisation.
        			Override this in a sub-class to perform extra activities.
        			This is where you would implement your plugin's main functionality.
        			@protected
        			@param {jQuery} elem The current jQuery element.
        			@param {object} inst The instance settings.
        			@example _postAttach: function(elem, inst) {
          elem.on('click.' + this.name, function() {
            ...
          });
        } */
        _postAttach: function(elem2, inst) {
        },
        /** Retrieve metadata configuration from the element.
        	Metadata is specified as an attribute:
        	<code>data-&lt;pluginName>="&lt;option name>: '&lt;value>', ..."</code>.
        	Dates should be specified as strings in this format: <code>'new Date(y, m-1, d)'</code>.
        	@private
        	@param {jQuery} elem The source element.
        	@return {object} The inline configuration or {}. */
        _getMetadata: function(elem) {
          try {
            var data = elem.data(this.name.toLowerCase()) || "";
            data = data.replace(/(\\?)'/g, function(e, t) {
              return t ? "'" : '"';
            }).replace(/([a-zA-Z0-9]+):/g, function(match, group, i) {
              var count = data.substring(0, i).match(/"/g);
              return !count || count.length % 2 === 0 ? '"' + group + '":' : group + ":";
            }).replace(/\\:/g, ":");
            data = JSON.parse("{" + data + "}");
            for (var key in data) {
              if (data.hasOwnProperty(key)) {
                var value = data[key];
                if (typeof value === "string" && value.match(/^new Date\(([-0-9,\s]*)\)$/)) {
                  data[key] = eval(value);
                }
              }
            }
            return data;
          } catch (e) {
            return {};
          }
        },
        /** Retrieve the instance data for element.
        	@protected
        	@param {Element} elem The source element.
        	@return {object} The instance data or <code>{}</code> if none. */
        _getInst: function(elem2) {
          return $(elem2).data(this.name) || {};
        },
        /** Retrieve or reconfigure the settings for a plugin.
        			If new settings are provided they are applied to the instance options.
        			If an option name only is provided the value of that option is returned.
        			If no name or value is provided, all options are returned.
        			Override {@linkcode module:JQPlugin~_optionsChanged|_optionsChanged}
        			for plugin-specific processing when option values change.
        			@param {Element} elem The source element.
        			@param {object|string} [name] The collection of new option values or the name of a single option.
        			@param {any} [value] The value for a single named option.
        			@return {any|object} If retrieving a single value or all options.
        			@example $(selector).plugin('option', 'name', value) // Set one option
        $(selector).plugin('option', {name: value, ...}) // Set multiple options
        var value = $(selector).plugin('option', 'name') // Get one option
        var options = $(selector).plugin('option') // Get all options */
        option: function(elem2, name, value2) {
          elem2 = $(elem2);
          var inst = elem2.data(this.name);
          var options = name || {};
          if (!name || typeof name === "string" && typeof value2 === "undefined") {
            options = (inst || {}).options;
            return options && name ? options[name] : options;
          }
          if (!elem2.hasClass(this._getMarker())) {
            return;
          }
          if (typeof name === "string") {
            options = {};
            options[name] = value2;
          }
          this._optionsChanged(elem2, inst, options);
          $.extend(inst.options, options);
        },
        /** Plugin specific options processing.
        			Old value available in <code>inst.options[name]</code>, new value in <code>options[name]</code>.
        			Override this in a sub-class to perform extra activities.
        			@protected
        			@param {jQuery} elem The current jQuery element.
        			@param {object} inst The instance settings.
        			@param {object} options The new options.
        			@example _optionsChanged: function(elem, inst, options) {
          if (options.name != inst.options.name) {
            elem.removeClass(inst.options.name).addClass(options.name);
          }
        } */
        _optionsChanged: function(elem2, inst, options) {
        },
        /** Remove all trace of the plugin.
        	Override {@linkcode module:JQPlugin~_preDestroy|_preDestroy} for plugin-specific processing.
        	@param {Element} elem The source element.
        	@example $(selector).plugin('destroy') */
        destroy: function(elem2) {
          elem2 = $(elem2);
          if (!elem2.hasClass(this._getMarker())) {
            return;
          }
          this._preDestroy(elem2, this._getInst(elem2));
          elem2.removeData(this.name).removeClass(this._getMarker());
        },
        /** Plugin specific pre destruction.
        			It is invoked as part of the {@linkcode module:JQPlugin~destroy|destroy} processing.
        			Override this in a sub-class to perform extra activities and undo everything that was
        			done in the {@linkcode module:JQPlugin~_postAttach|_postAttach} or
        			{@linkcode module:JQPlugin~_optionsChanged|_optionsChanged} functions.
        			@protected
        			@param {jQuery} elem The current jQuery element.
        			@param {object} inst The instance settings.
        			@example _preDestroy: function(elem, inst) {
          elem.off('.' + this.name);
        } */
        _preDestroy: function(elem2, inst) {
        }
      });
      function camelCase(name) {
        return name.replace(/-([a-z])/g, function(match, group) {
          return group.toUpperCase();
        });
      }
      $.JQPlugin = {
        /** Create a new collection plugin.
        			@memberof $.JQPlugin
        			@param {string} [superClass='JQPlugin'] The name of the parent class to inherit from.
        			@param {object} overrides The property/function overrides for the new class.
        				See {@link module:JQPlugin|JQPlugin} for the base functionality.
        			@example $.JQPlugin.createPlugin({ // Define the plugin
          name: 'tabs',
          defaultOptions: {selectedClass: 'selected'},
          _initSettings: function(elem, options) { return {...}; },
          _postAttach: function(elem, inst) { ... }
        });
        $('selector').tabs(); // And instantiate it */
        createPlugin: function(superClass, overrides) {
          if (typeof superClass === "object") {
            overrides = superClass;
            superClass = "JQPlugin";
          }
          superClass = camelCase(superClass);
          var className = camelCase(overrides.name);
          JQClass.classes[className] = JQClass.classes[superClass].extend(overrides);
          new JQClass.classes[className]();
        }
      };
    })(jQuery);
    (function($2) {
      "use strict";
      var pluginName = "keypad";
      $2.JQPlugin.createPlugin({
        /** The name of the plugin.
        	@default 'keypad' */
        name: pluginName,
        /** Don't deep merge options - causes problems with arrays.
        	@default false */
        deepMerge: false,
        /** Keypad before show callback.
        	Triggered before the keypad is shown.
        	@global
        	@callback BeforeShowCallback
        	@param {jQuery} div The div to be shown.
        	@param {object} inst The current instance settings. */
        /** Keypad on keypress callback.
        	Triggered when a key on the keypad is pressed.
        	@global
        	@callback KeypressCallback
        	@param {string} key The key just pressed.
        	@param {string} value The full value entered so far.
        	@param {object} inst The current instance settings. */
        /** Keypad on close callback.
        	Triggered when the keypad is closed.
        	@global
        	@callback CloseCallback
        	@param {string} value The full value entered so far.
        	@param {object} inst The current instance settings. */
        /** Keypad is alphabetic callback.
        			Triggered when an alphabetic key needs to be identified.
        			@global
        			@callback IsAlphabeticCallback
        			@param {string} ch The key to check.
        			@return {boolean} <code>true</code> if this key is alphabetic, <code>false</code> if not.
        			@example isAlphabetic: function(ch) {
          return (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z');
        } */
        /** Keypad is numeric callback.
        			Triggered when an numeric key needs to be identified.
        			@global
        			@callback IsNumericCallback
        			@param {string} ch The key to check.
        			@return {boolean} <code>true</code> if this key is numeric, <code>false</code> if not.
        			@example isNumeric: function(ch) {
          return (ch >= '0' && ch <= '9');
        } */
        /** Keypad to upper callback.
        			Triggered to convert keys to upper case.
        			@global
        			@callback ToUpperCallback
        			@param {string} ch The key to convert.
        			@return {string} The upper case version of this key.
        			@example toUpper: function(ch) {
          return ch.toUpperCase();
        } */
        /** Key action callback.
        	Triggered when a key is pressed.
        	@global
        	@callback KeyActionCallback
        	@see addKeyDef
        	@param {object} inst The current instance settings.
        	@example $.keypad.addKeyDef('CLEAR', 'clear', function(inst) { plugin._clearValue(inst); }); */
        /** Default settings for the plugin.
        	@property {string} [showOn='focus'] 'focus' for popup on focus, 'button' for trigger button,
        		or 'both' for either.
        	@property {string} [buttonImage=''] URL for trigger button image.
        	@property {boolean} [buttonImageOnly=false] <code>true</code> if the image appears alone,
        		<code>false</code> if it appears on a button.
        	@property {string} [showAnim='show'] Name of jQuery animation for popup.
        	@property {object} [showOptions=null] Options for enhanced animations.
        	@property {string|number} [duration='normal'] Duration of display/closure as a named speed or in milliseconds.
        	@property {string} [appendText=''] Display text following the text field, e.g., showing the format.
        	@property {boolean} [useThemeRoller=false] <code>true</code> to add ThemeRoller classes.
        	@property {string} [keypadClass=''] Additional CSS class for the keypad for an instance.
        	@property {string} [prompt=''] Display text at the top of the keypad.
        	@property {string[]} [layout={@linkcode module:Keypad.numericLayout|this.numericLayout}]
        		Layout of keys. One string per row.
        	@property {string} [separator=''] Separator character between keys in the <code>layout</code>,
        		empty string for one character keys.
        	@property {string|jQuery|Element} [target=null] Input target for an inline keypad.
        	@property {boolean} [keypadOnly=true] <code>true</code> for entry only via the keypad,
        		<code>false</code> for real keyboard too.
        	@property {boolean} [randomiseAlphabetic=false] <code>true</code> to randomise the alphabetic key positions,
        		<code>false</code> to keep them in order.
        	@property {boolean} [randomiseNumeric=false] <code>true</code> to randomise the numeric key positions,
        		<code>false</code> to keep rhem in order.
        	@property {boolean} [randomiseOther=false] <code>true</code> to randomise the other key positions,
        		<code>false</code> to keep them in order.
        	@property {boolean} [randomiseAll=false] <code>true</code> to randomise all key positions,
        		<code>false</code> to keep them in order.
        	@property {BeforeShowCallback} [beforeShow=null] Callback before showing the keypad.
        	@property {KeypressCallback} [onKeypress=null] Callback when a key is selected.
        	@property {CloseCallback} [onClose=null] Callback when the panel is closed. */
        defaultOptions: {
          showOn: "focus",
          buttonImage: "",
          buttonImageOnly: false,
          showAnim: "show",
          showOptions: null,
          duration: "normal",
          appendText: "",
          useThemeRoller: false,
          keypadClass: "",
          prompt: "",
          layout: [],
          // Set at the end
          separator: "",
          target: null,
          keypadOnly: true,
          randomiseAlphabetic: false,
          randomiseNumeric: false,
          randomiseOther: false,
          randomiseAll: false,
          beforeShow: null,
          onKeypress: null,
          onClose: null
        },
        /** Localisations for the plugin.
        	Entries are objects indexed by the language code ('' being the default US/English).
        	Each object has the following attributes.
        	@property {string} [buttonText='...'] Display text for trigger button.
        	@property {string} [buttonStatus='Open the keypad'] Status text for trigger button.
        	@property {string} [closeText='Close'] Display text for close link.
        	@property {string} [closeStatus='Close the keypad'] Status text for close link.
        	@property {string} [clearText='Clear'] Display text for clear link.
        	@property {string} [clearStatus='Erase all the text'] Status text for clear link.
        	@property {string} [backText='Back'] Display text for back link.
        	@property {string} [backStatus='Erase the previous character'] Status text for back link.
        	@property {string} [spacebarText='&#160;'] Display text for space bar.
        	@property {string} [spacebarStatus='Space'] Status text for space bar.
        	@property {string} [enterText='Enter'] Display text for carriage return.
        	@property {string} [enterStatus='Carriage return'] Status text for carriage return.
        	@property {string} [tabText='→'] Display text for tab.
        	@property {string} [tabStatus='Horizontal tab'] Status text for tab.
        	@property {string} [shiftText='Shift'] Display text for shift link.
        	@property {string} [shiftStatus='Toggle upper/lower case characters'] Status text for shift link.
        	@property {string} [alphabeticLayout={@linkcode module:Keypad~qwertyAlphabetic|this.qwertyAlphabetic}]
        		Default layout for alphabetic characters.
        	@property {string} [fullLayout={@linkcode module:Keypad~qwertyLayout|this.qwertyLayout}]
        		Default layout for full keyboard.
        	@property {IsAlphabeticCallback} [isAlphabetic={@linkcode module:Keypad~isAlphabetic|this.isAlphabetic}]
        		Function to determine if character is alphabetic.
        	@property {IsNumericCallback} [isNumeric={@linkcode module:Keypad~isNumeric|this.isNumeric}]
        		Function to determine if character is numeric.
        	@property {ToUpperCallback} [toUpper={@linkcode module:Keypad~toUpper|this.toUpper}]
        		Function to convert characters to upper case.
        	@property {boolean} [isRTL=false] <code>true</code> if right-to-left language,
        		<code>false</code> if left-to-right. */
        regionalOptions: {
          // Available regional settings, indexed by language/country code
          "": {
            // Default regional settings - English/US
            buttonText: "...",
            buttonStatus: "Open the keypad",
            closeText: "Close",
            closeStatus: "Close the keypad",
            clearText: "Clear",
            clearStatus: "Erase all the text",
            backText: "Back",
            backStatus: "Erase the previous character",
            spacebarText: "&#160;",
            spacebarStatus: "Space",
            enterText: "Enter",
            enterStatus: "Carriage return",
            tabText: "→",
            tabStatus: "Horizontal tab",
            shiftText: "Shift",
            shiftStatus: "Toggle upper/lower case characters",
            alphabeticLayout: [],
            // Set at the end
            fullLayout: [],
            isAlphabetic: null,
            isNumeric: null,
            toUpper: null,
            isRTL: false
          }
        },
        BS: "\b",
        // Backspace
        DEL: "",
        // Delete
        _curInst: null,
        // The current instance in use
        _disabledFields: [],
        // List of keypad fields that have been disabled
        _keypadShowing: false,
        // True if the popup panel is showing , false if not
        _keyCode: 0,
        _specialKeys: [],
        _mainDivClass: pluginName + "-popup",
        // The main keypad division class
        _inlineClass: pluginName + "-inline",
        // The inline marker class
        _appendClass: pluginName + "-append",
        // The append marker class
        _triggerClass: pluginName + "-trigger",
        // The trigger marker class
        _disableClass: pluginName + "-disabled",
        // The disabled covering marker class
        _inlineEntryClass: pluginName + "-keyentry",
        // The inline entry marker class
        _rtlClass: pluginName + "-rtl",
        // The right-to-left marker class
        _rowClass: pluginName + "-row",
        // The keypad row marker class
        _promptClass: pluginName + "-prompt",
        // The prompt marker class
        _specialClass: pluginName + "-special",
        // The special key marker class
        _namePrefixClass: pluginName + "-",
        // The key name marker class prefix
        _keyClass: pluginName + "-key",
        // The key marker class
        _keyDownClass: pluginName + "-key-down",
        // The key down marker class
        /** Add the definition of a special key.
        	@param {string} id The identifier for this key - access via <code>$.keypad.xxx</code>.
        	@param {string} name The prefix for localisation strings and the suffix for a class name.
        	@param {KeyActionCallback} action The action performed for this key - receives <code>inst</code> as a parameter.
        	@param {boolean} [noHighlight=false] <code>true</code> to suppress highlight when using ThemeRoller.
        	@return {Keypad} The keypad object for chaining further calls.
        	@example $.keypad.addKeyDef('CLEAR', 'clear', function(inst) { plugin._clearValue(inst); }); */
        addKeyDef: function(id, name, action, noHighlight) {
          if (this._keyCode === 32) {
            throw "Only 32 special keys allowed";
          }
          this[id] = String.fromCharCode(this._keyCode++);
          this._specialKeys.push({
            code: this[id],
            id,
            name,
            action,
            noHighlight
          });
          return this;
        },
        /** Additional setup for the keypad.
        	Create popup div.
        	@private */
        _init: function() {
          this.mainDiv = $2('<div class="' + this._mainDivClass + '" style="display: none;"></div>');
          this._super();
        },
        _instSettings: function(elem2, options) {
          var inline = !elem2[0].nodeName.toLowerCase().match(/input|textarea/);
          return {
            _inline: inline,
            ucase: false,
            _mainDiv: inline ? $2('<div class="' + this._inlineClass + '"></div>') : plugin.mainDiv
          };
        },
        _postAttach: function(elem2, inst) {
          if (inst._inline) {
            elem2.append(inst._mainDiv).on("click." + inst.name, function() {
              inst._input.trigger("focus");
            });
            this._updateKeypad(inst);
          } else if (elem2.is(":disabled")) {
            this.disable(elem2);
          }
        },
        /** Determine the input field for the keypad.
        	@private
        	@param {jQuery} elem The target control.
        	@param {object} inst The instance settings. */
        _setInput: function(elem2, inst) {
          inst._input = $2(!inst._inline ? elem2 : inst.options.target || '<input type="text" class="' + this._inlineEntryClass + '" disabled></input>');
          if (inst._inline) {
            elem2.find("input").remove();
            if (!inst.options.target) {
              elem2.append(inst._input);
            }
          }
        },
        _optionsChanged: function(elem2, inst, options) {
          $2.extend(inst.options, options);
          elem2.off("." + inst.name).siblings("." + this._appendClass).remove().end().siblings("." + this._triggerClass).remove();
          var appendText = inst.options.appendText;
          if (appendText) {
            elem2[inst.options.isRTL ? "before" : "after"](
              '<span class="' + this._appendClass + '">' + appendText + "</span>"
            );
          }
          if (!inst._inline) {
            if (inst.options.showOn === "focus" || inst.options.showOn === "both") {
              elem2.on("focus." + inst.name, this.show).on("keydown." + inst.name, this._doKeyDown);
            }
            if (inst.options.showOn === "button" || inst.options.showOn === "both") {
              var buttonStatus = inst.options.buttonStatus;
              var buttonImage = inst.options.buttonImage;
              var trigger = $2(inst.options.buttonImageOnly ? $2('<img src="' + buttonImage + '" alt="' + buttonStatus + '" title="' + buttonStatus + '"></img>') : $2('<button type="button" title="' + buttonStatus + '"></button>').html(buttonImage === "" ? inst.options.buttonText : $2('<img src="' + buttonImage + '" alt="' + buttonStatus + '" title="' + buttonStatus + '"></img>')));
              elem2[inst.options.isRTL ? "before" : "after"](trigger);
              trigger.addClass(this._triggerClass).on("click", function() {
                if (plugin._keypadShowing && plugin._lastField === elem2[0]) {
                  plugin.hide();
                } else {
                  plugin.show(elem2[0]);
                }
                return false;
              });
            }
          }
          inst.saveReadonly = elem2.attr("readonly");
          elem2.prop("readonly", inst.options.keypadOnly).on("setData." + inst.name, function(event, key2, value2) {
            inst.options[key2] = value2;
          }).on("getData." + inst.name, function(event, key2) {
            return inst.options[key2];
          });
          this._setInput(elem2, inst);
          this._updateKeypad(inst);
        },
        _preDestroy: function(elem2, inst) {
          if (this._curInst === inst) {
            this.hide();
          }
          elem2.siblings("." + this._appendClass).remove().end().siblings("." + this._triggerClass).remove().end().prev("." + this._inlineEntryClass).remove();
          elem2.empty().off("." + inst.name).prop("readonly", inst.saveReadonly);
          inst._input.removeData(inst.name);
        },
        /** Enable the keypad for a jQuery selection.
        	@param {Element} elem The target text field.
        	@example $(selector).keypad('enable'); */
        enable: function(elem2) {
          elem2 = $2(elem2);
          if (!elem2.hasClass(this._getMarker())) {
            return;
          }
          var nodeName = elem2[0].nodeName.toLowerCase();
          if (nodeName.match(/input|textarea/)) {
            elem2.prop("disabled", false).siblings("button." + this._triggerClass).prop("disabled", false).end().siblings("img." + this._triggerClass).css({ opacity: "1.0", cursor: "" });
          } else if (nodeName.match(/div|span/)) {
            elem2.children("." + this._disableClass).remove();
            this._getInst(elem2)._mainDiv.find("button").prop("disabled", false);
          }
          this._disabledFields = $2.map(
            this._disabledFields,
            function(value2) {
              return value2 === elem2[0] ? null : value2;
            }
          );
        },
        /** Disable the keypad for a jQuery selection.
        	@param {Element} elem The target text field.
        	@example $(selector).keypad('disable'); */
        disable: function(elem2) {
          elem2 = $2(elem2);
          if (!elem2.hasClass(this._getMarker())) {
            return;
          }
          var nodeName = elem2[0].nodeName.toLowerCase();
          if (nodeName.match(/input|textarea/)) {
            elem2.prop("disabled", true).siblings("button." + this._triggerClass).prop("disabled", true).end().siblings("img." + this._triggerClass).css({ opacity: "0.5", cursor: "default" });
          } else if (nodeName.match(/div|span/)) {
            var inline = elem2.children("." + this._inlineClass);
            var offset = inline.offset();
            var relOffset = { left: 0, top: 0 };
            inline.parents().each(function() {
              if ($2(this).css("position") === "relative") {
                relOffset = $2(this).offset();
                return false;
              }
            });
            elem2.prepend('<div class="' + this._disableClass + '" style="width: ' + inline.outerWidth() + "px; height: " + inline.outerHeight() + "px; left: " + (offset.left - relOffset.left) + "px; top: " + (offset.top - relOffset.top) + 'px;"></div>');
            this._getInst(elem2)._mainDiv.find("button").prop("disabled", true);
          }
          this._disabledFields = $2.map(
            this._disabledFields,
            function(value2) {
              return value2 === elem2[0] ? null : value2;
            }
          );
          this._disabledFields[this._disabledFields.length] = elem2[0];
        },
        /** Is the text field disabled as a keypad?
        	@param {Element} elem The target text field.
        	@return {boolean} <code>true</code> if disabled, <code>false</code> if enabled.
        	@example var disabled = $(selector).keypad('isDisabled'); */
        isDisabled: function(elem2) {
          return elem2 && $2.inArray(elem2, this._disabledFields) > -1;
        },
        /** Pop-up the keypad for a given text field.
        	@param {Element|Event} elem The text field attached to the keypad or event if triggered by focus.
        	@example $(selector).keypad('show'); */
        show: function(elem2) {
          elem2 = elem2.target || elem2;
          if (plugin.isDisabled(elem2) || plugin._lastField === elem2) {
            return;
          }
          var inst = plugin._getInst(elem2);
          plugin.hide(null, "");
          plugin._lastField = elem2;
          plugin._pos = plugin._findPos(elem2);
          plugin._pos[1] += elem2.offsetHeight;
          var isFixed = false;
          $2(elem2).parents().each(function() {
            isFixed = isFixed || $2(this).css("position") === "fixed";
            return !isFixed;
          });
          var offset = { left: plugin._pos[0], top: plugin._pos[1] };
          plugin._pos = null;
          inst._mainDiv.stop(true, true).css({ position: "absolute", display: "block", top: "-1000px", width: "auto" });
          plugin._updateKeypad(inst);
          offset = plugin._checkOffset(inst, offset, isFixed);
          inst._mainDiv.css({
            position: isFixed ? "fixed" : "absolute",
            display: "none",
            left: offset.left + "px",
            top: offset.top + "px"
          });
          var duration = inst.options.duration;
          var showAnim = inst.options.showAnim;
          var postProcess = function() {
            plugin._keypadShowing = true;
          };
          if ($2.effects && ($2.effects[showAnim] || $2.effects.effect && $2.effects.effect[showAnim])) {
            var data2 = inst._mainDiv.data();
            for (var key2 in data2) {
              if (key2.match(/^ec\.storage\./)) {
                data2[key2] = inst._mainDiv.css(key2.replace(/ec\.storage\./, ""));
              }
            }
            inst._mainDiv.data(data2).show(
              showAnim,
              inst.options.showOptions || {},
              duration,
              postProcess
            );
          } else {
            inst._mainDiv[showAnim || "show"](showAnim ? duration : 0, postProcess);
          }
          if (inst._input[0].type !== "hidden") {
            inst._input[0].focus();
          }
          plugin._curInst = inst;
        },
        /** Generate the keypad content.
        	@private
        	@param {object} inst The instance settings. */
        _updateKeypad: function(inst) {
          inst._mainDiv.empty().append(this._generateHTML(inst)).removeClass().addClass(inst.options.keypadClass + (inst.options.useThemeRoller ? " ui-widget ui-widget-content ui-corner-all ui-shadow" : "") + (inst.options.isRTL ? " " + this._rtlClass : "") + " " + (inst._inline ? this._inlineClass : this._mainDivClass));
          if (typeof inst.options.beforeShow === "function") {
            inst.options.beforeShow.apply(
              inst._input ? inst._input[0] : null,
              [inst._mainDiv, inst]
            );
          }
        },
        /** Check positioning to remain on screen.
        	@private
        	@param {object} inst The instance settings.
        	@param {object} offset The current offset.
        	@param {boolean} isFixed <code>true</code> if the text field is fixed in position.
        	@return {object} The updated offset. */
        _checkOffset: function(inst, offset, isFixed) {
          var pos = inst._input ? this._findPos(inst._input[0]) : null;
          var browserWidth = window.innerWidth || document.documentElement.clientWidth;
          var browserHeight = window.innerHeight || document.documentElement.clientHeight;
          var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
          var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
          var width = 0;
          inst._mainDiv.find(":not(div)").each(function() {
            width = Math.max(width, this.offsetLeft + $2(this).outerWidth(true));
          });
          inst._mainDiv.css("width", width + 1 + "px");
          if (inst.options.isRTL || offset.left + inst._mainDiv.outerWidth() - scrollX > browserWidth) {
            offset.left = Math.max(
              isFixed ? 0 : scrollX,
              pos[0] + (inst._input ? inst._input.outerWidth() : 0) - (isFixed ? scrollX : 0) - inst._mainDiv.outerWidth()
            );
          } else {
            offset.left = Math.max(isFixed ? 0 : scrollX, offset.left - (isFixed ? scrollX : 0));
          }
          if (offset.top + inst._mainDiv.outerHeight() - scrollY > browserHeight) {
            offset.top = Math.max(
              isFixed ? 0 : scrollY,
              pos[1] - (isFixed ? scrollY : 0) - inst._mainDiv.outerHeight()
            );
          } else {
            offset.top = Math.max(isFixed ? 0 : scrollY, offset.top - (isFixed ? scrollY : 0));
          }
          return offset;
        },
        /** Find an object's position on the screen.
        	@private
        	@param {Element} obj The element to find the position for.
        	@return {number[]} The element's position. */
        _findPos: function(obj) {
          while (obj && (obj.type === "hidden" || obj.nodeType !== 1)) {
            obj = obj.nextSibling;
          }
          var position = $2(obj).offset();
          return [position.left, position.top];
        },
        /** Hide the keypad from view.
        	@param {Element} elem The text field attached to the keypad.
        	@param {string|number} [duration] The duration over which to close the keypad,
        		as a named time or in milliseconds.
        	@example $(selector).keypad('hide') */
        hide: function(elem2, duration) {
          var inst = this._curInst;
          if (!inst || elem2 && inst !== $2.data(elem2, this.name)) {
            return;
          }
          if (this._keypadShowing) {
            inst._mainDiv.stop(true, true);
            duration = typeof duration !== "undefined" && duration !== null ? duration : inst.options.duration;
            var showAnim = inst.options.showAnim;
            if ($2.effects && ($2.effects[showAnim] || $2.effects.effect && $2.effects.effect[showAnim])) {
              inst._mainDiv.hide(showAnim, inst.options.showOptions || {}, duration);
            } else {
              inst._mainDiv[showAnim === "slideDown" ? "slideUp" : showAnim === "fadeIn" ? "fadeOut" : "hide"](showAnim ? duration : 0);
            }
          }
          if (typeof inst.options.onClose === "function") {
            inst.options.onClose.apply(
              inst._input ? inst._input[0] : null,
              // trigger custom callback
              [inst._input.val(), inst]
            );
          }
          if (this._keypadShowing) {
            this._keypadShowing = false;
            this._lastField = null;
          }
          if (inst._inline) {
            inst._input.val("");
          }
          this._curInst = null;
        },
        /** Handle keystrokes.
        	@private
        	@param {Event} event The key event. */
        _doKeyDown: function(event) {
          if (event.keyCode === 9) {
            plugin.mainDiv.stop(true, true);
            plugin.hide();
          }
        },
        /** Close keypad if clicked elsewhere.
        	@private
        	@param {Event} event The mouseclick details. */
        _checkExternalClick: function(event) {
          if (!plugin._curInst) {
            return;
          }
          var target = $2(event.target);
          if (target.closest("." + plugin._mainDivClass).length === 0 && !target.hasClass(plugin._getMarker()) && target.closest("." + plugin._triggerClass).length === 0 && plugin._keypadShowing) {
            plugin.hide();
          }
        },
        /** Toggle between upper and lower case.
        	@private
        	@param {object} inst The instance settings. */
        _shiftKeypad: function(inst) {
          inst.ucase = !inst.ucase;
          this._updateKeypad(inst);
          inst._input.trigger("focus");
        },
        /** Erase the text field.
        	@private
        	@param {object} inst The instance settings. */
        _clearValue: function(inst) {
          this._setValue(inst, "", 0);
          this._notifyKeypress(inst, plugin.DEL);
          inst._input.trigger("focus");
        },
        /** Erase the last character.
        	@private
        	@param {object} inst The instance settings. */
        _backValue: function(inst) {
          var elem2 = inst._input[0];
          var value2 = inst._input.val();
          var range = [value2.length, value2.length];
          range = inst._input.prop("readonly") || inst._input.prop("disabled") ? range : elem2.setSelectionRange ? [elem2.selectionStart, elem2.selectionEnd] : elem2.createTextRange ? this._getIERange(elem2) : range;
          this._setValue(inst, value2.length === 0 ? "" : value2.substr(0, range[0] - 1) + value2.substr(range[1]), range[0] - 1);
          this._notifyKeypress(inst, plugin.BS);
          inst._input.trigger("focus");
        },
        /** Update the text field with the selected value.
        	@private
        	@param {object} inst The instance settings.
        	@param {string} value The new character to add. */
        _selectValue: function(inst, value2) {
          this.insertValue(inst._input[0], value2);
          this._setValue(inst, inst._input.val());
          this._notifyKeypress(inst, value2);
        },
        /** Update the text field with the selected value.
        	@param {string|Element|jQuery} input The jQuery selector, input field, or jQuery collection.
        	@param {string} value The new character to add.
        	@example $.keypad.insertValue(field, 'abc'); */
        insertValue: function(input, value2) {
          input = input.jquery ? input : $2(input);
          var elem2 = input[0];
          var newValue = input.val();
          var range = [newValue.length, newValue.length];
          range = input.attr("readonly") || input.attr("disabled") ? range : elem2.setSelectionRange ? [elem2.selectionStart, elem2.selectionEnd] : elem2.createTextRange ? this._getIERange(elem2) : range;
          input.val(newValue.substr(0, range[0]) + value2 + newValue.substr(range[1]));
          var pos = range[0] + value2.length;
          if (input.is(":visible")) {
            input.trigger("focus");
          }
          if (elem2.setSelectionRange) {
            if (input.is(":visible")) {
              elem2.setSelectionRange(pos, pos);
            }
          } else if (elem2.createTextRange) {
            range = elem2.createTextRange();
            range.move("character", pos);
            range.select();
          }
        },
        /** Get the coordinates for the selected area in the text field in IE.
        	@private
        	@param {Element} elem The target text field.
        	@return {number[]} The start and end positions of the selection. */
        _getIERange: function(elem2) {
          elem2.trigger("focus");
          var selectionRange = document.selection.createRange().duplicate();
          var beforeRange = this._getIETextRange(elem2);
          beforeRange.setEndPoint("EndToStart", selectionRange);
          var checkCRLF = function(range) {
            var origText = range.text;
            var text = origText;
            while (true) {
              if (range.compareEndPoints("StartToEnd", range) === 0) {
                break;
              } else {
                range.moveEnd("character", -1);
                if (range.text === origText) {
                  text += "\r\n";
                } else {
                  break;
                }
              }
            }
            return text;
          };
          var beforeText = checkCRLF(beforeRange);
          var selectionText = checkCRLF(selectionRange);
          return [beforeText.length, beforeText.length + selectionText.length];
        },
        /** Create an IE text range for the text field.
        	@private
        	@param {Element} elem The target text field.
        	@return {object} The corresponding text range. */
        _getIETextRange: function(elem2) {
          var isInput = elem2.nodeName.toLowerCase() === "input";
          var range = isInput ? elem2.createTextRange() : document.body.createTextRange();
          if (!isInput) {
            range.moveToElementText(elem2);
          }
          return range;
        },
        /** Set the text field to the selected value, and trigger any on change event.
        	@private
        	@param {object} inst The instance settings.
        	@param {string} value The new value for the text field. */
        _setValue: function(inst, value2) {
          var maxlen = inst._input.attr("maxlength");
          if (maxlen > -1) {
            value2 = value2.substr(0, maxlen);
          }
          inst._input.val(value2);
          if (typeof value2 !== "function") {
            inst._input.trigger("change");
          }
        },
        /** Notify clients of a keypress.
        	@private
        	@param {object} inst The instance settings.
        	@param {string} key The character pressed. */
        _notifyKeypress: function(inst, key2) {
          if (typeof inst.options.onKeypress === "function") {
            inst.options.onKeypress.apply(
              inst._input ? inst._input[0] : null,
              [key2, inst._input.val(), inst]
            );
          }
        },
        /** Generate the HTML for the current state of the keypad.
        	@private
        	@param {object} inst The instance settings.
        	@return {jQuery} The HTML for this keypad. */
        _generateHTML: function(inst) {
          var html = !inst.options.prompt ? "" : '<div class="' + this._promptClass + (inst.options.useThemeRoller ? " ui-widget-header ui-corner-all" : "") + '">' + inst.options.prompt + "</div>";
          var layout = this._randomiseLayout(inst);
          for (var i = 0; i < layout.length; i++) {
            html += '<div class="' + this._rowClass + '">';
            var keys = layout[i].split(inst.options.separator);
            for (var j = 0; j < keys.length; j++) {
              if (inst.ucase) {
                keys[j] = inst.options.toUpper(keys[j]);
              }
              var keyDef = this._specialKeys[keys[j].charCodeAt(0)];
              if (keyDef) {
                html += keyDef.action ? '<button type="button" class="' + this._specialClass + " " + this._namePrefixClass + keyDef.name + (inst.options.useThemeRoller ? " ui-corner-all ui-state-default" + (keyDef.noHighlight ? "" : " ui-state-highlight") : "") + '" title="' + inst.options[keyDef.name + "Status"] + '">' + (inst.options[keyDef.name + "Text"] || "&#160;") + "</button>" : '<div class="' + this._namePrefixClass + keyDef.name + '"></div>';
              } else {
                html += '<button type="button" class="' + this._keyClass + (inst.options.useThemeRoller ? " ui-corner-all ui-state-default" : "") + '">' + (keys[j] === " " ? "&#160;" : keys[j]) + "</button>";
              }
            }
            html += "</div>";
          }
          html = $2(html);
          var thisInst = inst;
          var activeClasses = this._keyDownClass + (inst.options.useThemeRoller ? " ui-state-active" : "");
          var buttons = html.find("button");
          PrimeFaces.skinButton(buttons);
          buttons.on("mousedown", function() {
            $2(this).addClass(activeClasses);
          }).on("mouseup", function() {
            $2(this).removeClass(activeClasses);
          }).on("mouseout", function() {
            $2(this).removeClass(activeClasses);
          }).filter("." + this._keyClass).on("click", function() {
            plugin._selectValue(thisInst, $2(this).text());
          });
          $2.each(this._specialKeys, function(i2, keyDef2) {
            html.find("." + plugin._namePrefixClass + keyDef2.name).on("click", function() {
              keyDef2.action.apply(thisInst._input, [thisInst]);
            });
          });
          return html;
        },
        /** Check whether characters should be randomised, and, if so, produce the randomised layout.
        	@private
        	@param {object} inst The instance settings.
        	@return {string[]} The layout with any requested randomisations applied. */
        _randomiseLayout: function(inst) {
          if (!inst.options.randomiseNumeric && !inst.options.randomiseAlphabetic && !inst.options.randomiseOther && !inst.options.randomiseAll) {
            return inst.options.layout;
          }
          var numerics = [];
          var alphas = [];
          var others = [];
          var newLayout = [];
          var i, j, keys;
          for (i = 0; i < inst.options.layout.length; i++) {
            newLayout[i] = "";
            keys = inst.options.layout[i].split(inst.options.separator);
            for (j = 0; j < keys.length; j++) {
              if (this._isControl(keys[j])) {
                continue;
              }
              if (inst.options.randomiseAll) {
                others.push(keys[j]);
              } else if (inst.options.isNumeric(keys[j])) {
                numerics.push(keys[j]);
              } else if (inst.options.isAlphabetic(keys[j])) {
                alphas.push(keys[j]);
              } else {
                others.push(keys[j]);
              }
            }
          }
          if (inst.options.randomiseNumeric) {
            this._shuffle(numerics);
          }
          if (inst.options.randomiseAlphabetic) {
            this._shuffle(alphas);
          }
          if (inst.options.randomiseOther || inst.options.randomiseAll) {
            this._shuffle(others);
          }
          var n = 0;
          var a = 0;
          var o = 0;
          for (i = 0; i < inst.options.layout.length; i++) {
            keys = inst.options.layout[i].split(inst.options.separator);
            for (j = 0; j < keys.length; j++) {
              newLayout[i] += (j > 0 ? inst.options.separator : "") + (this._isControl(keys[j]) ? keys[j] : inst.options.randomiseAll ? others[o++] : inst.options.isNumeric(keys[j]) ? numerics[n++] : inst.options.isAlphabetic(keys[j]) ? alphas[a++] : others[o++]);
            }
          }
          return newLayout;
        },
        /** Is a given character a control character?
        	@private
        	@param {string} ch The character to test.
        	@return {boolean} <code>true</code> if a control character, <code>false</code> if not. */
        _isControl: function(ch) {
          return ch < " ";
        },
        /** Is a given character alphabetic?
        	For use with the {@linkcode module:Keypad~regionalOptions|isAlphabetic} regional option.
        	Returns <code>true</code> for standard English alphabetic characters.
        	@param {string} ch The character to test.
        	@return {boolean} <code>true</code> if alphabetic, <code>false</code> if not.
        	@example isAlphabetic: $.keypad.isAlphabetic */
        isAlphabetic: function(ch) {
          return ch >= "A" && ch <= "Z" || ch >= "a" && ch <= "z";
        },
        /** Is a given character numeric?
        	For use with the {@linkcode module:Keypad~regionalOptions|isNumeric} regional option.
        	Returns <code>true</code> for standard English numbers.
        	@param {string} ch The character to test.
        	@return {boolean} <code>true</code> if numeric, <code>false</code> if not.
        	@example isNumeric: $.keypad.isNumeric */
        isNumeric: function(ch) {
          return ch >= "0" && ch <= "9";
        },
        /** Convert a character to upper case.
        	For use with the {@linkcode module:Keypad~regionalOptions|toUpper} regional option.
        	@param {string} ch The character to convert.
        	@return {string} Its uppercase version.
        	@example toUpper: $.keypad.toUpper */
        toUpper: function(ch) {
          return ch.toUpperCase();
        },
        /** Randomise the contents of an array.
        	@private
        	@param {string[]} values The array to rearrange. */
        _shuffle: function(values) {
          for (var i = values.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var ch = values[i];
            values[i] = values[j];
            values[j] = ch;
          }
        }
      });
      var plugin = $2.keypad;
      plugin.addKeyDef("CLOSE", "close", function(inst) {
        plugin._curInst = inst._inline ? inst : plugin._curInst;
        plugin.hide();
      });
      plugin.addKeyDef("CLEAR", "clear", function(inst) {
        plugin._clearValue(inst);
      });
      plugin.addKeyDef("BACK", "back", function(inst) {
        plugin._backValue(inst);
      });
      plugin.addKeyDef("SHIFT", "shift", function(inst) {
        plugin._shiftKeypad(inst);
      });
      plugin.addKeyDef("SPACE_BAR", "spacebar", function(inst) {
        plugin._selectValue(inst, " ");
      }, true);
      plugin.addKeyDef("SPACE", "space");
      plugin.addKeyDef("HALF_SPACE", "half-space");
      plugin.addKeyDef("ENTER", "enter", function(inst) {
        plugin._selectValue(inst, "\r");
      }, true);
      plugin.addKeyDef("TAB", "tab", function(inst) {
        plugin._selectValue(inst, "	");
      }, true);
      plugin.numericLayout = ["123" + plugin.CLOSE, "456" + plugin.CLEAR, "789" + plugin.BACK, plugin.SPACE + "0"];
      plugin.qwertyAlphabetic = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
      plugin.qwertyLayout = [
        "!@#$%^&*()_=" + plugin.HALF_SPACE + plugin.SPACE + plugin.CLOSE,
        plugin.HALF_SPACE + "`~[]{}<>\\|/" + plugin.SPACE + "789",
        `qwertyuiop'"` + plugin.HALF_SPACE + "456",
        plugin.HALF_SPACE + "asdfghjkl;:" + plugin.SPACE + "123",
        plugin.SPACE + "zxcvbnm,.?" + plugin.SPACE + plugin.HALF_SPACE + "-0+",
        "" + plugin.TAB + plugin.ENTER + plugin.SPACE_BAR + plugin.SHIFT + plugin.HALF_SPACE + plugin.BACK + plugin.CLEAR
      ];
      $2.extend(plugin.regionalOptions[""], {
        alphabeticLayout: plugin.qwertyAlphabetic,
        fullLayout: plugin.qwertyLayout,
        isAlphabetic: plugin.isAlphabetic,
        isNumeric: plugin.isNumeric,
        toUpper: plugin.toUpper
      });
      plugin.setDefaults($2.extend({ layout: plugin.numericLayout }, plugin.regionalOptions[""]));
      $2(function() {
        $2(document.body).append(plugin.mainDiv).on("mousedown." + pluginName, plugin._checkExternalClick);
      });
    })(jQuery);
  }
});

// src/keyboard/2-keyboard.js
var import_jquery_keypad = __toESM(require_jquery_keypad());

// src/keyboard/1-keyboard-utils.js
(function() {
  const layouts = {
    /**
     * A basic `qwerty` layout without many special characters. This is a list with one entry for each keyboard row.
     * Each row is a string that contains the characters available on that row.
     * @type {string[]}
     */
    qwertyBasic: [
      $.keypad.qwertyAlphabetic[0] + $.keypad.CLOSE,
      $.keypad.HALF_SPACE + $.keypad.qwertyAlphabetic[1] + $.keypad.HALF_SPACE + $.keypad.CLEAR,
      $.keypad.SPACE + $.keypad.qwertyAlphabetic[2] + $.keypad.SHIFT + $.keypad.BACK
    ],
    /**
     * A `qwerty` layout with some special characters. This is a list with one entry for each keyboard row. Each row
     * is a string that contains the characters available on that row.
     * @type {string[]}
     */
    qwerty: $.keypad.qwertyLayout,
    /**
     * An alphabetical layout with the letter keys in alphabetical order. This is a list with one entry for each
     * keyboard row. Each row is a string that contains the characters available on that row.
     * @type {string[]}
     */
    alphabetic: [
      "abcdefghij" + $.keypad.CLOSE,
      "klmnopqrst" + $.keypad.CLEAR,
      "uvwxyz" + $.keypad.SPACE + $.keypad.SPACE + $.keypad.SHIFT + $.keypad.BACK
    ]
  };
  const controls = {
    /**
     * The keyboard code for the button that closes (hides) the keyboard
     * @type {string}
     */
    close: $.keypad.CLOSE,
    /**
     * The keyboard code for the button that clears the entered text.
     * @type {string}
     */
    clear: $.keypad.CLEAR,
    /**
     * The keyboard code for the back button that removes the character to the left of the cursor.
     * @type {string}
     */
    back: $.keypad.BACK,
    /**
     * The keyboard code for the modifying shift button.
     * @type {string}
     */
    shift: $.keypad.SHIFT,
    /**
     * The keyboard code for the space button that insert a whitespace.
     * @type {string}
     */
    spacebar: $.keypad.SPACE_BAR,
    /**
     * The keyboard code for the space button that inserts a full-width space.
     * @type {string}
     */
    space: $.keypad.SPACE,
    /**
     * The keyboard code for the space button that inserts a half-width space.
     * @type {string}
     */
    halfspace: $.keypad.HALF_SPACE
  };
  function getPresetLayout(name) {
    return layouts[name];
  }
  function getPresetControl(name) {
    return controls[name];
  }
  function isDefinedControl(key2) {
    return controls[key2] != void 0;
  }
  function createLayoutFromTemplate(template) {
    template = decodeURIComponent(JSON.parse('"' + template.replace(/\"/g, '\\"') + '"'));
    var lines = template.split(","), template = new Array(lines.length);
    for (var i = 0; i < lines.length; i++) {
      template[i] = "";
      var lineControls = lines[i].split("-");
      for (var j = 0; j < lineControls.length; j++) {
        if (isDefinedControl(lineControls[j]))
          template[i] = template[i] + getPresetControl(lineControls[j]);
        else
          template[i] = template[i] + lineControls[j];
      }
    }
    return template;
  }
  PrimeFaces.widget.KeyboardUtils = {
    layouts,
    controls,
    getPresetLayout,
    getPresetControl,
    isDefinedControl,
    createLayoutFromTemplate
  };
})();

// src/keyboard/2-keyboard.js
var Keyboard = class extends BaseWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    var $this = this;
    if (this.cfg.layoutTemplate)
      this.cfg.layout = PrimeFaces.widget.KeyboardUtils.createLayoutFromTemplate(this.cfg.layoutTemplate);
    else
      this.cfg.layout = PrimeFaces.widget.KeyboardUtils.getPresetLayout(this.cfg.layoutName);
    this.cfg.beforeShow = function(div, inst) {
      $(div).addClass("ui-input-overlay").css("z-index", PrimeFaces.nextZindex());
      $this.bindPanelEvents();
    };
    this.cfg.onClose = function() {
      $this.unbindPanelEvents();
    };
    this.jq.keypad(this.cfg);
    PrimeFaces.skinInput(this.jq);
  }
  /**
   * Sets up all panel event listeners
   * @private
   */
  bindPanelEvents() {
    var $this = this;
    this.resizeHandler = PrimeFaces.utils.registerResizeHandler(this, "resize." + this.id + "_hide", null, function() {
      if (PrimeFaces.hideOverlaysOnViewportChange === true) {
        $this.jq.keypad("hide");
      }
    });
    this.scrollHandler = PrimeFaces.utils.registerConnectedOverlayScrollHandler(this, "scroll." + this.id + "_hide", this.jq, function() {
      if (PrimeFaces.hideOverlaysOnViewportChange === true) {
        $this.jq.keypad("hide");
      }
    });
  }
  /**
   * Unbind all panel event listeners
   * @private
   */
  unbindPanelEvents() {
    if (this.resizeHandler) {
      this.resizeHandler.unbind();
    }
    if (this.scrollHandler) {
      this.scrollHandler.unbind();
    }
  }
};
export {
  Keyboard
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2tleWJvYXJkLzAtanF1ZXJ5LmtleXBhZC5qcyIsICIuLi9zcmMva2V5Ym9hcmQvMi1rZXlib2FyZC5qcyIsICIuLi9zcmMva2V5Ym9hcmQvMS1rZXlib2FyZC11dGlscy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyogaHR0cDovL2tlaXRoLXdvb2QubmFtZS9rZXlwYWQuaHRtbFxuICAgS2V5cGFkIGZpZWxkIGVudHJ5IGV4dGVuc2lvbiBmb3IgalF1ZXJ5IHYyLjEuMS5cbiAgIFdyaXR0ZW4gYnkgS2VpdGggV29vZCAoa2J3b29ke2F0fWlpbmV0LmNvbS5hdSkgQXVndXN0IDIwMDguXG4gICBBdmFpbGFibGUgdW5kZXIgdGhlIE1JVCAoaHR0cDovL2tlaXRoLXdvb2QubmFtZS9saWNlbmNlLmh0bWwpIGxpY2Vuc2UuXG4gICBQbGVhc2UgYXR0cmlidXRlIHRoZSBhdXRob3IgaWYgeW91IHVzZSBpdC4gKi9cblxuLyogZ2xvYmFscyBKUUNsYXNzICovXG4vKiBTaW1wbGUgSmF2YVNjcmlwdCBJbmhlcml0YW5jZVxuICogQnkgSm9obiBSZXNpZyBodHRwOi8vZWpvaG4ub3JnL1xuICogTUlUIExpY2Vuc2VkLlxuICovXG4vLyBJbnNwaXJlZCBieSBiYXNlMiBhbmQgUHJvdG90eXBlXG4oZnVuY3Rpb24oKXtcblx0J3VzZSBzdHJpY3QnO1xuXHR2YXIgaW5pdGlhbGl6aW5nID0gZmFsc2U7XG5cblx0Ly8gVGhlIGJhc2UgSlFDbGFzcyBpbXBsZW1lbnRhdGlvbiAoZG9lcyBub3RoaW5nKVxuXHR3aW5kb3cuSlFDbGFzcyA9IGZ1bmN0aW9uKCl7fTtcblxuXHQvLyBDb2xsZWN0aW9uIG9mIGRlcml2ZWQgY2xhc3Nlc1xuXHRKUUNsYXNzLmNsYXNzZXMgPSB7fTtcblxuXHQvLyBDcmVhdGUgYSBuZXcgSlFDbGFzcyB0aGF0IGluaGVyaXRzIGZyb20gdGhpcyBjbGFzc1xuXHRKUUNsYXNzLmV4dGVuZCA9IGZ1bmN0aW9uIGV4dGVuZGVyKHByb3ApIHtcblx0XHR2YXIgYmFzZSA9IHRoaXMucHJvdG90eXBlO1xuXG5cdFx0Ly8gSW5zdGFudGlhdGUgYSBiYXNlIGNsYXNzIChidXQgb25seSBjcmVhdGUgdGhlIGluc3RhbmNlLCBkb24ndCBydW4gdGhlIGluaXQgY29uc3RydWN0b3IpXG5cdFx0aW5pdGlhbGl6aW5nID0gdHJ1ZTtcblx0XHR2YXIgcHJvdG90eXBlID0gbmV3IHRoaXMoKTtcblx0XHRpbml0aWFsaXppbmcgPSBmYWxzZTtcblxuXHRcdC8vIENvcHkgdGhlIHByb3BlcnRpZXMgb3ZlciBvbnRvIHRoZSBuZXcgcHJvdG90eXBlXG5cdFx0Zm9yICh2YXIgbmFtZSBpbiBwcm9wKSB7IC8vIGpzaGludCBsb29wZnVuYzp0cnVlXG5cdFx0XHQvLyBDaGVjayBpZiB3ZSdyZSBvdmVyd3JpdGluZyBhbiBleGlzdGluZyBmdW5jdGlvblxuXHRcdFx0aWYgKHR5cGVvZiBwcm9wW25hbWVdID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiYXNlW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHByb3RvdHlwZVtuYW1lXSA9IChmdW5jdGlvbiAobmFtZSwgZm4pIHtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0dmFyIF9fc3VwZXIgPSB0aGlzLl9zdXBlcjtcblx0XHRcdFx0XHRcdC8vIEFkZCBhIG5ldyAuX3N1cGVyKCkgbWV0aG9kIHRoYXQgaXMgdGhlIHNhbWUgbWV0aG9kIGJ1dCBvbiB0aGUgc3VwZXItY2xhc3Ncblx0XHRcdFx0XHRcdHRoaXMuX3N1cGVyID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGJhc2VbbmFtZV0uYXBwbHkodGhpcywgYXJncyB8fCBbXSk7XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0dmFyIHJldCA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdFx0XHQvLyBUaGUgbWV0aG9kIG9ubHkgbmVlZHMgdG8gYmUgYm91bmQgdGVtcG9yYXJpbHksIHNvIHdlIHJlbW92ZSBpdCB3aGVuIHdlJ3JlIGRvbmUgZXhlY3V0aW5nXG5cdFx0XHRcdFx0XHR0aGlzLl9zdXBlciA9IF9fc3VwZXI7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0pKG5hbWUsIHByb3BbbmFtZV0pO1xuXHRcdFx0Ly8gQ2hlY2sgaWYgd2UncmUgb3ZlcndyaXRpbmcgZXhpc3RpbmcgZGVmYXVsdCBvcHRpb25zLlxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgcHJvcFtuYW1lXSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGJhc2VbbmFtZV0gPT09ICdvYmplY3QnICYmIG5hbWUgPT09ICdkZWZhdWx0T3B0aW9ucycpIHtcblx0XHRcdFx0dmFyIG9iajEgPSBiYXNlW25hbWVdO1xuXHRcdFx0XHR2YXIgb2JqMiA9IHByb3BbbmFtZV07XG5cdFx0XHRcdHZhciBvYmozID0ge307XG5cdFx0XHRcdHZhciBrZXk7XG5cdFx0XHRcdGZvciAoa2V5IGluIG9iajEpIHsgLy8ganNoaW50IGZvcmluOmZhbHNlXG5cdFx0XHRcdFx0b2JqM1trZXldID0gb2JqMVtrZXldO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoa2V5IGluIG9iajIpIHsgLy8ganNoaW50IGZvcmluOmZhbHNlXG5cdFx0XHRcdFx0b2JqM1trZXldID0gb2JqMltrZXldO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByb3RvdHlwZVtuYW1lXSA9IG9iajM7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwcm90b3R5cGVbbmFtZV0gPSBwcm9wW25hbWVdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFRoZSBkdW1teSBjbGFzcyBjb25zdHJ1Y3RvclxuXHRcdGZ1bmN0aW9uIEpRQ2xhc3MoKSB7XG5cdFx0XHQvLyBBbGwgY29uc3RydWN0aW9uIGlzIGFjdHVhbGx5IGRvbmUgaW4gdGhlIGluaXQgbWV0aG9kXG5cdFx0XHRpZiAoIWluaXRpYWxpemluZyAmJiB0aGlzLl9pbml0KSB7XG5cdFx0XHRcdHRoaXMuX2luaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBQb3B1bGF0ZSBvdXIgY29uc3RydWN0ZWQgcHJvdG90eXBlIG9iamVjdFxuXHRcdEpRQ2xhc3MucHJvdG90eXBlID0gcHJvdG90eXBlO1xuXG5cdFx0Ly8gRW5mb3JjZSB0aGUgY29uc3RydWN0b3IgdG8gYmUgd2hhdCB3ZSBleHBlY3Rcblx0XHRKUUNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEpRQ2xhc3M7XG5cblx0XHQvLyBBbmQgbWFrZSB0aGlzIGNsYXNzIGV4dGVuZGFibGVcblx0XHRKUUNsYXNzLmV4dGVuZCA9IGV4dGVuZGVyO1xuXG5cdFx0cmV0dXJuIEpRQ2xhc3M7XG5cdH07XG59KSgpO1xuLyogQWJzdHJhY3QgYmFzZSBjbGFzcyBmb3IgY29sbGVjdGlvbiBwbHVnaW5zIHYxLjAuMi5cblx0V3JpdHRlbiBieSBLZWl0aCBXb29kICh3b29kLmtlaXRoe2F0fW9wdHVzbmV0LmNvbS5hdSkgRGVjZW1iZXIgMjAxMy5cblx0TGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIChodHRwOi8va2VpdGgtd29vZC5uYW1lL2xpY2VuY2UuaHRtbCkuICovXG4oZnVuY3Rpb24oJCkgeyAvLyBFbnN1cmUgJCwgZW5jYXBzdWxhdGVcblx0J3VzZSBzdHJpY3QnO1xuXG5cdC8qKiA8cD5BYnN0cmFjdCBiYXNlIGNsYXNzIGZvciBjb2xsZWN0aW9uIHBsdWdpbnMgdjEuMC4yLjwvcD5cblx0XHQ8cD5Xcml0dGVuIGJ5IEtlaXRoIFdvb2QgKHdvb2Qua2VpdGh7YXR9b3B0dXNuZXQuY29tLmF1KSBEZWNlbWJlciAyMDEzLjwvcD5cblx0XHQ8cD5MaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgKGh0dHA6Ly9rZWl0aC13b29kLm5hbWUvbGljZW5jZS5odG1sKS48L3A+XG5cdFx0PHA+VXNlIHtAbGluayAkLkpRUGx1Z2luLmNyZWF0ZVBsdWdpbn0gdG8gY3JlYXRlIG5ldyBwbHVnaW5zIHVzaW5nIHRoaXMgZnJhbWV3b3JrLjwvcD5cblx0XHQ8cD5UaGlzIGJhc2UgY2xhc3MgcHJvdmlkZXMgY29tbW9uIGZ1bmN0aW9uYWxpdHkgc3VjaCBhczo8L3A+XG5cdFx0PHVsPlxuXHRcdFx0PGxpPkNyZWF0ZXMgalF1ZXJ5IGJyaWRnZSAtIGFsbG93aW5nIHlvdSB0byBpbnZva2UgeW91ciBwbHVnaW4gb24gYSBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzLjwvbGk+XG5cdFx0XHQ8bGk+SGFuZGxlcyBpbml0aWFsaXNhdGlvbiBpbmNsdWRpbmcgcmVhZGluZyBzZXR0aW5ncyBmcm9tIG1ldGFkYXRhIC1cblx0XHRcdFx0YW4gaW5zdGFuY2Ugb2JqZWN0IGlzIGF0dGFjaGVkIHRvIHRoZSBhZmZlY3RlZCBlbGVtZW50KHMpIGNvbnRhaW5pbmcgYWxsIHRoZSBuZWNlc3NhcnkgZGF0YS48L2xpPlxuXHRcdFx0PGxpPkhhbmRsZXMgb3B0aW9uIHJldHJpZXZhbCBhbmQgdXBkYXRlIC0gb3B0aW9ucyBjYW4gYmUgc2V0IHRocm91Z2ggZGVmYXVsdCB2YWx1ZXMsXG5cdFx0XHRcdHRocm91Z2ggaW5saW5lIG1ldGFkYXRhLCBvciB0aHJvdWdoIGluc3RhbnRpYXRpb24gc2V0dGluZ3MuPGJyPlxuXHRcdFx0XHRNZXRhZGF0YSBpcyBzcGVjaWZpZWQgYXMgYW4gYXR0cmlidXRlIG9uIHRoZSBlbGVtZW50OlxuXHRcdFx0XHQ8Y29kZT5kYXRhLSZsdDtwbHVnaW5OYW1lPj1cIiZsdDtvcHRpb24gbmFtZT46ICcmbHQ7dmFsdWU+JywgLi4uXCI8L2NvZGU+LlxuXHRcdFx0XHREYXRlcyBzaG91bGQgYmUgc3BlY2lmaWVkIGFzIHN0cmluZ3MgaW4gdGhpcyBmb3JtYXQ6IDxjb2RlPiduZXcgRGF0ZSh5LCBtLTEsIGQpJzwvY29kZT4uPC9saT5cblx0XHRcdDxsaT5IYW5kbGVzIG1ldGhvZCBjYWxsaW5nIC0gaW5uZXIgZnVuY3Rpb25zIHN0YXJ0aW5nIHdpdGggJ18nYXJlIGluYWNjZXNzaWJsZSxcblx0XHRcdFx0d2hlcmVhcyBvdGhlcnMgY2FuIGJlIGNhbGxlZCB2aWEgPGNvZGU+JChzZWxlY3RvcikucGx1Z2luTmFtZSgnZnVuY3Rpb25OYW1lJyk8L2NvZGU+LjwvbGk+XG5cdFx0XHQ8bGk+SGFuZGxlcyBwbHVnaW4gZGVzdHJ1Y3Rpb24gLSByZW1vdmluZyBhbGwgdHJhY2Ugb2YgdGhlIHBsdWdpbi48L2xpPlxuXHRcdDwvdWw+XG5cdFx0QG1vZHVsZSBKUVBsdWdpblxuXHRcdEBhYnN0cmFjdCAqL1xuXHRKUUNsYXNzLmNsYXNzZXMuSlFQbHVnaW4gPSBKUUNsYXNzLmV4dGVuZCh7XG5cblx0XHQvKiogTmFtZSB0byBpZGVudGlmeSB0aGlzIHBsdWdpbi5cblx0XHRcdEBleGFtcGxlIG5hbWU6ICd0YWJzJyAqL1xuXHRcdG5hbWU6ICdwbHVnaW4nLFxuXG5cdFx0LyoqIERlZmF1bHQgb3B0aW9ucyBmb3IgaW5zdGFuY2VzIG9mIHRoaXMgcGx1Z2luIChkZWZhdWx0OiB7fSkuXG5cdFx0XHRAZXhhbXBsZSBkZWZhdWx0T3B0aW9uczoge1xuICBzZWxlY3RlZENsYXNzOiAnc2VsZWN0ZWQnLFxuICB0cmlnZ2VyczogJ2NsaWNrJ1xufSAqL1xuXHRcdGRlZmF1bHRPcHRpb25zOiB7fSxcblxuXHRcdC8qKiBPcHRpb25zIGRlcGVuZGVudCBvbiB0aGUgbG9jYWxlLlxuXHRcdFx0SW5kZXhlZCBieSBsYW5ndWFnZSBhbmQgKG9wdGlvbmFsKSBjb3VudHJ5IGNvZGUsIHdpdGggJycgZGVub3RpbmcgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UgKEVuZ2xpc2gvVVMpLlxuXHRcdFx0Tm9ybWFsbHkgYWRkaXRpb25hbCBsYW5ndWFnZXMgd291bGQgYmUgcHJvdmlkZWQgYXMgc2VwYXJhdGUgZmlsZXMgdG8gYWxsIHRoZW0gdG8gYmUgaW5jbHVkZWQgYXMgbmVlZGVkLlxuXHRcdFx0QGV4YW1wbGUgcmVnaW9uYWxPcHRpb25zOiB7XG4gICcnOiB7XG4gICAgZ3JlZXRpbmc6ICdIaSdcbiAgfVxufSAqL1xuXHRcdHJlZ2lvbmFsT3B0aW9uczoge30sXG5cblx0XHQvKiogV2hldGhlciBvciBub3QgYSBkZWVwIG1lcmdlIHNob3VsZCBiZSBwZXJmb3JtZWQgd2hlbiBhY2N1bXVsYXRpbmcgb3B0aW9ucy5cblx0XHRcdFRoZSBkZWZhdWx0IGlzIDxjb2RlPnRydWU8L2NvZGU+IGJ1dCBjYW4gYmUgb3ZlcnJpZGRlbiBpbiBhIHN1Yi1jbGFzcy4gKi9cblx0XHRkZWVwTWVyZ2U6IHRydWUsXG5cblx0XHQvKiogUmV0cmlldmUgYSBtYXJrZXIgY2xhc3MgZm9yIGFmZmVjdGVkIGVsZW1lbnRzLlxuXHRcdFx0SW4gdGhlIGZvcm1hdDogPGNvZGU+aXMtJmx0O3BsdWdpbk5hbWUmZ3Q7PC9jb2RlPi5cblx0XHRcdEBwcm90ZWN0ZWRcblx0XHRcdEByZXR1cm4ge3N0cmluZ30gVGhlIG1hcmtlciBjbGFzcy4gKi9cblx0XHRfZ2V0TWFya2VyOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiAnaXMtJyArIHRoaXMubmFtZTtcblx0XHR9LFxuXG5cdFx0LyoqIEluaXRpYWxpc2UgdGhlIHBsdWdpbi5cblx0XHRcdENyZWF0ZSB0aGUgalF1ZXJ5IGJyaWRnZSAtIHBsdWdpbiBuYW1lIDxjb2RlPnh5ejwvY29kZT5cblx0XHRcdHByb2R1Y2VzIHNpbmdsZXRvbiA8Y29kZT4kLnh5ejwvY29kZT4gYW5kIGNvbGxlY3Rpb24gZnVuY3Rpb24gPGNvZGU+JC5mbi54eXo8L2NvZGU+LlxuXHRcdFx0QHByb3RlY3RlZCAqL1xuXHRcdF9pbml0OiBmdW5jdGlvbigpIHtcblx0XHRcdC8vIEFwcGx5IGRlZmF1bHQgbG9jYWxpc2F0aW9uc1xuXHRcdFx0JC5leHRlbmQodGhpcy5kZWZhdWx0T3B0aW9ucywgKHRoaXMucmVnaW9uYWxPcHRpb25zICYmIHRoaXMucmVnaW9uYWxPcHRpb25zWycnXSkgfHwge30pO1xuXHRcdFx0Ly8gQ2FtZWwtY2FzZSB0aGUgbmFtZVxuXHRcdFx0dmFyIGpxTmFtZSA9IGNhbWVsQ2FzZSh0aGlzLm5hbWUpO1xuXHRcdFx0Ly8gRXhwb3NlIGpRdWVyeSBzaW5nbGV0b24gbWFuYWdlclxuXHRcdFx0JFtqcU5hbWVdID0gdGhpcztcblx0XHRcdC8vIEV4cG9zZSBqUXVlcnkgY29sbGVjdGlvbiBwbHVnaW5cblx0XHRcdCQuZm5banFOYW1lXSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHRcdFx0dmFyIG90aGVyQXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cdFx0XHRcdHZhciBpbnN0ID0gdGhpcztcblx0XHRcdFx0dmFyIHJldHVyblZhbHVlID0gdGhpcztcblx0XHRcdFx0dGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHRpZiAob3B0aW9uc1swXSA9PT0gJ18nIHx8ICEkW2pxTmFtZV1bb3B0aW9uc10pIHtcblx0XHRcdFx0XHRcdFx0dGhyb3cgJ1Vua25vd24gbWV0aG9kOiAnICsgb3B0aW9ucztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHZhciBtZXRob2RWYWx1ZSA9ICRbanFOYW1lXVtvcHRpb25zXS5hcHBseSgkW2pxTmFtZV0sIFt0aGlzXS5jb25jYXQob3RoZXJBcmdzKSk7XG5cdFx0XHRcdFx0XHRpZiAobWV0aG9kVmFsdWUgIT09IGluc3QgJiYgbWV0aG9kVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm5WYWx1ZSA9IG1ldGhvZFZhbHVlO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCRbanFOYW1lXS5fYXR0YWNoKHRoaXMsIG9wdGlvbnMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiByZXR1cm5WYWx1ZTtcblx0XHRcdH07XG5cdFx0fSxcblxuXHRcdC8qKiBTZXQgZGVmYXVsdCBvcHRpb25zIGZvciBhbGwgc3Vic2VxdWVudCBpbnN0YW5jZXMuXG5cdFx0XHRAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBUaGUgbmV3IGRlZmF1bHQgb3B0aW9ucy5cblx0XHRcdEBleGFtcGxlICQucGx1Z2luTmFtZS5zZXREZWZhdWx0cyh7bmFtZTogdmFsdWUsIC4uLn0pICovXG5cdFx0c2V0RGVmYXVsdHM6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHRcdCQuZXh0ZW5kKHRoaXMuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgfHwge30pO1xuXHRcdH0sXG5cblx0XHQvKiogSW5pdGlhbGlzZSBhbiBlbGVtZW50LiBDYWxsZWQgaW50ZXJuYWxseSBvbmx5LlxuXHRcdFx0QWRkcyBhbiBpbnN0YW5jZSBvYmplY3QgYXMgZGF0YSBuYW1lZCBmb3IgdGhlIHBsdWdpbi5cblx0XHRcdE92ZXJyaWRlIHtAbGlua2NvZGUgbW9kdWxlOkpRUGx1Z2lufl9wb3N0QXR0YWNofF9wb3N0QXR0YWNofSBmb3IgcGx1Z2luLXNwZWNpZmljIHByb2Nlc3NpbmcuXG5cdFx0XHRAcHJpdmF0ZVxuXHRcdFx0QHBhcmFtIHtFbGVtZW50fSBlbGVtIFRoZSBlbGVtZW50IHRvIGVuaGFuY2UuXG5cdFx0XHRAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBPdmVycmlkaW5nIHNldHRpbmdzLiAqL1xuXHRcdF9hdHRhY2g6IGZ1bmN0aW9uKGVsZW0sIG9wdGlvbnMpIHtcblx0XHRcdGVsZW0gPSAkKGVsZW0pO1xuXHRcdFx0aWYgKGVsZW0uaGFzQ2xhc3ModGhpcy5fZ2V0TWFya2VyKCkpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGVsZW0uYWRkQ2xhc3ModGhpcy5fZ2V0TWFya2VyKCkpO1xuXHRcdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHRoaXMuZGVlcE1lcmdlLCB7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucywgdGhpcy5fZ2V0TWV0YWRhdGEoZWxlbSksIG9wdGlvbnMgfHwge30pO1xuXHRcdFx0dmFyIGluc3QgPSAkLmV4dGVuZCh7bmFtZTogdGhpcy5uYW1lLCBlbGVtOiBlbGVtLCBvcHRpb25zOiBvcHRpb25zfSwgdGhpcy5faW5zdFNldHRpbmdzKGVsZW0sIG9wdGlvbnMpKTtcblx0XHRcdGVsZW0uZGF0YSh0aGlzLm5hbWUsIGluc3QpOyAvLyBTYXZlIGluc3RhbmNlIGFnYWluc3QgZWxlbWVudFxuXHRcdFx0dGhpcy5fcG9zdEF0dGFjaChlbGVtLCBpbnN0KTtcblx0XHRcdHRoaXMub3B0aW9uKGVsZW0sIG9wdGlvbnMpO1xuXHRcdH0sXG5cblx0XHQvKiogUmV0cmlldmUgYWRkaXRpb25hbCBpbnN0YW5jZSBzZXR0aW5ncy5cblx0XHRcdE92ZXJyaWRlIHRoaXMgaW4gYSBzdWItY2xhc3MgdG8gcHJvdmlkZSBleHRyYSBzZXR0aW5ncy5cblx0XHRcdFRoZXNlIGFyZSBhZGRlZCBkaXJlY3RseSB0byB0aGUgaW5zdGFuY2Ugb2JqZWN0LlxuXHRcdFx0RGVmYXVsdCBhdHRyaWJ1dGVzIG9mIGFuIGluc3RhbmNlIG9iamVjdCBhcmUgc2hvd24gYXMgcHJvcGVydGllcyBiZWxvdzpcblx0XHRcdEBwcm90ZWN0ZWRcblx0XHRcdEBwYXJhbSB7alF1ZXJ5fSBlbGVtIFRoZSBjdXJyZW50IGpRdWVyeSBlbGVtZW50LlxuXHRcdFx0QHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgVGhlIGluc3RhbmNlIG9wdGlvbnMuXG5cdFx0XHRAcmV0dXJuIHtvYmplY3R9IEFueSBleHRyYSBpbnN0YW5jZSB2YWx1ZXMuXG5cdFx0XHRAcHJvcGVydHkge0VsZW1lbnR9IGVsZW0gVGhlIGVsZW1lbnQgdG8gd2hpY2ggdGhpcyBpbnN0YW5jZSBhcHBsaWVzLlxuXHRcdFx0QHByb3BlcnR5IHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhpcyBwbHVnaW4uXG5cdFx0XHRAcHJvcGVydHkge29iamVjdH0gb3B0aW9ucyBUaGUgYWNjdW11bGF0ZWQgb3B0aW9ucyBmb3IgdGhpcyBpbnN0YW5jZS5cblx0XHRcdEBleGFtcGxlIF9pbnN0U2V0dGluZ3M6IGZ1bmN0aW9uKGVsZW0sIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHtuYXY6IGVsZW0uZmluZChvcHRpb25zLm5hdlNlbGVjdG9yKX07XG59ICovXG5cdFx0X2luc3RTZXR0aW5nczogZnVuY3Rpb24oZWxlbSwgb3B0aW9ucykgeyAvLyBqc2hpbnQgdW51c2VkOmZhbHNlXG5cdFx0XHRyZXR1cm4ge307XG5cdFx0fSxcblxuXHRcdC8qKiBQbHVnaW4gc3BlY2lmaWMgcG9zdCBpbml0aWFsaXNhdGlvbi5cblx0XHRcdE92ZXJyaWRlIHRoaXMgaW4gYSBzdWItY2xhc3MgdG8gcGVyZm9ybSBleHRyYSBhY3Rpdml0aWVzLlxuXHRcdFx0VGhpcyBpcyB3aGVyZSB5b3Ugd291bGQgaW1wbGVtZW50IHlvdXIgcGx1Z2luJ3MgbWFpbiBmdW5jdGlvbmFsaXR5LlxuXHRcdFx0QHByb3RlY3RlZFxuXHRcdFx0QHBhcmFtIHtqUXVlcnl9IGVsZW0gVGhlIGN1cnJlbnQgalF1ZXJ5IGVsZW1lbnQuXG5cdFx0XHRAcGFyYW0ge29iamVjdH0gaW5zdCBUaGUgaW5zdGFuY2Ugc2V0dGluZ3MuXG5cdFx0XHRAZXhhbXBsZSBfcG9zdEF0dGFjaDogZnVuY3Rpb24oZWxlbSwgaW5zdCkge1xuICBlbGVtLm9uKCdjbGljay4nICsgdGhpcy5uYW1lLCBmdW5jdGlvbigpIHtcbiAgICAuLi5cbiAgfSk7XG59ICovXG5cdFx0X3Bvc3RBdHRhY2g6IGZ1bmN0aW9uKGVsZW0sIGluc3QpIHsgLy8ganNoaW50IHVudXNlZDpmYWxzZVxuXHRcdH0sXG5cblx0XHQvKiogUmV0cmlldmUgbWV0YWRhdGEgY29uZmlndXJhdGlvbiBmcm9tIHRoZSBlbGVtZW50LlxuXHRcdFx0TWV0YWRhdGEgaXMgc3BlY2lmaWVkIGFzIGFuIGF0dHJpYnV0ZTpcblx0XHRcdDxjb2RlPmRhdGEtJmx0O3BsdWdpbk5hbWU+PVwiJmx0O29wdGlvbiBuYW1lPjogJyZsdDt2YWx1ZT4nLCAuLi5cIjwvY29kZT4uXG5cdFx0XHREYXRlcyBzaG91bGQgYmUgc3BlY2lmaWVkIGFzIHN0cmluZ3MgaW4gdGhpcyBmb3JtYXQ6IDxjb2RlPiduZXcgRGF0ZSh5LCBtLTEsIGQpJzwvY29kZT4uXG5cdFx0XHRAcHJpdmF0ZVxuXHRcdFx0QHBhcmFtIHtqUXVlcnl9IGVsZW0gVGhlIHNvdXJjZSBlbGVtZW50LlxuXHRcdFx0QHJldHVybiB7b2JqZWN0fSBUaGUgaW5saW5lIGNvbmZpZ3VyYXRpb24gb3Ige30uICovXG5cdFx0X2dldE1ldGFkYXRhOiBmdW5jdGlvbihlbGVtKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgZGF0YSA9IGVsZW0uZGF0YSh0aGlzLm5hbWUudG9Mb3dlckNhc2UoKSkgfHwgJyc7XG5cdFx0XHRcdGRhdGEgPSBkYXRhLnJlcGxhY2UoLyhcXFxcPyknL2csIGZ1bmN0aW9uKGUsIHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gdCA/ICdcXCcnIDogJ1wiJztcblx0XHRcdFx0fSkucmVwbGFjZSgvKFthLXpBLVowLTldKyk6L2csIGZ1bmN0aW9uKG1hdGNoLCBncm91cCwgaSkge1xuXHRcdFx0XHRcdHZhciBjb3VudCA9IGRhdGEuc3Vic3RyaW5nKDAsIGkpLm1hdGNoKC9cIi9nKTsgLy8gSGFuZGxlIGVtYmVkZGVkICc6J1xuXHRcdFx0XHRcdHJldHVybiAoIWNvdW50IHx8IGNvdW50Lmxlbmd0aCAlIDIgPT09IDAgPyAnXCInICsgZ3JvdXAgKyAnXCI6JyA6IGdyb3VwICsgJzonKTtcblx0XHRcdFx0fSkucmVwbGFjZSgvXFxcXDovZywgJzonKTtcblx0XHRcdFx0ZGF0YSA9IEpTT04ucGFyc2UoJ3snICsgZGF0YSArICd9Jyk7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG5cdFx0XHRcdFx0aWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRcdFx0dmFyIHZhbHVlID0gZGF0YVtrZXldO1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubWF0Y2goL15uZXcgRGF0ZVxcKChbLTAtOSxcXHNdKilcXCkkLykpIHsgLy8gQ29udmVydCBkYXRlc1xuXHRcdFx0XHRcdFx0XHRkYXRhW2tleV0gPSBldmFsKHZhbHVlKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKGUpIHtcblx0XHRcdFx0cmV0dXJuIHt9O1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKiogUmV0cmlldmUgdGhlIGluc3RhbmNlIGRhdGEgZm9yIGVsZW1lbnQuXG5cdFx0XHRAcHJvdGVjdGVkXG5cdFx0XHRAcGFyYW0ge0VsZW1lbnR9IGVsZW0gVGhlIHNvdXJjZSBlbGVtZW50LlxuXHRcdFx0QHJldHVybiB7b2JqZWN0fSBUaGUgaW5zdGFuY2UgZGF0YSBvciA8Y29kZT57fTwvY29kZT4gaWYgbm9uZS4gKi9cblx0XHRfZ2V0SW5zdDogZnVuY3Rpb24oZWxlbSkge1xuXHRcdFx0cmV0dXJuICQoZWxlbSkuZGF0YSh0aGlzLm5hbWUpIHx8IHt9O1xuXHRcdH0sXG5cblx0XHQvKiogUmV0cmlldmUgb3IgcmVjb25maWd1cmUgdGhlIHNldHRpbmdzIGZvciBhIHBsdWdpbi5cblx0XHRcdElmIG5ldyBzZXR0aW5ncyBhcmUgcHJvdmlkZWQgdGhleSBhcmUgYXBwbGllZCB0byB0aGUgaW5zdGFuY2Ugb3B0aW9ucy5cblx0XHRcdElmIGFuIG9wdGlvbiBuYW1lIG9ubHkgaXMgcHJvdmlkZWQgdGhlIHZhbHVlIG9mIHRoYXQgb3B0aW9uIGlzIHJldHVybmVkLlxuXHRcdFx0SWYgbm8gbmFtZSBvciB2YWx1ZSBpcyBwcm92aWRlZCwgYWxsIG9wdGlvbnMgYXJlIHJldHVybmVkLlxuXHRcdFx0T3ZlcnJpZGUge0BsaW5rY29kZSBtb2R1bGU6SlFQbHVnaW5+X29wdGlvbnNDaGFuZ2VkfF9vcHRpb25zQ2hhbmdlZH1cblx0XHRcdGZvciBwbHVnaW4tc3BlY2lmaWMgcHJvY2Vzc2luZyB3aGVuIG9wdGlvbiB2YWx1ZXMgY2hhbmdlLlxuXHRcdFx0QHBhcmFtIHtFbGVtZW50fSBlbGVtIFRoZSBzb3VyY2UgZWxlbWVudC5cblx0XHRcdEBwYXJhbSB7b2JqZWN0fHN0cmluZ30gW25hbWVdIFRoZSBjb2xsZWN0aW9uIG9mIG5ldyBvcHRpb24gdmFsdWVzIG9yIHRoZSBuYW1lIG9mIGEgc2luZ2xlIG9wdGlvbi5cblx0XHRcdEBwYXJhbSB7YW55fSBbdmFsdWVdIFRoZSB2YWx1ZSBmb3IgYSBzaW5nbGUgbmFtZWQgb3B0aW9uLlxuXHRcdFx0QHJldHVybiB7YW55fG9iamVjdH0gSWYgcmV0cmlldmluZyBhIHNpbmdsZSB2YWx1ZSBvciBhbGwgb3B0aW9ucy5cblx0XHRcdEBleGFtcGxlICQoc2VsZWN0b3IpLnBsdWdpbignb3B0aW9uJywgJ25hbWUnLCB2YWx1ZSkgLy8gU2V0IG9uZSBvcHRpb25cbiQoc2VsZWN0b3IpLnBsdWdpbignb3B0aW9uJywge25hbWU6IHZhbHVlLCAuLi59KSAvLyBTZXQgbXVsdGlwbGUgb3B0aW9uc1xudmFyIHZhbHVlID0gJChzZWxlY3RvcikucGx1Z2luKCdvcHRpb24nLCAnbmFtZScpIC8vIEdldCBvbmUgb3B0aW9uXG52YXIgb3B0aW9ucyA9ICQoc2VsZWN0b3IpLnBsdWdpbignb3B0aW9uJykgLy8gR2V0IGFsbCBvcHRpb25zICovXG5cdFx0b3B0aW9uOiBmdW5jdGlvbihlbGVtLCBuYW1lLCB2YWx1ZSkge1xuXHRcdFx0ZWxlbSA9ICQoZWxlbSk7XG5cdFx0XHR2YXIgaW5zdCA9IGVsZW0uZGF0YSh0aGlzLm5hbWUpO1xuXHRcdFx0dmFyIG9wdGlvbnMgPSBuYW1lIHx8IHt9O1xuXHRcdFx0aWYgICghbmFtZSB8fCAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpKSB7XG5cdFx0XHRcdG9wdGlvbnMgPSAoaW5zdCB8fCB7fSkub3B0aW9ucztcblx0XHRcdFx0cmV0dXJuIChvcHRpb25zICYmIG5hbWUgPyBvcHRpb25zW25hbWVdIDogb3B0aW9ucyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWVsZW0uaGFzQ2xhc3ModGhpcy5fZ2V0TWFya2VyKCkpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdFx0XHRvcHRpb25zW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9vcHRpb25zQ2hhbmdlZChlbGVtLCBpbnN0LCBvcHRpb25zKTtcblx0XHRcdCQuZXh0ZW5kKGluc3Qub3B0aW9ucywgb3B0aW9ucyk7XG5cdFx0fSxcblxuXHRcdC8qKiBQbHVnaW4gc3BlY2lmaWMgb3B0aW9ucyBwcm9jZXNzaW5nLlxuXHRcdFx0T2xkIHZhbHVlIGF2YWlsYWJsZSBpbiA8Y29kZT5pbnN0Lm9wdGlvbnNbbmFtZV08L2NvZGU+LCBuZXcgdmFsdWUgaW4gPGNvZGU+b3B0aW9uc1tuYW1lXTwvY29kZT4uXG5cdFx0XHRPdmVycmlkZSB0aGlzIGluIGEgc3ViLWNsYXNzIHRvIHBlcmZvcm0gZXh0cmEgYWN0aXZpdGllcy5cblx0XHRcdEBwcm90ZWN0ZWRcblx0XHRcdEBwYXJhbSB7alF1ZXJ5fSBlbGVtIFRoZSBjdXJyZW50IGpRdWVyeSBlbGVtZW50LlxuXHRcdFx0QHBhcmFtIHtvYmplY3R9IGluc3QgVGhlIGluc3RhbmNlIHNldHRpbmdzLlxuXHRcdFx0QHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgVGhlIG5ldyBvcHRpb25zLlxuXHRcdFx0QGV4YW1wbGUgX29wdGlvbnNDaGFuZ2VkOiBmdW5jdGlvbihlbGVtLCBpbnN0LCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLm5hbWUgIT0gaW5zdC5vcHRpb25zLm5hbWUpIHtcbiAgICBlbGVtLnJlbW92ZUNsYXNzKGluc3Qub3B0aW9ucy5uYW1lKS5hZGRDbGFzcyhvcHRpb25zLm5hbWUpO1xuICB9XG59ICovXG5cdFx0X29wdGlvbnNDaGFuZ2VkOiBmdW5jdGlvbihlbGVtLCBpbnN0LCBvcHRpb25zKSB7IC8vIGpzaGludCB1bnVzZWQ6ZmFsc2Vcblx0XHR9LFxuXG5cdFx0LyoqIFJlbW92ZSBhbGwgdHJhY2Ugb2YgdGhlIHBsdWdpbi5cblx0XHRcdE92ZXJyaWRlIHtAbGlua2NvZGUgbW9kdWxlOkpRUGx1Z2lufl9wcmVEZXN0cm95fF9wcmVEZXN0cm95fSBmb3IgcGx1Z2luLXNwZWNpZmljIHByb2Nlc3NpbmcuXG5cdFx0XHRAcGFyYW0ge0VsZW1lbnR9IGVsZW0gVGhlIHNvdXJjZSBlbGVtZW50LlxuXHRcdFx0QGV4YW1wbGUgJChzZWxlY3RvcikucGx1Z2luKCdkZXN0cm95JykgKi9cblx0XHRkZXN0cm95OiBmdW5jdGlvbihlbGVtKSB7XG5cdFx0XHRlbGVtID0gJChlbGVtKTtcblx0XHRcdGlmICghZWxlbS5oYXNDbGFzcyh0aGlzLl9nZXRNYXJrZXIoKSkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fcHJlRGVzdHJveShlbGVtLCB0aGlzLl9nZXRJbnN0KGVsZW0pKTtcblx0XHRcdGVsZW0ucmVtb3ZlRGF0YSh0aGlzLm5hbWUpLnJlbW92ZUNsYXNzKHRoaXMuX2dldE1hcmtlcigpKTtcblx0XHR9LFxuXG5cdFx0LyoqIFBsdWdpbiBzcGVjaWZpYyBwcmUgZGVzdHJ1Y3Rpb24uXG5cdFx0XHRJdCBpcyBpbnZva2VkIGFzIHBhcnQgb2YgdGhlIHtAbGlua2NvZGUgbW9kdWxlOkpRUGx1Z2lufmRlc3Ryb3l8ZGVzdHJveX0gcHJvY2Vzc2luZy5cblx0XHRcdE92ZXJyaWRlIHRoaXMgaW4gYSBzdWItY2xhc3MgdG8gcGVyZm9ybSBleHRyYSBhY3Rpdml0aWVzIGFuZCB1bmRvIGV2ZXJ5dGhpbmcgdGhhdCB3YXNcblx0XHRcdGRvbmUgaW4gdGhlIHtAbGlua2NvZGUgbW9kdWxlOkpRUGx1Z2lufl9wb3N0QXR0YWNofF9wb3N0QXR0YWNofSBvclxuXHRcdFx0e0BsaW5rY29kZSBtb2R1bGU6SlFQbHVnaW5+X29wdGlvbnNDaGFuZ2VkfF9vcHRpb25zQ2hhbmdlZH0gZnVuY3Rpb25zLlxuXHRcdFx0QHByb3RlY3RlZFxuXHRcdFx0QHBhcmFtIHtqUXVlcnl9IGVsZW0gVGhlIGN1cnJlbnQgalF1ZXJ5IGVsZW1lbnQuXG5cdFx0XHRAcGFyYW0ge29iamVjdH0gaW5zdCBUaGUgaW5zdGFuY2Ugc2V0dGluZ3MuXG5cdFx0XHRAZXhhbXBsZSBfcHJlRGVzdHJveTogZnVuY3Rpb24oZWxlbSwgaW5zdCkge1xuICBlbGVtLm9mZignLicgKyB0aGlzLm5hbWUpO1xufSAqL1xuXHRcdF9wcmVEZXN0cm95OiBmdW5jdGlvbihlbGVtLCBpbnN0KSB7IC8vIGpzaGludCB1bnVzZWQ6ZmFsc2Vcblx0XHR9XG5cdH0pO1xuXG5cdC8qKiBDb252ZXJ0IG5hbWVzIGZyb20gaHlwaGVuYXRlZCB0byBjYW1lbC1jYXNlLlxuXHRcdEBwcml2YXRlXG5cdFx0QHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBvcmlnaW5hbCBoeXBoZW5hdGVkIG5hbWUuXG5cdFx0QHJldHVybiB7c3RyaW5nfSBUaGUgY2FtZWwtY2FzZSB2ZXJzaW9uLiAqL1xuXHRmdW5jdGlvbiBjYW1lbENhc2UobmFtZSkge1xuXHRcdHJldHVybiBuYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uKG1hdGNoLCBncm91cCkge1xuXHRcdFx0cmV0dXJuIGdyb3VwLnRvVXBwZXJDYXNlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKiogRXhwb3NlIHRoZSBwbHVnaW4gYmFzZS5cblx0XHRAbmFtZXNwYWNlICQuSlFQbHVnaW4gKi9cblx0JC5KUVBsdWdpbiA9IHtcblxuXHRcdC8qKiBDcmVhdGUgYSBuZXcgY29sbGVjdGlvbiBwbHVnaW4uXG5cdFx0XHRAbWVtYmVyb2YgJC5KUVBsdWdpblxuXHRcdFx0QHBhcmFtIHtzdHJpbmd9IFtzdXBlckNsYXNzPSdKUVBsdWdpbiddIFRoZSBuYW1lIG9mIHRoZSBwYXJlbnQgY2xhc3MgdG8gaW5oZXJpdCBmcm9tLlxuXHRcdFx0QHBhcmFtIHtvYmplY3R9IG92ZXJyaWRlcyBUaGUgcHJvcGVydHkvZnVuY3Rpb24gb3ZlcnJpZGVzIGZvciB0aGUgbmV3IGNsYXNzLlxuXHRcdFx0XHRTZWUge0BsaW5rIG1vZHVsZTpKUVBsdWdpbnxKUVBsdWdpbn0gZm9yIHRoZSBiYXNlIGZ1bmN0aW9uYWxpdHkuXG5cdFx0XHRAZXhhbXBsZSAkLkpRUGx1Z2luLmNyZWF0ZVBsdWdpbih7IC8vIERlZmluZSB0aGUgcGx1Z2luXG4gIG5hbWU6ICd0YWJzJyxcbiAgZGVmYXVsdE9wdGlvbnM6IHtzZWxlY3RlZENsYXNzOiAnc2VsZWN0ZWQnfSxcbiAgX2luaXRTZXR0aW5nczogZnVuY3Rpb24oZWxlbSwgb3B0aW9ucykgeyByZXR1cm4gey4uLn07IH0sXG4gIF9wb3N0QXR0YWNoOiBmdW5jdGlvbihlbGVtLCBpbnN0KSB7IC4uLiB9XG59KTtcbiQoJ3NlbGVjdG9yJykudGFicygpOyAvLyBBbmQgaW5zdGFudGlhdGUgaXQgKi9cblx0XHRjcmVhdGVQbHVnaW46IGZ1bmN0aW9uKHN1cGVyQ2xhc3MsIG92ZXJyaWRlcykge1xuXHRcdFx0aWYgKHR5cGVvZiBzdXBlckNsYXNzID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRvdmVycmlkZXMgPSBzdXBlckNsYXNzO1xuXHRcdFx0XHRzdXBlckNsYXNzID0gJ0pRUGx1Z2luJztcblx0XHRcdH1cblx0XHRcdHN1cGVyQ2xhc3MgPSBjYW1lbENhc2Uoc3VwZXJDbGFzcyk7XG5cdFx0XHR2YXIgY2xhc3NOYW1lID0gY2FtZWxDYXNlKG92ZXJyaWRlcy5uYW1lKTtcblx0XHRcdEpRQ2xhc3MuY2xhc3Nlc1tjbGFzc05hbWVdID0gSlFDbGFzcy5jbGFzc2VzW3N1cGVyQ2xhc3NdLmV4dGVuZChvdmVycmlkZXMpO1xuXHRcdFx0bmV3IEpRQ2xhc3MuY2xhc3Nlc1tjbGFzc05hbWVdKCk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuXHRcdH1cblx0fTtcblxufSkoalF1ZXJ5KTtcblxuKGZ1bmN0aW9uKCQpIHsgLy8gaGlkZSB0aGUgbmFtZXNwYWNlXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgcGx1Z2luTmFtZSA9ICdrZXlwYWQnO1xuXG5cdC8qKiBDcmVhdGUgdGhlIGtleXBhZCBwbHVnaW4uXG5cdFx0PHA+U2V0cyBhbiBpbnB1dCBmaWVsZCB0byBwb3B1cCBhIGtleXBhZCBmb3Iga2V5c3Ryb2tlIGVudHJ5LFxuXHRcdFx0b3IgY3JlYXRlcyBhbiBpbmxpbmUga2V5cGFkIGluIGEgPGNvZGU+ZGl2PC9jb2RlPiBvciA8Y29kZT5zcGFuPC9jb2RlPi48L3A+XG5cdFx0PHA+RXhwZWN0cyBIVE1MIGxpa2U6PC9wPlxuXHRcdDxwcmU+Jmx0O2lucHV0IHR5cGU9XCJ0ZXh0XCImZ3Q7IG9yXG4mbHQ7ZGl2Jmd0OyZsdDsvZGl2Jmd0OzwvcHJlPlxuXHRcdDxwPlByb3ZpZGUgaW5saW5lIGNvbmZpZ3VyYXRpb24gbGlrZTo8L3A+XG5cdFx0PHByZT4mbHQ7aW5wdXQgdHlwZT1cInRleHRcIiBkYXRhLWtleXBhZD1cIm5hbWU6ICd2YWx1ZSdcIi8mZ3Q7PC9wcmU+XG5cdFx0PHA+U2VlIHRoZSB7QGxpbmsgaHR0cDovL2tlaXRoLXdvb2QubmFtZS9rZXlwYWRSZWYuaHRtbHxmdWxsIGRvY3VtZW50YXRpb259LjwvcD5cblx0XHRAbW9kdWxlIEtleXBhZFxuXHRcdEBhdWdtZW50cyBKUVBsdWdpblxuXHRcdEBleGFtcGxlICQoc2VsZWN0b3IpLmtleXBhZCgpICovXG5cdCQuSlFQbHVnaW4uY3JlYXRlUGx1Z2luKHtcblxuXHRcdC8qKiBUaGUgbmFtZSBvZiB0aGUgcGx1Z2luLlxuXHRcdFx0QGRlZmF1bHQgJ2tleXBhZCcgKi9cblx0XHRuYW1lOiBwbHVnaW5OYW1lLFxuXG5cdFx0LyoqIERvbid0IGRlZXAgbWVyZ2Ugb3B0aW9ucyAtIGNhdXNlcyBwcm9ibGVtcyB3aXRoIGFycmF5cy5cblx0XHRcdEBkZWZhdWx0IGZhbHNlICovXG5cdFx0ZGVlcE1lcmdlOiBmYWxzZSxcblxuXHRcdC8qKiBLZXlwYWQgYmVmb3JlIHNob3cgY2FsbGJhY2suXG5cdFx0XHRUcmlnZ2VyZWQgYmVmb3JlIHRoZSBrZXlwYWQgaXMgc2hvd24uXG5cdFx0XHRAZ2xvYmFsXG5cdFx0XHRAY2FsbGJhY2sgQmVmb3JlU2hvd0NhbGxiYWNrXG5cdFx0XHRAcGFyYW0ge2pRdWVyeX0gZGl2IFRoZSBkaXYgdG8gYmUgc2hvd24uXG5cdFx0XHRAcGFyYW0ge29iamVjdH0gaW5zdCBUaGUgY3VycmVudCBpbnN0YW5jZSBzZXR0aW5ncy4gKi9cblxuXHRcdC8qKiBLZXlwYWQgb24ga2V5cHJlc3MgY2FsbGJhY2suXG5cdFx0XHRUcmlnZ2VyZWQgd2hlbiBhIGtleSBvbiB0aGUga2V5cGFkIGlzIHByZXNzZWQuXG5cdFx0XHRAZ2xvYmFsXG5cdFx0XHRAY2FsbGJhY2sgS2V5cHJlc3NDYWxsYmFja1xuXHRcdFx0QHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IGp1c3QgcHJlc3NlZC5cblx0XHRcdEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgZnVsbCB2YWx1ZSBlbnRlcmVkIHNvIGZhci5cblx0XHRcdEBwYXJhbSB7b2JqZWN0fSBpbnN0IFRoZSBjdXJyZW50IGluc3RhbmNlIHNldHRpbmdzLiAqL1xuXG5cdFx0LyoqIEtleXBhZCBvbiBjbG9zZSBjYWxsYmFjay5cblx0XHRcdFRyaWdnZXJlZCB3aGVuIHRoZSBrZXlwYWQgaXMgY2xvc2VkLlxuXHRcdFx0QGdsb2JhbFxuXHRcdFx0QGNhbGxiYWNrIENsb3NlQ2FsbGJhY2tcblx0XHRcdEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgZnVsbCB2YWx1ZSBlbnRlcmVkIHNvIGZhci5cblx0XHRcdEBwYXJhbSB7b2JqZWN0fSBpbnN0IFRoZSBjdXJyZW50IGluc3RhbmNlIHNldHRpbmdzLiAqL1xuXG5cdFx0LyoqIEtleXBhZCBpcyBhbHBoYWJldGljIGNhbGxiYWNrLlxuXHRcdFx0VHJpZ2dlcmVkIHdoZW4gYW4gYWxwaGFiZXRpYyBrZXkgbmVlZHMgdG8gYmUgaWRlbnRpZmllZC5cblx0XHRcdEBnbG9iYWxcblx0XHRcdEBjYWxsYmFjayBJc0FscGhhYmV0aWNDYWxsYmFja1xuXHRcdFx0QHBhcmFtIHtzdHJpbmd9IGNoIFRoZSBrZXkgdG8gY2hlY2suXG5cdFx0XHRAcmV0dXJuIHtib29sZWFufSA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGlzIGtleSBpcyBhbHBoYWJldGljLCA8Y29kZT5mYWxzZTwvY29kZT4gaWYgbm90LlxuXHRcdFx0QGV4YW1wbGUgaXNBbHBoYWJldGljOiBmdW5jdGlvbihjaCkge1xuICByZXR1cm4gKGNoID49ICdBJyAmJiBjaCA8PSAnWicpIHx8IChjaCA+PSAnYScgJiYgY2ggPD0gJ3onKTtcbn0gKi9cblxuXHRcdC8qKiBLZXlwYWQgaXMgbnVtZXJpYyBjYWxsYmFjay5cblx0XHRcdFRyaWdnZXJlZCB3aGVuIGFuIG51bWVyaWMga2V5IG5lZWRzIHRvIGJlIGlkZW50aWZpZWQuXG5cdFx0XHRAZ2xvYmFsXG5cdFx0XHRAY2FsbGJhY2sgSXNOdW1lcmljQ2FsbGJhY2tcblx0XHRcdEBwYXJhbSB7c3RyaW5nfSBjaCBUaGUga2V5IHRvIGNoZWNrLlxuXHRcdFx0QHJldHVybiB7Ym9vbGVhbn0gPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhpcyBrZXkgaXMgbnVtZXJpYywgPGNvZGU+ZmFsc2U8L2NvZGU+IGlmIG5vdC5cblx0XHRcdEBleGFtcGxlIGlzTnVtZXJpYzogZnVuY3Rpb24oY2gpIHtcbiAgcmV0dXJuIChjaCA+PSAnMCcgJiYgY2ggPD0gJzknKTtcbn0gKi9cblxuXHRcdC8qKiBLZXlwYWQgdG8gdXBwZXIgY2FsbGJhY2suXG5cdFx0XHRUcmlnZ2VyZWQgdG8gY29udmVydCBrZXlzIHRvIHVwcGVyIGNhc2UuXG5cdFx0XHRAZ2xvYmFsXG5cdFx0XHRAY2FsbGJhY2sgVG9VcHBlckNhbGxiYWNrXG5cdFx0XHRAcGFyYW0ge3N0cmluZ30gY2ggVGhlIGtleSB0byBjb252ZXJ0LlxuXHRcdFx0QHJldHVybiB7c3RyaW5nfSBUaGUgdXBwZXIgY2FzZSB2ZXJzaW9uIG9mIHRoaXMga2V5LlxuXHRcdFx0QGV4YW1wbGUgdG9VcHBlcjogZnVuY3Rpb24oY2gpIHtcbiAgcmV0dXJuIGNoLnRvVXBwZXJDYXNlKCk7XG59ICovXG5cblx0XHQvKiogS2V5IGFjdGlvbiBjYWxsYmFjay5cblx0XHRcdFRyaWdnZXJlZCB3aGVuIGEga2V5IGlzIHByZXNzZWQuXG5cdFx0XHRAZ2xvYmFsXG5cdFx0XHRAY2FsbGJhY2sgS2V5QWN0aW9uQ2FsbGJhY2tcblx0XHRcdEBzZWUgYWRkS2V5RGVmXG5cdFx0XHRAcGFyYW0ge29iamVjdH0gaW5zdCBUaGUgY3VycmVudCBpbnN0YW5jZSBzZXR0aW5ncy5cblx0XHRcdEBleGFtcGxlICQua2V5cGFkLmFkZEtleURlZignQ0xFQVInLCAnY2xlYXInLCBmdW5jdGlvbihpbnN0KSB7IHBsdWdpbi5fY2xlYXJWYWx1ZShpbnN0KTsgfSk7ICovXG5cblx0XHQvKiogRGVmYXVsdCBzZXR0aW5ncyBmb3IgdGhlIHBsdWdpbi5cblx0XHRcdEBwcm9wZXJ0eSB7c3RyaW5nfSBbc2hvd09uPSdmb2N1cyddICdmb2N1cycgZm9yIHBvcHVwIG9uIGZvY3VzLCAnYnV0dG9uJyBmb3IgdHJpZ2dlciBidXR0b24sXG5cdFx0XHRcdG9yICdib3RoJyBmb3IgZWl0aGVyLlxuXHRcdFx0QHByb3BlcnR5IHtzdHJpbmd9IFtidXR0b25JbWFnZT0nJ10gVVJMIGZvciB0cmlnZ2VyIGJ1dHRvbiBpbWFnZS5cblx0XHRcdEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2J1dHRvbkltYWdlT25seT1mYWxzZV0gPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIGltYWdlIGFwcGVhcnMgYWxvbmUsXG5cdFx0XHRcdDxjb2RlPmZhbHNlPC9jb2RlPiBpZiBpdCBhcHBlYXJzIG9uIGEgYnV0dG9uLlxuXHRcdFx0QHByb3BlcnR5IHtzdHJpbmd9IFtzaG93QW5pbT0nc2hvdyddIE5hbWUgb2YgalF1ZXJ5IGFuaW1hdGlvbiBmb3IgcG9wdXAuXG5cdFx0XHRAcHJvcGVydHkge29iamVjdH0gW3Nob3dPcHRpb25zPW51bGxdIE9wdGlvbnMgZm9yIGVuaGFuY2VkIGFuaW1hdGlvbnMuXG5cdFx0XHRAcHJvcGVydHkge3N0cmluZ3xudW1iZXJ9IFtkdXJhdGlvbj0nbm9ybWFsJ10gRHVyYXRpb24gb2YgZGlzcGxheS9jbG9zdXJlIGFzIGEgbmFtZWQgc3BlZWQgb3IgaW4gbWlsbGlzZWNvbmRzLlxuXHRcdFx0QHByb3BlcnR5IHtzdHJpbmd9IFthcHBlbmRUZXh0PScnXSBEaXNwbGF5IHRleHQgZm9sbG93aW5nIHRoZSB0ZXh0IGZpZWxkLCBlLmcuLCBzaG93aW5nIHRoZSBmb3JtYXQuXG5cdFx0XHRAcHJvcGVydHkge2Jvb2xlYW59IFt1c2VUaGVtZVJvbGxlcj1mYWxzZV0gPGNvZGU+dHJ1ZTwvY29kZT4gdG8gYWRkIFRoZW1lUm9sbGVyIGNsYXNzZXMuXG5cdFx0XHRAcHJvcGVydHkge3N0cmluZ30gW2tleXBhZENsYXNzPScnXSBBZGRpdGlvbmFsIENTUyBjbGFzcyBmb3IgdGhlIGtleXBhZCBmb3IgYW4gaW5zdGFuY2UuXG5cdFx0XHRAcHJvcGVydHkge3N0cmluZ30gW3Byb21wdD0nJ10gRGlzcGxheSB0ZXh0IGF0IHRoZSB0b3Agb2YgdGhlIGtleXBhZC5cblx0XHRcdEBwcm9wZXJ0eSB7c3RyaW5nW119IFtsYXlvdXQ9e0BsaW5rY29kZSBtb2R1bGU6S2V5cGFkLm51bWVyaWNMYXlvdXR8dGhpcy5udW1lcmljTGF5b3V0fV1cblx0XHRcdFx0TGF5b3V0IG9mIGtleXMuIE9uZSBzdHJpbmcgcGVyIHJvdy5cblx0XHRcdEBwcm9wZXJ0eSB7c3RyaW5nfSBbc2VwYXJhdG9yPScnXSBTZXBhcmF0b3IgY2hhcmFjdGVyIGJldHdlZW4ga2V5cyBpbiB0aGUgPGNvZGU+bGF5b3V0PC9jb2RlPixcblx0XHRcdFx0ZW1wdHkgc3RyaW5nIGZvciBvbmUgY2hhcmFjdGVyIGtleXMuXG5cdFx0XHRAcHJvcGVydHkge3N0cmluZ3xqUXVlcnl8RWxlbWVudH0gW3RhcmdldD1udWxsXSBJbnB1dCB0YXJnZXQgZm9yIGFuIGlubGluZSBrZXlwYWQuXG5cdFx0XHRAcHJvcGVydHkge2Jvb2xlYW59IFtrZXlwYWRPbmx5PXRydWVdIDxjb2RlPnRydWU8L2NvZGU+IGZvciBlbnRyeSBvbmx5IHZpYSB0aGUga2V5cGFkLFxuXHRcdFx0XHQ8Y29kZT5mYWxzZTwvY29kZT4gZm9yIHJlYWwga2V5Ym9hcmQgdG9vLlxuXHRcdFx0QHByb3BlcnR5IHtib29sZWFufSBbcmFuZG9taXNlQWxwaGFiZXRpYz1mYWxzZV0gPGNvZGU+dHJ1ZTwvY29kZT4gdG8gcmFuZG9taXNlIHRoZSBhbHBoYWJldGljIGtleSBwb3NpdGlvbnMsXG5cdFx0XHRcdDxjb2RlPmZhbHNlPC9jb2RlPiB0byBrZWVwIHRoZW0gaW4gb3JkZXIuXG5cdFx0XHRAcHJvcGVydHkge2Jvb2xlYW59IFtyYW5kb21pc2VOdW1lcmljPWZhbHNlXSA8Y29kZT50cnVlPC9jb2RlPiB0byByYW5kb21pc2UgdGhlIG51bWVyaWMga2V5IHBvc2l0aW9ucyxcblx0XHRcdFx0PGNvZGU+ZmFsc2U8L2NvZGU+IHRvIGtlZXAgcmhlbSBpbiBvcmRlci5cblx0XHRcdEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3JhbmRvbWlzZU90aGVyPWZhbHNlXSA8Y29kZT50cnVlPC9jb2RlPiB0byByYW5kb21pc2UgdGhlIG90aGVyIGtleSBwb3NpdGlvbnMsXG5cdFx0XHRcdDxjb2RlPmZhbHNlPC9jb2RlPiB0byBrZWVwIHRoZW0gaW4gb3JkZXIuXG5cdFx0XHRAcHJvcGVydHkge2Jvb2xlYW59IFtyYW5kb21pc2VBbGw9ZmFsc2VdIDxjb2RlPnRydWU8L2NvZGU+IHRvIHJhbmRvbWlzZSBhbGwga2V5IHBvc2l0aW9ucyxcblx0XHRcdFx0PGNvZGU+ZmFsc2U8L2NvZGU+IHRvIGtlZXAgdGhlbSBpbiBvcmRlci5cblx0XHRcdEBwcm9wZXJ0eSB7QmVmb3JlU2hvd0NhbGxiYWNrfSBbYmVmb3JlU2hvdz1udWxsXSBDYWxsYmFjayBiZWZvcmUgc2hvd2luZyB0aGUga2V5cGFkLlxuXHRcdFx0QHByb3BlcnR5IHtLZXlwcmVzc0NhbGxiYWNrfSBbb25LZXlwcmVzcz1udWxsXSBDYWxsYmFjayB3aGVuIGEga2V5IGlzIHNlbGVjdGVkLlxuXHRcdFx0QHByb3BlcnR5IHtDbG9zZUNhbGxiYWNrfSBbb25DbG9zZT1udWxsXSBDYWxsYmFjayB3aGVuIHRoZSBwYW5lbCBpcyBjbG9zZWQuICovXG5cdFx0ZGVmYXVsdE9wdGlvbnM6IHtcblx0XHRcdHNob3dPbjogJ2ZvY3VzJyxcblx0XHRcdGJ1dHRvbkltYWdlOiAnJyxcblx0XHRcdGJ1dHRvbkltYWdlT25seTogZmFsc2UsXG5cdFx0XHRzaG93QW5pbTogJ3Nob3cnLFxuXHRcdFx0c2hvd09wdGlvbnM6IG51bGwsXG5cdFx0XHRkdXJhdGlvbjogJ25vcm1hbCcsXG5cdFx0XHRhcHBlbmRUZXh0OiAnJyxcblx0XHRcdHVzZVRoZW1lUm9sbGVyOiBmYWxzZSxcblx0XHRcdGtleXBhZENsYXNzOiAnJyxcblx0XHRcdHByb21wdDogJycsXG5cdFx0XHRsYXlvdXQ6IFtdLCAvLyBTZXQgYXQgdGhlIGVuZFxuXHRcdFx0c2VwYXJhdG9yOiAnJyxcblx0XHRcdHRhcmdldDogbnVsbCxcblx0XHRcdGtleXBhZE9ubHk6IHRydWUsXG5cdFx0XHRyYW5kb21pc2VBbHBoYWJldGljOiBmYWxzZSxcblx0XHRcdHJhbmRvbWlzZU51bWVyaWM6IGZhbHNlLFxuXHRcdFx0cmFuZG9taXNlT3RoZXI6IGZhbHNlLFxuXHRcdFx0cmFuZG9taXNlQWxsOiBmYWxzZSxcblx0XHRcdGJlZm9yZVNob3c6IG51bGwsXG5cdFx0XHRvbktleXByZXNzOiBudWxsLFxuXHRcdFx0b25DbG9zZTogbnVsbFxuXHRcdH0sXG5cblx0XHQvKiogTG9jYWxpc2F0aW9ucyBmb3IgdGhlIHBsdWdpbi5cblx0XHRcdEVudHJpZXMgYXJlIG9iamVjdHMgaW5kZXhlZCBieSB0aGUgbGFuZ3VhZ2UgY29kZSAoJycgYmVpbmcgdGhlIGRlZmF1bHQgVVMvRW5nbGlzaCkuXG5cdFx0XHRFYWNoIG9iamVjdCBoYXMgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzLlxuXHRcdFx0QHByb3BlcnR5IHtzdHJpbmd9IFtidXR0b25UZXh0PScuLi4nXSBEaXNwbGF5IHRleHQgZm9yIHRyaWdnZXIgYnV0dG9uLlxuXHRcdFx0QHByb3BlcnR5IHtzdHJpbmd9IFtidXR0b25TdGF0dXM9J09wZW4gdGhlIGtleXBhZCddIFN0YXR1cyB0ZXh0IGZvciB0cmlnZ2VyIGJ1dHRvbi5cblx0XHRcdEBwcm9wZXJ0eSB7c3RyaW5nfSBbY2xvc2VUZXh0PSdDbG9zZSddIERpc3BsYXkgdGV4dCBmb3IgY2xvc2UgbGluay5cblx0XHRcdEBwcm9wZXJ0eSB7c3RyaW5nfSBbY2xvc2VTdGF0dXM9J0Nsb3NlIHRoZSBrZXlwYWQnXSBTdGF0dXMgdGV4dCBmb3IgY2xvc2UgbGluay5cblx0XHRcdEBwcm9wZXJ0eSB7c3RyaW5nfSBbY2xlYXJUZXh0PSdDbGVhciddIERpc3BsYXkgdGV4dCBmb3IgY2xlYXIgbGluay5cblx0XHRcdEBwcm9wZXJ0eSB7c3RyaW5nfSBbY2xlYXJTdGF0dXM9J0VyYXNlIGFsbCB0aGUgdGV4dCddIFN0YXR1cyB0ZXh0IGZvciBjbGVhciBsaW5rLlxuXHRcdFx0QHByb3BlcnR5IHtzdHJpbmd9IFtiYWNrVGV4dD0nQmFjayddIERpc3BsYXkgdGV4dCBmb3IgYmFjayBsaW5rLlxuXHRcdFx0QHByb3BlcnR5IHtzdHJpbmd9IFtiYWNrU3RhdHVzPSdFcmFzZSB0aGUgcHJldmlvdXMgY2hhcmFjdGVyJ10gU3RhdHVzIHRleHQgZm9yIGJhY2sgbGluay5cblx0XHRcdEBwcm9wZXJ0eSB7c3RyaW5nfSBbc3BhY2ViYXJUZXh0PScmIzE2MDsnXSBEaXNwbGF5IHRleHQgZm9yIHNwYWNlIGJhci5cblx0XHRcdEBwcm9wZXJ0eSB7c3RyaW5nfSBbc3BhY2ViYXJTdGF0dXM9J1NwYWNlJ10gU3RhdHVzIHRleHQgZm9yIHNwYWNlIGJhci5cblx0XHRcdEBwcm9wZXJ0eSB7c3RyaW5nfSBbZW50ZXJUZXh0PSdFbnRlciddIERpc3BsYXkgdGV4dCBmb3IgY2FycmlhZ2UgcmV0dXJuLlxuXHRcdFx0QHByb3BlcnR5IHtzdHJpbmd9IFtlbnRlclN0YXR1cz0nQ2FycmlhZ2UgcmV0dXJuJ10gU3RhdHVzIHRleHQgZm9yIGNhcnJpYWdlIHJldHVybi5cblx0XHRcdEBwcm9wZXJ0eSB7c3RyaW5nfSBbdGFiVGV4dD0n4oaSJ10gRGlzcGxheSB0ZXh0IGZvciB0YWIuXG5cdFx0XHRAcHJvcGVydHkge3N0cmluZ30gW3RhYlN0YXR1cz0nSG9yaXpvbnRhbCB0YWInXSBTdGF0dXMgdGV4dCBmb3IgdGFiLlxuXHRcdFx0QHByb3BlcnR5IHtzdHJpbmd9IFtzaGlmdFRleHQ9J1NoaWZ0J10gRGlzcGxheSB0ZXh0IGZvciBzaGlmdCBsaW5rLlxuXHRcdFx0QHByb3BlcnR5IHtzdHJpbmd9IFtzaGlmdFN0YXR1cz0nVG9nZ2xlIHVwcGVyL2xvd2VyIGNhc2UgY2hhcmFjdGVycyddIFN0YXR1cyB0ZXh0IGZvciBzaGlmdCBsaW5rLlxuXHRcdFx0QHByb3BlcnR5IHtzdHJpbmd9IFthbHBoYWJldGljTGF5b3V0PXtAbGlua2NvZGUgbW9kdWxlOktleXBhZH5xd2VydHlBbHBoYWJldGljfHRoaXMucXdlcnR5QWxwaGFiZXRpY31dXG5cdFx0XHRcdERlZmF1bHQgbGF5b3V0IGZvciBhbHBoYWJldGljIGNoYXJhY3RlcnMuXG5cdFx0XHRAcHJvcGVydHkge3N0cmluZ30gW2Z1bGxMYXlvdXQ9e0BsaW5rY29kZSBtb2R1bGU6S2V5cGFkfnF3ZXJ0eUxheW91dHx0aGlzLnF3ZXJ0eUxheW91dH1dXG5cdFx0XHRcdERlZmF1bHQgbGF5b3V0IGZvciBmdWxsIGtleWJvYXJkLlxuXHRcdFx0QHByb3BlcnR5IHtJc0FscGhhYmV0aWNDYWxsYmFja30gW2lzQWxwaGFiZXRpYz17QGxpbmtjb2RlIG1vZHVsZTpLZXlwYWR+aXNBbHBoYWJldGljfHRoaXMuaXNBbHBoYWJldGljfV1cblx0XHRcdFx0RnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIGNoYXJhY3RlciBpcyBhbHBoYWJldGljLlxuXHRcdFx0QHByb3BlcnR5IHtJc051bWVyaWNDYWxsYmFja30gW2lzTnVtZXJpYz17QGxpbmtjb2RlIG1vZHVsZTpLZXlwYWR+aXNOdW1lcmljfHRoaXMuaXNOdW1lcmljfV1cblx0XHRcdFx0RnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIGNoYXJhY3RlciBpcyBudW1lcmljLlxuXHRcdFx0QHByb3BlcnR5IHtUb1VwcGVyQ2FsbGJhY2t9IFt0b1VwcGVyPXtAbGlua2NvZGUgbW9kdWxlOktleXBhZH50b1VwcGVyfHRoaXMudG9VcHBlcn1dXG5cdFx0XHRcdEZ1bmN0aW9uIHRvIGNvbnZlcnQgY2hhcmFjdGVycyB0byB1cHBlciBjYXNlLlxuXHRcdFx0QHByb3BlcnR5IHtib29sZWFufSBbaXNSVEw9ZmFsc2VdIDxjb2RlPnRydWU8L2NvZGU+IGlmIHJpZ2h0LXRvLWxlZnQgbGFuZ3VhZ2UsXG5cdFx0XHRcdDxjb2RlPmZhbHNlPC9jb2RlPiBpZiBsZWZ0LXRvLXJpZ2h0LiAqL1xuXHRcdHJlZ2lvbmFsT3B0aW9uczogeyAvLyBBdmFpbGFibGUgcmVnaW9uYWwgc2V0dGluZ3MsIGluZGV4ZWQgYnkgbGFuZ3VhZ2UvY291bnRyeSBjb2RlXG5cdFx0XHQnJzogeyAvLyBEZWZhdWx0IHJlZ2lvbmFsIHNldHRpbmdzIC0gRW5nbGlzaC9VU1xuXHRcdFx0XHRidXR0b25UZXh0OiAnLi4uJyxcblx0XHRcdFx0YnV0dG9uU3RhdHVzOiAnT3BlbiB0aGUga2V5cGFkJyxcblx0XHRcdFx0Y2xvc2VUZXh0OiAnQ2xvc2UnLFxuXHRcdFx0XHRjbG9zZVN0YXR1czogJ0Nsb3NlIHRoZSBrZXlwYWQnLFxuXHRcdFx0XHRjbGVhclRleHQ6ICdDbGVhcicsXG5cdFx0XHRcdGNsZWFyU3RhdHVzOiAnRXJhc2UgYWxsIHRoZSB0ZXh0Jyxcblx0XHRcdFx0YmFja1RleHQ6ICdCYWNrJyxcblx0XHRcdFx0YmFja1N0YXR1czogJ0VyYXNlIHRoZSBwcmV2aW91cyBjaGFyYWN0ZXInLFxuXHRcdFx0XHRzcGFjZWJhclRleHQ6ICcmIzE2MDsnLFxuXHRcdFx0XHRzcGFjZWJhclN0YXR1czogJ1NwYWNlJyxcblx0XHRcdFx0ZW50ZXJUZXh0OiAnRW50ZXInLFxuXHRcdFx0XHRlbnRlclN0YXR1czogJ0NhcnJpYWdlIHJldHVybicsXG5cdFx0XHRcdHRhYlRleHQ6ICfihpInLFxuXHRcdFx0XHR0YWJTdGF0dXM6ICdIb3Jpem9udGFsIHRhYicsXG5cdFx0XHRcdHNoaWZ0VGV4dDogJ1NoaWZ0Jyxcblx0XHRcdFx0c2hpZnRTdGF0dXM6ICdUb2dnbGUgdXBwZXIvbG93ZXIgY2FzZSBjaGFyYWN0ZXJzJyxcblx0XHRcdFx0YWxwaGFiZXRpY0xheW91dDogW10sIC8vIFNldCBhdCB0aGUgZW5kXG5cdFx0XHRcdGZ1bGxMYXlvdXQ6IFtdLFxuXHRcdFx0XHRpc0FscGhhYmV0aWM6IG51bGwsXG5cdFx0XHRcdGlzTnVtZXJpYzogbnVsbCxcblx0XHRcdFx0dG9VcHBlcjogbnVsbCxcblx0XHRcdFx0aXNSVEw6IGZhbHNlXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdEJTOiAnXFx4MDgnLCAvLyBCYWNrc3BhY2Vcblx0XHRERUw6ICdcXHg3RicsIC8vIERlbGV0ZVxuXG5cdFx0X2N1ckluc3Q6IG51bGwsIC8vIFRoZSBjdXJyZW50IGluc3RhbmNlIGluIHVzZVxuXHRcdF9kaXNhYmxlZEZpZWxkczogW10sIC8vIExpc3Qgb2Yga2V5cGFkIGZpZWxkcyB0aGF0IGhhdmUgYmVlbiBkaXNhYmxlZFxuXHRcdF9rZXlwYWRTaG93aW5nOiBmYWxzZSwgLy8gVHJ1ZSBpZiB0aGUgcG9wdXAgcGFuZWwgaXMgc2hvd2luZyAsIGZhbHNlIGlmIG5vdFxuXHRcdF9rZXlDb2RlOiAwLFxuXHRcdF9zcGVjaWFsS2V5czogW10sXG5cblx0XHRfbWFpbkRpdkNsYXNzOiBwbHVnaW5OYW1lICsgJy1wb3B1cCcsIC8vIFRoZSBtYWluIGtleXBhZCBkaXZpc2lvbiBjbGFzc1xuXHRcdF9pbmxpbmVDbGFzczogcGx1Z2luTmFtZSArICctaW5saW5lJywgLy8gVGhlIGlubGluZSBtYXJrZXIgY2xhc3Ncblx0XHRfYXBwZW5kQ2xhc3M6IHBsdWdpbk5hbWUgKyAnLWFwcGVuZCcsIC8vIFRoZSBhcHBlbmQgbWFya2VyIGNsYXNzXG5cdFx0X3RyaWdnZXJDbGFzczogcGx1Z2luTmFtZSArICctdHJpZ2dlcicsIC8vIFRoZSB0cmlnZ2VyIG1hcmtlciBjbGFzc1xuXHRcdF9kaXNhYmxlQ2xhc3M6IHBsdWdpbk5hbWUgKyAnLWRpc2FibGVkJywgLy8gVGhlIGRpc2FibGVkIGNvdmVyaW5nIG1hcmtlciBjbGFzc1xuXHRcdF9pbmxpbmVFbnRyeUNsYXNzOiBwbHVnaW5OYW1lICsgJy1rZXllbnRyeScsIC8vIFRoZSBpbmxpbmUgZW50cnkgbWFya2VyIGNsYXNzXG5cdFx0X3J0bENsYXNzOiBwbHVnaW5OYW1lICsgJy1ydGwnLCAvLyBUaGUgcmlnaHQtdG8tbGVmdCBtYXJrZXIgY2xhc3Ncblx0XHRfcm93Q2xhc3M6IHBsdWdpbk5hbWUgKyAnLXJvdycsIC8vIFRoZSBrZXlwYWQgcm93IG1hcmtlciBjbGFzc1xuXHRcdF9wcm9tcHRDbGFzczogcGx1Z2luTmFtZSArICctcHJvbXB0JywgLy8gVGhlIHByb21wdCBtYXJrZXIgY2xhc3Ncblx0XHRfc3BlY2lhbENsYXNzOiBwbHVnaW5OYW1lICsgJy1zcGVjaWFsJywgLy8gVGhlIHNwZWNpYWwga2V5IG1hcmtlciBjbGFzc1xuXHRcdF9uYW1lUHJlZml4Q2xhc3M6IHBsdWdpbk5hbWUgKyAnLScsIC8vIFRoZSBrZXkgbmFtZSBtYXJrZXIgY2xhc3MgcHJlZml4XG5cdFx0X2tleUNsYXNzOiBwbHVnaW5OYW1lICsgJy1rZXknLCAvLyBUaGUga2V5IG1hcmtlciBjbGFzc1xuXHRcdF9rZXlEb3duQ2xhc3M6IHBsdWdpbk5hbWUgKyAnLWtleS1kb3duJywgLy8gVGhlIGtleSBkb3duIG1hcmtlciBjbGFzc1xuXG5cdFx0LyoqIEFkZCB0aGUgZGVmaW5pdGlvbiBvZiBhIHNwZWNpYWwga2V5LlxuXHRcdFx0QHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZGVudGlmaWVyIGZvciB0aGlzIGtleSAtIGFjY2VzcyB2aWEgPGNvZGU+JC5rZXlwYWQueHh4PC9jb2RlPi5cblx0XHRcdEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBwcmVmaXggZm9yIGxvY2FsaXNhdGlvbiBzdHJpbmdzIGFuZCB0aGUgc3VmZml4IGZvciBhIGNsYXNzIG5hbWUuXG5cdFx0XHRAcGFyYW0ge0tleUFjdGlvbkNhbGxiYWNrfSBhY3Rpb24gVGhlIGFjdGlvbiBwZXJmb3JtZWQgZm9yIHRoaXMga2V5IC0gcmVjZWl2ZXMgPGNvZGU+aW5zdDwvY29kZT4gYXMgYSBwYXJhbWV0ZXIuXG5cdFx0XHRAcGFyYW0ge2Jvb2xlYW59IFtub0hpZ2hsaWdodD1mYWxzZV0gPGNvZGU+dHJ1ZTwvY29kZT4gdG8gc3VwcHJlc3MgaGlnaGxpZ2h0IHdoZW4gdXNpbmcgVGhlbWVSb2xsZXIuXG5cdFx0XHRAcmV0dXJuIHtLZXlwYWR9IFRoZSBrZXlwYWQgb2JqZWN0IGZvciBjaGFpbmluZyBmdXJ0aGVyIGNhbGxzLlxuXHRcdFx0QGV4YW1wbGUgJC5rZXlwYWQuYWRkS2V5RGVmKCdDTEVBUicsICdjbGVhcicsIGZ1bmN0aW9uKGluc3QpIHsgcGx1Z2luLl9jbGVhclZhbHVlKGluc3QpOyB9KTsgKi9cblx0XHRhZGRLZXlEZWY6IGZ1bmN0aW9uKGlkLCBuYW1lLCBhY3Rpb24sIG5vSGlnaGxpZ2h0KSB7XG5cdFx0XHRpZiAodGhpcy5fa2V5Q29kZSA9PT0gMzIpIHtcblx0XHRcdFx0dGhyb3cgJ09ubHkgMzIgc3BlY2lhbCBrZXlzIGFsbG93ZWQnO1xuXHRcdFx0fVxuXHRcdFx0dGhpc1tpZF0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMuX2tleUNvZGUrKyk7XG5cdFx0XHR0aGlzLl9zcGVjaWFsS2V5cy5wdXNoKHtjb2RlOiB0aGlzW2lkXSwgaWQ6IGlkLCBuYW1lOiBuYW1lLFxuXHRcdFx0XHRhY3Rpb246IGFjdGlvbiwgbm9IaWdobGlnaHQ6IG5vSGlnaGxpZ2h0fSk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXG5cdFx0LyoqIEFkZGl0aW9uYWwgc2V0dXAgZm9yIHRoZSBrZXlwYWQuXG5cdFx0XHRDcmVhdGUgcG9wdXAgZGl2LlxuXHRcdFx0QHByaXZhdGUgKi9cblx0XHRfaW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLm1haW5EaXYgPSAkKCc8ZGl2IGNsYXNzPVwiJyArIHRoaXMuX21haW5EaXZDbGFzcyArICdcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+PC9kaXY+Jyk7XG5cdFx0XHR0aGlzLl9zdXBlcigpO1xuXHRcdH0sXG5cblx0XHRfaW5zdFNldHRpbmdzOiBmdW5jdGlvbihlbGVtLCBvcHRpb25zKSB7IC8vIGpzaGludCB1bnVzZWQ6ZmFsc2Vcblx0XHRcdHZhciBpbmxpbmUgPSAhZWxlbVswXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLm1hdGNoKC9pbnB1dHx0ZXh0YXJlYS8pO1xuXHRcdFx0cmV0dXJuIHtfaW5saW5lOiBpbmxpbmUsIHVjYXNlOiBmYWxzZSxcblx0XHRcdFx0X21haW5EaXY6IChpbmxpbmUgPyAkKCc8ZGl2IGNsYXNzPVwiJyArIHRoaXMuX2lubGluZUNsYXNzICsgJ1wiPjwvZGl2PicpIDogcGx1Z2luLm1haW5EaXYpfTtcblx0XHR9LFxuXG5cdFx0X3Bvc3RBdHRhY2g6IGZ1bmN0aW9uKGVsZW0sIGluc3QpIHtcblx0XHRcdGlmIChpbnN0Ll9pbmxpbmUpIHtcblx0XHRcdFx0ZWxlbS5hcHBlbmQoaW5zdC5fbWFpbkRpdikub24oJ2NsaWNrLicgKyBpbnN0Lm5hbWUsIGZ1bmN0aW9uKCkgeyBpbnN0Ll9pbnB1dC50cmlnZ2VyKCdmb2N1cycpOyB9KTtcblx0XHRcdFx0dGhpcy5fdXBkYXRlS2V5cGFkKGluc3QpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoZWxlbS5pcygnOmRpc2FibGVkJykpIHtcblx0XHRcdFx0dGhpcy5kaXNhYmxlKGVsZW0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKiogRGV0ZXJtaW5lIHRoZSBpbnB1dCBmaWVsZCBmb3IgdGhlIGtleXBhZC5cblx0XHRcdEBwcml2YXRlXG5cdFx0XHRAcGFyYW0ge2pRdWVyeX0gZWxlbSBUaGUgdGFyZ2V0IGNvbnRyb2wuXG5cdFx0XHRAcGFyYW0ge29iamVjdH0gaW5zdCBUaGUgaW5zdGFuY2Ugc2V0dGluZ3MuICovXG5cdFx0X3NldElucHV0OiBmdW5jdGlvbihlbGVtLCBpbnN0KSB7XG5cdFx0XHRpbnN0Ll9pbnB1dCA9ICQoIWluc3QuX2lubGluZSA/IGVsZW0gOiBpbnN0Lm9wdGlvbnMudGFyZ2V0IHx8XG5cdFx0XHRcdCc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cIicgKyB0aGlzLl9pbmxpbmVFbnRyeUNsYXNzICsgJ1wiIGRpc2FibGVkPjwvaW5wdXQ+Jyk7XG5cdFx0XHRpZiAoaW5zdC5faW5saW5lKSB7XG5cdFx0XHRcdGVsZW0uZmluZCgnaW5wdXQnKS5yZW1vdmUoKTtcblx0XHRcdFx0aWYgKCFpbnN0Lm9wdGlvbnMudGFyZ2V0KSB7XG5cdFx0XHRcdFx0ZWxlbS5hcHBlbmQoaW5zdC5faW5wdXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdF9vcHRpb25zQ2hhbmdlZDogZnVuY3Rpb24oZWxlbSwgaW5zdCwgb3B0aW9ucykge1xuXHRcdFx0JC5leHRlbmQoaW5zdC5vcHRpb25zLCBvcHRpb25zKTtcblx0XHRcdGVsZW0ub2ZmKCcuJyArIGluc3QubmFtZSkuXG5cdFx0XHRcdHNpYmxpbmdzKCcuJyArIHRoaXMuX2FwcGVuZENsYXNzKS5yZW1vdmUoKS5lbmQoKS5cblx0XHRcdFx0c2libGluZ3MoJy4nICsgdGhpcy5fdHJpZ2dlckNsYXNzKS5yZW1vdmUoKTtcblx0XHRcdHZhciBhcHBlbmRUZXh0ID0gaW5zdC5vcHRpb25zLmFwcGVuZFRleHQ7XG5cdFx0XHRpZiAoYXBwZW5kVGV4dCkge1xuXHRcdFx0XHRlbGVtW2luc3Qub3B0aW9ucy5pc1JUTCA/ICdiZWZvcmUnIDogJ2FmdGVyJ10oXG5cdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwiJyArIHRoaXMuX2FwcGVuZENsYXNzICsgJ1wiPicgKyBhcHBlbmRUZXh0ICsgJzwvc3Bhbj4nKTtcblx0XHRcdH1cblx0XHRcdGlmICghaW5zdC5faW5saW5lKSB7XG5cdFx0XHRcdGlmIChpbnN0Lm9wdGlvbnMuc2hvd09uID09PSAnZm9jdXMnIHx8IGluc3Qub3B0aW9ucy5zaG93T24gPT09ICdib3RoJykge1xuXHRcdFx0XHRcdC8vIHBvcC11cCBrZXlwYWQgd2hlbiBpbiB0aGUgbWFya2VkIGZpZWxkXG5cdFx0XHRcdFx0ZWxlbS5vbignZm9jdXMuJyArIGluc3QubmFtZSwgdGhpcy5zaG93KS5cblx0XHRcdFx0XHRcdG9uKCdrZXlkb3duLicgKyBpbnN0Lm5hbWUsIHRoaXMuX2RvS2V5RG93bik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGluc3Qub3B0aW9ucy5zaG93T24gPT09ICdidXR0b24nIHx8IGluc3Qub3B0aW9ucy5zaG93T24gPT09ICdib3RoJykge1xuXHRcdFx0XHRcdC8vIHBvcC11cCBrZXlwYWQgd2hlbiBidXR0b24gY2xpY2tlZFxuXHRcdFx0XHRcdHZhciBidXR0b25TdGF0dXMgPSBpbnN0Lm9wdGlvbnMuYnV0dG9uU3RhdHVzO1xuXHRcdFx0XHRcdHZhciBidXR0b25JbWFnZSA9IGluc3Qub3B0aW9ucy5idXR0b25JbWFnZTtcblx0XHRcdFx0XHR2YXIgdHJpZ2dlciA9ICQoaW5zdC5vcHRpb25zLmJ1dHRvbkltYWdlT25seSA/XG5cdFx0XHRcdFx0XHQkKCc8aW1nIHNyYz1cIicgKyBidXR0b25JbWFnZSArICdcIiBhbHQ9XCInICtcblx0XHRcdFx0XHRcdGJ1dHRvblN0YXR1cyArICdcIiB0aXRsZT1cIicgKyBidXR0b25TdGF0dXMgKyAnXCI+PC9pbWc+JykgOlxuXHRcdFx0XHRcdCQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiJyArIGJ1dHRvblN0YXR1cyArICdcIj48L2J1dHRvbj4nKS5cblx0XHRcdFx0XHRcdGh0bWwoYnV0dG9uSW1hZ2UgPT09ICcnID8gaW5zdC5vcHRpb25zLmJ1dHRvblRleHQgOlxuXHRcdFx0XHRcdFx0JCgnPGltZyBzcmM9XCInICsgYnV0dG9uSW1hZ2UgKyAnXCIgYWx0PVwiJyArXG5cdFx0XHRcdFx0XHRidXR0b25TdGF0dXMgKyAnXCIgdGl0bGU9XCInICsgYnV0dG9uU3RhdHVzICsgJ1wiPjwvaW1nPicpKSk7XG5cdFx0XHRcdFx0ZWxlbVtpbnN0Lm9wdGlvbnMuaXNSVEwgPyAnYmVmb3JlJyA6ICdhZnRlciddKHRyaWdnZXIpO1xuXHRcdFx0XHRcdHRyaWdnZXIuYWRkQ2xhc3ModGhpcy5fdHJpZ2dlckNsYXNzKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYgKHBsdWdpbi5fa2V5cGFkU2hvd2luZyAmJiBwbHVnaW4uX2xhc3RGaWVsZCA9PT0gZWxlbVswXSkge1xuXHRcdFx0XHRcdFx0XHRwbHVnaW4uaGlkZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHBsdWdpbi5zaG93KGVsZW1bMF0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpbnN0LnNhdmVSZWFkb25seSA9IGVsZW0uYXR0cigncmVhZG9ubHknKTtcblx0XHRcdGVsZW0ucHJvcCggXCJyZWFkb25seVwiLCBpbnN0Lm9wdGlvbnMua2V5cGFkT25seSkuXG5cdFx0XHRcdG9uKCdzZXREYXRhLicgKyBpbnN0Lm5hbWUsIGZ1bmN0aW9uKGV2ZW50LCBrZXksIHZhbHVlKSB7XG5cdFx0XHRcdFx0aW5zdC5vcHRpb25zW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0fSkuXG5cdFx0XHRcdG9uKCdnZXREYXRhLicgKyBpbnN0Lm5hbWUsIGZ1bmN0aW9uKGV2ZW50LCBrZXkpIHtcblx0XHRcdFx0XHRyZXR1cm4gaW5zdC5vcHRpb25zW2tleV07XG5cdFx0XHRcdH0pO1xuXHRcdFx0dGhpcy5fc2V0SW5wdXQoZWxlbSwgaW5zdCk7XG5cdFx0XHR0aGlzLl91cGRhdGVLZXlwYWQoaW5zdCk7XG5cdFx0fSxcblxuXHRcdF9wcmVEZXN0cm95OiBmdW5jdGlvbihlbGVtLCBpbnN0KSB7XG5cdFx0XHRpZiAodGhpcy5fY3VySW5zdCA9PT0gaW5zdCkge1xuXHRcdFx0XHR0aGlzLmhpZGUoKTtcblx0XHRcdH1cblx0XHRcdGVsZW0uc2libGluZ3MoJy4nICsgdGhpcy5fYXBwZW5kQ2xhc3MpLnJlbW92ZSgpLmVuZCgpLlxuXHRcdFx0XHRzaWJsaW5ncygnLicgKyB0aGlzLl90cmlnZ2VyQ2xhc3MpLnJlbW92ZSgpLmVuZCgpLlxuXHRcdFx0XHRwcmV2KCcuJyArIHRoaXMuX2lubGluZUVudHJ5Q2xhc3MpLnJlbW92ZSgpO1xuXHRcdFx0ZWxlbS5lbXB0eSgpLm9mZignLicgKyBpbnN0Lm5hbWUpLnByb3AoJ3JlYWRvbmx5JywgaW5zdC5zYXZlUmVhZG9ubHkpO1xuXHRcdFx0aW5zdC5faW5wdXQucmVtb3ZlRGF0YShpbnN0Lm5hbWUpO1xuXHRcdH0sXG5cblx0XHQvKiogRW5hYmxlIHRoZSBrZXlwYWQgZm9yIGEgalF1ZXJ5IHNlbGVjdGlvbi5cblx0XHRcdEBwYXJhbSB7RWxlbWVudH0gZWxlbSBUaGUgdGFyZ2V0IHRleHQgZmllbGQuXG5cdFx0XHRAZXhhbXBsZSAkKHNlbGVjdG9yKS5rZXlwYWQoJ2VuYWJsZScpOyAqL1xuXHRcdGVuYWJsZTogZnVuY3Rpb24oZWxlbSkge1xuXHRcdFx0ZWxlbSA9ICQoZWxlbSk7XG5cdFx0XHRpZiAoIWVsZW0uaGFzQ2xhc3ModGhpcy5fZ2V0TWFya2VyKCkpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBub2RlTmFtZSA9IGVsZW1bMF0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdGlmIChub2RlTmFtZS5tYXRjaCgvaW5wdXR8dGV4dGFyZWEvKSkge1xuXHRcdFx0XHRlbGVtLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpLlxuXHRcdFx0XHRcdHNpYmxpbmdzKCdidXR0b24uJyArIHRoaXMuX3RyaWdnZXJDbGFzcykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSkuZW5kKCkuXG5cdFx0XHRcdFx0c2libGluZ3MoJ2ltZy4nICsgdGhpcy5fdHJpZ2dlckNsYXNzKS5jc3Moe29wYWNpdHk6ICcxLjAnLCBjdXJzb3I6ICcnfSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChub2RlTmFtZS5tYXRjaCgvZGl2fHNwYW4vKSkge1xuXHRcdFx0XHRlbGVtLmNoaWxkcmVuKCcuJyArIHRoaXMuX2Rpc2FibGVDbGFzcykucmVtb3ZlKCk7XG5cdFx0XHRcdHRoaXMuX2dldEluc3QoZWxlbSkuX21haW5EaXYuZmluZCgnYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9kaXNhYmxlZEZpZWxkcyA9ICQubWFwKHRoaXMuX2Rpc2FibGVkRmllbGRzLFxuXHRcdFx0XHRmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gKHZhbHVlID09PSBlbGVtWzBdID8gbnVsbCA6IHZhbHVlKTsgfSk7IC8vIGRlbGV0ZSBlbnRyeVxuXHRcdH0sXG5cblx0XHQvKiogRGlzYWJsZSB0aGUga2V5cGFkIGZvciBhIGpRdWVyeSBzZWxlY3Rpb24uXG5cdFx0XHRAcGFyYW0ge0VsZW1lbnR9IGVsZW0gVGhlIHRhcmdldCB0ZXh0IGZpZWxkLlxuXHRcdFx0QGV4YW1wbGUgJChzZWxlY3Rvcikua2V5cGFkKCdkaXNhYmxlJyk7ICovXG5cdFx0ZGlzYWJsZTogZnVuY3Rpb24oZWxlbSkge1xuXHRcdFx0ZWxlbSA9ICQoZWxlbSk7XG5cdFx0XHRpZiAoIWVsZW0uaGFzQ2xhc3ModGhpcy5fZ2V0TWFya2VyKCkpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBub2RlTmFtZSA9IGVsZW1bMF0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdGlmIChub2RlTmFtZS5tYXRjaCgvaW5wdXR8dGV4dGFyZWEvKSkge1xuXHRcdFx0XHRlbGVtLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSkuXG5cdFx0XHRcdFx0c2libGluZ3MoJ2J1dHRvbi4nICsgdGhpcy5fdHJpZ2dlckNsYXNzKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpLmVuZCgpLlxuXHRcdFx0XHRcdHNpYmxpbmdzKCdpbWcuJyArIHRoaXMuX3RyaWdnZXJDbGFzcykuY3NzKHtvcGFjaXR5OiAnMC41JywgY3Vyc29yOiAnZGVmYXVsdCd9KTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKG5vZGVOYW1lLm1hdGNoKC9kaXZ8c3Bhbi8pKSB7XG5cdFx0XHRcdHZhciBpbmxpbmUgPSBlbGVtLmNoaWxkcmVuKCcuJyArIHRoaXMuX2lubGluZUNsYXNzKTtcblx0XHRcdFx0dmFyIG9mZnNldCA9IGlubGluZS5vZmZzZXQoKTtcblx0XHRcdFx0dmFyIHJlbE9mZnNldCA9IHtsZWZ0OiAwLCB0b3A6IDB9O1xuXHRcdFx0XHRpbmxpbmUucGFyZW50cygpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKCQodGhpcykuY3NzKCdwb3NpdGlvbicpID09PSAncmVsYXRpdmUnKSB7XG5cdFx0XHRcdFx0XHRyZWxPZmZzZXQgPSAkKHRoaXMpLm9mZnNldCgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGVsZW0ucHJlcGVuZCgnPGRpdiBjbGFzcz1cIicgKyB0aGlzLl9kaXNhYmxlQ2xhc3MgKyAnXCIgc3R5bGU9XCJ3aWR0aDogJyArXG5cdFx0XHRcdFx0aW5saW5lLm91dGVyV2lkdGgoKSArICdweDsgaGVpZ2h0OiAnICsgaW5saW5lLm91dGVySGVpZ2h0KCkgK1xuXHRcdFx0XHRcdCdweDsgbGVmdDogJyArIChvZmZzZXQubGVmdCAtIHJlbE9mZnNldC5sZWZ0KSArXG5cdFx0XHRcdFx0J3B4OyB0b3A6ICcgKyAob2Zmc2V0LnRvcCAtIHJlbE9mZnNldC50b3ApICsgJ3B4O1wiPjwvZGl2PicpO1xuXHRcdFx0XHR0aGlzLl9nZXRJbnN0KGVsZW0pLl9tYWluRGl2LmZpbmQoJ2J1dHRvbicpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9kaXNhYmxlZEZpZWxkcyA9ICQubWFwKHRoaXMuX2Rpc2FibGVkRmllbGRzLFxuXHRcdFx0XHRmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gKHZhbHVlID09PSBlbGVtWzBdID8gbnVsbCA6IHZhbHVlKTsgfSk7IC8vIGRlbGV0ZSBlbnRyeVxuXHRcdFx0dGhpcy5fZGlzYWJsZWRGaWVsZHNbdGhpcy5fZGlzYWJsZWRGaWVsZHMubGVuZ3RoXSA9IGVsZW1bMF07XG5cdFx0fSxcblxuXHRcdC8qKiBJcyB0aGUgdGV4dCBmaWVsZCBkaXNhYmxlZCBhcyBhIGtleXBhZD9cblx0XHRcdEBwYXJhbSB7RWxlbWVudH0gZWxlbSBUaGUgdGFyZ2V0IHRleHQgZmllbGQuXG5cdFx0XHRAcmV0dXJuIHtib29sZWFufSA8Y29kZT50cnVlPC9jb2RlPiBpZiBkaXNhYmxlZCwgPGNvZGU+ZmFsc2U8L2NvZGU+IGlmIGVuYWJsZWQuXG5cdFx0XHRAZXhhbXBsZSB2YXIgZGlzYWJsZWQgPSAkKHNlbGVjdG9yKS5rZXlwYWQoJ2lzRGlzYWJsZWQnKTsgKi9cblx0XHRpc0Rpc2FibGVkOiBmdW5jdGlvbihlbGVtKSB7XG5cdFx0XHRyZXR1cm4gKGVsZW0gJiYgJC5pbkFycmF5KGVsZW0sIHRoaXMuX2Rpc2FibGVkRmllbGRzKSA+IC0xKTtcblx0XHR9LFxuXG5cdFx0LyoqIFBvcC11cCB0aGUga2V5cGFkIGZvciBhIGdpdmVuIHRleHQgZmllbGQuXG5cdFx0XHRAcGFyYW0ge0VsZW1lbnR8RXZlbnR9IGVsZW0gVGhlIHRleHQgZmllbGQgYXR0YWNoZWQgdG8gdGhlIGtleXBhZCBvciBldmVudCBpZiB0cmlnZ2VyZWQgYnkgZm9jdXMuXG5cdFx0XHRAZXhhbXBsZSAkKHNlbGVjdG9yKS5rZXlwYWQoJ3Nob3cnKTsgKi9cblx0XHRzaG93OiBmdW5jdGlvbihlbGVtKSB7XG5cdFx0XHRlbGVtID0gZWxlbS50YXJnZXQgfHwgZWxlbTtcblx0XHRcdGlmIChwbHVnaW4uaXNEaXNhYmxlZChlbGVtKSB8fCBwbHVnaW4uX2xhc3RGaWVsZCA9PT0gZWxlbSkgeyAvLyBhbHJlYWR5IGhlcmVcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGluc3QgPSBwbHVnaW4uX2dldEluc3QoZWxlbSk7XG5cdFx0XHRwbHVnaW4uaGlkZShudWxsLCAnJyk7XG5cdFx0XHRwbHVnaW4uX2xhc3RGaWVsZCA9IGVsZW07XG5cdFx0XHRwbHVnaW4uX3BvcyA9IHBsdWdpbi5fZmluZFBvcyhlbGVtKTtcblx0XHRcdHBsdWdpbi5fcG9zWzFdICs9IGVsZW0ub2Zmc2V0SGVpZ2h0OyAvLyBhZGQgdGhlIGhlaWdodFxuXHRcdFx0dmFyIGlzRml4ZWQgPSBmYWxzZTtcblx0XHRcdCQoZWxlbSkucGFyZW50cygpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlzRml4ZWQgPSBpc0ZpeGVkIHx8ICQodGhpcykuY3NzKCdwb3NpdGlvbicpID09PSAnZml4ZWQnO1xuXHRcdFx0XHRyZXR1cm4gIWlzRml4ZWQ7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBvZmZzZXQgPSB7bGVmdDogcGx1Z2luLl9wb3NbMF0sIHRvcDogcGx1Z2luLl9wb3NbMV19O1xuXHRcdFx0cGx1Z2luLl9wb3MgPSBudWxsO1xuXHRcdFx0Ly8gZGV0ZXJtaW5lIHNpemluZyBvZmZzY3JlZW5cblx0XHRcdGluc3QuX21haW5EaXYuc3RvcCh0cnVlLCB0cnVlKS5cblx0XHRcdFx0Y3NzKHtwb3NpdGlvbjogJ2Fic29sdXRlJywgZGlzcGxheTogJ2Jsb2NrJywgdG9wOiAnLTEwMDBweCcsIHdpZHRoOiAnYXV0byd9KTtcblx0XHRcdHBsdWdpbi5fdXBkYXRlS2V5cGFkKGluc3QpO1xuXHRcdFx0Ly8gYW5kIGFkanVzdCBwb3NpdGlvbiBiZWZvcmUgc2hvd2luZ1xuXHRcdFx0b2Zmc2V0ID0gcGx1Z2luLl9jaGVja09mZnNldChpbnN0LCBvZmZzZXQsIGlzRml4ZWQpO1xuXHRcdFx0aW5zdC5fbWFpbkRpdi5jc3Moe3Bvc2l0aW9uOiAoaXNGaXhlZCA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnKSwgZGlzcGxheTogJ25vbmUnLFxuXHRcdFx0XHRsZWZ0OiBvZmZzZXQubGVmdCArICdweCcsIHRvcDogb2Zmc2V0LnRvcCArICdweCd9KTtcblx0XHRcdHZhciBkdXJhdGlvbiA9IGluc3Qub3B0aW9ucy5kdXJhdGlvbjtcblx0XHRcdHZhciBzaG93QW5pbSA9IGluc3Qub3B0aW9ucy5zaG93QW5pbTtcblx0XHRcdHZhciBwb3N0UHJvY2VzcyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRwbHVnaW4uX2tleXBhZFNob3dpbmcgPSB0cnVlO1xuXHRcdFx0fTtcblx0XHRcdGlmICgkLmVmZmVjdHMgJiYgKCQuZWZmZWN0c1tzaG93QW5pbV0gfHwgKCQuZWZmZWN0cy5lZmZlY3QgJiYgJC5lZmZlY3RzLmVmZmVjdFtzaG93QW5pbV0pKSkge1xuXHRcdFx0XHR2YXIgZGF0YSA9IGluc3QuX21haW5EaXYuZGF0YSgpOyAvLyBVcGRhdGUgb2xkIGVmZmVjdHMgZGF0YVxuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuXHRcdFx0XHRcdGlmIChrZXkubWF0Y2goL15lY1xcLnN0b3JhZ2VcXC4vKSkge1xuXHRcdFx0XHRcdFx0ZGF0YVtrZXldID0gaW5zdC5fbWFpbkRpdi5jc3Moa2V5LnJlcGxhY2UoL2VjXFwuc3RvcmFnZVxcLi8sICcnKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGluc3QuX21haW5EaXYuZGF0YShkYXRhKS5zaG93KHNob3dBbmltLFxuXHRcdFx0XHRcdGluc3Qub3B0aW9ucy5zaG93T3B0aW9ucyB8fCB7fSwgZHVyYXRpb24sIHBvc3RQcm9jZXNzKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRpbnN0Ll9tYWluRGl2W3Nob3dBbmltIHx8ICdzaG93J10oKHNob3dBbmltID8gZHVyYXRpb24gOiAwKSwgcG9zdFByb2Nlc3MpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGluc3QuX2lucHV0WzBdLnR5cGUgIT09ICdoaWRkZW4nKSB7XG5cdFx0XHRcdGluc3QuX2lucHV0WzBdLmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0XHRwbHVnaW4uX2N1ckluc3QgPSBpbnN0O1xuXHRcdH0sXG5cblx0XHQvKiogR2VuZXJhdGUgdGhlIGtleXBhZCBjb250ZW50LlxuXHRcdFx0QHByaXZhdGVcblx0XHRcdEBwYXJhbSB7b2JqZWN0fSBpbnN0IFRoZSBpbnN0YW5jZSBzZXR0aW5ncy4gKi9cblx0XHRfdXBkYXRlS2V5cGFkOiBmdW5jdGlvbihpbnN0KSB7XG5cdFx0XHRpbnN0Ll9tYWluRGl2LmVtcHR5KCkuYXBwZW5kKHRoaXMuX2dlbmVyYXRlSFRNTChpbnN0KSkuXG5cdFx0XHRcdHJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoaW5zdC5vcHRpb25zLmtleXBhZENsYXNzICtcblx0XHRcdFx0XHQoaW5zdC5vcHRpb25zLnVzZVRoZW1lUm9sbGVyID8gJyB1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktY29ybmVyLWFsbCB1aS1zaGFkb3cnIDogJycpICtcblx0XHRcdFx0XHQoaW5zdC5vcHRpb25zLmlzUlRMID8gJyAnICsgdGhpcy5fcnRsQ2xhc3MgOiAnJykgKyAnICcgK1xuXHRcdFx0XHRcdChpbnN0Ll9pbmxpbmUgPyB0aGlzLl9pbmxpbmVDbGFzcyA6IHRoaXMuX21haW5EaXZDbGFzcykpO1xuXHRcdFx0aWYgKHR5cGVvZiBpbnN0Lm9wdGlvbnMuYmVmb3JlU2hvdyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdGluc3Qub3B0aW9ucy5iZWZvcmVTaG93LmFwcGx5KChpbnN0Ll9pbnB1dCA/IGluc3QuX2lucHV0WzBdIDogbnVsbCksXG5cdFx0XHRcdFx0W2luc3QuX21haW5EaXYsIGluc3RdKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqIENoZWNrIHBvc2l0aW9uaW5nIHRvIHJlbWFpbiBvbiBzY3JlZW4uXG5cdFx0XHRAcHJpdmF0ZVxuXHRcdFx0QHBhcmFtIHtvYmplY3R9IGluc3QgVGhlIGluc3RhbmNlIHNldHRpbmdzLlxuXHRcdFx0QHBhcmFtIHtvYmplY3R9IG9mZnNldCBUaGUgY3VycmVudCBvZmZzZXQuXG5cdFx0XHRAcGFyYW0ge2Jvb2xlYW59IGlzRml4ZWQgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIHRleHQgZmllbGQgaXMgZml4ZWQgaW4gcG9zaXRpb24uXG5cdFx0XHRAcmV0dXJuIHtvYmplY3R9IFRoZSB1cGRhdGVkIG9mZnNldC4gKi9cblx0XHRfY2hlY2tPZmZzZXQ6IGZ1bmN0aW9uKGluc3QsIG9mZnNldCwgaXNGaXhlZCkge1xuXHRcdFx0dmFyIHBvcyA9IGluc3QuX2lucHV0ID8gdGhpcy5fZmluZFBvcyhpbnN0Ll9pbnB1dFswXSkgOiBudWxsO1xuXHRcdFx0dmFyIGJyb3dzZXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcblx0XHRcdHZhciBicm93c2VySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cdFx0XHR2YXIgc2Nyb2xsWCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcblx0XHRcdHZhciBzY3JvbGxZID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcblx0XHRcdC8vIHJlY2FsY3VsYXRlIHdpZHRoIGFzIG90aGVyd2lzZSBzZXQgdG8gMTAwJVxuXHRcdFx0dmFyIHdpZHRoID0gMDtcblx0XHRcdGluc3QuX21haW5EaXYuZmluZCgnOm5vdChkaXYpJykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0d2lkdGggPSBNYXRoLm1heCh3aWR0aCwgdGhpcy5vZmZzZXRMZWZ0ICsgJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpKTtcblx0XHRcdH0pO1xuXHRcdFx0aW5zdC5fbWFpbkRpdi5jc3MoJ3dpZHRoJywgKHdpZHRoICsgMSkgICsgJ3B4Jyk7XG5cdFx0XHQvLyByZXBvc2l0aW9uIGtleXBhZCBwYW5lbCBob3Jpem9udGFsbHkgaWYgb3V0c2lkZSB0aGUgYnJvd3NlciB3aW5kb3dcblx0XHRcdGlmIChpbnN0Lm9wdGlvbnMuaXNSVEwgfHxcblx0XHRcdFx0XHQob2Zmc2V0LmxlZnQgKyBpbnN0Ll9tYWluRGl2Lm91dGVyV2lkdGgoKSAtIHNjcm9sbFgpID4gYnJvd3NlcldpZHRoKSB7XG5cdFx0XHRcdG9mZnNldC5sZWZ0ID0gTWF0aC5tYXgoKGlzRml4ZWQgPyAwIDogc2Nyb2xsWCksXG5cdFx0XHRcdFx0cG9zWzBdICsgKGluc3QuX2lucHV0ID8gaW5zdC5faW5wdXQub3V0ZXJXaWR0aCgpIDogMCkgLVxuXHRcdFx0XHRcdChpc0ZpeGVkID8gc2Nyb2xsWCA6IDApIC0gaW5zdC5fbWFpbkRpdi5vdXRlcldpZHRoKCkpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG9mZnNldC5sZWZ0ID0gTWF0aC5tYXgoKGlzRml4ZWQgPyAwIDogc2Nyb2xsWCksIG9mZnNldC5sZWZ0IC0gKGlzRml4ZWQgPyBzY3JvbGxYIDogMCkpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gcmVwb3NpdGlvbiBrZXlwYWQgcGFuZWwgdmVydGljYWxseSBpZiBvdXRzaWRlIHRoZSBicm93c2VyIHdpbmRvd1xuXHRcdFx0aWYgKChvZmZzZXQudG9wICsgaW5zdC5fbWFpbkRpdi5vdXRlckhlaWdodCgpIC0gc2Nyb2xsWSkgPiBicm93c2VySGVpZ2h0KSB7XG5cdFx0XHRcdG9mZnNldC50b3AgPSBNYXRoLm1heCgoaXNGaXhlZCA/IDAgOiBzY3JvbGxZKSxcblx0XHRcdFx0XHRwb3NbMV0gLSAoaXNGaXhlZCA/IHNjcm9sbFkgOiAwKSAtIGluc3QuX21haW5EaXYub3V0ZXJIZWlnaHQoKSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0b2Zmc2V0LnRvcCA9IE1hdGgubWF4KChpc0ZpeGVkID8gMCA6IHNjcm9sbFkpLCBvZmZzZXQudG9wIC0gKGlzRml4ZWQgPyBzY3JvbGxZIDogMCkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9mZnNldDtcblx0XHR9LFxuXG5cdFx0LyoqIEZpbmQgYW4gb2JqZWN0J3MgcG9zaXRpb24gb24gdGhlIHNjcmVlbi5cblx0XHRcdEBwcml2YXRlXG5cdFx0XHRAcGFyYW0ge0VsZW1lbnR9IG9iaiBUaGUgZWxlbWVudCB0byBmaW5kIHRoZSBwb3NpdGlvbiBmb3IuXG5cdFx0XHRAcmV0dXJuIHtudW1iZXJbXX0gVGhlIGVsZW1lbnQncyBwb3NpdGlvbi4gKi9cblx0XHRfZmluZFBvczogZnVuY3Rpb24ob2JqKSB7XG5cdFx0XHR3aGlsZSAob2JqICYmIChvYmoudHlwZSA9PT0gJ2hpZGRlbicgfHwgb2JqLm5vZGVUeXBlICE9PSAxKSkge1xuXHRcdFx0XHRvYmogPSBvYmoubmV4dFNpYmxpbmc7XG5cdFx0XHR9XG5cdFx0XHR2YXIgcG9zaXRpb24gPSAkKG9iaikub2Zmc2V0KCk7XG5cdFx0XHRyZXR1cm4gW3Bvc2l0aW9uLmxlZnQsIHBvc2l0aW9uLnRvcF07XG5cdFx0fSxcblxuXHRcdC8qKiBIaWRlIHRoZSBrZXlwYWQgZnJvbSB2aWV3LlxuXHRcdFx0QHBhcmFtIHtFbGVtZW50fSBlbGVtIFRoZSB0ZXh0IGZpZWxkIGF0dGFjaGVkIHRvIHRoZSBrZXlwYWQuXG5cdFx0XHRAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtkdXJhdGlvbl0gVGhlIGR1cmF0aW9uIG92ZXIgd2hpY2ggdG8gY2xvc2UgdGhlIGtleXBhZCxcblx0XHRcdFx0YXMgYSBuYW1lZCB0aW1lIG9yIGluIG1pbGxpc2Vjb25kcy5cblx0XHRcdEBleGFtcGxlICQoc2VsZWN0b3IpLmtleXBhZCgnaGlkZScpICovXG5cdFx0aGlkZTogZnVuY3Rpb24oZWxlbSwgZHVyYXRpb24pIHtcblx0XHRcdHZhciBpbnN0ID0gdGhpcy5fY3VySW5zdDtcblx0XHRcdGlmICghaW5zdCB8fCAoZWxlbSAmJiBpbnN0ICE9PSAkLmRhdGEoZWxlbSwgdGhpcy5uYW1lKSkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuX2tleXBhZFNob3dpbmcpIHtcblx0XHRcdFx0aW5zdC5fbWFpbkRpdi5zdG9wKHRydWUsIHRydWUpO1xuXHRcdFx0XHRkdXJhdGlvbiA9ICh0eXBlb2YgZHVyYXRpb24gIT09ICd1bmRlZmluZWQnICYmIGR1cmF0aW9uICE9PSBudWxsID8gZHVyYXRpb24gOiBpbnN0Lm9wdGlvbnMuZHVyYXRpb24pO1xuXHRcdFx0XHR2YXIgc2hvd0FuaW0gPSBpbnN0Lm9wdGlvbnMuc2hvd0FuaW07XG5cdFx0XHRcdGlmICgkLmVmZmVjdHMgJiYgKCQuZWZmZWN0c1tzaG93QW5pbV0gfHwgKCQuZWZmZWN0cy5lZmZlY3QgJiYgJC5lZmZlY3RzLmVmZmVjdFtzaG93QW5pbV0pKSkge1xuXHRcdFx0XHRcdGluc3QuX21haW5EaXYuaGlkZShzaG93QW5pbSwgaW5zdC5vcHRpb25zLnNob3dPcHRpb25zIHx8IHt9LCBkdXJhdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0aW5zdC5fbWFpbkRpdlsoc2hvd0FuaW0gPT09ICdzbGlkZURvd24nID8gJ3NsaWRlVXAnIDpcblx0XHRcdFx0XHRcdChzaG93QW5pbSA9PT0gJ2ZhZGVJbicgPyAnZmFkZU91dCcgOiAnaGlkZScpKV0oc2hvd0FuaW0gPyBkdXJhdGlvbiA6IDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGluc3Qub3B0aW9ucy5vbkNsb3NlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0aW5zdC5vcHRpb25zLm9uQ2xvc2UuYXBwbHkoKGluc3QuX2lucHV0ID8gaW5zdC5faW5wdXRbMF0gOiBudWxsKSwgIC8vIHRyaWdnZXIgY3VzdG9tIGNhbGxiYWNrXG5cdFx0XHRcdFx0W2luc3QuX2lucHV0LnZhbCgpLCBpbnN0XSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5fa2V5cGFkU2hvd2luZykge1xuXHRcdFx0XHR0aGlzLl9rZXlwYWRTaG93aW5nID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuX2xhc3RGaWVsZCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaW5zdC5faW5saW5lKSB7XG5cdFx0XHRcdGluc3QuX2lucHV0LnZhbCgnJyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jdXJJbnN0ID0gbnVsbDtcblx0XHR9LFxuXG5cdFx0LyoqIEhhbmRsZSBrZXlzdHJva2VzLlxuXHRcdFx0QHByaXZhdGVcblx0XHRcdEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBrZXkgZXZlbnQuICovXG5cdFx0X2RvS2V5RG93bjogZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdGlmIChldmVudC5rZXlDb2RlID09PSA5KSB7IC8vIFRhYiBvdXRcblx0XHRcdFx0cGx1Z2luLm1haW5EaXYuc3RvcCh0cnVlLCB0cnVlKTtcblx0XHRcdFx0cGx1Z2luLmhpZGUoKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqIENsb3NlIGtleXBhZCBpZiBjbGlja2VkIGVsc2V3aGVyZS5cblx0XHRcdEBwcml2YXRlXG5cdFx0XHRAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgbW91c2VjbGljayBkZXRhaWxzLiAqL1xuXHRcdF9jaGVja0V4dGVybmFsQ2xpY2s6IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRpZiAoIXBsdWdpbi5fY3VySW5zdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuXHRcdFx0aWYgKHRhcmdldC5jbG9zZXN0KCcuJyArIHBsdWdpbi5fbWFpbkRpdkNsYXNzKS5sZW5ndGggPT09IDAgJiZcblx0XHRcdFx0XHQhdGFyZ2V0Lmhhc0NsYXNzKHBsdWdpbi5fZ2V0TWFya2VyKCkpICYmXG5cdFx0XHRcdFx0dGFyZ2V0LmNsb3Nlc3QoJy4nICsgcGx1Z2luLl90cmlnZ2VyQ2xhc3MpLmxlbmd0aCA9PT0gMCAmJlxuXHRcdFx0XHRcdHBsdWdpbi5fa2V5cGFkU2hvd2luZykge1xuXHRcdFx0XHRwbHVnaW4uaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKiogVG9nZ2xlIGJldHdlZW4gdXBwZXIgYW5kIGxvd2VyIGNhc2UuXG5cdFx0XHRAcHJpdmF0ZVxuXHRcdFx0QHBhcmFtIHtvYmplY3R9IGluc3QgVGhlIGluc3RhbmNlIHNldHRpbmdzLiAqL1xuXHRcdF9zaGlmdEtleXBhZDogZnVuY3Rpb24oaW5zdCkge1xuXHRcdFx0aW5zdC51Y2FzZSA9ICFpbnN0LnVjYXNlO1xuXHRcdFx0dGhpcy5fdXBkYXRlS2V5cGFkKGluc3QpO1xuXHRcdFx0aW5zdC5faW5wdXQudHJpZ2dlcignZm9jdXMnKTsgLy8gZm9yIGZ1cnRoZXIgdHlwaW5nXG5cdFx0fSxcblxuXHRcdC8qKiBFcmFzZSB0aGUgdGV4dCBmaWVsZC5cblx0XHRcdEBwcml2YXRlXG5cdFx0XHRAcGFyYW0ge29iamVjdH0gaW5zdCBUaGUgaW5zdGFuY2Ugc2V0dGluZ3MuICovXG5cdFx0X2NsZWFyVmFsdWU6IGZ1bmN0aW9uKGluc3QpIHtcblx0XHRcdHRoaXMuX3NldFZhbHVlKGluc3QsICcnLCAwKTtcblx0XHRcdHRoaXMuX25vdGlmeUtleXByZXNzKGluc3QsIHBsdWdpbi5ERUwpO1xuXHRcdFx0aW5zdC5faW5wdXQudHJpZ2dlcignZm9jdXMnKTsgLy8gZm9yIGZ1cnRoZXIgdHlwaW5nXG5cdFx0fSxcblxuXHRcdC8qKiBFcmFzZSB0aGUgbGFzdCBjaGFyYWN0ZXIuXG5cdFx0XHRAcHJpdmF0ZVxuXHRcdFx0QHBhcmFtIHtvYmplY3R9IGluc3QgVGhlIGluc3RhbmNlIHNldHRpbmdzLiAqL1xuXHRcdF9iYWNrVmFsdWU6IGZ1bmN0aW9uKGluc3QpIHtcblx0XHRcdHZhciBlbGVtID0gaW5zdC5faW5wdXRbMF07XG5cdFx0XHR2YXIgdmFsdWUgPSBpbnN0Ll9pbnB1dC52YWwoKTtcblx0XHRcdHZhciByYW5nZSA9IFt2YWx1ZS5sZW5ndGgsIHZhbHVlLmxlbmd0aF07XG5cdFx0XHRyYW5nZSA9IChpbnN0Ll9pbnB1dC5wcm9wKCdyZWFkb25seScpIHx8IGluc3QuX2lucHV0LnByb3AoJ2Rpc2FibGVkJykgPyByYW5nZSA6XG5cdFx0XHRcdChlbGVtLnNldFNlbGVjdGlvblJhbmdlIC8qIE1vemlsbGEgKi8gPyBbZWxlbS5zZWxlY3Rpb25TdGFydCwgZWxlbS5zZWxlY3Rpb25FbmRdIDpcblx0XHRcdFx0KGVsZW0uY3JlYXRlVGV4dFJhbmdlIC8qIElFICovID8gdGhpcy5fZ2V0SUVSYW5nZShlbGVtKSA6IHJhbmdlKSkpO1xuXHRcdFx0dGhpcy5fc2V0VmFsdWUoaW5zdCwgKHZhbHVlLmxlbmd0aCA9PT0gMCA/ICcnIDpcblx0XHRcdFx0dmFsdWUuc3Vic3RyKDAsIHJhbmdlWzBdIC0gMSkgKyB2YWx1ZS5zdWJzdHIocmFuZ2VbMV0pKSwgcmFuZ2VbMF0gLSAxKTtcblx0XHRcdHRoaXMuX25vdGlmeUtleXByZXNzKGluc3QsIHBsdWdpbi5CUyk7XG5cdFx0XHRpbnN0Ll9pbnB1dC50cmlnZ2VyKCdmb2N1cycpOyAvLyBmb3IgZnVydGhlciB0eXBpbmdcblx0XHR9LFxuXG5cdFx0LyoqIFVwZGF0ZSB0aGUgdGV4dCBmaWVsZCB3aXRoIHRoZSBzZWxlY3RlZCB2YWx1ZS5cblx0XHRcdEBwcml2YXRlXG5cdFx0XHRAcGFyYW0ge29iamVjdH0gaW5zdCBUaGUgaW5zdGFuY2Ugc2V0dGluZ3MuXG5cdFx0XHRAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIG5ldyBjaGFyYWN0ZXIgdG8gYWRkLiAqL1xuXHRcdF9zZWxlY3RWYWx1ZTogZnVuY3Rpb24oaW5zdCwgdmFsdWUpIHtcblx0XHRcdHRoaXMuaW5zZXJ0VmFsdWUoaW5zdC5faW5wdXRbMF0sIHZhbHVlKTtcblx0XHRcdHRoaXMuX3NldFZhbHVlKGluc3QsIGluc3QuX2lucHV0LnZhbCgpKTtcblx0XHRcdHRoaXMuX25vdGlmeUtleXByZXNzKGluc3QsIHZhbHVlKTtcblx0XHR9LFxuXG5cdFx0LyoqIFVwZGF0ZSB0aGUgdGV4dCBmaWVsZCB3aXRoIHRoZSBzZWxlY3RlZCB2YWx1ZS5cblx0XHRcdEBwYXJhbSB7c3RyaW5nfEVsZW1lbnR8alF1ZXJ5fSBpbnB1dCBUaGUgalF1ZXJ5IHNlbGVjdG9yLCBpbnB1dCBmaWVsZCwgb3IgalF1ZXJ5IGNvbGxlY3Rpb24uXG5cdFx0XHRAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIG5ldyBjaGFyYWN0ZXIgdG8gYWRkLlxuXHRcdFx0QGV4YW1wbGUgJC5rZXlwYWQuaW5zZXJ0VmFsdWUoZmllbGQsICdhYmMnKTsgKi9cblx0XHRpbnNlcnRWYWx1ZTogZnVuY3Rpb24oaW5wdXQsIHZhbHVlKSB7XG5cdFx0XHRpbnB1dCA9IChpbnB1dC5qcXVlcnkgPyBpbnB1dCA6ICQoaW5wdXQpKTtcblx0XHRcdHZhciBlbGVtID0gaW5wdXRbMF07XG5cdFx0XHR2YXIgbmV3VmFsdWUgPSBpbnB1dC52YWwoKTtcblx0XHRcdHZhciByYW5nZSA9IFtuZXdWYWx1ZS5sZW5ndGgsIG5ld1ZhbHVlLmxlbmd0aF07XG5cdFx0XHRyYW5nZSA9IChpbnB1dC5hdHRyKCdyZWFkb25seScpIHx8IGlucHV0LmF0dHIoJ2Rpc2FibGVkJykgPyByYW5nZSA6XG5cdFx0XHRcdChlbGVtLnNldFNlbGVjdGlvblJhbmdlIC8qIE1vemlsbGEgKi8gPyBbZWxlbS5zZWxlY3Rpb25TdGFydCwgZWxlbS5zZWxlY3Rpb25FbmRdIDpcblx0XHRcdFx0KGVsZW0uY3JlYXRlVGV4dFJhbmdlIC8qIElFICovID8gdGhpcy5fZ2V0SUVSYW5nZShlbGVtKSA6IHJhbmdlKSkpO1xuXHRcdFx0aW5wdXQudmFsKG5ld1ZhbHVlLnN1YnN0cigwLCByYW5nZVswXSkgKyB2YWx1ZSArIG5ld1ZhbHVlLnN1YnN0cihyYW5nZVsxXSkpO1xuXHRcdFx0dmFyIHBvcyA9IHJhbmdlWzBdICsgdmFsdWUubGVuZ3RoO1xuXHRcdFx0aWYgKGlucHV0LmlzKCc6dmlzaWJsZScpKSB7XG5cdFx0XHRcdGlucHV0LnRyaWdnZXIoJ2ZvY3VzJyk7IC8vIGZvciBmdXJ0aGVyIHR5cGluZ1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVsZW0uc2V0U2VsZWN0aW9uUmFuZ2UpIHsgLy8gTW96aWxsYVxuXHRcdFx0XHRpZiAoaW5wdXQuaXMoJzp2aXNpYmxlJykpIHtcblx0XHRcdFx0XHRlbGVtLnNldFNlbGVjdGlvblJhbmdlKHBvcywgcG9zKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoZWxlbS5jcmVhdGVUZXh0UmFuZ2UpIHsgLy8gSUVcblx0XHRcdFx0cmFuZ2UgPSBlbGVtLmNyZWF0ZVRleHRSYW5nZSgpO1xuXHRcdFx0XHRyYW5nZS5tb3ZlKCdjaGFyYWN0ZXInLCBwb3MpO1xuXHRcdFx0XHRyYW5nZS5zZWxlY3QoKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqIEdldCB0aGUgY29vcmRpbmF0ZXMgZm9yIHRoZSBzZWxlY3RlZCBhcmVhIGluIHRoZSB0ZXh0IGZpZWxkIGluIElFLlxuXHRcdFx0QHByaXZhdGVcblx0XHRcdEBwYXJhbSB7RWxlbWVudH0gZWxlbSBUaGUgdGFyZ2V0IHRleHQgZmllbGQuXG5cdFx0XHRAcmV0dXJuIHtudW1iZXJbXX0gVGhlIHN0YXJ0IGFuZCBlbmQgcG9zaXRpb25zIG9mIHRoZSBzZWxlY3Rpb24uICovXG5cdFx0X2dldElFUmFuZ2U6IGZ1bmN0aW9uKGVsZW0pIHtcblx0XHRcdGVsZW0udHJpZ2dlcignZm9jdXMnKTtcblx0XHRcdHZhciBzZWxlY3Rpb25SYW5nZSA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLmR1cGxpY2F0ZSgpO1xuXHRcdFx0Ly8gVXNlIHR3byByYW5nZXM6IGJlZm9yZSBhbmQgc2VsZWN0aW9uXG5cdFx0XHR2YXIgYmVmb3JlUmFuZ2UgPSB0aGlzLl9nZXRJRVRleHRSYW5nZShlbGVtKTtcblx0XHRcdGJlZm9yZVJhbmdlLnNldEVuZFBvaW50KCdFbmRUb1N0YXJ0Jywgc2VsZWN0aW9uUmFuZ2UpO1xuXHRcdFx0Ly8gQ2hlY2sgZWFjaCByYW5nZSBmb3IgdHJpbW1lZCBuZXdsaW5lcyBieSBzaHJpbmtpbmcgdGhlIHJhbmdlIGJ5IG9uZVxuXHRcdFx0Ly8gY2hhcmFjdGVyIGFuZCBzZWVpbmcgaWYgdGhlIHRleHQgcHJvcGVydHkgaGFzIGNoYW5nZWQuIElmIGl0IGhhcyBub3Rcblx0XHRcdC8vIGNoYW5nZWQgdGhlbiB3ZSBrbm93IHRoYXQgSUUgaGFzIHRyaW1tZWQgYSBcXHJcXG4gZnJvbSB0aGUgZW5kLlxuXHRcdFx0dmFyIGNoZWNrQ1JMRiA9IGZ1bmN0aW9uKHJhbmdlKSB7XG5cdFx0XHRcdHZhciBvcmlnVGV4dCA9IHJhbmdlLnRleHQ7XG5cdFx0XHRcdHZhciB0ZXh0ID0gb3JpZ1RleHQ7XG5cdFx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdFx0aWYgKHJhbmdlLmNvbXBhcmVFbmRQb2ludHMoJ1N0YXJ0VG9FbmQnLCByYW5nZSkgPT09IDApIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHJhbmdlLm1vdmVFbmQoJ2NoYXJhY3RlcicsIC0xKTtcblx0XHRcdFx0XHRcdGlmIChyYW5nZS50ZXh0ID09PSBvcmlnVGV4dCkge1xuXHRcdFx0XHRcdFx0XHR0ZXh0ICs9ICdcXHJcXG4nO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGV4dDtcblx0XHRcdH07XG5cdFx0XHR2YXIgYmVmb3JlVGV4dCA9IGNoZWNrQ1JMRihiZWZvcmVSYW5nZSk7XG5cdFx0XHR2YXIgc2VsZWN0aW9uVGV4dCA9IGNoZWNrQ1JMRihzZWxlY3Rpb25SYW5nZSk7XG5cdFx0XHRyZXR1cm4gW2JlZm9yZVRleHQubGVuZ3RoLCBiZWZvcmVUZXh0Lmxlbmd0aCArIHNlbGVjdGlvblRleHQubGVuZ3RoXTtcblx0XHR9LFxuXG5cdFx0LyoqIENyZWF0ZSBhbiBJRSB0ZXh0IHJhbmdlIGZvciB0aGUgdGV4dCBmaWVsZC5cblx0XHRcdEBwcml2YXRlXG5cdFx0XHRAcGFyYW0ge0VsZW1lbnR9IGVsZW0gVGhlIHRhcmdldCB0ZXh0IGZpZWxkLlxuXHRcdFx0QHJldHVybiB7b2JqZWN0fSBUaGUgY29ycmVzcG9uZGluZyB0ZXh0IHJhbmdlLiAqL1xuXHRcdF9nZXRJRVRleHRSYW5nZTogZnVuY3Rpb24oZWxlbSkge1xuXHRcdFx0dmFyIGlzSW5wdXQgPSAoZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKTtcblx0XHRcdHZhciByYW5nZSA9IChpc0lucHV0ID8gZWxlbS5jcmVhdGVUZXh0UmFuZ2UoKSA6IGRvY3VtZW50LmJvZHkuY3JlYXRlVGV4dFJhbmdlKCkpO1xuXHRcdFx0aWYgKCFpc0lucHV0KSB7XG5cdFx0XHRcdHJhbmdlLm1vdmVUb0VsZW1lbnRUZXh0KGVsZW0pOyAvLyBTZWxlY3RzIGFsbCB0aGUgdGV4dCBmb3IgYSB0ZXh0YXJlYVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJhbmdlO1xuXHRcdH0sXG5cblx0XHQvKiogU2V0IHRoZSB0ZXh0IGZpZWxkIHRvIHRoZSBzZWxlY3RlZCB2YWx1ZSwgYW5kIHRyaWdnZXIgYW55IG9uIGNoYW5nZSBldmVudC5cblx0XHRcdEBwcml2YXRlXG5cdFx0XHRAcGFyYW0ge29iamVjdH0gaW5zdCBUaGUgaW5zdGFuY2Ugc2V0dGluZ3MuXG5cdFx0XHRAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIHRleHQgZmllbGQuICovXG5cdFx0X3NldFZhbHVlOiBmdW5jdGlvbihpbnN0LCB2YWx1ZSkge1xuXHRcdFx0dmFyIG1heGxlbiA9IGluc3QuX2lucHV0LmF0dHIoJ21heGxlbmd0aCcpO1xuXHRcdFx0aWYgKG1heGxlbiA+IC0xKSB7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWUuc3Vic3RyKDAsIG1heGxlbik7XG5cdFx0XHR9XG5cdFx0XHRpbnN0Ll9pbnB1dC52YWwodmFsdWUpO1xuXHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdGluc3QuX2lucHV0LnRyaWdnZXIoJ2NoYW5nZScpOyAvLyBmaXJlIHRoZSBjaGFuZ2UgZXZlbnRcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqIE5vdGlmeSBjbGllbnRzIG9mIGEga2V5cHJlc3MuXG5cdFx0XHRAcHJpdmF0ZVxuXHRcdFx0QHBhcmFtIHtvYmplY3R9IGluc3QgVGhlIGluc3RhbmNlIHNldHRpbmdzLlxuXHRcdFx0QHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgY2hhcmFjdGVyIHByZXNzZWQuICovXG5cdFx0X25vdGlmeUtleXByZXNzOiBmdW5jdGlvbihpbnN0LCBrZXkpIHtcblx0XHRcdGlmICh0eXBlb2YgaW5zdC5vcHRpb25zLm9uS2V5cHJlc3MgPT09IFwiZnVuY3Rpb25cIikgeyAvLyB0cmlnZ2VyIGN1c3RvbSBjYWxsYmFja1xuXHRcdFx0XHRpbnN0Lm9wdGlvbnMub25LZXlwcmVzcy5hcHBseSgoaW5zdC5faW5wdXQgPyBpbnN0Ll9pbnB1dFswXSA6IG51bGwpLFxuXHRcdFx0XHRcdFtrZXksIGluc3QuX2lucHV0LnZhbCgpLCBpbnN0XSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKiBHZW5lcmF0ZSB0aGUgSFRNTCBmb3IgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGtleXBhZC5cblx0XHRcdEBwcml2YXRlXG5cdFx0XHRAcGFyYW0ge29iamVjdH0gaW5zdCBUaGUgaW5zdGFuY2Ugc2V0dGluZ3MuXG5cdFx0XHRAcmV0dXJuIHtqUXVlcnl9IFRoZSBIVE1MIGZvciB0aGlzIGtleXBhZC4gKi9cblx0XHRfZ2VuZXJhdGVIVE1MOiBmdW5jdGlvbihpbnN0KSB7XG5cdFx0XHR2YXIgaHRtbCA9ICghaW5zdC5vcHRpb25zLnByb21wdCA/ICcnIDogJzxkaXYgY2xhc3M9XCInICsgdGhpcy5fcHJvbXB0Q2xhc3MgK1xuXHRcdFx0XHQoaW5zdC5vcHRpb25zLnVzZVRoZW1lUm9sbGVyID8gJyB1aS13aWRnZXQtaGVhZGVyIHVpLWNvcm5lci1hbGwnIDogJycpICsgJ1wiPicgK1xuXHRcdFx0XHRpbnN0Lm9wdGlvbnMucHJvbXB0ICsgJzwvZGl2PicpO1xuXHRcdFx0dmFyIGxheW91dCA9IHRoaXMuX3JhbmRvbWlzZUxheW91dChpbnN0KTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGF5b3V0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGh0bWwgKz0gJzxkaXYgY2xhc3M9XCInICsgdGhpcy5fcm93Q2xhc3MgKyAnXCI+Jztcblx0XHRcdFx0dmFyIGtleXMgPSBsYXlvdXRbaV0uc3BsaXQoaW5zdC5vcHRpb25zLnNlcGFyYXRvcik7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwga2V5cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGlmIChpbnN0LnVjYXNlKSB7XG5cdFx0XHRcdFx0XHRrZXlzW2pdID0gaW5zdC5vcHRpb25zLnRvVXBwZXIoa2V5c1tqXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBrZXlEZWYgPSB0aGlzLl9zcGVjaWFsS2V5c1trZXlzW2pdLmNoYXJDb2RlQXQoMCldO1xuXHRcdFx0XHRcdGlmIChrZXlEZWYpIHtcblx0XHRcdFx0XHRcdGh0bWwgKz0gKGtleURlZi5hY3Rpb24gPyAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCInICtcblx0XHRcdFx0XHRcdFx0dGhpcy5fc3BlY2lhbENsYXNzICsgJyAnICsgdGhpcy5fbmFtZVByZWZpeENsYXNzICsga2V5RGVmLm5hbWUgK1xuXHRcdFx0XHRcdFx0XHQoaW5zdC5vcHRpb25zLnVzZVRoZW1lUm9sbGVyID8gJyB1aS1jb3JuZXItYWxsIHVpLXN0YXRlLWRlZmF1bHQnICtcblx0XHRcdFx0XHRcdFx0KGtleURlZi5ub0hpZ2hsaWdodCA/ICcnIDogJyB1aS1zdGF0ZS1oaWdobGlnaHQnKSA6ICcnKSArXG5cdFx0XHRcdFx0XHRcdCdcIiB0aXRsZT1cIicgKyBpbnN0Lm9wdGlvbnNba2V5RGVmLm5hbWUgKyAnU3RhdHVzJ10gKyAnXCI+JyArXG5cdFx0XHRcdFx0XHRcdChpbnN0Lm9wdGlvbnNba2V5RGVmLm5hbWUgKyAnVGV4dCddIHx8ICcmIzE2MDsnKSArICc8L2J1dHRvbj4nIDpcblx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCInICsgdGhpcy5fbmFtZVByZWZpeENsYXNzICsga2V5RGVmLm5hbWUgKyAnXCI+PC9kaXY+Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0aHRtbCArPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCInICsgdGhpcy5fa2V5Q2xhc3MgK1xuXHRcdFx0XHRcdFx0XHQoaW5zdC5vcHRpb25zLnVzZVRoZW1lUm9sbGVyID8gJyB1aS1jb3JuZXItYWxsIHVpLXN0YXRlLWRlZmF1bHQnIDogJycpICtcblx0XHRcdFx0XHRcdFx0J1wiPicgKyAoa2V5c1tqXSA9PT0gJyAnID8gJyYjMTYwOycgOiBrZXlzW2pdKSArICc8L2J1dHRvbj4nO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRodG1sICs9ICc8L2Rpdj4nO1xuXHRcdFx0fVxuXHRcdFx0aHRtbCA9ICQoaHRtbCk7XG5cdFx0XHR2YXIgdGhpc0luc3QgPSBpbnN0O1xuXHRcdFx0dmFyIGFjdGl2ZUNsYXNzZXMgPSB0aGlzLl9rZXlEb3duQ2xhc3MgK1xuXHRcdFx0XHQoaW5zdC5vcHRpb25zLnVzZVRoZW1lUm9sbGVyID8gJyB1aS1zdGF0ZS1hY3RpdmUnIDogJycpO1xuXG5cdFx0XHQvLyBQRiAjMzI1NVxuXHRcdFx0dmFyIGJ1dHRvbnMgPSBodG1sLmZpbmQoJ2J1dHRvbicpO1xuXHRcdFx0UHJpbWVGYWNlcy5za2luQnV0dG9uKGJ1dHRvbnMpO1xuXG5cdFx0XHRidXR0b25zLm9uKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uKCkgeyAkKHRoaXMpLmFkZENsYXNzKGFjdGl2ZUNsYXNzZXMpOyB9KS5cblx0XHRcdFx0b24oXCJtb3VzZXVwXCIsIGZ1bmN0aW9uKCkgeyAkKHRoaXMpLnJlbW92ZUNsYXNzKGFjdGl2ZUNsYXNzZXMpOyB9KS5cblx0XHRcdFx0b24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpIHsgJCh0aGlzKS5yZW1vdmVDbGFzcyhhY3RpdmVDbGFzc2VzKTsgfSkuXG5cdFx0XHRcdGZpbHRlcignLicgKyB0aGlzLl9rZXlDbGFzcykub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgcGx1Z2luLl9zZWxlY3RWYWx1ZSh0aGlzSW5zdCwgJCh0aGlzKS50ZXh0KCkpOyB9KTtcblx0XHRcdCQuZWFjaCh0aGlzLl9zcGVjaWFsS2V5cywgZnVuY3Rpb24oaSwga2V5RGVmKSB7XG5cdFx0XHRcdGh0bWwuZmluZCgnLicgKyBwbHVnaW4uX25hbWVQcmVmaXhDbGFzcyArIGtleURlZi5uYW1lKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGtleURlZi5hY3Rpb24uYXBwbHkodGhpc0luc3QuX2lucHV0LCBbdGhpc0luc3RdKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBodG1sO1xuXHRcdH0sXG5cblx0XHQvKiogQ2hlY2sgd2hldGhlciBjaGFyYWN0ZXJzIHNob3VsZCBiZSByYW5kb21pc2VkLCBhbmQsIGlmIHNvLCBwcm9kdWNlIHRoZSByYW5kb21pc2VkIGxheW91dC5cblx0XHRcdEBwcml2YXRlXG5cdFx0XHRAcGFyYW0ge29iamVjdH0gaW5zdCBUaGUgaW5zdGFuY2Ugc2V0dGluZ3MuXG5cdFx0XHRAcmV0dXJuIHtzdHJpbmdbXX0gVGhlIGxheW91dCB3aXRoIGFueSByZXF1ZXN0ZWQgcmFuZG9taXNhdGlvbnMgYXBwbGllZC4gKi9cblx0XHRfcmFuZG9taXNlTGF5b3V0OiBmdW5jdGlvbihpbnN0KSB7XG5cdFx0XHRpZiAoIWluc3Qub3B0aW9ucy5yYW5kb21pc2VOdW1lcmljICYmICFpbnN0Lm9wdGlvbnMucmFuZG9taXNlQWxwaGFiZXRpYyAmJlxuXHRcdFx0XHRcdCFpbnN0Lm9wdGlvbnMucmFuZG9taXNlT3RoZXIgJiYgIWluc3Qub3B0aW9ucy5yYW5kb21pc2VBbGwpIHtcblx0XHRcdFx0cmV0dXJuIGluc3Qub3B0aW9ucy5sYXlvdXQ7XG5cdFx0XHR9XG5cdFx0XHR2YXIgbnVtZXJpY3MgPSBbXTtcblx0XHRcdHZhciBhbHBoYXMgPSBbXTtcblx0XHRcdHZhciBvdGhlcnMgPSBbXTtcblx0XHRcdHZhciBuZXdMYXlvdXQgPSBbXTtcblx0XHRcdHZhciBpLCBqLCBrZXlzO1xuXHRcdFx0Ly8gRmluZCBjaGFyYWN0ZXJzIG9mIGRpZmZlcmVudCB0eXBlc1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGluc3Qub3B0aW9ucy5sYXlvdXQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bmV3TGF5b3V0W2ldID0gJyc7XG5cdFx0XHRcdGtleXMgPSBpbnN0Lm9wdGlvbnMubGF5b3V0W2ldLnNwbGl0KGluc3Qub3B0aW9ucy5zZXBhcmF0b3IpO1xuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwga2V5cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdGlmICh0aGlzLl9pc0NvbnRyb2woa2V5c1tqXSkpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoaW5zdC5vcHRpb25zLnJhbmRvbWlzZUFsbCkge1xuXHRcdFx0XHRcdFx0b3RoZXJzLnB1c2goa2V5c1tqXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKGluc3Qub3B0aW9ucy5pc051bWVyaWMoa2V5c1tqXSkpIHtcblx0XHRcdFx0XHRcdG51bWVyaWNzLnB1c2goa2V5c1tqXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKGluc3Qub3B0aW9ucy5pc0FscGhhYmV0aWMoa2V5c1tqXSkpIHtcblx0XHRcdFx0XHRcdGFscGhhcy5wdXNoKGtleXNbal0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdG90aGVycy5wdXNoKGtleXNbal0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gU2h1ZmZsZSB0aGVtXG5cdFx0XHRpZiAoaW5zdC5vcHRpb25zLnJhbmRvbWlzZU51bWVyaWMpIHtcblx0XHRcdFx0dGhpcy5fc2h1ZmZsZShudW1lcmljcyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaW5zdC5vcHRpb25zLnJhbmRvbWlzZUFscGhhYmV0aWMpIHtcblx0XHRcdFx0dGhpcy5fc2h1ZmZsZShhbHBoYXMpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGluc3Qub3B0aW9ucy5yYW5kb21pc2VPdGhlciB8fCBpbnN0Lm9wdGlvbnMucmFuZG9taXNlQWxsKSB7XG5cdFx0XHRcdHRoaXMuX3NodWZmbGUob3RoZXJzKTtcblx0XHRcdH1cblx0XHRcdHZhciBuID0gMDtcblx0XHRcdHZhciBhID0gMDtcblx0XHRcdHZhciBvID0gMDtcblx0XHRcdC8vIEFuZCByZXBsYWNlIHRoZW0gaW4gdGhlIGxheW91dFxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGluc3Qub3B0aW9ucy5sYXlvdXQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0a2V5cyA9IGluc3Qub3B0aW9ucy5sYXlvdXRbaV0uc3BsaXQoaW5zdC5vcHRpb25zLnNlcGFyYXRvcik7XG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBrZXlzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0bmV3TGF5b3V0W2ldICs9IChqID4gMCA/IGluc3Qub3B0aW9ucy5zZXBhcmF0b3IgOiAnJykgKyAodGhpcy5faXNDb250cm9sKGtleXNbal0pID8ga2V5c1tqXSA6XG5cdFx0XHRcdFx0XHQoaW5zdC5vcHRpb25zLnJhbmRvbWlzZUFsbCA/IG90aGVyc1tvKytdIDpcblx0XHRcdFx0XHRcdChpbnN0Lm9wdGlvbnMuaXNOdW1lcmljKGtleXNbal0pID8gbnVtZXJpY3NbbisrXSA6XG5cdFx0XHRcdFx0XHQoaW5zdC5vcHRpb25zLmlzQWxwaGFiZXRpYyhrZXlzW2pdKSA/IGFscGhhc1thKytdIDogb3RoZXJzW28rK10pKSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmV3TGF5b3V0O1xuXHRcdH0sXG5cblx0XHQvKiogSXMgYSBnaXZlbiBjaGFyYWN0ZXIgYSBjb250cm9sIGNoYXJhY3Rlcj9cblx0XHRcdEBwcml2YXRlXG5cdFx0XHRAcGFyYW0ge3N0cmluZ30gY2ggVGhlIGNoYXJhY3RlciB0byB0ZXN0LlxuXHRcdFx0QHJldHVybiB7Ym9vbGVhbn0gPGNvZGU+dHJ1ZTwvY29kZT4gaWYgYSBjb250cm9sIGNoYXJhY3RlciwgPGNvZGU+ZmFsc2U8L2NvZGU+IGlmIG5vdC4gKi9cblx0XHRfaXNDb250cm9sOiBmdW5jdGlvbihjaCkge1xuXHRcdFx0cmV0dXJuIGNoIDwgJyAnO1xuXHRcdH0sXG5cblx0XHQvKiogSXMgYSBnaXZlbiBjaGFyYWN0ZXIgYWxwaGFiZXRpYz9cblx0XHRcdEZvciB1c2Ugd2l0aCB0aGUge0BsaW5rY29kZSBtb2R1bGU6S2V5cGFkfnJlZ2lvbmFsT3B0aW9uc3xpc0FscGhhYmV0aWN9IHJlZ2lvbmFsIG9wdGlvbi5cblx0XHRcdFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gZm9yIHN0YW5kYXJkIEVuZ2xpc2ggYWxwaGFiZXRpYyBjaGFyYWN0ZXJzLlxuXHRcdFx0QHBhcmFtIHtzdHJpbmd9IGNoIFRoZSBjaGFyYWN0ZXIgdG8gdGVzdC5cblx0XHRcdEByZXR1cm4ge2Jvb2xlYW59IDxjb2RlPnRydWU8L2NvZGU+IGlmIGFscGhhYmV0aWMsIDxjb2RlPmZhbHNlPC9jb2RlPiBpZiBub3QuXG5cdFx0XHRAZXhhbXBsZSBpc0FscGhhYmV0aWM6ICQua2V5cGFkLmlzQWxwaGFiZXRpYyAqL1xuXHRcdGlzQWxwaGFiZXRpYzogZnVuY3Rpb24oY2gpIHtcblx0XHRcdHJldHVybiAoY2ggPj0gJ0EnICYmIGNoIDw9ICdaJykgfHwgKGNoID49ICdhJyAmJiBjaCA8PSAneicpO1xuXHRcdH0sXG5cblx0XHQvKiogSXMgYSBnaXZlbiBjaGFyYWN0ZXIgbnVtZXJpYz9cblx0XHRcdEZvciB1c2Ugd2l0aCB0aGUge0BsaW5rY29kZSBtb2R1bGU6S2V5cGFkfnJlZ2lvbmFsT3B0aW9uc3xpc051bWVyaWN9IHJlZ2lvbmFsIG9wdGlvbi5cblx0XHRcdFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gZm9yIHN0YW5kYXJkIEVuZ2xpc2ggbnVtYmVycy5cblx0XHRcdEBwYXJhbSB7c3RyaW5nfSBjaCBUaGUgY2hhcmFjdGVyIHRvIHRlc3QuXG5cdFx0XHRAcmV0dXJuIHtib29sZWFufSA8Y29kZT50cnVlPC9jb2RlPiBpZiBudW1lcmljLCA8Y29kZT5mYWxzZTwvY29kZT4gaWYgbm90LlxuXHRcdFx0QGV4YW1wbGUgaXNOdW1lcmljOiAkLmtleXBhZC5pc051bWVyaWMgKi9cblx0XHRpc051bWVyaWM6IGZ1bmN0aW9uKGNoKSB7XG5cdFx0XHRyZXR1cm4gKGNoID49ICcwJyAmJiBjaCA8PSAnOScpO1xuXHRcdH0sXG5cblx0XHQvKiogQ29udmVydCBhIGNoYXJhY3RlciB0byB1cHBlciBjYXNlLlxuXHRcdFx0Rm9yIHVzZSB3aXRoIHRoZSB7QGxpbmtjb2RlIG1vZHVsZTpLZXlwYWR+cmVnaW9uYWxPcHRpb25zfHRvVXBwZXJ9IHJlZ2lvbmFsIG9wdGlvbi5cblx0XHRcdEBwYXJhbSB7c3RyaW5nfSBjaCBUaGUgY2hhcmFjdGVyIHRvIGNvbnZlcnQuXG5cdFx0XHRAcmV0dXJuIHtzdHJpbmd9IEl0cyB1cHBlcmNhc2UgdmVyc2lvbi5cblx0XHRcdEBleGFtcGxlIHRvVXBwZXI6ICQua2V5cGFkLnRvVXBwZXIgKi9cblx0XHR0b1VwcGVyOiBmdW5jdGlvbihjaCkge1xuXHRcdFx0cmV0dXJuIGNoLnRvVXBwZXJDYXNlKCk7XG5cdFx0fSxcblxuXHRcdC8qKiBSYW5kb21pc2UgdGhlIGNvbnRlbnRzIG9mIGFuIGFycmF5LlxuXHRcdFx0QHByaXZhdGVcblx0XHRcdEBwYXJhbSB7c3RyaW5nW119IHZhbHVlcyBUaGUgYXJyYXkgdG8gcmVhcnJhbmdlLiAqL1xuXHRcdF9zaHVmZmxlOiBmdW5jdGlvbih2YWx1ZXMpIHtcblx0XHRcdGZvciAodmFyIGkgPSB2YWx1ZXMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuXHRcdFx0XHR2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuXHRcdFx0XHR2YXIgY2ggPSB2YWx1ZXNbaV07XG5cdFx0XHRcdHZhbHVlc1tpXSA9IHZhbHVlc1tqXTtcblx0XHRcdFx0dmFsdWVzW2pdID0gY2g7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHR2YXIgcGx1Z2luID0gJC5rZXlwYWQ7XG5cblx0Ly8gSW5pdGlhbGlzZSB0aGUga2V5IGRlZmluaXRpb25zXG5cdHBsdWdpbi5hZGRLZXlEZWYoJ0NMT1NFJywgJ2Nsb3NlJywgZnVuY3Rpb24oaW5zdCkge1xuXHRcdHBsdWdpbi5fY3VySW5zdCA9IChpbnN0Ll9pbmxpbmUgPyBpbnN0IDogcGx1Z2luLl9jdXJJbnN0KTtcblx0XHRwbHVnaW4uaGlkZSgpO1xuXHR9KTtcblx0cGx1Z2luLmFkZEtleURlZignQ0xFQVInLCAnY2xlYXInLCBmdW5jdGlvbihpbnN0KSB7IHBsdWdpbi5fY2xlYXJWYWx1ZShpbnN0KTsgfSk7XG5cdHBsdWdpbi5hZGRLZXlEZWYoJ0JBQ0snLCAnYmFjaycsIGZ1bmN0aW9uKGluc3QpIHsgcGx1Z2luLl9iYWNrVmFsdWUoaW5zdCk7IH0pO1xuXHRwbHVnaW4uYWRkS2V5RGVmKCdTSElGVCcsICdzaGlmdCcsIGZ1bmN0aW9uKGluc3QpIHsgcGx1Z2luLl9zaGlmdEtleXBhZChpbnN0KTsgfSk7XG5cdHBsdWdpbi5hZGRLZXlEZWYoJ1NQQUNFX0JBUicsICdzcGFjZWJhcicsIGZ1bmN0aW9uKGluc3QpIHsgcGx1Z2luLl9zZWxlY3RWYWx1ZShpbnN0LCAnICcpOyB9LCB0cnVlKTtcblx0cGx1Z2luLmFkZEtleURlZignU1BBQ0UnLCAnc3BhY2UnKTtcblx0cGx1Z2luLmFkZEtleURlZignSEFMRl9TUEFDRScsICdoYWxmLXNwYWNlJyk7XG5cdHBsdWdpbi5hZGRLZXlEZWYoJ0VOVEVSJywgJ2VudGVyJywgZnVuY3Rpb24oaW5zdCkgeyBwbHVnaW4uX3NlbGVjdFZhbHVlKGluc3QsICdcXHgwRCcpOyB9LCB0cnVlKTtcblx0cGx1Z2luLmFkZEtleURlZignVEFCJywgJ3RhYicsIGZ1bmN0aW9uKGluc3QpIHsgcGx1Z2luLl9zZWxlY3RWYWx1ZShpbnN0LCAnXFx4MDknKTsgfSwgdHJ1ZSk7XG5cblx0Ly8gSW5pdGlhbGlzZSB0aGUgbGF5b3V0cyBhbmQgc2V0dGluZ3Ncblx0LyoqIE51bWJlciBrZXlwYWQgb25seS5cblx0XHRGb3IgdXNlIHdpdGggdGhlIHtAbGlua2NvZGUgbW9kdWxlOktleXBhZH5kZWZhdWx0T3B0aW9uc3xsYXlvdXR9IG9wdGlvbi5cblx0XHRAbWVtYmVyb2YgbW9kdWxlOktleXBhZFxuXHRcdEBuYW1lIG51bWVyaWNMYXlvdXRcblx0XHRAZXhhbXBsZSBsYXlvdXQ6ICQua2V5cGFkLm51bWVyaWNMYXlvdXQgKi9cblx0cGx1Z2luLm51bWVyaWNMYXlvdXQgPSBbJzEyMycgKyBwbHVnaW4uQ0xPU0UsICc0NTYnICsgcGx1Z2luLkNMRUFSLCAnNzg5JyArIHBsdWdpbi5CQUNLLCBwbHVnaW4uU1BBQ0UgKyAnMCddO1xuXHQvKiogU3RhbmRhcmQgVVMga2V5Ym9hcmQgYWxwaGFiZXRpYyBsYXlvdXQuXG5cdFx0Rm9yIHVzZSB3aXRoIHRoZSB7QGxpbmtjb2RlIG1vZHVsZTpLZXlwYWR+ZGVmYXVsdE9wdGlvbnN8bGF5b3V0fSBvcHRpb24uXG5cdFx0QG1lbWJlcm9mIG1vZHVsZTpLZXlwYWRcblx0XHRAbmFtZSBxd2VydHlBbHBoYWJldGljXG5cdFx0QGV4YW1wbGUgbGF5b3V0OiAkLmtleXBhZC5xd2VydHlBbHBoYWJldGljICovXG5cdHBsdWdpbi5xd2VydHlBbHBoYWJldGljID0gWydxd2VydHl1aW9wJywgJ2FzZGZnaGprbCcsICd6eGN2Ym5tJ107XG5cdC8qKiBGdWxsIFF3ZXJ0eSBrZXlib2FyZCAtIHN0YW5kYXJkIFVTLlxuXHRcdEZvciB1c2Ugd2l0aCB0aGUge0BsaW5rY29kZSBtb2R1bGU6S2V5cGFkfmRlZmF1bHRPcHRpb25zfGxheW91dH0gb3B0aW9uLlxuXHRcdEBtZW1iZXJvZiBtb2R1bGU6S2V5cGFkXG5cdFx0QG5hbWUgcXdlcnR5TGF5b3V0XG5cdFx0QGV4YW1wbGUgbGF5b3V0OiAkLmtleXBhZC5xd2VydHlMYXlvdXQgKi9cblx0cGx1Z2luLnF3ZXJ0eUxheW91dCA9IFsnIUAjJCVeJiooKV89JyArIHBsdWdpbi5IQUxGX1NQQUNFICsgcGx1Z2luLlNQQUNFICsgcGx1Z2luLkNMT1NFLFxuXHRcdHBsdWdpbi5IQUxGX1NQQUNFICsgJ2B+W117fTw+XFxcXHwvJyArIHBsdWdpbi5TUEFDRSArICc3ODknLFxuXHRcdCdxd2VydHl1aW9wXFwnXCInICsgcGx1Z2luLkhBTEZfU1BBQ0UgKyAnNDU2Jyxcblx0XHRwbHVnaW4uSEFMRl9TUEFDRSArICdhc2RmZ2hqa2w7OicgKyBwbHVnaW4uU1BBQ0UgKyAnMTIzJyxcblx0XHRwbHVnaW4uU1BBQ0UgKyAnenhjdmJubSwuPycgKyBwbHVnaW4uU1BBQ0UgKyBwbHVnaW4uSEFMRl9TUEFDRSArICctMCsnLFxuXHRcdCcnICsgcGx1Z2luLlRBQiArIHBsdWdpbi5FTlRFUiArIHBsdWdpbi5TUEFDRV9CQVIgKyBwbHVnaW4uU0hJRlQgK1xuXHRcdHBsdWdpbi5IQUxGX1NQQUNFICsgcGx1Z2luLkJBQ0sgKyBwbHVnaW4uQ0xFQVJdO1xuXHQkLmV4dGVuZChwbHVnaW4ucmVnaW9uYWxPcHRpb25zWycnXSwge1xuXHRcdGFscGhhYmV0aWNMYXlvdXQ6IHBsdWdpbi5xd2VydHlBbHBoYWJldGljLFxuXHRcdGZ1bGxMYXlvdXQ6IHBsdWdpbi5xd2VydHlMYXlvdXQsXG5cdFx0aXNBbHBoYWJldGljOiBwbHVnaW4uaXNBbHBoYWJldGljLFxuXHRcdGlzTnVtZXJpYzogcGx1Z2luLmlzTnVtZXJpYyxcblx0XHR0b1VwcGVyOiBwbHVnaW4udG9VcHBlclxuXHR9KTtcblx0cGx1Z2luLnNldERlZmF1bHRzKCQuZXh0ZW5kKHtsYXlvdXQ6IHBsdWdpbi5udW1lcmljTGF5b3V0fSwgcGx1Z2luLnJlZ2lvbmFsT3B0aW9uc1snJ10pKTtcblxuXHQvLyBBZGQgdGhlIGtleXBhZCBkaXZpc2lvbiBhbmQgZXh0ZXJuYWwgY2xpY2sgY2hlY2tcblx0JChmdW5jdGlvbigpIHtcblx0XHQkKGRvY3VtZW50LmJvZHkpLmFwcGVuZChwbHVnaW4ubWFpbkRpdikuXG5cdFx0XHRvbignbW91c2Vkb3duLicgKyBwbHVnaW5OYW1lLCBwbHVnaW4uX2NoZWNrRXh0ZXJuYWxDbGljayk7XG5cdH0pO1xuXG59KShqUXVlcnkpO1xuIiwgImltcG9ydCBcIi4vMC1qcXVlcnkua2V5cGFkLmpzXCI7XG5pbXBvcnQgXCIuLzEta2V5Ym9hcmQtdXRpbHMuanNcIjtcblxuaW1wb3J0IHsgQmFzZVdpZGdldCB9IGZyb20gXCIuLi9jb3JlL2NvcmUud2lkZ2V0LmpzXCI7XG5cbi8qKlxuICogX19QcmltZUZhY2VzIEtleWJvYXJkIFdpZGdldF9fXG4gKiBcbiAqIEtleWJvYXJkIGlzIGFuIGlucHV0IGNvbXBvbmVudCB0aGF0IHVzZXMgYSB2aXJ0dWFsIGtleWJvYXJkIHRvIHByb3ZpZGUgdGhlIGlucHV0LiBOb3RhYmxlIGZlYXR1cmVzIGFyZSB0aGVcbiAqIGN1c3RvbWl6YWJsZSBsYXlvdXRzIGFuZCBza2lubmluZyBjYXBhYmlsaXRpZXMuXG4gKiBcbiAqIEBwcm9wIHtQcmltZUZhY2VzLlVuYmluZENhbGxiYWNrfSBbcmVzaXplSGFuZGxlcl0gVW5iaW5kIGNhbGxiYWNrIGZvciB0aGUgcmVzaXplIGhhbmRsZXIuXG4gKiBAcHJvcCB7UHJpbWVGYWNlcy5VbmJpbmRDYWxsYmFja30gW3Njcm9sbEhhbmRsZXJdIFVuYmluZCBjYWxsYmFjayBmb3IgdGhlIHNjcm9sbCBoYW5kbGVyLlxuICpcbiAqIEBpbnRlcmZhY2Uge1ByaW1lRmFjZXMud2lkZ2V0LktleWJvYXJkQ2ZnfSBjZmcgVGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSB7QGxpbmsgIEtleWJvYXJkfCBLZXlib2FyZCB3aWRnZXR9LlxuICogWW91IGNhbiBhY2Nlc3MgdGhpcyBjb25maWd1cmF0aW9uIHZpYSB7QGxpbmsgUHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldC5jZmd8QmFzZVdpZGdldC5jZmd9LiBQbGVhc2Ugbm90ZSB0aGF0IHRoaXNcbiAqIGNvbmZpZ3VyYXRpb24gaXMgdXN1YWxseSBtZWFudCB0byBiZSByZWFkLW9ubHkgYW5kIHNob3VsZCBub3QgYmUgbW9kaWZpZWQuXG4gKiBAZXh0ZW5kcyB7UHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldENmZ30gY2ZnXG4gKiBAZXh0ZW5kcyB7SlF1ZXJ5S2V5cGFkLktleXBhZFNldHRpbmdzfSBjZmdcbiAqIFxuICogQHByb3Age0pRdWVyeUtleXBhZC5CZWZvcmVTaG93TGlzdGVuZXJ9IGNmZy5iZWZvcmVTaG93IENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCBieSB0aGUga2V5Ym9hcmQgSlF1ZXJ5IHBsdWdpbiBiZWZvcmVcbiAqIHRoZSBrZXlib2FyZCBpcyBicm91Z2h0IHVwLlxuICogQHByb3Age3N0cmluZ1tdfSBjZmcubGF5b3V0IFRoZSByZXNvbHZlZCBhbmQgcGFyc2VkIGtleWJvYXJkIGxheW91dCB0byBiZSB1c2VkLiBDb250YWlucyBvbiBpdGVtIGZvciBlYWNoIHJvdywgZWFjaFxuICoga2V5Ym9hcmQgcm93IGNvbnRhaW5zIHRoZSBjaGFyYWN0ZXIgY29kZXMgb2YgdGhlIGtleXMgc2hvd24gb24gdGhhdCByb3cuXG4gKiBAcHJvcCB7c3RyaW5nfSBjZmcubGF5b3V0TmFtZSBUaGUgbmFtZSBvZiB0aGUgYnVpbHQtaW4ga2V5Ym9hcmQgbGF5b3V0IHRvIHVzZS4gTXV0dWFsbHkgZXhjbHVzaXZlIHdpdGhcbiAqIGBsYXlvdXRUZW1wbGF0ZWAuXG4gKiBAcHJvcCB7c3RyaW5nfSBjZmcubGF5b3V0VGVtcGxhdGUgQW4gb3B0aW9uYWwgY3VzdG9tIGtleWJvYXJkIGxheW91dCB0ZW1wbGF0ZSBzcGVjaWZpZWQgYnkgdGhlIHVzZXIuIFRoZSBrZXlib2FyZCByb3dzXG4gKiBtdXN0IGJlIHNlcGFyYXRlZCBieSBhIGNvbW1hLiBFYWNoIHJvdyBjb250YWlucyB0aGUga2V5cyB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQgb24gdGhhdCByb3cuIFRvIHNwZWNpZnkgYSBjb250cm9sXG4gKiBidXR0b24gKHNwYWNlLCBiYWNrLCBzaGlmdCBldGMuKSwgc2VwYXJhdGUgdGhlIG5hbWUgb2YgdGhlIGNvbnRyb2wga2V5IHdpdGggYSBkYXNoLiAgIFxuICogQHByb3Age0pRdWVyeUtleXBhZC5DbG9zZUxpc3RlbmVyfSBjZmcub25DbG9zZSBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgYnkgdGhlIGtleWJvYXJkIEpRdWVyeSBwbHVnaW4gYmVmb3JlXG4gKiB0aGUga2V5Ym9hcmQgaXMgY2xvc2VkLlxuICovXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBCYXNlV2lkZ2V0IHtcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLlBhcnRpYWxXaWRnZXRDZmc8VENmZz59IGNmZ1xuICAgICAqL1xuICAgIGluaXQoY2ZnKSB7XG4gICAgICAgIHN1cGVyLmluaXQoY2ZnKTtcblxuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzOyAgIFxuICAgICAgICBpZiAodGhpcy5jZmcubGF5b3V0VGVtcGxhdGUpXG4gICAgICAgICAgICB0aGlzLmNmZy5sYXlvdXQgPSBQcmltZUZhY2VzLndpZGdldC5LZXlib2FyZFV0aWxzLmNyZWF0ZUxheW91dEZyb21UZW1wbGF0ZSh0aGlzLmNmZy5sYXlvdXRUZW1wbGF0ZSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuY2ZnLmxheW91dCA9IFByaW1lRmFjZXMud2lkZ2V0LktleWJvYXJkVXRpbHMuZ2V0UHJlc2V0TGF5b3V0KHRoaXMuY2ZnLmxheW91dE5hbWUpO1xuXG4gICAgICAgIHRoaXMuY2ZnLmJlZm9yZVNob3cgPSBmdW5jdGlvbihkaXYsIGluc3QpIHtcbiAgICAgICAgICAgICQoZGl2KS5hZGRDbGFzcygndWktaW5wdXQtb3ZlcmxheScpLmNzcygnei1pbmRleCcsIFByaW1lRmFjZXMubmV4dFppbmRleCgpKTtcbiAgICAgICAgICAgICR0aGlzLmJpbmRQYW5lbEV2ZW50cygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY2ZnLm9uQ2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICR0aGlzLnVuYmluZFBhbmVsRXZlbnRzKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5qcS5rZXlwYWQodGhpcy5jZmcpO1xuXG4gICAgICAgIC8vVmlzdWFsc1xuICAgICAgICBQcmltZUZhY2VzLnNraW5JbnB1dCh0aGlzLmpxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGFsbCBwYW5lbCBldmVudCBsaXN0ZW5lcnNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGJpbmRQYW5lbEV2ZW50cygpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcblxuICAgICAgICAvL0hpZGUgb3ZlcmxheSBvbiByZXNpemUvc2Nyb2xsXG4gICAgICAgIHRoaXMucmVzaXplSGFuZGxlciA9IFByaW1lRmFjZXMudXRpbHMucmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMsICdyZXNpemUuJyArIHRoaXMuaWQgKyAnX2hpZGUnLCBudWxsLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChQcmltZUZhY2VzLmhpZGVPdmVybGF5c09uVmlld3BvcnRDaGFuZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5qcS5rZXlwYWQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gUHJpbWVGYWNlcy51dGlscy5yZWdpc3RlckNvbm5lY3RlZE92ZXJsYXlTY3JvbGxIYW5kbGVyKHRoaXMsICdzY3JvbGwuJyArIHRoaXMuaWQgKyAnX2hpZGUnLCB0aGlzLmpxLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChQcmltZUZhY2VzLmhpZGVPdmVybGF5c09uVmlld3BvcnRDaGFuZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5qcS5rZXlwYWQoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kIGFsbCBwYW5lbCBldmVudCBsaXN0ZW5lcnNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHVuYmluZFBhbmVsRXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5yZXNpemVIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUhhbmRsZXIudW5iaW5kKCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsSGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLnVuYmluZCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwgIi8qKlxuICogQ29udGFpbnMgYSBmZXcgdXRpbGl0aWVzIGZvciBwYXJzaW5nIGFuZCB3b3JraW5nIHdpdGggZGlmZmVyZW50IGtleWJvYXJkIGxheW91dC4gVXNlZCBieSB0aGUgS2V5Ym9hcmQgd2lkZ2V0LlxuICogQG5hbWVzcGFjZVxuICovXG4oZnVuY3Rpb24oKXtcbiAgICAvKipcbiAgICAgKiBUaGlzIG9iamVjdCBjb250YWlucyB0aGUga2V5Ym9hcmQgbGF5b3V0cyB0aGF0IGFyZSBhdmFpbGFibGUgZm9yIHRoZSBrZXlib2FyZCB3aWRnZXQuIEVhY2gga2V5Ym9hcmQgbGF5b3V0IGlzXG4gICAgICogYSBsaXN0IHdpdGggb25lIGVudHJ5IGZvciBlYWNoIGtleWJvYXJkIHJvdy4gRWFjaCByb3cgaXMgYSBzdHJpbmcgdGhhdCBjb250YWlucyB0aGUgY2hhcmFjdGVycyBhdmFpbGFibGUgb24gdGhhdFxuICAgICAqIHJvdy5cbiAgICAgKiBAaW50ZXJmYWNlIHtQcmltZUZhY2VzLndpZGdldC5LZXlib2FyZFV0aWxzLlByZXNldExheW91dHN9IC4gQ29udGFpbnMgdGhlIHZhcmlvdXMgZGlmZmVyZW50IGF2YWlsYWJsZSBrZXlib2FyZCBsYXlvdXRzLlxuICAgICAqIEB0eXBlIHtQcmltZUZhY2VzLndpZGdldC5LZXlib2FyZFV0aWxzLlByZXNldExheW91dHN9XG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgY29uc3QgbGF5b3V0cyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYmFzaWMgYHF3ZXJ0eWAgbGF5b3V0IHdpdGhvdXQgbWFueSBzcGVjaWFsIGNoYXJhY3RlcnMuIFRoaXMgaXMgYSBsaXN0IHdpdGggb25lIGVudHJ5IGZvciBlYWNoIGtleWJvYXJkIHJvdy5cbiAgICAgICAgICogRWFjaCByb3cgaXMgYSBzdHJpbmcgdGhhdCBjb250YWlucyB0aGUgY2hhcmFjdGVycyBhdmFpbGFibGUgb24gdGhhdCByb3cuXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICAgICAgICovXG4gICAgICAgIHF3ZXJ0eUJhc2ljIDpcbiAgICAgICAgICAgIFskLmtleXBhZC5xd2VydHlBbHBoYWJldGljWzBdICsgJC5rZXlwYWQuQ0xPU0UsXG4gICAgICAgICAgICAgICAgJC5rZXlwYWQuSEFMRl9TUEFDRSArICQua2V5cGFkLnF3ZXJ0eUFscGhhYmV0aWNbMV0gK1xuICAgICAgICAgICAgICAgICQua2V5cGFkLkhBTEZfU1BBQ0UgKyAkLmtleXBhZC5DTEVBUixcbiAgICAgICAgICAgICAgICAkLmtleXBhZC5TUEFDRSArICQua2V5cGFkLnF3ZXJ0eUFscGhhYmV0aWNbMl0gK1xuICAgICAgICAgICAgICAgICQua2V5cGFkLlNISUZUICsgJC5rZXlwYWQuQkFDS10sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYHF3ZXJ0eWAgbGF5b3V0IHdpdGggc29tZSBzcGVjaWFsIGNoYXJhY3RlcnMuIFRoaXMgaXMgYSBsaXN0IHdpdGggb25lIGVudHJ5IGZvciBlYWNoIGtleWJvYXJkIHJvdy4gRWFjaCByb3dcbiAgICAgICAgICogaXMgYSBzdHJpbmcgdGhhdCBjb250YWlucyB0aGUgY2hhcmFjdGVycyBhdmFpbGFibGUgb24gdGhhdCByb3cuXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICAgICAgICovXG4gICAgICAgIHF3ZXJ0eSA6ICQua2V5cGFkLnF3ZXJ0eUxheW91dCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gYWxwaGFiZXRpY2FsIGxheW91dCB3aXRoIHRoZSBsZXR0ZXIga2V5cyBpbiBhbHBoYWJldGljYWwgb3JkZXIuIFRoaXMgaXMgYSBsaXN0IHdpdGggb25lIGVudHJ5IGZvciBlYWNoXG4gICAgICAgICAqIGtleWJvYXJkIHJvdy4gRWFjaCByb3cgaXMgYSBzdHJpbmcgdGhhdCBjb250YWlucyB0aGUgY2hhcmFjdGVycyBhdmFpbGFibGUgb24gdGhhdCByb3cuXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cbiAgICAgICAgICovXG4gICAgICAgIGFscGhhYmV0aWMgOlxuICAgICAgICAgICAgWydhYmNkZWZnaGlqJyArICQua2V5cGFkLkNMT1NFLFxuICAgICAgICAgICAgICAgICdrbG1ub3BxcnN0JyArICQua2V5cGFkLkNMRUFSLFxuICAgICAgICAgICAgICAgICd1dnd4eXonICsgJC5rZXlwYWQuU1BBQ0UgKyAkLmtleXBhZC5TUEFDRSArXG4gICAgICAgICAgICAgICAgJC5rZXlwYWQuU0hJRlQgKyAkLmtleXBhZC5CQUNLXVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb250YWlucyB0aGUgY2hhcmFjdGVyIGNvZGVzIGZvciB0aGUgYXZhaWxhYmxlIGNvbnRyb2wgY2hhcmFjdGVycyBvbiB0aGUga2V5Ym9hcmQsIHN1Y2ggYXMgc3BhY2UgYW5kIHJldHVybi5cbiAgICAgKiBAaW50ZXJmYWNlIHtQcmltZUZhY2VzLndpZGdldC5LZXlib2FyZFV0aWxzLkNvbnRyb2xzfSAuIENvbnRhaW5zIHRoZSBjaGFyYWN0ZXIgY29kZXMgZm9yIHRoZSBhdmFpbGFibGUgY29udHJvbFxuICAgICAqIGNoYXJhY3RlcnMgb24gdGhlIGtleWJvYXJkLCBzdWNoIGFzIHNwYWNlIGFuZCByZXR1cm4uXG4gICAgICogQHR5cGUge1ByaW1lRmFjZXMud2lkZ2V0LktleWJvYXJkVXRpbHMuQ29udHJvbHN9XG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgY29uc3QgY29udHJvbHMgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUga2V5Ym9hcmQgY29kZSBmb3IgdGhlIGJ1dHRvbiB0aGF0IGNsb3NlcyAoaGlkZXMpIHRoZSBrZXlib2FyZFxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgY2xvc2UgOiAkLmtleXBhZC5DTE9TRSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBrZXlib2FyZCBjb2RlIGZvciB0aGUgYnV0dG9uIHRoYXQgY2xlYXJzIHRoZSBlbnRlcmVkIHRleHQuXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICBjbGVhciA6ICQua2V5cGFkLkNMRUFSLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGtleWJvYXJkIGNvZGUgZm9yIHRoZSBiYWNrIGJ1dHRvbiB0aGF0IHJlbW92ZXMgdGhlIGNoYXJhY3RlciB0byB0aGUgbGVmdCBvZiB0aGUgY3Vyc29yLlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgYmFjayA6ICQua2V5cGFkLkJBQ0ssXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUga2V5Ym9hcmQgY29kZSBmb3IgdGhlIG1vZGlmeWluZyBzaGlmdCBidXR0b24uXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICBzaGlmdCA6ICQua2V5cGFkLlNISUZULFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGtleWJvYXJkIGNvZGUgZm9yIHRoZSBzcGFjZSBidXR0b24gdGhhdCBpbnNlcnQgYSB3aGl0ZXNwYWNlLlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgc3BhY2ViYXIgOiAkLmtleXBhZC5TUEFDRV9CQVIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUga2V5Ym9hcmQgY29kZSBmb3IgdGhlIHNwYWNlIGJ1dHRvbiB0aGF0IGluc2VydHMgYSBmdWxsLXdpZHRoIHNwYWNlLlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgc3BhY2UgOiAkLmtleXBhZC5TUEFDRSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBrZXlib2FyZCBjb2RlIGZvciB0aGUgc3BhY2UgYnV0dG9uIHRoYXQgaW5zZXJ0cyBhIGhhbGYtd2lkdGggc3BhY2UuXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICBoYWxmc3BhY2UgOiAkLmtleXBhZC5IQUxGX1NQQUNFXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGFuZCByZXR1cm5zIGEgYnVpbHQtaW4gbGF5b3V0IHdpdGggdGhlIGdpdmVuIG5hbWUuIEN1cnJlbnRseSBhdmFpbGFibGUgbGF5b3V0IGFyZSBgcXdlcnR5YCwgYHF3ZXJ0eUJhc2ljYCxcbiAgICAgKiBhbmQgYGFscGhhYmV0aWNgLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgb2YgYSBsYXlvdXQgdG8gZ2V0LlxuICAgICAqIEByZXR1cm4ge3N0cmluZyB8IHVuZGVmaW5lZH0gVGhlIGxheW91dCB3aXRoIHRoZSBnaXZlbiBuYW1lLCBpZiBpdCBleGlzdHMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0UHJlc2V0TGF5b3V0KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGxheW91dHNbbmFtZV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgYW5kIHJldHVybnMgdGhlIGtleWNvZGUgZm9yIHRoZSBnaXZlbiBjb250cm9sIGNoYXJhY3Rlci4gWW91IGNhbiB1c2UgdGhpcyBrZXljb2RlIGluIGEgY3VzdG9tIGtleWJvYXJkXG4gICAgICogbGF5b3V0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHN0cmluZyBOYW1lIG9mIHRoZSBjb250cm9sIGtleWNvZGUgdG8gZ2V0LlxuICAgICAqIEByZXR1cm4ge3N0cmluZyB8IHVuZGVmaW5lZH0gVGhlIGtleWNvZGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgaWYgaXQgZXhpc3RzLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldFByZXNldENvbnRyb2wobmFtZSkge1xuICAgICAgICByZXR1cm4gY29udHJvbHNbbmFtZV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgYSBidWlsdC1pbiBjb250cm9sIHdpdGggdGhlIGdpdmVuIG5hbWUgZXhpc3RzLiBJZiBpdCBkb2VzLCB5b3UgY2FuIHJldHJpZXZlIGl0IHZpYVxuICAgICAqIGBnZXRQcmVzZXRDb250cm9sYC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHN0cmluZyBOYW1lIG9mIHRoZSBjb250cm9sIGtleWNvZGUgdG8gY2hlY2suXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIGEgY29udHJvbCBmb3IgdGhlIGdpdmVuIGtleSBpcyBkZWZpbmVkLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc0RlZmluZWRDb250cm9sKGtleSkge1xuICAgICAgICByZXR1cm4gY29udHJvbHNba2V5XSAhPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgY3VzdG9tIHRlbXBsYXRlIGxheW91dCB0aGF0IHdhcyBzcGVjaWZpZWQgYnkgdGhlIHVzZXIuIFJvd3MgYXJlIHNlcGFyYXRlZCBieSBjb21tYXMsIGtleXMgb24gYSByb3cgbWF5XG4gICAgICogYmUgc2VwYXJhdGVkIGJ5IGRhc2hlcy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgQSBjdXN0b20gbGF5b3V0IHRlbXBsYXRlIHNwZWNpZmllZCBieSB0aGUgdXNlci5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmdbXX0gVGhlIHBhcnNlZCBrZXlib2FyZCBsYXlvdXQgdGVtcGxhdGUuIENvbnRhaW5zIG9uZSBpdGVtIGZvciBlYWNoIHJvdywgZWFjaCBpdGVtIGNvbnRhaW5zIHRoZVxuICAgICAqIGNoYXJhY3RlcnMgb24gdGhhdCBrZXlib2FyZCByb3cuXG4gICAgICovXG4gICAgZnVuY3Rpb24gY3JlYXRlTGF5b3V0RnJvbVRlbXBsYXRlKHRlbXBsYXRlKSB7XG4gICAgICAgIC8vIEdpdEh1YiAjMzQ4NzogVW5pY29kZSBjb252ZXJzaW9uXG4gICAgICAgIHRlbXBsYXRlID0gIGRlY29kZVVSSUNvbXBvbmVudChKU09OLnBhcnNlKCdcIicgKyB0ZW1wbGF0ZS5yZXBsYWNlKC9cXFwiL2csICdcXFxcXCInKSArICdcIicpKTtcbiAgICAgICAgdmFyIGxpbmVzID0gdGVtcGxhdGUuc3BsaXQoJywnKSxcbiAgICAgICAgICAgIHRlbXBsYXRlID0gbmV3IEFycmF5KGxpbmVzLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIHRlbXBsYXRlW2ldID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBsaW5lQ29udHJvbHMgPSBsaW5lc1tpXS5zcGxpdCgnLScpO1xuXG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgbGluZUNvbnRyb2xzLmxlbmd0aDtqKyspIHtcbiAgICAgICAgICAgICAgICBpZihpc0RlZmluZWRDb250cm9sKGxpbmVDb250cm9sc1tqXSkpXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlW2ldID0gdGVtcGxhdGVbaV0gKyBnZXRQcmVzZXRDb250cm9sKGxpbmVDb250cm9sc1tqXSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlW2ldID0gdGVtcGxhdGVbaV0gKyBsaW5lQ29udHJvbHNbal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udGFpbnMgYSBmZXcgdXRpbGl0aWVzIGZvciBwYXJzaW5nIGFuZCB3b3JraW5nIHdpdGggZGlmZmVyZW50IGtleWJvYXJkIGxheW91dC4gVXNlZCBieSB0aGUgS2V5Ym9hcmQgd2lkZ2V0LlxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKi9cbiAgICBQcmltZUZhY2VzLndpZGdldC5LZXlib2FyZFV0aWxzID0ge1xuICAgICAgICBsYXlvdXRzLFxuICAgICAgICBjb250cm9scyxcbiAgICAgICAgZ2V0UHJlc2V0TGF5b3V0LFxuICAgICAgICBnZXRQcmVzZXRDb250cm9sLFxuICAgICAgICBpc0RlZmluZWRDb250cm9sLFxuICAgICAgICBjcmVhdGVMYXlvdXRGcm9tVGVtcGxhdGUsXG4gICAgfTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7QUFBQTtBQUFBO0FB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

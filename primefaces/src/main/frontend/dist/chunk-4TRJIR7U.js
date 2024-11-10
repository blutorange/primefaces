import {
  require_jquery_bundler_require_wrapper
} from "./chunk-25GSMOF2.js";
import {
  __commonJS
} from "./chunk-YRJTWU7C.js";

// .yarn/__virtual__/blueimp-file-upload-virtual-5852c2001e/7/.yarn/berry/cache/blueimp-file-upload-patch-dc712ab947-10c0.zip/node_modules/blueimp-file-upload/js/vendor/jquery.ui.widget.js
var require_jquery_ui_widget = __commonJS({
  ".yarn/__virtual__/blueimp-file-upload-virtual-5852c2001e/7/.yarn/berry/cache/blueimp-file-upload-patch-dc712ab947-10c0.zip/node_modules/blueimp-file-upload/js/vendor/jquery.ui.widget.js"(exports) {
    (function(factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
      } else if (typeof exports === "object") {
        factory(require_jquery_bundler_require_wrapper());
      } else {
        factory(window.jQuery);
      }
    })(function($) {
      "use strict";
      $.ui = $.ui || {};
      $.ui.version = "1.12.1";
      if (!$.expr.pseudos) {
        $.expr.pseudos = $.expr[":"];
      }
      if (!$.uniqueSort) {
        $.uniqueSort = $.unique;
      }
      var widgetUuid = 0;
      var widgetHasOwnProperty = Array.prototype.hasOwnProperty;
      var widgetSlice = Array.prototype.slice;
      $.cleanData = /* @__PURE__ */ function(orig) {
        return function(elems) {
          var events, elem, i;
          for (i = 0; (elem = elems[i]) != null; i++) {
            events = $._data(elem, "events");
            if (events && events.remove) {
              $(elem).triggerHandler("remove");
            }
          }
          orig(elems);
        };
      }($.cleanData);
      $.widget = function(name, base, prototype) {
        var existingConstructor, constructor, basePrototype;
        var proxiedPrototype = {};
        var namespace = name.split(".")[0];
        name = name.split(".")[1];
        var fullName = namespace + "-" + name;
        if (!prototype) {
          prototype = base;
          base = $.Widget;
        }
        if (Array.isArray(prototype)) {
          prototype = $.extend.apply(null, [{}].concat(prototype));
        }
        $.expr.pseudos[fullName.toLowerCase()] = function(elem) {
          return !!$.data(elem, fullName);
        };
        $[namespace] = $[namespace] || {};
        existingConstructor = $[namespace][name];
        constructor = $[namespace][name] = function(options, element) {
          if (!this._createWidget) {
            return new constructor(options, element);
          }
          if (arguments.length) {
            this._createWidget(options, element);
          }
        };
        $.extend(constructor, existingConstructor, {
          version: prototype.version,
          // Copy the object used to create the prototype in case we need to
          // redefine the widget later
          _proto: $.extend({}, prototype),
          // Track widgets that inherit from this widget in case this widget is
          // redefined after a widget inherits from it
          _childConstructors: []
        });
        basePrototype = new base();
        basePrototype.options = $.widget.extend({}, basePrototype.options);
        $.each(prototype, function(prop, value) {
          if (typeof value !== "function") {
            proxiedPrototype[prop] = value;
            return;
          }
          proxiedPrototype[prop] = /* @__PURE__ */ function() {
            function _super() {
              return base.prototype[prop].apply(this, arguments);
            }
            function _superApply(args) {
              return base.prototype[prop].apply(this, args);
            }
            return function() {
              var __super = this._super;
              var __superApply = this._superApply;
              var returnValue;
              this._super = _super;
              this._superApply = _superApply;
              returnValue = value.apply(this, arguments);
              this._super = __super;
              this._superApply = __superApply;
              return returnValue;
            };
          }();
        });
        constructor.prototype = $.widget.extend(
          basePrototype,
          {
            // TODO: remove support for widgetEventPrefix
            // always use the name + a colon as the prefix, e.g., draggable:start
            // don't prefix for widgets that aren't DOM-based
            widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix || name : name
          },
          proxiedPrototype,
          {
            constructor,
            namespace,
            widgetName: name,
            widgetFullName: fullName
          }
        );
        if (existingConstructor) {
          $.each(existingConstructor._childConstructors, function(i, child) {
            var childPrototype = child.prototype;
            $.widget(
              childPrototype.namespace + "." + childPrototype.widgetName,
              constructor,
              child._proto
            );
          });
          delete existingConstructor._childConstructors;
        } else {
          base._childConstructors.push(constructor);
        }
        $.widget.bridge(name, constructor);
        return constructor;
      };
      $.widget.extend = function(target) {
        var input = widgetSlice.call(arguments, 1);
        var inputIndex = 0;
        var inputLength = input.length;
        var key;
        var value;
        for (; inputIndex < inputLength; inputIndex++) {
          for (key in input[inputIndex]) {
            value = input[inputIndex][key];
            if (widgetHasOwnProperty.call(input[inputIndex], key) && value !== void 0) {
              if ($.isPlainObject(value)) {
                target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) : (
                  // Don't extend strings, arrays, etc. with objects
                  $.widget.extend({}, value)
                );
              } else {
                target[key] = value;
              }
            }
          }
        }
        return target;
      };
      $.widget.bridge = function(name, object) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[name] = function(options) {
          var isMethodCall = typeof options === "string";
          var args = widgetSlice.call(arguments, 1);
          var returnValue = this;
          if (isMethodCall) {
            if (!this.length && options === "instance") {
              returnValue = void 0;
            } else {
              this.each(function() {
                var methodValue;
                var instance = $.data(this, fullName);
                if (options === "instance") {
                  returnValue = instance;
                  return false;
                }
                if (!instance) {
                  return $.error(
                    "cannot call methods on " + name + " prior to initialization; attempted to call method '" + options + "'"
                  );
                }
                if (typeof instance[options] !== "function" || options.charAt(0) === "_") {
                  return $.error(
                    "no such method '" + options + "' for " + name + " widget instance"
                  );
                }
                methodValue = instance[options].apply(instance, args);
                if (methodValue !== instance && methodValue !== void 0) {
                  returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue;
                  return false;
                }
              });
            }
          } else {
            if (args.length) {
              options = $.widget.extend.apply(null, [options].concat(args));
            }
            this.each(function() {
              var instance = $.data(this, fullName);
              if (instance) {
                instance.option(options || {});
                if (instance._init) {
                  instance._init();
                }
              } else {
                $.data(this, fullName, new object(options, this));
              }
            });
          }
          return returnValue;
        };
      };
      $.Widget = function() {
      };
      $.Widget._childConstructors = [];
      $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
          classes: {},
          disabled: false,
          // Callbacks
          create: null
        },
        _createWidget: function(options, element) {
          element = $(element || this.defaultElement || this)[0];
          this.element = $(element);
          this.uuid = widgetUuid++;
          this.eventNamespace = "." + this.widgetName + this.uuid;
          this.bindings = $();
          this.hoverable = $();
          this.focusable = $();
          this.classesElementLookup = {};
          if (element !== this) {
            $.data(element, this.widgetFullName, this);
            this._on(true, this.element, {
              remove: function(event) {
                if (event.target === element) {
                  this.destroy();
                }
              }
            });
            this.document = $(
              element.style ? (
                // Element within the document
                element.ownerDocument
              ) : (
                // Element is window or document
                element.document || element
              )
            );
            this.window = $(
              this.document[0].defaultView || this.document[0].parentWindow
            );
          }
          this.options = $.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            options
          );
          this._create();
          if (this.options.disabled) {
            this._setOptionDisabled(this.options.disabled);
          }
          this._trigger("create", null, this._getCreateEventData());
          this._init();
        },
        _getCreateOptions: function() {
          return {};
        },
        _getCreateEventData: $.noop,
        _create: $.noop,
        _init: $.noop,
        destroy: function() {
          var that = this;
          this._destroy();
          $.each(this.classesElementLookup, function(key, value) {
            that._removeClass(value, key);
          });
          this.element.off(this.eventNamespace).removeData(this.widgetFullName);
          this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
          this.bindings.off(this.eventNamespace);
        },
        _destroy: $.noop,
        widget: function() {
          return this.element;
        },
        option: function(key, value) {
          var options = key;
          var parts;
          var curOption;
          var i;
          if (arguments.length === 0) {
            return $.widget.extend({}, this.options);
          }
          if (typeof key === "string") {
            options = {};
            parts = key.split(".");
            key = parts.shift();
            if (parts.length) {
              curOption = options[key] = $.widget.extend({}, this.options[key]);
              for (i = 0; i < parts.length - 1; i++) {
                curOption[parts[i]] = curOption[parts[i]] || {};
                curOption = curOption[parts[i]];
              }
              key = parts.pop();
              if (arguments.length === 1) {
                return curOption[key] === void 0 ? null : curOption[key];
              }
              curOption[key] = value;
            } else {
              if (arguments.length === 1) {
                return this.options[key] === void 0 ? null : this.options[key];
              }
              options[key] = value;
            }
          }
          this._setOptions(options);
          return this;
        },
        _setOptions: function(options) {
          var key;
          for (key in options) {
            this._setOption(key, options[key]);
          }
          return this;
        },
        _setOption: function(key, value) {
          if (key === "classes") {
            this._setOptionClasses(value);
          }
          this.options[key] = value;
          if (key === "disabled") {
            this._setOptionDisabled(value);
          }
          return this;
        },
        _setOptionClasses: function(value) {
          var classKey, elements, currentElements;
          for (classKey in value) {
            currentElements = this.classesElementLookup[classKey];
            if (value[classKey] === this.options.classes[classKey] || !currentElements || !currentElements.length) {
              continue;
            }
            elements = $(currentElements.get());
            this._removeClass(currentElements, classKey);
            elements.addClass(
              this._classes({
                element: elements,
                keys: classKey,
                classes: value,
                add: true
              })
            );
          }
        },
        _setOptionDisabled: function(value) {
          this._toggleClass(
            this.widget(),
            this.widgetFullName + "-disabled",
            null,
            !!value
          );
          if (value) {
            this._removeClass(this.hoverable, null, "ui-state-hover");
            this._removeClass(this.focusable, null, "ui-state-focus");
          }
        },
        enable: function() {
          return this._setOptions({ disabled: false });
        },
        disable: function() {
          return this._setOptions({ disabled: true });
        },
        _classes: function(options) {
          var full = [];
          var that = this;
          options = $.extend(
            {
              element: this.element,
              classes: this.options.classes || {}
            },
            options
          );
          function bindRemoveEvent() {
            options.element.each(function(_, element) {
              var isTracked = $.map(that.classesElementLookup, function(elements) {
                return elements;
              }).some(function(elements) {
                return elements.is(element);
              });
              if (!isTracked) {
                that._on($(element), {
                  remove: "_untrackClassesElement"
                });
              }
            });
          }
          function processClassString(classes, checkOption) {
            var current, i;
            for (i = 0; i < classes.length; i++) {
              current = that.classesElementLookup[classes[i]] || $();
              if (options.add) {
                bindRemoveEvent();
                current = $(
                  $.uniqueSort(current.get().concat(options.element.get()))
                );
              } else {
                current = $(current.not(options.element).get());
              }
              that.classesElementLookup[classes[i]] = current;
              full.push(classes[i]);
              if (checkOption && options.classes[classes[i]]) {
                full.push(options.classes[classes[i]]);
              }
            }
          }
          if (options.keys) {
            processClassString(options.keys.match(/\S+/g) || [], true);
          }
          if (options.extra) {
            processClassString(options.extra.match(/\S+/g) || []);
          }
          return full.join(" ");
        },
        _untrackClassesElement: function(event) {
          var that = this;
          $.each(that.classesElementLookup, function(key, value) {
            if ($.inArray(event.target, value) !== -1) {
              that.classesElementLookup[key] = $(value.not(event.target).get());
            }
          });
          this._off($(event.target));
        },
        _removeClass: function(element, keys, extra) {
          return this._toggleClass(element, keys, extra, false);
        },
        _addClass: function(element, keys, extra) {
          return this._toggleClass(element, keys, extra, true);
        },
        _toggleClass: function(element, keys, extra, add) {
          add = typeof add === "boolean" ? add : extra;
          var shift = typeof element === "string" || element === null, options = {
            extra: shift ? keys : extra,
            keys: shift ? element : keys,
            element: shift ? this.element : element,
            add
          };
          options.element.toggleClass(this._classes(options), add);
          return this;
        },
        _on: function(suppressDisabledCheck, element, handlers) {
          var delegateElement;
          var instance = this;
          if (typeof suppressDisabledCheck !== "boolean") {
            handlers = element;
            element = suppressDisabledCheck;
            suppressDisabledCheck = false;
          }
          if (!handlers) {
            handlers = element;
            element = this.element;
            delegateElement = this.widget();
          } else {
            element = delegateElement = $(element);
            this.bindings = this.bindings.add(element);
          }
          $.each(handlers, function(event, handler) {
            function handlerProxy() {
              if (!suppressDisabledCheck && (instance.options.disabled === true || $(this).hasClass("ui-state-disabled"))) {
                return;
              }
              return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
            }
            if (typeof handler !== "string") {
              handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++;
            }
            var match = event.match(/^([\w:-]*)\s*(.*)$/);
            var eventName = match[1] + instance.eventNamespace;
            var selector = match[2];
            if (selector) {
              delegateElement.on(eventName, selector, handlerProxy);
            } else {
              element.on(eventName, handlerProxy);
            }
          });
        },
        _off: function(element, eventName) {
          eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
          element.off(eventName);
          this.bindings = $(this.bindings.not(element).get());
          this.focusable = $(this.focusable.not(element).get());
          this.hoverable = $(this.hoverable.not(element).get());
        },
        _delay: function(handler, delay) {
          var instance = this;
          function handlerProxy() {
            return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
          }
          return setTimeout(handlerProxy, delay || 0);
        },
        _hoverable: function(element) {
          this.hoverable = this.hoverable.add(element);
          this._on(element, {
            mouseenter: function(event) {
              this._addClass($(event.currentTarget), null, "ui-state-hover");
            },
            mouseleave: function(event) {
              this._removeClass($(event.currentTarget), null, "ui-state-hover");
            }
          });
        },
        _focusable: function(element) {
          this.focusable = this.focusable.add(element);
          this._on(element, {
            focusin: function(event) {
              this._addClass($(event.currentTarget), null, "ui-state-focus");
            },
            focusout: function(event) {
              this._removeClass($(event.currentTarget), null, "ui-state-focus");
            }
          });
        },
        _trigger: function(type, event, data) {
          var prop, orig;
          var callback = this.options[type];
          data = data || {};
          event = $.Event(event);
          event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase();
          event.target = this.element[0];
          orig = event.originalEvent;
          if (orig) {
            for (prop in orig) {
              if (!(prop in event)) {
                event[prop] = orig[prop];
              }
            }
          }
          this.element.trigger(event, data);
          return !(typeof callback === "function" && callback.apply(this.element[0], [event].concat(data)) === false || event.isDefaultPrevented());
        }
      };
      $.each({ show: "fadeIn", hide: "fadeOut" }, function(method, defaultEffect) {
        $.Widget.prototype["_" + method] = function(element, options, callback) {
          if (typeof options === "string") {
            options = { effect: options };
          }
          var hasOptions;
          var effectName = !options ? method : options === true || typeof options === "number" ? defaultEffect : options.effect || defaultEffect;
          options = options || {};
          if (typeof options === "number") {
            options = { duration: options };
          }
          hasOptions = !$.isEmptyObject(options);
          options.complete = callback;
          if (options.delay) {
            element.delay(options.delay);
          }
          if (hasOptions && $.effects && $.effects.effect[effectName]) {
            element[method](options);
          } else if (effectName !== method && element[effectName]) {
            element[effectName](options.duration, options.easing, callback);
          } else {
            element.queue(function(next) {
              $(this)[method]();
              if (callback) {
                callback.call(element[0]);
              }
              next();
            });
          }
        };
      });
    });
  }
});

// .yarn/__virtual__/blueimp-file-upload-virtual-5852c2001e/7/.yarn/berry/cache/blueimp-file-upload-patch-dc712ab947-10c0.zip/node_modules/blueimp-file-upload/js/jquery.fileupload.js
var require_jquery_fileupload = __commonJS({
  ".yarn/__virtual__/blueimp-file-upload-virtual-5852c2001e/7/.yarn/berry/cache/blueimp-file-upload-patch-dc712ab947-10c0.zip/node_modules/blueimp-file-upload/js/jquery.fileupload.js"(exports) {
    (function(factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define(["jquery", "jquery-ui/ui/widget"], factory);
      } else if (typeof exports === "object") {
        factory(require_jquery_bundler_require_wrapper(), require_jquery_ui_widget());
      } else {
        factory(window.jQuery);
      }
    })(function($) {
      "use strict";
      $.support.fileInput = !(new RegExp(
        // Handle devices which give false positives for the feature detection:
        "(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))"
      ).test(window.navigator.userAgent) || // Feature detection for all other devices:
      $('<input type="file"/>').prop("disabled"));
      $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
      $.support.xhrFormDataFileUpload = !!window.FormData;
      $.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);
      function getDragHandler(type) {
        var isDragOver = type === "dragover";
        return function(e) {
          e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
          var dataTransfer = e.dataTransfer;
          if (dataTransfer && $.inArray("Files", dataTransfer.types) !== -1 && this._trigger(type, $.Event(type, { delegatedEvent: e })) !== false) {
            e.preventDefault();
            if (isDragOver) {
              dataTransfer.dropEffect = "copy";
            }
          }
        };
      }
      $.widget("blueimp.fileupload", {
        options: {
          // The drop target element(s), by the default the complete document.
          // Set to null to disable drag & drop support:
          dropZone: $(document),
          // The paste target element(s), by the default undefined.
          // Set to a DOM node or jQuery object to enable file pasting:
          pasteZone: void 0,
          // The file input field(s), that are listened to for change events.
          // If undefined, it is set to the file input fields inside
          // of the widget element on plugin initialization.
          // Set to null to disable the change listener.
          fileInput: void 0,
          // By default, the file input field is replaced with a clone after
          // each input field change event. This is required for iframe transport
          // queues and allows change events to be fired for the same file
          // selection, but can be disabled by setting the following option to false:
          replaceFileInput: true,
          // The parameter name for the file form data (the request argument name).
          // If undefined or empty, the name property of the file input field is
          // used, or "files[]" if the file input name property is also empty,
          // can be a string or an array of strings:
          paramName: void 0,
          // By default, each file of a selection is uploaded using an individual
          // request for XHR type uploads. Set to false to upload file
          // selections in one request each:
          singleFileUploads: true,
          // To limit the number of files uploaded with one XHR request,
          // set the following option to an integer greater than 0:
          limitMultiFileUploads: void 0,
          // The following option limits the number of files uploaded with one
          // XHR request to keep the request size under or equal to the defined
          // limit in bytes:
          limitMultiFileUploadSize: void 0,
          // Multipart file uploads add a number of bytes to each uploaded file,
          // therefore the following option adds an overhead for each file used
          // in the limitMultiFileUploadSize configuration:
          limitMultiFileUploadSizeOverhead: 512,
          // Set the following option to true to issue all file upload requests
          // in a sequential order:
          sequentialUploads: false,
          // To limit the number of concurrent uploads,
          // set the following option to an integer greater than 0:
          limitConcurrentUploads: void 0,
          // Set the following option to true to force iframe transport uploads:
          forceIframeTransport: false,
          // Set the following option to the location of a redirect url on the
          // origin server, for cross-domain iframe transport uploads:
          redirect: void 0,
          // The parameter name for the redirect url, sent as part of the form
          // data and set to 'redirect' if this option is empty:
          redirectParamName: void 0,
          // Set the following option to the location of a postMessage window,
          // to enable postMessage transport uploads:
          postMessage: void 0,
          // By default, XHR file uploads are sent as multipart/form-data.
          // The iframe transport is always using multipart/form-data.
          // Set to false to enable non-multipart XHR uploads:
          multipart: true,
          // To upload large files in smaller chunks, set the following option
          // to a preferred maximum chunk size. If set to 0, null or undefined,
          // or the browser does not support the required Blob API, files will
          // be uploaded as a whole.
          maxChunkSize: void 0,
          // When a non-multipart upload or a chunked multipart upload has been
          // aborted, this option can be used to resume the upload by setting
          // it to the size of the already uploaded bytes. This option is most
          // useful when modifying the options object inside of the "add" or
          // "send" callbacks, as the options are cloned for each file upload.
          uploadedBytes: void 0,
          // By default, failed (abort or error) file uploads are removed from the
          // global progress calculation. Set the following option to false to
          // prevent recalculating the global progress data:
          recalculateProgress: true,
          // Interval in milliseconds to calculate and trigger progress events:
          progressInterval: 100,
          // Interval in milliseconds to calculate progress bitrate:
          bitrateInterval: 500,
          // By default, uploads are started automatically when adding files:
          autoUpload: true,
          // By default, duplicate file names are expected to be handled on
          // the server-side. If this is not possible (e.g. when uploading
          // files directly to Amazon S3), the following option can be set to
          // an empty object or an object mapping existing filenames, e.g.:
          // { "image.jpg": true, "image (1).jpg": true }
          // If it is set, all files will be uploaded with unique filenames,
          // adding increasing number suffixes if necessary, e.g.:
          // "image (2).jpg"
          uniqueFilenames: void 0,
          // Error and info messages:
          messages: {
            uploadedBytes: "Uploaded bytes exceed file size"
          },
          // Translation function, gets the message key to be translated
          // and an object with context specific data as arguments:
          i18n: function(message, context) {
            message = this.messages[message] || message.toString();
            if (context) {
              $.each(context, function(key, value) {
                message = message.replace("{" + key + "}", value);
              });
            }
            return message;
          },
          // Additional form data to be sent along with the file uploads can be set
          // using this option, which accepts an array of objects with name and
          // value properties, a function returning such an array, a FormData
          // object (for XHR file uploads), or a simple object.
          // The form of the first fileInput is given as parameter to the function:
          formData: function(form) {
            return form.serializeArray();
          },
          // The add callback is invoked as soon as files are added to the fileupload
          // widget (via file input selection, drag & drop, paste or add API call).
          // If the singleFileUploads option is enabled, this callback will be
          // called once for each file in the selection for XHR file uploads, else
          // once for each file selection.
          //
          // The upload starts when the submit method is invoked on the data parameter.
          // The data object contains a files property holding the added files
          // and allows you to override plugin options as well as define ajax settings.
          //
          // Listeners for this callback can also be bound the following way:
          // .on('fileuploadadd', func);
          //
          // data.submit() returns a Promise object and allows to attach additional
          // handlers using jQuery's Deferred callbacks:
          // data.submit().done(func).fail(func).always(func);
          add: function(e, data) {
            if (e.isDefaultPrevented()) {
              return false;
            }
            if (data.autoUpload || data.autoUpload !== false && $(this).fileupload("option", "autoUpload")) {
              data.process().done(function() {
                data.submit();
              });
            }
          },
          // Other callbacks:
          // Callback for the submit event of each file upload:
          // submit: function (e, data) {}, // .on('fileuploadsubmit', func);
          // Callback for the start of each file upload request:
          // send: function (e, data) {}, // .on('fileuploadsend', func);
          // Callback for successful uploads:
          // done: function (e, data) {}, // .on('fileuploaddone', func);
          // Callback for failed (abort or error) uploads:
          // fail: function (e, data) {}, // .on('fileuploadfail', func);
          // Callback for completed (success, abort or error) requests:
          // always: function (e, data) {}, // .on('fileuploadalways', func);
          // Callback for upload progress events:
          // progress: function (e, data) {}, // .on('fileuploadprogress', func);
          // Callback for global upload progress events:
          // progressall: function (e, data) {}, // .on('fileuploadprogressall', func);
          // Callback for uploads start, equivalent to the global ajaxStart event:
          // start: function (e) {}, // .on('fileuploadstart', func);
          // Callback for uploads stop, equivalent to the global ajaxStop event:
          // stop: function (e) {}, // .on('fileuploadstop', func);
          // Callback for change events of the fileInput(s):
          // change: function (e, data) {}, // .on('fileuploadchange', func);
          // Callback for paste events to the pasteZone(s):
          // paste: function (e, data) {}, // .on('fileuploadpaste', func);
          // Callback for drop events of the dropZone(s):
          // drop: function (e, data) {}, // .on('fileuploaddrop', func);
          // Callback for dragover events of the dropZone(s):
          // dragover: function (e) {}, // .on('fileuploaddragover', func);
          // Callback before the start of each chunk upload request (before form data initialization):
          // chunkbeforesend: function (e, data) {}, // .on('fileuploadchunkbeforesend', func);
          // Callback for the start of each chunk upload request:
          // chunksend: function (e, data) {}, // .on('fileuploadchunksend', func);
          // Callback for successful chunk uploads:
          // chunkdone: function (e, data) {}, // .on('fileuploadchunkdone', func);
          // Callback for failed (abort or error) chunk uploads:
          // chunkfail: function (e, data) {}, // .on('fileuploadchunkfail', func);
          // Callback for completed (success, abort or error) chunk upload requests:
          // chunkalways: function (e, data) {}, // .on('fileuploadchunkalways', func);
          // The plugin options are used as settings object for the ajax calls.
          // The following are jQuery ajax settings required for the file uploads:
          processData: false,
          contentType: false,
          cache: false,
          timeout: 0
        },
        // jQuery versions before 1.8 require promise.pipe if the return value is
        // used, as promise.then in older versions has a different behavior, see:
        // https://blog.jquery.com/2012/08/09/jquery-1-8-released/
        // https://bugs.jquery.com/ticket/11010
        // https://github.com/blueimp/jQuery-File-Upload/pull/3435
        _promisePipe: function() {
          var parts = $.fn.jquery.split(".");
          return Number(parts[0]) > 1 || Number(parts[1]) > 7 ? "then" : "pipe";
        }(),
        // A list of options that require reinitializing event listeners and/or
        // special initialization code:
        _specialOptions: [
          "fileInput",
          "dropZone",
          "pasteZone",
          "multipart",
          "forceIframeTransport"
        ],
        _blobSlice: $.support.blobSlice && function() {
          var slice = this.slice || this.webkitSlice || this.mozSlice;
          return slice.apply(this, arguments);
        },
        _BitrateTimer: function() {
          this.timestamp = Date.now ? Date.now() : (/* @__PURE__ */ new Date()).getTime();
          this.loaded = 0;
          this.bitrate = 0;
          this.getBitrate = function(now, loaded, interval) {
            var timeDiff = now - this.timestamp;
            if (!this.bitrate || !interval || timeDiff > interval) {
              this.bitrate = (loaded - this.loaded) * (1e3 / timeDiff) * 8;
              this.loaded = loaded;
              this.timestamp = now;
            }
            return this.bitrate;
          };
        },
        _isXHRUpload: function(options) {
          return !options.forceIframeTransport && (!options.multipart && $.support.xhrFileUpload || $.support.xhrFormDataFileUpload);
        },
        _getFormData: function(options) {
          var formData;
          if (typeof options.formData === "function") {
            return options.formData(options.form);
          }
          if (Array.isArray(options.formData)) {
            return options.formData;
          }
          if (typeof options.formData === "object") {
            formData = [];
            $.each(options.formData, function(name, value) {
              formData.push({ name, value });
            });
            return formData;
          }
          return [];
        },
        _getTotal: function(files) {
          var total = 0;
          $.each(files, function(index, file) {
            total += file.size || 1;
          });
          return total;
        },
        _initProgressObject: function(obj) {
          var progress = {
            loaded: 0,
            total: 0,
            bitrate: 0
          };
          if (obj._progress) {
            $.extend(obj._progress, progress);
          } else {
            obj._progress = progress;
          }
        },
        _initResponseObject: function(obj) {
          var prop;
          if (obj._response) {
            for (prop in obj._response) {
              if (Object.prototype.hasOwnProperty.call(obj._response, prop)) {
                delete obj._response[prop];
              }
            }
          } else {
            obj._response = {};
          }
        },
        _onProgress: function(e, data) {
          if (e.lengthComputable) {
            var now = Date.now ? Date.now() : (/* @__PURE__ */ new Date()).getTime(), loaded;
            if (data._time && data.progressInterval && now - data._time < data.progressInterval && e.loaded !== e.total) {
              return;
            }
            data._time = now;
            loaded = Math.floor(
              e.loaded / e.total * (data.chunkSize || data._progress.total)
            ) + (data.uploadedBytes || 0);
            this._progress.loaded += loaded - data._progress.loaded;
            this._progress.bitrate = this._bitrateTimer.getBitrate(
              now,
              this._progress.loaded,
              data.bitrateInterval
            );
            data._progress.loaded = data.loaded = loaded;
            data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(
              now,
              loaded,
              data.bitrateInterval
            );
            this._trigger(
              "progress",
              $.Event("progress", { delegatedEvent: e }),
              data
            );
            this._trigger(
              "progressall",
              $.Event("progressall", { delegatedEvent: e }),
              this._progress
            );
          }
        },
        _initProgressListener: function(options) {
          var that = this, xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
          if (xhr.upload) {
            $(xhr.upload).on("progress", function(e) {
              var oe = e.originalEvent;
              e.lengthComputable = oe.lengthComputable;
              e.loaded = oe.loaded;
              e.total = oe.total;
              that._onProgress(e, options);
            });
            options.xhr = function() {
              return xhr;
            };
          }
        },
        _deinitProgressListener: function(options) {
          var xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
          if (xhr.upload) {
            $(xhr.upload).off("progress");
          }
        },
        _isInstanceOf: function(type, obj) {
          return Object.prototype.toString.call(obj) === "[object " + type + "]";
        },
        _getUniqueFilename: function(name, map) {
          name = String(name);
          if (map[name]) {
            name = name.replace(
              /(?: \(([\d]+)\))?(\.[^.]+)?$/,
              function(_, p1, p2) {
                var index = p1 ? Number(p1) + 1 : 1;
                var ext = p2 || "";
                return " (" + index + ")" + ext;
              }
            );
            return this._getUniqueFilename(name, map);
          }
          map[name] = true;
          return name;
        },
        _initXHRData: function(options) {
          var that = this, formData, file = options.files[0], multipart = options.multipart || !$.support.xhrFileUpload, paramName = Array.isArray(options.paramName) ? options.paramName[0] : options.paramName;
          options.headers = $.extend({}, options.headers);
          if (options.contentRange) {
            options.headers["Content-Range"] = options.contentRange;
          }
          if (!multipart || options.blob || !this._isInstanceOf("File", file)) {
            options.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(file.uploadName || file.name) + '"';
          }
          if (!multipart) {
            options.contentType = file.type || "application/octet-stream";
            options.data = options.blob || file;
          } else if ($.support.xhrFormDataFileUpload) {
            if (options.postMessage) {
              formData = this._getFormData(options);
              if (options.blob) {
                formData.push({
                  name: paramName,
                  value: options.blob
                });
              } else {
                $.each(options.files, function(index, file2) {
                  formData.push({
                    name: Array.isArray(options.paramName) && options.paramName[index] || paramName,
                    value: file2
                  });
                });
              }
            } else {
              if (that._isInstanceOf("FormData", options.formData)) {
                formData = options.formData;
              } else {
                formData = new FormData();
                $.each(this._getFormData(options), function(index, field) {
                  formData.append(field.name, field.value);
                });
              }
              if (options.blob) {
                formData.append(
                  paramName,
                  options.blob,
                  file.uploadName || file.name
                );
              } else {
                $.each(options.files, function(index, file2) {
                  if (that._isInstanceOf("File", file2) || that._isInstanceOf("Blob", file2)) {
                    var fileName = file2.uploadName || file2.name;
                    if (options.uniqueFilenames) {
                      fileName = that._getUniqueFilename(
                        fileName,
                        options.uniqueFilenames
                      );
                    }
                    formData.append(
                      Array.isArray(options.paramName) && options.paramName[index] || paramName,
                      file2,
                      fileName
                    );
                  }
                });
              }
            }
            options.data = formData;
          }
          options.blob = null;
        },
        _initIframeSettings: function(options) {
          var targetHost = $("<a></a>").prop("href", options.url).prop("host");
          options.dataType = "iframe " + (options.dataType || "");
          options.formData = this._getFormData(options);
          if (options.redirect && targetHost && targetHost !== location.host) {
            options.formData.push({
              name: options.redirectParamName || "redirect",
              value: options.redirect
            });
          }
        },
        _initDataSettings: function(options) {
          if (this._isXHRUpload(options)) {
            if (!this._chunkedUpload(options, true)) {
              if (!options.data) {
                this._initXHRData(options);
              }
              this._initProgressListener(options);
            }
            if (options.postMessage) {
              options.dataType = "postmessage " + (options.dataType || "");
            }
          } else {
            this._initIframeSettings(options);
          }
        },
        _getParamName: function(options) {
          var fileInput = $(options.fileInput), paramName = options.paramName;
          if (!paramName) {
            paramName = [];
            fileInput.each(function() {
              var input = $(this), name = input.prop("name") || "files[]", i = (input.prop("files") || [1]).length;
              while (i) {
                paramName.push(name);
                i -= 1;
              }
            });
            if (!paramName.length) {
              paramName = [fileInput.prop("name") || "files[]"];
            }
          } else if (!Array.isArray(paramName)) {
            paramName = [paramName];
          }
          return paramName;
        },
        _initFormSettings: function(options) {
          if (!options.form || !options.form.length) {
            options.form = $(options.fileInput.prop("form"));
            if (!options.form.length) {
              options.form = $(this.options.fileInput.prop("form"));
            }
          }
          options.paramName = this._getParamName(options);
          if (!options.url) {
            options.url = options.form.prop("action") || location.href;
          }
          options.type = (options.type || typeof options.form.prop("method") === "string" && options.form.prop("method") || "").toUpperCase();
          if (options.type !== "POST" && options.type !== "PUT" && options.type !== "PATCH") {
            options.type = "POST";
          }
          if (!options.formAcceptCharset) {
            options.formAcceptCharset = options.form.attr("accept-charset");
          }
        },
        _getAJAXSettings: function(data) {
          var options = $.extend({}, this.options, data);
          this._initFormSettings(options);
          this._initDataSettings(options);
          return options;
        },
        // jQuery 1.6 doesn't provide .state(),
        // while jQuery 1.8+ removed .isRejected() and .isResolved():
        _getDeferredState: function(deferred) {
          if (deferred.state) {
            return deferred.state();
          }
          if (deferred.isResolved()) {
            return "resolved";
          }
          if (deferred.isRejected()) {
            return "rejected";
          }
          return "pending";
        },
        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function(promise) {
          promise.success = promise.done;
          promise.error = promise.fail;
          promise.complete = promise.always;
          return promise;
        },
        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function(resolveOrReject, context, args) {
          var dfd = $.Deferred(), promise = dfd.promise();
          context = context || this.options.context || promise;
          if (resolveOrReject === true) {
            dfd.resolveWith(context, args);
          } else if (resolveOrReject === false) {
            dfd.rejectWith(context, args);
          }
          promise.abort = dfd.promise;
          return this._enhancePromise(promise);
        },
        // Adds convenience methods to the data callback argument:
        _addConvenienceMethods: function(e, data) {
          var that = this, getPromise = function(args) {
            return $.Deferred().resolveWith(that, args).promise();
          };
          data.process = function(resolveFunc, rejectFunc) {
            if (resolveFunc || rejectFunc) {
              data._processQueue = this._processQueue = (this._processQueue || getPromise([this]))[that._promisePipe](function() {
                if (data.errorThrown) {
                  return $.Deferred().rejectWith(that, [data]).promise();
                }
                return getPromise(arguments);
              })[that._promisePipe](resolveFunc, rejectFunc);
            }
            return this._processQueue || getPromise([this]);
          };
          data.submit = function() {
            if (this.state() !== "pending") {
              data.jqXHR = this.jqXHR = that._trigger(
                "submit",
                $.Event("submit", { delegatedEvent: e }),
                this
              ) !== false && that._onSend(e, this);
            }
            return this.jqXHR || that._getXHRPromise();
          };
          data.abort = function() {
            if (this.jqXHR) {
              return this.jqXHR.abort();
            }
            this.errorThrown = "abort";
            that._trigger("fail", null, this);
            return that._getXHRPromise(false);
          };
          data.state = function() {
            if (this.jqXHR) {
              return that._getDeferredState(this.jqXHR);
            }
            if (this._processQueue) {
              return that._getDeferredState(this._processQueue);
            }
          };
          data.processing = function() {
            return !this.jqXHR && this._processQueue && that._getDeferredState(this._processQueue) === "pending";
          };
          data.progress = function() {
            return this._progress;
          };
          data.response = function() {
            return this._response;
          };
        },
        // Parses the Range header from the server response
        // and returns the uploaded bytes:
        _getUploadedBytes: function(jqXHR) {
          var range = jqXHR.getResponseHeader("Range"), parts = range && range.split("-"), upperBytesPos = parts && parts.length > 1 && parseInt(parts[1], 10);
          return upperBytesPos && upperBytesPos + 1;
        },
        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function(options, testOnly) {
          options.uploadedBytes = options.uploadedBytes || 0;
          var that = this, file = options.files[0], fs = file.size, ub = options.uploadedBytes, mcs = options.maxChunkSize || fs, slice = this._blobSlice, dfd = $.Deferred(), promise = dfd.promise(), jqXHR, upload;
          if (!(this._isXHRUpload(options) && slice && (ub || (typeof mcs === "function" ? mcs(options) : mcs) < fs)) || options.data) {
            return false;
          }
          if (testOnly) {
            return true;
          }
          if (ub >= fs) {
            file.error = options.i18n("uploadedBytes");
            return this._getXHRPromise(false, options.context, [
              null,
              "error",
              file.error
            ]);
          }
          upload = function() {
            var o = $.extend({}, options), currentLoaded = o._progress.loaded;
            o.blob = slice.call(
              file,
              ub,
              ub + (typeof mcs === "function" ? mcs(o) : mcs),
              file.type
            );
            o.chunkSize = o.blob.size;
            o.contentRange = "bytes " + ub + "-" + (ub + o.chunkSize - 1) + "/" + fs;
            that._trigger("chunkbeforesend", null, o);
            that._initXHRData(o);
            that._initProgressListener(o);
            jqXHR = (that._trigger("chunksend", null, o) !== false && $.ajax(o) || that._getXHRPromise(false, o.context)).done(function(result, textStatus, jqXHR2) {
              ub = that._getUploadedBytes(jqXHR2) || ub + o.chunkSize;
              if (currentLoaded + o.chunkSize - o._progress.loaded) {
                that._onProgress(
                  $.Event("progress", {
                    lengthComputable: true,
                    loaded: ub - o.uploadedBytes,
                    total: ub - o.uploadedBytes
                  }),
                  o
                );
              }
              options.uploadedBytes = o.uploadedBytes = ub;
              o.result = result;
              o.textStatus = textStatus;
              o.jqXHR = jqXHR2;
              that._trigger("chunkdone", null, o);
              that._trigger("chunkalways", null, o);
              if (ub < fs) {
                upload();
              } else {
                dfd.resolveWith(o.context, [result, textStatus, jqXHR2]);
              }
            }).fail(function(jqXHR2, textStatus, errorThrown) {
              o.jqXHR = jqXHR2;
              o.textStatus = textStatus;
              o.errorThrown = errorThrown;
              that._trigger("chunkfail", null, o);
              that._trigger("chunkalways", null, o);
              dfd.rejectWith(o.context, [jqXHR2, textStatus, errorThrown]);
            }).always(function() {
              that._deinitProgressListener(o);
            });
          };
          this._enhancePromise(promise);
          promise.abort = function() {
            return jqXHR.abort();
          };
          upload();
          return promise;
        },
        _beforeSend: function(e, data) {
          if (this._active === 0) {
            this._trigger("start");
            this._bitrateTimer = new this._BitrateTimer();
            this._progress.loaded = this._progress.total = 0;
            this._progress.bitrate = 0;
          }
          this._initResponseObject(data);
          this._initProgressObject(data);
          data._progress.loaded = data.loaded = data.uploadedBytes || 0;
          data._progress.total = data.total = this._getTotal(data.files) || 1;
          data._progress.bitrate = data.bitrate = 0;
          this._active += 1;
          this._progress.loaded += data.loaded;
          this._progress.total += data.total;
        },
        _onDone: function(result, textStatus, jqXHR, options) {
          var total = options._progress.total, response = options._response;
          if (options._progress.loaded < total) {
            this._onProgress(
              $.Event("progress", {
                lengthComputable: true,
                loaded: total,
                total
              }),
              options
            );
          }
          response.result = options.result = result;
          response.textStatus = options.textStatus = textStatus;
          response.jqXHR = options.jqXHR = jqXHR;
          this._trigger("done", null, options);
        },
        _onFail: function(jqXHR, textStatus, errorThrown, options) {
          var response = options._response;
          if (options.recalculateProgress) {
            this._progress.loaded -= options._progress.loaded;
            this._progress.total -= options._progress.total;
          }
          response.jqXHR = options.jqXHR = jqXHR;
          response.textStatus = options.textStatus = textStatus;
          response.errorThrown = options.errorThrown = errorThrown;
          this._trigger("fail", null, options);
        },
        _onAlways: function(jqXHRorResult, textStatus, jqXHRorError, options) {
          this._trigger("always", null, options);
        },
        _onSend: function(e, data) {
          if (!data.submit) {
            this._addConvenienceMethods(e, data);
          }
          var that = this, jqXHR, aborted, slot, pipe, options = that._getAJAXSettings(data), send = function() {
            that._sending += 1;
            options._bitrateTimer = new that._BitrateTimer();
            jqXHR = jqXHR || ((aborted || that._trigger(
              "send",
              $.Event("send", { delegatedEvent: e }),
              options
            ) === false) && that._getXHRPromise(false, options.context, aborted) || that._chunkedUpload(options) || $.ajax(options)).done(function(result, textStatus, jqXHR2) {
              that._onDone(result, textStatus, jqXHR2, options);
            }).fail(function(jqXHR2, textStatus, errorThrown) {
              that._onFail(jqXHR2, textStatus, errorThrown, options);
            }).always(function(jqXHRorResult, textStatus, jqXHRorError) {
              that._deinitProgressListener(options);
              that._onAlways(
                jqXHRorResult,
                textStatus,
                jqXHRorError,
                options
              );
              that._sending -= 1;
              that._active -= 1;
              if (options.limitConcurrentUploads && options.limitConcurrentUploads > that._sending) {
                var nextSlot = that._slots.shift();
                while (nextSlot) {
                  if (that._getDeferredState(nextSlot) === "pending") {
                    nextSlot.resolve();
                    break;
                  }
                  nextSlot = that._slots.shift();
                }
              }
              if (that._active === 0) {
                that._trigger("stop");
              }
            });
            return jqXHR;
          };
          this._beforeSend(e, options);
          if (this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending) {
            if (this.options.limitConcurrentUploads > 1) {
              slot = $.Deferred();
              this._slots.push(slot);
              pipe = slot[that._promisePipe](send);
            } else {
              this._sequence = this._sequence[that._promisePipe](send, send);
              pipe = this._sequence;
            }
            pipe.abort = function() {
              aborted = [void 0, "abort", "abort"];
              if (!jqXHR) {
                if (slot) {
                  slot.rejectWith(options.context, aborted);
                }
                return send();
              }
              return jqXHR.abort();
            };
            return this._enhancePromise(pipe);
          }
          return send();
        },
        _onAdd: function(e, data) {
          var that = this, result = true, options = $.extend({}, this.options, data), files = data.files, filesLength = files.length, limit = options.limitMultiFileUploads, limitSize = options.limitMultiFileUploadSize, overhead = options.limitMultiFileUploadSizeOverhead, batchSize = 0, paramName = this._getParamName(options), paramNameSet, paramNameSlice, fileSet, i, j = 0;
          if (!filesLength) {
            return false;
          }
          if (limitSize && files[0].size === void 0) {
            limitSize = void 0;
          }
          if (!(options.singleFileUploads || limit || limitSize) || !this._isXHRUpload(options)) {
            fileSet = [files];
            paramNameSet = [paramName];
          } else if (!(options.singleFileUploads || limitSize) && limit) {
            fileSet = [];
            paramNameSet = [];
            for (i = 0; i < filesLength; i += limit) {
              fileSet.push(files.slice(i, i + limit));
              paramNameSlice = paramName.slice(i, i + limit);
              if (!paramNameSlice.length) {
                paramNameSlice = paramName;
              }
              paramNameSet.push(paramNameSlice);
            }
          } else if (!options.singleFileUploads && limitSize) {
            fileSet = [];
            paramNameSet = [];
            for (i = 0; i < filesLength; i = i + 1) {
              batchSize += files[i].size + overhead;
              if (i + 1 === filesLength || batchSize + files[i + 1].size + overhead > limitSize || limit && i + 1 - j >= limit) {
                fileSet.push(files.slice(j, i + 1));
                paramNameSlice = paramName.slice(j, i + 1);
                if (!paramNameSlice.length) {
                  paramNameSlice = paramName;
                }
                paramNameSet.push(paramNameSlice);
                j = i + 1;
                batchSize = 0;
              }
            }
          } else {
            paramNameSet = paramName;
          }
          data.originalFiles = files;
          $.each(fileSet || files, function(index, element) {
            var newData = $.extend({}, data);
            newData.files = fileSet ? element : [element];
            newData.paramName = paramNameSet[index];
            that._initResponseObject(newData);
            that._initProgressObject(newData);
            that._addConvenienceMethods(e, newData);
            result = that._trigger(
              "add",
              $.Event("add", { delegatedEvent: e }),
              newData
            );
            return result;
          });
          return result;
        },
        _replaceFileInput: function(data) {
          var input = data.fileInput, inputClone = input.clone(true), restoreFocus = input.is(document.activeElement);
          data.fileInputClone = inputClone;
          $("<form></form>").append(inputClone)[0].reset();
          input.after(inputClone).detach();
          if (restoreFocus) {
            inputClone.trigger("focus");
          }
          $.cleanData(input.off("remove"));
          this.options.fileInput = this.options.fileInput.map(function(i, el) {
            if (el === input[0]) {
              return inputClone[0];
            }
            return el;
          });
          if (input[0] === this.element[0]) {
            this.element = inputClone;
          }
        },
        _handleFileTreeEntry: function(entry, path) {
          var that = this, dfd = $.Deferred(), entries = [], dirReader, errorHandler = function(e) {
            if (e && !e.entry) {
              e.entry = entry;
            }
            dfd.resolve([e]);
          }, successHandler = function(entries2) {
            that._handleFileTreeEntries(entries2, path + entry.name + "/").done(function(files) {
              dfd.resolve(files);
            }).fail(errorHandler);
          }, readEntries = function() {
            dirReader.readEntries(function(results) {
              if (!results.length) {
                successHandler(entries);
              } else {
                entries = entries.concat(results);
                readEntries();
              }
            }, errorHandler);
          };
          path = path || "";
          if (entry.isFile) {
            if (entry._file) {
              entry._file.relativePath = path;
              dfd.resolve(entry._file);
            } else {
              entry.file(function(file) {
                file.relativePath = path;
                dfd.resolve(file);
              }, errorHandler);
            }
          } else if (entry.isDirectory) {
            dirReader = entry.createReader();
            readEntries();
          } else {
            dfd.resolve([]);
          }
          return dfd.promise();
        },
        _handleFileTreeEntries: function(entries, path) {
          var that = this;
          return $.when.apply(
            $,
            $.map(entries, function(entry) {
              return that._handleFileTreeEntry(entry, path);
            })
          )[this._promisePipe](function() {
            return Array.prototype.concat.apply([], arguments);
          });
        },
        _getDroppedFiles: function(dataTransfer) {
          dataTransfer = dataTransfer || {};
          var items = dataTransfer.items;
          if (items && items.length && (items[0].webkitGetAsEntry || items[0].getAsEntry)) {
            return this._handleFileTreeEntries(
              $.map(items, function(item) {
                var entry;
                if (item.webkitGetAsEntry) {
                  entry = item.webkitGetAsEntry();
                  if (entry) {
                    entry._file = item.getAsFile();
                  }
                  return entry;
                }
                return item.getAsEntry();
              })
            );
          }
          return $.Deferred().resolve($.makeArray(dataTransfer.files)).promise();
        },
        _getSingleFileInputFiles: function(fileInput) {
          fileInput = $(fileInput);
          var entries = fileInput.prop("entries"), files, value;
          if (entries && entries.length) {
            return this._handleFileTreeEntries(entries);
          }
          files = $.makeArray(fileInput.prop("files"));
          if (!files.length) {
            value = fileInput.prop("value");
            if (!value) {
              return $.Deferred().resolve([]).promise();
            }
            files = [{ name: value.replace(/^.*\\/, "") }];
          } else if (files[0].name === void 0 && files[0].fileName) {
            $.each(files, function(index, file) {
              file.name = file.fileName;
              file.size = file.fileSize;
            });
          }
          return $.Deferred().resolve(files).promise();
        },
        _getFileInputFiles: function(fileInput) {
          if (!(fileInput instanceof $) || fileInput.length === 1) {
            return this._getSingleFileInputFiles(fileInput);
          }
          return $.when.apply($, $.map(fileInput, this._getSingleFileInputFiles))[this._promisePipe](function() {
            return Array.prototype.concat.apply([], arguments);
          });
        },
        _onChange: function(e) {
          var that = this, data = {
            fileInput: $(e.target),
            form: $(e.target.form)
          };
          this._getFileInputFiles(data.fileInput).always(function(files) {
            data.files = files;
            if (that.options.replaceFileInput) {
              that._replaceFileInput(data);
            }
            if (that._trigger(
              "change",
              $.Event("change", { delegatedEvent: e }),
              data
            ) !== false) {
              that._onAdd(e, data);
            }
          });
        },
        _onPaste: function(e) {
          var items = e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.items, data = { files: [] };
          if (items && items.length) {
            $.each(items, function(index, item) {
              var file = item.getAsFile && item.getAsFile();
              if (file) {
                data.files.push(file);
              }
            });
            if (this._trigger(
              "paste",
              $.Event("paste", { delegatedEvent: e }),
              data
            ) !== false) {
              this._onAdd(e, data);
            }
          }
        },
        _onDrop: function(e) {
          e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
          var that = this, dataTransfer = e.dataTransfer, data = {};
          if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
            e.preventDefault();
            this._getDroppedFiles(dataTransfer).always(function(files) {
              data.files = files;
              if (that._trigger(
                "drop",
                $.Event("drop", { delegatedEvent: e }),
                data
              ) !== false) {
                that._onAdd(e, data);
              }
            });
          }
        },
        _onDragOver: getDragHandler("dragover"),
        _onDragEnter: getDragHandler("dragenter"),
        _onDragLeave: getDragHandler("dragleave"),
        _initEventHandlers: function() {
          if (this._isXHRUpload(this.options)) {
            this._on(this.options.dropZone, {
              dragover: this._onDragOver,
              drop: this._onDrop,
              // event.preventDefault() on dragenter is required for IE10+:
              dragenter: this._onDragEnter,
              // dragleave is not required, but added for completeness:
              dragleave: this._onDragLeave
            });
            this._on(this.options.pasteZone, {
              paste: this._onPaste
            });
          }
          if ($.support.fileInput) {
            this._on(this.options.fileInput, {
              change: this._onChange
            });
          }
        },
        _destroyEventHandlers: function() {
          this._off(this.options.dropZone, "dragenter dragleave dragover drop");
          this._off(this.options.pasteZone, "paste");
          this._off(this.options.fileInput, "change");
        },
        _destroy: function() {
          this._destroyEventHandlers();
        },
        _setOption: function(key, value) {
          var reinit = $.inArray(key, this._specialOptions) !== -1;
          if (reinit) {
            this._destroyEventHandlers();
          }
          this._super(key, value);
          if (reinit) {
            this._initSpecialOptions();
            this._initEventHandlers();
          }
        },
        _initSpecialOptions: function() {
          var options = this.options;
          if (options.fileInput === void 0) {
            options.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]');
          } else if (!(options.fileInput instanceof $)) {
            options.fileInput = $(options.fileInput);
          }
          if (!(options.dropZone instanceof $)) {
            options.dropZone = $(options.dropZone);
          }
          if (!(options.pasteZone instanceof $)) {
            options.pasteZone = $(options.pasteZone);
          }
        },
        _getRegExp: function(str) {
          var parts = str.split("/"), modifiers = parts.pop();
          parts.shift();
          return new RegExp(parts.join("/"), modifiers);
        },
        _isRegExpOption: function(key, value) {
          return key !== "url" && typeof value === "string" && /^\/.*\/[igm]{0,3}$/.test(value);
        },
        _initDataAttributes: function() {
          var that = this, options = this.options, data = this.element.data();
          $.each(this.element[0].attributes, function(index, attr) {
            var key = attr.name.toLowerCase(), value;
            if (/^data-/.test(key)) {
              key = key.slice(5).replace(/-[a-z]/g, function(str) {
                return str.charAt(1).toUpperCase();
              });
              value = data[key];
              if (that._isRegExpOption(key, value)) {
                value = that._getRegExp(value);
              }
              options[key] = value;
            }
          });
        },
        _create: function() {
          this._initDataAttributes();
          this._initSpecialOptions();
          this._slots = [];
          this._sequence = this._getXHRPromise(true);
          this._sending = this._active = 0;
          this._initProgressObject(this);
          this._initEventHandlers();
        },
        // This method is exposed to the widget API and allows to query
        // the number of active uploads:
        active: function() {
          return this._active;
        },
        // This method is exposed to the widget API and allows to query
        // the widget upload progress.
        // It returns an object with loaded, total and bitrate properties
        // for the running uploads:
        progress: function() {
          return this._progress;
        },
        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function(data) {
          var that = this;
          if (!data || this.options.disabled) {
            return;
          }
          if (data.fileInput && !data.files) {
            this._getFileInputFiles(data.fileInput).always(function(files) {
              data.files = files;
              that._onAdd(null, data);
            });
          } else {
            data.files = $.makeArray(data.files);
            this._onAdd(null, data);
          }
        },
        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files or fileInput property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function(data) {
          if (data && !this.options.disabled) {
            if (data.fileInput && !data.files) {
              var that = this, dfd = $.Deferred(), promise = dfd.promise(), jqXHR, aborted;
              promise.abort = function() {
                aborted = true;
                if (jqXHR) {
                  return jqXHR.abort();
                }
                dfd.reject(null, "abort", "abort");
                return promise;
              };
              this._getFileInputFiles(data.fileInput).always(function(files) {
                if (aborted) {
                  return;
                }
                if (!files.length) {
                  dfd.reject();
                  return;
                }
                data.files = files;
                jqXHR = that._onSend(null, data);
                jqXHR.then(
                  function(result, textStatus, jqXHR2) {
                    dfd.resolve(result, textStatus, jqXHR2);
                  },
                  function(jqXHR2, textStatus, errorThrown) {
                    dfd.reject(jqXHR2, textStatus, errorThrown);
                  }
                );
              });
              return this._enhancePromise(promise);
            }
            data.files = $.makeArray(data.files);
            if (data.files.length) {
              return this._onSend(null, data);
            }
          }
          return this._getXHRPromise(false, data && data.context);
        }
      });
    });
  }
});

// .yarn/__virtual__/blueimp-file-upload-virtual-5852c2001e/7/.yarn/berry/cache/blueimp-file-upload-patch-dc712ab947-10c0.zip/node_modules/blueimp-file-upload/js/jquery.iframe-transport.js
var require_jquery_iframe_transport = __commonJS({
  ".yarn/__virtual__/blueimp-file-upload-virtual-5852c2001e/7/.yarn/berry/cache/blueimp-file-upload-patch-dc712ab947-10c0.zip/node_modules/blueimp-file-upload/js/jquery.iframe-transport.js"(exports) {
    (function(factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
      } else if (typeof exports === "object") {
        factory(require_jquery_bundler_require_wrapper());
      } else {
        factory(window.jQuery);
      }
    })(function($) {
      "use strict";
      var counter = 0, jsonAPI = $, jsonParse = "parseJSON";
      if ("JSON" in window && "parse" in JSON) {
        jsonAPI = JSON;
        jsonParse = "parse";
      }
      $.ajaxTransport("iframe", function(options) {
        if (options.async) {
          var initialIframeSrc = options.initialIframeSrc || "javascript:false;", form, iframe, addParamChar;
          return {
            send: function(_, completeCallback) {
              form = $('<form style="display:none;"></form>');
              form.attr("accept-charset", options.formAcceptCharset);
              addParamChar = /\?/.test(options.url) ? "&" : "?";
              if (options.type === "DELETE") {
                options.url = options.url + addParamChar + "_method=DELETE";
                options.type = "POST";
              } else if (options.type === "PUT") {
                options.url = options.url + addParamChar + "_method=PUT";
                options.type = "POST";
              } else if (options.type === "PATCH") {
                options.url = options.url + addParamChar + "_method=PATCH";
                options.type = "POST";
              }
              counter += 1;
              iframe = $(
                '<iframe src="' + initialIframeSrc + '" name="iframe-transport-' + counter + '"></iframe>'
              ).on("load", function() {
                var fileInputClones, paramNames = Array.isArray(options.paramName) ? options.paramName : [options.paramName];
                iframe.off("load").on("load", function() {
                  var response;
                  try {
                    response = iframe.contents();
                    if (!response.length || !response[0].firstChild) {
                      throw new Error();
                    }
                  } catch (e) {
                    response = void 0;
                  }
                  completeCallback(200, "success", { iframe: response });
                  $('<iframe src="' + initialIframeSrc + '"></iframe>').appendTo(
                    form
                  );
                  window.setTimeout(function() {
                    form.remove();
                  }, 0);
                });
                form.prop("target", iframe.prop("name")).prop("action", options.url).prop("method", options.type);
                if (options.formData) {
                  $.each(options.formData, function(index, field) {
                    $('<input type="hidden"/>').prop("name", field.name).val(field.value).appendTo(form);
                  });
                }
                if (options.fileInput && options.fileInput.length && options.type === "POST") {
                  fileInputClones = options.fileInput.clone();
                  options.fileInput.after(function(index) {
                    return fileInputClones[index];
                  });
                  if (options.paramName) {
                    options.fileInput.each(function(index) {
                      $(this).prop("name", paramNames[index] || options.paramName);
                    });
                  }
                  form.append(options.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data");
                  options.fileInput.removeAttr("form");
                }
                window.setTimeout(function() {
                  form.trigger("submit");
                  if (fileInputClones && fileInputClones.length) {
                    options.fileInput.each(function(index, input) {
                      var clone = $(fileInputClones[index]);
                      $(input).prop("name", clone.prop("name")).attr("form", clone.attr("form"));
                      clone.replaceWith(input);
                    });
                  }
                }, 0);
              });
              form.append(iframe).appendTo(document.body);
            },
            abort: function() {
              if (iframe) {
                iframe.off("load").prop("src", initialIframeSrc);
              }
              if (form) {
                form.remove();
              }
            }
          };
        }
      });
      $.ajaxSetup({
        converters: {
          "iframe text": function(iframe) {
            return iframe && $(iframe[0].body).text();
          },
          "iframe json": function(iframe) {
            return iframe && jsonAPI[jsonParse]($(iframe[0].body).text());
          },
          "iframe html": function(iframe) {
            return iframe && $(iframe[0].body).html();
          },
          "iframe xml": function(iframe) {
            var xmlDoc = iframe && iframe[0];
            return xmlDoc && $.isXMLDoc(xmlDoc) ? xmlDoc : $.parseXML(
              xmlDoc.XMLDocument && xmlDoc.XMLDocument.xml || $(xmlDoc.body).html()
            );
          },
          "iframe script": function(iframe) {
            return iframe && $.globalEval($(iframe[0].body).text());
          }
        }
      });
    });
  }
});

export {
  require_jquery_fileupload,
  require_jquery_iframe_transport
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLnlhcm4vX192aXJ0dWFsX18vYmx1ZWltcC1maWxlLXVwbG9hZC12aXJ0dWFsLTU4NTJjMjAwMWUvNy8ueWFybi9iZXJyeS9jYWNoZS9ibHVlaW1wLWZpbGUtdXBsb2FkLXBhdGNoLWRjNzEyYWI5NDctMTBjMC56aXAvbm9kZV9tb2R1bGVzL2JsdWVpbXAtZmlsZS11cGxvYWQvanMvdmVuZG9yL2pxdWVyeS51aS53aWRnZXQuanMiLCAiLi4vLnlhcm4vX192aXJ0dWFsX18vYmx1ZWltcC1maWxlLXVwbG9hZC12aXJ0dWFsLTU4NTJjMjAwMWUvNy8ueWFybi9iZXJyeS9jYWNoZS9ibHVlaW1wLWZpbGUtdXBsb2FkLXBhdGNoLWRjNzEyYWI5NDctMTBjMC56aXAvbm9kZV9tb2R1bGVzL2JsdWVpbXAtZmlsZS11cGxvYWQvanMvanF1ZXJ5LmZpbGV1cGxvYWQuanMiLCAiLi4vLnlhcm4vX192aXJ0dWFsX18vYmx1ZWltcC1maWxlLXVwbG9hZC12aXJ0dWFsLTU4NTJjMjAwMWUvNy8ueWFybi9iZXJyeS9jYWNoZS9ibHVlaW1wLWZpbGUtdXBsb2FkLXBhdGNoLWRjNzEyYWI5NDctMTBjMC56aXAvbm9kZV9tb2R1bGVzL2JsdWVpbXAtZmlsZS11cGxvYWQvanMvanF1ZXJ5LmlmcmFtZS10cmFuc3BvcnQuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qISBqUXVlcnkgVUkgLSB2MS4xMi4xKzBiNzI0NmI2ZWVhZGZhOWUyNjk2ZTIyZjMyMzBmNjQ1MmY4MTI5ZGMgLSAyMDIwLTAyLTIwXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKiBJbmNsdWRlczogd2lkZ2V0LmpzXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yczsgTGljZW5zZWQgTUlUICovXG5cbi8qIGdsb2JhbCBkZWZpbmUsIHJlcXVpcmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduLCBuZXctY2FwLCBqc2RvYy9yZXF1aXJlLWpzZG9jICovXG5cbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAndXNlIHN0cmljdCc7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIC8vIE5vZGUvQ29tbW9uSlNcbiAgICBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICBmYWN0b3J5KHdpbmRvdy5qUXVlcnkpO1xuICB9XG59KShmdW5jdGlvbiAoJCkge1xuICAoJ3VzZSBzdHJpY3QnKTtcblxuICAkLnVpID0gJC51aSB8fCB7fTtcblxuICAkLnVpLnZlcnNpb24gPSAnMS4xMi4xJztcblxuICAvKiFcbiAgICogalF1ZXJ5IFVJIFdpZGdldCAxLjEyLjFcbiAgICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICAgKlxuICAgKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICAgKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gICAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAgICovXG5cbiAgLy8+PmxhYmVsOiBXaWRnZXRcbiAgLy8+Pmdyb3VwOiBDb3JlXG4gIC8vPj5kZXNjcmlwdGlvbjogUHJvdmlkZXMgYSBmYWN0b3J5IGZvciBjcmVhdGluZyBzdGF0ZWZ1bCB3aWRnZXRzIHdpdGggYSBjb21tb24gQVBJLlxuICAvLz4+ZG9jczogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20valF1ZXJ5LndpZGdldC9cbiAgLy8+PmRlbW9zOiBodHRwOi8vanF1ZXJ5dWkuY29tL3dpZGdldC9cblxuICAvLyBTdXBwb3J0OiBqUXVlcnkgMS45Lnggb3Igb2xkZXJcbiAgLy8gJC5leHByWyBcIjpcIiBdIGlzIGRlcHJlY2F0ZWQuXG4gIGlmICghJC5leHByLnBzZXVkb3MpIHtcbiAgICAkLmV4cHIucHNldWRvcyA9ICQuZXhwclsnOiddO1xuICB9XG5cbiAgLy8gU3VwcG9ydDogalF1ZXJ5IDEuMTEueCBvciBvbGRlclxuICAvLyAkLnVuaXF1ZSBoYXMgYmVlbiByZW5hbWVkIHRvICQudW5pcXVlU29ydFxuICBpZiAoISQudW5pcXVlU29ydCkge1xuICAgICQudW5pcXVlU29ydCA9ICQudW5pcXVlO1xuICB9XG5cbiAgdmFyIHdpZGdldFV1aWQgPSAwO1xuICB2YXIgd2lkZ2V0SGFzT3duUHJvcGVydHkgPSBBcnJheS5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciB3aWRnZXRTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAkLmNsZWFuRGF0YSA9IChmdW5jdGlvbiAob3JpZykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbXMpIHtcbiAgICAgIHZhciBldmVudHMsIGVsZW0sIGk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gICAgICBmb3IgKGkgPSAwOyAoZWxlbSA9IGVsZW1zW2ldKSAhPSBudWxsOyBpKyspIHtcbiAgICAgICAgLy8gT25seSB0cmlnZ2VyIHJlbW92ZSB3aGVuIG5lY2Vzc2FyeSB0byBzYXZlIHRpbWVcbiAgICAgICAgZXZlbnRzID0gJC5fZGF0YShlbGVtLCAnZXZlbnRzJyk7XG4gICAgICAgIGlmIChldmVudHMgJiYgZXZlbnRzLnJlbW92ZSkge1xuICAgICAgICAgICQoZWxlbSkudHJpZ2dlckhhbmRsZXIoJ3JlbW92ZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvcmlnKGVsZW1zKTtcbiAgICB9O1xuICB9KSgkLmNsZWFuRGF0YSk7XG5cbiAgJC53aWRnZXQgPSBmdW5jdGlvbiAobmFtZSwgYmFzZSwgcHJvdG90eXBlKSB7XG4gICAgdmFyIGV4aXN0aW5nQ29uc3RydWN0b3IsIGNvbnN0cnVjdG9yLCBiYXNlUHJvdG90eXBlO1xuXG4gICAgLy8gUHJveGllZFByb3RvdHlwZSBhbGxvd3MgdGhlIHByb3ZpZGVkIHByb3RvdHlwZSB0byByZW1haW4gdW5tb2RpZmllZFxuICAgIC8vIHNvIHRoYXQgaXQgY2FuIGJlIHVzZWQgYXMgYSBtaXhpbiBmb3IgbXVsdGlwbGUgd2lkZ2V0cyAoIzg4NzYpXG4gICAgdmFyIHByb3hpZWRQcm90b3R5cGUgPSB7fTtcblxuICAgIHZhciBuYW1lc3BhY2UgPSBuYW1lLnNwbGl0KCcuJylbMF07XG4gICAgbmFtZSA9IG5hbWUuc3BsaXQoJy4nKVsxXTtcbiAgICB2YXIgZnVsbE5hbWUgPSBuYW1lc3BhY2UgKyAnLScgKyBuYW1lO1xuXG4gICAgaWYgKCFwcm90b3R5cGUpIHtcbiAgICAgIHByb3RvdHlwZSA9IGJhc2U7XG4gICAgICBiYXNlID0gJC5XaWRnZXQ7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvdG90eXBlKSkge1xuICAgICAgcHJvdG90eXBlID0gJC5leHRlbmQuYXBwbHkobnVsbCwgW3t9XS5jb25jYXQocHJvdG90eXBlKSk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHNlbGVjdG9yIGZvciBwbHVnaW5cbiAgICAkLmV4cHIucHNldWRvc1tmdWxsTmFtZS50b0xvd2VyQ2FzZSgpXSA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICByZXR1cm4gISEkLmRhdGEoZWxlbSwgZnVsbE5hbWUpO1xuICAgIH07XG5cbiAgICAkW25hbWVzcGFjZV0gPSAkW25hbWVzcGFjZV0gfHwge307XG4gICAgZXhpc3RpbmdDb25zdHJ1Y3RvciA9ICRbbmFtZXNwYWNlXVtuYW1lXTtcbiAgICBjb25zdHJ1Y3RvciA9ICRbbmFtZXNwYWNlXVtuYW1lXSA9IGZ1bmN0aW9uIChvcHRpb25zLCBlbGVtZW50KSB7XG4gICAgICAvLyBBbGxvdyBpbnN0YW50aWF0aW9uIHdpdGhvdXQgXCJuZXdcIiBrZXl3b3JkXG4gICAgICBpZiAoIXRoaXMuX2NyZWF0ZVdpZGdldCkge1xuICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKG9wdGlvbnMsIGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICAvLyBBbGxvdyBpbnN0YW50aWF0aW9uIHdpdGhvdXQgaW5pdGlhbGl6aW5nIGZvciBzaW1wbGUgaW5oZXJpdGFuY2VcbiAgICAgIC8vIG11c3QgdXNlIFwibmV3XCIga2V5d29yZCAodGhlIGNvZGUgYWJvdmUgYWx3YXlzIHBhc3NlcyBhcmdzKVxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlV2lkZ2V0KG9wdGlvbnMsIGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBFeHRlbmQgd2l0aCB0aGUgZXhpc3RpbmcgY29uc3RydWN0b3IgdG8gY2Fycnkgb3ZlciBhbnkgc3RhdGljIHByb3BlcnRpZXNcbiAgICAkLmV4dGVuZChjb25zdHJ1Y3RvciwgZXhpc3RpbmdDb25zdHJ1Y3Rvciwge1xuICAgICAgdmVyc2lvbjogcHJvdG90eXBlLnZlcnNpb24sXG5cbiAgICAgIC8vIENvcHkgdGhlIG9iamVjdCB1c2VkIHRvIGNyZWF0ZSB0aGUgcHJvdG90eXBlIGluIGNhc2Ugd2UgbmVlZCB0b1xuICAgICAgLy8gcmVkZWZpbmUgdGhlIHdpZGdldCBsYXRlclxuICAgICAgX3Byb3RvOiAkLmV4dGVuZCh7fSwgcHJvdG90eXBlKSxcblxuICAgICAgLy8gVHJhY2sgd2lkZ2V0cyB0aGF0IGluaGVyaXQgZnJvbSB0aGlzIHdpZGdldCBpbiBjYXNlIHRoaXMgd2lkZ2V0IGlzXG4gICAgICAvLyByZWRlZmluZWQgYWZ0ZXIgYSB3aWRnZXQgaW5oZXJpdHMgZnJvbSBpdFxuICAgICAgX2NoaWxkQ29uc3RydWN0b3JzOiBbXVxuICAgIH0pO1xuXG4gICAgYmFzZVByb3RvdHlwZSA9IG5ldyBiYXNlKCk7XG5cbiAgICAvLyBXZSBuZWVkIHRvIG1ha2UgdGhlIG9wdGlvbnMgaGFzaCBhIHByb3BlcnR5IGRpcmVjdGx5IG9uIHRoZSBuZXcgaW5zdGFuY2VcbiAgICAvLyBvdGhlcndpc2Ugd2UnbGwgbW9kaWZ5IHRoZSBvcHRpb25zIGhhc2ggb24gdGhlIHByb3RvdHlwZSB0aGF0IHdlJ3JlXG4gICAgLy8gaW5oZXJpdGluZyBmcm9tXG4gICAgYmFzZVByb3RvdHlwZS5vcHRpb25zID0gJC53aWRnZXQuZXh0ZW5kKHt9LCBiYXNlUHJvdG90eXBlLm9wdGlvbnMpO1xuICAgICQuZWFjaChwcm90b3R5cGUsIGZ1bmN0aW9uIChwcm9wLCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHByb3hpZWRQcm90b3R5cGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcHJveGllZFByb3RvdHlwZVtwcm9wXSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIF9zdXBlcigpIHtcbiAgICAgICAgICByZXR1cm4gYmFzZS5wcm90b3R5cGVbcHJvcF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIF9zdXBlckFwcGx5KGFyZ3MpIHtcbiAgICAgICAgICByZXR1cm4gYmFzZS5wcm90b3R5cGVbcHJvcF0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBfX3N1cGVyID0gdGhpcy5fc3VwZXI7XG4gICAgICAgICAgdmFyIF9fc3VwZXJBcHBseSA9IHRoaXMuX3N1cGVyQXBwbHk7XG4gICAgICAgICAgdmFyIHJldHVyblZhbHVlO1xuXG4gICAgICAgICAgdGhpcy5fc3VwZXIgPSBfc3VwZXI7XG4gICAgICAgICAgdGhpcy5fc3VwZXJBcHBseSA9IF9zdXBlckFwcGx5O1xuXG4gICAgICAgICAgcmV0dXJuVmFsdWUgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgdGhpcy5fc3VwZXIgPSBfX3N1cGVyO1xuICAgICAgICAgIHRoaXMuX3N1cGVyQXBwbHkgPSBfX3N1cGVyQXBwbHk7XG5cbiAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgICAgIH07XG4gICAgICB9KSgpO1xuICAgIH0pO1xuICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9ICQud2lkZ2V0LmV4dGVuZChcbiAgICAgIGJhc2VQcm90b3R5cGUsXG4gICAgICB7XG4gICAgICAgIC8vIFRPRE86IHJlbW92ZSBzdXBwb3J0IGZvciB3aWRnZXRFdmVudFByZWZpeFxuICAgICAgICAvLyBhbHdheXMgdXNlIHRoZSBuYW1lICsgYSBjb2xvbiBhcyB0aGUgcHJlZml4LCBlLmcuLCBkcmFnZ2FibGU6c3RhcnRcbiAgICAgICAgLy8gZG9uJ3QgcHJlZml4IGZvciB3aWRnZXRzIHRoYXQgYXJlbid0IERPTS1iYXNlZFxuICAgICAgICB3aWRnZXRFdmVudFByZWZpeDogZXhpc3RpbmdDb25zdHJ1Y3RvclxuICAgICAgICAgID8gYmFzZVByb3RvdHlwZS53aWRnZXRFdmVudFByZWZpeCB8fCBuYW1lXG4gICAgICAgICAgOiBuYW1lXG4gICAgICB9LFxuICAgICAgcHJveGllZFByb3RvdHlwZSxcbiAgICAgIHtcbiAgICAgICAgY29uc3RydWN0b3I6IGNvbnN0cnVjdG9yLFxuICAgICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZSxcbiAgICAgICAgd2lkZ2V0TmFtZTogbmFtZSxcbiAgICAgICAgd2lkZ2V0RnVsbE5hbWU6IGZ1bGxOYW1lXG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIElmIHRoaXMgd2lkZ2V0IGlzIGJlaW5nIHJlZGVmaW5lZCB0aGVuIHdlIG5lZWQgdG8gZmluZCBhbGwgd2lkZ2V0cyB0aGF0XG4gICAgLy8gYXJlIGluaGVyaXRpbmcgZnJvbSBpdCBhbmQgcmVkZWZpbmUgYWxsIG9mIHRoZW0gc28gdGhhdCB0aGV5IGluaGVyaXQgZnJvbVxuICAgIC8vIHRoZSBuZXcgdmVyc2lvbiBvZiB0aGlzIHdpZGdldC4gV2UncmUgZXNzZW50aWFsbHkgdHJ5aW5nIHRvIHJlcGxhY2Ugb25lXG4gICAgLy8gbGV2ZWwgaW4gdGhlIHByb3RvdHlwZSBjaGFpbi5cbiAgICBpZiAoZXhpc3RpbmdDb25zdHJ1Y3Rvcikge1xuICAgICAgJC5lYWNoKGV4aXN0aW5nQ29uc3RydWN0b3IuX2NoaWxkQ29uc3RydWN0b3JzLCBmdW5jdGlvbiAoaSwgY2hpbGQpIHtcbiAgICAgICAgdmFyIGNoaWxkUHJvdG90eXBlID0gY2hpbGQucHJvdG90eXBlO1xuXG4gICAgICAgIC8vIFJlZGVmaW5lIHRoZSBjaGlsZCB3aWRnZXQgdXNpbmcgdGhlIHNhbWUgcHJvdG90eXBlIHRoYXQgd2FzXG4gICAgICAgIC8vIG9yaWdpbmFsbHkgdXNlZCwgYnV0IGluaGVyaXQgZnJvbSB0aGUgbmV3IHZlcnNpb24gb2YgdGhlIGJhc2VcbiAgICAgICAgJC53aWRnZXQoXG4gICAgICAgICAgY2hpbGRQcm90b3R5cGUubmFtZXNwYWNlICsgJy4nICsgY2hpbGRQcm90b3R5cGUud2lkZ2V0TmFtZSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcixcbiAgICAgICAgICBjaGlsZC5fcHJvdG9cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZW1vdmUgdGhlIGxpc3Qgb2YgZXhpc3RpbmcgY2hpbGQgY29uc3RydWN0b3JzIGZyb20gdGhlIG9sZCBjb25zdHJ1Y3RvclxuICAgICAgLy8gc28gdGhlIG9sZCBjaGlsZCBjb25zdHJ1Y3RvcnMgY2FuIGJlIGdhcmJhZ2UgY29sbGVjdGVkXG4gICAgICBkZWxldGUgZXhpc3RpbmdDb25zdHJ1Y3Rvci5fY2hpbGRDb25zdHJ1Y3RvcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhc2UuX2NoaWxkQ29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgICQud2lkZ2V0LmJyaWRnZShuYW1lLCBjb25zdHJ1Y3Rvcik7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH07XG5cbiAgJC53aWRnZXQuZXh0ZW5kID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHZhciBpbnB1dCA9IHdpZGdldFNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgaW5wdXRJbmRleCA9IDA7XG4gICAgdmFyIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICAgIHZhciBrZXk7XG4gICAgdmFyIHZhbHVlO1xuXG4gICAgZm9yICg7IGlucHV0SW5kZXggPCBpbnB1dExlbmd0aDsgaW5wdXRJbmRleCsrKSB7XG4gICAgICBmb3IgKGtleSBpbiBpbnB1dFtpbnB1dEluZGV4XSkge1xuICAgICAgICB2YWx1ZSA9IGlucHV0W2lucHV0SW5kZXhdW2tleV07XG4gICAgICAgIGlmIChcbiAgICAgICAgICB3aWRnZXRIYXNPd25Qcm9wZXJ0eS5jYWxsKGlucHV0W2lucHV0SW5kZXhdLCBrZXkpICYmXG4gICAgICAgICAgdmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBDbG9uZSBvYmplY3RzXG4gICAgICAgICAgaWYgKCQuaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gJC5pc1BsYWluT2JqZWN0KHRhcmdldFtrZXldKVxuICAgICAgICAgICAgICA/ICQud2lkZ2V0LmV4dGVuZCh7fSwgdGFyZ2V0W2tleV0sIHZhbHVlKVxuICAgICAgICAgICAgICA6IC8vIERvbid0IGV4dGVuZCBzdHJpbmdzLCBhcnJheXMsIGV0Yy4gd2l0aCBvYmplY3RzXG4gICAgICAgICAgICAgICAgJC53aWRnZXQuZXh0ZW5kKHt9LCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIC8vIENvcHkgZXZlcnl0aGluZyBlbHNlIGJ5IHJlZmVyZW5jZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gICQud2lkZ2V0LmJyaWRnZSA9IGZ1bmN0aW9uIChuYW1lLCBvYmplY3QpIHtcbiAgICB2YXIgZnVsbE5hbWUgPSBvYmplY3QucHJvdG90eXBlLndpZGdldEZ1bGxOYW1lIHx8IG5hbWU7XG4gICAgJC5mbltuYW1lXSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICB2YXIgaXNNZXRob2RDYWxsID0gdHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnO1xuICAgICAgdmFyIGFyZ3MgPSB3aWRnZXRTbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICB2YXIgcmV0dXJuVmFsdWUgPSB0aGlzO1xuXG4gICAgICBpZiAoaXNNZXRob2RDYWxsKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYW4gZW1wdHkgY29sbGVjdGlvbiwgd2UgbmVlZCB0byBoYXZlIHRoZSBpbnN0YW5jZSBtZXRob2RcbiAgICAgICAgLy8gcmV0dXJuIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIHRoZSBqUXVlcnkgaW5zdGFuY2VcbiAgICAgICAgaWYgKCF0aGlzLmxlbmd0aCAmJiBvcHRpb25zID09PSAnaW5zdGFuY2UnKSB7XG4gICAgICAgICAgcmV0dXJuVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtZXRob2RWYWx1ZTtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9ICQuZGF0YSh0aGlzLCBmdWxsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zID09PSAnaW5zdGFuY2UnKSB7XG4gICAgICAgICAgICAgIHJldHVyblZhbHVlID0gaW5zdGFuY2U7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICAgICAgICByZXR1cm4gJC5lcnJvcihcbiAgICAgICAgICAgICAgICAnY2Fubm90IGNhbGwgbWV0aG9kcyBvbiAnICtcbiAgICAgICAgICAgICAgICAgIG5hbWUgK1xuICAgICAgICAgICAgICAgICAgJyBwcmlvciB0byBpbml0aWFsaXphdGlvbjsgJyArXG4gICAgICAgICAgICAgICAgICBcImF0dGVtcHRlZCB0byBjYWxsIG1ldGhvZCAnXCIgK1xuICAgICAgICAgICAgICAgICAgb3B0aW9ucyArXG4gICAgICAgICAgICAgICAgICBcIidcIlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGluc3RhbmNlW29wdGlvbnNdICE9PSBcImZ1bmN0aW9uXCIgfHwgb3B0aW9ucy5jaGFyQXQoMCkgPT09ICdfJykge1xuICAgICAgICAgICAgICByZXR1cm4gJC5lcnJvcihcbiAgICAgICAgICAgICAgICBcIm5vIHN1Y2ggbWV0aG9kICdcIiArXG4gICAgICAgICAgICAgICAgICBvcHRpb25zICtcbiAgICAgICAgICAgICAgICAgIFwiJyBmb3IgXCIgK1xuICAgICAgICAgICAgICAgICAgbmFtZSArXG4gICAgICAgICAgICAgICAgICAnIHdpZGdldCBpbnN0YW5jZSdcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWV0aG9kVmFsdWUgPSBpbnN0YW5jZVtvcHRpb25zXS5hcHBseShpbnN0YW5jZSwgYXJncyk7XG5cbiAgICAgICAgICAgIGlmIChtZXRob2RWYWx1ZSAhPT0gaW5zdGFuY2UgJiYgbWV0aG9kVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9XG4gICAgICAgICAgICAgICAgbWV0aG9kVmFsdWUgJiYgbWV0aG9kVmFsdWUuanF1ZXJ5XG4gICAgICAgICAgICAgICAgICA/IHJldHVyblZhbHVlLnB1c2hTdGFjayhtZXRob2RWYWx1ZS5nZXQoKSlcbiAgICAgICAgICAgICAgICAgIDogbWV0aG9kVmFsdWU7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQWxsb3cgbXVsdGlwbGUgaGFzaGVzIHRvIGJlIHBhc3NlZCBvbiBpbml0XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCkge1xuICAgICAgICAgIG9wdGlvbnMgPSAkLndpZGdldC5leHRlbmQuYXBwbHkobnVsbCwgW29wdGlvbnNdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBpbnN0YW5jZSA9ICQuZGF0YSh0aGlzLCBmdWxsTmFtZSk7XG4gICAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5vcHRpb24ob3B0aW9ucyB8fCB7fSk7XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UuX2luaXQpIHtcbiAgICAgICAgICAgICAgaW5zdGFuY2UuX2luaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJC5kYXRhKHRoaXMsIGZ1bGxOYW1lLCBuZXcgb2JqZWN0KG9wdGlvbnMsIHRoaXMpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfTtcbiAgfTtcblxuICAkLldpZGdldCA9IGZ1bmN0aW9uICgvKiBvcHRpb25zLCBlbGVtZW50ICovKSB7fTtcbiAgJC5XaWRnZXQuX2NoaWxkQ29uc3RydWN0b3JzID0gW107XG5cbiAgJC5XaWRnZXQucHJvdG90eXBlID0ge1xuICAgIHdpZGdldE5hbWU6ICd3aWRnZXQnLFxuICAgIHdpZGdldEV2ZW50UHJlZml4OiAnJyxcbiAgICBkZWZhdWx0RWxlbWVudDogJzxkaXY+JyxcblxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuXG4gICAgICAvLyBDYWxsYmFja3NcbiAgICAgIGNyZWF0ZTogbnVsbFxuICAgIH0sXG5cbiAgICBfY3JlYXRlV2lkZ2V0OiBmdW5jdGlvbiAob3B0aW9ucywgZWxlbWVudCkge1xuICAgICAgZWxlbWVudCA9ICQoZWxlbWVudCB8fCB0aGlzLmRlZmF1bHRFbGVtZW50IHx8IHRoaXMpWzBdO1xuICAgICAgdGhpcy5lbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICAgIHRoaXMudXVpZCA9IHdpZGdldFV1aWQrKztcbiAgICAgIHRoaXMuZXZlbnROYW1lc3BhY2UgPSAnLicgKyB0aGlzLndpZGdldE5hbWUgKyB0aGlzLnV1aWQ7XG5cbiAgICAgIHRoaXMuYmluZGluZ3MgPSAkKCk7XG4gICAgICB0aGlzLmhvdmVyYWJsZSA9ICQoKTtcbiAgICAgIHRoaXMuZm9jdXNhYmxlID0gJCgpO1xuICAgICAgdGhpcy5jbGFzc2VzRWxlbWVudExvb2t1cCA9IHt9O1xuXG4gICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcykge1xuICAgICAgICAkLmRhdGEoZWxlbWVudCwgdGhpcy53aWRnZXRGdWxsTmFtZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuX29uKHRydWUsIHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZG9jdW1lbnQgPSAkKFxuICAgICAgICAgIGVsZW1lbnQuc3R5bGVcbiAgICAgICAgICAgID8gLy8gRWxlbWVudCB3aXRoaW4gdGhlIGRvY3VtZW50XG4gICAgICAgICAgICAgIGVsZW1lbnQub3duZXJEb2N1bWVudFxuICAgICAgICAgICAgOiAvLyBFbGVtZW50IGlzIHdpbmRvdyBvciBkb2N1bWVudFxuICAgICAgICAgICAgICBlbGVtZW50LmRvY3VtZW50IHx8IGVsZW1lbnRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy53aW5kb3cgPSAkKFxuICAgICAgICAgIHRoaXMuZG9jdW1lbnRbMF0uZGVmYXVsdFZpZXcgfHwgdGhpcy5kb2N1bWVudFswXS5wYXJlbnRXaW5kb3dcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vcHRpb25zID0gJC53aWRnZXQuZXh0ZW5kKFxuICAgICAgICB7fSxcbiAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICB0aGlzLl9nZXRDcmVhdGVPcHRpb25zKCksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuX2NyZWF0ZSgpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuX3NldE9wdGlvbkRpc2FibGVkKHRoaXMub3B0aW9ucy5kaXNhYmxlZCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3RyaWdnZXIoJ2NyZWF0ZScsIG51bGwsIHRoaXMuX2dldENyZWF0ZUV2ZW50RGF0YSgpKTtcbiAgICAgIHRoaXMuX2luaXQoKTtcbiAgICB9LFxuXG4gICAgX2dldENyZWF0ZU9wdGlvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9LFxuXG4gICAgX2dldENyZWF0ZUV2ZW50RGF0YTogJC5ub29wLFxuXG4gICAgX2NyZWF0ZTogJC5ub29wLFxuXG4gICAgX2luaXQ6ICQubm9vcCxcblxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgICAgdGhpcy5fZGVzdHJveSgpO1xuICAgICAgJC5lYWNoKHRoaXMuY2xhc3Nlc0VsZW1lbnRMb29rdXAsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoYXQuX3JlbW92ZUNsYXNzKHZhbHVlLCBrZXkpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFdlIGNhbiBwcm9iYWJseSByZW1vdmUgdGhlIHVuYmluZCBjYWxscyBpbiAyLjBcbiAgICAgIC8vIGFsbCBldmVudCBiaW5kaW5ncyBzaG91bGQgZ28gdGhyb3VnaCB0aGlzLl9vbigpXG4gICAgICB0aGlzLmVsZW1lbnQub2ZmKHRoaXMuZXZlbnROYW1lc3BhY2UpLnJlbW92ZURhdGEodGhpcy53aWRnZXRGdWxsTmFtZSk7XG4gICAgICB0aGlzLndpZGdldCgpLm9mZih0aGlzLmV2ZW50TmFtZXNwYWNlKS5yZW1vdmVBdHRyKCdhcmlhLWRpc2FibGVkJyk7XG5cbiAgICAgIC8vIENsZWFuIHVwIGV2ZW50cyBhbmQgc3RhdGVzXG4gICAgICB0aGlzLmJpbmRpbmdzLm9mZih0aGlzLmV2ZW50TmFtZXNwYWNlKTtcbiAgICB9LFxuXG4gICAgX2Rlc3Ryb3k6ICQubm9vcCxcblxuICAgIHdpZGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9LFxuXG4gICAgb3B0aW9uOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBrZXk7XG4gICAgICB2YXIgcGFydHM7XG4gICAgICB2YXIgY3VyT3B0aW9uO1xuICAgICAgdmFyIGk7XG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIERvbid0IHJldHVybiBhIHJlZmVyZW5jZSB0byB0aGUgaW50ZXJuYWwgaGFzaFxuICAgICAgICByZXR1cm4gJC53aWRnZXQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gSGFuZGxlIG5lc3RlZCBrZXlzLCBlLmcuLCBcImZvby5iYXJcIiA9PiB7IGZvbzogeyBiYXI6IF9fXyB9IH1cbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICBwYXJ0cyA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICBrZXkgPSBwYXJ0cy5zaGlmdCgpO1xuICAgICAgICBpZiAocGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgY3VyT3B0aW9uID0gb3B0aW9uc1trZXldID0gJC53aWRnZXQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnNba2V5XSk7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgY3VyT3B0aW9uW3BhcnRzW2ldXSA9IGN1ck9wdGlvbltwYXJ0c1tpXV0gfHwge307XG4gICAgICAgICAgICBjdXJPcHRpb24gPSBjdXJPcHRpb25bcGFydHNbaV1dO1xuICAgICAgICAgIH1cbiAgICAgICAgICBrZXkgPSBwYXJ0cy5wb3AoKTtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGN1ck9wdGlvbltrZXldID09PSB1bmRlZmluZWQgPyBudWxsIDogY3VyT3B0aW9uW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1ck9wdGlvbltrZXldID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNba2V5XSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IHRoaXMub3B0aW9uc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcHRpb25zW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXRPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX3NldE9wdGlvbnM6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICB2YXIga2V5O1xuXG4gICAgICBmb3IgKGtleSBpbiBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX3NldE9wdGlvbihrZXksIG9wdGlvbnNba2V5XSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfc2V0T3B0aW9uOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKGtleSA9PT0gJ2NsYXNzZXMnKSB7XG4gICAgICAgIHRoaXMuX3NldE9wdGlvbkNsYXNzZXModmFsdWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9wdGlvbnNba2V5XSA9IHZhbHVlO1xuXG4gICAgICBpZiAoa2V5ID09PSAnZGlzYWJsZWQnKSB7XG4gICAgICAgIHRoaXMuX3NldE9wdGlvbkRpc2FibGVkKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9zZXRPcHRpb25DbGFzc2VzOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBjbGFzc0tleSwgZWxlbWVudHMsIGN1cnJlbnRFbGVtZW50cztcblxuICAgICAgZm9yIChjbGFzc0tleSBpbiB2YWx1ZSkge1xuICAgICAgICBjdXJyZW50RWxlbWVudHMgPSB0aGlzLmNsYXNzZXNFbGVtZW50TG9va3VwW2NsYXNzS2V5XTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHZhbHVlW2NsYXNzS2V5XSA9PT0gdGhpcy5vcHRpb25zLmNsYXNzZXNbY2xhc3NLZXldIHx8XG4gICAgICAgICAgIWN1cnJlbnRFbGVtZW50cyB8fFxuICAgICAgICAgICFjdXJyZW50RWxlbWVudHMubGVuZ3RoXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2UgYXJlIGRvaW5nIHRoaXMgdG8gY3JlYXRlIGEgbmV3IGpRdWVyeSBvYmplY3QgYmVjYXVzZSB0aGUgX3JlbW92ZUNsYXNzKCkgY2FsbFxuICAgICAgICAvLyBvbiB0aGUgbmV4dCBsaW5lIGlzIGdvaW5nIHRvIGRlc3Ryb3kgdGhlIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBlbGVtZW50cyBiZWluZ1xuICAgICAgICAvLyB0cmFja2VkLiBXZSBuZWVkIHRvIHNhdmUgYSBjb3B5IG9mIHRoaXMgY29sbGVjdGlvbiBzbyB0aGF0IHdlIGNhbiBhZGQgdGhlIG5ldyBjbGFzc2VzXG4gICAgICAgIC8vIGJlbG93LlxuICAgICAgICBlbGVtZW50cyA9ICQoY3VycmVudEVsZW1lbnRzLmdldCgpKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQ2xhc3MoY3VycmVudEVsZW1lbnRzLCBjbGFzc0tleSk7XG5cbiAgICAgICAgLy8gV2UgZG9uJ3QgdXNlIF9hZGRDbGFzcygpIGhlcmUsIGJlY2F1c2UgdGhhdCB1c2VzIHRoaXMub3B0aW9ucy5jbGFzc2VzXG4gICAgICAgIC8vIGZvciBnZW5lcmF0aW5nIHRoZSBzdHJpbmcgb2YgY2xhc3Nlcy4gV2Ugd2FudCB0byB1c2UgdGhlIHZhbHVlIHBhc3NlZCBpbiBmcm9tXG4gICAgICAgIC8vIF9zZXRPcHRpb24oKSwgdGhpcyBpcyB0aGUgbmV3IHZhbHVlIG9mIHRoZSBjbGFzc2VzIG9wdGlvbiB3aGljaCB3YXMgcGFzc2VkIHRvXG4gICAgICAgIC8vIF9zZXRPcHRpb24oKS4gV2UgcGFzcyB0aGlzIHZhbHVlIGRpcmVjdGx5IHRvIF9jbGFzc2VzKCkuXG4gICAgICAgIGVsZW1lbnRzLmFkZENsYXNzKFxuICAgICAgICAgIHRoaXMuX2NsYXNzZXMoe1xuICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudHMsXG4gICAgICAgICAgICBrZXlzOiBjbGFzc0tleSxcbiAgICAgICAgICAgIGNsYXNzZXM6IHZhbHVlLFxuICAgICAgICAgICAgYWRkOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX3NldE9wdGlvbkRpc2FibGVkOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZUNsYXNzKFxuICAgICAgICB0aGlzLndpZGdldCgpLFxuICAgICAgICB0aGlzLndpZGdldEZ1bGxOYW1lICsgJy1kaXNhYmxlZCcsXG4gICAgICAgIG51bGwsXG4gICAgICAgICEhdmFsdWVcbiAgICAgICk7XG5cbiAgICAgIC8vIElmIHRoZSB3aWRnZXQgaXMgYmVjb21pbmcgZGlzYWJsZWQsIHRoZW4gbm90aGluZyBpcyBpbnRlcmFjdGl2ZVxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUNsYXNzKHRoaXMuaG92ZXJhYmxlLCBudWxsLCAndWktc3RhdGUtaG92ZXInKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQ2xhc3ModGhpcy5mb2N1c2FibGUsIG51bGwsICd1aS1zdGF0ZS1mb2N1cycpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbmFibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZXRPcHRpb25zKHsgZGlzYWJsZWQ6IGZhbHNlIH0pO1xuICAgIH0sXG5cbiAgICBkaXNhYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2V0T3B0aW9ucyh7IGRpc2FibGVkOiB0cnVlIH0pO1xuICAgIH0sXG5cbiAgICBfY2xhc3NlczogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIHZhciBmdWxsID0gW107XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZChcbiAgICAgICAge1xuICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICBjbGFzc2VzOiB0aGlzLm9wdGlvbnMuY2xhc3NlcyB8fCB7fVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuXG4gICAgICBmdW5jdGlvbiBiaW5kUmVtb3ZlRXZlbnQoKSB7XG4gICAgICAgIG9wdGlvbnMuZWxlbWVudC5lYWNoKGZ1bmN0aW9uIChfLCBlbGVtZW50KSB7XG4gICAgICAgICAgdmFyIGlzVHJhY2tlZCA9ICQubWFwKHRoYXQuY2xhc3Nlc0VsZW1lbnRMb29rdXAsIGZ1bmN0aW9uIChlbGVtZW50cykge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xuICAgICAgICAgIH0pLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudHMuaXMoZWxlbWVudCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoIWlzVHJhY2tlZCkge1xuICAgICAgICAgICAgdGhhdC5fb24oJChlbGVtZW50KSwge1xuICAgICAgICAgICAgICByZW1vdmU6ICdfdW50cmFja0NsYXNzZXNFbGVtZW50J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcHJvY2Vzc0NsYXNzU3RyaW5nKGNsYXNzZXMsIGNoZWNrT3B0aW9uKSB7XG4gICAgICAgIHZhciBjdXJyZW50LCBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGN1cnJlbnQgPSB0aGF0LmNsYXNzZXNFbGVtZW50TG9va3VwW2NsYXNzZXNbaV1dIHx8ICQoKTtcbiAgICAgICAgICBpZiAob3B0aW9ucy5hZGQpIHtcbiAgICAgICAgICAgIGJpbmRSZW1vdmVFdmVudCgpO1xuICAgICAgICAgICAgY3VycmVudCA9ICQoXG4gICAgICAgICAgICAgICQudW5pcXVlU29ydChjdXJyZW50LmdldCgpLmNvbmNhdChvcHRpb25zLmVsZW1lbnQuZ2V0KCkpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudCA9ICQoY3VycmVudC5ub3Qob3B0aW9ucy5lbGVtZW50KS5nZXQoKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoYXQuY2xhc3Nlc0VsZW1lbnRMb29rdXBbY2xhc3Nlc1tpXV0gPSBjdXJyZW50O1xuICAgICAgICAgIGZ1bGwucHVzaChjbGFzc2VzW2ldKTtcbiAgICAgICAgICBpZiAoY2hlY2tPcHRpb24gJiYgb3B0aW9ucy5jbGFzc2VzW2NsYXNzZXNbaV1dKSB7XG4gICAgICAgICAgICBmdWxsLnB1c2gob3B0aW9ucy5jbGFzc2VzW2NsYXNzZXNbaV1dKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMua2V5cykge1xuICAgICAgICBwcm9jZXNzQ2xhc3NTdHJpbmcob3B0aW9ucy5rZXlzLm1hdGNoKC9cXFMrL2cpIHx8IFtdLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLmV4dHJhKSB7XG4gICAgICAgIHByb2Nlc3NDbGFzc1N0cmluZyhvcHRpb25zLmV4dHJhLm1hdGNoKC9cXFMrL2cpIHx8IFtdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZ1bGwuam9pbignICcpO1xuICAgIH0sXG5cbiAgICBfdW50cmFja0NsYXNzZXNFbGVtZW50OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICQuZWFjaCh0aGF0LmNsYXNzZXNFbGVtZW50TG9va3VwLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoJC5pbkFycmF5KGV2ZW50LnRhcmdldCwgdmFsdWUpICE9PSAtMSkge1xuICAgICAgICAgIHRoYXQuY2xhc3Nlc0VsZW1lbnRMb29rdXBba2V5XSA9ICQodmFsdWUubm90KGV2ZW50LnRhcmdldCkuZ2V0KCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fb2ZmKCQoZXZlbnQudGFyZ2V0KSk7XG4gICAgfSxcblxuICAgIF9yZW1vdmVDbGFzczogZnVuY3Rpb24gKGVsZW1lbnQsIGtleXMsIGV4dHJhKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdG9nZ2xlQ2xhc3MoZWxlbWVudCwga2V5cywgZXh0cmEsIGZhbHNlKTtcbiAgICB9LFxuXG4gICAgX2FkZENsYXNzOiBmdW5jdGlvbiAoZWxlbWVudCwga2V5cywgZXh0cmEpIHtcbiAgICAgIHJldHVybiB0aGlzLl90b2dnbGVDbGFzcyhlbGVtZW50LCBrZXlzLCBleHRyYSwgdHJ1ZSk7XG4gICAgfSxcblxuICAgIF90b2dnbGVDbGFzczogZnVuY3Rpb24gKGVsZW1lbnQsIGtleXMsIGV4dHJhLCBhZGQpIHtcbiAgICAgIGFkZCA9IHR5cGVvZiBhZGQgPT09ICdib29sZWFuJyA/IGFkZCA6IGV4dHJhO1xuICAgICAgdmFyIHNoaWZ0ID0gdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnIHx8IGVsZW1lbnQgPT09IG51bGwsXG4gICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgZXh0cmE6IHNoaWZ0ID8ga2V5cyA6IGV4dHJhLFxuICAgICAgICAgIGtleXM6IHNoaWZ0ID8gZWxlbWVudCA6IGtleXMsXG4gICAgICAgICAgZWxlbWVudDogc2hpZnQgPyB0aGlzLmVsZW1lbnQgOiBlbGVtZW50LFxuICAgICAgICAgIGFkZDogYWRkXG4gICAgICAgIH07XG4gICAgICBvcHRpb25zLmVsZW1lbnQudG9nZ2xlQ2xhc3ModGhpcy5fY2xhc3NlcyhvcHRpb25zKSwgYWRkKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfb246IGZ1bmN0aW9uIChzdXBwcmVzc0Rpc2FibGVkQ2hlY2ssIGVsZW1lbnQsIGhhbmRsZXJzKSB7XG4gICAgICB2YXIgZGVsZWdhdGVFbGVtZW50O1xuICAgICAgdmFyIGluc3RhbmNlID0gdGhpcztcblxuICAgICAgLy8gTm8gc3VwcHJlc3NEaXNhYmxlZENoZWNrIGZsYWcsIHNodWZmbGUgYXJndW1lbnRzXG4gICAgICBpZiAodHlwZW9mIHN1cHByZXNzRGlzYWJsZWRDaGVjayAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGhhbmRsZXJzID0gZWxlbWVudDtcbiAgICAgICAgZWxlbWVudCA9IHN1cHByZXNzRGlzYWJsZWRDaGVjaztcbiAgICAgICAgc3VwcHJlc3NEaXNhYmxlZENoZWNrID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIE5vIGVsZW1lbnQgYXJndW1lbnQsIHNodWZmbGUgYW5kIHVzZSB0aGlzLmVsZW1lbnRcbiAgICAgIGlmICghaGFuZGxlcnMpIHtcbiAgICAgICAgaGFuZGxlcnMgPSBlbGVtZW50O1xuICAgICAgICBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICBkZWxlZ2F0ZUVsZW1lbnQgPSB0aGlzLndpZGdldCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudCA9IGRlbGVnYXRlRWxlbWVudCA9ICQoZWxlbWVudCk7XG4gICAgICAgIHRoaXMuYmluZGluZ3MgPSB0aGlzLmJpbmRpbmdzLmFkZChlbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgJC5lYWNoKGhhbmRsZXJzLCBmdW5jdGlvbiAoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlclByb3h5KCkge1xuICAgICAgICAgIC8vIEFsbG93IHdpZGdldHMgdG8gY3VzdG9taXplIHRoZSBkaXNhYmxlZCBoYW5kbGluZ1xuICAgICAgICAgIC8vIC0gZGlzYWJsZWQgYXMgYW4gYXJyYXkgaW5zdGVhZCBvZiBib29sZWFuXG4gICAgICAgICAgLy8gLSBkaXNhYmxlZCBjbGFzcyBhcyBtZXRob2QgZm9yIGRpc2FibGluZyBpbmRpdmlkdWFsIHBhcnRzXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXN1cHByZXNzRGlzYWJsZWRDaGVjayAmJlxuICAgICAgICAgICAgKGluc3RhbmNlLm9wdGlvbnMuZGlzYWJsZWQgPT09IHRydWUgfHxcbiAgICAgICAgICAgICAgJCh0aGlzKS5oYXNDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJyA/IGluc3RhbmNlW2hhbmRsZXJdIDogaGFuZGxlclxuICAgICAgICAgICkuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb3B5IHRoZSBndWlkIHNvIGRpcmVjdCB1bmJpbmRpbmcgd29ya3NcbiAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIGhhbmRsZXJQcm94eS5ndWlkID0gaGFuZGxlci5ndWlkID1cbiAgICAgICAgICAgIGhhbmRsZXIuZ3VpZCB8fCBoYW5kbGVyUHJveHkuZ3VpZCB8fCAkLmd1aWQrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtYXRjaCA9IGV2ZW50Lm1hdGNoKC9eKFtcXHc6LV0qKVxccyooLiopJC8pO1xuICAgICAgICB2YXIgZXZlbnROYW1lID0gbWF0Y2hbMV0gKyBpbnN0YW5jZS5ldmVudE5hbWVzcGFjZTtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gbWF0Y2hbMl07XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgZGVsZWdhdGVFbGVtZW50Lm9uKGV2ZW50TmFtZSwgc2VsZWN0b3IsIGhhbmRsZXJQcm94eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbWVudC5vbihldmVudE5hbWUsIGhhbmRsZXJQcm94eSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfb2ZmOiBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnROYW1lKSB7XG4gICAgICBldmVudE5hbWUgPVxuICAgICAgICAoZXZlbnROYW1lIHx8ICcnKS5zcGxpdCgnICcpLmpvaW4odGhpcy5ldmVudE5hbWVzcGFjZSArICcgJykgK1xuICAgICAgICB0aGlzLmV2ZW50TmFtZXNwYWNlO1xuICAgICAgZWxlbWVudC5vZmYoZXZlbnROYW1lKTtcblxuICAgICAgLy8gQ2xlYXIgdGhlIHN0YWNrIHRvIGF2b2lkIG1lbW9yeSBsZWFrcyAoIzEwMDU2KVxuICAgICAgdGhpcy5iaW5kaW5ncyA9ICQodGhpcy5iaW5kaW5ncy5ub3QoZWxlbWVudCkuZ2V0KCkpO1xuICAgICAgdGhpcy5mb2N1c2FibGUgPSAkKHRoaXMuZm9jdXNhYmxlLm5vdChlbGVtZW50KS5nZXQoKSk7XG4gICAgICB0aGlzLmhvdmVyYWJsZSA9ICQodGhpcy5ob3ZlcmFibGUubm90KGVsZW1lbnQpLmdldCgpKTtcbiAgICB9LFxuXG4gICAgX2RlbGF5OiBmdW5jdGlvbiAoaGFuZGxlciwgZGVsYXkpIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGVyUHJveHkoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgdHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnID8gaW5zdGFuY2VbaGFuZGxlcl0gOiBoYW5kbGVyXG4gICAgICAgICkuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2V0VGltZW91dChoYW5kbGVyUHJveHksIGRlbGF5IHx8IDApO1xuICAgIH0sXG5cbiAgICBfaG92ZXJhYmxlOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgdGhpcy5ob3ZlcmFibGUgPSB0aGlzLmhvdmVyYWJsZS5hZGQoZWxlbWVudCk7XG4gICAgICB0aGlzLl9vbihlbGVtZW50LCB7XG4gICAgICAgIG1vdXNlZW50ZXI6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHRoaXMuX2FkZENsYXNzKCQoZXZlbnQuY3VycmVudFRhcmdldCksIG51bGwsICd1aS1zdGF0ZS1ob3ZlcicpO1xuICAgICAgICB9LFxuICAgICAgICBtb3VzZWxlYXZlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICB0aGlzLl9yZW1vdmVDbGFzcygkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLCBudWxsLCAndWktc3RhdGUtaG92ZXInKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIF9mb2N1c2FibGU6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB0aGlzLmZvY3VzYWJsZSA9IHRoaXMuZm9jdXNhYmxlLmFkZChlbGVtZW50KTtcbiAgICAgIHRoaXMuX29uKGVsZW1lbnQsIHtcbiAgICAgICAgZm9jdXNpbjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgdGhpcy5fYWRkQ2xhc3MoJChldmVudC5jdXJyZW50VGFyZ2V0KSwgbnVsbCwgJ3VpLXN0YXRlLWZvY3VzJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvY3Vzb3V0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICB0aGlzLl9yZW1vdmVDbGFzcygkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLCBudWxsLCAndWktc3RhdGUtZm9jdXMnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIF90cmlnZ2VyOiBmdW5jdGlvbiAodHlwZSwgZXZlbnQsIGRhdGEpIHtcbiAgICAgIHZhciBwcm9wLCBvcmlnO1xuICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5vcHRpb25zW3R5cGVdO1xuXG4gICAgICBkYXRhID0gZGF0YSB8fCB7fTtcbiAgICAgIGV2ZW50ID0gJC5FdmVudChldmVudCk7XG4gICAgICBldmVudC50eXBlID0gKFxuICAgICAgICB0eXBlID09PSB0aGlzLndpZGdldEV2ZW50UHJlZml4ID8gdHlwZSA6IHRoaXMud2lkZ2V0RXZlbnRQcmVmaXggKyB0eXBlXG4gICAgICApLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIC8vIFRoZSBvcmlnaW5hbCBldmVudCBtYXkgY29tZSBmcm9tIGFueSBlbGVtZW50XG4gICAgICAvLyBzbyB3ZSBuZWVkIHRvIHJlc2V0IHRoZSB0YXJnZXQgb24gdGhlIG5ldyBldmVudFxuICAgICAgZXZlbnQudGFyZ2V0ID0gdGhpcy5lbGVtZW50WzBdO1xuXG4gICAgICAvLyBDb3B5IG9yaWdpbmFsIGV2ZW50IHByb3BlcnRpZXMgb3ZlciB0byB0aGUgbmV3IGV2ZW50XG4gICAgICBvcmlnID0gZXZlbnQub3JpZ2luYWxFdmVudDtcbiAgICAgIGlmIChvcmlnKSB7XG4gICAgICAgIGZvciAocHJvcCBpbiBvcmlnKSB7XG4gICAgICAgICAgaWYgKCEocHJvcCBpbiBldmVudCkpIHtcbiAgICAgICAgICAgIGV2ZW50W3Byb3BdID0gb3JpZ1twcm9wXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5lbGVtZW50LnRyaWdnZXIoZXZlbnQsIGRhdGEpO1xuICAgICAgcmV0dXJuICEoXG4gICAgICAgICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMuZWxlbWVudFswXSwgW2V2ZW50XS5jb25jYXQoZGF0YSkpID09PSBmYWxzZSkgfHxcbiAgICAgICAgZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKClcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gICQuZWFjaCh7IHNob3c6ICdmYWRlSW4nLCBoaWRlOiAnZmFkZU91dCcgfSwgZnVuY3Rpb24gKG1ldGhvZCwgZGVmYXVsdEVmZmVjdCkge1xuICAgICQuV2lkZ2V0LnByb3RvdHlwZVsnXycgKyBtZXRob2RdID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7IGVmZmVjdDogb3B0aW9ucyB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgaGFzT3B0aW9ucztcbiAgICAgIHZhciBlZmZlY3ROYW1lID0gIW9wdGlvbnNcbiAgICAgICAgPyBtZXRob2RcbiAgICAgICAgOiBvcHRpb25zID09PSB0cnVlIHx8IHR5cGVvZiBvcHRpb25zID09PSAnbnVtYmVyJ1xuICAgICAgICA/IGRlZmF1bHRFZmZlY3RcbiAgICAgICAgOiBvcHRpb25zLmVmZmVjdCB8fCBkZWZhdWx0RWZmZWN0O1xuXG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgb3B0aW9ucyA9IHsgZHVyYXRpb246IG9wdGlvbnMgfTtcbiAgICAgIH1cblxuICAgICAgaGFzT3B0aW9ucyA9ICEkLmlzRW1wdHlPYmplY3Qob3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmNvbXBsZXRlID0gY2FsbGJhY2s7XG5cbiAgICAgIGlmIChvcHRpb25zLmRlbGF5KSB7XG4gICAgICAgIGVsZW1lbnQuZGVsYXkob3B0aW9ucy5kZWxheSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNPcHRpb25zICYmICQuZWZmZWN0cyAmJiAkLmVmZmVjdHMuZWZmZWN0W2VmZmVjdE5hbWVdKSB7XG4gICAgICAgIGVsZW1lbnRbbWV0aG9kXShvcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoZWZmZWN0TmFtZSAhPT0gbWV0aG9kICYmIGVsZW1lbnRbZWZmZWN0TmFtZV0pIHtcbiAgICAgICAgZWxlbWVudFtlZmZlY3ROYW1lXShvcHRpb25zLmR1cmF0aW9uLCBvcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5xdWV1ZShmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICAgICQodGhpcylbbWV0aG9kXSgpO1xuICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChlbGVtZW50WzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbn0pO1xuIiwgIi8qXG4gKiBqUXVlcnkgRmlsZSBVcGxvYWQgUGx1Z2luXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9qUXVlcnktRmlsZS1VcGxvYWRcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMCwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyogZ2xvYmFsIGRlZmluZSwgcmVxdWlyZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbmV3LWNhcCAqL1xuXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIEFNRCBtb2R1bGU6XG4gICAgZGVmaW5lKFsnanF1ZXJ5JywgJ2pxdWVyeS11aS91aS93aWRnZXQnXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gTm9kZS9Db21tb25KUzpcbiAgICBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpLCByZXF1aXJlKCcuL3ZlbmRvci9qcXVlcnkudWkud2lkZ2V0JykpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsczpcbiAgICBmYWN0b3J5KHdpbmRvdy5qUXVlcnkpO1xuICB9XG59KShmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gRGV0ZWN0IGZpbGUgaW5wdXQgc3VwcG9ydCwgYmFzZWQgb25cbiAgLy8gaHR0cHM6Ly92aWxqYW1pcy5jb20vMjAxMi9maWxlLXVwbG9hZC1zdXBwb3J0LW9uLW1vYmlsZS9cbiAgJC5zdXBwb3J0LmZpbGVJbnB1dCA9ICEoXG4gICAgbmV3IFJlZ0V4cChcbiAgICAgIC8vIEhhbmRsZSBkZXZpY2VzIHdoaWNoIGdpdmUgZmFsc2UgcG9zaXRpdmVzIGZvciB0aGUgZmVhdHVyZSBkZXRlY3Rpb246XG4gICAgICAnKEFuZHJvaWQgKDFcXFxcLlswMTU2XXwyXFxcXC5bMDFdKSknICtcbiAgICAgICAgJ3woV2luZG93cyBQaG9uZSAoT1MgN3w4XFxcXC4wKSl8KFhCTFdQKXwoWnVuZVdQKXwoV1BEZXNrdG9wKScgK1xuICAgICAgICAnfCh3KGViKT9PU0Jyb3dzZXIpfCh3ZWJPUyknICtcbiAgICAgICAgJ3woS2luZGxlLygxXFxcXC4wfDJcXFxcLlswNV18M1xcXFwuMCkpJ1xuICAgICkudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkgfHxcbiAgICAvLyBGZWF0dXJlIGRldGVjdGlvbiBmb3IgYWxsIG90aGVyIGRldmljZXM6XG4gICAgJCgnPGlucHV0IHR5cGU9XCJmaWxlXCIvPicpLnByb3AoJ2Rpc2FibGVkJylcbiAgKTtcblxuICAvLyBUaGUgRmlsZVJlYWRlciBBUEkgaXMgbm90IGFjdHVhbGx5IHVzZWQsIGJ1dCB3b3JrcyBhcyBmZWF0dXJlIGRldGVjdGlvbixcbiAgLy8gYXMgc29tZSBTYWZhcmkgdmVyc2lvbnMgKDU/KSBzdXBwb3J0IFhIUiBmaWxlIHVwbG9hZHMgdmlhIHRoZSBGb3JtRGF0YSBBUEksXG4gIC8vIGJ1dCBub3Qgbm9uLW11bHRpcGFydCBYSFIgZmlsZSB1cGxvYWRzLlxuICAvLyB3aW5kb3cuWE1MSHR0cFJlcXVlc3RVcGxvYWQgaXMgbm90IGF2YWlsYWJsZSBvbiBJRTEwLCBzbyB3ZSBjaGVjayBmb3JcbiAgLy8gd2luZG93LlByb2dyZXNzRXZlbnQgaW5zdGVhZCB0byBkZXRlY3QgWEhSMiBmaWxlIHVwbG9hZCBjYXBhYmlsaXR5OlxuICAkLnN1cHBvcnQueGhyRmlsZVVwbG9hZCA9ICEhKHdpbmRvdy5Qcm9ncmVzc0V2ZW50ICYmIHdpbmRvdy5GaWxlUmVhZGVyKTtcbiAgJC5zdXBwb3J0LnhockZvcm1EYXRhRmlsZVVwbG9hZCA9ICEhd2luZG93LkZvcm1EYXRhO1xuXG4gIC8vIERldGVjdCBzdXBwb3J0IGZvciBCbG9iIHNsaWNpbmcgKHJlcXVpcmVkIGZvciBjaHVua2VkIHVwbG9hZHMpOlxuICAkLnN1cHBvcnQuYmxvYlNsaWNlID1cbiAgICB3aW5kb3cuQmxvYiAmJlxuICAgIChCbG9iLnByb3RvdHlwZS5zbGljZSB8fFxuICAgICAgQmxvYi5wcm90b3R5cGUud2Via2l0U2xpY2UgfHxcbiAgICAgIEJsb2IucHJvdG90eXBlLm1velNsaWNlKTtcblxuICAvKipcbiAgICogSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBkcmFnIGhhbmRsZXJzIGZvciBkcmFnb3Zlci9kcmFnZW50ZXIvZHJhZ2xlYXZlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIEV2ZW50IHR5cGVcbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBEcmFnIGhhbmRsZXJcbiAgICovXG4gIGZ1bmN0aW9uIGdldERyYWdIYW5kbGVyKHR5cGUpIHtcbiAgICB2YXIgaXNEcmFnT3ZlciA9IHR5cGUgPT09ICdkcmFnb3Zlcic7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLmRhdGFUcmFuc2ZlciA9IGUub3JpZ2luYWxFdmVudCAmJiBlLm9yaWdpbmFsRXZlbnQuZGF0YVRyYW5zZmVyO1xuICAgICAgdmFyIGRhdGFUcmFuc2ZlciA9IGUuZGF0YVRyYW5zZmVyO1xuICAgICAgaWYgKFxuICAgICAgICBkYXRhVHJhbnNmZXIgJiZcbiAgICAgICAgJC5pbkFycmF5KCdGaWxlcycsIGRhdGFUcmFuc2Zlci50eXBlcykgIT09IC0xICYmXG4gICAgICAgIHRoaXMuX3RyaWdnZXIodHlwZSwgJC5FdmVudCh0eXBlLCB7IGRlbGVnYXRlZEV2ZW50OiBlIH0pKSAhPT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChpc0RyYWdPdmVyKSB7XG4gICAgICAgICAgZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gVGhlIGZpbGV1cGxvYWQgd2lkZ2V0IGxpc3RlbnMgZm9yIGNoYW5nZSBldmVudHMgb24gZmlsZSBpbnB1dCBmaWVsZHMgZGVmaW5lZFxuICAvLyB2aWEgZmlsZUlucHV0IHNldHRpbmcgYW5kIHBhc3RlIG9yIGRyb3AgZXZlbnRzIG9mIHRoZSBnaXZlbiBkcm9wWm9uZS5cbiAgLy8gSW4gYWRkaXRpb24gdG8gdGhlIGRlZmF1bHQgalF1ZXJ5IFdpZGdldCBtZXRob2RzLCB0aGUgZmlsZXVwbG9hZCB3aWRnZXRcbiAgLy8gZXhwb3NlcyB0aGUgXCJhZGRcIiBhbmQgXCJzZW5kXCIgbWV0aG9kcywgdG8gYWRkIG9yIGRpcmVjdGx5IHNlbmQgZmlsZXMgdXNpbmdcbiAgLy8gdGhlIGZpbGV1cGxvYWQgQVBJLlxuICAvLyBCeSBkZWZhdWx0LCBmaWxlcyBhZGRlZCB2aWEgZmlsZSBpbnB1dCBzZWxlY3Rpb24sIHBhc3RlLCBkcmFnICYgZHJvcCBvclxuICAvLyBcImFkZFwiIG1ldGhvZCBhcmUgdXBsb2FkZWQgaW1tZWRpYXRlbHksIGJ1dCBpdCBpcyBwb3NzaWJsZSB0byBvdmVycmlkZVxuICAvLyB0aGUgXCJhZGRcIiBjYWxsYmFjayBvcHRpb24gdG8gcXVldWUgZmlsZSB1cGxvYWRzLlxuICAkLndpZGdldCgnYmx1ZWltcC5maWxldXBsb2FkJywge1xuICAgIG9wdGlvbnM6IHtcbiAgICAgIC8vIFRoZSBkcm9wIHRhcmdldCBlbGVtZW50KHMpLCBieSB0aGUgZGVmYXVsdCB0aGUgY29tcGxldGUgZG9jdW1lbnQuXG4gICAgICAvLyBTZXQgdG8gbnVsbCB0byBkaXNhYmxlIGRyYWcgJiBkcm9wIHN1cHBvcnQ6XG4gICAgICBkcm9wWm9uZTogJChkb2N1bWVudCksXG4gICAgICAvLyBUaGUgcGFzdGUgdGFyZ2V0IGVsZW1lbnQocyksIGJ5IHRoZSBkZWZhdWx0IHVuZGVmaW5lZC5cbiAgICAgIC8vIFNldCB0byBhIERPTSBub2RlIG9yIGpRdWVyeSBvYmplY3QgdG8gZW5hYmxlIGZpbGUgcGFzdGluZzpcbiAgICAgIHBhc3RlWm9uZTogdW5kZWZpbmVkLFxuICAgICAgLy8gVGhlIGZpbGUgaW5wdXQgZmllbGQocyksIHRoYXQgYXJlIGxpc3RlbmVkIHRvIGZvciBjaGFuZ2UgZXZlbnRzLlxuICAgICAgLy8gSWYgdW5kZWZpbmVkLCBpdCBpcyBzZXQgdG8gdGhlIGZpbGUgaW5wdXQgZmllbGRzIGluc2lkZVxuICAgICAgLy8gb2YgdGhlIHdpZGdldCBlbGVtZW50IG9uIHBsdWdpbiBpbml0aWFsaXphdGlvbi5cbiAgICAgIC8vIFNldCB0byBudWxsIHRvIGRpc2FibGUgdGhlIGNoYW5nZSBsaXN0ZW5lci5cbiAgICAgIGZpbGVJbnB1dDogdW5kZWZpbmVkLFxuICAgICAgLy8gQnkgZGVmYXVsdCwgdGhlIGZpbGUgaW5wdXQgZmllbGQgaXMgcmVwbGFjZWQgd2l0aCBhIGNsb25lIGFmdGVyXG4gICAgICAvLyBlYWNoIGlucHV0IGZpZWxkIGNoYW5nZSBldmVudC4gVGhpcyBpcyByZXF1aXJlZCBmb3IgaWZyYW1lIHRyYW5zcG9ydFxuICAgICAgLy8gcXVldWVzIGFuZCBhbGxvd3MgY2hhbmdlIGV2ZW50cyB0byBiZSBmaXJlZCBmb3IgdGhlIHNhbWUgZmlsZVxuICAgICAgLy8gc2VsZWN0aW9uLCBidXQgY2FuIGJlIGRpc2FibGVkIGJ5IHNldHRpbmcgdGhlIGZvbGxvd2luZyBvcHRpb24gdG8gZmFsc2U6XG4gICAgICByZXBsYWNlRmlsZUlucHV0OiB0cnVlLFxuICAgICAgLy8gVGhlIHBhcmFtZXRlciBuYW1lIGZvciB0aGUgZmlsZSBmb3JtIGRhdGEgKHRoZSByZXF1ZXN0IGFyZ3VtZW50IG5hbWUpLlxuICAgICAgLy8gSWYgdW5kZWZpbmVkIG9yIGVtcHR5LCB0aGUgbmFtZSBwcm9wZXJ0eSBvZiB0aGUgZmlsZSBpbnB1dCBmaWVsZCBpc1xuICAgICAgLy8gdXNlZCwgb3IgXCJmaWxlc1tdXCIgaWYgdGhlIGZpbGUgaW5wdXQgbmFtZSBwcm9wZXJ0eSBpcyBhbHNvIGVtcHR5LFxuICAgICAgLy8gY2FuIGJlIGEgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHN0cmluZ3M6XG4gICAgICBwYXJhbU5hbWU6IHVuZGVmaW5lZCxcbiAgICAgIC8vIEJ5IGRlZmF1bHQsIGVhY2ggZmlsZSBvZiBhIHNlbGVjdGlvbiBpcyB1cGxvYWRlZCB1c2luZyBhbiBpbmRpdmlkdWFsXG4gICAgICAvLyByZXF1ZXN0IGZvciBYSFIgdHlwZSB1cGxvYWRzLiBTZXQgdG8gZmFsc2UgdG8gdXBsb2FkIGZpbGVcbiAgICAgIC8vIHNlbGVjdGlvbnMgaW4gb25lIHJlcXVlc3QgZWFjaDpcbiAgICAgIHNpbmdsZUZpbGVVcGxvYWRzOiB0cnVlLFxuICAgICAgLy8gVG8gbGltaXQgdGhlIG51bWJlciBvZiBmaWxlcyB1cGxvYWRlZCB3aXRoIG9uZSBYSFIgcmVxdWVzdCxcbiAgICAgIC8vIHNldCB0aGUgZm9sbG93aW5nIG9wdGlvbiB0byBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiAwOlxuICAgICAgbGltaXRNdWx0aUZpbGVVcGxvYWRzOiB1bmRlZmluZWQsXG4gICAgICAvLyBUaGUgZm9sbG93aW5nIG9wdGlvbiBsaW1pdHMgdGhlIG51bWJlciBvZiBmaWxlcyB1cGxvYWRlZCB3aXRoIG9uZVxuICAgICAgLy8gWEhSIHJlcXVlc3QgdG8ga2VlcCB0aGUgcmVxdWVzdCBzaXplIHVuZGVyIG9yIGVxdWFsIHRvIHRoZSBkZWZpbmVkXG4gICAgICAvLyBsaW1pdCBpbiBieXRlczpcbiAgICAgIGxpbWl0TXVsdGlGaWxlVXBsb2FkU2l6ZTogdW5kZWZpbmVkLFxuICAgICAgLy8gTXVsdGlwYXJ0IGZpbGUgdXBsb2FkcyBhZGQgYSBudW1iZXIgb2YgYnl0ZXMgdG8gZWFjaCB1cGxvYWRlZCBmaWxlLFxuICAgICAgLy8gdGhlcmVmb3JlIHRoZSBmb2xsb3dpbmcgb3B0aW9uIGFkZHMgYW4gb3ZlcmhlYWQgZm9yIGVhY2ggZmlsZSB1c2VkXG4gICAgICAvLyBpbiB0aGUgbGltaXRNdWx0aUZpbGVVcGxvYWRTaXplIGNvbmZpZ3VyYXRpb246XG4gICAgICBsaW1pdE11bHRpRmlsZVVwbG9hZFNpemVPdmVyaGVhZDogNTEyLFxuICAgICAgLy8gU2V0IHRoZSBmb2xsb3dpbmcgb3B0aW9uIHRvIHRydWUgdG8gaXNzdWUgYWxsIGZpbGUgdXBsb2FkIHJlcXVlc3RzXG4gICAgICAvLyBpbiBhIHNlcXVlbnRpYWwgb3JkZXI6XG4gICAgICBzZXF1ZW50aWFsVXBsb2FkczogZmFsc2UsXG4gICAgICAvLyBUbyBsaW1pdCB0aGUgbnVtYmVyIG9mIGNvbmN1cnJlbnQgdXBsb2FkcyxcbiAgICAgIC8vIHNldCB0aGUgZm9sbG93aW5nIG9wdGlvbiB0byBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiAwOlxuICAgICAgbGltaXRDb25jdXJyZW50VXBsb2FkczogdW5kZWZpbmVkLFxuICAgICAgLy8gU2V0IHRoZSBmb2xsb3dpbmcgb3B0aW9uIHRvIHRydWUgdG8gZm9yY2UgaWZyYW1lIHRyYW5zcG9ydCB1cGxvYWRzOlxuICAgICAgZm9yY2VJZnJhbWVUcmFuc3BvcnQ6IGZhbHNlLFxuICAgICAgLy8gU2V0IHRoZSBmb2xsb3dpbmcgb3B0aW9uIHRvIHRoZSBsb2NhdGlvbiBvZiBhIHJlZGlyZWN0IHVybCBvbiB0aGVcbiAgICAgIC8vIG9yaWdpbiBzZXJ2ZXIsIGZvciBjcm9zcy1kb21haW4gaWZyYW1lIHRyYW5zcG9ydCB1cGxvYWRzOlxuICAgICAgcmVkaXJlY3Q6IHVuZGVmaW5lZCxcbiAgICAgIC8vIFRoZSBwYXJhbWV0ZXIgbmFtZSBmb3IgdGhlIHJlZGlyZWN0IHVybCwgc2VudCBhcyBwYXJ0IG9mIHRoZSBmb3JtXG4gICAgICAvLyBkYXRhIGFuZCBzZXQgdG8gJ3JlZGlyZWN0JyBpZiB0aGlzIG9wdGlvbiBpcyBlbXB0eTpcbiAgICAgIHJlZGlyZWN0UGFyYW1OYW1lOiB1bmRlZmluZWQsXG4gICAgICAvLyBTZXQgdGhlIGZvbGxvd2luZyBvcHRpb24gdG8gdGhlIGxvY2F0aW9uIG9mIGEgcG9zdE1lc3NhZ2Ugd2luZG93LFxuICAgICAgLy8gdG8gZW5hYmxlIHBvc3RNZXNzYWdlIHRyYW5zcG9ydCB1cGxvYWRzOlxuICAgICAgcG9zdE1lc3NhZ2U6IHVuZGVmaW5lZCxcbiAgICAgIC8vIEJ5IGRlZmF1bHQsIFhIUiBmaWxlIHVwbG9hZHMgYXJlIHNlbnQgYXMgbXVsdGlwYXJ0L2Zvcm0tZGF0YS5cbiAgICAgIC8vIFRoZSBpZnJhbWUgdHJhbnNwb3J0IGlzIGFsd2F5cyB1c2luZyBtdWx0aXBhcnQvZm9ybS1kYXRhLlxuICAgICAgLy8gU2V0IHRvIGZhbHNlIHRvIGVuYWJsZSBub24tbXVsdGlwYXJ0IFhIUiB1cGxvYWRzOlxuICAgICAgbXVsdGlwYXJ0OiB0cnVlLFxuICAgICAgLy8gVG8gdXBsb2FkIGxhcmdlIGZpbGVzIGluIHNtYWxsZXIgY2h1bmtzLCBzZXQgdGhlIGZvbGxvd2luZyBvcHRpb25cbiAgICAgIC8vIHRvIGEgcHJlZmVycmVkIG1heGltdW0gY2h1bmsgc2l6ZS4gSWYgc2V0IHRvIDAsIG51bGwgb3IgdW5kZWZpbmVkLFxuICAgICAgLy8gb3IgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgcmVxdWlyZWQgQmxvYiBBUEksIGZpbGVzIHdpbGxcbiAgICAgIC8vIGJlIHVwbG9hZGVkIGFzIGEgd2hvbGUuXG4gICAgICBtYXhDaHVua1NpemU6IHVuZGVmaW5lZCxcbiAgICAgIC8vIFdoZW4gYSBub24tbXVsdGlwYXJ0IHVwbG9hZCBvciBhIGNodW5rZWQgbXVsdGlwYXJ0IHVwbG9hZCBoYXMgYmVlblxuICAgICAgLy8gYWJvcnRlZCwgdGhpcyBvcHRpb24gY2FuIGJlIHVzZWQgdG8gcmVzdW1lIHRoZSB1cGxvYWQgYnkgc2V0dGluZ1xuICAgICAgLy8gaXQgdG8gdGhlIHNpemUgb2YgdGhlIGFscmVhZHkgdXBsb2FkZWQgYnl0ZXMuIFRoaXMgb3B0aW9uIGlzIG1vc3RcbiAgICAgIC8vIHVzZWZ1bCB3aGVuIG1vZGlmeWluZyB0aGUgb3B0aW9ucyBvYmplY3QgaW5zaWRlIG9mIHRoZSBcImFkZFwiIG9yXG4gICAgICAvLyBcInNlbmRcIiBjYWxsYmFja3MsIGFzIHRoZSBvcHRpb25zIGFyZSBjbG9uZWQgZm9yIGVhY2ggZmlsZSB1cGxvYWQuXG4gICAgICB1cGxvYWRlZEJ5dGVzOiB1bmRlZmluZWQsXG4gICAgICAvLyBCeSBkZWZhdWx0LCBmYWlsZWQgKGFib3J0IG9yIGVycm9yKSBmaWxlIHVwbG9hZHMgYXJlIHJlbW92ZWQgZnJvbSB0aGVcbiAgICAgIC8vIGdsb2JhbCBwcm9ncmVzcyBjYWxjdWxhdGlvbi4gU2V0IHRoZSBmb2xsb3dpbmcgb3B0aW9uIHRvIGZhbHNlIHRvXG4gICAgICAvLyBwcmV2ZW50IHJlY2FsY3VsYXRpbmcgdGhlIGdsb2JhbCBwcm9ncmVzcyBkYXRhOlxuICAgICAgcmVjYWxjdWxhdGVQcm9ncmVzczogdHJ1ZSxcbiAgICAgIC8vIEludGVydmFsIGluIG1pbGxpc2Vjb25kcyB0byBjYWxjdWxhdGUgYW5kIHRyaWdnZXIgcHJvZ3Jlc3MgZXZlbnRzOlxuICAgICAgcHJvZ3Jlc3NJbnRlcnZhbDogMTAwLFxuICAgICAgLy8gSW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzIHRvIGNhbGN1bGF0ZSBwcm9ncmVzcyBiaXRyYXRlOlxuICAgICAgYml0cmF0ZUludGVydmFsOiA1MDAsXG4gICAgICAvLyBCeSBkZWZhdWx0LCB1cGxvYWRzIGFyZSBzdGFydGVkIGF1dG9tYXRpY2FsbHkgd2hlbiBhZGRpbmcgZmlsZXM6XG4gICAgICBhdXRvVXBsb2FkOiB0cnVlLFxuICAgICAgLy8gQnkgZGVmYXVsdCwgZHVwbGljYXRlIGZpbGUgbmFtZXMgYXJlIGV4cGVjdGVkIHRvIGJlIGhhbmRsZWQgb25cbiAgICAgIC8vIHRoZSBzZXJ2ZXItc2lkZS4gSWYgdGhpcyBpcyBub3QgcG9zc2libGUgKGUuZy4gd2hlbiB1cGxvYWRpbmdcbiAgICAgIC8vIGZpbGVzIGRpcmVjdGx5IHRvIEFtYXpvbiBTMyksIHRoZSBmb2xsb3dpbmcgb3B0aW9uIGNhbiBiZSBzZXQgdG9cbiAgICAgIC8vIGFuIGVtcHR5IG9iamVjdCBvciBhbiBvYmplY3QgbWFwcGluZyBleGlzdGluZyBmaWxlbmFtZXMsIGUuZy46XG4gICAgICAvLyB7IFwiaW1hZ2UuanBnXCI6IHRydWUsIFwiaW1hZ2UgKDEpLmpwZ1wiOiB0cnVlIH1cbiAgICAgIC8vIElmIGl0IGlzIHNldCwgYWxsIGZpbGVzIHdpbGwgYmUgdXBsb2FkZWQgd2l0aCB1bmlxdWUgZmlsZW5hbWVzLFxuICAgICAgLy8gYWRkaW5nIGluY3JlYXNpbmcgbnVtYmVyIHN1ZmZpeGVzIGlmIG5lY2Vzc2FyeSwgZS5nLjpcbiAgICAgIC8vIFwiaW1hZ2UgKDIpLmpwZ1wiXG4gICAgICB1bmlxdWVGaWxlbmFtZXM6IHVuZGVmaW5lZCxcblxuICAgICAgLy8gRXJyb3IgYW5kIGluZm8gbWVzc2FnZXM6XG4gICAgICBtZXNzYWdlczoge1xuICAgICAgICB1cGxvYWRlZEJ5dGVzOiAnVXBsb2FkZWQgYnl0ZXMgZXhjZWVkIGZpbGUgc2l6ZSdcbiAgICAgIH0sXG5cbiAgICAgIC8vIFRyYW5zbGF0aW9uIGZ1bmN0aW9uLCBnZXRzIHRoZSBtZXNzYWdlIGtleSB0byBiZSB0cmFuc2xhdGVkXG4gICAgICAvLyBhbmQgYW4gb2JqZWN0IHdpdGggY29udGV4dCBzcGVjaWZpYyBkYXRhIGFzIGFyZ3VtZW50czpcbiAgICAgIGkxOG46IGZ1bmN0aW9uIChtZXNzYWdlLCBjb250ZXh0KSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBtZXNzYWdlID0gdGhpcy5tZXNzYWdlc1ttZXNzYWdlXSB8fCBtZXNzYWdlLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmIChjb250ZXh0KSB7XG4gICAgICAgICAgJC5lYWNoKGNvbnRleHQsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ3snICsga2V5ICsgJ30nLCB2YWx1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICB9LFxuXG4gICAgICAvLyBBZGRpdGlvbmFsIGZvcm0gZGF0YSB0byBiZSBzZW50IGFsb25nIHdpdGggdGhlIGZpbGUgdXBsb2FkcyBjYW4gYmUgc2V0XG4gICAgICAvLyB1c2luZyB0aGlzIG9wdGlvbiwgd2hpY2ggYWNjZXB0cyBhbiBhcnJheSBvZiBvYmplY3RzIHdpdGggbmFtZSBhbmRcbiAgICAgIC8vIHZhbHVlIHByb3BlcnRpZXMsIGEgZnVuY3Rpb24gcmV0dXJuaW5nIHN1Y2ggYW4gYXJyYXksIGEgRm9ybURhdGFcbiAgICAgIC8vIG9iamVjdCAoZm9yIFhIUiBmaWxlIHVwbG9hZHMpLCBvciBhIHNpbXBsZSBvYmplY3QuXG4gICAgICAvLyBUaGUgZm9ybSBvZiB0aGUgZmlyc3QgZmlsZUlucHV0IGlzIGdpdmVuIGFzIHBhcmFtZXRlciB0byB0aGUgZnVuY3Rpb246XG4gICAgICBmb3JtRGF0YTogZnVuY3Rpb24gKGZvcm0pIHtcbiAgICAgICAgcmV0dXJuIGZvcm0uc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgIH0sXG5cbiAgICAgIC8vIFRoZSBhZGQgY2FsbGJhY2sgaXMgaW52b2tlZCBhcyBzb29uIGFzIGZpbGVzIGFyZSBhZGRlZCB0byB0aGUgZmlsZXVwbG9hZFxuICAgICAgLy8gd2lkZ2V0ICh2aWEgZmlsZSBpbnB1dCBzZWxlY3Rpb24sIGRyYWcgJiBkcm9wLCBwYXN0ZSBvciBhZGQgQVBJIGNhbGwpLlxuICAgICAgLy8gSWYgdGhlIHNpbmdsZUZpbGVVcGxvYWRzIG9wdGlvbiBpcyBlbmFibGVkLCB0aGlzIGNhbGxiYWNrIHdpbGwgYmVcbiAgICAgIC8vIGNhbGxlZCBvbmNlIGZvciBlYWNoIGZpbGUgaW4gdGhlIHNlbGVjdGlvbiBmb3IgWEhSIGZpbGUgdXBsb2FkcywgZWxzZVxuICAgICAgLy8gb25jZSBmb3IgZWFjaCBmaWxlIHNlbGVjdGlvbi5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgdXBsb2FkIHN0YXJ0cyB3aGVuIHRoZSBzdWJtaXQgbWV0aG9kIGlzIGludm9rZWQgb24gdGhlIGRhdGEgcGFyYW1ldGVyLlxuICAgICAgLy8gVGhlIGRhdGEgb2JqZWN0IGNvbnRhaW5zIGEgZmlsZXMgcHJvcGVydHkgaG9sZGluZyB0aGUgYWRkZWQgZmlsZXNcbiAgICAgIC8vIGFuZCBhbGxvd3MgeW91IHRvIG92ZXJyaWRlIHBsdWdpbiBvcHRpb25zIGFzIHdlbGwgYXMgZGVmaW5lIGFqYXggc2V0dGluZ3MuXG4gICAgICAvL1xuICAgICAgLy8gTGlzdGVuZXJzIGZvciB0aGlzIGNhbGxiYWNrIGNhbiBhbHNvIGJlIGJvdW5kIHRoZSBmb2xsb3dpbmcgd2F5OlxuICAgICAgLy8gLm9uKCdmaWxldXBsb2FkYWRkJywgZnVuYyk7XG4gICAgICAvL1xuICAgICAgLy8gZGF0YS5zdWJtaXQoKSByZXR1cm5zIGEgUHJvbWlzZSBvYmplY3QgYW5kIGFsbG93cyB0byBhdHRhY2ggYWRkaXRpb25hbFxuICAgICAgLy8gaGFuZGxlcnMgdXNpbmcgalF1ZXJ5J3MgRGVmZXJyZWQgY2FsbGJhY2tzOlxuICAgICAgLy8gZGF0YS5zdWJtaXQoKS5kb25lKGZ1bmMpLmZhaWwoZnVuYykuYWx3YXlzKGZ1bmMpO1xuICAgICAgYWRkOiBmdW5jdGlvbiAoZSwgZGF0YSkge1xuICAgICAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgZGF0YS5hdXRvVXBsb2FkIHx8XG4gICAgICAgICAgKGRhdGEuYXV0b1VwbG9hZCAhPT0gZmFsc2UgJiZcbiAgICAgICAgICAgICQodGhpcykuZmlsZXVwbG9hZCgnb3B0aW9uJywgJ2F1dG9VcGxvYWQnKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgZGF0YS5wcm9jZXNzKCkuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkYXRhLnN1Ym1pdCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvLyBPdGhlciBjYWxsYmFja3M6XG5cbiAgICAgIC8vIENhbGxiYWNrIGZvciB0aGUgc3VibWl0IGV2ZW50IG9mIGVhY2ggZmlsZSB1cGxvYWQ6XG4gICAgICAvLyBzdWJtaXQ6IGZ1bmN0aW9uIChlLCBkYXRhKSB7fSwgLy8gLm9uKCdmaWxldXBsb2Fkc3VibWl0JywgZnVuYyk7XG5cbiAgICAgIC8vIENhbGxiYWNrIGZvciB0aGUgc3RhcnQgb2YgZWFjaCBmaWxlIHVwbG9hZCByZXF1ZXN0OlxuICAgICAgLy8gc2VuZDogZnVuY3Rpb24gKGUsIGRhdGEpIHt9LCAvLyAub24oJ2ZpbGV1cGxvYWRzZW5kJywgZnVuYyk7XG5cbiAgICAgIC8vIENhbGxiYWNrIGZvciBzdWNjZXNzZnVsIHVwbG9hZHM6XG4gICAgICAvLyBkb25lOiBmdW5jdGlvbiAoZSwgZGF0YSkge30sIC8vIC5vbignZmlsZXVwbG9hZGRvbmUnLCBmdW5jKTtcblxuICAgICAgLy8gQ2FsbGJhY2sgZm9yIGZhaWxlZCAoYWJvcnQgb3IgZXJyb3IpIHVwbG9hZHM6XG4gICAgICAvLyBmYWlsOiBmdW5jdGlvbiAoZSwgZGF0YSkge30sIC8vIC5vbignZmlsZXVwbG9hZGZhaWwnLCBmdW5jKTtcblxuICAgICAgLy8gQ2FsbGJhY2sgZm9yIGNvbXBsZXRlZCAoc3VjY2VzcywgYWJvcnQgb3IgZXJyb3IpIHJlcXVlc3RzOlxuICAgICAgLy8gYWx3YXlzOiBmdW5jdGlvbiAoZSwgZGF0YSkge30sIC8vIC5vbignZmlsZXVwbG9hZGFsd2F5cycsIGZ1bmMpO1xuXG4gICAgICAvLyBDYWxsYmFjayBmb3IgdXBsb2FkIHByb2dyZXNzIGV2ZW50czpcbiAgICAgIC8vIHByb2dyZXNzOiBmdW5jdGlvbiAoZSwgZGF0YSkge30sIC8vIC5vbignZmlsZXVwbG9hZHByb2dyZXNzJywgZnVuYyk7XG5cbiAgICAgIC8vIENhbGxiYWNrIGZvciBnbG9iYWwgdXBsb2FkIHByb2dyZXNzIGV2ZW50czpcbiAgICAgIC8vIHByb2dyZXNzYWxsOiBmdW5jdGlvbiAoZSwgZGF0YSkge30sIC8vIC5vbignZmlsZXVwbG9hZHByb2dyZXNzYWxsJywgZnVuYyk7XG5cbiAgICAgIC8vIENhbGxiYWNrIGZvciB1cGxvYWRzIHN0YXJ0LCBlcXVpdmFsZW50IHRvIHRoZSBnbG9iYWwgYWpheFN0YXJ0IGV2ZW50OlxuICAgICAgLy8gc3RhcnQ6IGZ1bmN0aW9uIChlKSB7fSwgLy8gLm9uKCdmaWxldXBsb2Fkc3RhcnQnLCBmdW5jKTtcblxuICAgICAgLy8gQ2FsbGJhY2sgZm9yIHVwbG9hZHMgc3RvcCwgZXF1aXZhbGVudCB0byB0aGUgZ2xvYmFsIGFqYXhTdG9wIGV2ZW50OlxuICAgICAgLy8gc3RvcDogZnVuY3Rpb24gKGUpIHt9LCAvLyAub24oJ2ZpbGV1cGxvYWRzdG9wJywgZnVuYyk7XG5cbiAgICAgIC8vIENhbGxiYWNrIGZvciBjaGFuZ2UgZXZlbnRzIG9mIHRoZSBmaWxlSW5wdXQocyk6XG4gICAgICAvLyBjaGFuZ2U6IGZ1bmN0aW9uIChlLCBkYXRhKSB7fSwgLy8gLm9uKCdmaWxldXBsb2FkY2hhbmdlJywgZnVuYyk7XG5cbiAgICAgIC8vIENhbGxiYWNrIGZvciBwYXN0ZSBldmVudHMgdG8gdGhlIHBhc3RlWm9uZShzKTpcbiAgICAgIC8vIHBhc3RlOiBmdW5jdGlvbiAoZSwgZGF0YSkge30sIC8vIC5vbignZmlsZXVwbG9hZHBhc3RlJywgZnVuYyk7XG5cbiAgICAgIC8vIENhbGxiYWNrIGZvciBkcm9wIGV2ZW50cyBvZiB0aGUgZHJvcFpvbmUocyk6XG4gICAgICAvLyBkcm9wOiBmdW5jdGlvbiAoZSwgZGF0YSkge30sIC8vIC5vbignZmlsZXVwbG9hZGRyb3AnLCBmdW5jKTtcblxuICAgICAgLy8gQ2FsbGJhY2sgZm9yIGRyYWdvdmVyIGV2ZW50cyBvZiB0aGUgZHJvcFpvbmUocyk6XG4gICAgICAvLyBkcmFnb3ZlcjogZnVuY3Rpb24gKGUpIHt9LCAvLyAub24oJ2ZpbGV1cGxvYWRkcmFnb3ZlcicsIGZ1bmMpO1xuXG4gICAgICAvLyBDYWxsYmFjayBiZWZvcmUgdGhlIHN0YXJ0IG9mIGVhY2ggY2h1bmsgdXBsb2FkIHJlcXVlc3QgKGJlZm9yZSBmb3JtIGRhdGEgaW5pdGlhbGl6YXRpb24pOlxuICAgICAgLy8gY2h1bmtiZWZvcmVzZW5kOiBmdW5jdGlvbiAoZSwgZGF0YSkge30sIC8vIC5vbignZmlsZXVwbG9hZGNodW5rYmVmb3Jlc2VuZCcsIGZ1bmMpO1xuXG4gICAgICAvLyBDYWxsYmFjayBmb3IgdGhlIHN0YXJ0IG9mIGVhY2ggY2h1bmsgdXBsb2FkIHJlcXVlc3Q6XG4gICAgICAvLyBjaHVua3NlbmQ6IGZ1bmN0aW9uIChlLCBkYXRhKSB7fSwgLy8gLm9uKCdmaWxldXBsb2FkY2h1bmtzZW5kJywgZnVuYyk7XG5cbiAgICAgIC8vIENhbGxiYWNrIGZvciBzdWNjZXNzZnVsIGNodW5rIHVwbG9hZHM6XG4gICAgICAvLyBjaHVua2RvbmU6IGZ1bmN0aW9uIChlLCBkYXRhKSB7fSwgLy8gLm9uKCdmaWxldXBsb2FkY2h1bmtkb25lJywgZnVuYyk7XG5cbiAgICAgIC8vIENhbGxiYWNrIGZvciBmYWlsZWQgKGFib3J0IG9yIGVycm9yKSBjaHVuayB1cGxvYWRzOlxuICAgICAgLy8gY2h1bmtmYWlsOiBmdW5jdGlvbiAoZSwgZGF0YSkge30sIC8vIC5vbignZmlsZXVwbG9hZGNodW5rZmFpbCcsIGZ1bmMpO1xuXG4gICAgICAvLyBDYWxsYmFjayBmb3IgY29tcGxldGVkIChzdWNjZXNzLCBhYm9ydCBvciBlcnJvcikgY2h1bmsgdXBsb2FkIHJlcXVlc3RzOlxuICAgICAgLy8gY2h1bmthbHdheXM6IGZ1bmN0aW9uIChlLCBkYXRhKSB7fSwgLy8gLm9uKCdmaWxldXBsb2FkY2h1bmthbHdheXMnLCBmdW5jKTtcblxuICAgICAgLy8gVGhlIHBsdWdpbiBvcHRpb25zIGFyZSB1c2VkIGFzIHNldHRpbmdzIG9iamVjdCBmb3IgdGhlIGFqYXggY2FsbHMuXG4gICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZSBqUXVlcnkgYWpheCBzZXR0aW5ncyByZXF1aXJlZCBmb3IgdGhlIGZpbGUgdXBsb2FkczpcbiAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgIHRpbWVvdXQ6IDBcbiAgICB9LFxuXG4gICAgLy8galF1ZXJ5IHZlcnNpb25zIGJlZm9yZSAxLjggcmVxdWlyZSBwcm9taXNlLnBpcGUgaWYgdGhlIHJldHVybiB2YWx1ZSBpc1xuICAgIC8vIHVzZWQsIGFzIHByb21pc2UudGhlbiBpbiBvbGRlciB2ZXJzaW9ucyBoYXMgYSBkaWZmZXJlbnQgYmVoYXZpb3IsIHNlZTpcbiAgICAvLyBodHRwczovL2Jsb2cuanF1ZXJ5LmNvbS8yMDEyLzA4LzA5L2pxdWVyeS0xLTgtcmVsZWFzZWQvXG4gICAgLy8gaHR0cHM6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzExMDEwXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvalF1ZXJ5LUZpbGUtVXBsb2FkL3B1bGwvMzQzNVxuICAgIF9wcm9taXNlUGlwZTogKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYXJ0cyA9ICQuZm4uanF1ZXJ5LnNwbGl0KCcuJyk7XG4gICAgICByZXR1cm4gTnVtYmVyKHBhcnRzWzBdKSA+IDEgfHwgTnVtYmVyKHBhcnRzWzFdKSA+IDcgPyAndGhlbicgOiAncGlwZSc7XG4gICAgfSkoKSxcblxuICAgIC8vIEEgbGlzdCBvZiBvcHRpb25zIHRoYXQgcmVxdWlyZSByZWluaXRpYWxpemluZyBldmVudCBsaXN0ZW5lcnMgYW5kL29yXG4gICAgLy8gc3BlY2lhbCBpbml0aWFsaXphdGlvbiBjb2RlOlxuICAgIF9zcGVjaWFsT3B0aW9uczogW1xuICAgICAgJ2ZpbGVJbnB1dCcsXG4gICAgICAnZHJvcFpvbmUnLFxuICAgICAgJ3Bhc3RlWm9uZScsXG4gICAgICAnbXVsdGlwYXJ0JyxcbiAgICAgICdmb3JjZUlmcmFtZVRyYW5zcG9ydCdcbiAgICBdLFxuXG4gICAgX2Jsb2JTbGljZTpcbiAgICAgICQuc3VwcG9ydC5ibG9iU2xpY2UgJiZcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNsaWNlID0gdGhpcy5zbGljZSB8fCB0aGlzLndlYmtpdFNsaWNlIHx8IHRoaXMubW96U2xpY2U7XG4gICAgICAgIHJldHVybiBzbGljZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfSxcblxuICAgIF9CaXRyYXRlVGltZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudGltZXN0YW1wID0gRGF0ZS5ub3cgPyBEYXRlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB0aGlzLmxvYWRlZCA9IDA7XG4gICAgICB0aGlzLmJpdHJhdGUgPSAwO1xuICAgICAgdGhpcy5nZXRCaXRyYXRlID0gZnVuY3Rpb24gKG5vdywgbG9hZGVkLCBpbnRlcnZhbCkge1xuICAgICAgICB2YXIgdGltZURpZmYgPSBub3cgLSB0aGlzLnRpbWVzdGFtcDtcbiAgICAgICAgaWYgKCF0aGlzLmJpdHJhdGUgfHwgIWludGVydmFsIHx8IHRpbWVEaWZmID4gaW50ZXJ2YWwpIHtcbiAgICAgICAgICB0aGlzLmJpdHJhdGUgPSAobG9hZGVkIC0gdGhpcy5sb2FkZWQpICogKDEwMDAgLyB0aW1lRGlmZikgKiA4O1xuICAgICAgICAgIHRoaXMubG9hZGVkID0gbG9hZGVkO1xuICAgICAgICAgIHRoaXMudGltZXN0YW1wID0gbm93O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmJpdHJhdGU7XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBfaXNYSFJVcGxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAhb3B0aW9ucy5mb3JjZUlmcmFtZVRyYW5zcG9ydCAmJlxuICAgICAgICAoKCFvcHRpb25zLm11bHRpcGFydCAmJiAkLnN1cHBvcnQueGhyRmlsZVVwbG9hZCkgfHxcbiAgICAgICAgICAkLnN1cHBvcnQueGhyRm9ybURhdGFGaWxlVXBsb2FkKVxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgX2dldEZvcm1EYXRhOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgdmFyIGZvcm1EYXRhO1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmZvcm1EYXRhID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuZm9ybURhdGEob3B0aW9ucy5mb3JtKTtcbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMuZm9ybURhdGEpKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmZvcm1EYXRhO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmZvcm1EYXRhID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGZvcm1EYXRhID0gW107XG4gICAgICAgICQuZWFjaChvcHRpb25zLmZvcm1EYXRhLCBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICBmb3JtRGF0YS5wdXNoKHsgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG5cbiAgICBfZ2V0VG90YWw6IGZ1bmN0aW9uIChmaWxlcykge1xuICAgICAgdmFyIHRvdGFsID0gMDtcbiAgICAgICQuZWFjaChmaWxlcywgZnVuY3Rpb24gKGluZGV4LCBmaWxlKSB7XG4gICAgICAgIHRvdGFsICs9IGZpbGUuc2l6ZSB8fCAxO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdG90YWw7XG4gICAgfSxcblxuICAgIF9pbml0UHJvZ3Jlc3NPYmplY3Q6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHZhciBwcm9ncmVzcyA9IHtcbiAgICAgICAgbG9hZGVkOiAwLFxuICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgYml0cmF0ZTogMFxuICAgICAgfTtcbiAgICAgIGlmIChvYmouX3Byb2dyZXNzKSB7XG4gICAgICAgICQuZXh0ZW5kKG9iai5fcHJvZ3Jlc3MsIHByb2dyZXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iai5fcHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2luaXRSZXNwb25zZU9iamVjdDogZnVuY3Rpb24gKG9iaikge1xuICAgICAgdmFyIHByb3A7XG4gICAgICBpZiAob2JqLl9yZXNwb25zZSkge1xuICAgICAgICBmb3IgKHByb3AgaW4gb2JqLl9yZXNwb25zZSkge1xuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLl9yZXNwb25zZSwgcHJvcCkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmouX3Jlc3BvbnNlW3Byb3BdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqLl9yZXNwb25zZSA9IHt9O1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfb25Qcm9ncmVzczogZnVuY3Rpb24gKGUsIGRhdGEpIHtcbiAgICAgIGlmIChlLmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgdmFyIG5vdyA9IERhdGUubm93ID8gRGF0ZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgIGxvYWRlZDtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGRhdGEuX3RpbWUgJiZcbiAgICAgICAgICBkYXRhLnByb2dyZXNzSW50ZXJ2YWwgJiZcbiAgICAgICAgICBub3cgLSBkYXRhLl90aW1lIDwgZGF0YS5wcm9ncmVzc0ludGVydmFsICYmXG4gICAgICAgICAgZS5sb2FkZWQgIT09IGUudG90YWxcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuX3RpbWUgPSBub3c7XG4gICAgICAgIGxvYWRlZCA9XG4gICAgICAgICAgTWF0aC5mbG9vcihcbiAgICAgICAgICAgIChlLmxvYWRlZCAvIGUudG90YWwpICogKGRhdGEuY2h1bmtTaXplIHx8IGRhdGEuX3Byb2dyZXNzLnRvdGFsKVxuICAgICAgICAgICkgKyAoZGF0YS51cGxvYWRlZEJ5dGVzIHx8IDApO1xuICAgICAgICAvLyBBZGQgdGhlIGRpZmZlcmVuY2UgZnJvbSB0aGUgcHJldmlvdXNseSBsb2FkZWQgc3RhdGVcbiAgICAgICAgLy8gdG8gdGhlIGdsb2JhbCBsb2FkZWQgY291bnRlcjpcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3MubG9hZGVkICs9IGxvYWRlZCAtIGRhdGEuX3Byb2dyZXNzLmxvYWRlZDtcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3MuYml0cmF0ZSA9IHRoaXMuX2JpdHJhdGVUaW1lci5nZXRCaXRyYXRlKFxuICAgICAgICAgIG5vdyxcbiAgICAgICAgICB0aGlzLl9wcm9ncmVzcy5sb2FkZWQsXG4gICAgICAgICAgZGF0YS5iaXRyYXRlSW50ZXJ2YWxcbiAgICAgICAgKTtcbiAgICAgICAgZGF0YS5fcHJvZ3Jlc3MubG9hZGVkID0gZGF0YS5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgICAgIGRhdGEuX3Byb2dyZXNzLmJpdHJhdGUgPSBkYXRhLmJpdHJhdGUgPSBkYXRhLl9iaXRyYXRlVGltZXIuZ2V0Qml0cmF0ZShcbiAgICAgICAgICBub3csXG4gICAgICAgICAgbG9hZGVkLFxuICAgICAgICAgIGRhdGEuYml0cmF0ZUludGVydmFsXG4gICAgICAgICk7XG4gICAgICAgIC8vIFRyaWdnZXIgYSBjdXN0b20gcHJvZ3Jlc3MgZXZlbnQgd2l0aCBhIHRvdGFsIGRhdGEgcHJvcGVydHkgc2V0XG4gICAgICAgIC8vIHRvIHRoZSBmaWxlIHNpemUocykgb2YgdGhlIGN1cnJlbnQgdXBsb2FkIGFuZCBhIGxvYWRlZCBkYXRhXG4gICAgICAgIC8vIHByb3BlcnR5IGNhbGN1bGF0ZWQgYWNjb3JkaW5nbHk6XG4gICAgICAgIHRoaXMuX3RyaWdnZXIoXG4gICAgICAgICAgJ3Byb2dyZXNzJyxcbiAgICAgICAgICAkLkV2ZW50KCdwcm9ncmVzcycsIHsgZGVsZWdhdGVkRXZlbnQ6IGUgfSksXG4gICAgICAgICAgZGF0YVxuICAgICAgICApO1xuICAgICAgICAvLyBUcmlnZ2VyIGEgZ2xvYmFsIHByb2dyZXNzIGV2ZW50IGZvciBhbGwgY3VycmVudCBmaWxlIHVwbG9hZHMsXG4gICAgICAgIC8vIGluY2x1ZGluZyBhamF4IGNhbGxzIHF1ZXVlZCBmb3Igc2VxdWVudGlhbCBmaWxlIHVwbG9hZHM6XG4gICAgICAgIHRoaXMuX3RyaWdnZXIoXG4gICAgICAgICAgJ3Byb2dyZXNzYWxsJyxcbiAgICAgICAgICAkLkV2ZW50KCdwcm9ncmVzc2FsbCcsIHsgZGVsZWdhdGVkRXZlbnQ6IGUgfSksXG4gICAgICAgICAgdGhpcy5fcHJvZ3Jlc3NcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2luaXRQcm9ncmVzc0xpc3RlbmVyOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgICB4aHIgPSBvcHRpb25zLnhociA/IG9wdGlvbnMueGhyKCkgOiAkLmFqYXhTZXR0aW5ncy54aHIoKTtcbiAgICAgIC8vIEFjY2VzcyB0byB0aGUgbmF0aXZlIFhIUiBvYmplY3QgaXMgcmVxdWlyZWQgdG8gYWRkIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgLy8gZm9yIHRoZSB1cGxvYWQgcHJvZ3Jlc3MgZXZlbnQ6XG4gICAgICBpZiAoeGhyLnVwbG9hZCkge1xuICAgICAgICAkKHhoci51cGxvYWQpLm9uKCdwcm9ncmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIG9lID0gZS5vcmlnaW5hbEV2ZW50O1xuICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgcHJvZ3Jlc3MgZXZlbnQgcHJvcGVydGllcyBnZXQgY29waWVkIG92ZXI6XG4gICAgICAgICAgZS5sZW5ndGhDb21wdXRhYmxlID0gb2UubGVuZ3RoQ29tcHV0YWJsZTtcbiAgICAgICAgICBlLmxvYWRlZCA9IG9lLmxvYWRlZDtcbiAgICAgICAgICBlLnRvdGFsID0gb2UudG90YWw7XG4gICAgICAgICAgdGhhdC5fb25Qcm9ncmVzcyhlLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9wdGlvbnMueGhyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB4aHI7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9kZWluaXRQcm9ncmVzc0xpc3RlbmVyOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgdmFyIHhociA9IG9wdGlvbnMueGhyID8gb3B0aW9ucy54aHIoKSA6ICQuYWpheFNldHRpbmdzLnhocigpO1xuICAgICAgaWYgKHhoci51cGxvYWQpIHtcbiAgICAgICAgJCh4aHIudXBsb2FkKS5vZmYoJ3Byb2dyZXNzJyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9pc0luc3RhbmNlT2Y6IGZ1bmN0aW9uICh0eXBlLCBvYmopIHtcbiAgICAgIC8vIENyb3NzLWZyYW1lIGluc3RhbmNlb2YgY2hlY2tcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgJyArIHR5cGUgKyAnXSc7XG4gICAgfSxcblxuICAgIF9nZXRVbmlxdWVGaWxlbmFtZTogZnVuY3Rpb24gKG5hbWUsIG1hcCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBuYW1lID0gU3RyaW5nKG5hbWUpO1xuICAgICAgaWYgKG1hcFtuYW1lXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZShcbiAgICAgICAgICAvKD86IFxcKChbXFxkXSspXFwpKT8oXFwuW14uXSspPyQvLFxuICAgICAgICAgIGZ1bmN0aW9uIChfLCBwMSwgcDIpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHAxID8gTnVtYmVyKHAxKSArIDEgOiAxO1xuICAgICAgICAgICAgdmFyIGV4dCA9IHAyIHx8ICcnO1xuICAgICAgICAgICAgcmV0dXJuICcgKCcgKyBpbmRleCArICcpJyArIGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRVbmlxdWVGaWxlbmFtZShuYW1lLCBtYXApO1xuICAgICAgfVxuICAgICAgbWFwW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG5cbiAgICBfaW5pdFhIUkRhdGE6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICAgIGZvcm1EYXRhLFxuICAgICAgICBmaWxlID0gb3B0aW9ucy5maWxlc1swXSxcbiAgICAgICAgLy8gSWdub3JlIG5vbi1tdWx0aXBhcnQgc2V0dGluZyBpZiBub3Qgc3VwcG9ydGVkOlxuICAgICAgICBtdWx0aXBhcnQgPSBvcHRpb25zLm11bHRpcGFydCB8fCAhJC5zdXBwb3J0LnhockZpbGVVcGxvYWQsXG4gICAgICAgIHBhcmFtTmFtZSA9XG4gICAgICAgICAgQXJyYXkuaXNBcnJheShvcHRpb25zLnBhcmFtTmFtZSlcbiAgICAgICAgICAgID8gb3B0aW9ucy5wYXJhbU5hbWVbMF1cbiAgICAgICAgICAgIDogb3B0aW9ucy5wYXJhbU5hbWU7XG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSAkLmV4dGVuZCh7fSwgb3B0aW9ucy5oZWFkZXJzKTtcbiAgICAgIGlmIChvcHRpb25zLmNvbnRlbnRSYW5nZSkge1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtUmFuZ2UnXSA9IG9wdGlvbnMuY29udGVudFJhbmdlO1xuICAgICAgfVxuICAgICAgaWYgKCFtdWx0aXBhcnQgfHwgb3B0aW9ucy5ibG9iIHx8ICF0aGlzLl9pc0luc3RhbmNlT2YoJ0ZpbGUnLCBmaWxlKSkge1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtRGlzcG9zaXRpb24nXSA9XG4gICAgICAgICAgJ2F0dGFjaG1lbnQ7IGZpbGVuYW1lPVwiJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGZpbGUudXBsb2FkTmFtZSB8fCBmaWxlLm5hbWUpICtcbiAgICAgICAgICAnXCInO1xuICAgICAgfVxuICAgICAgaWYgKCFtdWx0aXBhcnQpIHtcbiAgICAgICAgb3B0aW9ucy5jb250ZW50VHlwZSA9IGZpbGUudHlwZSB8fCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICAgICAgb3B0aW9ucy5kYXRhID0gb3B0aW9ucy5ibG9iIHx8IGZpbGU7XG4gICAgICB9IGVsc2UgaWYgKCQuc3VwcG9ydC54aHJGb3JtRGF0YUZpbGVVcGxvYWQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMucG9zdE1lc3NhZ2UpIHtcbiAgICAgICAgICAvLyB3aW5kb3cucG9zdE1lc3NhZ2UgZG9lcyBub3QgYWxsb3cgc2VuZGluZyBGb3JtRGF0YVxuICAgICAgICAgIC8vIG9iamVjdHMsIHNvIHdlIGp1c3QgYWRkIHRoZSBGaWxlL0Jsb2Igb2JqZWN0cyB0b1xuICAgICAgICAgIC8vIHRoZSBmb3JtRGF0YSBhcnJheSBhbmQgbGV0IHRoZSBwb3N0TWVzc2FnZSB3aW5kb3dcbiAgICAgICAgICAvLyBjcmVhdGUgdGhlIEZvcm1EYXRhIG9iamVjdCBvdXQgb2YgdGhpcyBhcnJheTpcbiAgICAgICAgICBmb3JtRGF0YSA9IHRoaXMuX2dldEZvcm1EYXRhKG9wdGlvbnMpO1xuICAgICAgICAgIGlmIChvcHRpb25zLmJsb2IpIHtcbiAgICAgICAgICAgIGZvcm1EYXRhLnB1c2goe1xuICAgICAgICAgICAgICBuYW1lOiBwYXJhbU5hbWUsXG4gICAgICAgICAgICAgIHZhbHVlOiBvcHRpb25zLmJsb2JcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkLmVhY2gob3B0aW9ucy5maWxlcywgZnVuY3Rpb24gKGluZGV4LCBmaWxlKSB7XG4gICAgICAgICAgICAgIGZvcm1EYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6XG4gICAgICAgICAgICAgICAgICAoQXJyYXkuaXNBcnJheShvcHRpb25zLnBhcmFtTmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wYXJhbU5hbWVbaW5kZXhdKSB8fFxuICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmaWxlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGF0Ll9pc0luc3RhbmNlT2YoJ0Zvcm1EYXRhJywgb3B0aW9ucy5mb3JtRGF0YSkpIHtcbiAgICAgICAgICAgIGZvcm1EYXRhID0gb3B0aW9ucy5mb3JtRGF0YTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICQuZWFjaCh0aGlzLl9nZXRGb3JtRGF0YShvcHRpb25zKSwgZnVuY3Rpb24gKGluZGV4LCBmaWVsZCkge1xuICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoZmllbGQubmFtZSwgZmllbGQudmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvcHRpb25zLmJsb2IpIHtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAgICAgcGFyYW1OYW1lLFxuICAgICAgICAgICAgICBvcHRpb25zLmJsb2IsXG4gICAgICAgICAgICAgIGZpbGUudXBsb2FkTmFtZSB8fCBmaWxlLm5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQuZWFjaChvcHRpb25zLmZpbGVzLCBmdW5jdGlvbiAoaW5kZXgsIGZpbGUpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBjaGVjayBhbGxvd3MgdGhlIHRlc3RzIHRvIHJ1biB3aXRoXG4gICAgICAgICAgICAgIC8vIGR1bW15IG9iamVjdHM6XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGF0Ll9pc0luc3RhbmNlT2YoJ0ZpbGUnLCBmaWxlKSB8fFxuICAgICAgICAgICAgICAgIHRoYXQuX2lzSW5zdGFuY2VPZignQmxvYicsIGZpbGUpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHZhciBmaWxlTmFtZSA9IGZpbGUudXBsb2FkTmFtZSB8fCBmaWxlLm5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudW5pcXVlRmlsZW5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZSA9IHRoYXQuX2dldFVuaXF1ZUZpbGVuYW1lKFxuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy51bmlxdWVGaWxlbmFtZXNcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAgICAgICAgIChBcnJheS5pc0FycmF5KG9wdGlvbnMucGFyYW1OYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnBhcmFtTmFtZVtpbmRleF0pIHx8XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZSxcbiAgICAgICAgICAgICAgICAgIGZpbGUsXG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLmRhdGEgPSBmb3JtRGF0YTtcbiAgICAgIH1cbiAgICAgIC8vIEJsb2IgcmVmZXJlbmNlIGlzIG5vdCBuZWVkZWQgYW55bW9yZSwgZnJlZSBtZW1vcnk6XG4gICAgICBvcHRpb25zLmJsb2IgPSBudWxsO1xuICAgIH0sXG5cbiAgICBfaW5pdElmcmFtZVNldHRpbmdzOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgdmFyIHRhcmdldEhvc3QgPSAkKCc8YT48L2E+JykucHJvcCgnaHJlZicsIG9wdGlvbnMudXJsKS5wcm9wKCdob3N0Jyk7XG4gICAgICAvLyBTZXR0aW5nIHRoZSBkYXRhVHlwZSB0byBpZnJhbWUgZW5hYmxlcyB0aGUgaWZyYW1lIHRyYW5zcG9ydDpcbiAgICAgIG9wdGlvbnMuZGF0YVR5cGUgPSAnaWZyYW1lICcgKyAob3B0aW9ucy5kYXRhVHlwZSB8fCAnJyk7XG4gICAgICAvLyBUaGUgaWZyYW1lIHRyYW5zcG9ydCBhY2NlcHRzIGEgc2VyaWFsaXplZCBhcnJheSBhcyBmb3JtIGRhdGE6XG4gICAgICBvcHRpb25zLmZvcm1EYXRhID0gdGhpcy5fZ2V0Rm9ybURhdGEob3B0aW9ucyk7XG4gICAgICAvLyBBZGQgcmVkaXJlY3QgdXJsIHRvIGZvcm0gZGF0YSBvbiBjcm9zcy1kb21haW4gdXBsb2FkczpcbiAgICAgIGlmIChvcHRpb25zLnJlZGlyZWN0ICYmIHRhcmdldEhvc3QgJiYgdGFyZ2V0SG9zdCAhPT0gbG9jYXRpb24uaG9zdCkge1xuICAgICAgICBvcHRpb25zLmZvcm1EYXRhLnB1c2goe1xuICAgICAgICAgIG5hbWU6IG9wdGlvbnMucmVkaXJlY3RQYXJhbU5hbWUgfHwgJ3JlZGlyZWN0JyxcbiAgICAgICAgICB2YWx1ZTogb3B0aW9ucy5yZWRpcmVjdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2luaXREYXRhU2V0dGluZ3M6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICBpZiAodGhpcy5faXNYSFJVcGxvYWQob3B0aW9ucykpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jaHVua2VkVXBsb2FkKG9wdGlvbnMsIHRydWUpKSB7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRYSFJEYXRhKG9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9pbml0UHJvZ3Jlc3NMaXN0ZW5lcihvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5wb3N0TWVzc2FnZSkge1xuICAgICAgICAgIC8vIFNldHRpbmcgdGhlIGRhdGFUeXBlIHRvIHBvc3RtZXNzYWdlIGVuYWJsZXMgdGhlXG4gICAgICAgICAgLy8gcG9zdE1lc3NhZ2UgdHJhbnNwb3J0OlxuICAgICAgICAgIG9wdGlvbnMuZGF0YVR5cGUgPSAncG9zdG1lc3NhZ2UgJyArIChvcHRpb25zLmRhdGFUeXBlIHx8ICcnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW5pdElmcmFtZVNldHRpbmdzKG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfZ2V0UGFyYW1OYW1lOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgdmFyIGZpbGVJbnB1dCA9ICQob3B0aW9ucy5maWxlSW5wdXQpLFxuICAgICAgICBwYXJhbU5hbWUgPSBvcHRpb25zLnBhcmFtTmFtZTtcbiAgICAgIGlmICghcGFyYW1OYW1lKSB7XG4gICAgICAgIHBhcmFtTmFtZSA9IFtdO1xuICAgICAgICBmaWxlSW5wdXQuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGlucHV0ID0gJCh0aGlzKSxcbiAgICAgICAgICAgIG5hbWUgPSBpbnB1dC5wcm9wKCduYW1lJykgfHwgJ2ZpbGVzW10nLFxuICAgICAgICAgICAgaSA9IChpbnB1dC5wcm9wKCdmaWxlcycpIHx8IFsxXSkubGVuZ3RoO1xuICAgICAgICAgIHdoaWxlIChpKSB7XG4gICAgICAgICAgICBwYXJhbU5hbWUucHVzaChuYW1lKTtcbiAgICAgICAgICAgIGkgLT0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXBhcmFtTmFtZS5sZW5ndGgpIHtcbiAgICAgICAgICBwYXJhbU5hbWUgPSBbZmlsZUlucHV0LnByb3AoJ25hbWUnKSB8fCAnZmlsZXNbXSddO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHBhcmFtTmFtZSkpIHtcbiAgICAgICAgcGFyYW1OYW1lID0gW3BhcmFtTmFtZV07XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFyYW1OYW1lO1xuICAgIH0sXG5cbiAgICBfaW5pdEZvcm1TZXR0aW5nczogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIC8vIFJldHJpZXZlIG1pc3Npbmcgb3B0aW9ucyBmcm9tIHRoZSBpbnB1dCBmaWVsZCBhbmQgdGhlXG4gICAgICAvLyBhc3NvY2lhdGVkIGZvcm0sIGlmIGF2YWlsYWJsZTpcbiAgICAgIGlmICghb3B0aW9ucy5mb3JtIHx8ICFvcHRpb25zLmZvcm0ubGVuZ3RoKSB7XG4gICAgICAgIG9wdGlvbnMuZm9ybSA9ICQob3B0aW9ucy5maWxlSW5wdXQucHJvcCgnZm9ybScpKTtcbiAgICAgICAgLy8gSWYgdGhlIGdpdmVuIGZpbGUgaW5wdXQgZG9lc24ndCBoYXZlIGFuIGFzc29jaWF0ZWQgZm9ybSxcbiAgICAgICAgLy8gdXNlIHRoZSBkZWZhdWx0IHdpZGdldCBmaWxlIGlucHV0J3MgZm9ybTpcbiAgICAgICAgaWYgKCFvcHRpb25zLmZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgb3B0aW9ucy5mb3JtID0gJCh0aGlzLm9wdGlvbnMuZmlsZUlucHV0LnByb3AoJ2Zvcm0nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG9wdGlvbnMucGFyYW1OYW1lID0gdGhpcy5fZ2V0UGFyYW1OYW1lKG9wdGlvbnMpO1xuICAgICAgaWYgKCFvcHRpb25zLnVybCkge1xuICAgICAgICBvcHRpb25zLnVybCA9IG9wdGlvbnMuZm9ybS5wcm9wKCdhY3Rpb24nKSB8fCBsb2NhdGlvbi5ocmVmO1xuICAgICAgfVxuICAgICAgLy8gVGhlIEhUVFAgcmVxdWVzdCBtZXRob2QgbXVzdCBiZSBcIlBPU1RcIiBvciBcIlBVVFwiOlxuICAgICAgb3B0aW9ucy50eXBlID0gKFxuICAgICAgICBvcHRpb25zLnR5cGUgfHxcbiAgICAgICAgKHR5cGVvZiBvcHRpb25zLmZvcm0ucHJvcCgnbWV0aG9kJykgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgb3B0aW9ucy5mb3JtLnByb3AoJ21ldGhvZCcpKSB8fFxuICAgICAgICAnJ1xuICAgICAgKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgaWYgKFxuICAgICAgICBvcHRpb25zLnR5cGUgIT09ICdQT1NUJyAmJlxuICAgICAgICBvcHRpb25zLnR5cGUgIT09ICdQVVQnICYmXG4gICAgICAgIG9wdGlvbnMudHlwZSAhPT0gJ1BBVENIJ1xuICAgICAgKSB7XG4gICAgICAgIG9wdGlvbnMudHlwZSA9ICdQT1NUJztcbiAgICAgIH1cbiAgICAgIGlmICghb3B0aW9ucy5mb3JtQWNjZXB0Q2hhcnNldCkge1xuICAgICAgICBvcHRpb25zLmZvcm1BY2NlcHRDaGFyc2V0ID0gb3B0aW9ucy5mb3JtLmF0dHIoJ2FjY2VwdC1jaGFyc2V0Jyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9nZXRBSkFYU2V0dGluZ3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMsIGRhdGEpO1xuICAgICAgdGhpcy5faW5pdEZvcm1TZXR0aW5ncyhvcHRpb25zKTtcbiAgICAgIHRoaXMuX2luaXREYXRhU2V0dGluZ3Mob3B0aW9ucyk7XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9LFxuXG4gICAgLy8galF1ZXJ5IDEuNiBkb2Vzbid0IHByb3ZpZGUgLnN0YXRlKCksXG4gICAgLy8gd2hpbGUgalF1ZXJ5IDEuOCsgcmVtb3ZlZCAuaXNSZWplY3RlZCgpIGFuZCAuaXNSZXNvbHZlZCgpOlxuICAgIF9nZXREZWZlcnJlZFN0YXRlOiBmdW5jdGlvbiAoZGVmZXJyZWQpIHtcbiAgICAgIGlmIChkZWZlcnJlZC5zdGF0ZSkge1xuICAgICAgICByZXR1cm4gZGVmZXJyZWQuc3RhdGUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChkZWZlcnJlZC5pc1Jlc29sdmVkKCkpIHtcbiAgICAgICAgcmV0dXJuICdyZXNvbHZlZCc7XG4gICAgICB9XG4gICAgICBpZiAoZGVmZXJyZWQuaXNSZWplY3RlZCgpKSB7XG4gICAgICAgIHJldHVybiAncmVqZWN0ZWQnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdwZW5kaW5nJztcbiAgICB9LFxuXG4gICAgLy8gTWFwcyBqcVhIUiBjYWxsYmFja3MgdG8gdGhlIGVxdWl2YWxlbnRcbiAgICAvLyBtZXRob2RzIG9mIHRoZSBnaXZlbiBQcm9taXNlIG9iamVjdDpcbiAgICBfZW5oYW5jZVByb21pc2U6IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICBwcm9taXNlLnN1Y2Nlc3MgPSBwcm9taXNlLmRvbmU7XG4gICAgICBwcm9taXNlLmVycm9yID0gcHJvbWlzZS5mYWlsO1xuICAgICAgcHJvbWlzZS5jb21wbGV0ZSA9IHByb21pc2UuYWx3YXlzO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfSxcblxuICAgIC8vIENyZWF0ZXMgYW5kIHJldHVybnMgYSBQcm9taXNlIG9iamVjdCBlbmhhbmNlZCB3aXRoXG4gICAgLy8gdGhlIGpxWEhSIG1ldGhvZHMgYWJvcnQsIHN1Y2Nlc3MsIGVycm9yIGFuZCBjb21wbGV0ZTpcbiAgICBfZ2V0WEhSUHJvbWlzZTogZnVuY3Rpb24gKHJlc29sdmVPclJlamVjdCwgY29udGV4dCwgYXJncykge1xuICAgICAgdmFyIGRmZCA9ICQuRGVmZXJyZWQoKSxcbiAgICAgICAgcHJvbWlzZSA9IGRmZC5wcm9taXNlKCk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXMub3B0aW9ucy5jb250ZXh0IHx8IHByb21pc2U7XG4gICAgICBpZiAocmVzb2x2ZU9yUmVqZWN0ID09PSB0cnVlKSB7XG4gICAgICAgIGRmZC5yZXNvbHZlV2l0aChjb250ZXh0LCBhcmdzKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzb2x2ZU9yUmVqZWN0ID09PSBmYWxzZSkge1xuICAgICAgICBkZmQucmVqZWN0V2l0aChjb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICAgIHByb21pc2UuYWJvcnQgPSBkZmQucHJvbWlzZTtcbiAgICAgIHJldHVybiB0aGlzLl9lbmhhbmNlUHJvbWlzZShwcm9taXNlKTtcbiAgICB9LFxuXG4gICAgLy8gQWRkcyBjb252ZW5pZW5jZSBtZXRob2RzIHRvIHRoZSBkYXRhIGNhbGxiYWNrIGFyZ3VtZW50OlxuICAgIF9hZGRDb252ZW5pZW5jZU1ldGhvZHM6IGZ1bmN0aW9uIChlLCBkYXRhKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICAgIGdldFByb21pc2UgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgIHJldHVybiAkLkRlZmVycmVkKCkucmVzb2x2ZVdpdGgodGhhdCwgYXJncykucHJvbWlzZSgpO1xuICAgICAgICB9O1xuICAgICAgZGF0YS5wcm9jZXNzID0gZnVuY3Rpb24gKHJlc29sdmVGdW5jLCByZWplY3RGdW5jKSB7XG4gICAgICAgIGlmIChyZXNvbHZlRnVuYyB8fCByZWplY3RGdW5jKSB7XG4gICAgICAgICAgZGF0YS5fcHJvY2Vzc1F1ZXVlID0gdGhpcy5fcHJvY2Vzc1F1ZXVlID0gKHRoaXMuX3Byb2Nlc3NRdWV1ZSB8fFxuICAgICAgICAgICAgZ2V0UHJvbWlzZShbdGhpc10pKVxuICAgICAgICAgICAgW3RoYXQuX3Byb21pc2VQaXBlXShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmIChkYXRhLmVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3RXaXRoKHRoYXQsIFtkYXRhXSkucHJvbWlzZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBnZXRQcm9taXNlKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgW3RoYXQuX3Byb21pc2VQaXBlXShyZXNvbHZlRnVuYywgcmVqZWN0RnVuYyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NRdWV1ZSB8fCBnZXRQcm9taXNlKFt0aGlzXSk7XG4gICAgICB9O1xuICAgICAgZGF0YS5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlKCkgIT09ICdwZW5kaW5nJykge1xuICAgICAgICAgIGRhdGEuanFYSFIgPSB0aGlzLmpxWEhSID1cbiAgICAgICAgICAgIHRoYXQuX3RyaWdnZXIoXG4gICAgICAgICAgICAgICdzdWJtaXQnLFxuICAgICAgICAgICAgICAkLkV2ZW50KCdzdWJtaXQnLCB7IGRlbGVnYXRlZEV2ZW50OiBlIH0pLFxuICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICApICE9PSBmYWxzZSAmJiB0aGF0Ll9vblNlbmQoZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuanFYSFIgfHwgdGhhdC5fZ2V0WEhSUHJvbWlzZSgpO1xuICAgICAgfTtcbiAgICAgIGRhdGEuYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmpxWEhSKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuanFYSFIuYWJvcnQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yVGhyb3duID0gJ2Fib3J0JztcbiAgICAgICAgdGhhdC5fdHJpZ2dlcignZmFpbCcsIG51bGwsIHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhhdC5fZ2V0WEhSUHJvbWlzZShmYWxzZSk7XG4gICAgICB9O1xuICAgICAgZGF0YS5zdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuanFYSFIpIHtcbiAgICAgICAgICByZXR1cm4gdGhhdC5fZ2V0RGVmZXJyZWRTdGF0ZSh0aGlzLmpxWEhSKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcHJvY2Vzc1F1ZXVlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoYXQuX2dldERlZmVycmVkU3RhdGUodGhpcy5fcHJvY2Vzc1F1ZXVlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGRhdGEucHJvY2Vzc2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAhdGhpcy5qcVhIUiAmJlxuICAgICAgICAgIHRoaXMuX3Byb2Nlc3NRdWV1ZSAmJlxuICAgICAgICAgIHRoYXQuX2dldERlZmVycmVkU3RhdGUodGhpcy5fcHJvY2Vzc1F1ZXVlKSA9PT0gJ3BlbmRpbmcnXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgICAgZGF0YS5wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzO1xuICAgICAgfTtcbiAgICAgIGRhdGEucmVzcG9uc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZTtcbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8vIFBhcnNlcyB0aGUgUmFuZ2UgaGVhZGVyIGZyb20gdGhlIHNlcnZlciByZXNwb25zZVxuICAgIC8vIGFuZCByZXR1cm5zIHRoZSB1cGxvYWRlZCBieXRlczpcbiAgICBfZ2V0VXBsb2FkZWRCeXRlczogZnVuY3Rpb24gKGpxWEhSKSB7XG4gICAgICB2YXIgcmFuZ2UgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlcignUmFuZ2UnKSxcbiAgICAgICAgcGFydHMgPSByYW5nZSAmJiByYW5nZS5zcGxpdCgnLScpLFxuICAgICAgICB1cHBlckJ5dGVzUG9zID0gcGFydHMgJiYgcGFydHMubGVuZ3RoID4gMSAmJiBwYXJzZUludChwYXJ0c1sxXSwgMTApO1xuICAgICAgcmV0dXJuIHVwcGVyQnl0ZXNQb3MgJiYgdXBwZXJCeXRlc1BvcyArIDE7XG4gICAgfSxcblxuICAgIC8vIFVwbG9hZHMgYSBmaWxlIGluIG11bHRpcGxlLCBzZXF1ZW50aWFsIHJlcXVlc3RzXG4gICAgLy8gYnkgc3BsaXR0aW5nIHRoZSBmaWxlIHVwIGluIG11bHRpcGxlIGJsb2IgY2h1bmtzLlxuICAgIC8vIElmIHRoZSBzZWNvbmQgcGFyYW1ldGVyIGlzIHRydWUsIG9ubHkgdGVzdHMgaWYgdGhlIGZpbGVcbiAgICAvLyBzaG91bGQgYmUgdXBsb2FkZWQgaW4gY2h1bmtzLCBidXQgZG9lcyBub3QgaW52b2tlIGFueVxuICAgIC8vIHVwbG9hZCByZXF1ZXN0czpcbiAgICBfY2h1bmtlZFVwbG9hZDogZnVuY3Rpb24gKG9wdGlvbnMsIHRlc3RPbmx5KSB7XG4gICAgICBvcHRpb25zLnVwbG9hZGVkQnl0ZXMgPSBvcHRpb25zLnVwbG9hZGVkQnl0ZXMgfHwgMDtcbiAgICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgICAgZmlsZSA9IG9wdGlvbnMuZmlsZXNbMF0sXG4gICAgICAgIGZzID0gZmlsZS5zaXplLFxuICAgICAgICB1YiA9IG9wdGlvbnMudXBsb2FkZWRCeXRlcyxcbiAgICAgICAgbWNzID0gb3B0aW9ucy5tYXhDaHVua1NpemUgfHwgZnMsXG4gICAgICAgIHNsaWNlID0gdGhpcy5fYmxvYlNsaWNlLFxuICAgICAgICBkZmQgPSAkLkRlZmVycmVkKCksXG4gICAgICAgIHByb21pc2UgPSBkZmQucHJvbWlzZSgpLFxuICAgICAgICBqcVhIUixcbiAgICAgICAgdXBsb2FkO1xuICAgICAgaWYgKFxuICAgICAgICAhKFxuICAgICAgICAgIHRoaXMuX2lzWEhSVXBsb2FkKG9wdGlvbnMpICYmXG4gICAgICAgICAgc2xpY2UgJiZcbiAgICAgICAgICAodWIgfHwgKHR5cGVvZiBtY3MgPT09IFwiZnVuY3Rpb25cIiA/IG1jcyhvcHRpb25zKSA6IG1jcykgPCBmcylcbiAgICAgICAgKSB8fFxuICAgICAgICBvcHRpb25zLmRhdGFcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodGVzdE9ubHkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodWIgPj0gZnMpIHtcbiAgICAgICAgZmlsZS5lcnJvciA9IG9wdGlvbnMuaTE4bigndXBsb2FkZWRCeXRlcycpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0WEhSUHJvbWlzZShmYWxzZSwgb3B0aW9ucy5jb250ZXh0LCBbXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICAnZXJyb3InLFxuICAgICAgICAgIGZpbGUuZXJyb3JcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgICAvLyBUaGUgY2h1bmsgdXBsb2FkIG1ldGhvZDpcbiAgICAgIHVwbG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQ2xvbmUgdGhlIG9wdGlvbnMgb2JqZWN0IGZvciBlYWNoIGNodW5rIHVwbG9hZDpcbiAgICAgICAgdmFyIG8gPSAkLmV4dGVuZCh7fSwgb3B0aW9ucyksXG4gICAgICAgICAgY3VycmVudExvYWRlZCA9IG8uX3Byb2dyZXNzLmxvYWRlZDtcbiAgICAgICAgby5ibG9iID0gc2xpY2UuY2FsbChcbiAgICAgICAgICBmaWxlLFxuICAgICAgICAgIHViLFxuICAgICAgICAgIHViICsgKHR5cGVvZiBtY3MgPT09IFwiZnVuY3Rpb25cIiA/IG1jcyhvKSA6IG1jcyksXG4gICAgICAgICAgZmlsZS50eXBlXG4gICAgICAgICk7XG4gICAgICAgIC8vIFN0b3JlIHRoZSBjdXJyZW50IGNodW5rIHNpemUsIGFzIHRoZSBibG9iIGl0c2VsZlxuICAgICAgICAvLyB3aWxsIGJlIGRlcmVmZXJlbmNlZCBhZnRlciBkYXRhIHByb2Nlc3Npbmc6XG4gICAgICAgIG8uY2h1bmtTaXplID0gby5ibG9iLnNpemU7XG4gICAgICAgIC8vIEV4cG9zZSB0aGUgY2h1bmsgYnl0ZXMgcG9zaXRpb24gcmFuZ2U6XG4gICAgICAgIG8uY29udGVudFJhbmdlID1cbiAgICAgICAgICAnYnl0ZXMgJyArIHViICsgJy0nICsgKHViICsgby5jaHVua1NpemUgLSAxKSArICcvJyArIGZzO1xuICAgICAgICAvLyBUcmlnZ2VyIGNodW5rYmVmb3Jlc2VuZCB0byBhbGxvdyBmb3JtIGRhdGEgdG8gYmUgdXBkYXRlZCBmb3IgdGhpcyBjaHVua1xuICAgICAgICB0aGF0Ll90cmlnZ2VyKCdjaHVua2JlZm9yZXNlbmQnLCBudWxsLCBvKTtcbiAgICAgICAgLy8gUHJvY2VzcyB0aGUgdXBsb2FkIGRhdGEgKHRoZSBibG9iIGFuZCBwb3RlbnRpYWwgZm9ybSBkYXRhKTpcbiAgICAgICAgdGhhdC5faW5pdFhIUkRhdGEobyk7XG4gICAgICAgIC8vIEFkZCBwcm9ncmVzcyBsaXN0ZW5lcnMgZm9yIHRoaXMgY2h1bmsgdXBsb2FkOlxuICAgICAgICB0aGF0Ll9pbml0UHJvZ3Jlc3NMaXN0ZW5lcihvKTtcbiAgICAgICAganFYSFIgPSAoXG4gICAgICAgICAgKHRoYXQuX3RyaWdnZXIoJ2NodW5rc2VuZCcsIG51bGwsIG8pICE9PSBmYWxzZSAmJiAkLmFqYXgobykpIHx8XG4gICAgICAgICAgdGhhdC5fZ2V0WEhSUHJvbWlzZShmYWxzZSwgby5jb250ZXh0KVxuICAgICAgICApXG4gICAgICAgICAgLmRvbmUoZnVuY3Rpb24gKHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcbiAgICAgICAgICAgIHViID0gdGhhdC5fZ2V0VXBsb2FkZWRCeXRlcyhqcVhIUikgfHwgdWIgKyBvLmNodW5rU2l6ZTtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIHByb2dyZXNzIGV2ZW50IGlmIG5vIGZpbmFsIHByb2dyZXNzIGV2ZW50XG4gICAgICAgICAgICAvLyB3aXRoIGxvYWRlZCBlcXVhbGluZyB0b3RhbCBoYXMgYmVlbiB0cmlnZ2VyZWRcbiAgICAgICAgICAgIC8vIGZvciB0aGlzIGNodW5rOlxuICAgICAgICAgICAgaWYgKGN1cnJlbnRMb2FkZWQgKyBvLmNodW5rU2l6ZSAtIG8uX3Byb2dyZXNzLmxvYWRlZCkge1xuICAgICAgICAgICAgICB0aGF0Ll9vblByb2dyZXNzKFxuICAgICAgICAgICAgICAgICQuRXZlbnQoJ3Byb2dyZXNzJywge1xuICAgICAgICAgICAgICAgICAgbGVuZ3RoQ29tcHV0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGxvYWRlZDogdWIgLSBvLnVwbG9hZGVkQnl0ZXMsXG4gICAgICAgICAgICAgICAgICB0b3RhbDogdWIgLSBvLnVwbG9hZGVkQnl0ZXNcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBvXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcHRpb25zLnVwbG9hZGVkQnl0ZXMgPSBvLnVwbG9hZGVkQnl0ZXMgPSB1YjtcbiAgICAgICAgICAgIG8ucmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgby50ZXh0U3RhdHVzID0gdGV4dFN0YXR1cztcbiAgICAgICAgICAgIG8uanFYSFIgPSBqcVhIUjtcbiAgICAgICAgICAgIHRoYXQuX3RyaWdnZXIoJ2NodW5rZG9uZScsIG51bGwsIG8pO1xuICAgICAgICAgICAgdGhhdC5fdHJpZ2dlcignY2h1bmthbHdheXMnLCBudWxsLCBvKTtcbiAgICAgICAgICAgIGlmICh1YiA8IGZzKSB7XG4gICAgICAgICAgICAgIC8vIEZpbGUgdXBsb2FkIG5vdCB5ZXQgY29tcGxldGUsXG4gICAgICAgICAgICAgIC8vIGNvbnRpbnVlIHdpdGggdGhlIG5leHQgY2h1bms6XG4gICAgICAgICAgICAgIHVwbG9hZCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGZkLnJlc29sdmVXaXRoKG8uY29udGV4dCwgW3Jlc3VsdCwgdGV4dFN0YXR1cywganFYSFJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5mYWlsKGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgIG8uanFYSFIgPSBqcVhIUjtcbiAgICAgICAgICAgIG8udGV4dFN0YXR1cyA9IHRleHRTdGF0dXM7XG4gICAgICAgICAgICBvLmVycm9yVGhyb3duID0gZXJyb3JUaHJvd247XG4gICAgICAgICAgICB0aGF0Ll90cmlnZ2VyKCdjaHVua2ZhaWwnLCBudWxsLCBvKTtcbiAgICAgICAgICAgIHRoYXQuX3RyaWdnZXIoJ2NodW5rYWx3YXlzJywgbnVsbCwgbyk7XG4gICAgICAgICAgICBkZmQucmVqZWN0V2l0aChvLmNvbnRleHQsIFtqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd25dKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC5fZGVpbml0UHJvZ3Jlc3NMaXN0ZW5lcihvKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9lbmhhbmNlUHJvbWlzZShwcm9taXNlKTtcbiAgICAgIHByb21pc2UuYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBqcVhIUi5hYm9ydCgpO1xuICAgICAgfTtcbiAgICAgIHVwbG9hZCgpO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfSxcblxuICAgIF9iZWZvcmVTZW5kOiBmdW5jdGlvbiAoZSwgZGF0YSkge1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZSA9PT0gMCkge1xuICAgICAgICAvLyB0aGUgc3RhcnQgY2FsbGJhY2sgaXMgdHJpZ2dlcmVkIHdoZW4gYW4gdXBsb2FkIHN0YXJ0c1xuICAgICAgICAvLyBhbmQgbm8gb3RoZXIgdXBsb2FkcyBhcmUgY3VycmVudGx5IHJ1bm5pbmcsXG4gICAgICAgIC8vIGVxdWl2YWxlbnQgdG8gdGhlIGdsb2JhbCBhamF4U3RhcnQgZXZlbnQ6XG4gICAgICAgIHRoaXMuX3RyaWdnZXIoJ3N0YXJ0Jyk7XG4gICAgICAgIC8vIFNldCB0aW1lciBmb3IgZ2xvYmFsIGJpdHJhdGUgcHJvZ3Jlc3MgY2FsY3VsYXRpb246XG4gICAgICAgIHRoaXMuX2JpdHJhdGVUaW1lciA9IG5ldyB0aGlzLl9CaXRyYXRlVGltZXIoKTtcbiAgICAgICAgLy8gUmVzZXQgdGhlIGdsb2JhbCBwcm9ncmVzcyB2YWx1ZXM6XG4gICAgICAgIHRoaXMuX3Byb2dyZXNzLmxvYWRlZCA9IHRoaXMuX3Byb2dyZXNzLnRvdGFsID0gMDtcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3MuYml0cmF0ZSA9IDA7XG4gICAgICB9XG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIGNvbnRhaW5lciBvYmplY3RzIGZvciB0aGUgLnJlc3BvbnNlKCkgYW5kXG4gICAgICAvLyAucHJvZ3Jlc3MoKSBtZXRob2RzIG9uIHRoZSBkYXRhIG9iamVjdCBhcmUgYXZhaWxhYmxlXG4gICAgICAvLyBhbmQgcmVzZXQgdG8gdGhlaXIgaW5pdGlhbCBzdGF0ZTpcbiAgICAgIHRoaXMuX2luaXRSZXNwb25zZU9iamVjdChkYXRhKTtcbiAgICAgIHRoaXMuX2luaXRQcm9ncmVzc09iamVjdChkYXRhKTtcbiAgICAgIGRhdGEuX3Byb2dyZXNzLmxvYWRlZCA9IGRhdGEubG9hZGVkID0gZGF0YS51cGxvYWRlZEJ5dGVzIHx8IDA7XG4gICAgICBkYXRhLl9wcm9ncmVzcy50b3RhbCA9IGRhdGEudG90YWwgPSB0aGlzLl9nZXRUb3RhbChkYXRhLmZpbGVzKSB8fCAxO1xuICAgICAgZGF0YS5fcHJvZ3Jlc3MuYml0cmF0ZSA9IGRhdGEuYml0cmF0ZSA9IDA7XG4gICAgICB0aGlzLl9hY3RpdmUgKz0gMTtcbiAgICAgIC8vIEluaXRpYWxpemUgdGhlIGdsb2JhbCBwcm9ncmVzcyB2YWx1ZXM6XG4gICAgICB0aGlzLl9wcm9ncmVzcy5sb2FkZWQgKz0gZGF0YS5sb2FkZWQ7XG4gICAgICB0aGlzLl9wcm9ncmVzcy50b3RhbCArPSBkYXRhLnRvdGFsO1xuICAgIH0sXG5cbiAgICBfb25Eb25lOiBmdW5jdGlvbiAocmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUiwgb3B0aW9ucykge1xuICAgICAgdmFyIHRvdGFsID0gb3B0aW9ucy5fcHJvZ3Jlc3MudG90YWwsXG4gICAgICAgIHJlc3BvbnNlID0gb3B0aW9ucy5fcmVzcG9uc2U7XG4gICAgICBpZiAob3B0aW9ucy5fcHJvZ3Jlc3MubG9hZGVkIDwgdG90YWwpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgcHJvZ3Jlc3MgZXZlbnQgaWYgbm8gZmluYWwgcHJvZ3Jlc3MgZXZlbnRcbiAgICAgICAgLy8gd2l0aCBsb2FkZWQgZXF1YWxpbmcgdG90YWwgaGFzIGJlZW4gdHJpZ2dlcmVkOlxuICAgICAgICB0aGlzLl9vblByb2dyZXNzKFxuICAgICAgICAgICQuRXZlbnQoJ3Byb2dyZXNzJywge1xuICAgICAgICAgICAgbGVuZ3RoQ29tcHV0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGxvYWRlZDogdG90YWwsXG4gICAgICAgICAgICB0b3RhbDogdG90YWxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBvcHRpb25zXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXNwb25zZS5yZXN1bHQgPSBvcHRpb25zLnJlc3VsdCA9IHJlc3VsdDtcbiAgICAgIHJlc3BvbnNlLnRleHRTdGF0dXMgPSBvcHRpb25zLnRleHRTdGF0dXMgPSB0ZXh0U3RhdHVzO1xuICAgICAgcmVzcG9uc2UuanFYSFIgPSBvcHRpb25zLmpxWEhSID0ganFYSFI7XG4gICAgICB0aGlzLl90cmlnZ2VyKCdkb25lJywgbnVsbCwgb3B0aW9ucyk7XG4gICAgfSxcblxuICAgIF9vbkZhaWw6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24sIG9wdGlvbnMpIHtcbiAgICAgIHZhciByZXNwb25zZSA9IG9wdGlvbnMuX3Jlc3BvbnNlO1xuICAgICAgaWYgKG9wdGlvbnMucmVjYWxjdWxhdGVQcm9ncmVzcykge1xuICAgICAgICAvLyBSZW1vdmUgdGhlIGZhaWxlZCAoZXJyb3Igb3IgYWJvcnQpIGZpbGUgdXBsb2FkIGZyb21cbiAgICAgICAgLy8gdGhlIGdsb2JhbCBwcm9ncmVzcyBjYWxjdWxhdGlvbjpcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3MubG9hZGVkIC09IG9wdGlvbnMuX3Byb2dyZXNzLmxvYWRlZDtcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3MudG90YWwgLT0gb3B0aW9ucy5fcHJvZ3Jlc3MudG90YWw7XG4gICAgICB9XG4gICAgICByZXNwb25zZS5qcVhIUiA9IG9wdGlvbnMuanFYSFIgPSBqcVhIUjtcbiAgICAgIHJlc3BvbnNlLnRleHRTdGF0dXMgPSBvcHRpb25zLnRleHRTdGF0dXMgPSB0ZXh0U3RhdHVzO1xuICAgICAgcmVzcG9uc2UuZXJyb3JUaHJvd24gPSBvcHRpb25zLmVycm9yVGhyb3duID0gZXJyb3JUaHJvd247XG4gICAgICB0aGlzLl90cmlnZ2VyKCdmYWlsJywgbnVsbCwgb3B0aW9ucyk7XG4gICAgfSxcblxuICAgIF9vbkFsd2F5czogZnVuY3Rpb24gKGpxWEhSb3JSZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSb3JFcnJvciwgb3B0aW9ucykge1xuICAgICAgLy8ganFYSFJvclJlc3VsdCwgdGV4dFN0YXR1cyBhbmQganFYSFJvckVycm9yIGFyZSBhZGRlZCB0byB0aGVcbiAgICAgIC8vIG9wdGlvbnMgb2JqZWN0IHZpYSBkb25lIGFuZCBmYWlsIGNhbGxiYWNrc1xuICAgICAgdGhpcy5fdHJpZ2dlcignYWx3YXlzJywgbnVsbCwgb3B0aW9ucyk7XG4gICAgfSxcblxuICAgIF9vblNlbmQ6IGZ1bmN0aW9uIChlLCBkYXRhKSB7XG4gICAgICBpZiAoIWRhdGEuc3VibWl0KSB7XG4gICAgICAgIHRoaXMuX2FkZENvbnZlbmllbmNlTWV0aG9kcyhlLCBkYXRhKTtcbiAgICAgIH1cbiAgICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgICAganFYSFIsXG4gICAgICAgIGFib3J0ZWQsXG4gICAgICAgIHNsb3QsXG4gICAgICAgIHBpcGUsXG4gICAgICAgIG9wdGlvbnMgPSB0aGF0Ll9nZXRBSkFYU2V0dGluZ3MoZGF0YSksXG4gICAgICAgIHNlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhhdC5fc2VuZGluZyArPSAxO1xuICAgICAgICAgIC8vIFNldCB0aW1lciBmb3IgYml0cmF0ZSBwcm9ncmVzcyBjYWxjdWxhdGlvbjpcbiAgICAgICAgICBvcHRpb25zLl9iaXRyYXRlVGltZXIgPSBuZXcgdGhhdC5fQml0cmF0ZVRpbWVyKCk7XG4gICAgICAgICAganFYSFIgPVxuICAgICAgICAgICAganFYSFIgfHxcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgKChhYm9ydGVkIHx8XG4gICAgICAgICAgICAgICAgdGhhdC5fdHJpZ2dlcihcbiAgICAgICAgICAgICAgICAgICdzZW5kJyxcbiAgICAgICAgICAgICAgICAgICQuRXZlbnQoJ3NlbmQnLCB7IGRlbGVnYXRlZEV2ZW50OiBlIH0pLFxuICAgICAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgICAgICkgPT09IGZhbHNlKSAmJlxuICAgICAgICAgICAgICAgIHRoYXQuX2dldFhIUlByb21pc2UoZmFsc2UsIG9wdGlvbnMuY29udGV4dCwgYWJvcnRlZCkpIHx8XG4gICAgICAgICAgICAgIHRoYXQuX2NodW5rZWRVcGxvYWQob3B0aW9ucykgfHxcbiAgICAgICAgICAgICAgJC5hamF4KG9wdGlvbnMpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uIChyZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XG4gICAgICAgICAgICAgICAgdGhhdC5fb25Eb25lKHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuZmFpbChmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgdGhhdC5fb25GYWlsKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93biwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5hbHdheXMoZnVuY3Rpb24gKGpxWEhSb3JSZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSb3JFcnJvcikge1xuICAgICAgICAgICAgICAgIHRoYXQuX2RlaW5pdFByb2dyZXNzTGlzdGVuZXIob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhhdC5fb25BbHdheXMoXG4gICAgICAgICAgICAgICAgICBqcVhIUm9yUmVzdWx0LFxuICAgICAgICAgICAgICAgICAgdGV4dFN0YXR1cyxcbiAgICAgICAgICAgICAgICAgIGpxWEhSb3JFcnJvcixcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoYXQuX3NlbmRpbmcgLT0gMTtcbiAgICAgICAgICAgICAgICB0aGF0Ll9hY3RpdmUgLT0gMTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBvcHRpb25zLmxpbWl0Q29uY3VycmVudFVwbG9hZHMgJiZcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMubGltaXRDb25jdXJyZW50VXBsb2FkcyA+IHRoYXQuX3NlbmRpbmdcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHRoZSBuZXh0IHF1ZXVlZCB1cGxvYWQsXG4gICAgICAgICAgICAgICAgICAvLyB0aGF0IGhhcyBub3QgYmVlbiBhYm9ydGVkOlxuICAgICAgICAgICAgICAgICAgdmFyIG5leHRTbG90ID0gdGhhdC5fc2xvdHMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgIHdoaWxlIChuZXh0U2xvdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhhdC5fZ2V0RGVmZXJyZWRTdGF0ZShuZXh0U2xvdCkgPT09ICdwZW5kaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgIG5leHRTbG90LnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXh0U2xvdCA9IHRoYXQuX3Nsb3RzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGF0Ll9hY3RpdmUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIC8vIFRoZSBzdG9wIGNhbGxiYWNrIGlzIHRyaWdnZXJlZCB3aGVuIGFsbCB1cGxvYWRzIGhhdmVcbiAgICAgICAgICAgICAgICAgIC8vIGJlZW4gY29tcGxldGVkLCBlcXVpdmFsZW50IHRvIHRoZSBnbG9iYWwgYWpheFN0b3AgZXZlbnQ6XG4gICAgICAgICAgICAgICAgICB0aGF0Ll90cmlnZ2VyKCdzdG9wJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4ganFYSFI7XG4gICAgICAgIH07XG4gICAgICB0aGlzLl9iZWZvcmVTZW5kKGUsIG9wdGlvbnMpO1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLm9wdGlvbnMuc2VxdWVudGlhbFVwbG9hZHMgfHxcbiAgICAgICAgKHRoaXMub3B0aW9ucy5saW1pdENvbmN1cnJlbnRVcGxvYWRzICYmXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmxpbWl0Q29uY3VycmVudFVwbG9hZHMgPD0gdGhpcy5fc2VuZGluZylcbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0Q29uY3VycmVudFVwbG9hZHMgPiAxKSB7XG4gICAgICAgICAgc2xvdCA9ICQuRGVmZXJyZWQoKTtcbiAgICAgICAgICB0aGlzLl9zbG90cy5wdXNoKHNsb3QpO1xuICAgICAgICAgIHBpcGUgPSBzbG90W3RoYXQuX3Byb21pc2VQaXBlXShzZW5kKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zZXF1ZW5jZSA9IHRoaXMuX3NlcXVlbmNlW3RoYXQuX3Byb21pc2VQaXBlXShzZW5kLCBzZW5kKTtcbiAgICAgICAgICBwaXBlID0gdGhpcy5fc2VxdWVuY2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmV0dXJuIHRoZSBwaXBlZCBQcm9taXNlIG9iamVjdCwgZW5oYW5jZWQgd2l0aCBhbiBhYm9ydCBtZXRob2QsXG4gICAgICAgIC8vIHdoaWNoIGlzIGRlbGVnYXRlZCB0byB0aGUganFYSFIgb2JqZWN0IG9mIHRoZSBjdXJyZW50IHVwbG9hZCxcbiAgICAgICAgLy8gYW5kIGpxWEhSIGNhbGxiYWNrcyBtYXBwZWQgdG8gdGhlIGVxdWl2YWxlbnQgUHJvbWlzZSBtZXRob2RzOlxuICAgICAgICBwaXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFib3J0ZWQgPSBbdW5kZWZpbmVkLCAnYWJvcnQnLCAnYWJvcnQnXTtcbiAgICAgICAgICBpZiAoIWpxWEhSKSB7XG4gICAgICAgICAgICBpZiAoc2xvdCkge1xuICAgICAgICAgICAgICBzbG90LnJlamVjdFdpdGgob3B0aW9ucy5jb250ZXh0LCBhYm9ydGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBqcVhIUi5hYm9ydCgpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5fZW5oYW5jZVByb21pc2UocGlwZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VuZCgpO1xuICAgIH0sXG5cbiAgICBfb25BZGQ6IGZ1bmN0aW9uIChlLCBkYXRhKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zLCBkYXRhKSxcbiAgICAgICAgZmlsZXMgPSBkYXRhLmZpbGVzLFxuICAgICAgICBmaWxlc0xlbmd0aCA9IGZpbGVzLmxlbmd0aCxcbiAgICAgICAgbGltaXQgPSBvcHRpb25zLmxpbWl0TXVsdGlGaWxlVXBsb2FkcyxcbiAgICAgICAgbGltaXRTaXplID0gb3B0aW9ucy5saW1pdE11bHRpRmlsZVVwbG9hZFNpemUsXG4gICAgICAgIG92ZXJoZWFkID0gb3B0aW9ucy5saW1pdE11bHRpRmlsZVVwbG9hZFNpemVPdmVyaGVhZCxcbiAgICAgICAgYmF0Y2hTaXplID0gMCxcbiAgICAgICAgcGFyYW1OYW1lID0gdGhpcy5fZ2V0UGFyYW1OYW1lKG9wdGlvbnMpLFxuICAgICAgICBwYXJhbU5hbWVTZXQsXG4gICAgICAgIHBhcmFtTmFtZVNsaWNlLFxuICAgICAgICBmaWxlU2V0LFxuICAgICAgICBpLFxuICAgICAgICBqID0gMDtcbiAgICAgIGlmICghZmlsZXNMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGxpbWl0U2l6ZSAmJiBmaWxlc1swXS5zaXplID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGltaXRTaXplID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhKG9wdGlvbnMuc2luZ2xlRmlsZVVwbG9hZHMgfHwgbGltaXQgfHwgbGltaXRTaXplKSB8fFxuICAgICAgICAhdGhpcy5faXNYSFJVcGxvYWQob3B0aW9ucylcbiAgICAgICkge1xuICAgICAgICBmaWxlU2V0ID0gW2ZpbGVzXTtcbiAgICAgICAgcGFyYW1OYW1lU2V0ID0gW3BhcmFtTmFtZV07XG4gICAgICB9IGVsc2UgaWYgKCEob3B0aW9ucy5zaW5nbGVGaWxlVXBsb2FkcyB8fCBsaW1pdFNpemUpICYmIGxpbWl0KSB7XG4gICAgICAgIGZpbGVTZXQgPSBbXTtcbiAgICAgICAgcGFyYW1OYW1lU2V0ID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBmaWxlc0xlbmd0aDsgaSArPSBsaW1pdCkge1xuICAgICAgICAgIGZpbGVTZXQucHVzaChmaWxlcy5zbGljZShpLCBpICsgbGltaXQpKTtcbiAgICAgICAgICBwYXJhbU5hbWVTbGljZSA9IHBhcmFtTmFtZS5zbGljZShpLCBpICsgbGltaXQpO1xuICAgICAgICAgIGlmICghcGFyYW1OYW1lU2xpY2UubGVuZ3RoKSB7XG4gICAgICAgICAgICBwYXJhbU5hbWVTbGljZSA9IHBhcmFtTmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyYW1OYW1lU2V0LnB1c2gocGFyYW1OYW1lU2xpY2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFvcHRpb25zLnNpbmdsZUZpbGVVcGxvYWRzICYmIGxpbWl0U2l6ZSkge1xuICAgICAgICBmaWxlU2V0ID0gW107XG4gICAgICAgIHBhcmFtTmFtZVNldCA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZmlsZXNMZW5ndGg7IGkgPSBpICsgMSkge1xuICAgICAgICAgIGJhdGNoU2l6ZSArPSBmaWxlc1tpXS5zaXplICsgb3ZlcmhlYWQ7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaSArIDEgPT09IGZpbGVzTGVuZ3RoIHx8XG4gICAgICAgICAgICBiYXRjaFNpemUgKyBmaWxlc1tpICsgMV0uc2l6ZSArIG92ZXJoZWFkID4gbGltaXRTaXplIHx8XG4gICAgICAgICAgICAobGltaXQgJiYgaSArIDEgLSBqID49IGxpbWl0KVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZmlsZVNldC5wdXNoKGZpbGVzLnNsaWNlKGosIGkgKyAxKSk7XG4gICAgICAgICAgICBwYXJhbU5hbWVTbGljZSA9IHBhcmFtTmFtZS5zbGljZShqLCBpICsgMSk7XG4gICAgICAgICAgICBpZiAoIXBhcmFtTmFtZVNsaWNlLmxlbmd0aCkge1xuICAgICAgICAgICAgICBwYXJhbU5hbWVTbGljZSA9IHBhcmFtTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmFtTmFtZVNldC5wdXNoKHBhcmFtTmFtZVNsaWNlKTtcbiAgICAgICAgICAgIGogPSBpICsgMTtcbiAgICAgICAgICAgIGJhdGNoU2l6ZSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbU5hbWVTZXQgPSBwYXJhbU5hbWU7XG4gICAgICB9XG4gICAgICBkYXRhLm9yaWdpbmFsRmlsZXMgPSBmaWxlcztcbiAgICAgICQuZWFjaChmaWxlU2V0IHx8IGZpbGVzLCBmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIG5ld0RhdGEgPSAkLmV4dGVuZCh7fSwgZGF0YSk7XG4gICAgICAgIG5ld0RhdGEuZmlsZXMgPSBmaWxlU2V0ID8gZWxlbWVudCA6IFtlbGVtZW50XTtcbiAgICAgICAgbmV3RGF0YS5wYXJhbU5hbWUgPSBwYXJhbU5hbWVTZXRbaW5kZXhdO1xuICAgICAgICB0aGF0Ll9pbml0UmVzcG9uc2VPYmplY3QobmV3RGF0YSk7XG4gICAgICAgIHRoYXQuX2luaXRQcm9ncmVzc09iamVjdChuZXdEYXRhKTtcbiAgICAgICAgdGhhdC5fYWRkQ29udmVuaWVuY2VNZXRob2RzKGUsIG5ld0RhdGEpO1xuICAgICAgICByZXN1bHQgPSB0aGF0Ll90cmlnZ2VyKFxuICAgICAgICAgICdhZGQnLFxuICAgICAgICAgICQuRXZlbnQoJ2FkZCcsIHsgZGVsZWdhdGVkRXZlbnQ6IGUgfSksXG4gICAgICAgICAgbmV3RGF0YVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICBfcmVwbGFjZUZpbGVJbnB1dDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHZhciBpbnB1dCA9IGRhdGEuZmlsZUlucHV0LFxuICAgICAgICBpbnB1dENsb25lID0gaW5wdXQuY2xvbmUodHJ1ZSksXG4gICAgICAgIHJlc3RvcmVGb2N1cyA9IGlucHV0LmlzKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgLy8gQWRkIGEgcmVmZXJlbmNlIGZvciB0aGUgbmV3IGNsb25lZCBmaWxlIGlucHV0IHRvIHRoZSBkYXRhIGFyZ3VtZW50OlxuICAgICAgZGF0YS5maWxlSW5wdXRDbG9uZSA9IGlucHV0Q2xvbmU7XG4gICAgICAkKCc8Zm9ybT48L2Zvcm0+JykuYXBwZW5kKGlucHV0Q2xvbmUpWzBdLnJlc2V0KCk7XG4gICAgICAvLyBEZXRhY2hpbmcgYWxsb3dzIHRvIGluc2VydCB0aGUgZmlsZUlucHV0IG9uIGFub3RoZXIgZm9ybVxuICAgICAgLy8gd2l0aG91dCBsb3NpbmcgdGhlIGZpbGUgaW5wdXQgdmFsdWU6XG4gICAgICBpbnB1dC5hZnRlcihpbnB1dENsb25lKS5kZXRhY2goKTtcbiAgICAgIC8vIElmIHRoZSBmaWxlSW5wdXQgaGFkIGZvY3VzIGJlZm9yZSBpdCB3YXMgZGV0YWNoZWQsXG4gICAgICAvLyByZXN0b3JlIGZvY3VzIHRvIHRoZSBpbnB1dENsb25lLlxuICAgICAgaWYgKHJlc3RvcmVGb2N1cykge1xuICAgICAgICBpbnB1dENsb25lLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICB9XG4gICAgICAvLyBBdm9pZCBtZW1vcnkgbGVha3Mgd2l0aCB0aGUgZGV0YWNoZWQgZmlsZSBpbnB1dDpcbiAgICAgICQuY2xlYW5EYXRhKGlucHV0Lm9mZigncmVtb3ZlJykpO1xuICAgICAgLy8gUmVwbGFjZSB0aGUgb3JpZ2luYWwgZmlsZSBpbnB1dCBlbGVtZW50IGluIHRoZSBmaWxlSW5wdXRcbiAgICAgIC8vIGVsZW1lbnRzIHNldCB3aXRoIHRoZSBjbG9uZSwgd2hpY2ggaGFzIGJlZW4gY29waWVkIGluY2x1ZGluZ1xuICAgICAgLy8gZXZlbnQgaGFuZGxlcnM6XG4gICAgICB0aGlzLm9wdGlvbnMuZmlsZUlucHV0ID0gdGhpcy5vcHRpb25zLmZpbGVJbnB1dC5tYXAoZnVuY3Rpb24gKGksIGVsKSB7XG4gICAgICAgIGlmIChlbCA9PT0gaW5wdXRbMF0pIHtcbiAgICAgICAgICByZXR1cm4gaW5wdXRDbG9uZVswXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9KTtcbiAgICAgIC8vIElmIHRoZSB3aWRnZXQgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgb24gdGhlIGZpbGUgaW5wdXQgaXRzZWxmLFxuICAgICAgLy8gb3ZlcnJpZGUgdGhpcy5lbGVtZW50IHdpdGggdGhlIGZpbGUgaW5wdXQgY2xvbmU6XG4gICAgICBpZiAoaW5wdXRbMF0gPT09IHRoaXMuZWxlbWVudFswXSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBpbnB1dENsb25lO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfaGFuZGxlRmlsZVRyZWVFbnRyeTogZnVuY3Rpb24gKGVudHJ5LCBwYXRoKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICAgIGRmZCA9ICQuRGVmZXJyZWQoKSxcbiAgICAgICAgZW50cmllcyA9IFtdLFxuICAgICAgICBkaXJSZWFkZXIsXG4gICAgICAgIGVycm9ySGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGUgJiYgIWUuZW50cnkpIHtcbiAgICAgICAgICAgIGUuZW50cnkgPSBlbnRyeTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gU2luY2UgJC53aGVuIHJldHVybnMgaW1tZWRpYXRlbHkgaWYgb25lXG4gICAgICAgICAgLy8gRGVmZXJyZWQgaXMgcmVqZWN0ZWQsIHdlIHVzZSByZXNvbHZlIGluc3RlYWQuXG4gICAgICAgICAgLy8gVGhpcyBhbGxvd3MgdmFsaWQgZmlsZXMgYW5kIGludmFsaWQgaXRlbXNcbiAgICAgICAgICAvLyB0byBiZSByZXR1cm5lZCB0b2dldGhlciBpbiBvbmUgc2V0OlxuICAgICAgICAgIGRmZC5yZXNvbHZlKFtlXSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3NIYW5kbGVyID0gZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICB0aGF0XG4gICAgICAgICAgICAuX2hhbmRsZUZpbGVUcmVlRW50cmllcyhlbnRyaWVzLCBwYXRoICsgZW50cnkubmFtZSArICcvJylcbiAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uIChmaWxlcykge1xuICAgICAgICAgICAgICBkZmQucmVzb2x2ZShmaWxlcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZhaWwoZXJyb3JIYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVhZEVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZGlyUmVhZGVyLnJlYWRFbnRyaWVzKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKGVudHJpZXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZW50cmllcyA9IGVudHJpZXMuY29uY2F0KHJlc3VsdHMpO1xuICAgICAgICAgICAgICByZWFkRW50cmllcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGVycm9ySGFuZGxlcik7XG4gICAgICAgIH07XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIHBhdGggPSBwYXRoIHx8ICcnO1xuICAgICAgaWYgKGVudHJ5LmlzRmlsZSkge1xuICAgICAgICBpZiAoZW50cnkuX2ZpbGUpIHtcbiAgICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBDaHJvbWUgYnVnICMxNDk3MzVcbiAgICAgICAgICBlbnRyeS5fZmlsZS5yZWxhdGl2ZVBhdGggPSBwYXRoO1xuICAgICAgICAgIGRmZC5yZXNvbHZlKGVudHJ5Ll9maWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbnRyeS5maWxlKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICBmaWxlLnJlbGF0aXZlUGF0aCA9IHBhdGg7XG4gICAgICAgICAgICBkZmQucmVzb2x2ZShmaWxlKTtcbiAgICAgICAgICB9LCBlcnJvckhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVudHJ5LmlzRGlyZWN0b3J5KSB7XG4gICAgICAgIGRpclJlYWRlciA9IGVudHJ5LmNyZWF0ZVJlYWRlcigpO1xuICAgICAgICByZWFkRW50cmllcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGFuIGVtcHR5IGxpc3QgZm9yIGZpbGUgc3lzdGVtIGl0ZW1zXG4gICAgICAgIC8vIG90aGVyIHRoYW4gZmlsZXMgb3IgZGlyZWN0b3JpZXM6XG4gICAgICAgIGRmZC5yZXNvbHZlKFtdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZmQucHJvbWlzZSgpO1xuICAgIH0sXG5cbiAgICBfaGFuZGxlRmlsZVRyZWVFbnRyaWVzOiBmdW5jdGlvbiAoZW50cmllcywgcGF0aCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgcmV0dXJuICQud2hlblxuICAgICAgICAuYXBwbHkoXG4gICAgICAgICAgJCxcbiAgICAgICAgICAkLm1hcChlbnRyaWVzLCBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGF0Ll9oYW5kbGVGaWxlVHJlZUVudHJ5KGVudHJ5LCBwYXRoKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIFt0aGlzLl9wcm9taXNlUGlwZV0oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgX2dldERyb3BwZWRGaWxlczogZnVuY3Rpb24gKGRhdGFUcmFuc2Zlcikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBkYXRhVHJhbnNmZXIgPSBkYXRhVHJhbnNmZXIgfHwge307XG4gICAgICB2YXIgaXRlbXMgPSBkYXRhVHJhbnNmZXIuaXRlbXM7XG4gICAgICBpZiAoXG4gICAgICAgIGl0ZW1zICYmXG4gICAgICAgIGl0ZW1zLmxlbmd0aCAmJlxuICAgICAgICAoaXRlbXNbMF0ud2Via2l0R2V0QXNFbnRyeSB8fCBpdGVtc1swXS5nZXRBc0VudHJ5KVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVGaWxlVHJlZUVudHJpZXMoXG4gICAgICAgICAgJC5tYXAoaXRlbXMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgZW50cnk7XG4gICAgICAgICAgICBpZiAoaXRlbS53ZWJraXRHZXRBc0VudHJ5KSB7XG4gICAgICAgICAgICAgIGVudHJ5ID0gaXRlbS53ZWJraXRHZXRBc0VudHJ5KCk7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIC8vIFdvcmthcm91bmQgZm9yIENocm9tZSBidWcgIzE0OTczNTpcbiAgICAgICAgICAgICAgICBlbnRyeS5fZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZ2V0QXNFbnRyeSgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gJC5EZWZlcnJlZCgpLnJlc29sdmUoJC5tYWtlQXJyYXkoZGF0YVRyYW5zZmVyLmZpbGVzKSkucHJvbWlzZSgpO1xuICAgIH0sXG5cbiAgICBfZ2V0U2luZ2xlRmlsZUlucHV0RmlsZXM6IGZ1bmN0aW9uIChmaWxlSW5wdXQpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgZmlsZUlucHV0ID0gJChmaWxlSW5wdXQpO1xuICAgICAgdmFyIGVudHJpZXMgPSBmaWxlSW5wdXQucHJvcCgnZW50cmllcycpLFxuICAgICAgICBmaWxlcyxcbiAgICAgICAgdmFsdWU7XG4gICAgICBpZiAoZW50cmllcyAmJiBlbnRyaWVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRmlsZVRyZWVFbnRyaWVzKGVudHJpZXMpO1xuICAgICAgfVxuICAgICAgZmlsZXMgPSAkLm1ha2VBcnJheShmaWxlSW5wdXQucHJvcCgnZmlsZXMnKSk7XG4gICAgICBpZiAoIWZpbGVzLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9IGZpbGVJbnB1dC5wcm9wKCd2YWx1ZScpO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuICQuRGVmZXJyZWQoKS5yZXNvbHZlKFtdKS5wcm9taXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGZpbGVzIHByb3BlcnR5IGlzIG5vdCBhdmFpbGFibGUsIHRoZSBicm93c2VyIGRvZXMgbm90XG4gICAgICAgIC8vIHN1cHBvcnQgdGhlIEZpbGUgQVBJIGFuZCB3ZSBhZGQgYSBwc2V1ZG8gRmlsZSBvYmplY3Qgd2l0aFxuICAgICAgICAvLyB0aGUgaW5wdXQgdmFsdWUgYXMgbmFtZSB3aXRoIHBhdGggaW5mb3JtYXRpb24gcmVtb3ZlZDpcbiAgICAgICAgZmlsZXMgPSBbeyBuYW1lOiB2YWx1ZS5yZXBsYWNlKC9eLipcXFxcLywgJycpIH1dO1xuICAgICAgfSBlbHNlIGlmIChmaWxlc1swXS5uYW1lID09PSB1bmRlZmluZWQgJiYgZmlsZXNbMF0uZmlsZU5hbWUpIHtcbiAgICAgICAgLy8gRmlsZSBub3JtYWxpemF0aW9uIGZvciBTYWZhcmkgNCBhbmQgRmlyZWZveCAzOlxuICAgICAgICAkLmVhY2goZmlsZXMsIGZ1bmN0aW9uIChpbmRleCwgZmlsZSkge1xuICAgICAgICAgIGZpbGUubmFtZSA9IGZpbGUuZmlsZU5hbWU7XG4gICAgICAgICAgZmlsZS5zaXplID0gZmlsZS5maWxlU2l6ZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gJC5EZWZlcnJlZCgpLnJlc29sdmUoZmlsZXMpLnByb21pc2UoKTtcbiAgICB9LFxuXG4gICAgX2dldEZpbGVJbnB1dEZpbGVzOiBmdW5jdGlvbiAoZmlsZUlucHV0KSB7XG4gICAgICBpZiAoIShmaWxlSW5wdXQgaW5zdGFuY2VvZiAkKSB8fCBmaWxlSW5wdXQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRTaW5nbGVGaWxlSW5wdXRGaWxlcyhmaWxlSW5wdXQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICQud2hlblxuICAgICAgICAuYXBwbHkoJCwgJC5tYXAoZmlsZUlucHV0LCB0aGlzLl9nZXRTaW5nbGVGaWxlSW5wdXRGaWxlcykpXG4gICAgICAgIFt0aGlzLl9wcm9taXNlUGlwZV0oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgX29uQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIGZpbGVJbnB1dDogJChlLnRhcmdldCksXG4gICAgICAgICAgZm9ybTogJChlLnRhcmdldC5mb3JtKVxuICAgICAgICB9O1xuICAgICAgdGhpcy5fZ2V0RmlsZUlucHV0RmlsZXMoZGF0YS5maWxlSW5wdXQpLmFsd2F5cyhmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICAgICAgZGF0YS5maWxlcyA9IGZpbGVzO1xuICAgICAgICBpZiAodGhhdC5vcHRpb25zLnJlcGxhY2VGaWxlSW5wdXQpIHtcbiAgICAgICAgICB0aGF0Ll9yZXBsYWNlRmlsZUlucHV0KGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGF0Ll90cmlnZ2VyKFxuICAgICAgICAgICAgJ2NoYW5nZScsXG4gICAgICAgICAgICAkLkV2ZW50KCdjaGFuZ2UnLCB7IGRlbGVnYXRlZEV2ZW50OiBlIH0pLFxuICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICkgIT09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgIHRoYXQuX29uQWRkKGUsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgX29uUGFzdGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgaXRlbXMgPVxuICAgICAgICAgIGUub3JpZ2luYWxFdmVudCAmJlxuICAgICAgICAgIGUub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhICYmXG4gICAgICAgICAgZS5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEuaXRlbXMsXG4gICAgICAgIGRhdGEgPSB7IGZpbGVzOiBbXSB9O1xuICAgICAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAkLmVhY2goaXRlbXMsIGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xuICAgICAgICAgIHZhciBmaWxlID0gaXRlbS5nZXRBc0ZpbGUgJiYgaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgZGF0YS5maWxlcy5wdXNoKGZpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyKFxuICAgICAgICAgICAgJ3Bhc3RlJyxcbiAgICAgICAgICAgICQuRXZlbnQoJ3Bhc3RlJywgeyBkZWxlZ2F0ZWRFdmVudDogZSB9KSxcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICApICE9PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLl9vbkFkZChlLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBfb25Ecm9wOiBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5kYXRhVHJhbnNmZXIgPSBlLm9yaWdpbmFsRXZlbnQgJiYgZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2ZlcjtcbiAgICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgICAgZGF0YVRyYW5zZmVyID0gZS5kYXRhVHJhbnNmZXIsXG4gICAgICAgIGRhdGEgPSB7fTtcbiAgICAgIGlmIChkYXRhVHJhbnNmZXIgJiYgZGF0YVRyYW5zZmVyLmZpbGVzICYmIGRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLl9nZXREcm9wcGVkRmlsZXMoZGF0YVRyYW5zZmVyKS5hbHdheXMoZnVuY3Rpb24gKGZpbGVzKSB7XG4gICAgICAgICAgZGF0YS5maWxlcyA9IGZpbGVzO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoYXQuX3RyaWdnZXIoXG4gICAgICAgICAgICAgICdkcm9wJyxcbiAgICAgICAgICAgICAgJC5FdmVudCgnZHJvcCcsIHsgZGVsZWdhdGVkRXZlbnQ6IGUgfSksXG4gICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICkgIT09IGZhbHNlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGF0Ll9vbkFkZChlLCBkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfb25EcmFnT3ZlcjogZ2V0RHJhZ0hhbmRsZXIoJ2RyYWdvdmVyJyksXG5cbiAgICBfb25EcmFnRW50ZXI6IGdldERyYWdIYW5kbGVyKCdkcmFnZW50ZXInKSxcblxuICAgIF9vbkRyYWdMZWF2ZTogZ2V0RHJhZ0hhbmRsZXIoJ2RyYWdsZWF2ZScpLFxuXG4gICAgX2luaXRFdmVudEhhbmRsZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5faXNYSFJVcGxvYWQodGhpcy5vcHRpb25zKSkge1xuICAgICAgICB0aGlzLl9vbih0aGlzLm9wdGlvbnMuZHJvcFpvbmUsIHtcbiAgICAgICAgICBkcmFnb3ZlcjogdGhpcy5fb25EcmFnT3ZlcixcbiAgICAgICAgICBkcm9wOiB0aGlzLl9vbkRyb3AsXG4gICAgICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKSBvbiBkcmFnZW50ZXIgaXMgcmVxdWlyZWQgZm9yIElFMTArOlxuICAgICAgICAgIGRyYWdlbnRlcjogdGhpcy5fb25EcmFnRW50ZXIsXG4gICAgICAgICAgLy8gZHJhZ2xlYXZlIGlzIG5vdCByZXF1aXJlZCwgYnV0IGFkZGVkIGZvciBjb21wbGV0ZW5lc3M6XG4gICAgICAgICAgZHJhZ2xlYXZlOiB0aGlzLl9vbkRyYWdMZWF2ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fb24odGhpcy5vcHRpb25zLnBhc3RlWm9uZSwge1xuICAgICAgICAgIHBhc3RlOiB0aGlzLl9vblBhc3RlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCQuc3VwcG9ydC5maWxlSW5wdXQpIHtcbiAgICAgICAgdGhpcy5fb24odGhpcy5vcHRpb25zLmZpbGVJbnB1dCwge1xuICAgICAgICAgIGNoYW5nZTogdGhpcy5fb25DaGFuZ2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9kZXN0cm95RXZlbnRIYW5kbGVyczogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fb2ZmKHRoaXMub3B0aW9ucy5kcm9wWm9uZSwgJ2RyYWdlbnRlciBkcmFnbGVhdmUgZHJhZ292ZXIgZHJvcCcpO1xuICAgICAgdGhpcy5fb2ZmKHRoaXMub3B0aW9ucy5wYXN0ZVpvbmUsICdwYXN0ZScpO1xuICAgICAgdGhpcy5fb2ZmKHRoaXMub3B0aW9ucy5maWxlSW5wdXQsICdjaGFuZ2UnKTtcbiAgICB9LFxuXG4gICAgX2Rlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3lFdmVudEhhbmRsZXJzKCk7XG4gICAgfSxcblxuICAgIF9zZXRPcHRpb246IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICB2YXIgcmVpbml0ID0gJC5pbkFycmF5KGtleSwgdGhpcy5fc3BlY2lhbE9wdGlvbnMpICE9PSAtMTtcbiAgICAgIGlmIChyZWluaXQpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N1cGVyKGtleSwgdmFsdWUpO1xuICAgICAgaWYgKHJlaW5pdCkge1xuICAgICAgICB0aGlzLl9pbml0U3BlY2lhbE9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy5faW5pdEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgX2luaXRTcGVjaWFsT3B0aW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBpZiAob3B0aW9ucy5maWxlSW5wdXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvcHRpb25zLmZpbGVJbnB1dCA9IHRoaXMuZWxlbWVudC5pcygnaW5wdXRbdHlwZT1cImZpbGVcIl0nKVxuICAgICAgICAgID8gdGhpcy5lbGVtZW50XG4gICAgICAgICAgOiB0aGlzLmVsZW1lbnQuZmluZCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKTtcbiAgICAgIH0gZWxzZSBpZiAoIShvcHRpb25zLmZpbGVJbnB1dCBpbnN0YW5jZW9mICQpKSB7XG4gICAgICAgIG9wdGlvbnMuZmlsZUlucHV0ID0gJChvcHRpb25zLmZpbGVJbnB1dCk7XG4gICAgICB9XG4gICAgICBpZiAoIShvcHRpb25zLmRyb3Bab25lIGluc3RhbmNlb2YgJCkpIHtcbiAgICAgICAgb3B0aW9ucy5kcm9wWm9uZSA9ICQob3B0aW9ucy5kcm9wWm9uZSk7XG4gICAgICB9XG4gICAgICBpZiAoIShvcHRpb25zLnBhc3RlWm9uZSBpbnN0YW5jZW9mICQpKSB7XG4gICAgICAgIG9wdGlvbnMucGFzdGVab25lID0gJChvcHRpb25zLnBhc3RlWm9uZSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9nZXRSZWdFeHA6IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgnLycpLFxuICAgICAgICBtb2RpZmllcnMgPSBwYXJ0cy5wb3AoKTtcbiAgICAgIHBhcnRzLnNoaWZ0KCk7XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChwYXJ0cy5qb2luKCcvJyksIG1vZGlmaWVycyk7XG4gICAgfSxcblxuICAgIF9pc1JlZ0V4cE9wdGlvbjogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGtleSAhPT0gJ3VybCcgJiZcbiAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgIC9eXFwvLipcXC9baWdtXXswLDN9JC8udGVzdCh2YWx1ZSlcbiAgICAgICk7XG4gICAgfSxcblxuICAgIF9pbml0RGF0YUF0dHJpYnV0ZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgZGF0YSA9IHRoaXMuZWxlbWVudC5kYXRhKCk7XG4gICAgICAvLyBJbml0aWFsaXplIG9wdGlvbnMgc2V0IHZpYSBIVE1MNSBkYXRhLWF0dHJpYnV0ZXM6XG4gICAgICAkLmVhY2godGhpcy5lbGVtZW50WzBdLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uIChpbmRleCwgYXR0cikge1xuICAgICAgICB2YXIga2V5ID0gYXR0ci5uYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgdmFsdWU7XG4gICAgICAgIGlmICgvXmRhdGEtLy50ZXN0KGtleSkpIHtcbiAgICAgICAgICAvLyBDb252ZXJ0IGh5cGhlbi1hdGVkIGtleSB0byBjYW1lbENhc2U6XG4gICAgICAgICAga2V5ID0ga2V5LnNsaWNlKDUpLnJlcGxhY2UoLy1bYS16XS9nLCBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLmNoYXJBdCgxKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgICAgIGlmICh0aGF0Ll9pc1JlZ0V4cE9wdGlvbihrZXksIHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGF0Ll9nZXRSZWdFeHAodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcHRpb25zW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIF9jcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX2luaXREYXRhQXR0cmlidXRlcygpO1xuICAgICAgdGhpcy5faW5pdFNwZWNpYWxPcHRpb25zKCk7XG4gICAgICB0aGlzLl9zbG90cyA9IFtdO1xuICAgICAgdGhpcy5fc2VxdWVuY2UgPSB0aGlzLl9nZXRYSFJQcm9taXNlKHRydWUpO1xuICAgICAgdGhpcy5fc2VuZGluZyA9IHRoaXMuX2FjdGl2ZSA9IDA7XG4gICAgICB0aGlzLl9pbml0UHJvZ3Jlc3NPYmplY3QodGhpcyk7XG4gICAgICB0aGlzLl9pbml0RXZlbnRIYW5kbGVycygpO1xuICAgIH0sXG5cbiAgICAvLyBUaGlzIG1ldGhvZCBpcyBleHBvc2VkIHRvIHRoZSB3aWRnZXQgQVBJIGFuZCBhbGxvd3MgdG8gcXVlcnlcbiAgICAvLyB0aGUgbnVtYmVyIG9mIGFjdGl2ZSB1cGxvYWRzOlxuICAgIGFjdGl2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgICB9LFxuXG4gICAgLy8gVGhpcyBtZXRob2QgaXMgZXhwb3NlZCB0byB0aGUgd2lkZ2V0IEFQSSBhbmQgYWxsb3dzIHRvIHF1ZXJ5XG4gICAgLy8gdGhlIHdpZGdldCB1cGxvYWQgcHJvZ3Jlc3MuXG4gICAgLy8gSXQgcmV0dXJucyBhbiBvYmplY3Qgd2l0aCBsb2FkZWQsIHRvdGFsIGFuZCBiaXRyYXRlIHByb3BlcnRpZXNcbiAgICAvLyBmb3IgdGhlIHJ1bm5pbmcgdXBsb2FkczpcbiAgICBwcm9ncmVzczogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzO1xuICAgIH0sXG5cbiAgICAvLyBUaGlzIG1ldGhvZCBpcyBleHBvc2VkIHRvIHRoZSB3aWRnZXQgQVBJIGFuZCBhbGxvd3MgYWRkaW5nIGZpbGVzXG4gICAgLy8gdXNpbmcgdGhlIGZpbGV1cGxvYWQgQVBJLiBUaGUgZGF0YSBwYXJhbWV0ZXIgYWNjZXB0cyBhbiBvYmplY3Qgd2hpY2hcbiAgICAvLyBtdXN0IGhhdmUgYSBmaWxlcyBwcm9wZXJ0eSBhbmQgY2FuIGNvbnRhaW4gYWRkaXRpb25hbCBvcHRpb25zOlxuICAgIC8vIC5maWxldXBsb2FkKCdhZGQnLCB7ZmlsZXM6IGZpbGVzTGlzdH0pO1xuICAgIGFkZDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIGlmICghZGF0YSB8fCB0aGlzLm9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGEuZmlsZUlucHV0ICYmICFkYXRhLmZpbGVzKSB7XG4gICAgICAgIHRoaXMuX2dldEZpbGVJbnB1dEZpbGVzKGRhdGEuZmlsZUlucHV0KS5hbHdheXMoZnVuY3Rpb24gKGZpbGVzKSB7XG4gICAgICAgICAgZGF0YS5maWxlcyA9IGZpbGVzO1xuICAgICAgICAgIHRoYXQuX29uQWRkKG51bGwsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEuZmlsZXMgPSAkLm1ha2VBcnJheShkYXRhLmZpbGVzKTtcbiAgICAgICAgdGhpcy5fb25BZGQobnVsbCwgZGF0YSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFRoaXMgbWV0aG9kIGlzIGV4cG9zZWQgdG8gdGhlIHdpZGdldCBBUEkgYW5kIGFsbG93cyBzZW5kaW5nIGZpbGVzXG4gICAgLy8gdXNpbmcgdGhlIGZpbGV1cGxvYWQgQVBJLiBUaGUgZGF0YSBwYXJhbWV0ZXIgYWNjZXB0cyBhbiBvYmplY3Qgd2hpY2hcbiAgICAvLyBtdXN0IGhhdmUgYSBmaWxlcyBvciBmaWxlSW5wdXQgcHJvcGVydHkgYW5kIGNhbiBjb250YWluIGFkZGl0aW9uYWwgb3B0aW9uczpcbiAgICAvLyAuZmlsZXVwbG9hZCgnc2VuZCcsIHtmaWxlczogZmlsZXNMaXN0fSk7XG4gICAgLy8gVGhlIG1ldGhvZCByZXR1cm5zIGEgUHJvbWlzZSBvYmplY3QgZm9yIHRoZSBmaWxlIHVwbG9hZCBjYWxsLlxuICAgIHNlbmQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBpZiAoZGF0YSAmJiAhdGhpcy5vcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICAgIGlmIChkYXRhLmZpbGVJbnB1dCAmJiAhZGF0YS5maWxlcykge1xuICAgICAgICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgICAgICAgIGRmZCA9ICQuRGVmZXJyZWQoKSxcbiAgICAgICAgICAgIHByb21pc2UgPSBkZmQucHJvbWlzZSgpLFxuICAgICAgICAgICAganFYSFIsXG4gICAgICAgICAgICBhYm9ydGVkO1xuICAgICAgICAgIHByb21pc2UuYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChqcVhIUikge1xuICAgICAgICAgICAgICByZXR1cm4ganFYSFIuYWJvcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRmZC5yZWplY3QobnVsbCwgJ2Fib3J0JywgJ2Fib3J0Jyk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuX2dldEZpbGVJbnB1dEZpbGVzKGRhdGEuZmlsZUlucHV0KS5hbHdheXMoZnVuY3Rpb24gKGZpbGVzKSB7XG4gICAgICAgICAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBkZmQucmVqZWN0KCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEuZmlsZXMgPSBmaWxlcztcbiAgICAgICAgICAgIGpxWEhSID0gdGhhdC5fb25TZW5kKG51bGwsIGRhdGEpO1xuICAgICAgICAgICAganFYSFIudGhlbihcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcbiAgICAgICAgICAgICAgICBkZmQucmVzb2x2ZShyZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgIGRmZC5yZWplY3QoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fZW5oYW5jZVByb21pc2UocHJvbWlzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5maWxlcyA9ICQubWFrZUFycmF5KGRhdGEuZmlsZXMpO1xuICAgICAgICBpZiAoZGF0YS5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fb25TZW5kKG51bGwsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fZ2V0WEhSUHJvbWlzZShmYWxzZSwgZGF0YSAmJiBkYXRhLmNvbnRleHQpO1xuICAgIH1cbiAgfSk7XG59KTtcbiIsICIvKlxuICogalF1ZXJ5IElmcmFtZSBUcmFuc3BvcnQgUGx1Z2luXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9qUXVlcnktRmlsZS1VcGxvYWRcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKi9cblxuLyogZ2xvYmFsIGRlZmluZSwgcmVxdWlyZSAqL1xuXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIEFNRCBtb2R1bGU6XG4gICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIC8vIE5vZGUvQ29tbW9uSlM6XG4gICAgZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzOlxuICAgIGZhY3Rvcnkod2luZG93LmpRdWVyeSk7XG4gIH1cbn0pKGZ1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBIZWxwZXIgdmFyaWFibGUgdG8gY3JlYXRlIHVuaXF1ZSBuYW1lcyBmb3IgdGhlIHRyYW5zcG9ydCBpZnJhbWVzOlxuICB2YXIgY291bnRlciA9IDAsXG4gICAganNvbkFQSSA9ICQsXG4gICAganNvblBhcnNlID0gJ3BhcnNlSlNPTic7XG5cbiAgaWYgKCdKU09OJyBpbiB3aW5kb3cgJiYgJ3BhcnNlJyBpbiBKU09OKSB7XG4gICAganNvbkFQSSA9IEpTT047XG4gICAganNvblBhcnNlID0gJ3BhcnNlJztcbiAgfVxuXG4gIC8vIFRoZSBpZnJhbWUgdHJhbnNwb3J0IGFjY2VwdHMgZm91ciBhZGRpdGlvbmFsIG9wdGlvbnM6XG4gIC8vIG9wdGlvbnMuZmlsZUlucHV0OiBhIGpRdWVyeSBjb2xsZWN0aW9uIG9mIGZpbGUgaW5wdXQgZmllbGRzXG4gIC8vIG9wdGlvbnMucGFyYW1OYW1lOiB0aGUgcGFyYW1ldGVyIG5hbWUgZm9yIHRoZSBmaWxlIGZvcm0gZGF0YSxcbiAgLy8gIG92ZXJyaWRlcyB0aGUgbmFtZSBwcm9wZXJ0eSBvZiB0aGUgZmlsZSBpbnB1dCBmaWVsZChzKSxcbiAgLy8gIGNhbiBiZSBhIHN0cmluZyBvciBhbiBhcnJheSBvZiBzdHJpbmdzLlxuICAvLyBvcHRpb25zLmZvcm1EYXRhOiBhbiBhcnJheSBvZiBvYmplY3RzIHdpdGggbmFtZSBhbmQgdmFsdWUgcHJvcGVydGllcyxcbiAgLy8gIGVxdWl2YWxlbnQgdG8gdGhlIHJldHVybiBkYXRhIG9mIC5zZXJpYWxpemVBcnJheSgpLCBlLmcuOlxuICAvLyAgW3tuYW1lOiAnYScsIHZhbHVlOiAxfSwge25hbWU6ICdiJywgdmFsdWU6IDJ9XVxuICAvLyBvcHRpb25zLmluaXRpYWxJZnJhbWVTcmM6IHRoZSBVUkwgb2YgdGhlIGluaXRpYWwgaWZyYW1lIHNyYyxcbiAgLy8gIGJ5IGRlZmF1bHQgc2V0IHRvIFwiamF2YXNjcmlwdDpmYWxzZTtcIlxuICAkLmFqYXhUcmFuc3BvcnQoJ2lmcmFtZScsIGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuYXN5bmMpIHtcbiAgICAgIC8vIGphdmFzY3JpcHQ6ZmFsc2UgYXMgaW5pdGlhbCBpZnJhbWUgc3JjXG4gICAgICAvLyBwcmV2ZW50cyB3YXJuaW5nIHBvcHVwcyBvbiBIVFRQUyBpbiBJRTY6XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2NyaXB0LXVybFxuICAgICAgdmFyIGluaXRpYWxJZnJhbWVTcmMgPSBvcHRpb25zLmluaXRpYWxJZnJhbWVTcmMgfHwgJ2phdmFzY3JpcHQ6ZmFsc2U7JyxcbiAgICAgICAgZm9ybSxcbiAgICAgICAgaWZyYW1lLFxuICAgICAgICBhZGRQYXJhbUNoYXI7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzZW5kOiBmdW5jdGlvbiAoXywgY29tcGxldGVDYWxsYmFjaykge1xuICAgICAgICAgIGZvcm0gPSAkKCc8Zm9ybSBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj48L2Zvcm0+Jyk7XG4gICAgICAgICAgZm9ybS5hdHRyKCdhY2NlcHQtY2hhcnNldCcsIG9wdGlvbnMuZm9ybUFjY2VwdENoYXJzZXQpO1xuICAgICAgICAgIGFkZFBhcmFtQ2hhciA9IC9cXD8vLnRlc3Qob3B0aW9ucy51cmwpID8gJyYnIDogJz8nO1xuICAgICAgICAgIC8vIFhEb21haW5SZXF1ZXN0IG9ubHkgc3VwcG9ydHMgR0VUIGFuZCBQT1NUOlxuICAgICAgICAgIGlmIChvcHRpb25zLnR5cGUgPT09ICdERUxFVEUnKSB7XG4gICAgICAgICAgICBvcHRpb25zLnVybCA9IG9wdGlvbnMudXJsICsgYWRkUGFyYW1DaGFyICsgJ19tZXRob2Q9REVMRVRFJztcbiAgICAgICAgICAgIG9wdGlvbnMudHlwZSA9ICdQT1NUJztcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudHlwZSA9PT0gJ1BVVCcpIHtcbiAgICAgICAgICAgIG9wdGlvbnMudXJsID0gb3B0aW9ucy51cmwgKyBhZGRQYXJhbUNoYXIgKyAnX21ldGhvZD1QVVQnO1xuICAgICAgICAgICAgb3B0aW9ucy50eXBlID0gJ1BPU1QnO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50eXBlID09PSAnUEFUQ0gnKSB7XG4gICAgICAgICAgICBvcHRpb25zLnVybCA9IG9wdGlvbnMudXJsICsgYWRkUGFyYW1DaGFyICsgJ19tZXRob2Q9UEFUQ0gnO1xuICAgICAgICAgICAgb3B0aW9ucy50eXBlID0gJ1BPU1QnO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBJRSB2ZXJzaW9ucyBiZWxvdyBJRTggY2Fubm90IHNldCB0aGUgbmFtZSBwcm9wZXJ0eSBvZlxuICAgICAgICAgIC8vIGVsZW1lbnRzIHRoYXQgaGF2ZSBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIERPTSxcbiAgICAgICAgICAvLyBzbyB3ZSBzZXQgdGhlIG5hbWUgYWxvbmcgd2l0aCB0aGUgaWZyYW1lIEhUTUwgbWFya3VwOlxuICAgICAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgICAgICBpZnJhbWUgPSAkKFxuICAgICAgICAgICAgJzxpZnJhbWUgc3JjPVwiJyArXG4gICAgICAgICAgICAgIGluaXRpYWxJZnJhbWVTcmMgK1xuICAgICAgICAgICAgICAnXCIgbmFtZT1cImlmcmFtZS10cmFuc3BvcnQtJyArXG4gICAgICAgICAgICAgIGNvdW50ZXIgK1xuICAgICAgICAgICAgICAnXCI+PC9pZnJhbWU+J1xuICAgICAgICAgICkub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZmlsZUlucHV0Q2xvbmVzLFxuICAgICAgICAgICAgICBwYXJhbU5hbWVzID0gQXJyYXkuaXNBcnJheShvcHRpb25zLnBhcmFtTmFtZSlcbiAgICAgICAgICAgICAgICA/IG9wdGlvbnMucGFyYW1OYW1lXG4gICAgICAgICAgICAgICAgOiBbb3B0aW9ucy5wYXJhbU5hbWVdO1xuICAgICAgICAgICAgaWZyYW1lLm9mZignbG9hZCcpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgICAgICAgIC8vIFdyYXAgaW4gYSB0cnkvY2F0Y2ggYmxvY2sgdG8gY2F0Y2ggZXhjZXB0aW9ucyB0aHJvd25cbiAgICAgICAgICAgICAgLy8gd2hlbiB0cnlpbmcgdG8gYWNjZXNzIGNyb3NzLWRvbWFpbiBpZnJhbWUgY29udGVudHM6XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBpZnJhbWUuY29udGVudHMoKTtcbiAgICAgICAgICAgICAgICAvLyBHb29nbGUgQ2hyb21lIGFuZCBGaXJlZm94IGRvIG5vdCB0aHJvdyBhblxuICAgICAgICAgICAgICAgIC8vIGV4Y2VwdGlvbiB3aGVuIGNhbGxpbmcgaWZyYW1lLmNvbnRlbnRzKCkgb25cbiAgICAgICAgICAgICAgICAvLyBjcm9zcy1kb21haW4gcmVxdWVzdHMsIHNvIHdlIHVuaWZ5IHRoZSByZXNwb25zZTpcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmxlbmd0aCB8fCAhcmVzcG9uc2VbMF0uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gVGhlIGNvbXBsZXRlIGNhbGxiYWNrIHJldHVybnMgdGhlXG4gICAgICAgICAgICAgIC8vIGlmcmFtZSBjb250ZW50IGRvY3VtZW50IGFzIHJlc3BvbnNlIG9iamVjdDpcbiAgICAgICAgICAgICAgY29tcGxldGVDYWxsYmFjaygyMDAsICdzdWNjZXNzJywgeyBpZnJhbWU6IHJlc3BvbnNlIH0pO1xuICAgICAgICAgICAgICAvLyBGaXggZm9yIElFIGVuZGxlc3MgcHJvZ3Jlc3MgYmFyIGFjdGl2aXR5IGJ1Z1xuICAgICAgICAgICAgICAvLyAoaGFwcGVucyBvbiBmb3JtIHN1Ym1pdHMgdG8gaWZyYW1lIHRhcmdldHMpOlxuICAgICAgICAgICAgICAkKCc8aWZyYW1lIHNyYz1cIicgKyBpbml0aWFsSWZyYW1lU3JjICsgJ1wiPjwvaWZyYW1lPicpLmFwcGVuZFRvKFxuICAgICAgICAgICAgICAgIGZvcm1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92aW5nIHRoZSBmb3JtIGluIGEgc2V0VGltZW91dCBjYWxsXG4gICAgICAgICAgICAgICAgLy8gYWxsb3dzIENocm9tZSdzIGRldmVsb3BlciB0b29scyB0byBkaXNwbGF5XG4gICAgICAgICAgICAgICAgLy8gdGhlIHJlc3BvbnNlIHJlc3VsdFxuICAgICAgICAgICAgICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3JtXG4gICAgICAgICAgICAgIC5wcm9wKCd0YXJnZXQnLCBpZnJhbWUucHJvcCgnbmFtZScpKVxuICAgICAgICAgICAgICAucHJvcCgnYWN0aW9uJywgb3B0aW9ucy51cmwpXG4gICAgICAgICAgICAgIC5wcm9wKCdtZXRob2QnLCBvcHRpb25zLnR5cGUpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZm9ybURhdGEpIHtcbiAgICAgICAgICAgICAgJC5lYWNoKG9wdGlvbnMuZm9ybURhdGEsIGZ1bmN0aW9uIChpbmRleCwgZmllbGQpIHtcbiAgICAgICAgICAgICAgICAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiLz4nKVxuICAgICAgICAgICAgICAgICAgLnByb3AoJ25hbWUnLCBmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgLnZhbChmaWVsZC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhmb3JtKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIG9wdGlvbnMuZmlsZUlucHV0ICYmXG4gICAgICAgICAgICAgIG9wdGlvbnMuZmlsZUlucHV0Lmxlbmd0aCAmJlxuICAgICAgICAgICAgICBvcHRpb25zLnR5cGUgPT09ICdQT1NUJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGZpbGVJbnB1dENsb25lcyA9IG9wdGlvbnMuZmlsZUlucHV0LmNsb25lKCk7XG4gICAgICAgICAgICAgIC8vIEluc2VydCBhIGNsb25lIGZvciBlYWNoIGZpbGUgaW5wdXQgZmllbGQ6XG4gICAgICAgICAgICAgIG9wdGlvbnMuZmlsZUlucHV0LmFmdGVyKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWxlSW5wdXRDbG9uZXNbaW5kZXhdO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucGFyYW1OYW1lKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5maWxlSW5wdXQuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICQodGhpcykucHJvcCgnbmFtZScsIHBhcmFtTmFtZXNbaW5kZXhdIHx8IG9wdGlvbnMucGFyYW1OYW1lKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBBcHBlbmRpbmcgdGhlIGZpbGUgaW5wdXQgZmllbGRzIHRvIHRoZSBoaWRkZW4gZm9ybVxuICAgICAgICAgICAgICAvLyByZW1vdmVzIHRoZW0gZnJvbSB0aGVpciBvcmlnaW5hbCBsb2NhdGlvbjpcbiAgICAgICAgICAgICAgZm9ybVxuICAgICAgICAgICAgICAgIC5hcHBlbmQob3B0aW9ucy5maWxlSW5wdXQpXG4gICAgICAgICAgICAgICAgLnByb3AoJ2VuY3R5cGUnLCAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScpXG4gICAgICAgICAgICAgICAgLy8gZW5jdHlwZSBtdXN0IGJlIHNldCBhcyBlbmNvZGluZyBmb3IgSUU6XG4gICAgICAgICAgICAgICAgLnByb3AoJ2VuY29kaW5nJywgJ211bHRpcGFydC9mb3JtLWRhdGEnKTtcbiAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBIVE1MNSBmb3JtIGF0dHJpYnV0ZSBmcm9tIHRoZSBpbnB1dChzKTpcbiAgICAgICAgICAgICAgb3B0aW9ucy5maWxlSW5wdXQucmVtb3ZlQXR0cignZm9ybScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAvLyBTdWJtaXR0aW5nIHRoZSBmb3JtIGluIGEgc2V0VGltZW91dCBjYWxsIGZpeGVzIGFuIGlzc3VlIHdpdGhcbiAgICAgICAgICAgICAgLy8gU2FmYXJpIDEzIG5vdCB0cmlnZ2VyaW5nIHRoZSBpZnJhbWUgbG9hZCBldmVudCBhZnRlciByZXNldHRpbmdcbiAgICAgICAgICAgICAgLy8gdGhlIGxvYWQgZXZlbnQgaGFuZGxlciwgc2VlIGFsc286XG4gICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL2pRdWVyeS1GaWxlLVVwbG9hZC9pc3N1ZXMvMzYzM1xuICAgICAgICAgICAgICBmb3JtLnRyaWdnZXIoXCJzdWJtaXRcIik7XG4gICAgICAgICAgICAgIC8vIEluc2VydCB0aGUgZmlsZSBpbnB1dCBmaWVsZHMgYXQgdGhlaXIgb3JpZ2luYWwgbG9jYXRpb25cbiAgICAgICAgICAgICAgLy8gYnkgcmVwbGFjaW5nIHRoZSBjbG9uZXMgd2l0aCB0aGUgb3JpZ2luYWxzOlxuICAgICAgICAgICAgICBpZiAoZmlsZUlucHV0Q2xvbmVzICYmIGZpbGVJbnB1dENsb25lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZpbGVJbnB1dC5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBjbG9uZSA9ICQoZmlsZUlucHV0Q2xvbmVzW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBuYW1lIGFuZCBmb3JtIHByb3BlcnRpZXM6XG4gICAgICAgICAgICAgICAgICAkKGlucHV0KVxuICAgICAgICAgICAgICAgICAgICAucHJvcCgnbmFtZScsIGNsb25lLnByb3AoJ25hbWUnKSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2Zvcm0nLCBjbG9uZS5hdHRyKCdmb3JtJykpO1xuICAgICAgICAgICAgICAgICAgY2xvbmUucmVwbGFjZVdpdGgoaW5wdXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmb3JtLmFwcGVuZChpZnJhbWUpLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xuICAgICAgICB9LFxuICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChpZnJhbWUpIHtcbiAgICAgICAgICAgIC8vIGphdmFzY3JpcHQ6ZmFsc2UgYXMgaWZyYW1lIHNyYyBhYm9ydHMgdGhlIHJlcXVlc3RcbiAgICAgICAgICAgIC8vIGFuZCBwcmV2ZW50cyB3YXJuaW5nIHBvcHVwcyBvbiBIVFRQUyBpbiBJRTYuXG4gICAgICAgICAgICBpZnJhbWUub2ZmKCdsb2FkJykucHJvcCgnc3JjJywgaW5pdGlhbElmcmFtZVNyYyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmb3JtKSB7XG4gICAgICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFRoZSBpZnJhbWUgdHJhbnNwb3J0IHJldHVybnMgdGhlIGlmcmFtZSBjb250ZW50IGRvY3VtZW50IGFzIHJlc3BvbnNlLlxuICAvLyBUaGUgZm9sbG93aW5nIGFkZHMgY29udmVydGVycyBmcm9tIGlmcmFtZSB0byB0ZXh0LCBqc29uLCBodG1sLCB4bWxcbiAgLy8gYW5kIHNjcmlwdC5cbiAgLy8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgQ29udGVudC1UeXBlIGZvciBKU09OIHJlc3BvbnNlcyBoYXMgdG8gYmUgdGV4dC9wbGFpblxuICAvLyBvciB0ZXh0L2h0bWwsIGlmIHRoZSBicm93c2VyIGRvZXNuJ3QgaW5jbHVkZSBhcHBsaWNhdGlvbi9qc29uIGluIHRoZVxuICAvLyBBY2NlcHQgaGVhZGVyLCBlbHNlIElFIHdpbGwgc2hvdyBhIGRvd25sb2FkIGRpYWxvZy5cbiAgLy8gVGhlIENvbnRlbnQtVHlwZSBmb3IgWE1MIHJlc3BvbnNlcyBvbiB0aGUgb3RoZXIgaGFuZCBoYXMgdG8gYmUgYWx3YXlzXG4gIC8vIGFwcGxpY2F0aW9uL3htbCBvciB0ZXh0L3htbCwgc28gSUUgcHJvcGVybHkgcGFyc2VzIHRoZSBYTUwgcmVzcG9uc2UuXG4gIC8vIFNlZSBhbHNvXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL2pRdWVyeS1GaWxlLVVwbG9hZC93aWtpL1NldHVwI2NvbnRlbnQtdHlwZS1uZWdvdGlhdGlvblxuICAkLmFqYXhTZXR1cCh7XG4gICAgY29udmVydGVyczoge1xuICAgICAgJ2lmcmFtZSB0ZXh0JzogZnVuY3Rpb24gKGlmcmFtZSkge1xuICAgICAgICByZXR1cm4gaWZyYW1lICYmICQoaWZyYW1lWzBdLmJvZHkpLnRleHQoKTtcbiAgICAgIH0sXG4gICAgICAnaWZyYW1lIGpzb24nOiBmdW5jdGlvbiAoaWZyYW1lKSB7XG4gICAgICAgIHJldHVybiBpZnJhbWUgJiYganNvbkFQSVtqc29uUGFyc2VdKCQoaWZyYW1lWzBdLmJvZHkpLnRleHQoKSk7XG4gICAgICB9LFxuICAgICAgJ2lmcmFtZSBodG1sJzogZnVuY3Rpb24gKGlmcmFtZSkge1xuICAgICAgICByZXR1cm4gaWZyYW1lICYmICQoaWZyYW1lWzBdLmJvZHkpLmh0bWwoKTtcbiAgICAgIH0sXG4gICAgICAnaWZyYW1lIHhtbCc6IGZ1bmN0aW9uIChpZnJhbWUpIHtcbiAgICAgICAgdmFyIHhtbERvYyA9IGlmcmFtZSAmJiBpZnJhbWVbMF07XG4gICAgICAgIHJldHVybiB4bWxEb2MgJiYgJC5pc1hNTERvYyh4bWxEb2MpXG4gICAgICAgICAgPyB4bWxEb2NcbiAgICAgICAgICA6ICQucGFyc2VYTUwoXG4gICAgICAgICAgICAgICh4bWxEb2MuWE1MRG9jdW1lbnQgJiYgeG1sRG9jLlhNTERvY3VtZW50LnhtbCkgfHxcbiAgICAgICAgICAgICAgICAkKHhtbERvYy5ib2R5KS5odG1sKClcbiAgICAgICAgICAgICk7XG4gICAgICB9LFxuICAgICAgJ2lmcmFtZSBzY3JpcHQnOiBmdW5jdGlvbiAoaWZyYW1lKSB7XG4gICAgICAgIHJldHVybiBpZnJhbWUgJiYgJC5nbG9iYWxFdmFsKCQoaWZyYW1lWzBdLmJvZHkpLnRleHQoKSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7QUFBQTtBQUFBO0FBUUEsS0FBQyxTQUFVLFNBQVM7QUFDbEI7QUFDQSxVQUFJLE9BQU8sV0FBVyxjQUFjLE9BQU8sS0FBSztBQUU5QyxlQUFPLENBQUMsUUFBUSxHQUFHLE9BQU87QUFBQSxNQUM1QixXQUFXLE9BQU8sWUFBWSxVQUFVO0FBRXRDLGdCQUFRLHdDQUFpQjtBQUFBLE1BQzNCLE9BQU87QUFFTCxnQkFBUSxPQUFPLE1BQU07QUFBQSxNQUN2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

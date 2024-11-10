import {
  init_jquery_module,
  jquery_module_default
} from "./chunk-AGY32TFX.js";
import {
  DeferredWidget
} from "./chunk-HGD6GSK5.js";
import {
  __commonJS,
  __toESM
} from "./chunk-YRJTWU7C.js";

// ../../../../../../.yarn/berry/cache/cropperjs-npm-1.6.2-87d2393443-10c0.zip/node_modules/cropperjs/dist/cropper.js
var require_cropper = __commonJS({
  "../../../../../../.yarn/berry/cache/cropperjs-npm-1.6.2-87d2393443-10c0.zip/node_modules/cropperjs/dist/cropper.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Cropper = factory());
    })(exports, function() {
      "use strict";
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r2) {
            return Object.getOwnPropertyDescriptor(e, r2).enumerable;
          })), t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread2(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
            _defineProperty(e, r2, t[r2]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
            Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
          });
        }
        return e;
      }
      function _toPrimitive(t, r) {
        if ("object" != typeof t || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var i = e.call(t, r || "default");
          if ("object" != typeof i) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
      }
      function _toPropertyKey(t) {
        var i = _toPrimitive(t, "string");
        return "symbol" == typeof i ? i : i + "";
      }
      function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, _typeof(o);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var IS_BROWSER = typeof window !== "undefined" && typeof window.document !== "undefined";
      var WINDOW = IS_BROWSER ? window : {};
      var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? "ontouchstart" in WINDOW.document.documentElement : false;
      var HAS_POINTER_EVENT = IS_BROWSER ? "PointerEvent" in WINDOW : false;
      var NAMESPACE = "cropper";
      var ACTION_ALL = "all";
      var ACTION_CROP = "crop";
      var ACTION_MOVE = "move";
      var ACTION_ZOOM = "zoom";
      var ACTION_EAST = "e";
      var ACTION_WEST = "w";
      var ACTION_SOUTH = "s";
      var ACTION_NORTH = "n";
      var ACTION_NORTH_EAST = "ne";
      var ACTION_NORTH_WEST = "nw";
      var ACTION_SOUTH_EAST = "se";
      var ACTION_SOUTH_WEST = "sw";
      var CLASS_CROP = "".concat(NAMESPACE, "-crop");
      var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
      var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
      var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
      var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
      var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
      var CLASS_MOVE = "".concat(NAMESPACE, "-move");
      var DATA_ACTION = "".concat(NAMESPACE, "Action");
      var DATA_PREVIEW = "".concat(NAMESPACE, "Preview");
      var DRAG_MODE_CROP = "crop";
      var DRAG_MODE_MOVE = "move";
      var DRAG_MODE_NONE = "none";
      var EVENT_CROP = "crop";
      var EVENT_CROP_END = "cropend";
      var EVENT_CROP_MOVE = "cropmove";
      var EVENT_CROP_START = "cropstart";
      var EVENT_DBLCLICK = "dblclick";
      var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? "touchstart" : "mousedown";
      var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? "touchmove" : "mousemove";
      var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? "touchend touchcancel" : "mouseup";
      var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? "pointerdown" : EVENT_TOUCH_START;
      var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? "pointermove" : EVENT_TOUCH_MOVE;
      var EVENT_POINTER_UP = HAS_POINTER_EVENT ? "pointerup pointercancel" : EVENT_TOUCH_END;
      var EVENT_READY = "ready";
      var EVENT_RESIZE = "resize";
      var EVENT_WHEEL = "wheel";
      var EVENT_ZOOM = "zoom";
      var MIME_TYPE_JPEG = "image/jpeg";
      var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
      var REGEXP_DATA_URL = /^data:/;
      var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
      var REGEXP_TAG_NAME = /^img|canvas$/i;
      var MIN_CONTAINER_WIDTH = 200;
      var MIN_CONTAINER_HEIGHT = 100;
      var DEFAULTS = {
        // Define the view mode of the cropper
        viewMode: 0,
        // 0, 1, 2, 3
        // Define the dragging mode of the cropper
        dragMode: DRAG_MODE_CROP,
        // 'crop', 'move' or 'none'
        // Define the initial aspect ratio of the crop box
        initialAspectRatio: NaN,
        // Define the aspect ratio of the crop box
        aspectRatio: NaN,
        // An object with the previous cropping result data
        data: null,
        // A selector for adding extra containers to preview
        preview: "",
        // Re-render the cropper when resize the window
        responsive: true,
        // Restore the cropped area after resize the window
        restore: true,
        // Check if the current image is a cross-origin image
        checkCrossOrigin: true,
        // Check the current image's Exif Orientation information
        checkOrientation: true,
        // Show the black modal
        modal: true,
        // Show the dashed lines for guiding
        guides: true,
        // Show the center indicator for guiding
        center: true,
        // Show the white modal to highlight the crop box
        highlight: true,
        // Show the grid background
        background: true,
        // Enable to crop the image automatically when initialize
        autoCrop: true,
        // Define the percentage of automatic cropping area when initializes
        autoCropArea: 0.8,
        // Enable to move the image
        movable: true,
        // Enable to rotate the image
        rotatable: true,
        // Enable to scale the image
        scalable: true,
        // Enable to zoom the image
        zoomable: true,
        // Enable to zoom the image by dragging touch
        zoomOnTouch: true,
        // Enable to zoom the image by wheeling mouse
        zoomOnWheel: true,
        // Define zoom ratio when zoom the image by wheeling mouse
        wheelZoomRatio: 0.1,
        // Enable to move the crop box
        cropBoxMovable: true,
        // Enable to resize the crop box
        cropBoxResizable: true,
        // Toggle drag mode between "crop" and "move" when click twice on the cropper
        toggleDragModeOnDblclick: true,
        // Size limitation
        minCanvasWidth: 0,
        minCanvasHeight: 0,
        minCropBoxWidth: 0,
        minCropBoxHeight: 0,
        minContainerWidth: MIN_CONTAINER_WIDTH,
        minContainerHeight: MIN_CONTAINER_HEIGHT,
        // Shortcuts of events
        ready: null,
        cropstart: null,
        cropmove: null,
        cropend: null,
        crop: null,
        zoom: null
      };
      var TEMPLATE = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';
      var isNaN = Number.isNaN || WINDOW.isNaN;
      function isNumber(value) {
        return typeof value === "number" && !isNaN(value);
      }
      var isPositiveNumber = function isPositiveNumber2(value) {
        return value > 0 && value < Infinity;
      };
      function isUndefined(value) {
        return typeof value === "undefined";
      }
      function isObject(value) {
        return _typeof(value) === "object" && value !== null;
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      function isPlainObject(value) {
        if (!isObject(value)) {
          return false;
        }
        try {
          var _constructor = value.constructor;
          var prototype = _constructor.prototype;
          return _constructor && prototype && hasOwnProperty.call(prototype, "isPrototypeOf");
        } catch (error) {
          return false;
        }
      }
      function isFunction(value) {
        return typeof value === "function";
      }
      var slice = Array.prototype.slice;
      function toArray(value) {
        return Array.from ? Array.from(value) : slice.call(value);
      }
      function forEach(data, callback) {
        if (data && isFunction(callback)) {
          if (Array.isArray(data) || isNumber(data.length)) {
            toArray(data).forEach(function(value, key) {
              callback.call(data, value, key, data);
            });
          } else if (isObject(data)) {
            Object.keys(data).forEach(function(key) {
              callback.call(data, data[key], key, data);
            });
          }
        }
        return data;
      }
      var assign = Object.assign || function assign2(target) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        if (isObject(target) && args.length > 0) {
          args.forEach(function(arg) {
            if (isObject(arg)) {
              Object.keys(arg).forEach(function(key) {
                target[key] = arg[key];
              });
            }
          });
        }
        return target;
      };
      var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
      function normalizeDecimalNumber(value) {
        var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
        return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
      }
      var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
      function setStyle(element, styles) {
        var style = element.style;
        forEach(styles, function(value, property) {
          if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
            value = "".concat(value, "px");
          }
          style[property] = value;
        });
      }
      function hasClass(element, value) {
        return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
      }
      function addClass(element, value) {
        if (!value) {
          return;
        }
        if (isNumber(element.length)) {
          forEach(element, function(elem) {
            addClass(elem, value);
          });
          return;
        }
        if (element.classList) {
          element.classList.add(value);
          return;
        }
        var className = element.className.trim();
        if (!className) {
          element.className = value;
        } else if (className.indexOf(value) < 0) {
          element.className = "".concat(className, " ").concat(value);
        }
      }
      function removeClass(element, value) {
        if (!value) {
          return;
        }
        if (isNumber(element.length)) {
          forEach(element, function(elem) {
            removeClass(elem, value);
          });
          return;
        }
        if (element.classList) {
          element.classList.remove(value);
          return;
        }
        if (element.className.indexOf(value) >= 0) {
          element.className = element.className.replace(value, "");
        }
      }
      function toggleClass(element, value, added) {
        if (!value) {
          return;
        }
        if (isNumber(element.length)) {
          forEach(element, function(elem) {
            toggleClass(elem, value, added);
          });
          return;
        }
        if (added) {
          addClass(element, value);
        } else {
          removeClass(element, value);
        }
      }
      var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
      function toParamCase(value) {
        return value.replace(REGEXP_CAMEL_CASE, "$1-$2").toLowerCase();
      }
      function getData(element, name) {
        if (isObject(element[name])) {
          return element[name];
        }
        if (element.dataset) {
          return element.dataset[name];
        }
        return element.getAttribute("data-".concat(toParamCase(name)));
      }
      function setData(element, name, data) {
        if (isObject(data)) {
          element[name] = data;
        } else if (element.dataset) {
          element.dataset[name] = data;
        } else {
          element.setAttribute("data-".concat(toParamCase(name)), data);
        }
      }
      function removeData(element, name) {
        if (isObject(element[name])) {
          try {
            delete element[name];
          } catch (error) {
            element[name] = void 0;
          }
        } else if (element.dataset) {
          try {
            delete element.dataset[name];
          } catch (error) {
            element.dataset[name] = void 0;
          }
        } else {
          element.removeAttribute("data-".concat(toParamCase(name)));
        }
      }
      var REGEXP_SPACES = /\s\s*/;
      var onceSupported = function() {
        var supported = false;
        if (IS_BROWSER) {
          var once = false;
          var listener = function listener2() {
          };
          var options = Object.defineProperty({}, "once", {
            get: function get() {
              supported = true;
              return once;
            },
            /**
             * This setter can fix a `TypeError` in strict mode
             * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
             * @param {boolean} value - The value to set
             */
            set: function set(value) {
              once = value;
            }
          });
          WINDOW.addEventListener("test", listener, options);
          WINDOW.removeEventListener("test", listener, options);
        }
        return supported;
      }();
      function removeListener(element, type, listener) {
        var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        var handler = listener;
        type.trim().split(REGEXP_SPACES).forEach(function(event) {
          if (!onceSupported) {
            var listeners = element.listeners;
            if (listeners && listeners[event] && listeners[event][listener]) {
              handler = listeners[event][listener];
              delete listeners[event][listener];
              if (Object.keys(listeners[event]).length === 0) {
                delete listeners[event];
              }
              if (Object.keys(listeners).length === 0) {
                delete element.listeners;
              }
            }
          }
          element.removeEventListener(event, handler, options);
        });
      }
      function addListener(element, type, listener) {
        var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        var _handler = listener;
        type.trim().split(REGEXP_SPACES).forEach(function(event) {
          if (options.once && !onceSupported) {
            var _element$listeners = element.listeners, listeners = _element$listeners === void 0 ? {} : _element$listeners;
            _handler = function handler() {
              delete listeners[event][listener];
              element.removeEventListener(event, _handler, options);
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }
              listener.apply(element, args);
            };
            if (!listeners[event]) {
              listeners[event] = {};
            }
            if (listeners[event][listener]) {
              element.removeEventListener(event, listeners[event][listener], options);
            }
            listeners[event][listener] = _handler;
            element.listeners = listeners;
          }
          element.addEventListener(event, _handler, options);
        });
      }
      function dispatchEvent(element, type, data) {
        var event;
        if (isFunction(Event) && isFunction(CustomEvent)) {
          event = new CustomEvent(type, {
            detail: data,
            bubbles: true,
            cancelable: true
          });
        } else {
          event = document.createEvent("CustomEvent");
          event.initCustomEvent(type, true, true, data);
        }
        return element.dispatchEvent(event);
      }
      function getOffset(element) {
        var box = element.getBoundingClientRect();
        return {
          left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
          top: box.top + (window.pageYOffset - document.documentElement.clientTop)
        };
      }
      var location = WINDOW.location;
      var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
      function isCrossOriginURL(url) {
        var parts = url.match(REGEXP_ORIGINS);
        return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
      }
      function addTimestamp(url) {
        var timestamp = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
        return url + (url.indexOf("?") === -1 ? "?" : "&") + timestamp;
      }
      function getTransforms(_ref) {
        var rotate = _ref.rotate, scaleX = _ref.scaleX, scaleY = _ref.scaleY, translateX = _ref.translateX, translateY = _ref.translateY;
        var values = [];
        if (isNumber(translateX) && translateX !== 0) {
          values.push("translateX(".concat(translateX, "px)"));
        }
        if (isNumber(translateY) && translateY !== 0) {
          values.push("translateY(".concat(translateY, "px)"));
        }
        if (isNumber(rotate) && rotate !== 0) {
          values.push("rotate(".concat(rotate, "deg)"));
        }
        if (isNumber(scaleX) && scaleX !== 1) {
          values.push("scaleX(".concat(scaleX, ")"));
        }
        if (isNumber(scaleY) && scaleY !== 1) {
          values.push("scaleY(".concat(scaleY, ")"));
        }
        var transform = values.length ? values.join(" ") : "none";
        return {
          WebkitTransform: transform,
          msTransform: transform,
          transform
        };
      }
      function getMaxZoomRatio(pointers) {
        var pointers2 = _objectSpread2({}, pointers);
        var maxRatio = 0;
        forEach(pointers, function(pointer, pointerId) {
          delete pointers2[pointerId];
          forEach(pointers2, function(pointer2) {
            var x1 = Math.abs(pointer.startX - pointer2.startX);
            var y1 = Math.abs(pointer.startY - pointer2.startY);
            var x2 = Math.abs(pointer.endX - pointer2.endX);
            var y2 = Math.abs(pointer.endY - pointer2.endY);
            var z1 = Math.sqrt(x1 * x1 + y1 * y1);
            var z2 = Math.sqrt(x2 * x2 + y2 * y2);
            var ratio = (z2 - z1) / z1;
            if (Math.abs(ratio) > Math.abs(maxRatio)) {
              maxRatio = ratio;
            }
          });
        });
        return maxRatio;
      }
      function getPointer(_ref2, endOnly) {
        var pageX = _ref2.pageX, pageY = _ref2.pageY;
        var end = {
          endX: pageX,
          endY: pageY
        };
        return endOnly ? end : _objectSpread2({
          startX: pageX,
          startY: pageY
        }, end);
      }
      function getPointersCenter(pointers) {
        var pageX = 0;
        var pageY = 0;
        var count = 0;
        forEach(pointers, function(_ref3) {
          var startX = _ref3.startX, startY = _ref3.startY;
          pageX += startX;
          pageY += startY;
          count += 1;
        });
        pageX /= count;
        pageY /= count;
        return {
          pageX,
          pageY
        };
      }
      function getAdjustedSizes(_ref4) {
        var aspectRatio = _ref4.aspectRatio, height = _ref4.height, width = _ref4.width;
        var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain";
        var isValidWidth = isPositiveNumber(width);
        var isValidHeight = isPositiveNumber(height);
        if (isValidWidth && isValidHeight) {
          var adjustedWidth = height * aspectRatio;
          if (type === "contain" && adjustedWidth > width || type === "cover" && adjustedWidth < width) {
            height = width / aspectRatio;
          } else {
            width = height * aspectRatio;
          }
        } else if (isValidWidth) {
          height = width / aspectRatio;
        } else if (isValidHeight) {
          width = height * aspectRatio;
        }
        return {
          width,
          height
        };
      }
      function getRotatedSizes(_ref5) {
        var width = _ref5.width, height = _ref5.height, degree = _ref5.degree;
        degree = Math.abs(degree) % 180;
        if (degree === 90) {
          return {
            width: height,
            height: width
          };
        }
        var arc = degree % 90 * Math.PI / 180;
        var sinArc = Math.sin(arc);
        var cosArc = Math.cos(arc);
        var newWidth = width * cosArc + height * sinArc;
        var newHeight = width * sinArc + height * cosArc;
        return degree > 90 ? {
          width: newHeight,
          height: newWidth
        } : {
          width: newWidth,
          height: newHeight
        };
      }
      function getSourceCanvas(image, _ref6, _ref7, _ref8) {
        var imageAspectRatio = _ref6.aspectRatio, imageNaturalWidth = _ref6.naturalWidth, imageNaturalHeight = _ref6.naturalHeight, _ref6$rotate = _ref6.rotate, rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate, _ref6$scaleX = _ref6.scaleX, scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX, _ref6$scaleY = _ref6.scaleY, scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
        var aspectRatio = _ref7.aspectRatio, naturalWidth = _ref7.naturalWidth, naturalHeight = _ref7.naturalHeight;
        var _ref8$fillColor = _ref8.fillColor, fillColor = _ref8$fillColor === void 0 ? "transparent" : _ref8$fillColor, _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled, imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE, _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality, imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? "low" : _ref8$imageSmoothingQ, _ref8$maxWidth = _ref8.maxWidth, maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth, _ref8$maxHeight = _ref8.maxHeight, maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight, _ref8$minWidth = _ref8.minWidth, minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth, _ref8$minHeight = _ref8.minHeight, minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        var maxSizes = getAdjustedSizes({
          aspectRatio,
          width: maxWidth,
          height: maxHeight
        });
        var minSizes = getAdjustedSizes({
          aspectRatio,
          width: minWidth,
          height: minHeight
        }, "cover");
        var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
        var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight));
        var destMaxSizes = getAdjustedSizes({
          aspectRatio: imageAspectRatio,
          width: maxWidth,
          height: maxHeight
        });
        var destMinSizes = getAdjustedSizes({
          aspectRatio: imageAspectRatio,
          width: minWidth,
          height: minHeight
        }, "cover");
        var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
        var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
        var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
        canvas.width = normalizeDecimalNumber(width);
        canvas.height = normalizeDecimalNumber(height);
        context.fillStyle = fillColor;
        context.fillRect(0, 0, width, height);
        context.save();
        context.translate(width / 2, height / 2);
        context.rotate(rotate * Math.PI / 180);
        context.scale(scaleX, scaleY);
        context.imageSmoothingEnabled = imageSmoothingEnabled;
        context.imageSmoothingQuality = imageSmoothingQuality;
        context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function(param) {
          return Math.floor(normalizeDecimalNumber(param));
        }))));
        context.restore();
        return canvas;
      }
      var fromCharCode = String.fromCharCode;
      function getStringFromCharCode(dataView, start, length) {
        var str = "";
        length += start;
        for (var i = start; i < length; i += 1) {
          str += fromCharCode(dataView.getUint8(i));
        }
        return str;
      }
      var REGEXP_DATA_URL_HEAD = /^data:.*,/;
      function dataURLToArrayBuffer(dataURL) {
        var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, "");
        var binary = atob(base64);
        var arrayBuffer = new ArrayBuffer(binary.length);
        var uint8 = new Uint8Array(arrayBuffer);
        forEach(uint8, function(value, i) {
          uint8[i] = binary.charCodeAt(i);
        });
        return arrayBuffer;
      }
      function arrayBufferToDataURL(arrayBuffer, mimeType) {
        var chunks = [];
        var chunkSize = 8192;
        var uint8 = new Uint8Array(arrayBuffer);
        while (uint8.length > 0) {
          chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
          uint8 = uint8.subarray(chunkSize);
        }
        return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join("")));
      }
      function resetAndGetOrientation(arrayBuffer) {
        var dataView = new DataView(arrayBuffer);
        var orientation;
        try {
          var littleEndian;
          var app1Start;
          var ifdStart;
          if (dataView.getUint8(0) === 255 && dataView.getUint8(1) === 216) {
            var length = dataView.byteLength;
            var offset = 2;
            while (offset + 1 < length) {
              if (dataView.getUint8(offset) === 255 && dataView.getUint8(offset + 1) === 225) {
                app1Start = offset;
                break;
              }
              offset += 1;
            }
          }
          if (app1Start) {
            var exifIDCode = app1Start + 4;
            var tiffOffset = app1Start + 10;
            if (getStringFromCharCode(dataView, exifIDCode, 4) === "Exif") {
              var endianness = dataView.getUint16(tiffOffset);
              littleEndian = endianness === 18761;
              if (littleEndian || endianness === 19789) {
                if (dataView.getUint16(tiffOffset + 2, littleEndian) === 42) {
                  var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
                  if (firstIFDOffset >= 8) {
                    ifdStart = tiffOffset + firstIFDOffset;
                  }
                }
              }
            }
          }
          if (ifdStart) {
            var _length = dataView.getUint16(ifdStart, littleEndian);
            var _offset;
            var i;
            for (i = 0; i < _length; i += 1) {
              _offset = ifdStart + i * 12 + 2;
              if (dataView.getUint16(_offset, littleEndian) === 274) {
                _offset += 8;
                orientation = dataView.getUint16(_offset, littleEndian);
                dataView.setUint16(_offset, 1, littleEndian);
                break;
              }
            }
          }
        } catch (error) {
          orientation = 1;
        }
        return orientation;
      }
      function parseOrientation(orientation) {
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;
        switch (orientation) {
          // Flip horizontal
          case 2:
            scaleX = -1;
            break;
          // Rotate left 180°
          case 3:
            rotate = -180;
            break;
          // Flip vertical
          case 4:
            scaleY = -1;
            break;
          // Flip vertical and rotate right 90°
          case 5:
            rotate = 90;
            scaleY = -1;
            break;
          // Rotate right 90°
          case 6:
            rotate = 90;
            break;
          // Flip horizontal and rotate right 90°
          case 7:
            rotate = 90;
            scaleX = -1;
            break;
          // Rotate left 90°
          case 8:
            rotate = -90;
            break;
        }
        return {
          rotate,
          scaleX,
          scaleY
        };
      }
      var render = {
        render: function render2() {
          this.initContainer();
          this.initCanvas();
          this.initCropBox();
          this.renderCanvas();
          if (this.cropped) {
            this.renderCropBox();
          }
        },
        initContainer: function initContainer() {
          var element = this.element, options = this.options, container = this.container, cropper = this.cropper;
          var minWidth = Number(options.minContainerWidth);
          var minHeight = Number(options.minContainerHeight);
          addClass(cropper, CLASS_HIDDEN);
          removeClass(element, CLASS_HIDDEN);
          var containerData = {
            width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
            height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
          };
          this.containerData = containerData;
          setStyle(cropper, {
            width: containerData.width,
            height: containerData.height
          });
          addClass(element, CLASS_HIDDEN);
          removeClass(cropper, CLASS_HIDDEN);
        },
        // Canvas (image wrapper)
        initCanvas: function initCanvas() {
          var containerData = this.containerData, imageData = this.imageData;
          var viewMode = this.options.viewMode;
          var rotated = Math.abs(imageData.rotate) % 180 === 90;
          var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
          var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
          var aspectRatio = naturalWidth / naturalHeight;
          var canvasWidth = containerData.width;
          var canvasHeight = containerData.height;
          if (containerData.height * aspectRatio > containerData.width) {
            if (viewMode === 3) {
              canvasWidth = containerData.height * aspectRatio;
            } else {
              canvasHeight = containerData.width / aspectRatio;
            }
          } else if (viewMode === 3) {
            canvasHeight = containerData.width / aspectRatio;
          } else {
            canvasWidth = containerData.height * aspectRatio;
          }
          var canvasData = {
            aspectRatio,
            naturalWidth,
            naturalHeight,
            width: canvasWidth,
            height: canvasHeight
          };
          this.canvasData = canvasData;
          this.limited = viewMode === 1 || viewMode === 2;
          this.limitCanvas(true, true);
          canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
          canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
          canvasData.left = (containerData.width - canvasData.width) / 2;
          canvasData.top = (containerData.height - canvasData.height) / 2;
          canvasData.oldLeft = canvasData.left;
          canvasData.oldTop = canvasData.top;
          this.initialCanvasData = assign({}, canvasData);
        },
        limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
          var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
          var viewMode = options.viewMode;
          var aspectRatio = canvasData.aspectRatio;
          var cropped = this.cropped && cropBoxData;
          if (sizeLimited) {
            var minCanvasWidth = Number(options.minCanvasWidth) || 0;
            var minCanvasHeight = Number(options.minCanvasHeight) || 0;
            if (viewMode > 1) {
              minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
              minCanvasHeight = Math.max(minCanvasHeight, containerData.height);
              if (viewMode === 3) {
                if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                  minCanvasWidth = minCanvasHeight * aspectRatio;
                } else {
                  minCanvasHeight = minCanvasWidth / aspectRatio;
                }
              }
            } else if (viewMode > 0) {
              if (minCanvasWidth) {
                minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
              } else if (minCanvasHeight) {
                minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
              } else if (cropped) {
                minCanvasWidth = cropBoxData.width;
                minCanvasHeight = cropBoxData.height;
                if (minCanvasHeight * aspectRatio > minCanvasWidth) {
                  minCanvasWidth = minCanvasHeight * aspectRatio;
                } else {
                  minCanvasHeight = minCanvasWidth / aspectRatio;
                }
              }
            }
            var _getAdjustedSizes = getAdjustedSizes({
              aspectRatio,
              width: minCanvasWidth,
              height: minCanvasHeight
            });
            minCanvasWidth = _getAdjustedSizes.width;
            minCanvasHeight = _getAdjustedSizes.height;
            canvasData.minWidth = minCanvasWidth;
            canvasData.minHeight = minCanvasHeight;
            canvasData.maxWidth = Infinity;
            canvasData.maxHeight = Infinity;
          }
          if (positionLimited) {
            if (viewMode > (cropped ? 0 : 1)) {
              var newCanvasLeft = containerData.width - canvasData.width;
              var newCanvasTop = containerData.height - canvasData.height;
              canvasData.minLeft = Math.min(0, newCanvasLeft);
              canvasData.minTop = Math.min(0, newCanvasTop);
              canvasData.maxLeft = Math.max(0, newCanvasLeft);
              canvasData.maxTop = Math.max(0, newCanvasTop);
              if (cropped && this.limited) {
                canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
                canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
                canvasData.maxLeft = cropBoxData.left;
                canvasData.maxTop = cropBoxData.top;
                if (viewMode === 2) {
                  if (canvasData.width >= containerData.width) {
                    canvasData.minLeft = Math.min(0, newCanvasLeft);
                    canvasData.maxLeft = Math.max(0, newCanvasLeft);
                  }
                  if (canvasData.height >= containerData.height) {
                    canvasData.minTop = Math.min(0, newCanvasTop);
                    canvasData.maxTop = Math.max(0, newCanvasTop);
                  }
                }
              }
            } else {
              canvasData.minLeft = -canvasData.width;
              canvasData.minTop = -canvasData.height;
              canvasData.maxLeft = containerData.width;
              canvasData.maxTop = containerData.height;
            }
          }
        },
        renderCanvas: function renderCanvas(changed, transformed) {
          var canvasData = this.canvasData, imageData = this.imageData;
          if (transformed) {
            var _getRotatedSizes = getRotatedSizes({
              width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
              height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
              degree: imageData.rotate || 0
            }), naturalWidth = _getRotatedSizes.width, naturalHeight = _getRotatedSizes.height;
            var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
            var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
            canvasData.left -= (width - canvasData.width) / 2;
            canvasData.top -= (height - canvasData.height) / 2;
            canvasData.width = width;
            canvasData.height = height;
            canvasData.aspectRatio = naturalWidth / naturalHeight;
            canvasData.naturalWidth = naturalWidth;
            canvasData.naturalHeight = naturalHeight;
            this.limitCanvas(true, false);
          }
          if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
            canvasData.left = canvasData.oldLeft;
          }
          if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
            canvasData.top = canvasData.oldTop;
          }
          canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
          canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
          this.limitCanvas(false, true);
          canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
          canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
          canvasData.oldLeft = canvasData.left;
          canvasData.oldTop = canvasData.top;
          setStyle(this.canvas, assign({
            width: canvasData.width,
            height: canvasData.height
          }, getTransforms({
            translateX: canvasData.left,
            translateY: canvasData.top
          })));
          this.renderImage(changed);
          if (this.cropped && this.limited) {
            this.limitCropBox(true, true);
          }
        },
        renderImage: function renderImage(changed) {
          var canvasData = this.canvasData, imageData = this.imageData;
          var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
          var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
          assign(imageData, {
            width,
            height,
            left: (canvasData.width - width) / 2,
            top: (canvasData.height - height) / 2
          });
          setStyle(this.image, assign({
            width: imageData.width,
            height: imageData.height
          }, getTransforms(assign({
            translateX: imageData.left,
            translateY: imageData.top
          }, imageData))));
          if (changed) {
            this.output();
          }
        },
        initCropBox: function initCropBox() {
          var options = this.options, canvasData = this.canvasData;
          var aspectRatio = options.aspectRatio || options.initialAspectRatio;
          var autoCropArea = Number(options.autoCropArea) || 0.8;
          var cropBoxData = {
            width: canvasData.width,
            height: canvasData.height
          };
          if (aspectRatio) {
            if (canvasData.height * aspectRatio > canvasData.width) {
              cropBoxData.height = cropBoxData.width / aspectRatio;
            } else {
              cropBoxData.width = cropBoxData.height * aspectRatio;
            }
          }
          this.cropBoxData = cropBoxData;
          this.limitCropBox(true, true);
          cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
          cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
          cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
          cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
          cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
          cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
          cropBoxData.oldLeft = cropBoxData.left;
          cropBoxData.oldTop = cropBoxData.top;
          this.initialCropBoxData = assign({}, cropBoxData);
        },
        limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
          var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData, limited = this.limited;
          var aspectRatio = options.aspectRatio;
          if (sizeLimited) {
            var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
            var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
            var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
            var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height;
            minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
            minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);
            if (aspectRatio) {
              if (minCropBoxWidth && minCropBoxHeight) {
                if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
                  minCropBoxHeight = minCropBoxWidth / aspectRatio;
                } else {
                  minCropBoxWidth = minCropBoxHeight * aspectRatio;
                }
              } else if (minCropBoxWidth) {
                minCropBoxHeight = minCropBoxWidth / aspectRatio;
              } else if (minCropBoxHeight) {
                minCropBoxWidth = minCropBoxHeight * aspectRatio;
              }
              if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
                maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
              } else {
                maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
              }
            }
            cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
            cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
            cropBoxData.maxWidth = maxCropBoxWidth;
            cropBoxData.maxHeight = maxCropBoxHeight;
          }
          if (positionLimited) {
            if (limited) {
              cropBoxData.minLeft = Math.max(0, canvasData.left);
              cropBoxData.minTop = Math.max(0, canvasData.top);
              cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
              cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
            } else {
              cropBoxData.minLeft = 0;
              cropBoxData.minTop = 0;
              cropBoxData.maxLeft = containerData.width - cropBoxData.width;
              cropBoxData.maxTop = containerData.height - cropBoxData.height;
            }
          }
        },
        renderCropBox: function renderCropBox() {
          var options = this.options, containerData = this.containerData, cropBoxData = this.cropBoxData;
          if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
            cropBoxData.left = cropBoxData.oldLeft;
          }
          if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
            cropBoxData.top = cropBoxData.oldTop;
          }
          cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
          cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
          this.limitCropBox(false, true);
          cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
          cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
          cropBoxData.oldLeft = cropBoxData.left;
          cropBoxData.oldTop = cropBoxData.top;
          if (options.movable && options.cropBoxMovable) {
            setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
          }
          setStyle(this.cropBox, assign({
            width: cropBoxData.width,
            height: cropBoxData.height
          }, getTransforms({
            translateX: cropBoxData.left,
            translateY: cropBoxData.top
          })));
          if (this.cropped && this.limited) {
            this.limitCanvas(true, true);
          }
          if (!this.disabled) {
            this.output();
          }
        },
        output: function output() {
          this.preview();
          dispatchEvent(this.element, EVENT_CROP, this.getData());
        }
      };
      var preview = {
        initPreview: function initPreview() {
          var element = this.element, crossOrigin = this.crossOrigin;
          var preview2 = this.options.preview;
          var url = crossOrigin ? this.crossOriginUrl : this.url;
          var alt = element.alt || "The image to preview";
          var image = document.createElement("img");
          if (crossOrigin) {
            image.crossOrigin = crossOrigin;
          }
          image.src = url;
          image.alt = alt;
          this.viewBox.appendChild(image);
          this.viewBoxImage = image;
          if (!preview2) {
            return;
          }
          var previews = preview2;
          if (typeof preview2 === "string") {
            previews = element.ownerDocument.querySelectorAll(preview2);
          } else if (preview2.querySelector) {
            previews = [preview2];
          }
          this.previews = previews;
          forEach(previews, function(el) {
            var img = document.createElement("img");
            setData(el, DATA_PREVIEW, {
              width: el.offsetWidth,
              height: el.offsetHeight,
              html: el.innerHTML
            });
            if (crossOrigin) {
              img.crossOrigin = crossOrigin;
            }
            img.src = url;
            img.alt = alt;
            img.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"';
            el.innerHTML = "";
            el.appendChild(img);
          });
        },
        resetPreview: function resetPreview() {
          forEach(this.previews, function(element) {
            var data = getData(element, DATA_PREVIEW);
            setStyle(element, {
              width: data.width,
              height: data.height
            });
            element.innerHTML = data.html;
            removeData(element, DATA_PREVIEW);
          });
        },
        preview: function preview2() {
          var imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
          var cropBoxWidth = cropBoxData.width, cropBoxHeight = cropBoxData.height;
          var width = imageData.width, height = imageData.height;
          var left = cropBoxData.left - canvasData.left - imageData.left;
          var top = cropBoxData.top - canvasData.top - imageData.top;
          if (!this.cropped || this.disabled) {
            return;
          }
          setStyle(this.viewBoxImage, assign({
            width,
            height
          }, getTransforms(assign({
            translateX: -left,
            translateY: -top
          }, imageData))));
          forEach(this.previews, function(element) {
            var data = getData(element, DATA_PREVIEW);
            var originalWidth = data.width;
            var originalHeight = data.height;
            var newWidth = originalWidth;
            var newHeight = originalHeight;
            var ratio = 1;
            if (cropBoxWidth) {
              ratio = originalWidth / cropBoxWidth;
              newHeight = cropBoxHeight * ratio;
            }
            if (cropBoxHeight && newHeight > originalHeight) {
              ratio = originalHeight / cropBoxHeight;
              newWidth = cropBoxWidth * ratio;
              newHeight = originalHeight;
            }
            setStyle(element, {
              width: newWidth,
              height: newHeight
            });
            setStyle(element.getElementsByTagName("img")[0], assign({
              width: width * ratio,
              height: height * ratio
            }, getTransforms(assign({
              translateX: -left * ratio,
              translateY: -top * ratio
            }, imageData))));
          });
        }
      };
      var events = {
        bind: function bind() {
          var element = this.element, options = this.options, cropper = this.cropper;
          if (isFunction(options.cropstart)) {
            addListener(element, EVENT_CROP_START, options.cropstart);
          }
          if (isFunction(options.cropmove)) {
            addListener(element, EVENT_CROP_MOVE, options.cropmove);
          }
          if (isFunction(options.cropend)) {
            addListener(element, EVENT_CROP_END, options.cropend);
          }
          if (isFunction(options.crop)) {
            addListener(element, EVENT_CROP, options.crop);
          }
          if (isFunction(options.zoom)) {
            addListener(element, EVENT_ZOOM, options.zoom);
          }
          addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));
          if (options.zoomable && options.zoomOnWheel) {
            addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
              passive: false,
              capture: true
            });
          }
          if (options.toggleDragModeOnDblclick) {
            addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
          }
          addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
          addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));
          if (options.responsive) {
            addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
          }
        },
        unbind: function unbind() {
          var element = this.element, options = this.options, cropper = this.cropper;
          if (isFunction(options.cropstart)) {
            removeListener(element, EVENT_CROP_START, options.cropstart);
          }
          if (isFunction(options.cropmove)) {
            removeListener(element, EVENT_CROP_MOVE, options.cropmove);
          }
          if (isFunction(options.cropend)) {
            removeListener(element, EVENT_CROP_END, options.cropend);
          }
          if (isFunction(options.crop)) {
            removeListener(element, EVENT_CROP, options.crop);
          }
          if (isFunction(options.zoom)) {
            removeListener(element, EVENT_ZOOM, options.zoom);
          }
          removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);
          if (options.zoomable && options.zoomOnWheel) {
            removeListener(cropper, EVENT_WHEEL, this.onWheel, {
              passive: false,
              capture: true
            });
          }
          if (options.toggleDragModeOnDblclick) {
            removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
          }
          removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
          removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);
          if (options.responsive) {
            removeListener(window, EVENT_RESIZE, this.onResize);
          }
        }
      };
      var handlers = {
        resize: function resize() {
          if (this.disabled) {
            return;
          }
          var options = this.options, container = this.container, containerData = this.containerData;
          var ratioX = container.offsetWidth / containerData.width;
          var ratioY = container.offsetHeight / containerData.height;
          var ratio = Math.abs(ratioX - 1) > Math.abs(ratioY - 1) ? ratioX : ratioY;
          if (ratio !== 1) {
            var canvasData;
            var cropBoxData;
            if (options.restore) {
              canvasData = this.getCanvasData();
              cropBoxData = this.getCropBoxData();
            }
            this.render();
            if (options.restore) {
              this.setCanvasData(forEach(canvasData, function(n, i) {
                canvasData[i] = n * ratio;
              }));
              this.setCropBoxData(forEach(cropBoxData, function(n, i) {
                cropBoxData[i] = n * ratio;
              }));
            }
          }
        },
        dblclick: function dblclick() {
          if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
            return;
          }
          this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
        },
        wheel: function wheel(event) {
          var _this = this;
          var ratio = Number(this.options.wheelZoomRatio) || 0.1;
          var delta = 1;
          if (this.disabled) {
            return;
          }
          event.preventDefault();
          if (this.wheeling) {
            return;
          }
          this.wheeling = true;
          setTimeout(function() {
            _this.wheeling = false;
          }, 50);
          if (event.deltaY) {
            delta = event.deltaY > 0 ? 1 : -1;
          } else if (event.wheelDelta) {
            delta = -event.wheelDelta / 120;
          } else if (event.detail) {
            delta = event.detail > 0 ? 1 : -1;
          }
          this.zoom(-delta * ratio, event);
        },
        cropStart: function cropStart(event) {
          var buttons = event.buttons, button = event.button;
          if (this.disabled || (event.type === "mousedown" || event.type === "pointerdown" && event.pointerType === "mouse") && // No primary button (Usually the left button)
          (isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 || event.ctrlKey)) {
            return;
          }
          var options = this.options, pointers = this.pointers;
          var action;
          if (event.changedTouches) {
            forEach(event.changedTouches, function(touch) {
              pointers[touch.identifier] = getPointer(touch);
            });
          } else {
            pointers[event.pointerId || 0] = getPointer(event);
          }
          if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
            action = ACTION_ZOOM;
          } else {
            action = getData(event.target, DATA_ACTION);
          }
          if (!REGEXP_ACTIONS.test(action)) {
            return;
          }
          if (dispatchEvent(this.element, EVENT_CROP_START, {
            originalEvent: event,
            action
          }) === false) {
            return;
          }
          event.preventDefault();
          this.action = action;
          this.cropping = false;
          if (action === ACTION_CROP) {
            this.cropping = true;
            addClass(this.dragBox, CLASS_MODAL);
          }
        },
        cropMove: function cropMove(event) {
          var action = this.action;
          if (this.disabled || !action) {
            return;
          }
          var pointers = this.pointers;
          event.preventDefault();
          if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
            originalEvent: event,
            action
          }) === false) {
            return;
          }
          if (event.changedTouches) {
            forEach(event.changedTouches, function(touch) {
              assign(pointers[touch.identifier] || {}, getPointer(touch, true));
            });
          } else {
            assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
          }
          this.change(event);
        },
        cropEnd: function cropEnd(event) {
          if (this.disabled) {
            return;
          }
          var action = this.action, pointers = this.pointers;
          if (event.changedTouches) {
            forEach(event.changedTouches, function(touch) {
              delete pointers[touch.identifier];
            });
          } else {
            delete pointers[event.pointerId || 0];
          }
          if (!action) {
            return;
          }
          event.preventDefault();
          if (!Object.keys(pointers).length) {
            this.action = "";
          }
          if (this.cropping) {
            this.cropping = false;
            toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
          }
          dispatchEvent(this.element, EVENT_CROP_END, {
            originalEvent: event,
            action
          });
        }
      };
      var change = {
        change: function change2(event) {
          var options = this.options, canvasData = this.canvasData, containerData = this.containerData, cropBoxData = this.cropBoxData, pointers = this.pointers;
          var action = this.action;
          var aspectRatio = options.aspectRatio;
          var left = cropBoxData.left, top = cropBoxData.top, width = cropBoxData.width, height = cropBoxData.height;
          var right = left + width;
          var bottom = top + height;
          var minLeft = 0;
          var minTop = 0;
          var maxWidth = containerData.width;
          var maxHeight = containerData.height;
          var renderable = true;
          var offset;
          if (!aspectRatio && event.shiftKey) {
            aspectRatio = width && height ? width / height : 1;
          }
          if (this.limited) {
            minLeft = cropBoxData.minLeft;
            minTop = cropBoxData.minTop;
            maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
            maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
          }
          var pointer = pointers[Object.keys(pointers)[0]];
          var range = {
            x: pointer.endX - pointer.startX,
            y: pointer.endY - pointer.startY
          };
          var check = function check2(side) {
            switch (side) {
              case ACTION_EAST:
                if (right + range.x > maxWidth) {
                  range.x = maxWidth - right;
                }
                break;
              case ACTION_WEST:
                if (left + range.x < minLeft) {
                  range.x = minLeft - left;
                }
                break;
              case ACTION_NORTH:
                if (top + range.y < minTop) {
                  range.y = minTop - top;
                }
                break;
              case ACTION_SOUTH:
                if (bottom + range.y > maxHeight) {
                  range.y = maxHeight - bottom;
                }
                break;
            }
          };
          switch (action) {
            // Move crop box
            case ACTION_ALL:
              left += range.x;
              top += range.y;
              break;
            // Resize crop box
            case ACTION_EAST:
              if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                renderable = false;
                break;
              }
              check(ACTION_EAST);
              width += range.x;
              if (width < 0) {
                action = ACTION_WEST;
                width = -width;
                left -= width;
              }
              if (aspectRatio) {
                height = width / aspectRatio;
                top += (cropBoxData.height - height) / 2;
              }
              break;
            case ACTION_NORTH:
              if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                renderable = false;
                break;
              }
              check(ACTION_NORTH);
              height -= range.y;
              top += range.y;
              if (height < 0) {
                action = ACTION_SOUTH;
                height = -height;
                top -= height;
              }
              if (aspectRatio) {
                width = height * aspectRatio;
                left += (cropBoxData.width - width) / 2;
              }
              break;
            case ACTION_WEST:
              if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
                renderable = false;
                break;
              }
              check(ACTION_WEST);
              width -= range.x;
              left += range.x;
              if (width < 0) {
                action = ACTION_EAST;
                width = -width;
                left -= width;
              }
              if (aspectRatio) {
                height = width / aspectRatio;
                top += (cropBoxData.height - height) / 2;
              }
              break;
            case ACTION_SOUTH:
              if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
                renderable = false;
                break;
              }
              check(ACTION_SOUTH);
              height += range.y;
              if (height < 0) {
                action = ACTION_NORTH;
                height = -height;
                top -= height;
              }
              if (aspectRatio) {
                width = height * aspectRatio;
                left += (cropBoxData.width - width) / 2;
              }
              break;
            case ACTION_NORTH_EAST:
              if (aspectRatio) {
                if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
                  renderable = false;
                  break;
                }
                check(ACTION_NORTH);
                height -= range.y;
                top += range.y;
                width = height * aspectRatio;
              } else {
                check(ACTION_NORTH);
                check(ACTION_EAST);
                if (range.x >= 0) {
                  if (right < maxWidth) {
                    width += range.x;
                  } else if (range.y <= 0 && top <= minTop) {
                    renderable = false;
                  }
                } else {
                  width += range.x;
                }
                if (range.y <= 0) {
                  if (top > minTop) {
                    height -= range.y;
                    top += range.y;
                  }
                } else {
                  height -= range.y;
                  top += range.y;
                }
              }
              if (width < 0 && height < 0) {
                action = ACTION_SOUTH_WEST;
                height = -height;
                width = -width;
                top -= height;
                left -= width;
              } else if (width < 0) {
                action = ACTION_NORTH_WEST;
                width = -width;
                left -= width;
              } else if (height < 0) {
                action = ACTION_SOUTH_EAST;
                height = -height;
                top -= height;
              }
              break;
            case ACTION_NORTH_WEST:
              if (aspectRatio) {
                if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
                  renderable = false;
                  break;
                }
                check(ACTION_NORTH);
                height -= range.y;
                top += range.y;
                width = height * aspectRatio;
                left += cropBoxData.width - width;
              } else {
                check(ACTION_NORTH);
                check(ACTION_WEST);
                if (range.x <= 0) {
                  if (left > minLeft) {
                    width -= range.x;
                    left += range.x;
                  } else if (range.y <= 0 && top <= minTop) {
                    renderable = false;
                  }
                } else {
                  width -= range.x;
                  left += range.x;
                }
                if (range.y <= 0) {
                  if (top > minTop) {
                    height -= range.y;
                    top += range.y;
                  }
                } else {
                  height -= range.y;
                  top += range.y;
                }
              }
              if (width < 0 && height < 0) {
                action = ACTION_SOUTH_EAST;
                height = -height;
                width = -width;
                top -= height;
                left -= width;
              } else if (width < 0) {
                action = ACTION_NORTH_EAST;
                width = -width;
                left -= width;
              } else if (height < 0) {
                action = ACTION_SOUTH_WEST;
                height = -height;
                top -= height;
              }
              break;
            case ACTION_SOUTH_WEST:
              if (aspectRatio) {
                if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
                  renderable = false;
                  break;
                }
                check(ACTION_WEST);
                width -= range.x;
                left += range.x;
                height = width / aspectRatio;
              } else {
                check(ACTION_SOUTH);
                check(ACTION_WEST);
                if (range.x <= 0) {
                  if (left > minLeft) {
                    width -= range.x;
                    left += range.x;
                  } else if (range.y >= 0 && bottom >= maxHeight) {
                    renderable = false;
                  }
                } else {
                  width -= range.x;
                  left += range.x;
                }
                if (range.y >= 0) {
                  if (bottom < maxHeight) {
                    height += range.y;
                  }
                } else {
                  height += range.y;
                }
              }
              if (width < 0 && height < 0) {
                action = ACTION_NORTH_EAST;
                height = -height;
                width = -width;
                top -= height;
                left -= width;
              } else if (width < 0) {
                action = ACTION_SOUTH_EAST;
                width = -width;
                left -= width;
              } else if (height < 0) {
                action = ACTION_NORTH_WEST;
                height = -height;
                top -= height;
              }
              break;
            case ACTION_SOUTH_EAST:
              if (aspectRatio) {
                if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
                  renderable = false;
                  break;
                }
                check(ACTION_EAST);
                width += range.x;
                height = width / aspectRatio;
              } else {
                check(ACTION_SOUTH);
                check(ACTION_EAST);
                if (range.x >= 0) {
                  if (right < maxWidth) {
                    width += range.x;
                  } else if (range.y >= 0 && bottom >= maxHeight) {
                    renderable = false;
                  }
                } else {
                  width += range.x;
                }
                if (range.y >= 0) {
                  if (bottom < maxHeight) {
                    height += range.y;
                  }
                } else {
                  height += range.y;
                }
              }
              if (width < 0 && height < 0) {
                action = ACTION_NORTH_WEST;
                height = -height;
                width = -width;
                top -= height;
                left -= width;
              } else if (width < 0) {
                action = ACTION_SOUTH_WEST;
                width = -width;
                left -= width;
              } else if (height < 0) {
                action = ACTION_NORTH_EAST;
                height = -height;
                top -= height;
              }
              break;
            // Move canvas
            case ACTION_MOVE:
              this.move(range.x, range.y);
              renderable = false;
              break;
            // Zoom canvas
            case ACTION_ZOOM:
              this.zoom(getMaxZoomRatio(pointers), event);
              renderable = false;
              break;
            // Create crop box
            case ACTION_CROP:
              if (!range.x || !range.y) {
                renderable = false;
                break;
              }
              offset = getOffset(this.cropper);
              left = pointer.startX - offset.left;
              top = pointer.startY - offset.top;
              width = cropBoxData.minWidth;
              height = cropBoxData.minHeight;
              if (range.x > 0) {
                action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
              } else if (range.x < 0) {
                left -= width;
                action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
              }
              if (range.y < 0) {
                top -= height;
              }
              if (!this.cropped) {
                removeClass(this.cropBox, CLASS_HIDDEN);
                this.cropped = true;
                if (this.limited) {
                  this.limitCropBox(true, true);
                }
              }
              break;
          }
          if (renderable) {
            cropBoxData.width = width;
            cropBoxData.height = height;
            cropBoxData.left = left;
            cropBoxData.top = top;
            this.action = action;
            this.renderCropBox();
          }
          forEach(pointers, function(p) {
            p.startX = p.endX;
            p.startY = p.endY;
          });
        }
      };
      var methods = {
        // Show the crop box manually
        crop: function crop() {
          if (this.ready && !this.cropped && !this.disabled) {
            this.cropped = true;
            this.limitCropBox(true, true);
            if (this.options.modal) {
              addClass(this.dragBox, CLASS_MODAL);
            }
            removeClass(this.cropBox, CLASS_HIDDEN);
            this.setCropBoxData(this.initialCropBoxData);
          }
          return this;
        },
        // Reset the image and crop box to their initial states
        reset: function reset() {
          if (this.ready && !this.disabled) {
            this.imageData = assign({}, this.initialImageData);
            this.canvasData = assign({}, this.initialCanvasData);
            this.cropBoxData = assign({}, this.initialCropBoxData);
            this.renderCanvas();
            if (this.cropped) {
              this.renderCropBox();
            }
          }
          return this;
        },
        // Clear the crop box
        clear: function clear() {
          if (this.cropped && !this.disabled) {
            assign(this.cropBoxData, {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            });
            this.cropped = false;
            this.renderCropBox();
            this.limitCanvas(true, true);
            this.renderCanvas();
            removeClass(this.dragBox, CLASS_MODAL);
            addClass(this.cropBox, CLASS_HIDDEN);
          }
          return this;
        },
        /**
         * Replace the image's src and rebuild the cropper
         * @param {string} url - The new URL.
         * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
         * @returns {Cropper} this
         */
        replace: function replace(url) {
          var hasSameSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          if (!this.disabled && url) {
            if (this.isImg) {
              this.element.src = url;
            }
            if (hasSameSize) {
              this.url = url;
              this.image.src = url;
              if (this.ready) {
                this.viewBoxImage.src = url;
                forEach(this.previews, function(element) {
                  element.getElementsByTagName("img")[0].src = url;
                });
              }
            } else {
              if (this.isImg) {
                this.replaced = true;
              }
              this.options.data = null;
              this.uncreate();
              this.load(url);
            }
          }
          return this;
        },
        // Enable (unfreeze) the cropper
        enable: function enable() {
          if (this.ready && this.disabled) {
            this.disabled = false;
            removeClass(this.cropper, CLASS_DISABLED);
          }
          return this;
        },
        // Disable (freeze) the cropper
        disable: function disable() {
          if (this.ready && !this.disabled) {
            this.disabled = true;
            addClass(this.cropper, CLASS_DISABLED);
          }
          return this;
        },
        /**
         * Destroy the cropper and remove the instance from the image
         * @returns {Cropper} this
         */
        destroy: function destroy() {
          var element = this.element;
          if (!element[NAMESPACE]) {
            return this;
          }
          element[NAMESPACE] = void 0;
          if (this.isImg && this.replaced) {
            element.src = this.originalUrl;
          }
          this.uncreate();
          return this;
        },
        /**
         * Move the canvas with relative offsets
         * @param {number} offsetX - The relative offset distance on the x-axis.
         * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
         * @returns {Cropper} this
         */
        move: function move(offsetX) {
          var offsetY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : offsetX;
          var _this$canvasData = this.canvasData, left = _this$canvasData.left, top = _this$canvasData.top;
          return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
        },
        /**
         * Move the canvas to an absolute point
         * @param {number} x - The x-axis coordinate.
         * @param {number} [y=x] - The y-axis coordinate.
         * @returns {Cropper} this
         */
        moveTo: function moveTo(x) {
          var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
          var canvasData = this.canvasData;
          var changed = false;
          x = Number(x);
          y = Number(y);
          if (this.ready && !this.disabled && this.options.movable) {
            if (isNumber(x)) {
              canvasData.left = x;
              changed = true;
            }
            if (isNumber(y)) {
              canvasData.top = y;
              changed = true;
            }
            if (changed) {
              this.renderCanvas(true);
            }
          }
          return this;
        },
        /**
         * Zoom the canvas with a relative ratio
         * @param {number} ratio - The target ratio.
         * @param {Event} _originalEvent - The original event if any.
         * @returns {Cropper} this
         */
        zoom: function zoom(ratio, _originalEvent) {
          var canvasData = this.canvasData;
          ratio = Number(ratio);
          if (ratio < 0) {
            ratio = 1 / (1 - ratio);
          } else {
            ratio = 1 + ratio;
          }
          return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
        },
        /**
         * Zoom the canvas to an absolute ratio
         * @param {number} ratio - The target ratio.
         * @param {Object} pivot - The zoom pivot point coordinate.
         * @param {Event} _originalEvent - The original event if any.
         * @returns {Cropper} this
         */
        zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
          var options = this.options, canvasData = this.canvasData;
          var width = canvasData.width, height = canvasData.height, naturalWidth = canvasData.naturalWidth, naturalHeight = canvasData.naturalHeight;
          ratio = Number(ratio);
          if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
            var newWidth = naturalWidth * ratio;
            var newHeight = naturalHeight * ratio;
            if (dispatchEvent(this.element, EVENT_ZOOM, {
              ratio,
              oldRatio: width / naturalWidth,
              originalEvent: _originalEvent
            }) === false) {
              return this;
            }
            if (_originalEvent) {
              var pointers = this.pointers;
              var offset = getOffset(this.cropper);
              var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
                pageX: _originalEvent.pageX,
                pageY: _originalEvent.pageY
              };
              canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
              canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
            } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
              canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
              canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
            } else {
              canvasData.left -= (newWidth - width) / 2;
              canvasData.top -= (newHeight - height) / 2;
            }
            canvasData.width = newWidth;
            canvasData.height = newHeight;
            this.renderCanvas(true);
          }
          return this;
        },
        /**
         * Rotate the canvas with a relative degree
         * @param {number} degree - The rotate degree.
         * @returns {Cropper} this
         */
        rotate: function rotate(degree) {
          return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
        },
        /**
         * Rotate the canvas to an absolute degree
         * @param {number} degree - The rotate degree.
         * @returns {Cropper} this
         */
        rotateTo: function rotateTo(degree) {
          degree = Number(degree);
          if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
            this.imageData.rotate = degree % 360;
            this.renderCanvas(true, true);
          }
          return this;
        },
        /**
         * Scale the image on the x-axis.
         * @param {number} scaleX - The scale ratio on the x-axis.
         * @returns {Cropper} this
         */
        scaleX: function scaleX(_scaleX) {
          var scaleY = this.imageData.scaleY;
          return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
        },
        /**
         * Scale the image on the y-axis.
         * @param {number} scaleY - The scale ratio on the y-axis.
         * @returns {Cropper} this
         */
        scaleY: function scaleY(_scaleY) {
          var scaleX = this.imageData.scaleX;
          return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
        },
        /**
         * Scale the image
         * @param {number} scaleX - The scale ratio on the x-axis.
         * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
         * @returns {Cropper} this
         */
        scale: function scale(scaleX) {
          var scaleY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : scaleX;
          var imageData = this.imageData;
          var transformed = false;
          scaleX = Number(scaleX);
          scaleY = Number(scaleY);
          if (this.ready && !this.disabled && this.options.scalable) {
            if (isNumber(scaleX)) {
              imageData.scaleX = scaleX;
              transformed = true;
            }
            if (isNumber(scaleY)) {
              imageData.scaleY = scaleY;
              transformed = true;
            }
            if (transformed) {
              this.renderCanvas(true, true);
            }
          }
          return this;
        },
        /**
         * Get the cropped area position and size data (base on the original image)
         * @param {boolean} [rounded=false] - Indicate if round the data values or not.
         * @returns {Object} The result cropped data.
         */
        getData: function getData2() {
          var rounded = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
          var options = this.options, imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
          var data;
          if (this.ready && this.cropped) {
            data = {
              x: cropBoxData.left - canvasData.left,
              y: cropBoxData.top - canvasData.top,
              width: cropBoxData.width,
              height: cropBoxData.height
            };
            var ratio = imageData.width / imageData.naturalWidth;
            forEach(data, function(n, i) {
              data[i] = n / ratio;
            });
            if (rounded) {
              var bottom = Math.round(data.y + data.height);
              var right = Math.round(data.x + data.width);
              data.x = Math.round(data.x);
              data.y = Math.round(data.y);
              data.width = right - data.x;
              data.height = bottom - data.y;
            }
          } else {
            data = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
          }
          if (options.rotatable) {
            data.rotate = imageData.rotate || 0;
          }
          if (options.scalable) {
            data.scaleX = imageData.scaleX || 1;
            data.scaleY = imageData.scaleY || 1;
          }
          return data;
        },
        /**
         * Set the cropped area position and size with new data
         * @param {Object} data - The new data.
         * @returns {Cropper} this
         */
        setData: function setData2(data) {
          var options = this.options, imageData = this.imageData, canvasData = this.canvasData;
          var cropBoxData = {};
          if (this.ready && !this.disabled && isPlainObject(data)) {
            var transformed = false;
            if (options.rotatable) {
              if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
                imageData.rotate = data.rotate;
                transformed = true;
              }
            }
            if (options.scalable) {
              if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
                imageData.scaleX = data.scaleX;
                transformed = true;
              }
              if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
                imageData.scaleY = data.scaleY;
                transformed = true;
              }
            }
            if (transformed) {
              this.renderCanvas(true, true);
            }
            var ratio = imageData.width / imageData.naturalWidth;
            if (isNumber(data.x)) {
              cropBoxData.left = data.x * ratio + canvasData.left;
            }
            if (isNumber(data.y)) {
              cropBoxData.top = data.y * ratio + canvasData.top;
            }
            if (isNumber(data.width)) {
              cropBoxData.width = data.width * ratio;
            }
            if (isNumber(data.height)) {
              cropBoxData.height = data.height * ratio;
            }
            this.setCropBoxData(cropBoxData);
          }
          return this;
        },
        /**
         * Get the container size data.
         * @returns {Object} The result container data.
         */
        getContainerData: function getContainerData() {
          return this.ready ? assign({}, this.containerData) : {};
        },
        /**
         * Get the image position and size data.
         * @returns {Object} The result image data.
         */
        getImageData: function getImageData() {
          return this.sized ? assign({}, this.imageData) : {};
        },
        /**
         * Get the canvas position and size data.
         * @returns {Object} The result canvas data.
         */
        getCanvasData: function getCanvasData() {
          var canvasData = this.canvasData;
          var data = {};
          if (this.ready) {
            forEach(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(n) {
              data[n] = canvasData[n];
            });
          }
          return data;
        },
        /**
         * Set the canvas position and size with new data.
         * @param {Object} data - The new canvas data.
         * @returns {Cropper} this
         */
        setCanvasData: function setCanvasData(data) {
          var canvasData = this.canvasData;
          var aspectRatio = canvasData.aspectRatio;
          if (this.ready && !this.disabled && isPlainObject(data)) {
            if (isNumber(data.left)) {
              canvasData.left = data.left;
            }
            if (isNumber(data.top)) {
              canvasData.top = data.top;
            }
            if (isNumber(data.width)) {
              canvasData.width = data.width;
              canvasData.height = data.width / aspectRatio;
            } else if (isNumber(data.height)) {
              canvasData.height = data.height;
              canvasData.width = data.height * aspectRatio;
            }
            this.renderCanvas(true);
          }
          return this;
        },
        /**
         * Get the crop box position and size data.
         * @returns {Object} The result crop box data.
         */
        getCropBoxData: function getCropBoxData() {
          var cropBoxData = this.cropBoxData;
          var data;
          if (this.ready && this.cropped) {
            data = {
              left: cropBoxData.left,
              top: cropBoxData.top,
              width: cropBoxData.width,
              height: cropBoxData.height
            };
          }
          return data || {};
        },
        /**
         * Set the crop box position and size with new data.
         * @param {Object} data - The new crop box data.
         * @returns {Cropper} this
         */
        setCropBoxData: function setCropBoxData(data) {
          var cropBoxData = this.cropBoxData;
          var aspectRatio = this.options.aspectRatio;
          var widthChanged;
          var heightChanged;
          if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
            if (isNumber(data.left)) {
              cropBoxData.left = data.left;
            }
            if (isNumber(data.top)) {
              cropBoxData.top = data.top;
            }
            if (isNumber(data.width) && data.width !== cropBoxData.width) {
              widthChanged = true;
              cropBoxData.width = data.width;
            }
            if (isNumber(data.height) && data.height !== cropBoxData.height) {
              heightChanged = true;
              cropBoxData.height = data.height;
            }
            if (aspectRatio) {
              if (widthChanged) {
                cropBoxData.height = cropBoxData.width / aspectRatio;
              } else if (heightChanged) {
                cropBoxData.width = cropBoxData.height * aspectRatio;
              }
            }
            this.renderCropBox();
          }
          return this;
        },
        /**
         * Get a canvas drawn the cropped image.
         * @param {Object} [options={}] - The config options.
         * @returns {HTMLCanvasElement} - The result canvas.
         */
        getCroppedCanvas: function getCroppedCanvas() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          if (!this.ready || !window.HTMLCanvasElement) {
            return null;
          }
          var canvasData = this.canvasData;
          var source = getSourceCanvas(this.image, this.imageData, canvasData, options);
          if (!this.cropped) {
            return source;
          }
          var _this$getData = this.getData(options.rounded), initialX = _this$getData.x, initialY = _this$getData.y, initialWidth = _this$getData.width, initialHeight = _this$getData.height;
          var ratio = source.width / Math.floor(canvasData.naturalWidth);
          if (ratio !== 1) {
            initialX *= ratio;
            initialY *= ratio;
            initialWidth *= ratio;
            initialHeight *= ratio;
          }
          var aspectRatio = initialWidth / initialHeight;
          var maxSizes = getAdjustedSizes({
            aspectRatio,
            width: options.maxWidth || Infinity,
            height: options.maxHeight || Infinity
          });
          var minSizes = getAdjustedSizes({
            aspectRatio,
            width: options.minWidth || 0,
            height: options.minHeight || 0
          }, "cover");
          var _getAdjustedSizes = getAdjustedSizes({
            aspectRatio,
            width: options.width || (ratio !== 1 ? source.width : initialWidth),
            height: options.height || (ratio !== 1 ? source.height : initialHeight)
          }), width = _getAdjustedSizes.width, height = _getAdjustedSizes.height;
          width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
          height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
          var canvas = document.createElement("canvas");
          var context = canvas.getContext("2d");
          canvas.width = normalizeDecimalNumber(width);
          canvas.height = normalizeDecimalNumber(height);
          context.fillStyle = options.fillColor || "transparent";
          context.fillRect(0, 0, width, height);
          var _options$imageSmoothi = options.imageSmoothingEnabled, imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi, imageSmoothingQuality = options.imageSmoothingQuality;
          context.imageSmoothingEnabled = imageSmoothingEnabled;
          if (imageSmoothingQuality) {
            context.imageSmoothingQuality = imageSmoothingQuality;
          }
          var sourceWidth = source.width;
          var sourceHeight = source.height;
          var srcX = initialX;
          var srcY = initialY;
          var srcWidth;
          var srcHeight;
          var dstX;
          var dstY;
          var dstWidth;
          var dstHeight;
          if (srcX <= -initialWidth || srcX > sourceWidth) {
            srcX = 0;
            srcWidth = 0;
            dstX = 0;
            dstWidth = 0;
          } else if (srcX <= 0) {
            dstX = -srcX;
            srcX = 0;
            srcWidth = Math.min(sourceWidth, initialWidth + srcX);
            dstWidth = srcWidth;
          } else if (srcX <= sourceWidth) {
            dstX = 0;
            srcWidth = Math.min(initialWidth, sourceWidth - srcX);
            dstWidth = srcWidth;
          }
          if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
            srcY = 0;
            srcHeight = 0;
            dstY = 0;
            dstHeight = 0;
          } else if (srcY <= 0) {
            dstY = -srcY;
            srcY = 0;
            srcHeight = Math.min(sourceHeight, initialHeight + srcY);
            dstHeight = srcHeight;
          } else if (srcY <= sourceHeight) {
            dstY = 0;
            srcHeight = Math.min(initialHeight, sourceHeight - srcY);
            dstHeight = srcHeight;
          }
          var params = [srcX, srcY, srcWidth, srcHeight];
          if (dstWidth > 0 && dstHeight > 0) {
            var scale = width / initialWidth;
            params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
          }
          context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function(param) {
            return Math.floor(normalizeDecimalNumber(param));
          }))));
          return canvas;
        },
        /**
         * Change the aspect ratio of the crop box.
         * @param {number} aspectRatio - The new aspect ratio.
         * @returns {Cropper} this
         */
        setAspectRatio: function setAspectRatio(aspectRatio) {
          var options = this.options;
          if (!this.disabled && !isUndefined(aspectRatio)) {
            options.aspectRatio = Math.max(0, aspectRatio) || NaN;
            if (this.ready) {
              this.initCropBox();
              if (this.cropped) {
                this.renderCropBox();
              }
            }
          }
          return this;
        },
        /**
         * Change the drag mode.
         * @param {string} mode - The new drag mode.
         * @returns {Cropper} this
         */
        setDragMode: function setDragMode(mode) {
          var options = this.options, dragBox = this.dragBox, face = this.face;
          if (this.ready && !this.disabled) {
            var croppable = mode === DRAG_MODE_CROP;
            var movable = options.movable && mode === DRAG_MODE_MOVE;
            mode = croppable || movable ? mode : DRAG_MODE_NONE;
            options.dragMode = mode;
            setData(dragBox, DATA_ACTION, mode);
            toggleClass(dragBox, CLASS_CROP, croppable);
            toggleClass(dragBox, CLASS_MOVE, movable);
            if (!options.cropBoxMovable) {
              setData(face, DATA_ACTION, mode);
              toggleClass(face, CLASS_CROP, croppable);
              toggleClass(face, CLASS_MOVE, movable);
            }
          }
          return this;
        }
      };
      var AnotherCropper = WINDOW.Cropper;
      var Cropper2 = /* @__PURE__ */ function() {
        function Cropper3(element) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          _classCallCheck(this, Cropper3);
          if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
            throw new Error("The first argument is required and must be an <img> or <canvas> element.");
          }
          this.element = element;
          this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
          this.cropped = false;
          this.disabled = false;
          this.pointers = {};
          this.ready = false;
          this.reloading = false;
          this.replaced = false;
          this.sized = false;
          this.sizing = false;
          this.init();
        }
        return _createClass(Cropper3, [{
          key: "init",
          value: function init() {
            var element = this.element;
            var tagName = element.tagName.toLowerCase();
            var url;
            if (element[NAMESPACE]) {
              return;
            }
            element[NAMESPACE] = this;
            if (tagName === "img") {
              this.isImg = true;
              url = element.getAttribute("src") || "";
              this.originalUrl = url;
              if (!url) {
                return;
              }
              url = element.src;
            } else if (tagName === "canvas" && window.HTMLCanvasElement) {
              url = element.toDataURL();
            }
            this.load(url);
          }
        }, {
          key: "load",
          value: function load(url) {
            var _this = this;
            if (!url) {
              return;
            }
            this.url = url;
            this.imageData = {};
            var element = this.element, options = this.options;
            if (!options.rotatable && !options.scalable) {
              options.checkOrientation = false;
            }
            if (!options.checkOrientation || !window.ArrayBuffer) {
              this.clone();
              return;
            }
            if (REGEXP_DATA_URL.test(url)) {
              if (REGEXP_DATA_URL_JPEG.test(url)) {
                this.read(dataURLToArrayBuffer(url));
              } else {
                this.clone();
              }
              return;
            }
            var xhr = new XMLHttpRequest();
            var clone = this.clone.bind(this);
            this.reloading = true;
            this.xhr = xhr;
            xhr.onabort = clone;
            xhr.onerror = clone;
            xhr.ontimeout = clone;
            xhr.onprogress = function() {
              if (xhr.getResponseHeader("content-type") !== MIME_TYPE_JPEG) {
                xhr.abort();
              }
            };
            xhr.onload = function() {
              _this.read(xhr.response);
            };
            xhr.onloadend = function() {
              _this.reloading = false;
              _this.xhr = null;
            };
            if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
              url = addTimestamp(url);
            }
            xhr.open("GET", url, true);
            xhr.responseType = "arraybuffer";
            xhr.withCredentials = element.crossOrigin === "use-credentials";
            xhr.send();
          }
        }, {
          key: "read",
          value: function read(arrayBuffer) {
            var options = this.options, imageData = this.imageData;
            var orientation = resetAndGetOrientation(arrayBuffer);
            var rotate = 0;
            var scaleX = 1;
            var scaleY = 1;
            if (orientation > 1) {
              this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);
              var _parseOrientation = parseOrientation(orientation);
              rotate = _parseOrientation.rotate;
              scaleX = _parseOrientation.scaleX;
              scaleY = _parseOrientation.scaleY;
            }
            if (options.rotatable) {
              imageData.rotate = rotate;
            }
            if (options.scalable) {
              imageData.scaleX = scaleX;
              imageData.scaleY = scaleY;
            }
            this.clone();
          }
        }, {
          key: "clone",
          value: function clone() {
            var element = this.element, url = this.url;
            var crossOrigin = element.crossOrigin;
            var crossOriginUrl = url;
            if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
              if (!crossOrigin) {
                crossOrigin = "anonymous";
              }
              crossOriginUrl = addTimestamp(url);
            }
            this.crossOrigin = crossOrigin;
            this.crossOriginUrl = crossOriginUrl;
            var image = document.createElement("img");
            if (crossOrigin) {
              image.crossOrigin = crossOrigin;
            }
            image.src = crossOriginUrl || url;
            image.alt = element.alt || "The image to crop";
            this.image = image;
            image.onload = this.start.bind(this);
            image.onerror = this.stop.bind(this);
            addClass(image, CLASS_HIDE);
            element.parentNode.insertBefore(image, element.nextSibling);
          }
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;
            var image = this.image;
            image.onload = null;
            image.onerror = null;
            this.sizing = true;
            var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);
            var done = function done2(naturalWidth, naturalHeight) {
              assign(_this2.imageData, {
                naturalWidth,
                naturalHeight,
                aspectRatio: naturalWidth / naturalHeight
              });
              _this2.initialImageData = assign({}, _this2.imageData);
              _this2.sizing = false;
              _this2.sized = true;
              _this2.build();
            };
            if (image.naturalWidth && !isIOSWebKit) {
              done(image.naturalWidth, image.naturalHeight);
              return;
            }
            var sizingImage = document.createElement("img");
            var body = document.body || document.documentElement;
            this.sizingImage = sizingImage;
            sizingImage.onload = function() {
              done(sizingImage.width, sizingImage.height);
              if (!isIOSWebKit) {
                body.removeChild(sizingImage);
              }
            };
            sizingImage.src = image.src;
            if (!isIOSWebKit) {
              sizingImage.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;";
              body.appendChild(sizingImage);
            }
          }
        }, {
          key: "stop",
          value: function stop() {
            var image = this.image;
            image.onload = null;
            image.onerror = null;
            image.parentNode.removeChild(image);
            this.image = null;
          }
        }, {
          key: "build",
          value: function build() {
            if (!this.sized || this.ready) {
              return;
            }
            var element = this.element, options = this.options, image = this.image;
            var container = element.parentNode;
            var template = document.createElement("div");
            template.innerHTML = TEMPLATE;
            var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
            var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
            var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
            var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
            var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
            this.container = container;
            this.cropper = cropper;
            this.canvas = canvas;
            this.dragBox = dragBox;
            this.cropBox = cropBox;
            this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
            this.face = face;
            canvas.appendChild(image);
            addClass(element, CLASS_HIDDEN);
            container.insertBefore(cropper, element.nextSibling);
            removeClass(image, CLASS_HIDE);
            this.initPreview();
            this.bind();
            options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
            options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
            options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
            addClass(cropBox, CLASS_HIDDEN);
            if (!options.guides) {
              addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
            }
            if (!options.center) {
              addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
            }
            if (options.background) {
              addClass(cropper, "".concat(NAMESPACE, "-bg"));
            }
            if (!options.highlight) {
              addClass(face, CLASS_INVISIBLE);
            }
            if (options.cropBoxMovable) {
              addClass(face, CLASS_MOVE);
              setData(face, DATA_ACTION, ACTION_ALL);
            }
            if (!options.cropBoxResizable) {
              addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
              addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
            }
            this.render();
            this.ready = true;
            this.setDragMode(options.dragMode);
            if (options.autoCrop) {
              this.crop();
            }
            this.setData(options.data);
            if (isFunction(options.ready)) {
              addListener(element, EVENT_READY, options.ready, {
                once: true
              });
            }
            dispatchEvent(element, EVENT_READY);
          }
        }, {
          key: "unbuild",
          value: function unbuild() {
            if (!this.ready) {
              return;
            }
            this.ready = false;
            this.unbind();
            this.resetPreview();
            var parentNode = this.cropper.parentNode;
            if (parentNode) {
              parentNode.removeChild(this.cropper);
            }
            removeClass(this.element, CLASS_HIDDEN);
          }
        }, {
          key: "uncreate",
          value: function uncreate() {
            if (this.ready) {
              this.unbuild();
              this.ready = false;
              this.cropped = false;
            } else if (this.sizing) {
              this.sizingImage.onload = null;
              this.sizing = false;
              this.sized = false;
            } else if (this.reloading) {
              this.xhr.onabort = null;
              this.xhr.abort();
            } else if (this.image) {
              this.stop();
            }
          }
          /**
           * Get the no conflict cropper class.
           * @returns {Cropper} The cropper class.
           */
        }], [{
          key: "noConflict",
          value: function noConflict() {
            window.Cropper = AnotherCropper;
            return Cropper3;
          }
          /**
           * Change the default options.
           * @param {Object} options - The new default options.
           */
        }, {
          key: "setDefaults",
          value: function setDefaults(options) {
            assign(DEFAULTS, isPlainObject(options) && options);
          }
        }]);
      }();
      assign(Cropper2.prototype, render, preview, events, handlers, change, methods);
      return Cropper2;
    });
  }
});

// .yarn/__virtual__/jquery-cropper-virtual-852451e033/7/.yarn/berry/cache/jquery-cropper-patch-4afffeef37-10c0.zip/node_modules/jquery-cropper/dist/jquery-cropper.esm.js
init_jquery_module();
var import_cropperjs = __toESM(require_cropper());
if (jquery_module_default.fn) {
  AnotherCropper = jquery_module_default.fn.cropper;
  NAMESPACE = "cropper";
  jquery_module_default.fn.cropper = function jQueryCropper(option) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var result = void 0;
    this.each(function(i, element) {
      var $element = jquery_module_default(element);
      var isDestroy = option === "destroy";
      var cropper = $element.data(NAMESPACE);
      if (!cropper) {
        if (isDestroy) {
          return;
        }
        var options = jquery_module_default.extend({}, $element.data(), jquery_module_default.isPlainObject(option) && option);
        cropper = new import_cropperjs.default(element, options);
        $element.data(NAMESPACE, cropper);
      }
      if (typeof option === "string") {
        var fn = cropper[option];
        if (typeof fn === "function") {
          result = fn.apply(cropper, args);
          if (result === cropper) {
            result = void 0;
          }
          if (isDestroy) {
            $element.removeData(NAMESPACE);
          }
        }
      }
    });
    return result !== void 0 ? result : this;
  };
  jquery_module_default.fn.cropper.Constructor = import_cropperjs.default;
  jquery_module_default.fn.cropper.setDefaults = import_cropperjs.default.setDefaults;
  jquery_module_default.fn.cropper.noConflict = function noConflict() {
    jquery_module_default.fn.cropper = AnotherCropper;
    return this;
  };
}
var AnotherCropper;
var NAMESPACE;

// src/imagecropper/imagecropper.js
var ImageCropper = class extends DeferredWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    this.image = $(PrimeFaces.escapeClientId(this.cfg.image));
    this.jqCoords = $(this.jqId + "_coords");
    var imageWidth = this.image[0].naturalWidth, imageHeight = this.image[0].naturalHeight;
    this.cfg.minCropBoxWidth = this.cfg.minSize ? this.cfg.minSize[0] : 0;
    this.cfg.minCropBoxHeight = this.cfg.minSize ? this.cfg.minSize[1] : 0;
    this.cfg.maxCropBoxWidth = Math.min(imageWidth, this.cfg.maxSize ? this.cfg.maxSize[0] : imageWidth);
    this.cfg.maxCropBoxHeight = Math.min(imageHeight, this.cfg.maxSize ? this.cfg.maxSize[1] : imageHeight);
    this.cfg.data = {
      width: (this.cfg.minCropBoxWidth + this.cfg.maxCropBoxWidth) / 2,
      height: (this.cfg.minCropBoxHeight + this.cfg.maxCropBoxHeight) / 2
    };
    this.renderDeferred();
  }
  /**
   * @include
   * @override
   * @inheritdoc
   * @protected
   */
  _render() {
    var $this = this;
    this.image.cropper(this.cfg);
    this.image.on("crop", function(event) {
      $this.onCrop(event);
    });
    this.image.on("ready", function() {
      if ($this.cfg.initialCoords) {
        this.cropper.setCropBoxData({
          left: $this.cfg.initialCoords[0],
          top: $this.cfg.initialCoords[1],
          width: $this.cfg.initialCoords[2],
          height: $this.cfg.initialCoords[3]
        });
      }
    });
    this.cropper = this.image.data("cropper");
  }
  /**
   * @override
   * @inheritdoc
   */
  destroy() {
    super.destroy();
    if (this.cropper) {
      this.cropper.destroy();
    }
  }
  /**
   * Callback for when a crop was performed.
   * @private
   * @param {JQueryCropper.CropEvent} event The crop event that occurred.
   */
  onCrop(event) {
    if (this.cropping) {
      return;
    }
    var width = event.detail.width;
    var height = event.detail.height;
    if (width < this.cfg.minCropBoxWidth || height < this.cfg.minCropBoxHeight || width > this.cfg.maxCropBoxWidth || height > this.cfg.maxCropBoxHeight) {
      width = Math.max(this.cfg.minCropBoxWidth, Math.min(this.cfg.maxCropBoxWidth, width));
      height = Math.max(this.cfg.minCropBoxHeight, Math.min(this.cfg.maxCropBoxHeight, height));
      this.cropping = true;
      this.cropper.setCropBoxData({
        width,
        height
      });
    }
    var cropCoords = event.detail.x + "_" + event.detail.y + "_" + width + "_" + height;
    this.jqCoords.val(cropCoords);
    this.cropping = false;
  }
  /**
   * Reset the image and crop box to their initial states.
   */
  reset() {
    if (this.cropper) {
      this.cropper.reset();
    }
  }
  /**
   * Clears the crop box.
   */
  clear() {
    if (this.cropper) {
      this.cropper.clear();
    }
  }
  /**
   * Enables (unfreezes) the cropper.
   */
  enable() {
    if (this.cropper) {
      this.cropper.enable();
    }
  }
  /**
   * Disables (freezes) the cropper.
   */
  disable() {
    if (this.cropper) {
      this.cropper.disable();
    }
  }
};
export {
  ImageCropper
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvY3JvcHBlcmpzLW5wbS0xLjYuMi04N2QyMzkzNDQzLTEwYzAuemlwL25vZGVfbW9kdWxlcy9jcm9wcGVyanMvZGlzdC9jcm9wcGVyLmpzIiwgIi4uLy55YXJuL19fdmlydHVhbF9fL2pxdWVyeS1jcm9wcGVyLXZpcnR1YWwtODUyNDUxZTAzMy83Ly55YXJuL2JlcnJ5L2NhY2hlL2pxdWVyeS1jcm9wcGVyLXBhdGNoLTRhZmZmZWVmMzctMTBjMC56aXAvbm9kZV9tb2R1bGVzL2pxdWVyeS1jcm9wcGVyL2Rpc3QvanF1ZXJ5LWNyb3BwZXIuZXNtLmpzIiwgIi4uL3NyYy9pbWFnZWNyb3BwZXIvaW1hZ2Vjcm9wcGVyLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiFcbiAqIENyb3BwZXIuanMgdjEuNi4yXG4gKiBodHRwczovL2Zlbmd5dWFuY2hlbi5naXRodWIuaW8vY3JvcHBlcmpzXG4gKlxuICogQ29weXJpZ2h0IDIwMTUtcHJlc2VudCBDaGVuIEZlbmd5dWFuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqXG4gKiBEYXRlOiAyMDI0LTA0LTIxVDA3OjQzOjA1LjMzNVpcbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5Dcm9wcGVyID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBvd25LZXlzKGUsIHIpIHtcbiAgICB2YXIgdCA9IE9iamVjdC5rZXlzKGUpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7XG4gICAgICByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikuZW51bWVyYWJsZTtcbiAgICAgIH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfVxuICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkMihlKSB7XG4gICAgZm9yICh2YXIgciA9IDE7IHIgPCBhcmd1bWVudHMubGVuZ3RoOyByKyspIHtcbiAgICAgIHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTtcbiAgICAgIHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0W3JdKTtcbiAgICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHtcbiAgICBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgdCB8fCAhdCkgcmV0dXJuIHQ7XG4gICAgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gICAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgICAgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7XG4gICAgICBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgaSkgcmV0dXJuIGk7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gICAgfVxuICAgIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7XG4gIH1cbiAgZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkge1xuICAgIHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpO1xuICAgIHJldHVybiBcInN5bWJvbFwiID09IHR5cGVvZiBpID8gaSA6IGkgKyBcIlwiO1xuICB9XG4gIGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICAgIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICAgIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiB0eXBlb2YgbztcbiAgICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICAgIH0sIF90eXBlb2Yobyk7XG4gIH1cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpO1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbiAgfVxuICBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG4gIH1cbiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG4gIH1cbiAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICAgIGlmICghbykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gICAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICAgIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gICAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB9XG4gIGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gICAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICAgIHJldHVybiBhcnIyO1xuICB9XG4gIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIHZhciBJU19CUk9XU0VSID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG4gIHZhciBXSU5ET1cgPSBJU19CUk9XU0VSID8gd2luZG93IDoge307XG4gIHZhciBJU19UT1VDSF9ERVZJQ0UgPSBJU19CUk9XU0VSICYmIFdJTkRPVy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyAnb250b3VjaHN0YXJ0JyBpbiBXSU5ET1cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogZmFsc2U7XG4gIHZhciBIQVNfUE9JTlRFUl9FVkVOVCA9IElTX0JST1dTRVIgPyAnUG9pbnRlckV2ZW50JyBpbiBXSU5ET1cgOiBmYWxzZTtcbiAgdmFyIE5BTUVTUEFDRSA9ICdjcm9wcGVyJztcblxuICAvLyBBY3Rpb25zXG4gIHZhciBBQ1RJT05fQUxMID0gJ2FsbCc7XG4gIHZhciBBQ1RJT05fQ1JPUCA9ICdjcm9wJztcbiAgdmFyIEFDVElPTl9NT1ZFID0gJ21vdmUnO1xuICB2YXIgQUNUSU9OX1pPT00gPSAnem9vbSc7XG4gIHZhciBBQ1RJT05fRUFTVCA9ICdlJztcbiAgdmFyIEFDVElPTl9XRVNUID0gJ3cnO1xuICB2YXIgQUNUSU9OX1NPVVRIID0gJ3MnO1xuICB2YXIgQUNUSU9OX05PUlRIID0gJ24nO1xuICB2YXIgQUNUSU9OX05PUlRIX0VBU1QgPSAnbmUnO1xuICB2YXIgQUNUSU9OX05PUlRIX1dFU1QgPSAnbncnO1xuICB2YXIgQUNUSU9OX1NPVVRIX0VBU1QgPSAnc2UnO1xuICB2YXIgQUNUSU9OX1NPVVRIX1dFU1QgPSAnc3cnO1xuXG4gIC8vIENsYXNzZXNcbiAgdmFyIENMQVNTX0NST1AgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWNyb3BcIik7XG4gIHZhciBDTEFTU19ESVNBQkxFRCA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItZGlzYWJsZWRcIik7XG4gIHZhciBDTEFTU19ISURERU4gPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWhpZGRlblwiKTtcbiAgdmFyIENMQVNTX0hJREUgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWhpZGVcIik7XG4gIHZhciBDTEFTU19JTlZJU0lCTEUgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWludmlzaWJsZVwiKTtcbiAgdmFyIENMQVNTX01PREFMID0gXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1tb2RhbFwiKTtcbiAgdmFyIENMQVNTX01PVkUgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLW1vdmVcIik7XG5cbiAgLy8gRGF0YSBrZXlzXG4gIHZhciBEQVRBX0FDVElPTiA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCJBY3Rpb25cIik7XG4gIHZhciBEQVRBX1BSRVZJRVcgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiUHJldmlld1wiKTtcblxuICAvLyBEcmFnIG1vZGVzXG4gIHZhciBEUkFHX01PREVfQ1JPUCA9ICdjcm9wJztcbiAgdmFyIERSQUdfTU9ERV9NT1ZFID0gJ21vdmUnO1xuICB2YXIgRFJBR19NT0RFX05PTkUgPSAnbm9uZSc7XG5cbiAgLy8gRXZlbnRzXG4gIHZhciBFVkVOVF9DUk9QID0gJ2Nyb3AnO1xuICB2YXIgRVZFTlRfQ1JPUF9FTkQgPSAnY3JvcGVuZCc7XG4gIHZhciBFVkVOVF9DUk9QX01PVkUgPSAnY3JvcG1vdmUnO1xuICB2YXIgRVZFTlRfQ1JPUF9TVEFSVCA9ICdjcm9wc3RhcnQnO1xuICB2YXIgRVZFTlRfREJMQ0xJQ0sgPSAnZGJsY2xpY2snO1xuICB2YXIgRVZFTlRfVE9VQ0hfU1RBUlQgPSBJU19UT1VDSF9ERVZJQ0UgPyAndG91Y2hzdGFydCcgOiAnbW91c2Vkb3duJztcbiAgdmFyIEVWRU5UX1RPVUNIX01PVkUgPSBJU19UT1VDSF9ERVZJQ0UgPyAndG91Y2htb3ZlJyA6ICdtb3VzZW1vdmUnO1xuICB2YXIgRVZFTlRfVE9VQ0hfRU5EID0gSVNfVE9VQ0hfREVWSUNFID8gJ3RvdWNoZW5kIHRvdWNoY2FuY2VsJyA6ICdtb3VzZXVwJztcbiAgdmFyIEVWRU5UX1BPSU5URVJfRE9XTiA9IEhBU19QT0lOVEVSX0VWRU5UID8gJ3BvaW50ZXJkb3duJyA6IEVWRU5UX1RPVUNIX1NUQVJUO1xuICB2YXIgRVZFTlRfUE9JTlRFUl9NT1ZFID0gSEFTX1BPSU5URVJfRVZFTlQgPyAncG9pbnRlcm1vdmUnIDogRVZFTlRfVE9VQ0hfTU9WRTtcbiAgdmFyIEVWRU5UX1BPSU5URVJfVVAgPSBIQVNfUE9JTlRFUl9FVkVOVCA/ICdwb2ludGVydXAgcG9pbnRlcmNhbmNlbCcgOiBFVkVOVF9UT1VDSF9FTkQ7XG4gIHZhciBFVkVOVF9SRUFEWSA9ICdyZWFkeSc7XG4gIHZhciBFVkVOVF9SRVNJWkUgPSAncmVzaXplJztcbiAgdmFyIEVWRU5UX1dIRUVMID0gJ3doZWVsJztcbiAgdmFyIEVWRU5UX1pPT00gPSAnem9vbSc7XG5cbiAgLy8gTWltZSB0eXBlc1xuICB2YXIgTUlNRV9UWVBFX0pQRUcgPSAnaW1hZ2UvanBlZyc7XG5cbiAgLy8gUmVnRXhwc1xuICB2YXIgUkVHRVhQX0FDVElPTlMgPSAvXmV8d3xzfG58c2V8c3d8bmV8bnd8YWxsfGNyb3B8bW92ZXx6b29tJC87XG4gIHZhciBSRUdFWFBfREFUQV9VUkwgPSAvXmRhdGE6LztcbiAgdmFyIFJFR0VYUF9EQVRBX1VSTF9KUEVHID0gL15kYXRhOmltYWdlXFwvanBlZztiYXNlNjQsLztcbiAgdmFyIFJFR0VYUF9UQUdfTkFNRSA9IC9eaW1nfGNhbnZhcyQvaTtcblxuICAvLyBNaXNjXG4gIC8vIEluc3BpcmVkIGJ5IHRoZSBkZWZhdWx0IHdpZHRoIGFuZCBoZWlnaHQgb2YgYSBjYW52YXMgZWxlbWVudC5cbiAgdmFyIE1JTl9DT05UQUlORVJfV0lEVEggPSAyMDA7XG4gIHZhciBNSU5fQ09OVEFJTkVSX0hFSUdIVCA9IDEwMDtcblxuICB2YXIgREVGQVVMVFMgPSB7XG4gICAgLy8gRGVmaW5lIHRoZSB2aWV3IG1vZGUgb2YgdGhlIGNyb3BwZXJcbiAgICB2aWV3TW9kZTogMCxcbiAgICAvLyAwLCAxLCAyLCAzXG5cbiAgICAvLyBEZWZpbmUgdGhlIGRyYWdnaW5nIG1vZGUgb2YgdGhlIGNyb3BwZXJcbiAgICBkcmFnTW9kZTogRFJBR19NT0RFX0NST1AsXG4gICAgLy8gJ2Nyb3AnLCAnbW92ZScgb3IgJ25vbmUnXG5cbiAgICAvLyBEZWZpbmUgdGhlIGluaXRpYWwgYXNwZWN0IHJhdGlvIG9mIHRoZSBjcm9wIGJveFxuICAgIGluaXRpYWxBc3BlY3RSYXRpbzogTmFOLFxuICAgIC8vIERlZmluZSB0aGUgYXNwZWN0IHJhdGlvIG9mIHRoZSBjcm9wIGJveFxuICAgIGFzcGVjdFJhdGlvOiBOYU4sXG4gICAgLy8gQW4gb2JqZWN0IHdpdGggdGhlIHByZXZpb3VzIGNyb3BwaW5nIHJlc3VsdCBkYXRhXG4gICAgZGF0YTogbnVsbCxcbiAgICAvLyBBIHNlbGVjdG9yIGZvciBhZGRpbmcgZXh0cmEgY29udGFpbmVycyB0byBwcmV2aWV3XG4gICAgcHJldmlldzogJycsXG4gICAgLy8gUmUtcmVuZGVyIHRoZSBjcm9wcGVyIHdoZW4gcmVzaXplIHRoZSB3aW5kb3dcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIC8vIFJlc3RvcmUgdGhlIGNyb3BwZWQgYXJlYSBhZnRlciByZXNpemUgdGhlIHdpbmRvd1xuICAgIHJlc3RvcmU6IHRydWUsXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgaW1hZ2UgaXMgYSBjcm9zcy1vcmlnaW4gaW1hZ2VcbiAgICBjaGVja0Nyb3NzT3JpZ2luOiB0cnVlLFxuICAgIC8vIENoZWNrIHRoZSBjdXJyZW50IGltYWdlJ3MgRXhpZiBPcmllbnRhdGlvbiBpbmZvcm1hdGlvblxuICAgIGNoZWNrT3JpZW50YXRpb246IHRydWUsXG4gICAgLy8gU2hvdyB0aGUgYmxhY2sgbW9kYWxcbiAgICBtb2RhbDogdHJ1ZSxcbiAgICAvLyBTaG93IHRoZSBkYXNoZWQgbGluZXMgZm9yIGd1aWRpbmdcbiAgICBndWlkZXM6IHRydWUsXG4gICAgLy8gU2hvdyB0aGUgY2VudGVyIGluZGljYXRvciBmb3IgZ3VpZGluZ1xuICAgIGNlbnRlcjogdHJ1ZSxcbiAgICAvLyBTaG93IHRoZSB3aGl0ZSBtb2RhbCB0byBoaWdobGlnaHQgdGhlIGNyb3AgYm94XG4gICAgaGlnaGxpZ2h0OiB0cnVlLFxuICAgIC8vIFNob3cgdGhlIGdyaWQgYmFja2dyb3VuZFxuICAgIGJhY2tncm91bmQ6IHRydWUsXG4gICAgLy8gRW5hYmxlIHRvIGNyb3AgdGhlIGltYWdlIGF1dG9tYXRpY2FsbHkgd2hlbiBpbml0aWFsaXplXG4gICAgYXV0b0Nyb3A6IHRydWUsXG4gICAgLy8gRGVmaW5lIHRoZSBwZXJjZW50YWdlIG9mIGF1dG9tYXRpYyBjcm9wcGluZyBhcmVhIHdoZW4gaW5pdGlhbGl6ZXNcbiAgICBhdXRvQ3JvcEFyZWE6IDAuOCxcbiAgICAvLyBFbmFibGUgdG8gbW92ZSB0aGUgaW1hZ2VcbiAgICBtb3ZhYmxlOiB0cnVlLFxuICAgIC8vIEVuYWJsZSB0byByb3RhdGUgdGhlIGltYWdlXG4gICAgcm90YXRhYmxlOiB0cnVlLFxuICAgIC8vIEVuYWJsZSB0byBzY2FsZSB0aGUgaW1hZ2VcbiAgICBzY2FsYWJsZTogdHJ1ZSxcbiAgICAvLyBFbmFibGUgdG8gem9vbSB0aGUgaW1hZ2VcbiAgICB6b29tYWJsZTogdHJ1ZSxcbiAgICAvLyBFbmFibGUgdG8gem9vbSB0aGUgaW1hZ2UgYnkgZHJhZ2dpbmcgdG91Y2hcbiAgICB6b29tT25Ub3VjaDogdHJ1ZSxcbiAgICAvLyBFbmFibGUgdG8gem9vbSB0aGUgaW1hZ2UgYnkgd2hlZWxpbmcgbW91c2VcbiAgICB6b29tT25XaGVlbDogdHJ1ZSxcbiAgICAvLyBEZWZpbmUgem9vbSByYXRpbyB3aGVuIHpvb20gdGhlIGltYWdlIGJ5IHdoZWVsaW5nIG1vdXNlXG4gICAgd2hlZWxab29tUmF0aW86IDAuMSxcbiAgICAvLyBFbmFibGUgdG8gbW92ZSB0aGUgY3JvcCBib3hcbiAgICBjcm9wQm94TW92YWJsZTogdHJ1ZSxcbiAgICAvLyBFbmFibGUgdG8gcmVzaXplIHRoZSBjcm9wIGJveFxuICAgIGNyb3BCb3hSZXNpemFibGU6IHRydWUsXG4gICAgLy8gVG9nZ2xlIGRyYWcgbW9kZSBiZXR3ZWVuIFwiY3JvcFwiIGFuZCBcIm1vdmVcIiB3aGVuIGNsaWNrIHR3aWNlIG9uIHRoZSBjcm9wcGVyXG4gICAgdG9nZ2xlRHJhZ01vZGVPbkRibGNsaWNrOiB0cnVlLFxuICAgIC8vIFNpemUgbGltaXRhdGlvblxuICAgIG1pbkNhbnZhc1dpZHRoOiAwLFxuICAgIG1pbkNhbnZhc0hlaWdodDogMCxcbiAgICBtaW5Dcm9wQm94V2lkdGg6IDAsXG4gICAgbWluQ3JvcEJveEhlaWdodDogMCxcbiAgICBtaW5Db250YWluZXJXaWR0aDogTUlOX0NPTlRBSU5FUl9XSURUSCxcbiAgICBtaW5Db250YWluZXJIZWlnaHQ6IE1JTl9DT05UQUlORVJfSEVJR0hULFxuICAgIC8vIFNob3J0Y3V0cyBvZiBldmVudHNcbiAgICByZWFkeTogbnVsbCxcbiAgICBjcm9wc3RhcnQ6IG51bGwsXG4gICAgY3JvcG1vdmU6IG51bGwsXG4gICAgY3JvcGVuZDogbnVsbCxcbiAgICBjcm9wOiBudWxsLFxuICAgIHpvb206IG51bGxcbiAgfTtcblxuICB2YXIgVEVNUExBVEUgPSAnPGRpdiBjbGFzcz1cImNyb3BwZXItY29udGFpbmVyXCIgdG91Y2gtYWN0aW9uPVwibm9uZVwiPicgKyAnPGRpdiBjbGFzcz1cImNyb3BwZXItd3JhcC1ib3hcIj4nICsgJzxkaXYgY2xhc3M9XCJjcm9wcGVyLWNhbnZhc1wiPjwvZGl2PicgKyAnPC9kaXY+JyArICc8ZGl2IGNsYXNzPVwiY3JvcHBlci1kcmFnLWJveFwiPjwvZGl2PicgKyAnPGRpdiBjbGFzcz1cImNyb3BwZXItY3JvcC1ib3hcIj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci12aWV3LWJveFwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1kYXNoZWQgZGFzaGVkLWhcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItZGFzaGVkIGRhc2hlZC12XCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLWNlbnRlclwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1mYWNlXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLWxpbmUgbGluZS1lXCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cImVcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItbGluZSBsaW5lLW5cIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwiblwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1saW5lIGxpbmUtd1wiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJ3XCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLWxpbmUgbGluZS1zXCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cInNcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItcG9pbnQgcG9pbnQtZVwiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJlXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXBvaW50IHBvaW50LW5cIiBkYXRhLWNyb3BwZXItYWN0aW9uPVwiblwiPjwvc3Bhbj4nICsgJzxzcGFuIGNsYXNzPVwiY3JvcHBlci1wb2ludCBwb2ludC13XCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cIndcIj48L3NwYW4+JyArICc8c3BhbiBjbGFzcz1cImNyb3BwZXItcG9pbnQgcG9pbnQtc1wiIGRhdGEtY3JvcHBlci1hY3Rpb249XCJzXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXBvaW50IHBvaW50LW5lXCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cIm5lXCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXBvaW50IHBvaW50LW53XCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cIm53XCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXBvaW50IHBvaW50LXN3XCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cInN3XCI+PC9zcGFuPicgKyAnPHNwYW4gY2xhc3M9XCJjcm9wcGVyLXBvaW50IHBvaW50LXNlXCIgZGF0YS1jcm9wcGVyLWFjdGlvbj1cInNlXCI+PC9zcGFuPicgKyAnPC9kaXY+JyArICc8L2Rpdj4nO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgbm90IGEgbnVtYmVyLlxuICAgKi9cbiAgdmFyIGlzTmFOID0gTnVtYmVyLmlzTmFOIHx8IFdJTkRPVy5pc05hTjtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgbnVtYmVyLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFpc05hTih2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcG9zaXRpdmUgbnVtYmVyLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcG9zaXRpdmUgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICB2YXIgaXNQb3NpdGl2ZU51bWJlciA9IGZ1bmN0aW9uIGlzUG9zaXRpdmVOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPiAwICYmIHZhbHVlIDwgSW5maW5pdHk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyB1bmRlZmluZWQuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgdW5kZWZpbmVkLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBvYmplY3QuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGw7XG4gIH1cbiAgdmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHZhciBfY29uc3RydWN0b3IgPSB2YWx1ZS5jb25zdHJ1Y3RvcjtcbiAgICAgIHZhciBwcm90b3R5cGUgPSBfY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgICAgcmV0dXJuIF9jb25zdHJ1Y3RvciAmJiBwcm90b3R5cGUgJiYgaGFzT3duUHJvcGVydHkuY2FsbChwcm90b3R5cGUsICdpc1Byb3RvdHlwZU9mJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gIH1cbiAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGFycmF5LWxpa2Ugb3IgaXRlcmFibGUgb2JqZWN0IHRvIGFuIGFycmF5LlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBhIG5ldyBhcnJheS5cbiAgICovXG4gIGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSA/IEFycmF5LmZyb20odmFsdWUpIDogc2xpY2UuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSB0aGUgZ2l2ZW4gZGF0YS5cbiAgICogQHBhcmFtIHsqfSBkYXRhIC0gVGhlIGRhdGEgdG8gaXRlcmF0ZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgcHJvY2VzcyBmdW5jdGlvbiBmb3IgZWFjaCBlbGVtZW50LlxuICAgKiBAcmV0dXJucyB7Kn0gVGhlIG9yaWdpbmFsIGRhdGEuXG4gICAqL1xuICBmdW5jdGlvbiBmb3JFYWNoKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGRhdGEgJiYgaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpIHx8IGlzTnVtYmVyKGRhdGEubGVuZ3RoKSAvKiBhcnJheS1saWtlICovKSB7XG4gICAgICAgIHRvQXJyYXkoZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZGF0YSwgdmFsdWUsIGtleSwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChpc09iamVjdChkYXRhKSkge1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBjYWxsYmFjay5jYWxsKGRhdGEsIGRhdGFba2V5XSwga2V5LCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dGVuZCB0aGUgZ2l2ZW4gb2JqZWN0LlxuICAgKiBAcGFyYW0geyp9IHRhcmdldCAtIFRoZSB0YXJnZXQgb2JqZWN0IHRvIGV4dGVuZC5cbiAgICogQHBhcmFtIHsqfSBhcmdzIC0gVGhlIHJlc3Qgb2JqZWN0cyBmb3IgbWVyZ2luZyB0byB0aGUgdGFyZ2V0IG9iamVjdC5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIGV4dGVuZGVkIG9iamVjdC5cbiAgICovXG4gIHZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICBpZiAoaXNPYmplY3QoYXJnKSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKGFyZykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IGFyZ1trZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgdmFyIFJFR0VYUF9ERUNJTUFMUyA9IC9cXC5cXGQqKD86MHw5KXsxMn1cXGQqJC87XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBkZWNpbWFsIG51bWJlci5cbiAgICogQ2hlY2sgb3V0IHtAbGluayBodHRwczovLzAuMzAwMDAwMDAwMDAwMDAwMDQuY29tL31cbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIG5vcm1hbGl6ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lcz0xMDAwMDAwMDAwMDBdIC0gVGhlIHRpbWVzIGZvciBub3JtYWxpemluZy5cbiAgICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbm9ybWFsaXplZCBudW1iZXIuXG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxpemVEZWNpbWFsTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIHRpbWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxMDAwMDAwMDAwMDA7XG4gICAgcmV0dXJuIFJFR0VYUF9ERUNJTUFMUy50ZXN0KHZhbHVlKSA/IE1hdGgucm91bmQodmFsdWUgKiB0aW1lcykgLyB0aW1lcyA6IHZhbHVlO1xuICB9XG4gIHZhciBSRUdFWFBfU1VGRklYID0gL153aWR0aHxoZWlnaHR8bGVmdHx0b3B8bWFyZ2luTGVmdHxtYXJnaW5Ub3AkLztcblxuICAvKipcbiAgICogQXBwbHkgc3R5bGVzIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXMgLSBUaGUgc3R5bGVzIGZvciBhcHBseWluZy5cbiAgICovXG4gIGZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQsIHN0eWxlcykge1xuICAgIHZhciBzdHlsZSA9IGVsZW1lbnQuc3R5bGU7XG4gICAgZm9yRWFjaChzdHlsZXMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcGVydHkpIHtcbiAgICAgIGlmIChSRUdFWFBfU1VGRklYLnRlc3QocHJvcGVydHkpICYmIGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IFwiXCIuY29uY2F0KHZhbHVlLCBcInB4XCIpO1xuICAgICAgfVxuICAgICAgc3R5bGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaGFzIGEgc3BlY2lhbCBjbGFzcy5cbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gY2hlY2suXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBjbGFzcyB0byBzZWFyY2guXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgc3BlY2lhbCBjbGFzcyB3YXMgZm91bmQuXG4gICAqL1xuICBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCB2YWx1ZSkge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdCA/IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHZhbHVlKSA6IGVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YodmFsdWUpID4gLTE7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNsYXNzZXMgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIGNsYXNzZXMgdG8gYmUgYWRkZWQuXG4gICAqL1xuICBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCB2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzTnVtYmVyKGVsZW1lbnQubGVuZ3RoKSkge1xuICAgICAgZm9yRWFjaChlbGVtZW50LCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICBhZGRDbGFzcyhlbGVtLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUudHJpbSgpO1xuICAgIGlmICghY2xhc3NOYW1lKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAoY2xhc3NOYW1lLmluZGV4T2YodmFsdWUpIDwgMCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBcIlwiLmNvbmNhdChjbGFzc05hbWUsIFwiIFwiKS5jb25jYXQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY2xhc3NlcyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBjbGFzc2VzIHRvIGJlIHJlbW92ZWQuXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCB2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzTnVtYmVyKGVsZW1lbnQubGVuZ3RoKSkge1xuICAgICAgZm9yRWFjaChlbGVtZW50LCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByZW1vdmVDbGFzcyhlbGVtLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZih2YWx1ZSkgPj0gMCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHZhbHVlLCAnJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBvciByZW1vdmUgY2xhc3NlcyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBjbGFzc2VzIHRvIGJlIHRvZ2dsZWQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWRkZWQgLSBBZGQgb25seS5cbiAgICovXG4gIGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIHZhbHVlLCBhZGRlZCkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzTnVtYmVyKGVsZW1lbnQubGVuZ3RoKSkge1xuICAgICAgZm9yRWFjaChlbGVtZW50LCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICB0b2dnbGVDbGFzcyhlbGVtLCB2YWx1ZSwgYWRkZWQpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSUUxMC0xMSBkb2Vzbid0IHN1cHBvcnQgdGhlIHNlY29uZCBwYXJhbWV0ZXIgb2YgYGNsYXNzTGlzdC50b2dnbGVgXG4gICAgaWYgKGFkZGVkKSB7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgdmFyIFJFR0VYUF9DQU1FTF9DQVNFID0gLyhbYS16XFxkXSkoW0EtWl0pL2c7XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSB0aGUgZ2l2ZW4gc3RyaW5nIGZyb20gY2FtZWxDYXNlIHRvIGtlYmFiLWNhc2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHRyYW5zZm9ybS5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHRyYW5zZm9ybWVkIHZhbHVlLlxuICAgKi9cbiAgZnVuY3Rpb24gdG9QYXJhbUNhc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZShSRUdFWFBfQ0FNRUxfQ0FTRSwgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZGF0YSBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIGRhdGEga2V5IHRvIGdldC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIGRhdGEgdmFsdWUuXG4gICAqL1xuICBmdW5jdGlvbiBnZXREYXRhKGVsZW1lbnQsIG5hbWUpIHtcbiAgICBpZiAoaXNPYmplY3QoZWxlbWVudFtuYW1lXSkpIHtcbiAgICAgIHJldHVybiBlbGVtZW50W25hbWVdO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5kYXRhc2V0KSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5kYXRhc2V0W25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiLmNvbmNhdCh0b1BhcmFtQ2FzZShuYW1lKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBkYXRhIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIGRhdGEga2V5IHRvIHNldC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgLSBUaGUgZGF0YSB2YWx1ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHNldERhdGEoZWxlbWVudCwgbmFtZSwgZGF0YSkge1xuICAgIGlmIChpc09iamVjdChkYXRhKSkge1xuICAgICAgZWxlbWVudFtuYW1lXSA9IGRhdGE7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LmRhdGFzZXQpIHtcbiAgICAgIGVsZW1lbnQuZGF0YXNldFtuYW1lXSA9IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1cIi5jb25jYXQodG9QYXJhbUNhc2UobmFtZSkpLCBkYXRhKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGRhdGEgZnJvbSB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIHRhcmdldCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFRoZSBkYXRhIGtleSB0byByZW1vdmUuXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVEYXRhKGVsZW1lbnQsIG5hbWUpIHtcbiAgICBpZiAoaXNPYmplY3QoZWxlbWVudFtuYW1lXSkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRlbGV0ZSBlbGVtZW50W25hbWVdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZWxlbWVudFtuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZGF0YXNldCkge1xuICAgICAgLy8gIzEyOCBTYWZhcmkgbm90IGFsbG93cyB0byBkZWxldGUgZGF0YXNldCBwcm9wZXJ0eVxuICAgICAgdHJ5IHtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuZGF0YXNldFtuYW1lXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGVsZW1lbnQuZGF0YXNldFtuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLVwiLmNvbmNhdCh0b1BhcmFtQ2FzZShuYW1lKSkpO1xuICAgIH1cbiAgfVxuICB2YXIgUkVHRVhQX1NQQUNFUyA9IC9cXHNcXHMqLztcbiAgdmFyIG9uY2VTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN1cHBvcnRlZCA9IGZhbHNlO1xuICAgIGlmIChJU19CUk9XU0VSKSB7XG4gICAgICB2YXIgb25jZSA9IGZhbHNlO1xuICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7fTtcbiAgICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnb25jZScsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgc3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gb25jZTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgc2V0dGVyIGNhbiBmaXggYSBgVHlwZUVycm9yYCBpbiBzdHJpY3QgbW9kZVxuICAgICAgICAgKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvRXJyb3JzL0dldHRlcl9vbmx5fVxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlIC0gVGhlIHZhbHVlIHRvIHNldFxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICBvbmNlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgV0lORE9XLmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICBXSU5ET1cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRlZDtcbiAgfSgpO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCB0YXJnZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGV2ZW50IHR5cGUocykuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gVGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBldmVudCBvcHRpb25zLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgdmFyIGhhbmRsZXIgPSBsaXN0ZW5lcjtcbiAgICB0eXBlLnRyaW0oKS5zcGxpdChSRUdFWFBfU1BBQ0VTKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFvbmNlU3VwcG9ydGVkKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSBlbGVtZW50Lmxpc3RlbmVycztcbiAgICAgICAgaWYgKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnNbZXZlbnRdICYmIGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdKSB7XG4gICAgICAgICAgaGFuZGxlciA9IGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdO1xuICAgICAgICAgIGRlbGV0ZSBsaXN0ZW5lcnNbZXZlbnRdW2xpc3RlbmVyXTtcbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMobGlzdGVuZXJzW2V2ZW50XSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgbGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGxpc3RlbmVycykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgZWxlbWVudC5saXN0ZW5lcnM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCB0YXJnZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGV2ZW50IHR5cGUocykuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gVGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBldmVudCBvcHRpb25zLlxuICAgKi9cbiAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgdmFyIF9oYW5kbGVyID0gbGlzdGVuZXI7XG4gICAgdHlwZS50cmltKCkuc3BsaXQoUkVHRVhQX1NQQUNFUykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChvcHRpb25zLm9uY2UgJiYgIW9uY2VTdXBwb3J0ZWQpIHtcbiAgICAgICAgdmFyIF9lbGVtZW50JGxpc3RlbmVycyA9IGVsZW1lbnQubGlzdGVuZXJzLFxuICAgICAgICAgIGxpc3RlbmVycyA9IF9lbGVtZW50JGxpc3RlbmVycyA9PT0gdm9pZCAwID8ge30gOiBfZWxlbWVudCRsaXN0ZW5lcnM7XG4gICAgICAgIF9oYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICBkZWxldGUgbGlzdGVuZXJzW2V2ZW50XVtsaXN0ZW5lcl07XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBfaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpc3RlbmVyLmFwcGx5KGVsZW1lbnQsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoIWxpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgICBsaXN0ZW5lcnNbZXZlbnRdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdKSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnNbZXZlbnRdW2xpc3RlbmVyXSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdGVuZXJzW2V2ZW50XVtsaXN0ZW5lcl0gPSBfaGFuZGxlcjtcbiAgICAgICAgZWxlbWVudC5saXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gICAgICB9XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIF9oYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCBldmVudCBvbiB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCB0YXJnZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGV2ZW50IHR5cGUocykuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIGFkZGl0aW9uYWwgZXZlbnQgZGF0YS5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IEluZGljYXRlIGlmIHRoZSBldmVudCBpcyBkZWZhdWx0IHByZXZlbnRlZCBvciBub3QuXG4gICAqL1xuICBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVsZW1lbnQsIHR5cGUsIGRhdGEpIHtcbiAgICB2YXIgZXZlbnQ7XG5cbiAgICAvLyBFdmVudCBhbmQgQ3VzdG9tRXZlbnQgb24gSUU5LTExIGFyZSBnbG9iYWwgb2JqZWN0cywgbm90IGNvbnN0cnVjdG9yc1xuICAgIGlmIChpc0Z1bmN0aW9uKEV2ZW50KSAmJiBpc0Z1bmN0aW9uKEN1c3RvbUV2ZW50KSkge1xuICAgICAgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSwge1xuICAgICAgICBkZXRhaWw6IGRhdGEsXG4gICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIHRydWUsIHRydWUsIGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG9mZnNldCBiYXNlIG9uIHRoZSBkb2N1bWVudC5cbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIHRhcmdldCBlbGVtZW50LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgb2Zmc2V0IGRhdGEuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRPZmZzZXQoZWxlbWVudCkge1xuICAgIHZhciBib3ggPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiBib3gubGVmdCArICh3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCksXG4gICAgICB0b3A6IGJveC50b3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcClcbiAgICB9O1xuICB9XG4gIHZhciBsb2NhdGlvbiA9IFdJTkRPVy5sb2NhdGlvbjtcbiAgdmFyIFJFR0VYUF9PUklHSU5TID0gL14oXFx3KzopXFwvXFwvKFteOi8/I10qKTo/KFxcZCopL2k7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiBVUkwgaXMgYSBjcm9zcyBvcmlnaW4gVVJMLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVGhlIHRhcmdldCBVUkwuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gVVJMIGlzIGEgY3Jvc3Mgb3JpZ2luIFVSTCwgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNDcm9zc09yaWdpblVSTCh1cmwpIHtcbiAgICB2YXIgcGFydHMgPSB1cmwubWF0Y2goUkVHRVhQX09SSUdJTlMpO1xuICAgIHJldHVybiBwYXJ0cyAhPT0gbnVsbCAmJiAocGFydHNbMV0gIT09IGxvY2F0aW9uLnByb3RvY29sIHx8IHBhcnRzWzJdICE9PSBsb2NhdGlvbi5ob3N0bmFtZSB8fCBwYXJ0c1szXSAhPT0gbG9jYXRpb24ucG9ydCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRpbWVzdGFtcCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVGhlIHRhcmdldCBVUkwuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByZXN1bHQgVVJMLlxuICAgKi9cbiAgZnVuY3Rpb24gYWRkVGltZXN0YW1wKHVybCkge1xuICAgIHZhciB0aW1lc3RhbXAgPSBcInRpbWVzdGFtcD1cIi5jb25jYXQobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgIHJldHVybiB1cmwgKyAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgdGltZXN0YW1wO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0cmFuc2Zvcm1zIGJhc2Ugb24gdGhlIGdpdmVuIG9iamVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIFRoZSB0YXJnZXQgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBBIHN0cmluZyBjb250YWlucyB0cmFuc2Zvcm0gdmFsdWVzLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0VHJhbnNmb3JtcyhfcmVmKSB7XG4gICAgdmFyIHJvdGF0ZSA9IF9yZWYucm90YXRlLFxuICAgICAgc2NhbGVYID0gX3JlZi5zY2FsZVgsXG4gICAgICBzY2FsZVkgPSBfcmVmLnNjYWxlWSxcbiAgICAgIHRyYW5zbGF0ZVggPSBfcmVmLnRyYW5zbGF0ZVgsXG4gICAgICB0cmFuc2xhdGVZID0gX3JlZi50cmFuc2xhdGVZO1xuICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICBpZiAoaXNOdW1iZXIodHJhbnNsYXRlWCkgJiYgdHJhbnNsYXRlWCAhPT0gMCkge1xuICAgICAgdmFsdWVzLnB1c2goXCJ0cmFuc2xhdGVYKFwiLmNvbmNhdCh0cmFuc2xhdGVYLCBcInB4KVwiKSk7XG4gICAgfVxuICAgIGlmIChpc051bWJlcih0cmFuc2xhdGVZKSAmJiB0cmFuc2xhdGVZICE9PSAwKSB7XG4gICAgICB2YWx1ZXMucHVzaChcInRyYW5zbGF0ZVkoXCIuY29uY2F0KHRyYW5zbGF0ZVksIFwicHgpXCIpKTtcbiAgICB9XG5cbiAgICAvLyBSb3RhdGUgc2hvdWxkIGNvbWUgZmlyc3QgYmVmb3JlIHNjYWxlIHRvIG1hdGNoIG9yaWVudGF0aW9uIHRyYW5zZm9ybVxuICAgIGlmIChpc051bWJlcihyb3RhdGUpICYmIHJvdGF0ZSAhPT0gMCkge1xuICAgICAgdmFsdWVzLnB1c2goXCJyb3RhdGUoXCIuY29uY2F0KHJvdGF0ZSwgXCJkZWcpXCIpKTtcbiAgICB9XG4gICAgaWYgKGlzTnVtYmVyKHNjYWxlWCkgJiYgc2NhbGVYICE9PSAxKSB7XG4gICAgICB2YWx1ZXMucHVzaChcInNjYWxlWChcIi5jb25jYXQoc2NhbGVYLCBcIilcIikpO1xuICAgIH1cbiAgICBpZiAoaXNOdW1iZXIoc2NhbGVZKSAmJiBzY2FsZVkgIT09IDEpIHtcbiAgICAgIHZhbHVlcy5wdXNoKFwic2NhbGVZKFwiLmNvbmNhdChzY2FsZVksIFwiKVwiKSk7XG4gICAgfVxuICAgIHZhciB0cmFuc2Zvcm0gPSB2YWx1ZXMubGVuZ3RoID8gdmFsdWVzLmpvaW4oJyAnKSA6ICdub25lJztcbiAgICByZXR1cm4ge1xuICAgICAgV2Via2l0VHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICBtc1RyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWF4IHJhdGlvIG9mIGEgZ3JvdXAgb2YgcG9pbnRlcnMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb2ludGVycyAtIFRoZSB0YXJnZXQgcG9pbnRlcnMuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSByZXN1bHQgcmF0aW8uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRNYXhab29tUmF0aW8ocG9pbnRlcnMpIHtcbiAgICB2YXIgcG9pbnRlcnMyID0gX29iamVjdFNwcmVhZDIoe30sIHBvaW50ZXJzKTtcbiAgICB2YXIgbWF4UmF0aW8gPSAwO1xuICAgIGZvckVhY2gocG9pbnRlcnMsIGZ1bmN0aW9uIChwb2ludGVyLCBwb2ludGVySWQpIHtcbiAgICAgIGRlbGV0ZSBwb2ludGVyczJbcG9pbnRlcklkXTtcbiAgICAgIGZvckVhY2gocG9pbnRlcnMyLCBmdW5jdGlvbiAocG9pbnRlcjIpIHtcbiAgICAgICAgdmFyIHgxID0gTWF0aC5hYnMocG9pbnRlci5zdGFydFggLSBwb2ludGVyMi5zdGFydFgpO1xuICAgICAgICB2YXIgeTEgPSBNYXRoLmFicyhwb2ludGVyLnN0YXJ0WSAtIHBvaW50ZXIyLnN0YXJ0WSk7XG4gICAgICAgIHZhciB4MiA9IE1hdGguYWJzKHBvaW50ZXIuZW5kWCAtIHBvaW50ZXIyLmVuZFgpO1xuICAgICAgICB2YXIgeTIgPSBNYXRoLmFicyhwb2ludGVyLmVuZFkgLSBwb2ludGVyMi5lbmRZKTtcbiAgICAgICAgdmFyIHoxID0gTWF0aC5zcXJ0KHgxICogeDEgKyB5MSAqIHkxKTtcbiAgICAgICAgdmFyIHoyID0gTWF0aC5zcXJ0KHgyICogeDIgKyB5MiAqIHkyKTtcbiAgICAgICAgdmFyIHJhdGlvID0gKHoyIC0gejEpIC8gejE7XG4gICAgICAgIGlmIChNYXRoLmFicyhyYXRpbykgPiBNYXRoLmFicyhtYXhSYXRpbykpIHtcbiAgICAgICAgICBtYXhSYXRpbyA9IHJhdGlvO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWF4UmF0aW87XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcG9pbnRlciBmcm9tIGFuIGV2ZW50IG9iamVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IC0gVGhlIHRhcmdldCBldmVudCBvYmplY3QuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5kT25seSAtIEluZGljYXRlcyBpZiBvbmx5IHJldHVybnMgdGhlIGVuZCBwb2ludCBjb29yZGluYXRlIG9yIG5vdC5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBwb2ludGVyIGNvbnRhaW5zIHN0YXJ0IGFuZC9vciBlbmQgcG9pbnQgY29vcmRpbmF0ZXMuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRQb2ludGVyKF9yZWYyLCBlbmRPbmx5KSB7XG4gICAgdmFyIHBhZ2VYID0gX3JlZjIucGFnZVgsXG4gICAgICBwYWdlWSA9IF9yZWYyLnBhZ2VZO1xuICAgIHZhciBlbmQgPSB7XG4gICAgICBlbmRYOiBwYWdlWCxcbiAgICAgIGVuZFk6IHBhZ2VZXG4gICAgfTtcbiAgICByZXR1cm4gZW5kT25seSA/IGVuZCA6IF9vYmplY3RTcHJlYWQyKHtcbiAgICAgIHN0YXJ0WDogcGFnZVgsXG4gICAgICBzdGFydFk6IHBhZ2VZXG4gICAgfSwgZW5kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNlbnRlciBwb2ludCBjb29yZGluYXRlIG9mIGEgZ3JvdXAgb2YgcG9pbnRlcnMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwb2ludGVycyAtIFRoZSB0YXJnZXQgcG9pbnRlcnMuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBjZW50ZXIgcG9pbnQgY29vcmRpbmF0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFBvaW50ZXJzQ2VudGVyKHBvaW50ZXJzKSB7XG4gICAgdmFyIHBhZ2VYID0gMDtcbiAgICB2YXIgcGFnZVkgPSAwO1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgZm9yRWFjaChwb2ludGVycywgZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICB2YXIgc3RhcnRYID0gX3JlZjMuc3RhcnRYLFxuICAgICAgICBzdGFydFkgPSBfcmVmMy5zdGFydFk7XG4gICAgICBwYWdlWCArPSBzdGFydFg7XG4gICAgICBwYWdlWSArPSBzdGFydFk7XG4gICAgICBjb3VudCArPSAxO1xuICAgIH0pO1xuICAgIHBhZ2VYIC89IGNvdW50O1xuICAgIHBhZ2VZIC89IGNvdW50O1xuICAgIHJldHVybiB7XG4gICAgICBwYWdlWDogcGFnZVgsXG4gICAgICBwYWdlWTogcGFnZVlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWF4IHNpemVzIGluIGEgcmVjdGFuZ2xlIHVuZGVyIHRoZSBnaXZlbiBhc3BlY3QgcmF0aW8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG9yaWdpbmFsIHNpemVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGU9J2NvbnRhaW4nXSAtIFRoZSBhZGp1c3QgdHlwZS5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBzaXplcy5cbiAgICovXG4gIGZ1bmN0aW9uIGdldEFkanVzdGVkU2l6ZXMoX3JlZjQpIHtcbiAgICB2YXIgYXNwZWN0UmF0aW8gPSBfcmVmNC5hc3BlY3RSYXRpbyxcbiAgICAgIGhlaWdodCA9IF9yZWY0LmhlaWdodCxcbiAgICAgIHdpZHRoID0gX3JlZjQud2lkdGg7XG4gICAgdmFyIHR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdjb250YWluJztcbiAgICB2YXIgaXNWYWxpZFdpZHRoID0gaXNQb3NpdGl2ZU51bWJlcih3aWR0aCk7XG4gICAgdmFyIGlzVmFsaWRIZWlnaHQgPSBpc1Bvc2l0aXZlTnVtYmVyKGhlaWdodCk7XG4gICAgaWYgKGlzVmFsaWRXaWR0aCAmJiBpc1ZhbGlkSGVpZ2h0KSB7XG4gICAgICB2YXIgYWRqdXN0ZWRXaWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgaWYgKHR5cGUgPT09ICdjb250YWluJyAmJiBhZGp1c3RlZFdpZHRoID4gd2lkdGggfHwgdHlwZSA9PT0gJ2NvdmVyJyAmJiBhZGp1c3RlZFdpZHRoIDwgd2lkdGgpIHtcbiAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkV2lkdGgpIHtcbiAgICAgIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkSGVpZ2h0KSB7XG4gICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmV3IHNpemVzIG9mIGEgcmVjdGFuZ2xlIGFmdGVyIHJvdGF0ZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG9yaWdpbmFsIHNpemVzLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0IHNpemVzLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0Um90YXRlZFNpemVzKF9yZWY1KSB7XG4gICAgdmFyIHdpZHRoID0gX3JlZjUud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfcmVmNS5oZWlnaHQsXG4gICAgICBkZWdyZWUgPSBfcmVmNS5kZWdyZWU7XG4gICAgZGVncmVlID0gTWF0aC5hYnMoZGVncmVlKSAlIDE4MDtcbiAgICBpZiAoZGVncmVlID09PSA5MCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IGhlaWdodCxcbiAgICAgICAgaGVpZ2h0OiB3aWR0aFxuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGFyYyA9IGRlZ3JlZSAlIDkwICogTWF0aC5QSSAvIDE4MDtcbiAgICB2YXIgc2luQXJjID0gTWF0aC5zaW4oYXJjKTtcbiAgICB2YXIgY29zQXJjID0gTWF0aC5jb3MoYXJjKTtcbiAgICB2YXIgbmV3V2lkdGggPSB3aWR0aCAqIGNvc0FyYyArIGhlaWdodCAqIHNpbkFyYztcbiAgICB2YXIgbmV3SGVpZ2h0ID0gd2lkdGggKiBzaW5BcmMgKyBoZWlnaHQgKiBjb3NBcmM7XG4gICAgcmV0dXJuIGRlZ3JlZSA+IDkwID8ge1xuICAgICAgd2lkdGg6IG5ld0hlaWdodCxcbiAgICAgIGhlaWdodDogbmV3V2lkdGhcbiAgICB9IDoge1xuICAgICAgd2lkdGg6IG5ld1dpZHRoLFxuICAgICAgaGVpZ2h0OiBuZXdIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGNhbnZhcyB3aGljaCBkcmV3IHRoZSBnaXZlbiBpbWFnZS5cbiAgICogQHBhcmFtIHtIVE1MSW1hZ2VFbGVtZW50fSBpbWFnZSAtIFRoZSBpbWFnZSBmb3IgZHJhd2luZy5cbiAgICogQHBhcmFtIHtPYmplY3R9IGltYWdlRGF0YSAtIFRoZSBpbWFnZSBkYXRhLlxuICAgKiBAcGFyYW0ge09iamVjdH0gY2FudmFzRGF0YSAtIFRoZSBjYW52YXMgZGF0YS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBUaGUgb3B0aW9ucy5cbiAgICogQHJldHVybnMge0hUTUxDYW52YXNFbGVtZW50fSBUaGUgcmVzdWx0IGNhbnZhcy5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFNvdXJjZUNhbnZhcyhpbWFnZSwgX3JlZjYsIF9yZWY3LCBfcmVmOCkge1xuICAgIHZhciBpbWFnZUFzcGVjdFJhdGlvID0gX3JlZjYuYXNwZWN0UmF0aW8sXG4gICAgICBpbWFnZU5hdHVyYWxXaWR0aCA9IF9yZWY2Lm5hdHVyYWxXaWR0aCxcbiAgICAgIGltYWdlTmF0dXJhbEhlaWdodCA9IF9yZWY2Lm5hdHVyYWxIZWlnaHQsXG4gICAgICBfcmVmNiRyb3RhdGUgPSBfcmVmNi5yb3RhdGUsXG4gICAgICByb3RhdGUgPSBfcmVmNiRyb3RhdGUgPT09IHZvaWQgMCA/IDAgOiBfcmVmNiRyb3RhdGUsXG4gICAgICBfcmVmNiRzY2FsZVggPSBfcmVmNi5zY2FsZVgsXG4gICAgICBzY2FsZVggPSBfcmVmNiRzY2FsZVggPT09IHZvaWQgMCA/IDEgOiBfcmVmNiRzY2FsZVgsXG4gICAgICBfcmVmNiRzY2FsZVkgPSBfcmVmNi5zY2FsZVksXG4gICAgICBzY2FsZVkgPSBfcmVmNiRzY2FsZVkgPT09IHZvaWQgMCA/IDEgOiBfcmVmNiRzY2FsZVk7XG4gICAgdmFyIGFzcGVjdFJhdGlvID0gX3JlZjcuYXNwZWN0UmF0aW8sXG4gICAgICBuYXR1cmFsV2lkdGggPSBfcmVmNy5uYXR1cmFsV2lkdGgsXG4gICAgICBuYXR1cmFsSGVpZ2h0ID0gX3JlZjcubmF0dXJhbEhlaWdodDtcbiAgICB2YXIgX3JlZjgkZmlsbENvbG9yID0gX3JlZjguZmlsbENvbG9yLFxuICAgICAgZmlsbENvbG9yID0gX3JlZjgkZmlsbENvbG9yID09PSB2b2lkIDAgPyAndHJhbnNwYXJlbnQnIDogX3JlZjgkZmlsbENvbG9yLFxuICAgICAgX3JlZjgkaW1hZ2VTbW9vdGhpbmdFID0gX3JlZjguaW1hZ2VTbW9vdGhpbmdFbmFibGVkLFxuICAgICAgaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gX3JlZjgkaW1hZ2VTbW9vdGhpbmdFID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjgkaW1hZ2VTbW9vdGhpbmdFLFxuICAgICAgX3JlZjgkaW1hZ2VTbW9vdGhpbmdRID0gX3JlZjguaW1hZ2VTbW9vdGhpbmdRdWFsaXR5LFxuICAgICAgaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ID0gX3JlZjgkaW1hZ2VTbW9vdGhpbmdRID09PSB2b2lkIDAgPyAnbG93JyA6IF9yZWY4JGltYWdlU21vb3RoaW5nUSxcbiAgICAgIF9yZWY4JG1heFdpZHRoID0gX3JlZjgubWF4V2lkdGgsXG4gICAgICBtYXhXaWR0aCA9IF9yZWY4JG1heFdpZHRoID09PSB2b2lkIDAgPyBJbmZpbml0eSA6IF9yZWY4JG1heFdpZHRoLFxuICAgICAgX3JlZjgkbWF4SGVpZ2h0ID0gX3JlZjgubWF4SGVpZ2h0LFxuICAgICAgbWF4SGVpZ2h0ID0gX3JlZjgkbWF4SGVpZ2h0ID09PSB2b2lkIDAgPyBJbmZpbml0eSA6IF9yZWY4JG1heEhlaWdodCxcbiAgICAgIF9yZWY4JG1pbldpZHRoID0gX3JlZjgubWluV2lkdGgsXG4gICAgICBtaW5XaWR0aCA9IF9yZWY4JG1pbldpZHRoID09PSB2b2lkIDAgPyAwIDogX3JlZjgkbWluV2lkdGgsXG4gICAgICBfcmVmOCRtaW5IZWlnaHQgPSBfcmVmOC5taW5IZWlnaHQsXG4gICAgICBtaW5IZWlnaHQgPSBfcmVmOCRtaW5IZWlnaHQgPT09IHZvaWQgMCA/IDAgOiBfcmVmOCRtaW5IZWlnaHQ7XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdmFyIG1heFNpemVzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICB3aWR0aDogbWF4V2lkdGgsXG4gICAgICBoZWlnaHQ6IG1heEhlaWdodFxuICAgIH0pO1xuICAgIHZhciBtaW5TaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgd2lkdGg6IG1pbldpZHRoLFxuICAgICAgaGVpZ2h0OiBtaW5IZWlnaHRcbiAgICB9LCAnY292ZXInKTtcbiAgICB2YXIgd2lkdGggPSBNYXRoLm1pbihtYXhTaXplcy53aWR0aCwgTWF0aC5tYXgobWluU2l6ZXMud2lkdGgsIG5hdHVyYWxXaWR0aCkpO1xuICAgIHZhciBoZWlnaHQgPSBNYXRoLm1pbihtYXhTaXplcy5oZWlnaHQsIE1hdGgubWF4KG1pblNpemVzLmhlaWdodCwgbmF0dXJhbEhlaWdodCkpO1xuXG4gICAgLy8gTm90ZTogc2hvdWxkIGFsd2F5cyB1c2UgaW1hZ2UncyBuYXR1cmFsIHNpemVzIGZvciBkcmF3aW5nIGFzXG4gICAgLy8gaW1hZ2VEYXRhLm5hdHVyYWxXaWR0aCA9PT0gY2FudmFzRGF0YS5uYXR1cmFsSGVpZ2h0IHdoZW4gcm90YXRlICUgMTgwID09PSA5MFxuICAgIHZhciBkZXN0TWF4U2l6ZXMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgIGFzcGVjdFJhdGlvOiBpbWFnZUFzcGVjdFJhdGlvLFxuICAgICAgd2lkdGg6IG1heFdpZHRoLFxuICAgICAgaGVpZ2h0OiBtYXhIZWlnaHRcbiAgICB9KTtcbiAgICB2YXIgZGVzdE1pblNpemVzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICBhc3BlY3RSYXRpbzogaW1hZ2VBc3BlY3RSYXRpbyxcbiAgICAgIHdpZHRoOiBtaW5XaWR0aCxcbiAgICAgIGhlaWdodDogbWluSGVpZ2h0XG4gICAgfSwgJ2NvdmVyJyk7XG4gICAgdmFyIGRlc3RXaWR0aCA9IE1hdGgubWluKGRlc3RNYXhTaXplcy53aWR0aCwgTWF0aC5tYXgoZGVzdE1pblNpemVzLndpZHRoLCBpbWFnZU5hdHVyYWxXaWR0aCkpO1xuICAgIHZhciBkZXN0SGVpZ2h0ID0gTWF0aC5taW4oZGVzdE1heFNpemVzLmhlaWdodCwgTWF0aC5tYXgoZGVzdE1pblNpemVzLmhlaWdodCwgaW1hZ2VOYXR1cmFsSGVpZ2h0KSk7XG4gICAgdmFyIHBhcmFtcyA9IFstZGVzdFdpZHRoIC8gMiwgLWRlc3RIZWlnaHQgLyAyLCBkZXN0V2lkdGgsIGRlc3RIZWlnaHRdO1xuICAgIGNhbnZhcy53aWR0aCA9IG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIod2lkdGgpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBub3JtYWxpemVEZWNpbWFsTnVtYmVyKGhlaWdodCk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBmaWxsQ29sb3I7XG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIpO1xuICAgIGNvbnRleHQucm90YXRlKHJvdGF0ZSAqIE1hdGguUEkgLyAxODApO1xuICAgIGNvbnRleHQuc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xuICAgIGNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gaW1hZ2VTbW9vdGhpbmdFbmFibGVkO1xuICAgIGNvbnRleHQuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ID0gaW1hZ2VTbW9vdGhpbmdRdWFsaXR5O1xuICAgIGNvbnRleHQuZHJhd0ltYWdlLmFwcGx5KGNvbnRleHQsIFtpbWFnZV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShwYXJhbXMubWFwKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3Iobm9ybWFsaXplRGVjaW1hbE51bWJlcihwYXJhbSkpO1xuICAgIH0pKSkpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgIHJldHVybiBjYW52YXM7XG4gIH1cbiAgdmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cbiAgLyoqXG4gICAqIEdldCBzdHJpbmcgZnJvbSBjaGFyIGNvZGUgaW4gZGF0YSB2aWV3LlxuICAgKiBAcGFyYW0ge0RhdGFWaWV3fSBkYXRhVmlldyAtIFRoZSBkYXRhIHZpZXcgZm9yIHJlYWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAtIFRoZSBzdGFydCBpbmRleC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIFRoZSByZWFkIGxlbmd0aC5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlYWQgcmVzdWx0LlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbUNoYXJDb2RlKGRhdGFWaWV3LCBzdGFydCwgbGVuZ3RoKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIGxlbmd0aCArPSBzdGFydDtcbiAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgc3RyICs9IGZyb21DaGFyQ29kZShkYXRhVmlldy5nZXRVaW50OChpKSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgdmFyIFJFR0VYUF9EQVRBX1VSTF9IRUFEID0gL15kYXRhOi4qLC87XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBEYXRhIFVSTCB0byBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhVVJMIC0gVGhlIERhdGEgVVJMIHRvIHRyYW5zZm9ybS5cbiAgICogQHJldHVybnMge0FycmF5QnVmZmVyfSBUaGUgcmVzdWx0IGFycmF5IGJ1ZmZlci5cbiAgICovXG4gIGZ1bmN0aW9uIGRhdGFVUkxUb0FycmF5QnVmZmVyKGRhdGFVUkwpIHtcbiAgICB2YXIgYmFzZTY0ID0gZGF0YVVSTC5yZXBsYWNlKFJFR0VYUF9EQVRBX1VSTF9IRUFELCAnJyk7XG4gICAgdmFyIGJpbmFyeSA9IGF0b2IoYmFzZTY0KTtcbiAgICB2YXIgYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYmluYXJ5Lmxlbmd0aCk7XG4gICAgdmFyIHVpbnQ4ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuICAgIGZvckVhY2godWludDgsIGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgdWludDhbaV0gPSBiaW5hcnkuY2hhckNvZGVBdChpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyYXlCdWZmZXI7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGFycmF5IGJ1ZmZlciB0byBEYXRhIFVSTC5cbiAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgLSBUaGUgYXJyYXkgYnVmZmVyIHRvIHRyYW5zZm9ybS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1pbWVUeXBlIC0gVGhlIG1pbWUgdHlwZSBvZiB0aGUgRGF0YSBVUkwuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByZXN1bHQgRGF0YSBVUkwuXG4gICAqL1xuICBmdW5jdGlvbiBhcnJheUJ1ZmZlclRvRGF0YVVSTChhcnJheUJ1ZmZlciwgbWltZVR5cGUpIHtcbiAgICB2YXIgY2h1bmtzID0gW107XG5cbiAgICAvLyBDaHVuayBUeXBlZCBBcnJheSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlICgjNDM1KVxuICAgIHZhciBjaHVua1NpemUgPSA4MTkyO1xuICAgIHZhciB1aW50OCA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcbiAgICB3aGlsZSAodWludDgubGVuZ3RoID4gMCkge1xuICAgICAgLy8gWFhYOiBCYWJlbCdzIGB0b0NvbnN1bWFibGVBcnJheWAgaGVscGVyIHdpbGwgdGhyb3cgZXJyb3IgaW4gSUUgb3IgU2FmYXJpIDlcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgICBjaHVua3MucHVzaChmcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgdG9BcnJheSh1aW50OC5zdWJhcnJheSgwLCBjaHVua1NpemUpKSkpO1xuICAgICAgdWludDggPSB1aW50OC5zdWJhcnJheShjaHVua1NpemUpO1xuICAgIH1cbiAgICByZXR1cm4gXCJkYXRhOlwiLmNvbmNhdChtaW1lVHlwZSwgXCI7YmFzZTY0LFwiKS5jb25jYXQoYnRvYShjaHVua3Muam9pbignJykpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb3JpZW50YXRpb24gdmFsdWUgZnJvbSBnaXZlbiBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byByZWFkLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmVhZCBvcmllbnRhdGlvbiB2YWx1ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHJlc2V0QW5kR2V0T3JpZW50YXRpb24oYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYXJyYXlCdWZmZXIpO1xuICAgIHZhciBvcmllbnRhdGlvbjtcblxuICAgIC8vIElnbm9yZXMgcmFuZ2UgZXJyb3Igd2hlbiB0aGUgaW1hZ2UgZG9lcyBub3QgaGF2ZSBjb3JyZWN0IEV4aWYgaW5mb3JtYXRpb25cbiAgICB0cnkge1xuICAgICAgdmFyIGxpdHRsZUVuZGlhbjtcbiAgICAgIHZhciBhcHAxU3RhcnQ7XG4gICAgICB2YXIgaWZkU3RhcnQ7XG5cbiAgICAgIC8vIE9ubHkgaGFuZGxlIEpQRUcgaW1hZ2UgKHN0YXJ0IGJ5IDB4RkZEOClcbiAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50OCgwKSA9PT0gMHhGRiAmJiBkYXRhVmlldy5nZXRVaW50OCgxKSA9PT0gMHhEOCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gZGF0YVZpZXcuYnl0ZUxlbmd0aDtcbiAgICAgICAgdmFyIG9mZnNldCA9IDI7XG4gICAgICAgIHdoaWxlIChvZmZzZXQgKyAxIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCkgPT09IDB4RkYgJiYgZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgMSkgPT09IDB4RTEpIHtcbiAgICAgICAgICAgIGFwcDFTdGFydCA9IG9mZnNldDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvZmZzZXQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGFwcDFTdGFydCkge1xuICAgICAgICB2YXIgZXhpZklEQ29kZSA9IGFwcDFTdGFydCArIDQ7XG4gICAgICAgIHZhciB0aWZmT2Zmc2V0ID0gYXBwMVN0YXJ0ICsgMTA7XG4gICAgICAgIGlmIChnZXRTdHJpbmdGcm9tQ2hhckNvZGUoZGF0YVZpZXcsIGV4aWZJRENvZGUsIDQpID09PSAnRXhpZicpIHtcbiAgICAgICAgICB2YXIgZW5kaWFubmVzcyA9IGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0KTtcbiAgICAgICAgICBsaXR0bGVFbmRpYW4gPSBlbmRpYW5uZXNzID09PSAweDQ5NDk7XG4gICAgICAgICAgaWYgKGxpdHRsZUVuZGlhbiB8fCBlbmRpYW5uZXNzID09PSAweDRENEQgLyogYmlnRW5kaWFuICovKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDE2KHRpZmZPZmZzZXQgKyAyLCBsaXR0bGVFbmRpYW4pID09PSAweDAwMkEpIHtcbiAgICAgICAgICAgICAgdmFyIGZpcnN0SUZET2Zmc2V0ID0gZGF0YVZpZXcuZ2V0VWludDMyKHRpZmZPZmZzZXQgKyA0LCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICAgICAgICBpZiAoZmlyc3RJRkRPZmZzZXQgPj0gMHgwMDAwMDAwOCkge1xuICAgICAgICAgICAgICAgIGlmZFN0YXJ0ID0gdGlmZk9mZnNldCArIGZpcnN0SUZET2Zmc2V0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaWZkU3RhcnQpIHtcbiAgICAgICAgdmFyIF9sZW5ndGggPSBkYXRhVmlldy5nZXRVaW50MTYoaWZkU3RhcnQsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgIHZhciBfb2Zmc2V0O1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IF9sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIF9vZmZzZXQgPSBpZmRTdGFydCArIGkgKiAxMiArIDI7XG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNihfb2Zmc2V0LCBsaXR0bGVFbmRpYW4pID09PSAweDAxMTIgLyogT3JpZW50YXRpb24gKi8pIHtcbiAgICAgICAgICAgIC8vIDggaXMgdGhlIG9mZnNldCBvZiB0aGUgY3VycmVudCB0YWcncyB2YWx1ZVxuICAgICAgICAgICAgX29mZnNldCArPSA4O1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIG9yaWdpbmFsIG9yaWVudGF0aW9uIHZhbHVlXG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IGRhdGFWaWV3LmdldFVpbnQxNihfb2Zmc2V0LCBsaXR0bGVFbmRpYW4pO1xuXG4gICAgICAgICAgICAvLyBPdmVycmlkZSB0aGUgb3JpZW50YXRpb24gd2l0aCBpdHMgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgZGF0YVZpZXcuc2V0VWludDE2KF9vZmZzZXQsIDEsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgb3JpZW50YXRpb24gPSAxO1xuICAgIH1cbiAgICByZXR1cm4gb3JpZW50YXRpb247XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgRXhpZiBPcmllbnRhdGlvbiB2YWx1ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9yaWVudGF0aW9uIC0gVGhlIG9yaWVudGF0aW9uIHRvIHBhcnNlLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcGFyc2VkIHJlc3VsdC5cbiAgICovXG4gIGZ1bmN0aW9uIHBhcnNlT3JpZW50YXRpb24ob3JpZW50YXRpb24pIHtcbiAgICB2YXIgcm90YXRlID0gMDtcbiAgICB2YXIgc2NhbGVYID0gMTtcbiAgICB2YXIgc2NhbGVZID0gMTtcbiAgICBzd2l0Y2ggKG9yaWVudGF0aW9uKSB7XG4gICAgICAvLyBGbGlwIGhvcml6b250YWxcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgc2NhbGVYID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBSb3RhdGUgbGVmdCAxODDCsFxuICAgICAgY2FzZSAzOlxuICAgICAgICByb3RhdGUgPSAtMTgwO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gRmxpcCB2ZXJ0aWNhbFxuICAgICAgY2FzZSA0OlxuICAgICAgICBzY2FsZVkgPSAtMTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIEZsaXAgdmVydGljYWwgYW5kIHJvdGF0ZSByaWdodCA5MMKwXG4gICAgICBjYXNlIDU6XG4gICAgICAgIHJvdGF0ZSA9IDkwO1xuICAgICAgICBzY2FsZVkgPSAtMTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIFJvdGF0ZSByaWdodCA5MMKwXG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJvdGF0ZSA9IDkwO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gRmxpcCBob3Jpem9udGFsIGFuZCByb3RhdGUgcmlnaHQgOTDCsFxuICAgICAgY2FzZSA3OlxuICAgICAgICByb3RhdGUgPSA5MDtcbiAgICAgICAgc2NhbGVYID0gLTE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBSb3RhdGUgbGVmdCA5MMKwXG4gICAgICBjYXNlIDg6XG4gICAgICAgIHJvdGF0ZSA9IC05MDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICByb3RhdGU6IHJvdGF0ZSxcbiAgICAgIHNjYWxlWDogc2NhbGVYLFxuICAgICAgc2NhbGVZOiBzY2FsZVlcbiAgICB9O1xuICB9XG5cbiAgdmFyIHJlbmRlciA9IHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHRoaXMuaW5pdENvbnRhaW5lcigpO1xuICAgICAgdGhpcy5pbml0Q2FudmFzKCk7XG4gICAgICB0aGlzLmluaXRDcm9wQm94KCk7XG4gICAgICB0aGlzLnJlbmRlckNhbnZhcygpO1xuICAgICAgaWYgKHRoaXMuY3JvcHBlZCkge1xuICAgICAgICB0aGlzLnJlbmRlckNyb3BCb3goKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGluaXRDb250YWluZXI6IGZ1bmN0aW9uIGluaXRDb250YWluZXIoKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgY29udGFpbmVyID0gdGhpcy5jb250YWluZXIsXG4gICAgICAgIGNyb3BwZXIgPSB0aGlzLmNyb3BwZXI7XG4gICAgICB2YXIgbWluV2lkdGggPSBOdW1iZXIob3B0aW9ucy5taW5Db250YWluZXJXaWR0aCk7XG4gICAgICB2YXIgbWluSGVpZ2h0ID0gTnVtYmVyKG9wdGlvbnMubWluQ29udGFpbmVySGVpZ2h0KTtcbiAgICAgIGFkZENsYXNzKGNyb3BwZXIsIENMQVNTX0hJRERFTik7XG4gICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBDTEFTU19ISURERU4pO1xuICAgICAgdmFyIGNvbnRhaW5lckRhdGEgPSB7XG4gICAgICAgIHdpZHRoOiBNYXRoLm1heChjb250YWluZXIub2Zmc2V0V2lkdGgsIG1pbldpZHRoID49IDAgPyBtaW5XaWR0aCA6IE1JTl9DT05UQUlORVJfV0lEVEgpLFxuICAgICAgICBoZWlnaHQ6IE1hdGgubWF4KGNvbnRhaW5lci5vZmZzZXRIZWlnaHQsIG1pbkhlaWdodCA+PSAwID8gbWluSGVpZ2h0IDogTUlOX0NPTlRBSU5FUl9IRUlHSFQpXG4gICAgICB9O1xuICAgICAgdGhpcy5jb250YWluZXJEYXRhID0gY29udGFpbmVyRGF0YTtcbiAgICAgIHNldFN0eWxlKGNyb3BwZXIsIHtcbiAgICAgICAgd2lkdGg6IGNvbnRhaW5lckRhdGEud2lkdGgsXG4gICAgICAgIGhlaWdodDogY29udGFpbmVyRGF0YS5oZWlnaHRcbiAgICAgIH0pO1xuICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgQ0xBU1NfSElEREVOKTtcbiAgICAgIHJlbW92ZUNsYXNzKGNyb3BwZXIsIENMQVNTX0hJRERFTik7XG4gICAgfSxcbiAgICAvLyBDYW52YXMgKGltYWdlIHdyYXBwZXIpXG4gICAgaW5pdENhbnZhczogZnVuY3Rpb24gaW5pdENhbnZhcygpIHtcbiAgICAgIHZhciBjb250YWluZXJEYXRhID0gdGhpcy5jb250YWluZXJEYXRhLFxuICAgICAgICBpbWFnZURhdGEgPSB0aGlzLmltYWdlRGF0YTtcbiAgICAgIHZhciB2aWV3TW9kZSA9IHRoaXMub3B0aW9ucy52aWV3TW9kZTtcbiAgICAgIHZhciByb3RhdGVkID0gTWF0aC5hYnMoaW1hZ2VEYXRhLnJvdGF0ZSkgJSAxODAgPT09IDkwO1xuICAgICAgdmFyIG5hdHVyYWxXaWR0aCA9IHJvdGF0ZWQgPyBpbWFnZURhdGEubmF0dXJhbEhlaWdodCA6IGltYWdlRGF0YS5uYXR1cmFsV2lkdGg7XG4gICAgICB2YXIgbmF0dXJhbEhlaWdodCA9IHJvdGF0ZWQgPyBpbWFnZURhdGEubmF0dXJhbFdpZHRoIDogaW1hZ2VEYXRhLm5hdHVyYWxIZWlnaHQ7XG4gICAgICB2YXIgYXNwZWN0UmF0aW8gPSBuYXR1cmFsV2lkdGggLyBuYXR1cmFsSGVpZ2h0O1xuICAgICAgdmFyIGNhbnZhc1dpZHRoID0gY29udGFpbmVyRGF0YS53aWR0aDtcbiAgICAgIHZhciBjYW52YXNIZWlnaHQgPSBjb250YWluZXJEYXRhLmhlaWdodDtcbiAgICAgIGlmIChjb250YWluZXJEYXRhLmhlaWdodCAqIGFzcGVjdFJhdGlvID4gY29udGFpbmVyRGF0YS53aWR0aCkge1xuICAgICAgICBpZiAodmlld01vZGUgPT09IDMpIHtcbiAgICAgICAgICBjYW52YXNXaWR0aCA9IGNvbnRhaW5lckRhdGEuaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FudmFzSGVpZ2h0ID0gY29udGFpbmVyRGF0YS53aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHZpZXdNb2RlID09PSAzKSB7XG4gICAgICAgIGNhbnZhc0hlaWdodCA9IGNvbnRhaW5lckRhdGEud2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbnZhc1dpZHRoID0gY29udGFpbmVyRGF0YS5oZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgIH1cbiAgICAgIHZhciBjYW52YXNEYXRhID0ge1xuICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICAgIG5hdHVyYWxXaWR0aDogbmF0dXJhbFdpZHRoLFxuICAgICAgICBuYXR1cmFsSGVpZ2h0OiBuYXR1cmFsSGVpZ2h0LFxuICAgICAgICB3aWR0aDogY2FudmFzV2lkdGgsXG4gICAgICAgIGhlaWdodDogY2FudmFzSGVpZ2h0XG4gICAgICB9O1xuICAgICAgdGhpcy5jYW52YXNEYXRhID0gY2FudmFzRGF0YTtcbiAgICAgIHRoaXMubGltaXRlZCA9IHZpZXdNb2RlID09PSAxIHx8IHZpZXdNb2RlID09PSAyO1xuICAgICAgdGhpcy5saW1pdENhbnZhcyh0cnVlLCB0cnVlKTtcbiAgICAgIGNhbnZhc0RhdGEud2lkdGggPSBNYXRoLm1pbihNYXRoLm1heChjYW52YXNEYXRhLndpZHRoLCBjYW52YXNEYXRhLm1pbldpZHRoKSwgY2FudmFzRGF0YS5tYXhXaWR0aCk7XG4gICAgICBjYW52YXNEYXRhLmhlaWdodCA9IE1hdGgubWluKE1hdGgubWF4KGNhbnZhc0RhdGEuaGVpZ2h0LCBjYW52YXNEYXRhLm1pbkhlaWdodCksIGNhbnZhc0RhdGEubWF4SGVpZ2h0KTtcbiAgICAgIGNhbnZhc0RhdGEubGVmdCA9IChjb250YWluZXJEYXRhLndpZHRoIC0gY2FudmFzRGF0YS53aWR0aCkgLyAyO1xuICAgICAgY2FudmFzRGF0YS50b3AgPSAoY29udGFpbmVyRGF0YS5oZWlnaHQgLSBjYW52YXNEYXRhLmhlaWdodCkgLyAyO1xuICAgICAgY2FudmFzRGF0YS5vbGRMZWZ0ID0gY2FudmFzRGF0YS5sZWZ0O1xuICAgICAgY2FudmFzRGF0YS5vbGRUb3AgPSBjYW52YXNEYXRhLnRvcDtcbiAgICAgIHRoaXMuaW5pdGlhbENhbnZhc0RhdGEgPSBhc3NpZ24oe30sIGNhbnZhc0RhdGEpO1xuICAgIH0sXG4gICAgbGltaXRDYW52YXM6IGZ1bmN0aW9uIGxpbWl0Q2FudmFzKHNpemVMaW1pdGVkLCBwb3NpdGlvbkxpbWl0ZWQpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBjb250YWluZXJEYXRhID0gdGhpcy5jb250YWluZXJEYXRhLFxuICAgICAgICBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhLFxuICAgICAgICBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGE7XG4gICAgICB2YXIgdmlld01vZGUgPSBvcHRpb25zLnZpZXdNb2RlO1xuICAgICAgdmFyIGFzcGVjdFJhdGlvID0gY2FudmFzRGF0YS5hc3BlY3RSYXRpbztcbiAgICAgIHZhciBjcm9wcGVkID0gdGhpcy5jcm9wcGVkICYmIGNyb3BCb3hEYXRhO1xuICAgICAgaWYgKHNpemVMaW1pdGVkKSB7XG4gICAgICAgIHZhciBtaW5DYW52YXNXaWR0aCA9IE51bWJlcihvcHRpb25zLm1pbkNhbnZhc1dpZHRoKSB8fCAwO1xuICAgICAgICB2YXIgbWluQ2FudmFzSGVpZ2h0ID0gTnVtYmVyKG9wdGlvbnMubWluQ2FudmFzSGVpZ2h0KSB8fCAwO1xuICAgICAgICBpZiAodmlld01vZGUgPiAxKSB7XG4gICAgICAgICAgbWluQ2FudmFzV2lkdGggPSBNYXRoLm1heChtaW5DYW52YXNXaWR0aCwgY29udGFpbmVyRGF0YS53aWR0aCk7XG4gICAgICAgICAgbWluQ2FudmFzSGVpZ2h0ID0gTWF0aC5tYXgobWluQ2FudmFzSGVpZ2h0LCBjb250YWluZXJEYXRhLmhlaWdodCk7XG4gICAgICAgICAgaWYgKHZpZXdNb2RlID09PSAzKSB7XG4gICAgICAgICAgICBpZiAobWluQ2FudmFzSGVpZ2h0ICogYXNwZWN0UmF0aW8gPiBtaW5DYW52YXNXaWR0aCkge1xuICAgICAgICAgICAgICBtaW5DYW52YXNXaWR0aCA9IG1pbkNhbnZhc0hlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWluQ2FudmFzSGVpZ2h0ID0gbWluQ2FudmFzV2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodmlld01vZGUgPiAwKSB7XG4gICAgICAgICAgaWYgKG1pbkNhbnZhc1dpZHRoKSB7XG4gICAgICAgICAgICBtaW5DYW52YXNXaWR0aCA9IE1hdGgubWF4KG1pbkNhbnZhc1dpZHRoLCBjcm9wcGVkID8gY3JvcEJveERhdGEud2lkdGggOiAwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1pbkNhbnZhc0hlaWdodCkge1xuICAgICAgICAgICAgbWluQ2FudmFzSGVpZ2h0ID0gTWF0aC5tYXgobWluQ2FudmFzSGVpZ2h0LCBjcm9wcGVkID8gY3JvcEJveERhdGEuaGVpZ2h0IDogMCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjcm9wcGVkKSB7XG4gICAgICAgICAgICBtaW5DYW52YXNXaWR0aCA9IGNyb3BCb3hEYXRhLndpZHRoO1xuICAgICAgICAgICAgbWluQ2FudmFzSGVpZ2h0ID0gY3JvcEJveERhdGEuaGVpZ2h0O1xuICAgICAgICAgICAgaWYgKG1pbkNhbnZhc0hlaWdodCAqIGFzcGVjdFJhdGlvID4gbWluQ2FudmFzV2lkdGgpIHtcbiAgICAgICAgICAgICAgbWluQ2FudmFzV2lkdGggPSBtaW5DYW52YXNIZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1pbkNhbnZhc0hlaWdodCA9IG1pbkNhbnZhc1dpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICB3aWR0aDogbWluQ2FudmFzV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBtaW5DYW52YXNIZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICAgIG1pbkNhbnZhc1dpZHRoID0gX2dldEFkanVzdGVkU2l6ZXMud2lkdGg7XG4gICAgICAgIG1pbkNhbnZhc0hlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzLmhlaWdodDtcbiAgICAgICAgY2FudmFzRGF0YS5taW5XaWR0aCA9IG1pbkNhbnZhc1dpZHRoO1xuICAgICAgICBjYW52YXNEYXRhLm1pbkhlaWdodCA9IG1pbkNhbnZhc0hlaWdodDtcbiAgICAgICAgY2FudmFzRGF0YS5tYXhXaWR0aCA9IEluZmluaXR5O1xuICAgICAgICBjYW52YXNEYXRhLm1heEhlaWdodCA9IEluZmluaXR5O1xuICAgICAgfVxuICAgICAgaWYgKHBvc2l0aW9uTGltaXRlZCkge1xuICAgICAgICBpZiAodmlld01vZGUgPiAoY3JvcHBlZCA/IDAgOiAxKSkge1xuICAgICAgICAgIHZhciBuZXdDYW52YXNMZWZ0ID0gY29udGFpbmVyRGF0YS53aWR0aCAtIGNhbnZhc0RhdGEud2lkdGg7XG4gICAgICAgICAgdmFyIG5ld0NhbnZhc1RvcCA9IGNvbnRhaW5lckRhdGEuaGVpZ2h0IC0gY2FudmFzRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgY2FudmFzRGF0YS5taW5MZWZ0ID0gTWF0aC5taW4oMCwgbmV3Q2FudmFzTGVmdCk7XG4gICAgICAgICAgY2FudmFzRGF0YS5taW5Ub3AgPSBNYXRoLm1pbigwLCBuZXdDYW52YXNUb3ApO1xuICAgICAgICAgIGNhbnZhc0RhdGEubWF4TGVmdCA9IE1hdGgubWF4KDAsIG5ld0NhbnZhc0xlZnQpO1xuICAgICAgICAgIGNhbnZhc0RhdGEubWF4VG9wID0gTWF0aC5tYXgoMCwgbmV3Q2FudmFzVG9wKTtcbiAgICAgICAgICBpZiAoY3JvcHBlZCAmJiB0aGlzLmxpbWl0ZWQpIHtcbiAgICAgICAgICAgIGNhbnZhc0RhdGEubWluTGVmdCA9IE1hdGgubWluKGNyb3BCb3hEYXRhLmxlZnQsIGNyb3BCb3hEYXRhLmxlZnQgKyAoY3JvcEJveERhdGEud2lkdGggLSBjYW52YXNEYXRhLndpZHRoKSk7XG4gICAgICAgICAgICBjYW52YXNEYXRhLm1pblRvcCA9IE1hdGgubWluKGNyb3BCb3hEYXRhLnRvcCwgY3JvcEJveERhdGEudG9wICsgKGNyb3BCb3hEYXRhLmhlaWdodCAtIGNhbnZhc0RhdGEuaGVpZ2h0KSk7XG4gICAgICAgICAgICBjYW52YXNEYXRhLm1heExlZnQgPSBjcm9wQm94RGF0YS5sZWZ0O1xuICAgICAgICAgICAgY2FudmFzRGF0YS5tYXhUb3AgPSBjcm9wQm94RGF0YS50b3A7XG4gICAgICAgICAgICBpZiAodmlld01vZGUgPT09IDIpIHtcbiAgICAgICAgICAgICAgaWYgKGNhbnZhc0RhdGEud2lkdGggPj0gY29udGFpbmVyRGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgIGNhbnZhc0RhdGEubWluTGVmdCA9IE1hdGgubWluKDAsIG5ld0NhbnZhc0xlZnQpO1xuICAgICAgICAgICAgICAgIGNhbnZhc0RhdGEubWF4TGVmdCA9IE1hdGgubWF4KDAsIG5ld0NhbnZhc0xlZnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChjYW52YXNEYXRhLmhlaWdodCA+PSBjb250YWluZXJEYXRhLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGNhbnZhc0RhdGEubWluVG9wID0gTWF0aC5taW4oMCwgbmV3Q2FudmFzVG9wKTtcbiAgICAgICAgICAgICAgICBjYW52YXNEYXRhLm1heFRvcCA9IE1hdGgubWF4KDAsIG5ld0NhbnZhc1RvcCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FudmFzRGF0YS5taW5MZWZ0ID0gLWNhbnZhc0RhdGEud2lkdGg7XG4gICAgICAgICAgY2FudmFzRGF0YS5taW5Ub3AgPSAtY2FudmFzRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgY2FudmFzRGF0YS5tYXhMZWZ0ID0gY29udGFpbmVyRGF0YS53aWR0aDtcbiAgICAgICAgICBjYW52YXNEYXRhLm1heFRvcCA9IGNvbnRhaW5lckRhdGEuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICByZW5kZXJDYW52YXM6IGZ1bmN0aW9uIHJlbmRlckNhbnZhcyhjaGFuZ2VkLCB0cmFuc2Zvcm1lZCkge1xuICAgICAgdmFyIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGEsXG4gICAgICAgIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhO1xuICAgICAgaWYgKHRyYW5zZm9ybWVkKSB7XG4gICAgICAgIHZhciBfZ2V0Um90YXRlZFNpemVzID0gZ2V0Um90YXRlZFNpemVzKHtcbiAgICAgICAgICAgIHdpZHRoOiBpbWFnZURhdGEubmF0dXJhbFdpZHRoICogTWF0aC5hYnMoaW1hZ2VEYXRhLnNjYWxlWCB8fCAxKSxcbiAgICAgICAgICAgIGhlaWdodDogaW1hZ2VEYXRhLm5hdHVyYWxIZWlnaHQgKiBNYXRoLmFicyhpbWFnZURhdGEuc2NhbGVZIHx8IDEpLFxuICAgICAgICAgICAgZGVncmVlOiBpbWFnZURhdGEucm90YXRlIHx8IDBcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuYXR1cmFsV2lkdGggPSBfZ2V0Um90YXRlZFNpemVzLndpZHRoLFxuICAgICAgICAgIG5hdHVyYWxIZWlnaHQgPSBfZ2V0Um90YXRlZFNpemVzLmhlaWdodDtcbiAgICAgICAgdmFyIHdpZHRoID0gY2FudmFzRGF0YS53aWR0aCAqIChuYXR1cmFsV2lkdGggLyBjYW52YXNEYXRhLm5hdHVyYWxXaWR0aCk7XG4gICAgICAgIHZhciBoZWlnaHQgPSBjYW52YXNEYXRhLmhlaWdodCAqIChuYXR1cmFsSGVpZ2h0IC8gY2FudmFzRGF0YS5uYXR1cmFsSGVpZ2h0KTtcbiAgICAgICAgY2FudmFzRGF0YS5sZWZ0IC09ICh3aWR0aCAtIGNhbnZhc0RhdGEud2lkdGgpIC8gMjtcbiAgICAgICAgY2FudmFzRGF0YS50b3AgLT0gKGhlaWdodCAtIGNhbnZhc0RhdGEuaGVpZ2h0KSAvIDI7XG4gICAgICAgIGNhbnZhc0RhdGEud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzRGF0YS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGNhbnZhc0RhdGEuYXNwZWN0UmF0aW8gPSBuYXR1cmFsV2lkdGggLyBuYXR1cmFsSGVpZ2h0O1xuICAgICAgICBjYW52YXNEYXRhLm5hdHVyYWxXaWR0aCA9IG5hdHVyYWxXaWR0aDtcbiAgICAgICAgY2FudmFzRGF0YS5uYXR1cmFsSGVpZ2h0ID0gbmF0dXJhbEhlaWdodDtcbiAgICAgICAgdGhpcy5saW1pdENhbnZhcyh0cnVlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAoY2FudmFzRGF0YS53aWR0aCA+IGNhbnZhc0RhdGEubWF4V2lkdGggfHwgY2FudmFzRGF0YS53aWR0aCA8IGNhbnZhc0RhdGEubWluV2lkdGgpIHtcbiAgICAgICAgY2FudmFzRGF0YS5sZWZ0ID0gY2FudmFzRGF0YS5vbGRMZWZ0O1xuICAgICAgfVxuICAgICAgaWYgKGNhbnZhc0RhdGEuaGVpZ2h0ID4gY2FudmFzRGF0YS5tYXhIZWlnaHQgfHwgY2FudmFzRGF0YS5oZWlnaHQgPCBjYW52YXNEYXRhLm1pbkhlaWdodCkge1xuICAgICAgICBjYW52YXNEYXRhLnRvcCA9IGNhbnZhc0RhdGEub2xkVG9wO1xuICAgICAgfVxuICAgICAgY2FudmFzRGF0YS53aWR0aCA9IE1hdGgubWluKE1hdGgubWF4KGNhbnZhc0RhdGEud2lkdGgsIGNhbnZhc0RhdGEubWluV2lkdGgpLCBjYW52YXNEYXRhLm1heFdpZHRoKTtcbiAgICAgIGNhbnZhc0RhdGEuaGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgoY2FudmFzRGF0YS5oZWlnaHQsIGNhbnZhc0RhdGEubWluSGVpZ2h0KSwgY2FudmFzRGF0YS5tYXhIZWlnaHQpO1xuICAgICAgdGhpcy5saW1pdENhbnZhcyhmYWxzZSwgdHJ1ZSk7XG4gICAgICBjYW52YXNEYXRhLmxlZnQgPSBNYXRoLm1pbihNYXRoLm1heChjYW52YXNEYXRhLmxlZnQsIGNhbnZhc0RhdGEubWluTGVmdCksIGNhbnZhc0RhdGEubWF4TGVmdCk7XG4gICAgICBjYW52YXNEYXRhLnRvcCA9IE1hdGgubWluKE1hdGgubWF4KGNhbnZhc0RhdGEudG9wLCBjYW52YXNEYXRhLm1pblRvcCksIGNhbnZhc0RhdGEubWF4VG9wKTtcbiAgICAgIGNhbnZhc0RhdGEub2xkTGVmdCA9IGNhbnZhc0RhdGEubGVmdDtcbiAgICAgIGNhbnZhc0RhdGEub2xkVG9wID0gY2FudmFzRGF0YS50b3A7XG4gICAgICBzZXRTdHlsZSh0aGlzLmNhbnZhcywgYXNzaWduKHtcbiAgICAgICAgd2lkdGg6IGNhbnZhc0RhdGEud2lkdGgsXG4gICAgICAgIGhlaWdodDogY2FudmFzRGF0YS5oZWlnaHRcbiAgICAgIH0sIGdldFRyYW5zZm9ybXMoe1xuICAgICAgICB0cmFuc2xhdGVYOiBjYW52YXNEYXRhLmxlZnQsXG4gICAgICAgIHRyYW5zbGF0ZVk6IGNhbnZhc0RhdGEudG9wXG4gICAgICB9KSkpO1xuICAgICAgdGhpcy5yZW5kZXJJbWFnZShjaGFuZ2VkKTtcbiAgICAgIGlmICh0aGlzLmNyb3BwZWQgJiYgdGhpcy5saW1pdGVkKSB7XG4gICAgICAgIHRoaXMubGltaXRDcm9wQm94KHRydWUsIHRydWUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVuZGVySW1hZ2U6IGZ1bmN0aW9uIHJlbmRlckltYWdlKGNoYW5nZWQpIHtcbiAgICAgIHZhciBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhLFxuICAgICAgICBpbWFnZURhdGEgPSB0aGlzLmltYWdlRGF0YTtcbiAgICAgIHZhciB3aWR0aCA9IGltYWdlRGF0YS5uYXR1cmFsV2lkdGggKiAoY2FudmFzRGF0YS53aWR0aCAvIGNhbnZhc0RhdGEubmF0dXJhbFdpZHRoKTtcbiAgICAgIHZhciBoZWlnaHQgPSBpbWFnZURhdGEubmF0dXJhbEhlaWdodCAqIChjYW52YXNEYXRhLmhlaWdodCAvIGNhbnZhc0RhdGEubmF0dXJhbEhlaWdodCk7XG4gICAgICBhc3NpZ24oaW1hZ2VEYXRhLCB7XG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIGxlZnQ6IChjYW52YXNEYXRhLndpZHRoIC0gd2lkdGgpIC8gMixcbiAgICAgICAgdG9wOiAoY2FudmFzRGF0YS5oZWlnaHQgLSBoZWlnaHQpIC8gMlxuICAgICAgfSk7XG4gICAgICBzZXRTdHlsZSh0aGlzLmltYWdlLCBhc3NpZ24oe1xuICAgICAgICB3aWR0aDogaW1hZ2VEYXRhLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGltYWdlRGF0YS5oZWlnaHRcbiAgICAgIH0sIGdldFRyYW5zZm9ybXMoYXNzaWduKHtcbiAgICAgICAgdHJhbnNsYXRlWDogaW1hZ2VEYXRhLmxlZnQsXG4gICAgICAgIHRyYW5zbGF0ZVk6IGltYWdlRGF0YS50b3BcbiAgICAgIH0sIGltYWdlRGF0YSkpKSk7XG4gICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICB0aGlzLm91dHB1dCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5pdENyb3BCb3g6IGZ1bmN0aW9uIGluaXRDcm9wQm94KCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGE7XG4gICAgICB2YXIgYXNwZWN0UmF0aW8gPSBvcHRpb25zLmFzcGVjdFJhdGlvIHx8IG9wdGlvbnMuaW5pdGlhbEFzcGVjdFJhdGlvO1xuICAgICAgdmFyIGF1dG9Dcm9wQXJlYSA9IE51bWJlcihvcHRpb25zLmF1dG9Dcm9wQXJlYSkgfHwgMC44O1xuICAgICAgdmFyIGNyb3BCb3hEYXRhID0ge1xuICAgICAgICB3aWR0aDogY2FudmFzRGF0YS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjYW52YXNEYXRhLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGlmIChhc3BlY3RSYXRpbykge1xuICAgICAgICBpZiAoY2FudmFzRGF0YS5oZWlnaHQgKiBhc3BlY3RSYXRpbyA+IGNhbnZhc0RhdGEud2lkdGgpIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS5oZWlnaHQgPSBjcm9wQm94RGF0YS53aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNyb3BCb3hEYXRhLndpZHRoID0gY3JvcEJveERhdGEuaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY3JvcEJveERhdGEgPSBjcm9wQm94RGF0YTtcbiAgICAgIHRoaXMubGltaXRDcm9wQm94KHRydWUsIHRydWUpO1xuXG4gICAgICAvLyBJbml0aWFsaXplIGF1dG8gY3JvcCBhcmVhXG4gICAgICBjcm9wQm94RGF0YS53aWR0aCA9IE1hdGgubWluKE1hdGgubWF4KGNyb3BCb3hEYXRhLndpZHRoLCBjcm9wQm94RGF0YS5taW5XaWR0aCksIGNyb3BCb3hEYXRhLm1heFdpZHRoKTtcbiAgICAgIGNyb3BCb3hEYXRhLmhlaWdodCA9IE1hdGgubWluKE1hdGgubWF4KGNyb3BCb3hEYXRhLmhlaWdodCwgY3JvcEJveERhdGEubWluSGVpZ2h0KSwgY3JvcEJveERhdGEubWF4SGVpZ2h0KTtcblxuICAgICAgLy8gVGhlIHdpZHRoL2hlaWdodCBvZiBhdXRvIGNyb3AgYXJlYSBtdXN0IGxhcmdlIHRoYW4gXCJtaW5XaWR0aC9IZWlnaHRcIlxuICAgICAgY3JvcEJveERhdGEud2lkdGggPSBNYXRoLm1heChjcm9wQm94RGF0YS5taW5XaWR0aCwgY3JvcEJveERhdGEud2lkdGggKiBhdXRvQ3JvcEFyZWEpO1xuICAgICAgY3JvcEJveERhdGEuaGVpZ2h0ID0gTWF0aC5tYXgoY3JvcEJveERhdGEubWluSGVpZ2h0LCBjcm9wQm94RGF0YS5oZWlnaHQgKiBhdXRvQ3JvcEFyZWEpO1xuICAgICAgY3JvcEJveERhdGEubGVmdCA9IGNhbnZhc0RhdGEubGVmdCArIChjYW52YXNEYXRhLndpZHRoIC0gY3JvcEJveERhdGEud2lkdGgpIC8gMjtcbiAgICAgIGNyb3BCb3hEYXRhLnRvcCA9IGNhbnZhc0RhdGEudG9wICsgKGNhbnZhc0RhdGEuaGVpZ2h0IC0gY3JvcEJveERhdGEuaGVpZ2h0KSAvIDI7XG4gICAgICBjcm9wQm94RGF0YS5vbGRMZWZ0ID0gY3JvcEJveERhdGEubGVmdDtcbiAgICAgIGNyb3BCb3hEYXRhLm9sZFRvcCA9IGNyb3BCb3hEYXRhLnRvcDtcbiAgICAgIHRoaXMuaW5pdGlhbENyb3BCb3hEYXRhID0gYXNzaWduKHt9LCBjcm9wQm94RGF0YSk7XG4gICAgfSxcbiAgICBsaW1pdENyb3BCb3g6IGZ1bmN0aW9uIGxpbWl0Q3JvcEJveChzaXplTGltaXRlZCwgcG9zaXRpb25MaW1pdGVkKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgY29udGFpbmVyRGF0YSA9IHRoaXMuY29udGFpbmVyRGF0YSxcbiAgICAgICAgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YSxcbiAgICAgICAgY3JvcEJveERhdGEgPSB0aGlzLmNyb3BCb3hEYXRhLFxuICAgICAgICBsaW1pdGVkID0gdGhpcy5saW1pdGVkO1xuICAgICAgdmFyIGFzcGVjdFJhdGlvID0gb3B0aW9ucy5hc3BlY3RSYXRpbztcbiAgICAgIGlmIChzaXplTGltaXRlZCkge1xuICAgICAgICB2YXIgbWluQ3JvcEJveFdpZHRoID0gTnVtYmVyKG9wdGlvbnMubWluQ3JvcEJveFdpZHRoKSB8fCAwO1xuICAgICAgICB2YXIgbWluQ3JvcEJveEhlaWdodCA9IE51bWJlcihvcHRpb25zLm1pbkNyb3BCb3hIZWlnaHQpIHx8IDA7XG4gICAgICAgIHZhciBtYXhDcm9wQm94V2lkdGggPSBsaW1pdGVkID8gTWF0aC5taW4oY29udGFpbmVyRGF0YS53aWR0aCwgY2FudmFzRGF0YS53aWR0aCwgY2FudmFzRGF0YS53aWR0aCArIGNhbnZhc0RhdGEubGVmdCwgY29udGFpbmVyRGF0YS53aWR0aCAtIGNhbnZhc0RhdGEubGVmdCkgOiBjb250YWluZXJEYXRhLndpZHRoO1xuICAgICAgICB2YXIgbWF4Q3JvcEJveEhlaWdodCA9IGxpbWl0ZWQgPyBNYXRoLm1pbihjb250YWluZXJEYXRhLmhlaWdodCwgY2FudmFzRGF0YS5oZWlnaHQsIGNhbnZhc0RhdGEuaGVpZ2h0ICsgY2FudmFzRGF0YS50b3AsIGNvbnRhaW5lckRhdGEuaGVpZ2h0IC0gY2FudmFzRGF0YS50b3ApIDogY29udGFpbmVyRGF0YS5oZWlnaHQ7XG5cbiAgICAgICAgLy8gVGhlIG1pbi9tYXhDcm9wQm94V2lkdGgvSGVpZ2h0IG11c3QgYmUgbGVzcyB0aGFuIGNvbnRhaW5lcidzIHdpZHRoL2hlaWdodFxuICAgICAgICBtaW5Dcm9wQm94V2lkdGggPSBNYXRoLm1pbihtaW5Dcm9wQm94V2lkdGgsIGNvbnRhaW5lckRhdGEud2lkdGgpO1xuICAgICAgICBtaW5Dcm9wQm94SGVpZ2h0ID0gTWF0aC5taW4obWluQ3JvcEJveEhlaWdodCwgY29udGFpbmVyRGF0YS5oZWlnaHQpO1xuICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICBpZiAobWluQ3JvcEJveFdpZHRoICYmIG1pbkNyb3BCb3hIZWlnaHQpIHtcbiAgICAgICAgICAgIGlmIChtaW5Dcm9wQm94SGVpZ2h0ICogYXNwZWN0UmF0aW8gPiBtaW5Dcm9wQm94V2lkdGgpIHtcbiAgICAgICAgICAgICAgbWluQ3JvcEJveEhlaWdodCA9IG1pbkNyb3BCb3hXaWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWluQ3JvcEJveFdpZHRoID0gbWluQ3JvcEJveEhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAobWluQ3JvcEJveFdpZHRoKSB7XG4gICAgICAgICAgICBtaW5Dcm9wQm94SGVpZ2h0ID0gbWluQ3JvcEJveFdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgfSBlbHNlIGlmIChtaW5Dcm9wQm94SGVpZ2h0KSB7XG4gICAgICAgICAgICBtaW5Dcm9wQm94V2lkdGggPSBtaW5Dcm9wQm94SGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtYXhDcm9wQm94SGVpZ2h0ICogYXNwZWN0UmF0aW8gPiBtYXhDcm9wQm94V2lkdGgpIHtcbiAgICAgICAgICAgIG1heENyb3BCb3hIZWlnaHQgPSBtYXhDcm9wQm94V2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF4Q3JvcEJveFdpZHRoID0gbWF4Q3JvcEJveEhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBtaW5XaWR0aC9IZWlnaHQgbXVzdCBiZSBsZXNzIHRoYW4gbWF4V2lkdGgvSGVpZ2h0XG4gICAgICAgIGNyb3BCb3hEYXRhLm1pbldpZHRoID0gTWF0aC5taW4obWluQ3JvcEJveFdpZHRoLCBtYXhDcm9wQm94V2lkdGgpO1xuICAgICAgICBjcm9wQm94RGF0YS5taW5IZWlnaHQgPSBNYXRoLm1pbihtaW5Dcm9wQm94SGVpZ2h0LCBtYXhDcm9wQm94SGVpZ2h0KTtcbiAgICAgICAgY3JvcEJveERhdGEubWF4V2lkdGggPSBtYXhDcm9wQm94V2lkdGg7XG4gICAgICAgIGNyb3BCb3hEYXRhLm1heEhlaWdodCA9IG1heENyb3BCb3hIZWlnaHQ7XG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpb25MaW1pdGVkKSB7XG4gICAgICAgIGlmIChsaW1pdGVkKSB7XG4gICAgICAgICAgY3JvcEJveERhdGEubWluTGVmdCA9IE1hdGgubWF4KDAsIGNhbnZhc0RhdGEubGVmdCk7XG4gICAgICAgICAgY3JvcEJveERhdGEubWluVG9wID0gTWF0aC5tYXgoMCwgY2FudmFzRGF0YS50b3ApO1xuICAgICAgICAgIGNyb3BCb3hEYXRhLm1heExlZnQgPSBNYXRoLm1pbihjb250YWluZXJEYXRhLndpZHRoLCBjYW52YXNEYXRhLmxlZnQgKyBjYW52YXNEYXRhLndpZHRoKSAtIGNyb3BCb3hEYXRhLndpZHRoO1xuICAgICAgICAgIGNyb3BCb3hEYXRhLm1heFRvcCA9IE1hdGgubWluKGNvbnRhaW5lckRhdGEuaGVpZ2h0LCBjYW52YXNEYXRhLnRvcCArIGNhbnZhc0RhdGEuaGVpZ2h0KSAtIGNyb3BCb3hEYXRhLmhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS5taW5MZWZ0ID0gMDtcbiAgICAgICAgICBjcm9wQm94RGF0YS5taW5Ub3AgPSAwO1xuICAgICAgICAgIGNyb3BCb3hEYXRhLm1heExlZnQgPSBjb250YWluZXJEYXRhLndpZHRoIC0gY3JvcEJveERhdGEud2lkdGg7XG4gICAgICAgICAgY3JvcEJveERhdGEubWF4VG9wID0gY29udGFpbmVyRGF0YS5oZWlnaHQgLSBjcm9wQm94RGF0YS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHJlbmRlckNyb3BCb3g6IGZ1bmN0aW9uIHJlbmRlckNyb3BCb3goKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgY29udGFpbmVyRGF0YSA9IHRoaXMuY29udGFpbmVyRGF0YSxcbiAgICAgICAgY3JvcEJveERhdGEgPSB0aGlzLmNyb3BCb3hEYXRhO1xuICAgICAgaWYgKGNyb3BCb3hEYXRhLndpZHRoID4gY3JvcEJveERhdGEubWF4V2lkdGggfHwgY3JvcEJveERhdGEud2lkdGggPCBjcm9wQm94RGF0YS5taW5XaWR0aCkge1xuICAgICAgICBjcm9wQm94RGF0YS5sZWZ0ID0gY3JvcEJveERhdGEub2xkTGVmdDtcbiAgICAgIH1cbiAgICAgIGlmIChjcm9wQm94RGF0YS5oZWlnaHQgPiBjcm9wQm94RGF0YS5tYXhIZWlnaHQgfHwgY3JvcEJveERhdGEuaGVpZ2h0IDwgY3JvcEJveERhdGEubWluSGVpZ2h0KSB7XG4gICAgICAgIGNyb3BCb3hEYXRhLnRvcCA9IGNyb3BCb3hEYXRhLm9sZFRvcDtcbiAgICAgIH1cbiAgICAgIGNyb3BCb3hEYXRhLndpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgoY3JvcEJveERhdGEud2lkdGgsIGNyb3BCb3hEYXRhLm1pbldpZHRoKSwgY3JvcEJveERhdGEubWF4V2lkdGgpO1xuICAgICAgY3JvcEJveERhdGEuaGVpZ2h0ID0gTWF0aC5taW4oTWF0aC5tYXgoY3JvcEJveERhdGEuaGVpZ2h0LCBjcm9wQm94RGF0YS5taW5IZWlnaHQpLCBjcm9wQm94RGF0YS5tYXhIZWlnaHQpO1xuICAgICAgdGhpcy5saW1pdENyb3BCb3goZmFsc2UsIHRydWUpO1xuICAgICAgY3JvcEJveERhdGEubGVmdCA9IE1hdGgubWluKE1hdGgubWF4KGNyb3BCb3hEYXRhLmxlZnQsIGNyb3BCb3hEYXRhLm1pbkxlZnQpLCBjcm9wQm94RGF0YS5tYXhMZWZ0KTtcbiAgICAgIGNyb3BCb3hEYXRhLnRvcCA9IE1hdGgubWluKE1hdGgubWF4KGNyb3BCb3hEYXRhLnRvcCwgY3JvcEJveERhdGEubWluVG9wKSwgY3JvcEJveERhdGEubWF4VG9wKTtcbiAgICAgIGNyb3BCb3hEYXRhLm9sZExlZnQgPSBjcm9wQm94RGF0YS5sZWZ0O1xuICAgICAgY3JvcEJveERhdGEub2xkVG9wID0gY3JvcEJveERhdGEudG9wO1xuICAgICAgaWYgKG9wdGlvbnMubW92YWJsZSAmJiBvcHRpb25zLmNyb3BCb3hNb3ZhYmxlKSB7XG4gICAgICAgIC8vIFR1cm4gdG8gbW92ZSB0aGUgY2FudmFzIHdoZW4gdGhlIGNyb3AgYm94IGlzIGVxdWFsIHRvIHRoZSBjb250YWluZXJcbiAgICAgICAgc2V0RGF0YSh0aGlzLmZhY2UsIERBVEFfQUNUSU9OLCBjcm9wQm94RGF0YS53aWR0aCA+PSBjb250YWluZXJEYXRhLndpZHRoICYmIGNyb3BCb3hEYXRhLmhlaWdodCA+PSBjb250YWluZXJEYXRhLmhlaWdodCA/IEFDVElPTl9NT1ZFIDogQUNUSU9OX0FMTCk7XG4gICAgICB9XG4gICAgICBzZXRTdHlsZSh0aGlzLmNyb3BCb3gsIGFzc2lnbih7XG4gICAgICAgIHdpZHRoOiBjcm9wQm94RGF0YS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjcm9wQm94RGF0YS5oZWlnaHRcbiAgICAgIH0sIGdldFRyYW5zZm9ybXMoe1xuICAgICAgICB0cmFuc2xhdGVYOiBjcm9wQm94RGF0YS5sZWZ0LFxuICAgICAgICB0cmFuc2xhdGVZOiBjcm9wQm94RGF0YS50b3BcbiAgICAgIH0pKSk7XG4gICAgICBpZiAodGhpcy5jcm9wcGVkICYmIHRoaXMubGltaXRlZCkge1xuICAgICAgICB0aGlzLmxpbWl0Q2FudmFzKHRydWUsIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMub3V0cHV0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvdXRwdXQ6IGZ1bmN0aW9uIG91dHB1dCgpIHtcbiAgICAgIHRoaXMucHJldmlldygpO1xuICAgICAgZGlzcGF0Y2hFdmVudCh0aGlzLmVsZW1lbnQsIEVWRU5UX0NST1AsIHRoaXMuZ2V0RGF0YSgpKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHByZXZpZXcgPSB7XG4gICAgaW5pdFByZXZpZXc6IGZ1bmN0aW9uIGluaXRQcmV2aWV3KCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG4gICAgICAgIGNyb3NzT3JpZ2luID0gdGhpcy5jcm9zc09yaWdpbjtcbiAgICAgIHZhciBwcmV2aWV3ID0gdGhpcy5vcHRpb25zLnByZXZpZXc7XG4gICAgICB2YXIgdXJsID0gY3Jvc3NPcmlnaW4gPyB0aGlzLmNyb3NzT3JpZ2luVXJsIDogdGhpcy51cmw7XG4gICAgICB2YXIgYWx0ID0gZWxlbWVudC5hbHQgfHwgJ1RoZSBpbWFnZSB0byBwcmV2aWV3JztcbiAgICAgIHZhciBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgaWYgKGNyb3NzT3JpZ2luKSB7XG4gICAgICAgIGltYWdlLmNyb3NzT3JpZ2luID0gY3Jvc3NPcmlnaW47XG4gICAgICB9XG4gICAgICBpbWFnZS5zcmMgPSB1cmw7XG4gICAgICBpbWFnZS5hbHQgPSBhbHQ7XG4gICAgICB0aGlzLnZpZXdCb3guYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgdGhpcy52aWV3Qm94SW1hZ2UgPSBpbWFnZTtcbiAgICAgIGlmICghcHJldmlldykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcHJldmlld3MgPSBwcmV2aWV3O1xuICAgICAgaWYgKHR5cGVvZiBwcmV2aWV3ID09PSAnc3RyaW5nJykge1xuICAgICAgICBwcmV2aWV3cyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHByZXZpZXcpO1xuICAgICAgfSBlbHNlIGlmIChwcmV2aWV3LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgcHJldmlld3MgPSBbcHJldmlld107XG4gICAgICB9XG4gICAgICB0aGlzLnByZXZpZXdzID0gcHJldmlld3M7XG4gICAgICBmb3JFYWNoKHByZXZpZXdzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgIC8vIFNhdmUgdGhlIG9yaWdpbmFsIHNpemUgZm9yIHJlY292ZXJcbiAgICAgICAgc2V0RGF0YShlbCwgREFUQV9QUkVWSUVXLCB7XG4gICAgICAgICAgd2lkdGg6IGVsLm9mZnNldFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogZWwub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgIGh0bWw6IGVsLmlubmVySFRNTFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNyb3NzT3JpZ2luKSB7XG4gICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gY3Jvc3NPcmlnaW47XG4gICAgICAgIH1cbiAgICAgICAgaW1nLnNyYyA9IHVybDtcbiAgICAgICAgaW1nLmFsdCA9IGFsdDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT3ZlcnJpZGUgaW1nIGVsZW1lbnQgc3R5bGVzXG4gICAgICAgICAqIEFkZCBgZGlzcGxheTpibG9ja2AgdG8gYXZvaWQgbWFyZ2luIHRvcCBpc3N1ZVxuICAgICAgICAgKiBBZGQgYGhlaWdodDphdXRvYCB0byBvdmVycmlkZSBgaGVpZ2h0YCBhdHRyaWJ1dGUgb24gSUU4XG4gICAgICAgICAqIChPY2N1ciBvbmx5IHdoZW4gbWFyZ2luLXRvcCA8PSAtaGVpZ2h0KVxuICAgICAgICAgKi9cbiAgICAgICAgaW1nLnN0eWxlLmNzc1RleHQgPSAnZGlzcGxheTpibG9jazsnICsgJ3dpZHRoOjEwMCU7JyArICdoZWlnaHQ6YXV0bzsnICsgJ21pbi13aWR0aDowIWltcG9ydGFudDsnICsgJ21pbi1oZWlnaHQ6MCFpbXBvcnRhbnQ7JyArICdtYXgtd2lkdGg6bm9uZSFpbXBvcnRhbnQ7JyArICdtYXgtaGVpZ2h0Om5vbmUhaW1wb3J0YW50OycgKyAnaW1hZ2Utb3JpZW50YXRpb246MGRlZyFpbXBvcnRhbnQ7XCInO1xuICAgICAgICBlbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVzZXRQcmV2aWV3OiBmdW5jdGlvbiByZXNldFByZXZpZXcoKSB7XG4gICAgICBmb3JFYWNoKHRoaXMucHJldmlld3MsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciBkYXRhID0gZ2V0RGF0YShlbGVtZW50LCBEQVRBX1BSRVZJRVcpO1xuICAgICAgICBzZXRTdHlsZShlbGVtZW50LCB7XG4gICAgICAgICAgd2lkdGg6IGRhdGEud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBkYXRhLmhlaWdodFxuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBkYXRhLmh0bWw7XG4gICAgICAgIHJlbW92ZURhdGEoZWxlbWVudCwgREFUQV9QUkVWSUVXKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcHJldmlldzogZnVuY3Rpb24gcHJldmlldygpIHtcbiAgICAgIHZhciBpbWFnZURhdGEgPSB0aGlzLmltYWdlRGF0YSxcbiAgICAgICAgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YSxcbiAgICAgICAgY3JvcEJveERhdGEgPSB0aGlzLmNyb3BCb3hEYXRhO1xuICAgICAgdmFyIGNyb3BCb3hXaWR0aCA9IGNyb3BCb3hEYXRhLndpZHRoLFxuICAgICAgICBjcm9wQm94SGVpZ2h0ID0gY3JvcEJveERhdGEuaGVpZ2h0O1xuICAgICAgdmFyIHdpZHRoID0gaW1hZ2VEYXRhLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBpbWFnZURhdGEuaGVpZ2h0O1xuICAgICAgdmFyIGxlZnQgPSBjcm9wQm94RGF0YS5sZWZ0IC0gY2FudmFzRGF0YS5sZWZ0IC0gaW1hZ2VEYXRhLmxlZnQ7XG4gICAgICB2YXIgdG9wID0gY3JvcEJveERhdGEudG9wIC0gY2FudmFzRGF0YS50b3AgLSBpbWFnZURhdGEudG9wO1xuICAgICAgaWYgKCF0aGlzLmNyb3BwZWQgfHwgdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZXRTdHlsZSh0aGlzLnZpZXdCb3hJbWFnZSwgYXNzaWduKHtcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgfSwgZ2V0VHJhbnNmb3Jtcyhhc3NpZ24oe1xuICAgICAgICB0cmFuc2xhdGVYOiAtbGVmdCxcbiAgICAgICAgdHJhbnNsYXRlWTogLXRvcFxuICAgICAgfSwgaW1hZ2VEYXRhKSkpKTtcbiAgICAgIGZvckVhY2godGhpcy5wcmV2aWV3cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBnZXREYXRhKGVsZW1lbnQsIERBVEFfUFJFVklFVyk7XG4gICAgICAgIHZhciBvcmlnaW5hbFdpZHRoID0gZGF0YS53aWR0aDtcbiAgICAgICAgdmFyIG9yaWdpbmFsSGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG4gICAgICAgIHZhciBuZXdXaWR0aCA9IG9yaWdpbmFsV2lkdGg7XG4gICAgICAgIHZhciBuZXdIZWlnaHQgPSBvcmlnaW5hbEhlaWdodDtcbiAgICAgICAgdmFyIHJhdGlvID0gMTtcbiAgICAgICAgaWYgKGNyb3BCb3hXaWR0aCkge1xuICAgICAgICAgIHJhdGlvID0gb3JpZ2luYWxXaWR0aCAvIGNyb3BCb3hXaWR0aDtcbiAgICAgICAgICBuZXdIZWlnaHQgPSBjcm9wQm94SGVpZ2h0ICogcmF0aW87XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNyb3BCb3hIZWlnaHQgJiYgbmV3SGVpZ2h0ID4gb3JpZ2luYWxIZWlnaHQpIHtcbiAgICAgICAgICByYXRpbyA9IG9yaWdpbmFsSGVpZ2h0IC8gY3JvcEJveEhlaWdodDtcbiAgICAgICAgICBuZXdXaWR0aCA9IGNyb3BCb3hXaWR0aCAqIHJhdGlvO1xuICAgICAgICAgIG5ld0hlaWdodCA9IG9yaWdpbmFsSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHNldFN0eWxlKGVsZW1lbnQsIHtcbiAgICAgICAgICB3aWR0aDogbmV3V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBuZXdIZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFN0eWxlKGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdLCBhc3NpZ24oe1xuICAgICAgICAgIHdpZHRoOiB3aWR0aCAqIHJhdGlvLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0ICogcmF0aW9cbiAgICAgICAgfSwgZ2V0VHJhbnNmb3Jtcyhhc3NpZ24oe1xuICAgICAgICAgIHRyYW5zbGF0ZVg6IC1sZWZ0ICogcmF0aW8sXG4gICAgICAgICAgdHJhbnNsYXRlWTogLXRvcCAqIHJhdGlvXG4gICAgICAgIH0sIGltYWdlRGF0YSkpKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGV2ZW50cyA9IHtcbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGNyb3BwZXIgPSB0aGlzLmNyb3BwZXI7XG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLmNyb3BzdGFydCkpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUF9TVEFSVCwgb3B0aW9ucy5jcm9wc3RhcnQpO1xuICAgICAgfVxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5jcm9wbW92ZSkpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUF9NT1ZFLCBvcHRpb25zLmNyb3Btb3ZlKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY3JvcGVuZCkpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfQ1JPUF9FTkQsIG9wdGlvbnMuY3JvcGVuZCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLmNyb3ApKSB7XG4gICAgICAgIGFkZExpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX0NST1AsIG9wdGlvbnMuY3JvcCk7XG4gICAgICB9XG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLnpvb20pKSB7XG4gICAgICAgIGFkZExpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX1pPT00sIG9wdGlvbnMuem9vbSk7XG4gICAgICB9XG4gICAgICBhZGRMaXN0ZW5lcihjcm9wcGVyLCBFVkVOVF9QT0lOVEVSX0RPV04sIHRoaXMub25Dcm9wU3RhcnQgPSB0aGlzLmNyb3BTdGFydC5iaW5kKHRoaXMpKTtcbiAgICAgIGlmIChvcHRpb25zLnpvb21hYmxlICYmIG9wdGlvbnMuem9vbU9uV2hlZWwpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoY3JvcHBlciwgRVZFTlRfV0hFRUwsIHRoaXMub25XaGVlbCA9IHRoaXMud2hlZWwuYmluZCh0aGlzKSwge1xuICAgICAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgICAgIGNhcHR1cmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy50b2dnbGVEcmFnTW9kZU9uRGJsY2xpY2spIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoY3JvcHBlciwgRVZFTlRfREJMQ0xJQ0ssIHRoaXMub25EYmxjbGljayA9IHRoaXMuZGJsY2xpY2suYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICAgICBhZGRMaXN0ZW5lcihlbGVtZW50Lm93bmVyRG9jdW1lbnQsIEVWRU5UX1BPSU5URVJfTU9WRSwgdGhpcy5vbkNyb3BNb3ZlID0gdGhpcy5jcm9wTW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgIGFkZExpc3RlbmVyKGVsZW1lbnQub3duZXJEb2N1bWVudCwgRVZFTlRfUE9JTlRFUl9VUCwgdGhpcy5vbkNyb3BFbmQgPSB0aGlzLmNyb3BFbmQuYmluZCh0aGlzKSk7XG4gICAgICBpZiAob3B0aW9ucy5yZXNwb25zaXZlKSB7XG4gICAgICAgIGFkZExpc3RlbmVyKHdpbmRvdywgRVZFTlRfUkVTSVpFLCB0aGlzLm9uUmVzaXplID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICAgfSxcbiAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBjcm9wcGVyID0gdGhpcy5jcm9wcGVyO1xuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5jcm9wc3RhcnQpKSB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX0NST1BfU1RBUlQsIG9wdGlvbnMuY3JvcHN0YXJ0KTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY3JvcG1vdmUpKSB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX0NST1BfTU9WRSwgb3B0aW9ucy5jcm9wbW92ZSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLmNyb3BlbmQpKSB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX0NST1BfRU5ELCBvcHRpb25zLmNyb3BlbmQpO1xuICAgICAgfVxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5jcm9wKSkge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9DUk9QLCBvcHRpb25zLmNyb3ApO1xuICAgICAgfVxuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy56b29tKSkge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9aT09NLCBvcHRpb25zLnpvb20pO1xuICAgICAgfVxuICAgICAgcmVtb3ZlTGlzdGVuZXIoY3JvcHBlciwgRVZFTlRfUE9JTlRFUl9ET1dOLCB0aGlzLm9uQ3JvcFN0YXJ0KTtcbiAgICAgIGlmIChvcHRpb25zLnpvb21hYmxlICYmIG9wdGlvbnMuem9vbU9uV2hlZWwpIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIoY3JvcHBlciwgRVZFTlRfV0hFRUwsIHRoaXMub25XaGVlbCwge1xuICAgICAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgICAgIGNhcHR1cmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy50b2dnbGVEcmFnTW9kZU9uRGJsY2xpY2spIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIoY3JvcHBlciwgRVZFTlRfREJMQ0xJQ0ssIHRoaXMub25EYmxjbGljayk7XG4gICAgICB9XG4gICAgICByZW1vdmVMaXN0ZW5lcihlbGVtZW50Lm93bmVyRG9jdW1lbnQsIEVWRU5UX1BPSU5URVJfTU9WRSwgdGhpcy5vbkNyb3BNb3ZlKTtcbiAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQub3duZXJEb2N1bWVudCwgRVZFTlRfUE9JTlRFUl9VUCwgdGhpcy5vbkNyb3BFbmQpO1xuICAgICAgaWYgKG9wdGlvbnMucmVzcG9uc2l2ZSkge1xuICAgICAgICByZW1vdmVMaXN0ZW5lcih3aW5kb3csIEVWRU5UX1JFU0laRSwgdGhpcy5vblJlc2l6ZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVycyA9IHtcbiAgICByZXNpemU6IGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgY29udGFpbmVyRGF0YSA9IHRoaXMuY29udGFpbmVyRGF0YTtcbiAgICAgIHZhciByYXRpb1ggPSBjb250YWluZXIub2Zmc2V0V2lkdGggLyBjb250YWluZXJEYXRhLndpZHRoO1xuICAgICAgdmFyIHJhdGlvWSA9IGNvbnRhaW5lci5vZmZzZXRIZWlnaHQgLyBjb250YWluZXJEYXRhLmhlaWdodDtcbiAgICAgIHZhciByYXRpbyA9IE1hdGguYWJzKHJhdGlvWCAtIDEpID4gTWF0aC5hYnMocmF0aW9ZIC0gMSkgPyByYXRpb1ggOiByYXRpb1k7XG5cbiAgICAgIC8vIFJlc2l6ZSB3aGVuIHdpZHRoIGNoYW5nZWQgb3IgaGVpZ2h0IGNoYW5nZWRcbiAgICAgIGlmIChyYXRpbyAhPT0gMSkge1xuICAgICAgICB2YXIgY2FudmFzRGF0YTtcbiAgICAgICAgdmFyIGNyb3BCb3hEYXRhO1xuICAgICAgICBpZiAob3B0aW9ucy5yZXN0b3JlKSB7XG4gICAgICAgICAgY2FudmFzRGF0YSA9IHRoaXMuZ2V0Q2FudmFzRGF0YSgpO1xuICAgICAgICAgIGNyb3BCb3hEYXRhID0gdGhpcy5nZXRDcm9wQm94RGF0YSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIGlmIChvcHRpb25zLnJlc3RvcmUpIHtcbiAgICAgICAgICB0aGlzLnNldENhbnZhc0RhdGEoZm9yRWFjaChjYW52YXNEYXRhLCBmdW5jdGlvbiAobiwgaSkge1xuICAgICAgICAgICAgY2FudmFzRGF0YVtpXSA9IG4gKiByYXRpbztcbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgdGhpcy5zZXRDcm9wQm94RGF0YShmb3JFYWNoKGNyb3BCb3hEYXRhLCBmdW5jdGlvbiAobiwgaSkge1xuICAgICAgICAgICAgY3JvcEJveERhdGFbaV0gPSBuICogcmF0aW87XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBkYmxjbGljazogZnVuY3Rpb24gZGJsY2xpY2soKSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLm9wdGlvbnMuZHJhZ01vZGUgPT09IERSQUdfTU9ERV9OT05FKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0RHJhZ01vZGUoaGFzQ2xhc3ModGhpcy5kcmFnQm94LCBDTEFTU19DUk9QKSA/IERSQUdfTU9ERV9NT1ZFIDogRFJBR19NT0RFX0NST1ApO1xuICAgIH0sXG4gICAgd2hlZWw6IGZ1bmN0aW9uIHdoZWVsKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyIHJhdGlvID0gTnVtYmVyKHRoaXMub3B0aW9ucy53aGVlbFpvb21SYXRpbykgfHwgMC4xO1xuICAgICAgdmFyIGRlbHRhID0gMTtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIExpbWl0IHdoZWVsIHNwZWVkIHRvIHByZXZlbnQgem9vbSB0b28gZmFzdCAoIzIxKVxuICAgICAgaWYgKHRoaXMud2hlZWxpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy53aGVlbGluZyA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMud2hlZWxpbmcgPSBmYWxzZTtcbiAgICAgIH0sIDUwKTtcbiAgICAgIGlmIChldmVudC5kZWx0YVkpIHtcbiAgICAgICAgZGVsdGEgPSBldmVudC5kZWx0YVkgPiAwID8gMSA6IC0xO1xuICAgICAgfSBlbHNlIGlmIChldmVudC53aGVlbERlbHRhKSB7XG4gICAgICAgIGRlbHRhID0gLWV2ZW50LndoZWVsRGVsdGEgLyAxMjA7XG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmRldGFpbCkge1xuICAgICAgICBkZWx0YSA9IGV2ZW50LmRldGFpbCA+IDAgPyAxIDogLTE7XG4gICAgICB9XG4gICAgICB0aGlzLnpvb20oLWRlbHRhICogcmF0aW8sIGV2ZW50KTtcbiAgICB9LFxuICAgIGNyb3BTdGFydDogZnVuY3Rpb24gY3JvcFN0YXJ0KGV2ZW50KSB7XG4gICAgICB2YXIgYnV0dG9ucyA9IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgIGJ1dHRvbiA9IGV2ZW50LmJ1dHRvbjtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkXG5cbiAgICAgIC8vIEhhbmRsZSBtb3VzZSBldmVudCBhbmQgcG9pbnRlciBldmVudCBhbmQgaWdub3JlIHRvdWNoIGV2ZW50XG4gICAgICB8fCAoZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgfHwgZXZlbnQudHlwZSA9PT0gJ3BvaW50ZXJkb3duJyAmJiBldmVudC5wb2ludGVyVHlwZSA9PT0gJ21vdXNlJykgJiYgKFxuICAgICAgLy8gTm8gcHJpbWFyeSBidXR0b24gKFVzdWFsbHkgdGhlIGxlZnQgYnV0dG9uKVxuICAgICAgaXNOdW1iZXIoYnV0dG9ucykgJiYgYnV0dG9ucyAhPT0gMSB8fCBpc051bWJlcihidXR0b24pICYmIGJ1dHRvbiAhPT0gMFxuXG4gICAgICAvLyBPcGVuIGNvbnRleHQgbWVudVxuICAgICAgfHwgZXZlbnQuY3RybEtleSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHBvaW50ZXJzID0gdGhpcy5wb2ludGVycztcbiAgICAgIHZhciBhY3Rpb247XG4gICAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICAgICAgLy8gSGFuZGxlIHRvdWNoIGV2ZW50XG4gICAgICAgIGZvckVhY2goZXZlbnQuY2hhbmdlZFRvdWNoZXMsIGZ1bmN0aW9uICh0b3VjaCkge1xuICAgICAgICAgIHBvaW50ZXJzW3RvdWNoLmlkZW50aWZpZXJdID0gZ2V0UG9pbnRlcih0b3VjaCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSGFuZGxlIG1vdXNlIGV2ZW50IGFuZCBwb2ludGVyIGV2ZW50XG4gICAgICAgIHBvaW50ZXJzW2V2ZW50LnBvaW50ZXJJZCB8fCAwXSA9IGdldFBvaW50ZXIoZXZlbnQpO1xuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5rZXlzKHBvaW50ZXJzKS5sZW5ndGggPiAxICYmIG9wdGlvbnMuem9vbWFibGUgJiYgb3B0aW9ucy56b29tT25Ub3VjaCkge1xuICAgICAgICBhY3Rpb24gPSBBQ1RJT05fWk9PTTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGlvbiA9IGdldERhdGEoZXZlbnQudGFyZ2V0LCBEQVRBX0FDVElPTik7XG4gICAgICB9XG4gICAgICBpZiAoIVJFR0VYUF9BQ1RJT05TLnRlc3QoYWN0aW9uKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZGlzcGF0Y2hFdmVudCh0aGlzLmVsZW1lbnQsIEVWRU5UX0NST1BfU1RBUlQsIHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICB9KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGlzIGxpbmUgaXMgcmVxdWlyZWQgZm9yIHByZXZlbnRpbmcgcGFnZSB6b29taW5nIGluIGlPUyBicm93c2Vyc1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgICAgdGhpcy5jcm9wcGluZyA9IGZhbHNlO1xuICAgICAgaWYgKGFjdGlvbiA9PT0gQUNUSU9OX0NST1ApIHtcbiAgICAgICAgdGhpcy5jcm9wcGluZyA9IHRydWU7XG4gICAgICAgIGFkZENsYXNzKHRoaXMuZHJhZ0JveCwgQ0xBU1NfTU9EQUwpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY3JvcE1vdmU6IGZ1bmN0aW9uIGNyb3BNb3ZlKGV2ZW50KSB7XG4gICAgICB2YXIgYWN0aW9uID0gdGhpcy5hY3Rpb247XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAhYWN0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBwb2ludGVycyA9IHRoaXMucG9pbnRlcnM7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGRpc3BhdGNoRXZlbnQodGhpcy5lbGVtZW50LCBFVkVOVF9DUk9QX01PVkUsIHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZlbnQsXG4gICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICB9KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICAgIGZvckVhY2goZXZlbnQuY2hhbmdlZFRvdWNoZXMsIGZ1bmN0aW9uICh0b3VjaCkge1xuICAgICAgICAgIC8vIFRoZSBmaXJzdCBwYXJhbWV0ZXIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQgKCM0MzIpXG4gICAgICAgICAgYXNzaWduKHBvaW50ZXJzW3RvdWNoLmlkZW50aWZpZXJdIHx8IHt9LCBnZXRQb2ludGVyKHRvdWNoLCB0cnVlKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXNzaWduKHBvaW50ZXJzW2V2ZW50LnBvaW50ZXJJZCB8fCAwXSB8fCB7fSwgZ2V0UG9pbnRlcihldmVudCwgdHJ1ZSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGFuZ2UoZXZlbnQpO1xuICAgIH0sXG4gICAgY3JvcEVuZDogZnVuY3Rpb24gY3JvcEVuZChldmVudCkge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGFjdGlvbiA9IHRoaXMuYWN0aW9uLFxuICAgICAgICBwb2ludGVycyA9IHRoaXMucG9pbnRlcnM7XG4gICAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICAgICAgZm9yRWFjaChldmVudC5jaGFuZ2VkVG91Y2hlcywgZnVuY3Rpb24gKHRvdWNoKSB7XG4gICAgICAgICAgZGVsZXRlIHBvaW50ZXJzW3RvdWNoLmlkZW50aWZpZXJdO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSBwb2ludGVyc1tldmVudC5wb2ludGVySWQgfHwgMF07XG4gICAgICB9XG4gICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKCFPYmplY3Qua2V5cyhwb2ludGVycykubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gJyc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jcm9wcGluZykge1xuICAgICAgICB0aGlzLmNyb3BwaW5nID0gZmFsc2U7XG4gICAgICAgIHRvZ2dsZUNsYXNzKHRoaXMuZHJhZ0JveCwgQ0xBU1NfTU9EQUwsIHRoaXMuY3JvcHBlZCAmJiB0aGlzLm9wdGlvbnMubW9kYWwpO1xuICAgICAgfVxuICAgICAgZGlzcGF0Y2hFdmVudCh0aGlzLmVsZW1lbnQsIEVWRU5UX0NST1BfRU5ELCB7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjaGFuZ2UgPSB7XG4gICAgY2hhbmdlOiBmdW5jdGlvbiBjaGFuZ2UoZXZlbnQpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhLFxuICAgICAgICBjb250YWluZXJEYXRhID0gdGhpcy5jb250YWluZXJEYXRhLFxuICAgICAgICBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGEsXG4gICAgICAgIHBvaW50ZXJzID0gdGhpcy5wb2ludGVycztcbiAgICAgIHZhciBhY3Rpb24gPSB0aGlzLmFjdGlvbjtcbiAgICAgIHZhciBhc3BlY3RSYXRpbyA9IG9wdGlvbnMuYXNwZWN0UmF0aW87XG4gICAgICB2YXIgbGVmdCA9IGNyb3BCb3hEYXRhLmxlZnQsXG4gICAgICAgIHRvcCA9IGNyb3BCb3hEYXRhLnRvcCxcbiAgICAgICAgd2lkdGggPSBjcm9wQm94RGF0YS53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gY3JvcEJveERhdGEuaGVpZ2h0O1xuICAgICAgdmFyIHJpZ2h0ID0gbGVmdCArIHdpZHRoO1xuICAgICAgdmFyIGJvdHRvbSA9IHRvcCArIGhlaWdodDtcbiAgICAgIHZhciBtaW5MZWZ0ID0gMDtcbiAgICAgIHZhciBtaW5Ub3AgPSAwO1xuICAgICAgdmFyIG1heFdpZHRoID0gY29udGFpbmVyRGF0YS53aWR0aDtcbiAgICAgIHZhciBtYXhIZWlnaHQgPSBjb250YWluZXJEYXRhLmhlaWdodDtcbiAgICAgIHZhciByZW5kZXJhYmxlID0gdHJ1ZTtcbiAgICAgIHZhciBvZmZzZXQ7XG5cbiAgICAgIC8vIExvY2tpbmcgYXNwZWN0IHJhdGlvIGluIFwiZnJlZSBtb2RlXCIgYnkgaG9sZGluZyBzaGlmdCBrZXlcbiAgICAgIGlmICghYXNwZWN0UmF0aW8gJiYgZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgYXNwZWN0UmF0aW8gPSB3aWR0aCAmJiBoZWlnaHQgPyB3aWR0aCAvIGhlaWdodCA6IDE7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5saW1pdGVkKSB7XG4gICAgICAgIG1pbkxlZnQgPSBjcm9wQm94RGF0YS5taW5MZWZ0O1xuICAgICAgICBtaW5Ub3AgPSBjcm9wQm94RGF0YS5taW5Ub3A7XG4gICAgICAgIG1heFdpZHRoID0gbWluTGVmdCArIE1hdGgubWluKGNvbnRhaW5lckRhdGEud2lkdGgsIGNhbnZhc0RhdGEud2lkdGgsIGNhbnZhc0RhdGEubGVmdCArIGNhbnZhc0RhdGEud2lkdGgpO1xuICAgICAgICBtYXhIZWlnaHQgPSBtaW5Ub3AgKyBNYXRoLm1pbihjb250YWluZXJEYXRhLmhlaWdodCwgY2FudmFzRGF0YS5oZWlnaHQsIGNhbnZhc0RhdGEudG9wICsgY2FudmFzRGF0YS5oZWlnaHQpO1xuICAgICAgfVxuICAgICAgdmFyIHBvaW50ZXIgPSBwb2ludGVyc1tPYmplY3Qua2V5cyhwb2ludGVycylbMF1dO1xuICAgICAgdmFyIHJhbmdlID0ge1xuICAgICAgICB4OiBwb2ludGVyLmVuZFggLSBwb2ludGVyLnN0YXJ0WCxcbiAgICAgICAgeTogcG9pbnRlci5lbmRZIC0gcG9pbnRlci5zdGFydFlcbiAgICAgIH07XG4gICAgICB2YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjayhzaWRlKSB7XG4gICAgICAgIHN3aXRjaCAoc2lkZSkge1xuICAgICAgICAgIGNhc2UgQUNUSU9OX0VBU1Q6XG4gICAgICAgICAgICBpZiAocmlnaHQgKyByYW5nZS54ID4gbWF4V2lkdGgpIHtcbiAgICAgICAgICAgICAgcmFuZ2UueCA9IG1heFdpZHRoIC0gcmlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEFDVElPTl9XRVNUOlxuICAgICAgICAgICAgaWYgKGxlZnQgKyByYW5nZS54IDwgbWluTGVmdCkge1xuICAgICAgICAgICAgICByYW5nZS54ID0gbWluTGVmdCAtIGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEFDVElPTl9OT1JUSDpcbiAgICAgICAgICAgIGlmICh0b3AgKyByYW5nZS55IDwgbWluVG9wKSB7XG4gICAgICAgICAgICAgIHJhbmdlLnkgPSBtaW5Ub3AgLSB0b3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEFDVElPTl9TT1VUSDpcbiAgICAgICAgICAgIGlmIChib3R0b20gKyByYW5nZS55ID4gbWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICAgIHJhbmdlLnkgPSBtYXhIZWlnaHQgLSBib3R0b207XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgIC8vIE1vdmUgY3JvcCBib3hcbiAgICAgICAgY2FzZSBBQ1RJT05fQUxMOlxuICAgICAgICAgIGxlZnQgKz0gcmFuZ2UueDtcbiAgICAgICAgICB0b3AgKz0gcmFuZ2UueTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBSZXNpemUgY3JvcCBib3hcbiAgICAgICAgY2FzZSBBQ1RJT05fRUFTVDpcbiAgICAgICAgICBpZiAocmFuZ2UueCA+PSAwICYmIChyaWdodCA+PSBtYXhXaWR0aCB8fCBhc3BlY3RSYXRpbyAmJiAodG9wIDw9IG1pblRvcCB8fCBib3R0b20gPj0gbWF4SGVpZ2h0KSkpIHtcbiAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjaGVjayhBQ1RJT05fRUFTVCk7XG4gICAgICAgICAgd2lkdGggKz0gcmFuZ2UueDtcbiAgICAgICAgICBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fV0VTVDtcbiAgICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgdG9wICs9IChjcm9wQm94RGF0YS5oZWlnaHQgLSBoZWlnaHQpIC8gMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQUNUSU9OX05PUlRIOlxuICAgICAgICAgIGlmIChyYW5nZS55IDw9IDAgJiYgKHRvcCA8PSBtaW5Ub3AgfHwgYXNwZWN0UmF0aW8gJiYgKGxlZnQgPD0gbWluTGVmdCB8fCByaWdodCA+PSBtYXhXaWR0aCkpKSB7XG4gICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hlY2soQUNUSU9OX05PUlRIKTtcbiAgICAgICAgICBoZWlnaHQgLT0gcmFuZ2UueTtcbiAgICAgICAgICB0b3AgKz0gcmFuZ2UueTtcbiAgICAgICAgICBpZiAoaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX1NPVVRIO1xuICAgICAgICAgICAgaGVpZ2h0ID0gLWhlaWdodDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhc3BlY3RSYXRpbykge1xuICAgICAgICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgICAgIGxlZnQgKz0gKGNyb3BCb3hEYXRhLndpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQUNUSU9OX1dFU1Q6XG4gICAgICAgICAgaWYgKHJhbmdlLnggPD0gMCAmJiAobGVmdCA8PSBtaW5MZWZ0IHx8IGFzcGVjdFJhdGlvICYmICh0b3AgPD0gbWluVG9wIHx8IGJvdHRvbSA+PSBtYXhIZWlnaHQpKSkge1xuICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNoZWNrKEFDVElPTl9XRVNUKTtcbiAgICAgICAgICB3aWR0aCAtPSByYW5nZS54O1xuICAgICAgICAgIGxlZnQgKz0gcmFuZ2UueDtcbiAgICAgICAgICBpZiAod2lkdGggPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fRUFTVDtcbiAgICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgdG9wICs9IChjcm9wQm94RGF0YS5oZWlnaHQgLSBoZWlnaHQpIC8gMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQUNUSU9OX1NPVVRIOlxuICAgICAgICAgIGlmIChyYW5nZS55ID49IDAgJiYgKGJvdHRvbSA+PSBtYXhIZWlnaHQgfHwgYXNwZWN0UmF0aW8gJiYgKGxlZnQgPD0gbWluTGVmdCB8fCByaWdodCA+PSBtYXhXaWR0aCkpKSB7XG4gICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hlY2soQUNUSU9OX1NPVVRIKTtcbiAgICAgICAgICBoZWlnaHQgKz0gcmFuZ2UueTtcbiAgICAgICAgICBpZiAoaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX05PUlRIO1xuICAgICAgICAgICAgaGVpZ2h0ID0gLWhlaWdodDtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhc3BlY3RSYXRpbykge1xuICAgICAgICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgICAgIGxlZnQgKz0gKGNyb3BCb3hEYXRhLndpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQUNUSU9OX05PUlRIX0VBU1Q6XG4gICAgICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICBpZiAocmFuZ2UueSA8PSAwICYmICh0b3AgPD0gbWluVG9wIHx8IHJpZ2h0ID49IG1heFdpZHRoKSkge1xuICAgICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hlY2soQUNUSU9OX05PUlRIKTtcbiAgICAgICAgICAgIGhlaWdodCAtPSByYW5nZS55O1xuICAgICAgICAgICAgdG9wICs9IHJhbmdlLnk7XG4gICAgICAgICAgICB3aWR0aCA9IGhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fTk9SVEgpO1xuICAgICAgICAgICAgY2hlY2soQUNUSU9OX0VBU1QpO1xuICAgICAgICAgICAgaWYgKHJhbmdlLnggPj0gMCkge1xuICAgICAgICAgICAgICBpZiAocmlnaHQgPCBtYXhXaWR0aCkge1xuICAgICAgICAgICAgICAgIHdpZHRoICs9IHJhbmdlLng7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocmFuZ2UueSA8PSAwICYmIHRvcCA8PSBtaW5Ub3ApIHtcbiAgICAgICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdpZHRoICs9IHJhbmdlLng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmFuZ2UueSA8PSAwKSB7XG4gICAgICAgICAgICAgIGlmICh0b3AgPiBtaW5Ub3ApIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgLT0gcmFuZ2UueTtcbiAgICAgICAgICAgICAgICB0b3AgKz0gcmFuZ2UueTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaGVpZ2h0IC09IHJhbmdlLnk7XG4gICAgICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAod2lkdGggPCAwICYmIGhlaWdodCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9TT1VUSF9XRVNUO1xuICAgICAgICAgICAgaGVpZ2h0ID0gLWhlaWdodDtcbiAgICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgICAgdG9wIC09IGhlaWdodDtcbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgICAgfSBlbHNlIGlmICh3aWR0aCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9OT1JUSF9XRVNUO1xuICAgICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX1NPVVRIX0VBU1Q7XG4gICAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgICAgdG9wIC09IGhlaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQUNUSU9OX05PUlRIX1dFU1Q6XG4gICAgICAgICAgaWYgKGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICBpZiAocmFuZ2UueSA8PSAwICYmICh0b3AgPD0gbWluVG9wIHx8IGxlZnQgPD0gbWluTGVmdCkpIHtcbiAgICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoZWNrKEFDVElPTl9OT1JUSCk7XG4gICAgICAgICAgICBoZWlnaHQgLT0gcmFuZ2UueTtcbiAgICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuICAgICAgICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgICAgIGxlZnQgKz0gY3JvcEJveERhdGEud2lkdGggLSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2soQUNUSU9OX05PUlRIKTtcbiAgICAgICAgICAgIGNoZWNrKEFDVElPTl9XRVNUKTtcbiAgICAgICAgICAgIGlmIChyYW5nZS54IDw9IDApIHtcbiAgICAgICAgICAgICAgaWYgKGxlZnQgPiBtaW5MZWZ0KSB7XG4gICAgICAgICAgICAgICAgd2lkdGggLT0gcmFuZ2UueDtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IHJhbmdlLng7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocmFuZ2UueSA8PSAwICYmIHRvcCA8PSBtaW5Ub3ApIHtcbiAgICAgICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdpZHRoIC09IHJhbmdlLng7XG4gICAgICAgICAgICAgIGxlZnQgKz0gcmFuZ2UueDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyYW5nZS55IDw9IDApIHtcbiAgICAgICAgICAgICAgaWYgKHRvcCA+IG1pblRvcCkge1xuICAgICAgICAgICAgICAgIGhlaWdodCAtPSByYW5nZS55O1xuICAgICAgICAgICAgICAgIHRvcCArPSByYW5nZS55O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBoZWlnaHQgLT0gcmFuZ2UueTtcbiAgICAgICAgICAgICAgdG9wICs9IHJhbmdlLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh3aWR0aCA8IDAgJiYgaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX1NPVVRIX0VBU1Q7XG4gICAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX05PUlRIX0VBU1Q7XG4gICAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fU09VVEhfV0VTVDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBBQ1RJT05fU09VVEhfV0VTVDpcbiAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgIGlmIChyYW5nZS54IDw9IDAgJiYgKGxlZnQgPD0gbWluTGVmdCB8fCBib3R0b20gPj0gbWF4SGVpZ2h0KSkge1xuICAgICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hlY2soQUNUSU9OX1dFU1QpO1xuICAgICAgICAgICAgd2lkdGggLT0gcmFuZ2UueDtcbiAgICAgICAgICAgIGxlZnQgKz0gcmFuZ2UueDtcbiAgICAgICAgICAgIGhlaWdodCA9IHdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrKEFDVElPTl9TT1VUSCk7XG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fV0VTVCk7XG4gICAgICAgICAgICBpZiAocmFuZ2UueCA8PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChsZWZ0ID4gbWluTGVmdCkge1xuICAgICAgICAgICAgICAgIHdpZHRoIC09IHJhbmdlLng7XG4gICAgICAgICAgICAgICAgbGVmdCArPSByYW5nZS54O1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJhbmdlLnkgPj0gMCAmJiBib3R0b20gPj0gbWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aWR0aCAtPSByYW5nZS54O1xuICAgICAgICAgICAgICBsZWZ0ICs9IHJhbmdlLng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmFuZ2UueSA+PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChib3R0b20gPCBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgKz0gcmFuZ2UueTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaGVpZ2h0ICs9IHJhbmdlLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh3aWR0aCA8IDAgJiYgaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX05PUlRIX0VBU1Q7XG4gICAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX1NPVVRIX0VBU1Q7XG4gICAgICAgICAgICB3aWR0aCA9IC13aWR0aDtcbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPCAwKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBBQ1RJT05fTk9SVEhfV0VTVDtcbiAgICAgICAgICAgIGhlaWdodCA9IC1oZWlnaHQ7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBBQ1RJT05fU09VVEhfRUFTVDpcbiAgICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICAgIGlmIChyYW5nZS54ID49IDAgJiYgKHJpZ2h0ID49IG1heFdpZHRoIHx8IGJvdHRvbSA+PSBtYXhIZWlnaHQpKSB7XG4gICAgICAgICAgICAgIHJlbmRlcmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGVjayhBQ1RJT05fRUFTVCk7XG4gICAgICAgICAgICB3aWR0aCArPSByYW5nZS54O1xuICAgICAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2soQUNUSU9OX1NPVVRIKTtcbiAgICAgICAgICAgIGNoZWNrKEFDVElPTl9FQVNUKTtcbiAgICAgICAgICAgIGlmIChyYW5nZS54ID49IDApIHtcbiAgICAgICAgICAgICAgaWYgKHJpZ2h0IDwgbWF4V2lkdGgpIHtcbiAgICAgICAgICAgICAgICB3aWR0aCArPSByYW5nZS54O1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJhbmdlLnkgPj0gMCAmJiBib3R0b20gPj0gbWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aWR0aCArPSByYW5nZS54O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJhbmdlLnkgPj0gMCkge1xuICAgICAgICAgICAgICBpZiAoYm90dG9tIDwgbWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ICs9IHJhbmdlLnk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGhlaWdodCArPSByYW5nZS55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAod2lkdGggPCAwICYmIGhlaWdodCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9OT1JUSF9XRVNUO1xuICAgICAgICAgICAgaGVpZ2h0ID0gLWhlaWdodDtcbiAgICAgICAgICAgIHdpZHRoID0gLXdpZHRoO1xuICAgICAgICAgICAgdG9wIC09IGhlaWdodDtcbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgICAgfSBlbHNlIGlmICh3aWR0aCA8IDApIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IEFDVElPTl9TT1VUSF9XRVNUO1xuICAgICAgICAgICAgd2lkdGggPSAtd2lkdGg7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0IDwgMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gQUNUSU9OX05PUlRIX0VBU1Q7XG4gICAgICAgICAgICBoZWlnaHQgPSAtaGVpZ2h0O1xuICAgICAgICAgICAgdG9wIC09IGhlaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gTW92ZSBjYW52YXNcbiAgICAgICAgY2FzZSBBQ1RJT05fTU9WRTpcbiAgICAgICAgICB0aGlzLm1vdmUocmFuZ2UueCwgcmFuZ2UueSk7XG4gICAgICAgICAgcmVuZGVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIC8vIFpvb20gY2FudmFzXG4gICAgICAgIGNhc2UgQUNUSU9OX1pPT006XG4gICAgICAgICAgdGhpcy56b29tKGdldE1heFpvb21SYXRpbyhwb2ludGVycyksIGV2ZW50KTtcbiAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGNyb3AgYm94XG4gICAgICAgIGNhc2UgQUNUSU9OX0NST1A6XG4gICAgICAgICAgaWYgKCFyYW5nZS54IHx8ICFyYW5nZS55KSB7XG4gICAgICAgICAgICByZW5kZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgb2Zmc2V0ID0gZ2V0T2Zmc2V0KHRoaXMuY3JvcHBlcik7XG4gICAgICAgICAgbGVmdCA9IHBvaW50ZXIuc3RhcnRYIC0gb2Zmc2V0LmxlZnQ7XG4gICAgICAgICAgdG9wID0gcG9pbnRlci5zdGFydFkgLSBvZmZzZXQudG9wO1xuICAgICAgICAgIHdpZHRoID0gY3JvcEJveERhdGEubWluV2lkdGg7XG4gICAgICAgICAgaGVpZ2h0ID0gY3JvcEJveERhdGEubWluSGVpZ2h0O1xuICAgICAgICAgIGlmIChyYW5nZS54ID4gMCkge1xuICAgICAgICAgICAgYWN0aW9uID0gcmFuZ2UueSA+IDAgPyBBQ1RJT05fU09VVEhfRUFTVCA6IEFDVElPTl9OT1JUSF9FQVNUO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmFuZ2UueCA8IDApIHtcbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgICAgICBhY3Rpb24gPSByYW5nZS55ID4gMCA/IEFDVElPTl9TT1VUSF9XRVNUIDogQUNUSU9OX05PUlRIX1dFU1Q7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyYW5nZS55IDwgMCkge1xuICAgICAgICAgICAgdG9wIC09IGhlaWdodDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTaG93IHRoZSBjcm9wIGJveCBpZiBpcyBoaWRkZW5cbiAgICAgICAgICBpZiAoIXRoaXMuY3JvcHBlZCkge1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5jcm9wQm94LCBDTEFTU19ISURERU4pO1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpbWl0ZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5saW1pdENyb3BCb3godHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHJlbmRlcmFibGUpIHtcbiAgICAgICAgY3JvcEJveERhdGEud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY3JvcEJveERhdGEuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjcm9wQm94RGF0YS5sZWZ0ID0gbGVmdDtcbiAgICAgICAgY3JvcEJveERhdGEudG9wID0gdG9wO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5yZW5kZXJDcm9wQm94KCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE92ZXJyaWRlXG4gICAgICBmb3JFYWNoKHBvaW50ZXJzLCBmdW5jdGlvbiAocCkge1xuICAgICAgICBwLnN0YXJ0WCA9IHAuZW5kWDtcbiAgICAgICAgcC5zdGFydFkgPSBwLmVuZFk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIG1ldGhvZHMgPSB7XG4gICAgLy8gU2hvdyB0aGUgY3JvcCBib3ggbWFudWFsbHlcbiAgICBjcm9wOiBmdW5jdGlvbiBjcm9wKCkge1xuICAgICAgaWYgKHRoaXMucmVhZHkgJiYgIXRoaXMuY3JvcHBlZCAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmNyb3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxpbWl0Q3JvcEJveCh0cnVlLCB0cnVlKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2RhbCkge1xuICAgICAgICAgIGFkZENsYXNzKHRoaXMuZHJhZ0JveCwgQ0xBU1NfTU9EQUwpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuY3JvcEJveCwgQ0xBU1NfSElEREVOKTtcbiAgICAgICAgdGhpcy5zZXRDcm9wQm94RGF0YSh0aGlzLmluaXRpYWxDcm9wQm94RGF0YSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8vIFJlc2V0IHRoZSBpbWFnZSBhbmQgY3JvcCBib3ggdG8gdGhlaXIgaW5pdGlhbCBzdGF0ZXNcbiAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmltYWdlRGF0YSA9IGFzc2lnbih7fSwgdGhpcy5pbml0aWFsSW1hZ2VEYXRhKTtcbiAgICAgICAgdGhpcy5jYW52YXNEYXRhID0gYXNzaWduKHt9LCB0aGlzLmluaXRpYWxDYW52YXNEYXRhKTtcbiAgICAgICAgdGhpcy5jcm9wQm94RGF0YSA9IGFzc2lnbih7fSwgdGhpcy5pbml0aWFsQ3JvcEJveERhdGEpO1xuICAgICAgICB0aGlzLnJlbmRlckNhbnZhcygpO1xuICAgICAgICBpZiAodGhpcy5jcm9wcGVkKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJDcm9wQm94KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLy8gQ2xlYXIgdGhlIGNyb3AgYm94XG4gICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgaWYgKHRoaXMuY3JvcHBlZCAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICBhc3NpZ24odGhpcy5jcm9wQm94RGF0YSwge1xuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgIGhlaWdodDogMFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jcm9wcGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVuZGVyQ3JvcEJveCgpO1xuICAgICAgICB0aGlzLmxpbWl0Q2FudmFzKHRydWUsIHRydWUpO1xuXG4gICAgICAgIC8vIFJlbmRlciBjYW52YXMgYWZ0ZXIgY3JvcCBib3ggcmVuZGVyZWRcbiAgICAgICAgdGhpcy5yZW5kZXJDYW52YXMoKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5kcmFnQm94LCBDTEFTU19NT0RBTCk7XG4gICAgICAgIGFkZENsYXNzKHRoaXMuY3JvcEJveCwgQ0xBU1NfSElEREVOKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSB0aGUgaW1hZ2UncyBzcmMgYW5kIHJlYnVpbGQgdGhlIGNyb3BwZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVGhlIG5ldyBVUkwuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbaGFzU2FtZVNpemVdIC0gSW5kaWNhdGUgaWYgdGhlIG5ldyBpbWFnZSBoYXMgdGhlIHNhbWUgc2l6ZSBhcyB0aGUgb2xkIG9uZS5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHJlcGxhY2U6IGZ1bmN0aW9uIHJlcGxhY2UodXJsKSB7XG4gICAgICB2YXIgaGFzU2FtZVNpemUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHVybCkge1xuICAgICAgICBpZiAodGhpcy5pc0ltZykge1xuICAgICAgICAgIHRoaXMuZWxlbWVudC5zcmMgPSB1cmw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc1NhbWVTaXplKSB7XG4gICAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSB1cmw7XG4gICAgICAgICAgaWYgKHRoaXMucmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMudmlld0JveEltYWdlLnNyYyA9IHVybDtcbiAgICAgICAgICAgIGZvckVhY2godGhpcy5wcmV2aWV3cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF0uc3JjID0gdXJsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmlzSW1nKSB7XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5vcHRpb25zLmRhdGEgPSBudWxsO1xuICAgICAgICAgIHRoaXMudW5jcmVhdGUoKTtcbiAgICAgICAgICB0aGlzLmxvYWQodXJsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvLyBFbmFibGUgKHVuZnJlZXplKSB0aGUgY3JvcHBlclxuICAgIGVuYWJsZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgaWYgKHRoaXMucmVhZHkgJiYgdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuY3JvcHBlciwgQ0xBU1NfRElTQUJMRUQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvLyBEaXNhYmxlIChmcmVlemUpIHRoZSBjcm9wcGVyXG4gICAgZGlzYWJsZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBhZGRDbGFzcyh0aGlzLmNyb3BwZXIsIENMQVNTX0RJU0FCTEVEKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogRGVzdHJveSB0aGUgY3JvcHBlciBhbmQgcmVtb3ZlIHRoZSBpbnN0YW5jZSBmcm9tIHRoZSBpbWFnZVxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgaWYgKCFlbGVtZW50W05BTUVTUEFDRV0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBlbGVtZW50W05BTUVTUEFDRV0gPSB1bmRlZmluZWQ7XG4gICAgICBpZiAodGhpcy5pc0ltZyAmJiB0aGlzLnJlcGxhY2VkKSB7XG4gICAgICAgIGVsZW1lbnQuc3JjID0gdGhpcy5vcmlnaW5hbFVybDtcbiAgICAgIH1cbiAgICAgIHRoaXMudW5jcmVhdGUoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogTW92ZSB0aGUgY2FudmFzIHdpdGggcmVsYXRpdmUgb2Zmc2V0c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRYIC0gVGhlIHJlbGF0aXZlIG9mZnNldCBkaXN0YW5jZSBvbiB0aGUgeC1heGlzLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb2Zmc2V0WT1vZmZzZXRYXSAtIFRoZSByZWxhdGl2ZSBvZmZzZXQgZGlzdGFuY2Ugb24gdGhlIHktYXhpcy5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIG1vdmU6IGZ1bmN0aW9uIG1vdmUob2Zmc2V0WCkge1xuICAgICAgdmFyIG9mZnNldFkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG9mZnNldFg7XG4gICAgICB2YXIgX3RoaXMkY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YSxcbiAgICAgICAgbGVmdCA9IF90aGlzJGNhbnZhc0RhdGEubGVmdCxcbiAgICAgICAgdG9wID0gX3RoaXMkY2FudmFzRGF0YS50b3A7XG4gICAgICByZXR1cm4gdGhpcy5tb3ZlVG8oaXNVbmRlZmluZWQob2Zmc2V0WCkgPyBvZmZzZXRYIDogbGVmdCArIE51bWJlcihvZmZzZXRYKSwgaXNVbmRlZmluZWQob2Zmc2V0WSkgPyBvZmZzZXRZIDogdG9wICsgTnVtYmVyKG9mZnNldFkpKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIE1vdmUgdGhlIGNhbnZhcyB0byBhbiBhYnNvbHV0ZSBwb2ludFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHgtYXhpcyBjb29yZGluYXRlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbeT14XSAtIFRoZSB5LWF4aXMgY29vcmRpbmF0ZS5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIG1vdmVUbzogZnVuY3Rpb24gbW92ZVRvKHgpIHtcbiAgICAgIHZhciB5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB4O1xuICAgICAgdmFyIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGE7XG4gICAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgeCA9IE51bWJlcih4KTtcbiAgICAgIHkgPSBOdW1iZXIoeSk7XG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLm9wdGlvbnMubW92YWJsZSkge1xuICAgICAgICBpZiAoaXNOdW1iZXIoeCkpIHtcbiAgICAgICAgICBjYW52YXNEYXRhLmxlZnQgPSB4O1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWJlcih5KSkge1xuICAgICAgICAgIGNhbnZhc0RhdGEudG9wID0geTtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyQ2FudmFzKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFpvb20gdGhlIGNhbnZhcyB3aXRoIGEgcmVsYXRpdmUgcmF0aW9cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmF0aW8gLSBUaGUgdGFyZ2V0IHJhdGlvLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IF9vcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IGlmIGFueS5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHpvb206IGZ1bmN0aW9uIHpvb20ocmF0aW8sIF9vcmlnaW5hbEV2ZW50KSB7XG4gICAgICB2YXIgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YTtcbiAgICAgIHJhdGlvID0gTnVtYmVyKHJhdGlvKTtcbiAgICAgIGlmIChyYXRpbyA8IDApIHtcbiAgICAgICAgcmF0aW8gPSAxIC8gKDEgLSByYXRpbyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByYXRpbyA9IDEgKyByYXRpbztcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnpvb21UbyhjYW52YXNEYXRhLndpZHRoICogcmF0aW8gLyBjYW52YXNEYXRhLm5hdHVyYWxXaWR0aCwgbnVsbCwgX29yaWdpbmFsRXZlbnQpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogWm9vbSB0aGUgY2FudmFzIHRvIGFuIGFic29sdXRlIHJhdGlvXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhdGlvIC0gVGhlIHRhcmdldCByYXRpby5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGl2b3QgLSBUaGUgem9vbSBwaXZvdCBwb2ludCBjb29yZGluYXRlLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IF9vcmlnaW5hbEV2ZW50IC0gVGhlIG9yaWdpbmFsIGV2ZW50IGlmIGFueS5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHpvb21UbzogZnVuY3Rpb24gem9vbVRvKHJhdGlvLCBwaXZvdCwgX29yaWdpbmFsRXZlbnQpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhO1xuICAgICAgdmFyIHdpZHRoID0gY2FudmFzRGF0YS53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gY2FudmFzRGF0YS5oZWlnaHQsXG4gICAgICAgIG5hdHVyYWxXaWR0aCA9IGNhbnZhc0RhdGEubmF0dXJhbFdpZHRoLFxuICAgICAgICBuYXR1cmFsSGVpZ2h0ID0gY2FudmFzRGF0YS5uYXR1cmFsSGVpZ2h0O1xuICAgICAgcmF0aW8gPSBOdW1iZXIocmF0aW8pO1xuICAgICAgaWYgKHJhdGlvID49IDAgJiYgdGhpcy5yZWFkeSAmJiAhdGhpcy5kaXNhYmxlZCAmJiBvcHRpb25zLnpvb21hYmxlKSB7XG4gICAgICAgIHZhciBuZXdXaWR0aCA9IG5hdHVyYWxXaWR0aCAqIHJhdGlvO1xuICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gbmF0dXJhbEhlaWdodCAqIHJhdGlvO1xuICAgICAgICBpZiAoZGlzcGF0Y2hFdmVudCh0aGlzLmVsZW1lbnQsIEVWRU5UX1pPT00sIHtcbiAgICAgICAgICByYXRpbzogcmF0aW8sXG4gICAgICAgICAgb2xkUmF0aW86IHdpZHRoIC8gbmF0dXJhbFdpZHRoLFxuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IF9vcmlnaW5hbEV2ZW50XG4gICAgICAgIH0pID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfb3JpZ2luYWxFdmVudCkge1xuICAgICAgICAgIHZhciBwb2ludGVycyA9IHRoaXMucG9pbnRlcnM7XG4gICAgICAgICAgdmFyIG9mZnNldCA9IGdldE9mZnNldCh0aGlzLmNyb3BwZXIpO1xuICAgICAgICAgIHZhciBjZW50ZXIgPSBwb2ludGVycyAmJiBPYmplY3Qua2V5cyhwb2ludGVycykubGVuZ3RoID8gZ2V0UG9pbnRlcnNDZW50ZXIocG9pbnRlcnMpIDoge1xuICAgICAgICAgICAgcGFnZVg6IF9vcmlnaW5hbEV2ZW50LnBhZ2VYLFxuICAgICAgICAgICAgcGFnZVk6IF9vcmlnaW5hbEV2ZW50LnBhZ2VZXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIFpvb20gZnJvbSB0aGUgdHJpZ2dlcmluZyBwb2ludCBvZiB0aGUgZXZlbnRcbiAgICAgICAgICBjYW52YXNEYXRhLmxlZnQgLT0gKG5ld1dpZHRoIC0gd2lkdGgpICogKChjZW50ZXIucGFnZVggLSBvZmZzZXQubGVmdCAtIGNhbnZhc0RhdGEubGVmdCkgLyB3aWR0aCk7XG4gICAgICAgICAgY2FudmFzRGF0YS50b3AgLT0gKG5ld0hlaWdodCAtIGhlaWdodCkgKiAoKGNlbnRlci5wYWdlWSAtIG9mZnNldC50b3AgLSBjYW52YXNEYXRhLnRvcCkgLyBoZWlnaHQpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QocGl2b3QpICYmIGlzTnVtYmVyKHBpdm90LngpICYmIGlzTnVtYmVyKHBpdm90LnkpKSB7XG4gICAgICAgICAgY2FudmFzRGF0YS5sZWZ0IC09IChuZXdXaWR0aCAtIHdpZHRoKSAqICgocGl2b3QueCAtIGNhbnZhc0RhdGEubGVmdCkgLyB3aWR0aCk7XG4gICAgICAgICAgY2FudmFzRGF0YS50b3AgLT0gKG5ld0hlaWdodCAtIGhlaWdodCkgKiAoKHBpdm90LnkgLSBjYW52YXNEYXRhLnRvcCkgLyBoZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFpvb20gZnJvbSB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcbiAgICAgICAgICBjYW52YXNEYXRhLmxlZnQgLT0gKG5ld1dpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICAgICAgICBjYW52YXNEYXRhLnRvcCAtPSAobmV3SGVpZ2h0IC0gaGVpZ2h0KSAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzRGF0YS53aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgICBjYW52YXNEYXRhLmhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgICAgdGhpcy5yZW5kZXJDYW52YXModHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJvdGF0ZSB0aGUgY2FudmFzIHdpdGggYSByZWxhdGl2ZSBkZWdyZWVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVncmVlIC0gVGhlIHJvdGF0ZSBkZWdyZWUuXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICByb3RhdGU6IGZ1bmN0aW9uIHJvdGF0ZShkZWdyZWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJvdGF0ZVRvKCh0aGlzLmltYWdlRGF0YS5yb3RhdGUgfHwgMCkgKyBOdW1iZXIoZGVncmVlKSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSb3RhdGUgdGhlIGNhbnZhcyB0byBhbiBhYnNvbHV0ZSBkZWdyZWVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVncmVlIC0gVGhlIHJvdGF0ZSBkZWdyZWUuXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICByb3RhdGVUbzogZnVuY3Rpb24gcm90YXRlVG8oZGVncmVlKSB7XG4gICAgICBkZWdyZWUgPSBOdW1iZXIoZGVncmVlKTtcbiAgICAgIGlmIChpc051bWJlcihkZWdyZWUpICYmIHRoaXMucmVhZHkgJiYgIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5vcHRpb25zLnJvdGF0YWJsZSkge1xuICAgICAgICB0aGlzLmltYWdlRGF0YS5yb3RhdGUgPSBkZWdyZWUgJSAzNjA7XG4gICAgICAgIHRoaXMucmVuZGVyQ2FudmFzKHRydWUsIHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBTY2FsZSB0aGUgaW1hZ2Ugb24gdGhlIHgtYXhpcy5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVYIC0gVGhlIHNjYWxlIHJhdGlvIG9uIHRoZSB4LWF4aXMuXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICBzY2FsZVg6IGZ1bmN0aW9uIHNjYWxlWChfc2NhbGVYKSB7XG4gICAgICB2YXIgc2NhbGVZID0gdGhpcy5pbWFnZURhdGEuc2NhbGVZO1xuICAgICAgcmV0dXJuIHRoaXMuc2NhbGUoX3NjYWxlWCwgaXNOdW1iZXIoc2NhbGVZKSA/IHNjYWxlWSA6IDEpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogU2NhbGUgdGhlIGltYWdlIG9uIHRoZSB5LWF4aXMuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWSAtIFRoZSBzY2FsZSByYXRpbyBvbiB0aGUgeS1heGlzLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgc2NhbGVZOiBmdW5jdGlvbiBzY2FsZVkoX3NjYWxlWSkge1xuICAgICAgdmFyIHNjYWxlWCA9IHRoaXMuaW1hZ2VEYXRhLnNjYWxlWDtcbiAgICAgIHJldHVybiB0aGlzLnNjYWxlKGlzTnVtYmVyKHNjYWxlWCkgPyBzY2FsZVggOiAxLCBfc2NhbGVZKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFNjYWxlIHRoZSBpbWFnZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVggLSBUaGUgc2NhbGUgcmF0aW8gb24gdGhlIHgtYXhpcy5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3NjYWxlWT1zY2FsZVhdIC0gVGhlIHNjYWxlIHJhdGlvIG9uIHRoZSB5LWF4aXMuXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICBzY2FsZTogZnVuY3Rpb24gc2NhbGUoc2NhbGVYKSB7XG4gICAgICB2YXIgc2NhbGVZID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBzY2FsZVg7XG4gICAgICB2YXIgaW1hZ2VEYXRhID0gdGhpcy5pbWFnZURhdGE7XG4gICAgICB2YXIgdHJhbnNmb3JtZWQgPSBmYWxzZTtcbiAgICAgIHNjYWxlWCA9IE51bWJlcihzY2FsZVgpO1xuICAgICAgc2NhbGVZID0gTnVtYmVyKHNjYWxlWSk7XG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLm9wdGlvbnMuc2NhbGFibGUpIHtcbiAgICAgICAgaWYgKGlzTnVtYmVyKHNjYWxlWCkpIHtcbiAgICAgICAgICBpbWFnZURhdGEuc2NhbGVYID0gc2NhbGVYO1xuICAgICAgICAgIHRyYW5zZm9ybWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOdW1iZXIoc2NhbGVZKSkge1xuICAgICAgICAgIGltYWdlRGF0YS5zY2FsZVkgPSBzY2FsZVk7XG4gICAgICAgICAgdHJhbnNmb3JtZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFuc2Zvcm1lZCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyQ2FudmFzKHRydWUsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3JvcHBlZCBhcmVhIHBvc2l0aW9uIGFuZCBzaXplIGRhdGEgKGJhc2Ugb24gdGhlIG9yaWdpbmFsIGltYWdlKVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JvdW5kZWQ9ZmFsc2VdIC0gSW5kaWNhdGUgaWYgcm91bmQgdGhlIGRhdGEgdmFsdWVzIG9yIG5vdC5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0IGNyb3BwZWQgZGF0YS5cbiAgICAgKi9cbiAgICBnZXREYXRhOiBmdW5jdGlvbiBnZXREYXRhKCkge1xuICAgICAgdmFyIHJvdW5kZWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhLFxuICAgICAgICBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhLFxuICAgICAgICBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGE7XG4gICAgICB2YXIgZGF0YTtcbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmIHRoaXMuY3JvcHBlZCkge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIHg6IGNyb3BCb3hEYXRhLmxlZnQgLSBjYW52YXNEYXRhLmxlZnQsXG4gICAgICAgICAgeTogY3JvcEJveERhdGEudG9wIC0gY2FudmFzRGF0YS50b3AsXG4gICAgICAgICAgd2lkdGg6IGNyb3BCb3hEYXRhLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogY3JvcEJveERhdGEuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgICAgIHZhciByYXRpbyA9IGltYWdlRGF0YS53aWR0aCAvIGltYWdlRGF0YS5uYXR1cmFsV2lkdGg7XG4gICAgICAgIGZvckVhY2goZGF0YSwgZnVuY3Rpb24gKG4sIGkpIHtcbiAgICAgICAgICBkYXRhW2ldID0gbiAvIHJhdGlvO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJvdW5kZWQpIHtcbiAgICAgICAgICAvLyBJbiBjYXNlIHJvdW5kaW5nIG9mZiBsZWFkcyB0byBleHRyYSAxcHggaW4gcmlnaHQgb3IgYm90dG9tIGJvcmRlclxuICAgICAgICAgIC8vIHdlIHNob3VsZCByb3VuZCB0aGUgdG9wLWxlZnQgY29ybmVyIGFuZCB0aGUgZGltZW5zaW9uICgjMzQzKS5cbiAgICAgICAgICB2YXIgYm90dG9tID0gTWF0aC5yb3VuZChkYXRhLnkgKyBkYXRhLmhlaWdodCk7XG4gICAgICAgICAgdmFyIHJpZ2h0ID0gTWF0aC5yb3VuZChkYXRhLnggKyBkYXRhLndpZHRoKTtcbiAgICAgICAgICBkYXRhLnggPSBNYXRoLnJvdW5kKGRhdGEueCk7XG4gICAgICAgICAgZGF0YS55ID0gTWF0aC5yb3VuZChkYXRhLnkpO1xuICAgICAgICAgIGRhdGEud2lkdGggPSByaWdodCAtIGRhdGEueDtcbiAgICAgICAgICBkYXRhLmhlaWdodCA9IGJvdHRvbSAtIGRhdGEueTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgaGVpZ2h0OiAwXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5yb3RhdGFibGUpIHtcbiAgICAgICAgZGF0YS5yb3RhdGUgPSBpbWFnZURhdGEucm90YXRlIHx8IDA7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5zY2FsYWJsZSkge1xuICAgICAgICBkYXRhLnNjYWxlWCA9IGltYWdlRGF0YS5zY2FsZVggfHwgMTtcbiAgICAgICAgZGF0YS5zY2FsZVkgPSBpbWFnZURhdGEuc2NhbGVZIHx8IDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY3JvcHBlZCBhcmVhIHBvc2l0aW9uIGFuZCBzaXplIHdpdGggbmV3IGRhdGFcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFRoZSBuZXcgZGF0YS5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHNldERhdGE6IGZ1bmN0aW9uIHNldERhdGEoZGF0YSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhLFxuICAgICAgICBjYW52YXNEYXRhID0gdGhpcy5jYW52YXNEYXRhO1xuICAgICAgdmFyIGNyb3BCb3hEYXRhID0ge307XG4gICAgICBpZiAodGhpcy5yZWFkeSAmJiAhdGhpcy5kaXNhYmxlZCAmJiBpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgIHZhciB0cmFuc2Zvcm1lZCA9IGZhbHNlO1xuICAgICAgICBpZiAob3B0aW9ucy5yb3RhdGFibGUpIHtcbiAgICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS5yb3RhdGUpICYmIGRhdGEucm90YXRlICE9PSBpbWFnZURhdGEucm90YXRlKSB7XG4gICAgICAgICAgICBpbWFnZURhdGEucm90YXRlID0gZGF0YS5yb3RhdGU7XG4gICAgICAgICAgICB0cmFuc2Zvcm1lZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnNjYWxhYmxlKSB7XG4gICAgICAgICAgaWYgKGlzTnVtYmVyKGRhdGEuc2NhbGVYKSAmJiBkYXRhLnNjYWxlWCAhPT0gaW1hZ2VEYXRhLnNjYWxlWCkge1xuICAgICAgICAgICAgaW1hZ2VEYXRhLnNjYWxlWCA9IGRhdGEuc2NhbGVYO1xuICAgICAgICAgICAgdHJhbnNmb3JtZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS5zY2FsZVkpICYmIGRhdGEuc2NhbGVZICE9PSBpbWFnZURhdGEuc2NhbGVZKSB7XG4gICAgICAgICAgICBpbWFnZURhdGEuc2NhbGVZID0gZGF0YS5zY2FsZVk7XG4gICAgICAgICAgICB0cmFuc2Zvcm1lZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFuc2Zvcm1lZCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyQ2FudmFzKHRydWUsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByYXRpbyA9IGltYWdlRGF0YS53aWR0aCAvIGltYWdlRGF0YS5uYXR1cmFsV2lkdGg7XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLngpKSB7XG4gICAgICAgICAgY3JvcEJveERhdGEubGVmdCA9IGRhdGEueCAqIHJhdGlvICsgY2FudmFzRGF0YS5sZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLnkpKSB7XG4gICAgICAgICAgY3JvcEJveERhdGEudG9wID0gZGF0YS55ICogcmF0aW8gKyBjYW52YXNEYXRhLnRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS53aWR0aCkpIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS53aWR0aCA9IGRhdGEud2lkdGggKiByYXRpbztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS5oZWlnaHQpKSB7XG4gICAgICAgICAgY3JvcEJveERhdGEuaGVpZ2h0ID0gZGF0YS5oZWlnaHQgKiByYXRpbztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldENyb3BCb3hEYXRhKGNyb3BCb3hEYXRhKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjb250YWluZXIgc2l6ZSBkYXRhLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHQgY29udGFpbmVyIGRhdGEuXG4gICAgICovXG4gICAgZ2V0Q29udGFpbmVyRGF0YTogZnVuY3Rpb24gZ2V0Q29udGFpbmVyRGF0YSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlYWR5ID8gYXNzaWduKHt9LCB0aGlzLmNvbnRhaW5lckRhdGEpIDoge307XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGltYWdlIHBvc2l0aW9uIGFuZCBzaXplIGRhdGEuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBpbWFnZSBkYXRhLlxuICAgICAqL1xuICAgIGdldEltYWdlRGF0YTogZnVuY3Rpb24gZ2V0SW1hZ2VEYXRhKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2l6ZWQgPyBhc3NpZ24oe30sIHRoaXMuaW1hZ2VEYXRhKSA6IHt9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjYW52YXMgcG9zaXRpb24gYW5kIHNpemUgZGF0YS5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0IGNhbnZhcyBkYXRhLlxuICAgICAqL1xuICAgIGdldENhbnZhc0RhdGE6IGZ1bmN0aW9uIGdldENhbnZhc0RhdGEoKSB7XG4gICAgICB2YXIgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YTtcbiAgICAgIHZhciBkYXRhID0ge307XG4gICAgICBpZiAodGhpcy5yZWFkeSkge1xuICAgICAgICBmb3JFYWNoKFsnbGVmdCcsICd0b3AnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ25hdHVyYWxXaWR0aCcsICduYXR1cmFsSGVpZ2h0J10sIGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgZGF0YVtuXSA9IGNhbnZhc0RhdGFbbl07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGNhbnZhcyBwb3NpdGlvbiBhbmQgc2l6ZSB3aXRoIG5ldyBkYXRhLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG5ldyBjYW52YXMgZGF0YS5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHNldENhbnZhc0RhdGE6IGZ1bmN0aW9uIHNldENhbnZhc0RhdGEoZGF0YSkge1xuICAgICAgdmFyIGNhbnZhc0RhdGEgPSB0aGlzLmNhbnZhc0RhdGE7XG4gICAgICB2YXIgYXNwZWN0UmF0aW8gPSBjYW52YXNEYXRhLmFzcGVjdFJhdGlvO1xuICAgICAgaWYgKHRoaXMucmVhZHkgJiYgIXRoaXMuZGlzYWJsZWQgJiYgaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS5sZWZ0KSkge1xuICAgICAgICAgIGNhbnZhc0RhdGEubGVmdCA9IGRhdGEubGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS50b3ApKSB7XG4gICAgICAgICAgY2FudmFzRGF0YS50b3AgPSBkYXRhLnRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS53aWR0aCkpIHtcbiAgICAgICAgICBjYW52YXNEYXRhLndpZHRoID0gZGF0YS53aWR0aDtcbiAgICAgICAgICBjYW52YXNEYXRhLmhlaWdodCA9IGRhdGEud2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgfSBlbHNlIGlmIChpc051bWJlcihkYXRhLmhlaWdodCkpIHtcbiAgICAgICAgICBjYW52YXNEYXRhLmhlaWdodCA9IGRhdGEuaGVpZ2h0O1xuICAgICAgICAgIGNhbnZhc0RhdGEud2lkdGggPSBkYXRhLmhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyQ2FudmFzKHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNyb3AgYm94IHBvc2l0aW9uIGFuZCBzaXplIGRhdGEuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBjcm9wIGJveCBkYXRhLlxuICAgICAqL1xuICAgIGdldENyb3BCb3hEYXRhOiBmdW5jdGlvbiBnZXRDcm9wQm94RGF0YSgpIHtcbiAgICAgIHZhciBjcm9wQm94RGF0YSA9IHRoaXMuY3JvcEJveERhdGE7XG4gICAgICB2YXIgZGF0YTtcbiAgICAgIGlmICh0aGlzLnJlYWR5ICYmIHRoaXMuY3JvcHBlZCkge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIGxlZnQ6IGNyb3BCb3hEYXRhLmxlZnQsXG4gICAgICAgICAgdG9wOiBjcm9wQm94RGF0YS50b3AsXG4gICAgICAgICAgd2lkdGg6IGNyb3BCb3hEYXRhLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogY3JvcEJveERhdGEuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YSB8fCB7fTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY3JvcCBib3ggcG9zaXRpb24gYW5kIHNpemUgd2l0aCBuZXcgZGF0YS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFRoZSBuZXcgY3JvcCBib3ggZGF0YS5cbiAgICAgKiBAcmV0dXJucyB7Q3JvcHBlcn0gdGhpc1xuICAgICAqL1xuICAgIHNldENyb3BCb3hEYXRhOiBmdW5jdGlvbiBzZXRDcm9wQm94RGF0YShkYXRhKSB7XG4gICAgICB2YXIgY3JvcEJveERhdGEgPSB0aGlzLmNyb3BCb3hEYXRhO1xuICAgICAgdmFyIGFzcGVjdFJhdGlvID0gdGhpcy5vcHRpb25zLmFzcGVjdFJhdGlvO1xuICAgICAgdmFyIHdpZHRoQ2hhbmdlZDtcbiAgICAgIHZhciBoZWlnaHRDaGFuZ2VkO1xuICAgICAgaWYgKHRoaXMucmVhZHkgJiYgdGhpcy5jcm9wcGVkICYmICF0aGlzLmRpc2FibGVkICYmIGlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICAgICAgaWYgKGlzTnVtYmVyKGRhdGEubGVmdCkpIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS5sZWZ0ID0gZGF0YS5sZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLnRvcCkpIHtcbiAgICAgICAgICBjcm9wQm94RGF0YS50b3AgPSBkYXRhLnRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS53aWR0aCkgJiYgZGF0YS53aWR0aCAhPT0gY3JvcEJveERhdGEud2lkdGgpIHtcbiAgICAgICAgICB3aWR0aENoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgIGNyb3BCb3hEYXRhLndpZHRoID0gZGF0YS53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOdW1iZXIoZGF0YS5oZWlnaHQpICYmIGRhdGEuaGVpZ2h0ICE9PSBjcm9wQm94RGF0YS5oZWlnaHQpIHtcbiAgICAgICAgICBoZWlnaHRDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICBjcm9wQm94RGF0YS5oZWlnaHQgPSBkYXRhLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXNwZWN0UmF0aW8pIHtcbiAgICAgICAgICBpZiAod2lkdGhDaGFuZ2VkKSB7XG4gICAgICAgICAgICBjcm9wQm94RGF0YS5oZWlnaHQgPSBjcm9wQm94RGF0YS53aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0Q2hhbmdlZCkge1xuICAgICAgICAgICAgY3JvcEJveERhdGEud2lkdGggPSBjcm9wQm94RGF0YS5oZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJDcm9wQm94KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdldCBhIGNhbnZhcyBkcmF3biB0aGUgY3JvcHBlZCBpbWFnZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIC0gVGhlIGNvbmZpZyBvcHRpb25zLlxuICAgICAqIEByZXR1cm5zIHtIVE1MQ2FudmFzRWxlbWVudH0gLSBUaGUgcmVzdWx0IGNhbnZhcy5cbiAgICAgKi9cbiAgICBnZXRDcm9wcGVkQ2FudmFzOiBmdW5jdGlvbiBnZXRDcm9wcGVkQ2FudmFzKCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgaWYgKCF0aGlzLnJlYWR5IHx8ICF3aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB2YXIgY2FudmFzRGF0YSA9IHRoaXMuY2FudmFzRGF0YTtcbiAgICAgIHZhciBzb3VyY2UgPSBnZXRTb3VyY2VDYW52YXModGhpcy5pbWFnZSwgdGhpcy5pbWFnZURhdGEsIGNhbnZhc0RhdGEsIG9wdGlvbnMpO1xuXG4gICAgICAvLyBSZXR1cm5zIHRoZSBzb3VyY2UgY2FudmFzIGlmIGl0IGlzIG5vdCBjcm9wcGVkLlxuICAgICAgaWYgKCF0aGlzLmNyb3BwZWQpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICAgIH1cbiAgICAgIHZhciBfdGhpcyRnZXREYXRhID0gdGhpcy5nZXREYXRhKG9wdGlvbnMucm91bmRlZCksXG4gICAgICAgIGluaXRpYWxYID0gX3RoaXMkZ2V0RGF0YS54LFxuICAgICAgICBpbml0aWFsWSA9IF90aGlzJGdldERhdGEueSxcbiAgICAgICAgaW5pdGlhbFdpZHRoID0gX3RoaXMkZ2V0RGF0YS53aWR0aCxcbiAgICAgICAgaW5pdGlhbEhlaWdodCA9IF90aGlzJGdldERhdGEuaGVpZ2h0O1xuICAgICAgdmFyIHJhdGlvID0gc291cmNlLndpZHRoIC8gTWF0aC5mbG9vcihjYW52YXNEYXRhLm5hdHVyYWxXaWR0aCk7XG4gICAgICBpZiAocmF0aW8gIT09IDEpIHtcbiAgICAgICAgaW5pdGlhbFggKj0gcmF0aW87XG4gICAgICAgIGluaXRpYWxZICo9IHJhdGlvO1xuICAgICAgICBpbml0aWFsV2lkdGggKj0gcmF0aW87XG4gICAgICAgIGluaXRpYWxIZWlnaHQgKj0gcmF0aW87XG4gICAgICB9XG4gICAgICB2YXIgYXNwZWN0UmF0aW8gPSBpbml0aWFsV2lkdGggLyBpbml0aWFsSGVpZ2h0O1xuICAgICAgdmFyIG1heFNpemVzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgd2lkdGg6IG9wdGlvbnMubWF4V2lkdGggfHwgSW5maW5pdHksXG4gICAgICAgIGhlaWdodDogb3B0aW9ucy5tYXhIZWlnaHQgfHwgSW5maW5pdHlcbiAgICAgIH0pO1xuICAgICAgdmFyIG1pblNpemVzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgd2lkdGg6IG9wdGlvbnMubWluV2lkdGggfHwgMCxcbiAgICAgICAgaGVpZ2h0OiBvcHRpb25zLm1pbkhlaWdodCB8fCAwXG4gICAgICB9LCAnY292ZXInKTtcbiAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplcyA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICB3aWR0aDogb3B0aW9ucy53aWR0aCB8fCAocmF0aW8gIT09IDEgPyBzb3VyY2Uud2lkdGggOiBpbml0aWFsV2lkdGgpLFxuICAgICAgICAgIGhlaWdodDogb3B0aW9ucy5oZWlnaHQgfHwgKHJhdGlvICE9PSAxID8gc291cmNlLmhlaWdodCA6IGluaXRpYWxIZWlnaHQpXG4gICAgICAgIH0pLFxuICAgICAgICB3aWR0aCA9IF9nZXRBZGp1c3RlZFNpemVzLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplcy5oZWlnaHQ7XG4gICAgICB3aWR0aCA9IE1hdGgubWluKG1heFNpemVzLndpZHRoLCBNYXRoLm1heChtaW5TaXplcy53aWR0aCwgd2lkdGgpKTtcbiAgICAgIGhlaWdodCA9IE1hdGgubWluKG1heFNpemVzLmhlaWdodCwgTWF0aC5tYXgobWluU2l6ZXMuaGVpZ2h0LCBoZWlnaHQpKTtcbiAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBjYW52YXMud2lkdGggPSBub3JtYWxpemVEZWNpbWFsTnVtYmVyKHdpZHRoKTtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBub3JtYWxpemVEZWNpbWFsTnVtYmVyKGhlaWdodCk7XG4gICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IG9wdGlvbnMuZmlsbENvbG9yIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgdmFyIF9vcHRpb25zJGltYWdlU21vb3RoaSA9IG9wdGlvbnMuaW1hZ2VTbW9vdGhpbmdFbmFibGVkLFxuICAgICAgICBpbWFnZVNtb290aGluZ0VuYWJsZWQgPSBfb3B0aW9ucyRpbWFnZVNtb290aGkgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRpbWFnZVNtb290aGksXG4gICAgICAgIGltYWdlU21vb3RoaW5nUXVhbGl0eSA9IG9wdGlvbnMuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5O1xuICAgICAgY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBpbWFnZVNtb290aGluZ0VuYWJsZWQ7XG4gICAgICBpZiAoaW1hZ2VTbW9vdGhpbmdRdWFsaXR5KSB7XG4gICAgICAgIGNvbnRleHQuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ID0gaW1hZ2VTbW9vdGhpbmdRdWFsaXR5O1xuICAgICAgfVxuXG4gICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELmRyYXdJbWFnZVxuICAgICAgdmFyIHNvdXJjZVdpZHRoID0gc291cmNlLndpZHRoO1xuICAgICAgdmFyIHNvdXJjZUhlaWdodCA9IHNvdXJjZS5oZWlnaHQ7XG5cbiAgICAgIC8vIFNvdXJjZSBjYW52YXMgcGFyYW1ldGVyc1xuICAgICAgdmFyIHNyY1ggPSBpbml0aWFsWDtcbiAgICAgIHZhciBzcmNZID0gaW5pdGlhbFk7XG4gICAgICB2YXIgc3JjV2lkdGg7XG4gICAgICB2YXIgc3JjSGVpZ2h0O1xuXG4gICAgICAvLyBEZXN0aW5hdGlvbiBjYW52YXMgcGFyYW1ldGVyc1xuICAgICAgdmFyIGRzdFg7XG4gICAgICB2YXIgZHN0WTtcbiAgICAgIHZhciBkc3RXaWR0aDtcbiAgICAgIHZhciBkc3RIZWlnaHQ7XG4gICAgICBpZiAoc3JjWCA8PSAtaW5pdGlhbFdpZHRoIHx8IHNyY1ggPiBzb3VyY2VXaWR0aCkge1xuICAgICAgICBzcmNYID0gMDtcbiAgICAgICAgc3JjV2lkdGggPSAwO1xuICAgICAgICBkc3RYID0gMDtcbiAgICAgICAgZHN0V2lkdGggPSAwO1xuICAgICAgfSBlbHNlIGlmIChzcmNYIDw9IDApIHtcbiAgICAgICAgZHN0WCA9IC1zcmNYO1xuICAgICAgICBzcmNYID0gMDtcbiAgICAgICAgc3JjV2lkdGggPSBNYXRoLm1pbihzb3VyY2VXaWR0aCwgaW5pdGlhbFdpZHRoICsgc3JjWCk7XG4gICAgICAgIGRzdFdpZHRoID0gc3JjV2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKHNyY1ggPD0gc291cmNlV2lkdGgpIHtcbiAgICAgICAgZHN0WCA9IDA7XG4gICAgICAgIHNyY1dpZHRoID0gTWF0aC5taW4oaW5pdGlhbFdpZHRoLCBzb3VyY2VXaWR0aCAtIHNyY1gpO1xuICAgICAgICBkc3RXaWR0aCA9IHNyY1dpZHRoO1xuICAgICAgfVxuICAgICAgaWYgKHNyY1dpZHRoIDw9IDAgfHwgc3JjWSA8PSAtaW5pdGlhbEhlaWdodCB8fCBzcmNZID4gc291cmNlSGVpZ2h0KSB7XG4gICAgICAgIHNyY1kgPSAwO1xuICAgICAgICBzcmNIZWlnaHQgPSAwO1xuICAgICAgICBkc3RZID0gMDtcbiAgICAgICAgZHN0SGVpZ2h0ID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoc3JjWSA8PSAwKSB7XG4gICAgICAgIGRzdFkgPSAtc3JjWTtcbiAgICAgICAgc3JjWSA9IDA7XG4gICAgICAgIHNyY0hlaWdodCA9IE1hdGgubWluKHNvdXJjZUhlaWdodCwgaW5pdGlhbEhlaWdodCArIHNyY1kpO1xuICAgICAgICBkc3RIZWlnaHQgPSBzcmNIZWlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKHNyY1kgPD0gc291cmNlSGVpZ2h0KSB7XG4gICAgICAgIGRzdFkgPSAwO1xuICAgICAgICBzcmNIZWlnaHQgPSBNYXRoLm1pbihpbml0aWFsSGVpZ2h0LCBzb3VyY2VIZWlnaHQgLSBzcmNZKTtcbiAgICAgICAgZHN0SGVpZ2h0ID0gc3JjSGVpZ2h0O1xuICAgICAgfVxuICAgICAgdmFyIHBhcmFtcyA9IFtzcmNYLCBzcmNZLCBzcmNXaWR0aCwgc3JjSGVpZ2h0XTtcblxuICAgICAgLy8gQXZvaWQgXCJJbmRleFNpemVFcnJvclwiXG4gICAgICBpZiAoZHN0V2lkdGggPiAwICYmIGRzdEhlaWdodCA+IDApIHtcbiAgICAgICAgdmFyIHNjYWxlID0gd2lkdGggLyBpbml0aWFsV2lkdGg7XG4gICAgICAgIHBhcmFtcy5wdXNoKGRzdFggKiBzY2FsZSwgZHN0WSAqIHNjYWxlLCBkc3RXaWR0aCAqIHNjYWxlLCBkc3RIZWlnaHQgKiBzY2FsZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFsbCB0aGUgbnVtZXJpY2FsIHBhcmFtZXRlcnMgc2hvdWxkIGJlIGludGVnZXIgZm9yIGBkcmF3SW1hZ2VgXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmVuZ3l1YW5jaGVuL2Nyb3BwZXIvaXNzdWVzLzQ3NlxuICAgICAgY29udGV4dC5kcmF3SW1hZ2UuYXBwbHkoY29udGV4dCwgW3NvdXJjZV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShwYXJhbXMubWFwKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihub3JtYWxpemVEZWNpbWFsTnVtYmVyKHBhcmFtKSk7XG4gICAgICB9KSkpKTtcbiAgICAgIHJldHVybiBjYW52YXM7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGFzcGVjdCByYXRpbyBvZiB0aGUgY3JvcCBib3guXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFzcGVjdFJhdGlvIC0gVGhlIG5ldyBhc3BlY3QgcmF0aW8uXG4gICAgICogQHJldHVybnMge0Nyb3BwZXJ9IHRoaXNcbiAgICAgKi9cbiAgICBzZXRBc3BlY3RSYXRpbzogZnVuY3Rpb24gc2V0QXNwZWN0UmF0aW8oYXNwZWN0UmF0aW8pIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICFpc1VuZGVmaW5lZChhc3BlY3RSYXRpbykpIHtcbiAgICAgICAgLy8gMCAtPiBOYU5cbiAgICAgICAgb3B0aW9ucy5hc3BlY3RSYXRpbyA9IE1hdGgubWF4KDAsIGFzcGVjdFJhdGlvKSB8fCBOYU47XG4gICAgICAgIGlmICh0aGlzLnJlYWR5KSB7XG4gICAgICAgICAgdGhpcy5pbml0Q3JvcEJveCgpO1xuICAgICAgICAgIGlmICh0aGlzLmNyb3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ3JvcEJveCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGRyYWcgbW9kZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZSAtIFRoZSBuZXcgZHJhZyBtb2RlLlxuICAgICAqIEByZXR1cm5zIHtDcm9wcGVyfSB0aGlzXG4gICAgICovXG4gICAgc2V0RHJhZ01vZGU6IGZ1bmN0aW9uIHNldERyYWdNb2RlKG1vZGUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBkcmFnQm94ID0gdGhpcy5kcmFnQm94LFxuICAgICAgICBmYWNlID0gdGhpcy5mYWNlO1xuICAgICAgaWYgKHRoaXMucmVhZHkgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdmFyIGNyb3BwYWJsZSA9IG1vZGUgPT09IERSQUdfTU9ERV9DUk9QO1xuICAgICAgICB2YXIgbW92YWJsZSA9IG9wdGlvbnMubW92YWJsZSAmJiBtb2RlID09PSBEUkFHX01PREVfTU9WRTtcbiAgICAgICAgbW9kZSA9IGNyb3BwYWJsZSB8fCBtb3ZhYmxlID8gbW9kZSA6IERSQUdfTU9ERV9OT05FO1xuICAgICAgICBvcHRpb25zLmRyYWdNb2RlID0gbW9kZTtcbiAgICAgICAgc2V0RGF0YShkcmFnQm94LCBEQVRBX0FDVElPTiwgbW9kZSk7XG4gICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdCb3gsIENMQVNTX0NST1AsIGNyb3BwYWJsZSk7XG4gICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdCb3gsIENMQVNTX01PVkUsIG1vdmFibGUpO1xuICAgICAgICBpZiAoIW9wdGlvbnMuY3JvcEJveE1vdmFibGUpIHtcbiAgICAgICAgICAvLyBTeW5jIGRyYWcgbW9kZSB0byBjcm9wIGJveCB3aGVuIGl0IGlzIG5vdCBtb3ZhYmxlXG4gICAgICAgICAgc2V0RGF0YShmYWNlLCBEQVRBX0FDVElPTiwgbW9kZSk7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3MoZmFjZSwgQ0xBU1NfQ1JPUCwgY3JvcHBhYmxlKTtcbiAgICAgICAgICB0b2dnbGVDbGFzcyhmYWNlLCBDTEFTU19NT1ZFLCBtb3ZhYmxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9O1xuXG4gIHZhciBBbm90aGVyQ3JvcHBlciA9IFdJTkRPVy5Dcm9wcGVyO1xuICB2YXIgQ3JvcHBlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IENyb3BwZXIuXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIHRhcmdldCBlbGVtZW50IGZvciBjcm9wcGluZy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIC0gVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDcm9wcGVyKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDcm9wcGVyKTtcbiAgICAgIGlmICghZWxlbWVudCB8fCAhUkVHRVhQX1RBR19OQU1FLnRlc3QoZWxlbWVudC50YWdOYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBmaXJzdCBhcmd1bWVudCBpcyByZXF1aXJlZCBhbmQgbXVzdCBiZSBhbiA8aW1nPiBvciA8Y2FudmFzPiBlbGVtZW50LicpO1xuICAgICAgfVxuICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMub3B0aW9ucyA9IGFzc2lnbih7fSwgREVGQVVMVFMsIGlzUGxhaW5PYmplY3Qob3B0aW9ucykgJiYgb3B0aW9ucyk7XG4gICAgICB0aGlzLmNyb3BwZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMucG9pbnRlcnMgPSB7fTtcbiAgICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVsb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnJlcGxhY2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnNpemVkID0gZmFsc2U7XG4gICAgICB0aGlzLnNpemluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIHJldHVybiBfY3JlYXRlQ2xhc3MoQ3JvcHBlciwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIHZhciB0YWdOYW1lID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciB1cmw7XG4gICAgICAgIGlmIChlbGVtZW50W05BTUVTUEFDRV0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudFtOQU1FU1BBQ0VdID0gdGhpcztcbiAgICAgICAgaWYgKHRhZ05hbWUgPT09ICdpbWcnKSB7XG4gICAgICAgICAgdGhpcy5pc0ltZyA9IHRydWU7XG5cbiAgICAgICAgICAvLyBlLmcuOiBcImltZy9waWN0dXJlLmpwZ1wiXG4gICAgICAgICAgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3NyYycpIHx8ICcnO1xuICAgICAgICAgIHRoaXMub3JpZ2luYWxVcmwgPSB1cmw7XG5cbiAgICAgICAgICAvLyBTdG9wIHdoZW4gaXQncyBhIGJsYW5rIGltYWdlXG4gICAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBlLmcuOiBcImh0dHBzOi8vZXhhbXBsZS5jb20vaW1nL3BpY3R1cmUuanBnXCJcbiAgICAgICAgICB1cmwgPSBlbGVtZW50LnNyYztcbiAgICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSAnY2FudmFzJyAmJiB3aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgICB1cmwgPSBlbGVtZW50LnRvRGF0YVVSTCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZCh1cmwpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJsb2FkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZCh1cmwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuaW1hZ2VEYXRhID0ge307XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGlmICghb3B0aW9ucy5yb3RhdGFibGUgJiYgIW9wdGlvbnMuc2NhbGFibGUpIHtcbiAgICAgICAgICBvcHRpb25zLmNoZWNrT3JpZW50YXRpb24gPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9ubHkgSUUxMCsgc3VwcG9ydHMgVHlwZWQgQXJyYXlzXG4gICAgICAgIGlmICghb3B0aW9ucy5jaGVja09yaWVudGF0aW9uIHx8ICF3aW5kb3cuQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICB0aGlzLmNsb25lKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGV0ZWN0IHRoZSBtaW1lIHR5cGUgb2YgdGhlIGltYWdlIGRpcmVjdGx5IGlmIGl0IGlzIGEgRGF0YSBVUkxcbiAgICAgICAgaWYgKFJFR0VYUF9EQVRBX1VSTC50ZXN0KHVybCkpIHtcbiAgICAgICAgICAvLyBSZWFkIEFycmF5QnVmZmVyIGZyb20gRGF0YSBVUkwgb2YgSlBFRyBpbWFnZXMgZGlyZWN0bHkgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICAgICAgICAgIGlmIChSRUdFWFBfREFUQV9VUkxfSlBFRy50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZChkYXRhVVJMVG9BcnJheUJ1ZmZlcih1cmwpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gT25seSBhIEpQRUcgaW1hZ2UgbWF5IGNvbnRhaW5zIEV4aWYgT3JpZW50YXRpb24gaW5mb3JtYXRpb24sXG4gICAgICAgICAgICAvLyB0aGUgcmVzdCB0eXBlcyBvZiBEYXRhIFVSTHMgYXJlIG5vdCBuZWNlc3NhcnkgdG8gY2hlY2sgb3JpZW50YXRpb24gYXQgYWxsLlxuICAgICAgICAgICAgdGhpcy5jbG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyAxLiBEZXRlY3QgdGhlIG1pbWUgdHlwZSBvZiB0aGUgaW1hZ2UgYnkgYSBYTUxIdHRwUmVxdWVzdC5cbiAgICAgICAgLy8gMi4gTG9hZCB0aGUgaW1hZ2UgYXMgQXJyYXlCdWZmZXIgZm9yIHJlYWRpbmcgb3JpZW50YXRpb24gaWYgaXRzIGEgSlBFRyBpbWFnZS5cbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB2YXIgY2xvbmUgPSB0aGlzLmNsb25lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVsb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy54aHIgPSB4aHI7XG5cbiAgICAgICAgLy8gMS4gQ3Jvc3Mgb3JpZ2luIHJlcXVlc3RzIGFyZSBvbmx5IHN1cHBvcnRlZCBmb3IgcHJvdG9jb2wgc2NoZW1lczpcbiAgICAgICAgLy8gaHR0cCwgaHR0cHMsIGRhdGEsIGNocm9tZSwgY2hyb21lLWV4dGVuc2lvbi5cbiAgICAgICAgLy8gMi4gQWNjZXNzIHRvIFhNTEh0dHBSZXF1ZXN0IGZyb20gYSBEYXRhIFVSTCB3aWxsIGJlIGJsb2NrZWQgYnkgQ09SUyBwb2xpY3lcbiAgICAgICAgLy8gaW4gc29tZSBicm93c2VycyBhcyBJRTExIGFuZCBTYWZhcmkuXG4gICAgICAgIHhoci5vbmFib3J0ID0gY2xvbmU7XG4gICAgICAgIHhoci5vbmVycm9yID0gY2xvbmU7XG4gICAgICAgIHhoci5vbnRpbWVvdXQgPSBjbG9uZTtcbiAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gQWJvcnQgdGhlIHJlcXVlc3QgZGlyZWN0bHkgaWYgaXQgbm90IGEgSlBFRyBpbWFnZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG4gICAgICAgICAgaWYgKHhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJykgIT09IE1JTUVfVFlQRV9KUEVHKSB7XG4gICAgICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMucmVhZCh4aHIucmVzcG9uc2UpO1xuICAgICAgICB9O1xuICAgICAgICB4aHIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLnJlbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIF90aGlzLnhociA9IG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQnVzdCBjYWNoZSB3aGVuIHRoZXJlIGlzIGEgXCJjcm9zc09yaWdpblwiIHByb3BlcnR5IHRvIGF2b2lkIGJyb3dzZXIgY2FjaGUgZXJyb3JcbiAgICAgICAgaWYgKG9wdGlvbnMuY2hlY2tDcm9zc09yaWdpbiAmJiBpc0Nyb3NzT3JpZ2luVVJMKHVybCkgJiYgZWxlbWVudC5jcm9zc09yaWdpbikge1xuICAgICAgICAgIHVybCA9IGFkZFRpbWVzdGFtcCh1cmwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIHRoaXJkIHBhcmFtZXRlciBpcyByZXF1aXJlZCBmb3IgYXZvaWRpbmcgc2lkZS1lZmZlY3QgKCM2ODIpXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IGVsZW1lbnQuY3Jvc3NPcmlnaW4gPT09ICd1c2UtY3JlZGVudGlhbHMnO1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZWFkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZChhcnJheUJ1ZmZlcikge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBpbWFnZURhdGEgPSB0aGlzLmltYWdlRGF0YTtcblxuICAgICAgICAvLyBSZXNldCB0aGUgb3JpZW50YXRpb24gdmFsdWUgdG8gaXRzIGRlZmF1bHQgdmFsdWUgMVxuICAgICAgICAvLyBhcyBzb21lIGlPUyBicm93c2VycyB3aWxsIHJlbmRlciBpbWFnZSB3aXRoIGl0cyBvcmllbnRhdGlvblxuICAgICAgICB2YXIgb3JpZW50YXRpb24gPSByZXNldEFuZEdldE9yaWVudGF0aW9uKGFycmF5QnVmZmVyKTtcbiAgICAgICAgdmFyIHJvdGF0ZSA9IDA7XG4gICAgICAgIHZhciBzY2FsZVggPSAxO1xuICAgICAgICB2YXIgc2NhbGVZID0gMTtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID4gMSkge1xuICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IFVSTCB3aGljaCBoYXMgdGhlIGRlZmF1bHQgb3JpZW50YXRpb24gdmFsdWVcbiAgICAgICAgICB0aGlzLnVybCA9IGFycmF5QnVmZmVyVG9EYXRhVVJMKGFycmF5QnVmZmVyLCBNSU1FX1RZUEVfSlBFRyk7XG4gICAgICAgICAgdmFyIF9wYXJzZU9yaWVudGF0aW9uID0gcGFyc2VPcmllbnRhdGlvbihvcmllbnRhdGlvbik7XG4gICAgICAgICAgcm90YXRlID0gX3BhcnNlT3JpZW50YXRpb24ucm90YXRlO1xuICAgICAgICAgIHNjYWxlWCA9IF9wYXJzZU9yaWVudGF0aW9uLnNjYWxlWDtcbiAgICAgICAgICBzY2FsZVkgPSBfcGFyc2VPcmllbnRhdGlvbi5zY2FsZVk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMucm90YXRhYmxlKSB7XG4gICAgICAgICAgaW1hZ2VEYXRhLnJvdGF0ZSA9IHJvdGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5zY2FsYWJsZSkge1xuICAgICAgICAgIGltYWdlRGF0YS5zY2FsZVggPSBzY2FsZVg7XG4gICAgICAgICAgaW1hZ2VEYXRhLnNjYWxlWSA9IHNjYWxlWTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsb25lKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb25lXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgICAgIHVybCA9IHRoaXMudXJsO1xuICAgICAgICB2YXIgY3Jvc3NPcmlnaW4gPSBlbGVtZW50LmNyb3NzT3JpZ2luO1xuICAgICAgICB2YXIgY3Jvc3NPcmlnaW5VcmwgPSB1cmw7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2hlY2tDcm9zc09yaWdpbiAmJiBpc0Nyb3NzT3JpZ2luVVJMKHVybCkpIHtcbiAgICAgICAgICBpZiAoIWNyb3NzT3JpZ2luKSB7XG4gICAgICAgICAgICBjcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEJ1c3QgY2FjaGUgd2hlbiB0aGVyZSBpcyBub3QgYSBcImNyb3NzT3JpZ2luXCIgcHJvcGVydHkgKCM1MTkpXG4gICAgICAgICAgY3Jvc3NPcmlnaW5VcmwgPSBhZGRUaW1lc3RhbXAodXJsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNyb3NzT3JpZ2luID0gY3Jvc3NPcmlnaW47XG4gICAgICAgIHRoaXMuY3Jvc3NPcmlnaW5VcmwgPSBjcm9zc09yaWdpblVybDtcbiAgICAgICAgdmFyIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGlmIChjcm9zc09yaWdpbikge1xuICAgICAgICAgIGltYWdlLmNyb3NzT3JpZ2luID0gY3Jvc3NPcmlnaW47XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2Uuc3JjID0gY3Jvc3NPcmlnaW5VcmwgfHwgdXJsO1xuICAgICAgICBpbWFnZS5hbHQgPSBlbGVtZW50LmFsdCB8fCAnVGhlIGltYWdlIHRvIGNyb3AnO1xuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgICAgIGltYWdlLm9ubG9hZCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IHRoaXMuc3RvcC5iaW5kKHRoaXMpO1xuICAgICAgICBhZGRDbGFzcyhpbWFnZSwgQ0xBU1NfSElERSk7XG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaW1hZ2UsIGVsZW1lbnQubmV4dFNpYmxpbmcpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzdGFydFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICAgICAgdmFyIGltYWdlID0gdGhpcy5pbWFnZTtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gbnVsbDtcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IG51bGw7XG4gICAgICAgIHRoaXMuc2l6aW5nID0gdHJ1ZTtcblxuICAgICAgICAvLyBNYXRjaCBhbGwgYnJvd3NlcnMgdGhhdCB1c2UgV2ViS2l0IGFzIHRoZSBsYXlvdXQgZW5naW5lIGluIGlPUyBkZXZpY2VzLFxuICAgICAgICAvLyBzdWNoIGFzIFNhZmFyaSBmb3IgaU9TLCBDaHJvbWUgZm9yIGlPUywgYW5kIGluLWFwcCBicm93c2Vycy5cbiAgICAgICAgdmFyIGlzSU9TV2ViS2l0ID0gV0lORE9XLm5hdmlnYXRvciAmJiAvKD86aVBhZHxpUGhvbmV8aVBvZCkuKj9BcHBsZVdlYktpdC9pLnRlc3QoV0lORE9XLm5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgICB2YXIgZG9uZSA9IGZ1bmN0aW9uIGRvbmUobmF0dXJhbFdpZHRoLCBuYXR1cmFsSGVpZ2h0KSB7XG4gICAgICAgICAgYXNzaWduKF90aGlzMi5pbWFnZURhdGEsIHtcbiAgICAgICAgICAgIG5hdHVyYWxXaWR0aDogbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgbmF0dXJhbEhlaWdodDogbmF0dXJhbEhlaWdodCxcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBuYXR1cmFsV2lkdGggLyBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgX3RoaXMyLmluaXRpYWxJbWFnZURhdGEgPSBhc3NpZ24oe30sIF90aGlzMi5pbWFnZURhdGEpO1xuICAgICAgICAgIF90aGlzMi5zaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICBfdGhpczIuc2l6ZWQgPSB0cnVlO1xuICAgICAgICAgIF90aGlzMi5idWlsZCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIE1vc3QgbW9kZXJuIGJyb3dzZXJzIChleGNlcHRzIGlPUyBXZWJLaXQpXG4gICAgICAgIGlmIChpbWFnZS5uYXR1cmFsV2lkdGggJiYgIWlzSU9TV2ViS2l0KSB7XG4gICAgICAgICAgZG9uZShpbWFnZS5uYXR1cmFsV2lkdGgsIGltYWdlLm5hdHVyYWxIZWlnaHQpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2l6aW5nSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy5zaXppbmdJbWFnZSA9IHNpemluZ0ltYWdlO1xuICAgICAgICBzaXppbmdJbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZG9uZShzaXppbmdJbWFnZS53aWR0aCwgc2l6aW5nSW1hZ2UuaGVpZ2h0KTtcbiAgICAgICAgICBpZiAoIWlzSU9TV2ViS2l0KSB7XG4gICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKHNpemluZ0ltYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHNpemluZ0ltYWdlLnNyYyA9IGltYWdlLnNyYztcblxuICAgICAgICAvLyBpT1MgV2ViS2l0IHdpbGwgY29udmVydCB0aGUgaW1hZ2UgYXV0b21hdGljYWxseVxuICAgICAgICAvLyB3aXRoIGl0cyBvcmllbnRhdGlvbiBvbmNlIGFwcGVuZCBpdCBpbnRvIERPTSAoIzI3OSlcbiAgICAgICAgaWYgKCFpc0lPU1dlYktpdCkge1xuICAgICAgICAgIHNpemluZ0ltYWdlLnN0eWxlLmNzc1RleHQgPSAnbGVmdDowOycgKyAnbWF4LWhlaWdodDpub25lIWltcG9ydGFudDsnICsgJ21heC13aWR0aDpub25lIWltcG9ydGFudDsnICsgJ21pbi1oZWlnaHQ6MCFpbXBvcnRhbnQ7JyArICdtaW4td2lkdGg6MCFpbXBvcnRhbnQ7JyArICdvcGFjaXR5OjA7JyArICdwb3NpdGlvbjphYnNvbHV0ZTsnICsgJ3RvcDowOycgKyAnei1pbmRleDotMTsnO1xuICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2l6aW5nSW1hZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInN0b3BcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICB2YXIgaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgICAgICBpbWFnZS5vbmxvYWQgPSBudWxsO1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgaW1hZ2UucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpbWFnZSk7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBudWxsO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJidWlsZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2l6ZWQgfHwgdGhpcy5yZWFkeSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGltYWdlID0gdGhpcy5pbWFnZTtcblxuICAgICAgICAvLyBDcmVhdGUgY3JvcHBlciBlbGVtZW50c1xuICAgICAgICB2YXIgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gVEVNUExBVEU7XG4gICAgICAgIHZhciBjcm9wcGVyID0gdGVtcGxhdGUucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1jb250YWluZXJcIikpO1xuICAgICAgICB2YXIgY2FudmFzID0gY3JvcHBlci5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWNhbnZhc1wiKSk7XG4gICAgICAgIHZhciBkcmFnQm94ID0gY3JvcHBlci5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWRyYWctYm94XCIpKTtcbiAgICAgICAgdmFyIGNyb3BCb3ggPSBjcm9wcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItY3JvcC1ib3hcIikpO1xuICAgICAgICB2YXIgZmFjZSA9IGNyb3BCb3gucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1mYWNlXCIpKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMuY3JvcHBlciA9IGNyb3BwZXI7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmRyYWdCb3ggPSBkcmFnQm94O1xuICAgICAgICB0aGlzLmNyb3BCb3ggPSBjcm9wQm94O1xuICAgICAgICB0aGlzLnZpZXdCb3ggPSBjcm9wcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItdmlldy1ib3hcIikpO1xuICAgICAgICB0aGlzLmZhY2UgPSBmYWNlO1xuICAgICAgICBjYW52YXMuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgICAgIC8vIEhpZGUgdGhlIG9yaWdpbmFsIGltYWdlXG4gICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIENMQVNTX0hJRERFTik7XG5cbiAgICAgICAgLy8gSW5zZXJ0cyB0aGUgY3JvcHBlciBhZnRlciB0byB0aGUgY3VycmVudCBpbWFnZVxuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGNyb3BwZXIsIGVsZW1lbnQubmV4dFNpYmxpbmcpO1xuXG4gICAgICAgIC8vIFNob3cgdGhlIGhpZGRlbiBpbWFnZVxuICAgICAgICByZW1vdmVDbGFzcyhpbWFnZSwgQ0xBU1NfSElERSk7XG4gICAgICAgIHRoaXMuaW5pdFByZXZpZXcoKTtcbiAgICAgICAgdGhpcy5iaW5kKCk7XG4gICAgICAgIG9wdGlvbnMuaW5pdGlhbEFzcGVjdFJhdGlvID0gTWF0aC5tYXgoMCwgb3B0aW9ucy5pbml0aWFsQXNwZWN0UmF0aW8pIHx8IE5hTjtcbiAgICAgICAgb3B0aW9ucy5hc3BlY3RSYXRpbyA9IE1hdGgubWF4KDAsIG9wdGlvbnMuYXNwZWN0UmF0aW8pIHx8IE5hTjtcbiAgICAgICAgb3B0aW9ucy52aWV3TW9kZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDMsIE1hdGgucm91bmQob3B0aW9ucy52aWV3TW9kZSkpKSB8fCAwO1xuICAgICAgICBhZGRDbGFzcyhjcm9wQm94LCBDTEFTU19ISURERU4pO1xuICAgICAgICBpZiAoIW9wdGlvbnMuZ3VpZGVzKSB7XG4gICAgICAgICAgYWRkQ2xhc3MoY3JvcEJveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItZGFzaGVkXCIpKSwgQ0xBU1NfSElEREVOKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuY2VudGVyKSB7XG4gICAgICAgICAgYWRkQ2xhc3MoY3JvcEJveC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItY2VudGVyXCIpKSwgQ0xBU1NfSElEREVOKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5iYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgYWRkQ2xhc3MoY3JvcHBlciwgXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1iZ1wiKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLmhpZ2hsaWdodCkge1xuICAgICAgICAgIGFkZENsYXNzKGZhY2UsIENMQVNTX0lOVklTSUJMRSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuY3JvcEJveE1vdmFibGUpIHtcbiAgICAgICAgICBhZGRDbGFzcyhmYWNlLCBDTEFTU19NT1ZFKTtcbiAgICAgICAgICBzZXREYXRhKGZhY2UsIERBVEFfQUNUSU9OLCBBQ1RJT05fQUxMKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuY3JvcEJveFJlc2l6YWJsZSkge1xuICAgICAgICAgIGFkZENsYXNzKGNyb3BCb3guZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWxpbmVcIikpLCBDTEFTU19ISURERU4pO1xuICAgICAgICAgIGFkZENsYXNzKGNyb3BCb3guZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLXBvaW50XCIpKSwgQ0xBU1NfSElEREVOKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXREcmFnTW9kZShvcHRpb25zLmRyYWdNb2RlKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuYXV0b0Nyb3ApIHtcbiAgICAgICAgICB0aGlzLmNyb3AoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5yZWFkeSkpIHtcbiAgICAgICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9SRUFEWSwgb3B0aW9ucy5yZWFkeSwge1xuICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoZWxlbWVudCwgRVZFTlRfUkVBRFkpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ1bmJ1aWxkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdW5idWlsZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlYWR5KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51bmJpbmQoKTtcbiAgICAgICAgdGhpcy5yZXNldFByZXZpZXcoKTtcbiAgICAgICAgdmFyIHBhcmVudE5vZGUgPSB0aGlzLmNyb3BwZXIucGFyZW50Tm9kZTtcbiAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY3JvcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCBDTEFTU19ISURERU4pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ1bmNyZWF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuY3JlYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5yZWFkeSkge1xuICAgICAgICAgIHRoaXMudW5idWlsZCgpO1xuICAgICAgICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmNyb3BwZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNpemluZykge1xuICAgICAgICAgIHRoaXMuc2l6aW5nSW1hZ2Uub25sb2FkID0gbnVsbDtcbiAgICAgICAgICB0aGlzLnNpemluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuc2l6ZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlbG9hZGluZykge1xuICAgICAgICAgIHRoaXMueGhyLm9uYWJvcnQgPSBudWxsO1xuICAgICAgICAgIHRoaXMueGhyLmFib3J0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZSkge1xuICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IHRoZSBubyBjb25mbGljdCBjcm9wcGVyIGNsYXNzLlxuICAgICAgICogQHJldHVybnMge0Nyb3BwZXJ9IFRoZSBjcm9wcGVyIGNsYXNzLlxuICAgICAgICovXG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwibm9Db25mbGljdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgICAgIHdpbmRvdy5Dcm9wcGVyID0gQW5vdGhlckNyb3BwZXI7XG4gICAgICAgIHJldHVybiBDcm9wcGVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENoYW5nZSB0aGUgZGVmYXVsdCBvcHRpb25zLlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBUaGUgbmV3IGRlZmF1bHQgb3B0aW9ucy5cbiAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXREZWZhdWx0c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldERlZmF1bHRzKG9wdGlvbnMpIHtcbiAgICAgICAgYXNzaWduKERFRkFVTFRTLCBpc1BsYWluT2JqZWN0KG9wdGlvbnMpICYmIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1dKTtcbiAgfSgpO1xuICBhc3NpZ24oQ3JvcHBlci5wcm90b3R5cGUsIHJlbmRlciwgcHJldmlldywgZXZlbnRzLCBoYW5kbGVycywgY2hhbmdlLCBtZXRob2RzKTtcblxuICByZXR1cm4gQ3JvcHBlcjtcblxufSkpO1xuIiwgIi8qIVxuICogalF1ZXJ5IENyb3BwZXIgdjEuMC4wXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmVuZ3l1YW5jaGVuL2pxdWVyeS1jcm9wcGVyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE4IENoZW4gRmVuZ3l1YW5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMTgtMDQtMDFUMDY6MjA6MTMuMTY4WlxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgQ3JvcHBlciBmcm9tICdjcm9wcGVyanMnO1xuXG5pZiAoJC5mbikge1xuICB2YXIgQW5vdGhlckNyb3BwZXIgPSAkLmZuLmNyb3BwZXI7XG4gIHZhciBOQU1FU1BBQ0UgPSAnY3JvcHBlcic7XG5cbiAgJC5mbi5jcm9wcGVyID0gZnVuY3Rpb24galF1ZXJ5Q3JvcHBlcihvcHRpb24pIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSB2b2lkIDA7XG5cbiAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGksIGVsZW1lbnQpIHtcbiAgICAgIHZhciAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG4gICAgICB2YXIgaXNEZXN0cm95ID0gb3B0aW9uID09PSAnZGVzdHJveSc7XG4gICAgICB2YXIgY3JvcHBlciA9ICRlbGVtZW50LmRhdGEoTkFNRVNQQUNFKTtcblxuICAgICAgaWYgKCFjcm9wcGVyKSB7XG4gICAgICAgIGlmIChpc0Rlc3Ryb3kpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCAkZWxlbWVudC5kYXRhKCksICQuaXNQbGFpbk9iamVjdChvcHRpb24pICYmIG9wdGlvbik7XG5cbiAgICAgICAgY3JvcHBlciA9IG5ldyBDcm9wcGVyKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICAkZWxlbWVudC5kYXRhKE5BTUVTUEFDRSwgY3JvcHBlcik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgZm4gPSBjcm9wcGVyW29wdGlvbl07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZm4uYXBwbHkoY3JvcHBlciwgYXJncyk7XG5cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBjcm9wcGVyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzRGVzdHJveSkge1xuICAgICAgICAgICAgJGVsZW1lbnQucmVtb3ZlRGF0YShOQU1FU1BBQ0UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdCAhPT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdGhpcztcbiAgfTtcblxuICAkLmZuLmNyb3BwZXIuQ29uc3RydWN0b3IgPSBDcm9wcGVyO1xuICAkLmZuLmNyb3BwZXIuc2V0RGVmYXVsdHMgPSBDcm9wcGVyLnNldERlZmF1bHRzO1xuICAkLmZuLmNyb3BwZXIubm9Db25mbGljdCA9IGZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgJC5mbi5jcm9wcGVyID0gQW5vdGhlckNyb3BwZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG59XG4iLCAiaW1wb3J0IFwianF1ZXJ5LWNyb3BwZXJcIjtcblxuaW1wb3J0IHsgRGVmZXJyZWRXaWRnZXQgfSBmcm9tIFwiLi4vY29yZS9jb3JlLndpZGdldC5qc1wiO1xuXG4vKipcbiAqIF9fUHJpbWVGYWNlcyBJbWFnZUNyb3BwZXIgV2lkZ2V0X19cbiAqIFxuICogSW1hZ2VDcm9wcGVyIGFsbG93cyBjcm9wcGluZyBhIGNlcnRhaW4gcmVnaW9uIG9mIGFuIGltYWdlLiBBIG5ldyBpbWFnZSBpcyBjcmVhdGVkIGNvbnRhaW5pbmcgdGhlIGNyb3BwZWQgYXJlYSBhbmRcbiAqIGFzc2lnbmVkIHRvIGEgYENyb3BwZWRJbWFnZWAgaW5zdGFuY2VkIG9uIHRoZSBzZXJ2ZXIgc2lkZS4gVXNlcyBDcm9wcGVySlMgLSB0byBpbnRlcmFjdCB3aXRoIHRoZSBpbWFnZSBjcm9wcGVyXG4gKiBwcm9ncmFtbWF0aWNhbGx5LCB1c2UgdGhlIENyb3BwZXIgSlF1ZXJ5IHBsdWdpbi4gRm9yIGV4YW1wbGU6XG4gKiBcbiAqIGBgYGphdmFzY3JpcHRcbiAqIFBGKFwibXlJbWFnZUNyb3BwZXJXaWRnZXRcIikuaW1hZ2UuY3JvcHBlcihcInJvdGF0ZVwiLCA5MCk7XG4gKiBgYGBcbiAqIFxuICogQHByb3Age2Jvb2xlYW59IFtjcm9wcGluZ10gV2hldGhlciB0aGUgaW1hZ2UgaXMgY3VycmVudGx5IGJlaW5nIGNyb3BwZWQuIFxuICogQHByb3Age0Nyb3BwZXJ9IGNyb3BwZXIgVGhlIGN1cnJlbnQge0BsaW5rIENyb3BwZXJ9IGluc3RhbmNlLlxuICogQHByb3Age0pRdWVyeX0gaW1hZ2UgRE9NIGVsZW1lbnQgb2YgdGhlIGltYWdlIGVsZW1lbnQgdG8gY3JvcC4gWW91IGNhbiB1c2UgdGhpcyBlbGVtZW50IHRvIGFjY2VzcyB0aGUge0BsaW5rIENyb3BwZXJ9LlxuICogQHByb3Age0pRdWVyeX0ganFDb29yZHMgRE9NIGVsZW1lbnQgb2YgdGhlIGhpZGRlbiBJTlBVVCBlbGVtZW50IHRoYXQgc3RvcmVzIHRoZSBzZWxlY3RlZCBjcm9wIGFyZWEuXG4gKiBcbiAqIEBpbnRlcmZhY2Uge1ByaW1lRmFjZXMud2lkZ2V0LkltYWdlQ3JvcHBlckNmZ30gY2ZnIFRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUge0BsaW5rICBJbWFnZUNyb3BwZXJ8SW1hZ2VDcm9wcGVyIHdpZGdldH0uXG4gKiBZb3UgY2FuIGFjY2VzcyB0aGlzIGNvbmZpZ3VyYXRpb24gdmlhIHtAbGluayBQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0LmNmZ3xCYXNlV2lkZ2V0LmNmZ30uIFBsZWFzZSBub3RlIHRoYXQgdGhpc1xuICogY29uZmlndXJhdGlvbiBpcyB1c3VhbGx5IG1lYW50IHRvIGJlIHJlYWQtb25seSBhbmQgc2hvdWxkIG5vdCBiZSBtb2RpZmllZC5cbiAqIEBleHRlbmRzIHtQcmltZUZhY2VzLndpZGdldC5EZWZlcnJlZFdpZGdldENmZ30gY2ZnXG4gKiBAZXh0ZW5kcyB7Q3JvcHBlci5PcHRpb25zfSBjZmdcbiAqIFxuICogQHByb3Age3N0cmluZ30gY2ZnLmltYWdlIElEIG9mIHRoZSBJTUFHRSBlbGVtZW50LlxuICogQHByb3Age1tudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdfSBjZmcuaW5pdGlhbENvb3JkcyBJbml0aWFsIGNvb3JkaW5hdGVzIG9mIHRoZSBjcm9wcGVyIGFyZWEgKHgsIHksIHdpZHRoLFxuICogaGVpZ2h0KS5cbiAqL1xuZXhwb3J0IGNsYXNzIEltYWdlQ3JvcHBlciBleHRlbmRzIERlZmVycmVkV2lkZ2V0IHtcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLlBhcnRpYWxXaWRnZXRDZmc8VENmZz59IGNmZ1xuICAgICAqL1xuICAgIGluaXQoY2ZnKSB7XG4gICAgICAgIHN1cGVyLmluaXQoY2ZnKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9ICQoUHJpbWVGYWNlcy5lc2NhcGVDbGllbnRJZCh0aGlzLmNmZy5pbWFnZSkpO1xuICAgICAgICB0aGlzLmpxQ29vcmRzID0gJCh0aGlzLmpxSWQgKyAnX2Nvb3JkcycpO1xuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbWluIGFuZCBtYXggb2YgdGhlIGNyb3BwZXIgYm94XG4gICAgICAgIHZhciBpbWFnZVdpZHRoID0gdGhpcy5pbWFnZVswXS5uYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICBpbWFnZUhlaWdodCA9IHRoaXMuaW1hZ2VbMF0ubmF0dXJhbEhlaWdodDtcbiAgICAgICAgdGhpcy5jZmcubWluQ3JvcEJveFdpZHRoID0gdGhpcy5jZmcubWluU2l6ZSA/IHRoaXMuY2ZnLm1pblNpemVbMF0gOiAwO1xuICAgICAgICB0aGlzLmNmZy5taW5Dcm9wQm94SGVpZ2h0ID0gdGhpcy5jZmcubWluU2l6ZSA/IHRoaXMuY2ZnLm1pblNpemVbMV0gOiAwO1xuICAgICAgICB0aGlzLmNmZy5tYXhDcm9wQm94V2lkdGggPSBNYXRoLm1pbihpbWFnZVdpZHRoLCB0aGlzLmNmZy5tYXhTaXplID8gdGhpcy5jZmcubWF4U2l6ZVswXSA6IGltYWdlV2lkdGgpO1xuICAgICAgICB0aGlzLmNmZy5tYXhDcm9wQm94SGVpZ2h0ID0gTWF0aC5taW4oaW1hZ2VIZWlnaHQsIHRoaXMuY2ZnLm1heFNpemUgPyB0aGlzLmNmZy5tYXhTaXplWzFdIDogaW1hZ2VIZWlnaHQpO1xuXG4gICAgICAgIHRoaXMuY2ZnLmRhdGEgPSB7XG4gICAgICAgICAgICB3aWR0aCA6ICh0aGlzLmNmZy5taW5Dcm9wQm94V2lkdGggKyB0aGlzLmNmZy5tYXhDcm9wQm94V2lkdGgpIC8gMixcbiAgICAgICAgICAgIGhlaWdodCA6ICh0aGlzLmNmZy5taW5Dcm9wQm94SGVpZ2h0ICsgdGhpcy5jZmcubWF4Q3JvcEJveEhlaWdodCkgLyAyLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucmVuZGVyRGVmZXJyZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5jbHVkZVxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9yZW5kZXIoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZSB0aGUgY3JvcHBlclxuICAgICAgICB0aGlzLmltYWdlLmNyb3BwZXIodGhpcy5jZmcpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBjb29yZGluYXRlcyBhcyB0aGUgYm94IGlzIGFkanVzdGVkXG4gICAgICAgIHRoaXMuaW1hZ2Uub24oJ2Nyb3AnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICR0aGlzLm9uQ3JvcChldmVudClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pbWFnZS5vbigncmVhZHknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBzZXQgdGhlIGluaXRpYWwgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGlmICgkdGhpcy5jZmcuaW5pdGlhbENvb3Jkcykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci5zZXRDcm9wQm94RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgOiAkdGhpcy5jZmcuaW5pdGlhbENvb3Jkc1swXSxcbiAgICAgICAgICAgICAgICAgICAgdG9wIDogJHRoaXMuY2ZnLmluaXRpYWxDb29yZHNbMV0sXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoIDogJHRoaXMuY2ZnLmluaXRpYWxDb29yZHNbMl0sXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA6ICR0aGlzLmNmZy5pbml0aWFsQ29vcmRzWzNdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEdldCB0aGUgQ3JvcHBlci5qcyBpbnN0YW5jZSBhZnRlciBpbml0aWFsaXplZFxuICAgICAgICB0aGlzLmNyb3BwZXIgPSB0aGlzLmltYWdlLmRhdGEoJ2Nyb3BwZXInKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcblxuICAgICAgICAvLyBjbGVhbiB1cCBtZW1vcnlcbiAgICAgICAgaWYgKHRoaXMuY3JvcHBlcikge1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZvciB3aGVuIGEgY3JvcCB3YXMgcGVyZm9ybWVkLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtKUXVlcnlDcm9wcGVyLkNyb3BFdmVudH0gZXZlbnQgVGhlIGNyb3AgZXZlbnQgdGhhdCBvY2N1cnJlZC5cbiAgICAgKi9cbiAgICBvbkNyb3AoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuY3JvcHBpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB3aWR0aCA9IGV2ZW50LmRldGFpbC53aWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IGV2ZW50LmRldGFpbC5oZWlnaHQ7XG5cbiAgICAgICAgLy8gY29uc3RyYWluIHRoZSBib3ggaWYgbmVjZXNzYXJ5XG4gICAgICAgIGlmICh3aWR0aCA8IHRoaXMuY2ZnLm1pbkNyb3BCb3hXaWR0aFxuICAgICAgICAgICAgICAgIHx8IGhlaWdodCA8IHRoaXMuY2ZnLm1pbkNyb3BCb3hIZWlnaHRcbiAgICAgICAgICAgICAgICB8fCB3aWR0aCA+IHRoaXMuY2ZnLm1heENyb3BCb3hXaWR0aFxuICAgICAgICAgICAgICAgIHx8IGhlaWdodCA+IHRoaXMuY2ZnLm1heENyb3BCb3hIZWlnaHQpIHtcblxuICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1heCh0aGlzLmNmZy5taW5Dcm9wQm94V2lkdGgsIE1hdGgubWluKHRoaXMuY2ZnLm1heENyb3BCb3hXaWR0aCwgd2lkdGgpKTtcbiAgICAgICAgICAgIGhlaWdodCA9IE1hdGgubWF4KHRoaXMuY2ZnLm1pbkNyb3BCb3hIZWlnaHQsIE1hdGgubWluKHRoaXMuY2ZnLm1heENyb3BCb3hIZWlnaHQsIGhlaWdodCkpO1xuXG4gICAgICAgICAgICB0aGlzLmNyb3BwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlci5zZXRDcm9wQm94RGF0YSh7XG4gICAgICAgICAgICAgICAgd2lkdGggOiB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQgOiBoZWlnaHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IHRoZSBuZXcgYm94IGNvb3JkaW5hdGVzXG4gICAgICAgIHZhciBjcm9wQ29vcmRzID0gZXZlbnQuZGV0YWlsLnggKyBcIl9cIiArIGV2ZW50LmRldGFpbC55ICsgXCJfXCIgKyB3aWR0aCArIFwiX1wiICsgaGVpZ2h0O1xuICAgICAgICB0aGlzLmpxQ29vcmRzLnZhbChjcm9wQ29vcmRzKTtcbiAgICAgICAgdGhpcy5jcm9wcGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBpbWFnZSBhbmQgY3JvcCBib3ggdG8gdGhlaXIgaW5pdGlhbCBzdGF0ZXMuXG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNyb3BwZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlci5yZXNldCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBjcm9wIGJveC5cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgaWYgKHRoaXMuY3JvcHBlcikge1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGVzICh1bmZyZWV6ZXMpIHRoZSBjcm9wcGVyLlxuICAgICAqL1xuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3JvcHBlcikge1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZXMgKGZyZWV6ZXMpIHRoZSBjcm9wcGVyLlxuICAgICAqL1xuICAgIGRpc2FibGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmNyb3BwZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlci5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFVQSxLQUFDLFNBQVUsUUFBUSxTQUFTO0FBQzFCLGFBQU8sWUFBWSxZQUFZLE9BQU8sV0FBVyxjQUFjLE9BQU8sVUFBVSxRQUFRLElBQ3hGLE9BQU8sV0FBVyxjQUFjLE9BQU8sTUFBTSxPQUFPLE9BQU8sS0FDMUQsU0FBUyxPQUFPLGVBQWUsY0FBYyxhQUFhLFVBQVUsTUFBTSxPQUFPLFVBQVUsUUFBUTtBQUFBLElBQ3RHLEdBQUcsU0FBTyxXQUFZO0FBQUU7QUFFdEIsZUFBUyxRQUFRLEdBQUcsR0FBRztBQUNyQixZQUFJLElBQUksT0FBTyxLQUFLLENBQUM7QUFDckIsWUFBSSxPQUFPLHVCQUF1QjtBQUNoQyxjQUFJLElBQUksT0FBTyxzQkFBc0IsQ0FBQztBQUN0QyxnQkFBTSxJQUFJLEVBQUUsT0FBTyxTQUFVQSxJQUFHO0FBQzlCLG1CQUFPLE9BQU8seUJBQXlCLEdBQUdBLEVBQUMsRUFBRTtBQUFBLFVBQy9DLENBQUMsSUFBSSxFQUFFLEtBQUssTUFBTSxHQUFHLENBQUM7QUFBQSxRQUN4QjtBQUNBLGVBQU87QUFBQSxNQUNUO0FBQ0EsZUFBUyxlQUFlLEdBQUc7QUFDekIsaUJBQVMsSUFBSSxHQUFHLElBQUksVUFBVSxRQUFRLEtBQUs7QUFDekMsY0FBSSxJQUFJLFFBQVEsVUFBVSxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQztBQUMvQyxjQUFJLElBQUksUUFBUSxPQUFPLENBQUMsR0FBRyxJQUFFLEVBQUUsUUFBUSxTQUFVQSxJQUFHO0FBQ2xELDRCQUFnQixHQUFHQSxJQUFHLEVBQUVBLEVBQUMsQ0FBQztBQUFBLFVBQzVCLENBQUMsSUFBSSxPQUFPLDRCQUE0QixPQUFPLGlCQUFpQixHQUFHLE9BQU8sMEJBQTBCLENBQUMsQ0FBQyxJQUFJLFFBQVEsT0FBTyxDQUFDLENBQUMs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QUEsVUFDakMsUUFBUyxNQUFNLElBQUksY0FBYyxDQUFDO0FBQUEsUUFDdEMsQ0FBQztBQUFBLE1BQ0w7QUFBQSxJQUNKLENBQUM7QUFHRCxTQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssU0FBUztBQUFBLEVBQzVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLFVBQVU7QUFDTixVQUFNLFFBQVE7QUFHZCxRQUFJLEtBQUssU0FBUztBQUNkLFdBQUssUUFBUSxRQUFRO0FBQUEsSUFDekI7QUFBQSxFQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsT0FBTyxPQUFPO0FBQ1YsUUFBSSxLQUFLLFVBQVU7QUFDZjtBQUFBLElBQ0o7QUFFQSxRQUFJLFFBQVEsTUFBTSxPQUFPO0FBQ3pCLFFBQUksU0FBUyxNQUFNLE9BQU87QUFHMUIsUUFBSSxRQUFRLEtBQUssSUFBSSxtQkFDVixTQUFTLEtBQUssSUFBSSxvQkFDbEIsUUFBUSxLQUFLLElBQUksbUJBQ2pCLFNBQVMsS0FBSyxJQUFJLGtCQUFrQjtBQUUzQyxjQUFRLEtBQUssSUFBSSxLQUFLLElBQUksaUJBQWlCLEtBQUssSUFBSSxLQUFLLElBQUksaUJBQWlCLEtBQUssQ0FBQztBQUNwRixlQUFTLEtBQUssSUFBSSxLQUFLLElBQUksa0JBQWtCLEtBQUssSUFBSSxLQUFLLElBQUksa0JBQWtCLE1BQU0sQ0FBQztBQUV4RixXQUFLLFdBQVc7QUFDaEIsV0FBSyxRQUFRLGVBQWU7QUFBQSxRQUN4QjtBQUFBLFFBQ0E7QUFBQSxNQUNKLENBQUM7QUFBQSxJQUNMO0FBR0EsUUFBSSxhQUFhLE1BQU0sT0FBTyxJQUFJLE1BQU0sTUFBTSxPQUFPLElBQUksTUFBTSxRQUFRLE1BQU07QUFDN0UsU0FBSyxTQUFTLElBQUksVUFBVTtBQUM1QixTQUFLLFdBQVc7QUFBQSxFQUNwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsUUFBUTtBQUNKLFFBQUksS0FBSyxTQUFTO0FBQ2QsV0FBSyxRQUFRLE1BQU07QUFBQSxJQUN2QjtBQUFBLEVBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFFBQVE7QUFDSixRQUFJLEtBQUssU0FBUztBQUNkLFdBQUssUUFBUSxNQUFNO0FBQUEsSUFDdkI7QUFBQSxFQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxTQUFTO0FBQ0wsUUFBSSxLQUFLLFNBQVM7QUFDZCxXQUFLLFFBQVEsT0FBTztBQUFBLElBQ3hCO0FBQUEsRUFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsVUFBVTtBQUNOLFFBQUksS0FBSyxTQUFTO0FBQ2QsV0FBSyxRQUFRLFFBQVE7QUFBQSxJQUN6QjtBQUFBLEVBQ0o7QUFDSjsiLAogICJuYW1lcyI6IFsiciIsICJvIiwgImlzUG9zaXRpdmVOdW1iZXIiLCAiYXNzaWduIiwgImxpc3RlbmVyIiwgInJlbmRlciIsICJwcmV2aWV3IiwgImNoYW5nZSIsICJjaGVjayIsICJnZXREYXRhIiwgInNldERhdGEiLCAiQ3JvcHBlciIsICJkb25lIiwgIkNyb3BwZXIiXQp9Cg==

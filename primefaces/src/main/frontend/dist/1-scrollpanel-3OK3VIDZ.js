import {
  DeferredWidget
} from "./chunk-HGD6GSK5.js";
import {
  __commonJS,
  __toESM
} from "./chunk-YRJTWU7C.js";

// ../../../../../../.yarn/berry/cache/jquery-npm-3.7.1-eeeac0f21e-10c0.zip/node_modules/jquery/dist/jquery.js
var require_jquery = __commonJS({
  "../../../../../../.yarn/berry/cache/jquery-npm-3.7.1-eeeac0f21e-10c0.zip/node_modules/jquery/dist/jquery.js"(exports, module) {
    (function(global, factory) {
      "use strict";
      if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) : function(w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
      } else {
        factory(global);
      }
    })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
      "use strict";
      var arr = [];
      var getProto = Object.getPrototypeOf;
      var slice = arr.slice;
      var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
      } : function(array) {
        return arr.concat.apply([], array);
      };
      var push = arr.push;
      var indexOf = arr.indexOf;
      var class2type = {};
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call(Object);
      var support = {};
      var isFunction = function isFunction2(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
      };
      var isWindow = function isWindow2(obj) {
        return obj != null && obj === obj.window;
      };
      var document2 = window2.document;
      var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
      };
      function DOMEval(code, node, doc) {
        doc = doc || document2;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) {
          for (i in preservedScriptAttributes) {
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) {
              script.setAttribute(i, val);
            }
          }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
      }
      function toType(obj) {
        if (obj == null) {
          return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
      }
      var version = "3.7.1", rhtmlSuffix = /HTML$/i, jQuery2 = function(selector, context) {
        return new jQuery2.fn.init(selector, context);
      };
      jQuery2.fn = jQuery2.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery2,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
          return slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
          if (num == null) {
            return slice.call(this);
          }
          return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
          var ret = jQuery2.merge(this.constructor(), elems);
          ret.prevObject = this;
          return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function(callback) {
          return jQuery2.each(this, callback);
        },
        map: function(callback) {
          return this.pushStack(jQuery2.map(this, function(elem, i) {
            return callback.call(elem, i, elem);
          }));
        },
        slice: function() {
          return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(jQuery2.grep(this, function(_elem, i) {
            return (i + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(jQuery2.grep(this, function(_elem, i) {
            return i % 2;
          }));
        },
        eq: function(i) {
          var len = this.length, j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push,
        sort: arr.sort,
        splice: arr.splice
      };
      jQuery2.extend = jQuery2.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
          deep = target;
          target = arguments[i] || {};
          i++;
        }
        if (typeof target !== "object" && !isFunction(target)) {
          target = {};
        }
        if (i === length) {
          target = this;
          i--;
        }
        for (; i < length; i++) {
          if ((options = arguments[i]) != null) {
            for (name in options) {
              copy = options[name];
              if (name === "__proto__" || target === copy) {
                continue;
              }
              if (deep && copy && (jQuery2.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                src = target[name];
                if (copyIsArray && !Array.isArray(src)) {
                  clone = [];
                } else if (!copyIsArray && !jQuery2.isPlainObject(src)) {
                  clone = {};
                } else {
                  clone = src;
                }
                copyIsArray = false;
                target[name] = jQuery2.extend(deep, clone, copy);
              } else if (copy !== void 0) {
                target[name] = copy;
              }
            }
          }
        }
        return target;
      };
      jQuery2.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(msg) {
          throw new Error(msg);
        },
        noop: function() {
        },
        isPlainObject: function(obj) {
          var proto, Ctor;
          if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
          }
          proto = getProto(obj);
          if (!proto) {
            return true;
          }
          Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
          return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
          var name;
          for (name in obj) {
            return false;
          }
          return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(code, options, doc) {
          DOMEval(code, { nonce: options && options.nonce }, doc);
        },
        each: function(obj, callback) {
          var length, i = 0;
          if (isArrayLike(obj)) {
            length = obj.length;
            for (; i < length; i++) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          } else {
            for (i in obj) {
              if (callback.call(obj[i], i, obj[i]) === false) {
                break;
              }
            }
          }
          return obj;
        },
        // Retrieve the text value of an array of DOM nodes
        text: function(elem) {
          var node, ret = "", i = 0, nodeType = elem.nodeType;
          if (!nodeType) {
            while (node = elem[i++]) {
              ret += jQuery2.text(node);
            }
          }
          if (nodeType === 1 || nodeType === 11) {
            return elem.textContent;
          }
          if (nodeType === 9) {
            return elem.documentElement.textContent;
          }
          if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
          }
          return ret;
        },
        // results is for internal usage only
        makeArray: function(arr2, results) {
          var ret = results || [];
          if (arr2 != null) {
            if (isArrayLike(Object(arr2))) {
              jQuery2.merge(
                ret,
                typeof arr2 === "string" ? [arr2] : arr2
              );
            } else {
              push.call(ret, arr2);
            }
          }
          return ret;
        },
        inArray: function(elem, arr2, i) {
          return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
        },
        isXMLDoc: function(elem) {
          var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
          return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
          var len = +second.length, j = 0, i = first.length;
          for (; j < len; j++) {
            first[i++] = second[j];
          }
          first.length = i;
          return first;
        },
        grep: function(elems, callback, invert) {
          var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
          for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
              matches.push(elems[i]);
            }
          }
          return matches;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
          var length, value, i = 0, ret = [];
          if (isArrayLike(elems)) {
            length = elems.length;
            for (; i < length; i++) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          } else {
            for (i in elems) {
              value = callback(elems[i], i, arg);
              if (value != null) {
                ret.push(value);
              }
            }
          }
          return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support
      });
      if (typeof Symbol === "function") {
        jQuery2.fn[Symbol.iterator] = arr[Symbol.iterator];
      }
      jQuery2.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(_i, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
        }
      );
      function isArrayLike(obj) {
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) {
          return false;
        }
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
      }
      function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
      }
      var pop = arr.pop;
      var sort = arr.sort;
      var splice = arr.splice;
      var whitespace = "[\\x20\\t\\r\\n\\f]";
      var rtrimCSS = new RegExp(
        "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
        "g"
      );
      jQuery2.contains = function(a, b) {
        var bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      };
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
          if (ch === "\0") {
            return "�";
          }
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }
        return "\\" + ch;
      }
      jQuery2.escapeSelector = function(sel) {
        return (sel + "").replace(rcssescape, fcssescape);
      };
      var preferredDoc = document2, pushNative = push;
      (function() {
        var i, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery2.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
          ID: new RegExp("^#(" + identifier + ")"),
          CLASS: new RegExp("^\\.(" + identifier + ")"),
          TAG: new RegExp("^(" + identifier + "|[*])"),
          ATTR: new RegExp("^" + attributes),
          PSEUDO: new RegExp("^" + pseudos),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + booleans + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape2, nonHex) {
          var high = "0x" + escape2.slice(1) - 65536;
          if (nonHex) {
            return nonHex;
          }
          return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        }, unloadHandler = function() {
          setDocument();
        }, inDisabledFieldset = addCombinator(
          function(elem) {
            return elem.disabled === true && nodeName(elem, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
        function safeActiveElement() {
          try {
            return document3.activeElement;
          } catch (err) {
          }
        }
        try {
          push2.apply(
            arr = slice.call(preferredDoc.childNodes),
            preferredDoc.childNodes
          );
          arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
          push2 = {
            apply: function(target, els) {
              pushNative.apply(target, slice.call(els));
            },
            call: function(target) {
              pushNative.apply(target, slice.call(arguments, 1));
            }
          };
        }
        function find(selector, context, results, seed) {
          var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
          results = results || [];
          if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
            return results;
          }
          if (!seed) {
            setDocument(context);
            context = context || document3;
            if (documentIsHTML) {
              if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                if (m = match[1]) {
                  if (nodeType === 9) {
                    if (elem = context.getElementById(m)) {
                      if (elem.id === m) {
                        push2.call(results, elem);
                        return results;
                      }
                    } else {
                      return results;
                    }
                  } else {
                    if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                      push2.call(results, elem);
                      return results;
                    }
                  }
                } else if (match[2]) {
                  push2.apply(results, context.getElementsByTagName(selector));
                  return results;
                } else if ((m = match[3]) && context.getElementsByClassName) {
                  push2.apply(results, context.getElementsByClassName(m));
                  return results;
                }
              }
              if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                newSelector = selector;
                newContext = context;
                if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                  newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                  if (newContext != context || !support.scope) {
                    if (nid = context.getAttribute("id")) {
                      nid = jQuery2.escapeSelector(nid);
                    } else {
                      context.setAttribute("id", nid = expando);
                    }
                  }
                  groups = tokenize(selector);
                  i2 = groups.length;
                  while (i2--) {
                    groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                  }
                  newSelector = groups.join(",");
                }
                try {
                  push2.apply(
                    results,
                    newContext.querySelectorAll(newSelector)
                  );
                  return results;
                } catch (qsaError) {
                  nonnativeSelectorCache(selector, true);
                } finally {
                  if (nid === expando) {
                    context.removeAttribute("id");
                  }
                }
              }
            }
          }
          return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
        }
        function createCache() {
          var keys = [];
          function cache(key, value) {
            if (keys.push(key + " ") > Expr.cacheLength) {
              delete cache[keys.shift()];
            }
            return cache[key + " "] = value;
          }
          return cache;
        }
        function markFunction(fn) {
          fn[expando] = true;
          return fn;
        }
        function assert(fn) {
          var el = document3.createElement("fieldset");
          try {
            return !!fn(el);
          } catch (e) {
            return false;
          } finally {
            if (el.parentNode) {
              el.parentNode.removeChild(el);
            }
            el = null;
          }
        }
        function createInputPseudo(type) {
          return function(elem) {
            return nodeName(elem, "input") && elem.type === type;
          };
        }
        function createButtonPseudo(type) {
          return function(elem) {
            return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
          };
        }
        function createDisabledPseudo(disabled) {
          return function(elem) {
            if ("form" in elem) {
              if (elem.parentNode && elem.disabled === false) {
                if ("label" in elem) {
                  if ("label" in elem.parentNode) {
                    return elem.parentNode.disabled === disabled;
                  } else {
                    return elem.disabled === disabled;
                  }
                }
                return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
              }
              return elem.disabled === disabled;
            } else if ("label" in elem) {
              return elem.disabled === disabled;
            }
            return false;
          };
        }
        function createPositionalPseudo(fn) {
          return markFunction(function(argument) {
            argument = +argument;
            return markFunction(function(seed, matches2) {
              var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
              while (i2--) {
                if (seed[j = matchIndexes[i2]]) {
                  seed[j] = !(matches2[j] = seed[j]);
                }
              }
            });
          });
        }
        function testContext(context) {
          return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        function setDocument(node) {
          var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
          if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
            return document3;
          }
          document3 = doc;
          documentElement2 = document3.documentElement;
          documentIsHTML = !jQuery2.isXMLDoc(document3);
          matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
          if (documentElement2.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
            subWindow.addEventListener("unload", unloadHandler);
          }
          support.getById = assert(function(el) {
            documentElement2.appendChild(el).id = jQuery2.expando;
            return !document3.getElementsByName || !document3.getElementsByName(jQuery2.expando).length;
          });
          support.disconnectedMatch = assert(function(el) {
            return matches.call(el, "*");
          });
          support.scope = assert(function() {
            return document3.querySelectorAll(":scope");
          });
          support.cssHas = assert(function() {
            try {
              document3.querySelector(":has(*,:jqfake)");
              return false;
            } catch (e) {
              return true;
            }
          });
          if (support.getById) {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                return elem.getAttribute("id") === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var elem = context.getElementById(id);
                return elem ? [elem] : [];
              }
            };
          } else {
            Expr.filter.ID = function(id) {
              var attrId = id.replace(runescape, funescape);
              return function(elem) {
                var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                return node2 && node2.value === attrId;
              };
            };
            Expr.find.ID = function(id, context) {
              if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                var node2, i2, elems, elem = context.getElementById(id);
                if (elem) {
                  node2 = elem.getAttributeNode("id");
                  if (node2 && node2.value === id) {
                    return [elem];
                  }
                  elems = context.getElementsByName(id);
                  i2 = 0;
                  while (elem = elems[i2++]) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                  }
                }
                return [];
              }
            };
          }
          Expr.find.TAG = function(tag, context) {
            if (typeof context.getElementsByTagName !== "undefined") {
              return context.getElementsByTagName(tag);
            } else {
              return context.querySelectorAll(tag);
            }
          };
          Expr.find.CLASS = function(className, context) {
            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
              return context.getElementsByClassName(className);
            }
          };
          rbuggyQSA = [];
          assert(function(el) {
            var input;
            documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
            if (!el.querySelectorAll("[selected]").length) {
              rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
            }
            if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
              rbuggyQSA.push("~=");
            }
            if (!el.querySelectorAll("a#" + expando + "+*").length) {
              rbuggyQSA.push(".#.+[+~]");
            }
            if (!el.querySelectorAll(":checked").length) {
              rbuggyQSA.push(":checked");
            }
            input = document3.createElement("input");
            input.setAttribute("type", "hidden");
            el.appendChild(input).setAttribute("name", "D");
            documentElement2.appendChild(el).disabled = true;
            if (el.querySelectorAll(":disabled").length !== 2) {
              rbuggyQSA.push(":enabled", ":disabled");
            }
            input = document3.createElement("input");
            input.setAttribute("name", "");
            el.appendChild(input);
            if (!el.querySelectorAll("[name='']").length) {
              rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
            }
          });
          if (!support.cssHas) {
            rbuggyQSA.push(":has");
          }
          rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
          sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if (compare) {
              return compare;
            }
            compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : (
              // Otherwise we know they are disconnected
              1
            );
            if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
              if (a === document3 || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) {
                return -1;
              }
              if (b === document3 || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) {
                return 1;
              }
              return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
            }
            return compare & 4 ? -1 : 1;
          };
          return document3;
        }
        find.matches = function(expr, elements) {
          return find(expr, null, null, elements);
        };
        find.matchesSelector = function(elem, expr) {
          setDocument(elem);
          if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
            try {
              var ret = matches.call(elem, expr);
              if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              elem.document && elem.document.nodeType !== 11) {
                return ret;
              }
            } catch (e) {
              nonnativeSelectorCache(expr, true);
            }
          }
          return find(expr, document3, null, [elem]).length > 0;
        };
        find.contains = function(context, elem) {
          if ((context.ownerDocument || context) != document3) {
            setDocument(context);
          }
          return jQuery2.contains(context, elem);
        };
        find.attr = function(elem, name) {
          if ((elem.ownerDocument || elem) != document3) {
            setDocument(elem);
          }
          var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
          if (val !== void 0) {
            return val;
          }
          return elem.getAttribute(name);
        };
        find.error = function(msg) {
          throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        jQuery2.uniqueSort = function(results) {
          var elem, duplicates = [], j = 0, i2 = 0;
          hasDuplicate = !support.sortStable;
          sortInput = !support.sortStable && slice.call(results, 0);
          sort.call(results, sortOrder);
          if (hasDuplicate) {
            while (elem = results[i2++]) {
              if (elem === results[i2]) {
                j = duplicates.push(i2);
              }
            }
            while (j--) {
              splice.call(results, duplicates[j], 1);
            }
          }
          sortInput = null;
          return results;
        };
        jQuery2.fn.uniqueSort = function() {
          return this.pushStack(jQuery2.uniqueSort(slice.apply(this)));
        };
        Expr = jQuery2.expr = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: markFunction,
          match: matchExpr,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: true },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: true },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(match) {
              match[1] = match[1].replace(runescape, funescape);
              match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
              if (match[2] === "~=") {
                match[3] = " " + match[3] + " ";
              }
              return match.slice(0, 4);
            },
            CHILD: function(match) {
              match[1] = match[1].toLowerCase();
              if (match[1].slice(0, 3) === "nth") {
                if (!match[3]) {
                  find.error(match[0]);
                }
                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                match[5] = +(match[7] + match[8] || match[3] === "odd");
              } else if (match[3]) {
                find.error(match[0]);
              }
              return match;
            },
            PSEUDO: function(match) {
              var excess, unquoted = !match[6] && match[2];
              if (matchExpr.CHILD.test(match[0])) {
                return null;
              }
              if (match[3]) {
                match[2] = match[4] || match[5] || "";
              } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
              (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
              (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                match[0] = match[0].slice(0, excess);
                match[2] = unquoted.slice(0, excess);
              }
              return match.slice(0, 3);
            }
          },
          filter: {
            TAG: function(nodeNameSelector) {
              var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
              return nodeNameSelector === "*" ? function() {
                return true;
              } : function(elem) {
                return nodeName(elem, expectedNodeName);
              };
            },
            CLASS: function(className) {
              var pattern = classCache[className + " "];
              return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                return pattern.test(
                  typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                );
              });
            },
            ATTR: function(name, operator, check) {
              return function(elem) {
                var result = find.attr(elem, name);
                if (result == null) {
                  return operator === "!=";
                }
                if (!operator) {
                  return true;
                }
                result += "";
                if (operator === "=") {
                  return result === check;
                }
                if (operator === "!=") {
                  return result !== check;
                }
                if (operator === "^=") {
                  return check && result.indexOf(check) === 0;
                }
                if (operator === "*=") {
                  return check && result.indexOf(check) > -1;
                }
                if (operator === "$=") {
                  return check && result.slice(-check.length) === check;
                }
                if (operator === "~=") {
                  return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                }
                if (operator === "|=") {
                  return result === check || result.slice(0, check.length + 1) === check + "-";
                }
                return false;
              };
            },
            CHILD: function(type, what, _argument, first, last) {
              var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
              return first === 1 && last === 0 ? (
                // Shortcut for :nth-*(n)
                function(elem) {
                  return !!elem.parentNode;
                }
              ) : function(elem, _context, xml) {
                var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                if (parent) {
                  if (simple) {
                    while (dir2) {
                      node = elem;
                      while (node = node[dir2]) {
                        if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                          return false;
                        }
                      }
                      start = dir2 = type === "only" && !start && "nextSibling";
                    }
                    return true;
                  }
                  start = [forward ? parent.firstChild : parent.lastChild];
                  if (forward && useCache) {
                    outerCache = parent[expando] || (parent[expando] = {});
                    cache = outerCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];
                    while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                    (diff = nodeIndex = 0) || start.pop()) {
                      if (node.nodeType === 1 && ++diff && node === elem) {
                        outerCache[type] = [dirruns, nodeIndex, diff];
                        break;
                      }
                    }
                  } else {
                    if (useCache) {
                      outerCache = elem[expando] || (elem[expando] = {});
                      cache = outerCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex;
                    }
                    if (diff === false) {
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                        if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                          if (useCache) {
                            outerCache = node[expando] || (node[expando] = {});
                            outerCache[type] = [dirruns, diff];
                          }
                          if (node === elem) {
                            break;
                          }
                        }
                      }
                    }
                  }
                  diff -= last;
                  return diff === first || diff % first === 0 && diff / first >= 0;
                }
              };
            },
            PSEUDO: function(pseudo, argument) {
              var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
              if (fn[expando]) {
                return fn(argument);
              }
              if (fn.length > 1) {
                args = [pseudo, pseudo, "", argument];
                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                  var idx, matched = fn(seed, argument), i2 = matched.length;
                  while (i2--) {
                    idx = indexOf.call(seed, matched[i2]);
                    seed[idx] = !(matches2[idx] = matched[i2]);
                  }
                }) : function(elem) {
                  return fn(elem, 0, args);
                };
              }
              return fn;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: markFunction(function(selector) {
              var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
              return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                while (i2--) {
                  if (elem = unmatched[i2]) {
                    seed[i2] = !(matches2[i2] = elem);
                  }
                }
              }) : function(elem, _context, xml) {
                input[0] = elem;
                matcher(input, null, xml, results);
                input[0] = null;
                return !results.pop();
              };
            }),
            has: markFunction(function(selector) {
              return function(elem) {
                return find(selector, elem).length > 0;
              };
            }),
            contains: markFunction(function(text) {
              text = text.replace(runescape, funescape);
              return function(elem) {
                return (elem.textContent || jQuery2.text(elem)).indexOf(text) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // https://www.w3.org/TR/selectors/#lang-pseudo
            lang: markFunction(function(lang) {
              if (!ridentifier.test(lang || "")) {
                find.error("unsupported lang: " + lang);
              }
              lang = lang.replace(runescape, funescape).toLowerCase();
              return function(elem) {
                var elemLang;
                do {
                  if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                    elemLang = elemLang.toLowerCase();
                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                  }
                } while ((elem = elem.parentNode) && elem.nodeType === 1);
                return false;
              };
            }),
            // Miscellaneous
            target: function(elem) {
              var hash = window2.location && window2.location.hash;
              return hash && hash.slice(1) === elem.id;
            },
            root: function(elem) {
              return elem === documentElement2;
            },
            focus: function(elem) {
              return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
            },
            // Boolean properties
            enabled: createDisabledPseudo(false),
            disabled: createDisabledPseudo(true),
            checked: function(elem) {
              return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
            },
            selected: function(elem) {
              if (elem.parentNode) {
                elem.parentNode.selectedIndex;
              }
              return elem.selected === true;
            },
            // Contents
            empty: function(elem) {
              for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                if (elem.nodeType < 6) {
                  return false;
                }
              }
              return true;
            },
            parent: function(elem) {
              return !Expr.pseudos.empty(elem);
            },
            // Element/input types
            header: function(elem) {
              return rheader.test(elem.nodeName);
            },
            input: function(elem) {
              return rinputs.test(elem.nodeName);
            },
            button: function(elem) {
              return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
            },
            text: function(elem) {
              var attr;
              return nodeName(elem, "input") && elem.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear
              // with elem.type === "text"
              ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
            },
            // Position-in-collection
            first: createPositionalPseudo(function() {
              return [0];
            }),
            last: createPositionalPseudo(function(_matchIndexes, length) {
              return [length - 1];
            }),
            eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
              return [argument < 0 ? argument + length : argument];
            }),
            even: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 0;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            odd: createPositionalPseudo(function(matchIndexes, length) {
              var i2 = 1;
              for (; i2 < length; i2 += 2) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            lt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2;
              if (argument < 0) {
                i2 = argument + length;
              } else if (argument > length) {
                i2 = length;
              } else {
                i2 = argument;
              }
              for (; --i2 >= 0; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            }),
            gt: createPositionalPseudo(function(matchIndexes, length, argument) {
              var i2 = argument < 0 ? argument + length : argument;
              for (; ++i2 < length; ) {
                matchIndexes.push(i2);
              }
              return matchIndexes;
            })
          }
        };
        Expr.pseudos.nth = Expr.pseudos.eq;
        for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
          Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in { submit: true, reset: true }) {
          Expr.pseudos[i] = createButtonPseudo(i);
        }
        function setFilters() {
        }
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        function tokenize(selector, parseOnly) {
          var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
          if (cached) {
            return parseOnly ? 0 : cached.slice(0);
          }
          soFar = selector;
          groups = [];
          preFilters = Expr.preFilter;
          while (soFar) {
            if (!matched || (match = rcomma.exec(soFar))) {
              if (match) {
                soFar = soFar.slice(match[0].length) || soFar;
              }
              groups.push(tokens = []);
            }
            matched = false;
            if (match = rleadingCombinator.exec(soFar)) {
              matched = match.shift();
              tokens.push({
                value: matched,
                // Cast descendant combinators to space
                type: match[0].replace(rtrimCSS, " ")
              });
              soFar = soFar.slice(matched.length);
            }
            for (type in Expr.filter) {
              if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type,
                  matches: match
                });
                soFar = soFar.slice(matched.length);
              }
            }
            if (!matched) {
              break;
            }
          }
          if (parseOnly) {
            return soFar.length;
          }
          return soFar ? find.error(selector) : (
            // Cache the tokens
            tokenCache(selector, groups).slice(0)
          );
        }
        function toSelector(tokens) {
          var i2 = 0, len = tokens.length, selector = "";
          for (; i2 < len; i2++) {
            selector += tokens[i2].value;
          }
          return selector;
        }
        function addCombinator(matcher, combinator, base) {
          var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
          return combinator.first ? (
            // Check against closest ancestor/preceding element
            function(elem, context, xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  return matcher(elem, context, xml);
                }
              }
              return false;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(elem, context, xml) {
              var oldCache, outerCache, newCache = [dirruns, doneName];
              if (xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              } else {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    if (skip && nodeName(elem, skip)) {
                      elem = elem[dir2] || elem;
                    } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                      return newCache[2] = oldCache[2];
                    } else {
                      outerCache[key] = newCache;
                      if (newCache[2] = matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                }
              }
              return false;
            }
          );
        }
        function elementMatcher(matchers) {
          return matchers.length > 1 ? function(elem, context, xml) {
            var i2 = matchers.length;
            while (i2--) {
              if (!matchers[i2](elem, context, xml)) {
                return false;
              }
            }
            return true;
          } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
          var i2 = 0, len = contexts.length;
          for (; i2 < len; i2++) {
            find(selector, contexts[i2], results);
          }
          return results;
        }
        function condense(unmatched, map, filter, context, xml) {
          var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
          for (; i2 < len; i2++) {
            if (elem = unmatched[i2]) {
              if (!filter || filter(elem, context, xml)) {
                newUnmatched.push(elem);
                if (mapped) {
                  map.push(i2);
                }
              }
            }
          }
          return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
          if (postFilter && !postFilter[expando]) {
            postFilter = setMatcher(postFilter);
          }
          if (postFinder && !postFinder[expando]) {
            postFinder = setMatcher(postFinder, postSelector);
          }
          return markFunction(function(seed, results, context, xml) {
            var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
              selector || "*",
              context.nodeType ? [context] : context,
              []
            ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
            if (matcher) {
              matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                // ...intermediate processing is necessary
                []
              ) : (
                // ...otherwise use results directly
                results
              );
              matcher(matcherIn, matcherOut, context, xml);
            } else {
              matcherOut = matcherIn;
            }
            if (postFilter) {
              temp = condense(matcherOut, postMap);
              postFilter(temp, [], context, xml);
              i2 = temp.length;
              while (i2--) {
                if (elem = temp[i2]) {
                  matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                }
              }
            }
            if (seed) {
              if (postFinder || preFilter) {
                if (postFinder) {
                  temp = [];
                  i2 = matcherOut.length;
                  while (i2--) {
                    if (elem = matcherOut[i2]) {
                      temp.push(matcherIn[i2] = elem);
                    }
                  }
                  postFinder(null, matcherOut = [], temp, xml);
                }
                i2 = matcherOut.length;
                while (i2--) {
                  if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i2]) > -1) {
                    seed[temp] = !(results[temp] = elem);
                  }
                }
              }
            } else {
              matcherOut = condense(
                matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
              );
              if (postFinder) {
                postFinder(null, results, matcherOut, xml);
              } else {
                push2.apply(results, matcherOut);
              }
            }
          });
        }
        function matcherFromTokens(tokens) {
          var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
            return indexOf.call(checkContext, elem) > -1;
          }, implicitRelative, true), matchers = [function(elem, context, xml) {
            var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
          for (; i2 < len; i2++) {
            if (matcher = Expr.relative[tokens[i2].type]) {
              matchers = [addCombinator(elementMatcher(matchers), matcher)];
            } else {
              matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
              if (matcher[expando]) {
                j = ++i2;
                for (; j < len; j++) {
                  if (Expr.relative[tokens[j].type]) {
                    break;
                  }
                }
                return setMatcher(
                  i2 > 1 && elementMatcher(matchers),
                  i2 > 1 && toSelector(
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                  ).replace(rtrimCSS, "$1"),
                  matcher,
                  i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                  j < len && matcherFromTokens(tokens = tokens.slice(j)),
                  j < len && toSelector(tokens)
                );
              }
              matchers.push(matcher);
            }
          }
          return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
            var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
            if (outermost) {
              outermostContext = context == document3 || context || outermost;
            }
            for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument != document3) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while (matcher = elementMatchers[j++]) {
                  if (matcher(elem, context || document3, xml)) {
                    push2.call(results, elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if (elem = !matcher && elem) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i2;
            if (bySet && i2 !== matchedCount) {
              j = 0;
              while (matcher = setMatchers[j++]) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i2--) {
                    if (!(unmatched[i2] || setMatched[i2])) {
                      setMatched[i2] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push2.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                jQuery2.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
          return bySet ? markFunction(superMatcher) : superMatcher;
        }
        function compile(selector, match) {
          var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
          if (!cached) {
            if (!match) {
              match = tokenize(selector);
            }
            i2 = match.length;
            while (i2--) {
              cached = matcherFromTokens(match[i2]);
              if (cached[expando]) {
                setMatchers.push(cached);
              } else {
                elementMatchers.push(cached);
              }
            }
            cached = compilerCache(
              selector,
              matcherFromGroupMatchers(elementMatchers, setMatchers)
            );
            cached.selector = selector;
          }
          return cached;
        }
        function select(selector, context, results, seed) {
          var i2, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
          results = results || [];
          if (match.length === 1) {
            tokens = match[0] = match[0].slice(0);
            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
              context = (Expr.find.ID(
                token.matches[0].replace(runescape, funescape),
                context
              ) || [])[0];
              if (!context) {
                return results;
              } else if (compiled) {
                context = context.parentNode;
              }
              selector = selector.slice(tokens.shift().value.length);
            }
            i2 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
            while (i2--) {
              token = tokens[i2];
              if (Expr.relative[type = token.type]) {
                break;
              }
              if (find2 = Expr.find[type]) {
                if (seed = find2(
                  token.matches[0].replace(runescape, funescape),
                  rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                )) {
                  tokens.splice(i2, 1);
                  selector = seed.length && toSelector(tokens);
                  if (!selector) {
                    push2.apply(results, seed);
                    return results;
                  }
                  break;
                }
              }
            }
          }
          (compiled || compile(selector, match))(
            seed,
            context,
            !documentIsHTML,
            results,
            !context || rsibling.test(selector) && testContext(context.parentNode) || context
          );
          return results;
        }
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        setDocument();
        support.sortDetached = assert(function(el) {
          return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
        });
        jQuery2.find = find;
        jQuery2.expr[":"] = jQuery2.expr.pseudos;
        jQuery2.unique = jQuery2.uniqueSort;
        find.compile = compile;
        find.select = select;
        find.setDocument = setDocument;
        find.tokenize = tokenize;
        find.escape = jQuery2.escapeSelector;
        find.getText = jQuery2.text;
        find.isXML = jQuery2.isXMLDoc;
        find.selectors = jQuery2.expr;
        find.support = jQuery2.support;
        find.uniqueSort = jQuery2.uniqueSort;
      })();
      var dir = function(elem, dir2, until) {
        var matched = [], truncate = until !== void 0;
        while ((elem = elem[dir2]) && elem.nodeType !== 9) {
          if (elem.nodeType === 1) {
            if (truncate && jQuery2(elem).is(until)) {
              break;
            }
            matched.push(elem);
          }
        }
        return matched;
      };
      var siblings = function(n, elem) {
        var matched = [];
        for (; n; n = n.nextSibling) {
          if (n.nodeType === 1 && n !== elem) {
            matched.push(n);
          }
        }
        return matched;
      };
      var rneedsContext = jQuery2.expr.match.needsContext;
      var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
          return jQuery2.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
          });
        }
        if (qualifier.nodeType) {
          return jQuery2.grep(elements, function(elem) {
            return elem === qualifier !== not;
          });
        }
        if (typeof qualifier !== "string") {
          return jQuery2.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
          });
        }
        return jQuery2.filter(qualifier, elements, not);
      }
      jQuery2.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) {
          expr = ":not(" + expr + ")";
        }
        if (elems.length === 1 && elem.nodeType === 1) {
          return jQuery2.find.matchesSelector(elem, expr) ? [elem] : [];
        }
        return jQuery2.find.matches(expr, jQuery2.grep(elems, function(elem2) {
          return elem2.nodeType === 1;
        }));
      };
      jQuery2.fn.extend({
        find: function(selector) {
          var i, ret, len = this.length, self = this;
          if (typeof selector !== "string") {
            return this.pushStack(jQuery2(selector).filter(function() {
              for (i = 0; i < len; i++) {
                if (jQuery2.contains(self[i], this)) {
                  return true;
                }
              }
            }));
          }
          ret = this.pushStack([]);
          for (i = 0; i < len; i++) {
            jQuery2.find(selector, self[i], ret);
          }
          return len > 1 ? jQuery2.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
          return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
          return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
          return !!winnow(
            this,
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery2(selector) : selector || [],
            false
          ).length;
        }
      });
      var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery2.fn.init = function(selector, context, root) {
        var match, elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery2 ? context[0] : context;
              jQuery2.merge(this, jQuery2.parseHTML(
                match[1],
                context && context.nodeType ? context.ownerDocument || context : document2,
                true
              ));
              if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context)) {
                for (match in context) {
                  if (isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document2.getElementById(match[2]);
              if (elem) {
                this[0] = elem;
                this.length = 1;
              }
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (isFunction(selector)) {
          return root.ready !== void 0 ? root.ready(selector) : (
            // Execute immediately if ready is not present
            selector(jQuery2)
          );
        }
        return jQuery2.makeArray(selector, this);
      };
      init.prototype = jQuery2.fn;
      rootjQuery = jQuery2(document2);
      var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
      jQuery2.fn.extend({
        has: function(target) {
          var targets = jQuery2(target, this), l = targets.length;
          return this.filter(function() {
            var i = 0;
            for (; i < l; i++) {
              if (jQuery2.contains(this, targets[i])) {
                return true;
              }
            }
          });
        },
        closest: function(selectors, context) {
          var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery2(selectors);
          if (!rneedsContext.test(selectors)) {
            for (; i < l; i++) {
              for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                  // Don't pass non-elements to jQuery#find
                  cur.nodeType === 1 && jQuery2.find.matchesSelector(cur, selectors)
                ))) {
                  matched.push(cur);
                  break;
                }
              }
            }
          }
          return this.pushStack(matched.length > 1 ? jQuery2.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function(elem) {
          if (!elem) {
            return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          }
          if (typeof elem === "string") {
            return indexOf.call(jQuery2(elem), this[0]);
          }
          return indexOf.call(
            this,
            // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem
          );
        },
        add: function(selector, context) {
          return this.pushStack(
            jQuery2.uniqueSort(
              jQuery2.merge(this.get(), jQuery2(selector, context))
            )
          );
        },
        addBack: function(selector) {
          return this.add(
            selector == null ? this.prevObject : this.prevObject.filter(selector)
          );
        }
      });
      function sibling(cur, dir2) {
        while ((cur = cur[dir2]) && cur.nodeType !== 1) {
        }
        return cur;
      }
      jQuery2.each({
        parent: function(elem) {
          var parent = elem.parentNode;
          return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
          return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
          return dir(elem, "parentNode", until);
        },
        next: function(elem) {
          return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
          return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
          return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
          return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
          return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
          return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
          return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
          return siblings(elem.firstChild);
        },
        contents: function(elem) {
          if (elem.contentDocument != null && // Support: IE 11+
          // <object> elements with no `data` attribute has an object
          // `contentDocument` with a `null` prototype.
          getProto(elem.contentDocument)) {
            return elem.contentDocument;
          }
          if (nodeName(elem, "template")) {
            elem = elem.content || elem;
          }
          return jQuery2.merge([], elem.childNodes);
        }
      }, function(name, fn) {
        jQuery2.fn[name] = function(until, selector) {
          var matched = jQuery2.map(this, fn, until);
          if (name.slice(-5) !== "Until") {
            selector = until;
          }
          if (selector && typeof selector === "string") {
            matched = jQuery2.filter(selector, matched);
          }
          if (this.length > 1) {
            if (!guaranteedUnique[name]) {
              jQuery2.uniqueSort(matched);
            }
            if (rparentsprev.test(name)) {
              matched.reverse();
            }
          }
          return this.pushStack(matched);
        };
      });
      var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
      function createOptions(options) {
        var object = {};
        jQuery2.each(options.match(rnothtmlwhite) || [], function(_, flag) {
          object[flag] = true;
        });
        return object;
      }
      jQuery2.Callbacks = function(options) {
        options = typeof options === "string" ? createOptions(options) : jQuery2.extend({}, options);
        var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
          locked = locked || options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        }, self = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery2.each(args, function(_, arg) {
                  if (isFunction(arg)) {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && toType(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire();
              }
            }
            return this;
          },
          // Remove a callback from the list
          remove: function() {
            jQuery2.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery2.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          // Check if a given callback is in the list.
          // If no argument is given, return whether or not list has callbacks attached.
          has: function(fn) {
            return fn ? jQuery2.inArray(fn, list) > -1 : list.length > 0;
          },
          // Remove all callbacks from the list
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          // Disable .fire and .add
          // Abort any current/pending executions
          // Clear all callbacks and values
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          // Disable .fire
          // Also disable .add unless we have memory (since it would have no effect)
          // Abort any pending executions
          lock: function() {
            locked = queue = [];
            if (!memory && !firing) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          // Call all callbacks with the given context and arguments
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          // Call all the callbacks with the given arguments
          fire: function() {
            self.fireWith(this, arguments);
            return this;
          },
          // To know if the callbacks have already been called at least once
          fired: function() {
            return !!fired;
          }
        };
        return self;
      };
      function Identity(v) {
        return v;
      }
      function Thrower(ex) {
        throw ex;
      }
      function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
          if (value && isFunction(method = value.promise)) {
            method.call(value).done(resolve).fail(reject);
          } else if (value && isFunction(method = value.then)) {
            method.call(value, resolve, reject);
          } else {
            resolve.apply(void 0, [value].slice(noValue));
          }
        } catch (value2) {
          reject.apply(void 0, [value2]);
        }
      }
      jQuery2.extend({
        Deferred: function(func) {
          var tuples = [
            // action, add listener, callbacks,
            // ... .then handlers, argument index, [final state]
            [
              "notify",
              "progress",
              jQuery2.Callbacks("memory"),
              jQuery2.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              jQuery2.Callbacks("once memory"),
              jQuery2.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              jQuery2.Callbacks("once memory"),
              jQuery2.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ], state = "pending", promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            "catch": function(fn) {
              return promise.then(null, fn);
            },
            // Keep pipe for back-compat
            pipe: function() {
              var fns = arguments;
              return jQuery2.Deferred(function(newDefer) {
                jQuery2.each(tuples, function(_i, tuple) {
                  var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](
                        this,
                        fn ? [returned] : arguments
                      );
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve(depth, deferred2, handler, special) {
                return function() {
                  var that = this, args = arguments, mightThrow = function() {
                    var returned, then;
                    if (depth < maxDepth) {
                      return;
                    }
                    returned = handler.apply(that, args);
                    if (returned === deferred2.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    then = returned && // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    (typeof returned === "object" || typeof returned === "function") && returned.then;
                    if (isFunction(then)) {
                      if (special) {
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special)
                        );
                      } else {
                        maxDepth++;
                        then.call(
                          returned,
                          resolve(maxDepth, deferred2, Identity, special),
                          resolve(maxDepth, deferred2, Thrower, special),
                          resolve(
                            maxDepth,
                            deferred2,
                            Identity,
                            deferred2.notifyWith
                          )
                        );
                      }
                    } else {
                      if (handler !== Identity) {
                        that = void 0;
                        args = [returned];
                      }
                      (special || deferred2.resolveWith)(that, args);
                    }
                  }, process = special ? mightThrow : function() {
                    try {
                      mightThrow();
                    } catch (e) {
                      if (jQuery2.Deferred.exceptionHook) {
                        jQuery2.Deferred.exceptionHook(
                          e,
                          process.error
                        );
                      }
                      if (depth + 1 >= maxDepth) {
                        if (handler !== Thrower) {
                          that = void 0;
                          args = [e];
                        }
                        deferred2.rejectWith(that, args);
                      }
                    }
                  };
                  if (depth) {
                    process();
                  } else {
                    if (jQuery2.Deferred.getErrorHook) {
                      process.error = jQuery2.Deferred.getErrorHook();
                    } else if (jQuery2.Deferred.getStackHook) {
                      process.error = jQuery2.Deferred.getStackHook();
                    }
                    window2.setTimeout(process);
                  }
                };
              }
              return jQuery2.Deferred(function(newDefer) {
                tuples[0][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onProgress) ? onProgress : Identity,
                    newDefer.notifyWith
                  )
                );
                tuples[1][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onFulfilled) ? onFulfilled : Identity
                  )
                );
                tuples[2][3].add(
                  resolve(
                    0,
                    newDefer,
                    isFunction(onRejected) ? onRejected : Thrower
                  )
                );
              }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function(obj) {
              return obj != null ? jQuery2.extend(obj, promise) : promise;
            }
          }, deferred = {};
          jQuery2.each(tuples, function(i, tuple) {
            var list = tuple[2], stateString = tuple[5];
            promise[tuple[1]] = list.add;
            if (stateString) {
              list.add(
                function() {
                  state = stateString;
                },
                // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i][2].disable,
                // rejected_handlers.disable
                // fulfilled_handlers.disable
                tuples[3 - i][3].disable,
                // progress_callbacks.lock
                tuples[0][2].lock,
                // progress_handlers.lock
                tuples[0][3].lock
              );
            }
            list.add(tuple[3].fire);
            deferred[tuple[0]] = function() {
              deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
              return this;
            };
            deferred[tuple[0] + "With"] = list.fireWith;
          });
          promise.promise(deferred);
          if (func) {
            func.call(deferred, deferred);
          }
          return deferred;
        },
        // Deferred helper
        when: function(singleValue) {
          var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery2.Deferred(), updateFunc = function(i2) {
            return function(value) {
              resolveContexts[i2] = this;
              resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
              if (!--remaining) {
                primary.resolveWith(resolveContexts, resolveValues);
              }
            };
          };
          if (remaining <= 1) {
            adoptValue(
              singleValue,
              primary.done(updateFunc(i)).resolve,
              primary.reject,
              !remaining
            );
            if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
              return primary.then();
            }
          }
          while (i--) {
            adoptValue(resolveValues[i], updateFunc(i), primary.reject);
          }
          return primary.promise();
        }
      });
      var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      jQuery2.Deferred.exceptionHook = function(error, asyncError) {
        if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
          window2.console.warn(
            "jQuery.Deferred exception: " + error.message,
            error.stack,
            asyncError
          );
        }
      };
      jQuery2.readyException = function(error) {
        window2.setTimeout(function() {
          throw error;
        });
      };
      var readyList = jQuery2.Deferred();
      jQuery2.fn.ready = function(fn) {
        readyList.then(fn).catch(function(error) {
          jQuery2.readyException(error);
        });
        return this;
      };
      jQuery2.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(wait) {
          if (wait === true ? --jQuery2.readyWait : jQuery2.isReady) {
            return;
          }
          jQuery2.isReady = true;
          if (wait !== true && --jQuery2.readyWait > 0) {
            return;
          }
          readyList.resolveWith(document2, [jQuery2]);
        }
      });
      jQuery2.ready.then = readyList.then;
      function completed() {
        document2.removeEventListener("DOMContentLoaded", completed);
        window2.removeEventListener("load", completed);
        jQuery2.ready();
      }
      if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
        window2.setTimeout(jQuery2.ready);
      } else {
        document2.addEventListener("DOMContentLoaded", completed);
        window2.addEventListener("load", completed);
      }
      var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = key == null;
        if (toType(key) === "object") {
          chainable = true;
          for (i in key) {
            access(elems, fn, i, key[i], true, emptyGet, raw);
          }
        } else if (value !== void 0) {
          chainable = true;
          if (!isFunction(value)) {
            raw = true;
          }
          if (bulk) {
            if (raw) {
              fn.call(elems, value);
              fn = null;
            } else {
              bulk = fn;
              fn = function(elem, _key, value2) {
                return bulk.call(jQuery2(elem), value2);
              };
            }
          }
          if (fn) {
            for (; i < len; i++) {
              fn(
                elems[i],
                key,
                raw ? value : value.call(elems[i], i, fn(elems[i], key))
              );
            }
          }
        }
        if (chainable) {
          return elems;
        }
        if (bulk) {
          return fn.call(elems);
        }
        return len ? fn(elems[0], key) : emptyGet;
      };
      var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
      function fcamelCase(_all, letter) {
        return letter.toUpperCase();
      }
      function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
      }
      var acceptData = function(owner) {
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
      };
      function Data() {
        this.expando = jQuery2.expando + Data.uid++;
      }
      Data.uid = 1;
      Data.prototype = {
        cache: function(owner) {
          var value = owner[this.expando];
          if (!value) {
            value = {};
            if (acceptData(owner)) {
              if (owner.nodeType) {
                owner[this.expando] = value;
              } else {
                Object.defineProperty(owner, this.expando, {
                  value,
                  configurable: true
                });
              }
            }
          }
          return value;
        },
        set: function(owner, data, value) {
          var prop, cache = this.cache(owner);
          if (typeof data === "string") {
            cache[camelCase(data)] = value;
          } else {
            for (prop in data) {
              cache[camelCase(prop)] = data[prop];
            }
          }
          return cache;
        },
        get: function(owner, key) {
          return key === void 0 ? this.cache(owner) : (
            // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)]
          );
        },
        access: function(owner, key, value) {
          if (key === void 0 || key && typeof key === "string" && value === void 0) {
            return this.get(owner, key);
          }
          this.set(owner, key, value);
          return value !== void 0 ? value : key;
        },
        remove: function(owner, key) {
          var i, cache = owner[this.expando];
          if (cache === void 0) {
            return;
          }
          if (key !== void 0) {
            if (Array.isArray(key)) {
              key = key.map(camelCase);
            } else {
              key = camelCase(key);
              key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
            }
            i = key.length;
            while (i--) {
              delete cache[key[i]];
            }
          }
          if (key === void 0 || jQuery2.isEmptyObject(cache)) {
            if (owner.nodeType) {
              owner[this.expando] = void 0;
            } else {
              delete owner[this.expando];
            }
          }
        },
        hasData: function(owner) {
          var cache = owner[this.expando];
          return cache !== void 0 && !jQuery2.isEmptyObject(cache);
        }
      };
      var dataPriv = new Data();
      var dataUser = new Data();
      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
      function getData(data) {
        if (data === "true") {
          return true;
        }
        if (data === "false") {
          return false;
        }
        if (data === "null") {
          return null;
        }
        if (data === +data + "") {
          return +data;
        }
        if (rbrace.test(data)) {
          return JSON.parse(data);
        }
        return data;
      }
      function dataAttr(elem, key, data) {
        var name;
        if (data === void 0 && elem.nodeType === 1) {
          name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
          data = elem.getAttribute(name);
          if (typeof data === "string") {
            try {
              data = getData(data);
            } catch (e) {
            }
            dataUser.set(elem, key, data);
          } else {
            data = void 0;
          }
        }
        return data;
      }
      jQuery2.extend({
        hasData: function(elem) {
          return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
          return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
          dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
          return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
          dataPriv.remove(elem, name);
        }
      });
      jQuery2.fn.extend({
        data: function(key, value) {
          var i, name, data, elem = this[0], attrs = elem && elem.attributes;
          if (key === void 0) {
            if (this.length) {
              data = dataUser.get(elem);
              if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                i = attrs.length;
                while (i--) {
                  if (attrs[i]) {
                    name = attrs[i].name;
                    if (name.indexOf("data-") === 0) {
                      name = camelCase(name.slice(5));
                      dataAttr(elem, name, data[name]);
                    }
                  }
                }
                dataPriv.set(elem, "hasDataAttrs", true);
              }
            }
            return data;
          }
          if (typeof key === "object") {
            return this.each(function() {
              dataUser.set(this, key);
            });
          }
          return access(this, function(value2) {
            var data2;
            if (elem && value2 === void 0) {
              data2 = dataUser.get(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              data2 = dataAttr(elem, key);
              if (data2 !== void 0) {
                return data2;
              }
              return;
            }
            this.each(function() {
              dataUser.set(this, key, value2);
            });
          }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
          return this.each(function() {
            dataUser.remove(this, key);
          });
        }
      });
      jQuery2.extend({
        queue: function(elem, type, data) {
          var queue;
          if (elem) {
            type = (type || "fx") + "queue";
            queue = dataPriv.get(elem, type);
            if (data) {
              if (!queue || Array.isArray(data)) {
                queue = dataPriv.access(elem, type, jQuery2.makeArray(data));
              } else {
                queue.push(data);
              }
            }
            return queue || [];
          }
        },
        dequeue: function(elem, type) {
          type = type || "fx";
          var queue = jQuery2.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery2._queueHooks(elem, type), next = function() {
            jQuery2.dequeue(elem, type);
          };
          if (fn === "inprogress") {
            fn = queue.shift();
            startLength--;
          }
          if (fn) {
            if (type === "fx") {
              queue.unshift("inprogress");
            }
            delete hooks.stop;
            fn.call(elem, next, hooks);
          }
          if (!startLength && hooks) {
            hooks.empty.fire();
          }
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
          var key = type + "queueHooks";
          return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
            empty: jQuery2.Callbacks("once memory").add(function() {
              dataPriv.remove(elem, [type + "queue", key]);
            })
          });
        }
      });
      jQuery2.fn.extend({
        queue: function(type, data) {
          var setter = 2;
          if (typeof type !== "string") {
            data = type;
            type = "fx";
            setter--;
          }
          if (arguments.length < setter) {
            return jQuery2.queue(this[0], type);
          }
          return data === void 0 ? this : this.each(function() {
            var queue = jQuery2.queue(this, type, data);
            jQuery2._queueHooks(this, type);
            if (type === "fx" && queue[0] !== "inprogress") {
              jQuery2.dequeue(this, type);
            }
          });
        },
        dequeue: function(type) {
          return this.each(function() {
            jQuery2.dequeue(this, type);
          });
        },
        clearQueue: function(type) {
          return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
          var tmp, count = 1, defer = jQuery2.Deferred(), elements = this, i = this.length, resolve = function() {
            if (!--count) {
              defer.resolveWith(elements, [elements]);
            }
          };
          if (typeof type !== "string") {
            obj = type;
            type = void 0;
          }
          type = type || "fx";
          while (i--) {
            tmp = dataPriv.get(elements[i], type + "queueHooks");
            if (tmp && tmp.empty) {
              count++;
              tmp.empty.add(resolve);
            }
          }
          resolve();
          return defer.promise(obj);
        }
      });
      var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
      var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
      var cssExpand = ["Top", "Right", "Bottom", "Left"];
      var documentElement = document2.documentElement;
      var isAttached = function(elem) {
        return jQuery2.contains(elem.ownerDocument, elem);
      }, composed = { composed: true };
      if (documentElement.getRootNode) {
        isAttached = function(elem) {
          return jQuery2.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
        };
      }
      var isHiddenWithinTree = function(elem, el) {
        elem = el || elem;
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery2.css(elem, "display") === "none";
      };
      function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery2.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery2.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery2.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
          initial = initial / 2;
          unit = unit || initialInUnit[3];
          initialInUnit = +initial || 1;
          while (maxIterations--) {
            jQuery2.style(elem, prop, initialInUnit + unit);
            if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
              maxIterations = 0;
            }
            initialInUnit = initialInUnit / scale;
          }
          initialInUnit = initialInUnit * 2;
          jQuery2.style(elem, prop, initialInUnit + unit);
          valueParts = valueParts || [];
        }
        if (valueParts) {
          initialInUnit = +initialInUnit || +initial || 0;
          adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
          if (tween) {
            tween.unit = unit;
            tween.start = initialInUnit;
            tween.end = adjusted;
          }
        }
        return adjusted;
      }
      var defaultDisplayMap = {};
      function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
        if (display) {
          return display;
        }
        temp = doc.body.appendChild(doc.createElement(nodeName2));
        display = jQuery2.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") {
          display = "block";
        }
        defaultDisplayMap[nodeName2] = display;
        return display;
      }
      function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        for (; index < length; index++) {
          elem = elements[index];
          if (!elem.style) {
            continue;
          }
          display = elem.style.display;
          if (show) {
            if (display === "none") {
              values[index] = dataPriv.get(elem, "display") || null;
              if (!values[index]) {
                elem.style.display = "";
              }
            }
            if (elem.style.display === "" && isHiddenWithinTree(elem)) {
              values[index] = getDefaultDisplay(elem);
            }
          } else {
            if (display !== "none") {
              values[index] = "none";
              dataPriv.set(elem, "display", display);
            }
          }
        }
        for (index = 0; index < length; index++) {
          if (values[index] != null) {
            elements[index].style.display = values[index];
          }
        }
        return elements;
      }
      jQuery2.fn.extend({
        show: function() {
          return showHide(this, true);
        },
        hide: function() {
          return showHide(this);
        },
        toggle: function(state) {
          if (typeof state === "boolean") {
            return state ? this.show() : this.hide();
          }
          return this.each(function() {
            if (isHiddenWithinTree(this)) {
              jQuery2(this).show();
            } else {
              jQuery2(this).hide();
            }
          });
        }
      });
      var rcheckableType = /^(?:checkbox|radio)$/i;
      var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
      })();
      var wrapMap = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
      wrapMap.th = wrapMap.td;
      if (!support.option) {
        wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
      }
      function getAll(context, tag) {
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") {
          ret = context.getElementsByTagName(tag || "*");
        } else if (typeof context.querySelectorAll !== "undefined") {
          ret = context.querySelectorAll(tag || "*");
        } else {
          ret = [];
        }
        if (tag === void 0 || tag && nodeName(context, tag)) {
          return jQuery2.merge([context], ret);
        }
        return ret;
      }
      function setGlobalEval(elems, refElements) {
        var i = 0, l = elems.length;
        for (; i < l; i++) {
          dataPriv.set(
            elems[i],
            "globalEval",
            !refElements || dataPriv.get(refElements[i], "globalEval")
          );
        }
      }
      var rhtml = /<|&#?\w+;/;
      function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
        for (; i < l; i++) {
          elem = elems[i];
          if (elem || elem === 0) {
            if (toType(elem) === "object") {
              jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);
            } else if (!rhtml.test(elem)) {
              nodes.push(context.createTextNode(elem));
            } else {
              tmp = tmp || fragment.appendChild(context.createElement("div"));
              tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
              wrap = wrapMap[tag] || wrapMap._default;
              tmp.innerHTML = wrap[1] + jQuery2.htmlPrefilter(elem) + wrap[2];
              j = wrap[0];
              while (j--) {
                tmp = tmp.lastChild;
              }
              jQuery2.merge(nodes, tmp.childNodes);
              tmp = fragment.firstChild;
              tmp.textContent = "";
            }
          }
        }
        fragment.textContent = "";
        i = 0;
        while (elem = nodes[i++]) {
          if (selection && jQuery2.inArray(elem, selection) > -1) {
            if (ignored) {
              ignored.push(elem);
            }
            continue;
          }
          attached = isAttached(elem);
          tmp = getAll(fragment.appendChild(elem), "script");
          if (attached) {
            setGlobalEval(tmp);
          }
          if (scripts) {
            j = 0;
            while (elem = tmp[j++]) {
              if (rscriptType.test(elem.type || "")) {
                scripts.push(elem);
              }
            }
          }
        }
        return fragment;
      }
      var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
      function returnTrue() {
        return true;
      }
      function returnFalse() {
        return false;
      }
      function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        if (typeof types === "object") {
          if (typeof selector !== "string") {
            data = data || selector;
            selector = void 0;
          }
          for (type in types) {
            on(elem, type, selector, data, types[type], one);
          }
          return elem;
        }
        if (data == null && fn == null) {
          fn = selector;
          data = selector = void 0;
        } else if (fn == null) {
          if (typeof selector === "string") {
            fn = data;
            data = void 0;
          } else {
            fn = data;
            data = selector;
            selector = void 0;
          }
        }
        if (fn === false) {
          fn = returnFalse;
        } else if (!fn) {
          return elem;
        }
        if (one === 1) {
          origFn = fn;
          fn = function(event) {
            jQuery2().off(event);
            return origFn.apply(this, arguments);
          };
          fn.guid = origFn.guid || (origFn.guid = jQuery2.guid++);
        }
        return elem.each(function() {
          jQuery2.event.add(this, types, fn, data, selector);
        });
      }
      jQuery2.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
          var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
          if (!acceptData(elem)) {
            return;
          }
          if (handler.handler) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
          }
          if (selector) {
            jQuery2.find.matchesSelector(documentElement, selector);
          }
          if (!handler.guid) {
            handler.guid = jQuery2.guid++;
          }
          if (!(events = elemData.events)) {
            events = elemData.events = /* @__PURE__ */ Object.create(null);
          }
          if (!(eventHandle = elemData.handle)) {
            eventHandle = elemData.handle = function(e) {
              return typeof jQuery2 !== "undefined" && jQuery2.event.triggered !== e.type ? jQuery2.event.dispatch.apply(elem, arguments) : void 0;
            };
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              continue;
            }
            special = jQuery2.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            special = jQuery2.event.special[type] || {};
            handleObj = jQuery2.extend({
              type,
              origType,
              data,
              handler,
              guid: handler.guid,
              selector,
              needsContext: selector && jQuery2.expr.match.needsContext.test(selector),
              namespace: namespaces.join(".")
            }, handleObjIn);
            if (!(handlers = events[type])) {
              handlers = events[type] = [];
              handlers.delegateCount = 0;
              if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                if (elem.addEventListener) {
                  elem.addEventListener(type, eventHandle);
                }
              }
            }
            if (special.add) {
              special.add.call(elem, handleObj);
              if (!handleObj.handler.guid) {
                handleObj.handler.guid = handler.guid;
              }
            }
            if (selector) {
              handlers.splice(handlers.delegateCount++, 0, handleObj);
            } else {
              handlers.push(handleObj);
            }
            jQuery2.event.global[type] = true;
          }
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
          var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
          if (!elemData || !(events = elemData.events)) {
            return;
          }
          types = (types || "").match(rnothtmlwhite) || [""];
          t = types.length;
          while (t--) {
            tmp = rtypenamespace.exec(types[t]) || [];
            type = origType = tmp[1];
            namespaces = (tmp[2] || "").split(".").sort();
            if (!type) {
              for (type in events) {
                jQuery2.event.remove(elem, type + types[t], handler, selector, true);
              }
              continue;
            }
            special = jQuery2.event.special[type] || {};
            type = (selector ? special.delegateType : special.bindType) || type;
            handlers = events[type] || [];
            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
            origCount = j = handlers.length;
            while (j--) {
              handleObj = handlers[j];
              if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                handlers.splice(j, 1);
                if (handleObj.selector) {
                  handlers.delegateCount--;
                }
                if (special.remove) {
                  special.remove.call(elem, handleObj);
                }
              }
            }
            if (origCount && !handlers.length) {
              if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                jQuery2.removeEvent(elem, type, elemData.handle);
              }
              delete events[type];
            }
          }
          if (jQuery2.isEmptyObject(events)) {
            dataPriv.remove(elem, "handle events");
          }
        },
        dispatch: function(nativeEvent) {
          var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery2.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery2.event.special[event.type] || {};
          args[0] = event;
          for (i = 1; i < arguments.length; i++) {
            args[i] = arguments[i];
          }
          event.delegateTarget = this;
          if (special.preDispatch && special.preDispatch.call(this, event) === false) {
            return;
          }
          handlerQueue = jQuery2.event.handlers.call(this, event, handlers);
          i = 0;
          while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
            event.currentTarget = matched.elem;
            j = 0;
            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
              if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                event.handleObj = handleObj;
                event.data = handleObj.data;
                ret = ((jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                if (ret !== void 0) {
                  if ((event.result = ret) === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }
              }
            }
          }
          if (special.postDispatch) {
            special.postDispatch.call(this, event);
          }
          return event.result;
        },
        handlers: function(event, handlers) {
          var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
          if (delegateCount && // Support: IE <=9
          // Black-hole SVG <use> instance trees (trac-13180)
          cur.nodeType && // Support: Firefox <=42
          // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
          // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
          // Support: IE 11 only
          // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
          !(event.type === "click" && event.button >= 1)) {
            for (; cur !== this; cur = cur.parentNode || this) {
              if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                matchedHandlers = [];
                matchedSelectors = {};
                for (i = 0; i < delegateCount; i++) {
                  handleObj = handlers[i];
                  sel = handleObj.selector + " ";
                  if (matchedSelectors[sel] === void 0) {
                    matchedSelectors[sel] = handleObj.needsContext ? jQuery2(sel, this).index(cur) > -1 : jQuery2.find(sel, this, null, [cur]).length;
                  }
                  if (matchedSelectors[sel]) {
                    matchedHandlers.push(handleObj);
                  }
                }
                if (matchedHandlers.length) {
                  handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                }
              }
            }
          }
          cur = this;
          if (delegateCount < handlers.length) {
            handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
          }
          return handlerQueue;
        },
        addProp: function(name, hook) {
          Object.defineProperty(jQuery2.Event.prototype, name, {
            enumerable: true,
            configurable: true,
            get: isFunction(hook) ? function() {
              if (this.originalEvent) {
                return hook(this.originalEvent);
              }
            } : function() {
              if (this.originalEvent) {
                return this.originalEvent[name];
              }
            },
            set: function(value) {
              Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value
              });
            }
          });
        },
        fix: function(originalEvent) {
          return originalEvent[jQuery2.expando] ? originalEvent : new jQuery2.Event(originalEvent);
        },
        special: {
          load: {
            // Prevent triggered image.load events from bubbling to window.load
            noBubble: true
          },
          click: {
            // Utilize native event to ensure correct state for checkable inputs
            setup: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click", true);
              }
              return false;
            },
            trigger: function(data) {
              var el = this || data;
              if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                leverageNative(el, "click");
              }
              return true;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function(event) {
              var target = event.target;
              return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(event) {
              if (event.result !== void 0 && event.originalEvent) {
                event.originalEvent.returnValue = event.result;
              }
            }
          }
        }
      };
      function leverageNative(el, type, isSetup) {
        if (!isSetup) {
          if (dataPriv.get(el, type) === void 0) {
            jQuery2.event.add(el, type, returnTrue);
          }
          return;
        }
        dataPriv.set(el, type, false);
        jQuery2.event.add(el, type, {
          namespace: false,
          handler: function(event) {
            var result, saved = dataPriv.get(this, type);
            if (event.isTrigger & 1 && this[type]) {
              if (!saved) {
                saved = slice.call(arguments);
                dataPriv.set(this, type, saved);
                this[type]();
                result = dataPriv.get(this, type);
                dataPriv.set(this, type, false);
                if (saved !== result) {
                  event.stopImmediatePropagation();
                  event.preventDefault();
                  return result;
                }
              } else if ((jQuery2.event.special[type] || {}).delegateType) {
                event.stopPropagation();
              }
            } else if (saved) {
              dataPriv.set(this, type, jQuery2.event.trigger(
                saved[0],
                saved.slice(1),
                this
              ));
              event.stopPropagation();
              event.isImmediatePropagationStopped = returnTrue;
            }
          }
        });
      }
      jQuery2.removeEvent = function(elem, type, handle) {
        if (elem.removeEventListener) {
          elem.removeEventListener(type, handle);
        }
      };
      jQuery2.Event = function(src, props) {
        if (!(this instanceof jQuery2.Event)) {
          return new jQuery2.Event(src, props);
        }
        if (src && src.type) {
          this.originalEvent = src;
          this.type = src.type;
          this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
          src.returnValue === false ? returnTrue : returnFalse;
          this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
          this.currentTarget = src.currentTarget;
          this.relatedTarget = src.relatedTarget;
        } else {
          this.type = src;
        }
        if (props) {
          jQuery2.extend(this, props);
        }
        this.timeStamp = src && src.timeStamp || Date.now();
        this[jQuery2.expando] = true;
      };
      jQuery2.Event.prototype = {
        constructor: jQuery2.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = returnTrue;
          if (e && !this.isSimulated) {
            e.preventDefault();
          }
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopPropagation();
          }
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = returnTrue;
          if (e && !this.isSimulated) {
            e.stopImmediatePropagation();
          }
          this.stopPropagation();
        }
      };
      jQuery2.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
      }, jQuery2.event.addProp);
      jQuery2.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
        function focusMappedHandler(nativeEvent) {
          if (document2.documentMode) {
            var handle = dataPriv.get(this, "handle"), event = jQuery2.event.fix(nativeEvent);
            event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
            event.isSimulated = true;
            handle(nativeEvent);
            if (event.target === event.currentTarget) {
              handle(event);
            }
          } else {
            jQuery2.event.simulate(
              delegateType,
              nativeEvent.target,
              jQuery2.event.fix(nativeEvent)
            );
          }
        }
        jQuery2.event.special[type] = {
          // Utilize native event if possible so blur/focus sequence is correct
          setup: function() {
            var attaches;
            leverageNative(this, type, true);
            if (document2.documentMode) {
              attaches = dataPriv.get(this, delegateType);
              if (!attaches) {
                this.addEventListener(delegateType, focusMappedHandler);
              }
              dataPriv.set(this, delegateType, (attaches || 0) + 1);
            } else {
              return false;
            }
          },
          trigger: function() {
            leverageNative(this, type);
            return true;
          },
          teardown: function() {
            var attaches;
            if (document2.documentMode) {
              attaches = dataPriv.get(this, delegateType) - 1;
              if (!attaches) {
                this.removeEventListener(delegateType, focusMappedHandler);
                dataPriv.remove(this, delegateType);
              } else {
                dataPriv.set(this, delegateType, attaches);
              }
            } else {
              return false;
            }
          },
          // Suppress native focus or blur if we're currently inside
          // a leveraged native-event stack
          _default: function(event) {
            return dataPriv.get(event.target, type);
          },
          delegateType
        };
        jQuery2.event.special[delegateType] = {
          setup: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
            if (!attaches) {
              if (document2.documentMode) {
                this.addEventListener(delegateType, focusMappedHandler);
              } else {
                doc.addEventListener(type, focusMappedHandler, true);
              }
            }
            dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
          },
          teardown: function() {
            var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
            if (!attaches) {
              if (document2.documentMode) {
                this.removeEventListener(delegateType, focusMappedHandler);
              } else {
                doc.removeEventListener(type, focusMappedHandler, true);
              }
              dataPriv.remove(dataHolder, delegateType);
            } else {
              dataPriv.set(dataHolder, delegateType, attaches);
            }
          }
        };
      });
      jQuery2.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(orig, fix) {
        jQuery2.event.special[orig] = {
          delegateType: fix,
          bindType: fix,
          handle: function(event) {
            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
            if (!related || related !== target && !jQuery2.contains(target, related)) {
              event.type = handleObj.origType;
              ret = handleObj.handler.apply(this, arguments);
              event.type = fix;
            }
            return ret;
          }
        };
      });
      jQuery2.fn.extend({
        on: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
          return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
          var handleObj, type;
          if (types && types.preventDefault && types.handleObj) {
            handleObj = types.handleObj;
            jQuery2(types.delegateTarget).off(
              handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
              handleObj.selector,
              handleObj.handler
            );
            return this;
          }
          if (typeof types === "object") {
            for (type in types) {
              this.off(type, selector, types[type]);
            }
            return this;
          }
          if (selector === false || typeof selector === "function") {
            fn = selector;
            selector = void 0;
          }
          if (fn === false) {
            fn = returnFalse;
          }
          return this.each(function() {
            jQuery2.event.remove(this, types, fn, selector);
          });
        }
      });
      var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
          return jQuery2(elem).children("tbody")[0] || elem;
        }
        return elem;
      }
      function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
      }
      function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
          elem.type = elem.type.slice(5);
        } else {
          elem.removeAttribute("type");
        }
        return elem;
      }
      function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) {
          return;
        }
        if (dataPriv.hasData(src)) {
          pdataOld = dataPriv.get(src);
          events = pdataOld.events;
          if (events) {
            dataPriv.remove(dest, "handle events");
            for (type in events) {
              for (i = 0, l = events[type].length; i < l; i++) {
                jQuery2.event.add(dest, type, events[type][i]);
              }
            }
          }
        }
        if (dataUser.hasData(src)) {
          udataOld = dataUser.access(src);
          udataCur = jQuery2.extend({}, udataOld);
          dataUser.set(dest, udataCur);
        }
      }
      function fixInput(src, dest) {
        var nodeName2 = dest.nodeName.toLowerCase();
        if (nodeName2 === "input" && rcheckableType.test(src.type)) {
          dest.checked = src.checked;
        } else if (nodeName2 === "input" || nodeName2 === "textarea") {
          dest.defaultValue = src.defaultValue;
        }
      }
      function domManip(collection, args, callback, ignored) {
        args = flat(args);
        var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
          return collection.each(function(index) {
            var self = collection.eq(index);
            if (valueIsFunction) {
              args[0] = value.call(this, index, self.html());
            }
            domManip(self, args, callback, ignored);
          });
        }
        if (l) {
          fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
          first = fragment.firstChild;
          if (fragment.childNodes.length === 1) {
            fragment = first;
          }
          if (first || ignored) {
            scripts = jQuery2.map(getAll(fragment, "script"), disableScript);
            hasScripts = scripts.length;
            for (; i < l; i++) {
              node = fragment;
              if (i !== iNoClone) {
                node = jQuery2.clone(node, true, true);
                if (hasScripts) {
                  jQuery2.merge(scripts, getAll(node, "script"));
                }
              }
              callback.call(collection[i], node, i);
            }
            if (hasScripts) {
              doc = scripts[scripts.length - 1].ownerDocument;
              jQuery2.map(scripts, restoreScript);
              for (i = 0; i < hasScripts; i++) {
                node = scripts[i];
                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery2.contains(doc, node)) {
                  if (node.src && (node.type || "").toLowerCase() !== "module") {
                    if (jQuery2._evalUrl && !node.noModule) {
                      jQuery2._evalUrl(node.src, {
                        nonce: node.nonce || node.getAttribute("nonce")
                      }, doc);
                    }
                  } else {
                    DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                  }
                }
              }
            }
          }
        }
        return collection;
      }
      function remove(elem, selector, keepData) {
        var node, nodes = selector ? jQuery2.filter(selector, elem) : elem, i = 0;
        for (; (node = nodes[i]) != null; i++) {
          if (!keepData && node.nodeType === 1) {
            jQuery2.cleanData(getAll(node));
          }
          if (node.parentNode) {
            if (keepData && isAttached(node)) {
              setGlobalEval(getAll(node, "script"));
            }
            node.parentNode.removeChild(node);
          }
        }
        return elem;
      }
      jQuery2.extend({
        htmlPrefilter: function(html) {
          return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
          var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
          if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery2.isXMLDoc(elem)) {
            destElements = getAll(clone);
            srcElements = getAll(elem);
            for (i = 0, l = srcElements.length; i < l; i++) {
              fixInput(srcElements[i], destElements[i]);
            }
          }
          if (dataAndEvents) {
            if (deepDataAndEvents) {
              srcElements = srcElements || getAll(elem);
              destElements = destElements || getAll(clone);
              for (i = 0, l = srcElements.length; i < l; i++) {
                cloneCopyEvent(srcElements[i], destElements[i]);
              }
            } else {
              cloneCopyEvent(elem, clone);
            }
          }
          destElements = getAll(clone, "script");
          if (destElements.length > 0) {
            setGlobalEval(destElements, !inPage && getAll(elem, "script"));
          }
          return clone;
        },
        cleanData: function(elems) {
          var data, elem, type, special = jQuery2.event.special, i = 0;
          for (; (elem = elems[i]) !== void 0; i++) {
            if (acceptData(elem)) {
              if (data = elem[dataPriv.expando]) {
                if (data.events) {
                  for (type in data.events) {
                    if (special[type]) {
                      jQuery2.event.remove(elem, type);
                    } else {
                      jQuery2.removeEvent(elem, type, data.handle);
                    }
                  }
                }
                elem[dataPriv.expando] = void 0;
              }
              if (elem[dataUser.expando]) {
                elem[dataUser.expando] = void 0;
              }
            }
          }
        }
      });
      jQuery2.fn.extend({
        detach: function(selector) {
          return remove(this, selector, true);
        },
        remove: function(selector) {
          return remove(this, selector);
        },
        text: function(value) {
          return access(this, function(value2) {
            return value2 === void 0 ? jQuery2.text(this) : this.empty().each(function() {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value2;
              }
            });
          }, null, value, arguments.length);
        },
        append: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function() {
          return domManip(this, arguments, function(elem) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this);
            }
          });
        },
        after: function() {
          return domManip(this, arguments, function(elem) {
            if (this.parentNode) {
              this.parentNode.insertBefore(elem, this.nextSibling);
            }
          });
        },
        empty: function() {
          var elem, i = 0;
          for (; (elem = this[i]) != null; i++) {
            if (elem.nodeType === 1) {
              jQuery2.cleanData(getAll(elem, false));
              elem.textContent = "";
            }
          }
          return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
          dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
          deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          return this.map(function() {
            return jQuery2.clone(this, dataAndEvents, deepDataAndEvents);
          });
        },
        html: function(value) {
          return access(this, function(value2) {
            var elem = this[0] || {}, i = 0, l = this.length;
            if (value2 === void 0 && elem.nodeType === 1) {
              return elem.innerHTML;
            }
            if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
              value2 = jQuery2.htmlPrefilter(value2);
              try {
                for (; i < l; i++) {
                  elem = this[i] || {};
                  if (elem.nodeType === 1) {
                    jQuery2.cleanData(getAll(elem, false));
                    elem.innerHTML = value2;
                  }
                }
                elem = 0;
              } catch (e) {
              }
            }
            if (elem) {
              this.empty().append(value2);
            }
          }, null, value, arguments.length);
        },
        replaceWith: function() {
          var ignored = [];
          return domManip(this, arguments, function(elem) {
            var parent = this.parentNode;
            if (jQuery2.inArray(this, ignored) < 0) {
              jQuery2.cleanData(getAll(this));
              if (parent) {
                parent.replaceChild(elem, this);
              }
            }
          }, ignored);
        }
      });
      jQuery2.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(name, original) {
        jQuery2.fn[name] = function(selector) {
          var elems, ret = [], insert = jQuery2(selector), last = insert.length - 1, i = 0;
          for (; i <= last; i++) {
            elems = i === last ? this : this.clone(true);
            jQuery2(insert[i])[original](elems);
            push.apply(ret, elems.get());
          }
          return this.pushStack(ret);
        };
      });
      var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
      var rcustomProp = /^--/;
      var getStyles = function(elem) {
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
          view = window2;
        }
        return view.getComputedStyle(elem);
      };
      var swap = function(elem, options, callback) {
        var ret, name, old = {};
        for (name in options) {
          old[name] = elem.style[name];
          elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        for (name in options) {
          elem.style[name] = old[name];
        }
        return ret;
      };
      var rboxStyle = new RegExp(cssExpand.join("|"), "i");
      (function() {
        function computeStyleTests() {
          if (!div) {
            return;
          }
          container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          documentElement.appendChild(container).appendChild(div);
          var divStyle = window2.getComputedStyle(div);
          pixelPositionVal = divStyle.top !== "1%";
          reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
          div.style.right = "60%";
          pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
          boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
          div.style.position = "absolute";
          scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
          documentElement.removeChild(container);
          div = null;
        }
        function roundPixelMeasures(measure) {
          return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
        if (!div.style) {
          return;
        }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery2.extend(support, {
          boxSizingReliable: function() {
            computeStyleTests();
            return boxSizingReliableVal;
          },
          pixelBoxStyles: function() {
            computeStyleTests();
            return pixelBoxStylesVal;
          },
          pixelPosition: function() {
            computeStyleTests();
            return pixelPositionVal;
          },
          reliableMarginLeft: function() {
            computeStyleTests();
            return reliableMarginLeftVal;
          },
          scrollboxSize: function() {
            computeStyleTests();
            return scrollboxSizeVal;
          },
          // Support: IE 9 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Behavior in IE 9 is more subtle than in newer versions & it passes
          // some versions of this test; make sure not to make it pass there!
          //
          // Support: Firefox 70+
          // Only Firefox includes border widths
          // in computed dimensions. (gh-4529)
          reliableTrDimensions: function() {
            var table, tr, trChild, trStyle;
            if (reliableTrDimensionsVal == null) {
              table = document2.createElement("table");
              tr = document2.createElement("tr");
              trChild = document2.createElement("div");
              table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
              tr.style.cssText = "box-sizing:content-box;border:1px solid";
              tr.style.height = "1px";
              trChild.style.height = "9px";
              trChild.style.display = "block";
              documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
              trStyle = window2.getComputedStyle(tr);
              reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
              documentElement.removeChild(table);
            }
            return reliableTrDimensionsVal;
          }
        });
      })();
      function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
        computed = computed || getStyles(elem);
        if (computed) {
          ret = computed.getPropertyValue(name) || computed[name];
          if (isCustomProp && ret) {
            ret = ret.replace(rtrimCSS, "$1") || void 0;
          }
          if (ret === "" && !isAttached(elem)) {
            ret = jQuery2.style(elem, name);
          }
          if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
            width = style.width;
            minWidth = style.minWidth;
            maxWidth = style.maxWidth;
            style.minWidth = style.maxWidth = style.width = ret;
            ret = computed.width;
            style.width = width;
            style.minWidth = minWidth;
            style.maxWidth = maxWidth;
          }
        }
        return ret !== void 0 ? (
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          ret + ""
        ) : ret;
      }
      function addGetHookIf(conditionFn, hookFn) {
        return {
          get: function() {
            if (conditionFn()) {
              delete this.get;
              return;
            }
            return (this.get = hookFn).apply(this, arguments);
          }
        };
      }
      var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
      function vendorPropName(name) {
        var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
        while (i--) {
          name = cssPrefixes[i] + capName;
          if (name in emptyStyle) {
            return name;
          }
        }
      }
      function finalPropName(name) {
        var final = jQuery2.cssProps[name] || vendorProps[name];
        if (final) {
          return final;
        }
        if (name in emptyStyle) {
          return name;
        }
        return vendorProps[name] = vendorPropName(name) || name;
      }
      var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function setPositiveNumber(_elem, value, subtract) {
        var matches = rcssNum.exec(value);
        return matches ? (
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
        ) : value;
      }
      function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
        if (box === (isBorderBox ? "border" : "content")) {
          return 0;
        }
        for (; i < 4; i += 2) {
          if (box === "margin") {
            marginDelta += jQuery2.css(elem, box + cssExpand[i], true, styles);
          }
          if (!isBorderBox) {
            delta += jQuery2.css(elem, "padding" + cssExpand[i], true, styles);
            if (box !== "padding") {
              delta += jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            } else {
              extra += jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          } else {
            if (box === "content") {
              delta -= jQuery2.css(elem, "padding" + cssExpand[i], true, styles);
            }
            if (box !== "margin") {
              delta -= jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
            }
          }
        }
        if (!isBorderBox && computedVal >= 0) {
          delta += Math.max(0, Math.ceil(
            elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
            // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
            // Use an explicit zero to avoid NaN (gh-3964)
          )) || 0;
        }
        return delta + marginDelta;
      }
      function getWidthOrHeight(elem, dimension, extra) {
        var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        if (rnumnonpx.test(val)) {
          if (!extra) {
            return val;
          }
          val = "auto";
        }
        if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery2.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
          isBorderBox = jQuery2.css(elem, "boxSizing", false, styles) === "border-box";
          valueIsBorderBox = offsetProp in elem;
          if (valueIsBorderBox) {
            val = elem[offsetProp];
          }
        }
        val = parseFloat(val) || 0;
        return val + boxModelAdjustment(
          elem,
          dimension,
          extra || (isBorderBox ? "border" : "content"),
          valueIsBorderBox,
          styles,
          // Provide the current computed size to request scroll gutter calculation (gh-3589)
          val
        ) + "px";
      }
      jQuery2.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
          opacity: {
            get: function(elem, computed) {
              if (computed) {
                var ret = curCSS(elem, "opacity");
                return ret === "" ? "1" : ret;
              }
            }
          }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
          animationIterationCount: true,
          aspectRatio: true,
          borderImageSlice: true,
          columnCount: true,
          flexGrow: true,
          flexShrink: true,
          fontWeight: true,
          gridArea: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnStart: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowStart: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          scale: true,
          widows: true,
          zIndex: true,
          zoom: true,
          // SVG-related
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeMiterlimit: true,
          strokeOpacity: true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
          if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
            return;
          }
          var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
          if (value !== void 0) {
            type = typeof value;
            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
              value = adjustCSS(elem, name, ret);
              type = "number";
            }
            if (value == null || value !== value) {
              return;
            }
            if (type === "number" && !isCustomProp) {
              value += ret && ret[3] || (jQuery2.cssNumber[origName] ? "" : "px");
            }
            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
              style[name] = "inherit";
            }
            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
              if (isCustomProp) {
                style.setProperty(name, value);
              } else {
                style[name] = value;
              }
            }
          } else {
            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
              return ret;
            }
            return style[name];
          }
        },
        css: function(elem, name, extra, styles) {
          var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
          if (!isCustomProp) {
            name = finalPropName(origName);
          }
          hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
          if (hooks && "get" in hooks) {
            val = hooks.get(elem, true, extra);
          }
          if (val === void 0) {
            val = curCSS(elem, name, styles);
          }
          if (val === "normal" && name in cssNormalTransform) {
            val = cssNormalTransform[name];
          }
          if (extra === "" || extra) {
            num = parseFloat(val);
            return extra === true || isFinite(num) ? num || 0 : val;
          }
          return val;
        }
      });
      jQuery2.each(["height", "width"], function(_i, dimension) {
        jQuery2.cssHooks[dimension] = {
          get: function(elem, computed, extra) {
            if (computed) {
              return rdisplayswap.test(jQuery2.css(elem, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                return getWidthOrHeight(elem, dimension, extra);
              }) : getWidthOrHeight(elem, dimension, extra);
            }
          },
          set: function(elem, value, extra) {
            var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
              elem,
              dimension,
              extra,
              isBorderBox,
              styles
            ) : 0;
            if (isBorderBox && scrollboxSizeBuggy) {
              subtract -= Math.ceil(
                elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
              );
            }
            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
              elem.style[dimension] = value;
              value = jQuery2.css(elem, dimension);
            }
            return setPositiveNumber(elem, value, subtract);
          }
        };
      });
      jQuery2.cssHooks.marginLeft = addGetHookIf(
        support.reliableMarginLeft,
        function(elem, computed) {
          if (computed) {
            return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
              return elem.getBoundingClientRect().left;
            })) + "px";
          }
        }
      );
      jQuery2.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(prefix, suffix) {
        jQuery2.cssHooks[prefix + suffix] = {
          expand: function(value) {
            var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
            for (; i < 4; i++) {
              expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
            }
            return expanded;
          }
        };
        if (prefix !== "margin") {
          jQuery2.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
      });
      jQuery2.fn.extend({
        css: function(name, value) {
          return access(this, function(elem, name2, value2) {
            var styles, len, map = {}, i = 0;
            if (Array.isArray(name2)) {
              styles = getStyles(elem);
              len = name2.length;
              for (; i < len; i++) {
                map[name2[i]] = jQuery2.css(elem, name2[i], false, styles);
              }
              return map;
            }
            return value2 !== void 0 ? jQuery2.style(elem, name2, value2) : jQuery2.css(elem, name2);
          }, name, value, arguments.length > 1);
        }
      });
      function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
      }
      jQuery2.Tween = Tween;
      Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
          this.elem = elem;
          this.prop = prop;
          this.easing = easing || jQuery2.easing._default;
          this.options = options;
          this.start = this.now = this.cur();
          this.end = end;
          this.unit = unit || (jQuery2.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
          var eased, hooks = Tween.propHooks[this.prop];
          if (this.options.duration) {
            this.pos = eased = jQuery2.easing[this.easing](
              percent,
              this.options.duration * percent,
              0,
              1,
              this.options.duration
            );
          } else {
            this.pos = eased = percent;
          }
          this.now = (this.end - this.start) * eased + this.start;
          if (this.options.step) {
            this.options.step.call(this.elem, this.now, this);
          }
          if (hooks && hooks.set) {
            hooks.set(this);
          } else {
            Tween.propHooks._default.set(this);
          }
          return this;
        }
      };
      Tween.prototype.init.prototype = Tween.prototype;
      Tween.propHooks = {
        _default: {
          get: function(tween) {
            var result;
            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
              return tween.elem[tween.prop];
            }
            result = jQuery2.css(tween.elem, tween.prop, "");
            return !result || result === "auto" ? 0 : result;
          },
          set: function(tween) {
            if (jQuery2.fx.step[tween.prop]) {
              jQuery2.fx.step[tween.prop](tween);
            } else if (tween.elem.nodeType === 1 && (jQuery2.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
              jQuery2.style(tween.elem, tween.prop, tween.now + tween.unit);
            } else {
              tween.elem[tween.prop] = tween.now;
            }
          }
        }
      };
      Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
          if (tween.elem.nodeType && tween.elem.parentNode) {
            tween.elem[tween.prop] = tween.now;
          }
        }
      };
      jQuery2.easing = {
        linear: function(p) {
          return p;
        },
        swing: function(p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
      };
      jQuery2.fx = Tween.prototype.init;
      jQuery2.fx.step = {};
      var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
      function schedule() {
        if (inProgress) {
          if (document2.hidden === false && window2.requestAnimationFrame) {
            window2.requestAnimationFrame(schedule);
          } else {
            window2.setTimeout(schedule, jQuery2.fx.interval);
          }
          jQuery2.fx.tick();
        }
      }
      function createFxNow() {
        window2.setTimeout(function() {
          fxNow = void 0;
        });
        return fxNow = Date.now();
      }
      function genFx(type, includeWidth) {
        var which, i = 0, attrs = { height: type };
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
          which = cssExpand[i];
          attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) {
          attrs.opacity = attrs.width = type;
        }
        return attrs;
      }
      function createTween(value, prop, animation) {
        var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
        for (; index < length; index++) {
          if (tween = collection[index].call(animation, prop, value)) {
            return tween;
          }
        }
      }
      function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        if (!opts.queue) {
          hooks = jQuery2._queueHooks(elem, "fx");
          if (hooks.unqueued == null) {
            hooks.unqueued = 0;
            oldfire = hooks.empty.fire;
            hooks.empty.fire = function() {
              if (!hooks.unqueued) {
                oldfire();
              }
            };
          }
          hooks.unqueued++;
          anim.always(function() {
            anim.always(function() {
              hooks.unqueued--;
              if (!jQuery2.queue(elem, "fx").length) {
                hooks.empty.fire();
              }
            });
          });
        }
        for (prop in props) {
          value = props[prop];
          if (rfxtypes.test(value)) {
            delete props[prop];
            toggle = toggle || value === "toggle";
            if (value === (hidden ? "hide" : "show")) {
              if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                hidden = true;
              } else {
                continue;
              }
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery2.style(elem, prop);
          }
        }
        propTween = !jQuery2.isEmptyObject(props);
        if (!propTween && jQuery2.isEmptyObject(orig)) {
          return;
        }
        if (isBox && elem.nodeType === 1) {
          opts.overflow = [style.overflow, style.overflowX, style.overflowY];
          restoreDisplay = dataShow && dataShow.display;
          if (restoreDisplay == null) {
            restoreDisplay = dataPriv.get(elem, "display");
          }
          display = jQuery2.css(elem, "display");
          if (display === "none") {
            if (restoreDisplay) {
              display = restoreDisplay;
            } else {
              showHide([elem], true);
              restoreDisplay = elem.style.display || restoreDisplay;
              display = jQuery2.css(elem, "display");
              showHide([elem]);
            }
          }
          if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
            if (jQuery2.css(elem, "float") === "none") {
              if (!propTween) {
                anim.done(function() {
                  style.display = restoreDisplay;
                });
                if (restoreDisplay == null) {
                  display = style.display;
                  restoreDisplay = display === "none" ? "" : display;
                }
              }
              style.display = "inline-block";
            }
          }
        }
        if (opts.overflow) {
          style.overflow = "hidden";
          anim.always(function() {
            style.overflow = opts.overflow[0];
            style.overflowX = opts.overflow[1];
            style.overflowY = opts.overflow[2];
          });
        }
        propTween = false;
        for (prop in orig) {
          if (!propTween) {
            if (dataShow) {
              if ("hidden" in dataShow) {
                hidden = dataShow.hidden;
              }
            } else {
              dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
            }
            if (toggle) {
              dataShow.hidden = !hidden;
            }
            if (hidden) {
              showHide([elem], true);
            }
            anim.done(function() {
              if (!hidden) {
                showHide([elem]);
              }
              dataPriv.remove(elem, "fxshow");
              for (prop in orig) {
                jQuery2.style(elem, prop, orig[prop]);
              }
            });
          }
          propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
          if (!(prop in dataShow)) {
            dataShow[prop] = propTween.start;
            if (hidden) {
              propTween.end = propTween.start;
              propTween.start = 0;
            }
          }
        }
      }
      function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) {
          name = camelCase(index);
          easing = specialEasing[name];
          value = props[index];
          if (Array.isArray(value)) {
            easing = value[1];
            value = props[index] = value[0];
          }
          if (index !== name) {
            props[name] = value;
            delete props[index];
          }
          hooks = jQuery2.cssHooks[name];
          if (hooks && "expand" in hooks) {
            value = hooks.expand(value);
            delete props[name];
            for (index in value) {
              if (!(index in props)) {
                props[index] = value[index];
                specialEasing[index] = easing;
              }
            }
          } else {
            specialEasing[name] = easing;
          }
        }
      }
      function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery2.Deferred().always(function() {
          delete tick.elem;
        }), tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
          for (; index2 < length2; index2++) {
            animation.tweens[index2].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length2) {
            return remaining;
          }
          if (!length2) {
            deferred.notifyWith(elem, [animation, 1, 0]);
          }
          deferred.resolveWith(elem, [animation]);
          return false;
        }, animation = deferred.promise({
          elem,
          props: jQuery2.extend({}, properties),
          opts: jQuery2.extend(true, {
            specialEasing: {},
            easing: jQuery2.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery2.Tween(
              elem,
              animation.opts,
              prop,
              end,
              animation.opts.specialEasing[prop] || animation.opts.easing
            );
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for (; index < length; index++) {
          result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
          if (result) {
            if (isFunction(result.stop)) {
              jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
            }
            return result;
          }
        }
        jQuery2.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) {
          animation.opts.start.call(elem, animation);
        }
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery2.fx.timer(
          jQuery2.extend(tick, {
            elem,
            anim: animation,
            queue: animation.opts.queue
          })
        );
        return animation;
      }
      jQuery2.Animation = jQuery2.extend(Animation, {
        tweeners: {
          "*": [function(prop, value) {
            var tween = this.createTween(prop, value);
            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
            return tween;
          }]
        },
        tweener: function(props, callback) {
          if (isFunction(props)) {
            callback = props;
            props = ["*"];
          } else {
            props = props.match(rnothtmlwhite);
          }
          var prop, index = 0, length = props.length;
          for (; index < length; index++) {
            prop = props[index];
            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
            Animation.tweeners[prop].unshift(callback);
          }
        },
        prefilters: [defaultPrefilter],
        prefilter: function(callback, prepend) {
          if (prepend) {
            Animation.prefilters.unshift(callback);
          } else {
            Animation.prefilters.push(callback);
          }
        }
      });
      jQuery2.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery2.extend({}, speed) : {
          complete: fn || !fn && easing || isFunction(speed) && speed,
          duration: speed,
          easing: fn && easing || easing && !isFunction(easing) && easing
        };
        if (jQuery2.fx.off) {
          opt.duration = 0;
        } else {
          if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery2.fx.speeds) {
              opt.duration = jQuery2.fx.speeds[opt.duration];
            } else {
              opt.duration = jQuery2.fx.speeds._default;
            }
          }
        }
        if (opt.queue == null || opt.queue === true) {
          opt.queue = "fx";
        }
        opt.old = opt.complete;
        opt.complete = function() {
          if (isFunction(opt.old)) {
            opt.old.call(this);
          }
          if (opt.queue) {
            jQuery2.dequeue(this, opt.queue);
          }
        };
        return opt;
      };
      jQuery2.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
          return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
          var empty = jQuery2.isEmptyObject(prop), optall = jQuery2.speed(speed, easing, callback), doAnimation = function() {
            var anim = Animation(this, jQuery2.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
          doAnimation.finish = doAnimation;
          return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
          var stopQueue = function(hooks) {
            var stop = hooks.stop;
            delete hooks.stop;
            stop(gotoEnd);
          };
          if (typeof type !== "string") {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = void 0;
          }
          if (clearQueue) {
            this.queue(type || "fx", []);
          }
          return this.each(function() {
            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery2.timers, data = dataPriv.get(this);
            if (index) {
              if (data[index] && data[index].stop) {
                stopQueue(data[index]);
              }
            } else {
              for (index in data) {
                if (data[index] && data[index].stop && rrun.test(index)) {
                  stopQueue(data[index]);
                }
              }
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                timers[index].anim.stop(gotoEnd);
                dequeue = false;
                timers.splice(index, 1);
              }
            }
            if (dequeue || !gotoEnd) {
              jQuery2.dequeue(this, type);
            }
          });
        },
        finish: function(type) {
          if (type !== false) {
            type = type || "fx";
          }
          return this.each(function() {
            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery2.timers, length = queue ? queue.length : 0;
            data.finish = true;
            jQuery2.queue(this, type, []);
            if (hooks && hooks.stop) {
              hooks.stop.call(this, true);
            }
            for (index = timers.length; index--; ) {
              if (timers[index].elem === this && timers[index].queue === type) {
                timers[index].anim.stop(true);
                timers.splice(index, 1);
              }
            }
            for (index = 0; index < length; index++) {
              if (queue[index] && queue[index].finish) {
                queue[index].finish.call(this);
              }
            }
            delete data.finish;
          });
        }
      });
      jQuery2.each(["toggle", "show", "hide"], function(_i, name) {
        var cssFn = jQuery2.fn[name];
        jQuery2.fn[name] = function(speed, easing, callback) {
          return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
      });
      jQuery2.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      }, function(name, props) {
        jQuery2.fn[name] = function(speed, easing, callback) {
          return this.animate(props, speed, easing, callback);
        };
      });
      jQuery2.timers = [];
      jQuery2.fx.tick = function() {
        var timer, i = 0, timers = jQuery2.timers;
        fxNow = Date.now();
        for (; i < timers.length; i++) {
          timer = timers[i];
          if (!timer() && timers[i] === timer) {
            timers.splice(i--, 1);
          }
        }
        if (!timers.length) {
          jQuery2.fx.stop();
        }
        fxNow = void 0;
      };
      jQuery2.fx.timer = function(timer) {
        jQuery2.timers.push(timer);
        jQuery2.fx.start();
      };
      jQuery2.fx.interval = 13;
      jQuery2.fx.start = function() {
        if (inProgress) {
          return;
        }
        inProgress = true;
        schedule();
      };
      jQuery2.fx.stop = function() {
        inProgress = null;
      };
      jQuery2.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
      };
      jQuery2.fn.delay = function(time, type) {
        time = jQuery2.fx ? jQuery2.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
          var timeout = window2.setTimeout(next, time);
          hooks.stop = function() {
            window2.clearTimeout(timeout);
          };
        });
      };
      (function() {
        var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
        input.type = "checkbox";
        support.checkOn = input.value !== "";
        support.optSelected = opt.selected;
        input = document2.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
      })();
      var boolHook, attrHandle = jQuery2.expr.attrHandle;
      jQuery2.fn.extend({
        attr: function(name, value) {
          return access(this, jQuery2.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
          return this.each(function() {
            jQuery2.removeAttr(this, name);
          });
        }
      });
      jQuery2.extend({
        attr: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (typeof elem.getAttribute === "undefined") {
            return jQuery2.prop(elem, name, value);
          }
          if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
            hooks = jQuery2.attrHooks[name.toLowerCase()] || (jQuery2.expr.match.bool.test(name) ? boolHook : void 0);
          }
          if (value !== void 0) {
            if (value === null) {
              jQuery2.removeAttr(elem, name);
              return;
            }
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            elem.setAttribute(name, value + "");
            return value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          ret = jQuery2.find.attr(elem, name);
          return ret == null ? void 0 : ret;
        },
        attrHooks: {
          type: {
            set: function(elem, value) {
              if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                var val = elem.value;
                elem.setAttribute("type", value);
                if (val) {
                  elem.value = val;
                }
                return value;
              }
            }
          }
        },
        removeAttr: function(elem, value) {
          var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
          if (attrNames && elem.nodeType === 1) {
            while (name = attrNames[i++]) {
              elem.removeAttribute(name);
            }
          }
        }
      });
      boolHook = {
        set: function(elem, value, name) {
          if (value === false) {
            jQuery2.removeAttr(elem, name);
          } else {
            elem.setAttribute(name, name);
          }
          return name;
        }
      };
      jQuery2.each(jQuery2.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery2.find.attr;
        attrHandle[name] = function(elem, name2, isXML) {
          var ret, handle, lowercaseName = name2.toLowerCase();
          if (!isXML) {
            handle = attrHandle[lowercaseName];
            attrHandle[lowercaseName] = ret;
            ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
            attrHandle[lowercaseName] = handle;
          }
          return ret;
        };
      });
      var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
      jQuery2.fn.extend({
        prop: function(name, value) {
          return access(this, jQuery2.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
          return this.each(function() {
            delete this[jQuery2.propFix[name] || name];
          });
        }
      });
      jQuery2.extend({
        prop: function(elem, name, value) {
          var ret, hooks, nType = elem.nodeType;
          if (nType === 3 || nType === 8 || nType === 2) {
            return;
          }
          if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
            name = jQuery2.propFix[name] || name;
            hooks = jQuery2.propHooks[name];
          }
          if (value !== void 0) {
            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
              return ret;
            }
            return elem[name] = value;
          }
          if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
            return ret;
          }
          return elem[name];
        },
        propHooks: {
          tabIndex: {
            get: function(elem) {
              var tabindex = jQuery2.find.attr(elem, "tabindex");
              if (tabindex) {
                return parseInt(tabindex, 10);
              }
              if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                return 0;
              }
              return -1;
            }
          }
        },
        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      });
      if (!support.optSelected) {
        jQuery2.propHooks.selected = {
          get: function(elem) {
            var parent = elem.parentNode;
            if (parent && parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
            return null;
          },
          set: function(elem) {
            var parent = elem.parentNode;
            if (parent) {
              parent.selectedIndex;
              if (parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
            }
          }
        };
      }
      jQuery2.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ], function() {
        jQuery2.propFix[this.toLowerCase()] = this;
      });
      function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
      }
      function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
      }
      function classesToArray(value) {
        if (Array.isArray(value)) {
          return value;
        }
        if (typeof value === "string") {
          return value.match(rnothtmlwhite) || [];
        }
        return [];
      }
      jQuery2.fn.extend({
        addClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery2(this).addClass(value.call(this, j, getClass(this)));
            });
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (cur.indexOf(" " + className + " ") < 0) {
                    cur += className + " ";
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        removeClass: function(value) {
          var classNames, cur, curValue, className, i, finalValue;
          if (isFunction(value)) {
            return this.each(function(j) {
              jQuery2(this).removeClass(value.call(this, j, getClass(this)));
            });
          }
          if (!arguments.length) {
            return this.attr("class", "");
          }
          classNames = classesToArray(value);
          if (classNames.length) {
            return this.each(function() {
              curValue = getClass(this);
              cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
              if (cur) {
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  while (cur.indexOf(" " + className + " ") > -1) {
                    cur = cur.replace(" " + className + " ", " ");
                  }
                }
                finalValue = stripAndCollapse(cur);
                if (curValue !== finalValue) {
                  this.setAttribute("class", finalValue);
                }
              }
            });
          }
          return this;
        },
        toggleClass: function(value, stateVal) {
          var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
          if (isFunction(value)) {
            return this.each(function(i2) {
              jQuery2(this).toggleClass(
                value.call(this, i2, getClass(this), stateVal),
                stateVal
              );
            });
          }
          if (typeof stateVal === "boolean" && isValidValue) {
            return stateVal ? this.addClass(value) : this.removeClass(value);
          }
          classNames = classesToArray(value);
          return this.each(function() {
            if (isValidValue) {
              self = jQuery2(this);
              for (i = 0; i < classNames.length; i++) {
                className = classNames[i];
                if (self.hasClass(className)) {
                  self.removeClass(className);
                } else {
                  self.addClass(className);
                }
              }
            } else if (value === void 0 || type === "boolean") {
              className = getClass(this);
              if (className) {
                dataPriv.set(this, "__className__", className);
              }
              if (this.setAttribute) {
                this.setAttribute(
                  "class",
                  className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                );
              }
            }
          });
        },
        hasClass: function(selector) {
          var className, elem, i = 0;
          className = " " + selector + " ";
          while (elem = this[i++]) {
            if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
              return true;
            }
          }
          return false;
        }
      });
      var rreturn = /\r/g;
      jQuery2.fn.extend({
        val: function(value) {
          var hooks, ret, valueIsFunction, elem = this[0];
          if (!arguments.length) {
            if (elem) {
              hooks = jQuery2.valHooks[elem.type] || jQuery2.valHooks[elem.nodeName.toLowerCase()];
              if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                return ret;
              }
              ret = elem.value;
              if (typeof ret === "string") {
                return ret.replace(rreturn, "");
              }
              return ret == null ? "" : ret;
            }
            return;
          }
          valueIsFunction = isFunction(value);
          return this.each(function(i) {
            var val;
            if (this.nodeType !== 1) {
              return;
            }
            if (valueIsFunction) {
              val = value.call(this, i, jQuery2(this).val());
            } else {
              val = value;
            }
            if (val == null) {
              val = "";
            } else if (typeof val === "number") {
              val += "";
            } else if (Array.isArray(val)) {
              val = jQuery2.map(val, function(value2) {
                return value2 == null ? "" : value2 + "";
              });
            }
            hooks = jQuery2.valHooks[this.type] || jQuery2.valHooks[this.nodeName.toLowerCase()];
            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
              this.value = val;
            }
          });
        }
      });
      jQuery2.extend({
        valHooks: {
          option: {
            get: function(elem) {
              var val = jQuery2.find.attr(elem, "value");
              return val != null ? val : (
                // Support: IE <=10 - 11 only
                // option.text throws exceptions (trac-14686, trac-14858)
                // Strip and collapse whitespace
                // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                stripAndCollapse(jQuery2.text(elem))
              );
            }
          },
          select: {
            get: function(elem) {
              var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
              if (index < 0) {
                i = max;
              } else {
                i = one ? index : 0;
              }
              for (; i < max; i++) {
                option = options[i];
                if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
                !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                  value = jQuery2(option).val();
                  if (one) {
                    return value;
                  }
                  values.push(value);
                }
              }
              return values;
            },
            set: function(elem, value) {
              var optionSet, option, options = elem.options, values = jQuery2.makeArray(value), i = options.length;
              while (i--) {
                option = options[i];
                if (option.selected = jQuery2.inArray(jQuery2.valHooks.option.get(option), values) > -1) {
                  optionSet = true;
                }
              }
              if (!optionSet) {
                elem.selectedIndex = -1;
              }
              return values;
            }
          }
        }
      });
      jQuery2.each(["radio", "checkbox"], function() {
        jQuery2.valHooks[this] = {
          set: function(elem, value) {
            if (Array.isArray(value)) {
              return elem.checked = jQuery2.inArray(jQuery2(elem).val(), value) > -1;
            }
          }
        };
        if (!support.checkOn) {
          jQuery2.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
          };
        }
      });
      var location2 = window2.location;
      var nonce = { guid: Date.now() };
      var rquery = /\?/;
      jQuery2.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") {
          return null;
        }
        try {
          xml = new window2.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
        }
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) {
          jQuery2.error("Invalid XML: " + (parserErrorElem ? jQuery2.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
          }).join("\n") : data));
        }
        return xml;
      };
      var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
      };
      jQuery2.extend(jQuery2.event, {
        trigger: function(event, data, elem, onlyHandlers) {
          var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
          cur = lastElement = tmp = elem = elem || document2;
          if (elem.nodeType === 3 || elem.nodeType === 8) {
            return;
          }
          if (rfocusMorph.test(type + jQuery2.event.triggered)) {
            return;
          }
          if (type.indexOf(".") > -1) {
            namespaces = type.split(".");
            type = namespaces.shift();
            namespaces.sort();
          }
          ontype = type.indexOf(":") < 0 && "on" + type;
          event = event[jQuery2.expando] ? event : new jQuery2.Event(type, typeof event === "object" && event);
          event.isTrigger = onlyHandlers ? 2 : 3;
          event.namespace = namespaces.join(".");
          event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          event.result = void 0;
          if (!event.target) {
            event.target = elem;
          }
          data = data == null ? [event] : jQuery2.makeArray(data, [event]);
          special = jQuery2.event.special[type] || {};
          if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
            return;
          }
          if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
            bubbleType = special.delegateType || type;
            if (!rfocusMorph.test(bubbleType + type)) {
              cur = cur.parentNode;
            }
            for (; cur; cur = cur.parentNode) {
              eventPath.push(cur);
              tmp = cur;
            }
            if (tmp === (elem.ownerDocument || document2)) {
              eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
            }
          }
          i = 0;
          while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
            lastElement = cur;
            event.type = i > 1 ? bubbleType : special.bindType || type;
            handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
            if (handle) {
              handle.apply(cur, data);
            }
            handle = ontype && cur[ontype];
            if (handle && handle.apply && acceptData(cur)) {
              event.result = handle.apply(cur, data);
              if (event.result === false) {
                event.preventDefault();
              }
            }
          }
          event.type = type;
          if (!onlyHandlers && !event.isDefaultPrevented()) {
            if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
              if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                tmp = elem[ontype];
                if (tmp) {
                  elem[ontype] = null;
                }
                jQuery2.event.triggered = type;
                if (event.isPropagationStopped()) {
                  lastElement.addEventListener(type, stopPropagationCallback);
                }
                elem[type]();
                if (event.isPropagationStopped()) {
                  lastElement.removeEventListener(type, stopPropagationCallback);
                }
                jQuery2.event.triggered = void 0;
                if (tmp) {
                  elem[ontype] = tmp;
                }
              }
            }
          }
          return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(type, elem, event) {
          var e = jQuery2.extend(
            new jQuery2.Event(),
            event,
            {
              type,
              isSimulated: true
            }
          );
          jQuery2.event.trigger(e, null, elem);
        }
      });
      jQuery2.fn.extend({
        trigger: function(type, data) {
          return this.each(function() {
            jQuery2.event.trigger(type, data, this);
          });
        },
        triggerHandler: function(type, data) {
          var elem = this[0];
          if (elem) {
            return jQuery2.event.trigger(type, data, elem, true);
          }
        }
      });
      var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
      function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) {
          jQuery2.each(obj, function(i, v) {
            if (traditional || rbracket.test(prefix)) {
              add(prefix, v);
            } else {
              buildParams(
                prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                v,
                traditional,
                add
              );
            }
          });
        } else if (!traditional && toType(obj) === "object") {
          for (name in obj) {
            buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
          }
        } else {
          add(prefix, obj);
        }
      }
      jQuery2.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
          var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) {
          return "";
        }
        if (Array.isArray(a) || a.jquery && !jQuery2.isPlainObject(a)) {
          jQuery2.each(a, function() {
            add(this.name, this.value);
          });
        } else {
          for (prefix in a) {
            buildParams(prefix, a[prefix], traditional, add);
          }
        }
        return s.join("&");
      };
      jQuery2.fn.extend({
        serialize: function() {
          return jQuery2.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var elements = jQuery2.prop(this, "elements");
            return elements ? jQuery2.makeArray(elements) : this;
          }).filter(function() {
            var type = this.type;
            return this.name && !jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
          }).map(function(_i, elem) {
            var val = jQuery2(this).val();
            if (val == null) {
              return null;
            }
            if (Array.isArray(val)) {
              return jQuery2.map(val, function(val2) {
                return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
              });
            }
            return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
          }).get();
        }
      });
      var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
      originAnchor.href = location2.href;
      function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
          if (typeof dataTypeExpression !== "string") {
            func = dataTypeExpression;
            dataTypeExpression = "*";
          }
          var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
          if (isFunction(func)) {
            while (dataType = dataTypes[i++]) {
              if (dataType[0] === "+") {
                dataType = dataType.slice(1) || "*";
                (structure[dataType] = structure[dataType] || []).unshift(func);
              } else {
                (structure[dataType] = structure[dataType] || []).push(func);
              }
            }
          }
        };
      }
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {}, seekingTransport = structure === transports;
        function inspect(dataType) {
          var selected;
          inspected[dataType] = true;
          jQuery2.each(structure[dataType] || [], function(_, prefilterOrFactory) {
            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
              options.dataTypes.unshift(dataTypeOrTransport);
              inspect(dataTypeOrTransport);
              return false;
            } else if (seekingTransport) {
              return !(selected = dataTypeOrTransport);
            }
          });
          return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      }
      function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery2.ajaxSettings.flatOptions || {};
        for (key in src) {
          if (src[key] !== void 0) {
            (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
          }
        }
        if (deep) {
          jQuery2.extend(true, target, deep);
        }
        return target;
      }
      function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        while (dataTypes[0] === "*") {
          dataTypes.shift();
          if (ct === void 0) {
            ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
          }
        }
        if (ct) {
          for (type in contents) {
            if (contents[type] && contents[type].test(ct)) {
              dataTypes.unshift(type);
              break;
            }
          }
        }
        if (dataTypes[0] in responses) {
          finalDataType = dataTypes[0];
        } else {
          for (type in responses) {
            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
              finalDataType = type;
              break;
            }
            if (!firstDataType) {
              firstDataType = type;
            }
          }
          finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
          if (finalDataType !== dataTypes[0]) {
            dataTypes.unshift(finalDataType);
          }
          return responses[finalDataType];
        }
      }
      function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) {
          for (conv in s.converters) {
            converters[conv.toLowerCase()] = s.converters[conv];
          }
        }
        current = dataTypes.shift();
        while (current) {
          if (s.responseFields[current]) {
            jqXHR[s.responseFields[current]] = response;
          }
          if (!prev && isSuccess && s.dataFilter) {
            response = s.dataFilter(response, s.dataType);
          }
          prev = current;
          current = dataTypes.shift();
          if (current) {
            if (current === "*") {
              current = prev;
            } else if (prev !== "*" && prev !== current) {
              conv = converters[prev + " " + current] || converters["* " + current];
              if (!conv) {
                for (conv2 in converters) {
                  tmp = conv2.split(" ");
                  if (tmp[1] === current) {
                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                    if (conv) {
                      if (conv === true) {
                        conv = converters[conv2];
                      } else if (converters[conv2] !== true) {
                        current = tmp[0];
                        dataTypes.unshift(tmp[1]);
                      }
                      break;
                    }
                  }
                }
              }
              if (conv !== true) {
                if (conv && s.throws) {
                  response = conv(response);
                } else {
                  try {
                    response = conv(response);
                  } catch (e) {
                    return {
                      state: "parsererror",
                      error: conv ? e : "No conversion from " + prev + " to " + current
                    };
                  }
                }
              }
            }
          }
        }
        return { state: "success", data: response };
      }
      jQuery2.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: location2.href,
          type: "GET",
          isLocal: rlocalProtocol.test(location2.protocol),
          global: true,
          processData: true,
          async: true,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          /*
          timeout: 0,
          data: null,
          dataType: null,
          username: null,
          password: null,
          cache: null,
          throws: false,
          traditional: false,
          headers: {},
          */
          accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          // Data converters
          // Keys separate source (or catchall "*") and destination types with a single space
          converters: {
            // Convert anything to text
            "* text": String,
            // Text to html (true = no transformation)
            "text html": true,
            // Evaluate text as a json expression
            "text json": JSON.parse,
            // Parse text as xml
            "text xml": jQuery2.parseXML
          },
          // For options that shouldn't be deep extended:
          // you can add your own custom options here if
          // and when you create one that shouldn't be
          // deep extended (see ajaxExtend)
          flatOptions: {
            url: true,
            context: true
          }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(target, settings) {
          return settings ? (
            // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery2.ajaxSettings), settings)
          ) : (
            // Extending ajaxSettings
            ajaxExtend(jQuery2.ajaxSettings, target)
          );
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
          if (typeof url === "object") {
            options = url;
            url = void 0;
          }
          options = options || {};
          var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery2.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery2(callbackContext) : jQuery2.event, deferred = jQuery2.Deferred(), completeDeferred = jQuery2.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function(key) {
              var match;
              if (completed2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while (match = rheaders.exec(responseHeadersString)) {
                    responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                  }
                }
                match = responseHeaders[key.toLowerCase() + " "];
              }
              return match == null ? null : match.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function() {
              return completed2 ? responseHeadersString : null;
            },
            // Caches the header
            setRequestHeader: function(name, value) {
              if (completed2 == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            // Overrides response content-type header
            overrideMimeType: function(type) {
              if (completed2 == null) {
                s.mimeType = type;
              }
              return this;
            },
            // Status-dependent callbacks
            statusCode: function(map) {
              var code;
              if (map) {
                if (completed2) {
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                }
              }
              return this;
            },
            // Cancel the request
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
          deferred.promise(jqXHR);
          s.url = ((url || s.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
          s.type = options.method || options.type || s.method || s.type;
          s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
          if (s.crossDomain == null) {
            urlAnchor = document2.createElement("a");
            try {
              urlAnchor.href = s.url;
              urlAnchor.href = urlAnchor.href;
              s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
            } catch (e) {
              s.crossDomain = true;
            }
          }
          if (s.data && s.processData && typeof s.data !== "string") {
            s.data = jQuery2.param(s.data, s.traditional);
          }
          inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
          if (completed2) {
            return jqXHR;
          }
          fireGlobals = jQuery2.event && s.global;
          if (fireGlobals && jQuery2.active++ === 0) {
            jQuery2.event.trigger("ajaxStart");
          }
          s.type = s.type.toUpperCase();
          s.hasContent = !rnoContent.test(s.type);
          cacheURL = s.url.replace(rhash, "");
          if (!s.hasContent) {
            uncached = s.url.slice(cacheURL.length);
            if (s.data && (s.processData || typeof s.data === "string")) {
              cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
              delete s.data;
            }
            if (s.cache === false) {
              cacheURL = cacheURL.replace(rantiCache, "$1");
              uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
            }
            s.url = cacheURL + uncached;
          } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
            s.data = s.data.replace(r20, "+");
          }
          if (s.ifModified) {
            if (jQuery2.lastModified[cacheURL]) {
              jqXHR.setRequestHeader("If-Modified-Since", jQuery2.lastModified[cacheURL]);
            }
            if (jQuery2.etag[cacheURL]) {
              jqXHR.setRequestHeader("If-None-Match", jQuery2.etag[cacheURL]);
            }
          }
          if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
            jqXHR.setRequestHeader("Content-Type", s.contentType);
          }
          jqXHR.setRequestHeader(
            "Accept",
            s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
          );
          for (i in s.headers) {
            jqXHR.setRequestHeader(i, s.headers[i]);
          }
          if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
            return jqXHR.abort();
          }
          strAbort = "abort";
          completeDeferred.add(s.complete);
          jqXHR.done(s.success);
          jqXHR.fail(s.error);
          transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
          if (!transport) {
            done(-1, "No Transport");
          } else {
            jqXHR.readyState = 1;
            if (fireGlobals) {
              globalEventContext.trigger("ajaxSend", [jqXHR, s]);
            }
            if (completed2) {
              return jqXHR;
            }
            if (s.async && s.timeout > 0) {
              timeoutTimer = window2.setTimeout(function() {
                jqXHR.abort("timeout");
              }, s.timeout);
            }
            try {
              completed2 = false;
              transport.send(requestHeaders, done);
            } catch (e) {
              if (completed2) {
                throw e;
              }
              done(-1, e);
            }
          }
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
            if (completed2) {
              return;
            }
            completed2 = true;
            if (timeoutTimer) {
              window2.clearTimeout(timeoutTimer);
            }
            transport = void 0;
            responseHeadersString = headers || "";
            jqXHR.readyState = status > 0 ? 4 : 0;
            isSuccess = status >= 200 && status < 300 || status === 304;
            if (responses) {
              response = ajaxHandleResponses(s, jqXHR, responses);
            }
            if (!isSuccess && jQuery2.inArray("script", s.dataTypes) > -1 && jQuery2.inArray("json", s.dataTypes) < 0) {
              s.converters["text script"] = function() {
              };
            }
            response = ajaxConvert(s, response, jqXHR, isSuccess);
            if (isSuccess) {
              if (s.ifModified) {
                modified = jqXHR.getResponseHeader("Last-Modified");
                if (modified) {
                  jQuery2.lastModified[cacheURL] = modified;
                }
                modified = jqXHR.getResponseHeader("etag");
                if (modified) {
                  jQuery2.etag[cacheURL] = modified;
                }
              }
              if (status === 204 || s.type === "HEAD") {
                statusText = "nocontent";
              } else if (status === 304) {
                statusText = "notmodified";
              } else {
                statusText = response.state;
                success = response.data;
                error = response.error;
                isSuccess = !error;
              }
            } else {
              error = statusText;
              if (status || !statusText) {
                statusText = "error";
                if (status < 0) {
                  status = 0;
                }
              }
            }
            jqXHR.status = status;
            jqXHR.statusText = (nativeStatusText || statusText) + "";
            if (isSuccess) {
              deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
            } else {
              deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
            }
            jqXHR.statusCode(statusCode);
            statusCode = void 0;
            if (fireGlobals) {
              globalEventContext.trigger(
                isSuccess ? "ajaxSuccess" : "ajaxError",
                [jqXHR, s, isSuccess ? success : error]
              );
            }
            completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
            if (fireGlobals) {
              globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
              if (!--jQuery2.active) {
                jQuery2.event.trigger("ajaxStop");
              }
            }
          }
          return jqXHR;
        },
        getJSON: function(url, data, callback) {
          return jQuery2.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
          return jQuery2.get(url, void 0, callback, "script");
        }
      });
      jQuery2.each(["get", "post"], function(_i, method) {
        jQuery2[method] = function(url, data, callback, type) {
          if (isFunction(data)) {
            type = type || callback;
            callback = data;
            data = void 0;
          }
          return jQuery2.ajax(jQuery2.extend({
            url,
            type: method,
            dataType: type,
            data,
            success: callback
          }, jQuery2.isPlainObject(url) && url));
        };
      });
      jQuery2.ajaxPrefilter(function(s) {
        var i;
        for (i in s.headers) {
          if (i.toLowerCase() === "content-type") {
            s.contentType = s.headers[i] || "";
          }
        }
      });
      jQuery2._evalUrl = function(url, options, doc) {
        return jQuery2.ajax({
          url,
          // Make this explicit, since user can override this through ajaxSetup (trac-11264)
          type: "GET",
          dataType: "script",
          cache: true,
          async: false,
          global: false,
          // Only evaluate the response if it is successful (gh-4126)
          // dataFilter is not invoked for failure responses, so using it instead
          // of the default converter is kludgy but it works.
          converters: {
            "text script": function() {
            }
          },
          dataFilter: function(response) {
            jQuery2.globalEval(response, options, doc);
          }
        });
      };
      jQuery2.fn.extend({
        wrapAll: function(html) {
          var wrap;
          if (this[0]) {
            if (isFunction(html)) {
              html = html.call(this[0]);
            }
            wrap = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
            if (this[0].parentNode) {
              wrap.insertBefore(this[0]);
            }
            wrap.map(function() {
              var elem = this;
              while (elem.firstElementChild) {
                elem = elem.firstElementChild;
              }
              return elem;
            }).append(this);
          }
          return this;
        },
        wrapInner: function(html) {
          if (isFunction(html)) {
            return this.each(function(i) {
              jQuery2(this).wrapInner(html.call(this, i));
            });
          }
          return this.each(function() {
            var self = jQuery2(this), contents = self.contents();
            if (contents.length) {
              contents.wrapAll(html);
            } else {
              self.append(html);
            }
          });
        },
        wrap: function(html) {
          var htmlIsFunction = isFunction(html);
          return this.each(function(i) {
            jQuery2(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
          });
        },
        unwrap: function(selector) {
          this.parent(selector).not("body").each(function() {
            jQuery2(this).replaceWith(this.childNodes);
          });
          return this;
        }
      });
      jQuery2.expr.pseudos.hidden = function(elem) {
        return !jQuery2.expr.pseudos.visible(elem);
      };
      jQuery2.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
      };
      jQuery2.ajaxSettings.xhr = function() {
        try {
          return new window2.XMLHttpRequest();
        } catch (e) {
        }
      };
      var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      }, xhrSupported = jQuery2.ajaxSettings.xhr();
      support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
      support.ajax = xhrSupported = !!xhrSupported;
      jQuery2.ajaxTransport(function(options) {
        var callback, errorCallback;
        if (support.cors || xhrSupported && !options.crossDomain) {
          return {
            send: function(headers, complete) {
              var i, xhr = options.xhr();
              xhr.open(
                options.type,
                options.url,
                options.async,
                options.username,
                options.password
              );
              if (options.xhrFields) {
                for (i in options.xhrFields) {
                  xhr[i] = options.xhrFields[i];
                }
              }
              if (options.mimeType && xhr.overrideMimeType) {
                xhr.overrideMimeType(options.mimeType);
              }
              if (!options.crossDomain && !headers["X-Requested-With"]) {
                headers["X-Requested-With"] = "XMLHttpRequest";
              }
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
              callback = function(type) {
                return function() {
                  if (callback) {
                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                    if (type === "abort") {
                      xhr.abort();
                    } else if (type === "error") {
                      if (typeof xhr.status !== "number") {
                        complete(0, "error");
                      } else {
                        complete(
                          // File: protocol always yields status 0; see trac-8605, trac-14207
                          xhr.status,
                          xhr.statusText
                        );
                      }
                    } else {
                      complete(
                        xhrSuccessStatus[xhr.status] || xhr.status,
                        xhr.statusText,
                        // Support: IE <=9 only
                        // IE9 has no XHR2 but throws on binary (trac-11426)
                        // For XHR2 non-text, let the caller handle it (gh-2498)
                        (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                        xhr.getAllResponseHeaders()
                      );
                    }
                  }
                };
              };
              xhr.onload = callback();
              errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
              if (xhr.onabort !== void 0) {
                xhr.onabort = errorCallback;
              } else {
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    window2.setTimeout(function() {
                      if (callback) {
                        errorCallback();
                      }
                    });
                  }
                };
              }
              callback = callback("abort");
              try {
                xhr.send(options.hasContent && options.data || null);
              } catch (e) {
                if (callback) {
                  throw e;
                }
              }
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      jQuery2.ajaxPrefilter(function(s) {
        if (s.crossDomain) {
          s.contents.script = false;
        }
      });
      jQuery2.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(text) {
            jQuery2.globalEval(text);
            return text;
          }
        }
      });
      jQuery2.ajaxPrefilter("script", function(s) {
        if (s.cache === void 0) {
          s.cache = false;
        }
        if (s.crossDomain) {
          s.type = "GET";
        }
      });
      jQuery2.ajaxTransport("script", function(s) {
        if (s.crossDomain || s.scriptAttrs) {
          var script, callback;
          return {
            send: function(_, complete) {
              script = jQuery2("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                script.remove();
                callback = null;
                if (evt) {
                  complete(evt.type === "error" ? 404 : 200, evt.type);
                }
              });
              document2.head.appendChild(script[0]);
            },
            abort: function() {
              if (callback) {
                callback();
              }
            }
          };
        }
      });
      var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
      jQuery2.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var callback = oldCallbacks.pop() || jQuery2.expando + "_" + nonce.guid++;
          this[callback] = true;
          return callback;
        }
      });
      jQuery2.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        if (jsonProp || s.dataTypes[0] === "jsonp") {
          callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
          if (jsonProp) {
            s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
          } else if (s.jsonp !== false) {
            s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
          }
          s.converters["script json"] = function() {
            if (!responseContainer) {
              jQuery2.error(callbackName + " was not called");
            }
            return responseContainer[0];
          };
          s.dataTypes[0] = "json";
          overwritten = window2[callbackName];
          window2[callbackName] = function() {
            responseContainer = arguments;
          };
          jqXHR.always(function() {
            if (overwritten === void 0) {
              jQuery2(window2).removeProp(callbackName);
            } else {
              window2[callbackName] = overwritten;
            }
            if (s[callbackName]) {
              s.jsonpCallback = originalSettings.jsonpCallback;
              oldCallbacks.push(callbackName);
            }
            if (responseContainer && isFunction(overwritten)) {
              overwritten(responseContainer[0]);
            }
            responseContainer = overwritten = void 0;
          });
          return "script";
        }
      });
      support.createHTMLDocument = function() {
        var body = document2.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
      }();
      jQuery2.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") {
          return [];
        }
        if (typeof context === "boolean") {
          keepScripts = context;
          context = false;
        }
        var base, parsed, scripts;
        if (!context) {
          if (support.createHTMLDocument) {
            context = document2.implementation.createHTMLDocument("");
            base = context.createElement("base");
            base.href = document2.location.href;
            context.head.appendChild(base);
          } else {
            context = document2;
          }
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        if (parsed) {
          return [context.createElement(parsed[1])];
        }
        parsed = buildFragment([data], context, scripts);
        if (scripts && scripts.length) {
          jQuery2(scripts).remove();
        }
        return jQuery2.merge([], parsed.childNodes);
      };
      jQuery2.fn.load = function(url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
          selector = stripAndCollapse(url.slice(off));
          url = url.slice(0, off);
        }
        if (isFunction(params)) {
          callback = params;
          params = void 0;
        } else if (params && typeof params === "object") {
          type = "POST";
        }
        if (self.length > 0) {
          jQuery2.ajax({
            url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
          }).done(function(responseText) {
            response = arguments;
            self.html(selector ? (
              // If a selector was specified, locate the right elements in a dummy div
              // Exclude scripts to avoid IE 'Permission Denied' errors
              jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector)
            ) : (
              // Otherwise use the full result
              responseText
            ));
          }).always(callback && function(jqXHR, status) {
            self.each(function() {
              callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
            });
          });
        }
        return this;
      };
      jQuery2.expr.pseudos.animated = function(elem) {
        return jQuery2.grep(jQuery2.timers, function(fn) {
          return elem === fn.elem;
        }).length;
      };
      jQuery2.offset = {
        setOffset: function(elem, options, i) {
          var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery2.css(elem, "position"), curElem = jQuery2(elem), props = {};
          if (position === "static") {
            elem.style.position = "relative";
          }
          curOffset = curElem.offset();
          curCSSTop = jQuery2.css(elem, "top");
          curCSSLeft = jQuery2.css(elem, "left");
          calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
          if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
          } else {
            curTop = parseFloat(curCSSTop) || 0;
            curLeft = parseFloat(curCSSLeft) || 0;
          }
          if (isFunction(options)) {
            options = options.call(elem, i, jQuery2.extend({}, curOffset));
          }
          if (options.top != null) {
            props.top = options.top - curOffset.top + curTop;
          }
          if (options.left != null) {
            props.left = options.left - curOffset.left + curLeft;
          }
          if ("using" in options) {
            options.using.call(elem, props);
          } else {
            curElem.css(props);
          }
        }
      };
      jQuery2.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(options) {
          if (arguments.length) {
            return options === void 0 ? this : this.each(function(i) {
              jQuery2.offset.setOffset(this, options, i);
            });
          }
          var rect, win, elem = this[0];
          if (!elem) {
            return;
          }
          if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
          }
          rect = elem.getBoundingClientRect();
          win = elem.ownerDocument.defaultView;
          return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
          };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
          if (!this[0]) {
            return;
          }
          var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
          if (jQuery2.css(elem, "position") === "fixed") {
            offset = elem.getBoundingClientRect();
          } else {
            offset = this.offset();
            doc = elem.ownerDocument;
            offsetParent = elem.offsetParent || doc.documentElement;
            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery2.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.parentNode;
            }
            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
              parentOffset = jQuery2(offsetParent).offset();
              parentOffset.top += jQuery2.css(offsetParent, "borderTopWidth", true);
              parentOffset.left += jQuery2.css(offsetParent, "borderLeftWidth", true);
            }
          }
          return {
            top: offset.top - parentOffset.top - jQuery2.css(elem, "marginTop", true),
            left: offset.left - parentOffset.left - jQuery2.css(elem, "marginLeft", true)
          };
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
          return this.map(function() {
            var offsetParent = this.offsetParent;
            while (offsetParent && jQuery2.css(offsetParent, "position") === "static") {
              offsetParent = offsetParent.offsetParent;
            }
            return offsetParent || documentElement;
          });
        }
      });
      jQuery2.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery2.fn[method] = function(val) {
          return access(this, function(elem, method2, val2) {
            var win;
            if (isWindow(elem)) {
              win = elem;
            } else if (elem.nodeType === 9) {
              win = elem.defaultView;
            }
            if (val2 === void 0) {
              return win ? win[prop] : elem[method2];
            }
            if (win) {
              win.scrollTo(
                !top ? val2 : win.pageXOffset,
                top ? val2 : win.pageYOffset
              );
            } else {
              elem[method2] = val2;
            }
          }, method, val, arguments.length);
        };
      });
      jQuery2.each(["top", "left"], function(_i, prop) {
        jQuery2.cssHooks[prop] = addGetHookIf(
          support.pixelPosition,
          function(elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop);
              return rnumnonpx.test(computed) ? jQuery2(elem).position()[prop] + "px" : computed;
            }
          }
        );
      });
      jQuery2.each({ Height: "height", Width: "width" }, function(name, type) {
        jQuery2.each({
          padding: "inner" + name,
          content: type,
          "": "outer" + name
        }, function(defaultExtra, funcName) {
          jQuery2.fn[funcName] = function(margin, value) {
            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
            return access(this, function(elem, type2, value2) {
              var doc;
              if (isWindow(elem)) {
                return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
              }
              if (elem.nodeType === 9) {
                doc = elem.documentElement;
                return Math.max(
                  elem.body["scroll" + name],
                  doc["scroll" + name],
                  elem.body["offset" + name],
                  doc["offset" + name],
                  doc["client" + name]
                );
              }
              return value2 === void 0 ? (
                // Get width or height on the element, requesting but not forcing parseFloat
                jQuery2.css(elem, type2, extra)
              ) : (
                // Set width or height on the element
                jQuery2.style(elem, type2, value2, extra)
              );
            }, type, chainable ? margin : void 0, chainable);
          };
        });
      });
      jQuery2.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(_i, type) {
        jQuery2.fn[type] = function(fn) {
          return this.on(type, fn);
        };
      });
      jQuery2.fn.extend({
        bind: function(types, data, fn) {
          return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
          return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
          return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
          return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
          return this.on("mouseenter", fnOver).on("mouseleave", fnOut || fnOver);
        }
      });
      jQuery2.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(_i, name) {
          jQuery2.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
          };
        }
      );
      var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      jQuery2.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
          tmp = fn[context];
          context = fn;
          fn = tmp;
        }
        if (!isFunction(fn)) {
          return void 0;
        }
        args = slice.call(arguments, 2);
        proxy = function() {
          return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        proxy.guid = fn.guid = fn.guid || jQuery2.guid++;
        return proxy;
      };
      jQuery2.holdReady = function(hold) {
        if (hold) {
          jQuery2.readyWait++;
        } else {
          jQuery2.ready(true);
        }
      };
      jQuery2.isArray = Array.isArray;
      jQuery2.parseJSON = JSON.parse;
      jQuery2.nodeName = nodeName;
      jQuery2.isFunction = isFunction;
      jQuery2.isWindow = isWindow;
      jQuery2.camelCase = camelCase;
      jQuery2.type = toType;
      jQuery2.now = Date.now;
      jQuery2.isNumeric = function(obj) {
        var type = jQuery2.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
      };
      jQuery2.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "$1");
      };
      if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
          return jQuery2;
        });
      }
      var _jQuery = window2.jQuery, _$ = window2.$;
      jQuery2.noConflict = function(deep) {
        if (window2.$ === jQuery2) {
          window2.$ = _$;
        }
        if (deep && window2.jQuery === jQuery2) {
          window2.jQuery = _jQuery;
        }
        return jQuery2;
      };
      if (typeof noGlobal === "undefined") {
        window2.jQuery = window2.$ = jQuery2;
      }
      return jQuery2;
    });
  }
});

// ../../../../../../.yarn/berry/cache/jscrollpane-patch-a7af926154-10c0.zip/node_modules/jscrollpane/script/jquery.jscrollpane.min.js
var require_jquery_jscrollpane_min = __commonJS({
  "../../../../../../.yarn/berry/cache/jscrollpane-patch-a7af926154-10c0.zip/node_modules/jscrollpane/script/jquery.jscrollpane.min.js"(exports, module) {
    !function(e) {
      "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(jQuery || require_jquery()) : e(jQuery);
    }(function(ye) {
      ye.fn.jScrollPane = function(o) {
        function i(j, e) {
          var w, y, b, k, x, T, S, C, D, P, H, A, B, W, z, Y, M, X, E, t, I, R, L, F, q, O, G, N, V, K, Q, U, $, J, Z = this, r = true, l = true, a = false, c = false, o2 = j.clone(false, false).empty(), _ = false, ee = ye.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp", te = function() {
            0 < w.resizeSensorDelay ? setTimeout(function() {
              oe(w);
            }, w.resizeSensorDelay) : oe(w);
          };
          function oe(e2) {
            var t2, o3, i2, s, n, r2, l2, a2, c2, p, u, d, f, h, g, v = false, m = false;
            if (w = e2, void (o3 = t2 = 0) === y) s = j.scrollTop(), n = j.scrollLeft(), j.css({ overflow: "hidden", padding: "0px" }), b = j.innerWidth() + $, k = j.innerHeight(), j.width(b), y = ye('<div class="ui-scrollpanel-content"></div>').css("padding", U).append(j.children()), x = ye('<div class="ui-scrollpanel-container"></div>').css({ width: b + "px", height: k + "px" }).append(y).appendTo(j);
            else {
              if (j.css("width", ""), x.css({ width: "auto", height: "auto" }), y.css("position", "static"), r2 = j.innerWidth() + $, l2 = j.innerHeight(), y.css("position", "absolute"), v = w.stickToBottom && (c2 = S - k, 1 != w.maintainPosition || 20 <= c2 && c2 - je() < 10), m = w.stickToRight && (a2 = T - b, 1 != w.maintainPosition || 20 <= a2 && a2 - me() < 10), i2 = r2 !== b || l2 !== k, b = r2, k = l2, x.css({ width: b + "px", height: k + "px" }), !i2 && J == T && y.outerHeight() == S) return void j.width(b);
              J = T, y.css("width", ""), j.width(b), x.find(">.ui-scrollpanel-vbar,>.ui-scrollpanel-hbar").remove().end();
            }
            y.css("overflow", "auto"), T = e2.contentWidth ? e2.contentWidth : y[0].scrollWidth, S = y[0].scrollHeight, y.css("overflow", ""), C = T / b, P = 1 < (D = S / k) || w.alwaysShowVScroll, (H = 1 < C || w.alwaysShowHScroll) || P ? (j.addClass("jspScrollable"), w.maintainPosition && (W || M) && (t2 = me(), o3 = je()), P && (x.append(ye('<div class="ui-scrollpanel-vbar"></div>').append(ye('<div class="ui-scrollpanel-cap ui-scrollpanel-captop"></div>'), ye('<div class="ui-scrollpanel-track ui-widget-header"></div>').append(ye('<div class="ui-scrollpanel-drag ui-state-highlight"></div>').append(ye('<div class="ui-scrollpanel-dragtop"></div>'), ye('<div class="ui-scrollpanel-dragbottom"></div>'))), ye('<div class="ui-scrollpanel-cap ui-scrollpanel-capbottom"></div>'))), X = x.find(">.ui-scrollpanel-vbar"), E = X.find(">.ui-scrollpanel-track"), A = E.find(">.ui-scrollpanel-drag"), w.showArrows && (L = ye('<a class="jspArrow jspArrowUp"></a>').on("mousedown.jsp", le(0, -1)).on("click.jsp", we), F = ye('<a class="jspArrow jspArrowDown"></a>').on("mousedown.jsp", le(0, 1)).on("click.jsp", we), w.arrowScrollOnHover && (L.on("mouseover.jsp", le(0, -1, L)), F.on("mouseover.jsp", le(0, 1, F))), re(E, w.verticalArrowPositions, L, F)), I = k, x.find(">.ui-scrollpanel-vbar>.ui-scrollpanel-cap:visible,>.ui-scrollpanel-vbar>.jspArrow").each(function() {
              I -= ye(this).outerHeight();
            }), A.on("mouseenter", function() {
              A.addClass("jspHover");
            }).on("mouseleave", function() {
              A.removeClass("jspHover");
            }).on("mousedown.jsp", function(e3) {
              ye("html").on("dragstart.jsp selectstart.jsp", we), A.addClass("jspActive");
              var t3 = e3.pageY - A.position().top;
              return ye("html").on("mousemove.jsp", function(e4) {
                pe(e4.pageY - t3, false);
              }).on("mouseup.jsp mouseleave.jsp", ce), false;
            }), se()), H && (x.append(ye('<div class="ui-scrollpanel-hbar"></div>').append(ye('<div class="ui-scrollpanel-cap ui-scrollpanel-capleft"></div>'), ye('<div class="ui-scrollpanel-track ui-widget-header"></div>').append(ye('<div class="ui-scrollpanel-drag ui-state-highlight"></div>').append(ye('<div class="ui-scrollpanel-dragleft"></div>'), ye('<div class="ui-scrollpanel-dragright"></div>'))), ye('<div class="ui-scrollpanel-cap ui-scrollpanel-capright"></div>'))), q = x.find(">.ui-scrollpanel-hbar"), O = q.find(">.ui-scrollpanel-track"), z = O.find(">.ui-scrollpanel-drag"), w.showArrows && (V = ye('<a class="jspArrow jspArrowLeft"></a>').on("mousedown.jsp", le(-1, 0)).on("click.jsp", we), K = ye('<a class="jspArrow jspArrowRight"></a>').on("mousedown.jsp", le(1, 0)).on("click.jsp", we), w.arrowScrollOnHover && (V.on("mouseover.jsp", le(-1, 0, V)), K.on("mouseover.jsp", le(1, 0, K))), re(O, w.horizontalArrowPositions, V, K)), z.on("mouseenter", function() {
              z.addClass("jspHover");
            }).on("mouseleave", function() {
              z.removeClass("jspHover");
            }).on("mousedown.jsp", function(e3) {
              ye("html").on("dragstart.jsp selectstart.jsp", we), z.addClass("jspActive");
              var t3 = e3.pageX - z.position().left;
              return ye("html").on("mousemove.jsp", function(e4) {
                de(e4.pageX - t3, false);
              }).on("mouseup.jsp mouseleave.jsp", ce), false;
            }), G = x.innerWidth(), ne()), function() {
              {
                var e3, t3;
                H && P && (e3 = O.outerHeight(), t3 = E.outerWidth(), I -= e3, ye(q).find(">.ui-scrollpanel-cap:visible,>.jspArrow").each(function() {
                  G += ye(this).outerWidth();
                }), G -= t3, k -= t3, b -= e3, O.parent().append(ye('<div class="ui-scrollpanel-corner ui-widget-header"></div>').css("width", e3 + "px")), se(), ne());
              }
              H && y.width(x.outerWidth() - $ + "px");
              S = y.outerHeight(), D = S / k, H && ((N = Math.ceil(1 / C * G)) > w.horizontalDragMaxWidth ? N = w.horizontalDragMaxWidth : N < w.horizontalDragMinWidth && (N = w.horizontalDragMinWidth), z.css("width", N + "px"), Y = G - N, fe(M));
              P && ((R = Math.ceil(1 / D * I)) > w.verticalDragMaxHeight ? R = w.verticalDragMaxHeight : R < w.verticalDragMinHeight && (R = w.verticalDragMinHeight), A.css("height", R + "px"), B = I - R, ue(W));
            }(), (w.stickToBottom || w.stickToRight) && (ge(m ? T - b : t2, false), he(v ? S - k : o3, false)), y.find(":input,a").off("focus.jsp").on("focus.jsp", function(e3) {
              ve(e3.target, false);
            }), x.off(ee).on(ee, function(e3, t3, o4, i3) {
              var s2 = M = M || 0, n2 = W = W || 0, r3 = e3.deltaFactor || w.mouseWheelSpeed;
              return Z.scrollBy(o4 * r3, -i3 * r3, false), s2 == M && n2 == W;
            }), g = false, x.off("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").on("touchstart.jsp", function(e3) {
              var t3 = e3.originalEvent.touches[0];
              p = me(), u = je(), d = t3.pageX, f = t3.pageY, g = !(h = false);
            }).on("touchmove.jsp", function(e3) {
              if (g) {
                var t3 = e3.originalEvent.touches[0], o4 = M, i3 = W;
                return Z.scrollTo(p + d - t3.pageX, u + f - t3.pageY), h = h || 5 < Math.abs(d - t3.pageX) || 5 < Math.abs(f - t3.pageY), o4 == M && i3 == W;
              }
            }).on("touchend.jsp", function(e3) {
              g = false;
            }).on("click.jsp-touchclick", function(e3) {
              if (h) return h = false;
            }), w.enableKeyboardNavigation && function() {
              var i3, s2, n2 = [];
              H && n2.push(q[0]);
              P && n2.push(X[0]);
              y.on("focus.jsp", function() {
                j.focus();
              }), j.attr("tabindex", 0).off("keydown.jsp keypress.jsp").on("keydown.jsp", function(e3) {
                if (e3.target === this || n2.length && ye(e3.target).closest(n2).length) {
                  var t3 = M, o4 = W;
                  switch (e3.keyCode) {
                    case 40:
                    case 38:
                    case 34:
                    case 32:
                    case 33:
                    case 39:
                    case 37:
                      i3 = e3.keyCode, r3();
                      break;
                    case 35:
                      he(S - k), i3 = null;
                      break;
                    case 36:
                      he(0), i3 = null;
                  }
                  return !(s2 = e3.keyCode == i3 && t3 != M || o4 != W);
                }
              }).on("keypress.jsp", function(e3) {
                if (e3.keyCode == i3 && r3(), e3.target === this || n2.length && ye(e3.target).closest(n2).length) return !s2;
              }), w.hideFocus ? (j.css("outline", "none"), "hideFocus" in x[0] && j.attr("hideFocus", true)) : (j.css("outline", ""), "hideFocus" in x[0] && j.attr("hideFocus", false));
              function r3() {
                var e3 = M, t3 = W;
                switch (i3) {
                  case 40:
                    Z.scrollByY(w.keyboardSpeed, false);
                    break;
                  case 38:
                    Z.scrollByY(-w.keyboardSpeed, false);
                    break;
                  case 34:
                  case 32:
                    Z.scrollByY(k * w.scrollPagePercent, false);
                    break;
                  case 33:
                    Z.scrollByY(-k * w.scrollPagePercent, false);
                    break;
                  case 39:
                    Z.scrollByX(w.keyboardSpeed, false);
                    break;
                  case 37:
                    Z.scrollByX(-w.keyboardSpeed, false);
                }
                return s2 = e3 != M || t3 != W;
              }
            }(), w.clickOnTrack && function() {
              ae(), P && E.on("mousedown.jsp", function(s2) {
                if (void 0 === s2.originalTarget || s2.originalTarget == s2.currentTarget) {
                  var n2, r3 = ye(this), e3 = r3.offset(), l3 = s2.pageY - e3.top - W, a3 = true, c3 = function() {
                    var e4 = r3.offset(), t3 = s2.pageY - e4.top - R / 2, o4 = k * w.scrollPagePercent, i3 = B * o4 / (S - k);
                    if (l3 < 0) t3 < W - i3 ? Z.scrollByY(-o4) : pe(t3);
                    else {
                      if (!(0 < l3)) return void p2();
                      W + i3 < t3 ? Z.scrollByY(o4) : pe(t3);
                    }
                    n2 = setTimeout(c3, a3 ? w.initialDelay : w.trackClickRepeatFreq), a3 = false;
                  }, p2 = function() {
                    n2 && clearTimeout(n2), n2 = null, ye(document).off("mouseup.jsp", p2);
                  };
                  return c3(), ye(document).on("mouseup.jsp", p2), false;
                }
              });
              H && O.on("mousedown.jsp", function(s2) {
                if (void 0 === s2.originalTarget || s2.originalTarget == s2.currentTarget) {
                  var n2, r3 = ye(this), e3 = r3.offset(), l3 = s2.pageX - e3.left - M, a3 = true, c3 = function() {
                    var e4 = r3.offset(), t3 = s2.pageX - e4.left - N / 2, o4 = b * w.scrollPagePercent, i3 = Y * o4 / (T - b);
                    if (l3 < 0) t3 < M - i3 ? Z.scrollByX(-o4) : de(t3);
                    else {
                      if (!(0 < l3)) return void p2();
                      M + i3 < t3 ? Z.scrollByX(o4) : de(t3);
                    }
                    n2 = setTimeout(c3, a3 ? w.initialDelay : w.trackClickRepeatFreq), a3 = false;
                  }, p2 = function() {
                    n2 && clearTimeout(n2), n2 = null, ye(document).off("mouseup.jsp", p2);
                  };
                  return c3(), ye(document).on("mouseup.jsp", p2), false;
                }
              });
            }(), function() {
              if (location.hash && 1 < location.hash.length) {
                var e3, t3, o4 = escape(location.hash.substr(1));
                try {
                  e3 = ye("#" + o4 + ', a[name="' + o4 + '"]');
                } catch (e4) {
                  return;
                }
                e3.length && y.find(o4) && (0 === x.scrollTop() ? t3 = setInterval(function() {
                  0 < x.scrollTop() && (ve(e3, true), ye(document).scrollTop(x.position().top), clearInterval(t3));
                }, 50) : (ve(e3, true), ye(document).scrollTop(x.position().top)));
              }
            }(), w.hijackInternalLinks && function() {
              if (ye(document.body).data("jspHijack")) return;
              ye(document.body).data("jspHijack", true), ye(document.body).delegate('a[href*="#"]', "click", function(e3) {
                var t3, o4, i3, s2, n2, r3 = this.href.substr(0, this.href.indexOf("#")), l3 = location.href;
                if (-1 !== location.href.indexOf("#") && (l3 = location.href.substr(0, location.href.indexOf("#"))), r3 === l3) {
                  t3 = escape(this.href.substr(this.href.indexOf("#") + 1));
                  try {
                    o4 = ye("#" + t3 + ', a[name="' + t3 + '"]');
                  } catch (e4) {
                    return;
                  }
                  o4.length && ((i3 = o4.closest(".jspScrollable")).data("jsp").scrollToElement(o4, true), i3[0].scrollIntoView && (s2 = ye(window).scrollTop(), ((n2 = o4.offset().top) < s2 || n2 > s2 + ye(window).height()) && i3[0].scrollIntoView()), e3.preventDefault());
                }
              });
            }()) : (j.removeClass("jspScrollable"), y.css({ top: "0px", left: "0px", width: x.width() - $ + "px" }), x.off(ee), y.find(":input,a").off("focus.jsp"), j.attr("tabindex", "-1").removeAttr("tabindex").off("keydown.jsp keypress.jsp"), y.off(".jsp"), ae()), w.resizeSensor || !w.autoReinitialise || Q ? w.resizeSensor || w.autoReinitialise || !Q || clearInterval(Q) : Q = setInterval(function() {
              oe(w);
            }, w.autoReinitialiseDelay), w.resizeSensor && !_ && (ie(y, te), ie(j, te), ie(j.parent(), te), window.addEventListener("resize", te), _ = true), s && j.scrollTop(0) && he(s, false), n && j.scrollLeft(0) && ge(n, false), j.trigger("jsp-initialised", [H || P]);
          }
          function ie(e2, t2) {
            var o3, i2, s = document.createElement("div"), n = document.createElement("div"), r2 = document.createElement("div"), l2 = document.createElement("div"), a2 = document.createElement("div");
            s.style.cssText = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;", n.style.cssText = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;", l2.style.cssText = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;", r2.style.cssText = "position: absolute; left: 0; top: 0;", a2.style.cssText = "position: absolute; left: 0; top: 0; width: 200%; height: 200%;";
            function c2() {
              r2.style.width = n.offsetWidth + 10 + "px", r2.style.height = n.offsetHeight + 10 + "px", n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight, l2.scrollLeft = l2.scrollWidth, l2.scrollTop = l2.scrollHeight, o3 = e2.width(), i2 = e2.height();
            }
            n.addEventListener("scroll", function() {
              (e2.width() > o3 || e2.height() > i2) && t2.apply(this, []), c2();
            }.bind(this)), l2.addEventListener("scroll", function() {
              (e2.width() < o3 || e2.height() < i2) && t2.apply(this, []), c2();
            }.bind(this)), n.appendChild(r2), l2.appendChild(a2), s.appendChild(n), s.appendChild(l2), e2.append(s), "static" === window.getComputedStyle(e2[0], null).getPropertyValue("position") && (e2[0].style.position = "relative"), c2();
          }
          function se() {
            E.height(I + "px"), W = 0, t = w.verticalGutter + E.outerWidth(), y.width(b - t - $);
            try {
              0 === X.position().left && y.css("margin-left", t + "px");
            } catch (e2) {
            }
          }
          function ne() {
            x.find(">.ui-scrollpanel-hbar>.ui-scrollpanel-cap:visible,>.ui-scrollpanel-hbar>.jspArrow").each(function() {
              G -= ye(this).outerWidth();
            }), O.width(G + "px"), M = 0;
          }
          function re(e2, t2, o3, i2) {
            var s, n = "before", r2 = "after";
            "os" == t2 && (t2 = /Mac/.test(navigator.platform) ? "after" : "split"), t2 == n ? r2 = t2 : t2 == r2 && (n = t2, s = o3, o3 = i2, i2 = s), e2[n](o3)[r2](i2);
          }
          function le(e2, t2, o3) {
            return function() {
              return function(e3, t3, o4, i2) {
                o4 = ye(o4).addClass("jspActive");
                var s, n, r2 = true, l2 = function() {
                  0 !== e3 && Z.scrollByX(e3 * w.arrowButtonSpeed), 0 !== t3 && Z.scrollByY(t3 * w.arrowButtonSpeed), n = setTimeout(l2, r2 ? w.initialDelay : w.arrowRepeatFreq), r2 = false;
                };
                l2(), s = i2 ? "mouseout.jsp" : "mouseup.jsp", (i2 = i2 || ye("html")).on(s, function() {
                  o4.removeClass("jspActive"), n && clearTimeout(n), n = null, i2.off(s);
                });
              }(e2, t2, this, o3), this.trigger("blur"), false;
            };
          }
          function ae() {
            O && O.off("mousedown.jsp"), E && E.off("mousedown.jsp");
          }
          function ce() {
            ye("html").off("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), A && A.removeClass("jspActive"), z && z.removeClass("jspActive");
          }
          function pe(e2, t2) {
            var o3, i2, s, n, r2;
            P && (e2 < 0 ? e2 = 0 : B < e2 && (e2 = B), o3 = new ye.Event("jsp-will-scroll-y"), j.trigger(o3, [e2]), o3.isDefaultPrevented() || (s = 0 === (i2 = e2 || 0), n = i2 == B, r2 = -(e2 / B) * (S - k), void 0 === t2 && (t2 = w.animateScroll), t2 ? Z.animate(A, "top", e2, ue, function() {
              j.trigger("jsp-user-scroll-y", [-r2, s, n]);
            }) : (A.css("top", e2 + "px"), ue(e2), j.trigger("jsp-user-scroll-y", [-r2, s, n]))));
          }
          function ue(e2) {
            void 0 === e2 && (e2 = A.position().top), x.scrollTop(0);
            var t2, o3, i2 = 0 === (W = e2 || 0), s = W == B, n = -(e2 / B) * (S - k);
            r == i2 && a == s || (r = i2, a = s, j.trigger("jsp-arrow-change", [r, a, l, c])), t2 = i2, o3 = s, w.showArrows && (L[t2 ? "addClass" : "removeClass"]("jspDisabled"), F[o3 ? "addClass" : "removeClass"]("jspDisabled")), y.css("top", n + "px"), j.trigger("jsp-scroll-y", [-n, i2, s]).trigger("scroll");
          }
          function de(e2, t2) {
            var o3, i2, s, n, r2;
            H && (e2 < 0 ? e2 = 0 : Y < e2 && (e2 = Y), o3 = new ye.Event("jsp-will-scroll-x"), j.trigger(o3, [e2]), o3.isDefaultPrevented() || (s = 0 === (i2 = e2 || 0), n = i2 == Y, r2 = -(e2 / Y) * (T - b), void 0 === t2 && (t2 = w.animateScroll), t2 ? Z.animate(z, "left", e2, fe, function() {
              j.trigger("jsp-user-scroll-x", [-r2, s, n]);
            }) : (z.css("left", e2 + "px"), fe(e2), j.trigger("jsp-user-scroll-x", [-r2, s, n]))));
          }
          function fe(e2) {
            void 0 === e2 && (e2 = z.position().left), x.scrollTop(0);
            var t2, o3, i2 = 0 === (M = e2 || 0), s = M == Y, n = -(e2 / Y) * (T - b);
            l == i2 && c == s || (l = i2, c = s, j.trigger("jsp-arrow-change", [r, a, l, c])), t2 = i2, o3 = s, w.showArrows && (V[t2 ? "addClass" : "removeClass"]("jspDisabled"), K[o3 ? "addClass" : "removeClass"]("jspDisabled")), y.css("left", n + "px"), j.trigger("jsp-scroll-x", [-n, i2, s]).trigger("scroll");
          }
          function he(e2, t2) {
            pe(e2 / (S - k) * B, t2);
          }
          function ge(e2, t2) {
            de(e2 / (T - b) * Y, t2);
          }
          function ve(e2, t2, o3) {
            var i2, s, n, r2, l2, a2, c2, p, u, d = 0, f = 0;
            try {
              i2 = ye(e2);
            } catch (e3) {
              return;
            }
            for (s = i2.outerHeight(), n = i2.outerWidth(), x.scrollTop(0), x.scrollLeft(0); !i2.is(".ui-scrollpanel-content"); ) if (d += i2.position().top, f += i2.position().left, i2 = i2.offsetParent(), /^body|html$/i.test(i2[0].nodeName)) return;
            a2 = (r2 = je()) + k, d < r2 || t2 ? p = d - w.horizontalGutter : a2 < d + s && (p = d - k + s + w.horizontalGutter), isNaN(p) || he(p, o3), c2 = (l2 = me()) + b, f < l2 || t2 ? u = f - w.horizontalGutter : c2 < f + n && (u = f - b + n + w.horizontalGutter), isNaN(u) || ge(u, o3);
          }
          function me() {
            return -y.position().left;
          }
          function je() {
            return -y.position().top;
          }
          function we() {
            return false;
          }
          $ = "border-box" === j.css("box-sizing") ? U = 0 : (U = j.css("paddingTop") + " " + j.css("paddingRight") + " " + j.css("paddingBottom") + " " + j.css("paddingLeft"), (parseInt(j.css("paddingLeft"), 10) || 0) + (parseInt(j.css("paddingRight"), 10) || 0)), ye.extend(Z, { reinitialise: function(e2) {
            oe(e2 = ye.extend({}, w, e2));
          }, scrollToElement: function(e2, t2, o3) {
            ve(e2, t2, o3);
          }, scrollTo: function(e2, t2, o3) {
            ge(e2, o3), he(t2, o3);
          }, scrollToX: function(e2, t2) {
            ge(e2, t2);
          }, scrollToY: function(e2, t2) {
            he(e2, t2);
          }, scrollToPercentX: function(e2, t2) {
            ge(e2 * (T - b), t2);
          }, scrollToPercentY: function(e2, t2) {
            he(e2 * (S - k), t2);
          }, scrollBy: function(e2, t2, o3) {
            Z.scrollByX(e2, o3), Z.scrollByY(t2, o3);
          }, scrollByX: function(e2, t2) {
            de((me() + Math[e2 < 0 ? "floor" : "ceil"](e2)) / (T - b) * Y, t2);
          }, scrollByY: function(e2, t2) {
            pe((je() + Math[e2 < 0 ? "floor" : "ceil"](e2)) / (S - k) * B, t2);
          }, positionDragX: function(e2, t2) {
            de(e2, t2);
          }, positionDragY: function(e2, t2) {
            pe(e2, t2);
          }, animate: function(e2, t2, o3, i2, s) {
            var n = {};
            n[t2] = o3, e2.animate(n, { duration: w.animateDuration, easing: w.animateEase, queue: false, step: i2, complete: s });
          }, getContentPositionX: me, getContentPositionY: je, getContentWidth: function() {
            return T;
          }, getContentHeight: function() {
            return S;
          }, getPercentScrolledX: function() {
            return me() / (T - b);
          }, getPercentScrolledY: function() {
            return je() / (S - k);
          }, getIsScrollableH: function() {
            return H;
          }, getIsScrollableV: function() {
            return P;
          }, getContentPane: function() {
            return y;
          }, scrollToBottom: function(e2) {
            pe(B, e2);
          }, hijackInternalLinks: ye.noop, destroy: function() {
            var e2, t2;
            e2 = je(), t2 = me(), j.removeClass("jspScrollable").off(".jsp"), y.off(".jsp"), j.replaceWith(o2.append(y.children())), o2.scrollTop(e2), o2.scrollLeft(t2), Q && clearInterval(Q);
          } }), oe(e);
        }
        return o = ye.extend({}, ye.fn.jScrollPane.defaults, o), ye.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
          o[this] = o[this] || o.speed;
        }), this.each(function() {
          var e = ye(this), t = e.data("jsp");
          t ? t.reinitialise(o) : (ye("script", e).filter('[type="text/javascript"],:not([type])').remove(), t = new i(e, o), e.data("jsp", t));
        });
      }, ye.fn.jScrollPane.defaults = { showArrows: false, maintainPosition: true, stickToBottom: false, stickToRight: false, clickOnTrack: true, autoReinitialise: false, autoReinitialiseDelay: 500, verticalDragMinHeight: 0, verticalDragMaxHeight: 99999, horizontalDragMinWidth: 0, horizontalDragMaxWidth: 99999, contentWidth: void 0, animateScroll: false, animateDuration: 300, animateEase: "linear", hijackInternalLinks: false, verticalGutter: 4, horizontalGutter: 4, mouseWheelSpeed: 3, arrowButtonSpeed: 0, arrowRepeatFreq: 50, arrowScrollOnHover: false, trackClickSpeed: 0, trackClickRepeatFreq: 70, verticalArrowPositions: "split", horizontalArrowPositions: "split", enableKeyboardNavigation: true, hideFocus: false, keyboardSpeed: 0, initialDelay: 300, speed: 30, scrollPagePercent: 0.8, alwaysShowVScroll: false, alwaysShowHScroll: false, resizeSensor: false, resizeSensorDelay: 0 };
    });
  }
});

// src/scrollpanel/1-scrollpanel.js
var import_jscrollpane = __toESM(require_jquery_jscrollpane_min());
var ScrollPanel = class extends DeferredWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    this.renderDeferred();
  }
  /**
   * @include
   * @override
   * @protected
   * @inheritdoc
   */
  _render() {
    this.jsp = this.jq.jScrollPane(this.cfg).data("jsp");
  }
  /**
   * Scrolls to the given scroll position.
   * @param {number} x Horizontal coordinate of the new scroll position.
   * @param {number} y Vertical coordinate of the new scroll position.
   */
  scrollTo(x, y) {
    this.jsp.scrollTo(x, y);
  }
  /**
   * Scroll horizontally to the given scroll position.
   * @param {number} x The new horizontal scroll position.
   */
  scrollX(x) {
    this.jsp.scrollToX(x);
  }
  /**
   * Scroll vertically to the given scroll position.
   * @param {number} y The new vertical scroll position.
   */
  scrollY(y) {
    this.jsp.scrollToY(y);
  }
  /**
   * Redraws the scrollbars.
   */
  redraw() {
    this.jsp.reinitialise();
  }
};
export {
  ScrollPanel
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvanF1ZXJ5LW5wbS0zLjcuMS1lZWVhYzBmMjFlLTEwYzAuemlwL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvanNjcm9sbHBhbmUtcGF0Y2gtYTdhZjkyNjE1NC0xMGMwLnppcC9ub2RlX21vZHVsZXMvanNjcm9sbHBhbmUvc2NyaXB0L2pxdWVyeS5qc2Nyb2xscGFuZS5taW4uanMiLCAiLi4vc3JjL3Njcm9sbHBhbmVsLzEtc2Nyb2xscGFuZWwuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIVxuICogalF1ZXJ5IEphdmFTY3JpcHQgTGlicmFyeSB2My43LjFcbiAqIGh0dHBzOi8vanF1ZXJ5LmNvbS9cbiAqXG4gKiBDb3B5cmlnaHQgT3BlbkpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMjMtMDgtMjhUMTM6MzdaXG4gKi9cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRpZiAoIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0Ly8gRm9yIENvbW1vbkpTIGFuZCBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB3aGVyZSBhIHByb3BlciBgd2luZG93YFxuXHRcdC8vIGlzIHByZXNlbnQsIGV4ZWN1dGUgdGhlIGZhY3RvcnkgYW5kIGdldCBqUXVlcnkuXG5cdFx0Ly8gRm9yIGVudmlyb25tZW50cyB0aGF0IGRvIG5vdCBoYXZlIGEgYHdpbmRvd2Agd2l0aCBhIGBkb2N1bWVudGBcblx0XHQvLyAoc3VjaCBhcyBOb2RlLmpzKSwgZXhwb3NlIGEgZmFjdG9yeSBhcyBtb2R1bGUuZXhwb3J0cy5cblx0XHQvLyBUaGlzIGFjY2VudHVhdGVzIHRoZSBuZWVkIGZvciB0aGUgY3JlYXRpb24gb2YgYSByZWFsIGB3aW5kb3dgLlxuXHRcdC8vIGUuZy4gdmFyIGpRdWVyeSA9IHJlcXVpcmUoXCJqcXVlcnlcIikod2luZG93KTtcblx0XHQvLyBTZWUgdGlja2V0IHRyYWMtMTQ1NDkgZm9yIG1vcmUgaW5mby5cblx0XHRtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5kb2N1bWVudCA/XG5cdFx0XHRmYWN0b3J5KCBnbG9iYWwsIHRydWUgKSA6XG5cdFx0XHRmdW5jdGlvbiggdyApIHtcblx0XHRcdFx0aWYgKCAhdy5kb2N1bWVudCApIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZhY3RvcnkoIHcgKTtcblx0XHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeSggZ2xvYmFsICk7XG5cdH1cblxuLy8gUGFzcyB0aGlzIGlmIHdpbmRvdyBpcyBub3QgZGVmaW5lZCB5ZXRcbn0gKSggdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCB3aW5kb3csIG5vR2xvYmFsICkge1xuXG4vLyBFZGdlIDw9IDEyIC0gMTMrLCBGaXJlZm94IDw9MTggLSA0NSssIElFIDEwIC0gMTEsIFNhZmFyaSA1LjEgLSA5KywgaU9TIDYgLSA5LjFcbi8vIHRocm93IGV4Y2VwdGlvbnMgd2hlbiBub24tc3RyaWN0IGNvZGUgKGUuZy4sIEFTUC5ORVQgNC41KSBhY2Nlc3NlcyBzdHJpY3QgbW9kZVxuLy8gYXJndW1lbnRzLmNhbGxlZS5jYWxsZXIgKHRyYWMtMTMzMzUpLiBCdXQgYXMgb2YgalF1ZXJ5IDMuMCAoMjAxNiksIHN0cmljdCBtb2RlIHNob3VsZCBiZSBjb21tb25cbi8vIGVub3VnaCB0aGF0IGFsbCBzdWNoIGF0dGVtcHRzIGFyZSBndWFyZGVkIGluIGEgdHJ5IGJsb2NrLlxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhcnIgPSBbXTtcblxudmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG52YXIgc2xpY2UgPSBhcnIuc2xpY2U7XG5cbnZhciBmbGF0ID0gYXJyLmZsYXQgPyBmdW5jdGlvbiggYXJyYXkgKSB7XG5cdHJldHVybiBhcnIuZmxhdC5jYWxsKCBhcnJheSApO1xufSA6IGZ1bmN0aW9uKCBhcnJheSApIHtcblx0cmV0dXJuIGFyci5jb25jYXQuYXBwbHkoIFtdLCBhcnJheSApO1xufTtcblxuXG52YXIgcHVzaCA9IGFyci5wdXNoO1xuXG52YXIgaW5kZXhPZiA9IGFyci5pbmRleE9mO1xuXG52YXIgY2xhc3MydHlwZSA9IHt9O1xuXG52YXIgdG9TdHJpbmcgPSBjbGFzczJ0eXBlLnRvU3RyaW5nO1xuXG52YXIgaGFzT3duID0gY2xhc3MydHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGZuVG9TdHJpbmcgPSBoYXNPd24udG9TdHJpbmc7XG5cbnZhciBPYmplY3RGdW5jdGlvblN0cmluZyA9IGZuVG9TdHJpbmcuY2FsbCggT2JqZWN0ICk7XG5cbnZhciBzdXBwb3J0ID0ge307XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbiggb2JqICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9NTcsIEZpcmVmb3ggPD01MlxuXHRcdC8vIEluIHNvbWUgYnJvd3NlcnMsIHR5cGVvZiByZXR1cm5zIFwiZnVuY3Rpb25cIiBmb3IgSFRNTCA8b2JqZWN0PiBlbGVtZW50c1xuXHRcdC8vIChpLmUuLCBgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwib2JqZWN0XCIgKSA9PT0gXCJmdW5jdGlvblwiYCkuXG5cdFx0Ly8gV2UgZG9uJ3Qgd2FudCB0byBjbGFzc2lmeSAqYW55KiBET00gbm9kZSBhcyBhIGZ1bmN0aW9uLlxuXHRcdC8vIFN1cHBvcnQ6IFF0V2ViIDw9My44LjUsIFdlYktpdCA8PTUzNC4zNCwgd2todG1sdG9wZGYgdG9vbCA8PTAuMTIuNVxuXHRcdC8vIFBsdXMgZm9yIG9sZCBXZWJLaXQsIHR5cGVvZiByZXR1cm5zIFwiZnVuY3Rpb25cIiBmb3IgSFRNTCBjb2xsZWN0aW9uc1xuXHRcdC8vIChlLmcuLCBgdHlwZW9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpID09PSBcImZ1bmN0aW9uXCJgKS4gKGdoLTQ3NTYpXG5cdFx0cmV0dXJuIHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygb2JqLm5vZGVUeXBlICE9PSBcIm51bWJlclwiICYmXG5cdFx0XHR0eXBlb2Ygb2JqLml0ZW0gIT09IFwiZnVuY3Rpb25cIjtcblx0fTtcblxuXG52YXIgaXNXaW5kb3cgPSBmdW5jdGlvbiBpc1dpbmRvdyggb2JqICkge1xuXHRcdHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmogPT09IG9iai53aW5kb3c7XG5cdH07XG5cblxudmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG5cblxuXHR2YXIgcHJlc2VydmVkU2NyaXB0QXR0cmlidXRlcyA9IHtcblx0XHR0eXBlOiB0cnVlLFxuXHRcdHNyYzogdHJ1ZSxcblx0XHRub25jZTogdHJ1ZSxcblx0XHRub01vZHVsZTogdHJ1ZVxuXHR9O1xuXG5cdGZ1bmN0aW9uIERPTUV2YWwoIGNvZGUsIG5vZGUsIGRvYyApIHtcblx0XHRkb2MgPSBkb2MgfHwgZG9jdW1lbnQ7XG5cblx0XHR2YXIgaSwgdmFsLFxuXHRcdFx0c2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoIFwic2NyaXB0XCIgKTtcblxuXHRcdHNjcmlwdC50ZXh0ID0gY29kZTtcblx0XHRpZiAoIG5vZGUgKSB7XG5cdFx0XHRmb3IgKCBpIGluIHByZXNlcnZlZFNjcmlwdEF0dHJpYnV0ZXMgKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA2NCssIEVkZ2UgMTgrXG5cdFx0XHRcdC8vIFNvbWUgYnJvd3NlcnMgZG9uJ3Qgc3VwcG9ydCB0aGUgXCJub25jZVwiIHByb3BlcnR5IG9uIHNjcmlwdHMuXG5cdFx0XHRcdC8vIE9uIHRoZSBvdGhlciBoYW5kLCBqdXN0IHVzaW5nIGBnZXRBdHRyaWJ1dGVgIGlzIG5vdCBlbm91Z2ggYXNcblx0XHRcdFx0Ly8gdGhlIGBub25jZWAgYXR0cmlidXRlIGlzIHJlc2V0IHRvIGFuIGVtcHR5IHN0cmluZyB3aGVuZXZlciBpdFxuXHRcdFx0XHQvLyBiZWNvbWVzIGJyb3dzaW5nLWNvbnRleHQgY29ubmVjdGVkLlxuXHRcdFx0XHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy8yMzY5XG5cdFx0XHRcdC8vIFNlZSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNub25jZS1hdHRyaWJ1dGVzXG5cdFx0XHRcdC8vIFRoZSBgbm9kZS5nZXRBdHRyaWJ1dGVgIGNoZWNrIHdhcyBhZGRlZCBmb3IgdGhlIHNha2Ugb2Zcblx0XHRcdFx0Ly8gYGpRdWVyeS5nbG9iYWxFdmFsYCBzbyB0aGF0IGl0IGNhbiBmYWtlIGEgbm9uY2UtY29udGFpbmluZyBub2RlXG5cdFx0XHRcdC8vIHZpYSBhbiBvYmplY3QuXG5cdFx0XHRcdHZhbCA9IG5vZGVbIGkgXSB8fCBub2RlLmdldEF0dHJpYnV0ZSAmJiBub2RlLmdldEF0dHJpYnV0ZSggaSApO1xuXHRcdFx0XHRpZiAoIHZhbCApIHtcblx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKCBpLCB2YWwgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRkb2MuaGVhZC5hcHBlbmRDaGlsZCggc2NyaXB0ICkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggc2NyaXB0ICk7XG5cdH1cblxuXG5mdW5jdGlvbiB0b1R5cGUoIG9iaiApIHtcblx0aWYgKCBvYmogPT0gbnVsbCApIHtcblx0XHRyZXR1cm4gb2JqICsgXCJcIjtcblx0fVxuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD0yLjMgb25seSAoZnVuY3Rpb25pc2ggUmVnRXhwKVxuXHRyZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIgP1xuXHRcdGNsYXNzMnR5cGVbIHRvU3RyaW5nLmNhbGwoIG9iaiApIF0gfHwgXCJvYmplY3RcIiA6XG5cdFx0dHlwZW9mIG9iajtcbn1cbi8qIGdsb2JhbCBTeW1ib2wgKi9cbi8vIERlZmluaW5nIHRoaXMgZ2xvYmFsIGluIC5lc2xpbnRyYy5qc29uIHdvdWxkIGNyZWF0ZSBhIGRhbmdlciBvZiB1c2luZyB0aGUgZ2xvYmFsXG4vLyB1bmd1YXJkZWQgaW4gYW5vdGhlciBwbGFjZSwgaXQgc2VlbXMgc2FmZXIgdG8gZGVmaW5lIGdsb2JhbCBvbmx5IGZvciB0aGlzIG1vZHVsZVxuXG5cblxudmFyIHZlcnNpb24gPSBcIjMuNy4xXCIsXG5cblx0cmh0bWxTdWZmaXggPSAvSFRNTCQvaSxcblxuXHQvLyBEZWZpbmUgYSBsb2NhbCBjb3B5IG9mIGpRdWVyeVxuXHRqUXVlcnkgPSBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbnRleHQgKSB7XG5cblx0XHQvLyBUaGUgalF1ZXJ5IG9iamVjdCBpcyBhY3R1YWxseSBqdXN0IHRoZSBpbml0IGNvbnN0cnVjdG9yICdlbmhhbmNlZCdcblx0XHQvLyBOZWVkIGluaXQgaWYgalF1ZXJ5IGlzIGNhbGxlZCAoanVzdCBhbGxvdyBlcnJvciB0byBiZSB0aHJvd24gaWYgbm90IGluY2x1ZGVkKVxuXHRcdHJldHVybiBuZXcgalF1ZXJ5LmZuLmluaXQoIHNlbGVjdG9yLCBjb250ZXh0ICk7XG5cdH07XG5cbmpRdWVyeS5mbiA9IGpRdWVyeS5wcm90b3R5cGUgPSB7XG5cblx0Ly8gVGhlIGN1cnJlbnQgdmVyc2lvbiBvZiBqUXVlcnkgYmVpbmcgdXNlZFxuXHRqcXVlcnk6IHZlcnNpb24sXG5cblx0Y29uc3RydWN0b3I6IGpRdWVyeSxcblxuXHQvLyBUaGUgZGVmYXVsdCBsZW5ndGggb2YgYSBqUXVlcnkgb2JqZWN0IGlzIDBcblx0bGVuZ3RoOiAwLFxuXG5cdHRvQXJyYXk6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzbGljZS5jYWxsKCB0aGlzICk7XG5cdH0sXG5cblx0Ly8gR2V0IHRoZSBOdGggZWxlbWVudCBpbiB0aGUgbWF0Y2hlZCBlbGVtZW50IHNldCBPUlxuXHQvLyBHZXQgdGhlIHdob2xlIG1hdGNoZWQgZWxlbWVudCBzZXQgYXMgYSBjbGVhbiBhcnJheVxuXHRnZXQ6IGZ1bmN0aW9uKCBudW0gKSB7XG5cblx0XHQvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBpbiBhIGNsZWFuIGFycmF5XG5cdFx0aWYgKCBudW0gPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiBzbGljZS5jYWxsKCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIGp1c3QgdGhlIG9uZSBlbGVtZW50IGZyb20gdGhlIHNldFxuXHRcdHJldHVybiBudW0gPCAwID8gdGhpc1sgbnVtICsgdGhpcy5sZW5ndGggXSA6IHRoaXNbIG51bSBdO1xuXHR9LFxuXG5cdC8vIFRha2UgYW4gYXJyYXkgb2YgZWxlbWVudHMgYW5kIHB1c2ggaXQgb250byB0aGUgc3RhY2tcblx0Ly8gKHJldHVybmluZyB0aGUgbmV3IG1hdGNoZWQgZWxlbWVudCBzZXQpXG5cdHB1c2hTdGFjazogZnVuY3Rpb24oIGVsZW1zICkge1xuXG5cdFx0Ly8gQnVpbGQgYSBuZXcgalF1ZXJ5IG1hdGNoZWQgZWxlbWVudCBzZXRcblx0XHR2YXIgcmV0ID0galF1ZXJ5Lm1lcmdlKCB0aGlzLmNvbnN0cnVjdG9yKCksIGVsZW1zICk7XG5cblx0XHQvLyBBZGQgdGhlIG9sZCBvYmplY3Qgb250byB0aGUgc3RhY2sgKGFzIGEgcmVmZXJlbmNlKVxuXHRcdHJldC5wcmV2T2JqZWN0ID0gdGhpcztcblxuXHRcdC8vIFJldHVybiB0aGUgbmV3bHktZm9ybWVkIGVsZW1lbnQgc2V0XG5cdFx0cmV0dXJuIHJldDtcblx0fSxcblxuXHQvLyBFeGVjdXRlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgc2V0LlxuXHRlYWNoOiBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5lYWNoKCB0aGlzLCBjYWxsYmFjayApO1xuXHR9LFxuXG5cdG1hcDogZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5Lm1hcCggdGhpcywgZnVuY3Rpb24oIGVsZW0sIGkgKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbCggZWxlbSwgaSwgZWxlbSApO1xuXHRcdH0gKSApO1xuXHR9LFxuXG5cdHNsaWNlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHNsaWNlLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSApO1xuXHR9LFxuXG5cdGZpcnN0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5lcSggMCApO1xuXHR9LFxuXG5cdGxhc3Q6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmVxKCAtMSApO1xuXHR9LFxuXG5cdGV2ZW46IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5LmdyZXAoIHRoaXMsIGZ1bmN0aW9uKCBfZWxlbSwgaSApIHtcblx0XHRcdHJldHVybiAoIGkgKyAxICkgJSAyO1xuXHRcdH0gKSApO1xuXHR9LFxuXG5cdG9kZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqUXVlcnkuZ3JlcCggdGhpcywgZnVuY3Rpb24oIF9lbGVtLCBpICkge1xuXHRcdFx0cmV0dXJuIGkgJSAyO1xuXHRcdH0gKSApO1xuXHR9LFxuXG5cdGVxOiBmdW5jdGlvbiggaSApIHtcblx0XHR2YXIgbGVuID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRqID0gK2kgKyAoIGkgPCAwID8gbGVuIDogMCApO1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggaiA+PSAwICYmIGogPCBsZW4gPyBbIHRoaXNbIGogXSBdIDogW10gKTtcblx0fSxcblxuXHRlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnByZXZPYmplY3QgfHwgdGhpcy5jb25zdHJ1Y3RvcigpO1xuXHR9LFxuXG5cdC8vIEZvciBpbnRlcm5hbCB1c2Ugb25seS5cblx0Ly8gQmVoYXZlcyBsaWtlIGFuIEFycmF5J3MgbWV0aG9kLCBub3QgbGlrZSBhIGpRdWVyeSBtZXRob2QuXG5cdHB1c2g6IHB1c2gsXG5cdHNvcnQ6IGFyci5zb3J0LFxuXHRzcGxpY2U6IGFyci5zcGxpY2Vcbn07XG5cbmpRdWVyeS5leHRlbmQgPSBqUXVlcnkuZm4uZXh0ZW5kID0gZnVuY3Rpb24oKSB7XG5cdHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSxcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbIDAgXSB8fCB7fSxcblx0XHRpID0gMSxcblx0XHRsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuXHRcdGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICggdHlwZW9mIHRhcmdldCA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0ZGVlcCA9IHRhcmdldDtcblxuXHRcdC8vIFNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbIGkgXSB8fCB7fTtcblx0XHRpKys7XG5cdH1cblxuXHQvLyBIYW5kbGUgY2FzZSB3aGVuIHRhcmdldCBpcyBhIHN0cmluZyBvciBzb21ldGhpbmcgKHBvc3NpYmxlIGluIGRlZXAgY29weSlcblx0aWYgKCB0eXBlb2YgdGFyZ2V0ICE9PSBcIm9iamVjdFwiICYmICFpc0Z1bmN0aW9uKCB0YXJnZXQgKSApIHtcblx0XHR0YXJnZXQgPSB7fTtcblx0fVxuXG5cdC8vIEV4dGVuZCBqUXVlcnkgaXRzZWxmIGlmIG9ubHkgb25lIGFyZ3VtZW50IGlzIHBhc3NlZFxuXHRpZiAoIGkgPT09IGxlbmd0aCApIHtcblx0XHR0YXJnZXQgPSB0aGlzO1xuXHRcdGktLTtcblx0fVxuXG5cdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXG5cdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuXHRcdGlmICggKCBvcHRpb25zID0gYXJndW1lbnRzWyBpIF0gKSAhPSBudWxsICkge1xuXG5cdFx0XHQvLyBFeHRlbmQgdGhlIGJhc2Ugb2JqZWN0XG5cdFx0XHRmb3IgKCBuYW1lIGluIG9wdGlvbnMgKSB7XG5cdFx0XHRcdGNvcHkgPSBvcHRpb25zWyBuYW1lIF07XG5cblx0XHRcdFx0Ly8gUHJldmVudCBPYmplY3QucHJvdG90eXBlIHBvbGx1dGlvblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICggbmFtZSA9PT0gXCJfX3Byb3RvX19cIiB8fCB0YXJnZXQgPT09IGNvcHkgKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0aWYgKCBkZWVwICYmIGNvcHkgJiYgKCBqUXVlcnkuaXNQbGFpbk9iamVjdCggY29weSApIHx8XG5cdFx0XHRcdFx0KCBjb3B5SXNBcnJheSA9IEFycmF5LmlzQXJyYXkoIGNvcHkgKSApICkgKSB7XG5cdFx0XHRcdFx0c3JjID0gdGFyZ2V0WyBuYW1lIF07XG5cblx0XHRcdFx0XHQvLyBFbnN1cmUgcHJvcGVyIHR5cGUgZm9yIHRoZSBzb3VyY2UgdmFsdWVcblx0XHRcdFx0XHRpZiAoIGNvcHlJc0FycmF5ICYmICFBcnJheS5pc0FycmF5KCBzcmMgKSApIHtcblx0XHRcdFx0XHRcdGNsb25lID0gW107XG5cdFx0XHRcdFx0fSBlbHNlIGlmICggIWNvcHlJc0FycmF5ICYmICFqUXVlcnkuaXNQbGFpbk9iamVjdCggc3JjICkgKSB7XG5cdFx0XHRcdFx0XHRjbG9uZSA9IHt9O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjbG9uZSA9IHNyYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcblxuXHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdHRhcmdldFsgbmFtZSBdID0galF1ZXJ5LmV4dGVuZCggZGVlcCwgY2xvbmUsIGNvcHkgKTtcblxuXHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG5cdFx0XHRcdH0gZWxzZSBpZiAoIGNvcHkgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHR0YXJnZXRbIG5hbWUgXSA9IGNvcHk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdC8vIFVuaXF1ZSBmb3IgZWFjaCBjb3B5IG9mIGpRdWVyeSBvbiB0aGUgcGFnZVxuXHRleHBhbmRvOiBcImpRdWVyeVwiICsgKCB2ZXJzaW9uICsgTWF0aC5yYW5kb20oKSApLnJlcGxhY2UoIC9cXEQvZywgXCJcIiApLFxuXG5cdC8vIEFzc3VtZSBqUXVlcnkgaXMgcmVhZHkgd2l0aG91dCB0aGUgcmVhZHkgbW9kdWxlXG5cdGlzUmVhZHk6IHRydWUsXG5cblx0ZXJyb3I6IGZ1bmN0aW9uKCBtc2cgKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBtc2cgKTtcblx0fSxcblxuXHRub29wOiBmdW5jdGlvbigpIHt9LFxuXG5cdGlzUGxhaW5PYmplY3Q6IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0dmFyIHByb3RvLCBDdG9yO1xuXG5cdFx0Ly8gRGV0ZWN0IG9idmlvdXMgbmVnYXRpdmVzXG5cdFx0Ly8gVXNlIHRvU3RyaW5nIGluc3RlYWQgb2YgalF1ZXJ5LnR5cGUgdG8gY2F0Y2ggaG9zdCBvYmplY3RzXG5cdFx0aWYgKCAhb2JqIHx8IHRvU3RyaW5nLmNhbGwoIG9iaiApICE9PSBcIltvYmplY3QgT2JqZWN0XVwiICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHByb3RvID0gZ2V0UHJvdG8oIG9iaiApO1xuXG5cdFx0Ly8gT2JqZWN0cyB3aXRoIG5vIHByb3RvdHlwZSAoZS5nLiwgYE9iamVjdC5jcmVhdGUoIG51bGwgKWApIGFyZSBwbGFpblxuXHRcdGlmICggIXByb3RvICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gT2JqZWN0cyB3aXRoIHByb3RvdHlwZSBhcmUgcGxhaW4gaWZmIHRoZXkgd2VyZSBjb25zdHJ1Y3RlZCBieSBhIGdsb2JhbCBPYmplY3QgZnVuY3Rpb25cblx0XHRDdG9yID0gaGFzT3duLmNhbGwoIHByb3RvLCBcImNvbnN0cnVjdG9yXCIgKSAmJiBwcm90by5jb25zdHJ1Y3Rvcjtcblx0XHRyZXR1cm4gdHlwZW9mIEN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBmblRvU3RyaW5nLmNhbGwoIEN0b3IgKSA9PT0gT2JqZWN0RnVuY3Rpb25TdHJpbmc7XG5cdH0sXG5cblx0aXNFbXB0eU9iamVjdDogZnVuY3Rpb24oIG9iaiApIHtcblx0XHR2YXIgbmFtZTtcblxuXHRcdGZvciAoIG5hbWUgaW4gb2JqICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvLyBFdmFsdWF0ZXMgYSBzY3JpcHQgaW4gYSBwcm92aWRlZCBjb250ZXh0OyBmYWxscyBiYWNrIHRvIHRoZSBnbG9iYWwgb25lXG5cdC8vIGlmIG5vdCBzcGVjaWZpZWQuXG5cdGdsb2JhbEV2YWw6IGZ1bmN0aW9uKCBjb2RlLCBvcHRpb25zLCBkb2MgKSB7XG5cdFx0RE9NRXZhbCggY29kZSwgeyBub25jZTogb3B0aW9ucyAmJiBvcHRpb25zLm5vbmNlIH0sIGRvYyApO1xuXHR9LFxuXG5cdGVhY2g6IGZ1bmN0aW9uKCBvYmosIGNhbGxiYWNrICkge1xuXHRcdHZhciBsZW5ndGgsIGkgPSAwO1xuXG5cdFx0aWYgKCBpc0FycmF5TGlrZSggb2JqICkgKSB7XG5cdFx0XHRsZW5ndGggPSBvYmoubGVuZ3RoO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdGlmICggY2FsbGJhY2suY2FsbCggb2JqWyBpIF0sIGksIG9ialsgaSBdICkgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoIGkgaW4gb2JqICkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrLmNhbGwoIG9ialsgaSBdLCBpLCBvYmpbIGkgXSApID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvYmo7XG5cdH0sXG5cblxuXHQvLyBSZXRyaWV2ZSB0aGUgdGV4dCB2YWx1ZSBvZiBhbiBhcnJheSBvZiBET00gbm9kZXNcblx0dGV4dDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0dmFyIG5vZGUsXG5cdFx0XHRyZXQgPSBcIlwiLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRub2RlVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cblx0XHRpZiAoICFub2RlVHlwZSApIHtcblxuXHRcdFx0Ly8gSWYgbm8gbm9kZVR5cGUsIHRoaXMgaXMgZXhwZWN0ZWQgdG8gYmUgYW4gYXJyYXlcblx0XHRcdHdoaWxlICggKCBub2RlID0gZWxlbVsgaSsrIF0gKSApIHtcblxuXHRcdFx0XHQvLyBEbyBub3QgdHJhdmVyc2UgY29tbWVudCBub2Rlc1xuXHRcdFx0XHRyZXQgKz0galF1ZXJ5LnRleHQoIG5vZGUgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCBub2RlVHlwZSA9PT0gMSB8fCBub2RlVHlwZSA9PT0gMTEgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS50ZXh0Q29udGVudDtcblx0XHR9XG5cdFx0aWYgKCBub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdHJldHVybiBlbGVtLmRvY3VtZW50RWxlbWVudC50ZXh0Q29udGVudDtcblx0XHR9XG5cdFx0aWYgKCBub2RlVHlwZSA9PT0gMyB8fCBub2RlVHlwZSA9PT0gNCApIHtcblx0XHRcdHJldHVybiBlbGVtLm5vZGVWYWx1ZTtcblx0XHR9XG5cblx0XHQvLyBEbyBub3QgaW5jbHVkZSBjb21tZW50IG9yIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24gbm9kZXNcblxuXHRcdHJldHVybiByZXQ7XG5cdH0sXG5cblx0Ly8gcmVzdWx0cyBpcyBmb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxuXHRtYWtlQXJyYXk6IGZ1bmN0aW9uKCBhcnIsIHJlc3VsdHMgKSB7XG5cdFx0dmFyIHJldCA9IHJlc3VsdHMgfHwgW107XG5cblx0XHRpZiAoIGFyciAhPSBudWxsICkge1xuXHRcdFx0aWYgKCBpc0FycmF5TGlrZSggT2JqZWN0KCBhcnIgKSApICkge1xuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIHJldCxcblx0XHRcdFx0XHR0eXBlb2YgYXJyID09PSBcInN0cmluZ1wiID9cblx0XHRcdFx0XHRcdFsgYXJyIF0gOiBhcnJcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHB1c2guY2FsbCggcmV0LCBhcnIgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmV0O1xuXHR9LFxuXG5cdGluQXJyYXk6IGZ1bmN0aW9uKCBlbGVtLCBhcnIsIGkgKSB7XG5cdFx0cmV0dXJuIGFyciA9PSBudWxsID8gLTEgOiBpbmRleE9mLmNhbGwoIGFyciwgZWxlbSwgaSApO1xuXHR9LFxuXG5cdGlzWE1MRG9jOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHR2YXIgbmFtZXNwYWNlID0gZWxlbSAmJiBlbGVtLm5hbWVzcGFjZVVSSSxcblx0XHRcdGRvY0VsZW0gPSBlbGVtICYmICggZWxlbS5vd25lckRvY3VtZW50IHx8IGVsZW0gKS5kb2N1bWVudEVsZW1lbnQ7XG5cblx0XHQvLyBBc3N1bWUgSFRNTCB3aGVuIGRvY3VtZW50RWxlbWVudCBkb2Vzbid0IHlldCBleGlzdCwgc3VjaCBhcyBpbnNpZGVcblx0XHQvLyBkb2N1bWVudCBmcmFnbWVudHMuXG5cdFx0cmV0dXJuICFyaHRtbFN1ZmZpeC50ZXN0KCBuYW1lc3BhY2UgfHwgZG9jRWxlbSAmJiBkb2NFbGVtLm5vZGVOYW1lIHx8IFwiSFRNTFwiICk7XG5cdH0sXG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG5cdC8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0bWVyZ2U6IGZ1bmN0aW9uKCBmaXJzdCwgc2Vjb25kICkge1xuXHRcdHZhciBsZW4gPSArc2Vjb25kLmxlbmd0aCxcblx0XHRcdGogPSAwLFxuXHRcdFx0aSA9IGZpcnN0Lmxlbmd0aDtcblxuXHRcdGZvciAoIDsgaiA8IGxlbjsgaisrICkge1xuXHRcdFx0Zmlyc3RbIGkrKyBdID0gc2Vjb25kWyBqIF07XG5cdFx0fVxuXG5cdFx0Zmlyc3QubGVuZ3RoID0gaTtcblxuXHRcdHJldHVybiBmaXJzdDtcblx0fSxcblxuXHRncmVwOiBmdW5jdGlvbiggZWxlbXMsIGNhbGxiYWNrLCBpbnZlcnQgKSB7XG5cdFx0dmFyIGNhbGxiYWNrSW52ZXJzZSxcblx0XHRcdG1hdGNoZXMgPSBbXSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0bGVuZ3RoID0gZWxlbXMubGVuZ3RoLFxuXHRcdFx0Y2FsbGJhY2tFeHBlY3QgPSAhaW52ZXJ0O1xuXG5cdFx0Ly8gR28gdGhyb3VnaCB0aGUgYXJyYXksIG9ubHkgc2F2aW5nIHRoZSBpdGVtc1xuXHRcdC8vIHRoYXQgcGFzcyB0aGUgdmFsaWRhdG9yIGZ1bmN0aW9uXG5cdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRjYWxsYmFja0ludmVyc2UgPSAhY2FsbGJhY2soIGVsZW1zWyBpIF0sIGkgKTtcblx0XHRcdGlmICggY2FsbGJhY2tJbnZlcnNlICE9PSBjYWxsYmFja0V4cGVjdCApIHtcblx0XHRcdFx0bWF0Y2hlcy5wdXNoKCBlbGVtc1sgaSBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hdGNoZXM7XG5cdH0sXG5cblx0Ly8gYXJnIGlzIGZvciBpbnRlcm5hbCB1c2FnZSBvbmx5XG5cdG1hcDogZnVuY3Rpb24oIGVsZW1zLCBjYWxsYmFjaywgYXJnICkge1xuXHRcdHZhciBsZW5ndGgsIHZhbHVlLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRyZXQgPSBbXTtcblxuXHRcdC8vIEdvIHRocm91Z2ggdGhlIGFycmF5LCB0cmFuc2xhdGluZyBlYWNoIG9mIHRoZSBpdGVtcyB0byB0aGVpciBuZXcgdmFsdWVzXG5cdFx0aWYgKCBpc0FycmF5TGlrZSggZWxlbXMgKSApIHtcblx0XHRcdGxlbmd0aCA9IGVsZW1zLmxlbmd0aDtcblx0XHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHR2YWx1ZSA9IGNhbGxiYWNrKCBlbGVtc1sgaSBdLCBpLCBhcmcgKTtcblxuXHRcdFx0XHRpZiAoIHZhbHVlICE9IG51bGwgKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goIHZhbHVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdC8vIEdvIHRocm91Z2ggZXZlcnkga2V5IG9uIHRoZSBvYmplY3QsXG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoIGkgaW4gZWxlbXMgKSB7XG5cdFx0XHRcdHZhbHVlID0gY2FsbGJhY2soIGVsZW1zWyBpIF0sIGksIGFyZyApO1xuXG5cdFx0XHRcdGlmICggdmFsdWUgIT0gbnVsbCApIHtcblx0XHRcdFx0XHRyZXQucHVzaCggdmFsdWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEZsYXR0ZW4gYW55IG5lc3RlZCBhcnJheXNcblx0XHRyZXR1cm4gZmxhdCggcmV0ICk7XG5cdH0sXG5cblx0Ly8gQSBnbG9iYWwgR1VJRCBjb3VudGVyIGZvciBvYmplY3RzXG5cdGd1aWQ6IDEsXG5cblx0Ly8galF1ZXJ5LnN1cHBvcnQgaXMgbm90IHVzZWQgaW4gQ29yZSBidXQgb3RoZXIgcHJvamVjdHMgYXR0YWNoIHRoZWlyXG5cdC8vIHByb3BlcnRpZXMgdG8gaXQgc28gaXQgbmVlZHMgdG8gZXhpc3QuXG5cdHN1cHBvcnQ6IHN1cHBvcnRcbn0gKTtcblxuaWYgKCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgKSB7XG5cdGpRdWVyeS5mblsgU3ltYm9sLml0ZXJhdG9yIF0gPSBhcnJbIFN5bWJvbC5pdGVyYXRvciBdO1xufVxuXG4vLyBQb3B1bGF0ZSB0aGUgY2xhc3MydHlwZSBtYXBcbmpRdWVyeS5lYWNoKCBcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoIFwiIFwiICksXG5cdGZ1bmN0aW9uKCBfaSwgbmFtZSApIHtcblx0XHRjbGFzczJ0eXBlWyBcIltvYmplY3QgXCIgKyBuYW1lICsgXCJdXCIgXSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblx0fSApO1xuXG5mdW5jdGlvbiBpc0FycmF5TGlrZSggb2JqICkge1xuXG5cdC8vIFN1cHBvcnQ6IHJlYWwgaU9TIDguMiBvbmx5IChub3QgcmVwcm9kdWNpYmxlIGluIHNpbXVsYXRvcilcblx0Ly8gYGluYCBjaGVjayB1c2VkIHRvIHByZXZlbnQgSklUIGVycm9yIChnaC0yMTQ1KVxuXHQvLyBoYXNPd24gaXNuJ3QgdXNlZCBoZXJlIGR1ZSB0byBmYWxzZSBuZWdhdGl2ZXNcblx0Ly8gcmVnYXJkaW5nIE5vZGVsaXN0IGxlbmd0aCBpbiBJRVxuXHR2YXIgbGVuZ3RoID0gISFvYmogJiYgXCJsZW5ndGhcIiBpbiBvYmogJiYgb2JqLmxlbmd0aCxcblx0XHR0eXBlID0gdG9UeXBlKCBvYmogKTtcblxuXHRpZiAoIGlzRnVuY3Rpb24oIG9iaiApIHx8IGlzV2luZG93KCBvYmogKSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gdHlwZSA9PT0gXCJhcnJheVwiIHx8IGxlbmd0aCA9PT0gMCB8fFxuXHRcdHR5cGVvZiBsZW5ndGggPT09IFwibnVtYmVyXCIgJiYgbGVuZ3RoID4gMCAmJiAoIGxlbmd0aCAtIDEgKSBpbiBvYmo7XG59XG5cblxuZnVuY3Rpb24gbm9kZU5hbWUoIGVsZW0sIG5hbWUgKSB7XG5cblx0cmV0dXJuIGVsZW0ubm9kZU5hbWUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbn1cbnZhciBwb3AgPSBhcnIucG9wO1xuXG5cbnZhciBzb3J0ID0gYXJyLnNvcnQ7XG5cblxudmFyIHNwbGljZSA9IGFyci5zcGxpY2U7XG5cblxudmFyIHdoaXRlc3BhY2UgPSBcIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCI7XG5cblxudmFyIHJ0cmltQ1NTID0gbmV3IFJlZ0V4cChcblx0XCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiICsgd2hpdGVzcGFjZSArIFwiKyRcIixcblx0XCJnXCJcbik7XG5cblxuXG5cbi8vIE5vdGU6IGFuIGVsZW1lbnQgZG9lcyBub3QgY29udGFpbiBpdHNlbGZcbmpRdWVyeS5jb250YWlucyA9IGZ1bmN0aW9uKCBhLCBiICkge1xuXHR2YXIgYnVwID0gYiAmJiBiLnBhcmVudE5vZGU7XG5cblx0cmV0dXJuIGEgPT09IGJ1cCB8fCAhISggYnVwICYmIGJ1cC5ub2RlVHlwZSA9PT0gMSAmJiAoXG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTErXG5cdFx0Ly8gSUUgZG9lc24ndCBoYXZlIGBjb250YWluc2Agb24gU1ZHLlxuXHRcdGEuY29udGFpbnMgP1xuXHRcdFx0YS5jb250YWlucyggYnVwICkgOlxuXHRcdFx0YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAmJiBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBidXAgKSAmIDE2XG5cdCkgKTtcbn07XG5cblxuXG5cbi8vIENTUyBzdHJpbmcvaWRlbnRpZmllciBzZXJpYWxpemF0aW9uXG4vLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20vI2NvbW1vbi1zZXJpYWxpemluZy1pZGlvbXNcbnZhciByY3NzZXNjYXBlID0gLyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFx4ODAtXFx1RkZGRlxcdy1dL2c7XG5cbmZ1bmN0aW9uIGZjc3Nlc2NhcGUoIGNoLCBhc0NvZGVQb2ludCApIHtcblx0aWYgKCBhc0NvZGVQb2ludCApIHtcblxuXHRcdC8vIFUrMDAwMCBOVUxMIGJlY29tZXMgVStGRkZEIFJFUExBQ0VNRU5UIENIQVJBQ1RFUlxuXHRcdGlmICggY2ggPT09IFwiXFwwXCIgKSB7XG5cdFx0XHRyZXR1cm4gXCJcXHVGRkZEXCI7XG5cdFx0fVxuXG5cdFx0Ly8gQ29udHJvbCBjaGFyYWN0ZXJzIGFuZCAoZGVwZW5kZW50IHVwb24gcG9zaXRpb24pIG51bWJlcnMgZ2V0IGVzY2FwZWQgYXMgY29kZSBwb2ludHNcblx0XHRyZXR1cm4gY2guc2xpY2UoIDAsIC0xICkgKyBcIlxcXFxcIiArIGNoLmNoYXJDb2RlQXQoIGNoLmxlbmd0aCAtIDEgKS50b1N0cmluZyggMTYgKSArIFwiIFwiO1xuXHR9XG5cblx0Ly8gT3RoZXIgcG90ZW50aWFsbHktc3BlY2lhbCBBU0NJSSBjaGFyYWN0ZXJzIGdldCBiYWNrc2xhc2gtZXNjYXBlZFxuXHRyZXR1cm4gXCJcXFxcXCIgKyBjaDtcbn1cblxualF1ZXJ5LmVzY2FwZVNlbGVjdG9yID0gZnVuY3Rpb24oIHNlbCApIHtcblx0cmV0dXJuICggc2VsICsgXCJcIiApLnJlcGxhY2UoIHJjc3Nlc2NhcGUsIGZjc3Nlc2NhcGUgKTtcbn07XG5cblxuXG5cbnZhciBwcmVmZXJyZWREb2MgPSBkb2N1bWVudCxcblx0cHVzaE5hdGl2ZSA9IHB1c2g7XG5cbiggZnVuY3Rpb24oKSB7XG5cbnZhciBpLFxuXHRFeHByLFxuXHRvdXRlcm1vc3RDb250ZXh0LFxuXHRzb3J0SW5wdXQsXG5cdGhhc0R1cGxpY2F0ZSxcblx0cHVzaCA9IHB1c2hOYXRpdmUsXG5cblx0Ly8gTG9jYWwgZG9jdW1lbnQgdmFyc1xuXHRkb2N1bWVudCxcblx0ZG9jdW1lbnRFbGVtZW50LFxuXHRkb2N1bWVudElzSFRNTCxcblx0cmJ1Z2d5UVNBLFxuXHRtYXRjaGVzLFxuXG5cdC8vIEluc3RhbmNlLXNwZWNpZmljIGRhdGFcblx0ZXhwYW5kbyA9IGpRdWVyeS5leHBhbmRvLFxuXHRkaXJydW5zID0gMCxcblx0ZG9uZSA9IDAsXG5cdGNsYXNzQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuXHR0b2tlbkNhY2hlID0gY3JlYXRlQ2FjaGUoKSxcblx0Y29tcGlsZXJDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG5cdG5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuXHRzb3J0T3JkZXIgPSBmdW5jdGlvbiggYSwgYiApIHtcblx0XHRpZiAoIGEgPT09IGIgKSB7XG5cdFx0XHRoYXNEdXBsaWNhdGUgPSB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gMDtcblx0fSxcblxuXHRib29sZWFucyA9IFwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfFwiICtcblx0XHRcImxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixcblxuXHQvLyBSZWd1bGFyIGV4cHJlc3Npb25zXG5cblx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zeW50YXgtMy8jaWRlbnQtdG9rZW4tZGlhZ3JhbVxuXHRpZGVudGlmaWVyID0gXCIoPzpcXFxcXFxcXFtcXFxcZGEtZkEtRl17MSw2fVwiICsgd2hpdGVzcGFjZSArXG5cdFx0XCI/fFxcXFxcXFxcW15cXFxcclxcXFxuXFxcXGZdfFtcXFxcdy1dfFteXFwwLVxcXFx4N2ZdKStcIixcblxuXHQvLyBBdHRyaWJ1dGUgc2VsZWN0b3JzOiBodHRwczovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNhdHRyaWJ1dGUtc2VsZWN0b3JzXG5cdGF0dHJpYnV0ZXMgPSBcIlxcXFxbXCIgKyB3aGl0ZXNwYWNlICsgXCIqKFwiICsgaWRlbnRpZmllciArIFwiKSg/OlwiICsgd2hpdGVzcGFjZSArXG5cblx0XHQvLyBPcGVyYXRvciAoY2FwdHVyZSAyKVxuXHRcdFwiKihbKl4kfCF+XT89KVwiICsgd2hpdGVzcGFjZSArXG5cblx0XHQvLyBcIkF0dHJpYnV0ZSB2YWx1ZXMgbXVzdCBiZSBDU1MgaWRlbnRpZmllcnMgW2NhcHR1cmUgNV0gb3Igc3RyaW5ncyBbY2FwdHVyZSAzIG9yIGNhcHR1cmUgNF1cIlxuXHRcdFwiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIgKyBpZGVudGlmaWVyICsgXCIpKXwpXCIgK1xuXHRcdHdoaXRlc3BhY2UgKyBcIipcXFxcXVwiLFxuXG5cdHBzZXVkb3MgPSBcIjooXCIgKyBpZGVudGlmaWVyICsgXCIpKD86XFxcXCgoXCIgK1xuXG5cdFx0Ly8gVG8gcmVkdWNlIHRoZSBudW1iZXIgb2Ygc2VsZWN0b3JzIG5lZWRpbmcgdG9rZW5pemUgaW4gdGhlIHByZUZpbHRlciwgcHJlZmVyIGFyZ3VtZW50czpcblx0XHQvLyAxLiBxdW90ZWQgKGNhcHR1cmUgMzsgY2FwdHVyZSA0IG9yIGNhcHR1cmUgNSlcblx0XHRcIignKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfFwiICtcblxuXHRcdC8vIDIuIHNpbXBsZSAoY2FwdHVyZSA2KVxuXHRcdFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiICsgYXR0cmlidXRlcyArIFwiKSopfFwiICtcblxuXHRcdC8vIDMuIGFueXRoaW5nIGVsc2UgKGNhcHR1cmUgMilcblx0XHRcIi4qXCIgK1xuXHRcdFwiKVxcXFwpfClcIixcblxuXHQvLyBMZWFkaW5nIGFuZCBub24tZXNjYXBlZCB0cmFpbGluZyB3aGl0ZXNwYWNlLCBjYXB0dXJpbmcgc29tZSBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXJzIHByZWNlZGluZyB0aGUgbGF0dGVyXG5cdHJ3aGl0ZXNwYWNlID0gbmV3IFJlZ0V4cCggd2hpdGVzcGFjZSArIFwiK1wiLCBcImdcIiApLFxuXG5cdHJjb21tYSA9IG5ldyBSZWdFeHAoIFwiXlwiICsgd2hpdGVzcGFjZSArIFwiKixcIiArIHdoaXRlc3BhY2UgKyBcIipcIiApLFxuXHRybGVhZGluZ0NvbWJpbmF0b3IgPSBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgKyBcIiooWz4rfl18XCIgKyB3aGl0ZXNwYWNlICsgXCIpXCIgK1xuXHRcdHdoaXRlc3BhY2UgKyBcIipcIiApLFxuXHRyZGVzY2VuZCA9IG5ldyBSZWdFeHAoIHdoaXRlc3BhY2UgKyBcInw+XCIgKSxcblxuXHRycHNldWRvID0gbmV3IFJlZ0V4cCggcHNldWRvcyApLFxuXHRyaWRlbnRpZmllciA9IG5ldyBSZWdFeHAoIFwiXlwiICsgaWRlbnRpZmllciArIFwiJFwiICksXG5cblx0bWF0Y2hFeHByID0ge1xuXHRcdElEOiBuZXcgUmVnRXhwKCBcIl4jKFwiICsgaWRlbnRpZmllciArIFwiKVwiICksXG5cdFx0Q0xBU1M6IG5ldyBSZWdFeHAoIFwiXlxcXFwuKFwiICsgaWRlbnRpZmllciArIFwiKVwiICksXG5cdFx0VEFHOiBuZXcgUmVnRXhwKCBcIl4oXCIgKyBpZGVudGlmaWVyICsgXCJ8WypdKVwiICksXG5cdFx0QVRUUjogbmV3IFJlZ0V4cCggXCJeXCIgKyBhdHRyaWJ1dGVzICksXG5cdFx0UFNFVURPOiBuZXcgUmVnRXhwKCBcIl5cIiArIHBzZXVkb3MgKSxcblx0XHRDSElMRDogbmV3IFJlZ0V4cChcblx0XHRcdFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIiArXG5cdFx0XHRcdHdoaXRlc3BhY2UgKyBcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiICsgd2hpdGVzcGFjZSArIFwiKig/OihbKy1dfClcIiArXG5cdFx0XHRcdHdoaXRlc3BhY2UgKyBcIiooXFxcXGQrKXwpKVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFwpfClcIiwgXCJpXCIgKSxcblx0XHRib29sOiBuZXcgUmVnRXhwKCBcIl4oPzpcIiArIGJvb2xlYW5zICsgXCIpJFwiLCBcImlcIiApLFxuXG5cdFx0Ly8gRm9yIHVzZSBpbiBsaWJyYXJpZXMgaW1wbGVtZW50aW5nIC5pcygpXG5cdFx0Ly8gV2UgdXNlIHRoaXMgZm9yIFBPUyBtYXRjaGluZyBpbiBgc2VsZWN0YFxuXHRcdG5lZWRzQ29udGV4dDogbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICtcblx0XHRcdFwiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIiArIHdoaXRlc3BhY2UgK1xuXHRcdFx0XCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFwpfCkoPz1bXi1dfCQpXCIsIFwiaVwiIClcblx0fSxcblxuXHRyaW5wdXRzID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxcblx0cmhlYWRlciA9IC9eaFxcZCQvaSxcblxuXHQvLyBFYXNpbHktcGFyc2VhYmxlL3JldHJpZXZhYmxlIElEIG9yIFRBRyBvciBDTEFTUyBzZWxlY3RvcnNcblx0cnF1aWNrRXhwciA9IC9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLFxuXG5cdHJzaWJsaW5nID0gL1srfl0vLFxuXG5cdC8vIENTUyBlc2NhcGVzXG5cdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9DU1MyMS9zeW5kYXRhLmh0bWwjZXNjYXBlZC1jaGFyYWN0ZXJzXG5cdHJ1bmVzY2FwZSA9IG5ldyBSZWdFeHAoIFwiXFxcXFxcXFxbXFxcXGRhLWZBLUZdezEsNn1cIiArIHdoaXRlc3BhY2UgK1xuXHRcdFwiP3xcXFxcXFxcXChbXlxcXFxyXFxcXG5cXFxcZl0pXCIsIFwiZ1wiICksXG5cdGZ1bmVzY2FwZSA9IGZ1bmN0aW9uKCBlc2NhcGUsIG5vbkhleCApIHtcblx0XHR2YXIgaGlnaCA9IFwiMHhcIiArIGVzY2FwZS5zbGljZSggMSApIC0gMHgxMDAwMDtcblxuXHRcdGlmICggbm9uSGV4ICkge1xuXG5cdFx0XHQvLyBTdHJpcCB0aGUgYmFja3NsYXNoIHByZWZpeCBmcm9tIGEgbm9uLWhleCBlc2NhcGUgc2VxdWVuY2Vcblx0XHRcdHJldHVybiBub25IZXg7XG5cdFx0fVxuXG5cdFx0Ly8gUmVwbGFjZSBhIGhleGFkZWNpbWFsIGVzY2FwZSBzZXF1ZW5jZSB3aXRoIHRoZSBlbmNvZGVkIFVuaWNvZGUgY29kZSBwb2ludFxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9MTErXG5cdFx0Ly8gRm9yIHZhbHVlcyBvdXRzaWRlIHRoZSBCYXNpYyBNdWx0aWxpbmd1YWwgUGxhbmUgKEJNUCksIG1hbnVhbGx5IGNvbnN0cnVjdCBhXG5cdFx0Ly8gc3Vycm9nYXRlIHBhaXJcblx0XHRyZXR1cm4gaGlnaCA8IDAgP1xuXHRcdFx0U3RyaW5nLmZyb21DaGFyQ29kZSggaGlnaCArIDB4MTAwMDAgKSA6XG5cdFx0XHRTdHJpbmcuZnJvbUNoYXJDb2RlKCBoaWdoID4+IDEwIHwgMHhEODAwLCBoaWdoICYgMHgzRkYgfCAweERDMDAgKTtcblx0fSxcblxuXHQvLyBVc2VkIGZvciBpZnJhbWVzOyBzZWUgYHNldERvY3VtZW50YC5cblx0Ly8gU3VwcG9ydDogSUUgOSAtIDExKywgRWRnZSAxMiAtIDE4K1xuXHQvLyBSZW1vdmluZyB0aGUgZnVuY3Rpb24gd3JhcHBlciBjYXVzZXMgYSBcIlBlcm1pc3Npb24gRGVuaWVkXCJcblx0Ly8gZXJyb3IgaW4gSUUvRWRnZS5cblx0dW5sb2FkSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXHRcdHNldERvY3VtZW50KCk7XG5cdH0sXG5cblx0aW5EaXNhYmxlZEZpZWxkc2V0ID0gYWRkQ29tYmluYXRvcihcblx0XHRmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtLmRpc2FibGVkID09PSB0cnVlICYmIG5vZGVOYW1lKCBlbGVtLCBcImZpZWxkc2V0XCIgKTtcblx0XHR9LFxuXHRcdHsgZGlyOiBcInBhcmVudE5vZGVcIiwgbmV4dDogXCJsZWdlbmRcIiB9XG5cdCk7XG5cbi8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4vLyBBY2Nlc3NpbmcgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBjYW4gdGhyb3cgdW5leHBlY3RlZGx5XG4vLyBodHRwczovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTMzOTNcbmZ1bmN0aW9uIHNhZmVBY3RpdmVFbGVtZW50KCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHR9IGNhdGNoICggZXJyICkgeyB9XG59XG5cbi8vIE9wdGltaXplIGZvciBwdXNoLmFwcGx5KCBfLCBOb2RlTGlzdCApXG50cnkge1xuXHRwdXNoLmFwcGx5KFxuXHRcdCggYXJyID0gc2xpY2UuY2FsbCggcHJlZmVycmVkRG9jLmNoaWxkTm9kZXMgKSApLFxuXHRcdHByZWZlcnJlZERvYy5jaGlsZE5vZGVzXG5cdCk7XG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMFxuXHQvLyBEZXRlY3Qgc2lsZW50bHkgZmFpbGluZyBwdXNoLmFwcGx5XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0YXJyWyBwcmVmZXJyZWREb2MuY2hpbGROb2Rlcy5sZW5ndGggXS5ub2RlVHlwZTtcbn0gY2F0Y2ggKCBlICkge1xuXHRwdXNoID0ge1xuXHRcdGFwcGx5OiBmdW5jdGlvbiggdGFyZ2V0LCBlbHMgKSB7XG5cdFx0XHRwdXNoTmF0aXZlLmFwcGx5KCB0YXJnZXQsIHNsaWNlLmNhbGwoIGVscyApICk7XG5cdFx0fSxcblx0XHRjYWxsOiBmdW5jdGlvbiggdGFyZ2V0ICkge1xuXHRcdFx0cHVzaE5hdGl2ZS5hcHBseSggdGFyZ2V0LCBzbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSApO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gZmluZCggc2VsZWN0b3IsIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQgKSB7XG5cdHZhciBtLCBpLCBlbGVtLCBuaWQsIG1hdGNoLCBncm91cHMsIG5ld1NlbGVjdG9yLFxuXHRcdG5ld0NvbnRleHQgPSBjb250ZXh0ICYmIGNvbnRleHQub3duZXJEb2N1bWVudCxcblxuXHRcdC8vIG5vZGVUeXBlIGRlZmF1bHRzIHRvIDksIHNpbmNlIGNvbnRleHQgZGVmYXVsdHMgdG8gZG9jdW1lbnRcblx0XHRub2RlVHlwZSA9IGNvbnRleHQgPyBjb250ZXh0Lm5vZGVUeXBlIDogOTtcblxuXHRyZXN1bHRzID0gcmVzdWx0cyB8fCBbXTtcblxuXHQvLyBSZXR1cm4gZWFybHkgZnJvbSBjYWxscyB3aXRoIGludmFsaWQgc2VsZWN0b3Igb3IgY29udGV4dFxuXHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiB8fCAhc2VsZWN0b3IgfHxcblx0XHRub2RlVHlwZSAhPT0gMSAmJiBub2RlVHlwZSAhPT0gOSAmJiBub2RlVHlwZSAhPT0gMTEgKSB7XG5cblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fVxuXG5cdC8vIFRyeSB0byBzaG9ydGN1dCBmaW5kIG9wZXJhdGlvbnMgKGFzIG9wcG9zZWQgdG8gZmlsdGVycykgaW4gSFRNTCBkb2N1bWVudHNcblx0aWYgKCAhc2VlZCApIHtcblx0XHRzZXREb2N1bWVudCggY29udGV4dCApO1xuXHRcdGNvbnRleHQgPSBjb250ZXh0IHx8IGRvY3VtZW50O1xuXG5cdFx0aWYgKCBkb2N1bWVudElzSFRNTCApIHtcblxuXHRcdFx0Ly8gSWYgdGhlIHNlbGVjdG9yIGlzIHN1ZmZpY2llbnRseSBzaW1wbGUsIHRyeSB1c2luZyBhIFwiZ2V0KkJ5KlwiIERPTSBtZXRob2Rcblx0XHRcdC8vIChleGNlcHRpbmcgRG9jdW1lbnRGcmFnbWVudCBjb250ZXh0LCB3aGVyZSB0aGUgbWV0aG9kcyBkb24ndCBleGlzdClcblx0XHRcdGlmICggbm9kZVR5cGUgIT09IDExICYmICggbWF0Y2ggPSBycXVpY2tFeHByLmV4ZWMoIHNlbGVjdG9yICkgKSApIHtcblxuXHRcdFx0XHQvLyBJRCBzZWxlY3RvclxuXHRcdFx0XHRpZiAoICggbSA9IG1hdGNoWyAxIF0gKSApIHtcblxuXHRcdFx0XHRcdC8vIERvY3VtZW50IGNvbnRleHRcblx0XHRcdFx0XHRpZiAoIG5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoIGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKCBtICkgKSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA5IG9ubHlcblx0XHRcdFx0XHRcdFx0Ly8gZ2V0RWxlbWVudEJ5SWQgY2FuIG1hdGNoIGVsZW1lbnRzIGJ5IG5hbWUgaW5zdGVhZCBvZiBJRFxuXHRcdFx0XHRcdFx0XHRpZiAoIGVsZW0uaWQgPT09IG0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0cHVzaC5jYWxsKCByZXN1bHRzLCBlbGVtICk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRWxlbWVudCBjb250ZXh0XG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgOSBvbmx5XG5cdFx0XHRcdFx0XHQvLyBnZXRFbGVtZW50QnlJZCBjYW4gbWF0Y2ggZWxlbWVudHMgYnkgbmFtZSBpbnN0ZWFkIG9mIElEXG5cdFx0XHRcdFx0XHRpZiAoIG5ld0NvbnRleHQgJiYgKCBlbGVtID0gbmV3Q29udGV4dC5nZXRFbGVtZW50QnlJZCggbSApICkgJiZcblx0XHRcdFx0XHRcdFx0ZmluZC5jb250YWlucyggY29udGV4dCwgZWxlbSApICYmXG5cdFx0XHRcdFx0XHRcdGVsZW0uaWQgPT09IG0gKSB7XG5cblx0XHRcdFx0XHRcdFx0cHVzaC5jYWxsKCByZXN1bHRzLCBlbGVtICk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUeXBlIHNlbGVjdG9yXG5cdFx0XHRcdH0gZWxzZSBpZiAoIG1hdGNoWyAyIF0gKSB7XG5cdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggc2VsZWN0b3IgKSApO1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXG5cdFx0XHRcdC8vIENsYXNzIHNlbGVjdG9yXG5cdFx0XHRcdH0gZWxzZSBpZiAoICggbSA9IG1hdGNoWyAzIF0gKSAmJiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgKSB7XG5cdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBtICkgKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBUYWtlIGFkdmFudGFnZSBvZiBxdWVyeVNlbGVjdG9yQWxsXG5cdFx0XHRpZiAoICFub25uYXRpdmVTZWxlY3RvckNhY2hlWyBzZWxlY3RvciArIFwiIFwiIF0gJiZcblx0XHRcdFx0KCAhcmJ1Z2d5UVNBIHx8ICFyYnVnZ3lRU0EudGVzdCggc2VsZWN0b3IgKSApICkge1xuXG5cdFx0XHRcdG5ld1NlbGVjdG9yID0gc2VsZWN0b3I7XG5cdFx0XHRcdG5ld0NvbnRleHQgPSBjb250ZXh0O1xuXG5cdFx0XHRcdC8vIHFTQSBjb25zaWRlcnMgZWxlbWVudHMgb3V0c2lkZSBhIHNjb3Bpbmcgcm9vdCB3aGVuIGV2YWx1YXRpbmcgY2hpbGQgb3Jcblx0XHRcdFx0Ly8gZGVzY2VuZGFudCBjb21iaW5hdG9ycywgd2hpY2ggaXMgbm90IHdoYXQgd2Ugd2FudC5cblx0XHRcdFx0Ly8gSW4gc3VjaCBjYXNlcywgd2Ugd29yayBhcm91bmQgdGhlIGJlaGF2aW9yIGJ5IHByZWZpeGluZyBldmVyeSBzZWxlY3RvciBpbiB0aGVcblx0XHRcdFx0Ly8gbGlzdCB3aXRoIGFuIElEIHNlbGVjdG9yIHJlZmVyZW5jaW5nIHRoZSBzY29wZSBjb250ZXh0LlxuXHRcdFx0XHQvLyBUaGUgdGVjaG5pcXVlIGhhcyB0byBiZSB1c2VkIGFzIHdlbGwgd2hlbiBhIGxlYWRpbmcgY29tYmluYXRvciBpcyB1c2VkXG5cdFx0XHRcdC8vIGFzIHN1Y2ggc2VsZWN0b3JzIGFyZSBub3QgcmVjb2duaXplZCBieSBxdWVyeVNlbGVjdG9yQWxsLlxuXHRcdFx0XHQvLyBUaGFua3MgdG8gQW5kcmV3IER1cG9udCBmb3IgdGhpcyB0ZWNobmlxdWUuXG5cdFx0XHRcdGlmICggbm9kZVR5cGUgPT09IDEgJiZcblx0XHRcdFx0XHQoIHJkZXNjZW5kLnRlc3QoIHNlbGVjdG9yICkgfHwgcmxlYWRpbmdDb21iaW5hdG9yLnRlc3QoIHNlbGVjdG9yICkgKSApIHtcblxuXHRcdFx0XHRcdC8vIEV4cGFuZCBjb250ZXh0IGZvciBzaWJsaW5nIHNlbGVjdG9yc1xuXHRcdFx0XHRcdG5ld0NvbnRleHQgPSByc2libGluZy50ZXN0KCBzZWxlY3RvciApICYmIHRlc3RDb250ZXh0KCBjb250ZXh0LnBhcmVudE5vZGUgKSB8fFxuXHRcdFx0XHRcdFx0Y29udGV4dDtcblxuXHRcdFx0XHRcdC8vIFdlIGNhbiB1c2UgOnNjb3BlIGluc3RlYWQgb2YgdGhlIElEIGhhY2sgaWYgdGhlIGJyb3dzZXJcblx0XHRcdFx0XHQvLyBzdXBwb3J0cyBpdCAmIGlmIHdlJ3JlIG5vdCBjaGFuZ2luZyB0aGUgY29udGV4dC5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0XHRcdFx0XHQvLyBJRS9FZGdlIHNvbWV0aW1lcyB0aHJvdyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuXG5cdFx0XHRcdFx0Ly8gc3RyaWN0LWNvbXBhcmluZyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdFx0XHRcdGlmICggbmV3Q29udGV4dCAhPSBjb250ZXh0IHx8ICFzdXBwb3J0LnNjb3BlICkge1xuXG5cdFx0XHRcdFx0XHQvLyBDYXB0dXJlIHRoZSBjb250ZXh0IElELCBzZXR0aW5nIGl0IGZpcnN0IGlmIG5lY2Vzc2FyeVxuXHRcdFx0XHRcdFx0aWYgKCAoIG5pZCA9IGNvbnRleHQuZ2V0QXR0cmlidXRlKCBcImlkXCIgKSApICkge1xuXHRcdFx0XHRcdFx0XHRuaWQgPSBqUXVlcnkuZXNjYXBlU2VsZWN0b3IoIG5pZCApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29udGV4dC5zZXRBdHRyaWJ1dGUoIFwiaWRcIiwgKCBuaWQgPSBleHBhbmRvICkgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBQcmVmaXggZXZlcnkgc2VsZWN0b3IgaW4gdGhlIGxpc3Rcblx0XHRcdFx0XHRncm91cHMgPSB0b2tlbml6ZSggc2VsZWN0b3IgKTtcblx0XHRcdFx0XHRpID0gZ3JvdXBzLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRcdGdyb3Vwc1sgaSBdID0gKCBuaWQgPyBcIiNcIiArIG5pZCA6IFwiOnNjb3BlXCIgKSArIFwiIFwiICtcblx0XHRcdFx0XHRcdFx0dG9TZWxlY3RvciggZ3JvdXBzWyBpIF0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bmV3U2VsZWN0b3IgPSBncm91cHMuam9pbiggXCIsXCIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cyxcblx0XHRcdFx0XHRcdG5ld0NvbnRleHQucXVlcnlTZWxlY3RvckFsbCggbmV3U2VsZWN0b3IgKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdH0gY2F0Y2ggKCBxc2FFcnJvciApIHtcblx0XHRcdFx0XHRub25uYXRpdmVTZWxlY3RvckNhY2hlKCBzZWxlY3RvciwgdHJ1ZSApO1xuXHRcdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRcdGlmICggbmlkID09PSBleHBhbmRvICkge1xuXHRcdFx0XHRcdFx0Y29udGV4dC5yZW1vdmVBdHRyaWJ1dGUoIFwiaWRcIiApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEFsbCBvdGhlcnNcblx0cmV0dXJuIHNlbGVjdCggc2VsZWN0b3IucmVwbGFjZSggcnRyaW1DU1MsIFwiJDFcIiApLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkICk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGtleS12YWx1ZSBjYWNoZXMgb2YgbGltaXRlZCBzaXplXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oc3RyaW5nLCBvYmplY3QpfSBSZXR1cm5zIHRoZSBPYmplY3QgZGF0YSBhZnRlciBzdG9yaW5nIGl0IG9uIGl0c2VsZiB3aXRoXG4gKlx0cHJvcGVydHkgbmFtZSB0aGUgKHNwYWNlLXN1ZmZpeGVkKSBzdHJpbmcgYW5kIChpZiB0aGUgY2FjaGUgaXMgbGFyZ2VyIHRoYW4gRXhwci5jYWNoZUxlbmd0aClcbiAqXHRkZWxldGluZyB0aGUgb2xkZXN0IGVudHJ5XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhY2hlKCkge1xuXHR2YXIga2V5cyA9IFtdO1xuXG5cdGZ1bmN0aW9uIGNhY2hlKCBrZXksIHZhbHVlICkge1xuXG5cdFx0Ly8gVXNlIChrZXkgKyBcIiBcIikgdG8gYXZvaWQgY29sbGlzaW9uIHdpdGggbmF0aXZlIHByb3RvdHlwZSBwcm9wZXJ0aWVzXG5cdFx0Ly8gKHNlZSBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L3NpenpsZS9pc3N1ZXMvMTU3KVxuXHRcdGlmICgga2V5cy5wdXNoKCBrZXkgKyBcIiBcIiApID4gRXhwci5jYWNoZUxlbmd0aCApIHtcblxuXHRcdFx0Ly8gT25seSBrZWVwIHRoZSBtb3N0IHJlY2VudCBlbnRyaWVzXG5cdFx0XHRkZWxldGUgY2FjaGVbIGtleXMuc2hpZnQoKSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gKCBjYWNoZVsga2V5ICsgXCIgXCIgXSA9IHZhbHVlICk7XG5cdH1cblx0cmV0dXJuIGNhY2hlO1xufVxuXG4vKipcbiAqIE1hcmsgYSBmdW5jdGlvbiBmb3Igc3BlY2lhbCB1c2UgYnkgalF1ZXJ5IHNlbGVjdG9yIG1vZHVsZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIG1hcmtcbiAqL1xuZnVuY3Rpb24gbWFya0Z1bmN0aW9uKCBmbiApIHtcblx0Zm5bIGV4cGFuZG8gXSA9IHRydWU7XG5cdHJldHVybiBmbjtcbn1cblxuLyoqXG4gKiBTdXBwb3J0IHRlc3RpbmcgdXNpbmcgYW4gZWxlbWVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gUGFzc2VkIHRoZSBjcmVhdGVkIGVsZW1lbnQgYW5kIHJldHVybnMgYSBib29sZWFuIHJlc3VsdFxuICovXG5mdW5jdGlvbiBhc3NlcnQoIGZuICkge1xuXHR2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImZpZWxkc2V0XCIgKTtcblxuXHR0cnkge1xuXHRcdHJldHVybiAhIWZuKCBlbCApO1xuXHR9IGNhdGNoICggZSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cblx0XHQvLyBSZW1vdmUgZnJvbSBpdHMgcGFyZW50IGJ5IGRlZmF1bHRcblx0XHRpZiAoIGVsLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBlbCApO1xuXHRcdH1cblxuXHRcdC8vIHJlbGVhc2UgbWVtb3J5IGluIElFXG5cdFx0ZWwgPSBudWxsO1xuXHR9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciBpbnB1dCB0eXBlc1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5wdXRQc2V1ZG8oIHR5cGUgKSB7XG5cdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gbm9kZU5hbWUoIGVsZW0sIFwiaW5wdXRcIiApICYmIGVsZW0udHlwZSA9PT0gdHlwZTtcblx0fTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIGJ1dHRvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvblBzZXVkbyggdHlwZSApIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiAoIG5vZGVOYW1lKCBlbGVtLCBcImlucHV0XCIgKSB8fCBub2RlTmFtZSggZWxlbSwgXCJidXR0b25cIiApICkgJiZcblx0XHRcdGVsZW0udHlwZSA9PT0gdHlwZTtcblx0fTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIDplbmFibGVkLzpkaXNhYmxlZFxuICogQHBhcmFtIHtCb29sZWFufSBkaXNhYmxlZCB0cnVlIGZvciA6ZGlzYWJsZWQ7IGZhbHNlIGZvciA6ZW5hYmxlZFxuICovXG5mdW5jdGlvbiBjcmVhdGVEaXNhYmxlZFBzZXVkbyggZGlzYWJsZWQgKSB7XG5cblx0Ly8gS25vd24gOmRpc2FibGVkIGZhbHNlIHBvc2l0aXZlczogZmllbGRzZXRbZGlzYWJsZWRdID4gbGVnZW5kOm50aC1vZi10eXBlKG4rMikgOmNhbi1kaXNhYmxlXG5cdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdC8vIE9ubHkgY2VydGFpbiBlbGVtZW50cyBjYW4gbWF0Y2ggOmVuYWJsZWQgb3IgOmRpc2FibGVkXG5cdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2NyaXB0aW5nLmh0bWwjc2VsZWN0b3ItZW5hYmxlZFxuXHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NjcmlwdGluZy5odG1sI3NlbGVjdG9yLWRpc2FibGVkXG5cdFx0aWYgKCBcImZvcm1cIiBpbiBlbGVtICkge1xuXG5cdFx0XHQvLyBDaGVjayBmb3IgaW5oZXJpdGVkIGRpc2FibGVkbmVzcyBvbiByZWxldmFudCBub24tZGlzYWJsZWQgZWxlbWVudHM6XG5cdFx0XHQvLyAqIGxpc3RlZCBmb3JtLWFzc29jaWF0ZWQgZWxlbWVudHMgaW4gYSBkaXNhYmxlZCBmaWVsZHNldFxuXHRcdFx0Ly8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NhdGVnb3J5LWxpc3RlZFxuXHRcdFx0Ly8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NvbmNlcHQtZmUtZGlzYWJsZWRcblx0XHRcdC8vICogb3B0aW9uIGVsZW1lbnRzIGluIGEgZGlzYWJsZWQgb3B0Z3JvdXBcblx0XHRcdC8vICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCNjb25jZXB0LW9wdGlvbi1kaXNhYmxlZFxuXHRcdFx0Ly8gQWxsIHN1Y2ggZWxlbWVudHMgaGF2ZSBhIFwiZm9ybVwiIHByb3BlcnR5LlxuXHRcdFx0aWYgKCBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbS5kaXNhYmxlZCA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0Ly8gT3B0aW9uIGVsZW1lbnRzIGRlZmVyIHRvIGEgcGFyZW50IG9wdGdyb3VwIGlmIHByZXNlbnRcblx0XHRcdFx0aWYgKCBcImxhYmVsXCIgaW4gZWxlbSApIHtcblx0XHRcdFx0XHRpZiAoIFwibGFiZWxcIiBpbiBlbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS5wYXJlbnROb2RlLmRpc2FibGVkID09PSBkaXNhYmxlZDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDYgLSAxMStcblx0XHRcdFx0Ly8gVXNlIHRoZSBpc0Rpc2FibGVkIHNob3J0Y3V0IHByb3BlcnR5IHRvIGNoZWNrIGZvciBkaXNhYmxlZCBmaWVsZHNldCBhbmNlc3RvcnNcblx0XHRcdFx0cmV0dXJuIGVsZW0uaXNEaXNhYmxlZCA9PT0gZGlzYWJsZWQgfHxcblxuXHRcdFx0XHRcdC8vIFdoZXJlIHRoZXJlIGlzIG5vIGlzRGlzYWJsZWQsIGNoZWNrIG1hbnVhbGx5XG5cdFx0XHRcdFx0ZWxlbS5pc0Rpc2FibGVkICE9PSAhZGlzYWJsZWQgJiZcblx0XHRcdFx0XHRcdGluRGlzYWJsZWRGaWVsZHNldCggZWxlbSApID09PSBkaXNhYmxlZDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXG5cdFx0Ly8gVHJ5IHRvIHdpbm5vdyBvdXQgZWxlbWVudHMgdGhhdCBjYW4ndCBiZSBkaXNhYmxlZCBiZWZvcmUgdHJ1c3RpbmcgdGhlIGRpc2FibGVkIHByb3BlcnR5LlxuXHRcdC8vIFNvbWUgdmljdGltcyBnZXQgY2F1Z2h0IGluIG91ciBuZXQgKGxhYmVsLCBsZWdlbmQsIG1lbnUsIHRyYWNrKSwgYnV0IGl0IHNob3VsZG4ndFxuXHRcdC8vIGV2ZW4gZXhpc3Qgb24gdGhlbSwgbGV0IGFsb25lIGhhdmUgYSBib29sZWFuIHZhbHVlLlxuXHRcdH0gZWxzZSBpZiAoIFwibGFiZWxcIiBpbiBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXHRcdH1cblxuXHRcdC8vIFJlbWFpbmluZyBlbGVtZW50cyBhcmUgbmVpdGhlciA6ZW5hYmxlZCBub3IgOmRpc2FibGVkXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgcG9zaXRpb25hbHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oIGZuICkge1xuXHRyZXR1cm4gbWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggYXJndW1lbnQgKSB7XG5cdFx0YXJndW1lbnQgPSArYXJndW1lbnQ7XG5cdFx0cmV0dXJuIG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIHNlZWQsIG1hdGNoZXMgKSB7XG5cdFx0XHR2YXIgaixcblx0XHRcdFx0bWF0Y2hJbmRleGVzID0gZm4oIFtdLCBzZWVkLmxlbmd0aCwgYXJndW1lbnQgKSxcblx0XHRcdFx0aSA9IG1hdGNoSW5kZXhlcy5sZW5ndGg7XG5cblx0XHRcdC8vIE1hdGNoIGVsZW1lbnRzIGZvdW5kIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhlc1xuXHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdGlmICggc2VlZFsgKCBqID0gbWF0Y2hJbmRleGVzWyBpIF0gKSBdICkge1xuXHRcdFx0XHRcdHNlZWRbIGogXSA9ICEoIG1hdGNoZXNbIGogXSA9IHNlZWRbIGogXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9ICk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGEgbm9kZSBmb3IgdmFsaWRpdHkgYXMgYSBqUXVlcnkgc2VsZWN0b3IgY29udGV4dFxuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdD19IGNvbnRleHRcbiAqIEByZXR1cm5zIHtFbGVtZW50fE9iamVjdHxCb29sZWFufSBUaGUgaW5wdXQgbm9kZSBpZiBhY2NlcHRhYmxlLCBvdGhlcndpc2UgYSBmYWxzeSB2YWx1ZVxuICovXG5mdW5jdGlvbiB0ZXN0Q29udGV4dCggY29udGV4dCApIHtcblx0cmV0dXJuIGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29udGV4dDtcbn1cblxuLyoqXG4gKiBTZXRzIGRvY3VtZW50LXJlbGF0ZWQgdmFyaWFibGVzIG9uY2UgYmFzZWQgb24gdGhlIGN1cnJlbnQgZG9jdW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3R9IFtub2RlXSBBbiBlbGVtZW50IG9yIGRvY3VtZW50IG9iamVjdCB0byB1c2UgdG8gc2V0IHRoZSBkb2N1bWVudFxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY3VycmVudCBkb2N1bWVudFxuICovXG5mdW5jdGlvbiBzZXREb2N1bWVudCggbm9kZSApIHtcblx0dmFyIHN1YldpbmRvdyxcblx0XHRkb2MgPSBub2RlID8gbm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGUgOiBwcmVmZXJyZWREb2M7XG5cblx0Ly8gUmV0dXJuIGVhcmx5IGlmIGRvYyBpcyBpbnZhbGlkIG9yIGFscmVhZHkgc2VsZWN0ZWRcblx0Ly8gU3VwcG9ydDogSUUgMTErLCBFZGdlIDE3IC0gMTgrXG5cdC8vIElFL0VkZ2Ugc29tZXRpbWVzIHRocm93IGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0aWYgKCBkb2MgPT0gZG9jdW1lbnQgfHwgZG9jLm5vZGVUeXBlICE9PSA5IHx8ICFkb2MuZG9jdW1lbnRFbGVtZW50ICkge1xuXHRcdHJldHVybiBkb2N1bWVudDtcblx0fVxuXG5cdC8vIFVwZGF0ZSBnbG9iYWwgdmFyaWFibGVzXG5cdGRvY3VtZW50ID0gZG9jO1xuXHRkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdGRvY3VtZW50SXNIVE1MID0gIWpRdWVyeS5pc1hNTERvYyggZG9jdW1lbnQgKTtcblxuXHQvLyBTdXBwb3J0OiBpT1MgNyBvbmx5LCBJRSA5IC0gMTErXG5cdC8vIE9sZGVyIGJyb3dzZXJzIGRpZG4ndCBzdXBwb3J0IHVucHJlZml4ZWQgYG1hdGNoZXNgLlxuXHRtYXRjaGVzID0gZG9jdW1lbnRFbGVtZW50Lm1hdGNoZXMgfHxcblx0XHRkb2N1bWVudEVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG5cdFx0ZG9jdW1lbnRFbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSssIEVkZ2UgMTIgLSAxOCtcblx0Ly8gQWNjZXNzaW5nIGlmcmFtZSBkb2N1bWVudHMgYWZ0ZXIgdW5sb2FkIHRocm93cyBcInBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3JzXG5cdC8vIChzZWUgdHJhYy0xMzkzNikuXG5cdC8vIExpbWl0IHRoZSBmaXggdG8gSUUgJiBFZGdlIExlZ2FjeTsgZGVzcGl0ZSBFZGdlIDE1KyBpbXBsZW1lbnRpbmcgYG1hdGNoZXNgLFxuXHQvLyBhbGwgSUUgOSsgYW5kIEVkZ2UgTGVnYWN5IHZlcnNpb25zIGltcGxlbWVudCBgbXNNYXRjaGVzU2VsZWN0b3JgIGFzIHdlbGwuXG5cdGlmICggZG9jdW1lbnRFbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yICYmXG5cblx0XHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0XHQvLyBJRS9FZGdlIHNvbWV0aW1lcyB0aHJvdyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIHN0cmljdC1jb21wYXJpbmdcblx0XHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdHByZWZlcnJlZERvYyAhPSBkb2N1bWVudCAmJlxuXHRcdCggc3ViV2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcgKSAmJiBzdWJXaW5kb3cudG9wICE9PSBzdWJXaW5kb3cgKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTErLCBFZGdlIDEyIC0gMTgrXG5cdFx0c3ViV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwidW5sb2FkXCIsIHVubG9hZEhhbmRsZXIgKTtcblx0fVxuXG5cdC8vIFN1cHBvcnQ6IElFIDwxMFxuXHQvLyBDaGVjayBpZiBnZXRFbGVtZW50QnlJZCByZXR1cm5zIGVsZW1lbnRzIGJ5IG5hbWVcblx0Ly8gVGhlIGJyb2tlbiBnZXRFbGVtZW50QnlJZCBtZXRob2RzIGRvbid0IHBpY2sgdXAgcHJvZ3JhbW1hdGljYWxseS1zZXQgbmFtZXMsXG5cdC8vIHNvIHVzZSBhIHJvdW5kYWJvdXQgZ2V0RWxlbWVudHNCeU5hbWUgdGVzdFxuXHRzdXBwb3J0LmdldEJ5SWQgPSBhc3NlcnQoIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRkb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoIGVsICkuaWQgPSBqUXVlcnkuZXhwYW5kbztcblx0XHRyZXR1cm4gIWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lIHx8XG5cdFx0XHQhZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoIGpRdWVyeS5leHBhbmRvICkubGVuZ3RoO1xuXHR9ICk7XG5cblx0Ly8gU3VwcG9ydDogSUUgOSBvbmx5XG5cdC8vIENoZWNrIHRvIHNlZSBpZiBpdCdzIHBvc3NpYmxlIHRvIGRvIG1hdGNoZXNTZWxlY3RvclxuXHQvLyBvbiBhIGRpc2Nvbm5lY3RlZCBub2RlLlxuXHRzdXBwb3J0LmRpc2Nvbm5lY3RlZE1hdGNoID0gYXNzZXJ0KCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0cmV0dXJuIG1hdGNoZXMuY2FsbCggZWwsIFwiKlwiICk7XG5cdH0gKTtcblxuXHQvLyBTdXBwb3J0OiBJRSA5IC0gMTErLCBFZGdlIDEyIC0gMTgrXG5cdC8vIElFL0VkZ2UgZG9uJ3Qgc3VwcG9ydCB0aGUgOnNjb3BlIHBzZXVkby1jbGFzcy5cblx0c3VwcG9ydC5zY29wZSA9IGFzc2VydCggZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIFwiOnNjb3BlXCIgKTtcblx0fSApO1xuXG5cdC8vIFN1cHBvcnQ6IENocm9tZSAxMDUgLSAxMTEgb25seSwgU2FmYXJpIDE1LjQgLSAxNi4zIG9ubHlcblx0Ly8gTWFrZSBzdXJlIHRoZSBgOmhhcygpYCBhcmd1bWVudCBpcyBwYXJzZWQgdW5mb3JnaXZpbmdseS5cblx0Ly8gV2UgaW5jbHVkZSBgKmAgaW4gdGhlIHRlc3QgdG8gZGV0ZWN0IGJ1Z2d5IGltcGxlbWVudGF0aW9ucyB0aGF0IGFyZVxuXHQvLyBfc2VsZWN0aXZlbHlfIGZvcmdpdmluZyAoc3BlY2lmaWNhbGx5IHdoZW4gdGhlIGxpc3QgaW5jbHVkZXMgYXQgbGVhc3Rcblx0Ly8gb25lIHZhbGlkIHNlbGVjdG9yKS5cblx0Ly8gTm90ZSB0aGF0IHdlIHRyZWF0IGNvbXBsZXRlIGxhY2sgb2Ygc3VwcG9ydCBmb3IgYDpoYXMoKWAgYXMgaWYgaXQgd2VyZVxuXHQvLyBzcGVjLWNvbXBsaWFudCBzdXBwb3J0LCB3aGljaCBpcyBmaW5lIGJlY2F1c2UgdXNlIG9mIGA6aGFzKClgIGluIHN1Y2hcblx0Ly8gZW52aXJvbm1lbnRzIHdpbGwgZmFpbCBpbiB0aGUgcVNBIHBhdGggYW5kIGZhbGwgYmFjayB0byBqUXVlcnkgdHJhdmVyc2FsXG5cdC8vIGFueXdheS5cblx0c3VwcG9ydC5jc3NIYXMgPSBhc3NlcnQoIGZ1bmN0aW9uKCkge1xuXHRcdHRyeSB7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcIjpoYXMoKiw6anFmYWtlKVwiICk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSBjYXRjaCAoIGUgKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH0gKTtcblxuXHQvLyBJRCBmaWx0ZXIgYW5kIGZpbmRcblx0aWYgKCBzdXBwb3J0LmdldEJ5SWQgKSB7XG5cdFx0RXhwci5maWx0ZXIuSUQgPSBmdW5jdGlvbiggaWQgKSB7XG5cdFx0XHR2YXIgYXR0cklkID0gaWQucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCBcImlkXCIgKSA9PT0gYXR0cklkO1xuXHRcdFx0fTtcblx0XHR9O1xuXHRcdEV4cHIuZmluZC5JRCA9IGZ1bmN0aW9uKCBpZCwgY29udGV4dCApIHtcblx0XHRcdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnRJc0hUTUwgKSB7XG5cdFx0XHRcdHZhciBlbGVtID0gY29udGV4dC5nZXRFbGVtZW50QnlJZCggaWQgKTtcblx0XHRcdFx0cmV0dXJuIGVsZW0gPyBbIGVsZW0gXSA6IFtdO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0RXhwci5maWx0ZXIuSUQgPSAgZnVuY3Rpb24oIGlkICkge1xuXHRcdFx0dmFyIGF0dHJJZCA9IGlkLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHZhciBub2RlID0gdHlwZW9mIGVsZW0uZ2V0QXR0cmlidXRlTm9kZSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuXHRcdFx0XHRcdGVsZW0uZ2V0QXR0cmlidXRlTm9kZSggXCJpZFwiICk7XG5cdFx0XHRcdHJldHVybiBub2RlICYmIG5vZGUudmFsdWUgPT09IGF0dHJJZDtcblx0XHRcdH07XG5cdFx0fTtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDYgLSA3IG9ubHlcblx0XHQvLyBnZXRFbGVtZW50QnlJZCBpcyBub3QgcmVsaWFibGUgYXMgYSBmaW5kIHNob3J0Y3V0XG5cdFx0RXhwci5maW5kLklEID0gZnVuY3Rpb24oIGlkLCBjb250ZXh0ICkge1xuXHRcdFx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50QnlJZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCApIHtcblx0XHRcdFx0dmFyIG5vZGUsIGksIGVsZW1zLFxuXHRcdFx0XHRcdGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKCBpZCApO1xuXG5cdFx0XHRcdGlmICggZWxlbSApIHtcblxuXHRcdFx0XHRcdC8vIFZlcmlmeSB0aGUgaWQgYXR0cmlidXRlXG5cdFx0XHRcdFx0bm9kZSA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZSggXCJpZFwiICk7XG5cdFx0XHRcdFx0aWYgKCBub2RlICYmIG5vZGUudmFsdWUgPT09IGlkICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFsgZWxlbSBdO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEZhbGwgYmFjayBvbiBnZXRFbGVtZW50c0J5TmFtZVxuXHRcdFx0XHRcdGVsZW1zID0gY29udGV4dC5nZXRFbGVtZW50c0J5TmFtZSggaWQgKTtcblx0XHRcdFx0XHRpID0gMDtcblx0XHRcdFx0XHR3aGlsZSAoICggZWxlbSA9IGVsZW1zWyBpKysgXSApICkge1xuXHRcdFx0XHRcdFx0bm9kZSA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZSggXCJpZFwiICk7XG5cdFx0XHRcdFx0XHRpZiAoIG5vZGUgJiYgbm9kZS52YWx1ZSA9PT0gaWQgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBbIGVsZW0gXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdC8vIFRhZ1xuXHRFeHByLmZpbmQuVEFHID0gZnVuY3Rpb24oIHRhZywgY29udGV4dCApIHtcblx0XHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdFx0cmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHRhZyApO1xuXG5cdFx0Ly8gRG9jdW1lbnRGcmFnbWVudCBub2RlcyBkb24ndCBoYXZlIGdFQlROXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoIHRhZyApO1xuXHRcdH1cblx0fTtcblxuXHQvLyBDbGFzc1xuXHRFeHByLmZpbmQuQ0xBU1MgPSBmdW5jdGlvbiggY2xhc3NOYW1lLCBjb250ZXh0ICkge1xuXHRcdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCApIHtcblx0XHRcdHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIGNsYXNzTmFtZSApO1xuXHRcdH1cblx0fTtcblxuXHQvKiBRU0EvbWF0Y2hlc1NlbGVjdG9yXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXHQvLyBRU0EgYW5kIG1hdGNoZXNTZWxlY3RvciBzdXBwb3J0XG5cblx0cmJ1Z2d5UVNBID0gW107XG5cblx0Ly8gQnVpbGQgUVNBIHJlZ2V4XG5cdC8vIFJlZ2V4IHN0cmF0ZWd5IGFkb3B0ZWQgZnJvbSBEaWVnbyBQZXJpbmlcblx0YXNzZXJ0KCBmdW5jdGlvbiggZWwgKSB7XG5cblx0XHR2YXIgaW5wdXQ7XG5cblx0XHRkb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoIGVsICkuaW5uZXJIVE1MID1cblx0XHRcdFwiPGEgaWQ9J1wiICsgZXhwYW5kbyArIFwiJyBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPlwiICtcblx0XHRcdFwiPHNlbGVjdCBpZD0nXCIgKyBleHBhbmRvICsgXCItXFxyXFxcXCcgZGlzYWJsZWQ9J2Rpc2FibGVkJz5cIiArXG5cdFx0XHRcIjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCI7XG5cblx0XHQvLyBTdXBwb3J0OiBpT1MgPD03IC0gOCBvbmx5XG5cdFx0Ly8gQm9vbGVhbiBhdHRyaWJ1dGVzIGFuZCBcInZhbHVlXCIgYXJlIG5vdCB0cmVhdGVkIGNvcnJlY3RseSBpbiBzb21lIFhNTCBkb2N1bWVudHNcblx0XHRpZiAoICFlbC5xdWVyeVNlbGVjdG9yQWxsKCBcIltzZWxlY3RlZF1cIiApLmxlbmd0aCApIHtcblx0XHRcdHJidWdneVFTQS5wdXNoKCBcIlxcXFxbXCIgKyB3aGl0ZXNwYWNlICsgXCIqKD86dmFsdWV8XCIgKyBib29sZWFucyArIFwiKVwiICk7XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydDogaU9TIDw9NyAtIDggb25seVxuXHRcdGlmICggIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoIFwiW2lkfj1cIiArIGV4cGFuZG8gKyBcIi1dXCIgKS5sZW5ndGggKSB7XG5cdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJ+PVwiICk7XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydDogaU9TIDggb25seVxuXHRcdC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzY4NTFcblx0XHQvLyBJbi1wYWdlIGBzZWxlY3RvciNpZCBzaWJsaW5nLWNvbWJpbmF0b3Igc2VsZWN0b3JgIGZhaWxzXG5cdFx0aWYgKCAhZWwucXVlcnlTZWxlY3RvckFsbCggXCJhI1wiICsgZXhwYW5kbyArIFwiKypcIiApLmxlbmd0aCApIHtcblx0XHRcdHJidWdneVFTQS5wdXNoKCBcIi4jLitbK35dXCIgKTtcblx0XHR9XG5cblx0XHQvLyBTdXBwb3J0OiBDaHJvbWUgPD0xMDUrLCBGaXJlZm94IDw9MTA0KywgU2FmYXJpIDw9MTUuNCtcblx0XHQvLyBJbiBzb21lIG9mIHRoZSBkb2N1bWVudCBraW5kcywgdGhlc2Ugc2VsZWN0b3JzIHdvdWxkbid0IHdvcmsgbmF0aXZlbHkuXG5cdFx0Ly8gVGhpcyBpcyBwcm9iYWJseSBPSyBidXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdlIHdhbnQgdG8gbWFpbnRhaW5cblx0XHQvLyBoYW5kbGluZyB0aGVtIHRocm91Z2ggalF1ZXJ5IHRyYXZlcnNhbCBpbiBqUXVlcnkgMy54LlxuXHRcdGlmICggIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoIFwiOmNoZWNrZWRcIiApLmxlbmd0aCApIHtcblx0XHRcdHJidWdneVFTQS5wdXNoKCBcIjpjaGVja2VkXCIgKTtcblx0XHR9XG5cblx0XHQvLyBTdXBwb3J0OiBXaW5kb3dzIDggTmF0aXZlIEFwcHNcblx0XHQvLyBUaGUgdHlwZSBhbmQgbmFtZSBhdHRyaWJ1dGVzIGFyZSByZXN0cmljdGVkIGR1cmluZyAuaW5uZXJIVE1MIGFzc2lnbm1lbnRcblx0XHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApO1xuXHRcdGlucHV0LnNldEF0dHJpYnV0ZSggXCJ0eXBlXCIsIFwiaGlkZGVuXCIgKTtcblx0XHRlbC5hcHBlbmRDaGlsZCggaW5wdXQgKS5zZXRBdHRyaWJ1dGUoIFwibmFtZVwiLCBcIkRcIiApO1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgOSAtIDExK1xuXHRcdC8vIElFJ3MgOmRpc2FibGVkIHNlbGVjdG9yIGRvZXMgbm90IHBpY2sgdXAgdGhlIGNoaWxkcmVuIG9mIGRpc2FibGVkIGZpZWxkc2V0c1xuXHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTEwNSssIEZpcmVmb3ggPD0xMDQrLCBTYWZhcmkgPD0xNS40K1xuXHRcdC8vIEluIHNvbWUgb2YgdGhlIGRvY3VtZW50IGtpbmRzLCB0aGVzZSBzZWxlY3RvcnMgd291bGRuJ3Qgd29yayBuYXRpdmVseS5cblx0XHQvLyBUaGlzIGlzIHByb2JhYmx5IE9LIGJ1dCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2Ugd2FudCB0byBtYWludGFpblxuXHRcdC8vIGhhbmRsaW5nIHRoZW0gdGhyb3VnaCBqUXVlcnkgdHJhdmVyc2FsIGluIGpRdWVyeSAzLnguXG5cdFx0ZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKCBlbCApLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRpZiAoIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoIFwiOmRpc2FibGVkXCIgKS5sZW5ndGggIT09IDIgKSB7XG5cdFx0XHRyYnVnZ3lRU0EucHVzaCggXCI6ZW5hYmxlZFwiLCBcIjpkaXNhYmxlZFwiICk7XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydDogSUUgMTErLCBFZGdlIDE1IC0gMTgrXG5cdFx0Ly8gSUUgMTEvRWRnZSBkb24ndCBmaW5kIGVsZW1lbnRzIG9uIGEgYFtuYW1lPScnXWAgcXVlcnkgaW4gc29tZSBjYXNlcy5cblx0XHQvLyBBZGRpbmcgYSB0ZW1wb3JhcnkgYXR0cmlidXRlIHRvIHRoZSBkb2N1bWVudCBiZWZvcmUgdGhlIHNlbGVjdGlvbiB3b3Jrc1xuXHRcdC8vIGFyb3VuZCB0aGUgaXNzdWUuXG5cdFx0Ly8gSW50ZXJlc3RpbmdseSwgSUUgMTAgJiBvbGRlciBkb24ndCBzZWVtIHRvIGhhdmUgdGhlIGlzc3VlLlxuXHRcdGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICk7XG5cdFx0aW5wdXQuc2V0QXR0cmlidXRlKCBcIm5hbWVcIiwgXCJcIiApO1xuXHRcdGVsLmFwcGVuZENoaWxkKCBpbnB1dCApO1xuXHRcdGlmICggIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoIFwiW25hbWU9JyddXCIgKS5sZW5ndGggKSB7XG5cdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJcXFxcW1wiICsgd2hpdGVzcGFjZSArIFwiKm5hbWVcIiArIHdoaXRlc3BhY2UgKyBcIio9XCIgK1xuXHRcdFx0XHR3aGl0ZXNwYWNlICsgXCIqKD86Jyd8XFxcIlxcXCIpXCIgKTtcblx0XHR9XG5cdH0gKTtcblxuXHRpZiAoICFzdXBwb3J0LmNzc0hhcyApIHtcblxuXHRcdC8vIFN1cHBvcnQ6IENocm9tZSAxMDUgLSAxMTArLCBTYWZhcmkgMTUuNCAtIDE2LjMrXG5cdFx0Ly8gT3VyIHJlZ3VsYXIgYHRyeS1jYXRjaGAgbWVjaGFuaXNtIGZhaWxzIHRvIGRldGVjdCBuYXRpdmVseS11bnN1cHBvcnRlZFxuXHRcdC8vIHBzZXVkby1jbGFzc2VzIGluc2lkZSBgOmhhcygpYCAoc3VjaCBhcyBgOmhhcyg6Y29udGFpbnMoXCJGb29cIikpYClcblx0XHQvLyBpbiBicm93c2VycyB0aGF0IHBhcnNlIHRoZSBgOmhhcygpYCBhcmd1bWVudCBhcyBhIGZvcmdpdmluZyBzZWxlY3RvciBsaXN0LlxuXHRcdC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9zZWxlY3RvcnMvI3JlbGF0aW9uYWwgbm93IHJlcXVpcmVzIHRoZSBhcmd1bWVudFxuXHRcdC8vIHRvIGJlIHBhcnNlZCB1bmZvcmdpdmluZ2x5LCBidXQgYnJvd3NlcnMgaGF2ZSBub3QgeWV0IGZ1bGx5IGFkanVzdGVkLlxuXHRcdHJidWdneVFTQS5wdXNoKCBcIjpoYXNcIiApO1xuXHR9XG5cblx0cmJ1Z2d5UVNBID0gcmJ1Z2d5UVNBLmxlbmd0aCAmJiBuZXcgUmVnRXhwKCByYnVnZ3lRU0Euam9pbiggXCJ8XCIgKSApO1xuXG5cdC8qIFNvcnRpbmdcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdC8vIERvY3VtZW50IG9yZGVyIHNvcnRpbmdcblx0c29ydE9yZGVyID0gZnVuY3Rpb24oIGEsIGIgKSB7XG5cblx0XHQvLyBGbGFnIGZvciBkdXBsaWNhdGUgcmVtb3ZhbFxuXHRcdGlmICggYSA9PT0gYiApIHtcblx0XHRcdGhhc0R1cGxpY2F0ZSA9IHRydWU7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHQvLyBTb3J0IG9uIG1ldGhvZCBleGlzdGVuY2UgaWYgb25seSBvbmUgaW5wdXQgaGFzIGNvbXBhcmVEb2N1bWVudFBvc2l0aW9uXG5cdFx0dmFyIGNvbXBhcmUgPSAhYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAtICFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO1xuXHRcdGlmICggY29tcGFyZSApIHtcblx0XHRcdHJldHVybiBjb21wYXJlO1xuXHRcdH1cblxuXHRcdC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBpZiBib3RoIGlucHV0cyBiZWxvbmcgdG8gdGhlIHNhbWUgZG9jdW1lbnRcblx0XHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0XHQvLyBJRS9FZGdlIHNvbWV0aW1lcyB0aHJvdyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIHN0cmljdC1jb21wYXJpbmdcblx0XHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdGNvbXBhcmUgPSAoIGEub3duZXJEb2N1bWVudCB8fCBhICkgPT0gKCBiLm93bmVyRG9jdW1lbnQgfHwgYiApID9cblx0XHRcdGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGIgKSA6XG5cblx0XHRcdC8vIE90aGVyd2lzZSB3ZSBrbm93IHRoZXkgYXJlIGRpc2Nvbm5lY3RlZFxuXHRcdFx0MTtcblxuXHRcdC8vIERpc2Nvbm5lY3RlZCBub2Rlc1xuXHRcdGlmICggY29tcGFyZSAmIDEgfHxcblx0XHRcdCggIXN1cHBvcnQuc29ydERldGFjaGVkICYmIGIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGEgKSA9PT0gY29tcGFyZSApICkge1xuXG5cdFx0XHQvLyBDaG9vc2UgdGhlIGZpcnN0IGVsZW1lbnQgdGhhdCBpcyByZWxhdGVkIHRvIG91ciBwcmVmZXJyZWQgZG9jdW1lbnRcblx0XHRcdC8vIFN1cHBvcnQ6IElFIDExKywgRWRnZSAxNyAtIDE4K1xuXHRcdFx0Ly8gSUUvRWRnZSBzb21ldGltZXMgdGhyb3cgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdFx0XHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdFx0XHRpZiAoIGEgPT09IGRvY3VtZW50IHx8IGEub3duZXJEb2N1bWVudCA9PSBwcmVmZXJyZWREb2MgJiZcblx0XHRcdFx0ZmluZC5jb250YWlucyggcHJlZmVycmVkRG9jLCBhICkgKSB7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgMTErLCBFZGdlIDE3IC0gMTgrXG5cdFx0XHQvLyBJRS9FZGdlIHNvbWV0aW1lcyB0aHJvdyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIHN0cmljdC1jb21wYXJpbmdcblx0XHRcdC8vIHR3byBkb2N1bWVudHM7IHNoYWxsb3cgY29tcGFyaXNvbnMgd29yay5cblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0XHRcdGlmICggYiA9PT0gZG9jdW1lbnQgfHwgYi5vd25lckRvY3VtZW50ID09IHByZWZlcnJlZERvYyAmJlxuXHRcdFx0XHRmaW5kLmNvbnRhaW5zKCBwcmVmZXJyZWREb2MsIGIgKSApIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE1haW50YWluIG9yaWdpbmFsIG9yZGVyXG5cdFx0XHRyZXR1cm4gc29ydElucHV0ID9cblx0XHRcdFx0KCBpbmRleE9mLmNhbGwoIHNvcnRJbnB1dCwgYSApIC0gaW5kZXhPZi5jYWxsKCBzb3J0SW5wdXQsIGIgKSApIDpcblx0XHRcdFx0MDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29tcGFyZSAmIDQgPyAtMSA6IDE7XG5cdH07XG5cblx0cmV0dXJuIGRvY3VtZW50O1xufVxuXG5maW5kLm1hdGNoZXMgPSBmdW5jdGlvbiggZXhwciwgZWxlbWVudHMgKSB7XG5cdHJldHVybiBmaW5kKCBleHByLCBudWxsLCBudWxsLCBlbGVtZW50cyApO1xufTtcblxuZmluZC5tYXRjaGVzU2VsZWN0b3IgPSBmdW5jdGlvbiggZWxlbSwgZXhwciApIHtcblx0c2V0RG9jdW1lbnQoIGVsZW0gKTtcblxuXHRpZiAoIGRvY3VtZW50SXNIVE1MICYmXG5cdFx0IW5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGVbIGV4cHIgKyBcIiBcIiBdICYmXG5cdFx0KCAhcmJ1Z2d5UVNBIHx8ICFyYnVnZ3lRU0EudGVzdCggZXhwciApICkgKSB7XG5cblx0XHR0cnkge1xuXHRcdFx0dmFyIHJldCA9IG1hdGNoZXMuY2FsbCggZWxlbSwgZXhwciApO1xuXG5cdFx0XHQvLyBJRSA5J3MgbWF0Y2hlc1NlbGVjdG9yIHJldHVybnMgZmFsc2Ugb24gZGlzY29ubmVjdGVkIG5vZGVzXG5cdFx0XHRpZiAoIHJldCB8fCBzdXBwb3J0LmRpc2Nvbm5lY3RlZE1hdGNoIHx8XG5cblx0XHRcdFx0XHQvLyBBcyB3ZWxsLCBkaXNjb25uZWN0ZWQgbm9kZXMgYXJlIHNhaWQgdG8gYmUgaW4gYSBkb2N1bWVudFxuXHRcdFx0XHRcdC8vIGZyYWdtZW50IGluIElFIDlcblx0XHRcdFx0XHRlbGVtLmRvY3VtZW50ICYmIGVsZW0uZG9jdW1lbnQubm9kZVR5cGUgIT09IDExICkge1xuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKCBlICkge1xuXHRcdFx0bm9ubmF0aXZlU2VsZWN0b3JDYWNoZSggZXhwciwgdHJ1ZSApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmaW5kKCBleHByLCBkb2N1bWVudCwgbnVsbCwgWyBlbGVtIF0gKS5sZW5ndGggPiAwO1xufTtcblxuZmluZC5jb250YWlucyA9IGZ1bmN0aW9uKCBjb250ZXh0LCBlbGVtICkge1xuXG5cdC8vIFNldCBkb2N1bWVudCB2YXJzIGlmIG5lZWRlZFxuXHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0Ly8gSUUvRWRnZSBzb21ldGltZXMgdGhyb3cgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdC8vIHR3byBkb2N1bWVudHM7IHNoYWxsb3cgY29tcGFyaXNvbnMgd29yay5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRpZiAoICggY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQgKSAhPSBkb2N1bWVudCApIHtcblx0XHRzZXREb2N1bWVudCggY29udGV4dCApO1xuXHR9XG5cdHJldHVybiBqUXVlcnkuY29udGFpbnMoIGNvbnRleHQsIGVsZW0gKTtcbn07XG5cblxuZmluZC5hdHRyID0gZnVuY3Rpb24oIGVsZW0sIG5hbWUgKSB7XG5cblx0Ly8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG5cdC8vIFN1cHBvcnQ6IElFIDExKywgRWRnZSAxNyAtIDE4K1xuXHQvLyBJRS9FZGdlIHNvbWV0aW1lcyB0aHJvdyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIHN0cmljdC1jb21wYXJpbmdcblx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdGlmICggKCBlbGVtLm93bmVyRG9jdW1lbnQgfHwgZWxlbSApICE9IGRvY3VtZW50ICkge1xuXHRcdHNldERvY3VtZW50KCBlbGVtICk7XG5cdH1cblxuXHR2YXIgZm4gPSBFeHByLmF0dHJIYW5kbGVbIG5hbWUudG9Mb3dlckNhc2UoKSBdLFxuXG5cdFx0Ly8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBPYmplY3QucHJvdG90eXBlIHByb3BlcnRpZXMgKHNlZSB0cmFjLTEzODA3KVxuXHRcdHZhbCA9IGZuICYmIGhhc093bi5jYWxsKCBFeHByLmF0dHJIYW5kbGUsIG5hbWUudG9Mb3dlckNhc2UoKSApID9cblx0XHRcdGZuKCBlbGVtLCBuYW1lLCAhZG9jdW1lbnRJc0hUTUwgKSA6XG5cdFx0XHR1bmRlZmluZWQ7XG5cblx0aWYgKCB2YWwgIT09IHVuZGVmaW5lZCApIHtcblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCBuYW1lICk7XG59O1xuXG5maW5kLmVycm9yID0gZnVuY3Rpb24oIG1zZyApIHtcblx0dGhyb3cgbmV3IEVycm9yKCBcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiICsgbXNnICk7XG59O1xuXG4vKipcbiAqIERvY3VtZW50IHNvcnRpbmcgYW5kIHJlbW92aW5nIGR1cGxpY2F0ZXNcbiAqIEBwYXJhbSB7QXJyYXlMaWtlfSByZXN1bHRzXG4gKi9cbmpRdWVyeS51bmlxdWVTb3J0ID0gZnVuY3Rpb24oIHJlc3VsdHMgKSB7XG5cdHZhciBlbGVtLFxuXHRcdGR1cGxpY2F0ZXMgPSBbXSxcblx0XHRqID0gMCxcblx0XHRpID0gMDtcblxuXHQvLyBVbmxlc3Mgd2UgKmtub3cqIHdlIGNhbiBkZXRlY3QgZHVwbGljYXRlcywgYXNzdW1lIHRoZWlyIHByZXNlbmNlXG5cdC8vXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjArXG5cdC8vIFRlc3RpbmcgZm9yIGRldGVjdGluZyBkdXBsaWNhdGVzIGlzIHVucHJlZGljdGFibGUgc28gaW5zdGVhZCBhc3N1bWUgd2UgY2FuJ3Rcblx0Ly8gZGVwZW5kIG9uIGR1cGxpY2F0ZSBkZXRlY3Rpb24gaW4gYWxsIGJyb3dzZXJzIHdpdGhvdXQgYSBzdGFibGUgc29ydC5cblx0aGFzRHVwbGljYXRlID0gIXN1cHBvcnQuc29ydFN0YWJsZTtcblx0c29ydElucHV0ID0gIXN1cHBvcnQuc29ydFN0YWJsZSAmJiBzbGljZS5jYWxsKCByZXN1bHRzLCAwICk7XG5cdHNvcnQuY2FsbCggcmVzdWx0cywgc29ydE9yZGVyICk7XG5cblx0aWYgKCBoYXNEdXBsaWNhdGUgKSB7XG5cdFx0d2hpbGUgKCAoIGVsZW0gPSByZXN1bHRzWyBpKysgXSApICkge1xuXHRcdFx0aWYgKCBlbGVtID09PSByZXN1bHRzWyBpIF0gKSB7XG5cdFx0XHRcdGogPSBkdXBsaWNhdGVzLnB1c2goIGkgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0d2hpbGUgKCBqLS0gKSB7XG5cdFx0XHRzcGxpY2UuY2FsbCggcmVzdWx0cywgZHVwbGljYXRlc1sgaiBdLCAxICk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2xlYXIgaW5wdXQgYWZ0ZXIgc29ydGluZyB0byByZWxlYXNlIG9iamVjdHNcblx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvc2l6emxlL3B1bGwvMjI1XG5cdHNvcnRJbnB1dCA9IG51bGw7XG5cblx0cmV0dXJuIHJlc3VsdHM7XG59O1xuXG5qUXVlcnkuZm4udW5pcXVlU29ydCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIGpRdWVyeS51bmlxdWVTb3J0KCBzbGljZS5hcHBseSggdGhpcyApICkgKTtcbn07XG5cbkV4cHIgPSBqUXVlcnkuZXhwciA9IHtcblxuXHQvLyBDYW4gYmUgYWRqdXN0ZWQgYnkgdGhlIHVzZXJcblx0Y2FjaGVMZW5ndGg6IDUwLFxuXG5cdGNyZWF0ZVBzZXVkbzogbWFya0Z1bmN0aW9uLFxuXG5cdG1hdGNoOiBtYXRjaEV4cHIsXG5cblx0YXR0ckhhbmRsZToge30sXG5cblx0ZmluZDoge30sXG5cblx0cmVsYXRpdmU6IHtcblx0XHRcIj5cIjogeyBkaXI6IFwicGFyZW50Tm9kZVwiLCBmaXJzdDogdHJ1ZSB9LFxuXHRcdFwiIFwiOiB7IGRpcjogXCJwYXJlbnROb2RlXCIgfSxcblx0XHRcIitcIjogeyBkaXI6IFwicHJldmlvdXNTaWJsaW5nXCIsIGZpcnN0OiB0cnVlIH0sXG5cdFx0XCJ+XCI6IHsgZGlyOiBcInByZXZpb3VzU2libGluZ1wiIH1cblx0fSxcblxuXHRwcmVGaWx0ZXI6IHtcblx0XHRBVFRSOiBmdW5jdGlvbiggbWF0Y2ggKSB7XG5cdFx0XHRtYXRjaFsgMSBdID0gbWF0Y2hbIDEgXS5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXG5cdFx0XHQvLyBNb3ZlIHRoZSBnaXZlbiB2YWx1ZSB0byBtYXRjaFszXSB3aGV0aGVyIHF1b3RlZCBvciB1bnF1b3RlZFxuXHRcdFx0bWF0Y2hbIDMgXSA9ICggbWF0Y2hbIDMgXSB8fCBtYXRjaFsgNCBdIHx8IG1hdGNoWyA1IF0gfHwgXCJcIiApXG5cdFx0XHRcdC5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXG5cdFx0XHRpZiAoIG1hdGNoWyAyIF0gPT09IFwifj1cIiApIHtcblx0XHRcdFx0bWF0Y2hbIDMgXSA9IFwiIFwiICsgbWF0Y2hbIDMgXSArIFwiIFwiO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbWF0Y2guc2xpY2UoIDAsIDQgKTtcblx0XHR9LFxuXG5cdFx0Q0hJTEQ6IGZ1bmN0aW9uKCBtYXRjaCApIHtcblxuXHRcdFx0LyogbWF0Y2hlcyBmcm9tIG1hdGNoRXhwcltcIkNISUxEXCJdXG5cdFx0XHRcdDEgdHlwZSAob25seXxudGh8Li4uKVxuXHRcdFx0XHQyIHdoYXQgKGNoaWxkfG9mLXR5cGUpXG5cdFx0XHRcdDMgYXJndW1lbnQgKGV2ZW58b2RkfFxcZCp8XFxkKm4oWystXVxcZCspP3wuLi4pXG5cdFx0XHRcdDQgeG4tY29tcG9uZW50IG9mIHhuK3kgYXJndW1lbnQgKFsrLV0/XFxkKm58KVxuXHRcdFx0XHQ1IHNpZ24gb2YgeG4tY29tcG9uZW50XG5cdFx0XHRcdDYgeCBvZiB4bi1jb21wb25lbnRcblx0XHRcdFx0NyBzaWduIG9mIHktY29tcG9uZW50XG5cdFx0XHRcdDggeSBvZiB5LWNvbXBvbmVudFxuXHRcdFx0Ki9cblx0XHRcdG1hdGNoWyAxIF0gPSBtYXRjaFsgMSBdLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRcdGlmICggbWF0Y2hbIDEgXS5zbGljZSggMCwgMyApID09PSBcIm50aFwiICkge1xuXG5cdFx0XHRcdC8vIG50aC0qIHJlcXVpcmVzIGFyZ3VtZW50XG5cdFx0XHRcdGlmICggIW1hdGNoWyAzIF0gKSB7XG5cdFx0XHRcdFx0ZmluZC5lcnJvciggbWF0Y2hbIDAgXSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gbnVtZXJpYyB4IGFuZCB5IHBhcmFtZXRlcnMgZm9yIEV4cHIuZmlsdGVyLkNISUxEXG5cdFx0XHRcdC8vIHJlbWVtYmVyIHRoYXQgZmFsc2UvdHJ1ZSBjYXN0IHJlc3BlY3RpdmVseSB0byAwLzFcblx0XHRcdFx0bWF0Y2hbIDQgXSA9ICsoIG1hdGNoWyA0IF0gP1xuXHRcdFx0XHRcdG1hdGNoWyA1IF0gKyAoIG1hdGNoWyA2IF0gfHwgMSApIDpcblx0XHRcdFx0XHQyICogKCBtYXRjaFsgMyBdID09PSBcImV2ZW5cIiB8fCBtYXRjaFsgMyBdID09PSBcIm9kZFwiIClcblx0XHRcdFx0KTtcblx0XHRcdFx0bWF0Y2hbIDUgXSA9ICsoICggbWF0Y2hbIDcgXSArIG1hdGNoWyA4IF0gKSB8fCBtYXRjaFsgMyBdID09PSBcIm9kZFwiICk7XG5cblx0XHRcdC8vIG90aGVyIHR5cGVzIHByb2hpYml0IGFyZ3VtZW50c1xuXHRcdFx0fSBlbHNlIGlmICggbWF0Y2hbIDMgXSApIHtcblx0XHRcdFx0ZmluZC5lcnJvciggbWF0Y2hbIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0fSxcblxuXHRcdFBTRVVETzogZnVuY3Rpb24oIG1hdGNoICkge1xuXHRcdFx0dmFyIGV4Y2Vzcyxcblx0XHRcdFx0dW5xdW90ZWQgPSAhbWF0Y2hbIDYgXSAmJiBtYXRjaFsgMiBdO1xuXG5cdFx0XHRpZiAoIG1hdGNoRXhwci5DSElMRC50ZXN0KCBtYXRjaFsgMCBdICkgKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBY2NlcHQgcXVvdGVkIGFyZ3VtZW50cyBhcy1pc1xuXHRcdFx0aWYgKCBtYXRjaFsgMyBdICkge1xuXHRcdFx0XHRtYXRjaFsgMiBdID0gbWF0Y2hbIDQgXSB8fCBtYXRjaFsgNSBdIHx8IFwiXCI7XG5cblx0XHRcdC8vIFN0cmlwIGV4Y2VzcyBjaGFyYWN0ZXJzIGZyb20gdW5xdW90ZWQgYXJndW1lbnRzXG5cdFx0XHR9IGVsc2UgaWYgKCB1bnF1b3RlZCAmJiBycHNldWRvLnRlc3QoIHVucXVvdGVkICkgJiZcblxuXHRcdFx0XHQvLyBHZXQgZXhjZXNzIGZyb20gdG9rZW5pemUgKHJlY3Vyc2l2ZWx5KVxuXHRcdFx0XHQoIGV4Y2VzcyA9IHRva2VuaXplKCB1bnF1b3RlZCwgdHJ1ZSApICkgJiZcblxuXHRcdFx0XHQvLyBhZHZhbmNlIHRvIHRoZSBuZXh0IGNsb3NpbmcgcGFyZW50aGVzaXNcblx0XHRcdFx0KCBleGNlc3MgPSB1bnF1b3RlZC5pbmRleE9mKCBcIilcIiwgdW5xdW90ZWQubGVuZ3RoIC0gZXhjZXNzICkgLSB1bnF1b3RlZC5sZW5ndGggKSApIHtcblxuXHRcdFx0XHQvLyBleGNlc3MgaXMgYSBuZWdhdGl2ZSBpbmRleFxuXHRcdFx0XHRtYXRjaFsgMCBdID0gbWF0Y2hbIDAgXS5zbGljZSggMCwgZXhjZXNzICk7XG5cdFx0XHRcdG1hdGNoWyAyIF0gPSB1bnF1b3RlZC5zbGljZSggMCwgZXhjZXNzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJldHVybiBvbmx5IGNhcHR1cmVzIG5lZWRlZCBieSB0aGUgcHNldWRvIGZpbHRlciBtZXRob2QgKHR5cGUgYW5kIGFyZ3VtZW50KVxuXHRcdFx0cmV0dXJuIG1hdGNoLnNsaWNlKCAwLCAzICk7XG5cdFx0fVxuXHR9LFxuXG5cdGZpbHRlcjoge1xuXG5cdFx0VEFHOiBmdW5jdGlvbiggbm9kZU5hbWVTZWxlY3RvciApIHtcblx0XHRcdHZhciBleHBlY3RlZE5vZGVOYW1lID0gbm9kZU5hbWVTZWxlY3Rvci5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRyZXR1cm4gbm9kZU5hbWVTZWxlY3RvciA9PT0gXCIqXCIgP1xuXHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSA6XG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRcdHJldHVybiBub2RlTmFtZSggZWxlbSwgZXhwZWN0ZWROb2RlTmFtZSApO1xuXHRcdFx0XHR9O1xuXHRcdH0sXG5cblx0XHRDTEFTUzogZnVuY3Rpb24oIGNsYXNzTmFtZSApIHtcblx0XHRcdHZhciBwYXR0ZXJuID0gY2xhc3NDYWNoZVsgY2xhc3NOYW1lICsgXCIgXCIgXTtcblxuXHRcdFx0cmV0dXJuIHBhdHRlcm4gfHxcblx0XHRcdFx0KCBwYXR0ZXJuID0gbmV3IFJlZ0V4cCggXCIoXnxcIiArIHdoaXRlc3BhY2UgKyBcIilcIiArIGNsYXNzTmFtZSArXG5cdFx0XHRcdFx0XCIoXCIgKyB3aGl0ZXNwYWNlICsgXCJ8JClcIiApICkgJiZcblx0XHRcdFx0Y2xhc3NDYWNoZSggY2xhc3NOYW1lLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0XHRyZXR1cm4gcGF0dGVybi50ZXN0KFxuXHRcdFx0XHRcdFx0dHlwZW9mIGVsZW0uY2xhc3NOYW1lID09PSBcInN0cmluZ1wiICYmIGVsZW0uY2xhc3NOYW1lIHx8XG5cdFx0XHRcdFx0XHRcdHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuXHRcdFx0XHRcdFx0XHRcdGVsZW0uZ2V0QXR0cmlidXRlKCBcImNsYXNzXCIgKSB8fFxuXHRcdFx0XHRcdFx0XHRcIlwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSApO1xuXHRcdH0sXG5cblx0XHRBVFRSOiBmdW5jdGlvbiggbmFtZSwgb3BlcmF0b3IsIGNoZWNrICkge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gZmluZC5hdHRyKCBlbGVtLCBuYW1lICk7XG5cblx0XHRcdFx0aWYgKCByZXN1bHQgPT0gbnVsbCApIHtcblx0XHRcdFx0XHRyZXR1cm4gb3BlcmF0b3IgPT09IFwiIT1cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoICFvcGVyYXRvciApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlc3VsdCArPSBcIlwiO1xuXG5cdFx0XHRcdGlmICggb3BlcmF0b3IgPT09IFwiPVwiICkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQgPT09IGNoZWNrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggb3BlcmF0b3IgPT09IFwiIT1cIiApIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0ICE9PSBjaGVjaztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIG9wZXJhdG9yID09PSBcIl49XCIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNoZWNrICYmIHJlc3VsdC5pbmRleE9mKCBjaGVjayApID09PSAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggb3BlcmF0b3IgPT09IFwiKj1cIiApIHtcblx0XHRcdFx0XHRyZXR1cm4gY2hlY2sgJiYgcmVzdWx0LmluZGV4T2YoIGNoZWNrICkgPiAtMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIG9wZXJhdG9yID09PSBcIiQ9XCIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNoZWNrICYmIHJlc3VsdC5zbGljZSggLWNoZWNrLmxlbmd0aCApID09PSBjaGVjaztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIG9wZXJhdG9yID09PSBcIn49XCIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuICggXCIgXCIgKyByZXN1bHQucmVwbGFjZSggcndoaXRlc3BhY2UsIFwiIFwiICkgKyBcIiBcIiApXG5cdFx0XHRcdFx0XHQuaW5kZXhPZiggY2hlY2sgKSA+IC0xO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggb3BlcmF0b3IgPT09IFwifD1cIiApIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0ID09PSBjaGVjayB8fCByZXN1bHQuc2xpY2UoIDAsIGNoZWNrLmxlbmd0aCArIDEgKSA9PT0gY2hlY2sgKyBcIi1cIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH07XG5cdFx0fSxcblxuXHRcdENISUxEOiBmdW5jdGlvbiggdHlwZSwgd2hhdCwgX2FyZ3VtZW50LCBmaXJzdCwgbGFzdCApIHtcblx0XHRcdHZhciBzaW1wbGUgPSB0eXBlLnNsaWNlKCAwLCAzICkgIT09IFwibnRoXCIsXG5cdFx0XHRcdGZvcndhcmQgPSB0eXBlLnNsaWNlKCAtNCApICE9PSBcImxhc3RcIixcblx0XHRcdFx0b2ZUeXBlID0gd2hhdCA9PT0gXCJvZi10eXBlXCI7XG5cblx0XHRcdHJldHVybiBmaXJzdCA9PT0gMSAmJiBsYXN0ID09PSAwID9cblxuXHRcdFx0XHQvLyBTaG9ydGN1dCBmb3IgOm50aC0qKG4pXG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRcdHJldHVybiAhIWVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdFx0fSA6XG5cblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0sIF9jb250ZXh0LCB4bWwgKSB7XG5cdFx0XHRcdFx0dmFyIGNhY2hlLCBvdXRlckNhY2hlLCBub2RlLCBub2RlSW5kZXgsIHN0YXJ0LFxuXHRcdFx0XHRcdFx0ZGlyID0gc2ltcGxlICE9PSBmb3J3YXJkID8gXCJuZXh0U2libGluZ1wiIDogXCJwcmV2aW91c1NpYmxpbmdcIixcblx0XHRcdFx0XHRcdHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZSxcblx0XHRcdFx0XHRcdG5hbWUgPSBvZlR5cGUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0XHRcdFx0dXNlQ2FjaGUgPSAheG1sICYmICFvZlR5cGUsXG5cdFx0XHRcdFx0XHRkaWZmID0gZmFsc2U7XG5cblx0XHRcdFx0XHRpZiAoIHBhcmVudCApIHtcblxuXHRcdFx0XHRcdFx0Ly8gOihmaXJzdHxsYXN0fG9ubHkpLShjaGlsZHxvZi10eXBlKVxuXHRcdFx0XHRcdFx0aWYgKCBzaW1wbGUgKSB7XG5cdFx0XHRcdFx0XHRcdHdoaWxlICggZGlyICkge1xuXHRcdFx0XHRcdFx0XHRcdG5vZGUgPSBlbGVtO1xuXHRcdFx0XHRcdFx0XHRcdHdoaWxlICggKCBub2RlID0gbm9kZVsgZGlyIF0gKSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggb2ZUeXBlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZU5hbWUoIG5vZGUsIG5hbWUgKSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGUubm9kZVR5cGUgPT09IDEgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdC8vIFJldmVyc2UgZGlyZWN0aW9uIGZvciA6b25seS0qIChpZiB3ZSBoYXZlbid0IHlldCBkb25lIHNvKVxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0ID0gZGlyID0gdHlwZSA9PT0gXCJvbmx5XCIgJiYgIXN0YXJ0ICYmIFwibmV4dFNpYmxpbmdcIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0c3RhcnQgPSBbIGZvcndhcmQgPyBwYXJlbnQuZmlyc3RDaGlsZCA6IHBhcmVudC5sYXN0Q2hpbGQgXTtcblxuXHRcdFx0XHRcdFx0Ly8gbm9uLXhtbCA6bnRoLWNoaWxkKC4uLikgc3RvcmVzIGNhY2hlIGRhdGEgb24gYHBhcmVudGBcblx0XHRcdFx0XHRcdGlmICggZm9yd2FyZCAmJiB1c2VDYWNoZSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBTZWVrIGBlbGVtYCBmcm9tIGEgcHJldmlvdXNseS1jYWNoZWQgaW5kZXhcblx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZSA9IHBhcmVudFsgZXhwYW5kbyBdIHx8ICggcGFyZW50WyBleHBhbmRvIF0gPSB7fSApO1xuXHRcdFx0XHRcdFx0XHRjYWNoZSA9IG91dGVyQ2FjaGVbIHR5cGUgXSB8fCBbXTtcblx0XHRcdFx0XHRcdFx0bm9kZUluZGV4ID0gY2FjaGVbIDAgXSA9PT0gZGlycnVucyAmJiBjYWNoZVsgMSBdO1xuXHRcdFx0XHRcdFx0XHRkaWZmID0gbm9kZUluZGV4ICYmIGNhY2hlWyAyIF07XG5cdFx0XHRcdFx0XHRcdG5vZGUgPSBub2RlSW5kZXggJiYgcGFyZW50LmNoaWxkTm9kZXNbIG5vZGVJbmRleCBdO1xuXG5cdFx0XHRcdFx0XHRcdHdoaWxlICggKCBub2RlID0gKytub2RlSW5kZXggJiYgbm9kZSAmJiBub2RlWyBkaXIgXSB8fFxuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gRmFsbGJhY2sgdG8gc2Vla2luZyBgZWxlbWAgZnJvbSB0aGUgc3RhcnRcblx0XHRcdFx0XHRcdFx0XHQoIGRpZmYgPSBub2RlSW5kZXggPSAwICkgfHwgc3RhcnQucG9wKCkgKSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFdoZW4gZm91bmQsIGNhY2hlIGluZGV4ZXMgb24gYHBhcmVudGAgYW5kIGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBub2RlLm5vZGVUeXBlID09PSAxICYmICsrZGlmZiAmJiBub2RlID09PSBlbGVtICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZVsgdHlwZSBdID0gWyBkaXJydW5zLCBub2RlSW5kZXgsIGRpZmYgXTtcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFVzZSBwcmV2aW91c2x5LWNhY2hlZCBlbGVtZW50IGluZGV4IGlmIGF2YWlsYWJsZVxuXHRcdFx0XHRcdFx0XHRpZiAoIHVzZUNhY2hlICkge1xuXHRcdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBlbGVtWyBleHBhbmRvIF0gfHwgKCBlbGVtWyBleHBhbmRvIF0gPSB7fSApO1xuXHRcdFx0XHRcdFx0XHRcdGNhY2hlID0gb3V0ZXJDYWNoZVsgdHlwZSBdIHx8IFtdO1xuXHRcdFx0XHRcdFx0XHRcdG5vZGVJbmRleCA9IGNhY2hlWyAwIF0gPT09IGRpcnJ1bnMgJiYgY2FjaGVbIDEgXTtcblx0XHRcdFx0XHRcdFx0XHRkaWZmID0gbm9kZUluZGV4O1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Ly8geG1sIDpudGgtY2hpbGQoLi4uKVxuXHRcdFx0XHRcdFx0XHQvLyBvciA6bnRoLWxhc3QtY2hpbGQoLi4uKSBvciA6bnRoKC1sYXN0KT8tb2YtdHlwZSguLi4pXG5cdFx0XHRcdFx0XHRcdGlmICggZGlmZiA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBVc2UgdGhlIHNhbWUgbG9vcCBhcyBhYm92ZSB0byBzZWVrIGBlbGVtYCBmcm9tIHRoZSBzdGFydFxuXHRcdFx0XHRcdFx0XHRcdHdoaWxlICggKCBub2RlID0gKytub2RlSW5kZXggJiYgbm9kZSAmJiBub2RlWyBkaXIgXSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0KCBkaWZmID0gbm9kZUluZGV4ID0gMCApIHx8IHN0YXJ0LnBvcCgpICkgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmICggKCBvZlR5cGUgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRub2RlTmFtZSggbm9kZSwgbmFtZSApIDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZS5ub2RlVHlwZSA9PT0gMSApICYmXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCsrZGlmZiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBDYWNoZSB0aGUgaW5kZXggb2YgZWFjaCBlbmNvdW50ZXJlZCBlbGVtZW50XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggdXNlQ2FjaGUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZSA9IG5vZGVbIGV4cGFuZG8gXSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KCBub2RlWyBleHBhbmRvIF0gPSB7fSApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGVbIHR5cGUgXSA9IFsgZGlycnVucywgZGlmZiBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBub2RlID09PSBlbGVtICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEluY29ycG9yYXRlIHRoZSBvZmZzZXQsIHRoZW4gY2hlY2sgYWdhaW5zdCBjeWNsZSBzaXplXG5cdFx0XHRcdFx0XHRkaWZmIC09IGxhc3Q7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZGlmZiA9PT0gZmlyc3QgfHwgKCBkaWZmICUgZmlyc3QgPT09IDAgJiYgZGlmZiAvIGZpcnN0ID49IDAgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0fSxcblxuXHRcdFBTRVVETzogZnVuY3Rpb24oIHBzZXVkbywgYXJndW1lbnQgKSB7XG5cblx0XHRcdC8vIHBzZXVkby1jbGFzcyBuYW1lcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZVxuXHRcdFx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jcHNldWRvLWNsYXNzZXNcblx0XHRcdC8vIFByaW9yaXRpemUgYnkgY2FzZSBzZW5zaXRpdml0eSBpbiBjYXNlIGN1c3RvbSBwc2V1ZG9zIGFyZSBhZGRlZCB3aXRoIHVwcGVyY2FzZSBsZXR0ZXJzXG5cdFx0XHQvLyBSZW1lbWJlciB0aGF0IHNldEZpbHRlcnMgaW5oZXJpdHMgZnJvbSBwc2V1ZG9zXG5cdFx0XHR2YXIgYXJncyxcblx0XHRcdFx0Zm4gPSBFeHByLnBzZXVkb3NbIHBzZXVkbyBdIHx8IEV4cHIuc2V0RmlsdGVyc1sgcHNldWRvLnRvTG93ZXJDYXNlKCkgXSB8fFxuXHRcdFx0XHRcdGZpbmQuZXJyb3IoIFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIiArIHBzZXVkbyApO1xuXG5cdFx0XHQvLyBUaGUgdXNlciBtYXkgdXNlIGNyZWF0ZVBzZXVkbyB0byBpbmRpY2F0ZSB0aGF0XG5cdFx0XHQvLyBhcmd1bWVudHMgYXJlIG5lZWRlZCB0byBjcmVhdGUgdGhlIGZpbHRlciBmdW5jdGlvblxuXHRcdFx0Ly8ganVzdCBhcyBqUXVlcnkgZG9lc1xuXHRcdFx0aWYgKCBmblsgZXhwYW5kbyBdICkge1xuXHRcdFx0XHRyZXR1cm4gZm4oIGFyZ3VtZW50ICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEJ1dCBtYWludGFpbiBzdXBwb3J0IGZvciBvbGQgc2lnbmF0dXJlc1xuXHRcdFx0aWYgKCBmbi5sZW5ndGggPiAxICkge1xuXHRcdFx0XHRhcmdzID0gWyBwc2V1ZG8sIHBzZXVkbywgXCJcIiwgYXJndW1lbnQgXTtcblx0XHRcdFx0cmV0dXJuIEV4cHIuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eSggcHNldWRvLnRvTG93ZXJDYXNlKCkgKSA/XG5cdFx0XHRcdFx0bWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggc2VlZCwgbWF0Y2hlcyApIHtcblx0XHRcdFx0XHRcdHZhciBpZHgsXG5cdFx0XHRcdFx0XHRcdG1hdGNoZWQgPSBmbiggc2VlZCwgYXJndW1lbnQgKSxcblx0XHRcdFx0XHRcdFx0aSA9IG1hdGNoZWQubGVuZ3RoO1xuXHRcdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRcdGlkeCA9IGluZGV4T2YuY2FsbCggc2VlZCwgbWF0Y2hlZFsgaSBdICk7XG5cdFx0XHRcdFx0XHRcdHNlZWRbIGlkeCBdID0gISggbWF0Y2hlc1sgaWR4IF0gPSBtYXRjaGVkWyBpIF0gKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9ICkgOlxuXHRcdFx0XHRcdGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZuKCBlbGVtLCAwLCBhcmdzICk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZuO1xuXHRcdH1cblx0fSxcblxuXHRwc2V1ZG9zOiB7XG5cblx0XHQvLyBQb3RlbnRpYWxseSBjb21wbGV4IHBzZXVkb3Ncblx0XHRub3Q6IG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXG5cdFx0XHQvLyBUcmltIHRoZSBzZWxlY3RvciBwYXNzZWQgdG8gY29tcGlsZVxuXHRcdFx0Ly8gdG8gYXZvaWQgdHJlYXRpbmcgbGVhZGluZyBhbmQgdHJhaWxpbmdcblx0XHRcdC8vIHNwYWNlcyBhcyBjb21iaW5hdG9yc1xuXHRcdFx0dmFyIGlucHV0ID0gW10sXG5cdFx0XHRcdHJlc3VsdHMgPSBbXSxcblx0XHRcdFx0bWF0Y2hlciA9IGNvbXBpbGUoIHNlbGVjdG9yLnJlcGxhY2UoIHJ0cmltQ1NTLCBcIiQxXCIgKSApO1xuXG5cdFx0XHRyZXR1cm4gbWF0Y2hlclsgZXhwYW5kbyBdID9cblx0XHRcdFx0bWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggc2VlZCwgbWF0Y2hlcywgX2NvbnRleHQsIHhtbCApIHtcblx0XHRcdFx0XHR2YXIgZWxlbSxcblx0XHRcdFx0XHRcdHVubWF0Y2hlZCA9IG1hdGNoZXIoIHNlZWQsIG51bGwsIHhtbCwgW10gKSxcblx0XHRcdFx0XHRcdGkgPSBzZWVkLmxlbmd0aDtcblxuXHRcdFx0XHRcdC8vIE1hdGNoIGVsZW1lbnRzIHVubWF0Y2hlZCBieSBgbWF0Y2hlcmBcblx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRcdGlmICggKCBlbGVtID0gdW5tYXRjaGVkWyBpIF0gKSApIHtcblx0XHRcdFx0XHRcdFx0c2VlZFsgaSBdID0gISggbWF0Y2hlc1sgaSBdID0gZWxlbSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApIDpcblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0sIF9jb250ZXh0LCB4bWwgKSB7XG5cdFx0XHRcdFx0aW5wdXRbIDAgXSA9IGVsZW07XG5cdFx0XHRcdFx0bWF0Y2hlciggaW5wdXQsIG51bGwsIHhtbCwgcmVzdWx0cyApO1xuXG5cdFx0XHRcdFx0Ly8gRG9uJ3Qga2VlcCB0aGUgZWxlbWVudFxuXHRcdFx0XHRcdC8vIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9zaXp6bGUvaXNzdWVzLzI5OSlcblx0XHRcdFx0XHRpbnB1dFsgMCBdID0gbnVsbDtcblx0XHRcdFx0XHRyZXR1cm4gIXJlc3VsdHMucG9wKCk7XG5cdFx0XHRcdH07XG5cdFx0fSApLFxuXG5cdFx0aGFzOiBtYXJrRnVuY3Rpb24oIGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuIGZpbmQoIHNlbGVjdG9yLCBlbGVtICkubGVuZ3RoID4gMDtcblx0XHRcdH07XG5cdFx0fSApLFxuXG5cdFx0Y29udGFpbnM6IG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIHRleHQgKSB7XG5cdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRyZXR1cm4gKCBlbGVtLnRleHRDb250ZW50IHx8IGpRdWVyeS50ZXh0KCBlbGVtICkgKS5pbmRleE9mKCB0ZXh0ICkgPiAtMTtcblx0XHRcdH07XG5cdFx0fSApLFxuXG5cdFx0Ly8gXCJXaGV0aGVyIGFuIGVsZW1lbnQgaXMgcmVwcmVzZW50ZWQgYnkgYSA6bGFuZygpIHNlbGVjdG9yXG5cdFx0Ly8gaXMgYmFzZWQgc29sZWx5IG9uIHRoZSBlbGVtZW50J3MgbGFuZ3VhZ2UgdmFsdWVcblx0XHQvLyBiZWluZyBlcXVhbCB0byB0aGUgaWRlbnRpZmllciBDLFxuXHRcdC8vIG9yIGJlZ2lubmluZyB3aXRoIHRoZSBpZGVudGlmaWVyIEMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgXCItXCIuXG5cdFx0Ly8gVGhlIG1hdGNoaW5nIG9mIEMgYWdhaW5zdCB0aGUgZWxlbWVudCdzIGxhbmd1YWdlIHZhbHVlIGlzIHBlcmZvcm1lZCBjYXNlLWluc2Vuc2l0aXZlbHkuXG5cdFx0Ly8gVGhlIGlkZW50aWZpZXIgQyBkb2VzIG5vdCBoYXZlIHRvIGJlIGEgdmFsaWQgbGFuZ3VhZ2UgbmFtZS5cIlxuXHRcdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2xhbmctcHNldWRvXG5cdFx0bGFuZzogbWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggbGFuZyApIHtcblxuXHRcdFx0Ly8gbGFuZyB2YWx1ZSBtdXN0IGJlIGEgdmFsaWQgaWRlbnRpZmllclxuXHRcdFx0aWYgKCAhcmlkZW50aWZpZXIudGVzdCggbGFuZyB8fCBcIlwiICkgKSB7XG5cdFx0XHRcdGZpbmQuZXJyb3IoIFwidW5zdXBwb3J0ZWQgbGFuZzogXCIgKyBsYW5nICk7XG5cdFx0XHR9XG5cdFx0XHRsYW5nID0gbGFuZy5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHZhciBlbGVtTGFuZztcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdGlmICggKCBlbGVtTGFuZyA9IGRvY3VtZW50SXNIVE1MID9cblx0XHRcdFx0XHRcdGVsZW0ubGFuZyA6XG5cdFx0XHRcdFx0XHRlbGVtLmdldEF0dHJpYnV0ZSggXCJ4bWw6bGFuZ1wiICkgfHwgZWxlbS5nZXRBdHRyaWJ1dGUoIFwibGFuZ1wiICkgKSApIHtcblxuXHRcdFx0XHRcdFx0ZWxlbUxhbmcgPSBlbGVtTGFuZy50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1MYW5nID09PSBsYW5nIHx8IGVsZW1MYW5nLmluZGV4T2YoIGxhbmcgKyBcIi1cIiApID09PSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSB3aGlsZSAoICggZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSApICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fTtcblx0XHR9ICksXG5cblx0XHQvLyBNaXNjZWxsYW5lb3VzXG5cdFx0dGFyZ2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXHRcdFx0cmV0dXJuIGhhc2ggJiYgaGFzaC5zbGljZSggMSApID09PSBlbGVtLmlkO1xuXHRcdH0sXG5cblx0XHRyb290OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtID09PSBkb2N1bWVudEVsZW1lbnQ7XG5cdFx0fSxcblxuXHRcdGZvY3VzOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtID09PSBzYWZlQWN0aXZlRWxlbWVudCgpICYmXG5cdFx0XHRcdGRvY3VtZW50Lmhhc0ZvY3VzKCkgJiZcblx0XHRcdFx0ISEoIGVsZW0udHlwZSB8fCBlbGVtLmhyZWYgfHwgfmVsZW0udGFiSW5kZXggKTtcblx0XHR9LFxuXG5cdFx0Ly8gQm9vbGVhbiBwcm9wZXJ0aWVzXG5cdFx0ZW5hYmxlZDogY3JlYXRlRGlzYWJsZWRQc2V1ZG8oIGZhbHNlICksXG5cdFx0ZGlzYWJsZWQ6IGNyZWF0ZURpc2FibGVkUHNldWRvKCB0cnVlICksXG5cblx0XHRjaGVja2VkOiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0Ly8gSW4gQ1NTMywgOmNoZWNrZWQgc2hvdWxkIHJldHVybiBib3RoIGNoZWNrZWQgYW5kIHNlbGVjdGVkIGVsZW1lbnRzXG5cdFx0XHQvLyBodHRwczovL3d3dy53My5vcmcvVFIvMjAxMS9SRUMtY3NzMy1zZWxlY3RvcnMtMjAxMTA5MjkvI2NoZWNrZWRcblx0XHRcdHJldHVybiAoIG5vZGVOYW1lKCBlbGVtLCBcImlucHV0XCIgKSAmJiAhIWVsZW0uY2hlY2tlZCApIHx8XG5cdFx0XHRcdCggbm9kZU5hbWUoIGVsZW0sIFwib3B0aW9uXCIgKSAmJiAhIWVsZW0uc2VsZWN0ZWQgKTtcblx0XHR9LFxuXG5cdFx0c2VsZWN0ZWQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTExK1xuXHRcdFx0Ly8gQWNjZXNzaW5nIHRoZSBzZWxlY3RlZEluZGV4IHByb3BlcnR5XG5cdFx0XHQvLyBmb3JjZXMgdGhlIGJyb3dzZXIgdG8gdHJlYXQgdGhlIGRlZmF1bHQgb3B0aW9uIGFzXG5cdFx0XHQvLyBzZWxlY3RlZCB3aGVuIGluIGFuIG9wdGdyb3VwLlxuXHRcdFx0aWYgKCBlbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHRcdFx0ZWxlbS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBlbGVtLnNlbGVjdGVkID09PSB0cnVlO1xuXHRcdH0sXG5cblx0XHQvLyBDb250ZW50c1xuXHRcdGVtcHR5OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jZW1wdHktcHNldWRvXG5cdFx0XHQvLyA6ZW1wdHkgaXMgbmVnYXRlZCBieSBlbGVtZW50ICgxKSBvciBjb250ZW50IG5vZGVzICh0ZXh0OiAzOyBjZGF0YTogNDsgZW50aXR5IHJlZjogNSksXG5cdFx0XHQvLyAgIGJ1dCBub3QgYnkgb3RoZXJzIChjb21tZW50OiA4OyBwcm9jZXNzaW5nIGluc3RydWN0aW9uOiA3OyBldGMuKVxuXHRcdFx0Ly8gbm9kZVR5cGUgPCA2IHdvcmtzIGJlY2F1c2UgYXR0cmlidXRlcyAoMikgZG8gbm90IGFwcGVhciBhcyBjaGlsZHJlblxuXHRcdFx0Zm9yICggZWxlbSA9IGVsZW0uZmlyc3RDaGlsZDsgZWxlbTsgZWxlbSA9IGVsZW0ubmV4dFNpYmxpbmcgKSB7XG5cdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA8IDYgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0cGFyZW50OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiAhRXhwci5wc2V1ZG9zLmVtcHR5KCBlbGVtICk7XG5cdFx0fSxcblxuXHRcdC8vIEVsZW1lbnQvaW5wdXQgdHlwZXNcblx0XHRoZWFkZXI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIHJoZWFkZXIudGVzdCggZWxlbS5ub2RlTmFtZSApO1xuXHRcdH0sXG5cblx0XHRpbnB1dDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gcmlucHV0cy50ZXN0KCBlbGVtLm5vZGVOYW1lICk7XG5cdFx0fSxcblxuXHRcdGJ1dHRvbjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gbm9kZU5hbWUoIGVsZW0sIFwiaW5wdXRcIiApICYmIGVsZW0udHlwZSA9PT0gXCJidXR0b25cIiB8fFxuXHRcdFx0XHRub2RlTmFtZSggZWxlbSwgXCJidXR0b25cIiApO1xuXHRcdH0sXG5cblx0XHR0ZXh0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHZhciBhdHRyO1xuXHRcdFx0cmV0dXJuIG5vZGVOYW1lKCBlbGVtLCBcImlucHV0XCIgKSAmJiBlbGVtLnR5cGUgPT09IFwidGV4dFwiICYmXG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPDEwIG9ubHlcblx0XHRcdFx0Ly8gTmV3IEhUTUw1IGF0dHJpYnV0ZSB2YWx1ZXMgKGUuZy4sIFwic2VhcmNoXCIpIGFwcGVhclxuXHRcdFx0XHQvLyB3aXRoIGVsZW0udHlwZSA9PT0gXCJ0ZXh0XCJcblx0XHRcdFx0KCAoIGF0dHIgPSBlbGVtLmdldEF0dHJpYnV0ZSggXCJ0eXBlXCIgKSApID09IG51bGwgfHxcblx0XHRcdFx0XHRhdHRyLnRvTG93ZXJDYXNlKCkgPT09IFwidGV4dFwiICk7XG5cdFx0fSxcblxuXHRcdC8vIFBvc2l0aW9uLWluLWNvbGxlY3Rpb25cblx0XHRmaXJzdDogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gWyAwIF07XG5cdFx0fSApLFxuXG5cdFx0bGFzdDogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oIF9tYXRjaEluZGV4ZXMsIGxlbmd0aCApIHtcblx0XHRcdHJldHVybiBbIGxlbmd0aCAtIDEgXTtcblx0XHR9ICksXG5cblx0XHRlcTogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oIF9tYXRjaEluZGV4ZXMsIGxlbmd0aCwgYXJndW1lbnQgKSB7XG5cdFx0XHRyZXR1cm4gWyBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50IF07XG5cdFx0fSApLFxuXG5cdFx0ZXZlbjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xuXHRcdFx0dmFyIGkgPSAwO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpICs9IDIgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0gKSxcblxuXHRcdG9kZDogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xuXHRcdFx0dmFyIGkgPSAxO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpICs9IDIgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0gKSxcblxuXHRcdGx0OiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKCBmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuXHRcdFx0dmFyIGk7XG5cblx0XHRcdGlmICggYXJndW1lbnQgPCAwICkge1xuXHRcdFx0XHRpID0gYXJndW1lbnQgKyBsZW5ndGg7XG5cdFx0XHR9IGVsc2UgaWYgKCBhcmd1bWVudCA+IGxlbmd0aCApIHtcblx0XHRcdFx0aSA9IGxlbmd0aDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGkgPSBhcmd1bWVudDtcblx0XHRcdH1cblxuXHRcdFx0Zm9yICggOyAtLWkgPj0gMDsgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0gKSxcblxuXHRcdGd0OiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKCBmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuXHRcdFx0dmFyIGkgPSBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50O1xuXHRcdFx0Zm9yICggOyArK2kgPCBsZW5ndGg7ICkge1xuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHR9IClcblx0fVxufTtcblxuRXhwci5wc2V1ZG9zLm50aCA9IEV4cHIucHNldWRvcy5lcTtcblxuLy8gQWRkIGJ1dHRvbi9pbnB1dCB0eXBlIHBzZXVkb3NcbmZvciAoIGkgaW4geyByYWRpbzogdHJ1ZSwgY2hlY2tib3g6IHRydWUsIGZpbGU6IHRydWUsIHBhc3N3b3JkOiB0cnVlLCBpbWFnZTogdHJ1ZSB9ICkge1xuXHRFeHByLnBzZXVkb3NbIGkgXSA9IGNyZWF0ZUlucHV0UHNldWRvKCBpICk7XG59XG5mb3IgKCBpIGluIHsgc3VibWl0OiB0cnVlLCByZXNldDogdHJ1ZSB9ICkge1xuXHRFeHByLnBzZXVkb3NbIGkgXSA9IGNyZWF0ZUJ1dHRvblBzZXVkbyggaSApO1xufVxuXG4vLyBFYXN5IEFQSSBmb3IgY3JlYXRpbmcgbmV3IHNldEZpbHRlcnNcbmZ1bmN0aW9uIHNldEZpbHRlcnMoKSB7fVxuc2V0RmlsdGVycy5wcm90b3R5cGUgPSBFeHByLmZpbHRlcnMgPSBFeHByLnBzZXVkb3M7XG5FeHByLnNldEZpbHRlcnMgPSBuZXcgc2V0RmlsdGVycygpO1xuXG5mdW5jdGlvbiB0b2tlbml6ZSggc2VsZWN0b3IsIHBhcnNlT25seSApIHtcblx0dmFyIG1hdGNoZWQsIG1hdGNoLCB0b2tlbnMsIHR5cGUsXG5cdFx0c29GYXIsIGdyb3VwcywgcHJlRmlsdGVycyxcblx0XHRjYWNoZWQgPSB0b2tlbkNhY2hlWyBzZWxlY3RvciArIFwiIFwiIF07XG5cblx0aWYgKCBjYWNoZWQgKSB7XG5cdFx0cmV0dXJuIHBhcnNlT25seSA/IDAgOiBjYWNoZWQuc2xpY2UoIDAgKTtcblx0fVxuXG5cdHNvRmFyID0gc2VsZWN0b3I7XG5cdGdyb3VwcyA9IFtdO1xuXHRwcmVGaWx0ZXJzID0gRXhwci5wcmVGaWx0ZXI7XG5cblx0d2hpbGUgKCBzb0ZhciApIHtcblxuXHRcdC8vIENvbW1hIGFuZCBmaXJzdCBydW5cblx0XHRpZiAoICFtYXRjaGVkIHx8ICggbWF0Y2ggPSByY29tbWEuZXhlYyggc29GYXIgKSApICkge1xuXHRcdFx0aWYgKCBtYXRjaCApIHtcblxuXHRcdFx0XHQvLyBEb24ndCBjb25zdW1lIHRyYWlsaW5nIGNvbW1hcyBhcyB2YWxpZFxuXHRcdFx0XHRzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaFsgMCBdLmxlbmd0aCApIHx8IHNvRmFyO1xuXHRcdFx0fVxuXHRcdFx0Z3JvdXBzLnB1c2goICggdG9rZW5zID0gW10gKSApO1xuXHRcdH1cblxuXHRcdG1hdGNoZWQgPSBmYWxzZTtcblxuXHRcdC8vIENvbWJpbmF0b3JzXG5cdFx0aWYgKCAoIG1hdGNoID0gcmxlYWRpbmdDb21iaW5hdG9yLmV4ZWMoIHNvRmFyICkgKSApIHtcblx0XHRcdG1hdGNoZWQgPSBtYXRjaC5zaGlmdCgpO1xuXHRcdFx0dG9rZW5zLnB1c2goIHtcblx0XHRcdFx0dmFsdWU6IG1hdGNoZWQsXG5cblx0XHRcdFx0Ly8gQ2FzdCBkZXNjZW5kYW50IGNvbWJpbmF0b3JzIHRvIHNwYWNlXG5cdFx0XHRcdHR5cGU6IG1hdGNoWyAwIF0ucmVwbGFjZSggcnRyaW1DU1MsIFwiIFwiIClcblx0XHRcdH0gKTtcblx0XHRcdHNvRmFyID0gc29GYXIuc2xpY2UoIG1hdGNoZWQubGVuZ3RoICk7XG5cdFx0fVxuXG5cdFx0Ly8gRmlsdGVyc1xuXHRcdGZvciAoIHR5cGUgaW4gRXhwci5maWx0ZXIgKSB7XG5cdFx0XHRpZiAoICggbWF0Y2ggPSBtYXRjaEV4cHJbIHR5cGUgXS5leGVjKCBzb0ZhciApICkgJiYgKCAhcHJlRmlsdGVyc1sgdHlwZSBdIHx8XG5cdFx0XHRcdCggbWF0Y2ggPSBwcmVGaWx0ZXJzWyB0eXBlIF0oIG1hdGNoICkgKSApICkge1xuXHRcdFx0XHRtYXRjaGVkID0gbWF0Y2guc2hpZnQoKTtcblx0XHRcdFx0dG9rZW5zLnB1c2goIHtcblx0XHRcdFx0XHR2YWx1ZTogbWF0Y2hlZCxcblx0XHRcdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0XHRcdG1hdGNoZXM6IG1hdGNoXG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0c29GYXIgPSBzb0Zhci5zbGljZSggbWF0Y2hlZC5sZW5ndGggKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICFtYXRjaGVkICkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIGludmFsaWQgZXhjZXNzXG5cdC8vIGlmIHdlJ3JlIGp1c3QgcGFyc2luZ1xuXHQvLyBPdGhlcndpc2UsIHRocm93IGFuIGVycm9yIG9yIHJldHVybiB0b2tlbnNcblx0aWYgKCBwYXJzZU9ubHkgKSB7XG5cdFx0cmV0dXJuIHNvRmFyLmxlbmd0aDtcblx0fVxuXG5cdHJldHVybiBzb0ZhciA/XG5cdFx0ZmluZC5lcnJvciggc2VsZWN0b3IgKSA6XG5cblx0XHQvLyBDYWNoZSB0aGUgdG9rZW5zXG5cdFx0dG9rZW5DYWNoZSggc2VsZWN0b3IsIGdyb3VwcyApLnNsaWNlKCAwICk7XG59XG5cbmZ1bmN0aW9uIHRvU2VsZWN0b3IoIHRva2VucyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IHRva2Vucy5sZW5ndGgsXG5cdFx0c2VsZWN0b3IgPSBcIlwiO1xuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRzZWxlY3RvciArPSB0b2tlbnNbIGkgXS52YWx1ZTtcblx0fVxuXHRyZXR1cm4gc2VsZWN0b3I7XG59XG5cbmZ1bmN0aW9uIGFkZENvbWJpbmF0b3IoIG1hdGNoZXIsIGNvbWJpbmF0b3IsIGJhc2UgKSB7XG5cdHZhciBkaXIgPSBjb21iaW5hdG9yLmRpcixcblx0XHRza2lwID0gY29tYmluYXRvci5uZXh0LFxuXHRcdGtleSA9IHNraXAgfHwgZGlyLFxuXHRcdGNoZWNrTm9uRWxlbWVudHMgPSBiYXNlICYmIGtleSA9PT0gXCJwYXJlbnROb2RlXCIsXG5cdFx0ZG9uZU5hbWUgPSBkb25lKys7XG5cblx0cmV0dXJuIGNvbWJpbmF0b3IuZmlyc3QgP1xuXG5cdFx0Ly8gQ2hlY2sgYWdhaW5zdCBjbG9zZXN0IGFuY2VzdG9yL3ByZWNlZGluZyBlbGVtZW50XG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcblx0XHRcdHdoaWxlICggKCBlbGVtID0gZWxlbVsgZGlyIF0gKSApIHtcblx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSA6XG5cblx0XHQvLyBDaGVjayBhZ2FpbnN0IGFsbCBhbmNlc3Rvci9wcmVjZWRpbmcgZWxlbWVudHNcblx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0dmFyIG9sZENhY2hlLCBvdXRlckNhY2hlLFxuXHRcdFx0XHRuZXdDYWNoZSA9IFsgZGlycnVucywgZG9uZU5hbWUgXTtcblxuXHRcdFx0Ly8gV2UgY2FuJ3Qgc2V0IGFyYml0cmFyeSBkYXRhIG9uIFhNTCBub2Rlcywgc28gdGhleSBkb24ndCBiZW5lZml0IGZyb20gY29tYmluYXRvciBjYWNoaW5nXG5cdFx0XHRpZiAoIHhtbCApIHtcblx0XHRcdFx0d2hpbGUgKCAoIGVsZW0gPSBlbGVtWyBkaXIgXSApICkge1xuXHRcdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBjaGVja05vbkVsZW1lbnRzICkge1xuXHRcdFx0XHRcdFx0aWYgKCBtYXRjaGVyKCBlbGVtLCBjb250ZXh0LCB4bWwgKSApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aGlsZSAoICggZWxlbSA9IGVsZW1bIGRpciBdICkgKSB7XG5cdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XG5cdFx0XHRcdFx0XHRvdXRlckNhY2hlID0gZWxlbVsgZXhwYW5kbyBdIHx8ICggZWxlbVsgZXhwYW5kbyBdID0ge30gKTtcblxuXHRcdFx0XHRcdFx0aWYgKCBza2lwICYmIG5vZGVOYW1lKCBlbGVtLCBza2lwICkgKSB7XG5cdFx0XHRcdFx0XHRcdGVsZW0gPSBlbGVtWyBkaXIgXSB8fCBlbGVtO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICggKCBvbGRDYWNoZSA9IG91dGVyQ2FjaGVbIGtleSBdICkgJiZcblx0XHRcdFx0XHRcdFx0b2xkQ2FjaGVbIDAgXSA9PT0gZGlycnVucyAmJiBvbGRDYWNoZVsgMSBdID09PSBkb25lTmFtZSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBBc3NpZ24gdG8gbmV3Q2FjaGUgc28gcmVzdWx0cyBiYWNrLXByb3BhZ2F0ZSB0byBwcmV2aW91cyBlbGVtZW50c1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKCBuZXdDYWNoZVsgMiBdID0gb2xkQ2FjaGVbIDIgXSApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBSZXVzZSBuZXdjYWNoZSBzbyByZXN1bHRzIGJhY2stcHJvcGFnYXRlIHRvIHByZXZpb3VzIGVsZW1lbnRzXG5cdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGVbIGtleSBdID0gbmV3Q2FjaGU7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQSBtYXRjaCBtZWFucyB3ZSdyZSBkb25lOyBhIGZhaWwgbWVhbnMgd2UgaGF2ZSB0byBrZWVwIGNoZWNraW5nXG5cdFx0XHRcdFx0XHRcdGlmICggKCBuZXdDYWNoZVsgMiBdID0gbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICkgKSApIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApIHtcblx0cmV0dXJuIG1hdGNoZXJzLmxlbmd0aCA+IDEgP1xuXHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHR2YXIgaSA9IG1hdGNoZXJzLmxlbmd0aDtcblx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRpZiAoICFtYXRjaGVyc1sgaSBdKCBlbGVtLCBjb250ZXh0LCB4bWwgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gOlxuXHRcdG1hdGNoZXJzWyAwIF07XG59XG5cbmZ1bmN0aW9uIG11bHRpcGxlQ29udGV4dHMoIHNlbGVjdG9yLCBjb250ZXh0cywgcmVzdWx0cyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IGNvbnRleHRzLmxlbmd0aDtcblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0ZmluZCggc2VsZWN0b3IsIGNvbnRleHRzWyBpIF0sIHJlc3VsdHMgKTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gY29uZGVuc2UoIHVubWF0Y2hlZCwgbWFwLCBmaWx0ZXIsIGNvbnRleHQsIHhtbCApIHtcblx0dmFyIGVsZW0sXG5cdFx0bmV3VW5tYXRjaGVkID0gW10sXG5cdFx0aSA9IDAsXG5cdFx0bGVuID0gdW5tYXRjaGVkLmxlbmd0aCxcblx0XHRtYXBwZWQgPSBtYXAgIT0gbnVsbDtcblxuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRpZiAoICggZWxlbSA9IHVubWF0Y2hlZFsgaSBdICkgKSB7XG5cdFx0XHRpZiAoICFmaWx0ZXIgfHwgZmlsdGVyKCBlbGVtLCBjb250ZXh0LCB4bWwgKSApIHtcblx0XHRcdFx0bmV3VW5tYXRjaGVkLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0aWYgKCBtYXBwZWQgKSB7XG5cdFx0XHRcdFx0bWFwLnB1c2goIGkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBuZXdVbm1hdGNoZWQ7XG59XG5cbmZ1bmN0aW9uIHNldE1hdGNoZXIoIHByZUZpbHRlciwgc2VsZWN0b3IsIG1hdGNoZXIsIHBvc3RGaWx0ZXIsIHBvc3RGaW5kZXIsIHBvc3RTZWxlY3RvciApIHtcblx0aWYgKCBwb3N0RmlsdGVyICYmICFwb3N0RmlsdGVyWyBleHBhbmRvIF0gKSB7XG5cdFx0cG9zdEZpbHRlciA9IHNldE1hdGNoZXIoIHBvc3RGaWx0ZXIgKTtcblx0fVxuXHRpZiAoIHBvc3RGaW5kZXIgJiYgIXBvc3RGaW5kZXJbIGV4cGFuZG8gXSApIHtcblx0XHRwb3N0RmluZGVyID0gc2V0TWF0Y2hlciggcG9zdEZpbmRlciwgcG9zdFNlbGVjdG9yICk7XG5cdH1cblx0cmV0dXJuIG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIHNlZWQsIHJlc3VsdHMsIGNvbnRleHQsIHhtbCApIHtcblx0XHR2YXIgdGVtcCwgaSwgZWxlbSwgbWF0Y2hlck91dCxcblx0XHRcdHByZU1hcCA9IFtdLFxuXHRcdFx0cG9zdE1hcCA9IFtdLFxuXHRcdFx0cHJlZXhpc3RpbmcgPSByZXN1bHRzLmxlbmd0aCxcblxuXHRcdFx0Ly8gR2V0IGluaXRpYWwgZWxlbWVudHMgZnJvbSBzZWVkIG9yIGNvbnRleHRcblx0XHRcdGVsZW1zID0gc2VlZCB8fFxuXHRcdFx0XHRtdWx0aXBsZUNvbnRleHRzKCBzZWxlY3RvciB8fCBcIipcIixcblx0XHRcdFx0XHRjb250ZXh0Lm5vZGVUeXBlID8gWyBjb250ZXh0IF0gOiBjb250ZXh0LCBbXSApLFxuXG5cdFx0XHQvLyBQcmVmaWx0ZXIgdG8gZ2V0IG1hdGNoZXIgaW5wdXQsIHByZXNlcnZpbmcgYSBtYXAgZm9yIHNlZWQtcmVzdWx0cyBzeW5jaHJvbml6YXRpb25cblx0XHRcdG1hdGNoZXJJbiA9IHByZUZpbHRlciAmJiAoIHNlZWQgfHwgIXNlbGVjdG9yICkgP1xuXHRcdFx0XHRjb25kZW5zZSggZWxlbXMsIHByZU1hcCwgcHJlRmlsdGVyLCBjb250ZXh0LCB4bWwgKSA6XG5cdFx0XHRcdGVsZW1zO1xuXG5cdFx0aWYgKCBtYXRjaGVyICkge1xuXG5cdFx0XHQvLyBJZiB3ZSBoYXZlIGEgcG9zdEZpbmRlciwgb3IgZmlsdGVyZWQgc2VlZCwgb3Igbm9uLXNlZWQgcG9zdEZpbHRlclxuXHRcdFx0Ly8gb3IgcHJlZXhpc3RpbmcgcmVzdWx0cyxcblx0XHRcdG1hdGNoZXJPdXQgPSBwb3N0RmluZGVyIHx8ICggc2VlZCA/IHByZUZpbHRlciA6IHByZWV4aXN0aW5nIHx8IHBvc3RGaWx0ZXIgKSA/XG5cblx0XHRcdFx0Ly8gLi4uaW50ZXJtZWRpYXRlIHByb2Nlc3NpbmcgaXMgbmVjZXNzYXJ5XG5cdFx0XHRcdFtdIDpcblxuXHRcdFx0XHQvLyAuLi5vdGhlcndpc2UgdXNlIHJlc3VsdHMgZGlyZWN0bHlcblx0XHRcdFx0cmVzdWx0cztcblxuXHRcdFx0Ly8gRmluZCBwcmltYXJ5IG1hdGNoZXNcblx0XHRcdG1hdGNoZXIoIG1hdGNoZXJJbiwgbWF0Y2hlck91dCwgY29udGV4dCwgeG1sICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1hdGNoZXJPdXQgPSBtYXRjaGVySW47XG5cdFx0fVxuXG5cdFx0Ly8gQXBwbHkgcG9zdEZpbHRlclxuXHRcdGlmICggcG9zdEZpbHRlciApIHtcblx0XHRcdHRlbXAgPSBjb25kZW5zZSggbWF0Y2hlck91dCwgcG9zdE1hcCApO1xuXHRcdFx0cG9zdEZpbHRlciggdGVtcCwgW10sIGNvbnRleHQsIHhtbCApO1xuXG5cdFx0XHQvLyBVbi1tYXRjaCBmYWlsaW5nIGVsZW1lbnRzIGJ5IG1vdmluZyB0aGVtIGJhY2sgdG8gbWF0Y2hlckluXG5cdFx0XHRpID0gdGVtcC5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0aWYgKCAoIGVsZW0gPSB0ZW1wWyBpIF0gKSApIHtcblx0XHRcdFx0XHRtYXRjaGVyT3V0WyBwb3N0TWFwWyBpIF0gXSA9ICEoIG1hdGNoZXJJblsgcG9zdE1hcFsgaSBdIF0gPSBlbGVtICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIHNlZWQgKSB7XG5cdFx0XHRpZiAoIHBvc3RGaW5kZXIgfHwgcHJlRmlsdGVyICkge1xuXHRcdFx0XHRpZiAoIHBvc3RGaW5kZXIgKSB7XG5cblx0XHRcdFx0XHQvLyBHZXQgdGhlIGZpbmFsIG1hdGNoZXJPdXQgYnkgY29uZGVuc2luZyB0aGlzIGludGVybWVkaWF0ZSBpbnRvIHBvc3RGaW5kZXIgY29udGV4dHNcblx0XHRcdFx0XHR0ZW1wID0gW107XG5cdFx0XHRcdFx0aSA9IG1hdGNoZXJPdXQubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoIGVsZW0gPSBtYXRjaGVyT3V0WyBpIF0gKSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBSZXN0b3JlIG1hdGNoZXJJbiBzaW5jZSBlbGVtIGlzIG5vdCB5ZXQgYSBmaW5hbCBtYXRjaFxuXHRcdFx0XHRcdFx0XHR0ZW1wLnB1c2goICggbWF0Y2hlckluWyBpIF0gPSBlbGVtICkgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cG9zdEZpbmRlciggbnVsbCwgKCBtYXRjaGVyT3V0ID0gW10gKSwgdGVtcCwgeG1sICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBNb3ZlIG1hdGNoZWQgZWxlbWVudHMgZnJvbSBzZWVkIHRvIHJlc3VsdHMgdG8ga2VlcCB0aGVtIHN5bmNocm9uaXplZFxuXHRcdFx0XHRpID0gbWF0Y2hlck91dC5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdGlmICggKCBlbGVtID0gbWF0Y2hlck91dFsgaSBdICkgJiZcblx0XHRcdFx0XHRcdCggdGVtcCA9IHBvc3RGaW5kZXIgPyBpbmRleE9mLmNhbGwoIHNlZWQsIGVsZW0gKSA6IHByZU1hcFsgaSBdICkgPiAtMSApIHtcblxuXHRcdFx0XHRcdFx0c2VlZFsgdGVtcCBdID0gISggcmVzdWx0c1sgdGVtcCBdID0gZWxlbSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0Ly8gQWRkIGVsZW1lbnRzIHRvIHJlc3VsdHMsIHRocm91Z2ggcG9zdEZpbmRlciBpZiBkZWZpbmVkXG5cdFx0fSBlbHNlIHtcblx0XHRcdG1hdGNoZXJPdXQgPSBjb25kZW5zZShcblx0XHRcdFx0bWF0Y2hlck91dCA9PT0gcmVzdWx0cyA/XG5cdFx0XHRcdFx0bWF0Y2hlck91dC5zcGxpY2UoIHByZWV4aXN0aW5nLCBtYXRjaGVyT3V0Lmxlbmd0aCApIDpcblx0XHRcdFx0XHRtYXRjaGVyT3V0XG5cdFx0XHQpO1xuXHRcdFx0aWYgKCBwb3N0RmluZGVyICkge1xuXHRcdFx0XHRwb3N0RmluZGVyKCBudWxsLCByZXN1bHRzLCBtYXRjaGVyT3V0LCB4bWwgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsIG1hdGNoZXJPdXQgKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gKTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hlckZyb21Ub2tlbnMoIHRva2VucyApIHtcblx0dmFyIGNoZWNrQ29udGV4dCwgbWF0Y2hlciwgaixcblx0XHRsZW4gPSB0b2tlbnMubGVuZ3RoLFxuXHRcdGxlYWRpbmdSZWxhdGl2ZSA9IEV4cHIucmVsYXRpdmVbIHRva2Vuc1sgMCBdLnR5cGUgXSxcblx0XHRpbXBsaWNpdFJlbGF0aXZlID0gbGVhZGluZ1JlbGF0aXZlIHx8IEV4cHIucmVsYXRpdmVbIFwiIFwiIF0sXG5cdFx0aSA9IGxlYWRpbmdSZWxhdGl2ZSA/IDEgOiAwLFxuXG5cdFx0Ly8gVGhlIGZvdW5kYXRpb25hbCBtYXRjaGVyIGVuc3VyZXMgdGhhdCBlbGVtZW50cyBhcmUgcmVhY2hhYmxlIGZyb20gdG9wLWxldmVsIGNvbnRleHQocylcblx0XHRtYXRjaENvbnRleHQgPSBhZGRDb21iaW5hdG9yKCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtID09PSBjaGVja0NvbnRleHQ7XG5cdFx0fSwgaW1wbGljaXRSZWxhdGl2ZSwgdHJ1ZSApLFxuXHRcdG1hdGNoQW55Q29udGV4dCA9IGFkZENvbWJpbmF0b3IoIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGluZGV4T2YuY2FsbCggY2hlY2tDb250ZXh0LCBlbGVtICkgPiAtMTtcblx0XHR9LCBpbXBsaWNpdFJlbGF0aXZlLCB0cnVlICksXG5cdFx0bWF0Y2hlcnMgPSBbIGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFIDExKywgRWRnZSAxNyAtIDE4K1xuXHRcdFx0Ly8gSUUvRWRnZSBzb21ldGltZXMgdGhyb3cgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdFx0XHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdFx0XHR2YXIgcmV0ID0gKCAhbGVhZGluZ1JlbGF0aXZlICYmICggeG1sIHx8IGNvbnRleHQgIT0gb3V0ZXJtb3N0Q29udGV4dCApICkgfHwgKFxuXHRcdFx0XHQoIGNoZWNrQ29udGV4dCA9IGNvbnRleHQgKS5ub2RlVHlwZSA/XG5cdFx0XHRcdFx0bWF0Y2hDb250ZXh0KCBlbGVtLCBjb250ZXh0LCB4bWwgKSA6XG5cdFx0XHRcdFx0bWF0Y2hBbnlDb250ZXh0KCBlbGVtLCBjb250ZXh0LCB4bWwgKSApO1xuXG5cdFx0XHQvLyBBdm9pZCBoYW5naW5nIG9udG8gZWxlbWVudFxuXHRcdFx0Ly8gKHNlZSBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L3NpenpsZS9pc3N1ZXMvMjk5KVxuXHRcdFx0Y2hlY2tDb250ZXh0ID0gbnVsbDtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSBdO1xuXG5cdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdGlmICggKCBtYXRjaGVyID0gRXhwci5yZWxhdGl2ZVsgdG9rZW5zWyBpIF0udHlwZSBdICkgKSB7XG5cdFx0XHRtYXRjaGVycyA9IFsgYWRkQ29tYmluYXRvciggZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICksIG1hdGNoZXIgKSBdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYXRjaGVyID0gRXhwci5maWx0ZXJbIHRva2Vuc1sgaSBdLnR5cGUgXS5hcHBseSggbnVsbCwgdG9rZW5zWyBpIF0ubWF0Y2hlcyApO1xuXG5cdFx0XHQvLyBSZXR1cm4gc3BlY2lhbCB1cG9uIHNlZWluZyBhIHBvc2l0aW9uYWwgbWF0Y2hlclxuXHRcdFx0aWYgKCBtYXRjaGVyWyBleHBhbmRvIF0gKSB7XG5cblx0XHRcdFx0Ly8gRmluZCB0aGUgbmV4dCByZWxhdGl2ZSBvcGVyYXRvciAoaWYgYW55KSBmb3IgcHJvcGVyIGhhbmRsaW5nXG5cdFx0XHRcdGogPSArK2k7XG5cdFx0XHRcdGZvciAoIDsgaiA8IGxlbjsgaisrICkge1xuXHRcdFx0XHRcdGlmICggRXhwci5yZWxhdGl2ZVsgdG9rZW5zWyBqIF0udHlwZSBdICkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBzZXRNYXRjaGVyKFxuXHRcdFx0XHRcdGkgPiAxICYmIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApLFxuXHRcdFx0XHRcdGkgPiAxICYmIHRvU2VsZWN0b3IoXG5cblx0XHRcdFx0XHRcdC8vIElmIHRoZSBwcmVjZWRpbmcgdG9rZW4gd2FzIGEgZGVzY2VuZGFudCBjb21iaW5hdG9yLCBpbnNlcnQgYW4gaW1wbGljaXQgYW55LWVsZW1lbnQgYCpgXG5cdFx0XHRcdFx0XHR0b2tlbnMuc2xpY2UoIDAsIGkgLSAxIClcblx0XHRcdFx0XHRcdFx0LmNvbmNhdCggeyB2YWx1ZTogdG9rZW5zWyBpIC0gMiBdLnR5cGUgPT09IFwiIFwiID8gXCIqXCIgOiBcIlwiIH0gKVxuXHRcdFx0XHRcdCkucmVwbGFjZSggcnRyaW1DU1MsIFwiJDFcIiApLFxuXHRcdFx0XHRcdG1hdGNoZXIsXG5cdFx0XHRcdFx0aSA8IGogJiYgbWF0Y2hlckZyb21Ub2tlbnMoIHRva2Vucy5zbGljZSggaSwgaiApICksXG5cdFx0XHRcdFx0aiA8IGxlbiAmJiBtYXRjaGVyRnJvbVRva2VucyggKCB0b2tlbnMgPSB0b2tlbnMuc2xpY2UoIGogKSApICksXG5cdFx0XHRcdFx0aiA8IGxlbiAmJiB0b1NlbGVjdG9yKCB0b2tlbnMgKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0bWF0Y2hlcnMucHVzaCggbWF0Y2hlciApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlbGVtZW50TWF0Y2hlciggbWF0Y2hlcnMgKTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hlckZyb21Hcm91cE1hdGNoZXJzKCBlbGVtZW50TWF0Y2hlcnMsIHNldE1hdGNoZXJzICkge1xuXHR2YXIgYnlTZXQgPSBzZXRNYXRjaGVycy5sZW5ndGggPiAwLFxuXHRcdGJ5RWxlbWVudCA9IGVsZW1lbnRNYXRjaGVycy5sZW5ndGggPiAwLFxuXHRcdHN1cGVyTWF0Y2hlciA9IGZ1bmN0aW9uKCBzZWVkLCBjb250ZXh0LCB4bWwsIHJlc3VsdHMsIG91dGVybW9zdCApIHtcblx0XHRcdHZhciBlbGVtLCBqLCBtYXRjaGVyLFxuXHRcdFx0XHRtYXRjaGVkQ291bnQgPSAwLFxuXHRcdFx0XHRpID0gXCIwXCIsXG5cdFx0XHRcdHVubWF0Y2hlZCA9IHNlZWQgJiYgW10sXG5cdFx0XHRcdHNldE1hdGNoZWQgPSBbXSxcblx0XHRcdFx0Y29udGV4dEJhY2t1cCA9IG91dGVybW9zdENvbnRleHQsXG5cblx0XHRcdFx0Ly8gV2UgbXVzdCBhbHdheXMgaGF2ZSBlaXRoZXIgc2VlZCBlbGVtZW50cyBvciBvdXRlcm1vc3QgY29udGV4dFxuXHRcdFx0XHRlbGVtcyA9IHNlZWQgfHwgYnlFbGVtZW50ICYmIEV4cHIuZmluZC5UQUcoIFwiKlwiLCBvdXRlcm1vc3QgKSxcblxuXHRcdFx0XHQvLyBVc2UgaW50ZWdlciBkaXJydW5zIGlmZiB0aGlzIGlzIHRoZSBvdXRlcm1vc3QgbWF0Y2hlclxuXHRcdFx0XHRkaXJydW5zVW5pcXVlID0gKCBkaXJydW5zICs9IGNvbnRleHRCYWNrdXAgPT0gbnVsbCA/IDEgOiBNYXRoLnJhbmRvbSgpIHx8IDAuMSApLFxuXHRcdFx0XHRsZW4gPSBlbGVtcy5sZW5ndGg7XG5cblx0XHRcdGlmICggb3V0ZXJtb3N0ICkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDExKywgRWRnZSAxNyAtIDE4K1xuXHRcdFx0XHQvLyBJRS9FZGdlIHNvbWV0aW1lcyB0aHJvdyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIHN0cmljdC1jb21wYXJpbmdcblx0XHRcdFx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdFx0XHRcdG91dGVybW9zdENvbnRleHQgPSBjb250ZXh0ID09IGRvY3VtZW50IHx8IGNvbnRleHQgfHwgb3V0ZXJtb3N0O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgZWxlbWVudHMgcGFzc2luZyBlbGVtZW50TWF0Y2hlcnMgZGlyZWN0bHkgdG8gcmVzdWx0c1xuXHRcdFx0Ly8gU3VwcG9ydDogaU9TIDw9NyAtIDkgb25seVxuXHRcdFx0Ly8gVG9sZXJhdGUgTm9kZUxpc3QgcHJvcGVydGllcyAoSUU6IFwibGVuZ3RoXCI7IFNhZmFyaTogPG51bWJlcj4pIG1hdGNoaW5nXG5cdFx0XHQvLyBlbGVtZW50cyBieSBpZC4gKHNlZSB0cmFjLTE0MTQyKVxuXHRcdFx0Zm9yICggOyBpICE9PSBsZW4gJiYgKCBlbGVtID0gZWxlbXNbIGkgXSApICE9IG51bGw7IGkrKyApIHtcblx0XHRcdFx0aWYgKCBieUVsZW1lbnQgJiYgZWxlbSApIHtcblx0XHRcdFx0XHRqID0gMDtcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDExKywgRWRnZSAxNyAtIDE4K1xuXHRcdFx0XHRcdC8vIElFL0VkZ2Ugc29tZXRpbWVzIHRocm93IGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHRcdFx0XHRcdC8vIHR3byBkb2N1bWVudHM7IHNoYWxsb3cgY29tcGFyaXNvbnMgd29yay5cblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdFx0XHRcdFx0aWYgKCAhY29udGV4dCAmJiBlbGVtLm93bmVyRG9jdW1lbnQgIT0gZG9jdW1lbnQgKSB7XG5cdFx0XHRcdFx0XHRzZXREb2N1bWVudCggZWxlbSApO1xuXHRcdFx0XHRcdFx0eG1sID0gIWRvY3VtZW50SXNIVE1MO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR3aGlsZSAoICggbWF0Y2hlciA9IGVsZW1lbnRNYXRjaGVyc1sgaisrIF0gKSApIHtcblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlciggZWxlbSwgY29udGV4dCB8fCBkb2N1bWVudCwgeG1sICkgKSB7XG5cdFx0XHRcdFx0XHRcdHB1c2guY2FsbCggcmVzdWx0cywgZWxlbSApO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBvdXRlcm1vc3QgKSB7XG5cdFx0XHRcdFx0XHRkaXJydW5zID0gZGlycnVuc1VuaXF1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUcmFjayB1bm1hdGNoZWQgZWxlbWVudHMgZm9yIHNldCBmaWx0ZXJzXG5cdFx0XHRcdGlmICggYnlTZXQgKSB7XG5cblx0XHRcdFx0XHQvLyBUaGV5IHdpbGwgaGF2ZSBnb25lIHRocm91Z2ggYWxsIHBvc3NpYmxlIG1hdGNoZXJzXG5cdFx0XHRcdFx0aWYgKCAoIGVsZW0gPSAhbWF0Y2hlciAmJiBlbGVtICkgKSB7XG5cdFx0XHRcdFx0XHRtYXRjaGVkQ291bnQtLTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBMZW5ndGhlbiB0aGUgYXJyYXkgZm9yIGV2ZXJ5IGVsZW1lbnQsIG1hdGNoZWQgb3Igbm90XG5cdFx0XHRcdFx0aWYgKCBzZWVkICkge1xuXHRcdFx0XHRcdFx0dW5tYXRjaGVkLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gYGlgIGlzIG5vdyB0aGUgY291bnQgb2YgZWxlbWVudHMgdmlzaXRlZCBhYm92ZSwgYW5kIGFkZGluZyBpdCB0byBgbWF0Y2hlZENvdW50YFxuXHRcdFx0Ly8gbWFrZXMgdGhlIGxhdHRlciBub25uZWdhdGl2ZS5cblx0XHRcdG1hdGNoZWRDb3VudCArPSBpO1xuXG5cdFx0XHQvLyBBcHBseSBzZXQgZmlsdGVycyB0byB1bm1hdGNoZWQgZWxlbWVudHNcblx0XHRcdC8vIE5PVEU6IFRoaXMgY2FuIGJlIHNraXBwZWQgaWYgdGhlcmUgYXJlIG5vIHVubWF0Y2hlZCBlbGVtZW50cyAoaS5lLiwgYG1hdGNoZWRDb3VudGBcblx0XHRcdC8vIGVxdWFscyBgaWApLCB1bmxlc3Mgd2UgZGlkbid0IHZpc2l0IF9hbnlfIGVsZW1lbnRzIGluIHRoZSBhYm92ZSBsb29wIGJlY2F1c2Ugd2UgaGF2ZVxuXHRcdFx0Ly8gbm8gZWxlbWVudCBtYXRjaGVycyBhbmQgbm8gc2VlZC5cblx0XHRcdC8vIEluY3JlbWVudGluZyBhbiBpbml0aWFsbHktc3RyaW5nIFwiMFwiIGBpYCBhbGxvd3MgYGlgIHRvIHJlbWFpbiBhIHN0cmluZyBvbmx5IGluIHRoYXRcblx0XHRcdC8vIGNhc2UsIHdoaWNoIHdpbGwgcmVzdWx0IGluIGEgXCIwMFwiIGBtYXRjaGVkQ291bnRgIHRoYXQgZGlmZmVycyBmcm9tIGBpYCBidXQgaXMgYWxzb1xuXHRcdFx0Ly8gbnVtZXJpY2FsbHkgemVyby5cblx0XHRcdGlmICggYnlTZXQgJiYgaSAhPT0gbWF0Y2hlZENvdW50ICkge1xuXHRcdFx0XHRqID0gMDtcblx0XHRcdFx0d2hpbGUgKCAoIG1hdGNoZXIgPSBzZXRNYXRjaGVyc1sgaisrIF0gKSApIHtcblx0XHRcdFx0XHRtYXRjaGVyKCB1bm1hdGNoZWQsIHNldE1hdGNoZWQsIGNvbnRleHQsIHhtbCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBzZWVkICkge1xuXG5cdFx0XHRcdFx0Ly8gUmVpbnRlZ3JhdGUgZWxlbWVudCBtYXRjaGVzIHRvIGVsaW1pbmF0ZSB0aGUgbmVlZCBmb3Igc29ydGluZ1xuXHRcdFx0XHRcdGlmICggbWF0Y2hlZENvdW50ID4gMCApIHtcblx0XHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoICEoIHVubWF0Y2hlZFsgaSBdIHx8IHNldE1hdGNoZWRbIGkgXSApICkge1xuXHRcdFx0XHRcdFx0XHRcdHNldE1hdGNoZWRbIGkgXSA9IHBvcC5jYWxsKCByZXN1bHRzICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBEaXNjYXJkIGluZGV4IHBsYWNlaG9sZGVyIHZhbHVlcyB0byBnZXQgb25seSBhY3R1YWwgbWF0Y2hlc1xuXHRcdFx0XHRcdHNldE1hdGNoZWQgPSBjb25kZW5zZSggc2V0TWF0Y2hlZCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQWRkIG1hdGNoZXMgdG8gcmVzdWx0c1xuXHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBzZXRNYXRjaGVkICk7XG5cblx0XHRcdFx0Ly8gU2VlZGxlc3Mgc2V0IG1hdGNoZXMgc3VjY2VlZGluZyBtdWx0aXBsZSBzdWNjZXNzZnVsIG1hdGNoZXJzIHN0aXB1bGF0ZSBzb3J0aW5nXG5cdFx0XHRcdGlmICggb3V0ZXJtb3N0ICYmICFzZWVkICYmIHNldE1hdGNoZWQubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRcdCggbWF0Y2hlZENvdW50ICsgc2V0TWF0Y2hlcnMubGVuZ3RoICkgPiAxICkge1xuXG5cdFx0XHRcdFx0alF1ZXJ5LnVuaXF1ZVNvcnQoIHJlc3VsdHMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBPdmVycmlkZSBtYW5pcHVsYXRpb24gb2YgZ2xvYmFscyBieSBuZXN0ZWQgbWF0Y2hlcnNcblx0XHRcdGlmICggb3V0ZXJtb3N0ICkge1xuXHRcdFx0XHRkaXJydW5zID0gZGlycnVuc1VuaXF1ZTtcblx0XHRcdFx0b3V0ZXJtb3N0Q29udGV4dCA9IGNvbnRleHRCYWNrdXA7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB1bm1hdGNoZWQ7XG5cdFx0fTtcblxuXHRyZXR1cm4gYnlTZXQgP1xuXHRcdG1hcmtGdW5jdGlvbiggc3VwZXJNYXRjaGVyICkgOlxuXHRcdHN1cGVyTWF0Y2hlcjtcbn1cblxuZnVuY3Rpb24gY29tcGlsZSggc2VsZWN0b3IsIG1hdGNoIC8qIEludGVybmFsIFVzZSBPbmx5ICovICkge1xuXHR2YXIgaSxcblx0XHRzZXRNYXRjaGVycyA9IFtdLFxuXHRcdGVsZW1lbnRNYXRjaGVycyA9IFtdLFxuXHRcdGNhY2hlZCA9IGNvbXBpbGVyQ2FjaGVbIHNlbGVjdG9yICsgXCIgXCIgXTtcblxuXHRpZiAoICFjYWNoZWQgKSB7XG5cblx0XHQvLyBHZW5lcmF0ZSBhIGZ1bmN0aW9uIG9mIHJlY3Vyc2l2ZSBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgdXNlZCB0byBjaGVjayBlYWNoIGVsZW1lbnRcblx0XHRpZiAoICFtYXRjaCApIHtcblx0XHRcdG1hdGNoID0gdG9rZW5pemUoIHNlbGVjdG9yICk7XG5cdFx0fVxuXHRcdGkgPSBtYXRjaC5sZW5ndGg7XG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRjYWNoZWQgPSBtYXRjaGVyRnJvbVRva2VucyggbWF0Y2hbIGkgXSApO1xuXHRcdFx0aWYgKCBjYWNoZWRbIGV4cGFuZG8gXSApIHtcblx0XHRcdFx0c2V0TWF0Y2hlcnMucHVzaCggY2FjaGVkICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50TWF0Y2hlcnMucHVzaCggY2FjaGVkICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2FjaGUgdGhlIGNvbXBpbGVkIGZ1bmN0aW9uXG5cdFx0Y2FjaGVkID0gY29tcGlsZXJDYWNoZSggc2VsZWN0b3IsXG5cdFx0XHRtYXRjaGVyRnJvbUdyb3VwTWF0Y2hlcnMoIGVsZW1lbnRNYXRjaGVycywgc2V0TWF0Y2hlcnMgKSApO1xuXG5cdFx0Ly8gU2F2ZSBzZWxlY3RvciBhbmQgdG9rZW5pemF0aW9uXG5cdFx0Y2FjaGVkLnNlbGVjdG9yID0gc2VsZWN0b3I7XG5cdH1cblx0cmV0dXJuIGNhY2hlZDtcbn1cblxuLyoqXG4gKiBBIGxvdy1sZXZlbCBzZWxlY3Rpb24gZnVuY3Rpb24gdGhhdCB3b3JrcyB3aXRoIGpRdWVyeSdzIGNvbXBpbGVkXG4gKiAgc2VsZWN0b3IgZnVuY3Rpb25zXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gc2VsZWN0b3IgQSBzZWxlY3RvciBvciBhIHByZS1jb21waWxlZFxuICogIHNlbGVjdG9yIGZ1bmN0aW9uIGJ1aWx0IHdpdGggalF1ZXJ5IHNlbGVjdG9yIGNvbXBpbGVcbiAqIEBwYXJhbSB7RWxlbWVudH0gY29udGV4dFxuICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdHNdXG4gKiBAcGFyYW0ge0FycmF5fSBbc2VlZF0gQSBzZXQgb2YgZWxlbWVudHMgdG8gbWF0Y2ggYWdhaW5zdFxuICovXG5mdW5jdGlvbiBzZWxlY3QoIHNlbGVjdG9yLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkICkge1xuXHR2YXIgaSwgdG9rZW5zLCB0b2tlbiwgdHlwZSwgZmluZCxcblx0XHRjb21waWxlZCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJmdW5jdGlvblwiICYmIHNlbGVjdG9yLFxuXHRcdG1hdGNoID0gIXNlZWQgJiYgdG9rZW5pemUoICggc2VsZWN0b3IgPSBjb21waWxlZC5zZWxlY3RvciB8fCBzZWxlY3RvciApICk7XG5cblx0cmVzdWx0cyA9IHJlc3VsdHMgfHwgW107XG5cblx0Ly8gVHJ5IHRvIG1pbmltaXplIG9wZXJhdGlvbnMgaWYgdGhlcmUgaXMgb25seSBvbmUgc2VsZWN0b3IgaW4gdGhlIGxpc3QgYW5kIG5vIHNlZWRcblx0Ly8gKHRoZSBsYXR0ZXIgb2Ygd2hpY2ggZ3VhcmFudGVlcyB1cyBjb250ZXh0KVxuXHRpZiAoIG1hdGNoLmxlbmd0aCA9PT0gMSApIHtcblxuXHRcdC8vIFJlZHVjZSBjb250ZXh0IGlmIHRoZSBsZWFkaW5nIGNvbXBvdW5kIHNlbGVjdG9yIGlzIGFuIElEXG5cdFx0dG9rZW5zID0gbWF0Y2hbIDAgXSA9IG1hdGNoWyAwIF0uc2xpY2UoIDAgKTtcblx0XHRpZiAoIHRva2Vucy5sZW5ndGggPiAyICYmICggdG9rZW4gPSB0b2tlbnNbIDAgXSApLnR5cGUgPT09IFwiSURcIiAmJlxuXHRcdFx0XHRjb250ZXh0Lm5vZGVUeXBlID09PSA5ICYmIGRvY3VtZW50SXNIVE1MICYmIEV4cHIucmVsYXRpdmVbIHRva2Vuc1sgMSBdLnR5cGUgXSApIHtcblxuXHRcdFx0Y29udGV4dCA9ICggRXhwci5maW5kLklEKFxuXHRcdFx0XHR0b2tlbi5tYXRjaGVzWyAwIF0ucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKSxcblx0XHRcdFx0Y29udGV4dFxuXHRcdFx0KSB8fCBbXSApWyAwIF07XG5cdFx0XHRpZiAoICFjb250ZXh0ICkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblxuXHRcdFx0Ly8gUHJlY29tcGlsZWQgbWF0Y2hlcnMgd2lsbCBzdGlsbCB2ZXJpZnkgYW5jZXN0cnksIHNvIHN0ZXAgdXAgYSBsZXZlbFxuXHRcdFx0fSBlbHNlIGlmICggY29tcGlsZWQgKSB7XG5cdFx0XHRcdGNvbnRleHQgPSBjb250ZXh0LnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cblx0XHRcdHNlbGVjdG9yID0gc2VsZWN0b3Iuc2xpY2UoIHRva2Vucy5zaGlmdCgpLnZhbHVlLmxlbmd0aCApO1xuXHRcdH1cblxuXHRcdC8vIEZldGNoIGEgc2VlZCBzZXQgZm9yIHJpZ2h0LXRvLWxlZnQgbWF0Y2hpbmdcblx0XHRpID0gbWF0Y2hFeHByLm5lZWRzQ29udGV4dC50ZXN0KCBzZWxlY3RvciApID8gMCA6IHRva2Vucy5sZW5ndGg7XG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHR0b2tlbiA9IHRva2Vuc1sgaSBdO1xuXG5cdFx0XHQvLyBBYm9ydCBpZiB3ZSBoaXQgYSBjb21iaW5hdG9yXG5cdFx0XHRpZiAoIEV4cHIucmVsYXRpdmVbICggdHlwZSA9IHRva2VuLnR5cGUgKSBdICkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmICggKCBmaW5kID0gRXhwci5maW5kWyB0eXBlIF0gKSApIHtcblxuXHRcdFx0XHQvLyBTZWFyY2gsIGV4cGFuZGluZyBjb250ZXh0IGZvciBsZWFkaW5nIHNpYmxpbmcgY29tYmluYXRvcnNcblx0XHRcdFx0aWYgKCAoIHNlZWQgPSBmaW5kKFxuXHRcdFx0XHRcdHRva2VuLm1hdGNoZXNbIDAgXS5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApLFxuXHRcdFx0XHRcdHJzaWJsaW5nLnRlc3QoIHRva2Vuc1sgMCBdLnR5cGUgKSAmJlxuXHRcdFx0XHRcdFx0dGVzdENvbnRleHQoIGNvbnRleHQucGFyZW50Tm9kZSApIHx8IGNvbnRleHRcblx0XHRcdFx0KSApICkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgc2VlZCBpcyBlbXB0eSBvciBubyB0b2tlbnMgcmVtYWluLCB3ZSBjYW4gcmV0dXJuIGVhcmx5XG5cdFx0XHRcdFx0dG9rZW5zLnNwbGljZSggaSwgMSApO1xuXHRcdFx0XHRcdHNlbGVjdG9yID0gc2VlZC5sZW5ndGggJiYgdG9TZWxlY3RvciggdG9rZW5zICk7XG5cdFx0XHRcdFx0aWYgKCAhc2VsZWN0b3IgKSB7XG5cdFx0XHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBzZWVkICk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIENvbXBpbGUgYW5kIGV4ZWN1dGUgYSBmaWx0ZXJpbmcgZnVuY3Rpb24gaWYgb25lIGlzIG5vdCBwcm92aWRlZFxuXHQvLyBQcm92aWRlIGBtYXRjaGAgdG8gYXZvaWQgcmV0b2tlbml6YXRpb24gaWYgd2UgbW9kaWZpZWQgdGhlIHNlbGVjdG9yIGFib3ZlXG5cdCggY29tcGlsZWQgfHwgY29tcGlsZSggc2VsZWN0b3IsIG1hdGNoICkgKShcblx0XHRzZWVkLFxuXHRcdGNvbnRleHQsXG5cdFx0IWRvY3VtZW50SXNIVE1MLFxuXHRcdHJlc3VsdHMsXG5cdFx0IWNvbnRleHQgfHwgcnNpYmxpbmcudGVzdCggc2VsZWN0b3IgKSAmJiB0ZXN0Q29udGV4dCggY29udGV4dC5wYXJlbnROb2RlICkgfHwgY29udGV4dFxuXHQpO1xuXHRyZXR1cm4gcmVzdWx0cztcbn1cblxuLy8gT25lLXRpbWUgYXNzaWdubWVudHNcblxuLy8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCAtIDQuMStcbi8vIFNvcnQgc3RhYmlsaXR5XG5zdXBwb3J0LnNvcnRTdGFibGUgPSBleHBhbmRvLnNwbGl0KCBcIlwiICkuc29ydCggc29ydE9yZGVyICkuam9pbiggXCJcIiApID09PSBleHBhbmRvO1xuXG4vLyBJbml0aWFsaXplIGFnYWluc3QgdGhlIGRlZmF1bHQgZG9jdW1lbnRcbnNldERvY3VtZW50KCk7XG5cbi8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgLSA0LjErXG4vLyBEZXRhY2hlZCBub2RlcyBjb25mb3VuZGluZ2x5IGZvbGxvdyAqZWFjaCBvdGhlcipcbnN1cHBvcnQuc29ydERldGFjaGVkID0gYXNzZXJ0KCBmdW5jdGlvbiggZWwgKSB7XG5cblx0Ly8gU2hvdWxkIHJldHVybiAxLCBidXQgcmV0dXJucyA0IChmb2xsb3dpbmcpXG5cdHJldHVybiBlbC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJmaWVsZHNldFwiICkgKSAmIDE7XG59ICk7XG5cbmpRdWVyeS5maW5kID0gZmluZDtcblxuLy8gRGVwcmVjYXRlZFxualF1ZXJ5LmV4cHJbIFwiOlwiIF0gPSBqUXVlcnkuZXhwci5wc2V1ZG9zO1xualF1ZXJ5LnVuaXF1ZSA9IGpRdWVyeS51bmlxdWVTb3J0O1xuXG4vLyBUaGVzZSBoYXZlIGFsd2F5cyBiZWVuIHByaXZhdGUsIGJ1dCB0aGV5IHVzZWQgdG8gYmUgZG9jdW1lbnRlZCBhcyBwYXJ0IG9mXG4vLyBTaXp6bGUgc28gbGV0J3MgbWFpbnRhaW4gdGhlbSBmb3Igbm93IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBwdXJwb3Nlcy5cbmZpbmQuY29tcGlsZSA9IGNvbXBpbGU7XG5maW5kLnNlbGVjdCA9IHNlbGVjdDtcbmZpbmQuc2V0RG9jdW1lbnQgPSBzZXREb2N1bWVudDtcbmZpbmQudG9rZW5pemUgPSB0b2tlbml6ZTtcblxuZmluZC5lc2NhcGUgPSBqUXVlcnkuZXNjYXBlU2VsZWN0b3I7XG5maW5kLmdldFRleHQgPSBqUXVlcnkudGV4dDtcbmZpbmQuaXNYTUwgPSBqUXVlcnkuaXNYTUxEb2M7XG5maW5kLnNlbGVjdG9ycyA9IGpRdWVyeS5leHByO1xuZmluZC5zdXBwb3J0ID0galF1ZXJ5LnN1cHBvcnQ7XG5maW5kLnVuaXF1ZVNvcnQgPSBqUXVlcnkudW5pcXVlU29ydDtcblxuXHQvKiBlc2xpbnQtZW5hYmxlICovXG5cbn0gKSgpO1xuXG5cbnZhciBkaXIgPSBmdW5jdGlvbiggZWxlbSwgZGlyLCB1bnRpbCApIHtcblx0dmFyIG1hdGNoZWQgPSBbXSxcblx0XHR0cnVuY2F0ZSA9IHVudGlsICE9PSB1bmRlZmluZWQ7XG5cblx0d2hpbGUgKCAoIGVsZW0gPSBlbGVtWyBkaXIgXSApICYmIGVsZW0ubm9kZVR5cGUgIT09IDkgKSB7XG5cdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0aWYgKCB0cnVuY2F0ZSAmJiBqUXVlcnkoIGVsZW0gKS5pcyggdW50aWwgKSApIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRtYXRjaGVkLnB1c2goIGVsZW0gKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG1hdGNoZWQ7XG59O1xuXG5cbnZhciBzaWJsaW5ncyA9IGZ1bmN0aW9uKCBuLCBlbGVtICkge1xuXHR2YXIgbWF0Y2hlZCA9IFtdO1xuXG5cdGZvciAoIDsgbjsgbiA9IG4ubmV4dFNpYmxpbmcgKSB7XG5cdFx0aWYgKCBuLm5vZGVUeXBlID09PSAxICYmIG4gIT09IGVsZW0gKSB7XG5cdFx0XHRtYXRjaGVkLnB1c2goIG4gKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbWF0Y2hlZDtcbn07XG5cblxudmFyIHJuZWVkc0NvbnRleHQgPSBqUXVlcnkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7XG5cbnZhciByc2luZ2xlVGFnID0gKCAvXjwoW2Etel1bXlxcL1xcMD46XFx4MjBcXHRcXHJcXG5cXGZdKilbXFx4MjBcXHRcXHJcXG5cXGZdKlxcLz8+KD86PFxcL1xcMT58KSQvaSApO1xuXG5cblxuLy8gSW1wbGVtZW50IHRoZSBpZGVudGljYWwgZnVuY3Rpb25hbGl0eSBmb3IgZmlsdGVyIGFuZCBub3RcbmZ1bmN0aW9uIHdpbm5vdyggZWxlbWVudHMsIHF1YWxpZmllciwgbm90ICkge1xuXHRpZiAoIGlzRnVuY3Rpb24oIHF1YWxpZmllciApICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtLCBpICkge1xuXHRcdFx0cmV0dXJuICEhcXVhbGlmaWVyLmNhbGwoIGVsZW0sIGksIGVsZW0gKSAhPT0gbm90O1xuXHRcdH0gKTtcblx0fVxuXG5cdC8vIFNpbmdsZSBlbGVtZW50XG5cdGlmICggcXVhbGlmaWVyLm5vZGVUeXBlICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuICggZWxlbSA9PT0gcXVhbGlmaWVyICkgIT09IG5vdDtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBBcnJheWxpa2Ugb2YgZWxlbWVudHMgKGpRdWVyeSwgYXJndW1lbnRzLCBBcnJheSlcblx0aWYgKCB0eXBlb2YgcXVhbGlmaWVyICE9PSBcInN0cmluZ1wiICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuICggaW5kZXhPZi5jYWxsKCBxdWFsaWZpZXIsIGVsZW0gKSA+IC0xICkgIT09IG5vdDtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBGaWx0ZXJlZCBkaXJlY3RseSBmb3IgYm90aCBzaW1wbGUgYW5kIGNvbXBsZXggc2VsZWN0b3JzXG5cdHJldHVybiBqUXVlcnkuZmlsdGVyKCBxdWFsaWZpZXIsIGVsZW1lbnRzLCBub3QgKTtcbn1cblxualF1ZXJ5LmZpbHRlciA9IGZ1bmN0aW9uKCBleHByLCBlbGVtcywgbm90ICkge1xuXHR2YXIgZWxlbSA9IGVsZW1zWyAwIF07XG5cblx0aWYgKCBub3QgKSB7XG5cdFx0ZXhwciA9IFwiOm5vdChcIiArIGV4cHIgKyBcIilcIjtcblx0fVxuXG5cdGlmICggZWxlbXMubGVuZ3RoID09PSAxICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvciggZWxlbSwgZXhwciApID8gWyBlbGVtIF0gOiBbXTtcblx0fVxuXG5cdHJldHVybiBqUXVlcnkuZmluZC5tYXRjaGVzKCBleHByLCBqUXVlcnkuZ3JlcCggZWxlbXMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBlbGVtLm5vZGVUeXBlID09PSAxO1xuXHR9ICkgKTtcbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0ZmluZDogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHZhciBpLCByZXQsXG5cdFx0XHRsZW4gPSB0aGlzLmxlbmd0aCxcblx0XHRcdHNlbGYgPSB0aGlzO1xuXG5cdFx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIGpRdWVyeSggc2VsZWN0b3IgKS5maWx0ZXIoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHRcdGlmICggalF1ZXJ5LmNvbnRhaW5zKCBzZWxmWyBpIF0sIHRoaXMgKSApIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApICk7XG5cdFx0fVxuXG5cdFx0cmV0ID0gdGhpcy5wdXNoU3RhY2soIFtdICk7XG5cblx0XHRmb3IgKCBpID0gMDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0alF1ZXJ5LmZpbmQoIHNlbGVjdG9yLCBzZWxmWyBpIF0sIHJldCApO1xuXHRcdH1cblxuXHRcdHJldHVybiBsZW4gPiAxID8galF1ZXJ5LnVuaXF1ZVNvcnQoIHJldCApIDogcmV0O1xuXHR9LFxuXHRmaWx0ZXI6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHdpbm5vdyggdGhpcywgc2VsZWN0b3IgfHwgW10sIGZhbHNlICkgKTtcblx0fSxcblx0bm90OiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCB3aW5ub3coIHRoaXMsIHNlbGVjdG9yIHx8IFtdLCB0cnVlICkgKTtcblx0fSxcblx0aXM6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gISF3aW5ub3coXG5cdFx0XHR0aGlzLFxuXG5cdFx0XHQvLyBJZiB0aGlzIGlzIGEgcG9zaXRpb25hbC9yZWxhdGl2ZSBzZWxlY3RvciwgY2hlY2sgbWVtYmVyc2hpcCBpbiB0aGUgcmV0dXJuZWQgc2V0XG5cdFx0XHQvLyBzbyAkKFwicDpmaXJzdFwiKS5pcyhcInA6bGFzdFwiKSB3b24ndCByZXR1cm4gdHJ1ZSBmb3IgYSBkb2Mgd2l0aCB0d28gXCJwXCIuXG5cdFx0XHR0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgJiYgcm5lZWRzQ29udGV4dC50ZXN0KCBzZWxlY3RvciApID9cblx0XHRcdFx0alF1ZXJ5KCBzZWxlY3RvciApIDpcblx0XHRcdFx0c2VsZWN0b3IgfHwgW10sXG5cdFx0XHRmYWxzZVxuXHRcdCkubGVuZ3RoO1xuXHR9XG59ICk7XG5cblxuLy8gSW5pdGlhbGl6ZSBhIGpRdWVyeSBvYmplY3RcblxuXG4vLyBBIGNlbnRyYWwgcmVmZXJlbmNlIHRvIHRoZSByb290IGpRdWVyeShkb2N1bWVudClcbnZhciByb290alF1ZXJ5LFxuXG5cdC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXG5cdC8vIFByaW9yaXRpemUgI2lkIG92ZXIgPHRhZz4gdG8gYXZvaWQgWFNTIHZpYSBsb2NhdGlvbi5oYXNoICh0cmFjLTk1MjEpXG5cdC8vIFN0cmljdCBIVE1MIHJlY29nbml0aW9uICh0cmFjLTExMjkwOiBtdXN0IHN0YXJ0IHdpdGggPClcblx0Ly8gU2hvcnRjdXQgc2ltcGxlICNpZCBjYXNlIGZvciBzcGVlZFxuXHRycXVpY2tFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC8sXG5cblx0aW5pdCA9IGpRdWVyeS5mbi5pbml0ID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0LCByb290ICkge1xuXHRcdHZhciBtYXRjaCwgZWxlbTtcblxuXHRcdC8vIEhBTkRMRTogJChcIlwiKSwgJChudWxsKSwgJCh1bmRlZmluZWQpLCAkKGZhbHNlKVxuXHRcdGlmICggIXNlbGVjdG9yICkge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0Ly8gTWV0aG9kIGluaXQoKSBhY2NlcHRzIGFuIGFsdGVybmF0ZSByb290alF1ZXJ5XG5cdFx0Ly8gc28gbWlncmF0ZSBjYW4gc3VwcG9ydCBqUXVlcnkuc3ViIChnaC0yMTAxKVxuXHRcdHJvb3QgPSByb290IHx8IHJvb3RqUXVlcnk7XG5cblx0XHQvLyBIYW5kbGUgSFRNTCBzdHJpbmdzXG5cdFx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRpZiAoIHNlbGVjdG9yWyAwIF0gPT09IFwiPFwiICYmXG5cdFx0XHRcdHNlbGVjdG9yWyBzZWxlY3Rvci5sZW5ndGggLSAxIF0gPT09IFwiPlwiICYmXG5cdFx0XHRcdHNlbGVjdG9yLmxlbmd0aCA+PSAzICkge1xuXG5cdFx0XHRcdC8vIEFzc3VtZSB0aGF0IHN0cmluZ3MgdGhhdCBzdGFydCBhbmQgZW5kIHdpdGggPD4gYXJlIEhUTUwgYW5kIHNraXAgdGhlIHJlZ2V4IGNoZWNrXG5cdFx0XHRcdG1hdGNoID0gWyBudWxsLCBzZWxlY3RvciwgbnVsbCBdO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtYXRjaCA9IHJxdWlja0V4cHIuZXhlYyggc2VsZWN0b3IgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTWF0Y2ggaHRtbCBvciBtYWtlIHN1cmUgbm8gY29udGV4dCBpcyBzcGVjaWZpZWQgZm9yICNpZFxuXHRcdFx0aWYgKCBtYXRjaCAmJiAoIG1hdGNoWyAxIF0gfHwgIWNvbnRleHQgKSApIHtcblxuXHRcdFx0XHQvLyBIQU5ETEU6ICQoaHRtbCkgLT4gJChhcnJheSlcblx0XHRcdFx0aWYgKCBtYXRjaFsgMSBdICkge1xuXHRcdFx0XHRcdGNvbnRleHQgPSBjb250ZXh0IGluc3RhbmNlb2YgalF1ZXJ5ID8gY29udGV4dFsgMCBdIDogY29udGV4dDtcblxuXHRcdFx0XHRcdC8vIE9wdGlvbiB0byBydW4gc2NyaXB0cyBpcyB0cnVlIGZvciBiYWNrLWNvbXBhdFxuXHRcdFx0XHRcdC8vIEludGVudGlvbmFsbHkgbGV0IHRoZSBlcnJvciBiZSB0aHJvd24gaWYgcGFyc2VIVE1MIGlzIG5vdCBwcmVzZW50XG5cdFx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCB0aGlzLCBqUXVlcnkucGFyc2VIVE1MKFxuXHRcdFx0XHRcdFx0bWF0Y2hbIDEgXSxcblx0XHRcdFx0XHRcdGNvbnRleHQgJiYgY29udGV4dC5ub2RlVHlwZSA/IGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0IDogZG9jdW1lbnQsXG5cdFx0XHRcdFx0XHR0cnVlXG5cdFx0XHRcdFx0KSApO1xuXG5cdFx0XHRcdFx0Ly8gSEFORExFOiAkKGh0bWwsIHByb3BzKVxuXHRcdFx0XHRcdGlmICggcnNpbmdsZVRhZy50ZXN0KCBtYXRjaFsgMSBdICkgJiYgalF1ZXJ5LmlzUGxhaW5PYmplY3QoIGNvbnRleHQgKSApIHtcblx0XHRcdFx0XHRcdGZvciAoIG1hdGNoIGluIGNvbnRleHQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gUHJvcGVydGllcyBvZiBjb250ZXh0IGFyZSBjYWxsZWQgYXMgbWV0aG9kcyBpZiBwb3NzaWJsZVxuXHRcdFx0XHRcdFx0XHRpZiAoIGlzRnVuY3Rpb24oIHRoaXNbIG1hdGNoIF0gKSApIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzWyBtYXRjaCBdKCBjb250ZXh0WyBtYXRjaCBdICk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gLi4uYW5kIG90aGVyd2lzZSBzZXQgYXMgYXR0cmlidXRlc1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuYXR0ciggbWF0Y2gsIGNvbnRleHRbIG1hdGNoIF0gKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0XHRcdC8vIEhBTkRMRTogJCgjaWQpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBtYXRjaFsgMiBdICk7XG5cblx0XHRcdFx0XHRpZiAoIGVsZW0gKSB7XG5cblx0XHRcdFx0XHRcdC8vIEluamVjdCB0aGUgZWxlbWVudCBkaXJlY3RseSBpbnRvIHRoZSBqUXVlcnkgb2JqZWN0XG5cdFx0XHRcdFx0XHR0aGlzWyAwIF0gPSBlbGVtO1xuXHRcdFx0XHRcdFx0dGhpcy5sZW5ndGggPSAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBIQU5ETEU6ICQoZXhwciwgJCguLi4pKVxuXHRcdFx0fSBlbHNlIGlmICggIWNvbnRleHQgfHwgY29udGV4dC5qcXVlcnkgKSB7XG5cdFx0XHRcdHJldHVybiAoIGNvbnRleHQgfHwgcm9vdCApLmZpbmQoIHNlbGVjdG9yICk7XG5cblx0XHRcdC8vIEhBTkRMRTogJChleHByLCBjb250ZXh0KVxuXHRcdFx0Ly8gKHdoaWNoIGlzIGp1c3QgZXF1aXZhbGVudCB0bzogJChjb250ZXh0KS5maW5kKGV4cHIpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvciggY29udGV4dCApLmZpbmQoIHNlbGVjdG9yICk7XG5cdFx0XHR9XG5cblx0XHQvLyBIQU5ETEU6ICQoRE9NRWxlbWVudClcblx0XHR9IGVsc2UgaWYgKCBzZWxlY3Rvci5ub2RlVHlwZSApIHtcblx0XHRcdHRoaXNbIDAgXSA9IHNlbGVjdG9yO1xuXHRcdFx0dGhpcy5sZW5ndGggPSAxO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHQvLyBIQU5ETEU6ICQoZnVuY3Rpb24pXG5cdFx0Ly8gU2hvcnRjdXQgZm9yIGRvY3VtZW50IHJlYWR5XG5cdFx0fSBlbHNlIGlmICggaXNGdW5jdGlvbiggc2VsZWN0b3IgKSApIHtcblx0XHRcdHJldHVybiByb290LnJlYWR5ICE9PSB1bmRlZmluZWQgP1xuXHRcdFx0XHRyb290LnJlYWR5KCBzZWxlY3RvciApIDpcblxuXHRcdFx0XHQvLyBFeGVjdXRlIGltbWVkaWF0ZWx5IGlmIHJlYWR5IGlzIG5vdCBwcmVzZW50XG5cdFx0XHRcdHNlbGVjdG9yKCBqUXVlcnkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4galF1ZXJ5Lm1ha2VBcnJheSggc2VsZWN0b3IsIHRoaXMgKTtcblx0fTtcblxuLy8gR2l2ZSB0aGUgaW5pdCBmdW5jdGlvbiB0aGUgalF1ZXJ5IHByb3RvdHlwZSBmb3IgbGF0ZXIgaW5zdGFudGlhdGlvblxuaW5pdC5wcm90b3R5cGUgPSBqUXVlcnkuZm47XG5cbi8vIEluaXRpYWxpemUgY2VudHJhbCByZWZlcmVuY2VcbnJvb3RqUXVlcnkgPSBqUXVlcnkoIGRvY3VtZW50ICk7XG5cblxudmFyIHJwYXJlbnRzcHJldiA9IC9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLFxuXG5cdC8vIE1ldGhvZHMgZ3VhcmFudGVlZCB0byBwcm9kdWNlIGEgdW5pcXVlIHNldCB3aGVuIHN0YXJ0aW5nIGZyb20gYSB1bmlxdWUgc2V0XG5cdGd1YXJhbnRlZWRVbmlxdWUgPSB7XG5cdFx0Y2hpbGRyZW46IHRydWUsXG5cdFx0Y29udGVudHM6IHRydWUsXG5cdFx0bmV4dDogdHJ1ZSxcblx0XHRwcmV2OiB0cnVlXG5cdH07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0aGFzOiBmdW5jdGlvbiggdGFyZ2V0ICkge1xuXHRcdHZhciB0YXJnZXRzID0galF1ZXJ5KCB0YXJnZXQsIHRoaXMgKSxcblx0XHRcdGwgPSB0YXJnZXRzLmxlbmd0aDtcblxuXHRcdHJldHVybiB0aGlzLmZpbHRlciggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdGlmICggalF1ZXJ5LmNvbnRhaW5zKCB0aGlzLCB0YXJnZXRzWyBpIF0gKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRjbG9zZXN0OiBmdW5jdGlvbiggc2VsZWN0b3JzLCBjb250ZXh0ICkge1xuXHRcdHZhciBjdXIsXG5cdFx0XHRpID0gMCxcblx0XHRcdGwgPSB0aGlzLmxlbmd0aCxcblx0XHRcdG1hdGNoZWQgPSBbXSxcblx0XHRcdHRhcmdldHMgPSB0eXBlb2Ygc2VsZWN0b3JzICE9PSBcInN0cmluZ1wiICYmIGpRdWVyeSggc2VsZWN0b3JzICk7XG5cblx0XHQvLyBQb3NpdGlvbmFsIHNlbGVjdG9ycyBuZXZlciBtYXRjaCwgc2luY2UgdGhlcmUncyBubyBfc2VsZWN0aW9uXyBjb250ZXh0XG5cdFx0aWYgKCAhcm5lZWRzQ29udGV4dC50ZXN0KCBzZWxlY3RvcnMgKSApIHtcblx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0Zm9yICggY3VyID0gdGhpc1sgaSBdOyBjdXIgJiYgY3VyICE9PSBjb250ZXh0OyBjdXIgPSBjdXIucGFyZW50Tm9kZSApIHtcblxuXHRcdFx0XHRcdC8vIEFsd2F5cyBza2lwIGRvY3VtZW50IGZyYWdtZW50c1xuXHRcdFx0XHRcdGlmICggY3VyLm5vZGVUeXBlIDwgMTEgJiYgKCB0YXJnZXRzID9cblx0XHRcdFx0XHRcdHRhcmdldHMuaW5kZXgoIGN1ciApID4gLTEgOlxuXG5cdFx0XHRcdFx0XHQvLyBEb24ndCBwYXNzIG5vbi1lbGVtZW50cyB0byBqUXVlcnkjZmluZFxuXHRcdFx0XHRcdFx0Y3VyLm5vZGVUeXBlID09PSAxICYmXG5cdFx0XHRcdFx0XHRcdGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvciggY3VyLCBzZWxlY3RvcnMgKSApICkge1xuXG5cdFx0XHRcdFx0XHRtYXRjaGVkLnB1c2goIGN1ciApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBtYXRjaGVkLmxlbmd0aCA+IDEgPyBqUXVlcnkudW5pcXVlU29ydCggbWF0Y2hlZCApIDogbWF0Y2hlZCApO1xuXHR9LFxuXG5cdC8vIERldGVybWluZSB0aGUgcG9zaXRpb24gb2YgYW4gZWxlbWVudCB3aXRoaW4gdGhlIHNldFxuXHRpbmRleDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHQvLyBObyBhcmd1bWVudCwgcmV0dXJuIGluZGV4IGluIHBhcmVudFxuXHRcdGlmICggIWVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gKCB0aGlzWyAwIF0gJiYgdGhpc1sgMCBdLnBhcmVudE5vZGUgKSA/IHRoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoIDogLTE7XG5cdFx0fVxuXG5cdFx0Ly8gSW5kZXggaW4gc2VsZWN0b3Jcblx0XHRpZiAoIHR5cGVvZiBlbGVtID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0cmV0dXJuIGluZGV4T2YuY2FsbCggalF1ZXJ5KCBlbGVtICksIHRoaXNbIDAgXSApO1xuXHRcdH1cblxuXHRcdC8vIExvY2F0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGRlc2lyZWQgZWxlbWVudFxuXHRcdHJldHVybiBpbmRleE9mLmNhbGwoIHRoaXMsXG5cblx0XHRcdC8vIElmIGl0IHJlY2VpdmVzIGEgalF1ZXJ5IG9iamVjdCwgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdXNlZFxuXHRcdFx0ZWxlbS5qcXVlcnkgPyBlbGVtWyAwIF0gOiBlbGVtXG5cdFx0KTtcblx0fSxcblxuXHRhZGQ6IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCApIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soXG5cdFx0XHRqUXVlcnkudW5pcXVlU29ydChcblx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCB0aGlzLmdldCgpLCBqUXVlcnkoIHNlbGVjdG9yLCBjb250ZXh0ICkgKVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0YWRkQmFjazogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiB0aGlzLmFkZCggc2VsZWN0b3IgPT0gbnVsbCA/XG5cdFx0XHR0aGlzLnByZXZPYmplY3QgOiB0aGlzLnByZXZPYmplY3QuZmlsdGVyKCBzZWxlY3RvciApXG5cdFx0KTtcblx0fVxufSApO1xuXG5mdW5jdGlvbiBzaWJsaW5nKCBjdXIsIGRpciApIHtcblx0d2hpbGUgKCAoIGN1ciA9IGN1clsgZGlyIF0gKSAmJiBjdXIubm9kZVR5cGUgIT09IDEgKSB7fVxuXHRyZXR1cm4gY3VyO1xufVxuXG5qUXVlcnkuZWFjaCgge1xuXHRwYXJlbnQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cdFx0cmV0dXJuIHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgIT09IDExID8gcGFyZW50IDogbnVsbDtcblx0fSxcblx0cGFyZW50czogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJwYXJlbnROb2RlXCIgKTtcblx0fSxcblx0cGFyZW50c1VudGlsOiBmdW5jdGlvbiggZWxlbSwgX2ksIHVudGlsICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwicGFyZW50Tm9kZVwiLCB1bnRpbCApO1xuXHR9LFxuXHRuZXh0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gc2libGluZyggZWxlbSwgXCJuZXh0U2libGluZ1wiICk7XG5cdH0sXG5cdHByZXY6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBzaWJsaW5nKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiICk7XG5cdH0sXG5cdG5leHRBbGw6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwibmV4dFNpYmxpbmdcIiApO1xuXHR9LFxuXHRwcmV2QWxsOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiICk7XG5cdH0sXG5cdG5leHRVbnRpbDogZnVuY3Rpb24oIGVsZW0sIF9pLCB1bnRpbCApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcIm5leHRTaWJsaW5nXCIsIHVudGlsICk7XG5cdH0sXG5cdHByZXZVbnRpbDogZnVuY3Rpb24oIGVsZW0sIF9pLCB1bnRpbCApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiLCB1bnRpbCApO1xuXHR9LFxuXHRzaWJsaW5nczogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIHNpYmxpbmdzKCAoIGVsZW0ucGFyZW50Tm9kZSB8fCB7fSApLmZpcnN0Q2hpbGQsIGVsZW0gKTtcblx0fSxcblx0Y2hpbGRyZW46IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBzaWJsaW5ncyggZWxlbS5maXJzdENoaWxkICk7XG5cdH0sXG5cdGNvbnRlbnRzOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRpZiAoIGVsZW0uY29udGVudERvY3VtZW50ICE9IG51bGwgJiZcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgMTErXG5cdFx0XHQvLyA8b2JqZWN0PiBlbGVtZW50cyB3aXRoIG5vIGBkYXRhYCBhdHRyaWJ1dGUgaGFzIGFuIG9iamVjdFxuXHRcdFx0Ly8gYGNvbnRlbnREb2N1bWVudGAgd2l0aCBhIGBudWxsYCBwcm90b3R5cGUuXG5cdFx0XHRnZXRQcm90byggZWxlbS5jb250ZW50RG9jdW1lbnQgKSApIHtcblxuXHRcdFx0cmV0dXJuIGVsZW0uY29udGVudERvY3VtZW50O1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSBvbmx5LCBpT1MgNyBvbmx5LCBBbmRyb2lkIEJyb3dzZXIgPD00LjMgb25seVxuXHRcdC8vIFRyZWF0IHRoZSB0ZW1wbGF0ZSBlbGVtZW50IGFzIGEgcmVndWxhciBvbmUgaW4gYnJvd3NlcnMgdGhhdFxuXHRcdC8vIGRvbid0IHN1cHBvcnQgaXQuXG5cdFx0aWYgKCBub2RlTmFtZSggZWxlbSwgXCJ0ZW1wbGF0ZVwiICkgKSB7XG5cdFx0XHRlbGVtID0gZWxlbS5jb250ZW50IHx8IGVsZW07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGpRdWVyeS5tZXJnZSggW10sIGVsZW0uY2hpbGROb2RlcyApO1xuXHR9XG59LCBmdW5jdGlvbiggbmFtZSwgZm4gKSB7XG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIHVudGlsLCBzZWxlY3RvciApIHtcblx0XHR2YXIgbWF0Y2hlZCA9IGpRdWVyeS5tYXAoIHRoaXMsIGZuLCB1bnRpbCApO1xuXG5cdFx0aWYgKCBuYW1lLnNsaWNlKCAtNSApICE9PSBcIlVudGlsXCIgKSB7XG5cdFx0XHRzZWxlY3RvciA9IHVudGlsO1xuXHRcdH1cblxuXHRcdGlmICggc2VsZWN0b3IgJiYgdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0bWF0Y2hlZCA9IGpRdWVyeS5maWx0ZXIoIHNlbGVjdG9yLCBtYXRjaGVkICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLmxlbmd0aCA+IDEgKSB7XG5cblx0XHRcdC8vIFJlbW92ZSBkdXBsaWNhdGVzXG5cdFx0XHRpZiAoICFndWFyYW50ZWVkVW5pcXVlWyBuYW1lIF0gKSB7XG5cdFx0XHRcdGpRdWVyeS51bmlxdWVTb3J0KCBtYXRjaGVkICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJldmVyc2Ugb3JkZXIgZm9yIHBhcmVudHMqIGFuZCBwcmV2LWRlcml2YXRpdmVzXG5cdFx0XHRpZiAoIHJwYXJlbnRzcHJldi50ZXN0KCBuYW1lICkgKSB7XG5cdFx0XHRcdG1hdGNoZWQucmV2ZXJzZSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggbWF0Y2hlZCApO1xuXHR9O1xufSApO1xudmFyIHJub3RodG1sd2hpdGUgPSAoIC9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZyApO1xuXG5cblxuLy8gQ29udmVydCBTdHJpbmctZm9ybWF0dGVkIG9wdGlvbnMgaW50byBPYmplY3QtZm9ybWF0dGVkIG9uZXNcbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMoIG9wdGlvbnMgKSB7XG5cdHZhciBvYmplY3QgPSB7fTtcblx0alF1ZXJ5LmVhY2goIG9wdGlvbnMubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXSwgZnVuY3Rpb24oIF8sIGZsYWcgKSB7XG5cdFx0b2JqZWN0WyBmbGFnIF0gPSB0cnVlO1xuXHR9ICk7XG5cdHJldHVybiBvYmplY3Q7XG59XG5cbi8qXG4gKiBDcmVhdGUgYSBjYWxsYmFjayBsaXN0IHVzaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcbiAqXG4gKlx0b3B0aW9uczogYW4gb3B0aW9uYWwgbGlzdCBvZiBzcGFjZS1zZXBhcmF0ZWQgb3B0aW9ucyB0aGF0IHdpbGwgY2hhbmdlIGhvd1xuICpcdFx0XHR0aGUgY2FsbGJhY2sgbGlzdCBiZWhhdmVzIG9yIGEgbW9yZSB0cmFkaXRpb25hbCBvcHRpb24gb2JqZWN0XG4gKlxuICogQnkgZGVmYXVsdCBhIGNhbGxiYWNrIGxpc3Qgd2lsbCBhY3QgbGlrZSBhbiBldmVudCBjYWxsYmFjayBsaXN0IGFuZCBjYW4gYmVcbiAqIFwiZmlyZWRcIiBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBQb3NzaWJsZSBvcHRpb25zOlxuICpcbiAqXHRvbmNlOlx0XHRcdHdpbGwgZW5zdXJlIHRoZSBjYWxsYmFjayBsaXN0IGNhbiBvbmx5IGJlIGZpcmVkIG9uY2UgKGxpa2UgYSBEZWZlcnJlZClcbiAqXG4gKlx0bWVtb3J5Olx0XHRcdHdpbGwga2VlcCB0cmFjayBvZiBwcmV2aW91cyB2YWx1ZXMgYW5kIHdpbGwgY2FsbCBhbnkgY2FsbGJhY2sgYWRkZWRcbiAqXHRcdFx0XHRcdGFmdGVyIHRoZSBsaXN0IGhhcyBiZWVuIGZpcmVkIHJpZ2h0IGF3YXkgd2l0aCB0aGUgbGF0ZXN0IFwibWVtb3JpemVkXCJcbiAqXHRcdFx0XHRcdHZhbHVlcyAobGlrZSBhIERlZmVycmVkKVxuICpcbiAqXHR1bmlxdWU6XHRcdFx0d2lsbCBlbnN1cmUgYSBjYWxsYmFjayBjYW4gb25seSBiZSBhZGRlZCBvbmNlIChubyBkdXBsaWNhdGUgaW4gdGhlIGxpc3QpXG4gKlxuICpcdHN0b3BPbkZhbHNlOlx0aW50ZXJydXB0IGNhbGxpbmdzIHdoZW4gYSBjYWxsYmFjayByZXR1cm5zIGZhbHNlXG4gKlxuICovXG5qUXVlcnkuQ2FsbGJhY2tzID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cblx0Ly8gQ29udmVydCBvcHRpb25zIGZyb20gU3RyaW5nLWZvcm1hdHRlZCB0byBPYmplY3QtZm9ybWF0dGVkIGlmIG5lZWRlZFxuXHQvLyAod2UgY2hlY2sgaW4gY2FjaGUgZmlyc3QpXG5cdG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiA/XG5cdFx0Y3JlYXRlT3B0aW9ucyggb3B0aW9ucyApIDpcblx0XHRqUXVlcnkuZXh0ZW5kKCB7fSwgb3B0aW9ucyApO1xuXG5cdHZhciAvLyBGbGFnIHRvIGtub3cgaWYgbGlzdCBpcyBjdXJyZW50bHkgZmlyaW5nXG5cdFx0ZmlyaW5nLFxuXG5cdFx0Ly8gTGFzdCBmaXJlIHZhbHVlIGZvciBub24tZm9yZ2V0dGFibGUgbGlzdHNcblx0XHRtZW1vcnksXG5cblx0XHQvLyBGbGFnIHRvIGtub3cgaWYgbGlzdCB3YXMgYWxyZWFkeSBmaXJlZFxuXHRcdGZpcmVkLFxuXG5cdFx0Ly8gRmxhZyB0byBwcmV2ZW50IGZpcmluZ1xuXHRcdGxvY2tlZCxcblxuXHRcdC8vIEFjdHVhbCBjYWxsYmFjayBsaXN0XG5cdFx0bGlzdCA9IFtdLFxuXG5cdFx0Ly8gUXVldWUgb2YgZXhlY3V0aW9uIGRhdGEgZm9yIHJlcGVhdGFibGUgbGlzdHNcblx0XHRxdWV1ZSA9IFtdLFxuXG5cdFx0Ly8gSW5kZXggb2YgY3VycmVudGx5IGZpcmluZyBjYWxsYmFjayAobW9kaWZpZWQgYnkgYWRkL3JlbW92ZSBhcyBuZWVkZWQpXG5cdFx0ZmlyaW5nSW5kZXggPSAtMSxcblxuXHRcdC8vIEZpcmUgY2FsbGJhY2tzXG5cdFx0ZmlyZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBFbmZvcmNlIHNpbmdsZS1maXJpbmdcblx0XHRcdGxvY2tlZCA9IGxvY2tlZCB8fCBvcHRpb25zLm9uY2U7XG5cblx0XHRcdC8vIEV4ZWN1dGUgY2FsbGJhY2tzIGZvciBhbGwgcGVuZGluZyBleGVjdXRpb25zLFxuXHRcdFx0Ly8gcmVzcGVjdGluZyBmaXJpbmdJbmRleCBvdmVycmlkZXMgYW5kIHJ1bnRpbWUgY2hhbmdlc1xuXHRcdFx0ZmlyZWQgPSBmaXJpbmcgPSB0cnVlO1xuXHRcdFx0Zm9yICggOyBxdWV1ZS5sZW5ndGg7IGZpcmluZ0luZGV4ID0gLTEgKSB7XG5cdFx0XHRcdG1lbW9yeSA9IHF1ZXVlLnNoaWZ0KCk7XG5cdFx0XHRcdHdoaWxlICggKytmaXJpbmdJbmRleCA8IGxpc3QubGVuZ3RoICkge1xuXG5cdFx0XHRcdFx0Ly8gUnVuIGNhbGxiYWNrIGFuZCBjaGVjayBmb3IgZWFybHkgdGVybWluYXRpb25cblx0XHRcdFx0XHRpZiAoIGxpc3RbIGZpcmluZ0luZGV4IF0uYXBwbHkoIG1lbW9yeVsgMCBdLCBtZW1vcnlbIDEgXSApID09PSBmYWxzZSAmJlxuXHRcdFx0XHRcdFx0b3B0aW9ucy5zdG9wT25GYWxzZSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gSnVtcCB0byBlbmQgYW5kIGZvcmdldCB0aGUgZGF0YSBzbyAuYWRkIGRvZXNuJ3QgcmUtZmlyZVxuXHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXggPSBsaXN0Lmxlbmd0aDtcblx0XHRcdFx0XHRcdG1lbW9yeSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3JnZXQgdGhlIGRhdGEgaWYgd2UncmUgZG9uZSB3aXRoIGl0XG5cdFx0XHRpZiAoICFvcHRpb25zLm1lbW9yeSApIHtcblx0XHRcdFx0bWVtb3J5ID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGZpcmluZyA9IGZhbHNlO1xuXG5cdFx0XHQvLyBDbGVhbiB1cCBpZiB3ZSdyZSBkb25lIGZpcmluZyBmb3IgZ29vZFxuXHRcdFx0aWYgKCBsb2NrZWQgKSB7XG5cblx0XHRcdFx0Ly8gS2VlcCBhbiBlbXB0eSBsaXN0IGlmIHdlIGhhdmUgZGF0YSBmb3IgZnV0dXJlIGFkZCBjYWxsc1xuXHRcdFx0XHRpZiAoIG1lbW9yeSApIHtcblx0XHRcdFx0XHRsaXN0ID0gW107XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCB0aGlzIG9iamVjdCBpcyBzcGVudFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxpc3QgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIEFjdHVhbCBDYWxsYmFja3Mgb2JqZWN0XG5cdFx0c2VsZiA9IHtcblxuXHRcdFx0Ly8gQWRkIGEgY2FsbGJhY2sgb3IgYSBjb2xsZWN0aW9uIG9mIGNhbGxiYWNrcyB0byB0aGUgbGlzdFxuXHRcdFx0YWRkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBsaXN0ICkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBtZW1vcnkgZnJvbSBhIHBhc3QgcnVuLCB3ZSBzaG91bGQgZmlyZSBhZnRlciBhZGRpbmdcblx0XHRcdFx0XHRpZiAoIG1lbW9yeSAmJiAhZmlyaW5nICkge1xuXHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXggPSBsaXN0Lmxlbmd0aCAtIDE7XG5cdFx0XHRcdFx0XHRxdWV1ZS5wdXNoKCBtZW1vcnkgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQoIGZ1bmN0aW9uIGFkZCggYXJncyApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5lYWNoKCBhcmdzLCBmdW5jdGlvbiggXywgYXJnICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIGlzRnVuY3Rpb24oIGFyZyApICkge1xuXHRcdFx0XHRcdFx0XHRcdGlmICggIW9wdGlvbnMudW5pcXVlIHx8ICFzZWxmLmhhcyggYXJnICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0LnB1c2goIGFyZyApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggYXJnICYmIGFyZy5sZW5ndGggJiYgdG9UeXBlKCBhcmcgKSAhPT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIEluc3BlY3QgcmVjdXJzaXZlbHlcblx0XHRcdFx0XHRcdFx0XHRhZGQoIGFyZyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fSApKCBhcmd1bWVudHMgKTtcblxuXHRcdFx0XHRcdGlmICggbWVtb3J5ICYmICFmaXJpbmcgKSB7XG5cdFx0XHRcdFx0XHRmaXJlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gUmVtb3ZlIGEgY2FsbGJhY2sgZnJvbSB0aGUgbGlzdFxuXHRcdFx0cmVtb3ZlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5LmVhY2goIGFyZ3VtZW50cywgZnVuY3Rpb24oIF8sIGFyZyApIHtcblx0XHRcdFx0XHR2YXIgaW5kZXg7XG5cdFx0XHRcdFx0d2hpbGUgKCAoIGluZGV4ID0galF1ZXJ5LmluQXJyYXkoIGFyZywgbGlzdCwgaW5kZXggKSApID4gLTEgKSB7XG5cdFx0XHRcdFx0XHRsaXN0LnNwbGljZSggaW5kZXgsIDEgKTtcblxuXHRcdFx0XHRcdFx0Ly8gSGFuZGxlIGZpcmluZyBpbmRleGVzXG5cdFx0XHRcdFx0XHRpZiAoIGluZGV4IDw9IGZpcmluZ0luZGV4ICkge1xuXHRcdFx0XHRcdFx0XHRmaXJpbmdJbmRleC0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIENoZWNrIGlmIGEgZ2l2ZW4gY2FsbGJhY2sgaXMgaW4gdGhlIGxpc3QuXG5cdFx0XHQvLyBJZiBubyBhcmd1bWVudCBpcyBnaXZlbiwgcmV0dXJuIHdoZXRoZXIgb3Igbm90IGxpc3QgaGFzIGNhbGxiYWNrcyBhdHRhY2hlZC5cblx0XHRcdGhhczogZnVuY3Rpb24oIGZuICkge1xuXHRcdFx0XHRyZXR1cm4gZm4gP1xuXHRcdFx0XHRcdGpRdWVyeS5pbkFycmF5KCBmbiwgbGlzdCApID4gLTEgOlxuXHRcdFx0XHRcdGxpc3QubGVuZ3RoID4gMDtcblx0XHRcdH0sXG5cblx0XHRcdC8vIFJlbW92ZSBhbGwgY2FsbGJhY2tzIGZyb20gdGhlIGxpc3Rcblx0XHRcdGVtcHR5OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBsaXN0ICkge1xuXHRcdFx0XHRcdGxpc3QgPSBbXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIERpc2FibGUgLmZpcmUgYW5kIC5hZGRcblx0XHRcdC8vIEFib3J0IGFueSBjdXJyZW50L3BlbmRpbmcgZXhlY3V0aW9uc1xuXHRcdFx0Ly8gQ2xlYXIgYWxsIGNhbGxiYWNrcyBhbmQgdmFsdWVzXG5cdFx0XHRkaXNhYmxlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0bG9ja2VkID0gcXVldWUgPSBbXTtcblx0XHRcdFx0bGlzdCA9IG1lbW9yeSA9IFwiXCI7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblx0XHRcdGRpc2FibGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICFsaXN0O1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gRGlzYWJsZSAuZmlyZVxuXHRcdFx0Ly8gQWxzbyBkaXNhYmxlIC5hZGQgdW5sZXNzIHdlIGhhdmUgbWVtb3J5IChzaW5jZSBpdCB3b3VsZCBoYXZlIG5vIGVmZmVjdClcblx0XHRcdC8vIEFib3J0IGFueSBwZW5kaW5nIGV4ZWN1dGlvbnNcblx0XHRcdGxvY2s6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsb2NrZWQgPSBxdWV1ZSA9IFtdO1xuXHRcdFx0XHRpZiAoICFtZW1vcnkgJiYgIWZpcmluZyApIHtcblx0XHRcdFx0XHRsaXN0ID0gbWVtb3J5ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHRsb2NrZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISFsb2NrZWQ7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBDYWxsIGFsbCBjYWxsYmFja3Mgd2l0aCB0aGUgZ2l2ZW4gY29udGV4dCBhbmQgYXJndW1lbnRzXG5cdFx0XHRmaXJlV2l0aDogZnVuY3Rpb24oIGNvbnRleHQsIGFyZ3MgKSB7XG5cdFx0XHRcdGlmICggIWxvY2tlZCApIHtcblx0XHRcdFx0XHRhcmdzID0gYXJncyB8fCBbXTtcblx0XHRcdFx0XHRhcmdzID0gWyBjb250ZXh0LCBhcmdzLnNsaWNlID8gYXJncy5zbGljZSgpIDogYXJncyBdO1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goIGFyZ3MgKTtcblx0XHRcdFx0XHRpZiAoICFmaXJpbmcgKSB7XG5cdFx0XHRcdFx0XHRmaXJlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gQ2FsbCBhbGwgdGhlIGNhbGxiYWNrcyB3aXRoIHRoZSBnaXZlbiBhcmd1bWVudHNcblx0XHRcdGZpcmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZWxmLmZpcmVXaXRoKCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBUbyBrbm93IGlmIHRoZSBjYWxsYmFja3MgaGF2ZSBhbHJlYWR5IGJlZW4gY2FsbGVkIGF0IGxlYXN0IG9uY2Vcblx0XHRcdGZpcmVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhZmlyZWQ7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRyZXR1cm4gc2VsZjtcbn07XG5cblxuZnVuY3Rpb24gSWRlbnRpdHkoIHYgKSB7XG5cdHJldHVybiB2O1xufVxuZnVuY3Rpb24gVGhyb3dlciggZXggKSB7XG5cdHRocm93IGV4O1xufVxuXG5mdW5jdGlvbiBhZG9wdFZhbHVlKCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0LCBub1ZhbHVlICkge1xuXHR2YXIgbWV0aG9kO1xuXG5cdHRyeSB7XG5cblx0XHQvLyBDaGVjayBmb3IgcHJvbWlzZSBhc3BlY3QgZmlyc3QgdG8gcHJpdmlsZWdlIHN5bmNocm9ub3VzIGJlaGF2aW9yXG5cdFx0aWYgKCB2YWx1ZSAmJiBpc0Z1bmN0aW9uKCAoIG1ldGhvZCA9IHZhbHVlLnByb21pc2UgKSApICkge1xuXHRcdFx0bWV0aG9kLmNhbGwoIHZhbHVlICkuZG9uZSggcmVzb2x2ZSApLmZhaWwoIHJlamVjdCApO1xuXG5cdFx0Ly8gT3RoZXIgdGhlbmFibGVzXG5cdFx0fSBlbHNlIGlmICggdmFsdWUgJiYgaXNGdW5jdGlvbiggKCBtZXRob2QgPSB2YWx1ZS50aGVuICkgKSApIHtcblx0XHRcdG1ldGhvZC5jYWxsKCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0ICk7XG5cblx0XHQvLyBPdGhlciBub24tdGhlbmFibGVzXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gQ29udHJvbCBgcmVzb2x2ZWAgYXJndW1lbnRzIGJ5IGxldHRpbmcgQXJyYXkjc2xpY2UgY2FzdCBib29sZWFuIGBub1ZhbHVlYCB0byBpbnRlZ2VyOlxuXHRcdFx0Ly8gKiBmYWxzZTogWyB2YWx1ZSBdLnNsaWNlKCAwICkgPT4gcmVzb2x2ZSggdmFsdWUgKVxuXHRcdFx0Ly8gKiB0cnVlOiBbIHZhbHVlIF0uc2xpY2UoIDEgKSA9PiByZXNvbHZlKClcblx0XHRcdHJlc29sdmUuYXBwbHkoIHVuZGVmaW5lZCwgWyB2YWx1ZSBdLnNsaWNlKCBub1ZhbHVlICkgKTtcblx0XHR9XG5cblx0Ly8gRm9yIFByb21pc2VzL0ErLCBjb252ZXJ0IGV4Y2VwdGlvbnMgaW50byByZWplY3Rpb25zXG5cdC8vIFNpbmNlIGpRdWVyeS53aGVuIGRvZXNuJ3QgdW53cmFwIHRoZW5hYmxlcywgd2UgY2FuIHNraXAgdGhlIGV4dHJhIGNoZWNrcyBhcHBlYXJpbmcgaW5cblx0Ly8gRGVmZXJyZWQjdGhlbiB0byBjb25kaXRpb25hbGx5IHN1cHByZXNzIHJlamVjdGlvbi5cblx0fSBjYXRjaCAoIHZhbHVlICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgb25seVxuXHRcdC8vIFN0cmljdCBtb2RlIGZ1bmN0aW9ucyBpbnZva2VkIHdpdGhvdXQgLmNhbGwvLmFwcGx5IGdldCBnbG9iYWwtb2JqZWN0IGNvbnRleHRcblx0XHRyZWplY3QuYXBwbHkoIHVuZGVmaW5lZCwgWyB2YWx1ZSBdICk7XG5cdH1cbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdERlZmVycmVkOiBmdW5jdGlvbiggZnVuYyApIHtcblx0XHR2YXIgdHVwbGVzID0gW1xuXG5cdFx0XHRcdC8vIGFjdGlvbiwgYWRkIGxpc3RlbmVyLCBjYWxsYmFja3MsXG5cdFx0XHRcdC8vIC4uLiAudGhlbiBoYW5kbGVycywgYXJndW1lbnQgaW5kZXgsIFtmaW5hbCBzdGF0ZV1cblx0XHRcdFx0WyBcIm5vdGlmeVwiLCBcInByb2dyZXNzXCIsIGpRdWVyeS5DYWxsYmFja3MoIFwibWVtb3J5XCIgKSxcblx0XHRcdFx0XHRqUXVlcnkuQ2FsbGJhY2tzKCBcIm1lbW9yeVwiICksIDIgXSxcblx0XHRcdFx0WyBcInJlc29sdmVcIiwgXCJkb25lXCIsIGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLFxuXHRcdFx0XHRcdGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLCAwLCBcInJlc29sdmVkXCIgXSxcblx0XHRcdFx0WyBcInJlamVjdFwiLCBcImZhaWxcIiwgalF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksXG5cdFx0XHRcdFx0alF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksIDEsIFwicmVqZWN0ZWRcIiBdXG5cdFx0XHRdLFxuXHRcdFx0c3RhdGUgPSBcInBlbmRpbmdcIixcblx0XHRcdHByb21pc2UgPSB7XG5cdFx0XHRcdHN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsd2F5czogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQuZG9uZSggYXJndW1lbnRzICkuZmFpbCggYXJndW1lbnRzICk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiY2F0Y2hcIjogZnVuY3Rpb24oIGZuICkge1xuXHRcdFx0XHRcdHJldHVybiBwcm9taXNlLnRoZW4oIG51bGwsIGZuICk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gS2VlcCBwaXBlIGZvciBiYWNrLWNvbXBhdFxuXHRcdFx0XHRwaXBlOiBmdW5jdGlvbiggLyogZm5Eb25lLCBmbkZhaWwsIGZuUHJvZ3Jlc3MgKi8gKSB7XG5cdFx0XHRcdFx0dmFyIGZucyA9IGFyZ3VtZW50cztcblxuXHRcdFx0XHRcdHJldHVybiBqUXVlcnkuRGVmZXJyZWQoIGZ1bmN0aW9uKCBuZXdEZWZlciApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5lYWNoKCB0dXBsZXMsIGZ1bmN0aW9uKCBfaSwgdHVwbGUgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gTWFwIHR1cGxlcyAocHJvZ3Jlc3MsIGRvbmUsIGZhaWwpIHRvIGFyZ3VtZW50cyAoZG9uZSwgZmFpbCwgcHJvZ3Jlc3MpXG5cdFx0XHRcdFx0XHRcdHZhciBmbiA9IGlzRnVuY3Rpb24oIGZuc1sgdHVwbGVbIDQgXSBdICkgJiYgZm5zWyB0dXBsZVsgNCBdIF07XG5cblx0XHRcdFx0XHRcdFx0Ly8gZGVmZXJyZWQucHJvZ3Jlc3MoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIubm90aWZ5IH0pXG5cdFx0XHRcdFx0XHRcdC8vIGRlZmVycmVkLmRvbmUoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIucmVzb2x2ZSB9KVxuXHRcdFx0XHRcdFx0XHQvLyBkZWZlcnJlZC5mYWlsKGZ1bmN0aW9uKCkgeyBiaW5kIHRvIG5ld0RlZmVyIG9yIG5ld0RlZmVyLnJlamVjdCB9KVxuXHRcdFx0XHRcdFx0XHRkZWZlcnJlZFsgdHVwbGVbIDEgXSBdKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmV0dXJuZWQgPSBmbiAmJiBmbi5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCByZXR1cm5lZCAmJiBpc0Z1bmN0aW9uKCByZXR1cm5lZC5wcm9taXNlICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZC5wcm9taXNlKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LnByb2dyZXNzKCBuZXdEZWZlci5ub3RpZnkgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuZG9uZSggbmV3RGVmZXIucmVzb2x2ZSApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5mYWlsKCBuZXdEZWZlci5yZWplY3QgKTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXJbIHR1cGxlWyAwIF0gKyBcIldpdGhcIiBdKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbiA/IFsgcmV0dXJuZWQgXSA6IGFyZ3VtZW50c1xuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdGZucyA9IG51bGw7XG5cdFx0XHRcdFx0fSApLnByb21pc2UoKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dGhlbjogZnVuY3Rpb24oIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBvblByb2dyZXNzICkge1xuXHRcdFx0XHRcdHZhciBtYXhEZXB0aCA9IDA7XG5cdFx0XHRcdFx0ZnVuY3Rpb24gcmVzb2x2ZSggZGVwdGgsIGRlZmVycmVkLCBoYW5kbGVyLCBzcGVjaWFsICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdGhhdCA9IHRoaXMsXG5cdFx0XHRcdFx0XHRcdFx0YXJncyA9IGFyZ3VtZW50cyxcblx0XHRcdFx0XHRcdFx0XHRtaWdodFRocm93ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgcmV0dXJuZWQsIHRoZW47XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjMuMy4zXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC01OVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gSWdub3JlIGRvdWJsZS1yZXNvbHV0aW9uIGF0dGVtcHRzXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGRlcHRoIDwgbWF4RGVwdGggKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQgPSBoYW5kbGVyLmFwcGx5KCB0aGF0LCBhcmdzICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjFcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTQ4XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIHJldHVybmVkID09PSBkZWZlcnJlZC5wcm9taXNlKCkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoIFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIgKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbnMgMi4zLjMuMSwgMy41XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC01NFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNzVcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFJldHJpZXZlIGB0aGVuYCBvbmx5IG9uY2Vcblx0XHRcdFx0XHRcdFx0XHRcdHRoZW4gPSByZXR1cm5lZCAmJlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNjRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gT25seSBjaGVjayBvYmplY3RzIGFuZCBmdW5jdGlvbnMgZm9yIHRoZW5hYmlsaXR5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCggdHlwZW9mIHJldHVybmVkID09PSBcIm9iamVjdFwiIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZW9mIHJldHVybmVkID09PSBcImZ1bmN0aW9uXCIgKSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZC50aGVuO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBIYW5kbGUgYSByZXR1cm5lZCB0aGVuYWJsZVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBpc0Z1bmN0aW9uKCB0aGVuICkgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3BlY2lhbCBwcm9jZXNzb3JzIChub3RpZnkpIGp1c3Qgd2FpdCBmb3IgcmVzb2x1dGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIHNwZWNpYWwgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhlbi5jYWxsKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCBtYXhEZXB0aCwgZGVmZXJyZWQsIElkZW50aXR5LCBzcGVjaWFsICksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCBtYXhEZXB0aCwgZGVmZXJyZWQsIFRocm93ZXIsIHNwZWNpYWwgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gTm9ybWFsIHByb2Nlc3NvcnMgKHJlc29sdmUpIGFsc28gaG9vayBpbnRvIHByb2dyZXNzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyAuLi5hbmQgZGlzcmVnYXJkIG9sZGVyIHJlc29sdXRpb24gdmFsdWVzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4RGVwdGgrKztcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoZW4uY2FsbChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybmVkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSwgc3BlY2lhbCApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBUaHJvd2VyLCBzcGVjaWFsICksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCBtYXhEZXB0aCwgZGVmZXJyZWQsIElkZW50aXR5LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZlcnJlZC5ub3RpZnlXaXRoIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIEhhbmRsZSBhbGwgb3RoZXIgcmV0dXJuZWQgdmFsdWVzXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE9ubHkgc3Vic3RpdHV0ZSBoYW5kbGVycyBwYXNzIG9uIGNvbnRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gYW5kIG11bHRpcGxlIHZhbHVlcyAobm9uLXNwZWMgYmVoYXZpb3IpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggaGFuZGxlciAhPT0gSWRlbnRpdHkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdCA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmdzID0gWyByZXR1cm5lZCBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gUHJvY2VzcyB0aGUgdmFsdWUocylcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gRGVmYXVsdCBwcm9jZXNzIGlzIHJlc29sdmVcblx0XHRcdFx0XHRcdFx0XHRcdFx0KCBzcGVjaWFsIHx8IGRlZmVycmVkLnJlc29sdmVXaXRoICkoIHRoYXQsIGFyZ3MgKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gT25seSBub3JtYWwgcHJvY2Vzc29ycyAocmVzb2x2ZSkgY2F0Y2ggYW5kIHJlamVjdCBleGNlcHRpb25zXG5cdFx0XHRcdFx0XHRcdFx0cHJvY2VzcyA9IHNwZWNpYWwgP1xuXHRcdFx0XHRcdFx0XHRcdFx0bWlnaHRUaHJvdyA6XG5cdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtaWdodFRocm93KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBqUXVlcnkuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rKCBlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9jZXNzLmVycm9yICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjQuMVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTYxXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gSWdub3JlIHBvc3QtcmVzb2x1dGlvbiBleGNlcHRpb25zXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBkZXB0aCArIDEgPj0gbWF4RGVwdGggKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE9ubHkgc3Vic3RpdHV0ZSBoYW5kbGVycyBwYXNzIG9uIGNvbnRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGFuZCBtdWx0aXBsZSB2YWx1ZXMgKG5vbi1zcGVjIGJlaGF2aW9yKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBoYW5kbGVyICE9PSBUaHJvd2VyICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmdzID0gWyBlIF07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdFdpdGgoIHRoYXQsIGFyZ3MgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjFcblx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTdcblx0XHRcdFx0XHRcdFx0Ly8gUmUtcmVzb2x2ZSBwcm9taXNlcyBpbW1lZGlhdGVseSB0byBkb2RnZSBmYWxzZSByZWplY3Rpb24gZnJvbVxuXHRcdFx0XHRcdFx0XHQvLyBzdWJzZXF1ZW50IGVycm9yc1xuXHRcdFx0XHRcdFx0XHRpZiAoIGRlcHRoICkge1xuXHRcdFx0XHRcdFx0XHRcdHByb2Nlc3MoKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIENhbGwgYW4gb3B0aW9uYWwgaG9vayB0byByZWNvcmQgdGhlIGVycm9yLCBpbiBjYXNlIG9mIGV4Y2VwdGlvblxuXHRcdFx0XHRcdFx0XHRcdC8vIHNpbmNlIGl0J3Mgb3RoZXJ3aXNlIGxvc3Qgd2hlbiBleGVjdXRpb24gZ29lcyBhc3luY1xuXHRcdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5LkRlZmVycmVkLmdldEVycm9ySG9vayApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHByb2Nlc3MuZXJyb3IgPSBqUXVlcnkuRGVmZXJyZWQuZ2V0RXJyb3JIb29rKCk7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBUaGUgZGVwcmVjYXRlZCBhbGlhcyBvZiB0aGUgYWJvdmUuIFdoaWxlIHRoZSBuYW1lIHN1Z2dlc3RzXG5cdFx0XHRcdFx0XHRcdFx0Ly8gcmV0dXJuaW5nIHRoZSBzdGFjaywgbm90IGFuIGVycm9yIGluc3RhbmNlLCBqUXVlcnkganVzdCBwYXNzZXNcblx0XHRcdFx0XHRcdFx0XHQvLyBpdCBkaXJlY3RseSB0byBgY29uc29sZS53YXJuYCBzbyBib3RoIHdpbGwgd29yazsgYW4gaW5zdGFuY2Vcblx0XHRcdFx0XHRcdFx0XHQvLyBqdXN0IGJldHRlciBjb29wZXJhdGVzIHdpdGggc291cmNlIG1hcHMuXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggalF1ZXJ5LkRlZmVycmVkLmdldFN0YWNrSG9vayApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHByb2Nlc3MuZXJyb3IgPSBqUXVlcnkuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCBwcm9jZXNzICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIGpRdWVyeS5EZWZlcnJlZCggZnVuY3Rpb24oIG5ld0RlZmVyICkge1xuXG5cdFx0XHRcdFx0XHQvLyBwcm9ncmVzc19oYW5kbGVycy5hZGQoIC4uLiApXG5cdFx0XHRcdFx0XHR0dXBsZXNbIDAgXVsgMyBdLmFkZChcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShcblx0XHRcdFx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyLFxuXHRcdFx0XHRcdFx0XHRcdGlzRnVuY3Rpb24oIG9uUHJvZ3Jlc3MgKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRvblByb2dyZXNzIDpcblx0XHRcdFx0XHRcdFx0XHRcdElkZW50aXR5LFxuXHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyLm5vdGlmeVdpdGhcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0Ly8gZnVsZmlsbGVkX2hhbmRsZXJzLmFkZCggLi4uIClcblx0XHRcdFx0XHRcdHR1cGxlc1sgMSBdWyAzIF0uYWRkKFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKFxuXHRcdFx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXIsXG5cdFx0XHRcdFx0XHRcdFx0aXNGdW5jdGlvbiggb25GdWxmaWxsZWQgKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkZ1bGZpbGxlZCA6XG5cdFx0XHRcdFx0XHRcdFx0XHRJZGVudGl0eVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHQvLyByZWplY3RlZF9oYW5kbGVycy5hZGQoIC4uLiApXG5cdFx0XHRcdFx0XHR0dXBsZXNbIDIgXVsgMyBdLmFkZChcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShcblx0XHRcdFx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyLFxuXHRcdFx0XHRcdFx0XHRcdGlzRnVuY3Rpb24oIG9uUmVqZWN0ZWQgKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRvblJlamVjdGVkIDpcblx0XHRcdFx0XHRcdFx0XHRcdFRocm93ZXJcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9ICkucHJvbWlzZSgpO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIEdldCBhIHByb21pc2UgZm9yIHRoaXMgZGVmZXJyZWRcblx0XHRcdFx0Ly8gSWYgb2JqIGlzIHByb3ZpZGVkLCB0aGUgcHJvbWlzZSBhc3BlY3QgaXMgYWRkZWQgdG8gdGhlIG9iamVjdFxuXHRcdFx0XHRwcm9taXNlOiBmdW5jdGlvbiggb2JqICkge1xuXHRcdFx0XHRcdHJldHVybiBvYmogIT0gbnVsbCA/IGpRdWVyeS5leHRlbmQoIG9iaiwgcHJvbWlzZSApIDogcHJvbWlzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGRlZmVycmVkID0ge307XG5cblx0XHQvLyBBZGQgbGlzdC1zcGVjaWZpYyBtZXRob2RzXG5cdFx0alF1ZXJ5LmVhY2goIHR1cGxlcywgZnVuY3Rpb24oIGksIHR1cGxlICkge1xuXHRcdFx0dmFyIGxpc3QgPSB0dXBsZVsgMiBdLFxuXHRcdFx0XHRzdGF0ZVN0cmluZyA9IHR1cGxlWyA1IF07XG5cblx0XHRcdC8vIHByb21pc2UucHJvZ3Jlc3MgPSBsaXN0LmFkZFxuXHRcdFx0Ly8gcHJvbWlzZS5kb25lID0gbGlzdC5hZGRcblx0XHRcdC8vIHByb21pc2UuZmFpbCA9IGxpc3QuYWRkXG5cdFx0XHRwcm9taXNlWyB0dXBsZVsgMSBdIF0gPSBsaXN0LmFkZDtcblxuXHRcdFx0Ly8gSGFuZGxlIHN0YXRlXG5cdFx0XHRpZiAoIHN0YXRlU3RyaW5nICkge1xuXHRcdFx0XHRsaXN0LmFkZChcblx0XHRcdFx0XHRmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdFx0Ly8gc3RhdGUgPSBcInJlc29sdmVkXCIgKGkuZS4sIGZ1bGZpbGxlZClcblx0XHRcdFx0XHRcdC8vIHN0YXRlID0gXCJyZWplY3RlZFwiXG5cdFx0XHRcdFx0XHRzdGF0ZSA9IHN0YXRlU3RyaW5nO1xuXHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHQvLyByZWplY3RlZF9jYWxsYmFja3MuZGlzYWJsZVxuXHRcdFx0XHRcdC8vIGZ1bGZpbGxlZF9jYWxsYmFja3MuZGlzYWJsZVxuXHRcdFx0XHRcdHR1cGxlc1sgMyAtIGkgXVsgMiBdLmRpc2FibGUsXG5cblx0XHRcdFx0XHQvLyByZWplY3RlZF9oYW5kbGVycy5kaXNhYmxlXG5cdFx0XHRcdFx0Ly8gZnVsZmlsbGVkX2hhbmRsZXJzLmRpc2FibGVcblx0XHRcdFx0XHR0dXBsZXNbIDMgLSBpIF1bIDMgXS5kaXNhYmxlLFxuXG5cdFx0XHRcdFx0Ly8gcHJvZ3Jlc3NfY2FsbGJhY2tzLmxvY2tcblx0XHRcdFx0XHR0dXBsZXNbIDAgXVsgMiBdLmxvY2ssXG5cblx0XHRcdFx0XHQvLyBwcm9ncmVzc19oYW5kbGVycy5sb2NrXG5cdFx0XHRcdFx0dHVwbGVzWyAwIF1bIDMgXS5sb2NrXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHByb2dyZXNzX2hhbmRsZXJzLmZpcmVcblx0XHRcdC8vIGZ1bGZpbGxlZF9oYW5kbGVycy5maXJlXG5cdFx0XHQvLyByZWplY3RlZF9oYW5kbGVycy5maXJlXG5cdFx0XHRsaXN0LmFkZCggdHVwbGVbIDMgXS5maXJlICk7XG5cblx0XHRcdC8vIGRlZmVycmVkLm5vdGlmeSA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5ub3RpZnlXaXRoKC4uLikgfVxuXHRcdFx0Ly8gZGVmZXJyZWQucmVzb2x2ZSA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5yZXNvbHZlV2l0aCguLi4pIH1cblx0XHRcdC8vIGRlZmVycmVkLnJlamVjdCA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5yZWplY3RXaXRoKC4uLikgfVxuXHRcdFx0ZGVmZXJyZWRbIHR1cGxlWyAwIF0gXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkZWZlcnJlZFsgdHVwbGVbIDAgXSArIFwiV2l0aFwiIF0oIHRoaXMgPT09IGRlZmVycmVkID8gdW5kZWZpbmVkIDogdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gZGVmZXJyZWQubm90aWZ5V2l0aCA9IGxpc3QuZmlyZVdpdGhcblx0XHRcdC8vIGRlZmVycmVkLnJlc29sdmVXaXRoID0gbGlzdC5maXJlV2l0aFxuXHRcdFx0Ly8gZGVmZXJyZWQucmVqZWN0V2l0aCA9IGxpc3QuZmlyZVdpdGhcblx0XHRcdGRlZmVycmVkWyB0dXBsZVsgMCBdICsgXCJXaXRoXCIgXSA9IGxpc3QuZmlyZVdpdGg7XG5cdFx0fSApO1xuXG5cdFx0Ly8gTWFrZSB0aGUgZGVmZXJyZWQgYSBwcm9taXNlXG5cdFx0cHJvbWlzZS5wcm9taXNlKCBkZWZlcnJlZCApO1xuXG5cdFx0Ly8gQ2FsbCBnaXZlbiBmdW5jIGlmIGFueVxuXHRcdGlmICggZnVuYyApIHtcblx0XHRcdGZ1bmMuY2FsbCggZGVmZXJyZWQsIGRlZmVycmVkICk7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsIGRvbmUhXG5cdFx0cmV0dXJuIGRlZmVycmVkO1xuXHR9LFxuXG5cdC8vIERlZmVycmVkIGhlbHBlclxuXHR3aGVuOiBmdW5jdGlvbiggc2luZ2xlVmFsdWUgKSB7XG5cdFx0dmFyXG5cblx0XHRcdC8vIGNvdW50IG9mIHVuY29tcGxldGVkIHN1Ym9yZGluYXRlc1xuXHRcdFx0cmVtYWluaW5nID0gYXJndW1lbnRzLmxlbmd0aCxcblxuXHRcdFx0Ly8gY291bnQgb2YgdW5wcm9jZXNzZWQgYXJndW1lbnRzXG5cdFx0XHRpID0gcmVtYWluaW5nLFxuXG5cdFx0XHQvLyBzdWJvcmRpbmF0ZSBmdWxmaWxsbWVudCBkYXRhXG5cdFx0XHRyZXNvbHZlQ29udGV4dHMgPSBBcnJheSggaSApLFxuXHRcdFx0cmVzb2x2ZVZhbHVlcyA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApLFxuXG5cdFx0XHQvLyB0aGUgcHJpbWFyeSBEZWZlcnJlZFxuXHRcdFx0cHJpbWFyeSA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuXG5cdFx0XHQvLyBzdWJvcmRpbmF0ZSBjYWxsYmFjayBmYWN0b3J5XG5cdFx0XHR1cGRhdGVGdW5jID0gZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRcdFx0cmVzb2x2ZUNvbnRleHRzWyBpIF0gPSB0aGlzO1xuXHRcdFx0XHRcdHJlc29sdmVWYWx1ZXNbIGkgXSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gc2xpY2UuY2FsbCggYXJndW1lbnRzICkgOiB2YWx1ZTtcblx0XHRcdFx0XHRpZiAoICEoIC0tcmVtYWluaW5nICkgKSB7XG5cdFx0XHRcdFx0XHRwcmltYXJ5LnJlc29sdmVXaXRoKCByZXNvbHZlQ29udGV4dHMsIHJlc29sdmVWYWx1ZXMgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXG5cdFx0Ly8gU2luZ2xlLSBhbmQgZW1wdHkgYXJndW1lbnRzIGFyZSBhZG9wdGVkIGxpa2UgUHJvbWlzZS5yZXNvbHZlXG5cdFx0aWYgKCByZW1haW5pbmcgPD0gMSApIHtcblx0XHRcdGFkb3B0VmFsdWUoIHNpbmdsZVZhbHVlLCBwcmltYXJ5LmRvbmUoIHVwZGF0ZUZ1bmMoIGkgKSApLnJlc29sdmUsIHByaW1hcnkucmVqZWN0LFxuXHRcdFx0XHQhcmVtYWluaW5nICk7XG5cblx0XHRcdC8vIFVzZSAudGhlbigpIHRvIHVud3JhcCBzZWNvbmRhcnkgdGhlbmFibGVzIChjZi4gZ2gtMzAwMClcblx0XHRcdGlmICggcHJpbWFyeS5zdGF0ZSgpID09PSBcInBlbmRpbmdcIiB8fFxuXHRcdFx0XHRpc0Z1bmN0aW9uKCByZXNvbHZlVmFsdWVzWyBpIF0gJiYgcmVzb2x2ZVZhbHVlc1sgaSBdLnRoZW4gKSApIHtcblxuXHRcdFx0XHRyZXR1cm4gcHJpbWFyeS50aGVuKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gTXVsdGlwbGUgYXJndW1lbnRzIGFyZSBhZ2dyZWdhdGVkIGxpa2UgUHJvbWlzZS5hbGwgYXJyYXkgZWxlbWVudHNcblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdGFkb3B0VmFsdWUoIHJlc29sdmVWYWx1ZXNbIGkgXSwgdXBkYXRlRnVuYyggaSApLCBwcmltYXJ5LnJlamVjdCApO1xuXHRcdH1cblxuXHRcdHJldHVybiBwcmltYXJ5LnByb21pc2UoKTtcblx0fVxufSApO1xuXG5cbi8vIFRoZXNlIHVzdWFsbHkgaW5kaWNhdGUgYSBwcm9ncmFtbWVyIG1pc3Rha2UgZHVyaW5nIGRldmVsb3BtZW50LFxuLy8gd2FybiBhYm91dCB0aGVtIEFTQVAgcmF0aGVyIHRoYW4gc3dhbGxvd2luZyB0aGVtIGJ5IGRlZmF1bHQuXG52YXIgcmVycm9yTmFtZXMgPSAvXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLztcblxuLy8gSWYgYGpRdWVyeS5EZWZlcnJlZC5nZXRFcnJvckhvb2tgIGlzIGRlZmluZWQsIGBhc3luY0Vycm9yYCBpcyBhbiBlcnJvclxuLy8gY2FwdHVyZWQgYmVmb3JlIHRoZSBhc3luYyBiYXJyaWVyIHRvIGdldCB0aGUgb3JpZ2luYWwgZXJyb3IgY2F1c2Vcbi8vIHdoaWNoIG1heSBvdGhlcndpc2UgYmUgaGlkZGVuLlxualF1ZXJ5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2sgPSBmdW5jdGlvbiggZXJyb3IsIGFzeW5jRXJyb3IgKSB7XG5cblx0Ly8gU3VwcG9ydDogSUUgOCAtIDkgb25seVxuXHQvLyBDb25zb2xlIGV4aXN0cyB3aGVuIGRldiB0b29scyBhcmUgb3Blbiwgd2hpY2ggY2FuIGhhcHBlbiBhdCBhbnkgdGltZVxuXHRpZiAoIHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLndhcm4gJiYgZXJyb3IgJiYgcmVycm9yTmFtZXMudGVzdCggZXJyb3IubmFtZSApICkge1xuXHRcdHdpbmRvdy5jb25zb2xlLndhcm4oIFwialF1ZXJ5LkRlZmVycmVkIGV4Y2VwdGlvbjogXCIgKyBlcnJvci5tZXNzYWdlLFxuXHRcdFx0ZXJyb3Iuc3RhY2ssIGFzeW5jRXJyb3IgKTtcblx0fVxufTtcblxuXG5cblxualF1ZXJ5LnJlYWR5RXhjZXB0aW9uID0gZnVuY3Rpb24oIGVycm9yICkge1xuXHR3aW5kb3cuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgZXJyb3I7XG5cdH0gKTtcbn07XG5cblxuXG5cbi8vIFRoZSBkZWZlcnJlZCB1c2VkIG9uIERPTSByZWFkeVxudmFyIHJlYWR5TGlzdCA9IGpRdWVyeS5EZWZlcnJlZCgpO1xuXG5qUXVlcnkuZm4ucmVhZHkgPSBmdW5jdGlvbiggZm4gKSB7XG5cblx0cmVhZHlMaXN0XG5cdFx0LnRoZW4oIGZuIClcblxuXHRcdC8vIFdyYXAgalF1ZXJ5LnJlYWR5RXhjZXB0aW9uIGluIGEgZnVuY3Rpb24gc28gdGhhdCB0aGUgbG9va3VwXG5cdFx0Ly8gaGFwcGVucyBhdCB0aGUgdGltZSBvZiBlcnJvciBoYW5kbGluZyBpbnN0ZWFkIG9mIGNhbGxiYWNrXG5cdFx0Ly8gcmVnaXN0cmF0aW9uLlxuXHRcdC5jYXRjaCggZnVuY3Rpb24oIGVycm9yICkge1xuXHRcdFx0alF1ZXJ5LnJlYWR5RXhjZXB0aW9uKCBlcnJvciApO1xuXHRcdH0gKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbmpRdWVyeS5leHRlbmQoIHtcblxuXHQvLyBJcyB0aGUgRE9NIHJlYWR5IHRvIGJlIHVzZWQ/IFNldCB0byB0cnVlIG9uY2UgaXQgb2NjdXJzLlxuXHRpc1JlYWR5OiBmYWxzZSxcblxuXHQvLyBBIGNvdW50ZXIgdG8gdHJhY2sgaG93IG1hbnkgaXRlbXMgdG8gd2FpdCBmb3IgYmVmb3JlXG5cdC8vIHRoZSByZWFkeSBldmVudCBmaXJlcy4gU2VlIHRyYWMtNjc4MVxuXHRyZWFkeVdhaXQ6IDEsXG5cblx0Ly8gSGFuZGxlIHdoZW4gdGhlIERPTSBpcyByZWFkeVxuXHRyZWFkeTogZnVuY3Rpb24oIHdhaXQgKSB7XG5cblx0XHQvLyBBYm9ydCBpZiB0aGVyZSBhcmUgcGVuZGluZyBob2xkcyBvciB3ZSdyZSBhbHJlYWR5IHJlYWR5XG5cdFx0aWYgKCB3YWl0ID09PSB0cnVlID8gLS1qUXVlcnkucmVhZHlXYWl0IDogalF1ZXJ5LmlzUmVhZHkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gUmVtZW1iZXIgdGhhdCB0aGUgRE9NIGlzIHJlYWR5XG5cdFx0alF1ZXJ5LmlzUmVhZHkgPSB0cnVlO1xuXG5cdFx0Ly8gSWYgYSBub3JtYWwgRE9NIFJlYWR5IGV2ZW50IGZpcmVkLCBkZWNyZW1lbnQsIGFuZCB3YWl0IGlmIG5lZWQgYmVcblx0XHRpZiAoIHdhaXQgIT09IHRydWUgJiYgLS1qUXVlcnkucmVhZHlXYWl0ID4gMCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSBhcmUgZnVuY3Rpb25zIGJvdW5kLCB0byBleGVjdXRlXG5cdFx0cmVhZHlMaXN0LnJlc29sdmVXaXRoKCBkb2N1bWVudCwgWyBqUXVlcnkgXSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5yZWFkeS50aGVuID0gcmVhZHlMaXN0LnRoZW47XG5cbi8vIFRoZSByZWFkeSBldmVudCBoYW5kbGVyIGFuZCBzZWxmIGNsZWFudXAgbWV0aG9kXG5mdW5jdGlvbiBjb21wbGV0ZWQoKSB7XG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiRE9NQ29udGVudExvYWRlZFwiLCBjb21wbGV0ZWQgKTtcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibG9hZFwiLCBjb21wbGV0ZWQgKTtcblx0alF1ZXJ5LnJlYWR5KCk7XG59XG5cbi8vIENhdGNoIGNhc2VzIHdoZXJlICQoZG9jdW1lbnQpLnJlYWR5KCkgaXMgY2FsbGVkXG4vLyBhZnRlciB0aGUgYnJvd3NlciBldmVudCBoYXMgYWxyZWFkeSBvY2N1cnJlZC5cbi8vIFN1cHBvcnQ6IElFIDw9OSAtIDEwIG9ubHlcbi8vIE9sZGVyIElFIHNvbWV0aW1lcyBzaWduYWxzIFwiaW50ZXJhY3RpdmVcIiB0b28gc29vblxuaWYgKCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgfHxcblx0KCBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIiAmJiAhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsICkgKSB7XG5cblx0Ly8gSGFuZGxlIGl0IGFzeW5jaHJvbm91c2x5IHRvIGFsbG93IHNjcmlwdHMgdGhlIG9wcG9ydHVuaXR5IHRvIGRlbGF5IHJlYWR5XG5cdHdpbmRvdy5zZXRUaW1lb3V0KCBqUXVlcnkucmVhZHkgKTtcblxufSBlbHNlIHtcblxuXHQvLyBVc2UgdGhlIGhhbmR5IGV2ZW50IGNhbGxiYWNrXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwiRE9NQ29udGVudExvYWRlZFwiLCBjb21wbGV0ZWQgKTtcblxuXHQvLyBBIGZhbGxiYWNrIHRvIHdpbmRvdy5vbmxvYWQsIHRoYXQgd2lsbCBhbHdheXMgd29ya1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJsb2FkXCIsIGNvbXBsZXRlZCApO1xufVxuXG5cblxuXG4vLyBNdWx0aWZ1bmN0aW9uYWwgbWV0aG9kIHRvIGdldCBhbmQgc2V0IHZhbHVlcyBvZiBhIGNvbGxlY3Rpb25cbi8vIFRoZSB2YWx1ZS9zIGNhbiBvcHRpb25hbGx5IGJlIGV4ZWN1dGVkIGlmIGl0J3MgYSBmdW5jdGlvblxudmFyIGFjY2VzcyA9IGZ1bmN0aW9uKCBlbGVtcywgZm4sIGtleSwgdmFsdWUsIGNoYWluYWJsZSwgZW1wdHlHZXQsIHJhdyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IGVsZW1zLmxlbmd0aCxcblx0XHRidWxrID0ga2V5ID09IG51bGw7XG5cblx0Ly8gU2V0cyBtYW55IHZhbHVlc1xuXHRpZiAoIHRvVHlwZSgga2V5ICkgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0Y2hhaW5hYmxlID0gdHJ1ZTtcblx0XHRmb3IgKCBpIGluIGtleSApIHtcblx0XHRcdGFjY2VzcyggZWxlbXMsIGZuLCBpLCBrZXlbIGkgXSwgdHJ1ZSwgZW1wdHlHZXQsIHJhdyApO1xuXHRcdH1cblxuXHQvLyBTZXRzIG9uZSB2YWx1ZVxuXHR9IGVsc2UgaWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdGNoYWluYWJsZSA9IHRydWU7XG5cblx0XHRpZiAoICFpc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmF3ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoIGJ1bGsgKSB7XG5cblx0XHRcdC8vIEJ1bGsgb3BlcmF0aW9ucyBydW4gYWdhaW5zdCB0aGUgZW50aXJlIHNldFxuXHRcdFx0aWYgKCByYXcgKSB7XG5cdFx0XHRcdGZuLmNhbGwoIGVsZW1zLCB2YWx1ZSApO1xuXHRcdFx0XHRmbiA9IG51bGw7XG5cblx0XHRcdC8vIC4uLmV4Y2VwdCB3aGVuIGV4ZWN1dGluZyBmdW5jdGlvbiB2YWx1ZXNcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJ1bGsgPSBmbjtcblx0XHRcdFx0Zm4gPSBmdW5jdGlvbiggZWxlbSwgX2tleSwgdmFsdWUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGJ1bGsuY2FsbCggalF1ZXJ5KCBlbGVtICksIHZhbHVlICk7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBmbiApIHtcblx0XHRcdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHRmbihcblx0XHRcdFx0XHRlbGVtc1sgaSBdLCBrZXksIHJhdyA/XG5cdFx0XHRcdFx0XHR2YWx1ZSA6XG5cdFx0XHRcdFx0XHR2YWx1ZS5jYWxsKCBlbGVtc1sgaSBdLCBpLCBmbiggZWxlbXNbIGkgXSwga2V5ICkgKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICggY2hhaW5hYmxlICkge1xuXHRcdHJldHVybiBlbGVtcztcblx0fVxuXG5cdC8vIEdldHNcblx0aWYgKCBidWxrICkge1xuXHRcdHJldHVybiBmbi5jYWxsKCBlbGVtcyApO1xuXHR9XG5cblx0cmV0dXJuIGxlbiA/IGZuKCBlbGVtc1sgMCBdLCBrZXkgKSA6IGVtcHR5R2V0O1xufTtcblxuXG4vLyBNYXRjaGVzIGRhc2hlZCBzdHJpbmcgZm9yIGNhbWVsaXppbmdcbnZhciBybXNQcmVmaXggPSAvXi1tcy0vLFxuXHRyZGFzaEFscGhhID0gLy0oW2Etel0pL2c7XG5cbi8vIFVzZWQgYnkgY2FtZWxDYXNlIGFzIGNhbGxiYWNrIHRvIHJlcGxhY2UoKVxuZnVuY3Rpb24gZmNhbWVsQ2FzZSggX2FsbCwgbGV0dGVyICkge1xuXHRyZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG59XG5cbi8vIENvbnZlcnQgZGFzaGVkIHRvIGNhbWVsQ2FzZTsgdXNlZCBieSB0aGUgY3NzIGFuZCBkYXRhIG1vZHVsZXNcbi8vIFN1cHBvcnQ6IElFIDw9OSAtIDExLCBFZGdlIDEyIC0gMTVcbi8vIE1pY3Jvc29mdCBmb3Jnb3QgdG8gaHVtcCB0aGVpciB2ZW5kb3IgcHJlZml4ICh0cmFjLTk1NzIpXG5mdW5jdGlvbiBjYW1lbENhc2UoIHN0cmluZyApIHtcblx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKCBybXNQcmVmaXgsIFwibXMtXCIgKS5yZXBsYWNlKCByZGFzaEFscGhhLCBmY2FtZWxDYXNlICk7XG59XG52YXIgYWNjZXB0RGF0YSA9IGZ1bmN0aW9uKCBvd25lciApIHtcblxuXHQvLyBBY2NlcHRzIG9ubHk6XG5cdC8vICAtIE5vZGVcblx0Ly8gICAgLSBOb2RlLkVMRU1FTlRfTk9ERVxuXHQvLyAgICAtIE5vZGUuRE9DVU1FTlRfTk9ERVxuXHQvLyAgLSBPYmplY3Rcblx0Ly8gICAgLSBBbnlcblx0cmV0dXJuIG93bmVyLm5vZGVUeXBlID09PSAxIHx8IG93bmVyLm5vZGVUeXBlID09PSA5IHx8ICEoICtvd25lci5ub2RlVHlwZSApO1xufTtcblxuXG5cblxuZnVuY3Rpb24gRGF0YSgpIHtcblx0dGhpcy5leHBhbmRvID0galF1ZXJ5LmV4cGFuZG8gKyBEYXRhLnVpZCsrO1xufVxuXG5EYXRhLnVpZCA9IDE7XG5cbkRhdGEucHJvdG90eXBlID0ge1xuXG5cdGNhY2hlOiBmdW5jdGlvbiggb3duZXIgKSB7XG5cblx0XHQvLyBDaGVjayBpZiB0aGUgb3duZXIgb2JqZWN0IGFscmVhZHkgaGFzIGEgY2FjaGVcblx0XHR2YXIgdmFsdWUgPSBvd25lclsgdGhpcy5leHBhbmRvIF07XG5cblx0XHQvLyBJZiBub3QsIGNyZWF0ZSBvbmVcblx0XHRpZiAoICF2YWx1ZSApIHtcblx0XHRcdHZhbHVlID0ge307XG5cblx0XHRcdC8vIFdlIGNhbiBhY2NlcHQgZGF0YSBmb3Igbm9uLWVsZW1lbnQgbm9kZXMgaW4gbW9kZXJuIGJyb3dzZXJzLFxuXHRcdFx0Ly8gYnV0IHdlIHNob3VsZCBub3QsIHNlZSB0cmFjLTgzMzUuXG5cdFx0XHQvLyBBbHdheXMgcmV0dXJuIGFuIGVtcHR5IG9iamVjdC5cblx0XHRcdGlmICggYWNjZXB0RGF0YSggb3duZXIgKSApIHtcblxuXHRcdFx0XHQvLyBJZiBpdCBpcyBhIG5vZGUgdW5saWtlbHkgdG8gYmUgc3RyaW5naWZ5LWVkIG9yIGxvb3BlZCBvdmVyXG5cdFx0XHRcdC8vIHVzZSBwbGFpbiBhc3NpZ25tZW50XG5cdFx0XHRcdGlmICggb3duZXIubm9kZVR5cGUgKSB7XG5cdFx0XHRcdFx0b3duZXJbIHRoaXMuZXhwYW5kbyBdID0gdmFsdWU7XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIHNlY3VyZSBpdCBpbiBhIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5XG5cdFx0XHRcdC8vIGNvbmZpZ3VyYWJsZSBtdXN0IGJlIHRydWUgdG8gYWxsb3cgdGhlIHByb3BlcnR5IHRvIGJlXG5cdFx0XHRcdC8vIGRlbGV0ZWQgd2hlbiBkYXRhIGlzIHJlbW92ZWRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIG93bmVyLCB0aGlzLmV4cGFuZG8sIHtcblx0XHRcdFx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0c2V0OiBmdW5jdGlvbiggb3duZXIsIGRhdGEsIHZhbHVlICkge1xuXHRcdHZhciBwcm9wLFxuXHRcdFx0Y2FjaGUgPSB0aGlzLmNhY2hlKCBvd25lciApO1xuXG5cdFx0Ly8gSGFuZGxlOiBbIG93bmVyLCBrZXksIHZhbHVlIF0gYXJnc1xuXHRcdC8vIEFsd2F5cyB1c2UgY2FtZWxDYXNlIGtleSAoZ2gtMjI1Nylcblx0XHRpZiAoIHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0Y2FjaGVbIGNhbWVsQ2FzZSggZGF0YSApIF0gPSB2YWx1ZTtcblxuXHRcdC8vIEhhbmRsZTogWyBvd25lciwgeyBwcm9wZXJ0aWVzIH0gXSBhcmdzXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gQ29weSB0aGUgcHJvcGVydGllcyBvbmUtYnktb25lIHRvIHRoZSBjYWNoZSBvYmplY3Rcblx0XHRcdGZvciAoIHByb3AgaW4gZGF0YSApIHtcblx0XHRcdFx0Y2FjaGVbIGNhbWVsQ2FzZSggcHJvcCApIF0gPSBkYXRhWyBwcm9wIF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjYWNoZTtcblx0fSxcblx0Z2V0OiBmdW5jdGlvbiggb3duZXIsIGtleSApIHtcblx0XHRyZXR1cm4ga2V5ID09PSB1bmRlZmluZWQgP1xuXHRcdFx0dGhpcy5jYWNoZSggb3duZXIgKSA6XG5cblx0XHRcdC8vIEFsd2F5cyB1c2UgY2FtZWxDYXNlIGtleSAoZ2gtMjI1Nylcblx0XHRcdG93bmVyWyB0aGlzLmV4cGFuZG8gXSAmJiBvd25lclsgdGhpcy5leHBhbmRvIF1bIGNhbWVsQ2FzZSgga2V5ICkgXTtcblx0fSxcblx0YWNjZXNzOiBmdW5jdGlvbiggb3duZXIsIGtleSwgdmFsdWUgKSB7XG5cblx0XHQvLyBJbiBjYXNlcyB3aGVyZSBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIE5vIGtleSB3YXMgc3BlY2lmaWVkXG5cdFx0Ly8gICAyLiBBIHN0cmluZyBrZXkgd2FzIHNwZWNpZmllZCwgYnV0IG5vIHZhbHVlIHByb3ZpZGVkXG5cdFx0Ly9cblx0XHQvLyBUYWtlIHRoZSBcInJlYWRcIiBwYXRoIGFuZCBhbGxvdyB0aGUgZ2V0IG1ldGhvZCB0byBkZXRlcm1pbmVcblx0XHQvLyB3aGljaCB2YWx1ZSB0byByZXR1cm4sIHJlc3BlY3RpdmVseSBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIFRoZSBlbnRpcmUgY2FjaGUgb2JqZWN0XG5cdFx0Ly8gICAyLiBUaGUgZGF0YSBzdG9yZWQgYXQgdGhlIGtleVxuXHRcdC8vXG5cdFx0aWYgKCBrZXkgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHQoICgga2V5ICYmIHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgKSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkICkgKSB7XG5cblx0XHRcdHJldHVybiB0aGlzLmdldCggb3duZXIsIGtleSApO1xuXHRcdH1cblxuXHRcdC8vIFdoZW4gdGhlIGtleSBpcyBub3QgYSBzdHJpbmcsIG9yIGJvdGggYSBrZXkgYW5kIHZhbHVlXG5cdFx0Ly8gYXJlIHNwZWNpZmllZCwgc2V0IG9yIGV4dGVuZCAoZXhpc3Rpbmcgb2JqZWN0cykgd2l0aCBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIEFuIG9iamVjdCBvZiBwcm9wZXJ0aWVzXG5cdFx0Ly8gICAyLiBBIGtleSBhbmQgdmFsdWVcblx0XHQvL1xuXHRcdHRoaXMuc2V0KCBvd25lciwga2V5LCB2YWx1ZSApO1xuXG5cdFx0Ly8gU2luY2UgdGhlIFwic2V0XCIgcGF0aCBjYW4gaGF2ZSB0d28gcG9zc2libGUgZW50cnkgcG9pbnRzXG5cdFx0Ly8gcmV0dXJuIHRoZSBleHBlY3RlZCBkYXRhIGJhc2VkIG9uIHdoaWNoIHBhdGggd2FzIHRha2VuWypdXG5cdFx0cmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IGtleTtcblx0fSxcblx0cmVtb3ZlOiBmdW5jdGlvbiggb3duZXIsIGtleSApIHtcblx0XHR2YXIgaSxcblx0XHRcdGNhY2hlID0gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXG5cdFx0aWYgKCBjYWNoZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICgga2V5ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdC8vIFN1cHBvcnQgYXJyYXkgb3Igc3BhY2Ugc2VwYXJhdGVkIHN0cmluZyBvZiBrZXlzXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIGtleSApICkge1xuXG5cdFx0XHRcdC8vIElmIGtleSBpcyBhbiBhcnJheSBvZiBrZXlzLi4uXG5cdFx0XHRcdC8vIFdlIGFsd2F5cyBzZXQgY2FtZWxDYXNlIGtleXMsIHNvIHJlbW92ZSB0aGF0LlxuXHRcdFx0XHRrZXkgPSBrZXkubWFwKCBjYW1lbENhc2UgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGtleSA9IGNhbWVsQ2FzZSgga2V5ICk7XG5cblx0XHRcdFx0Ly8gSWYgYSBrZXkgd2l0aCB0aGUgc3BhY2VzIGV4aXN0cywgdXNlIGl0LlxuXHRcdFx0XHQvLyBPdGhlcndpc2UsIGNyZWF0ZSBhbiBhcnJheSBieSBtYXRjaGluZyBub24td2hpdGVzcGFjZVxuXHRcdFx0XHRrZXkgPSBrZXkgaW4gY2FjaGUgP1xuXHRcdFx0XHRcdFsga2V5IF0gOlxuXHRcdFx0XHRcdCgga2V5Lm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW10gKTtcblx0XHRcdH1cblxuXHRcdFx0aSA9IGtleS5sZW5ndGg7XG5cblx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRkZWxldGUgY2FjaGVbIGtleVsgaSBdIF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBleHBhbmRvIGlmIHRoZXJlJ3Mgbm8gbW9yZSBkYXRhXG5cdFx0aWYgKCBrZXkgPT09IHVuZGVmaW5lZCB8fCBqUXVlcnkuaXNFbXB0eU9iamVjdCggY2FjaGUgKSApIHtcblxuXHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NVxuXHRcdFx0Ly8gV2Via2l0ICYgQmxpbmsgcGVyZm9ybWFuY2Ugc3VmZmVycyB3aGVuIGRlbGV0aW5nIHByb3BlcnRpZXNcblx0XHRcdC8vIGZyb20gRE9NIG5vZGVzLCBzbyBzZXQgdG8gdW5kZWZpbmVkIGluc3RlYWRcblx0XHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTM3ODYwNyAoYnVnIHJlc3RyaWN0ZWQpXG5cdFx0XHRpZiAoIG93bmVyLm5vZGVUeXBlICkge1xuXHRcdFx0XHRvd25lclsgdGhpcy5leHBhbmRvIF0gPSB1bmRlZmluZWQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWxldGUgb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0aGFzRGF0YTogZnVuY3Rpb24oIG93bmVyICkge1xuXHRcdHZhciBjYWNoZSA9IG93bmVyWyB0aGlzLmV4cGFuZG8gXTtcblx0XHRyZXR1cm4gY2FjaGUgIT09IHVuZGVmaW5lZCAmJiAhalF1ZXJ5LmlzRW1wdHlPYmplY3QoIGNhY2hlICk7XG5cdH1cbn07XG52YXIgZGF0YVByaXYgPSBuZXcgRGF0YSgpO1xuXG52YXIgZGF0YVVzZXIgPSBuZXcgRGF0YSgpO1xuXG5cblxuLy9cdEltcGxlbWVudGF0aW9uIFN1bW1hcnlcbi8vXG4vL1x0MS4gRW5mb3JjZSBBUEkgc3VyZmFjZSBhbmQgc2VtYW50aWMgY29tcGF0aWJpbGl0eSB3aXRoIDEuOS54IGJyYW5jaFxuLy9cdDIuIEltcHJvdmUgdGhlIG1vZHVsZSdzIG1haW50YWluYWJpbGl0eSBieSByZWR1Y2luZyB0aGUgc3RvcmFnZVxuLy9cdFx0cGF0aHMgdG8gYSBzaW5nbGUgbWVjaGFuaXNtLlxuLy9cdDMuIFVzZSB0aGUgc2FtZSBzaW5nbGUgbWVjaGFuaXNtIHRvIHN1cHBvcnQgXCJwcml2YXRlXCIgYW5kIFwidXNlclwiIGRhdGEuXG4vL1x0NC4gX05ldmVyXyBleHBvc2UgXCJwcml2YXRlXCIgZGF0YSB0byB1c2VyIGNvZGUgKFRPRE86IERyb3AgX2RhdGEsIF9yZW1vdmVEYXRhKVxuLy9cdDUuIEF2b2lkIGV4cG9zaW5nIGltcGxlbWVudGF0aW9uIGRldGFpbHMgb24gdXNlciBvYmplY3RzIChlZy4gZXhwYW5kbyBwcm9wZXJ0aWVzKVxuLy9cdDYuIFByb3ZpZGUgYSBjbGVhciBwYXRoIGZvciBpbXBsZW1lbnRhdGlvbiB1cGdyYWRlIHRvIFdlYWtNYXAgaW4gMjAxNFxuXG52YXIgcmJyYWNlID0gL14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFxuXHRybXVsdGlEYXNoID0gL1tBLVpdL2c7XG5cbmZ1bmN0aW9uIGdldERhdGEoIGRhdGEgKSB7XG5cdGlmICggZGF0YSA9PT0gXCJ0cnVlXCIgKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoIGRhdGEgPT09IFwiZmFsc2VcIiApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpZiAoIGRhdGEgPT09IFwibnVsbFwiICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Ly8gT25seSBjb252ZXJ0IHRvIGEgbnVtYmVyIGlmIGl0IGRvZXNuJ3QgY2hhbmdlIHRoZSBzdHJpbmdcblx0aWYgKCBkYXRhID09PSArZGF0YSArIFwiXCIgKSB7XG5cdFx0cmV0dXJuICtkYXRhO1xuXHR9XG5cblx0aWYgKCByYnJhY2UudGVzdCggZGF0YSApICkge1xuXHRcdHJldHVybiBKU09OLnBhcnNlKCBkYXRhICk7XG5cdH1cblxuXHRyZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZGF0YUF0dHIoIGVsZW0sIGtleSwgZGF0YSApIHtcblx0dmFyIG5hbWU7XG5cblx0Ly8gSWYgbm90aGluZyB3YXMgZm91bmQgaW50ZXJuYWxseSwgdHJ5IHRvIGZldGNoIGFueVxuXHQvLyBkYXRhIGZyb20gdGhlIEhUTUw1IGRhdGEtKiBhdHRyaWJ1dGVcblx0aWYgKCBkYXRhID09PSB1bmRlZmluZWQgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRuYW1lID0gXCJkYXRhLVwiICsga2V5LnJlcGxhY2UoIHJtdWx0aURhc2gsIFwiLSQmXCIgKS50b0xvd2VyQ2FzZSgpO1xuXHRcdGRhdGEgPSBlbGVtLmdldEF0dHJpYnV0ZSggbmFtZSApO1xuXG5cdFx0aWYgKCB0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRhdGEgPSBnZXREYXRhKCBkYXRhICk7XG5cdFx0XHR9IGNhdGNoICggZSApIHt9XG5cblx0XHRcdC8vIE1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGRhdGEgc28gaXQgaXNuJ3QgY2hhbmdlZCBsYXRlclxuXHRcdFx0ZGF0YVVzZXIuc2V0KCBlbGVtLCBrZXksIGRhdGEgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGRhdGE7XG59XG5cbmpRdWVyeS5leHRlbmQoIHtcblx0aGFzRGF0YTogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGRhdGFVc2VyLmhhc0RhdGEoIGVsZW0gKSB8fCBkYXRhUHJpdi5oYXNEYXRhKCBlbGVtICk7XG5cdH0sXG5cblx0ZGF0YTogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGRhdGEgKSB7XG5cdFx0cmV0dXJuIGRhdGFVc2VyLmFjY2VzcyggZWxlbSwgbmFtZSwgZGF0YSApO1xuXHR9LFxuXG5cdHJlbW92ZURhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuXHRcdGRhdGFVc2VyLnJlbW92ZSggZWxlbSwgbmFtZSApO1xuXHR9LFxuXG5cdC8vIFRPRE86IE5vdyB0aGF0IGFsbCBjYWxscyB0byBfZGF0YSBhbmQgX3JlbW92ZURhdGEgaGF2ZSBiZWVuIHJlcGxhY2VkXG5cdC8vIHdpdGggZGlyZWN0IGNhbGxzIHRvIGRhdGFQcml2IG1ldGhvZHMsIHRoZXNlIGNhbiBiZSBkZXByZWNhdGVkLlxuXHRfZGF0YTogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGRhdGEgKSB7XG5cdFx0cmV0dXJuIGRhdGFQcml2LmFjY2VzcyggZWxlbSwgbmFtZSwgZGF0YSApO1xuXHR9LFxuXG5cdF9yZW1vdmVEYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcblx0XHRkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIG5hbWUgKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGRhdGE6IGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuXHRcdHZhciBpLCBuYW1lLCBkYXRhLFxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXSxcblx0XHRcdGF0dHJzID0gZWxlbSAmJiBlbGVtLmF0dHJpYnV0ZXM7XG5cblx0XHQvLyBHZXRzIGFsbCB2YWx1ZXNcblx0XHRpZiAoIGtleSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0aWYgKCB0aGlzLmxlbmd0aCApIHtcblx0XHRcdFx0ZGF0YSA9IGRhdGFVc2VyLmdldCggZWxlbSApO1xuXG5cdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAhZGF0YVByaXYuZ2V0KCBlbGVtLCBcImhhc0RhdGFBdHRyc1wiICkgKSB7XG5cdFx0XHRcdFx0aSA9IGF0dHJzLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgMTEgb25seVxuXHRcdFx0XHRcdFx0Ly8gVGhlIGF0dHJzIGVsZW1lbnRzIGNhbiBiZSBudWxsICh0cmFjLTE0ODk0KVxuXHRcdFx0XHRcdFx0aWYgKCBhdHRyc1sgaSBdICkge1xuXHRcdFx0XHRcdFx0XHRuYW1lID0gYXR0cnNbIGkgXS5uYW1lO1xuXHRcdFx0XHRcdFx0XHRpZiAoIG5hbWUuaW5kZXhPZiggXCJkYXRhLVwiICkgPT09IDAgKSB7XG5cdFx0XHRcdFx0XHRcdFx0bmFtZSA9IGNhbWVsQ2FzZSggbmFtZS5zbGljZSggNSApICk7XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YUF0dHIoIGVsZW0sIG5hbWUsIGRhdGFbIG5hbWUgXSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRhdGFQcml2LnNldCggZWxlbSwgXCJoYXNEYXRhQXR0cnNcIiwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH1cblxuXHRcdC8vIFNldHMgbXVsdGlwbGUgdmFsdWVzXG5cdFx0aWYgKCB0eXBlb2Yga2V5ID09PSBcIm9iamVjdFwiICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRhdGFVc2VyLnNldCggdGhpcywga2V5ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0dmFyIGRhdGE7XG5cblx0XHRcdC8vIFRoZSBjYWxsaW5nIGpRdWVyeSBvYmplY3QgKGVsZW1lbnQgbWF0Y2hlcykgaXMgbm90IGVtcHR5XG5cdFx0XHQvLyAoYW5kIHRoZXJlZm9yZSBoYXMgYW4gZWxlbWVudCBhcHBlYXJzIGF0IHRoaXNbIDAgXSkgYW5kIHRoZVxuXHRcdFx0Ly8gYHZhbHVlYCBwYXJhbWV0ZXIgd2FzIG5vdCB1bmRlZmluZWQuIEFuIGVtcHR5IGpRdWVyeSBvYmplY3Rcblx0XHRcdC8vIHdpbGwgcmVzdWx0IGluIGB1bmRlZmluZWRgIGZvciBlbGVtID0gdGhpc1sgMCBdIHdoaWNoIHdpbGxcblx0XHRcdC8vIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhbiBhdHRlbXB0IHRvIHJlYWQgYSBkYXRhIGNhY2hlIGlzIG1hZGUuXG5cdFx0XHRpZiAoIGVsZW0gJiYgdmFsdWUgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHQvLyBBdHRlbXB0IHRvIGdldCBkYXRhIGZyb20gdGhlIGNhY2hlXG5cdFx0XHRcdC8vIFRoZSBrZXkgd2lsbCBhbHdheXMgYmUgY2FtZWxDYXNlZCBpbiBEYXRhXG5cdFx0XHRcdGRhdGEgPSBkYXRhVXNlci5nZXQoIGVsZW0sIGtleSApO1xuXHRcdFx0XHRpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEF0dGVtcHQgdG8gXCJkaXNjb3ZlclwiIHRoZSBkYXRhIGluXG5cdFx0XHRcdC8vIEhUTUw1IGN1c3RvbSBkYXRhLSogYXR0cnNcblx0XHRcdFx0ZGF0YSA9IGRhdGFBdHRyKCBlbGVtLCBrZXkgKTtcblx0XHRcdFx0aWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXZSB0cmllZCByZWFsbHkgaGFyZCwgYnV0IHRoZSBkYXRhIGRvZXNuJ3QgZXhpc3QuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IHRoZSBkYXRhLi4uXG5cdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdC8vIFdlIGFsd2F5cyBzdG9yZSB0aGUgY2FtZWxDYXNlZCBrZXlcblx0XHRcdFx0ZGF0YVVzZXIuc2V0KCB0aGlzLCBrZXksIHZhbHVlICk7XG5cdFx0XHR9ICk7XG5cdFx0fSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxLCBudWxsLCB0cnVlICk7XG5cdH0sXG5cblx0cmVtb3ZlRGF0YTogZnVuY3Rpb24oIGtleSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGRhdGFVc2VyLnJlbW92ZSggdGhpcywga2V5ICk7XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cblxualF1ZXJ5LmV4dGVuZCgge1xuXHRxdWV1ZTogZnVuY3Rpb24oIGVsZW0sIHR5cGUsIGRhdGEgKSB7XG5cdFx0dmFyIHF1ZXVlO1xuXG5cdFx0aWYgKCBlbGVtICkge1xuXHRcdFx0dHlwZSA9ICggdHlwZSB8fCBcImZ4XCIgKSArIFwicXVldWVcIjtcblx0XHRcdHF1ZXVlID0gZGF0YVByaXYuZ2V0KCBlbGVtLCB0eXBlICk7XG5cblx0XHRcdC8vIFNwZWVkIHVwIGRlcXVldWUgYnkgZ2V0dGluZyBvdXQgcXVpY2tseSBpZiB0aGlzIGlzIGp1c3QgYSBsb29rdXBcblx0XHRcdGlmICggZGF0YSApIHtcblx0XHRcdFx0aWYgKCAhcXVldWUgfHwgQXJyYXkuaXNBcnJheSggZGF0YSApICkge1xuXHRcdFx0XHRcdHF1ZXVlID0gZGF0YVByaXYuYWNjZXNzKCBlbGVtLCB0eXBlLCBqUXVlcnkubWFrZUFycmF5KCBkYXRhICkgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRxdWV1ZS5wdXNoKCBkYXRhICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBxdWV1ZSB8fCBbXTtcblx0XHR9XG5cdH0sXG5cblx0ZGVxdWV1ZTogZnVuY3Rpb24oIGVsZW0sIHR5cGUgKSB7XG5cdFx0dHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xuXG5cdFx0dmFyIHF1ZXVlID0galF1ZXJ5LnF1ZXVlKCBlbGVtLCB0eXBlICksXG5cdFx0XHRzdGFydExlbmd0aCA9IHF1ZXVlLmxlbmd0aCxcblx0XHRcdGZuID0gcXVldWUuc2hpZnQoKSxcblx0XHRcdGhvb2tzID0galF1ZXJ5Ll9xdWV1ZUhvb2tzKCBlbGVtLCB0eXBlICksXG5cdFx0XHRuZXh0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeS5kZXF1ZXVlKCBlbGVtLCB0eXBlICk7XG5cdFx0XHR9O1xuXG5cdFx0Ly8gSWYgdGhlIGZ4IHF1ZXVlIGlzIGRlcXVldWVkLCBhbHdheXMgcmVtb3ZlIHRoZSBwcm9ncmVzcyBzZW50aW5lbFxuXHRcdGlmICggZm4gPT09IFwiaW5wcm9ncmVzc1wiICkge1xuXHRcdFx0Zm4gPSBxdWV1ZS5zaGlmdCgpO1xuXHRcdFx0c3RhcnRMZW5ndGgtLTtcblx0XHR9XG5cblx0XHRpZiAoIGZuICkge1xuXG5cdFx0XHQvLyBBZGQgYSBwcm9ncmVzcyBzZW50aW5lbCB0byBwcmV2ZW50IHRoZSBmeCBxdWV1ZSBmcm9tIGJlaW5nXG5cdFx0XHQvLyBhdXRvbWF0aWNhbGx5IGRlcXVldWVkXG5cdFx0XHRpZiAoIHR5cGUgPT09IFwiZnhcIiApIHtcblx0XHRcdFx0cXVldWUudW5zaGlmdCggXCJpbnByb2dyZXNzXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2xlYXIgdXAgdGhlIGxhc3QgcXVldWUgc3RvcCBmdW5jdGlvblxuXHRcdFx0ZGVsZXRlIGhvb2tzLnN0b3A7XG5cdFx0XHRmbi5jYWxsKCBlbGVtLCBuZXh0LCBob29rcyApO1xuXHRcdH1cblxuXHRcdGlmICggIXN0YXJ0TGVuZ3RoICYmIGhvb2tzICkge1xuXHRcdFx0aG9va3MuZW1wdHkuZmlyZSgpO1xuXHRcdH1cblx0fSxcblxuXHQvLyBOb3QgcHVibGljIC0gZ2VuZXJhdGUgYSBxdWV1ZUhvb2tzIG9iamVjdCwgb3IgcmV0dXJuIHRoZSBjdXJyZW50IG9uZVxuXHRfcXVldWVIb29rczogZnVuY3Rpb24oIGVsZW0sIHR5cGUgKSB7XG5cdFx0dmFyIGtleSA9IHR5cGUgKyBcInF1ZXVlSG9va3NcIjtcblx0XHRyZXR1cm4gZGF0YVByaXYuZ2V0KCBlbGVtLCBrZXkgKSB8fCBkYXRhUHJpdi5hY2Nlc3MoIGVsZW0sIGtleSwge1xuXHRcdFx0ZW1wdHk6IGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLmFkZCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRhdGFQcml2LnJlbW92ZSggZWxlbSwgWyB0eXBlICsgXCJxdWV1ZVwiLCBrZXkgXSApO1xuXHRcdFx0fSApXG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0cXVldWU6IGZ1bmN0aW9uKCB0eXBlLCBkYXRhICkge1xuXHRcdHZhciBzZXR0ZXIgPSAyO1xuXG5cdFx0aWYgKCB0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGRhdGEgPSB0eXBlO1xuXHRcdFx0dHlwZSA9IFwiZnhcIjtcblx0XHRcdHNldHRlci0tO1xuXHRcdH1cblxuXHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCA8IHNldHRlciApIHtcblx0XHRcdHJldHVybiBqUXVlcnkucXVldWUoIHRoaXNbIDAgXSwgdHlwZSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBkYXRhID09PSB1bmRlZmluZWQgP1xuXHRcdFx0dGhpcyA6XG5cdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgcXVldWUgPSBqUXVlcnkucXVldWUoIHRoaXMsIHR5cGUsIGRhdGEgKTtcblxuXHRcdFx0XHQvLyBFbnN1cmUgYSBob29rcyBmb3IgdGhpcyBxdWV1ZVxuXHRcdFx0XHRqUXVlcnkuX3F1ZXVlSG9va3MoIHRoaXMsIHR5cGUgKTtcblxuXHRcdFx0XHRpZiAoIHR5cGUgPT09IFwiZnhcIiAmJiBxdWV1ZVsgMCBdICE9PSBcImlucHJvZ3Jlc3NcIiApIHtcblx0XHRcdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgdHlwZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdH0sXG5cdGRlcXVldWU6IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIHR5cGUgKTtcblx0XHR9ICk7XG5cdH0sXG5cdGNsZWFyUXVldWU6IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdHJldHVybiB0aGlzLnF1ZXVlKCB0eXBlIHx8IFwiZnhcIiwgW10gKTtcblx0fSxcblxuXHQvLyBHZXQgYSBwcm9taXNlIHJlc29sdmVkIHdoZW4gcXVldWVzIG9mIGEgY2VydGFpbiB0eXBlXG5cdC8vIGFyZSBlbXB0aWVkIChmeCBpcyB0aGUgdHlwZSBieSBkZWZhdWx0KVxuXHRwcm9taXNlOiBmdW5jdGlvbiggdHlwZSwgb2JqICkge1xuXHRcdHZhciB0bXAsXG5cdFx0XHRjb3VudCA9IDEsXG5cdFx0XHRkZWZlciA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuXHRcdFx0ZWxlbWVudHMgPSB0aGlzLFxuXHRcdFx0aSA9IHRoaXMubGVuZ3RoLFxuXHRcdFx0cmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoICEoIC0tY291bnQgKSApIHtcblx0XHRcdFx0XHRkZWZlci5yZXNvbHZlV2l0aCggZWxlbWVudHMsIFsgZWxlbWVudHMgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0aWYgKCB0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdG9iaiA9IHR5cGU7XG5cdFx0XHR0eXBlID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdHRtcCA9IGRhdGFQcml2LmdldCggZWxlbWVudHNbIGkgXSwgdHlwZSArIFwicXVldWVIb29rc1wiICk7XG5cdFx0XHRpZiAoIHRtcCAmJiB0bXAuZW1wdHkgKSB7XG5cdFx0XHRcdGNvdW50Kys7XG5cdFx0XHRcdHRtcC5lbXB0eS5hZGQoIHJlc29sdmUgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVzb2x2ZSgpO1xuXHRcdHJldHVybiBkZWZlci5wcm9taXNlKCBvYmogKTtcblx0fVxufSApO1xudmFyIHBudW0gPSAoIC9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvICkuc291cmNlO1xuXG52YXIgcmNzc051bSA9IG5ldyBSZWdFeHAoIFwiXig/OihbKy1dKT18KShcIiArIHBudW0gKyBcIikoW2EteiVdKikkXCIsIFwiaVwiICk7XG5cblxudmFyIGNzc0V4cGFuZCA9IFsgXCJUb3BcIiwgXCJSaWdodFwiLCBcIkJvdHRvbVwiLCBcIkxlZnRcIiBdO1xuXG52YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuXHR2YXIgaXNBdHRhY2hlZCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5jb250YWlucyggZWxlbS5vd25lckRvY3VtZW50LCBlbGVtICk7XG5cdFx0fSxcblx0XHRjb21wb3NlZCA9IHsgY29tcG9zZWQ6IHRydWUgfTtcblxuXHQvLyBTdXBwb3J0OiBJRSA5IC0gMTErLCBFZGdlIDEyIC0gMTgrLCBpT1MgMTAuMCAtIDEwLjIgb25seVxuXHQvLyBDaGVjayBhdHRhY2htZW50IGFjcm9zcyBzaGFkb3cgRE9NIGJvdW5kYXJpZXMgd2hlbiBwb3NzaWJsZSAoZ2gtMzUwNClcblx0Ly8gU3VwcG9ydDogaU9TIDEwLjAtMTAuMiBvbmx5XG5cdC8vIEVhcmx5IGlPUyAxMCB2ZXJzaW9ucyBzdXBwb3J0IGBhdHRhY2hTaGFkb3dgIGJ1dCBub3QgYGdldFJvb3ROb2RlYCxcblx0Ly8gbGVhZGluZyB0byBlcnJvcnMuIFdlIG5lZWQgdG8gY2hlY2sgZm9yIGBnZXRSb290Tm9kZWAuXG5cdGlmICggZG9jdW1lbnRFbGVtZW50LmdldFJvb3ROb2RlICkge1xuXHRcdGlzQXR0YWNoZWQgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBqUXVlcnkuY29udGFpbnMoIGVsZW0ub3duZXJEb2N1bWVudCwgZWxlbSApIHx8XG5cdFx0XHRcdGVsZW0uZ2V0Um9vdE5vZGUoIGNvbXBvc2VkICkgPT09IGVsZW0ub3duZXJEb2N1bWVudDtcblx0XHR9O1xuXHR9XG52YXIgaXNIaWRkZW5XaXRoaW5UcmVlID0gZnVuY3Rpb24oIGVsZW0sIGVsICkge1xuXG5cdFx0Ly8gaXNIaWRkZW5XaXRoaW5UcmVlIG1pZ2h0IGJlIGNhbGxlZCBmcm9tIGpRdWVyeSNmaWx0ZXIgZnVuY3Rpb247XG5cdFx0Ly8gaW4gdGhhdCBjYXNlLCBlbGVtZW50IHdpbGwgYmUgc2Vjb25kIGFyZ3VtZW50XG5cdFx0ZWxlbSA9IGVsIHx8IGVsZW07XG5cblx0XHQvLyBJbmxpbmUgc3R5bGUgdHJ1bXBzIGFsbFxuXHRcdHJldHVybiBlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiIHx8XG5cdFx0XHRlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwiXCIgJiZcblxuXHRcdFx0Ly8gT3RoZXJ3aXNlLCBjaGVjayBjb21wdXRlZCBzdHlsZVxuXHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA8PTQzIC0gNDVcblx0XHRcdC8vIERpc2Nvbm5lY3RlZCBlbGVtZW50cyBjYW4gaGF2ZSBjb21wdXRlZCBkaXNwbGF5OiBub25lLCBzbyBmaXJzdCBjb25maXJtIHRoYXQgZWxlbSBpc1xuXHRcdFx0Ly8gaW4gdGhlIGRvY3VtZW50LlxuXHRcdFx0aXNBdHRhY2hlZCggZWxlbSApICYmXG5cblx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiICkgPT09IFwibm9uZVwiO1xuXHR9O1xuXG5cblxuZnVuY3Rpb24gYWRqdXN0Q1NTKCBlbGVtLCBwcm9wLCB2YWx1ZVBhcnRzLCB0d2VlbiApIHtcblx0dmFyIGFkanVzdGVkLCBzY2FsZSxcblx0XHRtYXhJdGVyYXRpb25zID0gMjAsXG5cdFx0Y3VycmVudFZhbHVlID0gdHdlZW4gP1xuXHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB0d2Vlbi5jdXIoKTtcblx0XHRcdH0gOlxuXHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBqUXVlcnkuY3NzKCBlbGVtLCBwcm9wLCBcIlwiICk7XG5cdFx0XHR9LFxuXHRcdGluaXRpYWwgPSBjdXJyZW50VmFsdWUoKSxcblx0XHR1bml0ID0gdmFsdWVQYXJ0cyAmJiB2YWx1ZVBhcnRzWyAzIF0gfHwgKCBqUXVlcnkuY3NzTnVtYmVyWyBwcm9wIF0gPyBcIlwiIDogXCJweFwiICksXG5cblx0XHQvLyBTdGFydGluZyB2YWx1ZSBjb21wdXRhdGlvbiBpcyByZXF1aXJlZCBmb3IgcG90ZW50aWFsIHVuaXQgbWlzbWF0Y2hlc1xuXHRcdGluaXRpYWxJblVuaXQgPSBlbGVtLm5vZGVUeXBlICYmXG5cdFx0XHQoIGpRdWVyeS5jc3NOdW1iZXJbIHByb3AgXSB8fCB1bml0ICE9PSBcInB4XCIgJiYgK2luaXRpYWwgKSAmJlxuXHRcdFx0cmNzc051bS5leGVjKCBqUXVlcnkuY3NzKCBlbGVtLCBwcm9wICkgKTtcblxuXHRpZiAoIGluaXRpYWxJblVuaXQgJiYgaW5pdGlhbEluVW5pdFsgMyBdICE9PSB1bml0ICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA8PTU0XG5cdFx0Ly8gSGFsdmUgdGhlIGl0ZXJhdGlvbiB0YXJnZXQgdmFsdWUgdG8gcHJldmVudCBpbnRlcmZlcmVuY2UgZnJvbSBDU1MgdXBwZXIgYm91bmRzIChnaC0yMTQ0KVxuXHRcdGluaXRpYWwgPSBpbml0aWFsIC8gMjtcblxuXHRcdC8vIFRydXN0IHVuaXRzIHJlcG9ydGVkIGJ5IGpRdWVyeS5jc3Ncblx0XHR1bml0ID0gdW5pdCB8fCBpbml0aWFsSW5Vbml0WyAzIF07XG5cblx0XHQvLyBJdGVyYXRpdmVseSBhcHByb3hpbWF0ZSBmcm9tIGEgbm9uemVybyBzdGFydGluZyBwb2ludFxuXHRcdGluaXRpYWxJblVuaXQgPSAraW5pdGlhbCB8fCAxO1xuXG5cdFx0d2hpbGUgKCBtYXhJdGVyYXRpb25zLS0gKSB7XG5cblx0XHRcdC8vIEV2YWx1YXRlIGFuZCB1cGRhdGUgb3VyIGJlc3QgZ3Vlc3MgKGRvdWJsaW5nIGd1ZXNzZXMgdGhhdCB6ZXJvIG91dCkuXG5cdFx0XHQvLyBGaW5pc2ggaWYgdGhlIHNjYWxlIGVxdWFscyBvciBjcm9zc2VzIDEgKG1ha2luZyB0aGUgb2xkKm5ldyBwcm9kdWN0IG5vbi1wb3NpdGl2ZSkuXG5cdFx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AsIGluaXRpYWxJblVuaXQgKyB1bml0ICk7XG5cdFx0XHRpZiAoICggMSAtIHNjYWxlICkgKiAoIDEgLSAoIHNjYWxlID0gY3VycmVudFZhbHVlKCkgLyBpbml0aWFsIHx8IDAuNSApICkgPD0gMCApIHtcblx0XHRcdFx0bWF4SXRlcmF0aW9ucyA9IDA7XG5cdFx0XHR9XG5cdFx0XHRpbml0aWFsSW5Vbml0ID0gaW5pdGlhbEluVW5pdCAvIHNjYWxlO1xuXG5cdFx0fVxuXG5cdFx0aW5pdGlhbEluVW5pdCA9IGluaXRpYWxJblVuaXQgKiAyO1xuXHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgcHJvcCwgaW5pdGlhbEluVW5pdCArIHVuaXQgKTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB3ZSB1cGRhdGUgdGhlIHR3ZWVuIHByb3BlcnRpZXMgbGF0ZXIgb25cblx0XHR2YWx1ZVBhcnRzID0gdmFsdWVQYXJ0cyB8fCBbXTtcblx0fVxuXG5cdGlmICggdmFsdWVQYXJ0cyApIHtcblx0XHRpbml0aWFsSW5Vbml0ID0gK2luaXRpYWxJblVuaXQgfHwgK2luaXRpYWwgfHwgMDtcblxuXHRcdC8vIEFwcGx5IHJlbGF0aXZlIG9mZnNldCAoKz0vLT0pIGlmIHNwZWNpZmllZFxuXHRcdGFkanVzdGVkID0gdmFsdWVQYXJ0c1sgMSBdID9cblx0XHRcdGluaXRpYWxJblVuaXQgKyAoIHZhbHVlUGFydHNbIDEgXSArIDEgKSAqIHZhbHVlUGFydHNbIDIgXSA6XG5cdFx0XHQrdmFsdWVQYXJ0c1sgMiBdO1xuXHRcdGlmICggdHdlZW4gKSB7XG5cdFx0XHR0d2Vlbi51bml0ID0gdW5pdDtcblx0XHRcdHR3ZWVuLnN0YXJ0ID0gaW5pdGlhbEluVW5pdDtcblx0XHRcdHR3ZWVuLmVuZCA9IGFkanVzdGVkO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gYWRqdXN0ZWQ7XG59XG5cblxudmFyIGRlZmF1bHREaXNwbGF5TWFwID0ge307XG5cbmZ1bmN0aW9uIGdldERlZmF1bHREaXNwbGF5KCBlbGVtICkge1xuXHR2YXIgdGVtcCxcblx0XHRkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQsXG5cdFx0bm9kZU5hbWUgPSBlbGVtLm5vZGVOYW1lLFxuXHRcdGRpc3BsYXkgPSBkZWZhdWx0RGlzcGxheU1hcFsgbm9kZU5hbWUgXTtcblxuXHRpZiAoIGRpc3BsYXkgKSB7XG5cdFx0cmV0dXJuIGRpc3BsYXk7XG5cdH1cblxuXHR0ZW1wID0gZG9jLmJvZHkuYXBwZW5kQ2hpbGQoIGRvYy5jcmVhdGVFbGVtZW50KCBub2RlTmFtZSApICk7XG5cdGRpc3BsYXkgPSBqUXVlcnkuY3NzKCB0ZW1wLCBcImRpc3BsYXlcIiApO1xuXG5cdHRlbXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdGVtcCApO1xuXG5cdGlmICggZGlzcGxheSA9PT0gXCJub25lXCIgKSB7XG5cdFx0ZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0fVxuXHRkZWZhdWx0RGlzcGxheU1hcFsgbm9kZU5hbWUgXSA9IGRpc3BsYXk7XG5cblx0cmV0dXJuIGRpc3BsYXk7XG59XG5cbmZ1bmN0aW9uIHNob3dIaWRlKCBlbGVtZW50cywgc2hvdyApIHtcblx0dmFyIGRpc3BsYXksIGVsZW0sXG5cdFx0dmFsdWVzID0gW10sXG5cdFx0aW5kZXggPSAwLFxuXHRcdGxlbmd0aCA9IGVsZW1lbnRzLmxlbmd0aDtcblxuXHQvLyBEZXRlcm1pbmUgbmV3IGRpc3BsYXkgdmFsdWUgZm9yIGVsZW1lbnRzIHRoYXQgbmVlZCB0byBjaGFuZ2Vcblx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRlbGVtID0gZWxlbWVudHNbIGluZGV4IF07XG5cdFx0aWYgKCAhZWxlbS5zdHlsZSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGRpc3BsYXkgPSBlbGVtLnN0eWxlLmRpc3BsYXk7XG5cdFx0aWYgKCBzaG93ICkge1xuXG5cdFx0XHQvLyBTaW5jZSB3ZSBmb3JjZSB2aXNpYmlsaXR5IHVwb24gY2FzY2FkZS1oaWRkZW4gZWxlbWVudHMsIGFuIGltbWVkaWF0ZSAoYW5kIHNsb3cpXG5cdFx0XHQvLyBjaGVjayBpcyByZXF1aXJlZCBpbiB0aGlzIGZpcnN0IGxvb3AgdW5sZXNzIHdlIGhhdmUgYSBub25lbXB0eSBkaXNwbGF5IHZhbHVlIChlaXRoZXJcblx0XHRcdC8vIGlubGluZSBvciBhYm91dC10by1iZS1yZXN0b3JlZClcblx0XHRcdGlmICggZGlzcGxheSA9PT0gXCJub25lXCIgKSB7XG5cdFx0XHRcdHZhbHVlc1sgaW5kZXggXSA9IGRhdGFQcml2LmdldCggZWxlbSwgXCJkaXNwbGF5XCIgKSB8fCBudWxsO1xuXHRcdFx0XHRpZiAoICF2YWx1ZXNbIGluZGV4IF0gKSB7XG5cdFx0XHRcdFx0ZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCBlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwiXCIgJiYgaXNIaWRkZW5XaXRoaW5UcmVlKCBlbGVtICkgKSB7XG5cdFx0XHRcdHZhbHVlc1sgaW5kZXggXSA9IGdldERlZmF1bHREaXNwbGF5KCBlbGVtICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICggZGlzcGxheSAhPT0gXCJub25lXCIgKSB7XG5cdFx0XHRcdHZhbHVlc1sgaW5kZXggXSA9IFwibm9uZVwiO1xuXG5cdFx0XHRcdC8vIFJlbWVtYmVyIHdoYXQgd2UncmUgb3ZlcndyaXRpbmdcblx0XHRcdFx0ZGF0YVByaXYuc2V0KCBlbGVtLCBcImRpc3BsYXlcIiwgZGlzcGxheSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFNldCB0aGUgZGlzcGxheSBvZiB0aGUgZWxlbWVudHMgaW4gYSBzZWNvbmQgbG9vcCB0byBhdm9pZCBjb25zdGFudCByZWZsb3dcblx0Zm9yICggaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRpZiAoIHZhbHVlc1sgaW5kZXggXSAhPSBudWxsICkge1xuXHRcdFx0ZWxlbWVudHNbIGluZGV4IF0uc3R5bGUuZGlzcGxheSA9IHZhbHVlc1sgaW5kZXggXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWxlbWVudHM7XG59XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0c2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHNob3dIaWRlKCB0aGlzLCB0cnVlICk7XG5cdH0sXG5cdGhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzaG93SGlkZSggdGhpcyApO1xuXHR9LFxuXHR0b2dnbGU6IGZ1bmN0aW9uKCBzdGF0ZSApIHtcblx0XHRpZiAoIHR5cGVvZiBzdGF0ZSA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGUgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCBpc0hpZGRlbldpdGhpblRyZWUoIHRoaXMgKSApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuc2hvdygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufSApO1xudmFyIHJjaGVja2FibGVUeXBlID0gKCAvXig/OmNoZWNrYm94fHJhZGlvKSQvaSApO1xuXG52YXIgcnRhZ05hbWUgPSAoIC88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKikvaSApO1xuXG52YXIgcnNjcmlwdFR5cGUgPSAoIC9eJHxebW9kdWxlJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2kgKTtcblxuXG5cbiggZnVuY3Rpb24oKSB7XG5cdHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcblx0XHRkaXYgPSBmcmFnbWVudC5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApICksXG5cdFx0aW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImlucHV0XCIgKTtcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCAtIDQuMyBvbmx5XG5cdC8vIENoZWNrIHN0YXRlIGxvc3QgaWYgdGhlIG5hbWUgaXMgc2V0ICh0cmFjLTExMjE3KVxuXHQvLyBTdXBwb3J0OiBXaW5kb3dzIFdlYiBBcHBzIChXV0EpXG5cdC8vIGBuYW1lYCBhbmQgYHR5cGVgIG11c3QgdXNlIC5zZXRBdHRyaWJ1dGUgZm9yIFdXQSAodHJhYy0xNDkwMSlcblx0aW5wdXQuc2V0QXR0cmlidXRlKCBcInR5cGVcIiwgXCJyYWRpb1wiICk7XG5cdGlucHV0LnNldEF0dHJpYnV0ZSggXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiICk7XG5cdGlucHV0LnNldEF0dHJpYnV0ZSggXCJuYW1lXCIsIFwidFwiICk7XG5cblx0ZGl2LmFwcGVuZENoaWxkKCBpbnB1dCApO1xuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjEgb25seVxuXHQvLyBPbGRlciBXZWJLaXQgZG9lc24ndCBjbG9uZSBjaGVja2VkIHN0YXRlIGNvcnJlY3RseSBpbiBmcmFnbWVudHNcblx0c3VwcG9ydC5jaGVja0Nsb25lID0gZGl2LmNsb25lTm9kZSggdHJ1ZSApLmNsb25lTm9kZSggdHJ1ZSApLmxhc3RDaGlsZC5jaGVja2VkO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHQvLyBNYWtlIHN1cmUgdGV4dGFyZWEgKGFuZCBjaGVja2JveCkgZGVmYXVsdFZhbHVlIGlzIHByb3Blcmx5IGNsb25lZFxuXHRkaXYuaW5uZXJIVE1MID0gXCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCI7XG5cdHN1cHBvcnQubm9DbG9uZUNoZWNrZWQgPSAhIWRpdi5jbG9uZU5vZGUoIHRydWUgKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdC8vIElFIDw9OSByZXBsYWNlcyA8b3B0aW9uPiB0YWdzIHdpdGggdGhlaXIgY29udGVudHMgd2hlbiBpbnNlcnRlZCBvdXRzaWRlIG9mXG5cdC8vIHRoZSBzZWxlY3QgZWxlbWVudC5cblx0ZGl2LmlubmVySFRNTCA9IFwiPG9wdGlvbj48L29wdGlvbj5cIjtcblx0c3VwcG9ydC5vcHRpb24gPSAhIWRpdi5sYXN0Q2hpbGQ7XG59ICkoKTtcblxuXG4vLyBXZSBoYXZlIHRvIGNsb3NlIHRoZXNlIHRhZ3MgdG8gc3VwcG9ydCBYSFRNTCAodHJhYy0xMzIwMClcbnZhciB3cmFwTWFwID0ge1xuXG5cdC8vIFhIVE1MIHBhcnNlcnMgZG8gbm90IG1hZ2ljYWxseSBpbnNlcnQgZWxlbWVudHMgaW4gdGhlXG5cdC8vIHNhbWUgd2F5IHRoYXQgdGFnIHNvdXAgcGFyc2VycyBkby4gU28gd2UgY2Fubm90IHNob3J0ZW5cblx0Ly8gdGhpcyBieSBvbWl0dGluZyA8dGJvZHk+IG9yIG90aGVyIHJlcXVpcmVkIGVsZW1lbnRzLlxuXHR0aGVhZDogWyAxLCBcIjx0YWJsZT5cIiwgXCI8L3RhYmxlPlwiIF0sXG5cdGNvbDogWyAyLCBcIjx0YWJsZT48Y29sZ3JvdXA+XCIsIFwiPC9jb2xncm91cD48L3RhYmxlPlwiIF0sXG5cdHRyOiBbIDIsIFwiPHRhYmxlPjx0Ym9keT5cIiwgXCI8L3Rib2R5PjwvdGFibGU+XCIgXSxcblx0dGQ6IFsgMywgXCI8dGFibGU+PHRib2R5Pjx0cj5cIiwgXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIiBdLFxuXG5cdF9kZWZhdWx0OiBbIDAsIFwiXCIsIFwiXCIgXVxufTtcblxud3JhcE1hcC50Ym9keSA9IHdyYXBNYXAudGZvb3QgPSB3cmFwTWFwLmNvbGdyb3VwID0gd3JhcE1hcC5jYXB0aW9uID0gd3JhcE1hcC50aGVhZDtcbndyYXBNYXAudGggPSB3cmFwTWFwLnRkO1xuXG4vLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuaWYgKCAhc3VwcG9ydC5vcHRpb24gKSB7XG5cdHdyYXBNYXAub3B0Z3JvdXAgPSB3cmFwTWFwLm9wdGlvbiA9IFsgMSwgXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsIFwiPC9zZWxlY3Q+XCIgXTtcbn1cblxuXG5mdW5jdGlvbiBnZXRBbGwoIGNvbnRleHQsIHRhZyApIHtcblxuXHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG5cdC8vIFVzZSB0eXBlb2YgdG8gYXZvaWQgemVyby1hcmd1bWVudCBtZXRob2QgaW52b2NhdGlvbiBvbiBob3N0IG9iamVjdHMgKHRyYWMtMTUxNTEpXG5cdHZhciByZXQ7XG5cblx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRyZXQgPSBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCB0YWcgfHwgXCIqXCIgKTtcblxuXHR9IGVsc2UgaWYgKCB0eXBlb2YgY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdHJldCA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCggdGFnIHx8IFwiKlwiICk7XG5cblx0fSBlbHNlIHtcblx0XHRyZXQgPSBbXTtcblx0fVxuXG5cdGlmICggdGFnID09PSB1bmRlZmluZWQgfHwgdGFnICYmIG5vZGVOYW1lKCBjb250ZXh0LCB0YWcgKSApIHtcblx0XHRyZXR1cm4galF1ZXJ5Lm1lcmdlKCBbIGNvbnRleHQgXSwgcmV0ICk7XG5cdH1cblxuXHRyZXR1cm4gcmV0O1xufVxuXG5cbi8vIE1hcmsgc2NyaXB0cyBhcyBoYXZpbmcgYWxyZWFkeSBiZWVuIGV2YWx1YXRlZFxuZnVuY3Rpb24gc2V0R2xvYmFsRXZhbCggZWxlbXMsIHJlZkVsZW1lbnRzICkge1xuXHR2YXIgaSA9IDAsXG5cdFx0bCA9IGVsZW1zLmxlbmd0aDtcblxuXHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0ZGF0YVByaXYuc2V0KFxuXHRcdFx0ZWxlbXNbIGkgXSxcblx0XHRcdFwiZ2xvYmFsRXZhbFwiLFxuXHRcdFx0IXJlZkVsZW1lbnRzIHx8IGRhdGFQcml2LmdldCggcmVmRWxlbWVudHNbIGkgXSwgXCJnbG9iYWxFdmFsXCIgKVxuXHRcdCk7XG5cdH1cbn1cblxuXG52YXIgcmh0bWwgPSAvPHwmIz9cXHcrOy87XG5cbmZ1bmN0aW9uIGJ1aWxkRnJhZ21lbnQoIGVsZW1zLCBjb250ZXh0LCBzY3JpcHRzLCBzZWxlY3Rpb24sIGlnbm9yZWQgKSB7XG5cdHZhciBlbGVtLCB0bXAsIHRhZywgd3JhcCwgYXR0YWNoZWQsIGosXG5cdFx0ZnJhZ21lbnQgPSBjb250ZXh0LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcblx0XHRub2RlcyA9IFtdLFxuXHRcdGkgPSAwLFxuXHRcdGwgPSBlbGVtcy5sZW5ndGg7XG5cblx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdGVsZW0gPSBlbGVtc1sgaSBdO1xuXG5cdFx0aWYgKCBlbGVtIHx8IGVsZW0gPT09IDAgKSB7XG5cblx0XHRcdC8vIEFkZCBub2RlcyBkaXJlY3RseVxuXHRcdFx0aWYgKCB0b1R5cGUoIGVsZW0gKSA9PT0gXCJvYmplY3RcIiApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHRcdFx0Ly8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIG5vZGVzLCBlbGVtLm5vZGVUeXBlID8gWyBlbGVtIF0gOiBlbGVtICk7XG5cblx0XHRcdC8vIENvbnZlcnQgbm9uLWh0bWwgaW50byBhIHRleHQgbm9kZVxuXHRcdFx0fSBlbHNlIGlmICggIXJodG1sLnRlc3QoIGVsZW0gKSApIHtcblx0XHRcdFx0bm9kZXMucHVzaCggY29udGV4dC5jcmVhdGVUZXh0Tm9kZSggZWxlbSApICk7XG5cblx0XHRcdC8vIENvbnZlcnQgaHRtbCBpbnRvIERPTSBub2Rlc1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG1wID0gdG1wIHx8IGZyYWdtZW50LmFwcGVuZENoaWxkKCBjb250ZXh0LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSApO1xuXG5cdFx0XHRcdC8vIERlc2VyaWFsaXplIGEgc3RhbmRhcmQgcmVwcmVzZW50YXRpb25cblx0XHRcdFx0dGFnID0gKCBydGFnTmFtZS5leGVjKCBlbGVtICkgfHwgWyBcIlwiLCBcIlwiIF0gKVsgMSBdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdHdyYXAgPSB3cmFwTWFwWyB0YWcgXSB8fCB3cmFwTWFwLl9kZWZhdWx0O1xuXHRcdFx0XHR0bXAuaW5uZXJIVE1MID0gd3JhcFsgMSBdICsgalF1ZXJ5Lmh0bWxQcmVmaWx0ZXIoIGVsZW0gKSArIHdyYXBbIDIgXTtcblxuXHRcdFx0XHQvLyBEZXNjZW5kIHRocm91Z2ggd3JhcHBlcnMgdG8gdGhlIHJpZ2h0IGNvbnRlbnRcblx0XHRcdFx0aiA9IHdyYXBbIDAgXTtcblx0XHRcdFx0d2hpbGUgKCBqLS0gKSB7XG5cdFx0XHRcdFx0dG1wID0gdG1wLmxhc3RDaGlsZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuXHRcdFx0XHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0XHRcdGpRdWVyeS5tZXJnZSggbm9kZXMsIHRtcC5jaGlsZE5vZGVzICk7XG5cblx0XHRcdFx0Ly8gUmVtZW1iZXIgdGhlIHRvcC1sZXZlbCBjb250YWluZXJcblx0XHRcdFx0dG1wID0gZnJhZ21lbnQuZmlyc3RDaGlsZDtcblxuXHRcdFx0XHQvLyBFbnN1cmUgdGhlIGNyZWF0ZWQgbm9kZXMgYXJlIG9ycGhhbmVkICh0cmFjLTEyMzkyKVxuXHRcdFx0XHR0bXAudGV4dENvbnRlbnQgPSBcIlwiO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJlbW92ZSB3cmFwcGVyIGZyb20gZnJhZ21lbnRcblx0ZnJhZ21lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG5cdGkgPSAwO1xuXHR3aGlsZSAoICggZWxlbSA9IG5vZGVzWyBpKysgXSApICkge1xuXG5cdFx0Ly8gU2tpcCBlbGVtZW50cyBhbHJlYWR5IGluIHRoZSBjb250ZXh0IGNvbGxlY3Rpb24gKHRyYWMtNDA4Nylcblx0XHRpZiAoIHNlbGVjdGlvbiAmJiBqUXVlcnkuaW5BcnJheSggZWxlbSwgc2VsZWN0aW9uICkgPiAtMSApIHtcblx0XHRcdGlmICggaWdub3JlZCApIHtcblx0XHRcdFx0aWdub3JlZC5wdXNoKCBlbGVtICk7XG5cdFx0XHR9XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRhdHRhY2hlZCA9IGlzQXR0YWNoZWQoIGVsZW0gKTtcblxuXHRcdC8vIEFwcGVuZCB0byBmcmFnbWVudFxuXHRcdHRtcCA9IGdldEFsbCggZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGVsZW0gKSwgXCJzY3JpcHRcIiApO1xuXG5cdFx0Ly8gUHJlc2VydmUgc2NyaXB0IGV2YWx1YXRpb24gaGlzdG9yeVxuXHRcdGlmICggYXR0YWNoZWQgKSB7XG5cdFx0XHRzZXRHbG9iYWxFdmFsKCB0bXAgKTtcblx0XHR9XG5cblx0XHQvLyBDYXB0dXJlIGV4ZWN1dGFibGVzXG5cdFx0aWYgKCBzY3JpcHRzICkge1xuXHRcdFx0aiA9IDA7XG5cdFx0XHR3aGlsZSAoICggZWxlbSA9IHRtcFsgaisrIF0gKSApIHtcblx0XHRcdFx0aWYgKCByc2NyaXB0VHlwZS50ZXN0KCBlbGVtLnR5cGUgfHwgXCJcIiApICkge1xuXHRcdFx0XHRcdHNjcmlwdHMucHVzaCggZWxlbSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZyYWdtZW50O1xufVxuXG5cbnZhciBydHlwZW5hbWVzcGFjZSA9IC9eKFteLl0qKSg/OlxcLiguKyl8KS87XG5cbmZ1bmN0aW9uIHJldHVyblRydWUoKSB7XG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZXR1cm5GYWxzZSgpIHtcblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBvbiggZWxlbSwgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiwgb25lICkge1xuXHR2YXIgb3JpZ0ZuLCB0eXBlO1xuXG5cdC8vIFR5cGVzIGNhbiBiZSBhIG1hcCBvZiB0eXBlcy9oYW5kbGVyc1xuXHRpZiAoIHR5cGVvZiB0eXBlcyA9PT0gXCJvYmplY3RcIiApIHtcblxuXHRcdC8vICggdHlwZXMtT2JqZWN0LCBzZWxlY3RvciwgZGF0YSApXG5cdFx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIgKSB7XG5cblx0XHRcdC8vICggdHlwZXMtT2JqZWN0LCBkYXRhIClcblx0XHRcdGRhdGEgPSBkYXRhIHx8IHNlbGVjdG9yO1xuXHRcdFx0c2VsZWN0b3IgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdGZvciAoIHR5cGUgaW4gdHlwZXMgKSB7XG5cdFx0XHRvbiggZWxlbSwgdHlwZSwgc2VsZWN0b3IsIGRhdGEsIHR5cGVzWyB0eXBlIF0sIG9uZSApO1xuXHRcdH1cblx0XHRyZXR1cm4gZWxlbTtcblx0fVxuXG5cdGlmICggZGF0YSA9PSBudWxsICYmIGZuID09IG51bGwgKSB7XG5cblx0XHQvLyAoIHR5cGVzLCBmbiApXG5cdFx0Zm4gPSBzZWxlY3Rvcjtcblx0XHRkYXRhID0gc2VsZWN0b3IgPSB1bmRlZmluZWQ7XG5cdH0gZWxzZSBpZiAoIGZuID09IG51bGwgKSB7XG5cdFx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgKSB7XG5cblx0XHRcdC8vICggdHlwZXMsIHNlbGVjdG9yLCBmbiApXG5cdFx0XHRmbiA9IGRhdGE7XG5cdFx0XHRkYXRhID0gdW5kZWZpbmVkO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vICggdHlwZXMsIGRhdGEsIGZuIClcblx0XHRcdGZuID0gZGF0YTtcblx0XHRcdGRhdGEgPSBzZWxlY3Rvcjtcblx0XHRcdHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0fVxuXHRpZiAoIGZuID09PSBmYWxzZSApIHtcblx0XHRmbiA9IHJldHVybkZhbHNlO1xuXHR9IGVsc2UgaWYgKCAhZm4gKSB7XG5cdFx0cmV0dXJuIGVsZW07XG5cdH1cblxuXHRpZiAoIG9uZSA9PT0gMSApIHtcblx0XHRvcmlnRm4gPSBmbjtcblx0XHRmbiA9IGZ1bmN0aW9uKCBldmVudCApIHtcblxuXHRcdFx0Ly8gQ2FuIHVzZSBhbiBlbXB0eSBzZXQsIHNpbmNlIGV2ZW50IGNvbnRhaW5zIHRoZSBpbmZvXG5cdFx0XHRqUXVlcnkoKS5vZmYoIGV2ZW50ICk7XG5cdFx0XHRyZXR1cm4gb3JpZ0ZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHR9O1xuXG5cdFx0Ly8gVXNlIHNhbWUgZ3VpZCBzbyBjYWxsZXIgY2FuIHJlbW92ZSB1c2luZyBvcmlnRm5cblx0XHRmbi5ndWlkID0gb3JpZ0ZuLmd1aWQgfHwgKCBvcmlnRm4uZ3VpZCA9IGpRdWVyeS5ndWlkKysgKTtcblx0fVxuXHRyZXR1cm4gZWxlbS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRqUXVlcnkuZXZlbnQuYWRkKCB0aGlzLCB0eXBlcywgZm4sIGRhdGEsIHNlbGVjdG9yICk7XG5cdH0gKTtcbn1cblxuLypcbiAqIEhlbHBlciBmdW5jdGlvbnMgZm9yIG1hbmFnaW5nIGV2ZW50cyAtLSBub3QgcGFydCBvZiB0aGUgcHVibGljIGludGVyZmFjZS5cbiAqIFByb3BzIHRvIERlYW4gRWR3YXJkcycgYWRkRXZlbnQgbGlicmFyeSBmb3IgbWFueSBvZiB0aGUgaWRlYXMuXG4gKi9cbmpRdWVyeS5ldmVudCA9IHtcblxuXHRnbG9iYWw6IHt9LFxuXG5cdGFkZDogZnVuY3Rpb24oIGVsZW0sIHR5cGVzLCBoYW5kbGVyLCBkYXRhLCBzZWxlY3RvciApIHtcblxuXHRcdHZhciBoYW5kbGVPYmpJbiwgZXZlbnRIYW5kbGUsIHRtcCxcblx0XHRcdGV2ZW50cywgdCwgaGFuZGxlT2JqLFxuXHRcdFx0c3BlY2lhbCwgaGFuZGxlcnMsIHR5cGUsIG5hbWVzcGFjZXMsIG9yaWdUeXBlLFxuXHRcdFx0ZWxlbURhdGEgPSBkYXRhUHJpdi5nZXQoIGVsZW0gKTtcblxuXHRcdC8vIE9ubHkgYXR0YWNoIGV2ZW50cyB0byBvYmplY3RzIHRoYXQgYWNjZXB0IGRhdGFcblx0XHRpZiAoICFhY2NlcHREYXRhKCBlbGVtICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsbGVyIGNhbiBwYXNzIGluIGFuIG9iamVjdCBvZiBjdXN0b20gZGF0YSBpbiBsaWV1IG9mIHRoZSBoYW5kbGVyXG5cdFx0aWYgKCBoYW5kbGVyLmhhbmRsZXIgKSB7XG5cdFx0XHRoYW5kbGVPYmpJbiA9IGhhbmRsZXI7XG5cdFx0XHRoYW5kbGVyID0gaGFuZGxlT2JqSW4uaGFuZGxlcjtcblx0XHRcdHNlbGVjdG9yID0gaGFuZGxlT2JqSW4uc2VsZWN0b3I7XG5cdFx0fVxuXG5cdFx0Ly8gRW5zdXJlIHRoYXQgaW52YWxpZCBzZWxlY3RvcnMgdGhyb3cgZXhjZXB0aW9ucyBhdCBhdHRhY2ggdGltZVxuXHRcdC8vIEV2YWx1YXRlIGFnYWluc3QgZG9jdW1lbnRFbGVtZW50IGluIGNhc2UgZWxlbSBpcyBhIG5vbi1lbGVtZW50IG5vZGUgKGUuZy4sIGRvY3VtZW50KVxuXHRcdGlmICggc2VsZWN0b3IgKSB7XG5cdFx0XHRqUXVlcnkuZmluZC5tYXRjaGVzU2VsZWN0b3IoIGRvY3VtZW50RWxlbWVudCwgc2VsZWN0b3IgKTtcblx0XHR9XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhhdCB0aGUgaGFuZGxlciBoYXMgYSB1bmlxdWUgSUQsIHVzZWQgdG8gZmluZC9yZW1vdmUgaXQgbGF0ZXJcblx0XHRpZiAoICFoYW5kbGVyLmd1aWQgKSB7XG5cdFx0XHRoYW5kbGVyLmd1aWQgPSBqUXVlcnkuZ3VpZCsrO1xuXHRcdH1cblxuXHRcdC8vIEluaXQgdGhlIGVsZW1lbnQncyBldmVudCBzdHJ1Y3R1cmUgYW5kIG1haW4gaGFuZGxlciwgaWYgdGhpcyBpcyB0aGUgZmlyc3Rcblx0XHRpZiAoICEoIGV2ZW50cyA9IGVsZW1EYXRhLmV2ZW50cyApICkge1xuXHRcdFx0ZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzID0gT2JqZWN0LmNyZWF0ZSggbnVsbCApO1xuXHRcdH1cblx0XHRpZiAoICEoIGV2ZW50SGFuZGxlID0gZWxlbURhdGEuaGFuZGxlICkgKSB7XG5cdFx0XHRldmVudEhhbmRsZSA9IGVsZW1EYXRhLmhhbmRsZSA9IGZ1bmN0aW9uKCBlICkge1xuXG5cdFx0XHRcdC8vIERpc2NhcmQgdGhlIHNlY29uZCBldmVudCBvZiBhIGpRdWVyeS5ldmVudC50cmlnZ2VyKCkgYW5kXG5cdFx0XHRcdC8vIHdoZW4gYW4gZXZlbnQgaXMgY2FsbGVkIGFmdGVyIGEgcGFnZSBoYXMgdW5sb2FkZWRcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiBqUXVlcnkgIT09IFwidW5kZWZpbmVkXCIgJiYgalF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCAhPT0gZS50eXBlID9cblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQuZGlzcGF0Y2guYXBwbHkoIGVsZW0sIGFyZ3VtZW50cyApIDogdW5kZWZpbmVkO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyBIYW5kbGUgbXVsdGlwbGUgZXZlbnRzIHNlcGFyYXRlZCBieSBhIHNwYWNlXG5cdFx0dHlwZXMgPSAoIHR5cGVzIHx8IFwiXCIgKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFsgXCJcIiBdO1xuXHRcdHQgPSB0eXBlcy5sZW5ndGg7XG5cdFx0d2hpbGUgKCB0LS0gKSB7XG5cdFx0XHR0bXAgPSBydHlwZW5hbWVzcGFjZS5leGVjKCB0eXBlc1sgdCBdICkgfHwgW107XG5cdFx0XHR0eXBlID0gb3JpZ1R5cGUgPSB0bXBbIDEgXTtcblx0XHRcdG5hbWVzcGFjZXMgPSAoIHRtcFsgMiBdIHx8IFwiXCIgKS5zcGxpdCggXCIuXCIgKS5zb3J0KCk7XG5cblx0XHRcdC8vIFRoZXJlICptdXN0KiBiZSBhIHR5cGUsIG5vIGF0dGFjaGluZyBuYW1lc3BhY2Utb25seSBoYW5kbGVyc1xuXHRcdFx0aWYgKCAhdHlwZSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIGV2ZW50IGNoYW5nZXMgaXRzIHR5cGUsIHVzZSB0aGUgc3BlY2lhbCBldmVudCBoYW5kbGVycyBmb3IgdGhlIGNoYW5nZWQgdHlwZVxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XG5cblx0XHRcdC8vIElmIHNlbGVjdG9yIGRlZmluZWQsIGRldGVybWluZSBzcGVjaWFsIGV2ZW50IGFwaSB0eXBlLCBvdGhlcndpc2UgZ2l2ZW4gdHlwZVxuXHRcdFx0dHlwZSA9ICggc2VsZWN0b3IgPyBzcGVjaWFsLmRlbGVnYXRlVHlwZSA6IHNwZWNpYWwuYmluZFR5cGUgKSB8fCB0eXBlO1xuXG5cdFx0XHQvLyBVcGRhdGUgc3BlY2lhbCBiYXNlZCBvbiBuZXdseSByZXNldCB0eXBlXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblxuXHRcdFx0Ly8gaGFuZGxlT2JqIGlzIHBhc3NlZCB0byBhbGwgZXZlbnQgaGFuZGxlcnNcblx0XHRcdGhhbmRsZU9iaiA9IGpRdWVyeS5leHRlbmQoIHtcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0b3JpZ1R5cGU6IG9yaWdUeXBlLFxuXHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHRoYW5kbGVyOiBoYW5kbGVyLFxuXHRcdFx0XHRndWlkOiBoYW5kbGVyLmd1aWQsXG5cdFx0XHRcdHNlbGVjdG9yOiBzZWxlY3Rvcixcblx0XHRcdFx0bmVlZHNDb250ZXh0OiBzZWxlY3RvciAmJiBqUXVlcnkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3IgKSxcblx0XHRcdFx0bmFtZXNwYWNlOiBuYW1lc3BhY2VzLmpvaW4oIFwiLlwiIClcblx0XHRcdH0sIGhhbmRsZU9iakluICk7XG5cblx0XHRcdC8vIEluaXQgdGhlIGV2ZW50IGhhbmRsZXIgcXVldWUgaWYgd2UncmUgdGhlIGZpcnN0XG5cdFx0XHRpZiAoICEoIGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0gKSApIHtcblx0XHRcdFx0aGFuZGxlcnMgPSBldmVudHNbIHR5cGUgXSA9IFtdO1xuXHRcdFx0XHRoYW5kbGVycy5kZWxlZ2F0ZUNvdW50ID0gMDtcblxuXHRcdFx0XHQvLyBPbmx5IHVzZSBhZGRFdmVudExpc3RlbmVyIGlmIHRoZSBzcGVjaWFsIGV2ZW50cyBoYW5kbGVyIHJldHVybnMgZmFsc2Vcblx0XHRcdFx0aWYgKCAhc3BlY2lhbC5zZXR1cCB8fFxuXHRcdFx0XHRcdHNwZWNpYWwuc2V0dXAuY2FsbCggZWxlbSwgZGF0YSwgbmFtZXNwYWNlcywgZXZlbnRIYW5kbGUgKSA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0XHRpZiAoIGVsZW0uYWRkRXZlbnRMaXN0ZW5lciApIHtcblx0XHRcdFx0XHRcdGVsZW0uYWRkRXZlbnRMaXN0ZW5lciggdHlwZSwgZXZlbnRIYW5kbGUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzcGVjaWFsLmFkZCApIHtcblx0XHRcdFx0c3BlY2lhbC5hZGQuY2FsbCggZWxlbSwgaGFuZGxlT2JqICk7XG5cblx0XHRcdFx0aWYgKCAhaGFuZGxlT2JqLmhhbmRsZXIuZ3VpZCApIHtcblx0XHRcdFx0XHRoYW5kbGVPYmouaGFuZGxlci5ndWlkID0gaGFuZGxlci5ndWlkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCB0byB0aGUgZWxlbWVudCdzIGhhbmRsZXIgbGlzdCwgZGVsZWdhdGVzIGluIGZyb250XG5cdFx0XHRpZiAoIHNlbGVjdG9yICkge1xuXHRcdFx0XHRoYW5kbGVycy5zcGxpY2UoIGhhbmRsZXJzLmRlbGVnYXRlQ291bnQrKywgMCwgaGFuZGxlT2JqICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoYW5kbGVycy5wdXNoKCBoYW5kbGVPYmogKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gS2VlcCB0cmFjayBvZiB3aGljaCBldmVudHMgaGF2ZSBldmVyIGJlZW4gdXNlZCwgZm9yIGV2ZW50IG9wdGltaXphdGlvblxuXHRcdFx0alF1ZXJ5LmV2ZW50Lmdsb2JhbFsgdHlwZSBdID0gdHJ1ZTtcblx0XHR9XG5cblx0fSxcblxuXHQvLyBEZXRhY2ggYW4gZXZlbnQgb3Igc2V0IG9mIGV2ZW50cyBmcm9tIGFuIGVsZW1lbnRcblx0cmVtb3ZlOiBmdW5jdGlvbiggZWxlbSwgdHlwZXMsIGhhbmRsZXIsIHNlbGVjdG9yLCBtYXBwZWRUeXBlcyApIHtcblxuXHRcdHZhciBqLCBvcmlnQ291bnQsIHRtcCxcblx0XHRcdGV2ZW50cywgdCwgaGFuZGxlT2JqLFxuXHRcdFx0c3BlY2lhbCwgaGFuZGxlcnMsIHR5cGUsIG5hbWVzcGFjZXMsIG9yaWdUeXBlLFxuXHRcdFx0ZWxlbURhdGEgPSBkYXRhUHJpdi5oYXNEYXRhKCBlbGVtICkgJiYgZGF0YVByaXYuZ2V0KCBlbGVtICk7XG5cblx0XHRpZiAoICFlbGVtRGF0YSB8fCAhKCBldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBPbmNlIGZvciBlYWNoIHR5cGUubmFtZXNwYWNlIGluIHR5cGVzOyB0eXBlIG1heSBiZSBvbWl0dGVkXG5cdFx0dHlwZXMgPSAoIHR5cGVzIHx8IFwiXCIgKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFsgXCJcIiBdO1xuXHRcdHQgPSB0eXBlcy5sZW5ndGg7XG5cdFx0d2hpbGUgKCB0LS0gKSB7XG5cdFx0XHR0bXAgPSBydHlwZW5hbWVzcGFjZS5leGVjKCB0eXBlc1sgdCBdICkgfHwgW107XG5cdFx0XHR0eXBlID0gb3JpZ1R5cGUgPSB0bXBbIDEgXTtcblx0XHRcdG5hbWVzcGFjZXMgPSAoIHRtcFsgMiBdIHx8IFwiXCIgKS5zcGxpdCggXCIuXCIgKS5zb3J0KCk7XG5cblx0XHRcdC8vIFVuYmluZCBhbGwgZXZlbnRzIChvbiB0aGlzIG5hbWVzcGFjZSwgaWYgcHJvdmlkZWQpIGZvciB0aGUgZWxlbWVudFxuXHRcdFx0aWYgKCAhdHlwZSApIHtcblx0XHRcdFx0Zm9yICggdHlwZSBpbiBldmVudHMgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnJlbW92ZSggZWxlbSwgdHlwZSArIHR5cGVzWyB0IF0sIGhhbmRsZXIsIHNlbGVjdG9yLCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9O1xuXHRcdFx0dHlwZSA9ICggc2VsZWN0b3IgPyBzcGVjaWFsLmRlbGVnYXRlVHlwZSA6IHNwZWNpYWwuYmluZFR5cGUgKSB8fCB0eXBlO1xuXHRcdFx0aGFuZGxlcnMgPSBldmVudHNbIHR5cGUgXSB8fCBbXTtcblx0XHRcdHRtcCA9IHRtcFsgMiBdICYmXG5cdFx0XHRcdG5ldyBSZWdFeHAoIFwiKF58XFxcXC4pXCIgKyBuYW1lc3BhY2VzLmpvaW4oIFwiXFxcXC4oPzouKlxcXFwufClcIiApICsgXCIoXFxcXC58JClcIiApO1xuXG5cdFx0XHQvLyBSZW1vdmUgbWF0Y2hpbmcgZXZlbnRzXG5cdFx0XHRvcmlnQ291bnQgPSBqID0gaGFuZGxlcnMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKCBqLS0gKSB7XG5cdFx0XHRcdGhhbmRsZU9iaiA9IGhhbmRsZXJzWyBqIF07XG5cblx0XHRcdFx0aWYgKCAoIG1hcHBlZFR5cGVzIHx8IG9yaWdUeXBlID09PSBoYW5kbGVPYmoub3JpZ1R5cGUgKSAmJlxuXHRcdFx0XHRcdCggIWhhbmRsZXIgfHwgaGFuZGxlci5ndWlkID09PSBoYW5kbGVPYmouZ3VpZCApICYmXG5cdFx0XHRcdFx0KCAhdG1wIHx8IHRtcC50ZXN0KCBoYW5kbGVPYmoubmFtZXNwYWNlICkgKSAmJlxuXHRcdFx0XHRcdCggIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSBoYW5kbGVPYmouc2VsZWN0b3IgfHxcblx0XHRcdFx0XHRcdHNlbGVjdG9yID09PSBcIioqXCIgJiYgaGFuZGxlT2JqLnNlbGVjdG9yICkgKSB7XG5cdFx0XHRcdFx0aGFuZGxlcnMuc3BsaWNlKCBqLCAxICk7XG5cblx0XHRcdFx0XHRpZiAoIGhhbmRsZU9iai5zZWxlY3RvciApIHtcblx0XHRcdFx0XHRcdGhhbmRsZXJzLmRlbGVnYXRlQ291bnQtLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBzcGVjaWFsLnJlbW92ZSApIHtcblx0XHRcdFx0XHRcdHNwZWNpYWwucmVtb3ZlLmNhbGwoIGVsZW0sIGhhbmRsZU9iaiApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZW1vdmUgZ2VuZXJpYyBldmVudCBoYW5kbGVyIGlmIHdlIHJlbW92ZWQgc29tZXRoaW5nIGFuZCBubyBtb3JlIGhhbmRsZXJzIGV4aXN0XG5cdFx0XHQvLyAoYXZvaWRzIHBvdGVudGlhbCBmb3IgZW5kbGVzcyByZWN1cnNpb24gZHVyaW5nIHJlbW92YWwgb2Ygc3BlY2lhbCBldmVudCBoYW5kbGVycylcblx0XHRcdGlmICggb3JpZ0NvdW50ICYmICFoYW5kbGVycy5sZW5ndGggKSB7XG5cdFx0XHRcdGlmICggIXNwZWNpYWwudGVhcmRvd24gfHxcblx0XHRcdFx0XHRzcGVjaWFsLnRlYXJkb3duLmNhbGwoIGVsZW0sIG5hbWVzcGFjZXMsIGVsZW1EYXRhLmhhbmRsZSApID09PSBmYWxzZSApIHtcblxuXHRcdFx0XHRcdGpRdWVyeS5yZW1vdmVFdmVudCggZWxlbSwgdHlwZSwgZWxlbURhdGEuaGFuZGxlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkZWxldGUgZXZlbnRzWyB0eXBlIF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIGRhdGEgYW5kIHRoZSBleHBhbmRvIGlmIGl0J3Mgbm8gbG9uZ2VyIHVzZWRcblx0XHRpZiAoIGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBldmVudHMgKSApIHtcblx0XHRcdGRhdGFQcml2LnJlbW92ZSggZWxlbSwgXCJoYW5kbGUgZXZlbnRzXCIgKTtcblx0XHR9XG5cdH0sXG5cblx0ZGlzcGF0Y2g6IGZ1bmN0aW9uKCBuYXRpdmVFdmVudCApIHtcblxuXHRcdHZhciBpLCBqLCByZXQsIG1hdGNoZWQsIGhhbmRsZU9iaiwgaGFuZGxlclF1ZXVlLFxuXHRcdFx0YXJncyA9IG5ldyBBcnJheSggYXJndW1lbnRzLmxlbmd0aCApLFxuXG5cdFx0XHQvLyBNYWtlIGEgd3JpdGFibGUgalF1ZXJ5LkV2ZW50IGZyb20gdGhlIG5hdGl2ZSBldmVudCBvYmplY3Rcblx0XHRcdGV2ZW50ID0galF1ZXJ5LmV2ZW50LmZpeCggbmF0aXZlRXZlbnQgKSxcblxuXHRcdFx0aGFuZGxlcnMgPSAoXG5cdFx0XHRcdGRhdGFQcml2LmdldCggdGhpcywgXCJldmVudHNcIiApIHx8IE9iamVjdC5jcmVhdGUoIG51bGwgKVxuXHRcdFx0KVsgZXZlbnQudHlwZSBdIHx8IFtdLFxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyBldmVudC50eXBlIF0gfHwge307XG5cblx0XHQvLyBVc2UgdGhlIGZpeC1lZCBqUXVlcnkuRXZlbnQgcmF0aGVyIHRoYW4gdGhlIChyZWFkLW9ubHkpIG5hdGl2ZSBldmVudFxuXHRcdGFyZ3NbIDAgXSA9IGV2ZW50O1xuXG5cdFx0Zm9yICggaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRhcmdzWyBpIF0gPSBhcmd1bWVudHNbIGkgXTtcblx0XHR9XG5cblx0XHRldmVudC5kZWxlZ2F0ZVRhcmdldCA9IHRoaXM7XG5cblx0XHQvLyBDYWxsIHRoZSBwcmVEaXNwYXRjaCBob29rIGZvciB0aGUgbWFwcGVkIHR5cGUsIGFuZCBsZXQgaXQgYmFpbCBpZiBkZXNpcmVkXG5cdFx0aWYgKCBzcGVjaWFsLnByZURpc3BhdGNoICYmIHNwZWNpYWwucHJlRGlzcGF0Y2guY2FsbCggdGhpcywgZXZlbnQgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZXJtaW5lIGhhbmRsZXJzXG5cdFx0aGFuZGxlclF1ZXVlID0galF1ZXJ5LmV2ZW50LmhhbmRsZXJzLmNhbGwoIHRoaXMsIGV2ZW50LCBoYW5kbGVycyApO1xuXG5cdFx0Ly8gUnVuIGRlbGVnYXRlcyBmaXJzdDsgdGhleSBtYXkgd2FudCB0byBzdG9wIHByb3BhZ2F0aW9uIGJlbmVhdGggdXNcblx0XHRpID0gMDtcblx0XHR3aGlsZSAoICggbWF0Y2hlZCA9IGhhbmRsZXJRdWV1ZVsgaSsrIF0gKSAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblx0XHRcdGV2ZW50LmN1cnJlbnRUYXJnZXQgPSBtYXRjaGVkLmVsZW07XG5cblx0XHRcdGogPSAwO1xuXHRcdFx0d2hpbGUgKCAoIGhhbmRsZU9iaiA9IG1hdGNoZWQuaGFuZGxlcnNbIGorKyBdICkgJiZcblx0XHRcdFx0IWV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGV2ZW50IGlzIG5hbWVzcGFjZWQsIHRoZW4gZWFjaCBoYW5kbGVyIGlzIG9ubHkgaW52b2tlZCBpZiBpdCBpc1xuXHRcdFx0XHQvLyBzcGVjaWFsbHkgdW5pdmVyc2FsIG9yIGl0cyBuYW1lc3BhY2VzIGFyZSBhIHN1cGVyc2V0IG9mIHRoZSBldmVudCdzLlxuXHRcdFx0XHRpZiAoICFldmVudC5ybmFtZXNwYWNlIHx8IGhhbmRsZU9iai5uYW1lc3BhY2UgPT09IGZhbHNlIHx8XG5cdFx0XHRcdFx0ZXZlbnQucm5hbWVzcGFjZS50ZXN0KCBoYW5kbGVPYmoubmFtZXNwYWNlICkgKSB7XG5cblx0XHRcdFx0XHRldmVudC5oYW5kbGVPYmogPSBoYW5kbGVPYmo7XG5cdFx0XHRcdFx0ZXZlbnQuZGF0YSA9IGhhbmRsZU9iai5kYXRhO1xuXG5cdFx0XHRcdFx0cmV0ID0gKCAoIGpRdWVyeS5ldmVudC5zcGVjaWFsWyBoYW5kbGVPYmoub3JpZ1R5cGUgXSB8fCB7fSApLmhhbmRsZSB8fFxuXHRcdFx0XHRcdFx0aGFuZGxlT2JqLmhhbmRsZXIgKS5hcHBseSggbWF0Y2hlZC5lbGVtLCBhcmdzICk7XG5cblx0XHRcdFx0XHRpZiAoIHJldCAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoIGV2ZW50LnJlc3VsdCA9IHJldCApID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsbCB0aGUgcG9zdERpc3BhdGNoIGhvb2sgZm9yIHRoZSBtYXBwZWQgdHlwZVxuXHRcdGlmICggc3BlY2lhbC5wb3N0RGlzcGF0Y2ggKSB7XG5cdFx0XHRzcGVjaWFsLnBvc3REaXNwYXRjaC5jYWxsKCB0aGlzLCBldmVudCApO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmVudC5yZXN1bHQ7XG5cdH0sXG5cblx0aGFuZGxlcnM6IGZ1bmN0aW9uKCBldmVudCwgaGFuZGxlcnMgKSB7XG5cdFx0dmFyIGksIGhhbmRsZU9iaiwgc2VsLCBtYXRjaGVkSGFuZGxlcnMsIG1hdGNoZWRTZWxlY3RvcnMsXG5cdFx0XHRoYW5kbGVyUXVldWUgPSBbXSxcblx0XHRcdGRlbGVnYXRlQ291bnQgPSBoYW5kbGVycy5kZWxlZ2F0ZUNvdW50LFxuXHRcdFx0Y3VyID0gZXZlbnQudGFyZ2V0O1xuXG5cdFx0Ly8gRmluZCBkZWxlZ2F0ZSBoYW5kbGVyc1xuXHRcdGlmICggZGVsZWdhdGVDb3VudCAmJlxuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTlcblx0XHRcdC8vIEJsYWNrLWhvbGUgU1ZHIDx1c2U+IGluc3RhbmNlIHRyZWVzICh0cmFjLTEzMTgwKVxuXHRcdFx0Y3VyLm5vZGVUeXBlICYmXG5cblx0XHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD00MlxuXHRcdFx0Ly8gU3VwcHJlc3Mgc3BlYy12aW9sYXRpbmcgY2xpY2tzIGluZGljYXRpbmcgYSBub24tcHJpbWFyeSBwb2ludGVyIGJ1dHRvbiAodHJhYy0zODYxKVxuXHRcdFx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUV2ZW50cy8jZXZlbnQtdHlwZS1jbGlja1xuXHRcdFx0Ly8gU3VwcG9ydDogSUUgMTEgb25seVxuXHRcdFx0Ly8gLi4uYnV0IG5vdCBhcnJvdyBrZXkgXCJjbGlja3NcIiBvZiByYWRpbyBpbnB1dHMsIHdoaWNoIGNhbiBoYXZlIGBidXR0b25gIC0xIChnaC0yMzQzKVxuXHRcdFx0ISggZXZlbnQudHlwZSA9PT0gXCJjbGlja1wiICYmIGV2ZW50LmJ1dHRvbiA+PSAxICkgKSB7XG5cblx0XHRcdGZvciAoIDsgY3VyICE9PSB0aGlzOyBjdXIgPSBjdXIucGFyZW50Tm9kZSB8fCB0aGlzICkge1xuXG5cdFx0XHRcdC8vIERvbid0IGNoZWNrIG5vbi1lbGVtZW50cyAodHJhYy0xMzIwOClcblx0XHRcdFx0Ly8gRG9uJ3QgcHJvY2VzcyBjbGlja3Mgb24gZGlzYWJsZWQgZWxlbWVudHMgKHRyYWMtNjkxMSwgdHJhYy04MTY1LCB0cmFjLTExMzgyLCB0cmFjLTExNzY0KVxuXHRcdFx0XHRpZiAoIGN1ci5ub2RlVHlwZSA9PT0gMSAmJiAhKCBldmVudC50eXBlID09PSBcImNsaWNrXCIgJiYgY3VyLmRpc2FibGVkID09PSB0cnVlICkgKSB7XG5cdFx0XHRcdFx0bWF0Y2hlZEhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0bWF0Y2hlZFNlbGVjdG9ycyA9IHt9O1xuXHRcdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgZGVsZWdhdGVDb3VudDsgaSsrICkge1xuXHRcdFx0XHRcdFx0aGFuZGxlT2JqID0gaGFuZGxlcnNbIGkgXTtcblxuXHRcdFx0XHRcdFx0Ly8gRG9uJ3QgY29uZmxpY3Qgd2l0aCBPYmplY3QucHJvdG90eXBlIHByb3BlcnRpZXMgKHRyYWMtMTMyMDMpXG5cdFx0XHRcdFx0XHRzZWwgPSBoYW5kbGVPYmouc2VsZWN0b3IgKyBcIiBcIjtcblxuXHRcdFx0XHRcdFx0aWYgKCBtYXRjaGVkU2VsZWN0b3JzWyBzZWwgXSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0XHRtYXRjaGVkU2VsZWN0b3JzWyBzZWwgXSA9IGhhbmRsZU9iai5uZWVkc0NvbnRleHQgP1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggc2VsLCB0aGlzICkuaW5kZXgoIGN1ciApID4gLTEgOlxuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5maW5kKCBzZWwsIHRoaXMsIG51bGwsIFsgY3VyIF0gKS5sZW5ndGg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZWRTZWxlY3RvcnNbIHNlbCBdICkge1xuXHRcdFx0XHRcdFx0XHRtYXRjaGVkSGFuZGxlcnMucHVzaCggaGFuZGxlT2JqICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggbWF0Y2hlZEhhbmRsZXJzLmxlbmd0aCApIHtcblx0XHRcdFx0XHRcdGhhbmRsZXJRdWV1ZS5wdXNoKCB7IGVsZW06IGN1ciwgaGFuZGxlcnM6IG1hdGNoZWRIYW5kbGVycyB9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQWRkIHRoZSByZW1haW5pbmcgKGRpcmVjdGx5LWJvdW5kKSBoYW5kbGVyc1xuXHRcdGN1ciA9IHRoaXM7XG5cdFx0aWYgKCBkZWxlZ2F0ZUNvdW50IDwgaGFuZGxlcnMubGVuZ3RoICkge1xuXHRcdFx0aGFuZGxlclF1ZXVlLnB1c2goIHsgZWxlbTogY3VyLCBoYW5kbGVyczogaGFuZGxlcnMuc2xpY2UoIGRlbGVnYXRlQ291bnQgKSB9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGhhbmRsZXJRdWV1ZTtcblx0fSxcblxuXHRhZGRQcm9wOiBmdW5jdGlvbiggbmFtZSwgaG9vayApIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIGpRdWVyeS5FdmVudC5wcm90b3R5cGUsIG5hbWUsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cblx0XHRcdGdldDogaXNGdW5jdGlvbiggaG9vayApID9cblx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLm9yaWdpbmFsRXZlbnQgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaG9vayggdGhpcy5vcmlnaW5hbEV2ZW50ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IDpcblx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLm9yaWdpbmFsRXZlbnQgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50WyBuYW1lIF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0aGlzLCBuYW1lLCB7XG5cdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdFx0d3JpdGFibGU6IHRydWUsXG5cdFx0XHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0Zml4OiBmdW5jdGlvbiggb3JpZ2luYWxFdmVudCApIHtcblx0XHRyZXR1cm4gb3JpZ2luYWxFdmVudFsgalF1ZXJ5LmV4cGFuZG8gXSA/XG5cdFx0XHRvcmlnaW5hbEV2ZW50IDpcblx0XHRcdG5ldyBqUXVlcnkuRXZlbnQoIG9yaWdpbmFsRXZlbnQgKTtcblx0fSxcblxuXHRzcGVjaWFsOiB7XG5cdFx0bG9hZDoge1xuXG5cdFx0XHQvLyBQcmV2ZW50IHRyaWdnZXJlZCBpbWFnZS5sb2FkIGV2ZW50cyBmcm9tIGJ1YmJsaW5nIHRvIHdpbmRvdy5sb2FkXG5cdFx0XHRub0J1YmJsZTogdHJ1ZVxuXHRcdH0sXG5cdFx0Y2xpY2s6IHtcblxuXHRcdFx0Ly8gVXRpbGl6ZSBuYXRpdmUgZXZlbnQgdG8gZW5zdXJlIGNvcnJlY3Qgc3RhdGUgZm9yIGNoZWNrYWJsZSBpbnB1dHNcblx0XHRcdHNldHVwOiBmdW5jdGlvbiggZGF0YSApIHtcblxuXHRcdFx0XHQvLyBGb3IgbXV0dWFsIGNvbXByZXNzaWJpbGl0eSB3aXRoIF9kZWZhdWx0LCByZXBsYWNlIGB0aGlzYCBhY2Nlc3Mgd2l0aCBhIGxvY2FsIHZhci5cblx0XHRcdFx0Ly8gYHx8IGRhdGFgIGlzIGRlYWQgY29kZSBtZWFudCBvbmx5IHRvIHByZXNlcnZlIHRoZSB2YXJpYWJsZSB0aHJvdWdoIG1pbmlmaWNhdGlvbi5cblx0XHRcdFx0dmFyIGVsID0gdGhpcyB8fCBkYXRhO1xuXG5cdFx0XHRcdC8vIENsYWltIHRoZSBmaXJzdCBoYW5kbGVyXG5cdFx0XHRcdGlmICggcmNoZWNrYWJsZVR5cGUudGVzdCggZWwudHlwZSApICYmXG5cdFx0XHRcdFx0ZWwuY2xpY2sgJiYgbm9kZU5hbWUoIGVsLCBcImlucHV0XCIgKSApIHtcblxuXHRcdFx0XHRcdC8vIGRhdGFQcml2LnNldCggZWwsIFwiY2xpY2tcIiwgLi4uIClcblx0XHRcdFx0XHRsZXZlcmFnZU5hdGl2ZSggZWwsIFwiY2xpY2tcIiwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmV0dXJuIGZhbHNlIHRvIGFsbG93IG5vcm1hbCBwcm9jZXNzaW5nIGluIHRoZSBjYWxsZXJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSxcblx0XHRcdHRyaWdnZXI6IGZ1bmN0aW9uKCBkYXRhICkge1xuXG5cdFx0XHRcdC8vIEZvciBtdXR1YWwgY29tcHJlc3NpYmlsaXR5IHdpdGggX2RlZmF1bHQsIHJlcGxhY2UgYHRoaXNgIGFjY2VzcyB3aXRoIGEgbG9jYWwgdmFyLlxuXHRcdFx0XHQvLyBgfHwgZGF0YWAgaXMgZGVhZCBjb2RlIG1lYW50IG9ubHkgdG8gcHJlc2VydmUgdGhlIHZhcmlhYmxlIHRocm91Z2ggbWluaWZpY2F0aW9uLlxuXHRcdFx0XHR2YXIgZWwgPSB0aGlzIHx8IGRhdGE7XG5cblx0XHRcdFx0Ly8gRm9yY2Ugc2V0dXAgYmVmb3JlIHRyaWdnZXJpbmcgYSBjbGlja1xuXHRcdFx0XHRpZiAoIHJjaGVja2FibGVUeXBlLnRlc3QoIGVsLnR5cGUgKSAmJlxuXHRcdFx0XHRcdGVsLmNsaWNrICYmIG5vZGVOYW1lKCBlbCwgXCJpbnB1dFwiICkgKSB7XG5cblx0XHRcdFx0XHRsZXZlcmFnZU5hdGl2ZSggZWwsIFwiY2xpY2tcIiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmV0dXJuIG5vbi1mYWxzZSB0byBhbGxvdyBub3JtYWwgZXZlbnQtcGF0aCBwcm9wYWdhdGlvblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0sXG5cblx0XHRcdC8vIEZvciBjcm9zcy1icm93c2VyIGNvbnNpc3RlbmN5LCBzdXBwcmVzcyBuYXRpdmUgLmNsaWNrKCkgb24gbGlua3Ncblx0XHRcdC8vIEFsc28gcHJldmVudCBpdCBpZiB3ZSdyZSBjdXJyZW50bHkgaW5zaWRlIGEgbGV2ZXJhZ2VkIG5hdGl2ZS1ldmVudCBzdGFja1xuXHRcdFx0X2RlZmF1bHQ6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0dmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0XHRcdFx0cmV0dXJuIHJjaGVja2FibGVUeXBlLnRlc3QoIHRhcmdldC50eXBlICkgJiZcblx0XHRcdFx0XHR0YXJnZXQuY2xpY2sgJiYgbm9kZU5hbWUoIHRhcmdldCwgXCJpbnB1dFwiICkgJiZcblx0XHRcdFx0XHRkYXRhUHJpdi5nZXQoIHRhcmdldCwgXCJjbGlja1wiICkgfHxcblx0XHRcdFx0XHRub2RlTmFtZSggdGFyZ2V0LCBcImFcIiApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRiZWZvcmV1bmxvYWQ6IHtcblx0XHRcdHBvc3REaXNwYXRjaDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggMjArXG5cdFx0XHRcdC8vIEZpcmVmb3ggZG9lc24ndCBhbGVydCBpZiB0aGUgcmV0dXJuVmFsdWUgZmllbGQgaXMgbm90IHNldC5cblx0XHRcdFx0aWYgKCBldmVudC5yZXN1bHQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5vcmlnaW5hbEV2ZW50ICkge1xuXHRcdFx0XHRcdGV2ZW50Lm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWUgPSBldmVudC5yZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbi8vIEVuc3VyZSB0aGUgcHJlc2VuY2Ugb2YgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCBoYW5kbGVzIG1hbnVhbGx5LXRyaWdnZXJlZFxuLy8gc3ludGhldGljIGV2ZW50cyBieSBpbnRlcnJ1cHRpbmcgcHJvZ3Jlc3MgdW50aWwgcmVpbnZva2VkIGluIHJlc3BvbnNlIHRvXG4vLyAqbmF0aXZlKiBldmVudHMgdGhhdCBpdCBmaXJlcyBkaXJlY3RseSwgZW5zdXJpbmcgdGhhdCBzdGF0ZSBjaGFuZ2VzIGhhdmVcbi8vIGFscmVhZHkgb2NjdXJyZWQgYmVmb3JlIG90aGVyIGxpc3RlbmVycyBhcmUgaW52b2tlZC5cbmZ1bmN0aW9uIGxldmVyYWdlTmF0aXZlKCBlbCwgdHlwZSwgaXNTZXR1cCApIHtcblxuXHQvLyBNaXNzaW5nIGBpc1NldHVwYCBpbmRpY2F0ZXMgYSB0cmlnZ2VyIGNhbGwsIHdoaWNoIG11c3QgZm9yY2Ugc2V0dXAgdGhyb3VnaCBqUXVlcnkuZXZlbnQuYWRkXG5cdGlmICggIWlzU2V0dXAgKSB7XG5cdFx0aWYgKCBkYXRhUHJpdi5nZXQoIGVsLCB0eXBlICkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGpRdWVyeS5ldmVudC5hZGQoIGVsLCB0eXBlLCByZXR1cm5UcnVlICk7XG5cdFx0fVxuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFJlZ2lzdGVyIHRoZSBjb250cm9sbGVyIGFzIGEgc3BlY2lhbCB1bml2ZXJzYWwgaGFuZGxlciBmb3IgYWxsIGV2ZW50IG5hbWVzcGFjZXNcblx0ZGF0YVByaXYuc2V0KCBlbCwgdHlwZSwgZmFsc2UgKTtcblx0alF1ZXJ5LmV2ZW50LmFkZCggZWwsIHR5cGUsIHtcblx0XHRuYW1lc3BhY2U6IGZhbHNlLFxuXHRcdGhhbmRsZXI6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdHZhciByZXN1bHQsXG5cdFx0XHRcdHNhdmVkID0gZGF0YVByaXYuZ2V0KCB0aGlzLCB0eXBlICk7XG5cblx0XHRcdGlmICggKCBldmVudC5pc1RyaWdnZXIgJiAxICkgJiYgdGhpc1sgdHlwZSBdICkge1xuXG5cdFx0XHRcdC8vIEludGVycnVwdCBwcm9jZXNzaW5nIG9mIHRoZSBvdXRlciBzeW50aGV0aWMgLnRyaWdnZXIoKWVkIGV2ZW50XG5cdFx0XHRcdGlmICggIXNhdmVkICkge1xuXG5cdFx0XHRcdFx0Ly8gU3RvcmUgYXJndW1lbnRzIGZvciB1c2Ugd2hlbiBoYW5kbGluZyB0aGUgaW5uZXIgbmF0aXZlIGV2ZW50XG5cdFx0XHRcdFx0Ly8gVGhlcmUgd2lsbCBhbHdheXMgYmUgYXQgbGVhc3Qgb25lIGFyZ3VtZW50IChhbiBldmVudCBvYmplY3QpLCBzbyB0aGlzIGFycmF5XG5cdFx0XHRcdFx0Ly8gd2lsbCBub3QgYmUgY29uZnVzZWQgd2l0aCBhIGxlZnRvdmVyIGNhcHR1cmUgb2JqZWN0LlxuXHRcdFx0XHRcdHNhdmVkID0gc2xpY2UuY2FsbCggYXJndW1lbnRzICk7XG5cdFx0XHRcdFx0ZGF0YVByaXYuc2V0KCB0aGlzLCB0eXBlLCBzYXZlZCApO1xuXG5cdFx0XHRcdFx0Ly8gVHJpZ2dlciB0aGUgbmF0aXZlIGV2ZW50IGFuZCBjYXB0dXJlIGl0cyByZXN1bHRcblx0XHRcdFx0XHR0aGlzWyB0eXBlIF0oKTtcblx0XHRcdFx0XHRyZXN1bHQgPSBkYXRhUHJpdi5nZXQoIHRoaXMsIHR5cGUgKTtcblx0XHRcdFx0XHRkYXRhUHJpdi5zZXQoIHRoaXMsIHR5cGUsIGZhbHNlICk7XG5cblx0XHRcdFx0XHRpZiAoIHNhdmVkICE9PSByZXN1bHQgKSB7XG5cblx0XHRcdFx0XHRcdC8vIENhbmNlbCB0aGUgb3V0ZXIgc3ludGhldGljIGV2ZW50XG5cdFx0XHRcdFx0XHRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoaXMgaXMgYW4gaW5uZXIgc3ludGhldGljIGV2ZW50IGZvciBhbiBldmVudCB3aXRoIGEgYnViYmxpbmcgc3Vycm9nYXRlXG5cdFx0XHRcdC8vIChmb2N1cyBvciBibHVyKSwgYXNzdW1lIHRoYXQgdGhlIHN1cnJvZ2F0ZSBhbHJlYWR5IHByb3BhZ2F0ZWQgZnJvbSB0cmlnZ2VyaW5nXG5cdFx0XHRcdC8vIHRoZSBuYXRpdmUgZXZlbnQgYW5kIHByZXZlbnQgdGhhdCBmcm9tIGhhcHBlbmluZyBhZ2FpbiBoZXJlLlxuXHRcdFx0XHQvLyBUaGlzIHRlY2huaWNhbGx5IGdldHMgdGhlIG9yZGVyaW5nIHdyb25nIHcuci50LiB0byBgLnRyaWdnZXIoKWAgKGluIHdoaWNoIHRoZVxuXHRcdFx0XHQvLyBidWJibGluZyBzdXJyb2dhdGUgcHJvcGFnYXRlcyAqYWZ0ZXIqIHRoZSBub24tYnViYmxpbmcgYmFzZSksIGJ1dCB0aGF0IHNlZW1zXG5cdFx0XHRcdC8vIGxlc3MgYmFkIHRoYW4gZHVwbGljYXRpb24uXG5cdFx0XHRcdH0gZWxzZSBpZiAoICggalF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fSApLmRlbGVnYXRlVHlwZSApIHtcblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGlzIGlzIGEgbmF0aXZlIGV2ZW50IHRyaWdnZXJlZCBhYm92ZSwgZXZlcnl0aGluZyBpcyBub3cgaW4gb3JkZXJcblx0XHRcdC8vIEZpcmUgYW4gaW5uZXIgc3ludGhldGljIGV2ZW50IHdpdGggdGhlIG9yaWdpbmFsIGFyZ3VtZW50c1xuXHRcdFx0fSBlbHNlIGlmICggc2F2ZWQgKSB7XG5cblx0XHRcdFx0Ly8gLi4uYW5kIGNhcHR1cmUgdGhlIHJlc3VsdFxuXHRcdFx0XHRkYXRhUHJpdi5zZXQoIHRoaXMsIHR5cGUsIGpRdWVyeS5ldmVudC50cmlnZ2VyKFxuXHRcdFx0XHRcdHNhdmVkWyAwIF0sXG5cdFx0XHRcdFx0c2F2ZWQuc2xpY2UoIDEgKSxcblx0XHRcdFx0XHR0aGlzXG5cdFx0XHRcdCkgKTtcblxuXHRcdFx0XHQvLyBBYm9ydCBoYW5kbGluZyBvZiB0aGUgbmF0aXZlIGV2ZW50IGJ5IGFsbCBqUXVlcnkgaGFuZGxlcnMgd2hpbGUgYWxsb3dpbmdcblx0XHRcdFx0Ly8gbmF0aXZlIGhhbmRsZXJzIG9uIHRoZSBzYW1lIGVsZW1lbnQgdG8gcnVuLiBPbiB0YXJnZXQsIHRoaXMgaXMgYWNoaWV2ZWRcblx0XHRcdFx0Ly8gYnkgc3RvcHBpbmcgaW1tZWRpYXRlIHByb3BhZ2F0aW9uIGp1c3Qgb24gdGhlIGpRdWVyeSBldmVudC4gSG93ZXZlcixcblx0XHRcdFx0Ly8gdGhlIG5hdGl2ZSBldmVudCBpcyByZS13cmFwcGVkIGJ5IGEgalF1ZXJ5IG9uZSBvbiBlYWNoIGxldmVsIG9mIHRoZVxuXHRcdFx0XHQvLyBwcm9wYWdhdGlvbiBzbyB0aGUgb25seSB3YXkgdG8gc3RvcCBpdCBmb3IgalF1ZXJ5IGlzIHRvIHN0b3AgaXQgZm9yXG5cdFx0XHRcdC8vIGV2ZXJ5b25lIHZpYSBuYXRpdmUgYHN0b3BQcm9wYWdhdGlvbigpYC4gVGhpcyBpcyBub3QgYSBwcm9ibGVtIGZvclxuXHRcdFx0XHQvLyBmb2N1cy9ibHVyIHdoaWNoIGRvbid0IGJ1YmJsZSwgYnV0IGl0IGRvZXMgYWxzbyBzdG9wIGNsaWNrIG9uIGNoZWNrYm94ZXNcblx0XHRcdFx0Ly8gYW5kIHJhZGlvcy4gV2UgYWNjZXB0IHRoaXMgbGltaXRhdGlvbi5cblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdGV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH0gKTtcbn1cblxualF1ZXJ5LnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24oIGVsZW0sIHR5cGUsIGhhbmRsZSApIHtcblxuXHQvLyBUaGlzIFwiaWZcIiBpcyBuZWVkZWQgZm9yIHBsYWluIG9iamVjdHNcblx0aWYgKCBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0ZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCB0eXBlLCBoYW5kbGUgKTtcblx0fVxufTtcblxualF1ZXJ5LkV2ZW50ID0gZnVuY3Rpb24oIHNyYywgcHJvcHMgKSB7XG5cblx0Ly8gQWxsb3cgaW5zdGFudGlhdGlvbiB3aXRob3V0IHRoZSAnbmV3JyBrZXl3b3JkXG5cdGlmICggISggdGhpcyBpbnN0YW5jZW9mIGpRdWVyeS5FdmVudCApICkge1xuXHRcdHJldHVybiBuZXcgalF1ZXJ5LkV2ZW50KCBzcmMsIHByb3BzICk7XG5cdH1cblxuXHQvLyBFdmVudCBvYmplY3Rcblx0aWYgKCBzcmMgJiYgc3JjLnR5cGUgKSB7XG5cdFx0dGhpcy5vcmlnaW5hbEV2ZW50ID0gc3JjO1xuXHRcdHRoaXMudHlwZSA9IHNyYy50eXBlO1xuXG5cdFx0Ly8gRXZlbnRzIGJ1YmJsaW5nIHVwIHRoZSBkb2N1bWVudCBtYXkgaGF2ZSBiZWVuIG1hcmtlZCBhcyBwcmV2ZW50ZWRcblx0XHQvLyBieSBhIGhhbmRsZXIgbG93ZXIgZG93biB0aGUgdHJlZTsgcmVmbGVjdCB0aGUgY29ycmVjdCB2YWx1ZS5cblx0XHR0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IHNyYy5kZWZhdWx0UHJldmVudGVkIHx8XG5cdFx0XHRcdHNyYy5kZWZhdWx0UHJldmVudGVkID09PSB1bmRlZmluZWQgJiZcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9Mi4zIG9ubHlcblx0XHRcdFx0c3JjLnJldHVyblZhbHVlID09PSBmYWxzZSA/XG5cdFx0XHRyZXR1cm5UcnVlIDpcblx0XHRcdHJldHVybkZhbHNlO1xuXG5cdFx0Ly8gQ3JlYXRlIHRhcmdldCBwcm9wZXJ0aWVzXG5cdFx0Ly8gU3VwcG9ydDogU2FmYXJpIDw9NiAtIDcgb25seVxuXHRcdC8vIFRhcmdldCBzaG91bGQgbm90IGJlIGEgdGV4dCBub2RlICh0cmFjLTUwNCwgdHJhYy0xMzE0Mylcblx0XHR0aGlzLnRhcmdldCA9ICggc3JjLnRhcmdldCAmJiBzcmMudGFyZ2V0Lm5vZGVUeXBlID09PSAzICkgP1xuXHRcdFx0c3JjLnRhcmdldC5wYXJlbnROb2RlIDpcblx0XHRcdHNyYy50YXJnZXQ7XG5cblx0XHR0aGlzLmN1cnJlbnRUYXJnZXQgPSBzcmMuY3VycmVudFRhcmdldDtcblx0XHR0aGlzLnJlbGF0ZWRUYXJnZXQgPSBzcmMucmVsYXRlZFRhcmdldDtcblxuXHQvLyBFdmVudCB0eXBlXG5cdH0gZWxzZSB7XG5cdFx0dGhpcy50eXBlID0gc3JjO1xuXHR9XG5cblx0Ly8gUHV0IGV4cGxpY2l0bHkgcHJvdmlkZWQgcHJvcGVydGllcyBvbnRvIHRoZSBldmVudCBvYmplY3Rcblx0aWYgKCBwcm9wcyApIHtcblx0XHRqUXVlcnkuZXh0ZW5kKCB0aGlzLCBwcm9wcyApO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGEgdGltZXN0YW1wIGlmIGluY29taW5nIGV2ZW50IGRvZXNuJ3QgaGF2ZSBvbmVcblx0dGhpcy50aW1lU3RhbXAgPSBzcmMgJiYgc3JjLnRpbWVTdGFtcCB8fCBEYXRlLm5vdygpO1xuXG5cdC8vIE1hcmsgaXQgYXMgZml4ZWRcblx0dGhpc1sgalF1ZXJ5LmV4cGFuZG8gXSA9IHRydWU7XG59O1xuXG4vLyBqUXVlcnkuRXZlbnQgaXMgYmFzZWQgb24gRE9NMyBFdmVudHMgYXMgc3BlY2lmaWVkIGJ5IHRoZSBFQ01BU2NyaXB0IExhbmd1YWdlIEJpbmRpbmdcbi8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDAzL1dELURPTS1MZXZlbC0zLUV2ZW50cy0yMDAzMDMzMS9lY21hLXNjcmlwdC1iaW5kaW5nLmh0bWxcbmpRdWVyeS5FdmVudC5wcm90b3R5cGUgPSB7XG5cdGNvbnN0cnVjdG9yOiBqUXVlcnkuRXZlbnQsXG5cdGlzRGVmYXVsdFByZXZlbnRlZDogcmV0dXJuRmFsc2UsXG5cdGlzUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcblx0aXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXHRpc1NpbXVsYXRlZDogZmFsc2UsXG5cblx0cHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuXG5cdFx0dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlO1xuXG5cdFx0aWYgKCBlICYmICF0aGlzLmlzU2ltdWxhdGVkICkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblx0fSxcblx0c3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcblxuXHRcdHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuXG5cdFx0aWYgKCBlICYmICF0aGlzLmlzU2ltdWxhdGVkICkge1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cdH0sXG5cdHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG5cblx0XHR0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcblxuXHRcdGlmICggZSAmJiAhdGhpcy5pc1NpbXVsYXRlZCApIHtcblx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcblx0fVxufTtcblxuLy8gSW5jbHVkZXMgYWxsIGNvbW1vbiBldmVudCBwcm9wcyBpbmNsdWRpbmcgS2V5RXZlbnQgYW5kIE1vdXNlRXZlbnQgc3BlY2lmaWMgcHJvcHNcbmpRdWVyeS5lYWNoKCB7XG5cdGFsdEtleTogdHJ1ZSxcblx0YnViYmxlczogdHJ1ZSxcblx0Y2FuY2VsYWJsZTogdHJ1ZSxcblx0Y2hhbmdlZFRvdWNoZXM6IHRydWUsXG5cdGN0cmxLZXk6IHRydWUsXG5cdGRldGFpbDogdHJ1ZSxcblx0ZXZlbnRQaGFzZTogdHJ1ZSxcblx0bWV0YUtleTogdHJ1ZSxcblx0cGFnZVg6IHRydWUsXG5cdHBhZ2VZOiB0cnVlLFxuXHRzaGlmdEtleTogdHJ1ZSxcblx0dmlldzogdHJ1ZSxcblx0XCJjaGFyXCI6IHRydWUsXG5cdGNvZGU6IHRydWUsXG5cdGNoYXJDb2RlOiB0cnVlLFxuXHRrZXk6IHRydWUsXG5cdGtleUNvZGU6IHRydWUsXG5cdGJ1dHRvbjogdHJ1ZSxcblx0YnV0dG9uczogdHJ1ZSxcblx0Y2xpZW50WDogdHJ1ZSxcblx0Y2xpZW50WTogdHJ1ZSxcblx0b2Zmc2V0WDogdHJ1ZSxcblx0b2Zmc2V0WTogdHJ1ZSxcblx0cG9pbnRlcklkOiB0cnVlLFxuXHRwb2ludGVyVHlwZTogdHJ1ZSxcblx0c2NyZWVuWDogdHJ1ZSxcblx0c2NyZWVuWTogdHJ1ZSxcblx0dGFyZ2V0VG91Y2hlczogdHJ1ZSxcblx0dG9FbGVtZW50OiB0cnVlLFxuXHR0b3VjaGVzOiB0cnVlLFxuXHR3aGljaDogdHJ1ZVxufSwgalF1ZXJ5LmV2ZW50LmFkZFByb3AgKTtcblxualF1ZXJ5LmVhY2goIHsgZm9jdXM6IFwiZm9jdXNpblwiLCBibHVyOiBcImZvY3Vzb3V0XCIgfSwgZnVuY3Rpb24oIHR5cGUsIGRlbGVnYXRlVHlwZSApIHtcblxuXHRmdW5jdGlvbiBmb2N1c01hcHBlZEhhbmRsZXIoIG5hdGl2ZUV2ZW50ICkge1xuXHRcdGlmICggZG9jdW1lbnQuZG9jdW1lbnRNb2RlICkge1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSAxMStcblx0XHRcdC8vIEF0dGFjaCBhIHNpbmdsZSBmb2N1c2luL2ZvY3Vzb3V0IGhhbmRsZXIgb24gdGhlIGRvY3VtZW50IHdoaWxlIHNvbWVvbmUgd2FudHNcblx0XHRcdC8vIGZvY3VzL2JsdXIuIFRoaXMgaXMgYmVjYXVzZSB0aGUgZm9ybWVyIGFyZSBzeW5jaHJvbm91cyBpbiBJRSB3aGlsZSB0aGUgbGF0dGVyXG5cdFx0XHQvLyBhcmUgYXN5bmMuIEluIG90aGVyIGJyb3dzZXJzLCBhbGwgdGhvc2UgaGFuZGxlcnMgYXJlIGludm9rZWQgc3luY2hyb25vdXNseS5cblxuXHRcdFx0Ly8gYGhhbmRsZWAgZnJvbSBwcml2YXRlIGRhdGEgd291bGQgYWxyZWFkeSB3cmFwIHRoZSBldmVudCwgYnV0IHdlIG5lZWRcblx0XHRcdC8vIHRvIGNoYW5nZSB0aGUgYHR5cGVgIGhlcmUuXG5cdFx0XHR2YXIgaGFuZGxlID0gZGF0YVByaXYuZ2V0KCB0aGlzLCBcImhhbmRsZVwiICksXG5cdFx0XHRcdGV2ZW50ID0galF1ZXJ5LmV2ZW50LmZpeCggbmF0aXZlRXZlbnQgKTtcblx0XHRcdGV2ZW50LnR5cGUgPSBuYXRpdmVFdmVudC50eXBlID09PSBcImZvY3VzaW5cIiA/IFwiZm9jdXNcIiA6IFwiYmx1clwiO1xuXHRcdFx0ZXZlbnQuaXNTaW11bGF0ZWQgPSB0cnVlO1xuXG5cdFx0XHQvLyBGaXJzdCwgaGFuZGxlIGZvY3VzaW4vZm9jdXNvdXRcblx0XHRcdGhhbmRsZSggbmF0aXZlRXZlbnQgKTtcblxuXHRcdFx0Ly8gLi4udGhlbiwgaGFuZGxlIGZvY3VzL2JsdXJcblx0XHRcdC8vXG5cdFx0XHQvLyBmb2N1cy9ibHVyIGRvbid0IGJ1YmJsZSB3aGlsZSBmb2N1c2luL2ZvY3Vzb3V0IGRvOyBzaW11bGF0ZSB0aGUgZm9ybWVyIGJ5IG9ubHlcblx0XHRcdC8vIGludm9raW5nIHRoZSBoYW5kbGVyIGF0IHRoZSBsb3dlciBsZXZlbC5cblx0XHRcdGlmICggZXZlbnQudGFyZ2V0ID09PSBldmVudC5jdXJyZW50VGFyZ2V0ICkge1xuXG5cdFx0XHRcdC8vIFRoZSBzZXR1cCBwYXJ0IGNhbGxzIGBsZXZlcmFnZU5hdGl2ZWAsIHdoaWNoLCBpbiB0dXJuLCBjYWxsc1xuXHRcdFx0XHQvLyBgalF1ZXJ5LmV2ZW50LmFkZGAsIHNvIGV2ZW50IGhhbmRsZSB3aWxsIGFscmVhZHkgaGF2ZSBiZWVuIHNldFxuXHRcdFx0XHQvLyBieSB0aGlzIHBvaW50LlxuXHRcdFx0XHRoYW5kbGUoIGV2ZW50ICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gRm9yIG5vbi1JRSBicm93c2VycywgYXR0YWNoIGEgc2luZ2xlIGNhcHR1cmluZyBoYW5kbGVyIG9uIHRoZSBkb2N1bWVudFxuXHRcdFx0Ly8gd2hpbGUgc29tZW9uZSB3YW50cyBmb2N1c2luL2ZvY3Vzb3V0LlxuXHRcdFx0alF1ZXJ5LmV2ZW50LnNpbXVsYXRlKCBkZWxlZ2F0ZVR5cGUsIG5hdGl2ZUV2ZW50LnRhcmdldCxcblx0XHRcdFx0alF1ZXJ5LmV2ZW50LmZpeCggbmF0aXZlRXZlbnQgKSApO1xuXHRcdH1cblx0fVxuXG5cdGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gPSB7XG5cblx0XHQvLyBVdGlsaXplIG5hdGl2ZSBldmVudCBpZiBwb3NzaWJsZSBzbyBibHVyL2ZvY3VzIHNlcXVlbmNlIGlzIGNvcnJlY3Rcblx0XHRzZXR1cDogZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciBhdHRhY2hlcztcblxuXHRcdFx0Ly8gQ2xhaW0gdGhlIGZpcnN0IGhhbmRsZXJcblx0XHRcdC8vIGRhdGFQcml2LnNldCggdGhpcywgXCJmb2N1c1wiLCAuLi4gKVxuXHRcdFx0Ly8gZGF0YVByaXYuc2V0KCB0aGlzLCBcImJsdXJcIiwgLi4uIClcblx0XHRcdGxldmVyYWdlTmF0aXZlKCB0aGlzLCB0eXBlLCB0cnVlICk7XG5cblx0XHRcdGlmICggZG9jdW1lbnQuZG9jdW1lbnRNb2RlICkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMStcblx0XHRcdFx0Ly8gV2UgdXNlIHRoZSBzYW1lIG5hdGl2ZSBoYW5kbGVyIGZvciBmb2N1c2luICYgZm9jdXMgKGFuZCBmb2N1c291dCAmIGJsdXIpXG5cdFx0XHRcdC8vIHNvIHdlIG5lZWQgdG8gY29vcmRpbmF0ZSBzZXR1cCAmIHRlYXJkb3duIHBhcnRzIGJldHdlZW4gdGhvc2UgZXZlbnRzLlxuXHRcdFx0XHQvLyBVc2UgYGRlbGVnYXRlVHlwZWAgYXMgdGhlIGtleSBhcyBgdHlwZWAgaXMgYWxyZWFkeSB1c2VkIGJ5IGBsZXZlcmFnZU5hdGl2ZWAuXG5cdFx0XHRcdGF0dGFjaGVzID0gZGF0YVByaXYuZ2V0KCB0aGlzLCBkZWxlZ2F0ZVR5cGUgKTtcblx0XHRcdFx0aWYgKCAhYXR0YWNoZXMgKSB7XG5cdFx0XHRcdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKCBkZWxlZ2F0ZVR5cGUsIGZvY3VzTWFwcGVkSGFuZGxlciApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRhdGFQcml2LnNldCggdGhpcywgZGVsZWdhdGVUeXBlLCAoIGF0dGFjaGVzIHx8IDAgKSArIDEgKTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUmV0dXJuIGZhbHNlIHRvIGFsbG93IG5vcm1hbCBwcm9jZXNzaW5nIGluIHRoZSBjYWxsZXJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0dHJpZ2dlcjogZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIEZvcmNlIHNldHVwIGJlZm9yZSB0cmlnZ2VyXG5cdFx0XHRsZXZlcmFnZU5hdGl2ZSggdGhpcywgdHlwZSApO1xuXG5cdFx0XHQvLyBSZXR1cm4gbm9uLWZhbHNlIHRvIGFsbG93IG5vcm1hbCBldmVudC1wYXRoIHByb3BhZ2F0aW9uXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0dGVhcmRvd246IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGF0dGFjaGVzO1xuXG5cdFx0XHRpZiAoIGRvY3VtZW50LmRvY3VtZW50TW9kZSApIHtcblx0XHRcdFx0YXR0YWNoZXMgPSBkYXRhUHJpdi5nZXQoIHRoaXMsIGRlbGVnYXRlVHlwZSApIC0gMTtcblx0XHRcdFx0aWYgKCAhYXR0YWNoZXMgKSB7XG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCBkZWxlZ2F0ZVR5cGUsIGZvY3VzTWFwcGVkSGFuZGxlciApO1xuXHRcdFx0XHRcdGRhdGFQcml2LnJlbW92ZSggdGhpcywgZGVsZWdhdGVUeXBlICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGF0YVByaXYuc2V0KCB0aGlzLCBkZWxlZ2F0ZVR5cGUsIGF0dGFjaGVzICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUmV0dXJuIGZhbHNlIHRvIGluZGljYXRlIHN0YW5kYXJkIHRlYXJkb3duIHNob3VsZCBiZSBhcHBsaWVkXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gU3VwcHJlc3MgbmF0aXZlIGZvY3VzIG9yIGJsdXIgaWYgd2UncmUgY3VycmVudGx5IGluc2lkZVxuXHRcdC8vIGEgbGV2ZXJhZ2VkIG5hdGl2ZS1ldmVudCBzdGFja1xuXHRcdF9kZWZhdWx0OiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRyZXR1cm4gZGF0YVByaXYuZ2V0KCBldmVudC50YXJnZXQsIHR5cGUgKTtcblx0XHR9LFxuXG5cdFx0ZGVsZWdhdGVUeXBlOiBkZWxlZ2F0ZVR5cGVcblx0fTtcblxuXHQvLyBTdXBwb3J0OiBGaXJlZm94IDw9NDRcblx0Ly8gRmlyZWZveCBkb2Vzbid0IGhhdmUgZm9jdXMoaW4gfCBvdXQpIGV2ZW50c1xuXHQvLyBSZWxhdGVkIHRpY2tldCAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY4Nzc4N1xuXHQvL1xuXHQvLyBTdXBwb3J0OiBDaHJvbWUgPD00OCAtIDQ5LCBTYWZhcmkgPD05LjAgLSA5LjFcblx0Ly8gZm9jdXMoaW4gfCBvdXQpIGV2ZW50cyBmaXJlIGFmdGVyIGZvY3VzICYgYmx1ciBldmVudHMsXG5cdC8vIHdoaWNoIGlzIHNwZWMgdmlvbGF0aW9uIC0gaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtRXZlbnRzLyNldmVudHMtZm9jdXNldmVudC1ldmVudC1vcmRlclxuXHQvLyBSZWxhdGVkIHRpY2tldCAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ0OTg1N1xuXHQvL1xuXHQvLyBTdXBwb3J0OiBJRSA5IC0gMTErXG5cdC8vIFRvIHByZXNlcnZlIHJlbGF0aXZlIGZvY3VzaW4vZm9jdXMgJiBmb2N1c291dC9ibHVyIGV2ZW50IG9yZGVyIGd1YXJhbnRlZWQgb24gdGhlIDMueCBicmFuY2gsXG5cdC8vIGF0dGFjaCBhIHNpbmdsZSBoYW5kbGVyIGZvciBib3RoIGV2ZW50cyBpbiBJRS5cblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWxbIGRlbGVnYXRlVHlwZSBdID0ge1xuXHRcdHNldHVwOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gSGFuZGxlOiByZWd1bGFyIG5vZGVzICh2aWEgYHRoaXMub3duZXJEb2N1bWVudGApLCB3aW5kb3dcblx0XHRcdC8vICh2aWEgYHRoaXMuZG9jdW1lbnRgKSAmIGRvY3VtZW50ICh2aWEgYHRoaXNgKS5cblx0XHRcdHZhciBkb2MgPSB0aGlzLm93bmVyRG9jdW1lbnQgfHwgdGhpcy5kb2N1bWVudCB8fCB0aGlzLFxuXHRcdFx0XHRkYXRhSG9sZGVyID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlID8gdGhpcyA6IGRvYyxcblx0XHRcdFx0YXR0YWNoZXMgPSBkYXRhUHJpdi5nZXQoIGRhdGFIb2xkZXIsIGRlbGVnYXRlVHlwZSApO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTErXG5cdFx0XHQvLyBXZSB1c2UgdGhlIHNhbWUgbmF0aXZlIGhhbmRsZXIgZm9yIGZvY3VzaW4gJiBmb2N1cyAoYW5kIGZvY3Vzb3V0ICYgYmx1cilcblx0XHRcdC8vIHNvIHdlIG5lZWQgdG8gY29vcmRpbmF0ZSBzZXR1cCAmIHRlYXJkb3duIHBhcnRzIGJldHdlZW4gdGhvc2UgZXZlbnRzLlxuXHRcdFx0Ly8gVXNlIGBkZWxlZ2F0ZVR5cGVgIGFzIHRoZSBrZXkgYXMgYHR5cGVgIGlzIGFscmVhZHkgdXNlZCBieSBgbGV2ZXJhZ2VOYXRpdmVgLlxuXHRcdFx0aWYgKCAhYXR0YWNoZXMgKSB7XG5cdFx0XHRcdGlmICggZG9jdW1lbnQuZG9jdW1lbnRNb2RlICkge1xuXHRcdFx0XHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lciggZGVsZWdhdGVUeXBlLCBmb2N1c01hcHBlZEhhbmRsZXIgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkb2MuYWRkRXZlbnRMaXN0ZW5lciggdHlwZSwgZm9jdXNNYXBwZWRIYW5kbGVyLCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGRhdGFQcml2LnNldCggZGF0YUhvbGRlciwgZGVsZWdhdGVUeXBlLCAoIGF0dGFjaGVzIHx8IDAgKSArIDEgKTtcblx0XHR9LFxuXHRcdHRlYXJkb3duOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkb2MgPSB0aGlzLm93bmVyRG9jdW1lbnQgfHwgdGhpcy5kb2N1bWVudCB8fCB0aGlzLFxuXHRcdFx0XHRkYXRhSG9sZGVyID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlID8gdGhpcyA6IGRvYyxcblx0XHRcdFx0YXR0YWNoZXMgPSBkYXRhUHJpdi5nZXQoIGRhdGFIb2xkZXIsIGRlbGVnYXRlVHlwZSApIC0gMTtcblxuXHRcdFx0aWYgKCAhYXR0YWNoZXMgKSB7XG5cdFx0XHRcdGlmICggZG9jdW1lbnQuZG9jdW1lbnRNb2RlICkge1xuXHRcdFx0XHRcdHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggZGVsZWdhdGVUeXBlLCBmb2N1c01hcHBlZEhhbmRsZXIgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lciggdHlwZSwgZm9jdXNNYXBwZWRIYW5kbGVyLCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGF0YVByaXYucmVtb3ZlKCBkYXRhSG9sZGVyLCBkZWxlZ2F0ZVR5cGUgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRhdGFQcml2LnNldCggZGF0YUhvbGRlciwgZGVsZWdhdGVUeXBlLCBhdHRhY2hlcyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn0gKTtcblxuLy8gQ3JlYXRlIG1vdXNlZW50ZXIvbGVhdmUgZXZlbnRzIHVzaW5nIG1vdXNlb3Zlci9vdXQgYW5kIGV2ZW50LXRpbWUgY2hlY2tzXG4vLyBzbyB0aGF0IGV2ZW50IGRlbGVnYXRpb24gd29ya3MgaW4galF1ZXJ5LlxuLy8gRG8gdGhlIHNhbWUgZm9yIHBvaW50ZXJlbnRlci9wb2ludGVybGVhdmUgYW5kIHBvaW50ZXJvdmVyL3BvaW50ZXJvdXRcbi8vXG4vLyBTdXBwb3J0OiBTYWZhcmkgNyBvbmx5XG4vLyBTYWZhcmkgc2VuZHMgbW91c2VlbnRlciB0b28gb2Z0ZW47IHNlZTpcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ3MDI1OFxuLy8gZm9yIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYnVnIChpdCBleGlzdGVkIGluIG9sZGVyIENocm9tZSB2ZXJzaW9ucyBhcyB3ZWxsKS5cbmpRdWVyeS5lYWNoKCB7XG5cdG1vdXNlZW50ZXI6IFwibW91c2VvdmVyXCIsXG5cdG1vdXNlbGVhdmU6IFwibW91c2VvdXRcIixcblx0cG9pbnRlcmVudGVyOiBcInBvaW50ZXJvdmVyXCIsXG5cdHBvaW50ZXJsZWF2ZTogXCJwb2ludGVyb3V0XCJcbn0sIGZ1bmN0aW9uKCBvcmlnLCBmaXggKSB7XG5cdGpRdWVyeS5ldmVudC5zcGVjaWFsWyBvcmlnIF0gPSB7XG5cdFx0ZGVsZWdhdGVUeXBlOiBmaXgsXG5cdFx0YmluZFR5cGU6IGZpeCxcblxuXHRcdGhhbmRsZTogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0dmFyIHJldCxcblx0XHRcdFx0dGFyZ2V0ID0gdGhpcyxcblx0XHRcdFx0cmVsYXRlZCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQsXG5cdFx0XHRcdGhhbmRsZU9iaiA9IGV2ZW50LmhhbmRsZU9iajtcblxuXHRcdFx0Ly8gRm9yIG1vdXNlZW50ZXIvbGVhdmUgY2FsbCB0aGUgaGFuZGxlciBpZiByZWxhdGVkIGlzIG91dHNpZGUgdGhlIHRhcmdldC5cblx0XHRcdC8vIE5COiBObyByZWxhdGVkVGFyZ2V0IGlmIHRoZSBtb3VzZSBsZWZ0L2VudGVyZWQgdGhlIGJyb3dzZXIgd2luZG93XG5cdFx0XHRpZiAoICFyZWxhdGVkIHx8ICggcmVsYXRlZCAhPT0gdGFyZ2V0ICYmICFqUXVlcnkuY29udGFpbnMoIHRhcmdldCwgcmVsYXRlZCApICkgKSB7XG5cdFx0XHRcdGV2ZW50LnR5cGUgPSBoYW5kbGVPYmoub3JpZ1R5cGU7XG5cdFx0XHRcdHJldCA9IGhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0ZXZlbnQudHlwZSA9IGZpeDtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXHR9O1xufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cblx0b246IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiBvbiggdGhpcywgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiApO1xuXHR9LFxuXHRvbmU6IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiBvbiggdGhpcywgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiwgMSApO1xuXHR9LFxuXHRvZmY6IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGZuICkge1xuXHRcdHZhciBoYW5kbGVPYmosIHR5cGU7XG5cdFx0aWYgKCB0eXBlcyAmJiB0eXBlcy5wcmV2ZW50RGVmYXVsdCAmJiB0eXBlcy5oYW5kbGVPYmogKSB7XG5cblx0XHRcdC8vICggZXZlbnQgKSAgZGlzcGF0Y2hlZCBqUXVlcnkuRXZlbnRcblx0XHRcdGhhbmRsZU9iaiA9IHR5cGVzLmhhbmRsZU9iajtcblx0XHRcdGpRdWVyeSggdHlwZXMuZGVsZWdhdGVUYXJnZXQgKS5vZmYoXG5cdFx0XHRcdGhhbmRsZU9iai5uYW1lc3BhY2UgP1xuXHRcdFx0XHRcdGhhbmRsZU9iai5vcmlnVHlwZSArIFwiLlwiICsgaGFuZGxlT2JqLm5hbWVzcGFjZSA6XG5cdFx0XHRcdFx0aGFuZGxlT2JqLm9yaWdUeXBlLFxuXHRcdFx0XHRoYW5kbGVPYmouc2VsZWN0b3IsXG5cdFx0XHRcdGhhbmRsZU9iai5oYW5kbGVyXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdGlmICggdHlwZW9mIHR5cGVzID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0XHQvLyAoIHR5cGVzLW9iamVjdCBbLCBzZWxlY3Rvcl0gKVxuXHRcdFx0Zm9yICggdHlwZSBpbiB0eXBlcyApIHtcblx0XHRcdFx0dGhpcy5vZmYoIHR5cGUsIHNlbGVjdG9yLCB0eXBlc1sgdHlwZSBdICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aWYgKCBzZWxlY3RvciA9PT0gZmFsc2UgfHwgdHlwZW9mIHNlbGVjdG9yID09PSBcImZ1bmN0aW9uXCIgKSB7XG5cblx0XHRcdC8vICggdHlwZXMgWywgZm5dIClcblx0XHRcdGZuID0gc2VsZWN0b3I7XG5cdFx0XHRzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0aWYgKCBmbiA9PT0gZmFsc2UgKSB7XG5cdFx0XHRmbiA9IHJldHVybkZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIHRoaXMsIHR5cGVzLCBmbiwgc2VsZWN0b3IgKTtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxuXG52YXJcblxuXHQvLyBTdXBwb3J0OiBJRSA8PTEwIC0gMTEsIEVkZ2UgMTIgLSAxMyBvbmx5XG5cdC8vIEluIElFL0VkZ2UgdXNpbmcgcmVnZXggZ3JvdXBzIGhlcmUgY2F1c2VzIHNldmVyZSBzbG93ZG93bnMuXG5cdC8vIFNlZSBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzE3MzY1MTIvXG5cdHJub0lubmVyaHRtbCA9IC88c2NyaXB0fDxzdHlsZXw8bGluay9pLFxuXG5cdC8vIGNoZWNrZWQ9XCJjaGVja2VkXCIgb3IgY2hlY2tlZFxuXHRyY2hlY2tlZCA9IC9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksXG5cblx0cmNsZWFuU2NyaXB0ID0gL15cXHMqPCFcXFtDREFUQVxcW3xcXF1cXF0+XFxzKiQvZztcblxuLy8gUHJlZmVyIGEgdGJvZHkgb3ZlciBpdHMgcGFyZW50IHRhYmxlIGZvciBjb250YWluaW5nIG5ldyByb3dzXG5mdW5jdGlvbiBtYW5pcHVsYXRpb25UYXJnZXQoIGVsZW0sIGNvbnRlbnQgKSB7XG5cdGlmICggbm9kZU5hbWUoIGVsZW0sIFwidGFibGVcIiApICYmXG5cdFx0bm9kZU5hbWUoIGNvbnRlbnQubm9kZVR5cGUgIT09IDExID8gY29udGVudCA6IGNvbnRlbnQuZmlyc3RDaGlsZCwgXCJ0clwiICkgKSB7XG5cblx0XHRyZXR1cm4galF1ZXJ5KCBlbGVtICkuY2hpbGRyZW4oIFwidGJvZHlcIiApWyAwIF0gfHwgZWxlbTtcblx0fVxuXG5cdHJldHVybiBlbGVtO1xufVxuXG4vLyBSZXBsYWNlL3Jlc3RvcmUgdGhlIHR5cGUgYXR0cmlidXRlIG9mIHNjcmlwdCBlbGVtZW50cyBmb3Igc2FmZSBET00gbWFuaXB1bGF0aW9uXG5mdW5jdGlvbiBkaXNhYmxlU2NyaXB0KCBlbGVtICkge1xuXHRlbGVtLnR5cGUgPSAoIGVsZW0uZ2V0QXR0cmlidXRlKCBcInR5cGVcIiApICE9PSBudWxsICkgKyBcIi9cIiArIGVsZW0udHlwZTtcblx0cmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiByZXN0b3JlU2NyaXB0KCBlbGVtICkge1xuXHRpZiAoICggZWxlbS50eXBlIHx8IFwiXCIgKS5zbGljZSggMCwgNSApID09PSBcInRydWUvXCIgKSB7XG5cdFx0ZWxlbS50eXBlID0gZWxlbS50eXBlLnNsaWNlKCA1ICk7XG5cdH0gZWxzZSB7XG5cdFx0ZWxlbS5yZW1vdmVBdHRyaWJ1dGUoIFwidHlwZVwiICk7XG5cdH1cblxuXHRyZXR1cm4gZWxlbTtcbn1cblxuZnVuY3Rpb24gY2xvbmVDb3B5RXZlbnQoIHNyYywgZGVzdCApIHtcblx0dmFyIGksIGwsIHR5cGUsIHBkYXRhT2xkLCB1ZGF0YU9sZCwgdWRhdGFDdXIsIGV2ZW50cztcblxuXHRpZiAoIGRlc3Qubm9kZVR5cGUgIT09IDEgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gMS4gQ29weSBwcml2YXRlIGRhdGE6IGV2ZW50cywgaGFuZGxlcnMsIGV0Yy5cblx0aWYgKCBkYXRhUHJpdi5oYXNEYXRhKCBzcmMgKSApIHtcblx0XHRwZGF0YU9sZCA9IGRhdGFQcml2LmdldCggc3JjICk7XG5cdFx0ZXZlbnRzID0gcGRhdGFPbGQuZXZlbnRzO1xuXG5cdFx0aWYgKCBldmVudHMgKSB7XG5cdFx0XHRkYXRhUHJpdi5yZW1vdmUoIGRlc3QsIFwiaGFuZGxlIGV2ZW50c1wiICk7XG5cblx0XHRcdGZvciAoIHR5cGUgaW4gZXZlbnRzICkge1xuXHRcdFx0XHRmb3IgKCBpID0gMCwgbCA9IGV2ZW50c1sgdHlwZSBdLmxlbmd0aDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQuYWRkKCBkZXN0LCB0eXBlLCBldmVudHNbIHR5cGUgXVsgaSBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyAyLiBDb3B5IHVzZXIgZGF0YVxuXHRpZiAoIGRhdGFVc2VyLmhhc0RhdGEoIHNyYyApICkge1xuXHRcdHVkYXRhT2xkID0gZGF0YVVzZXIuYWNjZXNzKCBzcmMgKTtcblx0XHR1ZGF0YUN1ciA9IGpRdWVyeS5leHRlbmQoIHt9LCB1ZGF0YU9sZCApO1xuXG5cdFx0ZGF0YVVzZXIuc2V0KCBkZXN0LCB1ZGF0YUN1ciApO1xuXHR9XG59XG5cbi8vIEZpeCBJRSBidWdzLCBzZWUgc3VwcG9ydCB0ZXN0c1xuZnVuY3Rpb24gZml4SW5wdXQoIHNyYywgZGVzdCApIHtcblx0dmFyIG5vZGVOYW1lID0gZGVzdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdC8vIEZhaWxzIHRvIHBlcnNpc3QgdGhlIGNoZWNrZWQgc3RhdGUgb2YgYSBjbG9uZWQgY2hlY2tib3ggb3IgcmFkaW8gYnV0dG9uLlxuXHRpZiAoIG5vZGVOYW1lID09PSBcImlucHV0XCIgJiYgcmNoZWNrYWJsZVR5cGUudGVzdCggc3JjLnR5cGUgKSApIHtcblx0XHRkZXN0LmNoZWNrZWQgPSBzcmMuY2hlY2tlZDtcblxuXHQvLyBGYWlscyB0byByZXR1cm4gdGhlIHNlbGVjdGVkIG9wdGlvbiB0byB0aGUgZGVmYXVsdCBzZWxlY3RlZCBzdGF0ZSB3aGVuIGNsb25pbmcgb3B0aW9uc1xuXHR9IGVsc2UgaWYgKCBub2RlTmFtZSA9PT0gXCJpbnB1dFwiIHx8IG5vZGVOYW1lID09PSBcInRleHRhcmVhXCIgKSB7XG5cdFx0ZGVzdC5kZWZhdWx0VmFsdWUgPSBzcmMuZGVmYXVsdFZhbHVlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRvbU1hbmlwKCBjb2xsZWN0aW9uLCBhcmdzLCBjYWxsYmFjaywgaWdub3JlZCApIHtcblxuXHQvLyBGbGF0dGVuIGFueSBuZXN0ZWQgYXJyYXlzXG5cdGFyZ3MgPSBmbGF0KCBhcmdzICk7XG5cblx0dmFyIGZyYWdtZW50LCBmaXJzdCwgc2NyaXB0cywgaGFzU2NyaXB0cywgbm9kZSwgZG9jLFxuXHRcdGkgPSAwLFxuXHRcdGwgPSBjb2xsZWN0aW9uLmxlbmd0aCxcblx0XHRpTm9DbG9uZSA9IGwgLSAxLFxuXHRcdHZhbHVlID0gYXJnc1sgMCBdLFxuXHRcdHZhbHVlSXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24oIHZhbHVlICk7XG5cblx0Ly8gV2UgY2FuJ3QgY2xvbmVOb2RlIGZyYWdtZW50cyB0aGF0IGNvbnRhaW4gY2hlY2tlZCwgaW4gV2ViS2l0XG5cdGlmICggdmFsdWVJc0Z1bmN0aW9uIHx8XG5cdFx0XHQoIGwgPiAxICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHQhc3VwcG9ydC5jaGVja0Nsb25lICYmIHJjaGVja2VkLnRlc3QoIHZhbHVlICkgKSApIHtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5lYWNoKCBmdW5jdGlvbiggaW5kZXggKSB7XG5cdFx0XHR2YXIgc2VsZiA9IGNvbGxlY3Rpb24uZXEoIGluZGV4ICk7XG5cdFx0XHRpZiAoIHZhbHVlSXNGdW5jdGlvbiApIHtcblx0XHRcdFx0YXJnc1sgMCBdID0gdmFsdWUuY2FsbCggdGhpcywgaW5kZXgsIHNlbGYuaHRtbCgpICk7XG5cdFx0XHR9XG5cdFx0XHRkb21NYW5pcCggc2VsZiwgYXJncywgY2FsbGJhY2ssIGlnbm9yZWQgKTtcblx0XHR9ICk7XG5cdH1cblxuXHRpZiAoIGwgKSB7XG5cdFx0ZnJhZ21lbnQgPSBidWlsZEZyYWdtZW50KCBhcmdzLCBjb2xsZWN0aW9uWyAwIF0ub3duZXJEb2N1bWVudCwgZmFsc2UsIGNvbGxlY3Rpb24sIGlnbm9yZWQgKTtcblx0XHRmaXJzdCA9IGZyYWdtZW50LmZpcnN0Q2hpbGQ7XG5cblx0XHRpZiAoIGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICkge1xuXHRcdFx0ZnJhZ21lbnQgPSBmaXJzdDtcblx0XHR9XG5cblx0XHQvLyBSZXF1aXJlIGVpdGhlciBuZXcgY29udGVudCBvciBhbiBpbnRlcmVzdCBpbiBpZ25vcmVkIGVsZW1lbnRzIHRvIGludm9rZSB0aGUgY2FsbGJhY2tcblx0XHRpZiAoIGZpcnN0IHx8IGlnbm9yZWQgKSB7XG5cdFx0XHRzY3JpcHRzID0galF1ZXJ5Lm1hcCggZ2V0QWxsKCBmcmFnbWVudCwgXCJzY3JpcHRcIiApLCBkaXNhYmxlU2NyaXB0ICk7XG5cdFx0XHRoYXNTY3JpcHRzID0gc2NyaXB0cy5sZW5ndGg7XG5cblx0XHRcdC8vIFVzZSB0aGUgb3JpZ2luYWwgZnJhZ21lbnQgZm9yIHRoZSBsYXN0IGl0ZW1cblx0XHRcdC8vIGluc3RlYWQgb2YgdGhlIGZpcnN0IGJlY2F1c2UgaXQgY2FuIGVuZCB1cFxuXHRcdFx0Ly8gYmVpbmcgZW1wdGllZCBpbmNvcnJlY3RseSBpbiBjZXJ0YWluIHNpdHVhdGlvbnMgKHRyYWMtODA3MCkuXG5cdFx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdG5vZGUgPSBmcmFnbWVudDtcblxuXHRcdFx0XHRpZiAoIGkgIT09IGlOb0Nsb25lICkge1xuXHRcdFx0XHRcdG5vZGUgPSBqUXVlcnkuY2xvbmUoIG5vZGUsIHRydWUsIHRydWUgKTtcblxuXHRcdFx0XHRcdC8vIEtlZXAgcmVmZXJlbmNlcyB0byBjbG9uZWQgc2NyaXB0cyBmb3IgbGF0ZXIgcmVzdG9yYXRpb25cblx0XHRcdFx0XHRpZiAoIGhhc1NjcmlwdHMgKSB7XG5cblx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuXHRcdFx0XHRcdFx0Ly8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXHRcdFx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCBzY3JpcHRzLCBnZXRBbGwoIG5vZGUsIFwic2NyaXB0XCIgKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhbGxiYWNrLmNhbGwoIGNvbGxlY3Rpb25bIGkgXSwgbm9kZSwgaSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGhhc1NjcmlwdHMgKSB7XG5cdFx0XHRcdGRvYyA9IHNjcmlwdHNbIHNjcmlwdHMubGVuZ3RoIC0gMSBdLm93bmVyRG9jdW1lbnQ7XG5cblx0XHRcdFx0Ly8gUmUtZW5hYmxlIHNjcmlwdHNcblx0XHRcdFx0alF1ZXJ5Lm1hcCggc2NyaXB0cywgcmVzdG9yZVNjcmlwdCApO1xuXG5cdFx0XHRcdC8vIEV2YWx1YXRlIGV4ZWN1dGFibGUgc2NyaXB0cyBvbiBmaXJzdCBkb2N1bWVudCBpbnNlcnRpb25cblx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBoYXNTY3JpcHRzOyBpKysgKSB7XG5cdFx0XHRcdFx0bm9kZSA9IHNjcmlwdHNbIGkgXTtcblx0XHRcdFx0XHRpZiAoIHJzY3JpcHRUeXBlLnRlc3QoIG5vZGUudHlwZSB8fCBcIlwiICkgJiZcblx0XHRcdFx0XHRcdCFkYXRhUHJpdi5hY2Nlc3MoIG5vZGUsIFwiZ2xvYmFsRXZhbFwiICkgJiZcblx0XHRcdFx0XHRcdGpRdWVyeS5jb250YWlucyggZG9jLCBub2RlICkgKSB7XG5cblx0XHRcdFx0XHRcdGlmICggbm9kZS5zcmMgJiYgKCBub2RlLnR5cGUgfHwgXCJcIiApLnRvTG93ZXJDYXNlKCkgICE9PSBcIm1vZHVsZVwiICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIE9wdGlvbmFsIEFKQVggZGVwZW5kZW5jeSwgYnV0IHdvbid0IHJ1biBzY3JpcHRzIGlmIG5vdCBwcmVzZW50XG5cdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5Ll9ldmFsVXJsICYmICFub2RlLm5vTW9kdWxlICkge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5fZXZhbFVybCggbm9kZS5zcmMsIHtcblx0XHRcdFx0XHRcdFx0XHRcdG5vbmNlOiBub2RlLm5vbmNlIHx8IG5vZGUuZ2V0QXR0cmlidXRlKCBcIm5vbmNlXCIgKVxuXHRcdFx0XHRcdFx0XHRcdH0sIGRvYyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFVud3JhcCBhIENEQVRBIHNlY3Rpb24gY29udGFpbmluZyBzY3JpcHQgY29udGVudHMuIFRoaXMgc2hvdWxkbid0IGJlXG5cdFx0XHRcdFx0XHRcdC8vIG5lZWRlZCBhcyBpbiBYTUwgZG9jdW1lbnRzIHRoZXkncmUgYWxyZWFkeSBub3QgdmlzaWJsZSB3aGVuXG5cdFx0XHRcdFx0XHRcdC8vIGluc3BlY3RpbmcgZWxlbWVudCBjb250ZW50cyBhbmQgaW4gSFRNTCBkb2N1bWVudHMgdGhleSBoYXZlIG5vXG5cdFx0XHRcdFx0XHRcdC8vIG1lYW5pbmcgYnV0IHdlJ3JlIHByZXNlcnZpbmcgdGhhdCBsb2dpYyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5cdFx0XHRcdFx0XHRcdC8vIFRoaXMgd2lsbCBiZSByZW1vdmVkIGNvbXBsZXRlbHkgaW4gNC4wLiBTZWUgZ2gtNDkwNC5cblx0XHRcdFx0XHRcdFx0RE9NRXZhbCggbm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKCByY2xlYW5TY3JpcHQsIFwiXCIgKSwgbm9kZSwgZG9jICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNvbGxlY3Rpb247XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSggZWxlbSwgc2VsZWN0b3IsIGtlZXBEYXRhICkge1xuXHR2YXIgbm9kZSxcblx0XHRub2RlcyA9IHNlbGVjdG9yID8galF1ZXJ5LmZpbHRlciggc2VsZWN0b3IsIGVsZW0gKSA6IGVsZW0sXG5cdFx0aSA9IDA7XG5cblx0Zm9yICggOyAoIG5vZGUgPSBub2Rlc1sgaSBdICkgIT0gbnVsbDsgaSsrICkge1xuXHRcdGlmICggIWtlZXBEYXRhICYmIG5vZGUubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIG5vZGUgKSApO1xuXHRcdH1cblxuXHRcdGlmICggbm9kZS5wYXJlbnROb2RlICkge1xuXHRcdFx0aWYgKCBrZWVwRGF0YSAmJiBpc0F0dGFjaGVkKCBub2RlICkgKSB7XG5cdFx0XHRcdHNldEdsb2JhbEV2YWwoIGdldEFsbCggbm9kZSwgXCJzY3JpcHRcIiApICk7XG5cdFx0XHR9XG5cdFx0XHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIG5vZGUgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWxlbTtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXHRodG1sUHJlZmlsdGVyOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHRyZXR1cm4gaHRtbDtcblx0fSxcblxuXHRjbG9uZTogZnVuY3Rpb24oIGVsZW0sIGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuXHRcdHZhciBpLCBsLCBzcmNFbGVtZW50cywgZGVzdEVsZW1lbnRzLFxuXHRcdFx0Y2xvbmUgPSBlbGVtLmNsb25lTm9kZSggdHJ1ZSApLFxuXHRcdFx0aW5QYWdlID0gaXNBdHRhY2hlZCggZWxlbSApO1xuXG5cdFx0Ly8gRml4IElFIGNsb25pbmcgaXNzdWVzXG5cdFx0aWYgKCAhc3VwcG9ydC5ub0Nsb25lQ2hlY2tlZCAmJiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgZWxlbS5ub2RlVHlwZSA9PT0gMTEgKSAmJlxuXHRcdFx0XHQhalF1ZXJ5LmlzWE1MRG9jKCBlbGVtICkgKSB7XG5cblx0XHRcdC8vIFdlIGVzY2hldyBqUXVlcnkjZmluZCBoZXJlIGZvciBwZXJmb3JtYW5jZSByZWFzb25zOlxuXHRcdFx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL2dldGFsbC12cy1zaXp6bGUvMlxuXHRcdFx0ZGVzdEVsZW1lbnRzID0gZ2V0QWxsKCBjbG9uZSApO1xuXHRcdFx0c3JjRWxlbWVudHMgPSBnZXRBbGwoIGVsZW0gKTtcblxuXHRcdFx0Zm9yICggaSA9IDAsIGwgPSBzcmNFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdGZpeElucHV0KCBzcmNFbGVtZW50c1sgaSBdLCBkZXN0RWxlbWVudHNbIGkgXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvcHkgdGhlIGV2ZW50cyBmcm9tIHRoZSBvcmlnaW5hbCB0byB0aGUgY2xvbmVcblx0XHRpZiAoIGRhdGFBbmRFdmVudHMgKSB7XG5cdFx0XHRpZiAoIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuXHRcdFx0XHRzcmNFbGVtZW50cyA9IHNyY0VsZW1lbnRzIHx8IGdldEFsbCggZWxlbSApO1xuXHRcdFx0XHRkZXN0RWxlbWVudHMgPSBkZXN0RWxlbWVudHMgfHwgZ2V0QWxsKCBjbG9uZSApO1xuXG5cdFx0XHRcdGZvciAoIGkgPSAwLCBsID0gc3JjRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRcdGNsb25lQ29weUV2ZW50KCBzcmNFbGVtZW50c1sgaSBdLCBkZXN0RWxlbWVudHNbIGkgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbG9uZUNvcHlFdmVudCggZWxlbSwgY2xvbmUgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG5cdFx0ZGVzdEVsZW1lbnRzID0gZ2V0QWxsKCBjbG9uZSwgXCJzY3JpcHRcIiApO1xuXHRcdGlmICggZGVzdEVsZW1lbnRzLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRzZXRHbG9iYWxFdmFsKCBkZXN0RWxlbWVudHMsICFpblBhZ2UgJiYgZ2V0QWxsKCBlbGVtLCBcInNjcmlwdFwiICkgKTtcblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gdGhlIGNsb25lZCBzZXRcblx0XHRyZXR1cm4gY2xvbmU7XG5cdH0sXG5cblx0Y2xlYW5EYXRhOiBmdW5jdGlvbiggZWxlbXMgKSB7XG5cdFx0dmFyIGRhdGEsIGVsZW0sIHR5cGUsXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWwsXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgKCBlbGVtID0gZWxlbXNbIGkgXSApICE9PSB1bmRlZmluZWQ7IGkrKyApIHtcblx0XHRcdGlmICggYWNjZXB0RGF0YSggZWxlbSApICkge1xuXHRcdFx0XHRpZiAoICggZGF0YSA9IGVsZW1bIGRhdGFQcml2LmV4cGFuZG8gXSApICkge1xuXHRcdFx0XHRcdGlmICggZGF0YS5ldmVudHMgKSB7XG5cdFx0XHRcdFx0XHRmb3IgKCB0eXBlIGluIGRhdGEuZXZlbnRzICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIHNwZWNpYWxbIHR5cGUgXSApIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuZXZlbnQucmVtb3ZlKCBlbGVtLCB0eXBlICk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gVGhpcyBpcyBhIHNob3J0Y3V0IHRvIGF2b2lkIGpRdWVyeS5ldmVudC5yZW1vdmUncyBvdmVyaGVhZFxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5yZW1vdmVFdmVudCggZWxlbSwgdHlwZSwgZGF0YS5oYW5kbGUgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTM1IC0gNDUrXG5cdFx0XHRcdFx0Ly8gQXNzaWduIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIHVzaW5nIGRlbGV0ZSwgc2VlIERhdGEjcmVtb3ZlXG5cdFx0XHRcdFx0ZWxlbVsgZGF0YVByaXYuZXhwYW5kbyBdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggZWxlbVsgZGF0YVVzZXIuZXhwYW5kbyBdICkge1xuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NStcblx0XHRcdFx0XHQvLyBBc3NpZ24gdW5kZWZpbmVkIGluc3RlYWQgb2YgdXNpbmcgZGVsZXRlLCBzZWUgRGF0YSNyZW1vdmVcblx0XHRcdFx0XHRlbGVtWyBkYXRhVXNlci5leHBhbmRvIF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRkZXRhY2g6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gcmVtb3ZlKCB0aGlzLCBzZWxlY3RvciwgdHJ1ZSApO1xuXHR9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiByZW1vdmUoIHRoaXMsIHNlbGVjdG9yICk7XG5cdH0sXG5cblx0dGV4dDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID9cblx0XHRcdFx0alF1ZXJ5LnRleHQoIHRoaXMgKSA6XG5cdFx0XHRcdHRoaXMuZW1wdHkoKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMubm9kZVR5cGUgPT09IDEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gMTEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0XHRcdHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHR9LCBudWxsLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCApO1xuXHR9LFxuXG5cdGFwcGVuZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdHZhciB0YXJnZXQgPSBtYW5pcHVsYXRpb25UYXJnZXQoIHRoaXMsIGVsZW0gKTtcblx0XHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKCBlbGVtICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdHByZXBlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gbWFuaXB1bGF0aW9uVGFyZ2V0KCB0aGlzLCBlbGVtICk7XG5cdFx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoIGVsZW0sIHRhcmdldC5maXJzdENoaWxkICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGJlZm9yZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIGVsZW0sIHRoaXMgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0YWZ0ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5wYXJlbnROb2RlICkge1xuXHRcdFx0XHR0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBlbGVtLCB0aGlzLm5leHRTaWJsaW5nICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGVtcHR5OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZWxlbSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0Zm9yICggOyAoIGVsZW0gPSB0aGlzWyBpIF0gKSAhPSBudWxsOyBpKysgKSB7XG5cdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cblx0XHRcdFx0Ly8gUHJldmVudCBtZW1vcnkgbGVha3Ncblx0XHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCBlbGVtLCBmYWxzZSApICk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIGFueSByZW1haW5pbmcgbm9kZXNcblx0XHRcdFx0ZWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Y2xvbmU6IGZ1bmN0aW9uKCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApIHtcblx0XHRkYXRhQW5kRXZlbnRzID0gZGF0YUFuZEV2ZW50cyA9PSBudWxsID8gZmFsc2UgOiBkYXRhQW5kRXZlbnRzO1xuXHRcdGRlZXBEYXRhQW5kRXZlbnRzID0gZGVlcERhdGFBbmRFdmVudHMgPT0gbnVsbCA/IGRhdGFBbmRFdmVudHMgOiBkZWVwRGF0YUFuZEV2ZW50cztcblxuXHRcdHJldHVybiB0aGlzLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LmNsb25lKCB0aGlzLCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApO1xuXHRcdH0gKTtcblx0fSxcblxuXHRodG1sOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0dmFyIGVsZW0gPSB0aGlzWyAwIF0gfHwge30sXG5cdFx0XHRcdGkgPSAwLFxuXHRcdFx0XHRsID0gdGhpcy5sZW5ndGg7XG5cblx0XHRcdGlmICggdmFsdWUgPT09IHVuZGVmaW5lZCAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRyZXR1cm4gZWxlbS5pbm5lckhUTUw7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNlZSBpZiB3ZSBjYW4gdGFrZSBhIHNob3J0Y3V0IGFuZCBqdXN0IHVzZSBpbm5lckhUTUxcblx0XHRcdGlmICggdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmICFybm9Jbm5lcmh0bWwudGVzdCggdmFsdWUgKSAmJlxuXHRcdFx0XHQhd3JhcE1hcFsgKCBydGFnTmFtZS5leGVjKCB2YWx1ZSApIHx8IFsgXCJcIiwgXCJcIiBdIClbIDEgXS50b0xvd2VyQ2FzZSgpIF0gKSB7XG5cblx0XHRcdFx0dmFsdWUgPSBqUXVlcnkuaHRtbFByZWZpbHRlciggdmFsdWUgKTtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRcdGVsZW0gPSB0aGlzWyBpIF0gfHwge307XG5cblx0XHRcdFx0XHRcdC8vIFJlbW92ZSBlbGVtZW50IG5vZGVzIGFuZCBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuXHRcdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRcdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIGVsZW0sIGZhbHNlICkgKTtcblx0XHRcdFx0XHRcdFx0ZWxlbS5pbm5lckhUTUwgPSB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRlbGVtID0gMDtcblxuXHRcdFx0XHQvLyBJZiB1c2luZyBpbm5lckhUTUwgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgdXNlIHRoZSBmYWxsYmFjayBtZXRob2Rcblx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHRcdHRoaXMuZW1wdHkoKS5hcHBlbmQoIHZhbHVlICk7XG5cdFx0XHR9XG5cdFx0fSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggKTtcblx0fSxcblxuXHRyZXBsYWNlV2l0aDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGlnbm9yZWQgPSBbXTtcblxuXHRcdC8vIE1ha2UgdGhlIGNoYW5nZXMsIHJlcGxhY2luZyBlYWNoIG5vbi1pZ25vcmVkIGNvbnRleHQgZWxlbWVudCB3aXRoIHRoZSBuZXcgY29udGVudFxuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cblx0XHRcdGlmICggalF1ZXJ5LmluQXJyYXkoIHRoaXMsIGlnbm9yZWQgKSA8IDAgKSB7XG5cdFx0XHRcdGpRdWVyeS5jbGVhbkRhdGEoIGdldEFsbCggdGhpcyApICk7XG5cdFx0XHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQoIGVsZW0sIHRoaXMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0Ly8gRm9yY2UgY2FsbGJhY2sgaW52b2NhdGlvblxuXHRcdH0sIGlnbm9yZWQgKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCgge1xuXHRhcHBlbmRUbzogXCJhcHBlbmRcIixcblx0cHJlcGVuZFRvOiBcInByZXBlbmRcIixcblx0aW5zZXJ0QmVmb3JlOiBcImJlZm9yZVwiLFxuXHRpbnNlcnRBZnRlcjogXCJhZnRlclwiLFxuXHRyZXBsYWNlQWxsOiBcInJlcGxhY2VXaXRoXCJcbn0sIGZ1bmN0aW9uKCBuYW1lLCBvcmlnaW5hbCApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dmFyIGVsZW1zLFxuXHRcdFx0cmV0ID0gW10sXG5cdFx0XHRpbnNlcnQgPSBqUXVlcnkoIHNlbGVjdG9yICksXG5cdFx0XHRsYXN0ID0gaW5zZXJ0Lmxlbmd0aCAtIDEsXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgaSA8PSBsYXN0OyBpKysgKSB7XG5cdFx0XHRlbGVtcyA9IGkgPT09IGxhc3QgPyB0aGlzIDogdGhpcy5jbG9uZSggdHJ1ZSApO1xuXHRcdFx0alF1ZXJ5KCBpbnNlcnRbIGkgXSApWyBvcmlnaW5hbCBdKCBlbGVtcyApO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHRcdC8vIC5nZXQoKSBiZWNhdXNlIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0XHRcdHB1c2guYXBwbHkoIHJldCwgZWxlbXMuZ2V0KCkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHJldCApO1xuXHR9O1xufSApO1xudmFyIHJudW1ub25weCA9IG5ldyBSZWdFeHAoIFwiXihcIiArIHBudW0gKyBcIikoPyFweClbYS16JV0rJFwiLCBcImlcIiApO1xuXG52YXIgcmN1c3RvbVByb3AgPSAvXi0tLztcblxuXG52YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHksIEZpcmVmb3ggPD0zMCAodHJhYy0xNTA5OCwgdHJhYy0xNDE1MClcblx0XHQvLyBJRSB0aHJvd3Mgb24gZWxlbWVudHMgY3JlYXRlZCBpbiBwb3B1cHNcblx0XHQvLyBGRiBtZWFud2hpbGUgdGhyb3dzIG9uIGZyYW1lIGVsZW1lbnRzIHRocm91Z2ggXCJkZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlXCJcblx0XHR2YXIgdmlldyA9IGVsZW0ub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcblxuXHRcdGlmICggIXZpZXcgfHwgIXZpZXcub3BlbmVyICkge1xuXHRcdFx0dmlldyA9IHdpbmRvdztcblx0XHR9XG5cblx0XHRyZXR1cm4gdmlldy5nZXRDb21wdXRlZFN0eWxlKCBlbGVtICk7XG5cdH07XG5cbnZhciBzd2FwID0gZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIGNhbGxiYWNrICkge1xuXHR2YXIgcmV0LCBuYW1lLFxuXHRcdG9sZCA9IHt9O1xuXG5cdC8vIFJlbWVtYmVyIHRoZSBvbGQgdmFsdWVzLCBhbmQgaW5zZXJ0IHRoZSBuZXcgb25lc1xuXHRmb3IgKCBuYW1lIGluIG9wdGlvbnMgKSB7XG5cdFx0b2xkWyBuYW1lIF0gPSBlbGVtLnN0eWxlWyBuYW1lIF07XG5cdFx0ZWxlbS5zdHlsZVsgbmFtZSBdID0gb3B0aW9uc1sgbmFtZSBdO1xuXHR9XG5cblx0cmV0ID0gY2FsbGJhY2suY2FsbCggZWxlbSApO1xuXG5cdC8vIFJldmVydCB0aGUgb2xkIHZhbHVlc1xuXHRmb3IgKCBuYW1lIGluIG9wdGlvbnMgKSB7XG5cdFx0ZWxlbS5zdHlsZVsgbmFtZSBdID0gb2xkWyBuYW1lIF07XG5cdH1cblxuXHRyZXR1cm4gcmV0O1xufTtcblxuXG52YXIgcmJveFN0eWxlID0gbmV3IFJlZ0V4cCggY3NzRXhwYW5kLmpvaW4oIFwifFwiICksIFwiaVwiICk7XG5cblxuXG4oIGZ1bmN0aW9uKCkge1xuXG5cdC8vIEV4ZWN1dGluZyBib3RoIHBpeGVsUG9zaXRpb24gJiBib3hTaXppbmdSZWxpYWJsZSB0ZXN0cyByZXF1aXJlIG9ubHkgb25lIGxheW91dFxuXHQvLyBzbyB0aGV5J3JlIGV4ZWN1dGVkIGF0IHRoZSBzYW1lIHRpbWUgdG8gc2F2ZSB0aGUgc2Vjb25kIGNvbXB1dGF0aW9uLlxuXHRmdW5jdGlvbiBjb21wdXRlU3R5bGVUZXN0cygpIHtcblxuXHRcdC8vIFRoaXMgaXMgYSBzaW5nbGV0b24sIHdlIG5lZWQgdG8gZXhlY3V0ZSBpdCBvbmx5IG9uY2Vcblx0XHRpZiAoICFkaXYgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHg7d2lkdGg6NjBweDtcIiArXG5cdFx0XHRcIm1hcmdpbi10b3A6MXB4O3BhZGRpbmc6MDtib3JkZXI6MFwiO1xuXHRcdGRpdi5zdHlsZS5jc3NUZXh0ID1cblx0XHRcdFwicG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6c2Nyb2xsO1wiICtcblx0XHRcdFwibWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDtcIiArXG5cdFx0XHRcIndpZHRoOjYwJTt0b3A6MSVcIjtcblx0XHRkb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoIGNvbnRhaW5lciApLmFwcGVuZENoaWxkKCBkaXYgKTtcblxuXHRcdHZhciBkaXZTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBkaXYgKTtcblx0XHRwaXhlbFBvc2l0aW9uVmFsID0gZGl2U3R5bGUudG9wICE9PSBcIjElXCI7XG5cblx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCAtIDQuMyBvbmx5LCBGaXJlZm94IDw9MyAtIDQ0XG5cdFx0cmVsaWFibGVNYXJnaW5MZWZ0VmFsID0gcm91bmRQaXhlbE1lYXN1cmVzKCBkaXZTdHlsZS5tYXJnaW5MZWZ0ICkgPT09IDEyO1xuXG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgLSA0LjMgb25seSwgU2FmYXJpIDw9OS4xIC0gMTAuMSwgaU9TIDw9Ny4wIC0gOS4zXG5cdFx0Ly8gU29tZSBzdHlsZXMgY29tZSBiYWNrIHdpdGggcGVyY2VudGFnZSB2YWx1ZXMsIGV2ZW4gdGhvdWdoIHRoZXkgc2hvdWxkbid0XG5cdFx0ZGl2LnN0eWxlLnJpZ2h0ID0gXCI2MCVcIjtcblx0XHRwaXhlbEJveFN0eWxlc1ZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyggZGl2U3R5bGUucmlnaHQgKSA9PT0gMzY7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seVxuXHRcdC8vIERldGVjdCBtaXNyZXBvcnRpbmcgb2YgY29udGVudCBkaW1lbnNpb25zIGZvciBib3gtc2l6aW5nOmJvcmRlci1ib3ggZWxlbWVudHNcblx0XHRib3hTaXppbmdSZWxpYWJsZVZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyggZGl2U3R5bGUud2lkdGggKSA9PT0gMzY7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IG9ubHlcblx0XHQvLyBEZXRlY3Qgb3ZlcmZsb3c6c2Nyb2xsIHNjcmV3aW5lc3MgKGdoLTM2OTkpXG5cdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9NjRcblx0XHQvLyBEb24ndCBnZXQgdHJpY2tlZCB3aGVuIHpvb20gYWZmZWN0cyBvZmZzZXRXaWR0aCAoZ2gtNDAyOSlcblx0XHRkaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cdFx0c2Nyb2xsYm94U2l6ZVZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyggZGl2Lm9mZnNldFdpZHRoIC8gMyApID09PSAxMjtcblxuXHRcdGRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZCggY29udGFpbmVyICk7XG5cblx0XHQvLyBOdWxsaWZ5IHRoZSBkaXYgc28gaXQgd291bGRuJ3QgYmUgc3RvcmVkIGluIHRoZSBtZW1vcnkgYW5kXG5cdFx0Ly8gaXQgd2lsbCBhbHNvIGJlIGEgc2lnbiB0aGF0IGNoZWNrcyBhbHJlYWR5IHBlcmZvcm1lZFxuXHRcdGRpdiA9IG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiByb3VuZFBpeGVsTWVhc3VyZXMoIG1lYXN1cmUgKSB7XG5cdFx0cmV0dXJuIE1hdGgucm91bmQoIHBhcnNlRmxvYXQoIG1lYXN1cmUgKSApO1xuXHR9XG5cblx0dmFyIHBpeGVsUG9zaXRpb25WYWwsIGJveFNpemluZ1JlbGlhYmxlVmFsLCBzY3JvbGxib3hTaXplVmFsLCBwaXhlbEJveFN0eWxlc1ZhbCxcblx0XHRyZWxpYWJsZVRyRGltZW5zaW9uc1ZhbCwgcmVsaWFibGVNYXJnaW5MZWZ0VmFsLFxuXHRcdGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSxcblx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICk7XG5cblx0Ly8gRmluaXNoIGVhcmx5IGluIGxpbWl0ZWQgKG5vbi1icm93c2VyKSBlbnZpcm9ubWVudHNcblx0aWYgKCAhZGl2LnN0eWxlICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcblx0Ly8gU3R5bGUgb2YgY2xvbmVkIGVsZW1lbnQgYWZmZWN0cyBzb3VyY2UgZWxlbWVudCBjbG9uZWQgKHRyYWMtODkwOClcblx0ZGl2LnN0eWxlLmJhY2tncm91bmRDbGlwID0gXCJjb250ZW50LWJveFwiO1xuXHRkaXYuY2xvbmVOb2RlKCB0cnVlICkuc3R5bGUuYmFja2dyb3VuZENsaXAgPSBcIlwiO1xuXHRzdXBwb3J0LmNsZWFyQ2xvbmVTdHlsZSA9IGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9PT0gXCJjb250ZW50LWJveFwiO1xuXG5cdGpRdWVyeS5leHRlbmQoIHN1cHBvcnQsIHtcblx0XHRib3hTaXppbmdSZWxpYWJsZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIGJveFNpemluZ1JlbGlhYmxlVmFsO1xuXHRcdH0sXG5cdFx0cGl4ZWxCb3hTdHlsZXM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcblx0XHRcdHJldHVybiBwaXhlbEJveFN0eWxlc1ZhbDtcblx0XHR9LFxuXHRcdHBpeGVsUG9zaXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcblx0XHRcdHJldHVybiBwaXhlbFBvc2l0aW9uVmFsO1xuXHRcdH0sXG5cdFx0cmVsaWFibGVNYXJnaW5MZWZ0OiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbXB1dGVTdHlsZVRlc3RzKCk7XG5cdFx0XHRyZXR1cm4gcmVsaWFibGVNYXJnaW5MZWZ0VmFsO1xuXHRcdH0sXG5cdFx0c2Nyb2xsYm94U2l6ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIHNjcm9sbGJveFNpemVWYWw7XG5cdFx0fSxcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSssIEVkZ2UgMTUgLSAxOCtcblx0XHQvLyBJRS9FZGdlIG1pc3JlcG9ydCBgZ2V0Q29tcHV0ZWRTdHlsZWAgb2YgdGFibGUgcm93cyB3aXRoIHdpZHRoL2hlaWdodFxuXHRcdC8vIHNldCBpbiBDU1Mgd2hpbGUgYG9mZnNldCpgIHByb3BlcnRpZXMgcmVwb3J0IGNvcnJlY3QgdmFsdWVzLlxuXHRcdC8vIEJlaGF2aW9yIGluIElFIDkgaXMgbW9yZSBzdWJ0bGUgdGhhbiBpbiBuZXdlciB2ZXJzaW9ucyAmIGl0IHBhc3Nlc1xuXHRcdC8vIHNvbWUgdmVyc2lvbnMgb2YgdGhpcyB0ZXN0OyBtYWtlIHN1cmUgbm90IHRvIG1ha2UgaXQgcGFzcyB0aGVyZSFcblx0XHQvL1xuXHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggNzArXG5cdFx0Ly8gT25seSBGaXJlZm94IGluY2x1ZGVzIGJvcmRlciB3aWR0aHNcblx0XHQvLyBpbiBjb21wdXRlZCBkaW1lbnNpb25zLiAoZ2gtNDUyOSlcblx0XHRyZWxpYWJsZVRyRGltZW5zaW9uczogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdGFibGUsIHRyLCB0ckNoaWxkLCB0clN0eWxlO1xuXHRcdFx0aWYgKCByZWxpYWJsZVRyRGltZW5zaW9uc1ZhbCA9PSBudWxsICkge1xuXHRcdFx0XHR0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwidGFibGVcIiApO1xuXHRcdFx0XHR0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwidHJcIiApO1xuXHRcdFx0XHR0ckNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApO1xuXG5cdFx0XHRcdHRhYmxlLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTExMTExcHg7Ym9yZGVyLWNvbGxhcHNlOnNlcGFyYXRlXCI7XG5cdFx0XHRcdHRyLnN0eWxlLmNzc1RleHQgPSBcImJveC1zaXppbmc6Y29udGVudC1ib3g7Ym9yZGVyOjFweCBzb2xpZFwiO1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZSA4Nitcblx0XHRcdFx0Ly8gSGVpZ2h0IHNldCB0aHJvdWdoIGNzc1RleHQgZG9lcyBub3QgZ2V0IGFwcGxpZWQuXG5cdFx0XHRcdC8vIENvbXB1dGVkIGhlaWdodCB0aGVuIGNvbWVzIGJhY2sgYXMgMC5cblx0XHRcdFx0dHIuc3R5bGUuaGVpZ2h0ID0gXCIxcHhcIjtcblx0XHRcdFx0dHJDaGlsZC5zdHlsZS5oZWlnaHQgPSBcIjlweFwiO1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgOCBDaHJvbWUgODYrXG5cdFx0XHRcdC8vIEluIG91ciBib2R5QmFja2dyb3VuZC5odG1sIGlmcmFtZSxcblx0XHRcdFx0Ly8gZGlzcGxheSBmb3IgYWxsIGRpdiBlbGVtZW50cyBpcyBzZXQgdG8gXCJpbmxpbmVcIixcblx0XHRcdFx0Ly8gd2hpY2ggY2F1c2VzIGEgcHJvYmxlbSBvbmx5IGluIEFuZHJvaWQgOCBDaHJvbWUgODYuXG5cdFx0XHRcdC8vIEVuc3VyaW5nIHRoZSBkaXYgaXMgYGRpc3BsYXk6IGJsb2NrYFxuXHRcdFx0XHQvLyBnZXRzIGFyb3VuZCB0aGlzIGlzc3VlLlxuXHRcdFx0XHR0ckNoaWxkLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cblx0XHRcdFx0ZG9jdW1lbnRFbGVtZW50XG5cdFx0XHRcdFx0LmFwcGVuZENoaWxkKCB0YWJsZSApXG5cdFx0XHRcdFx0LmFwcGVuZENoaWxkKCB0ciApXG5cdFx0XHRcdFx0LmFwcGVuZENoaWxkKCB0ckNoaWxkICk7XG5cblx0XHRcdFx0dHJTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCB0ciApO1xuXHRcdFx0XHRyZWxpYWJsZVRyRGltZW5zaW9uc1ZhbCA9ICggcGFyc2VJbnQoIHRyU3R5bGUuaGVpZ2h0LCAxMCApICtcblx0XHRcdFx0XHRwYXJzZUludCggdHJTdHlsZS5ib3JkZXJUb3BXaWR0aCwgMTAgKSArXG5cdFx0XHRcdFx0cGFyc2VJbnQoIHRyU3R5bGUuYm9yZGVyQm90dG9tV2lkdGgsIDEwICkgKSA9PT0gdHIub2Zmc2V0SGVpZ2h0O1xuXG5cdFx0XHRcdGRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZCggdGFibGUgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZWxpYWJsZVRyRGltZW5zaW9uc1ZhbDtcblx0XHR9XG5cdH0gKTtcbn0gKSgpO1xuXG5cbmZ1bmN0aW9uIGN1ckNTUyggZWxlbSwgbmFtZSwgY29tcHV0ZWQgKSB7XG5cdHZhciB3aWR0aCwgbWluV2lkdGgsIG1heFdpZHRoLCByZXQsXG5cdFx0aXNDdXN0b21Qcm9wID0gcmN1c3RvbVByb3AudGVzdCggbmFtZSApLFxuXG5cdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA1MStcblx0XHQvLyBSZXRyaWV2aW5nIHN0eWxlIGJlZm9yZSBjb21wdXRlZCBzb21laG93XG5cdFx0Ly8gZml4ZXMgYW4gaXNzdWUgd2l0aCBnZXR0aW5nIHdyb25nIHZhbHVlc1xuXHRcdC8vIG9uIGRldGFjaGVkIGVsZW1lbnRzXG5cdFx0c3R5bGUgPSBlbGVtLnN0eWxlO1xuXG5cdGNvbXB1dGVkID0gY29tcHV0ZWQgfHwgZ2V0U3R5bGVzKCBlbGVtICk7XG5cblx0Ly8gZ2V0UHJvcGVydHlWYWx1ZSBpcyBuZWVkZWQgZm9yOlxuXHQvLyAgIC5jc3MoJ2ZpbHRlcicpIChJRSA5IG9ubHksIHRyYWMtMTI1MzcpXG5cdC8vICAgLmNzcygnLS1jdXN0b21Qcm9wZXJ0eSkgKGdoLTMxNDQpXG5cdGlmICggY29tcHV0ZWQgKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMStcblx0XHQvLyBJRSBvbmx5IHN1cHBvcnRzIGBcImZsb2F0XCJgIGluIGBnZXRQcm9wZXJ0eVZhbHVlYDsgaW4gY29tcHV0ZWQgc3R5bGVzXG5cdFx0Ly8gaXQncyBvbmx5IGF2YWlsYWJsZSBhcyBgXCJjc3NGbG9hdFwiYC4gV2Ugbm8gbG9uZ2VyIG1vZGlmeSBwcm9wZXJ0aWVzXG5cdFx0Ly8gc2VudCB0byBgLmNzcygpYCBhcGFydCBmcm9tIGNhbWVsQ2FzaW5nLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIGJvdGguXG5cdFx0Ly8gTm9ybWFsbHksIHRoaXMgd291bGQgY3JlYXRlIGRpZmZlcmVuY2UgaW4gYmVoYXZpb3I6IGlmXG5cdFx0Ly8gYGdldFByb3BlcnR5VmFsdWVgIHJldHVybnMgYW4gZW1wdHkgc3RyaW5nLCB0aGUgdmFsdWUgcmV0dXJuZWRcblx0XHQvLyBieSBgLmNzcygpYCB3b3VsZCBiZSBgdW5kZWZpbmVkYC4gVGhpcyBpcyB1c3VhbGx5IHRoZSBjYXNlIGZvclxuXHRcdC8vIGRpc2Nvbm5lY3RlZCBlbGVtZW50cy4gSG93ZXZlciwgaW4gSUUgZXZlbiBkaXNjb25uZWN0ZWQgZWxlbWVudHNcblx0XHQvLyB3aXRoIG5vIHN0eWxlcyByZXR1cm4gYFwibm9uZVwiYCBmb3IgYGdldFByb3BlcnR5VmFsdWUoIFwiZmxvYXRcIiApYFxuXHRcdHJldCA9IGNvbXB1dGVkLmdldFByb3BlcnR5VmFsdWUoIG5hbWUgKSB8fCBjb21wdXRlZFsgbmFtZSBdO1xuXG5cdFx0aWYgKCBpc0N1c3RvbVByb3AgJiYgcmV0ICkge1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDEwNSssIENocm9tZSA8PTEwNStcblx0XHRcdC8vIFNwZWMgcmVxdWlyZXMgdHJpbW1pbmcgd2hpdGVzcGFjZSBmb3IgY3VzdG9tIHByb3BlcnRpZXMgKGdoLTQ5MjYpLlxuXHRcdFx0Ly8gRmlyZWZveCBvbmx5IHRyaW1zIGxlYWRpbmcgd2hpdGVzcGFjZS4gQ2hyb21lIGp1c3QgY29sbGFwc2VzXG5cdFx0XHQvLyBib3RoIGxlYWRpbmcgJiB0cmFpbGluZyB3aGl0ZXNwYWNlIHRvIGEgc2luZ2xlIHNwYWNlLlxuXHRcdFx0Ly9cblx0XHRcdC8vIEZhbGwgYmFjayB0byBgdW5kZWZpbmVkYCBpZiBlbXB0eSBzdHJpbmcgcmV0dXJuZWQuXG5cdFx0XHQvLyBUaGlzIGNvbGxhcHNlcyBhIG1pc3NpbmcgZGVmaW5pdGlvbiB3aXRoIHByb3BlcnR5IGRlZmluZWRcblx0XHRcdC8vIGFuZCBzZXQgdG8gYW4gZW1wdHkgc3RyaW5nIGJ1dCB0aGVyZSdzIG5vIHN0YW5kYXJkIEFQSVxuXHRcdFx0Ly8gYWxsb3dpbmcgdXMgdG8gZGlmZmVyZW50aWF0ZSB0aGVtIHdpdGhvdXQgYSBwZXJmb3JtYW5jZSBwZW5hbHR5XG5cdFx0XHQvLyBhbmQgcmV0dXJuaW5nIGB1bmRlZmluZWRgIGFsaWducyB3aXRoIG9sZGVyIGpRdWVyeS5cblx0XHRcdC8vXG5cdFx0XHQvLyBydHJpbUNTUyB0cmVhdHMgVSswMDBEIENBUlJJQUdFIFJFVFVSTiBhbmQgVSswMDBDIEZPUk0gRkVFRFxuXHRcdFx0Ly8gYXMgd2hpdGVzcGFjZSB3aGlsZSBDU1MgZG9lcyBub3QsIGJ1dCB0aGlzIGlzIG5vdCBhIHByb2JsZW1cblx0XHRcdC8vIGJlY2F1c2UgQ1NTIHByZXByb2Nlc3NpbmcgcmVwbGFjZXMgdGhlbSB3aXRoIFUrMDAwQSBMSU5FIEZFRURcblx0XHRcdC8vICh3aGljaCAqaXMqIENTUyB3aGl0ZXNwYWNlKVxuXHRcdFx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zeW50YXgtMy8jaW5wdXQtcHJlcHJvY2Vzc2luZ1xuXHRcdFx0cmV0ID0gcmV0LnJlcGxhY2UoIHJ0cmltQ1NTLCBcIiQxXCIgKSB8fCB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKCByZXQgPT09IFwiXCIgJiYgIWlzQXR0YWNoZWQoIGVsZW0gKSApIHtcblx0XHRcdHJldCA9IGpRdWVyeS5zdHlsZSggZWxlbSwgbmFtZSApO1xuXHRcdH1cblxuXHRcdC8vIEEgdHJpYnV0ZSB0byB0aGUgXCJhd2Vzb21lIGhhY2sgYnkgRGVhbiBFZHdhcmRzXCJcblx0XHQvLyBBbmRyb2lkIEJyb3dzZXIgcmV0dXJucyBwZXJjZW50YWdlIGZvciBzb21lIHZhbHVlcyxcblx0XHQvLyBidXQgd2lkdGggc2VlbXMgdG8gYmUgcmVsaWFibHkgcGl4ZWxzLlxuXHRcdC8vIFRoaXMgaXMgYWdhaW5zdCB0aGUgQ1NTT00gZHJhZnQgc3BlYzpcblx0XHQvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20vI3Jlc29sdmVkLXZhbHVlc1xuXHRcdGlmICggIXN1cHBvcnQucGl4ZWxCb3hTdHlsZXMoKSAmJiBybnVtbm9ucHgudGVzdCggcmV0ICkgJiYgcmJveFN0eWxlLnRlc3QoIG5hbWUgKSApIHtcblxuXHRcdFx0Ly8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuXHRcdFx0d2lkdGggPSBzdHlsZS53aWR0aDtcblx0XHRcdG1pbldpZHRoID0gc3R5bGUubWluV2lkdGg7XG5cdFx0XHRtYXhXaWR0aCA9IHN0eWxlLm1heFdpZHRoO1xuXG5cdFx0XHQvLyBQdXQgaW4gdGhlIG5ldyB2YWx1ZXMgdG8gZ2V0IGEgY29tcHV0ZWQgdmFsdWUgb3V0XG5cdFx0XHRzdHlsZS5taW5XaWR0aCA9IHN0eWxlLm1heFdpZHRoID0gc3R5bGUud2lkdGggPSByZXQ7XG5cdFx0XHRyZXQgPSBjb21wdXRlZC53aWR0aDtcblxuXHRcdFx0Ly8gUmV2ZXJ0IHRoZSBjaGFuZ2VkIHZhbHVlc1xuXHRcdFx0c3R5bGUud2lkdGggPSB3aWR0aDtcblx0XHRcdHN0eWxlLm1pbldpZHRoID0gbWluV2lkdGg7XG5cdFx0XHRzdHlsZS5tYXhXaWR0aCA9IG1heFdpZHRoO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXQgIT09IHVuZGVmaW5lZCA/XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG5cdFx0Ly8gSUUgcmV0dXJucyB6SW5kZXggdmFsdWUgYXMgYW4gaW50ZWdlci5cblx0XHRyZXQgKyBcIlwiIDpcblx0XHRyZXQ7XG59XG5cblxuZnVuY3Rpb24gYWRkR2V0SG9va0lmKCBjb25kaXRpb25GbiwgaG9va0ZuICkge1xuXG5cdC8vIERlZmluZSB0aGUgaG9vaywgd2UnbGwgY2hlY2sgb24gdGhlIGZpcnN0IHJ1biBpZiBpdCdzIHJlYWxseSBuZWVkZWQuXG5cdHJldHVybiB7XG5cdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggY29uZGl0aW9uRm4oKSApIHtcblxuXHRcdFx0XHQvLyBIb29rIG5vdCBuZWVkZWQgKG9yIGl0J3Mgbm90IHBvc3NpYmxlIHRvIHVzZSBpdCBkdWVcblx0XHRcdFx0Ly8gdG8gbWlzc2luZyBkZXBlbmRlbmN5KSwgcmVtb3ZlIGl0LlxuXHRcdFx0XHRkZWxldGUgdGhpcy5nZXQ7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSG9vayBuZWVkZWQ7IHJlZGVmaW5lIGl0IHNvIHRoYXQgdGhlIHN1cHBvcnQgdGVzdCBpcyBub3QgZXhlY3V0ZWQgYWdhaW4uXG5cdFx0XHRyZXR1cm4gKCB0aGlzLmdldCA9IGhvb2tGbiApLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHR9XG5cdH07XG59XG5cblxudmFyIGNzc1ByZWZpeGVzID0gWyBcIldlYmtpdFwiLCBcIk1velwiLCBcIm1zXCIgXSxcblx0ZW1wdHlTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKS5zdHlsZSxcblx0dmVuZG9yUHJvcHMgPSB7fTtcblxuLy8gUmV0dXJuIGEgdmVuZG9yLXByZWZpeGVkIHByb3BlcnR5IG9yIHVuZGVmaW5lZFxuZnVuY3Rpb24gdmVuZG9yUHJvcE5hbWUoIG5hbWUgKSB7XG5cblx0Ly8gQ2hlY2sgZm9yIHZlbmRvciBwcmVmaXhlZCBuYW1lc1xuXHR2YXIgY2FwTmFtZSA9IG5hbWVbIDAgXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSggMSApLFxuXHRcdGkgPSBjc3NQcmVmaXhlcy5sZW5ndGg7XG5cblx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0bmFtZSA9IGNzc1ByZWZpeGVzWyBpIF0gKyBjYXBOYW1lO1xuXHRcdGlmICggbmFtZSBpbiBlbXB0eVN0eWxlICkge1xuXHRcdFx0cmV0dXJuIG5hbWU7XG5cdFx0fVxuXHR9XG59XG5cbi8vIFJldHVybiBhIHBvdGVudGlhbGx5LW1hcHBlZCBqUXVlcnkuY3NzUHJvcHMgb3IgdmVuZG9yIHByZWZpeGVkIHByb3BlcnR5XG5mdW5jdGlvbiBmaW5hbFByb3BOYW1lKCBuYW1lICkge1xuXHR2YXIgZmluYWwgPSBqUXVlcnkuY3NzUHJvcHNbIG5hbWUgXSB8fCB2ZW5kb3JQcm9wc1sgbmFtZSBdO1xuXG5cdGlmICggZmluYWwgKSB7XG5cdFx0cmV0dXJuIGZpbmFsO1xuXHR9XG5cdGlmICggbmFtZSBpbiBlbXB0eVN0eWxlICkge1xuXHRcdHJldHVybiBuYW1lO1xuXHR9XG5cdHJldHVybiB2ZW5kb3JQcm9wc1sgbmFtZSBdID0gdmVuZG9yUHJvcE5hbWUoIG5hbWUgKSB8fCBuYW1lO1xufVxuXG5cbnZhclxuXG5cdC8vIFN3YXBwYWJsZSBpZiBkaXNwbGF5IGlzIG5vbmUgb3Igc3RhcnRzIHdpdGggdGFibGVcblx0Ly8gZXhjZXB0IFwidGFibGVcIiwgXCJ0YWJsZS1jZWxsXCIsIG9yIFwidGFibGUtY2FwdGlvblwiXG5cdC8vIFNlZSBoZXJlIGZvciBkaXNwbGF5IHZhbHVlczogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9DU1MvZGlzcGxheVxuXHRyZGlzcGxheXN3YXAgPSAvXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sXG5cdGNzc1Nob3cgPSB7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiB9LFxuXHRjc3NOb3JtYWxUcmFuc2Zvcm0gPSB7XG5cdFx0bGV0dGVyU3BhY2luZzogXCIwXCIsXG5cdFx0Zm9udFdlaWdodDogXCI0MDBcIlxuXHR9O1xuXG5mdW5jdGlvbiBzZXRQb3NpdGl2ZU51bWJlciggX2VsZW0sIHZhbHVlLCBzdWJ0cmFjdCApIHtcblxuXHQvLyBBbnkgcmVsYXRpdmUgKCsvLSkgdmFsdWVzIGhhdmUgYWxyZWFkeSBiZWVuXG5cdC8vIG5vcm1hbGl6ZWQgYXQgdGhpcyBwb2ludFxuXHR2YXIgbWF0Y2hlcyA9IHJjc3NOdW0uZXhlYyggdmFsdWUgKTtcblx0cmV0dXJuIG1hdGNoZXMgP1xuXG5cdFx0Ly8gR3VhcmQgYWdhaW5zdCB1bmRlZmluZWQgXCJzdWJ0cmFjdFwiLCBlLmcuLCB3aGVuIHVzZWQgYXMgaW4gY3NzSG9va3Ncblx0XHRNYXRoLm1heCggMCwgbWF0Y2hlc1sgMiBdIC0gKCBzdWJ0cmFjdCB8fCAwICkgKSArICggbWF0Y2hlc1sgMyBdIHx8IFwicHhcIiApIDpcblx0XHR2YWx1ZTtcbn1cblxuZnVuY3Rpb24gYm94TW9kZWxBZGp1c3RtZW50KCBlbGVtLCBkaW1lbnNpb24sIGJveCwgaXNCb3JkZXJCb3gsIHN0eWxlcywgY29tcHV0ZWRWYWwgKSB7XG5cdHZhciBpID0gZGltZW5zaW9uID09PSBcIndpZHRoXCIgPyAxIDogMCxcblx0XHRleHRyYSA9IDAsXG5cdFx0ZGVsdGEgPSAwLFxuXHRcdG1hcmdpbkRlbHRhID0gMDtcblxuXHQvLyBBZGp1c3RtZW50IG1heSBub3QgYmUgbmVjZXNzYXJ5XG5cdGlmICggYm94ID09PSAoIGlzQm9yZGVyQm94ID8gXCJib3JkZXJcIiA6IFwiY29udGVudFwiICkgKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRmb3IgKCA7IGkgPCA0OyBpICs9IDIgKSB7XG5cblx0XHQvLyBCb3RoIGJveCBtb2RlbHMgZXhjbHVkZSBtYXJnaW5cblx0XHQvLyBDb3VudCBtYXJnaW4gZGVsdGEgc2VwYXJhdGVseSB0byBvbmx5IGFkZCBpdCBhZnRlciBzY3JvbGwgZ3V0dGVyIGFkanVzdG1lbnQuXG5cdFx0Ly8gVGhpcyBpcyBuZWVkZWQgdG8gbWFrZSBuZWdhdGl2ZSBtYXJnaW5zIHdvcmsgd2l0aCBgb3V0ZXJIZWlnaHQoIHRydWUgKWAgKGdoLTM5ODIpLlxuXHRcdGlmICggYm94ID09PSBcIm1hcmdpblwiICkge1xuXHRcdFx0bWFyZ2luRGVsdGEgKz0galF1ZXJ5LmNzcyggZWxlbSwgYm94ICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuXHRcdH1cblxuXHRcdC8vIElmIHdlIGdldCBoZXJlIHdpdGggYSBjb250ZW50LWJveCwgd2UncmUgc2Vla2luZyBcInBhZGRpbmdcIiBvciBcImJvcmRlclwiIG9yIFwibWFyZ2luXCJcblx0XHRpZiAoICFpc0JvcmRlckJveCApIHtcblxuXHRcdFx0Ly8gQWRkIHBhZGRpbmdcblx0XHRcdGRlbHRhICs9IGpRdWVyeS5jc3MoIGVsZW0sIFwicGFkZGluZ1wiICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuXG5cdFx0XHQvLyBGb3IgXCJib3JkZXJcIiBvciBcIm1hcmdpblwiLCBhZGQgYm9yZGVyXG5cdFx0XHRpZiAoIGJveCAhPT0gXCJwYWRkaW5nXCIgKSB7XG5cdFx0XHRcdGRlbHRhICs9IGpRdWVyeS5jc3MoIGVsZW0sIFwiYm9yZGVyXCIgKyBjc3NFeHBhbmRbIGkgXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzICk7XG5cblx0XHRcdC8vIEJ1dCBzdGlsbCBrZWVwIHRyYWNrIG9mIGl0IG90aGVyd2lzZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZXh0cmEgKz0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFsgaSBdICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMgKTtcblx0XHRcdH1cblxuXHRcdC8vIElmIHdlIGdldCBoZXJlIHdpdGggYSBib3JkZXItYm94IChjb250ZW50ICsgcGFkZGluZyArIGJvcmRlciksIHdlJ3JlIHNlZWtpbmcgXCJjb250ZW50XCIgb3Jcblx0XHQvLyBcInBhZGRpbmdcIiBvciBcIm1hcmdpblwiXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gRm9yIFwiY29udGVudFwiLCBzdWJ0cmFjdCBwYWRkaW5nXG5cdFx0XHRpZiAoIGJveCA9PT0gXCJjb250ZW50XCIgKSB7XG5cdFx0XHRcdGRlbHRhIC09IGpRdWVyeS5jc3MoIGVsZW0sIFwicGFkZGluZ1wiICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3IgXCJjb250ZW50XCIgb3IgXCJwYWRkaW5nXCIsIHN1YnRyYWN0IGJvcmRlclxuXHRcdFx0aWYgKCBib3ggIT09IFwibWFyZ2luXCIgKSB7XG5cdFx0XHRcdGRlbHRhIC09IGpRdWVyeS5jc3MoIGVsZW0sIFwiYm9yZGVyXCIgKyBjc3NFeHBhbmRbIGkgXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQWNjb3VudCBmb3IgcG9zaXRpdmUgY29udGVudC1ib3ggc2Nyb2xsIGd1dHRlciB3aGVuIHJlcXVlc3RlZCBieSBwcm92aWRpbmcgY29tcHV0ZWRWYWxcblx0aWYgKCAhaXNCb3JkZXJCb3ggJiYgY29tcHV0ZWRWYWwgPj0gMCApIHtcblxuXHRcdC8vIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBpcyBhIHJvdW5kZWQgc3VtIG9mIGNvbnRlbnQsIHBhZGRpbmcsIHNjcm9sbCBndXR0ZXIsIGFuZCBib3JkZXJcblx0XHQvLyBBc3N1bWluZyBpbnRlZ2VyIHNjcm9sbCBndXR0ZXIsIHN1YnRyYWN0IHRoZSByZXN0IGFuZCByb3VuZCBkb3duXG5cdFx0ZGVsdGEgKz0gTWF0aC5tYXgoIDAsIE1hdGguY2VpbChcblx0XHRcdGVsZW1bIFwib2Zmc2V0XCIgKyBkaW1lbnNpb25bIDAgXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKCAxICkgXSAtXG5cdFx0XHRjb21wdXRlZFZhbCAtXG5cdFx0XHRkZWx0YSAtXG5cdFx0XHRleHRyYSAtXG5cdFx0XHQwLjVcblxuXHRcdC8vIElmIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBpcyB1bmtub3duLCB0aGVuIHdlIGNhbid0IGRldGVybWluZSBjb250ZW50LWJveCBzY3JvbGwgZ3V0dGVyXG5cdFx0Ly8gVXNlIGFuIGV4cGxpY2l0IHplcm8gdG8gYXZvaWQgTmFOIChnaC0zOTY0KVxuXHRcdCkgKSB8fCAwO1xuXHR9XG5cblx0cmV0dXJuIGRlbHRhICsgbWFyZ2luRGVsdGE7XG59XG5cbmZ1bmN0aW9uIGdldFdpZHRoT3JIZWlnaHQoIGVsZW0sIGRpbWVuc2lvbiwgZXh0cmEgKSB7XG5cblx0Ly8gU3RhcnQgd2l0aCBjb21wdXRlZCBzdHlsZVxuXHR2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKCBlbGVtICksXG5cblx0XHQvLyBUbyBhdm9pZCBmb3JjaW5nIGEgcmVmbG93LCBvbmx5IGZldGNoIGJveFNpemluZyBpZiB3ZSBuZWVkIGl0IChnaC00MzIyKS5cblx0XHQvLyBGYWtlIGNvbnRlbnQtYm94IHVudGlsIHdlIGtub3cgaXQncyBuZWVkZWQgdG8ga25vdyB0aGUgdHJ1ZSB2YWx1ZS5cblx0XHRib3hTaXppbmdOZWVkZWQgPSAhc3VwcG9ydC5ib3hTaXppbmdSZWxpYWJsZSgpIHx8IGV4dHJhLFxuXHRcdGlzQm9yZGVyQm94ID0gYm94U2l6aW5nTmVlZGVkICYmXG5cdFx0XHRqUXVlcnkuY3NzKCBlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzICkgPT09IFwiYm9yZGVyLWJveFwiLFxuXHRcdHZhbHVlSXNCb3JkZXJCb3ggPSBpc0JvcmRlckJveCxcblxuXHRcdHZhbCA9IGN1ckNTUyggZWxlbSwgZGltZW5zaW9uLCBzdHlsZXMgKSxcblx0XHRvZmZzZXRQcm9wID0gXCJvZmZzZXRcIiArIGRpbWVuc2lvblsgMCBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoIDEgKTtcblxuXHQvLyBTdXBwb3J0OiBGaXJlZm94IDw9NTRcblx0Ly8gUmV0dXJuIGEgY29uZm91bmRpbmcgbm9uLXBpeGVsIHZhbHVlIG9yIGZlaWduIGlnbm9yYW5jZSwgYXMgYXBwcm9wcmlhdGUuXG5cdGlmICggcm51bW5vbnB4LnRlc3QoIHZhbCApICkge1xuXHRcdGlmICggIWV4dHJhICkge1xuXHRcdFx0cmV0dXJuIHZhbDtcblx0XHR9XG5cdFx0dmFsID0gXCJhdXRvXCI7XG5cdH1cblxuXG5cdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSBvbmx5XG5cdC8vIFVzZSBvZmZzZXRXaWR0aC9vZmZzZXRIZWlnaHQgZm9yIHdoZW4gYm94IHNpemluZyBpcyB1bnJlbGlhYmxlLlxuXHQvLyBJbiB0aG9zZSBjYXNlcywgdGhlIGNvbXB1dGVkIHZhbHVlIGNhbiBiZSB0cnVzdGVkIHRvIGJlIGJvcmRlci1ib3guXG5cdGlmICggKCAhc3VwcG9ydC5ib3hTaXppbmdSZWxpYWJsZSgpICYmIGlzQm9yZGVyQm94IHx8XG5cblx0XHQvLyBTdXBwb3J0OiBJRSAxMCAtIDExKywgRWRnZSAxNSAtIDE4K1xuXHRcdC8vIElFL0VkZ2UgbWlzcmVwb3J0IGBnZXRDb21wdXRlZFN0eWxlYCBvZiB0YWJsZSByb3dzIHdpdGggd2lkdGgvaGVpZ2h0XG5cdFx0Ly8gc2V0IGluIENTUyB3aGlsZSBgb2Zmc2V0KmAgcHJvcGVydGllcyByZXBvcnQgY29ycmVjdCB2YWx1ZXMuXG5cdFx0Ly8gSW50ZXJlc3RpbmdseSwgaW4gc29tZSBjYXNlcyBJRSA5IGRvZXNuJ3Qgc3VmZmVyIGZyb20gdGhpcyBpc3N1ZS5cblx0XHQhc3VwcG9ydC5yZWxpYWJsZVRyRGltZW5zaW9ucygpICYmIG5vZGVOYW1lKCBlbGVtLCBcInRyXCIgKSB8fFxuXG5cdFx0Ly8gRmFsbCBiYWNrIHRvIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCB3aGVuIHZhbHVlIGlzIFwiYXV0b1wiXG5cdFx0Ly8gVGhpcyBoYXBwZW5zIGZvciBpbmxpbmUgZWxlbWVudHMgd2l0aCBubyBleHBsaWNpdCBzZXR0aW5nIChnaC0zNTcxKVxuXHRcdHZhbCA9PT0gXCJhdXRvXCIgfHxcblxuXHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjEgLSA0LjMgb25seVxuXHRcdC8vIEFsc28gdXNlIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBmb3IgbWlzcmVwb3J0ZWQgaW5saW5lIGRpbWVuc2lvbnMgKGdoLTM2MDIpXG5cdFx0IXBhcnNlRmxvYXQoIHZhbCApICYmIGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiLCBmYWxzZSwgc3R5bGVzICkgPT09IFwiaW5saW5lXCIgKSAmJlxuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzIHZpc2libGUgJiBjb25uZWN0ZWRcblx0XHRlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoICkge1xuXG5cdFx0aXNCb3JkZXJCb3ggPSBqUXVlcnkuY3NzKCBlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzICkgPT09IFwiYm9yZGVyLWJveFwiO1xuXG5cdFx0Ly8gV2hlcmUgYXZhaWxhYmxlLCBvZmZzZXRXaWR0aC9vZmZzZXRIZWlnaHQgYXBwcm94aW1hdGUgYm9yZGVyIGJveCBkaW1lbnNpb25zLlxuXHRcdC8vIFdoZXJlIG5vdCBhdmFpbGFibGUgKGUuZy4sIFNWRyksIGFzc3VtZSB1bnJlbGlhYmxlIGJveC1zaXppbmcgYW5kIGludGVycHJldCB0aGVcblx0XHQvLyByZXRyaWV2ZWQgdmFsdWUgYXMgYSBjb250ZW50IGJveCBkaW1lbnNpb24uXG5cdFx0dmFsdWVJc0JvcmRlckJveCA9IG9mZnNldFByb3AgaW4gZWxlbTtcblx0XHRpZiAoIHZhbHVlSXNCb3JkZXJCb3ggKSB7XG5cdFx0XHR2YWwgPSBlbGVtWyBvZmZzZXRQcm9wIF07XG5cdFx0fVxuXHR9XG5cblx0Ly8gTm9ybWFsaXplIFwiXCIgYW5kIGF1dG9cblx0dmFsID0gcGFyc2VGbG9hdCggdmFsICkgfHwgMDtcblxuXHQvLyBBZGp1c3QgZm9yIHRoZSBlbGVtZW50J3MgYm94IG1vZGVsXG5cdHJldHVybiAoIHZhbCArXG5cdFx0Ym94TW9kZWxBZGp1c3RtZW50KFxuXHRcdFx0ZWxlbSxcblx0XHRcdGRpbWVuc2lvbixcblx0XHRcdGV4dHJhIHx8ICggaXNCb3JkZXJCb3ggPyBcImJvcmRlclwiIDogXCJjb250ZW50XCIgKSxcblx0XHRcdHZhbHVlSXNCb3JkZXJCb3gsXG5cdFx0XHRzdHlsZXMsXG5cblx0XHRcdC8vIFByb3ZpZGUgdGhlIGN1cnJlbnQgY29tcHV0ZWQgc2l6ZSB0byByZXF1ZXN0IHNjcm9sbCBndXR0ZXIgY2FsY3VsYXRpb24gKGdoLTM1ODkpXG5cdFx0XHR2YWxcblx0XHQpXG5cdCkgKyBcInB4XCI7XG59XG5cbmpRdWVyeS5leHRlbmQoIHtcblxuXHQvLyBBZGQgaW4gc3R5bGUgcHJvcGVydHkgaG9va3MgZm9yIG92ZXJyaWRpbmcgdGhlIGRlZmF1bHRcblx0Ly8gYmVoYXZpb3Igb2YgZ2V0dGluZyBhbmQgc2V0dGluZyBhIHN0eWxlIHByb3BlcnR5XG5cdGNzc0hvb2tzOiB7XG5cdFx0b3BhY2l0eToge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQgKSB7XG5cdFx0XHRcdGlmICggY29tcHV0ZWQgKSB7XG5cblx0XHRcdFx0XHQvLyBXZSBzaG91bGQgYWx3YXlzIGdldCBhIG51bWJlciBiYWNrIGZyb20gb3BhY2l0eVxuXHRcdFx0XHRcdHZhciByZXQgPSBjdXJDU1MoIGVsZW0sIFwib3BhY2l0eVwiICk7XG5cdFx0XHRcdFx0cmV0dXJuIHJldCA9PT0gXCJcIiA/IFwiMVwiIDogcmV0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdC8vIERvbid0IGF1dG9tYXRpY2FsbHkgYWRkIFwicHhcIiB0byB0aGVzZSBwb3NzaWJseS11bml0bGVzcyBwcm9wZXJ0aWVzXG5cdGNzc051bWJlcjoge1xuXHRcdGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiB0cnVlLFxuXHRcdGFzcGVjdFJhdGlvOiB0cnVlLFxuXHRcdGJvcmRlckltYWdlU2xpY2U6IHRydWUsXG5cdFx0Y29sdW1uQ291bnQ6IHRydWUsXG5cdFx0ZmxleEdyb3c6IHRydWUsXG5cdFx0ZmxleFNocmluazogdHJ1ZSxcblx0XHRmb250V2VpZ2h0OiB0cnVlLFxuXHRcdGdyaWRBcmVhOiB0cnVlLFxuXHRcdGdyaWRDb2x1bW46IHRydWUsXG5cdFx0Z3JpZENvbHVtbkVuZDogdHJ1ZSxcblx0XHRncmlkQ29sdW1uU3RhcnQ6IHRydWUsXG5cdFx0Z3JpZFJvdzogdHJ1ZSxcblx0XHRncmlkUm93RW5kOiB0cnVlLFxuXHRcdGdyaWRSb3dTdGFydDogdHJ1ZSxcblx0XHRsaW5lSGVpZ2h0OiB0cnVlLFxuXHRcdG9wYWNpdHk6IHRydWUsXG5cdFx0b3JkZXI6IHRydWUsXG5cdFx0b3JwaGFuczogdHJ1ZSxcblx0XHRzY2FsZTogdHJ1ZSxcblx0XHR3aWRvd3M6IHRydWUsXG5cdFx0ekluZGV4OiB0cnVlLFxuXHRcdHpvb206IHRydWUsXG5cblx0XHQvLyBTVkctcmVsYXRlZFxuXHRcdGZpbGxPcGFjaXR5OiB0cnVlLFxuXHRcdGZsb29kT3BhY2l0eTogdHJ1ZSxcblx0XHRzdG9wT3BhY2l0eTogdHJ1ZSxcblx0XHRzdHJva2VNaXRlcmxpbWl0OiB0cnVlLFxuXHRcdHN0cm9rZU9wYWNpdHk6IHRydWVcblx0fSxcblxuXHQvLyBBZGQgaW4gcHJvcGVydGllcyB3aG9zZSBuYW1lcyB5b3Ugd2lzaCB0byBmaXggYmVmb3JlXG5cdC8vIHNldHRpbmcgb3IgZ2V0dGluZyB0aGUgdmFsdWVcblx0Y3NzUHJvcHM6IHt9LFxuXG5cdC8vIEdldCBhbmQgc2V0IHRoZSBzdHlsZSBwcm9wZXJ0eSBvbiBhIERPTSBOb2RlXG5cdHN0eWxlOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUsIGV4dHJhICkge1xuXG5cdFx0Ly8gRG9uJ3Qgc2V0IHN0eWxlcyBvbiB0ZXh0IGFuZCBjb21tZW50IG5vZGVzXG5cdFx0aWYgKCAhZWxlbSB8fCBlbGVtLm5vZGVUeXBlID09PSAzIHx8IGVsZW0ubm9kZVR5cGUgPT09IDggfHwgIWVsZW0uc3R5bGUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lXG5cdFx0dmFyIHJldCwgdHlwZSwgaG9va3MsXG5cdFx0XHRvcmlnTmFtZSA9IGNhbWVsQ2FzZSggbmFtZSApLFxuXHRcdFx0aXNDdXN0b21Qcm9wID0gcmN1c3RvbVByb3AudGVzdCggbmFtZSApLFxuXHRcdFx0c3R5bGUgPSBlbGVtLnN0eWxlO1xuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lLiBXZSBkb24ndFxuXHRcdC8vIHdhbnQgdG8gcXVlcnkgdGhlIHZhbHVlIGlmIGl0IGlzIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eVxuXHRcdC8vIHNpbmNlIHRoZXkgYXJlIHVzZXItZGVmaW5lZC5cblx0XHRpZiAoICFpc0N1c3RvbVByb3AgKSB7XG5cdFx0XHRuYW1lID0gZmluYWxQcm9wTmFtZSggb3JpZ05hbWUgKTtcblx0XHR9XG5cblx0XHQvLyBHZXRzIGhvb2sgZm9yIHRoZSBwcmVmaXhlZCB2ZXJzaW9uLCB0aGVuIHVucHJlZml4ZWQgdmVyc2lvblxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF0gfHwgalF1ZXJ5LmNzc0hvb2tzWyBvcmlnTmFtZSBdO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgd2UncmUgc2V0dGluZyBhIHZhbHVlXG5cdFx0aWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0dHlwZSA9IHR5cGVvZiB2YWx1ZTtcblxuXHRcdFx0Ly8gQ29udmVydCBcIis9XCIgb3IgXCItPVwiIHRvIHJlbGF0aXZlIG51bWJlcnMgKHRyYWMtNzM0NSlcblx0XHRcdGlmICggdHlwZSA9PT0gXCJzdHJpbmdcIiAmJiAoIHJldCA9IHJjc3NOdW0uZXhlYyggdmFsdWUgKSApICYmIHJldFsgMSBdICkge1xuXHRcdFx0XHR2YWx1ZSA9IGFkanVzdENTUyggZWxlbSwgbmFtZSwgcmV0ICk7XG5cblx0XHRcdFx0Ly8gRml4ZXMgYnVnIHRyYWMtOTIzN1xuXHRcdFx0XHR0eXBlID0gXCJudW1iZXJcIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTWFrZSBzdXJlIHRoYXQgbnVsbCBhbmQgTmFOIHZhbHVlcyBhcmVuJ3Qgc2V0ICh0cmFjLTcxMTYpXG5cdFx0XHRpZiAoIHZhbHVlID09IG51bGwgfHwgdmFsdWUgIT09IHZhbHVlICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIGEgbnVtYmVyIHdhcyBwYXNzZWQgaW4sIGFkZCB0aGUgdW5pdCAoZXhjZXB0IGZvciBjZXJ0YWluIENTUyBwcm9wZXJ0aWVzKVxuXHRcdFx0Ly8gVGhlIGlzQ3VzdG9tUHJvcCBjaGVjayBjYW4gYmUgcmVtb3ZlZCBpbiBqUXVlcnkgNC4wIHdoZW4gd2Ugb25seSBhdXRvLWFwcGVuZFxuXHRcdFx0Ly8gXCJweFwiIHRvIGEgZmV3IGhhcmRjb2RlZCB2YWx1ZXMuXG5cdFx0XHRpZiAoIHR5cGUgPT09IFwibnVtYmVyXCIgJiYgIWlzQ3VzdG9tUHJvcCApIHtcblx0XHRcdFx0dmFsdWUgKz0gcmV0ICYmIHJldFsgMyBdIHx8ICggalF1ZXJ5LmNzc051bWJlclsgb3JpZ05hbWUgXSA/IFwiXCIgOiBcInB4XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYmFja2dyb3VuZC0qIHByb3BzIGFmZmVjdCBvcmlnaW5hbCBjbG9uZSdzIHZhbHVlc1xuXHRcdFx0aWYgKCAhc3VwcG9ydC5jbGVhckNsb25lU3R5bGUgJiYgdmFsdWUgPT09IFwiXCIgJiYgbmFtZS5pbmRleE9mKCBcImJhY2tncm91bmRcIiApID09PSAwICkge1xuXHRcdFx0XHRzdHlsZVsgbmFtZSBdID0gXCJpbmhlcml0XCI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQsIHVzZSB0aGF0IHZhbHVlLCBvdGhlcndpc2UganVzdCBzZXQgdGhlIHNwZWNpZmllZCB2YWx1ZVxuXHRcdFx0aWYgKCAhaG9va3MgfHwgISggXCJzZXRcIiBpbiBob29rcyApIHx8XG5cdFx0XHRcdCggdmFsdWUgPSBob29rcy5zZXQoIGVsZW0sIHZhbHVlLCBleHRyYSApICkgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRpZiAoIGlzQ3VzdG9tUHJvcCApIHtcblx0XHRcdFx0XHRzdHlsZS5zZXRQcm9wZXJ0eSggbmFtZSwgdmFsdWUgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdHlsZVsgbmFtZSBdID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQgZ2V0IHRoZSBub24tY29tcHV0ZWQgdmFsdWUgZnJvbSB0aGVyZVxuXHRcdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmXG5cdFx0XHRcdCggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBmYWxzZSwgZXh0cmEgKSApICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gT3RoZXJ3aXNlIGp1c3QgZ2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBzdHlsZSBvYmplY3Rcblx0XHRcdHJldHVybiBzdHlsZVsgbmFtZSBdO1xuXHRcdH1cblx0fSxcblxuXHRjc3M6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBleHRyYSwgc3R5bGVzICkge1xuXHRcdHZhciB2YWwsIG51bSwgaG9va3MsXG5cdFx0XHRvcmlnTmFtZSA9IGNhbWVsQ2FzZSggbmFtZSApLFxuXHRcdFx0aXNDdXN0b21Qcm9wID0gcmN1c3RvbVByb3AudGVzdCggbmFtZSApO1xuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lLiBXZSBkb24ndFxuXHRcdC8vIHdhbnQgdG8gbW9kaWZ5IHRoZSB2YWx1ZSBpZiBpdCBpcyBhIENTUyBjdXN0b20gcHJvcGVydHlcblx0XHQvLyBzaW5jZSB0aGV5IGFyZSB1c2VyLWRlZmluZWQuXG5cdFx0aWYgKCAhaXNDdXN0b21Qcm9wICkge1xuXHRcdFx0bmFtZSA9IGZpbmFsUHJvcE5hbWUoIG9yaWdOYW1lICk7XG5cdFx0fVxuXG5cdFx0Ly8gVHJ5IHByZWZpeGVkIG5hbWUgZm9sbG93ZWQgYnkgdGhlIHVucHJlZml4ZWQgbmFtZVxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF0gfHwgalF1ZXJ5LmNzc0hvb2tzWyBvcmlnTmFtZSBdO1xuXG5cdFx0Ly8gSWYgYSBob29rIHdhcyBwcm92aWRlZCBnZXQgdGhlIGNvbXB1dGVkIHZhbHVlIGZyb20gdGhlcmVcblx0XHRpZiAoIGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgKSB7XG5cdFx0XHR2YWwgPSBob29rcy5nZXQoIGVsZW0sIHRydWUsIGV4dHJhICk7XG5cdFx0fVxuXG5cdFx0Ly8gT3RoZXJ3aXNlLCBpZiBhIHdheSB0byBnZXQgdGhlIGNvbXB1dGVkIHZhbHVlIGV4aXN0cywgdXNlIHRoYXRcblx0XHRpZiAoIHZhbCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0dmFsID0gY3VyQ1NTKCBlbGVtLCBuYW1lLCBzdHlsZXMgKTtcblx0XHR9XG5cblx0XHQvLyBDb252ZXJ0IFwibm9ybWFsXCIgdG8gY29tcHV0ZWQgdmFsdWVcblx0XHRpZiAoIHZhbCA9PT0gXCJub3JtYWxcIiAmJiBuYW1lIGluIGNzc05vcm1hbFRyYW5zZm9ybSApIHtcblx0XHRcdHZhbCA9IGNzc05vcm1hbFRyYW5zZm9ybVsgbmFtZSBdO1xuXHRcdH1cblxuXHRcdC8vIE1ha2UgbnVtZXJpYyBpZiBmb3JjZWQgb3IgYSBxdWFsaWZpZXIgd2FzIHByb3ZpZGVkIGFuZCB2YWwgbG9va3MgbnVtZXJpY1xuXHRcdGlmICggZXh0cmEgPT09IFwiXCIgfHwgZXh0cmEgKSB7XG5cdFx0XHRudW0gPSBwYXJzZUZsb2F0KCB2YWwgKTtcblx0XHRcdHJldHVybiBleHRyYSA9PT0gdHJ1ZSB8fCBpc0Zpbml0ZSggbnVtICkgPyBudW0gfHwgMCA6IHZhbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5lYWNoKCBbIFwiaGVpZ2h0XCIsIFwid2lkdGhcIiBdLCBmdW5jdGlvbiggX2ksIGRpbWVuc2lvbiApIHtcblx0alF1ZXJ5LmNzc0hvb2tzWyBkaW1lbnNpb24gXSA9IHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtLCBjb21wdXRlZCwgZXh0cmEgKSB7XG5cdFx0XHRpZiAoIGNvbXB1dGVkICkge1xuXG5cdFx0XHRcdC8vIENlcnRhaW4gZWxlbWVudHMgY2FuIGhhdmUgZGltZW5zaW9uIGluZm8gaWYgd2UgaW52aXNpYmx5IHNob3cgdGhlbVxuXHRcdFx0XHQvLyBidXQgaXQgbXVzdCBoYXZlIGEgY3VycmVudCBkaXNwbGF5IHN0eWxlIHRoYXQgd291bGQgYmVuZWZpdFxuXHRcdFx0XHRyZXR1cm4gcmRpc3BsYXlzd2FwLnRlc3QoIGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiICkgKSAmJlxuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogU2FmYXJpIDgrXG5cdFx0XHRcdFx0Ly8gVGFibGUgY29sdW1ucyBpbiBTYWZhcmkgaGF2ZSBub24temVybyBvZmZzZXRXaWR0aCAmIHplcm9cblx0XHRcdFx0XHQvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCB1bmxlc3MgZGlzcGxheSBpcyBjaGFuZ2VkLlxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHRcdFx0XHRcdC8vIFJ1bm5pbmcgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGEgZGlzY29ubmVjdGVkIG5vZGVcblx0XHRcdFx0XHQvLyBpbiBJRSB0aHJvd3MgYW4gZXJyb3IuXG5cdFx0XHRcdFx0KCAhZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCB8fCAhZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCApID9cblx0XHRcdFx0XHRzd2FwKCBlbGVtLCBjc3NTaG93LCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHJldHVybiBnZXRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBkaW1lbnNpb24sIGV4dHJhICk7XG5cdFx0XHRcdFx0fSApIDpcblx0XHRcdFx0XHRnZXRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBkaW1lbnNpb24sIGV4dHJhICk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlLCBleHRyYSApIHtcblx0XHRcdHZhciBtYXRjaGVzLFxuXHRcdFx0XHRzdHlsZXMgPSBnZXRTdHlsZXMoIGVsZW0gKSxcblxuXHRcdFx0XHQvLyBPbmx5IHJlYWQgc3R5bGVzLnBvc2l0aW9uIGlmIHRoZSB0ZXN0IGhhcyBhIGNoYW5jZSB0byBmYWlsXG5cdFx0XHRcdC8vIHRvIGF2b2lkIGZvcmNpbmcgYSByZWZsb3cuXG5cdFx0XHRcdHNjcm9sbGJveFNpemVCdWdneSA9ICFzdXBwb3J0LnNjcm9sbGJveFNpemUoKSAmJlxuXHRcdFx0XHRcdHN0eWxlcy5wb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiLFxuXG5cdFx0XHRcdC8vIFRvIGF2b2lkIGZvcmNpbmcgYSByZWZsb3csIG9ubHkgZmV0Y2ggYm94U2l6aW5nIGlmIHdlIG5lZWQgaXQgKGdoLTM5OTEpXG5cdFx0XHRcdGJveFNpemluZ05lZWRlZCA9IHNjcm9sbGJveFNpemVCdWdneSB8fCBleHRyYSxcblx0XHRcdFx0aXNCb3JkZXJCb3ggPSBib3hTaXppbmdOZWVkZWQgJiZcblx0XHRcdFx0XHRqUXVlcnkuY3NzKCBlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzICkgPT09IFwiYm9yZGVyLWJveFwiLFxuXHRcdFx0XHRzdWJ0cmFjdCA9IGV4dHJhID9cblx0XHRcdFx0XHRib3hNb2RlbEFkanVzdG1lbnQoXG5cdFx0XHRcdFx0XHRlbGVtLFxuXHRcdFx0XHRcdFx0ZGltZW5zaW9uLFxuXHRcdFx0XHRcdFx0ZXh0cmEsXG5cdFx0XHRcdFx0XHRpc0JvcmRlckJveCxcblx0XHRcdFx0XHRcdHN0eWxlc1xuXHRcdFx0XHRcdCkgOlxuXHRcdFx0XHRcdDA7XG5cblx0XHRcdC8vIEFjY291bnQgZm9yIHVucmVsaWFibGUgYm9yZGVyLWJveCBkaW1lbnNpb25zIGJ5IGNvbXBhcmluZyBvZmZzZXQqIHRvIGNvbXB1dGVkIGFuZFxuXHRcdFx0Ly8gZmFraW5nIGEgY29udGVudC1ib3ggdG8gZ2V0IGJvcmRlciBhbmQgcGFkZGluZyAoZ2gtMzY5OSlcblx0XHRcdGlmICggaXNCb3JkZXJCb3ggJiYgc2Nyb2xsYm94U2l6ZUJ1Z2d5ICkge1xuXHRcdFx0XHRzdWJ0cmFjdCAtPSBNYXRoLmNlaWwoXG5cdFx0XHRcdFx0ZWxlbVsgXCJvZmZzZXRcIiArIGRpbWVuc2lvblsgMCBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoIDEgKSBdIC1cblx0XHRcdFx0XHRwYXJzZUZsb2F0KCBzdHlsZXNbIGRpbWVuc2lvbiBdICkgLVxuXHRcdFx0XHRcdGJveE1vZGVsQWRqdXN0bWVudCggZWxlbSwgZGltZW5zaW9uLCBcImJvcmRlclwiLCBmYWxzZSwgc3R5bGVzICkgLVxuXHRcdFx0XHRcdDAuNVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb252ZXJ0IHRvIHBpeGVscyBpZiB2YWx1ZSBhZGp1c3RtZW50IGlzIG5lZWRlZFxuXHRcdFx0aWYgKCBzdWJ0cmFjdCAmJiAoIG1hdGNoZXMgPSByY3NzTnVtLmV4ZWMoIHZhbHVlICkgKSAmJlxuXHRcdFx0XHQoIG1hdGNoZXNbIDMgXSB8fCBcInB4XCIgKSAhPT0gXCJweFwiICkge1xuXG5cdFx0XHRcdGVsZW0uc3R5bGVbIGRpbWVuc2lvbiBdID0gdmFsdWU7XG5cdFx0XHRcdHZhbHVlID0galF1ZXJ5LmNzcyggZWxlbSwgZGltZW5zaW9uICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZXRQb3NpdGl2ZU51bWJlciggZWxlbSwgdmFsdWUsIHN1YnRyYWN0ICk7XG5cdFx0fVxuXHR9O1xufSApO1xuXG5qUXVlcnkuY3NzSG9va3MubWFyZ2luTGVmdCA9IGFkZEdldEhvb2tJZiggc3VwcG9ydC5yZWxpYWJsZU1hcmdpbkxlZnQsXG5cdGZ1bmN0aW9uKCBlbGVtLCBjb21wdXRlZCApIHtcblx0XHRpZiAoIGNvbXB1dGVkICkge1xuXHRcdFx0cmV0dXJuICggcGFyc2VGbG9hdCggY3VyQ1NTKCBlbGVtLCBcIm1hcmdpbkxlZnRcIiApICkgfHxcblx0XHRcdFx0ZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC1cblx0XHRcdFx0XHRzd2FwKCBlbGVtLCB7IG1hcmdpbkxlZnQ6IDAgfSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuXHRcdFx0XHRcdH0gKVxuXHRcdFx0KSArIFwicHhcIjtcblx0XHR9XG5cdH1cbik7XG5cbi8vIFRoZXNlIGhvb2tzIGFyZSB1c2VkIGJ5IGFuaW1hdGUgdG8gZXhwYW5kIHByb3BlcnRpZXNcbmpRdWVyeS5lYWNoKCB7XG5cdG1hcmdpbjogXCJcIixcblx0cGFkZGluZzogXCJcIixcblx0Ym9yZGVyOiBcIldpZHRoXCJcbn0sIGZ1bmN0aW9uKCBwcmVmaXgsIHN1ZmZpeCApIHtcblx0alF1ZXJ5LmNzc0hvb2tzWyBwcmVmaXggKyBzdWZmaXggXSA9IHtcblx0XHRleHBhbmQ6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHZhciBpID0gMCxcblx0XHRcdFx0ZXhwYW5kZWQgPSB7fSxcblxuXHRcdFx0XHQvLyBBc3N1bWVzIGEgc2luZ2xlIG51bWJlciBpZiBub3QgYSBzdHJpbmdcblx0XHRcdFx0cGFydHMgPSB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgPyB2YWx1ZS5zcGxpdCggXCIgXCIgKSA6IFsgdmFsdWUgXTtcblxuXHRcdFx0Zm9yICggOyBpIDwgNDsgaSsrICkge1xuXHRcdFx0XHRleHBhbmRlZFsgcHJlZml4ICsgY3NzRXhwYW5kWyBpIF0gKyBzdWZmaXggXSA9XG5cdFx0XHRcdFx0cGFydHNbIGkgXSB8fCBwYXJ0c1sgaSAtIDIgXSB8fCBwYXJ0c1sgMCBdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZXhwYW5kZWQ7XG5cdFx0fVxuXHR9O1xuXG5cdGlmICggcHJlZml4ICE9PSBcIm1hcmdpblwiICkge1xuXHRcdGpRdWVyeS5jc3NIb29rc1sgcHJlZml4ICsgc3VmZml4IF0uc2V0ID0gc2V0UG9zaXRpdmVOdW1iZXI7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRjc3M6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUgKSB7XG5cdFx0XHR2YXIgc3R5bGVzLCBsZW4sXG5cdFx0XHRcdG1hcCA9IHt9LFxuXHRcdFx0XHRpID0gMDtcblxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBuYW1lICkgKSB7XG5cdFx0XHRcdHN0eWxlcyA9IGdldFN0eWxlcyggZWxlbSApO1xuXHRcdFx0XHRsZW4gPSBuYW1lLmxlbmd0aDtcblxuXHRcdFx0XHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0XHRtYXBbIG5hbWVbIGkgXSBdID0galF1ZXJ5LmNzcyggZWxlbSwgbmFtZVsgaSBdLCBmYWxzZSwgc3R5bGVzICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbWFwO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgbmFtZSwgdmFsdWUgKSA6XG5cdFx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIG5hbWUgKTtcblx0XHR9LCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgKTtcblx0fVxufSApO1xuXG5cbmZ1bmN0aW9uIFR3ZWVuKCBlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZyApIHtcblx0cmV0dXJuIG5ldyBUd2Vlbi5wcm90b3R5cGUuaW5pdCggZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcgKTtcbn1cbmpRdWVyeS5Ud2VlbiA9IFR3ZWVuO1xuXG5Ud2Vlbi5wcm90b3R5cGUgPSB7XG5cdGNvbnN0cnVjdG9yOiBUd2Vlbixcblx0aW5pdDogZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIHByb3AsIGVuZCwgZWFzaW5nLCB1bml0ICkge1xuXHRcdHRoaXMuZWxlbSA9IGVsZW07XG5cdFx0dGhpcy5wcm9wID0gcHJvcDtcblx0XHR0aGlzLmVhc2luZyA9IGVhc2luZyB8fCBqUXVlcnkuZWFzaW5nLl9kZWZhdWx0O1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy5zdGFydCA9IHRoaXMubm93ID0gdGhpcy5jdXIoKTtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblx0XHR0aGlzLnVuaXQgPSB1bml0IHx8ICggalF1ZXJ5LmNzc051bWJlclsgcHJvcCBdID8gXCJcIiA6IFwicHhcIiApO1xuXHR9LFxuXHRjdXI6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBob29rcyA9IFR3ZWVuLnByb3BIb29rc1sgdGhpcy5wcm9wIF07XG5cblx0XHRyZXR1cm4gaG9va3MgJiYgaG9va3MuZ2V0ID9cblx0XHRcdGhvb2tzLmdldCggdGhpcyApIDpcblx0XHRcdFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5nZXQoIHRoaXMgKTtcblx0fSxcblx0cnVuOiBmdW5jdGlvbiggcGVyY2VudCApIHtcblx0XHR2YXIgZWFzZWQsXG5cdFx0XHRob29rcyA9IFR3ZWVuLnByb3BIb29rc1sgdGhpcy5wcm9wIF07XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5kdXJhdGlvbiApIHtcblx0XHRcdHRoaXMucG9zID0gZWFzZWQgPSBqUXVlcnkuZWFzaW5nWyB0aGlzLmVhc2luZyBdKFxuXHRcdFx0XHRwZXJjZW50LCB0aGlzLm9wdGlvbnMuZHVyYXRpb24gKiBwZXJjZW50LCAwLCAxLCB0aGlzLm9wdGlvbnMuZHVyYXRpb25cblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucG9zID0gZWFzZWQgPSBwZXJjZW50O1xuXHRcdH1cblx0XHR0aGlzLm5vdyA9ICggdGhpcy5lbmQgLSB0aGlzLnN0YXJ0ICkgKiBlYXNlZCArIHRoaXMuc3RhcnQ7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5zdGVwICkge1xuXHRcdFx0dGhpcy5vcHRpb25zLnN0ZXAuY2FsbCggdGhpcy5lbGVtLCB0aGlzLm5vdywgdGhpcyApO1xuXHRcdH1cblxuXHRcdGlmICggaG9va3MgJiYgaG9va3Muc2V0ICkge1xuXHRcdFx0aG9va3Muc2V0KCB0aGlzICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5zZXQoIHRoaXMgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG5cblR3ZWVuLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZSA9IFR3ZWVuLnByb3RvdHlwZTtcblxuVHdlZW4ucHJvcEhvb2tzID0ge1xuXHRfZGVmYXVsdDoge1xuXHRcdGdldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXHRcdFx0dmFyIHJlc3VsdDtcblxuXHRcdFx0Ly8gVXNlIGEgcHJvcGVydHkgb24gdGhlIGVsZW1lbnQgZGlyZWN0bHkgd2hlbiBpdCBpcyBub3QgYSBET00gZWxlbWVudCxcblx0XHRcdC8vIG9yIHdoZW4gdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc3R5bGUgcHJvcGVydHkgdGhhdCBleGlzdHMuXG5cdFx0XHRpZiAoIHR3ZWVuLmVsZW0ubm9kZVR5cGUgIT09IDEgfHxcblx0XHRcdFx0dHdlZW4uZWxlbVsgdHdlZW4ucHJvcCBdICE9IG51bGwgJiYgdHdlZW4uZWxlbS5zdHlsZVsgdHdlZW4ucHJvcCBdID09IG51bGwgKSB7XG5cdFx0XHRcdHJldHVybiB0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF07XG5cdFx0XHR9XG5cblx0XHRcdC8vIFBhc3NpbmcgYW4gZW1wdHkgc3RyaW5nIGFzIGEgM3JkIHBhcmFtZXRlciB0byAuY3NzIHdpbGwgYXV0b21hdGljYWxseVxuXHRcdFx0Ly8gYXR0ZW1wdCBhIHBhcnNlRmxvYXQgYW5kIGZhbGxiYWNrIHRvIGEgc3RyaW5nIGlmIHRoZSBwYXJzZSBmYWlscy5cblx0XHRcdC8vIFNpbXBsZSB2YWx1ZXMgc3VjaCBhcyBcIjEwcHhcIiBhcmUgcGFyc2VkIHRvIEZsb2F0O1xuXHRcdFx0Ly8gY29tcGxleCB2YWx1ZXMgc3VjaCBhcyBcInJvdGF0ZSgxcmFkKVwiIGFyZSByZXR1cm5lZCBhcy1pcy5cblx0XHRcdHJlc3VsdCA9IGpRdWVyeS5jc3MoIHR3ZWVuLmVsZW0sIHR3ZWVuLnByb3AsIFwiXCIgKTtcblxuXHRcdFx0Ly8gRW1wdHkgc3RyaW5ncywgbnVsbCwgdW5kZWZpbmVkIGFuZCBcImF1dG9cIiBhcmUgY29udmVydGVkIHRvIDAuXG5cdFx0XHRyZXR1cm4gIXJlc3VsdCB8fCByZXN1bHQgPT09IFwiYXV0b1wiID8gMCA6IHJlc3VsdDtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXG5cdFx0XHQvLyBVc2Ugc3RlcCBob29rIGZvciBiYWNrIGNvbXBhdC5cblx0XHRcdC8vIFVzZSBjc3NIb29rIGlmIGl0cyB0aGVyZS5cblx0XHRcdC8vIFVzZSAuc3R5bGUgaWYgYXZhaWxhYmxlIGFuZCB1c2UgcGxhaW4gcHJvcGVydGllcyB3aGVyZSBhdmFpbGFibGUuXG5cdFx0XHRpZiAoIGpRdWVyeS5meC5zdGVwWyB0d2Vlbi5wcm9wIF0gKSB7XG5cdFx0XHRcdGpRdWVyeS5meC5zdGVwWyB0d2Vlbi5wcm9wIF0oIHR3ZWVuICk7XG5cdFx0XHR9IGVsc2UgaWYgKCB0d2Vlbi5lbGVtLm5vZGVUeXBlID09PSAxICYmIChcblx0XHRcdFx0alF1ZXJ5LmNzc0hvb2tzWyB0d2Vlbi5wcm9wIF0gfHxcblx0XHRcdFx0XHR0d2Vlbi5lbGVtLnN0eWxlWyBmaW5hbFByb3BOYW1lKCB0d2Vlbi5wcm9wICkgXSAhPSBudWxsICkgKSB7XG5cdFx0XHRcdGpRdWVyeS5zdHlsZSggdHdlZW4uZWxlbSwgdHdlZW4ucHJvcCwgdHdlZW4ubm93ICsgdHdlZW4udW5pdCApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dHdlZW4uZWxlbVsgdHdlZW4ucHJvcCBdID0gdHdlZW4ubm93O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbi8vIFBhbmljIGJhc2VkIGFwcHJvYWNoIHRvIHNldHRpbmcgdGhpbmdzIG9uIGRpc2Nvbm5lY3RlZCBub2Rlc1xuVHdlZW4ucHJvcEhvb2tzLnNjcm9sbFRvcCA9IFR3ZWVuLnByb3BIb29rcy5zY3JvbGxMZWZ0ID0ge1xuXHRzZXQ6IGZ1bmN0aW9uKCB0d2VlbiApIHtcblx0XHRpZiAoIHR3ZWVuLmVsZW0ubm9kZVR5cGUgJiYgdHdlZW4uZWxlbS5wYXJlbnROb2RlICkge1xuXHRcdFx0dHdlZW4uZWxlbVsgdHdlZW4ucHJvcCBdID0gdHdlZW4ubm93O1xuXHRcdH1cblx0fVxufTtcblxualF1ZXJ5LmVhc2luZyA9IHtcblx0bGluZWFyOiBmdW5jdGlvbiggcCApIHtcblx0XHRyZXR1cm4gcDtcblx0fSxcblx0c3dpbmc6IGZ1bmN0aW9uKCBwICkge1xuXHRcdHJldHVybiAwLjUgLSBNYXRoLmNvcyggcCAqIE1hdGguUEkgKSAvIDI7XG5cdH0sXG5cdF9kZWZhdWx0OiBcInN3aW5nXCJcbn07XG5cbmpRdWVyeS5meCA9IFR3ZWVuLnByb3RvdHlwZS5pbml0O1xuXG4vLyBCYWNrIGNvbXBhdCA8MS44IGV4dGVuc2lvbiBwb2ludFxualF1ZXJ5LmZ4LnN0ZXAgPSB7fTtcblxuXG5cblxudmFyXG5cdGZ4Tm93LCBpblByb2dyZXNzLFxuXHRyZnh0eXBlcyA9IC9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxcblx0cnJ1biA9IC9xdWV1ZUhvb2tzJC87XG5cbmZ1bmN0aW9uIHNjaGVkdWxlKCkge1xuXHRpZiAoIGluUHJvZ3Jlc3MgKSB7XG5cdFx0aWYgKCBkb2N1bWVudC5oaWRkZW4gPT09IGZhbHNlICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKSB7XG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBzY2hlZHVsZSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dCggc2NoZWR1bGUsIGpRdWVyeS5meC5pbnRlcnZhbCApO1xuXHRcdH1cblxuXHRcdGpRdWVyeS5meC50aWNrKCk7XG5cdH1cbn1cblxuLy8gQW5pbWF0aW9ucyBjcmVhdGVkIHN5bmNocm9ub3VzbHkgd2lsbCBydW4gc3luY2hyb25vdXNseVxuZnVuY3Rpb24gY3JlYXRlRnhOb3coKSB7XG5cdHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRmeE5vdyA9IHVuZGVmaW5lZDtcblx0fSApO1xuXHRyZXR1cm4gKCBmeE5vdyA9IERhdGUubm93KCkgKTtcbn1cblxuLy8gR2VuZXJhdGUgcGFyYW1ldGVycyB0byBjcmVhdGUgYSBzdGFuZGFyZCBhbmltYXRpb25cbmZ1bmN0aW9uIGdlbkZ4KCB0eXBlLCBpbmNsdWRlV2lkdGggKSB7XG5cdHZhciB3aGljaCxcblx0XHRpID0gMCxcblx0XHRhdHRycyA9IHsgaGVpZ2h0OiB0eXBlIH07XG5cblx0Ly8gSWYgd2UgaW5jbHVkZSB3aWR0aCwgc3RlcCB2YWx1ZSBpcyAxIHRvIGRvIGFsbCBjc3NFeHBhbmQgdmFsdWVzLFxuXHQvLyBvdGhlcndpc2Ugc3RlcCB2YWx1ZSBpcyAyIHRvIHNraXAgb3ZlciBMZWZ0IGFuZCBSaWdodFxuXHRpbmNsdWRlV2lkdGggPSBpbmNsdWRlV2lkdGggPyAxIDogMDtcblx0Zm9yICggOyBpIDwgNDsgaSArPSAyIC0gaW5jbHVkZVdpZHRoICkge1xuXHRcdHdoaWNoID0gY3NzRXhwYW5kWyBpIF07XG5cdFx0YXR0cnNbIFwibWFyZ2luXCIgKyB3aGljaCBdID0gYXR0cnNbIFwicGFkZGluZ1wiICsgd2hpY2ggXSA9IHR5cGU7XG5cdH1cblxuXHRpZiAoIGluY2x1ZGVXaWR0aCApIHtcblx0XHRhdHRycy5vcGFjaXR5ID0gYXR0cnMud2lkdGggPSB0eXBlO1xuXHR9XG5cblx0cmV0dXJuIGF0dHJzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUd2VlbiggdmFsdWUsIHByb3AsIGFuaW1hdGlvbiApIHtcblx0dmFyIHR3ZWVuLFxuXHRcdGNvbGxlY3Rpb24gPSAoIEFuaW1hdGlvbi50d2VlbmVyc1sgcHJvcCBdIHx8IFtdICkuY29uY2F0KCBBbmltYXRpb24udHdlZW5lcnNbIFwiKlwiIF0gKSxcblx0XHRpbmRleCA9IDAsXG5cdFx0bGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XG5cdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0aWYgKCAoIHR3ZWVuID0gY29sbGVjdGlvblsgaW5kZXggXS5jYWxsKCBhbmltYXRpb24sIHByb3AsIHZhbHVlICkgKSApIHtcblxuXHRcdFx0Ly8gV2UncmUgZG9uZSB3aXRoIHRoaXMgcHJvcGVydHlcblx0XHRcdHJldHVybiB0d2Vlbjtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByZWZpbHRlciggZWxlbSwgcHJvcHMsIG9wdHMgKSB7XG5cdHZhciBwcm9wLCB2YWx1ZSwgdG9nZ2xlLCBob29rcywgb2xkZmlyZSwgcHJvcFR3ZWVuLCByZXN0b3JlRGlzcGxheSwgZGlzcGxheSxcblx0XHRpc0JveCA9IFwid2lkdGhcIiBpbiBwcm9wcyB8fCBcImhlaWdodFwiIGluIHByb3BzLFxuXHRcdGFuaW0gPSB0aGlzLFxuXHRcdG9yaWcgPSB7fSxcblx0XHRzdHlsZSA9IGVsZW0uc3R5bGUsXG5cdFx0aGlkZGVuID0gZWxlbS5ub2RlVHlwZSAmJiBpc0hpZGRlbldpdGhpblRyZWUoIGVsZW0gKSxcblx0XHRkYXRhU2hvdyA9IGRhdGFQcml2LmdldCggZWxlbSwgXCJmeHNob3dcIiApO1xuXG5cdC8vIFF1ZXVlLXNraXBwaW5nIGFuaW1hdGlvbnMgaGlqYWNrIHRoZSBmeCBob29rc1xuXHRpZiAoICFvcHRzLnF1ZXVlICkge1xuXHRcdGhvb2tzID0galF1ZXJ5Ll9xdWV1ZUhvb2tzKCBlbGVtLCBcImZ4XCIgKTtcblx0XHRpZiAoIGhvb2tzLnVucXVldWVkID09IG51bGwgKSB7XG5cdFx0XHRob29rcy51bnF1ZXVlZCA9IDA7XG5cdFx0XHRvbGRmaXJlID0gaG9va3MuZW1wdHkuZmlyZTtcblx0XHRcdGhvb2tzLmVtcHR5LmZpcmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCAhaG9va3MudW5xdWV1ZWQgKSB7XG5cdFx0XHRcdFx0b2xkZmlyZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRob29rcy51bnF1ZXVlZCsrO1xuXG5cdFx0YW5pbS5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBFbnN1cmUgdGhlIGNvbXBsZXRlIGhhbmRsZXIgaXMgY2FsbGVkIGJlZm9yZSB0aGlzIGNvbXBsZXRlc1xuXHRcdFx0YW5pbS5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRob29rcy51bnF1ZXVlZC0tO1xuXHRcdFx0XHRpZiAoICFqUXVlcnkucXVldWUoIGVsZW0sIFwiZnhcIiApLmxlbmd0aCApIHtcblx0XHRcdFx0XHRob29rcy5lbXB0eS5maXJlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBEZXRlY3Qgc2hvdy9oaWRlIGFuaW1hdGlvbnNcblx0Zm9yICggcHJvcCBpbiBwcm9wcyApIHtcblx0XHR2YWx1ZSA9IHByb3BzWyBwcm9wIF07XG5cdFx0aWYgKCByZnh0eXBlcy50ZXN0KCB2YWx1ZSApICkge1xuXHRcdFx0ZGVsZXRlIHByb3BzWyBwcm9wIF07XG5cdFx0XHR0b2dnbGUgPSB0b2dnbGUgfHwgdmFsdWUgPT09IFwidG9nZ2xlXCI7XG5cdFx0XHRpZiAoIHZhbHVlID09PSAoIGhpZGRlbiA/IFwiaGlkZVwiIDogXCJzaG93XCIgKSApIHtcblxuXHRcdFx0XHQvLyBQcmV0ZW5kIHRvIGJlIGhpZGRlbiBpZiB0aGlzIGlzIGEgXCJzaG93XCIgYW5kXG5cdFx0XHRcdC8vIHRoZXJlIGlzIHN0aWxsIGRhdGEgZnJvbSBhIHN0b3BwZWQgc2hvdy9oaWRlXG5cdFx0XHRcdGlmICggdmFsdWUgPT09IFwic2hvd1wiICYmIGRhdGFTaG93ICYmIGRhdGFTaG93WyBwcm9wIF0gIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRoaWRkZW4gPSB0cnVlO1xuXG5cdFx0XHRcdC8vIElnbm9yZSBhbGwgb3RoZXIgbm8tb3Agc2hvdy9oaWRlIGRhdGFcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0b3JpZ1sgcHJvcCBdID0gZGF0YVNob3cgJiYgZGF0YVNob3dbIHByb3AgXSB8fCBqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBCYWlsIG91dCBpZiB0aGlzIGlzIGEgbm8tb3AgbGlrZSAuaGlkZSgpLmhpZGUoKVxuXHRwcm9wVHdlZW4gPSAhalF1ZXJ5LmlzRW1wdHlPYmplY3QoIHByb3BzICk7XG5cdGlmICggIXByb3BUd2VlbiAmJiBqUXVlcnkuaXNFbXB0eU9iamVjdCggb3JpZyApICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFJlc3RyaWN0IFwib3ZlcmZsb3dcIiBhbmQgXCJkaXNwbGF5XCIgc3R5bGVzIGR1cmluZyBib3ggYW5pbWF0aW9uc1xuXHRpZiAoIGlzQm94ICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSwgRWRnZSAxMiAtIDE1XG5cdFx0Ly8gUmVjb3JkIGFsbCAzIG92ZXJmbG93IGF0dHJpYnV0ZXMgYmVjYXVzZSBJRSBkb2VzIG5vdCBpbmZlciB0aGUgc2hvcnRoYW5kXG5cdFx0Ly8gZnJvbSBpZGVudGljYWxseS12YWx1ZWQgb3ZlcmZsb3dYIGFuZCBvdmVyZmxvd1kgYW5kIEVkZ2UganVzdCBtaXJyb3JzXG5cdFx0Ly8gdGhlIG92ZXJmbG93WCB2YWx1ZSB0aGVyZS5cblx0XHRvcHRzLm92ZXJmbG93ID0gWyBzdHlsZS5vdmVyZmxvdywgc3R5bGUub3ZlcmZsb3dYLCBzdHlsZS5vdmVyZmxvd1kgXTtcblxuXHRcdC8vIElkZW50aWZ5IGEgZGlzcGxheSB0eXBlLCBwcmVmZXJyaW5nIG9sZCBzaG93L2hpZGUgZGF0YSBvdmVyIHRoZSBDU1MgY2FzY2FkZVxuXHRcdHJlc3RvcmVEaXNwbGF5ID0gZGF0YVNob3cgJiYgZGF0YVNob3cuZGlzcGxheTtcblx0XHRpZiAoIHJlc3RvcmVEaXNwbGF5ID09IG51bGwgKSB7XG5cdFx0XHRyZXN0b3JlRGlzcGxheSA9IGRhdGFQcml2LmdldCggZWxlbSwgXCJkaXNwbGF5XCIgKTtcblx0XHR9XG5cdFx0ZGlzcGxheSA9IGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiICk7XG5cdFx0aWYgKCBkaXNwbGF5ID09PSBcIm5vbmVcIiApIHtcblx0XHRcdGlmICggcmVzdG9yZURpc3BsYXkgKSB7XG5cdFx0XHRcdGRpc3BsYXkgPSByZXN0b3JlRGlzcGxheTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gR2V0IG5vbmVtcHR5IHZhbHVlKHMpIGJ5IHRlbXBvcmFyaWx5IGZvcmNpbmcgdmlzaWJpbGl0eVxuXHRcdFx0XHRzaG93SGlkZSggWyBlbGVtIF0sIHRydWUgKTtcblx0XHRcdFx0cmVzdG9yZURpc3BsYXkgPSBlbGVtLnN0eWxlLmRpc3BsYXkgfHwgcmVzdG9yZURpc3BsYXk7XG5cdFx0XHRcdGRpc3BsYXkgPSBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApO1xuXHRcdFx0XHRzaG93SGlkZSggWyBlbGVtIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBBbmltYXRlIGlubGluZSBlbGVtZW50cyBhcyBpbmxpbmUtYmxvY2tcblx0XHRpZiAoIGRpc3BsYXkgPT09IFwiaW5saW5lXCIgfHwgZGlzcGxheSA9PT0gXCJpbmxpbmUtYmxvY2tcIiAmJiByZXN0b3JlRGlzcGxheSAhPSBudWxsICkge1xuXHRcdFx0aWYgKCBqUXVlcnkuY3NzKCBlbGVtLCBcImZsb2F0XCIgKSA9PT0gXCJub25lXCIgKSB7XG5cblx0XHRcdFx0Ly8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgZGlzcGxheSB2YWx1ZSBhdCB0aGUgZW5kIG9mIHB1cmUgc2hvdy9oaWRlIGFuaW1hdGlvbnNcblx0XHRcdFx0aWYgKCAhcHJvcFR3ZWVuICkge1xuXHRcdFx0XHRcdGFuaW0uZG9uZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRzdHlsZS5kaXNwbGF5ID0gcmVzdG9yZURpc3BsYXk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdGlmICggcmVzdG9yZURpc3BsYXkgPT0gbnVsbCApIHtcblx0XHRcdFx0XHRcdGRpc3BsYXkgPSBzdHlsZS5kaXNwbGF5O1xuXHRcdFx0XHRcdFx0cmVzdG9yZURpc3BsYXkgPSBkaXNwbGF5ID09PSBcIm5vbmVcIiA/IFwiXCIgOiBkaXNwbGF5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRzdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoIG9wdHMub3ZlcmZsb3cgKSB7XG5cdFx0c3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXHRcdGFuaW0uYWx3YXlzKCBmdW5jdGlvbigpIHtcblx0XHRcdHN0eWxlLm92ZXJmbG93ID0gb3B0cy5vdmVyZmxvd1sgMCBdO1xuXHRcdFx0c3R5bGUub3ZlcmZsb3dYID0gb3B0cy5vdmVyZmxvd1sgMSBdO1xuXHRcdFx0c3R5bGUub3ZlcmZsb3dZID0gb3B0cy5vdmVyZmxvd1sgMiBdO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8vIEltcGxlbWVudCBzaG93L2hpZGUgYW5pbWF0aW9uc1xuXHRwcm9wVHdlZW4gPSBmYWxzZTtcblx0Zm9yICggcHJvcCBpbiBvcmlnICkge1xuXG5cdFx0Ly8gR2VuZXJhbCBzaG93L2hpZGUgc2V0dXAgZm9yIHRoaXMgZWxlbWVudCBhbmltYXRpb25cblx0XHRpZiAoICFwcm9wVHdlZW4gKSB7XG5cdFx0XHRpZiAoIGRhdGFTaG93ICkge1xuXHRcdFx0XHRpZiAoIFwiaGlkZGVuXCIgaW4gZGF0YVNob3cgKSB7XG5cdFx0XHRcdFx0aGlkZGVuID0gZGF0YVNob3cuaGlkZGVuO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkYXRhU2hvdyA9IGRhdGFQcml2LmFjY2VzcyggZWxlbSwgXCJmeHNob3dcIiwgeyBkaXNwbGF5OiByZXN0b3JlRGlzcGxheSB9ICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN0b3JlIGhpZGRlbi92aXNpYmxlIGZvciB0b2dnbGUgc28gYC5zdG9wKCkudG9nZ2xlKClgIFwicmV2ZXJzZXNcIlxuXHRcdFx0aWYgKCB0b2dnbGUgKSB7XG5cdFx0XHRcdGRhdGFTaG93LmhpZGRlbiA9ICFoaWRkZW47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNob3cgZWxlbWVudHMgYmVmb3JlIGFuaW1hdGluZyB0aGVtXG5cdFx0XHRpZiAoIGhpZGRlbiApIHtcblx0XHRcdFx0c2hvd0hpZGUoIFsgZWxlbSBdLCB0cnVlICk7XG5cdFx0XHR9XG5cblx0XHRcdC8qIGVzbGludC1kaXNhYmxlIG5vLWxvb3AtZnVuYyAqL1xuXG5cdFx0XHRhbmltLmRvbmUoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdC8qIGVzbGludC1lbmFibGUgbm8tbG9vcC1mdW5jICovXG5cblx0XHRcdFx0Ly8gVGhlIGZpbmFsIHN0ZXAgb2YgYSBcImhpZGVcIiBhbmltYXRpb24gaXMgYWN0dWFsbHkgaGlkaW5nIHRoZSBlbGVtZW50XG5cdFx0XHRcdGlmICggIWhpZGRlbiApIHtcblx0XHRcdFx0XHRzaG93SGlkZSggWyBlbGVtIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIFwiZnhzaG93XCIgKTtcblx0XHRcdFx0Zm9yICggcHJvcCBpbiBvcmlnICkge1xuXHRcdFx0XHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgcHJvcCwgb3JpZ1sgcHJvcCBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHQvLyBQZXItcHJvcGVydHkgc2V0dXBcblx0XHRwcm9wVHdlZW4gPSBjcmVhdGVUd2VlbiggaGlkZGVuID8gZGF0YVNob3dbIHByb3AgXSA6IDAsIHByb3AsIGFuaW0gKTtcblx0XHRpZiAoICEoIHByb3AgaW4gZGF0YVNob3cgKSApIHtcblx0XHRcdGRhdGFTaG93WyBwcm9wIF0gPSBwcm9wVHdlZW4uc3RhcnQ7XG5cdFx0XHRpZiAoIGhpZGRlbiApIHtcblx0XHRcdFx0cHJvcFR3ZWVuLmVuZCA9IHByb3BUd2Vlbi5zdGFydDtcblx0XHRcdFx0cHJvcFR3ZWVuLnN0YXJ0ID0gMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gcHJvcEZpbHRlciggcHJvcHMsIHNwZWNpYWxFYXNpbmcgKSB7XG5cdHZhciBpbmRleCwgbmFtZSwgZWFzaW5nLCB2YWx1ZSwgaG9va3M7XG5cblx0Ly8gY2FtZWxDYXNlLCBzcGVjaWFsRWFzaW5nIGFuZCBleHBhbmQgY3NzSG9vayBwYXNzXG5cdGZvciAoIGluZGV4IGluIHByb3BzICkge1xuXHRcdG5hbWUgPSBjYW1lbENhc2UoIGluZGV4ICk7XG5cdFx0ZWFzaW5nID0gc3BlY2lhbEVhc2luZ1sgbmFtZSBdO1xuXHRcdHZhbHVlID0gcHJvcHNbIGluZGV4IF07XG5cdFx0aWYgKCBBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdFx0ZWFzaW5nID0gdmFsdWVbIDEgXTtcblx0XHRcdHZhbHVlID0gcHJvcHNbIGluZGV4IF0gPSB2YWx1ZVsgMCBdO1xuXHRcdH1cblxuXHRcdGlmICggaW5kZXggIT09IG5hbWUgKSB7XG5cdFx0XHRwcm9wc1sgbmFtZSBdID0gdmFsdWU7XG5cdFx0XHRkZWxldGUgcHJvcHNbIGluZGV4IF07XG5cdFx0fVxuXG5cdFx0aG9va3MgPSBqUXVlcnkuY3NzSG9va3NbIG5hbWUgXTtcblx0XHRpZiAoIGhvb2tzICYmIFwiZXhwYW5kXCIgaW4gaG9va3MgKSB7XG5cdFx0XHR2YWx1ZSA9IGhvb2tzLmV4cGFuZCggdmFsdWUgKTtcblx0XHRcdGRlbGV0ZSBwcm9wc1sgbmFtZSBdO1xuXG5cdFx0XHQvLyBOb3QgcXVpdGUgJC5leHRlbmQsIHRoaXMgd29uJ3Qgb3ZlcndyaXRlIGV4aXN0aW5nIGtleXMuXG5cdFx0XHQvLyBSZXVzaW5nICdpbmRleCcgYmVjYXVzZSB3ZSBoYXZlIHRoZSBjb3JyZWN0IFwibmFtZVwiXG5cdFx0XHRmb3IgKCBpbmRleCBpbiB2YWx1ZSApIHtcblx0XHRcdFx0aWYgKCAhKCBpbmRleCBpbiBwcm9wcyApICkge1xuXHRcdFx0XHRcdHByb3BzWyBpbmRleCBdID0gdmFsdWVbIGluZGV4IF07XG5cdFx0XHRcdFx0c3BlY2lhbEVhc2luZ1sgaW5kZXggXSA9IGVhc2luZztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzcGVjaWFsRWFzaW5nWyBuYW1lIF0gPSBlYXNpbmc7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIEFuaW1hdGlvbiggZWxlbSwgcHJvcGVydGllcywgb3B0aW9ucyApIHtcblx0dmFyIHJlc3VsdCxcblx0XHRzdG9wcGVkLFxuXHRcdGluZGV4ID0gMCxcblx0XHRsZW5ndGggPSBBbmltYXRpb24ucHJlZmlsdGVycy5sZW5ndGgsXG5cdFx0ZGVmZXJyZWQgPSBqUXVlcnkuRGVmZXJyZWQoKS5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBEb24ndCBtYXRjaCBlbGVtIGluIHRoZSA6YW5pbWF0ZWQgc2VsZWN0b3Jcblx0XHRcdGRlbGV0ZSB0aWNrLmVsZW07XG5cdFx0fSApLFxuXHRcdHRpY2sgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggc3RvcHBlZCApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGN1cnJlbnRUaW1lID0gZnhOb3cgfHwgY3JlYXRlRnhOb3coKSxcblx0XHRcdFx0cmVtYWluaW5nID0gTWF0aC5tYXgoIDAsIGFuaW1hdGlvbi5zdGFydFRpbWUgKyBhbmltYXRpb24uZHVyYXRpb24gLSBjdXJyZW50VGltZSApLFxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgMi4zIG9ubHlcblx0XHRcdFx0Ly8gQXJjaGFpYyBjcmFzaCBidWcgd29uJ3QgYWxsb3cgdXMgdG8gdXNlIGAxIC0gKCAwLjUgfHwgMCApYCAodHJhYy0xMjQ5Nylcblx0XHRcdFx0dGVtcCA9IHJlbWFpbmluZyAvIGFuaW1hdGlvbi5kdXJhdGlvbiB8fCAwLFxuXHRcdFx0XHRwZXJjZW50ID0gMSAtIHRlbXAsXG5cdFx0XHRcdGluZGV4ID0gMCxcblx0XHRcdFx0bGVuZ3RoID0gYW5pbWF0aW9uLnR3ZWVucy5sZW5ndGg7XG5cblx0XHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRcdGFuaW1hdGlvbi50d2VlbnNbIGluZGV4IF0ucnVuKCBwZXJjZW50ICk7XG5cdFx0XHR9XG5cblx0XHRcdGRlZmVycmVkLm5vdGlmeVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCBwZXJjZW50LCByZW1haW5pbmcgXSApO1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIG1vcmUgdG8gZG8sIHlpZWxkXG5cdFx0XHRpZiAoIHBlcmNlbnQgPCAxICYmIGxlbmd0aCApIHtcblx0XHRcdFx0cmV0dXJuIHJlbWFpbmluZztcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhpcyB3YXMgYW4gZW1wdHkgYW5pbWF0aW9uLCBzeW50aGVzaXplIGEgZmluYWwgcHJvZ3Jlc3Mgbm90aWZpY2F0aW9uXG5cdFx0XHRpZiAoICFsZW5ndGggKSB7XG5cdFx0XHRcdGRlZmVycmVkLm5vdGlmeVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCAxLCAwIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVzb2x2ZSB0aGUgYW5pbWF0aW9uIGFuZCByZXBvcnQgaXRzIGNvbmNsdXNpb25cblx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiBdICk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHRhbmltYXRpb24gPSBkZWZlcnJlZC5wcm9taXNlKCB7XG5cdFx0XHRlbGVtOiBlbGVtLFxuXHRcdFx0cHJvcHM6IGpRdWVyeS5leHRlbmQoIHt9LCBwcm9wZXJ0aWVzICksXG5cdFx0XHRvcHRzOiBqUXVlcnkuZXh0ZW5kKCB0cnVlLCB7XG5cdFx0XHRcdHNwZWNpYWxFYXNpbmc6IHt9LFxuXHRcdFx0XHRlYXNpbmc6IGpRdWVyeS5lYXNpbmcuX2RlZmF1bHRcblx0XHRcdH0sIG9wdGlvbnMgKSxcblx0XHRcdG9yaWdpbmFsUHJvcGVydGllczogcHJvcGVydGllcyxcblx0XHRcdG9yaWdpbmFsT3B0aW9uczogb3B0aW9ucyxcblx0XHRcdHN0YXJ0VGltZTogZnhOb3cgfHwgY3JlYXRlRnhOb3coKSxcblx0XHRcdGR1cmF0aW9uOiBvcHRpb25zLmR1cmF0aW9uLFxuXHRcdFx0dHdlZW5zOiBbXSxcblx0XHRcdGNyZWF0ZVR3ZWVuOiBmdW5jdGlvbiggcHJvcCwgZW5kICkge1xuXHRcdFx0XHR2YXIgdHdlZW4gPSBqUXVlcnkuVHdlZW4oIGVsZW0sIGFuaW1hdGlvbi5vcHRzLCBwcm9wLCBlbmQsXG5cdFx0XHRcdFx0YW5pbWF0aW9uLm9wdHMuc3BlY2lhbEVhc2luZ1sgcHJvcCBdIHx8IGFuaW1hdGlvbi5vcHRzLmVhc2luZyApO1xuXHRcdFx0XHRhbmltYXRpb24udHdlZW5zLnB1c2goIHR3ZWVuICk7XG5cdFx0XHRcdHJldHVybiB0d2Vlbjtcblx0XHRcdH0sXG5cdFx0XHRzdG9wOiBmdW5jdGlvbiggZ290b0VuZCApIHtcblx0XHRcdFx0dmFyIGluZGV4ID0gMCxcblxuXHRcdFx0XHRcdC8vIElmIHdlIGFyZSBnb2luZyB0byB0aGUgZW5kLCB3ZSB3YW50IHRvIHJ1biBhbGwgdGhlIHR3ZWVuc1xuXHRcdFx0XHRcdC8vIG90aGVyd2lzZSB3ZSBza2lwIHRoaXMgcGFydFxuXHRcdFx0XHRcdGxlbmd0aCA9IGdvdG9FbmQgPyBhbmltYXRpb24udHdlZW5zLmxlbmd0aCA6IDA7XG5cdFx0XHRcdGlmICggc3RvcHBlZCApIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0XHRzdG9wcGVkID0gdHJ1ZTtcblx0XHRcdFx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRcdFx0XHRhbmltYXRpb24udHdlZW5zWyBpbmRleCBdLnJ1biggMSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVzb2x2ZSB3aGVuIHdlIHBsYXllZCB0aGUgbGFzdCBmcmFtZTsgb3RoZXJ3aXNlLCByZWplY3Rcblx0XHRcdFx0aWYgKCBnb3RvRW5kICkge1xuXHRcdFx0XHRcdGRlZmVycmVkLm5vdGlmeVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCAxLCAwIF0gKTtcblx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlV2l0aCggZWxlbSwgWyBhbmltYXRpb24sIGdvdG9FbmQgXSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdFdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCBnb3RvRW5kIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHR9ICksXG5cdFx0cHJvcHMgPSBhbmltYXRpb24ucHJvcHM7XG5cblx0cHJvcEZpbHRlciggcHJvcHMsIGFuaW1hdGlvbi5vcHRzLnNwZWNpYWxFYXNpbmcgKTtcblxuXHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdHJlc3VsdCA9IEFuaW1hdGlvbi5wcmVmaWx0ZXJzWyBpbmRleCBdLmNhbGwoIGFuaW1hdGlvbiwgZWxlbSwgcHJvcHMsIGFuaW1hdGlvbi5vcHRzICk7XG5cdFx0aWYgKCByZXN1bHQgKSB7XG5cdFx0XHRpZiAoIGlzRnVuY3Rpb24oIHJlc3VsdC5zdG9wICkgKSB7XG5cdFx0XHRcdGpRdWVyeS5fcXVldWVIb29rcyggYW5pbWF0aW9uLmVsZW0sIGFuaW1hdGlvbi5vcHRzLnF1ZXVlICkuc3RvcCA9XG5cdFx0XHRcdFx0cmVzdWx0LnN0b3AuYmluZCggcmVzdWx0ICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0fVxuXG5cdGpRdWVyeS5tYXAoIHByb3BzLCBjcmVhdGVUd2VlbiwgYW5pbWF0aW9uICk7XG5cblx0aWYgKCBpc0Z1bmN0aW9uKCBhbmltYXRpb24ub3B0cy5zdGFydCApICkge1xuXHRcdGFuaW1hdGlvbi5vcHRzLnN0YXJ0LmNhbGwoIGVsZW0sIGFuaW1hdGlvbiApO1xuXHR9XG5cblx0Ly8gQXR0YWNoIGNhbGxiYWNrcyBmcm9tIG9wdGlvbnNcblx0YW5pbWF0aW9uXG5cdFx0LnByb2dyZXNzKCBhbmltYXRpb24ub3B0cy5wcm9ncmVzcyApXG5cdFx0LmRvbmUoIGFuaW1hdGlvbi5vcHRzLmRvbmUsIGFuaW1hdGlvbi5vcHRzLmNvbXBsZXRlIClcblx0XHQuZmFpbCggYW5pbWF0aW9uLm9wdHMuZmFpbCApXG5cdFx0LmFsd2F5cyggYW5pbWF0aW9uLm9wdHMuYWx3YXlzICk7XG5cblx0alF1ZXJ5LmZ4LnRpbWVyKFxuXHRcdGpRdWVyeS5leHRlbmQoIHRpY2ssIHtcblx0XHRcdGVsZW06IGVsZW0sXG5cdFx0XHRhbmltOiBhbmltYXRpb24sXG5cdFx0XHRxdWV1ZTogYW5pbWF0aW9uLm9wdHMucXVldWVcblx0XHR9IClcblx0KTtcblxuXHRyZXR1cm4gYW5pbWF0aW9uO1xufVxuXG5qUXVlcnkuQW5pbWF0aW9uID0galF1ZXJ5LmV4dGVuZCggQW5pbWF0aW9uLCB7XG5cblx0dHdlZW5lcnM6IHtcblx0XHRcIipcIjogWyBmdW5jdGlvbiggcHJvcCwgdmFsdWUgKSB7XG5cdFx0XHR2YXIgdHdlZW4gPSB0aGlzLmNyZWF0ZVR3ZWVuKCBwcm9wLCB2YWx1ZSApO1xuXHRcdFx0YWRqdXN0Q1NTKCB0d2Vlbi5lbGVtLCBwcm9wLCByY3NzTnVtLmV4ZWMoIHZhbHVlICksIHR3ZWVuICk7XG5cdFx0XHRyZXR1cm4gdHdlZW47XG5cdFx0fSBdXG5cdH0sXG5cblx0dHdlZW5lcjogZnVuY3Rpb24oIHByb3BzLCBjYWxsYmFjayApIHtcblx0XHRpZiAoIGlzRnVuY3Rpb24oIHByb3BzICkgKSB7XG5cdFx0XHRjYWxsYmFjayA9IHByb3BzO1xuXHRcdFx0cHJvcHMgPSBbIFwiKlwiIF07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHByb3BzID0gcHJvcHMubWF0Y2goIHJub3RodG1sd2hpdGUgKTtcblx0XHR9XG5cblx0XHR2YXIgcHJvcCxcblx0XHRcdGluZGV4ID0gMCxcblx0XHRcdGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuXHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRwcm9wID0gcHJvcHNbIGluZGV4IF07XG5cdFx0XHRBbmltYXRpb24udHdlZW5lcnNbIHByb3AgXSA9IEFuaW1hdGlvbi50d2VlbmVyc1sgcHJvcCBdIHx8IFtdO1xuXHRcdFx0QW5pbWF0aW9uLnR3ZWVuZXJzWyBwcm9wIF0udW5zaGlmdCggY2FsbGJhY2sgKTtcblx0XHR9XG5cdH0sXG5cblx0cHJlZmlsdGVyczogWyBkZWZhdWx0UHJlZmlsdGVyIF0sXG5cblx0cHJlZmlsdGVyOiBmdW5jdGlvbiggY2FsbGJhY2ssIHByZXBlbmQgKSB7XG5cdFx0aWYgKCBwcmVwZW5kICkge1xuXHRcdFx0QW5pbWF0aW9uLnByZWZpbHRlcnMudW5zaGlmdCggY2FsbGJhY2sgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0QW5pbWF0aW9uLnByZWZpbHRlcnMucHVzaCggY2FsbGJhY2sgKTtcblx0XHR9XG5cdH1cbn0gKTtcblxualF1ZXJ5LnNwZWVkID0gZnVuY3Rpb24oIHNwZWVkLCBlYXNpbmcsIGZuICkge1xuXHR2YXIgb3B0ID0gc3BlZWQgJiYgdHlwZW9mIHNwZWVkID09PSBcIm9iamVjdFwiID8galF1ZXJ5LmV4dGVuZCgge30sIHNwZWVkICkgOiB7XG5cdFx0Y29tcGxldGU6IGZuIHx8ICFmbiAmJiBlYXNpbmcgfHxcblx0XHRcdGlzRnVuY3Rpb24oIHNwZWVkICkgJiYgc3BlZWQsXG5cdFx0ZHVyYXRpb246IHNwZWVkLFxuXHRcdGVhc2luZzogZm4gJiYgZWFzaW5nIHx8IGVhc2luZyAmJiAhaXNGdW5jdGlvbiggZWFzaW5nICkgJiYgZWFzaW5nXG5cdH07XG5cblx0Ly8gR28gdG8gdGhlIGVuZCBzdGF0ZSBpZiBmeCBhcmUgb2ZmXG5cdGlmICggalF1ZXJ5LmZ4Lm9mZiApIHtcblx0XHRvcHQuZHVyYXRpb24gPSAwO1xuXG5cdH0gZWxzZSB7XG5cdFx0aWYgKCB0eXBlb2Ygb3B0LmR1cmF0aW9uICE9PSBcIm51bWJlclwiICkge1xuXHRcdFx0aWYgKCBvcHQuZHVyYXRpb24gaW4galF1ZXJ5LmZ4LnNwZWVkcyApIHtcblx0XHRcdFx0b3B0LmR1cmF0aW9uID0galF1ZXJ5LmZ4LnNwZWVkc1sgb3B0LmR1cmF0aW9uIF07XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9wdC5kdXJhdGlvbiA9IGpRdWVyeS5meC5zcGVlZHMuX2RlZmF1bHQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gTm9ybWFsaXplIG9wdC5xdWV1ZSAtIHRydWUvdW5kZWZpbmVkL251bGwgLT4gXCJmeFwiXG5cdGlmICggb3B0LnF1ZXVlID09IG51bGwgfHwgb3B0LnF1ZXVlID09PSB0cnVlICkge1xuXHRcdG9wdC5xdWV1ZSA9IFwiZnhcIjtcblx0fVxuXG5cdC8vIFF1ZXVlaW5nXG5cdG9wdC5vbGQgPSBvcHQuY29tcGxldGU7XG5cblx0b3B0LmNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCBvcHQub2xkICkgKSB7XG5cdFx0XHRvcHQub2xkLmNhbGwoIHRoaXMgKTtcblx0XHR9XG5cblx0XHRpZiAoIG9wdC5xdWV1ZSApIHtcblx0XHRcdGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCBvcHQucXVldWUgKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIG9wdDtcbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0ZmFkZVRvOiBmdW5jdGlvbiggc3BlZWQsIHRvLCBlYXNpbmcsIGNhbGxiYWNrICkge1xuXG5cdFx0Ly8gU2hvdyBhbnkgaGlkZGVuIGVsZW1lbnRzIGFmdGVyIHNldHRpbmcgb3BhY2l0eSB0byAwXG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyKCBpc0hpZGRlbldpdGhpblRyZWUgKS5jc3MoIFwib3BhY2l0eVwiLCAwICkuc2hvdygpXG5cblx0XHRcdC8vIEFuaW1hdGUgdG8gdGhlIHZhbHVlIHNwZWNpZmllZFxuXHRcdFx0LmVuZCgpLmFuaW1hdGUoIHsgb3BhY2l0eTogdG8gfSwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKTtcblx0fSxcblx0YW5pbWF0ZTogZnVuY3Rpb24oIHByb3AsIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICkge1xuXHRcdHZhciBlbXB0eSA9IGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBwcm9wICksXG5cdFx0XHRvcHRhbGwgPSBqUXVlcnkuc3BlZWQoIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICksXG5cdFx0XHRkb0FuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdC8vIE9wZXJhdGUgb24gYSBjb3B5IG9mIHByb3Agc28gcGVyLXByb3BlcnR5IGVhc2luZyB3b24ndCBiZSBsb3N0XG5cdFx0XHRcdHZhciBhbmltID0gQW5pbWF0aW9uKCB0aGlzLCBqUXVlcnkuZXh0ZW5kKCB7fSwgcHJvcCApLCBvcHRhbGwgKTtcblxuXHRcdFx0XHQvLyBFbXB0eSBhbmltYXRpb25zLCBvciBmaW5pc2hpbmcgcmVzb2x2ZXMgaW1tZWRpYXRlbHlcblx0XHRcdFx0aWYgKCBlbXB0eSB8fCBkYXRhUHJpdi5nZXQoIHRoaXMsIFwiZmluaXNoXCIgKSApIHtcblx0XHRcdFx0XHRhbmltLnN0b3AoIHRydWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdGRvQW5pbWF0aW9uLmZpbmlzaCA9IGRvQW5pbWF0aW9uO1xuXG5cdFx0cmV0dXJuIGVtcHR5IHx8IG9wdGFsbC5xdWV1ZSA9PT0gZmFsc2UgP1xuXHRcdFx0dGhpcy5lYWNoKCBkb0FuaW1hdGlvbiApIDpcblx0XHRcdHRoaXMucXVldWUoIG9wdGFsbC5xdWV1ZSwgZG9BbmltYXRpb24gKTtcblx0fSxcblx0c3RvcDogZnVuY3Rpb24oIHR5cGUsIGNsZWFyUXVldWUsIGdvdG9FbmQgKSB7XG5cdFx0dmFyIHN0b3BRdWV1ZSA9IGZ1bmN0aW9uKCBob29rcyApIHtcblx0XHRcdHZhciBzdG9wID0gaG9va3Muc3RvcDtcblx0XHRcdGRlbGV0ZSBob29rcy5zdG9wO1xuXHRcdFx0c3RvcCggZ290b0VuZCApO1xuXHRcdH07XG5cblx0XHRpZiAoIHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0Z290b0VuZCA9IGNsZWFyUXVldWU7XG5cdFx0XHRjbGVhclF1ZXVlID0gdHlwZTtcblx0XHRcdHR5cGUgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdGlmICggY2xlYXJRdWV1ZSApIHtcblx0XHRcdHRoaXMucXVldWUoIHR5cGUgfHwgXCJmeFwiLCBbXSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGRlcXVldWUgPSB0cnVlLFxuXHRcdFx0XHRpbmRleCA9IHR5cGUgIT0gbnVsbCAmJiB0eXBlICsgXCJxdWV1ZUhvb2tzXCIsXG5cdFx0XHRcdHRpbWVycyA9IGpRdWVyeS50aW1lcnMsXG5cdFx0XHRcdGRhdGEgPSBkYXRhUHJpdi5nZXQoIHRoaXMgKTtcblxuXHRcdFx0aWYgKCBpbmRleCApIHtcblx0XHRcdFx0aWYgKCBkYXRhWyBpbmRleCBdICYmIGRhdGFbIGluZGV4IF0uc3RvcCApIHtcblx0XHRcdFx0XHRzdG9wUXVldWUoIGRhdGFbIGluZGV4IF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yICggaW5kZXggaW4gZGF0YSApIHtcblx0XHRcdFx0XHRpZiAoIGRhdGFbIGluZGV4IF0gJiYgZGF0YVsgaW5kZXggXS5zdG9wICYmIHJydW4udGVzdCggaW5kZXggKSApIHtcblx0XHRcdFx0XHRcdHN0b3BRdWV1ZSggZGF0YVsgaW5kZXggXSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKCBpbmRleCA9IHRpbWVycy5sZW5ndGg7IGluZGV4LS07ICkge1xuXHRcdFx0XHRpZiAoIHRpbWVyc1sgaW5kZXggXS5lbGVtID09PSB0aGlzICYmXG5cdFx0XHRcdFx0KCB0eXBlID09IG51bGwgfHwgdGltZXJzWyBpbmRleCBdLnF1ZXVlID09PSB0eXBlICkgKSB7XG5cblx0XHRcdFx0XHR0aW1lcnNbIGluZGV4IF0uYW5pbS5zdG9wKCBnb3RvRW5kICk7XG5cdFx0XHRcdFx0ZGVxdWV1ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdHRpbWVycy5zcGxpY2UoIGluZGV4LCAxICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gU3RhcnQgdGhlIG5leHQgaW4gdGhlIHF1ZXVlIGlmIHRoZSBsYXN0IHN0ZXAgd2Fzbid0IGZvcmNlZC5cblx0XHRcdC8vIFRpbWVycyBjdXJyZW50bHkgd2lsbCBjYWxsIHRoZWlyIGNvbXBsZXRlIGNhbGxiYWNrcywgd2hpY2hcblx0XHRcdC8vIHdpbGwgZGVxdWV1ZSBidXQgb25seSBpZiB0aGV5IHdlcmUgZ290b0VuZC5cblx0XHRcdGlmICggZGVxdWV1ZSB8fCAhZ290b0VuZCApIHtcblx0XHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIHR5cGUgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cdGZpbmlzaDogZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0aWYgKCB0eXBlICE9PSBmYWxzZSApIHtcblx0XHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW5kZXgsXG5cdFx0XHRcdGRhdGEgPSBkYXRhUHJpdi5nZXQoIHRoaXMgKSxcblx0XHRcdFx0cXVldWUgPSBkYXRhWyB0eXBlICsgXCJxdWV1ZVwiIF0sXG5cdFx0XHRcdGhvb2tzID0gZGF0YVsgdHlwZSArIFwicXVldWVIb29rc1wiIF0sXG5cdFx0XHRcdHRpbWVycyA9IGpRdWVyeS50aW1lcnMsXG5cdFx0XHRcdGxlbmd0aCA9IHF1ZXVlID8gcXVldWUubGVuZ3RoIDogMDtcblxuXHRcdFx0Ly8gRW5hYmxlIGZpbmlzaGluZyBmbGFnIG9uIHByaXZhdGUgZGF0YVxuXHRcdFx0ZGF0YS5maW5pc2ggPSB0cnVlO1xuXG5cdFx0XHQvLyBFbXB0eSB0aGUgcXVldWUgZmlyc3Rcblx0XHRcdGpRdWVyeS5xdWV1ZSggdGhpcywgdHlwZSwgW10gKTtcblxuXHRcdFx0aWYgKCBob29rcyAmJiBob29rcy5zdG9wICkge1xuXHRcdFx0XHRob29rcy5zdG9wLmNhbGwoIHRoaXMsIHRydWUgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9vayBmb3IgYW55IGFjdGl2ZSBhbmltYXRpb25zLCBhbmQgZmluaXNoIHRoZW1cblx0XHRcdGZvciAoIGluZGV4ID0gdGltZXJzLmxlbmd0aDsgaW5kZXgtLTsgKSB7XG5cdFx0XHRcdGlmICggdGltZXJzWyBpbmRleCBdLmVsZW0gPT09IHRoaXMgJiYgdGltZXJzWyBpbmRleCBdLnF1ZXVlID09PSB0eXBlICkge1xuXHRcdFx0XHRcdHRpbWVyc1sgaW5kZXggXS5hbmltLnN0b3AoIHRydWUgKTtcblx0XHRcdFx0XHR0aW1lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvb2sgZm9yIGFueSBhbmltYXRpb25zIGluIHRoZSBvbGQgcXVldWUgYW5kIGZpbmlzaCB0aGVtXG5cdFx0XHRmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdFx0XHRpZiAoIHF1ZXVlWyBpbmRleCBdICYmIHF1ZXVlWyBpbmRleCBdLmZpbmlzaCApIHtcblx0XHRcdFx0XHRxdWV1ZVsgaW5kZXggXS5maW5pc2guY2FsbCggdGhpcyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFR1cm4gb2ZmIGZpbmlzaGluZyBmbGFnXG5cdFx0XHRkZWxldGUgZGF0YS5maW5pc2g7XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5lYWNoKCBbIFwidG9nZ2xlXCIsIFwic2hvd1wiLCBcImhpZGVcIiBdLCBmdW5jdGlvbiggX2ksIG5hbWUgKSB7XG5cdHZhciBjc3NGbiA9IGpRdWVyeS5mblsgbmFtZSBdO1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4gc3BlZWQgPT0gbnVsbCB8fCB0eXBlb2Ygc3BlZWQgPT09IFwiYm9vbGVhblwiID9cblx0XHRcdGNzc0ZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSA6XG5cdFx0XHR0aGlzLmFuaW1hdGUoIGdlbkZ4KCBuYW1lLCB0cnVlICksIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICk7XG5cdH07XG59ICk7XG5cbi8vIEdlbmVyYXRlIHNob3J0Y3V0cyBmb3IgY3VzdG9tIGFuaW1hdGlvbnNcbmpRdWVyeS5lYWNoKCB7XG5cdHNsaWRlRG93bjogZ2VuRngoIFwic2hvd1wiICksXG5cdHNsaWRlVXA6IGdlbkZ4KCBcImhpZGVcIiApLFxuXHRzbGlkZVRvZ2dsZTogZ2VuRngoIFwidG9nZ2xlXCIgKSxcblx0ZmFkZUluOiB7IG9wYWNpdHk6IFwic2hvd1wiIH0sXG5cdGZhZGVPdXQ6IHsgb3BhY2l0eTogXCJoaWRlXCIgfSxcblx0ZmFkZVRvZ2dsZTogeyBvcGFjaXR5OiBcInRvZ2dsZVwiIH1cbn0sIGZ1bmN0aW9uKCBuYW1lLCBwcm9wcyApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIHRoaXMuYW5pbWF0ZSggcHJvcHMsIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICk7XG5cdH07XG59ICk7XG5cbmpRdWVyeS50aW1lcnMgPSBbXTtcbmpRdWVyeS5meC50aWNrID0gZnVuY3Rpb24oKSB7XG5cdHZhciB0aW1lcixcblx0XHRpID0gMCxcblx0XHR0aW1lcnMgPSBqUXVlcnkudGltZXJzO1xuXG5cdGZ4Tm93ID0gRGF0ZS5ub3coKTtcblxuXHRmb3IgKCA7IGkgPCB0aW1lcnMubGVuZ3RoOyBpKysgKSB7XG5cdFx0dGltZXIgPSB0aW1lcnNbIGkgXTtcblxuXHRcdC8vIFJ1biB0aGUgdGltZXIgYW5kIHNhZmVseSByZW1vdmUgaXQgd2hlbiBkb25lIChhbGxvd2luZyBmb3IgZXh0ZXJuYWwgcmVtb3ZhbClcblx0XHRpZiAoICF0aW1lcigpICYmIHRpbWVyc1sgaSBdID09PSB0aW1lciApIHtcblx0XHRcdHRpbWVycy5zcGxpY2UoIGktLSwgMSApO1xuXHRcdH1cblx0fVxuXG5cdGlmICggIXRpbWVycy5sZW5ndGggKSB7XG5cdFx0alF1ZXJ5LmZ4LnN0b3AoKTtcblx0fVxuXHRmeE5vdyA9IHVuZGVmaW5lZDtcbn07XG5cbmpRdWVyeS5meC50aW1lciA9IGZ1bmN0aW9uKCB0aW1lciApIHtcblx0alF1ZXJ5LnRpbWVycy5wdXNoKCB0aW1lciApO1xuXHRqUXVlcnkuZnguc3RhcnQoKTtcbn07XG5cbmpRdWVyeS5meC5pbnRlcnZhbCA9IDEzO1xualF1ZXJ5LmZ4LnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG5cdGlmICggaW5Qcm9ncmVzcyApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpblByb2dyZXNzID0gdHJ1ZTtcblx0c2NoZWR1bGUoKTtcbn07XG5cbmpRdWVyeS5meC5zdG9wID0gZnVuY3Rpb24oKSB7XG5cdGluUHJvZ3Jlc3MgPSBudWxsO1xufTtcblxualF1ZXJ5LmZ4LnNwZWVkcyA9IHtcblx0c2xvdzogNjAwLFxuXHRmYXN0OiAyMDAsXG5cblx0Ly8gRGVmYXVsdCBzcGVlZFxuXHRfZGVmYXVsdDogNDAwXG59O1xuXG5cbi8vIEJhc2VkIG9mZiBvZiB0aGUgcGx1Z2luIGJ5IENsaW50IEhlbGZlcnMsIHdpdGggcGVybWlzc2lvbi5cbmpRdWVyeS5mbi5kZWxheSA9IGZ1bmN0aW9uKCB0aW1lLCB0eXBlICkge1xuXHR0aW1lID0galF1ZXJ5LmZ4ID8galF1ZXJ5LmZ4LnNwZWVkc1sgdGltZSBdIHx8IHRpbWUgOiB0aW1lO1xuXHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cblx0cmV0dXJuIHRoaXMucXVldWUoIHR5cGUsIGZ1bmN0aW9uKCBuZXh0LCBob29rcyApIHtcblx0XHR2YXIgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCBuZXh0LCB0aW1lICk7XG5cdFx0aG9va3Muc3RvcCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dCggdGltZW91dCApO1xuXHRcdH07XG5cdH0gKTtcbn07XG5cblxuKCBmdW5jdGlvbigpIHtcblx0dmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICksXG5cdFx0c2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJzZWxlY3RcIiApLFxuXHRcdG9wdCA9IHNlbGVjdC5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJvcHRpb25cIiApICk7XG5cblx0aW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4zIG9ubHlcblx0Ly8gRGVmYXVsdCB2YWx1ZSBmb3IgYSBjaGVja2JveCBzaG91bGQgYmUgXCJvblwiXG5cdHN1cHBvcnQuY2hlY2tPbiA9IGlucHV0LnZhbHVlICE9PSBcIlwiO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHQvLyBNdXN0IGFjY2VzcyBzZWxlY3RlZEluZGV4IHRvIG1ha2UgZGVmYXVsdCBvcHRpb25zIHNlbGVjdFxuXHRzdXBwb3J0Lm9wdFNlbGVjdGVkID0gb3B0LnNlbGVjdGVkO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHQvLyBBbiBpbnB1dCBsb3NlcyBpdHMgdmFsdWUgYWZ0ZXIgYmVjb21pbmcgYSByYWRpb1xuXHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApO1xuXHRpbnB1dC52YWx1ZSA9IFwidFwiO1xuXHRpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuXHRzdXBwb3J0LnJhZGlvVmFsdWUgPSBpbnB1dC52YWx1ZSA9PT0gXCJ0XCI7XG59ICkoKTtcblxuXG52YXIgYm9vbEhvb2ssXG5cdGF0dHJIYW5kbGUgPSBqUXVlcnkuZXhwci5hdHRySGFuZGxlO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGF0dHI6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBqUXVlcnkuYXR0ciwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XG5cdH0sXG5cblx0cmVtb3ZlQXR0cjogZnVuY3Rpb24oIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkucmVtb3ZlQXR0ciggdGhpcywgbmFtZSApO1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdGF0dHI6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCB2YWx1ZSApIHtcblx0XHR2YXIgcmV0LCBob29rcyxcblx0XHRcdG5UeXBlID0gZWxlbS5ub2RlVHlwZTtcblxuXHRcdC8vIERvbid0IGdldC9zZXQgYXR0cmlidXRlcyBvbiB0ZXh0LCBjb21tZW50IGFuZCBhdHRyaWJ1dGUgbm9kZXNcblx0XHRpZiAoIG5UeXBlID09PSAzIHx8IG5UeXBlID09PSA4IHx8IG5UeXBlID09PSAyICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIEZhbGxiYWNrIHRvIHByb3Agd2hlbiBhdHRyaWJ1dGVzIGFyZSBub3Qgc3VwcG9ydGVkXG5cdFx0aWYgKCB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGUgPT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LnByb3AoIGVsZW0sIG5hbWUsIHZhbHVlICk7XG5cdFx0fVxuXG5cdFx0Ly8gQXR0cmlidXRlIGhvb2tzIGFyZSBkZXRlcm1pbmVkIGJ5IHRoZSBsb3dlcmNhc2UgdmVyc2lvblxuXHRcdC8vIEdyYWIgbmVjZXNzYXJ5IGhvb2sgaWYgb25lIGlzIGRlZmluZWRcblx0XHRpZiAoIG5UeXBlICE9PSAxIHx8ICFqUXVlcnkuaXNYTUxEb2MoIGVsZW0gKSApIHtcblx0XHRcdGhvb2tzID0galF1ZXJ5LmF0dHJIb29rc1sgbmFtZS50b0xvd2VyQ2FzZSgpIF0gfHxcblx0XHRcdFx0KCBqUXVlcnkuZXhwci5tYXRjaC5ib29sLnRlc3QoIG5hbWUgKSA/IGJvb2xIb29rIDogdW5kZWZpbmVkICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gbnVsbCApIHtcblx0XHRcdFx0alF1ZXJ5LnJlbW92ZUF0dHIoIGVsZW0sIG5hbWUgKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGhvb2tzICYmIFwic2V0XCIgaW4gaG9va3MgJiZcblx0XHRcdFx0KCByZXQgPSBob29rcy5zZXQoIGVsZW0sIHZhbHVlLCBuYW1lICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSggbmFtZSwgdmFsdWUgKyBcIlwiICk7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmICggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBuYW1lICkgKSAhPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXG5cdFx0cmV0ID0galF1ZXJ5LmZpbmQuYXR0ciggZWxlbSwgbmFtZSApO1xuXG5cdFx0Ly8gTm9uLWV4aXN0ZW50IGF0dHJpYnV0ZXMgcmV0dXJuIG51bGwsIHdlIG5vcm1hbGl6ZSB0byB1bmRlZmluZWRcblx0XHRyZXR1cm4gcmV0ID09IG51bGwgPyB1bmRlZmluZWQgOiByZXQ7XG5cdH0sXG5cblx0YXR0ckhvb2tzOiB7XG5cdFx0dHlwZToge1xuXHRcdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG5cdFx0XHRcdGlmICggIXN1cHBvcnQucmFkaW9WYWx1ZSAmJiB2YWx1ZSA9PT0gXCJyYWRpb1wiICYmXG5cdFx0XHRcdFx0bm9kZU5hbWUoIGVsZW0sIFwiaW5wdXRcIiApICkge1xuXHRcdFx0XHRcdHZhciB2YWwgPSBlbGVtLnZhbHVlO1xuXHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBcInR5cGVcIiwgdmFsdWUgKTtcblx0XHRcdFx0XHRpZiAoIHZhbCApIHtcblx0XHRcdFx0XHRcdGVsZW0udmFsdWUgPSB2YWw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRyZW1vdmVBdHRyOiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG5cdFx0dmFyIG5hbWUsXG5cdFx0XHRpID0gMCxcblxuXHRcdFx0Ly8gQXR0cmlidXRlIG5hbWVzIGNhbiBjb250YWluIG5vbi1IVE1MIHdoaXRlc3BhY2UgY2hhcmFjdGVyc1xuXHRcdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc3ludGF4Lmh0bWwjYXR0cmlidXRlcy0yXG5cdFx0XHRhdHRyTmFtZXMgPSB2YWx1ZSAmJiB2YWx1ZS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApO1xuXG5cdFx0aWYgKCBhdHRyTmFtZXMgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdHdoaWxlICggKCBuYW1lID0gYXR0ck5hbWVzWyBpKysgXSApICkge1xuXHRcdFx0XHRlbGVtLnJlbW92ZUF0dHJpYnV0ZSggbmFtZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSApO1xuXG4vLyBIb29rcyBmb3IgYm9vbGVhbiBhdHRyaWJ1dGVzXG5ib29sSG9vayA9IHtcblx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUsIG5hbWUgKSB7XG5cdFx0aWYgKCB2YWx1ZSA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdC8vIFJlbW92ZSBib29sZWFuIGF0dHJpYnV0ZXMgd2hlbiBzZXQgdG8gZmFsc2Vcblx0XHRcdGpRdWVyeS5yZW1vdmVBdHRyKCBlbGVtLCBuYW1lICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBuYW1lLCBuYW1lICk7XG5cdFx0fVxuXHRcdHJldHVybiBuYW1lO1xuXHR9XG59O1xuXG5qUXVlcnkuZWFjaCggalF1ZXJ5LmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goIC9cXHcrL2cgKSwgZnVuY3Rpb24oIF9pLCBuYW1lICkge1xuXHR2YXIgZ2V0dGVyID0gYXR0ckhhbmRsZVsgbmFtZSBdIHx8IGpRdWVyeS5maW5kLmF0dHI7XG5cblx0YXR0ckhhbmRsZVsgbmFtZSBdID0gZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGlzWE1MICkge1xuXHRcdHZhciByZXQsIGhhbmRsZSxcblx0XHRcdGxvd2VyY2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRpZiAoICFpc1hNTCApIHtcblxuXHRcdFx0Ly8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcCBieSB0ZW1wb3JhcmlseSByZW1vdmluZyB0aGlzIGZ1bmN0aW9uIGZyb20gdGhlIGdldHRlclxuXHRcdFx0aGFuZGxlID0gYXR0ckhhbmRsZVsgbG93ZXJjYXNlTmFtZSBdO1xuXHRcdFx0YXR0ckhhbmRsZVsgbG93ZXJjYXNlTmFtZSBdID0gcmV0O1xuXHRcdFx0cmV0ID0gZ2V0dGVyKCBlbGVtLCBuYW1lLCBpc1hNTCApICE9IG51bGwgP1xuXHRcdFx0XHRsb3dlcmNhc2VOYW1lIDpcblx0XHRcdFx0bnVsbDtcblx0XHRcdGF0dHJIYW5kbGVbIGxvd2VyY2FzZU5hbWUgXSA9IGhhbmRsZTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcbn0gKTtcblxuXG5cblxudmFyIHJmb2N1c2FibGUgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFxuXHRyY2xpY2thYmxlID0gL14oPzphfGFyZWEpJC9pO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHByb3A6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBqUXVlcnkucHJvcCwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XG5cdH0sXG5cblx0cmVtb3ZlUHJvcDogZnVuY3Rpb24oIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRkZWxldGUgdGhpc1sgalF1ZXJ5LnByb3BGaXhbIG5hbWUgXSB8fCBuYW1lIF07XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5leHRlbmQoIHtcblx0cHJvcDogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlICkge1xuXHRcdHZhciByZXQsIGhvb2tzLFxuXHRcdFx0blR5cGUgPSBlbGVtLm5vZGVUeXBlO1xuXG5cdFx0Ly8gRG9uJ3QgZ2V0L3NldCBwcm9wZXJ0aWVzIG9uIHRleHQsIGNvbW1lbnQgYW5kIGF0dHJpYnV0ZSBub2Rlc1xuXHRcdGlmICggblR5cGUgPT09IDMgfHwgblR5cGUgPT09IDggfHwgblR5cGUgPT09IDIgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBuVHlwZSAhPT0gMSB8fCAhalF1ZXJ5LmlzWE1MRG9jKCBlbGVtICkgKSB7XG5cblx0XHRcdC8vIEZpeCBuYW1lIGFuZCBhdHRhY2ggaG9va3Ncblx0XHRcdG5hbWUgPSBqUXVlcnkucHJvcEZpeFsgbmFtZSBdIHx8IG5hbWU7XG5cdFx0XHRob29rcyA9IGpRdWVyeS5wcm9wSG9va3NbIG5hbWUgXTtcblx0XHR9XG5cblx0XHRpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRpZiAoIGhvb2tzICYmIFwic2V0XCIgaW4gaG9va3MgJiZcblx0XHRcdFx0KCByZXQgPSBob29rcy5zZXQoIGVsZW0sIHZhbHVlLCBuYW1lICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKCBlbGVtWyBuYW1lIF0gPSB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdGlmICggaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAoIHJldCA9IGhvb2tzLmdldCggZWxlbSwgbmFtZSApICkgIT09IG51bGwgKSB7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblxuXHRcdHJldHVybiBlbGVtWyBuYW1lIF07XG5cdH0sXG5cblx0cHJvcEhvb2tzOiB7XG5cdFx0dGFiSW5kZXg6IHtcblx0XHRcdGdldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuXHRcdFx0XHQvLyBlbGVtLnRhYkluZGV4IGRvZXNuJ3QgYWx3YXlzIHJldHVybiB0aGVcblx0XHRcdFx0Ly8gY29ycmVjdCB2YWx1ZSB3aGVuIGl0IGhhc24ndCBiZWVuIGV4cGxpY2l0bHkgc2V0XG5cdFx0XHRcdC8vIFVzZSBwcm9wZXIgYXR0cmlidXRlIHJldHJpZXZhbCAodHJhYy0xMjA3Milcblx0XHRcdFx0dmFyIHRhYmluZGV4ID0galF1ZXJ5LmZpbmQuYXR0ciggZWxlbSwgXCJ0YWJpbmRleFwiICk7XG5cblx0XHRcdFx0aWYgKCB0YWJpbmRleCApIHtcblx0XHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQoIHRhYmluZGV4LCAxMCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHJmb2N1c2FibGUudGVzdCggZWxlbS5ub2RlTmFtZSApIHx8XG5cdFx0XHRcdFx0cmNsaWNrYWJsZS50ZXN0KCBlbGVtLm5vZGVOYW1lICkgJiZcblx0XHRcdFx0XHRlbGVtLmhyZWZcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdHByb3BGaXg6IHtcblx0XHRcImZvclwiOiBcImh0bWxGb3JcIixcblx0XHRcImNsYXNzXCI6IFwiY2xhc3NOYW1lXCJcblx0fVxufSApO1xuXG4vLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcbi8vIEFjY2Vzc2luZyB0aGUgc2VsZWN0ZWRJbmRleCBwcm9wZXJ0eVxuLy8gZm9yY2VzIHRoZSBicm93c2VyIHRvIHJlc3BlY3Qgc2V0dGluZyBzZWxlY3RlZFxuLy8gb24gdGhlIG9wdGlvblxuLy8gVGhlIGdldHRlciBlbnN1cmVzIGEgZGVmYXVsdCBvcHRpb24gaXMgc2VsZWN0ZWRcbi8vIHdoZW4gaW4gYW4gb3B0Z3JvdXBcbi8vIGVzbGludCBydWxlIFwibm8tdW51c2VkLWV4cHJlc3Npb25zXCIgaXMgZGlzYWJsZWQgZm9yIHRoaXMgY29kZVxuLy8gc2luY2UgaXQgY29uc2lkZXJzIHN1Y2ggYWNjZXNzaW9ucyBub29wXG5pZiAoICFzdXBwb3J0Lm9wdFNlbGVjdGVkICkge1xuXHRqUXVlcnkucHJvcEhvb2tzLnNlbGVjdGVkID0ge1xuXHRcdGdldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdC8qIGVzbGludCBuby11bnVzZWQtZXhwcmVzc2lvbnM6IFwib2ZmXCIgKi9cblxuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdGlmICggcGFyZW50ICYmIHBhcmVudC5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRwYXJlbnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSxcblx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0XHQvKiBlc2xpbnQgbm8tdW51c2VkLWV4cHJlc3Npb25zOiBcIm9mZlwiICovXG5cblx0XHRcdHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cdFx0XHRpZiAoIHBhcmVudCApIHtcblx0XHRcdFx0cGFyZW50LnNlbGVjdGVkSW5kZXg7XG5cblx0XHRcdFx0aWYgKCBwYXJlbnQucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0XHRwYXJlbnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5qUXVlcnkuZWFjaCggW1xuXHRcInRhYkluZGV4XCIsXG5cdFwicmVhZE9ubHlcIixcblx0XCJtYXhMZW5ndGhcIixcblx0XCJjZWxsU3BhY2luZ1wiLFxuXHRcImNlbGxQYWRkaW5nXCIsXG5cdFwicm93U3BhblwiLFxuXHRcImNvbFNwYW5cIixcblx0XCJ1c2VNYXBcIixcblx0XCJmcmFtZUJvcmRlclwiLFxuXHRcImNvbnRlbnRFZGl0YWJsZVwiXG5dLCBmdW5jdGlvbigpIHtcblx0alF1ZXJ5LnByb3BGaXhbIHRoaXMudG9Mb3dlckNhc2UoKSBdID0gdGhpcztcbn0gKTtcblxuXG5cblxuXHQvLyBTdHJpcCBhbmQgY29sbGFwc2Ugd2hpdGVzcGFjZSBhY2NvcmRpbmcgdG8gSFRNTCBzcGVjXG5cdC8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNzdHJpcC1hbmQtY29sbGFwc2UtYXNjaWktd2hpdGVzcGFjZVxuXHRmdW5jdGlvbiBzdHJpcEFuZENvbGxhcHNlKCB2YWx1ZSApIHtcblx0XHR2YXIgdG9rZW5zID0gdmFsdWUubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXTtcblx0XHRyZXR1cm4gdG9rZW5zLmpvaW4oIFwiIFwiICk7XG5cdH1cblxuXG5mdW5jdGlvbiBnZXRDbGFzcyggZWxlbSApIHtcblx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlICYmIGVsZW0uZ2V0QXR0cmlidXRlKCBcImNsYXNzXCIgKSB8fCBcIlwiO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VzVG9BcnJheSggdmFsdWUgKSB7XG5cdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblx0aWYgKCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0cmV0dXJuIHZhbHVlLm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW107XG5cdH1cblx0cmV0dXJuIFtdO1xufVxuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGFkZENsYXNzOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGNsYXNzTmFtZXMsIGN1ciwgY3VyVmFsdWUsIGNsYXNzTmFtZSwgaSwgZmluYWxWYWx1ZTtcblxuXHRcdGlmICggaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBqICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5hZGRDbGFzcyggdmFsdWUuY2FsbCggdGhpcywgaiwgZ2V0Q2xhc3MoIHRoaXMgKSApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0Y2xhc3NOYW1lcyA9IGNsYXNzZXNUb0FycmF5KCB2YWx1ZSApO1xuXG5cdFx0aWYgKCBjbGFzc05hbWVzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjdXJWYWx1ZSA9IGdldENsYXNzKCB0aGlzICk7XG5cdFx0XHRcdGN1ciA9IHRoaXMubm9kZVR5cGUgPT09IDEgJiYgKCBcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoIGN1clZhbHVlICkgKyBcIiBcIiApO1xuXG5cdFx0XHRcdGlmICggY3VyICkge1xuXHRcdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgY2xhc3NOYW1lcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZXNbIGkgXTtcblx0XHRcdFx0XHRcdGlmICggY3VyLmluZGV4T2YoIFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCIgKSA8IDAgKSB7XG5cdFx0XHRcdFx0XHRcdGN1ciArPSBjbGFzc05hbWUgKyBcIiBcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBPbmx5IGFzc2lnbiBpZiBkaWZmZXJlbnQgdG8gYXZvaWQgdW5uZWVkZWQgcmVuZGVyaW5nLlxuXHRcdFx0XHRcdGZpbmFsVmFsdWUgPSBzdHJpcEFuZENvbGxhcHNlKCBjdXIgKTtcblx0XHRcdFx0XHRpZiAoIGN1clZhbHVlICE9PSBmaW5hbFZhbHVlICkge1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIiwgZmluYWxWYWx1ZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHJlbW92ZUNsYXNzOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGNsYXNzTmFtZXMsIGN1ciwgY3VyVmFsdWUsIGNsYXNzTmFtZSwgaSwgZmluYWxWYWx1ZTtcblxuXHRcdGlmICggaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBqICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5yZW1vdmVDbGFzcyggdmFsdWUuY2FsbCggdGhpcywgaiwgZ2V0Q2xhc3MoIHRoaXMgKSApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhYXJndW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiB0aGlzLmF0dHIoIFwiY2xhc3NcIiwgXCJcIiApO1xuXHRcdH1cblxuXHRcdGNsYXNzTmFtZXMgPSBjbGFzc2VzVG9BcnJheSggdmFsdWUgKTtcblxuXHRcdGlmICggY2xhc3NOYW1lcy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y3VyVmFsdWUgPSBnZXRDbGFzcyggdGhpcyApO1xuXG5cdFx0XHRcdC8vIFRoaXMgZXhwcmVzc2lvbiBpcyBoZXJlIGZvciBiZXR0ZXIgY29tcHJlc3NpYmlsaXR5IChzZWUgYWRkQ2xhc3MpXG5cdFx0XHRcdGN1ciA9IHRoaXMubm9kZVR5cGUgPT09IDEgJiYgKCBcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoIGN1clZhbHVlICkgKyBcIiBcIiApO1xuXG5cdFx0XHRcdGlmICggY3VyICkge1xuXHRcdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgY2xhc3NOYW1lcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZXNbIGkgXTtcblxuXHRcdFx0XHRcdFx0Ly8gUmVtb3ZlICphbGwqIGluc3RhbmNlc1xuXHRcdFx0XHRcdFx0d2hpbGUgKCBjdXIuaW5kZXhPZiggXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIiApID4gLTEgKSB7XG5cdFx0XHRcdFx0XHRcdGN1ciA9IGN1ci5yZXBsYWNlKCBcIiBcIiArIGNsYXNzTmFtZSArIFwiIFwiLCBcIiBcIiApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIE9ubHkgYXNzaWduIGlmIGRpZmZlcmVudCB0byBhdm9pZCB1bm5lZWRlZCByZW5kZXJpbmcuXG5cdFx0XHRcdFx0ZmluYWxWYWx1ZSA9IHN0cmlwQW5kQ29sbGFwc2UoIGN1ciApO1xuXHRcdFx0XHRcdGlmICggY3VyVmFsdWUgIT09IGZpbmFsVmFsdWUgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSggXCJjbGFzc1wiLCBmaW5hbFZhbHVlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0dG9nZ2xlQ2xhc3M6IGZ1bmN0aW9uKCB2YWx1ZSwgc3RhdGVWYWwgKSB7XG5cdFx0dmFyIGNsYXNzTmFtZXMsIGNsYXNzTmFtZSwgaSwgc2VsZixcblx0XHRcdHR5cGUgPSB0eXBlb2YgdmFsdWUsXG5cdFx0XHRpc1ZhbGlkVmFsdWUgPSB0eXBlID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkoIHZhbHVlICk7XG5cblx0XHRpZiAoIGlzRnVuY3Rpb24oIHZhbHVlICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkudG9nZ2xlQ2xhc3MoXG5cdFx0XHRcdFx0dmFsdWUuY2FsbCggdGhpcywgaSwgZ2V0Q2xhc3MoIHRoaXMgKSwgc3RhdGVWYWwgKSxcblx0XHRcdFx0XHRzdGF0ZVZhbFxuXHRcdFx0XHQpO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdGlmICggdHlwZW9mIHN0YXRlVmFsID09PSBcImJvb2xlYW5cIiAmJiBpc1ZhbGlkVmFsdWUgKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGVWYWwgPyB0aGlzLmFkZENsYXNzKCB2YWx1ZSApIDogdGhpcy5yZW1vdmVDbGFzcyggdmFsdWUgKTtcblx0XHR9XG5cblx0XHRjbGFzc05hbWVzID0gY2xhc3Nlc1RvQXJyYXkoIHZhbHVlICk7XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggaXNWYWxpZFZhbHVlICkge1xuXG5cdFx0XHRcdC8vIFRvZ2dsZSBpbmRpdmlkdWFsIGNsYXNzIG5hbWVzXG5cdFx0XHRcdHNlbGYgPSBqUXVlcnkoIHRoaXMgKTtcblxuXHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IGNsYXNzTmFtZXMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lc1sgaSBdO1xuXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgZWFjaCBjbGFzc05hbWUgZ2l2ZW4sIHNwYWNlIHNlcGFyYXRlZCBsaXN0XG5cdFx0XHRcdFx0aWYgKCBzZWxmLmhhc0NsYXNzKCBjbGFzc05hbWUgKSApIHtcblx0XHRcdFx0XHRcdHNlbGYucmVtb3ZlQ2xhc3MoIGNsYXNzTmFtZSApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzZWxmLmFkZENsYXNzKCBjbGFzc05hbWUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gVG9nZ2xlIHdob2xlIGNsYXNzIG5hbWVcblx0XHRcdH0gZWxzZSBpZiAoIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdHlwZSA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IGdldENsYXNzKCB0aGlzICk7XG5cdFx0XHRcdGlmICggY2xhc3NOYW1lICkge1xuXG5cdFx0XHRcdFx0Ly8gU3RvcmUgY2xhc3NOYW1lIGlmIHNldFxuXHRcdFx0XHRcdGRhdGFQcml2LnNldCggdGhpcywgXCJfX2NsYXNzTmFtZV9fXCIsIGNsYXNzTmFtZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGVsZW1lbnQgaGFzIGEgY2xhc3MgbmFtZSBvciBpZiB3ZSdyZSBwYXNzZWQgYGZhbHNlYCxcblx0XHRcdFx0Ly8gdGhlbiByZW1vdmUgdGhlIHdob2xlIGNsYXNzbmFtZSAoaWYgdGhlcmUgd2FzIG9uZSwgdGhlIGFib3ZlIHNhdmVkIGl0KS5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGJyaW5nIGJhY2sgd2hhdGV2ZXIgd2FzIHByZXZpb3VzbHkgc2F2ZWQgKGlmIGFueXRoaW5nKSxcblx0XHRcdFx0Ly8gZmFsbGluZyBiYWNrIHRvIHRoZSBlbXB0eSBzdHJpbmcgaWYgbm90aGluZyB3YXMgc3RvcmVkLlxuXHRcdFx0XHRpZiAoIHRoaXMuc2V0QXR0cmlidXRlICkge1xuXHRcdFx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCBcImNsYXNzXCIsXG5cdFx0XHRcdFx0XHRjbGFzc05hbWUgfHwgdmFsdWUgPT09IGZhbHNlID9cblx0XHRcdFx0XHRcdFx0XCJcIiA6XG5cdFx0XHRcdFx0XHRcdGRhdGFQcml2LmdldCggdGhpcywgXCJfX2NsYXNzTmFtZV9fXCIgKSB8fCBcIlwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRoYXNDbGFzczogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHZhciBjbGFzc05hbWUsIGVsZW0sXG5cdFx0XHRpID0gMDtcblxuXHRcdGNsYXNzTmFtZSA9IFwiIFwiICsgc2VsZWN0b3IgKyBcIiBcIjtcblx0XHR3aGlsZSAoICggZWxlbSA9IHRoaXNbIGkrKyBdICkgKSB7XG5cdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgJiZcblx0XHRcdFx0KCBcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoIGdldENsYXNzKCBlbGVtICkgKSArIFwiIFwiICkuaW5kZXhPZiggY2xhc3NOYW1lICkgPiAtMSApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59ICk7XG5cblxuXG5cbnZhciBycmV0dXJuID0gL1xcci9nO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHZhbDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhciBob29rcywgcmV0LCB2YWx1ZUlzRnVuY3Rpb24sXG5cdFx0XHRlbGVtID0gdGhpc1sgMCBdO1xuXG5cdFx0aWYgKCAhYXJndW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdGlmICggZWxlbSApIHtcblx0XHRcdFx0aG9va3MgPSBqUXVlcnkudmFsSG9va3NbIGVsZW0udHlwZSBdIHx8XG5cdFx0XHRcdFx0alF1ZXJ5LnZhbEhvb2tzWyBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgXTtcblxuXHRcdFx0XHRpZiAoIGhvb2tzICYmXG5cdFx0XHRcdFx0XCJnZXRcIiBpbiBob29rcyAmJlxuXHRcdFx0XHRcdCggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBcInZhbHVlXCIgKSApICE9PSB1bmRlZmluZWRcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldCA9IGVsZW0udmFsdWU7XG5cblx0XHRcdFx0Ly8gSGFuZGxlIG1vc3QgY29tbW9uIHN0cmluZyBjYXNlc1xuXHRcdFx0XHRpZiAoIHR5cGVvZiByZXQgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJldC5yZXBsYWNlKCBycmV0dXJuLCBcIlwiICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBIYW5kbGUgY2FzZXMgd2hlcmUgdmFsdWUgaXMgbnVsbC91bmRlZiBvciBudW1iZXJcblx0XHRcdFx0cmV0dXJuIHJldCA9PSBudWxsID8gXCJcIiA6IHJldDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhbHVlSXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24oIHZhbHVlICk7XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdHZhciB2YWw7XG5cblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSAhPT0gMSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHZhbHVlSXNGdW5jdGlvbiApIHtcblx0XHRcdFx0dmFsID0gdmFsdWUuY2FsbCggdGhpcywgaSwgalF1ZXJ5KCB0aGlzICkudmFsKCkgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbCA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUcmVhdCBudWxsL3VuZGVmaW5lZCBhcyBcIlwiOyBjb252ZXJ0IG51bWJlcnMgdG8gc3RyaW5nXG5cdFx0XHRpZiAoIHZhbCA9PSBudWxsICkge1xuXHRcdFx0XHR2YWwgPSBcIlwiO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiICkge1xuXHRcdFx0XHR2YWwgKz0gXCJcIjtcblxuXHRcdFx0fSBlbHNlIGlmICggQXJyYXkuaXNBcnJheSggdmFsICkgKSB7XG5cdFx0XHRcdHZhbCA9IGpRdWVyeS5tYXAoIHZhbCwgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZSA9PSBudWxsID8gXCJcIiA6IHZhbHVlICsgXCJcIjtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0XHRob29rcyA9IGpRdWVyeS52YWxIb29rc1sgdGhpcy50eXBlIF0gfHwgalF1ZXJ5LnZhbEhvb2tzWyB0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgXTtcblxuXHRcdFx0Ly8gSWYgc2V0IHJldHVybnMgdW5kZWZpbmVkLCBmYWxsIGJhY2sgdG8gbm9ybWFsIHNldHRpbmdcblx0XHRcdGlmICggIWhvb2tzIHx8ICEoIFwic2V0XCIgaW4gaG9va3MgKSB8fCBob29rcy5zZXQoIHRoaXMsIHZhbCwgXCJ2YWx1ZVwiICkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHZhbDtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXHR2YWxIb29rczoge1xuXHRcdG9wdGlvbjoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0XHR2YXIgdmFsID0galF1ZXJ5LmZpbmQuYXR0ciggZWxlbSwgXCJ2YWx1ZVwiICk7XG5cdFx0XHRcdHJldHVybiB2YWwgIT0gbnVsbCA/XG5cdFx0XHRcdFx0dmFsIDpcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9MTAgLSAxMSBvbmx5XG5cdFx0XHRcdFx0Ly8gb3B0aW9uLnRleHQgdGhyb3dzIGV4Y2VwdGlvbnMgKHRyYWMtMTQ2ODYsIHRyYWMtMTQ4NTgpXG5cdFx0XHRcdFx0Ly8gU3RyaXAgYW5kIGNvbGxhcHNlIHdoaXRlc3BhY2Vcblx0XHRcdFx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNzdHJpcC1hbmQtY29sbGFwc2Utd2hpdGVzcGFjZVxuXHRcdFx0XHRcdHN0cmlwQW5kQ29sbGFwc2UoIGpRdWVyeS50ZXh0KCBlbGVtICkgKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHNlbGVjdDoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIHZhbHVlLCBvcHRpb24sIGksXG5cdFx0XHRcdFx0b3B0aW9ucyA9IGVsZW0ub3B0aW9ucyxcblx0XHRcdFx0XHRpbmRleCA9IGVsZW0uc2VsZWN0ZWRJbmRleCxcblx0XHRcdFx0XHRvbmUgPSBlbGVtLnR5cGUgPT09IFwic2VsZWN0LW9uZVwiLFxuXHRcdFx0XHRcdHZhbHVlcyA9IG9uZSA/IG51bGwgOiBbXSxcblx0XHRcdFx0XHRtYXggPSBvbmUgPyBpbmRleCArIDEgOiBvcHRpb25zLmxlbmd0aDtcblxuXHRcdFx0XHRpZiAoIGluZGV4IDwgMCApIHtcblx0XHRcdFx0XHRpID0gbWF4O1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aSA9IG9uZSA/IGluZGV4IDogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIHNlbGVjdGVkIG9wdGlvbnNcblx0XHRcdFx0Zm9yICggOyBpIDwgbWF4OyBpKysgKSB7XG5cdFx0XHRcdFx0b3B0aW9uID0gb3B0aW9uc1sgaSBdO1xuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0XHRcdFx0XHQvLyBJRTgtOSBkb2Vzbid0IHVwZGF0ZSBzZWxlY3RlZCBhZnRlciBmb3JtIHJlc2V0ICh0cmFjLTI1NTEpXG5cdFx0XHRcdFx0aWYgKCAoIG9wdGlvbi5zZWxlY3RlZCB8fCBpID09PSBpbmRleCApICYmXG5cblx0XHRcdFx0XHRcdFx0Ly8gRG9uJ3QgcmV0dXJuIG9wdGlvbnMgdGhhdCBhcmUgZGlzYWJsZWQgb3IgaW4gYSBkaXNhYmxlZCBvcHRncm91cFxuXHRcdFx0XHRcdFx0XHQhb3B0aW9uLmRpc2FibGVkICYmXG5cdFx0XHRcdFx0XHRcdCggIW9wdGlvbi5wYXJlbnROb2RlLmRpc2FibGVkIHx8XG5cdFx0XHRcdFx0XHRcdFx0IW5vZGVOYW1lKCBvcHRpb24ucGFyZW50Tm9kZSwgXCJvcHRncm91cFwiICkgKSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gR2V0IHRoZSBzcGVjaWZpYyB2YWx1ZSBmb3IgdGhlIG9wdGlvblxuXHRcdFx0XHRcdFx0dmFsdWUgPSBqUXVlcnkoIG9wdGlvbiApLnZhbCgpO1xuXG5cdFx0XHRcdFx0XHQvLyBXZSBkb24ndCBuZWVkIGFuIGFycmF5IGZvciBvbmUgc2VsZWN0c1xuXHRcdFx0XHRcdFx0aWYgKCBvbmUgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTXVsdGktU2VsZWN0cyByZXR1cm4gYW4gYXJyYXlcblx0XHRcdFx0XHRcdHZhbHVlcy5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHRcdFx0dmFyIG9wdGlvblNldCwgb3B0aW9uLFxuXHRcdFx0XHRcdG9wdGlvbnMgPSBlbGVtLm9wdGlvbnMsXG5cdFx0XHRcdFx0dmFsdWVzID0galF1ZXJ5Lm1ha2VBcnJheSggdmFsdWUgKSxcblx0XHRcdFx0XHRpID0gb3B0aW9ucy5sZW5ndGg7XG5cblx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0b3B0aW9uID0gb3B0aW9uc1sgaSBdO1xuXG5cdFx0XHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cblxuXHRcdFx0XHRcdGlmICggb3B0aW9uLnNlbGVjdGVkID1cblx0XHRcdFx0XHRcdGpRdWVyeS5pbkFycmF5KCBqUXVlcnkudmFsSG9va3Mub3B0aW9uLmdldCggb3B0aW9uICksIHZhbHVlcyApID4gLTFcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdG9wdGlvblNldCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRm9yY2UgYnJvd3NlcnMgdG8gYmVoYXZlIGNvbnNpc3RlbnRseSB3aGVuIG5vbi1tYXRjaGluZyB2YWx1ZSBpcyBzZXRcblx0XHRcdFx0aWYgKCAhb3B0aW9uU2V0ICkge1xuXHRcdFx0XHRcdGVsZW0uc2VsZWN0ZWRJbmRleCA9IC0xO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59ICk7XG5cbi8vIFJhZGlvcyBhbmQgY2hlY2tib3hlcyBnZXR0ZXIvc2V0dGVyXG5qUXVlcnkuZWFjaCggWyBcInJhZGlvXCIsIFwiY2hlY2tib3hcIiBdLCBmdW5jdGlvbigpIHtcblx0alF1ZXJ5LnZhbEhvb2tzWyB0aGlzIF0gPSB7XG5cdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0XHRcdHJldHVybiAoIGVsZW0uY2hlY2tlZCA9IGpRdWVyeS5pbkFycmF5KCBqUXVlcnkoIGVsZW0gKS52YWwoKSwgdmFsdWUgKSA+IC0xICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRpZiAoICFzdXBwb3J0LmNoZWNrT24gKSB7XG5cdFx0alF1ZXJ5LnZhbEhvb2tzWyB0aGlzIF0uZ2V0ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoIFwidmFsdWVcIiApID09PSBudWxsID8gXCJvblwiIDogZWxlbS52YWx1ZTtcblx0XHR9O1xuXHR9XG59ICk7XG5cblxuXG5cbi8vIFJldHVybiBqUXVlcnkgZm9yIGF0dHJpYnV0ZXMtb25seSBpbmNsdXNpb25cbnZhciBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcblxudmFyIG5vbmNlID0geyBndWlkOiBEYXRlLm5vdygpIH07XG5cbnZhciBycXVlcnkgPSAoIC9cXD8vICk7XG5cblxuXG4vLyBDcm9zcy1icm93c2VyIHhtbCBwYXJzaW5nXG5qUXVlcnkucGFyc2VYTUwgPSBmdW5jdGlvbiggZGF0YSApIHtcblx0dmFyIHhtbCwgcGFyc2VyRXJyb3JFbGVtO1xuXHRpZiAoICFkYXRhIHx8IHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Ly8gU3VwcG9ydDogSUUgOSAtIDExIG9ubHlcblx0Ly8gSUUgdGhyb3dzIG9uIHBhcnNlRnJvbVN0cmluZyB3aXRoIGludmFsaWQgaW5wdXQuXG5cdHRyeSB7XG5cdFx0eG1sID0gKCBuZXcgd2luZG93LkRPTVBhcnNlcigpICkucGFyc2VGcm9tU3RyaW5nKCBkYXRhLCBcInRleHQveG1sXCIgKTtcblx0fSBjYXRjaCAoIGUgKSB7fVxuXG5cdHBhcnNlckVycm9yRWxlbSA9IHhtbCAmJiB4bWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwicGFyc2VyZXJyb3JcIiApWyAwIF07XG5cdGlmICggIXhtbCB8fCBwYXJzZXJFcnJvckVsZW0gKSB7XG5cdFx0alF1ZXJ5LmVycm9yKCBcIkludmFsaWQgWE1MOiBcIiArIChcblx0XHRcdHBhcnNlckVycm9yRWxlbSA/XG5cdFx0XHRcdGpRdWVyeS5tYXAoIHBhcnNlckVycm9yRWxlbS5jaGlsZE5vZGVzLCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsLnRleHRDb250ZW50O1xuXHRcdFx0XHR9ICkuam9pbiggXCJcXG5cIiApIDpcblx0XHRcdFx0ZGF0YVxuXHRcdCkgKTtcblx0fVxuXHRyZXR1cm4geG1sO1xufTtcblxuXG52YXIgcmZvY3VzTW9ycGggPSAvXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8sXG5cdHN0b3BQcm9wYWdhdGlvbkNhbGxiYWNrID0gZnVuY3Rpb24oIGUgKSB7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0fTtcblxualF1ZXJ5LmV4dGVuZCggalF1ZXJ5LmV2ZW50LCB7XG5cblx0dHJpZ2dlcjogZnVuY3Rpb24oIGV2ZW50LCBkYXRhLCBlbGVtLCBvbmx5SGFuZGxlcnMgKSB7XG5cblx0XHR2YXIgaSwgY3VyLCB0bXAsIGJ1YmJsZVR5cGUsIG9udHlwZSwgaGFuZGxlLCBzcGVjaWFsLCBsYXN0RWxlbWVudCxcblx0XHRcdGV2ZW50UGF0aCA9IFsgZWxlbSB8fCBkb2N1bWVudCBdLFxuXHRcdFx0dHlwZSA9IGhhc093bi5jYWxsKCBldmVudCwgXCJ0eXBlXCIgKSA/IGV2ZW50LnR5cGUgOiBldmVudCxcblx0XHRcdG5hbWVzcGFjZXMgPSBoYXNPd24uY2FsbCggZXZlbnQsIFwibmFtZXNwYWNlXCIgKSA/IGV2ZW50Lm5hbWVzcGFjZS5zcGxpdCggXCIuXCIgKSA6IFtdO1xuXG5cdFx0Y3VyID0gbGFzdEVsZW1lbnQgPSB0bXAgPSBlbGVtID0gZWxlbSB8fCBkb2N1bWVudDtcblxuXHRcdC8vIERvbid0IGRvIGV2ZW50cyBvbiB0ZXh0IGFuZCBjb21tZW50IG5vZGVzXG5cdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAzIHx8IGVsZW0ubm9kZVR5cGUgPT09IDggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gZm9jdXMvYmx1ciBtb3JwaHMgdG8gZm9jdXNpbi9vdXQ7IGVuc3VyZSB3ZSdyZSBub3QgZmlyaW5nIHRoZW0gcmlnaHQgbm93XG5cdFx0aWYgKCByZm9jdXNNb3JwaC50ZXN0KCB0eXBlICsgalF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdHlwZS5pbmRleE9mKCBcIi5cIiApID4gLTEgKSB7XG5cblx0XHRcdC8vIE5hbWVzcGFjZWQgdHJpZ2dlcjsgY3JlYXRlIGEgcmVnZXhwIHRvIG1hdGNoIGV2ZW50IHR5cGUgaW4gaGFuZGxlKClcblx0XHRcdG5hbWVzcGFjZXMgPSB0eXBlLnNwbGl0KCBcIi5cIiApO1xuXHRcdFx0dHlwZSA9IG5hbWVzcGFjZXMuc2hpZnQoKTtcblx0XHRcdG5hbWVzcGFjZXMuc29ydCgpO1xuXHRcdH1cblx0XHRvbnR5cGUgPSB0eXBlLmluZGV4T2YoIFwiOlwiICkgPCAwICYmIFwib25cIiArIHR5cGU7XG5cblx0XHQvLyBDYWxsZXIgY2FuIHBhc3MgaW4gYSBqUXVlcnkuRXZlbnQgb2JqZWN0LCBPYmplY3QsIG9yIGp1c3QgYW4gZXZlbnQgdHlwZSBzdHJpbmdcblx0XHRldmVudCA9IGV2ZW50WyBqUXVlcnkuZXhwYW5kbyBdID9cblx0XHRcdGV2ZW50IDpcblx0XHRcdG5ldyBqUXVlcnkuRXZlbnQoIHR5cGUsIHR5cGVvZiBldmVudCA9PT0gXCJvYmplY3RcIiAmJiBldmVudCApO1xuXG5cdFx0Ly8gVHJpZ2dlciBiaXRtYXNrOiAmIDEgZm9yIG5hdGl2ZSBoYW5kbGVyczsgJiAyIGZvciBqUXVlcnkgKGFsd2F5cyB0cnVlKVxuXHRcdGV2ZW50LmlzVHJpZ2dlciA9IG9ubHlIYW5kbGVycyA/IDIgOiAzO1xuXHRcdGV2ZW50Lm5hbWVzcGFjZSA9IG5hbWVzcGFjZXMuam9pbiggXCIuXCIgKTtcblx0XHRldmVudC5ybmFtZXNwYWNlID0gZXZlbnQubmFtZXNwYWNlID9cblx0XHRcdG5ldyBSZWdFeHAoIFwiKF58XFxcXC4pXCIgKyBuYW1lc3BhY2VzLmpvaW4oIFwiXFxcXC4oPzouKlxcXFwufClcIiApICsgXCIoXFxcXC58JClcIiApIDpcblx0XHRcdG51bGw7XG5cblx0XHQvLyBDbGVhbiB1cCB0aGUgZXZlbnQgaW4gY2FzZSBpdCBpcyBiZWluZyByZXVzZWRcblx0XHRldmVudC5yZXN1bHQgPSB1bmRlZmluZWQ7XG5cdFx0aWYgKCAhZXZlbnQudGFyZ2V0ICkge1xuXHRcdFx0ZXZlbnQudGFyZ2V0ID0gZWxlbTtcblx0XHR9XG5cblx0XHQvLyBDbG9uZSBhbnkgaW5jb21pbmcgZGF0YSBhbmQgcHJlcGVuZCB0aGUgZXZlbnQsIGNyZWF0aW5nIHRoZSBoYW5kbGVyIGFyZyBsaXN0XG5cdFx0ZGF0YSA9IGRhdGEgPT0gbnVsbCA/XG5cdFx0XHRbIGV2ZW50IF0gOlxuXHRcdFx0alF1ZXJ5Lm1ha2VBcnJheSggZGF0YSwgWyBldmVudCBdICk7XG5cblx0XHQvLyBBbGxvdyBzcGVjaWFsIGV2ZW50cyB0byBkcmF3IG91dHNpZGUgdGhlIGxpbmVzXG5cdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XG5cdFx0aWYgKCAhb25seUhhbmRsZXJzICYmIHNwZWNpYWwudHJpZ2dlciAmJiBzcGVjaWFsLnRyaWdnZXIuYXBwbHkoIGVsZW0sIGRhdGEgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZXJtaW5lIGV2ZW50IHByb3BhZ2F0aW9uIHBhdGggaW4gYWR2YW5jZSwgcGVyIFczQyBldmVudHMgc3BlYyAodHJhYy05OTUxKVxuXHRcdC8vIEJ1YmJsZSB1cCB0byBkb2N1bWVudCwgdGhlbiB0byB3aW5kb3c7IHdhdGNoIGZvciBhIGdsb2JhbCBvd25lckRvY3VtZW50IHZhciAodHJhYy05NzI0KVxuXHRcdGlmICggIW9ubHlIYW5kbGVycyAmJiAhc3BlY2lhbC5ub0J1YmJsZSAmJiAhaXNXaW5kb3coIGVsZW0gKSApIHtcblxuXHRcdFx0YnViYmxlVHlwZSA9IHNwZWNpYWwuZGVsZWdhdGVUeXBlIHx8IHR5cGU7XG5cdFx0XHRpZiAoICFyZm9jdXNNb3JwaC50ZXN0KCBidWJibGVUeXBlICsgdHlwZSApICkge1xuXHRcdFx0XHRjdXIgPSBjdXIucGFyZW50Tm9kZTtcblx0XHRcdH1cblx0XHRcdGZvciAoIDsgY3VyOyBjdXIgPSBjdXIucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0ZXZlbnRQYXRoLnB1c2goIGN1ciApO1xuXHRcdFx0XHR0bXAgPSBjdXI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE9ubHkgYWRkIHdpbmRvdyBpZiB3ZSBnb3QgdG8gZG9jdW1lbnQgKGUuZy4sIG5vdCBwbGFpbiBvYmogb3IgZGV0YWNoZWQgRE9NKVxuXHRcdFx0aWYgKCB0bXAgPT09ICggZWxlbS5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50ICkgKSB7XG5cdFx0XHRcdGV2ZW50UGF0aC5wdXNoKCB0bXAuZGVmYXVsdFZpZXcgfHwgdG1wLnBhcmVudFdpbmRvdyB8fCB3aW5kb3cgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBGaXJlIGhhbmRsZXJzIG9uIHRoZSBldmVudCBwYXRoXG5cdFx0aSA9IDA7XG5cdFx0d2hpbGUgKCAoIGN1ciA9IGV2ZW50UGF0aFsgaSsrIF0gKSAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblx0XHRcdGxhc3RFbGVtZW50ID0gY3VyO1xuXHRcdFx0ZXZlbnQudHlwZSA9IGkgPiAxID9cblx0XHRcdFx0YnViYmxlVHlwZSA6XG5cdFx0XHRcdHNwZWNpYWwuYmluZFR5cGUgfHwgdHlwZTtcblxuXHRcdFx0Ly8galF1ZXJ5IGhhbmRsZXJcblx0XHRcdGhhbmRsZSA9ICggZGF0YVByaXYuZ2V0KCBjdXIsIFwiZXZlbnRzXCIgKSB8fCBPYmplY3QuY3JlYXRlKCBudWxsICkgKVsgZXZlbnQudHlwZSBdICYmXG5cdFx0XHRcdGRhdGFQcml2LmdldCggY3VyLCBcImhhbmRsZVwiICk7XG5cdFx0XHRpZiAoIGhhbmRsZSApIHtcblx0XHRcdFx0aGFuZGxlLmFwcGx5KCBjdXIsIGRhdGEgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTmF0aXZlIGhhbmRsZXJcblx0XHRcdGhhbmRsZSA9IG9udHlwZSAmJiBjdXJbIG9udHlwZSBdO1xuXHRcdFx0aWYgKCBoYW5kbGUgJiYgaGFuZGxlLmFwcGx5ICYmIGFjY2VwdERhdGEoIGN1ciApICkge1xuXHRcdFx0XHRldmVudC5yZXN1bHQgPSBoYW5kbGUuYXBwbHkoIGN1ciwgZGF0YSApO1xuXHRcdFx0XHRpZiAoIGV2ZW50LnJlc3VsdCA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRldmVudC50eXBlID0gdHlwZTtcblxuXHRcdC8vIElmIG5vYm9keSBwcmV2ZW50ZWQgdGhlIGRlZmF1bHQgYWN0aW9uLCBkbyBpdCBub3dcblx0XHRpZiAoICFvbmx5SGFuZGxlcnMgJiYgIWV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpICkge1xuXG5cdFx0XHRpZiAoICggIXNwZWNpYWwuX2RlZmF1bHQgfHxcblx0XHRcdFx0c3BlY2lhbC5fZGVmYXVsdC5hcHBseSggZXZlbnRQYXRoLnBvcCgpLCBkYXRhICkgPT09IGZhbHNlICkgJiZcblx0XHRcdFx0YWNjZXB0RGF0YSggZWxlbSApICkge1xuXG5cdFx0XHRcdC8vIENhbGwgYSBuYXRpdmUgRE9NIG1ldGhvZCBvbiB0aGUgdGFyZ2V0IHdpdGggdGhlIHNhbWUgbmFtZSBhcyB0aGUgZXZlbnQuXG5cdFx0XHRcdC8vIERvbid0IGRvIGRlZmF1bHQgYWN0aW9ucyBvbiB3aW5kb3csIHRoYXQncyB3aGVyZSBnbG9iYWwgdmFyaWFibGVzIGJlICh0cmFjLTYxNzApXG5cdFx0XHRcdGlmICggb250eXBlICYmIGlzRnVuY3Rpb24oIGVsZW1bIHR5cGUgXSApICYmICFpc1dpbmRvdyggZWxlbSApICkge1xuXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgcmUtdHJpZ2dlciBhbiBvbkZPTyBldmVudCB3aGVuIHdlIGNhbGwgaXRzIEZPTygpIG1ldGhvZFxuXHRcdFx0XHRcdHRtcCA9IGVsZW1bIG9udHlwZSBdO1xuXG5cdFx0XHRcdFx0aWYgKCB0bXAgKSB7XG5cdFx0XHRcdFx0XHRlbGVtWyBvbnR5cGUgXSA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gUHJldmVudCByZS10cmlnZ2VyaW5nIG9mIHRoZSBzYW1lIGV2ZW50LCBzaW5jZSB3ZSBhbHJlYWR5IGJ1YmJsZWQgaXQgYWJvdmVcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlcmVkID0gdHlwZTtcblxuXHRcdFx0XHRcdGlmICggZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblx0XHRcdFx0XHRcdGxhc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoIHR5cGUsIHN0b3BQcm9wYWdhdGlvbkNhbGxiYWNrICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZWxlbVsgdHlwZSBdKCk7XG5cblx0XHRcdFx0XHRpZiAoIGV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cdFx0XHRcdFx0XHRsYXN0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCB0eXBlLCBzdG9wUHJvcGFnYXRpb25DYWxsYmFjayApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgPSB1bmRlZmluZWQ7XG5cblx0XHRcdFx0XHRpZiAoIHRtcCApIHtcblx0XHRcdFx0XHRcdGVsZW1bIG9udHlwZSBdID0gdG1wO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBldmVudC5yZXN1bHQ7XG5cdH0sXG5cblx0Ly8gUGlnZ3liYWNrIG9uIGEgZG9ub3IgZXZlbnQgdG8gc2ltdWxhdGUgYSBkaWZmZXJlbnQgb25lXG5cdC8vIFVzZWQgb25seSBmb3IgYGZvY3VzKGluIHwgb3V0KWAgZXZlbnRzXG5cdHNpbXVsYXRlOiBmdW5jdGlvbiggdHlwZSwgZWxlbSwgZXZlbnQgKSB7XG5cdFx0dmFyIGUgPSBqUXVlcnkuZXh0ZW5kKFxuXHRcdFx0bmV3IGpRdWVyeS5FdmVudCgpLFxuXHRcdFx0ZXZlbnQsXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdGlzU2ltdWxhdGVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCBlLCBudWxsLCBlbGVtICk7XG5cdH1cblxufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cblx0dHJpZ2dlcjogZnVuY3Rpb24oIHR5cGUsIGRhdGEgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlciggdHlwZSwgZGF0YSwgdGhpcyApO1xuXHRcdH0gKTtcblx0fSxcblx0dHJpZ2dlckhhbmRsZXI6IGZ1bmN0aW9uKCB0eXBlLCBkYXRhICkge1xuXHRcdHZhciBlbGVtID0gdGhpc1sgMCBdO1xuXHRcdGlmICggZWxlbSApIHtcblx0XHRcdHJldHVybiBqUXVlcnkuZXZlbnQudHJpZ2dlciggdHlwZSwgZGF0YSwgZWxlbSwgdHJ1ZSApO1xuXHRcdH1cblx0fVxufSApO1xuXG5cbnZhclxuXHRyYnJhY2tldCA9IC9cXFtcXF0kLyxcblx0ckNSTEYgPSAvXFxyP1xcbi9nLFxuXHRyc3VibWl0dGVyVHlwZXMgPSAvXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksXG5cdHJzdWJtaXR0YWJsZSA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtcblxuZnVuY3Rpb24gYnVpbGRQYXJhbXMoIHByZWZpeCwgb2JqLCB0cmFkaXRpb25hbCwgYWRkICkge1xuXHR2YXIgbmFtZTtcblxuXHRpZiAoIEFycmF5LmlzQXJyYXkoIG9iaiApICkge1xuXG5cdFx0Ly8gU2VyaWFsaXplIGFycmF5IGl0ZW0uXG5cdFx0alF1ZXJ5LmVhY2goIG9iaiwgZnVuY3Rpb24oIGksIHYgKSB7XG5cdFx0XHRpZiAoIHRyYWRpdGlvbmFsIHx8IHJicmFja2V0LnRlc3QoIHByZWZpeCApICkge1xuXG5cdFx0XHRcdC8vIFRyZWF0IGVhY2ggYXJyYXkgaXRlbSBhcyBhIHNjYWxhci5cblx0XHRcdFx0YWRkKCBwcmVmaXgsIHYgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBJdGVtIGlzIG5vbi1zY2FsYXIgKGFycmF5IG9yIG9iamVjdCksIGVuY29kZSBpdHMgbnVtZXJpYyBpbmRleC5cblx0XHRcdFx0YnVpbGRQYXJhbXMoXG5cdFx0XHRcdFx0cHJlZml4ICsgXCJbXCIgKyAoIHR5cGVvZiB2ID09PSBcIm9iamVjdFwiICYmIHYgIT0gbnVsbCA/IGkgOiBcIlwiICkgKyBcIl1cIixcblx0XHRcdFx0XHR2LFxuXHRcdFx0XHRcdHRyYWRpdGlvbmFsLFxuXHRcdFx0XHRcdGFkZFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHR9IGVsc2UgaWYgKCAhdHJhZGl0aW9uYWwgJiYgdG9UeXBlKCBvYmogKSA9PT0gXCJvYmplY3RcIiApIHtcblxuXHRcdC8vIFNlcmlhbGl6ZSBvYmplY3QgaXRlbS5cblx0XHRmb3IgKCBuYW1lIGluIG9iaiApIHtcblx0XHRcdGJ1aWxkUGFyYW1zKCBwcmVmaXggKyBcIltcIiArIG5hbWUgKyBcIl1cIiwgb2JqWyBuYW1lIF0sIHRyYWRpdGlvbmFsLCBhZGQgKTtcblx0XHR9XG5cblx0fSBlbHNlIHtcblxuXHRcdC8vIFNlcmlhbGl6ZSBzY2FsYXIgaXRlbS5cblx0XHRhZGQoIHByZWZpeCwgb2JqICk7XG5cdH1cbn1cblxuLy8gU2VyaWFsaXplIGFuIGFycmF5IG9mIGZvcm0gZWxlbWVudHMgb3IgYSBzZXQgb2Zcbi8vIGtleS92YWx1ZXMgaW50byBhIHF1ZXJ5IHN0cmluZ1xualF1ZXJ5LnBhcmFtID0gZnVuY3Rpb24oIGEsIHRyYWRpdGlvbmFsICkge1xuXHR2YXIgcHJlZml4LFxuXHRcdHMgPSBbXSxcblx0XHRhZGQgPSBmdW5jdGlvbigga2V5LCB2YWx1ZU9yRnVuY3Rpb24gKSB7XG5cblx0XHRcdC8vIElmIHZhbHVlIGlzIGEgZnVuY3Rpb24sIGludm9rZSBpdCBhbmQgdXNlIGl0cyByZXR1cm4gdmFsdWVcblx0XHRcdHZhciB2YWx1ZSA9IGlzRnVuY3Rpb24oIHZhbHVlT3JGdW5jdGlvbiApID9cblx0XHRcdFx0dmFsdWVPckZ1bmN0aW9uKCkgOlxuXHRcdFx0XHR2YWx1ZU9yRnVuY3Rpb247XG5cblx0XHRcdHNbIHMubGVuZ3RoIF0gPSBlbmNvZGVVUklDb21wb25lbnQoIGtleSApICsgXCI9XCIgK1xuXHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnQoIHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKTtcblx0XHR9O1xuXG5cdGlmICggYSA9PSBudWxsICkge1xuXHRcdHJldHVybiBcIlwiO1xuXHR9XG5cblx0Ly8gSWYgYW4gYXJyYXkgd2FzIHBhc3NlZCBpbiwgYXNzdW1lIHRoYXQgaXQgaXMgYW4gYXJyYXkgb2YgZm9ybSBlbGVtZW50cy5cblx0aWYgKCBBcnJheS5pc0FycmF5KCBhICkgfHwgKCBhLmpxdWVyeSAmJiAhalF1ZXJ5LmlzUGxhaW5PYmplY3QoIGEgKSApICkge1xuXG5cdFx0Ly8gU2VyaWFsaXplIHRoZSBmb3JtIGVsZW1lbnRzXG5cdFx0alF1ZXJ5LmVhY2goIGEsIGZ1bmN0aW9uKCkge1xuXHRcdFx0YWRkKCB0aGlzLm5hbWUsIHRoaXMudmFsdWUgKTtcblx0XHR9ICk7XG5cblx0fSBlbHNlIHtcblxuXHRcdC8vIElmIHRyYWRpdGlvbmFsLCBlbmNvZGUgdGhlIFwib2xkXCIgd2F5ICh0aGUgd2F5IDEuMy4yIG9yIG9sZGVyXG5cdFx0Ly8gZGlkIGl0KSwgb3RoZXJ3aXNlIGVuY29kZSBwYXJhbXMgcmVjdXJzaXZlbHkuXG5cdFx0Zm9yICggcHJlZml4IGluIGEgKSB7XG5cdFx0XHRidWlsZFBhcmFtcyggcHJlZml4LCBhWyBwcmVmaXggXSwgdHJhZGl0aW9uYWwsIGFkZCApO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgcmVzdWx0aW5nIHNlcmlhbGl6YXRpb25cblx0cmV0dXJuIHMuam9pbiggXCImXCIgKTtcbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0c2VyaWFsaXplOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4galF1ZXJ5LnBhcmFtKCB0aGlzLnNlcmlhbGl6ZUFycmF5KCkgKTtcblx0fSxcblx0c2VyaWFsaXplQXJyYXk6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcCggZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIENhbiBhZGQgcHJvcEhvb2sgZm9yIFwiZWxlbWVudHNcIiB0byBmaWx0ZXIgb3IgYWRkIGZvcm0gZWxlbWVudHNcblx0XHRcdHZhciBlbGVtZW50cyA9IGpRdWVyeS5wcm9wKCB0aGlzLCBcImVsZW1lbnRzXCIgKTtcblx0XHRcdHJldHVybiBlbGVtZW50cyA/IGpRdWVyeS5tYWtlQXJyYXkoIGVsZW1lbnRzICkgOiB0aGlzO1xuXHRcdH0gKS5maWx0ZXIoIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHR5cGUgPSB0aGlzLnR5cGU7XG5cblx0XHRcdC8vIFVzZSAuaXMoIFwiOmRpc2FibGVkXCIgKSBzbyB0aGF0IGZpZWxkc2V0W2Rpc2FibGVkXSB3b3Jrc1xuXHRcdFx0cmV0dXJuIHRoaXMubmFtZSAmJiAhalF1ZXJ5KCB0aGlzICkuaXMoIFwiOmRpc2FibGVkXCIgKSAmJlxuXHRcdFx0XHRyc3VibWl0dGFibGUudGVzdCggdGhpcy5ub2RlTmFtZSApICYmICFyc3VibWl0dGVyVHlwZXMudGVzdCggdHlwZSApICYmXG5cdFx0XHRcdCggdGhpcy5jaGVja2VkIHx8ICFyY2hlY2thYmxlVHlwZS50ZXN0KCB0eXBlICkgKTtcblx0XHR9ICkubWFwKCBmdW5jdGlvbiggX2ksIGVsZW0gKSB7XG5cdFx0XHR2YXIgdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cblx0XHRcdGlmICggdmFsID09IG51bGwgKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbCApICkge1xuXHRcdFx0XHRyZXR1cm4galF1ZXJ5Lm1hcCggdmFsLCBmdW5jdGlvbiggdmFsICkge1xuXHRcdFx0XHRcdHJldHVybiB7IG5hbWU6IGVsZW0ubmFtZSwgdmFsdWU6IHZhbC5yZXBsYWNlKCByQ1JMRiwgXCJcXHJcXG5cIiApIH07XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHsgbmFtZTogZWxlbS5uYW1lLCB2YWx1ZTogdmFsLnJlcGxhY2UoIHJDUkxGLCBcIlxcclxcblwiICkgfTtcblx0XHR9ICkuZ2V0KCk7XG5cdH1cbn0gKTtcblxuXG52YXJcblx0cjIwID0gLyUyMC9nLFxuXHRyaGFzaCA9IC8jLiokLyxcblx0cmFudGlDYWNoZSA9IC8oWz8mXSlfPVteJl0qLyxcblx0cmhlYWRlcnMgPSAvXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL21nLFxuXG5cdC8vIHRyYWMtNzY1MywgdHJhYy04MTI1LCB0cmFjLTgxNTI6IGxvY2FsIHByb3RvY29sIGRldGVjdGlvblxuXHRybG9jYWxQcm90b2NvbCA9IC9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLFxuXHRybm9Db250ZW50ID0gL14oPzpHRVR8SEVBRCkkLyxcblx0cnByb3RvY29sID0gL15cXC9cXC8vLFxuXG5cdC8qIFByZWZpbHRlcnNcblx0ICogMSkgVGhleSBhcmUgdXNlZnVsIHRvIGludHJvZHVjZSBjdXN0b20gZGF0YVR5cGVzIChzZWUgYWpheC9qc29ucC5qcyBmb3IgYW4gZXhhbXBsZSlcblx0ICogMikgVGhlc2UgYXJlIGNhbGxlZDpcblx0ICogICAgLSBCRUZPUkUgYXNraW5nIGZvciBhIHRyYW5zcG9ydFxuXHQgKiAgICAtIEFGVEVSIHBhcmFtIHNlcmlhbGl6YXRpb24gKHMuZGF0YSBpcyBhIHN0cmluZyBpZiBzLnByb2Nlc3NEYXRhIGlzIHRydWUpXG5cdCAqIDMpIGtleSBpcyB0aGUgZGF0YVR5cGVcblx0ICogNCkgdGhlIGNhdGNoYWxsIHN5bWJvbCBcIipcIiBjYW4gYmUgdXNlZFxuXHQgKiA1KSBleGVjdXRpb24gd2lsbCBzdGFydCB3aXRoIHRyYW5zcG9ydCBkYXRhVHlwZSBhbmQgVEhFTiBjb250aW51ZSBkb3duIHRvIFwiKlwiIGlmIG5lZWRlZFxuXHQgKi9cblx0cHJlZmlsdGVycyA9IHt9LFxuXG5cdC8qIFRyYW5zcG9ydHMgYmluZGluZ3Ncblx0ICogMSkga2V5IGlzIHRoZSBkYXRhVHlwZVxuXHQgKiAyKSB0aGUgY2F0Y2hhbGwgc3ltYm9sIFwiKlwiIGNhbiBiZSB1c2VkXG5cdCAqIDMpIHNlbGVjdGlvbiB3aWxsIHN0YXJ0IHdpdGggdHJhbnNwb3J0IGRhdGFUeXBlIGFuZCBUSEVOIGdvIHRvIFwiKlwiIGlmIG5lZWRlZFxuXHQgKi9cblx0dHJhbnNwb3J0cyA9IHt9LFxuXG5cdC8vIEF2b2lkIGNvbW1lbnQtcHJvbG9nIGNoYXIgc2VxdWVuY2UgKHRyYWMtMTAwOTgpOyBtdXN0IGFwcGVhc2UgbGludCBhbmQgZXZhZGUgY29tcHJlc3Npb25cblx0YWxsVHlwZXMgPSBcIiovXCIuY29uY2F0KCBcIipcIiApLFxuXG5cdC8vIEFuY2hvciB0YWcgZm9yIHBhcnNpbmcgdGhlIGRvY3VtZW50IG9yaWdpblxuXHRvcmlnaW5BbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImFcIiApO1xuXG5vcmlnaW5BbmNob3IuaHJlZiA9IGxvY2F0aW9uLmhyZWY7XG5cbi8vIEJhc2UgXCJjb25zdHJ1Y3RvclwiIGZvciBqUXVlcnkuYWpheFByZWZpbHRlciBhbmQgalF1ZXJ5LmFqYXhUcmFuc3BvcnRcbmZ1bmN0aW9uIGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyggc3RydWN0dXJlICkge1xuXG5cdC8vIGRhdGFUeXBlRXhwcmVzc2lvbiBpcyBvcHRpb25hbCBhbmQgZGVmYXVsdHMgdG8gXCIqXCJcblx0cmV0dXJuIGZ1bmN0aW9uKCBkYXRhVHlwZUV4cHJlc3Npb24sIGZ1bmMgKSB7XG5cblx0XHRpZiAoIHR5cGVvZiBkYXRhVHlwZUV4cHJlc3Npb24gIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRmdW5jID0gZGF0YVR5cGVFeHByZXNzaW9uO1xuXHRcdFx0ZGF0YVR5cGVFeHByZXNzaW9uID0gXCIqXCI7XG5cdFx0fVxuXG5cdFx0dmFyIGRhdGFUeXBlLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRkYXRhVHlwZXMgPSBkYXRhVHlwZUV4cHJlc3Npb24udG9Mb3dlckNhc2UoKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFtdO1xuXG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCBmdW5jICkgKSB7XG5cblx0XHRcdC8vIEZvciBlYWNoIGRhdGFUeXBlIGluIHRoZSBkYXRhVHlwZUV4cHJlc3Npb25cblx0XHRcdHdoaWxlICggKCBkYXRhVHlwZSA9IGRhdGFUeXBlc1sgaSsrIF0gKSApIHtcblxuXHRcdFx0XHQvLyBQcmVwZW5kIGlmIHJlcXVlc3RlZFxuXHRcdFx0XHRpZiAoIGRhdGFUeXBlWyAwIF0gPT09IFwiK1wiICkge1xuXHRcdFx0XHRcdGRhdGFUeXBlID0gZGF0YVR5cGUuc2xpY2UoIDEgKSB8fCBcIipcIjtcblx0XHRcdFx0XHQoIHN0cnVjdHVyZVsgZGF0YVR5cGUgXSA9IHN0cnVjdHVyZVsgZGF0YVR5cGUgXSB8fCBbXSApLnVuc2hpZnQoIGZ1bmMgKTtcblxuXHRcdFx0XHQvLyBPdGhlcndpc2UgYXBwZW5kXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0KCBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gPSBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gfHwgW10gKS5wdXNoKCBmdW5jICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbi8vIEJhc2UgaW5zcGVjdGlvbiBmdW5jdGlvbiBmb3IgcHJlZmlsdGVycyBhbmQgdHJhbnNwb3J0c1xuZnVuY3Rpb24gaW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHN0cnVjdHVyZSwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zLCBqcVhIUiApIHtcblxuXHR2YXIgaW5zcGVjdGVkID0ge30sXG5cdFx0c2Vla2luZ1RyYW5zcG9ydCA9ICggc3RydWN0dXJlID09PSB0cmFuc3BvcnRzICk7XG5cblx0ZnVuY3Rpb24gaW5zcGVjdCggZGF0YVR5cGUgKSB7XG5cdFx0dmFyIHNlbGVjdGVkO1xuXHRcdGluc3BlY3RlZFsgZGF0YVR5cGUgXSA9IHRydWU7XG5cdFx0alF1ZXJ5LmVhY2goIHN0cnVjdHVyZVsgZGF0YVR5cGUgXSB8fCBbXSwgZnVuY3Rpb24oIF8sIHByZWZpbHRlck9yRmFjdG9yeSApIHtcblx0XHRcdHZhciBkYXRhVHlwZU9yVHJhbnNwb3J0ID0gcHJlZmlsdGVyT3JGYWN0b3J5KCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMsIGpxWEhSICk7XG5cdFx0XHRpZiAoIHR5cGVvZiBkYXRhVHlwZU9yVHJhbnNwb3J0ID09PSBcInN0cmluZ1wiICYmXG5cdFx0XHRcdCFzZWVraW5nVHJhbnNwb3J0ICYmICFpbnNwZWN0ZWRbIGRhdGFUeXBlT3JUcmFuc3BvcnQgXSApIHtcblxuXHRcdFx0XHRvcHRpb25zLmRhdGFUeXBlcy51bnNoaWZ0KCBkYXRhVHlwZU9yVHJhbnNwb3J0ICk7XG5cdFx0XHRcdGluc3BlY3QoIGRhdGFUeXBlT3JUcmFuc3BvcnQgKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSBlbHNlIGlmICggc2Vla2luZ1RyYW5zcG9ydCApIHtcblx0XHRcdFx0cmV0dXJuICEoIHNlbGVjdGVkID0gZGF0YVR5cGVPclRyYW5zcG9ydCApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0XHRyZXR1cm4gc2VsZWN0ZWQ7XG5cdH1cblxuXHRyZXR1cm4gaW5zcGVjdCggb3B0aW9ucy5kYXRhVHlwZXNbIDAgXSApIHx8ICFpbnNwZWN0ZWRbIFwiKlwiIF0gJiYgaW5zcGVjdCggXCIqXCIgKTtcbn1cblxuLy8gQSBzcGVjaWFsIGV4dGVuZCBmb3IgYWpheCBvcHRpb25zXG4vLyB0aGF0IHRha2VzIFwiZmxhdFwiIG9wdGlvbnMgKG5vdCB0byBiZSBkZWVwIGV4dGVuZGVkKVxuLy8gRml4ZXMgdHJhYy05ODg3XG5mdW5jdGlvbiBhamF4RXh0ZW5kKCB0YXJnZXQsIHNyYyApIHtcblx0dmFyIGtleSwgZGVlcCxcblx0XHRmbGF0T3B0aW9ucyA9IGpRdWVyeS5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnMgfHwge307XG5cblx0Zm9yICgga2V5IGluIHNyYyApIHtcblx0XHRpZiAoIHNyY1sga2V5IF0gIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdCggZmxhdE9wdGlvbnNbIGtleSBdID8gdGFyZ2V0IDogKCBkZWVwIHx8ICggZGVlcCA9IHt9ICkgKSApWyBrZXkgXSA9IHNyY1sga2V5IF07XG5cdFx0fVxuXHR9XG5cdGlmICggZGVlcCApIHtcblx0XHRqUXVlcnkuZXh0ZW5kKCB0cnVlLCB0YXJnZXQsIGRlZXAgKTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbi8qIEhhbmRsZXMgcmVzcG9uc2VzIHRvIGFuIGFqYXggcmVxdWVzdDpcbiAqIC0gZmluZHMgdGhlIHJpZ2h0IGRhdGFUeXBlIChtZWRpYXRlcyBiZXR3ZWVuIGNvbnRlbnQtdHlwZSBhbmQgZXhwZWN0ZWQgZGF0YVR5cGUpXG4gKiAtIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcmVzcG9uc2VcbiAqL1xuZnVuY3Rpb24gYWpheEhhbmRsZVJlc3BvbnNlcyggcywganFYSFIsIHJlc3BvbnNlcyApIHtcblxuXHR2YXIgY3QsIHR5cGUsIGZpbmFsRGF0YVR5cGUsIGZpcnN0RGF0YVR5cGUsXG5cdFx0Y29udGVudHMgPSBzLmNvbnRlbnRzLFxuXHRcdGRhdGFUeXBlcyA9IHMuZGF0YVR5cGVzO1xuXG5cdC8vIFJlbW92ZSBhdXRvIGRhdGFUeXBlIGFuZCBnZXQgY29udGVudC10eXBlIGluIHRoZSBwcm9jZXNzXG5cdHdoaWxlICggZGF0YVR5cGVzWyAwIF0gPT09IFwiKlwiICkge1xuXHRcdGRhdGFUeXBlcy5zaGlmdCgpO1xuXHRcdGlmICggY3QgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGN0ID0gcy5taW1lVHlwZSB8fCBqcVhIUi5nZXRSZXNwb25zZUhlYWRlciggXCJDb250ZW50LVR5cGVcIiApO1xuXHRcdH1cblx0fVxuXG5cdC8vIENoZWNrIGlmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIGtub3duIGNvbnRlbnQtdHlwZVxuXHRpZiAoIGN0ICkge1xuXHRcdGZvciAoIHR5cGUgaW4gY29udGVudHMgKSB7XG5cdFx0XHRpZiAoIGNvbnRlbnRzWyB0eXBlIF0gJiYgY29udGVudHNbIHR5cGUgXS50ZXN0KCBjdCApICkge1xuXHRcdFx0XHRkYXRhVHlwZXMudW5zaGlmdCggdHlwZSApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBDaGVjayB0byBzZWUgaWYgd2UgaGF2ZSBhIHJlc3BvbnNlIGZvciB0aGUgZXhwZWN0ZWQgZGF0YVR5cGVcblx0aWYgKCBkYXRhVHlwZXNbIDAgXSBpbiByZXNwb25zZXMgKSB7XG5cdFx0ZmluYWxEYXRhVHlwZSA9IGRhdGFUeXBlc1sgMCBdO1xuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gVHJ5IGNvbnZlcnRpYmxlIGRhdGFUeXBlc1xuXHRcdGZvciAoIHR5cGUgaW4gcmVzcG9uc2VzICkge1xuXHRcdFx0aWYgKCAhZGF0YVR5cGVzWyAwIF0gfHwgcy5jb252ZXJ0ZXJzWyB0eXBlICsgXCIgXCIgKyBkYXRhVHlwZXNbIDAgXSBdICkge1xuXHRcdFx0XHRmaW5hbERhdGFUeXBlID0gdHlwZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICFmaXJzdERhdGFUeXBlICkge1xuXHRcdFx0XHRmaXJzdERhdGFUeXBlID0gdHlwZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBPciBqdXN0IHVzZSBmaXJzdCBvbmVcblx0XHRmaW5hbERhdGFUeXBlID0gZmluYWxEYXRhVHlwZSB8fCBmaXJzdERhdGFUeXBlO1xuXHR9XG5cblx0Ly8gSWYgd2UgZm91bmQgYSBkYXRhVHlwZVxuXHQvLyBXZSBhZGQgdGhlIGRhdGFUeXBlIHRvIHRoZSBsaXN0IGlmIG5lZWRlZFxuXHQvLyBhbmQgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlXG5cdGlmICggZmluYWxEYXRhVHlwZSApIHtcblx0XHRpZiAoIGZpbmFsRGF0YVR5cGUgIT09IGRhdGFUeXBlc1sgMCBdICkge1xuXHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoIGZpbmFsRGF0YVR5cGUgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3BvbnNlc1sgZmluYWxEYXRhVHlwZSBdO1xuXHR9XG59XG5cbi8qIENoYWluIGNvbnZlcnNpb25zIGdpdmVuIHRoZSByZXF1ZXN0IGFuZCB0aGUgb3JpZ2luYWwgcmVzcG9uc2VcbiAqIEFsc28gc2V0cyB0aGUgcmVzcG9uc2VYWFggZmllbGRzIG9uIHRoZSBqcVhIUiBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBhamF4Q29udmVydCggcywgcmVzcG9uc2UsIGpxWEhSLCBpc1N1Y2Nlc3MgKSB7XG5cdHZhciBjb252MiwgY3VycmVudCwgY29udiwgdG1wLCBwcmV2LFxuXHRcdGNvbnZlcnRlcnMgPSB7fSxcblxuXHRcdC8vIFdvcmsgd2l0aCBhIGNvcHkgb2YgZGF0YVR5cGVzIGluIGNhc2Ugd2UgbmVlZCB0byBtb2RpZnkgaXQgZm9yIGNvbnZlcnNpb25cblx0XHRkYXRhVHlwZXMgPSBzLmRhdGFUeXBlcy5zbGljZSgpO1xuXG5cdC8vIENyZWF0ZSBjb252ZXJ0ZXJzIG1hcCB3aXRoIGxvd2VyY2FzZWQga2V5c1xuXHRpZiAoIGRhdGFUeXBlc1sgMSBdICkge1xuXHRcdGZvciAoIGNvbnYgaW4gcy5jb252ZXJ0ZXJzICkge1xuXHRcdFx0Y29udmVydGVyc1sgY29udi50b0xvd2VyQ2FzZSgpIF0gPSBzLmNvbnZlcnRlcnNbIGNvbnYgXTtcblx0XHR9XG5cdH1cblxuXHRjdXJyZW50ID0gZGF0YVR5cGVzLnNoaWZ0KCk7XG5cblx0Ly8gQ29udmVydCB0byBlYWNoIHNlcXVlbnRpYWwgZGF0YVR5cGVcblx0d2hpbGUgKCBjdXJyZW50ICkge1xuXG5cdFx0aWYgKCBzLnJlc3BvbnNlRmllbGRzWyBjdXJyZW50IF0gKSB7XG5cdFx0XHRqcVhIUlsgcy5yZXNwb25zZUZpZWxkc1sgY3VycmVudCBdIF0gPSByZXNwb25zZTtcblx0XHR9XG5cblx0XHQvLyBBcHBseSB0aGUgZGF0YUZpbHRlciBpZiBwcm92aWRlZFxuXHRcdGlmICggIXByZXYgJiYgaXNTdWNjZXNzICYmIHMuZGF0YUZpbHRlciApIHtcblx0XHRcdHJlc3BvbnNlID0gcy5kYXRhRmlsdGVyKCByZXNwb25zZSwgcy5kYXRhVHlwZSApO1xuXHRcdH1cblxuXHRcdHByZXYgPSBjdXJyZW50O1xuXHRcdGN1cnJlbnQgPSBkYXRhVHlwZXMuc2hpZnQoKTtcblxuXHRcdGlmICggY3VycmVudCApIHtcblxuXHRcdFx0Ly8gVGhlcmUncyBvbmx5IHdvcmsgdG8gZG8gaWYgY3VycmVudCBkYXRhVHlwZSBpcyBub24tYXV0b1xuXHRcdFx0aWYgKCBjdXJyZW50ID09PSBcIipcIiApIHtcblxuXHRcdFx0XHRjdXJyZW50ID0gcHJldjtcblxuXHRcdFx0Ly8gQ29udmVydCByZXNwb25zZSBpZiBwcmV2IGRhdGFUeXBlIGlzIG5vbi1hdXRvIGFuZCBkaWZmZXJzIGZyb20gY3VycmVudFxuXHRcdFx0fSBlbHNlIGlmICggcHJldiAhPT0gXCIqXCIgJiYgcHJldiAhPT0gY3VycmVudCApIHtcblxuXHRcdFx0XHQvLyBTZWVrIGEgZGlyZWN0IGNvbnZlcnRlclxuXHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgcHJldiArIFwiIFwiICsgY3VycmVudCBdIHx8IGNvbnZlcnRlcnNbIFwiKiBcIiArIGN1cnJlbnQgXTtcblxuXHRcdFx0XHQvLyBJZiBub25lIGZvdW5kLCBzZWVrIGEgcGFpclxuXHRcdFx0XHRpZiAoICFjb252ICkge1xuXHRcdFx0XHRcdGZvciAoIGNvbnYyIGluIGNvbnZlcnRlcnMgKSB7XG5cblx0XHRcdFx0XHRcdC8vIElmIGNvbnYyIG91dHB1dHMgY3VycmVudFxuXHRcdFx0XHRcdFx0dG1wID0gY29udjIuc3BsaXQoIFwiIFwiICk7XG5cdFx0XHRcdFx0XHRpZiAoIHRtcFsgMSBdID09PSBjdXJyZW50ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIElmIHByZXYgY2FuIGJlIGNvbnZlcnRlZCB0byBhY2NlcHRlZCBpbnB1dFxuXHRcdFx0XHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgcHJldiArIFwiIFwiICsgdG1wWyAwIF0gXSB8fFxuXHRcdFx0XHRcdFx0XHRcdGNvbnZlcnRlcnNbIFwiKiBcIiArIHRtcFsgMCBdIF07XG5cdFx0XHRcdFx0XHRcdGlmICggY29udiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIENvbmRlbnNlIGVxdWl2YWxlbmNlIGNvbnZlcnRlcnNcblx0XHRcdFx0XHRcdFx0XHRpZiAoIGNvbnYgPT09IHRydWUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgY29udjIgXTtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIE90aGVyd2lzZSwgaW5zZXJ0IHRoZSBpbnRlcm1lZGlhdGUgZGF0YVR5cGVcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBjb252ZXJ0ZXJzWyBjb252MiBdICE9PSB0cnVlICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3VycmVudCA9IHRtcFsgMCBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoIHRtcFsgMSBdICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQXBwbHkgY29udmVydGVyIChpZiBub3QgYW4gZXF1aXZhbGVuY2UpXG5cdFx0XHRcdGlmICggY29udiAhPT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRcdC8vIFVubGVzcyBlcnJvcnMgYXJlIGFsbG93ZWQgdG8gYnViYmxlLCBjYXRjaCBhbmQgcmV0dXJuIHRoZW1cblx0XHRcdFx0XHRpZiAoIGNvbnYgJiYgcy50aHJvd3MgKSB7XG5cdFx0XHRcdFx0XHRyZXNwb25zZSA9IGNvbnYoIHJlc3BvbnNlICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlID0gY29udiggcmVzcG9uc2UgKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdHN0YXRlOiBcInBhcnNlcmVycm9yXCIsXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGNvbnYgPyBlIDogXCJObyBjb252ZXJzaW9uIGZyb20gXCIgKyBwcmV2ICsgXCIgdG8gXCIgKyBjdXJyZW50XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHsgc3RhdGU6IFwic3VjY2Vzc1wiLCBkYXRhOiByZXNwb25zZSB9O1xufVxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0Ly8gQ291bnRlciBmb3IgaG9sZGluZyB0aGUgbnVtYmVyIG9mIGFjdGl2ZSBxdWVyaWVzXG5cdGFjdGl2ZTogMCxcblxuXHQvLyBMYXN0LU1vZGlmaWVkIGhlYWRlciBjYWNoZSBmb3IgbmV4dCByZXF1ZXN0XG5cdGxhc3RNb2RpZmllZDoge30sXG5cdGV0YWc6IHt9LFxuXG5cdGFqYXhTZXR0aW5nczoge1xuXHRcdHVybDogbG9jYXRpb24uaHJlZixcblx0XHR0eXBlOiBcIkdFVFwiLFxuXHRcdGlzTG9jYWw6IHJsb2NhbFByb3RvY29sLnRlc3QoIGxvY2F0aW9uLnByb3RvY29sICksXG5cdFx0Z2xvYmFsOiB0cnVlLFxuXHRcdHByb2Nlc3NEYXRhOiB0cnVlLFxuXHRcdGFzeW5jOiB0cnVlLFxuXHRcdGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLFxuXG5cdFx0Lypcblx0XHR0aW1lb3V0OiAwLFxuXHRcdGRhdGE6IG51bGwsXG5cdFx0ZGF0YVR5cGU6IG51bGwsXG5cdFx0dXNlcm5hbWU6IG51bGwsXG5cdFx0cGFzc3dvcmQ6IG51bGwsXG5cdFx0Y2FjaGU6IG51bGwsXG5cdFx0dGhyb3dzOiBmYWxzZSxcblx0XHR0cmFkaXRpb25hbDogZmFsc2UsXG5cdFx0aGVhZGVyczoge30sXG5cdFx0Ki9cblxuXHRcdGFjY2VwdHM6IHtcblx0XHRcdFwiKlwiOiBhbGxUeXBlcyxcblx0XHRcdHRleHQ6IFwidGV4dC9wbGFpblwiLFxuXHRcdFx0aHRtbDogXCJ0ZXh0L2h0bWxcIixcblx0XHRcdHhtbDogXCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsXG5cdFx0XHRqc29uOiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwiXG5cdFx0fSxcblxuXHRcdGNvbnRlbnRzOiB7XG5cdFx0XHR4bWw6IC9cXGJ4bWxcXGIvLFxuXHRcdFx0aHRtbDogL1xcYmh0bWwvLFxuXHRcdFx0anNvbjogL1xcYmpzb25cXGIvXG5cdFx0fSxcblxuXHRcdHJlc3BvbnNlRmllbGRzOiB7XG5cdFx0XHR4bWw6IFwicmVzcG9uc2VYTUxcIixcblx0XHRcdHRleHQ6IFwicmVzcG9uc2VUZXh0XCIsXG5cdFx0XHRqc29uOiBcInJlc3BvbnNlSlNPTlwiXG5cdFx0fSxcblxuXHRcdC8vIERhdGEgY29udmVydGVyc1xuXHRcdC8vIEtleXMgc2VwYXJhdGUgc291cmNlIChvciBjYXRjaGFsbCBcIipcIikgYW5kIGRlc3RpbmF0aW9uIHR5cGVzIHdpdGggYSBzaW5nbGUgc3BhY2Vcblx0XHRjb252ZXJ0ZXJzOiB7XG5cblx0XHRcdC8vIENvbnZlcnQgYW55dGhpbmcgdG8gdGV4dFxuXHRcdFx0XCIqIHRleHRcIjogU3RyaW5nLFxuXG5cdFx0XHQvLyBUZXh0IHRvIGh0bWwgKHRydWUgPSBubyB0cmFuc2Zvcm1hdGlvbilcblx0XHRcdFwidGV4dCBodG1sXCI6IHRydWUsXG5cblx0XHRcdC8vIEV2YWx1YXRlIHRleHQgYXMgYSBqc29uIGV4cHJlc3Npb25cblx0XHRcdFwidGV4dCBqc29uXCI6IEpTT04ucGFyc2UsXG5cblx0XHRcdC8vIFBhcnNlIHRleHQgYXMgeG1sXG5cdFx0XHRcInRleHQgeG1sXCI6IGpRdWVyeS5wYXJzZVhNTFxuXHRcdH0sXG5cblx0XHQvLyBGb3Igb3B0aW9ucyB0aGF0IHNob3VsZG4ndCBiZSBkZWVwIGV4dGVuZGVkOlxuXHRcdC8vIHlvdSBjYW4gYWRkIHlvdXIgb3duIGN1c3RvbSBvcHRpb25zIGhlcmUgaWZcblx0XHQvLyBhbmQgd2hlbiB5b3UgY3JlYXRlIG9uZSB0aGF0IHNob3VsZG4ndCBiZVxuXHRcdC8vIGRlZXAgZXh0ZW5kZWQgKHNlZSBhamF4RXh0ZW5kKVxuXHRcdGZsYXRPcHRpb25zOiB7XG5cdFx0XHR1cmw6IHRydWUsXG5cdFx0XHRjb250ZXh0OiB0cnVlXG5cdFx0fVxuXHR9LFxuXG5cdC8vIENyZWF0ZXMgYSBmdWxsIGZsZWRnZWQgc2V0dGluZ3Mgb2JqZWN0IGludG8gdGFyZ2V0XG5cdC8vIHdpdGggYm90aCBhamF4U2V0dGluZ3MgYW5kIHNldHRpbmdzIGZpZWxkcy5cblx0Ly8gSWYgdGFyZ2V0IGlzIG9taXR0ZWQsIHdyaXRlcyBpbnRvIGFqYXhTZXR0aW5ncy5cblx0YWpheFNldHVwOiBmdW5jdGlvbiggdGFyZ2V0LCBzZXR0aW5ncyApIHtcblx0XHRyZXR1cm4gc2V0dGluZ3MgP1xuXG5cdFx0XHQvLyBCdWlsZGluZyBhIHNldHRpbmdzIG9iamVjdFxuXHRcdFx0YWpheEV4dGVuZCggYWpheEV4dGVuZCggdGFyZ2V0LCBqUXVlcnkuYWpheFNldHRpbmdzICksIHNldHRpbmdzICkgOlxuXG5cdFx0XHQvLyBFeHRlbmRpbmcgYWpheFNldHRpbmdzXG5cdFx0XHRhamF4RXh0ZW5kKCBqUXVlcnkuYWpheFNldHRpbmdzLCB0YXJnZXQgKTtcblx0fSxcblxuXHRhamF4UHJlZmlsdGVyOiBhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHByZWZpbHRlcnMgKSxcblx0YWpheFRyYW5zcG9ydDogYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCB0cmFuc3BvcnRzICksXG5cblx0Ly8gTWFpbiBtZXRob2Rcblx0YWpheDogZnVuY3Rpb24oIHVybCwgb3B0aW9ucyApIHtcblxuXHRcdC8vIElmIHVybCBpcyBhbiBvYmplY3QsIHNpbXVsYXRlIHByZS0xLjUgc2lnbmF0dXJlXG5cdFx0aWYgKCB0eXBlb2YgdXJsID09PSBcIm9iamVjdFwiICkge1xuXHRcdFx0b3B0aW9ucyA9IHVybDtcblx0XHRcdHVybCA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvLyBGb3JjZSBvcHRpb25zIHRvIGJlIGFuIG9iamVjdFxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdFx0dmFyIHRyYW5zcG9ydCxcblxuXHRcdFx0Ly8gVVJMIHdpdGhvdXQgYW50aS1jYWNoZSBwYXJhbVxuXHRcdFx0Y2FjaGVVUkwsXG5cblx0XHRcdC8vIFJlc3BvbnNlIGhlYWRlcnNcblx0XHRcdHJlc3BvbnNlSGVhZGVyc1N0cmluZyxcblx0XHRcdHJlc3BvbnNlSGVhZGVycyxcblxuXHRcdFx0Ly8gdGltZW91dCBoYW5kbGVcblx0XHRcdHRpbWVvdXRUaW1lcixcblxuXHRcdFx0Ly8gVXJsIGNsZWFudXAgdmFyXG5cdFx0XHR1cmxBbmNob3IsXG5cblx0XHRcdC8vIFJlcXVlc3Qgc3RhdGUgKGJlY29tZXMgZmFsc2UgdXBvbiBzZW5kIGFuZCB0cnVlIHVwb24gY29tcGxldGlvbilcblx0XHRcdGNvbXBsZXRlZCxcblxuXHRcdFx0Ly8gVG8ga25vdyBpZiBnbG9iYWwgZXZlbnRzIGFyZSB0byBiZSBkaXNwYXRjaGVkXG5cdFx0XHRmaXJlR2xvYmFscyxcblxuXHRcdFx0Ly8gTG9vcCB2YXJpYWJsZVxuXHRcdFx0aSxcblxuXHRcdFx0Ly8gdW5jYWNoZWQgcGFydCBvZiB0aGUgdXJsXG5cdFx0XHR1bmNhY2hlZCxcblxuXHRcdFx0Ly8gQ3JlYXRlIHRoZSBmaW5hbCBvcHRpb25zIG9iamVjdFxuXHRcdFx0cyA9IGpRdWVyeS5hamF4U2V0dXAoIHt9LCBvcHRpb25zICksXG5cblx0XHRcdC8vIENhbGxiYWNrcyBjb250ZXh0XG5cdFx0XHRjYWxsYmFja0NvbnRleHQgPSBzLmNvbnRleHQgfHwgcyxcblxuXHRcdFx0Ly8gQ29udGV4dCBmb3IgZ2xvYmFsIGV2ZW50cyBpcyBjYWxsYmFja0NvbnRleHQgaWYgaXQgaXMgYSBET00gbm9kZSBvciBqUXVlcnkgY29sbGVjdGlvblxuXHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0ID0gcy5jb250ZXh0ICYmXG5cdFx0XHRcdCggY2FsbGJhY2tDb250ZXh0Lm5vZGVUeXBlIHx8IGNhbGxiYWNrQ29udGV4dC5qcXVlcnkgKSA/XG5cdFx0XHRcdGpRdWVyeSggY2FsbGJhY2tDb250ZXh0ICkgOlxuXHRcdFx0XHRqUXVlcnkuZXZlbnQsXG5cblx0XHRcdC8vIERlZmVycmVkc1xuXHRcdFx0ZGVmZXJyZWQgPSBqUXVlcnkuRGVmZXJyZWQoKSxcblx0XHRcdGNvbXBsZXRlRGVmZXJyZWQgPSBqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSxcblxuXHRcdFx0Ly8gU3RhdHVzLWRlcGVuZGVudCBjYWxsYmFja3Ncblx0XHRcdHN0YXR1c0NvZGUgPSBzLnN0YXR1c0NvZGUgfHwge30sXG5cblx0XHRcdC8vIEhlYWRlcnMgKHRoZXkgYXJlIHNlbnQgYWxsIGF0IG9uY2UpXG5cdFx0XHRyZXF1ZXN0SGVhZGVycyA9IHt9LFxuXHRcdFx0cmVxdWVzdEhlYWRlcnNOYW1lcyA9IHt9LFxuXG5cdFx0XHQvLyBEZWZhdWx0IGFib3J0IG1lc3NhZ2Vcblx0XHRcdHN0ckFib3J0ID0gXCJjYW5jZWxlZFwiLFxuXG5cdFx0XHQvLyBGYWtlIHhoclxuXHRcdFx0anFYSFIgPSB7XG5cdFx0XHRcdHJlYWR5U3RhdGU6IDAsXG5cblx0XHRcdFx0Ly8gQnVpbGRzIGhlYWRlcnMgaGFzaHRhYmxlIGlmIG5lZWRlZFxuXHRcdFx0XHRnZXRSZXNwb25zZUhlYWRlcjogZnVuY3Rpb24oIGtleSApIHtcblx0XHRcdFx0XHR2YXIgbWF0Y2g7XG5cdFx0XHRcdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRcdFx0XHRpZiAoICFyZXNwb25zZUhlYWRlcnMgKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlSGVhZGVycyA9IHt9O1xuXHRcdFx0XHRcdFx0XHR3aGlsZSAoICggbWF0Y2ggPSByaGVhZGVycy5leGVjKCByZXNwb25zZUhlYWRlcnNTdHJpbmcgKSApICkge1xuXHRcdFx0XHRcdFx0XHRcdHJlc3BvbnNlSGVhZGVyc1sgbWF0Y2hbIDEgXS50b0xvd2VyQ2FzZSgpICsgXCIgXCIgXSA9XG5cdFx0XHRcdFx0XHRcdFx0XHQoIHJlc3BvbnNlSGVhZGVyc1sgbWF0Y2hbIDEgXS50b0xvd2VyQ2FzZSgpICsgXCIgXCIgXSB8fCBbXSApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5jb25jYXQoIG1hdGNoWyAyIF0gKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bWF0Y2ggPSByZXNwb25zZUhlYWRlcnNbIGtleS50b0xvd2VyQ2FzZSgpICsgXCIgXCIgXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoID09IG51bGwgPyBudWxsIDogbWF0Y2guam9pbiggXCIsIFwiICk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gUmF3IHN0cmluZ1xuXHRcdFx0XHRnZXRBbGxSZXNwb25zZUhlYWRlcnM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiBjb21wbGV0ZWQgPyByZXNwb25zZUhlYWRlcnNTdHJpbmcgOiBudWxsO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIENhY2hlcyB0aGUgaGVhZGVyXG5cdFx0XHRcdHNldFJlcXVlc3RIZWFkZXI6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCA9PSBudWxsICkge1xuXHRcdFx0XHRcdFx0bmFtZSA9IHJlcXVlc3RIZWFkZXJzTmFtZXNbIG5hbWUudG9Mb3dlckNhc2UoKSBdID1cblx0XHRcdFx0XHRcdFx0cmVxdWVzdEhlYWRlcnNOYW1lc1sgbmFtZS50b0xvd2VyQ2FzZSgpIF0gfHwgbmFtZTtcblx0XHRcdFx0XHRcdHJlcXVlc3RIZWFkZXJzWyBuYW1lIF0gPSB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gT3ZlcnJpZGVzIHJlc3BvbnNlIGNvbnRlbnQtdHlwZSBoZWFkZXJcblx0XHRcdFx0b3ZlcnJpZGVNaW1lVHlwZTogZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0XHRcdFx0aWYgKCBjb21wbGV0ZWQgPT0gbnVsbCApIHtcblx0XHRcdFx0XHRcdHMubWltZVR5cGUgPSB0eXBlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuXHRcdFx0XHRzdGF0dXNDb2RlOiBmdW5jdGlvbiggbWFwICkge1xuXHRcdFx0XHRcdHZhciBjb2RlO1xuXHRcdFx0XHRcdGlmICggbWFwICkge1xuXHRcdFx0XHRcdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gRXhlY3V0ZSB0aGUgYXBwcm9wcmlhdGUgY2FsbGJhY2tzXG5cdFx0XHRcdFx0XHRcdGpxWEhSLmFsd2F5cyggbWFwWyBqcVhIUi5zdGF0dXMgXSApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBMYXp5LWFkZCB0aGUgbmV3IGNhbGxiYWNrcyBpbiBhIHdheSB0aGF0IHByZXNlcnZlcyBvbGQgb25lc1xuXHRcdFx0XHRcdFx0XHRmb3IgKCBjb2RlIGluIG1hcCApIHtcblx0XHRcdFx0XHRcdFx0XHRzdGF0dXNDb2RlWyBjb2RlIF0gPSBbIHN0YXR1c0NvZGVbIGNvZGUgXSwgbWFwWyBjb2RlIF0gXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBDYW5jZWwgdGhlIHJlcXVlc3Rcblx0XHRcdFx0YWJvcnQ6IGZ1bmN0aW9uKCBzdGF0dXNUZXh0ICkge1xuXHRcdFx0XHRcdHZhciBmaW5hbFRleHQgPSBzdGF0dXNUZXh0IHx8IHN0ckFib3J0O1xuXHRcdFx0XHRcdGlmICggdHJhbnNwb3J0ICkge1xuXHRcdFx0XHRcdFx0dHJhbnNwb3J0LmFib3J0KCBmaW5hbFRleHQgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZG9uZSggMCwgZmluYWxUZXh0ICk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHQvLyBBdHRhY2ggZGVmZXJyZWRzXG5cdFx0ZGVmZXJyZWQucHJvbWlzZSgganFYSFIgKTtcblxuXHRcdC8vIEFkZCBwcm90b2NvbCBpZiBub3QgcHJvdmlkZWQgKHByZWZpbHRlcnMgbWlnaHQgZXhwZWN0IGl0KVxuXHRcdC8vIEhhbmRsZSBmYWxzeSB1cmwgaW4gdGhlIHNldHRpbmdzIG9iamVjdCAodHJhYy0xMDA5MzogY29uc2lzdGVuY3kgd2l0aCBvbGQgc2lnbmF0dXJlKVxuXHRcdC8vIFdlIGFsc28gdXNlIHRoZSB1cmwgcGFyYW1ldGVyIGlmIGF2YWlsYWJsZVxuXHRcdHMudXJsID0gKCAoIHVybCB8fCBzLnVybCB8fCBsb2NhdGlvbi5ocmVmICkgKyBcIlwiIClcblx0XHRcdC5yZXBsYWNlKCBycHJvdG9jb2wsIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICk7XG5cblx0XHQvLyBBbGlhcyBtZXRob2Qgb3B0aW9uIHRvIHR5cGUgYXMgcGVyIHRpY2tldCB0cmFjLTEyMDA0XG5cdFx0cy50eXBlID0gb3B0aW9ucy5tZXRob2QgfHwgb3B0aW9ucy50eXBlIHx8IHMubWV0aG9kIHx8IHMudHlwZTtcblxuXHRcdC8vIEV4dHJhY3QgZGF0YVR5cGVzIGxpc3Rcblx0XHRzLmRhdGFUeXBlcyA9ICggcy5kYXRhVHlwZSB8fCBcIipcIiApLnRvTG93ZXJDYXNlKCkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbIFwiXCIgXTtcblxuXHRcdC8vIEEgY3Jvc3MtZG9tYWluIHJlcXVlc3QgaXMgaW4gb3JkZXIgd2hlbiB0aGUgb3JpZ2luIGRvZXNuJ3QgbWF0Y2ggdGhlIGN1cnJlbnQgb3JpZ2luLlxuXHRcdGlmICggcy5jcm9zc0RvbWFpbiA9PSBudWxsICkge1xuXHRcdFx0dXJsQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJhXCIgKTtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgPD04IC0gMTEsIEVkZ2UgMTIgLSAxNVxuXHRcdFx0Ly8gSUUgdGhyb3dzIGV4Y2VwdGlvbiBvbiBhY2Nlc3NpbmcgdGhlIGhyZWYgcHJvcGVydHkgaWYgdXJsIGlzIG1hbGZvcm1lZCxcblx0XHRcdC8vIGUuZy4gaHR0cDovL2V4YW1wbGUuY29tOjgweC9cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHVybEFuY2hvci5ocmVmID0gcy51cmw7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD04IC0gMTEgb25seVxuXHRcdFx0XHQvLyBBbmNob3IncyBob3N0IHByb3BlcnR5IGlzbid0IGNvcnJlY3RseSBzZXQgd2hlbiBzLnVybCBpcyByZWxhdGl2ZVxuXHRcdFx0XHR1cmxBbmNob3IuaHJlZiA9IHVybEFuY2hvci5ocmVmO1xuXHRcdFx0XHRzLmNyb3NzRG9tYWluID0gb3JpZ2luQW5jaG9yLnByb3RvY29sICsgXCIvL1wiICsgb3JpZ2luQW5jaG9yLmhvc3QgIT09XG5cdFx0XHRcdFx0dXJsQW5jaG9yLnByb3RvY29sICsgXCIvL1wiICsgdXJsQW5jaG9yLmhvc3Q7XG5cdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHQvLyBJZiB0aGVyZSBpcyBhbiBlcnJvciBwYXJzaW5nIHRoZSBVUkwsIGFzc3VtZSBpdCBpcyBjcm9zc0RvbWFpbixcblx0XHRcdFx0Ly8gaXQgY2FuIGJlIHJlamVjdGVkIGJ5IHRoZSB0cmFuc3BvcnQgaWYgaXQgaXMgaW52YWxpZFxuXHRcdFx0XHRzLmNyb3NzRG9tYWluID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDb252ZXJ0IGRhdGEgaWYgbm90IGFscmVhZHkgYSBzdHJpbmdcblx0XHRpZiAoIHMuZGF0YSAmJiBzLnByb2Nlc3NEYXRhICYmIHR5cGVvZiBzLmRhdGEgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRzLmRhdGEgPSBqUXVlcnkucGFyYW0oIHMuZGF0YSwgcy50cmFkaXRpb25hbCApO1xuXHRcdH1cblxuXHRcdC8vIEFwcGx5IHByZWZpbHRlcnNcblx0XHRpbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyggcHJlZmlsdGVycywgcywgb3B0aW9ucywganFYSFIgKTtcblxuXHRcdC8vIElmIHJlcXVlc3Qgd2FzIGFib3J0ZWQgaW5zaWRlIGEgcHJlZmlsdGVyLCBzdG9wIHRoZXJlXG5cdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRyZXR1cm4ganFYSFI7XG5cdFx0fVxuXG5cdFx0Ly8gV2UgY2FuIGZpcmUgZ2xvYmFsIGV2ZW50cyBhcyBvZiBub3cgaWYgYXNrZWQgdG9cblx0XHQvLyBEb24ndCBmaXJlIGV2ZW50cyBpZiBqUXVlcnkuZXZlbnQgaXMgdW5kZWZpbmVkIGluIGFuIEFNRC11c2FnZSBzY2VuYXJpbyAodHJhYy0xNTExOClcblx0XHRmaXJlR2xvYmFscyA9IGpRdWVyeS5ldmVudCAmJiBzLmdsb2JhbDtcblxuXHRcdC8vIFdhdGNoIGZvciBhIG5ldyBzZXQgb2YgcmVxdWVzdHNcblx0XHRpZiAoIGZpcmVHbG9iYWxzICYmIGpRdWVyeS5hY3RpdmUrKyA9PT0gMCApIHtcblx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCBcImFqYXhTdGFydFwiICk7XG5cdFx0fVxuXG5cdFx0Ly8gVXBwZXJjYXNlIHRoZSB0eXBlXG5cdFx0cy50eXBlID0gcy50eXBlLnRvVXBwZXJDYXNlKCk7XG5cblx0XHQvLyBEZXRlcm1pbmUgaWYgcmVxdWVzdCBoYXMgY29udGVudFxuXHRcdHMuaGFzQ29udGVudCA9ICFybm9Db250ZW50LnRlc3QoIHMudHlwZSApO1xuXG5cdFx0Ly8gU2F2ZSB0aGUgVVJMIGluIGNhc2Ugd2UncmUgdG95aW5nIHdpdGggdGhlIElmLU1vZGlmaWVkLVNpbmNlXG5cdFx0Ly8gYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyIGxhdGVyIG9uXG5cdFx0Ly8gUmVtb3ZlIGhhc2ggdG8gc2ltcGxpZnkgdXJsIG1hbmlwdWxhdGlvblxuXHRcdGNhY2hlVVJMID0gcy51cmwucmVwbGFjZSggcmhhc2gsIFwiXCIgKTtcblxuXHRcdC8vIE1vcmUgb3B0aW9ucyBoYW5kbGluZyBmb3IgcmVxdWVzdHMgd2l0aCBubyBjb250ZW50XG5cdFx0aWYgKCAhcy5oYXNDb250ZW50ICkge1xuXG5cdFx0XHQvLyBSZW1lbWJlciB0aGUgaGFzaCBzbyB3ZSBjYW4gcHV0IGl0IGJhY2tcblx0XHRcdHVuY2FjaGVkID0gcy51cmwuc2xpY2UoIGNhY2hlVVJMLmxlbmd0aCApO1xuXG5cdFx0XHQvLyBJZiBkYXRhIGlzIGF2YWlsYWJsZSBhbmQgc2hvdWxkIGJlIHByb2Nlc3NlZCwgYXBwZW5kIGRhdGEgdG8gdXJsXG5cdFx0XHRpZiAoIHMuZGF0YSAmJiAoIHMucHJvY2Vzc0RhdGEgfHwgdHlwZW9mIHMuZGF0YSA9PT0gXCJzdHJpbmdcIiApICkge1xuXHRcdFx0XHRjYWNoZVVSTCArPSAoIHJxdWVyeS50ZXN0KCBjYWNoZVVSTCApID8gXCImXCIgOiBcIj9cIiApICsgcy5kYXRhO1xuXG5cdFx0XHRcdC8vIHRyYWMtOTY4MjogcmVtb3ZlIGRhdGEgc28gdGhhdCBpdCdzIG5vdCB1c2VkIGluIGFuIGV2ZW50dWFsIHJldHJ5XG5cdFx0XHRcdGRlbGV0ZSBzLmRhdGE7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBvciB1cGRhdGUgYW50aS1jYWNoZSBwYXJhbSBpZiBuZWVkZWRcblx0XHRcdGlmICggcy5jYWNoZSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdGNhY2hlVVJMID0gY2FjaGVVUkwucmVwbGFjZSggcmFudGlDYWNoZSwgXCIkMVwiICk7XG5cdFx0XHRcdHVuY2FjaGVkID0gKCBycXVlcnkudGVzdCggY2FjaGVVUkwgKSA/IFwiJlwiIDogXCI/XCIgKSArIFwiXz1cIiArICggbm9uY2UuZ3VpZCsrICkgK1xuXHRcdFx0XHRcdHVuY2FjaGVkO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQdXQgaGFzaCBhbmQgYW50aS1jYWNoZSBvbiB0aGUgVVJMIHRoYXQgd2lsbCBiZSByZXF1ZXN0ZWQgKGdoLTE3MzIpXG5cdFx0XHRzLnVybCA9IGNhY2hlVVJMICsgdW5jYWNoZWQ7XG5cblx0XHQvLyBDaGFuZ2UgJyUyMCcgdG8gJysnIGlmIHRoaXMgaXMgZW5jb2RlZCBmb3JtIGJvZHkgY29udGVudCAoZ2gtMjY1OClcblx0XHR9IGVsc2UgaWYgKCBzLmRhdGEgJiYgcy5wcm9jZXNzRGF0YSAmJlxuXHRcdFx0KCBzLmNvbnRlbnRUeXBlIHx8IFwiXCIgKS5pbmRleE9mKCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiICkgPT09IDAgKSB7XG5cdFx0XHRzLmRhdGEgPSBzLmRhdGEucmVwbGFjZSggcjIwLCBcIitcIiApO1xuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyLCBpZiBpbiBpZk1vZGlmaWVkIG1vZGUuXG5cdFx0aWYgKCBzLmlmTW9kaWZpZWQgKSB7XG5cdFx0XHRpZiAoIGpRdWVyeS5sYXN0TW9kaWZpZWRbIGNhY2hlVVJMIF0gKSB7XG5cdFx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIFwiSWYtTW9kaWZpZWQtU2luY2VcIiwgalF1ZXJ5Lmxhc3RNb2RpZmllZFsgY2FjaGVVUkwgXSApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBqUXVlcnkuZXRhZ1sgY2FjaGVVUkwgXSApIHtcblx0XHRcdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlciggXCJJZi1Ob25lLU1hdGNoXCIsIGpRdWVyeS5ldGFnWyBjYWNoZVVSTCBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBjb3JyZWN0IGhlYWRlciwgaWYgZGF0YSBpcyBiZWluZyBzZW50XG5cdFx0aWYgKCBzLmRhdGEgJiYgcy5oYXNDb250ZW50ICYmIHMuY29udGVudFR5cGUgIT09IGZhbHNlIHx8IG9wdGlvbnMuY29udGVudFR5cGUgKSB7XG5cdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBcIkNvbnRlbnQtVHlwZVwiLCBzLmNvbnRlbnRUeXBlICk7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBBY2NlcHRzIGhlYWRlciBmb3IgdGhlIHNlcnZlciwgZGVwZW5kaW5nIG9uIHRoZSBkYXRhVHlwZVxuXHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoXG5cdFx0XHRcIkFjY2VwdFwiLFxuXHRcdFx0cy5kYXRhVHlwZXNbIDAgXSAmJiBzLmFjY2VwdHNbIHMuZGF0YVR5cGVzWyAwIF0gXSA/XG5cdFx0XHRcdHMuYWNjZXB0c1sgcy5kYXRhVHlwZXNbIDAgXSBdICtcblx0XHRcdFx0XHQoIHMuZGF0YVR5cGVzWyAwIF0gIT09IFwiKlwiID8gXCIsIFwiICsgYWxsVHlwZXMgKyBcIjsgcT0wLjAxXCIgOiBcIlwiICkgOlxuXHRcdFx0XHRzLmFjY2VwdHNbIFwiKlwiIF1cblx0XHQpO1xuXG5cdFx0Ly8gQ2hlY2sgZm9yIGhlYWRlcnMgb3B0aW9uXG5cdFx0Zm9yICggaSBpbiBzLmhlYWRlcnMgKSB7XG5cdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBpLCBzLmhlYWRlcnNbIGkgXSApO1xuXHRcdH1cblxuXHRcdC8vIEFsbG93IGN1c3RvbSBoZWFkZXJzL21pbWV0eXBlcyBhbmQgZWFybHkgYWJvcnRcblx0XHRpZiAoIHMuYmVmb3JlU2VuZCAmJlxuXHRcdFx0KCBzLmJlZm9yZVNlbmQuY2FsbCggY2FsbGJhY2tDb250ZXh0LCBqcVhIUiwgcyApID09PSBmYWxzZSB8fCBjb21wbGV0ZWQgKSApIHtcblxuXHRcdFx0Ly8gQWJvcnQgaWYgbm90IGRvbmUgYWxyZWFkeSBhbmQgcmV0dXJuXG5cdFx0XHRyZXR1cm4ganFYSFIuYWJvcnQoKTtcblx0XHR9XG5cblx0XHQvLyBBYm9ydGluZyBpcyBubyBsb25nZXIgYSBjYW5jZWxsYXRpb25cblx0XHRzdHJBYm9ydCA9IFwiYWJvcnRcIjtcblxuXHRcdC8vIEluc3RhbGwgY2FsbGJhY2tzIG9uIGRlZmVycmVkc1xuXHRcdGNvbXBsZXRlRGVmZXJyZWQuYWRkKCBzLmNvbXBsZXRlICk7XG5cdFx0anFYSFIuZG9uZSggcy5zdWNjZXNzICk7XG5cdFx0anFYSFIuZmFpbCggcy5lcnJvciApO1xuXG5cdFx0Ly8gR2V0IHRyYW5zcG9ydFxuXHRcdHRyYW5zcG9ydCA9IGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCB0cmFuc3BvcnRzLCBzLCBvcHRpb25zLCBqcVhIUiApO1xuXG5cdFx0Ly8gSWYgbm8gdHJhbnNwb3J0LCB3ZSBhdXRvLWFib3J0XG5cdFx0aWYgKCAhdHJhbnNwb3J0ICkge1xuXHRcdFx0ZG9uZSggLTEsIFwiTm8gVHJhbnNwb3J0XCIgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0anFYSFIucmVhZHlTdGF0ZSA9IDE7XG5cblx0XHRcdC8vIFNlbmQgZ2xvYmFsIGV2ZW50XG5cdFx0XHRpZiAoIGZpcmVHbG9iYWxzICkge1xuXHRcdFx0XHRnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlciggXCJhamF4U2VuZFwiLCBbIGpxWEhSLCBzIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgcmVxdWVzdCB3YXMgYWJvcnRlZCBpbnNpZGUgYWpheFNlbmQsIHN0b3AgdGhlcmVcblx0XHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0XHRyZXR1cm4ganFYSFI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRpbWVvdXRcblx0XHRcdGlmICggcy5hc3luYyAmJiBzLnRpbWVvdXQgPiAwICkge1xuXHRcdFx0XHR0aW1lb3V0VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0anFYSFIuYWJvcnQoIFwidGltZW91dFwiICk7XG5cdFx0XHRcdH0sIHMudGltZW91dCApO1xuXHRcdFx0fVxuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb21wbGV0ZWQgPSBmYWxzZTtcblx0XHRcdFx0dHJhbnNwb3J0LnNlbmQoIHJlcXVlc3RIZWFkZXJzLCBkb25lICk7XG5cdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHQvLyBSZXRocm93IHBvc3QtY29tcGxldGlvbiBleGNlcHRpb25zXG5cdFx0XHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0XHRcdHRocm93IGU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcm9wYWdhdGUgb3RoZXJzIGFzIHJlc3VsdHNcblx0XHRcdFx0ZG9uZSggLTEsIGUgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDYWxsYmFjayBmb3Igd2hlbiBldmVyeXRoaW5nIGlzIGRvbmVcblx0XHRmdW5jdGlvbiBkb25lKCBzdGF0dXMsIG5hdGl2ZVN0YXR1c1RleHQsIHJlc3BvbnNlcywgaGVhZGVycyApIHtcblx0XHRcdHZhciBpc1N1Y2Nlc3MsIHN1Y2Nlc3MsIGVycm9yLCByZXNwb25zZSwgbW9kaWZpZWQsXG5cdFx0XHRcdHN0YXR1c1RleHQgPSBuYXRpdmVTdGF0dXNUZXh0O1xuXG5cdFx0XHQvLyBJZ25vcmUgcmVwZWF0IGludm9jYXRpb25zXG5cdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb21wbGV0ZWQgPSB0cnVlO1xuXG5cdFx0XHQvLyBDbGVhciB0aW1lb3V0IGlmIGl0IGV4aXN0c1xuXHRcdFx0aWYgKCB0aW1lb3V0VGltZXIgKSB7XG5cdFx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoIHRpbWVvdXRUaW1lciApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBEZXJlZmVyZW5jZSB0cmFuc3BvcnQgZm9yIGVhcmx5IGdhcmJhZ2UgY29sbGVjdGlvblxuXHRcdFx0Ly8gKG5vIG1hdHRlciBob3cgbG9uZyB0aGUganFYSFIgb2JqZWN0IHdpbGwgYmUgdXNlZClcblx0XHRcdHRyYW5zcG9ydCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0Ly8gQ2FjaGUgcmVzcG9uc2UgaGVhZGVyc1xuXHRcdFx0cmVzcG9uc2VIZWFkZXJzU3RyaW5nID0gaGVhZGVycyB8fCBcIlwiO1xuXG5cdFx0XHQvLyBTZXQgcmVhZHlTdGF0ZVxuXHRcdFx0anFYSFIucmVhZHlTdGF0ZSA9IHN0YXR1cyA+IDAgPyA0IDogMDtcblxuXHRcdFx0Ly8gRGV0ZXJtaW5lIGlmIHN1Y2Nlc3NmdWxcblx0XHRcdGlzU3VjY2VzcyA9IHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwIHx8IHN0YXR1cyA9PT0gMzA0O1xuXG5cdFx0XHQvLyBHZXQgcmVzcG9uc2UgZGF0YVxuXHRcdFx0aWYgKCByZXNwb25zZXMgKSB7XG5cdFx0XHRcdHJlc3BvbnNlID0gYWpheEhhbmRsZVJlc3BvbnNlcyggcywganFYSFIsIHJlc3BvbnNlcyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBVc2UgYSBub29wIGNvbnZlcnRlciBmb3IgbWlzc2luZyBzY3JpcHQgYnV0IG5vdCBpZiBqc29ucFxuXHRcdFx0aWYgKCAhaXNTdWNjZXNzICYmXG5cdFx0XHRcdGpRdWVyeS5pbkFycmF5KCBcInNjcmlwdFwiLCBzLmRhdGFUeXBlcyApID4gLTEgJiZcblx0XHRcdFx0alF1ZXJ5LmluQXJyYXkoIFwianNvblwiLCBzLmRhdGFUeXBlcyApIDwgMCApIHtcblx0XHRcdFx0cy5jb252ZXJ0ZXJzWyBcInRleHQgc2NyaXB0XCIgXSA9IGZ1bmN0aW9uKCkge307XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvbnZlcnQgbm8gbWF0dGVyIHdoYXQgKHRoYXQgd2F5IHJlc3BvbnNlWFhYIGZpZWxkcyBhcmUgYWx3YXlzIHNldClcblx0XHRcdHJlc3BvbnNlID0gYWpheENvbnZlcnQoIHMsIHJlc3BvbnNlLCBqcVhIUiwgaXNTdWNjZXNzICk7XG5cblx0XHRcdC8vIElmIHN1Y2Nlc3NmdWwsIGhhbmRsZSB0eXBlIGNoYWluaW5nXG5cdFx0XHRpZiAoIGlzU3VjY2VzcyApIHtcblxuXHRcdFx0XHQvLyBTZXQgdGhlIElmLU1vZGlmaWVkLVNpbmNlIGFuZC9vciBJZi1Ob25lLU1hdGNoIGhlYWRlciwgaWYgaW4gaWZNb2RpZmllZCBtb2RlLlxuXHRcdFx0XHRpZiAoIHMuaWZNb2RpZmllZCApIHtcblx0XHRcdFx0XHRtb2RpZmllZCA9IGpxWEhSLmdldFJlc3BvbnNlSGVhZGVyKCBcIkxhc3QtTW9kaWZpZWRcIiApO1xuXHRcdFx0XHRcdGlmICggbW9kaWZpZWQgKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkubGFzdE1vZGlmaWVkWyBjYWNoZVVSTCBdID0gbW9kaWZpZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG1vZGlmaWVkID0ganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoIFwiZXRhZ1wiICk7XG5cdFx0XHRcdFx0aWYgKCBtb2RpZmllZCApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5ldGFnWyBjYWNoZVVSTCBdID0gbW9kaWZpZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gaWYgbm8gY29udGVudFxuXHRcdFx0XHRpZiAoIHN0YXR1cyA9PT0gMjA0IHx8IHMudHlwZSA9PT0gXCJIRUFEXCIgKSB7XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IFwibm9jb250ZW50XCI7XG5cblx0XHRcdFx0Ly8gaWYgbm90IG1vZGlmaWVkXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHN0YXR1cyA9PT0gMzA0ICkge1xuXHRcdFx0XHRcdHN0YXR1c1RleHQgPSBcIm5vdG1vZGlmaWVkXCI7XG5cblx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBkYXRhLCBsZXQncyBjb252ZXJ0IGl0XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXRlO1xuXHRcdFx0XHRcdHN1Y2Nlc3MgPSByZXNwb25zZS5kYXRhO1xuXHRcdFx0XHRcdGVycm9yID0gcmVzcG9uc2UuZXJyb3I7XG5cdFx0XHRcdFx0aXNTdWNjZXNzID0gIWVycm9yO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIEV4dHJhY3QgZXJyb3IgZnJvbSBzdGF0dXNUZXh0IGFuZCBub3JtYWxpemUgZm9yIG5vbi1hYm9ydHNcblx0XHRcdFx0ZXJyb3IgPSBzdGF0dXNUZXh0O1xuXHRcdFx0XHRpZiAoIHN0YXR1cyB8fCAhc3RhdHVzVGV4dCApIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gXCJlcnJvclwiO1xuXHRcdFx0XHRcdGlmICggc3RhdHVzIDwgMCApIHtcblx0XHRcdFx0XHRcdHN0YXR1cyA9IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCBkYXRhIGZvciB0aGUgZmFrZSB4aHIgb2JqZWN0XG5cdFx0XHRqcVhIUi5zdGF0dXMgPSBzdGF0dXM7XG5cdFx0XHRqcVhIUi5zdGF0dXNUZXh0ID0gKCBuYXRpdmVTdGF0dXNUZXh0IHx8IHN0YXR1c1RleHQgKSArIFwiXCI7XG5cblx0XHRcdC8vIFN1Y2Nlc3MvRXJyb3Jcblx0XHRcdGlmICggaXNTdWNjZXNzICkge1xuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlV2l0aCggY2FsbGJhY2tDb250ZXh0LCBbIHN1Y2Nlc3MsIHN0YXR1c1RleHQsIGpxWEhSIF0gKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRlZmVycmVkLnJlamVjdFdpdGgoIGNhbGxiYWNrQ29udGV4dCwgWyBqcVhIUiwgc3RhdHVzVGV4dCwgZXJyb3IgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuXHRcdFx0anFYSFIuc3RhdHVzQ29kZSggc3RhdHVzQ29kZSApO1xuXHRcdFx0c3RhdHVzQ29kZSA9IHVuZGVmaW5lZDtcblxuXHRcdFx0aWYgKCBmaXJlR2xvYmFscyApIHtcblx0XHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0LnRyaWdnZXIoIGlzU3VjY2VzcyA/IFwiYWpheFN1Y2Nlc3NcIiA6IFwiYWpheEVycm9yXCIsXG5cdFx0XHRcdFx0WyBqcVhIUiwgcywgaXNTdWNjZXNzID8gc3VjY2VzcyA6IGVycm9yIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29tcGxldGVcblx0XHRcdGNvbXBsZXRlRGVmZXJyZWQuZmlyZVdpdGgoIGNhbGxiYWNrQ29udGV4dCwgWyBqcVhIUiwgc3RhdHVzVGV4dCBdICk7XG5cblx0XHRcdGlmICggZmlyZUdsb2JhbHMgKSB7XG5cdFx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKCBcImFqYXhDb21wbGV0ZVwiLCBbIGpxWEhSLCBzIF0gKTtcblxuXHRcdFx0XHQvLyBIYW5kbGUgdGhlIGdsb2JhbCBBSkFYIGNvdW50ZXJcblx0XHRcdFx0aWYgKCAhKCAtLWpRdWVyeS5hY3RpdmUgKSApIHtcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlciggXCJhamF4U3RvcFwiICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ganFYSFI7XG5cdH0sXG5cblx0Z2V0SlNPTjogZnVuY3Rpb24oIHVybCwgZGF0YSwgY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5nZXQoIHVybCwgZGF0YSwgY2FsbGJhY2ssIFwianNvblwiICk7XG5cdH0sXG5cblx0Z2V0U2NyaXB0OiBmdW5jdGlvbiggdXJsLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdldCggdXJsLCB1bmRlZmluZWQsIGNhbGxiYWNrLCBcInNjcmlwdFwiICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmVhY2goIFsgXCJnZXRcIiwgXCJwb3N0XCIgXSwgZnVuY3Rpb24oIF9pLCBtZXRob2QgKSB7XG5cdGpRdWVyeVsgbWV0aG9kIF0gPSBmdW5jdGlvbiggdXJsLCBkYXRhLCBjYWxsYmFjaywgdHlwZSApIHtcblxuXHRcdC8vIFNoaWZ0IGFyZ3VtZW50cyBpZiBkYXRhIGFyZ3VtZW50IHdhcyBvbWl0dGVkXG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCBkYXRhICkgKSB7XG5cdFx0XHR0eXBlID0gdHlwZSB8fCBjYWxsYmFjaztcblx0XHRcdGNhbGxiYWNrID0gZGF0YTtcblx0XHRcdGRhdGEgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gVGhlIHVybCBjYW4gYmUgYW4gb3B0aW9ucyBvYmplY3QgKHdoaWNoIHRoZW4gbXVzdCBoYXZlIC51cmwpXG5cdFx0cmV0dXJuIGpRdWVyeS5hamF4KCBqUXVlcnkuZXh0ZW5kKCB7XG5cdFx0XHR1cmw6IHVybCxcblx0XHRcdHR5cGU6IG1ldGhvZCxcblx0XHRcdGRhdGFUeXBlOiB0eXBlLFxuXHRcdFx0ZGF0YTogZGF0YSxcblx0XHRcdHN1Y2Nlc3M6IGNhbGxiYWNrXG5cdFx0fSwgalF1ZXJ5LmlzUGxhaW5PYmplY3QoIHVybCApICYmIHVybCApICk7XG5cdH07XG59ICk7XG5cbmpRdWVyeS5hamF4UHJlZmlsdGVyKCBmdW5jdGlvbiggcyApIHtcblx0dmFyIGk7XG5cdGZvciAoIGkgaW4gcy5oZWFkZXJzICkge1xuXHRcdGlmICggaS50b0xvd2VyQ2FzZSgpID09PSBcImNvbnRlbnQtdHlwZVwiICkge1xuXHRcdFx0cy5jb250ZW50VHlwZSA9IHMuaGVhZGVyc1sgaSBdIHx8IFwiXCI7XG5cdFx0fVxuXHR9XG59ICk7XG5cblxualF1ZXJ5Ll9ldmFsVXJsID0gZnVuY3Rpb24oIHVybCwgb3B0aW9ucywgZG9jICkge1xuXHRyZXR1cm4galF1ZXJ5LmFqYXgoIHtcblx0XHR1cmw6IHVybCxcblxuXHRcdC8vIE1ha2UgdGhpcyBleHBsaWNpdCwgc2luY2UgdXNlciBjYW4gb3ZlcnJpZGUgdGhpcyB0aHJvdWdoIGFqYXhTZXR1cCAodHJhYy0xMTI2NClcblx0XHR0eXBlOiBcIkdFVFwiLFxuXHRcdGRhdGFUeXBlOiBcInNjcmlwdFwiLFxuXHRcdGNhY2hlOiB0cnVlLFxuXHRcdGFzeW5jOiBmYWxzZSxcblx0XHRnbG9iYWw6IGZhbHNlLFxuXG5cdFx0Ly8gT25seSBldmFsdWF0ZSB0aGUgcmVzcG9uc2UgaWYgaXQgaXMgc3VjY2Vzc2Z1bCAoZ2gtNDEyNilcblx0XHQvLyBkYXRhRmlsdGVyIGlzIG5vdCBpbnZva2VkIGZvciBmYWlsdXJlIHJlc3BvbnNlcywgc28gdXNpbmcgaXQgaW5zdGVhZFxuXHRcdC8vIG9mIHRoZSBkZWZhdWx0IGNvbnZlcnRlciBpcyBrbHVkZ3kgYnV0IGl0IHdvcmtzLlxuXHRcdGNvbnZlcnRlcnM6IHtcblx0XHRcdFwidGV4dCBzY3JpcHRcIjogZnVuY3Rpb24oKSB7fVxuXHRcdH0sXG5cdFx0ZGF0YUZpbHRlcjogZnVuY3Rpb24oIHJlc3BvbnNlICkge1xuXHRcdFx0alF1ZXJ5Lmdsb2JhbEV2YWwoIHJlc3BvbnNlLCBvcHRpb25zLCBkb2MgKTtcblx0XHR9XG5cdH0gKTtcbn07XG5cblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHR3cmFwQWxsOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHR2YXIgd3JhcDtcblxuXHRcdGlmICggdGhpc1sgMCBdICkge1xuXHRcdFx0aWYgKCBpc0Z1bmN0aW9uKCBodG1sICkgKSB7XG5cdFx0XHRcdGh0bWwgPSBodG1sLmNhbGwoIHRoaXNbIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUaGUgZWxlbWVudHMgdG8gd3JhcCB0aGUgdGFyZ2V0IGFyb3VuZFxuXHRcdFx0d3JhcCA9IGpRdWVyeSggaHRtbCwgdGhpc1sgMCBdLm93bmVyRG9jdW1lbnQgKS5lcSggMCApLmNsb25lKCB0cnVlICk7XG5cblx0XHRcdGlmICggdGhpc1sgMCBdLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdHdyYXAuaW5zZXJ0QmVmb3JlKCB0aGlzWyAwIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0d3JhcC5tYXAoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgZWxlbSA9IHRoaXM7XG5cblx0XHRcdFx0d2hpbGUgKCBlbGVtLmZpcnN0RWxlbWVudENoaWxkICkge1xuXHRcdFx0XHRcdGVsZW0gPSBlbGVtLmZpcnN0RWxlbWVudENoaWxkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGVsZW07XG5cdFx0XHR9ICkuYXBwZW5kKCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0d3JhcElubmVyOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHRpZiAoIGlzRnVuY3Rpb24oIGh0bWwgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS53cmFwSW5uZXIoIGh0bWwuY2FsbCggdGhpcywgaSApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZiA9IGpRdWVyeSggdGhpcyApLFxuXHRcdFx0XHRjb250ZW50cyA9IHNlbGYuY29udGVudHMoKTtcblxuXHRcdFx0aWYgKCBjb250ZW50cy5sZW5ndGggKSB7XG5cdFx0XHRcdGNvbnRlbnRzLndyYXBBbGwoIGh0bWwgKTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi5hcHBlbmQoIGh0bWwgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0d3JhcDogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0dmFyIGh0bWxJc0Z1bmN0aW9uID0gaXNGdW5jdGlvbiggaHRtbCApO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS53cmFwQWxsKCBodG1sSXNGdW5jdGlvbiA/IGh0bWwuY2FsbCggdGhpcywgaSApIDogaHRtbCApO1xuXHRcdH0gKTtcblx0fSxcblxuXHR1bndyYXA6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHR0aGlzLnBhcmVudCggc2VsZWN0b3IgKS5ub3QoIFwiYm9keVwiICkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS5yZXBsYWNlV2l0aCggdGhpcy5jaGlsZE5vZGVzICk7XG5cdFx0fSApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59ICk7XG5cblxualF1ZXJ5LmV4cHIucHNldWRvcy5oaWRkZW4gPSBmdW5jdGlvbiggZWxlbSApIHtcblx0cmV0dXJuICFqUXVlcnkuZXhwci5wc2V1ZG9zLnZpc2libGUoIGVsZW0gKTtcbn07XG5qUXVlcnkuZXhwci5wc2V1ZG9zLnZpc2libGUgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0cmV0dXJuICEhKCBlbGVtLm9mZnNldFdpZHRoIHx8IGVsZW0ub2Zmc2V0SGVpZ2h0IHx8IGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggKTtcbn07XG5cblxuXG5cbmpRdWVyeS5hamF4U2V0dGluZ3MueGhyID0gZnVuY3Rpb24oKSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKTtcblx0fSBjYXRjaCAoIGUgKSB7fVxufTtcblxudmFyIHhoclN1Y2Nlc3NTdGF0dXMgPSB7XG5cblx0XHQvLyBGaWxlIHByb3RvY29sIGFsd2F5cyB5aWVsZHMgc3RhdHVzIGNvZGUgMCwgYXNzdW1lIDIwMFxuXHRcdDA6IDIwMCxcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdFx0Ly8gdHJhYy0xNDUwOiBzb21ldGltZXMgSUUgcmV0dXJucyAxMjIzIHdoZW4gaXQgc2hvdWxkIGJlIDIwNFxuXHRcdDEyMjM6IDIwNFxuXHR9LFxuXHR4aHJTdXBwb3J0ZWQgPSBqUXVlcnkuYWpheFNldHRpbmdzLnhocigpO1xuXG5zdXBwb3J0LmNvcnMgPSAhIXhoclN1cHBvcnRlZCAmJiAoIFwid2l0aENyZWRlbnRpYWxzXCIgaW4geGhyU3VwcG9ydGVkICk7XG5zdXBwb3J0LmFqYXggPSB4aHJTdXBwb3J0ZWQgPSAhIXhoclN1cHBvcnRlZDtcblxualF1ZXJ5LmFqYXhUcmFuc3BvcnQoIGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXHR2YXIgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s7XG5cblx0Ly8gQ3Jvc3MgZG9tYWluIG9ubHkgYWxsb3dlZCBpZiBzdXBwb3J0ZWQgdGhyb3VnaCBYTUxIdHRwUmVxdWVzdFxuXHRpZiAoIHN1cHBvcnQuY29ycyB8fCB4aHJTdXBwb3J0ZWQgJiYgIW9wdGlvbnMuY3Jvc3NEb21haW4gKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlbmQ6IGZ1bmN0aW9uKCBoZWFkZXJzLCBjb21wbGV0ZSApIHtcblx0XHRcdFx0dmFyIGksXG5cdFx0XHRcdFx0eGhyID0gb3B0aW9ucy54aHIoKTtcblxuXHRcdFx0XHR4aHIub3Blbihcblx0XHRcdFx0XHRvcHRpb25zLnR5cGUsXG5cdFx0XHRcdFx0b3B0aW9ucy51cmwsXG5cdFx0XHRcdFx0b3B0aW9ucy5hc3luYyxcblx0XHRcdFx0XHRvcHRpb25zLnVzZXJuYW1lLFxuXHRcdFx0XHRcdG9wdGlvbnMucGFzc3dvcmRcblx0XHRcdFx0KTtcblxuXHRcdFx0XHQvLyBBcHBseSBjdXN0b20gZmllbGRzIGlmIHByb3ZpZGVkXG5cdFx0XHRcdGlmICggb3B0aW9ucy54aHJGaWVsZHMgKSB7XG5cdFx0XHRcdFx0Zm9yICggaSBpbiBvcHRpb25zLnhockZpZWxkcyApIHtcblx0XHRcdFx0XHRcdHhoclsgaSBdID0gb3B0aW9ucy54aHJGaWVsZHNbIGkgXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBPdmVycmlkZSBtaW1lIHR5cGUgaWYgbmVlZGVkXG5cdFx0XHRcdGlmICggb3B0aW9ucy5taW1lVHlwZSAmJiB4aHIub3ZlcnJpZGVNaW1lVHlwZSApIHtcblx0XHRcdFx0XHR4aHIub3ZlcnJpZGVNaW1lVHlwZSggb3B0aW9ucy5taW1lVHlwZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gWC1SZXF1ZXN0ZWQtV2l0aCBoZWFkZXJcblx0XHRcdFx0Ly8gRm9yIGNyb3NzLWRvbWFpbiByZXF1ZXN0cywgc2VlaW5nIGFzIGNvbmRpdGlvbnMgZm9yIGEgcHJlZmxpZ2h0IGFyZVxuXHRcdFx0XHQvLyBha2luIHRvIGEgamlnc2F3IHB1enpsZSwgd2Ugc2ltcGx5IG5ldmVyIHNldCBpdCB0byBiZSBzdXJlLlxuXHRcdFx0XHQvLyAoaXQgY2FuIGFsd2F5cyBiZSBzZXQgb24gYSBwZXItcmVxdWVzdCBiYXNpcyBvciBldmVuIHVzaW5nIGFqYXhTZXR1cClcblx0XHRcdFx0Ly8gRm9yIHNhbWUtZG9tYWluIHJlcXVlc3RzLCB3b24ndCBjaGFuZ2UgaGVhZGVyIGlmIGFscmVhZHkgcHJvdmlkZWQuXG5cdFx0XHRcdGlmICggIW9wdGlvbnMuY3Jvc3NEb21haW4gJiYgIWhlYWRlcnNbIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiIF0gKSB7XG5cdFx0XHRcdFx0aGVhZGVyc1sgXCJYLVJlcXVlc3RlZC1XaXRoXCIgXSA9IFwiWE1MSHR0cFJlcXVlc3RcIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFNldCBoZWFkZXJzXG5cdFx0XHRcdGZvciAoIGkgaW4gaGVhZGVycyApIHtcblx0XHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlciggaSwgaGVhZGVyc1sgaSBdICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDYWxsYmFja1xuXHRcdFx0XHRjYWxsYmFjayA9IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrID0gZXJyb3JDYWxsYmFjayA9IHhoci5vbmxvYWQgPVxuXHRcdFx0XHRcdFx0XHRcdHhoci5vbmVycm9yID0geGhyLm9uYWJvcnQgPSB4aHIub250aW1lb3V0ID1cblx0XHRcdFx0XHRcdFx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuXG5cdFx0XHRcdFx0XHRcdGlmICggdHlwZSA9PT0gXCJhYm9ydFwiICkge1xuXHRcdFx0XHRcdFx0XHRcdHhoci5hYm9ydCgpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCB0eXBlID09PSBcImVycm9yXCIgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHRcdFx0XHRcdFx0XHRcdC8vIE9uIGEgbWFudWFsIG5hdGl2ZSBhYm9ydCwgSUU5IHRocm93c1xuXHRcdFx0XHRcdFx0XHRcdC8vIGVycm9ycyBvbiBhbnkgcHJvcGVydHkgYWNjZXNzIHRoYXQgaXMgbm90IHJlYWR5U3RhdGVcblx0XHRcdFx0XHRcdFx0XHRpZiAoIHR5cGVvZiB4aHIuc3RhdHVzICE9PSBcIm51bWJlclwiICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcGxldGUoIDAsIFwiZXJyb3JcIiApO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZShcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBGaWxlOiBwcm90b2NvbCBhbHdheXMgeWllbGRzIHN0YXR1cyAwOyBzZWUgdHJhYy04NjA1LCB0cmFjLTE0MjA3XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHhoci5zdGF0dXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHhoci5zdGF0dXNUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZShcblx0XHRcdFx0XHRcdFx0XHRcdHhoclN1Y2Nlc3NTdGF0dXNbIHhoci5zdGF0dXMgXSB8fCB4aHIuc3RhdHVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1c1RleHQsXG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBJRTkgaGFzIG5vIFhIUjIgYnV0IHRocm93cyBvbiBiaW5hcnkgKHRyYWMtMTE0MjYpXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBGb3IgWEhSMiBub24tdGV4dCwgbGV0IHRoZSBjYWxsZXIgaGFuZGxlIGl0IChnaC0yNDk4KVxuXHRcdFx0XHRcdFx0XHRcdFx0KCB4aHIucmVzcG9uc2VUeXBlIHx8IFwidGV4dFwiICkgIT09IFwidGV4dFwiICB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZW9mIHhoci5yZXNwb25zZVRleHQgIT09IFwic3RyaW5nXCIgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGJpbmFyeTogeGhyLnJlc3BvbnNlIH0gOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IHRleHQ6IHhoci5yZXNwb25zZVRleHQgfSxcblx0XHRcdFx0XHRcdFx0XHRcdHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdC8vIExpc3RlbiB0byBldmVudHNcblx0XHRcdFx0eGhyLm9ubG9hZCA9IGNhbGxiYWNrKCk7XG5cdFx0XHRcdGVycm9yQ2FsbGJhY2sgPSB4aHIub25lcnJvciA9IHhoci5vbnRpbWVvdXQgPSBjYWxsYmFjayggXCJlcnJvclwiICk7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgOSBvbmx5XG5cdFx0XHRcdC8vIFVzZSBvbnJlYWR5c3RhdGVjaGFuZ2UgdG8gcmVwbGFjZSBvbmFib3J0XG5cdFx0XHRcdC8vIHRvIGhhbmRsZSB1bmNhdWdodCBhYm9ydHNcblx0XHRcdFx0aWYgKCB4aHIub25hYm9ydCAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdHhoci5vbmFib3J0ID0gZXJyb3JDYWxsYmFjaztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRcdC8vIENoZWNrIHJlYWR5U3RhdGUgYmVmb3JlIHRpbWVvdXQgYXMgaXQgY2hhbmdlc1xuXHRcdFx0XHRcdFx0aWYgKCB4aHIucmVhZHlTdGF0ZSA9PT0gNCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBBbGxvdyBvbmVycm9yIHRvIGJlIGNhbGxlZCBmaXJzdCxcblx0XHRcdFx0XHRcdFx0Ly8gYnV0IHRoYXQgd2lsbCBub3QgaGFuZGxlIGEgbmF0aXZlIGFib3J0XG5cdFx0XHRcdFx0XHRcdC8vIEFsc28sIHNhdmUgZXJyb3JDYWxsYmFjayB0byBhIHZhcmlhYmxlXG5cdFx0XHRcdFx0XHRcdC8vIGFzIHhoci5vbmVycm9yIGNhbm5vdCBiZSBhY2Nlc3NlZFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yQ2FsbGJhY2soKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ3JlYXRlIHRoZSBhYm9ydCBjYWxsYmFja1xuXHRcdFx0XHRjYWxsYmFjayA9IGNhbGxiYWNrKCBcImFib3J0XCIgKTtcblxuXHRcdFx0XHR0cnkge1xuXG5cdFx0XHRcdFx0Ly8gRG8gc2VuZCB0aGUgcmVxdWVzdCAodGhpcyBtYXkgcmFpc2UgYW4gZXhjZXB0aW9uKVxuXHRcdFx0XHRcdHhoci5zZW5kKCBvcHRpb25zLmhhc0NvbnRlbnQgJiYgb3B0aW9ucy5kYXRhIHx8IG51bGwgKTtcblx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cblx0XHRcdFx0XHQvLyB0cmFjLTE0NjgzOiBPbmx5IHJldGhyb3cgaWYgdGhpcyBoYXNuJ3QgYmVlbiBub3RpZmllZCBhcyBhbiBlcnJvciB5ZXRcblx0XHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdGFib3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufSApO1xuXG5cblxuXG4vLyBQcmV2ZW50IGF1dG8tZXhlY3V0aW9uIG9mIHNjcmlwdHMgd2hlbiBubyBleHBsaWNpdCBkYXRhVHlwZSB3YXMgcHJvdmlkZWQgKFNlZSBnaC0yNDMyKVxualF1ZXJ5LmFqYXhQcmVmaWx0ZXIoIGZ1bmN0aW9uKCBzICkge1xuXHRpZiAoIHMuY3Jvc3NEb21haW4gKSB7XG5cdFx0cy5jb250ZW50cy5zY3JpcHQgPSBmYWxzZTtcblx0fVxufSApO1xuXG4vLyBJbnN0YWxsIHNjcmlwdCBkYXRhVHlwZVxualF1ZXJ5LmFqYXhTZXR1cCgge1xuXHRhY2NlcHRzOiB7XG5cdFx0c2NyaXB0OiBcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgXCIgK1xuXHRcdFx0XCJhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIlxuXHR9LFxuXHRjb250ZW50czoge1xuXHRcdHNjcmlwdDogL1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvXG5cdH0sXG5cdGNvbnZlcnRlcnM6IHtcblx0XHRcInRleHQgc2NyaXB0XCI6IGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRcdFx0alF1ZXJ5Lmdsb2JhbEV2YWwoIHRleHQgKTtcblx0XHRcdHJldHVybiB0ZXh0O1xuXHRcdH1cblx0fVxufSApO1xuXG4vLyBIYW5kbGUgY2FjaGUncyBzcGVjaWFsIGNhc2UgYW5kIGNyb3NzRG9tYWluXG5qUXVlcnkuYWpheFByZWZpbHRlciggXCJzY3JpcHRcIiwgZnVuY3Rpb24oIHMgKSB7XG5cdGlmICggcy5jYWNoZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdHMuY2FjaGUgPSBmYWxzZTtcblx0fVxuXHRpZiAoIHMuY3Jvc3NEb21haW4gKSB7XG5cdFx0cy50eXBlID0gXCJHRVRcIjtcblx0fVxufSApO1xuXG4vLyBCaW5kIHNjcmlwdCB0YWcgaGFjayB0cmFuc3BvcnRcbmpRdWVyeS5hamF4VHJhbnNwb3J0KCBcInNjcmlwdFwiLCBmdW5jdGlvbiggcyApIHtcblxuXHQvLyBUaGlzIHRyYW5zcG9ydCBvbmx5IGRlYWxzIHdpdGggY3Jvc3MgZG9tYWluIG9yIGZvcmNlZC1ieS1hdHRycyByZXF1ZXN0c1xuXHRpZiAoIHMuY3Jvc3NEb21haW4gfHwgcy5zY3JpcHRBdHRycyApIHtcblx0XHR2YXIgc2NyaXB0LCBjYWxsYmFjaztcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VuZDogZnVuY3Rpb24oIF8sIGNvbXBsZXRlICkge1xuXHRcdFx0XHRzY3JpcHQgPSBqUXVlcnkoIFwiPHNjcmlwdD5cIiApXG5cdFx0XHRcdFx0LmF0dHIoIHMuc2NyaXB0QXR0cnMgfHwge30gKVxuXHRcdFx0XHRcdC5wcm9wKCB7IGNoYXJzZXQ6IHMuc2NyaXB0Q2hhcnNldCwgc3JjOiBzLnVybCB9IClcblx0XHRcdFx0XHQub24oIFwibG9hZCBlcnJvclwiLCBjYWxsYmFjayA9IGZ1bmN0aW9uKCBldnQgKSB7XG5cdFx0XHRcdFx0XHRzY3JpcHQucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayA9IG51bGw7XG5cdFx0XHRcdFx0XHRpZiAoIGV2dCApIHtcblx0XHRcdFx0XHRcdFx0Y29tcGxldGUoIGV2dC50eXBlID09PSBcImVycm9yXCIgPyA0MDQgOiAyMDAsIGV2dC50eXBlICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdC8vIFVzZSBuYXRpdmUgRE9NIG1hbmlwdWxhdGlvbiB0byBhdm9pZCBvdXIgZG9tTWFuaXAgQUpBWCB0cmlja2VyeVxuXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCBzY3JpcHRbIDAgXSApO1xuXHRcdFx0fSxcblx0XHRcdGFib3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufSApO1xuXG5cblxuXG52YXIgb2xkQ2FsbGJhY2tzID0gW10sXG5cdHJqc29ucCA9IC8oPSlcXD8oPz0mfCQpfFxcP1xcPy87XG5cbi8vIERlZmF1bHQganNvbnAgc2V0dGluZ3NcbmpRdWVyeS5hamF4U2V0dXAoIHtcblx0anNvbnA6IFwiY2FsbGJhY2tcIixcblx0anNvbnBDYWxsYmFjazogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGNhbGxiYWNrID0gb2xkQ2FsbGJhY2tzLnBvcCgpIHx8ICggalF1ZXJ5LmV4cGFuZG8gKyBcIl9cIiArICggbm9uY2UuZ3VpZCsrICkgKTtcblx0XHR0aGlzWyBjYWxsYmFjayBdID0gdHJ1ZTtcblx0XHRyZXR1cm4gY2FsbGJhY2s7XG5cdH1cbn0gKTtcblxuLy8gRGV0ZWN0LCBub3JtYWxpemUgb3B0aW9ucyBhbmQgaW5zdGFsbCBjYWxsYmFja3MgZm9yIGpzb25wIHJlcXVlc3RzXG5qUXVlcnkuYWpheFByZWZpbHRlciggXCJqc29uIGpzb25wXCIsIGZ1bmN0aW9uKCBzLCBvcmlnaW5hbFNldHRpbmdzLCBqcVhIUiApIHtcblxuXHR2YXIgY2FsbGJhY2tOYW1lLCBvdmVyd3JpdHRlbiwgcmVzcG9uc2VDb250YWluZXIsXG5cdFx0anNvblByb3AgPSBzLmpzb25wICE9PSBmYWxzZSAmJiAoIHJqc29ucC50ZXN0KCBzLnVybCApID9cblx0XHRcdFwidXJsXCIgOlxuXHRcdFx0dHlwZW9mIHMuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHQoIHMuY29udGVudFR5cGUgfHwgXCJcIiApXG5cdFx0XHRcdFx0LmluZGV4T2YoIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgKSA9PT0gMCAmJlxuXHRcdFx0XHRyanNvbnAudGVzdCggcy5kYXRhICkgJiYgXCJkYXRhXCJcblx0XHQpO1xuXG5cdC8vIEhhbmRsZSBpZmYgdGhlIGV4cGVjdGVkIGRhdGEgdHlwZSBpcyBcImpzb25wXCIgb3Igd2UgaGF2ZSBhIHBhcmFtZXRlciB0byBzZXRcblx0aWYgKCBqc29uUHJvcCB8fCBzLmRhdGFUeXBlc1sgMCBdID09PSBcImpzb25wXCIgKSB7XG5cblx0XHQvLyBHZXQgY2FsbGJhY2sgbmFtZSwgcmVtZW1iZXJpbmcgcHJlZXhpc3RpbmcgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIGl0XG5cdFx0Y2FsbGJhY2tOYW1lID0gcy5qc29ucENhbGxiYWNrID0gaXNGdW5jdGlvbiggcy5qc29ucENhbGxiYWNrICkgP1xuXHRcdFx0cy5qc29ucENhbGxiYWNrKCkgOlxuXHRcdFx0cy5qc29ucENhbGxiYWNrO1xuXG5cdFx0Ly8gSW5zZXJ0IGNhbGxiYWNrIGludG8gdXJsIG9yIGZvcm0gZGF0YVxuXHRcdGlmICgganNvblByb3AgKSB7XG5cdFx0XHRzWyBqc29uUHJvcCBdID0gc1sganNvblByb3AgXS5yZXBsYWNlKCByanNvbnAsIFwiJDFcIiArIGNhbGxiYWNrTmFtZSApO1xuXHRcdH0gZWxzZSBpZiAoIHMuanNvbnAgIT09IGZhbHNlICkge1xuXHRcdFx0cy51cmwgKz0gKCBycXVlcnkudGVzdCggcy51cmwgKSA/IFwiJlwiIDogXCI/XCIgKSArIHMuanNvbnAgKyBcIj1cIiArIGNhbGxiYWNrTmFtZTtcblx0XHR9XG5cblx0XHQvLyBVc2UgZGF0YSBjb252ZXJ0ZXIgdG8gcmV0cmlldmUganNvbiBhZnRlciBzY3JpcHQgZXhlY3V0aW9uXG5cdFx0cy5jb252ZXJ0ZXJzWyBcInNjcmlwdCBqc29uXCIgXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCAhcmVzcG9uc2VDb250YWluZXIgKSB7XG5cdFx0XHRcdGpRdWVyeS5lcnJvciggY2FsbGJhY2tOYW1lICsgXCIgd2FzIG5vdCBjYWxsZWRcIiApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlQ29udGFpbmVyWyAwIF07XG5cdFx0fTtcblxuXHRcdC8vIEZvcmNlIGpzb24gZGF0YVR5cGVcblx0XHRzLmRhdGFUeXBlc1sgMCBdID0gXCJqc29uXCI7XG5cblx0XHQvLyBJbnN0YWxsIGNhbGxiYWNrXG5cdFx0b3ZlcndyaXR0ZW4gPSB3aW5kb3dbIGNhbGxiYWNrTmFtZSBdO1xuXHRcdHdpbmRvd1sgY2FsbGJhY2tOYW1lIF0gPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlc3BvbnNlQ29udGFpbmVyID0gYXJndW1lbnRzO1xuXHRcdH07XG5cblx0XHQvLyBDbGVhbi11cCBmdW5jdGlvbiAoZmlyZXMgYWZ0ZXIgY29udmVydGVycylcblx0XHRqcVhIUi5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBJZiBwcmV2aW91cyB2YWx1ZSBkaWRuJ3QgZXhpc3QgLSByZW1vdmUgaXRcblx0XHRcdGlmICggb3ZlcndyaXR0ZW4gPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0alF1ZXJ5KCB3aW5kb3cgKS5yZW1vdmVQcm9wKCBjYWxsYmFja05hbWUgKTtcblxuXHRcdFx0Ly8gT3RoZXJ3aXNlIHJlc3RvcmUgcHJlZXhpc3RpbmcgdmFsdWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvd1sgY2FsbGJhY2tOYW1lIF0gPSBvdmVyd3JpdHRlbjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2F2ZSBiYWNrIGFzIGZyZWVcblx0XHRcdGlmICggc1sgY2FsbGJhY2tOYW1lIF0gKSB7XG5cblx0XHRcdFx0Ly8gTWFrZSBzdXJlIHRoYXQgcmUtdXNpbmcgdGhlIG9wdGlvbnMgZG9lc24ndCBzY3JldyB0aGluZ3MgYXJvdW5kXG5cdFx0XHRcdHMuanNvbnBDYWxsYmFjayA9IG9yaWdpbmFsU2V0dGluZ3MuanNvbnBDYWxsYmFjaztcblxuXHRcdFx0XHQvLyBTYXZlIHRoZSBjYWxsYmFjayBuYW1lIGZvciBmdXR1cmUgdXNlXG5cdFx0XHRcdG9sZENhbGxiYWNrcy5wdXNoKCBjYWxsYmFja05hbWUgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2FsbCBpZiBpdCB3YXMgYSBmdW5jdGlvbiBhbmQgd2UgaGF2ZSBhIHJlc3BvbnNlXG5cdFx0XHRpZiAoIHJlc3BvbnNlQ29udGFpbmVyICYmIGlzRnVuY3Rpb24oIG92ZXJ3cml0dGVuICkgKSB7XG5cdFx0XHRcdG92ZXJ3cml0dGVuKCByZXNwb25zZUNvbnRhaW5lclsgMCBdICk7XG5cdFx0XHR9XG5cblx0XHRcdHJlc3BvbnNlQ29udGFpbmVyID0gb3ZlcndyaXR0ZW4gPSB1bmRlZmluZWQ7XG5cdFx0fSApO1xuXG5cdFx0Ly8gRGVsZWdhdGUgdG8gc2NyaXB0XG5cdFx0cmV0dXJuIFwic2NyaXB0XCI7XG5cdH1cbn0gKTtcblxuXG5cblxuLy8gU3VwcG9ydDogU2FmYXJpIDggb25seVxuLy8gSW4gU2FmYXJpIDggZG9jdW1lbnRzIGNyZWF0ZWQgdmlhIGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudFxuLy8gY29sbGFwc2Ugc2libGluZyBmb3JtczogdGhlIHNlY29uZCBvbmUgYmVjb21lcyBhIGNoaWxkIG9mIHRoZSBmaXJzdCBvbmUuXG4vLyBCZWNhdXNlIG9mIHRoYXQsIHRoaXMgc2VjdXJpdHkgbWVhc3VyZSBoYXMgdG8gYmUgZGlzYWJsZWQgaW4gU2FmYXJpIDguXG4vLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM3MzM3XG5zdXBwb3J0LmNyZWF0ZUhUTUxEb2N1bWVudCA9ICggZnVuY3Rpb24oKSB7XG5cdHZhciBib2R5ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCBcIlwiICkuYm9keTtcblx0Ym9keS5pbm5lckhUTUwgPSBcIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCI7XG5cdHJldHVybiBib2R5LmNoaWxkTm9kZXMubGVuZ3RoID09PSAyO1xufSApKCk7XG5cblxuLy8gQXJndW1lbnQgXCJkYXRhXCIgc2hvdWxkIGJlIHN0cmluZyBvZiBodG1sXG4vLyBjb250ZXh0IChvcHRpb25hbCk6IElmIHNwZWNpZmllZCwgdGhlIGZyYWdtZW50IHdpbGwgYmUgY3JlYXRlZCBpbiB0aGlzIGNvbnRleHQsXG4vLyBkZWZhdWx0cyB0byBkb2N1bWVudFxuLy8ga2VlcFNjcmlwdHMgKG9wdGlvbmFsKTogSWYgdHJ1ZSwgd2lsbCBpbmNsdWRlIHNjcmlwdHMgcGFzc2VkIGluIHRoZSBodG1sIHN0cmluZ1xualF1ZXJ5LnBhcnNlSFRNTCA9IGZ1bmN0aW9uKCBkYXRhLCBjb250ZXh0LCBrZWVwU2NyaXB0cyApIHtcblx0aWYgKCB0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblx0aWYgKCB0eXBlb2YgY29udGV4dCA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0a2VlcFNjcmlwdHMgPSBjb250ZXh0O1xuXHRcdGNvbnRleHQgPSBmYWxzZTtcblx0fVxuXG5cdHZhciBiYXNlLCBwYXJzZWQsIHNjcmlwdHM7XG5cblx0aWYgKCAhY29udGV4dCApIHtcblxuXHRcdC8vIFN0b3Agc2NyaXB0cyBvciBpbmxpbmUgZXZlbnQgaGFuZGxlcnMgZnJvbSBiZWluZyBleGVjdXRlZCBpbW1lZGlhdGVseVxuXHRcdC8vIGJ5IHVzaW5nIGRvY3VtZW50LmltcGxlbWVudGF0aW9uXG5cdFx0aWYgKCBzdXBwb3J0LmNyZWF0ZUhUTUxEb2N1bWVudCApIHtcblx0XHRcdGNvbnRleHQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoIFwiXCIgKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSBiYXNlIGhyZWYgZm9yIHRoZSBjcmVhdGVkIGRvY3VtZW50XG5cdFx0XHQvLyBzbyBhbnkgcGFyc2VkIGVsZW1lbnRzIHdpdGggVVJMc1xuXHRcdFx0Ly8gYXJlIGJhc2VkIG9uIHRoZSBkb2N1bWVudCdzIFVSTCAoZ2gtMjk2NSlcblx0XHRcdGJhc2UgPSBjb250ZXh0LmNyZWF0ZUVsZW1lbnQoIFwiYmFzZVwiICk7XG5cdFx0XHRiYXNlLmhyZWYgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuXHRcdFx0Y29udGV4dC5oZWFkLmFwcGVuZENoaWxkKCBiYXNlICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRleHQgPSBkb2N1bWVudDtcblx0XHR9XG5cdH1cblxuXHRwYXJzZWQgPSByc2luZ2xlVGFnLmV4ZWMoIGRhdGEgKTtcblx0c2NyaXB0cyA9ICFrZWVwU2NyaXB0cyAmJiBbXTtcblxuXHQvLyBTaW5nbGUgdGFnXG5cdGlmICggcGFyc2VkICkge1xuXHRcdHJldHVybiBbIGNvbnRleHQuY3JlYXRlRWxlbWVudCggcGFyc2VkWyAxIF0gKSBdO1xuXHR9XG5cblx0cGFyc2VkID0gYnVpbGRGcmFnbWVudCggWyBkYXRhIF0sIGNvbnRleHQsIHNjcmlwdHMgKTtcblxuXHRpZiAoIHNjcmlwdHMgJiYgc2NyaXB0cy5sZW5ndGggKSB7XG5cdFx0alF1ZXJ5KCBzY3JpcHRzICkucmVtb3ZlKCk7XG5cdH1cblxuXHRyZXR1cm4galF1ZXJ5Lm1lcmdlKCBbXSwgcGFyc2VkLmNoaWxkTm9kZXMgKTtcbn07XG5cblxuLyoqXG4gKiBMb2FkIGEgdXJsIGludG8gYSBwYWdlXG4gKi9cbmpRdWVyeS5mbi5sb2FkID0gZnVuY3Rpb24oIHVybCwgcGFyYW1zLCBjYWxsYmFjayApIHtcblx0dmFyIHNlbGVjdG9yLCB0eXBlLCByZXNwb25zZSxcblx0XHRzZWxmID0gdGhpcyxcblx0XHRvZmYgPSB1cmwuaW5kZXhPZiggXCIgXCIgKTtcblxuXHRpZiAoIG9mZiA+IC0xICkge1xuXHRcdHNlbGVjdG9yID0gc3RyaXBBbmRDb2xsYXBzZSggdXJsLnNsaWNlKCBvZmYgKSApO1xuXHRcdHVybCA9IHVybC5zbGljZSggMCwgb2ZmICk7XG5cdH1cblxuXHQvLyBJZiBpdCdzIGEgZnVuY3Rpb25cblx0aWYgKCBpc0Z1bmN0aW9uKCBwYXJhbXMgKSApIHtcblxuXHRcdC8vIFdlIGFzc3VtZSB0aGF0IGl0J3MgdGhlIGNhbGxiYWNrXG5cdFx0Y2FsbGJhY2sgPSBwYXJhbXM7XG5cdFx0cGFyYW1zID0gdW5kZWZpbmVkO1xuXG5cdC8vIE90aGVyd2lzZSwgYnVpbGQgYSBwYXJhbSBzdHJpbmdcblx0fSBlbHNlIGlmICggcGFyYW1zICYmIHR5cGVvZiBwYXJhbXMgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0dHlwZSA9IFwiUE9TVFwiO1xuXHR9XG5cblx0Ly8gSWYgd2UgaGF2ZSBlbGVtZW50cyB0byBtb2RpZnksIG1ha2UgdGhlIHJlcXVlc3Rcblx0aWYgKCBzZWxmLmxlbmd0aCA+IDAgKSB7XG5cdFx0alF1ZXJ5LmFqYXgoIHtcblx0XHRcdHVybDogdXJsLFxuXG5cdFx0XHQvLyBJZiBcInR5cGVcIiB2YXJpYWJsZSBpcyB1bmRlZmluZWQsIHRoZW4gXCJHRVRcIiBtZXRob2Qgd2lsbCBiZSB1c2VkLlxuXHRcdFx0Ly8gTWFrZSB2YWx1ZSBvZiB0aGlzIGZpZWxkIGV4cGxpY2l0IHNpbmNlXG5cdFx0XHQvLyB1c2VyIGNhbiBvdmVycmlkZSBpdCB0aHJvdWdoIGFqYXhTZXR1cCBtZXRob2Rcblx0XHRcdHR5cGU6IHR5cGUgfHwgXCJHRVRcIixcblx0XHRcdGRhdGFUeXBlOiBcImh0bWxcIixcblx0XHRcdGRhdGE6IHBhcmFtc1xuXHRcdH0gKS5kb25lKCBmdW5jdGlvbiggcmVzcG9uc2VUZXh0ICkge1xuXG5cdFx0XHQvLyBTYXZlIHJlc3BvbnNlIGZvciB1c2UgaW4gY29tcGxldGUgY2FsbGJhY2tcblx0XHRcdHJlc3BvbnNlID0gYXJndW1lbnRzO1xuXG5cdFx0XHRzZWxmLmh0bWwoIHNlbGVjdG9yID9cblxuXHRcdFx0XHQvLyBJZiBhIHNlbGVjdG9yIHdhcyBzcGVjaWZpZWQsIGxvY2F0ZSB0aGUgcmlnaHQgZWxlbWVudHMgaW4gYSBkdW1teSBkaXZcblx0XHRcdFx0Ly8gRXhjbHVkZSBzY3JpcHRzIHRvIGF2b2lkIElFICdQZXJtaXNzaW9uIERlbmllZCcgZXJyb3JzXG5cdFx0XHRcdGpRdWVyeSggXCI8ZGl2PlwiICkuYXBwZW5kKCBqUXVlcnkucGFyc2VIVE1MKCByZXNwb25zZVRleHQgKSApLmZpbmQoIHNlbGVjdG9yICkgOlxuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSB1c2UgdGhlIGZ1bGwgcmVzdWx0XG5cdFx0XHRcdHJlc3BvbnNlVGV4dCApO1xuXG5cdFx0Ly8gSWYgdGhlIHJlcXVlc3Qgc3VjY2VlZHMsIHRoaXMgZnVuY3Rpb24gZ2V0cyBcImRhdGFcIiwgXCJzdGF0dXNcIiwgXCJqcVhIUlwiXG5cdFx0Ly8gYnV0IHRoZXkgYXJlIGlnbm9yZWQgYmVjYXVzZSByZXNwb25zZSB3YXMgc2V0IGFib3ZlLlxuXHRcdC8vIElmIGl0IGZhaWxzLCB0aGlzIGZ1bmN0aW9uIGdldHMgXCJqcVhIUlwiLCBcInN0YXR1c1wiLCBcImVycm9yXCJcblx0XHR9ICkuYWx3YXlzKCBjYWxsYmFjayAmJiBmdW5jdGlvbigganFYSFIsIHN0YXR1cyApIHtcblx0XHRcdHNlbGYuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNhbGxiYWNrLmFwcGx5KCB0aGlzLCByZXNwb25zZSB8fCBbIGpxWEhSLnJlc3BvbnNlVGV4dCwgc3RhdHVzLCBqcVhIUiBdICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5cblxuXG5qUXVlcnkuZXhwci5wc2V1ZG9zLmFuaW1hdGVkID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdHJldHVybiBqUXVlcnkuZ3JlcCggalF1ZXJ5LnRpbWVycywgZnVuY3Rpb24oIGZuICkge1xuXHRcdHJldHVybiBlbGVtID09PSBmbi5lbGVtO1xuXHR9ICkubGVuZ3RoO1xufTtcblxuXG5cblxualF1ZXJ5Lm9mZnNldCA9IHtcblx0c2V0T2Zmc2V0OiBmdW5jdGlvbiggZWxlbSwgb3B0aW9ucywgaSApIHtcblx0XHR2YXIgY3VyUG9zaXRpb24sIGN1ckxlZnQsIGN1ckNTU1RvcCwgY3VyVG9wLCBjdXJPZmZzZXQsIGN1ckNTU0xlZnQsIGNhbGN1bGF0ZVBvc2l0aW9uLFxuXHRcdFx0cG9zaXRpb24gPSBqUXVlcnkuY3NzKCBlbGVtLCBcInBvc2l0aW9uXCIgKSxcblx0XHRcdGN1ckVsZW0gPSBqUXVlcnkoIGVsZW0gKSxcblx0XHRcdHByb3BzID0ge307XG5cblx0XHQvLyBTZXQgcG9zaXRpb24gZmlyc3QsIGluLWNhc2UgdG9wL2xlZnQgYXJlIHNldCBldmVuIG9uIHN0YXRpYyBlbGVtXG5cdFx0aWYgKCBwb3NpdGlvbiA9PT0gXCJzdGF0aWNcIiApIHtcblx0XHRcdGVsZW0uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cdFx0fVxuXG5cdFx0Y3VyT2Zmc2V0ID0gY3VyRWxlbS5vZmZzZXQoKTtcblx0XHRjdXJDU1NUb3AgPSBqUXVlcnkuY3NzKCBlbGVtLCBcInRvcFwiICk7XG5cdFx0Y3VyQ1NTTGVmdCA9IGpRdWVyeS5jc3MoIGVsZW0sIFwibGVmdFwiICk7XG5cdFx0Y2FsY3VsYXRlUG9zaXRpb24gPSAoIHBvc2l0aW9uID09PSBcImFic29sdXRlXCIgfHwgcG9zaXRpb24gPT09IFwiZml4ZWRcIiApICYmXG5cdFx0XHQoIGN1ckNTU1RvcCArIGN1ckNTU0xlZnQgKS5pbmRleE9mKCBcImF1dG9cIiApID4gLTE7XG5cblx0XHQvLyBOZWVkIHRvIGJlIGFibGUgdG8gY2FsY3VsYXRlIHBvc2l0aW9uIGlmIGVpdGhlclxuXHRcdC8vIHRvcCBvciBsZWZ0IGlzIGF1dG8gYW5kIHBvc2l0aW9uIGlzIGVpdGhlciBhYnNvbHV0ZSBvciBmaXhlZFxuXHRcdGlmICggY2FsY3VsYXRlUG9zaXRpb24gKSB7XG5cdFx0XHRjdXJQb3NpdGlvbiA9IGN1ckVsZW0ucG9zaXRpb24oKTtcblx0XHRcdGN1clRvcCA9IGN1clBvc2l0aW9uLnRvcDtcblx0XHRcdGN1ckxlZnQgPSBjdXJQb3NpdGlvbi5sZWZ0O1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1clRvcCA9IHBhcnNlRmxvYXQoIGN1ckNTU1RvcCApIHx8IDA7XG5cdFx0XHRjdXJMZWZ0ID0gcGFyc2VGbG9hdCggY3VyQ1NTTGVmdCApIHx8IDA7XG5cdFx0fVxuXG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCBvcHRpb25zICkgKSB7XG5cblx0XHRcdC8vIFVzZSBqUXVlcnkuZXh0ZW5kIGhlcmUgdG8gYWxsb3cgbW9kaWZpY2F0aW9uIG9mIGNvb3JkaW5hdGVzIGFyZ3VtZW50IChnaC0xODQ4KVxuXHRcdFx0b3B0aW9ucyA9IG9wdGlvbnMuY2FsbCggZWxlbSwgaSwgalF1ZXJ5LmV4dGVuZCgge30sIGN1ck9mZnNldCApICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBvcHRpb25zLnRvcCAhPSBudWxsICkge1xuXHRcdFx0cHJvcHMudG9wID0gKCBvcHRpb25zLnRvcCAtIGN1ck9mZnNldC50b3AgKSArIGN1clRvcDtcblx0XHR9XG5cdFx0aWYgKCBvcHRpb25zLmxlZnQgIT0gbnVsbCApIHtcblx0XHRcdHByb3BzLmxlZnQgPSAoIG9wdGlvbnMubGVmdCAtIGN1ck9mZnNldC5sZWZ0ICkgKyBjdXJMZWZ0O1xuXHRcdH1cblxuXHRcdGlmICggXCJ1c2luZ1wiIGluIG9wdGlvbnMgKSB7XG5cdFx0XHRvcHRpb25zLnVzaW5nLmNhbGwoIGVsZW0sIHByb3BzICk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VyRWxlbS5jc3MoIHByb3BzICk7XG5cdFx0fVxuXHR9XG59O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cblx0Ly8gb2Zmc2V0KCkgcmVsYXRlcyBhbiBlbGVtZW50J3MgYm9yZGVyIGJveCB0byB0aGUgZG9jdW1lbnQgb3JpZ2luXG5cdG9mZnNldDogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cblx0XHQvLyBQcmVzZXJ2ZSBjaGFpbmluZyBmb3Igc2V0dGVyXG5cdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnMgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdHRoaXMgOlxuXHRcdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRcdGpRdWVyeS5vZmZzZXQuc2V0T2Zmc2V0KCB0aGlzLCBvcHRpb25zLCBpICk7XG5cdFx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHR2YXIgcmVjdCwgd2luLFxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXTtcblxuXHRcdGlmICggIWVsZW0gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHplcm9zIGZvciBkaXNjb25uZWN0ZWQgYW5kIGhpZGRlbiAoZGlzcGxheTogbm9uZSkgZWxlbWVudHMgKGdoLTIzMTApXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdFx0Ly8gUnVubmluZyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gYVxuXHRcdC8vIGRpc2Nvbm5lY3RlZCBub2RlIGluIElFIHRocm93cyBhbiBlcnJvclxuXHRcdGlmICggIWVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAgfTtcblx0XHR9XG5cblx0XHQvLyBHZXQgZG9jdW1lbnQtcmVsYXRpdmUgcG9zaXRpb24gYnkgYWRkaW5nIHZpZXdwb3J0IHNjcm9sbCB0byB2aWV3cG9ydC1yZWxhdGl2ZSBnQkNSXG5cdFx0cmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0d2luID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0LFxuXHRcdFx0bGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0XG5cdFx0fTtcblx0fSxcblxuXHQvLyBwb3NpdGlvbigpIHJlbGF0ZXMgYW4gZWxlbWVudCdzIG1hcmdpbiBib3ggdG8gaXRzIG9mZnNldCBwYXJlbnQncyBwYWRkaW5nIGJveFxuXHQvLyBUaGlzIGNvcnJlc3BvbmRzIHRvIHRoZSBiZWhhdmlvciBvZiBDU1MgYWJzb2x1dGUgcG9zaXRpb25pbmdcblx0cG9zaXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggIXRoaXNbIDAgXSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgb2Zmc2V0UGFyZW50LCBvZmZzZXQsIGRvYyxcblx0XHRcdGVsZW0gPSB0aGlzWyAwIF0sXG5cdFx0XHRwYXJlbnRPZmZzZXQgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuXG5cdFx0Ly8gcG9zaXRpb246Zml4ZWQgZWxlbWVudHMgYXJlIG9mZnNldCBmcm9tIHRoZSB2aWV3cG9ydCwgd2hpY2ggaXRzZWxmIGFsd2F5cyBoYXMgemVybyBvZmZzZXRcblx0XHRpZiAoIGpRdWVyeS5jc3MoIGVsZW0sIFwicG9zaXRpb25cIiApID09PSBcImZpeGVkXCIgKSB7XG5cblx0XHRcdC8vIEFzc3VtZSBwb3NpdGlvbjpmaXhlZCBpbXBsaWVzIGF2YWlsYWJpbGl0eSBvZiBnZXRCb3VuZGluZ0NsaWVudFJlY3Rcblx0XHRcdG9mZnNldCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0b2Zmc2V0ID0gdGhpcy5vZmZzZXQoKTtcblxuXHRcdFx0Ly8gQWNjb3VudCBmb3IgdGhlICpyZWFsKiBvZmZzZXQgcGFyZW50LCB3aGljaCBjYW4gYmUgdGhlIGRvY3VtZW50IG9yIGl0cyByb290IGVsZW1lbnRcblx0XHRcdC8vIHdoZW4gYSBzdGF0aWNhbGx5IHBvc2l0aW9uZWQgZWxlbWVudCBpcyBpZGVudGlmaWVkXG5cdFx0XHRkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG5cdFx0XHRvZmZzZXRQYXJlbnQgPSBlbGVtLm9mZnNldFBhcmVudCB8fCBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXHRcdFx0d2hpbGUgKCBvZmZzZXRQYXJlbnQgJiZcblx0XHRcdFx0KCBvZmZzZXRQYXJlbnQgPT09IGRvYy5ib2R5IHx8IG9mZnNldFBhcmVudCA9PT0gZG9jLmRvY3VtZW50RWxlbWVudCApICYmXG5cdFx0XHRcdGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudCwgXCJwb3NpdGlvblwiICkgPT09IFwic3RhdGljXCIgKSB7XG5cblx0XHRcdFx0b2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50LnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQgIT09IGVsZW0gJiYgb2Zmc2V0UGFyZW50Lm5vZGVUeXBlID09PSAxICkge1xuXG5cdFx0XHRcdC8vIEluY29ycG9yYXRlIGJvcmRlcnMgaW50byBpdHMgb2Zmc2V0LCBzaW5jZSB0aGV5IGFyZSBvdXRzaWRlIGl0cyBjb250ZW50IG9yaWdpblxuXHRcdFx0XHRwYXJlbnRPZmZzZXQgPSBqUXVlcnkoIG9mZnNldFBhcmVudCApLm9mZnNldCgpO1xuXHRcdFx0XHRwYXJlbnRPZmZzZXQudG9wICs9IGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudCwgXCJib3JkZXJUb3BXaWR0aFwiLCB0cnVlICk7XG5cdFx0XHRcdHBhcmVudE9mZnNldC5sZWZ0ICs9IGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudCwgXCJib3JkZXJMZWZ0V2lkdGhcIiwgdHJ1ZSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFN1YnRyYWN0IHBhcmVudCBvZmZzZXRzIGFuZCBlbGVtZW50IG1hcmdpbnNcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9wOiBvZmZzZXQudG9wIC0gcGFyZW50T2Zmc2V0LnRvcCAtIGpRdWVyeS5jc3MoIGVsZW0sIFwibWFyZ2luVG9wXCIsIHRydWUgKSxcblx0XHRcdGxlZnQ6IG9mZnNldC5sZWZ0IC0gcGFyZW50T2Zmc2V0LmxlZnQgLSBqUXVlcnkuY3NzKCBlbGVtLCBcIm1hcmdpbkxlZnRcIiwgdHJ1ZSApXG5cdFx0fTtcblx0fSxcblxuXHQvLyBUaGlzIG1ldGhvZCB3aWxsIHJldHVybiBkb2N1bWVudEVsZW1lbnQgaW4gdGhlIGZvbGxvd2luZyBjYXNlczpcblx0Ly8gMSkgRm9yIHRoZSBlbGVtZW50IGluc2lkZSB0aGUgaWZyYW1lIHdpdGhvdXQgb2Zmc2V0UGFyZW50LCB0aGlzIG1ldGhvZCB3aWxsIHJldHVyblxuXHQvLyAgICBkb2N1bWVudEVsZW1lbnQgb2YgdGhlIHBhcmVudCB3aW5kb3dcblx0Ly8gMikgRm9yIHRoZSBoaWRkZW4gb3IgZGV0YWNoZWQgZWxlbWVudFxuXHQvLyAzKSBGb3IgYm9keSBvciBodG1sIGVsZW1lbnQsIGkuZS4gaW4gY2FzZSBvZiB0aGUgaHRtbCBub2RlIC0gaXQgd2lsbCByZXR1cm4gaXRzZWxmXG5cdC8vXG5cdC8vIGJ1dCB0aG9zZSBleGNlcHRpb25zIHdlcmUgbmV2ZXIgcHJlc2VudGVkIGFzIGEgcmVhbCBsaWZlIHVzZS1jYXNlc1xuXHQvLyBhbmQgbWlnaHQgYmUgY29uc2lkZXJlZCBhcyBtb3JlIHByZWZlcmFibGUgcmVzdWx0cy5cblx0Ly9cblx0Ly8gVGhpcyBsb2dpYywgaG93ZXZlciwgaXMgbm90IGd1YXJhbnRlZWQgYW5kIGNhbiBjaGFuZ2UgYXQgYW55IHBvaW50IGluIHRoZSBmdXR1cmVcblx0b2Zmc2V0UGFyZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG9mZnNldFBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50O1xuXG5cdFx0XHR3aGlsZSAoIG9mZnNldFBhcmVudCAmJiBqUXVlcnkuY3NzKCBvZmZzZXRQYXJlbnQsIFwicG9zaXRpb25cIiApID09PSBcInN0YXRpY1wiICkge1xuXHRcdFx0XHRvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGRvY3VtZW50RWxlbWVudDtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxuLy8gQ3JlYXRlIHNjcm9sbExlZnQgYW5kIHNjcm9sbFRvcCBtZXRob2RzXG5qUXVlcnkuZWFjaCggeyBzY3JvbGxMZWZ0OiBcInBhZ2VYT2Zmc2V0XCIsIHNjcm9sbFRvcDogXCJwYWdlWU9mZnNldFwiIH0sIGZ1bmN0aW9uKCBtZXRob2QsIHByb3AgKSB7XG5cdHZhciB0b3AgPSBcInBhZ2VZT2Zmc2V0XCIgPT09IHByb3A7XG5cblx0alF1ZXJ5LmZuWyBtZXRob2QgXSA9IGZ1bmN0aW9uKCB2YWwgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIGVsZW0sIG1ldGhvZCwgdmFsICkge1xuXG5cdFx0XHQvLyBDb2FsZXNjZSBkb2N1bWVudHMgYW5kIHdpbmRvd3Ncblx0XHRcdHZhciB3aW47XG5cdFx0XHRpZiAoIGlzV2luZG93KCBlbGVtICkgKSB7XG5cdFx0XHRcdHdpbiA9IGVsZW07XG5cdFx0XHR9IGVsc2UgaWYgKCBlbGVtLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHR3aW4gPSBlbGVtLmRlZmF1bHRWaWV3O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHZhbCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRyZXR1cm4gd2luID8gd2luWyBwcm9wIF0gOiBlbGVtWyBtZXRob2QgXTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB3aW4gKSB7XG5cdFx0XHRcdHdpbi5zY3JvbGxUbyhcblx0XHRcdFx0XHQhdG9wID8gdmFsIDogd2luLnBhZ2VYT2Zmc2V0LFxuXHRcdFx0XHRcdHRvcCA/IHZhbCA6IHdpbi5wYWdlWU9mZnNldFxuXHRcdFx0XHQpO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtWyBtZXRob2QgXSA9IHZhbDtcblx0XHRcdH1cblx0XHR9LCBtZXRob2QsIHZhbCwgYXJndW1lbnRzLmxlbmd0aCApO1xuXHR9O1xufSApO1xuXG4vLyBTdXBwb3J0OiBTYWZhcmkgPD03IC0gOS4xLCBDaHJvbWUgPD0zNyAtIDQ5XG4vLyBBZGQgdGhlIHRvcC9sZWZ0IGNzc0hvb2tzIHVzaW5nIGpRdWVyeS5mbi5wb3NpdGlvblxuLy8gV2Via2l0IGJ1ZzogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MDg0XG4vLyBCbGluayBidWc6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTU4OTM0N1xuLy8gZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIHBlcmNlbnQgd2hlbiBzcGVjaWZpZWQgZm9yIHRvcC9sZWZ0L2JvdHRvbS9yaWdodDtcbi8vIHJhdGhlciB0aGFuIG1ha2UgdGhlIGNzcyBtb2R1bGUgZGVwZW5kIG9uIHRoZSBvZmZzZXQgbW9kdWxlLCBqdXN0IGNoZWNrIGZvciBpdCBoZXJlXG5qUXVlcnkuZWFjaCggWyBcInRvcFwiLCBcImxlZnRcIiBdLCBmdW5jdGlvbiggX2ksIHByb3AgKSB7XG5cdGpRdWVyeS5jc3NIb29rc1sgcHJvcCBdID0gYWRkR2V0SG9va0lmKCBzdXBwb3J0LnBpeGVsUG9zaXRpb24sXG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xuXHRcdFx0aWYgKCBjb21wdXRlZCApIHtcblx0XHRcdFx0Y29tcHV0ZWQgPSBjdXJDU1MoIGVsZW0sIHByb3AgKTtcblxuXHRcdFx0XHQvLyBJZiBjdXJDU1MgcmV0dXJucyBwZXJjZW50YWdlLCBmYWxsYmFjayB0byBvZmZzZXRcblx0XHRcdFx0cmV0dXJuIHJudW1ub25weC50ZXN0KCBjb21wdXRlZCApID9cblx0XHRcdFx0XHRqUXVlcnkoIGVsZW0gKS5wb3NpdGlvbigpWyBwcm9wIF0gKyBcInB4XCIgOlxuXHRcdFx0XHRcdGNvbXB1dGVkO1xuXHRcdFx0fVxuXHRcdH1cblx0KTtcbn0gKTtcblxuXG4vLyBDcmVhdGUgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGgsIGhlaWdodCwgd2lkdGgsIG91dGVySGVpZ2h0IGFuZCBvdXRlcldpZHRoIG1ldGhvZHNcbmpRdWVyeS5lYWNoKCB7IEhlaWdodDogXCJoZWlnaHRcIiwgV2lkdGg6IFwid2lkdGhcIiB9LCBmdW5jdGlvbiggbmFtZSwgdHlwZSApIHtcblx0alF1ZXJ5LmVhY2goIHtcblx0XHRwYWRkaW5nOiBcImlubmVyXCIgKyBuYW1lLFxuXHRcdGNvbnRlbnQ6IHR5cGUsXG5cdFx0XCJcIjogXCJvdXRlclwiICsgbmFtZVxuXHR9LCBmdW5jdGlvbiggZGVmYXVsdEV4dHJhLCBmdW5jTmFtZSApIHtcblxuXHRcdC8vIE1hcmdpbiBpcyBvbmx5IGZvciBvdXRlckhlaWdodCwgb3V0ZXJXaWR0aFxuXHRcdGpRdWVyeS5mblsgZnVuY05hbWUgXSA9IGZ1bmN0aW9uKCBtYXJnaW4sIHZhbHVlICkge1xuXHRcdFx0dmFyIGNoYWluYWJsZSA9IGFyZ3VtZW50cy5sZW5ndGggJiYgKCBkZWZhdWx0RXh0cmEgfHwgdHlwZW9mIG1hcmdpbiAhPT0gXCJib29sZWFuXCIgKSxcblx0XHRcdFx0ZXh0cmEgPSBkZWZhdWx0RXh0cmEgfHwgKCBtYXJnaW4gPT09IHRydWUgfHwgdmFsdWUgPT09IHRydWUgPyBcIm1hcmdpblwiIDogXCJib3JkZXJcIiApO1xuXG5cdFx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgdHlwZSwgdmFsdWUgKSB7XG5cdFx0XHRcdHZhciBkb2M7XG5cblx0XHRcdFx0aWYgKCBpc1dpbmRvdyggZWxlbSApICkge1xuXG5cdFx0XHRcdFx0Ly8gJCggd2luZG93ICkub3V0ZXJXaWR0aC9IZWlnaHQgcmV0dXJuIHcvaCBpbmNsdWRpbmcgc2Nyb2xsYmFycyAoZ2gtMTcyOSlcblx0XHRcdFx0XHRyZXR1cm4gZnVuY05hbWUuaW5kZXhPZiggXCJvdXRlclwiICkgPT09IDAgP1xuXHRcdFx0XHRcdFx0ZWxlbVsgXCJpbm5lclwiICsgbmFtZSBdIDpcblx0XHRcdFx0XHRcdGVsZW0uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50WyBcImNsaWVudFwiICsgbmFtZSBdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gR2V0IGRvY3VtZW50IHdpZHRoIG9yIGhlaWdodFxuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdFx0ZG9jID0gZWxlbS5kb2N1bWVudEVsZW1lbnQ7XG5cblx0XHRcdFx0XHQvLyBFaXRoZXIgc2Nyb2xsW1dpZHRoL0hlaWdodF0gb3Igb2Zmc2V0W1dpZHRoL0hlaWdodF0gb3IgY2xpZW50W1dpZHRoL0hlaWdodF0sXG5cdFx0XHRcdFx0Ly8gd2hpY2hldmVyIGlzIGdyZWF0ZXN0XG5cdFx0XHRcdFx0cmV0dXJuIE1hdGgubWF4KFxuXHRcdFx0XHRcdFx0ZWxlbS5ib2R5WyBcInNjcm9sbFwiICsgbmFtZSBdLCBkb2NbIFwic2Nyb2xsXCIgKyBuYW1lIF0sXG5cdFx0XHRcdFx0XHRlbGVtLmJvZHlbIFwib2Zmc2V0XCIgKyBuYW1lIF0sIGRvY1sgXCJvZmZzZXRcIiArIG5hbWUgXSxcblx0XHRcdFx0XHRcdGRvY1sgXCJjbGllbnRcIiArIG5hbWUgXVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/XG5cblx0XHRcdFx0XHQvLyBHZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50LCByZXF1ZXN0aW5nIGJ1dCBub3QgZm9yY2luZyBwYXJzZUZsb2F0XG5cdFx0XHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgdHlwZSwgZXh0cmEgKSA6XG5cblx0XHRcdFx0XHQvLyBTZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50XG5cdFx0XHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCB0eXBlLCB2YWx1ZSwgZXh0cmEgKTtcblx0XHRcdH0sIHR5cGUsIGNoYWluYWJsZSA/IG1hcmdpbiA6IHVuZGVmaW5lZCwgY2hhaW5hYmxlICk7XG5cdFx0fTtcblx0fSApO1xufSApO1xuXG5cbmpRdWVyeS5lYWNoKCBbXG5cdFwiYWpheFN0YXJ0XCIsXG5cdFwiYWpheFN0b3BcIixcblx0XCJhamF4Q29tcGxldGVcIixcblx0XCJhamF4RXJyb3JcIixcblx0XCJhamF4U3VjY2Vzc1wiLFxuXHRcImFqYXhTZW5kXCJcbl0sIGZ1bmN0aW9uKCBfaSwgdHlwZSApIHtcblx0alF1ZXJ5LmZuWyB0eXBlIF0gPSBmdW5jdGlvbiggZm4gKSB7XG5cdFx0cmV0dXJuIHRoaXMub24oIHR5cGUsIGZuICk7XG5cdH07XG59ICk7XG5cblxuXG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblxuXHRiaW5kOiBmdW5jdGlvbiggdHlwZXMsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlcywgbnVsbCwgZGF0YSwgZm4gKTtcblx0fSxcblx0dW5iaW5kOiBmdW5jdGlvbiggdHlwZXMsIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9mZiggdHlwZXMsIG51bGwsIGZuICk7XG5cdH0sXG5cblx0ZGVsZWdhdGU6IGZ1bmN0aW9uKCBzZWxlY3RvciwgdHlwZXMsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICk7XG5cdH0sXG5cdHVuZGVsZWdhdGU6IGZ1bmN0aW9uKCBzZWxlY3RvciwgdHlwZXMsIGZuICkge1xuXG5cdFx0Ly8gKCBuYW1lc3BhY2UgKSBvciAoIHNlbGVjdG9yLCB0eXBlcyBbLCBmbl0gKVxuXHRcdHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID9cblx0XHRcdHRoaXMub2ZmKCBzZWxlY3RvciwgXCIqKlwiICkgOlxuXHRcdFx0dGhpcy5vZmYoIHR5cGVzLCBzZWxlY3RvciB8fCBcIioqXCIsIGZuICk7XG5cdH0sXG5cblx0aG92ZXI6IGZ1bmN0aW9uKCBmbk92ZXIsIGZuT3V0ICkge1xuXHRcdHJldHVybiB0aGlzXG5cdFx0XHQub24oIFwibW91c2VlbnRlclwiLCBmbk92ZXIgKVxuXHRcdFx0Lm9uKCBcIm1vdXNlbGVhdmVcIiwgZm5PdXQgfHwgZm5PdmVyICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmVhY2goXG5cdCggXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgcmVzaXplIHNjcm9sbCBjbGljayBkYmxjbGljayBcIiArXG5cdFwibW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgXCIgK1xuXHRcImNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIiApLnNwbGl0KCBcIiBcIiApLFxuXHRmdW5jdGlvbiggX2ksIG5hbWUgKSB7XG5cblx0XHQvLyBIYW5kbGUgZXZlbnQgYmluZGluZ1xuXHRcdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIGRhdGEsIGZuICkge1xuXHRcdFx0cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAwID9cblx0XHRcdFx0dGhpcy5vbiggbmFtZSwgbnVsbCwgZGF0YSwgZm4gKSA6XG5cdFx0XHRcdHRoaXMudHJpZ2dlciggbmFtZSApO1xuXHRcdH07XG5cdH1cbik7XG5cblxuXG5cbi8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seVxuLy8gTWFrZSBzdXJlIHdlIHRyaW0gQk9NIGFuZCBOQlNQXG4vLyBSZXF1aXJlIHRoYXQgdGhlIFwid2hpdGVzcGFjZSBydW5cIiBzdGFydHMgZnJvbSBhIG5vbi13aGl0ZXNwYWNlXG4vLyB0byBhdm9pZCBPKE5eMikgYmVoYXZpb3Igd2hlbiB0aGUgZW5naW5lIHdvdWxkIHRyeSBtYXRjaGluZyBcIlxccyskXCIgYXQgZWFjaCBzcGFjZSBwb3NpdGlvbi5cbnZhciBydHJpbSA9IC9eW1xcc1xcdUZFRkZcXHhBMF0rfChbXlxcc1xcdUZFRkZcXHhBMF0pW1xcc1xcdUZFRkZcXHhBMF0rJC9nO1xuXG4vLyBCaW5kIGEgZnVuY3Rpb24gdG8gYSBjb250ZXh0LCBvcHRpb25hbGx5IHBhcnRpYWxseSBhcHBseWluZyBhbnlcbi8vIGFyZ3VtZW50cy5cbi8vIGpRdWVyeS5wcm94eSBpcyBkZXByZWNhdGVkIHRvIHByb21vdGUgc3RhbmRhcmRzIChzcGVjaWZpY2FsbHkgRnVuY3Rpb24jYmluZClcbi8vIEhvd2V2ZXIsIGl0IGlzIG5vdCBzbGF0ZWQgZm9yIHJlbW92YWwgYW55IHRpbWUgc29vblxualF1ZXJ5LnByb3h5ID0gZnVuY3Rpb24oIGZuLCBjb250ZXh0ICkge1xuXHR2YXIgdG1wLCBhcmdzLCBwcm94eTtcblxuXHRpZiAoIHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiICkge1xuXHRcdHRtcCA9IGZuWyBjb250ZXh0IF07XG5cdFx0Y29udGV4dCA9IGZuO1xuXHRcdGZuID0gdG1wO1xuXHR9XG5cblx0Ly8gUXVpY2sgY2hlY2sgdG8gZGV0ZXJtaW5lIGlmIHRhcmdldCBpcyBjYWxsYWJsZSwgaW4gdGhlIHNwZWNcblx0Ly8gdGhpcyB0aHJvd3MgYSBUeXBlRXJyb3IsIGJ1dCB3ZSB3aWxsIGp1c3QgcmV0dXJuIHVuZGVmaW5lZC5cblx0aWYgKCAhaXNGdW5jdGlvbiggZm4gKSApIHtcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG5cblx0Ly8gU2ltdWxhdGVkIGJpbmRcblx0YXJncyA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMiApO1xuXHRwcm94eSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBmbi5hcHBseSggY29udGV4dCB8fCB0aGlzLCBhcmdzLmNvbmNhdCggc2xpY2UuY2FsbCggYXJndW1lbnRzICkgKSApO1xuXHR9O1xuXG5cdC8vIFNldCB0aGUgZ3VpZCBvZiB1bmlxdWUgaGFuZGxlciB0byB0aGUgc2FtZSBvZiBvcmlnaW5hbCBoYW5kbGVyLCBzbyBpdCBjYW4gYmUgcmVtb3ZlZFxuXHRwcm94eS5ndWlkID0gZm4uZ3VpZCA9IGZuLmd1aWQgfHwgalF1ZXJ5Lmd1aWQrKztcblxuXHRyZXR1cm4gcHJveHk7XG59O1xuXG5qUXVlcnkuaG9sZFJlYWR5ID0gZnVuY3Rpb24oIGhvbGQgKSB7XG5cdGlmICggaG9sZCApIHtcblx0XHRqUXVlcnkucmVhZHlXYWl0Kys7XG5cdH0gZWxzZSB7XG5cdFx0alF1ZXJ5LnJlYWR5KCB0cnVlICk7XG5cdH1cbn07XG5qUXVlcnkuaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5qUXVlcnkucGFyc2VKU09OID0gSlNPTi5wYXJzZTtcbmpRdWVyeS5ub2RlTmFtZSA9IG5vZGVOYW1lO1xualF1ZXJ5LmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xualF1ZXJ5LmlzV2luZG93ID0gaXNXaW5kb3c7XG5qUXVlcnkuY2FtZWxDYXNlID0gY2FtZWxDYXNlO1xualF1ZXJ5LnR5cGUgPSB0b1R5cGU7XG5cbmpRdWVyeS5ub3cgPSBEYXRlLm5vdztcblxualF1ZXJ5LmlzTnVtZXJpYyA9IGZ1bmN0aW9uKCBvYmogKSB7XG5cblx0Ly8gQXMgb2YgalF1ZXJ5IDMuMCwgaXNOdW1lcmljIGlzIGxpbWl0ZWQgdG9cblx0Ly8gc3RyaW5ncyBhbmQgbnVtYmVycyAocHJpbWl0aXZlcyBvciBvYmplY3RzKVxuXHQvLyB0aGF0IGNhbiBiZSBjb2VyY2VkIHRvIGZpbml0ZSBudW1iZXJzIChnaC0yNjYyKVxuXHR2YXIgdHlwZSA9IGpRdWVyeS50eXBlKCBvYmogKTtcblx0cmV0dXJuICggdHlwZSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlID09PSBcInN0cmluZ1wiICkgJiZcblxuXHRcdC8vIHBhcnNlRmxvYXQgTmFOcyBudW1lcmljLWNhc3QgZmFsc2UgcG9zaXRpdmVzIChcIlwiKVxuXHRcdC8vIC4uLmJ1dCBtaXNpbnRlcnByZXRzIGxlYWRpbmctbnVtYmVyIHN0cmluZ3MsIHBhcnRpY3VsYXJseSBoZXggbGl0ZXJhbHMgKFwiMHguLi5cIilcblx0XHQvLyBzdWJ0cmFjdGlvbiBmb3JjZXMgaW5maW5pdGllcyB0byBOYU5cblx0XHQhaXNOYU4oIG9iaiAtIHBhcnNlRmxvYXQoIG9iaiApICk7XG59O1xuXG5qUXVlcnkudHJpbSA9IGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRyZXR1cm4gdGV4dCA9PSBudWxsID9cblx0XHRcIlwiIDpcblx0XHQoIHRleHQgKyBcIlwiICkucmVwbGFjZSggcnRyaW0sIFwiJDFcIiApO1xufTtcblxuXG5cbi8vIFJlZ2lzdGVyIGFzIGEgbmFtZWQgQU1EIG1vZHVsZSwgc2luY2UgalF1ZXJ5IGNhbiBiZSBjb25jYXRlbmF0ZWQgd2l0aCBvdGhlclxuLy8gZmlsZXMgdGhhdCBtYXkgdXNlIGRlZmluZSwgYnV0IG5vdCB2aWEgYSBwcm9wZXIgY29uY2F0ZW5hdGlvbiBzY3JpcHQgdGhhdFxuLy8gdW5kZXJzdGFuZHMgYW5vbnltb3VzIEFNRCBtb2R1bGVzLiBBIG5hbWVkIEFNRCBpcyBzYWZlc3QgYW5kIG1vc3Qgcm9idXN0XG4vLyB3YXkgdG8gcmVnaXN0ZXIuIExvd2VyY2FzZSBqcXVlcnkgaXMgdXNlZCBiZWNhdXNlIEFNRCBtb2R1bGUgbmFtZXMgYXJlXG4vLyBkZXJpdmVkIGZyb20gZmlsZSBuYW1lcywgYW5kIGpRdWVyeSBpcyBub3JtYWxseSBkZWxpdmVyZWQgaW4gYSBsb3dlcmNhc2Vcbi8vIGZpbGUgbmFtZS4gRG8gdGhpcyBhZnRlciBjcmVhdGluZyB0aGUgZ2xvYmFsIHNvIHRoYXQgaWYgYW4gQU1EIG1vZHVsZSB3YW50c1xuLy8gdG8gY2FsbCBub0NvbmZsaWN0IHRvIGhpZGUgdGhpcyB2ZXJzaW9uIG9mIGpRdWVyeSwgaXQgd2lsbCB3b3JrLlxuXG4vLyBOb3RlIHRoYXQgZm9yIG1heGltdW0gcG9ydGFiaWxpdHksIGxpYnJhcmllcyB0aGF0IGFyZSBub3QgalF1ZXJ5IHNob3VsZFxuLy8gZGVjbGFyZSB0aGVtc2VsdmVzIGFzIGFub255bW91cyBtb2R1bGVzLCBhbmQgYXZvaWQgc2V0dGluZyBhIGdsb2JhbCBpZiBhblxuLy8gQU1EIGxvYWRlciBpcyBwcmVzZW50LiBqUXVlcnkgaXMgYSBzcGVjaWFsIGNhc2UuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcmJ1cmtlL3JlcXVpcmVqcy93aWtpL1VwZGF0aW5nLWV4aXN0aW5nLWxpYnJhcmllcyN3aWtpLWFub25cblxuaWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblx0ZGVmaW5lKCBcImpxdWVyeVwiLCBbXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGpRdWVyeTtcblx0fSApO1xufVxuXG5cblxuXG52YXJcblxuXHQvLyBNYXAgb3ZlciBqUXVlcnkgaW4gY2FzZSBvZiBvdmVyd3JpdGVcblx0X2pRdWVyeSA9IHdpbmRvdy5qUXVlcnksXG5cblx0Ly8gTWFwIG92ZXIgdGhlICQgaW4gY2FzZSBvZiBvdmVyd3JpdGVcblx0XyQgPSB3aW5kb3cuJDtcblxualF1ZXJ5Lm5vQ29uZmxpY3QgPSBmdW5jdGlvbiggZGVlcCApIHtcblx0aWYgKCB3aW5kb3cuJCA9PT0galF1ZXJ5ICkge1xuXHRcdHdpbmRvdy4kID0gXyQ7XG5cdH1cblxuXHRpZiAoIGRlZXAgJiYgd2luZG93LmpRdWVyeSA9PT0galF1ZXJ5ICkge1xuXHRcdHdpbmRvdy5qUXVlcnkgPSBfalF1ZXJ5O1xuXHR9XG5cblx0cmV0dXJuIGpRdWVyeTtcbn07XG5cbi8vIEV4cG9zZSBqUXVlcnkgYW5kICQgaWRlbnRpZmllcnMsIGV2ZW4gaW4gQU1EXG4vLyAodHJhYy03MTAyI2NvbW1lbnQ6MTAsIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L3B1bGwvNTU3KVxuLy8gYW5kIENvbW1vbkpTIGZvciBicm93c2VyIGVtdWxhdG9ycyAodHJhYy0xMzU2NilcbmlmICggdHlwZW9mIG5vR2xvYmFsID09PSBcInVuZGVmaW5lZFwiICkge1xuXHR3aW5kb3cualF1ZXJ5ID0gd2luZG93LiQgPSBqUXVlcnk7XG59XG5cblxuXG5cbnJldHVybiBqUXVlcnk7XG59ICk7XG4iLCAiIWZ1bmN0aW9uKGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCJdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWUoalF1ZXJ5fHxyZXF1aXJlKFwianF1ZXJ5XCIpKTplKGpRdWVyeSl9KGZ1bmN0aW9uKHllKXt5ZS5mbi5qU2Nyb2xsUGFuZT1mdW5jdGlvbihvKXtmdW5jdGlvbiBpKGosZSl7dmFyIHcseSxiLGsseCxULFMsQyxELFAsSCxBLEIsVyx6LFksTSxYLEUsdCxJLFIsTCxGLHEsTyxHLE4sVixLLFEsVSwkLEosWj10aGlzLHI9ITAsbD0hMCxhPSExLGM9ITEsbz1qLmNsb25lKCExLCExKS5lbXB0eSgpLF89ITEsZWU9eWUuZm4ubXdoZWVsSW50ZW50P1wibXdoZWVsSW50ZW50LmpzcFwiOlwibW91c2V3aGVlbC5qc3BcIix0ZT1mdW5jdGlvbigpezA8dy5yZXNpemVTZW5zb3JEZWxheT9zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b2Uodyl9LHcucmVzaXplU2Vuc29yRGVsYXkpOm9lKHcpfTtmdW5jdGlvbiBvZShlKXt2YXIgdCxvLGkscyxuLHIsbCxhLGMscCx1LGQsZixoLGcsdj0hMSxtPSExO2lmKHc9ZSx2b2lkKG89dD0wKT09PXkpcz1qLnNjcm9sbFRvcCgpLG49ai5zY3JvbGxMZWZ0KCksai5jc3Moe292ZXJmbG93OlwiaGlkZGVuXCIscGFkZGluZzpcIjBweFwifSksYj1qLmlubmVyV2lkdGgoKSskLGs9ai5pbm5lckhlaWdodCgpLGoud2lkdGgoYikseT15ZSgnPGRpdiBjbGFzcz1cInVpLXNjcm9sbHBhbmVsLWNvbnRlbnRcIj48L2Rpdj4nKS5jc3MoXCJwYWRkaW5nXCIsVSkuYXBwZW5kKGouY2hpbGRyZW4oKSkseD15ZSgnPGRpdiBjbGFzcz1cInVpLXNjcm9sbHBhbmVsLWNvbnRhaW5lclwiPjwvZGl2PicpLmNzcyh7d2lkdGg6YitcInB4XCIsaGVpZ2h0OmsrXCJweFwifSkuYXBwZW5kKHkpLmFwcGVuZFRvKGopO2Vsc2V7aWYoai5jc3MoXCJ3aWR0aFwiLFwiXCIpLHguY3NzKHt3aWR0aDpcImF1dG9cIixoZWlnaHQ6XCJhdXRvXCJ9KSx5LmNzcyhcInBvc2l0aW9uXCIsXCJzdGF0aWNcIikscj1qLmlubmVyV2lkdGgoKSskLGw9ai5pbm5lckhlaWdodCgpLHkuY3NzKFwicG9zaXRpb25cIixcImFic29sdXRlXCIpLHY9dy5zdGlja1RvQm90dG9tJiYoYz1TLWssMSE9dy5tYWludGFpblBvc2l0aW9ufHwyMDw9YyYmYy1qZSgpPDEwKSxtPXcuc3RpY2tUb1JpZ2h0JiYoYT1ULWIsMSE9dy5tYWludGFpblBvc2l0aW9ufHwyMDw9YSYmYS1tZSgpPDEwKSxpPXIhPT1ifHxsIT09ayxiPXIsaz1sLHguY3NzKHt3aWR0aDpiK1wicHhcIixoZWlnaHQ6aytcInB4XCJ9KSwhaSYmSj09VCYmeS5vdXRlckhlaWdodCgpPT1TKXJldHVybiB2b2lkIGoud2lkdGgoYik7Sj1ULHkuY3NzKFwid2lkdGhcIixcIlwiKSxqLndpZHRoKGIpLHguZmluZChcIj4udWktc2Nyb2xscGFuZWwtdmJhciw+LnVpLXNjcm9sbHBhbmVsLWhiYXJcIikucmVtb3ZlKCkuZW5kKCl9eS5jc3MoXCJvdmVyZmxvd1wiLFwiYXV0b1wiKSxUPWUuY29udGVudFdpZHRoP2UuY29udGVudFdpZHRoOnlbMF0uc2Nyb2xsV2lkdGgsUz15WzBdLnNjcm9sbEhlaWdodCx5LmNzcyhcIm92ZXJmbG93XCIsXCJcIiksQz1UL2IsUD0xPChEPVMvayl8fHcuYWx3YXlzU2hvd1ZTY3JvbGwsKEg9MTxDfHx3LmFsd2F5c1Nob3dIU2Nyb2xsKXx8UD8oai5hZGRDbGFzcyhcImpzcFNjcm9sbGFibGVcIiksdy5tYWludGFpblBvc2l0aW9uJiYoV3x8TSkmJih0PW1lKCksbz1qZSgpKSxQJiYoeC5hcHBlbmQoeWUoJzxkaXYgY2xhc3M9XCJ1aS1zY3JvbGxwYW5lbC12YmFyXCI+PC9kaXY+JykuYXBwZW5kKHllKCc8ZGl2IGNsYXNzPVwidWktc2Nyb2xscGFuZWwtY2FwIHVpLXNjcm9sbHBhbmVsLWNhcHRvcFwiPjwvZGl2PicpLHllKCc8ZGl2IGNsYXNzPVwidWktc2Nyb2xscGFuZWwtdHJhY2sgdWktd2lkZ2V0LWhlYWRlclwiPjwvZGl2PicpLmFwcGVuZCh5ZSgnPGRpdiBjbGFzcz1cInVpLXNjcm9sbHBhbmVsLWRyYWcgdWktc3RhdGUtaGlnaGxpZ2h0XCI+PC9kaXY+JykuYXBwZW5kKHllKCc8ZGl2IGNsYXNzPVwidWktc2Nyb2xscGFuZWwtZHJhZ3RvcFwiPjwvZGl2PicpLHllKCc8ZGl2IGNsYXNzPVwidWktc2Nyb2xscGFuZWwtZHJhZ2JvdHRvbVwiPjwvZGl2PicpKSkseWUoJzxkaXYgY2xhc3M9XCJ1aS1zY3JvbGxwYW5lbC1jYXAgdWktc2Nyb2xscGFuZWwtY2FwYm90dG9tXCI+PC9kaXY+JykpKSxYPXguZmluZChcIj4udWktc2Nyb2xscGFuZWwtdmJhclwiKSxFPVguZmluZChcIj4udWktc2Nyb2xscGFuZWwtdHJhY2tcIiksQT1FLmZpbmQoXCI+LnVpLXNjcm9sbHBhbmVsLWRyYWdcIiksdy5zaG93QXJyb3dzJiYoTD15ZSgnPGEgY2xhc3M9XCJqc3BBcnJvdyBqc3BBcnJvd1VwXCI+PC9hPicpLm9uKFwibW91c2Vkb3duLmpzcFwiLGxlKDAsLTEpKS5vbihcImNsaWNrLmpzcFwiLHdlKSxGPXllKCc8YSBjbGFzcz1cImpzcEFycm93IGpzcEFycm93RG93blwiPjwvYT4nKS5vbihcIm1vdXNlZG93bi5qc3BcIixsZSgwLDEpKS5vbihcImNsaWNrLmpzcFwiLHdlKSx3LmFycm93U2Nyb2xsT25Ib3ZlciYmKEwub24oXCJtb3VzZW92ZXIuanNwXCIsbGUoMCwtMSxMKSksRi5vbihcIm1vdXNlb3Zlci5qc3BcIixsZSgwLDEsRikpKSxyZShFLHcudmVydGljYWxBcnJvd1Bvc2l0aW9ucyxMLEYpKSxJPWsseC5maW5kKFwiPi51aS1zY3JvbGxwYW5lbC12YmFyPi51aS1zY3JvbGxwYW5lbC1jYXA6dmlzaWJsZSw+LnVpLXNjcm9sbHBhbmVsLXZiYXI+LmpzcEFycm93XCIpLmVhY2goZnVuY3Rpb24oKXtJLT15ZSh0aGlzKS5vdXRlckhlaWdodCgpfSksQS5vbihcIm1vdXNlZW50ZXJcIixmdW5jdGlvbigpe0EuYWRkQ2xhc3MoXCJqc3BIb3ZlclwiKX0pLm9uKFwibW91c2VsZWF2ZVwiLGZ1bmN0aW9uKCl7QS5yZW1vdmVDbGFzcyhcImpzcEhvdmVyXCIpfSkub24oXCJtb3VzZWRvd24uanNwXCIsZnVuY3Rpb24oZSl7eWUoXCJodG1sXCIpLm9uKFwiZHJhZ3N0YXJ0LmpzcCBzZWxlY3RzdGFydC5qc3BcIix3ZSksQS5hZGRDbGFzcyhcImpzcEFjdGl2ZVwiKTt2YXIgdD1lLnBhZ2VZLUEucG9zaXRpb24oKS50b3A7cmV0dXJuIHllKFwiaHRtbFwiKS5vbihcIm1vdXNlbW92ZS5qc3BcIixmdW5jdGlvbihlKXtwZShlLnBhZ2VZLXQsITEpfSkub24oXCJtb3VzZXVwLmpzcCBtb3VzZWxlYXZlLmpzcFwiLGNlKSwhMX0pLHNlKCkpLEgmJih4LmFwcGVuZCh5ZSgnPGRpdiBjbGFzcz1cInVpLXNjcm9sbHBhbmVsLWhiYXJcIj48L2Rpdj4nKS5hcHBlbmQoeWUoJzxkaXYgY2xhc3M9XCJ1aS1zY3JvbGxwYW5lbC1jYXAgdWktc2Nyb2xscGFuZWwtY2FwbGVmdFwiPjwvZGl2PicpLHllKCc8ZGl2IGNsYXNzPVwidWktc2Nyb2xscGFuZWwtdHJhY2sgdWktd2lkZ2V0LWhlYWRlclwiPjwvZGl2PicpLmFwcGVuZCh5ZSgnPGRpdiBjbGFzcz1cInVpLXNjcm9sbHBhbmVsLWRyYWcgdWktc3RhdGUtaGlnaGxpZ2h0XCI+PC9kaXY+JykuYXBwZW5kKHllKCc8ZGl2IGNsYXNzPVwidWktc2Nyb2xscGFuZWwtZHJhZ2xlZnRcIj48L2Rpdj4nKSx5ZSgnPGRpdiBjbGFzcz1cInVpLXNjcm9sbHBhbmVsLWRyYWdyaWdodFwiPjwvZGl2PicpKSkseWUoJzxkaXYgY2xhc3M9XCJ1aS1zY3JvbGxwYW5lbC1jYXAgdWktc2Nyb2xscGFuZWwtY2FwcmlnaHRcIj48L2Rpdj4nKSkpLHE9eC5maW5kKFwiPi51aS1zY3JvbGxwYW5lbC1oYmFyXCIpLE89cS5maW5kKFwiPi51aS1zY3JvbGxwYW5lbC10cmFja1wiKSx6PU8uZmluZChcIj4udWktc2Nyb2xscGFuZWwtZHJhZ1wiKSx3LnNob3dBcnJvd3MmJihWPXllKCc8YSBjbGFzcz1cImpzcEFycm93IGpzcEFycm93TGVmdFwiPjwvYT4nKS5vbihcIm1vdXNlZG93bi5qc3BcIixsZSgtMSwwKSkub24oXCJjbGljay5qc3BcIix3ZSksSz15ZSgnPGEgY2xhc3M9XCJqc3BBcnJvdyBqc3BBcnJvd1JpZ2h0XCI+PC9hPicpLm9uKFwibW91c2Vkb3duLmpzcFwiLGxlKDEsMCkpLm9uKFwiY2xpY2suanNwXCIsd2UpLHcuYXJyb3dTY3JvbGxPbkhvdmVyJiYoVi5vbihcIm1vdXNlb3Zlci5qc3BcIixsZSgtMSwwLFYpKSxLLm9uKFwibW91c2VvdmVyLmpzcFwiLGxlKDEsMCxLKSkpLHJlKE8sdy5ob3Jpem9udGFsQXJyb3dQb3NpdGlvbnMsVixLKSksei5vbihcIm1vdXNlZW50ZXJcIixmdW5jdGlvbigpe3ouYWRkQ2xhc3MoXCJqc3BIb3ZlclwiKX0pLm9uKFwibW91c2VsZWF2ZVwiLGZ1bmN0aW9uKCl7ei5yZW1vdmVDbGFzcyhcImpzcEhvdmVyXCIpfSkub24oXCJtb3VzZWRvd24uanNwXCIsZnVuY3Rpb24oZSl7eWUoXCJodG1sXCIpLm9uKFwiZHJhZ3N0YXJ0LmpzcCBzZWxlY3RzdGFydC5qc3BcIix3ZSksei5hZGRDbGFzcyhcImpzcEFjdGl2ZVwiKTt2YXIgdD1lLnBhZ2VYLXoucG9zaXRpb24oKS5sZWZ0O3JldHVybiB5ZShcImh0bWxcIikub24oXCJtb3VzZW1vdmUuanNwXCIsZnVuY3Rpb24oZSl7ZGUoZS5wYWdlWC10LCExKX0pLm9uKFwibW91c2V1cC5qc3AgbW91c2VsZWF2ZS5qc3BcIixjZSksITF9KSxHPXguaW5uZXJXaWR0aCgpLG5lKCkpLGZ1bmN0aW9uKCl7e3ZhciBlLHQ7SCYmUCYmKGU9Ty5vdXRlckhlaWdodCgpLHQ9RS5vdXRlcldpZHRoKCksSS09ZSx5ZShxKS5maW5kKFwiPi51aS1zY3JvbGxwYW5lbC1jYXA6dmlzaWJsZSw+LmpzcEFycm93XCIpLmVhY2goZnVuY3Rpb24oKXtHKz15ZSh0aGlzKS5vdXRlcldpZHRoKCl9KSxHLT10LGstPXQsYi09ZSxPLnBhcmVudCgpLmFwcGVuZCh5ZSgnPGRpdiBjbGFzcz1cInVpLXNjcm9sbHBhbmVsLWNvcm5lciB1aS13aWRnZXQtaGVhZGVyXCI+PC9kaXY+JykuY3NzKFwid2lkdGhcIixlK1wicHhcIikpLHNlKCksbmUoKSl9SCYmeS53aWR0aCh4Lm91dGVyV2lkdGgoKS0kK1wicHhcIik7Uz15Lm91dGVySGVpZ2h0KCksRD1TL2ssSCYmKChOPU1hdGguY2VpbCgxL0MqRykpPncuaG9yaXpvbnRhbERyYWdNYXhXaWR0aD9OPXcuaG9yaXpvbnRhbERyYWdNYXhXaWR0aDpOPHcuaG9yaXpvbnRhbERyYWdNaW5XaWR0aCYmKE49dy5ob3Jpem9udGFsRHJhZ01pbldpZHRoKSx6LmNzcyhcIndpZHRoXCIsTitcInB4XCIpLFk9Ry1OLGZlKE0pKTtQJiYoKFI9TWF0aC5jZWlsKDEvRCpJKSk+dy52ZXJ0aWNhbERyYWdNYXhIZWlnaHQ/Uj13LnZlcnRpY2FsRHJhZ01heEhlaWdodDpSPHcudmVydGljYWxEcmFnTWluSGVpZ2h0JiYoUj13LnZlcnRpY2FsRHJhZ01pbkhlaWdodCksQS5jc3MoXCJoZWlnaHRcIixSK1wicHhcIiksQj1JLVIsdWUoVykpfSgpLCh3LnN0aWNrVG9Cb3R0b218fHcuc3RpY2tUb1JpZ2h0KSYmKGdlKG0/VC1iOnQsITEpLGhlKHY/Uy1rOm8sITEpKSx5LmZpbmQoXCI6aW5wdXQsYVwiKS5vZmYoXCJmb2N1cy5qc3BcIikub24oXCJmb2N1cy5qc3BcIixmdW5jdGlvbihlKXt2ZShlLnRhcmdldCwhMSl9KSx4Lm9mZihlZSkub24oZWUsZnVuY3Rpb24oZSx0LG8saSl7dmFyIHM9TT1NfHwwLG49Vz1XfHwwLHI9ZS5kZWx0YUZhY3Rvcnx8dy5tb3VzZVdoZWVsU3BlZWQ7cmV0dXJuIFouc2Nyb2xsQnkobypyLC1pKnIsITEpLHM9PU0mJm49PVd9KSxnPSExLHgub2ZmKFwidG91Y2hzdGFydC5qc3AgdG91Y2htb3ZlLmpzcCB0b3VjaGVuZC5qc3AgY2xpY2suanNwLXRvdWNoY2xpY2tcIikub24oXCJ0b3VjaHN0YXJ0LmpzcFwiLGZ1bmN0aW9uKGUpe3ZhciB0PWUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO3A9bWUoKSx1PWplKCksZD10LnBhZ2VYLGY9dC5wYWdlWSxnPSEoaD0hMSl9KS5vbihcInRvdWNobW92ZS5qc3BcIixmdW5jdGlvbihlKXtpZihnKXt2YXIgdD1lLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXSxvPU0saT1XO3JldHVybiBaLnNjcm9sbFRvKHArZC10LnBhZ2VYLHUrZi10LnBhZ2VZKSxoPWh8fDU8TWF0aC5hYnMoZC10LnBhZ2VYKXx8NTxNYXRoLmFicyhmLXQucGFnZVkpLG89PU0mJmk9PVd9fSkub24oXCJ0b3VjaGVuZC5qc3BcIixmdW5jdGlvbihlKXtnPSExfSkub24oXCJjbGljay5qc3AtdG91Y2hjbGlja1wiLGZ1bmN0aW9uKGUpe2lmKGgpcmV0dXJuIGg9ITF9KSx3LmVuYWJsZUtleWJvYXJkTmF2aWdhdGlvbiYmZnVuY3Rpb24oKXt2YXIgaSxzLG49W107SCYmbi5wdXNoKHFbMF0pO1AmJm4ucHVzaChYWzBdKTt5Lm9uKFwiZm9jdXMuanNwXCIsZnVuY3Rpb24oKXtqLmZvY3VzKCl9KSxqLmF0dHIoXCJ0YWJpbmRleFwiLDApLm9mZihcImtleWRvd24uanNwIGtleXByZXNzLmpzcFwiKS5vbihcImtleWRvd24uanNwXCIsZnVuY3Rpb24oZSl7aWYoZS50YXJnZXQ9PT10aGlzfHxuLmxlbmd0aCYmeWUoZS50YXJnZXQpLmNsb3Nlc3QobikubGVuZ3RoKXt2YXIgdD1NLG89Vztzd2l0Y2goZS5rZXlDb2RlKXtjYXNlIDQwOmNhc2UgMzg6Y2FzZSAzNDpjYXNlIDMyOmNhc2UgMzM6Y2FzZSAzOTpjYXNlIDM3Omk9ZS5rZXlDb2RlLHIoKTticmVhaztjYXNlIDM1OmhlKFMtayksaT1udWxsO2JyZWFrO2Nhc2UgMzY6aGUoMCksaT1udWxsfXJldHVybiEocz1lLmtleUNvZGU9PWkmJnQhPU18fG8hPVcpfX0pLm9uKFwia2V5cHJlc3MuanNwXCIsZnVuY3Rpb24oZSl7aWYoZS5rZXlDb2RlPT1pJiZyKCksZS50YXJnZXQ9PT10aGlzfHxuLmxlbmd0aCYmeWUoZS50YXJnZXQpLmNsb3Nlc3QobikubGVuZ3RoKXJldHVybiFzfSksdy5oaWRlRm9jdXM/KGouY3NzKFwib3V0bGluZVwiLFwibm9uZVwiKSxcImhpZGVGb2N1c1wiaW4geFswXSYmai5hdHRyKFwiaGlkZUZvY3VzXCIsITApKTooai5jc3MoXCJvdXRsaW5lXCIsXCJcIiksXCJoaWRlRm9jdXNcImluIHhbMF0mJmouYXR0cihcImhpZGVGb2N1c1wiLCExKSk7ZnVuY3Rpb24gcigpe3ZhciBlPU0sdD1XO3N3aXRjaChpKXtjYXNlIDQwOlouc2Nyb2xsQnlZKHcua2V5Ym9hcmRTcGVlZCwhMSk7YnJlYWs7Y2FzZSAzODpaLnNjcm9sbEJ5WSgtdy5rZXlib2FyZFNwZWVkLCExKTticmVhaztjYXNlIDM0OmNhc2UgMzI6Wi5zY3JvbGxCeVkoayp3LnNjcm9sbFBhZ2VQZXJjZW50LCExKTticmVhaztjYXNlIDMzOlouc2Nyb2xsQnlZKC1rKncuc2Nyb2xsUGFnZVBlcmNlbnQsITEpO2JyZWFrO2Nhc2UgMzk6Wi5zY3JvbGxCeVgody5rZXlib2FyZFNwZWVkLCExKTticmVhaztjYXNlIDM3Olouc2Nyb2xsQnlYKC13LmtleWJvYXJkU3BlZWQsITEpfXJldHVybiBzPWUhPU18fHQhPVd9fSgpLHcuY2xpY2tPblRyYWNrJiZmdW5jdGlvbigpe2FlKCksUCYmRS5vbihcIm1vdXNlZG93bi5qc3BcIixmdW5jdGlvbihzKXtpZih2b2lkIDA9PT1zLm9yaWdpbmFsVGFyZ2V0fHxzLm9yaWdpbmFsVGFyZ2V0PT1zLmN1cnJlbnRUYXJnZXQpe3ZhciBuLHI9eWUodGhpcyksZT1yLm9mZnNldCgpLGw9cy5wYWdlWS1lLnRvcC1XLGE9ITAsYz1mdW5jdGlvbigpe3ZhciBlPXIub2Zmc2V0KCksdD1zLnBhZ2VZLWUudG9wLVIvMixvPWsqdy5zY3JvbGxQYWdlUGVyY2VudCxpPUIqby8oUy1rKTtpZihsPDApdDxXLWk/Wi5zY3JvbGxCeVkoLW8pOnBlKHQpO2Vsc2V7aWYoISgwPGwpKXJldHVybiB2b2lkIHAoKTtXK2k8dD9aLnNjcm9sbEJ5WShvKTpwZSh0KX1uPXNldFRpbWVvdXQoYyxhP3cuaW5pdGlhbERlbGF5OncudHJhY2tDbGlja1JlcGVhdEZyZXEpLGE9ITF9LHA9ZnVuY3Rpb24oKXtuJiZjbGVhclRpbWVvdXQobiksbj1udWxsLHllKGRvY3VtZW50KS5vZmYoXCJtb3VzZXVwLmpzcFwiLHApfTtyZXR1cm4gYygpLHllKGRvY3VtZW50KS5vbihcIm1vdXNldXAuanNwXCIscCksITF9fSk7SCYmTy5vbihcIm1vdXNlZG93bi5qc3BcIixmdW5jdGlvbihzKXtpZih2b2lkIDA9PT1zLm9yaWdpbmFsVGFyZ2V0fHxzLm9yaWdpbmFsVGFyZ2V0PT1zLmN1cnJlbnRUYXJnZXQpe3ZhciBuLHI9eWUodGhpcyksZT1yLm9mZnNldCgpLGw9cy5wYWdlWC1lLmxlZnQtTSxhPSEwLGM9ZnVuY3Rpb24oKXt2YXIgZT1yLm9mZnNldCgpLHQ9cy5wYWdlWC1lLmxlZnQtTi8yLG89Yip3LnNjcm9sbFBhZ2VQZXJjZW50LGk9WSpvLyhULWIpO2lmKGw8MCl0PE0taT9aLnNjcm9sbEJ5WCgtbyk6ZGUodCk7ZWxzZXtpZighKDA8bCkpcmV0dXJuIHZvaWQgcCgpO00raTx0P1ouc2Nyb2xsQnlYKG8pOmRlKHQpfW49c2V0VGltZW91dChjLGE/dy5pbml0aWFsRGVsYXk6dy50cmFja0NsaWNrUmVwZWF0RnJlcSksYT0hMX0scD1mdW5jdGlvbigpe24mJmNsZWFyVGltZW91dChuKSxuPW51bGwseWUoZG9jdW1lbnQpLm9mZihcIm1vdXNldXAuanNwXCIscCl9O3JldHVybiBjKCkseWUoZG9jdW1lbnQpLm9uKFwibW91c2V1cC5qc3BcIixwKSwhMX19KX0oKSxmdW5jdGlvbigpe2lmKGxvY2F0aW9uLmhhc2gmJjE8bG9jYXRpb24uaGFzaC5sZW5ndGgpe3ZhciBlLHQsbz1lc2NhcGUobG9jYXRpb24uaGFzaC5zdWJzdHIoMSkpO3RyeXtlPXllKFwiI1wiK28rJywgYVtuYW1lPVwiJytvKydcIl0nKX1jYXRjaChlKXtyZXR1cm59ZS5sZW5ndGgmJnkuZmluZChvKSYmKDA9PT14LnNjcm9sbFRvcCgpP3Q9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXswPHguc2Nyb2xsVG9wKCkmJih2ZShlLCEwKSx5ZShkb2N1bWVudCkuc2Nyb2xsVG9wKHgucG9zaXRpb24oKS50b3ApLGNsZWFySW50ZXJ2YWwodCkpfSw1MCk6KHZlKGUsITApLHllKGRvY3VtZW50KS5zY3JvbGxUb3AoeC5wb3NpdGlvbigpLnRvcCkpKX19KCksdy5oaWphY2tJbnRlcm5hbExpbmtzJiZmdW5jdGlvbigpe2lmKHllKGRvY3VtZW50LmJvZHkpLmRhdGEoXCJqc3BIaWphY2tcIikpcmV0dXJuO3llKGRvY3VtZW50LmJvZHkpLmRhdGEoXCJqc3BIaWphY2tcIiwhMCkseWUoZG9jdW1lbnQuYm9keSkuZGVsZWdhdGUoJ2FbaHJlZio9XCIjXCJdJyxcImNsaWNrXCIsZnVuY3Rpb24oZSl7dmFyIHQsbyxpLHMsbixyPXRoaXMuaHJlZi5zdWJzdHIoMCx0aGlzLmhyZWYuaW5kZXhPZihcIiNcIikpLGw9bG9jYXRpb24uaHJlZjtpZigtMSE9PWxvY2F0aW9uLmhyZWYuaW5kZXhPZihcIiNcIikmJihsPWxvY2F0aW9uLmhyZWYuc3Vic3RyKDAsbG9jYXRpb24uaHJlZi5pbmRleE9mKFwiI1wiKSkpLHI9PT1sKXt0PWVzY2FwZSh0aGlzLmhyZWYuc3Vic3RyKHRoaXMuaHJlZi5pbmRleE9mKFwiI1wiKSsxKSk7dHJ5e289eWUoXCIjXCIrdCsnLCBhW25hbWU9XCInK3QrJ1wiXScpfWNhdGNoKGUpe3JldHVybn1vLmxlbmd0aCYmKChpPW8uY2xvc2VzdChcIi5qc3BTY3JvbGxhYmxlXCIpKS5kYXRhKFwianNwXCIpLnNjcm9sbFRvRWxlbWVudChvLCEwKSxpWzBdLnNjcm9sbEludG9WaWV3JiYocz15ZSh3aW5kb3cpLnNjcm9sbFRvcCgpLCgobj1vLm9mZnNldCgpLnRvcCk8c3x8bj5zK3llKHdpbmRvdykuaGVpZ2h0KCkpJiZpWzBdLnNjcm9sbEludG9WaWV3KCkpLGUucHJldmVudERlZmF1bHQoKSl9fSl9KCkpOihqLnJlbW92ZUNsYXNzKFwianNwU2Nyb2xsYWJsZVwiKSx5LmNzcyh7dG9wOlwiMHB4XCIsbGVmdDpcIjBweFwiLHdpZHRoOngud2lkdGgoKS0kK1wicHhcIn0pLHgub2ZmKGVlKSx5LmZpbmQoXCI6aW5wdXQsYVwiKS5vZmYoXCJmb2N1cy5qc3BcIiksai5hdHRyKFwidGFiaW5kZXhcIixcIi0xXCIpLnJlbW92ZUF0dHIoXCJ0YWJpbmRleFwiKS5vZmYoXCJrZXlkb3duLmpzcCBrZXlwcmVzcy5qc3BcIikseS5vZmYoXCIuanNwXCIpLGFlKCkpLHcucmVzaXplU2Vuc29yfHwhdy5hdXRvUmVpbml0aWFsaXNlfHxRP3cucmVzaXplU2Vuc29yfHx3LmF1dG9SZWluaXRpYWxpc2V8fCFRfHxjbGVhckludGVydmFsKFEpOlE9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtvZSh3KX0sdy5hdXRvUmVpbml0aWFsaXNlRGVsYXkpLHcucmVzaXplU2Vuc29yJiYhXyYmKGllKHksdGUpLGllKGosdGUpLGllKGoucGFyZW50KCksdGUpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGUpLF89ITApLHMmJmouc2Nyb2xsVG9wKDApJiZoZShzLCExKSxuJiZqLnNjcm9sbExlZnQoMCkmJmdlKG4sITEpLGoudHJpZ2dlcihcImpzcC1pbml0aWFsaXNlZFwiLFtIfHxQXSl9ZnVuY3Rpb24gaWUoZSx0KXt2YXIgbyxpLHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cy5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IG92ZXJmbG93OiBzY3JvbGw7IHotaW5kZXg6IC0xOyB2aXNpYmlsaXR5OiBoaWRkZW47XCIsbi5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IG92ZXJmbG93OiBzY3JvbGw7IHotaW5kZXg6IC0xOyB2aXNpYmlsaXR5OiBoaWRkZW47XCIsbC5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IG92ZXJmbG93OiBzY3JvbGw7IHotaW5kZXg6IC0xOyB2aXNpYmlsaXR5OiBoaWRkZW47XCIsci5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDA7XCIsYS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDA7IHdpZHRoOiAyMDAlOyBoZWlnaHQ6IDIwMCU7XCI7ZnVuY3Rpb24gYygpe3Iuc3R5bGUud2lkdGg9bi5vZmZzZXRXaWR0aCsxMCtcInB4XCIsci5zdHlsZS5oZWlnaHQ9bi5vZmZzZXRIZWlnaHQrMTArXCJweFwiLG4uc2Nyb2xsTGVmdD1uLnNjcm9sbFdpZHRoLG4uc2Nyb2xsVG9wPW4uc2Nyb2xsSGVpZ2h0LGwuc2Nyb2xsTGVmdD1sLnNjcm9sbFdpZHRoLGwuc2Nyb2xsVG9wPWwuc2Nyb2xsSGVpZ2h0LG89ZS53aWR0aCgpLGk9ZS5oZWlnaHQoKX1uLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixmdW5jdGlvbigpeyhlLndpZHRoKCk+b3x8ZS5oZWlnaHQoKT5pKSYmdC5hcHBseSh0aGlzLFtdKSxjKCl9LmJpbmQodGhpcykpLGwuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLGZ1bmN0aW9uKCl7KGUud2lkdGgoKTxvfHxlLmhlaWdodCgpPGkpJiZ0LmFwcGx5KHRoaXMsW10pLGMoKX0uYmluZCh0aGlzKSksbi5hcHBlbmRDaGlsZChyKSxsLmFwcGVuZENoaWxkKGEpLHMuYXBwZW5kQ2hpbGQobikscy5hcHBlbmRDaGlsZChsKSxlLmFwcGVuZChzKSxcInN0YXRpY1wiPT09d2luZG93LmdldENvbXB1dGVkU3R5bGUoZVswXSxudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKFwicG9zaXRpb25cIikmJihlWzBdLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIiksYygpfWZ1bmN0aW9uIHNlKCl7RS5oZWlnaHQoSStcInB4XCIpLFc9MCx0PXcudmVydGljYWxHdXR0ZXIrRS5vdXRlcldpZHRoKCkseS53aWR0aChiLXQtJCk7dHJ5ezA9PT1YLnBvc2l0aW9uKCkubGVmdCYmeS5jc3MoXCJtYXJnaW4tbGVmdFwiLHQrXCJweFwiKX1jYXRjaChlKXt9fWZ1bmN0aW9uIG5lKCl7eC5maW5kKFwiPi51aS1zY3JvbGxwYW5lbC1oYmFyPi51aS1zY3JvbGxwYW5lbC1jYXA6dmlzaWJsZSw+LnVpLXNjcm9sbHBhbmVsLWhiYXI+LmpzcEFycm93XCIpLmVhY2goZnVuY3Rpb24oKXtHLT15ZSh0aGlzKS5vdXRlcldpZHRoKCl9KSxPLndpZHRoKEcrXCJweFwiKSxNPTB9ZnVuY3Rpb24gcmUoZSx0LG8saSl7dmFyIHMsbj1cImJlZm9yZVwiLHI9XCJhZnRlclwiO1wib3NcIj09dCYmKHQ9L01hYy8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pP1wiYWZ0ZXJcIjpcInNwbGl0XCIpLHQ9PW4/cj10OnQ9PXImJihuPXQscz1vLG89aSxpPXMpLGVbbl0obylbcl0oaSl9ZnVuY3Rpb24gbGUoZSx0LG8pe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlLHQsbyxpKXtvPXllKG8pLmFkZENsYXNzKFwianNwQWN0aXZlXCIpO3ZhciBzLG4scj0hMCxsPWZ1bmN0aW9uKCl7MCE9PWUmJlouc2Nyb2xsQnlYKGUqdy5hcnJvd0J1dHRvblNwZWVkKSwwIT09dCYmWi5zY3JvbGxCeVkodCp3LmFycm93QnV0dG9uU3BlZWQpLG49c2V0VGltZW91dChsLHI/dy5pbml0aWFsRGVsYXk6dy5hcnJvd1JlcGVhdEZyZXEpLHI9ITF9O2woKSxzPWk/XCJtb3VzZW91dC5qc3BcIjpcIm1vdXNldXAuanNwXCIsKGk9aXx8eWUoXCJodG1sXCIpKS5vbihzLGZ1bmN0aW9uKCl7by5yZW1vdmVDbGFzcyhcImpzcEFjdGl2ZVwiKSxuJiZjbGVhclRpbWVvdXQobiksbj1udWxsLGkub2ZmKHMpfSl9KGUsdCx0aGlzLG8pLHRoaXMudHJpZ2dlcihcImJsdXJcIiksITF9fWZ1bmN0aW9uIGFlKCl7TyYmTy5vZmYoXCJtb3VzZWRvd24uanNwXCIpLEUmJkUub2ZmKFwibW91c2Vkb3duLmpzcFwiKX1mdW5jdGlvbiBjZSgpe3llKFwiaHRtbFwiKS5vZmYoXCJkcmFnc3RhcnQuanNwIHNlbGVjdHN0YXJ0LmpzcCBtb3VzZW1vdmUuanNwIG1vdXNldXAuanNwIG1vdXNlbGVhdmUuanNwXCIpLEEmJkEucmVtb3ZlQ2xhc3MoXCJqc3BBY3RpdmVcIikseiYmei5yZW1vdmVDbGFzcyhcImpzcEFjdGl2ZVwiKX1mdW5jdGlvbiBwZShlLHQpe3ZhciBvLGkscyxuLHI7UCYmKGU8MD9lPTA6QjxlJiYoZT1CKSxvPW5ldyB5ZS5FdmVudChcImpzcC13aWxsLXNjcm9sbC15XCIpLGoudHJpZ2dlcihvLFtlXSksby5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8KHM9MD09PShpPWV8fDApLG49aT09QixyPS0oZS9CKSooUy1rKSx2b2lkIDA9PT10JiYodD13LmFuaW1hdGVTY3JvbGwpLHQ/Wi5hbmltYXRlKEEsXCJ0b3BcIixlLHVlLGZ1bmN0aW9uKCl7ai50cmlnZ2VyKFwianNwLXVzZXItc2Nyb2xsLXlcIixbLXIscyxuXSl9KTooQS5jc3MoXCJ0b3BcIixlK1wicHhcIiksdWUoZSksai50cmlnZ2VyKFwianNwLXVzZXItc2Nyb2xsLXlcIixbLXIscyxuXSkpKSl9ZnVuY3Rpb24gdWUoZSl7dm9pZCAwPT09ZSYmKGU9QS5wb3NpdGlvbigpLnRvcCkseC5zY3JvbGxUb3AoMCk7dmFyIHQsbyxpPTA9PT0oVz1lfHwwKSxzPVc9PUIsbj0tKGUvQikqKFMtayk7cj09aSYmYT09c3x8KHI9aSxhPXMsai50cmlnZ2VyKFwianNwLWFycm93LWNoYW5nZVwiLFtyLGEsbCxjXSkpLHQ9aSxvPXMsdy5zaG93QXJyb3dzJiYoTFt0P1wiYWRkQ2xhc3NcIjpcInJlbW92ZUNsYXNzXCJdKFwianNwRGlzYWJsZWRcIiksRltvP1wiYWRkQ2xhc3NcIjpcInJlbW92ZUNsYXNzXCJdKFwianNwRGlzYWJsZWRcIikpLHkuY3NzKFwidG9wXCIsbitcInB4XCIpLGoudHJpZ2dlcihcImpzcC1zY3JvbGwteVwiLFstbixpLHNdKS50cmlnZ2VyKFwic2Nyb2xsXCIpfWZ1bmN0aW9uIGRlKGUsdCl7dmFyIG8saSxzLG4scjtIJiYoZTwwP2U9MDpZPGUmJihlPVkpLG89bmV3IHllLkV2ZW50KFwianNwLXdpbGwtc2Nyb2xsLXhcIiksai50cmlnZ2VyKG8sW2VdKSxvLmlzRGVmYXVsdFByZXZlbnRlZCgpfHwocz0wPT09KGk9ZXx8MCksbj1pPT1ZLHI9LShlL1kpKihULWIpLHZvaWQgMD09PXQmJih0PXcuYW5pbWF0ZVNjcm9sbCksdD9aLmFuaW1hdGUoeixcImxlZnRcIixlLGZlLGZ1bmN0aW9uKCl7ai50cmlnZ2VyKFwianNwLXVzZXItc2Nyb2xsLXhcIixbLXIscyxuXSl9KTooei5jc3MoXCJsZWZ0XCIsZStcInB4XCIpLGZlKGUpLGoudHJpZ2dlcihcImpzcC11c2VyLXNjcm9sbC14XCIsWy1yLHMsbl0pKSkpfWZ1bmN0aW9uIGZlKGUpe3ZvaWQgMD09PWUmJihlPXoucG9zaXRpb24oKS5sZWZ0KSx4LnNjcm9sbFRvcCgwKTt2YXIgdCxvLGk9MD09PShNPWV8fDApLHM9TT09WSxuPS0oZS9ZKSooVC1iKTtsPT1pJiZjPT1zfHwobD1pLGM9cyxqLnRyaWdnZXIoXCJqc3AtYXJyb3ctY2hhbmdlXCIsW3IsYSxsLGNdKSksdD1pLG89cyx3LnNob3dBcnJvd3MmJihWW3Q/XCJhZGRDbGFzc1wiOlwicmVtb3ZlQ2xhc3NcIl0oXCJqc3BEaXNhYmxlZFwiKSxLW28/XCJhZGRDbGFzc1wiOlwicmVtb3ZlQ2xhc3NcIl0oXCJqc3BEaXNhYmxlZFwiKSkseS5jc3MoXCJsZWZ0XCIsbitcInB4XCIpLGoudHJpZ2dlcihcImpzcC1zY3JvbGwteFwiLFstbixpLHNdKS50cmlnZ2VyKFwic2Nyb2xsXCIpfWZ1bmN0aW9uIGhlKGUsdCl7cGUoZS8oUy1rKSpCLHQpfWZ1bmN0aW9uIGdlKGUsdCl7ZGUoZS8oVC1iKSpZLHQpfWZ1bmN0aW9uIHZlKGUsdCxvKXt2YXIgaSxzLG4scixsLGEsYyxwLHUsZD0wLGY9MDt0cnl7aT15ZShlKX1jYXRjaChlKXtyZXR1cm59Zm9yKHM9aS5vdXRlckhlaWdodCgpLG49aS5vdXRlcldpZHRoKCkseC5zY3JvbGxUb3AoMCkseC5zY3JvbGxMZWZ0KDApOyFpLmlzKFwiLnVpLXNjcm9sbHBhbmVsLWNvbnRlbnRcIik7KWlmKGQrPWkucG9zaXRpb24oKS50b3AsZis9aS5wb3NpdGlvbigpLmxlZnQsaT1pLm9mZnNldFBhcmVudCgpLC9eYm9keXxodG1sJC9pLnRlc3QoaVswXS5ub2RlTmFtZSkpcmV0dXJuO2E9KHI9amUoKSkrayxkPHJ8fHQ/cD1kLXcuaG9yaXpvbnRhbEd1dHRlcjphPGQrcyYmKHA9ZC1rK3Mrdy5ob3Jpem9udGFsR3V0dGVyKSxpc05hTihwKXx8aGUocCxvKSxjPShsPW1lKCkpK2IsZjxsfHx0P3U9Zi13Lmhvcml6b250YWxHdXR0ZXI6YzxmK24mJih1PWYtYituK3cuaG9yaXpvbnRhbEd1dHRlciksaXNOYU4odSl8fGdlKHUsbyl9ZnVuY3Rpb24gbWUoKXtyZXR1cm4teS5wb3NpdGlvbigpLmxlZnR9ZnVuY3Rpb24gamUoKXtyZXR1cm4teS5wb3NpdGlvbigpLnRvcH1mdW5jdGlvbiB3ZSgpe3JldHVybiExfSQ9XCJib3JkZXItYm94XCI9PT1qLmNzcyhcImJveC1zaXppbmdcIik/VT0wOihVPWouY3NzKFwicGFkZGluZ1RvcFwiKStcIiBcIitqLmNzcyhcInBhZGRpbmdSaWdodFwiKStcIiBcIitqLmNzcyhcInBhZGRpbmdCb3R0b21cIikrXCIgXCIrai5jc3MoXCJwYWRkaW5nTGVmdFwiKSwocGFyc2VJbnQoai5jc3MoXCJwYWRkaW5nTGVmdFwiKSwxMCl8fDApKyhwYXJzZUludChqLmNzcyhcInBhZGRpbmdSaWdodFwiKSwxMCl8fDApKSx5ZS5leHRlbmQoWix7cmVpbml0aWFsaXNlOmZ1bmN0aW9uKGUpe29lKGU9eWUuZXh0ZW5kKHt9LHcsZSkpfSxzY3JvbGxUb0VsZW1lbnQ6ZnVuY3Rpb24oZSx0LG8pe3ZlKGUsdCxvKX0sc2Nyb2xsVG86ZnVuY3Rpb24oZSx0LG8pe2dlKGUsbyksaGUodCxvKX0sc2Nyb2xsVG9YOmZ1bmN0aW9uKGUsdCl7Z2UoZSx0KX0sc2Nyb2xsVG9ZOmZ1bmN0aW9uKGUsdCl7aGUoZSx0KX0sc2Nyb2xsVG9QZXJjZW50WDpmdW5jdGlvbihlLHQpe2dlKGUqKFQtYiksdCl9LHNjcm9sbFRvUGVyY2VudFk6ZnVuY3Rpb24oZSx0KXtoZShlKihTLWspLHQpfSxzY3JvbGxCeTpmdW5jdGlvbihlLHQsbyl7Wi5zY3JvbGxCeVgoZSxvKSxaLnNjcm9sbEJ5WSh0LG8pfSxzY3JvbGxCeVg6ZnVuY3Rpb24oZSx0KXtkZSgobWUoKStNYXRoW2U8MD9cImZsb29yXCI6XCJjZWlsXCJdKGUpKS8oVC1iKSpZLHQpfSxzY3JvbGxCeVk6ZnVuY3Rpb24oZSx0KXtwZSgoamUoKStNYXRoW2U8MD9cImZsb29yXCI6XCJjZWlsXCJdKGUpKS8oUy1rKSpCLHQpfSxwb3NpdGlvbkRyYWdYOmZ1bmN0aW9uKGUsdCl7ZGUoZSx0KX0scG9zaXRpb25EcmFnWTpmdW5jdGlvbihlLHQpe3BlKGUsdCl9LGFuaW1hdGU6ZnVuY3Rpb24oZSx0LG8saSxzKXt2YXIgbj17fTtuW3RdPW8sZS5hbmltYXRlKG4se2R1cmF0aW9uOncuYW5pbWF0ZUR1cmF0aW9uLGVhc2luZzp3LmFuaW1hdGVFYXNlLHF1ZXVlOiExLHN0ZXA6aSxjb21wbGV0ZTpzfSl9LGdldENvbnRlbnRQb3NpdGlvblg6bWUsZ2V0Q29udGVudFBvc2l0aW9uWTpqZSxnZXRDb250ZW50V2lkdGg6ZnVuY3Rpb24oKXtyZXR1cm4gVH0sZ2V0Q29udGVudEhlaWdodDpmdW5jdGlvbigpe3JldHVybiBTfSxnZXRQZXJjZW50U2Nyb2xsZWRYOmZ1bmN0aW9uKCl7cmV0dXJuIG1lKCkvKFQtYil9LGdldFBlcmNlbnRTY3JvbGxlZFk6ZnVuY3Rpb24oKXtyZXR1cm4gamUoKS8oUy1rKX0sZ2V0SXNTY3JvbGxhYmxlSDpmdW5jdGlvbigpe3JldHVybiBIfSxnZXRJc1Njcm9sbGFibGVWOmZ1bmN0aW9uKCl7cmV0dXJuIFB9LGdldENvbnRlbnRQYW5lOmZ1bmN0aW9uKCl7cmV0dXJuIHl9LHNjcm9sbFRvQm90dG9tOmZ1bmN0aW9uKGUpe3BlKEIsZSl9LGhpamFja0ludGVybmFsTGlua3M6eWUubm9vcCxkZXN0cm95OmZ1bmN0aW9uKCl7dmFyIGUsdDtlPWplKCksdD1tZSgpLGoucmVtb3ZlQ2xhc3MoXCJqc3BTY3JvbGxhYmxlXCIpLm9mZihcIi5qc3BcIikseS5vZmYoXCIuanNwXCIpLGoucmVwbGFjZVdpdGgoby5hcHBlbmQoeS5jaGlsZHJlbigpKSksby5zY3JvbGxUb3AoZSksby5zY3JvbGxMZWZ0KHQpLFEmJmNsZWFySW50ZXJ2YWwoUSl9fSksb2UoZSl9cmV0dXJuIG89eWUuZXh0ZW5kKHt9LHllLmZuLmpTY3JvbGxQYW5lLmRlZmF1bHRzLG8pLHllLmVhY2goW1wiYXJyb3dCdXR0b25TcGVlZFwiLFwidHJhY2tDbGlja1NwZWVkXCIsXCJrZXlib2FyZFNwZWVkXCJdLGZ1bmN0aW9uKCl7b1t0aGlzXT1vW3RoaXNdfHxvLnNwZWVkfSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9eWUodGhpcyksdD1lLmRhdGEoXCJqc3BcIik7dD90LnJlaW5pdGlhbGlzZShvKTooeWUoXCJzY3JpcHRcIixlKS5maWx0ZXIoJ1t0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJdLDpub3QoW3R5cGVdKScpLnJlbW92ZSgpLHQ9bmV3IGkoZSxvKSxlLmRhdGEoXCJqc3BcIix0KSl9KX0seWUuZm4ualNjcm9sbFBhbmUuZGVmYXVsdHM9e3Nob3dBcnJvd3M6ITEsbWFpbnRhaW5Qb3NpdGlvbjohMCxzdGlja1RvQm90dG9tOiExLHN0aWNrVG9SaWdodDohMSxjbGlja09uVHJhY2s6ITAsYXV0b1JlaW5pdGlhbGlzZTohMSxhdXRvUmVpbml0aWFsaXNlRGVsYXk6NTAwLHZlcnRpY2FsRHJhZ01pbkhlaWdodDowLHZlcnRpY2FsRHJhZ01heEhlaWdodDo5OTk5OSxob3Jpem9udGFsRHJhZ01pbldpZHRoOjAsaG9yaXpvbnRhbERyYWdNYXhXaWR0aDo5OTk5OSxjb250ZW50V2lkdGg6dm9pZCAwLGFuaW1hdGVTY3JvbGw6ITEsYW5pbWF0ZUR1cmF0aW9uOjMwMCxhbmltYXRlRWFzZTpcImxpbmVhclwiLGhpamFja0ludGVybmFsTGlua3M6ITEsdmVydGljYWxHdXR0ZXI6NCxob3Jpem9udGFsR3V0dGVyOjQsbW91c2VXaGVlbFNwZWVkOjMsYXJyb3dCdXR0b25TcGVlZDowLGFycm93UmVwZWF0RnJlcTo1MCxhcnJvd1Njcm9sbE9uSG92ZXI6ITEsdHJhY2tDbGlja1NwZWVkOjAsdHJhY2tDbGlja1JlcGVhdEZyZXE6NzAsdmVydGljYWxBcnJvd1Bvc2l0aW9uczpcInNwbGl0XCIsaG9yaXpvbnRhbEFycm93UG9zaXRpb25zOlwic3BsaXRcIixlbmFibGVLZXlib2FyZE5hdmlnYXRpb246ITAsaGlkZUZvY3VzOiExLGtleWJvYXJkU3BlZWQ6MCxpbml0aWFsRGVsYXk6MzAwLHNwZWVkOjMwLHNjcm9sbFBhZ2VQZXJjZW50Oi44LGFsd2F5c1Nob3dWU2Nyb2xsOiExLGFsd2F5c1Nob3dIU2Nyb2xsOiExLHJlc2l6ZVNlbnNvcjohMSxyZXNpemVTZW5zb3JEZWxheTowfX0pOyIsICJpbXBvcnQgXCJqc2Nyb2xscGFuZVwiO1xuXG5pbXBvcnQgeyBEZWZlcnJlZFdpZGdldCB9IGZyb20gXCIuLi9jb3JlL2NvcmUud2lkZ2V0LmpzXCI7XG5cbi8qKiBcbiAqIF9fUHJpbWVGYWNlcyBTY3JvbGxQYW5lbCBXaWRnZXRfX1xuICogXG4gKiBTY3JvbGxQYW5lbCBpcyB1c2VkIHRvIGRpc3BsYXkgc2Nyb2xsYWJsZSBjb250ZW50IHdpdGggdGhlbWUgYXdhcmUgc2Nyb2xsYmFycyBpbnN0ZWFkIG9mIG5hdGl2ZSBicm93c2VyIHNjcm9sbGJhcnMuXG4gKiBcbiAqIEBwcm9wIHtKUXVlcnlKU2Nyb2xsUGFuZS5KU2Nyb2xsUGFuZUluc3RhbmNlfSBqc3AgVGhlIGN1cnJlbnQgalF1ZXJ5IFNjcm9sbCBQYW5lIGluc3RhbmNlLlxuICogXG4gKiBAaW50ZXJmYWNlIHtQcmltZUZhY2VzLndpZGdldC5TY3JvbGxQYW5lbENmZ30gY2ZnIFRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUge0BsaW5rICBTY3JvbGxQYW5lbHwgU2Nyb2xsUGFuZWwgd2lkZ2V0fS5cbiAqIFlvdSBjYW4gYWNjZXNzIHRoaXMgY29uZmlndXJhdGlvbiB2aWEge0BsaW5rIFByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXQuY2ZnfEJhc2VXaWRnZXQuY2ZnfS4gUGxlYXNlIG5vdGUgdGhhdCB0aGlzXG4gKiBjb25maWd1cmF0aW9uIGlzIHVzdWFsbHkgbWVhbnQgdG8gYmUgcmVhZC1vbmx5IGFuZCBzaG91bGQgbm90IGJlIG1vZGlmaWVkLlxuICogQGV4dGVuZHMge1ByaW1lRmFjZXMud2lkZ2V0LkRlZmVycmVkV2lkZ2V0Q2ZnfSBjZmdcbiAqIEBleHRlbmRzIHtKUXVlcnlKU2Nyb2xsUGFuZS5KU2Nyb2xsUGFuZVNldHRpbmdzfSBjZmdcbiAqL1xuZXhwb3J0IGNsYXNzIFNjcm9sbFBhbmVsIGV4dGVuZHMgRGVmZXJyZWRXaWRnZXQge1xuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMuUGFydGlhbFdpZGdldENmZzxUQ2ZnPn0gY2ZnXG4gICAgICovXG4gICAgaW5pdChjZmcpIHtcbiAgICAgICAgc3VwZXIuaW5pdChjZmcpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyRGVmZXJyZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5jbHVkZVxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIF9yZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuanNwID0gdGhpcy5qcS5qU2Nyb2xsUGFuZSh0aGlzLmNmZykuZGF0YSgnanNwJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xscyB0byB0aGUgZ2l2ZW4gc2Nyb2xsIHBvc2l0aW9uLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IEhvcml6b250YWwgY29vcmRpbmF0ZSBvZiB0aGUgbmV3IHNjcm9sbCBwb3NpdGlvbi5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBWZXJ0aWNhbCBjb29yZGluYXRlIG9mIHRoZSBuZXcgc2Nyb2xsIHBvc2l0aW9uLlxuICAgICAqL1xuICAgIHNjcm9sbFRvKHgsIHkpIHtcbiAgICAgICAgdGhpcy5qc3Auc2Nyb2xsVG8oeCwgeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIGhvcml6b250YWxseSB0byB0aGUgZ2l2ZW4gc2Nyb2xsIHBvc2l0aW9uLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSBuZXcgaG9yaXpvbnRhbCBzY3JvbGwgcG9zaXRpb24uXG4gICAgICovXG4gICAgc2Nyb2xsWCh4KSB7XG4gICAgICAgIHRoaXMuanNwLnNjcm9sbFRvWCh4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdmVydGljYWxseSB0byB0aGUgZ2l2ZW4gc2Nyb2xsIHBvc2l0aW9uLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFRoZSBuZXcgdmVydGljYWwgc2Nyb2xsIHBvc2l0aW9uLlxuICAgICAqL1xuICAgIHNjcm9sbFkoeSkge1xuICAgICAgICB0aGlzLmpzcC5zY3JvbGxUb1koeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVkcmF3cyB0aGUgc2Nyb2xsYmFycy5cbiAgICAgKi9cbiAgICByZWRyYXcoKSB7XG4gICAgICAgIHRoaXMuanNwLnJlaW5pdGlhbGlzZSgpO1xuICAgIH1cblxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7OztBQUFBO0FBQUE7QUFVQSxLQUFFLFNBQVUsUUFBUSxTQUFVO0FBRTdCO0FBRUEsVUFBSyxPQUFPLFdBQVcsWUFBWSxPQUFPLE9BQU8sWUFBWSxVQUFXO0FBU3ZFLGVBQU8sVUFBVSxPQUFPLFdBQ3ZCLFFBQVMsUUFBUSxJQUFLLElBQ3RCLFNBQVUsR0FBSTtBQUNiLGNBQUssQ0FBQyxFQUFFLFVBQVc7QUFDbEIsa0JBQU0sSUFBSSxNQUFPLDBDQUEyQztBQUFBLFVBQzdEO0FBQ0EsaUJBQU8sUUFBUyxDQUFFO0FBQUEsUUFDbkI7QUFBQSxNQUNGLE9BQU87QUFDTixnQkFBUyxNQUFPO0FBQUEsTUFDakI7QUFBQSxJQUdELEdBQUssT0FBTyxXQUFXLGNBQWMsU0FBUyxTQUFNLFNBQVVBLFNBQVEsVUFBVztBQU1qRjtBQUVBLFVBQUks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QUFHLENBQUM7QUFBQSxFQUMxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxRQUFRLEdBQUc7QUFDUCxTQUFLLElBQUksVUFBVSxDQUFDO0FBQUEsRUFDeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsUUFBUSxHQUFHO0FBQ1AsU0FBSyxJQUFJLFVBQVUsQ0FBQztBQUFBLEVBQ3hCO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxTQUFTO0FBQ0wsU0FBSyxJQUFJLGFBQWE7QUFBQSxFQUMxQjtBQUVKOyIsCiAgIm5hbWVzIjogWyJ3aW5kb3ciLCAiaXNGdW5jdGlvbiIsICJpc1dpbmRvdyIsICJkb2N1bWVudCIsICJqUXVlcnkiLCAiYXJyIiwgInB1c2giLCAiZG9jdW1lbnRFbGVtZW50IiwgInJxdWlja0V4cHIiLCAiZXNjYXBlIiwgImkiLCAibWF0Y2hlcyIsICJub2RlIiwgImRpciIsICJmaW5kIiwgImVsZW0iLCAidmFsdWUiLCAiZGVmZXJyZWQiLCAiZGF0YSIsICJub2RlTmFtZSIsICJuYW1lIiwgImluZGV4IiwgImxlbmd0aCIsICJsb2NhdGlvbiIsICJ2YWwiLCAiY29tcGxldGVkIiwgIm1ldGhvZCIsICJ0eXBlIiwgIm8iLCAiZSIsICJ0IiwgImkiLCAiciIsICJsIiwgImEiLCAiYyIsICJzIiwgIm4iLCAicCJdCn0K

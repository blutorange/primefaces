import {
  __esm,
  __export
} from "./chunk-YRJTWU7C.js";

// ../../../../../../.yarn/berry/cache/jquery-npm-4.0.0-beta.2-e44f8821fa-10c0.zip/node_modules/jquery/dist-module/jquery.module.js
var jquery_module_exports = {};
__export(jquery_module_exports, {
  $: () => jQuery,
  default: () => jquery_module_default,
  jQuery: () => jQuery
});
function jQueryFactory(window2, noGlobal) {
  if (typeof window2 === "undefined" || !window2.document) {
    throw new Error("jQuery requires a window with a document");
  }
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
  function toType(obj) {
    if (obj == null) {
      return obj + "";
    }
    return typeof obj === "object" ? class2type[toString.call(obj)] || "object" : typeof obj;
  }
  function isWindow(obj) {
    return obj != null && obj === obj.window;
  }
  function isArrayLike(obj) {
    var length = !!obj && obj.length, type = toType(obj);
    if (typeof obj === "function" || isWindow(obj)) {
      return false;
    }
    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }
  var document$1 = window2.document;
  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };
  function DOMEval(code, node, doc) {
    doc = doc || document$1;
    var i2, script = doc.createElement("script");
    script.text = code;
    for (i2 in preservedScriptAttributes) {
      if (node && node[i2]) {
        script[i2] = node[i2];
      }
    }
    if (doc.head.appendChild(script).parentNode) {
      script.parentNode.removeChild(script);
    }
  }
  var version = "4.0.0-beta.2", rhtmlSuffix = /HTML$/i, jQuery2 = function(selector, context) {
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
      return this.pushStack(jQuery2.map(this, function(elem, i2) {
        return callback.call(elem, i2, elem);
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
      return this.pushStack(jQuery2.grep(this, function(_elem, i2) {
        return (i2 + 1) % 2;
      }));
    },
    odd: function() {
      return this.pushStack(jQuery2.grep(this, function(_elem, i2) {
        return i2 % 2;
      }));
    },
    eq: function(i2) {
      var len = this.length, j = +i2 + (i2 < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    }
  };
  jQuery2.extend = jQuery2.fn.extend = function() {
    var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i2 = 1, length = arguments.length, deep = false;
    if (typeof target === "boolean") {
      deep = target;
      target = arguments[i2] || {};
      i2++;
    }
    if (typeof target !== "object" && typeof target !== "function") {
      target = {};
    }
    if (i2 === length) {
      target = this;
      i2--;
    }
    for (; i2 < length; i2++) {
      if ((options = arguments[i2]) != null) {
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
      var length, i2 = 0;
      if (isArrayLike(obj)) {
        length = obj.length;
        for (; i2 < length; i2++) {
          if (callback.call(obj[i2], i2, obj[i2]) === false) {
            break;
          }
        }
      } else {
        for (i2 in obj) {
          if (callback.call(obj[i2], i2, obj[i2]) === false) {
            break;
          }
        }
      }
      return obj;
    },
    // Retrieve the text value of an array of DOM nodes
    text: function(elem) {
      var node, ret = "", i2 = 0, nodeType = elem.nodeType;
      if (!nodeType) {
        while (node = elem[i2++]) {
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
    inArray: function(elem, arr2, i2) {
      return arr2 == null ? -1 : indexOf.call(arr2, elem, i2);
    },
    isXMLDoc: function(elem) {
      var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
      return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
    },
    // Note: an element does not contain itself
    contains: function(a, b) {
      var bup = b && b.parentNode;
      return a === bup || !!(bup && bup.nodeType === 1 && // Support: IE 9 - 11+
      // IE doesn't have `contains` on SVG.
      (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
    },
    merge: function(first, second) {
      var len = +second.length, j = 0, i2 = first.length;
      for (; j < len; j++) {
        first[i2++] = second[j];
      }
      first.length = i2;
      return first;
    },
    grep: function(elems, callback, invert) {
      var callbackInverse, matches2 = [], i2 = 0, length = elems.length, callbackExpect = !invert;
      for (; i2 < length; i2++) {
        callbackInverse = !callback(elems[i2], i2);
        if (callbackInverse !== callbackExpect) {
          matches2.push(elems[i2]);
        }
      }
      return matches2;
    },
    // arg is for internal usage only
    map: function(elems, callback, arg) {
      var length, value, i2 = 0, ret = [];
      if (isArrayLike(elems)) {
        length = elems.length;
        for (; i2 < length; i2++) {
          value = callback(elems[i2], i2, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      } else {
        for (i2 in elems) {
          value = callback(elems[i2], i2, arg);
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
  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }
  var pop = arr.pop;
  var whitespace = "[\\x20\\t\\r\\n\\f]";
  var isIE = document$1.documentMode;
  try {
    document$1.querySelector(":has(*,:jqfake)");
    support.cssHas = false;
  } catch (e) {
    support.cssHas = true;
  }
  var rbuggyQSA = [];
  if (isIE) {
    rbuggyQSA.push(
      // Support: IE 9 - 11+
      // IE's :disabled selector does not pick up the children of disabled fieldsets
      ":enabled",
      ":disabled",
      // Support: IE 11+
      // IE 11 doesn't find elements on a `[name='']` query in some cases.
      // Adding a temporary attribute to the document before the selection works
      // around the issue.
      "\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`
    );
  }
  if (!support.cssHas) {
    rbuggyQSA.push(":has");
  }
  rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
  var rtrimCSS = new RegExp(
    "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
    "g"
  );
  var identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+";
  var rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*");
  var rdescend = new RegExp(whitespace + "|>");
  var rsibling = /[+~]/;
  var documentElement$1 = document$1.documentElement;
  var matches = documentElement$1.matches || documentElement$1.msMatchesSelector;
  function createCache() {
    var keys = [];
    function cache(key, value) {
      if (keys.push(key + " ") > jQuery2.expr.cacheLength) {
        delete cache[keys.shift()];
      }
      return cache[key + " "] = value;
    }
    return cache;
  }
  function testContext(context) {
    return context && typeof context.getElementsByTagName !== "undefined" && context;
  }
  var attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
  "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
  `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]";
  var pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)";
  var filterMatchExpr = {
    ID: new RegExp("^#(" + identifier + ")"),
    CLASS: new RegExp("^\\.(" + identifier + ")"),
    TAG: new RegExp("^(" + identifier + "|[*])"),
    ATTR: new RegExp("^" + attributes),
    PSEUDO: new RegExp("^" + pseudos),
    CHILD: new RegExp(
      "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
      "i"
    )
  };
  var rpseudo = new RegExp(pseudos);
  var runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
    var high = "0x" + escape.slice(1) - 65536;
    if (nonHex) {
      return nonHex;
    }
    return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
  };
  function unescapeSelector(sel) {
    return sel.replace(runescape, funescape);
  }
  function selectorError(msg) {
    jQuery2.error("Syntax error, unrecognized expression: " + msg);
  }
  var rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*");
  var tokenCache = createCache();
  function tokenize(selector, parseOnly) {
    var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
    if (cached) {
      return parseOnly ? 0 : cached.slice(0);
    }
    soFar = selector;
    groups = [];
    preFilters = jQuery2.expr.preFilter;
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
      for (type in filterMatchExpr) {
        if ((match = jQuery2.expr.match[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
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
    return soFar ? selectorError(selector) : (
      // Cache the tokens
      tokenCache(selector, groups).slice(0)
    );
  }
  var preFilter = {
    ATTR: function(match) {
      match[1] = unescapeSelector(match[1]);
      match[3] = unescapeSelector(match[3] || match[4] || match[5] || "");
      if (match[2] === "~=") {
        match[3] = " " + match[3] + " ";
      }
      return match.slice(0, 4);
    },
    CHILD: function(match) {
      match[1] = match[1].toLowerCase();
      if (match[1].slice(0, 3) === "nth") {
        if (!match[3]) {
          selectorError(match[0]);
        }
        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
        match[5] = +(match[7] + match[8] || match[3] === "odd");
      } else if (match[3]) {
        selectorError(match[0]);
      }
      return match;
    },
    PSEUDO: function(match) {
      var excess, unquoted = !match[6] && match[2];
      if (filterMatchExpr.CHILD.test(match[0])) {
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
  };
  function toSelector(tokens) {
    var i2 = 0, len = tokens.length, selector = "";
    for (; i2 < len; i2++) {
      selector += tokens[i2].value;
    }
    return selector;
  }
  function access(elems, fn, key, value, chainable, emptyGet, raw) {
    var i2 = 0, len = elems.length, bulk = key == null;
    if (toType(key) === "object") {
      chainable = true;
      for (i2 in key) {
        access(elems, fn, i2, key[i2], true, emptyGet, raw);
      }
    } else if (value !== void 0) {
      chainable = true;
      if (typeof value !== "function") {
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
        for (; i2 < len; i2++) {
          fn(
            elems[i2],
            key,
            raw ? value : value.call(elems[i2], i2, fn(elems[i2], key))
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
  }
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
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
        hooks = jQuery2.attrHooks[name.toLowerCase()];
      }
      if (value !== void 0) {
        if (value === null || // For compat with previous handling of boolean attributes,
        // remove when `false` passed. For ARIA attributes -
        // many of which recognize a `"false"` value - continue to
        // set the `"false"` value as jQuery <4 did.
        value === false && name.toLowerCase().indexOf("aria-") !== 0) {
          jQuery2.removeAttr(elem, name);
          return;
        }
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
          return ret;
        }
        elem.setAttribute(name, value);
        return value;
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      ret = elem.getAttribute(name);
      return ret == null ? void 0 : ret;
    },
    attrHooks: {},
    removeAttr: function(elem, value) {
      var name, i2 = 0, attrNames = value && value.match(rnothtmlwhite);
      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i2++]) {
          elem.removeAttribute(name);
        }
      }
    }
  });
  if (isIE) {
    jQuery2.attrHooks.type = {
      set: function(elem, value) {
        if (value === "radio" && nodeName(elem, "input")) {
          var val = elem.value;
          elem.setAttribute("type", value);
          if (val) {
            elem.value = val;
          }
          return value;
        }
      }
    };
  }
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
  var sort = arr.sort;
  var splice = arr.splice;
  var hasDuplicate;
  function sortOrder(a, b) {
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
    if (compare & 1) {
      if (a == document$1 || a.ownerDocument == document$1 && jQuery2.contains(document$1, a)) {
        return -1;
      }
      if (b == document$1 || b.ownerDocument == document$1 && jQuery2.contains(document$1, b)) {
        return 1;
      }
      return 0;
    }
    return compare & 4 ? -1 : 1;
  }
  jQuery2.uniqueSort = function(results) {
    var elem, duplicates = [], j = 0, i2 = 0;
    hasDuplicate = false;
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
    return results;
  };
  jQuery2.fn.uniqueSort = function() {
    return this.pushStack(jQuery2.uniqueSort(slice.apply(this)));
  };
  var i, outermostContext, document, documentElement, documentIsHTML, dirruns = 0, done = 0, classCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), rwhitespace = new RegExp(whitespace + "+", "g"), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = jQuery2.extend({
    // For use in libraries implementing .is()
    // We use this for POS matching in `select`
    needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
  }, filterMatchExpr), rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr$1 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, unloadHandler = function() {
    setDocument();
  }, inDisabledFieldset = addCombinator(
    function(elem) {
      return elem.disabled === true && nodeName(elem, "fieldset");
    },
    { dir: "parentNode", next: "legend" }
  );
  function find(selector, context, results, seed) {
    var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
    results = results || [];
    if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
      return results;
    }
    if (!seed) {
      setDocument(context);
      context = context || document;
      if (documentIsHTML) {
        if (nodeType !== 11 && (match = rquickExpr$1.exec(selector))) {
          if (m = match[1]) {
            if (nodeType === 9) {
              if (elem = context.getElementById(m)) {
                push.call(results, elem);
              }
              return results;
            } else {
              if (newContext && (elem = newContext.getElementById(m)) && jQuery2.contains(context, elem)) {
                push.call(results, elem);
                return results;
              }
            }
          } else if (match[2]) {
            push.apply(results, context.getElementsByTagName(selector));
            return results;
          } else if ((m = match[3]) && context.getElementsByClassName) {
            push.apply(results, context.getElementsByClassName(m));
            return results;
          }
        }
        if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
          newSelector = selector;
          newContext = context;
          if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
            newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
            if (newContext != context || isIE) {
              if (nid = context.getAttribute("id")) {
                nid = jQuery2.escapeSelector(nid);
              } else {
                context.setAttribute("id", nid = jQuery2.expando);
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
            push.apply(
              results,
              newContext.querySelectorAll(newSelector)
            );
            return results;
          } catch (qsaError) {
            nonnativeSelectorCache(selector, true);
          } finally {
            if (nid === jQuery2.expando) {
              context.removeAttribute("id");
            }
          }
        }
      }
    }
    return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
  }
  function markFunction(fn) {
    fn[jQuery2.expando] = true;
    return fn;
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
  function setDocument(node) {
    var subWindow, doc = node ? node.ownerDocument || node : document$1;
    if (doc == document || doc.nodeType !== 9) {
      return;
    }
    document = doc;
    documentElement = document.documentElement;
    documentIsHTML = !jQuery2.isXMLDoc(document);
    if (isIE && document$1 != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
      subWindow.addEventListener("unload", unloadHandler);
    }
  }
  find.matches = function(expr, elements) {
    return find(expr, null, null, elements);
  };
  find.matchesSelector = function(elem, expr) {
    setDocument(elem);
    if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
      try {
        return matches.call(elem, expr);
      } catch (e) {
        nonnativeSelectorCache(expr, true);
      }
    }
    return find(expr, document, null, [elem]).length > 0;
  };
  jQuery2.expr = {
    // Can be adjusted by the user
    cacheLength: 50,
    createPseudo: markFunction,
    match: matchExpr,
    find: {
      ID: function(id, context) {
        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
          var elem = context.getElementById(id);
          return elem ? [elem] : [];
        }
      },
      TAG: function(tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag);
        } else {
          return context.querySelectorAll(tag);
        }
      },
      CLASS: function(className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      }
    },
    relative: {
      ">": { dir: "parentNode", first: true },
      " ": { dir: "parentNode" },
      "+": { dir: "previousSibling", first: true },
      "~": { dir: "previousSibling" }
    },
    preFilter,
    filter: {
      ID: function(id) {
        var attrId = unescapeSelector(id);
        return function(elem) {
          return elem.getAttribute("id") === attrId;
        };
      },
      TAG: function(nodeNameSelector) {
        var expectedNodeName = unescapeSelector(nodeNameSelector).toLowerCase();
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
          var result = jQuery2.attr(elem, name);
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
              outerCache = parent[jQuery2.expando] || (parent[jQuery2.expando] = {});
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
                outerCache = elem[jQuery2.expando] || (elem[jQuery2.expando] = {});
                cache = outerCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex;
              }
              if (diff === false) {
                while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                  if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                    if (useCache) {
                      outerCache = node[jQuery2.expando] || (node[jQuery2.expando] = {});
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
        var fn = jQuery2.expr.pseudos[pseudo] || jQuery2.expr.setFilters[pseudo.toLowerCase()] || selectorError("unsupported pseudo: " + pseudo);
        if (fn[jQuery2.expando]) {
          return fn(argument);
        }
        return fn;
      }
    },
    pseudos: {
      // Potentially complex pseudos
      not: markFunction(function(selector) {
        var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
        return matcher[jQuery2.expando] ? markFunction(function(seed, matches2, _context, xml) {
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
        text = unescapeSelector(text);
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
          selectorError("unsupported lang: " + lang);
        }
        lang = unescapeSelector(lang).toLowerCase();
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
        return elem === documentElement;
      },
      focus: function(elem) {
        return elem === document.activeElement && document.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
      },
      // Boolean properties
      enabled: createDisabledPseudo(false),
      disabled: createDisabledPseudo(true),
      checked: function(elem) {
        return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
      },
      selected: function(elem) {
        if (isIE && elem.parentNode) {
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
        return !jQuery2.expr.pseudos.empty(elem);
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
        return nodeName(elem, "input") && elem.type === "text";
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
  jQuery2.expr.pseudos.nth = jQuery2.expr.pseudos.eq;
  for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
    jQuery2.expr.pseudos[i] = createInputPseudo(i);
  }
  for (i in { submit: true, reset: true }) {
    jQuery2.expr.pseudos[i] = createButtonPseudo(i);
  }
  function setFilters() {
  }
  setFilters.prototype = jQuery2.expr.filters = jQuery2.expr.pseudos;
  jQuery2.expr.setFilters = new setFilters();
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
              outerCache = elem[jQuery2.expando] || (elem[jQuery2.expando] = {});
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
  function setMatcher(preFilter2, selector, matcher, postFilter, postFinder, postSelector) {
    if (postFilter && !postFilter[jQuery2.expando]) {
      postFilter = setMatcher(postFilter);
    }
    if (postFinder && !postFinder[jQuery2.expando]) {
      postFinder = setMatcher(postFinder, postSelector);
    }
    return markFunction(function(seed, results, context, xml) {
      var temp, i2, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
        selector || "*",
        context.nodeType ? [context] : context,
        []
      ), matcherIn = preFilter2 && (seed || !selector) ? condense(elems, preMap, preFilter2, context, xml) : elems;
      if (matcher) {
        matcherOut = postFinder || (seed ? preFilter2 : preexisting || postFilter) ? (
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
        if (postFinder || preFilter2) {
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
          push.apply(results, matcherOut);
        }
      }
    });
  }
  function matcherFromTokens(tokens) {
    var checkContext, matcher, j, len = tokens.length, leadingRelative = jQuery2.expr.relative[tokens[0].type], implicitRelative = leadingRelative || jQuery2.expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
      return elem === checkContext;
    }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
      return indexOf.call(checkContext, elem) > -1;
    }, implicitRelative, true), matchers = [function(elem, context, xml) {
      var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
      checkContext = null;
      return ret;
    }];
    for (; i2 < len; i2++) {
      if (matcher = jQuery2.expr.relative[tokens[i2].type]) {
        matchers = [addCombinator(elementMatcher(matchers), matcher)];
      } else {
        matcher = jQuery2.expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
        if (matcher[jQuery2.expando]) {
          j = ++i2;
          for (; j < len; j++) {
            if (jQuery2.expr.relative[tokens[j].type]) {
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
      var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && jQuery2.expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1;
      if (outermost) {
        outermostContext = context == document || context || outermost;
      }
      for (; (elem = elems[i2]) != null; i2++) {
        if (byElement && elem) {
          j = 0;
          if (!context && elem.ownerDocument != document) {
            setDocument(elem);
            xml = !documentIsHTML;
          }
          while (matcher = elementMatchers[j++]) {
            if (matcher(elem, context || document, xml)) {
              push.call(results, elem);
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
        push.apply(results, setMatched);
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
        if (cached[jQuery2.expando]) {
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
      if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && jQuery2.expr.relative[tokens[1].type]) {
        context = (jQuery2.expr.find.ID(
          unescapeSelector(token.matches[0]),
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
        if (jQuery2.expr.relative[type = token.type]) {
          break;
        }
        if (find2 = jQuery2.expr.find[type]) {
          if (seed = find2(
            unescapeSelector(token.matches[0]),
            rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
          )) {
            tokens.splice(i2, 1);
            selector = seed.length && toSelector(tokens);
            if (!selector) {
              push.apply(results, seed);
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
  setDocument();
  jQuery2.find = find;
  find.compile = compile;
  find.select = select;
  find.setDocument = setDocument;
  find.tokenize = tokenize;
  function dir(elem, dir2, until) {
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
  }
  function siblings(n, elem) {
    var matched = [];
    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }
    return matched;
  }
  var rneedsContext = jQuery2.expr.match.needsContext;
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function isObviousHtml(input) {
    return input[0] === "<" && input[input.length - 1] === ">" && input.length >= 3;
  }
  function winnow(elements, qualifier, not) {
    if (typeof qualifier === "function") {
      return jQuery2.grep(elements, function(elem, i2) {
        return !!qualifier.call(elem, i2, elem) !== not;
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
      var i2, ret, len = this.length, self = this;
      if (typeof selector !== "string") {
        return this.pushStack(jQuery2(selector).filter(function() {
          for (i2 = 0; i2 < len; i2++) {
            if (jQuery2.contains(self[i2], this)) {
              return true;
            }
          }
        }));
      }
      ret = this.pushStack([]);
      for (i2 = 0; i2 < len; i2++) {
        jQuery2.find(selector, self[i2], ret);
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
  var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery2.fn.init = function(selector, context) {
    var match, elem;
    if (!selector) {
      return this;
    }
    if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this;
    } else if (typeof selector === "function") {
      return rootjQuery.ready !== void 0 ? rootjQuery.ready(selector) : (
        // Execute immediately if ready is not present
        selector(jQuery2)
      );
    } else {
      match = selector + "";
      if (isObviousHtml(match)) {
        match = [null, selector, null];
      } else if (typeof selector === "string") {
        match = rquickExpr.exec(selector);
      } else {
        return jQuery2.makeArray(selector, this);
      }
      if (match && (match[1] || !context)) {
        if (match[1]) {
          context = context instanceof jQuery2 ? context[0] : context;
          jQuery2.merge(this, jQuery2.parseHTML(
            match[1],
            context && context.nodeType ? context.ownerDocument || context : document$1,
            true
          ));
          if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context)) {
            for (match in context) {
              if (typeof this[match] === "function") {
                this[match](context[match]);
              } else {
                this.attr(match, context[match]);
              }
            }
          }
          return this;
        } else {
          elem = document$1.getElementById(match[2]);
          if (elem) {
            this[0] = elem;
            this.length = 1;
          }
          return this;
        }
      } else if (!context || context.jquery) {
        return (context || rootjQuery).find(selector);
      } else {
        return this.constructor(context).find(selector);
      }
    }
  };
  init.prototype = jQuery2.fn;
  rootjQuery = jQuery2(document$1);
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
        var i2 = 0;
        for (; i2 < l; i2++) {
          if (jQuery2.contains(this, targets[i2])) {
            return true;
          }
        }
      });
    },
    closest: function(selectors, context) {
      var cur, i2 = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery2(selectors);
      if (!rneedsContext.test(selectors)) {
        for (; i2 < l; i2++) {
          for (cur = this[i2]; cur && cur !== context; cur = cur.parentNode) {
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
              if (typeof arg === "function") {
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
      if (value && typeof (method = value.promise) === "function") {
        method.call(value).done(resolve).fail(reject);
      } else if (value && typeof (method = value.then) === "function") {
        method.call(value, resolve, reject);
      } else {
        resolve.apply(void 0, [value].slice(noValue));
      }
    } catch (value2) {
      reject(value2);
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
        catch: function(fn) {
          return promise.then(null, fn);
        },
        // Keep pipe for back-compat
        pipe: function() {
          var fns = arguments;
          return jQuery2.Deferred(function(newDefer) {
            jQuery2.each(tuples, function(_i, tuple) {
              var fn = typeof fns[tuple[4]] === "function" && fns[tuple[4]];
              deferred[tuple[1]](function() {
                var returned = fn && fn.apply(this, arguments);
                if (returned && typeof returned.promise === "function") {
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
                if (typeof then === "function") {
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
                typeof onProgress === "function" ? onProgress : Identity,
                newDefer.notifyWith
              )
            );
            tuples[1][3].add(
              resolve(
                0,
                newDefer,
                typeof onFulfilled === "function" ? onFulfilled : Identity
              )
            );
            tuples[2][3].add(
              resolve(
                0,
                newDefer,
                typeof onRejected === "function" ? onRejected : Thrower
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
      jQuery2.each(tuples, function(i2, tuple) {
        var list = tuple[2], stateString = tuple[5];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(
            function() {
              state = stateString;
            },
            // rejected_callbacks.disable
            // fulfilled_callbacks.disable
            tuples[3 - i2][2].disable,
            // rejected_handlers.disable
            // fulfilled_handlers.disable
            tuples[3 - i2][3].disable,
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
      var remaining = arguments.length, i2 = remaining, resolveContexts = Array(i2), resolveValues = slice.call(arguments), primary = jQuery2.Deferred(), updateFunc = function(i3) {
        return function(value) {
          resolveContexts[i3] = this;
          resolveValues[i3] = arguments.length > 1 ? slice.call(arguments) : value;
          if (!--remaining) {
            primary.resolveWith(resolveContexts, resolveValues);
          }
        };
      };
      if (remaining <= 1) {
        adoptValue(
          singleValue,
          primary.done(updateFunc(i2)).resolve,
          primary.reject,
          !remaining
        );
        if (primary.state() === "pending" || typeof (resolveValues[i2] && resolveValues[i2].then) === "function") {
          return primary.then();
        }
      }
      while (i2--) {
        adoptValue(resolveValues[i2], updateFunc(i2), primary.reject);
      }
      return primary.promise();
    }
  });
  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  jQuery2.Deferred.exceptionHook = function(error, asyncError) {
    if (error && rerrorNames.test(error.name)) {
      window2.console.warn(
        "jQuery.Deferred exception",
        error,
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
      readyList.resolveWith(document$1, [jQuery2]);
    }
  });
  jQuery2.ready.then = readyList.then;
  function completed() {
    document$1.removeEventListener("DOMContentLoaded", completed);
    window2.removeEventListener("load", completed);
    jQuery2.ready();
  }
  if (document$1.readyState !== "loading") {
    window2.setTimeout(jQuery2.ready);
  } else {
    document$1.addEventListener("DOMContentLoaded", completed);
    window2.addEventListener("load", completed);
  }
  var rdashAlpha = /-([a-z])/g;
  function fcamelCase(_all, letter) {
    return letter.toUpperCase();
  }
  function camelCase(string) {
    return string.replace(rdashAlpha, fcamelCase);
  }
  function acceptData(owner) {
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  }
  function Data() {
    this.expando = jQuery2.expando + Data.uid++;
  }
  Data.uid = 1;
  Data.prototype = {
    cache: function(owner) {
      var value = owner[this.expando];
      if (!value) {
        value = /* @__PURE__ */ Object.create(null);
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
      return value;
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
      var i2, cache = owner[this.expando];
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
        i2 = key.length;
        while (i2--) {
          delete cache[key[i2]];
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
      var i2, name, data, elem = this[0], attrs = elem && elem.attributes;
      if (key === void 0) {
        if (this.length) {
          data = dataUser.get(elem);
          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i2 = attrs.length;
            while (i2--) {
              if (attrs[i2]) {
                name = attrs[i2].name;
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
            queue = dataPriv.set(elem, type, jQuery2.makeArray(data));
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
      return dataPriv.get(elem, key) || dataPriv.set(elem, key, {
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
      var tmp, count = 1, defer = jQuery2.Deferred(), elements = this, i2 = this.length, resolve = function() {
        if (!--count) {
          defer.resolveWith(elements, [elements]);
        }
      };
      if (typeof type !== "string") {
        obj = type;
        type = void 0;
      }
      type = type || "fx";
      while (i2--) {
        tmp = dataPriv.get(elements[i2], type + "queueHooks");
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
  function isHiddenWithinTree(elem, el) {
    elem = el || elem;
    return elem.style.display === "none" || elem.style.display === "" && jQuery2.css(elem, "display") === "none";
  }
  var ralphaStart = /^[a-z]/, rautoPx = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
  function isAutoPx(prop) {
    return ralphaStart.test(prop) && rautoPx.test(prop[0].toUpperCase() + prop.slice(1));
  }
  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
      return tween.cur();
    } : function() {
      return jQuery2.css(elem, prop, "");
    }, initial = currentValue(), unit = valueParts && valueParts[3] || (isAutoPx(prop) ? "px" : ""), initialInUnit = elem.nodeType && (!isAutoPx(prop) || unit !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem, prop));
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
  var rmsPrefix = /^-ms-/;
  function cssCamelCase(string) {
    return camelCase(string.replace(rmsPrefix, "ms-"));
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
  var isAttached = function(elem) {
    return jQuery2.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
  }, composed = { composed: true };
  if (!documentElement$1.getRootNode) {
    isAttached = function(elem) {
      return jQuery2.contains(elem.ownerDocument, elem);
    };
  }
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var wrapMap = {
    // Table parts need to be wrapped with `<table>` or they're
    // stripped to their contents when put in a div.
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do, so we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: ["table"],
    col: ["colgroup", "table"],
    tr: ["tbody", "table"],
    td: ["tr", "tbody", "table"]
  };
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
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
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
  function setGlobalEval(elems, refElements) {
    var i2 = 0, l = elems.length;
    for (; i2 < l; i2++) {
      dataPriv.set(
        elems[i2],
        "globalEval",
        !refElements || dataPriv.get(refElements[i2], "globalEval")
      );
    }
  }
  var rhtml = /<|&#?\w+;/;
  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i2 = 0, l = elems.length;
    for (; i2 < l; i2++) {
      elem = elems[i2];
      if (elem || elem === 0) {
        if (toType(elem) === "object" && (elem.nodeType || isArrayLike(elem))) {
          jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem));
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div"));
          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || arr;
          j = wrap.length;
          while (--j > -1) {
            tmp = tmp.appendChild(context.createElement(wrap[j]));
          }
          tmp.innerHTML = jQuery2.htmlPrefilter(elem);
          jQuery2.merge(nodes, tmp.childNodes);
          tmp = fragment.firstChild;
          tmp.textContent = "";
        }
      }
    }
    fragment.textContent = "";
    i2 = 0;
    while (elem = nodes[i2++]) {
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
  function domManip(collection, args, callback, ignored) {
    args = flat(args);
    var fragment, first, scripts, hasScripts, node, doc, i2 = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = typeof value === "function";
    if (valueIsFunction) {
      return collection.each(function(index) {
        var self = collection.eq(index);
        args[0] = value.call(this, index, self.html());
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
        for (; i2 < l; i2++) {
          node = fragment;
          if (i2 !== iNoClone) {
            node = jQuery2.clone(node, true, true);
            if (hasScripts) {
              jQuery2.merge(scripts, getAll(node, "script"));
            }
          }
          callback.call(collection[i2], node, i2);
        }
        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument;
          jQuery2.map(scripts, restoreScript);
          for (i2 = 0; i2 < hasScripts; i2++) {
            node = scripts[i2];
            if (rscriptType.test(node.type || "") && !dataPriv.get(node, "globalEval") && jQuery2.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                if (jQuery2._evalUrl && !node.noModule) {
                  jQuery2._evalUrl(node.src, {
                    nonce: node.nonce,
                    crossOrigin: node.crossOrigin
                  }, doc);
                }
              } else {
                DOMEval(node.textContent, node, doc);
              }
            }
          }
        }
      }
    }
    return collection;
  }
  var rcheckableType = /^(?:checkbox|radio)$/i;
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
        jQuery2.find.matchesSelector(documentElement$1, selector);
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
      var i2, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery2.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery2.event.special[event.type] || {};
      args[0] = event;
      for (i2 = 1; i2 < arguments.length; i2++) {
        args[i2] = arguments[i2];
      }
      event.delegateTarget = this;
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }
      handlerQueue = jQuery2.event.handlers.call(this, event, handlers);
      i2 = 0;
      while ((matched = handlerQueue[i2++]) && !event.isPropagationStopped()) {
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
      var i2, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
      if (delegateCount && // Support: Firefox <=42 - 66+
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11+
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};
            for (i2 = 0; i2 < delegateCount; i2++) {
              handleObj = handlers[i2];
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
        get: typeof hook === "function" ? function() {
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
    special: jQuery2.extend(/* @__PURE__ */ Object.create(null), {
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
    })
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
          if (!saved.length) {
            saved = slice.call(arguments);
            dataPriv.set(this, type, saved);
            this[type]();
            result = dataPriv.get(this, type);
            dataPriv.set(this, type, false);
            if (saved !== result) {
              event.stopImmediatePropagation();
              event.preventDefault();
              return result && result.value;
            }
          } else if ((jQuery2.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          }
        } else if (saved.length) {
          dataPriv.set(this, type, {
            value: jQuery2.event.trigger(
              saved[0],
              saved.slice(1),
              this
            )
          });
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
      this.isDefaultPrevented = src.defaultPrevented ? returnTrue : returnFalse;
      this.target = src.target;
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
      var event = jQuery2.event.fix(nativeEvent);
      event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
      event.isSimulated = true;
      if (event.target === event.currentTarget) {
        dataPriv.get(this, "handle")(event);
      }
    }
    jQuery2.event.special[type] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function() {
        leverageNative(this, type, true);
        if (isIE) {
          this.addEventListener(delegateType, focusMappedHandler);
        } else {
          return false;
        }
      },
      trigger: function() {
        leverageNative(this, type);
        return true;
      },
      teardown: function() {
        if (isIE) {
          this.removeEventListener(delegateType, focusMappedHandler);
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
  var rnoInnerhtml = /<script|<style|<link/i;
  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery2(elem).children("tbody")[0] || elem;
    }
    return elem;
  }
  function cloneCopyEvent(src, dest) {
    var type, i2, l, events = dataPriv.get(src, "events");
    if (dest.nodeType !== 1) {
      return;
    }
    if (events) {
      dataPriv.remove(dest, "handle events");
      for (type in events) {
        for (i2 = 0, l = events[type].length; i2 < l; i2++) {
          jQuery2.event.add(dest, type, events[type][i2]);
        }
      }
    }
    if (dataUser.hasData(src)) {
      dataUser.set(dest, jQuery2.extend({}, dataUser.get(src)));
    }
  }
  function remove(elem, selector, keepData) {
    var node, nodes = selector ? jQuery2.filter(selector, elem) : elem, i2 = 0;
    for (; (node = nodes[i2]) != null; i2++) {
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
      var i2, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
      if (isIE && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery2.isXMLDoc(elem)) {
        destElements = getAll(clone);
        srcElements = getAll(elem);
        for (i2 = 0, l = srcElements.length; i2 < l; i2++) {
          if (nodeName(destElements[i2], "textarea")) {
            destElements[i2].defaultValue = srcElements[i2].defaultValue;
          }
        }
      }
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);
          for (i2 = 0, l = srcElements.length; i2 < l; i2++) {
            cloneCopyEvent(srcElements[i2], destElements[i2]);
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
      var data, elem, type, special = jQuery2.event.special, i2 = 0;
      for (; (elem = elems[i2]) !== void 0; i2++) {
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
      var elem, i2 = 0;
      for (; (elem = this[i2]) != null; i2++) {
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
        var elem = this[0] || {}, i2 = 0, l = this.length;
        if (value2 === void 0 && elem.nodeType === 1) {
          return elem.innerHTML;
        }
        if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
          value2 = jQuery2.htmlPrefilter(value2);
          try {
            for (; i2 < l; i2++) {
              elem = this[i2] || {};
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
      var elems, ret = [], insert = jQuery2(selector), last = insert.length - 1, i2 = 0;
      for (; i2 <= last; i2++) {
        elems = i2 === last ? this : this.clone(true);
        jQuery2(insert[i2])[original](elems);
        push.apply(ret, elems);
      }
      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
  var rcustomProp = /^--/;
  function getStyles(elem) {
    var view = elem.ownerDocument.defaultView;
    if (!view) {
      view = window2;
    }
    return view.getComputedStyle(elem);
  }
  function swap(elem, options, callback) {
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
  }
  function curCSS(elem, name, computed) {
    var ret, isCustomProp = rcustomProp.test(name);
    computed = computed || getStyles(elem);
    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];
      if (isCustomProp && ret) {
        ret = ret.replace(rtrimCSS, "$1") || void 0;
      }
      if (ret === "" && !isAttached(elem)) {
        ret = jQuery2.style(elem, name);
      }
    }
    return ret !== void 0 ? (
      // Support: IE <=9 - 11+
      // IE returns zIndex value as an integer.
      ret + ""
    ) : ret;
  }
  var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document$1.createElement("div").style, vendorProps = {};
  function vendorPropName(name) {
    var capName = name[0].toUpperCase() + name.slice(1), i2 = cssPrefixes.length;
    while (i2--) {
      name = cssPrefixes[i2] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  }
  function finalPropName(name) {
    var final = vendorProps[name];
    if (final) {
      return final;
    }
    if (name in emptyStyle) {
      return name;
    }
    return vendorProps[name] = vendorPropName(name) || name;
  }
  (function() {
    var reliableTrDimensionsVal, div = document$1.createElement("div");
    if (!div.style) {
      return;
    }
    support.reliableTrDimensions = function() {
      var table, tr, trStyle;
      if (reliableTrDimensionsVal == null) {
        table = document$1.createElement("table");
        tr = document$1.createElement("tr");
        table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
        tr.style.cssText = "box-sizing:content-box;border:1px solid";
        tr.style.height = "1px";
        div.style.height = "9px";
        div.style.display = "block";
        documentElement$1.appendChild(table).appendChild(tr).appendChild(div);
        if (table.offsetWidth === 0) {
          documentElement$1.removeChild(table);
          return;
        }
        trStyle = window2.getComputedStyle(tr);
        reliableTrDimensionsVal = Math.round(parseFloat(trStyle.height)) + Math.round(parseFloat(trStyle.borderTopWidth)) + Math.round(parseFloat(trStyle.borderBottomWidth)) === tr.offsetHeight;
        documentElement$1.removeChild(table);
      }
      return reliableTrDimensionsVal;
    };
  })();
  var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  };
  function setPositiveNumber(_elem, value, subtract) {
    var matches2 = rcssNum.exec(value);
    return matches2 ? (
      // Guard against undefined "subtract", e.g., when used as in cssHooks
      Math.max(0, matches2[2] - (subtract || 0)) + (matches2[3] || "px")
    ) : value;
  }
  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i2 = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }
    for (; i2 < 4; i2 += 2) {
      if (box === "margin") {
        marginDelta += jQuery2.css(elem, box + cssExpand[i2], true, styles);
      }
      if (!isBorderBox) {
        delta += jQuery2.css(elem, "padding" + cssExpand[i2], true, styles);
        if (box !== "padding") {
          delta += jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
        } else {
          extra += jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
        }
      } else {
        if (box === "content") {
          delta -= jQuery2.css(elem, "padding" + cssExpand[i2], true, styles);
        }
        if (box !== "margin") {
          delta -= jQuery2.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
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
    var styles = getStyles(elem), boxSizingNeeded = isIE || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }
      val = "auto";
    }
    if (
      // Fall back to offsetWidth/offsetHeight when value is "auto"
      // This happens for inline elements with no explicit setting (gh-3571)
      (val === "auto" || // Support: IE 9 - 11+
      // Use offsetWidth/offsetHeight for when box sizing is unreliable.
      // In those cases, the computed value can be trusted to be border-box.
      isIE && isBorderBox || // Support: IE 10 - 11+
      // IE misreports `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Support: Firefox 70+
      // Firefox includes border widths
      // in computed dimensions for table rows. (gh-4529)
      !support.reliableTrDimensions() && nodeName(elem, "tr")) && // Make sure the element is visible & connected
      elem.getClientRects().length
    ) {
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
    cssHooks: {},
    // Get and set the style property on a DOM Node
    style: function(elem, name, value, extra) {
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      }
      var ret, type, hooks, origName = cssCamelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
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
        if (type === "number") {
          value += ret && ret[3] || (isAutoPx(origName) ? "px" : "");
        }
        if (isIE && value === "" && name.indexOf("background") === 0) {
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
      var val, num, hooks, origName = cssCamelCase(name), isCustomProp = rcustomProp.test(name);
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
          return rdisplayswap.test(jQuery2.css(elem, "display")) && // Support: Safari <=8 - 12+, Chrome <=73+
          // Table columns in WebKit/Blink have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11+
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function(elem, value, extra) {
        var matches2, styles = getStyles(elem), isBorderBox = extra && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
          elem,
          dimension,
          extra,
          isBorderBox,
          styles
        ) : 0;
        if (subtract && (matches2 = rcssNum.exec(value)) && (matches2[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = jQuery2.css(elem, dimension);
        }
        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery2.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(prefix, suffix) {
    jQuery2.cssHooks[prefix + suffix] = {
      expand: function(value) {
        var i2 = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
        for (; i2 < 4; i2++) {
          expanded[prefix + cssExpand[i2] + suffix] = parts[i2] || parts[i2 - 2] || parts[0];
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
        var styles, len, map = {}, i2 = 0;
        if (Array.isArray(name2)) {
          styles = getStyles(elem);
          len = name2.length;
          for (; i2 < len; i2++) {
            map[name2[i2]] = jQuery2.css(elem, name2[i2], false, styles);
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
      this.unit = unit || (isAutoPx(prop) ? "px" : "");
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
      if (document$1.hidden === false && window2.requestAnimationFrame) {
        window2.requestAnimationFrame(schedule);
      } else {
        window2.setTimeout(schedule, 13);
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
    var which, i2 = 0, attrs = { height: type };
    includeWidth = includeWidth ? 1 : 0;
    for (; i2 < 4; i2 += 2 - includeWidth) {
      which = cssExpand[i2];
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
          dataShow = dataPriv.set(elem, "fxshow", { display: restoreDisplay });
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
      name = cssCamelCase(index);
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
      var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), percent = 1 - (remaining / animation.duration || 0), index2 = 0, length2 = animation.tweens.length;
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
        if (typeof result.stop === "function") {
          jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }
        return result;
      }
    }
    jQuery2.map(props, createTween, animation);
    if (typeof animation.opts.start === "function") {
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
      if (typeof props === "function") {
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
      complete: fn || easing || typeof speed === "function" && speed,
      duration: speed,
      easing: fn && easing || easing && typeof easing !== "function" && easing
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
      if (typeof opt.old === "function") {
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
    var timer, i2 = 0, timers = jQuery2.timers;
    fxNow = Date.now();
    for (; i2 < timers.length; i2++) {
      timer = timers[i2];
      if (!timer() && timers[i2] === timer) {
        timers.splice(i2--, 1);
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
          var tabindex = elem.getAttribute("tabindex");
          if (tabindex) {
            return parseInt(tabindex, 10);
          }
          if (rfocusable.test(elem.nodeName) || // href-less anchor's `tabIndex` property value is `0` and
          // the `tabindex` attribute value: `null`. We want `-1`.
          rclickable.test(elem.nodeName) && elem.href) {
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
  if (isIE) {
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
      var classNames, cur, curValue, className, i2, finalValue;
      if (typeof value === "function") {
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
            for (i2 = 0; i2 < classNames.length; i2++) {
              className = classNames[i2];
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
      var classNames, cur, curValue, className, i2, finalValue;
      if (typeof value === "function") {
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
            for (i2 = 0; i2 < classNames.length; i2++) {
              className = classNames[i2];
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
      var classNames, className, i2, self;
      if (typeof value === "function") {
        return this.each(function(i3) {
          jQuery2(this).toggleClass(
            value.call(this, i3, getClass(this), stateVal),
            stateVal
          );
        });
      }
      if (typeof stateVal === "boolean") {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }
      classNames = classesToArray(value);
      if (classNames.length) {
        return this.each(function() {
          self = jQuery2(this);
          for (i2 = 0; i2 < classNames.length; i2++) {
            className = classNames[i2];
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          }
        });
      }
      return this;
    },
    hasClass: function(selector) {
      var className, elem, i2 = 0;
      className = " " + selector + " ";
      while (elem = this[i2++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }
      return false;
    }
  });
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
          return ret == null ? "" : ret;
        }
        return;
      }
      valueIsFunction = typeof value === "function";
      return this.each(function(i2) {
        var val;
        if (this.nodeType !== 1) {
          return;
        }
        if (valueIsFunction) {
          val = value.call(this, i2, jQuery2(this).val());
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
      select: {
        get: function(elem) {
          var value, option, i2, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
          if (index < 0) {
            i2 = max;
          } else {
            i2 = one ? index : 0;
          }
          for (; i2 < max; i2++) {
            option = options[i2];
            if (option.selected && // Don't return options that are disabled or in a disabled optgroup
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
          var optionSet, option, options = elem.options, values = jQuery2.makeArray(value), i2 = options.length;
          while (i2--) {
            option = options[i2];
            if (option.selected = jQuery2.inArray(jQuery2(option).val(), values) > -1) {
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
  if (isIE) {
    jQuery2.valHooks.option = {
      get: function(elem) {
        var val = elem.getAttribute("value");
        return val != null ? val : (
          // Support: IE <=10 - 11+
          // option.text throws exceptions (trac-14686, trac-14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse(jQuery2.text(elem))
        );
      }
    };
  }
  jQuery2.each(["radio", "checkbox"], function() {
    jQuery2.valHooks[this] = {
      set: function(elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery2.inArray(jQuery2(elem).val(), value) > -1;
        }
      }
    };
  });
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
    e.stopPropagation();
  };
  jQuery2.extend(jQuery2.event, {
    trigger: function(event, data, elem, onlyHandlers) {
      var i2, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document$1], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document$1;
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
        if (tmp === (elem.ownerDocument || document$1)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
        }
      }
      i2 = 0;
      while ((cur = eventPath[i2++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i2 > 1 ? bubbleType : special.bindType || type;
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
          if (ontype && typeof elem[type] === "function" && !isWindow(elem)) {
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
  var location = window2.location;
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
  var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
  function buildParams(prefix, obj, traditional, add) {
    var name;
    if (Array.isArray(obj)) {
      jQuery2.each(obj, function(i2, v) {
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          buildParams(
            prefix + "[" + (typeof v === "object" && v != null ? i2 : "") + "]",
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
      var value = typeof valueOrFunction === "function" ? valueOrFunction() : valueOrFunction;
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
  var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document$1.createElement("a");
  originAnchor.href = location.href;
  function addToPrefiltersOrTransports(structure) {
    return function(dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }
      var dataType, i2 = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
      if (typeof func === "function") {
        while (dataType = dataTypes[i2++]) {
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
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
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
      var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i2, uncached, s = jQuery2.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery2(callbackContext) : jQuery2.event, deferred = jQuery2.Deferred(), completeDeferred = jQuery2.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
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
          done2(0, finalText);
          return this;
        }
      };
      deferred.promise(jqXHR);
      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
      s.type = options.method || options.type || s.method || s.type;
      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
      if (s.crossDomain == null) {
        urlAnchor = document$1.createElement("a");
        try {
          urlAnchor.href = s.url;
          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          s.crossDomain = true;
        }
      }
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery2.param(s.data, s.traditional);
      }
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
      for (i2 in s.headers) {
        jqXHR.setRequestHeader(i2, s.headers[i2]);
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
        done2(-1, "No Transport");
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
          transport.send(requestHeaders, done2);
        } catch (e) {
          if (completed2) {
            throw e;
          }
          done2(-1, e);
        }
      }
      function done2(status, nativeStatusText, responses, headers) {
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
      if (typeof data === "function" || data === null) {
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
    var i2;
    for (i2 in s.headers) {
      if (i2.toLowerCase() === "content-type") {
        s.contentType = s.headers[i2] || "";
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
      scriptAttrs: options.crossOrigin ? { "crossOrigin": options.crossOrigin } : void 0,
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
        if (typeof html === "function") {
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
      if (typeof html === "function") {
        return this.each(function(i2) {
          jQuery2(this).wrapInner(html.call(this, i2));
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
      var htmlIsFunction = typeof html === "function";
      return this.each(function(i2) {
        jQuery2(this).wrapAll(htmlIsFunction ? html.call(this, i2) : html);
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
    return new window2.XMLHttpRequest();
  };
  var xhrSuccessStatus = {
    // File protocol always yields status code 0, assume 200
    0: 200
  };
  jQuery2.ajaxTransport(function(options) {
    var callback;
    return {
      send: function(headers, complete) {
        var i2, xhr = options.xhr();
        xhr.open(
          options.type,
          options.url,
          options.async,
          options.username,
          options.password
        );
        if (options.xhrFields) {
          for (i2 in options.xhrFields) {
            xhr[i2] = options.xhrFields[i2];
          }
        }
        if (options.mimeType && xhr.overrideMimeType) {
          xhr.overrideMimeType(options.mimeType);
        }
        if (!options.crossDomain && !headers["X-Requested-With"]) {
          headers["X-Requested-With"] = "XMLHttpRequest";
        }
        for (i2 in headers) {
          xhr.setRequestHeader(i2, headers[i2]);
        }
        callback = function(type) {
          return function() {
            if (callback) {
              callback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = null;
              if (type === "abort") {
                xhr.abort();
              } else if (type === "error") {
                complete(
                  // File: protocol always yields status 0; see trac-8605, trac-14207
                  xhr.status,
                  xhr.statusText
                );
              } else {
                complete(
                  xhrSuccessStatus[xhr.status] || xhr.status,
                  xhr.statusText,
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (xhr.responseType || "text") === "text" ? { text: xhr.responseText } : { binary: xhr.response },
                  xhr.getAllResponseHeaders()
                );
              }
            }
          };
        };
        xhr.onload = callback();
        xhr.onabort = xhr.onerror = xhr.ontimeout = callback("error");
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
  });
  function canUseScriptTag(s) {
    return s.scriptAttrs || !s.headers && (s.crossDomain || // When dealing with JSONP (`s.dataTypes` include "json" then)
    // don't use a script tag so that error responses still may have
    // `responseJSON` set. Continue using a script tag for JSONP requests that:
    //   * are cross-domain as AJAX requests won't work without a CORS setup
    //   * have `scriptAttrs` set as that's a script-only functionality
    // Note that this means JSONP requests violate strict CSP script-src settings.
    // A proper solution is to migrate from using JSONP to a CORS setup.
    s.async && jQuery2.inArray("json", s.dataTypes) < 0);
  }
  jQuery2.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
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
    if (canUseScriptTag(s)) {
      s.type = "GET";
    }
  });
  jQuery2.ajaxTransport("script", function(s) {
    if (canUseScriptTag(s)) {
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
          document$1.head.appendChild(script[0]);
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
  jQuery2.ajaxPrefilter("jsonp", function(s, originalSettings, jqXHR) {
    var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
    callbackName = s.jsonpCallback = typeof s.jsonpCallback === "function" ? s.jsonpCallback() : s.jsonpCallback;
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
      if (responseContainer && typeof overwritten === "function") {
        overwritten(responseContainer[0]);
      }
      responseContainer = overwritten = void 0;
    });
    return "script";
  });
  jQuery2.ajaxPrefilter(function(s, origOptions) {
    if (typeof s.data !== "string" && !jQuery2.isPlainObject(s.data) && !Array.isArray(s.data) && // Don't disable data processing if explicitly set by the user.
    !("processData" in origOptions)) {
      s.processData = false;
    }
    if (s.data instanceof window2.FormData) {
      s.contentType = false;
    }
  });
  jQuery2.parseHTML = function(data, context, keepScripts) {
    if (typeof data !== "string" && !isObviousHtml(data + "")) {
      return [];
    }
    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }
    var base, parsed, scripts;
    if (!context) {
      context = document$1.implementation.createHTMLDocument("");
      base = context.createElement("base");
      base.href = document$1.location.href;
      context.head.appendChild(base);
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
    if (typeof params === "function") {
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
    setOffset: function(elem, options, i2) {
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
      if (typeof options === "function") {
        options = options.call(elem, i2, jQuery2.extend({}, curOffset));
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
        return options === void 0 ? this : this.each(function(i2) {
          jQuery2.offset.setOffset(this, options, i2);
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
        while (offsetParent && offsetParent !== doc.documentElement && jQuery2.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent || doc.documentElement;
        }
        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 && jQuery2.css(offsetParent, "position") !== "static") {
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
        return offsetParent || documentElement$1;
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
  jQuery2.proxy = function(fn, context) {
    var tmp, args, proxy;
    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    }
    if (typeof fn !== "function") {
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
}
var jQuery, jquery_module_default;
var init_jquery_module = __esm({
  "../../../../../../.yarn/berry/cache/jquery-npm-4.0.0-beta.2-e44f8821fa-10c0.zip/node_modules/jquery/dist-module/jquery.module.js"() {
    jQuery = jQueryFactory(window, true);
    jquery_module_default = jQuery;
  }
});

export {
  jquery_module_default,
  jquery_module_exports,
  init_jquery_module
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvanF1ZXJ5LW5wbS00LjAuMC1iZXRhLjItZTQ0Zjg4MjFmYS0xMGMwLnppcC9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QtbW9kdWxlL2pxdWVyeS5tb2R1bGUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIVxuICogalF1ZXJ5IEphdmFTY3JpcHQgTGlicmFyeSB2NC4wLjAtYmV0YS4yXG4gKiBodHRwczovL2pxdWVyeS5jb20vXG4gKlxuICogQ29weXJpZ2h0IE9wZW5KUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBEYXRlOiAyMDI0LTA3LTE3VDEzOjMyWlxuICovXG4vLyBGb3IgRUNNQVNjcmlwdCBtb2R1bGUgZW52aXJvbm1lbnRzIHdoZXJlIGEgcHJvcGVyIGB3aW5kb3dgXG4vLyBpcyBwcmVzZW50LCBleGVjdXRlIHRoZSBmYWN0b3J5IGFuZCBnZXQgalF1ZXJ5LlxuZnVuY3Rpb24galF1ZXJ5RmFjdG9yeSggd2luZG93LCBub0dsb2JhbCApIHtcblxuaWYgKCB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiIHx8ICF3aW5kb3cuZG9jdW1lbnQgKSB7XG5cdHRocm93IG5ldyBFcnJvciggXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIgKTtcbn1cblxudmFyIGFyciA9IFtdO1xuXG52YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbnZhciBzbGljZSA9IGFyci5zbGljZTtcblxuLy8gU3VwcG9ydDogSUUgMTErXG4vLyBJRSBkb2Vzbid0IGhhdmUgQXJyYXkjZmxhdDsgcHJvdmlkZSBhIGZhbGxiYWNrLlxudmFyIGZsYXQgPSBhcnIuZmxhdCA/IGZ1bmN0aW9uKCBhcnJheSApIHtcblx0cmV0dXJuIGFyci5mbGF0LmNhbGwoIGFycmF5ICk7XG59IDogZnVuY3Rpb24oIGFycmF5ICkge1xuXHRyZXR1cm4gYXJyLmNvbmNhdC5hcHBseSggW10sIGFycmF5ICk7XG59O1xuXG52YXIgcHVzaCA9IGFyci5wdXNoO1xuXG52YXIgaW5kZXhPZiA9IGFyci5pbmRleE9mO1xuXG4vLyBbW0NsYXNzXV0gLT4gdHlwZSBwYWlyc1xudmFyIGNsYXNzMnR5cGUgPSB7fTtcblxudmFyIHRvU3RyaW5nID0gY2xhc3MydHlwZS50b1N0cmluZztcblxudmFyIGhhc093biA9IGNsYXNzMnR5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBmblRvU3RyaW5nID0gaGFzT3duLnRvU3RyaW5nO1xuXG52YXIgT2JqZWN0RnVuY3Rpb25TdHJpbmcgPSBmblRvU3RyaW5nLmNhbGwoIE9iamVjdCApO1xuXG4vLyBBbGwgc3VwcG9ydCB0ZXN0cyBhcmUgZGVmaW5lZCBpbiB0aGVpciByZXNwZWN0aXZlIG1vZHVsZXMuXG52YXIgc3VwcG9ydCA9IHt9O1xuXG5mdW5jdGlvbiB0b1R5cGUoIG9iaiApIHtcblx0aWYgKCBvYmogPT0gbnVsbCApIHtcblx0XHRyZXR1cm4gb2JqICsgXCJcIjtcblx0fVxuXG5cdHJldHVybiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiID9cblx0XHRjbGFzczJ0eXBlWyB0b1N0cmluZy5jYWxsKCBvYmogKSBdIHx8IFwib2JqZWN0XCIgOlxuXHRcdHR5cGVvZiBvYmo7XG59XG5cbmZ1bmN0aW9uIGlzV2luZG93KCBvYmogKSB7XG5cdHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmogPT09IG9iai53aW5kb3c7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKCBvYmogKSB7XG5cblx0dmFyIGxlbmd0aCA9ICEhb2JqICYmIG9iai5sZW5ndGgsXG5cdFx0dHlwZSA9IHRvVHlwZSggb2JqICk7XG5cblx0aWYgKCB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIgfHwgaXNXaW5kb3coIG9iaiApICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB0eXBlID09PSBcImFycmF5XCIgfHwgbGVuZ3RoID09PSAwIHx8XG5cdFx0dHlwZW9mIGxlbmd0aCA9PT0gXCJudW1iZXJcIiAmJiBsZW5ndGggPiAwICYmICggbGVuZ3RoIC0gMSApIGluIG9iajtcbn1cblxudmFyIGRvY3VtZW50JDEgPSB3aW5kb3cuZG9jdW1lbnQ7XG5cbnZhciBwcmVzZXJ2ZWRTY3JpcHRBdHRyaWJ1dGVzID0ge1xuXHR0eXBlOiB0cnVlLFxuXHRzcmM6IHRydWUsXG5cdG5vbmNlOiB0cnVlLFxuXHRub01vZHVsZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gRE9NRXZhbCggY29kZSwgbm9kZSwgZG9jICkge1xuXHRkb2MgPSBkb2MgfHwgZG9jdW1lbnQkMTtcblxuXHR2YXIgaSxcblx0XHRzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudCggXCJzY3JpcHRcIiApO1xuXG5cdHNjcmlwdC50ZXh0ID0gY29kZTtcblx0Zm9yICggaSBpbiBwcmVzZXJ2ZWRTY3JpcHRBdHRyaWJ1dGVzICkge1xuXHRcdGlmICggbm9kZSAmJiBub2RlWyBpIF0gKSB7XG5cdFx0XHRzY3JpcHRbIGkgXSA9IG5vZGVbIGkgXTtcblx0XHR9XG5cdH1cblxuXHRpZiAoIGRvYy5oZWFkLmFwcGVuZENoaWxkKCBzY3JpcHQgKS5wYXJlbnROb2RlICkge1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBzY3JpcHQgKTtcblx0fVxufVxuXG52YXIgdmVyc2lvbiA9IFwiNC4wLjAtYmV0YS4yXCIsXG5cblx0cmh0bWxTdWZmaXggPSAvSFRNTCQvaSxcblxuXHQvLyBEZWZpbmUgYSBsb2NhbCBjb3B5IG9mIGpRdWVyeVxuXHRqUXVlcnkgPSBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbnRleHQgKSB7XG5cblx0XHQvLyBUaGUgalF1ZXJ5IG9iamVjdCBpcyBhY3R1YWxseSBqdXN0IHRoZSBpbml0IGNvbnN0cnVjdG9yICdlbmhhbmNlZCdcblx0XHQvLyBOZWVkIGluaXQgaWYgalF1ZXJ5IGlzIGNhbGxlZCAoanVzdCBhbGxvdyBlcnJvciB0byBiZSB0aHJvd24gaWYgbm90IGluY2x1ZGVkKVxuXHRcdHJldHVybiBuZXcgalF1ZXJ5LmZuLmluaXQoIHNlbGVjdG9yLCBjb250ZXh0ICk7XG5cdH07XG5cbmpRdWVyeS5mbiA9IGpRdWVyeS5wcm90b3R5cGUgPSB7XG5cblx0Ly8gVGhlIGN1cnJlbnQgdmVyc2lvbiBvZiBqUXVlcnkgYmVpbmcgdXNlZFxuXHRqcXVlcnk6IHZlcnNpb24sXG5cblx0Y29uc3RydWN0b3I6IGpRdWVyeSxcblxuXHQvLyBUaGUgZGVmYXVsdCBsZW5ndGggb2YgYSBqUXVlcnkgb2JqZWN0IGlzIDBcblx0bGVuZ3RoOiAwLFxuXG5cdHRvQXJyYXk6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzbGljZS5jYWxsKCB0aGlzICk7XG5cdH0sXG5cblx0Ly8gR2V0IHRoZSBOdGggZWxlbWVudCBpbiB0aGUgbWF0Y2hlZCBlbGVtZW50IHNldCBPUlxuXHQvLyBHZXQgdGhlIHdob2xlIG1hdGNoZWQgZWxlbWVudCBzZXQgYXMgYSBjbGVhbiBhcnJheVxuXHRnZXQ6IGZ1bmN0aW9uKCBudW0gKSB7XG5cblx0XHQvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBpbiBhIGNsZWFuIGFycmF5XG5cdFx0aWYgKCBudW0gPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiBzbGljZS5jYWxsKCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIGp1c3QgdGhlIG9uZSBlbGVtZW50IGZyb20gdGhlIHNldFxuXHRcdHJldHVybiBudW0gPCAwID8gdGhpc1sgbnVtICsgdGhpcy5sZW5ndGggXSA6IHRoaXNbIG51bSBdO1xuXHR9LFxuXG5cdC8vIFRha2UgYW4gYXJyYXkgb2YgZWxlbWVudHMgYW5kIHB1c2ggaXQgb250byB0aGUgc3RhY2tcblx0Ly8gKHJldHVybmluZyB0aGUgbmV3IG1hdGNoZWQgZWxlbWVudCBzZXQpXG5cdHB1c2hTdGFjazogZnVuY3Rpb24oIGVsZW1zICkge1xuXG5cdFx0Ly8gQnVpbGQgYSBuZXcgalF1ZXJ5IG1hdGNoZWQgZWxlbWVudCBzZXRcblx0XHR2YXIgcmV0ID0galF1ZXJ5Lm1lcmdlKCB0aGlzLmNvbnN0cnVjdG9yKCksIGVsZW1zICk7XG5cblx0XHQvLyBBZGQgdGhlIG9sZCBvYmplY3Qgb250byB0aGUgc3RhY2sgKGFzIGEgcmVmZXJlbmNlKVxuXHRcdHJldC5wcmV2T2JqZWN0ID0gdGhpcztcblxuXHRcdC8vIFJldHVybiB0aGUgbmV3bHktZm9ybWVkIGVsZW1lbnQgc2V0XG5cdFx0cmV0dXJuIHJldDtcblx0fSxcblxuXHQvLyBFeGVjdXRlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgc2V0LlxuXHRlYWNoOiBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5lYWNoKCB0aGlzLCBjYWxsYmFjayApO1xuXHR9LFxuXG5cdG1hcDogZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5Lm1hcCggdGhpcywgZnVuY3Rpb24oIGVsZW0sIGkgKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbCggZWxlbSwgaSwgZWxlbSApO1xuXHRcdH0gKSApO1xuXHR9LFxuXG5cdHNsaWNlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHNsaWNlLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSApO1xuXHR9LFxuXG5cdGZpcnN0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5lcSggMCApO1xuXHR9LFxuXG5cdGxhc3Q6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmVxKCAtMSApO1xuXHR9LFxuXG5cdGV2ZW46IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5LmdyZXAoIHRoaXMsIGZ1bmN0aW9uKCBfZWxlbSwgaSApIHtcblx0XHRcdHJldHVybiAoIGkgKyAxICkgJSAyO1xuXHRcdH0gKSApO1xuXHR9LFxuXG5cdG9kZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqUXVlcnkuZ3JlcCggdGhpcywgZnVuY3Rpb24oIF9lbGVtLCBpICkge1xuXHRcdFx0cmV0dXJuIGkgJSAyO1xuXHRcdH0gKSApO1xuXHR9LFxuXG5cdGVxOiBmdW5jdGlvbiggaSApIHtcblx0XHR2YXIgbGVuID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRqID0gK2kgKyAoIGkgPCAwID8gbGVuIDogMCApO1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggaiA+PSAwICYmIGogPCBsZW4gPyBbIHRoaXNbIGogXSBdIDogW10gKTtcblx0fSxcblxuXHRlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnByZXZPYmplY3QgfHwgdGhpcy5jb25zdHJ1Y3RvcigpO1xuXHR9XG59O1xuXG5qUXVlcnkuZXh0ZW5kID0galF1ZXJ5LmZuLmV4dGVuZCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgb3B0aW9ucywgbmFtZSwgc3JjLCBjb3B5LCBjb3B5SXNBcnJheSwgY2xvbmUsXG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWyAwIF0gfHwge30sXG5cdFx0aSA9IDEsXG5cdFx0bGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcblx0XHRkZWVwID0gZmFsc2U7XG5cblx0Ly8gSGFuZGxlIGEgZGVlcCBjb3B5IHNpdHVhdGlvblxuXHRpZiAoIHR5cGVvZiB0YXJnZXQgPT09IFwiYm9vbGVhblwiICkge1xuXHRcdGRlZXAgPSB0YXJnZXQ7XG5cblx0XHQvLyBTa2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWyBpIF0gfHwge307XG5cdFx0aSsrO1xuXHR9XG5cblx0Ly8gSGFuZGxlIGNhc2Ugd2hlbiB0YXJnZXQgaXMgYSBzdHJpbmcgb3Igc29tZXRoaW5nIChwb3NzaWJsZSBpbiBkZWVwIGNvcHkpXG5cdGlmICggdHlwZW9mIHRhcmdldCAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdGFyZ2V0ICE9PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHQvLyBFeHRlbmQgalF1ZXJ5IGl0c2VsZiBpZiBvbmx5IG9uZSBhcmd1bWVudCBpcyBwYXNzZWRcblx0aWYgKCBpID09PSBsZW5ndGggKSB7XG5cdFx0dGFyZ2V0ID0gdGhpcztcblx0XHRpLS07XG5cdH1cblxuXHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblxuXHRcdC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcblx0XHRpZiAoICggb3B0aW9ucyA9IGFyZ3VtZW50c1sgaSBdICkgIT0gbnVsbCApIHtcblxuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yICggbmFtZSBpbiBvcHRpb25zICkge1xuXHRcdFx0XHRjb3B5ID0gb3B0aW9uc1sgbmFtZSBdO1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgT2JqZWN0LnByb3RvdHlwZSBwb2xsdXRpb25cblx0XHRcdFx0Ly8gUHJldmVudCBuZXZlci1lbmRpbmcgbG9vcFxuXHRcdFx0XHRpZiAoIG5hbWUgPT09IFwiX19wcm90b19fXCIgfHwgdGFyZ2V0ID09PSBjb3B5ICkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVjdXJzZSBpZiB3ZSdyZSBtZXJnaW5nIHBsYWluIG9iamVjdHMgb3IgYXJyYXlzXG5cdFx0XHRcdGlmICggZGVlcCAmJiBjb3B5ICYmICggalF1ZXJ5LmlzUGxhaW5PYmplY3QoIGNvcHkgKSB8fFxuXHRcdFx0XHRcdCggY29weUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KCBjb3B5ICkgKSApICkge1xuXHRcdFx0XHRcdHNyYyA9IHRhcmdldFsgbmFtZSBdO1xuXG5cdFx0XHRcdFx0Ly8gRW5zdXJlIHByb3BlciB0eXBlIGZvciB0aGUgc291cmNlIHZhbHVlXG5cdFx0XHRcdFx0aWYgKCBjb3B5SXNBcnJheSAmJiAhQXJyYXkuaXNBcnJheSggc3JjICkgKSB7XG5cdFx0XHRcdFx0XHRjbG9uZSA9IFtdO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoICFjb3B5SXNBcnJheSAmJiAhalF1ZXJ5LmlzUGxhaW5PYmplY3QoIHNyYyApICkge1xuXHRcdFx0XHRcdFx0Y2xvbmUgPSB7fTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cblx0XHRcdFx0XHQvLyBOZXZlciBtb3ZlIG9yaWdpbmFsIG9iamVjdHMsIGNsb25lIHRoZW1cblx0XHRcdFx0XHR0YXJnZXRbIG5hbWUgXSA9IGpRdWVyeS5leHRlbmQoIGRlZXAsIGNsb25lLCBjb3B5ICk7XG5cblx0XHRcdFx0Ly8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xuXHRcdFx0XHR9IGVsc2UgaWYgKCBjb3B5ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0dGFyZ2V0WyBuYW1lIF0gPSBjb3B5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3Rcblx0cmV0dXJuIHRhcmdldDtcbn07XG5cbmpRdWVyeS5leHRlbmQoIHtcblxuXHQvLyBVbmlxdWUgZm9yIGVhY2ggY29weSBvZiBqUXVlcnkgb24gdGhlIHBhZ2Vcblx0ZXhwYW5kbzogXCJqUXVlcnlcIiArICggdmVyc2lvbiArIE1hdGgucmFuZG9tKCkgKS5yZXBsYWNlKCAvXFxEL2csIFwiXCIgKSxcblxuXHQvLyBBc3N1bWUgalF1ZXJ5IGlzIHJlYWR5IHdpdGhvdXQgdGhlIHJlYWR5IG1vZHVsZVxuXHRpc1JlYWR5OiB0cnVlLFxuXG5cdGVycm9yOiBmdW5jdGlvbiggbXNnICkge1xuXHRcdHRocm93IG5ldyBFcnJvciggbXNnICk7XG5cdH0sXG5cblx0bm9vcDogZnVuY3Rpb24oKSB7fSxcblxuXHRpc1BsYWluT2JqZWN0OiBmdW5jdGlvbiggb2JqICkge1xuXHRcdHZhciBwcm90bywgQ3RvcjtcblxuXHRcdC8vIERldGVjdCBvYnZpb3VzIG5lZ2F0aXZlc1xuXHRcdC8vIFVzZSB0b1N0cmluZyBpbnN0ZWFkIG9mIGpRdWVyeS50eXBlIHRvIGNhdGNoIGhvc3Qgb2JqZWN0c1xuXHRcdGlmICggIW9iaiB8fCB0b1N0cmluZy5jYWxsKCBvYmogKSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIiApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRwcm90byA9IGdldFByb3RvKCBvYmogKTtcblxuXHRcdC8vIE9iamVjdHMgd2l0aCBubyBwcm90b3R5cGUgKGUuZy4sIGBPYmplY3QuY3JlYXRlKCBudWxsIClgKSBhcmUgcGxhaW5cblx0XHRpZiAoICFwcm90byApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIE9iamVjdHMgd2l0aCBwcm90b3R5cGUgYXJlIHBsYWluIGlmZiB0aGV5IHdlcmUgY29uc3RydWN0ZWQgYnkgYSBnbG9iYWwgT2JqZWN0IGZ1bmN0aW9uXG5cdFx0Q3RvciA9IGhhc093bi5jYWxsKCBwcm90bywgXCJjb25zdHJ1Y3RvclwiICkgJiYgcHJvdG8uY29uc3RydWN0b3I7XG5cdFx0cmV0dXJuIHR5cGVvZiBDdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgZm5Ub1N0cmluZy5jYWxsKCBDdG9yICkgPT09IE9iamVjdEZ1bmN0aW9uU3RyaW5nO1xuXHR9LFxuXG5cdGlzRW1wdHlPYmplY3Q6IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0dmFyIG5hbWU7XG5cblx0XHRmb3IgKCBuYW1lIGluIG9iaiApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0Ly8gRXZhbHVhdGVzIGEgc2NyaXB0IGluIGEgcHJvdmlkZWQgY29udGV4dDsgZmFsbHMgYmFjayB0byB0aGUgZ2xvYmFsIG9uZVxuXHQvLyBpZiBub3Qgc3BlY2lmaWVkLlxuXHRnbG9iYWxFdmFsOiBmdW5jdGlvbiggY29kZSwgb3B0aW9ucywgZG9jICkge1xuXHRcdERPTUV2YWwoIGNvZGUsIHsgbm9uY2U6IG9wdGlvbnMgJiYgb3B0aW9ucy5ub25jZSB9LCBkb2MgKTtcblx0fSxcblxuXHRlYWNoOiBmdW5jdGlvbiggb2JqLCBjYWxsYmFjayApIHtcblx0XHR2YXIgbGVuZ3RoLCBpID0gMDtcblxuXHRcdGlmICggaXNBcnJheUxpa2UoIG9iaiApICkge1xuXHRcdFx0bGVuZ3RoID0gb2JqLmxlbmd0aDtcblx0XHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrLmNhbGwoIG9ialsgaSBdLCBpLCBvYmpbIGkgXSApID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKCBpIGluIG9iaiApIHtcblx0XHRcdFx0aWYgKCBjYWxsYmFjay5jYWxsKCBvYmpbIGkgXSwgaSwgb2JqWyBpIF0gKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqO1xuXHR9LFxuXG5cblx0Ly8gUmV0cmlldmUgdGhlIHRleHQgdmFsdWUgb2YgYW4gYXJyYXkgb2YgRE9NIG5vZGVzXG5cdHRleHQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHZhciBub2RlLFxuXHRcdFx0cmV0ID0gXCJcIixcblx0XHRcdGkgPSAwLFxuXHRcdFx0bm9kZVR5cGUgPSBlbGVtLm5vZGVUeXBlO1xuXG5cdFx0aWYgKCAhbm9kZVR5cGUgKSB7XG5cblx0XHRcdC8vIElmIG5vIG5vZGVUeXBlLCB0aGlzIGlzIGV4cGVjdGVkIHRvIGJlIGFuIGFycmF5XG5cdFx0XHR3aGlsZSAoICggbm9kZSA9IGVsZW1bIGkrKyBdICkgKSB7XG5cblx0XHRcdFx0Ly8gRG8gbm90IHRyYXZlcnNlIGNvbW1lbnQgbm9kZXNcblx0XHRcdFx0cmV0ICs9IGpRdWVyeS50ZXh0KCBub2RlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICggbm9kZVR5cGUgPT09IDEgfHwgbm9kZVR5cGUgPT09IDExICkge1xuXHRcdFx0cmV0dXJuIGVsZW0udGV4dENvbnRlbnQ7XG5cdFx0fVxuXHRcdGlmICggbm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5kb2N1bWVudEVsZW1lbnQudGV4dENvbnRlbnQ7XG5cdFx0fVxuXHRcdGlmICggbm9kZVR5cGUgPT09IDMgfHwgbm9kZVR5cGUgPT09IDQgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5ub2RlVmFsdWU7XG5cdFx0fVxuXG5cdFx0Ly8gRG8gbm90IGluY2x1ZGUgY29tbWVudCBvciBwcm9jZXNzaW5nIGluc3RydWN0aW9uIG5vZGVzXG5cblx0XHRyZXR1cm4gcmV0O1xuXHR9LFxuXG5cblx0Ly8gcmVzdWx0cyBpcyBmb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxuXHRtYWtlQXJyYXk6IGZ1bmN0aW9uKCBhcnIsIHJlc3VsdHMgKSB7XG5cdFx0dmFyIHJldCA9IHJlc3VsdHMgfHwgW107XG5cblx0XHRpZiAoIGFyciAhPSBudWxsICkge1xuXHRcdFx0aWYgKCBpc0FycmF5TGlrZSggT2JqZWN0KCBhcnIgKSApICkge1xuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIHJldCxcblx0XHRcdFx0XHR0eXBlb2YgYXJyID09PSBcInN0cmluZ1wiID9cblx0XHRcdFx0XHRcdFsgYXJyIF0gOiBhcnJcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHB1c2guY2FsbCggcmV0LCBhcnIgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmV0O1xuXHR9LFxuXG5cdGluQXJyYXk6IGZ1bmN0aW9uKCBlbGVtLCBhcnIsIGkgKSB7XG5cdFx0cmV0dXJuIGFyciA9PSBudWxsID8gLTEgOiBpbmRleE9mLmNhbGwoIGFyciwgZWxlbSwgaSApO1xuXHR9LFxuXG5cdGlzWE1MRG9jOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHR2YXIgbmFtZXNwYWNlID0gZWxlbSAmJiBlbGVtLm5hbWVzcGFjZVVSSSxcblx0XHRcdGRvY0VsZW0gPSBlbGVtICYmICggZWxlbS5vd25lckRvY3VtZW50IHx8IGVsZW0gKS5kb2N1bWVudEVsZW1lbnQ7XG5cblx0XHQvLyBBc3N1bWUgSFRNTCB3aGVuIGRvY3VtZW50RWxlbWVudCBkb2Vzbid0IHlldCBleGlzdCwgc3VjaCBhcyBpbnNpZGVcblx0XHQvLyBkb2N1bWVudCBmcmFnbWVudHMuXG5cdFx0cmV0dXJuICFyaHRtbFN1ZmZpeC50ZXN0KCBuYW1lc3BhY2UgfHwgZG9jRWxlbSAmJiBkb2NFbGVtLm5vZGVOYW1lIHx8IFwiSFRNTFwiICk7XG5cdH0sXG5cblx0Ly8gTm90ZTogYW4gZWxlbWVudCBkb2VzIG5vdCBjb250YWluIGl0c2VsZlxuXHRjb250YWluczogZnVuY3Rpb24oIGEsIGIgKSB7XG5cdFx0dmFyIGJ1cCA9IGIgJiYgYi5wYXJlbnROb2RlO1xuXG5cdFx0cmV0dXJuIGEgPT09IGJ1cCB8fCAhISggYnVwICYmIGJ1cC5ub2RlVHlwZSA9PT0gMSAmJiAoXG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMStcblx0XHRcdC8vIElFIGRvZXNuJ3QgaGF2ZSBgY29udGFpbnNgIG9uIFNWRy5cblx0XHRcdGEuY29udGFpbnMgP1xuXHRcdFx0XHRhLmNvbnRhaW5zKCBidXAgKSA6XG5cdFx0XHRcdGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24gJiYgYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiggYnVwICkgJiAxNlxuXHRcdCkgKTtcblx0fSxcblxuXHRtZXJnZTogZnVuY3Rpb24oIGZpcnN0LCBzZWNvbmQgKSB7XG5cdFx0dmFyIGxlbiA9ICtzZWNvbmQubGVuZ3RoLFxuXHRcdFx0aiA9IDAsXG5cdFx0XHRpID0gZmlyc3QubGVuZ3RoO1xuXG5cdFx0Zm9yICggOyBqIDwgbGVuOyBqKysgKSB7XG5cdFx0XHRmaXJzdFsgaSsrIF0gPSBzZWNvbmRbIGogXTtcblx0XHR9XG5cblx0XHRmaXJzdC5sZW5ndGggPSBpO1xuXG5cdFx0cmV0dXJuIGZpcnN0O1xuXHR9LFxuXG5cdGdyZXA6IGZ1bmN0aW9uKCBlbGVtcywgY2FsbGJhY2ssIGludmVydCApIHtcblx0XHR2YXIgY2FsbGJhY2tJbnZlcnNlLFxuXHRcdFx0bWF0Y2hlcyA9IFtdLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRsZW5ndGggPSBlbGVtcy5sZW5ndGgsXG5cdFx0XHRjYWxsYmFja0V4cGVjdCA9ICFpbnZlcnQ7XG5cblx0XHQvLyBHbyB0aHJvdWdoIHRoZSBhcnJheSwgb25seSBzYXZpbmcgdGhlIGl0ZW1zXG5cdFx0Ly8gdGhhdCBwYXNzIHRoZSB2YWxpZGF0b3IgZnVuY3Rpb25cblx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblx0XHRcdGNhbGxiYWNrSW52ZXJzZSA9ICFjYWxsYmFjayggZWxlbXNbIGkgXSwgaSApO1xuXHRcdFx0aWYgKCBjYWxsYmFja0ludmVyc2UgIT09IGNhbGxiYWNrRXhwZWN0ICkge1xuXHRcdFx0XHRtYXRjaGVzLnB1c2goIGVsZW1zWyBpIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbWF0Y2hlcztcblx0fSxcblxuXHQvLyBhcmcgaXMgZm9yIGludGVybmFsIHVzYWdlIG9ubHlcblx0bWFwOiBmdW5jdGlvbiggZWxlbXMsIGNhbGxiYWNrLCBhcmcgKSB7XG5cdFx0dmFyIGxlbmd0aCwgdmFsdWUsXG5cdFx0XHRpID0gMCxcblx0XHRcdHJldCA9IFtdO1xuXG5cdFx0Ly8gR28gdGhyb3VnaCB0aGUgYXJyYXksIHRyYW5zbGF0aW5nIGVhY2ggb2YgdGhlIGl0ZW1zIHRvIHRoZWlyIG5ldyB2YWx1ZXNcblx0XHRpZiAoIGlzQXJyYXlMaWtlKCBlbGVtcyApICkge1xuXHRcdFx0bGVuZ3RoID0gZWxlbXMubGVuZ3RoO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdHZhbHVlID0gY2FsbGJhY2soIGVsZW1zWyBpIF0sIGksIGFyZyApO1xuXG5cdFx0XHRcdGlmICggdmFsdWUgIT0gbnVsbCApIHtcblx0XHRcdFx0XHRyZXQucHVzaCggdmFsdWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0Ly8gR28gdGhyb3VnaCBldmVyeSBrZXkgb24gdGhlIG9iamVjdCxcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICggaSBpbiBlbGVtcyApIHtcblx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjayggZWxlbXNbIGkgXSwgaSwgYXJnICk7XG5cblx0XHRcdFx0aWYgKCB2YWx1ZSAhPSBudWxsICkge1xuXHRcdFx0XHRcdHJldC5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRmxhdHRlbiBhbnkgbmVzdGVkIGFycmF5c1xuXHRcdHJldHVybiBmbGF0KCByZXQgKTtcblx0fSxcblxuXHQvLyBBIGdsb2JhbCBHVUlEIGNvdW50ZXIgZm9yIG9iamVjdHNcblx0Z3VpZDogMSxcblxuXHQvLyBqUXVlcnkuc3VwcG9ydCBpcyBub3QgdXNlZCBpbiBDb3JlIGJ1dCBvdGhlciBwcm9qZWN0cyBhdHRhY2ggdGhlaXJcblx0Ly8gcHJvcGVydGllcyB0byBpdCBzbyBpdCBuZWVkcyB0byBleGlzdC5cblx0c3VwcG9ydDogc3VwcG9ydFxufSApO1xuXG5pZiAoIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiApIHtcblx0alF1ZXJ5LmZuWyBTeW1ib2wuaXRlcmF0b3IgXSA9IGFyclsgU3ltYm9sLml0ZXJhdG9yIF07XG59XG5cbi8vIFBvcHVsYXRlIHRoZSBjbGFzczJ0eXBlIG1hcFxualF1ZXJ5LmVhY2goIFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdCggXCIgXCIgKSxcblx0ZnVuY3Rpb24oIF9pLCBuYW1lICkge1xuXHRcdGNsYXNzMnR5cGVbIFwiW29iamVjdCBcIiArIG5hbWUgKyBcIl1cIiBdID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXHR9ICk7XG5cbmZ1bmN0aW9uIG5vZGVOYW1lKCBlbGVtLCBuYW1lICkge1xuXHRyZXR1cm4gZWxlbS5ub2RlTmFtZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKTtcbn1cblxudmFyIHBvcCA9IGFyci5wb3A7XG5cbi8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3MzLXNlbGVjdG9ycy8jd2hpdGVzcGFjZVxudmFyIHdoaXRlc3BhY2UgPSBcIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCI7XG5cbnZhciBpc0lFID0gZG9jdW1lbnQkMS5kb2N1bWVudE1vZGU7XG5cbi8vIFN1cHBvcnQ6IENocm9tZSAxMDUgLSAxMTEgb25seSwgU2FmYXJpIDE1LjQgLSAxNi4zIG9ubHlcbi8vIE1ha2Ugc3VyZSB0aGUgYDpoYXMoKWAgYXJndW1lbnQgaXMgcGFyc2VkIHVuZm9yZ2l2aW5nbHkuXG4vLyBXZSBpbmNsdWRlIGAqYCBpbiB0aGUgdGVzdCB0byBkZXRlY3QgYnVnZ3kgaW1wbGVtZW50YXRpb25zIHRoYXQgYXJlXG4vLyBfc2VsZWN0aXZlbHlfIGZvcmdpdmluZyAoc3BlY2lmaWNhbGx5IHdoZW4gdGhlIGxpc3QgaW5jbHVkZXMgYXQgbGVhc3Rcbi8vIG9uZSB2YWxpZCBzZWxlY3RvcikuXG4vLyBOb3RlIHRoYXQgd2UgdHJlYXQgY29tcGxldGUgbGFjayBvZiBzdXBwb3J0IGZvciBgOmhhcygpYCBhcyBpZiBpdCB3ZXJlXG4vLyBzcGVjLWNvbXBsaWFudCBzdXBwb3J0LCB3aGljaCBpcyBmaW5lIGJlY2F1c2UgdXNlIG9mIGA6aGFzKClgIGluIHN1Y2hcbi8vIGVudmlyb25tZW50cyB3aWxsIGZhaWwgaW4gdGhlIHFTQSBwYXRoIGFuZCBmYWxsIGJhY2sgdG8galF1ZXJ5IHRyYXZlcnNhbFxuLy8gYW55d2F5LlxudHJ5IHtcblx0ZG9jdW1lbnQkMS5xdWVyeVNlbGVjdG9yKCBcIjpoYXMoKiw6anFmYWtlKVwiICk7XG5cdHN1cHBvcnQuY3NzSGFzID0gZmFsc2U7XG59IGNhdGNoICggZSApIHtcblx0c3VwcG9ydC5jc3NIYXMgPSB0cnVlO1xufVxuXG4vLyBCdWlsZCBRU0EgcmVnZXguXG4vLyBSZWdleCBzdHJhdGVneSBhZG9wdGVkIGZyb20gRGllZ28gUGVyaW5pLlxudmFyIHJidWdneVFTQSA9IFtdO1xuXG5pZiAoIGlzSUUgKSB7XG5cdHJidWdneVFTQS5wdXNoKFxuXG5cdFx0Ly8gU3VwcG9ydDogSUUgOSAtIDExK1xuXHRcdC8vIElFJ3MgOmRpc2FibGVkIHNlbGVjdG9yIGRvZXMgbm90IHBpY2sgdXAgdGhlIGNoaWxkcmVuIG9mIGRpc2FibGVkIGZpZWxkc2V0c1xuXHRcdFwiOmVuYWJsZWRcIixcblx0XHRcIjpkaXNhYmxlZFwiLFxuXG5cdFx0Ly8gU3VwcG9ydDogSUUgMTErXG5cdFx0Ly8gSUUgMTEgZG9lc24ndCBmaW5kIGVsZW1lbnRzIG9uIGEgYFtuYW1lPScnXWAgcXVlcnkgaW4gc29tZSBjYXNlcy5cblx0XHQvLyBBZGRpbmcgYSB0ZW1wb3JhcnkgYXR0cmlidXRlIHRvIHRoZSBkb2N1bWVudCBiZWZvcmUgdGhlIHNlbGVjdGlvbiB3b3Jrc1xuXHRcdC8vIGFyb3VuZCB0aGUgaXNzdWUuXG5cdFx0XCJcXFxcW1wiICsgd2hpdGVzcGFjZSArIFwiKm5hbWVcIiArIHdoaXRlc3BhY2UgKyBcIio9XCIgK1xuXHRcdFx0d2hpdGVzcGFjZSArIFwiKig/OicnfFxcXCJcXFwiKVwiXG5cdCk7XG59XG5cbmlmICggIXN1cHBvcnQuY3NzSGFzICkge1xuXG5cdC8vIFN1cHBvcnQ6IENocm9tZSAxMDUgLSAxMTArLCBTYWZhcmkgMTUuNCAtIDE2LjMrXG5cdC8vIE91ciByZWd1bGFyIGB0cnktY2F0Y2hgIG1lY2hhbmlzbSBmYWlscyB0byBkZXRlY3QgbmF0aXZlbHktdW5zdXBwb3J0ZWRcblx0Ly8gcHNldWRvLWNsYXNzZXMgaW5zaWRlIGA6aGFzKClgIChzdWNoIGFzIGA6aGFzKDpjb250YWlucyhcIkZvb1wiKSlgKVxuXHQvLyBpbiBicm93c2VycyB0aGF0IHBhcnNlIHRoZSBgOmhhcygpYCBhcmd1bWVudCBhcyBhIGZvcmdpdmluZyBzZWxlY3RvciBsaXN0LlxuXHQvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvc2VsZWN0b3JzLyNyZWxhdGlvbmFsIG5vdyByZXF1aXJlcyB0aGUgYXJndW1lbnRcblx0Ly8gdG8gYmUgcGFyc2VkIHVuZm9yZ2l2aW5nbHksIGJ1dCBicm93c2VycyBoYXZlIG5vdCB5ZXQgZnVsbHkgYWRqdXN0ZWQuXG5cdHJidWdneVFTQS5wdXNoKCBcIjpoYXNcIiApO1xufVxuXG5yYnVnZ3lRU0EgPSByYnVnZ3lRU0EubGVuZ3RoICYmIG5ldyBSZWdFeHAoIHJidWdneVFTQS5qb2luKCBcInxcIiApICk7XG5cbnZhciBydHJpbUNTUyA9IG5ldyBSZWdFeHAoXG5cdFwiXlwiICsgd2hpdGVzcGFjZSArIFwiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIiArIHdoaXRlc3BhY2UgKyBcIiskXCIsXG5cdFwiZ1wiXG4pO1xuXG4vLyBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXN5bnRheC0zLyNpZGVudC10b2tlbi1kaWFncmFtXG52YXIgaWRlbnRpZmllciA9IFwiKD86XFxcXFxcXFxbXFxcXGRhLWZBLUZdezEsNn1cIiArIHdoaXRlc3BhY2UgK1xuXHRcIj98XFxcXFxcXFxbXlxcXFxyXFxcXG5cXFxcZl18W1xcXFx3LV18W15cXDAtXFxcXHg3Zl0pK1wiO1xuXG52YXIgcmxlYWRpbmdDb21iaW5hdG9yID0gbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqKFs+K35dfFwiICtcblx0d2hpdGVzcGFjZSArIFwiKVwiICsgd2hpdGVzcGFjZSArIFwiKlwiICk7XG5cbnZhciByZGVzY2VuZCA9IG5ldyBSZWdFeHAoIHdoaXRlc3BhY2UgKyBcInw+XCIgKTtcblxudmFyIHJzaWJsaW5nID0gL1srfl0vO1xuXG52YXIgZG9jdW1lbnRFbGVtZW50JDEgPSBkb2N1bWVudCQxLmRvY3VtZW50RWxlbWVudDtcblxuLy8gU3VwcG9ydDogSUUgOSAtIDExK1xuLy8gSUUgcmVxdWlyZXMgYSBwcmVmaXguXG52YXIgbWF0Y2hlcyA9IGRvY3VtZW50RWxlbWVudCQxLm1hdGNoZXMgfHwgZG9jdW1lbnRFbGVtZW50JDEubXNNYXRjaGVzU2VsZWN0b3I7XG5cbi8qKlxuICogQ3JlYXRlIGtleS12YWx1ZSBjYWNoZXMgb2YgbGltaXRlZCBzaXplXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oc3RyaW5nLCBvYmplY3QpfSBSZXR1cm5zIHRoZSBPYmplY3QgZGF0YSBhZnRlciBzdG9yaW5nIGl0IG9uIGl0c2VsZiB3aXRoXG4gKlx0cHJvcGVydHkgbmFtZSB0aGUgKHNwYWNlLXN1ZmZpeGVkKSBzdHJpbmcgYW5kIChpZiB0aGUgY2FjaGUgaXMgbGFyZ2VyIHRoYW4gRXhwci5jYWNoZUxlbmd0aClcbiAqXHRkZWxldGluZyB0aGUgb2xkZXN0IGVudHJ5XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhY2hlKCkge1xuXHR2YXIga2V5cyA9IFtdO1xuXG5cdGZ1bmN0aW9uIGNhY2hlKCBrZXksIHZhbHVlICkge1xuXG5cdFx0Ly8gVXNlIChrZXkgKyBcIiBcIikgdG8gYXZvaWQgY29sbGlzaW9uIHdpdGggbmF0aXZlIHByb3RvdHlwZSBwcm9wZXJ0aWVzXG5cdFx0Ly8gKHNlZSBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L3NpenpsZS9pc3N1ZXMvMTU3KVxuXHRcdGlmICgga2V5cy5wdXNoKCBrZXkgKyBcIiBcIiApID4galF1ZXJ5LmV4cHIuY2FjaGVMZW5ndGggKSB7XG5cblx0XHRcdC8vIE9ubHkga2VlcCB0aGUgbW9zdCByZWNlbnQgZW50cmllc1xuXHRcdFx0ZGVsZXRlIGNhY2hlWyBrZXlzLnNoaWZ0KCkgXTtcblx0XHR9XG5cdFx0cmV0dXJuICggY2FjaGVbIGtleSArIFwiIFwiIF0gPSB2YWx1ZSApO1xuXHR9XG5cdHJldHVybiBjYWNoZTtcbn1cblxuLyoqXG4gKiBDaGVja3MgYSBub2RlIGZvciB2YWxpZGl0eSBhcyBhIGpRdWVyeSBzZWxlY3RvciBjb250ZXh0XG4gKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0PX0gY29udGV4dFxuICogQHJldHVybnMge0VsZW1lbnR8T2JqZWN0fEJvb2xlYW59IFRoZSBpbnB1dCBub2RlIGlmIGFjY2VwdGFibGUsIG90aGVyd2lzZSBhIGZhbHN5IHZhbHVlXG4gKi9cbmZ1bmN0aW9uIHRlc3RDb250ZXh0KCBjb250ZXh0ICkge1xuXHRyZXR1cm4gY29udGV4dCAmJiB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb250ZXh0O1xufVxuXG4vLyBBdHRyaWJ1dGUgc2VsZWN0b3JzOiBodHRwczovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNhdHRyaWJ1dGUtc2VsZWN0b3JzXG52YXIgYXR0cmlidXRlcyA9IFwiXFxcXFtcIiArIHdoaXRlc3BhY2UgKyBcIiooXCIgKyBpZGVudGlmaWVyICsgXCIpKD86XCIgKyB3aGl0ZXNwYWNlICtcblxuXHQvLyBPcGVyYXRvciAoY2FwdHVyZSAyKVxuXHRcIiooWypeJHwhfl0/PSlcIiArIHdoaXRlc3BhY2UgK1xuXG5cdC8vIFwiQXR0cmlidXRlIHZhbHVlcyBtdXN0IGJlIENTUyBpZGVudGlmaWVycyBbY2FwdHVyZSA1XSBvciBzdHJpbmdzIFtjYXB0dXJlIDMgb3IgY2FwdHVyZSA0XVwiXG5cdFwiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIgKyBpZGVudGlmaWVyICsgXCIpKXwpXCIgK1xuXHR3aGl0ZXNwYWNlICsgXCIqXFxcXF1cIjtcblxudmFyIHBzZXVkb3MgPSBcIjooXCIgKyBpZGVudGlmaWVyICsgXCIpKD86XFxcXCgoXCIgK1xuXG5cdC8vIFRvIHJlZHVjZSB0aGUgbnVtYmVyIG9mIHNlbGVjdG9ycyBuZWVkaW5nIHRva2VuaXplIGluIHRoZSBwcmVGaWx0ZXIsIHByZWZlciBhcmd1bWVudHM6XG5cdC8vIDEuIHF1b3RlZCAoY2FwdHVyZSAzOyBjYXB0dXJlIDQgb3IgY2FwdHVyZSA1KVxuXHRcIignKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfFwiICtcblxuXHQvLyAyLiBzaW1wbGUgKGNhcHR1cmUgNilcblx0XCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIgKyBhdHRyaWJ1dGVzICsgXCIpKil8XCIgK1xuXG5cdC8vIDMuIGFueXRoaW5nIGVsc2UgKGNhcHR1cmUgMilcblx0XCIuKlwiICtcblx0XCIpXFxcXCl8KVwiO1xuXG52YXIgZmlsdGVyTWF0Y2hFeHByID0ge1xuXHRJRDogbmV3IFJlZ0V4cCggXCJeIyhcIiArIGlkZW50aWZpZXIgKyBcIilcIiApLFxuXHRDTEFTUzogbmV3IFJlZ0V4cCggXCJeXFxcXC4oXCIgKyBpZGVudGlmaWVyICsgXCIpXCIgKSxcblx0VEFHOiBuZXcgUmVnRXhwKCBcIl4oXCIgKyBpZGVudGlmaWVyICsgXCJ8WypdKVwiICksXG5cdEFUVFI6IG5ldyBSZWdFeHAoIFwiXlwiICsgYXR0cmlidXRlcyApLFxuXHRQU0VVRE86IG5ldyBSZWdFeHAoIFwiXlwiICsgcHNldWRvcyApLFxuXHRDSElMRDogbmV3IFJlZ0V4cChcblx0XHRcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIgK1xuXHRcdHdoaXRlc3BhY2UgKyBcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiICsgd2hpdGVzcGFjZSArIFwiKig/OihbKy1dfClcIiArXG5cdFx0d2hpdGVzcGFjZSArIFwiKihcXFxcZCspfCkpXCIgKyB3aGl0ZXNwYWNlICsgXCIqXFxcXCl8KVwiLCBcImlcIiApXG59O1xuXG52YXIgcnBzZXVkbyA9IG5ldyBSZWdFeHAoIHBzZXVkb3MgKTtcblxuLy8gQ1NTIGVzY2FwZXNcbi8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9DU1MyMS9zeW5kYXRhLmh0bWwjZXNjYXBlZC1jaGFyYWN0ZXJzXG5cbnZhciBydW5lc2NhcGUgPSBuZXcgUmVnRXhwKCBcIlxcXFxcXFxcW1xcXFxkYS1mQS1GXXsxLDZ9XCIgKyB3aGl0ZXNwYWNlICtcblx0XCI/fFxcXFxcXFxcKFteXFxcXHJcXFxcblxcXFxmXSlcIiwgXCJnXCIgKSxcblx0ZnVuZXNjYXBlID0gZnVuY3Rpb24oIGVzY2FwZSwgbm9uSGV4ICkge1xuXHRcdHZhciBoaWdoID0gXCIweFwiICsgZXNjYXBlLnNsaWNlKCAxICkgLSAweDEwMDAwO1xuXG5cdFx0aWYgKCBub25IZXggKSB7XG5cblx0XHRcdC8vIFN0cmlwIHRoZSBiYWNrc2xhc2ggcHJlZml4IGZyb20gYSBub24taGV4IGVzY2FwZSBzZXF1ZW5jZVxuXHRcdFx0cmV0dXJuIG5vbkhleDtcblx0XHR9XG5cblx0XHQvLyBSZXBsYWNlIGEgaGV4YWRlY2ltYWwgZXNjYXBlIHNlcXVlbmNlIHdpdGggdGhlIGVuY29kZWQgVW5pY29kZSBjb2RlIHBvaW50XG5cdFx0Ly8gU3VwcG9ydDogSUUgPD0xMStcblx0XHQvLyBGb3IgdmFsdWVzIG91dHNpZGUgdGhlIEJhc2ljIE11bHRpbGluZ3VhbCBQbGFuZSAoQk1QKSwgbWFudWFsbHkgY29uc3RydWN0IGFcblx0XHQvLyBzdXJyb2dhdGUgcGFpclxuXHRcdHJldHVybiBoaWdoIDwgMCA/XG5cdFx0XHRTdHJpbmcuZnJvbUNoYXJDb2RlKCBoaWdoICsgMHgxMDAwMCApIDpcblx0XHRcdFN0cmluZy5mcm9tQ2hhckNvZGUoIGhpZ2ggPj4gMTAgfCAweEQ4MDAsIGhpZ2ggJiAweDNGRiB8IDB4REMwMCApO1xuXHR9O1xuXG5mdW5jdGlvbiB1bmVzY2FwZVNlbGVjdG9yKCBzZWwgKSB7XG5cdHJldHVybiBzZWwucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0b3JFcnJvciggbXNnICkge1xuXHRqUXVlcnkuZXJyb3IoIFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIgKyBtc2cgKTtcbn1cblxudmFyIHJjb21tYSA9IG5ldyBSZWdFeHAoIFwiXlwiICsgd2hpdGVzcGFjZSArIFwiKixcIiArIHdoaXRlc3BhY2UgKyBcIipcIiApO1xuXG52YXIgdG9rZW5DYWNoZSA9IGNyZWF0ZUNhY2hlKCk7XG5cbmZ1bmN0aW9uIHRva2VuaXplKCBzZWxlY3RvciwgcGFyc2VPbmx5ICkge1xuXHR2YXIgbWF0Y2hlZCwgbWF0Y2gsIHRva2VucywgdHlwZSxcblx0XHRzb0ZhciwgZ3JvdXBzLCBwcmVGaWx0ZXJzLFxuXHRcdGNhY2hlZCA9IHRva2VuQ2FjaGVbIHNlbGVjdG9yICsgXCIgXCIgXTtcblxuXHRpZiAoIGNhY2hlZCApIHtcblx0XHRyZXR1cm4gcGFyc2VPbmx5ID8gMCA6IGNhY2hlZC5zbGljZSggMCApO1xuXHR9XG5cblx0c29GYXIgPSBzZWxlY3Rvcjtcblx0Z3JvdXBzID0gW107XG5cdHByZUZpbHRlcnMgPSBqUXVlcnkuZXhwci5wcmVGaWx0ZXI7XG5cblx0d2hpbGUgKCBzb0ZhciApIHtcblxuXHRcdC8vIENvbW1hIGFuZCBmaXJzdCBydW5cblx0XHRpZiAoICFtYXRjaGVkIHx8ICggbWF0Y2ggPSByY29tbWEuZXhlYyggc29GYXIgKSApICkge1xuXHRcdFx0aWYgKCBtYXRjaCApIHtcblxuXHRcdFx0XHQvLyBEb24ndCBjb25zdW1lIHRyYWlsaW5nIGNvbW1hcyBhcyB2YWxpZFxuXHRcdFx0XHRzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaFsgMCBdLmxlbmd0aCApIHx8IHNvRmFyO1xuXHRcdFx0fVxuXHRcdFx0Z3JvdXBzLnB1c2goICggdG9rZW5zID0gW10gKSApO1xuXHRcdH1cblxuXHRcdG1hdGNoZWQgPSBmYWxzZTtcblxuXHRcdC8vIENvbWJpbmF0b3JzXG5cdFx0aWYgKCAoIG1hdGNoID0gcmxlYWRpbmdDb21iaW5hdG9yLmV4ZWMoIHNvRmFyICkgKSApIHtcblx0XHRcdG1hdGNoZWQgPSBtYXRjaC5zaGlmdCgpO1xuXHRcdFx0dG9rZW5zLnB1c2goIHtcblx0XHRcdFx0dmFsdWU6IG1hdGNoZWQsXG5cblx0XHRcdFx0Ly8gQ2FzdCBkZXNjZW5kYW50IGNvbWJpbmF0b3JzIHRvIHNwYWNlXG5cdFx0XHRcdHR5cGU6IG1hdGNoWyAwIF0ucmVwbGFjZSggcnRyaW1DU1MsIFwiIFwiIClcblx0XHRcdH0gKTtcblx0XHRcdHNvRmFyID0gc29GYXIuc2xpY2UoIG1hdGNoZWQubGVuZ3RoICk7XG5cdFx0fVxuXG5cdFx0Ly8gRmlsdGVyc1xuXHRcdGZvciAoIHR5cGUgaW4gZmlsdGVyTWF0Y2hFeHByICkge1xuXHRcdFx0aWYgKCAoIG1hdGNoID0galF1ZXJ5LmV4cHIubWF0Y2hbIHR5cGUgXS5leGVjKCBzb0ZhciApICkgJiYgKCAhcHJlRmlsdGVyc1sgdHlwZSBdIHx8XG5cdFx0XHRcdCggbWF0Y2ggPSBwcmVGaWx0ZXJzWyB0eXBlIF0oIG1hdGNoICkgKSApICkge1xuXHRcdFx0XHRtYXRjaGVkID0gbWF0Y2guc2hpZnQoKTtcblx0XHRcdFx0dG9rZW5zLnB1c2goIHtcblx0XHRcdFx0XHR2YWx1ZTogbWF0Y2hlZCxcblx0XHRcdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0XHRcdG1hdGNoZXM6IG1hdGNoXG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0c29GYXIgPSBzb0Zhci5zbGljZSggbWF0Y2hlZC5sZW5ndGggKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICFtYXRjaGVkICkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIGludmFsaWQgZXhjZXNzXG5cdC8vIGlmIHdlJ3JlIGp1c3QgcGFyc2luZ1xuXHQvLyBPdGhlcndpc2UsIHRocm93IGFuIGVycm9yIG9yIHJldHVybiB0b2tlbnNcblx0aWYgKCBwYXJzZU9ubHkgKSB7XG5cdFx0cmV0dXJuIHNvRmFyLmxlbmd0aDtcblx0fVxuXG5cdHJldHVybiBzb0ZhciA/XG5cdFx0c2VsZWN0b3JFcnJvciggc2VsZWN0b3IgKSA6XG5cblx0XHQvLyBDYWNoZSB0aGUgdG9rZW5zXG5cdFx0dG9rZW5DYWNoZSggc2VsZWN0b3IsIGdyb3VwcyApLnNsaWNlKCAwICk7XG59XG5cbnZhciBwcmVGaWx0ZXIgPSB7XG5cdEFUVFI6IGZ1bmN0aW9uKCBtYXRjaCApIHtcblx0XHRtYXRjaFsgMSBdID0gdW5lc2NhcGVTZWxlY3RvciggbWF0Y2hbIDEgXSApO1xuXG5cdFx0Ly8gTW92ZSB0aGUgZ2l2ZW4gdmFsdWUgdG8gbWF0Y2hbM10gd2hldGhlciBxdW90ZWQgb3IgdW5xdW90ZWRcblx0XHRtYXRjaFsgMyBdID0gdW5lc2NhcGVTZWxlY3RvciggbWF0Y2hbIDMgXSB8fCBtYXRjaFsgNCBdIHx8IG1hdGNoWyA1IF0gfHwgXCJcIiApO1xuXG5cdFx0aWYgKCBtYXRjaFsgMiBdID09PSBcIn49XCIgKSB7XG5cdFx0XHRtYXRjaFsgMyBdID0gXCIgXCIgKyBtYXRjaFsgMyBdICsgXCIgXCI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hdGNoLnNsaWNlKCAwLCA0ICk7XG5cdH0sXG5cblx0Q0hJTEQ6IGZ1bmN0aW9uKCBtYXRjaCApIHtcblxuXHRcdC8qIG1hdGNoZXMgZnJvbSBmaWx0ZXJNYXRjaEV4cHJbXCJDSElMRFwiXVxuXHRcdFx0MSB0eXBlIChvbmx5fG50aHwuLi4pXG5cdFx0XHQyIHdoYXQgKGNoaWxkfG9mLXR5cGUpXG5cdFx0XHQzIGFyZ3VtZW50IChldmVufG9kZHxcXGQqfFxcZCpuKFsrLV1cXGQrKT98Li4uKVxuXHRcdFx0NCB4bi1jb21wb25lbnQgb2YgeG4reSBhcmd1bWVudCAoWystXT9cXGQqbnwpXG5cdFx0XHQ1IHNpZ24gb2YgeG4tY29tcG9uZW50XG5cdFx0XHQ2IHggb2YgeG4tY29tcG9uZW50XG5cdFx0XHQ3IHNpZ24gb2YgeS1jb21wb25lbnRcblx0XHRcdDggeSBvZiB5LWNvbXBvbmVudFxuXHRcdCovXG5cdFx0bWF0Y2hbIDEgXSA9IG1hdGNoWyAxIF0udG9Mb3dlckNhc2UoKTtcblxuXHRcdGlmICggbWF0Y2hbIDEgXS5zbGljZSggMCwgMyApID09PSBcIm50aFwiICkge1xuXG5cdFx0XHQvLyBudGgtKiByZXF1aXJlcyBhcmd1bWVudFxuXHRcdFx0aWYgKCAhbWF0Y2hbIDMgXSApIHtcblx0XHRcdFx0c2VsZWN0b3JFcnJvciggbWF0Y2hbIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBudW1lcmljIHggYW5kIHkgcGFyYW1ldGVycyBmb3IgalF1ZXJ5LmV4cHIuZmlsdGVyLkNISUxEXG5cdFx0XHQvLyByZW1lbWJlciB0aGF0IGZhbHNlL3RydWUgY2FzdCByZXNwZWN0aXZlbHkgdG8gMC8xXG5cdFx0XHRtYXRjaFsgNCBdID0gKyggbWF0Y2hbIDQgXSA/XG5cdFx0XHRcdG1hdGNoWyA1IF0gKyAoIG1hdGNoWyA2IF0gfHwgMSApIDpcblx0XHRcdFx0MiAqICggbWF0Y2hbIDMgXSA9PT0gXCJldmVuXCIgfHwgbWF0Y2hbIDMgXSA9PT0gXCJvZGRcIiApXG5cdFx0XHQpO1xuXHRcdFx0bWF0Y2hbIDUgXSA9ICsoICggbWF0Y2hbIDcgXSArIG1hdGNoWyA4IF0gKSB8fCBtYXRjaFsgMyBdID09PSBcIm9kZFwiICk7XG5cblx0XHQvLyBvdGhlciB0eXBlcyBwcm9oaWJpdCBhcmd1bWVudHNcblx0XHR9IGVsc2UgaWYgKCBtYXRjaFsgMyBdICkge1xuXHRcdFx0c2VsZWN0b3JFcnJvciggbWF0Y2hbIDAgXSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXRjaDtcblx0fSxcblxuXHRQU0VVRE86IGZ1bmN0aW9uKCBtYXRjaCApIHtcblx0XHR2YXIgZXhjZXNzLFxuXHRcdFx0dW5xdW90ZWQgPSAhbWF0Y2hbIDYgXSAmJiBtYXRjaFsgMiBdO1xuXG5cdFx0aWYgKCBmaWx0ZXJNYXRjaEV4cHIuQ0hJTEQudGVzdCggbWF0Y2hbIDAgXSApICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Ly8gQWNjZXB0IHF1b3RlZCBhcmd1bWVudHMgYXMtaXNcblx0XHRpZiAoIG1hdGNoWyAzIF0gKSB7XG5cdFx0XHRtYXRjaFsgMiBdID0gbWF0Y2hbIDQgXSB8fCBtYXRjaFsgNSBdIHx8IFwiXCI7XG5cblx0XHQvLyBTdHJpcCBleGNlc3MgY2hhcmFjdGVycyBmcm9tIHVucXVvdGVkIGFyZ3VtZW50c1xuXHRcdH0gZWxzZSBpZiAoIHVucXVvdGVkICYmIHJwc2V1ZG8udGVzdCggdW5xdW90ZWQgKSAmJlxuXG5cdFx0XHQvLyBHZXQgZXhjZXNzIGZyb20gdG9rZW5pemUgKHJlY3Vyc2l2ZWx5KVxuXHRcdFx0KCBleGNlc3MgPSB0b2tlbml6ZSggdW5xdW90ZWQsIHRydWUgKSApICYmXG5cblx0XHRcdC8vIGFkdmFuY2UgdG8gdGhlIG5leHQgY2xvc2luZyBwYXJlbnRoZXNpc1xuXHRcdFx0KCBleGNlc3MgPSB1bnF1b3RlZC5pbmRleE9mKCBcIilcIiwgdW5xdW90ZWQubGVuZ3RoIC0gZXhjZXNzICkgLVxuXHRcdFx0XHR1bnF1b3RlZC5sZW5ndGggKSApIHtcblxuXHRcdFx0Ly8gZXhjZXNzIGlzIGEgbmVnYXRpdmUgaW5kZXhcblx0XHRcdG1hdGNoWyAwIF0gPSBtYXRjaFsgMCBdLnNsaWNlKCAwLCBleGNlc3MgKTtcblx0XHRcdG1hdGNoWyAyIF0gPSB1bnF1b3RlZC5zbGljZSggMCwgZXhjZXNzICk7XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIG9ubHkgY2FwdHVyZXMgbmVlZGVkIGJ5IHRoZSBwc2V1ZG8gZmlsdGVyIG1ldGhvZCAodHlwZSBhbmQgYXJndW1lbnQpXG5cdFx0cmV0dXJuIG1hdGNoLnNsaWNlKCAwLCAzICk7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIHRvU2VsZWN0b3IoIHRva2VucyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IHRva2Vucy5sZW5ndGgsXG5cdFx0c2VsZWN0b3IgPSBcIlwiO1xuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRzZWxlY3RvciArPSB0b2tlbnNbIGkgXS52YWx1ZTtcblx0fVxuXHRyZXR1cm4gc2VsZWN0b3I7XG59XG5cbi8vIE11bHRpZnVuY3Rpb25hbCBtZXRob2QgdG8gZ2V0IGFuZCBzZXQgdmFsdWVzIG9mIGEgY29sbGVjdGlvblxuLy8gVGhlIHZhbHVlL3MgY2FuIG9wdGlvbmFsbHkgYmUgZXhlY3V0ZWQgaWYgaXQncyBhIGZ1bmN0aW9uXG5mdW5jdGlvbiBhY2Nlc3MoIGVsZW1zLCBmbiwga2V5LCB2YWx1ZSwgY2hhaW5hYmxlLCBlbXB0eUdldCwgcmF3ICkge1xuXHR2YXIgaSA9IDAsXG5cdFx0bGVuID0gZWxlbXMubGVuZ3RoLFxuXHRcdGJ1bGsgPSBrZXkgPT0gbnVsbDtcblxuXHQvLyBTZXRzIG1hbnkgdmFsdWVzXG5cdGlmICggdG9UeXBlKCBrZXkgKSA9PT0gXCJvYmplY3RcIiApIHtcblx0XHRjaGFpbmFibGUgPSB0cnVlO1xuXHRcdGZvciAoIGkgaW4ga2V5ICkge1xuXHRcdFx0YWNjZXNzKCBlbGVtcywgZm4sIGksIGtleVsgaSBdLCB0cnVlLCBlbXB0eUdldCwgcmF3ICk7XG5cdFx0fVxuXG5cdC8vIFNldHMgb25lIHZhbHVlXG5cdH0gZWxzZSBpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0Y2hhaW5hYmxlID0gdHJ1ZTtcblxuXHRcdGlmICggdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRyYXcgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICggYnVsayApIHtcblxuXHRcdFx0Ly8gQnVsayBvcGVyYXRpb25zIHJ1biBhZ2FpbnN0IHRoZSBlbnRpcmUgc2V0XG5cdFx0XHRpZiAoIHJhdyApIHtcblx0XHRcdFx0Zm4uY2FsbCggZWxlbXMsIHZhbHVlICk7XG5cdFx0XHRcdGZuID0gbnVsbDtcblxuXHRcdFx0Ly8gLi4uZXhjZXB0IHdoZW4gZXhlY3V0aW5nIGZ1bmN0aW9uIHZhbHVlc1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YnVsayA9IGZuO1xuXHRcdFx0XHRmbiA9IGZ1bmN0aW9uKCBlbGVtLCBfa2V5LCB2YWx1ZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gYnVsay5jYWxsKCBqUXVlcnkoIGVsZW0gKSwgdmFsdWUgKTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIGZuICkge1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdGZuKFxuXHRcdFx0XHRcdGVsZW1zWyBpIF0sIGtleSwgcmF3ID9cblx0XHRcdFx0XHRcdHZhbHVlIDpcblx0XHRcdFx0XHRcdHZhbHVlLmNhbGwoIGVsZW1zWyBpIF0sIGksIGZuKCBlbGVtc1sgaSBdLCBrZXkgKSApXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKCBjaGFpbmFibGUgKSB7XG5cdFx0cmV0dXJuIGVsZW1zO1xuXHR9XG5cblx0Ly8gR2V0c1xuXHRpZiAoIGJ1bGsgKSB7XG5cdFx0cmV0dXJuIGZuLmNhbGwoIGVsZW1zICk7XG5cdH1cblxuXHRyZXR1cm4gbGVuID8gZm4oIGVsZW1zWyAwIF0sIGtleSApIDogZW1wdHlHZXQ7XG59XG5cbi8vIE9ubHkgY291bnQgSFRNTCB3aGl0ZXNwYWNlXG4vLyBPdGhlciB3aGl0ZXNwYWNlIHNob3VsZCBjb3VudCBpbiB2YWx1ZXNcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNhc2NpaS13aGl0ZXNwYWNlXG52YXIgcm5vdGh0bWx3aGl0ZSA9IC9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZztcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRhdHRyOiBmdW5jdGlvbiggbmFtZSwgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgalF1ZXJ5LmF0dHIsIG5hbWUsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSApO1xuXHR9LFxuXG5cdHJlbW92ZUF0dHI6IGZ1bmN0aW9uKCBuYW1lICkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5LnJlbW92ZUF0dHIoIHRoaXMsIG5hbWUgKTtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXHRhdHRyOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUgKSB7XG5cdFx0dmFyIHJldCwgaG9va3MsXG5cdFx0XHRuVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cblx0XHQvLyBEb24ndCBnZXQvc2V0IGF0dHJpYnV0ZXMgb24gdGV4dCwgY29tbWVudCBhbmQgYXR0cmlidXRlIG5vZGVzXG5cdFx0aWYgKCBuVHlwZSA9PT0gMyB8fCBuVHlwZSA9PT0gOCB8fCBuVHlwZSA9PT0gMiApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBGYWxsYmFjayB0byBwcm9wIHdoZW4gYXR0cmlidXRlcyBhcmUgbm90IHN1cHBvcnRlZFxuXHRcdGlmICggdHlwZW9mIGVsZW0uZ2V0QXR0cmlidXRlID09PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5wcm9wKCBlbGVtLCBuYW1lLCB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdC8vIEF0dHJpYnV0ZSBob29rcyBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgbG93ZXJjYXNlIHZlcnNpb25cblx0XHQvLyBHcmFiIG5lY2Vzc2FyeSBob29rIGlmIG9uZSBpcyBkZWZpbmVkXG5cdFx0aWYgKCBuVHlwZSAhPT0gMSB8fCAhalF1ZXJ5LmlzWE1MRG9jKCBlbGVtICkgKSB7XG5cdFx0XHRob29rcyA9IGpRdWVyeS5hdHRySG9va3NbIG5hbWUudG9Mb3dlckNhc2UoKSBdO1xuXHRcdH1cblxuXHRcdGlmICggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGlmICggdmFsdWUgPT09IG51bGwgfHxcblxuXHRcdFx0XHQvLyBGb3IgY29tcGF0IHdpdGggcHJldmlvdXMgaGFuZGxpbmcgb2YgYm9vbGVhbiBhdHRyaWJ1dGVzLFxuXHRcdFx0XHQvLyByZW1vdmUgd2hlbiBgZmFsc2VgIHBhc3NlZC4gRm9yIEFSSUEgYXR0cmlidXRlcyAtXG5cdFx0XHRcdC8vIG1hbnkgb2Ygd2hpY2ggcmVjb2duaXplIGEgYFwiZmFsc2VcImAgdmFsdWUgLSBjb250aW51ZSB0b1xuXHRcdFx0XHQvLyBzZXQgdGhlIGBcImZhbHNlXCJgIHZhbHVlIGFzIGpRdWVyeSA8NCBkaWQuXG5cdFx0XHRcdCggdmFsdWUgPT09IGZhbHNlICYmIG5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCBcImFyaWEtXCIgKSAhPT0gMCApICkge1xuXG5cdFx0XHRcdGpRdWVyeS5yZW1vdmVBdHRyKCBlbGVtLCBuYW1lICk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBob29rcyAmJiBcInNldFwiIGluIGhvb2tzICYmXG5cdFx0XHRcdCggcmV0ID0gaG9va3Muc2V0KCBlbGVtLCB2YWx1ZSwgbmFtZSApICkgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH1cblxuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoIG5hbWUsIHZhbHVlICk7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmICggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBuYW1lICkgKSAhPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXG5cdFx0cmV0ID0gZWxlbS5nZXRBdHRyaWJ1dGUoIG5hbWUgKTtcblxuXHRcdC8vIE5vbi1leGlzdGVudCBhdHRyaWJ1dGVzIHJldHVybiBudWxsLCB3ZSBub3JtYWxpemUgdG8gdW5kZWZpbmVkXG5cdFx0cmV0dXJuIHJldCA9PSBudWxsID8gdW5kZWZpbmVkIDogcmV0O1xuXHR9LFxuXG5cdGF0dHJIb29rczoge30sXG5cblx0cmVtb3ZlQXR0cjogZnVuY3Rpb24oIGVsZW0sIHZhbHVlICkge1xuXHRcdHZhciBuYW1lLFxuXHRcdFx0aSA9IDAsXG5cblx0XHRcdC8vIEF0dHJpYnV0ZSBuYW1lcyBjYW4gY29udGFpbiBub24tSFRNTCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnNcblx0XHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMlxuXHRcdFx0YXR0ck5hbWVzID0gdmFsdWUgJiYgdmFsdWUubWF0Y2goIHJub3RodG1sd2hpdGUgKTtcblxuXHRcdGlmICggYXR0ck5hbWVzICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHR3aGlsZSAoICggbmFtZSA9IGF0dHJOYW1lc1sgaSsrIF0gKSApIHtcblx0XHRcdFx0ZWxlbS5yZW1vdmVBdHRyaWJ1dGUoIG5hbWUgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0gKTtcblxuLy8gU3VwcG9ydDogSUUgPD0xMStcbi8vIEFuIGlucHV0IGxvc2VzIGl0cyB2YWx1ZSBhZnRlciBiZWNvbWluZyBhIHJhZGlvXG5pZiAoIGlzSUUgKSB7XG5cdGpRdWVyeS5hdHRySG9va3MudHlwZSA9IHtcblx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHRcdGlmICggdmFsdWUgPT09IFwicmFkaW9cIiAmJiBub2RlTmFtZSggZWxlbSwgXCJpbnB1dFwiICkgKSB7XG5cdFx0XHRcdHZhciB2YWwgPSBlbGVtLnZhbHVlO1xuXHRcdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSggXCJ0eXBlXCIsIHZhbHVlICk7XG5cdFx0XHRcdGlmICggdmFsICkge1xuXHRcdFx0XHRcdGVsZW0udmFsdWUgPSB2YWw7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuLy8gQ1NTIHN0cmluZy9pZGVudGlmaWVyIHNlcmlhbGl6YXRpb25cbi8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3NvbS8jY29tbW9uLXNlcmlhbGl6aW5nLWlkaW9tc1xudmFyIHJjc3Nlc2NhcGUgPSAvKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXHg4MC1cXHVGRkZGXFx3LV0vZztcblxuZnVuY3Rpb24gZmNzc2VzY2FwZSggY2gsIGFzQ29kZVBvaW50ICkge1xuXHRpZiAoIGFzQ29kZVBvaW50ICkge1xuXG5cdFx0Ly8gVSswMDAwIE5VTEwgYmVjb21lcyBVK0ZGRkQgUkVQTEFDRU1FTlQgQ0hBUkFDVEVSXG5cdFx0aWYgKCBjaCA9PT0gXCJcXDBcIiApIHtcblx0XHRcdHJldHVybiBcIlxcdUZGRkRcIjtcblx0XHR9XG5cblx0XHQvLyBDb250cm9sIGNoYXJhY3RlcnMgYW5kIChkZXBlbmRlbnQgdXBvbiBwb3NpdGlvbikgbnVtYmVycyBnZXQgZXNjYXBlZCBhcyBjb2RlIHBvaW50c1xuXHRcdHJldHVybiBjaC5zbGljZSggMCwgLTEgKSArIFwiXFxcXFwiICsgY2guY2hhckNvZGVBdCggY2gubGVuZ3RoIC0gMSApLnRvU3RyaW5nKCAxNiApICsgXCIgXCI7XG5cdH1cblxuXHQvLyBPdGhlciBwb3RlbnRpYWxseS1zcGVjaWFsIEFTQ0lJIGNoYXJhY3RlcnMgZ2V0IGJhY2tzbGFzaC1lc2NhcGVkXG5cdHJldHVybiBcIlxcXFxcIiArIGNoO1xufVxuXG5qUXVlcnkuZXNjYXBlU2VsZWN0b3IgPSBmdW5jdGlvbiggc2VsICkge1xuXHRyZXR1cm4gKCBzZWwgKyBcIlwiICkucmVwbGFjZSggcmNzc2VzY2FwZSwgZmNzc2VzY2FwZSApO1xufTtcblxudmFyIHNvcnQgPSBhcnIuc29ydDtcblxudmFyIHNwbGljZSA9IGFyci5zcGxpY2U7XG5cbnZhciBoYXNEdXBsaWNhdGU7XG5cbi8vIERvY3VtZW50IG9yZGVyIHNvcnRpbmdcbmZ1bmN0aW9uIHNvcnRPcmRlciggYSwgYiApIHtcblxuXHQvLyBGbGFnIGZvciBkdXBsaWNhdGUgcmVtb3ZhbFxuXHRpZiAoIGEgPT09IGIgKSB7XG5cdFx0aGFzRHVwbGljYXRlID0gdHJ1ZTtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdC8vIFNvcnQgb24gbWV0aG9kIGV4aXN0ZW5jZSBpZiBvbmx5IG9uZSBpbnB1dCBoYXMgY29tcGFyZURvY3VtZW50UG9zaXRpb25cblx0dmFyIGNvbXBhcmUgPSAhYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAtICFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO1xuXHRpZiAoIGNvbXBhcmUgKSB7XG5cdFx0cmV0dXJuIGNvbXBhcmU7XG5cdH1cblxuXHQvLyBDYWxjdWxhdGUgcG9zaXRpb24gaWYgYm90aCBpbnB1dHMgYmVsb25nIHRvIHRoZSBzYW1lIGRvY3VtZW50XG5cdC8vIFN1cHBvcnQ6IElFIDExK1xuXHQvLyBJRSBzb21ldGltZXMgdGhyb3dzIGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0Y29tcGFyZSA9ICggYS5vd25lckRvY3VtZW50IHx8IGEgKSA9PSAoIGIub3duZXJEb2N1bWVudCB8fCBiICkgP1xuXHRcdGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGIgKSA6XG5cblx0XHQvLyBPdGhlcndpc2Ugd2Uga25vdyB0aGV5IGFyZSBkaXNjb25uZWN0ZWRcblx0XHQxO1xuXG5cdC8vIERpc2Nvbm5lY3RlZCBub2Rlc1xuXHRpZiAoIGNvbXBhcmUgJiAxICkge1xuXG5cdFx0Ly8gQ2hvb3NlIHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgaXMgcmVsYXRlZCB0byB0aGUgZG9jdW1lbnRcblx0XHQvLyBTdXBwb3J0OiBJRSAxMStcblx0XHQvLyBJRSBzb21ldGltZXMgdGhyb3dzIGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHRcdC8vIHR3byBkb2N1bWVudHM7IHNoYWxsb3cgY29tcGFyaXNvbnMgd29yay5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdFx0aWYgKCBhID09IGRvY3VtZW50JDEgfHwgYS5vd25lckRvY3VtZW50ID09IGRvY3VtZW50JDEgJiZcblx0XHRcdGpRdWVyeS5jb250YWlucyggZG9jdW1lbnQkMSwgYSApICkge1xuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IElFIDExK1xuXHRcdC8vIElFIHNvbWV0aW1lcyB0aHJvd3MgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdFx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0XHRpZiAoIGIgPT0gZG9jdW1lbnQkMSB8fCBiLm93bmVyRG9jdW1lbnQgPT0gZG9jdW1lbnQkMSAmJlxuXHRcdFx0alF1ZXJ5LmNvbnRhaW5zKCBkb2N1bWVudCQxLCBiICkgKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9XG5cblx0XHQvLyBNYWludGFpbiBvcmlnaW5hbCBvcmRlclxuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0cmV0dXJuIGNvbXBhcmUgJiA0ID8gLTEgOiAxO1xufVxuXG4vKipcbiAqIERvY3VtZW50IHNvcnRpbmcgYW5kIHJlbW92aW5nIGR1cGxpY2F0ZXNcbiAqIEBwYXJhbSB7QXJyYXlMaWtlfSByZXN1bHRzXG4gKi9cbmpRdWVyeS51bmlxdWVTb3J0ID0gZnVuY3Rpb24oIHJlc3VsdHMgKSB7XG5cdHZhciBlbGVtLFxuXHRcdGR1cGxpY2F0ZXMgPSBbXSxcblx0XHRqID0gMCxcblx0XHRpID0gMDtcblxuXHRoYXNEdXBsaWNhdGUgPSBmYWxzZTtcblxuXHRzb3J0LmNhbGwoIHJlc3VsdHMsIHNvcnRPcmRlciApO1xuXG5cdGlmICggaGFzRHVwbGljYXRlICkge1xuXHRcdHdoaWxlICggKCBlbGVtID0gcmVzdWx0c1sgaSsrIF0gKSApIHtcblx0XHRcdGlmICggZWxlbSA9PT0gcmVzdWx0c1sgaSBdICkge1xuXHRcdFx0XHRqID0gZHVwbGljYXRlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdoaWxlICggai0tICkge1xuXHRcdFx0c3BsaWNlLmNhbGwoIHJlc3VsdHMsIGR1cGxpY2F0ZXNbIGogXSwgMSApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHRzO1xufTtcblxualF1ZXJ5LmZuLnVuaXF1ZVNvcnQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqUXVlcnkudW5pcXVlU29ydCggc2xpY2UuYXBwbHkoIHRoaXMgKSApICk7XG59O1xuXG52YXIgaSxcblx0b3V0ZXJtb3N0Q29udGV4dCxcblxuXHQvLyBMb2NhbCBkb2N1bWVudCB2YXJzXG5cdGRvY3VtZW50LFxuXHRkb2N1bWVudEVsZW1lbnQsXG5cdGRvY3VtZW50SXNIVE1MLFxuXG5cdC8vIEluc3RhbmNlLXNwZWNpZmljIGRhdGFcblx0ZGlycnVucyA9IDAsXG5cdGRvbmUgPSAwLFxuXHRjbGFzc0NhY2hlID0gY3JlYXRlQ2FjaGUoKSxcblx0Y29tcGlsZXJDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG5cdG5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuXG5cdC8vIFJlZ3VsYXIgZXhwcmVzc2lvbnNcblxuXHQvLyBMZWFkaW5nIGFuZCBub24tZXNjYXBlZCB0cmFpbGluZyB3aGl0ZXNwYWNlLCBjYXB0dXJpbmcgc29tZSBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXJzIHByZWNlZGluZyB0aGUgbGF0dGVyXG5cdHJ3aGl0ZXNwYWNlID0gbmV3IFJlZ0V4cCggd2hpdGVzcGFjZSArIFwiK1wiLCBcImdcIiApLFxuXG5cdHJpZGVudGlmaWVyID0gbmV3IFJlZ0V4cCggXCJeXCIgKyBpZGVudGlmaWVyICsgXCIkXCIgKSxcblxuXHRtYXRjaEV4cHIgPSBqUXVlcnkuZXh0ZW5kKCB7XG5cblx0XHQvLyBGb3IgdXNlIGluIGxpYnJhcmllcyBpbXBsZW1lbnRpbmcgLmlzKClcblx0XHQvLyBXZSB1c2UgdGhpcyBmb3IgUE9TIG1hdGNoaW5nIGluIGBzZWxlY3RgXG5cdFx0bmVlZHNDb250ZXh0OiBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgK1xuXHRcdFx0XCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiICsgd2hpdGVzcGFjZSArXG5cdFx0XHRcIiooKD86LVxcXFxkKT9cXFxcZCopXCIgKyB3aGl0ZXNwYWNlICsgXCIqXFxcXCl8KSg/PVteLV18JClcIiwgXCJpXCIgKVxuXHR9LCBmaWx0ZXJNYXRjaEV4cHIgKSxcblxuXHRyaW5wdXRzID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxcblx0cmhlYWRlciA9IC9eaFxcZCQvaSxcblxuXHQvLyBFYXNpbHktcGFyc2VhYmxlL3JldHJpZXZhYmxlIElEIG9yIFRBRyBvciBDTEFTUyBzZWxlY3RvcnNcblx0cnF1aWNrRXhwciQxID0gL14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sXG5cblx0Ly8gVXNlZCBmb3IgaWZyYW1lczsgc2VlIGBzZXREb2N1bWVudGAuXG5cdC8vIFN1cHBvcnQ6IElFIDkgLSAxMStcblx0Ly8gUmVtb3ZpbmcgdGhlIGZ1bmN0aW9uIHdyYXBwZXIgY2F1c2VzIGEgXCJQZXJtaXNzaW9uIERlbmllZFwiXG5cdC8vIGVycm9yIGluIElFLlxuXHR1bmxvYWRIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0c2V0RG9jdW1lbnQoKTtcblx0fSxcblxuXHRpbkRpc2FibGVkRmllbGRzZXQgPSBhZGRDb21iaW5hdG9yKFxuXHRcdGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IHRydWUgJiYgbm9kZU5hbWUoIGVsZW0sIFwiZmllbGRzZXRcIiApO1xuXHRcdH0sXG5cdFx0eyBkaXI6IFwicGFyZW50Tm9kZVwiLCBuZXh0OiBcImxlZ2VuZFwiIH1cblx0KTtcblxuZnVuY3Rpb24gZmluZCggc2VsZWN0b3IsIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQgKSB7XG5cdHZhciBtLCBpLCBlbGVtLCBuaWQsIG1hdGNoLCBncm91cHMsIG5ld1NlbGVjdG9yLFxuXHRcdG5ld0NvbnRleHQgPSBjb250ZXh0ICYmIGNvbnRleHQub3duZXJEb2N1bWVudCxcblxuXHRcdC8vIG5vZGVUeXBlIGRlZmF1bHRzIHRvIDksIHNpbmNlIGNvbnRleHQgZGVmYXVsdHMgdG8gZG9jdW1lbnRcblx0XHRub2RlVHlwZSA9IGNvbnRleHQgPyBjb250ZXh0Lm5vZGVUeXBlIDogOTtcblxuXHRyZXN1bHRzID0gcmVzdWx0cyB8fCBbXTtcblxuXHQvLyBSZXR1cm4gZWFybHkgZnJvbSBjYWxscyB3aXRoIGludmFsaWQgc2VsZWN0b3Igb3IgY29udGV4dFxuXHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiB8fCAhc2VsZWN0b3IgfHxcblx0XHRub2RlVHlwZSAhPT0gMSAmJiBub2RlVHlwZSAhPT0gOSAmJiBub2RlVHlwZSAhPT0gMTEgKSB7XG5cblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fVxuXG5cdC8vIFRyeSB0byBzaG9ydGN1dCBmaW5kIG9wZXJhdGlvbnMgKGFzIG9wcG9zZWQgdG8gZmlsdGVycykgaW4gSFRNTCBkb2N1bWVudHNcblx0aWYgKCAhc2VlZCApIHtcblx0XHRzZXREb2N1bWVudCggY29udGV4dCApO1xuXHRcdGNvbnRleHQgPSBjb250ZXh0IHx8IGRvY3VtZW50O1xuXG5cdFx0aWYgKCBkb2N1bWVudElzSFRNTCApIHtcblxuXHRcdFx0Ly8gSWYgdGhlIHNlbGVjdG9yIGlzIHN1ZmZpY2llbnRseSBzaW1wbGUsIHRyeSB1c2luZyBhIFwiZ2V0KkJ5KlwiIERPTSBtZXRob2Rcblx0XHRcdC8vIChleGNlcHRpbmcgRG9jdW1lbnRGcmFnbWVudCBjb250ZXh0LCB3aGVyZSB0aGUgbWV0aG9kcyBkb24ndCBleGlzdClcblx0XHRcdGlmICggbm9kZVR5cGUgIT09IDExICYmICggbWF0Y2ggPSBycXVpY2tFeHByJDEuZXhlYyggc2VsZWN0b3IgKSApICkge1xuXG5cdFx0XHRcdC8vIElEIHNlbGVjdG9yXG5cdFx0XHRcdGlmICggKCBtID0gbWF0Y2hbIDEgXSApICkge1xuXG5cdFx0XHRcdFx0Ly8gRG9jdW1lbnQgY29udGV4dFxuXHRcdFx0XHRcdGlmICggbm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdFx0XHRpZiAoICggZWxlbSA9IGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQoIG0gKSApICkge1xuXHRcdFx0XHRcdFx0XHRwdXNoLmNhbGwoIHJlc3VsdHMsIGVsZW0gKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXG5cdFx0XHRcdFx0Ly8gRWxlbWVudCBjb250ZXh0XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmICggbmV3Q29udGV4dCAmJiAoIGVsZW0gPSBuZXdDb250ZXh0LmdldEVsZW1lbnRCeUlkKCBtICkgKSAmJlxuXHRcdFx0XHRcdFx0XHRqUXVlcnkuY29udGFpbnMoIGNvbnRleHQsIGVsZW0gKSApIHtcblxuXHRcdFx0XHRcdFx0XHRwdXNoLmNhbGwoIHJlc3VsdHMsIGVsZW0gKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFR5cGUgc2VsZWN0b3Jcblx0XHRcdFx0fSBlbHNlIGlmICggbWF0Y2hbIDIgXSApIHtcblx0XHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCBzZWxlY3RvciApICk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cblx0XHRcdFx0Ly8gQ2xhc3Mgc2VsZWN0b3Jcblx0XHRcdFx0fSBlbHNlIGlmICggKCBtID0gbWF0Y2hbIDMgXSApICYmIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSApIHtcblx0XHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIG0gKSApO1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRha2UgYWR2YW50YWdlIG9mIHF1ZXJ5U2VsZWN0b3JBbGxcblx0XHRcdGlmICggIW5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGVbIHNlbGVjdG9yICsgXCIgXCIgXSAmJlxuXHRcdFx0XHQoICFyYnVnZ3lRU0EgfHwgIXJidWdneVFTQS50ZXN0KCBzZWxlY3RvciApICkgKSB7XG5cblx0XHRcdFx0bmV3U2VsZWN0b3IgPSBzZWxlY3Rvcjtcblx0XHRcdFx0bmV3Q29udGV4dCA9IGNvbnRleHQ7XG5cblx0XHRcdFx0Ly8gcVNBIGNvbnNpZGVycyBlbGVtZW50cyBvdXRzaWRlIGEgc2NvcGluZyByb290IHdoZW4gZXZhbHVhdGluZyBjaGlsZCBvclxuXHRcdFx0XHQvLyBkZXNjZW5kYW50IGNvbWJpbmF0b3JzLCB3aGljaCBpcyBub3Qgd2hhdCB3ZSB3YW50LlxuXHRcdFx0XHQvLyBJbiBzdWNoIGNhc2VzLCB3ZSB3b3JrIGFyb3VuZCB0aGUgYmVoYXZpb3IgYnkgcHJlZml4aW5nIGV2ZXJ5IHNlbGVjdG9yIGluIHRoZVxuXHRcdFx0XHQvLyBsaXN0IHdpdGggYW4gSUQgc2VsZWN0b3IgcmVmZXJlbmNpbmcgdGhlIHNjb3BlIGNvbnRleHQuXG5cdFx0XHRcdC8vIFRoZSB0ZWNobmlxdWUgaGFzIHRvIGJlIHVzZWQgYXMgd2VsbCB3aGVuIGEgbGVhZGluZyBjb21iaW5hdG9yIGlzIHVzZWRcblx0XHRcdFx0Ly8gYXMgc3VjaCBzZWxlY3RvcnMgYXJlIG5vdCByZWNvZ25pemVkIGJ5IHF1ZXJ5U2VsZWN0b3JBbGwuXG5cdFx0XHRcdC8vIFRoYW5rcyB0byBBbmRyZXcgRHVwb250IGZvciB0aGlzIHRlY2huaXF1ZS5cblx0XHRcdFx0aWYgKCBub2RlVHlwZSA9PT0gMSAmJlxuXHRcdFx0XHRcdCggcmRlc2NlbmQudGVzdCggc2VsZWN0b3IgKSB8fCBybGVhZGluZ0NvbWJpbmF0b3IudGVzdCggc2VsZWN0b3IgKSApICkge1xuXG5cdFx0XHRcdFx0Ly8gRXhwYW5kIGNvbnRleHQgZm9yIHNpYmxpbmcgc2VsZWN0b3JzXG5cdFx0XHRcdFx0bmV3Q29udGV4dCA9IHJzaWJsaW5nLnRlc3QoIHNlbGVjdG9yICkgJiZcblx0XHRcdFx0XHRcdHRlc3RDb250ZXh0KCBjb250ZXh0LnBhcmVudE5vZGUgKSB8fFxuXHRcdFx0XHRcdFx0Y29udGV4dDtcblxuXHRcdFx0XHRcdC8vIE91dHNpZGUgb2YgSUUsIGlmIHdlJ3JlIG5vdCBjaGFuZ2luZyB0aGUgY29udGV4dCB3ZSBjYW5cblx0XHRcdFx0XHQvLyB1c2UgOnNjb3BlIGluc3RlYWQgb2YgYW4gSUQuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgMTErXG5cdFx0XHRcdFx0Ly8gSUUgc29tZXRpbWVzIHRocm93cyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIHN0cmljdC1jb21wYXJpbmdcblx0XHRcdFx0XHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdFx0XHRcdGlmICggbmV3Q29udGV4dCAhPSBjb250ZXh0IHx8IGlzSUUgKSB7XG5cblx0XHRcdFx0XHRcdC8vIENhcHR1cmUgdGhlIGNvbnRleHQgSUQsIHNldHRpbmcgaXQgZmlyc3QgaWYgbmVjZXNzYXJ5XG5cdFx0XHRcdFx0XHRpZiAoICggbmlkID0gY29udGV4dC5nZXRBdHRyaWJ1dGUoIFwiaWRcIiApICkgKSB7XG5cdFx0XHRcdFx0XHRcdG5pZCA9IGpRdWVyeS5lc2NhcGVTZWxlY3RvciggbmlkICk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjb250ZXh0LnNldEF0dHJpYnV0ZSggXCJpZFwiLCAoIG5pZCA9IGpRdWVyeS5leHBhbmRvICkgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBQcmVmaXggZXZlcnkgc2VsZWN0b3IgaW4gdGhlIGxpc3Rcblx0XHRcdFx0XHRncm91cHMgPSB0b2tlbml6ZSggc2VsZWN0b3IgKTtcblx0XHRcdFx0XHRpID0gZ3JvdXBzLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRcdGdyb3Vwc1sgaSBdID0gKCBuaWQgPyBcIiNcIiArIG5pZCA6IFwiOnNjb3BlXCIgKSArIFwiIFwiICtcblx0XHRcdFx0XHRcdFx0dG9TZWxlY3RvciggZ3JvdXBzWyBpIF0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bmV3U2VsZWN0b3IgPSBncm91cHMuam9pbiggXCIsXCIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cyxcblx0XHRcdFx0XHRcdG5ld0NvbnRleHQucXVlcnlTZWxlY3RvckFsbCggbmV3U2VsZWN0b3IgKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdH0gY2F0Y2ggKCBxc2FFcnJvciApIHtcblx0XHRcdFx0XHRub25uYXRpdmVTZWxlY3RvckNhY2hlKCBzZWxlY3RvciwgdHJ1ZSApO1xuXHRcdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRcdGlmICggbmlkID09PSBqUXVlcnkuZXhwYW5kbyApIHtcblx0XHRcdFx0XHRcdGNvbnRleHQucmVtb3ZlQXR0cmlidXRlKCBcImlkXCIgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBBbGwgb3RoZXJzXG5cdHJldHVybiBzZWxlY3QoIHNlbGVjdG9yLnJlcGxhY2UoIHJ0cmltQ1NTLCBcIiQxXCIgKSwgY29udGV4dCwgcmVzdWx0cywgc2VlZCApO1xufVxuXG4vKipcbiAqIE1hcmsgYSBmdW5jdGlvbiBmb3Igc3BlY2lhbCB1c2UgYnkgalF1ZXJ5IHNlbGVjdG9yIG1vZHVsZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIG1hcmtcbiAqL1xuZnVuY3Rpb24gbWFya0Z1bmN0aW9uKCBmbiApIHtcblx0Zm5bIGpRdWVyeS5leHBhbmRvIF0gPSB0cnVlO1xuXHRyZXR1cm4gZm47XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciBpbnB1dCB0eXBlc1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5wdXRQc2V1ZG8oIHR5cGUgKSB7XG5cdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gbm9kZU5hbWUoIGVsZW0sIFwiaW5wdXRcIiApICYmIGVsZW0udHlwZSA9PT0gdHlwZTtcblx0fTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIGJ1dHRvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvblBzZXVkbyggdHlwZSApIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiAoIG5vZGVOYW1lKCBlbGVtLCBcImlucHV0XCIgKSB8fCBub2RlTmFtZSggZWxlbSwgXCJidXR0b25cIiApICkgJiZcblx0XHRcdGVsZW0udHlwZSA9PT0gdHlwZTtcblx0fTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIDplbmFibGVkLzpkaXNhYmxlZFxuICogQHBhcmFtIHtCb29sZWFufSBkaXNhYmxlZCB0cnVlIGZvciA6ZGlzYWJsZWQ7IGZhbHNlIGZvciA6ZW5hYmxlZFxuICovXG5mdW5jdGlvbiBjcmVhdGVEaXNhYmxlZFBzZXVkbyggZGlzYWJsZWQgKSB7XG5cblx0Ly8gS25vd24gOmRpc2FibGVkIGZhbHNlIHBvc2l0aXZlczogZmllbGRzZXRbZGlzYWJsZWRdID4gbGVnZW5kOm50aC1vZi10eXBlKG4rMikgOmNhbi1kaXNhYmxlXG5cdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdC8vIE9ubHkgY2VydGFpbiBlbGVtZW50cyBjYW4gbWF0Y2ggOmVuYWJsZWQgb3IgOmRpc2FibGVkXG5cdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2NyaXB0aW5nLmh0bWwjc2VsZWN0b3ItZW5hYmxlZFxuXHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NjcmlwdGluZy5odG1sI3NlbGVjdG9yLWRpc2FibGVkXG5cdFx0aWYgKCBcImZvcm1cIiBpbiBlbGVtICkge1xuXG5cdFx0XHQvLyBDaGVjayBmb3IgaW5oZXJpdGVkIGRpc2FibGVkbmVzcyBvbiByZWxldmFudCBub24tZGlzYWJsZWQgZWxlbWVudHM6XG5cdFx0XHQvLyAqIGxpc3RlZCBmb3JtLWFzc29jaWF0ZWQgZWxlbWVudHMgaW4gYSBkaXNhYmxlZCBmaWVsZHNldFxuXHRcdFx0Ly8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NhdGVnb3J5LWxpc3RlZFxuXHRcdFx0Ly8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NvbmNlcHQtZmUtZGlzYWJsZWRcblx0XHRcdC8vICogb3B0aW9uIGVsZW1lbnRzIGluIGEgZGlzYWJsZWQgb3B0Z3JvdXBcblx0XHRcdC8vICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCNjb25jZXB0LW9wdGlvbi1kaXNhYmxlZFxuXHRcdFx0Ly8gQWxsIHN1Y2ggZWxlbWVudHMgaGF2ZSBhIFwiZm9ybVwiIHByb3BlcnR5LlxuXHRcdFx0aWYgKCBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbS5kaXNhYmxlZCA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0Ly8gT3B0aW9uIGVsZW1lbnRzIGRlZmVyIHRvIGEgcGFyZW50IG9wdGdyb3VwIGlmIHByZXNlbnRcblx0XHRcdFx0aWYgKCBcImxhYmVsXCIgaW4gZWxlbSApIHtcblx0XHRcdFx0XHRpZiAoIFwibGFiZWxcIiBpbiBlbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS5wYXJlbnROb2RlLmRpc2FibGVkID09PSBkaXNhYmxlZDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDYgLSAxMStcblx0XHRcdFx0Ly8gVXNlIHRoZSBpc0Rpc2FibGVkIHNob3J0Y3V0IHByb3BlcnR5IHRvIGNoZWNrIGZvciBkaXNhYmxlZCBmaWVsZHNldCBhbmNlc3RvcnNcblx0XHRcdFx0cmV0dXJuIGVsZW0uaXNEaXNhYmxlZCA9PT0gZGlzYWJsZWQgfHxcblxuXHRcdFx0XHRcdC8vIFdoZXJlIHRoZXJlIGlzIG5vIGlzRGlzYWJsZWQsIGNoZWNrIG1hbnVhbGx5XG5cdFx0XHRcdFx0ZWxlbS5pc0Rpc2FibGVkICE9PSAhZGlzYWJsZWQgJiZcblx0XHRcdFx0XHRcdGluRGlzYWJsZWRGaWVsZHNldCggZWxlbSApID09PSBkaXNhYmxlZDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXG5cdFx0Ly8gVHJ5IHRvIHdpbm5vdyBvdXQgZWxlbWVudHMgdGhhdCBjYW4ndCBiZSBkaXNhYmxlZCBiZWZvcmUgdHJ1c3RpbmcgdGhlIGRpc2FibGVkIHByb3BlcnR5LlxuXHRcdC8vIFNvbWUgdmljdGltcyBnZXQgY2F1Z2h0IGluIG91ciBuZXQgKGxhYmVsLCBsZWdlbmQsIG1lbnUsIHRyYWNrKSwgYnV0IGl0IHNob3VsZG4ndFxuXHRcdC8vIGV2ZW4gZXhpc3Qgb24gdGhlbSwgbGV0IGFsb25lIGhhdmUgYSBib29sZWFuIHZhbHVlLlxuXHRcdH0gZWxzZSBpZiAoIFwibGFiZWxcIiBpbiBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXHRcdH1cblxuXHRcdC8vIFJlbWFpbmluZyBlbGVtZW50cyBhcmUgbmVpdGhlciA6ZW5hYmxlZCBub3IgOmRpc2FibGVkXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgcG9zaXRpb25hbHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oIGZuICkge1xuXHRyZXR1cm4gbWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggYXJndW1lbnQgKSB7XG5cdFx0YXJndW1lbnQgPSArYXJndW1lbnQ7XG5cdFx0cmV0dXJuIG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIHNlZWQsIG1hdGNoZXMgKSB7XG5cdFx0XHR2YXIgaixcblx0XHRcdFx0bWF0Y2hJbmRleGVzID0gZm4oIFtdLCBzZWVkLmxlbmd0aCwgYXJndW1lbnQgKSxcblx0XHRcdFx0aSA9IG1hdGNoSW5kZXhlcy5sZW5ndGg7XG5cblx0XHRcdC8vIE1hdGNoIGVsZW1lbnRzIGZvdW5kIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhlc1xuXHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdGlmICggc2VlZFsgKCBqID0gbWF0Y2hJbmRleGVzWyBpIF0gKSBdICkge1xuXHRcdFx0XHRcdHNlZWRbIGogXSA9ICEoIG1hdGNoZXNbIGogXSA9IHNlZWRbIGogXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9ICk7XG59XG5cbi8qKlxuICogU2V0cyBkb2N1bWVudC1yZWxhdGVkIHZhcmlhYmxlcyBvbmNlIGJhc2VkIG9uIHRoZSBjdXJyZW50IGRvY3VtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0fSBbbm9kZV0gQW4gZWxlbWVudCBvciBkb2N1bWVudCBvYmplY3QgdG8gdXNlIHRvIHNldCB0aGUgZG9jdW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0RG9jdW1lbnQoIG5vZGUgKSB7XG5cdHZhciBzdWJXaW5kb3csXG5cdFx0ZG9jID0gbm9kZSA/IG5vZGUub3duZXJEb2N1bWVudCB8fCBub2RlIDogZG9jdW1lbnQkMTtcblxuXHQvLyBSZXR1cm4gZWFybHkgaWYgZG9jIGlzIGludmFsaWQgb3IgYWxyZWFkeSBzZWxlY3RlZFxuXHQvLyBTdXBwb3J0OiBJRSAxMStcblx0Ly8gSUUgc29tZXRpbWVzIHRocm93cyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIHN0cmljdC1jb21wYXJpbmdcblx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdGlmICggZG9jID09IGRvY3VtZW50IHx8IGRvYy5ub2RlVHlwZSAhPT0gOSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBVcGRhdGUgZ2xvYmFsIHZhcmlhYmxlc1xuXHRkb2N1bWVudCA9IGRvYztcblx0ZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRkb2N1bWVudElzSFRNTCA9ICFqUXVlcnkuaXNYTUxEb2MoIGRvY3VtZW50ICk7XG5cblx0Ly8gU3VwcG9ydDogSUUgOSAtIDExK1xuXHQvLyBBY2Nlc3NpbmcgaWZyYW1lIGRvY3VtZW50cyBhZnRlciB1bmxvYWQgdGhyb3dzIFwicGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvcnMgKHNlZSB0cmFjLTEzOTM2KVxuXHQvLyBTdXBwb3J0OiBJRSAxMStcblx0Ly8gSUUgc29tZXRpbWVzIHRocm93cyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIHN0cmljdC1jb21wYXJpbmdcblx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdGlmICggaXNJRSAmJiBkb2N1bWVudCQxICE9IGRvY3VtZW50ICYmXG5cdFx0KCBzdWJXaW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0VmlldyApICYmIHN1YldpbmRvdy50b3AgIT09IHN1YldpbmRvdyApIHtcblx0XHRzdWJXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJ1bmxvYWRcIiwgdW5sb2FkSGFuZGxlciApO1xuXHR9XG59XG5cbmZpbmQubWF0Y2hlcyA9IGZ1bmN0aW9uKCBleHByLCBlbGVtZW50cyApIHtcblx0cmV0dXJuIGZpbmQoIGV4cHIsIG51bGwsIG51bGwsIGVsZW1lbnRzICk7XG59O1xuXG5maW5kLm1hdGNoZXNTZWxlY3RvciA9IGZ1bmN0aW9uKCBlbGVtLCBleHByICkge1xuXHRzZXREb2N1bWVudCggZWxlbSApO1xuXG5cdGlmICggZG9jdW1lbnRJc0hUTUwgJiZcblx0XHQhbm9ubmF0aXZlU2VsZWN0b3JDYWNoZVsgZXhwciArIFwiIFwiIF0gJiZcblx0XHQoICFyYnVnZ3lRU0EgfHwgIXJidWdneVFTQS50ZXN0KCBleHByICkgKSApIHtcblxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gbWF0Y2hlcy5jYWxsKCBlbGVtLCBleHByICk7XG5cdFx0fSBjYXRjaCAoIGUgKSB7XG5cdFx0XHRub25uYXRpdmVTZWxlY3RvckNhY2hlKCBleHByLCB0cnVlICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZpbmQoIGV4cHIsIGRvY3VtZW50LCBudWxsLCBbIGVsZW0gXSApLmxlbmd0aCA+IDA7XG59O1xuXG5qUXVlcnkuZXhwciA9IHtcblxuXHQvLyBDYW4gYmUgYWRqdXN0ZWQgYnkgdGhlIHVzZXJcblx0Y2FjaGVMZW5ndGg6IDUwLFxuXG5cdGNyZWF0ZVBzZXVkbzogbWFya0Z1bmN0aW9uLFxuXG5cdG1hdGNoOiBtYXRjaEV4cHIsXG5cblx0ZmluZDoge1xuXHRcdElEOiBmdW5jdGlvbiggaWQsIGNvbnRleHQgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRCeUlkICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50SXNIVE1MICkge1xuXHRcdFx0XHR2YXIgZWxlbSA9IGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQoIGlkICk7XG5cdFx0XHRcdHJldHVybiBlbGVtID8gWyBlbGVtIF0gOiBbXTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0VEFHOiBmdW5jdGlvbiggdGFnLCBjb250ZXh0ICkge1xuXHRcdFx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHRhZyApO1xuXG5cdFx0XHRcdC8vIERvY3VtZW50RnJhZ21lbnQgbm9kZXMgZG9uJ3QgaGF2ZSBnRUJUTlxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCggdGFnICk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdENMQVNTOiBmdW5jdGlvbiggY2xhc3NOYW1lLCBjb250ZXh0ICkge1xuXHRcdFx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50SXNIVE1MICkge1xuXHRcdFx0XHRyZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBjbGFzc05hbWUgKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0cmVsYXRpdmU6IHtcblx0XHRcIj5cIjogeyBkaXI6IFwicGFyZW50Tm9kZVwiLCBmaXJzdDogdHJ1ZSB9LFxuXHRcdFwiIFwiOiB7IGRpcjogXCJwYXJlbnROb2RlXCIgfSxcblx0XHRcIitcIjogeyBkaXI6IFwicHJldmlvdXNTaWJsaW5nXCIsIGZpcnN0OiB0cnVlIH0sXG5cdFx0XCJ+XCI6IHsgZGlyOiBcInByZXZpb3VzU2libGluZ1wiIH1cblx0fSxcblxuXHRwcmVGaWx0ZXI6IHByZUZpbHRlcixcblxuXHRmaWx0ZXI6IHtcblx0XHRJRDogZnVuY3Rpb24oIGlkICkge1xuXHRcdFx0dmFyIGF0dHJJZCA9IHVuZXNjYXBlU2VsZWN0b3IoIGlkICk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSggXCJpZFwiICkgPT09IGF0dHJJZDtcblx0XHRcdH07XG5cdFx0fSxcblxuXHRcdFRBRzogZnVuY3Rpb24oIG5vZGVOYW1lU2VsZWN0b3IgKSB7XG5cdFx0XHR2YXIgZXhwZWN0ZWROb2RlTmFtZSA9IHVuZXNjYXBlU2VsZWN0b3IoIG5vZGVOYW1lU2VsZWN0b3IgKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cmV0dXJuIG5vZGVOYW1lU2VsZWN0b3IgPT09IFwiKlwiID9cblxuXHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSA6XG5cblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5vZGVOYW1lKCBlbGVtLCBleHBlY3RlZE5vZGVOYW1lICk7XG5cdFx0XHRcdH07XG5cdFx0fSxcblxuXHRcdENMQVNTOiBmdW5jdGlvbiggY2xhc3NOYW1lICkge1xuXHRcdFx0dmFyIHBhdHRlcm4gPSBjbGFzc0NhY2hlWyBjbGFzc05hbWUgKyBcIiBcIiBdO1xuXG5cdFx0XHRyZXR1cm4gcGF0dGVybiB8fFxuXHRcdFx0XHQoIHBhdHRlcm4gPSBuZXcgUmVnRXhwKCBcIihefFwiICsgd2hpdGVzcGFjZSArIFwiKVwiICsgY2xhc3NOYW1lICtcblx0XHRcdFx0XHRcIihcIiArIHdoaXRlc3BhY2UgKyBcInwkKVwiICkgKSAmJlxuXHRcdFx0XHRjbGFzc0NhY2hlKCBjbGFzc05hbWUsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRcdHJldHVybiBwYXR0ZXJuLnRlc3QoXG5cdFx0XHRcdFx0XHR0eXBlb2YgZWxlbS5jbGFzc05hbWUgPT09IFwic3RyaW5nXCIgJiYgZWxlbS5jbGFzc05hbWUgfHxcblx0XHRcdFx0XHRcdFx0dHlwZW9mIGVsZW0uZ2V0QXR0cmlidXRlICE9PSBcInVuZGVmaW5lZFwiICYmXG5cdFx0XHRcdFx0XHRcdFx0ZWxlbS5nZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIiApIHx8XG5cdFx0XHRcdFx0XHRcdFwiXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9ICk7XG5cdFx0fSxcblxuXHRcdEFUVFI6IGZ1bmN0aW9uKCBuYW1lLCBvcGVyYXRvciwgY2hlY2sgKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBqUXVlcnkuYXR0ciggZWxlbSwgbmFtZSApO1xuXG5cdFx0XHRcdGlmICggcmVzdWx0ID09IG51bGwgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9wZXJhdG9yID09PSBcIiE9XCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCAhb3BlcmF0b3IgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXN1bHQgKz0gXCJcIjtcblxuXHRcdFx0XHRpZiAoIG9wZXJhdG9yID09PSBcIj1cIiApIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0ID09PSBjaGVjaztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIG9wZXJhdG9yID09PSBcIiE9XCIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdCAhPT0gY2hlY2s7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBvcGVyYXRvciA9PT0gXCJePVwiICkge1xuXHRcdFx0XHRcdHJldHVybiBjaGVjayAmJiByZXN1bHQuaW5kZXhPZiggY2hlY2sgKSA9PT0gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIG9wZXJhdG9yID09PSBcIio9XCIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNoZWNrICYmIHJlc3VsdC5pbmRleE9mKCBjaGVjayApID4gLTE7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBvcGVyYXRvciA9PT0gXCIkPVwiICkge1xuXHRcdFx0XHRcdHJldHVybiBjaGVjayAmJiByZXN1bHQuc2xpY2UoIC1jaGVjay5sZW5ndGggKSA9PT0gY2hlY2s7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBvcGVyYXRvciA9PT0gXCJ+PVwiICkge1xuXHRcdFx0XHRcdHJldHVybiAoIFwiIFwiICsgcmVzdWx0LnJlcGxhY2UoIHJ3aGl0ZXNwYWNlLCBcIiBcIiApICsgXCIgXCIgKVxuXHRcdFx0XHRcdFx0LmluZGV4T2YoIGNoZWNrICkgPiAtMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIG9wZXJhdG9yID09PSBcInw9XCIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdCA9PT0gY2hlY2sgfHwgcmVzdWx0LnNsaWNlKCAwLCBjaGVjay5sZW5ndGggKyAxICkgPT09IGNoZWNrICsgXCItXCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH0sXG5cblx0XHRDSElMRDogZnVuY3Rpb24oIHR5cGUsIHdoYXQsIF9hcmd1bWVudCwgZmlyc3QsIGxhc3QgKSB7XG5cdFx0XHR2YXIgc2ltcGxlID0gdHlwZS5zbGljZSggMCwgMyApICE9PSBcIm50aFwiLFxuXHRcdFx0XHRmb3J3YXJkID0gdHlwZS5zbGljZSggLTQgKSAhPT0gXCJsYXN0XCIsXG5cdFx0XHRcdG9mVHlwZSA9IHdoYXQgPT09IFwib2YtdHlwZVwiO1xuXG5cdFx0XHRyZXR1cm4gZmlyc3QgPT09IDEgJiYgbGFzdCA9PT0gMCA/XG5cblx0XHRcdFx0Ly8gU2hvcnRjdXQgZm9yIDpudGgtKihuKVxuXHRcdFx0XHRmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0XHRyZXR1cm4gISFlbGVtLnBhcmVudE5vZGU7XG5cdFx0XHRcdH0gOlxuXG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtLCBfY29udGV4dCwgeG1sICkge1xuXHRcdFx0XHRcdHZhciBjYWNoZSwgb3V0ZXJDYWNoZSwgbm9kZSwgbm9kZUluZGV4LCBzdGFydCxcblx0XHRcdFx0XHRcdGRpciA9IHNpbXBsZSAhPT0gZm9yd2FyZCA/IFwibmV4dFNpYmxpbmdcIiA6IFwicHJldmlvdXNTaWJsaW5nXCIsXG5cdFx0XHRcdFx0XHRwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGUsXG5cdFx0XHRcdFx0XHRuYW1lID0gb2ZUeXBlICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0XHRcdHVzZUNhY2hlID0gIXhtbCAmJiAhb2ZUeXBlLFxuXHRcdFx0XHRcdFx0ZGlmZiA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0aWYgKCBwYXJlbnQgKSB7XG5cblx0XHRcdFx0XHRcdC8vIDooZmlyc3R8bGFzdHxvbmx5KS0oY2hpbGR8b2YtdHlwZSlcblx0XHRcdFx0XHRcdGlmICggc2ltcGxlICkge1xuXHRcdFx0XHRcdFx0XHR3aGlsZSAoIGRpciApIHtcblx0XHRcdFx0XHRcdFx0XHRub2RlID0gZWxlbTtcblx0XHRcdFx0XHRcdFx0XHR3aGlsZSAoICggbm9kZSA9IG5vZGVbIGRpciBdICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIG9mVHlwZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGVOYW1lKCBub2RlLCBuYW1lICkgOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRub2RlLm5vZGVUeXBlID09PSAxICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBSZXZlcnNlIGRpcmVjdGlvbiBmb3IgOm9ubHktKiAoaWYgd2UgaGF2ZW4ndCB5ZXQgZG9uZSBzbylcblx0XHRcdFx0XHRcdFx0XHRzdGFydCA9IGRpciA9IHR5cGUgPT09IFwib25seVwiICYmICFzdGFydCAmJiBcIm5leHRTaWJsaW5nXCI7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHN0YXJ0ID0gWyBmb3J3YXJkID8gcGFyZW50LmZpcnN0Q2hpbGQgOiBwYXJlbnQubGFzdENoaWxkIF07XG5cblx0XHRcdFx0XHRcdC8vIG5vbi14bWwgOm50aC1jaGlsZCguLi4pIHN0b3JlcyBjYWNoZSBkYXRhIG9uIGBwYXJlbnRgXG5cdFx0XHRcdFx0XHRpZiAoIGZvcndhcmQgJiYgdXNlQ2FjaGUgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gU2VlayBgZWxlbWAgZnJvbSBhIHByZXZpb3VzbHktY2FjaGVkIGluZGV4XG5cdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBwYXJlbnRbIGpRdWVyeS5leHBhbmRvIF0gfHxcblx0XHRcdFx0XHRcdFx0XHQoIHBhcmVudFsgalF1ZXJ5LmV4cGFuZG8gXSA9IHt9ICk7XG5cdFx0XHRcdFx0XHRcdGNhY2hlID0gb3V0ZXJDYWNoZVsgdHlwZSBdIHx8IFtdO1xuXHRcdFx0XHRcdFx0XHRub2RlSW5kZXggPSBjYWNoZVsgMCBdID09PSBkaXJydW5zICYmIGNhY2hlWyAxIF07XG5cdFx0XHRcdFx0XHRcdGRpZmYgPSBub2RlSW5kZXggJiYgY2FjaGVbIDIgXTtcblx0XHRcdFx0XHRcdFx0bm9kZSA9IG5vZGVJbmRleCAmJiBwYXJlbnQuY2hpbGROb2Rlc1sgbm9kZUluZGV4IF07XG5cblx0XHRcdFx0XHRcdFx0d2hpbGUgKCAoIG5vZGUgPSArK25vZGVJbmRleCAmJiBub2RlICYmIG5vZGVbIGRpciBdIHx8XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBGYWxsYmFjayB0byBzZWVraW5nIGBlbGVtYCBmcm9tIHRoZSBzdGFydFxuXHRcdFx0XHRcdFx0XHRcdCggZGlmZiA9IG5vZGVJbmRleCA9IDAgKSB8fCBzdGFydC5wb3AoKSApICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gV2hlbiBmb3VuZCwgY2FjaGUgaW5kZXhlcyBvbiBgcGFyZW50YCBhbmQgYnJlYWtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIG5vZGUubm9kZVR5cGUgPT09IDEgJiYgKytkaWZmICYmIG5vZGUgPT09IGVsZW0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvdXRlckNhY2hlWyB0eXBlIF0gPSBbIGRpcnJ1bnMsIG5vZGVJbmRleCwgZGlmZiBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gVXNlIHByZXZpb3VzbHktY2FjaGVkIGVsZW1lbnQgaW5kZXggaWYgYXZhaWxhYmxlXG5cdFx0XHRcdFx0XHRcdGlmICggdXNlQ2FjaGUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZSA9IGVsZW1bIGpRdWVyeS5leHBhbmRvIF0gfHxcblx0XHRcdFx0XHRcdFx0XHRcdCggZWxlbVsgalF1ZXJ5LmV4cGFuZG8gXSA9IHt9ICk7XG5cdFx0XHRcdFx0XHRcdFx0Y2FjaGUgPSBvdXRlckNhY2hlWyB0eXBlIF0gfHwgW107XG5cdFx0XHRcdFx0XHRcdFx0bm9kZUluZGV4ID0gY2FjaGVbIDAgXSA9PT0gZGlycnVucyAmJiBjYWNoZVsgMSBdO1xuXHRcdFx0XHRcdFx0XHRcdGRpZmYgPSBub2RlSW5kZXg7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvLyB4bWwgOm50aC1jaGlsZCguLi4pXG5cdFx0XHRcdFx0XHRcdC8vIG9yIDpudGgtbGFzdC1jaGlsZCguLi4pIG9yIDpudGgoLWxhc3QpPy1vZi10eXBlKC4uLilcblx0XHRcdFx0XHRcdFx0aWYgKCBkaWZmID09PSBmYWxzZSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFVzZSB0aGUgc2FtZSBsb29wIGFzIGFib3ZlIHRvIHNlZWsgYGVsZW1gIGZyb20gdGhlIHN0YXJ0XG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKCAoIG5vZGUgPSArK25vZGVJbmRleCAmJiBub2RlICYmIG5vZGVbIGRpciBdIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHQoIGRpZmYgPSBub2RlSW5kZXggPSAwICkgfHwgc3RhcnQucG9wKCkgKSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCAoIG9mVHlwZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGVOYW1lKCBub2RlLCBuYW1lICkgOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRub2RlLm5vZGVUeXBlID09PSAxICkgJiZcblx0XHRcdFx0XHRcdFx0XHRcdFx0KytkaWZmICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIENhY2hlIHRoZSBpbmRleCBvZiBlYWNoIGVuY291bnRlcmVkIGVsZW1lbnRcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCB1c2VDYWNoZSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvdXRlckNhY2hlID0gbm9kZVsgalF1ZXJ5LmV4cGFuZG8gXSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KCBub2RlWyBqUXVlcnkuZXhwYW5kbyBdID0ge30gKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvdXRlckNhY2hlWyB0eXBlIF0gPSBbIGRpcnJ1bnMsIGRpZmYgXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggbm9kZSA9PT0gZWxlbSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBJbmNvcnBvcmF0ZSB0aGUgb2Zmc2V0LCB0aGVuIGNoZWNrIGFnYWluc3QgY3ljbGUgc2l6ZVxuXHRcdFx0XHRcdFx0ZGlmZiAtPSBsYXN0O1xuXHRcdFx0XHRcdFx0cmV0dXJuIGRpZmYgPT09IGZpcnN0IHx8ICggZGlmZiAlIGZpcnN0ID09PSAwICYmIGRpZmYgLyBmaXJzdCA+PSAwICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdH0sXG5cblx0XHRQU0VVRE86IGZ1bmN0aW9uKCBwc2V1ZG8sIGFyZ3VtZW50ICkge1xuXG5cdFx0XHQvLyBwc2V1ZG8tY2xhc3MgbmFtZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmVcblx0XHRcdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI3BzZXVkby1jbGFzc2VzXG5cdFx0XHQvLyBQcmlvcml0aXplIGJ5IGNhc2Ugc2Vuc2l0aXZpdHkgaW4gY2FzZSBjdXN0b20gcHNldWRvcyBhcmUgYWRkZWQgd2l0aCB1cHBlcmNhc2UgbGV0dGVyc1xuXHRcdFx0Ly8gUmVtZW1iZXIgdGhhdCBzZXRGaWx0ZXJzIGluaGVyaXRzIGZyb20gcHNldWRvc1xuXHRcdFx0dmFyIGZuID0galF1ZXJ5LmV4cHIucHNldWRvc1sgcHNldWRvIF0gfHxcblx0XHRcdFx0alF1ZXJ5LmV4cHIuc2V0RmlsdGVyc1sgcHNldWRvLnRvTG93ZXJDYXNlKCkgXSB8fFxuXHRcdFx0XHRzZWxlY3RvckVycm9yKCBcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIgKyBwc2V1ZG8gKTtcblxuXHRcdFx0Ly8gVGhlIHVzZXIgbWF5IHVzZSBjcmVhdGVQc2V1ZG8gdG8gaW5kaWNhdGUgdGhhdFxuXHRcdFx0Ly8gYXJndW1lbnRzIGFyZSBuZWVkZWQgdG8gY3JlYXRlIHRoZSBmaWx0ZXIgZnVuY3Rpb25cblx0XHRcdC8vIGp1c3QgYXMgalF1ZXJ5IGRvZXNcblx0XHRcdGlmICggZm5bIGpRdWVyeS5leHBhbmRvIF0gKSB7XG5cdFx0XHRcdHJldHVybiBmbiggYXJndW1lbnQgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZuO1xuXHRcdH1cblx0fSxcblxuXHRwc2V1ZG9zOiB7XG5cblx0XHQvLyBQb3RlbnRpYWxseSBjb21wbGV4IHBzZXVkb3Ncblx0XHRub3Q6IG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXG5cdFx0XHQvLyBUcmltIHRoZSBzZWxlY3RvciBwYXNzZWQgdG8gY29tcGlsZVxuXHRcdFx0Ly8gdG8gYXZvaWQgdHJlYXRpbmcgbGVhZGluZyBhbmQgdHJhaWxpbmdcblx0XHRcdC8vIHNwYWNlcyBhcyBjb21iaW5hdG9yc1xuXHRcdFx0dmFyIGlucHV0ID0gW10sXG5cdFx0XHRcdHJlc3VsdHMgPSBbXSxcblx0XHRcdFx0bWF0Y2hlciA9IGNvbXBpbGUoIHNlbGVjdG9yLnJlcGxhY2UoIHJ0cmltQ1NTLCBcIiQxXCIgKSApO1xuXG5cdFx0XHRyZXR1cm4gbWF0Y2hlclsgalF1ZXJ5LmV4cGFuZG8gXSA/XG5cdFx0XHRcdG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIHNlZWQsIG1hdGNoZXMsIF9jb250ZXh0LCB4bWwgKSB7XG5cdFx0XHRcdFx0dmFyIGVsZW0sXG5cdFx0XHRcdFx0XHR1bm1hdGNoZWQgPSBtYXRjaGVyKCBzZWVkLCBudWxsLCB4bWwsIFtdICksXG5cdFx0XHRcdFx0XHRpID0gc2VlZC5sZW5ndGg7XG5cblx0XHRcdFx0XHQvLyBNYXRjaCBlbGVtZW50cyB1bm1hdGNoZWQgYnkgYG1hdGNoZXJgXG5cdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRpZiAoICggZWxlbSA9IHVubWF0Y2hlZFsgaSBdICkgKSB7XG5cdFx0XHRcdFx0XHRcdHNlZWRbIGkgXSA9ICEoIG1hdGNoZXNbIGkgXSA9IGVsZW0gKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKSA6XG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtLCBfY29udGV4dCwgeG1sICkge1xuXHRcdFx0XHRcdGlucHV0WyAwIF0gPSBlbGVtO1xuXHRcdFx0XHRcdG1hdGNoZXIoIGlucHV0LCBudWxsLCB4bWwsIHJlc3VsdHMgKTtcblxuXHRcdFx0XHRcdC8vIERvbid0IGtlZXAgdGhlIGVsZW1lbnRcblx0XHRcdFx0XHQvLyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvc2l6emxlL2lzc3Vlcy8yOTkpXG5cdFx0XHRcdFx0aW5wdXRbIDAgXSA9IG51bGw7XG5cdFx0XHRcdFx0cmV0dXJuICFyZXN1bHRzLnBvcCgpO1xuXHRcdFx0XHR9O1xuXHRcdH0gKSxcblxuXHRcdGhhczogbWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiBmaW5kKCBzZWxlY3RvciwgZWxlbSApLmxlbmd0aCA+IDA7XG5cdFx0XHR9O1xuXHRcdH0gKSxcblxuXHRcdGNvbnRhaW5zOiBtYXJrRnVuY3Rpb24oIGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRcdFx0dGV4dCA9IHVuZXNjYXBlU2VsZWN0b3IoIHRleHQgKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuICggZWxlbS50ZXh0Q29udGVudCB8fCBqUXVlcnkudGV4dCggZWxlbSApICkuaW5kZXhPZiggdGV4dCApID4gLTE7XG5cdFx0XHR9O1xuXHRcdH0gKSxcblxuXHRcdC8vIFwiV2hldGhlciBhbiBlbGVtZW50IGlzIHJlcHJlc2VudGVkIGJ5IGEgOmxhbmcoKSBzZWxlY3RvclxuXHRcdC8vIGlzIGJhc2VkIHNvbGVseSBvbiB0aGUgZWxlbWVudCdzIGxhbmd1YWdlIHZhbHVlXG5cdFx0Ly8gYmVpbmcgZXF1YWwgdG8gdGhlIGlkZW50aWZpZXIgQyxcblx0XHQvLyBvciBiZWdpbm5pbmcgd2l0aCB0aGUgaWRlbnRpZmllciBDIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IFwiLVwiLlxuXHRcdC8vIFRoZSBtYXRjaGluZyBvZiBDIGFnYWluc3QgdGhlIGVsZW1lbnQncyBsYW5ndWFnZSB2YWx1ZSBpcyBwZXJmb3JtZWQgY2FzZS1pbnNlbnNpdGl2ZWx5LlxuXHRcdC8vIFRoZSBpZGVudGlmaWVyIEMgZG9lcyBub3QgaGF2ZSB0byBiZSBhIHZhbGlkIGxhbmd1YWdlIG5hbWUuXCJcblx0XHQvLyBodHRwczovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNsYW5nLXBzZXVkb1xuXHRcdGxhbmc6IG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIGxhbmcgKSB7XG5cblx0XHRcdC8vIGxhbmcgdmFsdWUgbXVzdCBiZSBhIHZhbGlkIGlkZW50aWZpZXJcblx0XHRcdGlmICggIXJpZGVudGlmaWVyLnRlc3QoIGxhbmcgfHwgXCJcIiApICkge1xuXHRcdFx0XHRzZWxlY3RvckVycm9yKCBcInVuc3VwcG9ydGVkIGxhbmc6IFwiICsgbGFuZyApO1xuXHRcdFx0fVxuXHRcdFx0bGFuZyA9IHVuZXNjYXBlU2VsZWN0b3IoIGxhbmcgKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgZWxlbUxhbmc7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRpZiAoICggZWxlbUxhbmcgPSBkb2N1bWVudElzSFRNTCA/XG5cdFx0XHRcdFx0XHRlbGVtLmxhbmcgOlxuXHRcdFx0XHRcdFx0ZWxlbS5nZXRBdHRyaWJ1dGUoIFwieG1sOmxhbmdcIiApIHx8IGVsZW0uZ2V0QXR0cmlidXRlKCBcImxhbmdcIiApICkgKSB7XG5cblx0XHRcdFx0XHRcdGVsZW1MYW5nID0gZWxlbUxhbmcudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtTGFuZyA9PT0gbGFuZyB8fCBlbGVtTGFuZy5pbmRleE9mKCBsYW5nICsgXCItXCIgKSA9PT0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gd2hpbGUgKCAoIGVsZW0gPSBlbGVtLnBhcmVudE5vZGUgKSAmJiBlbGVtLm5vZGVUeXBlID09PSAxICk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH07XG5cdFx0fSApLFxuXG5cdFx0Ly8gTWlzY2VsbGFuZW91c1xuXHRcdHRhcmdldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHR2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbiAmJiB3aW5kb3cubG9jYXRpb24uaGFzaDtcblx0XHRcdHJldHVybiBoYXNoICYmIGhhc2guc2xpY2UoIDEgKSA9PT0gZWxlbS5pZDtcblx0XHR9LFxuXG5cdFx0cm9vdDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbSA9PT0gZG9jdW1lbnRFbGVtZW50O1xuXHRcdH0sXG5cblx0XHRmb2N1czogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuXHRcdFx0XHRkb2N1bWVudC5oYXNGb2N1cygpICYmXG5cdFx0XHRcdCEhKCBlbGVtLnR5cGUgfHwgZWxlbS5ocmVmIHx8IH5lbGVtLnRhYkluZGV4ICk7XG5cdFx0fSxcblxuXHRcdC8vIEJvb2xlYW4gcHJvcGVydGllc1xuXHRcdGVuYWJsZWQ6IGNyZWF0ZURpc2FibGVkUHNldWRvKCBmYWxzZSApLFxuXHRcdGRpc2FibGVkOiBjcmVhdGVEaXNhYmxlZFBzZXVkbyggdHJ1ZSApLFxuXG5cdFx0Y2hlY2tlZDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdC8vIEluIENTUzMsIDpjaGVja2VkIHNob3VsZCByZXR1cm4gYm90aCBjaGVja2VkIGFuZCBzZWxlY3RlZCBlbGVtZW50c1xuXHRcdFx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMTEvUkVDLWNzczMtc2VsZWN0b3JzLTIwMTEwOTI5LyNjaGVja2VkXG5cdFx0XHRyZXR1cm4gKCBub2RlTmFtZSggZWxlbSwgXCJpbnB1dFwiICkgJiYgISFlbGVtLmNoZWNrZWQgKSB8fFxuXHRcdFx0XHQoIG5vZGVOYW1lKCBlbGVtLCBcIm9wdGlvblwiICkgJiYgISFlbGVtLnNlbGVjdGVkICk7XG5cdFx0fSxcblxuXHRcdHNlbGVjdGVkOiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgPD0xMStcblx0XHRcdC8vIEFjY2Vzc2luZyB0aGUgc2VsZWN0ZWRJbmRleCBwcm9wZXJ0eVxuXHRcdFx0Ly8gZm9yY2VzIHRoZSBicm93c2VyIHRvIHRyZWF0IHRoZSBkZWZhdWx0IG9wdGlvbiBhc1xuXHRcdFx0Ly8gc2VsZWN0ZWQgd2hlbiBpbiBhbiBvcHRncm91cC5cblx0XHRcdGlmICggaXNJRSAmJiBlbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHRcdFx0ZWxlbS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBlbGVtLnNlbGVjdGVkID09PSB0cnVlO1xuXHRcdH0sXG5cblx0XHQvLyBDb250ZW50c1xuXHRcdGVtcHR5OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jZW1wdHktcHNldWRvXG5cdFx0XHQvLyA6ZW1wdHkgaXMgbmVnYXRlZCBieSBlbGVtZW50ICgxKSBvciBjb250ZW50IG5vZGVzICh0ZXh0OiAzOyBjZGF0YTogNDsgZW50aXR5IHJlZjogNSksXG5cdFx0XHQvLyAgIGJ1dCBub3QgYnkgb3RoZXJzIChjb21tZW50OiA4OyBwcm9jZXNzaW5nIGluc3RydWN0aW9uOiA3OyBldGMuKVxuXHRcdFx0Ly8gbm9kZVR5cGUgPCA2IHdvcmtzIGJlY2F1c2UgYXR0cmlidXRlcyAoMikgZG8gbm90IGFwcGVhciBhcyBjaGlsZHJlblxuXHRcdFx0Zm9yICggZWxlbSA9IGVsZW0uZmlyc3RDaGlsZDsgZWxlbTsgZWxlbSA9IGVsZW0ubmV4dFNpYmxpbmcgKSB7XG5cdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA8IDYgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0cGFyZW50OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiAhalF1ZXJ5LmV4cHIucHNldWRvcy5lbXB0eSggZWxlbSApO1xuXHRcdH0sXG5cblx0XHQvLyBFbGVtZW50L2lucHV0IHR5cGVzXG5cdFx0aGVhZGVyOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiByaGVhZGVyLnRlc3QoIGVsZW0ubm9kZU5hbWUgKTtcblx0XHR9LFxuXG5cdFx0aW5wdXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIHJpbnB1dHMudGVzdCggZWxlbS5ub2RlTmFtZSApO1xuXHRcdH0sXG5cblx0XHRidXR0b246IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIG5vZGVOYW1lKCBlbGVtLCBcImlucHV0XCIgKSAmJiBlbGVtLnR5cGUgPT09IFwiYnV0dG9uXCIgfHxcblx0XHRcdFx0bm9kZU5hbWUoIGVsZW0sIFwiYnV0dG9uXCIgKTtcblx0XHR9LFxuXG5cdFx0dGV4dDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gbm9kZU5hbWUoIGVsZW0sIFwiaW5wdXRcIiApICYmIGVsZW0udHlwZSA9PT0gXCJ0ZXh0XCI7XG5cdFx0fSxcblxuXHRcdC8vIFBvc2l0aW9uLWluLWNvbGxlY3Rpb25cblx0XHRmaXJzdDogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gWyAwIF07XG5cdFx0fSApLFxuXG5cdFx0bGFzdDogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oIF9tYXRjaEluZGV4ZXMsIGxlbmd0aCApIHtcblx0XHRcdHJldHVybiBbIGxlbmd0aCAtIDEgXTtcblx0XHR9ICksXG5cblx0XHRlcTogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oIF9tYXRjaEluZGV4ZXMsIGxlbmd0aCwgYXJndW1lbnQgKSB7XG5cdFx0XHRyZXR1cm4gWyBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50IF07XG5cdFx0fSApLFxuXG5cdFx0ZXZlbjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xuXHRcdFx0dmFyIGkgPSAwO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpICs9IDIgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0gKSxcblxuXHRcdG9kZDogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xuXHRcdFx0dmFyIGkgPSAxO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpICs9IDIgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0gKSxcblxuXHRcdGx0OiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKCBmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuXHRcdFx0dmFyIGk7XG5cblx0XHRcdGlmICggYXJndW1lbnQgPCAwICkge1xuXHRcdFx0XHRpID0gYXJndW1lbnQgKyBsZW5ndGg7XG5cdFx0XHR9IGVsc2UgaWYgKCBhcmd1bWVudCA+IGxlbmd0aCApIHtcblx0XHRcdFx0aSA9IGxlbmd0aDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGkgPSBhcmd1bWVudDtcblx0XHRcdH1cblxuXHRcdFx0Zm9yICggOyAtLWkgPj0gMDsgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0gKSxcblxuXHRcdGd0OiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKCBmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuXHRcdFx0dmFyIGkgPSBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50O1xuXHRcdFx0Zm9yICggOyArK2kgPCBsZW5ndGg7ICkge1xuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHR9IClcblx0fVxufTtcblxualF1ZXJ5LmV4cHIucHNldWRvcy5udGggPSBqUXVlcnkuZXhwci5wc2V1ZG9zLmVxO1xuXG4vLyBBZGQgYnV0dG9uL2lucHV0IHR5cGUgcHNldWRvc1xuZm9yICggaSBpbiB7IHJhZGlvOiB0cnVlLCBjaGVja2JveDogdHJ1ZSwgZmlsZTogdHJ1ZSwgcGFzc3dvcmQ6IHRydWUsIGltYWdlOiB0cnVlIH0gKSB7XG5cdGpRdWVyeS5leHByLnBzZXVkb3NbIGkgXSA9IGNyZWF0ZUlucHV0UHNldWRvKCBpICk7XG59XG5mb3IgKCBpIGluIHsgc3VibWl0OiB0cnVlLCByZXNldDogdHJ1ZSB9ICkge1xuXHRqUXVlcnkuZXhwci5wc2V1ZG9zWyBpIF0gPSBjcmVhdGVCdXR0b25Qc2V1ZG8oIGkgKTtcbn1cblxuLy8gRWFzeSBBUEkgZm9yIGNyZWF0aW5nIG5ldyBzZXRGaWx0ZXJzXG5mdW5jdGlvbiBzZXRGaWx0ZXJzKCkge31cbnNldEZpbHRlcnMucHJvdG90eXBlID0galF1ZXJ5LmV4cHIuZmlsdGVycyA9IGpRdWVyeS5leHByLnBzZXVkb3M7XG5qUXVlcnkuZXhwci5zZXRGaWx0ZXJzID0gbmV3IHNldEZpbHRlcnMoKTtcblxuZnVuY3Rpb24gYWRkQ29tYmluYXRvciggbWF0Y2hlciwgY29tYmluYXRvciwgYmFzZSApIHtcblx0dmFyIGRpciA9IGNvbWJpbmF0b3IuZGlyLFxuXHRcdHNraXAgPSBjb21iaW5hdG9yLm5leHQsXG5cdFx0a2V5ID0gc2tpcCB8fCBkaXIsXG5cdFx0Y2hlY2tOb25FbGVtZW50cyA9IGJhc2UgJiYga2V5ID09PSBcInBhcmVudE5vZGVcIixcblx0XHRkb25lTmFtZSA9IGRvbmUrKztcblxuXHRyZXR1cm4gY29tYmluYXRvci5maXJzdCA/XG5cblx0XHQvLyBDaGVjayBhZ2FpbnN0IGNsb3Nlc3QgYW5jZXN0b3IvcHJlY2VkaW5nIGVsZW1lbnRcblx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0d2hpbGUgKCAoIGVsZW0gPSBlbGVtWyBkaXIgXSApICkge1xuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cyApIHtcblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IDpcblxuXHRcdC8vIENoZWNrIGFnYWluc3QgYWxsIGFuY2VzdG9yL3ByZWNlZGluZyBlbGVtZW50c1xuXHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHR2YXIgb2xkQ2FjaGUsIG91dGVyQ2FjaGUsXG5cdFx0XHRcdG5ld0NhY2hlID0gWyBkaXJydW5zLCBkb25lTmFtZSBdO1xuXG5cdFx0XHQvLyBXZSBjYW4ndCBzZXQgYXJiaXRyYXJ5IGRhdGEgb24gWE1MIG5vZGVzLCBzbyB0aGV5IGRvbid0IGJlbmVmaXQgZnJvbSBjb21iaW5hdG9yIGNhY2hpbmdcblx0XHRcdGlmICggeG1sICkge1xuXHRcdFx0XHR3aGlsZSAoICggZWxlbSA9IGVsZW1bIGRpciBdICkgKSB7XG5cdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdoaWxlICggKCBlbGVtID0gZWxlbVsgZGlyIF0gKSApIHtcblx0XHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cyApIHtcblx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBlbGVtWyBqUXVlcnkuZXhwYW5kbyBdIHx8ICggZWxlbVsgalF1ZXJ5LmV4cGFuZG8gXSA9IHt9ICk7XG5cblx0XHRcdFx0XHRcdGlmICggc2tpcCAmJiBub2RlTmFtZSggZWxlbSwgc2tpcCApICkge1xuXHRcdFx0XHRcdFx0XHRlbGVtID0gZWxlbVsgZGlyIF0gfHwgZWxlbTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoICggb2xkQ2FjaGUgPSBvdXRlckNhY2hlWyBrZXkgXSApICYmXG5cdFx0XHRcdFx0XHRcdG9sZENhY2hlWyAwIF0gPT09IGRpcnJ1bnMgJiYgb2xkQ2FjaGVbIDEgXSA9PT0gZG9uZU5hbWUgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQXNzaWduIHRvIG5ld0NhY2hlIHNvIHJlc3VsdHMgYmFjay1wcm9wYWdhdGUgdG8gcHJldmlvdXMgZWxlbWVudHNcblx0XHRcdFx0XHRcdFx0cmV0dXJuICggbmV3Q2FjaGVbIDIgXSA9IG9sZENhY2hlWyAyIF0gKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gUmV1c2UgbmV3Y2FjaGUgc28gcmVzdWx0cyBiYWNrLXByb3BhZ2F0ZSB0byBwcmV2aW91cyBlbGVtZW50c1xuXHRcdFx0XHRcdFx0XHRvdXRlckNhY2hlWyBrZXkgXSA9IG5ld0NhY2hlO1xuXG5cdFx0XHRcdFx0XHRcdC8vIEEgbWF0Y2ggbWVhbnMgd2UncmUgZG9uZTsgYSBmYWlsIG1lYW5zIHdlIGhhdmUgdG8ga2VlcCBjaGVja2luZ1xuXHRcdFx0XHRcdFx0XHRpZiAoICggbmV3Q2FjaGVbIDIgXSA9IG1hdGNoZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50TWF0Y2hlciggbWF0Y2hlcnMgKSB7XG5cdHJldHVybiBtYXRjaGVycy5sZW5ndGggPiAxID9cblx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0dmFyIGkgPSBtYXRjaGVycy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0aWYgKCAhbWF0Y2hlcnNbIGkgXSggZWxlbSwgY29udGV4dCwgeG1sICkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IDpcblx0XHRtYXRjaGVyc1sgMCBdO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBsZUNvbnRleHRzKCBzZWxlY3RvciwgY29udGV4dHMsIHJlc3VsdHMgKSB7XG5cdHZhciBpID0gMCxcblx0XHRsZW4gPSBjb250ZXh0cy5sZW5ndGg7XG5cdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdGZpbmQoIHNlbGVjdG9yLCBjb250ZXh0c1sgaSBdLCByZXN1bHRzICk7XG5cdH1cblx0cmV0dXJuIHJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIGNvbmRlbnNlKCB1bm1hdGNoZWQsIG1hcCwgZmlsdGVyLCBjb250ZXh0LCB4bWwgKSB7XG5cdHZhciBlbGVtLFxuXHRcdG5ld1VubWF0Y2hlZCA9IFtdLFxuXHRcdGkgPSAwLFxuXHRcdGxlbiA9IHVubWF0Y2hlZC5sZW5ndGgsXG5cdFx0bWFwcGVkID0gbWFwICE9IG51bGw7XG5cblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0aWYgKCAoIGVsZW0gPSB1bm1hdGNoZWRbIGkgXSApICkge1xuXHRcdFx0aWYgKCAhZmlsdGVyIHx8IGZpbHRlciggZWxlbSwgY29udGV4dCwgeG1sICkgKSB7XG5cdFx0XHRcdG5ld1VubWF0Y2hlZC5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdGlmICggbWFwcGVkICkge1xuXHRcdFx0XHRcdG1hcC5wdXNoKCBpICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbmV3VW5tYXRjaGVkO1xufVxuXG5mdW5jdGlvbiBzZXRNYXRjaGVyKCBwcmVGaWx0ZXIsIHNlbGVjdG9yLCBtYXRjaGVyLCBwb3N0RmlsdGVyLCBwb3N0RmluZGVyLCBwb3N0U2VsZWN0b3IgKSB7XG5cdGlmICggcG9zdEZpbHRlciAmJiAhcG9zdEZpbHRlclsgalF1ZXJ5LmV4cGFuZG8gXSApIHtcblx0XHRwb3N0RmlsdGVyID0gc2V0TWF0Y2hlciggcG9zdEZpbHRlciApO1xuXHR9XG5cdGlmICggcG9zdEZpbmRlciAmJiAhcG9zdEZpbmRlclsgalF1ZXJ5LmV4cGFuZG8gXSApIHtcblx0XHRwb3N0RmluZGVyID0gc2V0TWF0Y2hlciggcG9zdEZpbmRlciwgcG9zdFNlbGVjdG9yICk7XG5cdH1cblx0cmV0dXJuIG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIHNlZWQsIHJlc3VsdHMsIGNvbnRleHQsIHhtbCApIHtcblx0XHR2YXIgdGVtcCwgaSwgZWxlbSwgbWF0Y2hlck91dCxcblx0XHRcdHByZU1hcCA9IFtdLFxuXHRcdFx0cG9zdE1hcCA9IFtdLFxuXHRcdFx0cHJlZXhpc3RpbmcgPSByZXN1bHRzLmxlbmd0aCxcblxuXHRcdFx0Ly8gR2V0IGluaXRpYWwgZWxlbWVudHMgZnJvbSBzZWVkIG9yIGNvbnRleHRcblx0XHRcdGVsZW1zID0gc2VlZCB8fFxuXHRcdFx0XHRtdWx0aXBsZUNvbnRleHRzKCBzZWxlY3RvciB8fCBcIipcIixcblx0XHRcdFx0XHRjb250ZXh0Lm5vZGVUeXBlID8gWyBjb250ZXh0IF0gOiBjb250ZXh0LCBbXSApLFxuXG5cdFx0XHQvLyBQcmVmaWx0ZXIgdG8gZ2V0IG1hdGNoZXIgaW5wdXQsIHByZXNlcnZpbmcgYSBtYXAgZm9yIHNlZWQtcmVzdWx0cyBzeW5jaHJvbml6YXRpb25cblx0XHRcdG1hdGNoZXJJbiA9IHByZUZpbHRlciAmJiAoIHNlZWQgfHwgIXNlbGVjdG9yICkgP1xuXHRcdFx0XHRjb25kZW5zZSggZWxlbXMsIHByZU1hcCwgcHJlRmlsdGVyLCBjb250ZXh0LCB4bWwgKSA6XG5cdFx0XHRcdGVsZW1zO1xuXG5cdFx0aWYgKCBtYXRjaGVyICkge1xuXG5cdFx0XHQvLyBJZiB3ZSBoYXZlIGEgcG9zdEZpbmRlciwgb3IgZmlsdGVyZWQgc2VlZCwgb3Igbm9uLXNlZWQgcG9zdEZpbHRlclxuXHRcdFx0Ly8gb3IgcHJlZXhpc3RpbmcgcmVzdWx0cyxcblx0XHRcdG1hdGNoZXJPdXQgPSBwb3N0RmluZGVyIHx8ICggc2VlZCA/IHByZUZpbHRlciA6IHByZWV4aXN0aW5nIHx8IHBvc3RGaWx0ZXIgKSA/XG5cblx0XHRcdFx0Ly8gLi4uaW50ZXJtZWRpYXRlIHByb2Nlc3NpbmcgaXMgbmVjZXNzYXJ5XG5cdFx0XHRcdFtdIDpcblxuXHRcdFx0XHQvLyAuLi5vdGhlcndpc2UgdXNlIHJlc3VsdHMgZGlyZWN0bHlcblx0XHRcdFx0cmVzdWx0cztcblxuXHRcdFx0Ly8gRmluZCBwcmltYXJ5IG1hdGNoZXNcblx0XHRcdG1hdGNoZXIoIG1hdGNoZXJJbiwgbWF0Y2hlck91dCwgY29udGV4dCwgeG1sICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1hdGNoZXJPdXQgPSBtYXRjaGVySW47XG5cdFx0fVxuXG5cdFx0Ly8gQXBwbHkgcG9zdEZpbHRlclxuXHRcdGlmICggcG9zdEZpbHRlciApIHtcblx0XHRcdHRlbXAgPSBjb25kZW5zZSggbWF0Y2hlck91dCwgcG9zdE1hcCApO1xuXHRcdFx0cG9zdEZpbHRlciggdGVtcCwgW10sIGNvbnRleHQsIHhtbCApO1xuXG5cdFx0XHQvLyBVbi1tYXRjaCBmYWlsaW5nIGVsZW1lbnRzIGJ5IG1vdmluZyB0aGVtIGJhY2sgdG8gbWF0Y2hlckluXG5cdFx0XHRpID0gdGVtcC5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0aWYgKCAoIGVsZW0gPSB0ZW1wWyBpIF0gKSApIHtcblx0XHRcdFx0XHRtYXRjaGVyT3V0WyBwb3N0TWFwWyBpIF0gXSA9ICEoIG1hdGNoZXJJblsgcG9zdE1hcFsgaSBdIF0gPSBlbGVtICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIHNlZWQgKSB7XG5cdFx0XHRpZiAoIHBvc3RGaW5kZXIgfHwgcHJlRmlsdGVyICkge1xuXHRcdFx0XHRpZiAoIHBvc3RGaW5kZXIgKSB7XG5cblx0XHRcdFx0XHQvLyBHZXQgdGhlIGZpbmFsIG1hdGNoZXJPdXQgYnkgY29uZGVuc2luZyB0aGlzIGludGVybWVkaWF0ZSBpbnRvIHBvc3RGaW5kZXIgY29udGV4dHNcblx0XHRcdFx0XHR0ZW1wID0gW107XG5cdFx0XHRcdFx0aSA9IG1hdGNoZXJPdXQubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoIGVsZW0gPSBtYXRjaGVyT3V0WyBpIF0gKSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBSZXN0b3JlIG1hdGNoZXJJbiBzaW5jZSBlbGVtIGlzIG5vdCB5ZXQgYSBmaW5hbCBtYXRjaFxuXHRcdFx0XHRcdFx0XHR0ZW1wLnB1c2goICggbWF0Y2hlckluWyBpIF0gPSBlbGVtICkgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cG9zdEZpbmRlciggbnVsbCwgKCBtYXRjaGVyT3V0ID0gW10gKSwgdGVtcCwgeG1sICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBNb3ZlIG1hdGNoZWQgZWxlbWVudHMgZnJvbSBzZWVkIHRvIHJlc3VsdHMgdG8ga2VlcCB0aGVtIHN5bmNocm9uaXplZFxuXHRcdFx0XHRpID0gbWF0Y2hlck91dC5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdGlmICggKCBlbGVtID0gbWF0Y2hlck91dFsgaSBdICkgJiZcblx0XHRcdFx0XHRcdCggdGVtcCA9IHBvc3RGaW5kZXIgPyBpbmRleE9mLmNhbGwoIHNlZWQsIGVsZW0gKSA6IHByZU1hcFsgaSBdICkgPiAtMSApIHtcblxuXHRcdFx0XHRcdFx0c2VlZFsgdGVtcCBdID0gISggcmVzdWx0c1sgdGVtcCBdID0gZWxlbSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0Ly8gQWRkIGVsZW1lbnRzIHRvIHJlc3VsdHMsIHRocm91Z2ggcG9zdEZpbmRlciBpZiBkZWZpbmVkXG5cdFx0fSBlbHNlIHtcblx0XHRcdG1hdGNoZXJPdXQgPSBjb25kZW5zZShcblx0XHRcdFx0bWF0Y2hlck91dCA9PT0gcmVzdWx0cyA/XG5cdFx0XHRcdFx0bWF0Y2hlck91dC5zcGxpY2UoIHByZWV4aXN0aW5nLCBtYXRjaGVyT3V0Lmxlbmd0aCApIDpcblx0XHRcdFx0XHRtYXRjaGVyT3V0XG5cdFx0XHQpO1xuXHRcdFx0aWYgKCBwb3N0RmluZGVyICkge1xuXHRcdFx0XHRwb3N0RmluZGVyKCBudWxsLCByZXN1bHRzLCBtYXRjaGVyT3V0LCB4bWwgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsIG1hdGNoZXJPdXQgKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gKTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hlckZyb21Ub2tlbnMoIHRva2VucyApIHtcblx0dmFyIGNoZWNrQ29udGV4dCwgbWF0Y2hlciwgaixcblx0XHRsZW4gPSB0b2tlbnMubGVuZ3RoLFxuXHRcdGxlYWRpbmdSZWxhdGl2ZSA9IGpRdWVyeS5leHByLnJlbGF0aXZlWyB0b2tlbnNbIDAgXS50eXBlIF0sXG5cdFx0aW1wbGljaXRSZWxhdGl2ZSA9IGxlYWRpbmdSZWxhdGl2ZSB8fCBqUXVlcnkuZXhwci5yZWxhdGl2ZVsgXCIgXCIgXSxcblx0XHRpID0gbGVhZGluZ1JlbGF0aXZlID8gMSA6IDAsXG5cblx0XHQvLyBUaGUgZm91bmRhdGlvbmFsIG1hdGNoZXIgZW5zdXJlcyB0aGF0IGVsZW1lbnRzIGFyZSByZWFjaGFibGUgZnJvbSB0b3AtbGV2ZWwgY29udGV4dChzKVxuXHRcdG1hdGNoQ29udGV4dCA9IGFkZENvbWJpbmF0b3IoIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0gPT09IGNoZWNrQ29udGV4dDtcblx0XHR9LCBpbXBsaWNpdFJlbGF0aXZlLCB0cnVlICksXG5cdFx0bWF0Y2hBbnlDb250ZXh0ID0gYWRkQ29tYmluYXRvciggZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXhPZi5jYWxsKCBjaGVja0NvbnRleHQsIGVsZW0gKSA+IC0xO1xuXHRcdH0sIGltcGxpY2l0UmVsYXRpdmUsIHRydWUgKSxcblx0XHRtYXRjaGVycyA9IFsgZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgMTErXG5cdFx0XHQvLyBJRSBzb21ldGltZXMgdGhyb3dzIGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHRcdFx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdFx0dmFyIHJldCA9ICggIWxlYWRpbmdSZWxhdGl2ZSAmJiAoIHhtbCB8fCBjb250ZXh0ICE9IG91dGVybW9zdENvbnRleHQgKSApIHx8IChcblx0XHRcdFx0KCBjaGVja0NvbnRleHQgPSBjb250ZXh0ICkubm9kZVR5cGUgP1xuXHRcdFx0XHRcdG1hdGNoQ29udGV4dCggZWxlbSwgY29udGV4dCwgeG1sICkgOlxuXHRcdFx0XHRcdG1hdGNoQW55Q29udGV4dCggZWxlbSwgY29udGV4dCwgeG1sICkgKTtcblxuXHRcdFx0Ly8gQXZvaWQgaGFuZ2luZyBvbnRvIGVsZW1lbnRcblx0XHRcdC8vIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9zaXp6bGUvaXNzdWVzLzI5OSlcblx0XHRcdGNoZWNrQ29udGV4dCA9IG51bGw7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0gXTtcblxuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRpZiAoICggbWF0Y2hlciA9IGpRdWVyeS5leHByLnJlbGF0aXZlWyB0b2tlbnNbIGkgXS50eXBlIF0gKSApIHtcblx0XHRcdG1hdGNoZXJzID0gWyBhZGRDb21iaW5hdG9yKCBlbGVtZW50TWF0Y2hlciggbWF0Y2hlcnMgKSwgbWF0Y2hlciApIF07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1hdGNoZXIgPSBqUXVlcnkuZXhwci5maWx0ZXJbIHRva2Vuc1sgaSBdLnR5cGUgXS5hcHBseSggbnVsbCwgdG9rZW5zWyBpIF0ubWF0Y2hlcyApO1xuXG5cdFx0XHQvLyBSZXR1cm4gc3BlY2lhbCB1cG9uIHNlZWluZyBhIHBvc2l0aW9uYWwgbWF0Y2hlclxuXHRcdFx0aWYgKCBtYXRjaGVyWyBqUXVlcnkuZXhwYW5kbyBdICkge1xuXG5cdFx0XHRcdC8vIEZpbmQgdGhlIG5leHQgcmVsYXRpdmUgb3BlcmF0b3IgKGlmIGFueSkgZm9yIHByb3BlciBoYW5kbGluZ1xuXHRcdFx0XHRqID0gKytpO1xuXHRcdFx0XHRmb3IgKCA7IGogPCBsZW47IGorKyApIHtcblx0XHRcdFx0XHRpZiAoIGpRdWVyeS5leHByLnJlbGF0aXZlWyB0b2tlbnNbIGogXS50eXBlIF0gKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHNldE1hdGNoZXIoXG5cdFx0XHRcdFx0aSA+IDEgJiYgZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICksXG5cdFx0XHRcdFx0aSA+IDEgJiYgdG9TZWxlY3RvcihcblxuXHRcdFx0XHRcdFx0Ly8gSWYgdGhlIHByZWNlZGluZyB0b2tlbiB3YXMgYSBkZXNjZW5kYW50IGNvbWJpbmF0b3IsIGluc2VydCBhbiBpbXBsaWNpdCBhbnktZWxlbWVudCBgKmBcblx0XHRcdFx0XHRcdHRva2Vucy5zbGljZSggMCwgaSAtIDEgKVxuXHRcdFx0XHRcdFx0XHQuY29uY2F0KCB7IHZhbHVlOiB0b2tlbnNbIGkgLSAyIF0udHlwZSA9PT0gXCIgXCIgPyBcIipcIiA6IFwiXCIgfSApXG5cdFx0XHRcdFx0KS5yZXBsYWNlKCBydHJpbUNTUywgXCIkMVwiICksXG5cdFx0XHRcdFx0bWF0Y2hlcixcblx0XHRcdFx0XHRpIDwgaiAmJiBtYXRjaGVyRnJvbVRva2VucyggdG9rZW5zLnNsaWNlKCBpLCBqICkgKSxcblx0XHRcdFx0XHRqIDwgbGVuICYmIG1hdGNoZXJGcm9tVG9rZW5zKCAoIHRva2VucyA9IHRva2Vucy5zbGljZSggaiApICkgKSxcblx0XHRcdFx0XHRqIDwgbGVuICYmIHRvU2VsZWN0b3IoIHRva2VucyApXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRtYXRjaGVycy5wdXNoKCBtYXRjaGVyICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApO1xufVxuXG5mdW5jdGlvbiBtYXRjaGVyRnJvbUdyb3VwTWF0Y2hlcnMoIGVsZW1lbnRNYXRjaGVycywgc2V0TWF0Y2hlcnMgKSB7XG5cdHZhciBieVNldCA9IHNldE1hdGNoZXJzLmxlbmd0aCA+IDAsXG5cdFx0YnlFbGVtZW50ID0gZWxlbWVudE1hdGNoZXJzLmxlbmd0aCA+IDAsXG5cdFx0c3VwZXJNYXRjaGVyID0gZnVuY3Rpb24oIHNlZWQsIGNvbnRleHQsIHhtbCwgcmVzdWx0cywgb3V0ZXJtb3N0ICkge1xuXHRcdFx0dmFyIGVsZW0sIGosIG1hdGNoZXIsXG5cdFx0XHRcdG1hdGNoZWRDb3VudCA9IDAsXG5cdFx0XHRcdGkgPSBcIjBcIixcblx0XHRcdFx0dW5tYXRjaGVkID0gc2VlZCAmJiBbXSxcblx0XHRcdFx0c2V0TWF0Y2hlZCA9IFtdLFxuXHRcdFx0XHRjb250ZXh0QmFja3VwID0gb3V0ZXJtb3N0Q29udGV4dCxcblxuXHRcdFx0XHQvLyBXZSBtdXN0IGFsd2F5cyBoYXZlIGVpdGhlciBzZWVkIGVsZW1lbnRzIG9yIG91dGVybW9zdCBjb250ZXh0XG5cdFx0XHRcdGVsZW1zID0gc2VlZCB8fCBieUVsZW1lbnQgJiYgalF1ZXJ5LmV4cHIuZmluZC5UQUcoIFwiKlwiLCBvdXRlcm1vc3QgKSxcblxuXHRcdFx0XHQvLyBVc2UgaW50ZWdlciBkaXJydW5zIGlmZiB0aGlzIGlzIHRoZSBvdXRlcm1vc3QgbWF0Y2hlclxuXHRcdFx0XHRkaXJydW5zVW5pcXVlID0gKCBkaXJydW5zICs9IGNvbnRleHRCYWNrdXAgPT0gbnVsbCA/IDEgOiBNYXRoLnJhbmRvbSgpIHx8IDAuMSApO1xuXG5cdFx0XHRpZiAoIG91dGVybW9zdCApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSAxMStcblx0XHRcdFx0Ly8gSUUgc29tZXRpbWVzIHRocm93cyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIHN0cmljdC1jb21wYXJpbmdcblx0XHRcdFx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdFx0XHRcdG91dGVybW9zdENvbnRleHQgPSBjb250ZXh0ID09IGRvY3VtZW50IHx8IGNvbnRleHQgfHwgb3V0ZXJtb3N0O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgZWxlbWVudHMgcGFzc2luZyBlbGVtZW50TWF0Y2hlcnMgZGlyZWN0bHkgdG8gcmVzdWx0c1xuXHRcdFx0Zm9yICggOyAoIGVsZW0gPSBlbGVtc1sgaSBdICkgIT0gbnVsbDsgaSsrICkge1xuXHRcdFx0XHRpZiAoIGJ5RWxlbWVudCAmJiBlbGVtICkge1xuXHRcdFx0XHRcdGogPSAwO1xuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgMTErXG5cdFx0XHRcdFx0Ly8gSUUgc29tZXRpbWVzIHRocm93cyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIHN0cmljdC1jb21wYXJpbmdcblx0XHRcdFx0XHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdFx0XHRcdGlmICggIWNvbnRleHQgJiYgZWxlbS5vd25lckRvY3VtZW50ICE9IGRvY3VtZW50ICkge1xuXHRcdFx0XHRcdFx0c2V0RG9jdW1lbnQoIGVsZW0gKTtcblx0XHRcdFx0XHRcdHhtbCA9ICFkb2N1bWVudElzSFRNTDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0d2hpbGUgKCAoIG1hdGNoZXIgPSBlbGVtZW50TWF0Y2hlcnNbIGorKyBdICkgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZXIoIGVsZW0sIGNvbnRleHQgfHwgZG9jdW1lbnQsIHhtbCApICkge1xuXHRcdFx0XHRcdFx0XHRwdXNoLmNhbGwoIHJlc3VsdHMsIGVsZW0gKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggb3V0ZXJtb3N0ICkge1xuXHRcdFx0XHRcdFx0ZGlycnVucyA9IGRpcnJ1bnNVbmlxdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVHJhY2sgdW5tYXRjaGVkIGVsZW1lbnRzIGZvciBzZXQgZmlsdGVyc1xuXHRcdFx0XHRpZiAoIGJ5U2V0ICkge1xuXG5cdFx0XHRcdFx0Ly8gVGhleSB3aWxsIGhhdmUgZ29uZSB0aHJvdWdoIGFsbCBwb3NzaWJsZSBtYXRjaGVyc1xuXHRcdFx0XHRcdGlmICggKCBlbGVtID0gIW1hdGNoZXIgJiYgZWxlbSApICkge1xuXHRcdFx0XHRcdFx0bWF0Y2hlZENvdW50LS07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gTGVuZ3RoZW4gdGhlIGFycmF5IGZvciBldmVyeSBlbGVtZW50LCBtYXRjaGVkIG9yIG5vdFxuXHRcdFx0XHRcdGlmICggc2VlZCApIHtcblx0XHRcdFx0XHRcdHVubWF0Y2hlZC5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIGBpYCBpcyBub3cgdGhlIGNvdW50IG9mIGVsZW1lbnRzIHZpc2l0ZWQgYWJvdmUsIGFuZCBhZGRpbmcgaXQgdG8gYG1hdGNoZWRDb3VudGBcblx0XHRcdC8vIG1ha2VzIHRoZSBsYXR0ZXIgbm9ubmVnYXRpdmUuXG5cdFx0XHRtYXRjaGVkQ291bnQgKz0gaTtcblxuXHRcdFx0Ly8gQXBwbHkgc2V0IGZpbHRlcnMgdG8gdW5tYXRjaGVkIGVsZW1lbnRzXG5cdFx0XHQvLyBOT1RFOiBUaGlzIGNhbiBiZSBza2lwcGVkIGlmIHRoZXJlIGFyZSBubyB1bm1hdGNoZWQgZWxlbWVudHMgKGkuZS4sIGBtYXRjaGVkQ291bnRgXG5cdFx0XHQvLyBlcXVhbHMgYGlgKSwgdW5sZXNzIHdlIGRpZG4ndCB2aXNpdCBfYW55XyBlbGVtZW50cyBpbiB0aGUgYWJvdmUgbG9vcCBiZWNhdXNlIHdlIGhhdmVcblx0XHRcdC8vIG5vIGVsZW1lbnQgbWF0Y2hlcnMgYW5kIG5vIHNlZWQuXG5cdFx0XHQvLyBJbmNyZW1lbnRpbmcgYW4gaW5pdGlhbGx5LXN0cmluZyBcIjBcIiBgaWAgYWxsb3dzIGBpYCB0byByZW1haW4gYSBzdHJpbmcgb25seSBpbiB0aGF0XG5cdFx0XHQvLyBjYXNlLCB3aGljaCB3aWxsIHJlc3VsdCBpbiBhIFwiMDBcIiBgbWF0Y2hlZENvdW50YCB0aGF0IGRpZmZlcnMgZnJvbSBgaWAgYnV0IGlzIGFsc29cblx0XHRcdC8vIG51bWVyaWNhbGx5IHplcm8uXG5cdFx0XHRpZiAoIGJ5U2V0ICYmIGkgIT09IG1hdGNoZWRDb3VudCApIHtcblx0XHRcdFx0aiA9IDA7XG5cdFx0XHRcdHdoaWxlICggKCBtYXRjaGVyID0gc2V0TWF0Y2hlcnNbIGorKyBdICkgKSB7XG5cdFx0XHRcdFx0bWF0Y2hlciggdW5tYXRjaGVkLCBzZXRNYXRjaGVkLCBjb250ZXh0LCB4bWwgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggc2VlZCApIHtcblxuXHRcdFx0XHRcdC8vIFJlaW50ZWdyYXRlIGVsZW1lbnQgbWF0Y2hlcyB0byBlbGltaW5hdGUgdGhlIG5lZWQgZm9yIHNvcnRpbmdcblx0XHRcdFx0XHRpZiAoIG1hdGNoZWRDb3VudCA+IDAgKSB7XG5cdFx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRcdFx0aWYgKCAhKCB1bm1hdGNoZWRbIGkgXSB8fCBzZXRNYXRjaGVkWyBpIF0gKSApIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRNYXRjaGVkWyBpIF0gPSBwb3AuY2FsbCggcmVzdWx0cyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRGlzY2FyZCBpbmRleCBwbGFjZWhvbGRlciB2YWx1ZXMgdG8gZ2V0IG9ubHkgYWN0dWFsIG1hdGNoZXNcblx0XHRcdFx0XHRzZXRNYXRjaGVkID0gY29uZGVuc2UoIHNldE1hdGNoZWQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFkZCBtYXRjaGVzIHRvIHJlc3VsdHNcblx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgc2V0TWF0Y2hlZCApO1xuXG5cdFx0XHRcdC8vIFNlZWRsZXNzIHNldCBtYXRjaGVzIHN1Y2NlZWRpbmcgbXVsdGlwbGUgc3VjY2Vzc2Z1bCBtYXRjaGVycyBzdGlwdWxhdGUgc29ydGluZ1xuXHRcdFx0XHRpZiAoIG91dGVybW9zdCAmJiAhc2VlZCAmJiBzZXRNYXRjaGVkLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0XHQoIG1hdGNoZWRDb3VudCArIHNldE1hdGNoZXJzLmxlbmd0aCApID4gMSApIHtcblxuXHRcdFx0XHRcdGpRdWVyeS51bmlxdWVTb3J0KCByZXN1bHRzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gT3ZlcnJpZGUgbWFuaXB1bGF0aW9uIG9mIGdsb2JhbHMgYnkgbmVzdGVkIG1hdGNoZXJzXG5cdFx0XHRpZiAoIG91dGVybW9zdCApIHtcblx0XHRcdFx0ZGlycnVucyA9IGRpcnJ1bnNVbmlxdWU7XG5cdFx0XHRcdG91dGVybW9zdENvbnRleHQgPSBjb250ZXh0QmFja3VwO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdW5tYXRjaGVkO1xuXHRcdH07XG5cblx0cmV0dXJuIGJ5U2V0ID9cblx0XHRtYXJrRnVuY3Rpb24oIHN1cGVyTWF0Y2hlciApIDpcblx0XHRzdXBlck1hdGNoZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGUoIHNlbGVjdG9yLCBtYXRjaCAvKiBJbnRlcm5hbCBVc2UgT25seSAqLyApIHtcblx0dmFyIGksXG5cdFx0c2V0TWF0Y2hlcnMgPSBbXSxcblx0XHRlbGVtZW50TWF0Y2hlcnMgPSBbXSxcblx0XHRjYWNoZWQgPSBjb21waWxlckNhY2hlWyBzZWxlY3RvciArIFwiIFwiIF07XG5cblx0aWYgKCAhY2FjaGVkICkge1xuXG5cdFx0Ly8gR2VuZXJhdGUgYSBmdW5jdGlvbiBvZiByZWN1cnNpdmUgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIHVzZWQgdG8gY2hlY2sgZWFjaCBlbGVtZW50XG5cdFx0aWYgKCAhbWF0Y2ggKSB7XG5cdFx0XHRtYXRjaCA9IHRva2VuaXplKCBzZWxlY3RvciApO1xuXHRcdH1cblx0XHRpID0gbWF0Y2gubGVuZ3RoO1xuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0Y2FjaGVkID0gbWF0Y2hlckZyb21Ub2tlbnMoIG1hdGNoWyBpIF0gKTtcblx0XHRcdGlmICggY2FjaGVkWyBqUXVlcnkuZXhwYW5kbyBdICkge1xuXHRcdFx0XHRzZXRNYXRjaGVycy5wdXNoKCBjYWNoZWQgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnRNYXRjaGVycy5wdXNoKCBjYWNoZWQgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDYWNoZSB0aGUgY29tcGlsZWQgZnVuY3Rpb25cblx0XHRjYWNoZWQgPSBjb21waWxlckNhY2hlKCBzZWxlY3Rvcixcblx0XHRcdG1hdGNoZXJGcm9tR3JvdXBNYXRjaGVycyggZWxlbWVudE1hdGNoZXJzLCBzZXRNYXRjaGVycyApICk7XG5cblx0XHQvLyBTYXZlIHNlbGVjdG9yIGFuZCB0b2tlbml6YXRpb25cblx0XHRjYWNoZWQuc2VsZWN0b3IgPSBzZWxlY3Rvcjtcblx0fVxuXHRyZXR1cm4gY2FjaGVkO1xufVxuXG4vKipcbiAqIEEgbG93LWxldmVsIHNlbGVjdGlvbiBmdW5jdGlvbiB0aGF0IHdvcmtzIHdpdGggalF1ZXJ5J3MgY29tcGlsZWRcbiAqICBzZWxlY3RvciBmdW5jdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBzZWxlY3RvciBBIHNlbGVjdG9yIG9yIGEgcHJlLWNvbXBpbGVkXG4gKiAgc2VsZWN0b3IgZnVuY3Rpb24gYnVpbHQgd2l0aCBqUXVlcnkgc2VsZWN0b3IgY29tcGlsZVxuICogQHBhcmFtIHtFbGVtZW50fSBjb250ZXh0XG4gKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0c11cbiAqIEBwYXJhbSB7QXJyYXl9IFtzZWVkXSBBIHNldCBvZiBlbGVtZW50cyB0byBtYXRjaCBhZ2FpbnN0XG4gKi9cbmZ1bmN0aW9uIHNlbGVjdCggc2VsZWN0b3IsIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQgKSB7XG5cdHZhciBpLCB0b2tlbnMsIHRva2VuLCB0eXBlLCBmaW5kLFxuXHRcdGNvbXBpbGVkID0gdHlwZW9mIHNlbGVjdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgc2VsZWN0b3IsXG5cdFx0bWF0Y2ggPSAhc2VlZCAmJiB0b2tlbml6ZSggKCBzZWxlY3RvciA9IGNvbXBpbGVkLnNlbGVjdG9yIHx8IHNlbGVjdG9yICkgKTtcblxuXHRyZXN1bHRzID0gcmVzdWx0cyB8fCBbXTtcblxuXHQvLyBUcnkgdG8gbWluaW1pemUgb3BlcmF0aW9ucyBpZiB0aGVyZSBpcyBvbmx5IG9uZSBzZWxlY3RvciBpbiB0aGUgbGlzdCBhbmQgbm8gc2VlZFxuXHQvLyAodGhlIGxhdHRlciBvZiB3aGljaCBndWFyYW50ZWVzIHVzIGNvbnRleHQpXG5cdGlmICggbWF0Y2gubGVuZ3RoID09PSAxICkge1xuXG5cdFx0Ly8gUmVkdWNlIGNvbnRleHQgaWYgdGhlIGxlYWRpbmcgY29tcG91bmQgc2VsZWN0b3IgaXMgYW4gSURcblx0XHR0b2tlbnMgPSBtYXRjaFsgMCBdID0gbWF0Y2hbIDAgXS5zbGljZSggMCApO1xuXHRcdGlmICggdG9rZW5zLmxlbmd0aCA+IDIgJiYgKCB0b2tlbiA9IHRva2Vuc1sgMCBdICkudHlwZSA9PT0gXCJJRFwiICYmXG5cdFx0XHRcdGNvbnRleHQubm9kZVR5cGUgPT09IDkgJiYgZG9jdW1lbnRJc0hUTUwgJiZcblx0XHRcdFx0alF1ZXJ5LmV4cHIucmVsYXRpdmVbIHRva2Vuc1sgMSBdLnR5cGUgXSApIHtcblxuXHRcdFx0Y29udGV4dCA9ICggalF1ZXJ5LmV4cHIuZmluZC5JRChcblx0XHRcdFx0dW5lc2NhcGVTZWxlY3RvciggdG9rZW4ubWF0Y2hlc1sgMCBdICksXG5cdFx0XHRcdGNvbnRleHRcblx0XHRcdCkgfHwgW10gKVsgMCBdO1xuXHRcdFx0aWYgKCAhY29udGV4dCApIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cblx0XHRcdC8vIFByZWNvbXBpbGVkIG1hdGNoZXJzIHdpbGwgc3RpbGwgdmVyaWZ5IGFuY2VzdHJ5LCBzbyBzdGVwIHVwIGEgbGV2ZWxcblx0XHRcdH0gZWxzZSBpZiAoIGNvbXBpbGVkICkge1xuXHRcdFx0XHRjb250ZXh0ID0gY29udGV4dC5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxlY3RvciA9IHNlbGVjdG9yLnNsaWNlKCB0b2tlbnMuc2hpZnQoKS52YWx1ZS5sZW5ndGggKTtcblx0XHR9XG5cblx0XHQvLyBGZXRjaCBhIHNlZWQgc2V0IGZvciByaWdodC10by1sZWZ0IG1hdGNoaW5nXG5cdFx0aSA9IG1hdGNoRXhwci5uZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3IgKSA/IDAgOiB0b2tlbnMubGVuZ3RoO1xuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0dG9rZW4gPSB0b2tlbnNbIGkgXTtcblxuXHRcdFx0Ly8gQWJvcnQgaWYgd2UgaGl0IGEgY29tYmluYXRvclxuXHRcdFx0aWYgKCBqUXVlcnkuZXhwci5yZWxhdGl2ZVsgKCB0eXBlID0gdG9rZW4udHlwZSApIF0gKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAoIGZpbmQgPSBqUXVlcnkuZXhwci5maW5kWyB0eXBlIF0gKSApIHtcblxuXHRcdFx0XHQvLyBTZWFyY2gsIGV4cGFuZGluZyBjb250ZXh0IGZvciBsZWFkaW5nIHNpYmxpbmcgY29tYmluYXRvcnNcblx0XHRcdFx0aWYgKCAoIHNlZWQgPSBmaW5kKFxuXHRcdFx0XHRcdHVuZXNjYXBlU2VsZWN0b3IoIHRva2VuLm1hdGNoZXNbIDAgXSApLFxuXHRcdFx0XHRcdHJzaWJsaW5nLnRlc3QoIHRva2Vuc1sgMCBdLnR5cGUgKSAmJlxuXHRcdFx0XHRcdFx0dGVzdENvbnRleHQoIGNvbnRleHQucGFyZW50Tm9kZSApIHx8IGNvbnRleHRcblx0XHRcdFx0KSApICkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgc2VlZCBpcyBlbXB0eSBvciBubyB0b2tlbnMgcmVtYWluLCB3ZSBjYW4gcmV0dXJuIGVhcmx5XG5cdFx0XHRcdFx0dG9rZW5zLnNwbGljZSggaSwgMSApO1xuXHRcdFx0XHRcdHNlbGVjdG9yID0gc2VlZC5sZW5ndGggJiYgdG9TZWxlY3RvciggdG9rZW5zICk7XG5cdFx0XHRcdFx0aWYgKCAhc2VsZWN0b3IgKSB7XG5cdFx0XHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBzZWVkICk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIENvbXBpbGUgYW5kIGV4ZWN1dGUgYSBmaWx0ZXJpbmcgZnVuY3Rpb24gaWYgb25lIGlzIG5vdCBwcm92aWRlZFxuXHQvLyBQcm92aWRlIGBtYXRjaGAgdG8gYXZvaWQgcmV0b2tlbml6YXRpb24gaWYgd2UgbW9kaWZpZWQgdGhlIHNlbGVjdG9yIGFib3ZlXG5cdCggY29tcGlsZWQgfHwgY29tcGlsZSggc2VsZWN0b3IsIG1hdGNoICkgKShcblx0XHRzZWVkLFxuXHRcdGNvbnRleHQsXG5cdFx0IWRvY3VtZW50SXNIVE1MLFxuXHRcdHJlc3VsdHMsXG5cdFx0IWNvbnRleHQgfHwgcnNpYmxpbmcudGVzdCggc2VsZWN0b3IgKSAmJiB0ZXN0Q29udGV4dCggY29udGV4dC5wYXJlbnROb2RlICkgfHwgY29udGV4dFxuXHQpO1xuXHRyZXR1cm4gcmVzdWx0cztcbn1cblxuLy8gSW5pdGlhbGl6ZSBhZ2FpbnN0IHRoZSBkZWZhdWx0IGRvY3VtZW50XG5zZXREb2N1bWVudCgpO1xuXG5qUXVlcnkuZmluZCA9IGZpbmQ7XG5cbi8vIFRoZXNlIGhhdmUgYWx3YXlzIGJlZW4gcHJpdmF0ZSwgYnV0IHRoZXkgdXNlZCB0byBiZSBkb2N1bWVudGVkIGFzIHBhcnQgb2Zcbi8vIFNpenpsZSBzbyBsZXQncyBtYWludGFpbiB0aGVtIGZvciBub3cgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHB1cnBvc2VzLlxuZmluZC5jb21waWxlID0gY29tcGlsZTtcbmZpbmQuc2VsZWN0ID0gc2VsZWN0O1xuZmluZC5zZXREb2N1bWVudCA9IHNldERvY3VtZW50O1xuZmluZC50b2tlbml6ZSA9IHRva2VuaXplO1xuXG5mdW5jdGlvbiBkaXIoIGVsZW0sIGRpciwgdW50aWwgKSB7XG5cdHZhciBtYXRjaGVkID0gW10sXG5cdFx0dHJ1bmNhdGUgPSB1bnRpbCAhPT0gdW5kZWZpbmVkO1xuXG5cdHdoaWxlICggKCBlbGVtID0gZWxlbVsgZGlyIF0gKSAmJiBlbGVtLm5vZGVUeXBlICE9PSA5ICkge1xuXHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdGlmICggdHJ1bmNhdGUgJiYgalF1ZXJ5KCBlbGVtICkuaXMoIHVudGlsICkgKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0bWF0Y2hlZC5wdXNoKCBlbGVtICk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBtYXRjaGVkO1xufVxuXG5mdW5jdGlvbiBzaWJsaW5ncyggbiwgZWxlbSApIHtcblx0dmFyIG1hdGNoZWQgPSBbXTtcblxuXHRmb3IgKCA7IG47IG4gPSBuLm5leHRTaWJsaW5nICkge1xuXHRcdGlmICggbi5ub2RlVHlwZSA9PT0gMSAmJiBuICE9PSBlbGVtICkge1xuXHRcdFx0bWF0Y2hlZC5wdXNoKCBuICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG1hdGNoZWQ7XG59XG5cbnZhciBybmVlZHNDb250ZXh0ID0galF1ZXJ5LmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O1xuXG4vLyByc2luZ2xlVGFnIG1hdGNoZXMgYSBzdHJpbmcgY29uc2lzdGluZyBvZiBhIHNpbmdsZSBIVE1MIGVsZW1lbnQgd2l0aCBubyBhdHRyaWJ1dGVzXG4vLyBhbmQgY2FwdHVyZXMgdGhlIGVsZW1lbnQncyBuYW1lXG52YXIgcnNpbmdsZVRhZyA9IC9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pO1xuXG5mdW5jdGlvbiBpc09idmlvdXNIdG1sKCBpbnB1dCApIHtcblx0cmV0dXJuIGlucHV0WyAwIF0gPT09IFwiPFwiICYmXG5cdFx0aW5wdXRbIGlucHV0Lmxlbmd0aCAtIDEgXSA9PT0gXCI+XCIgJiZcblx0XHRpbnB1dC5sZW5ndGggPj0gMztcbn1cblxuLy8gSW1wbGVtZW50IHRoZSBpZGVudGljYWwgZnVuY3Rpb25hbGl0eSBmb3IgZmlsdGVyIGFuZCBub3RcbmZ1bmN0aW9uIHdpbm5vdyggZWxlbWVudHMsIHF1YWxpZmllciwgbm90ICkge1xuXHRpZiAoIHR5cGVvZiBxdWFsaWZpZXIgPT09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdyZXAoIGVsZW1lbnRzLCBmdW5jdGlvbiggZWxlbSwgaSApIHtcblx0XHRcdHJldHVybiAhIXF1YWxpZmllci5jYWxsKCBlbGVtLCBpLCBlbGVtICkgIT09IG5vdDtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBTaW5nbGUgZWxlbWVudFxuXHRpZiAoIHF1YWxpZmllci5ub2RlVHlwZSApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdyZXAoIGVsZW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiAoIGVsZW0gPT09IHF1YWxpZmllciApICE9PSBub3Q7XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gQXJyYXlsaWtlIG9mIGVsZW1lbnRzIChqUXVlcnksIGFyZ3VtZW50cywgQXJyYXkpXG5cdGlmICggdHlwZW9mIHF1YWxpZmllciAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdyZXAoIGVsZW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiAoIGluZGV4T2YuY2FsbCggcXVhbGlmaWVyLCBlbGVtICkgPiAtMSApICE9PSBub3Q7XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gRmlsdGVyZWQgZGlyZWN0bHkgZm9yIGJvdGggc2ltcGxlIGFuZCBjb21wbGV4IHNlbGVjdG9yc1xuXHRyZXR1cm4galF1ZXJ5LmZpbHRlciggcXVhbGlmaWVyLCBlbGVtZW50cywgbm90ICk7XG59XG5cbmpRdWVyeS5maWx0ZXIgPSBmdW5jdGlvbiggZXhwciwgZWxlbXMsIG5vdCApIHtcblx0dmFyIGVsZW0gPSBlbGVtc1sgMCBdO1xuXG5cdGlmICggbm90ICkge1xuXHRcdGV4cHIgPSBcIjpub3QoXCIgKyBleHByICsgXCIpXCI7XG5cdH1cblxuXHRpZiAoIGVsZW1zLmxlbmd0aCA9PT0gMSAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdHJldHVybiBqUXVlcnkuZmluZC5tYXRjaGVzU2VsZWN0b3IoIGVsZW0sIGV4cHIgKSA/IFsgZWxlbSBdIDogW107XG5cdH1cblxuXHRyZXR1cm4galF1ZXJ5LmZpbmQubWF0Y2hlcyggZXhwciwgalF1ZXJ5LmdyZXAoIGVsZW1zLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZWxlbS5ub2RlVHlwZSA9PT0gMTtcblx0fSApICk7XG59O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGZpbmQ6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHR2YXIgaSwgcmV0LFxuXHRcdFx0bGVuID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRzZWxmID0gdGhpcztcblxuXHRcdGlmICggdHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqUXVlcnkoIHNlbGVjdG9yICkuZmlsdGVyKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0XHRpZiAoIGpRdWVyeS5jb250YWlucyggc2VsZlsgaSBdLCB0aGlzICkgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gKSApO1xuXHRcdH1cblxuXHRcdHJldCA9IHRoaXMucHVzaFN0YWNrKCBbXSApO1xuXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdGpRdWVyeS5maW5kKCBzZWxlY3Rvciwgc2VsZlsgaSBdLCByZXQgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbGVuID4gMSA/IGpRdWVyeS51bmlxdWVTb3J0KCByZXQgKSA6IHJldDtcblx0fSxcblx0ZmlsdGVyOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCB3aW5ub3coIHRoaXMsIHNlbGVjdG9yIHx8IFtdLCBmYWxzZSApICk7XG5cdH0sXG5cdG5vdDogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggd2lubm93KCB0aGlzLCBzZWxlY3RvciB8fCBbXSwgdHJ1ZSApICk7XG5cdH0sXG5cdGlzOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuICEhd2lubm93KFxuXHRcdFx0dGhpcyxcblxuXHRcdFx0Ly8gSWYgdGhpcyBpcyBhIHBvc2l0aW9uYWwvcmVsYXRpdmUgc2VsZWN0b3IsIGNoZWNrIG1lbWJlcnNoaXAgaW4gdGhlIHJldHVybmVkIHNldFxuXHRcdFx0Ly8gc28gJChcInA6Zmlyc3RcIikuaXMoXCJwOmxhc3RcIikgd29uJ3QgcmV0dXJuIHRydWUgZm9yIGEgZG9jIHdpdGggdHdvIFwicFwiLlxuXHRcdFx0dHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICYmIHJuZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3IgKSA/XG5cdFx0XHRcdGpRdWVyeSggc2VsZWN0b3IgKSA6XG5cdFx0XHRcdHNlbGVjdG9yIHx8IFtdLFxuXHRcdFx0ZmFsc2Vcblx0XHQpLmxlbmd0aDtcblx0fVxufSApO1xuXG4vLyBJbml0aWFsaXplIGEgalF1ZXJ5IG9iamVjdFxuXG4vLyBBIGNlbnRyYWwgcmVmZXJlbmNlIHRvIHRoZSByb290IGpRdWVyeShkb2N1bWVudClcbnZhciByb290alF1ZXJ5LFxuXG5cdC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXG5cdC8vIFByaW9yaXRpemUgI2lkIG92ZXIgPHRhZz4gdG8gYXZvaWQgWFNTIHZpYSBsb2NhdGlvbi5oYXNoICh0cmFjLTk1MjEpXG5cdC8vIFN0cmljdCBIVE1MIHJlY29nbml0aW9uICh0cmFjLTExMjkwOiBtdXN0IHN0YXJ0IHdpdGggPClcblx0Ly8gU2hvcnRjdXQgc2ltcGxlICNpZCBjYXNlIGZvciBzcGVlZFxuXHRycXVpY2tFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC8sXG5cblx0aW5pdCA9IGpRdWVyeS5mbi5pbml0ID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0ICkge1xuXHRcdHZhciBtYXRjaCwgZWxlbTtcblxuXHRcdC8vIEhBTkRMRTogJChcIlwiKSwgJChudWxsKSwgJCh1bmRlZmluZWQpLCAkKGZhbHNlKVxuXHRcdGlmICggIXNlbGVjdG9yICkge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0Ly8gSEFORExFOiAkKERPTUVsZW1lbnQpXG5cdFx0aWYgKCBzZWxlY3Rvci5ub2RlVHlwZSApIHtcblx0XHRcdHRoaXNbIDAgXSA9IHNlbGVjdG9yO1xuXHRcdFx0dGhpcy5sZW5ndGggPSAxO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHQvLyBIQU5ETEU6ICQoZnVuY3Rpb24pXG5cdFx0Ly8gU2hvcnRjdXQgZm9yIGRvY3VtZW50IHJlYWR5XG5cdFx0fSBlbHNlIGlmICggdHlwZW9mIHNlbGVjdG9yID09PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRyZXR1cm4gcm9vdGpRdWVyeS5yZWFkeSAhPT0gdW5kZWZpbmVkID9cblx0XHRcdFx0cm9vdGpRdWVyeS5yZWFkeSggc2VsZWN0b3IgKSA6XG5cblx0XHRcdFx0Ly8gRXhlY3V0ZSBpbW1lZGlhdGVseSBpZiByZWFkeSBpcyBub3QgcHJlc2VudFxuXHRcdFx0XHRzZWxlY3RvciggalF1ZXJ5ICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBIYW5kbGUgb2J2aW91cyBIVE1MIHN0cmluZ3Ncblx0XHRcdG1hdGNoID0gc2VsZWN0b3IgKyBcIlwiO1xuXHRcdFx0aWYgKCBpc09idmlvdXNIdG1sKCBtYXRjaCApICkge1xuXG5cdFx0XHRcdC8vIEFzc3VtZSB0aGF0IHN0cmluZ3MgdGhhdCBzdGFydCBhbmQgZW5kIHdpdGggPD4gYXJlIEhUTUwgYW5kIHNraXBcblx0XHRcdFx0Ly8gdGhlIHJlZ2V4IGNoZWNrLiBUaGlzIGFsc28gaGFuZGxlcyBicm93c2VyLXN1cHBvcnRlZCBIVE1MIHdyYXBwZXJzXG5cdFx0XHRcdC8vIGxpa2UgVHJ1c3RlZEhUTUwuXG5cdFx0XHRcdG1hdGNoID0gWyBudWxsLCBzZWxlY3RvciwgbnVsbCBdO1xuXG5cdFx0XHQvLyBIYW5kbGUgSFRNTCBzdHJpbmdzIG9yIHNlbGVjdG9yc1xuXHRcdFx0fSBlbHNlIGlmICggdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRtYXRjaCA9IHJxdWlja0V4cHIuZXhlYyggc2VsZWN0b3IgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBqUXVlcnkubWFrZUFycmF5KCBzZWxlY3RvciwgdGhpcyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBNYXRjaCBodG1sIG9yIG1ha2Ugc3VyZSBubyBjb250ZXh0IGlzIHNwZWNpZmllZCBmb3IgI2lkXG5cdFx0XHQvLyBOb3RlOiBtYXRjaFsxXSBtYXkgYmUgYSBzdHJpbmcgb3IgYSBUcnVzdGVkSFRNTCB3cmFwcGVyXG5cdFx0XHRpZiAoIG1hdGNoICYmICggbWF0Y2hbIDEgXSB8fCAhY29udGV4dCApICkge1xuXG5cdFx0XHRcdC8vIEhBTkRMRTogJChodG1sKSAtPiAkKGFycmF5KVxuXHRcdFx0XHRpZiAoIG1hdGNoWyAxIF0gKSB7XG5cdFx0XHRcdFx0Y29udGV4dCA9IGNvbnRleHQgaW5zdGFuY2VvZiBqUXVlcnkgPyBjb250ZXh0WyAwIF0gOiBjb250ZXh0O1xuXG5cdFx0XHRcdFx0Ly8gT3B0aW9uIHRvIHJ1biBzY3JpcHRzIGlzIHRydWUgZm9yIGJhY2stY29tcGF0XG5cdFx0XHRcdFx0Ly8gSW50ZW50aW9uYWxseSBsZXQgdGhlIGVycm9yIGJlIHRocm93biBpZiBwYXJzZUhUTUwgaXMgbm90IHByZXNlbnRcblx0XHRcdFx0XHRqUXVlcnkubWVyZ2UoIHRoaXMsIGpRdWVyeS5wYXJzZUhUTUwoXG5cdFx0XHRcdFx0XHRtYXRjaFsgMSBdLFxuXHRcdFx0XHRcdFx0Y29udGV4dCAmJiBjb250ZXh0Lm5vZGVUeXBlID8gY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQgOiBkb2N1bWVudCQxLFxuXHRcdFx0XHRcdFx0dHJ1ZVxuXHRcdFx0XHRcdCkgKTtcblxuXHRcdFx0XHRcdC8vIEhBTkRMRTogJChodG1sLCBwcm9wcylcblx0XHRcdFx0XHRpZiAoIHJzaW5nbGVUYWcudGVzdCggbWF0Y2hbIDEgXSApICYmIGpRdWVyeS5pc1BsYWluT2JqZWN0KCBjb250ZXh0ICkgKSB7XG5cdFx0XHRcdFx0XHRmb3IgKCBtYXRjaCBpbiBjb250ZXh0ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFByb3BlcnRpZXMgb2YgY29udGV4dCBhcmUgY2FsbGVkIGFzIG1ldGhvZHMgaWYgcG9zc2libGVcblx0XHRcdFx0XHRcdFx0aWYgKCB0eXBlb2YgdGhpc1sgbWF0Y2ggXSA9PT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXNbIG1hdGNoIF0oIGNvbnRleHRbIG1hdGNoIF0gKTtcblxuXHRcdFx0XHRcdFx0XHQvLyAuLi5hbmQgb3RoZXJ3aXNlIHNldCBhcyBhdHRyaWJ1dGVzXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5hdHRyKCBtYXRjaCwgY29udGV4dFsgbWF0Y2ggXSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHRcdFx0Ly8gSEFORExFOiAkKCNpZClcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbGVtID0gZG9jdW1lbnQkMS5nZXRFbGVtZW50QnlJZCggbWF0Y2hbIDIgXSApO1xuXG5cdFx0XHRcdFx0aWYgKCBlbGVtICkge1xuXG5cdFx0XHRcdFx0XHQvLyBJbmplY3QgdGhlIGVsZW1lbnQgZGlyZWN0bHkgaW50byB0aGUgalF1ZXJ5IG9iamVjdFxuXHRcdFx0XHRcdFx0dGhpc1sgMCBdID0gZWxlbTtcblx0XHRcdFx0XHRcdHRoaXMubGVuZ3RoID0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gSEFORExFOiAkKGV4cHIpICYgJChleHByLCAkKC4uLikpXG5cdFx0XHR9IGVsc2UgaWYgKCAhY29udGV4dCB8fCBjb250ZXh0LmpxdWVyeSApIHtcblx0XHRcdFx0cmV0dXJuICggY29udGV4dCB8fCByb290alF1ZXJ5ICkuZmluZCggc2VsZWN0b3IgKTtcblxuXHRcdFx0Ly8gSEFORExFOiAkKGV4cHIsIGNvbnRleHQpXG5cdFx0XHQvLyAod2hpY2ggaXMganVzdCBlcXVpdmFsZW50IHRvOiAkKGNvbnRleHQpLmZpbmQoZXhwcilcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKCBjb250ZXh0ICkuZmluZCggc2VsZWN0b3IgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fTtcblxuLy8gR2l2ZSB0aGUgaW5pdCBmdW5jdGlvbiB0aGUgalF1ZXJ5IHByb3RvdHlwZSBmb3IgbGF0ZXIgaW5zdGFudGlhdGlvblxuaW5pdC5wcm90b3R5cGUgPSBqUXVlcnkuZm47XG5cbi8vIEluaXRpYWxpemUgY2VudHJhbCByZWZlcmVuY2VcbnJvb3RqUXVlcnkgPSBqUXVlcnkoIGRvY3VtZW50JDEgKTtcblxudmFyIHJwYXJlbnRzcHJldiA9IC9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLFxuXG5cdC8vIE1ldGhvZHMgZ3VhcmFudGVlZCB0byBwcm9kdWNlIGEgdW5pcXVlIHNldCB3aGVuIHN0YXJ0aW5nIGZyb20gYSB1bmlxdWUgc2V0XG5cdGd1YXJhbnRlZWRVbmlxdWUgPSB7XG5cdFx0Y2hpbGRyZW46IHRydWUsXG5cdFx0Y29udGVudHM6IHRydWUsXG5cdFx0bmV4dDogdHJ1ZSxcblx0XHRwcmV2OiB0cnVlXG5cdH07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0aGFzOiBmdW5jdGlvbiggdGFyZ2V0ICkge1xuXHRcdHZhciB0YXJnZXRzID0galF1ZXJ5KCB0YXJnZXQsIHRoaXMgKSxcblx0XHRcdGwgPSB0YXJnZXRzLmxlbmd0aDtcblxuXHRcdHJldHVybiB0aGlzLmZpbHRlciggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdGlmICggalF1ZXJ5LmNvbnRhaW5zKCB0aGlzLCB0YXJnZXRzWyBpIF0gKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRjbG9zZXN0OiBmdW5jdGlvbiggc2VsZWN0b3JzLCBjb250ZXh0ICkge1xuXHRcdHZhciBjdXIsXG5cdFx0XHRpID0gMCxcblx0XHRcdGwgPSB0aGlzLmxlbmd0aCxcblx0XHRcdG1hdGNoZWQgPSBbXSxcblx0XHRcdHRhcmdldHMgPSB0eXBlb2Ygc2VsZWN0b3JzICE9PSBcInN0cmluZ1wiICYmIGpRdWVyeSggc2VsZWN0b3JzICk7XG5cblx0XHQvLyBQb3NpdGlvbmFsIHNlbGVjdG9ycyBuZXZlciBtYXRjaCwgc2luY2UgdGhlcmUncyBubyBfc2VsZWN0aW9uXyBjb250ZXh0XG5cdFx0aWYgKCAhcm5lZWRzQ29udGV4dC50ZXN0KCBzZWxlY3RvcnMgKSApIHtcblx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0Zm9yICggY3VyID0gdGhpc1sgaSBdOyBjdXIgJiYgY3VyICE9PSBjb250ZXh0OyBjdXIgPSBjdXIucGFyZW50Tm9kZSApIHtcblxuXHRcdFx0XHRcdC8vIEFsd2F5cyBza2lwIGRvY3VtZW50IGZyYWdtZW50c1xuXHRcdFx0XHRcdGlmICggY3VyLm5vZGVUeXBlIDwgMTEgJiYgKCB0YXJnZXRzID9cblx0XHRcdFx0XHRcdHRhcmdldHMuaW5kZXgoIGN1ciApID4gLTEgOlxuXG5cdFx0XHRcdFx0XHQvLyBEb24ndCBwYXNzIG5vbi1lbGVtZW50cyB0byBqUXVlcnkjZmluZFxuXHRcdFx0XHRcdFx0Y3VyLm5vZGVUeXBlID09PSAxICYmXG5cdFx0XHRcdFx0XHRcdGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvciggY3VyLCBzZWxlY3RvcnMgKSApICkge1xuXG5cdFx0XHRcdFx0XHRtYXRjaGVkLnB1c2goIGN1ciApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBtYXRjaGVkLmxlbmd0aCA+IDEgPyBqUXVlcnkudW5pcXVlU29ydCggbWF0Y2hlZCApIDogbWF0Y2hlZCApO1xuXHR9LFxuXG5cdC8vIERldGVybWluZSB0aGUgcG9zaXRpb24gb2YgYW4gZWxlbWVudCB3aXRoaW4gdGhlIHNldFxuXHRpbmRleDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHQvLyBObyBhcmd1bWVudCwgcmV0dXJuIGluZGV4IGluIHBhcmVudFxuXHRcdGlmICggIWVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gKCB0aGlzWyAwIF0gJiYgdGhpc1sgMCBdLnBhcmVudE5vZGUgKSA/IHRoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoIDogLTE7XG5cdFx0fVxuXG5cdFx0Ly8gSW5kZXggaW4gc2VsZWN0b3Jcblx0XHRpZiAoIHR5cGVvZiBlbGVtID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0cmV0dXJuIGluZGV4T2YuY2FsbCggalF1ZXJ5KCBlbGVtICksIHRoaXNbIDAgXSApO1xuXHRcdH1cblxuXHRcdC8vIExvY2F0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGRlc2lyZWQgZWxlbWVudFxuXHRcdHJldHVybiBpbmRleE9mLmNhbGwoIHRoaXMsXG5cblx0XHRcdC8vIElmIGl0IHJlY2VpdmVzIGEgalF1ZXJ5IG9iamVjdCwgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdXNlZFxuXHRcdFx0ZWxlbS5qcXVlcnkgPyBlbGVtWyAwIF0gOiBlbGVtXG5cdFx0KTtcblx0fSxcblxuXHRhZGQ6IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCApIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soXG5cdFx0XHRqUXVlcnkudW5pcXVlU29ydChcblx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCB0aGlzLmdldCgpLCBqUXVlcnkoIHNlbGVjdG9yLCBjb250ZXh0ICkgKVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0YWRkQmFjazogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiB0aGlzLmFkZCggc2VsZWN0b3IgPT0gbnVsbCA/XG5cdFx0XHR0aGlzLnByZXZPYmplY3QgOiB0aGlzLnByZXZPYmplY3QuZmlsdGVyKCBzZWxlY3RvciApXG5cdFx0KTtcblx0fVxufSApO1xuXG5mdW5jdGlvbiBzaWJsaW5nKCBjdXIsIGRpciApIHtcblx0d2hpbGUgKCAoIGN1ciA9IGN1clsgZGlyIF0gKSAmJiBjdXIubm9kZVR5cGUgIT09IDEgKSB7fVxuXHRyZXR1cm4gY3VyO1xufVxuXG5qUXVlcnkuZWFjaCgge1xuXHRwYXJlbnQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cdFx0cmV0dXJuIHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgIT09IDExID8gcGFyZW50IDogbnVsbDtcblx0fSxcblx0cGFyZW50czogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJwYXJlbnROb2RlXCIgKTtcblx0fSxcblx0cGFyZW50c1VudGlsOiBmdW5jdGlvbiggZWxlbSwgX2ksIHVudGlsICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwicGFyZW50Tm9kZVwiLCB1bnRpbCApO1xuXHR9LFxuXHRuZXh0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gc2libGluZyggZWxlbSwgXCJuZXh0U2libGluZ1wiICk7XG5cdH0sXG5cdHByZXY6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBzaWJsaW5nKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiICk7XG5cdH0sXG5cdG5leHRBbGw6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwibmV4dFNpYmxpbmdcIiApO1xuXHR9LFxuXHRwcmV2QWxsOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiICk7XG5cdH0sXG5cdG5leHRVbnRpbDogZnVuY3Rpb24oIGVsZW0sIF9pLCB1bnRpbCApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcIm5leHRTaWJsaW5nXCIsIHVudGlsICk7XG5cdH0sXG5cdHByZXZVbnRpbDogZnVuY3Rpb24oIGVsZW0sIF9pLCB1bnRpbCApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiLCB1bnRpbCApO1xuXHR9LFxuXHRzaWJsaW5nczogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIHNpYmxpbmdzKCAoIGVsZW0ucGFyZW50Tm9kZSB8fCB7fSApLmZpcnN0Q2hpbGQsIGVsZW0gKTtcblx0fSxcblx0Y2hpbGRyZW46IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBzaWJsaW5ncyggZWxlbS5maXJzdENoaWxkICk7XG5cdH0sXG5cdGNvbnRlbnRzOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRpZiAoIGVsZW0uY29udGVudERvY3VtZW50ICE9IG51bGwgJiZcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgMTErXG5cdFx0XHQvLyA8b2JqZWN0PiBlbGVtZW50cyB3aXRoIG5vIGBkYXRhYCBhdHRyaWJ1dGUgaGFzIGFuIG9iamVjdFxuXHRcdFx0Ly8gYGNvbnRlbnREb2N1bWVudGAgd2l0aCBhIGBudWxsYCBwcm90b3R5cGUuXG5cdFx0XHRnZXRQcm90byggZWxlbS5jb250ZW50RG9jdW1lbnQgKSApIHtcblxuXHRcdFx0cmV0dXJuIGVsZW0uY29udGVudERvY3VtZW50O1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMStcblx0XHQvLyBUcmVhdCB0aGUgdGVtcGxhdGUgZWxlbWVudCBhcyBhIHJlZ3VsYXIgb25lIGluIGJyb3dzZXJzIHRoYXRcblx0XHQvLyBkb24ndCBzdXBwb3J0IGl0LlxuXHRcdGlmICggbm9kZU5hbWUoIGVsZW0sIFwidGVtcGxhdGVcIiApICkge1xuXHRcdFx0ZWxlbSA9IGVsZW0uY29udGVudCB8fCBlbGVtO1xuXHRcdH1cblxuXHRcdHJldHVybiBqUXVlcnkubWVyZ2UoIFtdLCBlbGVtLmNoaWxkTm9kZXMgKTtcblx0fVxufSwgZnVuY3Rpb24oIG5hbWUsIGZuICkge1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCB1bnRpbCwgc2VsZWN0b3IgKSB7XG5cdFx0dmFyIG1hdGNoZWQgPSBqUXVlcnkubWFwKCB0aGlzLCBmbiwgdW50aWwgKTtcblxuXHRcdGlmICggbmFtZS5zbGljZSggLTUgKSAhPT0gXCJVbnRpbFwiICkge1xuXHRcdFx0c2VsZWN0b3IgPSB1bnRpbDtcblx0XHR9XG5cblx0XHRpZiAoIHNlbGVjdG9yICYmIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdG1hdGNoZWQgPSBqUXVlcnkuZmlsdGVyKCBzZWxlY3RvciwgbWF0Y2hlZCApO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5sZW5ndGggPiAxICkge1xuXG5cdFx0XHQvLyBSZW1vdmUgZHVwbGljYXRlc1xuXHRcdFx0aWYgKCAhZ3VhcmFudGVlZFVuaXF1ZVsgbmFtZSBdICkge1xuXHRcdFx0XHRqUXVlcnkudW5pcXVlU29ydCggbWF0Y2hlZCApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZXZlcnNlIG9yZGVyIGZvciBwYXJlbnRzKiBhbmQgcHJldi1kZXJpdmF0aXZlc1xuXHRcdFx0aWYgKCBycGFyZW50c3ByZXYudGVzdCggbmFtZSApICkge1xuXHRcdFx0XHRtYXRjaGVkLnJldmVyc2UoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIG1hdGNoZWQgKTtcblx0fTtcbn0gKTtcblxuLy8gQ29udmVydCBTdHJpbmctZm9ybWF0dGVkIG9wdGlvbnMgaW50byBPYmplY3QtZm9ybWF0dGVkIG9uZXNcbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMoIG9wdGlvbnMgKSB7XG5cdHZhciBvYmplY3QgPSB7fTtcblx0alF1ZXJ5LmVhY2goIG9wdGlvbnMubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXSwgZnVuY3Rpb24oIF8sIGZsYWcgKSB7XG5cdFx0b2JqZWN0WyBmbGFnIF0gPSB0cnVlO1xuXHR9ICk7XG5cdHJldHVybiBvYmplY3Q7XG59XG5cbi8qXG4gKiBDcmVhdGUgYSBjYWxsYmFjayBsaXN0IHVzaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcbiAqXG4gKlx0b3B0aW9uczogYW4gb3B0aW9uYWwgbGlzdCBvZiBzcGFjZS1zZXBhcmF0ZWQgb3B0aW9ucyB0aGF0IHdpbGwgY2hhbmdlIGhvd1xuICpcdFx0XHR0aGUgY2FsbGJhY2sgbGlzdCBiZWhhdmVzIG9yIGEgbW9yZSB0cmFkaXRpb25hbCBvcHRpb24gb2JqZWN0XG4gKlxuICogQnkgZGVmYXVsdCBhIGNhbGxiYWNrIGxpc3Qgd2lsbCBhY3QgbGlrZSBhbiBldmVudCBjYWxsYmFjayBsaXN0IGFuZCBjYW4gYmVcbiAqIFwiZmlyZWRcIiBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBQb3NzaWJsZSBvcHRpb25zOlxuICpcbiAqXHRvbmNlOlx0XHRcdHdpbGwgZW5zdXJlIHRoZSBjYWxsYmFjayBsaXN0IGNhbiBvbmx5IGJlIGZpcmVkIG9uY2UgKGxpa2UgYSBEZWZlcnJlZClcbiAqXG4gKlx0bWVtb3J5Olx0XHRcdHdpbGwga2VlcCB0cmFjayBvZiBwcmV2aW91cyB2YWx1ZXMgYW5kIHdpbGwgY2FsbCBhbnkgY2FsbGJhY2sgYWRkZWRcbiAqXHRcdFx0XHRcdGFmdGVyIHRoZSBsaXN0IGhhcyBiZWVuIGZpcmVkIHJpZ2h0IGF3YXkgd2l0aCB0aGUgbGF0ZXN0IFwibWVtb3JpemVkXCJcbiAqXHRcdFx0XHRcdHZhbHVlcyAobGlrZSBhIERlZmVycmVkKVxuICpcbiAqXHR1bmlxdWU6XHRcdFx0d2lsbCBlbnN1cmUgYSBjYWxsYmFjayBjYW4gb25seSBiZSBhZGRlZCBvbmNlIChubyBkdXBsaWNhdGUgaW4gdGhlIGxpc3QpXG4gKlxuICpcdHN0b3BPbkZhbHNlOlx0aW50ZXJydXB0IGNhbGxpbmdzIHdoZW4gYSBjYWxsYmFjayByZXR1cm5zIGZhbHNlXG4gKlxuICovXG5qUXVlcnkuQ2FsbGJhY2tzID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cblx0Ly8gQ29udmVydCBvcHRpb25zIGZyb20gU3RyaW5nLWZvcm1hdHRlZCB0byBPYmplY3QtZm9ybWF0dGVkIGlmIG5lZWRlZFxuXHQvLyAod2UgY2hlY2sgaW4gY2FjaGUgZmlyc3QpXG5cdG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiA/XG5cdFx0Y3JlYXRlT3B0aW9ucyggb3B0aW9ucyApIDpcblx0XHRqUXVlcnkuZXh0ZW5kKCB7fSwgb3B0aW9ucyApO1xuXG5cdHZhciAvLyBGbGFnIHRvIGtub3cgaWYgbGlzdCBpcyBjdXJyZW50bHkgZmlyaW5nXG5cdFx0ZmlyaW5nLFxuXG5cdFx0Ly8gTGFzdCBmaXJlIHZhbHVlIGZvciBub24tZm9yZ2V0dGFibGUgbGlzdHNcblx0XHRtZW1vcnksXG5cblx0XHQvLyBGbGFnIHRvIGtub3cgaWYgbGlzdCB3YXMgYWxyZWFkeSBmaXJlZFxuXHRcdGZpcmVkLFxuXG5cdFx0Ly8gRmxhZyB0byBwcmV2ZW50IGZpcmluZ1xuXHRcdGxvY2tlZCxcblxuXHRcdC8vIEFjdHVhbCBjYWxsYmFjayBsaXN0XG5cdFx0bGlzdCA9IFtdLFxuXG5cdFx0Ly8gUXVldWUgb2YgZXhlY3V0aW9uIGRhdGEgZm9yIHJlcGVhdGFibGUgbGlzdHNcblx0XHRxdWV1ZSA9IFtdLFxuXG5cdFx0Ly8gSW5kZXggb2YgY3VycmVudGx5IGZpcmluZyBjYWxsYmFjayAobW9kaWZpZWQgYnkgYWRkL3JlbW92ZSBhcyBuZWVkZWQpXG5cdFx0ZmlyaW5nSW5kZXggPSAtMSxcblxuXHRcdC8vIEZpcmUgY2FsbGJhY2tzXG5cdFx0ZmlyZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBFbmZvcmNlIHNpbmdsZS1maXJpbmdcblx0XHRcdGxvY2tlZCA9IGxvY2tlZCB8fCBvcHRpb25zLm9uY2U7XG5cblx0XHRcdC8vIEV4ZWN1dGUgY2FsbGJhY2tzIGZvciBhbGwgcGVuZGluZyBleGVjdXRpb25zLFxuXHRcdFx0Ly8gcmVzcGVjdGluZyBmaXJpbmdJbmRleCBvdmVycmlkZXMgYW5kIHJ1bnRpbWUgY2hhbmdlc1xuXHRcdFx0ZmlyZWQgPSBmaXJpbmcgPSB0cnVlO1xuXHRcdFx0Zm9yICggOyBxdWV1ZS5sZW5ndGg7IGZpcmluZ0luZGV4ID0gLTEgKSB7XG5cdFx0XHRcdG1lbW9yeSA9IHF1ZXVlLnNoaWZ0KCk7XG5cdFx0XHRcdHdoaWxlICggKytmaXJpbmdJbmRleCA8IGxpc3QubGVuZ3RoICkge1xuXG5cdFx0XHRcdFx0Ly8gUnVuIGNhbGxiYWNrIGFuZCBjaGVjayBmb3IgZWFybHkgdGVybWluYXRpb25cblx0XHRcdFx0XHRpZiAoIGxpc3RbIGZpcmluZ0luZGV4IF0uYXBwbHkoIG1lbW9yeVsgMCBdLCBtZW1vcnlbIDEgXSApID09PSBmYWxzZSAmJlxuXHRcdFx0XHRcdFx0b3B0aW9ucy5zdG9wT25GYWxzZSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gSnVtcCB0byBlbmQgYW5kIGZvcmdldCB0aGUgZGF0YSBzbyAuYWRkIGRvZXNuJ3QgcmUtZmlyZVxuXHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXggPSBsaXN0Lmxlbmd0aDtcblx0XHRcdFx0XHRcdG1lbW9yeSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3JnZXQgdGhlIGRhdGEgaWYgd2UncmUgZG9uZSB3aXRoIGl0XG5cdFx0XHRpZiAoICFvcHRpb25zLm1lbW9yeSApIHtcblx0XHRcdFx0bWVtb3J5ID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGZpcmluZyA9IGZhbHNlO1xuXG5cdFx0XHQvLyBDbGVhbiB1cCBpZiB3ZSdyZSBkb25lIGZpcmluZyBmb3IgZ29vZFxuXHRcdFx0aWYgKCBsb2NrZWQgKSB7XG5cblx0XHRcdFx0Ly8gS2VlcCBhbiBlbXB0eSBsaXN0IGlmIHdlIGhhdmUgZGF0YSBmb3IgZnV0dXJlIGFkZCBjYWxsc1xuXHRcdFx0XHRpZiAoIG1lbW9yeSApIHtcblx0XHRcdFx0XHRsaXN0ID0gW107XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCB0aGlzIG9iamVjdCBpcyBzcGVudFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxpc3QgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIEFjdHVhbCBDYWxsYmFja3Mgb2JqZWN0XG5cdFx0c2VsZiA9IHtcblxuXHRcdFx0Ly8gQWRkIGEgY2FsbGJhY2sgb3IgYSBjb2xsZWN0aW9uIG9mIGNhbGxiYWNrcyB0byB0aGUgbGlzdFxuXHRcdFx0YWRkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBsaXN0ICkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBtZW1vcnkgZnJvbSBhIHBhc3QgcnVuLCB3ZSBzaG91bGQgZmlyZSBhZnRlciBhZGRpbmdcblx0XHRcdFx0XHRpZiAoIG1lbW9yeSAmJiAhZmlyaW5nICkge1xuXHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXggPSBsaXN0Lmxlbmd0aCAtIDE7XG5cdFx0XHRcdFx0XHRxdWV1ZS5wdXNoKCBtZW1vcnkgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQoIGZ1bmN0aW9uIGFkZCggYXJncyApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5lYWNoKCBhcmdzLCBmdW5jdGlvbiggXywgYXJnICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIHR5cGVvZiBhcmcgPT09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoICFvcHRpb25zLnVuaXF1ZSB8fCAhc2VsZi5oYXMoIGFyZyApICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdC5wdXNoKCBhcmcgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGFyZyAmJiBhcmcubGVuZ3RoICYmIHRvVHlwZSggYXJnICkgIT09IFwic3RyaW5nXCIgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBJbnNwZWN0IHJlY3Vyc2l2ZWx5XG5cdFx0XHRcdFx0XHRcdFx0YWRkKCBhcmcgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH0gKSggYXJndW1lbnRzICk7XG5cblx0XHRcdFx0XHRpZiAoIG1lbW9yeSAmJiAhZmlyaW5nICkge1xuXHRcdFx0XHRcdFx0ZmlyZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIFJlbW92ZSBhIGNhbGxiYWNrIGZyb20gdGhlIGxpc3Rcblx0XHRcdHJlbW92ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeS5lYWNoKCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBfLCBhcmcgKSB7XG5cdFx0XHRcdFx0dmFyIGluZGV4O1xuXHRcdFx0XHRcdHdoaWxlICggKCBpbmRleCA9IGpRdWVyeS5pbkFycmF5KCBhcmcsIGxpc3QsIGluZGV4ICkgKSA+IC0xICkge1xuXHRcdFx0XHRcdFx0bGlzdC5zcGxpY2UoIGluZGV4LCAxICk7XG5cblx0XHRcdFx0XHRcdC8vIEhhbmRsZSBmaXJpbmcgaW5kZXhlc1xuXHRcdFx0XHRcdFx0aWYgKCBpbmRleCA8PSBmaXJpbmdJbmRleCApIHtcblx0XHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXgtLTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBDaGVjayBpZiBhIGdpdmVuIGNhbGxiYWNrIGlzIGluIHRoZSBsaXN0LlxuXHRcdFx0Ly8gSWYgbm8gYXJndW1lbnQgaXMgZ2l2ZW4sIHJldHVybiB3aGV0aGVyIG9yIG5vdCBsaXN0IGhhcyBjYWxsYmFja3MgYXR0YWNoZWQuXG5cdFx0XHRoYXM6IGZ1bmN0aW9uKCBmbiApIHtcblx0XHRcdFx0cmV0dXJuIGZuID9cblx0XHRcdFx0XHRqUXVlcnkuaW5BcnJheSggZm4sIGxpc3QgKSA+IC0xIDpcblx0XHRcdFx0XHRsaXN0Lmxlbmd0aCA+IDA7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBSZW1vdmUgYWxsIGNhbGxiYWNrcyBmcm9tIHRoZSBsaXN0XG5cdFx0XHRlbXB0eTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggbGlzdCApIHtcblx0XHRcdFx0XHRsaXN0ID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBEaXNhYmxlIC5maXJlIGFuZCAuYWRkXG5cdFx0XHQvLyBBYm9ydCBhbnkgY3VycmVudC9wZW5kaW5nIGV4ZWN1dGlvbnNcblx0XHRcdC8vIENsZWFyIGFsbCBjYWxsYmFja3MgYW5kIHZhbHVlc1xuXHRcdFx0ZGlzYWJsZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxvY2tlZCA9IHF1ZXVlID0gW107XG5cdFx0XHRcdGxpc3QgPSBtZW1vcnkgPSBcIlwiO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHRkaXNhYmxlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhbGlzdDtcblx0XHRcdH0sXG5cblx0XHRcdC8vIERpc2FibGUgLmZpcmVcblx0XHRcdC8vIEFsc28gZGlzYWJsZSAuYWRkIHVubGVzcyB3ZSBoYXZlIG1lbW9yeSAoc2luY2UgaXQgd291bGQgaGF2ZSBubyBlZmZlY3QpXG5cdFx0XHQvLyBBYm9ydCBhbnkgcGVuZGluZyBleGVjdXRpb25zXG5cdFx0XHRsb2NrOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0bG9ja2VkID0gcXVldWUgPSBbXTtcblx0XHRcdFx0aWYgKCAhbWVtb3J5ICYmICFmaXJpbmcgKSB7XG5cdFx0XHRcdFx0bGlzdCA9IG1lbW9yeSA9IFwiXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXHRcdFx0bG9ja2VkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhbG9ja2VkO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gQ2FsbCBhbGwgY2FsbGJhY2tzIHdpdGggdGhlIGdpdmVuIGNvbnRleHQgYW5kIGFyZ3VtZW50c1xuXHRcdFx0ZmlyZVdpdGg6IGZ1bmN0aW9uKCBjb250ZXh0LCBhcmdzICkge1xuXHRcdFx0XHRpZiAoICFsb2NrZWQgKSB7XG5cdFx0XHRcdFx0YXJncyA9IGFyZ3MgfHwgW107XG5cdFx0XHRcdFx0YXJncyA9IFsgY29udGV4dCwgYXJncy5zbGljZSA/IGFyZ3Muc2xpY2UoKSA6IGFyZ3MgXTtcblx0XHRcdFx0XHRxdWV1ZS5wdXNoKCBhcmdzICk7XG5cdFx0XHRcdFx0aWYgKCAhZmlyaW5nICkge1xuXHRcdFx0XHRcdFx0ZmlyZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIENhbGwgYWxsIHRoZSBjYWxsYmFja3Mgd2l0aCB0aGUgZ2l2ZW4gYXJndW1lbnRzXG5cdFx0XHRmaXJlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZi5maXJlV2l0aCggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gVG8ga25vdyBpZiB0aGUgY2FsbGJhY2tzIGhhdmUgYWxyZWFkeSBiZWVuIGNhbGxlZCBhdCBsZWFzdCBvbmNlXG5cdFx0XHRmaXJlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhIWZpcmVkO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0cmV0dXJuIHNlbGY7XG59O1xuXG5mdW5jdGlvbiBJZGVudGl0eSggdiApIHtcblx0cmV0dXJuIHY7XG59XG5mdW5jdGlvbiBUaHJvd2VyKCBleCApIHtcblx0dGhyb3cgZXg7XG59XG5cbmZ1bmN0aW9uIGFkb3B0VmFsdWUoIHZhbHVlLCByZXNvbHZlLCByZWplY3QsIG5vVmFsdWUgKSB7XG5cdHZhciBtZXRob2Q7XG5cblx0dHJ5IHtcblxuXHRcdC8vIENoZWNrIGZvciBwcm9taXNlIGFzcGVjdCBmaXJzdCB0byBwcml2aWxlZ2Ugc3luY2hyb25vdXMgYmVoYXZpb3Jcblx0XHRpZiAoIHZhbHVlICYmIHR5cGVvZiggbWV0aG9kID0gdmFsdWUucHJvbWlzZSApID09PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRtZXRob2QuY2FsbCggdmFsdWUgKS5kb25lKCByZXNvbHZlICkuZmFpbCggcmVqZWN0ICk7XG5cblx0XHQvLyBPdGhlciB0aGVuYWJsZXNcblx0XHR9IGVsc2UgaWYgKCB2YWx1ZSAmJiB0eXBlb2YoIG1ldGhvZCA9IHZhbHVlLnRoZW4gKSA9PT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0bWV0aG9kLmNhbGwoIHZhbHVlLCByZXNvbHZlLCByZWplY3QgKTtcblxuXHRcdC8vIE90aGVyIG5vbi10aGVuYWJsZXNcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBDb250cm9sIGByZXNvbHZlYCBhcmd1bWVudHMgYnkgbGV0dGluZyBBcnJheSNzbGljZSBjYXN0IGJvb2xlYW4gYG5vVmFsdWVgIHRvIGludGVnZXI6XG5cdFx0XHQvLyAqIGZhbHNlOiBbIHZhbHVlIF0uc2xpY2UoIDAgKSA9PiByZXNvbHZlKCB2YWx1ZSApXG5cdFx0XHQvLyAqIHRydWU6IFsgdmFsdWUgXS5zbGljZSggMSApID0+IHJlc29sdmUoKVxuXHRcdFx0cmVzb2x2ZS5hcHBseSggdW5kZWZpbmVkLCBbIHZhbHVlIF0uc2xpY2UoIG5vVmFsdWUgKSApO1xuXHRcdH1cblxuXHQvLyBGb3IgUHJvbWlzZXMvQSssIGNvbnZlcnQgZXhjZXB0aW9ucyBpbnRvIHJlamVjdGlvbnNcblx0Ly8gU2luY2UgalF1ZXJ5LndoZW4gZG9lc24ndCB1bndyYXAgdGhlbmFibGVzLCB3ZSBjYW4gc2tpcCB0aGUgZXh0cmEgY2hlY2tzIGFwcGVhcmluZyBpblxuXHQvLyBEZWZlcnJlZCN0aGVuIHRvIGNvbmRpdGlvbmFsbHkgc3VwcHJlc3MgcmVqZWN0aW9uLlxuXHR9IGNhdGNoICggdmFsdWUgKSB7XG5cdFx0cmVqZWN0KCB2YWx1ZSApO1xuXHR9XG59XG5cbmpRdWVyeS5leHRlbmQoIHtcblxuXHREZWZlcnJlZDogZnVuY3Rpb24oIGZ1bmMgKSB7XG5cdFx0dmFyIHR1cGxlcyA9IFtcblxuXHRcdFx0XHQvLyBhY3Rpb24sIGFkZCBsaXN0ZW5lciwgY2FsbGJhY2tzLFxuXHRcdFx0XHQvLyAuLi4gLnRoZW4gaGFuZGxlcnMsIGFyZ3VtZW50IGluZGV4LCBbZmluYWwgc3RhdGVdXG5cdFx0XHRcdFsgXCJub3RpZnlcIiwgXCJwcm9ncmVzc1wiLCBqUXVlcnkuQ2FsbGJhY2tzKCBcIm1lbW9yeVwiICksXG5cdFx0XHRcdFx0alF1ZXJ5LkNhbGxiYWNrcyggXCJtZW1vcnlcIiApLCAyIF0sXG5cdFx0XHRcdFsgXCJyZXNvbHZlXCIsIFwiZG9uZVwiLCBqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSxcblx0XHRcdFx0XHRqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSwgMCwgXCJyZXNvbHZlZFwiIF0sXG5cdFx0XHRcdFsgXCJyZWplY3RcIiwgXCJmYWlsXCIsIGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLFxuXHRcdFx0XHRcdGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLCAxLCBcInJlamVjdGVkXCIgXVxuXHRcdFx0XSxcblx0XHRcdHN0YXRlID0gXCJwZW5kaW5nXCIsXG5cdFx0XHRwcm9taXNlID0ge1xuXHRcdFx0XHRzdGF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbHdheXM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGRlZmVycmVkLmRvbmUoIGFyZ3VtZW50cyApLmZhaWwoIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRjYXRjaDogZnVuY3Rpb24oIGZuICkge1xuXHRcdFx0XHRcdHJldHVybiBwcm9taXNlLnRoZW4oIG51bGwsIGZuICk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gS2VlcCBwaXBlIGZvciBiYWNrLWNvbXBhdFxuXHRcdFx0XHRwaXBlOiBmdW5jdGlvbiggLyogZm5Eb25lLCBmbkZhaWwsIGZuUHJvZ3Jlc3MgKi8gKSB7XG5cdFx0XHRcdFx0dmFyIGZucyA9IGFyZ3VtZW50cztcblxuXHRcdFx0XHRcdHJldHVybiBqUXVlcnkuRGVmZXJyZWQoIGZ1bmN0aW9uKCBuZXdEZWZlciApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5lYWNoKCB0dXBsZXMsIGZ1bmN0aW9uKCBfaSwgdHVwbGUgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gTWFwIHR1cGxlcyAocHJvZ3Jlc3MsIGRvbmUsIGZhaWwpIHRvIGFyZ3VtZW50cyAoZG9uZSwgZmFpbCwgcHJvZ3Jlc3MpXG5cdFx0XHRcdFx0XHRcdHZhciBmbiA9IHR5cGVvZiBmbnNbIHR1cGxlWyA0IF0gXSA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0XHRcdFx0XHRcdFx0Zm5zWyB0dXBsZVsgNCBdIF07XG5cblx0XHRcdFx0XHRcdFx0Ly8gZGVmZXJyZWQucHJvZ3Jlc3MoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIubm90aWZ5IH0pXG5cdFx0XHRcdFx0XHRcdC8vIGRlZmVycmVkLmRvbmUoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIucmVzb2x2ZSB9KVxuXHRcdFx0XHRcdFx0XHQvLyBkZWZlcnJlZC5mYWlsKGZ1bmN0aW9uKCkgeyBiaW5kIHRvIG5ld0RlZmVyIG9yIG5ld0RlZmVyLnJlamVjdCB9KVxuXHRcdFx0XHRcdFx0XHRkZWZlcnJlZFsgdHVwbGVbIDEgXSBdKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmV0dXJuZWQgPSBmbiAmJiBmbi5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCByZXR1cm5lZCAmJiB0eXBlb2YgcmV0dXJuZWQucHJvbWlzZSA9PT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQucHJvbWlzZSgpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5wcm9ncmVzcyggbmV3RGVmZXIubm90aWZ5IClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmRvbmUoIG5ld0RlZmVyLnJlc29sdmUgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuZmFpbCggbmV3RGVmZXIucmVqZWN0ICk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyWyB0dXBsZVsgMCBdICsgXCJXaXRoXCIgXShcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Zm4gPyBbIHJldHVybmVkIF0gOiBhcmd1bWVudHNcblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHRmbnMgPSBudWxsO1xuXHRcdFx0XHRcdH0gKS5wcm9taXNlKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRoZW46IGZ1bmN0aW9uKCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgb25Qcm9ncmVzcyApIHtcblx0XHRcdFx0XHR2YXIgbWF4RGVwdGggPSAwO1xuXHRcdFx0XHRcdGZ1bmN0aW9uIHJlc29sdmUoIGRlcHRoLCBkZWZlcnJlZCwgaGFuZGxlciwgc3BlY2lhbCApIHtcblx0XHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzLFxuXHRcdFx0XHRcdFx0XHRcdGFyZ3MgPSBhcmd1bWVudHMsXG5cdFx0XHRcdFx0XHRcdFx0bWlnaHRUaHJvdyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIHJldHVybmVkLCB0aGVuO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4zLjMuM1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTlcblx0XHRcdFx0XHRcdFx0XHRcdC8vIElnbm9yZSBkb3VibGUtcmVzb2x1dGlvbiBhdHRlbXB0c1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBkZXB0aCA8IG1heERlcHRoICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybmVkID0gaGFuZGxlci5hcHBseSggdGhhdCwgYXJncyApO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4xXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC00OFxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCByZXR1cm5lZCA9PT0gZGVmZXJyZWQucHJvbWlzZSgpICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCBcIlRoZW5hYmxlIHNlbGYtcmVzb2x1dGlvblwiICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb25zIDIuMy4zLjEsIDMuNVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTRcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTc1XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBSZXRyaWV2ZSBgdGhlbmAgb25seSBvbmNlXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGVuID0gcmV0dXJuZWQgJiZcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy40XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTY0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE9ubHkgY2hlY2sgb2JqZWN0cyBhbmQgZnVuY3Rpb25zIGZvciB0aGVuYWJpbGl0eVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoIHR5cGVvZiByZXR1cm5lZCA9PT0gXCJvYmplY3RcIiB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGVvZiByZXR1cm5lZCA9PT0gXCJmdW5jdGlvblwiICkgJiZcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQudGhlbjtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gSGFuZGxlIGEgcmV0dXJuZWQgdGhlbmFibGVcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggdHlwZW9mIHRoZW4gPT09IFwiZnVuY3Rpb25cIiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBTcGVjaWFsIHByb2Nlc3NvcnMgKG5vdGlmeSkganVzdCB3YWl0IGZvciByZXNvbHV0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggc3BlY2lhbCApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGVuLmNhbGwoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoIG1heERlcHRoLCBkZWZlcnJlZCwgSWRlbnRpdHksIHNwZWNpYWwgKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoIG1heERlcHRoLCBkZWZlcnJlZCwgVGhyb3dlciwgc3BlY2lhbCApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBOb3JtYWwgcHJvY2Vzc29ycyAocmVzb2x2ZSkgYWxzbyBob29rIGludG8gcHJvZ3Jlc3Ncblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIC4uLmFuZCBkaXNyZWdhcmQgb2xkZXIgcmVzb2x1dGlvbiB2YWx1ZXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXhEZXB0aCsrO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhlbi5jYWxsKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCBtYXhEZXB0aCwgZGVmZXJyZWQsIElkZW50aXR5LCBzcGVjaWFsICksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCBtYXhEZXB0aCwgZGVmZXJyZWQsIFRocm93ZXIsIHNwZWNpYWwgKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoIG1heERlcHRoLCBkZWZlcnJlZCwgSWRlbnRpdHksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmVycmVkLm5vdGlmeVdpdGggKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gSGFuZGxlIGFsbCBvdGhlciByZXR1cm5lZCB2YWx1ZXNcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gT25seSBzdWJzdGl0dXRlIGhhbmRsZXJzIHBhc3Mgb24gY29udGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBhbmQgbXVsdGlwbGUgdmFsdWVzIChub24tc3BlYyBiZWhhdmlvcilcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBoYW5kbGVyICE9PSBJZGVudGl0eSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyZ3MgPSBbIHJldHVybmVkIF07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBQcm9jZXNzIHRoZSB2YWx1ZShzKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBEZWZhdWx0IHByb2Nlc3MgaXMgcmVzb2x2ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoIHNwZWNpYWwgfHwgZGVmZXJyZWQucmVzb2x2ZVdpdGggKSggdGhhdCwgYXJncyApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHRcdFx0XHQvLyBPbmx5IG5vcm1hbCBwcm9jZXNzb3JzIChyZXNvbHZlKSBjYXRjaCBhbmQgcmVqZWN0IGV4Y2VwdGlvbnNcblx0XHRcdFx0XHRcdFx0XHRwcm9jZXNzID0gc3BlY2lhbCA/XG5cdFx0XHRcdFx0XHRcdFx0XHRtaWdodFRocm93IDpcblx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1pZ2h0VGhyb3coKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGpRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soIGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHByb2Nlc3MuZXJyb3IgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4zLjMuNC4xXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNjFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBJZ25vcmUgcG9zdC1yZXNvbHV0aW9uIGV4Y2VwdGlvbnNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGRlcHRoICsgMSA+PSBtYXhEZXB0aCApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gT25seSBzdWJzdGl0dXRlIGhhbmRsZXJzIHBhc3Mgb24gY29udGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gYW5kIG11bHRpcGxlIHZhbHVlcyAobm9uLXNwZWMgYmVoYXZpb3IpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGhhbmRsZXIgIT09IFRocm93ZXIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyZ3MgPSBbIGUgXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0V2l0aCggdGhhdCwgYXJncyApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4zLjMuMVxuXHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC01N1xuXHRcdFx0XHRcdFx0XHQvLyBSZS1yZXNvbHZlIHByb21pc2VzIGltbWVkaWF0ZWx5IHRvIGRvZGdlIGZhbHNlIHJlamVjdGlvbiBmcm9tXG5cdFx0XHRcdFx0XHRcdC8vIHN1YnNlcXVlbnQgZXJyb3JzXG5cdFx0XHRcdFx0XHRcdGlmICggZGVwdGggKSB7XG5cdFx0XHRcdFx0XHRcdFx0cHJvY2VzcygpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gQ2FsbCBhbiBvcHRpb25hbCBob29rIHRvIHJlY29yZCB0aGUgZXJyb3IsIGluIGNhc2Ugb2YgZXhjZXB0aW9uXG5cdFx0XHRcdFx0XHRcdFx0Ly8gc2luY2UgaXQncyBvdGhlcndpc2UgbG9zdCB3aGVuIGV4ZWN1dGlvbiBnb2VzIGFzeW5jXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBqUXVlcnkuRGVmZXJyZWQuZ2V0RXJyb3JIb29rICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJvY2Vzcy5lcnJvciA9IGpRdWVyeS5EZWZlcnJlZC5nZXRFcnJvckhvb2soKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoIHByb2Nlc3MgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4galF1ZXJ5LkRlZmVycmVkKCBmdW5jdGlvbiggbmV3RGVmZXIgKSB7XG5cblx0XHRcdFx0XHRcdC8vIHByb2dyZXNzX2hhbmRsZXJzLmFkZCggLi4uIClcblx0XHRcdFx0XHRcdHR1cGxlc1sgMCBdWyAzIF0uYWRkKFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKFxuXHRcdFx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXIsXG5cdFx0XHRcdFx0XHRcdFx0dHlwZW9mIG9uUHJvZ3Jlc3MgPT09IFwiZnVuY3Rpb25cIiA/XG5cdFx0XHRcdFx0XHRcdFx0XHRvblByb2dyZXNzIDpcblx0XHRcdFx0XHRcdFx0XHRcdElkZW50aXR5LFxuXHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyLm5vdGlmeVdpdGhcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0Ly8gZnVsZmlsbGVkX2hhbmRsZXJzLmFkZCggLi4uIClcblx0XHRcdFx0XHRcdHR1cGxlc1sgMSBdWyAzIF0uYWRkKFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKFxuXHRcdFx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXIsXG5cdFx0XHRcdFx0XHRcdFx0dHlwZW9mIG9uRnVsZmlsbGVkID09PSBcImZ1bmN0aW9uXCIgP1xuXHRcdFx0XHRcdFx0XHRcdFx0b25GdWxmaWxsZWQgOlxuXHRcdFx0XHRcdFx0XHRcdFx0SWRlbnRpdHlcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0Ly8gcmVqZWN0ZWRfaGFuZGxlcnMuYWRkKCAuLi4gKVxuXHRcdFx0XHRcdFx0dHVwbGVzWyAyIF1bIDMgXS5hZGQoXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoXG5cdFx0XHRcdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRcdFx0XHRuZXdEZWZlcixcblx0XHRcdFx0XHRcdFx0XHR0eXBlb2Ygb25SZWplY3RlZCA9PT0gXCJmdW5jdGlvblwiID9cblx0XHRcdFx0XHRcdFx0XHRcdG9uUmVqZWN0ZWQgOlxuXHRcdFx0XHRcdFx0XHRcdFx0VGhyb3dlclxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0gKS5wcm9taXNlKCk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gR2V0IGEgcHJvbWlzZSBmb3IgdGhpcyBkZWZlcnJlZFxuXHRcdFx0XHQvLyBJZiBvYmogaXMgcHJvdmlkZWQsIHRoZSBwcm9taXNlIGFzcGVjdCBpcyBhZGRlZCB0byB0aGUgb2JqZWN0XG5cdFx0XHRcdHByb21pc2U6IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9iaiAhPSBudWxsID8galF1ZXJ5LmV4dGVuZCggb2JqLCBwcm9taXNlICkgOiBwcm9taXNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZGVmZXJyZWQgPSB7fTtcblxuXHRcdC8vIEFkZCBsaXN0LXNwZWNpZmljIG1ldGhvZHNcblx0XHRqUXVlcnkuZWFjaCggdHVwbGVzLCBmdW5jdGlvbiggaSwgdHVwbGUgKSB7XG5cdFx0XHR2YXIgbGlzdCA9IHR1cGxlWyAyIF0sXG5cdFx0XHRcdHN0YXRlU3RyaW5nID0gdHVwbGVbIDUgXTtcblxuXHRcdFx0Ly8gcHJvbWlzZS5wcm9ncmVzcyA9IGxpc3QuYWRkXG5cdFx0XHQvLyBwcm9taXNlLmRvbmUgPSBsaXN0LmFkZFxuXHRcdFx0Ly8gcHJvbWlzZS5mYWlsID0gbGlzdC5hZGRcblx0XHRcdHByb21pc2VbIHR1cGxlWyAxIF0gXSA9IGxpc3QuYWRkO1xuXG5cdFx0XHQvLyBIYW5kbGUgc3RhdGVcblx0XHRcdGlmICggc3RhdGVTdHJpbmcgKSB7XG5cdFx0XHRcdGxpc3QuYWRkKFxuXHRcdFx0XHRcdGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHQvLyBzdGF0ZSA9IFwicmVzb2x2ZWRcIiAoaS5lLiwgZnVsZmlsbGVkKVxuXHRcdFx0XHRcdFx0Ly8gc3RhdGUgPSBcInJlamVjdGVkXCJcblx0XHRcdFx0XHRcdHN0YXRlID0gc3RhdGVTdHJpbmc7XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdC8vIHJlamVjdGVkX2NhbGxiYWNrcy5kaXNhYmxlXG5cdFx0XHRcdFx0Ly8gZnVsZmlsbGVkX2NhbGxiYWNrcy5kaXNhYmxlXG5cdFx0XHRcdFx0dHVwbGVzWyAzIC0gaSBdWyAyIF0uZGlzYWJsZSxcblxuXHRcdFx0XHRcdC8vIHJlamVjdGVkX2hhbmRsZXJzLmRpc2FibGVcblx0XHRcdFx0XHQvLyBmdWxmaWxsZWRfaGFuZGxlcnMuZGlzYWJsZVxuXHRcdFx0XHRcdHR1cGxlc1sgMyAtIGkgXVsgMyBdLmRpc2FibGUsXG5cblx0XHRcdFx0XHQvLyBwcm9ncmVzc19jYWxsYmFja3MubG9ja1xuXHRcdFx0XHRcdHR1cGxlc1sgMCBdWyAyIF0ubG9jayxcblxuXHRcdFx0XHRcdC8vIHByb2dyZXNzX2hhbmRsZXJzLmxvY2tcblx0XHRcdFx0XHR0dXBsZXNbIDAgXVsgMyBdLmxvY2tcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gcHJvZ3Jlc3NfaGFuZGxlcnMuZmlyZVxuXHRcdFx0Ly8gZnVsZmlsbGVkX2hhbmRsZXJzLmZpcmVcblx0XHRcdC8vIHJlamVjdGVkX2hhbmRsZXJzLmZpcmVcblx0XHRcdGxpc3QuYWRkKCB0dXBsZVsgMyBdLmZpcmUgKTtcblxuXHRcdFx0Ly8gZGVmZXJyZWQubm90aWZ5ID0gZnVuY3Rpb24oKSB7IGRlZmVycmVkLm5vdGlmeVdpdGgoLi4uKSB9XG5cdFx0XHQvLyBkZWZlcnJlZC5yZXNvbHZlID0gZnVuY3Rpb24oKSB7IGRlZmVycmVkLnJlc29sdmVXaXRoKC4uLikgfVxuXHRcdFx0Ly8gZGVmZXJyZWQucmVqZWN0ID0gZnVuY3Rpb24oKSB7IGRlZmVycmVkLnJlamVjdFdpdGgoLi4uKSB9XG5cdFx0XHRkZWZlcnJlZFsgdHVwbGVbIDAgXSBdID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRlZmVycmVkWyB0dXBsZVsgMCBdICsgXCJXaXRoXCIgXSggdGhpcyA9PT0gZGVmZXJyZWQgPyB1bmRlZmluZWQgOiB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBkZWZlcnJlZC5ub3RpZnlXaXRoID0gbGlzdC5maXJlV2l0aFxuXHRcdFx0Ly8gZGVmZXJyZWQucmVzb2x2ZVdpdGggPSBsaXN0LmZpcmVXaXRoXG5cdFx0XHQvLyBkZWZlcnJlZC5yZWplY3RXaXRoID0gbGlzdC5maXJlV2l0aFxuXHRcdFx0ZGVmZXJyZWRbIHR1cGxlWyAwIF0gKyBcIldpdGhcIiBdID0gbGlzdC5maXJlV2l0aDtcblx0XHR9ICk7XG5cblx0XHQvLyBNYWtlIHRoZSBkZWZlcnJlZCBhIHByb21pc2Vcblx0XHRwcm9taXNlLnByb21pc2UoIGRlZmVycmVkICk7XG5cblx0XHQvLyBDYWxsIGdpdmVuIGZ1bmMgaWYgYW55XG5cdFx0aWYgKCBmdW5jICkge1xuXHRcdFx0ZnVuYy5jYWxsKCBkZWZlcnJlZCwgZGVmZXJyZWQgKTtcblx0XHR9XG5cblx0XHQvLyBBbGwgZG9uZSFcblx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdH0sXG5cblx0Ly8gRGVmZXJyZWQgaGVscGVyXG5cdHdoZW46IGZ1bmN0aW9uKCBzaW5nbGVWYWx1ZSApIHtcblx0XHR2YXJcblxuXHRcdFx0Ly8gY291bnQgb2YgdW5jb21wbGV0ZWQgc3Vib3JkaW5hdGVzXG5cdFx0XHRyZW1haW5pbmcgPSBhcmd1bWVudHMubGVuZ3RoLFxuXG5cdFx0XHQvLyBjb3VudCBvZiB1bnByb2Nlc3NlZCBhcmd1bWVudHNcblx0XHRcdGkgPSByZW1haW5pbmcsXG5cblx0XHRcdC8vIHN1Ym9yZGluYXRlIGZ1bGZpbGxtZW50IGRhdGFcblx0XHRcdHJlc29sdmVDb250ZXh0cyA9IEFycmF5KCBpICksXG5cdFx0XHRyZXNvbHZlVmFsdWVzID0gc2xpY2UuY2FsbCggYXJndW1lbnRzICksXG5cblx0XHRcdC8vIHRoZSBwcmltYXJ5IERlZmVycmVkXG5cdFx0XHRwcmltYXJ5ID0galF1ZXJ5LkRlZmVycmVkKCksXG5cblx0XHRcdC8vIHN1Ym9yZGluYXRlIGNhbGxiYWNrIGZhY3Rvcnlcblx0XHRcdHVwZGF0ZUZ1bmMgPSBmdW5jdGlvbiggaSApIHtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdFx0XHRyZXNvbHZlQ29udGV4dHNbIGkgXSA9IHRoaXM7XG5cdFx0XHRcdFx0cmVzb2x2ZVZhbHVlc1sgaSBdID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBzbGljZS5jYWxsKCBhcmd1bWVudHMgKSA6IHZhbHVlO1xuXHRcdFx0XHRcdGlmICggISggLS1yZW1haW5pbmcgKSApIHtcblx0XHRcdFx0XHRcdHByaW1hcnkucmVzb2x2ZVdpdGgoIHJlc29sdmVDb250ZXh0cywgcmVzb2x2ZVZhbHVlcyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH07XG5cblx0XHQvLyBTaW5nbGUtIGFuZCBlbXB0eSBhcmd1bWVudHMgYXJlIGFkb3B0ZWQgbGlrZSBQcm9taXNlLnJlc29sdmVcblx0XHRpZiAoIHJlbWFpbmluZyA8PSAxICkge1xuXHRcdFx0YWRvcHRWYWx1ZSggc2luZ2xlVmFsdWUsIHByaW1hcnkuZG9uZSggdXBkYXRlRnVuYyggaSApICkucmVzb2x2ZSwgcHJpbWFyeS5yZWplY3QsXG5cdFx0XHRcdCFyZW1haW5pbmcgKTtcblxuXHRcdFx0Ly8gVXNlIC50aGVuKCkgdG8gdW53cmFwIHNlY29uZGFyeSB0aGVuYWJsZXMgKGNmLiBnaC0zMDAwKVxuXHRcdFx0aWYgKCBwcmltYXJ5LnN0YXRlKCkgPT09IFwicGVuZGluZ1wiIHx8XG5cdFx0XHRcdHR5cGVvZiggcmVzb2x2ZVZhbHVlc1sgaSBdICYmIHJlc29sdmVWYWx1ZXNbIGkgXS50aGVuICkgPT09IFwiZnVuY3Rpb25cIiApIHtcblxuXHRcdFx0XHRyZXR1cm4gcHJpbWFyeS50aGVuKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gTXVsdGlwbGUgYXJndW1lbnRzIGFyZSBhZ2dyZWdhdGVkIGxpa2UgUHJvbWlzZS5hbGwgYXJyYXkgZWxlbWVudHNcblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdGFkb3B0VmFsdWUoIHJlc29sdmVWYWx1ZXNbIGkgXSwgdXBkYXRlRnVuYyggaSApLCBwcmltYXJ5LnJlamVjdCApO1xuXHRcdH1cblxuXHRcdHJldHVybiBwcmltYXJ5LnByb21pc2UoKTtcblx0fVxufSApO1xuXG4vLyBUaGVzZSB1c3VhbGx5IGluZGljYXRlIGEgcHJvZ3JhbW1lciBtaXN0YWtlIGR1cmluZyBkZXZlbG9wbWVudCxcbi8vIHdhcm4gYWJvdXQgdGhlbSBBU0FQIHJhdGhlciB0aGFuIHN3YWxsb3dpbmcgdGhlbSBieSBkZWZhdWx0LlxudmFyIHJlcnJvck5hbWVzID0gL14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87XG5cbi8vIElmIGBqUXVlcnkuRGVmZXJyZWQuZ2V0RXJyb3JIb29rYCBpcyBkZWZpbmVkLCBgYXN5bmNFcnJvcmAgaXMgYW4gZXJyb3Jcbi8vIGNhcHR1cmVkIGJlZm9yZSB0aGUgYXN5bmMgYmFycmllciB0byBnZXQgdGhlIG9yaWdpbmFsIGVycm9yIGNhdXNlXG4vLyB3aGljaCBtYXkgb3RoZXJ3aXNlIGJlIGhpZGRlbi5cbmpRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rID0gZnVuY3Rpb24oIGVycm9yLCBhc3luY0Vycm9yICkge1xuXG5cdGlmICggZXJyb3IgJiYgcmVycm9yTmFtZXMudGVzdCggZXJyb3IubmFtZSApICkge1xuXHRcdHdpbmRvdy5jb25zb2xlLndhcm4oXG5cdFx0XHRcImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb25cIixcblx0XHRcdGVycm9yLFxuXHRcdFx0YXN5bmNFcnJvclxuXHRcdCk7XG5cdH1cbn07XG5cbmpRdWVyeS5yZWFkeUV4Y2VwdGlvbiA9IGZ1bmN0aW9uKCBlcnJvciApIHtcblx0d2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdHRocm93IGVycm9yO1xuXHR9ICk7XG59O1xuXG4vLyBUaGUgZGVmZXJyZWQgdXNlZCBvbiBET00gcmVhZHlcbnZhciByZWFkeUxpc3QgPSBqUXVlcnkuRGVmZXJyZWQoKTtcblxualF1ZXJ5LmZuLnJlYWR5ID0gZnVuY3Rpb24oIGZuICkge1xuXG5cdHJlYWR5TGlzdFxuXHRcdC50aGVuKCBmbiApXG5cblx0XHQvLyBXcmFwIGpRdWVyeS5yZWFkeUV4Y2VwdGlvbiBpbiBhIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIGxvb2t1cFxuXHRcdC8vIGhhcHBlbnMgYXQgdGhlIHRpbWUgb2YgZXJyb3IgaGFuZGxpbmcgaW5zdGVhZCBvZiBjYWxsYmFja1xuXHRcdC8vIHJlZ2lzdHJhdGlvbi5cblx0XHQuY2F0Y2goIGZ1bmN0aW9uKCBlcnJvciApIHtcblx0XHRcdGpRdWVyeS5yZWFkeUV4Y2VwdGlvbiggZXJyb3IgKTtcblx0XHR9ICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0Ly8gSXMgdGhlIERPTSByZWFkeSB0byBiZSB1c2VkPyBTZXQgdG8gdHJ1ZSBvbmNlIGl0IG9jY3Vycy5cblx0aXNSZWFkeTogZmFsc2UsXG5cblx0Ly8gQSBjb3VudGVyIHRvIHRyYWNrIGhvdyBtYW55IGl0ZW1zIHRvIHdhaXQgZm9yIGJlZm9yZVxuXHQvLyB0aGUgcmVhZHkgZXZlbnQgZmlyZXMuIFNlZSB0cmFjLTY3ODFcblx0cmVhZHlXYWl0OiAxLFxuXG5cdC8vIEhhbmRsZSB3aGVuIHRoZSBET00gaXMgcmVhZHlcblx0cmVhZHk6IGZ1bmN0aW9uKCB3YWl0ICkge1xuXG5cdFx0Ly8gQWJvcnQgaWYgdGhlcmUgYXJlIHBlbmRpbmcgaG9sZHMgb3Igd2UncmUgYWxyZWFkeSByZWFkeVxuXHRcdGlmICggd2FpdCA9PT0gdHJ1ZSA/IC0talF1ZXJ5LnJlYWR5V2FpdCA6IGpRdWVyeS5pc1JlYWR5ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFJlbWVtYmVyIHRoYXQgdGhlIERPTSBpcyByZWFkeVxuXHRcdGpRdWVyeS5pc1JlYWR5ID0gdHJ1ZTtcblxuXHRcdC8vIElmIGEgbm9ybWFsIERPTSBSZWFkeSBldmVudCBmaXJlZCwgZGVjcmVtZW50LCBhbmQgd2FpdCBpZiBuZWVkIGJlXG5cdFx0aWYgKCB3YWl0ICE9PSB0cnVlICYmIC0talF1ZXJ5LnJlYWR5V2FpdCA+IDAgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUgYXJlIGZ1bmN0aW9ucyBib3VuZCwgdG8gZXhlY3V0ZVxuXHRcdHJlYWR5TGlzdC5yZXNvbHZlV2l0aCggZG9jdW1lbnQkMSwgWyBqUXVlcnkgXSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5yZWFkeS50aGVuID0gcmVhZHlMaXN0LnRoZW47XG5cbi8vIFRoZSByZWFkeSBldmVudCBoYW5kbGVyIGFuZCBzZWxmIGNsZWFudXAgbWV0aG9kXG5mdW5jdGlvbiBjb21wbGV0ZWQoKSB7XG5cdGRvY3VtZW50JDEucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJET01Db250ZW50TG9hZGVkXCIsIGNvbXBsZXRlZCApO1xuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJsb2FkXCIsIGNvbXBsZXRlZCApO1xuXHRqUXVlcnkucmVhZHkoKTtcbn1cblxuLy8gQ2F0Y2ggY2FzZXMgd2hlcmUgJChkb2N1bWVudCkucmVhZHkoKSBpcyBjYWxsZWRcbi8vIGFmdGVyIHRoZSBicm93c2VyIGV2ZW50IGhhcyBhbHJlYWR5IG9jY3VycmVkLlxuaWYgKCBkb2N1bWVudCQxLnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiICkge1xuXG5cdC8vIEhhbmRsZSBpdCBhc3luY2hyb25vdXNseSB0byBhbGxvdyBzY3JpcHRzIHRoZSBvcHBvcnR1bml0eSB0byBkZWxheSByZWFkeVxuXHR3aW5kb3cuc2V0VGltZW91dCggalF1ZXJ5LnJlYWR5ICk7XG5cbn0gZWxzZSB7XG5cblx0Ly8gVXNlIHRoZSBoYW5keSBldmVudCBjYWxsYmFja1xuXHRkb2N1bWVudCQxLmFkZEV2ZW50TGlzdGVuZXIoIFwiRE9NQ29udGVudExvYWRlZFwiLCBjb21wbGV0ZWQgKTtcblxuXHQvLyBBIGZhbGxiYWNrIHRvIHdpbmRvdy5vbmxvYWQsIHRoYXQgd2lsbCBhbHdheXMgd29ya1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJsb2FkXCIsIGNvbXBsZXRlZCApO1xufVxuXG4vLyBNYXRjaGVzIGRhc2hlZCBzdHJpbmcgZm9yIGNhbWVsaXppbmdcbnZhciByZGFzaEFscGhhID0gLy0oW2Etel0pL2c7XG5cbi8vIFVzZWQgYnkgY2FtZWxDYXNlIGFzIGNhbGxiYWNrIHRvIHJlcGxhY2UoKVxuZnVuY3Rpb24gZmNhbWVsQ2FzZSggX2FsbCwgbGV0dGVyICkge1xuXHRyZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG59XG5cbi8vIENvbnZlcnQgZGFzaGVkIHRvIGNhbWVsQ2FzZVxuZnVuY3Rpb24gY2FtZWxDYXNlKCBzdHJpbmcgKSB7XG5cdHJldHVybiBzdHJpbmcucmVwbGFjZSggcmRhc2hBbHBoYSwgZmNhbWVsQ2FzZSApO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBvYmplY3QgY2FuIGhhdmUgZGF0YVxuICovXG5mdW5jdGlvbiBhY2NlcHREYXRhKCBvd25lciApIHtcblxuXHQvLyBBY2NlcHRzIG9ubHk6XG5cdC8vICAtIE5vZGVcblx0Ly8gICAgLSBOb2RlLkVMRU1FTlRfTk9ERVxuXHQvLyAgICAtIE5vZGUuRE9DVU1FTlRfTk9ERVxuXHQvLyAgLSBPYmplY3Rcblx0Ly8gICAgLSBBbnlcblx0cmV0dXJuIG93bmVyLm5vZGVUeXBlID09PSAxIHx8IG93bmVyLm5vZGVUeXBlID09PSA5IHx8ICEoICtvd25lci5ub2RlVHlwZSApO1xufVxuXG5mdW5jdGlvbiBEYXRhKCkge1xuXHR0aGlzLmV4cGFuZG8gPSBqUXVlcnkuZXhwYW5kbyArIERhdGEudWlkKys7XG59XG5cbkRhdGEudWlkID0gMTtcblxuRGF0YS5wcm90b3R5cGUgPSB7XG5cblx0Y2FjaGU6IGZ1bmN0aW9uKCBvd25lciApIHtcblxuXHRcdC8vIENoZWNrIGlmIHRoZSBvd25lciBvYmplY3QgYWxyZWFkeSBoYXMgYSBjYWNoZVxuXHRcdHZhciB2YWx1ZSA9IG93bmVyWyB0aGlzLmV4cGFuZG8gXTtcblxuXHRcdC8vIElmIG5vdCwgY3JlYXRlIG9uZVxuXHRcdGlmICggIXZhbHVlICkge1xuXHRcdFx0dmFsdWUgPSBPYmplY3QuY3JlYXRlKCBudWxsICk7XG5cblx0XHRcdC8vIFdlIGNhbiBhY2NlcHQgZGF0YSBmb3Igbm9uLWVsZW1lbnQgbm9kZXMgaW4gbW9kZXJuIGJyb3dzZXJzLFxuXHRcdFx0Ly8gYnV0IHdlIHNob3VsZCBub3QsIHNlZSB0cmFjLTgzMzUuXG5cdFx0XHQvLyBBbHdheXMgcmV0dXJuIGFuIGVtcHR5IG9iamVjdC5cblx0XHRcdGlmICggYWNjZXB0RGF0YSggb3duZXIgKSApIHtcblxuXHRcdFx0XHQvLyBJZiBpdCBpcyBhIG5vZGUgdW5saWtlbHkgdG8gYmUgc3RyaW5naWZ5LWVkIG9yIGxvb3BlZCBvdmVyXG5cdFx0XHRcdC8vIHVzZSBwbGFpbiBhc3NpZ25tZW50XG5cdFx0XHRcdGlmICggb3duZXIubm9kZVR5cGUgKSB7XG5cdFx0XHRcdFx0b3duZXJbIHRoaXMuZXhwYW5kbyBdID0gdmFsdWU7XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIHNlY3VyZSBpdCBpbiBhIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5XG5cdFx0XHRcdC8vIGNvbmZpZ3VyYWJsZSBtdXN0IGJlIHRydWUgdG8gYWxsb3cgdGhlIHByb3BlcnR5IHRvIGJlXG5cdFx0XHRcdC8vIGRlbGV0ZWQgd2hlbiBkYXRhIGlzIHJlbW92ZWRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIG93bmVyLCB0aGlzLmV4cGFuZG8sIHtcblx0XHRcdFx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0c2V0OiBmdW5jdGlvbiggb3duZXIsIGRhdGEsIHZhbHVlICkge1xuXHRcdHZhciBwcm9wLFxuXHRcdFx0Y2FjaGUgPSB0aGlzLmNhY2hlKCBvd25lciApO1xuXG5cdFx0Ly8gSGFuZGxlOiBbIG93bmVyLCBrZXksIHZhbHVlIF0gYXJnc1xuXHRcdC8vIEFsd2F5cyB1c2UgY2FtZWxDYXNlIGtleSAoZ2gtMjI1Nylcblx0XHRpZiAoIHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0Y2FjaGVbIGNhbWVsQ2FzZSggZGF0YSApIF0gPSB2YWx1ZTtcblxuXHRcdC8vIEhhbmRsZTogWyBvd25lciwgeyBwcm9wZXJ0aWVzIH0gXSBhcmdzXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gQ29weSB0aGUgcHJvcGVydGllcyBvbmUtYnktb25lIHRvIHRoZSBjYWNoZSBvYmplY3Rcblx0XHRcdGZvciAoIHByb3AgaW4gZGF0YSApIHtcblx0XHRcdFx0Y2FjaGVbIGNhbWVsQ2FzZSggcHJvcCApIF0gPSBkYXRhWyBwcm9wIF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0Z2V0OiBmdW5jdGlvbiggb3duZXIsIGtleSApIHtcblx0XHRyZXR1cm4ga2V5ID09PSB1bmRlZmluZWQgP1xuXHRcdFx0dGhpcy5jYWNoZSggb3duZXIgKSA6XG5cblx0XHRcdC8vIEFsd2F5cyB1c2UgY2FtZWxDYXNlIGtleSAoZ2gtMjI1Nylcblx0XHRcdG93bmVyWyB0aGlzLmV4cGFuZG8gXSAmJiBvd25lclsgdGhpcy5leHBhbmRvIF1bIGNhbWVsQ2FzZSgga2V5ICkgXTtcblx0fSxcblx0YWNjZXNzOiBmdW5jdGlvbiggb3duZXIsIGtleSwgdmFsdWUgKSB7XG5cblx0XHQvLyBJbiBjYXNlcyB3aGVyZSBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIE5vIGtleSB3YXMgc3BlY2lmaWVkXG5cdFx0Ly8gICAyLiBBIHN0cmluZyBrZXkgd2FzIHNwZWNpZmllZCwgYnV0IG5vIHZhbHVlIHByb3ZpZGVkXG5cdFx0Ly9cblx0XHQvLyBUYWtlIHRoZSBcInJlYWRcIiBwYXRoIGFuZCBhbGxvdyB0aGUgZ2V0IG1ldGhvZCB0byBkZXRlcm1pbmVcblx0XHQvLyB3aGljaCB2YWx1ZSB0byByZXR1cm4sIHJlc3BlY3RpdmVseSBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIFRoZSBlbnRpcmUgY2FjaGUgb2JqZWN0XG5cdFx0Ly8gICAyLiBUaGUgZGF0YSBzdG9yZWQgYXQgdGhlIGtleVxuXHRcdC8vXG5cdFx0aWYgKCBrZXkgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHQoICgga2V5ICYmIHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgKSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkICkgKSB7XG5cblx0XHRcdHJldHVybiB0aGlzLmdldCggb3duZXIsIGtleSApO1xuXHRcdH1cblxuXHRcdC8vIFdoZW4gdGhlIGtleSBpcyBub3QgYSBzdHJpbmcsIG9yIGJvdGggYSBrZXkgYW5kIHZhbHVlXG5cdFx0Ly8gYXJlIHNwZWNpZmllZCwgc2V0IG9yIGV4dGVuZCAoZXhpc3Rpbmcgb2JqZWN0cykgd2l0aCBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIEFuIG9iamVjdCBvZiBwcm9wZXJ0aWVzXG5cdFx0Ly8gICAyLiBBIGtleSBhbmQgdmFsdWVcblx0XHQvL1xuXHRcdHRoaXMuc2V0KCBvd25lciwga2V5LCB2YWx1ZSApO1xuXG5cdFx0Ly8gU2luY2UgdGhlIFwic2V0XCIgcGF0aCBjYW4gaGF2ZSB0d28gcG9zc2libGUgZW50cnkgcG9pbnRzXG5cdFx0Ly8gcmV0dXJuIHRoZSBleHBlY3RlZCBkYXRhIGJhc2VkIG9uIHdoaWNoIHBhdGggd2FzIHRha2VuWypdXG5cdFx0cmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IGtleTtcblx0fSxcblx0cmVtb3ZlOiBmdW5jdGlvbiggb3duZXIsIGtleSApIHtcblx0XHR2YXIgaSxcblx0XHRcdGNhY2hlID0gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXG5cdFx0aWYgKCBjYWNoZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICgga2V5ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdC8vIFN1cHBvcnQgYXJyYXkgb3Igc3BhY2Ugc2VwYXJhdGVkIHN0cmluZyBvZiBrZXlzXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIGtleSApICkge1xuXG5cdFx0XHRcdC8vIElmIGtleSBpcyBhbiBhcnJheSBvZiBrZXlzLi4uXG5cdFx0XHRcdC8vIFdlIGFsd2F5cyBzZXQgY2FtZWxDYXNlIGtleXMsIHNvIHJlbW92ZSB0aGF0LlxuXHRcdFx0XHRrZXkgPSBrZXkubWFwKCBjYW1lbENhc2UgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGtleSA9IGNhbWVsQ2FzZSgga2V5ICk7XG5cblx0XHRcdFx0Ly8gSWYgYSBrZXkgd2l0aCB0aGUgc3BhY2VzIGV4aXN0cywgdXNlIGl0LlxuXHRcdFx0XHQvLyBPdGhlcndpc2UsIGNyZWF0ZSBhbiBhcnJheSBieSBtYXRjaGluZyBub24td2hpdGVzcGFjZVxuXHRcdFx0XHRrZXkgPSBrZXkgaW4gY2FjaGUgP1xuXHRcdFx0XHRcdFsga2V5IF0gOlxuXHRcdFx0XHRcdCgga2V5Lm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW10gKTtcblx0XHRcdH1cblxuXHRcdFx0aSA9IGtleS5sZW5ndGg7XG5cblx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRkZWxldGUgY2FjaGVbIGtleVsgaSBdIF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBleHBhbmRvIGlmIHRoZXJlJ3Mgbm8gbW9yZSBkYXRhXG5cdFx0aWYgKCBrZXkgPT09IHVuZGVmaW5lZCB8fCBqUXVlcnkuaXNFbXB0eU9iamVjdCggY2FjaGUgKSApIHtcblxuXHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NStcblx0XHRcdC8vIFdlYmtpdCAmIEJsaW5rIHBlcmZvcm1hbmNlIHN1ZmZlcnMgd2hlbiBkZWxldGluZyBwcm9wZXJ0aWVzXG5cdFx0XHQvLyBmcm9tIERPTSBub2Rlcywgc28gc2V0IHRvIHVuZGVmaW5lZCBpbnN0ZWFkXG5cdFx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0zNzg2MDcgKGJ1ZyByZXN0cmljdGVkKVxuXHRcdFx0aWYgKCBvd25lci5ub2RlVHlwZSApIHtcblx0XHRcdFx0b3duZXJbIHRoaXMuZXhwYW5kbyBdID0gdW5kZWZpbmVkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVsZXRlIG93bmVyWyB0aGlzLmV4cGFuZG8gXTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGhhc0RhdGE6IGZ1bmN0aW9uKCBvd25lciApIHtcblx0XHR2YXIgY2FjaGUgPSBvd25lclsgdGhpcy5leHBhbmRvIF07XG5cdFx0cmV0dXJuIGNhY2hlICE9PSB1bmRlZmluZWQgJiYgIWpRdWVyeS5pc0VtcHR5T2JqZWN0KCBjYWNoZSApO1xuXHR9XG59O1xuXG52YXIgZGF0YVByaXYgPSBuZXcgRGF0YSgpO1xuXG52YXIgZGF0YVVzZXIgPSBuZXcgRGF0YSgpO1xuXG4vL1x0SW1wbGVtZW50YXRpb24gU3VtbWFyeVxuLy9cbi8vXHQxLiBFbmZvcmNlIEFQSSBzdXJmYWNlIGFuZCBzZW1hbnRpYyBjb21wYXRpYmlsaXR5IHdpdGggMS45LnggYnJhbmNoXG4vL1x0Mi4gSW1wcm92ZSB0aGUgbW9kdWxlJ3MgbWFpbnRhaW5hYmlsaXR5IGJ5IHJlZHVjaW5nIHRoZSBzdG9yYWdlXG4vL1x0XHRwYXRocyB0byBhIHNpbmdsZSBtZWNoYW5pc20uXG4vL1x0My4gVXNlIHRoZSBzYW1lIHNpbmdsZSBtZWNoYW5pc20gdG8gc3VwcG9ydCBcInByaXZhdGVcIiBhbmQgXCJ1c2VyXCIgZGF0YS5cbi8vXHQ0LiBfTmV2ZXJfIGV4cG9zZSBcInByaXZhdGVcIiBkYXRhIHRvIHVzZXIgY29kZSAoVE9ETzogRHJvcCBfZGF0YSwgX3JlbW92ZURhdGEpXG4vL1x0NS4gQXZvaWQgZXhwb3NpbmcgaW1wbGVtZW50YXRpb24gZGV0YWlscyBvbiB1c2VyIG9iamVjdHMgKGVnLiBleHBhbmRvIHByb3BlcnRpZXMpXG4vL1x0Ni4gUHJvdmlkZSBhIGNsZWFyIHBhdGggZm9yIGltcGxlbWVudGF0aW9uIHVwZ3JhZGUgdG8gV2Vha01hcCBpbiAyMDE0XG5cbnZhciByYnJhY2UgPSAvXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sXG5cdHJtdWx0aURhc2ggPSAvW0EtWl0vZztcblxuZnVuY3Rpb24gZ2V0RGF0YSggZGF0YSApIHtcblx0aWYgKCBkYXRhID09PSBcInRydWVcIiApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICggZGF0YSA9PT0gXCJmYWxzZVwiICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmICggZGF0YSA9PT0gXCJudWxsXCIgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvLyBPbmx5IGNvbnZlcnQgdG8gYSBudW1iZXIgaWYgaXQgZG9lc24ndCBjaGFuZ2UgdGhlIHN0cmluZ1xuXHRpZiAoIGRhdGEgPT09ICtkYXRhICsgXCJcIiApIHtcblx0XHRyZXR1cm4gK2RhdGE7XG5cdH1cblxuXHRpZiAoIHJicmFjZS50ZXN0KCBkYXRhICkgKSB7XG5cdFx0cmV0dXJuIEpTT04ucGFyc2UoIGRhdGEgKTtcblx0fVxuXG5cdHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBkYXRhQXR0ciggZWxlbSwga2V5LCBkYXRhICkge1xuXHR2YXIgbmFtZTtcblxuXHQvLyBJZiBub3RoaW5nIHdhcyBmb3VuZCBpbnRlcm5hbGx5LCB0cnkgdG8gZmV0Y2ggYW55XG5cdC8vIGRhdGEgZnJvbSB0aGUgSFRNTDUgZGF0YS0qIGF0dHJpYnV0ZVxuXHRpZiAoIGRhdGEgPT09IHVuZGVmaW5lZCAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdG5hbWUgPSBcImRhdGEtXCIgKyBrZXkucmVwbGFjZSggcm11bHRpRGFzaCwgXCItJCZcIiApLnRvTG93ZXJDYXNlKCk7XG5cdFx0ZGF0YSA9IGVsZW0uZ2V0QXR0cmlidXRlKCBuYW1lICk7XG5cblx0XHRpZiAoIHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZGF0YSA9IGdldERhdGEoIGRhdGEgKTtcblx0XHRcdH0gY2F0Y2ggKCBlICkge31cblxuXHRcdFx0Ly8gTWFrZSBzdXJlIHdlIHNldCB0aGUgZGF0YSBzbyBpdCBpc24ndCBjaGFuZ2VkIGxhdGVyXG5cdFx0XHRkYXRhVXNlci5zZXQoIGVsZW0sIGtleSwgZGF0YSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkYXRhID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZGF0YTtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXHRoYXNEYXRhOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZGF0YVVzZXIuaGFzRGF0YSggZWxlbSApIHx8IGRhdGFQcml2Lmhhc0RhdGEoIGVsZW0gKTtcblx0fSxcblxuXHRkYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgZGF0YSApIHtcblx0XHRyZXR1cm4gZGF0YVVzZXIuYWNjZXNzKCBlbGVtLCBuYW1lLCBkYXRhICk7XG5cdH0sXG5cblx0cmVtb3ZlRGF0YTogZnVuY3Rpb24oIGVsZW0sIG5hbWUgKSB7XG5cdFx0ZGF0YVVzZXIucmVtb3ZlKCBlbGVtLCBuYW1lICk7XG5cdH0sXG5cblx0Ly8gVE9ETzogTm93IHRoYXQgYWxsIGNhbGxzIHRvIF9kYXRhIGFuZCBfcmVtb3ZlRGF0YSBoYXZlIGJlZW4gcmVwbGFjZWRcblx0Ly8gd2l0aCBkaXJlY3QgY2FsbHMgdG8gZGF0YVByaXYgbWV0aG9kcywgdGhlc2UgY2FuIGJlIGRlcHJlY2F0ZWQuXG5cdF9kYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgZGF0YSApIHtcblx0XHRyZXR1cm4gZGF0YVByaXYuYWNjZXNzKCBlbGVtLCBuYW1lLCBkYXRhICk7XG5cdH0sXG5cblx0X3JlbW92ZURhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuXHRcdGRhdGFQcml2LnJlbW92ZSggZWxlbSwgbmFtZSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0ZGF0YTogZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0dmFyIGksIG5hbWUsIGRhdGEsXG5cdFx0XHRlbGVtID0gdGhpc1sgMCBdLFxuXHRcdFx0YXR0cnMgPSBlbGVtICYmIGVsZW0uYXR0cmlidXRlcztcblxuXHRcdC8vIEdldHMgYWxsIHZhbHVlc1xuXHRcdGlmICgga2V5ID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRpZiAoIHRoaXMubGVuZ3RoICkge1xuXHRcdFx0XHRkYXRhID0gZGF0YVVzZXIuZ2V0KCBlbGVtICk7XG5cblx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICYmICFkYXRhUHJpdi5nZXQoIGVsZW0sIFwiaGFzRGF0YUF0dHJzXCIgKSApIHtcblx0XHRcdFx0XHRpID0gYXR0cnMubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXG5cdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSAxMStcblx0XHRcdFx0XHRcdC8vIFRoZSBhdHRycyBlbGVtZW50cyBjYW4gYmUgbnVsbCAodHJhYy0xNDg5NClcblx0XHRcdFx0XHRcdGlmICggYXR0cnNbIGkgXSApIHtcblx0XHRcdFx0XHRcdFx0bmFtZSA9IGF0dHJzWyBpIF0ubmFtZTtcblx0XHRcdFx0XHRcdFx0aWYgKCBuYW1lLmluZGV4T2YoIFwiZGF0YS1cIiApID09PSAwICkge1xuXHRcdFx0XHRcdFx0XHRcdG5hbWUgPSBjYW1lbENhc2UoIG5hbWUuc2xpY2UoIDUgKSApO1xuXHRcdFx0XHRcdFx0XHRcdGRhdGFBdHRyKCBlbGVtLCBuYW1lLCBkYXRhWyBuYW1lIF0gKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkYXRhUHJpdi5zZXQoIGVsZW0sIFwiaGFzRGF0YUF0dHJzXCIsIHRydWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9XG5cblx0XHQvLyBTZXRzIG11bHRpcGxlIHZhbHVlc1xuXHRcdGlmICggdHlwZW9mIGtleSA9PT0gXCJvYmplY3RcIiApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkYXRhVXNlci5zZXQoIHRoaXMsIGtleSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHZhciBkYXRhO1xuXG5cdFx0XHQvLyBUaGUgY2FsbGluZyBqUXVlcnkgb2JqZWN0IChlbGVtZW50IG1hdGNoZXMpIGlzIG5vdCBlbXB0eVxuXHRcdFx0Ly8gKGFuZCB0aGVyZWZvcmUgaGFzIGFuIGVsZW1lbnQgYXBwZWFycyBhdCB0aGlzWyAwIF0pIGFuZCB0aGVcblx0XHRcdC8vIGB2YWx1ZWAgcGFyYW1ldGVyIHdhcyBub3QgdW5kZWZpbmVkLiBBbiBlbXB0eSBqUXVlcnkgb2JqZWN0XG5cdFx0XHQvLyB3aWxsIHJlc3VsdCBpbiBgdW5kZWZpbmVkYCBmb3IgZWxlbSA9IHRoaXNbIDAgXSB3aGljaCB3aWxsXG5cdFx0XHQvLyB0aHJvdyBhbiBleGNlcHRpb24gaWYgYW4gYXR0ZW1wdCB0byByZWFkIGEgZGF0YSBjYWNoZSBpcyBtYWRlLlxuXHRcdFx0aWYgKCBlbGVtICYmIHZhbHVlID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Ly8gQXR0ZW1wdCB0byBnZXQgZGF0YSBmcm9tIHRoZSBjYWNoZVxuXHRcdFx0XHQvLyBUaGUga2V5IHdpbGwgYWx3YXlzIGJlIGNhbWVsQ2FzZWQgaW4gRGF0YVxuXHRcdFx0XHRkYXRhID0gZGF0YVVzZXIuZ2V0KCBlbGVtLCBrZXkgKTtcblx0XHRcdFx0aWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBdHRlbXB0IHRvIFwiZGlzY292ZXJcIiB0aGUgZGF0YSBpblxuXHRcdFx0XHQvLyBIVE1MNSBjdXN0b20gZGF0YS0qIGF0dHJzXG5cdFx0XHRcdGRhdGEgPSBkYXRhQXR0ciggZWxlbSwga2V5ICk7XG5cdFx0XHRcdGlmICggZGF0YSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gV2UgdHJpZWQgcmVhbGx5IGhhcmQsIGJ1dCB0aGUgZGF0YSBkb2Vzbid0IGV4aXN0LlxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCB0aGUgZGF0YS4uLlxuXHRcdFx0dGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHQvLyBXZSBhbHdheXMgc3RvcmUgdGhlIGNhbWVsQ2FzZWQga2V5XG5cdFx0XHRcdGRhdGFVc2VyLnNldCggdGhpcywga2V5LCB2YWx1ZSApO1xuXHRcdFx0fSApO1xuXHRcdH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSwgbnVsbCwgdHJ1ZSApO1xuXHR9LFxuXG5cdHJlbW92ZURhdGE6IGZ1bmN0aW9uKCBrZXkgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRkYXRhVXNlci5yZW1vdmUoIHRoaXMsIGtleSApO1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdHF1ZXVlOiBmdW5jdGlvbiggZWxlbSwgdHlwZSwgZGF0YSApIHtcblx0XHR2YXIgcXVldWU7XG5cblx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHR0eXBlID0gKCB0eXBlIHx8IFwiZnhcIiApICsgXCJxdWV1ZVwiO1xuXHRcdFx0cXVldWUgPSBkYXRhUHJpdi5nZXQoIGVsZW0sIHR5cGUgKTtcblxuXHRcdFx0Ly8gU3BlZWQgdXAgZGVxdWV1ZSBieSBnZXR0aW5nIG91dCBxdWlja2x5IGlmIHRoaXMgaXMganVzdCBhIGxvb2t1cFxuXHRcdFx0aWYgKCBkYXRhICkge1xuXHRcdFx0XHRpZiAoICFxdWV1ZSB8fCBBcnJheS5pc0FycmF5KCBkYXRhICkgKSB7XG5cdFx0XHRcdFx0cXVldWUgPSBkYXRhUHJpdi5zZXQoIGVsZW0sIHR5cGUsIGpRdWVyeS5tYWtlQXJyYXkoIGRhdGEgKSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goIGRhdGEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHF1ZXVlIHx8IFtdO1xuXHRcdH1cblx0fSxcblxuXHRkZXF1ZXVlOiBmdW5jdGlvbiggZWxlbSwgdHlwZSApIHtcblx0XHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cblx0XHR2YXIgcXVldWUgPSBqUXVlcnkucXVldWUoIGVsZW0sIHR5cGUgKSxcblx0XHRcdHN0YXJ0TGVuZ3RoID0gcXVldWUubGVuZ3RoLFxuXHRcdFx0Zm4gPSBxdWV1ZS5zaGlmdCgpLFxuXHRcdFx0aG9va3MgPSBqUXVlcnkuX3F1ZXVlSG9va3MoIGVsZW0sIHR5cGUgKSxcblx0XHRcdG5leHQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5LmRlcXVldWUoIGVsZW0sIHR5cGUgKTtcblx0XHRcdH07XG5cblx0XHQvLyBJZiB0aGUgZnggcXVldWUgaXMgZGVxdWV1ZWQsIGFsd2F5cyByZW1vdmUgdGhlIHByb2dyZXNzIHNlbnRpbmVsXG5cdFx0aWYgKCBmbiA9PT0gXCJpbnByb2dyZXNzXCIgKSB7XG5cdFx0XHRmbiA9IHF1ZXVlLnNoaWZ0KCk7XG5cdFx0XHRzdGFydExlbmd0aC0tO1xuXHRcdH1cblxuXHRcdGlmICggZm4gKSB7XG5cblx0XHRcdC8vIEFkZCBhIHByb2dyZXNzIHNlbnRpbmVsIHRvIHByZXZlbnQgdGhlIGZ4IHF1ZXVlIGZyb20gYmVpbmdcblx0XHRcdC8vIGF1dG9tYXRpY2FsbHkgZGVxdWV1ZWRcblx0XHRcdGlmICggdHlwZSA9PT0gXCJmeFwiICkge1xuXHRcdFx0XHRxdWV1ZS51bnNoaWZ0KCBcImlucHJvZ3Jlc3NcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDbGVhciB1cCB0aGUgbGFzdCBxdWV1ZSBzdG9wIGZ1bmN0aW9uXG5cdFx0XHRkZWxldGUgaG9va3Muc3RvcDtcblx0XHRcdGZuLmNhbGwoIGVsZW0sIG5leHQsIGhvb2tzICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhc3RhcnRMZW5ndGggJiYgaG9va3MgKSB7XG5cdFx0XHRob29rcy5lbXB0eS5maXJlKCk7XG5cdFx0fVxuXHR9LFxuXG5cdC8vIE5vdCBwdWJsaWMgLSBnZW5lcmF0ZSBhIHF1ZXVlSG9va3Mgb2JqZWN0LCBvciByZXR1cm4gdGhlIGN1cnJlbnQgb25lXG5cdF9xdWV1ZUhvb2tzOiBmdW5jdGlvbiggZWxlbSwgdHlwZSApIHtcblx0XHR2YXIga2V5ID0gdHlwZSArIFwicXVldWVIb29rc1wiO1xuXHRcdHJldHVybiBkYXRhUHJpdi5nZXQoIGVsZW0sIGtleSApIHx8IGRhdGFQcml2LnNldCggZWxlbSwga2V5LCB7XG5cdFx0XHRlbXB0eTogalF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICkuYWRkKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGF0YVByaXYucmVtb3ZlKCBlbGVtLCBbIHR5cGUgKyBcInF1ZXVlXCIsIGtleSBdICk7XG5cdFx0XHR9IClcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRxdWV1ZTogZnVuY3Rpb24oIHR5cGUsIGRhdGEgKSB7XG5cdFx0dmFyIHNldHRlciA9IDI7XG5cblx0XHRpZiAoIHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0ZGF0YSA9IHR5cGU7XG5cdFx0XHR0eXBlID0gXCJmeFwiO1xuXHRcdFx0c2V0dGVyLS07XG5cdFx0fVxuXG5cdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoIDwgc2V0dGVyICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5xdWV1ZSggdGhpc1sgMCBdLCB0eXBlICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRhdGEgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHR0aGlzIDpcblx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBxdWV1ZSA9IGpRdWVyeS5xdWV1ZSggdGhpcywgdHlwZSwgZGF0YSApO1xuXG5cdFx0XHRcdC8vIEVuc3VyZSBhIGhvb2tzIGZvciB0aGlzIHF1ZXVlXG5cdFx0XHRcdGpRdWVyeS5fcXVldWVIb29rcyggdGhpcywgdHlwZSApO1xuXG5cdFx0XHRcdGlmICggdHlwZSA9PT0gXCJmeFwiICYmIHF1ZXVlWyAwIF0gIT09IFwiaW5wcm9ncmVzc1wiICkge1xuXHRcdFx0XHRcdGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCB0eXBlICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0fSxcblx0ZGVxdWV1ZTogZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgdHlwZSApO1xuXHRcdH0gKTtcblx0fSxcblx0Y2xlYXJRdWV1ZTogZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0cmV0dXJuIHRoaXMucXVldWUoIHR5cGUgfHwgXCJmeFwiLCBbXSApO1xuXHR9LFxuXG5cdC8vIEdldCBhIHByb21pc2UgcmVzb2x2ZWQgd2hlbiBxdWV1ZXMgb2YgYSBjZXJ0YWluIHR5cGVcblx0Ly8gYXJlIGVtcHRpZWQgKGZ4IGlzIHRoZSB0eXBlIGJ5IGRlZmF1bHQpXG5cdHByb21pc2U6IGZ1bmN0aW9uKCB0eXBlLCBvYmogKSB7XG5cdFx0dmFyIHRtcCxcblx0XHRcdGNvdW50ID0gMSxcblx0XHRcdGRlZmVyID0galF1ZXJ5LkRlZmVycmVkKCksXG5cdFx0XHRlbGVtZW50cyA9IHRoaXMsXG5cdFx0XHRpID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRyZXNvbHZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggISggLS1jb3VudCApICkge1xuXHRcdFx0XHRcdGRlZmVyLnJlc29sdmVXaXRoKCBlbGVtZW50cywgWyBlbGVtZW50cyBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRpZiAoIHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0b2JqID0gdHlwZTtcblx0XHRcdHR5cGUgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0dG1wID0gZGF0YVByaXYuZ2V0KCBlbGVtZW50c1sgaSBdLCB0eXBlICsgXCJxdWV1ZUhvb2tzXCIgKTtcblx0XHRcdGlmICggdG1wICYmIHRtcC5lbXB0eSApIHtcblx0XHRcdFx0Y291bnQrKztcblx0XHRcdFx0dG1wLmVtcHR5LmFkZCggcmVzb2x2ZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXNvbHZlKCk7XG5cdFx0cmV0dXJuIGRlZmVyLnByb21pc2UoIG9iaiApO1xuXHR9XG59ICk7XG5cbnZhciBwbnVtID0gL1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlO1xuXG52YXIgcmNzc051bSA9IG5ldyBSZWdFeHAoIFwiXig/OihbKy1dKT18KShcIiArIHBudW0gKyBcIikoW2EteiVdKikkXCIsIFwiaVwiICk7XG5cbnZhciBjc3NFeHBhbmQgPSBbIFwiVG9wXCIsIFwiUmlnaHRcIiwgXCJCb3R0b21cIiwgXCJMZWZ0XCIgXTtcblxuLy8gaXNIaWRkZW5XaXRoaW5UcmVlIHJlcG9ydHMgaWYgYW4gZWxlbWVudCBoYXMgYSBub24tXCJub25lXCIgZGlzcGxheSBzdHlsZSAoaW5saW5lIGFuZC9vclxuLy8gdGhyb3VnaCB0aGUgQ1NTIGNhc2NhZGUpLCB3aGljaCBpcyB1c2VmdWwgaW4gZGVjaWRpbmcgd2hldGhlciBvciBub3QgdG8gbWFrZSBpdCB2aXNpYmxlLlxuLy8gSXQgZGlmZmVycyBmcm9tIHRoZSA6aGlkZGVuIHNlbGVjdG9yIChqUXVlcnkuZXhwci5wc2V1ZG9zLmhpZGRlbikgaW4gdHdvIGltcG9ydGFudCB3YXlzOlxuLy8gKiBBIGhpZGRlbiBhbmNlc3RvciBkb2VzIG5vdCBmb3JjZSBhbiBlbGVtZW50IHRvIGJlIGNsYXNzaWZpZWQgYXMgaGlkZGVuLlxuLy8gKiBCZWluZyBkaXNjb25uZWN0ZWQgZnJvbSB0aGUgZG9jdW1lbnQgZG9lcyBub3QgZm9yY2UgYW4gZWxlbWVudCB0byBiZSBjbGFzc2lmaWVkIGFzIGhpZGRlbi5cbi8vIFRoZXNlIGRpZmZlcmVuY2VzIGltcHJvdmUgdGhlIGJlaGF2aW9yIG9mIC50b2dnbGUoKSBldCBhbC4gd2hlbiBhcHBsaWVkIHRvIGVsZW1lbnRzIHRoYXQgYXJlXG4vLyBkZXRhY2hlZCBvciBjb250YWluZWQgd2l0aGluIGhpZGRlbiBhbmNlc3RvcnMgKGdoLTI0MDQsIGdoLTI4NjMpLlxuZnVuY3Rpb24gaXNIaWRkZW5XaXRoaW5UcmVlKCBlbGVtLCBlbCApIHtcblxuXHQvLyBpc0hpZGRlbldpdGhpblRyZWUgbWlnaHQgYmUgY2FsbGVkIGZyb20galF1ZXJ5I2ZpbHRlciBmdW5jdGlvbjtcblx0Ly8gaW4gdGhhdCBjYXNlLCBlbGVtZW50IHdpbGwgYmUgc2Vjb25kIGFyZ3VtZW50XG5cdGVsZW0gPSBlbCB8fCBlbGVtO1xuXG5cdC8vIElubGluZSBzdHlsZSB0cnVtcHMgYWxsXG5cdHJldHVybiBlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiIHx8XG5cdFx0ZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIlwiICYmXG5cdFx0alF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKSA9PT0gXCJub25lXCI7XG59XG5cbnZhciByYWxwaGFTdGFydCA9IC9eW2Etel0vLFxuXG5cdC8vIFRoZSByZWdleCB2aXN1YWxpemVkOlxuXHQvL1xuXHQvLyAgICAgICAgICAgICAgICAgICAgICAgICAvLS0tLS0tLS0tLVxcXG5cdC8vICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgIHwgICAgLy0tLS0tLS1cXFxuXHQvLyAgICAgICAgICAgICAgICAgICAgICAgIHwgIC8gVG9wICBcXCAgfCAgIHwgICAgICAgICB8XG5cdC8vICAgICAgICAgLy0tLSBCb3JkZXIgLS0tKy18IFJpZ2h0ICB8LSstLS0rLSBXaWR0aCAtKy0tLVxcXG5cdC8vICAgICAgICB8ICAgICAgICAgICAgICAgICB8IEJvdHRvbSB8ICAgICAgICAgICAgICAgICAgICB8XG5cdC8vICAgICAgICB8ICAgICAgICAgICAgICAgICAgXFwgTGVmdCAvICAgICAgICAgICAgICAgICAgICAgfFxuXHQvLyAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuXHQvLyAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8tLS0tLS0tLS0tXFwgICAgIHxcblx0Ly8gICAgICAgIHwgICAgICAgICAgLy0tLS0tLS0tLS0tLS1cXCAgICB8ICAgICAgICAgICAgfCAgICB8LSBFTkRcblx0Ly8gICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgIHwgIC8gVG9wICBcXCAgfCAgICB8XG5cdC8vICAgICAgICB8ICAgICAgICAgfCAgLyBNYXJnaW4gIFxcICB8ICAgfCB8IFJpZ2h0ICB8IHwgICAgfFxuXHQvLyAgICAgICAgfC0tLS0tLS0tLSstfCAgICAgICAgICAgfC0rLS0tKy18IEJvdHRvbSB8LSstLS0tfFxuXHQvLyAgICAgICAgfCAgICAgICAgICAgIFxcIFBhZGRpbmcgLyAgICAgICAgIFxcIExlZnQgLyAgICAgICB8XG5cdC8vIEJFR0lOIC18ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG5cdC8vICAgICAgICB8ICAgICAgICAgICAgICAgIC8tLS0tLS0tLS1cXCAgICAgICAgICAgICAgICAgICAgfFxuXHQvLyAgICAgICAgfCAgICAgICAgICAgICAgIHwgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgfFxuXHQvLyAgICAgICAgfCAgICAgICAgICAgICAgIHwgIC8gTWluIFxcICB8ICAgIC8gV2lkdGggIFxcICAgICB8XG5cdC8vICAgICAgICAgXFwtLS0tLS0tLS0tLS0tLSstfCAgICAgICB8LSstLS18ICAgICAgICAgIHwtLS0vXG5cdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgXFwgTWF4IC8gICAgICAgXFwgSGVpZ2h0IC9cblx0cmF1dG9QeCA9IC9eKD86Qm9yZGVyKD86VG9wfFJpZ2h0fEJvdHRvbXxMZWZ0KT8oPzpXaWR0aHwpfCg/Ok1hcmdpbnxQYWRkaW5nKT8oPzpUb3B8UmlnaHR8Qm90dG9tfExlZnQpP3woPzpNaW58TWF4KT8oPzpXaWR0aHxIZWlnaHQpKSQvO1xuXG5mdW5jdGlvbiBpc0F1dG9QeCggcHJvcCApIHtcblxuXHQvLyBUaGUgZmlyc3QgdGVzdCBpcyB1c2VkIHRvIGVuc3VyZSB0aGF0OlxuXHQvLyAxLiBUaGUgcHJvcCBzdGFydHMgd2l0aCBhIGxvd2VyY2FzZSBsZXR0ZXIgKGFzIHdlIHVwcGVyY2FzZSBpdCBmb3IgdGhlIHNlY29uZCByZWdleCkuXG5cdC8vIDIuIFRoZSBwcm9wIGlzIG5vdCBlbXB0eS5cblx0cmV0dXJuIHJhbHBoYVN0YXJ0LnRlc3QoIHByb3AgKSAmJlxuXHRcdHJhdXRvUHgudGVzdCggcHJvcFsgMCBdLnRvVXBwZXJDYXNlKCkgKyBwcm9wLnNsaWNlKCAxICkgKTtcbn1cblxuZnVuY3Rpb24gYWRqdXN0Q1NTKCBlbGVtLCBwcm9wLCB2YWx1ZVBhcnRzLCB0d2VlbiApIHtcblx0dmFyIGFkanVzdGVkLCBzY2FsZSxcblx0XHRtYXhJdGVyYXRpb25zID0gMjAsXG5cdFx0Y3VycmVudFZhbHVlID0gdHdlZW4gP1xuXHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB0d2Vlbi5jdXIoKTtcblx0XHRcdH0gOlxuXHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBqUXVlcnkuY3NzKCBlbGVtLCBwcm9wLCBcIlwiICk7XG5cdFx0XHR9LFxuXHRcdGluaXRpYWwgPSBjdXJyZW50VmFsdWUoKSxcblx0XHR1bml0ID0gdmFsdWVQYXJ0cyAmJiB2YWx1ZVBhcnRzWyAzIF0gfHwgKCBpc0F1dG9QeCggcHJvcCApID8gXCJweFwiIDogXCJcIiApLFxuXG5cdFx0Ly8gU3RhcnRpbmcgdmFsdWUgY29tcHV0YXRpb24gaXMgcmVxdWlyZWQgZm9yIHBvdGVudGlhbCB1bml0IG1pc21hdGNoZXNcblx0XHRpbml0aWFsSW5Vbml0ID0gZWxlbS5ub2RlVHlwZSAmJlxuXHRcdFx0KCAhaXNBdXRvUHgoIHByb3AgKSB8fCB1bml0ICE9PSBcInB4XCIgJiYgK2luaXRpYWwgKSAmJlxuXHRcdFx0cmNzc051bS5leGVjKCBqUXVlcnkuY3NzKCBlbGVtLCBwcm9wICkgKTtcblxuXHRpZiAoIGluaXRpYWxJblVuaXQgJiYgaW5pdGlhbEluVW5pdFsgMyBdICE9PSB1bml0ICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA8PTU0IC0gNjYrXG5cdFx0Ly8gSGFsdmUgdGhlIGl0ZXJhdGlvbiB0YXJnZXQgdmFsdWUgdG8gcHJldmVudCBpbnRlcmZlcmVuY2UgZnJvbSBDU1MgdXBwZXIgYm91bmRzIChnaC0yMTQ0KVxuXHRcdGluaXRpYWwgPSBpbml0aWFsIC8gMjtcblxuXHRcdC8vIFRydXN0IHVuaXRzIHJlcG9ydGVkIGJ5IGpRdWVyeS5jc3Ncblx0XHR1bml0ID0gdW5pdCB8fCBpbml0aWFsSW5Vbml0WyAzIF07XG5cblx0XHQvLyBJdGVyYXRpdmVseSBhcHByb3hpbWF0ZSBmcm9tIGEgbm9uemVybyBzdGFydGluZyBwb2ludFxuXHRcdGluaXRpYWxJblVuaXQgPSAraW5pdGlhbCB8fCAxO1xuXG5cdFx0d2hpbGUgKCBtYXhJdGVyYXRpb25zLS0gKSB7XG5cblx0XHRcdC8vIEV2YWx1YXRlIGFuZCB1cGRhdGUgb3VyIGJlc3QgZ3Vlc3MgKGRvdWJsaW5nIGd1ZXNzZXMgdGhhdCB6ZXJvIG91dCkuXG5cdFx0XHQvLyBGaW5pc2ggaWYgdGhlIHNjYWxlIGVxdWFscyBvciBjcm9zc2VzIDEgKG1ha2luZyB0aGUgb2xkKm5ldyBwcm9kdWN0IG5vbi1wb3NpdGl2ZSkuXG5cdFx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AsIGluaXRpYWxJblVuaXQgKyB1bml0ICk7XG5cdFx0XHRpZiAoICggMSAtIHNjYWxlICkgKiAoIDEgLSAoIHNjYWxlID0gY3VycmVudFZhbHVlKCkgLyBpbml0aWFsIHx8IDAuNSApICkgPD0gMCApIHtcblx0XHRcdFx0bWF4SXRlcmF0aW9ucyA9IDA7XG5cdFx0XHR9XG5cdFx0XHRpbml0aWFsSW5Vbml0ID0gaW5pdGlhbEluVW5pdCAvIHNjYWxlO1xuXG5cdFx0fVxuXG5cdFx0aW5pdGlhbEluVW5pdCA9IGluaXRpYWxJblVuaXQgKiAyO1xuXHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgcHJvcCwgaW5pdGlhbEluVW5pdCArIHVuaXQgKTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB3ZSB1cGRhdGUgdGhlIHR3ZWVuIHByb3BlcnRpZXMgbGF0ZXIgb25cblx0XHR2YWx1ZVBhcnRzID0gdmFsdWVQYXJ0cyB8fCBbXTtcblx0fVxuXG5cdGlmICggdmFsdWVQYXJ0cyApIHtcblx0XHRpbml0aWFsSW5Vbml0ID0gK2luaXRpYWxJblVuaXQgfHwgK2luaXRpYWwgfHwgMDtcblxuXHRcdC8vIEFwcGx5IHJlbGF0aXZlIG9mZnNldCAoKz0vLT0pIGlmIHNwZWNpZmllZFxuXHRcdGFkanVzdGVkID0gdmFsdWVQYXJ0c1sgMSBdID9cblx0XHRcdGluaXRpYWxJblVuaXQgKyAoIHZhbHVlUGFydHNbIDEgXSArIDEgKSAqIHZhbHVlUGFydHNbIDIgXSA6XG5cdFx0XHQrdmFsdWVQYXJ0c1sgMiBdO1xuXHRcdGlmICggdHdlZW4gKSB7XG5cdFx0XHR0d2Vlbi51bml0ID0gdW5pdDtcblx0XHRcdHR3ZWVuLnN0YXJ0ID0gaW5pdGlhbEluVW5pdDtcblx0XHRcdHR3ZWVuLmVuZCA9IGFkanVzdGVkO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gYWRqdXN0ZWQ7XG59XG5cbi8vIE1hdGNoZXMgZGFzaGVkIHN0cmluZyBmb3IgY2FtZWxpemluZ1xudmFyIHJtc1ByZWZpeCA9IC9eLW1zLS87XG5cbi8vIENvbnZlcnQgZGFzaGVkIHRvIGNhbWVsQ2FzZSwgaGFuZGxlIHZlbmRvciBwcmVmaXhlcy5cbi8vIFVzZWQgYnkgdGhlIGNzcyAmIGVmZmVjdHMgbW9kdWxlcy5cbi8vIFN1cHBvcnQ6IElFIDw9OSAtIDExK1xuLy8gTWljcm9zb2Z0IGZvcmdvdCB0byBodW1wIHRoZWlyIHZlbmRvciBwcmVmaXggKHRyYWMtOTU3MilcbmZ1bmN0aW9uIGNzc0NhbWVsQ2FzZSggc3RyaW5nICkge1xuXHRyZXR1cm4gY2FtZWxDYXNlKCBzdHJpbmcucmVwbGFjZSggcm1zUHJlZml4LCBcIm1zLVwiICkgKTtcbn1cblxudmFyIGRlZmF1bHREaXNwbGF5TWFwID0ge307XG5cbmZ1bmN0aW9uIGdldERlZmF1bHREaXNwbGF5KCBlbGVtICkge1xuXHR2YXIgdGVtcCxcblx0XHRkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQsXG5cdFx0bm9kZU5hbWUgPSBlbGVtLm5vZGVOYW1lLFxuXHRcdGRpc3BsYXkgPSBkZWZhdWx0RGlzcGxheU1hcFsgbm9kZU5hbWUgXTtcblxuXHRpZiAoIGRpc3BsYXkgKSB7XG5cdFx0cmV0dXJuIGRpc3BsYXk7XG5cdH1cblxuXHR0ZW1wID0gZG9jLmJvZHkuYXBwZW5kQ2hpbGQoIGRvYy5jcmVhdGVFbGVtZW50KCBub2RlTmFtZSApICk7XG5cdGRpc3BsYXkgPSBqUXVlcnkuY3NzKCB0ZW1wLCBcImRpc3BsYXlcIiApO1xuXG5cdHRlbXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdGVtcCApO1xuXG5cdGlmICggZGlzcGxheSA9PT0gXCJub25lXCIgKSB7XG5cdFx0ZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0fVxuXHRkZWZhdWx0RGlzcGxheU1hcFsgbm9kZU5hbWUgXSA9IGRpc3BsYXk7XG5cblx0cmV0dXJuIGRpc3BsYXk7XG59XG5cbmZ1bmN0aW9uIHNob3dIaWRlKCBlbGVtZW50cywgc2hvdyApIHtcblx0dmFyIGRpc3BsYXksIGVsZW0sXG5cdFx0dmFsdWVzID0gW10sXG5cdFx0aW5kZXggPSAwLFxuXHRcdGxlbmd0aCA9IGVsZW1lbnRzLmxlbmd0aDtcblxuXHQvLyBEZXRlcm1pbmUgbmV3IGRpc3BsYXkgdmFsdWUgZm9yIGVsZW1lbnRzIHRoYXQgbmVlZCB0byBjaGFuZ2Vcblx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRlbGVtID0gZWxlbWVudHNbIGluZGV4IF07XG5cdFx0aWYgKCAhZWxlbS5zdHlsZSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGRpc3BsYXkgPSBlbGVtLnN0eWxlLmRpc3BsYXk7XG5cdFx0aWYgKCBzaG93ICkge1xuXG5cdFx0XHQvLyBTaW5jZSB3ZSBmb3JjZSB2aXNpYmlsaXR5IHVwb24gY2FzY2FkZS1oaWRkZW4gZWxlbWVudHMsIGFuIGltbWVkaWF0ZSAoYW5kIHNsb3cpXG5cdFx0XHQvLyBjaGVjayBpcyByZXF1aXJlZCBpbiB0aGlzIGZpcnN0IGxvb3AgdW5sZXNzIHdlIGhhdmUgYSBub25lbXB0eSBkaXNwbGF5IHZhbHVlIChlaXRoZXJcblx0XHRcdC8vIGlubGluZSBvciBhYm91dC10by1iZS1yZXN0b3JlZClcblx0XHRcdGlmICggZGlzcGxheSA9PT0gXCJub25lXCIgKSB7XG5cdFx0XHRcdHZhbHVlc1sgaW5kZXggXSA9IGRhdGFQcml2LmdldCggZWxlbSwgXCJkaXNwbGF5XCIgKSB8fCBudWxsO1xuXHRcdFx0XHRpZiAoICF2YWx1ZXNbIGluZGV4IF0gKSB7XG5cdFx0XHRcdFx0ZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCBlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwiXCIgJiYgaXNIaWRkZW5XaXRoaW5UcmVlKCBlbGVtICkgKSB7XG5cdFx0XHRcdHZhbHVlc1sgaW5kZXggXSA9IGdldERlZmF1bHREaXNwbGF5KCBlbGVtICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICggZGlzcGxheSAhPT0gXCJub25lXCIgKSB7XG5cdFx0XHRcdHZhbHVlc1sgaW5kZXggXSA9IFwibm9uZVwiO1xuXG5cdFx0XHRcdC8vIFJlbWVtYmVyIHdoYXQgd2UncmUgb3ZlcndyaXRpbmdcblx0XHRcdFx0ZGF0YVByaXYuc2V0KCBlbGVtLCBcImRpc3BsYXlcIiwgZGlzcGxheSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFNldCB0aGUgZGlzcGxheSBvZiB0aGUgZWxlbWVudHMgaW4gYSBzZWNvbmQgbG9vcCB0byBhdm9pZCBjb25zdGFudCByZWZsb3dcblx0Zm9yICggaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRpZiAoIHZhbHVlc1sgaW5kZXggXSAhPSBudWxsICkge1xuXHRcdFx0ZWxlbWVudHNbIGluZGV4IF0uc3R5bGUuZGlzcGxheSA9IHZhbHVlc1sgaW5kZXggXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWxlbWVudHM7XG59XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0c2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHNob3dIaWRlKCB0aGlzLCB0cnVlICk7XG5cdH0sXG5cdGhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzaG93SGlkZSggdGhpcyApO1xuXHR9LFxuXHR0b2dnbGU6IGZ1bmN0aW9uKCBzdGF0ZSApIHtcblx0XHRpZiAoIHR5cGVvZiBzdGF0ZSA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGUgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCBpc0hpZGRlbldpdGhpblRyZWUoIHRoaXMgKSApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuc2hvdygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufSApO1xuXG52YXIgaXNBdHRhY2hlZCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBqUXVlcnkuY29udGFpbnMoIGVsZW0ub3duZXJEb2N1bWVudCwgZWxlbSApIHx8XG5cdFx0XHRlbGVtLmdldFJvb3ROb2RlKCBjb21wb3NlZCApID09PSBlbGVtLm93bmVyRG9jdW1lbnQ7XG5cdH0sXG5cdGNvbXBvc2VkID0geyBjb21wb3NlZDogdHJ1ZSB9O1xuXG4vLyBTdXBwb3J0OiBJRSA5IC0gMTErXG4vLyBDaGVjayBhdHRhY2htZW50IGFjcm9zcyBzaGFkb3cgRE9NIGJvdW5kYXJpZXMgd2hlbiBwb3NzaWJsZSAoZ2gtMzUwNCkuXG4vLyBQcm92aWRlIGEgZmFsbGJhY2sgZm9yIGJyb3dzZXJzIHdpdGhvdXQgU2hhZG93IERPTSB2MSBzdXBwb3J0LlxuaWYgKCAhZG9jdW1lbnRFbGVtZW50JDEuZ2V0Um9vdE5vZGUgKSB7XG5cdGlzQXR0YWNoZWQgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmNvbnRhaW5zKCBlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0gKTtcblx0fTtcbn1cblxuLy8gcnRhZ05hbWUgY2FwdHVyZXMgdGhlIG5hbWUgZnJvbSB0aGUgZmlyc3Qgc3RhcnQgdGFnIGluIGEgc3RyaW5nIG9mIEhUTUxcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI3RhZy1vcGVuLXN0YXRlXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCN0YWctbmFtZS1zdGF0ZVxudmFyIHJ0YWdOYW1lID0gLzwoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKS9pO1xuXG52YXIgd3JhcE1hcCA9IHtcblxuXHQvLyBUYWJsZSBwYXJ0cyBuZWVkIHRvIGJlIHdyYXBwZWQgd2l0aCBgPHRhYmxlPmAgb3IgdGhleSdyZVxuXHQvLyBzdHJpcHBlZCB0byB0aGVpciBjb250ZW50cyB3aGVuIHB1dCBpbiBhIGRpdi5cblx0Ly8gWEhUTUwgcGFyc2VycyBkbyBub3QgbWFnaWNhbGx5IGluc2VydCBlbGVtZW50cyBpbiB0aGVcblx0Ly8gc2FtZSB3YXkgdGhhdCB0YWcgc291cCBwYXJzZXJzIGRvLCBzbyB3ZSBjYW5ub3Qgc2hvcnRlblxuXHQvLyB0aGlzIGJ5IG9taXR0aW5nIDx0Ym9keT4gb3Igb3RoZXIgcmVxdWlyZWQgZWxlbWVudHMuXG5cdHRoZWFkOiBbIFwidGFibGVcIiBdLFxuXHRjb2w6IFsgXCJjb2xncm91cFwiLCBcInRhYmxlXCIgXSxcblx0dHI6IFsgXCJ0Ym9keVwiLCBcInRhYmxlXCIgXSxcblx0dGQ6IFsgXCJ0clwiLCBcInRib2R5XCIsIFwidGFibGVcIiBdXG59O1xuXG53cmFwTWFwLnRib2R5ID0gd3JhcE1hcC50Zm9vdCA9IHdyYXBNYXAuY29sZ3JvdXAgPSB3cmFwTWFwLmNhcHRpb24gPSB3cmFwTWFwLnRoZWFkO1xud3JhcE1hcC50aCA9IHdyYXBNYXAudGQ7XG5cbmZ1bmN0aW9uIGdldEFsbCggY29udGV4dCwgdGFnICkge1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExK1xuXHQvLyBVc2UgdHlwZW9mIHRvIGF2b2lkIHplcm8tYXJndW1lbnQgbWV0aG9kIGludm9jYXRpb24gb24gaG9zdCBvYmplY3RzICh0cmFjLTE1MTUxKVxuXHR2YXIgcmV0O1xuXG5cdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0cmV0ID0gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggdGFnIHx8IFwiKlwiICk7XG5cblx0fSBlbHNlIGlmICggdHlwZW9mIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRyZXQgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoIHRhZyB8fCBcIipcIiApO1xuXG5cdH0gZWxzZSB7XG5cdFx0cmV0ID0gW107XG5cdH1cblxuXHRpZiAoIHRhZyA9PT0gdW5kZWZpbmVkIHx8IHRhZyAmJiBub2RlTmFtZSggY29udGV4dCwgdGFnICkgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5tZXJnZSggWyBjb250ZXh0IF0sIHJldCApO1xuXHR9XG5cblx0cmV0dXJuIHJldDtcbn1cblxudmFyIHJzY3JpcHRUeXBlID0gL14kfF5tb2R1bGUkfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaTtcblxuLy8gTWFyayBzY3JpcHRzIGFzIGhhdmluZyBhbHJlYWR5IGJlZW4gZXZhbHVhdGVkXG5mdW5jdGlvbiBzZXRHbG9iYWxFdmFsKCBlbGVtcywgcmVmRWxlbWVudHMgKSB7XG5cdHZhciBpID0gMCxcblx0XHRsID0gZWxlbXMubGVuZ3RoO1xuXG5cdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRkYXRhUHJpdi5zZXQoXG5cdFx0XHRlbGVtc1sgaSBdLFxuXHRcdFx0XCJnbG9iYWxFdmFsXCIsXG5cdFx0XHQhcmVmRWxlbWVudHMgfHwgZGF0YVByaXYuZ2V0KCByZWZFbGVtZW50c1sgaSBdLCBcImdsb2JhbEV2YWxcIiApXG5cdFx0KTtcblx0fVxufVxuXG52YXIgcmh0bWwgPSAvPHwmIz9cXHcrOy87XG5cbmZ1bmN0aW9uIGJ1aWxkRnJhZ21lbnQoIGVsZW1zLCBjb250ZXh0LCBzY3JpcHRzLCBzZWxlY3Rpb24sIGlnbm9yZWQgKSB7XG5cdHZhciBlbGVtLCB0bXAsIHRhZywgd3JhcCwgYXR0YWNoZWQsIGosXG5cdFx0ZnJhZ21lbnQgPSBjb250ZXh0LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcblx0XHRub2RlcyA9IFtdLFxuXHRcdGkgPSAwLFxuXHRcdGwgPSBlbGVtcy5sZW5ndGg7XG5cblx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdGVsZW0gPSBlbGVtc1sgaSBdO1xuXG5cdFx0aWYgKCBlbGVtIHx8IGVsZW0gPT09IDAgKSB7XG5cblx0XHRcdC8vIEFkZCBub2RlcyBkaXJlY3RseVxuXHRcdFx0aWYgKCB0b1R5cGUoIGVsZW0gKSA9PT0gXCJvYmplY3RcIiAmJiAoIGVsZW0ubm9kZVR5cGUgfHwgaXNBcnJheUxpa2UoIGVsZW0gKSApICkge1xuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIG5vZGVzLCBlbGVtLm5vZGVUeXBlID8gWyBlbGVtIF0gOiBlbGVtICk7XG5cblx0XHRcdC8vIENvbnZlcnQgbm9uLWh0bWwgaW50byBhIHRleHQgbm9kZVxuXHRcdFx0fSBlbHNlIGlmICggIXJodG1sLnRlc3QoIGVsZW0gKSApIHtcblx0XHRcdFx0bm9kZXMucHVzaCggY29udGV4dC5jcmVhdGVUZXh0Tm9kZSggZWxlbSApICk7XG5cblx0XHRcdC8vIENvbnZlcnQgaHRtbCBpbnRvIERPTSBub2Rlc1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG1wID0gdG1wIHx8IGZyYWdtZW50LmFwcGVuZENoaWxkKCBjb250ZXh0LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSApO1xuXG5cdFx0XHRcdC8vIERlc2VyaWFsaXplIGEgc3RhbmRhcmQgcmVwcmVzZW50YXRpb25cblx0XHRcdFx0dGFnID0gKCBydGFnTmFtZS5leGVjKCBlbGVtICkgfHwgWyBcIlwiLCBcIlwiIF0gKVsgMSBdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdHdyYXAgPSB3cmFwTWFwWyB0YWcgXSB8fCBhcnI7XG5cblx0XHRcdFx0Ly8gQ3JlYXRlIHdyYXBwZXJzICYgZGVzY2VuZCBpbnRvIHRoZW0uXG5cdFx0XHRcdGogPSB3cmFwLmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKCAtLWogPiAtMSApIHtcblx0XHRcdFx0XHR0bXAgPSB0bXAuYXBwZW5kQ2hpbGQoIGNvbnRleHQuY3JlYXRlRWxlbWVudCggd3JhcFsgaiBdICkgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRtcC5pbm5lckhUTUwgPSBqUXVlcnkuaHRtbFByZWZpbHRlciggZWxlbSApO1xuXG5cdFx0XHRcdGpRdWVyeS5tZXJnZSggbm9kZXMsIHRtcC5jaGlsZE5vZGVzICk7XG5cblx0XHRcdFx0Ly8gUmVtZW1iZXIgdGhlIHRvcC1sZXZlbCBjb250YWluZXJcblx0XHRcdFx0dG1wID0gZnJhZ21lbnQuZmlyc3RDaGlsZDtcblxuXHRcdFx0XHQvLyBFbnN1cmUgdGhlIGNyZWF0ZWQgbm9kZXMgYXJlIG9ycGhhbmVkICh0cmFjLTEyMzkyKVxuXHRcdFx0XHR0bXAudGV4dENvbnRlbnQgPSBcIlwiO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJlbW92ZSB3cmFwcGVyIGZyb20gZnJhZ21lbnRcblx0ZnJhZ21lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuXG5cdGkgPSAwO1xuXHR3aGlsZSAoICggZWxlbSA9IG5vZGVzWyBpKysgXSApICkge1xuXG5cdFx0Ly8gU2tpcCBlbGVtZW50cyBhbHJlYWR5IGluIHRoZSBjb250ZXh0IGNvbGxlY3Rpb24gKHRyYWMtNDA4Nylcblx0XHRpZiAoIHNlbGVjdGlvbiAmJiBqUXVlcnkuaW5BcnJheSggZWxlbSwgc2VsZWN0aW9uICkgPiAtMSApIHtcblx0XHRcdGlmICggaWdub3JlZCApIHtcblx0XHRcdFx0aWdub3JlZC5wdXNoKCBlbGVtICk7XG5cdFx0XHR9XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRhdHRhY2hlZCA9IGlzQXR0YWNoZWQoIGVsZW0gKTtcblxuXHRcdC8vIEFwcGVuZCB0byBmcmFnbWVudFxuXHRcdHRtcCA9IGdldEFsbCggZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGVsZW0gKSwgXCJzY3JpcHRcIiApO1xuXG5cdFx0Ly8gUHJlc2VydmUgc2NyaXB0IGV2YWx1YXRpb24gaGlzdG9yeVxuXHRcdGlmICggYXR0YWNoZWQgKSB7XG5cdFx0XHRzZXRHbG9iYWxFdmFsKCB0bXAgKTtcblx0XHR9XG5cblx0XHQvLyBDYXB0dXJlIGV4ZWN1dGFibGVzXG5cdFx0aWYgKCBzY3JpcHRzICkge1xuXHRcdFx0aiA9IDA7XG5cdFx0XHR3aGlsZSAoICggZWxlbSA9IHRtcFsgaisrIF0gKSApIHtcblx0XHRcdFx0aWYgKCByc2NyaXB0VHlwZS50ZXN0KCBlbGVtLnR5cGUgfHwgXCJcIiApICkge1xuXHRcdFx0XHRcdHNjcmlwdHMucHVzaCggZWxlbSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZyYWdtZW50O1xufVxuXG4vLyBSZXBsYWNlL3Jlc3RvcmUgdGhlIHR5cGUgYXR0cmlidXRlIG9mIHNjcmlwdCBlbGVtZW50cyBmb3Igc2FmZSBET00gbWFuaXB1bGF0aW9uXG5mdW5jdGlvbiBkaXNhYmxlU2NyaXB0KCBlbGVtICkge1xuXHRlbGVtLnR5cGUgPSAoIGVsZW0uZ2V0QXR0cmlidXRlKCBcInR5cGVcIiApICE9PSBudWxsICkgKyBcIi9cIiArIGVsZW0udHlwZTtcblx0cmV0dXJuIGVsZW07XG59XG5mdW5jdGlvbiByZXN0b3JlU2NyaXB0KCBlbGVtICkge1xuXHRpZiAoICggZWxlbS50eXBlIHx8IFwiXCIgKS5zbGljZSggMCwgNSApID09PSBcInRydWUvXCIgKSB7XG5cdFx0ZWxlbS50eXBlID0gZWxlbS50eXBlLnNsaWNlKCA1ICk7XG5cdH0gZWxzZSB7XG5cdFx0ZWxlbS5yZW1vdmVBdHRyaWJ1dGUoIFwidHlwZVwiICk7XG5cdH1cblxuXHRyZXR1cm4gZWxlbTtcbn1cblxuZnVuY3Rpb24gZG9tTWFuaXAoIGNvbGxlY3Rpb24sIGFyZ3MsIGNhbGxiYWNrLCBpZ25vcmVkICkge1xuXG5cdC8vIEZsYXR0ZW4gYW55IG5lc3RlZCBhcnJheXNcblx0YXJncyA9IGZsYXQoIGFyZ3MgKTtcblxuXHR2YXIgZnJhZ21lbnQsIGZpcnN0LCBzY3JpcHRzLCBoYXNTY3JpcHRzLCBub2RlLCBkb2MsXG5cdFx0aSA9IDAsXG5cdFx0bCA9IGNvbGxlY3Rpb24ubGVuZ3RoLFxuXHRcdGlOb0Nsb25lID0gbCAtIDEsXG5cdFx0dmFsdWUgPSBhcmdzWyAwIF0sXG5cdFx0dmFsdWVJc0Z1bmN0aW9uID0gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCI7XG5cblx0aWYgKCB2YWx1ZUlzRnVuY3Rpb24gKSB7XG5cdFx0cmV0dXJuIGNvbGxlY3Rpb24uZWFjaCggZnVuY3Rpb24oIGluZGV4ICkge1xuXHRcdFx0dmFyIHNlbGYgPSBjb2xsZWN0aW9uLmVxKCBpbmRleCApO1xuXHRcdFx0YXJnc1sgMCBdID0gdmFsdWUuY2FsbCggdGhpcywgaW5kZXgsIHNlbGYuaHRtbCgpICk7XG5cdFx0XHRkb21NYW5pcCggc2VsZiwgYXJncywgY2FsbGJhY2ssIGlnbm9yZWQgKTtcblx0XHR9ICk7XG5cdH1cblxuXHRpZiAoIGwgKSB7XG5cdFx0ZnJhZ21lbnQgPSBidWlsZEZyYWdtZW50KCBhcmdzLCBjb2xsZWN0aW9uWyAwIF0ub3duZXJEb2N1bWVudCwgZmFsc2UsIGNvbGxlY3Rpb24sIGlnbm9yZWQgKTtcblx0XHRmaXJzdCA9IGZyYWdtZW50LmZpcnN0Q2hpbGQ7XG5cblx0XHRpZiAoIGZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICkge1xuXHRcdFx0ZnJhZ21lbnQgPSBmaXJzdDtcblx0XHR9XG5cblx0XHQvLyBSZXF1aXJlIGVpdGhlciBuZXcgY29udGVudCBvciBhbiBpbnRlcmVzdCBpbiBpZ25vcmVkIGVsZW1lbnRzIHRvIGludm9rZSB0aGUgY2FsbGJhY2tcblx0XHRpZiAoIGZpcnN0IHx8IGlnbm9yZWQgKSB7XG5cdFx0XHRzY3JpcHRzID0galF1ZXJ5Lm1hcCggZ2V0QWxsKCBmcmFnbWVudCwgXCJzY3JpcHRcIiApLCBkaXNhYmxlU2NyaXB0ICk7XG5cdFx0XHRoYXNTY3JpcHRzID0gc2NyaXB0cy5sZW5ndGg7XG5cblx0XHRcdC8vIFVzZSB0aGUgb3JpZ2luYWwgZnJhZ21lbnQgZm9yIHRoZSBsYXN0IGl0ZW1cblx0XHRcdC8vIGluc3RlYWQgb2YgdGhlIGZpcnN0IGJlY2F1c2UgaXQgY2FuIGVuZCB1cFxuXHRcdFx0Ly8gYmVpbmcgZW1wdGllZCBpbmNvcnJlY3RseSBpbiBjZXJ0YWluIHNpdHVhdGlvbnMgKHRyYWMtODA3MCkuXG5cdFx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdG5vZGUgPSBmcmFnbWVudDtcblxuXHRcdFx0XHRpZiAoIGkgIT09IGlOb0Nsb25lICkge1xuXHRcdFx0XHRcdG5vZGUgPSBqUXVlcnkuY2xvbmUoIG5vZGUsIHRydWUsIHRydWUgKTtcblxuXHRcdFx0XHRcdC8vIEtlZXAgcmVmZXJlbmNlcyB0byBjbG9uZWQgc2NyaXB0cyBmb3IgbGF0ZXIgcmVzdG9yYXRpb25cblx0XHRcdFx0XHRpZiAoIGhhc1NjcmlwdHMgKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkubWVyZ2UoIHNjcmlwdHMsIGdldEFsbCggbm9kZSwgXCJzY3JpcHRcIiApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2FsbGJhY2suY2FsbCggY29sbGVjdGlvblsgaSBdLCBub2RlLCBpICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggaGFzU2NyaXB0cyApIHtcblx0XHRcdFx0ZG9jID0gc2NyaXB0c1sgc2NyaXB0cy5sZW5ndGggLSAxIF0ub3duZXJEb2N1bWVudDtcblxuXHRcdFx0XHQvLyBSZS1lbmFibGUgc2NyaXB0c1xuXHRcdFx0XHRqUXVlcnkubWFwKCBzY3JpcHRzLCByZXN0b3JlU2NyaXB0ICk7XG5cblx0XHRcdFx0Ly8gRXZhbHVhdGUgZXhlY3V0YWJsZSBzY3JpcHRzIG9uIGZpcnN0IGRvY3VtZW50IGluc2VydGlvblxuXHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IGhhc1NjcmlwdHM7IGkrKyApIHtcblx0XHRcdFx0XHRub2RlID0gc2NyaXB0c1sgaSBdO1xuXHRcdFx0XHRcdGlmICggcnNjcmlwdFR5cGUudGVzdCggbm9kZS50eXBlIHx8IFwiXCIgKSAmJlxuXHRcdFx0XHRcdFx0IWRhdGFQcml2LmdldCggbm9kZSwgXCJnbG9iYWxFdmFsXCIgKSAmJlxuXHRcdFx0XHRcdFx0alF1ZXJ5LmNvbnRhaW5zKCBkb2MsIG5vZGUgKSApIHtcblxuXHRcdFx0XHRcdFx0aWYgKCBub2RlLnNyYyAmJiAoIG5vZGUudHlwZSB8fCBcIlwiICkudG9Mb3dlckNhc2UoKSAgIT09IFwibW9kdWxlXCIgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gT3B0aW9uYWwgQUpBWCBkZXBlbmRlbmN5LCBidXQgd29uJ3QgcnVuIHNjcmlwdHMgaWYgbm90IHByZXNlbnRcblx0XHRcdFx0XHRcdFx0aWYgKCBqUXVlcnkuX2V2YWxVcmwgJiYgIW5vZGUubm9Nb2R1bGUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5Ll9ldmFsVXJsKCBub2RlLnNyYywge1xuXHRcdFx0XHRcdFx0XHRcdFx0bm9uY2U6IG5vZGUubm9uY2UsXG5cdFx0XHRcdFx0XHRcdFx0XHRjcm9zc09yaWdpbjogbm9kZS5jcm9zc09yaWdpblxuXHRcdFx0XHRcdFx0XHRcdH0sIGRvYyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRET01FdmFsKCBub2RlLnRleHRDb250ZW50LCBub2RlLCBkb2MgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY29sbGVjdGlvbjtcbn1cblxudmFyIHJjaGVja2FibGVUeXBlID0gL14oPzpjaGVja2JveHxyYWRpbykkL2k7XG5cbnZhciBydHlwZW5hbWVzcGFjZSA9IC9eKFteLl0qKSg/OlxcLiguKyl8KS87XG5cbmZ1bmN0aW9uIHJldHVyblRydWUoKSB7XG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZXR1cm5GYWxzZSgpIHtcblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBvbiggZWxlbSwgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiwgb25lICkge1xuXHR2YXIgb3JpZ0ZuLCB0eXBlO1xuXG5cdC8vIFR5cGVzIGNhbiBiZSBhIG1hcCBvZiB0eXBlcy9oYW5kbGVyc1xuXHRpZiAoIHR5cGVvZiB0eXBlcyA9PT0gXCJvYmplY3RcIiApIHtcblxuXHRcdC8vICggdHlwZXMtT2JqZWN0LCBzZWxlY3RvciwgZGF0YSApXG5cdFx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIgKSB7XG5cblx0XHRcdC8vICggdHlwZXMtT2JqZWN0LCBkYXRhIClcblx0XHRcdGRhdGEgPSBkYXRhIHx8IHNlbGVjdG9yO1xuXHRcdFx0c2VsZWN0b3IgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdGZvciAoIHR5cGUgaW4gdHlwZXMgKSB7XG5cdFx0XHRvbiggZWxlbSwgdHlwZSwgc2VsZWN0b3IsIGRhdGEsIHR5cGVzWyB0eXBlIF0sIG9uZSApO1xuXHRcdH1cblx0XHRyZXR1cm4gZWxlbTtcblx0fVxuXG5cdGlmICggZGF0YSA9PSBudWxsICYmIGZuID09IG51bGwgKSB7XG5cblx0XHQvLyAoIHR5cGVzLCBmbiApXG5cdFx0Zm4gPSBzZWxlY3Rvcjtcblx0XHRkYXRhID0gc2VsZWN0b3IgPSB1bmRlZmluZWQ7XG5cdH0gZWxzZSBpZiAoIGZuID09IG51bGwgKSB7XG5cdFx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgKSB7XG5cblx0XHRcdC8vICggdHlwZXMsIHNlbGVjdG9yLCBmbiApXG5cdFx0XHRmbiA9IGRhdGE7XG5cdFx0XHRkYXRhID0gdW5kZWZpbmVkO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vICggdHlwZXMsIGRhdGEsIGZuIClcblx0XHRcdGZuID0gZGF0YTtcblx0XHRcdGRhdGEgPSBzZWxlY3Rvcjtcblx0XHRcdHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0fVxuXHRpZiAoIGZuID09PSBmYWxzZSApIHtcblx0XHRmbiA9IHJldHVybkZhbHNlO1xuXHR9IGVsc2UgaWYgKCAhZm4gKSB7XG5cdFx0cmV0dXJuIGVsZW07XG5cdH1cblxuXHRpZiAoIG9uZSA9PT0gMSApIHtcblx0XHRvcmlnRm4gPSBmbjtcblx0XHRmbiA9IGZ1bmN0aW9uKCBldmVudCApIHtcblxuXHRcdFx0Ly8gQ2FuIHVzZSBhbiBlbXB0eSBzZXQsIHNpbmNlIGV2ZW50IGNvbnRhaW5zIHRoZSBpbmZvXG5cdFx0XHRqUXVlcnkoKS5vZmYoIGV2ZW50ICk7XG5cdFx0XHRyZXR1cm4gb3JpZ0ZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHR9O1xuXG5cdFx0Ly8gVXNlIHNhbWUgZ3VpZCBzbyBjYWxsZXIgY2FuIHJlbW92ZSB1c2luZyBvcmlnRm5cblx0XHRmbi5ndWlkID0gb3JpZ0ZuLmd1aWQgfHwgKCBvcmlnRm4uZ3VpZCA9IGpRdWVyeS5ndWlkKysgKTtcblx0fVxuXHRyZXR1cm4gZWxlbS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRqUXVlcnkuZXZlbnQuYWRkKCB0aGlzLCB0eXBlcywgZm4sIGRhdGEsIHNlbGVjdG9yICk7XG5cdH0gKTtcbn1cblxuLypcbiAqIEhlbHBlciBmdW5jdGlvbnMgZm9yIG1hbmFnaW5nIGV2ZW50cyAtLSBub3QgcGFydCBvZiB0aGUgcHVibGljIGludGVyZmFjZS5cbiAqIFByb3BzIHRvIERlYW4gRWR3YXJkcycgYWRkRXZlbnQgbGlicmFyeSBmb3IgbWFueSBvZiB0aGUgaWRlYXMuXG4gKi9cbmpRdWVyeS5ldmVudCA9IHtcblxuXHRhZGQ6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlcywgaGFuZGxlciwgZGF0YSwgc2VsZWN0b3IgKSB7XG5cblx0XHR2YXIgaGFuZGxlT2JqSW4sIGV2ZW50SGFuZGxlLCB0bXAsXG5cdFx0XHRldmVudHMsIHQsIGhhbmRsZU9iaixcblx0XHRcdHNwZWNpYWwsIGhhbmRsZXJzLCB0eXBlLCBuYW1lc3BhY2VzLCBvcmlnVHlwZSxcblx0XHRcdGVsZW1EYXRhID0gZGF0YVByaXYuZ2V0KCBlbGVtICk7XG5cblx0XHQvLyBPbmx5IGF0dGFjaCBldmVudHMgdG8gb2JqZWN0cyB0aGF0IGFjY2VwdCBkYXRhXG5cdFx0aWYgKCAhYWNjZXB0RGF0YSggZWxlbSApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIENhbGxlciBjYW4gcGFzcyBpbiBhbiBvYmplY3Qgb2YgY3VzdG9tIGRhdGEgaW4gbGlldSBvZiB0aGUgaGFuZGxlclxuXHRcdGlmICggaGFuZGxlci5oYW5kbGVyICkge1xuXHRcdFx0aGFuZGxlT2JqSW4gPSBoYW5kbGVyO1xuXHRcdFx0aGFuZGxlciA9IGhhbmRsZU9iakluLmhhbmRsZXI7XG5cdFx0XHRzZWxlY3RvciA9IGhhbmRsZU9iakluLnNlbGVjdG9yO1xuXHRcdH1cblxuXHRcdC8vIEVuc3VyZSB0aGF0IGludmFsaWQgc2VsZWN0b3JzIHRocm93IGV4Y2VwdGlvbnMgYXQgYXR0YWNoIHRpbWVcblx0XHQvLyBFdmFsdWF0ZSBhZ2FpbnN0IGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGVsZW0gaXMgYSBub24tZWxlbWVudCBub2RlIChlLmcuLCBkb2N1bWVudClcblx0XHRpZiAoIHNlbGVjdG9yICkge1xuXHRcdFx0alF1ZXJ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKCBkb2N1bWVudEVsZW1lbnQkMSwgc2VsZWN0b3IgKTtcblx0XHR9XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhhdCB0aGUgaGFuZGxlciBoYXMgYSB1bmlxdWUgSUQsIHVzZWQgdG8gZmluZC9yZW1vdmUgaXQgbGF0ZXJcblx0XHRpZiAoICFoYW5kbGVyLmd1aWQgKSB7XG5cdFx0XHRoYW5kbGVyLmd1aWQgPSBqUXVlcnkuZ3VpZCsrO1xuXHRcdH1cblxuXHRcdC8vIEluaXQgdGhlIGVsZW1lbnQncyBldmVudCBzdHJ1Y3R1cmUgYW5kIG1haW4gaGFuZGxlciwgaWYgdGhpcyBpcyB0aGUgZmlyc3Rcblx0XHRpZiAoICEoIGV2ZW50cyA9IGVsZW1EYXRhLmV2ZW50cyApICkge1xuXHRcdFx0ZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzID0gT2JqZWN0LmNyZWF0ZSggbnVsbCApO1xuXHRcdH1cblx0XHRpZiAoICEoIGV2ZW50SGFuZGxlID0gZWxlbURhdGEuaGFuZGxlICkgKSB7XG5cdFx0XHRldmVudEhhbmRsZSA9IGVsZW1EYXRhLmhhbmRsZSA9IGZ1bmN0aW9uKCBlICkge1xuXG5cdFx0XHRcdC8vIERpc2NhcmQgdGhlIHNlY29uZCBldmVudCBvZiBhIGpRdWVyeS5ldmVudC50cmlnZ2VyKCkgYW5kXG5cdFx0XHRcdC8vIHdoZW4gYW4gZXZlbnQgaXMgY2FsbGVkIGFmdGVyIGEgcGFnZSBoYXMgdW5sb2FkZWRcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiBqUXVlcnkgIT09IFwidW5kZWZpbmVkXCIgJiYgalF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCAhPT0gZS50eXBlID9cblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQuZGlzcGF0Y2guYXBwbHkoIGVsZW0sIGFyZ3VtZW50cyApIDogdW5kZWZpbmVkO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyBIYW5kbGUgbXVsdGlwbGUgZXZlbnRzIHNlcGFyYXRlZCBieSBhIHNwYWNlXG5cdFx0dHlwZXMgPSAoIHR5cGVzIHx8IFwiXCIgKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFsgXCJcIiBdO1xuXHRcdHQgPSB0eXBlcy5sZW5ndGg7XG5cdFx0d2hpbGUgKCB0LS0gKSB7XG5cdFx0XHR0bXAgPSBydHlwZW5hbWVzcGFjZS5leGVjKCB0eXBlc1sgdCBdICkgfHwgW107XG5cdFx0XHR0eXBlID0gb3JpZ1R5cGUgPSB0bXBbIDEgXTtcblx0XHRcdG5hbWVzcGFjZXMgPSAoIHRtcFsgMiBdIHx8IFwiXCIgKS5zcGxpdCggXCIuXCIgKS5zb3J0KCk7XG5cblx0XHRcdC8vIFRoZXJlICptdXN0KiBiZSBhIHR5cGUsIG5vIGF0dGFjaGluZyBuYW1lc3BhY2Utb25seSBoYW5kbGVyc1xuXHRcdFx0aWYgKCAhdHlwZSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIGV2ZW50IGNoYW5nZXMgaXRzIHR5cGUsIHVzZSB0aGUgc3BlY2lhbCBldmVudCBoYW5kbGVycyBmb3IgdGhlIGNoYW5nZWQgdHlwZVxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XG5cblx0XHRcdC8vIElmIHNlbGVjdG9yIGRlZmluZWQsIGRldGVybWluZSBzcGVjaWFsIGV2ZW50IGFwaSB0eXBlLCBvdGhlcndpc2UgZ2l2ZW4gdHlwZVxuXHRcdFx0dHlwZSA9ICggc2VsZWN0b3IgPyBzcGVjaWFsLmRlbGVnYXRlVHlwZSA6IHNwZWNpYWwuYmluZFR5cGUgKSB8fCB0eXBlO1xuXG5cdFx0XHQvLyBVcGRhdGUgc3BlY2lhbCBiYXNlZCBvbiBuZXdseSByZXNldCB0eXBlXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblxuXHRcdFx0Ly8gaGFuZGxlT2JqIGlzIHBhc3NlZCB0byBhbGwgZXZlbnQgaGFuZGxlcnNcblx0XHRcdGhhbmRsZU9iaiA9IGpRdWVyeS5leHRlbmQoIHtcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0b3JpZ1R5cGU6IG9yaWdUeXBlLFxuXHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHRoYW5kbGVyOiBoYW5kbGVyLFxuXHRcdFx0XHRndWlkOiBoYW5kbGVyLmd1aWQsXG5cdFx0XHRcdHNlbGVjdG9yOiBzZWxlY3Rvcixcblx0XHRcdFx0bmVlZHNDb250ZXh0OiBzZWxlY3RvciAmJiBqUXVlcnkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3IgKSxcblx0XHRcdFx0bmFtZXNwYWNlOiBuYW1lc3BhY2VzLmpvaW4oIFwiLlwiIClcblx0XHRcdH0sIGhhbmRsZU9iakluICk7XG5cblx0XHRcdC8vIEluaXQgdGhlIGV2ZW50IGhhbmRsZXIgcXVldWUgaWYgd2UncmUgdGhlIGZpcnN0XG5cdFx0XHRpZiAoICEoIGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0gKSApIHtcblx0XHRcdFx0aGFuZGxlcnMgPSBldmVudHNbIHR5cGUgXSA9IFtdO1xuXHRcdFx0XHRoYW5kbGVycy5kZWxlZ2F0ZUNvdW50ID0gMDtcblxuXHRcdFx0XHQvLyBPbmx5IHVzZSBhZGRFdmVudExpc3RlbmVyIGlmIHRoZSBzcGVjaWFsIGV2ZW50cyBoYW5kbGVyIHJldHVybnMgZmFsc2Vcblx0XHRcdFx0aWYgKCAhc3BlY2lhbC5zZXR1cCB8fFxuXHRcdFx0XHRcdHNwZWNpYWwuc2V0dXAuY2FsbCggZWxlbSwgZGF0YSwgbmFtZXNwYWNlcywgZXZlbnRIYW5kbGUgKSA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0XHRpZiAoIGVsZW0uYWRkRXZlbnRMaXN0ZW5lciApIHtcblx0XHRcdFx0XHRcdGVsZW0uYWRkRXZlbnRMaXN0ZW5lciggdHlwZSwgZXZlbnRIYW5kbGUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzcGVjaWFsLmFkZCApIHtcblx0XHRcdFx0c3BlY2lhbC5hZGQuY2FsbCggZWxlbSwgaGFuZGxlT2JqICk7XG5cblx0XHRcdFx0aWYgKCAhaGFuZGxlT2JqLmhhbmRsZXIuZ3VpZCApIHtcblx0XHRcdFx0XHRoYW5kbGVPYmouaGFuZGxlci5ndWlkID0gaGFuZGxlci5ndWlkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCB0byB0aGUgZWxlbWVudCdzIGhhbmRsZXIgbGlzdCwgZGVsZWdhdGVzIGluIGZyb250XG5cdFx0XHRpZiAoIHNlbGVjdG9yICkge1xuXHRcdFx0XHRoYW5kbGVycy5zcGxpY2UoIGhhbmRsZXJzLmRlbGVnYXRlQ291bnQrKywgMCwgaGFuZGxlT2JqICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoYW5kbGVycy5wdXNoKCBoYW5kbGVPYmogKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fSxcblxuXHQvLyBEZXRhY2ggYW4gZXZlbnQgb3Igc2V0IG9mIGV2ZW50cyBmcm9tIGFuIGVsZW1lbnRcblx0cmVtb3ZlOiBmdW5jdGlvbiggZWxlbSwgdHlwZXMsIGhhbmRsZXIsIHNlbGVjdG9yLCBtYXBwZWRUeXBlcyApIHtcblxuXHRcdHZhciBqLCBvcmlnQ291bnQsIHRtcCxcblx0XHRcdGV2ZW50cywgdCwgaGFuZGxlT2JqLFxuXHRcdFx0c3BlY2lhbCwgaGFuZGxlcnMsIHR5cGUsIG5hbWVzcGFjZXMsIG9yaWdUeXBlLFxuXHRcdFx0ZWxlbURhdGEgPSBkYXRhUHJpdi5oYXNEYXRhKCBlbGVtICkgJiYgZGF0YVByaXYuZ2V0KCBlbGVtICk7XG5cblx0XHRpZiAoICFlbGVtRGF0YSB8fCAhKCBldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBPbmNlIGZvciBlYWNoIHR5cGUubmFtZXNwYWNlIGluIHR5cGVzOyB0eXBlIG1heSBiZSBvbWl0dGVkXG5cdFx0dHlwZXMgPSAoIHR5cGVzIHx8IFwiXCIgKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFsgXCJcIiBdO1xuXHRcdHQgPSB0eXBlcy5sZW5ndGg7XG5cdFx0d2hpbGUgKCB0LS0gKSB7XG5cdFx0XHR0bXAgPSBydHlwZW5hbWVzcGFjZS5leGVjKCB0eXBlc1sgdCBdICkgfHwgW107XG5cdFx0XHR0eXBlID0gb3JpZ1R5cGUgPSB0bXBbIDEgXTtcblx0XHRcdG5hbWVzcGFjZXMgPSAoIHRtcFsgMiBdIHx8IFwiXCIgKS5zcGxpdCggXCIuXCIgKS5zb3J0KCk7XG5cblx0XHRcdC8vIFVuYmluZCBhbGwgZXZlbnRzIChvbiB0aGlzIG5hbWVzcGFjZSwgaWYgcHJvdmlkZWQpIGZvciB0aGUgZWxlbWVudFxuXHRcdFx0aWYgKCAhdHlwZSApIHtcblx0XHRcdFx0Zm9yICggdHlwZSBpbiBldmVudHMgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnJlbW92ZSggZWxlbSwgdHlwZSArIHR5cGVzWyB0IF0sIGhhbmRsZXIsIHNlbGVjdG9yLCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9O1xuXHRcdFx0dHlwZSA9ICggc2VsZWN0b3IgPyBzcGVjaWFsLmRlbGVnYXRlVHlwZSA6IHNwZWNpYWwuYmluZFR5cGUgKSB8fCB0eXBlO1xuXHRcdFx0aGFuZGxlcnMgPSBldmVudHNbIHR5cGUgXSB8fCBbXTtcblx0XHRcdHRtcCA9IHRtcFsgMiBdICYmXG5cdFx0XHRcdG5ldyBSZWdFeHAoIFwiKF58XFxcXC4pXCIgKyBuYW1lc3BhY2VzLmpvaW4oIFwiXFxcXC4oPzouKlxcXFwufClcIiApICsgXCIoXFxcXC58JClcIiApO1xuXG5cdFx0XHQvLyBSZW1vdmUgbWF0Y2hpbmcgZXZlbnRzXG5cdFx0XHRvcmlnQ291bnQgPSBqID0gaGFuZGxlcnMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKCBqLS0gKSB7XG5cdFx0XHRcdGhhbmRsZU9iaiA9IGhhbmRsZXJzWyBqIF07XG5cblx0XHRcdFx0aWYgKCAoIG1hcHBlZFR5cGVzIHx8IG9yaWdUeXBlID09PSBoYW5kbGVPYmoub3JpZ1R5cGUgKSAmJlxuXHRcdFx0XHRcdCggIWhhbmRsZXIgfHwgaGFuZGxlci5ndWlkID09PSBoYW5kbGVPYmouZ3VpZCApICYmXG5cdFx0XHRcdFx0KCAhdG1wIHx8IHRtcC50ZXN0KCBoYW5kbGVPYmoubmFtZXNwYWNlICkgKSAmJlxuXHRcdFx0XHRcdCggIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSBoYW5kbGVPYmouc2VsZWN0b3IgfHxcblx0XHRcdFx0XHRcdHNlbGVjdG9yID09PSBcIioqXCIgJiYgaGFuZGxlT2JqLnNlbGVjdG9yICkgKSB7XG5cdFx0XHRcdFx0aGFuZGxlcnMuc3BsaWNlKCBqLCAxICk7XG5cblx0XHRcdFx0XHRpZiAoIGhhbmRsZU9iai5zZWxlY3RvciApIHtcblx0XHRcdFx0XHRcdGhhbmRsZXJzLmRlbGVnYXRlQ291bnQtLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBzcGVjaWFsLnJlbW92ZSApIHtcblx0XHRcdFx0XHRcdHNwZWNpYWwucmVtb3ZlLmNhbGwoIGVsZW0sIGhhbmRsZU9iaiApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZW1vdmUgZ2VuZXJpYyBldmVudCBoYW5kbGVyIGlmIHdlIHJlbW92ZWQgc29tZXRoaW5nIGFuZCBubyBtb3JlIGhhbmRsZXJzIGV4aXN0XG5cdFx0XHQvLyAoYXZvaWRzIHBvdGVudGlhbCBmb3IgZW5kbGVzcyByZWN1cnNpb24gZHVyaW5nIHJlbW92YWwgb2Ygc3BlY2lhbCBldmVudCBoYW5kbGVycylcblx0XHRcdGlmICggb3JpZ0NvdW50ICYmICFoYW5kbGVycy5sZW5ndGggKSB7XG5cdFx0XHRcdGlmICggIXNwZWNpYWwudGVhcmRvd24gfHxcblx0XHRcdFx0XHRzcGVjaWFsLnRlYXJkb3duLmNhbGwoIGVsZW0sIG5hbWVzcGFjZXMsIGVsZW1EYXRhLmhhbmRsZSApID09PSBmYWxzZSApIHtcblxuXHRcdFx0XHRcdGpRdWVyeS5yZW1vdmVFdmVudCggZWxlbSwgdHlwZSwgZWxlbURhdGEuaGFuZGxlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkZWxldGUgZXZlbnRzWyB0eXBlIF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIGRhdGEgYW5kIHRoZSBleHBhbmRvIGlmIGl0J3Mgbm8gbG9uZ2VyIHVzZWRcblx0XHRpZiAoIGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBldmVudHMgKSApIHtcblx0XHRcdGRhdGFQcml2LnJlbW92ZSggZWxlbSwgXCJoYW5kbGUgZXZlbnRzXCIgKTtcblx0XHR9XG5cdH0sXG5cblx0ZGlzcGF0Y2g6IGZ1bmN0aW9uKCBuYXRpdmVFdmVudCApIHtcblxuXHRcdHZhciBpLCBqLCByZXQsIG1hdGNoZWQsIGhhbmRsZU9iaiwgaGFuZGxlclF1ZXVlLFxuXHRcdFx0YXJncyA9IG5ldyBBcnJheSggYXJndW1lbnRzLmxlbmd0aCApLFxuXG5cdFx0XHQvLyBNYWtlIGEgd3JpdGFibGUgalF1ZXJ5LkV2ZW50IGZyb20gdGhlIG5hdGl2ZSBldmVudCBvYmplY3Rcblx0XHRcdGV2ZW50ID0galF1ZXJ5LmV2ZW50LmZpeCggbmF0aXZlRXZlbnQgKSxcblxuXHRcdFx0aGFuZGxlcnMgPSAoXG5cdFx0XHRcdGRhdGFQcml2LmdldCggdGhpcywgXCJldmVudHNcIiApIHx8IE9iamVjdC5jcmVhdGUoIG51bGwgKVxuXHRcdFx0KVsgZXZlbnQudHlwZSBdIHx8IFtdLFxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyBldmVudC50eXBlIF0gfHwge307XG5cblx0XHQvLyBVc2UgdGhlIGZpeC1lZCBqUXVlcnkuRXZlbnQgcmF0aGVyIHRoYW4gdGhlIChyZWFkLW9ubHkpIG5hdGl2ZSBldmVudFxuXHRcdGFyZ3NbIDAgXSA9IGV2ZW50O1xuXG5cdFx0Zm9yICggaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRhcmdzWyBpIF0gPSBhcmd1bWVudHNbIGkgXTtcblx0XHR9XG5cblx0XHRldmVudC5kZWxlZ2F0ZVRhcmdldCA9IHRoaXM7XG5cblx0XHQvLyBDYWxsIHRoZSBwcmVEaXNwYXRjaCBob29rIGZvciB0aGUgbWFwcGVkIHR5cGUsIGFuZCBsZXQgaXQgYmFpbCBpZiBkZXNpcmVkXG5cdFx0aWYgKCBzcGVjaWFsLnByZURpc3BhdGNoICYmIHNwZWNpYWwucHJlRGlzcGF0Y2guY2FsbCggdGhpcywgZXZlbnQgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZXJtaW5lIGhhbmRsZXJzXG5cdFx0aGFuZGxlclF1ZXVlID0galF1ZXJ5LmV2ZW50LmhhbmRsZXJzLmNhbGwoIHRoaXMsIGV2ZW50LCBoYW5kbGVycyApO1xuXG5cdFx0Ly8gUnVuIGRlbGVnYXRlcyBmaXJzdDsgdGhleSBtYXkgd2FudCB0byBzdG9wIHByb3BhZ2F0aW9uIGJlbmVhdGggdXNcblx0XHRpID0gMDtcblx0XHR3aGlsZSAoICggbWF0Y2hlZCA9IGhhbmRsZXJRdWV1ZVsgaSsrIF0gKSAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblx0XHRcdGV2ZW50LmN1cnJlbnRUYXJnZXQgPSBtYXRjaGVkLmVsZW07XG5cblx0XHRcdGogPSAwO1xuXHRcdFx0d2hpbGUgKCAoIGhhbmRsZU9iaiA9IG1hdGNoZWQuaGFuZGxlcnNbIGorKyBdICkgJiZcblx0XHRcdFx0IWV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGV2ZW50IGlzIG5hbWVzcGFjZWQsIHRoZW4gZWFjaCBoYW5kbGVyIGlzIG9ubHkgaW52b2tlZCBpZiBpdCBpc1xuXHRcdFx0XHQvLyBzcGVjaWFsbHkgdW5pdmVyc2FsIG9yIGl0cyBuYW1lc3BhY2VzIGFyZSBhIHN1cGVyc2V0IG9mIHRoZSBldmVudCdzLlxuXHRcdFx0XHRpZiAoICFldmVudC5ybmFtZXNwYWNlIHx8IGhhbmRsZU9iai5uYW1lc3BhY2UgPT09IGZhbHNlIHx8XG5cdFx0XHRcdFx0ZXZlbnQucm5hbWVzcGFjZS50ZXN0KCBoYW5kbGVPYmoubmFtZXNwYWNlICkgKSB7XG5cblx0XHRcdFx0XHRldmVudC5oYW5kbGVPYmogPSBoYW5kbGVPYmo7XG5cdFx0XHRcdFx0ZXZlbnQuZGF0YSA9IGhhbmRsZU9iai5kYXRhO1xuXG5cdFx0XHRcdFx0cmV0ID0gKCAoIGpRdWVyeS5ldmVudC5zcGVjaWFsWyBoYW5kbGVPYmoub3JpZ1R5cGUgXSB8fCB7fSApLmhhbmRsZSB8fFxuXHRcdFx0XHRcdFx0aGFuZGxlT2JqLmhhbmRsZXIgKS5hcHBseSggbWF0Y2hlZC5lbGVtLCBhcmdzICk7XG5cblx0XHRcdFx0XHRpZiAoIHJldCAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoIGV2ZW50LnJlc3VsdCA9IHJldCApID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsbCB0aGUgcG9zdERpc3BhdGNoIGhvb2sgZm9yIHRoZSBtYXBwZWQgdHlwZVxuXHRcdGlmICggc3BlY2lhbC5wb3N0RGlzcGF0Y2ggKSB7XG5cdFx0XHRzcGVjaWFsLnBvc3REaXNwYXRjaC5jYWxsKCB0aGlzLCBldmVudCApO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmVudC5yZXN1bHQ7XG5cdH0sXG5cblx0aGFuZGxlcnM6IGZ1bmN0aW9uKCBldmVudCwgaGFuZGxlcnMgKSB7XG5cdFx0dmFyIGksIGhhbmRsZU9iaiwgc2VsLCBtYXRjaGVkSGFuZGxlcnMsIG1hdGNoZWRTZWxlY3RvcnMsXG5cdFx0XHRoYW5kbGVyUXVldWUgPSBbXSxcblx0XHRcdGRlbGVnYXRlQ291bnQgPSBoYW5kbGVycy5kZWxlZ2F0ZUNvdW50LFxuXHRcdFx0Y3VyID0gZXZlbnQudGFyZ2V0O1xuXG5cdFx0Ly8gRmluZCBkZWxlZ2F0ZSBoYW5kbGVyc1xuXHRcdGlmICggZGVsZWdhdGVDb3VudCAmJlxuXG5cdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDw9NDIgLSA2Nitcblx0XHRcdC8vIFN1cHByZXNzIHNwZWMtdmlvbGF0aW5nIGNsaWNrcyBpbmRpY2F0aW5nIGEgbm9uLXByaW1hcnkgcG9pbnRlciBidXR0b24gKHRyYWMtMzg2MSlcblx0XHRcdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvI2V2ZW50LXR5cGUtY2xpY2tcblx0XHRcdC8vIFN1cHBvcnQ6IElFIDExK1xuXHRcdFx0Ly8gLi4uYnV0IG5vdCBhcnJvdyBrZXkgXCJjbGlja3NcIiBvZiByYWRpbyBpbnB1dHMsIHdoaWNoIGNhbiBoYXZlIGBidXR0b25gIC0xIChnaC0yMzQzKVxuXHRcdFx0ISggZXZlbnQudHlwZSA9PT0gXCJjbGlja1wiICYmIGV2ZW50LmJ1dHRvbiA+PSAxICkgKSB7XG5cblx0XHRcdGZvciAoIDsgY3VyICE9PSB0aGlzOyBjdXIgPSBjdXIucGFyZW50Tm9kZSB8fCB0aGlzICkge1xuXG5cdFx0XHRcdC8vIERvbid0IGNoZWNrIG5vbi1lbGVtZW50cyAodHJhYy0xMzIwOClcblx0XHRcdFx0Ly8gRG9uJ3QgcHJvY2VzcyBjbGlja3Mgb24gZGlzYWJsZWQgZWxlbWVudHMgKHRyYWMtNjkxMSwgdHJhYy04MTY1LCB0cmFjLTExMzgyLCB0cmFjLTExNzY0KVxuXHRcdFx0XHRpZiAoIGN1ci5ub2RlVHlwZSA9PT0gMSAmJiAhKCBldmVudC50eXBlID09PSBcImNsaWNrXCIgJiYgY3VyLmRpc2FibGVkID09PSB0cnVlICkgKSB7XG5cdFx0XHRcdFx0bWF0Y2hlZEhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0bWF0Y2hlZFNlbGVjdG9ycyA9IHt9O1xuXHRcdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgZGVsZWdhdGVDb3VudDsgaSsrICkge1xuXHRcdFx0XHRcdFx0aGFuZGxlT2JqID0gaGFuZGxlcnNbIGkgXTtcblxuXHRcdFx0XHRcdFx0Ly8gRG9uJ3QgY29uZmxpY3Qgd2l0aCBPYmplY3QucHJvdG90eXBlIHByb3BlcnRpZXMgKHRyYWMtMTMyMDMpXG5cdFx0XHRcdFx0XHRzZWwgPSBoYW5kbGVPYmouc2VsZWN0b3IgKyBcIiBcIjtcblxuXHRcdFx0XHRcdFx0aWYgKCBtYXRjaGVkU2VsZWN0b3JzWyBzZWwgXSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0XHRtYXRjaGVkU2VsZWN0b3JzWyBzZWwgXSA9IGhhbmRsZU9iai5uZWVkc0NvbnRleHQgP1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggc2VsLCB0aGlzICkuaW5kZXgoIGN1ciApID4gLTEgOlxuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5maW5kKCBzZWwsIHRoaXMsIG51bGwsIFsgY3VyIF0gKS5sZW5ndGg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZWRTZWxlY3RvcnNbIHNlbCBdICkge1xuXHRcdFx0XHRcdFx0XHRtYXRjaGVkSGFuZGxlcnMucHVzaCggaGFuZGxlT2JqICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggbWF0Y2hlZEhhbmRsZXJzLmxlbmd0aCApIHtcblx0XHRcdFx0XHRcdGhhbmRsZXJRdWV1ZS5wdXNoKCB7IGVsZW06IGN1ciwgaGFuZGxlcnM6IG1hdGNoZWRIYW5kbGVycyB9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQWRkIHRoZSByZW1haW5pbmcgKGRpcmVjdGx5LWJvdW5kKSBoYW5kbGVyc1xuXHRcdGN1ciA9IHRoaXM7XG5cdFx0aWYgKCBkZWxlZ2F0ZUNvdW50IDwgaGFuZGxlcnMubGVuZ3RoICkge1xuXHRcdFx0aGFuZGxlclF1ZXVlLnB1c2goIHsgZWxlbTogY3VyLCBoYW5kbGVyczogaGFuZGxlcnMuc2xpY2UoIGRlbGVnYXRlQ291bnQgKSB9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGhhbmRsZXJRdWV1ZTtcblx0fSxcblxuXHRhZGRQcm9wOiBmdW5jdGlvbiggbmFtZSwgaG9vayApIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIGpRdWVyeS5FdmVudC5wcm90b3R5cGUsIG5hbWUsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cblx0XHRcdGdldDogdHlwZW9mIGhvb2sgPT09IFwiZnVuY3Rpb25cIiA/XG5cdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5vcmlnaW5hbEV2ZW50ICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGhvb2soIHRoaXMub3JpZ2luYWxFdmVudCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSA6XG5cdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5vcmlnaW5hbEV2ZW50ICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFsgbmFtZSBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGhpcywgbmFtZSwge1xuXHRcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGZpeDogZnVuY3Rpb24oIG9yaWdpbmFsRXZlbnQgKSB7XG5cdFx0cmV0dXJuIG9yaWdpbmFsRXZlbnRbIGpRdWVyeS5leHBhbmRvIF0gP1xuXHRcdFx0b3JpZ2luYWxFdmVudCA6XG5cdFx0XHRuZXcgalF1ZXJ5LkV2ZW50KCBvcmlnaW5hbEV2ZW50ICk7XG5cdH0sXG5cblx0c3BlY2lhbDogalF1ZXJ5LmV4dGVuZCggT2JqZWN0LmNyZWF0ZSggbnVsbCApLCB7XG5cdFx0bG9hZDoge1xuXG5cdFx0XHQvLyBQcmV2ZW50IHRyaWdnZXJlZCBpbWFnZS5sb2FkIGV2ZW50cyBmcm9tIGJ1YmJsaW5nIHRvIHdpbmRvdy5sb2FkXG5cdFx0XHRub0J1YmJsZTogdHJ1ZVxuXHRcdH0sXG5cdFx0Y2xpY2s6IHtcblxuXHRcdFx0Ly8gVXRpbGl6ZSBuYXRpdmUgZXZlbnQgdG8gZW5zdXJlIGNvcnJlY3Qgc3RhdGUgZm9yIGNoZWNrYWJsZSBpbnB1dHNcblx0XHRcdHNldHVwOiBmdW5jdGlvbiggZGF0YSApIHtcblxuXHRcdFx0XHQvLyBGb3IgbXV0dWFsIGNvbXByZXNzaWJpbGl0eSB3aXRoIF9kZWZhdWx0LCByZXBsYWNlIGB0aGlzYCBhY2Nlc3Mgd2l0aCBhIGxvY2FsIHZhci5cblx0XHRcdFx0Ly8gYHx8IGRhdGFgIGlzIGRlYWQgY29kZSBtZWFudCBvbmx5IHRvIHByZXNlcnZlIHRoZSB2YXJpYWJsZSB0aHJvdWdoIG1pbmlmaWNhdGlvbi5cblx0XHRcdFx0dmFyIGVsID0gdGhpcyB8fCBkYXRhO1xuXG5cdFx0XHRcdC8vIENsYWltIHRoZSBmaXJzdCBoYW5kbGVyXG5cdFx0XHRcdGlmICggcmNoZWNrYWJsZVR5cGUudGVzdCggZWwudHlwZSApICYmXG5cdFx0XHRcdFx0ZWwuY2xpY2sgJiYgbm9kZU5hbWUoIGVsLCBcImlucHV0XCIgKSApIHtcblxuXHRcdFx0XHRcdC8vIGRhdGFQcml2LnNldCggZWwsIFwiY2xpY2tcIiwgLi4uIClcblx0XHRcdFx0XHRsZXZlcmFnZU5hdGl2ZSggZWwsIFwiY2xpY2tcIiwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmV0dXJuIGZhbHNlIHRvIGFsbG93IG5vcm1hbCBwcm9jZXNzaW5nIGluIHRoZSBjYWxsZXJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSxcblx0XHRcdHRyaWdnZXI6IGZ1bmN0aW9uKCBkYXRhICkge1xuXG5cdFx0XHRcdC8vIEZvciBtdXR1YWwgY29tcHJlc3NpYmlsaXR5IHdpdGggX2RlZmF1bHQsIHJlcGxhY2UgYHRoaXNgIGFjY2VzcyB3aXRoIGEgbG9jYWwgdmFyLlxuXHRcdFx0XHQvLyBgfHwgZGF0YWAgaXMgZGVhZCBjb2RlIG1lYW50IG9ubHkgdG8gcHJlc2VydmUgdGhlIHZhcmlhYmxlIHRocm91Z2ggbWluaWZpY2F0aW9uLlxuXHRcdFx0XHR2YXIgZWwgPSB0aGlzIHx8IGRhdGE7XG5cblx0XHRcdFx0Ly8gRm9yY2Ugc2V0dXAgYmVmb3JlIHRyaWdnZXJpbmcgYSBjbGlja1xuXHRcdFx0XHRpZiAoIHJjaGVja2FibGVUeXBlLnRlc3QoIGVsLnR5cGUgKSAmJlxuXHRcdFx0XHRcdGVsLmNsaWNrICYmIG5vZGVOYW1lKCBlbCwgXCJpbnB1dFwiICkgKSB7XG5cblx0XHRcdFx0XHRsZXZlcmFnZU5hdGl2ZSggZWwsIFwiY2xpY2tcIiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmV0dXJuIG5vbi1mYWxzZSB0byBhbGxvdyBub3JtYWwgZXZlbnQtcGF0aCBwcm9wYWdhdGlvblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0sXG5cblx0XHRcdC8vIEZvciBjcm9zcy1icm93c2VyIGNvbnNpc3RlbmN5LCBzdXBwcmVzcyBuYXRpdmUgLmNsaWNrKCkgb24gbGlua3Ncblx0XHRcdC8vIEFsc28gcHJldmVudCBpdCBpZiB3ZSdyZSBjdXJyZW50bHkgaW5zaWRlIGEgbGV2ZXJhZ2VkIG5hdGl2ZS1ldmVudCBzdGFja1xuXHRcdFx0X2RlZmF1bHQ6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0dmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0XHRcdFx0cmV0dXJuIHJjaGVja2FibGVUeXBlLnRlc3QoIHRhcmdldC50eXBlICkgJiZcblx0XHRcdFx0XHR0YXJnZXQuY2xpY2sgJiYgbm9kZU5hbWUoIHRhcmdldCwgXCJpbnB1dFwiICkgJiZcblx0XHRcdFx0XHRkYXRhUHJpdi5nZXQoIHRhcmdldCwgXCJjbGlja1wiICkgfHxcblx0XHRcdFx0XHRub2RlTmFtZSggdGFyZ2V0LCBcImFcIiApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRiZWZvcmV1bmxvYWQ6IHtcblx0XHRcdHBvc3REaXNwYXRjaDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTczK1xuXHRcdFx0XHQvLyBDaHJvbWUgZG9lc24ndCBhbGVydCBvbiBgZXZlbnQucHJldmVudERlZmF1bHQoKWBcblx0XHRcdFx0Ly8gYXMgdGhlIHN0YW5kYXJkIG1hbmRhdGVzLlxuXHRcdFx0XHRpZiAoIGV2ZW50LnJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQgKSB7XG5cdFx0XHRcdFx0ZXZlbnQub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZSA9IGV2ZW50LnJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSApXG59O1xuXG4vLyBFbnN1cmUgdGhlIHByZXNlbmNlIG9mIGFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgaGFuZGxlcyBtYW51YWxseS10cmlnZ2VyZWRcbi8vIHN5bnRoZXRpYyBldmVudHMgYnkgaW50ZXJydXB0aW5nIHByb2dyZXNzIHVudGlsIHJlaW52b2tlZCBpbiByZXNwb25zZSB0b1xuLy8gKm5hdGl2ZSogZXZlbnRzIHRoYXQgaXQgZmlyZXMgZGlyZWN0bHksIGVuc3VyaW5nIHRoYXQgc3RhdGUgY2hhbmdlcyBoYXZlXG4vLyBhbHJlYWR5IG9jY3VycmVkIGJlZm9yZSBvdGhlciBsaXN0ZW5lcnMgYXJlIGludm9rZWQuXG5mdW5jdGlvbiBsZXZlcmFnZU5hdGl2ZSggZWwsIHR5cGUsIGlzU2V0dXAgKSB7XG5cblx0Ly8gTWlzc2luZyBgaXNTZXR1cGAgaW5kaWNhdGVzIGEgdHJpZ2dlciBjYWxsLCB3aGljaCBtdXN0IGZvcmNlIHNldHVwIHRocm91Z2ggalF1ZXJ5LmV2ZW50LmFkZFxuXHRpZiAoICFpc1NldHVwICkge1xuXHRcdGlmICggZGF0YVByaXYuZ2V0KCBlbCwgdHlwZSApID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRqUXVlcnkuZXZlbnQuYWRkKCBlbCwgdHlwZSwgcmV0dXJuVHJ1ZSApO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBSZWdpc3RlciB0aGUgY29udHJvbGxlciBhcyBhIHNwZWNpYWwgdW5pdmVyc2FsIGhhbmRsZXIgZm9yIGFsbCBldmVudCBuYW1lc3BhY2VzXG5cdGRhdGFQcml2LnNldCggZWwsIHR5cGUsIGZhbHNlICk7XG5cdGpRdWVyeS5ldmVudC5hZGQoIGVsLCB0eXBlLCB7XG5cdFx0bmFtZXNwYWNlOiBmYWxzZSxcblx0XHRoYW5kbGVyOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHR2YXIgcmVzdWx0LFxuXHRcdFx0XHRzYXZlZCA9IGRhdGFQcml2LmdldCggdGhpcywgdHlwZSApO1xuXG5cdFx0XHQvLyBUaGlzIGNvbnRyb2xsZXIgZnVuY3Rpb24gaXMgaW52b2tlZCB1bmRlciBtdWx0aXBsZSBjaXJjdW1zdGFuY2VzLFxuXHRcdFx0Ly8gZGlmZmVyZW50aWF0ZWQgYnkgdGhlIHN0b3JlZCB2YWx1ZSBpbiBgc2F2ZWRgOlxuXHRcdFx0Ly8gMS4gRm9yIGFuIG91dGVyIHN5bnRoZXRpYyBgLnRyaWdnZXIoKWBlZCBldmVudCAoZGV0ZWN0ZWQgYnlcblx0XHRcdC8vICAgIGBldmVudC5pc1RyaWdnZXIgJiAxYCBhbmQgbm9uLWFycmF5IGBzYXZlZGApLCBpdCByZWNvcmRzIGFyZ3VtZW50c1xuXHRcdFx0Ly8gICAgYXMgYW4gYXJyYXkgYW5kIGZpcmVzIGFuIFtpbm5lcl0gbmF0aXZlIGV2ZW50IHRvIHByb21wdCBzdGF0ZVxuXHRcdFx0Ly8gICAgY2hhbmdlcyB0aGF0IHNob3VsZCBiZSBvYnNlcnZlZCBieSByZWdpc3RlcmVkIGxpc3RlbmVycyAoc3VjaCBhc1xuXHRcdFx0Ly8gICAgY2hlY2tib3ggdG9nZ2xpbmcgYW5kIGZvY3VzIHVwZGF0aW5nKSwgdGhlbiBjbGVhcnMgdGhlIHN0b3JlZCB2YWx1ZS5cblx0XHRcdC8vIDIuIEZvciBhbiBbaW5uZXJdIG5hdGl2ZSBldmVudCAoZGV0ZWN0ZWQgYnkgYHNhdmVkYCBiZWluZ1xuXHRcdFx0Ly8gICAgYW4gYXJyYXkpLCBpdCB0cmlnZ2VycyBhbiBpbm5lciBzeW50aGV0aWMgZXZlbnQsIHJlY29yZHMgdGhlXG5cdFx0XHQvLyAgICByZXN1bHQsIGFuZCBwcmVlbXB0cyBwcm9wYWdhdGlvbiB0byBmdXJ0aGVyIGpRdWVyeSBsaXN0ZW5lcnMuXG5cdFx0XHQvLyAzLiBGb3IgYW4gaW5uZXIgc3ludGhldGljIGV2ZW50IChkZXRlY3RlZCBieSBgZXZlbnQuaXNUcmlnZ2VyICYgMWAgYW5kXG5cdFx0XHQvLyAgICBhcnJheSBgc2F2ZWRgKSwgaXQgcHJldmVudHMgZG91YmxlLXByb3BhZ2F0aW9uIG9mIHN1cnJvZ2F0ZSBldmVudHNcblx0XHRcdC8vICAgIGJ1dCBvdGhlcndpc2UgYWxsb3dzIGV2ZXJ5dGhpbmcgdG8gcHJvY2VlZCAocGFydGljdWxhcmx5IGluY2x1ZGluZ1xuXHRcdFx0Ly8gICAgZnVydGhlciBsaXN0ZW5lcnMpLlxuXHRcdFx0Ly8gUG9zc2libGUgYHNhdmVkYCBkYXRhIHNoYXBlczogYFsuLi5dLCBgeyB2YWx1ZSB9YCwgYGZhbHNlYC5cblx0XHRcdGlmICggKCBldmVudC5pc1RyaWdnZXIgJiAxICkgJiYgdGhpc1sgdHlwZSBdICkge1xuXG5cdFx0XHRcdC8vIEludGVycnVwdCBwcm9jZXNzaW5nIG9mIHRoZSBvdXRlciBzeW50aGV0aWMgLnRyaWdnZXIoKWVkIGV2ZW50XG5cdFx0XHRcdGlmICggIXNhdmVkLmxlbmd0aCApIHtcblxuXHRcdFx0XHRcdC8vIFN0b3JlIGFyZ3VtZW50cyBmb3IgdXNlIHdoZW4gaGFuZGxpbmcgdGhlIGlubmVyIG5hdGl2ZSBldmVudFxuXHRcdFx0XHRcdC8vIFRoZXJlIHdpbGwgYWx3YXlzIGJlIGF0IGxlYXN0IG9uZSBhcmd1bWVudCAoYW4gZXZlbnQgb2JqZWN0KSxcblx0XHRcdFx0XHQvLyBzbyB0aGlzIGFycmF5IHdpbGwgbm90IGJlIGNvbmZ1c2VkIHdpdGggYSBsZWZ0b3ZlciBjYXB0dXJlIG9iamVjdC5cblx0XHRcdFx0XHRzYXZlZCA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRcdGRhdGFQcml2LnNldCggdGhpcywgdHlwZSwgc2F2ZWQgKTtcblxuXHRcdFx0XHRcdC8vIFRyaWdnZXIgdGhlIG5hdGl2ZSBldmVudCBhbmQgY2FwdHVyZSBpdHMgcmVzdWx0XG5cdFx0XHRcdFx0dGhpc1sgdHlwZSBdKCk7XG5cdFx0XHRcdFx0cmVzdWx0ID0gZGF0YVByaXYuZ2V0KCB0aGlzLCB0eXBlICk7XG5cdFx0XHRcdFx0ZGF0YVByaXYuc2V0KCB0aGlzLCB0eXBlLCBmYWxzZSApO1xuXG5cdFx0XHRcdFx0aWYgKCBzYXZlZCAhPT0gcmVzdWx0ICkge1xuXG5cdFx0XHRcdFx0XHQvLyBDYW5jZWwgdGhlIG91dGVyIHN5bnRoZXRpYyBldmVudFxuXHRcdFx0XHRcdFx0ZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBDaHJvbWUgODYrXG5cdFx0XHRcdFx0XHQvLyBJbiBDaHJvbWUsIGlmIGFuIGVsZW1lbnQgaGF2aW5nIGEgZm9jdXNvdXQgaGFuZGxlciBpc1xuXHRcdFx0XHRcdFx0Ly8gYmx1cnJlZCBieSBjbGlja2luZyBvdXRzaWRlIG9mIGl0LCBpdCBpbnZva2VzIHRoZSBoYW5kbGVyXG5cdFx0XHRcdFx0XHQvLyBzeW5jaHJvbm91c2x5LiBJZiB0aGF0IGhhbmRsZXIgY2FsbHMgYC5yZW1vdmUoKWAgb25cblx0XHRcdFx0XHRcdC8vIHRoZSBlbGVtZW50LCB0aGUgZGF0YSBpcyBjbGVhcmVkLCBsZWF2aW5nIGByZXN1bHRgXG5cdFx0XHRcdFx0XHQvLyB1bmRlZmluZWQuIFdlIG5lZWQgdG8gZ3VhcmQgYWdhaW5zdCB0aGlzLlxuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdCAmJiByZXN1bHQudmFsdWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoaXMgaXMgYW4gaW5uZXIgc3ludGhldGljIGV2ZW50IGZvciBhbiBldmVudCB3aXRoIGEgYnViYmxpbmdcblx0XHRcdFx0Ly8gc3Vycm9nYXRlIChmb2N1cyBvciBibHVyKSwgYXNzdW1lIHRoYXQgdGhlIHN1cnJvZ2F0ZSBhbHJlYWR5XG5cdFx0XHRcdC8vIHByb3BhZ2F0ZWQgZnJvbSB0cmlnZ2VyaW5nIHRoZSBuYXRpdmUgZXZlbnQgYW5kIHByZXZlbnQgdGhhdFxuXHRcdFx0XHQvLyBmcm9tIGhhcHBlbmluZyBhZ2FpbiBoZXJlLlxuXHRcdFx0XHR9IGVsc2UgaWYgKCAoIGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge30gKS5kZWxlZ2F0ZVR5cGUgKSB7XG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhpcyBpcyBhIG5hdGl2ZSBldmVudCB0cmlnZ2VyZWQgYWJvdmUsIGV2ZXJ5dGhpbmcgaXMgbm93IGluIG9yZGVyLlxuXHRcdFx0Ly8gRmlyZSBhbiBpbm5lciBzeW50aGV0aWMgZXZlbnQgd2l0aCB0aGUgb3JpZ2luYWwgYXJndW1lbnRzLlxuXHRcdFx0fSBlbHNlIGlmICggc2F2ZWQubGVuZ3RoICkge1xuXG5cdFx0XHRcdC8vIC4uLmFuZCBjYXB0dXJlIHRoZSByZXN1bHRcblx0XHRcdFx0ZGF0YVByaXYuc2V0KCB0aGlzLCB0eXBlLCB7XG5cdFx0XHRcdFx0dmFsdWU6IGpRdWVyeS5ldmVudC50cmlnZ2VyKFxuXHRcdFx0XHRcdFx0c2F2ZWRbIDAgXSxcblx0XHRcdFx0XHRcdHNhdmVkLnNsaWNlKCAxICksXG5cdFx0XHRcdFx0XHR0aGlzXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0Ly8gQWJvcnQgaGFuZGxpbmcgb2YgdGhlIG5hdGl2ZSBldmVudCBieSBhbGwgalF1ZXJ5IGhhbmRsZXJzIHdoaWxlIGFsbG93aW5nXG5cdFx0XHRcdC8vIG5hdGl2ZSBoYW5kbGVycyBvbiB0aGUgc2FtZSBlbGVtZW50IHRvIHJ1bi4gT24gdGFyZ2V0LCB0aGlzIGlzIGFjaGlldmVkXG5cdFx0XHRcdC8vIGJ5IHN0b3BwaW5nIGltbWVkaWF0ZSBwcm9wYWdhdGlvbiBqdXN0IG9uIHRoZSBqUXVlcnkgZXZlbnQuIEhvd2V2ZXIsXG5cdFx0XHRcdC8vIHRoZSBuYXRpdmUgZXZlbnQgaXMgcmUtd3JhcHBlZCBieSBhIGpRdWVyeSBvbmUgb24gZWFjaCBsZXZlbCBvZiB0aGVcblx0XHRcdFx0Ly8gcHJvcGFnYXRpb24gc28gdGhlIG9ubHkgd2F5IHRvIHN0b3AgaXQgZm9yIGpRdWVyeSBpcyB0byBzdG9wIGl0IGZvclxuXHRcdFx0XHQvLyBldmVyeW9uZSB2aWEgbmF0aXZlIGBzdG9wUHJvcGFnYXRpb24oKWAuIFRoaXMgaXMgbm90IGEgcHJvYmxlbSBmb3Jcblx0XHRcdFx0Ly8gZm9jdXMvYmx1ciB3aGljaCBkb24ndCBidWJibGUsIGJ1dCBpdCBkb2VzIGFsc28gc3RvcCBjbGljayBvbiBjaGVja2JveGVzXG5cdFx0XHRcdC8vIGFuZCByYWRpb3MuIFdlIGFjY2VwdCB0aGlzIGxpbWl0YXRpb24uXG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRldmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9ICk7XG59XG5cbmpRdWVyeS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uKCBlbGVtLCB0eXBlLCBoYW5kbGUgKSB7XG5cblx0Ly8gVGhpcyBcImlmXCIgaXMgbmVlZGVkIGZvciBwbGFpbiBvYmplY3RzXG5cdGlmICggZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyICkge1xuXHRcdGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggdHlwZSwgaGFuZGxlICk7XG5cdH1cbn07XG5cbmpRdWVyeS5FdmVudCA9IGZ1bmN0aW9uKCBzcmMsIHByb3BzICkge1xuXG5cdC8vIEFsbG93IGluc3RhbnRpYXRpb24gd2l0aG91dCB0aGUgJ25ldycga2V5d29yZFxuXHRpZiAoICEoIHRoaXMgaW5zdGFuY2VvZiBqUXVlcnkuRXZlbnQgKSApIHtcblx0XHRyZXR1cm4gbmV3IGpRdWVyeS5FdmVudCggc3JjLCBwcm9wcyApO1xuXHR9XG5cblx0Ly8gRXZlbnQgb2JqZWN0XG5cdGlmICggc3JjICYmIHNyYy50eXBlICkge1xuXHRcdHRoaXMub3JpZ2luYWxFdmVudCA9IHNyYztcblx0XHR0aGlzLnR5cGUgPSBzcmMudHlwZTtcblxuXHRcdC8vIEV2ZW50cyBidWJibGluZyB1cCB0aGUgZG9jdW1lbnQgbWF5IGhhdmUgYmVlbiBtYXJrZWQgYXMgcHJldmVudGVkXG5cdFx0Ly8gYnkgYSBoYW5kbGVyIGxvd2VyIGRvd24gdGhlIHRyZWU7IHJlZmxlY3QgdGhlIGNvcnJlY3QgdmFsdWUuXG5cdFx0dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSBzcmMuZGVmYXVsdFByZXZlbnRlZCA/XG5cdFx0XHRyZXR1cm5UcnVlIDpcblx0XHRcdHJldHVybkZhbHNlO1xuXG5cdFx0Ly8gQ3JlYXRlIHRhcmdldCBwcm9wZXJ0aWVzXG5cdFx0dGhpcy50YXJnZXQgPSBzcmMudGFyZ2V0O1xuXHRcdHRoaXMuY3VycmVudFRhcmdldCA9IHNyYy5jdXJyZW50VGFyZ2V0O1xuXHRcdHRoaXMucmVsYXRlZFRhcmdldCA9IHNyYy5yZWxhdGVkVGFyZ2V0O1xuXG5cdC8vIEV2ZW50IHR5cGVcblx0fSBlbHNlIHtcblx0XHR0aGlzLnR5cGUgPSBzcmM7XG5cdH1cblxuXHQvLyBQdXQgZXhwbGljaXRseSBwcm92aWRlZCBwcm9wZXJ0aWVzIG9udG8gdGhlIGV2ZW50IG9iamVjdFxuXHRpZiAoIHByb3BzICkge1xuXHRcdGpRdWVyeS5leHRlbmQoIHRoaXMsIHByb3BzICk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYSB0aW1lc3RhbXAgaWYgaW5jb21pbmcgZXZlbnQgZG9lc24ndCBoYXZlIG9uZVxuXHR0aGlzLnRpbWVTdGFtcCA9IHNyYyAmJiBzcmMudGltZVN0YW1wIHx8IERhdGUubm93KCk7XG5cblx0Ly8gTWFyayBpdCBhcyBmaXhlZFxuXHR0aGlzWyBqUXVlcnkuZXhwYW5kbyBdID0gdHJ1ZTtcbn07XG5cbi8vIGpRdWVyeS5FdmVudCBpcyBiYXNlZCBvbiBET00zIEV2ZW50cyBhcyBzcGVjaWZpZWQgYnkgdGhlIEVDTUFTY3JpcHQgTGFuZ3VhZ2UgQmluZGluZ1xuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMDMvV0QtRE9NLUxldmVsLTMtRXZlbnRzLTIwMDMwMzMxL2VjbWEtc2NyaXB0LWJpbmRpbmcuaHRtbFxualF1ZXJ5LkV2ZW50LnByb3RvdHlwZSA9IHtcblx0Y29uc3RydWN0b3I6IGpRdWVyeS5FdmVudCxcblx0aXNEZWZhdWx0UHJldmVudGVkOiByZXR1cm5GYWxzZSxcblx0aXNQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXHRpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDogcmV0dXJuRmFsc2UsXG5cdGlzU2ltdWxhdGVkOiBmYWxzZSxcblxuXHRwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG5cblx0XHR0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IHJldHVyblRydWU7XG5cblx0XHRpZiAoIGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXHR9LFxuXHRzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuXG5cdFx0dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG5cblx0XHRpZiAoIGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQgKSB7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblx0fSxcblx0c3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcblxuXHRcdHRoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuXG5cdFx0aWYgKCBlICYmICF0aGlzLmlzU2ltdWxhdGVkICkge1xuXHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cblx0XHR0aGlzLnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9XG59O1xuXG4vLyBJbmNsdWRlcyBhbGwgY29tbW9uIGV2ZW50IHByb3BzIGluY2x1ZGluZyBLZXlFdmVudCBhbmQgTW91c2VFdmVudCBzcGVjaWZpYyBwcm9wc1xualF1ZXJ5LmVhY2goIHtcblx0YWx0S2V5OiB0cnVlLFxuXHRidWJibGVzOiB0cnVlLFxuXHRjYW5jZWxhYmxlOiB0cnVlLFxuXHRjaGFuZ2VkVG91Y2hlczogdHJ1ZSxcblx0Y3RybEtleTogdHJ1ZSxcblx0ZGV0YWlsOiB0cnVlLFxuXHRldmVudFBoYXNlOiB0cnVlLFxuXHRtZXRhS2V5OiB0cnVlLFxuXHRwYWdlWDogdHJ1ZSxcblx0cGFnZVk6IHRydWUsXG5cdHNoaWZ0S2V5OiB0cnVlLFxuXHR2aWV3OiB0cnVlLFxuXHRcImNoYXJcIjogdHJ1ZSxcblx0Y29kZTogdHJ1ZSxcblx0Y2hhckNvZGU6IHRydWUsXG5cdGtleTogdHJ1ZSxcblx0a2V5Q29kZTogdHJ1ZSxcblx0YnV0dG9uOiB0cnVlLFxuXHRidXR0b25zOiB0cnVlLFxuXHRjbGllbnRYOiB0cnVlLFxuXHRjbGllbnRZOiB0cnVlLFxuXHRvZmZzZXRYOiB0cnVlLFxuXHRvZmZzZXRZOiB0cnVlLFxuXHRwb2ludGVySWQ6IHRydWUsXG5cdHBvaW50ZXJUeXBlOiB0cnVlLFxuXHRzY3JlZW5YOiB0cnVlLFxuXHRzY3JlZW5ZOiB0cnVlLFxuXHR0YXJnZXRUb3VjaGVzOiB0cnVlLFxuXHR0b0VsZW1lbnQ6IHRydWUsXG5cdHRvdWNoZXM6IHRydWUsXG5cdHdoaWNoOiB0cnVlXG59LCBqUXVlcnkuZXZlbnQuYWRkUHJvcCApO1xuXG5qUXVlcnkuZWFjaCggeyBmb2N1czogXCJmb2N1c2luXCIsIGJsdXI6IFwiZm9jdXNvdXRcIiB9LCBmdW5jdGlvbiggdHlwZSwgZGVsZWdhdGVUeXBlICkge1xuXG5cdC8vIFN1cHBvcnQ6IElFIDExK1xuXHQvLyBBdHRhY2ggYSBzaW5nbGUgZm9jdXNpbi9mb2N1c291dCBoYW5kbGVyIG9uIHRoZSBkb2N1bWVudCB3aGlsZSBzb21lb25lIHdhbnRzIGZvY3VzL2JsdXIuXG5cdC8vIFRoaXMgaXMgYmVjYXVzZSB0aGUgZm9ybWVyIGFyZSBzeW5jaHJvbm91cyBpbiBJRSB3aGlsZSB0aGUgbGF0dGVyIGFyZSBhc3luYy4gSW4gb3RoZXJcblx0Ly8gYnJvd3NlcnMsIGFsbCB0aG9zZSBoYW5kbGVycyBhcmUgaW52b2tlZCBzeW5jaHJvbm91c2x5LlxuXHRmdW5jdGlvbiBmb2N1c01hcHBlZEhhbmRsZXIoIG5hdGl2ZUV2ZW50ICkge1xuXG5cdFx0Ly8gYGV2ZW50SGFuZGxlYCB3b3VsZCBhbHJlYWR5IHdyYXAgdGhlIGV2ZW50LCBidXQgd2UgbmVlZCB0byBjaGFuZ2UgdGhlIGB0eXBlYCBoZXJlLlxuXHRcdHZhciBldmVudCA9IGpRdWVyeS5ldmVudC5maXgoIG5hdGl2ZUV2ZW50ICk7XG5cdFx0ZXZlbnQudHlwZSA9IG5hdGl2ZUV2ZW50LnR5cGUgPT09IFwiZm9jdXNpblwiID8gXCJmb2N1c1wiIDogXCJibHVyXCI7XG5cdFx0ZXZlbnQuaXNTaW11bGF0ZWQgPSB0cnVlO1xuXG5cdFx0Ly8gZm9jdXMvYmx1ciBkb24ndCBidWJibGUgd2hpbGUgZm9jdXNpbi9mb2N1c291dCBkbzsgc2ltdWxhdGUgdGhlIGZvcm1lciBieSBvbmx5XG5cdFx0Ly8gaW52b2tpbmcgdGhlIGhhbmRsZXIgYXQgdGhlIGxvd2VyIGxldmVsLlxuXHRcdGlmICggZXZlbnQudGFyZ2V0ID09PSBldmVudC5jdXJyZW50VGFyZ2V0ICkge1xuXG5cdFx0XHQvLyBUaGUgc2V0dXAgcGFydCBjYWxscyBgbGV2ZXJhZ2VOYXRpdmVgLCB3aGljaCwgaW4gdHVybiwgY2FsbHNcblx0XHRcdC8vIGBqUXVlcnkuZXZlbnQuYWRkYCwgc28gZXZlbnQgaGFuZGxlIHdpbGwgYWxyZWFkeSBoYXZlIGJlZW4gc2V0XG5cdFx0XHQvLyBieSB0aGlzIHBvaW50LlxuXHRcdFx0ZGF0YVByaXYuZ2V0KCB0aGlzLCBcImhhbmRsZVwiICkoIGV2ZW50ICk7XG5cdFx0fVxuXHR9XG5cblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSA9IHtcblxuXHRcdC8vIFV0aWxpemUgbmF0aXZlIGV2ZW50IGlmIHBvc3NpYmxlIHNvIGJsdXIvZm9jdXMgc2VxdWVuY2UgaXMgY29ycmVjdFxuXHRcdHNldHVwOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gQ2xhaW0gdGhlIGZpcnN0IGhhbmRsZXJcblx0XHRcdC8vIGRhdGFQcml2LnNldCggdGhpcywgXCJmb2N1c1wiLCAuLi4gKVxuXHRcdFx0Ly8gZGF0YVByaXYuc2V0KCB0aGlzLCBcImJsdXJcIiwgLi4uIClcblx0XHRcdGxldmVyYWdlTmF0aXZlKCB0aGlzLCB0eXBlLCB0cnVlICk7XG5cblx0XHRcdGlmICggaXNJRSApIHtcblx0XHRcdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKCBkZWxlZ2F0ZVR5cGUsIGZvY3VzTWFwcGVkSGFuZGxlciApO1xuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBSZXR1cm4gZmFsc2UgdG8gYWxsb3cgbm9ybWFsIHByb2Nlc3NpbmcgaW4gdGhlIGNhbGxlclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR0cmlnZ2VyOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gRm9yY2Ugc2V0dXAgYmVmb3JlIHRyaWdnZXJcblx0XHRcdGxldmVyYWdlTmF0aXZlKCB0aGlzLCB0eXBlICk7XG5cblx0XHRcdC8vIFJldHVybiBub24tZmFsc2UgdG8gYWxsb3cgbm9ybWFsIGV2ZW50LXBhdGggcHJvcGFnYXRpb25cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cblx0XHR0ZWFyZG93bjogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIGlzSUUgKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggZGVsZWdhdGVUeXBlLCBmb2N1c01hcHBlZEhhbmRsZXIgKTtcblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gUmV0dXJuIGZhbHNlIHRvIGluZGljYXRlIHN0YW5kYXJkIHRlYXJkb3duIHNob3VsZCBiZSBhcHBsaWVkXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gU3VwcHJlc3MgbmF0aXZlIGZvY3VzIG9yIGJsdXIgaWYgd2UncmUgY3VycmVudGx5IGluc2lkZVxuXHRcdC8vIGEgbGV2ZXJhZ2VkIG5hdGl2ZS1ldmVudCBzdGFja1xuXHRcdF9kZWZhdWx0OiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRyZXR1cm4gZGF0YVByaXYuZ2V0KCBldmVudC50YXJnZXQsIHR5cGUgKTtcblx0XHR9LFxuXG5cdFx0ZGVsZWdhdGVUeXBlOiBkZWxlZ2F0ZVR5cGVcblx0fTtcbn0gKTtcblxuLy8gQ3JlYXRlIG1vdXNlZW50ZXIvbGVhdmUgZXZlbnRzIHVzaW5nIG1vdXNlb3Zlci9vdXQgYW5kIGV2ZW50LXRpbWUgY2hlY2tzXG4vLyBzbyB0aGF0IGV2ZW50IGRlbGVnYXRpb24gd29ya3MgaW4galF1ZXJ5LlxuLy8gRG8gdGhlIHNhbWUgZm9yIHBvaW50ZXJlbnRlci9wb2ludGVybGVhdmUgYW5kIHBvaW50ZXJvdmVyL3BvaW50ZXJvdXRcbmpRdWVyeS5lYWNoKCB7XG5cdG1vdXNlZW50ZXI6IFwibW91c2VvdmVyXCIsXG5cdG1vdXNlbGVhdmU6IFwibW91c2VvdXRcIixcblx0cG9pbnRlcmVudGVyOiBcInBvaW50ZXJvdmVyXCIsXG5cdHBvaW50ZXJsZWF2ZTogXCJwb2ludGVyb3V0XCJcbn0sIGZ1bmN0aW9uKCBvcmlnLCBmaXggKSB7XG5cdGpRdWVyeS5ldmVudC5zcGVjaWFsWyBvcmlnIF0gPSB7XG5cdFx0ZGVsZWdhdGVUeXBlOiBmaXgsXG5cdFx0YmluZFR5cGU6IGZpeCxcblxuXHRcdGhhbmRsZTogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0dmFyIHJldCxcblx0XHRcdFx0dGFyZ2V0ID0gdGhpcyxcblx0XHRcdFx0cmVsYXRlZCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQsXG5cdFx0XHRcdGhhbmRsZU9iaiA9IGV2ZW50LmhhbmRsZU9iajtcblxuXHRcdFx0Ly8gRm9yIG1vdXNlZW50ZXIvbGVhdmUgY2FsbCB0aGUgaGFuZGxlciBpZiByZWxhdGVkIGlzIG91dHNpZGUgdGhlIHRhcmdldC5cblx0XHRcdC8vIE5COiBObyByZWxhdGVkVGFyZ2V0IGlmIHRoZSBtb3VzZSBsZWZ0L2VudGVyZWQgdGhlIGJyb3dzZXIgd2luZG93XG5cdFx0XHRpZiAoICFyZWxhdGVkIHx8ICggcmVsYXRlZCAhPT0gdGFyZ2V0ICYmICFqUXVlcnkuY29udGFpbnMoIHRhcmdldCwgcmVsYXRlZCApICkgKSB7XG5cdFx0XHRcdGV2ZW50LnR5cGUgPSBoYW5kbGVPYmoub3JpZ1R5cGU7XG5cdFx0XHRcdHJldCA9IGhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0ZXZlbnQudHlwZSA9IGZpeDtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXHR9O1xufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cblx0b246IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiBvbiggdGhpcywgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiApO1xuXHR9LFxuXHRvbmU6IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiBvbiggdGhpcywgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiwgMSApO1xuXHR9LFxuXHRvZmY6IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGZuICkge1xuXHRcdHZhciBoYW5kbGVPYmosIHR5cGU7XG5cdFx0aWYgKCB0eXBlcyAmJiB0eXBlcy5wcmV2ZW50RGVmYXVsdCAmJiB0eXBlcy5oYW5kbGVPYmogKSB7XG5cblx0XHRcdC8vICggZXZlbnQgKSAgZGlzcGF0Y2hlZCBqUXVlcnkuRXZlbnRcblx0XHRcdGhhbmRsZU9iaiA9IHR5cGVzLmhhbmRsZU9iajtcblx0XHRcdGpRdWVyeSggdHlwZXMuZGVsZWdhdGVUYXJnZXQgKS5vZmYoXG5cdFx0XHRcdGhhbmRsZU9iai5uYW1lc3BhY2UgP1xuXHRcdFx0XHRcdGhhbmRsZU9iai5vcmlnVHlwZSArIFwiLlwiICsgaGFuZGxlT2JqLm5hbWVzcGFjZSA6XG5cdFx0XHRcdFx0aGFuZGxlT2JqLm9yaWdUeXBlLFxuXHRcdFx0XHRoYW5kbGVPYmouc2VsZWN0b3IsXG5cdFx0XHRcdGhhbmRsZU9iai5oYW5kbGVyXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdGlmICggdHlwZW9mIHR5cGVzID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0XHQvLyAoIHR5cGVzLW9iamVjdCBbLCBzZWxlY3Rvcl0gKVxuXHRcdFx0Zm9yICggdHlwZSBpbiB0eXBlcyApIHtcblx0XHRcdFx0dGhpcy5vZmYoIHR5cGUsIHNlbGVjdG9yLCB0eXBlc1sgdHlwZSBdICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aWYgKCBzZWxlY3RvciA9PT0gZmFsc2UgfHwgdHlwZW9mIHNlbGVjdG9yID09PSBcImZ1bmN0aW9uXCIgKSB7XG5cblx0XHRcdC8vICggdHlwZXMgWywgZm5dIClcblx0XHRcdGZuID0gc2VsZWN0b3I7XG5cdFx0XHRzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0aWYgKCBmbiA9PT0gZmFsc2UgKSB7XG5cdFx0XHRmbiA9IHJldHVybkZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIHRoaXMsIHR5cGVzLCBmbiwgc2VsZWN0b3IgKTtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxudmFyXG5cblx0Ly8gU3VwcG9ydDogSUUgPD0xMCAtIDExK1xuXHQvLyBJbiBJRSB1c2luZyByZWdleCBncm91cHMgaGVyZSBjYXVzZXMgc2V2ZXJlIHNsb3dkb3ducy5cblx0cm5vSW5uZXJodG1sID0gLzxzY3JpcHR8PHN0eWxlfDxsaW5rL2k7XG5cbi8vIFByZWZlciBhIHRib2R5IG92ZXIgaXRzIHBhcmVudCB0YWJsZSBmb3IgY29udGFpbmluZyBuZXcgcm93c1xuZnVuY3Rpb24gbWFuaXB1bGF0aW9uVGFyZ2V0KCBlbGVtLCBjb250ZW50ICkge1xuXHRpZiAoIG5vZGVOYW1lKCBlbGVtLCBcInRhYmxlXCIgKSAmJlxuXHRcdG5vZGVOYW1lKCBjb250ZW50Lm5vZGVUeXBlICE9PSAxMSA/IGNvbnRlbnQgOiBjb250ZW50LmZpcnN0Q2hpbGQsIFwidHJcIiApICkge1xuXG5cdFx0cmV0dXJuIGpRdWVyeSggZWxlbSApLmNoaWxkcmVuKCBcInRib2R5XCIgKVsgMCBdIHx8IGVsZW07XG5cdH1cblxuXHRyZXR1cm4gZWxlbTtcbn1cblxuZnVuY3Rpb24gY2xvbmVDb3B5RXZlbnQoIHNyYywgZGVzdCApIHtcblx0dmFyIHR5cGUsIGksIGwsXG5cdFx0ZXZlbnRzID0gZGF0YVByaXYuZ2V0KCBzcmMsIFwiZXZlbnRzXCIgKTtcblxuXHRpZiAoIGRlc3Qubm9kZVR5cGUgIT09IDEgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gMS4gQ29weSBwcml2YXRlIGRhdGE6IGV2ZW50cywgaGFuZGxlcnMsIGV0Yy5cblx0aWYgKCBldmVudHMgKSB7XG5cdFx0ZGF0YVByaXYucmVtb3ZlKCBkZXN0LCBcImhhbmRsZSBldmVudHNcIiApO1xuXHRcdGZvciAoIHR5cGUgaW4gZXZlbnRzICkge1xuXHRcdFx0Zm9yICggaSA9IDAsIGwgPSBldmVudHNbIHR5cGUgXS5sZW5ndGg7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdGpRdWVyeS5ldmVudC5hZGQoIGRlc3QsIHR5cGUsIGV2ZW50c1sgdHlwZSBdWyBpIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyAyLiBDb3B5IHVzZXIgZGF0YVxuXHRpZiAoIGRhdGFVc2VyLmhhc0RhdGEoIHNyYyApICkge1xuXHRcdGRhdGFVc2VyLnNldCggZGVzdCwgalF1ZXJ5LmV4dGVuZCgge30sIGRhdGFVc2VyLmdldCggc3JjICkgKSApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSggZWxlbSwgc2VsZWN0b3IsIGtlZXBEYXRhICkge1xuXHR2YXIgbm9kZSxcblx0XHRub2RlcyA9IHNlbGVjdG9yID8galF1ZXJ5LmZpbHRlciggc2VsZWN0b3IsIGVsZW0gKSA6IGVsZW0sXG5cdFx0aSA9IDA7XG5cblx0Zm9yICggOyAoIG5vZGUgPSBub2Rlc1sgaSBdICkgIT0gbnVsbDsgaSsrICkge1xuXHRcdGlmICggIWtlZXBEYXRhICYmIG5vZGUubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIG5vZGUgKSApO1xuXHRcdH1cblxuXHRcdGlmICggbm9kZS5wYXJlbnROb2RlICkge1xuXHRcdFx0aWYgKCBrZWVwRGF0YSAmJiBpc0F0dGFjaGVkKCBub2RlICkgKSB7XG5cdFx0XHRcdHNldEdsb2JhbEV2YWwoIGdldEFsbCggbm9kZSwgXCJzY3JpcHRcIiApICk7XG5cdFx0XHR9XG5cdFx0XHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIG5vZGUgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWxlbTtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXHRodG1sUHJlZmlsdGVyOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHRyZXR1cm4gaHRtbDtcblx0fSxcblxuXHRjbG9uZTogZnVuY3Rpb24oIGVsZW0sIGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuXHRcdHZhciBpLCBsLCBzcmNFbGVtZW50cywgZGVzdEVsZW1lbnRzLFxuXHRcdFx0Y2xvbmUgPSBlbGVtLmNsb25lTm9kZSggdHJ1ZSApLFxuXHRcdFx0aW5QYWdlID0gaXNBdHRhY2hlZCggZWxlbSApO1xuXG5cdFx0Ly8gRml4IElFIGNsb25pbmcgaXNzdWVzXG5cdFx0aWYgKCBpc0lFICYmICggZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBlbGVtLm5vZGVUeXBlID09PSAxMSApICYmXG5cdFx0XHRcdCFqUXVlcnkuaXNYTUxEb2MoIGVsZW0gKSApIHtcblxuXHRcdFx0Ly8gV2UgZXNjaGV3IGpRdWVyeSNmaW5kIGhlcmUgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnM6XG5cdFx0XHQvLyBodHRwczovL2pzcGVyZi5jb20vZ2V0YWxsLXZzLXNpenpsZS8yXG5cdFx0XHRkZXN0RWxlbWVudHMgPSBnZXRBbGwoIGNsb25lICk7XG5cdFx0XHRzcmNFbGVtZW50cyA9IGdldEFsbCggZWxlbSApO1xuXG5cdFx0XHRmb3IgKCBpID0gMCwgbCA9IHNyY0VsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKyApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTExK1xuXHRcdFx0XHQvLyBJRSBmYWlscyB0byBzZXQgdGhlIGRlZmF1bHRWYWx1ZSB0byB0aGUgY29ycmVjdCB2YWx1ZSB3aGVuXG5cdFx0XHRcdC8vIGNsb25pbmcgdGV4dGFyZWFzLlxuXHRcdFx0XHRpZiAoIG5vZGVOYW1lKCBkZXN0RWxlbWVudHNbIGkgXSwgXCJ0ZXh0YXJlYVwiICkgKSB7XG5cdFx0XHRcdFx0ZGVzdEVsZW1lbnRzWyBpIF0uZGVmYXVsdFZhbHVlID0gc3JjRWxlbWVudHNbIGkgXS5kZWZhdWx0VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDb3B5IHRoZSBldmVudHMgZnJvbSB0aGUgb3JpZ2luYWwgdG8gdGhlIGNsb25lXG5cdFx0aWYgKCBkYXRhQW5kRXZlbnRzICkge1xuXHRcdFx0aWYgKCBkZWVwRGF0YUFuZEV2ZW50cyApIHtcblx0XHRcdFx0c3JjRWxlbWVudHMgPSBzcmNFbGVtZW50cyB8fCBnZXRBbGwoIGVsZW0gKTtcblx0XHRcdFx0ZGVzdEVsZW1lbnRzID0gZGVzdEVsZW1lbnRzIHx8IGdldEFsbCggY2xvbmUgKTtcblxuXHRcdFx0XHRmb3IgKCBpID0gMCwgbCA9IHNyY0VsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRjbG9uZUNvcHlFdmVudCggc3JjRWxlbWVudHNbIGkgXSwgZGVzdEVsZW1lbnRzWyBpIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xvbmVDb3B5RXZlbnQoIGVsZW0sIGNsb25lICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUHJlc2VydmUgc2NyaXB0IGV2YWx1YXRpb24gaGlzdG9yeVxuXHRcdGRlc3RFbGVtZW50cyA9IGdldEFsbCggY2xvbmUsIFwic2NyaXB0XCIgKTtcblx0XHRpZiAoIGRlc3RFbGVtZW50cy5sZW5ndGggPiAwICkge1xuXHRcdFx0c2V0R2xvYmFsRXZhbCggZGVzdEVsZW1lbnRzLCAhaW5QYWdlICYmIGdldEFsbCggZWxlbSwgXCJzY3JpcHRcIiApICk7XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHRoZSBjbG9uZWQgc2V0XG5cdFx0cmV0dXJuIGNsb25lO1xuXHR9LFxuXG5cdGNsZWFuRGF0YTogZnVuY3Rpb24oIGVsZW1zICkge1xuXHRcdHZhciBkYXRhLCBlbGVtLCB0eXBlLFxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRmb3IgKCA7ICggZWxlbSA9IGVsZW1zWyBpIF0gKSAhPT0gdW5kZWZpbmVkOyBpKysgKSB7XG5cdFx0XHRpZiAoIGFjY2VwdERhdGEoIGVsZW0gKSApIHtcblx0XHRcdFx0aWYgKCAoIGRhdGEgPSBlbGVtWyBkYXRhUHJpdi5leHBhbmRvIF0gKSApIHtcblx0XHRcdFx0XHRpZiAoIGRhdGEuZXZlbnRzICkge1xuXHRcdFx0XHRcdFx0Zm9yICggdHlwZSBpbiBkYXRhLmV2ZW50cyApIHtcblx0XHRcdFx0XHRcdFx0aWYgKCBzcGVjaWFsWyB0eXBlIF0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnJlbW92ZSggZWxlbSwgdHlwZSApO1xuXG5cdFx0XHRcdFx0XHRcdC8vIFRoaXMgaXMgYSBzaG9ydGN1dCB0byBhdm9pZCBqUXVlcnkuZXZlbnQucmVtb3ZlJ3Mgb3ZlcmhlYWRcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkucmVtb3ZlRXZlbnQoIGVsZW0sIHR5cGUsIGRhdGEuaGFuZGxlICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBDaHJvbWUgPD0zNSAtIDQ1K1xuXHRcdFx0XHRcdC8vIEFzc2lnbiB1bmRlZmluZWQgaW5zdGVhZCBvZiB1c2luZyBkZWxldGUsIHNlZSBEYXRhI3JlbW92ZVxuXHRcdFx0XHRcdGVsZW1bIGRhdGFQcml2LmV4cGFuZG8gXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIGVsZW1bIGRhdGFVc2VyLmV4cGFuZG8gXSApIHtcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTM1IC0gNDUrXG5cdFx0XHRcdFx0Ly8gQXNzaWduIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIHVzaW5nIGRlbGV0ZSwgc2VlIERhdGEjcmVtb3ZlXG5cdFx0XHRcdFx0ZWxlbVsgZGF0YVVzZXIuZXhwYW5kbyBdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0ZGV0YWNoOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHJlbW92ZSggdGhpcywgc2VsZWN0b3IsIHRydWUgKTtcblx0fSxcblxuXHRyZW1vdmU6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gcmVtb3ZlKCB0aGlzLCBzZWxlY3RvciApO1xuXHR9LFxuXG5cdHRleHQ6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdGpRdWVyeS50ZXh0KCB0aGlzICkgOlxuXHRcdFx0XHR0aGlzLmVtcHR5KCkuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cdFx0fSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggKTtcblx0fSxcblxuXHRhcHBlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gbWFuaXB1bGF0aW9uVGFyZ2V0KCB0aGlzLCBlbGVtICk7XG5cdFx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZCggZWxlbSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRwcmVwZW5kOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gZG9tTWFuaXAoIHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRpZiAoIHRoaXMubm9kZVR5cGUgPT09IDEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gMTEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0dmFyIHRhcmdldCA9IG1hbmlwdWxhdGlvblRhcmdldCggdGhpcywgZWxlbSApO1xuXHRcdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKCBlbGVtLCB0YXJnZXQuZmlyc3RDaGlsZCApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRiZWZvcmU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5wYXJlbnROb2RlICkge1xuXHRcdFx0XHR0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBlbGVtLCB0aGlzICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGFmdGVyOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gZG9tTWFuaXAoIHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRpZiAoIHRoaXMucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0dGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSggZWxlbSwgdGhpcy5uZXh0U2libGluZyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRlbXB0eTogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGVsZW0sXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgKCBlbGVtID0gdGhpc1sgaSBdICkgIT0gbnVsbDsgaSsrICkge1xuXHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgbWVtb3J5IGxlYWtzXG5cdFx0XHRcdGpRdWVyeS5jbGVhbkRhdGEoIGdldEFsbCggZWxlbSwgZmFsc2UgKSApO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSBhbnkgcmVtYWluaW5nIG5vZGVzXG5cdFx0XHRcdGVsZW0udGV4dENvbnRlbnQgPSBcIlwiO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGNsb25lOiBmdW5jdGlvbiggZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMgKSB7XG5cdFx0ZGF0YUFuZEV2ZW50cyA9IGRhdGFBbmRFdmVudHMgPT0gbnVsbCA/IGZhbHNlIDogZGF0YUFuZEV2ZW50cztcblx0XHRkZWVwRGF0YUFuZEV2ZW50cyA9IGRlZXBEYXRhQW5kRXZlbnRzID09IG51bGwgPyBkYXRhQW5kRXZlbnRzIDogZGVlcERhdGFBbmRFdmVudHM7XG5cblx0XHRyZXR1cm4gdGhpcy5tYXAoIGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5jbG9uZSggdGhpcywgZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMgKTtcblx0XHR9ICk7XG5cdH0sXG5cblx0aHRtbDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHZhciBlbGVtID0gdGhpc1sgMCBdIHx8IHt9LFxuXHRcdFx0XHRpID0gMCxcblx0XHRcdFx0bCA9IHRoaXMubGVuZ3RoO1xuXG5cdFx0XHRpZiAoIHZhbHVlID09PSB1bmRlZmluZWQgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdFx0cmV0dXJuIGVsZW0uaW5uZXJIVE1MO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZWUgaWYgd2UgY2FuIHRha2UgYSBzaG9ydGN1dCBhbmQganVzdCB1c2UgaW5uZXJIVE1MXG5cdFx0XHRpZiAoIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiAhcm5vSW5uZXJodG1sLnRlc3QoIHZhbHVlICkgJiZcblx0XHRcdFx0IXdyYXBNYXBbICggcnRhZ05hbWUuZXhlYyggdmFsdWUgKSB8fCBbIFwiXCIsIFwiXCIgXSApWyAxIF0udG9Mb3dlckNhc2UoKSBdICkge1xuXG5cdFx0XHRcdHZhbHVlID0galF1ZXJ5Lmh0bWxQcmVmaWx0ZXIoIHZhbHVlICk7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdFx0XHRlbGVtID0gdGhpc1sgaSBdIHx8IHt9O1xuXG5cdFx0XHRcdFx0XHQvLyBSZW1vdmUgZWxlbWVudCBub2RlcyBhbmQgcHJldmVudCBtZW1vcnkgbGVha3Ncblx0XHRcdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdFx0XHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCBlbGVtLCBmYWxzZSApICk7XG5cdFx0XHRcdFx0XHRcdGVsZW0uaW5uZXJIVE1MID0gdmFsdWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZWxlbSA9IDA7XG5cblx0XHRcdFx0Ly8gSWYgdXNpbmcgaW5uZXJIVE1MIHRocm93cyBhbiBleGNlcHRpb24sIHVzZSB0aGUgZmFsbGJhY2sgbWV0aG9kXG5cdFx0XHRcdH0gY2F0Y2ggKCBlICkge31cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBlbGVtICkge1xuXHRcdFx0XHR0aGlzLmVtcHR5KCkuYXBwZW5kKCB2YWx1ZSApO1xuXHRcdFx0fVxuXHRcdH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoICk7XG5cdH0sXG5cblx0cmVwbGFjZVdpdGg6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpZ25vcmVkID0gW107XG5cblx0XHQvLyBNYWtlIHRoZSBjaGFuZ2VzLCByZXBsYWNpbmcgZWFjaCBub24taWdub3JlZCBjb250ZXh0IGVsZW1lbnQgd2l0aCB0aGUgbmV3IGNvbnRlbnRcblx0XHRyZXR1cm4gZG9tTWFuaXAoIHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHR2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXG5cdFx0XHRpZiAoIGpRdWVyeS5pbkFycmF5KCB0aGlzLCBpZ25vcmVkICkgPCAwICkge1xuXHRcdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIHRoaXMgKSApO1xuXHRcdFx0XHRpZiAoIHBhcmVudCApIHtcblx0XHRcdFx0XHRwYXJlbnQucmVwbGFjZUNoaWxkKCBlbGVtLCB0aGlzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdC8vIEZvcmNlIGNhbGxiYWNrIGludm9jYXRpb25cblx0XHR9LCBpZ25vcmVkICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmVhY2goIHtcblx0YXBwZW5kVG86IFwiYXBwZW5kXCIsXG5cdHByZXBlbmRUbzogXCJwcmVwZW5kXCIsXG5cdGluc2VydEJlZm9yZTogXCJiZWZvcmVcIixcblx0aW5zZXJ0QWZ0ZXI6IFwiYWZ0ZXJcIixcblx0cmVwbGFjZUFsbDogXCJyZXBsYWNlV2l0aFwiXG59LCBmdW5jdGlvbiggbmFtZSwgb3JpZ2luYWwgKSB7XG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHZhciBlbGVtcyxcblx0XHRcdHJldCA9IFtdLFxuXHRcdFx0aW5zZXJ0ID0galF1ZXJ5KCBzZWxlY3RvciApLFxuXHRcdFx0bGFzdCA9IGluc2VydC5sZW5ndGggLSAxLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRmb3IgKCA7IGkgPD0gbGFzdDsgaSsrICkge1xuXHRcdFx0ZWxlbXMgPSBpID09PSBsYXN0ID8gdGhpcyA6IHRoaXMuY2xvbmUoIHRydWUgKTtcblx0XHRcdGpRdWVyeSggaW5zZXJ0WyBpIF0gKVsgb3JpZ2luYWwgXSggZWxlbXMgKTtcblx0XHRcdHB1c2guYXBwbHkoIHJldCwgZWxlbXMgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHJldCApO1xuXHR9O1xufSApO1xuXG52YXIgcm51bW5vbnB4ID0gbmV3IFJlZ0V4cCggXCJeKFwiICsgcG51bSArIFwiKSg/IXB4KVthLXolXSskXCIsIFwiaVwiICk7XG5cbnZhciByY3VzdG9tUHJvcCA9IC9eLS0vO1xuXG5mdW5jdGlvbiBnZXRTdHlsZXMoIGVsZW0gKSB7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD0xMSsgKHRyYWMtMTQxNTApXG5cdC8vIEluIElFIHBvcHVwJ3MgYHdpbmRvd2AgaXMgdGhlIG9wZW5lciB3aW5kb3cgd2hpY2ggbWFrZXMgYHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBlbGVtIClgXG5cdC8vIGJyZWFrLiBVc2luZyBgZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3YCBhdm9pZHMgdGhlIGlzc3VlLlxuXHR2YXIgdmlldyA9IGVsZW0ub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcblxuXHQvLyBgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KCBcIlwiIClgIGhhcyBhIGBudWxsYCBgZGVmYXVsdFZpZXdgXG5cdC8vIHByb3BlcnR5OyBjaGVjayBgZGVmYXVsdFZpZXdgIHRydXRoaW5lc3MgdG8gZmFsbGJhY2sgdG8gd2luZG93IGluIHN1Y2ggYSBjYXNlLlxuXHRpZiAoICF2aWV3ICkge1xuXHRcdHZpZXcgPSB3aW5kb3c7XG5cdH1cblxuXHRyZXR1cm4gdmlldy5nZXRDb21wdXRlZFN0eWxlKCBlbGVtICk7XG59XG5cbi8vIEEgbWV0aG9kIGZvciBxdWlja2x5IHN3YXBwaW5nIGluL291dCBDU1MgcHJvcGVydGllcyB0byBnZXQgY29ycmVjdCBjYWxjdWxhdGlvbnMuXG5mdW5jdGlvbiBzd2FwKCBlbGVtLCBvcHRpb25zLCBjYWxsYmFjayApIHtcblx0dmFyIHJldCwgbmFtZSxcblx0XHRvbGQgPSB7fTtcblxuXHQvLyBSZW1lbWJlciB0aGUgb2xkIHZhbHVlcywgYW5kIGluc2VydCB0aGUgbmV3IG9uZXNcblx0Zm9yICggbmFtZSBpbiBvcHRpb25zICkge1xuXHRcdG9sZFsgbmFtZSBdID0gZWxlbS5zdHlsZVsgbmFtZSBdO1xuXHRcdGVsZW0uc3R5bGVbIG5hbWUgXSA9IG9wdGlvbnNbIG5hbWUgXTtcblx0fVxuXG5cdHJldCA9IGNhbGxiYWNrLmNhbGwoIGVsZW0gKTtcblxuXHQvLyBSZXZlcnQgdGhlIG9sZCB2YWx1ZXNcblx0Zm9yICggbmFtZSBpbiBvcHRpb25zICkge1xuXHRcdGVsZW0uc3R5bGVbIG5hbWUgXSA9IG9sZFsgbmFtZSBdO1xuXHR9XG5cblx0cmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gY3VyQ1NTKCBlbGVtLCBuYW1lLCBjb21wdXRlZCApIHtcblx0dmFyIHJldCxcblx0XHRpc0N1c3RvbVByb3AgPSByY3VzdG9tUHJvcC50ZXN0KCBuYW1lICk7XG5cblx0Y29tcHV0ZWQgPSBjb21wdXRlZCB8fCBnZXRTdHlsZXMoIGVsZW0gKTtcblxuXHQvLyBnZXRQcm9wZXJ0eVZhbHVlIGlzIG5lZWRlZCBmb3IgYC5jc3MoJy0tY3VzdG9tUHJvcGVydHknKWAgKGdoLTMxNDQpXG5cdGlmICggY29tcHV0ZWQgKSB7XG5cblx0XHQvLyBBIGZhbGxiYWNrIHRvIGRpcmVjdCBwcm9wZXJ0eSBhY2Nlc3MgaXMgbmVlZGVkIGFzIGBjb21wdXRlZGAsIGJlaW5nXG5cdFx0Ly8gdGhlIG91dHB1dCBvZiBgZ2V0Q29tcHV0ZWRTdHlsZWAsIGNvbnRhaW5zIGNhbWVsQ2FzZWQga2V5cyBhbmRcblx0XHQvLyBgZ2V0UHJvcGVydHlWYWx1ZWAgcmVxdWlyZXMga2ViYWItY2FzZSBvbmVzLlxuXHRcdC8vXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTErXG5cdFx0Ly8gSUUgb25seSBzdXBwb3J0cyBgXCJmbG9hdFwiYCBpbiBgZ2V0UHJvcGVydHlWYWx1ZWA7IGluIGNvbXB1dGVkIHN0eWxlc1xuXHRcdC8vIGl0J3Mgb25seSBhdmFpbGFibGUgYXMgYFwiY3NzRmxvYXRcImAuIFdlIG5vIGxvbmdlciBtb2RpZnkgcHJvcGVydGllc1xuXHRcdC8vIHNlbnQgdG8gYC5jc3MoKWAgYXBhcnQgZnJvbSBjYW1lbENhc2luZywgc28gd2UgbmVlZCB0byBjaGVjayBib3RoLlxuXHRcdC8vIE5vcm1hbGx5LCB0aGlzIHdvdWxkIGNyZWF0ZSBkaWZmZXJlbmNlIGluIGJlaGF2aW9yOiBpZlxuXHRcdC8vIGBnZXRQcm9wZXJ0eVZhbHVlYCByZXR1cm5zIGFuIGVtcHR5IHN0cmluZywgdGhlIHZhbHVlIHJldHVybmVkXG5cdFx0Ly8gYnkgYC5jc3MoKWAgd291bGQgYmUgYHVuZGVmaW5lZGAuIFRoaXMgaXMgdXN1YWxseSB0aGUgY2FzZSBmb3Jcblx0XHQvLyBkaXNjb25uZWN0ZWQgZWxlbWVudHMuIEhvd2V2ZXIsIGluIElFIGV2ZW4gZGlzY29ubmVjdGVkIGVsZW1lbnRzXG5cdFx0Ly8gd2l0aCBubyBzdHlsZXMgcmV0dXJuIGBcIm5vbmVcImAgZm9yIGBnZXRQcm9wZXJ0eVZhbHVlKCBcImZsb2F0XCIgKWBcblx0XHRyZXQgPSBjb21wdXRlZC5nZXRQcm9wZXJ0eVZhbHVlKCBuYW1lICkgfHwgY29tcHV0ZWRbIG5hbWUgXTtcblxuXHRcdGlmICggaXNDdXN0b21Qcm9wICYmIHJldCApIHtcblxuXHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveCAxMDUrLCBDaHJvbWUgPD0xMDUrXG5cdFx0XHQvLyBTcGVjIHJlcXVpcmVzIHRyaW1taW5nIHdoaXRlc3BhY2UgZm9yIGN1c3RvbSBwcm9wZXJ0aWVzIChnaC00OTI2KS5cblx0XHRcdC8vIEZpcmVmb3ggb25seSB0cmltcyBsZWFkaW5nIHdoaXRlc3BhY2UuIENocm9tZSBqdXN0IGNvbGxhcHNlc1xuXHRcdFx0Ly8gYm90aCBsZWFkaW5nICYgdHJhaWxpbmcgd2hpdGVzcGFjZSB0byBhIHNpbmdsZSBzcGFjZS5cblx0XHRcdC8vXG5cdFx0XHQvLyBGYWxsIGJhY2sgdG8gYHVuZGVmaW5lZGAgaWYgZW1wdHkgc3RyaW5nIHJldHVybmVkLlxuXHRcdFx0Ly8gVGhpcyBjb2xsYXBzZXMgYSBtaXNzaW5nIGRlZmluaXRpb24gd2l0aCBwcm9wZXJ0eSBkZWZpbmVkXG5cdFx0XHQvLyBhbmQgc2V0IHRvIGFuIGVtcHR5IHN0cmluZyBidXQgdGhlcmUncyBubyBzdGFuZGFyZCBBUElcblx0XHRcdC8vIGFsbG93aW5nIHVzIHRvIGRpZmZlcmVudGlhdGUgdGhlbSB3aXRob3V0IGEgcGVyZm9ybWFuY2UgcGVuYWx0eVxuXHRcdFx0Ly8gYW5kIHJldHVybmluZyBgdW5kZWZpbmVkYCBhbGlnbnMgd2l0aCBvbGRlciBqUXVlcnkuXG5cdFx0XHQvL1xuXHRcdFx0Ly8gcnRyaW1DU1MgdHJlYXRzIFUrMDAwRCBDQVJSSUFHRSBSRVRVUk4gYW5kIFUrMDAwQyBGT1JNIEZFRURcblx0XHRcdC8vIGFzIHdoaXRlc3BhY2Ugd2hpbGUgQ1NTIGRvZXMgbm90LCBidXQgdGhpcyBpcyBub3QgYSBwcm9ibGVtXG5cdFx0XHQvLyBiZWNhdXNlIENTUyBwcmVwcm9jZXNzaW5nIHJlcGxhY2VzIHRoZW0gd2l0aCBVKzAwMEEgTElORSBGRUVEXG5cdFx0XHQvLyAod2hpY2ggKmlzKiBDU1Mgd2hpdGVzcGFjZSlcblx0XHRcdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc3ludGF4LTMvI2lucHV0LXByZXByb2Nlc3Npbmdcblx0XHRcdHJldCA9IHJldC5yZXBsYWNlKCBydHJpbUNTUywgXCIkMVwiICkgfHwgdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGlmICggcmV0ID09PSBcIlwiICYmICFpc0F0dGFjaGVkKCBlbGVtICkgKSB7XG5cdFx0XHRyZXQgPSBqUXVlcnkuc3R5bGUoIGVsZW0sIG5hbWUgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmV0ICE9PSB1bmRlZmluZWQgP1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTErXG5cdFx0Ly8gSUUgcmV0dXJucyB6SW5kZXggdmFsdWUgYXMgYW4gaW50ZWdlci5cblx0XHRyZXQgKyBcIlwiIDpcblx0XHRyZXQ7XG59XG5cbnZhciBjc3NQcmVmaXhlcyA9IFsgXCJXZWJraXRcIiwgXCJNb3pcIiwgXCJtc1wiIF0sXG5cdGVtcHR5U3R5bGUgPSBkb2N1bWVudCQxLmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKS5zdHlsZSxcblx0dmVuZG9yUHJvcHMgPSB7fTtcblxuLy8gUmV0dXJuIGEgdmVuZG9yLXByZWZpeGVkIHByb3BlcnR5IG9yIHVuZGVmaW5lZFxuZnVuY3Rpb24gdmVuZG9yUHJvcE5hbWUoIG5hbWUgKSB7XG5cblx0Ly8gQ2hlY2sgZm9yIHZlbmRvciBwcmVmaXhlZCBuYW1lc1xuXHR2YXIgY2FwTmFtZSA9IG5hbWVbIDAgXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSggMSApLFxuXHRcdGkgPSBjc3NQcmVmaXhlcy5sZW5ndGg7XG5cblx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0bmFtZSA9IGNzc1ByZWZpeGVzWyBpIF0gKyBjYXBOYW1lO1xuXHRcdGlmICggbmFtZSBpbiBlbXB0eVN0eWxlICkge1xuXHRcdFx0cmV0dXJuIG5hbWU7XG5cdFx0fVxuXHR9XG59XG5cbi8vIFJldHVybiBhIHBvdGVudGlhbGx5LW1hcHBlZCB2ZW5kb3IgcHJlZml4ZWQgcHJvcGVydHlcbmZ1bmN0aW9uIGZpbmFsUHJvcE5hbWUoIG5hbWUgKSB7XG5cdHZhciBmaW5hbCA9IHZlbmRvclByb3BzWyBuYW1lIF07XG5cblx0aWYgKCBmaW5hbCApIHtcblx0XHRyZXR1cm4gZmluYWw7XG5cdH1cblx0aWYgKCBuYW1lIGluIGVtcHR5U3R5bGUgKSB7XG5cdFx0cmV0dXJuIG5hbWU7XG5cdH1cblx0cmV0dXJuIHZlbmRvclByb3BzWyBuYW1lIF0gPSB2ZW5kb3JQcm9wTmFtZSggbmFtZSApIHx8IG5hbWU7XG59XG5cbiggZnVuY3Rpb24oKSB7XG5cbnZhciByZWxpYWJsZVRyRGltZW5zaW9uc1ZhbCxcblx0ZGl2ID0gZG9jdW1lbnQkMS5jcmVhdGVFbGVtZW50KCBcImRpdlwiICk7XG5cbi8vIEZpbmlzaCBlYXJseSBpbiBsaW1pdGVkIChub24tYnJvd3NlcikgZW52aXJvbm1lbnRzXG5pZiAoICFkaXYuc3R5bGUgKSB7XG5cdHJldHVybjtcbn1cblxuLy8gU3VwcG9ydDogSUUgMTAgLSAxMStcbi8vIElFIG1pc3JlcG9ydHMgYGdldENvbXB1dGVkU3R5bGVgIG9mIHRhYmxlIHJvd3Mgd2l0aCB3aWR0aC9oZWlnaHRcbi8vIHNldCBpbiBDU1Mgd2hpbGUgYG9mZnNldCpgIHByb3BlcnRpZXMgcmVwb3J0IGNvcnJlY3QgdmFsdWVzLlxuLy8gU3VwcG9ydDogRmlyZWZveCA3MCtcbi8vIE9ubHkgRmlyZWZveCBpbmNsdWRlcyBib3JkZXIgd2lkdGhzXG4vLyBpbiBjb21wdXRlZCBkaW1lbnNpb25zLiAoZ2gtNDUyOSlcbnN1cHBvcnQucmVsaWFibGVUckRpbWVuc2lvbnMgPSBmdW5jdGlvbigpIHtcblx0dmFyIHRhYmxlLCB0ciwgdHJTdHlsZTtcblx0aWYgKCByZWxpYWJsZVRyRGltZW5zaW9uc1ZhbCA9PSBudWxsICkge1xuXHRcdHRhYmxlID0gZG9jdW1lbnQkMS5jcmVhdGVFbGVtZW50KCBcInRhYmxlXCIgKTtcblx0XHR0ciA9IGRvY3VtZW50JDEuY3JlYXRlRWxlbWVudCggXCJ0clwiICk7XG5cblx0XHR0YWJsZS5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O2JvcmRlci1jb2xsYXBzZTpzZXBhcmF0ZVwiO1xuXHRcdHRyLnN0eWxlLmNzc1RleHQgPSBcImJveC1zaXppbmc6Y29udGVudC1ib3g7Ym9yZGVyOjFweCBzb2xpZFwiO1xuXG5cdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDg2K1xuXHRcdC8vIEhlaWdodCBzZXQgdGhyb3VnaCBjc3NUZXh0IGRvZXMgbm90IGdldCBhcHBsaWVkLlxuXHRcdC8vIENvbXB1dGVkIGhlaWdodCB0aGVuIGNvbWVzIGJhY2sgYXMgMC5cblx0XHR0ci5zdHlsZS5oZWlnaHQgPSBcIjFweFwiO1xuXHRcdGRpdi5zdHlsZS5oZWlnaHQgPSBcIjlweFwiO1xuXG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCBDaHJvbWUgODYrXG5cdFx0Ly8gSW4gb3VyIGJvZHlCYWNrZ3JvdW5kLmh0bWwgaWZyYW1lLFxuXHRcdC8vIGRpc3BsYXkgZm9yIGFsbCBkaXYgZWxlbWVudHMgaXMgc2V0IHRvIFwiaW5saW5lXCIsXG5cdFx0Ly8gd2hpY2ggY2F1c2VzIGEgcHJvYmxlbSBvbmx5IGluIEFuZHJvaWQgQ2hyb21lLCBidXRcblx0XHQvLyBub3QgY29uc2lzdGVudGx5IGFjcm9zcyBhbGwgZGV2aWNlcy5cblx0XHQvLyBFbnN1cmluZyB0aGUgZGl2IGlzIGBkaXNwbGF5OiBibG9ja2Bcblx0XHQvLyBnZXRzIGFyb3VuZCB0aGlzIGlzc3VlLlxuXHRcdGRpdi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG5cdFx0ZG9jdW1lbnRFbGVtZW50JDFcblx0XHRcdC5hcHBlbmRDaGlsZCggdGFibGUgKVxuXHRcdFx0LmFwcGVuZENoaWxkKCB0ciApXG5cdFx0XHQuYXBwZW5kQ2hpbGQoIGRpdiApO1xuXG5cdFx0Ly8gRG9uJ3QgcnVuIHVudGlsIHdpbmRvdyBpcyB2aXNpYmxlXG5cdFx0aWYgKCB0YWJsZS5vZmZzZXRXaWR0aCA9PT0gMCApIHtcblx0XHRcdGRvY3VtZW50RWxlbWVudCQxLnJlbW92ZUNoaWxkKCB0YWJsZSApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRyU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggdHIgKTtcblx0XHRyZWxpYWJsZVRyRGltZW5zaW9uc1ZhbCA9ICggTWF0aC5yb3VuZCggcGFyc2VGbG9hdCggdHJTdHlsZS5oZWlnaHQgKSApICtcblx0XHRcdE1hdGgucm91bmQoIHBhcnNlRmxvYXQoIHRyU3R5bGUuYm9yZGVyVG9wV2lkdGggKSApICtcblx0XHRcdE1hdGgucm91bmQoIHBhcnNlRmxvYXQoIHRyU3R5bGUuYm9yZGVyQm90dG9tV2lkdGggKSApICkgPT09IHRyLm9mZnNldEhlaWdodDtcblxuXHRcdGRvY3VtZW50RWxlbWVudCQxLnJlbW92ZUNoaWxkKCB0YWJsZSApO1xuXHR9XG5cdHJldHVybiByZWxpYWJsZVRyRGltZW5zaW9uc1ZhbDtcbn07XG59ICkoKTtcblxudmFyXG5cblx0Ly8gU3dhcHBhYmxlIGlmIGRpc3BsYXkgaXMgbm9uZSBvciBzdGFydHMgd2l0aCB0YWJsZVxuXHQvLyBleGNlcHQgXCJ0YWJsZVwiLCBcInRhYmxlLWNlbGxcIiwgb3IgXCJ0YWJsZS1jYXB0aW9uXCJcblx0Ly8gU2VlIGhlcmUgZm9yIGRpc3BsYXkgdmFsdWVzOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0NTUy9kaXNwbGF5XG5cdHJkaXNwbGF5c3dhcCA9IC9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxcblx0Y3NzU2hvdyA9IHsgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiwgZGlzcGxheTogXCJibG9ja1wiIH0sXG5cdGNzc05vcm1hbFRyYW5zZm9ybSA9IHtcblx0XHRsZXR0ZXJTcGFjaW5nOiBcIjBcIixcblx0XHRmb250V2VpZ2h0OiBcIjQwMFwiXG5cdH07XG5cbmZ1bmN0aW9uIHNldFBvc2l0aXZlTnVtYmVyKCBfZWxlbSwgdmFsdWUsIHN1YnRyYWN0ICkge1xuXG5cdC8vIEFueSByZWxhdGl2ZSAoKy8tKSB2YWx1ZXMgaGF2ZSBhbHJlYWR5IGJlZW5cblx0Ly8gbm9ybWFsaXplZCBhdCB0aGlzIHBvaW50XG5cdHZhciBtYXRjaGVzID0gcmNzc051bS5leGVjKCB2YWx1ZSApO1xuXHRyZXR1cm4gbWF0Y2hlcyA/XG5cblx0XHQvLyBHdWFyZCBhZ2FpbnN0IHVuZGVmaW5lZCBcInN1YnRyYWN0XCIsIGUuZy4sIHdoZW4gdXNlZCBhcyBpbiBjc3NIb29rc1xuXHRcdE1hdGgubWF4KCAwLCBtYXRjaGVzWyAyIF0gLSAoIHN1YnRyYWN0IHx8IDAgKSApICsgKCBtYXRjaGVzWyAzIF0gfHwgXCJweFwiICkgOlxuXHRcdHZhbHVlO1xufVxuXG5mdW5jdGlvbiBib3hNb2RlbEFkanVzdG1lbnQoIGVsZW0sIGRpbWVuc2lvbiwgYm94LCBpc0JvcmRlckJveCwgc3R5bGVzLCBjb21wdXRlZFZhbCApIHtcblx0dmFyIGkgPSBkaW1lbnNpb24gPT09IFwid2lkdGhcIiA/IDEgOiAwLFxuXHRcdGV4dHJhID0gMCxcblx0XHRkZWx0YSA9IDAsXG5cdFx0bWFyZ2luRGVsdGEgPSAwO1xuXG5cdC8vIEFkanVzdG1lbnQgbWF5IG5vdCBiZSBuZWNlc3Nhcnlcblx0aWYgKCBib3ggPT09ICggaXNCb3JkZXJCb3ggPyBcImJvcmRlclwiIDogXCJjb250ZW50XCIgKSApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGZvciAoIDsgaSA8IDQ7IGkgKz0gMiApIHtcblxuXHRcdC8vIEJvdGggYm94IG1vZGVscyBleGNsdWRlIG1hcmdpblxuXHRcdC8vIENvdW50IG1hcmdpbiBkZWx0YSBzZXBhcmF0ZWx5IHRvIG9ubHkgYWRkIGl0IGFmdGVyIHNjcm9sbCBndXR0ZXIgYWRqdXN0bWVudC5cblx0XHQvLyBUaGlzIGlzIG5lZWRlZCB0byBtYWtlIG5lZ2F0aXZlIG1hcmdpbnMgd29yayB3aXRoIGBvdXRlckhlaWdodCggdHJ1ZSApYCAoZ2gtMzk4MikuXG5cdFx0aWYgKCBib3ggPT09IFwibWFyZ2luXCIgKSB7XG5cdFx0XHRtYXJnaW5EZWx0YSArPSBqUXVlcnkuY3NzKCBlbGVtLCBib3ggKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgd2UgZ2V0IGhlcmUgd2l0aCBhIGNvbnRlbnQtYm94LCB3ZSdyZSBzZWVraW5nIFwicGFkZGluZ1wiIG9yIFwiYm9yZGVyXCIgb3IgXCJtYXJnaW5cIlxuXHRcdGlmICggIWlzQm9yZGVyQm94ICkge1xuXG5cdFx0XHQvLyBBZGQgcGFkZGluZ1xuXHRcdFx0ZGVsdGEgKz0galF1ZXJ5LmNzcyggZWxlbSwgXCJwYWRkaW5nXCIgKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XG5cblx0XHRcdC8vIEZvciBcImJvcmRlclwiIG9yIFwibWFyZ2luXCIsIGFkZCBib3JkZXJcblx0XHRcdGlmICggYm94ICE9PSBcInBhZGRpbmdcIiApIHtcblx0XHRcdFx0ZGVsdGEgKz0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFsgaSBdICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMgKTtcblxuXHRcdFx0Ly8gQnV0IHN0aWxsIGtlZXAgdHJhY2sgb2YgaXQgb3RoZXJ3aXNlXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRleHRyYSArPSBqUXVlcnkuY3NzKCBlbGVtLCBcImJvcmRlclwiICsgY3NzRXhwYW5kWyBpIF0gKyBcIldpZHRoXCIsIHRydWUsIHN0eWxlcyApO1xuXHRcdFx0fVxuXG5cdFx0Ly8gSWYgd2UgZ2V0IGhlcmUgd2l0aCBhIGJvcmRlci1ib3ggKGNvbnRlbnQgKyBwYWRkaW5nICsgYm9yZGVyKSwgd2UncmUgc2Vla2luZyBcImNvbnRlbnRcIiBvclxuXHRcdC8vIFwicGFkZGluZ1wiIG9yIFwibWFyZ2luXCJcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBGb3IgXCJjb250ZW50XCIsIHN1YnRyYWN0IHBhZGRpbmdcblx0XHRcdGlmICggYm94ID09PSBcImNvbnRlbnRcIiApIHtcblx0XHRcdFx0ZGVsdGEgLT0galF1ZXJ5LmNzcyggZWxlbSwgXCJwYWRkaW5nXCIgKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZvciBcImNvbnRlbnRcIiBvciBcInBhZGRpbmdcIiwgc3VidHJhY3QgYm9yZGVyXG5cdFx0XHRpZiAoIGJveCAhPT0gXCJtYXJnaW5cIiApIHtcblx0XHRcdFx0ZGVsdGEgLT0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFsgaSBdICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBBY2NvdW50IGZvciBwb3NpdGl2ZSBjb250ZW50LWJveCBzY3JvbGwgZ3V0dGVyIHdoZW4gcmVxdWVzdGVkIGJ5IHByb3ZpZGluZyBjb21wdXRlZFZhbFxuXHRpZiAoICFpc0JvcmRlckJveCAmJiBjb21wdXRlZFZhbCA+PSAwICkge1xuXG5cdFx0Ly8gb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGlzIGEgcm91bmRlZCBzdW0gb2YgY29udGVudCwgcGFkZGluZywgc2Nyb2xsIGd1dHRlciwgYW5kIGJvcmRlclxuXHRcdC8vIEFzc3VtaW5nIGludGVnZXIgc2Nyb2xsIGd1dHRlciwgc3VidHJhY3QgdGhlIHJlc3QgYW5kIHJvdW5kIGRvd25cblx0XHRkZWx0YSArPSBNYXRoLm1heCggMCwgTWF0aC5jZWlsKFxuXHRcdFx0ZWxlbVsgXCJvZmZzZXRcIiArIGRpbWVuc2lvblsgMCBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoIDEgKSBdIC1cblx0XHRcdGNvbXB1dGVkVmFsIC1cblx0XHRcdGRlbHRhIC1cblx0XHRcdGV4dHJhIC1cblx0XHRcdDAuNVxuXG5cdFx0Ly8gSWYgb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGlzIHVua25vd24sIHRoZW4gd2UgY2FuJ3QgZGV0ZXJtaW5lIGNvbnRlbnQtYm94IHNjcm9sbCBndXR0ZXJcblx0XHQvLyBVc2UgYW4gZXhwbGljaXQgemVybyB0byBhdm9pZCBOYU4gKGdoLTM5NjQpXG5cdFx0KSApIHx8IDA7XG5cdH1cblxuXHRyZXR1cm4gZGVsdGEgKyBtYXJnaW5EZWx0YTtcbn1cblxuZnVuY3Rpb24gZ2V0V2lkdGhPckhlaWdodCggZWxlbSwgZGltZW5zaW9uLCBleHRyYSApIHtcblxuXHQvLyBTdGFydCB3aXRoIGNvbXB1dGVkIHN0eWxlXG5cdHZhciBzdHlsZXMgPSBnZXRTdHlsZXMoIGVsZW0gKSxcblxuXHRcdC8vIFRvIGF2b2lkIGZvcmNpbmcgYSByZWZsb3csIG9ubHkgZmV0Y2ggYm94U2l6aW5nIGlmIHdlIG5lZWQgaXQgKGdoLTQzMjIpLlxuXHRcdC8vIEZha2UgY29udGVudC1ib3ggdW50aWwgd2Uga25vdyBpdCdzIG5lZWRlZCB0byBrbm93IHRoZSB0cnVlIHZhbHVlLlxuXHRcdGJveFNpemluZ05lZWRlZCA9IGlzSUUgfHwgZXh0cmEsXG5cdFx0aXNCb3JkZXJCb3ggPSBib3hTaXppbmdOZWVkZWQgJiZcblx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIFwiYm94U2l6aW5nXCIsIGZhbHNlLCBzdHlsZXMgKSA9PT0gXCJib3JkZXItYm94XCIsXG5cdFx0dmFsdWVJc0JvcmRlckJveCA9IGlzQm9yZGVyQm94LFxuXG5cdFx0dmFsID0gY3VyQ1NTKCBlbGVtLCBkaW1lbnNpb24sIHN0eWxlcyApLFxuXHRcdG9mZnNldFByb3AgPSBcIm9mZnNldFwiICsgZGltZW5zaW9uWyAwIF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSggMSApO1xuXG5cdC8vIFJldHVybiBhIGNvbmZvdW5kaW5nIG5vbi1waXhlbCB2YWx1ZSBvciBmZWlnbiBpZ25vcmFuY2UsIGFzIGFwcHJvcHJpYXRlLlxuXHRpZiAoIHJudW1ub25weC50ZXN0KCB2YWwgKSApIHtcblx0XHRpZiAoICFleHRyYSApIHtcblx0XHRcdHJldHVybiB2YWw7XG5cdFx0fVxuXHRcdHZhbCA9IFwiYXV0b1wiO1xuXHR9XG5cblxuXHRpZiAoIChcblxuXHRcdC8vIEZhbGwgYmFjayB0byBvZmZzZXRXaWR0aC9vZmZzZXRIZWlnaHQgd2hlbiB2YWx1ZSBpcyBcImF1dG9cIlxuXHRcdC8vIFRoaXMgaGFwcGVucyBmb3IgaW5saW5lIGVsZW1lbnRzIHdpdGggbm8gZXhwbGljaXQgc2V0dGluZyAoZ2gtMzU3MSlcblx0XHR2YWwgPT09IFwiYXV0b1wiIHx8XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTErXG5cdFx0Ly8gVXNlIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBmb3Igd2hlbiBib3ggc2l6aW5nIGlzIHVucmVsaWFibGUuXG5cdFx0Ly8gSW4gdGhvc2UgY2FzZXMsIHRoZSBjb21wdXRlZCB2YWx1ZSBjYW4gYmUgdHJ1c3RlZCB0byBiZSBib3JkZXItYm94LlxuXHRcdCggaXNJRSAmJiBpc0JvcmRlckJveCApIHx8XG5cblx0XHQvLyBTdXBwb3J0OiBJRSAxMCAtIDExK1xuXHRcdC8vIElFIG1pc3JlcG9ydHMgYGdldENvbXB1dGVkU3R5bGVgIG9mIHRhYmxlIHJvd3Mgd2l0aCB3aWR0aC9oZWlnaHRcblx0XHQvLyBzZXQgaW4gQ1NTIHdoaWxlIGBvZmZzZXQqYCBwcm9wZXJ0aWVzIHJlcG9ydCBjb3JyZWN0IHZhbHVlcy5cblx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDcwK1xuXHRcdC8vIEZpcmVmb3ggaW5jbHVkZXMgYm9yZGVyIHdpZHRoc1xuXHRcdC8vIGluIGNvbXB1dGVkIGRpbWVuc2lvbnMgZm9yIHRhYmxlIHJvd3MuIChnaC00NTI5KVxuXHRcdCggIXN1cHBvcnQucmVsaWFibGVUckRpbWVuc2lvbnMoKSAmJiBub2RlTmFtZSggZWxlbSwgXCJ0clwiICkgKSApICYmXG5cblx0XHQvLyBNYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSAmIGNvbm5lY3RlZFxuXHRcdGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggKSB7XG5cblx0XHRpc0JvcmRlckJveCA9IGpRdWVyeS5jc3MoIGVsZW0sIFwiYm94U2l6aW5nXCIsIGZhbHNlLCBzdHlsZXMgKSA9PT0gXCJib3JkZXItYm94XCI7XG5cblx0XHQvLyBXaGVyZSBhdmFpbGFibGUsIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBhcHByb3hpbWF0ZSBib3JkZXIgYm94IGRpbWVuc2lvbnMuXG5cdFx0Ly8gV2hlcmUgbm90IGF2YWlsYWJsZSAoZS5nLiwgU1ZHKSwgYXNzdW1lIHVucmVsaWFibGUgYm94LXNpemluZyBhbmQgaW50ZXJwcmV0IHRoZVxuXHRcdC8vIHJldHJpZXZlZCB2YWx1ZSBhcyBhIGNvbnRlbnQgYm94IGRpbWVuc2lvbi5cblx0XHR2YWx1ZUlzQm9yZGVyQm94ID0gb2Zmc2V0UHJvcCBpbiBlbGVtO1xuXHRcdGlmICggdmFsdWVJc0JvcmRlckJveCApIHtcblx0XHRcdHZhbCA9IGVsZW1bIG9mZnNldFByb3AgXTtcblx0XHR9XG5cdH1cblxuXHQvLyBOb3JtYWxpemUgXCJcIiBhbmQgYXV0b1xuXHR2YWwgPSBwYXJzZUZsb2F0KCB2YWwgKSB8fCAwO1xuXG5cdC8vIEFkanVzdCBmb3IgdGhlIGVsZW1lbnQncyBib3ggbW9kZWxcblx0cmV0dXJuICggdmFsICtcblx0XHRib3hNb2RlbEFkanVzdG1lbnQoXG5cdFx0XHRlbGVtLFxuXHRcdFx0ZGltZW5zaW9uLFxuXHRcdFx0ZXh0cmEgfHwgKCBpc0JvcmRlckJveCA/IFwiYm9yZGVyXCIgOiBcImNvbnRlbnRcIiApLFxuXHRcdFx0dmFsdWVJc0JvcmRlckJveCxcblx0XHRcdHN0eWxlcyxcblxuXHRcdFx0Ly8gUHJvdmlkZSB0aGUgY3VycmVudCBjb21wdXRlZCBzaXplIHRvIHJlcXVlc3Qgc2Nyb2xsIGd1dHRlciBjYWxjdWxhdGlvbiAoZ2gtMzU4OSlcblx0XHRcdHZhbFxuXHRcdClcblx0KSArIFwicHhcIjtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdC8vIEFkZCBpbiBzdHlsZSBwcm9wZXJ0eSBob29rcyBmb3Igb3ZlcnJpZGluZyB0aGUgZGVmYXVsdFxuXHQvLyBiZWhhdmlvciBvZiBnZXR0aW5nIGFuZCBzZXR0aW5nIGEgc3R5bGUgcHJvcGVydHlcblx0Y3NzSG9va3M6IHt9LFxuXG5cdC8vIEdldCBhbmQgc2V0IHRoZSBzdHlsZSBwcm9wZXJ0eSBvbiBhIERPTSBOb2RlXG5cdHN0eWxlOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUsIGV4dHJhICkge1xuXG5cdFx0Ly8gRG9uJ3Qgc2V0IHN0eWxlcyBvbiB0ZXh0IGFuZCBjb21tZW50IG5vZGVzXG5cdFx0aWYgKCAhZWxlbSB8fCBlbGVtLm5vZGVUeXBlID09PSAzIHx8IGVsZW0ubm9kZVR5cGUgPT09IDggfHwgIWVsZW0uc3R5bGUgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lXG5cdFx0dmFyIHJldCwgdHlwZSwgaG9va3MsXG5cdFx0XHRvcmlnTmFtZSA9IGNzc0NhbWVsQ2FzZSggbmFtZSApLFxuXHRcdFx0aXNDdXN0b21Qcm9wID0gcmN1c3RvbVByb3AudGVzdCggbmFtZSApLFxuXHRcdFx0c3R5bGUgPSBlbGVtLnN0eWxlO1xuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lLiBXZSBkb24ndFxuXHRcdC8vIHdhbnQgdG8gcXVlcnkgdGhlIHZhbHVlIGlmIGl0IGlzIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eVxuXHRcdC8vIHNpbmNlIHRoZXkgYXJlIHVzZXItZGVmaW5lZC5cblx0XHRpZiAoICFpc0N1c3RvbVByb3AgKSB7XG5cdFx0XHRuYW1lID0gZmluYWxQcm9wTmFtZSggb3JpZ05hbWUgKTtcblx0XHR9XG5cblx0XHQvLyBHZXRzIGhvb2sgZm9yIHRoZSBwcmVmaXhlZCB2ZXJzaW9uLCB0aGVuIHVucHJlZml4ZWQgdmVyc2lvblxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF0gfHwgalF1ZXJ5LmNzc0hvb2tzWyBvcmlnTmFtZSBdO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgd2UncmUgc2V0dGluZyBhIHZhbHVlXG5cdFx0aWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0dHlwZSA9IHR5cGVvZiB2YWx1ZTtcblxuXHRcdFx0Ly8gQ29udmVydCBcIis9XCIgb3IgXCItPVwiIHRvIHJlbGF0aXZlIG51bWJlcnMgKHRyYWMtNzM0NSlcblx0XHRcdGlmICggdHlwZSA9PT0gXCJzdHJpbmdcIiAmJiAoIHJldCA9IHJjc3NOdW0uZXhlYyggdmFsdWUgKSApICYmIHJldFsgMSBdICkge1xuXHRcdFx0XHR2YWx1ZSA9IGFkanVzdENTUyggZWxlbSwgbmFtZSwgcmV0ICk7XG5cblx0XHRcdFx0Ly8gRml4ZXMgYnVnIHRyYWMtOTIzN1xuXHRcdFx0XHR0eXBlID0gXCJudW1iZXJcIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTWFrZSBzdXJlIHRoYXQgbnVsbCBhbmQgTmFOIHZhbHVlcyBhcmVuJ3Qgc2V0ICh0cmFjLTcxMTYpXG5cdFx0XHRpZiAoIHZhbHVlID09IG51bGwgfHwgdmFsdWUgIT09IHZhbHVlICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZSB2YWx1ZSBpcyBhIG51bWJlciwgYWRkIGBweGAgZm9yIGNlcnRhaW4gQ1NTIHByb3BlcnRpZXNcblx0XHRcdGlmICggdHlwZSA9PT0gXCJudW1iZXJcIiApIHtcblx0XHRcdFx0dmFsdWUgKz0gcmV0ICYmIHJldFsgMyBdIHx8ICggaXNBdXRvUHgoIG9yaWdOYW1lICkgPyBcInB4XCIgOiBcIlwiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExK1xuXHRcdFx0Ly8gYmFja2dyb3VuZC0qIHByb3BzIG9mIGEgY2xvbmVkIGVsZW1lbnQgYWZmZWN0IHRoZSBzb3VyY2UgZWxlbWVudCAodHJhYy04OTA4KVxuXHRcdFx0aWYgKCBpc0lFICYmIHZhbHVlID09PSBcIlwiICYmIG5hbWUuaW5kZXhPZiggXCJiYWNrZ3JvdW5kXCIgKSA9PT0gMCApIHtcblx0XHRcdFx0c3R5bGVbIG5hbWUgXSA9IFwiaW5oZXJpdFwiO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkLCB1c2UgdGhhdCB2YWx1ZSwgb3RoZXJ3aXNlIGp1c3Qgc2V0IHRoZSBzcGVjaWZpZWQgdmFsdWVcblx0XHRcdGlmICggIWhvb2tzIHx8ICEoIFwic2V0XCIgaW4gaG9va3MgKSB8fFxuXHRcdFx0XHQoIHZhbHVlID0gaG9va3Muc2V0KCBlbGVtLCB2YWx1ZSwgZXh0cmEgKSApICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0aWYgKCBpc0N1c3RvbVByb3AgKSB7XG5cdFx0XHRcdFx0c3R5bGUuc2V0UHJvcGVydHkoIG5hbWUsIHZhbHVlICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3R5bGVbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkIGdldCB0aGUgbm9uLWNvbXB1dGVkIHZhbHVlIGZyb20gdGhlcmVcblx0XHRcdGlmICggaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJlxuXHRcdFx0XHQoIHJldCA9IGhvb2tzLmdldCggZWxlbSwgZmFsc2UsIGV4dHJhICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE90aGVyd2lzZSBqdXN0IGdldCB0aGUgdmFsdWUgZnJvbSB0aGUgc3R5bGUgb2JqZWN0XG5cdFx0XHRyZXR1cm4gc3R5bGVbIG5hbWUgXTtcblx0XHR9XG5cdH0sXG5cblx0Y3NzOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgZXh0cmEsIHN0eWxlcyApIHtcblx0XHR2YXIgdmFsLCBudW0sIGhvb2tzLFxuXHRcdFx0b3JpZ05hbWUgPSBjc3NDYW1lbENhc2UoIG5hbWUgKSxcblx0XHRcdGlzQ3VzdG9tUHJvcCA9IHJjdXN0b21Qcm9wLnRlc3QoIG5hbWUgKTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHdlJ3JlIHdvcmtpbmcgd2l0aCB0aGUgcmlnaHQgbmFtZS4gV2UgZG9uJ3Rcblx0XHQvLyB3YW50IHRvIG1vZGlmeSB0aGUgdmFsdWUgaWYgaXQgaXMgYSBDU1MgY3VzdG9tIHByb3BlcnR5XG5cdFx0Ly8gc2luY2UgdGhleSBhcmUgdXNlci1kZWZpbmVkLlxuXHRcdGlmICggIWlzQ3VzdG9tUHJvcCApIHtcblx0XHRcdG5hbWUgPSBmaW5hbFByb3BOYW1lKCBvcmlnTmFtZSApO1xuXHRcdH1cblxuXHRcdC8vIFRyeSBwcmVmaXhlZCBuYW1lIGZvbGxvd2VkIGJ5IHRoZSB1bnByZWZpeGVkIG5hbWVcblx0XHRob29rcyA9IGpRdWVyeS5jc3NIb29rc1sgbmFtZSBdIHx8IGpRdWVyeS5jc3NIb29rc1sgb3JpZ05hbWUgXTtcblxuXHRcdC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQgZ2V0IHRoZSBjb21wdXRlZCB2YWx1ZSBmcm9tIHRoZXJlXG5cdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICkge1xuXHRcdFx0dmFsID0gaG9va3MuZ2V0KCBlbGVtLCB0cnVlLCBleHRyYSApO1xuXHRcdH1cblxuXHRcdC8vIE90aGVyd2lzZSwgaWYgYSB3YXkgdG8gZ2V0IHRoZSBjb21wdXRlZCB2YWx1ZSBleGlzdHMsIHVzZSB0aGF0XG5cdFx0aWYgKCB2YWwgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdHZhbCA9IGN1ckNTUyggZWxlbSwgbmFtZSwgc3R5bGVzICk7XG5cdFx0fVxuXG5cdFx0Ly8gQ29udmVydCBcIm5vcm1hbFwiIHRvIGNvbXB1dGVkIHZhbHVlXG5cdFx0aWYgKCB2YWwgPT09IFwibm9ybWFsXCIgJiYgbmFtZSBpbiBjc3NOb3JtYWxUcmFuc2Zvcm0gKSB7XG5cdFx0XHR2YWwgPSBjc3NOb3JtYWxUcmFuc2Zvcm1bIG5hbWUgXTtcblx0XHR9XG5cblx0XHQvLyBNYWtlIG51bWVyaWMgaWYgZm9yY2VkIG9yIGEgcXVhbGlmaWVyIHdhcyBwcm92aWRlZCBhbmQgdmFsIGxvb2tzIG51bWVyaWNcblx0XHRpZiAoIGV4dHJhID09PSBcIlwiIHx8IGV4dHJhICkge1xuXHRcdFx0bnVtID0gcGFyc2VGbG9hdCggdmFsICk7XG5cdFx0XHRyZXR1cm4gZXh0cmEgPT09IHRydWUgfHwgaXNGaW5pdGUoIG51bSApID8gbnVtIHx8IDAgOiB2YWw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbDtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCggWyBcImhlaWdodFwiLCBcIndpZHRoXCIgXSwgZnVuY3Rpb24oIF9pLCBkaW1lbnNpb24gKSB7XG5cdGpRdWVyeS5jc3NIb29rc1sgZGltZW5zaW9uIF0gPSB7XG5cdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQsIGV4dHJhICkge1xuXHRcdFx0aWYgKCBjb21wdXRlZCApIHtcblxuXHRcdFx0XHQvLyBDZXJ0YWluIGVsZW1lbnRzIGNhbiBoYXZlIGRpbWVuc2lvbiBpbmZvIGlmIHdlIGludmlzaWJseSBzaG93IHRoZW1cblx0XHRcdFx0Ly8gYnV0IGl0IG11c3QgaGF2ZSBhIGN1cnJlbnQgZGlzcGxheSBzdHlsZSB0aGF0IHdvdWxkIGJlbmVmaXRcblx0XHRcdFx0cmV0dXJuIHJkaXNwbGF5c3dhcC50ZXN0KCBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApICkgJiZcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFNhZmFyaSA8PTggLSAxMissIENocm9tZSA8PTczK1xuXHRcdFx0XHRcdC8vIFRhYmxlIGNvbHVtbnMgaW4gV2ViS2l0L0JsaW5rIGhhdmUgbm9uLXplcm8gb2Zmc2V0V2lkdGggJiB6ZXJvXG5cdFx0XHRcdFx0Ly8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggdW5sZXNzIGRpc3BsYXkgaXMgY2hhbmdlZC5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTExK1xuXHRcdFx0XHRcdC8vIFJ1bm5pbmcgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGEgZGlzY29ubmVjdGVkIG5vZGVcblx0XHRcdFx0XHQvLyBpbiBJRSB0aHJvd3MgYW4gZXJyb3IuXG5cdFx0XHRcdFx0KCAhZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCB8fCAhZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCApID9cblx0XHRcdFx0XHRzd2FwKCBlbGVtLCBjc3NTaG93LCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHJldHVybiBnZXRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBkaW1lbnNpb24sIGV4dHJhICk7XG5cdFx0XHRcdFx0fSApIDpcblx0XHRcdFx0XHRnZXRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBkaW1lbnNpb24sIGV4dHJhICk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlLCBleHRyYSApIHtcblx0XHRcdHZhciBtYXRjaGVzLFxuXHRcdFx0XHRzdHlsZXMgPSBnZXRTdHlsZXMoIGVsZW0gKSxcblxuXHRcdFx0XHQvLyBUbyBhdm9pZCBmb3JjaW5nIGEgcmVmbG93LCBvbmx5IGZldGNoIGJveFNpemluZyBpZiB3ZSBuZWVkIGl0IChnaC0zOTkxKVxuXHRcdFx0XHRpc0JvcmRlckJveCA9IGV4dHJhICYmXG5cdFx0XHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgXCJib3hTaXppbmdcIiwgZmFsc2UsIHN0eWxlcyApID09PSBcImJvcmRlci1ib3hcIixcblx0XHRcdFx0c3VidHJhY3QgPSBleHRyYSA/XG5cdFx0XHRcdFx0Ym94TW9kZWxBZGp1c3RtZW50KFxuXHRcdFx0XHRcdFx0ZWxlbSxcblx0XHRcdFx0XHRcdGRpbWVuc2lvbixcblx0XHRcdFx0XHRcdGV4dHJhLFxuXHRcdFx0XHRcdFx0aXNCb3JkZXJCb3gsXG5cdFx0XHRcdFx0XHRzdHlsZXNcblx0XHRcdFx0XHQpIDpcblx0XHRcdFx0XHQwO1xuXG5cdFx0XHQvLyBDb252ZXJ0IHRvIHBpeGVscyBpZiB2YWx1ZSBhZGp1c3RtZW50IGlzIG5lZWRlZFxuXHRcdFx0aWYgKCBzdWJ0cmFjdCAmJiAoIG1hdGNoZXMgPSByY3NzTnVtLmV4ZWMoIHZhbHVlICkgKSAmJlxuXHRcdFx0XHQoIG1hdGNoZXNbIDMgXSB8fCBcInB4XCIgKSAhPT0gXCJweFwiICkge1xuXG5cdFx0XHRcdGVsZW0uc3R5bGVbIGRpbWVuc2lvbiBdID0gdmFsdWU7XG5cdFx0XHRcdHZhbHVlID0galF1ZXJ5LmNzcyggZWxlbSwgZGltZW5zaW9uICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZXRQb3NpdGl2ZU51bWJlciggZWxlbSwgdmFsdWUsIHN1YnRyYWN0ICk7XG5cdFx0fVxuXHR9O1xufSApO1xuXG4vLyBUaGVzZSBob29rcyBhcmUgdXNlZCBieSBhbmltYXRlIHRvIGV4cGFuZCBwcm9wZXJ0aWVzXG5qUXVlcnkuZWFjaCgge1xuXHRtYXJnaW46IFwiXCIsXG5cdHBhZGRpbmc6IFwiXCIsXG5cdGJvcmRlcjogXCJXaWR0aFwiXG59LCBmdW5jdGlvbiggcHJlZml4LCBzdWZmaXggKSB7XG5cdGpRdWVyeS5jc3NIb29rc1sgcHJlZml4ICsgc3VmZml4IF0gPSB7XG5cdFx0ZXhwYW5kOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHR2YXIgaSA9IDAsXG5cdFx0XHRcdGV4cGFuZGVkID0ge30sXG5cblx0XHRcdFx0Ly8gQXNzdW1lcyBhIHNpbmdsZSBudW1iZXIgaWYgbm90IGEgc3RyaW5nXG5cdFx0XHRcdHBhcnRzID0gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiID8gdmFsdWUuc3BsaXQoIFwiIFwiICkgOiBbIHZhbHVlIF07XG5cblx0XHRcdGZvciAoIDsgaSA8IDQ7IGkrKyApIHtcblx0XHRcdFx0ZXhwYW5kZWRbIHByZWZpeCArIGNzc0V4cGFuZFsgaSBdICsgc3VmZml4IF0gPVxuXHRcdFx0XHRcdHBhcnRzWyBpIF0gfHwgcGFydHNbIGkgLSAyIF0gfHwgcGFydHNbIDAgXTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGV4cGFuZGVkO1xuXHRcdH1cblx0fTtcblxuXHRpZiAoIHByZWZpeCAhPT0gXCJtYXJnaW5cIiApIHtcblx0XHRqUXVlcnkuY3NzSG9va3NbIHByZWZpeCArIHN1ZmZpeCBdLnNldCA9IHNldFBvc2l0aXZlTnVtYmVyO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0Y3NzOiBmdW5jdGlvbiggbmFtZSwgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlICkge1xuXHRcdFx0dmFyIHN0eWxlcywgbGVuLFxuXHRcdFx0XHRtYXAgPSB7fSxcblx0XHRcdFx0aSA9IDA7XG5cblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggbmFtZSApICkge1xuXHRcdFx0XHRzdHlsZXMgPSBnZXRTdHlsZXMoIGVsZW0gKTtcblx0XHRcdFx0bGVuID0gbmFtZS5sZW5ndGg7XG5cblx0XHRcdFx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdFx0bWFwWyBuYW1lWyBpIF0gXSA9IGpRdWVyeS5jc3MoIGVsZW0sIG5hbWVbIGkgXSwgZmFsc2UsIHN0eWxlcyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIG1hcDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgP1xuXHRcdFx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIG5hbWUsIHZhbHVlICkgOlxuXHRcdFx0XHRqUXVlcnkuY3NzKCBlbGVtLCBuYW1lICk7XG5cdFx0fSwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XG5cdH1cbn0gKTtcblxuZnVuY3Rpb24gVHdlZW4oIGVsZW0sIG9wdGlvbnMsIHByb3AsIGVuZCwgZWFzaW5nICkge1xuXHRyZXR1cm4gbmV3IFR3ZWVuLnByb3RvdHlwZS5pbml0KCBlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZyApO1xufVxualF1ZXJ5LlR3ZWVuID0gVHdlZW47XG5cblR3ZWVuLnByb3RvdHlwZSA9IHtcblx0Y29uc3RydWN0b3I6IFR3ZWVuLFxuXHRpbml0OiBmdW5jdGlvbiggZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcsIHVuaXQgKSB7XG5cdFx0dGhpcy5lbGVtID0gZWxlbTtcblx0XHR0aGlzLnByb3AgPSBwcm9wO1xuXHRcdHRoaXMuZWFzaW5nID0gZWFzaW5nIHx8IGpRdWVyeS5lYXNpbmcuX2RlZmF1bHQ7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLnN0YXJ0ID0gdGhpcy5ub3cgPSB0aGlzLmN1cigpO1xuXHRcdHRoaXMuZW5kID0gZW5kO1xuXHRcdHRoaXMudW5pdCA9IHVuaXQgfHwgKCBpc0F1dG9QeCggcHJvcCApID8gXCJweFwiIDogXCJcIiApO1xuXHR9LFxuXHRjdXI6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBob29rcyA9IFR3ZWVuLnByb3BIb29rc1sgdGhpcy5wcm9wIF07XG5cblx0XHRyZXR1cm4gaG9va3MgJiYgaG9va3MuZ2V0ID9cblx0XHRcdGhvb2tzLmdldCggdGhpcyApIDpcblx0XHRcdFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5nZXQoIHRoaXMgKTtcblx0fSxcblx0cnVuOiBmdW5jdGlvbiggcGVyY2VudCApIHtcblx0XHR2YXIgZWFzZWQsXG5cdFx0XHRob29rcyA9IFR3ZWVuLnByb3BIb29rc1sgdGhpcy5wcm9wIF07XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5kdXJhdGlvbiApIHtcblx0XHRcdHRoaXMucG9zID0gZWFzZWQgPSBqUXVlcnkuZWFzaW5nWyB0aGlzLmVhc2luZyBdKFxuXHRcdFx0XHRwZXJjZW50LCB0aGlzLm9wdGlvbnMuZHVyYXRpb24gKiBwZXJjZW50LCAwLCAxLCB0aGlzLm9wdGlvbnMuZHVyYXRpb25cblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucG9zID0gZWFzZWQgPSBwZXJjZW50O1xuXHRcdH1cblx0XHR0aGlzLm5vdyA9ICggdGhpcy5lbmQgLSB0aGlzLnN0YXJ0ICkgKiBlYXNlZCArIHRoaXMuc3RhcnQ7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5zdGVwICkge1xuXHRcdFx0dGhpcy5vcHRpb25zLnN0ZXAuY2FsbCggdGhpcy5lbGVtLCB0aGlzLm5vdywgdGhpcyApO1xuXHRcdH1cblxuXHRcdGlmICggaG9va3MgJiYgaG9va3Muc2V0ICkge1xuXHRcdFx0aG9va3Muc2V0KCB0aGlzICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5zZXQoIHRoaXMgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG5cblR3ZWVuLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZSA9IFR3ZWVuLnByb3RvdHlwZTtcblxuVHdlZW4ucHJvcEhvb2tzID0ge1xuXHRfZGVmYXVsdDoge1xuXHRcdGdldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXHRcdFx0dmFyIHJlc3VsdDtcblxuXHRcdFx0Ly8gVXNlIGEgcHJvcGVydHkgb24gdGhlIGVsZW1lbnQgZGlyZWN0bHkgd2hlbiBpdCBpcyBub3QgYSBET00gZWxlbWVudCxcblx0XHRcdC8vIG9yIHdoZW4gdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc3R5bGUgcHJvcGVydHkgdGhhdCBleGlzdHMuXG5cdFx0XHRpZiAoIHR3ZWVuLmVsZW0ubm9kZVR5cGUgIT09IDEgfHxcblx0XHRcdFx0dHdlZW4uZWxlbVsgdHdlZW4ucHJvcCBdICE9IG51bGwgJiYgdHdlZW4uZWxlbS5zdHlsZVsgdHdlZW4ucHJvcCBdID09IG51bGwgKSB7XG5cdFx0XHRcdHJldHVybiB0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF07XG5cdFx0XHR9XG5cblx0XHRcdC8vIFBhc3NpbmcgYW4gZW1wdHkgc3RyaW5nIGFzIGEgM3JkIHBhcmFtZXRlciB0byAuY3NzIHdpbGwgYXV0b21hdGljYWxseVxuXHRcdFx0Ly8gYXR0ZW1wdCBhIHBhcnNlRmxvYXQgYW5kIGZhbGxiYWNrIHRvIGEgc3RyaW5nIGlmIHRoZSBwYXJzZSBmYWlscy5cblx0XHRcdC8vIFNpbXBsZSB2YWx1ZXMgc3VjaCBhcyBcIjEwcHhcIiBhcmUgcGFyc2VkIHRvIEZsb2F0O1xuXHRcdFx0Ly8gY29tcGxleCB2YWx1ZXMgc3VjaCBhcyBcInJvdGF0ZSgxcmFkKVwiIGFyZSByZXR1cm5lZCBhcy1pcy5cblx0XHRcdHJlc3VsdCA9IGpRdWVyeS5jc3MoIHR3ZWVuLmVsZW0sIHR3ZWVuLnByb3AsIFwiXCIgKTtcblxuXHRcdFx0Ly8gRW1wdHkgc3RyaW5ncywgbnVsbCwgdW5kZWZpbmVkIGFuZCBcImF1dG9cIiBhcmUgY29udmVydGVkIHRvIDAuXG5cdFx0XHRyZXR1cm4gIXJlc3VsdCB8fCByZXN1bHQgPT09IFwiYXV0b1wiID8gMCA6IHJlc3VsdDtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXG5cdFx0XHQvLyBVc2Ugc3RlcCBob29rIGZvciBiYWNrIGNvbXBhdC5cblx0XHRcdC8vIFVzZSBjc3NIb29rIGlmIGl0cyB0aGVyZS5cblx0XHRcdC8vIFVzZSAuc3R5bGUgaWYgYXZhaWxhYmxlIGFuZCB1c2UgcGxhaW4gcHJvcGVydGllcyB3aGVyZSBhdmFpbGFibGUuXG5cdFx0XHRpZiAoIGpRdWVyeS5meC5zdGVwWyB0d2Vlbi5wcm9wIF0gKSB7XG5cdFx0XHRcdGpRdWVyeS5meC5zdGVwWyB0d2Vlbi5wcm9wIF0oIHR3ZWVuICk7XG5cdFx0XHR9IGVsc2UgaWYgKCB0d2Vlbi5lbGVtLm5vZGVUeXBlID09PSAxICYmIChcblx0XHRcdFx0alF1ZXJ5LmNzc0hvb2tzWyB0d2Vlbi5wcm9wIF0gfHxcblx0XHRcdFx0XHR0d2Vlbi5lbGVtLnN0eWxlWyBmaW5hbFByb3BOYW1lKCB0d2Vlbi5wcm9wICkgXSAhPSBudWxsICkgKSB7XG5cdFx0XHRcdGpRdWVyeS5zdHlsZSggdHdlZW4uZWxlbSwgdHdlZW4ucHJvcCwgdHdlZW4ubm93ICsgdHdlZW4udW5pdCApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dHdlZW4uZWxlbVsgdHdlZW4ucHJvcCBdID0gdHdlZW4ubm93O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxualF1ZXJ5LmVhc2luZyA9IHtcblx0bGluZWFyOiBmdW5jdGlvbiggcCApIHtcblx0XHRyZXR1cm4gcDtcblx0fSxcblx0c3dpbmc6IGZ1bmN0aW9uKCBwICkge1xuXHRcdHJldHVybiAwLjUgLSBNYXRoLmNvcyggcCAqIE1hdGguUEkgKSAvIDI7XG5cdH0sXG5cdF9kZWZhdWx0OiBcInN3aW5nXCJcbn07XG5cbmpRdWVyeS5meCA9IFR3ZWVuLnByb3RvdHlwZS5pbml0O1xuXG4vLyBCYWNrIGNvbXBhdCA8MS44IGV4dGVuc2lvbiBwb2ludFxualF1ZXJ5LmZ4LnN0ZXAgPSB7fTtcblxudmFyXG5cdGZ4Tm93LCBpblByb2dyZXNzLFxuXHRyZnh0eXBlcyA9IC9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxcblx0cnJ1biA9IC9xdWV1ZUhvb2tzJC87XG5cbmZ1bmN0aW9uIHNjaGVkdWxlKCkge1xuXHRpZiAoIGluUHJvZ3Jlc3MgKSB7XG5cdFx0aWYgKCBkb2N1bWVudCQxLmhpZGRlbiA9PT0gZmFsc2UgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSApIHtcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHNjaGVkdWxlICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCBzY2hlZHVsZSwgMTMgKTtcblx0XHR9XG5cblx0XHRqUXVlcnkuZngudGljaygpO1xuXHR9XG59XG5cbi8vIEFuaW1hdGlvbnMgY3JlYXRlZCBzeW5jaHJvbm91c2x5IHdpbGwgcnVuIHN5bmNocm9ub3VzbHlcbmZ1bmN0aW9uIGNyZWF0ZUZ4Tm93KCkge1xuXHR3aW5kb3cuc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0ZnhOb3cgPSB1bmRlZmluZWQ7XG5cdH0gKTtcblx0cmV0dXJuICggZnhOb3cgPSBEYXRlLm5vdygpICk7XG59XG5cbi8vIEdlbmVyYXRlIHBhcmFtZXRlcnMgdG8gY3JlYXRlIGEgc3RhbmRhcmQgYW5pbWF0aW9uXG5mdW5jdGlvbiBnZW5GeCggdHlwZSwgaW5jbHVkZVdpZHRoICkge1xuXHR2YXIgd2hpY2gsXG5cdFx0aSA9IDAsXG5cdFx0YXR0cnMgPSB7IGhlaWdodDogdHlwZSB9O1xuXG5cdC8vIElmIHdlIGluY2x1ZGUgd2lkdGgsIHN0ZXAgdmFsdWUgaXMgMSB0byBkbyBhbGwgY3NzRXhwYW5kIHZhbHVlcyxcblx0Ly8gb3RoZXJ3aXNlIHN0ZXAgdmFsdWUgaXMgMiB0byBza2lwIG92ZXIgTGVmdCBhbmQgUmlnaHRcblx0aW5jbHVkZVdpZHRoID0gaW5jbHVkZVdpZHRoID8gMSA6IDA7XG5cdGZvciAoIDsgaSA8IDQ7IGkgKz0gMiAtIGluY2x1ZGVXaWR0aCApIHtcblx0XHR3aGljaCA9IGNzc0V4cGFuZFsgaSBdO1xuXHRcdGF0dHJzWyBcIm1hcmdpblwiICsgd2hpY2ggXSA9IGF0dHJzWyBcInBhZGRpbmdcIiArIHdoaWNoIF0gPSB0eXBlO1xuXHR9XG5cblx0aWYgKCBpbmNsdWRlV2lkdGggKSB7XG5cdFx0YXR0cnMub3BhY2l0eSA9IGF0dHJzLndpZHRoID0gdHlwZTtcblx0fVxuXG5cdHJldHVybiBhdHRycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHdlZW4oIHZhbHVlLCBwcm9wLCBhbmltYXRpb24gKSB7XG5cdHZhciB0d2Vlbixcblx0XHRjb2xsZWN0aW9uID0gKCBBbmltYXRpb24udHdlZW5lcnNbIHByb3AgXSB8fCBbXSApLmNvbmNhdCggQW5pbWF0aW9uLnR3ZWVuZXJzWyBcIipcIiBdICksXG5cdFx0aW5kZXggPSAwLFxuXHRcdGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuXHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdGlmICggKCB0d2VlbiA9IGNvbGxlY3Rpb25bIGluZGV4IF0uY2FsbCggYW5pbWF0aW9uLCBwcm9wLCB2YWx1ZSApICkgKSB7XG5cblx0XHRcdC8vIFdlJ3JlIGRvbmUgd2l0aCB0aGlzIHByb3BlcnR5XG5cdFx0XHRyZXR1cm4gdHdlZW47XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcmVmaWx0ZXIoIGVsZW0sIHByb3BzLCBvcHRzICkge1xuXHR2YXIgcHJvcCwgdmFsdWUsIHRvZ2dsZSwgaG9va3MsIG9sZGZpcmUsIHByb3BUd2VlbiwgcmVzdG9yZURpc3BsYXksIGRpc3BsYXksXG5cdFx0aXNCb3ggPSBcIndpZHRoXCIgaW4gcHJvcHMgfHwgXCJoZWlnaHRcIiBpbiBwcm9wcyxcblx0XHRhbmltID0gdGhpcyxcblx0XHRvcmlnID0ge30sXG5cdFx0c3R5bGUgPSBlbGVtLnN0eWxlLFxuXHRcdGhpZGRlbiA9IGVsZW0ubm9kZVR5cGUgJiYgaXNIaWRkZW5XaXRoaW5UcmVlKCBlbGVtICksXG5cdFx0ZGF0YVNob3cgPSBkYXRhUHJpdi5nZXQoIGVsZW0sIFwiZnhzaG93XCIgKTtcblxuXHQvLyBRdWV1ZS1za2lwcGluZyBhbmltYXRpb25zIGhpamFjayB0aGUgZnggaG9va3Ncblx0aWYgKCAhb3B0cy5xdWV1ZSApIHtcblx0XHRob29rcyA9IGpRdWVyeS5fcXVldWVIb29rcyggZWxlbSwgXCJmeFwiICk7XG5cdFx0aWYgKCBob29rcy51bnF1ZXVlZCA9PSBudWxsICkge1xuXHRcdFx0aG9va3MudW5xdWV1ZWQgPSAwO1xuXHRcdFx0b2xkZmlyZSA9IGhvb2tzLmVtcHR5LmZpcmU7XG5cdFx0XHRob29rcy5lbXB0eS5maXJlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggIWhvb2tzLnVucXVldWVkICkge1xuXHRcdFx0XHRcdG9sZGZpcmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0aG9va3MudW5xdWV1ZWQrKztcblxuXHRcdGFuaW0uYWx3YXlzKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gRW5zdXJlIHRoZSBjb21wbGV0ZSBoYW5kbGVyIGlzIGNhbGxlZCBiZWZvcmUgdGhpcyBjb21wbGV0ZXNcblx0XHRcdGFuaW0uYWx3YXlzKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aG9va3MudW5xdWV1ZWQtLTtcblx0XHRcdFx0aWYgKCAhalF1ZXJ5LnF1ZXVlKCBlbGVtLCBcImZ4XCIgKS5sZW5ndGggKSB7XG5cdFx0XHRcdFx0aG9va3MuZW1wdHkuZmlyZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gRGV0ZWN0IHNob3cvaGlkZSBhbmltYXRpb25zXG5cdGZvciAoIHByb3AgaW4gcHJvcHMgKSB7XG5cdFx0dmFsdWUgPSBwcm9wc1sgcHJvcCBdO1xuXHRcdGlmICggcmZ4dHlwZXMudGVzdCggdmFsdWUgKSApIHtcblx0XHRcdGRlbGV0ZSBwcm9wc1sgcHJvcCBdO1xuXHRcdFx0dG9nZ2xlID0gdG9nZ2xlIHx8IHZhbHVlID09PSBcInRvZ2dsZVwiO1xuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gKCBoaWRkZW4gPyBcImhpZGVcIiA6IFwic2hvd1wiICkgKSB7XG5cblx0XHRcdFx0Ly8gUHJldGVuZCB0byBiZSBoaWRkZW4gaWYgdGhpcyBpcyBhIFwic2hvd1wiIGFuZFxuXHRcdFx0XHQvLyB0aGVyZSBpcyBzdGlsbCBkYXRhIGZyb20gYSBzdG9wcGVkIHNob3cvaGlkZVxuXHRcdFx0XHRpZiAoIHZhbHVlID09PSBcInNob3dcIiAmJiBkYXRhU2hvdyAmJiBkYXRhU2hvd1sgcHJvcCBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0aGlkZGVuID0gdHJ1ZTtcblxuXHRcdFx0XHQvLyBJZ25vcmUgYWxsIG90aGVyIG5vLW9wIHNob3cvaGlkZSBkYXRhXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG9yaWdbIHByb3AgXSA9IGRhdGFTaG93ICYmIGRhdGFTaG93WyBwcm9wIF0gfHwgalF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wICk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQmFpbCBvdXQgaWYgdGhpcyBpcyBhIG5vLW9wIGxpa2UgLmhpZGUoKS5oaWRlKClcblx0cHJvcFR3ZWVuID0gIWpRdWVyeS5pc0VtcHR5T2JqZWN0KCBwcm9wcyApO1xuXHRpZiAoICFwcm9wVHdlZW4gJiYgalF1ZXJ5LmlzRW1wdHlPYmplY3QoIG9yaWcgKSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBSZXN0cmljdCBcIm92ZXJmbG93XCIgYW5kIFwiZGlzcGxheVwiIHN0eWxlcyBkdXJpbmcgYm94IGFuaW1hdGlvbnNcblx0aWYgKCBpc0JveCAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTErXG5cdFx0Ly8gUmVjb3JkIGFsbCAzIG92ZXJmbG93IGF0dHJpYnV0ZXMgYmVjYXVzZSBJRSBkb2VzIG5vdCBpbmZlciB0aGUgc2hvcnRoYW5kXG5cdFx0Ly8gZnJvbSBpZGVudGljYWxseS12YWx1ZWQgb3ZlcmZsb3dYIGFuZCBvdmVyZmxvd1kuXG5cdFx0b3B0cy5vdmVyZmxvdyA9IFsgc3R5bGUub3ZlcmZsb3csIHN0eWxlLm92ZXJmbG93WCwgc3R5bGUub3ZlcmZsb3dZIF07XG5cblx0XHQvLyBJZGVudGlmeSBhIGRpc3BsYXkgdHlwZSwgcHJlZmVycmluZyBvbGQgc2hvdy9oaWRlIGRhdGEgb3ZlciB0aGUgQ1NTIGNhc2NhZGVcblx0XHRyZXN0b3JlRGlzcGxheSA9IGRhdGFTaG93ICYmIGRhdGFTaG93LmRpc3BsYXk7XG5cdFx0aWYgKCByZXN0b3JlRGlzcGxheSA9PSBudWxsICkge1xuXHRcdFx0cmVzdG9yZURpc3BsYXkgPSBkYXRhUHJpdi5nZXQoIGVsZW0sIFwiZGlzcGxheVwiICk7XG5cdFx0fVxuXHRcdGRpc3BsYXkgPSBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApO1xuXHRcdGlmICggZGlzcGxheSA9PT0gXCJub25lXCIgKSB7XG5cdFx0XHRpZiAoIHJlc3RvcmVEaXNwbGF5ICkge1xuXHRcdFx0XHRkaXNwbGF5ID0gcmVzdG9yZURpc3BsYXk7XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIEdldCBub25lbXB0eSB2YWx1ZShzKSBieSB0ZW1wb3JhcmlseSBmb3JjaW5nIHZpc2liaWxpdHlcblx0XHRcdFx0c2hvd0hpZGUoIFsgZWxlbSBdLCB0cnVlICk7XG5cdFx0XHRcdHJlc3RvcmVEaXNwbGF5ID0gZWxlbS5zdHlsZS5kaXNwbGF5IHx8IHJlc3RvcmVEaXNwbGF5O1xuXHRcdFx0XHRkaXNwbGF5ID0galF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKTtcblx0XHRcdFx0c2hvd0hpZGUoIFsgZWxlbSBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQW5pbWF0ZSBpbmxpbmUgZWxlbWVudHMgYXMgaW5saW5lLWJsb2NrXG5cdFx0aWYgKCBkaXNwbGF5ID09PSBcImlubGluZVwiIHx8IGRpc3BsYXkgPT09IFwiaW5saW5lLWJsb2NrXCIgJiYgcmVzdG9yZURpc3BsYXkgIT0gbnVsbCApIHtcblx0XHRcdGlmICggalF1ZXJ5LmNzcyggZWxlbSwgXCJmbG9hdFwiICkgPT09IFwibm9uZVwiICkge1xuXG5cdFx0XHRcdC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIGRpc3BsYXkgdmFsdWUgYXQgdGhlIGVuZCBvZiBwdXJlIHNob3cvaGlkZSBhbmltYXRpb25zXG5cdFx0XHRcdGlmICggIXByb3BUd2VlbiApIHtcblx0XHRcdFx0XHRhbmltLmRvbmUoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0c3R5bGUuZGlzcGxheSA9IHJlc3RvcmVEaXNwbGF5O1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRpZiAoIHJlc3RvcmVEaXNwbGF5ID09IG51bGwgKSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5ID0gc3R5bGUuZGlzcGxheTtcblx0XHRcdFx0XHRcdHJlc3RvcmVEaXNwbGF5ID0gZGlzcGxheSA9PT0gXCJub25lXCIgPyBcIlwiIDogZGlzcGxheTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0c3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKCBvcHRzLm92ZXJmbG93ICkge1xuXHRcdHN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblx0XHRhbmltLmFsd2F5cyggZnVuY3Rpb24oKSB7XG5cdFx0XHRzdHlsZS5vdmVyZmxvdyA9IG9wdHMub3ZlcmZsb3dbIDAgXTtcblx0XHRcdHN0eWxlLm92ZXJmbG93WCA9IG9wdHMub3ZlcmZsb3dbIDEgXTtcblx0XHRcdHN0eWxlLm92ZXJmbG93WSA9IG9wdHMub3ZlcmZsb3dbIDIgXTtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBJbXBsZW1lbnQgc2hvdy9oaWRlIGFuaW1hdGlvbnNcblx0cHJvcFR3ZWVuID0gZmFsc2U7XG5cdGZvciAoIHByb3AgaW4gb3JpZyApIHtcblxuXHRcdC8vIEdlbmVyYWwgc2hvdy9oaWRlIHNldHVwIGZvciB0aGlzIGVsZW1lbnQgYW5pbWF0aW9uXG5cdFx0aWYgKCAhcHJvcFR3ZWVuICkge1xuXHRcdFx0aWYgKCBkYXRhU2hvdyApIHtcblx0XHRcdFx0aWYgKCBcImhpZGRlblwiIGluIGRhdGFTaG93ICkge1xuXHRcdFx0XHRcdGhpZGRlbiA9IGRhdGFTaG93LmhpZGRlbjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGF0YVNob3cgPSBkYXRhUHJpdi5zZXQoIGVsZW0sIFwiZnhzaG93XCIsIHsgZGlzcGxheTogcmVzdG9yZURpc3BsYXkgfSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdG9yZSBoaWRkZW4vdmlzaWJsZSBmb3IgdG9nZ2xlIHNvIGAuc3RvcCgpLnRvZ2dsZSgpYCBcInJldmVyc2VzXCJcblx0XHRcdGlmICggdG9nZ2xlICkge1xuXHRcdFx0XHRkYXRhU2hvdy5oaWRkZW4gPSAhaGlkZGVuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTaG93IGVsZW1lbnRzIGJlZm9yZSBhbmltYXRpbmcgdGhlbVxuXHRcdFx0aWYgKCBoaWRkZW4gKSB7XG5cdFx0XHRcdHNob3dIaWRlKCBbIGVsZW0gXSwgdHJ1ZSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG5cdFx0XHRhbmltLmRvbmUoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdC8vIFRoZSBmaW5hbCBzdGVwIG9mIGEgXCJoaWRlXCIgYW5pbWF0aW9uIGlzIGFjdHVhbGx5IGhpZGluZyB0aGUgZWxlbWVudFxuXHRcdFx0XHRpZiAoICFoaWRkZW4gKSB7XG5cdFx0XHRcdFx0c2hvd0hpZGUoIFsgZWxlbSBdICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGF0YVByaXYucmVtb3ZlKCBlbGVtLCBcImZ4c2hvd1wiICk7XG5cdFx0XHRcdGZvciAoIHByb3AgaW4gb3JpZyApIHtcblx0XHRcdFx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AsIG9yaWdbIHByb3AgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0Ly8gUGVyLXByb3BlcnR5IHNldHVwXG5cdFx0cHJvcFR3ZWVuID0gY3JlYXRlVHdlZW4oIGhpZGRlbiA/IGRhdGFTaG93WyBwcm9wIF0gOiAwLCBwcm9wLCBhbmltICk7XG5cdFx0aWYgKCAhKCBwcm9wIGluIGRhdGFTaG93ICkgKSB7XG5cdFx0XHRkYXRhU2hvd1sgcHJvcCBdID0gcHJvcFR3ZWVuLnN0YXJ0O1xuXHRcdFx0aWYgKCBoaWRkZW4gKSB7XG5cdFx0XHRcdHByb3BUd2Vlbi5lbmQgPSBwcm9wVHdlZW4uc3RhcnQ7XG5cdFx0XHRcdHByb3BUd2Vlbi5zdGFydCA9IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHByb3BGaWx0ZXIoIHByb3BzLCBzcGVjaWFsRWFzaW5nICkge1xuXHR2YXIgaW5kZXgsIG5hbWUsIGVhc2luZywgdmFsdWUsIGhvb2tzO1xuXG5cdC8vIGNhbWVsQ2FzZSwgc3BlY2lhbEVhc2luZyBhbmQgZXhwYW5kIGNzc0hvb2sgcGFzc1xuXHRmb3IgKCBpbmRleCBpbiBwcm9wcyApIHtcblx0XHRuYW1lID0gY3NzQ2FtZWxDYXNlKCBpbmRleCApO1xuXHRcdGVhc2luZyA9IHNwZWNpYWxFYXNpbmdbIG5hbWUgXTtcblx0XHR2YWx1ZSA9IHByb3BzWyBpbmRleCBdO1xuXHRcdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRcdGVhc2luZyA9IHZhbHVlWyAxIF07XG5cdFx0XHR2YWx1ZSA9IHByb3BzWyBpbmRleCBdID0gdmFsdWVbIDAgXTtcblx0XHR9XG5cblx0XHRpZiAoIGluZGV4ICE9PSBuYW1lICkge1xuXHRcdFx0cHJvcHNbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0ZGVsZXRlIHByb3BzWyBpbmRleCBdO1xuXHRcdH1cblxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF07XG5cdFx0aWYgKCBob29rcyAmJiBcImV4cGFuZFwiIGluIGhvb2tzICkge1xuXHRcdFx0dmFsdWUgPSBob29rcy5leHBhbmQoIHZhbHVlICk7XG5cdFx0XHRkZWxldGUgcHJvcHNbIG5hbWUgXTtcblxuXHRcdFx0Ly8gTm90IHF1aXRlICQuZXh0ZW5kLCB0aGlzIHdvbid0IG92ZXJ3cml0ZSBleGlzdGluZyBrZXlzLlxuXHRcdFx0Ly8gUmV1c2luZyAnaW5kZXgnIGJlY2F1c2Ugd2UgaGF2ZSB0aGUgY29ycmVjdCBcIm5hbWVcIlxuXHRcdFx0Zm9yICggaW5kZXggaW4gdmFsdWUgKSB7XG5cdFx0XHRcdGlmICggISggaW5kZXggaW4gcHJvcHMgKSApIHtcblx0XHRcdFx0XHRwcm9wc1sgaW5kZXggXSA9IHZhbHVlWyBpbmRleCBdO1xuXHRcdFx0XHRcdHNwZWNpYWxFYXNpbmdbIGluZGV4IF0gPSBlYXNpbmc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3BlY2lhbEVhc2luZ1sgbmFtZSBdID0gZWFzaW5nO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBBbmltYXRpb24oIGVsZW0sIHByb3BlcnRpZXMsIG9wdGlvbnMgKSB7XG5cdHZhciByZXN1bHQsXG5cdFx0c3RvcHBlZCxcblx0XHRpbmRleCA9IDAsXG5cdFx0bGVuZ3RoID0gQW5pbWF0aW9uLnByZWZpbHRlcnMubGVuZ3RoLFxuXHRcdGRlZmVycmVkID0galF1ZXJ5LkRlZmVycmVkKCkuYWx3YXlzKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gRG9uJ3QgbWF0Y2ggZWxlbSBpbiB0aGUgOmFuaW1hdGVkIHNlbGVjdG9yXG5cdFx0XHRkZWxldGUgdGljay5lbGVtO1xuXHRcdH0gKSxcblx0XHR0aWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIHN0b3BwZWQgKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHZhciBjdXJyZW50VGltZSA9IGZ4Tm93IHx8IGNyZWF0ZUZ4Tm93KCksXG5cdFx0XHRcdHJlbWFpbmluZyA9IE1hdGgubWF4KCAwLCBhbmltYXRpb24uc3RhcnRUaW1lICsgYW5pbWF0aW9uLmR1cmF0aW9uIC0gY3VycmVudFRpbWUgKSxcblxuXHRcdFx0XHRwZXJjZW50ID0gMSAtICggcmVtYWluaW5nIC8gYW5pbWF0aW9uLmR1cmF0aW9uIHx8IDAgKSxcblx0XHRcdFx0aW5kZXggPSAwLFxuXHRcdFx0XHRsZW5ndGggPSBhbmltYXRpb24udHdlZW5zLmxlbmd0aDtcblxuXHRcdFx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRcdFx0YW5pbWF0aW9uLnR3ZWVuc1sgaW5kZXggXS5ydW4oIHBlcmNlbnQgKTtcblx0XHRcdH1cblxuXHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIHBlcmNlbnQsIHJlbWFpbmluZyBdICk7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgbW9yZSB0byBkbywgeWllbGRcblx0XHRcdGlmICggcGVyY2VudCA8IDEgJiYgbGVuZ3RoICkge1xuXHRcdFx0XHRyZXR1cm4gcmVtYWluaW5nO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGlzIHdhcyBhbiBlbXB0eSBhbmltYXRpb24sIHN5bnRoZXNpemUgYSBmaW5hbCBwcm9ncmVzcyBub3RpZmljYXRpb25cblx0XHRcdGlmICggIWxlbmd0aCApIHtcblx0XHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIDEsIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZXNvbHZlIHRoZSBhbmltYXRpb24gYW5kIHJlcG9ydCBpdHMgY29uY2x1c2lvblxuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uIF0gKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdGFuaW1hdGlvbiA9IGRlZmVycmVkLnByb21pc2UoIHtcblx0XHRcdGVsZW06IGVsZW0sXG5cdFx0XHRwcm9wczogalF1ZXJ5LmV4dGVuZCgge30sIHByb3BlcnRpZXMgKSxcblx0XHRcdG9wdHM6IGpRdWVyeS5leHRlbmQoIHRydWUsIHtcblx0XHRcdFx0c3BlY2lhbEVhc2luZzoge30sXG5cdFx0XHRcdGVhc2luZzogalF1ZXJ5LmVhc2luZy5fZGVmYXVsdFxuXHRcdFx0fSwgb3B0aW9ucyApLFxuXHRcdFx0b3JpZ2luYWxQcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzLFxuXHRcdFx0b3JpZ2luYWxPcHRpb25zOiBvcHRpb25zLFxuXHRcdFx0c3RhcnRUaW1lOiBmeE5vdyB8fCBjcmVhdGVGeE5vdygpLFxuXHRcdFx0ZHVyYXRpb246IG9wdGlvbnMuZHVyYXRpb24sXG5cdFx0XHR0d2VlbnM6IFtdLFxuXHRcdFx0Y3JlYXRlVHdlZW46IGZ1bmN0aW9uKCBwcm9wLCBlbmQgKSB7XG5cdFx0XHRcdHZhciB0d2VlbiA9IGpRdWVyeS5Ud2VlbiggZWxlbSwgYW5pbWF0aW9uLm9wdHMsIHByb3AsIGVuZCxcblx0XHRcdFx0XHRhbmltYXRpb24ub3B0cy5zcGVjaWFsRWFzaW5nWyBwcm9wIF0gfHwgYW5pbWF0aW9uLm9wdHMuZWFzaW5nICk7XG5cdFx0XHRcdGFuaW1hdGlvbi50d2VlbnMucHVzaCggdHdlZW4gKTtcblx0XHRcdFx0cmV0dXJuIHR3ZWVuO1xuXHRcdFx0fSxcblx0XHRcdHN0b3A6IGZ1bmN0aW9uKCBnb3RvRW5kICkge1xuXHRcdFx0XHR2YXIgaW5kZXggPSAwLFxuXG5cdFx0XHRcdFx0Ly8gSWYgd2UgYXJlIGdvaW5nIHRvIHRoZSBlbmQsIHdlIHdhbnQgdG8gcnVuIGFsbCB0aGUgdHdlZW5zXG5cdFx0XHRcdFx0Ly8gb3RoZXJ3aXNlIHdlIHNraXAgdGhpcyBwYXJ0XG5cdFx0XHRcdFx0bGVuZ3RoID0gZ290b0VuZCA/IGFuaW1hdGlvbi50d2VlbnMubGVuZ3RoIDogMDtcblx0XHRcdFx0aWYgKCBzdG9wcGVkICkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0b3BwZWQgPSB0cnVlO1xuXHRcdFx0XHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdFx0XHRcdGFuaW1hdGlvbi50d2VlbnNbIGluZGV4IF0ucnVuKCAxICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZXNvbHZlIHdoZW4gd2UgcGxheWVkIHRoZSBsYXN0IGZyYW1lOyBvdGhlcndpc2UsIHJlamVjdFxuXHRcdFx0XHRpZiAoIGdvdG9FbmQgKSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIDEsIDAgXSApO1xuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiwgZ290b0VuZCBdICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIGdvdG9FbmQgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdH0gKSxcblx0XHRwcm9wcyA9IGFuaW1hdGlvbi5wcm9wcztcblxuXHRwcm9wRmlsdGVyKCBwcm9wcywgYW5pbWF0aW9uLm9wdHMuc3BlY2lhbEVhc2luZyApO1xuXG5cdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0cmVzdWx0ID0gQW5pbWF0aW9uLnByZWZpbHRlcnNbIGluZGV4IF0uY2FsbCggYW5pbWF0aW9uLCBlbGVtLCBwcm9wcywgYW5pbWF0aW9uLm9wdHMgKTtcblx0XHRpZiAoIHJlc3VsdCApIHtcblx0XHRcdGlmICggdHlwZW9mIHJlc3VsdC5zdG9wID09PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdGpRdWVyeS5fcXVldWVIb29rcyggYW5pbWF0aW9uLmVsZW0sIGFuaW1hdGlvbi5vcHRzLnF1ZXVlICkuc3RvcCA9XG5cdFx0XHRcdFx0cmVzdWx0LnN0b3AuYmluZCggcmVzdWx0ICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0fVxuXG5cdGpRdWVyeS5tYXAoIHByb3BzLCBjcmVhdGVUd2VlbiwgYW5pbWF0aW9uICk7XG5cblx0aWYgKCB0eXBlb2YgYW5pbWF0aW9uLm9wdHMuc3RhcnQgPT09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRhbmltYXRpb24ub3B0cy5zdGFydC5jYWxsKCBlbGVtLCBhbmltYXRpb24gKTtcblx0fVxuXG5cdC8vIEF0dGFjaCBjYWxsYmFja3MgZnJvbSBvcHRpb25zXG5cdGFuaW1hdGlvblxuXHRcdC5wcm9ncmVzcyggYW5pbWF0aW9uLm9wdHMucHJvZ3Jlc3MgKVxuXHRcdC5kb25lKCBhbmltYXRpb24ub3B0cy5kb25lLCBhbmltYXRpb24ub3B0cy5jb21wbGV0ZSApXG5cdFx0LmZhaWwoIGFuaW1hdGlvbi5vcHRzLmZhaWwgKVxuXHRcdC5hbHdheXMoIGFuaW1hdGlvbi5vcHRzLmFsd2F5cyApO1xuXG5cdGpRdWVyeS5meC50aW1lcihcblx0XHRqUXVlcnkuZXh0ZW5kKCB0aWNrLCB7XG5cdFx0XHRlbGVtOiBlbGVtLFxuXHRcdFx0YW5pbTogYW5pbWF0aW9uLFxuXHRcdFx0cXVldWU6IGFuaW1hdGlvbi5vcHRzLnF1ZXVlXG5cdFx0fSApXG5cdCk7XG5cblx0cmV0dXJuIGFuaW1hdGlvbjtcbn1cblxualF1ZXJ5LkFuaW1hdGlvbiA9IGpRdWVyeS5leHRlbmQoIEFuaW1hdGlvbiwge1xuXG5cdHR3ZWVuZXJzOiB7XG5cdFx0XCIqXCI6IFsgZnVuY3Rpb24oIHByb3AsIHZhbHVlICkge1xuXHRcdFx0dmFyIHR3ZWVuID0gdGhpcy5jcmVhdGVUd2VlbiggcHJvcCwgdmFsdWUgKTtcblx0XHRcdGFkanVzdENTUyggdHdlZW4uZWxlbSwgcHJvcCwgcmNzc051bS5leGVjKCB2YWx1ZSApLCB0d2VlbiApO1xuXHRcdFx0cmV0dXJuIHR3ZWVuO1xuXHRcdH0gXVxuXHR9LFxuXG5cdHR3ZWVuZXI6IGZ1bmN0aW9uKCBwcm9wcywgY2FsbGJhY2sgKSB7XG5cdFx0aWYgKCB0eXBlb2YgcHJvcHMgPT09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdGNhbGxiYWNrID0gcHJvcHM7XG5cdFx0XHRwcm9wcyA9IFsgXCIqXCIgXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cHJvcHMgPSBwcm9wcy5tYXRjaCggcm5vdGh0bWx3aGl0ZSApO1xuXHRcdH1cblxuXHRcdHZhciBwcm9wLFxuXHRcdFx0aW5kZXggPSAwLFxuXHRcdFx0bGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG5cdFx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRcdHByb3AgPSBwcm9wc1sgaW5kZXggXTtcblx0XHRcdEFuaW1hdGlvbi50d2VlbmVyc1sgcHJvcCBdID0gQW5pbWF0aW9uLnR3ZWVuZXJzWyBwcm9wIF0gfHwgW107XG5cdFx0XHRBbmltYXRpb24udHdlZW5lcnNbIHByb3AgXS51bnNoaWZ0KCBjYWxsYmFjayApO1xuXHRcdH1cblx0fSxcblxuXHRwcmVmaWx0ZXJzOiBbIGRlZmF1bHRQcmVmaWx0ZXIgXSxcblxuXHRwcmVmaWx0ZXI6IGZ1bmN0aW9uKCBjYWxsYmFjaywgcHJlcGVuZCApIHtcblx0XHRpZiAoIHByZXBlbmQgKSB7XG5cdFx0XHRBbmltYXRpb24ucHJlZmlsdGVycy51bnNoaWZ0KCBjYWxsYmFjayApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRBbmltYXRpb24ucHJlZmlsdGVycy5wdXNoKCBjYWxsYmFjayApO1xuXHRcdH1cblx0fVxufSApO1xuXG5qUXVlcnkuc3BlZWQgPSBmdW5jdGlvbiggc3BlZWQsIGVhc2luZywgZm4gKSB7XG5cdHZhciBvcHQgPSBzcGVlZCAmJiB0eXBlb2Ygc3BlZWQgPT09IFwib2JqZWN0XCIgPyBqUXVlcnkuZXh0ZW5kKCB7fSwgc3BlZWQgKSA6IHtcblx0XHRjb21wbGV0ZTogZm4gfHwgZWFzaW5nIHx8XG5cdFx0XHR0eXBlb2Ygc3BlZWQgPT09IFwiZnVuY3Rpb25cIiAmJiBzcGVlZCxcblx0XHRkdXJhdGlvbjogc3BlZWQsXG5cdFx0ZWFzaW5nOiBmbiAmJiBlYXNpbmcgfHwgZWFzaW5nICYmIHR5cGVvZiBlYXNpbmcgIT09IFwiZnVuY3Rpb25cIiAmJiBlYXNpbmdcblx0fTtcblxuXHQvLyBHbyB0byB0aGUgZW5kIHN0YXRlIGlmIGZ4IGFyZSBvZmZcblx0aWYgKCBqUXVlcnkuZngub2ZmICkge1xuXHRcdG9wdC5kdXJhdGlvbiA9IDA7XG5cblx0fSBlbHNlIHtcblx0XHRpZiAoIHR5cGVvZiBvcHQuZHVyYXRpb24gIT09IFwibnVtYmVyXCIgKSB7XG5cdFx0XHRpZiAoIG9wdC5kdXJhdGlvbiBpbiBqUXVlcnkuZnguc3BlZWRzICkge1xuXHRcdFx0XHRvcHQuZHVyYXRpb24gPSBqUXVlcnkuZnguc3BlZWRzWyBvcHQuZHVyYXRpb24gXTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3B0LmR1cmF0aW9uID0galF1ZXJ5LmZ4LnNwZWVkcy5fZGVmYXVsdDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBOb3JtYWxpemUgb3B0LnF1ZXVlIC0gdHJ1ZS91bmRlZmluZWQvbnVsbCAtPiBcImZ4XCJcblx0aWYgKCBvcHQucXVldWUgPT0gbnVsbCB8fCBvcHQucXVldWUgPT09IHRydWUgKSB7XG5cdFx0b3B0LnF1ZXVlID0gXCJmeFwiO1xuXHR9XG5cblx0Ly8gUXVldWVpbmdcblx0b3B0Lm9sZCA9IG9wdC5jb21wbGV0ZTtcblxuXHRvcHQuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIHR5cGVvZiBvcHQub2xkID09PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRvcHQub2xkLmNhbGwoIHRoaXMgKTtcblx0XHR9XG5cblx0XHRpZiAoIG9wdC5xdWV1ZSApIHtcblx0XHRcdGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCBvcHQucXVldWUgKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIG9wdDtcbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0ZmFkZVRvOiBmdW5jdGlvbiggc3BlZWQsIHRvLCBlYXNpbmcsIGNhbGxiYWNrICkge1xuXG5cdFx0Ly8gU2hvdyBhbnkgaGlkZGVuIGVsZW1lbnRzIGFmdGVyIHNldHRpbmcgb3BhY2l0eSB0byAwXG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyKCBpc0hpZGRlbldpdGhpblRyZWUgKS5jc3MoIFwib3BhY2l0eVwiLCAwICkuc2hvdygpXG5cblx0XHRcdC8vIEFuaW1hdGUgdG8gdGhlIHZhbHVlIHNwZWNpZmllZFxuXHRcdFx0LmVuZCgpLmFuaW1hdGUoIHsgb3BhY2l0eTogdG8gfSwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKTtcblx0fSxcblx0YW5pbWF0ZTogZnVuY3Rpb24oIHByb3AsIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICkge1xuXHRcdHZhciBlbXB0eSA9IGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBwcm9wICksXG5cdFx0XHRvcHRhbGwgPSBqUXVlcnkuc3BlZWQoIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICksXG5cdFx0XHRkb0FuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdC8vIE9wZXJhdGUgb24gYSBjb3B5IG9mIHByb3Agc28gcGVyLXByb3BlcnR5IGVhc2luZyB3b24ndCBiZSBsb3N0XG5cdFx0XHRcdHZhciBhbmltID0gQW5pbWF0aW9uKCB0aGlzLCBqUXVlcnkuZXh0ZW5kKCB7fSwgcHJvcCApLCBvcHRhbGwgKTtcblxuXHRcdFx0XHQvLyBFbXB0eSBhbmltYXRpb25zLCBvciBmaW5pc2hpbmcgcmVzb2x2ZXMgaW1tZWRpYXRlbHlcblx0XHRcdFx0aWYgKCBlbXB0eSB8fCBkYXRhUHJpdi5nZXQoIHRoaXMsIFwiZmluaXNoXCIgKSApIHtcblx0XHRcdFx0XHRhbmltLnN0b3AoIHRydWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdGRvQW5pbWF0aW9uLmZpbmlzaCA9IGRvQW5pbWF0aW9uO1xuXG5cdFx0cmV0dXJuIGVtcHR5IHx8IG9wdGFsbC5xdWV1ZSA9PT0gZmFsc2UgP1xuXHRcdFx0dGhpcy5lYWNoKCBkb0FuaW1hdGlvbiApIDpcblx0XHRcdHRoaXMucXVldWUoIG9wdGFsbC5xdWV1ZSwgZG9BbmltYXRpb24gKTtcblx0fSxcblx0c3RvcDogZnVuY3Rpb24oIHR5cGUsIGNsZWFyUXVldWUsIGdvdG9FbmQgKSB7XG5cdFx0dmFyIHN0b3BRdWV1ZSA9IGZ1bmN0aW9uKCBob29rcyApIHtcblx0XHRcdHZhciBzdG9wID0gaG9va3Muc3RvcDtcblx0XHRcdGRlbGV0ZSBob29rcy5zdG9wO1xuXHRcdFx0c3RvcCggZ290b0VuZCApO1xuXHRcdH07XG5cblx0XHRpZiAoIHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0Z290b0VuZCA9IGNsZWFyUXVldWU7XG5cdFx0XHRjbGVhclF1ZXVlID0gdHlwZTtcblx0XHRcdHR5cGUgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdGlmICggY2xlYXJRdWV1ZSApIHtcblx0XHRcdHRoaXMucXVldWUoIHR5cGUgfHwgXCJmeFwiLCBbXSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGRlcXVldWUgPSB0cnVlLFxuXHRcdFx0XHRpbmRleCA9IHR5cGUgIT0gbnVsbCAmJiB0eXBlICsgXCJxdWV1ZUhvb2tzXCIsXG5cdFx0XHRcdHRpbWVycyA9IGpRdWVyeS50aW1lcnMsXG5cdFx0XHRcdGRhdGEgPSBkYXRhUHJpdi5nZXQoIHRoaXMgKTtcblxuXHRcdFx0aWYgKCBpbmRleCApIHtcblx0XHRcdFx0aWYgKCBkYXRhWyBpbmRleCBdICYmIGRhdGFbIGluZGV4IF0uc3RvcCApIHtcblx0XHRcdFx0XHRzdG9wUXVldWUoIGRhdGFbIGluZGV4IF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yICggaW5kZXggaW4gZGF0YSApIHtcblx0XHRcdFx0XHRpZiAoIGRhdGFbIGluZGV4IF0gJiYgZGF0YVsgaW5kZXggXS5zdG9wICYmIHJydW4udGVzdCggaW5kZXggKSApIHtcblx0XHRcdFx0XHRcdHN0b3BRdWV1ZSggZGF0YVsgaW5kZXggXSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKCBpbmRleCA9IHRpbWVycy5sZW5ndGg7IGluZGV4LS07ICkge1xuXHRcdFx0XHRpZiAoIHRpbWVyc1sgaW5kZXggXS5lbGVtID09PSB0aGlzICYmXG5cdFx0XHRcdFx0KCB0eXBlID09IG51bGwgfHwgdGltZXJzWyBpbmRleCBdLnF1ZXVlID09PSB0eXBlICkgKSB7XG5cblx0XHRcdFx0XHR0aW1lcnNbIGluZGV4IF0uYW5pbS5zdG9wKCBnb3RvRW5kICk7XG5cdFx0XHRcdFx0ZGVxdWV1ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdHRpbWVycy5zcGxpY2UoIGluZGV4LCAxICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gU3RhcnQgdGhlIG5leHQgaW4gdGhlIHF1ZXVlIGlmIHRoZSBsYXN0IHN0ZXAgd2Fzbid0IGZvcmNlZC5cblx0XHRcdC8vIFRpbWVycyBjdXJyZW50bHkgd2lsbCBjYWxsIHRoZWlyIGNvbXBsZXRlIGNhbGxiYWNrcywgd2hpY2hcblx0XHRcdC8vIHdpbGwgZGVxdWV1ZSBidXQgb25seSBpZiB0aGV5IHdlcmUgZ290b0VuZC5cblx0XHRcdGlmICggZGVxdWV1ZSB8fCAhZ290b0VuZCApIHtcblx0XHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIHR5cGUgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cdGZpbmlzaDogZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0aWYgKCB0eXBlICE9PSBmYWxzZSApIHtcblx0XHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW5kZXgsXG5cdFx0XHRcdGRhdGEgPSBkYXRhUHJpdi5nZXQoIHRoaXMgKSxcblx0XHRcdFx0cXVldWUgPSBkYXRhWyB0eXBlICsgXCJxdWV1ZVwiIF0sXG5cdFx0XHRcdGhvb2tzID0gZGF0YVsgdHlwZSArIFwicXVldWVIb29rc1wiIF0sXG5cdFx0XHRcdHRpbWVycyA9IGpRdWVyeS50aW1lcnMsXG5cdFx0XHRcdGxlbmd0aCA9IHF1ZXVlID8gcXVldWUubGVuZ3RoIDogMDtcblxuXHRcdFx0Ly8gRW5hYmxlIGZpbmlzaGluZyBmbGFnIG9uIHByaXZhdGUgZGF0YVxuXHRcdFx0ZGF0YS5maW5pc2ggPSB0cnVlO1xuXG5cdFx0XHQvLyBFbXB0eSB0aGUgcXVldWUgZmlyc3Rcblx0XHRcdGpRdWVyeS5xdWV1ZSggdGhpcywgdHlwZSwgW10gKTtcblxuXHRcdFx0aWYgKCBob29rcyAmJiBob29rcy5zdG9wICkge1xuXHRcdFx0XHRob29rcy5zdG9wLmNhbGwoIHRoaXMsIHRydWUgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9vayBmb3IgYW55IGFjdGl2ZSBhbmltYXRpb25zLCBhbmQgZmluaXNoIHRoZW1cblx0XHRcdGZvciAoIGluZGV4ID0gdGltZXJzLmxlbmd0aDsgaW5kZXgtLTsgKSB7XG5cdFx0XHRcdGlmICggdGltZXJzWyBpbmRleCBdLmVsZW0gPT09IHRoaXMgJiYgdGltZXJzWyBpbmRleCBdLnF1ZXVlID09PSB0eXBlICkge1xuXHRcdFx0XHRcdHRpbWVyc1sgaW5kZXggXS5hbmltLnN0b3AoIHRydWUgKTtcblx0XHRcdFx0XHR0aW1lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvb2sgZm9yIGFueSBhbmltYXRpb25zIGluIHRoZSBvbGQgcXVldWUgYW5kIGZpbmlzaCB0aGVtXG5cdFx0XHRmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdFx0XHRpZiAoIHF1ZXVlWyBpbmRleCBdICYmIHF1ZXVlWyBpbmRleCBdLmZpbmlzaCApIHtcblx0XHRcdFx0XHRxdWV1ZVsgaW5kZXggXS5maW5pc2guY2FsbCggdGhpcyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFR1cm4gb2ZmIGZpbmlzaGluZyBmbGFnXG5cdFx0XHRkZWxldGUgZGF0YS5maW5pc2g7XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5lYWNoKCBbIFwidG9nZ2xlXCIsIFwic2hvd1wiLCBcImhpZGVcIiBdLCBmdW5jdGlvbiggX2ksIG5hbWUgKSB7XG5cdHZhciBjc3NGbiA9IGpRdWVyeS5mblsgbmFtZSBdO1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4gc3BlZWQgPT0gbnVsbCB8fCB0eXBlb2Ygc3BlZWQgPT09IFwiYm9vbGVhblwiID9cblx0XHRcdGNzc0ZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSA6XG5cdFx0XHR0aGlzLmFuaW1hdGUoIGdlbkZ4KCBuYW1lLCB0cnVlICksIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICk7XG5cdH07XG59ICk7XG5cbi8vIEdlbmVyYXRlIHNob3J0Y3V0cyBmb3IgY3VzdG9tIGFuaW1hdGlvbnNcbmpRdWVyeS5lYWNoKCB7XG5cdHNsaWRlRG93bjogZ2VuRngoIFwic2hvd1wiICksXG5cdHNsaWRlVXA6IGdlbkZ4KCBcImhpZGVcIiApLFxuXHRzbGlkZVRvZ2dsZTogZ2VuRngoIFwidG9nZ2xlXCIgKSxcblx0ZmFkZUluOiB7IG9wYWNpdHk6IFwic2hvd1wiIH0sXG5cdGZhZGVPdXQ6IHsgb3BhY2l0eTogXCJoaWRlXCIgfSxcblx0ZmFkZVRvZ2dsZTogeyBvcGFjaXR5OiBcInRvZ2dsZVwiIH1cbn0sIGZ1bmN0aW9uKCBuYW1lLCBwcm9wcyApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIHRoaXMuYW5pbWF0ZSggcHJvcHMsIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICk7XG5cdH07XG59ICk7XG5cbmpRdWVyeS50aW1lcnMgPSBbXTtcbmpRdWVyeS5meC50aWNrID0gZnVuY3Rpb24oKSB7XG5cdHZhciB0aW1lcixcblx0XHRpID0gMCxcblx0XHR0aW1lcnMgPSBqUXVlcnkudGltZXJzO1xuXG5cdGZ4Tm93ID0gRGF0ZS5ub3coKTtcblxuXHRmb3IgKCA7IGkgPCB0aW1lcnMubGVuZ3RoOyBpKysgKSB7XG5cdFx0dGltZXIgPSB0aW1lcnNbIGkgXTtcblxuXHRcdC8vIFJ1biB0aGUgdGltZXIgYW5kIHNhZmVseSByZW1vdmUgaXQgd2hlbiBkb25lIChhbGxvd2luZyBmb3IgZXh0ZXJuYWwgcmVtb3ZhbClcblx0XHRpZiAoICF0aW1lcigpICYmIHRpbWVyc1sgaSBdID09PSB0aW1lciApIHtcblx0XHRcdHRpbWVycy5zcGxpY2UoIGktLSwgMSApO1xuXHRcdH1cblx0fVxuXG5cdGlmICggIXRpbWVycy5sZW5ndGggKSB7XG5cdFx0alF1ZXJ5LmZ4LnN0b3AoKTtcblx0fVxuXHRmeE5vdyA9IHVuZGVmaW5lZDtcbn07XG5cbmpRdWVyeS5meC50aW1lciA9IGZ1bmN0aW9uKCB0aW1lciApIHtcblx0alF1ZXJ5LnRpbWVycy5wdXNoKCB0aW1lciApO1xuXHRqUXVlcnkuZnguc3RhcnQoKTtcbn07XG5cbmpRdWVyeS5meC5zdGFydCA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoIGluUHJvZ3Jlc3MgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aW5Qcm9ncmVzcyA9IHRydWU7XG5cdHNjaGVkdWxlKCk7XG59O1xuXG5qUXVlcnkuZnguc3RvcCA9IGZ1bmN0aW9uKCkge1xuXHRpblByb2dyZXNzID0gbnVsbDtcbn07XG5cbmpRdWVyeS5meC5zcGVlZHMgPSB7XG5cdHNsb3c6IDYwMCxcblx0ZmFzdDogMjAwLFxuXG5cdC8vIERlZmF1bHQgc3BlZWRcblx0X2RlZmF1bHQ6IDQwMFxufTtcblxuLy8gQmFzZWQgb2ZmIG9mIHRoZSBwbHVnaW4gYnkgQ2xpbnQgSGVsZmVycywgd2l0aCBwZXJtaXNzaW9uLlxualF1ZXJ5LmZuLmRlbGF5ID0gZnVuY3Rpb24oIHRpbWUsIHR5cGUgKSB7XG5cdHRpbWUgPSBqUXVlcnkuZnggPyBqUXVlcnkuZnguc3BlZWRzWyB0aW1lIF0gfHwgdGltZSA6IHRpbWU7XG5cdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuXHRyZXR1cm4gdGhpcy5xdWV1ZSggdHlwZSwgZnVuY3Rpb24oIG5leHQsIGhvb2tzICkge1xuXHRcdHZhciB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoIG5leHQsIHRpbWUgKTtcblx0XHRob29rcy5zdG9wID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cdFx0fTtcblx0fSApO1xufTtcblxudmFyIHJmb2N1c2FibGUgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFxuXHRyY2xpY2thYmxlID0gL14oPzphfGFyZWEpJC9pO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHByb3A6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBqUXVlcnkucHJvcCwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XG5cdH0sXG5cblx0cmVtb3ZlUHJvcDogZnVuY3Rpb24oIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRkZWxldGUgdGhpc1sgalF1ZXJ5LnByb3BGaXhbIG5hbWUgXSB8fCBuYW1lIF07XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5leHRlbmQoIHtcblx0cHJvcDogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlICkge1xuXHRcdHZhciByZXQsIGhvb2tzLFxuXHRcdFx0blR5cGUgPSBlbGVtLm5vZGVUeXBlO1xuXG5cdFx0Ly8gRG9uJ3QgZ2V0L3NldCBwcm9wZXJ0aWVzIG9uIHRleHQsIGNvbW1lbnQgYW5kIGF0dHJpYnV0ZSBub2Rlc1xuXHRcdGlmICggblR5cGUgPT09IDMgfHwgblR5cGUgPT09IDggfHwgblR5cGUgPT09IDIgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBuVHlwZSAhPT0gMSB8fCAhalF1ZXJ5LmlzWE1MRG9jKCBlbGVtICkgKSB7XG5cblx0XHRcdC8vIEZpeCBuYW1lIGFuZCBhdHRhY2ggaG9va3Ncblx0XHRcdG5hbWUgPSBqUXVlcnkucHJvcEZpeFsgbmFtZSBdIHx8IG5hbWU7XG5cdFx0XHRob29rcyA9IGpRdWVyeS5wcm9wSG9va3NbIG5hbWUgXTtcblx0XHR9XG5cblx0XHRpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRpZiAoIGhvb2tzICYmIFwic2V0XCIgaW4gaG9va3MgJiZcblx0XHRcdFx0KCByZXQgPSBob29rcy5zZXQoIGVsZW0sIHZhbHVlLCBuYW1lICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKCBlbGVtWyBuYW1lIF0gPSB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdGlmICggaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAoIHJldCA9IGhvb2tzLmdldCggZWxlbSwgbmFtZSApICkgIT09IG51bGwgKSB7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblxuXHRcdHJldHVybiBlbGVtWyBuYW1lIF07XG5cdH0sXG5cblx0cHJvcEhvb2tzOiB7XG5cdFx0dGFiSW5kZXg6IHtcblx0XHRcdGdldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTErXG5cdFx0XHRcdC8vIGVsZW0udGFiSW5kZXggZG9lc24ndCBhbHdheXMgcmV0dXJuIHRoZVxuXHRcdFx0XHQvLyBjb3JyZWN0IHZhbHVlIHdoZW4gaXQgaGFzbid0IGJlZW4gZXhwbGljaXRseSBzZXRcblx0XHRcdFx0Ly8gVXNlIHByb3BlciBhdHRyaWJ1dGUgcmV0cmlldmFsICh0cmFjLTEyMDcyKVxuXHRcdFx0XHR2YXIgdGFiaW5kZXggPSBlbGVtLmdldEF0dHJpYnV0ZSggXCJ0YWJpbmRleFwiICk7XG5cblx0XHRcdFx0aWYgKCB0YWJpbmRleCApIHtcblx0XHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQoIHRhYmluZGV4LCAxMCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHJmb2N1c2FibGUudGVzdCggZWxlbS5ub2RlTmFtZSApIHx8XG5cblx0XHRcdFx0XHQvLyBocmVmLWxlc3MgYW5jaG9yJ3MgYHRhYkluZGV4YCBwcm9wZXJ0eSB2YWx1ZSBpcyBgMGAgYW5kXG5cdFx0XHRcdFx0Ly8gdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIHZhbHVlOiBgbnVsbGAuIFdlIHdhbnQgYC0xYC5cblx0XHRcdFx0XHRyY2xpY2thYmxlLnRlc3QoIGVsZW0ubm9kZU5hbWUgKSAmJiBlbGVtLmhyZWZcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdHByb3BGaXg6IHtcblx0XHRcImZvclwiOiBcImh0bWxGb3JcIixcblx0XHRcImNsYXNzXCI6IFwiY2xhc3NOYW1lXCJcblx0fVxufSApO1xuXG4vLyBTdXBwb3J0OiBJRSA8PTExK1xuLy8gQWNjZXNzaW5nIHRoZSBzZWxlY3RlZEluZGV4IHByb3BlcnR5IGZvcmNlcyB0aGUgYnJvd3NlciB0byByZXNwZWN0XG4vLyBzZXR0aW5nIHNlbGVjdGVkIG9uIHRoZSBvcHRpb24uIFRoZSBnZXR0ZXIgZW5zdXJlcyBhIGRlZmF1bHQgb3B0aW9uXG4vLyBpcyBzZWxlY3RlZCB3aGVuIGluIGFuIG9wdGdyb3VwLiBFU0xpbnQgcnVsZSBcIm5vLXVudXNlZC1leHByZXNzaW9uc1wiXG4vLyBpcyBkaXNhYmxlZCBmb3IgdGhpcyBjb2RlIHNpbmNlIGl0IGNvbnNpZGVycyBzdWNoIGFjY2Vzc2lvbnMgbm9vcC5cbmlmICggaXNJRSApIHtcblx0alF1ZXJ5LnByb3BIb29rcy5zZWxlY3RlZCA9IHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0aWYgKCBwYXJlbnQgJiYgcGFyZW50LnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHRcdFx0cGFyZW50LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0sXG5cdFx0c2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0aWYgKCBwYXJlbnQgKSB7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHRcdFx0cGFyZW50LnNlbGVjdGVkSW5kZXg7XG5cblx0XHRcdFx0aWYgKCBwYXJlbnQucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0XHRcdFx0cGFyZW50LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxualF1ZXJ5LmVhY2goIFtcblx0XCJ0YWJJbmRleFwiLFxuXHRcInJlYWRPbmx5XCIsXG5cdFwibWF4TGVuZ3RoXCIsXG5cdFwiY2VsbFNwYWNpbmdcIixcblx0XCJjZWxsUGFkZGluZ1wiLFxuXHRcInJvd1NwYW5cIixcblx0XCJjb2xTcGFuXCIsXG5cdFwidXNlTWFwXCIsXG5cdFwiZnJhbWVCb3JkZXJcIixcblx0XCJjb250ZW50RWRpdGFibGVcIlxuXSwgZnVuY3Rpb24oKSB7XG5cdGpRdWVyeS5wcm9wRml4WyB0aGlzLnRvTG93ZXJDYXNlKCkgXSA9IHRoaXM7XG59ICk7XG5cbi8vIFN0cmlwIGFuZCBjb2xsYXBzZSB3aGl0ZXNwYWNlIGFjY29yZGluZyB0byBIVE1MIHNwZWNcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNzdHJpcC1hbmQtY29sbGFwc2UtYXNjaWktd2hpdGVzcGFjZVxuZnVuY3Rpb24gc3RyaXBBbmRDb2xsYXBzZSggdmFsdWUgKSB7XG5cdHZhciB0b2tlbnMgPSB2YWx1ZS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFtdO1xuXHRyZXR1cm4gdG9rZW5zLmpvaW4oIFwiIFwiICk7XG59XG5cbmZ1bmN0aW9uIGdldENsYXNzKCBlbGVtICkge1xuXHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUgJiYgZWxlbS5nZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIiApIHx8IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNsYXNzZXNUb0FycmF5KCB2YWx1ZSApIHtcblx0aWYgKCBBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXHRpZiAoIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRyZXR1cm4gdmFsdWUubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXTtcblx0fVxuXHRyZXR1cm4gW107XG59XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0YWRkQ2xhc3M6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR2YXIgY2xhc3NOYW1lcywgY3VyLCBjdXJWYWx1ZSwgY2xhc3NOYW1lLCBpLCBmaW5hbFZhbHVlO1xuXG5cdFx0aWYgKCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBqICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5hZGRDbGFzcyggdmFsdWUuY2FsbCggdGhpcywgaiwgZ2V0Q2xhc3MoIHRoaXMgKSApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0Y2xhc3NOYW1lcyA9IGNsYXNzZXNUb0FycmF5KCB2YWx1ZSApO1xuXG5cdFx0aWYgKCBjbGFzc05hbWVzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjdXJWYWx1ZSA9IGdldENsYXNzKCB0aGlzICk7XG5cdFx0XHRcdGN1ciA9IHRoaXMubm9kZVR5cGUgPT09IDEgJiYgKCBcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoIGN1clZhbHVlICkgKyBcIiBcIiApO1xuXG5cdFx0XHRcdGlmICggY3VyICkge1xuXHRcdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgY2xhc3NOYW1lcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZSA9IGNsYXNzTmFtZXNbIGkgXTtcblx0XHRcdFx0XHRcdGlmICggY3VyLmluZGV4T2YoIFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCIgKSA8IDAgKSB7XG5cdFx0XHRcdFx0XHRcdGN1ciArPSBjbGFzc05hbWUgKyBcIiBcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBPbmx5IGFzc2lnbiBpZiBkaWZmZXJlbnQgdG8gYXZvaWQgdW5uZWVkZWQgcmVuZGVyaW5nLlxuXHRcdFx0XHRcdGZpbmFsVmFsdWUgPSBzdHJpcEFuZENvbGxhcHNlKCBjdXIgKTtcblx0XHRcdFx0XHRpZiAoIGN1clZhbHVlICE9PSBmaW5hbFZhbHVlICkge1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIiwgZmluYWxWYWx1ZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHJlbW92ZUNsYXNzOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGNsYXNzTmFtZXMsIGN1ciwgY3VyVmFsdWUsIGNsYXNzTmFtZSwgaSwgZmluYWxWYWx1ZTtcblxuXHRcdGlmICggdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaiApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucmVtb3ZlQ2xhc3MoIHZhbHVlLmNhbGwoIHRoaXMsIGosIGdldENsYXNzKCB0aGlzICkgKSApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdGlmICggIWFyZ3VtZW50cy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hdHRyKCBcImNsYXNzXCIsIFwiXCIgKTtcblx0XHR9XG5cblx0XHRjbGFzc05hbWVzID0gY2xhc3Nlc1RvQXJyYXkoIHZhbHVlICk7XG5cblx0XHRpZiAoIGNsYXNzTmFtZXMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGN1clZhbHVlID0gZ2V0Q2xhc3MoIHRoaXMgKTtcblxuXHRcdFx0XHQvLyBUaGlzIGV4cHJlc3Npb24gaXMgaGVyZSBmb3IgYmV0dGVyIGNvbXByZXNzaWJpbGl0eSAoc2VlIGFkZENsYXNzKVxuXHRcdFx0XHRjdXIgPSB0aGlzLm5vZGVUeXBlID09PSAxICYmICggXCIgXCIgKyBzdHJpcEFuZENvbGxhcHNlKCBjdXJWYWx1ZSApICsgXCIgXCIgKTtcblxuXHRcdFx0XHRpZiAoIGN1ciApIHtcblx0XHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IGNsYXNzTmFtZXMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWVzWyBpIF07XG5cblx0XHRcdFx0XHRcdC8vIFJlbW92ZSAqYWxsKiBpbnN0YW5jZXNcblx0XHRcdFx0XHRcdHdoaWxlICggY3VyLmluZGV4T2YoIFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCIgKSA+IC0xICkge1xuXHRcdFx0XHRcdFx0XHRjdXIgPSBjdXIucmVwbGFjZSggXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIiwgXCIgXCIgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBPbmx5IGFzc2lnbiBpZiBkaWZmZXJlbnQgdG8gYXZvaWQgdW5uZWVkZWQgcmVuZGVyaW5nLlxuXHRcdFx0XHRcdGZpbmFsVmFsdWUgPSBzdHJpcEFuZENvbGxhcHNlKCBjdXIgKTtcblx0XHRcdFx0XHRpZiAoIGN1clZhbHVlICE9PSBmaW5hbFZhbHVlICkge1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIiwgZmluYWxWYWx1ZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHRvZ2dsZUNsYXNzOiBmdW5jdGlvbiggdmFsdWUsIHN0YXRlVmFsICkge1xuXHRcdHZhciBjbGFzc05hbWVzLCBjbGFzc05hbWUsIGksIHNlbGY7XG5cblx0XHRpZiAoIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnRvZ2dsZUNsYXNzKFxuXHRcdFx0XHRcdHZhbHVlLmNhbGwoIHRoaXMsIGksIGdldENsYXNzKCB0aGlzICksIHN0YXRlVmFsICksXG5cdFx0XHRcdFx0c3RhdGVWYWxcblx0XHRcdFx0KTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiAoIHR5cGVvZiBzdGF0ZVZhbCA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGVWYWwgPyB0aGlzLmFkZENsYXNzKCB2YWx1ZSApIDogdGhpcy5yZW1vdmVDbGFzcyggdmFsdWUgKTtcblx0XHR9XG5cblx0XHRjbGFzc05hbWVzID0gY2xhc3Nlc1RvQXJyYXkoIHZhbHVlICk7XG5cblx0XHRpZiAoIGNsYXNzTmFtZXMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0Ly8gVG9nZ2xlIGluZGl2aWR1YWwgY2xhc3MgbmFtZXNcblx0XHRcdFx0c2VsZiA9IGpRdWVyeSggdGhpcyApO1xuXG5cdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgY2xhc3NOYW1lcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWVzWyBpIF07XG5cblx0XHRcdFx0XHQvLyBDaGVjayBlYWNoIGNsYXNzTmFtZSBnaXZlbiwgc3BhY2Ugc2VwYXJhdGVkIGxpc3Rcblx0XHRcdFx0XHRpZiAoIHNlbGYuaGFzQ2xhc3MoIGNsYXNzTmFtZSApICkge1xuXHRcdFx0XHRcdFx0c2VsZi5yZW1vdmVDbGFzcyggY2xhc3NOYW1lICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYuYWRkQ2xhc3MoIGNsYXNzTmFtZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGhhc0NsYXNzOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSwgZWxlbSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0Y2xhc3NOYW1lID0gXCIgXCIgKyBzZWxlY3RvciArIFwiIFwiO1xuXHRcdHdoaWxlICggKCBlbGVtID0gdGhpc1sgaSsrIF0gKSApIHtcblx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSAmJlxuXHRcdFx0XHQoIFwiIFwiICsgc3RyaXBBbmRDb2xsYXBzZSggZ2V0Q2xhc3MoIGVsZW0gKSApICsgXCIgXCIgKS5pbmRleE9mKCBjbGFzc05hbWUgKSA+IC0xICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHR2YWw6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR2YXIgaG9va3MsIHJldCwgdmFsdWVJc0Z1bmN0aW9uLFxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXTtcblxuXHRcdGlmICggIWFyZ3VtZW50cy5sZW5ndGggKSB7XG5cdFx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHRcdGhvb2tzID0galF1ZXJ5LnZhbEhvb2tzWyBlbGVtLnR5cGUgXSB8fFxuXHRcdFx0XHRcdGpRdWVyeS52YWxIb29rc1sgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpIF07XG5cblx0XHRcdFx0aWYgKCBob29rcyAmJlxuXHRcdFx0XHRcdFwiZ2V0XCIgaW4gaG9va3MgJiZcblx0XHRcdFx0XHQoIHJldCA9IGhvb2tzLmdldCggZWxlbSwgXCJ2YWx1ZVwiICkgKSAhPT0gdW5kZWZpbmVkXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXQgPSBlbGVtLnZhbHVlO1xuXG5cdFx0XHRcdC8vIEhhbmRsZSBjYXNlcyB3aGVyZSB2YWx1ZSBpcyBudWxsL3VuZGVmIG9yIG51bWJlclxuXHRcdFx0XHRyZXR1cm4gcmV0ID09IG51bGwgPyBcIlwiIDogcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFsdWVJc0Z1bmN0aW9uID0gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCI7XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdHZhciB2YWw7XG5cblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSAhPT0gMSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHZhbHVlSXNGdW5jdGlvbiApIHtcblx0XHRcdFx0dmFsID0gdmFsdWUuY2FsbCggdGhpcywgaSwgalF1ZXJ5KCB0aGlzICkudmFsKCkgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbCA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUcmVhdCBudWxsL3VuZGVmaW5lZCBhcyBcIlwiOyBjb252ZXJ0IG51bWJlcnMgdG8gc3RyaW5nXG5cdFx0XHRpZiAoIHZhbCA9PSBudWxsICkge1xuXHRcdFx0XHR2YWwgPSBcIlwiO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiICkge1xuXHRcdFx0XHR2YWwgKz0gXCJcIjtcblxuXHRcdFx0fSBlbHNlIGlmICggQXJyYXkuaXNBcnJheSggdmFsICkgKSB7XG5cdFx0XHRcdHZhbCA9IGpRdWVyeS5tYXAoIHZhbCwgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZSA9PSBudWxsID8gXCJcIiA6IHZhbHVlICsgXCJcIjtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0XHRob29rcyA9IGpRdWVyeS52YWxIb29rc1sgdGhpcy50eXBlIF0gfHwgalF1ZXJ5LnZhbEhvb2tzWyB0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgXTtcblxuXHRcdFx0Ly8gSWYgc2V0IHJldHVybnMgdW5kZWZpbmVkLCBmYWxsIGJhY2sgdG8gbm9ybWFsIHNldHRpbmdcblx0XHRcdGlmICggIWhvb2tzIHx8ICEoIFwic2V0XCIgaW4gaG9va3MgKSB8fCBob29rcy5zZXQoIHRoaXMsIHZhbCwgXCJ2YWx1ZVwiICkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHZhbDtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXHR2YWxIb29rczoge1xuXHRcdHNlbGVjdDoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIHZhbHVlLCBvcHRpb24sIGksXG5cdFx0XHRcdFx0b3B0aW9ucyA9IGVsZW0ub3B0aW9ucyxcblx0XHRcdFx0XHRpbmRleCA9IGVsZW0uc2VsZWN0ZWRJbmRleCxcblx0XHRcdFx0XHRvbmUgPSBlbGVtLnR5cGUgPT09IFwic2VsZWN0LW9uZVwiLFxuXHRcdFx0XHRcdHZhbHVlcyA9IG9uZSA/IG51bGwgOiBbXSxcblx0XHRcdFx0XHRtYXggPSBvbmUgPyBpbmRleCArIDEgOiBvcHRpb25zLmxlbmd0aDtcblxuXHRcdFx0XHRpZiAoIGluZGV4IDwgMCApIHtcblx0XHRcdFx0XHRpID0gbWF4O1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aSA9IG9uZSA/IGluZGV4IDogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIHNlbGVjdGVkIG9wdGlvbnNcblx0XHRcdFx0Zm9yICggOyBpIDwgbWF4OyBpKysgKSB7XG5cdFx0XHRcdFx0b3B0aW9uID0gb3B0aW9uc1sgaSBdO1xuXG5cdFx0XHRcdFx0aWYgKCBvcHRpb24uc2VsZWN0ZWQgJiZcblxuXHRcdFx0XHRcdFx0XHQvLyBEb24ndCByZXR1cm4gb3B0aW9ucyB0aGF0IGFyZSBkaXNhYmxlZCBvciBpbiBhIGRpc2FibGVkIG9wdGdyb3VwXG5cdFx0XHRcdFx0XHRcdCFvcHRpb24uZGlzYWJsZWQgJiZcblx0XHRcdFx0XHRcdFx0KCAhb3B0aW9uLnBhcmVudE5vZGUuZGlzYWJsZWQgfHxcblx0XHRcdFx0XHRcdFx0XHQhbm9kZU5hbWUoIG9wdGlvbi5wYXJlbnROb2RlLCBcIm9wdGdyb3VwXCIgKSApICkge1xuXG5cdFx0XHRcdFx0XHQvLyBHZXQgdGhlIHNwZWNpZmljIHZhbHVlIGZvciB0aGUgb3B0aW9uXG5cdFx0XHRcdFx0XHR2YWx1ZSA9IGpRdWVyeSggb3B0aW9uICkudmFsKCk7XG5cblx0XHRcdFx0XHRcdC8vIFdlIGRvbid0IG5lZWQgYW4gYXJyYXkgZm9yIG9uZSBzZWxlY3RzXG5cdFx0XHRcdFx0XHRpZiAoIG9uZSApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBNdWx0aS1TZWxlY3RzIHJldHVybiBhbiBhcnJheVxuXHRcdFx0XHRcdFx0dmFsdWVzLnB1c2goIHZhbHVlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHZhbHVlcztcblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlICkge1xuXHRcdFx0XHR2YXIgb3B0aW9uU2V0LCBvcHRpb24sXG5cdFx0XHRcdFx0b3B0aW9ucyA9IGVsZW0ub3B0aW9ucyxcblx0XHRcdFx0XHR2YWx1ZXMgPSBqUXVlcnkubWFrZUFycmF5KCB2YWx1ZSApLFxuXHRcdFx0XHRcdGkgPSBvcHRpb25zLmxlbmd0aDtcblxuXHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRvcHRpb24gPSBvcHRpb25zWyBpIF07XG5cblx0XHRcdFx0XHRpZiAoICggb3B0aW9uLnNlbGVjdGVkID1cblx0XHRcdFx0XHRcdGpRdWVyeS5pbkFycmF5KCBqUXVlcnkoIG9wdGlvbiApLnZhbCgpLCB2YWx1ZXMgKSA+IC0xXG5cdFx0XHRcdFx0KSApIHtcblx0XHRcdFx0XHRcdG9wdGlvblNldCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRm9yY2UgYnJvd3NlcnMgdG8gYmVoYXZlIGNvbnNpc3RlbnRseSB3aGVuIG5vbi1tYXRjaGluZyB2YWx1ZSBpcyBzZXRcblx0XHRcdFx0aWYgKCAhb3B0aW9uU2V0ICkge1xuXHRcdFx0XHRcdGVsZW0uc2VsZWN0ZWRJbmRleCA9IC0xO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59ICk7XG5cbmlmICggaXNJRSApIHtcblx0alF1ZXJ5LnZhbEhvb2tzLm9wdGlvbiA9IHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0XHR2YXIgdmFsID0gZWxlbS5nZXRBdHRyaWJ1dGUoIFwidmFsdWVcIiApO1xuXHRcdFx0cmV0dXJuIHZhbCAhPSBudWxsID9cblx0XHRcdFx0dmFsIDpcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTEwIC0gMTErXG5cdFx0XHRcdC8vIG9wdGlvbi50ZXh0IHRocm93cyBleGNlcHRpb25zICh0cmFjLTE0Njg2LCB0cmFjLTE0ODU4KVxuXHRcdFx0XHQvLyBTdHJpcCBhbmQgY29sbGFwc2Ugd2hpdGVzcGFjZVxuXHRcdFx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNzdHJpcC1hbmQtY29sbGFwc2Utd2hpdGVzcGFjZVxuXHRcdFx0XHRzdHJpcEFuZENvbGxhcHNlKCBqUXVlcnkudGV4dCggZWxlbSApICk7XG5cdFx0fVxuXHR9O1xufVxuXG4vLyBSYWRpb3MgYW5kIGNoZWNrYm94ZXMgZ2V0dGVyL3NldHRlclxualF1ZXJ5LmVhY2goIFsgXCJyYWRpb1wiLCBcImNoZWNrYm94XCIgXSwgZnVuY3Rpb24oKSB7XG5cdGpRdWVyeS52YWxIb29rc1sgdGhpcyBdID0ge1xuXHRcdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlICkge1xuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdFx0XHRyZXR1cm4gKCBlbGVtLmNoZWNrZWQgPSBqUXVlcnkuaW5BcnJheSggalF1ZXJ5KCBlbGVtICkudmFsKCksIHZhbHVlICkgPiAtMSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn0gKTtcblxudmFyIHJmb2N1c01vcnBoID0gL14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLFxuXHRzdG9wUHJvcGFnYXRpb25DYWxsYmFjayA9IGZ1bmN0aW9uKCBlICkge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH07XG5cbmpRdWVyeS5leHRlbmQoIGpRdWVyeS5ldmVudCwge1xuXG5cdHRyaWdnZXI6IGZ1bmN0aW9uKCBldmVudCwgZGF0YSwgZWxlbSwgb25seUhhbmRsZXJzICkge1xuXG5cdFx0dmFyIGksIGN1ciwgdG1wLCBidWJibGVUeXBlLCBvbnR5cGUsIGhhbmRsZSwgc3BlY2lhbCwgbGFzdEVsZW1lbnQsXG5cdFx0XHRldmVudFBhdGggPSBbIGVsZW0gfHwgZG9jdW1lbnQkMSBdLFxuXHRcdFx0dHlwZSA9IGhhc093bi5jYWxsKCBldmVudCwgXCJ0eXBlXCIgKSA/IGV2ZW50LnR5cGUgOiBldmVudCxcblx0XHRcdG5hbWVzcGFjZXMgPSBoYXNPd24uY2FsbCggZXZlbnQsIFwibmFtZXNwYWNlXCIgKSA/IGV2ZW50Lm5hbWVzcGFjZS5zcGxpdCggXCIuXCIgKSA6IFtdO1xuXG5cdFx0Y3VyID0gbGFzdEVsZW1lbnQgPSB0bXAgPSBlbGVtID0gZWxlbSB8fCBkb2N1bWVudCQxO1xuXG5cdFx0Ly8gRG9uJ3QgZG8gZXZlbnRzIG9uIHRleHQgYW5kIGNvbW1lbnQgbm9kZXNcblx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDMgfHwgZWxlbS5ub2RlVHlwZSA9PT0gOCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBmb2N1cy9ibHVyIG1vcnBocyB0byBmb2N1c2luL291dDsgZW5zdXJlIHdlJ3JlIG5vdCBmaXJpbmcgdGhlbSByaWdodCBub3dcblx0XHRpZiAoIHJmb2N1c01vcnBoLnRlc3QoIHR5cGUgKyBqUXVlcnkuZXZlbnQudHJpZ2dlcmVkICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCB0eXBlLmluZGV4T2YoIFwiLlwiICkgPiAtMSApIHtcblxuXHRcdFx0Ly8gTmFtZXNwYWNlZCB0cmlnZ2VyOyBjcmVhdGUgYSByZWdleHAgdG8gbWF0Y2ggZXZlbnQgdHlwZSBpbiBoYW5kbGUoKVxuXHRcdFx0bmFtZXNwYWNlcyA9IHR5cGUuc3BsaXQoIFwiLlwiICk7XG5cdFx0XHR0eXBlID0gbmFtZXNwYWNlcy5zaGlmdCgpO1xuXHRcdFx0bmFtZXNwYWNlcy5zb3J0KCk7XG5cdFx0fVxuXHRcdG9udHlwZSA9IHR5cGUuaW5kZXhPZiggXCI6XCIgKSA8IDAgJiYgXCJvblwiICsgdHlwZTtcblxuXHRcdC8vIENhbGxlciBjYW4gcGFzcyBpbiBhIGpRdWVyeS5FdmVudCBvYmplY3QsIE9iamVjdCwgb3IganVzdCBhbiBldmVudCB0eXBlIHN0cmluZ1xuXHRcdGV2ZW50ID0gZXZlbnRbIGpRdWVyeS5leHBhbmRvIF0gP1xuXHRcdFx0ZXZlbnQgOlxuXHRcdFx0bmV3IGpRdWVyeS5FdmVudCggdHlwZSwgdHlwZW9mIGV2ZW50ID09PSBcIm9iamVjdFwiICYmIGV2ZW50ICk7XG5cblx0XHQvLyBUcmlnZ2VyIGJpdG1hc2s6ICYgMSBmb3IgbmF0aXZlIGhhbmRsZXJzOyAmIDIgZm9yIGpRdWVyeSAoYWx3YXlzIHRydWUpXG5cdFx0ZXZlbnQuaXNUcmlnZ2VyID0gb25seUhhbmRsZXJzID8gMiA6IDM7XG5cdFx0ZXZlbnQubmFtZXNwYWNlID0gbmFtZXNwYWNlcy5qb2luKCBcIi5cIiApO1xuXHRcdGV2ZW50LnJuYW1lc3BhY2UgPSBldmVudC5uYW1lc3BhY2UgP1xuXHRcdFx0bmV3IFJlZ0V4cCggXCIoXnxcXFxcLilcIiArIG5hbWVzcGFjZXMuam9pbiggXCJcXFxcLig/Oi4qXFxcXC58KVwiICkgKyBcIihcXFxcLnwkKVwiICkgOlxuXHRcdFx0bnVsbDtcblxuXHRcdC8vIENsZWFuIHVwIHRoZSBldmVudCBpbiBjYXNlIGl0IGlzIGJlaW5nIHJldXNlZFxuXHRcdGV2ZW50LnJlc3VsdCA9IHVuZGVmaW5lZDtcblx0XHRpZiAoICFldmVudC50YXJnZXQgKSB7XG5cdFx0XHRldmVudC50YXJnZXQgPSBlbGVtO1xuXHRcdH1cblxuXHRcdC8vIENsb25lIGFueSBpbmNvbWluZyBkYXRhIGFuZCBwcmVwZW5kIHRoZSBldmVudCwgY3JlYXRpbmcgdGhlIGhhbmRsZXIgYXJnIGxpc3Rcblx0XHRkYXRhID0gZGF0YSA9PSBudWxsID9cblx0XHRcdFsgZXZlbnQgXSA6XG5cdFx0XHRqUXVlcnkubWFrZUFycmF5KCBkYXRhLCBbIGV2ZW50IF0gKTtcblxuXHRcdC8vIEFsbG93IHNwZWNpYWwgZXZlbnRzIHRvIGRyYXcgb3V0c2lkZSB0aGUgbGluZXNcblx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblx0XHRpZiAoICFvbmx5SGFuZGxlcnMgJiYgc3BlY2lhbC50cmlnZ2VyICYmIHNwZWNpYWwudHJpZ2dlci5hcHBseSggZWxlbSwgZGF0YSApID09PSBmYWxzZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBEZXRlcm1pbmUgZXZlbnQgcHJvcGFnYXRpb24gcGF0aCBpbiBhZHZhbmNlLCBwZXIgVzNDIGV2ZW50cyBzcGVjICh0cmFjLTk5NTEpXG5cdFx0Ly8gQnViYmxlIHVwIHRvIGRvY3VtZW50LCB0aGVuIHRvIHdpbmRvdzsgd2F0Y2ggZm9yIGEgZ2xvYmFsIG93bmVyRG9jdW1lbnQgdmFyICh0cmFjLTk3MjQpXG5cdFx0aWYgKCAhb25seUhhbmRsZXJzICYmICFzcGVjaWFsLm5vQnViYmxlICYmICFpc1dpbmRvdyggZWxlbSApICkge1xuXG5cdFx0XHRidWJibGVUeXBlID0gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgfHwgdHlwZTtcblx0XHRcdGlmICggIXJmb2N1c01vcnBoLnRlc3QoIGJ1YmJsZVR5cGUgKyB0eXBlICkgKSB7XG5cdFx0XHRcdGN1ciA9IGN1ci5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXHRcdFx0Zm9yICggOyBjdXI7IGN1ciA9IGN1ci5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRldmVudFBhdGgucHVzaCggY3VyICk7XG5cdFx0XHRcdHRtcCA9IGN1cjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gT25seSBhZGQgd2luZG93IGlmIHdlIGdvdCB0byBkb2N1bWVudCAoZS5nLiwgbm90IHBsYWluIG9iaiBvciBkZXRhY2hlZCBET00pXG5cdFx0XHRpZiAoIHRtcCA9PT0gKCBlbGVtLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQkMSApICkge1xuXHRcdFx0XHRldmVudFBhdGgucHVzaCggdG1wLmRlZmF1bHRWaWV3IHx8IHRtcC5wYXJlbnRXaW5kb3cgfHwgd2luZG93ICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRmlyZSBoYW5kbGVycyBvbiB0aGUgZXZlbnQgcGF0aFxuXHRcdGkgPSAwO1xuXHRcdHdoaWxlICggKCBjdXIgPSBldmVudFBhdGhbIGkrKyBdICkgJiYgIWV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cdFx0XHRsYXN0RWxlbWVudCA9IGN1cjtcblx0XHRcdGV2ZW50LnR5cGUgPSBpID4gMSA/XG5cdFx0XHRcdGJ1YmJsZVR5cGUgOlxuXHRcdFx0XHRzcGVjaWFsLmJpbmRUeXBlIHx8IHR5cGU7XG5cblx0XHRcdC8vIGpRdWVyeSBoYW5kbGVyXG5cdFx0XHRoYW5kbGUgPSAoIGRhdGFQcml2LmdldCggY3VyLCBcImV2ZW50c1wiICkgfHwgT2JqZWN0LmNyZWF0ZSggbnVsbCApIClbIGV2ZW50LnR5cGUgXSAmJlxuXHRcdFx0XHRkYXRhUHJpdi5nZXQoIGN1ciwgXCJoYW5kbGVcIiApO1xuXHRcdFx0aWYgKCBoYW5kbGUgKSB7XG5cdFx0XHRcdGhhbmRsZS5hcHBseSggY3VyLCBkYXRhICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE5hdGl2ZSBoYW5kbGVyXG5cdFx0XHRoYW5kbGUgPSBvbnR5cGUgJiYgY3VyWyBvbnR5cGUgXTtcblx0XHRcdGlmICggaGFuZGxlICYmIGhhbmRsZS5hcHBseSAmJiBhY2NlcHREYXRhKCBjdXIgKSApIHtcblx0XHRcdFx0ZXZlbnQucmVzdWx0ID0gaGFuZGxlLmFwcGx5KCBjdXIsIGRhdGEgKTtcblx0XHRcdFx0aWYgKCBldmVudC5yZXN1bHQgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZXZlbnQudHlwZSA9IHR5cGU7XG5cblx0XHQvLyBJZiBub2JvZHkgcHJldmVudGVkIHRoZSBkZWZhdWx0IGFjdGlvbiwgZG8gaXQgbm93XG5cdFx0aWYgKCAhb25seUhhbmRsZXJzICYmICFldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSApIHtcblxuXHRcdFx0aWYgKCAoICFzcGVjaWFsLl9kZWZhdWx0IHx8XG5cdFx0XHRcdHNwZWNpYWwuX2RlZmF1bHQuYXBwbHkoIGV2ZW50UGF0aC5wb3AoKSwgZGF0YSApID09PSBmYWxzZSApICYmXG5cdFx0XHRcdGFjY2VwdERhdGEoIGVsZW0gKSApIHtcblxuXHRcdFx0XHQvLyBDYWxsIGEgbmF0aXZlIERPTSBtZXRob2Qgb24gdGhlIHRhcmdldCB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgdGhlIGV2ZW50LlxuXHRcdFx0XHQvLyBEb24ndCBkbyBkZWZhdWx0IGFjdGlvbnMgb24gd2luZG93LCB0aGF0J3Mgd2hlcmUgZ2xvYmFsIHZhcmlhYmxlcyBiZSAodHJhYy02MTcwKVxuXHRcdFx0XHRpZiAoIG9udHlwZSAmJiB0eXBlb2YgZWxlbVsgdHlwZSBdID09PSBcImZ1bmN0aW9uXCIgJiYgIWlzV2luZG93KCBlbGVtICkgKSB7XG5cblx0XHRcdFx0XHQvLyBEb24ndCByZS10cmlnZ2VyIGFuIG9uRk9PIGV2ZW50IHdoZW4gd2UgY2FsbCBpdHMgRk9PKCkgbWV0aG9kXG5cdFx0XHRcdFx0dG1wID0gZWxlbVsgb250eXBlIF07XG5cblx0XHRcdFx0XHRpZiAoIHRtcCApIHtcblx0XHRcdFx0XHRcdGVsZW1bIG9udHlwZSBdID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBQcmV2ZW50IHJlLXRyaWdnZXJpbmcgb2YgdGhlIHNhbWUgZXZlbnQsIHNpbmNlIHdlIGFscmVhZHkgYnViYmxlZCBpdCBhYm92ZVxuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgPSB0eXBlO1xuXG5cdFx0XHRcdFx0aWYgKCBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpICkge1xuXHRcdFx0XHRcdFx0bGFzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggdHlwZSwgc3RvcFByb3BhZ2F0aW9uQ2FsbGJhY2sgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRlbGVtWyB0eXBlIF0oKTtcblxuXHRcdFx0XHRcdGlmICggZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblx0XHRcdFx0XHRcdGxhc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIHR5cGUsIHN0b3BQcm9wYWdhdGlvbkNhbGxiYWNrICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0XHRcdGlmICggdG1wICkge1xuXHRcdFx0XHRcdFx0ZWxlbVsgb250eXBlIF0gPSB0bXA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50LnJlc3VsdDtcblx0fSxcblxuXHQvLyBQaWdneWJhY2sgb24gYSBkb25vciBldmVudCB0byBzaW11bGF0ZSBhIGRpZmZlcmVudCBvbmVcblx0Ly8gVXNlZCBvbmx5IGZvciBgZm9jdXMoaW4gfCBvdXQpYCBldmVudHNcblx0c2ltdWxhdGU6IGZ1bmN0aW9uKCB0eXBlLCBlbGVtLCBldmVudCApIHtcblx0XHR2YXIgZSA9IGpRdWVyeS5leHRlbmQoXG5cdFx0XHRuZXcgalF1ZXJ5LkV2ZW50KCksXG5cdFx0XHRldmVudCxcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0aXNTaW11bGF0ZWQ6IHRydWVcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIGUsIG51bGwsIGVsZW0gKTtcblx0fVxuXG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblxuXHR0cmlnZ2VyOiBmdW5jdGlvbiggdHlwZSwgZGF0YSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCB0eXBlLCBkYXRhLCB0aGlzICk7XG5cdFx0fSApO1xuXHR9LFxuXHR0cmlnZ2VySGFuZGxlcjogZnVuY3Rpb24oIHR5cGUsIGRhdGEgKSB7XG5cdFx0dmFyIGVsZW0gPSB0aGlzWyAwIF07XG5cdFx0aWYgKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5ldmVudC50cmlnZ2VyKCB0eXBlLCBkYXRhLCBlbGVtLCB0cnVlICk7XG5cdFx0fVxuXHR9XG59ICk7XG5cbnZhciBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcblxudmFyIG5vbmNlID0geyBndWlkOiBEYXRlLm5vdygpIH07XG5cbnZhciBycXVlcnkgPSAvXFw/LztcblxuLy8gQ3Jvc3MtYnJvd3NlciB4bWwgcGFyc2luZ1xualF1ZXJ5LnBhcnNlWE1MID0gZnVuY3Rpb24oIGRhdGEgKSB7XG5cdHZhciB4bWwsIHBhcnNlckVycm9yRWxlbTtcblx0aWYgKCAhZGF0YSB8fCB0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8vIFN1cHBvcnQ6IElFIDkgLSAxMStcblx0Ly8gSUUgdGhyb3dzIG9uIHBhcnNlRnJvbVN0cmluZyB3aXRoIGludmFsaWQgaW5wdXQuXG5cdHRyeSB7XG5cdFx0eG1sID0gKCBuZXcgd2luZG93LkRPTVBhcnNlcigpICkucGFyc2VGcm9tU3RyaW5nKCBkYXRhLCBcInRleHQveG1sXCIgKTtcblx0fSBjYXRjaCAoIGUgKSB7fVxuXG5cdHBhcnNlckVycm9yRWxlbSA9IHhtbCAmJiB4bWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIFwicGFyc2VyZXJyb3JcIiApWyAwIF07XG5cdGlmICggIXhtbCB8fCBwYXJzZXJFcnJvckVsZW0gKSB7XG5cdFx0alF1ZXJ5LmVycm9yKCBcIkludmFsaWQgWE1MOiBcIiArIChcblx0XHRcdHBhcnNlckVycm9yRWxlbSA/XG5cdFx0XHRcdGpRdWVyeS5tYXAoIHBhcnNlckVycm9yRWxlbS5jaGlsZE5vZGVzLCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsLnRleHRDb250ZW50O1xuXHRcdFx0XHR9ICkuam9pbiggXCJcXG5cIiApIDpcblx0XHRcdFx0ZGF0YVxuXHRcdCkgKTtcblx0fVxuXHRyZXR1cm4geG1sO1xufTtcblxudmFyXG5cdHJicmFja2V0ID0gL1xcW1xcXSQvLFxuXHRyQ1JMRiA9IC9cXHI/XFxuL2csXG5cdHJzdWJtaXR0ZXJUeXBlcyA9IC9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxcblx0cnN1Ym1pdHRhYmxlID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO1xuXG5mdW5jdGlvbiBidWlsZFBhcmFtcyggcHJlZml4LCBvYmosIHRyYWRpdGlvbmFsLCBhZGQgKSB7XG5cdHZhciBuYW1lO1xuXG5cdGlmICggQXJyYXkuaXNBcnJheSggb2JqICkgKSB7XG5cblx0XHQvLyBTZXJpYWxpemUgYXJyYXkgaXRlbS5cblx0XHRqUXVlcnkuZWFjaCggb2JqLCBmdW5jdGlvbiggaSwgdiApIHtcblx0XHRcdGlmICggdHJhZGl0aW9uYWwgfHwgcmJyYWNrZXQudGVzdCggcHJlZml4ICkgKSB7XG5cblx0XHRcdFx0Ly8gVHJlYXQgZWFjaCBhcnJheSBpdGVtIGFzIGEgc2NhbGFyLlxuXHRcdFx0XHRhZGQoIHByZWZpeCwgdiApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIEl0ZW0gaXMgbm9uLXNjYWxhciAoYXJyYXkgb3Igb2JqZWN0KSwgZW5jb2RlIGl0cyBudW1lcmljIGluZGV4LlxuXHRcdFx0XHRidWlsZFBhcmFtcyhcblx0XHRcdFx0XHRwcmVmaXggKyBcIltcIiArICggdHlwZW9mIHYgPT09IFwib2JqZWN0XCIgJiYgdiAhPSBudWxsID8gaSA6IFwiXCIgKSArIFwiXVwiLFxuXHRcdFx0XHRcdHYsXG5cdFx0XHRcdFx0dHJhZGl0aW9uYWwsXG5cdFx0XHRcdFx0YWRkXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdH0gZWxzZSBpZiAoICF0cmFkaXRpb25hbCAmJiB0b1R5cGUoIG9iaiApID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0Ly8gU2VyaWFsaXplIG9iamVjdCBpdGVtLlxuXHRcdGZvciAoIG5hbWUgaW4gb2JqICkge1xuXHRcdFx0YnVpbGRQYXJhbXMoIHByZWZpeCArIFwiW1wiICsgbmFtZSArIFwiXVwiLCBvYmpbIG5hbWUgXSwgdHJhZGl0aW9uYWwsIGFkZCApO1xuXHRcdH1cblxuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gU2VyaWFsaXplIHNjYWxhciBpdGVtLlxuXHRcdGFkZCggcHJlZml4LCBvYmogKTtcblx0fVxufVxuXG4vLyBTZXJpYWxpemUgYW4gYXJyYXkgb2YgZm9ybSBlbGVtZW50cyBvciBhIHNldCBvZlxuLy8ga2V5L3ZhbHVlcyBpbnRvIGEgcXVlcnkgc3RyaW5nXG5qUXVlcnkucGFyYW0gPSBmdW5jdGlvbiggYSwgdHJhZGl0aW9uYWwgKSB7XG5cdHZhciBwcmVmaXgsXG5cdFx0cyA9IFtdLFxuXHRcdGFkZCA9IGZ1bmN0aW9uKCBrZXksIHZhbHVlT3JGdW5jdGlvbiApIHtcblxuXHRcdFx0Ly8gSWYgdmFsdWUgaXMgYSBmdW5jdGlvbiwgaW52b2tlIGl0IGFuZCB1c2UgaXRzIHJldHVybiB2YWx1ZVxuXHRcdFx0dmFyIHZhbHVlID0gdHlwZW9mIHZhbHVlT3JGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiID9cblx0XHRcdFx0dmFsdWVPckZ1bmN0aW9uKCkgOlxuXHRcdFx0XHR2YWx1ZU9yRnVuY3Rpb247XG5cblx0XHRcdHNbIHMubGVuZ3RoIF0gPSBlbmNvZGVVUklDb21wb25lbnQoIGtleSApICsgXCI9XCIgK1xuXHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnQoIHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKTtcblx0XHR9O1xuXG5cdGlmICggYSA9PSBudWxsICkge1xuXHRcdHJldHVybiBcIlwiO1xuXHR9XG5cblx0Ly8gSWYgYW4gYXJyYXkgd2FzIHBhc3NlZCBpbiwgYXNzdW1lIHRoYXQgaXQgaXMgYW4gYXJyYXkgb2YgZm9ybSBlbGVtZW50cy5cblx0aWYgKCBBcnJheS5pc0FycmF5KCBhICkgfHwgKCBhLmpxdWVyeSAmJiAhalF1ZXJ5LmlzUGxhaW5PYmplY3QoIGEgKSApICkge1xuXG5cdFx0Ly8gU2VyaWFsaXplIHRoZSBmb3JtIGVsZW1lbnRzXG5cdFx0alF1ZXJ5LmVhY2goIGEsIGZ1bmN0aW9uKCkge1xuXHRcdFx0YWRkKCB0aGlzLm5hbWUsIHRoaXMudmFsdWUgKTtcblx0XHR9ICk7XG5cblx0fSBlbHNlIHtcblxuXHRcdC8vIElmIHRyYWRpdGlvbmFsLCBlbmNvZGUgdGhlIFwib2xkXCIgd2F5ICh0aGUgd2F5IDEuMy4yIG9yIG9sZGVyXG5cdFx0Ly8gZGlkIGl0KSwgb3RoZXJ3aXNlIGVuY29kZSBwYXJhbXMgcmVjdXJzaXZlbHkuXG5cdFx0Zm9yICggcHJlZml4IGluIGEgKSB7XG5cdFx0XHRidWlsZFBhcmFtcyggcHJlZml4LCBhWyBwcmVmaXggXSwgdHJhZGl0aW9uYWwsIGFkZCApO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgcmVzdWx0aW5nIHNlcmlhbGl6YXRpb25cblx0cmV0dXJuIHMuam9pbiggXCImXCIgKTtcbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0c2VyaWFsaXplOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4galF1ZXJ5LnBhcmFtKCB0aGlzLnNlcmlhbGl6ZUFycmF5KCkgKTtcblx0fSxcblx0c2VyaWFsaXplQXJyYXk6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcCggZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIENhbiBhZGQgcHJvcEhvb2sgZm9yIFwiZWxlbWVudHNcIiB0byBmaWx0ZXIgb3IgYWRkIGZvcm0gZWxlbWVudHNcblx0XHRcdHZhciBlbGVtZW50cyA9IGpRdWVyeS5wcm9wKCB0aGlzLCBcImVsZW1lbnRzXCIgKTtcblx0XHRcdHJldHVybiBlbGVtZW50cyA/IGpRdWVyeS5tYWtlQXJyYXkoIGVsZW1lbnRzICkgOiB0aGlzO1xuXHRcdH0gKS5maWx0ZXIoIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHR5cGUgPSB0aGlzLnR5cGU7XG5cblx0XHRcdC8vIFVzZSAuaXMoIFwiOmRpc2FibGVkXCIgKSBzbyB0aGF0IGZpZWxkc2V0W2Rpc2FibGVkXSB3b3Jrc1xuXHRcdFx0cmV0dXJuIHRoaXMubmFtZSAmJiAhalF1ZXJ5KCB0aGlzICkuaXMoIFwiOmRpc2FibGVkXCIgKSAmJlxuXHRcdFx0XHRyc3VibWl0dGFibGUudGVzdCggdGhpcy5ub2RlTmFtZSApICYmICFyc3VibWl0dGVyVHlwZXMudGVzdCggdHlwZSApICYmXG5cdFx0XHRcdCggdGhpcy5jaGVja2VkIHx8ICFyY2hlY2thYmxlVHlwZS50ZXN0KCB0eXBlICkgKTtcblx0XHR9ICkubWFwKCBmdW5jdGlvbiggX2ksIGVsZW0gKSB7XG5cdFx0XHR2YXIgdmFsID0galF1ZXJ5KCB0aGlzICkudmFsKCk7XG5cblx0XHRcdGlmICggdmFsID09IG51bGwgKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbCApICkge1xuXHRcdFx0XHRyZXR1cm4galF1ZXJ5Lm1hcCggdmFsLCBmdW5jdGlvbiggdmFsICkge1xuXHRcdFx0XHRcdHJldHVybiB7IG5hbWU6IGVsZW0ubmFtZSwgdmFsdWU6IHZhbC5yZXBsYWNlKCByQ1JMRiwgXCJcXHJcXG5cIiApIH07XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHsgbmFtZTogZWxlbS5uYW1lLCB2YWx1ZTogdmFsLnJlcGxhY2UoIHJDUkxGLCBcIlxcclxcblwiICkgfTtcblx0XHR9ICkuZ2V0KCk7XG5cdH1cbn0gKTtcblxudmFyXG5cdHIyMCA9IC8lMjAvZyxcblx0cmhhc2ggPSAvIy4qJC8sXG5cdHJhbnRpQ2FjaGUgPSAvKFs/Jl0pXz1bXiZdKi8sXG5cdHJoZWFkZXJzID0gL14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9tZyxcblxuXHQvLyB0cmFjLTc2NTMsIHRyYWMtODEyNSwgdHJhYy04MTUyOiBsb2NhbCBwcm90b2NvbCBkZXRlY3Rpb25cblx0cmxvY2FsUHJvdG9jb2wgPSAvXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxcblx0cm5vQ29udGVudCA9IC9eKD86R0VUfEhFQUQpJC8sXG5cdHJwcm90b2NvbCA9IC9eXFwvXFwvLyxcblxuXHQvKiBQcmVmaWx0ZXJzXG5cdCAqIDEpIFRoZXkgYXJlIHVzZWZ1bCB0byBpbnRyb2R1Y2UgY3VzdG9tIGRhdGFUeXBlcyAoc2VlIGFqYXgvanNvbnAuanMgZm9yIGFuIGV4YW1wbGUpXG5cdCAqIDIpIFRoZXNlIGFyZSBjYWxsZWQ6XG5cdCAqICAgIC0gQkVGT1JFIGFza2luZyBmb3IgYSB0cmFuc3BvcnRcblx0ICogICAgLSBBRlRFUiBwYXJhbSBzZXJpYWxpemF0aW9uIChzLmRhdGEgaXMgYSBzdHJpbmcgaWYgcy5wcm9jZXNzRGF0YSBpcyB0cnVlKVxuXHQgKiAzKSBrZXkgaXMgdGhlIGRhdGFUeXBlXG5cdCAqIDQpIHRoZSBjYXRjaGFsbCBzeW1ib2wgXCIqXCIgY2FuIGJlIHVzZWRcblx0ICogNSkgZXhlY3V0aW9uIHdpbGwgc3RhcnQgd2l0aCB0cmFuc3BvcnQgZGF0YVR5cGUgYW5kIFRIRU4gY29udGludWUgZG93biB0byBcIipcIiBpZiBuZWVkZWRcblx0ICovXG5cdHByZWZpbHRlcnMgPSB7fSxcblxuXHQvKiBUcmFuc3BvcnRzIGJpbmRpbmdzXG5cdCAqIDEpIGtleSBpcyB0aGUgZGF0YVR5cGVcblx0ICogMikgdGhlIGNhdGNoYWxsIHN5bWJvbCBcIipcIiBjYW4gYmUgdXNlZFxuXHQgKiAzKSBzZWxlY3Rpb24gd2lsbCBzdGFydCB3aXRoIHRyYW5zcG9ydCBkYXRhVHlwZSBhbmQgVEhFTiBnbyB0byBcIipcIiBpZiBuZWVkZWRcblx0ICovXG5cdHRyYW5zcG9ydHMgPSB7fSxcblxuXHQvLyBBdm9pZCBjb21tZW50LXByb2xvZyBjaGFyIHNlcXVlbmNlICh0cmFjLTEwMDk4KTsgbXVzdCBhcHBlYXNlIGxpbnQgYW5kIGV2YWRlIGNvbXByZXNzaW9uXG5cdGFsbFR5cGVzID0gXCIqL1wiLmNvbmNhdCggXCIqXCIgKSxcblxuXHQvLyBBbmNob3IgdGFnIGZvciBwYXJzaW5nIHRoZSBkb2N1bWVudCBvcmlnaW5cblx0b3JpZ2luQW5jaG9yID0gZG9jdW1lbnQkMS5jcmVhdGVFbGVtZW50KCBcImFcIiApO1xuXG5vcmlnaW5BbmNob3IuaHJlZiA9IGxvY2F0aW9uLmhyZWY7XG5cbi8vIEJhc2UgXCJjb25zdHJ1Y3RvclwiIGZvciBqUXVlcnkuYWpheFByZWZpbHRlciBhbmQgalF1ZXJ5LmFqYXhUcmFuc3BvcnRcbmZ1bmN0aW9uIGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyggc3RydWN0dXJlICkge1xuXG5cdC8vIGRhdGFUeXBlRXhwcmVzc2lvbiBpcyBvcHRpb25hbCBhbmQgZGVmYXVsdHMgdG8gXCIqXCJcblx0cmV0dXJuIGZ1bmN0aW9uKCBkYXRhVHlwZUV4cHJlc3Npb24sIGZ1bmMgKSB7XG5cblx0XHRpZiAoIHR5cGVvZiBkYXRhVHlwZUV4cHJlc3Npb24gIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRmdW5jID0gZGF0YVR5cGVFeHByZXNzaW9uO1xuXHRcdFx0ZGF0YVR5cGVFeHByZXNzaW9uID0gXCIqXCI7XG5cdFx0fVxuXG5cdFx0dmFyIGRhdGFUeXBlLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRkYXRhVHlwZXMgPSBkYXRhVHlwZUV4cHJlc3Npb24udG9Mb3dlckNhc2UoKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFtdO1xuXG5cdFx0aWYgKCB0eXBlb2YgZnVuYyA9PT0gXCJmdW5jdGlvblwiICkge1xuXG5cdFx0XHQvLyBGb3IgZWFjaCBkYXRhVHlwZSBpbiB0aGUgZGF0YVR5cGVFeHByZXNzaW9uXG5cdFx0XHR3aGlsZSAoICggZGF0YVR5cGUgPSBkYXRhVHlwZXNbIGkrKyBdICkgKSB7XG5cblx0XHRcdFx0Ly8gUHJlcGVuZCBpZiByZXF1ZXN0ZWRcblx0XHRcdFx0aWYgKCBkYXRhVHlwZVsgMCBdID09PSBcIitcIiApIHtcblx0XHRcdFx0XHRkYXRhVHlwZSA9IGRhdGFUeXBlLnNsaWNlKCAxICkgfHwgXCIqXCI7XG5cdFx0XHRcdFx0KCBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gPSBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gfHwgW10gKS51bnNoaWZ0KCBmdW5jICk7XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGFwcGVuZFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCggc3RydWN0dXJlWyBkYXRhVHlwZSBdID0gc3RydWN0dXJlWyBkYXRhVHlwZSBdIHx8IFtdICkucHVzaCggZnVuYyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG4vLyBCYXNlIGluc3BlY3Rpb24gZnVuY3Rpb24gZm9yIHByZWZpbHRlcnMgYW5kIHRyYW5zcG9ydHNcbmZ1bmN0aW9uIGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBzdHJ1Y3R1cmUsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucywganFYSFIgKSB7XG5cblx0dmFyIGluc3BlY3RlZCA9IHt9LFxuXHRcdHNlZWtpbmdUcmFuc3BvcnQgPSAoIHN0cnVjdHVyZSA9PT0gdHJhbnNwb3J0cyApO1xuXG5cdGZ1bmN0aW9uIGluc3BlY3QoIGRhdGFUeXBlICkge1xuXHRcdHZhciBzZWxlY3RlZDtcblx0XHRpbnNwZWN0ZWRbIGRhdGFUeXBlIF0gPSB0cnVlO1xuXHRcdGpRdWVyeS5lYWNoKCBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gfHwgW10sIGZ1bmN0aW9uKCBfLCBwcmVmaWx0ZXJPckZhY3RvcnkgKSB7XG5cdFx0XHR2YXIgZGF0YVR5cGVPclRyYW5zcG9ydCA9IHByZWZpbHRlck9yRmFjdG9yeSggb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zLCBqcVhIUiApO1xuXHRcdFx0aWYgKCB0eXBlb2YgZGF0YVR5cGVPclRyYW5zcG9ydCA9PT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHQhc2Vla2luZ1RyYW5zcG9ydCAmJiAhaW5zcGVjdGVkWyBkYXRhVHlwZU9yVHJhbnNwb3J0IF0gKSB7XG5cblx0XHRcdFx0b3B0aW9ucy5kYXRhVHlwZXMudW5zaGlmdCggZGF0YVR5cGVPclRyYW5zcG9ydCApO1xuXHRcdFx0XHRpbnNwZWN0KCBkYXRhVHlwZU9yVHJhbnNwb3J0ICk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0gZWxzZSBpZiAoIHNlZWtpbmdUcmFuc3BvcnQgKSB7XG5cdFx0XHRcdHJldHVybiAhKCBzZWxlY3RlZCA9IGRhdGFUeXBlT3JUcmFuc3BvcnQgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdFx0cmV0dXJuIHNlbGVjdGVkO1xuXHR9XG5cblx0cmV0dXJuIGluc3BlY3QoIG9wdGlvbnMuZGF0YVR5cGVzWyAwIF0gKSB8fCAhaW5zcGVjdGVkWyBcIipcIiBdICYmIGluc3BlY3QoIFwiKlwiICk7XG59XG5cbi8vIEEgc3BlY2lhbCBleHRlbmQgZm9yIGFqYXggb3B0aW9uc1xuLy8gdGhhdCB0YWtlcyBcImZsYXRcIiBvcHRpb25zIChub3QgdG8gYmUgZGVlcCBleHRlbmRlZClcbi8vIEZpeGVzIHRyYWMtOTg4N1xuZnVuY3Rpb24gYWpheEV4dGVuZCggdGFyZ2V0LCBzcmMgKSB7XG5cdHZhciBrZXksIGRlZXAsXG5cdFx0ZmxhdE9wdGlvbnMgPSBqUXVlcnkuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zIHx8IHt9O1xuXG5cdGZvciAoIGtleSBpbiBzcmMgKSB7XG5cdFx0aWYgKCBzcmNbIGtleSBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHQoIGZsYXRPcHRpb25zWyBrZXkgXSA/IHRhcmdldCA6ICggZGVlcCB8fCAoIGRlZXAgPSB7fSApICkgKVsga2V5IF0gPSBzcmNbIGtleSBdO1xuXHRcdH1cblx0fVxuXHRpZiAoIGRlZXAgKSB7XG5cdFx0alF1ZXJ5LmV4dGVuZCggdHJ1ZSwgdGFyZ2V0LCBkZWVwICk7XG5cdH1cblxuXHRyZXR1cm4gdGFyZ2V0O1xufVxuXG4vKiBIYW5kbGVzIHJlc3BvbnNlcyB0byBhbiBhamF4IHJlcXVlc3Q6XG4gKiAtIGZpbmRzIHRoZSByaWdodCBkYXRhVHlwZSAobWVkaWF0ZXMgYmV0d2VlbiBjb250ZW50LXR5cGUgYW5kIGV4cGVjdGVkIGRhdGFUeXBlKVxuICogLSByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlXG4gKi9cbmZ1bmN0aW9uIGFqYXhIYW5kbGVSZXNwb25zZXMoIHMsIGpxWEhSLCByZXNwb25zZXMgKSB7XG5cblx0dmFyIGN0LCB0eXBlLCBmaW5hbERhdGFUeXBlLCBmaXJzdERhdGFUeXBlLFxuXHRcdGNvbnRlbnRzID0gcy5jb250ZW50cyxcblx0XHRkYXRhVHlwZXMgPSBzLmRhdGFUeXBlcztcblxuXHQvLyBSZW1vdmUgYXV0byBkYXRhVHlwZSBhbmQgZ2V0IGNvbnRlbnQtdHlwZSBpbiB0aGUgcHJvY2Vzc1xuXHR3aGlsZSAoIGRhdGFUeXBlc1sgMCBdID09PSBcIipcIiApIHtcblx0XHRkYXRhVHlwZXMuc2hpZnQoKTtcblx0XHRpZiAoIGN0ID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRjdCA9IHMubWltZVR5cGUgfHwganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoIFwiQ29udGVudC1UeXBlXCIgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBDaGVjayBpZiB3ZSdyZSBkZWFsaW5nIHdpdGggYSBrbm93biBjb250ZW50LXR5cGVcblx0aWYgKCBjdCApIHtcblx0XHRmb3IgKCB0eXBlIGluIGNvbnRlbnRzICkge1xuXHRcdFx0aWYgKCBjb250ZW50c1sgdHlwZSBdICYmIGNvbnRlbnRzWyB0eXBlIF0udGVzdCggY3QgKSApIHtcblx0XHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoIHR5cGUgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2hlY2sgdG8gc2VlIGlmIHdlIGhhdmUgYSByZXNwb25zZSBmb3IgdGhlIGV4cGVjdGVkIGRhdGFUeXBlXG5cdGlmICggZGF0YVR5cGVzWyAwIF0gaW4gcmVzcG9uc2VzICkge1xuXHRcdGZpbmFsRGF0YVR5cGUgPSBkYXRhVHlwZXNbIDAgXTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIFRyeSBjb252ZXJ0aWJsZSBkYXRhVHlwZXNcblx0XHRmb3IgKCB0eXBlIGluIHJlc3BvbnNlcyApIHtcblx0XHRcdGlmICggIWRhdGFUeXBlc1sgMCBdIHx8IHMuY29udmVydGVyc1sgdHlwZSArIFwiIFwiICsgZGF0YVR5cGVzWyAwIF0gXSApIHtcblx0XHRcdFx0ZmluYWxEYXRhVHlwZSA9IHR5cGU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhZmlyc3REYXRhVHlwZSApIHtcblx0XHRcdFx0Zmlyc3REYXRhVHlwZSA9IHR5cGU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gT3IganVzdCB1c2UgZmlyc3Qgb25lXG5cdFx0ZmluYWxEYXRhVHlwZSA9IGZpbmFsRGF0YVR5cGUgfHwgZmlyc3REYXRhVHlwZTtcblx0fVxuXG5cdC8vIElmIHdlIGZvdW5kIGEgZGF0YVR5cGVcblx0Ly8gV2UgYWRkIHRoZSBkYXRhVHlwZSB0byB0aGUgbGlzdCBpZiBuZWVkZWRcblx0Ly8gYW5kIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyByZXNwb25zZVxuXHRpZiAoIGZpbmFsRGF0YVR5cGUgKSB7XG5cdFx0aWYgKCBmaW5hbERhdGFUeXBlICE9PSBkYXRhVHlwZXNbIDAgXSApIHtcblx0XHRcdGRhdGFUeXBlcy51bnNoaWZ0KCBmaW5hbERhdGFUeXBlICk7XG5cdFx0fVxuXHRcdHJldHVybiByZXNwb25zZXNbIGZpbmFsRGF0YVR5cGUgXTtcblx0fVxufVxuXG4vKiBDaGFpbiBjb252ZXJzaW9ucyBnaXZlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIG9yaWdpbmFsIHJlc3BvbnNlXG4gKiBBbHNvIHNldHMgdGhlIHJlc3BvbnNlWFhYIGZpZWxkcyBvbiB0aGUganFYSFIgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gYWpheENvbnZlcnQoIHMsIHJlc3BvbnNlLCBqcVhIUiwgaXNTdWNjZXNzICkge1xuXHR2YXIgY29udjIsIGN1cnJlbnQsIGNvbnYsIHRtcCwgcHJldixcblx0XHRjb252ZXJ0ZXJzID0ge30sXG5cblx0XHQvLyBXb3JrIHdpdGggYSBjb3B5IG9mIGRhdGFUeXBlcyBpbiBjYXNlIHdlIG5lZWQgdG8gbW9kaWZ5IGl0IGZvciBjb252ZXJzaW9uXG5cdFx0ZGF0YVR5cGVzID0gcy5kYXRhVHlwZXMuc2xpY2UoKTtcblxuXHQvLyBDcmVhdGUgY29udmVydGVycyBtYXAgd2l0aCBsb3dlcmNhc2VkIGtleXNcblx0aWYgKCBkYXRhVHlwZXNbIDEgXSApIHtcblx0XHRmb3IgKCBjb252IGluIHMuY29udmVydGVycyApIHtcblx0XHRcdGNvbnZlcnRlcnNbIGNvbnYudG9Mb3dlckNhc2UoKSBdID0gcy5jb252ZXJ0ZXJzWyBjb252IF07XG5cdFx0fVxuXHR9XG5cblx0Y3VycmVudCA9IGRhdGFUeXBlcy5zaGlmdCgpO1xuXG5cdC8vIENvbnZlcnQgdG8gZWFjaCBzZXF1ZW50aWFsIGRhdGFUeXBlXG5cdHdoaWxlICggY3VycmVudCApIHtcblxuXHRcdGlmICggcy5yZXNwb25zZUZpZWxkc1sgY3VycmVudCBdICkge1xuXHRcdFx0anFYSFJbIHMucmVzcG9uc2VGaWVsZHNbIGN1cnJlbnQgXSBdID0gcmVzcG9uc2U7XG5cdFx0fVxuXG5cdFx0Ly8gQXBwbHkgdGhlIGRhdGFGaWx0ZXIgaWYgcHJvdmlkZWRcblx0XHRpZiAoICFwcmV2ICYmIGlzU3VjY2VzcyAmJiBzLmRhdGFGaWx0ZXIgKSB7XG5cdFx0XHRyZXNwb25zZSA9IHMuZGF0YUZpbHRlciggcmVzcG9uc2UsIHMuZGF0YVR5cGUgKTtcblx0XHR9XG5cblx0XHRwcmV2ID0gY3VycmVudDtcblx0XHRjdXJyZW50ID0gZGF0YVR5cGVzLnNoaWZ0KCk7XG5cblx0XHRpZiAoIGN1cnJlbnQgKSB7XG5cblx0XHRcdC8vIFRoZXJlJ3Mgb25seSB3b3JrIHRvIGRvIGlmIGN1cnJlbnQgZGF0YVR5cGUgaXMgbm9uLWF1dG9cblx0XHRcdGlmICggY3VycmVudCA9PT0gXCIqXCIgKSB7XG5cblx0XHRcdFx0Y3VycmVudCA9IHByZXY7XG5cblx0XHRcdC8vIENvbnZlcnQgcmVzcG9uc2UgaWYgcHJldiBkYXRhVHlwZSBpcyBub24tYXV0byBhbmQgZGlmZmVycyBmcm9tIGN1cnJlbnRcblx0XHRcdH0gZWxzZSBpZiAoIHByZXYgIT09IFwiKlwiICYmIHByZXYgIT09IGN1cnJlbnQgKSB7XG5cblx0XHRcdFx0Ly8gU2VlayBhIGRpcmVjdCBjb252ZXJ0ZXJcblx0XHRcdFx0Y29udiA9IGNvbnZlcnRlcnNbIHByZXYgKyBcIiBcIiArIGN1cnJlbnQgXSB8fCBjb252ZXJ0ZXJzWyBcIiogXCIgKyBjdXJyZW50IF07XG5cblx0XHRcdFx0Ly8gSWYgbm9uZSBmb3VuZCwgc2VlayBhIHBhaXJcblx0XHRcdFx0aWYgKCAhY29udiApIHtcblx0XHRcdFx0XHRmb3IgKCBjb252MiBpbiBjb252ZXJ0ZXJzICkge1xuXG5cdFx0XHRcdFx0XHQvLyBJZiBjb252MiBvdXRwdXRzIGN1cnJlbnRcblx0XHRcdFx0XHRcdHRtcCA9IGNvbnYyLnNwbGl0KCBcIiBcIiApO1xuXHRcdFx0XHRcdFx0aWYgKCB0bXBbIDEgXSA9PT0gY3VycmVudCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBJZiBwcmV2IGNhbiBiZSBjb252ZXJ0ZWQgdG8gYWNjZXB0ZWQgaW5wdXRcblx0XHRcdFx0XHRcdFx0Y29udiA9IGNvbnZlcnRlcnNbIHByZXYgKyBcIiBcIiArIHRtcFsgMCBdIF0gfHxcblx0XHRcdFx0XHRcdFx0XHRjb252ZXJ0ZXJzWyBcIiogXCIgKyB0bXBbIDAgXSBdO1xuXHRcdFx0XHRcdFx0XHRpZiAoIGNvbnYgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBDb25kZW5zZSBlcXVpdmFsZW5jZSBjb252ZXJ0ZXJzXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBjb252ID09PSB0cnVlICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udiA9IGNvbnZlcnRlcnNbIGNvbnYyIF07XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBPdGhlcndpc2UsIGluc2VydCB0aGUgaW50ZXJtZWRpYXRlIGRhdGFUeXBlXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggY29udmVydGVyc1sgY29udjIgXSAhPT0gdHJ1ZSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnQgPSB0bXBbIDAgXTtcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFUeXBlcy51bnNoaWZ0KCB0bXBbIDEgXSApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFwcGx5IGNvbnZlcnRlciAoaWYgbm90IGFuIGVxdWl2YWxlbmNlKVxuXHRcdFx0XHRpZiAoIGNvbnYgIT09IHRydWUgKSB7XG5cblx0XHRcdFx0XHQvLyBVbmxlc3MgZXJyb3JzIGFyZSBhbGxvd2VkIHRvIGJ1YmJsZSwgY2F0Y2ggYW5kIHJldHVybiB0aGVtXG5cdFx0XHRcdFx0aWYgKCBjb252ICYmIHMudGhyb3dzICkge1xuXHRcdFx0XHRcdFx0cmVzcG9uc2UgPSBjb252KCByZXNwb25zZSApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRyZXNwb25zZSA9IGNvbnYoIHJlc3BvbnNlICk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoICggZSApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRzdGF0ZTogXCJwYXJzZXJlcnJvclwiLFxuXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBjb252ID8gZSA6IFwiTm8gY29udmVyc2lvbiBmcm9tIFwiICsgcHJldiArIFwiIHRvIFwiICsgY3VycmVudFxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7IHN0YXRlOiBcInN1Y2Nlc3NcIiwgZGF0YTogcmVzcG9uc2UgfTtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdC8vIENvdW50ZXIgZm9yIGhvbGRpbmcgdGhlIG51bWJlciBvZiBhY3RpdmUgcXVlcmllc1xuXHRhY3RpdmU6IDAsXG5cblx0Ly8gTGFzdC1Nb2RpZmllZCBoZWFkZXIgY2FjaGUgZm9yIG5leHQgcmVxdWVzdFxuXHRsYXN0TW9kaWZpZWQ6IHt9LFxuXHRldGFnOiB7fSxcblxuXHRhamF4U2V0dGluZ3M6IHtcblx0XHR1cmw6IGxvY2F0aW9uLmhyZWYsXG5cdFx0dHlwZTogXCJHRVRcIixcblx0XHRpc0xvY2FsOiBybG9jYWxQcm90b2NvbC50ZXN0KCBsb2NhdGlvbi5wcm90b2NvbCApLFxuXHRcdGdsb2JhbDogdHJ1ZSxcblx0XHRwcm9jZXNzRGF0YTogdHJ1ZSxcblx0XHRhc3luYzogdHJ1ZSxcblx0XHRjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixcblxuXHRcdC8qXG5cdFx0dGltZW91dDogMCxcblx0XHRkYXRhOiBudWxsLFxuXHRcdGRhdGFUeXBlOiBudWxsLFxuXHRcdHVzZXJuYW1lOiBudWxsLFxuXHRcdHBhc3N3b3JkOiBudWxsLFxuXHRcdGNhY2hlOiBudWxsLFxuXHRcdHRocm93czogZmFsc2UsXG5cdFx0dHJhZGl0aW9uYWw6IGZhbHNlLFxuXHRcdGhlYWRlcnM6IHt9LFxuXHRcdCovXG5cblx0XHRhY2NlcHRzOiB7XG5cdFx0XHRcIipcIjogYWxsVHlwZXMsXG5cdFx0XHR0ZXh0OiBcInRleHQvcGxhaW5cIixcblx0XHRcdGh0bWw6IFwidGV4dC9odG1sXCIsXG5cdFx0XHR4bWw6IFwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLFxuXHRcdFx0anNvbjogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIlxuXHRcdH0sXG5cblx0XHRjb250ZW50czoge1xuXHRcdFx0eG1sOiAvXFxieG1sXFxiLyxcblx0XHRcdGh0bWw6IC9cXGJodG1sLyxcblx0XHRcdGpzb246IC9cXGJqc29uXFxiL1xuXHRcdH0sXG5cblx0XHRyZXNwb25zZUZpZWxkczoge1xuXHRcdFx0eG1sOiBcInJlc3BvbnNlWE1MXCIsXG5cdFx0XHR0ZXh0OiBcInJlc3BvbnNlVGV4dFwiLFxuXHRcdFx0anNvbjogXCJyZXNwb25zZUpTT05cIlxuXHRcdH0sXG5cblx0XHQvLyBEYXRhIGNvbnZlcnRlcnNcblx0XHQvLyBLZXlzIHNlcGFyYXRlIHNvdXJjZSAob3IgY2F0Y2hhbGwgXCIqXCIpIGFuZCBkZXN0aW5hdGlvbiB0eXBlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXG5cdFx0Y29udmVydGVyczoge1xuXG5cdFx0XHQvLyBDb252ZXJ0IGFueXRoaW5nIHRvIHRleHRcblx0XHRcdFwiKiB0ZXh0XCI6IFN0cmluZyxcblxuXHRcdFx0Ly8gVGV4dCB0byBodG1sICh0cnVlID0gbm8gdHJhbnNmb3JtYXRpb24pXG5cdFx0XHRcInRleHQgaHRtbFwiOiB0cnVlLFxuXG5cdFx0XHQvLyBFdmFsdWF0ZSB0ZXh0IGFzIGEganNvbiBleHByZXNzaW9uXG5cdFx0XHRcInRleHQganNvblwiOiBKU09OLnBhcnNlLFxuXG5cdFx0XHQvLyBQYXJzZSB0ZXh0IGFzIHhtbFxuXHRcdFx0XCJ0ZXh0IHhtbFwiOiBqUXVlcnkucGFyc2VYTUxcblx0XHR9LFxuXG5cdFx0Ly8gRm9yIG9wdGlvbnMgdGhhdCBzaG91bGRuJ3QgYmUgZGVlcCBleHRlbmRlZDpcblx0XHQvLyB5b3UgY2FuIGFkZCB5b3VyIG93biBjdXN0b20gb3B0aW9ucyBoZXJlIGlmXG5cdFx0Ly8gYW5kIHdoZW4geW91IGNyZWF0ZSBvbmUgdGhhdCBzaG91bGRuJ3QgYmVcblx0XHQvLyBkZWVwIGV4dGVuZGVkIChzZWUgYWpheEV4dGVuZClcblx0XHRmbGF0T3B0aW9uczoge1xuXHRcdFx0dXJsOiB0cnVlLFxuXHRcdFx0Y29udGV4dDogdHJ1ZVxuXHRcdH1cblx0fSxcblxuXHQvLyBDcmVhdGVzIGEgZnVsbCBmbGVkZ2VkIHNldHRpbmdzIG9iamVjdCBpbnRvIHRhcmdldFxuXHQvLyB3aXRoIGJvdGggYWpheFNldHRpbmdzIGFuZCBzZXR0aW5ncyBmaWVsZHMuXG5cdC8vIElmIHRhcmdldCBpcyBvbWl0dGVkLCB3cml0ZXMgaW50byBhamF4U2V0dGluZ3MuXG5cdGFqYXhTZXR1cDogZnVuY3Rpb24oIHRhcmdldCwgc2V0dGluZ3MgKSB7XG5cdFx0cmV0dXJuIHNldHRpbmdzID9cblxuXHRcdFx0Ly8gQnVpbGRpbmcgYSBzZXR0aW5ncyBvYmplY3Rcblx0XHRcdGFqYXhFeHRlbmQoIGFqYXhFeHRlbmQoIHRhcmdldCwgalF1ZXJ5LmFqYXhTZXR0aW5ncyApLCBzZXR0aW5ncyApIDpcblxuXHRcdFx0Ly8gRXh0ZW5kaW5nIGFqYXhTZXR0aW5nc1xuXHRcdFx0YWpheEV4dGVuZCggalF1ZXJ5LmFqYXhTZXR0aW5ncywgdGFyZ2V0ICk7XG5cdH0sXG5cblx0YWpheFByZWZpbHRlcjogYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBwcmVmaWx0ZXJzICksXG5cdGFqYXhUcmFuc3BvcnQ6IGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyggdHJhbnNwb3J0cyApLFxuXG5cdC8vIE1haW4gbWV0aG9kXG5cdGFqYXg6IGZ1bmN0aW9uKCB1cmwsIG9wdGlvbnMgKSB7XG5cblx0XHQvLyBJZiB1cmwgaXMgYW4gb2JqZWN0LCBzaW11bGF0ZSBwcmUtMS41IHNpZ25hdHVyZVxuXHRcdGlmICggdHlwZW9mIHVybCA9PT0gXCJvYmplY3RcIiApIHtcblx0XHRcdG9wdGlvbnMgPSB1cmw7XG5cdFx0XHR1cmwgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gRm9yY2Ugb3B0aW9ucyB0byBiZSBhbiBvYmplY3Rcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRcdHZhciB0cmFuc3BvcnQsXG5cblx0XHRcdC8vIFVSTCB3aXRob3V0IGFudGktY2FjaGUgcGFyYW1cblx0XHRcdGNhY2hlVVJMLFxuXG5cdFx0XHQvLyBSZXNwb25zZSBoZWFkZXJzXG5cdFx0XHRyZXNwb25zZUhlYWRlcnNTdHJpbmcsXG5cdFx0XHRyZXNwb25zZUhlYWRlcnMsXG5cblx0XHRcdC8vIHRpbWVvdXQgaGFuZGxlXG5cdFx0XHR0aW1lb3V0VGltZXIsXG5cblx0XHRcdC8vIFVybCBjbGVhbnVwIHZhclxuXHRcdFx0dXJsQW5jaG9yLFxuXG5cdFx0XHQvLyBSZXF1ZXN0IHN0YXRlIChiZWNvbWVzIGZhbHNlIHVwb24gc2VuZCBhbmQgdHJ1ZSB1cG9uIGNvbXBsZXRpb24pXG5cdFx0XHRjb21wbGV0ZWQsXG5cblx0XHRcdC8vIFRvIGtub3cgaWYgZ2xvYmFsIGV2ZW50cyBhcmUgdG8gYmUgZGlzcGF0Y2hlZFxuXHRcdFx0ZmlyZUdsb2JhbHMsXG5cblx0XHRcdC8vIExvb3AgdmFyaWFibGVcblx0XHRcdGksXG5cblx0XHRcdC8vIHVuY2FjaGVkIHBhcnQgb2YgdGhlIHVybFxuXHRcdFx0dW5jYWNoZWQsXG5cblx0XHRcdC8vIENyZWF0ZSB0aGUgZmluYWwgb3B0aW9ucyBvYmplY3Rcblx0XHRcdHMgPSBqUXVlcnkuYWpheFNldHVwKCB7fSwgb3B0aW9ucyApLFxuXG5cdFx0XHQvLyBDYWxsYmFja3MgY29udGV4dFxuXHRcdFx0Y2FsbGJhY2tDb250ZXh0ID0gcy5jb250ZXh0IHx8IHMsXG5cblx0XHRcdC8vIENvbnRleHQgZm9yIGdsb2JhbCBldmVudHMgaXMgY2FsbGJhY2tDb250ZXh0IGlmIGl0IGlzIGEgRE9NIG5vZGUgb3IgalF1ZXJ5IGNvbGxlY3Rpb25cblx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dCA9IHMuY29udGV4dCAmJlxuXHRcdFx0XHQoIGNhbGxiYWNrQ29udGV4dC5ub2RlVHlwZSB8fCBjYWxsYmFja0NvbnRleHQuanF1ZXJ5ICkgP1xuXHRcdFx0XHRqUXVlcnkoIGNhbGxiYWNrQ29udGV4dCApIDpcblx0XHRcdFx0alF1ZXJ5LmV2ZW50LFxuXG5cdFx0XHQvLyBEZWZlcnJlZHNcblx0XHRcdGRlZmVycmVkID0galF1ZXJ5LkRlZmVycmVkKCksXG5cdFx0XHRjb21wbGV0ZURlZmVycmVkID0galF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksXG5cblx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cdFx0XHRzdGF0dXNDb2RlID0gcy5zdGF0dXNDb2RlIHx8IHt9LFxuXG5cdFx0XHQvLyBIZWFkZXJzICh0aGV5IGFyZSBzZW50IGFsbCBhdCBvbmNlKVxuXHRcdFx0cmVxdWVzdEhlYWRlcnMgPSB7fSxcblx0XHRcdHJlcXVlc3RIZWFkZXJzTmFtZXMgPSB7fSxcblxuXHRcdFx0Ly8gRGVmYXVsdCBhYm9ydCBtZXNzYWdlXG5cdFx0XHRzdHJBYm9ydCA9IFwiY2FuY2VsZWRcIixcblxuXHRcdFx0Ly8gRmFrZSB4aHJcblx0XHRcdGpxWEhSID0ge1xuXHRcdFx0XHRyZWFkeVN0YXRlOiAwLFxuXG5cdFx0XHRcdC8vIEJ1aWxkcyBoZWFkZXJzIGhhc2h0YWJsZSBpZiBuZWVkZWRcblx0XHRcdFx0Z2V0UmVzcG9uc2VIZWFkZXI6IGZ1bmN0aW9uKCBrZXkgKSB7XG5cdFx0XHRcdFx0dmFyIG1hdGNoO1xuXHRcdFx0XHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0XHRcdFx0aWYgKCAhcmVzcG9uc2VIZWFkZXJzICkge1xuXHRcdFx0XHRcdFx0XHRyZXNwb25zZUhlYWRlcnMgPSB7fTtcblx0XHRcdFx0XHRcdFx0d2hpbGUgKCAoIG1hdGNoID0gcmhlYWRlcnMuZXhlYyggcmVzcG9uc2VIZWFkZXJzU3RyaW5nICkgKSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDExK1xuXHRcdFx0XHRcdFx0XHRcdC8vIGBnZXRSZXNwb25zZUhlYWRlcigga2V5IClgIGluIElFIGRvZXNuJ3QgY29tYmluZSBhbGwgaGVhZGVyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gdmFsdWVzIGZvciB0aGUgcHJvdmlkZWQga2V5IGludG8gYSBzaW5nbGUgcmVzdWx0IHdpdGggdmFsdWVzXG5cdFx0XHRcdFx0XHRcdFx0Ly8gam9pbmVkIGJ5IGNvbW1hcyBhcyBvdGhlciBicm93c2VycyBkby4gSW5zdGVhZCwgaXQgcmV0dXJuc1xuXHRcdFx0XHRcdFx0XHRcdC8vIHRoZW0gb24gc2VwYXJhdGUgbGluZXMuXG5cdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2VIZWFkZXJzWyBtYXRjaFsgMSBdLnRvTG93ZXJDYXNlKCkgKyBcIiBcIiBdID1cblx0XHRcdFx0XHRcdFx0XHRcdCggcmVzcG9uc2VIZWFkZXJzWyBtYXRjaFsgMSBdLnRvTG93ZXJDYXNlKCkgKyBcIiBcIiBdIHx8IFtdIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmNvbmNhdCggbWF0Y2hbIDIgXSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRtYXRjaCA9IHJlc3BvbnNlSGVhZGVyc1sga2V5LnRvTG93ZXJDYXNlKCkgKyBcIiBcIiBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2ggPT0gbnVsbCA/IG51bGwgOiBtYXRjaC5qb2luKCBcIiwgXCIgKTtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBSYXcgc3RyaW5nXG5cdFx0XHRcdGdldEFsbFJlc3BvbnNlSGVhZGVyczogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNvbXBsZXRlZCA/IHJlc3BvbnNlSGVhZGVyc1N0cmluZyA6IG51bGw7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gQ2FjaGVzIHRoZSBoZWFkZXJcblx0XHRcdFx0c2V0UmVxdWVzdEhlYWRlcjogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdFx0XHRcdGlmICggY29tcGxldGVkID09IG51bGwgKSB7XG5cdFx0XHRcdFx0XHRuYW1lID0gcmVxdWVzdEhlYWRlcnNOYW1lc1sgbmFtZS50b0xvd2VyQ2FzZSgpIF0gPVxuXHRcdFx0XHRcdFx0XHRyZXF1ZXN0SGVhZGVyc05hbWVzWyBuYW1lLnRvTG93ZXJDYXNlKCkgXSB8fCBuYW1lO1xuXHRcdFx0XHRcdFx0cmVxdWVzdEhlYWRlcnNbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBPdmVycmlkZXMgcmVzcG9uc2UgY29udGVudC10eXBlIGhlYWRlclxuXHRcdFx0XHRvdmVycmlkZU1pbWVUeXBlOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCA9PSBudWxsICkge1xuXHRcdFx0XHRcdFx0cy5taW1lVHlwZSA9IHR5cGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cdFx0XHRcdHN0YXR1c0NvZGU6IGZ1bmN0aW9uKCBtYXAgKSB7XG5cdFx0XHRcdFx0dmFyIGNvZGU7XG5cdFx0XHRcdFx0aWYgKCBtYXAgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBFeGVjdXRlIHRoZSBhcHByb3ByaWF0ZSBjYWxsYmFja3Ncblx0XHRcdFx0XHRcdFx0anFYSFIuYWx3YXlzKCBtYXBbIGpxWEhSLnN0YXR1cyBdICk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdC8vIExhenktYWRkIHRoZSBuZXcgY2FsbGJhY2tzIGluIGEgd2F5IHRoYXQgcHJlc2VydmVzIG9sZCBvbmVzXG5cdFx0XHRcdFx0XHRcdGZvciAoIGNvZGUgaW4gbWFwICkge1xuXHRcdFx0XHRcdFx0XHRcdHN0YXR1c0NvZGVbIGNvZGUgXSA9IFsgc3RhdHVzQ29kZVsgY29kZSBdLCBtYXBbIGNvZGUgXSBdO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIENhbmNlbCB0aGUgcmVxdWVzdFxuXHRcdFx0XHRhYm9ydDogZnVuY3Rpb24oIHN0YXR1c1RleHQgKSB7XG5cdFx0XHRcdFx0dmFyIGZpbmFsVGV4dCA9IHN0YXR1c1RleHQgfHwgc3RyQWJvcnQ7XG5cdFx0XHRcdFx0aWYgKCB0cmFuc3BvcnQgKSB7XG5cdFx0XHRcdFx0XHR0cmFuc3BvcnQuYWJvcnQoIGZpbmFsVGV4dCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkb25lKCAwLCBmaW5hbFRleHQgKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdC8vIEF0dGFjaCBkZWZlcnJlZHNcblx0XHRkZWZlcnJlZC5wcm9taXNlKCBqcVhIUiApO1xuXG5cdFx0Ly8gQWRkIHByb3RvY29sIGlmIG5vdCBwcm92aWRlZCAocHJlZmlsdGVycyBtaWdodCBleHBlY3QgaXQpXG5cdFx0Ly8gSGFuZGxlIGZhbHN5IHVybCBpbiB0aGUgc2V0dGluZ3Mgb2JqZWN0ICh0cmFjLTEwMDkzOiBjb25zaXN0ZW5jeSB3aXRoIG9sZCBzaWduYXR1cmUpXG5cdFx0Ly8gV2UgYWxzbyB1c2UgdGhlIHVybCBwYXJhbWV0ZXIgaWYgYXZhaWxhYmxlXG5cdFx0cy51cmwgPSAoICggdXJsIHx8IHMudXJsIHx8IGxvY2F0aW9uLmhyZWYgKSArIFwiXCIgKVxuXHRcdFx0LnJlcGxhY2UoIHJwcm90b2NvbCwgbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKTtcblxuXHRcdC8vIEFsaWFzIG1ldGhvZCBvcHRpb24gdG8gdHlwZSBhcyBwZXIgdGlja2V0IHRyYWMtMTIwMDRcblx0XHRzLnR5cGUgPSBvcHRpb25zLm1ldGhvZCB8fCBvcHRpb25zLnR5cGUgfHwgcy5tZXRob2QgfHwgcy50eXBlO1xuXG5cdFx0Ly8gRXh0cmFjdCBkYXRhVHlwZXMgbGlzdFxuXHRcdHMuZGF0YVR5cGVzID0gKCBzLmRhdGFUeXBlIHx8IFwiKlwiICkudG9Mb3dlckNhc2UoKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFsgXCJcIiBdO1xuXG5cdFx0Ly8gQSBjcm9zcy1kb21haW4gcmVxdWVzdCBpcyBpbiBvcmRlciB3aGVuIHRoZSBvcmlnaW4gZG9lc24ndCBtYXRjaCB0aGUgY3VycmVudCBvcmlnaW4uXG5cdFx0aWYgKCBzLmNyb3NzRG9tYWluID09IG51bGwgKSB7XG5cdFx0XHR1cmxBbmNob3IgPSBkb2N1bWVudCQxLmNyZWF0ZUVsZW1lbnQoIFwiYVwiICk7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OCAtIDExK1xuXHRcdFx0Ly8gSUUgdGhyb3dzIGV4Y2VwdGlvbiBvbiBhY2Nlc3NpbmcgdGhlIGhyZWYgcHJvcGVydHkgaWYgdXJsIGlzIG1hbGZvcm1lZCxcblx0XHRcdC8vIGUuZy4gaHR0cDovL2V4YW1wbGUuY29tOjgweC9cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHVybEFuY2hvci5ocmVmID0gcy51cmw7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD04IC0gMTErXG5cdFx0XHRcdC8vIEFuY2hvcidzIGhvc3QgcHJvcGVydHkgaXNuJ3QgY29ycmVjdGx5IHNldCB3aGVuIHMudXJsIGlzIHJlbGF0aXZlXG5cdFx0XHRcdHVybEFuY2hvci5ocmVmID0gdXJsQW5jaG9yLmhyZWY7XG5cdFx0XHRcdHMuY3Jvc3NEb21haW4gPSBvcmlnaW5BbmNob3IucHJvdG9jb2wgKyBcIi8vXCIgKyBvcmlnaW5BbmNob3IuaG9zdCAhPT1cblx0XHRcdFx0XHR1cmxBbmNob3IucHJvdG9jb2wgKyBcIi8vXCIgKyB1cmxBbmNob3IuaG9zdDtcblx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdC8vIElmIHRoZXJlIGlzIGFuIGVycm9yIHBhcnNpbmcgdGhlIFVSTCwgYXNzdW1lIGl0IGlzIGNyb3NzRG9tYWluLFxuXHRcdFx0XHQvLyBpdCBjYW4gYmUgcmVqZWN0ZWQgYnkgdGhlIHRyYW5zcG9ydCBpZiBpdCBpcyBpbnZhbGlkXG5cdFx0XHRcdHMuY3Jvc3NEb21haW4gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEFwcGx5IHByZWZpbHRlcnNcblx0XHRpbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyggcHJlZmlsdGVycywgcywgb3B0aW9ucywganFYSFIgKTtcblxuXHRcdC8vIENvbnZlcnQgZGF0YSBpZiBub3QgYWxyZWFkeSBhIHN0cmluZ1xuXHRcdGlmICggcy5kYXRhICYmIHMucHJvY2Vzc0RhdGEgJiYgdHlwZW9mIHMuZGF0YSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHMuZGF0YSA9IGpRdWVyeS5wYXJhbSggcy5kYXRhLCBzLnRyYWRpdGlvbmFsICk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgcmVxdWVzdCB3YXMgYWJvcnRlZCBpbnNpZGUgYSBwcmVmaWx0ZXIsIHN0b3AgdGhlcmVcblx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdHJldHVybiBqcVhIUjtcblx0XHR9XG5cblx0XHQvLyBXZSBjYW4gZmlyZSBnbG9iYWwgZXZlbnRzIGFzIG9mIG5vdyBpZiBhc2tlZCB0b1xuXHRcdC8vIERvbid0IGZpcmUgZXZlbnRzIGlmIGpRdWVyeS5ldmVudCBpcyB1bmRlZmluZWQgaW4gYW4gRVNNLXVzYWdlIHNjZW5hcmlvICh0cmFjLTE1MTE4KVxuXHRcdGZpcmVHbG9iYWxzID0galF1ZXJ5LmV2ZW50ICYmIHMuZ2xvYmFsO1xuXG5cdFx0Ly8gV2F0Y2ggZm9yIGEgbmV3IHNldCBvZiByZXF1ZXN0c1xuXHRcdGlmICggZmlyZUdsb2JhbHMgJiYgalF1ZXJ5LmFjdGl2ZSsrID09PSAwICkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIFwiYWpheFN0YXJ0XCIgKTtcblx0XHR9XG5cblx0XHQvLyBVcHBlcmNhc2UgdGhlIHR5cGVcblx0XHRzLnR5cGUgPSBzLnR5cGUudG9VcHBlckNhc2UoKTtcblxuXHRcdC8vIERldGVybWluZSBpZiByZXF1ZXN0IGhhcyBjb250ZW50XG5cdFx0cy5oYXNDb250ZW50ID0gIXJub0NvbnRlbnQudGVzdCggcy50eXBlICk7XG5cblx0XHQvLyBTYXZlIHRoZSBVUkwgaW4gY2FzZSB3ZSdyZSB0b3lpbmcgd2l0aCB0aGUgSWYtTW9kaWZpZWQtU2luY2Vcblx0XHQvLyBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIgbGF0ZXIgb25cblx0XHQvLyBSZW1vdmUgaGFzaCB0byBzaW1wbGlmeSB1cmwgbWFuaXB1bGF0aW9uXG5cdFx0Y2FjaGVVUkwgPSBzLnVybC5yZXBsYWNlKCByaGFzaCwgXCJcIiApO1xuXG5cdFx0Ly8gTW9yZSBvcHRpb25zIGhhbmRsaW5nIGZvciByZXF1ZXN0cyB3aXRoIG5vIGNvbnRlbnRcblx0XHRpZiAoICFzLmhhc0NvbnRlbnQgKSB7XG5cblx0XHRcdC8vIFJlbWVtYmVyIHRoZSBoYXNoIHNvIHdlIGNhbiBwdXQgaXQgYmFja1xuXHRcdFx0dW5jYWNoZWQgPSBzLnVybC5zbGljZSggY2FjaGVVUkwubGVuZ3RoICk7XG5cblx0XHRcdC8vIElmIGRhdGEgaXMgYXZhaWxhYmxlIGFuZCBzaG91bGQgYmUgcHJvY2Vzc2VkLCBhcHBlbmQgZGF0YSB0byB1cmxcblx0XHRcdGlmICggcy5kYXRhICYmICggcy5wcm9jZXNzRGF0YSB8fCB0eXBlb2Ygcy5kYXRhID09PSBcInN0cmluZ1wiICkgKSB7XG5cdFx0XHRcdGNhY2hlVVJMICs9ICggcnF1ZXJ5LnRlc3QoIGNhY2hlVVJMICkgPyBcIiZcIiA6IFwiP1wiICkgKyBzLmRhdGE7XG5cblx0XHRcdFx0Ly8gdHJhYy05NjgyOiByZW1vdmUgZGF0YSBzbyB0aGF0IGl0J3Mgbm90IHVzZWQgaW4gYW4gZXZlbnR1YWwgcmV0cnlcblx0XHRcdFx0ZGVsZXRlIHMuZGF0YTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIG9yIHVwZGF0ZSBhbnRpLWNhY2hlIHBhcmFtIGlmIG5lZWRlZFxuXHRcdFx0aWYgKCBzLmNhY2hlID09PSBmYWxzZSApIHtcblx0XHRcdFx0Y2FjaGVVUkwgPSBjYWNoZVVSTC5yZXBsYWNlKCByYW50aUNhY2hlLCBcIiQxXCIgKTtcblx0XHRcdFx0dW5jYWNoZWQgPSAoIHJxdWVyeS50ZXN0KCBjYWNoZVVSTCApID8gXCImXCIgOiBcIj9cIiApICsgXCJfPVwiICtcblx0XHRcdFx0XHQoIG5vbmNlLmd1aWQrKyApICsgdW5jYWNoZWQ7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFB1dCBoYXNoIGFuZCBhbnRpLWNhY2hlIG9uIHRoZSBVUkwgdGhhdCB3aWxsIGJlIHJlcXVlc3RlZCAoZ2gtMTczMilcblx0XHRcdHMudXJsID0gY2FjaGVVUkwgKyB1bmNhY2hlZDtcblxuXHRcdC8vIENoYW5nZSAnJTIwJyB0byAnKycgaWYgdGhpcyBpcyBlbmNvZGVkIGZvcm0gYm9keSBjb250ZW50IChnaC0yNjU4KVxuXHRcdH0gZWxzZSBpZiAoIHMuZGF0YSAmJiBzLnByb2Nlc3NEYXRhICYmXG5cdFx0XHQoIHMuY29udGVudFR5cGUgfHwgXCJcIiApLmluZGV4T2YoIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgKSA9PT0gMCApIHtcblx0XHRcdHMuZGF0YSA9IHMuZGF0YS5yZXBsYWNlKCByMjAsIFwiK1wiICk7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBJZi1Nb2RpZmllZC1TaW5jZSBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIsIGlmIGluIGlmTW9kaWZpZWQgbW9kZS5cblx0XHRpZiAoIHMuaWZNb2RpZmllZCApIHtcblx0XHRcdGlmICggalF1ZXJ5Lmxhc3RNb2RpZmllZFsgY2FjaGVVUkwgXSApIHtcblx0XHRcdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlciggXCJJZi1Nb2RpZmllZC1TaW5jZVwiLCBqUXVlcnkubGFzdE1vZGlmaWVkWyBjYWNoZVVSTCBdICk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGpRdWVyeS5ldGFnWyBjYWNoZVVSTCBdICkge1xuXHRcdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBcIklmLU5vbmUtTWF0Y2hcIiwgalF1ZXJ5LmV0YWdbIGNhY2hlVVJMIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIGNvcnJlY3QgaGVhZGVyLCBpZiBkYXRhIGlzIGJlaW5nIHNlbnRcblx0XHRpZiAoIHMuZGF0YSAmJiBzLmhhc0NvbnRlbnQgJiYgcy5jb250ZW50VHlwZSAhPT0gZmFsc2UgfHwgb3B0aW9ucy5jb250ZW50VHlwZSApIHtcblx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIFwiQ29udGVudC1UeXBlXCIsIHMuY29udGVudFR5cGUgKTtcblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIEFjY2VwdHMgaGVhZGVyIGZvciB0aGUgc2VydmVyLCBkZXBlbmRpbmcgb24gdGhlIGRhdGFUeXBlXG5cdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlcihcblx0XHRcdFwiQWNjZXB0XCIsXG5cdFx0XHRzLmRhdGFUeXBlc1sgMCBdICYmIHMuYWNjZXB0c1sgcy5kYXRhVHlwZXNbIDAgXSBdID9cblx0XHRcdFx0cy5hY2NlcHRzWyBzLmRhdGFUeXBlc1sgMCBdIF0gK1xuXHRcdFx0XHRcdCggcy5kYXRhVHlwZXNbIDAgXSAhPT0gXCIqXCIgPyBcIiwgXCIgKyBhbGxUeXBlcyArIFwiOyBxPTAuMDFcIiA6IFwiXCIgKSA6XG5cdFx0XHRcdHMuYWNjZXB0c1sgXCIqXCIgXVxuXHRcdCk7XG5cblx0XHQvLyBDaGVjayBmb3IgaGVhZGVycyBvcHRpb25cblx0XHRmb3IgKCBpIGluIHMuaGVhZGVycyApIHtcblx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIGksIHMuaGVhZGVyc1sgaSBdICk7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsb3cgY3VzdG9tIGhlYWRlcnMvbWltZXR5cGVzIGFuZCBlYXJseSBhYm9ydFxuXHRcdGlmICggcy5iZWZvcmVTZW5kICYmXG5cdFx0XHQoIHMuYmVmb3JlU2VuZC5jYWxsKCBjYWxsYmFja0NvbnRleHQsIGpxWEhSLCBzICkgPT09IGZhbHNlIHx8IGNvbXBsZXRlZCApICkge1xuXG5cdFx0XHQvLyBBYm9ydCBpZiBub3QgZG9uZSBhbHJlYWR5IGFuZCByZXR1cm5cblx0XHRcdHJldHVybiBqcVhIUi5hYm9ydCgpO1xuXHRcdH1cblxuXHRcdC8vIEFib3J0aW5nIGlzIG5vIGxvbmdlciBhIGNhbmNlbGxhdGlvblxuXHRcdHN0ckFib3J0ID0gXCJhYm9ydFwiO1xuXG5cdFx0Ly8gSW5zdGFsbCBjYWxsYmFja3Mgb24gZGVmZXJyZWRzXG5cdFx0Y29tcGxldGVEZWZlcnJlZC5hZGQoIHMuY29tcGxldGUgKTtcblx0XHRqcVhIUi5kb25lKCBzLnN1Y2Nlc3MgKTtcblx0XHRqcVhIUi5mYWlsKCBzLmVycm9yICk7XG5cblx0XHQvLyBHZXQgdHJhbnNwb3J0XG5cdFx0dHJhbnNwb3J0ID0gaW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHRyYW5zcG9ydHMsIHMsIG9wdGlvbnMsIGpxWEhSICk7XG5cblx0XHQvLyBJZiBubyB0cmFuc3BvcnQsIHdlIGF1dG8tYWJvcnRcblx0XHRpZiAoICF0cmFuc3BvcnQgKSB7XG5cdFx0XHRkb25lKCAtMSwgXCJObyBUcmFuc3BvcnRcIiApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRqcVhIUi5yZWFkeVN0YXRlID0gMTtcblxuXHRcdFx0Ly8gU2VuZCBnbG9iYWwgZXZlbnRcblx0XHRcdGlmICggZmlyZUdsb2JhbHMgKSB7XG5cdFx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKCBcImFqYXhTZW5kXCIsIFsganFYSFIsIHMgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiByZXF1ZXN0IHdhcyBhYm9ydGVkIGluc2lkZSBhamF4U2VuZCwgc3RvcCB0aGVyZVxuXHRcdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRcdHJldHVybiBqcVhIUjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVGltZW91dFxuXHRcdFx0aWYgKCBzLmFzeW5jICYmIHMudGltZW91dCA+IDAgKSB7XG5cdFx0XHRcdHRpbWVvdXRUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRqcVhIUi5hYm9ydCggXCJ0aW1lb3V0XCIgKTtcblx0XHRcdFx0fSwgcy50aW1lb3V0ICk7XG5cdFx0XHR9XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbXBsZXRlZCA9IGZhbHNlO1xuXHRcdFx0XHR0cmFuc3BvcnQuc2VuZCggcmVxdWVzdEhlYWRlcnMsIGRvbmUgKTtcblx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdC8vIFJldGhyb3cgcG9zdC1jb21wbGV0aW9uIGV4Y2VwdGlvbnNcblx0XHRcdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFByb3BhZ2F0ZSBvdGhlcnMgYXMgcmVzdWx0c1xuXHRcdFx0XHRkb25lKCAtMSwgZSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENhbGxiYWNrIGZvciB3aGVuIGV2ZXJ5dGhpbmcgaXMgZG9uZVxuXHRcdGZ1bmN0aW9uIGRvbmUoIHN0YXR1cywgbmF0aXZlU3RhdHVzVGV4dCwgcmVzcG9uc2VzLCBoZWFkZXJzICkge1xuXHRcdFx0dmFyIGlzU3VjY2Vzcywgc3VjY2VzcywgZXJyb3IsIHJlc3BvbnNlLCBtb2RpZmllZCxcblx0XHRcdFx0c3RhdHVzVGV4dCA9IG5hdGl2ZVN0YXR1c1RleHQ7XG5cblx0XHRcdC8vIElnbm9yZSByZXBlYXQgaW52b2NhdGlvbnNcblx0XHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbXBsZXRlZCA9IHRydWU7XG5cblx0XHRcdC8vIENsZWFyIHRpbWVvdXQgaWYgaXQgZXhpc3RzXG5cdFx0XHRpZiAoIHRpbWVvdXRUaW1lciApIHtcblx0XHRcdFx0d2luZG93LmNsZWFyVGltZW91dCggdGltZW91dFRpbWVyICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERlcmVmZXJlbmNlIHRyYW5zcG9ydCBmb3IgZWFybHkgZ2FyYmFnZSBjb2xsZWN0aW9uXG5cdFx0XHQvLyAobm8gbWF0dGVyIGhvdyBsb25nIHRoZSBqcVhIUiBvYmplY3Qgd2lsbCBiZSB1c2VkKVxuXHRcdFx0dHJhbnNwb3J0ID0gdW5kZWZpbmVkO1xuXG5cdFx0XHQvLyBDYWNoZSByZXNwb25zZSBoZWFkZXJzXG5cdFx0XHRyZXNwb25zZUhlYWRlcnNTdHJpbmcgPSBoZWFkZXJzIHx8IFwiXCI7XG5cblx0XHRcdC8vIFNldCByZWFkeVN0YXRlXG5cdFx0XHRqcVhIUi5yZWFkeVN0YXRlID0gc3RhdHVzID4gMCA/IDQgOiAwO1xuXG5cdFx0XHQvLyBEZXRlcm1pbmUgaWYgc3VjY2Vzc2Z1bFxuXHRcdFx0aXNTdWNjZXNzID0gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDAgfHwgc3RhdHVzID09PSAzMDQ7XG5cblx0XHRcdC8vIEdldCByZXNwb25zZSBkYXRhXG5cdFx0XHRpZiAoIHJlc3BvbnNlcyApIHtcblx0XHRcdFx0cmVzcG9uc2UgPSBhamF4SGFuZGxlUmVzcG9uc2VzKCBzLCBqcVhIUiwgcmVzcG9uc2VzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFVzZSBhIG5vb3AgY29udmVydGVyIGZvciBtaXNzaW5nIHNjcmlwdCBidXQgbm90IGlmIGpzb25wXG5cdFx0XHRpZiAoICFpc1N1Y2Nlc3MgJiZcblx0XHRcdFx0alF1ZXJ5LmluQXJyYXkoIFwic2NyaXB0XCIsIHMuZGF0YVR5cGVzICkgPiAtMSAmJlxuXHRcdFx0XHRqUXVlcnkuaW5BcnJheSggXCJqc29uXCIsIHMuZGF0YVR5cGVzICkgPCAwICkge1xuXHRcdFx0XHRzLmNvbnZlcnRlcnNbIFwidGV4dCBzY3JpcHRcIiBdID0gZnVuY3Rpb24oKSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29udmVydCBubyBtYXR0ZXIgd2hhdCAodGhhdCB3YXkgcmVzcG9uc2VYWFggZmllbGRzIGFyZSBhbHdheXMgc2V0KVxuXHRcdFx0cmVzcG9uc2UgPSBhamF4Q29udmVydCggcywgcmVzcG9uc2UsIGpxWEhSLCBpc1N1Y2Nlc3MgKTtcblxuXHRcdFx0Ly8gSWYgc3VjY2Vzc2Z1bCwgaGFuZGxlIHR5cGUgY2hhaW5pbmdcblx0XHRcdGlmICggaXNTdWNjZXNzICkge1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyLCBpZiBpbiBpZk1vZGlmaWVkIG1vZGUuXG5cdFx0XHRcdGlmICggcy5pZk1vZGlmaWVkICkge1xuXHRcdFx0XHRcdG1vZGlmaWVkID0ganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoIFwiTGFzdC1Nb2RpZmllZFwiICk7XG5cdFx0XHRcdFx0aWYgKCBtb2RpZmllZCApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5sYXN0TW9kaWZpZWRbIGNhY2hlVVJMIF0gPSBtb2RpZmllZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bW9kaWZpZWQgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlciggXCJldGFnXCIgKTtcblx0XHRcdFx0XHRpZiAoIG1vZGlmaWVkICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5LmV0YWdbIGNhY2hlVVJMIF0gPSBtb2RpZmllZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBpZiBubyBjb250ZW50XG5cdFx0XHRcdGlmICggc3RhdHVzID09PSAyMDQgfHwgcy50eXBlID09PSBcIkhFQURcIiApIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gXCJub2NvbnRlbnRcIjtcblxuXHRcdFx0XHQvLyBpZiBub3QgbW9kaWZpZWRcblx0XHRcdFx0fSBlbHNlIGlmICggc3RhdHVzID09PSAzMDQgKSB7XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IFwibm90bW9kaWZpZWRcIjtcblxuXHRcdFx0XHQvLyBJZiB3ZSBoYXZlIGRhdGEsIGxldCdzIGNvbnZlcnQgaXRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdGU7XG5cdFx0XHRcdFx0c3VjY2VzcyA9IHJlc3BvbnNlLmRhdGE7XG5cdFx0XHRcdFx0ZXJyb3IgPSByZXNwb25zZS5lcnJvcjtcblx0XHRcdFx0XHRpc1N1Y2Nlc3MgPSAhZXJyb3I7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gRXh0cmFjdCBlcnJvciBmcm9tIHN0YXR1c1RleHQgYW5kIG5vcm1hbGl6ZSBmb3Igbm9uLWFib3J0c1xuXHRcdFx0XHRlcnJvciA9IHN0YXR1c1RleHQ7XG5cdFx0XHRcdGlmICggc3RhdHVzIHx8ICFzdGF0dXNUZXh0ICkge1xuXHRcdFx0XHRcdHN0YXR1c1RleHQgPSBcImVycm9yXCI7XG5cdFx0XHRcdFx0aWYgKCBzdGF0dXMgPCAwICkge1xuXHRcdFx0XHRcdFx0c3RhdHVzID0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IGRhdGEgZm9yIHRoZSBmYWtlIHhociBvYmplY3Rcblx0XHRcdGpxWEhSLnN0YXR1cyA9IHN0YXR1cztcblx0XHRcdGpxWEhSLnN0YXR1c1RleHQgPSAoIG5hdGl2ZVN0YXR1c1RleHQgfHwgc3RhdHVzVGV4dCApICsgXCJcIjtcblxuXHRcdFx0Ly8gU3VjY2Vzcy9FcnJvclxuXHRcdFx0aWYgKCBpc1N1Y2Nlc3MgKSB7XG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBjYWxsYmFja0NvbnRleHQsIFsgc3VjY2Vzcywgc3RhdHVzVGV4dCwganFYSFIgXSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0V2l0aCggY2FsbGJhY2tDb250ZXh0LCBbIGpxWEhSLCBzdGF0dXNUZXh0LCBlcnJvciBdICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cdFx0XHRqcVhIUi5zdGF0dXNDb2RlKCBzdGF0dXNDb2RlICk7XG5cdFx0XHRzdGF0dXNDb2RlID0gdW5kZWZpbmVkO1xuXG5cdFx0XHRpZiAoIGZpcmVHbG9iYWxzICkge1xuXHRcdFx0XHRnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlciggaXNTdWNjZXNzID8gXCJhamF4U3VjY2Vzc1wiIDogXCJhamF4RXJyb3JcIixcblx0XHRcdFx0XHRbIGpxWEhSLCBzLCBpc1N1Y2Nlc3MgPyBzdWNjZXNzIDogZXJyb3IgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb21wbGV0ZVxuXHRcdFx0Y29tcGxldGVEZWZlcnJlZC5maXJlV2l0aCggY2FsbGJhY2tDb250ZXh0LCBbIGpxWEhSLCBzdGF0dXNUZXh0IF0gKTtcblxuXHRcdFx0aWYgKCBmaXJlR2xvYmFscyApIHtcblx0XHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0LnRyaWdnZXIoIFwiYWpheENvbXBsZXRlXCIsIFsganFYSFIsIHMgXSApO1xuXG5cdFx0XHRcdC8vIEhhbmRsZSB0aGUgZ2xvYmFsIEFKQVggY291bnRlclxuXHRcdFx0XHRpZiAoICEoIC0talF1ZXJ5LmFjdGl2ZSApICkge1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCBcImFqYXhTdG9wXCIgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBqcVhIUjtcblx0fSxcblxuXHRnZXRKU09OOiBmdW5jdGlvbiggdXJsLCBkYXRhLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdldCggdXJsLCBkYXRhLCBjYWxsYmFjaywgXCJqc29uXCIgKTtcblx0fSxcblxuXHRnZXRTY3JpcHQ6IGZ1bmN0aW9uKCB1cmwsIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ2V0KCB1cmwsIHVuZGVmaW5lZCwgY2FsbGJhY2ssIFwic2NyaXB0XCIgKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCggWyBcImdldFwiLCBcInBvc3RcIiBdLCBmdW5jdGlvbiggX2ksIG1ldGhvZCApIHtcblx0alF1ZXJ5WyBtZXRob2QgXSA9IGZ1bmN0aW9uKCB1cmwsIGRhdGEsIGNhbGxiYWNrLCB0eXBlICkge1xuXG5cdFx0Ly8gU2hpZnQgYXJndW1lbnRzIGlmIGRhdGEgYXJndW1lbnQgd2FzIG9taXR0ZWQuXG5cdFx0Ly8gSGFuZGxlIHRoZSBudWxsIGNhbGxiYWNrIHBsYWNlaG9sZGVyLlxuXHRcdGlmICggdHlwZW9mIGRhdGEgPT09IFwiZnVuY3Rpb25cIiB8fCBkYXRhID09PSBudWxsICkge1xuXHRcdFx0dHlwZSA9IHR5cGUgfHwgY2FsbGJhY2s7XG5cdFx0XHRjYWxsYmFjayA9IGRhdGE7XG5cdFx0XHRkYXRhID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdC8vIFRoZSB1cmwgY2FuIGJlIGFuIG9wdGlvbnMgb2JqZWN0ICh3aGljaCB0aGVuIG11c3QgaGF2ZSAudXJsKVxuXHRcdHJldHVybiBqUXVlcnkuYWpheCggalF1ZXJ5LmV4dGVuZCgge1xuXHRcdFx0dXJsOiB1cmwsXG5cdFx0XHR0eXBlOiBtZXRob2QsXG5cdFx0XHRkYXRhVHlwZTogdHlwZSxcblx0XHRcdGRhdGE6IGRhdGEsXG5cdFx0XHRzdWNjZXNzOiBjYWxsYmFja1xuXHRcdH0sIGpRdWVyeS5pc1BsYWluT2JqZWN0KCB1cmwgKSAmJiB1cmwgKSApO1xuXHR9O1xufSApO1xuXG5qUXVlcnkuYWpheFByZWZpbHRlciggZnVuY3Rpb24oIHMgKSB7XG5cdHZhciBpO1xuXHRmb3IgKCBpIGluIHMuaGVhZGVycyApIHtcblx0XHRpZiAoIGkudG9Mb3dlckNhc2UoKSA9PT0gXCJjb250ZW50LXR5cGVcIiApIHtcblx0XHRcdHMuY29udGVudFR5cGUgPSBzLmhlYWRlcnNbIGkgXSB8fCBcIlwiO1xuXHRcdH1cblx0fVxufSApO1xuXG5qUXVlcnkuX2V2YWxVcmwgPSBmdW5jdGlvbiggdXJsLCBvcHRpb25zLCBkb2MgKSB7XG5cdHJldHVybiBqUXVlcnkuYWpheCgge1xuXHRcdHVybDogdXJsLFxuXG5cdFx0Ly8gTWFrZSB0aGlzIGV4cGxpY2l0LCBzaW5jZSB1c2VyIGNhbiBvdmVycmlkZSB0aGlzIHRocm91Z2ggYWpheFNldHVwICh0cmFjLTExMjY0KVxuXHRcdHR5cGU6IFwiR0VUXCIsXG5cdFx0ZGF0YVR5cGU6IFwic2NyaXB0XCIsXG5cdFx0Y2FjaGU6IHRydWUsXG5cdFx0YXN5bmM6IGZhbHNlLFxuXHRcdGdsb2JhbDogZmFsc2UsXG5cdFx0c2NyaXB0QXR0cnM6IG9wdGlvbnMuY3Jvc3NPcmlnaW4gPyB7IFwiY3Jvc3NPcmlnaW5cIjogb3B0aW9ucy5jcm9zc09yaWdpbiB9IDogdW5kZWZpbmVkLFxuXG5cdFx0Ly8gT25seSBldmFsdWF0ZSB0aGUgcmVzcG9uc2UgaWYgaXQgaXMgc3VjY2Vzc2Z1bCAoZ2gtNDEyNilcblx0XHQvLyBkYXRhRmlsdGVyIGlzIG5vdCBpbnZva2VkIGZvciBmYWlsdXJlIHJlc3BvbnNlcywgc28gdXNpbmcgaXQgaW5zdGVhZFxuXHRcdC8vIG9mIHRoZSBkZWZhdWx0IGNvbnZlcnRlciBpcyBrbHVkZ3kgYnV0IGl0IHdvcmtzLlxuXHRcdGNvbnZlcnRlcnM6IHtcblx0XHRcdFwidGV4dCBzY3JpcHRcIjogZnVuY3Rpb24oKSB7fVxuXHRcdH0sXG5cdFx0ZGF0YUZpbHRlcjogZnVuY3Rpb24oIHJlc3BvbnNlICkge1xuXHRcdFx0alF1ZXJ5Lmdsb2JhbEV2YWwoIHJlc3BvbnNlLCBvcHRpb25zLCBkb2MgKTtcblx0XHR9XG5cdH0gKTtcbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0d3JhcEFsbDogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0dmFyIHdyYXA7XG5cblx0XHRpZiAoIHRoaXNbIDAgXSApIHtcblx0XHRcdGlmICggdHlwZW9mIGh0bWwgPT09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0aHRtbCA9IGh0bWwuY2FsbCggdGhpc1sgMCBdICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRoZSBlbGVtZW50cyB0byB3cmFwIHRoZSB0YXJnZXQgYXJvdW5kXG5cdFx0XHR3cmFwID0galF1ZXJ5KCBodG1sLCB0aGlzWyAwIF0ub3duZXJEb2N1bWVudCApLmVxKCAwICkuY2xvbmUoIHRydWUgKTtcblxuXHRcdFx0aWYgKCB0aGlzWyAwIF0ucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0d3JhcC5pbnNlcnRCZWZvcmUoIHRoaXNbIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHR3cmFwLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBlbGVtID0gdGhpcztcblxuXHRcdFx0XHR3aGlsZSAoIGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQgKSB7XG5cdFx0XHRcdFx0ZWxlbSA9IGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZWxlbTtcblx0XHRcdH0gKS5hcHBlbmQoIHRoaXMgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHR3cmFwSW5uZXI6IGZ1bmN0aW9uKCBodG1sICkge1xuXHRcdGlmICggdHlwZW9mIGh0bWwgPT09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS53cmFwSW5uZXIoIGh0bWwuY2FsbCggdGhpcywgaSApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZiA9IGpRdWVyeSggdGhpcyApLFxuXHRcdFx0XHRjb250ZW50cyA9IHNlbGYuY29udGVudHMoKTtcblxuXHRcdFx0aWYgKCBjb250ZW50cy5sZW5ndGggKSB7XG5cdFx0XHRcdGNvbnRlbnRzLndyYXBBbGwoIGh0bWwgKTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi5hcHBlbmQoIGh0bWwgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0d3JhcDogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0dmFyIGh0bWxJc0Z1bmN0aW9uID0gdHlwZW9mIGh0bWwgPT09IFwiZnVuY3Rpb25cIjtcblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkud3JhcEFsbCggaHRtbElzRnVuY3Rpb24gPyBodG1sLmNhbGwoIHRoaXMsIGkgKSA6IGh0bWwgKTtcblx0XHR9ICk7XG5cdH0sXG5cblx0dW53cmFwOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dGhpcy5wYXJlbnQoIHNlbGVjdG9yICkubm90KCBcImJvZHlcIiApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkucmVwbGFjZVdpdGgoIHRoaXMuY2hpbGROb2RlcyApO1xuXHRcdH0gKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufSApO1xuXG5qUXVlcnkuZXhwci5wc2V1ZG9zLmhpZGRlbiA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRyZXR1cm4gIWpRdWVyeS5leHByLnBzZXVkb3MudmlzaWJsZSggZWxlbSApO1xufTtcbmpRdWVyeS5leHByLnBzZXVkb3MudmlzaWJsZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRyZXR1cm4gISEoIGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCApO1xufTtcblxualF1ZXJ5LmFqYXhTZXR0aW5ncy54aHIgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKTtcbn07XG5cbnZhciB4aHJTdWNjZXNzU3RhdHVzID0ge1xuXG5cdC8vIEZpbGUgcHJvdG9jb2wgYWx3YXlzIHlpZWxkcyBzdGF0dXMgY29kZSAwLCBhc3N1bWUgMjAwXG5cdDA6IDIwMFxufTtcblxualF1ZXJ5LmFqYXhUcmFuc3BvcnQoIGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXHR2YXIgY2FsbGJhY2s7XG5cblx0cmV0dXJuIHtcblx0XHRzZW5kOiBmdW5jdGlvbiggaGVhZGVycywgY29tcGxldGUgKSB7XG5cdFx0XHR2YXIgaSxcblx0XHRcdFx0eGhyID0gb3B0aW9ucy54aHIoKTtcblxuXHRcdFx0eGhyLm9wZW4oXG5cdFx0XHRcdG9wdGlvbnMudHlwZSxcblx0XHRcdFx0b3B0aW9ucy51cmwsXG5cdFx0XHRcdG9wdGlvbnMuYXN5bmMsXG5cdFx0XHRcdG9wdGlvbnMudXNlcm5hbWUsXG5cdFx0XHRcdG9wdGlvbnMucGFzc3dvcmRcblx0XHRcdCk7XG5cblx0XHRcdC8vIEFwcGx5IGN1c3RvbSBmaWVsZHMgaWYgcHJvdmlkZWRcblx0XHRcdGlmICggb3B0aW9ucy54aHJGaWVsZHMgKSB7XG5cdFx0XHRcdGZvciAoIGkgaW4gb3B0aW9ucy54aHJGaWVsZHMgKSB7XG5cdFx0XHRcdFx0eGhyWyBpIF0gPSBvcHRpb25zLnhockZpZWxkc1sgaSBdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIE92ZXJyaWRlIG1pbWUgdHlwZSBpZiBuZWVkZWRcblx0XHRcdGlmICggb3B0aW9ucy5taW1lVHlwZSAmJiB4aHIub3ZlcnJpZGVNaW1lVHlwZSApIHtcblx0XHRcdFx0eGhyLm92ZXJyaWRlTWltZVR5cGUoIG9wdGlvbnMubWltZVR5cGUgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gWC1SZXF1ZXN0ZWQtV2l0aCBoZWFkZXJcblx0XHRcdC8vIEZvciBjcm9zcy1kb21haW4gcmVxdWVzdHMsIHNlZWluZyBhcyBjb25kaXRpb25zIGZvciBhIHByZWZsaWdodCBhcmVcblx0XHRcdC8vIGFraW4gdG8gYSBqaWdzYXcgcHV6emxlLCB3ZSBzaW1wbHkgbmV2ZXIgc2V0IGl0IHRvIGJlIHN1cmUuXG5cdFx0XHQvLyAoaXQgY2FuIGFsd2F5cyBiZSBzZXQgb24gYSBwZXItcmVxdWVzdCBiYXNpcyBvciBldmVuIHVzaW5nIGFqYXhTZXR1cClcblx0XHRcdC8vIEZvciBzYW1lLWRvbWFpbiByZXF1ZXN0cywgd29uJ3QgY2hhbmdlIGhlYWRlciBpZiBhbHJlYWR5IHByb3ZpZGVkLlxuXHRcdFx0aWYgKCAhb3B0aW9ucy5jcm9zc0RvbWFpbiAmJiAhaGVhZGVyc1sgXCJYLVJlcXVlc3RlZC1XaXRoXCIgXSApIHtcblx0XHRcdFx0aGVhZGVyc1sgXCJYLVJlcXVlc3RlZC1XaXRoXCIgXSA9IFwiWE1MSHR0cFJlcXVlc3RcIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IGhlYWRlcnNcblx0XHRcdGZvciAoIGkgaW4gaGVhZGVycyApIHtcblx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoIGksIGhlYWRlcnNbIGkgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDYWxsYmFja1xuXHRcdFx0Y2FsbGJhY2sgPSBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayA9IHhoci5vbmxvYWQgPSB4aHIub25lcnJvciA9IHhoci5vbmFib3J0ID0geGhyLm9udGltZW91dCA9IG51bGw7XG5cblx0XHRcdFx0XHRcdGlmICggdHlwZSA9PT0gXCJhYm9ydFwiICkge1xuXHRcdFx0XHRcdFx0XHR4aHIuYWJvcnQoKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIHR5cGUgPT09IFwiZXJyb3JcIiApIHtcblx0XHRcdFx0XHRcdFx0Y29tcGxldGUoXG5cblx0XHRcdFx0XHRcdFx0XHQvLyBGaWxlOiBwcm90b2NvbCBhbHdheXMgeWllbGRzIHN0YXR1cyAwOyBzZWUgdHJhYy04NjA1LCB0cmFjLTE0MjA3XG5cdFx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1cyxcblx0XHRcdFx0XHRcdFx0XHR4aHIuc3RhdHVzVGV4dFxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y29tcGxldGUoXG5cdFx0XHRcdFx0XHRcdFx0eGhyU3VjY2Vzc1N0YXR1c1sgeGhyLnN0YXR1cyBdIHx8IHhoci5zdGF0dXMsXG5cdFx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1c1RleHQsXG5cblx0XHRcdFx0XHRcdFx0XHQvLyBGb3IgWEhSMiBub24tdGV4dCwgbGV0IHRoZSBjYWxsZXIgaGFuZGxlIGl0IChnaC0yNDk4KVxuXHRcdFx0XHRcdFx0XHRcdCggeGhyLnJlc3BvbnNlVHlwZSB8fCBcInRleHRcIiApID09PSBcInRleHRcIiA/XG5cdFx0XHRcdFx0XHRcdFx0XHR7IHRleHQ6IHhoci5yZXNwb25zZVRleHQgfSA6XG5cdFx0XHRcdFx0XHRcdFx0XHR7IGJpbmFyeTogeGhyLnJlc3BvbnNlIH0sXG5cdFx0XHRcdFx0XHRcdFx0eGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gTGlzdGVuIHRvIGV2ZW50c1xuXHRcdFx0eGhyLm9ubG9hZCA9IGNhbGxiYWNrKCk7XG5cdFx0XHR4aHIub25hYm9ydCA9IHhoci5vbmVycm9yID0geGhyLm9udGltZW91dCA9IGNhbGxiYWNrKCBcImVycm9yXCIgKTtcblxuXHRcdFx0Ly8gQ3JlYXRlIHRoZSBhYm9ydCBjYWxsYmFja1xuXHRcdFx0Y2FsbGJhY2sgPSBjYWxsYmFjayggXCJhYm9ydFwiICk7XG5cblx0XHRcdHRyeSB7XG5cblx0XHRcdFx0Ly8gRG8gc2VuZCB0aGUgcmVxdWVzdCAodGhpcyBtYXkgcmFpc2UgYW4gZXhjZXB0aW9uKVxuXHRcdFx0XHR4aHIuc2VuZCggb3B0aW9ucy5oYXNDb250ZW50ICYmIG9wdGlvbnMuZGF0YSB8fCBudWxsICk7XG5cdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHQvLyB0cmFjLTE0NjgzOiBPbmx5IHJldGhyb3cgaWYgdGhpcyBoYXNuJ3QgYmVlbiBub3RpZmllZCBhcyBhbiBlcnJvciB5ZXRcblx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHR0aHJvdyBlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGFib3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufSApO1xuXG5mdW5jdGlvbiBjYW5Vc2VTY3JpcHRUYWcoIHMgKSB7XG5cblx0Ly8gQSBzY3JpcHQgdGFnIGNhbiBvbmx5IGJlIHVzZWQgZm9yIGFzeW5jLCBjcm9zcyBkb21haW4gb3IgZm9yY2VkLWJ5LWF0dHJzIHJlcXVlc3RzLlxuXHQvLyBSZXF1ZXN0cyB3aXRoIGhlYWRlcnMgY2Fubm90IHVzZSBhIHNjcmlwdCB0YWcuIEhvd2V2ZXIsIHdoZW4gYm90aCBgc2NyaXB0QXR0cnNgICZcblx0Ly8gYGhlYWRlcnNgIG9wdGlvbnMgYXJlIHNwZWNpZmllZCwgYm90aCBhcmUgaW1wb3NzaWJsZSB0byBzYXRpc2Z5IHRvZ2V0aGVyOyB3ZVxuXHQvLyBwcmVmZXIgYHNjcmlwdEF0dHJzYCB0aGVuLlxuXHQvLyBTeW5jIHJlcXVlc3RzIHJlbWFpbiBoYW5kbGVkIGRpZmZlcmVudGx5IHRvIHByZXNlcnZlIHN0cmljdCBzY3JpcHQgb3JkZXJpbmcuXG5cdHJldHVybiBzLnNjcmlwdEF0dHJzIHx8IChcblx0XHQhcy5oZWFkZXJzICYmXG5cdFx0KFxuXHRcdFx0cy5jcm9zc0RvbWFpbiB8fFxuXG5cdFx0XHQvLyBXaGVuIGRlYWxpbmcgd2l0aCBKU09OUCAoYHMuZGF0YVR5cGVzYCBpbmNsdWRlIFwianNvblwiIHRoZW4pXG5cdFx0XHQvLyBkb24ndCB1c2UgYSBzY3JpcHQgdGFnIHNvIHRoYXQgZXJyb3IgcmVzcG9uc2VzIHN0aWxsIG1heSBoYXZlXG5cdFx0XHQvLyBgcmVzcG9uc2VKU09OYCBzZXQuIENvbnRpbnVlIHVzaW5nIGEgc2NyaXB0IHRhZyBmb3IgSlNPTlAgcmVxdWVzdHMgdGhhdDpcblx0XHRcdC8vICAgKiBhcmUgY3Jvc3MtZG9tYWluIGFzIEFKQVggcmVxdWVzdHMgd29uJ3Qgd29yayB3aXRob3V0IGEgQ09SUyBzZXR1cFxuXHRcdFx0Ly8gICAqIGhhdmUgYHNjcmlwdEF0dHJzYCBzZXQgYXMgdGhhdCdzIGEgc2NyaXB0LW9ubHkgZnVuY3Rpb25hbGl0eVxuXHRcdFx0Ly8gTm90ZSB0aGF0IHRoaXMgbWVhbnMgSlNPTlAgcmVxdWVzdHMgdmlvbGF0ZSBzdHJpY3QgQ1NQIHNjcmlwdC1zcmMgc2V0dGluZ3MuXG5cdFx0XHQvLyBBIHByb3BlciBzb2x1dGlvbiBpcyB0byBtaWdyYXRlIGZyb20gdXNpbmcgSlNPTlAgdG8gYSBDT1JTIHNldHVwLlxuXHRcdFx0KCBzLmFzeW5jICYmIGpRdWVyeS5pbkFycmF5KCBcImpzb25cIiwgcy5kYXRhVHlwZXMgKSA8IDAgKVxuXHRcdClcblx0KTtcbn1cblxuLy8gSW5zdGFsbCBzY3JpcHQgZGF0YVR5cGUuIERvbid0IHNwZWNpZnkgYGNvbnRlbnRzLnNjcmlwdGAgc28gdGhhdCBhbiBleHBsaWNpdFxuLy8gYGRhdGFUeXBlOiBcInNjcmlwdFwiYCBpcyByZXF1aXJlZCAoc2VlIGdoLTI0MzIsIGdoLTQ4MjIpXG5qUXVlcnkuYWpheFNldHVwKCB7XG5cdGFjY2VwdHM6IHtcblx0XHRzY3JpcHQ6IFwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBcIiArXG5cdFx0XHRcImFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwiXG5cdH0sXG5cdGNvbnZlcnRlcnM6IHtcblx0XHRcInRleHQgc2NyaXB0XCI6IGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRcdFx0alF1ZXJ5Lmdsb2JhbEV2YWwoIHRleHQgKTtcblx0XHRcdHJldHVybiB0ZXh0O1xuXHRcdH1cblx0fVxufSApO1xuXG4vLyBIYW5kbGUgY2FjaGUncyBzcGVjaWFsIGNhc2UgYW5kIGNyb3NzRG9tYWluXG5qUXVlcnkuYWpheFByZWZpbHRlciggXCJzY3JpcHRcIiwgZnVuY3Rpb24oIHMgKSB7XG5cdGlmICggcy5jYWNoZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdHMuY2FjaGUgPSBmYWxzZTtcblx0fVxuXG5cdC8vIFRoZXNlIHR5cGVzIG9mIHJlcXVlc3RzIGFyZSBoYW5kbGVkIHZpYSBhIHNjcmlwdCB0YWdcblx0Ly8gc28gZm9yY2UgdGhlaXIgbWV0aG9kcyB0byBHRVQuXG5cdGlmICggY2FuVXNlU2NyaXB0VGFnKCBzICkgKSB7XG5cdFx0cy50eXBlID0gXCJHRVRcIjtcblx0fVxufSApO1xuXG4vLyBCaW5kIHNjcmlwdCB0YWcgaGFjayB0cmFuc3BvcnRcbmpRdWVyeS5hamF4VHJhbnNwb3J0KCBcInNjcmlwdFwiLCBmdW5jdGlvbiggcyApIHtcblx0aWYgKCBjYW5Vc2VTY3JpcHRUYWcoIHMgKSApIHtcblx0XHR2YXIgc2NyaXB0LCBjYWxsYmFjaztcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VuZDogZnVuY3Rpb24oIF8sIGNvbXBsZXRlICkge1xuXHRcdFx0XHRzY3JpcHQgPSBqUXVlcnkoIFwiPHNjcmlwdD5cIiApXG5cdFx0XHRcdFx0LmF0dHIoIHMuc2NyaXB0QXR0cnMgfHwge30gKVxuXHRcdFx0XHRcdC5wcm9wKCB7IGNoYXJzZXQ6IHMuc2NyaXB0Q2hhcnNldCwgc3JjOiBzLnVybCB9IClcblx0XHRcdFx0XHQub24oIFwibG9hZCBlcnJvclwiLCBjYWxsYmFjayA9IGZ1bmN0aW9uKCBldnQgKSB7XG5cdFx0XHRcdFx0XHRzY3JpcHQucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayA9IG51bGw7XG5cdFx0XHRcdFx0XHRpZiAoIGV2dCApIHtcblx0XHRcdFx0XHRcdFx0Y29tcGxldGUoIGV2dC50eXBlID09PSBcImVycm9yXCIgPyA0MDQgOiAyMDAsIGV2dC50eXBlICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdC8vIFVzZSBuYXRpdmUgRE9NIG1hbmlwdWxhdGlvbiB0byBhdm9pZCBvdXIgZG9tTWFuaXAgQUpBWCB0cmlja2VyeVxuXHRcdFx0XHRkb2N1bWVudCQxLmhlYWQuYXBwZW5kQ2hpbGQoIHNjcmlwdFsgMCBdICk7XG5cdFx0XHR9LFxuXHRcdFx0YWJvcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9XG59ICk7XG5cbnZhciBvbGRDYWxsYmFja3MgPSBbXSxcblx0cmpzb25wID0gLyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztcblxuLy8gRGVmYXVsdCBqc29ucCBzZXR0aW5nc1xualF1ZXJ5LmFqYXhTZXR1cCgge1xuXHRqc29ucDogXCJjYWxsYmFja1wiLFxuXHRqc29ucENhbGxiYWNrOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgY2FsbGJhY2sgPSBvbGRDYWxsYmFja3MucG9wKCkgfHwgKCBqUXVlcnkuZXhwYW5kbyArIFwiX1wiICsgKCBub25jZS5ndWlkKysgKSApO1xuXHRcdHRoaXNbIGNhbGxiYWNrIF0gPSB0cnVlO1xuXHRcdHJldHVybiBjYWxsYmFjaztcblx0fVxufSApO1xuXG4vLyBEZXRlY3QsIG5vcm1hbGl6ZSBvcHRpb25zIGFuZCBpbnN0YWxsIGNhbGxiYWNrcyBmb3IganNvbnAgcmVxdWVzdHNcbmpRdWVyeS5hamF4UHJlZmlsdGVyKCBcImpzb25wXCIsIGZ1bmN0aW9uKCBzLCBvcmlnaW5hbFNldHRpbmdzLCBqcVhIUiApIHtcblxuXHR2YXIgY2FsbGJhY2tOYW1lLCBvdmVyd3JpdHRlbiwgcmVzcG9uc2VDb250YWluZXIsXG5cdFx0anNvblByb3AgPSBzLmpzb25wICE9PSBmYWxzZSAmJiAoIHJqc29ucC50ZXN0KCBzLnVybCApID9cblx0XHRcdFwidXJsXCIgOlxuXHRcdFx0dHlwZW9mIHMuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHQoIHMuY29udGVudFR5cGUgfHwgXCJcIiApXG5cdFx0XHRcdFx0LmluZGV4T2YoIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgKSA9PT0gMCAmJlxuXHRcdFx0XHRyanNvbnAudGVzdCggcy5kYXRhICkgJiYgXCJkYXRhXCJcblx0XHQpO1xuXG5cdC8vIEdldCBjYWxsYmFjayBuYW1lLCByZW1lbWJlcmluZyBwcmVleGlzdGluZyB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggaXRcblx0Y2FsbGJhY2tOYW1lID0gcy5qc29ucENhbGxiYWNrID0gdHlwZW9mIHMuanNvbnBDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiID9cblx0XHRzLmpzb25wQ2FsbGJhY2soKSA6XG5cdFx0cy5qc29ucENhbGxiYWNrO1xuXG5cdC8vIEluc2VydCBjYWxsYmFjayBpbnRvIHVybCBvciBmb3JtIGRhdGFcblx0aWYgKCBqc29uUHJvcCApIHtcblx0XHRzWyBqc29uUHJvcCBdID0gc1sganNvblByb3AgXS5yZXBsYWNlKCByanNvbnAsIFwiJDFcIiArIGNhbGxiYWNrTmFtZSApO1xuXHR9IGVsc2UgaWYgKCBzLmpzb25wICE9PSBmYWxzZSApIHtcblx0XHRzLnVybCArPSAoIHJxdWVyeS50ZXN0KCBzLnVybCApID8gXCImXCIgOiBcIj9cIiApICsgcy5qc29ucCArIFwiPVwiICsgY2FsbGJhY2tOYW1lO1xuXHR9XG5cblx0Ly8gVXNlIGRhdGEgY29udmVydGVyIHRvIHJldHJpZXZlIGpzb24gYWZ0ZXIgc2NyaXB0IGV4ZWN1dGlvblxuXHRzLmNvbnZlcnRlcnNbIFwic2NyaXB0IGpzb25cIiBdID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCAhcmVzcG9uc2VDb250YWluZXIgKSB7XG5cdFx0XHRqUXVlcnkuZXJyb3IoIGNhbGxiYWNrTmFtZSArIFwiIHdhcyBub3QgY2FsbGVkXCIgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3BvbnNlQ29udGFpbmVyWyAwIF07XG5cdH07XG5cblx0Ly8gRm9yY2UganNvbiBkYXRhVHlwZVxuXHRzLmRhdGFUeXBlc1sgMCBdID0gXCJqc29uXCI7XG5cblx0Ly8gSW5zdGFsbCBjYWxsYmFja1xuXHRvdmVyd3JpdHRlbiA9IHdpbmRvd1sgY2FsbGJhY2tOYW1lIF07XG5cdHdpbmRvd1sgY2FsbGJhY2tOYW1lIF0gPSBmdW5jdGlvbigpIHtcblx0XHRyZXNwb25zZUNvbnRhaW5lciA9IGFyZ3VtZW50cztcblx0fTtcblxuXHQvLyBDbGVhbi11cCBmdW5jdGlvbiAoZmlyZXMgYWZ0ZXIgY29udmVydGVycylcblx0anFYSFIuYWx3YXlzKCBmdW5jdGlvbigpIHtcblxuXHRcdC8vIElmIHByZXZpb3VzIHZhbHVlIGRpZG4ndCBleGlzdCAtIHJlbW92ZSBpdFxuXHRcdGlmICggb3ZlcndyaXR0ZW4gPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGpRdWVyeSggd2luZG93ICkucmVtb3ZlUHJvcCggY2FsbGJhY2tOYW1lICk7XG5cblx0XHQvLyBPdGhlcndpc2UgcmVzdG9yZSBwcmVleGlzdGluZyB2YWx1ZVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aW5kb3dbIGNhbGxiYWNrTmFtZSBdID0gb3ZlcndyaXR0ZW47XG5cdFx0fVxuXG5cdFx0Ly8gU2F2ZSBiYWNrIGFzIGZyZWVcblx0XHRpZiAoIHNbIGNhbGxiYWNrTmFtZSBdICkge1xuXG5cdFx0XHQvLyBNYWtlIHN1cmUgdGhhdCByZS11c2luZyB0aGUgb3B0aW9ucyBkb2Vzbid0IHNjcmV3IHRoaW5ncyBhcm91bmRcblx0XHRcdHMuanNvbnBDYWxsYmFjayA9IG9yaWdpbmFsU2V0dGluZ3MuanNvbnBDYWxsYmFjaztcblxuXHRcdFx0Ly8gU2F2ZSB0aGUgY2FsbGJhY2sgbmFtZSBmb3IgZnV0dXJlIHVzZVxuXHRcdFx0b2xkQ2FsbGJhY2tzLnB1c2goIGNhbGxiYWNrTmFtZSApO1xuXHRcdH1cblxuXHRcdC8vIENhbGwgaWYgaXQgd2FzIGEgZnVuY3Rpb24gYW5kIHdlIGhhdmUgYSByZXNwb25zZVxuXHRcdGlmICggcmVzcG9uc2VDb250YWluZXIgJiYgdHlwZW9mIG92ZXJ3cml0dGVuID09PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRvdmVyd3JpdHRlbiggcmVzcG9uc2VDb250YWluZXJbIDAgXSApO1xuXHRcdH1cblxuXHRcdHJlc3BvbnNlQ29udGFpbmVyID0gb3ZlcndyaXR0ZW4gPSB1bmRlZmluZWQ7XG5cdH0gKTtcblxuXHQvLyBEZWxlZ2F0ZSB0byBzY3JpcHRcblx0cmV0dXJuIFwic2NyaXB0XCI7XG59ICk7XG5cbmpRdWVyeS5hamF4UHJlZmlsdGVyKCBmdW5jdGlvbiggcywgb3JpZ09wdGlvbnMgKSB7XG5cblx0Ly8gQmluYXJ5IGRhdGEgbmVlZHMgdG8gYmUgcGFzc2VkIHRvIFhIUiBhcy1pcyB3aXRob3V0IHN0cmluZ2lmaWNhdGlvbi5cblx0aWYgKCB0eXBlb2Ygcy5kYXRhICE9PSBcInN0cmluZ1wiICYmICFqUXVlcnkuaXNQbGFpbk9iamVjdCggcy5kYXRhICkgJiZcblx0XHRcdCFBcnJheS5pc0FycmF5KCBzLmRhdGEgKSAmJlxuXG5cdFx0XHQvLyBEb24ndCBkaXNhYmxlIGRhdGEgcHJvY2Vzc2luZyBpZiBleHBsaWNpdGx5IHNldCBieSB0aGUgdXNlci5cblx0XHRcdCEoIFwicHJvY2Vzc0RhdGFcIiBpbiBvcmlnT3B0aW9ucyApICkge1xuXHRcdHMucHJvY2Vzc0RhdGEgPSBmYWxzZTtcblx0fVxuXG5cdC8vIGBDb250ZW50LVR5cGVgIGZvciByZXF1ZXN0cyB3aXRoIGBGb3JtRGF0YWAgYm9kaWVzIG5lZWRzIHRvIGJlIHNldFxuXHQvLyBieSB0aGUgYnJvd3NlciBhcyBpdCBuZWVkcyB0byBhcHBlbmQgdGhlIGBib3VuZGFyeWAgaXQgZ2VuZXJhdGVkLlxuXHRpZiAoIHMuZGF0YSBpbnN0YW5jZW9mIHdpbmRvdy5Gb3JtRGF0YSApIHtcblx0XHRzLmNvbnRlbnRUeXBlID0gZmFsc2U7XG5cdH1cbn0gKTtcblxuLy8gQXJndW1lbnQgXCJkYXRhXCIgc2hvdWxkIGJlIHN0cmluZyBvZiBodG1sIG9yIGEgVHJ1c3RlZEhUTUwgd3JhcHBlciBvZiBvYnZpb3VzIEhUTUxcbi8vIGNvbnRleHQgKG9wdGlvbmFsKTogSWYgc3BlY2lmaWVkLCB0aGUgZnJhZ21lbnQgd2lsbCBiZSBjcmVhdGVkIGluIHRoaXMgY29udGV4dCxcbi8vIGRlZmF1bHRzIHRvIGRvY3VtZW50XG4vLyBrZWVwU2NyaXB0cyAob3B0aW9uYWwpOiBJZiB0cnVlLCB3aWxsIGluY2x1ZGUgc2NyaXB0cyBwYXNzZWQgaW4gdGhlIGh0bWwgc3RyaW5nXG5qUXVlcnkucGFyc2VIVE1MID0gZnVuY3Rpb24oIGRhdGEsIGNvbnRleHQsIGtlZXBTY3JpcHRzICkge1xuXHRpZiAoIHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiICYmICFpc09idmlvdXNIdG1sKCBkYXRhICsgXCJcIiApICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXHRpZiAoIHR5cGVvZiBjb250ZXh0ID09PSBcImJvb2xlYW5cIiApIHtcblx0XHRrZWVwU2NyaXB0cyA9IGNvbnRleHQ7XG5cdFx0Y29udGV4dCA9IGZhbHNlO1xuXHR9XG5cblx0dmFyIGJhc2UsIHBhcnNlZCwgc2NyaXB0cztcblxuXHRpZiAoICFjb250ZXh0ICkge1xuXG5cdFx0Ly8gU3RvcCBzY3JpcHRzIG9yIGlubGluZSBldmVudCBoYW5kbGVycyBmcm9tIGJlaW5nIGV4ZWN1dGVkIGltbWVkaWF0ZWx5XG5cdFx0Ly8gYnkgdXNpbmcgZG9jdW1lbnQuaW1wbGVtZW50YXRpb25cblx0XHRjb250ZXh0ID0gZG9jdW1lbnQkMS5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoIFwiXCIgKTtcblxuXHRcdC8vIFNldCB0aGUgYmFzZSBocmVmIGZvciB0aGUgY3JlYXRlZCBkb2N1bWVudFxuXHRcdC8vIHNvIGFueSBwYXJzZWQgZWxlbWVudHMgd2l0aCBVUkxzXG5cdFx0Ly8gYXJlIGJhc2VkIG9uIHRoZSBkb2N1bWVudCdzIFVSTCAoZ2gtMjk2NSlcblx0XHRiYXNlID0gY29udGV4dC5jcmVhdGVFbGVtZW50KCBcImJhc2VcIiApO1xuXHRcdGJhc2UuaHJlZiA9IGRvY3VtZW50JDEubG9jYXRpb24uaHJlZjtcblx0XHRjb250ZXh0LmhlYWQuYXBwZW5kQ2hpbGQoIGJhc2UgKTtcblx0fVxuXG5cdHBhcnNlZCA9IHJzaW5nbGVUYWcuZXhlYyggZGF0YSApO1xuXHRzY3JpcHRzID0gIWtlZXBTY3JpcHRzICYmIFtdO1xuXG5cdC8vIFNpbmdsZSB0YWdcblx0aWYgKCBwYXJzZWQgKSB7XG5cdFx0cmV0dXJuIFsgY29udGV4dC5jcmVhdGVFbGVtZW50KCBwYXJzZWRbIDEgXSApIF07XG5cdH1cblxuXHRwYXJzZWQgPSBidWlsZEZyYWdtZW50KCBbIGRhdGEgXSwgY29udGV4dCwgc2NyaXB0cyApO1xuXG5cdGlmICggc2NyaXB0cyAmJiBzY3JpcHRzLmxlbmd0aCApIHtcblx0XHRqUXVlcnkoIHNjcmlwdHMgKS5yZW1vdmUoKTtcblx0fVxuXG5cdHJldHVybiBqUXVlcnkubWVyZ2UoIFtdLCBwYXJzZWQuY2hpbGROb2RlcyApO1xufTtcblxuLyoqXG4gKiBMb2FkIGEgdXJsIGludG8gYSBwYWdlXG4gKi9cbmpRdWVyeS5mbi5sb2FkID0gZnVuY3Rpb24oIHVybCwgcGFyYW1zLCBjYWxsYmFjayApIHtcblx0dmFyIHNlbGVjdG9yLCB0eXBlLCByZXNwb25zZSxcblx0XHRzZWxmID0gdGhpcyxcblx0XHRvZmYgPSB1cmwuaW5kZXhPZiggXCIgXCIgKTtcblxuXHRpZiAoIG9mZiA+IC0xICkge1xuXHRcdHNlbGVjdG9yID0gc3RyaXBBbmRDb2xsYXBzZSggdXJsLnNsaWNlKCBvZmYgKSApO1xuXHRcdHVybCA9IHVybC5zbGljZSggMCwgb2ZmICk7XG5cdH1cblxuXHQvLyBJZiBpdCdzIGEgZnVuY3Rpb25cblx0aWYgKCB0eXBlb2YgcGFyYW1zID09PSBcImZ1bmN0aW9uXCIgKSB7XG5cblx0XHQvLyBXZSBhc3N1bWUgdGhhdCBpdCdzIHRoZSBjYWxsYmFja1xuXHRcdGNhbGxiYWNrID0gcGFyYW1zO1xuXHRcdHBhcmFtcyA9IHVuZGVmaW5lZDtcblxuXHQvLyBPdGhlcndpc2UsIGJ1aWxkIGEgcGFyYW0gc3RyaW5nXG5cdH0gZWxzZSBpZiAoIHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zID09PSBcIm9iamVjdFwiICkge1xuXHRcdHR5cGUgPSBcIlBPU1RcIjtcblx0fVxuXG5cdC8vIElmIHdlIGhhdmUgZWxlbWVudHMgdG8gbW9kaWZ5LCBtYWtlIHRoZSByZXF1ZXN0XG5cdGlmICggc2VsZi5sZW5ndGggPiAwICkge1xuXHRcdGpRdWVyeS5hamF4KCB7XG5cdFx0XHR1cmw6IHVybCxcblxuXHRcdFx0Ly8gSWYgXCJ0eXBlXCIgdmFyaWFibGUgaXMgdW5kZWZpbmVkLCB0aGVuIFwiR0VUXCIgbWV0aG9kIHdpbGwgYmUgdXNlZC5cblx0XHRcdC8vIE1ha2UgdmFsdWUgb2YgdGhpcyBmaWVsZCBleHBsaWNpdCBzaW5jZVxuXHRcdFx0Ly8gdXNlciBjYW4gb3ZlcnJpZGUgaXQgdGhyb3VnaCBhamF4U2V0dXAgbWV0aG9kXG5cdFx0XHR0eXBlOiB0eXBlIHx8IFwiR0VUXCIsXG5cdFx0XHRkYXRhVHlwZTogXCJodG1sXCIsXG5cdFx0XHRkYXRhOiBwYXJhbXNcblx0XHR9ICkuZG9uZSggZnVuY3Rpb24oIHJlc3BvbnNlVGV4dCApIHtcblxuXHRcdFx0Ly8gU2F2ZSByZXNwb25zZSBmb3IgdXNlIGluIGNvbXBsZXRlIGNhbGxiYWNrXG5cdFx0XHRyZXNwb25zZSA9IGFyZ3VtZW50cztcblxuXHRcdFx0c2VsZi5odG1sKCBzZWxlY3RvciA/XG5cblx0XHRcdFx0Ly8gSWYgYSBzZWxlY3RvciB3YXMgc3BlY2lmaWVkLCBsb2NhdGUgdGhlIHJpZ2h0IGVsZW1lbnRzIGluIGEgZHVtbXkgZGl2XG5cdFx0XHRcdC8vIEV4Y2x1ZGUgc2NyaXB0cyB0byBhdm9pZCBJRSAnUGVybWlzc2lvbiBEZW5pZWQnIGVycm9yc1xuXHRcdFx0XHRqUXVlcnkoIFwiPGRpdj5cIiApLmFwcGVuZCggalF1ZXJ5LnBhcnNlSFRNTCggcmVzcG9uc2VUZXh0ICkgKS5maW5kKCBzZWxlY3RvciApIDpcblxuXHRcdFx0XHQvLyBPdGhlcndpc2UgdXNlIHRoZSBmdWxsIHJlc3VsdFxuXHRcdFx0XHRyZXNwb25zZVRleHQgKTtcblxuXHRcdC8vIElmIHRoZSByZXF1ZXN0IHN1Y2NlZWRzLCB0aGlzIGZ1bmN0aW9uIGdldHMgXCJkYXRhXCIsIFwic3RhdHVzXCIsIFwianFYSFJcIlxuXHRcdC8vIGJ1dCB0aGV5IGFyZSBpZ25vcmVkIGJlY2F1c2UgcmVzcG9uc2Ugd2FzIHNldCBhYm92ZS5cblx0XHQvLyBJZiBpdCBmYWlscywgdGhpcyBmdW5jdGlvbiBnZXRzIFwianFYSFJcIiwgXCJzdGF0dXNcIiwgXCJlcnJvclwiXG5cdFx0fSApLmFsd2F5cyggY2FsbGJhY2sgJiYgZnVuY3Rpb24oIGpxWEhSLCBzdGF0dXMgKSB7XG5cdFx0XHRzZWxmLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjYWxsYmFjay5hcHBseSggdGhpcywgcmVzcG9uc2UgfHwgWyBqcVhIUi5yZXNwb25zZVRleHQsIHN0YXR1cywganFYSFIgXSApO1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxualF1ZXJ5LmV4cHIucHNldWRvcy5hbmltYXRlZCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRyZXR1cm4galF1ZXJ5LmdyZXAoIGpRdWVyeS50aW1lcnMsIGZ1bmN0aW9uKCBmbiApIHtcblx0XHRyZXR1cm4gZWxlbSA9PT0gZm4uZWxlbTtcblx0fSApLmxlbmd0aDtcbn07XG5cbmpRdWVyeS5vZmZzZXQgPSB7XG5cdHNldE9mZnNldDogZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIGkgKSB7XG5cdFx0dmFyIGN1clBvc2l0aW9uLCBjdXJMZWZ0LCBjdXJDU1NUb3AsIGN1clRvcCwgY3VyT2Zmc2V0LCBjdXJDU1NMZWZ0LCBjYWxjdWxhdGVQb3NpdGlvbixcblx0XHRcdHBvc2l0aW9uID0galF1ZXJ5LmNzcyggZWxlbSwgXCJwb3NpdGlvblwiICksXG5cdFx0XHRjdXJFbGVtID0galF1ZXJ5KCBlbGVtICksXG5cdFx0XHRwcm9wcyA9IHt9O1xuXG5cdFx0Ly8gU2V0IHBvc2l0aW9uIGZpcnN0LCBpbi1jYXNlIHRvcC9sZWZ0IGFyZSBzZXQgZXZlbiBvbiBzdGF0aWMgZWxlbVxuXHRcdGlmICggcG9zaXRpb24gPT09IFwic3RhdGljXCIgKSB7XG5cdFx0XHRlbGVtLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXHRcdH1cblxuXHRcdGN1ck9mZnNldCA9IGN1ckVsZW0ub2Zmc2V0KCk7XG5cdFx0Y3VyQ1NTVG9wID0galF1ZXJ5LmNzcyggZWxlbSwgXCJ0b3BcIiApO1xuXHRcdGN1ckNTU0xlZnQgPSBqUXVlcnkuY3NzKCBlbGVtLCBcImxlZnRcIiApO1xuXHRcdGNhbGN1bGF0ZVBvc2l0aW9uID0gKCBwb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiIHx8IHBvc2l0aW9uID09PSBcImZpeGVkXCIgKSAmJlxuXHRcdFx0KCBjdXJDU1NUb3AgKyBjdXJDU1NMZWZ0ICkuaW5kZXhPZiggXCJhdXRvXCIgKSA+IC0xO1xuXG5cdFx0Ly8gTmVlZCB0byBiZSBhYmxlIHRvIGNhbGN1bGF0ZSBwb3NpdGlvbiBpZiBlaXRoZXJcblx0XHQvLyB0b3Agb3IgbGVmdCBpcyBhdXRvIGFuZCBwb3NpdGlvbiBpcyBlaXRoZXIgYWJzb2x1dGUgb3IgZml4ZWRcblx0XHRpZiAoIGNhbGN1bGF0ZVBvc2l0aW9uICkge1xuXHRcdFx0Y3VyUG9zaXRpb24gPSBjdXJFbGVtLnBvc2l0aW9uKCk7XG5cdFx0XHRjdXJUb3AgPSBjdXJQb3NpdGlvbi50b3A7XG5cdFx0XHRjdXJMZWZ0ID0gY3VyUG9zaXRpb24ubGVmdDtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJUb3AgPSBwYXJzZUZsb2F0KCBjdXJDU1NUb3AgKSB8fCAwO1xuXHRcdFx0Y3VyTGVmdCA9IHBhcnNlRmxvYXQoIGN1ckNTU0xlZnQgKSB8fCAwO1xuXHRcdH1cblxuXHRcdGlmICggdHlwZW9mIG9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIiApIHtcblxuXHRcdFx0Ly8gVXNlIGpRdWVyeS5leHRlbmQgaGVyZSB0byBhbGxvdyBtb2RpZmljYXRpb24gb2YgY29vcmRpbmF0ZXMgYXJndW1lbnQgKGdoLTE4NDgpXG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucy5jYWxsKCBlbGVtLCBpLCBqUXVlcnkuZXh0ZW5kKCB7fSwgY3VyT2Zmc2V0ICkgKTtcblx0XHR9XG5cblx0XHRpZiAoIG9wdGlvbnMudG9wICE9IG51bGwgKSB7XG5cdFx0XHRwcm9wcy50b3AgPSAoIG9wdGlvbnMudG9wIC0gY3VyT2Zmc2V0LnRvcCApICsgY3VyVG9wO1xuXHRcdH1cblx0XHRpZiAoIG9wdGlvbnMubGVmdCAhPSBudWxsICkge1xuXHRcdFx0cHJvcHMubGVmdCA9ICggb3B0aW9ucy5sZWZ0IC0gY3VyT2Zmc2V0LmxlZnQgKSArIGN1ckxlZnQ7XG5cdFx0fVxuXG5cdFx0aWYgKCBcInVzaW5nXCIgaW4gb3B0aW9ucyApIHtcblx0XHRcdG9wdGlvbnMudXNpbmcuY2FsbCggZWxlbSwgcHJvcHMgKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJFbGVtLmNzcyggcHJvcHMgKTtcblx0XHR9XG5cdH1cbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblxuXHQvLyBvZmZzZXQoKSByZWxhdGVzIGFuIGVsZW1lbnQncyBib3JkZXIgYm94IHRvIHRoZSBkb2N1bWVudCBvcmlnaW5cblx0b2Zmc2V0OiBmdW5jdGlvbiggb3B0aW9ucyApIHtcblxuXHRcdC8vIFByZXNlcnZlIGNoYWluaW5nIGZvciBzZXR0ZXJcblx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gb3B0aW9ucyA9PT0gdW5kZWZpbmVkID9cblx0XHRcdFx0dGhpcyA6XG5cdFx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5Lm9mZnNldC5zZXRPZmZzZXQoIHRoaXMsIG9wdGlvbnMsIGkgKTtcblx0XHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHZhciByZWN0LCB3aW4sXG5cdFx0XHRlbGVtID0gdGhpc1sgMCBdO1xuXG5cdFx0aWYgKCAhZWxlbSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gemVyb3MgZm9yIGRpc2Nvbm5lY3RlZCBhbmQgaGlkZGVuIChkaXNwbGF5OiBub25lKSBlbGVtZW50cyAoZ2gtMjMxMClcblx0XHQvLyBTdXBwb3J0OiBJRSA8PTExK1xuXHRcdC8vIFJ1bm5pbmcgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGFcblx0XHQvLyBkaXNjb25uZWN0ZWQgbm9kZSBpbiBJRSB0aHJvd3MgYW4gZXJyb3Jcblx0XHRpZiAoICFlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwIH07XG5cdFx0fVxuXG5cdFx0Ly8gR2V0IGRvY3VtZW50LXJlbGF0aXZlIHBvc2l0aW9uIGJ5IGFkZGluZyB2aWV3cG9ydCBzY3JvbGwgdG8gdmlld3BvcnQtcmVsYXRpdmUgZ0JDUlxuXHRcdHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHdpbiA9IGVsZW0ub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldztcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9wOiByZWN0LnRvcCArIHdpbi5wYWdlWU9mZnNldCxcblx0XHRcdGxlZnQ6IHJlY3QubGVmdCArIHdpbi5wYWdlWE9mZnNldFxuXHRcdH07XG5cdH0sXG5cblx0Ly8gcG9zaXRpb24oKSByZWxhdGVzIGFuIGVsZW1lbnQncyBtYXJnaW4gYm94IHRvIGl0cyBvZmZzZXQgcGFyZW50J3MgcGFkZGluZyBib3hcblx0Ly8gVGhpcyBjb3JyZXNwb25kcyB0byB0aGUgYmVoYXZpb3Igb2YgQ1NTIGFic29sdXRlIHBvc2l0aW9uaW5nXG5cdHBvc2l0aW9uOiBmdW5jdGlvbigpIHtcblx0XHRpZiAoICF0aGlzWyAwIF0gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIG9mZnNldFBhcmVudCwgb2Zmc2V0LCBkb2MsXG5cdFx0XHRlbGVtID0gdGhpc1sgMCBdLFxuXHRcdFx0cGFyZW50T2Zmc2V0ID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcblxuXHRcdC8vIHBvc2l0aW9uOmZpeGVkIGVsZW1lbnRzIGFyZSBvZmZzZXQgZnJvbSB0aGUgdmlld3BvcnQsIHdoaWNoIGl0c2VsZiBhbHdheXMgaGFzIHplcm8gb2Zmc2V0XG5cdFx0aWYgKCBqUXVlcnkuY3NzKCBlbGVtLCBcInBvc2l0aW9uXCIgKSA9PT0gXCJmaXhlZFwiICkge1xuXG5cdFx0XHQvLyBBc3N1bWUgcG9zaXRpb246Zml4ZWQgaW1wbGllcyBhdmFpbGFiaWxpdHkgb2YgZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG5cdFx0XHRvZmZzZXQgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdG9mZnNldCA9IHRoaXMub2Zmc2V0KCk7XG5cblx0XHRcdC8vIEFjY291bnQgZm9yIHRoZSAqcmVhbCogb2Zmc2V0IHBhcmVudCwgd2hpY2ggY2FuIGJlIHRoZSBkb2N1bWVudCBvciBpdHMgcm9vdCBlbGVtZW50XG5cdFx0XHQvLyB3aGVuIGEgc3RhdGljYWxseSBwb3NpdGlvbmVkIGVsZW1lbnQgaXMgaWRlbnRpZmllZFxuXHRcdFx0ZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xuXHRcdFx0b2Zmc2V0UGFyZW50ID0gZWxlbS5vZmZzZXRQYXJlbnQgfHwgZG9jLmRvY3VtZW50RWxlbWVudDtcblx0XHRcdHdoaWxlICggb2Zmc2V0UGFyZW50ICYmXG5cdFx0XHRcdG9mZnNldFBhcmVudCAhPT0gZG9jLmRvY3VtZW50RWxlbWVudCAmJlxuXHRcdFx0XHRqUXVlcnkuY3NzKCBvZmZzZXRQYXJlbnQsIFwicG9zaXRpb25cIiApID09PSBcInN0YXRpY1wiICkge1xuXG5cdFx0XHRcdG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQgfHwgZG9jLmRvY3VtZW50RWxlbWVudDtcblx0XHRcdH1cblx0XHRcdGlmICggb2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudCAhPT0gZWxlbSAmJiBvZmZzZXRQYXJlbnQubm9kZVR5cGUgPT09IDEgJiZcblx0XHRcdFx0alF1ZXJ5LmNzcyggb2Zmc2V0UGFyZW50LCBcInBvc2l0aW9uXCIgKSAhPT0gXCJzdGF0aWNcIiApIHtcblxuXHRcdFx0XHQvLyBJbmNvcnBvcmF0ZSBib3JkZXJzIGludG8gaXRzIG9mZnNldCwgc2luY2UgdGhleSBhcmUgb3V0c2lkZSBpdHMgY29udGVudCBvcmlnaW5cblx0XHRcdFx0cGFyZW50T2Zmc2V0ID0galF1ZXJ5KCBvZmZzZXRQYXJlbnQgKS5vZmZzZXQoKTtcblx0XHRcdFx0cGFyZW50T2Zmc2V0LnRvcCArPSBqUXVlcnkuY3NzKCBvZmZzZXRQYXJlbnQsIFwiYm9yZGVyVG9wV2lkdGhcIiwgdHJ1ZSApO1xuXHRcdFx0XHRwYXJlbnRPZmZzZXQubGVmdCArPSBqUXVlcnkuY3NzKCBvZmZzZXRQYXJlbnQsIFwiYm9yZGVyTGVmdFdpZHRoXCIsIHRydWUgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBTdWJ0cmFjdCBwYXJlbnQgb2Zmc2V0cyBhbmQgZWxlbWVudCBtYXJnaW5zXG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvcDogb2Zmc2V0LnRvcCAtIHBhcmVudE9mZnNldC50b3AgLSBqUXVlcnkuY3NzKCBlbGVtLCBcIm1hcmdpblRvcFwiLCB0cnVlICksXG5cdFx0XHRsZWZ0OiBvZmZzZXQubGVmdCAtIHBhcmVudE9mZnNldC5sZWZ0IC0galF1ZXJ5LmNzcyggZWxlbSwgXCJtYXJnaW5MZWZ0XCIsIHRydWUgKVxuXHRcdH07XG5cdH0sXG5cblx0Ly8gVGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gZG9jdW1lbnRFbGVtZW50IGluIHRoZSBmb2xsb3dpbmcgY2FzZXM6XG5cdC8vIDEpIEZvciB0aGUgZWxlbWVudCBpbnNpZGUgdGhlIGlmcmFtZSB3aXRob3V0IG9mZnNldFBhcmVudCwgdGhpcyBtZXRob2Qgd2lsbCByZXR1cm5cblx0Ly8gICAgZG9jdW1lbnRFbGVtZW50IG9mIHRoZSBwYXJlbnQgd2luZG93XG5cdC8vIDIpIEZvciB0aGUgaGlkZGVuIG9yIGRldGFjaGVkIGVsZW1lbnRcblx0Ly8gMykgRm9yIGJvZHkgb3IgaHRtbCBlbGVtZW50LCBpLmUuIGluIGNhc2Ugb2YgdGhlIGh0bWwgbm9kZSAtIGl0IHdpbGwgcmV0dXJuIGl0c2VsZlxuXHQvL1xuXHQvLyBidXQgdGhvc2UgZXhjZXB0aW9ucyB3ZXJlIG5ldmVyIHByZXNlbnRlZCBhcyBhIHJlYWwgbGlmZSB1c2UtY2FzZXNcblx0Ly8gYW5kIG1pZ2h0IGJlIGNvbnNpZGVyZWQgYXMgbW9yZSBwcmVmZXJhYmxlIHJlc3VsdHMuXG5cdC8vXG5cdC8vIFRoaXMgbG9naWMsIGhvd2V2ZXIsIGlzIG5vdCBndWFyYW50ZWVkIGFuZCBjYW4gY2hhbmdlIGF0IGFueSBwb2ludCBpbiB0aGUgZnV0dXJlXG5cdG9mZnNldFBhcmVudDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBvZmZzZXRQYXJlbnQgPSB0aGlzLm9mZnNldFBhcmVudDtcblxuXHRcdFx0d2hpbGUgKCBvZmZzZXRQYXJlbnQgJiYgalF1ZXJ5LmNzcyggb2Zmc2V0UGFyZW50LCBcInBvc2l0aW9uXCIgKSA9PT0gXCJzdGF0aWNcIiApIHtcblx0XHRcdFx0b2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG9mZnNldFBhcmVudCB8fCBkb2N1bWVudEVsZW1lbnQkMTtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxuLy8gQ3JlYXRlIHNjcm9sbExlZnQgYW5kIHNjcm9sbFRvcCBtZXRob2RzXG5qUXVlcnkuZWFjaCggeyBzY3JvbGxMZWZ0OiBcInBhZ2VYT2Zmc2V0XCIsIHNjcm9sbFRvcDogXCJwYWdlWU9mZnNldFwiIH0sIGZ1bmN0aW9uKCBtZXRob2QsIHByb3AgKSB7XG5cdHZhciB0b3AgPSBcInBhZ2VZT2Zmc2V0XCIgPT09IHByb3A7XG5cblx0alF1ZXJ5LmZuWyBtZXRob2QgXSA9IGZ1bmN0aW9uKCB2YWwgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIGVsZW0sIG1ldGhvZCwgdmFsICkge1xuXG5cdFx0XHQvLyBDb2FsZXNjZSBkb2N1bWVudHMgYW5kIHdpbmRvd3Ncblx0XHRcdHZhciB3aW47XG5cdFx0XHRpZiAoIGlzV2luZG93KCBlbGVtICkgKSB7XG5cdFx0XHRcdHdpbiA9IGVsZW07XG5cdFx0XHR9IGVsc2UgaWYgKCBlbGVtLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHR3aW4gPSBlbGVtLmRlZmF1bHRWaWV3O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHZhbCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRyZXR1cm4gd2luID8gd2luWyBwcm9wIF0gOiBlbGVtWyBtZXRob2QgXTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB3aW4gKSB7XG5cdFx0XHRcdHdpbi5zY3JvbGxUbyhcblx0XHRcdFx0XHQhdG9wID8gdmFsIDogd2luLnBhZ2VYT2Zmc2V0LFxuXHRcdFx0XHRcdHRvcCA/IHZhbCA6IHdpbi5wYWdlWU9mZnNldFxuXHRcdFx0XHQpO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtWyBtZXRob2QgXSA9IHZhbDtcblx0XHRcdH1cblx0XHR9LCBtZXRob2QsIHZhbCwgYXJndW1lbnRzLmxlbmd0aCApO1xuXHR9O1xufSApO1xuXG4vLyBDcmVhdGUgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGgsIGhlaWdodCwgd2lkdGgsIG91dGVySGVpZ2h0IGFuZCBvdXRlcldpZHRoIG1ldGhvZHNcbmpRdWVyeS5lYWNoKCB7IEhlaWdodDogXCJoZWlnaHRcIiwgV2lkdGg6IFwid2lkdGhcIiB9LCBmdW5jdGlvbiggbmFtZSwgdHlwZSApIHtcblx0alF1ZXJ5LmVhY2goIHtcblx0XHRwYWRkaW5nOiBcImlubmVyXCIgKyBuYW1lLFxuXHRcdGNvbnRlbnQ6IHR5cGUsXG5cdFx0XCJcIjogXCJvdXRlclwiICsgbmFtZVxuXHR9LCBmdW5jdGlvbiggZGVmYXVsdEV4dHJhLCBmdW5jTmFtZSApIHtcblxuXHRcdC8vIE1hcmdpbiBpcyBvbmx5IGZvciBvdXRlckhlaWdodCwgb3V0ZXJXaWR0aFxuXHRcdGpRdWVyeS5mblsgZnVuY05hbWUgXSA9IGZ1bmN0aW9uKCBtYXJnaW4sIHZhbHVlICkge1xuXHRcdFx0dmFyIGNoYWluYWJsZSA9IGFyZ3VtZW50cy5sZW5ndGggJiYgKCBkZWZhdWx0RXh0cmEgfHwgdHlwZW9mIG1hcmdpbiAhPT0gXCJib29sZWFuXCIgKSxcblx0XHRcdFx0ZXh0cmEgPSBkZWZhdWx0RXh0cmEgfHwgKCBtYXJnaW4gPT09IHRydWUgfHwgdmFsdWUgPT09IHRydWUgPyBcIm1hcmdpblwiIDogXCJib3JkZXJcIiApO1xuXG5cdFx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgdHlwZSwgdmFsdWUgKSB7XG5cdFx0XHRcdHZhciBkb2M7XG5cblx0XHRcdFx0aWYgKCBpc1dpbmRvdyggZWxlbSApICkge1xuXG5cdFx0XHRcdFx0Ly8gJCggd2luZG93ICkub3V0ZXJXaWR0aC9IZWlnaHQgcmV0dXJuIHcvaCBpbmNsdWRpbmcgc2Nyb2xsYmFycyAoZ2gtMTcyOSlcblx0XHRcdFx0XHRyZXR1cm4gZnVuY05hbWUuaW5kZXhPZiggXCJvdXRlclwiICkgPT09IDAgP1xuXHRcdFx0XHRcdFx0ZWxlbVsgXCJpbm5lclwiICsgbmFtZSBdIDpcblx0XHRcdFx0XHRcdGVsZW0uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50WyBcImNsaWVudFwiICsgbmFtZSBdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gR2V0IGRvY3VtZW50IHdpZHRoIG9yIGhlaWdodFxuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdFx0ZG9jID0gZWxlbS5kb2N1bWVudEVsZW1lbnQ7XG5cblx0XHRcdFx0XHQvLyBFaXRoZXIgc2Nyb2xsW1dpZHRoL0hlaWdodF0gb3Igb2Zmc2V0W1dpZHRoL0hlaWdodF0gb3IgY2xpZW50W1dpZHRoL0hlaWdodF0sXG5cdFx0XHRcdFx0Ly8gd2hpY2hldmVyIGlzIGdyZWF0ZXN0XG5cdFx0XHRcdFx0cmV0dXJuIE1hdGgubWF4KFxuXHRcdFx0XHRcdFx0ZWxlbS5ib2R5WyBcInNjcm9sbFwiICsgbmFtZSBdLCBkb2NbIFwic2Nyb2xsXCIgKyBuYW1lIF0sXG5cdFx0XHRcdFx0XHRlbGVtLmJvZHlbIFwib2Zmc2V0XCIgKyBuYW1lIF0sIGRvY1sgXCJvZmZzZXRcIiArIG5hbWUgXSxcblx0XHRcdFx0XHRcdGRvY1sgXCJjbGllbnRcIiArIG5hbWUgXVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/XG5cblx0XHRcdFx0XHQvLyBHZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50LCByZXF1ZXN0aW5nIGJ1dCBub3QgZm9yY2luZyBwYXJzZUZsb2F0XG5cdFx0XHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgdHlwZSwgZXh0cmEgKSA6XG5cblx0XHRcdFx0XHQvLyBTZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50XG5cdFx0XHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCB0eXBlLCB2YWx1ZSwgZXh0cmEgKTtcblx0XHRcdH0sIHR5cGUsIGNoYWluYWJsZSA/IG1hcmdpbiA6IHVuZGVmaW5lZCwgY2hhaW5hYmxlICk7XG5cdFx0fTtcblx0fSApO1xufSApO1xuXG5qUXVlcnkuZWFjaCggW1xuXHRcImFqYXhTdGFydFwiLFxuXHRcImFqYXhTdG9wXCIsXG5cdFwiYWpheENvbXBsZXRlXCIsXG5cdFwiYWpheEVycm9yXCIsXG5cdFwiYWpheFN1Y2Nlc3NcIixcblx0XCJhamF4U2VuZFwiXG5dLCBmdW5jdGlvbiggX2ksIHR5cGUgKSB7XG5cdGpRdWVyeS5mblsgdHlwZSBdID0gZnVuY3Rpb24oIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlLCBmbiApO1xuXHR9O1xufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cblx0YmluZDogZnVuY3Rpb24oIHR5cGVzLCBkYXRhLCBmbiApIHtcblx0XHRyZXR1cm4gdGhpcy5vbiggdHlwZXMsIG51bGwsIGRhdGEsIGZuICk7XG5cdH0sXG5cdHVuYmluZDogZnVuY3Rpb24oIHR5cGVzLCBmbiApIHtcblx0XHRyZXR1cm4gdGhpcy5vZmYoIHR5cGVzLCBudWxsLCBmbiApO1xuXHR9LFxuXG5cdGRlbGVnYXRlOiBmdW5jdGlvbiggc2VsZWN0b3IsIHR5cGVzLCBkYXRhLCBmbiApIHtcblx0XHRyZXR1cm4gdGhpcy5vbiggdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiApO1xuXHR9LFxuXHR1bmRlbGVnYXRlOiBmdW5jdGlvbiggc2VsZWN0b3IsIHR5cGVzLCBmbiApIHtcblxuXHRcdC8vICggbmFtZXNwYWNlICkgb3IgKCBzZWxlY3RvciwgdHlwZXMgWywgZm5dIClcblx0XHRyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/XG5cdFx0XHR0aGlzLm9mZiggc2VsZWN0b3IsIFwiKipcIiApIDpcblx0XHRcdHRoaXMub2ZmKCB0eXBlcywgc2VsZWN0b3IgfHwgXCIqKlwiLCBmbiApO1xuXHR9LFxuXG5cdGhvdmVyOiBmdW5jdGlvbiggZm5PdmVyLCBmbk91dCApIHtcblx0XHRyZXR1cm4gdGhpc1xuXHRcdFx0Lm9uKCBcIm1vdXNlZW50ZXJcIiwgZm5PdmVyIClcblx0XHRcdC5vbiggXCJtb3VzZWxlYXZlXCIsIGZuT3V0IHx8IGZuT3ZlciApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5lYWNoKFxuXHQoIFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgXCIgK1xuXHRcIm1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIFwiICtcblx0XCJjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNvbnRleHRtZW51XCIgKS5zcGxpdCggXCIgXCIgKSxcblx0ZnVuY3Rpb24oIF9pLCBuYW1lICkge1xuXG5cdFx0Ly8gSGFuZGxlIGV2ZW50IGJpbmRpbmdcblx0XHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBkYXRhLCBmbiApIHtcblx0XHRcdHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMCA/XG5cdFx0XHRcdHRoaXMub24oIG5hbWUsIG51bGwsIGRhdGEsIGZuICkgOlxuXHRcdFx0XHR0aGlzLnRyaWdnZXIoIG5hbWUgKTtcblx0XHR9O1xuXHR9XG4pO1xuXG4vLyBCaW5kIGEgZnVuY3Rpb24gdG8gYSBjb250ZXh0LCBvcHRpb25hbGx5IHBhcnRpYWxseSBhcHBseWluZyBhbnlcbi8vIGFyZ3VtZW50cy5cbi8vIGpRdWVyeS5wcm94eSBpcyBkZXByZWNhdGVkIHRvIHByb21vdGUgc3RhbmRhcmRzIChzcGVjaWZpY2FsbHkgRnVuY3Rpb24jYmluZClcbi8vIEhvd2V2ZXIsIGl0IGlzIG5vdCBzbGF0ZWQgZm9yIHJlbW92YWwgYW55IHRpbWUgc29vblxualF1ZXJ5LnByb3h5ID0gZnVuY3Rpb24oIGZuLCBjb250ZXh0ICkge1xuXHR2YXIgdG1wLCBhcmdzLCBwcm94eTtcblxuXHRpZiAoIHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiICkge1xuXHRcdHRtcCA9IGZuWyBjb250ZXh0IF07XG5cdFx0Y29udGV4dCA9IGZuO1xuXHRcdGZuID0gdG1wO1xuXHR9XG5cblx0Ly8gUXVpY2sgY2hlY2sgdG8gZGV0ZXJtaW5lIGlmIHRhcmdldCBpcyBjYWxsYWJsZSwgaW4gdGhlIHNwZWNcblx0Ly8gdGhpcyB0aHJvd3MgYSBUeXBlRXJyb3IsIGJ1dCB3ZSB3aWxsIGp1c3QgcmV0dXJuIHVuZGVmaW5lZC5cblx0aWYgKCB0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG5cblx0Ly8gU2ltdWxhdGVkIGJpbmRcblx0YXJncyA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMiApO1xuXHRwcm94eSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBmbi5hcHBseSggY29udGV4dCB8fCB0aGlzLCBhcmdzLmNvbmNhdCggc2xpY2UuY2FsbCggYXJndW1lbnRzICkgKSApO1xuXHR9O1xuXG5cdC8vIFNldCB0aGUgZ3VpZCBvZiB1bmlxdWUgaGFuZGxlciB0byB0aGUgc2FtZSBvZiBvcmlnaW5hbCBoYW5kbGVyLCBzbyBpdCBjYW4gYmUgcmVtb3ZlZFxuXHRwcm94eS5ndWlkID0gZm4uZ3VpZCA9IGZuLmd1aWQgfHwgalF1ZXJ5Lmd1aWQrKztcblxuXHRyZXR1cm4gcHJveHk7XG59O1xuXG5qUXVlcnkuaG9sZFJlYWR5ID0gZnVuY3Rpb24oIGhvbGQgKSB7XG5cdGlmICggaG9sZCApIHtcblx0XHRqUXVlcnkucmVhZHlXYWl0Kys7XG5cdH0gZWxzZSB7XG5cdFx0alF1ZXJ5LnJlYWR5KCB0cnVlICk7XG5cdH1cbn07XG5cbi8vIFJlZ2lzdGVyIGFzIGEgbmFtZWQgQU1EIG1vZHVsZSwgc2luY2UgalF1ZXJ5IGNhbiBiZSBjb25jYXRlbmF0ZWQgd2l0aCBvdGhlclxuLy8gZmlsZXMgdGhhdCBtYXkgdXNlIGRlZmluZSwgYnV0IG5vdCB2aWEgYSBwcm9wZXIgY29uY2F0ZW5hdGlvbiBzY3JpcHQgdGhhdFxuLy8gdW5kZXJzdGFuZHMgYW5vbnltb3VzIEFNRCBtb2R1bGVzLiBBIG5hbWVkIEFNRCBpcyBzYWZlc3QgYW5kIG1vc3Qgcm9idXN0XG4vLyB3YXkgdG8gcmVnaXN0ZXIuIExvd2VyY2FzZSBqcXVlcnkgaXMgdXNlZCBiZWNhdXNlIEFNRCBtb2R1bGUgbmFtZXMgYXJlXG4vLyBkZXJpdmVkIGZyb20gZmlsZSBuYW1lcywgYW5kIGpRdWVyeSBpcyBub3JtYWxseSBkZWxpdmVyZWQgaW4gYSBsb3dlcmNhc2Vcbi8vIGZpbGUgbmFtZS4gRG8gdGhpcyBhZnRlciBjcmVhdGluZyB0aGUgZ2xvYmFsIHNvIHRoYXQgaWYgYW4gQU1EIG1vZHVsZSB3YW50c1xuLy8gdG8gY2FsbCBub0NvbmZsaWN0IHRvIGhpZGUgdGhpcyB2ZXJzaW9uIG9mIGpRdWVyeSwgaXQgd2lsbCB3b3JrLlxuXG4vLyBOb3RlIHRoYXQgZm9yIG1heGltdW0gcG9ydGFiaWxpdHksIGxpYnJhcmllcyB0aGF0IGFyZSBub3QgalF1ZXJ5IHNob3VsZFxuLy8gZGVjbGFyZSB0aGVtc2VsdmVzIGFzIGFub255bW91cyBtb2R1bGVzLCBhbmQgYXZvaWQgc2V0dGluZyBhIGdsb2JhbCBpZiBhblxuLy8gQU1EIGxvYWRlciBpcyBwcmVzZW50LiBqUXVlcnkgaXMgYSBzcGVjaWFsIGNhc2UuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcmJ1cmtlL3JlcXVpcmVqcy93aWtpL1VwZGF0aW5nLWV4aXN0aW5nLWxpYnJhcmllcyN3aWtpLWFub25cblxuaWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblx0ZGVmaW5lKCBcImpxdWVyeVwiLCBbXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGpRdWVyeTtcblx0fSApO1xufVxuXG52YXJcblxuXHQvLyBNYXAgb3ZlciBqUXVlcnkgaW4gY2FzZSBvZiBvdmVyd3JpdGVcblx0X2pRdWVyeSA9IHdpbmRvdy5qUXVlcnksXG5cblx0Ly8gTWFwIG92ZXIgdGhlICQgaW4gY2FzZSBvZiBvdmVyd3JpdGVcblx0XyQgPSB3aW5kb3cuJDtcblxualF1ZXJ5Lm5vQ29uZmxpY3QgPSBmdW5jdGlvbiggZGVlcCApIHtcblx0aWYgKCB3aW5kb3cuJCA9PT0galF1ZXJ5ICkge1xuXHRcdHdpbmRvdy4kID0gXyQ7XG5cdH1cblxuXHRpZiAoIGRlZXAgJiYgd2luZG93LmpRdWVyeSA9PT0galF1ZXJ5ICkge1xuXHRcdHdpbmRvdy5qUXVlcnkgPSBfalF1ZXJ5O1xuXHR9XG5cblx0cmV0dXJuIGpRdWVyeTtcbn07XG5cbi8vIEV4cG9zZSBqUXVlcnkgYW5kICQgaWRlbnRpZmllcnMsIGV2ZW4gaW4gQU1EXG4vLyAodHJhYy03MTAyI2NvbW1lbnQ6MTAsIGdoLTU1Nylcbi8vIGFuZCBDb21tb25KUyBmb3IgYnJvd3NlciBlbXVsYXRvcnMgKHRyYWMtMTM1NjYpXG5pZiAoIHR5cGVvZiBub0dsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiApIHtcblx0d2luZG93LmpRdWVyeSA9IHdpbmRvdy4kID0galF1ZXJ5O1xufVxuXG5yZXR1cm4galF1ZXJ5O1xuXG59XG5cbnZhciBqUXVlcnkgPSBqUXVlcnlGYWN0b3J5KCB3aW5kb3csIHRydWUgKTtcblxuZXhwb3J0IHsgalF1ZXJ5LCBqUXVlcnkgYXMgJCB9O1xuXG5leHBvcnQgZGVmYXVsdCBqUXVlcnk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQSxTQUFTLGNBQWVBLFNBQVEsVUFBVztBQUUzQyxNQUFLLE9BQU9BLFlBQVcsZUFBZSxDQUFDQSxRQUFPLFVBQVc7QUFDeEQsVUFBTSxJQUFJLE1BQU8sMENBQTJDO0FBQUEsRUFDN0Q7QUFFQSxNQUFJLE1BQU0sQ0FBQztBQUVYLE1BQUksV0FBVyxPQUFPO0FBRXRCLE1BQUksUUFBUSxJQUFJO0FBSWhCLE1BQUksT0FBTyxJQUFJLE9BQU8sU0FBVSxPQUFRO0FBQ3ZDLFdBQU8sSUFBSSxLQUFLLEtBQU0sS0FBTTtBQUFBLEVBQzdCLElBQUksU0FBVSxPQUFRO0FBQ3JCLFdBQU8sSUFBSSxPQUFPLE1BQU8sQ0FBQyxHQUFHLEtBQU07QUFBQSxFQUNwQztBQUVBLE1BQUksT0FBTyxJQUFJO0FBRWYsTUFBSSxVQUFVLElBQUk7QUFHbEIsTUFBSSxhQUFhLENBQUM7QUFFbEIsTUFBSSxXQUFXLFdBQVc7QUFFMUIsTUFBSSxTQUFTLFdBQVc7QUFFeEIsTUFBSSxhQUFhLE9BQU87QUFFeEIsTUFBSSx1QkFBdUIsV0FBVyxLQUFNLE1BQU87QUFHbkQsTUFBSSxVQUFVLENBQUM7QUFFZixXQUFTLE9BQVEsS0FBTTtBQUN0QixRQUFLLE9BQU8sTUFBTztBQUNsQixhQUFPLE1BQU07QUFBQSxJQUNkO0FBRUEsV0FBTyxPQUFPLFFBQVEsV0FDckIsV0FBWSxTQUFTLEtBQU0sR0FBSSxDQUFFLEtBQUssV0FDdEMsT0FBTztBQUFBLEVBQ1Q7QUFFQSxXQUFTLFNBQVUsS0FBTTtBQUN4QixXQUFPLE9BQU8sUUFBUSxRQUFRLElBQUk7QUFBQSxFQUNuQztBQUVBLFdBQVMsWUFBYSxLQUFNO0FBRTNCLFFBQUksU0FBUyxDQUFDLENBQUMsT0FBTyxJQUFJLFFBQ3pCLE9BQU8sT0FBUSxHQUFJO0FBRXBCLFFBQUssT0FBTyxRQUFRLGNBQWMsU0FBVSxHQUFJLEdBQUk7QUFDbkQsYUFBTztBQUFBLElBQ1I7QUFFQSxXQUFPLFNBQVMsV0FBVyxXQUFXLEtBQ3JDLE9BQU8sV0FBVyxZQUFZLFNBQVMsS0FBTyxTQUFTLEtBQU87QUFBQSxFQUNoRTtBQUVBLE1BQUksYUFBYUEsUUFBTztBQUV4QixNQUFJLDRCQUE0QjtBQUFBLElBQy9CLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxFQUNYO0FBRUEsV0FBUyxRQUFTLE1BQU0sTUFBTSxLQUFNO0FBQ25DLFVBQU0sT0FBTztBQUViLFFBQUlDLElBQ0gsU0FBUyxJQUFJLGNBQWUsUUFBUztBQUV0QyxXQUFPLE9BQU87QUFDZCxTQUFNQSxNQUFLLDJCQUE0QjtBQUN0QyxVQUFLLFFBQVEsS0FBTUEsRUFBRSxHQUFJO0FBQ3hCLGVBQVFBLEVBQUUsSUFBSSxLQUFNQSxFQUFFO0FBQUEsTUFDdkI7QUFBQSxJQUNEO0FBRUEsUUFBSyxJQUFJLEtBQUssWUFBYSxNQUFPLEVBQUUsWUFBYTtBQUNoRCxhQUFPLFdBQVcsWUFBYSxNQUFPO0FBQUEsSUFDdkM7QUFBQSxFQUNEO0FBRUEsTUFBSSxVQUFVLGdCQUViLGNBQWMsVUFHZEMsVUFBUyxTQUFVLFVBQVUsU0FBVTtBQUl0QyxXQUFPLElBQUlBLFFBQU8sR0FBRyxLQUFNLFVBQVUsT0FBUTtBQUFBLEVBQzlDO0FBRUQsRUFBQUEsUUFBTyxLQUFLQSxRQUFPLFlBQVk7QUFBQTtBQUFBLElBRzlCLFFBQVE7QUFBQSxJQUVSLGFBQWFBO0FBQUE7QUFBQSxJQUdiLFFBQVE7QUFBQSxJQUVSLFNBQVMsV0FBVztBQUNuQixhQUFPLE1BQU0sS0FBTSxJQUFLO0FBQUEsSUFDekI7QUFBQTtBQUFBO0FBQUEsSUFJQSxLQUFLLFNBQVUsS0FBTTtBQUdwQixVQUFLLE9BQU8sTUFBTztBQUNsQixlQUFPLE1BQU0sS0FBTSxJQUFLO0FBQUEsTUFDekI7QUFHQSxhQUFPLE1BQU0sSUFBSSxLQUFNLE1BQU0sS0FBSyxNQUFPLElBQUksS0FBTSxHQUFJO0FBQUEsSUFDeEQ7QUFBQTtBQUFBO0FBQUEsSUFJQSxXQUFXLFNBQVUsT0FBUTtBQUc1QixVQUFJLE1BQU1BLFFBQU8sTUFBTyxLQUFLLFlBQVksR0FBRyxLQUFNO0FBR2xELFVBQUksYUFBYTtBQUdqQixhQUFPO0FBQUEsSUFDUjtBQUFBO0FBQUEsSUFHQSxNQUFNLFNBQVUsVUFBVztBQUMxQixhQUFPQSxRQUFPLEtBQU0sTUFBTSxRQUFTO0FBQUEsSUFDcEM7QUFBQSxJQUVBLEtBQUssU0FBVSxVQUFXO0FBQ3pCLGFBQU8sS0FBSyxVQUFXQSxRQUFPLElBQUssTUFBTSxTQUFVLE1BQU1ELElBQUk7QUFDNUQsZUFBTyxTQUFTLEtBQU0sTUFBTUEsSUFBRyxJQUFLO0FBQUEsTUFDckMsQ0FBRSxDQUFFO0FBQUEsSUFDTDtBQUFBLElBRUEsT0FBTyxXQUFXO0FBQ2pCLGFBQU8sS0FBSyxVQUFXLE1BQU0sTUFBTyxNQUFNLFNBQVUsQ0FBRTtBQUFBLElBQ3ZEO0FBQUEsSUFFQSxPQUFPLFdBQVc7QUFDakIsYUFBTyxLQUFLLEdBQUksQ0FBRTtBQUFBLElBQ25CO0FBQUEsSUFFQSxNQUFNLFdBQVc7QUFDaEIsYUFBTyxLQUFLLEdBQUksRUFBRztBQUFBLElBQ3BCO0FBQUEsSUFFQSxNQUFNLFdBQVc7QUFDaEIsYUFBTyxLQUFLLFVBQVdDLFFBQU8sS0FBTSxNQUFNLFNBQVUsT0FBT0QsSUFBSTtBQUM5RCxnQkFBU0EsS0FBSSxLQUFNO0FBQUEsTUFDcEIsQ0FBRSxDQUFFO0FBQUEsSUFDTDtBQUFBLElBRUEsS0FBSyxXQUFXO0FBQ2YsYUFBTyxLQUFLLFVBQVdDLFFBQU8sS0FBTSxNQUFNLFNBQVUsT0FBT0QsSUFBSTtBQUM5RCxlQUFPQSxLQUFJO0FBQUEsTUFDWixDQUFFLENBQUU7QUFBQSxJQUNMO0FBQUEsSUFFQSxJQUFJLFNBQVVBLElBQUk7QUFDakIsVUFBSSxNQUFNLEtBQUssUUFDZCxJQUFJLENBQUNBLE1BQU1BLEtBQUksSUFBSSxNQUFNO0FBQzFCLGFBQU8sS0FBSyxVQUFXLEtBQUssS0FBSyxJQUFJLE1BQU0sQ0FBRSxLQUFNLENBQUUsQ0FBRSxJQUFJLENBQUMsQ0FBRTtBQUFBLElBQy9EO0FBQUEsSUFFQSxLQUFLLFdBQVc7QUFDZixhQUFPLEtBQUssY0FBYyxLQUFLLFlBQVk7QUFBQSxJQUM1QztBQUFBLEVBQ0Q7QUFFQSxFQUFBQyxRQUFPLFNBQVNBLFFBQU8sR0FBRyxTQUFTLFdBQVc7QUFDN0MsUUFBSSxTQUFTLE1BQU0sS0FBSyxNQUFNLGFBQWEsT0FDMUMsU0FBUyxVQUFXLENBQUUsS0FBSyxDQUFDLEdBQzVCRCxLQUFJLEdBQ0osU0FBUyxVQUFVLFFBQ25CLE9BQU87QUFHUixRQUFLLE9BQU8sV0FBVyxXQUFZO0FBQ2xDLGFBQU87QUFHUCxlQUFTLFVBQVdBLEVBQUUsS0FBSyxDQUFDO0FBQzVCLE1BQUFBO0FBQUEsSUFDRDtBQUdBLFFBQUssT0FBTyxXQUFXLFlBQVksT0FBTyxXQUFXLFlBQWE7QUFDakUsZUFBUyxDQUFDO0FBQUEsSUFDWDtBQUdBLFFBQUtBLE9BQU0sUUFBUztBQUNuQixlQUFTO0FBQ1QsTUFBQUE7QUFBQSxJQUNEO0FBRUEsV0FBUUEsS0FBSSxRQUFRQSxNQUFNO0FBR3pCLFdBQU8sVUFBVSxVQUFXQSxFQUFFLE1BQU8sTUFBTztBQUczQyxhQUFNLFFBQVEsU0FBVTtBQUN2QixpQkFBTyxRQUFTLElBQUs7QUFJckIsY0FBSyxTQUFTLGVBQWUsV0FBVyxNQUFPO0FBQzlDO0FBQUEsVUFDRDtBQUdBLGNBQUssUUFBUSxTQUFVQyxRQUFPLGNBQWUsSUFBSyxNQUMvQyxjQUFjLE1BQU0sUUFBUyxJQUFLLEtBQVE7QUFDNUMsa0JBQU0sT0FBUSxJQUFLO0FBR25CLGdCQUFLLGVBQWUsQ0FBQyxNQUFNLFFBQVMsR0FBSSxHQUFJO0FBQzNDLHNCQUFRLENBQUM7QUFBQSxZQUNWLFdBQVksQ0FBQyxlQUFlLENBQUNBLFFBQU8sY0FBZSxHQUFJLEdBQUk7QUFDMUQsc0JBQVEsQ0FBQztBQUFBLFlBQ1YsT0FBTztBQUNOLHNCQUFRO0FBQUEsWUFDVDtBQUNBLDBCQUFjO0FBR2QsbUJBQVEsSUFBSyxJQUFJQSxRQUFPLE9BQVEsTUFBTSxPQUFPLElBQUs7QUFBQSxVQUduRCxXQUFZLFNBQVMsUUFBWTtBQUNoQyxtQkFBUSxJQUFLLElBQUk7QUFBQSxVQUNsQjtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUdBLFdBQU87QUFBQSxFQUNSO0FBRUEsRUFBQUEsUUFBTyxPQUFRO0FBQUE7QUFBQSxJQUdkLFNBQVMsWUFBYSxVQUFVLEtBQUssT0FBTyxHQUFJLFFBQVMsT0FBTyxFQUFHO0FBQUE7QUFBQSxJQUduRSxTQUFTO0FBQUEsSUFFVCxPQUFPLFNBQVUsS0FBTTtBQUN0QixZQUFNLElBQUksTUFBTyxHQUFJO0FBQUEsSUFDdEI7QUFBQSxJQUVBLE1BQU0sV0FBVztBQUFBLElBQUM7QUFBQSxJQUVsQixlQUFlLFNBQVUsS0FBTTtBQUM5QixVQUFJLE9BQU87QUFJWCxVQUFLLENBQUMsT0FBTyxTQUFTLEtBQU0sR0FBSSxNQUFNLG1CQUFvQjtBQUN6RCxlQUFPO0FBQUEsTUFDUjtBQUVBLGNBQVEsU0FBVSxHQUFJO0FBR3RCLFVBQUssQ0FBQyxPQUFRO0FBQ2IsZUFBTztBQUFBLE1BQ1I7QUFHQSxhQUFPLE9BQU8sS0FBTSxPQUFPLGFBQWMsS0FBSyxNQUFNO0FBQ3BELGFBQU8sT0FBTyxTQUFTLGNBQWMsV0FBVyxLQUFNLElBQUssTUFBTTtBQUFBLElBQ2xFO0FBQUEsSUFFQSxlQUFlLFNBQVUsS0FBTTtBQUM5QixVQUFJO0FBRUosV0FBTSxRQUFRLEtBQU07QUFDbkIsZUFBTztBQUFBLE1BQ1I7QUFDQSxhQUFPO0FBQUEsSUFDUjtBQUFBO0FBQUE7QUFBQSxJQUlBLFlBQVksU0FBVSxNQUFNLFNBQVMsS0FBTTtBQUMxQyxjQUFTLE1BQU0sRUFBRSxPQUFPLFdBQVcsUUFBUSxNQUFNLEdBQUcsR0FBSTtBQUFBLElBQ3pEO0FBQUEsSUFFQSxNQUFNLFNBQVUsS0FBSyxVQUFXO0FBQy9CLFVBQUksUUFBUUQsS0FBSTtBQUVoQixVQUFLLFlBQWEsR0FBSSxHQUFJO0FBQ3pCLGlCQUFTLElBQUk7QUFDYixlQUFRQSxLQUFJLFFBQVFBLE1BQU07QUFDekIsY0FBSyxTQUFTLEtBQU0sSUFBS0EsRUFBRSxHQUFHQSxJQUFHLElBQUtBLEVBQUUsQ0FBRSxNQUFNLE9BQVE7QUFDdkQ7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLE1BQ0QsT0FBTztBQUNOLGFBQU1BLE1BQUssS0FBTTtBQUNoQixjQUFLLFNBQVMsS0FBTSxJQUFLQSxFQUFFLEdBQUdBLElBQUcsSUFBS0EsRUFBRSxDQUFFLE1BQU0sT0FBUTtBQUN2RDtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUVBLGFBQU87QUFBQSxJQUNSO0FBQUE7QUFBQSxJQUlBLE1BQU0sU0FBVSxNQUFPO0FBQ3RCLFVBQUksTUFDSCxNQUFNLElBQ05BLEtBQUksR0FDSixXQUFXLEtBQUs7QUFFakIsVUFBSyxDQUFDLFVBQVc7QUFHaEIsZUFBVSxPQUFPLEtBQU1BLElBQUksR0FBTTtBQUdoQyxpQkFBT0MsUUFBTyxLQUFNLElBQUs7QUFBQSxRQUMxQjtBQUFBLE1BQ0Q7QUFDQSxVQUFLLGFBQWEsS0FBSyxhQUFhLElBQUs7QUFDeEMsZUFBTyxLQUFLO0FBQUEsTUFDYjtBQUNBLFVBQUssYUFBYSxHQUFJO0FBQ3JCLGVBQU8sS0FBSyxnQkFBZ0I7QUFBQSxNQUM3QjtBQUNBLFVBQUssYUFBYSxLQUFLLGFBQWEsR0FBSTtBQUN2QyxlQUFPLEtBQUs7QUFBQSxNQUNiO0FBSUEsYUFBTztBQUFBLElBQ1I7QUFBQTtBQUFBLElBSUEsV0FBVyxTQUFVQyxNQUFLLFNBQVU7QUFDbkMsVUFBSSxNQUFNLFdBQVcsQ0FBQztBQUV0QixVQUFLQSxRQUFPLE1BQU87QUFDbEIsWUFBSyxZQUFhLE9BQVFBLElBQUksQ0FBRSxHQUFJO0FBQ25DLFVBQUFELFFBQU87QUFBQSxZQUFPO0FBQUEsWUFDYixPQUFPQyxTQUFRLFdBQ2QsQ0FBRUEsSUFBSSxJQUFJQTtBQUFBLFVBQ1o7QUFBQSxRQUNELE9BQU87QUFDTixlQUFLLEtBQU0sS0FBS0EsSUFBSTtBQUFBLFFBQ3JCO0FBQUEsTUFDRDtBQUVBLGFBQU87QUFBQSxJQUNSO0FBQUEsSUFFQSxTQUFTLFNBQVUsTUFBTUEsTUFBS0YsSUFBSTtBQUNqQyxhQUFPRSxRQUFPLE9BQU8sS0FBSyxRQUFRLEtBQU1BLE1BQUssTUFBTUYsRUFBRTtBQUFBLElBQ3REO0FBQUEsSUFFQSxVQUFVLFNBQVUsTUFBTztBQUMxQixVQUFJLFlBQVksUUFBUSxLQUFLLGNBQzVCLFVBQVUsU0FBVSxLQUFLLGlCQUFpQixNQUFPO0FBSWxELGFBQU8sQ0FBQyxZQUFZLEtBQU0sYUFBYSxXQUFXLFFBQVEsWUFBWSxNQUFPO0FBQUEsSUFDOUU7QUFBQTtBQUFBLElBR0EsVUFBVSxTQUFVLEdBQUcsR0FBSTtBQUMxQixVQUFJLE1BQU0sS0FBSyxFQUFFO0FBRWpCLGFBQU8sTUFBTSxPQUFPLENBQUMsRUFBRyxPQUFPLElBQUksYUFBYTtBQUFBO0FBQUEsT0FJL0MsRUFBRSxXQUNELEVBQUUsU0FBVSxHQUFJLElBQ2hCLEVBQUUsMkJBQTJCLEVBQUUsd0JBQXlCLEdBQUksSUFBSTtBQUFBLElBRW5FO0FBQUEsSUFFQSxPQUFPLFNBQVUsT0FBTyxRQUFTO0FBQ2hDLFVBQUksTUFBTSxDQUFDLE9BQU8sUUFDakIsSUFBSSxHQUNKQSxLQUFJLE1BQU07QUFFWCxhQUFRLElBQUksS0FBSyxLQUFNO0FBQ3RCLGNBQU9BLElBQUksSUFBSSxPQUFRLENBQUU7QUFBQSxNQUMxQjtBQUVBLFlBQU0sU0FBU0E7QUFFZixhQUFPO0FBQUEsSUFDUjtBQUFBLElBRUEsTUFBTSxTQUFVLE9BQU8sVUFBVSxRQUFTO0FBQ3pDLFVBQUksaUJBQ0hHLFdBQVUsQ0FBQyxHQUNYSCxLQUFJLEdBQ0osU0FBUyxNQUFNLFFBQ2YsaUJBQWlCLENBQUM7QUFJbkIsYUFBUUEsS0FBSSxRQUFRQSxNQUFNO0FBQ3pCLDBCQUFrQixDQUFDLFNBQVUsTUFBT0EsRUFBRSxHQUFHQSxFQUFFO0FBQzNDLFlBQUssb0JBQW9CLGdCQUFpQjtBQUN6QyxVQUFBRyxTQUFRLEtBQU0sTUFBT0gsRUFBRSxDQUFFO0FBQUEsUUFDMUI7QUFBQSxNQUNEO0FBRUEsYUFBT0c7QUFBQSxJQUNSO0FBQUE7QUFBQSxJQUdBLEtBQUssU0FBVSxPQUFPLFVBQVUsS0FBTTtBQUNyQyxVQUFJLFFBQVEsT0FDWEgsS0FBSSxHQUNKLE1BQU0sQ0FBQztBQUdSLFVBQUssWUFBYSxLQUFNLEdBQUk7QUFDM0IsaUJBQVMsTUFBTTtBQUNmLGVBQVFBLEtBQUksUUFBUUEsTUFBTTtBQUN6QixrQkFBUSxTQUFVLE1BQU9BLEVBQUUsR0FBR0EsSUFBRyxHQUFJO0FBRXJDLGNBQUssU0FBUyxNQUFPO0FBQ3BCLGdCQUFJLEtBQU0sS0FBTTtBQUFBLFVBQ2pCO0FBQUEsUUFDRDtBQUFBLE1BR0QsT0FBTztBQUNOLGFBQU1BLE1BQUssT0FBUTtBQUNsQixrQkFBUSxTQUFVLE1BQU9BLEVBQUUsR0FBR0EsSUFBRyxHQUFJO0FBRXJDLGNBQUssU0FBUyxNQUFPO0FBQ3BCLGdCQUFJLEtBQU0sS0FBTTtBQUFBLFVBQ2pCO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFHQSxhQUFPLEtBQU0sR0FBSTtBQUFBLElBQ2xCO0FBQUE7QUFBQSxJQUdBLE1BQU07QUFBQTtBQUFBO0FBQUEsSUFJTjtBQUFBLEVBQ0QsQ0FBRTtBQUVGLE1BQUssT0FBTyxXQUFXLFlBQWE7QUFDbkMsSUFBQUMsUUFBTyxHQUFJLE9BQU8sUUFBUyxJQUFJLElBQUssT0FBTyxRQUFTO0FBQUEsRUFDckQ7QUFHQSxFQUFBQSxRQUFPO0FBQUEsSUFBTSx1RUFBdUUsTUFBTyxHQUFJO0FBQUEsSUFDOUYsU0FBVSxJQUFJLE1BQU87QUFDcEIsaUJBQVksYUFBYSxPQUFPLEdBQUksSUFBSSxLQUFLLFlBQVk7QUFBQSxJQUMxRDtBQUFBLEVBQUU7QUFFSCxXQUFTLFNBQVUsTUFBTSxNQUFPO0FBQy9CLFdBQU8sS0FBSyxZQUFZLEtBQUssU0FBUyxZQUFZLE1BQU0sS0FBSyxZQUFZO0FBQUEsRUFDMUU7QUFFQSxNQUFJLE1BQU0sSUFBSTtBQUdkLE1BQUksYUFBYTtBQUVqQixNQUFJLE9BQU8sV0FBVztBQVd0QixNQUFJO0FBQ0gsZUFBVyxjQUFlLGlCQUFrQjtBQUM1QyxZQUFRLFNBQVM7QUFBQSxFQUNsQixTQUFVLEdBQUk7QUFDYixZQUFRLFNBQVM7QUFBQSxFQUNsQjtBQUlBLE1BQUksWUFBWSxDQUFDO0FBRWpCLE1BQUssTUFBTztBQUNYLGNBQVU7QUFBQTtBQUFBO0FBQUEsTUFJVDtBQUFBLE1BQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTUEsUUFBUSxhQUFhLFVBQVUsYUFBYSxPQUMzQyxhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Q7QUFFQSxNQUFLLENBQUMsUUFBUSxRQUFTO0FBUXRCLGNBQVUsS0FBTSxNQUFPO0FBQUEsRUFDeEI7QUFFQSxjQUFZLFVBQVUsVUFBVSxJQUFJLE9BQVEsVUFBVSxLQUFNLEdBQUksQ0FBRTtBQUVsRSxNQUFJLFdBQVcsSUFBSTtBQUFBLElBQ2xCLE1BQU0sYUFBYSxnQ0FBZ0MsYUFBYTtBQUFBLElBQ2hFO0FBQUEsRUFDRDtBQUdBLE1BQUksYUFBYSw0QkFBNEIsYUFDNUM7QUFFRCxNQUFJLHFCQUFxQixJQUFJLE9BQVEsTUFBTSxhQUFhLGFBQ3ZELGFBQWEsTUFBTSxhQUFhLEdBQUk7QUFFckMsTUFBSSxXQUFXLElBQUksT0FBUSxhQUFhLElBQUs7QUFFN0MsTUFBSSxXQUFXO0FBRWYsTUFBSSxvQkFBb0IsV0FBVztBQUluQyxNQUFJLFVBQVUsa0JBQWtCLFdBQVcsa0JBQWtCO0FBUTdELFdBQVMsY0FBYztBQUN0QixRQUFJLE9BQU8sQ0FBQztBQUVaLGFBQVMsTUFBTyxLQUFLLE9BQVE7QUFJNUIsVUFBSyxLQUFLLEtBQU0sTUFBTSxHQUFJLElBQUlBLFFBQU8sS0FBSyxhQUFjO0FBR3ZELGVBQU8sTUFBTyxLQUFLLE1BQU0sQ0FBRTtBQUFBLE1BQzVCO0FBQ0EsYUFBUyxNQUFPLE1BQU0sR0FBSSxJQUFJO0FBQUEsSUFDL0I7QUFDQSxXQUFPO0FBQUEsRUFDUjtBQU9BLFdBQVMsWUFBYSxTQUFVO0FBQy9CLFdBQU8sV0FBVyxPQUFPLFFBQVEseUJBQXlCLGVBQWU7QUFBQSxFQUMxRTtBQUdBLE1BQUksYUFBYSxRQUFRLGFBQWEsT0FBTyxhQUFhLFNBQVM7QUFBQSxFQUdsRSxrQkFBa0I7QUFBQSxFQUdsQiwwREFBNkQsYUFBYSxTQUMxRSxhQUFhO0FBRWQsTUFBSSxVQUFVLE9BQU8sYUFBYSx1RkFPSixhQUFhO0FBTTNDLE1BQUksa0JBQWtCO0FBQUEsSUFDckIsSUFBSSxJQUFJLE9BQVEsUUFBUSxhQUFhLEdBQUk7QUFBQSxJQUN6QyxPQUFPLElBQUksT0FBUSxVQUFVLGFBQWEsR0FBSTtBQUFBLElBQzlDLEtBQUssSUFBSSxPQUFRLE9BQU8sYUFBYSxPQUFRO0FBQUEsSUFDN0MsTUFBTSxJQUFJLE9BQVEsTUFBTSxVQUFXO0FBQUEsSUFDbkMsUUFBUSxJQUFJLE9BQVEsTUFBTSxPQUFRO0FBQUEsSUFDbEMsT0FBTyxJQUFJO0FBQUEsTUFDViwyREFDQSxhQUFhLGlDQUFpQyxhQUFhLGdCQUMzRCxhQUFhLGVBQWUsYUFBYTtBQUFBLE1BQVU7QUFBQSxJQUFJO0FBQUEsRUFDekQ7QUFFQSxNQUFJLFVBQVUsSUFBSSxPQUFRLE9BQVE7QUFLbEMsTUFBSSxZQUFZLElBQUksT0FBUSx5QkFBeUIsYUFDcEQsd0JBQXdCLEdBQUksR0FDNUIsWUFBWSxTQUFVLFFBQVEsUUFBUztBQUN0QyxRQUFJLE9BQU8sT0FBTyxPQUFPLE1BQU8sQ0FBRSxJQUFJO0FBRXRDLFFBQUssUUFBUztBQUdiLGFBQU87QUFBQSxJQUNSO0FBTUEsV0FBTyxPQUFPLElBQ2IsT0FBTyxhQUFjLE9BQU8sS0FBUSxJQUNwQyxPQUFPLGFBQWMsUUFBUSxLQUFLLE9BQVEsT0FBTyxPQUFRLEtBQU87QUFBQSxFQUNsRTtBQUVELFdBQVMsaUJBQWtCLEtBQU07QUFDaEMsV0FBTyxJQUFJLFFBQVMsV0FBVyxTQUFVO0FBQUEsRUFDMUM7QUFFQSxXQUFTLGNBQWUsS0FBTTtBQUM3QixJQUFBQSxRQUFPLE1BQU8sNENBQTRDLEdBQUk7QUFBQSxFQUMvRDtBQUVBLE1BQUksU0FBUyxJQUFJLE9BQVEsTUFBTSxhQUFhLE9BQU8sYUFBYSxHQUFJO0FBRXBFLE1BQUksYUFBYSxZQUFZO0FBRTdCLFdBQVMsU0FBVSxVQUFVLFdBQVk7QUFDeEMsUUFBSSxTQUFTLE9BQU8sUUFBUSxNQUMzQixPQUFPLFFBQVEsWUFDZixTQUFTLFdBQVksV0FBVyxHQUFJO0FBRXJDLFFBQUssUUFBUztBQUNiLGFBQU8sWUFBWSxJQUFJLE9BQU8sTUFBTyxDQUFFO0FBQUEsSUFDeEM7QUFFQSxZQUFRO0FBQ1IsYUFBUyxDQUFDO0FBQ1YsaUJBQWFBLFFBQU8sS0FBSztBQUV6QixXQUFRLE9BQVE7QUFHZixVQUFLLENBQUMsWUFBYSxRQUFRLE9BQU8sS0FBTSxLQUFNLElBQU07QUFDbkQsWUFBSyxPQUFRO0FBR1osa0JBQVEsTUFBTSxNQUFPLE1BQU8sQ0FBRSxFQUFFLE1BQU8sS0FBSztBQUFBLFFBQzdDO0FBQ0EsZUFBTyxLQUFRLFNBQVMsQ0FBQyxDQUFJO0FBQUEsTUFDOUI7QUFFQSxnQkFBVTtBQUdWLFVBQU8sUUFBUSxtQkFBbUIsS0FBTSxLQUFNLEdBQU07QUFDbkQsa0JBQVUsTUFBTSxNQUFNO0FBQ3RCLGVBQU8sS0FBTTtBQUFBLFVBQ1osT0FBTztBQUFBO0FBQUEsVUFHUCxNQUFNLE1BQU8sQ0FBRSxFQUFFLFFBQVMsVUFBVSxHQUFJO0FBQUEsUUFDekMsQ0FBRTtBQUNGLGdCQUFRLE1BQU0sTUFBTyxRQUFRLE1BQU87QUFBQSxNQUNyQztBQUdBLFdBQU0sUUFBUSxpQkFBa0I7QUFDL0IsYUFBTyxRQUFRQSxRQUFPLEtBQUssTUFBTyxJQUFLLEVBQUUsS0FBTSxLQUFNLE9BQVMsQ0FBQyxXQUFZLElBQUssTUFDN0UsUUFBUSxXQUFZLElBQUssRUFBRyxLQUFNLEtBQVE7QUFDNUMsb0JBQVUsTUFBTSxNQUFNO0FBQ3RCLGlCQUFPLEtBQU07QUFBQSxZQUNaLE9BQU87QUFBQSxZQUNQO0FBQUEsWUFDQSxTQUFTO0FBQUEsVUFDVixDQUFFO0FBQ0Ysa0JBQVEsTUFBTSxNQUFPLFFBQVEsTUFBTztBQUFBLFFBQ3JDO0FBQUEsTUFDRDtBQUVBLFVBQUssQ0FBQyxTQUFVO0FBQ2Y7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUtBLFFBQUssV0FBWTtBQUNoQixhQUFPLE1BQU07QUFBQSxJQUNkO0FBRUEsV0FBTyxRQUNOLGNBQWUsUUFBUztBQUFBO0FBQUEsTUFHeEIsV0FBWSxVQUFVLE1BQU8sRUFBRSxNQUFPLENBQUU7QUFBQTtBQUFBLEVBQzFDO0FBRUEsTUFBSSxZQUFZO0FBQUEsSUFDZixNQUFNLFNBQVUsT0FBUTtBQUN2QixZQUFPLENBQUUsSUFBSSxpQkFBa0IsTUFBTyxDQUFFLENBQUU7QUFHMUMsWUFBTyxDQUFFLElBQUksaUJBQWtCLE1BQU8sQ0FBRSxLQUFLLE1BQU8sQ0FBRSxLQUFLLE1BQU8sQ0FBRSxLQUFLLEVBQUc7QUFFNUUsVUFBSyxNQUFPLENBQUUsTUFBTSxNQUFPO0FBQzFCLGNBQU8sQ0FBRSxJQUFJLE1BQU0sTUFBTyxDQUFFLElBQUk7QUFBQSxNQUNqQztBQUVBLGFBQU8sTUFBTSxNQUFPLEdBQUcsQ0FBRTtBQUFBLElBQzFCO0FBQUEsSUFFQSxPQUFPLFNBQVUsT0FBUTtBQVl4QixZQUFPLENBQUUsSUFBSSxNQUFPLENBQUUsRUFBRSxZQUFZO0FBRXBDLFVBQUssTUFBTyxDQUFFLEVBQUUsTUFBTyxHQUFHLENBQUUsTUFBTSxPQUFRO0FBR3pDLFlBQUssQ0FBQyxNQUFPLENBQUUsR0FBSTtBQUNsQix3QkFBZSxNQUFPLENBQUUsQ0FBRTtBQUFBLFFBQzNCO0FBSUEsY0FBTyxDQUFFLElBQUksRUFBRyxNQUFPLENBQUUsSUFDeEIsTUFBTyxDQUFFLEtBQU0sTUFBTyxDQUFFLEtBQUssS0FDN0IsS0FBTSxNQUFPLENBQUUsTUFBTSxVQUFVLE1BQU8sQ0FBRSxNQUFNO0FBRS9DLGNBQU8sQ0FBRSxJQUFJLEVBQUssTUFBTyxDQUFFLElBQUksTUFBTyxDQUFFLEtBQU8sTUFBTyxDQUFFLE1BQU07QUFBQSxNQUcvRCxXQUFZLE1BQU8sQ0FBRSxHQUFJO0FBQ3hCLHNCQUFlLE1BQU8sQ0FBRSxDQUFFO0FBQUEsTUFDM0I7QUFFQSxhQUFPO0FBQUEsSUFDUjtBQUFBLElBRUEsUUFBUSxTQUFVLE9BQVE7QUFDekIsVUFBSSxRQUNILFdBQVcsQ0FBQyxNQUFPLENBQUUsS0FBSyxNQUFPLENBQUU7QUFFcEMsVUFBSyxnQkFBZ0IsTUFBTSxLQUFNLE1BQU8sQ0FBRSxDQUFFLEdBQUk7QUFDL0MsZUFBTztBQUFBLE1BQ1I7QUFHQSxVQUFLLE1BQU8sQ0FBRSxHQUFJO0FBQ2pCLGNBQU8sQ0FBRSxJQUFJLE1BQU8sQ0FBRSxLQUFLLE1BQU8sQ0FBRSxLQUFLO0FBQUEsTUFHMUMsV0FBWSxZQUFZLFFBQVEsS0FBTSxRQUFTO0FBQUEsT0FHNUMsU0FBUyxTQUFVLFVBQVUsSUFBSztBQUFBLE9BR2xDLFNBQVMsU0FBUyxRQUFTLEtBQUssU0FBUyxTQUFTLE1BQU8sSUFDMUQsU0FBUyxTQUFXO0FBR3JCLGNBQU8sQ0FBRSxJQUFJLE1BQU8sQ0FBRSxFQUFFLE1BQU8sR0FBRyxNQUFPO0FBQ3pDLGNBQU8sQ0FBRSxJQUFJLFNBQVMsTUFBTyxHQUFHLE1BQU87QUFBQSxNQUN4QztBQUdBLGFBQU8sTUFBTSxNQUFPLEdBQUcsQ0FBRTtBQUFBLElBQzFCO0FBQUEsRUFDRDtBQUVBLFdBQVMsV0FBWSxRQUFTO0FBQzdCLFFBQUlELEtBQUksR0FDUCxNQUFNLE9BQU8sUUFDYixXQUFXO0FBQ1osV0FBUUEsS0FBSSxLQUFLQSxNQUFNO0FBQ3RCLGtCQUFZLE9BQVFBLEVBQUUsRUFBRTtBQUFBLElBQ3pCO0FBQ0EsV0FBTztBQUFBLEVBQ1I7QUFJQSxXQUFTLE9BQVEsT0FBTyxJQUFJLEtBQUssT0FBTyxXQUFXLFVBQVUsS0FBTTtBQUNsRSxRQUFJQSxLQUFJLEdBQ1AsTUFBTSxNQUFNLFFBQ1osT0FBTyxPQUFPO0FBR2YsUUFBSyxPQUFRLEdBQUksTUFBTSxVQUFXO0FBQ2pDLGtCQUFZO0FBQ1osV0FBTUEsTUFBSyxLQUFNO0FBQ2hCLGVBQVEsT0FBTyxJQUFJQSxJQUFHLElBQUtBLEVBQUUsR0FBRyxNQUFNLFVBQVUsR0FBSTtBQUFBLE1BQ3JEO0FBQUEsSUFHRCxXQUFZLFVBQVUsUUFBWTtBQUNqQyxrQkFBWTtBQUVaLFVBQUssT0FBTyxVQUFVLFlBQWE7QUFDbEMsY0FBTTtBQUFBLE1BQ1A7QUFFQSxVQUFLLE1BQU87QUFHWCxZQUFLLEtBQU07QUFDVixhQUFHLEtBQU0sT0FBTyxLQUFNO0FBQ3RCLGVBQUs7QUFBQSxRQUdOLE9BQU87QUFDTixpQkFBTztBQUNQLGVBQUssU0FBVSxNQUFNLE1BQU1JLFFBQVE7QUFDbEMsbUJBQU8sS0FBSyxLQUFNSCxRQUFRLElBQUssR0FBR0csTUFBTTtBQUFBLFVBQ3pDO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFFQSxVQUFLLElBQUs7QUFDVCxlQUFRSixLQUFJLEtBQUtBLE1BQU07QUFDdEI7QUFBQSxZQUNDLE1BQU9BLEVBQUU7QUFBQSxZQUFHO0FBQUEsWUFBSyxNQUNoQixRQUNBLE1BQU0sS0FBTSxNQUFPQSxFQUFFLEdBQUdBLElBQUcsR0FBSSxNQUFPQSxFQUFFLEdBQUcsR0FBSSxDQUFFO0FBQUEsVUFDbkQ7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFFQSxRQUFLLFdBQVk7QUFDaEIsYUFBTztBQUFBLElBQ1I7QUFHQSxRQUFLLE1BQU87QUFDWCxhQUFPLEdBQUcsS0FBTSxLQUFNO0FBQUEsSUFDdkI7QUFFQSxXQUFPLE1BQU0sR0FBSSxNQUFPLENBQUUsR0FBRyxHQUFJLElBQUk7QUFBQSxFQUN0QztBQUtBLE1BQUksZ0JBQWdCO0FBRXBCLEVBQUFDLFFBQU8sR0FBRyxPQUFRO0FBQUEsSUFDakIsTUFBTSxTQUFVLE1BQU0sT0FBUTtBQUM3QixhQUFPLE9BQVEsTUFBTUEsUUFBTyxNQUFNLE1BQU0sT0FBTyxVQUFVLFNBQVMsQ0FBRTtBQUFBLElBQ3JFO0FBQUEsSUFFQSxZQUFZLFNBQVUsTUFBTztBQUM1QixhQUFPLEtBQUssS0FBTSxXQUFXO0FBQzVCLFFBQUFBLFFBQU8sV0FBWSxNQUFNLElBQUs7QUFBQSxNQUMvQixDQUFFO0FBQUEsSUFDSDtBQUFBLEVBQ0QsQ0FBRTtBQUVGLEVBQUFBLFFBQU8sT0FBUTtBQUFBLElBQ2QsTUFBTSxTQUFVLE1BQU0sTUFBTSxPQUFRO0FBQ25DLFVBQUksS0FBSyxPQUNSLFFBQVEsS0FBSztBQUdkLFVBQUssVUFBVSxLQUFLLFVBQVUsS0FBSyxVQUFVLEdBQUk7QUFDaEQ7QUFBQSxNQUNEO0FBR0EsVUFBSyxPQUFPLEtBQUssaUJBQWlCLGFBQWM7QUFDL0MsZUFBT0EsUUFBTyxLQUFNLE1BQU0sTUFBTSxLQUFNO0FBQUEsTUFDdkM7QUFJQSxVQUFLLFVBQVUsS0FBSyxDQUFDQSxRQUFPLFNBQVUsSUFBSyxHQUFJO0FBQzlDLGdCQUFRQSxRQUFPLFVBQVcsS0FBSyxZQUFZLENBQUU7QUFBQSxNQUM5QztBQUVBLFVBQUssVUFBVSxRQUFZO0FBQzFCLFlBQUssVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTVosVUFBVSxTQUFTLEtBQUssWUFBWSxFQUFFLFFBQVMsT0FBUSxNQUFNLEdBQU07QUFFckUsVUFBQUEsUUFBTyxXQUFZLE1BQU0sSUFBSztBQUM5QjtBQUFBLFFBQ0Q7QUFFQSxZQUFLLFNBQVMsU0FBUyxVQUNwQixNQUFNLE1BQU0sSUFBSyxNQUFNLE9BQU8sSUFBSyxPQUFRLFFBQVk7QUFDekQsaUJBQU87QUFBQSxRQUNSO0FBRUEsYUFBSyxhQUFjLE1BQU0sS0FBTTtBQUMvQixlQUFPO0FBQUEsTUFDUjtBQUVBLFVBQUssU0FBUyxTQUFTLFVBQVcsTUFBTSxNQUFNLElBQUssTUFBTSxJQUFLLE9BQVEsTUFBTztBQUM1RSxlQUFPO0FBQUEsTUFDUjtBQUVBLFlBQU0sS0FBSyxhQUFjLElBQUs7QUFHOUIsYUFBTyxPQUFPLE9BQU8sU0FBWTtBQUFBLElBQ2xDO0FBQUEsSUFFQSxXQUFXLENBQUM7QUFBQSxJQUVaLFlBQVksU0FBVSxNQUFNLE9BQVE7QUFDbkMsVUFBSSxNQUNIRCxLQUFJLEdBSUosWUFBWSxTQUFTLE1BQU0sTUFBTyxhQUFjO0FBRWpELFVBQUssYUFBYSxLQUFLLGFBQWEsR0FBSTtBQUN2QyxlQUFVLE9BQU8sVUFBV0EsSUFBSSxHQUFNO0FBQ3JDLGVBQUssZ0JBQWlCLElBQUs7QUFBQSxRQUM1QjtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRCxDQUFFO0FBSUYsTUFBSyxNQUFPO0FBQ1gsSUFBQUMsUUFBTyxVQUFVLE9BQU87QUFBQSxNQUN2QixLQUFLLFNBQVUsTUFBTSxPQUFRO0FBQzVCLFlBQUssVUFBVSxXQUFXLFNBQVUsTUFBTSxPQUFRLEdBQUk7QUFDckQsY0FBSSxNQUFNLEtBQUs7QUFDZixlQUFLLGFBQWMsUUFBUSxLQUFNO0FBQ2pDLGNBQUssS0FBTTtBQUNWLGlCQUFLLFFBQVE7QUFBQSxVQUNkO0FBQ0EsaUJBQU87QUFBQSxRQUNSO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBSUEsTUFBSSxhQUFhO0FBRWpCLFdBQVMsV0FBWSxJQUFJLGFBQWM7QUFDdEMsUUFBSyxhQUFjO0FBR2xCLFVBQUssT0FBTyxNQUFPO0FBQ2xCLGVBQU87QUFBQSxNQUNSO0FBR0EsYUFBTyxHQUFHLE1BQU8sR0FBRyxFQUFHLElBQUksT0FBTyxHQUFHLFdBQVksR0FBRyxTQUFTLENBQUUsRUFBRSxTQUFVLEVBQUcsSUFBSTtBQUFBLElBQ25GO0FBR0EsV0FBTyxPQUFPO0FBQUEsRUFDZjtBQUVBLEVBQUFBLFFBQU8saUJBQWlCLFNBQVUsS0FBTTtBQUN2QyxZQUFTLE1BQU0sSUFBSyxRQUFTLFlBQVksVUFBVztBQUFBLEVBQ3JEO0FBRUEsTUFBSSxPQUFPLElBQUk7QUFFZixNQUFJLFNBQVMsSUFBSTtBQUVqQixNQUFJO0FBR0osV0FBUyxVQUFXLEdBQUcsR0FBSTtBQUcxQixRQUFLLE1BQU0sR0FBSTtBQUNkLHFCQUFlO0FBQ2YsYUFBTztBQUFBLElBQ1I7QUFHQSxRQUFJLFVBQVUsQ0FBQyxFQUFFLDBCQUEwQixDQUFDLEVBQUU7QUFDOUMsUUFBSyxTQUFVO0FBQ2QsYUFBTztBQUFBLElBQ1I7QUFPQSxlQUFZLEVBQUUsaUJBQWlCLE9BQVMsRUFBRSxpQkFBaUIsS0FDMUQsRUFBRSx3QkFBeUIsQ0FBRTtBQUFBO0FBQUEsTUFHN0I7QUFBQTtBQUdELFFBQUssVUFBVSxHQUFJO0FBT2xCLFVBQUssS0FBSyxjQUFjLEVBQUUsaUJBQWlCLGNBQzFDQSxRQUFPLFNBQVUsWUFBWSxDQUFFLEdBQUk7QUFDbkMsZUFBTztBQUFBLE1BQ1I7QUFNQSxVQUFLLEtBQUssY0FBYyxFQUFFLGlCQUFpQixjQUMxQ0EsUUFBTyxTQUFVLFlBQVksQ0FBRSxHQUFJO0FBQ25DLGVBQU87QUFBQSxNQUNSO0FBR0EsYUFBTztBQUFBLElBQ1I7QUFFQSxXQUFPLFVBQVUsSUFBSSxLQUFLO0FBQUEsRUFDM0I7QUFNQSxFQUFBQSxRQUFPLGFBQWEsU0FBVSxTQUFVO0FBQ3ZDLFFBQUksTUFDSCxhQUFhLENBQUMsR0FDZCxJQUFJLEdBQ0pELEtBQUk7QUFFTCxtQkFBZTtBQUVmLFNBQUssS0FBTSxTQUFTLFNBQVU7QUFFOUIsUUFBSyxjQUFlO0FBQ25CLGFBQVUsT0FBTyxRQUFTQSxJQUFJLEdBQU07QUFDbkMsWUFBSyxTQUFTLFFBQVNBLEVBQUUsR0FBSTtBQUM1QixjQUFJLFdBQVcsS0FBTUEsRUFBRTtBQUFBLFFBQ3hCO0FBQUEsTUFDRDtBQUNBLGFBQVEsS0FBTTtBQUNiLGVBQU8sS0FBTSxTQUFTLFdBQVksQ0FBRSxHQUFHLENBQUU7QUFBQSxNQUMxQztBQUFBLElBQ0Q7QUFFQSxXQUFPO0FBQUEsRUFDUjtBQUVBLEVBQUFDLFFBQU8sR0FBRyxhQUFhLFdBQVc7QUFDakMsV0FBTyxLQUFLLFVBQVdBLFFBQU8sV0FBWSxNQUFNLE1BQU8sSUFBSyxDQUFFLENBQUU7QUFBQSxFQUNqRTtBQUVBLE1BQUksR0FDSCxrQkFHQSxVQUNBLGlCQUNBLGdCQUdBLFVBQVUsR0FDVixPQUFPLEdBQ1AsYUFBYSxZQUFZLEdBQ3pCLGdCQUFnQixZQUFZLEdBQzVCLHlCQUF5QixZQUFZLEdBS3JDLGNBQWMsSUFBSSxPQUFRLGFBQWEsS0FBSyxHQUFJLEdBRWhELGNBQWMsSUFBSSxPQUFRLE1BQU0sYUFBYSxHQUFJLEdBRWpELFlBQVlBLFFBQU8sT0FBUTtBQUFBO0FBQUE7QUFBQSxJQUkxQixjQUFjLElBQUksT0FBUSxNQUFNLGFBQy9CLHFEQUFxRCxhQUNyRCxxQkFBcUIsYUFBYSxvQkFBb0IsR0FBSTtBQUFBLEVBQzVELEdBQUcsZUFBZ0IsR0FFbkIsVUFBVSx1Q0FDVixVQUFVLFVBR1YsZUFBZSxvQ0FNZixnQkFBZ0IsV0FBVztBQUMxQixnQkFBWTtBQUFBLEVBQ2IsR0FFQSxxQkFBcUI7QUFBQSxJQUNwQixTQUFVLE1BQU87QUFDaEIsYUFBTyxLQUFLLGFBQWEsUUFBUSxTQUFVLE1BQU0sVUFBVztBQUFBLElBQzdEO0FBQUEsSUFDQSxFQUFFLEtBQUssY0FBYyxNQUFNLFNBQVM7QUFBQSxFQUNyQztBQUVELFdBQVMsS0FBTSxVQUFVLFNBQVMsU0FBUyxNQUFPO0FBQ2pELFFBQUksR0FBR0QsSUFBRyxNQUFNLEtBQUssT0FBTyxRQUFRLGFBQ25DLGFBQWEsV0FBVyxRQUFRLGVBR2hDLFdBQVcsVUFBVSxRQUFRLFdBQVc7QUFFekMsY0FBVSxXQUFXLENBQUM7QUFHdEIsUUFBSyxPQUFPLGFBQWEsWUFBWSxDQUFDLFlBQ3JDLGFBQWEsS0FBSyxhQUFhLEtBQUssYUFBYSxJQUFLO0FBRXRELGFBQU87QUFBQSxJQUNSO0FBR0EsUUFBSyxDQUFDLE1BQU87QUFDWixrQkFBYSxPQUFRO0FBQ3JCLGdCQUFVLFdBQVc7QUFFckIsVUFBSyxnQkFBaUI7QUFJckIsWUFBSyxhQUFhLE9BQVEsUUFBUSxhQUFhLEtBQU0sUUFBUyxJQUFNO0FBR25FLGNBQU8sSUFBSSxNQUFPLENBQUUsR0FBTTtBQUd6QixnQkFBSyxhQUFhLEdBQUk7QUFDckIsa0JBQU8sT0FBTyxRQUFRLGVBQWdCLENBQUUsR0FBTTtBQUM3QyxxQkFBSyxLQUFNLFNBQVMsSUFBSztBQUFBLGNBQzFCO0FBQ0EscUJBQU87QUFBQSxZQUdSLE9BQU87QUFDTixrQkFBSyxlQUFnQixPQUFPLFdBQVcsZUFBZ0IsQ0FBRSxNQUN4REMsUUFBTyxTQUFVLFNBQVMsSUFBSyxHQUFJO0FBRW5DLHFCQUFLLEtBQU0sU0FBUyxJQUFLO0FBQ3pCLHVCQUFPO0FBQUEsY0FDUjtBQUFBLFlBQ0Q7QUFBQSxVQUdELFdBQVksTUFBTyxDQUFFLEdBQUk7QUFDeEIsaUJBQUssTUFBTyxTQUFTLFFBQVEscUJBQXNCLFFBQVMsQ0FBRTtBQUM5RCxtQkFBTztBQUFBLFVBR1IsWUFBYyxJQUFJLE1BQU8sQ0FBRSxNQUFPLFFBQVEsd0JBQXlCO0FBQ2xFLGlCQUFLLE1BQU8sU0FBUyxRQUFRLHVCQUF3QixDQUFFLENBQUU7QUFDekQsbUJBQU87QUFBQSxVQUNSO0FBQUEsUUFDRDtBQUdBLFlBQUssQ0FBQyx1QkFBd0IsV0FBVyxHQUFJLE1BQzFDLENBQUMsYUFBYSxDQUFDLFVBQVUsS0FBTSxRQUFTLElBQU07QUFFaEQsd0JBQWM7QUFDZCx1QkFBYTtBQVNiLGNBQUssYUFBYSxNQUNmLFNBQVMsS0FBTSxRQUFTLEtBQUssbUJBQW1CLEtBQU0sUUFBUyxJQUFNO0FBR3ZFLHlCQUFhLFNBQVMsS0FBTSxRQUFTLEtBQ3BDLFlBQWEsUUFBUSxVQUFXLEtBQ2hDO0FBUUQsZ0JBQUssY0FBYyxXQUFXLE1BQU87QUFHcEMsa0JBQU8sTUFBTSxRQUFRLGFBQWMsSUFBSyxHQUFNO0FBQzdDLHNCQUFNQSxRQUFPLGVBQWdCLEdBQUk7QUFBQSxjQUNsQyxPQUFPO0FBQ04sd0JBQVEsYUFBYyxNQUFRLE1BQU1BLFFBQU8sT0FBVTtBQUFBLGNBQ3REO0FBQUEsWUFDRDtBQUdBLHFCQUFTLFNBQVUsUUFBUztBQUM1QixZQUFBRCxLQUFJLE9BQU87QUFDWCxtQkFBUUEsTUFBTTtBQUNiLHFCQUFRQSxFQUFFLEtBQU0sTUFBTSxNQUFNLE1BQU0sWUFBYSxNQUM5QyxXQUFZLE9BQVFBLEVBQUUsQ0FBRTtBQUFBLFlBQzFCO0FBQ0EsMEJBQWMsT0FBTyxLQUFNLEdBQUk7QUFBQSxVQUNoQztBQUVBLGNBQUk7QUFDSCxpQkFBSztBQUFBLGNBQU87QUFBQSxjQUNYLFdBQVcsaUJBQWtCLFdBQVk7QUFBQSxZQUMxQztBQUNBLG1CQUFPO0FBQUEsVUFDUixTQUFVLFVBQVc7QUFDcEIsbUNBQXdCLFVBQVUsSUFBSztBQUFBLFVBQ3hDLFVBQUU7QUFDRCxnQkFBSyxRQUFRQyxRQUFPLFNBQVU7QUFDN0Isc0JBQVEsZ0JBQWlCLElBQUs7QUFBQSxZQUMvQjtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFHQSxXQUFPLE9BQVEsU0FBUyxRQUFTLFVBQVUsSUFBSyxHQUFHLFNBQVMsU0FBUyxJQUFLO0FBQUEsRUFDM0U7QUFNQSxXQUFTLGFBQWMsSUFBSztBQUMzQixPQUFJQSxRQUFPLE9BQVEsSUFBSTtBQUN2QixXQUFPO0FBQUEsRUFDUjtBQU1BLFdBQVMsa0JBQW1CLE1BQU87QUFDbEMsV0FBTyxTQUFVLE1BQU87QUFDdkIsYUFBTyxTQUFVLE1BQU0sT0FBUSxLQUFLLEtBQUssU0FBUztBQUFBLElBQ25EO0FBQUEsRUFDRDtBQU1BLFdBQVMsbUJBQW9CLE1BQU87QUFDbkMsV0FBTyxTQUFVLE1BQU87QUFDdkIsY0FBUyxTQUFVLE1BQU0sT0FBUSxLQUFLLFNBQVUsTUFBTSxRQUFTLE1BQzlELEtBQUssU0FBUztBQUFBLElBQ2hCO0FBQUEsRUFDRDtBQU1BLFdBQVMscUJBQXNCLFVBQVc7QUFHekMsV0FBTyxTQUFVLE1BQU87QUFLdkIsVUFBSyxVQUFVLE1BQU87QUFTckIsWUFBSyxLQUFLLGNBQWMsS0FBSyxhQUFhLE9BQVE7QUFHakQsY0FBSyxXQUFXLE1BQU87QUFDdEIsZ0JBQUssV0FBVyxLQUFLLFlBQWE7QUFDakMscUJBQU8sS0FBSyxXQUFXLGFBQWE7QUFBQSxZQUNyQyxPQUFPO0FBQ04scUJBQU8sS0FBSyxhQUFhO0FBQUEsWUFDMUI7QUFBQSxVQUNEO0FBSUEsaUJBQU8sS0FBSyxlQUFlO0FBQUEsVUFHMUIsS0FBSyxlQUFlLENBQUMsWUFDcEIsbUJBQW9CLElBQUssTUFBTTtBQUFBLFFBQ2xDO0FBRUEsZUFBTyxLQUFLLGFBQWE7QUFBQSxNQUsxQixXQUFZLFdBQVcsTUFBTztBQUM3QixlQUFPLEtBQUssYUFBYTtBQUFBLE1BQzFCO0FBR0EsYUFBTztBQUFBLElBQ1I7QUFBQSxFQUNEO0FBTUEsV0FBUyx1QkFBd0IsSUFBSztBQUNyQyxXQUFPLGFBQWMsU0FBVSxVQUFXO0FBQ3pDLGlCQUFXLENBQUM7QUFDWixhQUFPLGFBQWMsU0FBVSxNQUFNRSxVQUFVO0FBQzlDLFlBQUksR0FDSCxlQUFlLEdBQUksQ0FBQyxHQUFHLEtBQUssUUFBUSxRQUFTLEdBQzdDSCxLQUFJLGFBQWE7QUFHbEIsZUFBUUEsTUFBTTtBQUNiLGNBQUssS0FBUSxJQUFJLGFBQWNBLEVBQUUsQ0FBSSxHQUFJO0FBQ3hDLGlCQUFNLENBQUUsSUFBSSxFQUFHRyxTQUFTLENBQUUsSUFBSSxLQUFNLENBQUU7QUFBQSxVQUN2QztBQUFBLFFBQ0Q7QUFBQSxNQUNELENBQUU7QUFBQSxJQUNILENBQUU7QUFBQSxFQUNIO0FBTUEsV0FBUyxZQUFhLE1BQU87QUFDNUIsUUFBSSxXQUNILE1BQU0sT0FBTyxLQUFLLGlCQUFpQixPQUFPO0FBTzNDLFFBQUssT0FBTyxZQUFZLElBQUksYUFBYSxHQUFJO0FBQzVDO0FBQUEsSUFDRDtBQUdBLGVBQVc7QUFDWCxzQkFBa0IsU0FBUztBQUMzQixxQkFBaUIsQ0FBQ0YsUUFBTyxTQUFVLFFBQVM7QUFRNUMsUUFBSyxRQUFRLGNBQWMsYUFDeEIsWUFBWSxTQUFTLGdCQUFpQixVQUFVLFFBQVEsV0FBWTtBQUN0RSxnQkFBVSxpQkFBa0IsVUFBVSxhQUFjO0FBQUEsSUFDckQ7QUFBQSxFQUNEO0FBRUEsT0FBSyxVQUFVLFNBQVUsTUFBTSxVQUFXO0FBQ3pDLFdBQU8sS0FBTSxNQUFNLE1BQU0sTUFBTSxRQUFTO0FBQUEsRUFDekM7QUFFQSxPQUFLLGtCQUFrQixTQUFVLE1BQU0sTUFBTztBQUM3QyxnQkFBYSxJQUFLO0FBRWxCLFFBQUssa0JBQ0osQ0FBQyx1QkFBd0IsT0FBTyxHQUFJLE1BQ2xDLENBQUMsYUFBYSxDQUFDLFVBQVUsS0FBTSxJQUFLLElBQU07QUFFNUMsVUFBSTtBQUNILGVBQU8sUUFBUSxLQUFNLE1BQU0sSUFBSztBQUFBLE1BQ2pDLFNBQVUsR0FBSTtBQUNiLCtCQUF3QixNQUFNLElBQUs7QUFBQSxNQUNwQztBQUFBLElBQ0Q7QUFFQSxXQUFPLEtBQU0sTUFBTSxVQUFVLE1BQU0sQ0FBRSxJQUFLLENBQUUsRUFBRSxTQUFTO0FBQUEsRUFDeEQ7QUFFQSxFQUFBQSxRQUFPLE9BQU87QUFBQTtBQUFBLElBR2IsYUFBYTtBQUFBLElBRWIsY0FBYztBQUFBLElBRWQsT0FBTztBQUFBLElBRVAsTUFBTTtBQUFBLE1BQ0wsSUFBSSxTQUFVLElBQUksU0FBVTtBQUMzQixZQUFLLE9BQU8sUUFBUSxtQkFBbUIsZUFBZSxnQkFBaUI7QUFDdEUsY0FBSSxPQUFPLFFBQVEsZUFBZ0IsRUFBRztBQUN0QyxpQkFBTyxPQUFPLENBQUUsSUFBSyxJQUFJLENBQUM7QUFBQSxRQUMzQjtBQUFBLE1BQ0Q7QUFBQSxNQUVBLEtBQUssU0FBVSxLQUFLLFNBQVU7QUFDN0IsWUFBSyxPQUFPLFFBQVEseUJBQXlCLGFBQWM7QUFDMUQsaUJBQU8sUUFBUSxxQkFBc0IsR0FBSTtBQUFBLFFBRzFDLE9BQU87QUFDTixpQkFBTyxRQUFRLGlCQUFrQixHQUFJO0FBQUEsUUFDdEM7QUFBQSxNQUNEO0FBQUEsTUFFQSxPQUFPLFNBQVUsV0FBVyxTQUFVO0FBQ3JDLFlBQUssT0FBTyxRQUFRLDJCQUEyQixlQUFlLGdCQUFpQjtBQUM5RSxpQkFBTyxRQUFRLHVCQUF3QixTQUFVO0FBQUEsUUFDbEQ7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBRUEsVUFBVTtBQUFBLE1BQ1QsS0FBSyxFQUFFLEtBQUssY0FBYyxPQUFPLEtBQUs7QUFBQSxNQUN0QyxLQUFLLEVBQUUsS0FBSyxhQUFhO0FBQUEsTUFDekIsS0FBSyxFQUFFLEtBQUssbUJBQW1CLE9BQU8sS0FBSztBQUFBLE1BQzNDLEtBQUssRUFBRSxLQUFLLGtCQUFrQjtBQUFBLElBQy9CO0FBQUEsSUFFQTtBQUFBLElBRUEsUUFBUTtBQUFBLE1BQ1AsSUFBSSxTQUFVLElBQUs7QUFDbEIsWUFBSSxTQUFTLGlCQUFrQixFQUFHO0FBQ2xDLGVBQU8sU0FBVSxNQUFPO0FBQ3ZCLGlCQUFPLEtBQUssYUFBYyxJQUFLLE1BQU07QUFBQSxRQUN0QztBQUFBLE1BQ0Q7QUFBQSxNQUVBLEtBQUssU0FBVSxrQkFBbUI7QUFDakMsWUFBSSxtQkFBbUIsaUJBQWtCLGdCQUFpQixFQUFFLFlBQVk7QUFDeEUsZUFBTyxxQkFBcUIsTUFFM0IsV0FBVztBQUNWLGlCQUFPO0FBQUEsUUFDUixJQUVBLFNBQVUsTUFBTztBQUNoQixpQkFBTyxTQUFVLE1BQU0sZ0JBQWlCO0FBQUEsUUFDekM7QUFBQSxNQUNGO0FBQUEsTUFFQSxPQUFPLFNBQVUsV0FBWTtBQUM1QixZQUFJLFVBQVUsV0FBWSxZQUFZLEdBQUk7QUFFMUMsZUFBTyxZQUNKLFVBQVUsSUFBSSxPQUFRLFFBQVEsYUFBYSxNQUFNLFlBQ2xELE1BQU0sYUFBYSxLQUFNLE1BQzFCLFdBQVksV0FBVyxTQUFVLE1BQU87QUFDdkMsaUJBQU8sUUFBUTtBQUFBLFlBQ2QsT0FBTyxLQUFLLGNBQWMsWUFBWSxLQUFLLGFBQzFDLE9BQU8sS0FBSyxpQkFBaUIsZUFDNUIsS0FBSyxhQUFjLE9BQVEsS0FDNUI7QUFBQSxVQUNGO0FBQUEsUUFDRCxDQUFFO0FBQUEsTUFDSjtBQUFBLE1BRUEsTUFBTSxTQUFVLE1BQU0sVUFBVSxPQUFRO0FBQ3ZDLGVBQU8sU0FBVSxNQUFPO0FBQ3ZCLGNBQUksU0FBU0EsUUFBTyxLQUFNLE1BQU0sSUFBSztBQUVyQyxjQUFLLFVBQVUsTUFBTztBQUNyQixtQkFBTyxhQUFhO0FBQUEsVUFDckI7QUFDQSxjQUFLLENBQUMsVUFBVztBQUNoQixtQkFBTztBQUFBLFVBQ1I7QUFFQSxvQkFBVTtBQUVWLGNBQUssYUFBYSxLQUFNO0FBQ3ZCLG1CQUFPLFdBQVc7QUFBQSxVQUNuQjtBQUNBLGNBQUssYUFBYSxNQUFPO0FBQ3hCLG1CQUFPLFdBQVc7QUFBQSxVQUNuQjtBQUNBLGNBQUssYUFBYSxNQUFPO0FBQ3hCLG1CQUFPLFNBQVMsT0FBTyxRQUFTLEtBQU0sTUFBTTtBQUFBLFVBQzdDO0FBQ0EsY0FBSyxhQUFhLE1BQU87QUFDeEIsbUJBQU8sU0FBUyxPQUFPLFFBQVMsS0FBTSxJQUFJO0FBQUEsVUFDM0M7QUFDQSxjQUFLLGFBQWEsTUFBTztBQUN4QixtQkFBTyxTQUFTLE9BQU8sTUFBTyxDQUFDLE1BQU0sTUFBTyxNQUFNO0FBQUEsVUFDbkQ7QUFDQSxjQUFLLGFBQWEsTUFBTztBQUN4QixvQkFBUyxNQUFNLE9BQU8sUUFBUyxhQUFhLEdBQUksSUFBSSxLQUNsRCxRQUFTLEtBQU0sSUFBSTtBQUFBLFVBQ3RCO0FBQ0EsY0FBSyxhQUFhLE1BQU87QUFDeEIsbUJBQU8sV0FBVyxTQUFTLE9BQU8sTUFBTyxHQUFHLE1BQU0sU0FBUyxDQUFFLE1BQU0sUUFBUTtBQUFBLFVBQzVFO0FBRUEsaUJBQU87QUFBQSxRQUNSO0FBQUEsTUFDRDtBQUFBLE1BRUEsT0FBTyxTQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTztBQUNyRCxZQUFJLFNBQVMsS0FBSyxNQUFPLEdBQUcsQ0FBRSxNQUFNLE9BQ25DLFVBQVUsS0FBSyxNQUFPLEVBQUcsTUFBTSxRQUMvQixTQUFTLFNBQVM7QUFFbkIsZUFBTyxVQUFVLEtBQUssU0FBUztBQUFBO0FBQUEsVUFHOUIsU0FBVSxNQUFPO0FBQ2hCLG1CQUFPLENBQUMsQ0FBQyxLQUFLO0FBQUEsVUFDZjtBQUFBLFlBRUEsU0FBVSxNQUFNLFVBQVUsS0FBTTtBQUMvQixjQUFJLE9BQU8sWUFBWSxNQUFNLFdBQVcsT0FDdkNJLE9BQU0sV0FBVyxVQUFVLGdCQUFnQixtQkFDM0MsU0FBUyxLQUFLLFlBQ2QsT0FBTyxVQUFVLEtBQUssU0FBUyxZQUFZLEdBQzNDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFDcEIsT0FBTztBQUVSLGNBQUssUUFBUztBQUdiLGdCQUFLLFFBQVM7QUFDYixxQkFBUUEsTUFBTTtBQUNiLHVCQUFPO0FBQ1AsdUJBQVUsT0FBTyxLQUFNQSxJQUFJLEdBQU07QUFDaEMsc0JBQUssU0FDSixTQUFVLE1BQU0sSUFBSyxJQUNyQixLQUFLLGFBQWEsR0FBSTtBQUV0QiwyQkFBTztBQUFBLGtCQUNSO0FBQUEsZ0JBQ0Q7QUFHQSx3QkFBUUEsT0FBTSxTQUFTLFVBQVUsQ0FBQyxTQUFTO0FBQUEsY0FDNUM7QUFDQSxxQkFBTztBQUFBLFlBQ1I7QUFFQSxvQkFBUSxDQUFFLFVBQVUsT0FBTyxhQUFhLE9BQU8sU0FBVTtBQUd6RCxnQkFBSyxXQUFXLFVBQVc7QUFHMUIsMkJBQWEsT0FBUUosUUFBTyxPQUFRLE1BQ2pDLE9BQVFBLFFBQU8sT0FBUSxJQUFJLENBQUM7QUFDL0Isc0JBQVEsV0FBWSxJQUFLLEtBQUssQ0FBQztBQUMvQiwwQkFBWSxNQUFPLENBQUUsTUFBTSxXQUFXLE1BQU8sQ0FBRTtBQUMvQyxxQkFBTyxhQUFhLE1BQU8sQ0FBRTtBQUM3QixxQkFBTyxhQUFhLE9BQU8sV0FBWSxTQUFVO0FBRWpELHFCQUFVLE9BQU8sRUFBRSxhQUFhLFFBQVEsS0FBTUksSUFBSTtBQUFBLGVBRy9DLE9BQU8sWUFBWSxNQUFPLE1BQU0sSUFBSSxHQUFNO0FBRzVDLG9CQUFLLEtBQUssYUFBYSxLQUFLLEVBQUUsUUFBUSxTQUFTLE1BQU87QUFDckQsNkJBQVksSUFBSyxJQUFJLENBQUUsU0FBUyxXQUFXLElBQUs7QUFDaEQ7QUFBQSxnQkFDRDtBQUFBLGNBQ0Q7QUFBQSxZQUVELE9BQU87QUFHTixrQkFBSyxVQUFXO0FBQ2YsNkJBQWEsS0FBTUosUUFBTyxPQUFRLE1BQy9CLEtBQU1BLFFBQU8sT0FBUSxJQUFJLENBQUM7QUFDN0Isd0JBQVEsV0FBWSxJQUFLLEtBQUssQ0FBQztBQUMvQiw0QkFBWSxNQUFPLENBQUUsTUFBTSxXQUFXLE1BQU8sQ0FBRTtBQUMvQyx1QkFBTztBQUFBLGNBQ1I7QUFJQSxrQkFBSyxTQUFTLE9BQVE7QUFHckIsdUJBQVUsT0FBTyxFQUFFLGFBQWEsUUFBUSxLQUFNSSxJQUFJLE1BQy9DLE9BQU8sWUFBWSxNQUFPLE1BQU0sSUFBSSxHQUFNO0FBRTVDLHVCQUFPLFNBQ04sU0FBVSxNQUFNLElBQUssSUFDckIsS0FBSyxhQUFhLE1BQ2xCLEVBQUUsTUFBTztBQUdULHdCQUFLLFVBQVc7QUFDZixtQ0FBYSxLQUFNSixRQUFPLE9BQVEsTUFDL0IsS0FBTUEsUUFBTyxPQUFRLElBQUksQ0FBQztBQUM3QixpQ0FBWSxJQUFLLElBQUksQ0FBRSxTQUFTLElBQUs7QUFBQSxvQkFDdEM7QUFFQSx3QkFBSyxTQUFTLE1BQU87QUFDcEI7QUFBQSxvQkFDRDtBQUFBLGtCQUNEO0FBQUEsZ0JBQ0Q7QUFBQSxjQUNEO0FBQUEsWUFDRDtBQUdBLG9CQUFRO0FBQ1IsbUJBQU8sU0FBUyxTQUFXLE9BQU8sVUFBVSxLQUFLLE9BQU8sU0FBUztBQUFBLFVBQ2xFO0FBQUEsUUFDRDtBQUFBLE1BQ0Y7QUFBQSxNQUVBLFFBQVEsU0FBVSxRQUFRLFVBQVc7QUFNcEMsWUFBSSxLQUFLQSxRQUFPLEtBQUssUUFBUyxNQUFPLEtBQ3BDQSxRQUFPLEtBQUssV0FBWSxPQUFPLFlBQVksQ0FBRSxLQUM3QyxjQUFlLHlCQUF5QixNQUFPO0FBS2hELFlBQUssR0FBSUEsUUFBTyxPQUFRLEdBQUk7QUFDM0IsaUJBQU8sR0FBSSxRQUFTO0FBQUEsUUFDckI7QUFFQSxlQUFPO0FBQUEsTUFDUjtBQUFBLElBQ0Q7QUFBQSxJQUVBLFNBQVM7QUFBQTtBQUFBLE1BR1IsS0FBSyxhQUFjLFNBQVUsVUFBVztBQUt2QyxZQUFJLFFBQVEsQ0FBQyxHQUNaLFVBQVUsQ0FBQyxHQUNYLFVBQVUsUUFBUyxTQUFTLFFBQVMsVUFBVSxJQUFLLENBQUU7QUFFdkQsZUFBTyxRQUFTQSxRQUFPLE9BQVEsSUFDOUIsYUFBYyxTQUFVLE1BQU1FLFVBQVMsVUFBVSxLQUFNO0FBQ3RELGNBQUksTUFDSCxZQUFZLFFBQVMsTUFBTSxNQUFNLEtBQUssQ0FBQyxDQUFFLEdBQ3pDSCxLQUFJLEtBQUs7QUFHVixpQkFBUUEsTUFBTTtBQUNiLGdCQUFPLE9BQU8sVUFBV0EsRUFBRSxHQUFNO0FBQ2hDLG1CQUFNQSxFQUFFLElBQUksRUFBR0csU0FBU0gsRUFBRSxJQUFJO0FBQUEsWUFDL0I7QUFBQSxVQUNEO0FBQUEsUUFDRCxDQUFFLElBQ0YsU0FBVSxNQUFNLFVBQVUsS0FBTTtBQUMvQixnQkFBTyxDQUFFLElBQUk7QUFDYixrQkFBUyxPQUFPLE1BQU0sS0FBSyxPQUFRO0FBSW5DLGdCQUFPLENBQUUsSUFBSTtBQUNiLGlCQUFPLENBQUMsUUFBUSxJQUFJO0FBQUEsUUFDckI7QUFBQSxNQUNGLENBQUU7QUFBQSxNQUVGLEtBQUssYUFBYyxTQUFVLFVBQVc7QUFDdkMsZUFBTyxTQUFVLE1BQU87QUFDdkIsaUJBQU8sS0FBTSxVQUFVLElBQUssRUFBRSxTQUFTO0FBQUEsUUFDeEM7QUFBQSxNQUNELENBQUU7QUFBQSxNQUVGLFVBQVUsYUFBYyxTQUFVLE1BQU87QUFDeEMsZUFBTyxpQkFBa0IsSUFBSztBQUM5QixlQUFPLFNBQVUsTUFBTztBQUN2QixrQkFBUyxLQUFLLGVBQWVDLFFBQU8sS0FBTSxJQUFLLEdBQUksUUFBUyxJQUFLLElBQUk7QUFBQSxRQUN0RTtBQUFBLE1BQ0QsQ0FBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFTRixNQUFNLGFBQWMsU0FBVSxNQUFPO0FBR3BDLFlBQUssQ0FBQyxZQUFZLEtBQU0sUUFBUSxFQUFHLEdBQUk7QUFDdEMsd0JBQWUsdUJBQXVCLElBQUs7QUFBQSxRQUM1QztBQUNBLGVBQU8saUJBQWtCLElBQUssRUFBRSxZQUFZO0FBQzVDLGVBQU8sU0FBVSxNQUFPO0FBQ3ZCLGNBQUk7QUFDSixhQUFHO0FBQ0YsZ0JBQU8sV0FBVyxpQkFDakIsS0FBSyxPQUNMLEtBQUssYUFBYyxVQUFXLEtBQUssS0FBSyxhQUFjLE1BQU8sR0FBTTtBQUVuRSx5QkFBVyxTQUFTLFlBQVk7QUFDaEMscUJBQU8sYUFBYSxRQUFRLFNBQVMsUUFBUyxPQUFPLEdBQUksTUFBTTtBQUFBLFlBQ2hFO0FBQUEsVUFDRCxVQUFZLE9BQU8sS0FBSyxlQUFnQixLQUFLLGFBQWE7QUFDMUQsaUJBQU87QUFBQSxRQUNSO0FBQUEsTUFDRCxDQUFFO0FBQUE7QUFBQSxNQUdGLFFBQVEsU0FBVSxNQUFPO0FBQ3hCLFlBQUksT0FBT0YsUUFBTyxZQUFZQSxRQUFPLFNBQVM7QUFDOUMsZUFBTyxRQUFRLEtBQUssTUFBTyxDQUFFLE1BQU0sS0FBSztBQUFBLE1BQ3pDO0FBQUEsTUFFQSxNQUFNLFNBQVUsTUFBTztBQUN0QixlQUFPLFNBQVM7QUFBQSxNQUNqQjtBQUFBLE1BRUEsT0FBTyxTQUFVLE1BQU87QUFDdkIsZUFBTyxTQUFTLFNBQVMsaUJBQ3hCLFNBQVMsU0FBUyxLQUNsQixDQUFDLEVBQUcsS0FBSyxRQUFRLEtBQUssUUFBUSxDQUFDLEtBQUs7QUFBQSxNQUN0QztBQUFBO0FBQUEsTUFHQSxTQUFTLHFCQUFzQixLQUFNO0FBQUEsTUFDckMsVUFBVSxxQkFBc0IsSUFBSztBQUFBLE1BRXJDLFNBQVMsU0FBVSxNQUFPO0FBSXpCLGVBQVMsU0FBVSxNQUFNLE9BQVEsS0FBSyxDQUFDLENBQUMsS0FBSyxXQUMxQyxTQUFVLE1BQU0sUUFBUyxLQUFLLENBQUMsQ0FBQyxLQUFLO0FBQUEsTUFDekM7QUFBQSxNQUVBLFVBQVUsU0FBVSxNQUFPO0FBTTFCLFlBQUssUUFBUSxLQUFLLFlBQWE7QUFFOUIsZUFBSyxXQUFXO0FBQUEsUUFDakI7QUFFQSxlQUFPLEtBQUssYUFBYTtBQUFBLE1BQzFCO0FBQUE7QUFBQSxNQUdBLE9BQU8sU0FBVSxNQUFPO0FBTXZCLGFBQU0sT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLEtBQUssYUFBYztBQUM3RCxjQUFLLEtBQUssV0FBVyxHQUFJO0FBQ3hCLG1CQUFPO0FBQUEsVUFDUjtBQUFBLFFBQ0Q7QUFDQSxlQUFPO0FBQUEsTUFDUjtBQUFBLE1BRUEsUUFBUSxTQUFVLE1BQU87QUFDeEIsZUFBTyxDQUFDRSxRQUFPLEtBQUssUUFBUSxNQUFPLElBQUs7QUFBQSxNQUN6QztBQUFBO0FBQUEsTUFHQSxRQUFRLFNBQVUsTUFBTztBQUN4QixlQUFPLFFBQVEsS0FBTSxLQUFLLFFBQVM7QUFBQSxNQUNwQztBQUFBLE1BRUEsT0FBTyxTQUFVLE1BQU87QUFDdkIsZUFBTyxRQUFRLEtBQU0sS0FBSyxRQUFTO0FBQUEsTUFDcEM7QUFBQSxNQUVBLFFBQVEsU0FBVSxNQUFPO0FBQ3hCLGVBQU8sU0FBVSxNQUFNLE9BQVEsS0FBSyxLQUFLLFNBQVMsWUFDakQsU0FBVSxNQUFNLFFBQVM7QUFBQSxNQUMzQjtBQUFBLE1BRUEsTUFBTSxTQUFVLE1BQU87QUFDdEIsZUFBTyxTQUFVLE1BQU0sT0FBUSxLQUFLLEtBQUssU0FBUztBQUFBLE1BQ25EO0FBQUE7QUFBQSxNQUdBLE9BQU8sdUJBQXdCLFdBQVc7QUFDekMsZUFBTyxDQUFFLENBQUU7QUFBQSxNQUNaLENBQUU7QUFBQSxNQUVGLE1BQU0sdUJBQXdCLFNBQVUsZUFBZSxRQUFTO0FBQy9ELGVBQU8sQ0FBRSxTQUFTLENBQUU7QUFBQSxNQUNyQixDQUFFO0FBQUEsTUFFRixJQUFJLHVCQUF3QixTQUFVLGVBQWUsUUFBUSxVQUFXO0FBQ3ZFLGVBQU8sQ0FBRSxXQUFXLElBQUksV0FBVyxTQUFTLFFBQVM7QUFBQSxNQUN0RCxDQUFFO0FBQUEsTUFFRixNQUFNLHVCQUF3QixTQUFVLGNBQWMsUUFBUztBQUM5RCxZQUFJRCxLQUFJO0FBQ1IsZUFBUUEsS0FBSSxRQUFRQSxNQUFLLEdBQUk7QUFDNUIsdUJBQWEsS0FBTUEsRUFBRTtBQUFBLFFBQ3RCO0FBQ0EsZUFBTztBQUFBLE1BQ1IsQ0FBRTtBQUFBLE1BRUYsS0FBSyx1QkFBd0IsU0FBVSxjQUFjLFFBQVM7QUFDN0QsWUFBSUEsS0FBSTtBQUNSLGVBQVFBLEtBQUksUUFBUUEsTUFBSyxHQUFJO0FBQzVCLHVCQUFhLEtBQU1BLEVBQUU7QUFBQSxRQUN0QjtBQUNBLGVBQU87QUFBQSxNQUNSLENBQUU7QUFBQSxNQUVGLElBQUksdUJBQXdCLFNBQVUsY0FBYyxRQUFRLFVBQVc7QUFDdEUsWUFBSUE7QUFFSixZQUFLLFdBQVcsR0FBSTtBQUNuQixVQUFBQSxLQUFJLFdBQVc7QUFBQSxRQUNoQixXQUFZLFdBQVcsUUFBUztBQUMvQixVQUFBQSxLQUFJO0FBQUEsUUFDTCxPQUFPO0FBQ04sVUFBQUEsS0FBSTtBQUFBLFFBQ0w7QUFFQSxlQUFRLEVBQUVBLE1BQUssS0FBSztBQUNuQix1QkFBYSxLQUFNQSxFQUFFO0FBQUEsUUFDdEI7QUFDQSxlQUFPO0FBQUEsTUFDUixDQUFFO0FBQUEsTUFFRixJQUFJLHVCQUF3QixTQUFVLGNBQWMsUUFBUSxVQUFXO0FBQ3RFLFlBQUlBLEtBQUksV0FBVyxJQUFJLFdBQVcsU0FBUztBQUMzQyxlQUFRLEVBQUVBLEtBQUksVUFBVTtBQUN2Qix1QkFBYSxLQUFNQSxFQUFFO0FBQUEsUUFDdEI7QUFDQSxlQUFPO0FBQUEsTUFDUixDQUFFO0FBQUEsSUFDSDtBQUFBLEVBQ0Q7QUFFQSxFQUFBQyxRQUFPLEtBQUssUUFBUSxNQUFNQSxRQUFPLEtBQUssUUFBUTtBQUc5QyxPQUFNLEtBQUssRUFBRSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxLQUFLLEdBQUk7QUFDckYsSUFBQUEsUUFBTyxLQUFLLFFBQVMsQ0FBRSxJQUFJLGtCQUFtQixDQUFFO0FBQUEsRUFDakQ7QUFDQSxPQUFNLEtBQUssRUFBRSxRQUFRLE1BQU0sT0FBTyxLQUFLLEdBQUk7QUFDMUMsSUFBQUEsUUFBTyxLQUFLLFFBQVMsQ0FBRSxJQUFJLG1CQUFvQixDQUFFO0FBQUEsRUFDbEQ7QUFHQSxXQUFTLGFBQWE7QUFBQSxFQUFDO0FBQ3ZCLGFBQVcsWUFBWUEsUUFBTyxLQUFLLFVBQVVBLFFBQU8sS0FBSztBQUN6RCxFQUFBQSxRQUFPLEtBQUssYUFBYSxJQUFJLFdBQVc7QUFFeEMsV0FBUyxjQUFlLFNBQVMsWUFBWSxNQUFPO0FBQ25ELFFBQUlJLE9BQU0sV0FBVyxLQUNwQixPQUFPLFdBQVcsTUFDbEIsTUFBTSxRQUFRQSxNQUNkLG1CQUFtQixRQUFRLFFBQVEsY0FDbkMsV0FBVztBQUVaLFdBQU8sV0FBVztBQUFBO0FBQUEsTUFHakIsU0FBVSxNQUFNLFNBQVMsS0FBTTtBQUM5QixlQUFVLE9BQU8sS0FBTUEsSUFBSSxHQUFNO0FBQ2hDLGNBQUssS0FBSyxhQUFhLEtBQUssa0JBQW1CO0FBQzlDLG1CQUFPLFFBQVMsTUFBTSxTQUFTLEdBQUk7QUFBQSxVQUNwQztBQUFBLFFBQ0Q7QUFDQSxlQUFPO0FBQUEsTUFDUjtBQUFBO0FBQUE7QUFBQSxNQUdBLFNBQVUsTUFBTSxTQUFTLEtBQU07QUFDOUIsWUFBSSxVQUFVLFlBQ2IsV0FBVyxDQUFFLFNBQVMsUUFBUztBQUdoQyxZQUFLLEtBQU07QUFDVixpQkFBVSxPQUFPLEtBQU1BLElBQUksR0FBTTtBQUNoQyxnQkFBSyxLQUFLLGFBQWEsS0FBSyxrQkFBbUI7QUFDOUMsa0JBQUssUUFBUyxNQUFNLFNBQVMsR0FBSSxHQUFJO0FBQ3BDLHVCQUFPO0FBQUEsY0FDUjtBQUFBLFlBQ0Q7QUFBQSxVQUNEO0FBQUEsUUFDRCxPQUFPO0FBQ04saUJBQVUsT0FBTyxLQUFNQSxJQUFJLEdBQU07QUFDaEMsZ0JBQUssS0FBSyxhQUFhLEtBQUssa0JBQW1CO0FBQzlDLDJCQUFhLEtBQU1KLFFBQU8sT0FBUSxNQUFPLEtBQU1BLFFBQU8sT0FBUSxJQUFJLENBQUM7QUFFbkUsa0JBQUssUUFBUSxTQUFVLE1BQU0sSUFBSyxHQUFJO0FBQ3JDLHVCQUFPLEtBQU1JLElBQUksS0FBSztBQUFBLGNBQ3ZCLFlBQWMsV0FBVyxXQUFZLEdBQUksTUFDeEMsU0FBVSxDQUFFLE1BQU0sV0FBVyxTQUFVLENBQUUsTUFBTSxVQUFXO0FBRzFELHVCQUFTLFNBQVUsQ0FBRSxJQUFJLFNBQVUsQ0FBRTtBQUFBLGNBQ3RDLE9BQU87QUFHTiwyQkFBWSxHQUFJLElBQUk7QUFHcEIsb0JBQU8sU0FBVSxDQUFFLElBQUksUUFBUyxNQUFNLFNBQVMsR0FBSSxHQUFNO0FBQ3hELHlCQUFPO0FBQUEsZ0JBQ1I7QUFBQSxjQUNEO0FBQUEsWUFDRDtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBQ0EsZUFBTztBQUFBLE1BQ1I7QUFBQTtBQUFBLEVBQ0Y7QUFFQSxXQUFTLGVBQWdCLFVBQVc7QUFDbkMsV0FBTyxTQUFTLFNBQVMsSUFDeEIsU0FBVSxNQUFNLFNBQVMsS0FBTTtBQUM5QixVQUFJTCxLQUFJLFNBQVM7QUFDakIsYUFBUUEsTUFBTTtBQUNiLFlBQUssQ0FBQyxTQUFVQSxFQUFFLEVBQUcsTUFBTSxTQUFTLEdBQUksR0FBSTtBQUMzQyxpQkFBTztBQUFBLFFBQ1I7QUFBQSxNQUNEO0FBQ0EsYUFBTztBQUFBLElBQ1IsSUFDQSxTQUFVLENBQUU7QUFBQSxFQUNkO0FBRUEsV0FBUyxpQkFBa0IsVUFBVSxVQUFVLFNBQVU7QUFDeEQsUUFBSUEsS0FBSSxHQUNQLE1BQU0sU0FBUztBQUNoQixXQUFRQSxLQUFJLEtBQUtBLE1BQU07QUFDdEIsV0FBTSxVQUFVLFNBQVVBLEVBQUUsR0FBRyxPQUFRO0FBQUEsSUFDeEM7QUFDQSxXQUFPO0FBQUEsRUFDUjtBQUVBLFdBQVMsU0FBVSxXQUFXLEtBQUssUUFBUSxTQUFTLEtBQU07QUFDekQsUUFBSSxNQUNILGVBQWUsQ0FBQyxHQUNoQkEsS0FBSSxHQUNKLE1BQU0sVUFBVSxRQUNoQixTQUFTLE9BQU87QUFFakIsV0FBUUEsS0FBSSxLQUFLQSxNQUFNO0FBQ3RCLFVBQU8sT0FBTyxVQUFXQSxFQUFFLEdBQU07QUFDaEMsWUFBSyxDQUFDLFVBQVUsT0FBUSxNQUFNLFNBQVMsR0FBSSxHQUFJO0FBQzlDLHVCQUFhLEtBQU0sSUFBSztBQUN4QixjQUFLLFFBQVM7QUFDYixnQkFBSSxLQUFNQSxFQUFFO0FBQUEsVUFDYjtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUVBLFdBQU87QUFBQSxFQUNSO0FBRUEsV0FBUyxXQUFZTSxZQUFXLFVBQVUsU0FBUyxZQUFZLFlBQVksY0FBZTtBQUN6RixRQUFLLGNBQWMsQ0FBQyxXQUFZTCxRQUFPLE9BQVEsR0FBSTtBQUNsRCxtQkFBYSxXQUFZLFVBQVc7QUFBQSxJQUNyQztBQUNBLFFBQUssY0FBYyxDQUFDLFdBQVlBLFFBQU8sT0FBUSxHQUFJO0FBQ2xELG1CQUFhLFdBQVksWUFBWSxZQUFhO0FBQUEsSUFDbkQ7QUFDQSxXQUFPLGFBQWMsU0FBVSxNQUFNLFNBQVMsU0FBUyxLQUFNO0FBQzVELFVBQUksTUFBTUQsSUFBRyxNQUFNLFlBQ2xCLFNBQVMsQ0FBQyxHQUNWLFVBQVUsQ0FBQyxHQUNYLGNBQWMsUUFBUSxRQUd0QixRQUFRLFFBQ1A7QUFBQSxRQUFrQixZQUFZO0FBQUEsUUFDN0IsUUFBUSxXQUFXLENBQUUsT0FBUSxJQUFJO0FBQUEsUUFBUyxDQUFDO0FBQUEsTUFBRSxHQUcvQyxZQUFZTSxlQUFlLFFBQVEsQ0FBQyxZQUNuQyxTQUFVLE9BQU8sUUFBUUEsWUFBVyxTQUFTLEdBQUksSUFDakQ7QUFFRixVQUFLLFNBQVU7QUFJZCxxQkFBYSxlQUFnQixPQUFPQSxhQUFZLGVBQWU7QUFBQTtBQUFBLFVBRzlELENBQUM7QUFBQTtBQUFBO0FBQUEsVUFHRDtBQUFBO0FBR0QsZ0JBQVMsV0FBVyxZQUFZLFNBQVMsR0FBSTtBQUFBLE1BQzlDLE9BQU87QUFDTixxQkFBYTtBQUFBLE1BQ2Q7QUFHQSxVQUFLLFlBQWE7QUFDakIsZUFBTyxTQUFVLFlBQVksT0FBUTtBQUNyQyxtQkFBWSxNQUFNLENBQUMsR0FBRyxTQUFTLEdBQUk7QUFHbkMsUUFBQU4sS0FBSSxLQUFLO0FBQ1QsZUFBUUEsTUFBTTtBQUNiLGNBQU8sT0FBTyxLQUFNQSxFQUFFLEdBQU07QUFDM0IsdUJBQVksUUFBU0EsRUFBRSxDQUFFLElBQUksRUFBRyxVQUFXLFFBQVNBLEVBQUUsQ0FBRSxJQUFJO0FBQUEsVUFDN0Q7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUVBLFVBQUssTUFBTztBQUNYLFlBQUssY0FBY00sWUFBWTtBQUM5QixjQUFLLFlBQWE7QUFHakIsbUJBQU8sQ0FBQztBQUNSLFlBQUFOLEtBQUksV0FBVztBQUNmLG1CQUFRQSxNQUFNO0FBQ2Isa0JBQU8sT0FBTyxXQUFZQSxFQUFFLEdBQU07QUFHakMscUJBQUssS0FBUSxVQUFXQSxFQUFFLElBQUksSUFBTztBQUFBLGNBQ3RDO0FBQUEsWUFDRDtBQUNBLHVCQUFZLE1BQVEsYUFBYSxDQUFDLEdBQUssTUFBTSxHQUFJO0FBQUEsVUFDbEQ7QUFHQSxVQUFBQSxLQUFJLFdBQVc7QUFDZixpQkFBUUEsTUFBTTtBQUNiLGlCQUFPLE9BQU8sV0FBWUEsRUFBRSxPQUN6QixPQUFPLGFBQWEsUUFBUSxLQUFNLE1BQU0sSUFBSyxJQUFJLE9BQVFBLEVBQUUsS0FBTSxJQUFLO0FBRXhFLG1CQUFNLElBQUssSUFBSSxFQUFHLFFBQVMsSUFBSyxJQUFJO0FBQUEsWUFDckM7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLE1BR0QsT0FBTztBQUNOLHFCQUFhO0FBQUEsVUFDWixlQUFlLFVBQ2QsV0FBVyxPQUFRLGFBQWEsV0FBVyxNQUFPLElBQ2xEO0FBQUEsUUFDRjtBQUNBLFlBQUssWUFBYTtBQUNqQixxQkFBWSxNQUFNLFNBQVMsWUFBWSxHQUFJO0FBQUEsUUFDNUMsT0FBTztBQUNOLGVBQUssTUFBTyxTQUFTLFVBQVc7QUFBQSxRQUNqQztBQUFBLE1BQ0Q7QUFBQSxJQUNELENBQUU7QUFBQSxFQUNIO0FBRUEsV0FBUyxrQkFBbUIsUUFBUztBQUNwQyxRQUFJLGNBQWMsU0FBUyxHQUMxQixNQUFNLE9BQU8sUUFDYixrQkFBa0JDLFFBQU8sS0FBSyxTQUFVLE9BQVEsQ0FBRSxFQUFFLElBQUssR0FDekQsbUJBQW1CLG1CQUFtQkEsUUFBTyxLQUFLLFNBQVUsR0FBSSxHQUNoRUQsS0FBSSxrQkFBa0IsSUFBSSxHQUcxQixlQUFlLGNBQWUsU0FBVSxNQUFPO0FBQzlDLGFBQU8sU0FBUztBQUFBLElBQ2pCLEdBQUcsa0JBQWtCLElBQUssR0FDMUIsa0JBQWtCLGNBQWUsU0FBVSxNQUFPO0FBQ2pELGFBQU8sUUFBUSxLQUFNLGNBQWMsSUFBSyxJQUFJO0FBQUEsSUFDN0MsR0FBRyxrQkFBa0IsSUFBSyxHQUMxQixXQUFXLENBQUUsU0FBVSxNQUFNLFNBQVMsS0FBTTtBQU0zQyxVQUFJLE1BQVEsQ0FBQyxvQkFBcUIsT0FBTyxXQUFXLHVCQUNqRCxlQUFlLFNBQVUsV0FDMUIsYUFBYyxNQUFNLFNBQVMsR0FBSSxJQUNqQyxnQkFBaUIsTUFBTSxTQUFTLEdBQUk7QUFJdEMscUJBQWU7QUFDZixhQUFPO0FBQUEsSUFDUixDQUFFO0FBRUgsV0FBUUEsS0FBSSxLQUFLQSxNQUFNO0FBQ3RCLFVBQU8sVUFBVUMsUUFBTyxLQUFLLFNBQVUsT0FBUUQsRUFBRSxFQUFFLElBQUssR0FBTTtBQUM3RCxtQkFBVyxDQUFFLGNBQWUsZUFBZ0IsUUFBUyxHQUFHLE9BQVEsQ0FBRTtBQUFBLE1BQ25FLE9BQU87QUFDTixrQkFBVUMsUUFBTyxLQUFLLE9BQVEsT0FBUUQsRUFBRSxFQUFFLElBQUssRUFBRSxNQUFPLE1BQU0sT0FBUUEsRUFBRSxFQUFFLE9BQVE7QUFHbEYsWUFBSyxRQUFTQyxRQUFPLE9BQVEsR0FBSTtBQUdoQyxjQUFJLEVBQUVEO0FBQ04saUJBQVEsSUFBSSxLQUFLLEtBQU07QUFDdEIsZ0JBQUtDLFFBQU8sS0FBSyxTQUFVLE9BQVEsQ0FBRSxFQUFFLElBQUssR0FBSTtBQUMvQztBQUFBLFlBQ0Q7QUFBQSxVQUNEO0FBQ0EsaUJBQU87QUFBQSxZQUNORCxLQUFJLEtBQUssZUFBZ0IsUUFBUztBQUFBLFlBQ2xDQSxLQUFJLEtBQUs7QUFBQTtBQUFBLGNBR1IsT0FBTyxNQUFPLEdBQUdBLEtBQUksQ0FBRSxFQUNyQixPQUFRLEVBQUUsT0FBTyxPQUFRQSxLQUFJLENBQUUsRUFBRSxTQUFTLE1BQU0sTUFBTSxHQUFHLENBQUU7QUFBQSxZQUM5RCxFQUFFLFFBQVMsVUFBVSxJQUFLO0FBQUEsWUFDMUI7QUFBQSxZQUNBQSxLQUFJLEtBQUssa0JBQW1CLE9BQU8sTUFBT0EsSUFBRyxDQUFFLENBQUU7QUFBQSxZQUNqRCxJQUFJLE9BQU8sa0JBQXFCLFNBQVMsT0FBTyxNQUFPLENBQUUsQ0FBSTtBQUFBLFlBQzdELElBQUksT0FBTyxXQUFZLE1BQU87QUFBQSxVQUMvQjtBQUFBLFFBQ0Q7QUFDQSxpQkFBUyxLQUFNLE9BQVE7QUFBQSxNQUN4QjtBQUFBLElBQ0Q7QUFFQSxXQUFPLGVBQWdCLFFBQVM7QUFBQSxFQUNqQztBQUVBLFdBQVMseUJBQTBCLGlCQUFpQixhQUFjO0FBQ2pFLFFBQUksUUFBUSxZQUFZLFNBQVMsR0FDaEMsWUFBWSxnQkFBZ0IsU0FBUyxHQUNyQyxlQUFlLFNBQVUsTUFBTSxTQUFTLEtBQUssU0FBUyxXQUFZO0FBQ2pFLFVBQUksTUFBTSxHQUFHLFNBQ1osZUFBZSxHQUNmQSxLQUFJLEtBQ0osWUFBWSxRQUFRLENBQUMsR0FDckIsYUFBYSxDQUFDLEdBQ2QsZ0JBQWdCLGtCQUdoQixRQUFRLFFBQVEsYUFBYUMsUUFBTyxLQUFLLEtBQUssSUFBSyxLQUFLLFNBQVUsR0FHbEUsZ0JBQWtCLFdBQVcsaUJBQWlCLE9BQU8sSUFBSSxLQUFLLE9BQU8sS0FBSztBQUUzRSxVQUFLLFdBQVk7QUFNaEIsMkJBQW1CLFdBQVcsWUFBWSxXQUFXO0FBQUEsTUFDdEQ7QUFHQSxjQUFVLE9BQU8sTUFBT0QsRUFBRSxNQUFPLE1BQU1BLE1BQU07QUFDNUMsWUFBSyxhQUFhLE1BQU87QUFDeEIsY0FBSTtBQU1KLGNBQUssQ0FBQyxXQUFXLEtBQUssaUJBQWlCLFVBQVc7QUFDakQsd0JBQWEsSUFBSztBQUNsQixrQkFBTSxDQUFDO0FBQUEsVUFDUjtBQUNBLGlCQUFVLFVBQVUsZ0JBQWlCLEdBQUksR0FBTTtBQUM5QyxnQkFBSyxRQUFTLE1BQU0sV0FBVyxVQUFVLEdBQUksR0FBSTtBQUNoRCxtQkFBSyxLQUFNLFNBQVMsSUFBSztBQUN6QjtBQUFBLFlBQ0Q7QUFBQSxVQUNEO0FBQ0EsY0FBSyxXQUFZO0FBQ2hCLHNCQUFVO0FBQUEsVUFDWDtBQUFBLFFBQ0Q7QUFHQSxZQUFLLE9BQVE7QUFHWixjQUFPLE9BQU8sQ0FBQyxXQUFXLE1BQVM7QUFDbEM7QUFBQSxVQUNEO0FBR0EsY0FBSyxNQUFPO0FBQ1gsc0JBQVUsS0FBTSxJQUFLO0FBQUEsVUFDdEI7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUlBLHNCQUFnQkE7QUFTaEIsVUFBSyxTQUFTQSxPQUFNLGNBQWU7QUFDbEMsWUFBSTtBQUNKLGVBQVUsVUFBVSxZQUFhLEdBQUksR0FBTTtBQUMxQyxrQkFBUyxXQUFXLFlBQVksU0FBUyxHQUFJO0FBQUEsUUFDOUM7QUFFQSxZQUFLLE1BQU87QUFHWCxjQUFLLGVBQWUsR0FBSTtBQUN2QixtQkFBUUEsTUFBTTtBQUNiLGtCQUFLLEVBQUcsVUFBV0EsRUFBRSxLQUFLLFdBQVlBLEVBQUUsSUFBTTtBQUM3QywyQkFBWUEsRUFBRSxJQUFJLElBQUksS0FBTSxPQUFRO0FBQUEsY0FDckM7QUFBQSxZQUNEO0FBQUEsVUFDRDtBQUdBLHVCQUFhLFNBQVUsVUFBVztBQUFBLFFBQ25DO0FBR0EsYUFBSyxNQUFPLFNBQVMsVUFBVztBQUdoQyxZQUFLLGFBQWEsQ0FBQyxRQUFRLFdBQVcsU0FBUyxLQUM1QyxlQUFlLFlBQVksU0FBVyxHQUFJO0FBRTVDLFVBQUFDLFFBQU8sV0FBWSxPQUFRO0FBQUEsUUFDNUI7QUFBQSxNQUNEO0FBR0EsVUFBSyxXQUFZO0FBQ2hCLGtCQUFVO0FBQ1YsMkJBQW1CO0FBQUEsTUFDcEI7QUFFQSxhQUFPO0FBQUEsSUFDUjtBQUVELFdBQU8sUUFDTixhQUFjLFlBQWEsSUFDM0I7QUFBQSxFQUNGO0FBRUEsV0FBUyxRQUFTLFVBQVUsT0FBZ0M7QUFDM0QsUUFBSUQsSUFDSCxjQUFjLENBQUMsR0FDZixrQkFBa0IsQ0FBQyxHQUNuQixTQUFTLGNBQWUsV0FBVyxHQUFJO0FBRXhDLFFBQUssQ0FBQyxRQUFTO0FBR2QsVUFBSyxDQUFDLE9BQVE7QUFDYixnQkFBUSxTQUFVLFFBQVM7QUFBQSxNQUM1QjtBQUNBLE1BQUFBLEtBQUksTUFBTTtBQUNWLGFBQVFBLE1BQU07QUFDYixpQkFBUyxrQkFBbUIsTUFBT0EsRUFBRSxDQUFFO0FBQ3ZDLFlBQUssT0FBUUMsUUFBTyxPQUFRLEdBQUk7QUFDL0Isc0JBQVksS0FBTSxNQUFPO0FBQUEsUUFDMUIsT0FBTztBQUNOLDBCQUFnQixLQUFNLE1BQU87QUFBQSxRQUM5QjtBQUFBLE1BQ0Q7QUFHQSxlQUFTO0FBQUEsUUFBZTtBQUFBLFFBQ3ZCLHlCQUEwQixpQkFBaUIsV0FBWTtBQUFBLE1BQUU7QUFHMUQsYUFBTyxXQUFXO0FBQUEsSUFDbkI7QUFDQSxXQUFPO0FBQUEsRUFDUjtBQVdBLFdBQVMsT0FBUSxVQUFVLFNBQVMsU0FBUyxNQUFPO0FBQ25ELFFBQUlELElBQUcsUUFBUSxPQUFPLE1BQU1PLE9BQzNCLFdBQVcsT0FBTyxhQUFhLGNBQWMsVUFDN0MsUUFBUSxDQUFDLFFBQVEsU0FBWSxXQUFXLFNBQVMsWUFBWSxRQUFXO0FBRXpFLGNBQVUsV0FBVyxDQUFDO0FBSXRCLFFBQUssTUFBTSxXQUFXLEdBQUk7QUFHekIsZUFBUyxNQUFPLENBQUUsSUFBSSxNQUFPLENBQUUsRUFBRSxNQUFPLENBQUU7QUFDMUMsVUFBSyxPQUFPLFNBQVMsTUFBTyxRQUFRLE9BQVEsQ0FBRSxHQUFJLFNBQVMsUUFDekQsUUFBUSxhQUFhLEtBQUssa0JBQzFCTixRQUFPLEtBQUssU0FBVSxPQUFRLENBQUUsRUFBRSxJQUFLLEdBQUk7QUFFNUMsbUJBQVlBLFFBQU8sS0FBSyxLQUFLO0FBQUEsVUFDNUIsaUJBQWtCLE1BQU0sUUFBUyxDQUFFLENBQUU7QUFBQSxVQUNyQztBQUFBLFFBQ0QsS0FBSyxDQUFDLEdBQUssQ0FBRTtBQUNiLFlBQUssQ0FBQyxTQUFVO0FBQ2YsaUJBQU87QUFBQSxRQUdSLFdBQVksVUFBVztBQUN0QixvQkFBVSxRQUFRO0FBQUEsUUFDbkI7QUFFQSxtQkFBVyxTQUFTLE1BQU8sT0FBTyxNQUFNLEVBQUUsTUFBTSxNQUFPO0FBQUEsTUFDeEQ7QUFHQSxNQUFBRCxLQUFJLFVBQVUsYUFBYSxLQUFNLFFBQVMsSUFBSSxJQUFJLE9BQU87QUFDekQsYUFBUUEsTUFBTTtBQUNiLGdCQUFRLE9BQVFBLEVBQUU7QUFHbEIsWUFBS0MsUUFBTyxLQUFLLFNBQVksT0FBTyxNQUFNLElBQU8sR0FBSTtBQUNwRDtBQUFBLFFBQ0Q7QUFDQSxZQUFPTSxRQUFPTixRQUFPLEtBQUssS0FBTSxJQUFLLEdBQU07QUFHMUMsY0FBTyxPQUFPTTtBQUFBLFlBQ2IsaUJBQWtCLE1BQU0sUUFBUyxDQUFFLENBQUU7QUFBQSxZQUNyQyxTQUFTLEtBQU0sT0FBUSxDQUFFLEVBQUUsSUFBSyxLQUMvQixZQUFhLFFBQVEsVUFBVyxLQUFLO0FBQUEsVUFDdkMsR0FBTTtBQUdMLG1CQUFPLE9BQVFQLElBQUcsQ0FBRTtBQUNwQix1QkFBVyxLQUFLLFVBQVUsV0FBWSxNQUFPO0FBQzdDLGdCQUFLLENBQUMsVUFBVztBQUNoQixtQkFBSyxNQUFPLFNBQVMsSUFBSztBQUMxQixxQkFBTztBQUFBLFlBQ1I7QUFFQTtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFJQSxLQUFFLFlBQVksUUFBUyxVQUFVLEtBQU07QUFBQSxNQUN0QztBQUFBLE1BQ0E7QUFBQSxNQUNBLENBQUM7QUFBQSxNQUNEO0FBQUEsTUFDQSxDQUFDLFdBQVcsU0FBUyxLQUFNLFFBQVMsS0FBSyxZQUFhLFFBQVEsVUFBVyxLQUFLO0FBQUEsSUFDL0U7QUFDQSxXQUFPO0FBQUEsRUFDUjtBQUdBLGNBQVk7QUFFWixFQUFBQyxRQUFPLE9BQU87QUFJZCxPQUFLLFVBQVU7QUFDZixPQUFLLFNBQVM7QUFDZCxPQUFLLGNBQWM7QUFDbkIsT0FBSyxXQUFXO0FBRWhCLFdBQVMsSUFBSyxNQUFNSSxNQUFLLE9BQVE7QUFDaEMsUUFBSSxVQUFVLENBQUMsR0FDZCxXQUFXLFVBQVU7QUFFdEIsWUFBVSxPQUFPLEtBQU1BLElBQUksTUFBTyxLQUFLLGFBQWEsR0FBSTtBQUN2RCxVQUFLLEtBQUssYUFBYSxHQUFJO0FBQzFCLFlBQUssWUFBWUosUUFBUSxJQUFLLEVBQUUsR0FBSSxLQUFNLEdBQUk7QUFDN0M7QUFBQSxRQUNEO0FBQ0EsZ0JBQVEsS0FBTSxJQUFLO0FBQUEsTUFDcEI7QUFBQSxJQUNEO0FBQ0EsV0FBTztBQUFBLEVBQ1I7QUFFQSxXQUFTLFNBQVUsR0FBRyxNQUFPO0FBQzVCLFFBQUksVUFBVSxDQUFDO0FBRWYsV0FBUSxHQUFHLElBQUksRUFBRSxhQUFjO0FBQzlCLFVBQUssRUFBRSxhQUFhLEtBQUssTUFBTSxNQUFPO0FBQ3JDLGdCQUFRLEtBQU0sQ0FBRTtBQUFBLE1BQ2pCO0FBQUEsSUFDRDtBQUVBLFdBQU87QUFBQSxFQUNSO0FBRUEsTUFBSSxnQkFBZ0JBLFFBQU8sS0FBSyxNQUFNO0FBSXRDLE1BQUksYUFBYTtBQUVqQixXQUFTLGNBQWUsT0FBUTtBQUMvQixXQUFPLE1BQU8sQ0FBRSxNQUFNLE9BQ3JCLE1BQU8sTUFBTSxTQUFTLENBQUUsTUFBTSxPQUM5QixNQUFNLFVBQVU7QUFBQSxFQUNsQjtBQUdBLFdBQVMsT0FBUSxVQUFVLFdBQVcsS0FBTTtBQUMzQyxRQUFLLE9BQU8sY0FBYyxZQUFhO0FBQ3RDLGFBQU9BLFFBQU8sS0FBTSxVQUFVLFNBQVUsTUFBTUQsSUFBSTtBQUNqRCxlQUFPLENBQUMsQ0FBQyxVQUFVLEtBQU0sTUFBTUEsSUFBRyxJQUFLLE1BQU07QUFBQSxNQUM5QyxDQUFFO0FBQUEsSUFDSDtBQUdBLFFBQUssVUFBVSxVQUFXO0FBQ3pCLGFBQU9DLFFBQU8sS0FBTSxVQUFVLFNBQVUsTUFBTztBQUM5QyxlQUFTLFNBQVMsY0FBZ0I7QUFBQSxNQUNuQyxDQUFFO0FBQUEsSUFDSDtBQUdBLFFBQUssT0FBTyxjQUFjLFVBQVc7QUFDcEMsYUFBT0EsUUFBTyxLQUFNLFVBQVUsU0FBVSxNQUFPO0FBQzlDLGVBQVMsUUFBUSxLQUFNLFdBQVcsSUFBSyxJQUFJLE9BQVM7QUFBQSxNQUNyRCxDQUFFO0FBQUEsSUFDSDtBQUdBLFdBQU9BLFFBQU8sT0FBUSxXQUFXLFVBQVUsR0FBSTtBQUFBLEVBQ2hEO0FBRUEsRUFBQUEsUUFBTyxTQUFTLFNBQVUsTUFBTSxPQUFPLEtBQU07QUFDNUMsUUFBSSxPQUFPLE1BQU8sQ0FBRTtBQUVwQixRQUFLLEtBQU07QUFDVixhQUFPLFVBQVUsT0FBTztBQUFBLElBQ3pCO0FBRUEsUUFBSyxNQUFNLFdBQVcsS0FBSyxLQUFLLGFBQWEsR0FBSTtBQUNoRCxhQUFPQSxRQUFPLEtBQUssZ0JBQWlCLE1BQU0sSUFBSyxJQUFJLENBQUUsSUFBSyxJQUFJLENBQUM7QUFBQSxJQUNoRTtBQUVBLFdBQU9BLFFBQU8sS0FBSyxRQUFTLE1BQU1BLFFBQU8sS0FBTSxPQUFPLFNBQVVPLE9BQU87QUFDdEUsYUFBT0EsTUFBSyxhQUFhO0FBQUEsSUFDMUIsQ0FBRSxDQUFFO0FBQUEsRUFDTDtBQUVBLEVBQUFQLFFBQU8sR0FBRyxPQUFRO0FBQUEsSUFDakIsTUFBTSxTQUFVLFVBQVc7QUFDMUIsVUFBSUQsSUFBRyxLQUNOLE1BQU0sS0FBSyxRQUNYLE9BQU87QUFFUixVQUFLLE9BQU8sYUFBYSxVQUFXO0FBQ25DLGVBQU8sS0FBSyxVQUFXQyxRQUFRLFFBQVMsRUFBRSxPQUFRLFdBQVc7QUFDNUQsZUFBTUQsS0FBSSxHQUFHQSxLQUFJLEtBQUtBLE1BQU07QUFDM0IsZ0JBQUtDLFFBQU8sU0FBVSxLQUFNRCxFQUFFLEdBQUcsSUFBSyxHQUFJO0FBQ3pDLHFCQUFPO0FBQUEsWUFDUjtBQUFBLFVBQ0Q7QUFBQSxRQUNELENBQUUsQ0FBRTtBQUFBLE1BQ0w7QUFFQSxZQUFNLEtBQUssVUFBVyxDQUFDLENBQUU7QUFFekIsV0FBTUEsS0FBSSxHQUFHQSxLQUFJLEtBQUtBLE1BQU07QUFDM0IsUUFBQUMsUUFBTyxLQUFNLFVBQVUsS0FBTUQsRUFBRSxHQUFHLEdBQUk7QUFBQSxNQUN2QztBQUVBLGFBQU8sTUFBTSxJQUFJQyxRQUFPLFdBQVksR0FBSSxJQUFJO0FBQUEsSUFDN0M7QUFBQSxJQUNBLFFBQVEsU0FBVSxVQUFXO0FBQzVCLGFBQU8sS0FBSyxVQUFXLE9BQVEsTUFBTSxZQUFZLENBQUMsR0FBRyxLQUFNLENBQUU7QUFBQSxJQUM5RDtBQUFBLElBQ0EsS0FBSyxTQUFVLFVBQVc7QUFDekIsYUFBTyxLQUFLLFVBQVcsT0FBUSxNQUFNLFlBQVksQ0FBQyxHQUFHLElBQUssQ0FBRTtBQUFBLElBQzdEO0FBQUEsSUFDQSxJQUFJLFNBQVUsVUFBVztBQUN4QixhQUFPLENBQUMsQ0FBQztBQUFBLFFBQ1I7QUFBQTtBQUFBO0FBQUEsUUFJQSxPQUFPLGFBQWEsWUFBWSxjQUFjLEtBQU0sUUFBUyxJQUM1REEsUUFBUSxRQUFTLElBQ2pCLFlBQVksQ0FBQztBQUFBLFFBQ2Q7QUFBQSxNQUNELEVBQUU7QUFBQSxJQUNIO0FBQUEsRUFDRCxDQUFFO0FBS0YsTUFBSSxZQU1ILGFBQWEsdUNBRWIsT0FBT0EsUUFBTyxHQUFHLE9BQU8sU0FBVSxVQUFVLFNBQVU7QUFDckQsUUFBSSxPQUFPO0FBR1gsUUFBSyxDQUFDLFVBQVc7QUFDaEIsYUFBTztBQUFBLElBQ1I7QUFHQSxRQUFLLFNBQVMsVUFBVztBQUN4QixXQUFNLENBQUUsSUFBSTtBQUNaLFdBQUssU0FBUztBQUNkLGFBQU87QUFBQSxJQUlSLFdBQVksT0FBTyxhQUFhLFlBQWE7QUFDNUMsYUFBTyxXQUFXLFVBQVUsU0FDM0IsV0FBVyxNQUFPLFFBQVM7QUFBQTtBQUFBLFFBRzNCLFNBQVVBLE9BQU87QUFBQTtBQUFBLElBRW5CLE9BQU87QUFHTixjQUFRLFdBQVc7QUFDbkIsVUFBSyxjQUFlLEtBQU0sR0FBSTtBQUs3QixnQkFBUSxDQUFFLE1BQU0sVUFBVSxJQUFLO0FBQUEsTUFHaEMsV0FBWSxPQUFPLGFBQWEsVUFBVztBQUMxQyxnQkFBUSxXQUFXLEtBQU0sUUFBUztBQUFBLE1BQ25DLE9BQU87QUFDTixlQUFPQSxRQUFPLFVBQVcsVUFBVSxJQUFLO0FBQUEsTUFDekM7QUFJQSxVQUFLLFVBQVcsTUFBTyxDQUFFLEtBQUssQ0FBQyxVQUFZO0FBRzFDLFlBQUssTUFBTyxDQUFFLEdBQUk7QUFDakIsb0JBQVUsbUJBQW1CQSxVQUFTLFFBQVMsQ0FBRSxJQUFJO0FBSXJELFVBQUFBLFFBQU8sTUFBTyxNQUFNQSxRQUFPO0FBQUEsWUFDMUIsTUFBTyxDQUFFO0FBQUEsWUFDVCxXQUFXLFFBQVEsV0FBVyxRQUFRLGlCQUFpQixVQUFVO0FBQUEsWUFDakU7QUFBQSxVQUNELENBQUU7QUFHRixjQUFLLFdBQVcsS0FBTSxNQUFPLENBQUUsQ0FBRSxLQUFLQSxRQUFPLGNBQWUsT0FBUSxHQUFJO0FBQ3ZFLGlCQUFNLFNBQVMsU0FBVTtBQUd4QixrQkFBSyxPQUFPLEtBQU0sS0FBTSxNQUFNLFlBQWE7QUFDMUMscUJBQU0sS0FBTSxFQUFHLFFBQVMsS0FBTSxDQUFFO0FBQUEsY0FHakMsT0FBTztBQUNOLHFCQUFLLEtBQU0sT0FBTyxRQUFTLEtBQU0sQ0FBRTtBQUFBLGNBQ3BDO0FBQUEsWUFDRDtBQUFBLFVBQ0Q7QUFFQSxpQkFBTztBQUFBLFFBR1IsT0FBTztBQUNOLGlCQUFPLFdBQVcsZUFBZ0IsTUFBTyxDQUFFLENBQUU7QUFFN0MsY0FBSyxNQUFPO0FBR1gsaUJBQU0sQ0FBRSxJQUFJO0FBQ1osaUJBQUssU0FBUztBQUFBLFVBQ2Y7QUFDQSxpQkFBTztBQUFBLFFBQ1I7QUFBQSxNQUdELFdBQVksQ0FBQyxXQUFXLFFBQVEsUUFBUztBQUN4QyxnQkFBUyxXQUFXLFlBQWEsS0FBTSxRQUFTO0FBQUEsTUFJakQsT0FBTztBQUNOLGVBQU8sS0FBSyxZQUFhLE9BQVEsRUFBRSxLQUFNLFFBQVM7QUFBQSxNQUNuRDtBQUFBLElBQ0Q7QUFBQSxFQUVEO0FBR0QsT0FBSyxZQUFZQSxRQUFPO0FBR3hCLGVBQWFBLFFBQVEsVUFBVztBQUVoQyxNQUFJLGVBQWUsa0NBR2xCLG1CQUFtQjtBQUFBLElBQ2xCLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNQO0FBRUQsRUFBQUEsUUFBTyxHQUFHLE9BQVE7QUFBQSxJQUNqQixLQUFLLFNBQVUsUUFBUztBQUN2QixVQUFJLFVBQVVBLFFBQVEsUUFBUSxJQUFLLEdBQ2xDLElBQUksUUFBUTtBQUViLGFBQU8sS0FBSyxPQUFRLFdBQVc7QUFDOUIsWUFBSUQsS0FBSTtBQUNSLGVBQVFBLEtBQUksR0FBR0EsTUFBTTtBQUNwQixjQUFLQyxRQUFPLFNBQVUsTUFBTSxRQUFTRCxFQUFFLENBQUUsR0FBSTtBQUM1QyxtQkFBTztBQUFBLFVBQ1I7QUFBQSxRQUNEO0FBQUEsTUFDRCxDQUFFO0FBQUEsSUFDSDtBQUFBLElBRUEsU0FBUyxTQUFVLFdBQVcsU0FBVTtBQUN2QyxVQUFJLEtBQ0hBLEtBQUksR0FDSixJQUFJLEtBQUssUUFDVCxVQUFVLENBQUMsR0FDWCxVQUFVLE9BQU8sY0FBYyxZQUFZQyxRQUFRLFNBQVU7QUFHOUQsVUFBSyxDQUFDLGNBQWMsS0FBTSxTQUFVLEdBQUk7QUFDdkMsZUFBUUQsS0FBSSxHQUFHQSxNQUFNO0FBQ3BCLGVBQU0sTUFBTSxLQUFNQSxFQUFFLEdBQUcsT0FBTyxRQUFRLFNBQVMsTUFBTSxJQUFJLFlBQWE7QUFHckUsZ0JBQUssSUFBSSxXQUFXLE9BQVEsVUFDM0IsUUFBUSxNQUFPLEdBQUksSUFBSTtBQUFBO0FBQUEsY0FHdkIsSUFBSSxhQUFhLEtBQ2hCQyxRQUFPLEtBQUssZ0JBQWlCLEtBQUssU0FBVTtBQUFBLGdCQUFNO0FBRW5ELHNCQUFRLEtBQU0sR0FBSTtBQUNsQjtBQUFBLFlBQ0Q7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFFQSxhQUFPLEtBQUssVUFBVyxRQUFRLFNBQVMsSUFBSUEsUUFBTyxXQUFZLE9BQVEsSUFBSSxPQUFRO0FBQUEsSUFDcEY7QUFBQTtBQUFBLElBR0EsT0FBTyxTQUFVLE1BQU87QUFHdkIsVUFBSyxDQUFDLE1BQU87QUFDWixlQUFTLEtBQU0sQ0FBRSxLQUFLLEtBQU0sQ0FBRSxFQUFFLGFBQWUsS0FBSyxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVM7QUFBQSxNQUNoRjtBQUdBLFVBQUssT0FBTyxTQUFTLFVBQVc7QUFDL0IsZUFBTyxRQUFRLEtBQU1BLFFBQVEsSUFBSyxHQUFHLEtBQU0sQ0FBRSxDQUFFO0FBQUEsTUFDaEQ7QUFHQSxhQUFPLFFBQVE7QUFBQSxRQUFNO0FBQUE7QUFBQSxRQUdwQixLQUFLLFNBQVMsS0FBTSxDQUFFLElBQUk7QUFBQSxNQUMzQjtBQUFBLElBQ0Q7QUFBQSxJQUVBLEtBQUssU0FBVSxVQUFVLFNBQVU7QUFDbEMsYUFBTyxLQUFLO0FBQUEsUUFDWEEsUUFBTztBQUFBLFVBQ05BLFFBQU8sTUFBTyxLQUFLLElBQUksR0FBR0EsUUFBUSxVQUFVLE9BQVEsQ0FBRTtBQUFBLFFBQ3ZEO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUVBLFNBQVMsU0FBVSxVQUFXO0FBQzdCLGFBQU8sS0FBSztBQUFBLFFBQUssWUFBWSxPQUM1QixLQUFLLGFBQWEsS0FBSyxXQUFXLE9BQVEsUUFBUztBQUFBLE1BQ3BEO0FBQUEsSUFDRDtBQUFBLEVBQ0QsQ0FBRTtBQUVGLFdBQVMsUUFBUyxLQUFLSSxNQUFNO0FBQzVCLFlBQVUsTUFBTSxJQUFLQSxJQUFJLE1BQU8sSUFBSSxhQUFhLEdBQUk7QUFBQSxJQUFDO0FBQ3RELFdBQU87QUFBQSxFQUNSO0FBRUEsRUFBQUosUUFBTyxLQUFNO0FBQUEsSUFDWixRQUFRLFNBQVUsTUFBTztBQUN4QixVQUFJLFNBQVMsS0FBSztBQUNsQixhQUFPLFVBQVUsT0FBTyxhQUFhLEtBQUssU0FBUztBQUFBLElBQ3BEO0FBQUEsSUFDQSxTQUFTLFNBQVUsTUFBTztBQUN6QixhQUFPLElBQUssTUFBTSxZQUFhO0FBQUEsSUFDaEM7QUFBQSxJQUNBLGNBQWMsU0FBVSxNQUFNLElBQUksT0FBUTtBQUN6QyxhQUFPLElBQUssTUFBTSxjQUFjLEtBQU07QUFBQSxJQUN2QztBQUFBLElBQ0EsTUFBTSxTQUFVLE1BQU87QUFDdEIsYUFBTyxRQUFTLE1BQU0sYUFBYztBQUFBLElBQ3JDO0FBQUEsSUFDQSxNQUFNLFNBQVUsTUFBTztBQUN0QixhQUFPLFFBQVMsTUFBTSxpQkFBa0I7QUFBQSxJQUN6QztBQUFBLElBQ0EsU0FBUyxTQUFVLE1BQU87QUFDekIsYUFBTyxJQUFLLE1BQU0sYUFBYztBQUFBLElBQ2pDO0FBQUEsSUFDQSxTQUFTLFNBQVUsTUFBTztBQUN6QixhQUFPLElBQUssTUFBTSxpQkFBa0I7QUFBQSxJQUNyQztBQUFBLElBQ0EsV0FBVyxTQUFVLE1BQU0sSUFBSSxPQUFRO0FBQ3RDLGFBQU8sSUFBSyxNQUFNLGVBQWUsS0FBTTtBQUFBLElBQ3hDO0FBQUEsSUFDQSxXQUFXLFNBQVUsTUFBTSxJQUFJLE9BQVE7QUFDdEMsYUFBTyxJQUFLLE1BQU0sbUJBQW1CLEtBQU07QUFBQSxJQUM1QztBQUFBLElBQ0EsVUFBVSxTQUFVLE1BQU87QUFDMUIsYUFBTyxVQUFZLEtBQUssY0FBYyxDQUFDLEdBQUksWUFBWSxJQUFLO0FBQUEsSUFDN0Q7QUFBQSxJQUNBLFVBQVUsU0FBVSxNQUFPO0FBQzFCLGFBQU8sU0FBVSxLQUFLLFVBQVc7QUFBQSxJQUNsQztBQUFBLElBQ0EsVUFBVSxTQUFVLE1BQU87QUFDMUIsVUFBSyxLQUFLLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxNQUs1QixTQUFVLEtBQUssZUFBZ0IsR0FBSTtBQUVuQyxlQUFPLEtBQUs7QUFBQSxNQUNiO0FBS0EsVUFBSyxTQUFVLE1BQU0sVUFBVyxHQUFJO0FBQ25DLGVBQU8sS0FBSyxXQUFXO0FBQUEsTUFDeEI7QUFFQSxhQUFPQSxRQUFPLE1BQU8sQ0FBQyxHQUFHLEtBQUssVUFBVztBQUFBLElBQzFDO0FBQUEsRUFDRCxHQUFHLFNBQVUsTUFBTSxJQUFLO0FBQ3ZCLElBQUFBLFFBQU8sR0FBSSxJQUFLLElBQUksU0FBVSxPQUFPLFVBQVc7QUFDL0MsVUFBSSxVQUFVQSxRQUFPLElBQUssTUFBTSxJQUFJLEtBQU07QUFFMUMsVUFBSyxLQUFLLE1BQU8sRUFBRyxNQUFNLFNBQVU7QUFDbkMsbUJBQVc7QUFBQSxNQUNaO0FBRUEsVUFBSyxZQUFZLE9BQU8sYUFBYSxVQUFXO0FBQy9DLGtCQUFVQSxRQUFPLE9BQVEsVUFBVSxPQUFRO0FBQUEsTUFDNUM7QUFFQSxVQUFLLEtBQUssU0FBUyxHQUFJO0FBR3RCLFlBQUssQ0FBQyxpQkFBa0IsSUFBSyxHQUFJO0FBQ2hDLFVBQUFBLFFBQU8sV0FBWSxPQUFRO0FBQUEsUUFDNUI7QUFHQSxZQUFLLGFBQWEsS0FBTSxJQUFLLEdBQUk7QUFDaEMsa0JBQVEsUUFBUTtBQUFBLFFBQ2pCO0FBQUEsTUFDRDtBQUVBLGFBQU8sS0FBSyxVQUFXLE9BQVE7QUFBQSxJQUNoQztBQUFBLEVBQ0QsQ0FBRTtBQUdGLFdBQVMsY0FBZSxTQUFVO0FBQ2pDLFFBQUksU0FBUyxDQUFDO0FBQ2QsSUFBQUEsUUFBTyxLQUFNLFFBQVEsTUFBTyxhQUFjLEtBQUssQ0FBQyxHQUFHLFNBQVUsR0FBRyxNQUFPO0FBQ3RFLGFBQVEsSUFBSyxJQUFJO0FBQUEsSUFDbEIsQ0FBRTtBQUNGLFdBQU87QUFBQSxFQUNSO0FBd0JBLEVBQUFBLFFBQU8sWUFBWSxTQUFVLFNBQVU7QUFJdEMsY0FBVSxPQUFPLFlBQVksV0FDNUIsY0FBZSxPQUFRLElBQ3ZCQSxRQUFPLE9BQVEsQ0FBQyxHQUFHLE9BQVE7QUFFNUIsUUFDQyxRQUdBLFFBR0EsT0FHQSxRQUdBLE9BQU8sQ0FBQyxHQUdSLFFBQVEsQ0FBQyxHQUdULGNBQWMsSUFHZCxPQUFPLFdBQVc7QUFHakIsZUFBUyxVQUFVLFFBQVE7QUFJM0IsY0FBUSxTQUFTO0FBQ2pCLGFBQVEsTUFBTSxRQUFRLGNBQWMsSUFBSztBQUN4QyxpQkFBUyxNQUFNLE1BQU07QUFDckIsZUFBUSxFQUFFLGNBQWMsS0FBSyxRQUFTO0FBR3JDLGNBQUssS0FBTSxXQUFZLEVBQUUsTUFBTyxPQUFRLENBQUUsR0FBRyxPQUFRLENBQUUsQ0FBRSxNQUFNLFNBQzlELFFBQVEsYUFBYztBQUd0QiwwQkFBYyxLQUFLO0FBQ25CLHFCQUFTO0FBQUEsVUFDVjtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBR0EsVUFBSyxDQUFDLFFBQVEsUUFBUztBQUN0QixpQkFBUztBQUFBLE1BQ1Y7QUFFQSxlQUFTO0FBR1QsVUFBSyxRQUFTO0FBR2IsWUFBSyxRQUFTO0FBQ2IsaUJBQU8sQ0FBQztBQUFBLFFBR1QsT0FBTztBQUNOLGlCQUFPO0FBQUEsUUFDUjtBQUFBLE1BQ0Q7QUFBQSxJQUNELEdBR0EsT0FBTztBQUFBO0FBQUEsTUFHTixLQUFLLFdBQVc7QUFDZixZQUFLLE1BQU87QUFHWCxjQUFLLFVBQVUsQ0FBQyxRQUFTO0FBQ3hCLDBCQUFjLEtBQUssU0FBUztBQUM1QixrQkFBTSxLQUFNLE1BQU87QUFBQSxVQUNwQjtBQUVBLFdBQUUsU0FBUyxJQUFLLE1BQU87QUFDdEIsWUFBQUEsUUFBTyxLQUFNLE1BQU0sU0FBVSxHQUFHLEtBQU07QUFDckMsa0JBQUssT0FBTyxRQUFRLFlBQWE7QUFDaEMsb0JBQUssQ0FBQyxRQUFRLFVBQVUsQ0FBQyxLQUFLLElBQUssR0FBSSxHQUFJO0FBQzFDLHVCQUFLLEtBQU0sR0FBSTtBQUFBLGdCQUNoQjtBQUFBLGNBQ0QsV0FBWSxPQUFPLElBQUksVUFBVSxPQUFRLEdBQUksTUFBTSxVQUFXO0FBRzdELG9CQUFLLEdBQUk7QUFBQSxjQUNWO0FBQUEsWUFDRCxDQUFFO0FBQUEsVUFDSCxHQUFLLFNBQVU7QUFFZixjQUFLLFVBQVUsQ0FBQyxRQUFTO0FBQ3hCLGlCQUFLO0FBQUEsVUFDTjtBQUFBLFFBQ0Q7QUFDQSxlQUFPO0FBQUEsTUFDUjtBQUFBO0FBQUEsTUFHQSxRQUFRLFdBQVc7QUFDbEIsUUFBQUEsUUFBTyxLQUFNLFdBQVcsU0FBVSxHQUFHLEtBQU07QUFDMUMsY0FBSTtBQUNKLGtCQUFVLFFBQVFBLFFBQU8sUUFBUyxLQUFLLE1BQU0sS0FBTSxLQUFNLElBQUs7QUFDN0QsaUJBQUssT0FBUSxPQUFPLENBQUU7QUFHdEIsZ0JBQUssU0FBUyxhQUFjO0FBQzNCO0FBQUEsWUFDRDtBQUFBLFVBQ0Q7QUFBQSxRQUNELENBQUU7QUFDRixlQUFPO0FBQUEsTUFDUjtBQUFBO0FBQUE7QUFBQSxNQUlBLEtBQUssU0FBVSxJQUFLO0FBQ25CLGVBQU8sS0FDTkEsUUFBTyxRQUFTLElBQUksSUFBSyxJQUFJLEtBQzdCLEtBQUssU0FBUztBQUFBLE1BQ2hCO0FBQUE7QUFBQSxNQUdBLE9BQU8sV0FBVztBQUNqQixZQUFLLE1BQU87QUFDWCxpQkFBTyxDQUFDO0FBQUEsUUFDVDtBQUNBLGVBQU87QUFBQSxNQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLQSxTQUFTLFdBQVc7QUFDbkIsaUJBQVMsUUFBUSxDQUFDO0FBQ2xCLGVBQU8sU0FBUztBQUNoQixlQUFPO0FBQUEsTUFDUjtBQUFBLE1BQ0EsVUFBVSxXQUFXO0FBQ3BCLGVBQU8sQ0FBQztBQUFBLE1BQ1Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtBLE1BQU0sV0FBVztBQUNoQixpQkFBUyxRQUFRLENBQUM7QUFDbEIsWUFBSyxDQUFDLFVBQVUsQ0FBQyxRQUFTO0FBQ3pCLGlCQUFPLFNBQVM7QUFBQSxRQUNqQjtBQUNBLGVBQU87QUFBQSxNQUNSO0FBQUEsTUFDQSxRQUFRLFdBQVc7QUFDbEIsZUFBTyxDQUFDLENBQUM7QUFBQSxNQUNWO0FBQUE7QUFBQSxNQUdBLFVBQVUsU0FBVSxTQUFTLE1BQU87QUFDbkMsWUFBSyxDQUFDLFFBQVM7QUFDZCxpQkFBTyxRQUFRLENBQUM7QUFDaEIsaUJBQU8sQ0FBRSxTQUFTLEtBQUssUUFBUSxLQUFLLE1BQU0sSUFBSSxJQUFLO0FBQ25ELGdCQUFNLEtBQU0sSUFBSztBQUNqQixjQUFLLENBQUMsUUFBUztBQUNkLGlCQUFLO0FBQUEsVUFDTjtBQUFBLFFBQ0Q7QUFDQSxlQUFPO0FBQUEsTUFDUjtBQUFBO0FBQUEsTUFHQSxNQUFNLFdBQVc7QUFDaEIsYUFBSyxTQUFVLE1BQU0sU0FBVTtBQUMvQixlQUFPO0FBQUEsTUFDUjtBQUFBO0FBQUEsTUFHQSxPQUFPLFdBQVc7QUFDakIsZUFBTyxDQUFDLENBQUM7QUFBQSxNQUNWO0FBQUEsSUFDRDtBQUVELFdBQU87QUFBQSxFQUNSO0FBRUEsV0FBUyxTQUFVLEdBQUk7QUFDdEIsV0FBTztBQUFBLEVBQ1I7QUFDQSxXQUFTLFFBQVMsSUFBSztBQUN0QixVQUFNO0FBQUEsRUFDUDtBQUVBLFdBQVMsV0FBWSxPQUFPLFNBQVMsUUFBUSxTQUFVO0FBQ3RELFFBQUk7QUFFSixRQUFJO0FBR0gsVUFBSyxTQUFTLFFBQVEsU0FBUyxNQUFNLGFBQWMsWUFBYTtBQUMvRCxlQUFPLEtBQU0sS0FBTSxFQUFFLEtBQU0sT0FBUSxFQUFFLEtBQU0sTUFBTztBQUFBLE1BR25ELFdBQVksU0FBUyxRQUFRLFNBQVMsTUFBTSxVQUFXLFlBQWE7QUFDbkUsZUFBTyxLQUFNLE9BQU8sU0FBUyxNQUFPO0FBQUEsTUFHckMsT0FBTztBQUtOLGdCQUFRLE1BQU8sUUFBVyxDQUFFLEtBQU0sRUFBRSxNQUFPLE9BQVEsQ0FBRTtBQUFBLE1BQ3REO0FBQUEsSUFLRCxTQUFVRyxRQUFRO0FBQ2pCLGFBQVFBLE1BQU07QUFBQSxJQUNmO0FBQUEsRUFDRDtBQUVBLEVBQUFILFFBQU8sT0FBUTtBQUFBLElBRWQsVUFBVSxTQUFVLE1BQU87QUFDMUIsVUFBSSxTQUFTO0FBQUE7QUFBQTtBQUFBLFFBSVg7QUFBQSxVQUFFO0FBQUEsVUFBVTtBQUFBLFVBQVlBLFFBQU8sVUFBVyxRQUFTO0FBQUEsVUFDbERBLFFBQU8sVUFBVyxRQUFTO0FBQUEsVUFBRztBQUFBLFFBQUU7QUFBQSxRQUNqQztBQUFBLFVBQUU7QUFBQSxVQUFXO0FBQUEsVUFBUUEsUUFBTyxVQUFXLGFBQWM7QUFBQSxVQUNwREEsUUFBTyxVQUFXLGFBQWM7QUFBQSxVQUFHO0FBQUEsVUFBRztBQUFBLFFBQVc7QUFBQSxRQUNsRDtBQUFBLFVBQUU7QUFBQSxVQUFVO0FBQUEsVUFBUUEsUUFBTyxVQUFXLGFBQWM7QUFBQSxVQUNuREEsUUFBTyxVQUFXLGFBQWM7QUFBQSxVQUFHO0FBQUEsVUFBRztBQUFBLFFBQVc7QUFBQSxNQUNuRCxHQUNBLFFBQVEsV0FDUixVQUFVO0FBQUEsUUFDVCxPQUFPLFdBQVc7QUFDakIsaUJBQU87QUFBQSxRQUNSO0FBQUEsUUFDQSxRQUFRLFdBQVc7QUFDbEIsbUJBQVMsS0FBTSxTQUFVLEVBQUUsS0FBTSxTQUFVO0FBQzNDLGlCQUFPO0FBQUEsUUFDUjtBQUFBLFFBQ0EsT0FBTyxTQUFVLElBQUs7QUFDckIsaUJBQU8sUUFBUSxLQUFNLE1BQU0sRUFBRztBQUFBLFFBQy9CO0FBQUE7QUFBQSxRQUdBLE1BQU0sV0FBNkM7QUFDbEQsY0FBSSxNQUFNO0FBRVYsaUJBQU9BLFFBQU8sU0FBVSxTQUFVLFVBQVc7QUFDNUMsWUFBQUEsUUFBTyxLQUFNLFFBQVEsU0FBVSxJQUFJLE9BQVE7QUFHMUMsa0JBQUksS0FBSyxPQUFPLElBQUssTUFBTyxDQUFFLENBQUUsTUFBTSxjQUNyQyxJQUFLLE1BQU8sQ0FBRSxDQUFFO0FBS2pCLHVCQUFVLE1BQU8sQ0FBRSxDQUFFLEVBQUcsV0FBVztBQUNsQyxvQkFBSSxXQUFXLE1BQU0sR0FBRyxNQUFPLE1BQU0sU0FBVTtBQUMvQyxvQkFBSyxZQUFZLE9BQU8sU0FBUyxZQUFZLFlBQWE7QUFDekQsMkJBQVMsUUFBUSxFQUNmLFNBQVUsU0FBUyxNQUFPLEVBQzFCLEtBQU0sU0FBUyxPQUFRLEVBQ3ZCLEtBQU0sU0FBUyxNQUFPO0FBQUEsZ0JBQ3pCLE9BQU87QUFDTiwyQkFBVSxNQUFPLENBQUUsSUFBSSxNQUFPO0FBQUEsb0JBQzdCO0FBQUEsb0JBQ0EsS0FBSyxDQUFFLFFBQVMsSUFBSTtBQUFBLGtCQUNyQjtBQUFBLGdCQUNEO0FBQUEsY0FDRCxDQUFFO0FBQUEsWUFDSCxDQUFFO0FBQ0Ysa0JBQU07QUFBQSxVQUNQLENBQUUsRUFBRSxRQUFRO0FBQUEsUUFDYjtBQUFBLFFBQ0EsTUFBTSxTQUFVLGFBQWEsWUFBWSxZQUFhO0FBQ3JELGNBQUksV0FBVztBQUNmLG1CQUFTLFFBQVMsT0FBT1EsV0FBVSxTQUFTLFNBQVU7QUFDckQsbUJBQU8sV0FBVztBQUNqQixrQkFBSSxPQUFPLE1BQ1YsT0FBTyxXQUNQLGFBQWEsV0FBVztBQUN2QixvQkFBSSxVQUFVO0FBS2Qsb0JBQUssUUFBUSxVQUFXO0FBQ3ZCO0FBQUEsZ0JBQ0Q7QUFFQSwyQkFBVyxRQUFRLE1BQU8sTUFBTSxJQUFLO0FBSXJDLG9CQUFLLGFBQWFBLFVBQVMsUUFBUSxHQUFJO0FBQ3RDLHdCQUFNLElBQUksVUFBVywwQkFBMkI7QUFBQSxnQkFDakQ7QUFNQSx1QkFBTztBQUFBO0FBQUE7QUFBQSxpQkFLSixPQUFPLGFBQWEsWUFDckIsT0FBTyxhQUFhLGVBQ3JCLFNBQVM7QUFHVixvQkFBSyxPQUFPLFNBQVMsWUFBYTtBQUdqQyxzQkFBSyxTQUFVO0FBQ2QseUJBQUs7QUFBQSxzQkFDSjtBQUFBLHNCQUNBLFFBQVMsVUFBVUEsV0FBVSxVQUFVLE9BQVE7QUFBQSxzQkFDL0MsUUFBUyxVQUFVQSxXQUFVLFNBQVMsT0FBUTtBQUFBLG9CQUMvQztBQUFBLGtCQUdELE9BQU87QUFHTjtBQUVBLHlCQUFLO0FBQUEsc0JBQ0o7QUFBQSxzQkFDQSxRQUFTLFVBQVVBLFdBQVUsVUFBVSxPQUFRO0FBQUEsc0JBQy9DLFFBQVMsVUFBVUEsV0FBVSxTQUFTLE9BQVE7QUFBQSxzQkFDOUM7QUFBQSx3QkFBUztBQUFBLHdCQUFVQTtBQUFBLHdCQUFVO0FBQUEsd0JBQzVCQSxVQUFTO0FBQUEsc0JBQVc7QUFBQSxvQkFDdEI7QUFBQSxrQkFDRDtBQUFBLGdCQUdELE9BQU87QUFJTixzQkFBSyxZQUFZLFVBQVc7QUFDM0IsMkJBQU87QUFDUCwyQkFBTyxDQUFFLFFBQVM7QUFBQSxrQkFDbkI7QUFJQSxtQkFBRSxXQUFXQSxVQUFTLGFBQWUsTUFBTSxJQUFLO0FBQUEsZ0JBQ2pEO0FBQUEsY0FDRCxHQUdBLFVBQVUsVUFDVCxhQUNBLFdBQVc7QUFDVixvQkFBSTtBQUNILDZCQUFXO0FBQUEsZ0JBQ1osU0FBVSxHQUFJO0FBRWIsc0JBQUtSLFFBQU8sU0FBUyxlQUFnQjtBQUNwQyxvQkFBQUEsUUFBTyxTQUFTO0FBQUEsc0JBQWU7QUFBQSxzQkFDOUIsUUFBUTtBQUFBLG9CQUFNO0FBQUEsa0JBQ2hCO0FBS0Esc0JBQUssUUFBUSxLQUFLLFVBQVc7QUFJNUIsd0JBQUssWUFBWSxTQUFVO0FBQzFCLDZCQUFPO0FBQ1AsNkJBQU8sQ0FBRSxDQUFFO0FBQUEsb0JBQ1o7QUFFQSxvQkFBQVEsVUFBUyxXQUFZLE1BQU0sSUFBSztBQUFBLGtCQUNqQztBQUFBLGdCQUNEO0FBQUEsY0FDRDtBQU1GLGtCQUFLLE9BQVE7QUFDWix3QkFBUTtBQUFBLGNBQ1QsT0FBTztBQUlOLG9CQUFLUixRQUFPLFNBQVMsY0FBZTtBQUNuQywwQkFBUSxRQUFRQSxRQUFPLFNBQVMsYUFBYTtBQUFBLGdCQUM5QztBQUNBLGdCQUFBRixRQUFPLFdBQVksT0FBUTtBQUFBLGNBQzVCO0FBQUEsWUFDRDtBQUFBLFVBQ0Q7QUFFQSxpQkFBT0UsUUFBTyxTQUFVLFNBQVUsVUFBVztBQUc1QyxtQkFBUSxDQUFFLEVBQUcsQ0FBRSxFQUFFO0FBQUEsY0FDaEI7QUFBQSxnQkFDQztBQUFBLGdCQUNBO0FBQUEsZ0JBQ0EsT0FBTyxlQUFlLGFBQ3JCLGFBQ0E7QUFBQSxnQkFDRCxTQUFTO0FBQUEsY0FDVjtBQUFBLFlBQ0Q7QUFHQSxtQkFBUSxDQUFFLEVBQUcsQ0FBRSxFQUFFO0FBQUEsY0FDaEI7QUFBQSxnQkFDQztBQUFBLGdCQUNBO0FBQUEsZ0JBQ0EsT0FBTyxnQkFBZ0IsYUFDdEIsY0FDQTtBQUFBLGNBQ0Y7QUFBQSxZQUNEO0FBR0EsbUJBQVEsQ0FBRSxFQUFHLENBQUUsRUFBRTtBQUFBLGNBQ2hCO0FBQUEsZ0JBQ0M7QUFBQSxnQkFDQTtBQUFBLGdCQUNBLE9BQU8sZUFBZSxhQUNyQixhQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Q7QUFBQSxVQUNELENBQUUsRUFBRSxRQUFRO0FBQUEsUUFDYjtBQUFBO0FBQUE7QUFBQSxRQUlBLFNBQVMsU0FBVSxLQUFNO0FBQ3hCLGlCQUFPLE9BQU8sT0FBT0EsUUFBTyxPQUFRLEtBQUssT0FBUSxJQUFJO0FBQUEsUUFDdEQ7QUFBQSxNQUNELEdBQ0EsV0FBVyxDQUFDO0FBR2IsTUFBQUEsUUFBTyxLQUFNLFFBQVEsU0FBVUQsSUFBRyxPQUFRO0FBQ3pDLFlBQUksT0FBTyxNQUFPLENBQUUsR0FDbkIsY0FBYyxNQUFPLENBQUU7QUFLeEIsZ0JBQVMsTUFBTyxDQUFFLENBQUUsSUFBSSxLQUFLO0FBRzdCLFlBQUssYUFBYztBQUNsQixlQUFLO0FBQUEsWUFDSixXQUFXO0FBSVYsc0JBQVE7QUFBQSxZQUNUO0FBQUE7QUFBQTtBQUFBLFlBSUEsT0FBUSxJQUFJQSxFQUFFLEVBQUcsQ0FBRSxFQUFFO0FBQUE7QUFBQTtBQUFBLFlBSXJCLE9BQVEsSUFBSUEsRUFBRSxFQUFHLENBQUUsRUFBRTtBQUFBO0FBQUEsWUFHckIsT0FBUSxDQUFFLEVBQUcsQ0FBRSxFQUFFO0FBQUE7QUFBQSxZQUdqQixPQUFRLENBQUUsRUFBRyxDQUFFLEVBQUU7QUFBQSxVQUNsQjtBQUFBLFFBQ0Q7QUFLQSxhQUFLLElBQUssTUFBTyxDQUFFLEVBQUUsSUFBSztBQUsxQixpQkFBVSxNQUFPLENBQUUsQ0FBRSxJQUFJLFdBQVc7QUFDbkMsbUJBQVUsTUFBTyxDQUFFLElBQUksTUFBTyxFQUFHLFNBQVMsV0FBVyxTQUFZLE1BQU0sU0FBVTtBQUNqRixpQkFBTztBQUFBLFFBQ1I7QUFLQSxpQkFBVSxNQUFPLENBQUUsSUFBSSxNQUFPLElBQUksS0FBSztBQUFBLE1BQ3hDLENBQUU7QUFHRixjQUFRLFFBQVMsUUFBUztBQUcxQixVQUFLLE1BQU87QUFDWCxhQUFLLEtBQU0sVUFBVSxRQUFTO0FBQUEsTUFDL0I7QUFHQSxhQUFPO0FBQUEsSUFDUjtBQUFBO0FBQUEsSUFHQSxNQUFNLFNBQVUsYUFBYztBQUM3QixVQUdDLFlBQVksVUFBVSxRQUd0QkEsS0FBSSxXQUdKLGtCQUFrQixNQUFPQSxFQUFFLEdBQzNCLGdCQUFnQixNQUFNLEtBQU0sU0FBVSxHQUd0QyxVQUFVQyxRQUFPLFNBQVMsR0FHMUIsYUFBYSxTQUFVRCxJQUFJO0FBQzFCLGVBQU8sU0FBVSxPQUFRO0FBQ3hCLDBCQUFpQkEsRUFBRSxJQUFJO0FBQ3ZCLHdCQUFlQSxFQUFFLElBQUksVUFBVSxTQUFTLElBQUksTUFBTSxLQUFNLFNBQVUsSUFBSTtBQUN0RSxjQUFLLENBQUcsRUFBRSxXQUFjO0FBQ3ZCLG9CQUFRLFlBQWEsaUJBQWlCLGFBQWM7QUFBQSxVQUNyRDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBR0QsVUFBSyxhQUFhLEdBQUk7QUFDckI7QUFBQSxVQUFZO0FBQUEsVUFBYSxRQUFRLEtBQU0sV0FBWUEsRUFBRSxDQUFFLEVBQUU7QUFBQSxVQUFTLFFBQVE7QUFBQSxVQUN6RSxDQUFDO0FBQUEsUUFBVTtBQUdaLFlBQUssUUFBUSxNQUFNLE1BQU0sYUFDeEIsUUFBUSxjQUFlQSxFQUFFLEtBQUssY0FBZUEsRUFBRSxFQUFFLFVBQVcsWUFBYTtBQUV6RSxpQkFBTyxRQUFRLEtBQUs7QUFBQSxRQUNyQjtBQUFBLE1BQ0Q7QUFHQSxhQUFRQSxNQUFNO0FBQ2IsbUJBQVksY0FBZUEsRUFBRSxHQUFHLFdBQVlBLEVBQUUsR0FBRyxRQUFRLE1BQU87QUFBQSxNQUNqRTtBQUVBLGFBQU8sUUFBUSxRQUFRO0FBQUEsSUFDeEI7QUFBQSxFQUNELENBQUU7QUFJRixNQUFJLGNBQWM7QUFLbEIsRUFBQUMsUUFBTyxTQUFTLGdCQUFnQixTQUFVLE9BQU8sWUFBYTtBQUU3RCxRQUFLLFNBQVMsWUFBWSxLQUFNLE1BQU0sSUFBSyxHQUFJO0FBQzlDLE1BQUFGLFFBQU8sUUFBUTtBQUFBLFFBQ2Q7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUVBLEVBQUFFLFFBQU8saUJBQWlCLFNBQVUsT0FBUTtBQUN6QyxJQUFBRixRQUFPLFdBQVksV0FBVztBQUM3QixZQUFNO0FBQUEsSUFDUCxDQUFFO0FBQUEsRUFDSDtBQUdBLE1BQUksWUFBWUUsUUFBTyxTQUFTO0FBRWhDLEVBQUFBLFFBQU8sR0FBRyxRQUFRLFNBQVUsSUFBSztBQUVoQyxjQUNFLEtBQU0sRUFBRyxFQUtULE1BQU8sU0FBVSxPQUFRO0FBQ3pCLE1BQUFBLFFBQU8sZUFBZ0IsS0FBTTtBQUFBLElBQzlCLENBQUU7QUFFSCxXQUFPO0FBQUEsRUFDUjtBQUVBLEVBQUFBLFFBQU8sT0FBUTtBQUFBO0FBQUEsSUFHZCxTQUFTO0FBQUE7QUFBQTtBQUFBLElBSVQsV0FBVztBQUFBO0FBQUEsSUFHWCxPQUFPLFNBQVUsTUFBTztBQUd2QixVQUFLLFNBQVMsT0FBTyxFQUFFQSxRQUFPLFlBQVlBLFFBQU8sU0FBVTtBQUMxRDtBQUFBLE1BQ0Q7QUFHQSxNQUFBQSxRQUFPLFVBQVU7QUFHakIsVUFBSyxTQUFTLFFBQVEsRUFBRUEsUUFBTyxZQUFZLEdBQUk7QUFDOUM7QUFBQSxNQUNEO0FBR0EsZ0JBQVUsWUFBYSxZQUFZLENBQUVBLE9BQU8sQ0FBRTtBQUFBLElBQy9DO0FBQUEsRUFDRCxDQUFFO0FBRUYsRUFBQUEsUUFBTyxNQUFNLE9BQU8sVUFBVTtBQUc5QixXQUFTLFlBQVk7QUFDcEIsZUFBVyxvQkFBcUIsb0JBQW9CLFNBQVU7QUFDOUQsSUFBQUYsUUFBTyxvQkFBcUIsUUFBUSxTQUFVO0FBQzlDLElBQUFFLFFBQU8sTUFBTTtBQUFBLEVBQ2Q7QUFJQSxNQUFLLFdBQVcsZUFBZSxXQUFZO0FBRzFDLElBQUFGLFFBQU8sV0FBWUUsUUFBTyxLQUFNO0FBQUEsRUFFakMsT0FBTztBQUdOLGVBQVcsaUJBQWtCLG9CQUFvQixTQUFVO0FBRzNELElBQUFGLFFBQU8saUJBQWtCLFFBQVEsU0FBVTtBQUFBLEVBQzVDO0FBR0EsTUFBSSxhQUFhO0FBR2pCLFdBQVMsV0FBWSxNQUFNLFFBQVM7QUFDbkMsV0FBTyxPQUFPLFlBQVk7QUFBQSxFQUMzQjtBQUdBLFdBQVMsVUFBVyxRQUFTO0FBQzVCLFdBQU8sT0FBTyxRQUFTLFlBQVksVUFBVztBQUFBLEVBQy9DO0FBS0EsV0FBUyxXQUFZLE9BQVE7QUFRNUIsV0FBTyxNQUFNLGFBQWEsS0FBSyxNQUFNLGFBQWEsS0FBSyxDQUFHLENBQUMsTUFBTTtBQUFBLEVBQ2xFO0FBRUEsV0FBUyxPQUFPO0FBQ2YsU0FBSyxVQUFVRSxRQUFPLFVBQVUsS0FBSztBQUFBLEVBQ3RDO0FBRUEsT0FBSyxNQUFNO0FBRVgsT0FBSyxZQUFZO0FBQUEsSUFFaEIsT0FBTyxTQUFVLE9BQVE7QUFHeEIsVUFBSSxRQUFRLE1BQU8sS0FBSyxPQUFRO0FBR2hDLFVBQUssQ0FBQyxPQUFRO0FBQ2IsZ0JBQVEsdUJBQU8sT0FBUSxJQUFLO0FBSzVCLFlBQUssV0FBWSxLQUFNLEdBQUk7QUFJMUIsY0FBSyxNQUFNLFVBQVc7QUFDckIsa0JBQU8sS0FBSyxPQUFRLElBQUk7QUFBQSxVQUt6QixPQUFPO0FBQ04sbUJBQU8sZUFBZ0IsT0FBTyxLQUFLLFNBQVM7QUFBQSxjQUMzQztBQUFBLGNBQ0EsY0FBYztBQUFBLFlBQ2YsQ0FBRTtBQUFBLFVBQ0g7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUVBLGFBQU87QUFBQSxJQUNSO0FBQUEsSUFDQSxLQUFLLFNBQVUsT0FBTyxNQUFNLE9BQVE7QUFDbkMsVUFBSSxNQUNILFFBQVEsS0FBSyxNQUFPLEtBQU07QUFJM0IsVUFBSyxPQUFPLFNBQVMsVUFBVztBQUMvQixjQUFPLFVBQVcsSUFBSyxDQUFFLElBQUk7QUFBQSxNQUc5QixPQUFPO0FBR04sYUFBTSxRQUFRLE1BQU87QUFDcEIsZ0JBQU8sVUFBVyxJQUFLLENBQUUsSUFBSSxLQUFNLElBQUs7QUFBQSxRQUN6QztBQUFBLE1BQ0Q7QUFDQSxhQUFPO0FBQUEsSUFDUjtBQUFBLElBQ0EsS0FBSyxTQUFVLE9BQU8sS0FBTTtBQUMzQixhQUFPLFFBQVEsU0FDZCxLQUFLLE1BQU8sS0FBTTtBQUFBO0FBQUEsUUFHbEIsTUFBTyxLQUFLLE9BQVEsS0FBSyxNQUFPLEtBQUssT0FBUSxFQUFHLFVBQVcsR0FBSSxDQUFFO0FBQUE7QUFBQSxJQUNuRTtBQUFBLElBQ0EsUUFBUSxTQUFVLE9BQU8sS0FBSyxPQUFRO0FBYXJDLFVBQUssUUFBUSxVQUNQLE9BQU8sT0FBTyxRQUFRLFlBQWMsVUFBVSxRQUFjO0FBRWpFLGVBQU8sS0FBSyxJQUFLLE9BQU8sR0FBSTtBQUFBLE1BQzdCO0FBUUEsV0FBSyxJQUFLLE9BQU8sS0FBSyxLQUFNO0FBSTVCLGFBQU8sVUFBVSxTQUFZLFFBQVE7QUFBQSxJQUN0QztBQUFBLElBQ0EsUUFBUSxTQUFVLE9BQU8sS0FBTTtBQUM5QixVQUFJRCxJQUNILFFBQVEsTUFBTyxLQUFLLE9BQVE7QUFFN0IsVUFBSyxVQUFVLFFBQVk7QUFDMUI7QUFBQSxNQUNEO0FBRUEsVUFBSyxRQUFRLFFBQVk7QUFHeEIsWUFBSyxNQUFNLFFBQVMsR0FBSSxHQUFJO0FBSTNCLGdCQUFNLElBQUksSUFBSyxTQUFVO0FBQUEsUUFDMUIsT0FBTztBQUNOLGdCQUFNLFVBQVcsR0FBSTtBQUlyQixnQkFBTSxPQUFPLFFBQ1osQ0FBRSxHQUFJLElBQ0osSUFBSSxNQUFPLGFBQWMsS0FBSyxDQUFDO0FBQUEsUUFDbkM7QUFFQSxRQUFBQSxLQUFJLElBQUk7QUFFUixlQUFRQSxNQUFNO0FBQ2IsaUJBQU8sTUFBTyxJQUFLQSxFQUFFLENBQUU7QUFBQSxRQUN4QjtBQUFBLE1BQ0Q7QUFHQSxVQUFLLFFBQVEsVUFBYUMsUUFBTyxjQUFlLEtBQU0sR0FBSTtBQU16RCxZQUFLLE1BQU0sVUFBVztBQUNyQixnQkFBTyxLQUFLLE9BQVEsSUFBSTtBQUFBLFFBQ3pCLE9BQU87QUFDTixpQkFBTyxNQUFPLEtBQUssT0FBUTtBQUFBLFFBQzVCO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBLFNBQVMsU0FBVSxPQUFRO0FBQzFCLFVBQUksUUFBUSxNQUFPLEtBQUssT0FBUTtBQUNoQyxhQUFPLFVBQVUsVUFBYSxDQUFDQSxRQUFPLGNBQWUsS0FBTTtBQUFBLElBQzVEO0FBQUEsRUFDRDtBQUVBLE1BQUksV0FBVyxJQUFJLEtBQUs7QUFFeEIsTUFBSSxXQUFXLElBQUksS0FBSztBQVl4QixNQUFJLFNBQVMsaUNBQ1osYUFBYTtBQUVkLFdBQVMsUUFBUyxNQUFPO0FBQ3hCLFFBQUssU0FBUyxRQUFTO0FBQ3RCLGFBQU87QUFBQSxJQUNSO0FBRUEsUUFBSyxTQUFTLFNBQVU7QUFDdkIsYUFBTztBQUFBLElBQ1I7QUFFQSxRQUFLLFNBQVMsUUFBUztBQUN0QixhQUFPO0FBQUEsSUFDUjtBQUdBLFFBQUssU0FBUyxDQUFDLE9BQU8sSUFBSztBQUMxQixhQUFPLENBQUM7QUFBQSxJQUNUO0FBRUEsUUFBSyxPQUFPLEtBQU0sSUFBSyxHQUFJO0FBQzFCLGFBQU8sS0FBSyxNQUFPLElBQUs7QUFBQSxJQUN6QjtBQUVBLFdBQU87QUFBQSxFQUNSO0FBRUEsV0FBUyxTQUFVLE1BQU0sS0FBSyxNQUFPO0FBQ3BDLFFBQUk7QUFJSixRQUFLLFNBQVMsVUFBYSxLQUFLLGFBQWEsR0FBSTtBQUNoRCxhQUFPLFVBQVUsSUFBSSxRQUFTLFlBQVksS0FBTSxFQUFFLFlBQVk7QUFDOUQsYUFBTyxLQUFLLGFBQWMsSUFBSztBQUUvQixVQUFLLE9BQU8sU0FBUyxVQUFXO0FBQy9CLFlBQUk7QUFDSCxpQkFBTyxRQUFTLElBQUs7QUFBQSxRQUN0QixTQUFVLEdBQUk7QUFBQSxRQUFDO0FBR2YsaUJBQVMsSUFBSyxNQUFNLEtBQUssSUFBSztBQUFBLE1BQy9CLE9BQU87QUFDTixlQUFPO0FBQUEsTUFDUjtBQUFBLElBQ0Q7QUFDQSxXQUFPO0FBQUEsRUFDUjtBQUVBLEVBQUFBLFFBQU8sT0FBUTtBQUFBLElBQ2QsU0FBUyxTQUFVLE1BQU87QUFDekIsYUFBTyxTQUFTLFFBQVMsSUFBSyxLQUFLLFNBQVMsUUFBUyxJQUFLO0FBQUEsSUFDM0Q7QUFBQSxJQUVBLE1BQU0sU0FBVSxNQUFNLE1BQU0sTUFBTztBQUNsQyxhQUFPLFNBQVMsT0FBUSxNQUFNLE1BQU0sSUFBSztBQUFBLElBQzFDO0FBQUEsSUFFQSxZQUFZLFNBQVUsTUFBTSxNQUFPO0FBQ2xDLGVBQVMsT0FBUSxNQUFNLElBQUs7QUFBQSxJQUM3QjtBQUFBO0FBQUE7QUFBQSxJQUlBLE9BQU8sU0FBVSxNQUFNLE1BQU0sTUFBTztBQUNuQyxhQUFPLFNBQVMsT0FBUSxNQUFNLE1BQU0sSUFBSztBQUFBLElBQzFDO0FBQUEsSUFFQSxhQUFhLFNBQVUsTUFBTSxNQUFPO0FBQ25DLGVBQVMsT0FBUSxNQUFNLElBQUs7QUFBQSxJQUM3QjtBQUFBLEVBQ0QsQ0FBRTtBQUVGLEVBQUFBLFFBQU8sR0FBRyxPQUFRO0FBQUEsSUFDakIsTUFBTSxTQUFVLEtBQUssT0FBUTtBQUM1QixVQUFJRCxJQUFHLE1BQU0sTUFDWixPQUFPLEtBQU0sQ0FBRSxHQUNmLFFBQVEsUUFBUSxLQUFLO0FBR3RCLFVBQUssUUFBUSxRQUFZO0FBQ3hCLFlBQUssS0FBSyxRQUFTO0FBQ2xCLGlCQUFPLFNBQVMsSUFBSyxJQUFLO0FBRTFCLGNBQUssS0FBSyxhQUFhLEtBQUssQ0FBQyxTQUFTLElBQUssTUFBTSxjQUFlLEdBQUk7QUFDbkUsWUFBQUEsS0FBSSxNQUFNO0FBQ1YsbUJBQVFBLE1BQU07QUFJYixrQkFBSyxNQUFPQSxFQUFFLEdBQUk7QUFDakIsdUJBQU8sTUFBT0EsRUFBRSxFQUFFO0FBQ2xCLG9CQUFLLEtBQUssUUFBUyxPQUFRLE1BQU0sR0FBSTtBQUNwQyx5QkFBTyxVQUFXLEtBQUssTUFBTyxDQUFFLENBQUU7QUFDbEMsMkJBQVUsTUFBTSxNQUFNLEtBQU0sSUFBSyxDQUFFO0FBQUEsZ0JBQ3BDO0FBQUEsY0FDRDtBQUFBLFlBQ0Q7QUFDQSxxQkFBUyxJQUFLLE1BQU0sZ0JBQWdCLElBQUs7QUFBQSxVQUMxQztBQUFBLFFBQ0Q7QUFFQSxlQUFPO0FBQUEsTUFDUjtBQUdBLFVBQUssT0FBTyxRQUFRLFVBQVc7QUFDOUIsZUFBTyxLQUFLLEtBQU0sV0FBVztBQUM1QixtQkFBUyxJQUFLLE1BQU0sR0FBSTtBQUFBLFFBQ3pCLENBQUU7QUFBQSxNQUNIO0FBRUEsYUFBTyxPQUFRLE1BQU0sU0FBVUksUUFBUTtBQUN0QyxZQUFJTTtBQU9KLFlBQUssUUFBUU4sV0FBVSxRQUFZO0FBSWxDLFVBQUFNLFFBQU8sU0FBUyxJQUFLLE1BQU0sR0FBSTtBQUMvQixjQUFLQSxVQUFTLFFBQVk7QUFDekIsbUJBQU9BO0FBQUEsVUFDUjtBQUlBLFVBQUFBLFFBQU8sU0FBVSxNQUFNLEdBQUk7QUFDM0IsY0FBS0EsVUFBUyxRQUFZO0FBQ3pCLG1CQUFPQTtBQUFBLFVBQ1I7QUFHQTtBQUFBLFFBQ0Q7QUFHQSxhQUFLLEtBQU0sV0FBVztBQUdyQixtQkFBUyxJQUFLLE1BQU0sS0FBS04sTUFBTTtBQUFBLFFBQ2hDLENBQUU7QUFBQSxNQUNILEdBQUcsTUFBTSxPQUFPLFVBQVUsU0FBUyxHQUFHLE1BQU0sSUFBSztBQUFBLElBQ2xEO0FBQUEsSUFFQSxZQUFZLFNBQVUsS0FBTTtBQUMzQixhQUFPLEtBQUssS0FBTSxXQUFXO0FBQzVCLGlCQUFTLE9BQVEsTUFBTSxHQUFJO0FBQUEsTUFDNUIsQ0FBRTtBQUFBLElBQ0g7QUFBQSxFQUNELENBQUU7QUFFRixFQUFBSCxRQUFPLE9BQVE7QUFBQSxJQUNkLE9BQU8sU0FBVSxNQUFNLE1BQU0sTUFBTztBQUNuQyxVQUFJO0FBRUosVUFBSyxNQUFPO0FBQ1gsZ0JBQVMsUUFBUSxRQUFTO0FBQzFCLGdCQUFRLFNBQVMsSUFBSyxNQUFNLElBQUs7QUFHakMsWUFBSyxNQUFPO0FBQ1gsY0FBSyxDQUFDLFNBQVMsTUFBTSxRQUFTLElBQUssR0FBSTtBQUN0QyxvQkFBUSxTQUFTLElBQUssTUFBTSxNQUFNQSxRQUFPLFVBQVcsSUFBSyxDQUFFO0FBQUEsVUFDNUQsT0FBTztBQUNOLGtCQUFNLEtBQU0sSUFBSztBQUFBLFVBQ2xCO0FBQUEsUUFDRDtBQUNBLGVBQU8sU0FBUyxDQUFDO0FBQUEsTUFDbEI7QUFBQSxJQUNEO0FBQUEsSUFFQSxTQUFTLFNBQVUsTUFBTSxNQUFPO0FBQy9CLGFBQU8sUUFBUTtBQUVmLFVBQUksUUFBUUEsUUFBTyxNQUFPLE1BQU0sSUFBSyxHQUNwQyxjQUFjLE1BQU0sUUFDcEIsS0FBSyxNQUFNLE1BQU0sR0FDakIsUUFBUUEsUUFBTyxZQUFhLE1BQU0sSUFBSyxHQUN2QyxPQUFPLFdBQVc7QUFDakIsUUFBQUEsUUFBTyxRQUFTLE1BQU0sSUFBSztBQUFBLE1BQzVCO0FBR0QsVUFBSyxPQUFPLGNBQWU7QUFDMUIsYUFBSyxNQUFNLE1BQU07QUFDakI7QUFBQSxNQUNEO0FBRUEsVUFBSyxJQUFLO0FBSVQsWUFBSyxTQUFTLE1BQU87QUFDcEIsZ0JBQU0sUUFBUyxZQUFhO0FBQUEsUUFDN0I7QUFHQSxlQUFPLE1BQU07QUFDYixXQUFHLEtBQU0sTUFBTSxNQUFNLEtBQU07QUFBQSxNQUM1QjtBQUVBLFVBQUssQ0FBQyxlQUFlLE9BQVE7QUFDNUIsY0FBTSxNQUFNLEtBQUs7QUFBQSxNQUNsQjtBQUFBLElBQ0Q7QUFBQTtBQUFBLElBR0EsYUFBYSxTQUFVLE1BQU0sTUFBTztBQUNuQyxVQUFJLE1BQU0sT0FBTztBQUNqQixhQUFPLFNBQVMsSUFBSyxNQUFNLEdBQUksS0FBSyxTQUFTLElBQUssTUFBTSxLQUFLO0FBQUEsUUFDNUQsT0FBT0EsUUFBTyxVQUFXLGFBQWMsRUFBRSxJQUFLLFdBQVc7QUFDeEQsbUJBQVMsT0FBUSxNQUFNLENBQUUsT0FBTyxTQUFTLEdBQUksQ0FBRTtBQUFBLFFBQ2hELENBQUU7QUFBQSxNQUNILENBQUU7QUFBQSxJQUNIO0FBQUEsRUFDRCxDQUFFO0FBRUYsRUFBQUEsUUFBTyxHQUFHLE9BQVE7QUFBQSxJQUNqQixPQUFPLFNBQVUsTUFBTSxNQUFPO0FBQzdCLFVBQUksU0FBUztBQUViLFVBQUssT0FBTyxTQUFTLFVBQVc7QUFDL0IsZUFBTztBQUNQLGVBQU87QUFDUDtBQUFBLE1BQ0Q7QUFFQSxVQUFLLFVBQVUsU0FBUyxRQUFTO0FBQ2hDLGVBQU9BLFFBQU8sTUFBTyxLQUFNLENBQUUsR0FBRyxJQUFLO0FBQUEsTUFDdEM7QUFFQSxhQUFPLFNBQVMsU0FDZixPQUNBLEtBQUssS0FBTSxXQUFXO0FBQ3JCLFlBQUksUUFBUUEsUUFBTyxNQUFPLE1BQU0sTUFBTSxJQUFLO0FBRzNDLFFBQUFBLFFBQU8sWUFBYSxNQUFNLElBQUs7QUFFL0IsWUFBSyxTQUFTLFFBQVEsTUFBTyxDQUFFLE1BQU0sY0FBZTtBQUNuRCxVQUFBQSxRQUFPLFFBQVMsTUFBTSxJQUFLO0FBQUEsUUFDNUI7QUFBQSxNQUNELENBQUU7QUFBQSxJQUNKO0FBQUEsSUFDQSxTQUFTLFNBQVUsTUFBTztBQUN6QixhQUFPLEtBQUssS0FBTSxXQUFXO0FBQzVCLFFBQUFBLFFBQU8sUUFBUyxNQUFNLElBQUs7QUFBQSxNQUM1QixDQUFFO0FBQUEsSUFDSDtBQUFBLElBQ0EsWUFBWSxTQUFVLE1BQU87QUFDNUIsYUFBTyxLQUFLLE1BQU8sUUFBUSxNQUFNLENBQUMsQ0FBRTtBQUFBLElBQ3JDO0FBQUE7QUFBQTtBQUFBLElBSUEsU0FBUyxTQUFVLE1BQU0sS0FBTTtBQUM5QixVQUFJLEtBQ0gsUUFBUSxHQUNSLFFBQVFBLFFBQU8sU0FBUyxHQUN4QixXQUFXLE1BQ1hELEtBQUksS0FBSyxRQUNULFVBQVUsV0FBVztBQUNwQixZQUFLLENBQUcsRUFBRSxPQUFVO0FBQ25CLGdCQUFNLFlBQWEsVUFBVSxDQUFFLFFBQVMsQ0FBRTtBQUFBLFFBQzNDO0FBQUEsTUFDRDtBQUVELFVBQUssT0FBTyxTQUFTLFVBQVc7QUFDL0IsY0FBTTtBQUNOLGVBQU87QUFBQSxNQUNSO0FBQ0EsYUFBTyxRQUFRO0FBRWYsYUFBUUEsTUFBTTtBQUNiLGNBQU0sU0FBUyxJQUFLLFNBQVVBLEVBQUUsR0FBRyxPQUFPLFlBQWE7QUFDdkQsWUFBSyxPQUFPLElBQUksT0FBUTtBQUN2QjtBQUNBLGNBQUksTUFBTSxJQUFLLE9BQVE7QUFBQSxRQUN4QjtBQUFBLE1BQ0Q7QUFDQSxjQUFRO0FBQ1IsYUFBTyxNQUFNLFFBQVMsR0FBSTtBQUFBLElBQzNCO0FBQUEsRUFDRCxDQUFFO0FBRUYsTUFBSSxPQUFPLHNDQUFzQztBQUVqRCxNQUFJLFVBQVUsSUFBSSxPQUFRLG1CQUFtQixPQUFPLGVBQWUsR0FBSTtBQUV2RSxNQUFJLFlBQVksQ0FBRSxPQUFPLFNBQVMsVUFBVSxNQUFPO0FBU25ELFdBQVMsbUJBQW9CLE1BQU0sSUFBSztBQUl2QyxXQUFPLE1BQU07QUFHYixXQUFPLEtBQUssTUFBTSxZQUFZLFVBQzdCLEtBQUssTUFBTSxZQUFZLE1BQ3ZCQyxRQUFPLElBQUssTUFBTSxTQUFVLE1BQU07QUFBQSxFQUNwQztBQUVBLE1BQUksY0FBYyxVQXVCakIsVUFBVTtBQUVYLFdBQVMsU0FBVSxNQUFPO0FBS3pCLFdBQU8sWUFBWSxLQUFNLElBQUssS0FDN0IsUUFBUSxLQUFNLEtBQU0sQ0FBRSxFQUFFLFlBQVksSUFBSSxLQUFLLE1BQU8sQ0FBRSxDQUFFO0FBQUEsRUFDMUQ7QUFFQSxXQUFTLFVBQVcsTUFBTSxNQUFNLFlBQVksT0FBUTtBQUNuRCxRQUFJLFVBQVUsT0FDYixnQkFBZ0IsSUFDaEIsZUFBZSxRQUNkLFdBQVc7QUFDVixhQUFPLE1BQU0sSUFBSTtBQUFBLElBQ2xCLElBQ0EsV0FBVztBQUNWLGFBQU9BLFFBQU8sSUFBSyxNQUFNLE1BQU0sRUFBRztBQUFBLElBQ25DLEdBQ0QsVUFBVSxhQUFhLEdBQ3ZCLE9BQU8sY0FBYyxXQUFZLENBQUUsTUFBTyxTQUFVLElBQUssSUFBSSxPQUFPLEtBR3BFLGdCQUFnQixLQUFLLGFBQ2xCLENBQUMsU0FBVSxJQUFLLEtBQUssU0FBUyxRQUFRLENBQUMsWUFDekMsUUFBUSxLQUFNQSxRQUFPLElBQUssTUFBTSxJQUFLLENBQUU7QUFFekMsUUFBSyxpQkFBaUIsY0FBZSxDQUFFLE1BQU0sTUFBTztBQUluRCxnQkFBVSxVQUFVO0FBR3BCLGFBQU8sUUFBUSxjQUFlLENBQUU7QUFHaEMsc0JBQWdCLENBQUMsV0FBVztBQUU1QixhQUFRLGlCQUFrQjtBQUl6QixRQUFBQSxRQUFPLE1BQU8sTUFBTSxNQUFNLGdCQUFnQixJQUFLO0FBQy9DLGFBQU8sSUFBSSxVQUFZLEtBQU0sUUFBUSxhQUFhLElBQUksV0FBVyxTQUFXLEdBQUk7QUFDL0UsMEJBQWdCO0FBQUEsUUFDakI7QUFDQSx3QkFBZ0IsZ0JBQWdCO0FBQUEsTUFFakM7QUFFQSxzQkFBZ0IsZ0JBQWdCO0FBQ2hDLE1BQUFBLFFBQU8sTUFBTyxNQUFNLE1BQU0sZ0JBQWdCLElBQUs7QUFHL0MsbUJBQWEsY0FBYyxDQUFDO0FBQUEsSUFDN0I7QUFFQSxRQUFLLFlBQWE7QUFDakIsc0JBQWdCLENBQUMsaUJBQWlCLENBQUMsV0FBVztBQUc5QyxpQkFBVyxXQUFZLENBQUUsSUFDeEIsaUJBQWtCLFdBQVksQ0FBRSxJQUFJLEtBQU0sV0FBWSxDQUFFLElBQ3hELENBQUMsV0FBWSxDQUFFO0FBQ2hCLFVBQUssT0FBUTtBQUNaLGNBQU0sT0FBTztBQUNiLGNBQU0sUUFBUTtBQUNkLGNBQU0sTUFBTTtBQUFBLE1BQ2I7QUFBQSxJQUNEO0FBQ0EsV0FBTztBQUFBLEVBQ1I7QUFHQSxNQUFJLFlBQVk7QUFNaEIsV0FBUyxhQUFjLFFBQVM7QUFDL0IsV0FBTyxVQUFXLE9BQU8sUUFBUyxXQUFXLEtBQU0sQ0FBRTtBQUFBLEVBQ3REO0FBRUEsTUFBSSxvQkFBb0IsQ0FBQztBQUV6QixXQUFTLGtCQUFtQixNQUFPO0FBQ2xDLFFBQUksTUFDSCxNQUFNLEtBQUssZUFDWFUsWUFBVyxLQUFLLFVBQ2hCLFVBQVUsa0JBQW1CQSxTQUFTO0FBRXZDLFFBQUssU0FBVTtBQUNkLGFBQU87QUFBQSxJQUNSO0FBRUEsV0FBTyxJQUFJLEtBQUssWUFBYSxJQUFJLGNBQWVBLFNBQVMsQ0FBRTtBQUMzRCxjQUFVVixRQUFPLElBQUssTUFBTSxTQUFVO0FBRXRDLFNBQUssV0FBVyxZQUFhLElBQUs7QUFFbEMsUUFBSyxZQUFZLFFBQVM7QUFDekIsZ0JBQVU7QUFBQSxJQUNYO0FBQ0Esc0JBQW1CVSxTQUFTLElBQUk7QUFFaEMsV0FBTztBQUFBLEVBQ1I7QUFFQSxXQUFTLFNBQVUsVUFBVSxNQUFPO0FBQ25DLFFBQUksU0FBUyxNQUNaLFNBQVMsQ0FBQyxHQUNWLFFBQVEsR0FDUixTQUFTLFNBQVM7QUFHbkIsV0FBUSxRQUFRLFFBQVEsU0FBVTtBQUNqQyxhQUFPLFNBQVUsS0FBTTtBQUN2QixVQUFLLENBQUMsS0FBSyxPQUFRO0FBQ2xCO0FBQUEsTUFDRDtBQUVBLGdCQUFVLEtBQUssTUFBTTtBQUNyQixVQUFLLE1BQU87QUFLWCxZQUFLLFlBQVksUUFBUztBQUN6QixpQkFBUSxLQUFNLElBQUksU0FBUyxJQUFLLE1BQU0sU0FBVSxLQUFLO0FBQ3JELGNBQUssQ0FBQyxPQUFRLEtBQU0sR0FBSTtBQUN2QixpQkFBSyxNQUFNLFVBQVU7QUFBQSxVQUN0QjtBQUFBLFFBQ0Q7QUFDQSxZQUFLLEtBQUssTUFBTSxZQUFZLE1BQU0sbUJBQW9CLElBQUssR0FBSTtBQUM5RCxpQkFBUSxLQUFNLElBQUksa0JBQW1CLElBQUs7QUFBQSxRQUMzQztBQUFBLE1BQ0QsT0FBTztBQUNOLFlBQUssWUFBWSxRQUFTO0FBQ3pCLGlCQUFRLEtBQU0sSUFBSTtBQUdsQixtQkFBUyxJQUFLLE1BQU0sV0FBVyxPQUFRO0FBQUEsUUFDeEM7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUdBLFNBQU0sUUFBUSxHQUFHLFFBQVEsUUFBUSxTQUFVO0FBQzFDLFVBQUssT0FBUSxLQUFNLEtBQUssTUFBTztBQUM5QixpQkFBVSxLQUFNLEVBQUUsTUFBTSxVQUFVLE9BQVEsS0FBTTtBQUFBLE1BQ2pEO0FBQUEsSUFDRDtBQUVBLFdBQU87QUFBQSxFQUNSO0FBRUEsRUFBQVYsUUFBTyxHQUFHLE9BQVE7QUFBQSxJQUNqQixNQUFNLFdBQVc7QUFDaEIsYUFBTyxTQUFVLE1BQU0sSUFBSztBQUFBLElBQzdCO0FBQUEsSUFDQSxNQUFNLFdBQVc7QUFDaEIsYUFBTyxTQUFVLElBQUs7QUFBQSxJQUN2QjtBQUFBLElBQ0EsUUFBUSxTQUFVLE9BQVE7QUFDekIsVUFBSyxPQUFPLFVBQVUsV0FBWTtBQUNqQyxlQUFPLFFBQVEsS0FBSyxLQUFLLElBQUksS0FBSyxLQUFLO0FBQUEsTUFDeEM7QUFFQSxhQUFPLEtBQUssS0FBTSxXQUFXO0FBQzVCLFlBQUssbUJBQW9CLElBQUssR0FBSTtBQUNqQyxVQUFBQSxRQUFRLElBQUssRUFBRSxLQUFLO0FBQUEsUUFDckIsT0FBTztBQUNOLFVBQUFBLFFBQVEsSUFBSyxFQUFFLEtBQUs7QUFBQSxRQUNyQjtBQUFBLE1BQ0QsQ0FBRTtBQUFBLElBQ0g7QUFBQSxFQUNELENBQUU7QUFFRixNQUFJLGFBQWEsU0FBVSxNQUFPO0FBQ2hDLFdBQU9BLFFBQU8sU0FBVSxLQUFLLGVBQWUsSUFBSyxLQUNoRCxLQUFLLFlBQWEsUUFBUyxNQUFNLEtBQUs7QUFBQSxFQUN4QyxHQUNBLFdBQVcsRUFBRSxVQUFVLEtBQUs7QUFLN0IsTUFBSyxDQUFDLGtCQUFrQixhQUFjO0FBQ3JDLGlCQUFhLFNBQVUsTUFBTztBQUM3QixhQUFPQSxRQUFPLFNBQVUsS0FBSyxlQUFlLElBQUs7QUFBQSxJQUNsRDtBQUFBLEVBQ0Q7QUFLQSxNQUFJLFdBQVc7QUFFZixNQUFJLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFPYixPQUFPLENBQUUsT0FBUTtBQUFBLElBQ2pCLEtBQUssQ0FBRSxZQUFZLE9BQVE7QUFBQSxJQUMzQixJQUFJLENBQUUsU0FBUyxPQUFRO0FBQUEsSUFDdkIsSUFBSSxDQUFFLE1BQU0sU0FBUyxPQUFRO0FBQUEsRUFDOUI7QUFFQSxVQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsV0FBVyxRQUFRLFVBQVUsUUFBUTtBQUM3RSxVQUFRLEtBQUssUUFBUTtBQUVyQixXQUFTLE9BQVEsU0FBUyxLQUFNO0FBSS9CLFFBQUk7QUFFSixRQUFLLE9BQU8sUUFBUSx5QkFBeUIsYUFBYztBQUMxRCxZQUFNLFFBQVEscUJBQXNCLE9BQU8sR0FBSTtBQUFBLElBRWhELFdBQVksT0FBTyxRQUFRLHFCQUFxQixhQUFjO0FBQzdELFlBQU0sUUFBUSxpQkFBa0IsT0FBTyxHQUFJO0FBQUEsSUFFNUMsT0FBTztBQUNOLFlBQU0sQ0FBQztBQUFBLElBQ1I7QUFFQSxRQUFLLFFBQVEsVUFBYSxPQUFPLFNBQVUsU0FBUyxHQUFJLEdBQUk7QUFDM0QsYUFBT0EsUUFBTyxNQUFPLENBQUUsT0FBUSxHQUFHLEdBQUk7QUFBQSxJQUN2QztBQUVBLFdBQU87QUFBQSxFQUNSO0FBRUEsTUFBSSxjQUFjO0FBR2xCLFdBQVMsY0FBZSxPQUFPLGFBQWM7QUFDNUMsUUFBSUQsS0FBSSxHQUNQLElBQUksTUFBTTtBQUVYLFdBQVFBLEtBQUksR0FBR0EsTUFBTTtBQUNwQixlQUFTO0FBQUEsUUFDUixNQUFPQSxFQUFFO0FBQUEsUUFDVDtBQUFBLFFBQ0EsQ0FBQyxlQUFlLFNBQVMsSUFBSyxZQUFhQSxFQUFFLEdBQUcsWUFBYTtBQUFBLE1BQzlEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFFQSxNQUFJLFFBQVE7QUFFWixXQUFTLGNBQWUsT0FBTyxTQUFTLFNBQVMsV0FBVyxTQUFVO0FBQ3JFLFFBQUksTUFBTSxLQUFLLEtBQUssTUFBTSxVQUFVLEdBQ25DLFdBQVcsUUFBUSx1QkFBdUIsR0FDMUMsUUFBUSxDQUFDLEdBQ1RBLEtBQUksR0FDSixJQUFJLE1BQU07QUFFWCxXQUFRQSxLQUFJLEdBQUdBLE1BQU07QUFDcEIsYUFBTyxNQUFPQSxFQUFFO0FBRWhCLFVBQUssUUFBUSxTQUFTLEdBQUk7QUFHekIsWUFBSyxPQUFRLElBQUssTUFBTSxhQUFjLEtBQUssWUFBWSxZQUFhLElBQUssSUFBTTtBQUM5RSxVQUFBQyxRQUFPLE1BQU8sT0FBTyxLQUFLLFdBQVcsQ0FBRSxJQUFLLElBQUksSUFBSztBQUFBLFFBR3RELFdBQVksQ0FBQyxNQUFNLEtBQU0sSUFBSyxHQUFJO0FBQ2pDLGdCQUFNLEtBQU0sUUFBUSxlQUFnQixJQUFLLENBQUU7QUFBQSxRQUc1QyxPQUFPO0FBQ04sZ0JBQU0sT0FBTyxTQUFTLFlBQWEsUUFBUSxjQUFlLEtBQU0sQ0FBRTtBQUdsRSxpQkFBUSxTQUFTLEtBQU0sSUFBSyxLQUFLLENBQUUsSUFBSSxFQUFHLEdBQUssQ0FBRSxFQUFFLFlBQVk7QUFDL0QsaUJBQU8sUUFBUyxHQUFJLEtBQUs7QUFHekIsY0FBSSxLQUFLO0FBQ1QsaUJBQVEsRUFBRSxJQUFJLElBQUs7QUFDbEIsa0JBQU0sSUFBSSxZQUFhLFFBQVEsY0FBZSxLQUFNLENBQUUsQ0FBRSxDQUFFO0FBQUEsVUFDM0Q7QUFFQSxjQUFJLFlBQVlBLFFBQU8sY0FBZSxJQUFLO0FBRTNDLFVBQUFBLFFBQU8sTUFBTyxPQUFPLElBQUksVUFBVztBQUdwQyxnQkFBTSxTQUFTO0FBR2YsY0FBSSxjQUFjO0FBQUEsUUFDbkI7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUdBLGFBQVMsY0FBYztBQUV2QixJQUFBRCxLQUFJO0FBQ0osV0FBVSxPQUFPLE1BQU9BLElBQUksR0FBTTtBQUdqQyxVQUFLLGFBQWFDLFFBQU8sUUFBUyxNQUFNLFNBQVUsSUFBSSxJQUFLO0FBQzFELFlBQUssU0FBVTtBQUNkLGtCQUFRLEtBQU0sSUFBSztBQUFBLFFBQ3BCO0FBQ0E7QUFBQSxNQUNEO0FBRUEsaUJBQVcsV0FBWSxJQUFLO0FBRzVCLFlBQU0sT0FBUSxTQUFTLFlBQWEsSUFBSyxHQUFHLFFBQVM7QUFHckQsVUFBSyxVQUFXO0FBQ2Ysc0JBQWUsR0FBSTtBQUFBLE1BQ3BCO0FBR0EsVUFBSyxTQUFVO0FBQ2QsWUFBSTtBQUNKLGVBQVUsT0FBTyxJQUFLLEdBQUksR0FBTTtBQUMvQixjQUFLLFlBQVksS0FBTSxLQUFLLFFBQVEsRUFBRyxHQUFJO0FBQzFDLG9CQUFRLEtBQU0sSUFBSztBQUFBLFVBQ3BCO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBRUEsV0FBTztBQUFBLEVBQ1I7QUFHQSxXQUFTLGNBQWUsTUFBTztBQUM5QixTQUFLLFFBQVMsS0FBSyxhQUFjLE1BQU8sTUFBTSxRQUFTLE1BQU0sS0FBSztBQUNsRSxXQUFPO0FBQUEsRUFDUjtBQUNBLFdBQVMsY0FBZSxNQUFPO0FBQzlCLFNBQU8sS0FBSyxRQUFRLElBQUssTUFBTyxHQUFHLENBQUUsTUFBTSxTQUFVO0FBQ3BELFdBQUssT0FBTyxLQUFLLEtBQUssTUFBTyxDQUFFO0FBQUEsSUFDaEMsT0FBTztBQUNOLFdBQUssZ0JBQWlCLE1BQU87QUFBQSxJQUM5QjtBQUVBLFdBQU87QUFBQSxFQUNSO0FBRUEsV0FBUyxTQUFVLFlBQVksTUFBTSxVQUFVLFNBQVU7QUFHeEQsV0FBTyxLQUFNLElBQUs7QUFFbEIsUUFBSSxVQUFVLE9BQU8sU0FBUyxZQUFZLE1BQU0sS0FDL0NELEtBQUksR0FDSixJQUFJLFdBQVcsUUFDZixXQUFXLElBQUksR0FDZixRQUFRLEtBQU0sQ0FBRSxHQUNoQixrQkFBa0IsT0FBTyxVQUFVO0FBRXBDLFFBQUssaUJBQWtCO0FBQ3RCLGFBQU8sV0FBVyxLQUFNLFNBQVUsT0FBUTtBQUN6QyxZQUFJLE9BQU8sV0FBVyxHQUFJLEtBQU07QUFDaEMsYUFBTSxDQUFFLElBQUksTUFBTSxLQUFNLE1BQU0sT0FBTyxLQUFLLEtBQUssQ0FBRTtBQUNqRCxpQkFBVSxNQUFNLE1BQU0sVUFBVSxPQUFRO0FBQUEsTUFDekMsQ0FBRTtBQUFBLElBQ0g7QUFFQSxRQUFLLEdBQUk7QUFDUixpQkFBVyxjQUFlLE1BQU0sV0FBWSxDQUFFLEVBQUUsZUFBZSxPQUFPLFlBQVksT0FBUTtBQUMxRixjQUFRLFNBQVM7QUFFakIsVUFBSyxTQUFTLFdBQVcsV0FBVyxHQUFJO0FBQ3ZDLG1CQUFXO0FBQUEsTUFDWjtBQUdBLFVBQUssU0FBUyxTQUFVO0FBQ3ZCLGtCQUFVQyxRQUFPLElBQUssT0FBUSxVQUFVLFFBQVMsR0FBRyxhQUFjO0FBQ2xFLHFCQUFhLFFBQVE7QUFLckIsZUFBUUQsS0FBSSxHQUFHQSxNQUFNO0FBQ3BCLGlCQUFPO0FBRVAsY0FBS0EsT0FBTSxVQUFXO0FBQ3JCLG1CQUFPQyxRQUFPLE1BQU8sTUFBTSxNQUFNLElBQUs7QUFHdEMsZ0JBQUssWUFBYTtBQUNqQixjQUFBQSxRQUFPLE1BQU8sU0FBUyxPQUFRLE1BQU0sUUFBUyxDQUFFO0FBQUEsWUFDakQ7QUFBQSxVQUNEO0FBRUEsbUJBQVMsS0FBTSxXQUFZRCxFQUFFLEdBQUcsTUFBTUEsRUFBRTtBQUFBLFFBQ3pDO0FBRUEsWUFBSyxZQUFhO0FBQ2pCLGdCQUFNLFFBQVMsUUFBUSxTQUFTLENBQUUsRUFBRTtBQUdwQyxVQUFBQyxRQUFPLElBQUssU0FBUyxhQUFjO0FBR25DLGVBQU1ELEtBQUksR0FBR0EsS0FBSSxZQUFZQSxNQUFNO0FBQ2xDLG1CQUFPLFFBQVNBLEVBQUU7QUFDbEIsZ0JBQUssWUFBWSxLQUFNLEtBQUssUUFBUSxFQUFHLEtBQ3RDLENBQUMsU0FBUyxJQUFLLE1BQU0sWUFBYSxLQUNsQ0MsUUFBTyxTQUFVLEtBQUssSUFBSyxHQUFJO0FBRS9CLGtCQUFLLEtBQUssUUFBUyxLQUFLLFFBQVEsSUFBSyxZQUFZLE1BQU8sVUFBVztBQUdsRSxvQkFBS0EsUUFBTyxZQUFZLENBQUMsS0FBSyxVQUFXO0FBQ3hDLGtCQUFBQSxRQUFPLFNBQVUsS0FBSyxLQUFLO0FBQUEsb0JBQzFCLE9BQU8sS0FBSztBQUFBLG9CQUNaLGFBQWEsS0FBSztBQUFBLGtCQUNuQixHQUFHLEdBQUk7QUFBQSxnQkFDUjtBQUFBLGNBQ0QsT0FBTztBQUNOLHdCQUFTLEtBQUssYUFBYSxNQUFNLEdBQUk7QUFBQSxjQUN0QztBQUFBLFlBQ0Q7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBRUEsV0FBTztBQUFBLEVBQ1I7QUFFQSxNQUFJLGlCQUFpQjtBQUVyQixNQUFJLGlCQUFpQjtBQUVyQixXQUFTLGFBQWE7QUFDckIsV0FBTztBQUFBLEVBQ1I7QUFFQSxXQUFTLGNBQWM7QUFDdEIsV0FBTztBQUFBLEVBQ1I7QUFFQSxXQUFTLEdBQUksTUFBTSxPQUFPLFVBQVUsTUFBTSxJQUFJLEtBQU07QUFDbkQsUUFBSSxRQUFRO0FBR1osUUFBSyxPQUFPLFVBQVUsVUFBVztBQUdoQyxVQUFLLE9BQU8sYUFBYSxVQUFXO0FBR25DLGVBQU8sUUFBUTtBQUNmLG1CQUFXO0FBQUEsTUFDWjtBQUNBLFdBQU0sUUFBUSxPQUFRO0FBQ3JCLFdBQUksTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFPLElBQUssR0FBRyxHQUFJO0FBQUEsTUFDcEQ7QUFDQSxhQUFPO0FBQUEsSUFDUjtBQUVBLFFBQUssUUFBUSxRQUFRLE1BQU0sTUFBTztBQUdqQyxXQUFLO0FBQ0wsYUFBTyxXQUFXO0FBQUEsSUFDbkIsV0FBWSxNQUFNLE1BQU87QUFDeEIsVUFBSyxPQUFPLGFBQWEsVUFBVztBQUduQyxhQUFLO0FBQ0wsZUFBTztBQUFBLE1BQ1IsT0FBTztBQUdOLGFBQUs7QUFDTCxlQUFPO0FBQ1AsbUJBQVc7QUFBQSxNQUNaO0FBQUEsSUFDRDtBQUNBLFFBQUssT0FBTyxPQUFRO0FBQ25CLFdBQUs7QUFBQSxJQUNOLFdBQVksQ0FBQyxJQUFLO0FBQ2pCLGFBQU87QUFBQSxJQUNSO0FBRUEsUUFBSyxRQUFRLEdBQUk7QUFDaEIsZUFBUztBQUNULFdBQUssU0FBVSxPQUFRO0FBR3RCLFFBQUFBLFFBQU8sRUFBRSxJQUFLLEtBQU07QUFDcEIsZUFBTyxPQUFPLE1BQU8sTUFBTSxTQUFVO0FBQUEsTUFDdEM7QUFHQSxTQUFHLE9BQU8sT0FBTyxTQUFVLE9BQU8sT0FBT0EsUUFBTztBQUFBLElBQ2pEO0FBQ0EsV0FBTyxLQUFLLEtBQU0sV0FBVztBQUM1QixNQUFBQSxRQUFPLE1BQU0sSUFBSyxNQUFNLE9BQU8sSUFBSSxNQUFNLFFBQVM7QUFBQSxJQUNuRCxDQUFFO0FBQUEsRUFDSDtBQU1BLEVBQUFBLFFBQU8sUUFBUTtBQUFBLElBRWQsS0FBSyxTQUFVLE1BQU0sT0FBTyxTQUFTLE1BQU0sVUFBVztBQUVyRCxVQUFJLGFBQWEsYUFBYSxLQUM3QixRQUFRLEdBQUcsV0FDWCxTQUFTLFVBQVUsTUFBTSxZQUFZLFVBQ3JDLFdBQVcsU0FBUyxJQUFLLElBQUs7QUFHL0IsVUFBSyxDQUFDLFdBQVksSUFBSyxHQUFJO0FBQzFCO0FBQUEsTUFDRDtBQUdBLFVBQUssUUFBUSxTQUFVO0FBQ3RCLHNCQUFjO0FBQ2Qsa0JBQVUsWUFBWTtBQUN0QixtQkFBVyxZQUFZO0FBQUEsTUFDeEI7QUFJQSxVQUFLLFVBQVc7QUFDZixRQUFBQSxRQUFPLEtBQUssZ0JBQWlCLG1CQUFtQixRQUFTO0FBQUEsTUFDMUQ7QUFHQSxVQUFLLENBQUMsUUFBUSxNQUFPO0FBQ3BCLGdCQUFRLE9BQU9BLFFBQU87QUFBQSxNQUN2QjtBQUdBLFVBQUssRUFBRyxTQUFTLFNBQVMsU0FBVztBQUNwQyxpQkFBUyxTQUFTLFNBQVMsdUJBQU8sT0FBUSxJQUFLO0FBQUEsTUFDaEQ7QUFDQSxVQUFLLEVBQUcsY0FBYyxTQUFTLFNBQVc7QUFDekMsc0JBQWMsU0FBUyxTQUFTLFNBQVUsR0FBSTtBQUk3QyxpQkFBTyxPQUFPQSxZQUFXLGVBQWVBLFFBQU8sTUFBTSxjQUFjLEVBQUUsT0FDcEVBLFFBQU8sTUFBTSxTQUFTLE1BQU8sTUFBTSxTQUFVLElBQUk7QUFBQSxRQUNuRDtBQUFBLE1BQ0Q7QUFHQSxlQUFVLFNBQVMsSUFBSyxNQUFPLGFBQWMsS0FBSyxDQUFFLEVBQUc7QUFDdkQsVUFBSSxNQUFNO0FBQ1YsYUFBUSxLQUFNO0FBQ2IsY0FBTSxlQUFlLEtBQU0sTUFBTyxDQUFFLENBQUUsS0FBSyxDQUFDO0FBQzVDLGVBQU8sV0FBVyxJQUFLLENBQUU7QUFDekIsc0JBQWUsSUFBSyxDQUFFLEtBQUssSUFBSyxNQUFPLEdBQUksRUFBRSxLQUFLO0FBR2xELFlBQUssQ0FBQyxNQUFPO0FBQ1o7QUFBQSxRQUNEO0FBR0Esa0JBQVVBLFFBQU8sTUFBTSxRQUFTLElBQUssS0FBSyxDQUFDO0FBRzNDLGdCQUFTLFdBQVcsUUFBUSxlQUFlLFFBQVEsYUFBYztBQUdqRSxrQkFBVUEsUUFBTyxNQUFNLFFBQVMsSUFBSyxLQUFLLENBQUM7QUFHM0Msb0JBQVlBLFFBQU8sT0FBUTtBQUFBLFVBQzFCO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQSxNQUFNLFFBQVE7QUFBQSxVQUNkO0FBQUEsVUFDQSxjQUFjLFlBQVlBLFFBQU8sS0FBSyxNQUFNLGFBQWEsS0FBTSxRQUFTO0FBQUEsVUFDeEUsV0FBVyxXQUFXLEtBQU0sR0FBSTtBQUFBLFFBQ2pDLEdBQUcsV0FBWTtBQUdmLFlBQUssRUFBRyxXQUFXLE9BQVEsSUFBSyxJQUFNO0FBQ3JDLHFCQUFXLE9BQVEsSUFBSyxJQUFJLENBQUM7QUFDN0IsbUJBQVMsZ0JBQWdCO0FBR3pCLGNBQUssQ0FBQyxRQUFRLFNBQ2IsUUFBUSxNQUFNLEtBQU0sTUFBTSxNQUFNLFlBQVksV0FBWSxNQUFNLE9BQVE7QUFFdEUsZ0JBQUssS0FBSyxrQkFBbUI7QUFDNUIsbUJBQUssaUJBQWtCLE1BQU0sV0FBWTtBQUFBLFlBQzFDO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFFQSxZQUFLLFFBQVEsS0FBTTtBQUNsQixrQkFBUSxJQUFJLEtBQU0sTUFBTSxTQUFVO0FBRWxDLGNBQUssQ0FBQyxVQUFVLFFBQVEsTUFBTztBQUM5QixzQkFBVSxRQUFRLE9BQU8sUUFBUTtBQUFBLFVBQ2xDO0FBQUEsUUFDRDtBQUdBLFlBQUssVUFBVztBQUNmLG1CQUFTLE9BQVEsU0FBUyxpQkFBaUIsR0FBRyxTQUFVO0FBQUEsUUFDekQsT0FBTztBQUNOLG1CQUFTLEtBQU0sU0FBVTtBQUFBLFFBQzFCO0FBQUEsTUFDRDtBQUFBLElBRUQ7QUFBQTtBQUFBLElBR0EsUUFBUSxTQUFVLE1BQU0sT0FBTyxTQUFTLFVBQVUsYUFBYztBQUUvRCxVQUFJLEdBQUcsV0FBVyxLQUNqQixRQUFRLEdBQUcsV0FDWCxTQUFTLFVBQVUsTUFBTSxZQUFZLFVBQ3JDLFdBQVcsU0FBUyxRQUFTLElBQUssS0FBSyxTQUFTLElBQUssSUFBSztBQUUzRCxVQUFLLENBQUMsWUFBWSxFQUFHLFNBQVMsU0FBUyxTQUFXO0FBQ2pEO0FBQUEsTUFDRDtBQUdBLGVBQVUsU0FBUyxJQUFLLE1BQU8sYUFBYyxLQUFLLENBQUUsRUFBRztBQUN2RCxVQUFJLE1BQU07QUFDVixhQUFRLEtBQU07QUFDYixjQUFNLGVBQWUsS0FBTSxNQUFPLENBQUUsQ0FBRSxLQUFLLENBQUM7QUFDNUMsZUFBTyxXQUFXLElBQUssQ0FBRTtBQUN6QixzQkFBZSxJQUFLLENBQUUsS0FBSyxJQUFLLE1BQU8sR0FBSSxFQUFFLEtBQUs7QUFHbEQsWUFBSyxDQUFDLE1BQU87QUFDWixlQUFNLFFBQVEsUUFBUztBQUN0QixZQUFBQSxRQUFPLE1BQU0sT0FBUSxNQUFNLE9BQU8sTUFBTyxDQUFFLEdBQUcsU0FBUyxVQUFVLElBQUs7QUFBQSxVQUN2RTtBQUNBO0FBQUEsUUFDRDtBQUVBLGtCQUFVQSxRQUFPLE1BQU0sUUFBUyxJQUFLLEtBQUssQ0FBQztBQUMzQyxnQkFBUyxXQUFXLFFBQVEsZUFBZSxRQUFRLGFBQWM7QUFDakUsbUJBQVcsT0FBUSxJQUFLLEtBQUssQ0FBQztBQUM5QixjQUFNLElBQUssQ0FBRSxLQUNaLElBQUksT0FBUSxZQUFZLFdBQVcsS0FBTSxlQUFnQixJQUFJLFNBQVU7QUFHeEUsb0JBQVksSUFBSSxTQUFTO0FBQ3pCLGVBQVEsS0FBTTtBQUNiLHNCQUFZLFNBQVUsQ0FBRTtBQUV4QixlQUFPLGVBQWUsYUFBYSxVQUFVLGNBQzFDLENBQUMsV0FBVyxRQUFRLFNBQVMsVUFBVSxVQUN2QyxDQUFDLE9BQU8sSUFBSSxLQUFNLFVBQVUsU0FBVSxPQUN0QyxDQUFDLFlBQVksYUFBYSxVQUFVLFlBQ3JDLGFBQWEsUUFBUSxVQUFVLFdBQWE7QUFDN0MscUJBQVMsT0FBUSxHQUFHLENBQUU7QUFFdEIsZ0JBQUssVUFBVSxVQUFXO0FBQ3pCLHVCQUFTO0FBQUEsWUFDVjtBQUNBLGdCQUFLLFFBQVEsUUFBUztBQUNyQixzQkFBUSxPQUFPLEtBQU0sTUFBTSxTQUFVO0FBQUEsWUFDdEM7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUlBLFlBQUssYUFBYSxDQUFDLFNBQVMsUUFBUztBQUNwQyxjQUFLLENBQUMsUUFBUSxZQUNiLFFBQVEsU0FBUyxLQUFNLE1BQU0sWUFBWSxTQUFTLE1BQU8sTUFBTSxPQUFRO0FBRXZFLFlBQUFBLFFBQU8sWUFBYSxNQUFNLE1BQU0sU0FBUyxNQUFPO0FBQUEsVUFDakQ7QUFFQSxpQkFBTyxPQUFRLElBQUs7QUFBQSxRQUNyQjtBQUFBLE1BQ0Q7QUFHQSxVQUFLQSxRQUFPLGNBQWUsTUFBTyxHQUFJO0FBQ3JDLGlCQUFTLE9BQVEsTUFBTSxlQUFnQjtBQUFBLE1BQ3hDO0FBQUEsSUFDRDtBQUFBLElBRUEsVUFBVSxTQUFVLGFBQWM7QUFFakMsVUFBSUQsSUFBRyxHQUFHLEtBQUssU0FBUyxXQUFXLGNBQ2xDLE9BQU8sSUFBSSxNQUFPLFVBQVUsTUFBTyxHQUduQyxRQUFRQyxRQUFPLE1BQU0sSUFBSyxXQUFZLEdBRXRDLFlBQ0MsU0FBUyxJQUFLLE1BQU0sUUFBUyxLQUFLLHVCQUFPLE9BQVEsSUFBSyxHQUNwRCxNQUFNLElBQUssS0FBSyxDQUFDLEdBQ3BCLFVBQVVBLFFBQU8sTUFBTSxRQUFTLE1BQU0sSUFBSyxLQUFLLENBQUM7QUFHbEQsV0FBTSxDQUFFLElBQUk7QUFFWixXQUFNRCxLQUFJLEdBQUdBLEtBQUksVUFBVSxRQUFRQSxNQUFNO0FBQ3hDLGFBQU1BLEVBQUUsSUFBSSxVQUFXQSxFQUFFO0FBQUEsTUFDMUI7QUFFQSxZQUFNLGlCQUFpQjtBQUd2QixVQUFLLFFBQVEsZUFBZSxRQUFRLFlBQVksS0FBTSxNQUFNLEtBQU0sTUFBTSxPQUFRO0FBQy9FO0FBQUEsTUFDRDtBQUdBLHFCQUFlQyxRQUFPLE1BQU0sU0FBUyxLQUFNLE1BQU0sT0FBTyxRQUFTO0FBR2pFLE1BQUFELEtBQUk7QUFDSixjQUFVLFVBQVUsYUFBY0EsSUFBSSxNQUFPLENBQUMsTUFBTSxxQkFBcUIsR0FBSTtBQUM1RSxjQUFNLGdCQUFnQixRQUFRO0FBRTlCLFlBQUk7QUFDSixnQkFBVSxZQUFZLFFBQVEsU0FBVSxHQUFJLE1BQzNDLENBQUMsTUFBTSw4QkFBOEIsR0FBSTtBQUl6QyxjQUFLLENBQUMsTUFBTSxjQUFjLFVBQVUsY0FBYyxTQUNqRCxNQUFNLFdBQVcsS0FBTSxVQUFVLFNBQVUsR0FBSTtBQUUvQyxrQkFBTSxZQUFZO0FBQ2xCLGtCQUFNLE9BQU8sVUFBVTtBQUV2QixvQkFBVUMsUUFBTyxNQUFNLFFBQVMsVUFBVSxRQUFTLEtBQUssQ0FBQyxHQUFJLFVBQzVELFVBQVUsU0FBVSxNQUFPLFFBQVEsTUFBTSxJQUFLO0FBRS9DLGdCQUFLLFFBQVEsUUFBWTtBQUN4QixtQkFBTyxNQUFNLFNBQVMsU0FBVSxPQUFRO0FBQ3ZDLHNCQUFNLGVBQWU7QUFDckIsc0JBQU0sZ0JBQWdCO0FBQUEsY0FDdkI7QUFBQSxZQUNEO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBR0EsVUFBSyxRQUFRLGNBQWU7QUFDM0IsZ0JBQVEsYUFBYSxLQUFNLE1BQU0sS0FBTTtBQUFBLE1BQ3hDO0FBRUEsYUFBTyxNQUFNO0FBQUEsSUFDZDtBQUFBLElBRUEsVUFBVSxTQUFVLE9BQU8sVUFBVztBQUNyQyxVQUFJRCxJQUFHLFdBQVcsS0FBSyxpQkFBaUIsa0JBQ3ZDLGVBQWUsQ0FBQyxHQUNoQixnQkFBZ0IsU0FBUyxlQUN6QixNQUFNLE1BQU07QUFHYixVQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU9KLEVBQUcsTUFBTSxTQUFTLFdBQVcsTUFBTSxVQUFVLElBQU07QUFFbkQsZUFBUSxRQUFRLE1BQU0sTUFBTSxJQUFJLGNBQWMsTUFBTztBQUlwRCxjQUFLLElBQUksYUFBYSxLQUFLLEVBQUcsTUFBTSxTQUFTLFdBQVcsSUFBSSxhQUFhLE9BQVM7QUFDakYsOEJBQWtCLENBQUM7QUFDbkIsK0JBQW1CLENBQUM7QUFDcEIsaUJBQU1BLEtBQUksR0FBR0EsS0FBSSxlQUFlQSxNQUFNO0FBQ3JDLDBCQUFZLFNBQVVBLEVBQUU7QUFHeEIsb0JBQU0sVUFBVSxXQUFXO0FBRTNCLGtCQUFLLGlCQUFrQixHQUFJLE1BQU0sUUFBWTtBQUM1QyxpQ0FBa0IsR0FBSSxJQUFJLFVBQVUsZUFDbkNDLFFBQVEsS0FBSyxJQUFLLEVBQUUsTUFBTyxHQUFJLElBQUksS0FDbkNBLFFBQU8sS0FBTSxLQUFLLE1BQU0sTUFBTSxDQUFFLEdBQUksQ0FBRSxFQUFFO0FBQUEsY0FDMUM7QUFDQSxrQkFBSyxpQkFBa0IsR0FBSSxHQUFJO0FBQzlCLGdDQUFnQixLQUFNLFNBQVU7QUFBQSxjQUNqQztBQUFBLFlBQ0Q7QUFDQSxnQkFBSyxnQkFBZ0IsUUFBUztBQUM3QiwyQkFBYSxLQUFNLEVBQUUsTUFBTSxLQUFLLFVBQVUsZ0JBQWdCLENBQUU7QUFBQSxZQUM3RDtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUdBLFlBQU07QUFDTixVQUFLLGdCQUFnQixTQUFTLFFBQVM7QUFDdEMscUJBQWEsS0FBTSxFQUFFLE1BQU0sS0FBSyxVQUFVLFNBQVMsTUFBTyxhQUFjLEVBQUUsQ0FBRTtBQUFBLE1BQzdFO0FBRUEsYUFBTztBQUFBLElBQ1I7QUFBQSxJQUVBLFNBQVMsU0FBVSxNQUFNLE1BQU87QUFDL0IsYUFBTyxlQUFnQkEsUUFBTyxNQUFNLFdBQVcsTUFBTTtBQUFBLFFBQ3BELFlBQVk7QUFBQSxRQUNaLGNBQWM7QUFBQSxRQUVkLEtBQUssT0FBTyxTQUFTLGFBQ3BCLFdBQVc7QUFDVixjQUFLLEtBQUssZUFBZ0I7QUFDekIsbUJBQU8sS0FBTSxLQUFLLGFBQWM7QUFBQSxVQUNqQztBQUFBLFFBQ0QsSUFDQSxXQUFXO0FBQ1YsY0FBSyxLQUFLLGVBQWdCO0FBQ3pCLG1CQUFPLEtBQUssY0FBZSxJQUFLO0FBQUEsVUFDakM7QUFBQSxRQUNEO0FBQUEsUUFFRCxLQUFLLFNBQVUsT0FBUTtBQUN0QixpQkFBTyxlQUFnQixNQUFNLE1BQU07QUFBQSxZQUNsQyxZQUFZO0FBQUEsWUFDWixjQUFjO0FBQUEsWUFDZCxVQUFVO0FBQUEsWUFDVjtBQUFBLFVBQ0QsQ0FBRTtBQUFBLFFBQ0g7QUFBQSxNQUNELENBQUU7QUFBQSxJQUNIO0FBQUEsSUFFQSxLQUFLLFNBQVUsZUFBZ0I7QUFDOUIsYUFBTyxjQUFlQSxRQUFPLE9BQVEsSUFDcEMsZ0JBQ0EsSUFBSUEsUUFBTyxNQUFPLGFBQWM7QUFBQSxJQUNsQztBQUFBLElBRUEsU0FBU0EsUUFBTyxPQUFRLHVCQUFPLE9BQVEsSUFBSyxHQUFHO0FBQUEsTUFDOUMsTUFBTTtBQUFBO0FBQUEsUUFHTCxVQUFVO0FBQUEsTUFDWDtBQUFBLE1BQ0EsT0FBTztBQUFBO0FBQUEsUUFHTixPQUFPLFNBQVUsTUFBTztBQUl2QixjQUFJLEtBQUssUUFBUTtBQUdqQixjQUFLLGVBQWUsS0FBTSxHQUFHLElBQUssS0FDakMsR0FBRyxTQUFTLFNBQVUsSUFBSSxPQUFRLEdBQUk7QUFHdEMsMkJBQWdCLElBQUksU0FBUyxJQUFLO0FBQUEsVUFDbkM7QUFHQSxpQkFBTztBQUFBLFFBQ1I7QUFBQSxRQUNBLFNBQVMsU0FBVSxNQUFPO0FBSXpCLGNBQUksS0FBSyxRQUFRO0FBR2pCLGNBQUssZUFBZSxLQUFNLEdBQUcsSUFBSyxLQUNqQyxHQUFHLFNBQVMsU0FBVSxJQUFJLE9BQVEsR0FBSTtBQUV0QywyQkFBZ0IsSUFBSSxPQUFRO0FBQUEsVUFDN0I7QUFHQSxpQkFBTztBQUFBLFFBQ1I7QUFBQTtBQUFBO0FBQUEsUUFJQSxVQUFVLFNBQVUsT0FBUTtBQUMzQixjQUFJLFNBQVMsTUFBTTtBQUNuQixpQkFBTyxlQUFlLEtBQU0sT0FBTyxJQUFLLEtBQ3ZDLE9BQU8sU0FBUyxTQUFVLFFBQVEsT0FBUSxLQUMxQyxTQUFTLElBQUssUUFBUSxPQUFRLEtBQzlCLFNBQVUsUUFBUSxHQUFJO0FBQUEsUUFDeEI7QUFBQSxNQUNEO0FBQUEsTUFFQSxjQUFjO0FBQUEsUUFDYixjQUFjLFNBQVUsT0FBUTtBQUsvQixjQUFLLE1BQU0sV0FBVyxVQUFhLE1BQU0sZUFBZ0I7QUFDeEQsa0JBQU0sY0FBYyxjQUFjLE1BQU07QUFBQSxVQUN6QztBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRCxDQUFFO0FBQUEsRUFDSDtBQU1BLFdBQVMsZUFBZ0IsSUFBSSxNQUFNLFNBQVU7QUFHNUMsUUFBSyxDQUFDLFNBQVU7QUFDZixVQUFLLFNBQVMsSUFBSyxJQUFJLElBQUssTUFBTSxRQUFZO0FBQzdDLFFBQUFBLFFBQU8sTUFBTSxJQUFLLElBQUksTUFBTSxVQUFXO0FBQUEsTUFDeEM7QUFDQTtBQUFBLElBQ0Q7QUFHQSxhQUFTLElBQUssSUFBSSxNQUFNLEtBQU07QUFDOUIsSUFBQUEsUUFBTyxNQUFNLElBQUssSUFBSSxNQUFNO0FBQUEsTUFDM0IsV0FBVztBQUFBLE1BQ1gsU0FBUyxTQUFVLE9BQVE7QUFDMUIsWUFBSSxRQUNILFFBQVEsU0FBUyxJQUFLLE1BQU0sSUFBSztBQWlCbEMsWUFBTyxNQUFNLFlBQVksS0FBTyxLQUFNLElBQUssR0FBSTtBQUc5QyxjQUFLLENBQUMsTUFBTSxRQUFTO0FBS3BCLG9CQUFRLE1BQU0sS0FBTSxTQUFVO0FBQzlCLHFCQUFTLElBQUssTUFBTSxNQUFNLEtBQU07QUFHaEMsaUJBQU0sSUFBSyxFQUFFO0FBQ2IscUJBQVMsU0FBUyxJQUFLLE1BQU0sSUFBSztBQUNsQyxxQkFBUyxJQUFLLE1BQU0sTUFBTSxLQUFNO0FBRWhDLGdCQUFLLFVBQVUsUUFBUztBQUd2QixvQkFBTSx5QkFBeUI7QUFDL0Isb0JBQU0sZUFBZTtBQVFyQixxQkFBTyxVQUFVLE9BQU87QUFBQSxZQUN6QjtBQUFBLFVBTUQsWUFBY0EsUUFBTyxNQUFNLFFBQVMsSUFBSyxLQUFLLENBQUMsR0FBSSxjQUFlO0FBQ2pFLGtCQUFNLGdCQUFnQjtBQUFBLFVBQ3ZCO0FBQUEsUUFJRCxXQUFZLE1BQU0sUUFBUztBQUcxQixtQkFBUyxJQUFLLE1BQU0sTUFBTTtBQUFBLFlBQ3pCLE9BQU9BLFFBQU8sTUFBTTtBQUFBLGNBQ25CLE1BQU8sQ0FBRTtBQUFBLGNBQ1QsTUFBTSxNQUFPLENBQUU7QUFBQSxjQUNmO0FBQUEsWUFDRDtBQUFBLFVBQ0QsQ0FBRTtBQVVGLGdCQUFNLGdCQUFnQjtBQUN0QixnQkFBTSxnQ0FBZ0M7QUFBQSxRQUN2QztBQUFBLE1BQ0Q7QUFBQSxJQUNELENBQUU7QUFBQSxFQUNIO0FBRUEsRUFBQUEsUUFBTyxjQUFjLFNBQVUsTUFBTSxNQUFNLFFBQVM7QUFHbkQsUUFBSyxLQUFLLHFCQUFzQjtBQUMvQixXQUFLLG9CQUFxQixNQUFNLE1BQU87QUFBQSxJQUN4QztBQUFBLEVBQ0Q7QUFFQSxFQUFBQSxRQUFPLFFBQVEsU0FBVSxLQUFLLE9BQVE7QUFHckMsUUFBSyxFQUFHLGdCQUFnQkEsUUFBTyxRQUFVO0FBQ3hDLGFBQU8sSUFBSUEsUUFBTyxNQUFPLEtBQUssS0FBTTtBQUFBLElBQ3JDO0FBR0EsUUFBSyxPQUFPLElBQUksTUFBTztBQUN0QixXQUFLLGdCQUFnQjtBQUNyQixXQUFLLE9BQU8sSUFBSTtBQUloQixXQUFLLHFCQUFxQixJQUFJLG1CQUM3QixhQUNBO0FBR0QsV0FBSyxTQUFTLElBQUk7QUFDbEIsV0FBSyxnQkFBZ0IsSUFBSTtBQUN6QixXQUFLLGdCQUFnQixJQUFJO0FBQUEsSUFHMUIsT0FBTztBQUNOLFdBQUssT0FBTztBQUFBLElBQ2I7QUFHQSxRQUFLLE9BQVE7QUFDWixNQUFBQSxRQUFPLE9BQVEsTUFBTSxLQUFNO0FBQUEsSUFDNUI7QUFHQSxTQUFLLFlBQVksT0FBTyxJQUFJLGFBQWEsS0FBSyxJQUFJO0FBR2xELFNBQU1BLFFBQU8sT0FBUSxJQUFJO0FBQUEsRUFDMUI7QUFJQSxFQUFBQSxRQUFPLE1BQU0sWUFBWTtBQUFBLElBQ3hCLGFBQWFBLFFBQU87QUFBQSxJQUNwQixvQkFBb0I7QUFBQSxJQUNwQixzQkFBc0I7QUFBQSxJQUN0QiwrQkFBK0I7QUFBQSxJQUMvQixhQUFhO0FBQUEsSUFFYixnQkFBZ0IsV0FBVztBQUMxQixVQUFJLElBQUksS0FBSztBQUViLFdBQUsscUJBQXFCO0FBRTFCLFVBQUssS0FBSyxDQUFDLEtBQUssYUFBYztBQUM3QixVQUFFLGVBQWU7QUFBQSxNQUNsQjtBQUFBLElBQ0Q7QUFBQSxJQUNBLGlCQUFpQixXQUFXO0FBQzNCLFVBQUksSUFBSSxLQUFLO0FBRWIsV0FBSyx1QkFBdUI7QUFFNUIsVUFBSyxLQUFLLENBQUMsS0FBSyxhQUFjO0FBQzdCLFVBQUUsZ0JBQWdCO0FBQUEsTUFDbkI7QUFBQSxJQUNEO0FBQUEsSUFDQSwwQkFBMEIsV0FBVztBQUNwQyxVQUFJLElBQUksS0FBSztBQUViLFdBQUssZ0NBQWdDO0FBRXJDLFVBQUssS0FBSyxDQUFDLEtBQUssYUFBYztBQUM3QixVQUFFLHlCQUF5QjtBQUFBLE1BQzVCO0FBRUEsV0FBSyxnQkFBZ0I7QUFBQSxJQUN0QjtBQUFBLEVBQ0Q7QUFHQSxFQUFBQSxRQUFPLEtBQU07QUFBQSxJQUNaLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULFlBQVk7QUFBQSxJQUNaLGdCQUFnQjtBQUFBLElBQ2hCLFNBQVM7QUFBQSxJQUNULFFBQVE7QUFBQSxJQUNSLFlBQVk7QUFBQSxJQUNaLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLEtBQUs7QUFBQSxJQUNMLFNBQVM7QUFBQSxJQUNULFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxJQUNYLGFBQWE7QUFBQSxJQUNiLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNULGVBQWU7QUFBQSxJQUNmLFdBQVc7QUFBQSxJQUNYLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxFQUNSLEdBQUdBLFFBQU8sTUFBTSxPQUFRO0FBRXhCLEVBQUFBLFFBQU8sS0FBTSxFQUFFLE9BQU8sV0FBVyxNQUFNLFdBQVcsR0FBRyxTQUFVLE1BQU0sY0FBZTtBQU1uRixhQUFTLG1CQUFvQixhQUFjO0FBRzFDLFVBQUksUUFBUUEsUUFBTyxNQUFNLElBQUssV0FBWTtBQUMxQyxZQUFNLE9BQU8sWUFBWSxTQUFTLFlBQVksVUFBVTtBQUN4RCxZQUFNLGNBQWM7QUFJcEIsVUFBSyxNQUFNLFdBQVcsTUFBTSxlQUFnQjtBQUszQyxpQkFBUyxJQUFLLE1BQU0sUUFBUyxFQUFHLEtBQU07QUFBQSxNQUN2QztBQUFBLElBQ0Q7QUFFQSxJQUFBQSxRQUFPLE1BQU0sUUFBUyxJQUFLLElBQUk7QUFBQTtBQUFBLE1BRzlCLE9BQU8sV0FBVztBQUtqQix1QkFBZ0IsTUFBTSxNQUFNLElBQUs7QUFFakMsWUFBSyxNQUFPO0FBQ1gsZUFBSyxpQkFBa0IsY0FBYyxrQkFBbUI7QUFBQSxRQUN6RCxPQUFPO0FBR04saUJBQU87QUFBQSxRQUNSO0FBQUEsTUFDRDtBQUFBLE1BQ0EsU0FBUyxXQUFXO0FBR25CLHVCQUFnQixNQUFNLElBQUs7QUFHM0IsZUFBTztBQUFBLE1BQ1I7QUFBQSxNQUVBLFVBQVUsV0FBVztBQUNwQixZQUFLLE1BQU87QUFDWCxlQUFLLG9CQUFxQixjQUFjLGtCQUFtQjtBQUFBLFFBQzVELE9BQU87QUFHTixpQkFBTztBQUFBLFFBQ1I7QUFBQSxNQUNEO0FBQUE7QUFBQTtBQUFBLE1BSUEsVUFBVSxTQUFVLE9BQVE7QUFDM0IsZUFBTyxTQUFTLElBQUssTUFBTSxRQUFRLElBQUs7QUFBQSxNQUN6QztBQUFBLE1BRUE7QUFBQSxJQUNEO0FBQUEsRUFDRCxDQUFFO0FBS0YsRUFBQUEsUUFBTyxLQUFNO0FBQUEsSUFDWixZQUFZO0FBQUEsSUFDWixZQUFZO0FBQUEsSUFDWixjQUFjO0FBQUEsSUFDZCxjQUFjO0FBQUEsRUFDZixHQUFHLFNBQVUsTUFBTSxLQUFNO0FBQ3hCLElBQUFBLFFBQU8sTUFBTSxRQUFTLElBQUssSUFBSTtBQUFBLE1BQzlCLGNBQWM7QUFBQSxNQUNkLFVBQVU7QUFBQSxNQUVWLFFBQVEsU0FBVSxPQUFRO0FBQ3pCLFlBQUksS0FDSCxTQUFTLE1BQ1QsVUFBVSxNQUFNLGVBQ2hCLFlBQVksTUFBTTtBQUluQixZQUFLLENBQUMsV0FBYSxZQUFZLFVBQVUsQ0FBQ0EsUUFBTyxTQUFVLFFBQVEsT0FBUSxHQUFNO0FBQ2hGLGdCQUFNLE9BQU8sVUFBVTtBQUN2QixnQkFBTSxVQUFVLFFBQVEsTUFBTyxNQUFNLFNBQVU7QUFDL0MsZ0JBQU0sT0FBTztBQUFBLFFBQ2Q7QUFDQSxlQUFPO0FBQUEsTUFDUjtBQUFBLElBQ0Q7QUFBQSxFQUNELENBQUU7QUFFRixFQUFBQSxRQUFPLEdBQUcsT0FBUTtBQUFBLElBRWpCLElBQUksU0FBVSxPQUFPLFVBQVUsTUFBTSxJQUFLO0FBQ3pDLGFBQU8sR0FBSSxNQUFNLE9BQU8sVUFBVSxNQUFNLEVBQUc7QUFBQSxJQUM1QztBQUFBLElBQ0EsS0FBSyxTQUFVLE9BQU8sVUFBVSxNQUFNLElBQUs7QUFDMUMsYUFBTyxHQUFJLE1BQU0sT0FBTyxVQUFVLE1BQU0sSUFBSSxDQUFFO0FBQUEsSUFDL0M7QUFBQSxJQUNBLEtBQUssU0FBVSxPQUFPLFVBQVUsSUFBSztBQUNwQyxVQUFJLFdBQVc7QUFDZixVQUFLLFNBQVMsTUFBTSxrQkFBa0IsTUFBTSxXQUFZO0FBR3ZELG9CQUFZLE1BQU07QUFDbEIsUUFBQUEsUUFBUSxNQUFNLGNBQWUsRUFBRTtBQUFBLFVBQzlCLFVBQVUsWUFDVCxVQUFVLFdBQVcsTUFBTSxVQUFVLFlBQ3JDLFVBQVU7QUFBQSxVQUNYLFVBQVU7QUFBQSxVQUNWLFVBQVU7QUFBQSxRQUNYO0FBQ0EsZUFBTztBQUFBLE1BQ1I7QUFDQSxVQUFLLE9BQU8sVUFBVSxVQUFXO0FBR2hDLGFBQU0sUUFBUSxPQUFRO0FBQ3JCLGVBQUssSUFBSyxNQUFNLFVBQVUsTUFBTyxJQUFLLENBQUU7QUFBQSxRQUN6QztBQUNBLGVBQU87QUFBQSxNQUNSO0FBQ0EsVUFBSyxhQUFhLFNBQVMsT0FBTyxhQUFhLFlBQWE7QUFHM0QsYUFBSztBQUNMLG1CQUFXO0FBQUEsTUFDWjtBQUNBLFVBQUssT0FBTyxPQUFRO0FBQ25CLGFBQUs7QUFBQSxNQUNOO0FBQ0EsYUFBTyxLQUFLLEtBQU0sV0FBVztBQUM1QixRQUFBQSxRQUFPLE1BQU0sT0FBUSxNQUFNLE9BQU8sSUFBSSxRQUFTO0FBQUEsTUFDaEQsQ0FBRTtBQUFBLElBQ0g7QUFBQSxFQUNELENBQUU7QUFFRixNQUlDLGVBQWU7QUFHaEIsV0FBUyxtQkFBb0IsTUFBTSxTQUFVO0FBQzVDLFFBQUssU0FBVSxNQUFNLE9BQVEsS0FDNUIsU0FBVSxRQUFRLGFBQWEsS0FBSyxVQUFVLFFBQVEsWUFBWSxJQUFLLEdBQUk7QUFFM0UsYUFBT0EsUUFBUSxJQUFLLEVBQUUsU0FBVSxPQUFRLEVBQUcsQ0FBRSxLQUFLO0FBQUEsSUFDbkQ7QUFFQSxXQUFPO0FBQUEsRUFDUjtBQUVBLFdBQVMsZUFBZ0IsS0FBSyxNQUFPO0FBQ3BDLFFBQUksTUFBTUQsSUFBRyxHQUNaLFNBQVMsU0FBUyxJQUFLLEtBQUssUUFBUztBQUV0QyxRQUFLLEtBQUssYUFBYSxHQUFJO0FBQzFCO0FBQUEsSUFDRDtBQUdBLFFBQUssUUFBUztBQUNiLGVBQVMsT0FBUSxNQUFNLGVBQWdCO0FBQ3ZDLFdBQU0sUUFBUSxRQUFTO0FBQ3RCLGFBQU1BLEtBQUksR0FBRyxJQUFJLE9BQVEsSUFBSyxFQUFFLFFBQVFBLEtBQUksR0FBR0EsTUFBTTtBQUNwRCxVQUFBQyxRQUFPLE1BQU0sSUFBSyxNQUFNLE1BQU0sT0FBUSxJQUFLLEVBQUdELEVBQUUsQ0FBRTtBQUFBLFFBQ25EO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFHQSxRQUFLLFNBQVMsUUFBUyxHQUFJLEdBQUk7QUFDOUIsZUFBUyxJQUFLLE1BQU1DLFFBQU8sT0FBUSxDQUFDLEdBQUcsU0FBUyxJQUFLLEdBQUksQ0FBRSxDQUFFO0FBQUEsSUFDOUQ7QUFBQSxFQUNEO0FBRUEsV0FBUyxPQUFRLE1BQU0sVUFBVSxVQUFXO0FBQzNDLFFBQUksTUFDSCxRQUFRLFdBQVdBLFFBQU8sT0FBUSxVQUFVLElBQUssSUFBSSxNQUNyREQsS0FBSTtBQUVMLFlBQVUsT0FBTyxNQUFPQSxFQUFFLE1BQU8sTUFBTUEsTUFBTTtBQUM1QyxVQUFLLENBQUMsWUFBWSxLQUFLLGFBQWEsR0FBSTtBQUN2QyxRQUFBQyxRQUFPLFVBQVcsT0FBUSxJQUFLLENBQUU7QUFBQSxNQUNsQztBQUVBLFVBQUssS0FBSyxZQUFhO0FBQ3RCLFlBQUssWUFBWSxXQUFZLElBQUssR0FBSTtBQUNyQyx3QkFBZSxPQUFRLE1BQU0sUUFBUyxDQUFFO0FBQUEsUUFDekM7QUFDQSxhQUFLLFdBQVcsWUFBYSxJQUFLO0FBQUEsTUFDbkM7QUFBQSxJQUNEO0FBRUEsV0FBTztBQUFBLEVBQ1I7QUFFQSxFQUFBQSxRQUFPLE9BQVE7QUFBQSxJQUNkLGVBQWUsU0FBVSxNQUFPO0FBQy9CLGFBQU87QUFBQSxJQUNSO0FBQUEsSUFFQSxPQUFPLFNBQVUsTUFBTSxlQUFlLG1CQUFvQjtBQUN6RCxVQUFJRCxJQUFHLEdBQUcsYUFBYSxjQUN0QixRQUFRLEtBQUssVUFBVyxJQUFLLEdBQzdCLFNBQVMsV0FBWSxJQUFLO0FBRzNCLFVBQUssU0FBVSxLQUFLLGFBQWEsS0FBSyxLQUFLLGFBQWEsT0FDdEQsQ0FBQ0MsUUFBTyxTQUFVLElBQUssR0FBSTtBQUk1Qix1QkFBZSxPQUFRLEtBQU07QUFDN0Isc0JBQWMsT0FBUSxJQUFLO0FBRTNCLGFBQU1ELEtBQUksR0FBRyxJQUFJLFlBQVksUUFBUUEsS0FBSSxHQUFHQSxNQUFNO0FBS2pELGNBQUssU0FBVSxhQUFjQSxFQUFFLEdBQUcsVUFBVyxHQUFJO0FBQ2hELHlCQUFjQSxFQUFFLEVBQUUsZUFBZSxZQUFhQSxFQUFFLEVBQUU7QUFBQSxVQUNuRDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBR0EsVUFBSyxlQUFnQjtBQUNwQixZQUFLLG1CQUFvQjtBQUN4Qix3QkFBYyxlQUFlLE9BQVEsSUFBSztBQUMxQyx5QkFBZSxnQkFBZ0IsT0FBUSxLQUFNO0FBRTdDLGVBQU1BLEtBQUksR0FBRyxJQUFJLFlBQVksUUFBUUEsS0FBSSxHQUFHQSxNQUFNO0FBQ2pELDJCQUFnQixZQUFhQSxFQUFFLEdBQUcsYUFBY0EsRUFBRSxDQUFFO0FBQUEsVUFDckQ7QUFBQSxRQUNELE9BQU87QUFDTix5QkFBZ0IsTUFBTSxLQUFNO0FBQUEsUUFDN0I7QUFBQSxNQUNEO0FBR0EscUJBQWUsT0FBUSxPQUFPLFFBQVM7QUFDdkMsVUFBSyxhQUFhLFNBQVMsR0FBSTtBQUM5QixzQkFBZSxjQUFjLENBQUMsVUFBVSxPQUFRLE1BQU0sUUFBUyxDQUFFO0FBQUEsTUFDbEU7QUFHQSxhQUFPO0FBQUEsSUFDUjtBQUFBLElBRUEsV0FBVyxTQUFVLE9BQVE7QUFDNUIsVUFBSSxNQUFNLE1BQU0sTUFDZixVQUFVQyxRQUFPLE1BQU0sU0FDdkJELEtBQUk7QUFFTCxjQUFVLE9BQU8sTUFBT0EsRUFBRSxPQUFRLFFBQVdBLE1BQU07QUFDbEQsWUFBSyxXQUFZLElBQUssR0FBSTtBQUN6QixjQUFPLE9BQU8sS0FBTSxTQUFTLE9BQVEsR0FBTTtBQUMxQyxnQkFBSyxLQUFLLFFBQVM7QUFDbEIsbUJBQU0sUUFBUSxLQUFLLFFBQVM7QUFDM0Isb0JBQUssUUFBUyxJQUFLLEdBQUk7QUFDdEIsa0JBQUFDLFFBQU8sTUFBTSxPQUFRLE1BQU0sSUFBSztBQUFBLGdCQUdqQyxPQUFPO0FBQ04sa0JBQUFBLFFBQU8sWUFBYSxNQUFNLE1BQU0sS0FBSyxNQUFPO0FBQUEsZ0JBQzdDO0FBQUEsY0FDRDtBQUFBLFlBQ0Q7QUFJQSxpQkFBTSxTQUFTLE9BQVEsSUFBSTtBQUFBLFVBQzVCO0FBQ0EsY0FBSyxLQUFNLFNBQVMsT0FBUSxHQUFJO0FBSS9CLGlCQUFNLFNBQVMsT0FBUSxJQUFJO0FBQUEsVUFDNUI7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNELENBQUU7QUFFRixFQUFBQSxRQUFPLEdBQUcsT0FBUTtBQUFBLElBQ2pCLFFBQVEsU0FBVSxVQUFXO0FBQzVCLGFBQU8sT0FBUSxNQUFNLFVBQVUsSUFBSztBQUFBLElBQ3JDO0FBQUEsSUFFQSxRQUFRLFNBQVUsVUFBVztBQUM1QixhQUFPLE9BQVEsTUFBTSxRQUFTO0FBQUEsSUFDL0I7QUFBQSxJQUVBLE1BQU0sU0FBVSxPQUFRO0FBQ3ZCLGFBQU8sT0FBUSxNQUFNLFNBQVVHLFFBQVE7QUFDdEMsZUFBT0EsV0FBVSxTQUNoQkgsUUFBTyxLQUFNLElBQUssSUFDbEIsS0FBSyxNQUFNLEVBQUUsS0FBTSxXQUFXO0FBQzdCLGNBQUssS0FBSyxhQUFhLEtBQUssS0FBSyxhQUFhLE1BQU0sS0FBSyxhQUFhLEdBQUk7QUFDekUsaUJBQUssY0FBY0c7QUFBQSxVQUNwQjtBQUFBLFFBQ0QsQ0FBRTtBQUFBLE1BQ0osR0FBRyxNQUFNLE9BQU8sVUFBVSxNQUFPO0FBQUEsSUFDbEM7QUFBQSxJQUVBLFFBQVEsV0FBVztBQUNsQixhQUFPLFNBQVUsTUFBTSxXQUFXLFNBQVUsTUFBTztBQUNsRCxZQUFLLEtBQUssYUFBYSxLQUFLLEtBQUssYUFBYSxNQUFNLEtBQUssYUFBYSxHQUFJO0FBQ3pFLGNBQUksU0FBUyxtQkFBb0IsTUFBTSxJQUFLO0FBQzVDLGlCQUFPLFlBQWEsSUFBSztBQUFBLFFBQzFCO0FBQUEsTUFDRCxDQUFFO0FBQUEsSUFDSDtBQUFBLElBRUEsU0FBUyxXQUFXO0FBQ25CLGFBQU8sU0FBVSxNQUFNLFdBQVcsU0FBVSxNQUFPO0FBQ2xELFlBQUssS0FBSyxhQUFhLEtBQUssS0FBSyxhQUFhLE1BQU0sS0FBSyxhQUFhLEdBQUk7QUFDekUsY0FBSSxTQUFTLG1CQUFvQixNQUFNLElBQUs7QUFDNUMsaUJBQU8sYUFBYyxNQUFNLE9BQU8sVUFBVztBQUFBLFFBQzlDO0FBQUEsTUFDRCxDQUFFO0FBQUEsSUFDSDtBQUFBLElBRUEsUUFBUSxXQUFXO0FBQ2xCLGFBQU8sU0FBVSxNQUFNLFdBQVcsU0FBVSxNQUFPO0FBQ2xELFlBQUssS0FBSyxZQUFhO0FBQ3RCLGVBQUssV0FBVyxhQUFjLE1BQU0sSUFBSztBQUFBLFFBQzFDO0FBQUEsTUFDRCxDQUFFO0FBQUEsSUFDSDtBQUFBLElBRUEsT0FBTyxXQUFXO0FBQ2pCLGFBQU8sU0FBVSxNQUFNLFdBQVcsU0FBVSxNQUFPO0FBQ2xELFlBQUssS0FBSyxZQUFhO0FBQ3RCLGVBQUssV0FBVyxhQUFjLE1BQU0sS0FBSyxXQUFZO0FBQUEsUUFDdEQ7QUFBQSxNQUNELENBQUU7QUFBQSxJQUNIO0FBQUEsSUFFQSxPQUFPLFdBQVc7QUFDakIsVUFBSSxNQUNISixLQUFJO0FBRUwsY0FBVSxPQUFPLEtBQU1BLEVBQUUsTUFBTyxNQUFNQSxNQUFNO0FBQzNDLFlBQUssS0FBSyxhQUFhLEdBQUk7QUFHMUIsVUFBQUMsUUFBTyxVQUFXLE9BQVEsTUFBTSxLQUFNLENBQUU7QUFHeEMsZUFBSyxjQUFjO0FBQUEsUUFDcEI7QUFBQSxNQUNEO0FBRUEsYUFBTztBQUFBLElBQ1I7QUFBQSxJQUVBLE9BQU8sU0FBVSxlQUFlLG1CQUFvQjtBQUNuRCxzQkFBZ0IsaUJBQWlCLE9BQU8sUUFBUTtBQUNoRCwwQkFBb0IscUJBQXFCLE9BQU8sZ0JBQWdCO0FBRWhFLGFBQU8sS0FBSyxJQUFLLFdBQVc7QUFDM0IsZUFBT0EsUUFBTyxNQUFPLE1BQU0sZUFBZSxpQkFBa0I7QUFBQSxNQUM3RCxDQUFFO0FBQUEsSUFDSDtBQUFBLElBRUEsTUFBTSxTQUFVLE9BQVE7QUFDdkIsYUFBTyxPQUFRLE1BQU0sU0FBVUcsUUFBUTtBQUN0QyxZQUFJLE9BQU8sS0FBTSxDQUFFLEtBQUssQ0FBQyxHQUN4QkosS0FBSSxHQUNKLElBQUksS0FBSztBQUVWLFlBQUtJLFdBQVUsVUFBYSxLQUFLLGFBQWEsR0FBSTtBQUNqRCxpQkFBTyxLQUFLO0FBQUEsUUFDYjtBQUdBLFlBQUssT0FBT0EsV0FBVSxZQUFZLENBQUMsYUFBYSxLQUFNQSxNQUFNLEtBQzNELENBQUMsU0FBVyxTQUFTLEtBQU1BLE1BQU0sS0FBSyxDQUFFLElBQUksRUFBRyxHQUFLLENBQUUsRUFBRSxZQUFZLENBQUUsR0FBSTtBQUUxRSxVQUFBQSxTQUFRSCxRQUFPLGNBQWVHLE1BQU07QUFFcEMsY0FBSTtBQUNILG1CQUFRSixLQUFJLEdBQUdBLE1BQU07QUFDcEIscUJBQU8sS0FBTUEsRUFBRSxLQUFLLENBQUM7QUFHckIsa0JBQUssS0FBSyxhQUFhLEdBQUk7QUFDMUIsZ0JBQUFDLFFBQU8sVUFBVyxPQUFRLE1BQU0sS0FBTSxDQUFFO0FBQ3hDLHFCQUFLLFlBQVlHO0FBQUEsY0FDbEI7QUFBQSxZQUNEO0FBRUEsbUJBQU87QUFBQSxVQUdSLFNBQVUsR0FBSTtBQUFBLFVBQUM7QUFBQSxRQUNoQjtBQUVBLFlBQUssTUFBTztBQUNYLGVBQUssTUFBTSxFQUFFLE9BQVFBLE1BQU07QUFBQSxRQUM1QjtBQUFBLE1BQ0QsR0FBRyxNQUFNLE9BQU8sVUFBVSxNQUFPO0FBQUEsSUFDbEM7QUFBQSxJQUVBLGFBQWEsV0FBVztBQUN2QixVQUFJLFVBQVUsQ0FBQztBQUdmLGFBQU8sU0FBVSxNQUFNLFdBQVcsU0FBVSxNQUFPO0FBQ2xELFlBQUksU0FBUyxLQUFLO0FBRWxCLFlBQUtILFFBQU8sUUFBUyxNQUFNLE9BQVEsSUFBSSxHQUFJO0FBQzFDLFVBQUFBLFFBQU8sVUFBVyxPQUFRLElBQUssQ0FBRTtBQUNqQyxjQUFLLFFBQVM7QUFDYixtQkFBTyxhQUFjLE1BQU0sSUFBSztBQUFBLFVBQ2pDO0FBQUEsUUFDRDtBQUFBLE1BR0QsR0FBRyxPQUFRO0FBQUEsSUFDWjtBQUFBLEVBQ0QsQ0FBRTtBQUVGLEVBQUFBLFFBQU8sS0FBTTtBQUFBLElBQ1osVUFBVTtBQUFBLElBQ1YsV0FBVztBQUFBLElBQ1gsY0FBYztBQUFBLElBQ2QsYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLEVBQ2IsR0FBRyxTQUFVLE1BQU0sVUFBVztBQUM3QixJQUFBQSxRQUFPLEdBQUksSUFBSyxJQUFJLFNBQVUsVUFBVztBQUN4QyxVQUFJLE9BQ0gsTUFBTSxDQUFDLEdBQ1AsU0FBU0EsUUFBUSxRQUFTLEdBQzFCLE9BQU8sT0FBTyxTQUFTLEdBQ3ZCRCxLQUFJO0FBRUwsYUFBUUEsTUFBSyxNQUFNQSxNQUFNO0FBQ3hCLGdCQUFRQSxPQUFNLE9BQU8sT0FBTyxLQUFLLE1BQU8sSUFBSztBQUM3QyxRQUFBQyxRQUFRLE9BQVFELEVBQUUsQ0FBRSxFQUFHLFFBQVMsRUFBRyxLQUFNO0FBQ3pDLGFBQUssTUFBTyxLQUFLLEtBQU07QUFBQSxNQUN4QjtBQUVBLGFBQU8sS0FBSyxVQUFXLEdBQUk7QUFBQSxJQUM1QjtBQUFBLEVBQ0QsQ0FBRTtBQUVGLE1BQUksWUFBWSxJQUFJLE9BQVEsT0FBTyxPQUFPLG1CQUFtQixHQUFJO0FBRWpFLE1BQUksY0FBYztBQUVsQixXQUFTLFVBQVcsTUFBTztBQUsxQixRQUFJLE9BQU8sS0FBSyxjQUFjO0FBSTlCLFFBQUssQ0FBQyxNQUFPO0FBQ1osYUFBT0Q7QUFBQSxJQUNSO0FBRUEsV0FBTyxLQUFLLGlCQUFrQixJQUFLO0FBQUEsRUFDcEM7QUFHQSxXQUFTLEtBQU0sTUFBTSxTQUFTLFVBQVc7QUFDeEMsUUFBSSxLQUFLLE1BQ1IsTUFBTSxDQUFDO0FBR1IsU0FBTSxRQUFRLFNBQVU7QUFDdkIsVUFBSyxJQUFLLElBQUksS0FBSyxNQUFPLElBQUs7QUFDL0IsV0FBSyxNQUFPLElBQUssSUFBSSxRQUFTLElBQUs7QUFBQSxJQUNwQztBQUVBLFVBQU0sU0FBUyxLQUFNLElBQUs7QUFHMUIsU0FBTSxRQUFRLFNBQVU7QUFDdkIsV0FBSyxNQUFPLElBQUssSUFBSSxJQUFLLElBQUs7QUFBQSxJQUNoQztBQUVBLFdBQU87QUFBQSxFQUNSO0FBRUEsV0FBUyxPQUFRLE1BQU0sTUFBTSxVQUFXO0FBQ3ZDLFFBQUksS0FDSCxlQUFlLFlBQVksS0FBTSxJQUFLO0FBRXZDLGVBQVcsWUFBWSxVQUFXLElBQUs7QUFHdkMsUUFBSyxVQUFXO0FBZWYsWUFBTSxTQUFTLGlCQUFrQixJQUFLLEtBQUssU0FBVSxJQUFLO0FBRTFELFVBQUssZ0JBQWdCLEtBQU07QUFrQjFCLGNBQU0sSUFBSSxRQUFTLFVBQVUsSUFBSyxLQUFLO0FBQUEsTUFDeEM7QUFFQSxVQUFLLFFBQVEsTUFBTSxDQUFDLFdBQVksSUFBSyxHQUFJO0FBQ3hDLGNBQU1FLFFBQU8sTUFBTyxNQUFNLElBQUs7QUFBQSxNQUNoQztBQUFBLElBQ0Q7QUFFQSxXQUFPLFFBQVE7QUFBQTtBQUFBO0FBQUEsTUFJZCxNQUFNO0FBQUEsUUFDTjtBQUFBLEVBQ0Y7QUFFQSxNQUFJLGNBQWMsQ0FBRSxVQUFVLE9BQU8sSUFBSyxHQUN6QyxhQUFhLFdBQVcsY0FBZSxLQUFNLEVBQUUsT0FDL0MsY0FBYyxDQUFDO0FBR2hCLFdBQVMsZUFBZ0IsTUFBTztBQUcvQixRQUFJLFVBQVUsS0FBTSxDQUFFLEVBQUUsWUFBWSxJQUFJLEtBQUssTUFBTyxDQUFFLEdBQ3JERCxLQUFJLFlBQVk7QUFFakIsV0FBUUEsTUFBTTtBQUNiLGFBQU8sWUFBYUEsRUFBRSxJQUFJO0FBQzFCLFVBQUssUUFBUSxZQUFhO0FBQ3pCLGVBQU87QUFBQSxNQUNSO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFHQSxXQUFTLGNBQWUsTUFBTztBQUM5QixRQUFJLFFBQVEsWUFBYSxJQUFLO0FBRTlCLFFBQUssT0FBUTtBQUNaLGFBQU87QUFBQSxJQUNSO0FBQ0EsUUFBSyxRQUFRLFlBQWE7QUFDekIsYUFBTztBQUFBLElBQ1I7QUFDQSxXQUFPLFlBQWEsSUFBSyxJQUFJLGVBQWdCLElBQUssS0FBSztBQUFBLEVBQ3hEO0FBRUEsR0FBRSxXQUFXO0FBRWIsUUFBSSx5QkFDSCxNQUFNLFdBQVcsY0FBZSxLQUFNO0FBR3ZDLFFBQUssQ0FBQyxJQUFJLE9BQVE7QUFDakI7QUFBQSxJQUNEO0FBUUEsWUFBUSx1QkFBdUIsV0FBVztBQUN6QyxVQUFJLE9BQU8sSUFBSTtBQUNmLFVBQUssMkJBQTJCLE1BQU87QUFDdEMsZ0JBQVEsV0FBVyxjQUFlLE9BQVE7QUFDMUMsYUFBSyxXQUFXLGNBQWUsSUFBSztBQUVwQyxjQUFNLE1BQU0sVUFBVTtBQUN0QixXQUFHLE1BQU0sVUFBVTtBQUtuQixXQUFHLE1BQU0sU0FBUztBQUNsQixZQUFJLE1BQU0sU0FBUztBQVNuQixZQUFJLE1BQU0sVUFBVTtBQUVwQiwwQkFDRSxZQUFhLEtBQU0sRUFDbkIsWUFBYSxFQUFHLEVBQ2hCLFlBQWEsR0FBSTtBQUduQixZQUFLLE1BQU0sZ0JBQWdCLEdBQUk7QUFDOUIsNEJBQWtCLFlBQWEsS0FBTTtBQUNyQztBQUFBLFFBQ0Q7QUFFQSxrQkFBVUQsUUFBTyxpQkFBa0IsRUFBRztBQUN0QyxrQ0FBNEIsS0FBSyxNQUFPLFdBQVksUUFBUSxNQUFPLENBQUUsSUFDcEUsS0FBSyxNQUFPLFdBQVksUUFBUSxjQUFlLENBQUUsSUFDakQsS0FBSyxNQUFPLFdBQVksUUFBUSxpQkFBa0IsQ0FBRSxNQUFRLEdBQUc7QUFFaEUsMEJBQWtCLFlBQWEsS0FBTTtBQUFBLE1BQ3RDO0FBQ0EsYUFBTztBQUFBLElBQ1I7QUFBQSxFQUNBLEdBQUk7QUFFSixNQUtDLGVBQWUsNkJBQ2YsVUFBVSxFQUFFLFVBQVUsWUFBWSxZQUFZLFVBQVUsU0FBUyxRQUFRLEdBQ3pFLHFCQUFxQjtBQUFBLElBQ3BCLGVBQWU7QUFBQSxJQUNmLFlBQVk7QUFBQSxFQUNiO0FBRUQsV0FBUyxrQkFBbUIsT0FBTyxPQUFPLFVBQVc7QUFJcEQsUUFBSUksV0FBVSxRQUFRLEtBQU0sS0FBTTtBQUNsQyxXQUFPQTtBQUFBO0FBQUEsTUFHTixLQUFLLElBQUssR0FBR0EsU0FBUyxDQUFFLEtBQU0sWUFBWSxFQUFJLEtBQU1BLFNBQVMsQ0FBRSxLQUFLO0FBQUEsUUFDcEU7QUFBQSxFQUNGO0FBRUEsV0FBUyxtQkFBb0IsTUFBTSxXQUFXLEtBQUssYUFBYSxRQUFRLGFBQWM7QUFDckYsUUFBSUgsS0FBSSxjQUFjLFVBQVUsSUFBSSxHQUNuQyxRQUFRLEdBQ1IsUUFBUSxHQUNSLGNBQWM7QUFHZixRQUFLLFNBQVUsY0FBYyxXQUFXLFlBQWM7QUFDckQsYUFBTztBQUFBLElBQ1I7QUFFQSxXQUFRQSxLQUFJLEdBQUdBLE1BQUssR0FBSTtBQUt2QixVQUFLLFFBQVEsVUFBVztBQUN2Qix1QkFBZUMsUUFBTyxJQUFLLE1BQU0sTUFBTSxVQUFXRCxFQUFFLEdBQUcsTUFBTSxNQUFPO0FBQUEsTUFDckU7QUFHQSxVQUFLLENBQUMsYUFBYztBQUduQixpQkFBU0MsUUFBTyxJQUFLLE1BQU0sWUFBWSxVQUFXRCxFQUFFLEdBQUcsTUFBTSxNQUFPO0FBR3BFLFlBQUssUUFBUSxXQUFZO0FBQ3hCLG1CQUFTQyxRQUFPLElBQUssTUFBTSxXQUFXLFVBQVdELEVBQUUsSUFBSSxTQUFTLE1BQU0sTUFBTztBQUFBLFFBRzlFLE9BQU87QUFDTixtQkFBU0MsUUFBTyxJQUFLLE1BQU0sV0FBVyxVQUFXRCxFQUFFLElBQUksU0FBUyxNQUFNLE1BQU87QUFBQSxRQUM5RTtBQUFBLE1BSUQsT0FBTztBQUdOLFlBQUssUUFBUSxXQUFZO0FBQ3hCLG1CQUFTQyxRQUFPLElBQUssTUFBTSxZQUFZLFVBQVdELEVBQUUsR0FBRyxNQUFNLE1BQU87QUFBQSxRQUNyRTtBQUdBLFlBQUssUUFBUSxVQUFXO0FBQ3ZCLG1CQUFTQyxRQUFPLElBQUssTUFBTSxXQUFXLFVBQVdELEVBQUUsSUFBSSxTQUFTLE1BQU0sTUFBTztBQUFBLFFBQzlFO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFHQSxRQUFLLENBQUMsZUFBZSxlQUFlLEdBQUk7QUFJdkMsZUFBUyxLQUFLLElBQUssR0FBRyxLQUFLO0FBQUEsUUFDMUIsS0FBTSxXQUFXLFVBQVcsQ0FBRSxFQUFFLFlBQVksSUFBSSxVQUFVLE1BQU8sQ0FBRSxDQUFFLElBQ3JFLGNBQ0EsUUFDQSxRQUNBO0FBQUE7QUFBQTtBQUFBLE1BSUQsQ0FBRSxLQUFLO0FBQUEsSUFDUjtBQUVBLFdBQU8sUUFBUTtBQUFBLEVBQ2hCO0FBRUEsV0FBUyxpQkFBa0IsTUFBTSxXQUFXLE9BQVE7QUFHbkQsUUFBSSxTQUFTLFVBQVcsSUFBSyxHQUk1QixrQkFBa0IsUUFBUSxPQUMxQixjQUFjLG1CQUNiQyxRQUFPLElBQUssTUFBTSxhQUFhLE9BQU8sTUFBTyxNQUFNLGNBQ3BELG1CQUFtQixhQUVuQixNQUFNLE9BQVEsTUFBTSxXQUFXLE1BQU8sR0FDdEMsYUFBYSxXQUFXLFVBQVcsQ0FBRSxFQUFFLFlBQVksSUFBSSxVQUFVLE1BQU8sQ0FBRTtBQUczRSxRQUFLLFVBQVUsS0FBTSxHQUFJLEdBQUk7QUFDNUIsVUFBSyxDQUFDLE9BQVE7QUFDYixlQUFPO0FBQUEsTUFDUjtBQUNBLFlBQU07QUFBQSxJQUNQO0FBR0E7QUFBQTtBQUFBO0FBQUEsT0FJQyxRQUFRO0FBQUE7QUFBQTtBQUFBLE1BS04sUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVFSLENBQUMsUUFBUSxxQkFBcUIsS0FBSyxTQUFVLE1BQU0sSUFBSztBQUFBLE1BRzFELEtBQUssZUFBZSxFQUFFO0FBQUEsTUFBUztBQUUvQixvQkFBY0EsUUFBTyxJQUFLLE1BQU0sYUFBYSxPQUFPLE1BQU8sTUFBTTtBQUtqRSx5QkFBbUIsY0FBYztBQUNqQyxVQUFLLGtCQUFtQjtBQUN2QixjQUFNLEtBQU0sVUFBVztBQUFBLE1BQ3hCO0FBQUEsSUFDRDtBQUdBLFVBQU0sV0FBWSxHQUFJLEtBQUs7QUFHM0IsV0FBUyxNQUNSO0FBQUEsTUFDQztBQUFBLE1BQ0E7QUFBQSxNQUNBLFVBQVcsY0FBYyxXQUFXO0FBQUEsTUFDcEM7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUdBO0FBQUEsSUFDRCxJQUNHO0FBQUEsRUFDTDtBQUVBLEVBQUFBLFFBQU8sT0FBUTtBQUFBO0FBQUE7QUFBQSxJQUlkLFVBQVUsQ0FBQztBQUFBO0FBQUEsSUFHWCxPQUFPLFNBQVUsTUFBTSxNQUFNLE9BQU8sT0FBUTtBQUczQyxVQUFLLENBQUMsUUFBUSxLQUFLLGFBQWEsS0FBSyxLQUFLLGFBQWEsS0FBSyxDQUFDLEtBQUssT0FBUTtBQUN6RTtBQUFBLE1BQ0Q7QUFHQSxVQUFJLEtBQUssTUFBTSxPQUNkLFdBQVcsYUFBYyxJQUFLLEdBQzlCLGVBQWUsWUFBWSxLQUFNLElBQUssR0FDdEMsUUFBUSxLQUFLO0FBS2QsVUFBSyxDQUFDLGNBQWU7QUFDcEIsZUFBTyxjQUFlLFFBQVM7QUFBQSxNQUNoQztBQUdBLGNBQVFBLFFBQU8sU0FBVSxJQUFLLEtBQUtBLFFBQU8sU0FBVSxRQUFTO0FBRzdELFVBQUssVUFBVSxRQUFZO0FBQzFCLGVBQU8sT0FBTztBQUdkLFlBQUssU0FBUyxhQUFjLE1BQU0sUUFBUSxLQUFNLEtBQU0sTUFBTyxJQUFLLENBQUUsR0FBSTtBQUN2RSxrQkFBUSxVQUFXLE1BQU0sTUFBTSxHQUFJO0FBR25DLGlCQUFPO0FBQUEsUUFDUjtBQUdBLFlBQUssU0FBUyxRQUFRLFVBQVUsT0FBUTtBQUN2QztBQUFBLFFBQ0Q7QUFHQSxZQUFLLFNBQVMsVUFBVztBQUN4QixtQkFBUyxPQUFPLElBQUssQ0FBRSxNQUFPLFNBQVUsUUFBUyxJQUFJLE9BQU87QUFBQSxRQUM3RDtBQUlBLFlBQUssUUFBUSxVQUFVLE1BQU0sS0FBSyxRQUFTLFlBQWEsTUFBTSxHQUFJO0FBQ2pFLGdCQUFPLElBQUssSUFBSTtBQUFBLFFBQ2pCO0FBR0EsWUFBSyxDQUFDLFNBQVMsRUFBRyxTQUFTLFdBQ3hCLFFBQVEsTUFBTSxJQUFLLE1BQU0sT0FBTyxLQUFNLE9BQVEsUUFBWTtBQUU1RCxjQUFLLGNBQWU7QUFDbkIsa0JBQU0sWUFBYSxNQUFNLEtBQU07QUFBQSxVQUNoQyxPQUFPO0FBQ04sa0JBQU8sSUFBSyxJQUFJO0FBQUEsVUFDakI7QUFBQSxRQUNEO0FBQUEsTUFFRCxPQUFPO0FBR04sWUFBSyxTQUFTLFNBQVMsVUFDcEIsTUFBTSxNQUFNLElBQUssTUFBTSxPQUFPLEtBQU0sT0FBUSxRQUFZO0FBRTFELGlCQUFPO0FBQUEsUUFDUjtBQUdBLGVBQU8sTUFBTyxJQUFLO0FBQUEsTUFDcEI7QUFBQSxJQUNEO0FBQUEsSUFFQSxLQUFLLFNBQVUsTUFBTSxNQUFNLE9BQU8sUUFBUztBQUMxQyxVQUFJLEtBQUssS0FBSyxPQUNiLFdBQVcsYUFBYyxJQUFLLEdBQzlCLGVBQWUsWUFBWSxLQUFNLElBQUs7QUFLdkMsVUFBSyxDQUFDLGNBQWU7QUFDcEIsZUFBTyxjQUFlLFFBQVM7QUFBQSxNQUNoQztBQUdBLGNBQVFBLFFBQU8sU0FBVSxJQUFLLEtBQUtBLFFBQU8sU0FBVSxRQUFTO0FBRzdELFVBQUssU0FBUyxTQUFTLE9BQVE7QUFDOUIsY0FBTSxNQUFNLElBQUssTUFBTSxNQUFNLEtBQU07QUFBQSxNQUNwQztBQUdBLFVBQUssUUFBUSxRQUFZO0FBQ3hCLGNBQU0sT0FBUSxNQUFNLE1BQU0sTUFBTztBQUFBLE1BQ2xDO0FBR0EsVUFBSyxRQUFRLFlBQVksUUFBUSxvQkFBcUI7QUFDckQsY0FBTSxtQkFBb0IsSUFBSztBQUFBLE1BQ2hDO0FBR0EsVUFBSyxVQUFVLE1BQU0sT0FBUTtBQUM1QixjQUFNLFdBQVksR0FBSTtBQUN0QixlQUFPLFVBQVUsUUFBUSxTQUFVLEdBQUksSUFBSSxPQUFPLElBQUk7QUFBQSxNQUN2RDtBQUVBLGFBQU87QUFBQSxJQUNSO0FBQUEsRUFDRCxDQUFFO0FBRUYsRUFBQUEsUUFBTyxLQUFNLENBQUUsVUFBVSxPQUFRLEdBQUcsU0FBVSxJQUFJLFdBQVk7QUFDN0QsSUFBQUEsUUFBTyxTQUFVLFNBQVUsSUFBSTtBQUFBLE1BQzlCLEtBQUssU0FBVSxNQUFNLFVBQVUsT0FBUTtBQUN0QyxZQUFLLFVBQVc7QUFJZixpQkFBTyxhQUFhLEtBQU1BLFFBQU8sSUFBSyxNQUFNLFNBQVUsQ0FBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVFyRCxDQUFDLEtBQUssZUFBZSxFQUFFLFVBQVUsQ0FBQyxLQUFLLHNCQUFzQixFQUFFLFNBQ2pFLEtBQU0sTUFBTSxTQUFTLFdBQVc7QUFDL0IsbUJBQU8saUJBQWtCLE1BQU0sV0FBVyxLQUFNO0FBQUEsVUFDakQsQ0FBRSxJQUNGLGlCQUFrQixNQUFNLFdBQVcsS0FBTTtBQUFBLFFBQzNDO0FBQUEsTUFDRDtBQUFBLE1BRUEsS0FBSyxTQUFVLE1BQU0sT0FBTyxPQUFRO0FBQ25DLFlBQUlFLFVBQ0gsU0FBUyxVQUFXLElBQUssR0FHekIsY0FBYyxTQUNiRixRQUFPLElBQUssTUFBTSxhQUFhLE9BQU8sTUFBTyxNQUFNLGNBQ3BELFdBQVcsUUFDVjtBQUFBLFVBQ0M7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRCxJQUNBO0FBR0YsWUFBSyxhQUFjRSxXQUFVLFFBQVEsS0FBTSxLQUFNLE9BQzlDQSxTQUFTLENBQUUsS0FBSyxVQUFXLE1BQU87QUFFcEMsZUFBSyxNQUFPLFNBQVUsSUFBSTtBQUMxQixrQkFBUUYsUUFBTyxJQUFLLE1BQU0sU0FBVTtBQUFBLFFBQ3JDO0FBRUEsZUFBTyxrQkFBbUIsTUFBTSxPQUFPLFFBQVM7QUFBQSxNQUNqRDtBQUFBLElBQ0Q7QUFBQSxFQUNELENBQUU7QUFHRixFQUFBQSxRQUFPLEtBQU07QUFBQSxJQUNaLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULFFBQVE7QUFBQSxFQUNULEdBQUcsU0FBVSxRQUFRLFFBQVM7QUFDN0IsSUFBQUEsUUFBTyxTQUFVLFNBQVMsTUFBTyxJQUFJO0FBQUEsTUFDcEMsUUFBUSxTQUFVLE9BQVE7QUFDekIsWUFBSUQsS0FBSSxHQUNQLFdBQVcsQ0FBQyxHQUdaLFFBQVEsT0FBTyxVQUFVLFdBQVcsTUFBTSxNQUFPLEdBQUksSUFBSSxDQUFFLEtBQU07QUFFbEUsZUFBUUEsS0FBSSxHQUFHQSxNQUFNO0FBQ3BCLG1CQUFVLFNBQVMsVUFBV0EsRUFBRSxJQUFJLE1BQU8sSUFDMUMsTUFBT0EsRUFBRSxLQUFLLE1BQU9BLEtBQUksQ0FBRSxLQUFLLE1BQU8sQ0FBRTtBQUFBLFFBQzNDO0FBRUEsZUFBTztBQUFBLE1BQ1I7QUFBQSxJQUNEO0FBRUEsUUFBSyxXQUFXLFVBQVc7QUFDMUIsTUFBQUMsUUFBTyxTQUFVLFNBQVMsTUFBTyxFQUFFLE1BQU07QUFBQSxJQUMxQztBQUFBLEVBQ0QsQ0FBRTtBQUVGLEVBQUFBLFFBQU8sR0FBRyxPQUFRO0FBQUEsSUFDakIsS0FBSyxTQUFVLE1BQU0sT0FBUTtBQUM1QixhQUFPLE9BQVEsTUFBTSxTQUFVLE1BQU1XLE9BQU1SLFFBQVE7QUFDbEQsWUFBSSxRQUFRLEtBQ1gsTUFBTSxDQUFDLEdBQ1BKLEtBQUk7QUFFTCxZQUFLLE1BQU0sUUFBU1ksS0FBSyxHQUFJO0FBQzVCLG1CQUFTLFVBQVcsSUFBSztBQUN6QixnQkFBTUEsTUFBSztBQUVYLGlCQUFRWixLQUFJLEtBQUtBLE1BQU07QUFDdEIsZ0JBQUtZLE1BQU1aLEVBQUUsQ0FBRSxJQUFJQyxRQUFPLElBQUssTUFBTVcsTUFBTVosRUFBRSxHQUFHLE9BQU8sTUFBTztBQUFBLFVBQy9EO0FBRUEsaUJBQU87QUFBQSxRQUNSO0FBRUEsZUFBT0ksV0FBVSxTQUNoQkgsUUFBTyxNQUFPLE1BQU1XLE9BQU1SLE1BQU0sSUFDaENILFFBQU8sSUFBSyxNQUFNVyxLQUFLO0FBQUEsTUFDekIsR0FBRyxNQUFNLE9BQU8sVUFBVSxTQUFTLENBQUU7QUFBQSxJQUN0QztBQUFBLEVBQ0QsQ0FBRTtBQUVGLFdBQVMsTUFBTyxNQUFNLFNBQVMsTUFBTSxLQUFLLFFBQVM7QUFDbEQsV0FBTyxJQUFJLE1BQU0sVUFBVSxLQUFNLE1BQU0sU0FBUyxNQUFNLEtBQUssTUFBTztBQUFBLEVBQ25FO0FBQ0EsRUFBQVgsUUFBTyxRQUFRO0FBRWYsUUFBTSxZQUFZO0FBQUEsSUFDakIsYUFBYTtBQUFBLElBQ2IsTUFBTSxTQUFVLE1BQU0sU0FBUyxNQUFNLEtBQUssUUFBUSxNQUFPO0FBQ3hELFdBQUssT0FBTztBQUNaLFdBQUssT0FBTztBQUNaLFdBQUssU0FBUyxVQUFVQSxRQUFPLE9BQU87QUFDdEMsV0FBSyxVQUFVO0FBQ2YsV0FBSyxRQUFRLEtBQUssTUFBTSxLQUFLLElBQUk7QUFDakMsV0FBSyxNQUFNO0FBQ1gsV0FBSyxPQUFPLFNBQVUsU0FBVSxJQUFLLElBQUksT0FBTztBQUFBLElBQ2pEO0FBQUEsSUFDQSxLQUFLLFdBQVc7QUFDZixVQUFJLFFBQVEsTUFBTSxVQUFXLEtBQUssSUFBSztBQUV2QyxhQUFPLFNBQVMsTUFBTSxNQUNyQixNQUFNLElBQUssSUFBSyxJQUNoQixNQUFNLFVBQVUsU0FBUyxJQUFLLElBQUs7QUFBQSxJQUNyQztBQUFBLElBQ0EsS0FBSyxTQUFVLFNBQVU7QUFDeEIsVUFBSSxPQUNILFFBQVEsTUFBTSxVQUFXLEtBQUssSUFBSztBQUVwQyxVQUFLLEtBQUssUUFBUSxVQUFXO0FBQzVCLGFBQUssTUFBTSxRQUFRQSxRQUFPLE9BQVEsS0FBSyxNQUFPO0FBQUEsVUFDN0M7QUFBQSxVQUFTLEtBQUssUUFBUSxXQUFXO0FBQUEsVUFBUztBQUFBLFVBQUc7QUFBQSxVQUFHLEtBQUssUUFBUTtBQUFBLFFBQzlEO0FBQUEsTUFDRCxPQUFPO0FBQ04sYUFBSyxNQUFNLFFBQVE7QUFBQSxNQUNwQjtBQUNBLFdBQUssT0FBUSxLQUFLLE1BQU0sS0FBSyxTQUFVLFFBQVEsS0FBSztBQUVwRCxVQUFLLEtBQUssUUFBUSxNQUFPO0FBQ3hCLGFBQUssUUFBUSxLQUFLLEtBQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxJQUFLO0FBQUEsTUFDbkQ7QUFFQSxVQUFLLFNBQVMsTUFBTSxLQUFNO0FBQ3pCLGNBQU0sSUFBSyxJQUFLO0FBQUEsTUFDakIsT0FBTztBQUNOLGNBQU0sVUFBVSxTQUFTLElBQUssSUFBSztBQUFBLE1BQ3BDO0FBQ0EsYUFBTztBQUFBLElBQ1I7QUFBQSxFQUNEO0FBRUEsUUFBTSxVQUFVLEtBQUssWUFBWSxNQUFNO0FBRXZDLFFBQU0sWUFBWTtBQUFBLElBQ2pCLFVBQVU7QUFBQSxNQUNULEtBQUssU0FBVSxPQUFRO0FBQ3RCLFlBQUk7QUFJSixZQUFLLE1BQU0sS0FBSyxhQUFhLEtBQzVCLE1BQU0sS0FBTSxNQUFNLElBQUssS0FBSyxRQUFRLE1BQU0sS0FBSyxNQUFPLE1BQU0sSUFBSyxLQUFLLE1BQU87QUFDN0UsaUJBQU8sTUFBTSxLQUFNLE1BQU0sSUFBSztBQUFBLFFBQy9CO0FBTUEsaUJBQVNBLFFBQU8sSUFBSyxNQUFNLE1BQU0sTUFBTSxNQUFNLEVBQUc7QUFHaEQsZUFBTyxDQUFDLFVBQVUsV0FBVyxTQUFTLElBQUk7QUFBQSxNQUMzQztBQUFBLE1BQ0EsS0FBSyxTQUFVLE9BQVE7QUFLdEIsWUFBS0EsUUFBTyxHQUFHLEtBQU0sTUFBTSxJQUFLLEdBQUk7QUFDbkMsVUFBQUEsUUFBTyxHQUFHLEtBQU0sTUFBTSxJQUFLLEVBQUcsS0FBTTtBQUFBLFFBQ3JDLFdBQVksTUFBTSxLQUFLLGFBQWEsTUFDbkNBLFFBQU8sU0FBVSxNQUFNLElBQUssS0FDM0IsTUFBTSxLQUFLLE1BQU8sY0FBZSxNQUFNLElBQUssQ0FBRSxLQUFLLE9BQVM7QUFDN0QsVUFBQUEsUUFBTyxNQUFPLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sSUFBSztBQUFBLFFBQzlELE9BQU87QUFDTixnQkFBTSxLQUFNLE1BQU0sSUFBSyxJQUFJLE1BQU07QUFBQSxRQUNsQztBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUVBLEVBQUFBLFFBQU8sU0FBUztBQUFBLElBQ2YsUUFBUSxTQUFVLEdBQUk7QUFDckIsYUFBTztBQUFBLElBQ1I7QUFBQSxJQUNBLE9BQU8sU0FBVSxHQUFJO0FBQ3BCLGFBQU8sTUFBTSxLQUFLLElBQUssSUFBSSxLQUFLLEVBQUcsSUFBSTtBQUFBLElBQ3hDO0FBQUEsSUFDQSxVQUFVO0FBQUEsRUFDWDtBQUVBLEVBQUFBLFFBQU8sS0FBSyxNQUFNLFVBQVU7QUFHNUIsRUFBQUEsUUFBTyxHQUFHLE9BQU8sQ0FBQztBQUVsQixNQUNDLE9BQU8sWUFDUCxXQUFXLDBCQUNYLE9BQU87QUFFUixXQUFTLFdBQVc7QUFDbkIsUUFBSyxZQUFhO0FBQ2pCLFVBQUssV0FBVyxXQUFXLFNBQVNGLFFBQU8sdUJBQXdCO0FBQ2xFLFFBQUFBLFFBQU8sc0JBQXVCLFFBQVM7QUFBQSxNQUN4QyxPQUFPO0FBQ04sUUFBQUEsUUFBTyxXQUFZLFVBQVUsRUFBRztBQUFBLE1BQ2pDO0FBRUEsTUFBQUUsUUFBTyxHQUFHLEtBQUs7QUFBQSxJQUNoQjtBQUFBLEVBQ0Q7QUFHQSxXQUFTLGNBQWM7QUFDdEIsSUFBQUYsUUFBTyxXQUFZLFdBQVc7QUFDN0IsY0FBUTtBQUFBLElBQ1QsQ0FBRTtBQUNGLFdBQVMsUUFBUSxLQUFLLElBQUk7QUFBQSxFQUMzQjtBQUdBLFdBQVMsTUFBTyxNQUFNLGNBQWU7QUFDcEMsUUFBSSxPQUNIQyxLQUFJLEdBQ0osUUFBUSxFQUFFLFFBQVEsS0FBSztBQUl4QixtQkFBZSxlQUFlLElBQUk7QUFDbEMsV0FBUUEsS0FBSSxHQUFHQSxNQUFLLElBQUksY0FBZTtBQUN0QyxjQUFRLFVBQVdBLEVBQUU7QUFDckIsWUFBTyxXQUFXLEtBQU0sSUFBSSxNQUFPLFlBQVksS0FBTSxJQUFJO0FBQUEsSUFDMUQ7QUFFQSxRQUFLLGNBQWU7QUFDbkIsWUFBTSxVQUFVLE1BQU0sUUFBUTtBQUFBLElBQy9CO0FBRUEsV0FBTztBQUFBLEVBQ1I7QUFFQSxXQUFTLFlBQWEsT0FBTyxNQUFNLFdBQVk7QUFDOUMsUUFBSSxPQUNILGNBQWUsVUFBVSxTQUFVLElBQUssS0FBSyxDQUFDLEdBQUksT0FBUSxVQUFVLFNBQVUsR0FBSSxDQUFFLEdBQ3BGLFFBQVEsR0FDUixTQUFTLFdBQVc7QUFDckIsV0FBUSxRQUFRLFFBQVEsU0FBVTtBQUNqQyxVQUFPLFFBQVEsV0FBWSxLQUFNLEVBQUUsS0FBTSxXQUFXLE1BQU0sS0FBTSxHQUFNO0FBR3JFLGVBQU87QUFBQSxNQUNSO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFFQSxXQUFTLGlCQUFrQixNQUFNLE9BQU8sTUFBTztBQUM5QyxRQUFJLE1BQU0sT0FBTyxRQUFRLE9BQU8sU0FBUyxXQUFXLGdCQUFnQixTQUNuRSxRQUFRLFdBQVcsU0FBUyxZQUFZLE9BQ3hDLE9BQU8sTUFDUCxPQUFPLENBQUMsR0FDUixRQUFRLEtBQUssT0FDYixTQUFTLEtBQUssWUFBWSxtQkFBb0IsSUFBSyxHQUNuRCxXQUFXLFNBQVMsSUFBSyxNQUFNLFFBQVM7QUFHekMsUUFBSyxDQUFDLEtBQUssT0FBUTtBQUNsQixjQUFRQyxRQUFPLFlBQWEsTUFBTSxJQUFLO0FBQ3ZDLFVBQUssTUFBTSxZQUFZLE1BQU87QUFDN0IsY0FBTSxXQUFXO0FBQ2pCLGtCQUFVLE1BQU0sTUFBTTtBQUN0QixjQUFNLE1BQU0sT0FBTyxXQUFXO0FBQzdCLGNBQUssQ0FBQyxNQUFNLFVBQVc7QUFDdEIsb0JBQVE7QUFBQSxVQUNUO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFDQSxZQUFNO0FBRU4sV0FBSyxPQUFRLFdBQVc7QUFHdkIsYUFBSyxPQUFRLFdBQVc7QUFDdkIsZ0JBQU07QUFDTixjQUFLLENBQUNBLFFBQU8sTUFBTyxNQUFNLElBQUssRUFBRSxRQUFTO0FBQ3pDLGtCQUFNLE1BQU0sS0FBSztBQUFBLFVBQ2xCO0FBQUEsUUFDRCxDQUFFO0FBQUEsTUFDSCxDQUFFO0FBQUEsSUFDSDtBQUdBLFNBQU0sUUFBUSxPQUFRO0FBQ3JCLGNBQVEsTUFBTyxJQUFLO0FBQ3BCLFVBQUssU0FBUyxLQUFNLEtBQU0sR0FBSTtBQUM3QixlQUFPLE1BQU8sSUFBSztBQUNuQixpQkFBUyxVQUFVLFVBQVU7QUFDN0IsWUFBSyxXQUFZLFNBQVMsU0FBUyxTQUFXO0FBSTdDLGNBQUssVUFBVSxVQUFVLFlBQVksU0FBVSxJQUFLLE1BQU0sUUFBWTtBQUNyRSxxQkFBUztBQUFBLFVBR1YsT0FBTztBQUNOO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFDQSxhQUFNLElBQUssSUFBSSxZQUFZLFNBQVUsSUFBSyxLQUFLQSxRQUFPLE1BQU8sTUFBTSxJQUFLO0FBQUEsTUFDekU7QUFBQSxJQUNEO0FBR0EsZ0JBQVksQ0FBQ0EsUUFBTyxjQUFlLEtBQU07QUFDekMsUUFBSyxDQUFDLGFBQWFBLFFBQU8sY0FBZSxJQUFLLEdBQUk7QUFDakQ7QUFBQSxJQUNEO0FBR0EsUUFBSyxTQUFTLEtBQUssYUFBYSxHQUFJO0FBS25DLFdBQUssV0FBVyxDQUFFLE1BQU0sVUFBVSxNQUFNLFdBQVcsTUFBTSxTQUFVO0FBR25FLHVCQUFpQixZQUFZLFNBQVM7QUFDdEMsVUFBSyxrQkFBa0IsTUFBTztBQUM3Qix5QkFBaUIsU0FBUyxJQUFLLE1BQU0sU0FBVTtBQUFBLE1BQ2hEO0FBQ0EsZ0JBQVVBLFFBQU8sSUFBSyxNQUFNLFNBQVU7QUFDdEMsVUFBSyxZQUFZLFFBQVM7QUFDekIsWUFBSyxnQkFBaUI7QUFDckIsb0JBQVU7QUFBQSxRQUNYLE9BQU87QUFHTixtQkFBVSxDQUFFLElBQUssR0FBRyxJQUFLO0FBQ3pCLDJCQUFpQixLQUFLLE1BQU0sV0FBVztBQUN2QyxvQkFBVUEsUUFBTyxJQUFLLE1BQU0sU0FBVTtBQUN0QyxtQkFBVSxDQUFFLElBQUssQ0FBRTtBQUFBLFFBQ3BCO0FBQUEsTUFDRDtBQUdBLFVBQUssWUFBWSxZQUFZLFlBQVksa0JBQWtCLGtCQUFrQixNQUFPO0FBQ25GLFlBQUtBLFFBQU8sSUFBSyxNQUFNLE9BQVEsTUFBTSxRQUFTO0FBRzdDLGNBQUssQ0FBQyxXQUFZO0FBQ2pCLGlCQUFLLEtBQU0sV0FBVztBQUNyQixvQkFBTSxVQUFVO0FBQUEsWUFDakIsQ0FBRTtBQUNGLGdCQUFLLGtCQUFrQixNQUFPO0FBQzdCLHdCQUFVLE1BQU07QUFDaEIsK0JBQWlCLFlBQVksU0FBUyxLQUFLO0FBQUEsWUFDNUM7QUFBQSxVQUNEO0FBQ0EsZ0JBQU0sVUFBVTtBQUFBLFFBQ2pCO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFFQSxRQUFLLEtBQUssVUFBVztBQUNwQixZQUFNLFdBQVc7QUFDakIsV0FBSyxPQUFRLFdBQVc7QUFDdkIsY0FBTSxXQUFXLEtBQUssU0FBVSxDQUFFO0FBQ2xDLGNBQU0sWUFBWSxLQUFLLFNBQVUsQ0FBRTtBQUNuQyxjQUFNLFlBQVksS0FBSyxTQUFVLENBQUU7QUFBQSxNQUNwQyxDQUFFO0FBQUEsSUFDSDtBQUdBLGdCQUFZO0FBQ1osU0FBTSxRQUFRLE1BQU87QUFHcEIsVUFBSyxDQUFDLFdBQVk7QUFDakIsWUFBSyxVQUFXO0FBQ2YsY0FBSyxZQUFZLFVBQVc7QUFDM0IscUJBQVMsU0FBUztBQUFBLFVBQ25CO0FBQUEsUUFDRCxPQUFPO0FBQ04scUJBQVcsU0FBUyxJQUFLLE1BQU0sVUFBVSxFQUFFLFNBQVMsZUFBZSxDQUFFO0FBQUEsUUFDdEU7QUFHQSxZQUFLLFFBQVM7QUFDYixtQkFBUyxTQUFTLENBQUM7QUFBQSxRQUNwQjtBQUdBLFlBQUssUUFBUztBQUNiLG1CQUFVLENBQUUsSUFBSyxHQUFHLElBQUs7QUFBQSxRQUMxQjtBQUdBLGFBQUssS0FBTSxXQUFXO0FBR3JCLGNBQUssQ0FBQyxRQUFTO0FBQ2QscUJBQVUsQ0FBRSxJQUFLLENBQUU7QUFBQSxVQUNwQjtBQUNBLG1CQUFTLE9BQVEsTUFBTSxRQUFTO0FBQ2hDLGVBQU0sUUFBUSxNQUFPO0FBQ3BCLFlBQUFBLFFBQU8sTUFBTyxNQUFNLE1BQU0sS0FBTSxJQUFLLENBQUU7QUFBQSxVQUN4QztBQUFBLFFBQ0QsQ0FBRTtBQUFBLE1BQ0g7QUFHQSxrQkFBWSxZQUFhLFNBQVMsU0FBVSxJQUFLLElBQUksR0FBRyxNQUFNLElBQUs7QUFDbkUsVUFBSyxFQUFHLFFBQVEsV0FBYTtBQUM1QixpQkFBVSxJQUFLLElBQUksVUFBVTtBQUM3QixZQUFLLFFBQVM7QUFDYixvQkFBVSxNQUFNLFVBQVU7QUFDMUIsb0JBQVUsUUFBUTtBQUFBLFFBQ25CO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBRUEsV0FBUyxXQUFZLE9BQU8sZUFBZ0I7QUFDM0MsUUFBSSxPQUFPLE1BQU0sUUFBUSxPQUFPO0FBR2hDLFNBQU0sU0FBUyxPQUFRO0FBQ3RCLGFBQU8sYUFBYyxLQUFNO0FBQzNCLGVBQVMsY0FBZSxJQUFLO0FBQzdCLGNBQVEsTUFBTyxLQUFNO0FBQ3JCLFVBQUssTUFBTSxRQUFTLEtBQU0sR0FBSTtBQUM3QixpQkFBUyxNQUFPLENBQUU7QUFDbEIsZ0JBQVEsTUFBTyxLQUFNLElBQUksTUFBTyxDQUFFO0FBQUEsTUFDbkM7QUFFQSxVQUFLLFVBQVUsTUFBTztBQUNyQixjQUFPLElBQUssSUFBSTtBQUNoQixlQUFPLE1BQU8sS0FBTTtBQUFBLE1BQ3JCO0FBRUEsY0FBUUEsUUFBTyxTQUFVLElBQUs7QUFDOUIsVUFBSyxTQUFTLFlBQVksT0FBUTtBQUNqQyxnQkFBUSxNQUFNLE9BQVEsS0FBTTtBQUM1QixlQUFPLE1BQU8sSUFBSztBQUluQixhQUFNLFNBQVMsT0FBUTtBQUN0QixjQUFLLEVBQUcsU0FBUyxRQUFVO0FBQzFCLGtCQUFPLEtBQU0sSUFBSSxNQUFPLEtBQU07QUFDOUIsMEJBQWUsS0FBTSxJQUFJO0FBQUEsVUFDMUI7QUFBQSxRQUNEO0FBQUEsTUFDRCxPQUFPO0FBQ04sc0JBQWUsSUFBSyxJQUFJO0FBQUEsTUFDekI7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUVBLFdBQVMsVUFBVyxNQUFNLFlBQVksU0FBVTtBQUMvQyxRQUFJLFFBQ0gsU0FDQSxRQUFRLEdBQ1IsU0FBUyxVQUFVLFdBQVcsUUFDOUIsV0FBV0EsUUFBTyxTQUFTLEVBQUUsT0FBUSxXQUFXO0FBRy9DLGFBQU8sS0FBSztBQUFBLElBQ2IsQ0FBRSxHQUNGLE9BQU8sV0FBVztBQUNqQixVQUFLLFNBQVU7QUFDZCxlQUFPO0FBQUEsTUFDUjtBQUNBLFVBQUksY0FBYyxTQUFTLFlBQVksR0FDdEMsWUFBWSxLQUFLLElBQUssR0FBRyxVQUFVLFlBQVksVUFBVSxXQUFXLFdBQVksR0FFaEYsVUFBVSxLQUFNLFlBQVksVUFBVSxZQUFZLElBQ2xEWSxTQUFRLEdBQ1JDLFVBQVMsVUFBVSxPQUFPO0FBRTNCLGFBQVFELFNBQVFDLFNBQVFELFVBQVU7QUFDakMsa0JBQVUsT0FBUUEsTUFBTSxFQUFFLElBQUssT0FBUTtBQUFBLE1BQ3hDO0FBRUEsZUFBUyxXQUFZLE1BQU0sQ0FBRSxXQUFXLFNBQVMsU0FBVSxDQUFFO0FBRzdELFVBQUssVUFBVSxLQUFLQyxTQUFTO0FBQzVCLGVBQU87QUFBQSxNQUNSO0FBR0EsVUFBSyxDQUFDQSxTQUFTO0FBQ2QsaUJBQVMsV0FBWSxNQUFNLENBQUUsV0FBVyxHQUFHLENBQUUsQ0FBRTtBQUFBLE1BQ2hEO0FBR0EsZUFBUyxZQUFhLE1BQU0sQ0FBRSxTQUFVLENBQUU7QUFDMUMsYUFBTztBQUFBLElBQ1IsR0FDQSxZQUFZLFNBQVMsUUFBUztBQUFBLE1BQzdCO0FBQUEsTUFDQSxPQUFPYixRQUFPLE9BQVEsQ0FBQyxHQUFHLFVBQVc7QUFBQSxNQUNyQyxNQUFNQSxRQUFPLE9BQVEsTUFBTTtBQUFBLFFBQzFCLGVBQWUsQ0FBQztBQUFBLFFBQ2hCLFFBQVFBLFFBQU8sT0FBTztBQUFBLE1BQ3ZCLEdBQUcsT0FBUTtBQUFBLE1BQ1gsb0JBQW9CO0FBQUEsTUFDcEIsaUJBQWlCO0FBQUEsTUFDakIsV0FBVyxTQUFTLFlBQVk7QUFBQSxNQUNoQyxVQUFVLFFBQVE7QUFBQSxNQUNsQixRQUFRLENBQUM7QUFBQSxNQUNULGFBQWEsU0FBVSxNQUFNLEtBQU07QUFDbEMsWUFBSSxRQUFRQSxRQUFPO0FBQUEsVUFBTztBQUFBLFVBQU0sVUFBVTtBQUFBLFVBQU07QUFBQSxVQUFNO0FBQUEsVUFDckQsVUFBVSxLQUFLLGNBQWUsSUFBSyxLQUFLLFVBQVUsS0FBSztBQUFBLFFBQU87QUFDL0Qsa0JBQVUsT0FBTyxLQUFNLEtBQU07QUFDN0IsZUFBTztBQUFBLE1BQ1I7QUFBQSxNQUNBLE1BQU0sU0FBVSxTQUFVO0FBQ3pCLFlBQUlZLFNBQVEsR0FJWEMsVUFBUyxVQUFVLFVBQVUsT0FBTyxTQUFTO0FBQzlDLFlBQUssU0FBVTtBQUNkLGlCQUFPO0FBQUEsUUFDUjtBQUNBLGtCQUFVO0FBQ1YsZUFBUUQsU0FBUUMsU0FBUUQsVUFBVTtBQUNqQyxvQkFBVSxPQUFRQSxNQUFNLEVBQUUsSUFBSyxDQUFFO0FBQUEsUUFDbEM7QUFHQSxZQUFLLFNBQVU7QUFDZCxtQkFBUyxXQUFZLE1BQU0sQ0FBRSxXQUFXLEdBQUcsQ0FBRSxDQUFFO0FBQy9DLG1CQUFTLFlBQWEsTUFBTSxDQUFFLFdBQVcsT0FBUSxDQUFFO0FBQUEsUUFDcEQsT0FBTztBQUNOLG1CQUFTLFdBQVksTUFBTSxDQUFFLFdBQVcsT0FBUSxDQUFFO0FBQUEsUUFDbkQ7QUFDQSxlQUFPO0FBQUEsTUFDUjtBQUFBLElBQ0QsQ0FBRSxHQUNGLFFBQVEsVUFBVTtBQUVuQixlQUFZLE9BQU8sVUFBVSxLQUFLLGFBQWM7QUFFaEQsV0FBUSxRQUFRLFFBQVEsU0FBVTtBQUNqQyxlQUFTLFVBQVUsV0FBWSxLQUFNLEVBQUUsS0FBTSxXQUFXLE1BQU0sT0FBTyxVQUFVLElBQUs7QUFDcEYsVUFBSyxRQUFTO0FBQ2IsWUFBSyxPQUFPLE9BQU8sU0FBUyxZQUFhO0FBQ3hDLFVBQUFaLFFBQU8sWUFBYSxVQUFVLE1BQU0sVUFBVSxLQUFLLEtBQU0sRUFBRSxPQUMxRCxPQUFPLEtBQUssS0FBTSxNQUFPO0FBQUEsUUFDM0I7QUFDQSxlQUFPO0FBQUEsTUFDUjtBQUFBLElBQ0Q7QUFFQSxJQUFBQSxRQUFPLElBQUssT0FBTyxhQUFhLFNBQVU7QUFFMUMsUUFBSyxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQWE7QUFDakQsZ0JBQVUsS0FBSyxNQUFNLEtBQU0sTUFBTSxTQUFVO0FBQUEsSUFDNUM7QUFHQSxjQUNFLFNBQVUsVUFBVSxLQUFLLFFBQVMsRUFDbEMsS0FBTSxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssUUFBUyxFQUNuRCxLQUFNLFVBQVUsS0FBSyxJQUFLLEVBQzFCLE9BQVEsVUFBVSxLQUFLLE1BQU87QUFFaEMsSUFBQUEsUUFBTyxHQUFHO0FBQUEsTUFDVEEsUUFBTyxPQUFRLE1BQU07QUFBQSxRQUNwQjtBQUFBLFFBQ0EsTUFBTTtBQUFBLFFBQ04sT0FBTyxVQUFVLEtBQUs7QUFBQSxNQUN2QixDQUFFO0FBQUEsSUFDSDtBQUVBLFdBQU87QUFBQSxFQUNSO0FBRUEsRUFBQUEsUUFBTyxZQUFZQSxRQUFPLE9BQVEsV0FBVztBQUFBLElBRTVDLFVBQVU7QUFBQSxNQUNULEtBQUssQ0FBRSxTQUFVLE1BQU0sT0FBUTtBQUM5QixZQUFJLFFBQVEsS0FBSyxZQUFhLE1BQU0sS0FBTTtBQUMxQyxrQkFBVyxNQUFNLE1BQU0sTUFBTSxRQUFRLEtBQU0sS0FBTSxHQUFHLEtBQU07QUFDMUQsZUFBTztBQUFBLE1BQ1IsQ0FBRTtBQUFBLElBQ0g7QUFBQSxJQUVBLFNBQVMsU0FBVSxPQUFPLFVBQVc7QUFDcEMsVUFBSyxPQUFPLFVBQVUsWUFBYTtBQUNsQyxtQkFBVztBQUNYLGdCQUFRLENBQUUsR0FBSTtBQUFBLE1BQ2YsT0FBTztBQUNOLGdCQUFRLE1BQU0sTUFBTyxhQUFjO0FBQUEsTUFDcEM7QUFFQSxVQUFJLE1BQ0gsUUFBUSxHQUNSLFNBQVMsTUFBTTtBQUVoQixhQUFRLFFBQVEsUUFBUSxTQUFVO0FBQ2pDLGVBQU8sTUFBTyxLQUFNO0FBQ3BCLGtCQUFVLFNBQVUsSUFBSyxJQUFJLFVBQVUsU0FBVSxJQUFLLEtBQUssQ0FBQztBQUM1RCxrQkFBVSxTQUFVLElBQUssRUFBRSxRQUFTLFFBQVM7QUFBQSxNQUM5QztBQUFBLElBQ0Q7QUFBQSxJQUVBLFlBQVksQ0FBRSxnQkFBaUI7QUFBQSxJQUUvQixXQUFXLFNBQVUsVUFBVSxTQUFVO0FBQ3hDLFVBQUssU0FBVTtBQUNkLGtCQUFVLFdBQVcsUUFBUyxRQUFTO0FBQUEsTUFDeEMsT0FBTztBQUNOLGtCQUFVLFdBQVcsS0FBTSxRQUFTO0FBQUEsTUFDckM7QUFBQSxJQUNEO0FBQUEsRUFDRCxDQUFFO0FBRUYsRUFBQUEsUUFBTyxRQUFRLFNBQVUsT0FBTyxRQUFRLElBQUs7QUFDNUMsUUFBSSxNQUFNLFNBQVMsT0FBTyxVQUFVLFdBQVdBLFFBQU8sT0FBUSxDQUFDLEdBQUcsS0FBTSxJQUFJO0FBQUEsTUFDM0UsVUFBVSxNQUFNLFVBQ2YsT0FBTyxVQUFVLGNBQWM7QUFBQSxNQUNoQyxVQUFVO0FBQUEsTUFDVixRQUFRLE1BQU0sVUFBVSxVQUFVLE9BQU8sV0FBVyxjQUFjO0FBQUEsSUFDbkU7QUFHQSxRQUFLQSxRQUFPLEdBQUcsS0FBTTtBQUNwQixVQUFJLFdBQVc7QUFBQSxJQUVoQixPQUFPO0FBQ04sVUFBSyxPQUFPLElBQUksYUFBYSxVQUFXO0FBQ3ZDLFlBQUssSUFBSSxZQUFZQSxRQUFPLEdBQUcsUUFBUztBQUN2QyxjQUFJLFdBQVdBLFFBQU8sR0FBRyxPQUFRLElBQUksUUFBUztBQUFBLFFBRS9DLE9BQU87QUFDTixjQUFJLFdBQVdBLFFBQU8sR0FBRyxPQUFPO0FBQUEsUUFDakM7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUdBLFFBQUssSUFBSSxTQUFTLFFBQVEsSUFBSSxVQUFVLE1BQU87QUFDOUMsVUFBSSxRQUFRO0FBQUEsSUFDYjtBQUdBLFFBQUksTUFBTSxJQUFJO0FBRWQsUUFBSSxXQUFXLFdBQVc7QUFDekIsVUFBSyxPQUFPLElBQUksUUFBUSxZQUFhO0FBQ3BDLFlBQUksSUFBSSxLQUFNLElBQUs7QUFBQSxNQUNwQjtBQUVBLFVBQUssSUFBSSxPQUFRO0FBQ2hCLFFBQUFBLFFBQU8sUUFBUyxNQUFNLElBQUksS0FBTTtBQUFBLE1BQ2pDO0FBQUEsSUFDRDtBQUVBLFdBQU87QUFBQSxFQUNSO0FBRUEsRUFBQUEsUUFBTyxHQUFHLE9BQVE7QUFBQSxJQUNqQixRQUFRLFNBQVUsT0FBTyxJQUFJLFFBQVEsVUFBVztBQUcvQyxhQUFPLEtBQUssT0FBUSxrQkFBbUIsRUFBRSxJQUFLLFdBQVcsQ0FBRSxFQUFFLEtBQUssRUFHaEUsSUFBSSxFQUFFLFFBQVMsRUFBRSxTQUFTLEdBQUcsR0FBRyxPQUFPLFFBQVEsUUFBUztBQUFBLElBQzNEO0FBQUEsSUFDQSxTQUFTLFNBQVUsTUFBTSxPQUFPLFFBQVEsVUFBVztBQUNsRCxVQUFJLFFBQVFBLFFBQU8sY0FBZSxJQUFLLEdBQ3RDLFNBQVNBLFFBQU8sTUFBTyxPQUFPLFFBQVEsUUFBUyxHQUMvQyxjQUFjLFdBQVc7QUFHeEIsWUFBSSxPQUFPLFVBQVcsTUFBTUEsUUFBTyxPQUFRLENBQUMsR0FBRyxJQUFLLEdBQUcsTUFBTztBQUc5RCxZQUFLLFNBQVMsU0FBUyxJQUFLLE1BQU0sUUFBUyxHQUFJO0FBQzlDLGVBQUssS0FBTSxJQUFLO0FBQUEsUUFDakI7QUFBQSxNQUNEO0FBRUQsa0JBQVksU0FBUztBQUVyQixhQUFPLFNBQVMsT0FBTyxVQUFVLFFBQ2hDLEtBQUssS0FBTSxXQUFZLElBQ3ZCLEtBQUssTUFBTyxPQUFPLE9BQU8sV0FBWTtBQUFBLElBQ3hDO0FBQUEsSUFDQSxNQUFNLFNBQVUsTUFBTSxZQUFZLFNBQVU7QUFDM0MsVUFBSSxZQUFZLFNBQVUsT0FBUTtBQUNqQyxZQUFJLE9BQU8sTUFBTTtBQUNqQixlQUFPLE1BQU07QUFDYixhQUFNLE9BQVE7QUFBQSxNQUNmO0FBRUEsVUFBSyxPQUFPLFNBQVMsVUFBVztBQUMvQixrQkFBVTtBQUNWLHFCQUFhO0FBQ2IsZUFBTztBQUFBLE1BQ1I7QUFDQSxVQUFLLFlBQWE7QUFDakIsYUFBSyxNQUFPLFFBQVEsTUFBTSxDQUFDLENBQUU7QUFBQSxNQUM5QjtBQUVBLGFBQU8sS0FBSyxLQUFNLFdBQVc7QUFDNUIsWUFBSSxVQUFVLE1BQ2IsUUFBUSxRQUFRLFFBQVEsT0FBTyxjQUMvQixTQUFTQSxRQUFPLFFBQ2hCLE9BQU8sU0FBUyxJQUFLLElBQUs7QUFFM0IsWUFBSyxPQUFRO0FBQ1osY0FBSyxLQUFNLEtBQU0sS0FBSyxLQUFNLEtBQU0sRUFBRSxNQUFPO0FBQzFDLHNCQUFXLEtBQU0sS0FBTSxDQUFFO0FBQUEsVUFDMUI7QUFBQSxRQUNELE9BQU87QUFDTixlQUFNLFNBQVMsTUFBTztBQUNyQixnQkFBSyxLQUFNLEtBQU0sS0FBSyxLQUFNLEtBQU0sRUFBRSxRQUFRLEtBQUssS0FBTSxLQUFNLEdBQUk7QUFDaEUsd0JBQVcsS0FBTSxLQUFNLENBQUU7QUFBQSxZQUMxQjtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBRUEsYUFBTSxRQUFRLE9BQU8sUUFBUSxXQUFXO0FBQ3ZDLGNBQUssT0FBUSxLQUFNLEVBQUUsU0FBUyxTQUMzQixRQUFRLFFBQVEsT0FBUSxLQUFNLEVBQUUsVUFBVSxPQUFTO0FBRXJELG1CQUFRLEtBQU0sRUFBRSxLQUFLLEtBQU0sT0FBUTtBQUNuQyxzQkFBVTtBQUNWLG1CQUFPLE9BQVEsT0FBTyxDQUFFO0FBQUEsVUFDekI7QUFBQSxRQUNEO0FBS0EsWUFBSyxXQUFXLENBQUMsU0FBVTtBQUMxQixVQUFBQSxRQUFPLFFBQVMsTUFBTSxJQUFLO0FBQUEsUUFDNUI7QUFBQSxNQUNELENBQUU7QUFBQSxJQUNIO0FBQUEsSUFDQSxRQUFRLFNBQVUsTUFBTztBQUN4QixVQUFLLFNBQVMsT0FBUTtBQUNyQixlQUFPLFFBQVE7QUFBQSxNQUNoQjtBQUNBLGFBQU8sS0FBSyxLQUFNLFdBQVc7QUFDNUIsWUFBSSxPQUNILE9BQU8sU0FBUyxJQUFLLElBQUssR0FDMUIsUUFBUSxLQUFNLE9BQU8sT0FBUSxHQUM3QixRQUFRLEtBQU0sT0FBTyxZQUFhLEdBQ2xDLFNBQVNBLFFBQU8sUUFDaEIsU0FBUyxRQUFRLE1BQU0sU0FBUztBQUdqQyxhQUFLLFNBQVM7QUFHZCxRQUFBQSxRQUFPLE1BQU8sTUFBTSxNQUFNLENBQUMsQ0FBRTtBQUU3QixZQUFLLFNBQVMsTUFBTSxNQUFPO0FBQzFCLGdCQUFNLEtBQUssS0FBTSxNQUFNLElBQUs7QUFBQSxRQUM3QjtBQUdBLGFBQU0sUUFBUSxPQUFPLFFBQVEsV0FBVztBQUN2QyxjQUFLLE9BQVEsS0FBTSxFQUFFLFNBQVMsUUFBUSxPQUFRLEtBQU0sRUFBRSxVQUFVLE1BQU87QUFDdEUsbUJBQVEsS0FBTSxFQUFFLEtBQUssS0FBTSxJQUFLO0FBQ2hDLG1CQUFPLE9BQVEsT0FBTyxDQUFFO0FBQUEsVUFDekI7QUFBQSxRQUNEO0FBR0EsYUFBTSxRQUFRLEdBQUcsUUFBUSxRQUFRLFNBQVU7QUFDMUMsY0FBSyxNQUFPLEtBQU0sS0FBSyxNQUFPLEtBQU0sRUFBRSxRQUFTO0FBQzlDLGtCQUFPLEtBQU0sRUFBRSxPQUFPLEtBQU0sSUFBSztBQUFBLFVBQ2xDO0FBQUEsUUFDRDtBQUdBLGVBQU8sS0FBSztBQUFBLE1BQ2IsQ0FBRTtBQUFBLElBQ0g7QUFBQSxFQUNELENBQUU7QUFFRixFQUFBQSxRQUFPLEtBQU0sQ0FBRSxVQUFVLFFBQVEsTUFBTyxHQUFHLFNBQVUsSUFBSSxNQUFPO0FBQy9ELFFBQUksUUFBUUEsUUFBTyxHQUFJLElBQUs7QUFDNUIsSUFBQUEsUUFBTyxHQUFJLElBQUssSUFBSSxTQUFVLE9BQU8sUUFBUSxVQUFXO0FBQ3ZELGFBQU8sU0FBUyxRQUFRLE9BQU8sVUFBVSxZQUN4QyxNQUFNLE1BQU8sTUFBTSxTQUFVLElBQzdCLEtBQUssUUFBUyxNQUFPLE1BQU0sSUFBSyxHQUFHLE9BQU8sUUFBUSxRQUFTO0FBQUEsSUFDN0Q7QUFBQSxFQUNELENBQUU7QUFHRixFQUFBQSxRQUFPLEtBQU07QUFBQSxJQUNaLFdBQVcsTUFBTyxNQUFPO0FBQUEsSUFDekIsU0FBUyxNQUFPLE1BQU87QUFBQSxJQUN2QixhQUFhLE1BQU8sUUFBUztBQUFBLElBQzdCLFFBQVEsRUFBRSxTQUFTLE9BQU87QUFBQSxJQUMxQixTQUFTLEVBQUUsU0FBUyxPQUFPO0FBQUEsSUFDM0IsWUFBWSxFQUFFLFNBQVMsU0FBUztBQUFBLEVBQ2pDLEdBQUcsU0FBVSxNQUFNLE9BQVE7QUFDMUIsSUFBQUEsUUFBTyxHQUFJLElBQUssSUFBSSxTQUFVLE9BQU8sUUFBUSxVQUFXO0FBQ3ZELGFBQU8sS0FBSyxRQUFTLE9BQU8sT0FBTyxRQUFRLFFBQVM7QUFBQSxJQUNyRDtBQUFBLEVBQ0QsQ0FBRTtBQUVGLEVBQUFBLFFBQU8sU0FBUyxDQUFDO0FBQ2pCLEVBQUFBLFFBQU8sR0FBRyxPQUFPLFdBQVc7QUFDM0IsUUFBSSxPQUNIRCxLQUFJLEdBQ0osU0FBU0MsUUFBTztBQUVqQixZQUFRLEtBQUssSUFBSTtBQUVqQixXQUFRRCxLQUFJLE9BQU8sUUFBUUEsTUFBTTtBQUNoQyxjQUFRLE9BQVFBLEVBQUU7QUFHbEIsVUFBSyxDQUFDLE1BQU0sS0FBSyxPQUFRQSxFQUFFLE1BQU0sT0FBUTtBQUN4QyxlQUFPLE9BQVFBLE1BQUssQ0FBRTtBQUFBLE1BQ3ZCO0FBQUEsSUFDRDtBQUVBLFFBQUssQ0FBQyxPQUFPLFFBQVM7QUFDckIsTUFBQUMsUUFBTyxHQUFHLEtBQUs7QUFBQSxJQUNoQjtBQUNBLFlBQVE7QUFBQSxFQUNUO0FBRUEsRUFBQUEsUUFBTyxHQUFHLFFBQVEsU0FBVSxPQUFRO0FBQ25DLElBQUFBLFFBQU8sT0FBTyxLQUFNLEtBQU07QUFDMUIsSUFBQUEsUUFBTyxHQUFHLE1BQU07QUFBQSxFQUNqQjtBQUVBLEVBQUFBLFFBQU8sR0FBRyxRQUFRLFdBQVc7QUFDNUIsUUFBSyxZQUFhO0FBQ2pCO0FBQUEsSUFDRDtBQUVBLGlCQUFhO0FBQ2IsYUFBUztBQUFBLEVBQ1Y7QUFFQSxFQUFBQSxRQUFPLEdBQUcsT0FBTyxXQUFXO0FBQzNCLGlCQUFhO0FBQUEsRUFDZDtBQUVBLEVBQUFBLFFBQU8sR0FBRyxTQUFTO0FBQUEsSUFDbEIsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsSUFHTixVQUFVO0FBQUEsRUFDWDtBQUdBLEVBQUFBLFFBQU8sR0FBRyxRQUFRLFNBQVUsTUFBTSxNQUFPO0FBQ3hDLFdBQU9BLFFBQU8sS0FBS0EsUUFBTyxHQUFHLE9BQVEsSUFBSyxLQUFLLE9BQU87QUFDdEQsV0FBTyxRQUFRO0FBRWYsV0FBTyxLQUFLLE1BQU8sTUFBTSxTQUFVLE1BQU0sT0FBUTtBQUNoRCxVQUFJLFVBQVVGLFFBQU8sV0FBWSxNQUFNLElBQUs7QUFDNUMsWUFBTSxPQUFPLFdBQVc7QUFDdkIsUUFBQUEsUUFBTyxhQUFjLE9BQVE7QUFBQSxNQUM5QjtBQUFBLElBQ0QsQ0FBRTtBQUFBLEVBQ0g7QUFFQSxNQUFJLGFBQWEsdUNBQ2hCLGFBQWE7QUFFZCxFQUFBRSxRQUFPLEdBQUcsT0FBUTtBQUFBLElBQ2pCLE1BQU0sU0FBVSxNQUFNLE9BQVE7QUFDN0IsYUFBTyxPQUFRLE1BQU1BLFFBQU8sTUFBTSxNQUFNLE9BQU8sVUFBVSxTQUFTLENBQUU7QUFBQSxJQUNyRTtBQUFBLElBRUEsWUFBWSxTQUFVLE1BQU87QUFDNUIsYUFBTyxLQUFLLEtBQU0sV0FBVztBQUM1QixlQUFPLEtBQU1BLFFBQU8sUUFBUyxJQUFLLEtBQUssSUFBSztBQUFBLE1BQzdDLENBQUU7QUFBQSxJQUNIO0FBQUEsRUFDRCxDQUFFO0FBRUYsRUFBQUEsUUFBTyxPQUFRO0FBQUEsSUFDZCxNQUFNLFNBQVUsTUFBTSxNQUFNLE9BQVE7QUFDbkMsVUFBSSxLQUFLLE9BQ1IsUUFBUSxLQUFLO0FBR2QsVUFBSyxVQUFVLEtBQUssVUFBVSxLQUFLLFVBQVUsR0FBSTtBQUNoRDtBQUFBLE1BQ0Q7QUFFQSxVQUFLLFVBQVUsS0FBSyxDQUFDQSxRQUFPLFNBQVUsSUFBSyxHQUFJO0FBRzlDLGVBQU9BLFFBQU8sUUFBUyxJQUFLLEtBQUs7QUFDakMsZ0JBQVFBLFFBQU8sVUFBVyxJQUFLO0FBQUEsTUFDaEM7QUFFQSxVQUFLLFVBQVUsUUFBWTtBQUMxQixZQUFLLFNBQVMsU0FBUyxVQUNwQixNQUFNLE1BQU0sSUFBSyxNQUFNLE9BQU8sSUFBSyxPQUFRLFFBQVk7QUFDekQsaUJBQU87QUFBQSxRQUNSO0FBRUEsZUFBUyxLQUFNLElBQUssSUFBSTtBQUFBLE1BQ3pCO0FBRUEsVUFBSyxTQUFTLFNBQVMsVUFBVyxNQUFNLE1BQU0sSUFBSyxNQUFNLElBQUssT0FBUSxNQUFPO0FBQzVFLGVBQU87QUFBQSxNQUNSO0FBRUEsYUFBTyxLQUFNLElBQUs7QUFBQSxJQUNuQjtBQUFBLElBRUEsV0FBVztBQUFBLE1BQ1YsVUFBVTtBQUFBLFFBQ1QsS0FBSyxTQUFVLE1BQU87QUFNckIsY0FBSSxXQUFXLEtBQUssYUFBYyxVQUFXO0FBRTdDLGNBQUssVUFBVztBQUNmLG1CQUFPLFNBQVUsVUFBVSxFQUFHO0FBQUEsVUFDL0I7QUFFQSxjQUNDLFdBQVcsS0FBTSxLQUFLLFFBQVM7QUFBQTtBQUFBLFVBSS9CLFdBQVcsS0FBTSxLQUFLLFFBQVMsS0FBSyxLQUFLLE1BQ3hDO0FBQ0QsbUJBQU87QUFBQSxVQUNSO0FBRUEsaUJBQU87QUFBQSxRQUNSO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUVBLFNBQVM7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxJQUNWO0FBQUEsRUFDRCxDQUFFO0FBT0YsTUFBSyxNQUFPO0FBQ1gsSUFBQUEsUUFBTyxVQUFVLFdBQVc7QUFBQSxNQUMzQixLQUFLLFNBQVUsTUFBTztBQUVyQixZQUFJLFNBQVMsS0FBSztBQUNsQixZQUFLLFVBQVUsT0FBTyxZQUFhO0FBRWxDLGlCQUFPLFdBQVc7QUFBQSxRQUNuQjtBQUNBLGVBQU87QUFBQSxNQUNSO0FBQUEsTUFDQSxLQUFLLFNBQVUsTUFBTztBQUdyQixZQUFJLFNBQVMsS0FBSztBQUNsQixZQUFLLFFBQVM7QUFFYixpQkFBTztBQUVQLGNBQUssT0FBTyxZQUFhO0FBRXhCLG1CQUFPLFdBQVc7QUFBQSxVQUNuQjtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFFQSxFQUFBQSxRQUFPLEtBQU07QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRCxHQUFHLFdBQVc7QUFDYixJQUFBQSxRQUFPLFFBQVMsS0FBSyxZQUFZLENBQUUsSUFBSTtBQUFBLEVBQ3hDLENBQUU7QUFJRixXQUFTLGlCQUFrQixPQUFRO0FBQ2xDLFFBQUksU0FBUyxNQUFNLE1BQU8sYUFBYyxLQUFLLENBQUM7QUFDOUMsV0FBTyxPQUFPLEtBQU0sR0FBSTtBQUFBLEVBQ3pCO0FBRUEsV0FBUyxTQUFVLE1BQU87QUFDekIsV0FBTyxLQUFLLGdCQUFnQixLQUFLLGFBQWMsT0FBUSxLQUFLO0FBQUEsRUFDN0Q7QUFFQSxXQUFTLGVBQWdCLE9BQVE7QUFDaEMsUUFBSyxNQUFNLFFBQVMsS0FBTSxHQUFJO0FBQzdCLGFBQU87QUFBQSxJQUNSO0FBQ0EsUUFBSyxPQUFPLFVBQVUsVUFBVztBQUNoQyxhQUFPLE1BQU0sTUFBTyxhQUFjLEtBQUssQ0FBQztBQUFBLElBQ3pDO0FBQ0EsV0FBTyxDQUFDO0FBQUEsRUFDVDtBQUVBLEVBQUFBLFFBQU8sR0FBRyxPQUFRO0FBQUEsSUFDakIsVUFBVSxTQUFVLE9BQVE7QUFDM0IsVUFBSSxZQUFZLEtBQUssVUFBVSxXQUFXRCxJQUFHO0FBRTdDLFVBQUssT0FBTyxVQUFVLFlBQWE7QUFDbEMsZUFBTyxLQUFLLEtBQU0sU0FBVSxHQUFJO0FBQy9CLFVBQUFDLFFBQVEsSUFBSyxFQUFFLFNBQVUsTUFBTSxLQUFNLE1BQU0sR0FBRyxTQUFVLElBQUssQ0FBRSxDQUFFO0FBQUEsUUFDbEUsQ0FBRTtBQUFBLE1BQ0g7QUFFQSxtQkFBYSxlQUFnQixLQUFNO0FBRW5DLFVBQUssV0FBVyxRQUFTO0FBQ3hCLGVBQU8sS0FBSyxLQUFNLFdBQVc7QUFDNUIscUJBQVcsU0FBVSxJQUFLO0FBQzFCLGdCQUFNLEtBQUssYUFBYSxLQUFPLE1BQU0saUJBQWtCLFFBQVMsSUFBSTtBQUVwRSxjQUFLLEtBQU07QUFDVixpQkFBTUQsS0FBSSxHQUFHQSxLQUFJLFdBQVcsUUFBUUEsTUFBTTtBQUN6QywwQkFBWSxXQUFZQSxFQUFFO0FBQzFCLGtCQUFLLElBQUksUUFBUyxNQUFNLFlBQVksR0FBSSxJQUFJLEdBQUk7QUFDL0MsdUJBQU8sWUFBWTtBQUFBLGNBQ3BCO0FBQUEsWUFDRDtBQUdBLHlCQUFhLGlCQUFrQixHQUFJO0FBQ25DLGdCQUFLLGFBQWEsWUFBYTtBQUM5QixtQkFBSyxhQUFjLFNBQVMsVUFBVztBQUFBLFlBQ3hDO0FBQUEsVUFDRDtBQUFBLFFBQ0QsQ0FBRTtBQUFBLE1BQ0g7QUFFQSxhQUFPO0FBQUEsSUFDUjtBQUFBLElBRUEsYUFBYSxTQUFVLE9BQVE7QUFDOUIsVUFBSSxZQUFZLEtBQUssVUFBVSxXQUFXQSxJQUFHO0FBRTdDLFVBQUssT0FBTyxVQUFVLFlBQWE7QUFDbEMsZUFBTyxLQUFLLEtBQU0sU0FBVSxHQUFJO0FBQy9CLFVBQUFDLFFBQVEsSUFBSyxFQUFFLFlBQWEsTUFBTSxLQUFNLE1BQU0sR0FBRyxTQUFVLElBQUssQ0FBRSxDQUFFO0FBQUEsUUFDckUsQ0FBRTtBQUFBLE1BQ0g7QUFFQSxVQUFLLENBQUMsVUFBVSxRQUFTO0FBQ3hCLGVBQU8sS0FBSyxLQUFNLFNBQVMsRUFBRztBQUFBLE1BQy9CO0FBRUEsbUJBQWEsZUFBZ0IsS0FBTTtBQUVuQyxVQUFLLFdBQVcsUUFBUztBQUN4QixlQUFPLEtBQUssS0FBTSxXQUFXO0FBQzVCLHFCQUFXLFNBQVUsSUFBSztBQUcxQixnQkFBTSxLQUFLLGFBQWEsS0FBTyxNQUFNLGlCQUFrQixRQUFTLElBQUk7QUFFcEUsY0FBSyxLQUFNO0FBQ1YsaUJBQU1ELEtBQUksR0FBR0EsS0FBSSxXQUFXLFFBQVFBLE1BQU07QUFDekMsMEJBQVksV0FBWUEsRUFBRTtBQUcxQixxQkFBUSxJQUFJLFFBQVMsTUFBTSxZQUFZLEdBQUksSUFBSSxJQUFLO0FBQ25ELHNCQUFNLElBQUksUUFBUyxNQUFNLFlBQVksS0FBSyxHQUFJO0FBQUEsY0FDL0M7QUFBQSxZQUNEO0FBR0EseUJBQWEsaUJBQWtCLEdBQUk7QUFDbkMsZ0JBQUssYUFBYSxZQUFhO0FBQzlCLG1CQUFLLGFBQWMsU0FBUyxVQUFXO0FBQUEsWUFDeEM7QUFBQSxVQUNEO0FBQUEsUUFDRCxDQUFFO0FBQUEsTUFDSDtBQUVBLGFBQU87QUFBQSxJQUNSO0FBQUEsSUFFQSxhQUFhLFNBQVUsT0FBTyxVQUFXO0FBQ3hDLFVBQUksWUFBWSxXQUFXQSxJQUFHO0FBRTlCLFVBQUssT0FBTyxVQUFVLFlBQWE7QUFDbEMsZUFBTyxLQUFLLEtBQU0sU0FBVUEsSUFBSTtBQUMvQixVQUFBQyxRQUFRLElBQUssRUFBRTtBQUFBLFlBQ2QsTUFBTSxLQUFNLE1BQU1ELElBQUcsU0FBVSxJQUFLLEdBQUcsUUFBUztBQUFBLFlBQ2hEO0FBQUEsVUFDRDtBQUFBLFFBQ0QsQ0FBRTtBQUFBLE1BQ0g7QUFFQSxVQUFLLE9BQU8sYUFBYSxXQUFZO0FBQ3BDLGVBQU8sV0FBVyxLQUFLLFNBQVUsS0FBTSxJQUFJLEtBQUssWUFBYSxLQUFNO0FBQUEsTUFDcEU7QUFFQSxtQkFBYSxlQUFnQixLQUFNO0FBRW5DLFVBQUssV0FBVyxRQUFTO0FBQ3hCLGVBQU8sS0FBSyxLQUFNLFdBQVc7QUFHNUIsaUJBQU9DLFFBQVEsSUFBSztBQUVwQixlQUFNRCxLQUFJLEdBQUdBLEtBQUksV0FBVyxRQUFRQSxNQUFNO0FBQ3pDLHdCQUFZLFdBQVlBLEVBQUU7QUFHMUIsZ0JBQUssS0FBSyxTQUFVLFNBQVUsR0FBSTtBQUNqQyxtQkFBSyxZQUFhLFNBQVU7QUFBQSxZQUM3QixPQUFPO0FBQ04sbUJBQUssU0FBVSxTQUFVO0FBQUEsWUFDMUI7QUFBQSxVQUNEO0FBQUEsUUFDRCxDQUFFO0FBQUEsTUFDSDtBQUVBLGFBQU87QUFBQSxJQUNSO0FBQUEsSUFFQSxVQUFVLFNBQVUsVUFBVztBQUM5QixVQUFJLFdBQVcsTUFDZEEsS0FBSTtBQUVMLGtCQUFZLE1BQU0sV0FBVztBQUM3QixhQUFVLE9BQU8sS0FBTUEsSUFBSSxHQUFNO0FBQ2hDLFlBQUssS0FBSyxhQUFhLE1BQ3BCLE1BQU0saUJBQWtCLFNBQVUsSUFBSyxDQUFFLElBQUksS0FBTSxRQUFTLFNBQVUsSUFBSSxJQUFLO0FBQ2pGLGlCQUFPO0FBQUEsUUFDUjtBQUFBLE1BQ0Q7QUFFQSxhQUFPO0FBQUEsSUFDUjtBQUFBLEVBQ0QsQ0FBRTtBQUVGLEVBQUFDLFFBQU8sR0FBRyxPQUFRO0FBQUEsSUFDakIsS0FBSyxTQUFVLE9BQVE7QUFDdEIsVUFBSSxPQUFPLEtBQUssaUJBQ2YsT0FBTyxLQUFNLENBQUU7QUFFaEIsVUFBSyxDQUFDLFVBQVUsUUFBUztBQUN4QixZQUFLLE1BQU87QUFDWCxrQkFBUUEsUUFBTyxTQUFVLEtBQUssSUFBSyxLQUNsQ0EsUUFBTyxTQUFVLEtBQUssU0FBUyxZQUFZLENBQUU7QUFFOUMsY0FBSyxTQUNKLFNBQVMsVUFDUCxNQUFNLE1BQU0sSUFBSyxNQUFNLE9BQVEsT0FBUSxRQUN4QztBQUNELG1CQUFPO0FBQUEsVUFDUjtBQUVBLGdCQUFNLEtBQUs7QUFHWCxpQkFBTyxPQUFPLE9BQU8sS0FBSztBQUFBLFFBQzNCO0FBRUE7QUFBQSxNQUNEO0FBRUEsd0JBQWtCLE9BQU8sVUFBVTtBQUVuQyxhQUFPLEtBQUssS0FBTSxTQUFVRCxJQUFJO0FBQy9CLFlBQUk7QUFFSixZQUFLLEtBQUssYUFBYSxHQUFJO0FBQzFCO0FBQUEsUUFDRDtBQUVBLFlBQUssaUJBQWtCO0FBQ3RCLGdCQUFNLE1BQU0sS0FBTSxNQUFNQSxJQUFHQyxRQUFRLElBQUssRUFBRSxJQUFJLENBQUU7QUFBQSxRQUNqRCxPQUFPO0FBQ04sZ0JBQU07QUFBQSxRQUNQO0FBR0EsWUFBSyxPQUFPLE1BQU87QUFDbEIsZ0JBQU07QUFBQSxRQUVQLFdBQVksT0FBTyxRQUFRLFVBQVc7QUFDckMsaUJBQU87QUFBQSxRQUVSLFdBQVksTUFBTSxRQUFTLEdBQUksR0FBSTtBQUNsQyxnQkFBTUEsUUFBTyxJQUFLLEtBQUssU0FBVUcsUUFBUTtBQUN4QyxtQkFBT0EsVUFBUyxPQUFPLEtBQUtBLFNBQVE7QUFBQSxVQUNyQyxDQUFFO0FBQUEsUUFDSDtBQUVBLGdCQUFRSCxRQUFPLFNBQVUsS0FBSyxJQUFLLEtBQUtBLFFBQU8sU0FBVSxLQUFLLFNBQVMsWUFBWSxDQUFFO0FBR3JGLFlBQUssQ0FBQyxTQUFTLEVBQUcsU0FBUyxVQUFXLE1BQU0sSUFBSyxNQUFNLEtBQUssT0FBUSxNQUFNLFFBQVk7QUFDckYsZUFBSyxRQUFRO0FBQUEsUUFDZDtBQUFBLE1BQ0QsQ0FBRTtBQUFBLElBQ0g7QUFBQSxFQUNELENBQUU7QUFFRixFQUFBQSxRQUFPLE9BQVE7QUFBQSxJQUNkLFVBQVU7QUFBQSxNQUNULFFBQVE7QUFBQSxRQUNQLEtBQUssU0FBVSxNQUFPO0FBQ3JCLGNBQUksT0FBTyxRQUFRRCxJQUNsQixVQUFVLEtBQUssU0FDZixRQUFRLEtBQUssZUFDYixNQUFNLEtBQUssU0FBUyxjQUNwQixTQUFTLE1BQU0sT0FBTyxDQUFDLEdBQ3ZCLE1BQU0sTUFBTSxRQUFRLElBQUksUUFBUTtBQUVqQyxjQUFLLFFBQVEsR0FBSTtBQUNoQixZQUFBQSxLQUFJO0FBQUEsVUFFTCxPQUFPO0FBQ04sWUFBQUEsS0FBSSxNQUFNLFFBQVE7QUFBQSxVQUNuQjtBQUdBLGlCQUFRQSxLQUFJLEtBQUtBLE1BQU07QUFDdEIscUJBQVMsUUFBU0EsRUFBRTtBQUVwQixnQkFBSyxPQUFPO0FBQUEsWUFHVixDQUFDLE9BQU8sYUFDTixDQUFDLE9BQU8sV0FBVyxZQUNwQixDQUFDLFNBQVUsT0FBTyxZQUFZLFVBQVcsSUFBTTtBQUdqRCxzQkFBUUMsUUFBUSxNQUFPLEVBQUUsSUFBSTtBQUc3QixrQkFBSyxLQUFNO0FBQ1YsdUJBQU87QUFBQSxjQUNSO0FBR0EscUJBQU8sS0FBTSxLQUFNO0FBQUEsWUFDcEI7QUFBQSxVQUNEO0FBRUEsaUJBQU87QUFBQSxRQUNSO0FBQUEsUUFFQSxLQUFLLFNBQVUsTUFBTSxPQUFRO0FBQzVCLGNBQUksV0FBVyxRQUNkLFVBQVUsS0FBSyxTQUNmLFNBQVNBLFFBQU8sVUFBVyxLQUFNLEdBQ2pDRCxLQUFJLFFBQVE7QUFFYixpQkFBUUEsTUFBTTtBQUNiLHFCQUFTLFFBQVNBLEVBQUU7QUFFcEIsZ0JBQU8sT0FBTyxXQUNiQyxRQUFPLFFBQVNBLFFBQVEsTUFBTyxFQUFFLElBQUksR0FBRyxNQUFPLElBQUksSUFDaEQ7QUFDSCwwQkFBWTtBQUFBLFlBQ2I7QUFBQSxVQUNEO0FBR0EsY0FBSyxDQUFDLFdBQVk7QUFDakIsaUJBQUssZ0JBQWdCO0FBQUEsVUFDdEI7QUFDQSxpQkFBTztBQUFBLFFBQ1I7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0QsQ0FBRTtBQUVGLE1BQUssTUFBTztBQUNYLElBQUFBLFFBQU8sU0FBUyxTQUFTO0FBQUEsTUFDeEIsS0FBSyxTQUFVLE1BQU87QUFFckIsWUFBSSxNQUFNLEtBQUssYUFBYyxPQUFRO0FBQ3JDLGVBQU8sT0FBTyxPQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU1BLGlCQUFrQkEsUUFBTyxLQUFNLElBQUssQ0FBRTtBQUFBO0FBQUEsTUFDeEM7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUdBLEVBQUFBLFFBQU8sS0FBTSxDQUFFLFNBQVMsVUFBVyxHQUFHLFdBQVc7QUFDaEQsSUFBQUEsUUFBTyxTQUFVLElBQUssSUFBSTtBQUFBLE1BQ3pCLEtBQUssU0FBVSxNQUFNLE9BQVE7QUFDNUIsWUFBSyxNQUFNLFFBQVMsS0FBTSxHQUFJO0FBQzdCLGlCQUFTLEtBQUssVUFBVUEsUUFBTyxRQUFTQSxRQUFRLElBQUssRUFBRSxJQUFJLEdBQUcsS0FBTSxJQUFJO0FBQUEsUUFDekU7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0QsQ0FBRTtBQUVGLE1BQUksY0FBYyxtQ0FDakIsMEJBQTBCLFNBQVUsR0FBSTtBQUN2QyxNQUFFLGdCQUFnQjtBQUFBLEVBQ25CO0FBRUQsRUFBQUEsUUFBTyxPQUFRQSxRQUFPLE9BQU87QUFBQSxJQUU1QixTQUFTLFNBQVUsT0FBTyxNQUFNLE1BQU0sY0FBZTtBQUVwRCxVQUFJRCxJQUFHLEtBQUssS0FBSyxZQUFZLFFBQVEsUUFBUSxTQUFTLGFBQ3JELFlBQVksQ0FBRSxRQUFRLFVBQVcsR0FDakMsT0FBTyxPQUFPLEtBQU0sT0FBTyxNQUFPLElBQUksTUFBTSxPQUFPLE9BQ25ELGFBQWEsT0FBTyxLQUFNLE9BQU8sV0FBWSxJQUFJLE1BQU0sVUFBVSxNQUFPLEdBQUksSUFBSSxDQUFDO0FBRWxGLFlBQU0sY0FBYyxNQUFNLE9BQU8sUUFBUTtBQUd6QyxVQUFLLEtBQUssYUFBYSxLQUFLLEtBQUssYUFBYSxHQUFJO0FBQ2pEO0FBQUEsTUFDRDtBQUdBLFVBQUssWUFBWSxLQUFNLE9BQU9DLFFBQU8sTUFBTSxTQUFVLEdBQUk7QUFDeEQ7QUFBQSxNQUNEO0FBRUEsVUFBSyxLQUFLLFFBQVMsR0FBSSxJQUFJLElBQUs7QUFHL0IscUJBQWEsS0FBSyxNQUFPLEdBQUk7QUFDN0IsZUFBTyxXQUFXLE1BQU07QUFDeEIsbUJBQVcsS0FBSztBQUFBLE1BQ2pCO0FBQ0EsZUFBUyxLQUFLLFFBQVMsR0FBSSxJQUFJLEtBQUssT0FBTztBQUczQyxjQUFRLE1BQU9BLFFBQU8sT0FBUSxJQUM3QixRQUNBLElBQUlBLFFBQU8sTUFBTyxNQUFNLE9BQU8sVUFBVSxZQUFZLEtBQU07QUFHNUQsWUFBTSxZQUFZLGVBQWUsSUFBSTtBQUNyQyxZQUFNLFlBQVksV0FBVyxLQUFNLEdBQUk7QUFDdkMsWUFBTSxhQUFhLE1BQU0sWUFDeEIsSUFBSSxPQUFRLFlBQVksV0FBVyxLQUFNLGVBQWdCLElBQUksU0FBVSxJQUN2RTtBQUdELFlBQU0sU0FBUztBQUNmLFVBQUssQ0FBQyxNQUFNLFFBQVM7QUFDcEIsY0FBTSxTQUFTO0FBQUEsTUFDaEI7QUFHQSxhQUFPLFFBQVEsT0FDZCxDQUFFLEtBQU0sSUFDUkEsUUFBTyxVQUFXLE1BQU0sQ0FBRSxLQUFNLENBQUU7QUFHbkMsZ0JBQVVBLFFBQU8sTUFBTSxRQUFTLElBQUssS0FBSyxDQUFDO0FBQzNDLFVBQUssQ0FBQyxnQkFBZ0IsUUFBUSxXQUFXLFFBQVEsUUFBUSxNQUFPLE1BQU0sSUFBSyxNQUFNLE9BQVE7QUFDeEY7QUFBQSxNQUNEO0FBSUEsVUFBSyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsWUFBWSxDQUFDLFNBQVUsSUFBSyxHQUFJO0FBRTlELHFCQUFhLFFBQVEsZ0JBQWdCO0FBQ3JDLFlBQUssQ0FBQyxZQUFZLEtBQU0sYUFBYSxJQUFLLEdBQUk7QUFDN0MsZ0JBQU0sSUFBSTtBQUFBLFFBQ1g7QUFDQSxlQUFRLEtBQUssTUFBTSxJQUFJLFlBQWE7QUFDbkMsb0JBQVUsS0FBTSxHQUFJO0FBQ3BCLGdCQUFNO0FBQUEsUUFDUDtBQUdBLFlBQUssU0FBVSxLQUFLLGlCQUFpQixhQUFlO0FBQ25ELG9CQUFVLEtBQU0sSUFBSSxlQUFlLElBQUksZ0JBQWdCRixPQUFPO0FBQUEsUUFDL0Q7QUFBQSxNQUNEO0FBR0EsTUFBQUMsS0FBSTtBQUNKLGNBQVUsTUFBTSxVQUFXQSxJQUFJLE1BQU8sQ0FBQyxNQUFNLHFCQUFxQixHQUFJO0FBQ3JFLHNCQUFjO0FBQ2QsY0FBTSxPQUFPQSxLQUFJLElBQ2hCLGFBQ0EsUUFBUSxZQUFZO0FBR3JCLGtCQUFXLFNBQVMsSUFBSyxLQUFLLFFBQVMsS0FBSyx1QkFBTyxPQUFRLElBQUssR0FBSyxNQUFNLElBQUssS0FDL0UsU0FBUyxJQUFLLEtBQUssUUFBUztBQUM3QixZQUFLLFFBQVM7QUFDYixpQkFBTyxNQUFPLEtBQUssSUFBSztBQUFBLFFBQ3pCO0FBR0EsaUJBQVMsVUFBVSxJQUFLLE1BQU87QUFDL0IsWUFBSyxVQUFVLE9BQU8sU0FBUyxXQUFZLEdBQUksR0FBSTtBQUNsRCxnQkFBTSxTQUFTLE9BQU8sTUFBTyxLQUFLLElBQUs7QUFDdkMsY0FBSyxNQUFNLFdBQVcsT0FBUTtBQUM3QixrQkFBTSxlQUFlO0FBQUEsVUFDdEI7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUNBLFlBQU0sT0FBTztBQUdiLFVBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLG1CQUFtQixHQUFJO0FBRW5ELGFBQU8sQ0FBQyxRQUFRLFlBQ2YsUUFBUSxTQUFTLE1BQU8sVUFBVSxJQUFJLEdBQUcsSUFBSyxNQUFNLFVBQ3BELFdBQVksSUFBSyxHQUFJO0FBSXJCLGNBQUssVUFBVSxPQUFPLEtBQU0sSUFBSyxNQUFNLGNBQWMsQ0FBQyxTQUFVLElBQUssR0FBSTtBQUd4RSxrQkFBTSxLQUFNLE1BQU87QUFFbkIsZ0JBQUssS0FBTTtBQUNWLG1CQUFNLE1BQU8sSUFBSTtBQUFBLFlBQ2xCO0FBR0EsWUFBQUMsUUFBTyxNQUFNLFlBQVk7QUFFekIsZ0JBQUssTUFBTSxxQkFBcUIsR0FBSTtBQUNuQywwQkFBWSxpQkFBa0IsTUFBTSx1QkFBd0I7QUFBQSxZQUM3RDtBQUVBLGlCQUFNLElBQUssRUFBRTtBQUViLGdCQUFLLE1BQU0scUJBQXFCLEdBQUk7QUFDbkMsMEJBQVksb0JBQXFCLE1BQU0sdUJBQXdCO0FBQUEsWUFDaEU7QUFFQSxZQUFBQSxRQUFPLE1BQU0sWUFBWTtBQUV6QixnQkFBSyxLQUFNO0FBQ1YsbUJBQU0sTUFBTyxJQUFJO0FBQUEsWUFDbEI7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFFQSxhQUFPLE1BQU07QUFBQSxJQUNkO0FBQUE7QUFBQTtBQUFBLElBSUEsVUFBVSxTQUFVLE1BQU0sTUFBTSxPQUFRO0FBQ3ZDLFVBQUksSUFBSUEsUUFBTztBQUFBLFFBQ2QsSUFBSUEsUUFBTyxNQUFNO0FBQUEsUUFDakI7QUFBQSxRQUNBO0FBQUEsVUFDQztBQUFBLFVBQ0EsYUFBYTtBQUFBLFFBQ2Q7QUFBQSxNQUNEO0FBRUEsTUFBQUEsUUFBTyxNQUFNLFFBQVMsR0FBRyxNQUFNLElBQUs7QUFBQSxJQUNyQztBQUFBLEVBRUQsQ0FBRTtBQUVGLEVBQUFBLFFBQU8sR0FBRyxPQUFRO0FBQUEsSUFFakIsU0FBUyxTQUFVLE1BQU0sTUFBTztBQUMvQixhQUFPLEtBQUssS0FBTSxXQUFXO0FBQzVCLFFBQUFBLFFBQU8sTUFBTSxRQUFTLE1BQU0sTUFBTSxJQUFLO0FBQUEsTUFDeEMsQ0FBRTtBQUFBLElBQ0g7QUFBQSxJQUNBLGdCQUFnQixTQUFVLE1BQU0sTUFBTztBQUN0QyxVQUFJLE9BQU8sS0FBTSxDQUFFO0FBQ25CLFVBQUssTUFBTztBQUNYLGVBQU9BLFFBQU8sTUFBTSxRQUFTLE1BQU0sTUFBTSxNQUFNLElBQUs7QUFBQSxNQUNyRDtBQUFBLElBQ0Q7QUFBQSxFQUNELENBQUU7QUFFRixNQUFJLFdBQVdGLFFBQU87QUFFdEIsTUFBSSxRQUFRLEVBQUUsTUFBTSxLQUFLLElBQUksRUFBRTtBQUUvQixNQUFJLFNBQVM7QUFHYixFQUFBRSxRQUFPLFdBQVcsU0FBVSxNQUFPO0FBQ2xDLFFBQUksS0FBSztBQUNULFFBQUssQ0FBQyxRQUFRLE9BQU8sU0FBUyxVQUFXO0FBQ3hDLGFBQU87QUFBQSxJQUNSO0FBSUEsUUFBSTtBQUNILFlBQVEsSUFBSUYsUUFBTyxVQUFVLEVBQUksZ0JBQWlCLE1BQU0sVUFBVztBQUFBLElBQ3BFLFNBQVUsR0FBSTtBQUFBLElBQUM7QUFFZixzQkFBa0IsT0FBTyxJQUFJLHFCQUFzQixhQUFjLEVBQUcsQ0FBRTtBQUN0RSxRQUFLLENBQUMsT0FBTyxpQkFBa0I7QUFDOUIsTUFBQUUsUUFBTyxNQUFPLG1CQUNiLGtCQUNDQSxRQUFPLElBQUssZ0JBQWdCLFlBQVksU0FBVSxJQUFLO0FBQ3RELGVBQU8sR0FBRztBQUFBLE1BQ1gsQ0FBRSxFQUFFLEtBQU0sSUFBSyxJQUNmLEtBQ0E7QUFBQSxJQUNIO0FBQ0EsV0FBTztBQUFBLEVBQ1I7QUFFQSxNQUNDLFdBQVcsU0FDWCxRQUFRLFVBQ1Isa0JBQWtCLHlDQUNsQixlQUFlO0FBRWhCLFdBQVMsWUFBYSxRQUFRLEtBQUssYUFBYSxLQUFNO0FBQ3JELFFBQUk7QUFFSixRQUFLLE1BQU0sUUFBUyxHQUFJLEdBQUk7QUFHM0IsTUFBQUEsUUFBTyxLQUFNLEtBQUssU0FBVUQsSUFBRyxHQUFJO0FBQ2xDLFlBQUssZUFBZSxTQUFTLEtBQU0sTUFBTyxHQUFJO0FBRzdDLGNBQUssUUFBUSxDQUFFO0FBQUEsUUFFaEIsT0FBTztBQUdOO0FBQUEsWUFDQyxTQUFTLE9BQVEsT0FBTyxNQUFNLFlBQVksS0FBSyxPQUFPQSxLQUFJLE1BQU87QUFBQSxZQUNqRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxNQUNELENBQUU7QUFBQSxJQUVILFdBQVksQ0FBQyxlQUFlLE9BQVEsR0FBSSxNQUFNLFVBQVc7QUFHeEQsV0FBTSxRQUFRLEtBQU07QUFDbkIsb0JBQWEsU0FBUyxNQUFNLE9BQU8sS0FBSyxJQUFLLElBQUssR0FBRyxhQUFhLEdBQUk7QUFBQSxNQUN2RTtBQUFBLElBRUQsT0FBTztBQUdOLFVBQUssUUFBUSxHQUFJO0FBQUEsSUFDbEI7QUFBQSxFQUNEO0FBSUEsRUFBQUMsUUFBTyxRQUFRLFNBQVUsR0FBRyxhQUFjO0FBQ3pDLFFBQUksUUFDSCxJQUFJLENBQUMsR0FDTCxNQUFNLFNBQVUsS0FBSyxpQkFBa0I7QUFHdEMsVUFBSSxRQUFRLE9BQU8sb0JBQW9CLGFBQ3RDLGdCQUFnQixJQUNoQjtBQUVELFFBQUcsRUFBRSxNQUFPLElBQUksbUJBQW9CLEdBQUksSUFBSSxNQUMzQyxtQkFBb0IsU0FBUyxPQUFPLEtBQUssS0FBTTtBQUFBLElBQ2pEO0FBRUQsUUFBSyxLQUFLLE1BQU87QUFDaEIsYUFBTztBQUFBLElBQ1I7QUFHQSxRQUFLLE1BQU0sUUFBUyxDQUFFLEtBQU8sRUFBRSxVQUFVLENBQUNBLFFBQU8sY0FBZSxDQUFFLEdBQU07QUFHdkUsTUFBQUEsUUFBTyxLQUFNLEdBQUcsV0FBVztBQUMxQixZQUFLLEtBQUssTUFBTSxLQUFLLEtBQU07QUFBQSxNQUM1QixDQUFFO0FBQUEsSUFFSCxPQUFPO0FBSU4sV0FBTSxVQUFVLEdBQUk7QUFDbkIsb0JBQWEsUUFBUSxFQUFHLE1BQU8sR0FBRyxhQUFhLEdBQUk7QUFBQSxNQUNwRDtBQUFBLElBQ0Q7QUFHQSxXQUFPLEVBQUUsS0FBTSxHQUFJO0FBQUEsRUFDcEI7QUFFQSxFQUFBQSxRQUFPLEdBQUcsT0FBUTtBQUFBLElBQ2pCLFdBQVcsV0FBVztBQUNyQixhQUFPQSxRQUFPLE1BQU8sS0FBSyxlQUFlLENBQUU7QUFBQSxJQUM1QztBQUFBLElBQ0EsZ0JBQWdCLFdBQVc7QUFDMUIsYUFBTyxLQUFLLElBQUssV0FBVztBQUczQixZQUFJLFdBQVdBLFFBQU8sS0FBTSxNQUFNLFVBQVc7QUFDN0MsZUFBTyxXQUFXQSxRQUFPLFVBQVcsUUFBUyxJQUFJO0FBQUEsTUFDbEQsQ0FBRSxFQUFFLE9BQVEsV0FBVztBQUN0QixZQUFJLE9BQU8sS0FBSztBQUdoQixlQUFPLEtBQUssUUFBUSxDQUFDQSxRQUFRLElBQUssRUFBRSxHQUFJLFdBQVksS0FDbkQsYUFBYSxLQUFNLEtBQUssUUFBUyxLQUFLLENBQUMsZ0JBQWdCLEtBQU0sSUFBSyxNQUNoRSxLQUFLLFdBQVcsQ0FBQyxlQUFlLEtBQU0sSUFBSztBQUFBLE1BQy9DLENBQUUsRUFBRSxJQUFLLFNBQVUsSUFBSSxNQUFPO0FBQzdCLFlBQUksTUFBTUEsUUFBUSxJQUFLLEVBQUUsSUFBSTtBQUU3QixZQUFLLE9BQU8sTUFBTztBQUNsQixpQkFBTztBQUFBLFFBQ1I7QUFFQSxZQUFLLE1BQU0sUUFBUyxHQUFJLEdBQUk7QUFDM0IsaUJBQU9BLFFBQU8sSUFBSyxLQUFLLFNBQVVjLE1BQU07QUFDdkMsbUJBQU8sRUFBRSxNQUFNLEtBQUssTUFBTSxPQUFPQSxLQUFJLFFBQVMsT0FBTyxNQUFPLEVBQUU7QUFBQSxVQUMvRCxDQUFFO0FBQUEsUUFDSDtBQUVBLGVBQU8sRUFBRSxNQUFNLEtBQUssTUFBTSxPQUFPLElBQUksUUFBUyxPQUFPLE1BQU8sRUFBRTtBQUFBLE1BQy9ELENBQUUsRUFBRSxJQUFJO0FBQUEsSUFDVDtBQUFBLEVBQ0QsQ0FBRTtBQUVGLE1BQ0MsTUFBTSxRQUNOLFFBQVEsUUFDUixhQUFhLGlCQUNiLFdBQVcsOEJBR1gsaUJBQWlCLDZEQUNqQixhQUFhLGtCQUNiLFlBQVksU0FXWixhQUFhLENBQUMsR0FPZCxhQUFhLENBQUMsR0FHZCxXQUFXLEtBQUssT0FBUSxHQUFJLEdBRzVCLGVBQWUsV0FBVyxjQUFlLEdBQUk7QUFFOUMsZUFBYSxPQUFPLFNBQVM7QUFHN0IsV0FBUyw0QkFBNkIsV0FBWTtBQUdqRCxXQUFPLFNBQVUsb0JBQW9CLE1BQU87QUFFM0MsVUFBSyxPQUFPLHVCQUF1QixVQUFXO0FBQzdDLGVBQU87QUFDUCw2QkFBcUI7QUFBQSxNQUN0QjtBQUVBLFVBQUksVUFDSGYsS0FBSSxHQUNKLFlBQVksbUJBQW1CLFlBQVksRUFBRSxNQUFPLGFBQWMsS0FBSyxDQUFDO0FBRXpFLFVBQUssT0FBTyxTQUFTLFlBQWE7QUFHakMsZUFBVSxXQUFXLFVBQVdBLElBQUksR0FBTTtBQUd6QyxjQUFLLFNBQVUsQ0FBRSxNQUFNLEtBQU07QUFDNUIsdUJBQVcsU0FBUyxNQUFPLENBQUUsS0FBSztBQUNsQyxhQUFFLFVBQVcsUUFBUyxJQUFJLFVBQVcsUUFBUyxLQUFLLENBQUMsR0FBSSxRQUFTLElBQUs7QUFBQSxVQUd2RSxPQUFPO0FBQ04sYUFBRSxVQUFXLFFBQVMsSUFBSSxVQUFXLFFBQVMsS0FBSyxDQUFDLEdBQUksS0FBTSxJQUFLO0FBQUEsVUFDcEU7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBR0EsV0FBUyw4QkFBK0IsV0FBVyxTQUFTLGlCQUFpQixPQUFRO0FBRXBGLFFBQUksWUFBWSxDQUFDLEdBQ2hCLG1CQUFxQixjQUFjO0FBRXBDLGFBQVMsUUFBUyxVQUFXO0FBQzVCLFVBQUk7QUFDSixnQkFBVyxRQUFTLElBQUk7QUFDeEIsTUFBQUMsUUFBTyxLQUFNLFVBQVcsUUFBUyxLQUFLLENBQUMsR0FBRyxTQUFVLEdBQUcsb0JBQXFCO0FBQzNFLFlBQUksc0JBQXNCLG1CQUFvQixTQUFTLGlCQUFpQixLQUFNO0FBQzlFLFlBQUssT0FBTyx3QkFBd0IsWUFDbkMsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFXLG1CQUFvQixHQUFJO0FBRXpELGtCQUFRLFVBQVUsUUFBUyxtQkFBb0I7QUFDL0Msa0JBQVMsbUJBQW9CO0FBQzdCLGlCQUFPO0FBQUEsUUFDUixXQUFZLGtCQUFtQjtBQUM5QixpQkFBTyxFQUFHLFdBQVc7QUFBQSxRQUN0QjtBQUFBLE1BQ0QsQ0FBRTtBQUNGLGFBQU87QUFBQSxJQUNSO0FBRUEsV0FBTyxRQUFTLFFBQVEsVUFBVyxDQUFFLENBQUUsS0FBSyxDQUFDLFVBQVcsR0FBSSxLQUFLLFFBQVMsR0FBSTtBQUFBLEVBQy9FO0FBS0EsV0FBUyxXQUFZLFFBQVEsS0FBTTtBQUNsQyxRQUFJLEtBQUssTUFDUixjQUFjQSxRQUFPLGFBQWEsZUFBZSxDQUFDO0FBRW5ELFNBQU0sT0FBTyxLQUFNO0FBQ2xCLFVBQUssSUFBSyxHQUFJLE1BQU0sUUFBWTtBQUMvQixTQUFFLFlBQWEsR0FBSSxJQUFJLFNBQVcsU0FBVSxPQUFPLENBQUMsSUFBUyxHQUFJLElBQUksSUFBSyxHQUFJO0FBQUEsTUFDL0U7QUFBQSxJQUNEO0FBQ0EsUUFBSyxNQUFPO0FBQ1gsTUFBQUEsUUFBTyxPQUFRLE1BQU0sUUFBUSxJQUFLO0FBQUEsSUFDbkM7QUFFQSxXQUFPO0FBQUEsRUFDUjtBQU1BLFdBQVMsb0JBQXFCLEdBQUcsT0FBTyxXQUFZO0FBRW5ELFFBQUksSUFBSSxNQUFNLGVBQWUsZUFDNUIsV0FBVyxFQUFFLFVBQ2IsWUFBWSxFQUFFO0FBR2YsV0FBUSxVQUFXLENBQUUsTUFBTSxLQUFNO0FBQ2hDLGdCQUFVLE1BQU07QUFDaEIsVUFBSyxPQUFPLFFBQVk7QUFDdkIsYUFBSyxFQUFFLFlBQVksTUFBTSxrQkFBbUIsY0FBZTtBQUFBLE1BQzVEO0FBQUEsSUFDRDtBQUdBLFFBQUssSUFBSztBQUNULFdBQU0sUUFBUSxVQUFXO0FBQ3hCLFlBQUssU0FBVSxJQUFLLEtBQUssU0FBVSxJQUFLLEVBQUUsS0FBTSxFQUFHLEdBQUk7QUFDdEQsb0JBQVUsUUFBUyxJQUFLO0FBQ3hCO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBR0EsUUFBSyxVQUFXLENBQUUsS0FBSyxXQUFZO0FBQ2xDLHNCQUFnQixVQUFXLENBQUU7QUFBQSxJQUM5QixPQUFPO0FBR04sV0FBTSxRQUFRLFdBQVk7QUFDekIsWUFBSyxDQUFDLFVBQVcsQ0FBRSxLQUFLLEVBQUUsV0FBWSxPQUFPLE1BQU0sVUFBVyxDQUFFLENBQUUsR0FBSTtBQUNyRSwwQkFBZ0I7QUFDaEI7QUFBQSxRQUNEO0FBQ0EsWUFBSyxDQUFDLGVBQWdCO0FBQ3JCLDBCQUFnQjtBQUFBLFFBQ2pCO0FBQUEsTUFDRDtBQUdBLHNCQUFnQixpQkFBaUI7QUFBQSxJQUNsQztBQUtBLFFBQUssZUFBZ0I7QUFDcEIsVUFBSyxrQkFBa0IsVUFBVyxDQUFFLEdBQUk7QUFDdkMsa0JBQVUsUUFBUyxhQUFjO0FBQUEsTUFDbEM7QUFDQSxhQUFPLFVBQVcsYUFBYztBQUFBLElBQ2pDO0FBQUEsRUFDRDtBQUtBLFdBQVMsWUFBYSxHQUFHLFVBQVUsT0FBTyxXQUFZO0FBQ3JELFFBQUksT0FBTyxTQUFTLE1BQU0sS0FBSyxNQUM5QixhQUFhLENBQUMsR0FHZCxZQUFZLEVBQUUsVUFBVSxNQUFNO0FBRy9CLFFBQUssVUFBVyxDQUFFLEdBQUk7QUFDckIsV0FBTSxRQUFRLEVBQUUsWUFBYTtBQUM1QixtQkFBWSxLQUFLLFlBQVksQ0FBRSxJQUFJLEVBQUUsV0FBWSxJQUFLO0FBQUEsTUFDdkQ7QUFBQSxJQUNEO0FBRUEsY0FBVSxVQUFVLE1BQU07QUFHMUIsV0FBUSxTQUFVO0FBRWpCLFVBQUssRUFBRSxlQUFnQixPQUFRLEdBQUk7QUFDbEMsY0FBTyxFQUFFLGVBQWdCLE9BQVEsQ0FBRSxJQUFJO0FBQUEsTUFDeEM7QUFHQSxVQUFLLENBQUMsUUFBUSxhQUFhLEVBQUUsWUFBYTtBQUN6QyxtQkFBVyxFQUFFLFdBQVksVUFBVSxFQUFFLFFBQVM7QUFBQSxNQUMvQztBQUVBLGFBQU87QUFDUCxnQkFBVSxVQUFVLE1BQU07QUFFMUIsVUFBSyxTQUFVO0FBR2QsWUFBSyxZQUFZLEtBQU07QUFFdEIsb0JBQVU7QUFBQSxRQUdYLFdBQVksU0FBUyxPQUFPLFNBQVMsU0FBVTtBQUc5QyxpQkFBTyxXQUFZLE9BQU8sTUFBTSxPQUFRLEtBQUssV0FBWSxPQUFPLE9BQVE7QUFHeEUsY0FBSyxDQUFDLE1BQU87QUFDWixpQkFBTSxTQUFTLFlBQWE7QUFHM0Isb0JBQU0sTUFBTSxNQUFPLEdBQUk7QUFDdkIsa0JBQUssSUFBSyxDQUFFLE1BQU0sU0FBVTtBQUczQix1QkFBTyxXQUFZLE9BQU8sTUFBTSxJQUFLLENBQUUsQ0FBRSxLQUN4QyxXQUFZLE9BQU8sSUFBSyxDQUFFLENBQUU7QUFDN0Isb0JBQUssTUFBTztBQUdYLHNCQUFLLFNBQVMsTUFBTztBQUNwQiwyQkFBTyxXQUFZLEtBQU07QUFBQSxrQkFHMUIsV0FBWSxXQUFZLEtBQU0sTUFBTSxNQUFPO0FBQzFDLDhCQUFVLElBQUssQ0FBRTtBQUNqQiw4QkFBVSxRQUFTLElBQUssQ0FBRSxDQUFFO0FBQUEsa0JBQzdCO0FBQ0E7QUFBQSxnQkFDRDtBQUFBLGNBQ0Q7QUFBQSxZQUNEO0FBQUEsVUFDRDtBQUdBLGNBQUssU0FBUyxNQUFPO0FBR3BCLGdCQUFLLFFBQVEsRUFBRSxRQUFTO0FBQ3ZCLHlCQUFXLEtBQU0sUUFBUztBQUFBLFlBQzNCLE9BQU87QUFDTixrQkFBSTtBQUNILDJCQUFXLEtBQU0sUUFBUztBQUFBLGNBQzNCLFNBQVUsR0FBSTtBQUNiLHVCQUFPO0FBQUEsa0JBQ04sT0FBTztBQUFBLGtCQUNQLE9BQU8sT0FBTyxJQUFJLHdCQUF3QixPQUFPLFNBQVM7QUFBQSxnQkFDM0Q7QUFBQSxjQUNEO0FBQUEsWUFDRDtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFFQSxXQUFPLEVBQUUsT0FBTyxXQUFXLE1BQU0sU0FBUztBQUFBLEVBQzNDO0FBRUEsRUFBQUEsUUFBTyxPQUFRO0FBQUE7QUFBQSxJQUdkLFFBQVE7QUFBQTtBQUFBLElBR1IsY0FBYyxDQUFDO0FBQUEsSUFDZixNQUFNLENBQUM7QUFBQSxJQUVQLGNBQWM7QUFBQSxNQUNiLEtBQUssU0FBUztBQUFBLE1BQ2QsTUFBTTtBQUFBLE1BQ04sU0FBUyxlQUFlLEtBQU0sU0FBUyxRQUFTO0FBQUEsTUFDaEQsUUFBUTtBQUFBLE1BQ1IsYUFBYTtBQUFBLE1BQ2IsT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWNiLFNBQVM7QUFBQSxRQUNSLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxNQUNQO0FBQUEsTUFFQSxVQUFVO0FBQUEsUUFDVCxLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBLE1BRUEsZ0JBQWdCO0FBQUEsUUFDZixLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUDtBQUFBO0FBQUE7QUFBQSxNQUlBLFlBQVk7QUFBQTtBQUFBLFFBR1gsVUFBVTtBQUFBO0FBQUEsUUFHVixhQUFhO0FBQUE7QUFBQSxRQUdiLGFBQWEsS0FBSztBQUFBO0FBQUEsUUFHbEIsWUFBWUEsUUFBTztBQUFBLE1BQ3BCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1BLGFBQWE7QUFBQSxRQUNaLEtBQUs7QUFBQSxRQUNMLFNBQVM7QUFBQSxNQUNWO0FBQUEsSUFDRDtBQUFBO0FBQUE7QUFBQTtBQUFBLElBS0EsV0FBVyxTQUFVLFFBQVEsVUFBVztBQUN2QyxhQUFPO0FBQUE7QUFBQSxRQUdOLFdBQVksV0FBWSxRQUFRQSxRQUFPLFlBQWEsR0FBRyxRQUFTO0FBQUE7QUFBQTtBQUFBLFFBR2hFLFdBQVlBLFFBQU8sY0FBYyxNQUFPO0FBQUE7QUFBQSxJQUMxQztBQUFBLElBRUEsZUFBZSw0QkFBNkIsVUFBVztBQUFBLElBQ3ZELGVBQWUsNEJBQTZCLFVBQVc7QUFBQTtBQUFBLElBR3ZELE1BQU0sU0FBVSxLQUFLLFNBQVU7QUFHOUIsVUFBSyxPQUFPLFFBQVEsVUFBVztBQUM5QixrQkFBVTtBQUNWLGNBQU07QUFBQSxNQUNQO0FBR0EsZ0JBQVUsV0FBVyxDQUFDO0FBRXRCLFVBQUksV0FHSCxVQUdBLHVCQUNBLGlCQUdBLGNBR0EsV0FHQWUsWUFHQSxhQUdBaEIsSUFHQSxVQUdBLElBQUlDLFFBQU8sVUFBVyxDQUFDLEdBQUcsT0FBUSxHQUdsQyxrQkFBa0IsRUFBRSxXQUFXLEdBRy9CLHFCQUFxQixFQUFFLFlBQ3BCLGdCQUFnQixZQUFZLGdCQUFnQixVQUM5Q0EsUUFBUSxlQUFnQixJQUN4QkEsUUFBTyxPQUdSLFdBQVdBLFFBQU8sU0FBUyxHQUMzQixtQkFBbUJBLFFBQU8sVUFBVyxhQUFjLEdBR25ELGFBQWEsRUFBRSxjQUFjLENBQUMsR0FHOUIsaUJBQWlCLENBQUMsR0FDbEIsc0JBQXNCLENBQUMsR0FHdkIsV0FBVyxZQUdYLFFBQVE7QUFBQSxRQUNQLFlBQVk7QUFBQTtBQUFBLFFBR1osbUJBQW1CLFNBQVUsS0FBTTtBQUNsQyxjQUFJO0FBQ0osY0FBS2UsWUFBWTtBQUNoQixnQkFBSyxDQUFDLGlCQUFrQjtBQUN2QixnQ0FBa0IsQ0FBQztBQUNuQixxQkFBVSxRQUFRLFNBQVMsS0FBTSxxQkFBc0IsR0FBTTtBQU81RCxnQ0FBaUIsTUFBTyxDQUFFLEVBQUUsWUFBWSxJQUFJLEdBQUksS0FDN0MsZ0JBQWlCLE1BQU8sQ0FBRSxFQUFFLFlBQVksSUFBSSxHQUFJLEtBQUssQ0FBQyxHQUN0RCxPQUFRLE1BQU8sQ0FBRSxDQUFFO0FBQUEsY0FDdkI7QUFBQSxZQUNEO0FBQ0Esb0JBQVEsZ0JBQWlCLElBQUksWUFBWSxJQUFJLEdBQUk7QUFBQSxVQUNsRDtBQUNBLGlCQUFPLFNBQVMsT0FBTyxPQUFPLE1BQU0sS0FBTSxJQUFLO0FBQUEsUUFDaEQ7QUFBQTtBQUFBLFFBR0EsdUJBQXVCLFdBQVc7QUFDakMsaUJBQU9BLGFBQVksd0JBQXdCO0FBQUEsUUFDNUM7QUFBQTtBQUFBLFFBR0Esa0JBQWtCLFNBQVUsTUFBTSxPQUFRO0FBQ3pDLGNBQUtBLGNBQWEsTUFBTztBQUN4QixtQkFBTyxvQkFBcUIsS0FBSyxZQUFZLENBQUUsSUFDOUMsb0JBQXFCLEtBQUssWUFBWSxDQUFFLEtBQUs7QUFDOUMsMkJBQWdCLElBQUssSUFBSTtBQUFBLFVBQzFCO0FBQ0EsaUJBQU87QUFBQSxRQUNSO0FBQUE7QUFBQSxRQUdBLGtCQUFrQixTQUFVLE1BQU87QUFDbEMsY0FBS0EsY0FBYSxNQUFPO0FBQ3hCLGNBQUUsV0FBVztBQUFBLFVBQ2Q7QUFDQSxpQkFBTztBQUFBLFFBQ1I7QUFBQTtBQUFBLFFBR0EsWUFBWSxTQUFVLEtBQU07QUFDM0IsY0FBSTtBQUNKLGNBQUssS0FBTTtBQUNWLGdCQUFLQSxZQUFZO0FBR2hCLG9CQUFNLE9BQVEsSUFBSyxNQUFNLE1BQU8sQ0FBRTtBQUFBLFlBQ25DLE9BQU87QUFHTixtQkFBTSxRQUFRLEtBQU07QUFDbkIsMkJBQVksSUFBSyxJQUFJLENBQUUsV0FBWSxJQUFLLEdBQUcsSUFBSyxJQUFLLENBQUU7QUFBQSxjQUN4RDtBQUFBLFlBQ0Q7QUFBQSxVQUNEO0FBQ0EsaUJBQU87QUFBQSxRQUNSO0FBQUE7QUFBQSxRQUdBLE9BQU8sU0FBVSxZQUFhO0FBQzdCLGNBQUksWUFBWSxjQUFjO0FBQzlCLGNBQUssV0FBWTtBQUNoQixzQkFBVSxNQUFPLFNBQVU7QUFBQSxVQUM1QjtBQUNBLFVBQUFDLE1BQU0sR0FBRyxTQUFVO0FBQ25CLGlCQUFPO0FBQUEsUUFDUjtBQUFBLE1BQ0Q7QUFHRCxlQUFTLFFBQVMsS0FBTTtBQUt4QixRQUFFLFFBQVUsT0FBTyxFQUFFLE9BQU8sU0FBUyxRQUFTLElBQzVDLFFBQVMsV0FBVyxTQUFTLFdBQVcsSUFBSztBQUcvQyxRQUFFLE9BQU8sUUFBUSxVQUFVLFFBQVEsUUFBUSxFQUFFLFVBQVUsRUFBRTtBQUd6RCxRQUFFLGFBQWMsRUFBRSxZQUFZLEtBQU0sWUFBWSxFQUFFLE1BQU8sYUFBYyxLQUFLLENBQUUsRUFBRztBQUdqRixVQUFLLEVBQUUsZUFBZSxNQUFPO0FBQzVCLG9CQUFZLFdBQVcsY0FBZSxHQUFJO0FBSzFDLFlBQUk7QUFDSCxvQkFBVSxPQUFPLEVBQUU7QUFJbkIsb0JBQVUsT0FBTyxVQUFVO0FBQzNCLFlBQUUsY0FBYyxhQUFhLFdBQVcsT0FBTyxhQUFhLFNBQzNELFVBQVUsV0FBVyxPQUFPLFVBQVU7QUFBQSxRQUN4QyxTQUFVLEdBQUk7QUFJYixZQUFFLGNBQWM7QUFBQSxRQUNqQjtBQUFBLE1BQ0Q7QUFHQSxvQ0FBK0IsWUFBWSxHQUFHLFNBQVMsS0FBTTtBQUc3RCxVQUFLLEVBQUUsUUFBUSxFQUFFLGVBQWUsT0FBTyxFQUFFLFNBQVMsVUFBVztBQUM1RCxVQUFFLE9BQU9oQixRQUFPLE1BQU8sRUFBRSxNQUFNLEVBQUUsV0FBWTtBQUFBLE1BQzlDO0FBR0EsVUFBS2UsWUFBWTtBQUNoQixlQUFPO0FBQUEsTUFDUjtBQUlBLG9CQUFjZixRQUFPLFNBQVMsRUFBRTtBQUdoQyxVQUFLLGVBQWVBLFFBQU8sYUFBYSxHQUFJO0FBQzNDLFFBQUFBLFFBQU8sTUFBTSxRQUFTLFdBQVk7QUFBQSxNQUNuQztBQUdBLFFBQUUsT0FBTyxFQUFFLEtBQUssWUFBWTtBQUc1QixRQUFFLGFBQWEsQ0FBQyxXQUFXLEtBQU0sRUFBRSxJQUFLO0FBS3hDLGlCQUFXLEVBQUUsSUFBSSxRQUFTLE9BQU8sRUFBRztBQUdwQyxVQUFLLENBQUMsRUFBRSxZQUFhO0FBR3BCLG1CQUFXLEVBQUUsSUFBSSxNQUFPLFNBQVMsTUFBTztBQUd4QyxZQUFLLEVBQUUsU0FBVSxFQUFFLGVBQWUsT0FBTyxFQUFFLFNBQVMsV0FBYTtBQUNoRSx1QkFBYyxPQUFPLEtBQU0sUUFBUyxJQUFJLE1BQU0sT0FBUSxFQUFFO0FBR3hELGlCQUFPLEVBQUU7QUFBQSxRQUNWO0FBR0EsWUFBSyxFQUFFLFVBQVUsT0FBUTtBQUN4QixxQkFBVyxTQUFTLFFBQVMsWUFBWSxJQUFLO0FBQzlDLHNCQUFhLE9BQU8sS0FBTSxRQUFTLElBQUksTUFBTSxPQUFRLE9BQ2xELE1BQU0sU0FBVztBQUFBLFFBQ3JCO0FBR0EsVUFBRSxNQUFNLFdBQVc7QUFBQSxNQUdwQixXQUFZLEVBQUUsUUFBUSxFQUFFLGdCQUNyQixFQUFFLGVBQWUsSUFBSyxRQUFTLG1DQUFvQyxNQUFNLEdBQUk7QUFDL0UsVUFBRSxPQUFPLEVBQUUsS0FBSyxRQUFTLEtBQUssR0FBSTtBQUFBLE1BQ25DO0FBR0EsVUFBSyxFQUFFLFlBQWE7QUFDbkIsWUFBS0EsUUFBTyxhQUFjLFFBQVMsR0FBSTtBQUN0QyxnQkFBTSxpQkFBa0IscUJBQXFCQSxRQUFPLGFBQWMsUUFBUyxDQUFFO0FBQUEsUUFDOUU7QUFDQSxZQUFLQSxRQUFPLEtBQU0sUUFBUyxHQUFJO0FBQzlCLGdCQUFNLGlCQUFrQixpQkFBaUJBLFFBQU8sS0FBTSxRQUFTLENBQUU7QUFBQSxRQUNsRTtBQUFBLE1BQ0Q7QUFHQSxVQUFLLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsU0FBUyxRQUFRLGFBQWM7QUFDL0UsY0FBTSxpQkFBa0IsZ0JBQWdCLEVBQUUsV0FBWTtBQUFBLE1BQ3ZEO0FBR0EsWUFBTTtBQUFBLFFBQ0w7QUFBQSxRQUNBLEVBQUUsVUFBVyxDQUFFLEtBQUssRUFBRSxRQUFTLEVBQUUsVUFBVyxDQUFFLENBQUUsSUFDL0MsRUFBRSxRQUFTLEVBQUUsVUFBVyxDQUFFLENBQUUsS0FDekIsRUFBRSxVQUFXLENBQUUsTUFBTSxNQUFNLE9BQU8sV0FBVyxhQUFhLE1BQzdELEVBQUUsUUFBUyxHQUFJO0FBQUEsTUFDakI7QUFHQSxXQUFNRCxNQUFLLEVBQUUsU0FBVTtBQUN0QixjQUFNLGlCQUFrQkEsSUFBRyxFQUFFLFFBQVNBLEVBQUUsQ0FBRTtBQUFBLE1BQzNDO0FBR0EsVUFBSyxFQUFFLGVBQ0osRUFBRSxXQUFXLEtBQU0saUJBQWlCLE9BQU8sQ0FBRSxNQUFNLFNBQVNnQixhQUFjO0FBRzVFLGVBQU8sTUFBTSxNQUFNO0FBQUEsTUFDcEI7QUFHQSxpQkFBVztBQUdYLHVCQUFpQixJQUFLLEVBQUUsUUFBUztBQUNqQyxZQUFNLEtBQU0sRUFBRSxPQUFRO0FBQ3RCLFlBQU0sS0FBTSxFQUFFLEtBQU07QUFHcEIsa0JBQVksOEJBQStCLFlBQVksR0FBRyxTQUFTLEtBQU07QUFHekUsVUFBSyxDQUFDLFdBQVk7QUFDakIsUUFBQUMsTUFBTSxJQUFJLGNBQWU7QUFBQSxNQUMxQixPQUFPO0FBQ04sY0FBTSxhQUFhO0FBR25CLFlBQUssYUFBYztBQUNsQiw2QkFBbUIsUUFBUyxZQUFZLENBQUUsT0FBTyxDQUFFLENBQUU7QUFBQSxRQUN0RDtBQUdBLFlBQUtELFlBQVk7QUFDaEIsaUJBQU87QUFBQSxRQUNSO0FBR0EsWUFBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEdBQUk7QUFDL0IseUJBQWVqQixRQUFPLFdBQVksV0FBVztBQUM1QyxrQkFBTSxNQUFPLFNBQVU7QUFBQSxVQUN4QixHQUFHLEVBQUUsT0FBUTtBQUFBLFFBQ2Q7QUFFQSxZQUFJO0FBQ0gsVUFBQWlCLGFBQVk7QUFDWixvQkFBVSxLQUFNLGdCQUFnQkMsS0FBSztBQUFBLFFBQ3RDLFNBQVUsR0FBSTtBQUdiLGNBQUtELFlBQVk7QUFDaEIsa0JBQU07QUFBQSxVQUNQO0FBR0EsVUFBQUMsTUFBTSxJQUFJLENBQUU7QUFBQSxRQUNiO0FBQUEsTUFDRDtBQUdBLGVBQVNBLE1BQU0sUUFBUSxrQkFBa0IsV0FBVyxTQUFVO0FBQzdELFlBQUksV0FBVyxTQUFTLE9BQU8sVUFBVSxVQUN4QyxhQUFhO0FBR2QsWUFBS0QsWUFBWTtBQUNoQjtBQUFBLFFBQ0Q7QUFFQSxRQUFBQSxhQUFZO0FBR1osWUFBSyxjQUFlO0FBQ25CLFVBQUFqQixRQUFPLGFBQWMsWUFBYTtBQUFBLFFBQ25DO0FBSUEsb0JBQVk7QUFHWixnQ0FBd0IsV0FBVztBQUduQyxjQUFNLGFBQWEsU0FBUyxJQUFJLElBQUk7QUFHcEMsb0JBQVksVUFBVSxPQUFPLFNBQVMsT0FBTyxXQUFXO0FBR3hELFlBQUssV0FBWTtBQUNoQixxQkFBVyxvQkFBcUIsR0FBRyxPQUFPLFNBQVU7QUFBQSxRQUNyRDtBQUdBLFlBQUssQ0FBQyxhQUNMRSxRQUFPLFFBQVMsVUFBVSxFQUFFLFNBQVUsSUFBSSxNQUMxQ0EsUUFBTyxRQUFTLFFBQVEsRUFBRSxTQUFVLElBQUksR0FBSTtBQUM1QyxZQUFFLFdBQVksYUFBYyxJQUFJLFdBQVc7QUFBQSxVQUFDO0FBQUEsUUFDN0M7QUFHQSxtQkFBVyxZQUFhLEdBQUcsVUFBVSxPQUFPLFNBQVU7QUFHdEQsWUFBSyxXQUFZO0FBR2hCLGNBQUssRUFBRSxZQUFhO0FBQ25CLHVCQUFXLE1BQU0sa0JBQW1CLGVBQWdCO0FBQ3BELGdCQUFLLFVBQVc7QUFDZixjQUFBQSxRQUFPLGFBQWMsUUFBUyxJQUFJO0FBQUEsWUFDbkM7QUFDQSx1QkFBVyxNQUFNLGtCQUFtQixNQUFPO0FBQzNDLGdCQUFLLFVBQVc7QUFDZixjQUFBQSxRQUFPLEtBQU0sUUFBUyxJQUFJO0FBQUEsWUFDM0I7QUFBQSxVQUNEO0FBR0EsY0FBSyxXQUFXLE9BQU8sRUFBRSxTQUFTLFFBQVM7QUFDMUMseUJBQWE7QUFBQSxVQUdkLFdBQVksV0FBVyxLQUFNO0FBQzVCLHlCQUFhO0FBQUEsVUFHZCxPQUFPO0FBQ04seUJBQWEsU0FBUztBQUN0QixzQkFBVSxTQUFTO0FBQ25CLG9CQUFRLFNBQVM7QUFDakIsd0JBQVksQ0FBQztBQUFBLFVBQ2Q7QUFBQSxRQUNELE9BQU87QUFHTixrQkFBUTtBQUNSLGNBQUssVUFBVSxDQUFDLFlBQWE7QUFDNUIseUJBQWE7QUFDYixnQkFBSyxTQUFTLEdBQUk7QUFDakIsdUJBQVM7QUFBQSxZQUNWO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFHQSxjQUFNLFNBQVM7QUFDZixjQUFNLGNBQWUsb0JBQW9CLGNBQWU7QUFHeEQsWUFBSyxXQUFZO0FBQ2hCLG1CQUFTLFlBQWEsaUJBQWlCLENBQUUsU0FBUyxZQUFZLEtBQU0sQ0FBRTtBQUFBLFFBQ3ZFLE9BQU87QUFDTixtQkFBUyxXQUFZLGlCQUFpQixDQUFFLE9BQU8sWUFBWSxLQUFNLENBQUU7QUFBQSxRQUNwRTtBQUdBLGNBQU0sV0FBWSxVQUFXO0FBQzdCLHFCQUFhO0FBRWIsWUFBSyxhQUFjO0FBQ2xCLDZCQUFtQjtBQUFBLFlBQVMsWUFBWSxnQkFBZ0I7QUFBQSxZQUN2RCxDQUFFLE9BQU8sR0FBRyxZQUFZLFVBQVUsS0FBTTtBQUFBLFVBQUU7QUFBQSxRQUM1QztBQUdBLHlCQUFpQixTQUFVLGlCQUFpQixDQUFFLE9BQU8sVUFBVyxDQUFFO0FBRWxFLFlBQUssYUFBYztBQUNsQiw2QkFBbUIsUUFBUyxnQkFBZ0IsQ0FBRSxPQUFPLENBQUUsQ0FBRTtBQUd6RCxjQUFLLENBQUcsRUFBRUEsUUFBTyxRQUFXO0FBQzNCLFlBQUFBLFFBQU8sTUFBTSxRQUFTLFVBQVc7QUFBQSxVQUNsQztBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBRUEsYUFBTztBQUFBLElBQ1I7QUFBQSxJQUVBLFNBQVMsU0FBVSxLQUFLLE1BQU0sVUFBVztBQUN4QyxhQUFPQSxRQUFPLElBQUssS0FBSyxNQUFNLFVBQVUsTUFBTztBQUFBLElBQ2hEO0FBQUEsSUFFQSxXQUFXLFNBQVUsS0FBSyxVQUFXO0FBQ3BDLGFBQU9BLFFBQU8sSUFBSyxLQUFLLFFBQVcsVUFBVSxRQUFTO0FBQUEsSUFDdkQ7QUFBQSxFQUNELENBQUU7QUFFRixFQUFBQSxRQUFPLEtBQU0sQ0FBRSxPQUFPLE1BQU8sR0FBRyxTQUFVLElBQUksUUFBUztBQUN0RCxJQUFBQSxRQUFRLE1BQU8sSUFBSSxTQUFVLEtBQUssTUFBTSxVQUFVLE1BQU87QUFJeEQsVUFBSyxPQUFPLFNBQVMsY0FBYyxTQUFTLE1BQU87QUFDbEQsZUFBTyxRQUFRO0FBQ2YsbUJBQVc7QUFDWCxlQUFPO0FBQUEsTUFDUjtBQUdBLGFBQU9BLFFBQU8sS0FBTUEsUUFBTyxPQUFRO0FBQUEsUUFDbEM7QUFBQSxRQUNBLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxRQUNWO0FBQUEsUUFDQSxTQUFTO0FBQUEsTUFDVixHQUFHQSxRQUFPLGNBQWUsR0FBSSxLQUFLLEdBQUksQ0FBRTtBQUFBLElBQ3pDO0FBQUEsRUFDRCxDQUFFO0FBRUYsRUFBQUEsUUFBTyxjQUFlLFNBQVUsR0FBSTtBQUNuQyxRQUFJRDtBQUNKLFNBQU1BLE1BQUssRUFBRSxTQUFVO0FBQ3RCLFVBQUtBLEdBQUUsWUFBWSxNQUFNLGdCQUFpQjtBQUN6QyxVQUFFLGNBQWMsRUFBRSxRQUFTQSxFQUFFLEtBQUs7QUFBQSxNQUNuQztBQUFBLElBQ0Q7QUFBQSxFQUNELENBQUU7QUFFRixFQUFBQyxRQUFPLFdBQVcsU0FBVSxLQUFLLFNBQVMsS0FBTTtBQUMvQyxXQUFPQSxRQUFPLEtBQU07QUFBQSxNQUNuQjtBQUFBO0FBQUEsTUFHQSxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixhQUFhLFFBQVEsY0FBYyxFQUFFLGVBQWUsUUFBUSxZQUFZLElBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUs1RSxZQUFZO0FBQUEsUUFDWCxlQUFlLFdBQVc7QUFBQSxRQUFDO0FBQUEsTUFDNUI7QUFBQSxNQUNBLFlBQVksU0FBVSxVQUFXO0FBQ2hDLFFBQUFBLFFBQU8sV0FBWSxVQUFVLFNBQVMsR0FBSTtBQUFBLE1BQzNDO0FBQUEsSUFDRCxDQUFFO0FBQUEsRUFDSDtBQUVBLEVBQUFBLFFBQU8sR0FBRyxPQUFRO0FBQUEsSUFDakIsU0FBUyxTQUFVLE1BQU87QUFDekIsVUFBSTtBQUVKLFVBQUssS0FBTSxDQUFFLEdBQUk7QUFDaEIsWUFBSyxPQUFPLFNBQVMsWUFBYTtBQUNqQyxpQkFBTyxLQUFLLEtBQU0sS0FBTSxDQUFFLENBQUU7QUFBQSxRQUM3QjtBQUdBLGVBQU9BLFFBQVEsTUFBTSxLQUFNLENBQUUsRUFBRSxhQUFjLEVBQUUsR0FBSSxDQUFFLEVBQUUsTUFBTyxJQUFLO0FBRW5FLFlBQUssS0FBTSxDQUFFLEVBQUUsWUFBYTtBQUMzQixlQUFLLGFBQWMsS0FBTSxDQUFFLENBQUU7QUFBQSxRQUM5QjtBQUVBLGFBQUssSUFBSyxXQUFXO0FBQ3BCLGNBQUksT0FBTztBQUVYLGlCQUFRLEtBQUssbUJBQW9CO0FBQ2hDLG1CQUFPLEtBQUs7QUFBQSxVQUNiO0FBRUEsaUJBQU87QUFBQSxRQUNSLENBQUUsRUFBRSxPQUFRLElBQUs7QUFBQSxNQUNsQjtBQUVBLGFBQU87QUFBQSxJQUNSO0FBQUEsSUFFQSxXQUFXLFNBQVUsTUFBTztBQUMzQixVQUFLLE9BQU8sU0FBUyxZQUFhO0FBQ2pDLGVBQU8sS0FBSyxLQUFNLFNBQVVELElBQUk7QUFDL0IsVUFBQUMsUUFBUSxJQUFLLEVBQUUsVUFBVyxLQUFLLEtBQU0sTUFBTUQsRUFBRSxDQUFFO0FBQUEsUUFDaEQsQ0FBRTtBQUFBLE1BQ0g7QUFFQSxhQUFPLEtBQUssS0FBTSxXQUFXO0FBQzVCLFlBQUksT0FBT0MsUUFBUSxJQUFLLEdBQ3ZCLFdBQVcsS0FBSyxTQUFTO0FBRTFCLFlBQUssU0FBUyxRQUFTO0FBQ3RCLG1CQUFTLFFBQVMsSUFBSztBQUFBLFFBRXhCLE9BQU87QUFDTixlQUFLLE9BQVEsSUFBSztBQUFBLFFBQ25CO0FBQUEsTUFDRCxDQUFFO0FBQUEsSUFDSDtBQUFBLElBRUEsTUFBTSxTQUFVLE1BQU87QUFDdEIsVUFBSSxpQkFBaUIsT0FBTyxTQUFTO0FBRXJDLGFBQU8sS0FBSyxLQUFNLFNBQVVELElBQUk7QUFDL0IsUUFBQUMsUUFBUSxJQUFLLEVBQUUsUUFBUyxpQkFBaUIsS0FBSyxLQUFNLE1BQU1ELEVBQUUsSUFBSSxJQUFLO0FBQUEsTUFDdEUsQ0FBRTtBQUFBLElBQ0g7QUFBQSxJQUVBLFFBQVEsU0FBVSxVQUFXO0FBQzVCLFdBQUssT0FBUSxRQUFTLEVBQUUsSUFBSyxNQUFPLEVBQUUsS0FBTSxXQUFXO0FBQ3RELFFBQUFDLFFBQVEsSUFBSyxFQUFFLFlBQWEsS0FBSyxVQUFXO0FBQUEsTUFDN0MsQ0FBRTtBQUNGLGFBQU87QUFBQSxJQUNSO0FBQUEsRUFDRCxDQUFFO0FBRUYsRUFBQUEsUUFBTyxLQUFLLFFBQVEsU0FBUyxTQUFVLE1BQU87QUFDN0MsV0FBTyxDQUFDQSxRQUFPLEtBQUssUUFBUSxRQUFTLElBQUs7QUFBQSxFQUMzQztBQUNBLEVBQUFBLFFBQU8sS0FBSyxRQUFRLFVBQVUsU0FBVSxNQUFPO0FBQzlDLFdBQU8sQ0FBQyxFQUFHLEtBQUssZUFBZSxLQUFLLGdCQUFnQixLQUFLLGVBQWUsRUFBRTtBQUFBLEVBQzNFO0FBRUEsRUFBQUEsUUFBTyxhQUFhLE1BQU0sV0FBVztBQUNwQyxXQUFPLElBQUlGLFFBQU8sZUFBZTtBQUFBLEVBQ2xDO0FBRUEsTUFBSSxtQkFBbUI7QUFBQTtBQUFBLElBR3RCLEdBQUc7QUFBQSxFQUNKO0FBRUEsRUFBQUUsUUFBTyxjQUFlLFNBQVUsU0FBVTtBQUN6QyxRQUFJO0FBRUosV0FBTztBQUFBLE1BQ04sTUFBTSxTQUFVLFNBQVMsVUFBVztBQUNuQyxZQUFJRCxJQUNILE1BQU0sUUFBUSxJQUFJO0FBRW5CLFlBQUk7QUFBQSxVQUNILFFBQVE7QUFBQSxVQUNSLFFBQVE7QUFBQSxVQUNSLFFBQVE7QUFBQSxVQUNSLFFBQVE7QUFBQSxVQUNSLFFBQVE7QUFBQSxRQUNUO0FBR0EsWUFBSyxRQUFRLFdBQVk7QUFDeEIsZUFBTUEsTUFBSyxRQUFRLFdBQVk7QUFDOUIsZ0JBQUtBLEVBQUUsSUFBSSxRQUFRLFVBQVdBLEVBQUU7QUFBQSxVQUNqQztBQUFBLFFBQ0Q7QUFHQSxZQUFLLFFBQVEsWUFBWSxJQUFJLGtCQUFtQjtBQUMvQyxjQUFJLGlCQUFrQixRQUFRLFFBQVM7QUFBQSxRQUN4QztBQU9BLFlBQUssQ0FBQyxRQUFRLGVBQWUsQ0FBQyxRQUFTLGtCQUFtQixHQUFJO0FBQzdELGtCQUFTLGtCQUFtQixJQUFJO0FBQUEsUUFDakM7QUFHQSxhQUFNQSxNQUFLLFNBQVU7QUFDcEIsY0FBSSxpQkFBa0JBLElBQUcsUUFBU0EsRUFBRSxDQUFFO0FBQUEsUUFDdkM7QUFHQSxtQkFBVyxTQUFVLE1BQU87QUFDM0IsaUJBQU8sV0FBVztBQUNqQixnQkFBSyxVQUFXO0FBQ2YseUJBQVcsSUFBSSxTQUFTLElBQUksVUFBVSxJQUFJLFVBQVUsSUFBSSxZQUFZO0FBRXBFLGtCQUFLLFNBQVMsU0FBVTtBQUN2QixvQkFBSSxNQUFNO0FBQUEsY0FDWCxXQUFZLFNBQVMsU0FBVTtBQUM5QjtBQUFBO0FBQUEsa0JBR0MsSUFBSTtBQUFBLGtCQUNKLElBQUk7QUFBQSxnQkFDTDtBQUFBLGNBQ0QsT0FBTztBQUNOO0FBQUEsa0JBQ0MsaUJBQWtCLElBQUksTUFBTyxLQUFLLElBQUk7QUFBQSxrQkFDdEMsSUFBSTtBQUFBO0FBQUEsbUJBR0YsSUFBSSxnQkFBZ0IsWUFBYSxTQUNsQyxFQUFFLE1BQU0sSUFBSSxhQUFhLElBQ3pCLEVBQUUsUUFBUSxJQUFJLFNBQVM7QUFBQSxrQkFDeEIsSUFBSSxzQkFBc0I7QUFBQSxnQkFDM0I7QUFBQSxjQUNEO0FBQUEsWUFDRDtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBR0EsWUFBSSxTQUFTLFNBQVM7QUFDdEIsWUFBSSxVQUFVLElBQUksVUFBVSxJQUFJLFlBQVksU0FBVSxPQUFRO0FBRzlELG1CQUFXLFNBQVUsT0FBUTtBQUU3QixZQUFJO0FBR0gsY0FBSSxLQUFNLFFBQVEsY0FBYyxRQUFRLFFBQVEsSUFBSztBQUFBLFFBQ3RELFNBQVUsR0FBSTtBQUdiLGNBQUssVUFBVztBQUNmLGtCQUFNO0FBQUEsVUFDUDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsTUFFQSxPQUFPLFdBQVc7QUFDakIsWUFBSyxVQUFXO0FBQ2YsbUJBQVM7QUFBQSxRQUNWO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNELENBQUU7QUFFRixXQUFTLGdCQUFpQixHQUFJO0FBTzdCLFdBQU8sRUFBRSxlQUNSLENBQUMsRUFBRSxZQUVGLEVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVNBLEVBQUUsU0FBU0MsUUFBTyxRQUFTLFFBQVEsRUFBRSxTQUFVLElBQUk7QUFBQSxFQUd4RDtBQUlBLEVBQUFBLFFBQU8sVUFBVztBQUFBLElBQ2pCLFNBQVM7QUFBQSxNQUNSLFFBQVE7QUFBQSxJQUVUO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDWCxlQUFlLFNBQVUsTUFBTztBQUMvQixRQUFBQSxRQUFPLFdBQVksSUFBSztBQUN4QixlQUFPO0FBQUEsTUFDUjtBQUFBLElBQ0Q7QUFBQSxFQUNELENBQUU7QUFHRixFQUFBQSxRQUFPLGNBQWUsVUFBVSxTQUFVLEdBQUk7QUFDN0MsUUFBSyxFQUFFLFVBQVUsUUFBWTtBQUM1QixRQUFFLFFBQVE7QUFBQSxJQUNYO0FBSUEsUUFBSyxnQkFBaUIsQ0FBRSxHQUFJO0FBQzNCLFFBQUUsT0FBTztBQUFBLElBQ1Y7QUFBQSxFQUNELENBQUU7QUFHRixFQUFBQSxRQUFPLGNBQWUsVUFBVSxTQUFVLEdBQUk7QUFDN0MsUUFBSyxnQkFBaUIsQ0FBRSxHQUFJO0FBQzNCLFVBQUksUUFBUTtBQUNaLGFBQU87QUFBQSxRQUNOLE1BQU0sU0FBVSxHQUFHLFVBQVc7QUFDN0IsbUJBQVNBLFFBQVEsVUFBVyxFQUMxQixLQUFNLEVBQUUsZUFBZSxDQUFDLENBQUUsRUFDMUIsS0FBTSxFQUFFLFNBQVMsRUFBRSxlQUFlLEtBQUssRUFBRSxJQUFJLENBQUUsRUFDL0MsR0FBSSxjQUFjLFdBQVcsU0FBVSxLQUFNO0FBQzdDLG1CQUFPLE9BQU87QUFDZCx1QkFBVztBQUNYLGdCQUFLLEtBQU07QUFDVix1QkFBVSxJQUFJLFNBQVMsVUFBVSxNQUFNLEtBQUssSUFBSSxJQUFLO0FBQUEsWUFDdEQ7QUFBQSxVQUNELENBQUU7QUFHSCxxQkFBVyxLQUFLLFlBQWEsT0FBUSxDQUFFLENBQUU7QUFBQSxRQUMxQztBQUFBLFFBQ0EsT0FBTyxXQUFXO0FBQ2pCLGNBQUssVUFBVztBQUNmLHFCQUFTO0FBQUEsVUFDVjtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0QsQ0FBRTtBQUVGLE1BQUksZUFBZSxDQUFDLEdBQ25CLFNBQVM7QUFHVixFQUFBQSxRQUFPLFVBQVc7QUFBQSxJQUNqQixPQUFPO0FBQUEsSUFDUCxlQUFlLFdBQVc7QUFDekIsVUFBSSxXQUFXLGFBQWEsSUFBSSxLQUFPQSxRQUFPLFVBQVUsTUFBUSxNQUFNO0FBQ3RFLFdBQU0sUUFBUyxJQUFJO0FBQ25CLGFBQU87QUFBQSxJQUNSO0FBQUEsRUFDRCxDQUFFO0FBR0YsRUFBQUEsUUFBTyxjQUFlLFNBQVMsU0FBVSxHQUFHLGtCQUFrQixPQUFRO0FBRXJFLFFBQUksY0FBYyxhQUFhLG1CQUM5QixXQUFXLEVBQUUsVUFBVSxVQUFXLE9BQU8sS0FBTSxFQUFFLEdBQUksSUFDcEQsUUFDQSxPQUFPLEVBQUUsU0FBUyxhQUNmLEVBQUUsZUFBZSxJQUNqQixRQUFTLG1DQUFvQyxNQUFNLEtBQ3JELE9BQU8sS0FBTSxFQUFFLElBQUssS0FBSztBQUk1QixtQkFBZSxFQUFFLGdCQUFnQixPQUFPLEVBQUUsa0JBQWtCLGFBQzNELEVBQUUsY0FBYyxJQUNoQixFQUFFO0FBR0gsUUFBSyxVQUFXO0FBQ2YsUUFBRyxRQUFTLElBQUksRUFBRyxRQUFTLEVBQUUsUUFBUyxRQUFRLE9BQU8sWUFBYTtBQUFBLElBQ3BFLFdBQVksRUFBRSxVQUFVLE9BQVE7QUFDL0IsUUFBRSxRQUFTLE9BQU8sS0FBTSxFQUFFLEdBQUksSUFBSSxNQUFNLE9BQVEsRUFBRSxRQUFRLE1BQU07QUFBQSxJQUNqRTtBQUdBLE1BQUUsV0FBWSxhQUFjLElBQUksV0FBVztBQUMxQyxVQUFLLENBQUMsbUJBQW9CO0FBQ3pCLFFBQUFBLFFBQU8sTUFBTyxlQUFlLGlCQUFrQjtBQUFBLE1BQ2hEO0FBQ0EsYUFBTyxrQkFBbUIsQ0FBRTtBQUFBLElBQzdCO0FBR0EsTUFBRSxVQUFXLENBQUUsSUFBSTtBQUduQixrQkFBY0YsUUFBUSxZQUFhO0FBQ25DLElBQUFBLFFBQVEsWUFBYSxJQUFJLFdBQVc7QUFDbkMsMEJBQW9CO0FBQUEsSUFDckI7QUFHQSxVQUFNLE9BQVEsV0FBVztBQUd4QixVQUFLLGdCQUFnQixRQUFZO0FBQ2hDLFFBQUFFLFFBQVFGLE9BQU8sRUFBRSxXQUFZLFlBQWE7QUFBQSxNQUczQyxPQUFPO0FBQ04sUUFBQUEsUUFBUSxZQUFhLElBQUk7QUFBQSxNQUMxQjtBQUdBLFVBQUssRUFBRyxZQUFhLEdBQUk7QUFHeEIsVUFBRSxnQkFBZ0IsaUJBQWlCO0FBR25DLHFCQUFhLEtBQU0sWUFBYTtBQUFBLE1BQ2pDO0FBR0EsVUFBSyxxQkFBcUIsT0FBTyxnQkFBZ0IsWUFBYTtBQUM3RCxvQkFBYSxrQkFBbUIsQ0FBRSxDQUFFO0FBQUEsTUFDckM7QUFFQSwwQkFBb0IsY0FBYztBQUFBLElBQ25DLENBQUU7QUFHRixXQUFPO0FBQUEsRUFDUixDQUFFO0FBRUYsRUFBQUUsUUFBTyxjQUFlLFNBQVUsR0FBRyxhQUFjO0FBR2hELFFBQUssT0FBTyxFQUFFLFNBQVMsWUFBWSxDQUFDQSxRQUFPLGNBQWUsRUFBRSxJQUFLLEtBQy9ELENBQUMsTUFBTSxRQUFTLEVBQUUsSUFBSztBQUFBLElBR3ZCLEVBQUcsaUJBQWlCLGNBQWdCO0FBQ3JDLFFBQUUsY0FBYztBQUFBLElBQ2pCO0FBSUEsUUFBSyxFQUFFLGdCQUFnQkYsUUFBTyxVQUFXO0FBQ3hDLFFBQUUsY0FBYztBQUFBLElBQ2pCO0FBQUEsRUFDRCxDQUFFO0FBTUYsRUFBQUUsUUFBTyxZQUFZLFNBQVUsTUFBTSxTQUFTLGFBQWM7QUFDekQsUUFBSyxPQUFPLFNBQVMsWUFBWSxDQUFDLGNBQWUsT0FBTyxFQUFHLEdBQUk7QUFDOUQsYUFBTyxDQUFDO0FBQUEsSUFDVDtBQUNBLFFBQUssT0FBTyxZQUFZLFdBQVk7QUFDbkMsb0JBQWM7QUFDZCxnQkFBVTtBQUFBLElBQ1g7QUFFQSxRQUFJLE1BQU0sUUFBUTtBQUVsQixRQUFLLENBQUMsU0FBVTtBQUlmLGdCQUFVLFdBQVcsZUFBZSxtQkFBb0IsRUFBRztBQUszRCxhQUFPLFFBQVEsY0FBZSxNQUFPO0FBQ3JDLFdBQUssT0FBTyxXQUFXLFNBQVM7QUFDaEMsY0FBUSxLQUFLLFlBQWEsSUFBSztBQUFBLElBQ2hDO0FBRUEsYUFBUyxXQUFXLEtBQU0sSUFBSztBQUMvQixjQUFVLENBQUMsZUFBZSxDQUFDO0FBRzNCLFFBQUssUUFBUztBQUNiLGFBQU8sQ0FBRSxRQUFRLGNBQWUsT0FBUSxDQUFFLENBQUUsQ0FBRTtBQUFBLElBQy9DO0FBRUEsYUFBUyxjQUFlLENBQUUsSUFBSyxHQUFHLFNBQVMsT0FBUTtBQUVuRCxRQUFLLFdBQVcsUUFBUSxRQUFTO0FBQ2hDLE1BQUFBLFFBQVEsT0FBUSxFQUFFLE9BQU87QUFBQSxJQUMxQjtBQUVBLFdBQU9BLFFBQU8sTUFBTyxDQUFDLEdBQUcsT0FBTyxVQUFXO0FBQUEsRUFDNUM7QUFLQSxFQUFBQSxRQUFPLEdBQUcsT0FBTyxTQUFVLEtBQUssUUFBUSxVQUFXO0FBQ2xELFFBQUksVUFBVSxNQUFNLFVBQ25CLE9BQU8sTUFDUCxNQUFNLElBQUksUUFBUyxHQUFJO0FBRXhCLFFBQUssTUFBTSxJQUFLO0FBQ2YsaUJBQVcsaUJBQWtCLElBQUksTUFBTyxHQUFJLENBQUU7QUFDOUMsWUFBTSxJQUFJLE1BQU8sR0FBRyxHQUFJO0FBQUEsSUFDekI7QUFHQSxRQUFLLE9BQU8sV0FBVyxZQUFhO0FBR25DLGlCQUFXO0FBQ1gsZUFBUztBQUFBLElBR1YsV0FBWSxVQUFVLE9BQU8sV0FBVyxVQUFXO0FBQ2xELGFBQU87QUFBQSxJQUNSO0FBR0EsUUFBSyxLQUFLLFNBQVMsR0FBSTtBQUN0QixNQUFBQSxRQUFPLEtBQU07QUFBQSxRQUNaO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFLQSxNQUFNLFFBQVE7QUFBQSxRQUNkLFVBQVU7QUFBQSxRQUNWLE1BQU07QUFBQSxNQUNQLENBQUUsRUFBRSxLQUFNLFNBQVUsY0FBZTtBQUdsQyxtQkFBVztBQUVYLGFBQUssS0FBTTtBQUFBO0FBQUE7QUFBQSxVQUlWQSxRQUFRLE9BQVEsRUFBRSxPQUFRQSxRQUFPLFVBQVcsWUFBYSxDQUFFLEVBQUUsS0FBTSxRQUFTO0FBQUE7QUFBQTtBQUFBLFVBRzVFO0FBQUEsU0FBYTtBQUFBLE1BS2YsQ0FBRSxFQUFFLE9BQVEsWUFBWSxTQUFVLE9BQU8sUUFBUztBQUNqRCxhQUFLLEtBQU0sV0FBVztBQUNyQixtQkFBUyxNQUFPLE1BQU0sWUFBWSxDQUFFLE1BQU0sY0FBYyxRQUFRLEtBQU0sQ0FBRTtBQUFBLFFBQ3pFLENBQUU7QUFBQSxNQUNILENBQUU7QUFBQSxJQUNIO0FBRUEsV0FBTztBQUFBLEVBQ1I7QUFFQSxFQUFBQSxRQUFPLEtBQUssUUFBUSxXQUFXLFNBQVUsTUFBTztBQUMvQyxXQUFPQSxRQUFPLEtBQU1BLFFBQU8sUUFBUSxTQUFVLElBQUs7QUFDakQsYUFBTyxTQUFTLEdBQUc7QUFBQSxJQUNwQixDQUFFLEVBQUU7QUFBQSxFQUNMO0FBRUEsRUFBQUEsUUFBTyxTQUFTO0FBQUEsSUFDZixXQUFXLFNBQVUsTUFBTSxTQUFTRCxJQUFJO0FBQ3ZDLFVBQUksYUFBYSxTQUFTLFdBQVcsUUFBUSxXQUFXLFlBQVksbUJBQ25FLFdBQVdDLFFBQU8sSUFBSyxNQUFNLFVBQVcsR0FDeEMsVUFBVUEsUUFBUSxJQUFLLEdBQ3ZCLFFBQVEsQ0FBQztBQUdWLFVBQUssYUFBYSxVQUFXO0FBQzVCLGFBQUssTUFBTSxXQUFXO0FBQUEsTUFDdkI7QUFFQSxrQkFBWSxRQUFRLE9BQU87QUFDM0Isa0JBQVlBLFFBQU8sSUFBSyxNQUFNLEtBQU07QUFDcEMsbUJBQWFBLFFBQU8sSUFBSyxNQUFNLE1BQU87QUFDdEMsMkJBQXNCLGFBQWEsY0FBYyxhQUFhLGFBQzNELFlBQVksWUFBYSxRQUFTLE1BQU8sSUFBSTtBQUloRCxVQUFLLG1CQUFvQjtBQUN4QixzQkFBYyxRQUFRLFNBQVM7QUFDL0IsaUJBQVMsWUFBWTtBQUNyQixrQkFBVSxZQUFZO0FBQUEsTUFFdkIsT0FBTztBQUNOLGlCQUFTLFdBQVksU0FBVSxLQUFLO0FBQ3BDLGtCQUFVLFdBQVksVUFBVyxLQUFLO0FBQUEsTUFDdkM7QUFFQSxVQUFLLE9BQU8sWUFBWSxZQUFhO0FBR3BDLGtCQUFVLFFBQVEsS0FBTSxNQUFNRCxJQUFHQyxRQUFPLE9BQVEsQ0FBQyxHQUFHLFNBQVUsQ0FBRTtBQUFBLE1BQ2pFO0FBRUEsVUFBSyxRQUFRLE9BQU8sTUFBTztBQUMxQixjQUFNLE1BQVEsUUFBUSxNQUFNLFVBQVUsTUFBUTtBQUFBLE1BQy9DO0FBQ0EsVUFBSyxRQUFRLFFBQVEsTUFBTztBQUMzQixjQUFNLE9BQVMsUUFBUSxPQUFPLFVBQVUsT0FBUztBQUFBLE1BQ2xEO0FBRUEsVUFBSyxXQUFXLFNBQVU7QUFDekIsZ0JBQVEsTUFBTSxLQUFNLE1BQU0sS0FBTTtBQUFBLE1BRWpDLE9BQU87QUFDTixnQkFBUSxJQUFLLEtBQU07QUFBQSxNQUNwQjtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBRUEsRUFBQUEsUUFBTyxHQUFHLE9BQVE7QUFBQTtBQUFBLElBR2pCLFFBQVEsU0FBVSxTQUFVO0FBRzNCLFVBQUssVUFBVSxRQUFTO0FBQ3ZCLGVBQU8sWUFBWSxTQUNsQixPQUNBLEtBQUssS0FBTSxTQUFVRCxJQUFJO0FBQ3hCLFVBQUFDLFFBQU8sT0FBTyxVQUFXLE1BQU0sU0FBU0QsRUFBRTtBQUFBLFFBQzNDLENBQUU7QUFBQSxNQUNKO0FBRUEsVUFBSSxNQUFNLEtBQ1QsT0FBTyxLQUFNLENBQUU7QUFFaEIsVUFBSyxDQUFDLE1BQU87QUFDWjtBQUFBLE1BQ0Q7QUFNQSxVQUFLLENBQUMsS0FBSyxlQUFlLEVBQUUsUUFBUztBQUNwQyxlQUFPLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRTtBQUFBLE1BQzFCO0FBR0EsYUFBTyxLQUFLLHNCQUFzQjtBQUNsQyxZQUFNLEtBQUssY0FBYztBQUN6QixhQUFPO0FBQUEsUUFDTixLQUFLLEtBQUssTUFBTSxJQUFJO0FBQUEsUUFDcEIsTUFBTSxLQUFLLE9BQU8sSUFBSTtBQUFBLE1BQ3ZCO0FBQUEsSUFDRDtBQUFBO0FBQUE7QUFBQSxJQUlBLFVBQVUsV0FBVztBQUNwQixVQUFLLENBQUMsS0FBTSxDQUFFLEdBQUk7QUFDakI7QUFBQSxNQUNEO0FBRUEsVUFBSSxjQUFjLFFBQVEsS0FDekIsT0FBTyxLQUFNLENBQUUsR0FDZixlQUFlLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRTtBQUdsQyxVQUFLQyxRQUFPLElBQUssTUFBTSxVQUFXLE1BQU0sU0FBVTtBQUdqRCxpQkFBUyxLQUFLLHNCQUFzQjtBQUFBLE1BRXJDLE9BQU87QUFDTixpQkFBUyxLQUFLLE9BQU87QUFJckIsY0FBTSxLQUFLO0FBQ1gsdUJBQWUsS0FBSyxnQkFBZ0IsSUFBSTtBQUN4QyxlQUFRLGdCQUNQLGlCQUFpQixJQUFJLG1CQUNyQkEsUUFBTyxJQUFLLGNBQWMsVUFBVyxNQUFNLFVBQVc7QUFFdEQseUJBQWUsYUFBYSxnQkFBZ0IsSUFBSTtBQUFBLFFBQ2pEO0FBQ0EsWUFBSyxnQkFBZ0IsaUJBQWlCLFFBQVEsYUFBYSxhQUFhLEtBQ3ZFQSxRQUFPLElBQUssY0FBYyxVQUFXLE1BQU0sVUFBVztBQUd0RCx5QkFBZUEsUUFBUSxZQUFhLEVBQUUsT0FBTztBQUM3Qyx1QkFBYSxPQUFPQSxRQUFPLElBQUssY0FBYyxrQkFBa0IsSUFBSztBQUNyRSx1QkFBYSxRQUFRQSxRQUFPLElBQUssY0FBYyxtQkFBbUIsSUFBSztBQUFBLFFBQ3hFO0FBQUEsTUFDRDtBQUdBLGFBQU87QUFBQSxRQUNOLEtBQUssT0FBTyxNQUFNLGFBQWEsTUFBTUEsUUFBTyxJQUFLLE1BQU0sYUFBYSxJQUFLO0FBQUEsUUFDekUsTUFBTSxPQUFPLE9BQU8sYUFBYSxPQUFPQSxRQUFPLElBQUssTUFBTSxjQUFjLElBQUs7QUFBQSxNQUM5RTtBQUFBLElBQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWUEsY0FBYyxXQUFXO0FBQ3hCLGFBQU8sS0FBSyxJQUFLLFdBQVc7QUFDM0IsWUFBSSxlQUFlLEtBQUs7QUFFeEIsZUFBUSxnQkFBZ0JBLFFBQU8sSUFBSyxjQUFjLFVBQVcsTUFBTSxVQUFXO0FBQzdFLHlCQUFlLGFBQWE7QUFBQSxRQUM3QjtBQUVBLGVBQU8sZ0JBQWdCO0FBQUEsTUFDeEIsQ0FBRTtBQUFBLElBQ0g7QUFBQSxFQUNELENBQUU7QUFHRixFQUFBQSxRQUFPLEtBQU0sRUFBRSxZQUFZLGVBQWUsV0FBVyxjQUFjLEdBQUcsU0FBVSxRQUFRLE1BQU87QUFDOUYsUUFBSSxNQUFNLGtCQUFrQjtBQUU1QixJQUFBQSxRQUFPLEdBQUksTUFBTyxJQUFJLFNBQVUsS0FBTTtBQUNyQyxhQUFPLE9BQVEsTUFBTSxTQUFVLE1BQU1pQixTQUFRSCxNQUFNO0FBR2xELFlBQUk7QUFDSixZQUFLLFNBQVUsSUFBSyxHQUFJO0FBQ3ZCLGdCQUFNO0FBQUEsUUFDUCxXQUFZLEtBQUssYUFBYSxHQUFJO0FBQ2pDLGdCQUFNLEtBQUs7QUFBQSxRQUNaO0FBRUEsWUFBS0EsU0FBUSxRQUFZO0FBQ3hCLGlCQUFPLE1BQU0sSUFBSyxJQUFLLElBQUksS0FBTUcsT0FBTztBQUFBLFFBQ3pDO0FBRUEsWUFBSyxLQUFNO0FBQ1YsY0FBSTtBQUFBLFlBQ0gsQ0FBQyxNQUFNSCxPQUFNLElBQUk7QUFBQSxZQUNqQixNQUFNQSxPQUFNLElBQUk7QUFBQSxVQUNqQjtBQUFBLFFBRUQsT0FBTztBQUNOLGVBQU1HLE9BQU8sSUFBSUg7QUFBQSxRQUNsQjtBQUFBLE1BQ0QsR0FBRyxRQUFRLEtBQUssVUFBVSxNQUFPO0FBQUEsSUFDbEM7QUFBQSxFQUNELENBQUU7QUFHRixFQUFBZCxRQUFPLEtBQU0sRUFBRSxRQUFRLFVBQVUsT0FBTyxRQUFRLEdBQUcsU0FBVSxNQUFNLE1BQU87QUFDekUsSUFBQUEsUUFBTyxLQUFNO0FBQUEsTUFDWixTQUFTLFVBQVU7QUFBQSxNQUNuQixTQUFTO0FBQUEsTUFDVCxJQUFJLFVBQVU7QUFBQSxJQUNmLEdBQUcsU0FBVSxjQUFjLFVBQVc7QUFHckMsTUFBQUEsUUFBTyxHQUFJLFFBQVMsSUFBSSxTQUFVLFFBQVEsT0FBUTtBQUNqRCxZQUFJLFlBQVksVUFBVSxXQUFZLGdCQUFnQixPQUFPLFdBQVcsWUFDdkUsUUFBUSxpQkFBa0IsV0FBVyxRQUFRLFVBQVUsT0FBTyxXQUFXO0FBRTFFLGVBQU8sT0FBUSxNQUFNLFNBQVUsTUFBTWtCLE9BQU1mLFFBQVE7QUFDbEQsY0FBSTtBQUVKLGNBQUssU0FBVSxJQUFLLEdBQUk7QUFHdkIsbUJBQU8sU0FBUyxRQUFTLE9BQVEsTUFBTSxJQUN0QyxLQUFNLFVBQVUsSUFBSyxJQUNyQixLQUFLLFNBQVMsZ0JBQWlCLFdBQVcsSUFBSztBQUFBLFVBQ2pEO0FBR0EsY0FBSyxLQUFLLGFBQWEsR0FBSTtBQUMxQixrQkFBTSxLQUFLO0FBSVgsbUJBQU8sS0FBSztBQUFBLGNBQ1gsS0FBSyxLQUFNLFdBQVcsSUFBSztBQUFBLGNBQUcsSUFBSyxXQUFXLElBQUs7QUFBQSxjQUNuRCxLQUFLLEtBQU0sV0FBVyxJQUFLO0FBQUEsY0FBRyxJQUFLLFdBQVcsSUFBSztBQUFBLGNBQ25ELElBQUssV0FBVyxJQUFLO0FBQUEsWUFDdEI7QUFBQSxVQUNEO0FBRUEsaUJBQU9BLFdBQVU7QUFBQTtBQUFBLFlBR2hCSCxRQUFPLElBQUssTUFBTWtCLE9BQU0sS0FBTTtBQUFBO0FBQUE7QUFBQSxZQUc5QmxCLFFBQU8sTUFBTyxNQUFNa0IsT0FBTWYsUUFBTyxLQUFNO0FBQUE7QUFBQSxRQUN6QyxHQUFHLE1BQU0sWUFBWSxTQUFTLFFBQVcsU0FBVTtBQUFBLE1BQ3BEO0FBQUEsSUFDRCxDQUFFO0FBQUEsRUFDSCxDQUFFO0FBRUYsRUFBQUgsUUFBTyxLQUFNO0FBQUEsSUFDWjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRCxHQUFHLFNBQVUsSUFBSSxNQUFPO0FBQ3ZCLElBQUFBLFFBQU8sR0FBSSxJQUFLLElBQUksU0FBVSxJQUFLO0FBQ2xDLGFBQU8sS0FBSyxHQUFJLE1BQU0sRUFBRztBQUFBLElBQzFCO0FBQUEsRUFDRCxDQUFFO0FBRUYsRUFBQUEsUUFBTyxHQUFHLE9BQVE7QUFBQSxJQUVqQixNQUFNLFNBQVUsT0FBTyxNQUFNLElBQUs7QUFDakMsYUFBTyxLQUFLLEdBQUksT0FBTyxNQUFNLE1BQU0sRUFBRztBQUFBLElBQ3ZDO0FBQUEsSUFDQSxRQUFRLFNBQVUsT0FBTyxJQUFLO0FBQzdCLGFBQU8sS0FBSyxJQUFLLE9BQU8sTUFBTSxFQUFHO0FBQUEsSUFDbEM7QUFBQSxJQUVBLFVBQVUsU0FBVSxVQUFVLE9BQU8sTUFBTSxJQUFLO0FBQy9DLGFBQU8sS0FBSyxHQUFJLE9BQU8sVUFBVSxNQUFNLEVBQUc7QUFBQSxJQUMzQztBQUFBLElBQ0EsWUFBWSxTQUFVLFVBQVUsT0FBTyxJQUFLO0FBRzNDLGFBQU8sVUFBVSxXQUFXLElBQzNCLEtBQUssSUFBSyxVQUFVLElBQUssSUFDekIsS0FBSyxJQUFLLE9BQU8sWUFBWSxNQUFNLEVBQUc7QUFBQSxJQUN4QztBQUFBLElBRUEsT0FBTyxTQUFVLFFBQVEsT0FBUTtBQUNoQyxhQUFPLEtBQ0wsR0FBSSxjQUFjLE1BQU8sRUFDekIsR0FBSSxjQUFjLFNBQVMsTUFBTztBQUFBLElBQ3JDO0FBQUEsRUFDRCxDQUFFO0FBRUYsRUFBQUEsUUFBTztBQUFBLElBQ0osd0xBRTBELE1BQU8sR0FBSTtBQUFBLElBQ3ZFLFNBQVUsSUFBSSxNQUFPO0FBR3BCLE1BQUFBLFFBQU8sR0FBSSxJQUFLLElBQUksU0FBVSxNQUFNLElBQUs7QUFDeEMsZUFBTyxVQUFVLFNBQVMsSUFDekIsS0FBSyxHQUFJLE1BQU0sTUFBTSxNQUFNLEVBQUcsSUFDOUIsS0FBSyxRQUFTLElBQUs7QUFBQSxNQUNyQjtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBTUEsRUFBQUEsUUFBTyxRQUFRLFNBQVUsSUFBSSxTQUFVO0FBQ3RDLFFBQUksS0FBSyxNQUFNO0FBRWYsUUFBSyxPQUFPLFlBQVksVUFBVztBQUNsQyxZQUFNLEdBQUksT0FBUTtBQUNsQixnQkFBVTtBQUNWLFdBQUs7QUFBQSxJQUNOO0FBSUEsUUFBSyxPQUFPLE9BQU8sWUFBYTtBQUMvQixhQUFPO0FBQUEsSUFDUjtBQUdBLFdBQU8sTUFBTSxLQUFNLFdBQVcsQ0FBRTtBQUNoQyxZQUFRLFdBQVc7QUFDbEIsYUFBTyxHQUFHLE1BQU8sV0FBVyxNQUFNLEtBQUssT0FBUSxNQUFNLEtBQU0sU0FBVSxDQUFFLENBQUU7QUFBQSxJQUMxRTtBQUdBLFVBQU0sT0FBTyxHQUFHLE9BQU8sR0FBRyxRQUFRQSxRQUFPO0FBRXpDLFdBQU87QUFBQSxFQUNSO0FBRUEsRUFBQUEsUUFBTyxZQUFZLFNBQVUsTUFBTztBQUNuQyxRQUFLLE1BQU87QUFDWCxNQUFBQSxRQUFPO0FBQUEsSUFDUixPQUFPO0FBQ04sTUFBQUEsUUFBTyxNQUFPLElBQUs7QUFBQSxJQUNwQjtBQUFBLEVBQ0Q7QUFlQSxNQUFLLE9BQU8sV0FBVyxjQUFjLE9BQU8sS0FBTTtBQUNqRCxXQUFRLFVBQVUsQ0FBQyxHQUFHLFdBQVc7QUFDaEMsYUFBT0E7QUFBQSxJQUNSLENBQUU7QUFBQSxFQUNIO0FBRUEsTUFHQyxVQUFVRixRQUFPLFFBR2pCLEtBQUtBLFFBQU87QUFFYixFQUFBRSxRQUFPLGFBQWEsU0FBVSxNQUFPO0FBQ3BDLFFBQUtGLFFBQU8sTUFBTUUsU0FBUztBQUMxQixNQUFBRixRQUFPLElBQUk7QUFBQSxJQUNaO0FBRUEsUUFBSyxRQUFRQSxRQUFPLFdBQVdFLFNBQVM7QUFDdkMsTUFBQUYsUUFBTyxTQUFTO0FBQUEsSUFDakI7QUFFQSxXQUFPRTtBQUFBLEVBQ1I7QUFLQSxNQUFLLE9BQU8sYUFBYSxhQUFjO0FBQ3RDLElBQUFGLFFBQU8sU0FBU0EsUUFBTyxJQUFJRTtBQUFBLEVBQzVCO0FBRUEsU0FBT0E7QUFFUDtBQTc5U0EsSUErOVNJLFFBSUc7QUFuK1NQO0FBQUE7QUErOVNBLElBQUksU0FBUyxjQUFlLFFBQVEsSUFBSztBQUl6QyxJQUFPLHdCQUFRO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsid2luZG93IiwgImkiLCAialF1ZXJ5IiwgImFyciIsICJtYXRjaGVzIiwgInZhbHVlIiwgImRpciIsICJwcmVGaWx0ZXIiLCAiZmluZCIsICJlbGVtIiwgImRlZmVycmVkIiwgImRhdGEiLCAibm9kZU5hbWUiLCAibmFtZSIsICJpbmRleCIsICJsZW5ndGgiLCAidmFsIiwgImNvbXBsZXRlZCIsICJkb25lIiwgIm1ldGhvZCIsICJ0eXBlIl0KfQo=

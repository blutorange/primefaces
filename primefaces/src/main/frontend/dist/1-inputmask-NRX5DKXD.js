import {
  init_jquery_module,
  jquery_module_default
} from "./chunk-AGY32TFX.js";
import {
  BaseWidget
} from "./chunk-HGD6GSK5.js";
import {
  __async,
  __spreadValues
} from "./chunk-YRJTWU7C.js";

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/jquery.inputmask.js
init_jquery_module();

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/defaults.js
var defaults_default = {
  _maxTestPos: 500,
  placeholder: "_",
  optionalmarker: ["[", "]"],
  quantifiermarker: ["{", "}"],
  groupmarker: ["(", ")"],
  alternatormarker: "|",
  escapeChar: "\\",
  mask: null,
  // needs tobe null instead of undefined as the extend method does not consider props with the undefined value
  regex: null,
  // regular expression as a mask
  oncomplete: () => {
  },
  // executes when the mask is complete
  onincomplete: () => {
  },
  // executes when the mask is incomplete and focus is lost
  oncleared: () => {
  },
  // executes when the mask is cleared
  repeat: 0,
  // repetitions of the mask: * ~ forever, otherwise specify an integer
  greedy: false,
  // true: allocated buffer for the mask and repetitions - false: allocate only if needed
  autoUnmask: false,
  // automatically unmask when retrieving the value with $.fn.val or value if the browser supports __lookupGetter__ or getOwnPropertyDescriptor
  removeMaskOnSubmit: false,
  // remove the mask before submitting the form.
  clearMaskOnLostFocus: true,
  insertMode: true,
  // insert the input or overwrite the input
  insertModeVisual: true,
  // show selected caret when insertmode = false
  clearIncomplete: false,
  // clear the incomplete input on blur
  alias: null,
  onKeyDown: () => {
  },
  // callback to implement autocomplete on certain keys for example. args => event, buffer, caretPos, opts
  onBeforeMask: null,
  // executes before masking the initial value to allow preprocessing of the initial value.	args => initialValue, opts => return processedValue
  onBeforePaste: function(pastedValue, opts) {
    return typeof opts.onBeforeMask === "function" ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
  },
  // executes before masking the pasted value to allow preprocessing of the pasted value.	args => pastedValue, opts => return processedValue
  onBeforeWrite: null,
  // executes before writing to the masked element. args => event, opts
  onUnMask: null,
  // executes after unmasking to allow postprocessing of the unmaskedvalue.	args => maskedValue, unmaskedValue, opts
  showMaskOnFocus: true,
  // show the mask-placeholder when the input has focus
  showMaskOnHover: true,
  // show the mask-placeholder when hovering the empty input
  onKeyValidation: () => {
  },
  // executes on every key-press with the result of isValid. Params: key, result, opts
  skipOptionalPartCharacter: " ",
  // a character which can be used to skip an optional part of a mask
  numericInput: false,
  // numericInput input direction style (input shifts to the left while holding the caret position)
  rightAlign: false,
  // align to the right
  undoOnEscape: true,
  // pressing escape reverts the value to the value before focus
  // numeric basic properties
  radixPoint: "",
  // ".", // | ","
  _radixDance: false,
  // dance around the radixPoint
  groupSeparator: "",
  // ",", // | "."
  // numeric basic properties
  keepStatic: null,
  // try to keep the mask static while typing. Decisions to alter the mask will be posponed if possible
  positionCaretOnTab: true,
  // when enabled the caret position is set after the latest valid position on TAB
  tabThrough: false,
  // allows for tabbing through the different parts of the masked field
  supportsInputType: ["text", "tel", "url", "password", "search"],
  // list with the supported input types
  isComplete: null,
  // override for isComplete - args => buffer, opts - return true || false
  preValidation: null,
  // hook to preValidate the input.  Usefull for validating regardless the definition.	args => buffer, pos, char, isSelection, opts, maskset, caretPos, strict => return true/false/command object
  postValidation: null,
  // hook to postValidate the result from isValid.	Usefull for validating the entry as a whole.	args => buffer, pos, c, currentResult, opts, maskset, strict, fromCheckval, fromAlternate => return true/false/json
  staticDefinitionSymbol: void 0,
  // specify a definitionSymbol for static content, used to make matches for alternators
  jitMasking: false,
  // just in time masking ~ only mask while typing, can n (number), true or false
  nullable: true,
  // return nothing instead of the buffertemplate when the user hasn't entered anything.
  inputEventOnly: false,
  // dev option - testing inputfallback behavior
  noValuePatching: false,
  // disable value property patching
  positionCaretOnClick: "lvp",
  // none, lvp (based on the last valid position (default), radixFocus (position caret to radixpoint on initial click), select (select the whole input), ignore (ignore the click and continue the mask)
  casing: null,
  // mask-level casing. Options: null, "upper", "lower" or "title" or callback args => elem, test, pos, validPositions return charValue
  inputmode: "text",
  // specify the inputmode
  importDataAttributes: true,
  // import data-inputmask attributes
  shiftPositions: true,
  // shift position of the mask entries on entry and deletion.
  usePrototypeDefinitions: true,
  // use the default defined definitions from the prototype
  validationEventTimeOut: 3e3,
  // Time to show validation error on form submit
  substitutes: {}
  // define character substitutes
};

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/definitions.js
var definitions_default = {
  9: {
    // \uFF11-\uFF19 #1606
    validator: "[0-9０-９]",
    definitionSymbol: "*"
  },
  a: {
    // \u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5 #76
    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
    definitionSymbol: "*"
  },
  "*": {
    validator: "[0-9０-９A-Za-zА-яЁёÀ-ÿµ]"
  }
};

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/global/window.js
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var window_default = canUseDOM ? window : {};

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/dependencyLibs/data.js
function data_default(owner, key, value) {
  if (value === void 0) {
    return owner.__data ? owner.__data[key] : null;
  } else {
    owner.__data = owner.__data || {};
    owner.__data[key] = value;
  }
}

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/dependencyLibs/extend.js
function extend() {
  let options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
  if (typeof target === "boolean") {
    deep = target;
    target = arguments[i] || {};
    i++;
  }
  if (typeof target !== "object" && typeof target !== "function") {
    target = {};
  }
  for (; i < length; i++) {
    if ((options = arguments[i]) != null) {
      for (name in options) {
        src = target[name];
        copy = options[name];
        if (target === copy) {
          continue;
        }
        if (deep && copy && (Object.prototype.toString.call(copy) === "[object Object]" || (copyIsArray = Array.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && Array.isArray(src) ? src : [];
          } else {
            clone = src && Object.prototype.toString.call(src) === "[object Object]" ? src : {};
          }
          target[name] = extend(deep, clone, copy);
        } else if (copy !== void 0) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/dependencyLibs/events.js
var document2 = window_default.document;
function isValidElement(elem) {
  return elem instanceof Element;
}
var Evnt;
if (typeof window_default.CustomEvent === "function") {
  Evnt = window_default.CustomEvent;
} else if (window_default.Event && document2 && document2.createEvent) {
  Evnt = function(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      composed: true,
      detail: void 0
    };
    const evt = document2.createEvent("CustomEvent");
    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );
    return evt;
  };
  Evnt.prototype = window_default.Event.prototype;
} else if (typeof Event !== "undefined") {
  Evnt = Event;
}
function on(events, handler) {
  function addEvent(ev, namespace) {
    if (elem.addEventListener) {
      elem.addEventListener(ev, handler, false);
    } else if (elem.attachEvent) {
      elem.attachEvent(`on${ev}`, handler);
    }
    eventRegistry[ev] = eventRegistry[ev] || {};
    eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || [];
    eventRegistry[ev][namespace].push(handler);
  }
  if (isValidElement(this[0])) {
    var eventRegistry = this[0].eventRegistry, elem = this[0];
    events.split(" ").forEach((event) => {
      const [ev, namespace = "global"] = event.split(".");
      addEvent(ev, namespace);
    });
  }
  return this;
}
function off(events, handler) {
  let eventRegistry, elem;
  function removeEvent(ev, namespace, handler2) {
    if (ev in eventRegistry === true) {
      if (elem.removeEventListener) {
        elem.removeEventListener(ev, handler2, false);
      } else if (elem.detachEvent) {
        elem.detachEvent(`on${ev}`, handler2);
      }
      if (namespace === "global") {
        for (const nmsp in eventRegistry[ev]) {
          eventRegistry[ev][nmsp].splice(
            eventRegistry[ev][nmsp].indexOf(handler2),
            1
          );
        }
      } else {
        eventRegistry[ev][namespace].splice(
          eventRegistry[ev][namespace].indexOf(handler2),
          1
        );
      }
    }
  }
  function resolveNamespace(ev, namespace) {
    let evts = [], hndx, hndL;
    if (ev.length > 0) {
      if (handler === void 0) {
        for (hndx = 0, hndL = eventRegistry[ev][namespace].length; hndx < hndL; hndx++) {
          evts.push({
            ev,
            namespace: namespace && namespace.length > 0 ? namespace : "global",
            handler: eventRegistry[ev][namespace][hndx]
          });
        }
      } else {
        evts.push({
          ev,
          namespace: namespace && namespace.length > 0 ? namespace : "global",
          handler
        });
      }
    } else if (namespace.length > 0) {
      for (const evNdx in eventRegistry) {
        for (const nmsp in eventRegistry[evNdx]) {
          if (nmsp === namespace) {
            if (handler === void 0) {
              for (hndx = 0, hndL = eventRegistry[evNdx][nmsp].length; hndx < hndL; hndx++) {
                evts.push({
                  ev: evNdx,
                  namespace: nmsp,
                  handler: eventRegistry[evNdx][nmsp][hndx]
                });
              }
            } else {
              evts.push({
                ev: evNdx,
                namespace: nmsp,
                handler
              });
            }
          }
        }
      }
    }
    return evts;
  }
  if (isValidElement(this[0]) && events) {
    eventRegistry = this[0].eventRegistry;
    elem = this[0];
    events.split(" ").forEach((event) => {
      const [ev, namespace] = event.split(".");
      resolveNamespace(ev, namespace).forEach(
        ({ ev: ev1, handler: handler1, namespace: namespace1 }) => {
          removeEvent(ev1, namespace1, handler1);
        }
      );
    });
  }
  return this;
}
function trigger(events) {
  if (isValidElement(this[0])) {
    const eventRegistry = this[0].eventRegistry, elem = this[0], _events = typeof events === "string" ? events.split(" ") : [events.type];
    for (let endx = 0; endx < _events.length; endx++) {
      const nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";
      if (document2 !== void 0 && namespace === "global") {
        var evnt, params = {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: arguments[1]
        };
        if (document2.createEvent) {
          try {
            switch (ev) {
              case "input":
                params.inputType = "insertText";
                evnt = new InputEvent(ev, params);
                break;
              default:
                evnt = new CustomEvent(ev, params);
            }
          } catch (e) {
            evnt = document2.createEvent("CustomEvent");
            evnt.initCustomEvent(
              ev,
              params.bubbles,
              params.cancelable,
              params.detail
            );
          }
          if (events.type) extend(evnt, events);
          elem.dispatchEvent(evnt);
        } else {
          evnt = document2.createEventObject();
          evnt.eventType = ev;
          evnt.detail = arguments[1];
          if (events.type) extend(evnt, events);
          elem.fireEvent("on" + evnt.eventType, evnt);
        }
      } else if (eventRegistry[ev] !== void 0) {
        arguments[0] = arguments[0].type ? arguments[0] : inputmask_dependencyLib_default.Event(arguments[0]);
        arguments[0].detail = arguments.slice(1);
        const registry = eventRegistry[ev], handlers = namespace === "global" ? Object.values(registry).flat() : registry[namespace];
        handlers.forEach((handler) => handler.apply(elem, arguments));
      }
    }
  }
  return this;
}

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/dependencyLibs/inputmask.dependencyLib.js
var document3 = window_default.document;
function DependencyLib(elem) {
  if (elem instanceof DependencyLib) {
    return elem;
  }
  if (!(this instanceof DependencyLib)) {
    return new DependencyLib(elem);
  }
  if (elem !== void 0 && elem !== null && elem !== window_default) {
    this[0] = elem.nodeName ? elem : elem[0] !== void 0 && elem[0].nodeName ? elem[0] : document3.querySelector(elem);
    if (this[0] !== void 0 && this[0] !== null) {
      this[0].eventRegistry = this[0].eventRegistry || {};
    }
  }
}
DependencyLib.prototype = {
  on,
  off,
  trigger
};
DependencyLib.extend = extend;
DependencyLib.data = data_default;
DependencyLib.Event = Evnt;
var inputmask_dependencyLib_default = DependencyLib;

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/environment.js
var ua = window_default.navigator && window_default.navigator.userAgent || "";
var ie = ua.indexOf("MSIE ") > 0 || ua.indexOf("Trident/") > 0;
var mobile = window_default.navigator && window_default.navigator.userAgentData && window_default.navigator.userAgentData.mobile || window_default.navigator && window_default.navigator.maxTouchPoints || "ontouchstart" in window_default;
var iphone = /iphone/i.test(ua);

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/keycode.js
var ignorables = {
  Alt: 18,
  AltGraph: 18,
  ArrowDown: 40,
  ArrowLeft: 37,
  ArrowRight: 39,
  ArrowUp: 38,
  Backspace: 8,
  CapsLock: 20,
  Control: 17,
  ContextMenu: 93,
  Dead: 221,
  Delete: 46,
  End: 35,
  Escape: 27,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  Home: 36,
  Insert: 45,
  NumLock: 144,
  PageDown: 34,
  PageUp: 33,
  Pause: 19,
  PrintScreen: 44,
  Process: 229,
  Shift: 16,
  ScrollLock: 145,
  Tab: 9,
  Unidentified: 229
};
var keyCode = __spreadValues({
  c: 67,
  x: 88,
  z: 90,
  BACKSPACE_SAFARI: 127,
  Enter: 13,
  Meta_LEFT: 91,
  Meta_RIGHT: 92,
  Space: 32
}, ignorables);
var keyCodeRev = Object.entries(keyCode).reduce(
  (acc, [key, value]) => (
    // eslint-disable-next-line no-sequences
    (acc[value] = acc[value] === void 0 ? key : acc[value], acc)
  ),
  {}
);
var keys = Object.entries(keyCode).reduce(
  // eslint-disable-next-line no-sequences
  (acc, [key, value]) => (acc[key] = key === "Space" ? " " : key, acc),
  {}
);

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/validation-tests.js
function getLocator(tst, align) {
  let locator = (tst.alternation != void 0 ? tst.mloc[getDecisionTaker(tst)] : tst.locator).join("");
  if (locator !== "") {
    locator = locator.split(":")[0];
    while (locator.length < align) locator += "0";
  }
  return locator;
}
function getDecisionTaker(tst) {
  let decisionTaker = tst.locator[tst.alternation];
  if (typeof decisionTaker === "string" && decisionTaker.length > 0) {
    decisionTaker = decisionTaker.split(",")[0];
  }
  return decisionTaker !== void 0 ? decisionTaker.toString() : "";
}
function getPlaceholder(pos, test, returnPL) {
  const inputmask = this, opts = this.opts, maskset = this.maskset;
  test = test || getTest.call(inputmask, pos).match;
  if (test.placeholder !== void 0 || returnPL === true) {
    if (test.placeholder !== "" && test.static === true && test.generated !== true) {
      const lvp = getLastValidPosition.call(inputmask, pos), nextPos = seekNext.call(inputmask, lvp);
      return (returnPL ? pos <= nextPos : pos < nextPos) ? opts.staticDefinitionSymbol && test.static ? test.nativeDef : test.def : typeof test.placeholder === "function" ? test.placeholder(opts) : test.placeholder;
    } else {
      return typeof test.placeholder === "function" ? test.placeholder(opts) : test.placeholder;
    }
  } else if (test.static === true) {
    if (pos > -1 && maskset.validPositions[pos] === void 0) {
      let tests = getTests.call(inputmask, pos), staticAlternations = [], prevTest;
      if (typeof opts.placeholder === "string" && tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) {
        for (let i = 0; i < tests.length; i++) {
          if (tests[i].match.def !== "" && tests[i].match.optionality !== true && tests[i].match.optionalQuantifier !== true && (tests[i].match.static === true || prevTest === void 0 || tests[i].match.fn.test(
            prevTest.match.def,
            maskset,
            pos,
            true,
            opts
          ) !== false)) {
            staticAlternations.push(tests[i]);
            if (tests[i].match.static === true) prevTest = tests[i];
            if (staticAlternations.length > 1) {
              if (/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)) {
                return opts.placeholder.charAt(pos % opts.placeholder.length);
              }
            }
          }
        }
      }
    }
    return test.def;
  }
  return typeof opts.placeholder === "object" ? test.def : opts.placeholder.charAt(pos % opts.placeholder.length);
}
function getMaskTemplate(baseOnInput, minimalPos, includeMode, noJit, clearOptionalTail2) {
  const inputmask = this, opts = this.opts, maskset = this.maskset, greedy = opts.greedy;
  if (clearOptionalTail2 && opts.greedy) {
    opts.greedy = false;
    inputmask.maskset.tests = {};
  }
  minimalPos = minimalPos || 0;
  let maskTemplate = [], ndxIntlzr, pos = 0, test, testPos, jitRenderStatic;
  do {
    if (baseOnInput === true && maskset.validPositions[pos]) {
      testPos = clearOptionalTail2 && maskset.validPositions[pos].match.optionality && maskset.validPositions[pos + 1] === void 0 && (maskset.validPositions[pos].generatedInput === true || maskset.validPositions[pos].input == opts.skipOptionalPartCharacter && pos > 0) ? determineTestTemplate.call(
        inputmask,
        pos,
        getTests.call(inputmask, pos, ndxIntlzr, pos - 1)
      ) : maskset.validPositions[pos];
      test = testPos.match;
      ndxIntlzr = testPos.locator.slice();
      maskTemplate.push(
        includeMode === true ? testPos.input : includeMode === false ? test.nativeDef : getPlaceholder.call(inputmask, pos, test)
      );
    } else {
      testPos = getTestTemplate.call(inputmask, pos, ndxIntlzr, pos - 1);
      test = testPos.match;
      ndxIntlzr = testPos.locator.slice();
      const jitMasking = noJit === true ? false : opts.jitMasking !== false ? opts.jitMasking : test.jit;
      jitRenderStatic = (jitRenderStatic || maskset.validPositions[pos - 1]) && test.static && test.def !== opts.groupSeparator && test.fn === null;
      if (jitRenderStatic || jitMasking === false || jitMasking === void 0 || typeof jitMasking === "number" && isFinite(jitMasking) && jitMasking > pos) {
        maskTemplate.push(
          includeMode === false ? test.nativeDef : getPlaceholder.call(inputmask, maskTemplate.length, test)
        );
      } else {
        jitRenderStatic = false;
      }
    }
    pos++;
  } while (test.static !== true || test.def !== "" || minimalPos > pos);
  if (maskTemplate[maskTemplate.length - 1] === "") {
    maskTemplate.pop();
  }
  if (includeMode !== false || // do not alter the masklength when just retrieving the maskdefinition
  maskset.maskLength === void 0) {
    maskset.maskLength = pos - 1;
  }
  opts.greedy = greedy;
  return maskTemplate;
}
function getTestTemplate(pos, ndxIntlzr, tstPs) {
  const inputmask = this, maskset = this.maskset;
  return maskset.validPositions[pos] || determineTestTemplate.call(
    inputmask,
    pos,
    getTests.call(
      inputmask,
      pos,
      ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr,
      tstPs
    )
  );
}
function determineTestTemplate(pos, tests) {
  let inputmask = this, opts = this.opts, lenghtOffset = 0, optionalityLevel = determineOptionalityLevel(pos, tests);
  pos = pos > 0 ? pos - 1 : 0;
  let altTest = getTest.call(inputmask, pos), targetLocator = getLocator(altTest), tstLocator, closest, bestMatch;
  if (opts.greedy && tests.length > 1 && tests[tests.length - 1].match.def === "")
    lenghtOffset = 1;
  for (let ndx = 0; ndx < tests.length - lenghtOffset; ndx++) {
    const tst = tests[ndx];
    tstLocator = getLocator(tst, targetLocator.length);
    const distance = Math.abs(tstLocator - targetLocator);
    if (tst.unMatchedAlternationStopped !== true || tests.filter((tst2) => tst2.unMatchedAlternationStopped !== true).length <= 1) {
      if (closest === void 0 || tstLocator !== "" && distance < closest || bestMatch && !opts.greedy && bestMatch.match.optionality && bestMatch.match.optionality - optionalityLevel > 0 && bestMatch.match.newBlockMarker === "master" && (!tst.match.optionality || tst.match.optionality - optionalityLevel < 1 || !tst.match.newBlockMarker) || bestMatch && !opts.greedy && bestMatch.match.optionalQuantifier && !tst.match.optionalQuantifier) {
        closest = distance;
        bestMatch = tst;
      }
    }
  }
  return bestMatch;
}
function determineOptionalityLevel(pos, tests) {
  let optionalityLevel = 0, differentOptionalLevels = false;
  tests.forEach((test) => {
    if (test.match.optionality) {
      if (optionalityLevel !== 0 && optionalityLevel !== test.match.optionality)
        differentOptionalLevels = true;
      if (optionalityLevel === 0 || optionalityLevel > test.match.optionality) {
        optionalityLevel = test.match.optionality;
      }
    }
  });
  if (optionalityLevel) {
    if (pos == 0) optionalityLevel = 0;
    else if (tests.length == 1) optionalityLevel = 0;
    else if (!differentOptionalLevels) optionalityLevel = 0;
  }
  return optionalityLevel;
}
function getTest(pos, tests) {
  const inputmask = this, maskset = this.maskset;
  if (maskset.validPositions[pos]) {
    return maskset.validPositions[pos];
  }
  return (tests || getTests.call(inputmask, pos))[0];
}
function isSubsetOf(source, target, opts) {
  function expand(pattern) {
    let expanded = [], start = -1, end;
    for (let i = 0, l = pattern.length; i < l; i++) {
      if (pattern.charAt(i) === "-") {
        end = pattern.charCodeAt(i + 1);
        while (++start < end) expanded.push(String.fromCharCode(start));
      } else {
        start = pattern.charCodeAt(i);
        expanded.push(pattern.charAt(i));
      }
    }
    return expanded.join("");
  }
  if (source.match.def === target.match.nativeDef) return true;
  if ((opts.regex || source.match.fn instanceof RegExp && target.match.fn instanceof RegExp) && source.match.static !== true && target.match.static !== true) {
    if (target.match.fn.source === ".") return true;
    return expand(target.match.fn.source.replace(/[[\]/]/g, "")).indexOf(
      expand(source.match.fn.source.replace(/[[\]/]/g, ""))
    ) !== -1;
  }
  return false;
}
function getTests(pos, ndxIntlzr, tstPs) {
  let inputmask = this, $ = this.dependencyLib, maskset = this.maskset, opts = this.opts, el = this.el, maskTokens = maskset.maskToken, testPos = ndxIntlzr ? tstPs : 0, ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0], matches = [], insertStop = false, latestMatch, cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "", unMatchedAlternation = false;
  function resolveTestFromToken(maskToken, ndxInitializer2, loopNdx, quantifierRecurse) {
    function handleMatch(match, loopNdx2, quantifierRecurse2) {
      function isFirstMatch(latestMatch2, tokenGroup) {
        let firstMatch = tokenGroup.matches.indexOf(latestMatch2) === 0;
        if (!firstMatch) {
          tokenGroup.matches.every(function(match2, ndx) {
            if (match2.isQuantifier === true) {
              firstMatch = isFirstMatch(
                latestMatch2,
                tokenGroup.matches[ndx - 1]
              );
            } else if (Object.prototype.hasOwnProperty.call(match2, "matches"))
              firstMatch = isFirstMatch(latestMatch2, match2);
            if (firstMatch) return false;
            return true;
          });
        }
        return firstMatch;
      }
      function resolveNdxInitializer(pos2, alternateNdx, targetAlternation) {
        let bestMatch, indexPos;
        if (maskset.tests[pos2] || maskset.validPositions[pos2]) {
          (maskset.validPositions[pos2] ? [maskset.validPositions[pos2]] : maskset.tests[pos2]).every(function(lmnt, ndx) {
            if (lmnt.mloc[alternateNdx]) {
              bestMatch = lmnt;
              return false;
            }
            const alternation = targetAlternation !== void 0 ? targetAlternation : lmnt.alternation, ndxPos = lmnt.locator[alternation] !== void 0 ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
            if ((indexPos === void 0 || ndxPos < indexPos) && ndxPos !== -1) {
              bestMatch = lmnt;
              indexPos = ndxPos;
            }
            return true;
          });
        }
        if (bestMatch) {
          const bestMatchAltIndex = bestMatch.locator[bestMatch.alternation], locator = bestMatch.mloc[alternateNdx] || bestMatch.mloc[bestMatchAltIndex] || bestMatch.locator;
          if (locator[locator.length - 1].toString().indexOf(":") !== -1) {
            const alternation = locator.pop();
          }
          return locator.slice(
            (targetAlternation !== void 0 ? targetAlternation : bestMatch.alternation) + 1
          );
        } else {
          return targetAlternation !== void 0 ? resolveNdxInitializer(pos2, alternateNdx) : void 0;
        }
      }
      function staticCanMatchDefinition(source, target) {
        return source.match.static === true && target.match.static !== true ? target.match.fn.test(
          source.match.def,
          maskset,
          pos,
          false,
          opts,
          false
        ) : false;
      }
      function setMergeLocators(targetMatch, altMatch) {
        function mergeLoc(altNdx) {
          targetMatch.mloc = targetMatch.mloc || {};
          let locNdx = targetMatch.locator[altNdx];
          if (locNdx === void 0) {
            targetMatch.alternation = void 0;
          } else {
            if (typeof locNdx === "string") locNdx = locNdx.split(",")[0];
            if (targetMatch.mloc[locNdx] === void 0) {
              targetMatch.mloc[locNdx] = targetMatch.locator.slice();
              targetMatch.mloc[locNdx].push(`:${targetMatch.alternation}`);
            }
            if (altMatch !== void 0) {
              const offset = 0;
              for (let ndx in altMatch.mloc) {
                if (typeof ndx === "string") ndx = parseInt(ndx.split(",")[0]);
                targetMatch.mloc[ndx + offset] = altMatch.mloc[ndx];
              }
              targetMatch.locator[altNdx] = Object.keys(targetMatch.mloc).join(
                ","
              );
            }
            if (targetMatch.alternation > altNdx) {
              targetMatch.alternation = altNdx;
            }
            return true;
          }
          return false;
        }
        let alternationNdx = targetMatch.alternation, shouldMerge = altMatch === void 0 || alternationNdx <= altMatch.alternation && targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]) === -1;
        if (!shouldMerge && alternationNdx > altMatch.alternation) {
          for (let i = 0; i < alternationNdx; i++) {
            if (targetMatch.locator[i] !== altMatch.locator[i]) {
              alternationNdx = i;
              shouldMerge = true;
              break;
            }
          }
        }
        if (shouldMerge) {
          return mergeLoc(alternationNdx);
        }
        return false;
      }
      function isSameLevel(targetMatch, altMatch) {
        if (targetMatch.locator.length !== altMatch.locator.length) {
          return false;
        }
        for (let locNdx = targetMatch.alternation + 1; locNdx < targetMatch.locator.length; locNdx++) {
          if (targetMatch.locator[locNdx] !== altMatch.locator[locNdx]) {
            return false;
          }
        }
        return true;
      }
      function handleGroup() {
        match = handleMatch(
          maskToken.matches[maskToken.matches.indexOf(match) + 1],
          loopNdx2,
          quantifierRecurse2
        );
        if (match) return true;
      }
      function handleOptional() {
        const optionalToken = match, mtchsNdx = matches.length;
        match = resolveTestFromToken(
          match,
          ndxInitializer2,
          loopNdx2,
          quantifierRecurse2
        );
        if (matches.length > 0) {
          matches.forEach(function(mtch, ndx) {
            if (ndx >= mtchsNdx) {
              mtch.match.optionality = mtch.match.optionality ? mtch.match.optionality + 1 : 1;
            }
          });
          latestMatch = matches[matches.length - 1].match;
          if (quantifierRecurse2 === void 0 && isFirstMatch(latestMatch, optionalToken)) {
            insertStop = true;
            testPos = pos;
          } else {
            return match;
          }
        }
      }
      function handleAlternator() {
        function isUnmatchedAlternation(alternateToken2) {
          let matchesLength = alternateToken2.matches[0].matches ? alternateToken2.matches[0].matches.length : 1, matchesNewLength;
          for (let alndx = 0; alndx < alternateToken2.matches.length; alndx++) {
            matchesNewLength = alternateToken2.matches[alndx].matches ? alternateToken2.matches[alndx].matches.length : 1;
            if (matchesLength !== matchesNewLength) {
              break;
            }
          }
          return matchesLength !== matchesNewLength;
        }
        inputmask.hasAlternator = true;
        let alternateToken = match, malternateMatches = [], maltMatches, currentMatches = matches.slice(), loopNdxCnt = loopNdx2.length, altIndex = ndxInitializer2.length > 0 ? ndxInitializer2.shift() : -1;
        if (altIndex === -1 || typeof altIndex === "string") {
          let currentPos = testPos, ndxInitializerClone = ndxInitializer2.slice(), altIndexArr = [], amndx;
          if (typeof altIndex === "string") {
            altIndexArr = altIndex.split(",");
          } else {
            for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
              altIndexArr.push(amndx.toString());
            }
          }
          if (maskset.excludes[pos] !== void 0) {
            const altIndexArrClone = altIndexArr.slice();
            for (let i = 0, exl = maskset.excludes[pos].length; i < exl; i++) {
              const excludeSet = maskset.excludes[pos][i].toString().split(":");
              if (loopNdx2.length == excludeSet[1]) {
                altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]), 1);
              }
            }
            if (altIndexArr.length === 0) {
              delete maskset.excludes[pos];
              altIndexArr = altIndexArrClone;
            }
          }
          if (opts.keepStatic === true || isFinite(parseInt(opts.keepStatic)) && currentPos >= opts.keepStatic)
            altIndexArr = altIndexArr.slice(0, 1);
          for (let ndx = 0; ndx < altIndexArr.length; ndx++) {
            amndx = parseInt(altIndexArr[ndx]);
            matches = [];
            ndxInitializer2 = typeof altIndex === "string" ? resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice() : ndxInitializerClone.slice();
            const tokenMatch = alternateToken.matches[amndx];
            if (tokenMatch && handleMatch(
              tokenMatch,
              [amndx].concat(loopNdx2),
              quantifierRecurse2
            )) {
              match = true;
            } else {
              if (ndx === 0) {
                unMatchedAlternation = isUnmatchedAlternation(alternateToken);
              }
              if (tokenMatch && tokenMatch.matches && tokenMatch.matches.length > alternateToken.matches[0].matches.length) {
                break;
              }
            }
            maltMatches = matches.slice();
            testPos = currentPos;
            matches = [];
            for (let ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
              let altMatch = maltMatches[ndx1], dropMatch = false;
              altMatch.alternation = altMatch.alternation || loopNdxCnt;
              setMergeLocators(altMatch);
              for (let ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                const altMatch2 = malternateMatches[ndx2];
                if (typeof altIndex !== "string" || altMatch.alternation !== void 0 && altIndexArr.includes(
                  altMatch.locator[altMatch.alternation].toString()
                )) {
                  if (altMatch.match.nativeDef === altMatch2.match.nativeDef) {
                    dropMatch = true;
                    setMergeLocators(altMatch2, altMatch);
                    break;
                  } else if (isSubsetOf(altMatch, altMatch2, opts)) {
                    if (setMergeLocators(altMatch, altMatch2)) {
                      dropMatch = true;
                      malternateMatches.splice(
                        malternateMatches.indexOf(altMatch2),
                        0,
                        altMatch
                      );
                    }
                    break;
                  } else if (isSubsetOf(altMatch2, altMatch, opts)) {
                    setMergeLocators(altMatch2, altMatch);
                    break;
                  } else if (staticCanMatchDefinition(altMatch, altMatch2)) {
                    if (!isSameLevel(altMatch, altMatch2) && el.inputmask.userOptions.keepStatic === void 0) {
                      opts.keepStatic = true;
                    } else if (setMergeLocators(altMatch, altMatch2)) {
                      dropMatch = true;
                      malternateMatches.splice(
                        malternateMatches.indexOf(altMatch2),
                        0,
                        altMatch
                      );
                    }
                    break;
                  } else if (staticCanMatchDefinition(altMatch2, altMatch)) {
                    setMergeLocators(altMatch2, altMatch);
                    break;
                  }
                }
              }
              if (!dropMatch) {
                malternateMatches.push(altMatch);
              }
            }
          }
          matches = currentMatches.concat(malternateMatches);
          testPos = pos;
          insertStop = matches.length > 0 && unMatchedAlternation;
          match = malternateMatches.length > 0 && !unMatchedAlternation;
          if (unMatchedAlternation && insertStop && !match) {
            matches.forEach(function(mtch, ndx) {
              mtch.unMatchedAlternationStopped = true;
            });
          }
          ndxInitializer2 = ndxInitializerClone.slice();
        } else {
          match = handleMatch(
            alternateToken.matches[altIndex] || maskToken.matches[altIndex],
            [altIndex].concat(loopNdx2),
            quantifierRecurse2
          );
        }
        if (match) return true;
      }
      function handleQuantifier() {
        let qt = match, breakloop = false;
        for (var qndx = ndxInitializer2.length > 0 ? ndxInitializer2.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
          var tokenGroup = maskToken.matches[maskToken.matches.indexOf(qt) - 1];
          match = handleMatch(tokenGroup, [qndx].concat(loopNdx2), tokenGroup);
          if (match) {
            matches.forEach(function(mtch, ndx) {
              if (IsMatchOf(tokenGroup, mtch.match)) latestMatch = mtch.match;
              else latestMatch = matches[matches.length - 1].match;
              latestMatch.optionalQuantifier = qndx >= qt.quantifier.min;
              latestMatch.jit = (qndx + 1) * (tokenGroup.matches.indexOf(latestMatch) + 1) > qt.quantifier.jit;
              if (latestMatch.optionalQuantifier && isFirstMatch(latestMatch, tokenGroup)) {
                insertStop = true;
                testPos = pos;
                if (opts.greedy && maskset.validPositions[pos - 1] == void 0 && qndx > qt.quantifier.min && ["*", "+"].indexOf(qt.quantifier.max) != -1) {
                  matches.pop();
                  cacheDependency = void 0;
                }
                breakloop = true;
                match = false;
              }
              if (!breakloop && latestMatch.jit) {
                maskset.jitOffset[pos] = tokenGroup.matches.length - tokenGroup.matches.indexOf(latestMatch);
              }
            });
            if (breakloop) break;
            return true;
          }
        }
      }
      if (testPos > pos + opts._maxTestPos) {
        throw new Error(
          `Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. ${maskset.mask}`
        );
      }
      if (testPos === pos && match.matches === void 0) {
        matches.push({
          match,
          locator: loopNdx2.reverse(),
          cd: cacheDependency,
          mloc: {}
        });
        if (match.optionality && quantifierRecurse2 === void 0 && (opts.definitions && opts.definitions[match.nativeDef] && opts.definitions[match.nativeDef].optional || inputmask_default.prototype.definitions[match.nativeDef] && inputmask_default.prototype.definitions[match.nativeDef].optional)) {
          insertStop = true;
          testPos = pos;
        } else {
          return true;
        }
      } else if (match.matches !== void 0) {
        if (match.isGroup && quantifierRecurse2 !== match) {
          return handleGroup();
        } else if (match.isOptional) {
          return handleOptional();
        } else if (match.isAlternator) {
          return handleAlternator();
        } else if (match.isQuantifier && quantifierRecurse2 !== maskToken.matches[maskToken.matches.indexOf(match) - 1]) {
          return handleQuantifier();
        } else {
          match = resolveTestFromToken(
            match,
            ndxInitializer2,
            loopNdx2,
            quantifierRecurse2
          );
          if (match) return true;
        }
      } else {
        testPos++;
      }
    }
    for (let tndx = ndxInitializer2.length > 0 ? ndxInitializer2.shift() : 0; tndx < maskToken.matches.length; tndx++) {
      if (maskToken.matches[tndx].isQuantifier !== true) {
        const match = handleMatch(
          maskToken.matches[tndx],
          [tndx].concat(loopNdx),
          quantifierRecurse
        );
        if (match && testPos === pos) {
          return match;
        } else if (testPos > pos) {
          break;
        }
      }
    }
  }
  function IsMatchOf(tokenGroup, match) {
    let isMatch = tokenGroup.matches.indexOf(match) != -1;
    if (!isMatch) {
      tokenGroup.matches.forEach((mtch, ndx) => {
        if (mtch.matches !== void 0 && !isMatch) {
          isMatch = IsMatchOf(mtch, match);
        }
      });
    }
    return isMatch;
  }
  function mergeLocators(pos2, tests) {
    let locator = [], alternation;
    if (!Array.isArray(tests)) tests = [tests];
    if (tests.length > 0) {
      if (tests[0].alternation === void 0 || opts.keepStatic === true) {
        locator = determineTestTemplate.call(inputmask, pos2, tests.slice()).locator.slice();
        if (locator.length === 0) locator = tests[0].locator.slice();
      } else {
        tests.forEach(function(tst) {
          if (tst.def !== "") {
            if (locator.length === 0) {
              alternation = tst.alternation;
              locator = tst.locator.slice();
            } else {
              if (tst.locator[alternation] && locator[alternation].toString().indexOf(tst.locator[alternation]) === -1) {
                locator[alternation] += "," + tst.locator[alternation];
              }
            }
          }
        });
      }
    }
    return locator;
  }
  if (pos > -1) {
    if (ndxIntlzr === void 0) {
      let previousPos = pos - 1, test;
      while ((test = maskset.validPositions[previousPos] || maskset.tests[previousPos]) === void 0 && previousPos > -1) {
        previousPos--;
      }
      if (test !== void 0 && previousPos > -1) {
        ndxInitializer = mergeLocators(previousPos, test);
        cacheDependency = ndxInitializer.join("");
        testPos = previousPos;
      }
    }
    if (maskset.tests[pos] && maskset.tests[pos][0].cd === cacheDependency) {
      return maskset.tests[pos];
    }
    for (let mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
      const match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [
        mtndx
      ]);
      if (match && testPos === pos || testPos > pos) {
        break;
      }
    }
  }
  if (matches.length === 0 || insertStop) {
    matches.push({
      match: {
        fn: null,
        static: true,
        optionality: false,
        casing: null,
        def: "",
        placeholder: ""
      },
      // mark when there are unmatched alternations  ex: mask: "(a|aa)"
      // this will result in the least distance to select the correct test result in determineTestTemplate
      locator: unMatchedAlternation && matches.filter((tst) => tst.unMatchedAlternationStopped !== true).length === 0 ? [0] : [],
      mloc: {},
      cd: cacheDependency
    });
  }
  let result;
  if (ndxIntlzr !== void 0 && maskset.tests[pos]) {
    result = $.extend(true, [], matches);
  } else {
    maskset.tests[pos] = $.extend(true, [], matches);
    result = maskset.tests[pos];
  }
  matches.forEach((t) => {
    t.match.optionality = t.match.defOptionality || false;
  });
  return result;
}

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/validation.js
function alternate(maskPos, c, strict, fromIsValid, rAltPos, selection) {
  const inputmask = this, $ = this.dependencyLib, opts = this.opts, maskset = inputmask.maskset;
  if (!inputmask.hasAlternator) return false;
  let validPsClone = $.extend(true, [], maskset.validPositions), tstClone = $.extend(true, {}, maskset.tests), lastAlt, alternation, isValidRslt = false, returnRslt = false, altPos, prevAltPos, i, validPos, decisionPos, lAltPos = rAltPos !== void 0 ? rAltPos : getLastValidPosition.call(inputmask), nextPos, input, begin, end;
  if (selection) {
    begin = selection.begin;
    end = selection.end;
    if (selection.begin > selection.end) {
      begin = selection.end;
      end = selection.begin;
    }
  }
  if (lAltPos === -1 && rAltPos === void 0) {
    lastAlt = 0;
    prevAltPos = getTest.call(inputmask, lastAlt);
    alternation = prevAltPos.alternation;
  } else {
    for (; lAltPos >= 0; lAltPos--) {
      altPos = maskset.validPositions[lAltPos];
      if (altPos && altPos.alternation !== void 0) {
        if (lAltPos <= (maskPos || 0) && prevAltPos && prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) {
          break;
        }
        lastAlt = lAltPos;
        alternation = maskset.validPositions[lastAlt].alternation;
        prevAltPos = altPos;
      }
    }
  }
  if (alternation !== void 0) {
    decisionPos = parseInt(lastAlt);
    maskset.excludes[decisionPos] = maskset.excludes[decisionPos] || [];
    if (maskPos !== true) {
      maskset.excludes[decisionPos].push(
        getDecisionTaker(prevAltPos) + ":" + prevAltPos.alternation
      );
    }
    let validInputs = [], resultPos = -1;
    for (i = decisionPos; decisionPos < getLastValidPosition.call(inputmask, void 0, true) + 1; i++) {
      if (resultPos === -1 && maskPos <= i && c !== void 0) {
        validInputs.push(c);
        resultPos = validInputs.length - 1;
      }
      validPos = maskset.validPositions[decisionPos];
      if (validPos && validPos.generatedInput !== true && (selection === void 0 || i < begin || i >= end)) {
        validInputs.push(validPos.input);
      }
      maskset.validPositions.splice(decisionPos, 1);
    }
    if (resultPos === -1 && c !== void 0) {
      validInputs.push(c);
      resultPos = validInputs.length - 1;
    }
    while (maskset.excludes[decisionPos] !== void 0 && maskset.excludes[decisionPos].length < 10) {
      maskset.tests = {};
      resetMaskSet.call(inputmask, true);
      isValidRslt = true;
      for (i = 0; i < validInputs.length; i++) {
        nextPos = isValidRslt.caret || opts.insertMode == false && nextPos != void 0 ? seekNext.call(inputmask, nextPos) : getLastValidPosition.call(inputmask, void 0, true) + 1;
        input = validInputs[i];
        if (!(isValidRslt = isValid.call(
          inputmask,
          nextPos,
          input,
          false,
          fromIsValid,
          true
        ))) {
          break;
        }
        if (i === resultPos) {
          returnRslt = isValidRslt;
        }
        if (maskPos == true && isValidRslt) {
          returnRslt = { caretPos: i };
        }
      }
      if (!isValidRslt) {
        resetMaskSet.call(inputmask);
        prevAltPos = getTest.call(inputmask, decisionPos);
        maskset.validPositions = $.extend(true, [], validPsClone);
        maskset.tests = $.extend(true, {}, tstClone);
        if (maskset.excludes[decisionPos]) {
          if (prevAltPos.alternation != void 0) {
            const decisionTaker = getDecisionTaker(prevAltPos);
            if (maskset.excludes[decisionPos].indexOf(
              decisionTaker + ":" + prevAltPos.alternation
            ) !== -1) {
              returnRslt = alternate.call(
                inputmask,
                maskPos,
                c,
                strict,
                fromIsValid,
                decisionPos - 1,
                selection
              );
              break;
            }
            maskset.excludes[decisionPos].push(
              decisionTaker + ":" + prevAltPos.alternation
            );
            for (i = decisionPos; i < getLastValidPosition.call(inputmask, void 0, true) + 1; i++)
              maskset.validPositions.splice(decisionPos);
          } else delete maskset.excludes[decisionPos];
        } else {
          returnRslt = alternate.call(
            inputmask,
            maskPos,
            c,
            strict,
            fromIsValid,
            decisionPos - 1,
            selection
          );
          break;
        }
      } else {
        break;
      }
    }
  }
  if (!returnRslt || opts.keepStatic !== false) {
    delete maskset.excludes[decisionPos];
  }
  return returnRslt;
}
function casing(elem, test, pos) {
  const opts = this.opts, maskset = this.maskset;
  switch (opts.casing || test.casing) {
    case "upper":
      elem = elem.toUpperCase();
      break;
    case "lower":
      elem = elem.toLowerCase();
      break;
    case "title":
      var posBefore = maskset.validPositions[pos - 1];
      if (pos === 0 || posBefore && posBefore.input === String.fromCharCode(keyCode.Space)) {
        elem = elem.toUpperCase();
      } else {
        elem = elem.toLowerCase();
      }
      break;
    default:
      if (typeof opts.casing === "function") {
        const args = Array.prototype.slice.call(arguments);
        args.push(maskset.validPositions);
        elem = opts.casing.apply(this, args);
      }
  }
  return elem;
}
function checkAlternationMatch(altArr1, altArr2, na) {
  const opts = this.opts;
  let altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = false, naArr = na !== void 0 ? na.split(",") : [], naNdx;
  for (let i = 0; i < naArr.length; i++) {
    if ((naNdx = altArr1.indexOf(naArr[i])) !== -1) {
      altArr1.splice(naNdx, 1);
    }
  }
  for (let alndx = 0; alndx < altArr1.length; alndx++) {
    if (altArrC.includes(altArr1[alndx])) {
      isMatch = true;
      break;
    }
  }
  return isMatch;
}
function handleRemove(input, c, pos, strict, fromIsValid) {
  const inputmask = this, maskset = this.maskset, opts = this.opts;
  if (opts.numericInput || inputmask.isRTL) {
    if (c === keys.Backspace) {
      c = keys.Delete;
    } else if (c === keys.Delete) {
      c = keys.Backspace;
    }
    if (inputmask.isRTL) {
      const pend = pos.end;
      pos.end = pos.begin;
      pos.begin = pend;
    }
  }
  const lvp = getLastValidPosition.call(inputmask, void 0, true);
  if (pos.end >= getBuffer.call(inputmask).length && lvp >= pos.end) {
    pos.end = lvp + 1;
  }
  if (c === keys.Backspace) {
    if (pos.end - pos.begin < 1) {
      pos.begin = seekPrevious.call(inputmask, pos.begin);
    }
  } else if (c === keys.Delete) {
    if (pos.begin === pos.end) {
      pos.end = isMask.call(inputmask, pos.end, true, true) ? pos.end + 1 : seekNext.call(inputmask, pos.end) + 1;
    }
  }
  let offset;
  if ((offset = revalidateMask.call(inputmask, pos)) !== false) {
    if (strict !== true && opts.keepStatic !== false || opts.regex !== null && getTest.call(inputmask, pos.begin).match.def.indexOf("|") !== -1) {
      alternate.call(inputmask, true);
    }
    if (strict !== true) {
      maskset.p = c === keys.Delete ? pos.begin + offset : pos.begin;
      maskset.p = determineNewCaretPosition.call(
        inputmask,
        {
          begin: maskset.p,
          end: maskset.p
        },
        false,
        opts.insertMode === false && c === keys.Backspace ? "none" : void 0
      ).begin;
    }
  }
}
function isComplete(buffer) {
  const inputmask = this, opts = this.opts, maskset = this.maskset;
  if (typeof opts.isComplete === "function")
    return opts.isComplete(buffer, opts);
  if (opts.repeat === "*") return void 0;
  let complete = false, lrp = determineLastRequiredPosition.call(inputmask, true), aml = lrp.l;
  if (lrp.def === void 0 || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
    complete = true;
    for (let i = 0; i <= aml; i++) {
      const test = getTestTemplate.call(inputmask, i).match;
      if (test.static !== true && maskset.validPositions[i] === void 0 && (test.optionality === false || test.optionality === void 0 || test.optionality && test.newBlockMarker == false) && (test.optionalQuantifier === false || test.optionalQuantifier === void 0) || test.static === true && test.def != "" && buffer[i] !== getPlaceholder.call(inputmask, i, test)) {
        complete = false;
        break;
      }
    }
  }
  return complete;
}
function isSelection(posObj) {
  const inputmask = this, opts = this.opts, insertModeOffset = opts.insertMode ? 0 : 1;
  return inputmask.isRTL ? posObj.begin - posObj.end > insertModeOffset : posObj.end - posObj.begin > insertModeOffset;
}
function isValid(pos, c, strict, fromIsValid, fromAlternate, validateOnly, fromCheckval) {
  const inputmask = this, $ = this.dependencyLib, opts = this.opts, maskset = inputmask.maskset;
  strict = strict === true;
  let maskPos = pos;
  if (pos.begin !== void 0) {
    maskPos = inputmask.isRTL ? pos.end : pos.begin;
  }
  function processCommandObject(commandObj) {
    if (commandObj !== void 0) {
      if (commandObj.remove !== void 0) {
        if (!Array.isArray(commandObj.remove))
          commandObj.remove = [commandObj.remove];
        commandObj.remove.sort(function(a, b) {
          return inputmask.isRTL ? a.pos - b.pos : b.pos - a.pos;
        }).forEach(function(lmnt) {
          revalidateMask.call(inputmask, { begin: lmnt, end: lmnt + 1 });
        });
        commandObj.remove = void 0;
      }
      if (commandObj.insert !== void 0) {
        if (!Array.isArray(commandObj.insert))
          commandObj.insert = [commandObj.insert];
        commandObj.insert.sort(function(a, b) {
          return inputmask.isRTL ? b.pos - a.pos : a.pos - b.pos;
        }).forEach(function(lmnt) {
          if (lmnt.c !== "") {
            isValid.call(
              inputmask,
              lmnt.pos,
              lmnt.c,
              lmnt.strict !== void 0 ? lmnt.strict : true,
              lmnt.fromIsValid !== void 0 ? lmnt.fromIsValid : fromIsValid
            );
          }
        });
        commandObj.insert = void 0;
      }
      if (commandObj.refreshFromBuffer && commandObj.buffer) {
        const refresh = commandObj.refreshFromBuffer;
        refreshFromBuffer.call(
          inputmask,
          refresh === true ? refresh : refresh.start,
          refresh.end,
          commandObj.buffer
        );
        commandObj.refreshFromBuffer = void 0;
      }
      if (commandObj.rewritePosition !== void 0) {
        maskPos = commandObj.rewritePosition;
        commandObj = true;
      }
    }
    return commandObj;
  }
  function _isValid(position, c2, strict2) {
    let rslt = false;
    getTests.call(inputmask, position).every(function(tst, ndx) {
      const test = tst.match;
      getBuffer.call(inputmask, true);
      if (test.jit && maskset.validPositions[seekPrevious.call(inputmask, position)] === void 0) {
        rslt = false;
      } else {
        rslt = test.fn != null ? test.fn.test(
          c2,
          maskset,
          position,
          strict2,
          opts,
          isSelection.call(inputmask, pos)
        ) : (c2 === test.def || c2 === opts.skipOptionalPartCharacter) && test.def !== "" ? {
          c: getPlaceholder.call(inputmask, position, test, true) || test.def,
          pos: position
        } : false;
      }
      if (rslt !== false) {
        let elem = rslt.c !== void 0 ? rslt.c : c2, validatedPos = position;
        elem = elem === opts.skipOptionalPartCharacter && test.static === true ? getPlaceholder.call(inputmask, position, test, true) || test.def : elem;
        rslt = processCommandObject(rslt);
        if (rslt !== true && rslt.pos !== void 0 && rslt.pos !== position) {
          validatedPos = rslt.pos;
        }
        if (rslt !== true && rslt.pos === void 0 && rslt.c === void 0) {
          return false;
        }
        if (revalidateMask.call(
          inputmask,
          pos,
          $.extend({}, tst, {
            input: casing.call(inputmask, elem, test, validatedPos)
          }),
          fromIsValid,
          validatedPos
        ) === false) {
          rslt = false;
        }
        return false;
      }
      return true;
    });
    return rslt;
  }
  let result = true, positionsClone = $.extend(true, [], maskset.validPositions);
  if (opts.keepStatic === false && maskset.excludes[maskPos] !== void 0 && fromAlternate !== true && fromIsValid !== true) {
    for (let i = maskPos; i < (inputmask.isRTL ? pos.begin : pos.end); i++) {
      if (maskset.excludes[i] !== void 0) {
        maskset.excludes[i] = void 0;
        delete maskset.tests[i];
      }
    }
  }
  if (typeof opts.preValidation === "function" && fromIsValid !== true && validateOnly !== true) {
    result = opts.preValidation.call(
      inputmask,
      getBuffer.call(inputmask),
      maskPos,
      c,
      isSelection.call(inputmask, pos),
      opts,
      maskset,
      pos,
      strict || fromAlternate
    );
    result = processCommandObject(result);
  }
  if (result === true) {
    result = _isValid(maskPos, c, strict);
    if ((!strict || fromIsValid === true) && result === false && validateOnly !== true) {
      const currentPosValid = maskset.validPositions[maskPos];
      if (currentPosValid && currentPosValid.match.static === true && (currentPosValid.match.def === c || c === opts.skipOptionalPartCharacter)) {
        result = {
          caret: seekNext.call(inputmask, maskPos)
        };
      } else {
        if (opts.insertMode || maskset.validPositions[seekNext.call(inputmask, maskPos)] === void 0 || pos.end > maskPos) {
          let skip = false;
          if (maskset.jitOffset[maskPos] && maskset.validPositions[seekNext.call(inputmask, maskPos)] === void 0) {
            result = isValid.call(
              inputmask,
              maskPos + maskset.jitOffset[maskPos],
              c,
              true,
              true
            );
            if (result !== false) {
              if (fromAlternate !== true) result.caret = maskPos;
              skip = true;
            }
          }
          if (pos.end > maskPos) {
            maskset.validPositions[maskPos] = void 0;
          }
          if (!skip && !isMask.call(inputmask, maskPos, opts.keepStatic && maskPos === 0)) {
            for (let nPos = maskPos + 1, snPos = seekNext.call(inputmask, maskPos, false, maskPos !== 0); nPos <= snPos; nPos++) {
              result = _isValid(nPos, c, strict);
              if (result !== false) {
                result = trackbackPositions.call(
                  inputmask,
                  maskPos,
                  result.pos !== void 0 ? result.pos : nPos
                ) || result;
                maskPos = nPos;
                break;
              }
            }
          }
        }
      }
    }
    if (inputmask.hasAlternator && fromAlternate !== true && !strict) {
      fromAlternate = true;
      if (result === false && opts.keepStatic && (isComplete.call(inputmask, getBuffer.call(inputmask)) || maskPos === 0)) {
        result = alternate.call(
          inputmask,
          maskPos,
          c,
          strict,
          fromIsValid,
          void 0,
          pos
        );
      } else if (isSelection.call(inputmask, pos) && maskset.tests[maskPos] && maskset.tests[maskPos].length > 1 && opts.keepStatic) {
        result = alternate.call(inputmask, true);
      } else if (result === true && opts.numericInput !== true && maskset.tests[maskPos] && maskset.tests[maskPos].length > 1 && getLastValidPosition.call(inputmask, void 0, true) > maskPos) {
        result = alternate.call(inputmask, true);
      }
    }
    if (result === true) {
      result = {
        pos: maskPos
      };
    }
    if (typeof opts.postValidation === "function" && fromIsValid !== true && validateOnly !== true) {
      const postResult = opts.postValidation.call(
        inputmask,
        getBuffer.call(inputmask, true),
        pos.begin !== void 0 ? inputmask.isRTL ? pos.end : pos.begin : pos,
        c,
        result,
        opts,
        maskset,
        strict,
        fromCheckval,
        fromAlternate
      );
      if (postResult !== void 0) {
        result = postResult === true ? result : postResult;
      }
    }
  }
  if (result && result.pos === void 0) {
    result.pos = maskPos;
  }
  if (result === false || validateOnly === true) {
    resetMaskSet.call(inputmask, true);
    maskset.validPositions = $.extend(true, [], positionsClone);
  } else {
    trackbackPositions.call(inputmask, void 0, maskPos, true);
  }
  let endResult = processCommandObject(result);
  if (inputmask.maxLength !== void 0) {
    const buffer = getBuffer.call(inputmask);
    if (buffer.length > inputmask.maxLength && !fromIsValid) {
      resetMaskSet.call(inputmask, true);
      maskset.validPositions = $.extend(true, [], positionsClone);
      endResult = false;
    }
  }
  return endResult;
}
function positionCanMatchDefinition(pos, testDefinition, opts) {
  const inputmask = this, maskset = this.maskset;
  let valid = false, tests = getTests.call(inputmask, pos);
  for (let tndx = 0; tndx < tests.length; tndx++) {
    if (tests[tndx].match && (tests[tndx].match.nativeDef === testDefinition.match[opts.shiftPositions ? "def" : "nativeDef"] && (!opts.shiftPositions || !testDefinition.match.static) || tests[tndx].match.nativeDef === testDefinition.match.nativeDef || opts.regex && !tests[tndx].match.static && tests[tndx].match.fn.test(
      testDefinition.input,
      maskset,
      pos,
      false,
      opts
    ))) {
      valid = true;
      break;
    } else if (tests[tndx].match && tests[tndx].match.def === testDefinition.match.nativeDef) {
      valid = void 0;
      break;
    }
  }
  if (valid === false) {
    if (maskset.jitOffset[pos] !== void 0) {
      valid = positionCanMatchDefinition.call(
        inputmask,
        pos + maskset.jitOffset[pos],
        testDefinition,
        opts
      );
    }
  }
  return valid;
}
function refreshFromBuffer(start, end, buffer) {
  const inputmask = this, maskset = this.maskset, opts = this.opts, $ = this.dependencyLib;
  let i, p, skipOptionalPartCharacter = opts.skipOptionalPartCharacter, bffr = inputmask.isRTL ? buffer.slice().reverse() : buffer;
  opts.skipOptionalPartCharacter = "";
  if (start === true) {
    resetMaskSet.call(inputmask, false);
    start = 0;
    end = buffer.length;
    p = determineNewCaretPosition.call(
      inputmask,
      { begin: 0, end: 0 },
      false
    ).begin;
  } else {
    for (i = start; i < end; i++) {
      maskset.validPositions.splice(start, 0);
    }
    p = start;
  }
  const keypress = new $.Event("keypress");
  for (i = start; i < end; i++) {
    keypress.key = bffr[i].toString();
    inputmask.ignorable = false;
    const valResult = EventHandlers.keypressEvent.call(
      inputmask,
      keypress,
      true,
      false,
      false,
      p
    );
    if (valResult !== false && valResult !== void 0) {
      p = valResult.forwardPosition;
    }
  }
  opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
}
function trackbackPositions(originalPos, newPos, fillOnly) {
  const inputmask = this, maskset = this.maskset, $ = this.dependencyLib;
  if (originalPos === void 0) {
    for (originalPos = newPos - 1; originalPos > 0; originalPos--) {
      if (maskset.validPositions[originalPos]) break;
    }
  }
  for (let ps = originalPos; ps < newPos; ps++) {
    if (maskset.validPositions[ps] === void 0 && !isMask.call(inputmask, ps, false)) {
      const vp = ps == 0 ? getTest.call(inputmask, ps) : maskset.validPositions[ps - 1];
      if (vp) {
        const tests = getTests.call(inputmask, ps).slice();
        if (tests[tests.length - 1].match.def === "") tests.pop();
        var bestMatch = determineTestTemplate.call(inputmask, ps, tests), np;
        if (bestMatch && (bestMatch.match.jit !== true || bestMatch.match.newBlockMarker === "master" && (np = maskset.validPositions[ps + 1]) && np.match.optionalQuantifier === true)) {
          bestMatch = $.extend({}, bestMatch, {
            input: getPlaceholder.call(inputmask, ps, bestMatch.match, true) || bestMatch.match.def
          });
          bestMatch.generatedInput = true;
          revalidateMask.call(inputmask, ps, bestMatch, true);
          if (fillOnly !== true) {
            const cvpInput = maskset.validPositions[newPos].input;
            maskset.validPositions[newPos] = void 0;
            return isValid.call(inputmask, newPos, cvpInput, true, true);
          }
        }
      }
    }
  }
}
function revalidateMask(pos, validTest, fromIsValid, validatedPos) {
  const inputmask = this, maskset = this.maskset, opts = this.opts, $ = this.dependencyLib;
  function IsEnclosedStatic(pos2, valids, selection) {
    const posMatch = valids[pos2];
    if (posMatch !== void 0 && posMatch.match.static === true && posMatch.match.optionality !== true && (valids[0] === void 0 || valids[0].alternation === void 0)) {
      const prevMatch = selection.begin <= pos2 - 1 ? valids[pos2 - 1] && valids[pos2 - 1].match.static === true && valids[pos2 - 1] : valids[pos2 - 1], nextMatch = selection.end > pos2 + 1 ? valids[pos2 + 1] && valids[pos2 + 1].match.static === true && valids[pos2 + 1] : valids[pos2 + 1];
      return prevMatch && nextMatch;
    }
    return false;
  }
  let offset = 0, begin = pos.begin !== void 0 ? pos.begin : pos, end = pos.end !== void 0 ? pos.end : pos, valid = true;
  if (pos.begin > pos.end) {
    begin = pos.end;
    end = pos.begin;
  }
  validatedPos = validatedPos !== void 0 ? validatedPos : begin;
  if (fromIsValid === void 0 && (begin !== end || opts.insertMode && maskset.validPositions[validatedPos] !== void 0 || validTest === void 0 || validTest.match.optionalQuantifier || validTest.match.optionality)) {
    let positionsClone = $.extend(true, [], maskset.validPositions), lvp = getLastValidPosition.call(inputmask, void 0, true), i;
    maskset.p = begin;
    const clearpos = isSelection.call(inputmask, pos) ? begin : validatedPos;
    for (i = lvp; i >= clearpos; i--) {
      maskset.validPositions.splice(i, 1);
      if (validTest === void 0) delete maskset.tests[i + 1];
    }
    let j = validatedPos, posMatch = j, t, canMatch, test;
    if (validTest) {
      maskset.validPositions[validatedPos] = $.extend(true, {}, validTest);
      posMatch++;
      j++;
    }
    if (positionsClone[end] == void 0 && maskset.jitOffset[end]) {
      end += maskset.jitOffset[end] + 1;
    }
    for (i = validTest ? end : end - 1; i <= lvp; i++) {
      if ((t = positionsClone[i]) !== void 0 && t.generatedInput !== true && (i >= end || i >= begin && IsEnclosedStatic(i, positionsClone, {
        begin,
        end
      }))) {
        while (test = getTest.call(inputmask, posMatch), test.match.def !== "") {
          if ((canMatch = positionCanMatchDefinition.call(
            inputmask,
            posMatch,
            t,
            opts
          )) !== false || t.match.def === "+") {
            if (t.match.def === "+") getBuffer.call(inputmask, true);
            const result = isValid.call(
              inputmask,
              posMatch,
              t.input,
              t.match.def !== "+",
              /* t.match.def !== "+" */
              true
            );
            valid = result !== false;
            j = (result.pos || posMatch) + 1;
            if (!valid && canMatch) break;
          } else {
            valid = false;
          }
          if (valid) {
            if (validTest === void 0 && t.match.static && i === pos.begin)
              offset++;
            break;
          }
          if (!valid && getBuffer.call(inputmask), posMatch > maskset.maskLength) {
            break;
          }
          posMatch++;
        }
        if (getTest.call(inputmask, posMatch).match.def == "") {
          valid = false;
        }
        posMatch = j;
      }
      if (!valid) break;
    }
    if (!valid) {
      maskset.validPositions = $.extend(true, [], positionsClone);
      resetMaskSet.call(inputmask, true);
      return false;
    }
  } else if (validTest && getTest.call(inputmask, validatedPos).match.cd === validTest.match.cd) {
    maskset.validPositions[validatedPos] = $.extend(true, {}, validTest);
  }
  resetMaskSet.call(inputmask, true);
  return offset;
}

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/positioning.js
function caret(input, begin, end, notranslate, isDelete) {
  const inputmask = this, opts = this.opts;
  let range;
  if (begin !== void 0) {
    if (Array.isArray(begin)) {
      end = inputmask.isRTL ? begin[0] : begin[1];
      begin = inputmask.isRTL ? begin[1] : begin[0];
    }
    if (begin.begin !== void 0) {
      end = inputmask.isRTL ? begin.begin : begin.end;
      begin = inputmask.isRTL ? begin.end : begin.begin;
    }
    if (typeof begin === "number") {
      begin = notranslate ? begin : translatePosition.call(inputmask, begin);
      end = notranslate ? end : translatePosition.call(inputmask, end);
      end = typeof end === "number" ? end : begin;
      const scrollCalc = parseInt(
        ((input.ownerDocument.defaultView || window_default).getComputedStyle ? (input.ownerDocument.defaultView || window_default).getComputedStyle(
          input,
          null
        ) : input.currentStyle).fontSize
      ) * end;
      input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0;
      input.inputmask.caretPos = { begin, end };
      if (opts.insertModeVisual && opts.insertMode === false && begin === end) {
        if (!isDelete) {
          end++;
        }
      }
      if (input === (input.inputmask.shadowRoot || input.ownerDocument).activeElement) {
        if ("setSelectionRange" in input) {
          input.setSelectionRange(begin, end);
        } else if (window_default.getSelection) {
          range = document.createRange();
          if (input.firstChild === void 0 || input.firstChild === null) {
            const textNode = document.createTextNode("");
            input.appendChild(textNode);
          }
          range.setStart(
            input.firstChild,
            begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length
          );
          range.setEnd(
            input.firstChild,
            end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length
          );
          range.collapse(true);
          const sel = window_default.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        } else if (input.createTextRange) {
          range = input.createTextRange();
          range.collapse(true);
          range.moveEnd("character", end);
          range.moveStart("character", begin);
          range.select();
        }
        input.inputmask.caretHook === void 0 || input.inputmask.caretHook.call(inputmask, { begin, end });
      }
    }
  } else {
    if ("selectionStart" in input && "selectionEnd" in input) {
      begin = input.selectionStart;
      end = input.selectionEnd;
    } else if (window_default.getSelection) {
      range = window_default.getSelection().getRangeAt(0);
      if (range.commonAncestorContainer.parentNode === input || range.commonAncestorContainer === input) {
        begin = range.startOffset;
        end = range.endOffset;
      }
    } else if (document.selection && document.selection.createRange) {
      range = document.selection.createRange();
      begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length);
      end = begin + range.text.length;
    }
    return {
      begin: notranslate ? begin : translatePosition.call(inputmask, begin),
      end: notranslate ? end : translatePosition.call(inputmask, end)
    };
  }
}
function determineLastRequiredPosition(returnDefinition) {
  const inputmask = this, { maskset, dependencyLib: $ } = inputmask, lvp = getLastValidPosition.call(inputmask), positions = {}, lvTest = maskset.validPositions[lvp], buffer = getMaskTemplate.call(
    inputmask,
    true,
    getLastValidPosition.call(inputmask),
    true,
    true
  );
  let bl = buffer.length, pos, ndxIntlzr = lvTest !== void 0 ? lvTest.locator.slice() : void 0, testPos;
  for (pos = lvp + 1; pos < buffer.length; pos++) {
    testPos = getTestTemplate.call(inputmask, pos, ndxIntlzr, pos - 1);
    ndxIntlzr = testPos.locator.slice();
    positions[pos] = $.extend(true, {}, testPos);
  }
  const lvTestAlt = lvTest && lvTest.alternation !== void 0 ? lvTest.locator[lvTest.alternation] : void 0;
  for (pos = bl - 1; pos > lvp; pos--) {
    testPos = positions[pos];
    if ((testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && testPos.match.static !== true || testPos.match.static === true && testPos.locator[lvTest.alternation] && checkAlternationMatch.call(
      inputmask,
      testPos.locator[lvTest.alternation].toString().split(","),
      lvTestAlt.toString().split(",")
    ) && getTests.call(inputmask, pos)[0].def !== "")) && buffer[pos] === getPlaceholder.call(inputmask, pos, testPos.match)) {
      bl--;
    } else {
      break;
    }
  }
  return returnDefinition ? {
    l: bl,
    def: positions[bl] ? positions[bl].match : void 0
  } : bl;
}
function determineNewCaretPosition(selectedCaret, tabbed, positionCaretOnClick) {
  const inputmask = this, { maskset, opts } = inputmask;
  let clickPosition, lvclickPosition, lastPosition;
  function doRadixFocus(clickPos) {
    if (opts.radixPoint !== "" && opts.digits !== 0) {
      const vps = maskset.validPositions;
      if (vps[clickPos] === void 0 || vps[clickPos].input === void 0) {
        if (clickPos < seekNext.call(inputmask, -1)) return true;
        const radixPos = getBuffer.call(inputmask).indexOf(opts.radixPoint);
        if (radixPos !== -1) {
          for (let vp = 0, vpl = vps.length; vp < vpl; vp++) {
            if (vps[vp] && radixPos < vp && vps[vp].input !== getPlaceholder.call(inputmask, vp)) {
              return false;
            }
          }
          return true;
        }
      }
    }
    return false;
  }
  if (tabbed) {
    if (inputmask.isRTL) {
      selectedCaret.end = selectedCaret.begin;
    } else {
      selectedCaret.begin = selectedCaret.end;
    }
  }
  if (selectedCaret.begin === selectedCaret.end) {
    positionCaretOnClick = positionCaretOnClick || opts.positionCaretOnClick;
    switch (positionCaretOnClick) {
      case "none":
        break;
      case "select":
        selectedCaret = { begin: 0, end: getBuffer.call(inputmask).length };
        break;
      case "ignore":
        selectedCaret.end = selectedCaret.begin = seekNext.call(
          inputmask,
          getLastValidPosition.call(inputmask)
        );
        break;
      case "radixFocus":
        if (inputmask.clicked > 1 && maskset.validPositions.length === 0) break;
        if (doRadixFocus(selectedCaret.begin)) {
          const radixPos = getBuffer.call(inputmask).join("").indexOf(opts.radixPoint);
          selectedCaret.end = selectedCaret.begin = opts.numericInput ? seekNext.call(inputmask, radixPos) : radixPos;
          break;
        }
      // fallback to lvp
      // eslint-disable-next-line no-fallthrough
      default:
        clickPosition = selectedCaret.begin;
        lvclickPosition = getLastValidPosition.call(
          inputmask,
          clickPosition,
          true
        );
        lastPosition = seekNext.call(
          inputmask,
          lvclickPosition === -1 && !isMask.call(inputmask, 0) ? -1 : lvclickPosition
        );
        if (clickPosition <= lastPosition) {
          selectedCaret.end = selectedCaret.begin = !isMask.call(
            inputmask,
            clickPosition,
            false,
            true
          ) ? seekNext.call(inputmask, clickPosition) : clickPosition;
        } else {
          const lvp = maskset.validPositions[lvclickPosition], tt = getTestTemplate.call(
            inputmask,
            lastPosition,
            lvp ? lvp.match.locator : void 0,
            lvp
          ), placeholder = getPlaceholder.call(
            inputmask,
            lastPosition,
            tt.match
          );
          if (placeholder !== "" && getBuffer.call(inputmask)[lastPosition] !== placeholder && tt.match.optionalQuantifier !== true && tt.match.newBlockMarker !== true || !isMask.call(inputmask, lastPosition, opts.keepStatic, true) && tt.match.def === placeholder) {
            const newPos = seekNext.call(inputmask, lastPosition);
            if (clickPosition >= newPos || clickPosition === lastPosition) {
              lastPosition = newPos;
            }
          }
          selectedCaret.end = selectedCaret.begin = lastPosition;
        }
    }
    return selectedCaret;
  }
}
function getBuffer(noCache) {
  const inputmask = this, { maskset } = inputmask;
  if (maskset.buffer === void 0 || noCache === true) {
    maskset.buffer = getMaskTemplate.call(
      inputmask,
      true,
      getLastValidPosition.call(inputmask),
      true
    );
    if (maskset._buffer === void 0) maskset._buffer = maskset.buffer.slice();
  }
  return maskset.buffer;
}
function getBufferTemplate() {
  const inputmask = this, maskset = this.maskset;
  if (maskset._buffer === void 0) {
    maskset._buffer = getMaskTemplate.call(inputmask, false, 1);
    if (maskset.buffer === void 0) maskset.buffer = maskset._buffer.slice();
  }
  return maskset._buffer;
}
function getLastValidPosition(closestTo, strict, validPositions) {
  const maskset = this.maskset;
  let before = -1, after = -1;
  const valids = validPositions || maskset.validPositions;
  if (closestTo === void 0) closestTo = -1;
  for (let psNdx = 0, vpl = valids.length; psNdx < vpl; psNdx++) {
    if (valids[psNdx] && (strict || valids[psNdx].generatedInput !== true)) {
      if (psNdx <= closestTo) before = psNdx;
      if (psNdx >= closestTo) after = psNdx;
    }
  }
  return before === -1 || before === closestTo ? after : after === -1 ? before : closestTo - before < after - closestTo ? before : after;
}
function isMask(pos, strict, fuzzy) {
  const inputmask = this, maskset = this.maskset;
  let test = getTestTemplate.call(inputmask, pos).match;
  if (test.def === "") test = getTest.call(inputmask, pos).match;
  if (test.static !== true) {
    return test.fn;
  }
  if (fuzzy === true && maskset.validPositions[pos] !== void 0 && maskset.validPositions[pos].generatedInput !== true) {
    return true;
  }
  if (strict !== true && pos > -1) {
    if (fuzzy) {
      const tests = getTests.call(inputmask, pos);
      return tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0);
    }
    const testTemplate = determineTestTemplate.call(
      inputmask,
      pos,
      getTests.call(inputmask, pos)
    ), testPlaceHolder = getPlaceholder.call(inputmask, pos, testTemplate.match);
    return testTemplate.match.def !== testPlaceHolder;
  }
  return false;
}
function resetMaskSet(soft) {
  const maskset = this.maskset;
  maskset.buffer = void 0;
  if (soft !== true) {
    maskset.validPositions = [];
    maskset.p = 0;
  }
  if (soft === false) {
    maskset.tests = {};
    maskset.jitOffset = {};
  }
}
function seekNext(pos, newBlock, fuzzy) {
  const inputmask = this;
  if (fuzzy === void 0) fuzzy = true;
  let position = pos + 1;
  while (getTest.call(inputmask, position).match.def !== "" && (newBlock === true && (getTest.call(inputmask, position).match.newBlockMarker !== true || !isMask.call(inputmask, position, void 0, true)) || newBlock !== true && !isMask.call(inputmask, position, void 0, fuzzy))) {
    position++;
  }
  return position;
}
function seekPrevious(pos, newBlock) {
  const inputmask = this;
  let position = pos - 1;
  if (pos <= 0) return 0;
  while (position > 0 && (newBlock === true && (getTest.call(inputmask, position).match.newBlockMarker !== true || !isMask.call(inputmask, position, void 0, true)) || newBlock !== true && !isMask.call(inputmask, position, void 0, true))) {
    position--;
  }
  return position;
}
function translatePosition(pos) {
  const inputmask = this, opts = this.opts, el = this.el;
  if (inputmask.isRTL && typeof pos === "number" && (!opts.greedy || opts.placeholder !== "") && el) {
    pos = inputmask._valueGet().length - pos;
    if (pos < 0) pos = 0;
  }
  return pos;
}

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/eventhandlers.js
var EventHandlers = {
  keyEvent: function(e, checkval, writeOut, strict, ndx) {
    const inputmask = this.inputmask, opts = inputmask.opts, $ = inputmask.dependencyLib, maskset = inputmask.maskset, input = this, $input = $(input), c = e.key, pos = caret.call(inputmask, input), kdResult = opts.onKeyDown.call(
      this,
      e,
      getBuffer.call(inputmask),
      pos,
      opts
    );
    if (kdResult !== void 0) return kdResult;
    if (c === keys.Backspace || c === keys.Delete || iphone && c === keys.BACKSPACE_SAFARI || e.ctrlKey && c === keys.x && !("oncut" in input)) {
      e.preventDefault();
      handleRemove.call(inputmask, input, c, pos);
      writeBuffer(
        input,
        getBuffer.call(inputmask, true),
        maskset.p,
        e,
        input.inputmask._valueGet() !== getBuffer.call(inputmask).join("")
      );
    } else if (c === keys.End || c === keys.PageDown) {
      e.preventDefault();
      const caretPos = seekNext.call(
        inputmask,
        getLastValidPosition.call(inputmask)
      );
      caret.call(
        inputmask,
        input,
        e.shiftKey ? pos.begin : caretPos,
        caretPos,
        true
      );
    } else if (c === keys.Home && !e.shiftKey || c === keys.PageUp) {
      e.preventDefault();
      caret.call(inputmask, input, 0, e.shiftKey ? pos.begin : 0, true);
    } else if ((opts.undoOnEscape && c === keys.Escape || false) && e.altKey !== true) {
      checkVal(input, true, false, inputmask.undoValue.split(""));
      $input.trigger("click");
    } else if (c === keys.Insert && !(e.shiftKey || e.ctrlKey) && inputmask.userOptions.insertMode === void 0) {
      if (!isSelection.call(inputmask, pos)) {
        opts.insertMode = !opts.insertMode;
        caret.call(inputmask, input, pos.begin, pos.begin);
      } else opts.insertMode = !opts.insertMode;
    } else if (opts.tabThrough === true && c === keys.Tab) {
      if (e.shiftKey === true) {
        pos.end = seekPrevious.call(inputmask, pos.end, true);
        if (getTest.call(inputmask, pos.end - 1).match.static === true) {
          pos.end--;
        }
        pos.begin = seekPrevious.call(inputmask, pos.end, true);
        if (pos.begin >= 0 && pos.end > 0) {
          e.preventDefault();
          caret.call(inputmask, input, pos.begin, pos.end);
        }
      } else {
        pos.begin = seekNext.call(inputmask, pos.begin, true);
        pos.end = seekNext.call(inputmask, pos.begin, true);
        if (pos.end < maskset.maskLength) pos.end--;
        if (pos.begin <= maskset.maskLength) {
          e.preventDefault();
          caret.call(inputmask, input, pos.begin, pos.end);
        }
      }
    } else if (!e.shiftKey) {
      if (opts.insertModeVisual && opts.insertMode === false) {
        if (c === keys.ArrowRight) {
          setTimeout(function() {
            const caretPos = caret.call(inputmask, input);
            caret.call(inputmask, input, caretPos.begin);
          }, 0);
        } else if (c === keys.ArrowLeft) {
          setTimeout(function() {
            const caretPos = {
              begin: translatePosition.call(
                inputmask,
                input.inputmask.caretPos.begin
              ),
              end: translatePosition.call(
                inputmask,
                input.inputmask.caretPos.end
              )
            };
            if (inputmask.isRTL) {
              caret.call(
                inputmask,
                input,
                caretPos.begin + (caretPos.begin === maskset.maskLength ? 0 : 1)
              );
            } else {
              caret.call(
                inputmask,
                input,
                caretPos.begin - (caretPos.begin === 0 ? 0 : 1)
              );
            }
          }, 0);
        }
      } else {
        inputmask.keyEventHook === void 0 || inputmask.keyEventHook(e);
      }
    }
    inputmask.isComposing = c == keys.Process || c == keys.Unidentified;
    inputmask.ignorable = c === void 0 || c.length > 1 && !(input.tagName.toLowerCase() === "textarea" && c == keys.Enter);
    return EventHandlers.keypressEvent.call(
      this,
      e,
      checkval,
      writeOut,
      strict,
      ndx
    );
  },
  keypressEvent: function(e, checkval, writeOut, strict, ndx) {
    const inputmask = this.inputmask || this, opts = inputmask.opts, $ = inputmask.dependencyLib, maskset = inputmask.maskset;
    let input = inputmask.el, $input = $(input), c = e.key;
    if (checkval !== true && !(e.ctrlKey && e.altKey && !inputmask.ignorable) && (e.ctrlKey || e.metaKey || inputmask.ignorable)) {
      if (c === keys.Enter) {
        if (inputmask.undoValue !== inputmask._valueGet(true)) {
          inputmask.undoValue = inputmask._valueGet(true);
          setTimeout(function() {
            $input.trigger("change");
          }, 0);
        }
      }
    } else if (c) {
      let pos = checkval ? {
        begin: ndx,
        end: ndx
      } : caret.call(inputmask, input), forwardPosition;
      if (!checkval) c = opts.substitutes[c] || c;
      maskset.writeOutBuffer = true;
      const valResult = isValid.call(
        inputmask,
        pos,
        c,
        strict,
        void 0,
        void 0,
        void 0,
        checkval
      );
      if (valResult !== false) {
        resetMaskSet.call(inputmask, true);
        forwardPosition = valResult.caret !== void 0 ? valResult.caret : seekNext.call(
          inputmask,
          valResult.pos.begin ? valResult.pos.begin : valResult.pos
        );
        maskset.p = forwardPosition;
      }
      forwardPosition = opts.numericInput && valResult.caret === void 0 ? seekPrevious.call(inputmask, forwardPosition) : forwardPosition;
      if (writeOut !== false) {
        setTimeout(function() {
          opts.onKeyValidation.call(input, c, valResult);
        }, 0);
        if (maskset.writeOutBuffer && valResult !== false) {
          const buffer = getBuffer.call(inputmask);
          writeBuffer(input, buffer, forwardPosition, e, checkval !== true);
        }
      }
      e.preventDefault();
      if (checkval) {
        if (valResult !== false) valResult.forwardPosition = forwardPosition;
        return valResult;
      }
    }
  },
  pasteEvent: function(e) {
    return __async(this, null, function* () {
      function handlePaste(inputmask2, input2, inputValue2, pastedValue2, onBeforePaste) {
        let caretPos = caret.call(inputmask2, input2, void 0, void 0, true), valueBeforeCaret = inputValue2.substr(0, caretPos.begin), valueAfterCaret = inputValue2.substr(caretPos.end, inputValue2.length);
        if (valueBeforeCaret == (inputmask2.isRTL ? getBufferTemplate.call(inputmask2).slice().reverse() : getBufferTemplate.call(inputmask2)).slice(0, caretPos.begin).join(""))
          valueBeforeCaret = "";
        if (valueAfterCaret == (inputmask2.isRTL ? getBufferTemplate.call(inputmask2).slice().reverse() : getBufferTemplate.call(inputmask2)).slice(caretPos.end).join(""))
          valueAfterCaret = "";
        pastedValue2 = valueBeforeCaret + pastedValue2 + valueAfterCaret;
        if (inputmask2.isRTL && opts.numericInput !== true) {
          pastedValue2 = pastedValue2.split("");
          for (const c of getBufferTemplate.call(inputmask2)) {
            if (pastedValue2[0] === c) pastedValue2.shift();
          }
          pastedValue2 = pastedValue2.reverse().join("");
        }
        let pasteValue = pastedValue2;
        if (typeof onBeforePaste === "function") {
          pasteValue = onBeforePaste.call(inputmask2, pasteValue, opts);
          if (pasteValue === false) {
            return false;
          }
          if (!pasteValue) {
            pasteValue = inputValue2;
          }
        }
        checkVal(input2, true, false, pasteValue.toString().split(""), e);
      }
      const input = this, inputmask = this.inputmask, opts = inputmask.opts;
      let inputValue = inputmask._valueGet(true), pastedValue;
      inputmask.skipInputEvent = true;
      if (e.clipboardData && e.clipboardData.getData) {
        pastedValue = e.clipboardData.getData("text/plain");
      } else if (window_default.clipboardData && window_default.clipboardData.getData) {
        pastedValue = window_default.clipboardData.getData("Text");
      }
      handlePaste(inputmask, input, inputValue, pastedValue, opts.onBeforePaste);
      e.preventDefault();
    });
  },
  inputFallBackEvent: function(e) {
    const inputmask = this.inputmask, opts = inputmask.opts, $ = inputmask.dependencyLib;
    function analyseChanges(inputValue2, buffer2, caretPos2) {
      let frontPart = inputValue2.substr(0, caretPos2.begin).split(""), backPart = inputValue2.substr(caretPos2.begin).split(""), frontBufferPart = buffer2.substr(0, caretPos2.begin).split(""), backBufferPart = buffer2.substr(caretPos2.begin).split(""), fpl = frontPart.length >= frontBufferPart.length ? frontPart.length : frontBufferPart.length, bpl = backPart.length >= backBufferPart.length ? backPart.length : backBufferPart.length, bl, i, action = "", data = [], marker = "~", placeholder;
      while (frontPart.length < fpl) frontPart.push(marker);
      while (frontBufferPart.length < fpl) frontBufferPart.push(marker);
      while (backPart.length < bpl) backPart.unshift(marker);
      while (backBufferPart.length < bpl) backBufferPart.unshift(marker);
      const newBuffer = frontPart.concat(backPart), oldBuffer = frontBufferPart.concat(backBufferPart);
      for (i = 0, bl = newBuffer.length; i < bl; i++) {
        placeholder = getPlaceholder.call(
          inputmask,
          translatePosition.call(inputmask, i)
        );
        switch (action) {
          case "insertText":
            if (oldBuffer[i - 1] === newBuffer[i] && caretPos2.begin == newBuffer.length - 1) {
              data.push(newBuffer[i]);
            }
            i = bl;
            break;
          case "insertReplacementText":
            if (newBuffer[i] === marker) {
              caretPos2.end++;
            } else {
              i = bl;
            }
            break;
          case "deleteContentBackward":
            if (newBuffer[i] === marker) {
              caretPos2.end++;
            } else {
              i = bl;
            }
            break;
          default:
            if (newBuffer[i] !== oldBuffer[i]) {
              if ((newBuffer[i + 1] === marker || newBuffer[i + 1] === placeholder || newBuffer[i + 1] === void 0) && (oldBuffer[i] === placeholder && oldBuffer[i + 1] === marker || oldBuffer[i] === marker)) {
                action = "insertText";
                data.push(newBuffer[i]);
                caretPos2.begin--;
                caretPos2.end--;
              } else if (oldBuffer[i + 1] === marker && oldBuffer[i] === newBuffer[i + 1]) {
                action = "insertText";
                data.push(newBuffer[i]);
                caretPos2.begin--;
                caretPos2.end--;
              } else if (newBuffer[i] !== placeholder && newBuffer[i] !== marker && (newBuffer[i + 1] === marker || oldBuffer[i] !== newBuffer[i] && oldBuffer[i + 1] === newBuffer[i + 1])) {
                action = "insertReplacementText";
                data.push(newBuffer[i]);
                caretPos2.begin--;
              } else if (newBuffer[i] === marker) {
                action = "deleteContentBackward";
                if (isMask.call(
                  inputmask,
                  translatePosition.call(inputmask, i),
                  true
                ) || oldBuffer[i] === opts.radixPoint)
                  caretPos2.end++;
              } else {
                i = bl;
              }
            }
            break;
        }
      }
      return {
        action,
        data,
        caret: caretPos2
      };
    }
    let input = this, inputValue = input.inputmask._valueGet(true), buffer = (inputmask.isRTL ? getBuffer.call(inputmask).slice().reverse() : getBuffer.call(inputmask)).join(""), caretPos = caret.call(inputmask, input, void 0, void 0, true), changes;
    if (buffer !== inputValue) {
      changes = analyseChanges(inputValue, buffer, caretPos);
      if ((input.inputmask.shadowRoot || input.ownerDocument).activeElement !== input) {
        input.focus();
      }
      writeBuffer(input, getBuffer.call(inputmask));
      caret.call(inputmask, input, caretPos.begin, caretPos.end, true);
      if (!mobile && inputmask.skipNextInsert && e.inputType === "insertText" && changes.action === "insertText" && inputmask.isComposing) {
        return false;
      }
      if (e.inputType === "insertCompositionText" && changes.action === "insertText" && inputmask.isComposing) {
        inputmask.skipNextInsert = true;
      } else {
        inputmask.skipNextInsert = false;
      }
      switch (changes.action) {
        case "insertText":
        case "insertReplacementText":
          changes.data.forEach(function(entry, ndx) {
            const keypress = new $.Event("keypress");
            keypress.key = entry;
            inputmask.ignorable = false;
            EventHandlers.keypressEvent.call(input, keypress);
          });
          setTimeout(function() {
            inputmask.$el.trigger("keyup");
          }, 0);
          break;
        case "deleteContentBackward":
          var keydown = new $.Event("keydown");
          keydown.key = keys.Backspace;
          EventHandlers.keyEvent.call(input, keydown);
          break;
        default:
          applyInputValue(input, inputValue);
          caret.call(inputmask, input, caretPos.begin, caretPos.end, true);
          break;
      }
      e.preventDefault();
    }
  },
  setValueEvent: function(e) {
    const inputmask = this.inputmask, $ = inputmask.dependencyLib;
    let input = this, value = e && e.detail ? e.detail[0] : arguments[1];
    if (value === void 0) {
      value = input.inputmask._valueGet(true);
    }
    applyInputValue(
      input,
      value,
      new $.Event("input"),
      (e && e.detail ? e.detail[0] : arguments[1]) !== void 0
    );
    if (e.detail && e.detail[1] !== void 0 || arguments[2] !== void 0) {
      caret.call(inputmask, input, e.detail ? e.detail[1] : arguments[2]);
    }
  },
  focusEvent: function(e) {
    const inputmask = this.inputmask, opts = inputmask.opts, input = this, nptValue = inputmask && inputmask._valueGet();
    if (opts.showMaskOnFocus) {
      if (nptValue !== getBuffer.call(inputmask).join("")) {
        writeBuffer(
          input,
          getBuffer.call(inputmask),
          seekNext.call(inputmask, getLastValidPosition.call(inputmask))
        );
      }
    }
    if (opts.positionCaretOnTab === true && inputmask.mouseEnter === false && (!isComplete.call(inputmask, getBuffer.call(inputmask)) || getLastValidPosition.call(inputmask) === -1)) {
      EventHandlers.clickEvent.apply(input, [e, true]);
    }
    inputmask.undoValue = inputmask && inputmask._valueGet(true);
  },
  invalidEvent: function(e) {
    this.inputmask.validationEvent = true;
  },
  mouseleaveEvent: function() {
    const inputmask = this.inputmask, opts = inputmask.opts, input = this;
    inputmask.mouseEnter = false;
    if (opts.clearMaskOnLostFocus && (input.inputmask.shadowRoot || input.ownerDocument).activeElement !== input) {
      HandleNativePlaceholder(input, inputmask.originalPlaceholder);
    }
  },
  clickEvent: function(e, tabbed) {
    const inputmask = this.inputmask;
    inputmask.clicked++;
    const input = this;
    if ((input.inputmask.shadowRoot || input.ownerDocument).activeElement === input) {
      const newCaretPosition = determineNewCaretPosition.call(
        inputmask,
        caret.call(inputmask, input),
        tabbed
      );
      if (newCaretPosition !== void 0) {
        caret.call(inputmask, input, newCaretPosition);
      }
    }
  },
  cutEvent: function(e) {
    const inputmask = this.inputmask, maskset = inputmask.maskset, input = this, pos = caret.call(inputmask, input), clipData = inputmask.isRTL ? getBuffer.call(inputmask).slice(pos.end, pos.begin) : getBuffer.call(inputmask).slice(pos.begin, pos.end), clipDataText = inputmask.isRTL ? clipData.reverse().join("") : clipData.join("");
    if (window_default.navigator && window_default.navigator.clipboard)
      window_default.navigator.clipboard.writeText(clipDataText);
    else if (window_default.clipboardData && window_default.clipboardData.getData) {
      window_default.clipboardData.setData("Text", clipDataText);
    }
    handleRemove.call(inputmask, input, keys.Delete, pos);
    writeBuffer(
      input,
      getBuffer.call(inputmask),
      maskset.p,
      e,
      inputmask.undoValue !== inputmask._valueGet(true)
    );
  },
  blurEvent: function(e) {
    const inputmask = this.inputmask, opts = inputmask.opts, $ = inputmask.dependencyLib;
    inputmask.clicked = 0;
    const $input = $(this), input = this;
    if (input.inputmask) {
      HandleNativePlaceholder(input, inputmask.originalPlaceholder);
      let nptValue = input.inputmask._valueGet(), buffer = getBuffer.call(inputmask).slice();
      if (nptValue !== "") {
        if (opts.clearMaskOnLostFocus) {
          if (getLastValidPosition.call(inputmask) === -1 && nptValue === getBufferTemplate.call(inputmask).join("")) {
            buffer = [];
          } else {
            clearOptionalTail.call(inputmask, buffer);
          }
        }
        if (isComplete.call(inputmask, buffer) === false) {
          setTimeout(function() {
            $input.trigger("incomplete");
          }, 0);
          if (opts.clearIncomplete) {
            resetMaskSet.call(inputmask, false);
            if (opts.clearMaskOnLostFocus) {
              buffer = [];
            } else {
              buffer = getBufferTemplate.call(inputmask).slice();
            }
          }
        }
        writeBuffer(input, buffer, void 0, e);
      }
      nptValue = inputmask._valueGet(true);
      if (inputmask.undoValue !== nptValue) {
        if (nptValue != "" || inputmask.undoValue != getBufferTemplate.call(inputmask).join("") || inputmask.undoValue == getBufferTemplate.call(inputmask).join("") && inputmask.maskset.validPositions.length > 0) {
          inputmask.undoValue = nptValue;
          $input.trigger("change");
        }
      }
    }
  },
  mouseenterEvent: function() {
    const inputmask = this.inputmask, { showMaskOnHover } = inputmask.opts, input = this;
    inputmask.mouseEnter = true;
    if ((input.inputmask.shadowRoot || input.ownerDocument).activeElement !== input) {
      const bufferTemplate = (inputmask.isRTL ? getBufferTemplate.call(inputmask).slice().reverse() : getBufferTemplate.call(inputmask)).join("");
      if (showMaskOnHover) {
        HandleNativePlaceholder(input, bufferTemplate);
      }
    }
  },
  submitEvent: function() {
    const inputmask = this.inputmask, opts = inputmask.opts;
    if (inputmask.undoValue !== inputmask._valueGet(true)) {
      inputmask.$el.trigger("change");
    }
    if (
      /* opts.clearMaskOnLostFocus && */
      getLastValidPosition.call(
        inputmask
      ) === -1 && inputmask._valueGet && inputmask._valueGet() === getBufferTemplate.call(inputmask).join("")
    ) {
      inputmask._valueSet("");
    }
    if (opts.clearIncomplete && isComplete.call(inputmask, getBuffer.call(inputmask)) === false) {
      inputmask._valueSet("");
    }
    if (opts.removeMaskOnSubmit) {
      inputmask._valueSet(inputmask.unmaskedvalue(), true);
      setTimeout(function() {
        writeBuffer(inputmask.el, getBuffer.call(inputmask));
      }, 0);
    }
  },
  resetEvent: function() {
    const inputmask = this.inputmask;
    inputmask.refreshValue = true;
    setTimeout(function() {
      applyInputValue(inputmask.el, inputmask._valueGet(true));
    }, 0);
  }
};

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/inputHandling.js
function applyInputValue(input, value, initialEvent, strict) {
  const inputmask = input ? input.inputmask : this, opts = inputmask.opts;
  input.inputmask.refreshValue = false;
  if (strict !== true && typeof opts.onBeforeMask === "function")
    value = opts.onBeforeMask.call(inputmask, value, opts) || value;
  value = (value || "").toString().split("");
  checkVal(input, true, false, value, initialEvent);
  inputmask.undoValue = inputmask._valueGet(true);
  if ((opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate.call(inputmask).join("") && getLastValidPosition.call(inputmask) === -1) {
    input.inputmask._valueSet("");
  }
}
function clearOptionalTail(buffer) {
  const inputmask = this;
  buffer.length = 0;
  let template = getMaskTemplate.call(
    inputmask,
    true,
    0,
    true,
    void 0,
    true
  ), lmnt;
  while ((lmnt = template.shift()) !== void 0) buffer.push(lmnt);
  return buffer;
}
function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
  const inputmask = input ? input.inputmask : this, maskset = inputmask.maskset, opts = inputmask.opts, $ = inputmask.dependencyLib;
  let inputValue = nptvl.slice(), charCodes = "", initialNdx = -1, result, skipOptionalPartCharacter = opts.skipOptionalPartCharacter;
  opts.skipOptionalPartCharacter = "";
  function isTemplateMatch(ndx, charCodes2) {
    let targetTemplate = getMaskTemplate.call(inputmask, true, 0).slice(ndx, seekNext.call(inputmask, ndx, false, false)).join("").replace(/'/g, ""), charCodeNdx = targetTemplate.indexOf(charCodes2);
    while (charCodeNdx > 0 && targetTemplate[charCodeNdx - 1] === " ")
      charCodeNdx--;
    const match = charCodeNdx === 0 && !isMask.call(inputmask, ndx) && (getTest.call(inputmask, ndx).match.nativeDef === charCodes2.charAt(0) || getTest.call(inputmask, ndx).match.static === true && getTest.call(inputmask, ndx).match.nativeDef === "'" + charCodes2.charAt(0) || getTest.call(inputmask, ndx).match.nativeDef === " " && (getTest.call(inputmask, ndx + 1).match.nativeDef === charCodes2.charAt(0) || getTest.call(inputmask, ndx + 1).match.static === true && getTest.call(inputmask, ndx + 1).match.nativeDef === "'" + charCodes2.charAt(0)));
    if (!match && charCodeNdx > 0 && !isMask.call(inputmask, ndx, false, true)) {
      const nextPos = seekNext.call(inputmask, ndx);
      if (inputmask.caretPos.begin < nextPos) {
        inputmask.caretPos = { begin: nextPos };
      }
    }
    return match;
  }
  resetMaskSet.call(inputmask, false);
  inputmask.clicked = 0;
  initialNdx = opts.radixPoint ? determineNewCaretPosition.call(
    inputmask,
    {
      begin: 0,
      end: 0
    },
    false,
    opts.__financeInput === false ? "radixFocus" : void 0
  ).begin : 0;
  maskset.p = initialNdx;
  inputmask.caretPos = { begin: initialNdx };
  let staticMatches = [], prevCaretPos = inputmask.caretPos;
  inputValue.forEach(function(charCode, ndx) {
    if (charCode !== void 0) {
      const keypress = new $.Event("_checkval");
      keypress.key = charCode;
      charCodes += charCode;
      const lvp = getLastValidPosition.call(inputmask, void 0, true);
      if (!isTemplateMatch(initialNdx, charCodes)) {
        result = EventHandlers.keypressEvent.call(
          inputmask,
          keypress,
          true,
          false,
          strict,
          inputmask.caretPos.begin
        );
        if (result) {
          initialNdx = inputmask.caretPos.begin + 1;
          charCodes = "";
        }
      } else {
        result = EventHandlers.keypressEvent.call(
          inputmask,
          keypress,
          true,
          false,
          strict,
          lvp + 1
        );
      }
      if (result) {
        if (result.pos !== void 0 && maskset.validPositions[result.pos] && maskset.validPositions[result.pos].match.static === true && maskset.validPositions[result.pos].alternation === void 0) {
          staticMatches.push(result.pos);
          if (!inputmask.isRTL) {
            result.forwardPosition = result.pos + 1;
          }
        }
        writeBuffer.call(
          inputmask,
          void 0,
          getBuffer.call(inputmask),
          result.forwardPosition,
          keypress,
          false
        );
        inputmask.caretPos = {
          begin: result.forwardPosition,
          end: result.forwardPosition
        };
        prevCaretPos = inputmask.caretPos;
      } else {
        if (maskset.validPositions[ndx] === void 0 && inputValue[ndx] === getPlaceholder.call(inputmask, ndx) && isMask.call(inputmask, ndx, true)) {
          inputmask.caretPos.begin++;
        } else inputmask.caretPos = prevCaretPos;
      }
    }
  });
  if (staticMatches.length > 0) {
    let sndx, validPos, nextValid = seekNext.call(inputmask, -1, void 0, false);
    if (!isComplete.call(inputmask, getBuffer.call(inputmask)) && staticMatches.length <= nextValid || isComplete.call(inputmask, getBuffer.call(inputmask)) && staticMatches.length > 0 && staticMatches.length !== nextValid && staticMatches[0] === 0) {
      let nextSndx = nextValid;
      while ((sndx = staticMatches.shift()) !== void 0) {
        if (sndx < nextSndx) {
          const keypress = new $.Event("_checkval");
          validPos = maskset.validPositions[sndx];
          validPos.generatedInput = true;
          keypress.key = validPos.input;
          result = EventHandlers.keypressEvent.call(
            inputmask,
            keypress,
            true,
            false,
            strict,
            nextSndx
          );
          if (result && result.pos !== void 0 && result.pos !== sndx && maskset.validPositions[result.pos] && maskset.validPositions[result.pos].match.static === true) {
            staticMatches.push(result.pos);
          } else if (!result) break;
          nextSndx++;
        }
      }
    } else {
    }
  }
  if (writeOut) {
    writeBuffer.call(
      inputmask,
      input,
      getBuffer.call(inputmask),
      result ? result.forwardPosition : inputmask.caretPos.begin,
      initiatingEvent || new $.Event("checkval"),
      initiatingEvent && (initiatingEvent.type === "input" && inputmask.undoValue !== getBuffer.call(inputmask).join("") || initiatingEvent.type === "paste")
    );
  }
  opts.skipOptionalPartCharacter = skipOptionalPartCharacter;
}
function HandleNativePlaceholder(npt, value) {
  const inputmask = npt ? npt.inputmask : this;
  if (ie) {
    if (npt.inputmask._valueGet() !== value && (npt.placeholder !== value || npt.placeholder === "")) {
      let buffer = getBuffer.call(inputmask).slice(), nptValue = npt.inputmask._valueGet();
      if (nptValue !== value) {
        const lvp = getLastValidPosition.call(inputmask);
        if (lvp === -1 && nptValue === getBufferTemplate.call(inputmask).join("")) {
          buffer = [];
        } else if (lvp !== -1) {
          clearOptionalTail.call(inputmask, buffer);
        }
        writeBuffer(npt, buffer);
      }
    }
  } else if (npt.placeholder !== value) {
    npt.placeholder = value;
    if (npt.placeholder === "") npt.removeAttribute("placeholder");
  }
}
function unmaskedvalue(input) {
  const inputmask = input ? input.inputmask : this, opts = inputmask.opts, maskset = inputmask.maskset;
  if (input) {
    if (input.inputmask === void 0) {
      return input.value;
    }
    if (input.inputmask && input.inputmask.refreshValue) {
      applyInputValue(input, input.inputmask._valueGet(true));
    }
  }
  const umValue = [], vps = maskset.validPositions;
  for (let pndx = 0, vpl = vps.length; pndx < vpl; pndx++) {
    if (vps[pndx] && vps[pndx].match && (vps[pndx].match.static != true || Array.isArray(maskset.metadata) && vps[pndx].generatedInput !== true)) {
      umValue.push(vps[pndx].input);
    }
  }
  let unmaskedValue = umValue.length === 0 ? "" : (inputmask.isRTL ? umValue.reverse() : umValue).join("");
  if (typeof opts.onUnMask === "function") {
    const bufferValue = (inputmask.isRTL ? getBuffer.call(inputmask).slice().reverse() : getBuffer.call(inputmask)).join("");
    unmaskedValue = opts.onUnMask.call(
      inputmask,
      bufferValue,
      unmaskedValue,
      opts
    );
  }
  return unmaskedValue;
}
function writeBuffer(input, buffer, caretPos, event, triggerEvents) {
  const inputmask = input ? input.inputmask : this, opts = inputmask.opts, $ = inputmask.dependencyLib;
  if (event && typeof opts.onBeforeWrite === "function") {
    const result = opts.onBeforeWrite.call(
      inputmask,
      event,
      buffer,
      caretPos,
      opts
    );
    if (result) {
      if (result.refreshFromBuffer) {
        const refresh = result.refreshFromBuffer;
        refreshFromBuffer.call(
          inputmask,
          refresh === true ? refresh : refresh.start,
          refresh.end,
          result.buffer || buffer
        );
        buffer = getBuffer.call(inputmask, true);
      }
      if (caretPos !== void 0)
        caretPos = result.caret !== void 0 ? result.caret : caretPos;
    }
  }
  if (input !== void 0) {
    input.inputmask._valueSet(buffer.join(""));
    if (caretPos !== void 0 && (event === void 0 || event.type !== "blur")) {
      caret.call(
        inputmask,
        input,
        caretPos,
        void 0,
        void 0,
        event !== void 0 && event.type === "keydown" && (event.key === keys.Delete || event.key === keys.Backspace)
      );
    }
    input.inputmask.writeBufferHook === void 0 || input.inputmask.writeBufferHook(caretPos);
    if (triggerEvents === true) {
      const $input = $(input), nptVal = input.inputmask._valueGet();
      input.inputmask.skipInputEvent = true;
      $input.trigger("input");
      setTimeout(function() {
        if (nptVal === getBufferTemplate.call(inputmask).join("")) {
          $input.trigger("cleared");
        } else if (isComplete.call(inputmask, buffer) === true) {
          $input.trigger("complete");
        }
      }, 0);
    }
  }
}

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/eventruler.js
var EventRuler = {
  on: function(input, eventName, eventHandler) {
    const $ = input.inputmask.dependencyLib;
    let ev = function(e) {
      if (e.originalEvent) {
        e = e.originalEvent || e;
        arguments[0] = e;
      }
      let that = this, args, inputmask = that.inputmask, opts = inputmask ? inputmask.opts : void 0;
      if (inputmask === void 0 && this.nodeName !== "FORM") {
        const imOpts = $.data(that, "_inputmask_opts");
        $(that).off();
        if (imOpts) {
          new inputmask_default(imOpts).mask(that);
        }
      } else if (!["submit", "reset", "setvalue"].includes(e.type) && this.nodeName !== "FORM" && (that.disabled || that.readOnly && !(e.type === "keydown" && e.ctrlKey && e.key === keys.c || opts.tabThrough === false && e.key === keys.Tab))) {
        e.preventDefault();
      } else {
        switch (e.type) {
          case "input":
            if (inputmask.skipInputEvent === true) {
              inputmask.skipInputEvent = false;
              return e.preventDefault();
            }
            break;
          case "click":
          case "focus":
            if (inputmask.validationEvent) {
              inputmask.validationEvent = false;
              input.blur();
              HandleNativePlaceholder(
                input,
                (inputmask.isRTL ? getBufferTemplate.call(inputmask).slice().reverse() : getBufferTemplate.call(inputmask)).join("")
              );
              setTimeout(function() {
                input.focus();
              }, opts.validationEventTimeOut);
              return false;
            }
            args = arguments;
            setTimeout(function() {
              if (!input.inputmask) {
                return;
              }
              eventHandler.apply(that, args);
            }, 0);
            return;
        }
        const returnVal = eventHandler.apply(that, arguments);
        if (returnVal === false) {
          e.preventDefault();
          e.stopPropagation();
        }
        return returnVal;
      }
    };
    if (["submit", "reset"].includes(eventName)) {
      ev = ev.bind(input);
      if (input.form !== null) $(input.form).on(eventName, ev);
    } else {
      $(input).on(eventName, ev);
    }
    input.inputmask.events[eventName] = input.inputmask.events[eventName] || [];
    input.inputmask.events[eventName].push(ev);
  },
  off: function(input, event) {
    if (input.inputmask && input.inputmask.events) {
      const $ = input.inputmask.dependencyLib;
      let events = input.inputmask.events;
      if (event) {
        events = [];
        events[event] = input.inputmask.events[event];
      }
      for (const eventName in events) {
        const evArr = events[eventName];
        while (evArr.length > 0) {
          const ev = evArr.pop();
          if (["submit", "reset"].includes(eventName)) {
            if (input.form !== null) $(input.form).off(eventName, ev);
          } else {
            $(input).off(eventName, ev);
          }
        }
        delete input.inputmask.events[eventName];
      }
    }
  }
};

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/mask.js
function mask() {
  const inputmask = this, opts = this.opts, el = this.el, $ = this.dependencyLib;
  function isElementTypeSupported(input, opts2) {
    function patchValueProperty(npt) {
      let valueGet, valueSet;
      function patchValhook(type) {
        if ($.valHooks && ($.valHooks[type] === void 0 || $.valHooks[type].inputmaskpatch !== true)) {
          const valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function(elem) {
            return elem.value;
          }, valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function(elem, value) {
            elem.value = value;
            return elem;
          };
          $.valHooks[type] = {
            get: function(elem) {
              if (elem.inputmask) {
                if (elem.inputmask.opts.autoUnmask) {
                  return elem.inputmask.unmaskedvalue();
                } else {
                  const result = valhookGet(elem);
                  return getLastValidPosition.call(
                    inputmask,
                    void 0,
                    void 0,
                    elem.inputmask.maskset.validPositions
                  ) !== -1 || opts2.nullable !== true ? result : "";
                }
              } else {
                return valhookGet(elem);
              }
            },
            set: function(elem, value) {
              const result = valhookSet(elem, value);
              if (elem.inputmask) {
                applyInputValue(elem, value);
              }
              return result;
            },
            inputmaskpatch: true
          };
        }
      }
      function getter() {
        if (this.inputmask) {
          return this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : getLastValidPosition.call(inputmask) !== -1 || opts2.nullable !== true ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && opts2.clearMaskOnLostFocus ? (inputmask.isRTL ? clearOptionalTail.call(inputmask, getBuffer.call(inputmask).slice()).reverse() : clearOptionalTail.call(
            inputmask,
            getBuffer.call(inputmask).slice()
          )).join("") : valueGet.call(this) : "";
        } else {
          return valueGet.call(this);
        }
      }
      function setter(value) {
        valueSet.call(this, value);
        if (this.inputmask) {
          applyInputValue(this, value);
        }
      }
      function installNativeValueSetFallback(npt2) {
        EventRuler.on(npt2, "mouseenter", function() {
          const input2 = this, value = input2.inputmask._valueGet(true), bufferValue = (input2.inputmask.isRTL ? getBuffer.call(input2.inputmask).slice().reverse() : getBuffer.call(input2.inputmask)).join("");
          if (value != bufferValue) {
            applyInputValue(input2, value);
          }
        });
      }
      if (!npt.inputmask.__valueGet) {
        if (opts2.noValuePatching !== true) {
          if (Object.getOwnPropertyDescriptor) {
            const valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(
              Object.getPrototypeOf(npt),
              "value"
            ) : void 0;
            if (valueProperty && valueProperty.get && valueProperty.set) {
              valueGet = valueProperty.get;
              valueSet = valueProperty.set;
              Object.defineProperty(npt, "value", {
                get: getter,
                set: setter,
                configurable: true
              });
            } else if (npt.tagName.toLowerCase() !== "input") {
              valueGet = function() {
                return this.textContent;
              };
              valueSet = function(value) {
                this.textContent = value;
              };
              Object.defineProperty(npt, "value", {
                get: getter,
                set: setter,
                configurable: true
              });
            }
          } else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
            valueGet = npt.__lookupGetter__("value");
            valueSet = npt.__lookupSetter__("value");
            npt.__defineGetter__("value", getter);
            npt.__defineSetter__("value", setter);
          }
          npt.inputmask.__valueGet = valueGet;
          npt.inputmask.__valueSet = valueSet;
        }
        npt.inputmask._valueGet = function(overruleRTL) {
          return inputmask.isRTL && overruleRTL !== true ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
        };
        npt.inputmask._valueSet = function(value, overruleRTL) {
          valueSet.call(
            this.el,
            value === null || value === void 0 ? "" : overruleRTL !== true && inputmask.isRTL ? value.split("").reverse().join("") : value
          );
        };
        if (valueGet === void 0) {
          valueGet = function() {
            return this.value;
          };
          valueSet = function(value) {
            this.value = value;
          };
          patchValhook(npt.type);
          installNativeValueSetFallback(npt);
        }
      }
    }
    let elementType = input.getAttribute("type"), isSupported2 = input.tagName.toLowerCase() === "input" && opts2.supportsInputType.includes(elementType) || input.isContentEditable || input.tagName.toLowerCase() === "textarea";
    if (!isSupported2) {
      if (input.tagName.toLowerCase() === "input") {
        let el2 = document.createElement("input");
        el2.setAttribute("type", elementType);
        isSupported2 = el2.type === "text";
        el2 = null;
      } else {
        isSupported2 = "partial";
      }
    }
    if (isSupported2 !== false) {
      patchValueProperty(input);
    } else {
      input.inputmask = void 0;
    }
    return isSupported2;
  }
  EventRuler.off(el);
  const isSupported = isElementTypeSupported(el, opts);
  if (isSupported !== false) {
    inputmask.originalPlaceholder = el.placeholder;
    inputmask.maxLength = el !== void 0 ? el.maxLength : void 0;
    if (inputmask.maxLength === -1) inputmask.maxLength = void 0;
    if ("inputMode" in el && el.getAttribute("inputmode") === null) {
      el.inputMode = opts.inputmode;
      el.setAttribute("inputmode", opts.inputmode);
    }
    if (isSupported === true) {
      opts.showMaskOnFocus = opts.showMaskOnFocus && ["cc-number", "cc-exp"].indexOf(el.autocomplete) === -1;
      if (iphone) {
        opts.insertModeVisual = false;
        el.setAttribute("autocorrect", "off");
      }
      EventRuler.on(el, "submit", EventHandlers.submitEvent);
      EventRuler.on(el, "reset", EventHandlers.resetEvent);
      EventRuler.on(el, "blur", EventHandlers.blurEvent);
      EventRuler.on(el, "focus", EventHandlers.focusEvent);
      EventRuler.on(el, "invalid", EventHandlers.invalidEvent);
      EventRuler.on(el, "click", EventHandlers.clickEvent);
      EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent);
      EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent);
      EventRuler.on(el, "paste", EventHandlers.pasteEvent);
      EventRuler.on(el, "cut", EventHandlers.cutEvent);
      EventRuler.on(el, "complete", opts.oncomplete);
      EventRuler.on(el, "incomplete", opts.onincomplete);
      EventRuler.on(el, "cleared", opts.oncleared);
      if (opts.inputEventOnly !== true) {
        EventRuler.on(el, "keydown", EventHandlers.keyEvent);
      }
      if (mobile || opts.inputEventOnly) {
        el.removeAttribute("maxLength");
      }
      EventRuler.on(el, "input", EventHandlers.inputFallBackEvent);
    }
    EventRuler.on(el, "setvalue", EventHandlers.setValueEvent);
    inputmask.applyMaskHook === void 0 || inputmask.applyMaskHook();
    getBufferTemplate.call(inputmask).join("");
    inputmask.undoValue = inputmask._valueGet(true);
    const activeElement = (el.inputmask.shadowRoot || el.ownerDocument).activeElement;
    if (el.inputmask._valueGet(true) !== "" || opts.clearMaskOnLostFocus === false || activeElement === el) {
      applyInputValue(el, el.inputmask._valueGet(true), opts);
      let buffer = getBuffer.call(inputmask).slice();
      if (isComplete.call(inputmask, buffer) === false) {
        if (opts.clearIncomplete) {
          resetMaskSet.call(inputmask, false);
        }
      }
      if (opts.clearMaskOnLostFocus && activeElement !== el) {
        if (getLastValidPosition.call(inputmask) === -1) {
          buffer = [];
        } else {
          clearOptionalTail.call(inputmask, buffer);
        }
      }
      if (opts.clearMaskOnLostFocus === false || opts.showMaskOnFocus && activeElement === el || el.inputmask._valueGet(true) !== "") {
        writeBuffer(el, buffer);
      }
      if (activeElement === el) {
        caret.call(
          inputmask,
          el,
          seekNext.call(inputmask, getLastValidPosition.call(inputmask))
        );
      }
    }
  }
}

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/escapeRegex.js
var escapeRegexRegex = new RegExp(
  "(\\" + [
    "/",
    ".",
    "*",
    "+",
    "?",
    "|",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "\\",
    "$",
    "^"
  ].join("|\\") + ")",
  "gim"
);
function escapeRegex(str) {
  return str.replace(escapeRegexRegex, "\\$1");
}

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/masktoken.js
function masktoken_default(isGroup, isOptional, isQuantifier, isAlternator) {
  this.matches = [];
  this.openGroup = isGroup || false;
  this.alternatorGroup = false;
  this.isGroup = isGroup || false;
  this.isOptional = isOptional || false;
  this.isQuantifier = isQuantifier || false;
  this.isAlternator = isAlternator || false;
  this.quantifier = {
    min: 1,
    max: 1
  };
}

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/mask-lexer.js
function generateMaskSet(opts, nocache) {
  let ms;
  function preProcessMask(mask2, { repeat, groupmarker, quantifiermarker, keepStatic }) {
    if (repeat > 0 || repeat === "*" || repeat === "+") {
      const repeatStart = repeat === "*" ? 0 : repeat === "+" ? 1 : repeat;
      if (repeatStart != repeat) {
        mask2 = groupmarker[0] + mask2 + groupmarker[1] + quantifiermarker[0] + repeatStart + "," + repeat + quantifiermarker[1];
      } else {
        const msk = mask2;
        for (let i = 1; i < repeatStart; i++) {
          mask2 += msk;
        }
      }
    }
    if (keepStatic === true) {
      const optionalRegex = "(.)\\[([^\\]]*)\\]", maskMatches = mask2.match(new RegExp(optionalRegex, "g"));
      maskMatches && maskMatches.forEach((m, i) => {
        let [p1, p2] = m.split("[");
        p2 = p2.replace("]", "");
        mask2 = mask2.replace(
          new RegExp(`${escapeRegex(p1)}\\[${escapeRegex(p2)}\\]`),
          p1.charAt(0) === p2.charAt(0) ? `(${p1}|${p1}${p2})` : `${p1}[${p2}]`
        );
      });
    }
    return mask2;
  }
  function generateMask(mask2, metadata, opts2) {
    let regexMask = false;
    if (mask2 === null || mask2 === "") {
      regexMask = opts2.regex !== null;
      if (regexMask) {
        mask2 = opts2.regex;
        mask2 = mask2.replace(/^(\^)(.*)(\$)$/, "$2");
      } else {
        regexMask = true;
        mask2 = ".*";
      }
    }
    if (mask2.length === 1 && opts2.greedy === false && opts2.repeat !== 0) {
      opts2.placeholder = "";
    }
    mask2 = preProcessMask(mask2, opts2);
    let masksetDefinition, maskdefKey;
    maskdefKey = regexMask ? "regex_" + opts2.regex : opts2.numericInput ? mask2.split("").reverse().join("") : mask2;
    if (opts2.keepStatic !== null) {
      maskdefKey = "ks_" + opts2.keepStatic + maskdefKey;
    }
    if (typeof opts2.placeholder === "object") {
      maskdefKey = "ph_" + JSON.stringify(opts2.placeholder) + maskdefKey;
    }
    if (inputmask_default.prototype.masksCache[maskdefKey] === void 0 || nocache === true) {
      masksetDefinition = {
        mask: mask2,
        maskToken: inputmask_default.prototype.analyseMask(mask2, regexMask, opts2),
        validPositions: [],
        _buffer: void 0,
        buffer: void 0,
        tests: {},
        excludes: {},
        // excluded alternations
        metadata,
        maskLength: void 0,
        jitOffset: {}
      };
      if (nocache !== true) {
        inputmask_default.prototype.masksCache[maskdefKey] = masksetDefinition;
        masksetDefinition = inputmask_dependencyLib_default.extend(
          true,
          {},
          inputmask_default.prototype.masksCache[maskdefKey]
        );
      }
    } else {
      masksetDefinition = inputmask_dependencyLib_default.extend(
        true,
        {},
        inputmask_default.prototype.masksCache[maskdefKey]
      );
    }
    return masksetDefinition;
  }
  if (typeof opts.mask === "function") {
    opts.mask = opts.mask(opts);
  }
  if (Array.isArray(opts.mask)) {
    if (opts.mask.length > 1) {
      if (opts.keepStatic === null) {
        opts.keepStatic = true;
      }
      let altMask = opts.groupmarker[0];
      (opts.isRTL ? opts.mask.reverse() : opts.mask).forEach(function(msk) {
        if (altMask.length > 1) {
          altMask += opts.alternatormarker;
        }
        if (msk.mask !== void 0 && typeof msk.mask !== "function") {
          altMask += msk.mask;
        } else {
          altMask += msk;
        }
      });
      altMask += opts.groupmarker[1];
      return generateMask(altMask, opts.mask, opts);
    } else {
      opts.mask = opts.mask.pop();
    }
  }
  if (opts.mask && opts.mask.mask !== void 0 && typeof opts.mask.mask !== "function") {
    ms = generateMask(opts.mask.mask, opts.mask, opts);
  } else {
    ms = generateMask(opts.mask, opts.mask, opts);
  }
  if (opts.keepStatic === null) opts.keepStatic = false;
  return ms;
}
function analyseMask(mask2, regexMask, opts) {
  const tokenizer = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g;
  let escaped = false, currentToken = new masktoken_default(), match, m, openenings = [], maskTokens = [], openingToken, currentOpeningToken, alternator, lastMatch, closeRegexGroup = false;
  function insertTestDefinition(mtoken, element, position) {
    position = position !== void 0 ? position : mtoken.matches.length;
    let prevMatch = mtoken.matches[position - 1];
    if (regexMask) {
      if (element.indexOf("[") === 0 || escaped && /\\d|\\s|\\w|\\p/i.test(element) || element === ".") {
        let flag = opts.casing ? "i" : "";
        if (/\\p\{.*}/i.test(element)) flag += "u";
        mtoken.matches.splice(position++, 0, {
          fn: new RegExp(element, flag),
          static: false,
          optionality: false,
          newBlockMarker: prevMatch === void 0 ? "master" : prevMatch.def !== element,
          casing: null,
          def: element,
          placeholder: typeof opts.placeholder === "object" ? opts.placeholder[currentToken.matches.length] : void 0,
          nativeDef: element
        });
      } else {
        if (escaped) element = element[element.length - 1];
        element.split("").forEach(function(lmnt, ndx) {
          prevMatch = mtoken.matches[position - 1];
          mtoken.matches.splice(position++, 0, {
            fn: /[a-z]/i.test(opts.staticDefinitionSymbol || lmnt) ? new RegExp(
              "[" + (opts.staticDefinitionSymbol || lmnt) + "]",
              opts.casing ? "i" : ""
            ) : null,
            static: true,
            optionality: false,
            newBlockMarker: prevMatch === void 0 ? "master" : prevMatch.def !== lmnt && prevMatch.static !== true,
            casing: null,
            def: opts.staticDefinitionSymbol || lmnt,
            placeholder: opts.staticDefinitionSymbol !== void 0 ? lmnt : typeof opts.placeholder === "object" ? opts.placeholder[currentToken.matches.length] : void 0,
            nativeDef: (escaped ? "'" : "") + lmnt
          });
        });
      }
      escaped = false;
    } else {
      const maskdef = opts.definitions && opts.definitions[element] || opts.usePrototypeDefinitions && inputmask_default.prototype.definitions[element];
      if (maskdef && !escaped) {
        mtoken.matches.splice(position++, 0, {
          fn: maskdef.validator ? typeof maskdef.validator === "string" ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function() {
            this.test = maskdef.validator;
          }() : /./,
          static: maskdef.static || false,
          optionality: maskdef.optional || false,
          defOptionality: maskdef.optional || false,
          // indicator for an optional from the definition
          newBlockMarker: prevMatch === void 0 || maskdef.optional ? "master" : prevMatch.def !== (maskdef.definitionSymbol || element),
          casing: maskdef.casing,
          def: maskdef.definitionSymbol || element,
          placeholder: maskdef.placeholder,
          nativeDef: element,
          generated: maskdef.generated
        });
      } else {
        mtoken.matches.splice(position++, 0, {
          fn: /[a-z]/i.test(opts.staticDefinitionSymbol || element) ? new RegExp(
            "[" + (opts.staticDefinitionSymbol || element) + "]",
            opts.casing ? "i" : ""
          ) : null,
          static: true,
          optionality: false,
          newBlockMarker: prevMatch === void 0 ? "master" : prevMatch.def !== element && prevMatch.static !== true,
          casing: null,
          def: opts.staticDefinitionSymbol || element,
          placeholder: opts.staticDefinitionSymbol !== void 0 ? element : void 0,
          nativeDef: (escaped ? "'" : "") + element
        });
        escaped = false;
      }
    }
  }
  function verifyGroupMarker(maskToken) {
    if (maskToken && maskToken.matches) {
      maskToken.matches.forEach(function(token, ndx) {
        const nextToken = maskToken.matches[ndx + 1];
        if ((nextToken === void 0 || nextToken.matches === void 0 || nextToken.isQuantifier === false) && token && token.isGroup) {
          token.isGroup = false;
          if (!regexMask) {
            insertTestDefinition(token, opts.groupmarker[0], 0);
            if (token.openGroup !== true) {
              insertTestDefinition(token, opts.groupmarker[1]);
            }
          }
        }
        verifyGroupMarker(token);
      });
    }
  }
  function defaultCase() {
    if (openenings.length > 0) {
      currentOpeningToken = openenings[openenings.length - 1];
      insertTestDefinition(currentOpeningToken, m);
      if (currentOpeningToken.isAlternator) {
        alternator = openenings.pop();
        for (let mndx = 0; mndx < alternator.matches.length; mndx++) {
          if (alternator.matches[mndx].isGroup)
            alternator.matches[mndx].isGroup = false;
        }
        if (openenings.length > 0) {
          currentOpeningToken = openenings[openenings.length - 1];
          currentOpeningToken.matches.push(alternator);
        } else {
          currentToken.matches.push(alternator);
        }
      }
    } else {
      insertTestDefinition(currentToken, m);
    }
  }
  function reverseTokens(maskToken) {
    function reverseStatic(st) {
      if (st === opts.optionalmarker[0]) {
        st = opts.optionalmarker[1];
      } else if (st === opts.optionalmarker[1]) {
        st = opts.optionalmarker[0];
      } else if (st === opts.groupmarker[0]) {
        st = opts.groupmarker[1];
      } else if (st === opts.groupmarker[1]) st = opts.groupmarker[0];
      return st;
    }
    maskToken.matches = maskToken.matches.reverse();
    for (const match2 in maskToken.matches) {
      if (Object.prototype.hasOwnProperty.call(maskToken.matches, match2)) {
        const intMatch = parseInt(match2);
        if (maskToken.matches[match2].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
          const qt = maskToken.matches[match2];
          maskToken.matches.splice(match2, 1);
          maskToken.matches.splice(intMatch + 1, 0, qt);
        }
        if (maskToken.matches[match2].matches !== void 0) {
          maskToken.matches[match2] = reverseTokens(maskToken.matches[match2]);
        } else {
          maskToken.matches[match2] = reverseStatic(maskToken.matches[match2]);
        }
      }
    }
    return maskToken;
  }
  function groupify(matches2) {
    const groupToken = new masktoken_default(true);
    groupToken.openGroup = false;
    groupToken.matches = matches2;
    return groupToken;
  }
  function closeGroup() {
    openingToken = openenings.pop();
    openingToken.openGroup = false;
    if (openingToken !== void 0) {
      if (openenings.length > 0) {
        currentOpeningToken = openenings[openenings.length - 1];
        currentOpeningToken.matches.push(openingToken);
        if (currentOpeningToken.isAlternator) {
          alternator = openenings.pop();
          for (let mndx = 0; mndx < alternator.matches.length; mndx++) {
            alternator.matches[mndx].isGroup = false;
            alternator.matches[mndx].alternatorGroup = false;
          }
          if (openenings.length > 0) {
            currentOpeningToken = openenings[openenings.length - 1];
            currentOpeningToken.matches.push(alternator);
          } else {
            currentToken.matches.push(alternator);
          }
        }
      } else {
        currentToken.matches.push(openingToken);
      }
    } else {
      defaultCase();
    }
  }
  function groupQuantifier(matches2) {
    let lastMatch2 = matches2.pop();
    if (lastMatch2.isQuantifier) {
      lastMatch2 = groupify([matches2.pop(), lastMatch2]);
    }
    return lastMatch2;
  }
  if (regexMask) {
    opts.optionalmarker[0] = void 0;
    opts.optionalmarker[1] = void 0;
  }
  while (match = regexMask ? regexTokenizer.exec(mask2) : tokenizer.exec(mask2)) {
    m = match[0];
    if (regexMask) {
      switch (m.charAt(0)) {
        // Quantifier
        case "?":
          m = "{0,1}";
          break;
        case "+":
        case "*":
          m = "{" + m + "}";
          break;
        case "|":
          if (openenings.length === 0) {
            const altRegexGroup = groupify(currentToken.matches);
            altRegexGroup.openGroup = true;
            openenings.push(altRegexGroup);
            currentToken.matches = [];
            closeRegexGroup = true;
          }
          break;
      }
      switch (m) {
        case "\\d":
          m = "[0-9]";
          break;
        case "\\p":
          m += regexTokenizer.exec(mask2)[0];
          m += regexTokenizer.exec(mask2)[0];
          break;
        case "(?:":
        // non capturing group
        case "(?=":
        // lookahead
        case "(?!":
        // negative lookahead
        case "(?<=":
        // lookbehind
        case "(?<!":
          break;
      }
    }
    if (escaped) {
      defaultCase();
      continue;
    }
    switch (m.charAt(0)) {
      case "$":
      case "^":
        if (!regexMask) {
          defaultCase();
        }
        break;
      case opts.escapeChar:
        escaped = true;
        if (regexMask) defaultCase();
        break;
      // optional closing
      case opts.optionalmarker[1]:
      case opts.groupmarker[1]:
        closeGroup();
        break;
      case opts.optionalmarker[0]:
        openenings.push(new masktoken_default(false, true));
        break;
      case opts.groupmarker[0]:
        openenings.push(new masktoken_default(true));
        break;
      case opts.quantifiermarker[0]:
        var quantifier = new masktoken_default(false, false, true);
        m = m.replace(/[{}?]/g, "");
        var mqj = m.split("|"), mq = mqj[0].split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = mq.length === 1 ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]), mqJit = isNaN(mqj[1]) ? mqj[1] : parseInt(mqj[1]);
        if (mq0 === "*" || mq0 === "+") {
          mq0 = mq1 === "*" ? 0 : 1;
        }
        quantifier.quantifier = {
          min: mq0,
          max: mq1,
          jit: mqJit
        };
        var matches = openenings.length > 0 ? openenings[openenings.length - 1].matches : currentToken.matches;
        match = matches.pop();
        if (!match.isGroup) {
          match = groupify([match]);
        }
        matches.push(match);
        matches.push(quantifier);
        break;
      case opts.alternatormarker:
        if (openenings.length > 0) {
          currentOpeningToken = openenings[openenings.length - 1];
          const subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
          if (currentOpeningToken.openGroup && // regexp alt syntax
          (subToken.matches === void 0 || subToken.isGroup === false && subToken.isAlternator === false)) {
            lastMatch = openenings.pop();
          } else {
            lastMatch = groupQuantifier(currentOpeningToken.matches);
          }
        } else {
          lastMatch = groupQuantifier(currentToken.matches);
        }
        if (lastMatch.isAlternator) {
          openenings.push(lastMatch);
        } else {
          if (lastMatch.alternatorGroup) {
            alternator = openenings.pop();
            lastMatch.alternatorGroup = false;
          } else {
            alternator = new masktoken_default(false, false, false, true);
          }
          alternator.matches.push(lastMatch);
          openenings.push(alternator);
          if (lastMatch.openGroup) {
            lastMatch.openGroup = false;
            const alternatorGroup = new masktoken_default(true);
            alternatorGroup.alternatorGroup = true;
            openenings.push(alternatorGroup);
          }
        }
        break;
      default:
        defaultCase();
    }
  }
  if (closeRegexGroup) closeGroup();
  while (openenings.length > 0) {
    openingToken = openenings.pop();
    currentToken.matches.push(openingToken);
  }
  if (currentToken.matches.length > 0) {
    verifyGroupMarker(currentToken);
    maskTokens.push(currentToken);
  }
  if (opts.numericInput || opts.isRTL) {
    reverseTokens(maskTokens[0]);
  }
  return maskTokens;
}

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/inputmask.js
var document4 = window_default.document;
var dataKey = "_inputmask_opts";
function Inputmask(alias, options, internal) {
  if (!(this instanceof Inputmask)) {
    return new Inputmask(alias, options, internal);
  }
  this.dependencyLib = inputmask_dependencyLib_default;
  this.el = void 0;
  this.events = {};
  this.maskset = void 0;
  if (internal !== true) {
    if (Object.prototype.toString.call(alias) === "[object Object]") {
      options = alias;
    } else {
      options = options || {};
      if (alias) options.alias = alias;
    }
    this.opts = inputmask_dependencyLib_default.extend(true, {}, this.defaults, options);
    this.noMasksCache = options && options.definitions !== void 0;
    this.userOptions = options || {};
    resolveAlias(this.opts.alias, options, this.opts);
  }
  this.refreshValue = false;
  this.undoValue = void 0;
  this.$el = void 0;
  this.skipInputEvent = false;
  this.validationEvent = false;
  this.ignorable = false;
  this.maxLength;
  this.mouseEnter = false;
  this.clicked = 0;
  this.originalPlaceholder = void 0;
  this.isComposing = false;
  this.hasAlternator = false;
}
Inputmask.prototype = {
  dataAttribute: "data-inputmask",
  // data attribute prefix used for attribute binding
  // options default
  defaults: defaults_default,
  definitions: definitions_default,
  aliases: {},
  // aliases definitions
  masksCache: {},
  i18n: {},
  get isRTL() {
    return this.opts.isRTL || this.opts.numericInput;
  },
  mask: function(elems) {
    const that = this;
    if (typeof elems === "string") {
      elems = document4.getElementById(elems) || document4.querySelectorAll(elems);
    }
    elems = elems.nodeName ? [elems] : Array.isArray(elems) ? elems : [].slice.call(elems);
    elems.forEach(function(el, ndx) {
      const scopedOpts = inputmask_dependencyLib_default.extend(true, {}, that.opts);
      if (importAttributeOptions(
        el,
        scopedOpts,
        inputmask_dependencyLib_default.extend(true, {}, that.userOptions),
        that.dataAttribute
      )) {
        const maskset = generateMaskSet(scopedOpts, that.noMasksCache);
        if (maskset !== void 0) {
          if (el.inputmask !== void 0) {
            el.inputmask.opts.autoUnmask = true;
            el.inputmask.remove();
          }
          el.inputmask = new Inputmask(void 0, void 0, true);
          el.inputmask.opts = scopedOpts;
          el.inputmask.noMasksCache = that.noMasksCache;
          el.inputmask.userOptions = inputmask_dependencyLib_default.extend(true, {}, that.userOptions);
          el.inputmask.el = el;
          el.inputmask.$el = inputmask_dependencyLib_default(el);
          el.inputmask.maskset = maskset;
          inputmask_dependencyLib_default.data(el, dataKey, that.userOptions);
          mask.call(el.inputmask);
        }
      }
    });
    return elems && elems[0] ? elems[0].inputmask || this : this;
  },
  option: function(options, noremask) {
    if (typeof options === "string") {
      return this.opts[options];
    } else if (typeof options === "object") {
      inputmask_dependencyLib_default.extend(this.userOptions, options);
      if (this.el && noremask !== true) {
        this.mask(this.el);
      }
      return this;
    }
  },
  unmaskedvalue: function(value) {
    this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
    if (this.el === void 0 || value !== void 0) {
      const valueBuffer = (typeof this.opts.onBeforeMask === "function" ? this.opts.onBeforeMask.call(this, value, this.opts) || value : value).split("");
      checkVal.call(this, void 0, false, false, valueBuffer);
      if (typeof this.opts.onBeforeWrite === "function")
        this.opts.onBeforeWrite.call(
          this,
          void 0,
          getBuffer.call(this),
          0,
          this.opts
        );
    }
    return unmaskedvalue.call(this, this.el);
  },
  remove: function() {
    if (this.el) {
      inputmask_dependencyLib_default.data(this.el, dataKey, null);
      const cv = this.opts.autoUnmask ? unmaskedvalue(this.el) : this._valueGet(this.opts.autoUnmask);
      if (cv !== getBufferTemplate.call(this).join(""))
        this._valueSet(cv, this.opts.autoUnmask);
      else this._valueSet("");
      EventRuler.off(this.el);
      let valueProperty;
      if (Object.getOwnPropertyDescriptor && Object.getPrototypeOf) {
        valueProperty = Object.getOwnPropertyDescriptor(
          Object.getPrototypeOf(this.el),
          "value"
        );
        if (valueProperty) {
          if (this.__valueGet) {
            Object.defineProperty(this.el, "value", {
              get: this.__valueGet,
              set: this.__valueSet,
              configurable: true
            });
          }
        }
      } else if (document4.__lookupGetter__ && this.el.__lookupGetter__("value")) {
        if (this.__valueGet) {
          this.el.__defineGetter__("value", this.__valueGet);
          this.el.__defineSetter__("value", this.__valueSet);
        }
      }
      this.el.inputmask = void 0;
    }
    return this.el;
  },
  getemptymask: function() {
    this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
    return (this.isRTL ? getBufferTemplate.call(this).reverse() : getBufferTemplate.call(this)).join("");
  },
  hasMaskedValue: function() {
    return !this.opts.autoUnmask;
  },
  isComplete: function() {
    this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
    return isComplete.call(this, getBuffer.call(this));
  },
  getmetadata: function() {
    this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
    if (Array.isArray(this.maskset.metadata)) {
      let maskTarget = getMaskTemplate.call(this, true, 0, false).join("");
      this.maskset.metadata.forEach(function(mtdt) {
        if (mtdt.mask === maskTarget) {
          maskTarget = mtdt;
          return false;
        }
        return true;
      });
      return maskTarget;
    }
    return this.maskset.metadata;
  },
  isValid: function(value) {
    this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
    if (value) {
      const valueBuffer = (typeof this.opts.onBeforeMask === "function" ? this.opts.onBeforeMask.call(this, value, this.opts) || value : value).split("");
      checkVal.call(this, void 0, true, false, valueBuffer);
    } else {
      value = this.isRTL ? getBuffer.call(this).slice().reverse().join("") : getBuffer.call(this).join("");
    }
    let buffer = getBuffer.call(this), rl = determineLastRequiredPosition.call(this), lmib = buffer.length - 1;
    for (; lmib > rl; lmib--) {
      if (isMask.call(this, lmib)) break;
    }
    buffer.splice(rl, lmib + 1 - rl);
    return isComplete.call(this, buffer) && value === (this.isRTL ? getBuffer.call(this).slice().reverse().join("") : getBuffer.call(this).join(""));
  },
  format: function(value, metadata) {
    this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
    const valueBuffer = (typeof this.opts.onBeforeMask === "function" ? this.opts.onBeforeMask.call(this, value, this.opts) || value : value).split("");
    checkVal.call(this, void 0, true, false, valueBuffer);
    const formattedValue = this.isRTL ? getBuffer.call(this).slice().reverse().join("") : getBuffer.call(this).join("");
    return metadata ? {
      value: formattedValue,
      metadata: this.getmetadata()
    } : formattedValue;
  },
  setValue: function(value) {
    if (this.el) {
      inputmask_dependencyLib_default(this.el).trigger("setvalue", [value]);
    }
  },
  analyseMask
};
function resolveAlias(aliasStr, options, opts) {
  const aliasDefinition = Inputmask.prototype.aliases[aliasStr];
  if (aliasDefinition) {
    if (aliasDefinition.alias)
      resolveAlias(aliasDefinition.alias, void 0, opts);
    inputmask_dependencyLib_default.extend(true, opts, aliasDefinition);
    inputmask_dependencyLib_default.extend(true, opts, options);
    return true;
  } else if (opts.mask === null) {
    opts.mask = aliasStr;
  }
  return false;
}
function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
  function importOption(option, optionData) {
    const attrOption = dataAttribute === "" ? option : dataAttribute + "-" + option;
    optionData = optionData !== void 0 ? optionData : npt.getAttribute(attrOption);
    if (optionData !== null) {
      if (typeof optionData === "string") {
        if (option.indexOf("on") === 0) {
          optionData = window_default[optionData];
        } else if (optionData === "false") {
          optionData = false;
        } else if (optionData === "true") optionData = true;
      }
      userOptions[option] = optionData;
    }
  }
  if (opts.importDataAttributes === true) {
    let attrOptions = npt.getAttribute(dataAttribute), option, dataoptions, optionData, p;
    if (attrOptions && attrOptions !== "") {
      attrOptions = attrOptions.replace(/'/g, '"');
      dataoptions = JSON.parse("{" + attrOptions + "}");
    }
    if (dataoptions) {
      optionData = void 0;
      for (p in dataoptions) {
        if (p.toLowerCase() === "alias") {
          optionData = dataoptions[p];
          break;
        }
      }
    }
    importOption("alias", optionData);
    if (userOptions.alias) {
      resolveAlias(userOptions.alias, userOptions, opts);
    }
    for (option in opts) {
      if (dataoptions) {
        optionData = void 0;
        for (p in dataoptions) {
          if (p.toLowerCase() === option.toLowerCase()) {
            optionData = dataoptions[p];
            break;
          }
        }
      }
      importOption(option, optionData);
    }
  }
  inputmask_dependencyLib_default.extend(true, opts, userOptions);
  if (npt.dir === "rtl" || opts.rightAlign) {
    npt.style.textAlign = "right";
  }
  if (npt.dir === "rtl" || opts.numericInput) {
    npt.dir = "ltr";
    npt.removeAttribute("dir");
    opts.isRTL = true;
  }
  return Object.keys(userOptions).length;
}
Inputmask.extendDefaults = function(options) {
  inputmask_dependencyLib_default.extend(true, Inputmask.prototype.defaults, options);
};
Inputmask.extendDefinitions = function(definition) {
  inputmask_dependencyLib_default.extend(true, Inputmask.prototype.definitions, definition);
};
Inputmask.extendAliases = function(alias) {
  inputmask_dependencyLib_default.extend(true, Inputmask.prototype.aliases, alias);
};
Inputmask.format = function(value, options, metadata) {
  return Inputmask(options).format(value, metadata);
};
Inputmask.unmask = function(value, options) {
  return Inputmask(options).unmaskedvalue(value);
};
Inputmask.isValid = function(value, options) {
  return Inputmask(options).isValid(value);
};
Inputmask.remove = function(elems) {
  if (typeof elems === "string") {
    elems = document4.getElementById(elems) || document4.querySelectorAll(elems);
  }
  elems = elems.nodeName ? [elems] : elems;
  elems.forEach(function(el) {
    if (el.inputmask) el.inputmask.remove();
  });
};
Inputmask.setValue = function(elems, value) {
  if (typeof elems === "string") {
    elems = document4.getElementById(elems) || document4.querySelectorAll(elems);
  }
  elems = elems.nodeName ? [elems] : elems;
  elems.forEach(function(el) {
    if (el.inputmask) el.inputmask.setValue(value);
    else inputmask_dependencyLib_default(el).trigger("setvalue", [value]);
  });
};
Inputmask.dependencyLib = inputmask_dependencyLib_default;
window_default.Inputmask = Inputmask;
var inputmask_default = Inputmask;

// ../../../../../../.yarn/berry/cache/inputmask-npm-5.0.10-beta.5-0c731d3fa3-10c0.zip/node_modules/inputmask/lib/jquery.inputmask.js
if (jquery_module_default.fn.inputmask === void 0) {
  jquery_module_default.fn.inputmask = function(fn, options) {
    let nptmask, input = this[0];
    if (options === void 0) options = {};
    if (typeof fn === "string") {
      switch (fn) {
        case "unmaskedvalue":
          return input && input.inputmask ? input.inputmask.unmaskedvalue() : jquery_module_default(input).val();
        case "remove":
          return this.each(function() {
            if (this.inputmask) this.inputmask.remove();
          });
        case "getemptymask":
          return input && input.inputmask ? input.inputmask.getemptymask() : "";
        case "hasMaskedValue":
          return input && input.inputmask ? input.inputmask.hasMaskedValue() : false;
        case "isComplete":
          return input && input.inputmask ? input.inputmask.isComplete() : true;
        case "getmetadata":
          return input && input.inputmask ? input.inputmask.getmetadata() : void 0;
        case "setvalue":
          inputmask_default.setValue(input, options);
          break;
        case "option":
          if (typeof options === "string") {
            if (input && input.inputmask !== void 0) {
              return input.inputmask.option(options);
            }
          } else {
            return this.each(function() {
              if (this.inputmask !== void 0) {
                return this.inputmask.option(options);
              }
            });
          }
          break;
        default:
          options.alias = fn;
          nptmask = new inputmask_default(options);
          return this.each(function() {
            nptmask.mask(this);
          });
      }
    } else if (Array.isArray(fn)) {
      options.alias = fn;
      nptmask = new inputmask_default(options);
      return this.each(function() {
        nptmask.mask(this);
      });
    } else if (typeof fn === "object") {
      nptmask = new inputmask_default(fn);
      if (fn.mask === void 0 && fn.alias === void 0) {
        return this.each(function() {
          if (this.inputmask !== void 0) {
            return this.inputmask.option(fn);
          } else nptmask.mask(this);
        });
      } else {
        return this.each(function() {
          nptmask.mask(this);
        });
      }
    } else if (fn === void 0) {
      return this.each(function() {
        nptmask = new inputmask_default(options);
        nptmask.mask(this);
      });
    }
  };
}

// src/inputmask/1-inputmask.js
var InputMask = class extends BaseWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    this.hasFloatLabel = PrimeFaces.utils.hasFloatLabel(this.jq);
    this.applyMask();
    PrimeFaces.skinInput(this.jq);
  }
  /**
   * @override
   * @inheritdoc
   */
  destroy() {
    this.jq.inputmask("remove");
    super.destroy();
  }
  /**
   * Applys the mask to the input.
   * @private
   */
  applyMask() {
    if (this.hasFloatLabel) {
      this.cfg.showMaskOnHover = false;
    }
    if (this.cfg.mask && !this.jq.is("[readonly]") && !this.jq.is(":disabled")) {
      this.cfg.clearIncomplete = this.cfg.autoClear === void 0 ? true : this.cfg.autoClear;
      this.jq.inputmask("remove").inputmask(this.cfg);
    }
  }
  /**
   * Sets the value of this input field to the given value. If the value does not fit the mask, it is adjusted
   * appropriately.
   * @param {string} value New value to set on this input field
   */
  setValue(value) {
    this.jq.inputmask("setvalue", value);
  }
  /**
   * Returns the current value of this input field including the mask like "12/31/1999".
   * @return {string} The current value of this input field with mask.
   */
  getValue() {
    return this.jq.val();
  }
  /**
   * Returns the current value of this input field without the mask like "12311999".
   * @return {string} The current value of this input field without mask.
   */
  getValueUnmasked() {
    return this.jq.inputmask("unmaskedvalue");
  }
  /**
   * Disables this input so that the user cannot enter a value anymore.
   */
  disable() {
    this.jq.inputmask("remove");
    PrimeFaces.utils.disableInputWidget(this.jq);
  }
  /**
   * Enables this input so that the user can enter a value.
   */
  enable() {
    PrimeFaces.utils.enableInputWidget(this.jq);
    this.applyMask();
  }
};
export {
  InputMask
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvaW5wdXRtYXNrLW5wbS01LjAuMTAtYmV0YS41LTBjNzMxZDNmYTMtMTBjMC56aXAvbm9kZV9tb2R1bGVzL2lucHV0bWFzay9saWIvanF1ZXJ5LmlucHV0bWFzay5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9pbnB1dG1hc2stbnBtLTUuMC4xMC1iZXRhLjUtMGM3MzFkM2ZhMy0xMGMwLnppcC9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2xpYi9kZWZhdWx0cy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9pbnB1dG1hc2stbnBtLTUuMC4xMC1iZXRhLjUtMGM3MzFkM2ZhMy0xMGMwLnppcC9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2xpYi9kZWZpbml0aW9ucy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9pbnB1dG1hc2stbnBtLTUuMC4xMC1iZXRhLjUtMGM3MzFkM2ZhMy0xMGMwLnppcC9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2xpYi9nbG9iYWwvd2luZG93LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL2lucHV0bWFzay1ucG0tNS4wLjEwLWJldGEuNS0wYzczMWQzZmEzLTEwYzAuemlwL25vZGVfbW9kdWxlcy9pbnB1dG1hc2svbGliL2RlcGVuZGVuY3lMaWJzL2RhdGEuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvaW5wdXRtYXNrLW5wbS01LjAuMTAtYmV0YS41LTBjNzMxZDNmYTMtMTBjMC56aXAvbm9kZV9tb2R1bGVzL2lucHV0bWFzay9saWIvZGVwZW5kZW5jeUxpYnMvZXh0ZW5kLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL2lucHV0bWFzay1ucG0tNS4wLjEwLWJldGEuNS0wYzczMWQzZmEzLTEwYzAuemlwL25vZGVfbW9kdWxlcy9pbnB1dG1hc2svbGliL2RlcGVuZGVuY3lMaWJzL2V2ZW50cy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9pbnB1dG1hc2stbnBtLTUuMC4xMC1iZXRhLjUtMGM3MzFkM2ZhMy0xMGMwLnppcC9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2xpYi9kZXBlbmRlbmN5TGlicy9pbnB1dG1hc2suZGVwZW5kZW5jeUxpYi5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9pbnB1dG1hc2stbnBtLTUuMC4xMC1iZXRhLjUtMGM3MzFkM2ZhMy0xMGMwLnppcC9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2xpYi9lbnZpcm9ubWVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9pbnB1dG1hc2stbnBtLTUuMC4xMC1iZXRhLjUtMGM3MzFkM2ZhMy0xMGMwLnppcC9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2xpYi9rZXljb2RlLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL2lucHV0bWFzay1ucG0tNS4wLjEwLWJldGEuNS0wYzczMWQzZmEzLTEwYzAuemlwL25vZGVfbW9kdWxlcy9pbnB1dG1hc2svbGliL3ZhbGlkYXRpb24tdGVzdHMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvaW5wdXRtYXNrLW5wbS01LjAuMTAtYmV0YS41LTBjNzMxZDNmYTMtMTBjMC56aXAvbm9kZV9tb2R1bGVzL2lucHV0bWFzay9saWIvdmFsaWRhdGlvbi5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9pbnB1dG1hc2stbnBtLTUuMC4xMC1iZXRhLjUtMGM3MzFkM2ZhMy0xMGMwLnppcC9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2xpYi9wb3NpdGlvbmluZy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9pbnB1dG1hc2stbnBtLTUuMC4xMC1iZXRhLjUtMGM3MzFkM2ZhMy0xMGMwLnppcC9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2xpYi9ldmVudGhhbmRsZXJzLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL2lucHV0bWFzay1ucG0tNS4wLjEwLWJldGEuNS0wYzczMWQzZmEzLTEwYzAuemlwL25vZGVfbW9kdWxlcy9pbnB1dG1hc2svbGliL2lucHV0SGFuZGxpbmcuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvaW5wdXRtYXNrLW5wbS01LjAuMTAtYmV0YS41LTBjNzMxZDNmYTMtMTBjMC56aXAvbm9kZV9tb2R1bGVzL2lucHV0bWFzay9saWIvZXZlbnRydWxlci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9pbnB1dG1hc2stbnBtLTUuMC4xMC1iZXRhLjUtMGM3MzFkM2ZhMy0xMGMwLnppcC9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2xpYi9tYXNrLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL2lucHV0bWFzay1ucG0tNS4wLjEwLWJldGEuNS0wYzczMWQzZmEzLTEwYzAuemlwL25vZGVfbW9kdWxlcy9pbnB1dG1hc2svbGliL2VzY2FwZVJlZ2V4LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL2lucHV0bWFzay1ucG0tNS4wLjEwLWJldGEuNS0wYzczMWQzZmEzLTEwYzAuemlwL25vZGVfbW9kdWxlcy9pbnB1dG1hc2svbGliL21hc2t0b2tlbi5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9pbnB1dG1hc2stbnBtLTUuMC4xMC1iZXRhLjUtMGM3MzFkM2ZhMy0xMGMwLnppcC9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2xpYi9tYXNrLWxleGVyLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL2lucHV0bWFzay1ucG0tNS4wLjEwLWJldGEuNS0wYzczMWQzZmEzLTEwYzAuemlwL25vZGVfbW9kdWxlcy9pbnB1dG1hc2svbGliL2lucHV0bWFzay5qcyIsICIuLi9zcmMvaW5wdXRtYXNrLzEtaW5wdXRtYXNrLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKlxyXG4gKiBJbnB1dCBNYXNrIHBsdWdpbiBmb3IganF1ZXJ5XHJcbiAqIGh0dHA6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9qcXVlcnkuaW5wdXRtYXNrXHJcbiAqIENvcHlyaWdodCAoYykgUm9iaW4gSGVyYm90c1xyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICovXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmltcG9ydCBJbnB1dG1hc2sgZnJvbSBcIi4vaW5wdXRtYXNrXCI7XHJcblxyXG5pZiAoJC5mbi5pbnB1dG1hc2sgPT09IHVuZGVmaW5lZCkge1xyXG4gIC8vIGpxdWVyeSBwbHVnaW5cclxuICAkLmZuLmlucHV0bWFzayA9IGZ1bmN0aW9uIChmbiwgb3B0aW9ucykge1xyXG4gICAgbGV0IG5wdG1hc2ssXHJcbiAgICAgIGlucHV0ID0gdGhpc1swXTtcclxuICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpIG9wdGlvbnMgPSB7fTtcclxuICAgIGlmICh0eXBlb2YgZm4gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgc3dpdGNoIChmbikge1xyXG4gICAgICAgIGNhc2UgXCJ1bm1hc2tlZHZhbHVlXCI6XHJcbiAgICAgICAgICByZXR1cm4gaW5wdXQgJiYgaW5wdXQuaW5wdXRtYXNrXHJcbiAgICAgICAgICAgID8gaW5wdXQuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKVxyXG4gICAgICAgICAgICA6ICQoaW5wdXQpLnZhbCgpO1xyXG4gICAgICAgIGNhc2UgXCJyZW1vdmVcIjpcclxuICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dG1hc2spIHRoaXMuaW5wdXRtYXNrLnJlbW92ZSgpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSBcImdldGVtcHR5bWFza1wiOlxyXG4gICAgICAgICAgcmV0dXJuIGlucHV0ICYmIGlucHV0LmlucHV0bWFzayA/IGlucHV0LmlucHV0bWFzay5nZXRlbXB0eW1hc2soKSA6IFwiXCI7XHJcbiAgICAgICAgY2FzZSBcImhhc01hc2tlZFZhbHVlXCI6IC8vIGNoZWNrIHdoZXRoZXIgdGhlIHJldHVybmVkIHZhbHVlIGlzIG1hc2tlZCBvciBub3Q7IGN1cnJlbnRseSBvbmx5IHdvcmtzIHJlbGlhYmxlIHdoZW4gdXNpbmcganF1ZXJ5LnZhbCBmbiB0byByZXRyaWV2ZSB0aGUgdmFsdWVcclxuICAgICAgICAgIHJldHVybiBpbnB1dCAmJiBpbnB1dC5pbnB1dG1hc2tcclxuICAgICAgICAgICAgPyBpbnB1dC5pbnB1dG1hc2suaGFzTWFza2VkVmFsdWUoKVxyXG4gICAgICAgICAgICA6IGZhbHNlO1xyXG4gICAgICAgIGNhc2UgXCJpc0NvbXBsZXRlXCI6XHJcbiAgICAgICAgICByZXR1cm4gaW5wdXQgJiYgaW5wdXQuaW5wdXRtYXNrID8gaW5wdXQuaW5wdXRtYXNrLmlzQ29tcGxldGUoKSA6IHRydWU7XHJcbiAgICAgICAgY2FzZSBcImdldG1ldGFkYXRhXCI6IC8vIHJldHVybiBtYXNrIG1ldGFkYXRhIGlmIGV4aXN0c1xyXG4gICAgICAgICAgcmV0dXJuIGlucHV0ICYmIGlucHV0LmlucHV0bWFza1xyXG4gICAgICAgICAgICA/IGlucHV0LmlucHV0bWFzay5nZXRtZXRhZGF0YSgpXHJcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIGNhc2UgXCJzZXR2YWx1ZVwiOlxyXG4gICAgICAgICAgSW5wdXRtYXNrLnNldFZhbHVlKGlucHV0LCBvcHRpb25zKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJvcHRpb25cIjpcclxuICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQgJiYgaW5wdXQuaW5wdXRtYXNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaW5wdXQuaW5wdXRtYXNrLm9wdGlvbihvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRtYXNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0bWFzay5vcHRpb24ob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBvcHRpb25zLmFsaWFzID0gZm47XHJcbiAgICAgICAgICBucHRtYXNrID0gbmV3IElucHV0bWFzayhvcHRpb25zKTtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBucHRtYXNrLm1hc2sodGhpcyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGZuKSkge1xyXG4gICAgICBvcHRpb25zLmFsaWFzID0gZm47XHJcbiAgICAgIG5wdG1hc2sgPSBuZXcgSW5wdXRtYXNrKG9wdGlvbnMpO1xyXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBucHRtYXNrLm1hc2sodGhpcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZm4gPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgbnB0bWFzayA9IG5ldyBJbnB1dG1hc2soZm4pO1xyXG4gICAgICBpZiAoZm4ubWFzayA9PT0gdW5kZWZpbmVkICYmIGZuLmFsaWFzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmlucHV0bWFzayAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0bWFzay5vcHRpb24oZm4pO1xyXG4gICAgICAgICAgfSBlbHNlIG5wdG1hc2subWFzayh0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIG5wdG1hc2subWFzayh0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChmbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIGxvb2sgZm9yIGRhdGEtaW5wdXRtYXNrIGF0cmlidXRlc1xyXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBucHRtYXNrID0gbmV3IElucHV0bWFzayhvcHRpb25zKTtcclxuICAgICAgICBucHRtYXNrLm1hc2sodGhpcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwgImV4cG9ydCBkZWZhdWx0IHtcclxuICBfbWF4VGVzdFBvczogNTAwLFxyXG4gIHBsYWNlaG9sZGVyOiBcIl9cIixcclxuICBvcHRpb25hbG1hcmtlcjogW1wiW1wiLCBcIl1cIl0sXHJcbiAgcXVhbnRpZmllcm1hcmtlcjogW1wie1wiLCBcIn1cIl0sXHJcbiAgZ3JvdXBtYXJrZXI6IFtcIihcIiwgXCIpXCJdLFxyXG4gIGFsdGVybmF0b3JtYXJrZXI6IFwifFwiLFxyXG4gIGVzY2FwZUNoYXI6IFwiXFxcXFwiLFxyXG4gIG1hc2s6IG51bGwsIC8vIG5lZWRzIHRvYmUgbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZCBhcyB0aGUgZXh0ZW5kIG1ldGhvZCBkb2VzIG5vdCBjb25zaWRlciBwcm9wcyB3aXRoIHRoZSB1bmRlZmluZWQgdmFsdWVcclxuICByZWdleDogbnVsbCwgLy8gcmVndWxhciBleHByZXNzaW9uIGFzIGEgbWFza1xyXG4gIG9uY29tcGxldGU6ICgpID0+IHt9LCAvLyBleGVjdXRlcyB3aGVuIHRoZSBtYXNrIGlzIGNvbXBsZXRlXHJcbiAgb25pbmNvbXBsZXRlOiAoKSA9PiB7fSwgLy8gZXhlY3V0ZXMgd2hlbiB0aGUgbWFzayBpcyBpbmNvbXBsZXRlIGFuZCBmb2N1cyBpcyBsb3N0XHJcbiAgb25jbGVhcmVkOiAoKSA9PiB7fSwgLy8gZXhlY3V0ZXMgd2hlbiB0aGUgbWFzayBpcyBjbGVhcmVkXHJcbiAgcmVwZWF0OiAwLCAvLyByZXBldGl0aW9ucyBvZiB0aGUgbWFzazogKiB+IGZvcmV2ZXIsIG90aGVyd2lzZSBzcGVjaWZ5IGFuIGludGVnZXJcclxuICBncmVlZHk6IGZhbHNlLCAvLyB0cnVlOiBhbGxvY2F0ZWQgYnVmZmVyIGZvciB0aGUgbWFzayBhbmQgcmVwZXRpdGlvbnMgLSBmYWxzZTogYWxsb2NhdGUgb25seSBpZiBuZWVkZWRcclxuICBhdXRvVW5tYXNrOiBmYWxzZSwgLy8gYXV0b21hdGljYWxseSB1bm1hc2sgd2hlbiByZXRyaWV2aW5nIHRoZSB2YWx1ZSB3aXRoICQuZm4udmFsIG9yIHZhbHVlIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIF9fbG9va3VwR2V0dGVyX18gb3IgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yXHJcbiAgcmVtb3ZlTWFza09uU3VibWl0OiBmYWxzZSwgLy8gcmVtb3ZlIHRoZSBtYXNrIGJlZm9yZSBzdWJtaXR0aW5nIHRoZSBmb3JtLlxyXG4gIGNsZWFyTWFza09uTG9zdEZvY3VzOiB0cnVlLFxyXG4gIGluc2VydE1vZGU6IHRydWUsIC8vIGluc2VydCB0aGUgaW5wdXQgb3Igb3ZlcndyaXRlIHRoZSBpbnB1dFxyXG4gIGluc2VydE1vZGVWaXN1YWw6IHRydWUsIC8vIHNob3cgc2VsZWN0ZWQgY2FyZXQgd2hlbiBpbnNlcnRtb2RlID0gZmFsc2VcclxuICBjbGVhckluY29tcGxldGU6IGZhbHNlLCAvLyBjbGVhciB0aGUgaW5jb21wbGV0ZSBpbnB1dCBvbiBibHVyXHJcbiAgYWxpYXM6IG51bGwsXHJcbiAgb25LZXlEb3duOiAoKSA9PiB7fSwgLy8gY2FsbGJhY2sgdG8gaW1wbGVtZW50IGF1dG9jb21wbGV0ZSBvbiBjZXJ0YWluIGtleXMgZm9yIGV4YW1wbGUuIGFyZ3MgPT4gZXZlbnQsIGJ1ZmZlciwgY2FyZXRQb3MsIG9wdHNcclxuICBvbkJlZm9yZU1hc2s6IG51bGwsIC8vIGV4ZWN1dGVzIGJlZm9yZSBtYXNraW5nIHRoZSBpbml0aWFsIHZhbHVlIHRvIGFsbG93IHByZXByb2Nlc3Npbmcgb2YgdGhlIGluaXRpYWwgdmFsdWUuXHRhcmdzID0+IGluaXRpYWxWYWx1ZSwgb3B0cyA9PiByZXR1cm4gcHJvY2Vzc2VkVmFsdWVcclxuICBvbkJlZm9yZVBhc3RlOiBmdW5jdGlvbiAocGFzdGVkVmFsdWUsIG9wdHMpIHtcclxuICAgIHJldHVybiB0eXBlb2Ygb3B0cy5vbkJlZm9yZU1hc2sgPT09IFwiZnVuY3Rpb25cIlxyXG4gICAgICA/IG9wdHMub25CZWZvcmVNYXNrLmNhbGwodGhpcywgcGFzdGVkVmFsdWUsIG9wdHMpXHJcbiAgICAgIDogcGFzdGVkVmFsdWU7XHJcbiAgfSwgLy8gZXhlY3V0ZXMgYmVmb3JlIG1hc2tpbmcgdGhlIHBhc3RlZCB2YWx1ZSB0byBhbGxvdyBwcmVwcm9jZXNzaW5nIG9mIHRoZSBwYXN0ZWQgdmFsdWUuXHRhcmdzID0+IHBhc3RlZFZhbHVlLCBvcHRzID0+IHJldHVybiBwcm9jZXNzZWRWYWx1ZVxyXG4gIG9uQmVmb3JlV3JpdGU6IG51bGwsIC8vIGV4ZWN1dGVzIGJlZm9yZSB3cml0aW5nIHRvIHRoZSBtYXNrZWQgZWxlbWVudC4gYXJncyA9PiBldmVudCwgb3B0c1xyXG4gIG9uVW5NYXNrOiBudWxsLCAvLyBleGVjdXRlcyBhZnRlciB1bm1hc2tpbmcgdG8gYWxsb3cgcG9zdHByb2Nlc3Npbmcgb2YgdGhlIHVubWFza2VkdmFsdWUuXHRhcmdzID0+IG1hc2tlZFZhbHVlLCB1bm1hc2tlZFZhbHVlLCBvcHRzXHJcbiAgc2hvd01hc2tPbkZvY3VzOiB0cnVlLCAvLyBzaG93IHRoZSBtYXNrLXBsYWNlaG9sZGVyIHdoZW4gdGhlIGlucHV0IGhhcyBmb2N1c1xyXG4gIHNob3dNYXNrT25Ib3ZlcjogdHJ1ZSwgLy8gc2hvdyB0aGUgbWFzay1wbGFjZWhvbGRlciB3aGVuIGhvdmVyaW5nIHRoZSBlbXB0eSBpbnB1dFxyXG4gIG9uS2V5VmFsaWRhdGlvbjogKCkgPT4ge30sIC8vIGV4ZWN1dGVzIG9uIGV2ZXJ5IGtleS1wcmVzcyB3aXRoIHRoZSByZXN1bHQgb2YgaXNWYWxpZC4gUGFyYW1zOiBrZXksIHJlc3VsdCwgb3B0c1xyXG4gIHNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXI6IFwiIFwiLCAvLyBhIGNoYXJhY3RlciB3aGljaCBjYW4gYmUgdXNlZCB0byBza2lwIGFuIG9wdGlvbmFsIHBhcnQgb2YgYSBtYXNrXHJcbiAgbnVtZXJpY0lucHV0OiBmYWxzZSwgLy8gbnVtZXJpY0lucHV0IGlucHV0IGRpcmVjdGlvbiBzdHlsZSAoaW5wdXQgc2hpZnRzIHRvIHRoZSBsZWZ0IHdoaWxlIGhvbGRpbmcgdGhlIGNhcmV0IHBvc2l0aW9uKVxyXG4gIHJpZ2h0QWxpZ246IGZhbHNlLCAvLyBhbGlnbiB0byB0aGUgcmlnaHRcclxuICB1bmRvT25Fc2NhcGU6IHRydWUsIC8vIHByZXNzaW5nIGVzY2FwZSByZXZlcnRzIHRoZSB2YWx1ZSB0byB0aGUgdmFsdWUgYmVmb3JlIGZvY3VzXHJcbiAgLy8gbnVtZXJpYyBiYXNpYyBwcm9wZXJ0aWVzXHJcbiAgcmFkaXhQb2ludDogXCJcIiwgLy8gXCIuXCIsIC8vIHwgXCIsXCJcclxuICBfcmFkaXhEYW5jZTogZmFsc2UsIC8vIGRhbmNlIGFyb3VuZCB0aGUgcmFkaXhQb2ludFxyXG4gIGdyb3VwU2VwYXJhdG9yOiBcIlwiLCAvLyBcIixcIiwgLy8gfCBcIi5cIlxyXG4gIC8vIG51bWVyaWMgYmFzaWMgcHJvcGVydGllc1xyXG4gIGtlZXBTdGF0aWM6IG51bGwsIC8vIHRyeSB0byBrZWVwIHRoZSBtYXNrIHN0YXRpYyB3aGlsZSB0eXBpbmcuIERlY2lzaW9ucyB0byBhbHRlciB0aGUgbWFzayB3aWxsIGJlIHBvc3BvbmVkIGlmIHBvc3NpYmxlXHJcbiAgcG9zaXRpb25DYXJldE9uVGFiOiB0cnVlLCAvLyB3aGVuIGVuYWJsZWQgdGhlIGNhcmV0IHBvc2l0aW9uIGlzIHNldCBhZnRlciB0aGUgbGF0ZXN0IHZhbGlkIHBvc2l0aW9uIG9uIFRBQlxyXG4gIHRhYlRocm91Z2g6IGZhbHNlLCAvLyBhbGxvd3MgZm9yIHRhYmJpbmcgdGhyb3VnaCB0aGUgZGlmZmVyZW50IHBhcnRzIG9mIHRoZSBtYXNrZWQgZmllbGRcclxuICBzdXBwb3J0c0lucHV0VHlwZTogW1widGV4dFwiLCBcInRlbFwiLCBcInVybFwiLCBcInBhc3N3b3JkXCIsIFwic2VhcmNoXCJdLCAvLyBsaXN0IHdpdGggdGhlIHN1cHBvcnRlZCBpbnB1dCB0eXBlc1xyXG4gIGlzQ29tcGxldGU6IG51bGwsIC8vIG92ZXJyaWRlIGZvciBpc0NvbXBsZXRlIC0gYXJncyA9PiBidWZmZXIsIG9wdHMgLSByZXR1cm4gdHJ1ZSB8fCBmYWxzZVxyXG4gIHByZVZhbGlkYXRpb246IG51bGwsIC8vIGhvb2sgdG8gcHJlVmFsaWRhdGUgdGhlIGlucHV0LiAgVXNlZnVsbCBmb3IgdmFsaWRhdGluZyByZWdhcmRsZXNzIHRoZSBkZWZpbml0aW9uLlx0YXJncyA9PiBidWZmZXIsIHBvcywgY2hhciwgaXNTZWxlY3Rpb24sIG9wdHMsIG1hc2tzZXQsIGNhcmV0UG9zLCBzdHJpY3QgPT4gcmV0dXJuIHRydWUvZmFsc2UvY29tbWFuZCBvYmplY3RcclxuICBwb3N0VmFsaWRhdGlvbjogbnVsbCwgLy8gaG9vayB0byBwb3N0VmFsaWRhdGUgdGhlIHJlc3VsdCBmcm9tIGlzVmFsaWQuXHRVc2VmdWxsIGZvciB2YWxpZGF0aW5nIHRoZSBlbnRyeSBhcyBhIHdob2xlLlx0YXJncyA9PiBidWZmZXIsIHBvcywgYywgY3VycmVudFJlc3VsdCwgb3B0cywgbWFza3NldCwgc3RyaWN0LCBmcm9tQ2hlY2t2YWwsIGZyb21BbHRlcm5hdGUgPT4gcmV0dXJuIHRydWUvZmFsc2UvanNvblxyXG4gIHN0YXRpY0RlZmluaXRpb25TeW1ib2w6IHVuZGVmaW5lZCwgLy8gc3BlY2lmeSBhIGRlZmluaXRpb25TeW1ib2wgZm9yIHN0YXRpYyBjb250ZW50LCB1c2VkIHRvIG1ha2UgbWF0Y2hlcyBmb3IgYWx0ZXJuYXRvcnNcclxuICBqaXRNYXNraW5nOiBmYWxzZSwgLy8ganVzdCBpbiB0aW1lIG1hc2tpbmcgfiBvbmx5IG1hc2sgd2hpbGUgdHlwaW5nLCBjYW4gbiAobnVtYmVyKSwgdHJ1ZSBvciBmYWxzZVxyXG4gIG51bGxhYmxlOiB0cnVlLCAvLyByZXR1cm4gbm90aGluZyBpbnN0ZWFkIG9mIHRoZSBidWZmZXJ0ZW1wbGF0ZSB3aGVuIHRoZSB1c2VyIGhhc24ndCBlbnRlcmVkIGFueXRoaW5nLlxyXG4gIGlucHV0RXZlbnRPbmx5OiBmYWxzZSwgLy8gZGV2IG9wdGlvbiAtIHRlc3RpbmcgaW5wdXRmYWxsYmFjayBiZWhhdmlvclxyXG4gIG5vVmFsdWVQYXRjaGluZzogZmFsc2UsIC8vIGRpc2FibGUgdmFsdWUgcHJvcGVydHkgcGF0Y2hpbmdcclxuICBwb3NpdGlvbkNhcmV0T25DbGljazogXCJsdnBcIiwgLy8gbm9uZSwgbHZwIChiYXNlZCBvbiB0aGUgbGFzdCB2YWxpZCBwb3NpdGlvbiAoZGVmYXVsdCksIHJhZGl4Rm9jdXMgKHBvc2l0aW9uIGNhcmV0IHRvIHJhZGl4cG9pbnQgb24gaW5pdGlhbCBjbGljayksIHNlbGVjdCAoc2VsZWN0IHRoZSB3aG9sZSBpbnB1dCksIGlnbm9yZSAoaWdub3JlIHRoZSBjbGljayBhbmQgY29udGludWUgdGhlIG1hc2spXHJcbiAgY2FzaW5nOiBudWxsLCAvLyBtYXNrLWxldmVsIGNhc2luZy4gT3B0aW9uczogbnVsbCwgXCJ1cHBlclwiLCBcImxvd2VyXCIgb3IgXCJ0aXRsZVwiIG9yIGNhbGxiYWNrIGFyZ3MgPT4gZWxlbSwgdGVzdCwgcG9zLCB2YWxpZFBvc2l0aW9ucyByZXR1cm4gY2hhclZhbHVlXHJcbiAgaW5wdXRtb2RlOiBcInRleHRcIiwgLy8gc3BlY2lmeSB0aGUgaW5wdXRtb2RlXHJcbiAgaW1wb3J0RGF0YUF0dHJpYnV0ZXM6IHRydWUsIC8vIGltcG9ydCBkYXRhLWlucHV0bWFzayBhdHRyaWJ1dGVzXHJcbiAgc2hpZnRQb3NpdGlvbnM6IHRydWUsIC8vIHNoaWZ0IHBvc2l0aW9uIG9mIHRoZSBtYXNrIGVudHJpZXMgb24gZW50cnkgYW5kIGRlbGV0aW9uLlxyXG4gIHVzZVByb3RvdHlwZURlZmluaXRpb25zOiB0cnVlLCAvLyB1c2UgdGhlIGRlZmF1bHQgZGVmaW5lZCBkZWZpbml0aW9ucyBmcm9tIHRoZSBwcm90b3R5cGVcclxuICB2YWxpZGF0aW9uRXZlbnRUaW1lT3V0OiAzMDAwLCAvLyBUaW1lIHRvIHNob3cgdmFsaWRhdGlvbiBlcnJvciBvbiBmb3JtIHN1Ym1pdFxyXG4gIHN1YnN0aXR1dGVzOiB7fSAvLyBkZWZpbmUgY2hhcmFjdGVyIHN1YnN0aXR1dGVzXHJcbn07XHJcbiIsICJleHBvcnQgZGVmYXVsdCB7XHJcbiAgOToge1xyXG4gICAgLy8gXFx1RkYxMS1cXHVGRjE5ICMxNjA2XHJcbiAgICB2YWxpZGF0b3I6IFwiWzAtOVxcdUZGMTAtXFx1RkYxOV1cIixcclxuICAgIGRlZmluaXRpb25TeW1ib2w6IFwiKlwiXHJcbiAgfSxcclxuICBhOiB7XHJcbiAgICAvLyBcXHUwNDEwLVxcdTA0NEZcXHUwNDAxXFx1MDQ1MVxcdTAwQzAtXFx1MDBGRlxcdTAwQjUgIzc2XHJcbiAgICB2YWxpZGF0b3I6IFwiW0EtWmEtelxcdTA0MTAtXFx1MDQ0RlxcdTA0MDFcXHUwNDUxXFx1MDBDMC1cXHUwMEZGXFx1MDBCNV1cIixcclxuICAgIGRlZmluaXRpb25TeW1ib2w6IFwiKlwiXHJcbiAgfSxcclxuICBcIipcIjoge1xyXG4gICAgdmFsaWRhdG9yOlxyXG4gICAgICBcIlswLTlcXHVGRjEwLVxcdUZGMTlBLVphLXpcXHUwNDEwLVxcdTA0NEZcXHUwNDAxXFx1MDQ1MVxcdTAwQzAtXFx1MDBGRlxcdTAwQjVdXCJcclxuICB9XHJcbn07XHJcbiIsICJjb25zdCBjYW5Vc2VET00gPSAhIShcclxuICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXHJcbiAgd2luZG93LmRvY3VtZW50ICYmXHJcbiAgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhblVzZURPTSA/IHdpbmRvdyA6IHt9O1xyXG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG93bmVyLCBrZXksIHZhbHVlKSB7XHJcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBvd25lci5fX2RhdGEgPyBvd25lci5fX2RhdGFba2V5XSA6IG51bGw7XHJcbiAgfSBlbHNlIHtcclxuICAgIG93bmVyLl9fZGF0YSA9IG93bmVyLl9fZGF0YSB8fCB7fTtcclxuICAgIG93bmVyLl9fZGF0YVtrZXldID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHRlbmQoKSB7XHJcbiAgbGV0IG9wdGlvbnMsXHJcbiAgICBuYW1lLFxyXG4gICAgc3JjLFxyXG4gICAgY29weSxcclxuICAgIGNvcHlJc0FycmF5LFxyXG4gICAgY2xvbmUsXHJcbiAgICB0YXJnZXQgPSBhcmd1bWVudHNbMF0gfHwge30sXHJcbiAgICBpID0gMSxcclxuICAgIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXHJcbiAgICBkZWVwID0gZmFsc2U7XHJcblxyXG4gIC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cclxuICBpZiAodHlwZW9mIHRhcmdldCA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgIGRlZXAgPSB0YXJnZXQ7XHJcblxyXG4gICAgLy8gU2tpcCB0aGUgYm9vbGVhbiBhbmQgdGhlIHRhcmdldFxyXG4gICAgdGFyZ2V0ID0gYXJndW1lbnRzW2ldIHx8IHt9O1xyXG4gICAgaSsrO1xyXG4gIH1cclxuXHJcbiAgLy8gSGFuZGxlIGNhc2Ugd2hlbiB0YXJnZXQgaXMgYSBzdHJpbmcgb3Igc29tZXRoaW5nIChwb3NzaWJsZSBpbiBkZWVwIGNvcHkpXHJcbiAgaWYgKHR5cGVvZiB0YXJnZXQgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHRhcmdldCAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICB0YXJnZXQgPSB7fTtcclxuICB9XHJcblxyXG4gIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcclxuICAgIGlmICgob3B0aW9ucyA9IGFyZ3VtZW50c1tpXSkgIT0gbnVsbCkge1xyXG4gICAgICAvLyBFeHRlbmQgdGhlIGJhc2Ugb2JqZWN0XHJcbiAgICAgIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgc3JjID0gdGFyZ2V0W25hbWVdO1xyXG4gICAgICAgIGNvcHkgPSBvcHRpb25zW25hbWVdO1xyXG5cclxuICAgICAgICAvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXHJcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gY29weSkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBkZWVwICYmXHJcbiAgICAgICAgICBjb3B5ICYmXHJcbiAgICAgICAgICAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNvcHkpID09PSBcIltvYmplY3QgT2JqZWN0XVwiIHx8XHJcbiAgICAgICAgICAgIChjb3B5SXNBcnJheSA9IEFycmF5LmlzQXJyYXkoY29weSkpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKGNvcHlJc0FycmF5KSB7XHJcbiAgICAgICAgICAgIGNvcHlJc0FycmF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNsb25lID0gc3JjICYmIEFycmF5LmlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2xvbmUgPVxyXG4gICAgICAgICAgICAgIHNyYyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3JjKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIlxyXG4gICAgICAgICAgICAgICAgPyBzcmNcclxuICAgICAgICAgICAgICAgIDoge307XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXHJcbiAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBleHRlbmQoZGVlcCwgY2xvbmUsIGNvcHkpO1xyXG5cclxuICAgICAgICAgIC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcclxuICAgICAgICB9IGVsc2UgaWYgKGNvcHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGFyZ2V0W25hbWVdID0gY29weTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJldHVybiB0aGUgbW9kaWZpZWQgb2JqZWN0XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG4iLCAiaW1wb3J0IHdpbmRvdyBmcm9tIFwiLi4vZ2xvYmFsL3dpbmRvd1wiO1xyXG5cclxuaW1wb3J0IGV4dGVuZCBmcm9tIFwiLi9leHRlbmRcIjtcclxuaW1wb3J0IERlcGVuZGVuY3lMaWIgZnJvbSBcIi4vaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWJcIjtcclxuXHJcbmV4cG9ydCB7IG9uLCBvZmYsIHRyaWdnZXIsIEV2bnQgYXMgRXZlbnQgfTtcclxuXHJcbmNvbnN0IGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xyXG5cclxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQoZWxlbSkge1xyXG4gIHJldHVybiBlbGVtIGluc3RhbmNlb2YgRWxlbWVudDtcclxufVxyXG5cclxubGV0IEV2bnQ7XHJcbmlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICBFdm50ID0gd2luZG93LkN1c3RvbUV2ZW50O1xyXG59IGVsc2UgaWYgKHdpbmRvdy5FdmVudCAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5jcmVhdGVFdmVudCkge1xyXG4gIEV2bnQgPSBmdW5jdGlvbiAoZXZlbnQsIHBhcmFtcykge1xyXG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHtcclxuICAgICAgYnViYmxlczogZmFsc2UsXHJcbiAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxyXG4gICAgICBjb21wb3NlZDogdHJ1ZSxcclxuICAgICAgZGV0YWlsOiB1bmRlZmluZWRcclxuICAgIH07XHJcbiAgICBjb25zdCBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xyXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChcclxuICAgICAgZXZlbnQsXHJcbiAgICAgIHBhcmFtcy5idWJibGVzLFxyXG4gICAgICBwYXJhbXMuY2FuY2VsYWJsZSxcclxuICAgICAgcGFyYW1zLmRldGFpbFxyXG4gICAgKTtcclxuICAgIHJldHVybiBldnQ7XHJcbiAgfTtcclxuICBFdm50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGU7XHJcbn0gZWxzZSBpZiAodHlwZW9mIEV2ZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgLy8gbm9kZWpzXHJcbiAgRXZudCA9IEV2ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbihldmVudHMsIGhhbmRsZXIpIHtcclxuICBmdW5jdGlvbiBhZGRFdmVudChldiwgbmFtZXNwYWNlKSB7XHJcbiAgICAvLyByZWdpc3RlciBkb21ldmVudFxyXG4gICAgaWYgKGVsZW0uYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAvLyBhbGwgYnJvd3NlcnMgZXhjZXB0IElFIGJlZm9yZSB2ZXJzaW9uIDlcclxuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKGV2LCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW0uYXR0YWNoRXZlbnQpIHtcclxuICAgICAgLy8gSUUgYmVmb3JlIHZlcnNpb24gOVxyXG4gICAgICBlbGVtLmF0dGFjaEV2ZW50KGBvbiR7ZXZ9YCwgaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBldmVudFJlZ2lzdHJ5W2V2XSA9IGV2ZW50UmVnaXN0cnlbZXZdIHx8IHt9O1xyXG4gICAgZXZlbnRSZWdpc3RyeVtldl1bbmFtZXNwYWNlXSA9IGV2ZW50UmVnaXN0cnlbZXZdW25hbWVzcGFjZV0gfHwgW107XHJcbiAgICBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdLnB1c2goaGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNWYWxpZEVsZW1lbnQodGhpc1swXSkpIHtcclxuICAgIHZhciBldmVudFJlZ2lzdHJ5ID0gdGhpc1swXS5ldmVudFJlZ2lzdHJ5LFxyXG4gICAgICBlbGVtID0gdGhpc1swXTtcclxuXHJcbiAgICBldmVudHMuc3BsaXQoXCIgXCIpLmZvckVhY2goKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IFtldiwgbmFtZXNwYWNlID0gXCJnbG9iYWxcIl0gPSBldmVudC5zcGxpdChcIi5cIik7XHJcbiAgICAgIGFkZEV2ZW50KGV2LCBuYW1lc3BhY2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvZmYoZXZlbnRzLCBoYW5kbGVyKSB7XHJcbiAgbGV0IGV2ZW50UmVnaXN0cnksIGVsZW07XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUV2ZW50KGV2LCBuYW1lc3BhY2UsIGhhbmRsZXIpIHtcclxuICAgIGlmIChldiBpbiBldmVudFJlZ2lzdHJ5ID09PSB0cnVlKSB7XHJcbiAgICAgIC8vIHVuYmluZCB0byBkb20gZXZlbnRzXHJcbiAgICAgIGlmIChlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAvLyBhbGwgYnJvd3NlcnMgZXhjZXB0IElFIGJlZm9yZSB2ZXJzaW9uIDlcclxuICAgICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXYsIGhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgfSBlbHNlIGlmIChlbGVtLmRldGFjaEV2ZW50KSB7XHJcbiAgICAgICAgLy8gSUUgYmVmb3JlIHZlcnNpb24gOVxyXG4gICAgICAgIGVsZW0uZGV0YWNoRXZlbnQoYG9uJHtldn1gLCBoYW5kbGVyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmFtZXNwYWNlID09PSBcImdsb2JhbFwiKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBubXNwIGluIGV2ZW50UmVnaXN0cnlbZXZdKSB7XHJcbiAgICAgICAgICBldmVudFJlZ2lzdHJ5W2V2XVtubXNwXS5zcGxpY2UoXHJcbiAgICAgICAgICAgIGV2ZW50UmVnaXN0cnlbZXZdW25tc3BdLmluZGV4T2YoaGFuZGxlciksXHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV2ZW50UmVnaXN0cnlbZXZdW25hbWVzcGFjZV0uc3BsaWNlKFxyXG4gICAgICAgICAgZXZlbnRSZWdpc3RyeVtldl1bbmFtZXNwYWNlXS5pbmRleE9mKGhhbmRsZXIpLFxyXG4gICAgICAgICAgMVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc29sdmVOYW1lc3BhY2UoZXYsIG5hbWVzcGFjZSkge1xyXG4gICAgbGV0IGV2dHMgPSBbXSxcclxuICAgICAgaG5keCxcclxuICAgICAgaG5kTDtcclxuICAgIGlmIChldi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgaG5keCA9IDAsIGhuZEwgPSBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdLmxlbmd0aDtcclxuICAgICAgICAgIGhuZHggPCBobmRMO1xyXG4gICAgICAgICAgaG5keCsrXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBldnRzLnB1c2goe1xyXG4gICAgICAgICAgICBldixcclxuICAgICAgICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2UgJiYgbmFtZXNwYWNlLmxlbmd0aCA+IDAgPyBuYW1lc3BhY2UgOiBcImdsb2JhbFwiLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdW2huZHhdXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXZ0cy5wdXNoKHtcclxuICAgICAgICAgIGV2LFxyXG4gICAgICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2UgJiYgbmFtZXNwYWNlLmxlbmd0aCA+IDAgPyBuYW1lc3BhY2UgOiBcImdsb2JhbFwiLFxyXG4gICAgICAgICAgaGFuZGxlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKG5hbWVzcGFjZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZXZOZHggaW4gZXZlbnRSZWdpc3RyeSkge1xyXG4gICAgICAgIGZvciAoY29uc3Qgbm1zcCBpbiBldmVudFJlZ2lzdHJ5W2V2TmR4XSkge1xyXG4gICAgICAgICAgaWYgKG5tc3AgPT09IG5hbWVzcGFjZSkge1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgICAgIGhuZHggPSAwLCBobmRMID0gZXZlbnRSZWdpc3RyeVtldk5keF1bbm1zcF0ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaG5keCA8IGhuZEw7XHJcbiAgICAgICAgICAgICAgICBobmR4KytcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGV2dHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgIGV2OiBldk5keCxcclxuICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlOiBubXNwLFxyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVyOiBldmVudFJlZ2lzdHJ5W2V2TmR4XVtubXNwXVtobmR4XVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGV2dHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBldjogZXZOZHgsXHJcbiAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG5tc3AsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZXZ0cztcclxuICB9XHJcblxyXG4gIGlmIChpc1ZhbGlkRWxlbWVudCh0aGlzWzBdKSAmJiBldmVudHMpIHtcclxuICAgIGV2ZW50UmVnaXN0cnkgPSB0aGlzWzBdLmV2ZW50UmVnaXN0cnk7XHJcbiAgICBlbGVtID0gdGhpc1swXTtcclxuXHJcbiAgICBldmVudHMuc3BsaXQoXCIgXCIpLmZvckVhY2goKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IFtldiwgbmFtZXNwYWNlXSA9IGV2ZW50LnNwbGl0KFwiLlwiKTtcclxuICAgICAgcmVzb2x2ZU5hbWVzcGFjZShldiwgbmFtZXNwYWNlKS5mb3JFYWNoKFxyXG4gICAgICAgICh7IGV2OiBldjEsIGhhbmRsZXI6IGhhbmRsZXIxLCBuYW1lc3BhY2U6IG5hbWVzcGFjZTEgfSkgPT4ge1xyXG4gICAgICAgICAgcmVtb3ZlRXZlbnQoZXYxLCBuYW1lc3BhY2UxLCBoYW5kbGVyMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0cmlnZ2VyKGV2ZW50cyAvKiAsIGFyZ3MuLi4gKi8pIHtcclxuICBpZiAoaXNWYWxpZEVsZW1lbnQodGhpc1swXSkpIHtcclxuICAgIGNvbnN0IGV2ZW50UmVnaXN0cnkgPSB0aGlzWzBdLmV2ZW50UmVnaXN0cnksXHJcbiAgICAgIGVsZW0gPSB0aGlzWzBdLFxyXG4gICAgICBfZXZlbnRzID0gdHlwZW9mIGV2ZW50cyA9PT0gXCJzdHJpbmdcIiA/IGV2ZW50cy5zcGxpdChcIiBcIikgOiBbZXZlbnRzLnR5cGVdO1xyXG4gICAgZm9yIChsZXQgZW5keCA9IDA7IGVuZHggPCBfZXZlbnRzLmxlbmd0aDsgZW5keCsrKSB7XHJcbiAgICAgIGNvbnN0IG5zRXZlbnQgPSBfZXZlbnRzW2VuZHhdLnNwbGl0KFwiLlwiKSxcclxuICAgICAgICBldiA9IG5zRXZlbnRbMF0sXHJcbiAgICAgICAgbmFtZXNwYWNlID0gbnNFdmVudFsxXSB8fCBcImdsb2JhbFwiO1xyXG4gICAgICBpZiAoZG9jdW1lbnQgIT09IHVuZGVmaW5lZCAmJiBuYW1lc3BhY2UgPT09IFwiZ2xvYmFsXCIpIHtcclxuICAgICAgICAvLyB0cmlnZ2VyIGRvbWV2ZW50XHJcbiAgICAgICAgdmFyIGV2bnQsXHJcbiAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXHJcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbXBvc2VkOiB0cnVlLFxyXG4gICAgICAgICAgICBkZXRhaWw6IGFyZ3VtZW50c1sxXVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAvLyBUaGUgY3VzdG9tIGV2ZW50IHRoYXQgd2lsbCBiZSBjcmVhdGVkXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGV2KSB7XHJcbiAgICAgICAgICAgICAgY2FzZSBcImlucHV0XCI6XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuaW5wdXRUeXBlID0gXCJpbnNlcnRUZXh0XCI7XHJcbiAgICAgICAgICAgICAgICBldm50ID0gbmV3IElucHV0RXZlbnQoZXYsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZXZudCA9IG5ldyBDdXN0b21FdmVudChldiwgcGFyYW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBldm50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcclxuICAgICAgICAgICAgZXZudC5pbml0Q3VzdG9tRXZlbnQoXHJcbiAgICAgICAgICAgICAgZXYsXHJcbiAgICAgICAgICAgICAgcGFyYW1zLmJ1YmJsZXMsXHJcbiAgICAgICAgICAgICAgcGFyYW1zLmNhbmNlbGFibGUsXHJcbiAgICAgICAgICAgICAgcGFyYW1zLmRldGFpbFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGV2ZW50cy50eXBlKSBleHRlbmQoZXZudCwgZXZlbnRzKTtcclxuICAgICAgICAgIGVsZW0uZGlzcGF0Y2hFdmVudChldm50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZXZudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KCk7XHJcbiAgICAgICAgICBldm50LmV2ZW50VHlwZSA9IGV2O1xyXG4gICAgICAgICAgZXZudC5kZXRhaWwgPSBhcmd1bWVudHNbMV07XHJcbiAgICAgICAgICBpZiAoZXZlbnRzLnR5cGUpIGV4dGVuZChldm50LCBldmVudHMpO1xyXG4gICAgICAgICAgZWxlbS5maXJlRXZlbnQoXCJvblwiICsgZXZudC5ldmVudFR5cGUsIGV2bnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChldmVudFJlZ2lzdHJ5W2V2XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYXJndW1lbnRzWzBdID0gYXJndW1lbnRzWzBdLnR5cGVcclxuICAgICAgICAgID8gYXJndW1lbnRzWzBdXHJcbiAgICAgICAgICA6IERlcGVuZGVuY3lMaWIuRXZlbnQoYXJndW1lbnRzWzBdKTtcclxuICAgICAgICBhcmd1bWVudHNbMF0uZGV0YWlsID0gYXJndW1lbnRzLnNsaWNlKDEpO1xyXG5cclxuICAgICAgICBjb25zdCByZWdpc3RyeSA9IGV2ZW50UmVnaXN0cnlbZXZdLFxyXG4gICAgICAgICAgaGFuZGxlcnMgPVxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgPT09IFwiZ2xvYmFsXCJcclxuICAgICAgICAgICAgICA/IE9iamVjdC52YWx1ZXMocmVnaXN0cnkpLmZsYXQoKVxyXG4gICAgICAgICAgICAgIDogcmVnaXN0cnlbbmFtZXNwYWNlXTtcclxuICAgICAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyLmFwcGx5KGVsZW0sIGFyZ3VtZW50cykpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcbiIsICIvKlxyXG4gSW5wdXQgTWFzayBwbHVnaW4gZGVwZW5kZW5jeUxpYlxyXG4gaHR0cDovL2dpdGh1Yi5jb20vUm9iaW5IZXJib3RzL2pxdWVyeS5pbnB1dG1hc2tcclxuIENvcHlyaWdodCAoYykgUm9iaW4gSGVyYm90c1xyXG4gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHdpbmRvdyBmcm9tIFwiLi4vZ2xvYmFsL3dpbmRvd1wiO1xyXG5cclxuaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YVwiO1xyXG5pbXBvcnQgeyBvbiwgb2ZmLCB0cmlnZ2VyLCBFdmVudCB9IGZyb20gXCIuL2V2ZW50c1wiO1xyXG5pbXBvcnQgZXh0ZW5kIGZyb20gXCIuL2V4dGVuZFwiO1xyXG5cclxuY29uc3QgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XHJcblxyXG5mdW5jdGlvbiBEZXBlbmRlbmN5TGliKGVsZW0pIHtcclxuICBpZiAoZWxlbSBpbnN0YW5jZW9mIERlcGVuZGVuY3lMaWIpIHtcclxuICAgIHJldHVybiBlbGVtO1xyXG4gIH1cclxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRGVwZW5kZW5jeUxpYikpIHtcclxuICAgIHJldHVybiBuZXcgRGVwZW5kZW5jeUxpYihlbGVtKTtcclxuICB9XHJcbiAgaWYgKGVsZW0gIT09IHVuZGVmaW5lZCAmJiBlbGVtICE9PSBudWxsICYmIGVsZW0gIT09IHdpbmRvdykge1xyXG4gICAgdGhpc1swXSA9IGVsZW0ubm9kZU5hbWVcclxuICAgICAgPyBlbGVtXHJcbiAgICAgIDogZWxlbVswXSAhPT0gdW5kZWZpbmVkICYmIGVsZW1bMF0ubm9kZU5hbWVcclxuICAgICAgPyBlbGVtWzBdXHJcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcclxuICAgIGlmICh0aGlzWzBdICE9PSB1bmRlZmluZWQgJiYgdGhpc1swXSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzWzBdLmV2ZW50UmVnaXN0cnkgPSB0aGlzWzBdLmV2ZW50UmVnaXN0cnkgfHwge307XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5EZXBlbmRlbmN5TGliLnByb3RvdHlwZSA9IHtcclxuICBvbixcclxuICBvZmYsXHJcbiAgdHJpZ2dlclxyXG59O1xyXG5cclxuLy8gc3RhdGljXHJcbkRlcGVuZGVuY3lMaWIuZXh0ZW5kID0gZXh0ZW5kO1xyXG5EZXBlbmRlbmN5TGliLmRhdGEgPSBkYXRhO1xyXG5EZXBlbmRlbmN5TGliLkV2ZW50ID0gRXZlbnQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXBlbmRlbmN5TGliO1xyXG4iLCAiaW1wb3J0IHdpbmRvdyBmcm9tIFwiLi9nbG9iYWwvd2luZG93XCI7XHJcblxyXG5jb25zdCB1YSA9ICh3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSB8fCBcIlwiLFxyXG4gIGllID0gdWEuaW5kZXhPZihcIk1TSUUgXCIpID4gMCB8fCB1YS5pbmRleE9mKFwiVHJpZGVudC9cIikgPiAwLFxyXG4gIG1vYmlsZSA9XHJcbiAgICAod2luZG93Lm5hdmlnYXRvciAmJlxyXG4gICAgICB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudERhdGEgJiZcclxuICAgICAgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnREYXRhLm1vYmlsZSkgfHxcclxuICAgICh3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMpIHx8XHJcbiAgICBcIm9udG91Y2hzdGFydFwiIGluIHdpbmRvdywgLy8gbm90IGVudGlyZWx5IGNvcnJlY3QgYnV0IHdpbGwgY3VycmVudGx5IGRvXHJcbiAgaXBob25lID0gL2lwaG9uZS9pLnRlc3QodWEpO1xyXG5cclxuZXhwb3J0IHsgaWUsIG1vYmlsZSwgaXBob25lIH07XHJcbiIsICJleHBvcnQgeyBrZXlDb2RlLCB0b0tleSwgdG9LZXlDb2RlLCBrZXlzIH07XHJcblxyXG5jb25zdCBpZ25vcmFibGVzID0ge1xyXG4gIEFsdDogMTgsXHJcbiAgQWx0R3JhcGg6IDE4LFxyXG4gIEFycm93RG93bjogNDAsXHJcbiAgQXJyb3dMZWZ0OiAzNyxcclxuICBBcnJvd1JpZ2h0OiAzOSxcclxuICBBcnJvd1VwOiAzOCxcclxuICBCYWNrc3BhY2U6IDgsXHJcbiAgQ2Fwc0xvY2s6IDIwLFxyXG4gIENvbnRyb2w6IDE3LFxyXG4gIENvbnRleHRNZW51OiA5MyxcclxuICBEZWFkOiAyMjEsXHJcbiAgRGVsZXRlOiA0NixcclxuICBFbmQ6IDM1LFxyXG4gIEVzY2FwZTogMjcsXHJcbiAgRjE6IDExMixcclxuICBGMjogMTEzLFxyXG4gIEYzOiAxMTQsXHJcbiAgRjQ6IDExNSxcclxuICBGNTogMTE2LFxyXG4gIEY2OiAxMTcsXHJcbiAgRjc6IDExOCxcclxuICBGODogMTE5LFxyXG4gIEY5OiAxMjAsXHJcbiAgRjEwOiAxMjEsXHJcbiAgRjExOiAxMjIsXHJcbiAgRjEyOiAxMjMsXHJcbiAgSG9tZTogMzYsXHJcbiAgSW5zZXJ0OiA0NSxcclxuICBOdW1Mb2NrOiAxNDQsXHJcbiAgUGFnZURvd246IDM0LFxyXG4gIFBhZ2VVcDogMzMsXHJcbiAgUGF1c2U6IDE5LFxyXG4gIFByaW50U2NyZWVuOiA0NCxcclxuICBQcm9jZXNzOiAyMjksXHJcbiAgU2hpZnQ6IDE2LFxyXG4gIFNjcm9sbExvY2s6IDE0NSxcclxuICBUYWI6IDksXHJcbiAgVW5pZGVudGlmaWVkOiAyMjlcclxufTtcclxuXHJcbnZhciBrZXlDb2RlID0ge1xyXG4gIGM6IDY3LFxyXG4gIHg6IDg4LFxyXG4gIHo6IDkwLFxyXG4gIEJBQ0tTUEFDRV9TQUZBUkk6IDEyNyxcclxuICBFbnRlcjogMTMsXHJcbiAgTWV0YV9MRUZUOiA5MSxcclxuICBNZXRhX1JJR0hUOiA5MixcclxuICBTcGFjZTogMzIsXHJcbiAgLi4uaWdub3JhYmxlc1xyXG59O1xyXG5cclxuY29uc3Qga2V5Q29kZVJldiA9IE9iamVjdC5lbnRyaWVzKGtleUNvZGUpLnJlZHVjZShcclxuICAgIChhY2MsIFtrZXksIHZhbHVlXSkgPT5cclxuICAgICAgKFxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcclxuICAgICAgICAoYWNjW3ZhbHVlXSA9IGFjY1t2YWx1ZV0gPT09IHVuZGVmaW5lZCA/IGtleSA6IGFjY1t2YWx1ZV0pLCBhY2NcclxuICAgICAgKSxcclxuICAgIHt9XHJcbiAgKSxcclxuICBrZXlzID0gT2JqZWN0LmVudHJpZXMoa2V5Q29kZSkucmVkdWNlKFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xyXG4gICAgKGFjYywgW2tleSwgdmFsdWVdKSA9PiAoKGFjY1trZXldID0ga2V5ID09PSBcIlNwYWNlXCIgPyBcIiBcIiA6IGtleSksIGFjYyksXHJcbiAgICB7fVxyXG4gICk7XHJcblxyXG5mdW5jdGlvbiB0b0tleShrZXlDb2RlLCBzaGlmdEtleSkge1xyXG4gIHJldHVybiAoXHJcbiAgICBrZXlDb2RlUmV2W2tleUNvZGVdIHx8XHJcbiAgICAoc2hpZnRLZXlcclxuICAgICAgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKGtleUNvZGUpXHJcbiAgICAgIDogU3RyaW5nLmZyb21DaGFyQ29kZShrZXlDb2RlKS50b0xvd2VyQ2FzZSgpKVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvS2V5Q29kZShrZXkpIHtcclxuICByZXR1cm4ga2V5Q29kZVtrZXldO1xyXG59XHJcbiIsICJpbXBvcnQgSW5wdXRtYXNrIGZyb20gXCIuL2lucHV0bWFza1wiO1xyXG5pbXBvcnQgeyBnZXRMYXN0VmFsaWRQb3NpdGlvbiwgc2Vla05leHQgfSBmcm9tIFwiLi9wb3NpdGlvbmluZ1wiO1xyXG5cclxuZXhwb3J0IHtcclxuICBkZXRlcm1pbmVUZXN0VGVtcGxhdGUsXHJcbiAgZ2V0RGVjaXNpb25UYWtlcixcclxuICBnZXRNYXNrVGVtcGxhdGUsXHJcbiAgZ2V0UGxhY2Vob2xkZXIsXHJcbiAgZ2V0VGVzdCxcclxuICBnZXRUZXN0cyxcclxuICBnZXRUZXN0VGVtcGxhdGUsXHJcbiAgaXNTdWJzZXRPZlxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0TG9jYXRvcih0c3QsIGFsaWduKSB7XHJcbiAgLy8gbmVlZCB0byBhbGlnbiB0aGUgbG9jYXRvcnMgdG8gYmUgY29ycmVjdFxyXG4gIGxldCBsb2NhdG9yID0gKFxyXG4gICAgdHN0LmFsdGVybmF0aW9uICE9IHVuZGVmaW5lZCA/IHRzdC5tbG9jW2dldERlY2lzaW9uVGFrZXIodHN0KV0gOiB0c3QubG9jYXRvclxyXG4gICkuam9pbihcIlwiKTtcclxuICBpZiAobG9jYXRvciAhPT0gXCJcIikge1xyXG4gICAgbG9jYXRvciA9IGxvY2F0b3Iuc3BsaXQoXCI6XCIpWzBdOyAvLyBzdHJpcCBvZmYgYWx0ZXJuYXRpb24gbWFya2VyXHJcbiAgICB3aGlsZSAobG9jYXRvci5sZW5ndGggPCBhbGlnbikgbG9jYXRvciArPSBcIjBcIjtcclxuICB9XHJcbiAgcmV0dXJuIGxvY2F0b3I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERlY2lzaW9uVGFrZXIodHN0KSB7XHJcbiAgbGV0IGRlY2lzaW9uVGFrZXIgPSB0c3QubG9jYXRvclt0c3QuYWx0ZXJuYXRpb25dO1xyXG4gIGlmICh0eXBlb2YgZGVjaXNpb25UYWtlciA9PT0gXCJzdHJpbmdcIiAmJiBkZWNpc2lvblRha2VyLmxlbmd0aCA+IDApIHtcclxuICAgIC8vIG5vIGRlY2lzaW9uIHRha2VuIH4gdGFrZSBmaXJzdCBvbmUgYXMgZGVjaWRlclxyXG4gICAgZGVjaXNpb25UYWtlciA9IGRlY2lzaW9uVGFrZXIuc3BsaXQoXCIsXCIpWzBdO1xyXG4gIH1cclxuICByZXR1cm4gZGVjaXNpb25UYWtlciAhPT0gdW5kZWZpbmVkID8gZGVjaXNpb25UYWtlci50b1N0cmluZygpIDogXCJcIjtcclxufVxyXG5cclxuLy8gdG9iZSBwdXQgb24gcHJvdG90eXBlP1xyXG5mdW5jdGlvbiBnZXRQbGFjZWhvbGRlcihwb3MsIHRlc3QsIHJldHVyblBMKSB7XHJcbiAgY29uc3QgaW5wdXRtYXNrID0gdGhpcyxcclxuICAgIG9wdHMgPSB0aGlzLm9wdHMsXHJcbiAgICBtYXNrc2V0ID0gdGhpcy5tYXNrc2V0O1xyXG5cclxuICB0ZXN0ID0gdGVzdCB8fCBnZXRUZXN0LmNhbGwoaW5wdXRtYXNrLCBwb3MpLm1hdGNoO1xyXG5cclxuICBpZiAodGVzdC5wbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkIHx8IHJldHVyblBMID09PSB0cnVlKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRlc3QucGxhY2Vob2xkZXIgIT09IFwiXCIgJiZcclxuICAgICAgdGVzdC5zdGF0aWMgPT09IHRydWUgJiZcclxuICAgICAgdGVzdC5nZW5lcmF0ZWQgIT09IHRydWVcclxuICAgICkge1xyXG4gICAgICAvLyBzdGF0aWMgYW5kIG5vdCBkeW5hbWljYWxseSBnZW5lcmF0ZWQgfiBkb2VzIG5vdCBvY2N1ciBpbiByZWdleCBtYXNrIH4gbnVtZXJpYyBhbGlhcyBkZWYgaXMgbm90IGEgdmFsaWQgZW50cnlcclxuICAgICAgY29uc3QgbHZwID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChpbnB1dG1hc2ssIHBvcyksXHJcbiAgICAgICAgbmV4dFBvcyA9IHNlZWtOZXh0LmNhbGwoaW5wdXRtYXNrLCBsdnApO1xyXG4gICAgICByZXR1cm4gKHJldHVyblBMID8gcG9zIDw9IG5leHRQb3MgOiBwb3MgPCBuZXh0UG9zKVxyXG4gICAgICAgID8gb3B0cy5zdGF0aWNEZWZpbml0aW9uU3ltYm9sICYmIHRlc3Quc3RhdGljXHJcbiAgICAgICAgICA/IHRlc3QubmF0aXZlRGVmXHJcbiAgICAgICAgICA6IHRlc3QuZGVmXHJcbiAgICAgICAgOiB0eXBlb2YgdGVzdC5wbGFjZWhvbGRlciA9PT0gXCJmdW5jdGlvblwiXHJcbiAgICAgICAgPyB0ZXN0LnBsYWNlaG9sZGVyKG9wdHMpXHJcbiAgICAgICAgOiB0ZXN0LnBsYWNlaG9sZGVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiB0ZXN0LnBsYWNlaG9sZGVyID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgICA/IHRlc3QucGxhY2Vob2xkZXIob3B0cylcclxuICAgICAgICA6IHRlc3QucGxhY2Vob2xkZXI7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICh0ZXN0LnN0YXRpYyA9PT0gdHJ1ZSkge1xyXG4gICAgaWYgKHBvcyA+IC0xICYmIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGxldCB0ZXN0cyA9IGdldFRlc3RzLmNhbGwoaW5wdXRtYXNrLCBwb3MpLFxyXG4gICAgICAgIHN0YXRpY0FsdGVybmF0aW9ucyA9IFtdLFxyXG4gICAgICAgIHByZXZUZXN0O1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdHlwZW9mIG9wdHMucGxhY2Vob2xkZXIgPT09IFwic3RyaW5nXCIgJiZcclxuICAgICAgICB0ZXN0cy5sZW5ndGggPiAxICsgKHRlc3RzW3Rlc3RzLmxlbmd0aCAtIDFdLm1hdGNoLmRlZiA9PT0gXCJcIiA/IDEgOiAwKVxyXG4gICAgICApIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlc3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRlc3RzW2ldLm1hdGNoLmRlZiAhPT0gXCJcIiAmJlxyXG4gICAgICAgICAgICB0ZXN0c1tpXS5tYXRjaC5vcHRpb25hbGl0eSAhPT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICB0ZXN0c1tpXS5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgIT09IHRydWUgJiZcclxuICAgICAgICAgICAgKHRlc3RzW2ldLm1hdGNoLnN0YXRpYyA9PT0gdHJ1ZSB8fFxyXG4gICAgICAgICAgICAgIHByZXZUZXN0ID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICB0ZXN0c1tpXS5tYXRjaC5mbi50ZXN0KFxyXG4gICAgICAgICAgICAgICAgcHJldlRlc3QubWF0Y2guZGVmLFxyXG4gICAgICAgICAgICAgICAgbWFza3NldCxcclxuICAgICAgICAgICAgICAgIHBvcyxcclxuICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICBvcHRzXHJcbiAgICAgICAgICAgICAgKSAhPT0gZmFsc2UpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgc3RhdGljQWx0ZXJuYXRpb25zLnB1c2godGVzdHNbaV0pO1xyXG4gICAgICAgICAgICBpZiAodGVzdHNbaV0ubWF0Y2guc3RhdGljID09PSB0cnVlKSBwcmV2VGVzdCA9IHRlc3RzW2ldO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGljQWx0ZXJuYXRpb25zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICBpZiAoL1swLTlhLWJBLVpdLy50ZXN0KHN0YXRpY0FsdGVybmF0aW9uc1swXS5tYXRjaC5kZWYpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0cy5wbGFjZWhvbGRlci5jaGFyQXQocG9zICUgb3B0cy5wbGFjZWhvbGRlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlc3QuZGVmO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHR5cGVvZiBvcHRzLnBsYWNlaG9sZGVyID09PSBcIm9iamVjdFwiXHJcbiAgICA/IHRlc3QuZGVmXHJcbiAgICA6IG9wdHMucGxhY2Vob2xkZXIuY2hhckF0KHBvcyAlIG9wdHMucGxhY2Vob2xkZXIubGVuZ3RoKTtcclxufVxyXG5cclxuLy8gdG9iZSBwdXQgb24gcHJvdG90eXBlP1xyXG5mdW5jdGlvbiBnZXRNYXNrVGVtcGxhdGUoXHJcbiAgYmFzZU9uSW5wdXQsXHJcbiAgbWluaW1hbFBvcyxcclxuICBpbmNsdWRlTW9kZSxcclxuICBub0ppdCxcclxuICBjbGVhck9wdGlvbmFsVGFpbFxyXG4pIHtcclxuICAvLyBpbmNsdWRlTW9kZSB0cnVlID0+IGlucHV0LCB1bmRlZmluZWQgPT4gcGxhY2Vob2xkZXIsIGZhbHNlID0+IG1hc2tcclxuXHJcbiAgY29uc3QgaW5wdXRtYXNrID0gdGhpcyxcclxuICAgIG9wdHMgPSB0aGlzLm9wdHMsXHJcbiAgICBtYXNrc2V0ID0gdGhpcy5tYXNrc2V0LFxyXG4gICAgZ3JlZWR5ID0gb3B0cy5ncmVlZHk7XHJcbiAgaWYgKGNsZWFyT3B0aW9uYWxUYWlsICYmIG9wdHMuZ3JlZWR5KSB7XHJcbiAgICBvcHRzLmdyZWVkeSA9IGZhbHNlO1xyXG4gICAgaW5wdXRtYXNrLm1hc2tzZXQudGVzdHMgPSB7fTtcclxuICB9XHJcbiAgbWluaW1hbFBvcyA9IG1pbmltYWxQb3MgfHwgMDtcclxuICBsZXQgbWFza1RlbXBsYXRlID0gW10sXHJcbiAgICBuZHhJbnRsenIsXHJcbiAgICBwb3MgPSAwLFxyXG4gICAgdGVzdCxcclxuICAgIHRlc3RQb3MsXHJcbiAgICBqaXRSZW5kZXJTdGF0aWM7XHJcbiAgZG8ge1xyXG4gICAgaWYgKGJhc2VPbklucHV0ID09PSB0cnVlICYmIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zXSkge1xyXG4gICAgICB0ZXN0UG9zID1cclxuICAgICAgICBjbGVhck9wdGlvbmFsVGFpbCAmJlxyXG4gICAgICAgIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zXS5tYXRjaC5vcHRpb25hbGl0eSAmJlxyXG4gICAgICAgIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zICsgMV0gPT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIChtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc10uZ2VuZXJhdGVkSW5wdXQgPT09IHRydWUgfHxcclxuICAgICAgICAgIChtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc10uaW5wdXQgPT1cclxuICAgICAgICAgICAgb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyICYmXHJcbiAgICAgICAgICAgIHBvcyA+IDApKVxyXG4gICAgICAgICAgPyBkZXRlcm1pbmVUZXN0VGVtcGxhdGUuY2FsbChcclxuICAgICAgICAgICAgICBpbnB1dG1hc2ssXHJcbiAgICAgICAgICAgICAgcG9zLFxyXG4gICAgICAgICAgICAgIGdldFRlc3RzLmNhbGwoaW5wdXRtYXNrLCBwb3MsIG5keEludGx6ciwgcG9zIC0gMSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgOiBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc107XHJcbiAgICAgIHRlc3QgPSB0ZXN0UG9zLm1hdGNoO1xyXG4gICAgICBuZHhJbnRsenIgPSB0ZXN0UG9zLmxvY2F0b3Iuc2xpY2UoKTtcclxuICAgICAgbWFza1RlbXBsYXRlLnB1c2goXHJcbiAgICAgICAgaW5jbHVkZU1vZGUgPT09IHRydWVcclxuICAgICAgICAgID8gdGVzdFBvcy5pbnB1dFxyXG4gICAgICAgICAgOiBpbmNsdWRlTW9kZSA9PT0gZmFsc2VcclxuICAgICAgICAgID8gdGVzdC5uYXRpdmVEZWZcclxuICAgICAgICAgIDogZ2V0UGxhY2Vob2xkZXIuY2FsbChpbnB1dG1hc2ssIHBvcywgdGVzdClcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRlc3RQb3MgPSBnZXRUZXN0VGVtcGxhdGUuY2FsbChpbnB1dG1hc2ssIHBvcywgbmR4SW50bHpyLCBwb3MgLSAxKTtcclxuICAgICAgdGVzdCA9IHRlc3RQb3MubWF0Y2g7XHJcbiAgICAgIG5keEludGx6ciA9IHRlc3RQb3MubG9jYXRvci5zbGljZSgpO1xyXG4gICAgICBjb25zdCBqaXRNYXNraW5nID1cclxuICAgICAgICBub0ppdCA9PT0gdHJ1ZVxyXG4gICAgICAgICAgPyBmYWxzZVxyXG4gICAgICAgICAgOiBvcHRzLmppdE1hc2tpbmcgIT09IGZhbHNlXHJcbiAgICAgICAgICA/IG9wdHMuaml0TWFza2luZ1xyXG4gICAgICAgICAgOiB0ZXN0LmppdDtcclxuICAgICAgLy8gY2hlY2sgZm9yIGdyb3VwU2VwYXJhdG9yIGlzIGEgaGFjayBmb3IgdGhlIG51bWVyaWNzIGFzIHdlIGRvbid0IHdhbnQgdGhlIHJlbmRlciBvZiB0aGUgZ3JvdXBTZXBhcmF0b3IgYmVmb3JlaGFuZFxyXG4gICAgICBqaXRSZW5kZXJTdGF0aWMgPVxyXG4gICAgICAgIChqaXRSZW5kZXJTdGF0aWMgfHxcclxuICAgICAgICAgIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbXHJcbiAgICAgICAgICAgIHBvcyAtIDFcclxuICAgICAgICAgIF0pIC8qICYmIGdldFRlc3QuY2FsbChpbnB1dG1hc2ssIHBvcyArIDEpLm1hdGNoLmRlZiA9PSBcIlwiICovICYmXHJcbiAgICAgICAgdGVzdC5zdGF0aWMgJiZcclxuICAgICAgICB0ZXN0LmRlZiAhPT0gb3B0cy5ncm91cFNlcGFyYXRvciAmJlxyXG4gICAgICAgIHRlc3QuZm4gPT09IG51bGw7XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaml0UmVuZGVyU3RhdGljIHx8XHJcbiAgICAgICAgaml0TWFza2luZyA9PT0gZmFsc2UgfHxcclxuICAgICAgICBqaXRNYXNraW5nID09PSB1bmRlZmluZWQgLyogfHwgcG9zIDwgbHZwICovIHx8XHJcbiAgICAgICAgKHR5cGVvZiBqaXRNYXNraW5nID09PSBcIm51bWJlclwiICYmXHJcbiAgICAgICAgICBpc0Zpbml0ZShqaXRNYXNraW5nKSAmJlxyXG4gICAgICAgICAgaml0TWFza2luZyA+IHBvcylcclxuICAgICAgKSB7XHJcbiAgICAgICAgbWFza1RlbXBsYXRlLnB1c2goXHJcbiAgICAgICAgICBpbmNsdWRlTW9kZSA9PT0gZmFsc2VcclxuICAgICAgICAgICAgPyB0ZXN0Lm5hdGl2ZURlZlxyXG4gICAgICAgICAgICA6IGdldFBsYWNlaG9sZGVyLmNhbGwoaW5wdXRtYXNrLCBtYXNrVGVtcGxhdGUubGVuZ3RoLCB0ZXN0KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaml0UmVuZGVyU3RhdGljID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwb3MrKztcclxuICB9IHdoaWxlICh0ZXN0LnN0YXRpYyAhPT0gdHJ1ZSB8fCB0ZXN0LmRlZiAhPT0gXCJcIiB8fCBtaW5pbWFsUG9zID4gcG9zKTtcclxuICBpZiAobWFza1RlbXBsYXRlW21hc2tUZW1wbGF0ZS5sZW5ndGggLSAxXSA9PT0gXCJcIikge1xyXG4gICAgbWFza1RlbXBsYXRlLnBvcCgpOyAvLyBkcm9wIHRoZSBsYXN0IG9uZSB3aGljaCBpcyBlbXB0eVxyXG4gIH1cclxuICBpZiAoXHJcbiAgICBpbmNsdWRlTW9kZSAhPT0gZmFsc2UgfHwgLy8gZG8gbm90IGFsdGVyIHRoZSBtYXNrbGVuZ3RoIHdoZW4ganVzdCByZXRyaWV2aW5nIHRoZSBtYXNrZGVmaW5pdGlvblxyXG4gICAgbWFza3NldC5tYXNrTGVuZ3RoID09PSB1bmRlZmluZWRcclxuICApIHtcclxuICAgIC8vIGp1c3QgbWFrZSBzdXJlIHRoZSBtYXNrTGVuZ3RoIGdldHMgaW5pdGlhbGl6ZWQgaW4gYWxsIGNhc2VzIChuZWVkZWQgZm9yIGlzVmFsaWQpXHJcbiAgICBtYXNrc2V0Lm1hc2tMZW5ndGggPSBwb3MgLSAxO1xyXG4gIH1cclxuXHJcbiAgb3B0cy5ncmVlZHkgPSBncmVlZHk7XHJcbiAgcmV0dXJuIG1hc2tUZW1wbGF0ZTtcclxufVxyXG5cclxuLy8gdG9iZSBwdXQgb24gcHJvdG90eXBlP1xyXG5mdW5jdGlvbiBnZXRUZXN0VGVtcGxhdGUocG9zLCBuZHhJbnRsenIsIHRzdFBzKSB7XHJcbiAgY29uc3QgaW5wdXRtYXNrID0gdGhpcyxcclxuICAgIG1hc2tzZXQgPSB0aGlzLm1hc2tzZXQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc10gfHxcclxuICAgIGRldGVybWluZVRlc3RUZW1wbGF0ZS5jYWxsKFxyXG4gICAgICBpbnB1dG1hc2ssXHJcbiAgICAgIHBvcyxcclxuICAgICAgZ2V0VGVzdHMuY2FsbChcclxuICAgICAgICBpbnB1dG1hc2ssXHJcbiAgICAgICAgcG9zLFxyXG4gICAgICAgIG5keEludGx6ciA/IG5keEludGx6ci5zbGljZSgpIDogbmR4SW50bHpyLFxyXG4gICAgICAgIHRzdFBzXHJcbiAgICAgIClcclxuICAgIClcclxuICApO1xyXG59XHJcblxyXG4vLyB0b2JlIHB1dCBvbiBwcm90b3R5cGU/XHJcbmZ1bmN0aW9uIGRldGVybWluZVRlc3RUZW1wbGF0ZShwb3MsIHRlc3RzKSB7XHJcbiAgbGV0IGlucHV0bWFzayA9IHRoaXMsXHJcbiAgICBvcHRzID0gdGhpcy5vcHRzLFxyXG4gICAgbGVuZ2h0T2Zmc2V0ID0gMCxcclxuICAgIG9wdGlvbmFsaXR5TGV2ZWwgPSBkZXRlcm1pbmVPcHRpb25hbGl0eUxldmVsKHBvcywgdGVzdHMpO1xyXG4gIHBvcyA9IHBvcyA+IDAgPyBwb3MgLSAxIDogMDtcclxuICBsZXQgYWx0VGVzdCA9IGdldFRlc3QuY2FsbChpbnB1dG1hc2ssIHBvcyksXHJcbiAgICB0YXJnZXRMb2NhdG9yID0gZ2V0TG9jYXRvcihhbHRUZXN0KSxcclxuICAgIHRzdExvY2F0b3IsXHJcbiAgICBjbG9zZXN0LFxyXG4gICAgYmVzdE1hdGNoO1xyXG4gIGlmIChcclxuICAgIG9wdHMuZ3JlZWR5ICYmXHJcbiAgICB0ZXN0cy5sZW5ndGggPiAxICYmXHJcbiAgICB0ZXN0c1t0ZXN0cy5sZW5ndGggLSAxXS5tYXRjaC5kZWYgPT09IFwiXCJcclxuICApXHJcbiAgICBsZW5naHRPZmZzZXQgPSAxO1xyXG4gIC8vIGNvbnNvbGUubG9nKFwiIG9wdGlvbmFsaXR5ID0gXCIgKyBvcHRpb25hbGl0eUxldmVsKTtcclxuICAvLyBjb25zb2xlLmxvZyhcIiAtIFwiICsgSlNPTi5zdHJpbmdpZnkodGVzdHMpKTtcclxuICBmb3IgKGxldCBuZHggPSAwOyBuZHggPCB0ZXN0cy5sZW5ndGggLSBsZW5naHRPZmZzZXQ7IG5keCsrKSB7XHJcbiAgICAvLyBmaW5kIGJlc3QgbWF0Y2hpbmdcclxuICAgIGNvbnN0IHRzdCA9IHRlc3RzW25keF07XHJcbiAgICB0c3RMb2NhdG9yID0gZ2V0TG9jYXRvcih0c3QsIHRhcmdldExvY2F0b3IubGVuZ3RoKTtcclxuICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5hYnModHN0TG9jYXRvciAtIHRhcmdldExvY2F0b3IpO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgdHN0LnVuTWF0Y2hlZEFsdGVybmF0aW9uU3RvcHBlZCAhPT0gdHJ1ZSB8fFxyXG4gICAgICB0ZXN0cy5maWx0ZXIoKHRzdCkgPT4gdHN0LnVuTWF0Y2hlZEFsdGVybmF0aW9uU3RvcHBlZCAhPT0gdHJ1ZSkubGVuZ3RoIDw9XHJcbiAgICAgICAgMVxyXG4gICAgKSB7XHJcbiAgICAgIC8vIG9ubHkgc2tpcCB3aGVuIHRoZXJlIGFyZSBjaG9pY2VzIG91dHNpZGUgdGhlIGFsdGVybmF0aW9uXHJcbiAgICAgIGlmIChcclxuICAgICAgICBjbG9zZXN0ID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAodHN0TG9jYXRvciAhPT0gXCJcIiAmJiBkaXN0YW5jZSA8IGNsb3Nlc3QpIHx8XHJcbiAgICAgICAgKGJlc3RNYXRjaCAmJlxyXG4gICAgICAgICAgIW9wdHMuZ3JlZWR5ICYmXHJcbiAgICAgICAgICBiZXN0TWF0Y2gubWF0Y2gub3B0aW9uYWxpdHkgJiZcclxuICAgICAgICAgIGJlc3RNYXRjaC5tYXRjaC5vcHRpb25hbGl0eSAtIG9wdGlvbmFsaXR5TGV2ZWwgPiAwICYmXHJcbiAgICAgICAgICBiZXN0TWF0Y2gubWF0Y2gubmV3QmxvY2tNYXJrZXIgPT09IFwibWFzdGVyXCIgJiZcclxuICAgICAgICAgICghdHN0Lm1hdGNoLm9wdGlvbmFsaXR5IHx8XHJcbiAgICAgICAgICAgIHRzdC5tYXRjaC5vcHRpb25hbGl0eSAtIG9wdGlvbmFsaXR5TGV2ZWwgPCAxIHx8XHJcbiAgICAgICAgICAgICF0c3QubWF0Y2gubmV3QmxvY2tNYXJrZXIpKSB8fFxyXG4gICAgICAgIChiZXN0TWF0Y2ggJiZcclxuICAgICAgICAgICFvcHRzLmdyZWVkeSAmJlxyXG4gICAgICAgICAgYmVzdE1hdGNoLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciAmJlxyXG4gICAgICAgICAgIXRzdC5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNsb3Nlc3QgPSBkaXN0YW5jZTtcclxuICAgICAgICBiZXN0TWF0Y2ggPSB0c3Q7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGJlc3RNYXRjaDtcclxufVxyXG5cclxuZnVuY3Rpb24gZGV0ZXJtaW5lT3B0aW9uYWxpdHlMZXZlbChwb3MsIHRlc3RzKSB7XHJcbiAgbGV0IG9wdGlvbmFsaXR5TGV2ZWwgPSAwLFxyXG4gICAgZGlmZmVyZW50T3B0aW9uYWxMZXZlbHMgPSBmYWxzZTtcclxuICB0ZXN0cy5mb3JFYWNoKCh0ZXN0KSA9PiB7XHJcbiAgICBpZiAodGVzdC5tYXRjaC5vcHRpb25hbGl0eSkge1xyXG4gICAgICBpZiAob3B0aW9uYWxpdHlMZXZlbCAhPT0gMCAmJiBvcHRpb25hbGl0eUxldmVsICE9PSB0ZXN0Lm1hdGNoLm9wdGlvbmFsaXR5KVxyXG4gICAgICAgIGRpZmZlcmVudE9wdGlvbmFsTGV2ZWxzID0gdHJ1ZTtcclxuICAgICAgaWYgKG9wdGlvbmFsaXR5TGV2ZWwgPT09IDAgfHwgb3B0aW9uYWxpdHlMZXZlbCA+IHRlc3QubWF0Y2gub3B0aW9uYWxpdHkpIHtcclxuICAgICAgICBvcHRpb25hbGl0eUxldmVsID0gdGVzdC5tYXRjaC5vcHRpb25hbGl0eTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGlmIChvcHRpb25hbGl0eUxldmVsKSB7XHJcbiAgICBpZiAocG9zID09IDApIG9wdGlvbmFsaXR5TGV2ZWwgPSAwO1xyXG4gICAgZWxzZSBpZiAodGVzdHMubGVuZ3RoID09IDEpIG9wdGlvbmFsaXR5TGV2ZWwgPSAwO1xyXG4gICAgZWxzZSBpZiAoIWRpZmZlcmVudE9wdGlvbmFsTGV2ZWxzKSBvcHRpb25hbGl0eUxldmVsID0gMDtcclxuICB9XHJcbiAgcmV0dXJuIG9wdGlvbmFsaXR5TGV2ZWw7XHJcbn1cclxuXHJcbi8vIHRvYmUgcHV0IG9uIHByb3RvdHlwZT9cclxuZnVuY3Rpb24gZ2V0VGVzdChwb3MsIHRlc3RzKSB7XHJcbiAgY29uc3QgaW5wdXRtYXNrID0gdGhpcyxcclxuICAgIG1hc2tzZXQgPSB0aGlzLm1hc2tzZXQ7XHJcblxyXG4gIGlmIChtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc10pIHtcclxuICAgIHJldHVybiBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc107XHJcbiAgfVxyXG4gIHJldHVybiAodGVzdHMgfHwgZ2V0VGVzdHMuY2FsbChpbnB1dG1hc2ssIHBvcykpWzBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N1YnNldE9mKHNvdXJjZSwgdGFyZ2V0LCBvcHRzKSB7XHJcbiAgZnVuY3Rpb24gZXhwYW5kKHBhdHRlcm4pIHtcclxuICAgIGxldCBleHBhbmRlZCA9IFtdLFxyXG4gICAgICBzdGFydCA9IC0xLFxyXG4gICAgICBlbmQ7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHBhdHRlcm4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIGlmIChwYXR0ZXJuLmNoYXJBdChpKSA9PT0gXCItXCIpIHtcclxuICAgICAgICBlbmQgPSBwYXR0ZXJuLmNoYXJDb2RlQXQoaSArIDEpO1xyXG4gICAgICAgIHdoaWxlICgrK3N0YXJ0IDwgZW5kKSBleHBhbmRlZC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoc3RhcnQpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGFydCA9IHBhdHRlcm4uY2hhckNvZGVBdChpKTtcclxuICAgICAgICBleHBhbmRlZC5wdXNoKHBhdHRlcm4uY2hhckF0KGkpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV4cGFuZGVkLmpvaW4oXCJcIik7XHJcbiAgfVxyXG5cclxuICBpZiAoc291cmNlLm1hdGNoLmRlZiA9PT0gdGFyZ2V0Lm1hdGNoLm5hdGl2ZURlZikgcmV0dXJuIHRydWU7XHJcblxyXG4gIGlmIChcclxuICAgIChvcHRzLnJlZ2V4IHx8XHJcbiAgICAgIChzb3VyY2UubWF0Y2guZm4gaW5zdGFuY2VvZiBSZWdFeHAgJiZcclxuICAgICAgICB0YXJnZXQubWF0Y2guZm4gaW5zdGFuY2VvZiBSZWdFeHApKSAmJlxyXG4gICAgc291cmNlLm1hdGNoLnN0YXRpYyAhPT0gdHJ1ZSAmJlxyXG4gICAgdGFyZ2V0Lm1hdGNoLnN0YXRpYyAhPT0gdHJ1ZVxyXG4gICkge1xyXG4gICAgLy8gaXMgcmVnZXggYSBzdWJzZXRcclxuICAgIGlmICh0YXJnZXQubWF0Y2guZm4uc291cmNlID09PSBcIi5cIikgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBleHBhbmQodGFyZ2V0Lm1hdGNoLmZuLnNvdXJjZS5yZXBsYWNlKC9bW1xcXS9dL2csIFwiXCIpKS5pbmRleE9mKFxyXG4gICAgICAgIGV4cGFuZChzb3VyY2UubWF0Y2guZm4uc291cmNlLnJlcGxhY2UoL1tbXFxdL10vZywgXCJcIikpXHJcbiAgICAgICkgIT09IC0xXHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8vIHRvYmUgcHV0IG9uIHByb3RvdHlwZT9cclxuZnVuY3Rpb24gZ2V0VGVzdHMocG9zLCBuZHhJbnRsenIsIHRzdFBzKSB7XHJcbiAgbGV0IGlucHV0bWFzayA9IHRoaXMsXHJcbiAgICAkID0gdGhpcy5kZXBlbmRlbmN5TGliLFxyXG4gICAgbWFza3NldCA9IHRoaXMubWFza3NldCxcclxuICAgIG9wdHMgPSB0aGlzLm9wdHMsXHJcbiAgICBlbCA9IHRoaXMuZWwsXHJcbiAgICBtYXNrVG9rZW5zID0gbWFza3NldC5tYXNrVG9rZW4sXHJcbiAgICB0ZXN0UG9zID0gbmR4SW50bHpyID8gdHN0UHMgOiAwLFxyXG4gICAgbmR4SW5pdGlhbGl6ZXIgPSBuZHhJbnRsenIgPyBuZHhJbnRsenIuc2xpY2UoKSA6IFswXSxcclxuICAgIG1hdGNoZXMgPSBbXSxcclxuICAgIGluc2VydFN0b3AgPSBmYWxzZSxcclxuICAgIGxhdGVzdE1hdGNoLFxyXG4gICAgY2FjaGVEZXBlbmRlbmN5ID0gbmR4SW50bHpyID8gbmR4SW50bHpyLmpvaW4oXCJcIikgOiBcIlwiLFxyXG4gICAgdW5NYXRjaGVkQWx0ZXJuYXRpb24gPSBmYWxzZTtcclxuXHJcbiAgZnVuY3Rpb24gcmVzb2x2ZVRlc3RGcm9tVG9rZW4oXHJcbiAgICBtYXNrVG9rZW4sXHJcbiAgICBuZHhJbml0aWFsaXplcixcclxuICAgIGxvb3BOZHgsXHJcbiAgICBxdWFudGlmaWVyUmVjdXJzZVxyXG4gICkge1xyXG4gICAgLy8gbmR4SW5pdGlhbGl6ZXIgY29udGFpbnMgYSBzZXQgb2YgaW5kZXhlcyB0byBzcGVlZHVwIHNlYXJjaGVzIGluIHRoZSBtdG9rZW5zXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVNYXRjaChtYXRjaCwgbG9vcE5keCwgcXVhbnRpZmllclJlY3Vyc2UpIHtcclxuICAgICAgZnVuY3Rpb24gaXNGaXJzdE1hdGNoKGxhdGVzdE1hdGNoLCB0b2tlbkdyb3VwKSB7XHJcbiAgICAgICAgbGV0IGZpcnN0TWF0Y2ggPSB0b2tlbkdyb3VwLm1hdGNoZXMuaW5kZXhPZihsYXRlc3RNYXRjaCkgPT09IDA7XHJcbiAgICAgICAgaWYgKCFmaXJzdE1hdGNoKSB7XHJcbiAgICAgICAgICB0b2tlbkdyb3VwLm1hdGNoZXMuZXZlcnkoZnVuY3Rpb24gKG1hdGNoLCBuZHgpIHtcclxuICAgICAgICAgICAgaWYgKG1hdGNoLmlzUXVhbnRpZmllciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgIGZpcnN0TWF0Y2ggPSBpc0ZpcnN0TWF0Y2goXHJcbiAgICAgICAgICAgICAgICBsYXRlc3RNYXRjaCxcclxuICAgICAgICAgICAgICAgIHRva2VuR3JvdXAubWF0Y2hlc1tuZHggLSAxXVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1hdGNoLCBcIm1hdGNoZXNcIikpXHJcbiAgICAgICAgICAgICAgZmlyc3RNYXRjaCA9IGlzRmlyc3RNYXRjaChsYXRlc3RNYXRjaCwgbWF0Y2gpO1xyXG4gICAgICAgICAgICBpZiAoZmlyc3RNYXRjaCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpcnN0TWF0Y2g7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVOZHhJbml0aWFsaXplcihwb3MsIGFsdGVybmF0ZU5keCwgdGFyZ2V0QWx0ZXJuYXRpb24pIHtcclxuICAgICAgICBsZXQgYmVzdE1hdGNoLCBpbmRleFBvcztcclxuXHJcbiAgICAgICAgaWYgKG1hc2tzZXQudGVzdHNbcG9zXSB8fCBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc10pIHtcclxuICAgICAgICAgIChtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc11cclxuICAgICAgICAgICAgPyBbbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3NdXVxyXG4gICAgICAgICAgICA6IG1hc2tzZXQudGVzdHNbcG9zXVxyXG4gICAgICAgICAgKS5ldmVyeShmdW5jdGlvbiAobG1udCwgbmR4KSB7XHJcbiAgICAgICAgICAgIGlmIChsbW50Lm1sb2NbYWx0ZXJuYXRlTmR4XSkge1xyXG4gICAgICAgICAgICAgIGJlc3RNYXRjaCA9IGxtbnQ7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGFsdGVybmF0aW9uID1cclxuICAgICAgICAgICAgICAgIHRhcmdldEFsdGVybmF0aW9uICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgPyB0YXJnZXRBbHRlcm5hdGlvblxyXG4gICAgICAgICAgICAgICAgICA6IGxtbnQuYWx0ZXJuYXRpb24sXHJcbiAgICAgICAgICAgICAgbmR4UG9zID1cclxuICAgICAgICAgICAgICAgIGxtbnQubG9jYXRvclthbHRlcm5hdGlvbl0gIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICA/IGxtbnQubG9jYXRvclthbHRlcm5hdGlvbl0udG9TdHJpbmcoKS5pbmRleE9mKGFsdGVybmF0ZU5keClcclxuICAgICAgICAgICAgICAgICAgOiAtMTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIChpbmRleFBvcyA9PT0gdW5kZWZpbmVkIHx8IG5keFBvcyA8IGluZGV4UG9zKSAmJlxyXG4gICAgICAgICAgICAgIG5keFBvcyAhPT0gLTFcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgYmVzdE1hdGNoID0gbG1udDtcclxuICAgICAgICAgICAgICBpbmRleFBvcyA9IG5keFBvcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJlc3RNYXRjaCkge1xyXG4gICAgICAgICAgY29uc3QgYmVzdE1hdGNoQWx0SW5kZXggPSBiZXN0TWF0Y2gubG9jYXRvcltiZXN0TWF0Y2guYWx0ZXJuYXRpb25dLFxyXG4gICAgICAgICAgICBsb2NhdG9yID1cclxuICAgICAgICAgICAgICBiZXN0TWF0Y2gubWxvY1thbHRlcm5hdGVOZHhdIHx8XHJcbiAgICAgICAgICAgICAgYmVzdE1hdGNoLm1sb2NbYmVzdE1hdGNoQWx0SW5kZXhdIHx8XHJcbiAgICAgICAgICAgICAgYmVzdE1hdGNoLmxvY2F0b3I7XHJcbiAgICAgICAgICBpZiAobG9jYXRvcltsb2NhdG9yLmxlbmd0aCAtIDFdLnRvU3RyaW5nKCkuaW5kZXhPZihcIjpcIikgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gICAgICAgICAgICBjb25zdCBhbHRlcm5hdGlvbiA9IGxvY2F0b3IucG9wKCk7XHJcbiAgICAgICAgICAgIC8vIHRhcmdldEFsdGVybmF0aW9uID0gcGFyc2VJbnQoYWx0ZXJuYXRpb24uc3Vic3RyaW5nKDEpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBsb2NhdG9yLnNsaWNlKFxyXG4gICAgICAgICAgICAodGFyZ2V0QWx0ZXJuYXRpb24gIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgID8gdGFyZ2V0QWx0ZXJuYXRpb25cclxuICAgICAgICAgICAgICA6IGJlc3RNYXRjaC5hbHRlcm5hdGlvbikgKyAxXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0QWx0ZXJuYXRpb24gIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHJlc29sdmVOZHhJbml0aWFsaXplcihwb3MsIGFsdGVybmF0ZU5keClcclxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBzdGF0aWNDYW5NYXRjaERlZmluaXRpb24oc291cmNlLCB0YXJnZXQpIHtcclxuICAgICAgICByZXR1cm4gc291cmNlLm1hdGNoLnN0YXRpYyA9PT0gdHJ1ZSAmJiB0YXJnZXQubWF0Y2guc3RhdGljICE9PSB0cnVlXHJcbiAgICAgICAgICA/IHRhcmdldC5tYXRjaC5mbi50ZXN0KFxyXG4gICAgICAgICAgICAgIHNvdXJjZS5tYXRjaC5kZWYsXHJcbiAgICAgICAgICAgICAgbWFza3NldCxcclxuICAgICAgICAgICAgICBwb3MsXHJcbiAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgb3B0cyxcclxuICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICA6IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBtZXJnZWxvY2F0b3JzIGZvciByZXRyaWV2aW5nIHRoZSBjb3JyZWN0IGxvY2F0b3IgbWF0Y2ggd2hlbiBtZXJnaW5nXHJcbiAgICAgIGZ1bmN0aW9uIHNldE1lcmdlTG9jYXRvcnModGFyZ2V0TWF0Y2gsIGFsdE1hdGNoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gbWVyZ2VMb2MoYWx0TmR4KSB7XHJcbiAgICAgICAgICB0YXJnZXRNYXRjaC5tbG9jID0gdGFyZ2V0TWF0Y2gubWxvYyB8fCB7fTtcclxuICAgICAgICAgIGxldCBsb2NOZHggPSB0YXJnZXRNYXRjaC5sb2NhdG9yW2FsdE5keF07XHJcbiAgICAgICAgICBpZiAobG9jTmR4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGFyZ2V0TWF0Y2guYWx0ZXJuYXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxvY05keCA9PT0gXCJzdHJpbmdcIikgbG9jTmR4ID0gbG9jTmR4LnNwbGl0KFwiLFwiKVswXTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldE1hdGNoLm1sb2NbbG9jTmR4XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgdGFyZ2V0TWF0Y2gubWxvY1tsb2NOZHhdID0gdGFyZ2V0TWF0Y2gubG9jYXRvci5zbGljZSgpO1xyXG4gICAgICAgICAgICAgIHRhcmdldE1hdGNoLm1sb2NbbG9jTmR4XS5wdXNoKGA6JHt0YXJnZXRNYXRjaC5hbHRlcm5hdGlvbn1gKTsgLy8gYWRkIGFsdGVybmF0aW9uIGluZGV4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFsdE1hdGNoICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAwO1xyXG4gICAgICAgICAgICAgIGZvciAobGV0IG5keCBpbiBhbHRNYXRjaC5tbG9jKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG5keCA9PT0gXCJzdHJpbmdcIikgbmR4ID0gcGFyc2VJbnQobmR4LnNwbGl0KFwiLFwiKVswXSk7XHJcbiAgICAgICAgICAgICAgICAvLyBkbyB7XHJcbiAgICAgICAgICAgICAgICAvLyBcdGlmICh0YXJnZXRNYXRjaC5tbG9jW25keCArIG9mZnNldF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TWF0Y2gubWxvY1tuZHggKyBvZmZzZXRdID0gYWx0TWF0Y2gubWxvY1tuZHhdO1xyXG4gICAgICAgICAgICAgICAgLy8gXHRcdGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gXHR9XHJcbiAgICAgICAgICAgICAgICAvLyB9IHdoaWxlICh0YXJnZXRNYXRjaC5tbG9jW25keCArIG9mZnNldCsrXSAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGFyZ2V0TWF0Y2gubG9jYXRvclthbHROZHhdID0gT2JqZWN0LmtleXModGFyZ2V0TWF0Y2gubWxvYykuam9pbihcclxuICAgICAgICAgICAgICAgIFwiLFwiXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0TWF0Y2guYWx0ZXJuYXRpb24gPiBhbHROZHgpIHtcclxuICAgICAgICAgICAgICAvLyBpZiB0aGUgYWx0ZXJuYXRpb24gaW5kZXggaXMgaGlnaGVyIHRoYW4gdGhlIGN1cnJlbnQgb25lIHJlc29sdmUgaXQgdG8gdGhlIGFsdGVybmF0aW9uXHJcbiAgICAgICAgICAgICAgdGFyZ2V0TWF0Y2guYWx0ZXJuYXRpb24gPSBhbHROZHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWx0ZXJuYXRpb25OZHggPSB0YXJnZXRNYXRjaC5hbHRlcm5hdGlvbixcclxuICAgICAgICAgIHNob3VsZE1lcmdlID1cclxuICAgICAgICAgICAgYWx0TWF0Y2ggPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAoYWx0ZXJuYXRpb25OZHggPD0gYWx0TWF0Y2guYWx0ZXJuYXRpb24gJiZcclxuICAgICAgICAgICAgICB0YXJnZXRNYXRjaC5sb2NhdG9yW2FsdGVybmF0aW9uTmR4XVxyXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgIC5pbmRleE9mKGFsdE1hdGNoLmxvY2F0b3JbYWx0ZXJuYXRpb25OZHhdKSA9PT0gLTEpO1xyXG4gICAgICAgIGlmICghc2hvdWxkTWVyZ2UgJiYgYWx0ZXJuYXRpb25OZHggPiBhbHRNYXRjaC5hbHRlcm5hdGlvbikge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbHRlcm5hdGlvbk5keDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRNYXRjaC5sb2NhdG9yW2ldICE9PSBhbHRNYXRjaC5sb2NhdG9yW2ldKSB7XHJcbiAgICAgICAgICAgICAgYWx0ZXJuYXRpb25OZHggPSBpO1xyXG4gICAgICAgICAgICAgIHNob3VsZE1lcmdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNob3VsZE1lcmdlKSB7XHJcbiAgICAgICAgICByZXR1cm4gbWVyZ2VMb2MoYWx0ZXJuYXRpb25OZHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIGlzU2FtZUxldmVsKHRhcmdldE1hdGNoLCBhbHRNYXRjaCkge1xyXG4gICAgICAgIGlmICh0YXJnZXRNYXRjaC5sb2NhdG9yLmxlbmd0aCAhPT0gYWx0TWF0Y2gubG9jYXRvci5sZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAgIGxldCBsb2NOZHggPSB0YXJnZXRNYXRjaC5hbHRlcm5hdGlvbiArIDE7XHJcbiAgICAgICAgICBsb2NOZHggPCB0YXJnZXRNYXRjaC5sb2NhdG9yLmxlbmd0aDtcclxuICAgICAgICAgIGxvY05keCsrXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAodGFyZ2V0TWF0Y2gubG9jYXRvcltsb2NOZHhdICE9PSBhbHRNYXRjaC5sb2NhdG9yW2xvY05keF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gaGFuZGxlR3JvdXAoKSB7XHJcbiAgICAgICAgbWF0Y2ggPSBoYW5kbGVNYXRjaChcclxuICAgICAgICAgIG1hc2tUb2tlbi5tYXRjaGVzW21hc2tUb2tlbi5tYXRjaGVzLmluZGV4T2YobWF0Y2gpICsgMV0sXHJcbiAgICAgICAgICBsb29wTmR4LFxyXG4gICAgICAgICAgcXVhbnRpZmllclJlY3Vyc2VcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChtYXRjaCkgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZU9wdGlvbmFsKCkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbmFsVG9rZW4gPSBtYXRjaCxcclxuICAgICAgICAgIG10Y2hzTmR4ID0gbWF0Y2hlcy5sZW5ndGg7XHJcbiAgICAgICAgbWF0Y2ggPSByZXNvbHZlVGVzdEZyb21Ub2tlbihcclxuICAgICAgICAgIG1hdGNoLFxyXG4gICAgICAgICAgbmR4SW5pdGlhbGl6ZXIsXHJcbiAgICAgICAgICBsb29wTmR4LFxyXG4gICAgICAgICAgcXVhbnRpZmllclJlY3Vyc2VcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIC8vIGNoZWNrIG9uIG1hdGNoZXMubGVuZ3RoIGluc3RlYWQgb2YgbWF0Y2ggdG8gaGFuZGxlIHF1YW50aWZpZXIgaW4gYSByZWN1cnNpdmUgY2FsbFxyXG4gICAgICAgICAgLy8gbWFyayBvcHRpb25hbGl0eSBpbiBtYXRjaGVzXHJcbiAgICAgICAgICBtYXRjaGVzLmZvckVhY2goZnVuY3Rpb24gKG10Y2gsIG5keCkge1xyXG4gICAgICAgICAgICBpZiAobmR4ID49IG10Y2hzTmR4KSB7XHJcbiAgICAgICAgICAgICAgbXRjaC5tYXRjaC5vcHRpb25hbGl0eSA9IG10Y2gubWF0Y2gub3B0aW9uYWxpdHlcclxuICAgICAgICAgICAgICAgID8gbXRjaC5tYXRjaC5vcHRpb25hbGl0eSArIDFcclxuICAgICAgICAgICAgICAgIDogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBsYXRlc3RNYXRjaCA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5tYXRjaDtcclxuXHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHF1YW50aWZpZXJSZWN1cnNlID09PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgaXNGaXJzdE1hdGNoKGxhdGVzdE1hdGNoLCBvcHRpb25hbFRva2VuKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIHByZXZlbnQgbG9vcCBzZWUgIzY5OFxyXG4gICAgICAgICAgICBpbnNlcnRTdG9wID0gdHJ1ZTsgLy8gaW5zZXJ0IGEgc3RvcFxyXG4gICAgICAgICAgICB0ZXN0UG9zID0gcG9zOyAvLyBtYXRjaCB0aGUgcG9zaXRpb24gYWZ0ZXIgdGhlIGdyb3VwXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7IC8vIG1ha2UgdGhlIGxvb3AgY29udGludWUgd2hlbiBpdCBpcyBkZWxpYmVyYXRlbHkgYnkgYSBxdWFudGlmaWVyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBoYW5kbGVBbHRlcm5hdG9yKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGlzVW5tYXRjaGVkQWx0ZXJuYXRpb24oYWx0ZXJuYXRlVG9rZW4pIHtcclxuICAgICAgICAgIGxldCBtYXRjaGVzTGVuZ3RoID0gYWx0ZXJuYXRlVG9rZW4ubWF0Y2hlc1swXS5tYXRjaGVzXHJcbiAgICAgICAgICAgICAgPyBhbHRlcm5hdGVUb2tlbi5tYXRjaGVzWzBdLm1hdGNoZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgOiAxLFxyXG4gICAgICAgICAgICBtYXRjaGVzTmV3TGVuZ3RoO1xyXG4gICAgICAgICAgZm9yIChsZXQgYWxuZHggPSAwOyBhbG5keCA8IGFsdGVybmF0ZVRva2VuLm1hdGNoZXMubGVuZ3RoOyBhbG5keCsrKSB7XHJcbiAgICAgICAgICAgIG1hdGNoZXNOZXdMZW5ndGggPSBhbHRlcm5hdGVUb2tlbi5tYXRjaGVzW2FsbmR4XS5tYXRjaGVzXHJcbiAgICAgICAgICAgICAgPyBhbHRlcm5hdGVUb2tlbi5tYXRjaGVzW2FsbmR4XS5tYXRjaGVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgIDogMTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoZXNMZW5ndGggIT09IG1hdGNoZXNOZXdMZW5ndGgpIHtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBtYXRjaGVzTGVuZ3RoICE9PSBtYXRjaGVzTmV3TGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRtYXNrLmhhc0FsdGVybmF0b3IgPSB0cnVlO1xyXG4gICAgICAgIGxldCBhbHRlcm5hdGVUb2tlbiA9IG1hdGNoLFxyXG4gICAgICAgICAgbWFsdGVybmF0ZU1hdGNoZXMgPSBbXSxcclxuICAgICAgICAgIG1hbHRNYXRjaGVzLFxyXG4gICAgICAgICAgY3VycmVudE1hdGNoZXMgPSBtYXRjaGVzLnNsaWNlKCksXHJcbiAgICAgICAgICBsb29wTmR4Q250ID0gbG9vcE5keC5sZW5ndGgsXHJcbiAgICAgICAgICBhbHRJbmRleCA9IG5keEluaXRpYWxpemVyLmxlbmd0aCA+IDAgPyBuZHhJbml0aWFsaXplci5zaGlmdCgpIDogLTE7XHJcbiAgICAgICAgaWYgKGFsdEluZGV4ID09PSAtMSB8fCB0eXBlb2YgYWx0SW5kZXggPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgIGxldCBjdXJyZW50UG9zID0gdGVzdFBvcyxcclxuICAgICAgICAgICAgbmR4SW5pdGlhbGl6ZXJDbG9uZSA9IG5keEluaXRpYWxpemVyLnNsaWNlKCksXHJcbiAgICAgICAgICAgIGFsdEluZGV4QXJyID0gW10sXHJcbiAgICAgICAgICAgIGFtbmR4O1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBhbHRJbmRleCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBhbHRJbmRleEFyciA9IGFsdEluZGV4LnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoYW1uZHggPSAwOyBhbW5keCA8IGFsdGVybmF0ZVRva2VuLm1hdGNoZXMubGVuZ3RoOyBhbW5keCsrKSB7XHJcbiAgICAgICAgICAgICAgYWx0SW5kZXhBcnIucHVzaChhbW5keC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChtYXNrc2V0LmV4Y2x1ZGVzW3Bvc10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBhbHRJbmRleEFyckNsb25lID0gYWx0SW5kZXhBcnIuc2xpY2UoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGV4bCA9IG1hc2tzZXQuZXhjbHVkZXNbcG9zXS5sZW5ndGg7IGkgPCBleGw7IGkrKykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGV4Y2x1ZGVTZXQgPSBtYXNrc2V0LmV4Y2x1ZGVzW3Bvc11baV0udG9TdHJpbmcoKS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICAgICAgaWYgKGxvb3BOZHgubGVuZ3RoID09IGV4Y2x1ZGVTZXRbMV0pIHtcclxuICAgICAgICAgICAgICAgIGFsdEluZGV4QXJyLnNwbGljZShhbHRJbmRleEFyci5pbmRleE9mKGV4Y2x1ZGVTZXRbMF0pLCAxKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFsdEluZGV4QXJyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgIC8vIGZ1bGx5IGFsdGVybmF0ZWQgPT4gcmVzZXRcclxuICAgICAgICAgICAgICBkZWxldGUgbWFza3NldC5leGNsdWRlc1twb3NdO1xyXG4gICAgICAgICAgICAgIGFsdEluZGV4QXJyID0gYWx0SW5kZXhBcnJDbG9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBvcHRzLmtlZXBTdGF0aWMgPT09IHRydWUgfHxcclxuICAgICAgICAgICAgKGlzRmluaXRlKHBhcnNlSW50KG9wdHMua2VlcFN0YXRpYykpICYmXHJcbiAgICAgICAgICAgICAgY3VycmVudFBvcyA+PSBvcHRzLmtlZXBTdGF0aWMpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAgIGFsdEluZGV4QXJyID0gYWx0SW5kZXhBcnIuc2xpY2UoMCwgMSk7XHJcbiAgICAgICAgICBmb3IgKGxldCBuZHggPSAwOyBuZHggPCBhbHRJbmRleEFyci5sZW5ndGg7IG5keCsrKSB7XHJcbiAgICAgICAgICAgIGFtbmR4ID0gcGFyc2VJbnQoYWx0SW5kZXhBcnJbbmR4XSk7XHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSBbXTtcclxuICAgICAgICAgICAgLy8gc2V0IHRoZSBjb3JyZWN0IG5keEluaXRpYWxpemVyXHJcbiAgICAgICAgICAgIG5keEluaXRpYWxpemVyID1cclxuICAgICAgICAgICAgICB0eXBlb2YgYWx0SW5kZXggPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgID8gcmVzb2x2ZU5keEluaXRpYWxpemVyKHRlc3RQb3MsIGFtbmR4LCBsb29wTmR4Q250KSB8fFxyXG4gICAgICAgICAgICAgICAgICBuZHhJbml0aWFsaXplckNsb25lLnNsaWNlKClcclxuICAgICAgICAgICAgICAgIDogbmR4SW5pdGlhbGl6ZXJDbG9uZS5zbGljZSgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5keEluaXRcIiwgbmR4SW5pdGlhbGl6ZXIpO1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbk1hdGNoID0gYWx0ZXJuYXRlVG9rZW4ubWF0Y2hlc1thbW5keF07XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICB0b2tlbk1hdGNoICYmXHJcbiAgICAgICAgICAgICAgaGFuZGxlTWF0Y2goXHJcbiAgICAgICAgICAgICAgICB0b2tlbk1hdGNoLFxyXG4gICAgICAgICAgICAgICAgW2FtbmR4XS5jb25jYXQobG9vcE5keCksXHJcbiAgICAgICAgICAgICAgICBxdWFudGlmaWVyUmVjdXJzZVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChuZHggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHVuTWF0Y2hlZEFsdGVybmF0aW9uID0gaXNVbm1hdGNoZWRBbHRlcm5hdGlvbihhbHRlcm5hdGVUb2tlbik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRva2VuTWF0Y2ggJiZcclxuICAgICAgICAgICAgICAgIHRva2VuTWF0Y2gubWF0Y2hlcyAmJlxyXG4gICAgICAgICAgICAgICAgdG9rZW5NYXRjaC5tYXRjaGVzLmxlbmd0aCA+XHJcbiAgICAgICAgICAgICAgICAgIGFsdGVybmF0ZVRva2VuLm1hdGNoZXNbMF0ubWF0Y2hlcy5sZW5ndGhcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbWFsdE1hdGNoZXMgPSBtYXRjaGVzLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHRlc3RQb3MgPSBjdXJyZW50UG9zO1xyXG4gICAgICAgICAgICBtYXRjaGVzID0gW107XHJcblxyXG4gICAgICAgICAgICAvLyBmdXp6eSBtZXJnZSBtYXRjaGVzXHJcbiAgICAgICAgICAgIGZvciAobGV0IG5keDEgPSAwOyBuZHgxIDwgbWFsdE1hdGNoZXMubGVuZ3RoOyBuZHgxKyspIHtcclxuICAgICAgICAgICAgICBsZXQgYWx0TWF0Y2ggPSBtYWx0TWF0Y2hlc1tuZHgxXSxcclxuICAgICAgICAgICAgICAgIGRyb3BNYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIGFsdE1hdGNoLmFsdGVybmF0aW9uID0gYWx0TWF0Y2guYWx0ZXJuYXRpb24gfHwgbG9vcE5keENudDtcclxuICAgICAgICAgICAgICBzZXRNZXJnZUxvY2F0b3JzKGFsdE1hdGNoKTtcclxuICAgICAgICAgICAgICBmb3IgKGxldCBuZHgyID0gMDsgbmR4MiA8IG1hbHRlcm5hdGVNYXRjaGVzLmxlbmd0aDsgbmR4MisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbHRNYXRjaDIgPSBtYWx0ZXJuYXRlTWF0Y2hlc1tuZHgyXTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgdHlwZW9mIGFsdEluZGV4ICE9PSBcInN0cmluZ1wiIHx8XHJcbiAgICAgICAgICAgICAgICAgIChhbHRNYXRjaC5hbHRlcm5hdGlvbiAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0SW5kZXhBcnIuaW5jbHVkZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoLmFsdGVybmF0aW9uXS50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoYWx0TWF0Y2gubWF0Y2gubmF0aXZlRGVmID09PSBhbHRNYXRjaDIubWF0Y2gubmF0aXZlRGVmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcE1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNZXJnZUxvY2F0b3JzKGFsdE1hdGNoMiwgYWx0TWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzU3Vic2V0T2YoYWx0TWF0Y2gsIGFsdE1hdGNoMiwgb3B0cykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0TWVyZ2VMb2NhdG9ycyhhbHRNYXRjaCwgYWx0TWF0Y2gyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZHJvcE1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hbHRlcm5hdGVNYXRjaGVzLnNwbGljZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFsdGVybmF0ZU1hdGNoZXMuaW5kZXhPZihhbHRNYXRjaDIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRNYXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNTdWJzZXRPZihhbHRNYXRjaDIsIGFsdE1hdGNoLCBvcHRzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1lcmdlTG9jYXRvcnMoYWx0TWF0Y2gyLCBhbHRNYXRjaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGljQ2FuTWF0Y2hEZWZpbml0aW9uKGFsdE1hdGNoLCBhbHRNYXRjaDIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgIWlzU2FtZUxldmVsKGFsdE1hdGNoLCBhbHRNYXRjaDIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICBlbC5pbnB1dG1hc2sudXNlck9wdGlvbnMua2VlcFN0YXRpYyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRzLmtlZXBTdGF0aWMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2V0TWVyZ2VMb2NhdG9ycyhhbHRNYXRjaCwgYWx0TWF0Y2gyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gaW5zZXJ0IG1hdGNoIGFib3ZlIGdlbmVyYWwgbWF0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgIGRyb3BNYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYWx0ZXJuYXRlTWF0Y2hlcy5zcGxpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbHRlcm5hdGVNYXRjaGVzLmluZGV4T2YoYWx0TWF0Y2gyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0TWF0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRpY0Nhbk1hdGNoRGVmaW5pdGlvbihhbHRNYXRjaDIsIGFsdE1hdGNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1lcmdlTG9jYXRvcnMoYWx0TWF0Y2gyLCBhbHRNYXRjaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKCFkcm9wTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIG1hbHRlcm5hdGVNYXRjaGVzLnB1c2goYWx0TWF0Y2gpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG1hdGNoZXMgPSBjdXJyZW50TWF0Y2hlcy5jb25jYXQobWFsdGVybmF0ZU1hdGNoZXMpO1xyXG4gICAgICAgICAgdGVzdFBvcyA9IHBvcztcclxuICAgICAgICAgIGluc2VydFN0b3AgPSBtYXRjaGVzLmxlbmd0aCA+IDAgJiYgdW5NYXRjaGVkQWx0ZXJuYXRpb247IC8vIGluc2VydCBhIHN0b3BlbGVtbnQgd2hlbiB0aGVyZSBpcyBhbiBhbHRlcm5hdGUgLSBuZWVkZWQgZm9yIG5vbi1ncmVlZHkgb3B0aW9uXHJcbiAgICAgICAgICBtYXRjaCA9IG1hbHRlcm5hdGVNYXRjaGVzLmxlbmd0aCA+IDAgJiYgIXVuTWF0Y2hlZEFsdGVybmF0aW9uOyAvLyBzZXQgY29ycmVjdCBtYXRjaCBzdGF0ZVxyXG5cclxuICAgICAgICAgIGlmICh1bk1hdGNoZWRBbHRlcm5hdGlvbiAmJiBpbnNlcnRTdG9wICYmICFtYXRjaCkge1xyXG4gICAgICAgICAgICAvLyBtYXJrIG1hdGNoZXMgd2l0aCB1bk1hdGNoZWRBbHRlcm5hdGlvblN0b3BwZWRcclxuICAgICAgICAgICAgbWF0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChtdGNoLCBuZHgpIHtcclxuICAgICAgICAgICAgICBtdGNoLnVuTWF0Y2hlZEFsdGVybmF0aW9uU3RvcHBlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIGNsb25lYmFja1xyXG4gICAgICAgICAgbmR4SW5pdGlhbGl6ZXIgPSBuZHhJbml0aWFsaXplckNsb25lLnNsaWNlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG1hdGNoID0gaGFuZGxlTWF0Y2goXHJcbiAgICAgICAgICAgIGFsdGVybmF0ZVRva2VuLm1hdGNoZXNbYWx0SW5kZXhdIHx8IG1hc2tUb2tlbi5tYXRjaGVzW2FsdEluZGV4XSxcclxuICAgICAgICAgICAgW2FsdEluZGV4XS5jb25jYXQobG9vcE5keCksXHJcbiAgICAgICAgICAgIHF1YW50aWZpZXJSZWN1cnNlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWF0Y2gpIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBoYW5kbGVRdWFudGlmaWVyKCkge1xyXG4gICAgICAgIGxldCBxdCA9IG1hdGNoLFxyXG4gICAgICAgICAgYnJlYWtsb29wID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAgIHZhciBxbmR4ID0gbmR4SW5pdGlhbGl6ZXIubGVuZ3RoID4gMCA/IG5keEluaXRpYWxpemVyLnNoaWZ0KCkgOiAwO1xyXG4gICAgICAgICAgcW5keCA8IChpc05hTihxdC5xdWFudGlmaWVyLm1heCkgPyBxbmR4ICsgMSA6IHF0LnF1YW50aWZpZXIubWF4KSAmJlxyXG4gICAgICAgICAgdGVzdFBvcyA8PSBwb3M7XHJcbiAgICAgICAgICBxbmR4KytcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHZhciB0b2tlbkdyb3VwID0gbWFza1Rva2VuLm1hdGNoZXNbbWFza1Rva2VuLm1hdGNoZXMuaW5kZXhPZihxdCkgLSAxXTtcclxuICAgICAgICAgIG1hdGNoID0gaGFuZGxlTWF0Y2godG9rZW5Hcm91cCwgW3FuZHhdLmNvbmNhdChsb29wTmR4KSwgdG9rZW5Hcm91cCk7IC8vIHNldCB0aGUgdG9rZW5Hcm91cCBhcyBxdWFudGlmaWVyUmVjdXJzZSBtYXJrZXJcclxuICAgICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgICBtYXRjaGVzLmZvckVhY2goZnVuY3Rpb24gKG10Y2gsIG5keCkge1xyXG4gICAgICAgICAgICAgIGlmIChJc01hdGNoT2YodG9rZW5Hcm91cCwgbXRjaC5tYXRjaCkpIGxhdGVzdE1hdGNoID0gbXRjaC5tYXRjaDtcclxuICAgICAgICAgICAgICBlbHNlIGxhdGVzdE1hdGNoID0gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdLm1hdGNoO1xyXG5cclxuICAgICAgICAgICAgICAvLyBtYXJrIG9wdGlvbmFsaXR5XHJcbiAgICAgICAgICAgICAgLy8gVE9ETyBGSVggUkVDVVJTSVZFIFFVQU5USUZJRVJTXHJcbiAgICAgICAgICAgICAgbGF0ZXN0TWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyID0gcW5keCA+PSBxdC5xdWFudGlmaWVyLm1pbjtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwb3MgKyBcIiBcIiArIHF0LnF1YW50aWZpZXIubWluICsgXCIgXCIgKyBsYXRlc3RNYXRjaC5vcHRpb25hbFF1YW50aWZpZXIpO1xyXG4gICAgICAgICAgICAgIC8vIHFuZHggKyAxIGFzIHRoZSBpbmRleCBzdGFydHMgZnJvbSAwXHJcbiAgICAgICAgICAgICAgbGF0ZXN0TWF0Y2guaml0ID1cclxuICAgICAgICAgICAgICAgIChxbmR4ICsgMSkgKiAodG9rZW5Hcm91cC5tYXRjaGVzLmluZGV4T2YobGF0ZXN0TWF0Y2gpICsgMSkgPlxyXG4gICAgICAgICAgICAgICAgcXQucXVhbnRpZmllci5qaXQ7XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgbGF0ZXN0TWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyICYmXHJcbiAgICAgICAgICAgICAgICBpc0ZpcnN0TWF0Y2gobGF0ZXN0TWF0Y2gsIHRva2VuR3JvdXApXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBpbnNlcnRTdG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRlc3RQb3MgPSBwb3M7IC8vIG1hdGNoIHRoZSBwb3NpdGlvbiBhZnRlciB0aGUgZ3JvdXBcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgb3B0cy5ncmVlZHkgJiZcclxuICAgICAgICAgICAgICAgICAgbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3MgLSAxXSA9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgcW5keCA+IHF0LnF1YW50aWZpZXIubWluICYmXHJcbiAgICAgICAgICAgICAgICAgIFtcIipcIiwgXCIrXCJdLmluZGV4T2YocXQucXVhbnRpZmllci5tYXgpICE9IC0xXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgY2FjaGVEZXBlbmRlbmN5ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtsb29wID0gdHJ1ZTsgLy8gc3RvcCBxdWFudGlmaWVybG9vcCAmJiBzZWFyY2ggZm9yIG5leHQgcG9zc2libGUgbWF0Y2hcclxuICAgICAgICAgICAgICAgIG1hdGNoID0gZmFsc2U7IC8vIG1hcmsgbWF0Y2ggdG8gZmFsc2UgdG8gbWFrZSBzdXJlIHRoZSBsb29wIGluIG9wdGlvbmFscyBjb250aW51ZXNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgIWJyZWFrbG9vcCAmJlxyXG4gICAgICAgICAgICAgICAgbGF0ZXN0TWF0Y2guaml0IC8qICYmICFsYXRlc3RNYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgKi9cclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIC8vIGFsd2F5cyBzZXQgaml0T2Zmc2V0LCBpc3ZhbGlkIGNoZWNrcyB3aGVuIHRvIGFwcGx5XHJcbiAgICAgICAgICAgICAgICBtYXNrc2V0LmppdE9mZnNldFtwb3NdID1cclxuICAgICAgICAgICAgICAgICAgdG9rZW5Hcm91cC5tYXRjaGVzLmxlbmd0aCAtXHJcbiAgICAgICAgICAgICAgICAgIHRva2VuR3JvdXAubWF0Y2hlcy5pbmRleE9mKGxhdGVzdE1hdGNoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoYnJlYWtsb29wKSBicmVhazsgLy8gc2VhcmNoIGZvciBuZXh0IHBvc3NpYmxlIG1hdGNoXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRlc3RQb3MgPiBwb3MgKyBvcHRzLl9tYXhUZXN0UG9zKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYElucHV0bWFzazogVGhlcmUgaXMgcHJvYmFibHkgYW4gZXJyb3IgaW4geW91ciBtYXNrIGRlZmluaXRpb24gb3IgaW4gdGhlIGNvZGUuIENyZWF0ZSBhbiBpc3N1ZSBvbiBnaXRodWIgd2l0aCBhbiBleGFtcGxlIG9mIHRoZSBtYXNrIHlvdSBhcmUgdXNpbmcuICR7bWFza3NldC5tYXNrfWBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0ZXN0UG9zID09PSBwb3MgJiYgbWF0Y2gubWF0Y2hlcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbWF0Y2hlcy5wdXNoKHtcclxuICAgICAgICAgIG1hdGNoLFxyXG4gICAgICAgICAgbG9jYXRvcjogbG9vcE5keC5yZXZlcnNlKCksXHJcbiAgICAgICAgICBjZDogY2FjaGVEZXBlbmRlbmN5LFxyXG4gICAgICAgICAgbWxvYzoge31cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBtYXRjaC5vcHRpb25hbGl0eSAmJlxyXG4gICAgICAgICAgcXVhbnRpZmllclJlY3Vyc2UgPT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgKChvcHRzLmRlZmluaXRpb25zICYmXHJcbiAgICAgICAgICAgIG9wdHMuZGVmaW5pdGlvbnNbbWF0Y2gubmF0aXZlRGVmXSAmJlxyXG4gICAgICAgICAgICBvcHRzLmRlZmluaXRpb25zW21hdGNoLm5hdGl2ZURlZl0ub3B0aW9uYWwpIHx8XHJcbiAgICAgICAgICAgIChJbnB1dG1hc2sucHJvdG90eXBlLmRlZmluaXRpb25zW21hdGNoLm5hdGl2ZURlZl0gJiZcclxuICAgICAgICAgICAgICBJbnB1dG1hc2sucHJvdG90eXBlLmRlZmluaXRpb25zW21hdGNoLm5hdGl2ZURlZl0ub3B0aW9uYWwpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgLy8gcHJldmVudCBsb29wIHNlZSAjNjk4XHJcbiAgICAgICAgICBpbnNlcnRTdG9wID0gdHJ1ZTsgLy8gaW5zZXJ0IGEgc3RvcFxyXG4gICAgICAgICAgdGVzdFBvcyA9IHBvczsgLy8gbWF0Y2ggdGhlIHBvc2l0aW9uIGFmdGVyIHRoZSBncm91cFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2gubWF0Y2hlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKG1hdGNoLmlzR3JvdXAgJiYgcXVhbnRpZmllclJlY3Vyc2UgIT09IG1hdGNoKSB7XHJcbiAgICAgICAgICAvLyB3aGVuIGEgZ3JvdXAgcGFzcyBhbG9uZyB0byB0aGUgcXVhbnRpZmllclxyXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZUdyb3VwKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtYXRjaC5pc09wdGlvbmFsKSB7XHJcbiAgICAgICAgICByZXR1cm4gaGFuZGxlT3B0aW9uYWwoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1hdGNoLmlzQWx0ZXJuYXRvcikge1xyXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZUFsdGVybmF0b3IoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgbWF0Y2guaXNRdWFudGlmaWVyICYmXHJcbiAgICAgICAgICBxdWFudGlmaWVyUmVjdXJzZSAhPT1cclxuICAgICAgICAgICAgbWFza1Rva2VuLm1hdGNoZXNbbWFza1Rva2VuLm1hdGNoZXMuaW5kZXhPZihtYXRjaCkgLSAxXVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZVF1YW50aWZpZXIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbWF0Y2ggPSByZXNvbHZlVGVzdEZyb21Ub2tlbihcclxuICAgICAgICAgICAgbWF0Y2gsXHJcbiAgICAgICAgICAgIG5keEluaXRpYWxpemVyLFxyXG4gICAgICAgICAgICBsb29wTmR4LFxyXG4gICAgICAgICAgICBxdWFudGlmaWVyUmVjdXJzZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmIChtYXRjaCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRlc3RQb3MrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoZSBvZmZzZXQgaXMgc2V0IGluIHRoZSBxdWFudGlmaWVybG9vcCB3aGVuIGdpdCBtYXNraW5nIGlzIHVzZWRcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCB0bmR4ID0gbmR4SW5pdGlhbGl6ZXIubGVuZ3RoID4gMCA/IG5keEluaXRpYWxpemVyLnNoaWZ0KCkgOiAwO1xyXG4gICAgICB0bmR4IDwgbWFza1Rva2VuLm1hdGNoZXMubGVuZ3RoO1xyXG4gICAgICB0bmR4KytcclxuICAgICkge1xyXG4gICAgICBpZiAobWFza1Rva2VuLm1hdGNoZXNbdG5keF0uaXNRdWFudGlmaWVyICE9PSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBoYW5kbGVNYXRjaChcclxuICAgICAgICAgIG1hc2tUb2tlbi5tYXRjaGVzW3RuZHhdLFxyXG4gICAgICAgICAgW3RuZHhdLmNvbmNhdChsb29wTmR4KSxcclxuICAgICAgICAgIHF1YW50aWZpZXJSZWN1cnNlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAobWF0Y2ggJiYgdGVzdFBvcyA9PT0gcG9zKSB7XHJcbiAgICAgICAgICByZXR1cm4gbWF0Y2g7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0ZXN0UG9zID4gcG9zKSB7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIElzTWF0Y2hPZih0b2tlbkdyb3VwLCBtYXRjaCkge1xyXG4gICAgbGV0IGlzTWF0Y2ggPSB0b2tlbkdyb3VwLm1hdGNoZXMuaW5kZXhPZihtYXRjaCkgIT0gLTE7XHJcbiAgICBpZiAoIWlzTWF0Y2gpIHtcclxuICAgICAgdG9rZW5Hcm91cC5tYXRjaGVzLmZvckVhY2goKG10Y2gsIG5keCkgPT4ge1xyXG4gICAgICAgIGlmIChtdGNoLm1hdGNoZXMgIT09IHVuZGVmaW5lZCAmJiAhaXNNYXRjaCkge1xyXG4gICAgICAgICAgaXNNYXRjaCA9IElzTWF0Y2hPZihtdGNoLCBtYXRjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc01hdGNoO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVyZ2VMb2NhdG9ycyhwb3MsIHRlc3RzKSB7XHJcbiAgICBsZXQgbG9jYXRvciA9IFtdLFxyXG4gICAgICBhbHRlcm5hdGlvbjtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0ZXN0cykpIHRlc3RzID0gW3Rlc3RzXTtcclxuXHJcbiAgICBpZiAodGVzdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAodGVzdHNbMF0uYWx0ZXJuYXRpb24gPT09IHVuZGVmaW5lZCB8fCBvcHRzLmtlZXBTdGF0aWMgPT09IHRydWUpIHtcclxuICAgICAgICBsb2NhdG9yID0gZGV0ZXJtaW5lVGVzdFRlbXBsYXRlXHJcbiAgICAgICAgICAuY2FsbChpbnB1dG1hc2ssIHBvcywgdGVzdHMuc2xpY2UoKSlcclxuICAgICAgICAgIC5sb2NhdG9yLnNsaWNlKCk7XHJcbiAgICAgICAgaWYgKGxvY2F0b3IubGVuZ3RoID09PSAwKSBsb2NhdG9yID0gdGVzdHNbMF0ubG9jYXRvci5zbGljZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRlc3RzLmZvckVhY2goZnVuY3Rpb24gKHRzdCkge1xyXG4gICAgICAgICAgaWYgKHRzdC5kZWYgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYgKGxvY2F0b3IubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgYWx0ZXJuYXRpb24gPSB0c3QuYWx0ZXJuYXRpb247XHJcbiAgICAgICAgICAgICAgbG9jYXRvciA9IHRzdC5sb2NhdG9yLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdHN0LmxvY2F0b3JbYWx0ZXJuYXRpb25dICYmXHJcbiAgICAgICAgICAgICAgICBsb2NhdG9yW2FsdGVybmF0aW9uXVxyXG4gICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAuaW5kZXhPZih0c3QubG9jYXRvclthbHRlcm5hdGlvbl0pID09PSAtMVxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgbG9jYXRvclthbHRlcm5hdGlvbl0gKz0gXCIsXCIgKyB0c3QubG9jYXRvclthbHRlcm5hdGlvbl07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBsb2NhdG9yO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBvcyA+IC0xKSB7XHJcbiAgICBpZiAobmR4SW50bHpyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gZGV0ZXJtaW5lIGluZGV4IGluaXRpYWxpemVyXHJcbiAgICAgIGxldCBwcmV2aW91c1BvcyA9IHBvcyAtIDEsXHJcbiAgICAgICAgdGVzdDtcclxuICAgICAgd2hpbGUgKFxyXG4gICAgICAgICh0ZXN0ID1cclxuICAgICAgICAgIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcHJldmlvdXNQb3NdIHx8IG1hc2tzZXQudGVzdHNbcHJldmlvdXNQb3NdKSA9PT1cclxuICAgICAgICAgIHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIHByZXZpb3VzUG9zID4gLTFcclxuICAgICAgKSB7XHJcbiAgICAgICAgcHJldmlvdXNQb3MtLTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGVzdCAhPT0gdW5kZWZpbmVkICYmIHByZXZpb3VzUG9zID4gLTEpIHtcclxuICAgICAgICBuZHhJbml0aWFsaXplciA9IG1lcmdlTG9jYXRvcnMocHJldmlvdXNQb3MsIHRlc3QpO1xyXG4gICAgICAgIGNhY2hlRGVwZW5kZW5jeSA9IG5keEluaXRpYWxpemVyLmpvaW4oXCJcIik7XHJcbiAgICAgICAgdGVzdFBvcyA9IHByZXZpb3VzUG9zO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobWFza3NldC50ZXN0c1twb3NdICYmIG1hc2tzZXQudGVzdHNbcG9zXVswXS5jZCA9PT0gY2FjaGVEZXBlbmRlbmN5KSB7XHJcbiAgICAgIC8vIGNhY2hlRGVwZW5kZW5jeSBpcyBzZXQgb24gYWxsIHRlc3RzLCBqdXN0IGNoZWNrIG9uIHRoZSBmaXJzdFxyXG4gICAgICByZXR1cm4gbWFza3NldC50ZXN0c1twb3NdO1xyXG4gICAgfVxyXG4gICAgZm9yIChcclxuICAgICAgbGV0IG10bmR4ID0gbmR4SW5pdGlhbGl6ZXIuc2hpZnQoKTtcclxuICAgICAgbXRuZHggPCBtYXNrVG9rZW5zLmxlbmd0aDtcclxuICAgICAgbXRuZHgrK1xyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IG1hdGNoID0gcmVzb2x2ZVRlc3RGcm9tVG9rZW4obWFza1Rva2Vuc1ttdG5keF0sIG5keEluaXRpYWxpemVyLCBbXHJcbiAgICAgICAgbXRuZHhcclxuICAgICAgXSk7XHJcbiAgICAgIGlmICgobWF0Y2ggJiYgdGVzdFBvcyA9PT0gcG9zKSB8fCB0ZXN0UG9zID4gcG9zKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaWYgKG1hdGNoZXMubGVuZ3RoID09PSAwIHx8IGluc2VydFN0b3ApIHtcclxuICAgIG1hdGNoZXMucHVzaCh7XHJcbiAgICAgIG1hdGNoOiB7XHJcbiAgICAgICAgZm46IG51bGwsXHJcbiAgICAgICAgc3RhdGljOiB0cnVlLFxyXG4gICAgICAgIG9wdGlvbmFsaXR5OiBmYWxzZSxcclxuICAgICAgICBjYXNpbmc6IG51bGwsXHJcbiAgICAgICAgZGVmOiBcIlwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIG1hcmsgd2hlbiB0aGVyZSBhcmUgdW5tYXRjaGVkIGFsdGVybmF0aW9ucyAgZXg6IG1hc2s6IFwiKGF8YWEpXCJcclxuICAgICAgLy8gdGhpcyB3aWxsIHJlc3VsdCBpbiB0aGUgbGVhc3QgZGlzdGFuY2UgdG8gc2VsZWN0IHRoZSBjb3JyZWN0IHRlc3QgcmVzdWx0IGluIGRldGVybWluZVRlc3RUZW1wbGF0ZVxyXG4gICAgICBsb2NhdG9yOlxyXG4gICAgICAgIHVuTWF0Y2hlZEFsdGVybmF0aW9uICYmXHJcbiAgICAgICAgbWF0Y2hlcy5maWx0ZXIoKHRzdCkgPT4gdHN0LnVuTWF0Y2hlZEFsdGVybmF0aW9uU3RvcHBlZCAhPT0gdHJ1ZSlcclxuICAgICAgICAgIC5sZW5ndGggPT09IDBcclxuICAgICAgICAgID8gWzBdXHJcbiAgICAgICAgICA6IFtdLFxyXG4gICAgICBtbG9jOiB7fSxcclxuICAgICAgY2Q6IGNhY2hlRGVwZW5kZW5jeVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGxldCByZXN1bHQ7XHJcbiAgaWYgKG5keEludGx6ciAhPT0gdW5kZWZpbmVkICYmIG1hc2tzZXQudGVzdHNbcG9zXSkge1xyXG4gICAgLy8gcHJpb3JpdGl6ZSBmdWxsIHRlc3RzIGZvciBjYWNoaW5nXHJcbiAgICByZXN1bHQgPSAkLmV4dGVuZCh0cnVlLCBbXSwgbWF0Y2hlcyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwic3RvcmVkIFwiICsgcG9zICsgXCIgLSBcIiArIEpTT04uc3RyaW5naWZ5KG1hdGNoZXMpKTtcclxuICAgIG1hc2tzZXQudGVzdHNbcG9zXSA9ICQuZXh0ZW5kKHRydWUsIFtdLCBtYXRjaGVzKTsgLy8gc2V0IGEgY2xvbmUgdG8gcHJldmVudCBvdmVyd3JpdGluZyBzb21lIHByb3BzXHJcbiAgICByZXN1bHQgPSBtYXNrc2V0LnRlc3RzW3Bvc107XHJcbiAgfVxyXG5cclxuICAvLyBjb25zb2xlLmxvZyhwb3MgKyBcIiAtIFwiICsgSlNPTi5zdHJpbmdpZnkobWF0Y2hlcykpO1xyXG4gIC8vIGNsZWFudXAgb3B0aW9uYWxpdHkgbWFya2luZ1xyXG4gIG1hdGNoZXMuZm9yRWFjaCgodCkgPT4ge1xyXG4gICAgdC5tYXRjaC5vcHRpb25hbGl0eSA9IHQubWF0Y2guZGVmT3B0aW9uYWxpdHkgfHwgZmFsc2U7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIiwgImltcG9ydCB7IEV2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi9ldmVudGhhbmRsZXJzXCI7XHJcbmltcG9ydCB7IGtleUNvZGUsIGtleXMgfSBmcm9tIFwiLi9rZXljb2RlLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgZGV0ZXJtaW5lTGFzdFJlcXVpcmVkUG9zaXRpb24sXHJcbiAgZGV0ZXJtaW5lTmV3Q2FyZXRQb3NpdGlvbixcclxuICBnZXRCdWZmZXIsXHJcbiAgZ2V0TGFzdFZhbGlkUG9zaXRpb24sXHJcbiAgaXNNYXNrLFxyXG4gIHJlc2V0TWFza1NldCxcclxuICBzZWVrTmV4dCxcclxuICBzZWVrUHJldmlvdXNcclxufSBmcm9tIFwiLi9wb3NpdGlvbmluZ1wiO1xyXG5pbXBvcnQge1xyXG4gIGRldGVybWluZVRlc3RUZW1wbGF0ZSxcclxuICBnZXREZWNpc2lvblRha2VyLFxyXG4gIGdldFBsYWNlaG9sZGVyLFxyXG4gIGdldFRlc3QsXHJcbiAgZ2V0VGVzdHMsXHJcbiAgZ2V0VGVzdFRlbXBsYXRlXHJcbn0gZnJvbSBcIi4vdmFsaWRhdGlvbi10ZXN0c1wiO1xyXG5cclxuZXhwb3J0IHtcclxuICBhbHRlcm5hdGUsXHJcbiAgY2hlY2tBbHRlcm5hdGlvbk1hdGNoLFxyXG4gIGlzQ29tcGxldGUsXHJcbiAgaXNTZWxlY3Rpb24sXHJcbiAgaXNWYWxpZCxcclxuICByZWZyZXNoRnJvbUJ1ZmZlcixcclxuICByZXZhbGlkYXRlTWFzayxcclxuICBoYW5kbGVSZW1vdmVcclxufTtcclxuXHJcbi8vIHRvYmUgcHV0IG9uIHByb3RvdHlwZT9cclxuZnVuY3Rpb24gYWx0ZXJuYXRlKG1hc2tQb3MsIGMsIHN0cmljdCwgZnJvbUlzVmFsaWQsIHJBbHRQb3MsIHNlbGVjdGlvbikge1xyXG4gIC8vIHBvcyA9PSB0cnVlID0+IGdlbmVyYWxpemVcclxuICBjb25zdCBpbnB1dG1hc2sgPSB0aGlzLFxyXG4gICAgJCA9IHRoaXMuZGVwZW5kZW5jeUxpYixcclxuICAgIG9wdHMgPSB0aGlzLm9wdHMsXHJcbiAgICBtYXNrc2V0ID0gaW5wdXRtYXNrLm1hc2tzZXQ7XHJcblxyXG4gIGlmICghaW5wdXRtYXNrLmhhc0FsdGVybmF0b3IpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgbGV0IHZhbGlkUHNDbG9uZSA9ICQuZXh0ZW5kKHRydWUsIFtdLCBtYXNrc2V0LnZhbGlkUG9zaXRpb25zKSxcclxuICAgIHRzdENsb25lID0gJC5leHRlbmQodHJ1ZSwge30sIG1hc2tzZXQudGVzdHMpLFxyXG4gICAgbGFzdEFsdCxcclxuICAgIGFsdGVybmF0aW9uLFxyXG4gICAgaXNWYWxpZFJzbHQgPSBmYWxzZSxcclxuICAgIHJldHVyblJzbHQgPSBmYWxzZSxcclxuICAgIGFsdFBvcyxcclxuICAgIHByZXZBbHRQb3MsXHJcbiAgICBpLFxyXG4gICAgdmFsaWRQb3MsXHJcbiAgICBkZWNpc2lvblBvcyxcclxuICAgIGxBbHRQb3MgPVxyXG4gICAgICByQWx0UG9zICE9PSB1bmRlZmluZWQgPyByQWx0UG9zIDogZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChpbnB1dG1hc2spLFxyXG4gICAgbmV4dFBvcyxcclxuICAgIGlucHV0LFxyXG4gICAgYmVnaW4sXHJcbiAgICBlbmQ7XHJcblxyXG4gIGlmIChzZWxlY3Rpb24pIHtcclxuICAgIGJlZ2luID0gc2VsZWN0aW9uLmJlZ2luO1xyXG4gICAgZW5kID0gc2VsZWN0aW9uLmVuZDtcclxuICAgIGlmIChzZWxlY3Rpb24uYmVnaW4gPiBzZWxlY3Rpb24uZW5kKSB7XHJcbiAgICAgIGJlZ2luID0gc2VsZWN0aW9uLmVuZDtcclxuICAgICAgZW5kID0gc2VsZWN0aW9uLmJlZ2luO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAobEFsdFBvcyA9PT0gLTEgJiYgckFsdFBvcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAvLyBkbyBub3QgcmVjdXJzZSB3aGVuIGFscmVhZHkgcGFzdGUgdGhlIGJlZ2lubmluZ1xyXG4gICAgbGFzdEFsdCA9IDA7XHJcbiAgICBwcmV2QWx0UG9zID0gZ2V0VGVzdC5jYWxsKGlucHV0bWFzaywgbGFzdEFsdCk7XHJcbiAgICBhbHRlcm5hdGlvbiA9IHByZXZBbHRQb3MuYWx0ZXJuYXRpb247XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGZpbmQgbGFzdCBtb2RpZmllZCBhbHRlcm5hdGlvblxyXG4gICAgZm9yICg7IGxBbHRQb3MgPj0gMDsgbEFsdFBvcy0tKSB7XHJcbiAgICAgIGFsdFBvcyA9IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbbEFsdFBvc107XHJcbiAgICAgIGlmIChhbHRQb3MgJiYgYWx0UG9zLmFsdGVybmF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBsQWx0UG9zIDw9IChtYXNrUG9zIHx8IDApICYmXHJcbiAgICAgICAgICBwcmV2QWx0UG9zICYmXHJcbiAgICAgICAgICBwcmV2QWx0UG9zLmxvY2F0b3JbYWx0UG9zLmFsdGVybmF0aW9uXSAhPT1cclxuICAgICAgICAgICAgYWx0UG9zLmxvY2F0b3JbYWx0UG9zLmFsdGVybmF0aW9uXVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxhc3RBbHQgPSBsQWx0UG9zO1xyXG4gICAgICAgIGFsdGVybmF0aW9uID0gbWFza3NldC52YWxpZFBvc2l0aW9uc1tsYXN0QWx0XS5hbHRlcm5hdGlvbjtcclxuICAgICAgICBwcmV2QWx0UG9zID0gYWx0UG9zO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoYWx0ZXJuYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgZGVjaXNpb25Qb3MgPSBwYXJzZUludChsYXN0QWx0KTtcclxuICAgIG1hc2tzZXQuZXhjbHVkZXNbZGVjaXNpb25Qb3NdID0gbWFza3NldC5leGNsdWRlc1tkZWNpc2lvblBvc10gfHwgW107XHJcbiAgICBpZiAobWFza1BvcyAhPT0gdHJ1ZSkge1xyXG4gICAgICAvLyBnZW5lcmFsaXplXHJcbiAgICAgIG1hc2tzZXQuZXhjbHVkZXNbZGVjaXNpb25Qb3NdLnB1c2goXHJcbiAgICAgICAgZ2V0RGVjaXNpb25UYWtlcihwcmV2QWx0UG9zKSArIFwiOlwiICsgcHJldkFsdFBvcy5hbHRlcm5hdGlvblxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB2YWxpZElucHV0cyA9IFtdLFxyXG4gICAgICByZXN1bHRQb3MgPSAtMTtcclxuICAgIGZvciAoXHJcbiAgICAgIGkgPSBkZWNpc2lvblBvcztcclxuICAgICAgZGVjaXNpb25Qb3MgPCBnZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGlucHV0bWFzaywgdW5kZWZpbmVkLCB0cnVlKSArIDE7XHJcbiAgICAgIGkrK1xyXG4gICAgKSB7XHJcbiAgICAgIGlmIChyZXN1bHRQb3MgPT09IC0xICYmIG1hc2tQb3MgPD0gaSAmJiBjICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YWxpZElucHV0cy5wdXNoKGMpO1xyXG4gICAgICAgIHJlc3VsdFBvcyA9IHZhbGlkSW5wdXRzLmxlbmd0aCAtIDE7XHJcbiAgICAgIH1cclxuICAgICAgdmFsaWRQb3MgPSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW2RlY2lzaW9uUG9zXTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHZhbGlkUG9zICYmXHJcbiAgICAgICAgdmFsaWRQb3MuZ2VuZXJhdGVkSW5wdXQgIT09IHRydWUgJiZcclxuICAgICAgICAoc2VsZWN0aW9uID09PSB1bmRlZmluZWQgfHwgaSA8IGJlZ2luIHx8IGkgPj0gZW5kKVxyXG4gICAgICApIHtcclxuICAgICAgICB2YWxpZElucHV0cy5wdXNoKHZhbGlkUG9zLmlucHV0KTtcclxuICAgICAgfVxyXG4gICAgICAvLyBkZWxldGUgbWFza3NldC52YWxpZFBvc2l0aW9uc1tpKytdO1xyXG4gICAgICBtYXNrc2V0LnZhbGlkUG9zaXRpb25zLnNwbGljZShkZWNpc2lvblBvcywgMSk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0UG9zID09PSAtMSAmJiBjICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdmFsaWRJbnB1dHMucHVzaChjKTtcclxuICAgICAgcmVzdWx0UG9zID0gdmFsaWRJbnB1dHMubGVuZ3RoIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICB3aGlsZSAoXHJcbiAgICAgIG1hc2tzZXQuZXhjbHVkZXNbZGVjaXNpb25Qb3NdICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgbWFza3NldC5leGNsdWRlc1tkZWNpc2lvblBvc10ubGVuZ3RoIDwgMTBcclxuICAgICkge1xyXG4gICAgICAvLyBtYXNrc2V0LnRlc3RzW2RlY2lzaW9uUG9zXSA9IHVuZGVmaW5lZDsgLy9jbGVhciBkZWNpc2lvblBvc1xyXG4gICAgICBtYXNrc2V0LnRlc3RzID0ge307IC8vIGNsZWFyIGFsbFxyXG4gICAgICByZXNldE1hc2tTZXQuY2FsbChpbnB1dG1hc2ssIHRydWUpOyAvLyBjbGVhciBnZXRidWZmZXJcclxuICAgICAgaXNWYWxpZFJzbHQgPSB0cnVlO1xyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdmFsaWRJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBuZXh0UG9zID1cclxuICAgICAgICAgIGlzVmFsaWRSc2x0LmNhcmV0IHx8XHJcbiAgICAgICAgICAob3B0cy5pbnNlcnRNb2RlID09IGZhbHNlICYmIG5leHRQb3MgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICA/IHNlZWtOZXh0LmNhbGwoaW5wdXRtYXNrLCBuZXh0UG9zKVxyXG4gICAgICAgICAgICA6IGdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoaW5wdXRtYXNrLCB1bmRlZmluZWQsIHRydWUpICsgMTtcclxuICAgICAgICBpbnB1dCA9IHZhbGlkSW5wdXRzW2ldO1xyXG4gICAgICAgIC8vIG5leHRQb3MgPSB0cmFuc2xhdGVQb3NpdGlvbi5jYWxsKGlucHV0bWFzaywgbmV4dFBvcyk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIShpc1ZhbGlkUnNsdCA9IGlzVmFsaWQuY2FsbChcclxuICAgICAgICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICAgICAgICBuZXh0UG9zLFxyXG4gICAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIGZyb21Jc1ZhbGlkLFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpID09PSByZXN1bHRQb3MpIHtcclxuICAgICAgICAgIHJldHVyblJzbHQgPSBpc1ZhbGlkUnNsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1hc2tQb3MgPT0gdHJ1ZSAmJiBpc1ZhbGlkUnNsdCkge1xyXG4gICAgICAgICAgLy8gcmV0dXJuIHZhbGlkcG9zaXRpb24gb24gZ2VuZXJhbGlzZVxyXG4gICAgICAgICAgcmV0dXJuUnNsdCA9IHsgY2FyZXRQb3M6IGkgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFpc1ZhbGlkUnNsdCkge1xyXG4gICAgICAgIHJlc2V0TWFza1NldC5jYWxsKGlucHV0bWFzayk7XHJcbiAgICAgICAgcHJldkFsdFBvcyA9IGdldFRlc3QuY2FsbChpbnB1dG1hc2ssIGRlY2lzaW9uUG9zKTsgLy8gZ2V0IHRoZSBjdXJyZW50IGRlY2lzaW9uUG9zIHRvIGV4Y2x1ZGUgfiBuZWVkcyB0byBiZSBiZWZvcmUgcmVzdG9yaW5nIHRoZSBpbml0aWFsIHZhbGlkYXRpb25cclxuICAgICAgICAvLyByZXNldCAmIHJldmVydFxyXG4gICAgICAgIG1hc2tzZXQudmFsaWRQb3NpdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCBbXSwgdmFsaWRQc0Nsb25lKTtcclxuICAgICAgICBtYXNrc2V0LnRlc3RzID0gJC5leHRlbmQodHJ1ZSwge30sIHRzdENsb25lKTsgLy8gcmVmcmVzaCB0ZXN0cyBhZnRlciBwb3NzaWJsZSBhbHRlcm5hdGluZ1xyXG4gICAgICAgIGlmIChtYXNrc2V0LmV4Y2x1ZGVzW2RlY2lzaW9uUG9zXSkge1xyXG4gICAgICAgICAgaWYgKHByZXZBbHRQb3MuYWx0ZXJuYXRpb24gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlY2lzaW9uVGFrZXIgPSBnZXREZWNpc2lvblRha2VyKHByZXZBbHRQb3MpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgbWFza3NldC5leGNsdWRlc1tkZWNpc2lvblBvc10uaW5kZXhPZihcclxuICAgICAgICAgICAgICAgIGRlY2lzaW9uVGFrZXIgKyBcIjpcIiArIHByZXZBbHRQb3MuYWx0ZXJuYXRpb25cclxuICAgICAgICAgICAgICApICE9PSAtMVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICByZXR1cm5Sc2x0ID0gYWx0ZXJuYXRlLmNhbGwoXHJcbiAgICAgICAgICAgICAgICBpbnB1dG1hc2ssXHJcbiAgICAgICAgICAgICAgICBtYXNrUG9zLFxyXG4gICAgICAgICAgICAgICAgYyxcclxuICAgICAgICAgICAgICAgIHN0cmljdCxcclxuICAgICAgICAgICAgICAgIGZyb21Jc1ZhbGlkLFxyXG4gICAgICAgICAgICAgICAgZGVjaXNpb25Qb3MgLSAxLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXNrc2V0LmV4Y2x1ZGVzW2RlY2lzaW9uUG9zXS5wdXNoKFxyXG4gICAgICAgICAgICAgIGRlY2lzaW9uVGFrZXIgKyBcIjpcIiArIHByZXZBbHRQb3MuYWx0ZXJuYXRpb25cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgICBpID0gZGVjaXNpb25Qb3M7XHJcbiAgICAgICAgICAgICAgaSA8IGdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoaW5wdXRtYXNrLCB1bmRlZmluZWQsIHRydWUpICsgMTtcclxuICAgICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIG1hc2tzZXQudmFsaWRQb3NpdGlvbnMuc3BsaWNlKGRlY2lzaW9uUG9zKTtcclxuICAgICAgICAgIH0gZWxzZSBkZWxldGUgbWFza3NldC5leGNsdWRlc1tkZWNpc2lvblBvc107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGxhdGVzdCBhbHRlcm5hdGlvblxyXG4gICAgICAgICAgcmV0dXJuUnNsdCA9IGFsdGVybmF0ZS5jYWxsKFxyXG4gICAgICAgICAgICBpbnB1dG1hc2ssXHJcbiAgICAgICAgICAgIG1hc2tQb3MsXHJcbiAgICAgICAgICAgIGMsXHJcbiAgICAgICAgICAgIHN0cmljdCxcclxuICAgICAgICAgICAgZnJvbUlzVmFsaWQsXHJcbiAgICAgICAgICAgIGRlY2lzaW9uUG9zIC0gMSxcclxuICAgICAgICAgICAgc2VsZWN0aW9uXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyByZXNldCBhbHRlcm5hdGlvbiBleGNsdWRlc1xyXG4gIGlmICghcmV0dXJuUnNsdCB8fCBvcHRzLmtlZXBTdGF0aWMgIT09IGZhbHNlKSB7XHJcbiAgICBkZWxldGUgbWFza3NldC5leGNsdWRlc1tkZWNpc2lvblBvc107XHJcbiAgfVxyXG4gIHJldHVybiByZXR1cm5Sc2x0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYXNpbmcoZWxlbSwgdGVzdCwgcG9zKSB7XHJcbiAgY29uc3Qgb3B0cyA9IHRoaXMub3B0cyxcclxuICAgIG1hc2tzZXQgPSB0aGlzLm1hc2tzZXQ7XHJcblxyXG4gIHN3aXRjaCAob3B0cy5jYXNpbmcgfHwgdGVzdC5jYXNpbmcpIHtcclxuICAgIGNhc2UgXCJ1cHBlclwiOlxyXG4gICAgICBlbGVtID0gZWxlbS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJsb3dlclwiOlxyXG4gICAgICBlbGVtID0gZWxlbS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJ0aXRsZVwiOlxyXG4gICAgICB2YXIgcG9zQmVmb3JlID0gbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3MgLSAxXTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHBvcyA9PT0gMCB8fFxyXG4gICAgICAgIChwb3NCZWZvcmUgJiYgcG9zQmVmb3JlLmlucHV0ID09PSBTdHJpbmcuZnJvbUNoYXJDb2RlKGtleUNvZGUuU3BhY2UpKVxyXG4gICAgICApIHtcclxuICAgICAgICBlbGVtID0gZWxlbS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW0gPSBlbGVtLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBpZiAodHlwZW9mIG9wdHMuY2FzaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICBjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuICAgICAgICBhcmdzLnB1c2gobWFza3NldC52YWxpZFBvc2l0aW9ucyk7XHJcbiAgICAgICAgZWxlbSA9IG9wdHMuY2FzaW5nLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZWxlbTtcclxufVxyXG5cclxuLy8gdG9iZSBwdXQgb24gcHJvdG90eXBlP1xyXG5mdW5jdGlvbiBjaGVja0FsdGVybmF0aW9uTWF0Y2goYWx0QXJyMSwgYWx0QXJyMiwgbmEpIHtcclxuICBjb25zdCBvcHRzID0gdGhpcy5vcHRzO1xyXG5cclxuICBsZXQgYWx0QXJyQyA9IG9wdHMuZ3JlZWR5ID8gYWx0QXJyMiA6IGFsdEFycjIuc2xpY2UoMCwgMSksXHJcbiAgICBpc01hdGNoID0gZmFsc2UsXHJcbiAgICBuYUFyciA9IG5hICE9PSB1bmRlZmluZWQgPyBuYS5zcGxpdChcIixcIikgOiBbXSxcclxuICAgIG5hTmR4O1xyXG5cclxuICAvLyByZW1vdmUgbm8gYWx0ZXJuYXRlIGluZGV4ZXMgZnJvbSBhbHRlcm5hdGlvbiBhcnJheVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmFBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICgobmFOZHggPSBhbHRBcnIxLmluZGV4T2YobmFBcnJbaV0pKSAhPT0gLTEpIHtcclxuICAgICAgYWx0QXJyMS5zcGxpY2UobmFOZHgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgYWxuZHggPSAwOyBhbG5keCA8IGFsdEFycjEubGVuZ3RoOyBhbG5keCsrKSB7XHJcbiAgICBpZiAoYWx0QXJyQy5pbmNsdWRlcyhhbHRBcnIxW2FsbmR4XSkpIHtcclxuICAgICAgaXNNYXRjaCA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gaXNNYXRjaDtcclxufVxyXG5cclxuLy8gdG9iZSBwdXQgb24gcHJvdG90eXBlP1xyXG5mdW5jdGlvbiBoYW5kbGVSZW1vdmUoaW5wdXQsIGMsIHBvcywgc3RyaWN0LCBmcm9tSXNWYWxpZCkge1xyXG4gIGNvbnN0IGlucHV0bWFzayA9IHRoaXMsXHJcbiAgICBtYXNrc2V0ID0gdGhpcy5tYXNrc2V0LFxyXG4gICAgb3B0cyA9IHRoaXMub3B0cztcclxuXHJcbiAgaWYgKG9wdHMubnVtZXJpY0lucHV0IHx8IGlucHV0bWFzay5pc1JUTCkge1xyXG4gICAgaWYgKGMgPT09IGtleXMuQmFja3NwYWNlKSB7XHJcbiAgICAgIGMgPSBrZXlzLkRlbGV0ZTtcclxuICAgIH0gZWxzZSBpZiAoYyA9PT0ga2V5cy5EZWxldGUpIHtcclxuICAgICAgYyA9IGtleXMuQmFja3NwYWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbnB1dG1hc2suaXNSVEwpIHtcclxuICAgICAgY29uc3QgcGVuZCA9IHBvcy5lbmQ7XHJcbiAgICAgIHBvcy5lbmQgPSBwb3MuYmVnaW47XHJcbiAgICAgIHBvcy5iZWdpbiA9IHBlbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBsdnAgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGlucHV0bWFzaywgdW5kZWZpbmVkLCB0cnVlKTtcclxuICBpZiAocG9zLmVuZCA+PSBnZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spLmxlbmd0aCAmJiBsdnAgPj0gcG9zLmVuZCkge1xyXG4gICAgLy8gaGFuZGxlIG51bWVyaWMgbmVnYXRlIHN5bWJvbCBvZmZzZXQsIGR1ZSB0byAgZHluYW1pYyBqaXQgbWFza2luZ1xyXG4gICAgcG9zLmVuZCA9IGx2cCArIDE7XHJcbiAgfVxyXG5cclxuICBpZiAoYyA9PT0ga2V5cy5CYWNrc3BhY2UpIHtcclxuICAgIGlmIChwb3MuZW5kIC0gcG9zLmJlZ2luIDwgMSkge1xyXG4gICAgICBwb3MuYmVnaW4gPSBzZWVrUHJldmlvdXMuY2FsbChpbnB1dG1hc2ssIHBvcy5iZWdpbik7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChjID09PSBrZXlzLkRlbGV0ZSkge1xyXG4gICAgaWYgKHBvcy5iZWdpbiA9PT0gcG9zLmVuZCkge1xyXG4gICAgICBwb3MuZW5kID0gaXNNYXNrLmNhbGwoaW5wdXRtYXNrLCBwb3MuZW5kLCB0cnVlLCB0cnVlKVxyXG4gICAgICAgID8gcG9zLmVuZCArIDFcclxuICAgICAgICA6IHNlZWtOZXh0LmNhbGwoaW5wdXRtYXNrLCBwb3MuZW5kKSArIDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBvZmZzZXQ7XHJcbiAgaWYgKChvZmZzZXQgPSByZXZhbGlkYXRlTWFzay5jYWxsKGlucHV0bWFzaywgcG9zKSkgIT09IGZhbHNlKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIChzdHJpY3QgIT09IHRydWUgJiYgb3B0cy5rZWVwU3RhdGljICE9PSBmYWxzZSkgfHxcclxuICAgICAgKG9wdHMucmVnZXggIT09IG51bGwgJiZcclxuICAgICAgICBnZXRUZXN0LmNhbGwoaW5wdXRtYXNrLCBwb3MuYmVnaW4pLm1hdGNoLmRlZi5pbmRleE9mKFwifFwiKSAhPT0gLTEpXHJcbiAgICApIHtcclxuICAgICAgLy8gVE9ETyBORUVEUyBCRVRURVIgQ0hFQ0sgV0hFTiBUTyBBTFRFUk5BVEUgIH4gb3B0cyByZWdleCBpc25cInQgZ29vZCBlbm91Z2hcclxuICAgICAgYWx0ZXJuYXRlLmNhbGwoaW5wdXRtYXNrLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RyaWN0ICE9PSB0cnVlKSB7XHJcbiAgICAgIG1hc2tzZXQucCA9IGMgPT09IGtleXMuRGVsZXRlID8gcG9zLmJlZ2luICsgb2Zmc2V0IDogcG9zLmJlZ2luO1xyXG4gICAgICBtYXNrc2V0LnAgPSBkZXRlcm1pbmVOZXdDYXJldFBvc2l0aW9uLmNhbGwoXHJcbiAgICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJlZ2luOiBtYXNrc2V0LnAsXHJcbiAgICAgICAgICBlbmQ6IG1hc2tzZXQucFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgb3B0cy5pbnNlcnRNb2RlID09PSBmYWxzZSAmJiBjID09PSBrZXlzLkJhY2tzcGFjZSA/IFwibm9uZVwiIDogdW5kZWZpbmVkXHJcbiAgICAgICkuYmVnaW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyB0b2JlIHB1dCBvbiBwcm90b3R5cGU/XHJcbmZ1bmN0aW9uIGlzQ29tcGxldGUoYnVmZmVyKSB7XHJcbiAgLy8gcmV0dXJuIHRydWUgLyBmYWxzZSAvIHVuZGVmaW5lZCAocmVwZWF0ICopXHJcbiAgY29uc3QgaW5wdXRtYXNrID0gdGhpcyxcclxuICAgIG9wdHMgPSB0aGlzLm9wdHMsXHJcbiAgICBtYXNrc2V0ID0gdGhpcy5tYXNrc2V0O1xyXG5cclxuICBpZiAodHlwZW9mIG9wdHMuaXNDb21wbGV0ZSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgcmV0dXJuIG9wdHMuaXNDb21wbGV0ZShidWZmZXIsIG9wdHMpO1xyXG4gIGlmIChvcHRzLnJlcGVhdCA9PT0gXCIqXCIpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgbGV0IGNvbXBsZXRlID0gZmFsc2UsXHJcbiAgICBscnAgPSBkZXRlcm1pbmVMYXN0UmVxdWlyZWRQb3NpdGlvbi5jYWxsKGlucHV0bWFzaywgdHJ1ZSksXHJcbiAgICBhbWwgPSBscnAubDsgLy8gc2Vla1ByZXZpb3VzLmNhbGwoaW5wdXRtYXNrLCBscnAubCk7XHJcblxyXG4gIGlmIChcclxuICAgIGxycC5kZWYgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgbHJwLmRlZi5uZXdCbG9ja01hcmtlciB8fFxyXG4gICAgbHJwLmRlZi5vcHRpb25hbGl0eSB8fFxyXG4gICAgbHJwLmRlZi5vcHRpb25hbFF1YW50aWZpZXJcclxuICApIHtcclxuICAgIGNvbXBsZXRlID0gdHJ1ZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGFtbDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRlc3QgPSBnZXRUZXN0VGVtcGxhdGUuY2FsbChpbnB1dG1hc2ssIGkpLm1hdGNoO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgKHRlc3Quc3RhdGljICE9PSB0cnVlICYmXHJcbiAgICAgICAgICBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW2ldID09PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICh0ZXN0Lm9wdGlvbmFsaXR5ID09PSBmYWxzZSB8fFxyXG4gICAgICAgICAgICB0ZXN0Lm9wdGlvbmFsaXR5ID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgKHRlc3Qub3B0aW9uYWxpdHkgJiYgdGVzdC5uZXdCbG9ja01hcmtlciA9PSBmYWxzZSkpICYmXHJcbiAgICAgICAgICAodGVzdC5vcHRpb25hbFF1YW50aWZpZXIgPT09IGZhbHNlIHx8XHJcbiAgICAgICAgICAgIHRlc3Qub3B0aW9uYWxRdWFudGlmaWVyID09PSB1bmRlZmluZWQpKSB8fFxyXG4gICAgICAgICh0ZXN0LnN0YXRpYyA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgdGVzdC5kZWYgIT0gXCJcIiAmJlxyXG4gICAgICAgICAgYnVmZmVyW2ldICE9PSBnZXRQbGFjZWhvbGRlci5jYWxsKGlucHV0bWFzaywgaSwgdGVzdCkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wbGV0ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTZWxlY3Rpb24ocG9zT2JqKSB7XHJcbiAgY29uc3QgaW5wdXRtYXNrID0gdGhpcyxcclxuICAgIG9wdHMgPSB0aGlzLm9wdHMsXHJcbiAgICBpbnNlcnRNb2RlT2Zmc2V0ID0gb3B0cy5pbnNlcnRNb2RlID8gMCA6IDE7XHJcbiAgcmV0dXJuIGlucHV0bWFzay5pc1JUTFxyXG4gICAgPyBwb3NPYmouYmVnaW4gLSBwb3NPYmouZW5kID4gaW5zZXJ0TW9kZU9mZnNldFxyXG4gICAgOiBwb3NPYmouZW5kIC0gcG9zT2JqLmJlZ2luID4gaW5zZXJ0TW9kZU9mZnNldDtcclxufVxyXG5cclxuLy8gdG9iZSBwdXQgb24gcHJvdG90eXBlP1xyXG5mdW5jdGlvbiBpc1ZhbGlkKFxyXG4gIHBvcyxcclxuICBjLFxyXG4gIHN0cmljdCxcclxuICBmcm9tSXNWYWxpZCxcclxuICBmcm9tQWx0ZXJuYXRlLFxyXG4gIHZhbGlkYXRlT25seSxcclxuICBmcm9tQ2hlY2t2YWxcclxuKSB7XHJcbiAgLy8gc3RyaWN0IHRydWUgfiBubyBjb3JyZWN0aW9uIG9yIGF1dG9maWxsXHJcbiAgY29uc3QgaW5wdXRtYXNrID0gdGhpcyxcclxuICAgICQgPSB0aGlzLmRlcGVuZGVuY3lMaWIsXHJcbiAgICBvcHRzID0gdGhpcy5vcHRzLFxyXG4gICAgbWFza3NldCA9IGlucHV0bWFzay5tYXNrc2V0O1xyXG5cclxuICBzdHJpY3QgPSBzdHJpY3QgPT09IHRydWU7IC8vIGFsd2F5cyBzZXQgYSB2YWx1ZSB0byBzdHJpY3QgdG8gcHJldmVudCBwb3NzaWJsZSBzdHJhbmdlIGJlaGF2aW9yIGluIHRoZSBleHRlbnNpb25zXHJcblxyXG4gIGxldCBtYXNrUG9zID0gcG9zO1xyXG4gIGlmIChwb3MuYmVnaW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gcG9zaXRpb24gd2FzIGEgcG9zaXRpb24gb2JqZWN0IC0gdXNlZCB0byBoYW5kbGUgYSBkZWxldGUgYnkgdHlwaW5nIG92ZXIgYSBzZWxlY3Rpb25cclxuICAgIG1hc2tQb3MgPSBpbnB1dG1hc2suaXNSVEwgPyBwb3MuZW5kIDogcG9zLmJlZ2luO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcHJvY2Vzc0NvbW1hbmRPYmplY3QoY29tbWFuZE9iaikge1xyXG4gICAgaWYgKGNvbW1hbmRPYmogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAoY29tbWFuZE9iai5yZW1vdmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIC8vIHJlbW92ZSBwb3NpdGlvbihzKVxyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjb21tYW5kT2JqLnJlbW92ZSkpXHJcbiAgICAgICAgICBjb21tYW5kT2JqLnJlbW92ZSA9IFtjb21tYW5kT2JqLnJlbW92ZV07XHJcbiAgICAgICAgY29tbWFuZE9iai5yZW1vdmVcclxuICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dG1hc2suaXNSVEwgPyBhLnBvcyAtIGIucG9zIDogYi5wb3MgLSBhLnBvcztcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAobG1udCkge1xyXG4gICAgICAgICAgICByZXZhbGlkYXRlTWFzay5jYWxsKGlucHV0bWFzaywgeyBiZWdpbjogbG1udCwgZW5kOiBsbW50ICsgMSB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbW1hbmRPYmoucmVtb3ZlID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb21tYW5kT2JqLmluc2VydCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy8gaW5zZXJ0IHBvc2l0aW9uKHMpXHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbW1hbmRPYmouaW5zZXJ0KSlcclxuICAgICAgICAgIGNvbW1hbmRPYmouaW5zZXJ0ID0gW2NvbW1hbmRPYmouaW5zZXJ0XTtcclxuICAgICAgICBjb21tYW5kT2JqLmluc2VydFxyXG4gICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0bWFzay5pc1JUTCA/IGIucG9zIC0gYS5wb3MgOiBhLnBvcyAtIGIucG9zO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChsbW50KSB7XHJcbiAgICAgICAgICAgIGlmIChsbW50LmMgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICBpc1ZhbGlkLmNhbGwoXHJcbiAgICAgICAgICAgICAgICBpbnB1dG1hc2ssXHJcbiAgICAgICAgICAgICAgICBsbW50LnBvcyxcclxuICAgICAgICAgICAgICAgIGxtbnQuYyxcclxuICAgICAgICAgICAgICAgIGxtbnQuc3RyaWN0ICE9PSB1bmRlZmluZWQgPyBsbW50LnN0cmljdCA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsbW50LmZyb21Jc1ZhbGlkICE9PSB1bmRlZmluZWQgPyBsbW50LmZyb21Jc1ZhbGlkIDogZnJvbUlzVmFsaWRcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBjb21tYW5kT2JqLmluc2VydCA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbW1hbmRPYmoucmVmcmVzaEZyb21CdWZmZXIgJiYgY29tbWFuZE9iai5idWZmZXIpIHtcclxuICAgICAgICBjb25zdCByZWZyZXNoID0gY29tbWFuZE9iai5yZWZyZXNoRnJvbUJ1ZmZlcjtcclxuICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlci5jYWxsKFxyXG4gICAgICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICAgICAgcmVmcmVzaCA9PT0gdHJ1ZSA/IHJlZnJlc2ggOiByZWZyZXNoLnN0YXJ0LFxyXG4gICAgICAgICAgcmVmcmVzaC5lbmQsXHJcbiAgICAgICAgICBjb21tYW5kT2JqLmJ1ZmZlclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29tbWFuZE9iai5yZWZyZXNoRnJvbUJ1ZmZlciA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbW1hbmRPYmoucmV3cml0ZVBvc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBtYXNrUG9zID0gY29tbWFuZE9iai5yZXdyaXRlUG9zaXRpb247XHJcbiAgICAgICAgLy8gY29tbWFuZE9iai5yZXdyaXRlUG9zaXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29tbWFuZE9iaiA9IHRydWU7IC8vIHNlZSBwcmV2YWxpZGF0aW9uIGluIGlzVmFsaWRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbW1hbmRPYmo7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfaXNWYWxpZChwb3NpdGlvbiwgYywgc3RyaWN0KSB7XHJcbiAgICBsZXQgcnNsdCA9IGZhbHNlO1xyXG4gICAgZ2V0VGVzdHMuY2FsbChpbnB1dG1hc2ssIHBvc2l0aW9uKS5ldmVyeShmdW5jdGlvbiAodHN0LCBuZHgpIHtcclxuICAgICAgY29uc3QgdGVzdCA9IHRzdC5tYXRjaDtcclxuICAgICAgLy8gbWFrZSBzdXJlIHRoZSBidWZmZXIgaXMgc2V0IGFuZCBjb3JyZWN0XHJcbiAgICAgIGdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaywgdHJ1ZSk7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0ZXN0LmppdCAmJlxyXG4gICAgICAgIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbc2Vla1ByZXZpb3VzLmNhbGwoaW5wdXRtYXNrLCBwb3NpdGlvbildID09PVxyXG4gICAgICAgICAgdW5kZWZpbmVkXHJcbiAgICAgICkge1xyXG4gICAgICAgIC8vIGlnbm9yZSBpZiBqaXQgaXMgbm90IGRlc2lyYWJsZVxyXG4gICAgICAgIHJzbHQgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyByZXR1cm4gaXMgZmFsc2Ugb3IgYSBqc29uIG9iamVjdCA9PiB7IHBvczogPz8sIGM6ID8/fSBvciB0cnVlXHJcbiAgICAgICAgcnNsdCA9XHJcbiAgICAgICAgICB0ZXN0LmZuICE9IG51bGxcclxuICAgICAgICAgICAgPyB0ZXN0LmZuLnRlc3QoXHJcbiAgICAgICAgICAgICAgICBjLFxyXG4gICAgICAgICAgICAgICAgbWFza3NldCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgc3RyaWN0LFxyXG4gICAgICAgICAgICAgICAgb3B0cyxcclxuICAgICAgICAgICAgICAgIGlzU2VsZWN0aW9uLmNhbGwoaW5wdXRtYXNrLCBwb3MpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA6IChjID09PSB0ZXN0LmRlZiB8fCBjID09PSBvcHRzLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIpICYmXHJcbiAgICAgICAgICAgICAgdGVzdC5kZWYgIT09IFwiXCIgLy8gbm9uIG1hc2tcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICBjOlxyXG4gICAgICAgICAgICAgICAgICBnZXRQbGFjZWhvbGRlci5jYWxsKGlucHV0bWFzaywgcG9zaXRpb24sIHRlc3QsIHRydWUpIHx8XHJcbiAgICAgICAgICAgICAgICAgIHRlc3QuZGVmLFxyXG4gICAgICAgICAgICAgICAgcG9zOiBwb3NpdGlvblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocnNsdCAhPT0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgZWxlbSA9IHJzbHQuYyAhPT0gdW5kZWZpbmVkID8gcnNsdC5jIDogYyxcclxuICAgICAgICAgIHZhbGlkYXRlZFBvcyA9IHBvc2l0aW9uO1xyXG4gICAgICAgIGVsZW0gPVxyXG4gICAgICAgICAgZWxlbSA9PT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyICYmIHRlc3Quc3RhdGljID09PSB0cnVlXHJcbiAgICAgICAgICAgID8gZ2V0UGxhY2Vob2xkZXIuY2FsbChpbnB1dG1hc2ssIHBvc2l0aW9uLCB0ZXN0LCB0cnVlKSB8fCB0ZXN0LmRlZlxyXG4gICAgICAgICAgICA6IGVsZW07XHJcblxyXG4gICAgICAgIHJzbHQgPSBwcm9jZXNzQ29tbWFuZE9iamVjdChyc2x0KTtcclxuXHJcbiAgICAgICAgaWYgKHJzbHQgIT09IHRydWUgJiYgcnNsdC5wb3MgIT09IHVuZGVmaW5lZCAmJiByc2x0LnBvcyAhPT0gcG9zaXRpb24pIHtcclxuICAgICAgICAgIC8vIHRoZWlyIGlzIGEgcG9zaXRpb24gb2Zmc2V0XHJcbiAgICAgICAgICB2YWxpZGF0ZWRQb3MgPSByc2x0LnBvcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyc2x0ICE9PSB0cnVlICYmIHJzbHQucG9zID09PSB1bmRlZmluZWQgJiYgcnNsdC5jID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gYnJlYWtvdXQgaWYgbm90aGluZyB0byBpbnNlcnRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHJldmFsaWRhdGVNYXNrLmNhbGwoXHJcbiAgICAgICAgICAgIGlucHV0bWFzayxcclxuICAgICAgICAgICAgcG9zLFxyXG4gICAgICAgICAgICAkLmV4dGVuZCh7fSwgdHN0LCB7XHJcbiAgICAgICAgICAgICAgaW5wdXQ6IGNhc2luZy5jYWxsKGlucHV0bWFzaywgZWxlbSwgdGVzdCwgdmFsaWRhdGVkUG9zKVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZnJvbUlzVmFsaWQsXHJcbiAgICAgICAgICAgIHZhbGlkYXRlZFBvc1xyXG4gICAgICAgICAgKSA9PT0gZmFsc2VcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJzbHQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBicmVhayBmcm9tIGxvb3BcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByc2x0O1xyXG4gIH1cclxuXHJcbiAgbGV0IHJlc3VsdCA9IHRydWUsXHJcbiAgICBwb3NpdGlvbnNDbG9uZSA9ICQuZXh0ZW5kKHRydWUsIFtdLCBtYXNrc2V0LnZhbGlkUG9zaXRpb25zKTsgLy8gY2xvbmUgdGhlIGN1cnJlbnRQb3NpdGlvbnNcclxuXHJcbiAgaWYgKFxyXG4gICAgb3B0cy5rZWVwU3RhdGljID09PSBmYWxzZSAmJlxyXG4gICAgbWFza3NldC5leGNsdWRlc1ttYXNrUG9zXSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICBmcm9tQWx0ZXJuYXRlICE9PSB0cnVlICYmXHJcbiAgICBmcm9tSXNWYWxpZCAhPT0gdHJ1ZVxyXG4gICkge1xyXG4gICAgZm9yIChsZXQgaSA9IG1hc2tQb3M7IGkgPCAoaW5wdXRtYXNrLmlzUlRMID8gcG9zLmJlZ2luIDogcG9zLmVuZCk7IGkrKykge1xyXG4gICAgICBpZiAobWFza3NldC5leGNsdWRlc1tpXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbWFza3NldC5leGNsdWRlc1tpXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICBkZWxldGUgbWFza3NldC50ZXN0c1tpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKFxyXG4gICAgdHlwZW9mIG9wdHMucHJlVmFsaWRhdGlvbiA9PT0gXCJmdW5jdGlvblwiICYmXHJcbiAgICBmcm9tSXNWYWxpZCAhPT0gdHJ1ZSAmJlxyXG4gICAgdmFsaWRhdGVPbmx5ICE9PSB0cnVlXHJcbiAgKSB7XHJcbiAgICByZXN1bHQgPSBvcHRzLnByZVZhbGlkYXRpb24uY2FsbChcclxuICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICBnZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spLFxyXG4gICAgICBtYXNrUG9zLFxyXG4gICAgICBjLFxyXG4gICAgICBpc1NlbGVjdGlvbi5jYWxsKGlucHV0bWFzaywgcG9zKSxcclxuICAgICAgb3B0cyxcclxuICAgICAgbWFza3NldCxcclxuICAgICAgcG9zLFxyXG4gICAgICBzdHJpY3QgfHwgZnJvbUFsdGVybmF0ZVxyXG4gICAgKTtcclxuICAgIHJlc3VsdCA9IHByb2Nlc3NDb21tYW5kT2JqZWN0KHJlc3VsdCk7XHJcbiAgfVxyXG4gIGlmIChyZXN1bHQgPT09IHRydWUpIHtcclxuICAgIC8vIHByZVZhbGlkYXRpb24gcmVzdWx0XHJcbiAgICByZXN1bHQgPSBfaXNWYWxpZChtYXNrUG9zLCBjLCBzdHJpY3QpO1xyXG4gICAgaWYgKFxyXG4gICAgICAoIXN0cmljdCB8fCBmcm9tSXNWYWxpZCA9PT0gdHJ1ZSkgJiZcclxuICAgICAgcmVzdWx0ID09PSBmYWxzZSAmJlxyXG4gICAgICB2YWxpZGF0ZU9ubHkgIT09IHRydWVcclxuICAgICkge1xyXG4gICAgICBjb25zdCBjdXJyZW50UG9zVmFsaWQgPSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW21hc2tQb3NdO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgY3VycmVudFBvc1ZhbGlkICYmXHJcbiAgICAgICAgY3VycmVudFBvc1ZhbGlkLm1hdGNoLnN0YXRpYyA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgIChjdXJyZW50UG9zVmFsaWQubWF0Y2guZGVmID09PSBjIHx8XHJcbiAgICAgICAgICBjID09PSBvcHRzLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJlc3VsdCA9IHtcclxuICAgICAgICAgIGNhcmV0OiBzZWVrTmV4dC5jYWxsKGlucHV0bWFzaywgbWFza1BvcylcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIG9wdHMuaW5zZXJ0TW9kZSB8fFxyXG4gICAgICAgICAgbWFza3NldC52YWxpZFBvc2l0aW9uc1tzZWVrTmV4dC5jYWxsKGlucHV0bWFzaywgbWFza1BvcyldID09PVxyXG4gICAgICAgICAgICB1bmRlZmluZWQgfHxcclxuICAgICAgICAgIHBvcy5lbmQgPiBtYXNrUG9zXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAvLyBkb2VzIHRoZSBpbnB1dCBtYXRjaCBvbiBhIGZ1cnRoZXIgcG9zaXRpb24/XHJcbiAgICAgICAgICBsZXQgc2tpcCA9IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBtYXNrc2V0LmppdE9mZnNldFttYXNrUG9zXSAmJlxyXG4gICAgICAgICAgICBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3NlZWtOZXh0LmNhbGwoaW5wdXRtYXNrLCBtYXNrUG9zKV0gPT09XHJcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gaXNWYWxpZC5jYWxsKFxyXG4gICAgICAgICAgICAgIGlucHV0bWFzayxcclxuICAgICAgICAgICAgICBtYXNrUG9zICsgbWFza3NldC5qaXRPZmZzZXRbbWFza1Bvc10sXHJcbiAgICAgICAgICAgICAgYyxcclxuICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICBpZiAoZnJvbUFsdGVybmF0ZSAhPT0gdHJ1ZSkgcmVzdWx0LmNhcmV0ID0gbWFza1BvcztcclxuICAgICAgICAgICAgICBza2lwID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHBvcy5lbmQgPiBtYXNrUG9zKSB7XHJcbiAgICAgICAgICAgIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbbWFza1Bvc10gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICFza2lwICYmXHJcbiAgICAgICAgICAgICFpc01hc2suY2FsbChpbnB1dG1hc2ssIG1hc2tQb3MsIG9wdHMua2VlcFN0YXRpYyAmJiBtYXNrUG9zID09PSAwKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgbGV0IG5Qb3MgPSBtYXNrUG9zICsgMSxcclxuICAgICAgICAgICAgICAgIHNuUG9zID0gc2Vla05leHQuY2FsbChpbnB1dG1hc2ssIG1hc2tQb3MsIGZhbHNlLCBtYXNrUG9zICE9PSAwKTtcclxuICAgICAgICAgICAgICBuUG9zIDw9IHNuUG9zO1xyXG4gICAgICAgICAgICAgIG5Qb3MrK1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAvLyBpZiAoIWlzTWFzayhuUG9zLCB0cnVlKSkge1xyXG4gICAgICAgICAgICAgIC8vIFx0Y29udGludWU7XHJcbiAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgIHJlc3VsdCA9IF9pc1ZhbGlkKG5Qb3MsIGMsIHN0cmljdCk7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9XHJcbiAgICAgICAgICAgICAgICAgIHRyYWNrYmFja1Bvc2l0aW9ucy5jYWxsKFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0bWFzayxcclxuICAgICAgICAgICAgICAgICAgICBtYXNrUG9zLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wb3MgIT09IHVuZGVmaW5lZCA/IHJlc3VsdC5wb3MgOiBuUG9zXHJcbiAgICAgICAgICAgICAgICAgICkgfHwgcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgbWFza1BvcyA9IG5Qb3M7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW5wdXRtYXNrLmhhc0FsdGVybmF0b3IgJiYgZnJvbUFsdGVybmF0ZSAhPT0gdHJ1ZSAmJiAhc3RyaWN0KSB7XHJcbiAgICAgIGZyb21BbHRlcm5hdGUgPSB0cnVlOyAvLyBzdG9wIHBvc3NpYmxlIGxvb3BcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHJlc3VsdCA9PT0gZmFsc2UgJiZcclxuICAgICAgICBvcHRzLmtlZXBTdGF0aWMgJiZcclxuICAgICAgICAoaXNDb21wbGV0ZS5jYWxsKGlucHV0bWFzaywgZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKSkgfHwgbWFza1BvcyA9PT0gMClcclxuICAgICAgKSB7XHJcbiAgICAgICAgLy8gdHJ5IGZ1enp5IGFsdGVybmF0b3IgbG9naWNcclxuICAgICAgICByZXN1bHQgPSBhbHRlcm5hdGUuY2FsbChcclxuICAgICAgICAgIGlucHV0bWFzayxcclxuICAgICAgICAgIG1hc2tQb3MsXHJcbiAgICAgICAgICBjLFxyXG4gICAgICAgICAgc3RyaWN0LFxyXG4gICAgICAgICAgZnJvbUlzVmFsaWQsXHJcbiAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICBwb3NcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGlzU2VsZWN0aW9uLmNhbGwoaW5wdXRtYXNrLCBwb3MpICYmXHJcbiAgICAgICAgbWFza3NldC50ZXN0c1ttYXNrUG9zXSAmJlxyXG4gICAgICAgIG1hc2tzZXQudGVzdHNbbWFza1Bvc10ubGVuZ3RoID4gMSAmJlxyXG4gICAgICAgIG9wdHMua2VlcFN0YXRpY1xyXG4gICAgICApIHtcclxuICAgICAgICAvLyBzZWxlY3Rpb24gY2xlYXJzIGFuIGFsdGVybmF0ZWQga2VlcHN0YXRpYyBtYXNrIH4gIzIxODlcclxuICAgICAgICByZXN1bHQgPSBhbHRlcm5hdGUuY2FsbChpbnB1dG1hc2ssIHRydWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIHJlc3VsdCA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgIG9wdHMubnVtZXJpY0lucHV0ICE9PSB0cnVlICYmXHJcbiAgICAgICAgbWFza3NldC50ZXN0c1ttYXNrUG9zXSAmJlxyXG4gICAgICAgIG1hc2tzZXQudGVzdHNbbWFza1Bvc10ubGVuZ3RoID4gMSAmJlxyXG4gICAgICAgIGdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoaW5wdXRtYXNrLCB1bmRlZmluZWQsIHRydWUpID4gbWFza1Bvc1xyXG4gICAgICApIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFsdGVybmF0aW5nXCIpO1xyXG4gICAgICAgIHJlc3VsdCA9IGFsdGVybmF0ZS5jYWxsKGlucHV0bWFzaywgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XHJcbiAgICAgIHJlc3VsdCA9IHtcclxuICAgICAgICBwb3M6IG1hc2tQb3NcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGVvZiBvcHRzLnBvc3RWYWxpZGF0aW9uID09PSBcImZ1bmN0aW9uXCIgJiZcclxuICAgICAgZnJvbUlzVmFsaWQgIT09IHRydWUgJiZcclxuICAgICAgdmFsaWRhdGVPbmx5ICE9PSB0cnVlXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgcG9zdFJlc3VsdCA9IG9wdHMucG9zdFZhbGlkYXRpb24uY2FsbChcclxuICAgICAgICBpbnB1dG1hc2ssXHJcbiAgICAgICAgZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrLCB0cnVlKSxcclxuICAgICAgICBwb3MuYmVnaW4gIT09IHVuZGVmaW5lZCA/IChpbnB1dG1hc2suaXNSVEwgPyBwb3MuZW5kIDogcG9zLmJlZ2luKSA6IHBvcyxcclxuICAgICAgICBjLFxyXG4gICAgICAgIHJlc3VsdCxcclxuICAgICAgICBvcHRzLFxyXG4gICAgICAgIG1hc2tzZXQsXHJcbiAgICAgICAgc3RyaWN0LFxyXG4gICAgICAgIGZyb21DaGVja3ZhbCxcclxuICAgICAgICBmcm9tQWx0ZXJuYXRlXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChwb3N0UmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXN1bHQgPSBwb3N0UmVzdWx0ID09PSB0cnVlID8gcmVzdWx0IDogcG9zdFJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHJlc3VsdCAmJiByZXN1bHQucG9zID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJlc3VsdC5wb3MgPSBtYXNrUG9zO1xyXG4gIH1cclxuXHJcbiAgaWYgKHJlc3VsdCA9PT0gZmFsc2UgfHwgdmFsaWRhdGVPbmx5ID09PSB0cnVlKSB7XHJcbiAgICByZXNldE1hc2tTZXQuY2FsbChpbnB1dG1hc2ssIHRydWUpO1xyXG4gICAgbWFza3NldC52YWxpZFBvc2l0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIFtdLCBwb3NpdGlvbnNDbG9uZSk7IC8vIHJldmVydCB2YWxpZGF0aW9uIGNoYW5nZXNcclxuICB9IGVsc2Uge1xyXG4gICAgdHJhY2tiYWNrUG9zaXRpb25zLmNhbGwoaW5wdXRtYXNrLCB1bmRlZmluZWQsIG1hc2tQb3MsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGVuZFJlc3VsdCA9IHByb2Nlc3NDb21tYW5kT2JqZWN0KHJlc3VsdCk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJyZXR1cm5lZCByZXN1bHQgXCIgKyBKU09OLnN0cmluZ2lmeShlbmRSZXN1bHQpKTtcclxuICBpZiAoaW5wdXRtYXNrLm1heExlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBidWZmZXIgPSBnZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spO1xyXG4gICAgaWYgKGJ1ZmZlci5sZW5ndGggPiBpbnB1dG1hc2subWF4TGVuZ3RoICYmICFmcm9tSXNWYWxpZCkge1xyXG4gICAgICByZXNldE1hc2tTZXQuY2FsbChpbnB1dG1hc2ssIHRydWUpO1xyXG4gICAgICBtYXNrc2V0LnZhbGlkUG9zaXRpb25zID0gJC5leHRlbmQodHJ1ZSwgW10sIHBvc2l0aW9uc0Nsb25lKTsgLy8gcmV2ZXJ0IHZhbGlkYXRpb24gY2hhbmdlc1xyXG4gICAgICBlbmRSZXN1bHQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVuZFJlc3VsdDtcclxufVxyXG5cclxuLy8gdG9iZSBwdXQgb24gcHJvdG90eXBlP1xyXG5mdW5jdGlvbiBwb3NpdGlvbkNhbk1hdGNoRGVmaW5pdGlvbihwb3MsIHRlc3REZWZpbml0aW9uLCBvcHRzKSB7XHJcbiAgY29uc3QgaW5wdXRtYXNrID0gdGhpcyxcclxuICAgIG1hc2tzZXQgPSB0aGlzLm1hc2tzZXQ7XHJcblxyXG4gIGxldCB2YWxpZCA9IGZhbHNlLFxyXG4gICAgdGVzdHMgPSBnZXRUZXN0cy5jYWxsKGlucHV0bWFzaywgcG9zKTtcclxuICBmb3IgKGxldCB0bmR4ID0gMDsgdG5keCA8IHRlc3RzLmxlbmd0aDsgdG5keCsrKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRlc3RzW3RuZHhdLm1hdGNoICYmXHJcbiAgICAgICgodGVzdHNbdG5keF0ubWF0Y2gubmF0aXZlRGVmID09PVxyXG4gICAgICAgIHRlc3REZWZpbml0aW9uLm1hdGNoW29wdHMuc2hpZnRQb3NpdGlvbnMgPyBcImRlZlwiIDogXCJuYXRpdmVEZWZcIl0gJiZcclxuICAgICAgICAoIW9wdHMuc2hpZnRQb3NpdGlvbnMgfHwgIXRlc3REZWZpbml0aW9uLm1hdGNoLnN0YXRpYykpIHx8XHJcbiAgICAgICAgdGVzdHNbdG5keF0ubWF0Y2gubmF0aXZlRGVmID09PSB0ZXN0RGVmaW5pdGlvbi5tYXRjaC5uYXRpdmVEZWYgfHxcclxuICAgICAgICAob3B0cy5yZWdleCAmJlxyXG4gICAgICAgICAgIXRlc3RzW3RuZHhdLm1hdGNoLnN0YXRpYyAmJlxyXG4gICAgICAgICAgdGVzdHNbdG5keF0ubWF0Y2guZm4udGVzdChcclxuICAgICAgICAgICAgdGVzdERlZmluaXRpb24uaW5wdXQsXHJcbiAgICAgICAgICAgIG1hc2tzZXQsXHJcbiAgICAgICAgICAgIHBvcyxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIG9wdHNcclxuICAgICAgICAgICkpKVxyXG4gICAgKSB7XHJcbiAgICAgIHZhbGlkID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICB0ZXN0c1t0bmR4XS5tYXRjaCAmJlxyXG4gICAgICB0ZXN0c1t0bmR4XS5tYXRjaC5kZWYgPT09IHRlc3REZWZpbml0aW9uLm1hdGNoLm5hdGl2ZURlZlxyXG4gICAgKSB7XHJcbiAgICAgIHZhbGlkID0gdW5kZWZpbmVkO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHZhbGlkID09PSBmYWxzZSkge1xyXG4gICAgaWYgKG1hc2tzZXQuaml0T2Zmc2V0W3Bvc10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB2YWxpZCA9IHBvc2l0aW9uQ2FuTWF0Y2hEZWZpbml0aW9uLmNhbGwoXHJcbiAgICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICAgIHBvcyArIG1hc2tzZXQuaml0T2Zmc2V0W3Bvc10sXHJcbiAgICAgICAgdGVzdERlZmluaXRpb24sXHJcbiAgICAgICAgb3B0c1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdmFsaWQ7XHJcbn1cclxuXHJcbi8vIHRvYmUgcHV0IG9uIHByb3RvdHlwZT9cclxuZnVuY3Rpb24gcmVmcmVzaEZyb21CdWZmZXIoc3RhcnQsIGVuZCwgYnVmZmVyKSB7XHJcbiAgY29uc3QgaW5wdXRtYXNrID0gdGhpcyxcclxuICAgIG1hc2tzZXQgPSB0aGlzLm1hc2tzZXQsXHJcbiAgICBvcHRzID0gdGhpcy5vcHRzLFxyXG4gICAgJCA9IHRoaXMuZGVwZW5kZW5jeUxpYjtcclxuICAvLyBjaGVja1ZhbC5jYWxsKGlucHV0bWFzaywgZWwsIGZhbHNlLCB0cnVlLCBpc1JUTCA/IGJ1ZmZlci5yZXZlcnNlKCkgOiBidWZmZXIpO1xyXG4gIGxldCBpLFxyXG4gICAgcCxcclxuICAgIHNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIgPSBvcHRzLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIsXHJcbiAgICBiZmZyID0gaW5wdXRtYXNrLmlzUlRMID8gYnVmZmVyLnNsaWNlKCkucmV2ZXJzZSgpIDogYnVmZmVyO1xyXG4gIG9wdHMuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciA9IFwiXCI7XHJcbiAgaWYgKHN0YXJ0ID09PSB0cnVlKSB7XHJcbiAgICByZXNldE1hc2tTZXQuY2FsbChpbnB1dG1hc2ssIGZhbHNlKTtcclxuICAgIHN0YXJ0ID0gMDtcclxuICAgIGVuZCA9IGJ1ZmZlci5sZW5ndGg7XHJcbiAgICBwID0gZGV0ZXJtaW5lTmV3Q2FyZXRQb3NpdGlvbi5jYWxsKFxyXG4gICAgICBpbnB1dG1hc2ssXHJcbiAgICAgIHsgYmVnaW46IDAsIGVuZDogMCB9LFxyXG4gICAgICBmYWxzZVxyXG4gICAgKS5iZWdpbjtcclxuICB9IGVsc2Uge1xyXG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICBtYXNrc2V0LnZhbGlkUG9zaXRpb25zLnNwbGljZShzdGFydCwgMCk7XHJcbiAgICB9XHJcbiAgICBwID0gc3RhcnQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBrZXlwcmVzcyA9IG5ldyAkLkV2ZW50KFwia2V5cHJlc3NcIik7XHJcbiAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAga2V5cHJlc3Mua2V5ID0gYmZmcltpXS50b1N0cmluZygpO1xyXG4gICAgaW5wdXRtYXNrLmlnbm9yYWJsZSA9IGZhbHNlOyAvLyBtYWtlIHN1cmUgaWdub3JhYmxlIGlzIGlnbm9yZWQgOy0pXHJcbiAgICBjb25zdCB2YWxSZXN1bHQgPSBFdmVudEhhbmRsZXJzLmtleXByZXNzRXZlbnQuY2FsbChcclxuICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICBrZXlwcmVzcyxcclxuICAgICAgdHJ1ZSxcclxuICAgICAgZmFsc2UsXHJcbiAgICAgIGZhbHNlLFxyXG4gICAgICBwXHJcbiAgICApO1xyXG4gICAgaWYgKHZhbFJlc3VsdCAhPT0gZmFsc2UgJiYgdmFsUmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcCA9IHZhbFJlc3VsdC5mb3J3YXJkUG9zaXRpb247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcHRzLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIgPSBza2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyO1xyXG59XHJcblxyXG4vLyB0b2JlIHB1dCBvbiBwcm90b3R5cGU/XHJcbi8vIGZpbGwgaW4gYmVzdCBwb3NpdGlvbnMgYWNjb3JkaW5nIHRoZSBjdXJyZW50IGlucHV0XHJcbmZ1bmN0aW9uIHRyYWNrYmFja1Bvc2l0aW9ucyhvcmlnaW5hbFBvcywgbmV3UG9zLCBmaWxsT25seSkge1xyXG4gIGNvbnN0IGlucHV0bWFzayA9IHRoaXMsXHJcbiAgICBtYXNrc2V0ID0gdGhpcy5tYXNrc2V0LFxyXG4gICAgJCA9IHRoaXMuZGVwZW5kZW5jeUxpYjtcclxuXHJcbiAgLy8gY29uc29sZS5sb2coXCJ0cmFja2JhY2tQb3NpdGlvbnMgXCIgKyBvcmlnaW5hbFBvcyArIFwiIFwiICsgbmV3UG9zKTtcclxuICBpZiAob3JpZ2luYWxQb3MgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gZmluZCBwcmV2aW91cyB2YWxpZFxyXG4gICAgZm9yIChvcmlnaW5hbFBvcyA9IG5ld1BvcyAtIDE7IG9yaWdpbmFsUG9zID4gMDsgb3JpZ2luYWxQb3MtLSkge1xyXG4gICAgICBpZiAobWFza3NldC52YWxpZFBvc2l0aW9uc1tvcmlnaW5hbFBvc10pIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICBmb3IgKGxldCBwcyA9IG9yaWdpbmFsUG9zOyBwcyA8IG5ld1BvczsgcHMrKykge1xyXG4gICAgaWYgKFxyXG4gICAgICBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3BzXSA9PT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICFpc01hc2suY2FsbChpbnB1dG1hc2ssIHBzLCBmYWxzZSlcclxuICAgICkge1xyXG4gICAgICBjb25zdCB2cCA9XHJcbiAgICAgICAgcHMgPT0gMCA/IGdldFRlc3QuY2FsbChpbnB1dG1hc2ssIHBzKSA6IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcHMgLSAxXTtcclxuICAgICAgaWYgKHZwKSB7XHJcbiAgICAgICAgY29uc3QgdGVzdHMgPSBnZXRUZXN0cy5jYWxsKGlucHV0bWFzaywgcHMpLnNsaWNlKCk7XHJcbiAgICAgICAgaWYgKHRlc3RzW3Rlc3RzLmxlbmd0aCAtIDFdLm1hdGNoLmRlZiA9PT0gXCJcIikgdGVzdHMucG9wKCk7XHJcbiAgICAgICAgdmFyIGJlc3RNYXRjaCA9IGRldGVybWluZVRlc3RUZW1wbGF0ZS5jYWxsKGlucHV0bWFzaywgcHMsIHRlc3RzKSxcclxuICAgICAgICAgIG5wO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGJlc3RNYXRjaCAmJlxyXG4gICAgICAgICAgKGJlc3RNYXRjaC5tYXRjaC5qaXQgIT09IHRydWUgfHxcclxuICAgICAgICAgICAgKGJlc3RNYXRjaC5tYXRjaC5uZXdCbG9ja01hcmtlciA9PT0gXCJtYXN0ZXJcIiAmJlxyXG4gICAgICAgICAgICAgIChucCA9IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcHMgKyAxXSkgJiZcclxuICAgICAgICAgICAgICBucC5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgPT09IHRydWUpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgYmVzdE1hdGNoID0gJC5leHRlbmQoe30sIGJlc3RNYXRjaCwge1xyXG4gICAgICAgICAgICBpbnB1dDpcclxuICAgICAgICAgICAgICBnZXRQbGFjZWhvbGRlci5jYWxsKGlucHV0bWFzaywgcHMsIGJlc3RNYXRjaC5tYXRjaCwgdHJ1ZSkgfHxcclxuICAgICAgICAgICAgICBiZXN0TWF0Y2gubWF0Y2guZGVmXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJlc3RNYXRjaC5nZW5lcmF0ZWRJbnB1dCA9IHRydWU7XHJcbiAgICAgICAgICByZXZhbGlkYXRlTWFzay5jYWxsKGlucHV0bWFzaywgcHMsIGJlc3RNYXRjaCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgaWYgKGZpbGxPbmx5ICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIHJldmFsaWRhdGUgdGhlIG5ldyBwb3NpdGlvbiB0byB1cGRhdGUgdGhlIGxvY2F0b3IgdmFsdWVcclxuICAgICAgICAgICAgY29uc3QgY3ZwSW5wdXQgPSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW25ld1Bvc10uaW5wdXQ7XHJcbiAgICAgICAgICAgIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbbmV3UG9zXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWQuY2FsbChpbnB1dG1hc2ssIG5ld1BvcywgY3ZwSW5wdXQsIHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gdG9iZSBwdXQgb24gcHJvdG90eXBlP1xyXG5mdW5jdGlvbiByZXZhbGlkYXRlTWFzayhwb3MsIHZhbGlkVGVzdCwgZnJvbUlzVmFsaWQsIHZhbGlkYXRlZFBvcykge1xyXG4gIC8vIGNvbnNvbGUubG9nKFwicmV2YWxpZGF0ZU1hc2sgXCIgKyBmcm9tSXNWYWxpZCk7XHJcbiAgY29uc3QgaW5wdXRtYXNrID0gdGhpcyxcclxuICAgIG1hc2tzZXQgPSB0aGlzLm1hc2tzZXQsXHJcbiAgICBvcHRzID0gdGhpcy5vcHRzLFxyXG4gICAgJCA9IHRoaXMuZGVwZW5kZW5jeUxpYjtcclxuXHJcbiAgZnVuY3Rpb24gSXNFbmNsb3NlZFN0YXRpYyhwb3MsIHZhbGlkcywgc2VsZWN0aW9uKSB7XHJcbiAgICBjb25zdCBwb3NNYXRjaCA9IHZhbGlkc1twb3NdO1xyXG4gICAgaWYgKFxyXG4gICAgICBwb3NNYXRjaCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIHBvc01hdGNoLm1hdGNoLnN0YXRpYyA9PT0gdHJ1ZSAmJlxyXG4gICAgICBwb3NNYXRjaC5tYXRjaC5vcHRpb25hbGl0eSAhPT0gdHJ1ZSAmJlxyXG4gICAgICAodmFsaWRzWzBdID09PSB1bmRlZmluZWQgfHwgdmFsaWRzWzBdLmFsdGVybmF0aW9uID09PSB1bmRlZmluZWQpXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgcHJldk1hdGNoID1cclxuICAgICAgICAgIHNlbGVjdGlvbi5iZWdpbiA8PSBwb3MgLSAxXHJcbiAgICAgICAgICAgID8gdmFsaWRzW3BvcyAtIDFdICYmXHJcbiAgICAgICAgICAgICAgdmFsaWRzW3BvcyAtIDFdLm1hdGNoLnN0YXRpYyA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgIHZhbGlkc1twb3MgLSAxXVxyXG4gICAgICAgICAgICA6IHZhbGlkc1twb3MgLSAxXSxcclxuICAgICAgICBuZXh0TWF0Y2ggPVxyXG4gICAgICAgICAgc2VsZWN0aW9uLmVuZCA+IHBvcyArIDFcclxuICAgICAgICAgICAgPyB2YWxpZHNbcG9zICsgMV0gJiZcclxuICAgICAgICAgICAgICB2YWxpZHNbcG9zICsgMV0ubWF0Y2guc3RhdGljID09PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgdmFsaWRzW3BvcyArIDFdXHJcbiAgICAgICAgICAgIDogdmFsaWRzW3BvcyArIDFdO1xyXG4gICAgICByZXR1cm4gcHJldk1hdGNoICYmIG5leHRNYXRjaDtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGxldCBvZmZzZXQgPSAwLFxyXG4gICAgYmVnaW4gPSBwb3MuYmVnaW4gIT09IHVuZGVmaW5lZCA/IHBvcy5iZWdpbiA6IHBvcyxcclxuICAgIGVuZCA9IHBvcy5lbmQgIT09IHVuZGVmaW5lZCA/IHBvcy5lbmQgOiBwb3MsXHJcbiAgICB2YWxpZCA9IHRydWU7XHJcbiAgaWYgKHBvcy5iZWdpbiA+IHBvcy5lbmQpIHtcclxuICAgIGJlZ2luID0gcG9zLmVuZDtcclxuICAgIGVuZCA9IHBvcy5iZWdpbjtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlZFBvcyA9IHZhbGlkYXRlZFBvcyAhPT0gdW5kZWZpbmVkID8gdmFsaWRhdGVkUG9zIDogYmVnaW47XHJcbiAgaWYgKFxyXG4gICAgZnJvbUlzVmFsaWQgPT09IHVuZGVmaW5lZCAmJlxyXG4gICAgKGJlZ2luICE9PSBlbmQgfHxcclxuICAgICAgKG9wdHMuaW5zZXJ0TW9kZSAmJiBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3ZhbGlkYXRlZFBvc10gIT09IHVuZGVmaW5lZCkgfHxcclxuICAgICAgdmFsaWRUZXN0ID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgdmFsaWRUZXN0Lm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciB8fFxyXG4gICAgICB2YWxpZFRlc3QubWF0Y2gub3B0aW9uYWxpdHkpXHJcbiAgKSB7XHJcbiAgICAvLyByZXBvc2l0aW9uICYgcmV2YWxpZGF0ZSBvdGhlcnNcclxuICAgIGxldCBwb3NpdGlvbnNDbG9uZSA9ICQuZXh0ZW5kKHRydWUsIFtdLCBtYXNrc2V0LnZhbGlkUG9zaXRpb25zKSxcclxuICAgICAgbHZwID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChpbnB1dG1hc2ssIHVuZGVmaW5lZCwgdHJ1ZSksXHJcbiAgICAgIGk7XHJcbiAgICBtYXNrc2V0LnAgPSBiZWdpbjsgLy8gbmVlZGVkIGZvciBhbHRlcm5hdGVkIHBvc2l0aW9uIGFmdGVyIG92ZXJ0eXBlIHNlbGVjdGlvblxyXG5cclxuICAgIGNvbnN0IGNsZWFycG9zID0gaXNTZWxlY3Rpb24uY2FsbChpbnB1dG1hc2ssIHBvcykgPyBiZWdpbiA6IHZhbGlkYXRlZFBvcztcclxuICAgIGZvciAoaSA9IGx2cDsgaSA+PSBjbGVhcnBvczsgaS0tKSB7XHJcbiAgICAgIG1hc2tzZXQudmFsaWRQb3NpdGlvbnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICBpZiAodmFsaWRUZXN0ID09PSB1bmRlZmluZWQpIGRlbGV0ZSBtYXNrc2V0LnRlc3RzW2kgKyAxXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaiA9IHZhbGlkYXRlZFBvcyxcclxuICAgICAgcG9zTWF0Y2ggPSBqLFxyXG4gICAgICB0LFxyXG4gICAgICBjYW5NYXRjaCxcclxuICAgICAgdGVzdDtcclxuXHJcbiAgICBpZiAodmFsaWRUZXN0KSB7XHJcbiAgICAgIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbdmFsaWRhdGVkUG9zXSA9ICQuZXh0ZW5kKHRydWUsIHt9LCB2YWxpZFRlc3QpO1xyXG4gICAgICBwb3NNYXRjaCsrO1xyXG4gICAgICBqKys7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBvc2l0aW9uc0Nsb25lW2VuZF0gPT0gdW5kZWZpbmVkICYmIG1hc2tzZXQuaml0T2Zmc2V0W2VuZF0pIHtcclxuICAgICAgZW5kICs9IG1hc2tzZXQuaml0T2Zmc2V0W2VuZF0gKyAxO1xyXG4gICAgfVxyXG4gICAgZm9yIChpID0gdmFsaWRUZXN0ID8gZW5kIDogZW5kIC0gMTsgaSA8PSBsdnA7IGkrKykge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgKHQgPSBwb3NpdGlvbnNDbG9uZVtpXSkgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIHQuZ2VuZXJhdGVkSW5wdXQgIT09IHRydWUgJiZcclxuICAgICAgICAoaSA+PSBlbmQgfHxcclxuICAgICAgICAgIChpID49IGJlZ2luICYmXHJcbiAgICAgICAgICAgIElzRW5jbG9zZWRTdGF0aWMoaSwgcG9zaXRpb25zQ2xvbmUsIHtcclxuICAgICAgICAgICAgICBiZWdpbixcclxuICAgICAgICAgICAgICBlbmRcclxuICAgICAgICAgICAgfSkpKVxyXG4gICAgICApIHtcclxuICAgICAgICB3aGlsZSAoXHJcbiAgICAgICAgICAoKHRlc3QgPSBnZXRUZXN0LmNhbGwoaW5wdXRtYXNrLCBwb3NNYXRjaCkpLCB0ZXN0Lm1hdGNoLmRlZiAhPT0gXCJcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgIC8vIGxvb3AgbmVlZGVkIHRvIG1hdGNoIGZ1cnRoZXIgcG9zaXRpb25zXHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIChjYW5NYXRjaCA9IHBvc2l0aW9uQ2FuTWF0Y2hEZWZpbml0aW9uLmNhbGwoXHJcbiAgICAgICAgICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICAgICAgICAgIHBvc01hdGNoLFxyXG4gICAgICAgICAgICAgIHQsXHJcbiAgICAgICAgICAgICAgb3B0c1xyXG4gICAgICAgICAgICApKSAhPT0gZmFsc2UgfHxcclxuICAgICAgICAgICAgdC5tYXRjaC5kZWYgPT09IFwiK1wiXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gdmFsaWRhdGVkIG1hdGNoIC8vd2Ugc3RpbGwgbmVlZCBzb21lIGhhY2tlcnkgZm9yIHRoZSArIHZhbGlkYXRvciAobnVtZXJpYyBhbGlhcylcclxuICAgICAgICAgICAgaWYgKHQubWF0Y2guZGVmID09PSBcIitcIikgZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrLCB0cnVlKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gaXNWYWxpZC5jYWxsKFxyXG4gICAgICAgICAgICAgIGlucHV0bWFzayxcclxuICAgICAgICAgICAgICBwb3NNYXRjaCxcclxuICAgICAgICAgICAgICB0LmlucHV0LFxyXG4gICAgICAgICAgICAgIHQubWF0Y2guZGVmICE9PSBcIitcIixcclxuICAgICAgICAgICAgICAvKiB0Lm1hdGNoLmRlZiAhPT0gXCIrXCIgKi8gdHJ1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YWxpZCA9IHJlc3VsdCAhPT0gZmFsc2U7XHJcbiAgICAgICAgICAgIGogPSAocmVzdWx0LnBvcyB8fCBwb3NNYXRjaCkgKyAxO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkICYmIGNhbk1hdGNoKSBicmVhaztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgaWYgKHZhbGlkVGVzdCA9PT0gdW5kZWZpbmVkICYmIHQubWF0Y2guc3RhdGljICYmIGkgPT09IHBvcy5iZWdpbilcclxuICAgICAgICAgICAgICBvZmZzZXQrKztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICghdmFsaWQgJiYgZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKSwgcG9zTWF0Y2ggPiBtYXNrc2V0Lm1hc2tMZW5ndGgpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwb3NNYXRjaCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2V0VGVzdC5jYWxsKGlucHV0bWFzaywgcG9zTWF0Y2gpLm1hdGNoLmRlZiA9PSBcIlwiKSB7XHJcbiAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXN0b3JlIHBvc2l0aW9uXHJcbiAgICAgICAgcG9zTWF0Y2ggPSBqO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdmFsaWQpIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKCF2YWxpZCkge1xyXG4gICAgICBtYXNrc2V0LnZhbGlkUG9zaXRpb25zID0gJC5leHRlbmQodHJ1ZSwgW10sIHBvc2l0aW9uc0Nsb25lKTtcclxuICAgICAgcmVzZXRNYXNrU2V0LmNhbGwoaW5wdXRtYXNrLCB0cnVlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICB2YWxpZFRlc3QgJiZcclxuICAgIGdldFRlc3QuY2FsbChpbnB1dG1hc2ssIHZhbGlkYXRlZFBvcykubWF0Y2guY2QgPT09IHZhbGlkVGVzdC5tYXRjaC5jZFxyXG4gICkge1xyXG4gICAgbWFza3NldC52YWxpZFBvc2l0aW9uc1t2YWxpZGF0ZWRQb3NdID0gJC5leHRlbmQodHJ1ZSwge30sIHZhbGlkVGVzdCk7XHJcbiAgfVxyXG5cclxuICByZXNldE1hc2tTZXQuY2FsbChpbnB1dG1hc2ssIHRydWUpO1xyXG4gIHJldHVybiBvZmZzZXQ7XHJcbn1cclxuIiwgImltcG9ydCB3aW5kb3cgZnJvbSBcIi4vZ2xvYmFsL3dpbmRvd1wiO1xyXG5pbXBvcnQgeyBjaGVja0FsdGVybmF0aW9uTWF0Y2ggfSBmcm9tIFwiLi92YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgZGV0ZXJtaW5lVGVzdFRlbXBsYXRlLFxyXG4gIGdldE1hc2tUZW1wbGF0ZSxcclxuICBnZXRQbGFjZWhvbGRlcixcclxuICBnZXRUZXN0LFxyXG4gIGdldFRlc3RzLFxyXG4gIGdldFRlc3RUZW1wbGF0ZVxyXG59IGZyb20gXCIuL3ZhbGlkYXRpb24tdGVzdHNcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgY2FyZXQsXHJcbiAgZGV0ZXJtaW5lTGFzdFJlcXVpcmVkUG9zaXRpb24sXHJcbiAgZGV0ZXJtaW5lTmV3Q2FyZXRQb3NpdGlvbixcclxuICBnZXRCdWZmZXIsXHJcbiAgZ2V0QnVmZmVyVGVtcGxhdGUsXHJcbiAgZ2V0TGFzdFZhbGlkUG9zaXRpb24sXHJcbiAgaXNNYXNrLFxyXG4gIHJlc2V0TWFza1NldCxcclxuICBzZWVrTmV4dCxcclxuICBzZWVrUHJldmlvdXMsXHJcbiAgdHJhbnNsYXRlUG9zaXRpb25cclxufTtcclxuXHJcbi8vIHRvYmUgcHV0IG9uIHByb3RvdHlwZT9cclxuZnVuY3Rpb24gY2FyZXQoaW5wdXQsIGJlZ2luLCBlbmQsIG5vdHJhbnNsYXRlLCBpc0RlbGV0ZSkge1xyXG4gIGNvbnN0IGlucHV0bWFzayA9IHRoaXMsXHJcbiAgICBvcHRzID0gdGhpcy5vcHRzO1xyXG5cclxuICBsZXQgcmFuZ2U7XHJcbiAgaWYgKGJlZ2luICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGJlZ2luKSkge1xyXG4gICAgICBlbmQgPSBpbnB1dG1hc2suaXNSVEwgPyBiZWdpblswXSA6IGJlZ2luWzFdO1xyXG4gICAgICBiZWdpbiA9IGlucHV0bWFzay5pc1JUTCA/IGJlZ2luWzFdIDogYmVnaW5bMF07XHJcbiAgICB9XHJcbiAgICBpZiAoYmVnaW4uYmVnaW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBlbmQgPSBpbnB1dG1hc2suaXNSVEwgPyBiZWdpbi5iZWdpbiA6IGJlZ2luLmVuZDtcclxuICAgICAgYmVnaW4gPSBpbnB1dG1hc2suaXNSVEwgPyBiZWdpbi5lbmQgOiBiZWdpbi5iZWdpbjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgYmVnaW4gPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgYmVnaW4gPSBub3RyYW5zbGF0ZSA/IGJlZ2luIDogdHJhbnNsYXRlUG9zaXRpb24uY2FsbChpbnB1dG1hc2ssIGJlZ2luKTtcclxuICAgICAgZW5kID0gbm90cmFuc2xhdGUgPyBlbmQgOiB0cmFuc2xhdGVQb3NpdGlvbi5jYWxsKGlucHV0bWFzaywgZW5kKTtcclxuICAgICAgZW5kID0gdHlwZW9mIGVuZCA9PT0gXCJudW1iZXJcIiA/IGVuZCA6IGJlZ2luO1xyXG4gICAgICAvLyBpZiAoISQoaW5wdXQpLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgLy8gXHRyZXR1cm47XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIGNvbnN0IHNjcm9sbENhbGMgPVxyXG4gICAgICAgIHBhcnNlSW50KFxyXG4gICAgICAgICAgKChpbnB1dC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdykuZ2V0Q29tcHV0ZWRTdHlsZVxyXG4gICAgICAgICAgICA/IChpbnB1dC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdykuZ2V0Q29tcHV0ZWRTdHlsZShcclxuICAgICAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgOiBpbnB1dC5jdXJyZW50U3R5bGVcclxuICAgICAgICAgICkuZm9udFNpemVcclxuICAgICAgICApICogZW5kO1xyXG4gICAgICBpbnB1dC5zY3JvbGxMZWZ0ID0gc2Nyb2xsQ2FsYyA+IGlucHV0LnNjcm9sbFdpZHRoID8gc2Nyb2xsQ2FsYyA6IDA7XHJcbiAgICAgIGlucHV0LmlucHV0bWFzay5jYXJldFBvcyA9IHsgYmVnaW4sIGVuZCB9OyAvLyB0cmFjayBjYXJldCBpbnRlcm5hbGx5XHJcbiAgICAgIGlmIChvcHRzLmluc2VydE1vZGVWaXN1YWwgJiYgb3B0cy5pbnNlcnRNb2RlID09PSBmYWxzZSAmJiBiZWdpbiA9PT0gZW5kKSB7XHJcbiAgICAgICAgaWYgKCFpc0RlbGV0ZSkge1xyXG4gICAgICAgICAgZW5kKys7IC8vIHNldCB2aXN1YWxpemF0aW9uIGZvciBpbnNlcnQvb3ZlcndyaXRlIG1vZGVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgIGlucHV0ID09PVxyXG4gICAgICAgIChpbnB1dC5pbnB1dG1hc2suc2hhZG93Um9vdCB8fCBpbnB1dC5vd25lckRvY3VtZW50KS5hY3RpdmVFbGVtZW50XHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChcInNldFNlbGVjdGlvblJhbmdlXCIgaW4gaW5wdXQpIHtcclxuICAgICAgICAgIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKGJlZ2luLCBlbmQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xyXG4gICAgICAgICAgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgICAgICAgaWYgKGlucHV0LmZpcnN0Q2hpbGQgPT09IHVuZGVmaW5lZCB8fCBpbnB1dC5maXJzdENoaWxkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7XHJcbiAgICAgICAgICAgIGlucHV0LmFwcGVuZENoaWxkKHRleHROb2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KFxyXG4gICAgICAgICAgICBpbnB1dC5maXJzdENoaWxkLFxyXG4gICAgICAgICAgICBiZWdpbiA8IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKS5sZW5ndGhcclxuICAgICAgICAgICAgICA/IGJlZ2luXHJcbiAgICAgICAgICAgICAgOiBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcmFuZ2Uuc2V0RW5kKFxyXG4gICAgICAgICAgICBpbnB1dC5maXJzdENoaWxkLFxyXG4gICAgICAgICAgICBlbmQgPCBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgPyBlbmRcclxuICAgICAgICAgICAgICA6IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKS5sZW5ndGhcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcclxuICAgICAgICAgIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgIHNlbC5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgICAvLyBpbnB1dC5mb2N1cygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXQuY3JlYXRlVGV4dFJhbmdlKSB7XHJcbiAgICAgICAgICByYW5nZSA9IGlucHV0LmNyZWF0ZVRleHRSYW5nZSgpO1xyXG4gICAgICAgICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XHJcbiAgICAgICAgICByYW5nZS5tb3ZlRW5kKFwiY2hhcmFjdGVyXCIsIGVuZCk7XHJcbiAgICAgICAgICByYW5nZS5tb3ZlU3RhcnQoXCJjaGFyYWN0ZXJcIiwgYmVnaW4pO1xyXG4gICAgICAgICAgcmFuZ2Uuc2VsZWN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dC5pbnB1dG1hc2suY2FyZXRIb29rID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgIGlucHV0LmlucHV0bWFzay5jYXJldEhvb2suY2FsbChpbnB1dG1hc2ssIHsgYmVnaW4sIGVuZCB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoXCJzZWxlY3Rpb25TdGFydFwiIGluIGlucHV0ICYmIFwic2VsZWN0aW9uRW5kXCIgaW4gaW5wdXQpIHtcclxuICAgICAgYmVnaW4gPSBpbnB1dC5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgZW5kID0gaW5wdXQuc2VsZWN0aW9uRW5kO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgIHJhbmdlID0gd2luZG93LmdldFNlbGVjdGlvbigpLmdldFJhbmdlQXQoMCk7XHJcbiAgICAgIGlmIChcclxuICAgICAgICByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lci5wYXJlbnROb2RlID09PSBpbnB1dCB8fFxyXG4gICAgICAgIHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyID09PSBpbnB1dFxyXG4gICAgICApIHtcclxuICAgICAgICBiZWdpbiA9IHJhbmdlLnN0YXJ0T2Zmc2V0O1xyXG4gICAgICAgIGVuZCA9IHJhbmdlLmVuZE9mZnNldDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKSB7XHJcbiAgICAgIHJhbmdlID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgIGJlZ2luID1cclxuICAgICAgICAwIC1cclxuICAgICAgICByYW5nZVxyXG4gICAgICAgICAgLmR1cGxpY2F0ZSgpXHJcbiAgICAgICAgICAubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsIC1pbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoKTtcclxuICAgICAgZW5kID0gYmVnaW4gKyByYW5nZS50ZXh0Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiAob3B0cy5pbnNlcnRNb2RlVmlzdWFsICYmIG9wdHMuaW5zZXJ0TW9kZSA9PT0gZmFsc2UgJiYgYmVnaW4gPT09IChlbmQgLSAxKSkgZW5kLS07IC8vY29ycmVjdCBjYXJldCBmb3IgaW5zZXJ0L292ZXJ3cml0ZSBtb2RlXHJcblxyXG4gICAgLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJlZ2luOiBub3RyYW5zbGF0ZSA/IGJlZ2luIDogdHJhbnNsYXRlUG9zaXRpb24uY2FsbChpbnB1dG1hc2ssIGJlZ2luKSxcclxuICAgICAgZW5kOiBub3RyYW5zbGF0ZSA/IGVuZCA6IHRyYW5zbGF0ZVBvc2l0aW9uLmNhbGwoaW5wdXRtYXNrLCBlbmQpXHJcbiAgICB9O1xyXG4gICAgLyogZXNsaW50LWVuYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xyXG4gIH1cclxufVxyXG5cclxuLy8gdG9iZSBwdXQgb24gcHJvdG90eXBlP1xyXG5mdW5jdGlvbiBkZXRlcm1pbmVMYXN0UmVxdWlyZWRQb3NpdGlvbihyZXR1cm5EZWZpbml0aW9uKSB7XHJcbiAgY29uc3QgaW5wdXRtYXNrID0gdGhpcyxcclxuICAgIHsgbWFza3NldCwgZGVwZW5kZW5jeUxpYjogJCB9ID0gaW5wdXRtYXNrLFxyXG4gICAgbHZwID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChpbnB1dG1hc2spLFxyXG4gICAgcG9zaXRpb25zID0ge30sXHJcbiAgICBsdlRlc3QgPSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW2x2cF0sXHJcbiAgICBidWZmZXIgPSBnZXRNYXNrVGVtcGxhdGUuY2FsbChcclxuICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICB0cnVlLFxyXG4gICAgICBnZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGlucHV0bWFzayksXHJcbiAgICAgIHRydWUsXHJcbiAgICAgIHRydWVcclxuICAgICk7XHJcbiAgbGV0IGJsID0gYnVmZmVyLmxlbmd0aCxcclxuICAgIHBvcyxcclxuICAgIG5keEludGx6ciA9IGx2VGVzdCAhPT0gdW5kZWZpbmVkID8gbHZUZXN0LmxvY2F0b3Iuc2xpY2UoKSA6IHVuZGVmaW5lZCxcclxuICAgIHRlc3RQb3M7XHJcbiAgZm9yIChwb3MgPSBsdnAgKyAxOyBwb3MgPCBidWZmZXIubGVuZ3RoOyBwb3MrKykge1xyXG4gICAgdGVzdFBvcyA9IGdldFRlc3RUZW1wbGF0ZS5jYWxsKGlucHV0bWFzaywgcG9zLCBuZHhJbnRsenIsIHBvcyAtIDEpO1xyXG4gICAgbmR4SW50bHpyID0gdGVzdFBvcy5sb2NhdG9yLnNsaWNlKCk7XHJcbiAgICBwb3NpdGlvbnNbcG9zXSA9ICQuZXh0ZW5kKHRydWUsIHt9LCB0ZXN0UG9zKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGx2VGVzdEFsdCA9XHJcbiAgICBsdlRlc3QgJiYgbHZUZXN0LmFsdGVybmF0aW9uICE9PSB1bmRlZmluZWRcclxuICAgICAgPyBsdlRlc3QubG9jYXRvcltsdlRlc3QuYWx0ZXJuYXRpb25dXHJcbiAgICAgIDogdW5kZWZpbmVkO1xyXG4gIGZvciAocG9zID0gYmwgLSAxOyBwb3MgPiBsdnA7IHBvcy0tKSB7XHJcbiAgICB0ZXN0UG9zID0gcG9zaXRpb25zW3Bvc107XHJcbiAgICBpZiAoXHJcbiAgICAgICh0ZXN0UG9zLm1hdGNoLm9wdGlvbmFsaXR5IHx8XHJcbiAgICAgICAgKHRlc3RQb3MubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyICYmIHRlc3RQb3MubWF0Y2gubmV3QmxvY2tNYXJrZXIpIHx8XHJcbiAgICAgICAgKGx2VGVzdEFsdCAmJlxyXG4gICAgICAgICAgKChsdlRlc3RBbHQgIT09IHBvc2l0aW9uc1twb3NdLmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXSAmJlxyXG4gICAgICAgICAgICB0ZXN0UG9zLm1hdGNoLnN0YXRpYyAhPT0gdHJ1ZSkgfHxcclxuICAgICAgICAgICAgKHRlc3RQb3MubWF0Y2guc3RhdGljID09PSB0cnVlICYmXHJcbiAgICAgICAgICAgICAgdGVzdFBvcy5sb2NhdG9yW2x2VGVzdC5hbHRlcm5hdGlvbl0gJiZcclxuICAgICAgICAgICAgICBjaGVja0FsdGVybmF0aW9uTWF0Y2guY2FsbChcclxuICAgICAgICAgICAgICAgIGlucHV0bWFzayxcclxuICAgICAgICAgICAgICAgIHRlc3RQb3MubG9jYXRvcltsdlRlc3QuYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLFxyXG4gICAgICAgICAgICAgICAgbHZUZXN0QWx0LnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpXHJcbiAgICAgICAgICAgICAgKSAmJlxyXG4gICAgICAgICAgICAgIGdldFRlc3RzLmNhbGwoaW5wdXRtYXNrLCBwb3MpWzBdLmRlZiAhPT0gXCJcIikpKSkgJiZcclxuICAgICAgYnVmZmVyW3Bvc10gPT09IGdldFBsYWNlaG9sZGVyLmNhbGwoaW5wdXRtYXNrLCBwb3MsIHRlc3RQb3MubWF0Y2gpXHJcbiAgICApIHtcclxuICAgICAgYmwtLTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmV0dXJuRGVmaW5pdGlvblxyXG4gICAgPyB7XHJcbiAgICAgICAgbDogYmwsXHJcbiAgICAgICAgZGVmOiBwb3NpdGlvbnNbYmxdID8gcG9zaXRpb25zW2JsXS5tYXRjaCA6IHVuZGVmaW5lZFxyXG4gICAgICB9XHJcbiAgICA6IGJsO1xyXG59XHJcblxyXG4vLyB0b2JlIHB1dCBvbiBwcm90b3R5cGU/XHJcbmZ1bmN0aW9uIGRldGVybWluZU5ld0NhcmV0UG9zaXRpb24oXHJcbiAgc2VsZWN0ZWRDYXJldCxcclxuICB0YWJiZWQsXHJcbiAgcG9zaXRpb25DYXJldE9uQ2xpY2tcclxuKSB7XHJcbiAgY29uc3QgaW5wdXRtYXNrID0gdGhpcyxcclxuICAgIHsgbWFza3NldCwgb3B0cyB9ID0gaW5wdXRtYXNrO1xyXG4gIGxldCBjbGlja1Bvc2l0aW9uLCBsdmNsaWNrUG9zaXRpb24sIGxhc3RQb3NpdGlvbjtcclxuXHJcbiAgZnVuY3Rpb24gZG9SYWRpeEZvY3VzKGNsaWNrUG9zKSB7XHJcbiAgICBpZiAob3B0cy5yYWRpeFBvaW50ICE9PSBcIlwiICYmIG9wdHMuZGlnaXRzICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IHZwcyA9IG1hc2tzZXQudmFsaWRQb3NpdGlvbnM7XHJcbiAgICAgIGlmICh2cHNbY2xpY2tQb3NdID09PSB1bmRlZmluZWQgfHwgdnBzW2NsaWNrUG9zXS5pbnB1dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKGNsaWNrUG9zIDwgc2Vla05leHQuY2FsbChpbnB1dG1hc2ssIC0xKSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgY29uc3QgcmFkaXhQb3MgPSBnZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spLmluZGV4T2Yob3B0cy5yYWRpeFBvaW50KTtcclxuICAgICAgICBpZiAocmFkaXhQb3MgIT09IC0xKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCB2cCA9IDAsIHZwbCA9IHZwcy5sZW5ndGg7IHZwIDwgdnBsOyB2cCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICB2cHNbdnBdICYmXHJcbiAgICAgICAgICAgICAgcmFkaXhQb3MgPCB2cCAmJlxyXG4gICAgICAgICAgICAgIHZwc1t2cF0uaW5wdXQgIT09IGdldFBsYWNlaG9sZGVyLmNhbGwoaW5wdXRtYXNrLCB2cClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmICh0YWJiZWQpIHtcclxuICAgIGlmIChpbnB1dG1hc2suaXNSVEwpIHtcclxuICAgICAgc2VsZWN0ZWRDYXJldC5lbmQgPSBzZWxlY3RlZENhcmV0LmJlZ2luO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2VsZWN0ZWRDYXJldC5iZWdpbiA9IHNlbGVjdGVkQ2FyZXQuZW5kO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoc2VsZWN0ZWRDYXJldC5iZWdpbiA9PT0gc2VsZWN0ZWRDYXJldC5lbmQpIHtcclxuICAgIHBvc2l0aW9uQ2FyZXRPbkNsaWNrID0gcG9zaXRpb25DYXJldE9uQ2xpY2sgfHwgb3B0cy5wb3NpdGlvbkNhcmV0T25DbGljaztcclxuICAgIHN3aXRjaCAocG9zaXRpb25DYXJldE9uQ2xpY2spIHtcclxuICAgICAgY2FzZSBcIm5vbmVcIjpcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInNlbGVjdFwiOlxyXG4gICAgICAgIHNlbGVjdGVkQ2FyZXQgPSB7IGJlZ2luOiAwLCBlbmQ6IGdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykubGVuZ3RoIH07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJpZ25vcmVcIjpcclxuICAgICAgICBzZWxlY3RlZENhcmV0LmVuZCA9IHNlbGVjdGVkQ2FyZXQuYmVnaW4gPSBzZWVrTmV4dC5jYWxsKFxyXG4gICAgICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICAgICAgZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChpbnB1dG1hc2spXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInJhZGl4Rm9jdXNcIjpcclxuICAgICAgICBpZiAoaW5wdXRtYXNrLmNsaWNrZWQgPiAxICYmIG1hc2tzZXQudmFsaWRQb3NpdGlvbnMubGVuZ3RoID09PSAwKSBicmVhaztcclxuICAgICAgICBpZiAoZG9SYWRpeEZvY3VzKHNlbGVjdGVkQ2FyZXQuYmVnaW4pKSB7XHJcbiAgICAgICAgICBjb25zdCByYWRpeFBvcyA9IGdldEJ1ZmZlclxyXG4gICAgICAgICAgICAuY2FsbChpbnB1dG1hc2spXHJcbiAgICAgICAgICAgIC5qb2luKFwiXCIpXHJcbiAgICAgICAgICAgIC5pbmRleE9mKG9wdHMucmFkaXhQb2ludCk7XHJcbiAgICAgICAgICBzZWxlY3RlZENhcmV0LmVuZCA9IHNlbGVjdGVkQ2FyZXQuYmVnaW4gPSBvcHRzLm51bWVyaWNJbnB1dFxyXG4gICAgICAgICAgICA/IHNlZWtOZXh0LmNhbGwoaW5wdXRtYXNrLCByYWRpeFBvcylcclxuICAgICAgICAgICAgOiByYWRpeFBvcztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gLy8gZmFsbGJhY2sgdG8gbHZwXHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1mYWxsdGhyb3VnaFxyXG4gICAgICBkZWZhdWx0OiAvLyBsdnA6XHJcbiAgICAgICAgY2xpY2tQb3NpdGlvbiA9IHNlbGVjdGVkQ2FyZXQuYmVnaW47XHJcbiAgICAgICAgbHZjbGlja1Bvc2l0aW9uID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChcclxuICAgICAgICAgIGlucHV0bWFzayxcclxuICAgICAgICAgIGNsaWNrUG9zaXRpb24sXHJcbiAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsYXN0UG9zaXRpb24gPSBzZWVrTmV4dC5jYWxsKFxyXG4gICAgICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICAgICAgbHZjbGlja1Bvc2l0aW9uID09PSAtMSAmJiAhaXNNYXNrLmNhbGwoaW5wdXRtYXNrLCAwKVxyXG4gICAgICAgICAgICA/IC0xXHJcbiAgICAgICAgICAgIDogbHZjbGlja1Bvc2l0aW9uXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGNsaWNrUG9zaXRpb24gPD0gbGFzdFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICBzZWxlY3RlZENhcmV0LmVuZCA9IHNlbGVjdGVkQ2FyZXQuYmVnaW4gPSAhaXNNYXNrLmNhbGwoXHJcbiAgICAgICAgICAgIGlucHV0bWFzayxcclxuICAgICAgICAgICAgY2xpY2tQb3NpdGlvbixcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgIClcclxuICAgICAgICAgICAgPyBzZWVrTmV4dC5jYWxsKGlucHV0bWFzaywgY2xpY2tQb3NpdGlvbilcclxuICAgICAgICAgICAgOiBjbGlja1Bvc2l0aW9uO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBsdnAgPSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW2x2Y2xpY2tQb3NpdGlvbl0sXHJcbiAgICAgICAgICAgIHR0ID0gZ2V0VGVzdFRlbXBsYXRlLmNhbGwoXHJcbiAgICAgICAgICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICAgICAgICAgIGxhc3RQb3NpdGlvbixcclxuICAgICAgICAgICAgICBsdnAgPyBsdnAubWF0Y2gubG9jYXRvciA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICBsdnBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBnZXRQbGFjZWhvbGRlci5jYWxsKFxyXG4gICAgICAgICAgICAgIGlucHV0bWFzayxcclxuICAgICAgICAgICAgICBsYXN0UG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgdHQubWF0Y2hcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgKHBsYWNlaG9sZGVyICE9PSBcIlwiICYmXHJcbiAgICAgICAgICAgICAgZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKVtsYXN0UG9zaXRpb25dICE9PSBwbGFjZWhvbGRlciAmJlxyXG4gICAgICAgICAgICAgIHR0Lm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciAhPT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgIHR0Lm1hdGNoLm5ld0Jsb2NrTWFya2VyICE9PSB0cnVlKSB8fFxyXG4gICAgICAgICAgICAoIWlzTWFzay5jYWxsKGlucHV0bWFzaywgbGFzdFBvc2l0aW9uLCBvcHRzLmtlZXBTdGF0aWMsIHRydWUpICYmXHJcbiAgICAgICAgICAgICAgdHQubWF0Y2guZGVmID09PSBwbGFjZWhvbGRlcilcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQb3MgPSBzZWVrTmV4dC5jYWxsKGlucHV0bWFzaywgbGFzdFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgaWYgKGNsaWNrUG9zaXRpb24gPj0gbmV3UG9zIHx8IGNsaWNrUG9zaXRpb24gPT09IGxhc3RQb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgIGxhc3RQb3NpdGlvbiA9IG5ld1BvcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2VsZWN0ZWRDYXJldC5lbmQgPSBzZWxlY3RlZENhcmV0LmJlZ2luID0gbGFzdFBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2VsZWN0ZWRDYXJldDtcclxuICB9XHJcbn1cclxuXHJcbi8vIHRvYmUgcHV0IG9uIHByb3RvdHlwZT9cclxuZnVuY3Rpb24gZ2V0QnVmZmVyKG5vQ2FjaGUpIHtcclxuICBjb25zdCBpbnB1dG1hc2sgPSB0aGlzLFxyXG4gICAgeyBtYXNrc2V0IH0gPSBpbnB1dG1hc2s7XHJcblxyXG4gIGlmIChtYXNrc2V0LmJ1ZmZlciA9PT0gdW5kZWZpbmVkIHx8IG5vQ2FjaGUgPT09IHRydWUpIHtcclxuICAgIG1hc2tzZXQuYnVmZmVyID0gZ2V0TWFza1RlbXBsYXRlLmNhbGwoXHJcbiAgICAgIGlucHV0bWFzayxcclxuICAgICAgdHJ1ZSxcclxuICAgICAgZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChpbnB1dG1hc2spLFxyXG4gICAgICB0cnVlXHJcbiAgICApO1xyXG4gICAgaWYgKG1hc2tzZXQuX2J1ZmZlciA9PT0gdW5kZWZpbmVkKSBtYXNrc2V0Ll9idWZmZXIgPSBtYXNrc2V0LmJ1ZmZlci5zbGljZSgpO1xyXG4gIH1cclxuICByZXR1cm4gbWFza3NldC5idWZmZXI7XHJcbn1cclxuXHJcbi8vIHRvYmUgcHV0IG9uIHByb3RvdHlwZT9cclxuZnVuY3Rpb24gZ2V0QnVmZmVyVGVtcGxhdGUoKSB7XHJcbiAgY29uc3QgaW5wdXRtYXNrID0gdGhpcyxcclxuICAgIG1hc2tzZXQgPSB0aGlzLm1hc2tzZXQ7XHJcblxyXG4gIGlmIChtYXNrc2V0Ll9idWZmZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gZ2VuZXJhdGUgdGVtcGxhdGVcclxuICAgIG1hc2tzZXQuX2J1ZmZlciA9IGdldE1hc2tUZW1wbGF0ZS5jYWxsKGlucHV0bWFzaywgZmFsc2UsIDEpO1xyXG4gICAgaWYgKG1hc2tzZXQuYnVmZmVyID09PSB1bmRlZmluZWQpIG1hc2tzZXQuYnVmZmVyID0gbWFza3NldC5fYnVmZmVyLnNsaWNlKCk7XHJcbiAgfVxyXG4gIHJldHVybiBtYXNrc2V0Ll9idWZmZXI7XHJcbn1cclxuXHJcbi8vIHRvYmUgcHV0IG9uIHByb3RvdHlwZT9cclxuZnVuY3Rpb24gZ2V0TGFzdFZhbGlkUG9zaXRpb24oY2xvc2VzdFRvLCBzdHJpY3QsIHZhbGlkUG9zaXRpb25zKSB7XHJcbiAgY29uc3QgbWFza3NldCA9IHRoaXMubWFza3NldDtcclxuXHJcbiAgbGV0IGJlZm9yZSA9IC0xLFxyXG4gICAgYWZ0ZXIgPSAtMTtcclxuICBjb25zdCB2YWxpZHMgPSB2YWxpZFBvc2l0aW9ucyB8fCBtYXNrc2V0LnZhbGlkUG9zaXRpb25zOyAvLyBmb3IgdXNlIGluIHZhbGhvb2sgfiBjb250ZXh0IHN3aXRjaFxyXG4gIGlmIChjbG9zZXN0VG8gPT09IHVuZGVmaW5lZCkgY2xvc2VzdFRvID0gLTE7XHJcbiAgZm9yIChsZXQgcHNOZHggPSAwLCB2cGwgPSB2YWxpZHMubGVuZ3RoOyBwc05keCA8IHZwbDsgcHNOZHgrKykge1xyXG4gICAgaWYgKHZhbGlkc1twc05keF0gJiYgKHN0cmljdCB8fCB2YWxpZHNbcHNOZHhdLmdlbmVyYXRlZElucHV0ICE9PSB0cnVlKSkge1xyXG4gICAgICBpZiAocHNOZHggPD0gY2xvc2VzdFRvKSBiZWZvcmUgPSBwc05keDtcclxuICAgICAgaWYgKHBzTmR4ID49IGNsb3Nlc3RUbykgYWZ0ZXIgPSBwc05keDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGJlZm9yZSA9PT0gLTEgfHwgYmVmb3JlID09PSBjbG9zZXN0VG9cclxuICAgID8gYWZ0ZXJcclxuICAgIDogYWZ0ZXIgPT09IC0xXHJcbiAgICA/IGJlZm9yZVxyXG4gICAgOiBjbG9zZXN0VG8gLSBiZWZvcmUgPCBhZnRlciAtIGNsb3Nlc3RUb1xyXG4gICAgPyBiZWZvcmVcclxuICAgIDogYWZ0ZXI7XHJcbn1cclxuXHJcbi8vIHRvYmUgcHV0IG9uIHByb3RvdHlwZT9cclxuZnVuY3Rpb24gaXNNYXNrKHBvcywgc3RyaWN0LCBmdXp6eSkge1xyXG4gIGNvbnN0IGlucHV0bWFzayA9IHRoaXMsXHJcbiAgICBtYXNrc2V0ID0gdGhpcy5tYXNrc2V0O1xyXG5cclxuICBsZXQgdGVzdCA9IGdldFRlc3RUZW1wbGF0ZS5jYWxsKGlucHV0bWFzaywgcG9zKS5tYXRjaDtcclxuICBpZiAodGVzdC5kZWYgPT09IFwiXCIpIHRlc3QgPSBnZXRUZXN0LmNhbGwoaW5wdXRtYXNrLCBwb3MpLm1hdGNoO1xyXG5cclxuICBpZiAodGVzdC5zdGF0aWMgIT09IHRydWUpIHtcclxuICAgIHJldHVybiB0ZXN0LmZuO1xyXG4gIH1cclxuICBpZiAoXHJcbiAgICBmdXp6eSA9PT0gdHJ1ZSAmJlxyXG4gICAgbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3NdICE9PSB1bmRlZmluZWQgJiZcclxuICAgIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zXS5nZW5lcmF0ZWRJbnB1dCAhPT0gdHJ1ZVxyXG4gICkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAoc3RyaWN0ICE9PSB0cnVlICYmIHBvcyA+IC0xKSB7XHJcbiAgICBpZiAoZnV6enkpIHtcclxuICAgICAgLy8gY2hlY2sgb24gdGhlIG51bWJlciBvZiB0ZXN0c1xyXG4gICAgICBjb25zdCB0ZXN0cyA9IGdldFRlc3RzLmNhbGwoaW5wdXRtYXNrLCBwb3MpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIHRlc3RzLmxlbmd0aCA+IDEgKyAodGVzdHNbdGVzdHMubGVuZ3RoIC0gMV0ubWF0Y2guZGVmID09PSBcIlwiID8gMSA6IDApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBlbHNlIGJhc2VkIG9uIHRoZSB0ZW1wbGF0ZVxyXG4gICAgY29uc3QgdGVzdFRlbXBsYXRlID0gZGV0ZXJtaW5lVGVzdFRlbXBsYXRlLmNhbGwoXHJcbiAgICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICAgIHBvcyxcclxuICAgICAgICBnZXRUZXN0cy5jYWxsKGlucHV0bWFzaywgcG9zKVxyXG4gICAgICApLFxyXG4gICAgICB0ZXN0UGxhY2VIb2xkZXIgPSBnZXRQbGFjZWhvbGRlci5jYWxsKGlucHV0bWFzaywgcG9zLCB0ZXN0VGVtcGxhdGUubWF0Y2gpO1xyXG4gICAgcmV0dXJuIHRlc3RUZW1wbGF0ZS5tYXRjaC5kZWYgIT09IHRlc3RQbGFjZUhvbGRlcjtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vLyB0b2JlIHB1dCBvbiBwcm90b3R5cGU/XHJcbi8vIHNvZnQgfiB1bmRlZmluZWQgcmVzZXQgdmFsaWRwb3NpdGlvbnM7IHNvZnQgPSBmYWxzZSBhbHNvIHJlc2V0IHRlc3RzOyBzb2Z0ID0gdHJ1ZSBvbmx5IHJlc2V0IHRoZSBtYXNrc2V0XHJcbmZ1bmN0aW9uIHJlc2V0TWFza1NldChzb2Z0KSB7XHJcbiAgY29uc3QgbWFza3NldCA9IHRoaXMubWFza3NldDtcclxuXHJcbiAgbWFza3NldC5idWZmZXIgPSB1bmRlZmluZWQ7XHJcbiAgaWYgKHNvZnQgIT09IHRydWUpIHtcclxuICAgIG1hc2tzZXQudmFsaWRQb3NpdGlvbnMgPSBbXTtcclxuICAgIG1hc2tzZXQucCA9IDA7XHJcbiAgfVxyXG4gIGlmIChzb2Z0ID09PSBmYWxzZSkge1xyXG4gICAgbWFza3NldC50ZXN0cyA9IHt9O1xyXG4gICAgbWFza3NldC5qaXRPZmZzZXQgPSB7fTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHRvYmUgcHV0IG9uIHByb3RvdHlwZT9cclxuZnVuY3Rpb24gc2Vla05leHQocG9zLCBuZXdCbG9jaywgZnV6enkpIHtcclxuICBjb25zdCBpbnB1dG1hc2sgPSB0aGlzO1xyXG5cclxuICBpZiAoZnV6enkgPT09IHVuZGVmaW5lZCkgZnV6enkgPSB0cnVlO1xyXG4gIGxldCBwb3NpdGlvbiA9IHBvcyArIDE7XHJcbiAgd2hpbGUgKFxyXG4gICAgZ2V0VGVzdC5jYWxsKGlucHV0bWFzaywgcG9zaXRpb24pLm1hdGNoLmRlZiAhPT0gXCJcIiAmJlxyXG4gICAgKChuZXdCbG9jayA9PT0gdHJ1ZSAmJlxyXG4gICAgICAoZ2V0VGVzdC5jYWxsKGlucHV0bWFzaywgcG9zaXRpb24pLm1hdGNoLm5ld0Jsb2NrTWFya2VyICE9PSB0cnVlIHx8XHJcbiAgICAgICAgIWlzTWFzay5jYWxsKGlucHV0bWFzaywgcG9zaXRpb24sIHVuZGVmaW5lZCwgdHJ1ZSkpKSB8fFxyXG4gICAgICAobmV3QmxvY2sgIT09IHRydWUgJiZcclxuICAgICAgICAhaXNNYXNrLmNhbGwoaW5wdXRtYXNrLCBwb3NpdGlvbiwgdW5kZWZpbmVkLCBmdXp6eSkpKVxyXG4gICkge1xyXG4gICAgcG9zaXRpb24rKztcclxuICB9XHJcbiAgcmV0dXJuIHBvc2l0aW9uO1xyXG59XHJcblxyXG4vLyB0b2JlIHB1dCBvbiBwcm90b3R5cGU/XHJcbmZ1bmN0aW9uIHNlZWtQcmV2aW91cyhwb3MsIG5ld0Jsb2NrKSB7XHJcbiAgY29uc3QgaW5wdXRtYXNrID0gdGhpcztcclxuXHJcbiAgbGV0IHBvc2l0aW9uID0gcG9zIC0gMTtcclxuICBpZiAocG9zIDw9IDApIHJldHVybiAwO1xyXG5cclxuICB3aGlsZSAoXHJcbiAgICBwb3NpdGlvbiA+IDAgJiZcclxuICAgICgobmV3QmxvY2sgPT09IHRydWUgJiZcclxuICAgICAgKGdldFRlc3QuY2FsbChpbnB1dG1hc2ssIHBvc2l0aW9uKS5tYXRjaC5uZXdCbG9ja01hcmtlciAhPT0gdHJ1ZSB8fFxyXG4gICAgICAgICFpc01hc2suY2FsbChpbnB1dG1hc2ssIHBvc2l0aW9uLCB1bmRlZmluZWQsIHRydWUpKSkgfHxcclxuICAgICAgKG5ld0Jsb2NrICE9PSB0cnVlICYmICFpc01hc2suY2FsbChpbnB1dG1hc2ssIHBvc2l0aW9uLCB1bmRlZmluZWQsIHRydWUpKSlcclxuICApIHtcclxuICAgIHBvc2l0aW9uLS07XHJcbiAgfVxyXG4gIHJldHVybiBwb3NpdGlvbjtcclxufVxyXG5cclxuLy8gdG9iZSBwdXQgb24gcHJvdG90eXBlP1xyXG5mdW5jdGlvbiB0cmFuc2xhdGVQb3NpdGlvbihwb3MpIHtcclxuICBjb25zdCBpbnB1dG1hc2sgPSB0aGlzLFxyXG4gICAgb3B0cyA9IHRoaXMub3B0cyxcclxuICAgIGVsID0gdGhpcy5lbDtcclxuXHJcbiAgaWYgKFxyXG4gICAgaW5wdXRtYXNrLmlzUlRMICYmXHJcbiAgICB0eXBlb2YgcG9zID09PSBcIm51bWJlclwiICYmXHJcbiAgICAoIW9wdHMuZ3JlZWR5IHx8IG9wdHMucGxhY2Vob2xkZXIgIT09IFwiXCIpICYmXHJcbiAgICBlbFxyXG4gICkge1xyXG4gICAgcG9zID0gaW5wdXRtYXNrLl92YWx1ZUdldCgpLmxlbmd0aCAtIHBvcztcclxuICAgIGlmIChwb3MgPCAwKSBwb3MgPSAwO1xyXG4gIH1cclxuICByZXR1cm4gcG9zO1xyXG59XHJcbiIsICJpbXBvcnQgeyBpcGhvbmUsIG1vYmlsZSB9IGZyb20gXCIuL2Vudmlyb25tZW50XCI7XHJcbmltcG9ydCB3aW5kb3cgZnJvbSBcIi4vZ2xvYmFsL3dpbmRvd1wiO1xyXG5pbXBvcnQge1xyXG4gIGFwcGx5SW5wdXRWYWx1ZSxcclxuICBjaGVja1ZhbCxcclxuICBjbGVhck9wdGlvbmFsVGFpbCxcclxuICBIYW5kbGVOYXRpdmVQbGFjZWhvbGRlcixcclxuICB3cml0ZUJ1ZmZlclxyXG59IGZyb20gXCIuL2lucHV0SGFuZGxpbmdcIjtcclxuaW1wb3J0IHsga2V5cyB9IGZyb20gXCIuL2tleWNvZGUuanNcIjtcclxuaW1wb3J0IHtcclxuICBjYXJldCxcclxuICBkZXRlcm1pbmVOZXdDYXJldFBvc2l0aW9uLFxyXG4gIGdldEJ1ZmZlcixcclxuICBnZXRCdWZmZXJUZW1wbGF0ZSxcclxuICBnZXRMYXN0VmFsaWRQb3NpdGlvbixcclxuICBpc01hc2ssXHJcbiAgcmVzZXRNYXNrU2V0LFxyXG4gIHNlZWtOZXh0LFxyXG4gIHNlZWtQcmV2aW91cyxcclxuICB0cmFuc2xhdGVQb3NpdGlvblxyXG59IGZyb20gXCIuL3Bvc2l0aW9uaW5nXCI7XHJcbmltcG9ydCB7IGhhbmRsZVJlbW92ZSwgaXNDb21wbGV0ZSwgaXNTZWxlY3Rpb24sIGlzVmFsaWQgfSBmcm9tIFwiLi92YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IGdldFBsYWNlaG9sZGVyLCBnZXRUZXN0IH0gZnJvbSBcIi4vdmFsaWRhdGlvbi10ZXN0c1wiO1xyXG5cclxuZXhwb3J0IHsgRXZlbnRIYW5kbGVycyB9O1xyXG5cclxudmFyIEV2ZW50SGFuZGxlcnMgPSB7XHJcbiAga2V5RXZlbnQ6IGZ1bmN0aW9uIChlLCBjaGVja3ZhbCwgd3JpdGVPdXQsIHN0cmljdCwgbmR4KSB7XHJcbiAgICBjb25zdCBpbnB1dG1hc2sgPSB0aGlzLmlucHV0bWFzayxcclxuICAgICAgb3B0cyA9IGlucHV0bWFzay5vcHRzLFxyXG4gICAgICAkID0gaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWIsXHJcbiAgICAgIG1hc2tzZXQgPSBpbnB1dG1hc2subWFza3NldCxcclxuICAgICAgaW5wdXQgPSB0aGlzLFxyXG4gICAgICAkaW5wdXQgPSAkKGlucHV0KSxcclxuICAgICAgYyA9IGUua2V5LFxyXG4gICAgICBwb3MgPSBjYXJldC5jYWxsKGlucHV0bWFzaywgaW5wdXQpLFxyXG4gICAgICBrZFJlc3VsdCA9IG9wdHMub25LZXlEb3duLmNhbGwoXHJcbiAgICAgICAgdGhpcyxcclxuICAgICAgICBlLFxyXG4gICAgICAgIGdldEJ1ZmZlci5jYWxsKGlucHV0bWFzayksXHJcbiAgICAgICAgcG9zLFxyXG4gICAgICAgIG9wdHNcclxuICAgICAgKTtcclxuICAgIGlmIChrZFJlc3VsdCAhPT0gdW5kZWZpbmVkKSByZXR1cm4ga2RSZXN1bHQ7XHJcblxyXG4gICAgLy8gYmFja3NwYWNlLCBkZWxldGUsIGFuZCBlc2NhcGUgZ2V0IHNwZWNpYWwgdHJlYXRtZW50XHJcbiAgICBpZiAoXHJcbiAgICAgIGMgPT09IGtleXMuQmFja3NwYWNlIHx8XHJcbiAgICAgIGMgPT09IGtleXMuRGVsZXRlIHx8XHJcbiAgICAgIChpcGhvbmUgJiYgYyA9PT0ga2V5cy5CQUNLU1BBQ0VfU0FGQVJJKSB8fFxyXG4gICAgICAoZS5jdHJsS2V5ICYmIGMgPT09IGtleXMueCAmJiAhKFwib25jdXRcIiBpbiBpbnB1dCkpXHJcbiAgICApIHtcclxuICAgICAgLy8gYmFja3NwYWNlL2RlbGV0ZVxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHN0b3AgZGVmYXVsdCBhY3Rpb24gYnV0IGFsbG93IHByb3BhZ2F0aW9uXHJcbiAgICAgIGhhbmRsZVJlbW92ZS5jYWxsKGlucHV0bWFzaywgaW5wdXQsIGMsIHBvcyk7XHJcbiAgICAgIHdyaXRlQnVmZmVyKFxyXG4gICAgICAgIGlucHV0LFxyXG4gICAgICAgIGdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaywgdHJ1ZSksXHJcbiAgICAgICAgbWFza3NldC5wLFxyXG4gICAgICAgIGUsXHJcbiAgICAgICAgaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpICE9PSBnZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spLmpvaW4oXCJcIilcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoYyA9PT0ga2V5cy5FbmQgfHwgYyA9PT0ga2V5cy5QYWdlRG93bikge1xyXG4gICAgICAvLyB3aGVuIEVORCBvciBQQUdFX0RPV04gcHJlc3NlZCBzZXQgcG9zaXRpb24gYXQgbGFzdG1hdGNoXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgY2FyZXRQb3MgPSBzZWVrTmV4dC5jYWxsKFxyXG4gICAgICAgIGlucHV0bWFzayxcclxuICAgICAgICBnZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGlucHV0bWFzaylcclxuICAgICAgKTtcclxuICAgICAgY2FyZXQuY2FsbChcclxuICAgICAgICBpbnB1dG1hc2ssXHJcbiAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgZS5zaGlmdEtleSA/IHBvcy5iZWdpbiA6IGNhcmV0UG9zLFxyXG4gICAgICAgIGNhcmV0UG9zLFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoKGMgPT09IGtleXMuSG9tZSAmJiAhZS5zaGlmdEtleSkgfHwgYyA9PT0ga2V5cy5QYWdlVXApIHtcclxuICAgICAgLy8gSG9tZSBvciBwYWdlX3VwXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY2FyZXQuY2FsbChpbnB1dG1hc2ssIGlucHV0LCAwLCBlLnNoaWZ0S2V5ID8gcG9zLmJlZ2luIDogMCwgdHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAoKG9wdHMudW5kb09uRXNjYXBlICYmIGMgPT09IGtleXMuRXNjYXBlKSB8fFxyXG4gICAgICAgIChmYWxzZSAmJiBjID09PSBrZXlzLnogJiYgZS5jdHJsS2V5KSkgJiZcclxuICAgICAgZS5hbHRLZXkgIT09IHRydWVcclxuICAgICkge1xyXG4gICAgICAvLyBlc2NhcGUgJiYgdW5kbyAmJiAjNzYyXHJcbiAgICAgIGNoZWNrVmFsKGlucHV0LCB0cnVlLCBmYWxzZSwgaW5wdXRtYXNrLnVuZG9WYWx1ZS5zcGxpdChcIlwiKSk7XHJcbiAgICAgICRpbnB1dC50cmlnZ2VyKFwiY2xpY2tcIik7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBjID09PSBrZXlzLkluc2VydCAmJlxyXG4gICAgICAhKGUuc2hpZnRLZXkgfHwgZS5jdHJsS2V5KSAmJlxyXG4gICAgICBpbnB1dG1hc2sudXNlck9wdGlvbnMuaW5zZXJ0TW9kZSA9PT0gdW5kZWZpbmVkXHJcbiAgICApIHtcclxuICAgICAgLy8gaW5zZXJ0XHJcbiAgICAgIGlmICghaXNTZWxlY3Rpb24uY2FsbChpbnB1dG1hc2ssIHBvcykpIHtcclxuICAgICAgICBvcHRzLmluc2VydE1vZGUgPSAhb3B0cy5pbnNlcnRNb2RlO1xyXG4gICAgICAgIGNhcmV0LmNhbGwoaW5wdXRtYXNrLCBpbnB1dCwgcG9zLmJlZ2luLCBwb3MuYmVnaW4pO1xyXG4gICAgICB9IGVsc2Ugb3B0cy5pbnNlcnRNb2RlID0gIW9wdHMuaW5zZXJ0TW9kZTtcclxuICAgIH0gZWxzZSBpZiAob3B0cy50YWJUaHJvdWdoID09PSB0cnVlICYmIGMgPT09IGtleXMuVGFiKSB7XHJcbiAgICAgIGlmIChlLnNoaWZ0S2V5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgcG9zLmVuZCA9IHNlZWtQcmV2aW91cy5jYWxsKGlucHV0bWFzaywgcG9zLmVuZCwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKGdldFRlc3QuY2FsbChpbnB1dG1hc2ssIHBvcy5lbmQgLSAxKS5tYXRjaC5zdGF0aWMgPT09IHRydWUpIHtcclxuICAgICAgICAgIHBvcy5lbmQtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcG9zLmJlZ2luID0gc2Vla1ByZXZpb3VzLmNhbGwoaW5wdXRtYXNrLCBwb3MuZW5kLCB0cnVlKTtcclxuICAgICAgICBpZiAocG9zLmJlZ2luID49IDAgJiYgcG9zLmVuZCA+IDApIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGNhcmV0LmNhbGwoaW5wdXRtYXNrLCBpbnB1dCwgcG9zLmJlZ2luLCBwb3MuZW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcG9zLmJlZ2luID0gc2Vla05leHQuY2FsbChpbnB1dG1hc2ssIHBvcy5iZWdpbiwgdHJ1ZSk7XHJcbiAgICAgICAgcG9zLmVuZCA9IHNlZWtOZXh0LmNhbGwoaW5wdXRtYXNrLCBwb3MuYmVnaW4sIHRydWUpO1xyXG4gICAgICAgIGlmIChwb3MuZW5kIDwgbWFza3NldC5tYXNrTGVuZ3RoKSBwb3MuZW5kLS07XHJcbiAgICAgICAgaWYgKHBvcy5iZWdpbiA8PSBtYXNrc2V0Lm1hc2tMZW5ndGgpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGNhcmV0LmNhbGwoaW5wdXRtYXNrLCBpbnB1dCwgcG9zLmJlZ2luLCBwb3MuZW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoIWUuc2hpZnRLZXkpIHtcclxuICAgICAgaWYgKG9wdHMuaW5zZXJ0TW9kZVZpc3VhbCAmJiBvcHRzLmluc2VydE1vZGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKGMgPT09IGtleXMuQXJyb3dSaWdodCkge1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmV0UG9zID0gY2FyZXQuY2FsbChpbnB1dG1hc2ssIGlucHV0KTtcclxuICAgICAgICAgICAgY2FyZXQuY2FsbChpbnB1dG1hc2ssIGlucHV0LCBjYXJldFBvcy5iZWdpbik7XHJcbiAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGMgPT09IGtleXMuQXJyb3dMZWZ0KSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgY2FyZXRQb3MgPSB7XHJcbiAgICAgICAgICAgICAgYmVnaW46IHRyYW5zbGF0ZVBvc2l0aW9uLmNhbGwoXHJcbiAgICAgICAgICAgICAgICBpbnB1dG1hc2ssXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5pbnB1dG1hc2suY2FyZXRQb3MuYmVnaW5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIGVuZDogdHJhbnNsYXRlUG9zaXRpb24uY2FsbChcclxuICAgICAgICAgICAgICAgIGlucHV0bWFzayxcclxuICAgICAgICAgICAgICAgIGlucHV0LmlucHV0bWFzay5jYXJldFBvcy5lbmRcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmIChpbnB1dG1hc2suaXNSVEwpIHtcclxuICAgICAgICAgICAgICBjYXJldC5jYWxsKFxyXG4gICAgICAgICAgICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgICAgICBjYXJldFBvcy5iZWdpbiArIChjYXJldFBvcy5iZWdpbiA9PT0gbWFza3NldC5tYXNrTGVuZ3RoID8gMCA6IDEpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjYXJldC5jYWxsKFxyXG4gICAgICAgICAgICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgICAgICBjYXJldFBvcy5iZWdpbiAtIChjYXJldFBvcy5iZWdpbiA9PT0gMCA/IDAgOiAxKVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbnB1dG1hc2sua2V5RXZlbnRIb29rID09PSB1bmRlZmluZWQgfHwgaW5wdXRtYXNrLmtleUV2ZW50SG9vayhlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0bWFzay5pc0NvbXBvc2luZyA9IGMgPT0ga2V5cy5Qcm9jZXNzIHx8IGMgPT0ga2V5cy5VbmlkZW50aWZpZWQ7XHJcbiAgICBpbnB1dG1hc2suaWdub3JhYmxlID1cclxuICAgICAgYyA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIChjLmxlbmd0aCA+IDEgJiZcclxuICAgICAgICAhKGlucHV0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0ZXh0YXJlYVwiICYmIGMgPT0ga2V5cy5FbnRlcikpO1xyXG4gICAgcmV0dXJuIEV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudC5jYWxsKFxyXG4gICAgICB0aGlzLFxyXG4gICAgICBlLFxyXG4gICAgICBjaGVja3ZhbCxcclxuICAgICAgd3JpdGVPdXQsXHJcbiAgICAgIHN0cmljdCxcclxuICAgICAgbmR4XHJcbiAgICApO1xyXG4gIH0sXHJcbiAga2V5cHJlc3NFdmVudDogZnVuY3Rpb24gKGUsIGNoZWNrdmFsLCB3cml0ZU91dCwgc3RyaWN0LCBuZHgpIHtcclxuICAgIGNvbnN0IGlucHV0bWFzayA9IHRoaXMuaW5wdXRtYXNrIHx8IHRoaXMsXHJcbiAgICAgIG9wdHMgPSBpbnB1dG1hc2sub3B0cyxcclxuICAgICAgJCA9IGlucHV0bWFzay5kZXBlbmRlbmN5TGliLFxyXG4gICAgICBtYXNrc2V0ID0gaW5wdXRtYXNrLm1hc2tzZXQ7XHJcblxyXG4gICAgbGV0IGlucHV0ID0gaW5wdXRtYXNrLmVsLFxyXG4gICAgICAkaW5wdXQgPSAkKGlucHV0KSxcclxuICAgICAgYyA9IGUua2V5O1xyXG5cclxuICAgIGlmIChcclxuICAgICAgY2hlY2t2YWwgIT09IHRydWUgJiZcclxuICAgICAgIShlLmN0cmxLZXkgJiYgZS5hbHRLZXkgJiYgIWlucHV0bWFzay5pZ25vcmFibGUpICYmXHJcbiAgICAgIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8IGlucHV0bWFzay5pZ25vcmFibGUpXHJcbiAgICApIHtcclxuICAgICAgaWYgKGMgPT09IGtleXMuRW50ZXIpIHtcclxuICAgICAgICBpZiAoaW5wdXRtYXNrLnVuZG9WYWx1ZSAhPT0gaW5wdXRtYXNrLl92YWx1ZUdldCh0cnVlKSkge1xyXG4gICAgICAgICAgaW5wdXRtYXNrLnVuZG9WYWx1ZSA9IGlucHV0bWFzay5fdmFsdWVHZXQodHJ1ZSk7XHJcbiAgICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIGlucHV0bWFzay5za2lwSW5wdXRFdmVudCA9IHRydWU7IC8vc2tpcCB0aGUgaW5wdXQgYXMgb3RoZXJ3aXNlIHRoZSBza2lwcGVkIGNoYXIgY291bGQgYmUgcGlja2VkIHVwIGZvciB2YWxpZGF0aW9uIGJ5IHRoZSBpbnB1dGZhbGxiYWNrXHJcbiAgICB9IGVsc2UgaWYgKGMpIHtcclxuICAgICAgLy8gc3BlY2lhbCB0cmVhdCB0aGUgZGVjaW1hbCBzZXBhcmF0b3JcclxuICAgICAgLy8gaWYgKChrID09PSA0NCB8fCBrID09PSA0NikgJiYgZS5sb2NhdGlvbiA9PT0gMyAmJiBvcHRzLnJhZGl4UG9pbnQgIT09IFwiXCIpIGsgPSBvcHRzLnJhZGl4UG9pbnQuY2hhckNvZGVBdCgwKTtcclxuICAgICAgbGV0IHBvcyA9IGNoZWNrdmFsXHJcbiAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICBiZWdpbjogbmR4LFxyXG4gICAgICAgICAgICAgIGVuZDogbmR4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDogY2FyZXQuY2FsbChpbnB1dG1hc2ssIGlucHV0KSxcclxuICAgICAgICBmb3J3YXJkUG9zaXRpb247XHJcblxyXG4gICAgICAvLyBhbGxvdyBmb3IgY2hhcmFjdGVyIHN1YnN0aXR1dGlvblxyXG4gICAgICBpZiAoIWNoZWNrdmFsKSBjID0gb3B0cy5zdWJzdGl0dXRlc1tjXSB8fCBjO1xyXG4gICAgICBtYXNrc2V0LndyaXRlT3V0QnVmZmVyID0gdHJ1ZTtcclxuICAgICAgY29uc3QgdmFsUmVzdWx0ID0gaXNWYWxpZC5jYWxsKFxyXG4gICAgICAgIGlucHV0bWFzayxcclxuICAgICAgICBwb3MsXHJcbiAgICAgICAgYyxcclxuICAgICAgICBzdHJpY3QsXHJcbiAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgY2hlY2t2YWxcclxuICAgICAgKTtcclxuICAgICAgaWYgKHZhbFJlc3VsdCAhPT0gZmFsc2UpIHtcclxuICAgICAgICByZXNldE1hc2tTZXQuY2FsbChpbnB1dG1hc2ssIHRydWUpO1xyXG4gICAgICAgIGZvcndhcmRQb3NpdGlvbiA9XHJcbiAgICAgICAgICB2YWxSZXN1bHQuY2FyZXQgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHZhbFJlc3VsdC5jYXJldFxyXG4gICAgICAgICAgICA6IHNlZWtOZXh0LmNhbGwoXHJcbiAgICAgICAgICAgICAgICBpbnB1dG1hc2ssXHJcbiAgICAgICAgICAgICAgICB2YWxSZXN1bHQucG9zLmJlZ2luID8gdmFsUmVzdWx0LnBvcy5iZWdpbiA6IHZhbFJlc3VsdC5wb3NcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgIG1hc2tzZXQucCA9IGZvcndhcmRQb3NpdGlvbjsgLy8gbmVlZGVkIGZvciBjaGVja3ZhbFxyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3J3YXJkUG9zaXRpb24gPVxyXG4gICAgICAgIG9wdHMubnVtZXJpY0lucHV0ICYmIHZhbFJlc3VsdC5jYXJldCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICA/IHNlZWtQcmV2aW91cy5jYWxsKGlucHV0bWFzaywgZm9yd2FyZFBvc2l0aW9uKVxyXG4gICAgICAgICAgOiBmb3J3YXJkUG9zaXRpb247XHJcbiAgICAgIGlmICh3cml0ZU91dCAhPT0gZmFsc2UpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIG9wdHMub25LZXlWYWxpZGF0aW9uLmNhbGwoaW5wdXQsIGMsIHZhbFJlc3VsdCk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgaWYgKG1hc2tzZXQud3JpdGVPdXRCdWZmZXIgJiYgdmFsUmVzdWx0ICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgY29uc3QgYnVmZmVyID0gZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKTtcclxuICAgICAgICAgIHdyaXRlQnVmZmVyKGlucHV0LCBidWZmZXIsIGZvcndhcmRQb3NpdGlvbiwgZSwgY2hlY2t2YWwgIT09IHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKGNoZWNrdmFsKSB7XHJcbiAgICAgICAgaWYgKHZhbFJlc3VsdCAhPT0gZmFsc2UpIHZhbFJlc3VsdC5mb3J3YXJkUG9zaXRpb24gPSBmb3J3YXJkUG9zaXRpb247XHJcbiAgICAgICAgcmV0dXJuIHZhbFJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFzdGVFdmVudDogYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVBhc3RlKFxyXG4gICAgICBpbnB1dG1hc2ssXHJcbiAgICAgIGlucHV0LFxyXG4gICAgICBpbnB1dFZhbHVlLFxyXG4gICAgICBwYXN0ZWRWYWx1ZSxcclxuICAgICAgb25CZWZvcmVQYXN0ZVxyXG4gICAgKSB7XHJcbiAgICAgIGxldCBjYXJldFBvcyA9IGNhcmV0LmNhbGwoaW5wdXRtYXNrLCBpbnB1dCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRydWUpLFxyXG4gICAgICAgIHZhbHVlQmVmb3JlQ2FyZXQgPSBpbnB1dFZhbHVlLnN1YnN0cigwLCBjYXJldFBvcy5iZWdpbiksXHJcbiAgICAgICAgdmFsdWVBZnRlckNhcmV0ID0gaW5wdXRWYWx1ZS5zdWJzdHIoY2FyZXRQb3MuZW5kLCBpbnB1dFZhbHVlLmxlbmd0aCk7XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdmFsdWVCZWZvcmVDYXJldCA9PVxyXG4gICAgICAgIChpbnB1dG1hc2suaXNSVExcclxuICAgICAgICAgID8gZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChpbnB1dG1hc2spLnNsaWNlKCkucmV2ZXJzZSgpXHJcbiAgICAgICAgICA6IGdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoaW5wdXRtYXNrKVxyXG4gICAgICAgIClcclxuICAgICAgICAgIC5zbGljZSgwLCBjYXJldFBvcy5iZWdpbilcclxuICAgICAgICAgIC5qb2luKFwiXCIpXHJcbiAgICAgIClcclxuICAgICAgICB2YWx1ZUJlZm9yZUNhcmV0ID0gXCJcIjtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHZhbHVlQWZ0ZXJDYXJldCA9PVxyXG4gICAgICAgIChpbnB1dG1hc2suaXNSVExcclxuICAgICAgICAgID8gZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChpbnB1dG1hc2spLnNsaWNlKCkucmV2ZXJzZSgpXHJcbiAgICAgICAgICA6IGdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoaW5wdXRtYXNrKVxyXG4gICAgICAgIClcclxuICAgICAgICAgIC5zbGljZShjYXJldFBvcy5lbmQpXHJcbiAgICAgICAgICAuam9pbihcIlwiKVxyXG4gICAgICApXHJcbiAgICAgICAgdmFsdWVBZnRlckNhcmV0ID0gXCJcIjtcclxuXHJcbiAgICAgIHBhc3RlZFZhbHVlID0gdmFsdWVCZWZvcmVDYXJldCArIHBhc3RlZFZhbHVlICsgdmFsdWVBZnRlckNhcmV0O1xyXG4gICAgICBpZiAoaW5wdXRtYXNrLmlzUlRMICYmIG9wdHMubnVtZXJpY0lucHV0ICE9PSB0cnVlKSB7XHJcbiAgICAgICAgcGFzdGVkVmFsdWUgPSBwYXN0ZWRWYWx1ZS5zcGxpdChcIlwiKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGMgb2YgZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChpbnB1dG1hc2spKSB7XHJcbiAgICAgICAgICBpZiAocGFzdGVkVmFsdWVbMF0gPT09IGMpIHBhc3RlZFZhbHVlLnNoaWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhc3RlZFZhbHVlID0gcGFzdGVkVmFsdWUucmV2ZXJzZSgpLmpvaW4oXCJcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBwYXN0ZVZhbHVlID0gcGFzdGVkVmFsdWU7XHJcbiAgICAgIGlmICh0eXBlb2Ygb25CZWZvcmVQYXN0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcGFzdGVWYWx1ZSA9IG9uQmVmb3JlUGFzdGUuY2FsbChpbnB1dG1hc2ssIHBhc3RlVmFsdWUsIG9wdHMpO1xyXG4gICAgICAgIGlmIChwYXN0ZVZhbHVlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXBhc3RlVmFsdWUpIHtcclxuICAgICAgICAgIHBhc3RlVmFsdWUgPSBpbnB1dFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjaGVja1ZhbChpbnB1dCwgdHJ1ZSwgZmFsc2UsIHBhc3RlVmFsdWUudG9TdHJpbmcoKS5zcGxpdChcIlwiKSwgZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLFxyXG4gICAgICBpbnB1dG1hc2sgPSB0aGlzLmlucHV0bWFzayxcclxuICAgICAgb3B0cyA9IGlucHV0bWFzay5vcHRzO1xyXG4gICAgbGV0IGlucHV0VmFsdWUgPSBpbnB1dG1hc2suX3ZhbHVlR2V0KHRydWUpLFxyXG4gICAgICBwYXN0ZWRWYWx1ZTtcclxuXHJcbiAgICBpbnB1dG1hc2suc2tpcElucHV0RXZlbnQgPSB0cnVlO1xyXG4gICAgaWYgKGUuY2xpcGJvYXJkRGF0YSAmJiBlLmNsaXBib2FyZERhdGEuZ2V0RGF0YSkge1xyXG4gICAgICBwYXN0ZWRWYWx1ZSA9IGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtcclxuICAgIH0gZWxzZSBpZiAod2luZG93LmNsaXBib2FyZERhdGEgJiYgd2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YSkge1xyXG4gICAgICAvLyBJRVxyXG4gICAgICBwYXN0ZWRWYWx1ZSA9IHdpbmRvdy5jbGlwYm9hcmREYXRhLmdldERhdGEoXCJUZXh0XCIpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlUGFzdGUoaW5wdXRtYXNrLCBpbnB1dCwgaW5wdXRWYWx1ZSwgcGFzdGVkVmFsdWUsIG9wdHMub25CZWZvcmVQYXN0ZSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSxcclxuICBpbnB1dEZhbGxCYWNrRXZlbnQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyBmYWxsYmFjayB3aGVuIGtleXByZXNzIGlzIG5vdCB0cmlnZ2VyZWRcclxuICAgIGNvbnN0IGlucHV0bWFzayA9IHRoaXMuaW5wdXRtYXNrLFxyXG4gICAgICBvcHRzID0gaW5wdXRtYXNrLm9wdHMsXHJcbiAgICAgICQgPSBpbnB1dG1hc2suZGVwZW5kZW5jeUxpYjtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhlLmlucHV0VHlwZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gYW5hbHlzZUNoYW5nZXMoaW5wdXRWYWx1ZSwgYnVmZmVyLCBjYXJldFBvcykge1xyXG4gICAgICBsZXQgZnJvbnRQYXJ0ID0gaW5wdXRWYWx1ZS5zdWJzdHIoMCwgY2FyZXRQb3MuYmVnaW4pLnNwbGl0KFwiXCIpLFxyXG4gICAgICAgIGJhY2tQYXJ0ID0gaW5wdXRWYWx1ZS5zdWJzdHIoY2FyZXRQb3MuYmVnaW4pLnNwbGl0KFwiXCIpLFxyXG4gICAgICAgIGZyb250QnVmZmVyUGFydCA9IGJ1ZmZlci5zdWJzdHIoMCwgY2FyZXRQb3MuYmVnaW4pLnNwbGl0KFwiXCIpLFxyXG4gICAgICAgIGJhY2tCdWZmZXJQYXJ0ID0gYnVmZmVyLnN1YnN0cihjYXJldFBvcy5iZWdpbikuc3BsaXQoXCJcIiksXHJcbiAgICAgICAgZnBsID1cclxuICAgICAgICAgIGZyb250UGFydC5sZW5ndGggPj0gZnJvbnRCdWZmZXJQYXJ0Lmxlbmd0aFxyXG4gICAgICAgICAgICA/IGZyb250UGFydC5sZW5ndGhcclxuICAgICAgICAgICAgOiBmcm9udEJ1ZmZlclBhcnQubGVuZ3RoLFxyXG4gICAgICAgIGJwbCA9XHJcbiAgICAgICAgICBiYWNrUGFydC5sZW5ndGggPj0gYmFja0J1ZmZlclBhcnQubGVuZ3RoXHJcbiAgICAgICAgICAgID8gYmFja1BhcnQubGVuZ3RoXHJcbiAgICAgICAgICAgIDogYmFja0J1ZmZlclBhcnQubGVuZ3RoLFxyXG4gICAgICAgIGJsLFxyXG4gICAgICAgIGksXHJcbiAgICAgICAgYWN0aW9uID0gXCJcIixcclxuICAgICAgICBkYXRhID0gW10sXHJcbiAgICAgICAgbWFya2VyID0gXCJ+XCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI7XHJcblxyXG4gICAgICAvLyBhbGlnbiBidWZmZXJzXHJcbiAgICAgIHdoaWxlIChmcm9udFBhcnQubGVuZ3RoIDwgZnBsKSBmcm9udFBhcnQucHVzaChtYXJrZXIpO1xyXG4gICAgICB3aGlsZSAoZnJvbnRCdWZmZXJQYXJ0Lmxlbmd0aCA8IGZwbCkgZnJvbnRCdWZmZXJQYXJ0LnB1c2gobWFya2VyKTtcclxuICAgICAgd2hpbGUgKGJhY2tQYXJ0Lmxlbmd0aCA8IGJwbCkgYmFja1BhcnQudW5zaGlmdChtYXJrZXIpO1xyXG4gICAgICB3aGlsZSAoYmFja0J1ZmZlclBhcnQubGVuZ3RoIDwgYnBsKSBiYWNrQnVmZmVyUGFydC51bnNoaWZ0KG1hcmtlcik7XHJcblxyXG4gICAgICBjb25zdCBuZXdCdWZmZXIgPSBmcm9udFBhcnQuY29uY2F0KGJhY2tQYXJ0KSxcclxuICAgICAgICBvbGRCdWZmZXIgPSBmcm9udEJ1ZmZlclBhcnQuY29uY2F0KGJhY2tCdWZmZXJQYXJ0KTtcclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiTiBcIiArIG5ld0J1ZmZlcik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiTyBcIiArIG9sZEJ1ZmZlcik7XHJcblxyXG4gICAgICBmb3IgKGkgPSAwLCBibCA9IG5ld0J1ZmZlci5sZW5ndGg7IGkgPCBibDsgaSsrKSB7XHJcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBnZXRQbGFjZWhvbGRlci5jYWxsKFxyXG4gICAgICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICAgICAgdHJhbnNsYXRlUG9zaXRpb24uY2FsbChpbnB1dG1hc2ssIGkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgICAgICAgY2FzZSBcImluc2VydFRleHRcIjpcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIG9sZEJ1ZmZlcltpIC0gMV0gPT09IG5ld0J1ZmZlcltpXSAmJlxyXG4gICAgICAgICAgICAgIGNhcmV0UG9zLmJlZ2luID09IG5ld0J1ZmZlci5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGRhdGEucHVzaChuZXdCdWZmZXJbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkgPSBibDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwiaW5zZXJ0UmVwbGFjZW1lbnRUZXh0XCI6XHJcbiAgICAgICAgICAgIGlmIChuZXdCdWZmZXJbaV0gPT09IG1hcmtlcikge1xyXG4gICAgICAgICAgICAgIC8vIGV4dGVuZCBzZWxlY3Rpb25cclxuICAgICAgICAgICAgICBjYXJldFBvcy5lbmQrKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBicmVha291dCBsb29wXHJcbiAgICAgICAgICAgICAgaSA9IGJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcImRlbGV0ZUNvbnRlbnRCYWNrd2FyZFwiOlxyXG4gICAgICAgICAgICBpZiAobmV3QnVmZmVyW2ldID09PSBtYXJrZXIpIHtcclxuICAgICAgICAgICAgICBjYXJldFBvcy5lbmQrKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBicmVha291dCBsb29wXHJcbiAgICAgICAgICAgICAgaSA9IGJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgaWYgKG5ld0J1ZmZlcltpXSAhPT0gb2xkQnVmZmVyW2ldKSB7XHJcbiAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKG5ld0J1ZmZlcltpICsgMV0gPT09IG1hcmtlciB8fFxyXG4gICAgICAgICAgICAgICAgICBuZXdCdWZmZXJbaSArIDFdID09PSBwbGFjZWhvbGRlciB8fFxyXG4gICAgICAgICAgICAgICAgICBuZXdCdWZmZXJbaSArIDFdID09PSB1bmRlZmluZWQpICYmXHJcbiAgICAgICAgICAgICAgICAoKG9sZEJ1ZmZlcltpXSA9PT0gcGxhY2Vob2xkZXIgJiZcclxuICAgICAgICAgICAgICAgICAgb2xkQnVmZmVyW2kgKyAxXSA9PT0gbWFya2VyKSB8fFxyXG4gICAgICAgICAgICAgICAgICBvbGRCdWZmZXJbaV0gPT09IG1hcmtlcilcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIC8vIGJhc2ljIGluc2VydFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uID0gXCJpbnNlcnRUZXh0XCI7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2gobmV3QnVmZmVyW2ldKTtcclxuICAgICAgICAgICAgICAgIGNhcmV0UG9zLmJlZ2luLS07XHJcbiAgICAgICAgICAgICAgICBjYXJldFBvcy5lbmQtLTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgb2xkQnVmZmVyW2kgKyAxXSA9PT0gbWFya2VyICYmXHJcbiAgICAgICAgICAgICAgICBvbGRCdWZmZXJbaV0gPT09IG5ld0J1ZmZlcltpICsgMV1cclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIC8vIGluc2VydCBiZXR3ZWVuXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSBcImluc2VydFRleHRcIjtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChuZXdCdWZmZXJbaV0pO1xyXG4gICAgICAgICAgICAgICAgY2FyZXRQb3MuYmVnaW4tLTtcclxuICAgICAgICAgICAgICAgIGNhcmV0UG9zLmVuZC0tO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICBuZXdCdWZmZXJbaV0gIT09IHBsYWNlaG9sZGVyICYmXHJcbiAgICAgICAgICAgICAgICBuZXdCdWZmZXJbaV0gIT09IG1hcmtlciAmJlxyXG4gICAgICAgICAgICAgICAgKG5ld0J1ZmZlcltpICsgMV0gPT09IG1hcmtlciB8fFxyXG4gICAgICAgICAgICAgICAgICAob2xkQnVmZmVyW2ldICE9PSBuZXdCdWZmZXJbaV0gJiZcclxuICAgICAgICAgICAgICAgICAgICBvbGRCdWZmZXJbaSArIDFdID09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3QnVmZmVyW2kgKyAxXSkpIC8qIHNpbmdsZSBjaGFyIHJlcGxhY2VtZW50ICovXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByZXBsYWNlIHNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgYWN0aW9uID0gXCJpbnNlcnRSZXBsYWNlbWVudFRleHRcIjtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChuZXdCdWZmZXJbaV0pO1xyXG4gICAgICAgICAgICAgICAgY2FyZXRQb3MuYmVnaW4tLTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0J1ZmZlcltpXSA9PT0gbWFya2VyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkZWxldGV+YmFja3NwYWNlXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSBcImRlbGV0ZUNvbnRlbnRCYWNrd2FyZFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICBpc01hc2suY2FsbChcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dG1hc2ssXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlUG9zaXRpb24uY2FsbChpbnB1dG1hc2ssIGkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgICAgKSB8fFxyXG4gICAgICAgICAgICAgICAgICBvbGRCdWZmZXJbaV0gPT09IG9wdHMucmFkaXhQb2ludFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICBjYXJldFBvcy5lbmQrKztcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaSA9IGJsO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgY2FyZXQ6IGNhcmV0UG9zXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGlucHV0ID0gdGhpcyxcclxuICAgICAgaW5wdXRWYWx1ZSA9IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQodHJ1ZSksXHJcbiAgICAgIGJ1ZmZlciA9IChcclxuICAgICAgICBpbnB1dG1hc2suaXNSVExcclxuICAgICAgICAgID8gZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKS5zbGljZSgpLnJldmVyc2UoKVxyXG4gICAgICAgICAgOiBnZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spXHJcbiAgICAgICkuam9pbihcIlwiKSxcclxuICAgICAgY2FyZXRQb3MgPSBjYXJldC5jYWxsKGlucHV0bWFzaywgaW5wdXQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0cnVlKSxcclxuICAgICAgY2hhbmdlcztcclxuXHJcbiAgICBpZiAoYnVmZmVyICE9PSBpbnB1dFZhbHVlKSB7XHJcbiAgICAgIGNoYW5nZXMgPSBhbmFseXNlQ2hhbmdlcyhpbnB1dFZhbHVlLCBidWZmZXIsIGNhcmV0UG9zKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIChpbnB1dC5pbnB1dG1hc2suc2hhZG93Um9vdCB8fCBpbnB1dC5vd25lckRvY3VtZW50KS5hY3RpdmVFbGVtZW50ICE9PVxyXG4gICAgICAgIGlucHV0XHJcbiAgICAgICkge1xyXG4gICAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgICAgd3JpdGVCdWZmZXIoaW5wdXQsIGdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykpO1xyXG4gICAgICBjYXJldC5jYWxsKGlucHV0bWFzaywgaW5wdXQsIGNhcmV0UG9zLmJlZ2luLCBjYXJldFBvcy5lbmQsIHRydWUpO1xyXG5cclxuICAgICAgLy8gSmFwYW5lc2UgSU1FIGhhY2sgIzI2NjJcclxuICAgICAgaWYgKFxyXG4gICAgICAgICFtb2JpbGUgJiZcclxuICAgICAgICBpbnB1dG1hc2suc2tpcE5leHRJbnNlcnQgJiZcclxuICAgICAgICBlLmlucHV0VHlwZSA9PT0gXCJpbnNlcnRUZXh0XCIgJiZcclxuICAgICAgICBjaGFuZ2VzLmFjdGlvbiA9PT0gXCJpbnNlcnRUZXh0XCIgJiZcclxuICAgICAgICBpbnB1dG1hc2suaXNDb21wb3NpbmdcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICBlLmlucHV0VHlwZSA9PT0gXCJpbnNlcnRDb21wb3NpdGlvblRleHRcIiAmJlxyXG4gICAgICAgIGNoYW5nZXMuYWN0aW9uID09PSBcImluc2VydFRleHRcIiAmJlxyXG4gICAgICAgIGlucHV0bWFzay5pc0NvbXBvc2luZ1xyXG4gICAgICApIHtcclxuICAgICAgICBpbnB1dG1hc2suc2tpcE5leHRJbnNlcnQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlucHV0bWFzay5za2lwTmV4dEluc2VydCA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzd2l0Y2ggKGNoYW5nZXMuYWN0aW9uKSB7XHJcbiAgICAgICAgY2FzZSBcImluc2VydFRleHRcIjpcclxuICAgICAgICBjYXNlIFwiaW5zZXJ0UmVwbGFjZW1lbnRUZXh0XCI6XHJcbiAgICAgICAgICBjaGFuZ2VzLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAoZW50cnksIG5keCkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlwcmVzcyA9IG5ldyAkLkV2ZW50KFwia2V5cHJlc3NcIik7XHJcbiAgICAgICAgICAgIGtleXByZXNzLmtleSA9IGVudHJ5O1xyXG4gICAgICAgICAgICBpbnB1dG1hc2suaWdub3JhYmxlID0gZmFsc2U7IC8vIG1ha2Ugc3VyZSBpZ25vcmFibGUgaXMgaWdub3JlZCA7LSlcclxuICAgICAgICAgICAgRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoaW5wdXQsIGtleXByZXNzKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vICMyMTk1IHRyaWdnZXIga2V5dXAgdG8gaGVscCBzb21lIG90aGVyIHBsdWdpbnMgdG8gdHJhY2sgY2hhbmdlc1xyXG4gICAgICAgICAgICBpbnB1dG1hc2suJGVsLnRyaWdnZXIoXCJrZXl1cFwiKTtcclxuICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImRlbGV0ZUNvbnRlbnRCYWNrd2FyZFwiOlxyXG4gICAgICAgICAgdmFyIGtleWRvd24gPSBuZXcgJC5FdmVudChcImtleWRvd25cIik7XHJcbiAgICAgICAgICBrZXlkb3duLmtleSA9IGtleXMuQmFja3NwYWNlO1xyXG4gICAgICAgICAgRXZlbnRIYW5kbGVycy5rZXlFdmVudC5jYWxsKGlucHV0LCBrZXlkb3duKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBhcHBseUlucHV0VmFsdWUoaW5wdXQsIGlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgY2FyZXQuY2FsbChpbnB1dG1hc2ssIGlucHV0LCBjYXJldFBvcy5iZWdpbiwgY2FyZXRQb3MuZW5kLCB0cnVlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBzZXRWYWx1ZUV2ZW50OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc3QgaW5wdXRtYXNrID0gdGhpcy5pbnB1dG1hc2ssXHJcbiAgICAgICQgPSBpbnB1dG1hc2suZGVwZW5kZW5jeUxpYjtcclxuICAgIGxldCBpbnB1dCA9IHRoaXMsXHJcbiAgICAgIHZhbHVlID0gZSAmJiBlLmRldGFpbCA/IGUuZGV0YWlsWzBdIDogYXJndW1lbnRzWzFdO1xyXG5cclxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHZhbHVlID0gaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBseUlucHV0VmFsdWUoXHJcbiAgICAgIGlucHV0LFxyXG4gICAgICB2YWx1ZSxcclxuICAgICAgbmV3ICQuRXZlbnQoXCJpbnB1dFwiKSxcclxuICAgICAgKGUgJiYgZS5kZXRhaWwgPyBlLmRldGFpbFswXSA6IGFyZ3VtZW50c1sxXSkgIT09IHVuZGVmaW5lZFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoKGUuZGV0YWlsICYmIGUuZGV0YWlsWzFdICE9PSB1bmRlZmluZWQpIHx8IGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNhcmV0LmNhbGwoaW5wdXRtYXNrLCBpbnB1dCwgZS5kZXRhaWwgPyBlLmRldGFpbFsxXSA6IGFyZ3VtZW50c1syXSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBmb2N1c0V2ZW50OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc3QgaW5wdXRtYXNrID0gdGhpcy5pbnB1dG1hc2ssXHJcbiAgICAgIG9wdHMgPSBpbnB1dG1hc2sub3B0cyxcclxuICAgICAgaW5wdXQgPSB0aGlzLFxyXG4gICAgICBucHRWYWx1ZSA9IGlucHV0bWFzayAmJiBpbnB1dG1hc2suX3ZhbHVlR2V0KCk7XHJcblxyXG4gICAgaWYgKG9wdHMuc2hvd01hc2tPbkZvY3VzKSB7XHJcbiAgICAgIGlmIChucHRWYWx1ZSAhPT0gZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKS5qb2luKFwiXCIpKSB7XHJcbiAgICAgICAgd3JpdGVCdWZmZXIoXHJcbiAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgIGdldEJ1ZmZlci5jYWxsKGlucHV0bWFzayksXHJcbiAgICAgICAgICBzZWVrTmV4dC5jYWxsKGlucHV0bWFzaywgZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChpbnB1dG1hc2spKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gLyogZWxzZSBpZiAobW91c2VFbnRlciA9PT0gZmFsc2UpIHsgLy9vbmx5IGV4ZWN1dGVkIG9uIGZvY3VzIHdpdGhvdXQgbW91c2VlbnRlclxyXG5cdFx0XHRcdFx0Y2FyZXQoaW5wdXQsIHNlZWtOZXh0KGdldExhc3RWYWxpZFBvc2l0aW9uKCkpKTtcclxuXHRcdFx0XHR9ICovXHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIG9wdHMucG9zaXRpb25DYXJldE9uVGFiID09PSB0cnVlICYmXHJcbiAgICAgIGlucHV0bWFzay5tb3VzZUVudGVyID09PSBmYWxzZSAmJlxyXG4gICAgICAoIWlzQ29tcGxldGUuY2FsbChpbnB1dG1hc2ssIGdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykpIHx8XHJcbiAgICAgICAgZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChpbnB1dG1hc2spID09PSAtMSlcclxuICAgICkge1xyXG4gICAgICBFdmVudEhhbmRsZXJzLmNsaWNrRXZlbnQuYXBwbHkoaW5wdXQsIFtlLCB0cnVlXSk7XHJcbiAgICB9XHJcbiAgICBpbnB1dG1hc2sudW5kb1ZhbHVlID0gaW5wdXRtYXNrICYmIGlucHV0bWFzay5fdmFsdWVHZXQodHJ1ZSk7XHJcbiAgfSxcclxuICBpbnZhbGlkRXZlbnQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB0aGlzLmlucHV0bWFzay52YWxpZGF0aW9uRXZlbnQgPSB0cnVlO1xyXG4gIH0sXHJcbiAgbW91c2VsZWF2ZUV2ZW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBpbnB1dG1hc2sgPSB0aGlzLmlucHV0bWFzayxcclxuICAgICAgb3B0cyA9IGlucHV0bWFzay5vcHRzLFxyXG4gICAgICBpbnB1dCA9IHRoaXM7XHJcbiAgICBpbnB1dG1hc2subW91c2VFbnRlciA9IGZhbHNlO1xyXG4gICAgaWYgKFxyXG4gICAgICBvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzICYmXHJcbiAgICAgIChpbnB1dC5pbnB1dG1hc2suc2hhZG93Um9vdCB8fCBpbnB1dC5vd25lckRvY3VtZW50KS5hY3RpdmVFbGVtZW50ICE9PVxyXG4gICAgICAgIGlucHV0XHJcbiAgICApIHtcclxuICAgICAgSGFuZGxlTmF0aXZlUGxhY2Vob2xkZXIoaW5wdXQsIGlucHV0bWFzay5vcmlnaW5hbFBsYWNlaG9sZGVyKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGNsaWNrRXZlbnQ6IGZ1bmN0aW9uIChlLCB0YWJiZWQpIHtcclxuICAgIGNvbnN0IGlucHV0bWFzayA9IHRoaXMuaW5wdXRtYXNrO1xyXG4gICAgaW5wdXRtYXNrLmNsaWNrZWQrKztcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IHRoaXM7XHJcbiAgICBpZiAoXHJcbiAgICAgIChpbnB1dC5pbnB1dG1hc2suc2hhZG93Um9vdCB8fCBpbnB1dC5vd25lckRvY3VtZW50KS5hY3RpdmVFbGVtZW50ID09PVxyXG4gICAgICBpbnB1dFxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IG5ld0NhcmV0UG9zaXRpb24gPSBkZXRlcm1pbmVOZXdDYXJldFBvc2l0aW9uLmNhbGwoXHJcbiAgICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICAgIGNhcmV0LmNhbGwoaW5wdXRtYXNrLCBpbnB1dCksXHJcbiAgICAgICAgdGFiYmVkXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChuZXdDYXJldFBvc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjYXJldC5jYWxsKGlucHV0bWFzaywgaW5wdXQsIG5ld0NhcmV0UG9zaXRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBjdXRFdmVudDogZnVuY3Rpb24gKGUpIHtcclxuICAgIGNvbnN0IGlucHV0bWFzayA9IHRoaXMuaW5wdXRtYXNrLFxyXG4gICAgICBtYXNrc2V0ID0gaW5wdXRtYXNrLm1hc2tzZXQsXHJcbiAgICAgIGlucHV0ID0gdGhpcyxcclxuICAgICAgcG9zID0gY2FyZXQuY2FsbChpbnB1dG1hc2ssIGlucHV0KSxcclxuICAgICAgLy8gY29ycmVjdCBjbGlwYm9hcmREYXRhXHJcbiAgICAgIGNsaXBEYXRhID0gaW5wdXRtYXNrLmlzUlRMXHJcbiAgICAgICAgPyBnZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spLnNsaWNlKHBvcy5lbmQsIHBvcy5iZWdpbilcclxuICAgICAgICA6IGdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykuc2xpY2UocG9zLmJlZ2luLCBwb3MuZW5kKSxcclxuICAgICAgY2xpcERhdGFUZXh0ID0gaW5wdXRtYXNrLmlzUlRMXHJcbiAgICAgICAgPyBjbGlwRGF0YS5yZXZlcnNlKCkuam9pbihcIlwiKVxyXG4gICAgICAgIDogY2xpcERhdGEuam9pbihcIlwiKTtcclxuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IuY2xpcGJvYXJkKVxyXG4gICAgICB3aW5kb3cubmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY2xpcERhdGFUZXh0KTtcclxuICAgIGVsc2UgaWYgKHdpbmRvdy5jbGlwYm9hcmREYXRhICYmIHdpbmRvdy5jbGlwYm9hcmREYXRhLmdldERhdGEpIHtcclxuICAgICAgLy8gSUVcclxuICAgICAgd2luZG93LmNsaXBib2FyZERhdGEuc2V0RGF0YShcIlRleHRcIiwgY2xpcERhdGFUZXh0KTtcclxuICAgIH1cclxuICAgIGhhbmRsZVJlbW92ZS5jYWxsKGlucHV0bWFzaywgaW5wdXQsIGtleXMuRGVsZXRlLCBwb3MpO1xyXG4gICAgd3JpdGVCdWZmZXIoXHJcbiAgICAgIGlucHV0LFxyXG4gICAgICBnZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spLFxyXG4gICAgICBtYXNrc2V0LnAsXHJcbiAgICAgIGUsXHJcbiAgICAgIGlucHV0bWFzay51bmRvVmFsdWUgIT09IGlucHV0bWFzay5fdmFsdWVHZXQodHJ1ZSlcclxuICAgICk7XHJcbiAgfSxcclxuICBibHVyRXZlbnQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zdCBpbnB1dG1hc2sgPSB0aGlzLmlucHV0bWFzayxcclxuICAgICAgb3B0cyA9IGlucHV0bWFzay5vcHRzLFxyXG4gICAgICAkID0gaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWI7XHJcbiAgICBpbnB1dG1hc2suY2xpY2tlZCA9IDA7XHJcblxyXG4gICAgY29uc3QgJGlucHV0ID0gJCh0aGlzKSxcclxuICAgICAgaW5wdXQgPSB0aGlzO1xyXG4gICAgaWYgKGlucHV0LmlucHV0bWFzaykge1xyXG4gICAgICBIYW5kbGVOYXRpdmVQbGFjZWhvbGRlcihpbnB1dCwgaW5wdXRtYXNrLm9yaWdpbmFsUGxhY2Vob2xkZXIpO1xyXG4gICAgICBsZXQgbnB0VmFsdWUgPSBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCksXHJcbiAgICAgICAgYnVmZmVyID0gZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKS5zbGljZSgpO1xyXG5cclxuICAgICAgaWYgKG5wdFZhbHVlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgaWYgKG9wdHMuY2xlYXJNYXNrT25Mb3N0Rm9jdXMpIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChpbnB1dG1hc2spID09PSAtMSAmJlxyXG4gICAgICAgICAgICBucHRWYWx1ZSA9PT0gZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChpbnB1dG1hc2spLmpvaW4oXCJcIilcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBidWZmZXIgPSBbXTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNsZWFyb3V0IG9wdGlvbmFsIHRhaWwgb2YgdGhlIG1hc2tcclxuICAgICAgICAgICAgY2xlYXJPcHRpb25hbFRhaWwuY2FsbChpbnB1dG1hc2ssIGJ1ZmZlcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0NvbXBsZXRlLmNhbGwoaW5wdXRtYXNrLCBidWZmZXIpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwiaW5jb21wbGV0ZVwiKTtcclxuICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgaWYgKG9wdHMuY2xlYXJJbmNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgIHJlc2V0TWFza1NldC5jYWxsKGlucHV0bWFzaywgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAob3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cykge1xyXG4gICAgICAgICAgICAgIGJ1ZmZlciA9IFtdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGJ1ZmZlciA9IGdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoaW5wdXRtYXNrKS5zbGljZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3cml0ZUJ1ZmZlcihpbnB1dCwgYnVmZmVyLCB1bmRlZmluZWQsIGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBucHRWYWx1ZSA9IGlucHV0bWFzay5fdmFsdWVHZXQodHJ1ZSk7XHJcbiAgICAgIGlmIChpbnB1dG1hc2sudW5kb1ZhbHVlICE9PSBucHRWYWx1ZSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIG5wdFZhbHVlICE9IFwiXCIgfHxcclxuICAgICAgICAgIGlucHV0bWFzay51bmRvVmFsdWUgIT0gZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChpbnB1dG1hc2spLmpvaW4oXCJcIikgfHxcclxuICAgICAgICAgIChpbnB1dG1hc2sudW5kb1ZhbHVlID09IGdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoaW5wdXRtYXNrKS5qb2luKFwiXCIpICYmXHJcbiAgICAgICAgICAgIGlucHV0bWFzay5tYXNrc2V0LnZhbGlkUG9zaXRpb25zLmxlbmd0aCA+IDApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpbnB1dG1hc2sudW5kb1ZhbHVlID0gbnB0VmFsdWU7XHJcbiAgICAgICAgICAkaW5wdXQudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG1vdXNlZW50ZXJFdmVudDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaW5wdXRtYXNrID0gdGhpcy5pbnB1dG1hc2ssXHJcbiAgICAgIHsgc2hvd01hc2tPbkhvdmVyIH0gPSBpbnB1dG1hc2sub3B0cyxcclxuICAgICAgaW5wdXQgPSB0aGlzO1xyXG4gICAgaW5wdXRtYXNrLm1vdXNlRW50ZXIgPSB0cnVlO1xyXG4gICAgaWYgKFxyXG4gICAgICAoaW5wdXQuaW5wdXRtYXNrLnNoYWRvd1Jvb3QgfHwgaW5wdXQub3duZXJEb2N1bWVudCkuYWN0aXZlRWxlbWVudCAhPT1cclxuICAgICAgaW5wdXRcclxuICAgICkge1xyXG4gICAgICBjb25zdCBidWZmZXJUZW1wbGF0ZSA9IChcclxuICAgICAgICBpbnB1dG1hc2suaXNSVExcclxuICAgICAgICAgID8gZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChpbnB1dG1hc2spLnNsaWNlKCkucmV2ZXJzZSgpXHJcbiAgICAgICAgICA6IGdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoaW5wdXRtYXNrKVxyXG4gICAgICApLmpvaW4oXCJcIik7XHJcbiAgICAgIGlmIChzaG93TWFza09uSG92ZXIpIHtcclxuICAgICAgICBIYW5kbGVOYXRpdmVQbGFjZWhvbGRlcihpbnB1dCwgYnVmZmVyVGVtcGxhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBzdWJtaXRFdmVudDogZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gdHJpZ2dlciBjaGFuZ2Ugb24gc3VibWl0IGlmIGFueVxyXG4gICAgY29uc3QgaW5wdXRtYXNrID0gdGhpcy5pbnB1dG1hc2ssXHJcbiAgICAgIG9wdHMgPSBpbnB1dG1hc2sub3B0cztcclxuXHJcbiAgICBpZiAoaW5wdXRtYXNrLnVuZG9WYWx1ZSAhPT0gaW5wdXRtYXNrLl92YWx1ZUdldCh0cnVlKSkge1xyXG4gICAgICBpbnB1dG1hc2suJGVsLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIC8qIG9wdHMuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgJiYgKi8gZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChcclxuICAgICAgICBpbnB1dG1hc2tcclxuICAgICAgKSA9PT0gLTEgJiZcclxuICAgICAgaW5wdXRtYXNrLl92YWx1ZUdldCAmJlxyXG4gICAgICBpbnB1dG1hc2suX3ZhbHVlR2V0KCkgPT09IGdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoaW5wdXRtYXNrKS5qb2luKFwiXCIpXHJcbiAgICApIHtcclxuICAgICAgaW5wdXRtYXNrLl92YWx1ZVNldChcIlwiKTsgLy8gY2xlYXIgbWFza3RlbXBsZXRlIG9uIHN1Ym1pdCBhbmQgc3RpbGwgaGFzIGZvY3VzXHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIG9wdHMuY2xlYXJJbmNvbXBsZXRlICYmXHJcbiAgICAgIGlzQ29tcGxldGUuY2FsbChpbnB1dG1hc2ssIGdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykpID09PSBmYWxzZVxyXG4gICAgKSB7XHJcbiAgICAgIGlucHV0bWFzay5fdmFsdWVTZXQoXCJcIik7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0cy5yZW1vdmVNYXNrT25TdWJtaXQpIHtcclxuICAgICAgaW5wdXRtYXNrLl92YWx1ZVNldChpbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpLCB0cnVlKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd3JpdGVCdWZmZXIoaW5wdXRtYXNrLmVsLCBnZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZXNldEV2ZW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBpbnB1dG1hc2sgPSB0aGlzLmlucHV0bWFzaztcclxuXHJcbiAgICBpbnB1dG1hc2sucmVmcmVzaFZhbHVlID0gdHJ1ZTsgLy8gaW5kaWNhdGUgYSBmb3JjZWQgcmVmcmVzaCB3aGVuIHRoZXJlIGlzIGEgY2FsbCB0byB0aGUgdmFsdWUgYmVmb3JlIGxlYXZpbmcgdGhlIHRyaWdnZXJpbmcgZXZlbnQgZm5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBhcHBseUlucHV0VmFsdWUoaW5wdXRtYXNrLmVsLCBpbnB1dG1hc2suX3ZhbHVlR2V0KHRydWUpKTtcclxuICAgIH0sIDApO1xyXG4gIH1cclxufTtcclxuIiwgImltcG9ydCB7IGllIH0gZnJvbSBcIi4vZW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IHsgRXZlbnRIYW5kbGVycyB9IGZyb20gXCIuL2V2ZW50aGFuZGxlcnNcIjtcclxuaW1wb3J0IHsga2V5cyB9IGZyb20gXCIuL2tleWNvZGUuanNcIjtcclxuaW1wb3J0IHtcclxuICBjYXJldCxcclxuICBkZXRlcm1pbmVOZXdDYXJldFBvc2l0aW9uLFxyXG4gIGdldEJ1ZmZlcixcclxuICBnZXRCdWZmZXJUZW1wbGF0ZSxcclxuICBnZXRMYXN0VmFsaWRQb3NpdGlvbixcclxuICBpc01hc2ssXHJcbiAgcmVzZXRNYXNrU2V0LFxyXG4gIHNlZWtOZXh0XHJcbn0gZnJvbSBcIi4vcG9zaXRpb25pbmdcIjtcclxuaW1wb3J0IHsgaXNDb21wbGV0ZSwgcmVmcmVzaEZyb21CdWZmZXIgfSBmcm9tIFwiLi92YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IGdldE1hc2tUZW1wbGF0ZSwgZ2V0UGxhY2Vob2xkZXIsIGdldFRlc3QgfSBmcm9tIFwiLi92YWxpZGF0aW9uLXRlc3RzXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIGFwcGx5SW5wdXRWYWx1ZSxcclxuICBjbGVhck9wdGlvbmFsVGFpbCxcclxuICBjaGVja1ZhbCxcclxuICBIYW5kbGVOYXRpdmVQbGFjZWhvbGRlcixcclxuICB1bm1hc2tlZHZhbHVlLFxyXG4gIHdyaXRlQnVmZmVyXHJcbn07XHJcblxyXG5mdW5jdGlvbiBhcHBseUlucHV0VmFsdWUoaW5wdXQsIHZhbHVlLCBpbml0aWFsRXZlbnQsIHN0cmljdCkge1xyXG4gIGNvbnN0IGlucHV0bWFzayA9IGlucHV0ID8gaW5wdXQuaW5wdXRtYXNrIDogdGhpcyxcclxuICAgIG9wdHMgPSBpbnB1dG1hc2sub3B0cztcclxuXHJcbiAgaW5wdXQuaW5wdXRtYXNrLnJlZnJlc2hWYWx1ZSA9IGZhbHNlO1xyXG4gIGlmIChzdHJpY3QgIT09IHRydWUgJiYgdHlwZW9mIG9wdHMub25CZWZvcmVNYXNrID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICB2YWx1ZSA9IG9wdHMub25CZWZvcmVNYXNrLmNhbGwoaW5wdXRtYXNrLCB2YWx1ZSwgb3B0cykgfHwgdmFsdWU7XHJcbiAgdmFsdWUgPSAodmFsdWUgfHwgXCJcIikudG9TdHJpbmcoKS5zcGxpdChcIlwiKTtcclxuICBjaGVja1ZhbChpbnB1dCwgdHJ1ZSwgZmFsc2UsIHZhbHVlLCBpbml0aWFsRXZlbnQpO1xyXG4gIGlucHV0bWFzay51bmRvVmFsdWUgPSBpbnB1dG1hc2suX3ZhbHVlR2V0KHRydWUpO1xyXG4gIGlmIChcclxuICAgIChvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzIHx8IG9wdHMuY2xlYXJJbmNvbXBsZXRlKSAmJlxyXG4gICAgaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpID09PVxyXG4gICAgICBnZXRCdWZmZXJUZW1wbGF0ZS5jYWxsKGlucHV0bWFzaykuam9pbihcIlwiKSAmJlxyXG4gICAgZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChpbnB1dG1hc2spID09PSAtMVxyXG4gICkge1xyXG4gICAgaW5wdXQuaW5wdXRtYXNrLl92YWx1ZVNldChcIlwiKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHRvZG8gcHV0IG9uIHByb3RvdHlwZT9cclxuZnVuY3Rpb24gY2xlYXJPcHRpb25hbFRhaWwoYnVmZmVyKSB7XHJcbiAgY29uc3QgaW5wdXRtYXNrID0gdGhpcztcclxuXHJcbiAgYnVmZmVyLmxlbmd0aCA9IDA7XHJcbiAgbGV0IHRlbXBsYXRlID0gZ2V0TWFza1RlbXBsYXRlLmNhbGwoXHJcbiAgICAgIGlucHV0bWFzayxcclxuICAgICAgdHJ1ZSxcclxuICAgICAgMCxcclxuICAgICAgdHJ1ZSxcclxuICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICB0cnVlXHJcbiAgICApLFxyXG4gICAgbG1udDtcclxuICB3aGlsZSAoKGxtbnQgPSB0ZW1wbGF0ZS5zaGlmdCgpKSAhPT0gdW5kZWZpbmVkKSBidWZmZXIucHVzaChsbW50KTtcclxuICByZXR1cm4gYnVmZmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1ZhbChpbnB1dCwgd3JpdGVPdXQsIHN0cmljdCwgbnB0dmwsIGluaXRpYXRpbmdFdmVudCkge1xyXG4gIGNvbnN0IGlucHV0bWFzayA9IGlucHV0ID8gaW5wdXQuaW5wdXRtYXNrIDogdGhpcyxcclxuICAgIG1hc2tzZXQgPSBpbnB1dG1hc2subWFza3NldCxcclxuICAgIG9wdHMgPSBpbnB1dG1hc2sub3B0cyxcclxuICAgICQgPSBpbnB1dG1hc2suZGVwZW5kZW5jeUxpYjtcclxuXHJcbiAgbGV0IGlucHV0VmFsdWUgPSBucHR2bC5zbGljZSgpLFxyXG4gICAgY2hhckNvZGVzID0gXCJcIixcclxuICAgIGluaXRpYWxOZHggPSAtMSxcclxuICAgIHJlc3VsdCxcclxuICAgIHNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXIgPSBvcHRzLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXI7XHJcbiAgb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyID0gXCJcIjsgLy8gc2VlIGlzc3VlICMyMzExXHJcblxyXG4gIGZ1bmN0aW9uIGlzVGVtcGxhdGVNYXRjaChuZHgsIGNoYXJDb2Rlcykge1xyXG4gICAgbGV0IHRhcmdldFRlbXBsYXRlID0gZ2V0TWFza1RlbXBsYXRlXHJcbiAgICAgICAgLmNhbGwoaW5wdXRtYXNrLCB0cnVlLCAwKVxyXG4gICAgICAgIC5zbGljZShuZHgsIHNlZWtOZXh0LmNhbGwoaW5wdXRtYXNrLCBuZHgsIGZhbHNlLCBmYWxzZSkpXHJcbiAgICAgICAgLmpvaW4oXCJcIilcclxuICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlwiKSxcclxuICAgICAgY2hhckNvZGVOZHggPSB0YXJnZXRUZW1wbGF0ZS5pbmRleE9mKGNoYXJDb2Rlcyk7XHJcbiAgICAvLyBzdHJpcCBzcGFjZXMgZnJvbSB0YXJnZXRUZW1wbGF0ZVxyXG4gICAgd2hpbGUgKGNoYXJDb2RlTmR4ID4gMCAmJiB0YXJnZXRUZW1wbGF0ZVtjaGFyQ29kZU5keCAtIDFdID09PSBcIiBcIilcclxuICAgICAgY2hhckNvZGVOZHgtLTtcclxuXHJcbiAgICBjb25zdCBtYXRjaCA9XHJcbiAgICAgIGNoYXJDb2RlTmR4ID09PSAwICYmXHJcbiAgICAgICFpc01hc2suY2FsbChpbnB1dG1hc2ssIG5keCkgJiZcclxuICAgICAgKGdldFRlc3QuY2FsbChpbnB1dG1hc2ssIG5keCkubWF0Y2gubmF0aXZlRGVmID09PSBjaGFyQ29kZXMuY2hhckF0KDApIHx8XHJcbiAgICAgICAgKGdldFRlc3QuY2FsbChpbnB1dG1hc2ssIG5keCkubWF0Y2guc3RhdGljID09PSB0cnVlICYmXHJcbiAgICAgICAgICBnZXRUZXN0LmNhbGwoaW5wdXRtYXNrLCBuZHgpLm1hdGNoLm5hdGl2ZURlZiA9PT1cclxuICAgICAgICAgICAgXCInXCIgKyBjaGFyQ29kZXMuY2hhckF0KDApKSB8fFxyXG4gICAgICAgIChnZXRUZXN0LmNhbGwoaW5wdXRtYXNrLCBuZHgpLm1hdGNoLm5hdGl2ZURlZiA9PT0gXCIgXCIgJiZcclxuICAgICAgICAgIChnZXRUZXN0LmNhbGwoaW5wdXRtYXNrLCBuZHggKyAxKS5tYXRjaC5uYXRpdmVEZWYgPT09XHJcbiAgICAgICAgICAgIGNoYXJDb2Rlcy5jaGFyQXQoMCkgfHxcclxuICAgICAgICAgICAgKGdldFRlc3QuY2FsbChpbnB1dG1hc2ssIG5keCArIDEpLm1hdGNoLnN0YXRpYyA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgIGdldFRlc3QuY2FsbChpbnB1dG1hc2ssIG5keCArIDEpLm1hdGNoLm5hdGl2ZURlZiA9PT1cclxuICAgICAgICAgICAgICAgIFwiJ1wiICsgY2hhckNvZGVzLmNoYXJBdCgwKSkpKSk7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAhbWF0Y2ggJiZcclxuICAgICAgY2hhckNvZGVOZHggPiAwICYmXHJcbiAgICAgICFpc01hc2suY2FsbChpbnB1dG1hc2ssIG5keCwgZmFsc2UsIHRydWUpXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgbmV4dFBvcyA9IHNlZWtOZXh0LmNhbGwoaW5wdXRtYXNrLCBuZHgpO1xyXG4gICAgICBpZiAoaW5wdXRtYXNrLmNhcmV0UG9zLmJlZ2luIDwgbmV4dFBvcykge1xyXG4gICAgICAgIGlucHV0bWFzay5jYXJldFBvcyA9IHsgYmVnaW46IG5leHRQb3MgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hdGNoO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRNYXNrU2V0LmNhbGwoaW5wdXRtYXNrLCBmYWxzZSk7XHJcbiAgaW5wdXRtYXNrLmNsaWNrZWQgPSAwOyAvLyByZXNldCBjbGljayBjb3VudGVyIHRvIGNvcnJlY3RseSBkZXRlcm1pbmUgdGhlIGNhcmV0cG9zaXRpb24gaW4gY2hlY2t2YWxcclxuICBpbml0aWFsTmR4ID0gb3B0cy5yYWRpeFBvaW50XHJcbiAgICA/IGRldGVybWluZU5ld0NhcmV0UG9zaXRpb24uY2FsbChcclxuICAgICAgICBpbnB1dG1hc2ssXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYmVnaW46IDAsXHJcbiAgICAgICAgICBlbmQ6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIG9wdHMuX19maW5hbmNlSW5wdXQgPT09IGZhbHNlID8gXCJyYWRpeEZvY3VzXCIgOiB1bmRlZmluZWRcclxuICAgICAgKS5iZWdpblxyXG4gICAgOiAwO1xyXG4gIG1hc2tzZXQucCA9IGluaXRpYWxOZHg7XHJcbiAgaW5wdXRtYXNrLmNhcmV0UG9zID0geyBiZWdpbjogaW5pdGlhbE5keCB9O1xyXG5cclxuICBsZXQgc3RhdGljTWF0Y2hlcyA9IFtdLFxyXG4gICAgcHJldkNhcmV0UG9zID0gaW5wdXRtYXNrLmNhcmV0UG9zO1xyXG4gIGlucHV0VmFsdWUuZm9yRWFjaChmdW5jdGlvbiAoY2hhckNvZGUsIG5keCkge1xyXG4gICAgaWYgKGNoYXJDb2RlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgLy8gaW5wdXRmYWxsYmFjayBzdHJpcHMgc29tZSBlbGVtZW50cyBvdXQgb2YgdGhlIGlucHV0YXJyYXkuICAkLmVhY2ggbG9naWNhbGx5IHByZXNlbnRzIHRoZW0gYXMgdW5kZWZpbmVkXHJcbiAgICAgIC8qIGlmIChtYXNrc2V0LnZhbGlkUG9zaXRpb25zW25keF0gPT09IHVuZGVmaW5lZCAmJiBpbnB1dFZhbHVlW25keF0gPT09IGdldFBsYWNlaG9sZGVyLmNhbGwoaW5wdXRtYXNrLCBuZHgpICYmIGlzTWFzay5jYWxsKGlucHV0bWFzaywgbmR4LCB0cnVlKSAmJlxyXG5cdFx0XHRcdGlzVmFsaWQuY2FsbChpbnB1dG1hc2ssIG5keCwgaW5wdXRWYWx1ZVtuZHhdLCB0cnVlLCB1bmRlZmluZWQsIHRydWUsIHRydWUpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdGlucHV0bWFzay5jYXJldFBvcy5iZWdpbisrO1xyXG5cdFx0XHR9IGVsc2UgKi9cclxuICAgICAgLy8gY29uc29sZS5sb2coXCJjYXJldCBcIiArIGlucHV0bWFzay5jYXJldFBvcy5iZWdpbik7XHJcbiAgICAgIGNvbnN0IGtleXByZXNzID0gbmV3ICQuRXZlbnQoXCJfY2hlY2t2YWxcIik7XHJcbiAgICAgIGtleXByZXNzLmtleSA9IGNoYXJDb2RlO1xyXG4gICAgICBjaGFyQ29kZXMgKz0gY2hhckNvZGU7XHJcbiAgICAgIGNvbnN0IGx2cCA9IGdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoaW5wdXRtYXNrLCB1bmRlZmluZWQsIHRydWUpO1xyXG4gICAgICBpZiAoIWlzVGVtcGxhdGVNYXRjaChpbml0aWFsTmR4LCBjaGFyQ29kZXMpKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoXHJcbiAgICAgICAgICBpbnB1dG1hc2ssXHJcbiAgICAgICAgICBrZXlwcmVzcyxcclxuICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgIHN0cmljdCxcclxuICAgICAgICAgIGlucHV0bWFzay5jYXJldFBvcy5iZWdpblxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgIGluaXRpYWxOZHggPSBpbnB1dG1hc2suY2FyZXRQb3MuYmVnaW4gKyAxO1xyXG4gICAgICAgICAgY2hhckNvZGVzID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ID0gRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoXHJcbiAgICAgICAgICBpbnB1dG1hc2ssXHJcbiAgICAgICAgICBrZXlwcmVzcyxcclxuICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgIHN0cmljdCxcclxuICAgICAgICAgIGx2cCArIDFcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICByZXN1bHQucG9zICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcmVzdWx0LnBvc10gJiZcclxuICAgICAgICAgIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcmVzdWx0LnBvc10ubWF0Y2guc3RhdGljID09PSB0cnVlICYmXHJcbiAgICAgICAgICBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Jlc3VsdC5wb3NdLmFsdGVybmF0aW9uID09PSB1bmRlZmluZWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHN0YXRpY01hdGNoZXMucHVzaChyZXN1bHQucG9zKTtcclxuICAgICAgICAgIGlmICghaW5wdXRtYXNrLmlzUlRMKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5mb3J3YXJkUG9zaXRpb24gPSByZXN1bHQucG9zICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd3JpdGVCdWZmZXIuY2FsbChcclxuICAgICAgICAgIGlucHV0bWFzayxcclxuICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgIGdldEJ1ZmZlci5jYWxsKGlucHV0bWFzayksXHJcbiAgICAgICAgICByZXN1bHQuZm9yd2FyZFBvc2l0aW9uLFxyXG4gICAgICAgICAga2V5cHJlc3MsXHJcbiAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaW5wdXRtYXNrLmNhcmV0UG9zID0ge1xyXG4gICAgICAgICAgYmVnaW46IHJlc3VsdC5mb3J3YXJkUG9zaXRpb24sXHJcbiAgICAgICAgICBlbmQ6IHJlc3VsdC5mb3J3YXJkUG9zaXRpb25cclxuICAgICAgICB9O1xyXG4gICAgICAgIHByZXZDYXJldFBvcyA9IGlucHV0bWFzay5jYXJldFBvcztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW25keF0gPT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgaW5wdXRWYWx1ZVtuZHhdID09PSBnZXRQbGFjZWhvbGRlci5jYWxsKGlucHV0bWFzaywgbmR4KSAmJlxyXG4gICAgICAgICAgaXNNYXNrLmNhbGwoaW5wdXRtYXNrLCBuZHgsIHRydWUpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpbnB1dG1hc2suY2FyZXRQb3MuYmVnaW4rKztcclxuICAgICAgICB9IGVsc2UgaW5wdXRtYXNrLmNhcmV0UG9zID0gcHJldkNhcmV0UG9zOyAvLyByZXN0b3JlIHRoZSBjYXJldCBwb3NpdGlvbiBmcm9tIGJlZm9yZSB0aGUgZmFpbGVkIHZhbGlkYXRpb25cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGlmIChzdGF0aWNNYXRjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgIGxldCBzbmR4LFxyXG4gICAgICB2YWxpZFBvcyxcclxuICAgICAgbmV4dFZhbGlkID0gc2Vla05leHQuY2FsbChpbnB1dG1hc2ssIC0xLCB1bmRlZmluZWQsIGZhbHNlKTtcclxuICAgIGlmIChcclxuICAgICAgKCFpc0NvbXBsZXRlLmNhbGwoaW5wdXRtYXNrLCBnZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spKSAmJlxyXG4gICAgICAgIHN0YXRpY01hdGNoZXMubGVuZ3RoIDw9IG5leHRWYWxpZCkgfHxcclxuICAgICAgKGlzQ29tcGxldGUuY2FsbChpbnB1dG1hc2ssIGdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykpICYmXHJcbiAgICAgICAgc3RhdGljTWF0Y2hlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgc3RhdGljTWF0Y2hlcy5sZW5ndGggIT09IG5leHRWYWxpZCAmJlxyXG4gICAgICAgIHN0YXRpY01hdGNoZXNbMF0gPT09IDApXHJcbiAgICApIHtcclxuICAgICAgLy8gc2hvdWxkIGNoZWNrIGlmIGlzIHNlcXVlbmNlIHN0YXJ0aW5nIGZyb20gMFxyXG4gICAgICBsZXQgbmV4dFNuZHggPSBuZXh0VmFsaWQ7XHJcbiAgICAgIHdoaWxlICgoc25keCA9IHN0YXRpY01hdGNoZXMuc2hpZnQoKSkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChzbmR4IDwgbmV4dFNuZHgpIHtcclxuICAgICAgICAgIGNvbnN0IGtleXByZXNzID0gbmV3ICQuRXZlbnQoXCJfY2hlY2t2YWxcIik7XHJcbiAgICAgICAgICB2YWxpZFBvcyA9IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbc25keF07XHJcbiAgICAgICAgICB2YWxpZFBvcy5nZW5lcmF0ZWRJbnB1dCA9IHRydWU7XHJcbiAgICAgICAgICBrZXlwcmVzcy5rZXkgPSB2YWxpZFBvcy5pbnB1dDtcclxuICAgICAgICAgIHJlc3VsdCA9IEV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudC5jYWxsKFxyXG4gICAgICAgICAgICBpbnB1dG1hc2ssXHJcbiAgICAgICAgICAgIGtleXByZXNzLFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgc3RyaWN0LFxyXG4gICAgICAgICAgICBuZXh0U25keFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgcmVzdWx0ICYmXHJcbiAgICAgICAgICAgIHJlc3VsdC5wb3MgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICByZXN1bHQucG9zICE9PSBzbmR4ICYmXHJcbiAgICAgICAgICAgIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcmVzdWx0LnBvc10gJiZcclxuICAgICAgICAgICAgbWFza3NldC52YWxpZFBvc2l0aW9uc1tyZXN1bHQucG9zXS5tYXRjaC5zdGF0aWMgPT09IHRydWVcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBzdGF0aWNNYXRjaGVzLnB1c2gocmVzdWx0LnBvcyk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCFyZXN1bHQpIGJyZWFrO1xyXG4gICAgICAgICAgbmV4dFNuZHgrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIG1hcmsgYWwgc3RhdGljcyBhcyBnZW5lcmF0ZWRcclxuICAgICAgLy8gd2hpbGUgKChzbmR4ID0gc3RhdGljTWF0Y2hlcy5wb3AoKSkpIHtcclxuICAgICAgLy8gXHR2YWxpZFBvcyA9IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbc25keF07XHJcbiAgICAgIC8vIFx0aWYgKHZhbGlkUG9zKSB7XHJcbiAgICAgIC8vIFx0XHR2YWxpZFBvcy5nZW5lcmF0ZWRJbnB1dCA9IHRydWU7XHJcbiAgICAgIC8vIFx0fVxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmICh3cml0ZU91dCkge1xyXG4gICAgd3JpdGVCdWZmZXIuY2FsbChcclxuICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICBpbnB1dCxcclxuICAgICAgZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKSxcclxuICAgICAgcmVzdWx0ID8gcmVzdWx0LmZvcndhcmRQb3NpdGlvbiA6IGlucHV0bWFzay5jYXJldFBvcy5iZWdpbixcclxuICAgICAgaW5pdGlhdGluZ0V2ZW50IHx8IG5ldyAkLkV2ZW50KFwiY2hlY2t2YWxcIiksXHJcbiAgICAgIGluaXRpYXRpbmdFdmVudCAmJlxyXG4gICAgICAgICgoaW5pdGlhdGluZ0V2ZW50LnR5cGUgPT09IFwiaW5wdXRcIiAmJlxyXG4gICAgICAgICAgaW5wdXRtYXNrLnVuZG9WYWx1ZSAhPT0gZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKS5qb2luKFwiXCIpKSB8fFxyXG4gICAgICAgICAgaW5pdGlhdGluZ0V2ZW50LnR5cGUgPT09IFwicGFzdGVcIilcclxuICAgICk7XHJcbiAgICAvLyBmb3IgKHZhciB2bmR4IGluIG1hc2tzZXQudmFsaWRQb3NpdGlvbnMpIHtcclxuICAgIC8vIFx0aWYgKG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbdm5keF0ubWF0Y2guZ2VuZXJhdGVkICE9PSB0cnVlKSB7IC8vb25seSByZW1vdmUgbm9uIGZvcmNlZCBnZW5lcmF0ZWRcclxuICAgIC8vIFx0XHRkZWxldGUgbWFza3NldC52YWxpZFBvc2l0aW9uc1t2bmR4XS5nZW5lcmF0ZWRJbnB1dDsgLy9jbGVhciBnZW5lcmF0ZWQgbWFya2luZ3MgfiBjb25zaWRlciBpbml0aWFsaXppbmcgd2l0aCBhICB2YWx1ZSBhcyBmdWxseSB0eXBlZFxyXG4gICAgLy8gXHR9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIG9wdHMuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciA9IHNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhhbmRsZU5hdGl2ZVBsYWNlaG9sZGVyKG5wdCwgdmFsdWUpIHtcclxuICBjb25zdCBpbnB1dG1hc2sgPSBucHQgPyBucHQuaW5wdXRtYXNrIDogdGhpcztcclxuXHJcbiAgaWYgKGllKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG5wdC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkgIT09IHZhbHVlICYmXHJcbiAgICAgIChucHQucGxhY2Vob2xkZXIgIT09IHZhbHVlIHx8IG5wdC5wbGFjZWhvbGRlciA9PT0gXCJcIilcclxuICAgICkge1xyXG4gICAgICBsZXQgYnVmZmVyID0gZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKS5zbGljZSgpLFxyXG4gICAgICAgIG5wdFZhbHVlID0gbnB0LmlucHV0bWFzay5fdmFsdWVHZXQoKTtcclxuICAgICAgaWYgKG5wdFZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGx2cCA9IGdldExhc3RWYWxpZFBvc2l0aW9uLmNhbGwoaW5wdXRtYXNrKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBsdnAgPT09IC0xICYmXHJcbiAgICAgICAgICBucHRWYWx1ZSA9PT0gZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChpbnB1dG1hc2spLmpvaW4oXCJcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGJ1ZmZlciA9IFtdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobHZwICE9PSAtMSkge1xyXG4gICAgICAgICAgLy8gY2xlYXJvdXQgb3B0aW9uYWwgdGFpbCBvZiB0aGUgbWFza1xyXG4gICAgICAgICAgY2xlYXJPcHRpb25hbFRhaWwuY2FsbChpbnB1dG1hc2ssIGJ1ZmZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdyaXRlQnVmZmVyKG5wdCwgYnVmZmVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAobnB0LnBsYWNlaG9sZGVyICE9PSB2YWx1ZSkge1xyXG4gICAgbnB0LnBsYWNlaG9sZGVyID0gdmFsdWU7XHJcbiAgICBpZiAobnB0LnBsYWNlaG9sZGVyID09PSBcIlwiKSBucHQucmVtb3ZlQXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bm1hc2tlZHZhbHVlKGlucHV0KSB7XHJcbiAgY29uc3QgaW5wdXRtYXNrID0gaW5wdXQgPyBpbnB1dC5pbnB1dG1hc2sgOiB0aGlzLFxyXG4gICAgb3B0cyA9IGlucHV0bWFzay5vcHRzLFxyXG4gICAgbWFza3NldCA9IGlucHV0bWFzay5tYXNrc2V0O1xyXG5cclxuICBpZiAoaW5wdXQpIHtcclxuICAgIGlmIChpbnB1dC5pbnB1dG1hc2sgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgICB9XHJcbiAgICBpZiAoaW5wdXQuaW5wdXRtYXNrICYmIGlucHV0LmlucHV0bWFzay5yZWZyZXNoVmFsdWUpIHtcclxuICAgICAgLy8gZm9yY2VkIHJlZnJlc2ggZnJvbSB0aGUgdmFsdWUgZm9ybS5yZXNldFxyXG4gICAgICBhcHBseUlucHV0VmFsdWUoaW5wdXQsIGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQodHJ1ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCB1bVZhbHVlID0gW10sXHJcbiAgICB2cHMgPSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zO1xyXG4gIGZvciAobGV0IHBuZHggPSAwLCB2cGwgPSB2cHMubGVuZ3RoOyBwbmR4IDwgdnBsOyBwbmR4KyspIHtcclxuICAgIGlmIChcclxuICAgICAgdnBzW3BuZHhdICYmXHJcbiAgICAgIHZwc1twbmR4XS5tYXRjaCAmJlxyXG4gICAgICAodnBzW3BuZHhdLm1hdGNoLnN0YXRpYyAhPSB0cnVlIHx8XHJcbiAgICAgICAgKEFycmF5LmlzQXJyYXkobWFza3NldC5tZXRhZGF0YSkgJiYgdnBzW3BuZHhdLmdlbmVyYXRlZElucHV0ICE9PSB0cnVlKSlcclxuICAgICkge1xyXG4gICAgICAvLyBvbmx5IGluY2x1ZGUgZ2VuZXJhdGVkIGlucHV0IHdpdGggbXVsdGlwbGUgbWFza3MgKGNoZWNrIG9uIG1ldGFkYXRhKVxyXG4gICAgICB1bVZhbHVlLnB1c2godnBzW3BuZHhdLmlucHV0KTtcclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHVubWFza2VkVmFsdWUgPVxyXG4gICAgdW1WYWx1ZS5sZW5ndGggPT09IDBcclxuICAgICAgPyBcIlwiXHJcbiAgICAgIDogKGlucHV0bWFzay5pc1JUTCA/IHVtVmFsdWUucmV2ZXJzZSgpIDogdW1WYWx1ZSkuam9pbihcIlwiKTtcclxuICBpZiAodHlwZW9mIG9wdHMub25Vbk1hc2sgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgY29uc3QgYnVmZmVyVmFsdWUgPSAoXHJcbiAgICAgIGlucHV0bWFzay5pc1JUTFxyXG4gICAgICAgID8gZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKS5zbGljZSgpLnJldmVyc2UoKVxyXG4gICAgICAgIDogZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKVxyXG4gICAgKS5qb2luKFwiXCIpO1xyXG4gICAgdW5tYXNrZWRWYWx1ZSA9IG9wdHMub25Vbk1hc2suY2FsbChcclxuICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICBidWZmZXJWYWx1ZSxcclxuICAgICAgdW5tYXNrZWRWYWx1ZSxcclxuICAgICAgb3B0c1xyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIHVubWFza2VkVmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyaXRlQnVmZmVyKGlucHV0LCBidWZmZXIsIGNhcmV0UG9zLCBldmVudCwgdHJpZ2dlckV2ZW50cykge1xyXG4gIGNvbnN0IGlucHV0bWFzayA9IGlucHV0ID8gaW5wdXQuaW5wdXRtYXNrIDogdGhpcyxcclxuICAgIG9wdHMgPSBpbnB1dG1hc2sub3B0cyxcclxuICAgICQgPSBpbnB1dG1hc2suZGVwZW5kZW5jeUxpYjtcclxuXHJcbiAgaWYgKGV2ZW50ICYmIHR5cGVvZiBvcHRzLm9uQmVmb3JlV3JpdGUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgLy8gICAgYnVmZmVyID0gYnVmZmVyLnNsaWNlKCk7IC8vcHJldmVudCB1bmNvbnRyb2xsZWQgbWFuaXB1bGF0aW9uIG9mIHRoZSBpbnRlcm5hbCBidWZmZXJcclxuICAgIGNvbnN0IHJlc3VsdCA9IG9wdHMub25CZWZvcmVXcml0ZS5jYWxsKFxyXG4gICAgICBpbnB1dG1hc2ssXHJcbiAgICAgIGV2ZW50LFxyXG4gICAgICBidWZmZXIsXHJcbiAgICAgIGNhcmV0UG9zLFxyXG4gICAgICBvcHRzXHJcbiAgICApO1xyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBpZiAocmVzdWx0LnJlZnJlc2hGcm9tQnVmZmVyKSB7XHJcbiAgICAgICAgY29uc3QgcmVmcmVzaCA9IHJlc3VsdC5yZWZyZXNoRnJvbUJ1ZmZlcjtcclxuICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlci5jYWxsKFxyXG4gICAgICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICAgICAgcmVmcmVzaCA9PT0gdHJ1ZSA/IHJlZnJlc2ggOiByZWZyZXNoLnN0YXJ0LFxyXG4gICAgICAgICAgcmVmcmVzaC5lbmQsXHJcbiAgICAgICAgICByZXN1bHQuYnVmZmVyIHx8IGJ1ZmZlclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnVmZmVyID0gZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY2FyZXRQb3MgIT09IHVuZGVmaW5lZClcclxuICAgICAgICBjYXJldFBvcyA9IHJlc3VsdC5jYXJldCAhPT0gdW5kZWZpbmVkID8gcmVzdWx0LmNhcmV0IDogY2FyZXRQb3M7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChpbnB1dCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlU2V0KGJ1ZmZlci5qb2luKFwiXCIpKTtcclxuICAgIGlmIChcclxuICAgICAgY2FyZXRQb3MgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAoZXZlbnQgPT09IHVuZGVmaW5lZCB8fCBldmVudC50eXBlICE9PSBcImJsdXJcIilcclxuICAgICkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhjYXJldFBvcyk7XHJcbiAgICAgIGNhcmV0LmNhbGwoXHJcbiAgICAgICAgaW5wdXRtYXNrLFxyXG4gICAgICAgIGlucHV0LFxyXG4gICAgICAgIGNhcmV0UG9zLFxyXG4gICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgZXZlbnQgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgZXZlbnQudHlwZSA9PT0gXCJrZXlkb3duXCIgJiZcclxuICAgICAgICAgIChldmVudC5rZXkgPT09IGtleXMuRGVsZXRlIHx8IGV2ZW50LmtleSA9PT0ga2V5cy5CYWNrc3BhY2UpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpbnB1dC5pbnB1dG1hc2sud3JpdGVCdWZmZXJIb29rID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgaW5wdXQuaW5wdXRtYXNrLndyaXRlQnVmZmVySG9vayhjYXJldFBvcyk7XHJcbiAgICBpZiAodHJpZ2dlckV2ZW50cyA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KSxcclxuICAgICAgICBucHRWYWwgPSBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCk7XHJcbiAgICAgIGlucHV0LmlucHV0bWFzay5za2lwSW5wdXRFdmVudCA9IHRydWU7XHJcbiAgICAgICRpbnB1dC50cmlnZ2VyKFwiaW5wdXRcIik7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIHRpbWVvdXQgbmVlZGVkIGZvciBJRVxyXG4gICAgICAgIGlmIChucHRWYWwgPT09IGdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoaW5wdXRtYXNrKS5qb2luKFwiXCIpKSB7XHJcbiAgICAgICAgICAkaW5wdXQudHJpZ2dlcihcImNsZWFyZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc0NvbXBsZXRlLmNhbGwoaW5wdXRtYXNrLCBidWZmZXIpID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAkaW5wdXQudHJpZ2dlcihcImNvbXBsZXRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBIYW5kbGVOYXRpdmVQbGFjZWhvbGRlciB9IGZyb20gXCIuL2lucHV0SGFuZGxpbmdcIjtcclxuaW1wb3J0IElucHV0bWFzayBmcm9tIFwiLi9pbnB1dG1hc2tcIjtcclxuaW1wb3J0IHsga2V5cyB9IGZyb20gXCIuL2tleWNvZGUuanNcIjtcclxuaW1wb3J0IHsgZ2V0QnVmZmVyVGVtcGxhdGUgfSBmcm9tIFwiLi9wb3NpdGlvbmluZ1wiO1xyXG5cclxuZXhwb3J0IHsgRXZlbnRSdWxlciB9O1xyXG5cclxudmFyIEV2ZW50UnVsZXIgPSB7XHJcbiAgb246IGZ1bmN0aW9uIChpbnB1dCwgZXZlbnROYW1lLCBldmVudEhhbmRsZXIpIHtcclxuICAgIGNvbnN0ICQgPSBpbnB1dC5pbnB1dG1hc2suZGVwZW5kZW5jeUxpYjtcclxuXHJcbiAgICBsZXQgZXYgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSB7XHJcbiAgICAgICAgZSA9IGUub3JpZ2luYWxFdmVudCB8fCBlOyAvLyBnZXQgb3JpZ2luYWwgZXZlbnQgZnJvbSBqcXVlcnkgZXZlbmJ0XHJcbiAgICAgICAgYXJndW1lbnRzWzBdID0gZTtcclxuICAgICAgfVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlLnR5cGUpO1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXMsXHJcbiAgICAgICAgYXJncyxcclxuICAgICAgICBpbnB1dG1hc2sgPSB0aGF0LmlucHV0bWFzayxcclxuICAgICAgICBvcHRzID0gaW5wdXRtYXNrID8gaW5wdXRtYXNrLm9wdHMgOiB1bmRlZmluZWQ7XHJcbiAgICAgIGlmIChpbnB1dG1hc2sgPT09IHVuZGVmaW5lZCAmJiB0aGlzLm5vZGVOYW1lICE9PSBcIkZPUk1cIikge1xyXG4gICAgICAgIC8vIGhhcHBlbnMgd2hlbiBjbG9uaW5nIGFuIG9iamVjdCB3aXRoIGpxdWVyeS5jbG9uZVxyXG4gICAgICAgIGNvbnN0IGltT3B0cyA9ICQuZGF0YSh0aGF0LCBcIl9pbnB1dG1hc2tfb3B0c1wiKTtcclxuICAgICAgICAkKHRoYXQpLm9mZigpOyAvLyB1bmJpbmQgYWxsIGV2ZW50c1xyXG4gICAgICAgIGlmIChpbU9wdHMpIHtcclxuICAgICAgICAgIG5ldyBJbnB1dG1hc2soaW1PcHRzKS5tYXNrKHRoYXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAhW1wic3VibWl0XCIsIFwicmVzZXRcIiwgXCJzZXR2YWx1ZVwiXS5pbmNsdWRlcyhlLnR5cGUpICYmXHJcbiAgICAgICAgdGhpcy5ub2RlTmFtZSAhPT0gXCJGT1JNXCIgJiZcclxuICAgICAgICAodGhhdC5kaXNhYmxlZCB8fFxyXG4gICAgICAgICAgKHRoYXQucmVhZE9ubHkgJiZcclxuICAgICAgICAgICAgIShcclxuICAgICAgICAgICAgICAoZS50eXBlID09PSBcImtleWRvd25cIiAmJiBlLmN0cmxLZXkgJiYgZS5rZXkgPT09IGtleXMuYykgfHxcclxuICAgICAgICAgICAgICAob3B0cy50YWJUaHJvdWdoID09PSBmYWxzZSAmJiBlLmtleSA9PT0ga2V5cy5UYWIpXHJcbiAgICAgICAgICAgICkpKVxyXG4gICAgICApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgXCJpbnB1dFwiOlxyXG4gICAgICAgICAgICBpZiAoaW5wdXRtYXNrLnNraXBJbnB1dEV2ZW50ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgaW5wdXRtYXNrLnNraXBJbnB1dEV2ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaWYgKG1vYmlsZSkgeyAvL3RoaXMgY2F1c2VzIHByb2JsZW0gc2VlICMyMjIwXHJcbiAgICAgICAgICAgIC8vIFx0YXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgICAgICAgLy8gXHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgLy9uZWVkZWQgZm9yIGNhcmV0IHNlbGVjdGlvbiB3aGVuIGVudGVyaW5nIGEgY2hhciBvbiBBbmRyb2lkIDggLSAjMTgxOFxyXG4gICAgICAgICAgICAvLyBcdFx0ZXZlbnRIYW5kbGVyLmFwcGx5KHRoYXQsIGFyZ3MpO1xyXG4gICAgICAgICAgICAvLyBcdFx0Y2FyZXQodGhhdCwgdGhhdC5pbnB1dG1hc2suY2FyZXRQb3MsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vIFx0fSwgMCk7XHJcbiAgICAgICAgICAgIC8vIFx0cmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcImNsaWNrXCI6XHJcbiAgICAgICAgICBjYXNlIFwiZm9jdXNcIjpcclxuICAgICAgICAgICAgaWYgKGlucHV0bWFzay52YWxpZGF0aW9uRXZlbnQpIHtcclxuICAgICAgICAgICAgICAvLyAjODQxXHJcbiAgICAgICAgICAgICAgaW5wdXRtYXNrLnZhbGlkYXRpb25FdmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIGlucHV0LmJsdXIoKTtcclxuICAgICAgICAgICAgICBIYW5kbGVOYXRpdmVQbGFjZWhvbGRlcihcclxuICAgICAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICAgICAgKGlucHV0bWFzay5pc1JUTFxyXG4gICAgICAgICAgICAgICAgICA/IGdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoaW5wdXRtYXNrKS5zbGljZSgpLnJldmVyc2UoKVxyXG4gICAgICAgICAgICAgICAgICA6IGdldEJ1ZmZlclRlbXBsYXRlLmNhbGwoaW5wdXRtYXNrKVxyXG4gICAgICAgICAgICAgICAgKS5qb2luKFwiXCIpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgfSwgb3B0cy52YWxpZGF0aW9uRXZlbnRUaW1lT3V0KTtcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgLy8gbmVlZGVkIGZvciBDaHJvbWUgfiBpbml0aWFsIHNlbGVjdGlvbiBjbGVhcnMgYWZ0ZXIgdGhlIGNsaWNrZXZlbnRcclxuICAgICAgICAgICAgICBpZiAoIWlucHV0LmlucHV0bWFzaykge1xyXG4gICAgICAgICAgICAgICAgLy8gYGlucHV0bWFzay5yZW1vdmUoKWAgd2FzIGNhbGxlZCBiZWZvcmUgdGhpcyBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBldmVudEhhbmRsZXIuYXBwbHkodGhhdCwgYXJncyk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICByZXR1cm4gLyogZmFsc2UgKi87IC8vICMyNDIzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJldHVyblZhbCA9IGV2ZW50SGFuZGxlci5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xyXG4gICAgICAgIGlmIChyZXR1cm5WYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYgKFtcInN1Ym1pdFwiLCBcInJlc2V0XCJdLmluY2x1ZGVzKGV2ZW50TmFtZSkpIHtcclxuICAgICAgZXYgPSBldi5iaW5kKGlucHV0KTsgLy8gYmluZCBjcmVhdGVzIGEgbmV3IGV2ZW50aGFuZGxlciAod3JhcClcclxuICAgICAgaWYgKGlucHV0LmZvcm0gIT09IG51bGwpICQoaW5wdXQuZm9ybSkub24oZXZlbnROYW1lLCBldik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGlucHV0KS5vbihldmVudE5hbWUsIGV2KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBrZWVwIGluc3RhbmNlIG9mIHRoZSBldmVudFxyXG4gICAgaW5wdXQuaW5wdXRtYXNrLmV2ZW50c1tldmVudE5hbWVdID0gaW5wdXQuaW5wdXRtYXNrLmV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xyXG4gICAgaW5wdXQuaW5wdXRtYXNrLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZXYpO1xyXG4gIH0sXHJcbiAgb2ZmOiBmdW5jdGlvbiAoaW5wdXQsIGV2ZW50KSB7XHJcbiAgICBpZiAoaW5wdXQuaW5wdXRtYXNrICYmIGlucHV0LmlucHV0bWFzay5ldmVudHMpIHtcclxuICAgICAgY29uc3QgJCA9IGlucHV0LmlucHV0bWFzay5kZXBlbmRlbmN5TGliO1xyXG4gICAgICBsZXQgZXZlbnRzID0gaW5wdXQuaW5wdXRtYXNrLmV2ZW50cztcclxuICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnRzID0gW107XHJcbiAgICAgICAgZXZlbnRzW2V2ZW50XSA9IGlucHV0LmlucHV0bWFzay5ldmVudHNbZXZlbnRdO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIGluIGV2ZW50cykge1xyXG4gICAgICAgIGNvbnN0IGV2QXJyID0gZXZlbnRzW2V2ZW50TmFtZV07XHJcbiAgICAgICAgd2hpbGUgKGV2QXJyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvbnN0IGV2ID0gZXZBcnIucG9wKCk7XHJcbiAgICAgICAgICBpZiAoW1wic3VibWl0XCIsIFwicmVzZXRcIl0uaW5jbHVkZXMoZXZlbnROYW1lKSkge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQuZm9ybSAhPT0gbnVsbCkgJChpbnB1dC5mb3JtKS5vZmYoZXZlbnROYW1lLCBldik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKGlucHV0KS5vZmYoZXZlbnROYW1lLCBldik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSBpbnB1dC5pbnB1dG1hc2suZXZlbnRzW2V2ZW50TmFtZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsICJpbXBvcnQgeyBpcGhvbmUsIG1vYmlsZSB9IGZyb20gXCIuL2Vudmlyb25tZW50XCI7XHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlcnMgfSBmcm9tIFwiLi9ldmVudGhhbmRsZXJzXCI7XHJcbmltcG9ydCB7IEV2ZW50UnVsZXIgfSBmcm9tIFwiLi9ldmVudHJ1bGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgYXBwbHlJbnB1dFZhbHVlLFxyXG4gIGNsZWFyT3B0aW9uYWxUYWlsLFxyXG4gIHdyaXRlQnVmZmVyXHJcbn0gZnJvbSBcIi4vaW5wdXRIYW5kbGluZ1wiO1xyXG5pbXBvcnQge1xyXG4gIGNhcmV0LFxyXG4gIGdldEJ1ZmZlcixcclxuICBnZXRCdWZmZXJUZW1wbGF0ZSxcclxuICBnZXRMYXN0VmFsaWRQb3NpdGlvbixcclxuICByZXNldE1hc2tTZXQsXHJcbiAgc2Vla05leHRcclxufSBmcm9tIFwiLi9wb3NpdGlvbmluZ1wiO1xyXG5pbXBvcnQgeyBpc0NvbXBsZXRlIH0gZnJvbSBcIi4vdmFsaWRhdGlvblwiO1xyXG5cclxuZXhwb3J0IHsgbWFzayB9O1xyXG5cclxuLy8gdG9kbyBwdXQgb24gdGhlIHByb3RvdHlwZT9cclxuZnVuY3Rpb24gbWFzaygpIHtcclxuICBjb25zdCBpbnB1dG1hc2sgPSB0aGlzLFxyXG4gICAgb3B0cyA9IHRoaXMub3B0cyxcclxuICAgIGVsID0gdGhpcy5lbCxcclxuICAgICQgPSB0aGlzLmRlcGVuZGVuY3lMaWI7XHJcblxyXG4gIGZ1bmN0aW9uIGlzRWxlbWVudFR5cGVTdXBwb3J0ZWQoaW5wdXQsIG9wdHMpIHtcclxuICAgIGZ1bmN0aW9uIHBhdGNoVmFsdWVQcm9wZXJ0eShucHQpIHtcclxuICAgICAgbGV0IHZhbHVlR2V0LCB2YWx1ZVNldDtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHBhdGNoVmFsaG9vayh0eXBlKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgJC52YWxIb29rcyAmJlxyXG4gICAgICAgICAgKCQudmFsSG9va3NbdHlwZV0gPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAkLnZhbEhvb2tzW3R5cGVdLmlucHV0bWFza3BhdGNoICE9PSB0cnVlKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgY29uc3QgdmFsaG9va0dldCA9XHJcbiAgICAgICAgICAgICAgJC52YWxIb29rc1t0eXBlXSAmJiAkLnZhbEhvb2tzW3R5cGVdLmdldFxyXG4gICAgICAgICAgICAgICAgPyAkLnZhbEhvb2tzW3R5cGVdLmdldFxyXG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoZWxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2YWxob29rU2V0ID1cclxuICAgICAgICAgICAgICAkLnZhbEhvb2tzW3R5cGVdICYmICQudmFsSG9va3NbdHlwZV0uc2V0XHJcbiAgICAgICAgICAgICAgICA/ICQudmFsSG9va3NbdHlwZV0uc2V0XHJcbiAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChlbGVtLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0udmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbTtcclxuICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAkLnZhbEhvb2tzW3R5cGVdID0ge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChlbGVtKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGVsZW0uaW5wdXRtYXNrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS5pbnB1dG1hc2sub3B0cy5hdXRvVW5tYXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWxob29rR2V0KGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dG1hc2ssXHJcbiAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtLmlucHV0bWFzay5tYXNrc2V0LnZhbGlkUG9zaXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICkgIT09IC0xIHx8IG9wdHMubnVsbGFibGUgIT09IHRydWVcclxuICAgICAgICAgICAgICAgICAgICA/IHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGhvb2tHZXQoZWxlbSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChlbGVtLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbGhvb2tTZXQoZWxlbSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgIGlmIChlbGVtLmlucHV0bWFzaykge1xyXG4gICAgICAgICAgICAgICAgYXBwbHlJbnB1dFZhbHVlKGVsZW0sIHZhbHVlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5wdXRtYXNrcGF0Y2g6IHRydWVcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBnZXR0ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRtYXNrKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dG1hc2sub3B0cy5hdXRvVW5tYXNrXHJcbiAgICAgICAgICAgID8gdGhpcy5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpXHJcbiAgICAgICAgICAgIDogZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChpbnB1dG1hc2spICE9PSAtMSB8fFxyXG4gICAgICAgICAgICAgIG9wdHMubnVsbGFibGUgIT09IHRydWVcclxuICAgICAgICAgICAgPyAodGhpcy5pbnB1dG1hc2suc2hhZG93Um9vdCB8fCB0aGlzLm93bmVyRG9jdW1lbnQpXHJcbiAgICAgICAgICAgICAgICAuYWN0aXZlRWxlbWVudCA9PT0gdGhpcyAmJiBvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzXHJcbiAgICAgICAgICAgICAgPyAoaW5wdXRtYXNrLmlzUlRMXHJcbiAgICAgICAgICAgICAgICAgID8gY2xlYXJPcHRpb25hbFRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKGlucHV0bWFzaywgZ2V0QnVmZmVyLmNhbGwoaW5wdXRtYXNrKS5zbGljZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgICAgICAgICAgICA6IGNsZWFyT3B0aW9uYWxUYWlsLmNhbGwoXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dG1hc2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICBnZXRCdWZmZXIuY2FsbChpbnB1dG1hc2spLnNsaWNlKClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApLmpvaW4oXCJcIilcclxuICAgICAgICAgICAgICA6IHZhbHVlR2V0LmNhbGwodGhpcylcclxuICAgICAgICAgICAgOiBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWVHZXQuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHNldHRlcih2YWx1ZSkge1xyXG4gICAgICAgIHZhbHVlU2V0LmNhbGwodGhpcywgdmFsdWUpO1xyXG4gICAgICAgIGlmICh0aGlzLmlucHV0bWFzaykge1xyXG4gICAgICAgICAgYXBwbHlJbnB1dFZhbHVlKHRoaXMsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIGluc3RhbGxOYXRpdmVWYWx1ZVNldEZhbGxiYWNrKG5wdCkge1xyXG4gICAgICAgIEV2ZW50UnVsZXIub24obnB0LCBcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLFxyXG4gICAgICAgICAgICB2YWx1ZSA9IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQodHJ1ZSksXHJcbiAgICAgICAgICAgIGJ1ZmZlclZhbHVlID0gKFxyXG4gICAgICAgICAgICAgIGlucHV0LmlucHV0bWFzay5pc1JUTFxyXG4gICAgICAgICAgICAgICAgPyBnZXRCdWZmZXIuY2FsbChpbnB1dC5pbnB1dG1hc2spLnNsaWNlKCkucmV2ZXJzZSgpXHJcbiAgICAgICAgICAgICAgICA6IGdldEJ1ZmZlci5jYWxsKGlucHV0LmlucHV0bWFzaylcclxuICAgICAgICAgICAgKS5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgaWYgKHZhbHVlICE9IGJ1ZmZlclZhbHVlKSB7XHJcbiAgICAgICAgICAgIGFwcGx5SW5wdXRWYWx1ZShpbnB1dCwgdmFsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIW5wdC5pbnB1dG1hc2suX192YWx1ZUdldCkge1xyXG4gICAgICAgIGlmIChvcHRzLm5vVmFsdWVQYXRjaGluZyAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVQcm9wZXJ0eSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZlxyXG4gICAgICAgICAgICAgID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcclxuICAgICAgICAgICAgICAgICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKG5wdCksXHJcbiAgICAgICAgICAgICAgICAgIFwidmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpZiAodmFsdWVQcm9wZXJ0eSAmJiB2YWx1ZVByb3BlcnR5LmdldCAmJiB2YWx1ZVByb3BlcnR5LnNldCkge1xyXG4gICAgICAgICAgICAgIHZhbHVlR2V0ID0gdmFsdWVQcm9wZXJ0eS5nZXQ7XHJcbiAgICAgICAgICAgICAgdmFsdWVTZXQgPSB2YWx1ZVByb3BlcnR5LnNldDtcclxuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobnB0LCBcInZhbHVlXCIsIHtcclxuICAgICAgICAgICAgICAgIGdldDogZ2V0dGVyLFxyXG4gICAgICAgICAgICAgICAgc2V0OiBzZXR0ZXIsXHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChucHQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcImlucHV0XCIpIHtcclxuICAgICAgICAgICAgICB2YWx1ZUdldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgdmFsdWVTZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucHQsIFwidmFsdWVcIiwge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiBnZXR0ZXIsXHJcbiAgICAgICAgICAgICAgICBzZXQ6IHNldHRlcixcclxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5fX2xvb2t1cEdldHRlcl9fICYmXHJcbiAgICAgICAgICAgIG5wdC5fX2xvb2t1cEdldHRlcl9fKFwidmFsdWVcIilcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB2YWx1ZUdldCA9IG5wdC5fX2xvb2t1cEdldHRlcl9fKFwidmFsdWVcIik7XHJcbiAgICAgICAgICAgIHZhbHVlU2V0ID0gbnB0Ll9fbG9va3VwU2V0dGVyX18oXCJ2YWx1ZVwiKTtcclxuXHJcbiAgICAgICAgICAgIG5wdC5fX2RlZmluZUdldHRlcl9fKFwidmFsdWVcIiwgZ2V0dGVyKTtcclxuICAgICAgICAgICAgbnB0Ll9fZGVmaW5lU2V0dGVyX18oXCJ2YWx1ZVwiLCBzZXR0ZXIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbnB0LmlucHV0bWFzay5fX3ZhbHVlR2V0ID0gdmFsdWVHZXQ7IC8vIHN0b3JlIG5hdGl2ZSBwcm9wZXJ0eSBnZXR0ZXJcclxuICAgICAgICAgIG5wdC5pbnB1dG1hc2suX192YWx1ZVNldCA9IHZhbHVlU2V0OyAvLyBzdG9yZSBuYXRpdmUgcHJvcGVydHkgc2V0dGVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5wdC5pbnB1dG1hc2suX3ZhbHVlR2V0ID0gZnVuY3Rpb24gKG92ZXJydWxlUlRMKSB7XHJcbiAgICAgICAgICByZXR1cm4gaW5wdXRtYXNrLmlzUlRMICYmIG92ZXJydWxlUlRMICE9PSB0cnVlXHJcbiAgICAgICAgICAgID8gdmFsdWVHZXQuY2FsbCh0aGlzLmVsKS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKVxyXG4gICAgICAgICAgICA6IHZhbHVlR2V0LmNhbGwodGhpcy5lbCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBucHQuaW5wdXRtYXNrLl92YWx1ZVNldCA9IGZ1bmN0aW9uICh2YWx1ZSwgb3ZlcnJ1bGVSVEwpIHtcclxuICAgICAgICAgIC8vIG51bGwgY2hlY2sgaXMgbmVlZGVkIGZvciBJRTggPT4gb3RoZXJ3aXNlIGNvbnZlcnRzIHRvIFwibnVsbFwiXHJcbiAgICAgICAgICB2YWx1ZVNldC5jYWxsKFxyXG4gICAgICAgICAgICB0aGlzLmVsLFxyXG4gICAgICAgICAgICB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgICAgICAgOiBvdmVycnVsZVJUTCAhPT0gdHJ1ZSAmJiBpbnB1dG1hc2suaXNSVExcclxuICAgICAgICAgICAgICA/IHZhbHVlLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpXHJcbiAgICAgICAgICAgICAgOiB2YWx1ZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodmFsdWVHZXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgLy8ganF1ZXJ5LnZhbCBmYWxsYmFja1xyXG4gICAgICAgICAgdmFsdWVHZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHZhbHVlU2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBwYXRjaFZhbGhvb2sobnB0LnR5cGUpO1xyXG4gICAgICAgICAgaW5zdGFsbE5hdGl2ZVZhbHVlU2V0RmFsbGJhY2sobnB0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiAoaW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcInRleHRhcmVhXCIpIHtcclxuICAgIC8vICAgICBvcHRzLmlnbm9yYWJsZXMucHVzaChrZXlzLkVudGVyKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBsZXQgZWxlbWVudFR5cGUgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpLFxyXG4gICAgICBpc1N1cHBvcnRlZCA9XHJcbiAgICAgICAgKGlucHV0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiICYmXHJcbiAgICAgICAgICBvcHRzLnN1cHBvcnRzSW5wdXRUeXBlLmluY2x1ZGVzKGVsZW1lbnRUeXBlKSkgfHxcclxuICAgICAgICBpbnB1dC5pc0NvbnRlbnRFZGl0YWJsZSB8fFxyXG4gICAgICAgIGlucHV0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0ZXh0YXJlYVwiO1xyXG4gICAgaWYgKCFpc1N1cHBvcnRlZCkge1xyXG4gICAgICBpZiAoaW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIpIHtcclxuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBlbGVtZW50VHlwZSk7XHJcbiAgICAgICAgaXNTdXBwb3J0ZWQgPSBlbC50eXBlID09PSBcInRleHRcIjsgLy8gYXBwbHkgbWFzayBvbmx5IGlmIHRoZSB0eXBlIGlzIG5vdCBuYXRpdmVseSBzdXBwb3J0ZWRcclxuICAgICAgICBlbCA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXNTdXBwb3J0ZWQgPSBcInBhcnRpYWxcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGlzU3VwcG9ydGVkICE9PSBmYWxzZSkge1xyXG4gICAgICBwYXRjaFZhbHVlUHJvcGVydHkoaW5wdXQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5wdXQuaW5wdXRtYXNrID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzU3VwcG9ydGVkO1xyXG4gIH1cclxuXHJcbiAgLy8gdW5iaW5kIGFsbCBldmVudHMgLSB0byBtYWtlIHN1cmUgdGhhdCBubyBvdGhlciBtYXNrIHdpbGwgaW50ZXJmZXJlIHdoZW4gcmUtbWFza2luZ1xyXG4gIEV2ZW50UnVsZXIub2ZmKGVsKTtcclxuICBjb25zdCBpc1N1cHBvcnRlZCA9IGlzRWxlbWVudFR5cGVTdXBwb3J0ZWQoZWwsIG9wdHMpO1xyXG4gIGlmIChpc1N1cHBvcnRlZCAhPT0gZmFsc2UpIHtcclxuICAgIGlucHV0bWFzay5vcmlnaW5hbFBsYWNlaG9sZGVyID0gZWwucGxhY2Vob2xkZXI7XHJcblxyXG4gICAgLy8gcmVhZCBtYXhsZW5ndGggcHJvcCBmcm9tIGVsXHJcbiAgICBpbnB1dG1hc2subWF4TGVuZ3RoID0gZWwgIT09IHVuZGVmaW5lZCA/IGVsLm1heExlbmd0aCA6IHVuZGVmaW5lZDtcclxuICAgIGlmIChpbnB1dG1hc2subWF4TGVuZ3RoID09PSAtMSkgaW5wdXRtYXNrLm1heExlbmd0aCA9IHVuZGVmaW5lZDtcclxuICAgIGlmIChcImlucHV0TW9kZVwiIGluIGVsICYmIGVsLmdldEF0dHJpYnV0ZShcImlucHV0bW9kZVwiKSA9PT0gbnVsbCkge1xyXG4gICAgICBlbC5pbnB1dE1vZGUgPSBvcHRzLmlucHV0bW9kZTtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKFwiaW5wdXRtb2RlXCIsIG9wdHMuaW5wdXRtb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNTdXBwb3J0ZWQgPT09IHRydWUpIHtcclxuICAgICAgb3B0cy5zaG93TWFza09uRm9jdXMgPVxyXG4gICAgICAgIG9wdHMuc2hvd01hc2tPbkZvY3VzICYmXHJcbiAgICAgICAgW1wiY2MtbnVtYmVyXCIsIFwiY2MtZXhwXCJdLmluZGV4T2YoZWwuYXV0b2NvbXBsZXRlKSA9PT0gLTE7XHJcbiAgICAgIGlmIChpcGhvbmUpIHtcclxuICAgICAgICAvLyBzZWxlY3RpbmcgdGhlIGNhcmV0IHNob3dzIGFzIGEgc2VsZWN0aW9uIG9uIGlwaG9uZVxyXG4gICAgICAgIG9wdHMuaW5zZXJ0TW9kZVZpc3VhbCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGRpc2FibGUgYXV0b2NvcnJlY3RcclxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJhdXRvY29ycmVjdFwiLCBcIm9mZlwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYmluZCBldmVudHNcclxuICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJzdWJtaXRcIiwgRXZlbnRIYW5kbGVycy5zdWJtaXRFdmVudCk7XHJcbiAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwicmVzZXRcIiwgRXZlbnRIYW5kbGVycy5yZXNldEV2ZW50KTtcclxuICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJibHVyXCIsIEV2ZW50SGFuZGxlcnMuYmx1ckV2ZW50KTtcclxuICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJmb2N1c1wiLCBFdmVudEhhbmRsZXJzLmZvY3VzRXZlbnQpO1xyXG4gICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcImludmFsaWRcIiwgRXZlbnRIYW5kbGVycy5pbnZhbGlkRXZlbnQpO1xyXG4gICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcImNsaWNrXCIsIEV2ZW50SGFuZGxlcnMuY2xpY2tFdmVudCk7XHJcbiAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwibW91c2VsZWF2ZVwiLCBFdmVudEhhbmRsZXJzLm1vdXNlbGVhdmVFdmVudCk7XHJcbiAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwibW91c2VlbnRlclwiLCBFdmVudEhhbmRsZXJzLm1vdXNlZW50ZXJFdmVudCk7XHJcbiAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwicGFzdGVcIiwgRXZlbnRIYW5kbGVycy5wYXN0ZUV2ZW50KTtcclxuICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJjdXRcIiwgRXZlbnRIYW5kbGVycy5jdXRFdmVudCk7XHJcbiAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwiY29tcGxldGVcIiwgb3B0cy5vbmNvbXBsZXRlKTtcclxuICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJpbmNvbXBsZXRlXCIsIG9wdHMub25pbmNvbXBsZXRlKTtcclxuICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJjbGVhcmVkXCIsIG9wdHMub25jbGVhcmVkKTtcclxuICAgICAgaWYgKG9wdHMuaW5wdXRFdmVudE9ubHkgIT09IHRydWUpIHtcclxuICAgICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcImtleWRvd25cIiwgRXZlbnRIYW5kbGVycy5rZXlFdmVudCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1vYmlsZSB8fCBvcHRzLmlucHV0RXZlbnRPbmx5KSB7XHJcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwibWF4TGVuZ3RoXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwiaW5wdXRcIiwgRXZlbnRIYW5kbGVycy5pbnB1dEZhbGxCYWNrRXZlbnQpO1xyXG4gICAgICAvLyBFdmVudFJ1bGVyLm9uKGVsLCBcImJlZm9yZWlucHV0XCIsIEV2ZW50SGFuZGxlcnMuYmVmb3JlSW5wdXRFdmVudCk7IC8vaHR0cHM6Ly9naXRodWIuY29tL3czYy9pbnB1dC1ldmVudHMgLSB0byBpbXBsZW1lbnRcclxuICAgIH1cclxuICAgIEV2ZW50UnVsZXIub24oZWwsIFwic2V0dmFsdWVcIiwgRXZlbnRIYW5kbGVycy5zZXRWYWx1ZUV2ZW50KTtcclxuXHJcbiAgICAvLyBhcHBseSBtYXNrXHJcbiAgICBpbnB1dG1hc2suYXBwbHlNYXNrSG9vayA9PT0gdW5kZWZpbmVkIHx8IGlucHV0bWFzay5hcHBseU1hc2tIb29rKCk7XHJcblxyXG4gICAgZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbChpbnB1dG1hc2spLmpvaW4oXCJcIik7IC8vIGluaXRpYWxpemUgdGhlIGJ1ZmZlciBhbmQgZ2V0bWFza2xlbmd0aFxyXG4gICAgaW5wdXRtYXNrLnVuZG9WYWx1ZSA9IGlucHV0bWFzay5fdmFsdWVHZXQodHJ1ZSk7XHJcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gKGVsLmlucHV0bWFzay5zaGFkb3dSb290IHx8IGVsLm93bmVyRG9jdW1lbnQpXHJcbiAgICAgIC5hY3RpdmVFbGVtZW50O1xyXG4gICAgaWYgKFxyXG4gICAgICBlbC5pbnB1dG1hc2suX3ZhbHVlR2V0KHRydWUpICE9PSBcIlwiIHx8XHJcbiAgICAgIG9wdHMuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgPT09IGZhbHNlIHx8XHJcbiAgICAgIGFjdGl2ZUVsZW1lbnQgPT09IGVsXHJcbiAgICApIHtcclxuICAgICAgYXBwbHlJbnB1dFZhbHVlKGVsLCBlbC5pbnB1dG1hc2suX3ZhbHVlR2V0KHRydWUpLCBvcHRzKTtcclxuICAgICAgbGV0IGJ1ZmZlciA9IGdldEJ1ZmZlci5jYWxsKGlucHV0bWFzaykuc2xpY2UoKTtcclxuICAgICAgaWYgKGlzQ29tcGxldGUuY2FsbChpbnB1dG1hc2ssIGJ1ZmZlcikgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKG9wdHMuY2xlYXJJbmNvbXBsZXRlKSB7XHJcbiAgICAgICAgICByZXNldE1hc2tTZXQuY2FsbChpbnB1dG1hc2ssIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG9wdHMuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgJiYgYWN0aXZlRWxlbWVudCAhPT0gZWwpIHtcclxuICAgICAgICBpZiAoZ2V0TGFzdFZhbGlkUG9zaXRpb24uY2FsbChpbnB1dG1hc2spID09PSAtMSkge1xyXG4gICAgICAgICAgYnVmZmVyID0gW107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNsZWFyT3B0aW9uYWxUYWlsLmNhbGwoaW5wdXRtYXNrLCBidWZmZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgb3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyA9PT0gZmFsc2UgfHxcclxuICAgICAgICAob3B0cy5zaG93TWFza09uRm9jdXMgJiYgYWN0aXZlRWxlbWVudCA9PT0gZWwpIHx8XHJcbiAgICAgICAgZWwuaW5wdXRtYXNrLl92YWx1ZUdldCh0cnVlKSAhPT0gXCJcIlxyXG4gICAgICApIHtcclxuICAgICAgICB3cml0ZUJ1ZmZlcihlbCwgYnVmZmVyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZWwpIHtcclxuICAgICAgICAvLyBwb3NpdGlvbiB0aGUgY2FyZXQgd2hlbiBpbiBmb2N1c1xyXG4gICAgICAgIGNhcmV0LmNhbGwoXHJcbiAgICAgICAgICBpbnB1dG1hc2ssXHJcbiAgICAgICAgICBlbCxcclxuICAgICAgICAgIHNlZWtOZXh0LmNhbGwoaW5wdXRtYXNrLCBnZXRMYXN0VmFsaWRQb3NpdGlvbi5jYWxsKGlucHV0bWFzaykpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCAiY29uc3QgZXNjYXBlUmVnZXhSZWdleCA9IG5ldyBSZWdFeHAoXHJcbiAgXCIoXFxcXFwiICtcclxuICAgIFtcclxuICAgICAgXCIvXCIsXHJcbiAgICAgIFwiLlwiLFxyXG4gICAgICBcIipcIixcclxuICAgICAgXCIrXCIsXHJcbiAgICAgIFwiP1wiLFxyXG4gICAgICBcInxcIixcclxuICAgICAgXCIoXCIsXHJcbiAgICAgIFwiKVwiLFxyXG4gICAgICBcIltcIixcclxuICAgICAgXCJdXCIsXHJcbiAgICAgIFwie1wiLFxyXG4gICAgICBcIn1cIixcclxuICAgICAgXCJcXFxcXCIsXHJcbiAgICAgIFwiJFwiLFxyXG4gICAgICBcIl5cIlxyXG4gICAgXS5qb2luKFwifFxcXFxcIikgK1xyXG4gICAgXCIpXCIsXHJcbiAgXCJnaW1cIlxyXG4pO1xyXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKSB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGVzY2FwZVJlZ2V4UmVnZXgsIFwiXFxcXCQxXCIpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdleFN0cmluZyhzdHIpIHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoZXNjYXBlUmVnZXhSZWdleCwgXCJcXFxcXFxcXCQxXCIpO1xyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoaXNHcm91cCwgaXNPcHRpb25hbCwgaXNRdWFudGlmaWVyLCBpc0FsdGVybmF0b3IpIHtcclxuICB0aGlzLm1hdGNoZXMgPSBbXTtcclxuICB0aGlzLm9wZW5Hcm91cCA9IGlzR3JvdXAgfHwgZmFsc2U7XHJcbiAgdGhpcy5hbHRlcm5hdG9yR3JvdXAgPSBmYWxzZTtcclxuICB0aGlzLmlzR3JvdXAgPSBpc0dyb3VwIHx8IGZhbHNlO1xyXG4gIHRoaXMuaXNPcHRpb25hbCA9IGlzT3B0aW9uYWwgfHwgZmFsc2U7XHJcbiAgdGhpcy5pc1F1YW50aWZpZXIgPSBpc1F1YW50aWZpZXIgfHwgZmFsc2U7XHJcbiAgdGhpcy5pc0FsdGVybmF0b3IgPSBpc0FsdGVybmF0b3IgfHwgZmFsc2U7XHJcbiAgdGhpcy5xdWFudGlmaWVyID0ge1xyXG4gICAgbWluOiAxLFxyXG4gICAgbWF4OiAxXHJcbiAgfTtcclxufVxyXG4iLCAiaW1wb3J0ICQgZnJvbSBcIi4vZGVwZW5kZW5jeUxpYnMvaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWJcIjtcclxuaW1wb3J0IHsgZXNjYXBlUmVnZXggfSBmcm9tIFwiLi9lc2NhcGVSZWdleFwiO1xyXG5pbXBvcnQgSW5wdXRtYXNrIGZyb20gXCIuL2lucHV0bWFza1wiO1xyXG5pbXBvcnQgTWFza1Rva2VuIGZyb20gXCIuL21hc2t0b2tlblwiO1xyXG5cclxuZXhwb3J0IHsgZ2VuZXJhdGVNYXNrU2V0LCBhbmFseXNlTWFzayB9O1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVNYXNrU2V0KG9wdHMsIG5vY2FjaGUpIHtcclxuICBsZXQgbXM7XHJcblxyXG4gIGZ1bmN0aW9uIHByZVByb2Nlc3NNYXNrKFxyXG4gICAgbWFzayxcclxuICAgIHsgcmVwZWF0LCBncm91cG1hcmtlciwgcXVhbnRpZmllcm1hcmtlciwga2VlcFN0YXRpYyB9XHJcbiAgKSB7XHJcbiAgICBpZiAocmVwZWF0ID4gMCB8fCByZXBlYXQgPT09IFwiKlwiIHx8IHJlcGVhdCA9PT0gXCIrXCIpIHtcclxuICAgICAgY29uc3QgcmVwZWF0U3RhcnQgPSByZXBlYXQgPT09IFwiKlwiID8gMCA6IHJlcGVhdCA9PT0gXCIrXCIgPyAxIDogcmVwZWF0O1xyXG4gICAgICBpZiAocmVwZWF0U3RhcnQgIT0gcmVwZWF0KSB7XHJcbiAgICAgICAgbWFzayA9XHJcbiAgICAgICAgICBncm91cG1hcmtlclswXSArXHJcbiAgICAgICAgICBtYXNrICtcclxuICAgICAgICAgIGdyb3VwbWFya2VyWzFdICtcclxuICAgICAgICAgIHF1YW50aWZpZXJtYXJrZXJbMF0gK1xyXG4gICAgICAgICAgcmVwZWF0U3RhcnQgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgcmVwZWF0ICtcclxuICAgICAgICAgIHF1YW50aWZpZXJtYXJrZXJbMV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gcmVwZWF0IHRoZSBtYXNrIG4gdGltZXNcclxuICAgICAgICBjb25zdCBtc2sgPSBtYXNrO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcmVwZWF0U3RhcnQ7IGkrKykge1xyXG4gICAgICAgICAgbWFzayArPSBtc2s7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoa2VlcFN0YXRpYyA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb25zdCBvcHRpb25hbFJlZ2V4ID0gXCIoLilcXFxcWyhbXlxcXFxdXSopXFxcXF1cIiwgLy8gXCIoPzxwMT4uKVxcXFxbKD88cDI+W15cXFxcXV0qKVxcXFxdXCIsIHJlbW92ZSBuYW1lZCBjYXB0dXJlIGdyb3VwIEAyNDI4XHJcbiAgICAgICAgbWFza01hdGNoZXMgPSBtYXNrLm1hdGNoKG5ldyBSZWdFeHAob3B0aW9uYWxSZWdleCwgXCJnXCIpKTtcclxuICAgICAgbWFza01hdGNoZXMgJiZcclxuICAgICAgICBtYXNrTWF0Y2hlcy5mb3JFYWNoKChtLCBpKSA9PiB7XHJcbiAgICAgICAgICBsZXQgW3AxLCBwMl0gPSBtLnNwbGl0KFwiW1wiKTtcclxuICAgICAgICAgIHAyID0gcDIucmVwbGFjZShcIl1cIiwgXCJcIik7XHJcbiAgICAgICAgICBtYXNrID0gbWFzay5yZXBsYWNlKFxyXG4gICAgICAgICAgICBuZXcgUmVnRXhwKGAke2VzY2FwZVJlZ2V4KHAxKX1cXFxcWyR7ZXNjYXBlUmVnZXgocDIpfVxcXFxdYCksXHJcbiAgICAgICAgICAgIHAxLmNoYXJBdCgwKSA9PT0gcDIuY2hhckF0KDApXHJcbiAgICAgICAgICAgICAgPyBgKCR7cDF9fCR7cDF9JHtwMn0pYFxyXG4gICAgICAgICAgICAgIDogYCR7cDF9WyR7cDJ9XWBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXNrKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWFzaztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdlbmVyYXRlTWFzayhtYXNrLCBtZXRhZGF0YSwgb3B0cykge1xyXG4gICAgbGV0IHJlZ2V4TWFzayA9IGZhbHNlO1xyXG4gICAgaWYgKG1hc2sgPT09IG51bGwgfHwgbWFzayA9PT0gXCJcIikge1xyXG4gICAgICByZWdleE1hc2sgPSBvcHRzLnJlZ2V4ICE9PSBudWxsO1xyXG4gICAgICBpZiAocmVnZXhNYXNrKSB7XHJcbiAgICAgICAgbWFzayA9IG9wdHMucmVnZXg7XHJcbiAgICAgICAgbWFzayA9IG1hc2sucmVwbGFjZSgvXihcXF4pKC4qKShcXCQpJC8sIFwiJDJcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVnZXhNYXNrID0gdHJ1ZTtcclxuICAgICAgICBtYXNrID0gXCIuKlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobWFzay5sZW5ndGggPT09IDEgJiYgb3B0cy5ncmVlZHkgPT09IGZhbHNlICYmIG9wdHMucmVwZWF0ICE9PSAwKSB7XHJcbiAgICAgIG9wdHMucGxhY2Vob2xkZXIgPSBcIlwiO1xyXG4gICAgfSAvLyBoaWRlIHBsYWNlaG9sZGVyIHdpdGggc2luZ2xlIG5vbi1ncmVlZHkgbWFza1xyXG4gICAgbWFzayA9IHByZVByb2Nlc3NNYXNrKG1hc2ssIG9wdHMpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKG1hc2spO1xyXG4gICAgbGV0IG1hc2tzZXREZWZpbml0aW9uLCBtYXNrZGVmS2V5O1xyXG4gICAgbWFza2RlZktleSA9IHJlZ2V4TWFza1xyXG4gICAgICA/IFwicmVnZXhfXCIgKyBvcHRzLnJlZ2V4XHJcbiAgICAgIDogb3B0cy5udW1lcmljSW5wdXRcclxuICAgICAgPyBtYXNrLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpXHJcbiAgICAgIDogbWFzaztcclxuICAgIGlmIChvcHRzLmtlZXBTdGF0aWMgIT09IG51bGwpIHtcclxuICAgICAgLy8ga2VlcHN0YXRpYyBtb2RpZmllcyB0aGUgb3V0cHV0IGZyb20gdGhlIHRlc3RkZWZpbml0aW9ucyB+IHNvIGRpZmZlcmVudGlhdGUgaW4gdGhlIG1hc2tjYWNoZVxyXG4gICAgICBtYXNrZGVmS2V5ID0gXCJrc19cIiArIG9wdHMua2VlcFN0YXRpYyArIG1hc2tkZWZLZXk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG9wdHMucGxhY2Vob2xkZXIgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgLy8gcGxhY2Vob2xkZXIgb2JqZWN0IG1vZGlmaWVzIHRoZSBvdXRwdXQgZnJvbSB0aGUgdGVzdGRlZmluaXRpb25zIH4gc28gZGlmZmVyZW50aWF0ZSBpbiB0aGUgbWFza2NhY2hlXHJcbiAgICAgIG1hc2tkZWZLZXkgPSBcInBoX1wiICsgSlNPTi5zdHJpbmdpZnkob3B0cy5wbGFjZWhvbGRlcikgKyBtYXNrZGVmS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgSW5wdXRtYXNrLnByb3RvdHlwZS5tYXNrc0NhY2hlW21hc2tkZWZLZXldID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgbm9jYWNoZSA9PT0gdHJ1ZVxyXG4gICAgKSB7XHJcbiAgICAgIG1hc2tzZXREZWZpbml0aW9uID0ge1xyXG4gICAgICAgIG1hc2ssXHJcbiAgICAgICAgbWFza1Rva2VuOiBJbnB1dG1hc2sucHJvdG90eXBlLmFuYWx5c2VNYXNrKG1hc2ssIHJlZ2V4TWFzaywgb3B0cyksXHJcbiAgICAgICAgdmFsaWRQb3NpdGlvbnM6IFtdLFxyXG4gICAgICAgIF9idWZmZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICBidWZmZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICB0ZXN0czoge30sXHJcbiAgICAgICAgZXhjbHVkZXM6IHt9LCAvLyBleGNsdWRlZCBhbHRlcm5hdGlvbnNcclxuICAgICAgICBtZXRhZGF0YSxcclxuICAgICAgICBtYXNrTGVuZ3RoOiB1bmRlZmluZWQsXHJcbiAgICAgICAgaml0T2Zmc2V0OiB7fVxyXG4gICAgICB9O1xyXG4gICAgICBpZiAobm9jYWNoZSAhPT0gdHJ1ZSkge1xyXG4gICAgICAgIElucHV0bWFzay5wcm90b3R5cGUubWFza3NDYWNoZVttYXNrZGVmS2V5XSA9IG1hc2tzZXREZWZpbml0aW9uO1xyXG4gICAgICAgIG1hc2tzZXREZWZpbml0aW9uID0gJC5leHRlbmQoXHJcbiAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAge30sXHJcbiAgICAgICAgICBJbnB1dG1hc2sucHJvdG90eXBlLm1hc2tzQ2FjaGVbbWFza2RlZktleV1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYXNrc2V0RGVmaW5pdGlvbiA9ICQuZXh0ZW5kKFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAgSW5wdXRtYXNrLnByb3RvdHlwZS5tYXNrc0NhY2hlW21hc2tkZWZLZXldXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hc2tzZXREZWZpbml0aW9uO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBvcHRzLm1hc2sgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgLy8gYWxsb3cgbWFzayB0byBiZSBhIHByZXByb2Nlc3NpbmcgZm4gLSBzaG91bGQgcmV0dXJuIGEgdmFsaWQgbWFza1xyXG4gICAgb3B0cy5tYXNrID0gb3B0cy5tYXNrKG9wdHMpO1xyXG4gIH1cclxuICBpZiAoQXJyYXkuaXNBcnJheShvcHRzLm1hc2spKSB7XHJcbiAgICBpZiAob3B0cy5tYXNrLmxlbmd0aCA+IDEpIHtcclxuICAgICAgaWYgKG9wdHMua2VlcFN0YXRpYyA9PT0gbnVsbCkge1xyXG4gICAgICAgIC8vIGVuYWJsZSBieSBkZWZhdWx0IHdoZW4gcGFzc2luZyBtdWx0aXBsZSBtYXNrcyB3aGVuIHRoZSBvcHRpb24gaXMgbm90IGV4cGxpY2l0bHkgc3BlY2lmaWVkXHJcbiAgICAgICAgb3B0cy5rZWVwU3RhdGljID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgYWx0TWFzayA9IG9wdHMuZ3JvdXBtYXJrZXJbMF07XHJcbiAgICAgIChvcHRzLmlzUlRMID8gb3B0cy5tYXNrLnJldmVyc2UoKSA6IG9wdHMubWFzaykuZm9yRWFjaChmdW5jdGlvbiAobXNrKSB7XHJcbiAgICAgICAgaWYgKGFsdE1hc2subGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgYWx0TWFzayArPSBvcHRzLmFsdGVybmF0b3JtYXJrZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtc2subWFzayAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBtc2subWFzayAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICBhbHRNYXNrICs9IG1zay5tYXNrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhbHRNYXNrICs9IG1zaztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBhbHRNYXNrICs9IG9wdHMuZ3JvdXBtYXJrZXJbMV07XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGFsdE1hc2spO1xyXG4gICAgICByZXR1cm4gZ2VuZXJhdGVNYXNrKGFsdE1hc2ssIG9wdHMubWFzaywgb3B0cyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcHRzLm1hc2sgPSBvcHRzLm1hc2sucG9wKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChcclxuICAgIG9wdHMubWFzayAmJlxyXG4gICAgb3B0cy5tYXNrLm1hc2sgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgdHlwZW9mIG9wdHMubWFzay5tYXNrICE9PSBcImZ1bmN0aW9uXCJcclxuICApIHtcclxuICAgIG1zID0gZ2VuZXJhdGVNYXNrKG9wdHMubWFzay5tYXNrLCBvcHRzLm1hc2ssIG9wdHMpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtcyA9IGdlbmVyYXRlTWFzayhvcHRzLm1hc2ssIG9wdHMubWFzaywgb3B0cyk7XHJcbiAgfVxyXG4gIGlmIChvcHRzLmtlZXBTdGF0aWMgPT09IG51bGwpIG9wdHMua2VlcFN0YXRpYyA9IGZhbHNlO1xyXG4gIHJldHVybiBtcztcclxufVxyXG5cclxuZnVuY3Rpb24gYW5hbHlzZU1hc2sobWFzaywgcmVnZXhNYXNrLCBvcHRzKSB7XHJcbiAgY29uc3QgdG9rZW5pemVyID1cclxuICAgICAgLyg/Ols/KitdfFxce1swLTkrKl0rKD86LFswLTkrKl0qKT8oPzpcXHxbMC05KypdKik/XFx9KXxbXi4/KiteJHtbXSgpfFxcXFxdK3wuL2csXHJcbiAgICAvLyBUaHggdG8gaHR0cHM6Ly9naXRodWIuY29tL3NsZXZpdGhhbi9yZWdleC1jb2xvcml6ZXIgZm9yIHRoZSByZWdleFRva2VuaXplciByZWdleFxyXG4gICAgcmVnZXhUb2tlbml6ZXIgPVxyXG4gICAgICAvXFxbXFxeP10/KD86W15cXFxcXFxdXSt8XFxcXFtcXFNcXHNdPykqXT98XFxcXCg/OjAoPzpbMC0zXVswLTddezAsMn18WzQtN11bMC03XT8pP3xbMS05XVswLTldKnx4WzAtOUEtRmEtZl17Mn18dVswLTlBLUZhLWZdezR9fGNbQS1aYS16XXxbXFxTXFxzXT8pfFxcKCg/OlxcP1s6PSFdPyk/fCg/Ols/KitdfFxce1swLTldKyg/OixbMC05XSopP1xcfSlcXD8/fFteLj8qK14ke1soKXxcXFxcXSt8Li9nO1xyXG4gIGxldCBlc2NhcGVkID0gZmFsc2UsXHJcbiAgICBjdXJyZW50VG9rZW4gPSBuZXcgTWFza1Rva2VuKCksXHJcbiAgICBtYXRjaCxcclxuICAgIG0sXHJcbiAgICBvcGVuZW5pbmdzID0gW10sXHJcbiAgICBtYXNrVG9rZW5zID0gW10sXHJcbiAgICBvcGVuaW5nVG9rZW4sXHJcbiAgICBjdXJyZW50T3BlbmluZ1Rva2VuLFxyXG4gICAgYWx0ZXJuYXRvcixcclxuICAgIGxhc3RNYXRjaCxcclxuICAgIGNsb3NlUmVnZXhHcm91cCA9IGZhbHNlO1xyXG5cclxuICAvLyB0ZXN0IGRlZmluaXRpb24gPT4ge2ZuOiBSZWdFeHAvZnVuY3Rpb24sIHN0YXRpYzogdHJ1ZS9mYWxzZSBvcHRpb25hbGl0eTogYm9vbCwgbmV3QmxvY2tNYXJrZXI6IGJvb2wsIGNhc2luZzogbnVsbC91cHBlci9sb3dlciwgZGVmOiBkZWZpbml0aW9uU3ltYm9sLCBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsIG1hc2s6IHJlYWwgbWFza0RlZmluaXRpb259XHJcbiAgZnVuY3Rpb24gaW5zZXJ0VGVzdERlZmluaXRpb24obXRva2VuLCBlbGVtZW50LCBwb3NpdGlvbikge1xyXG4gICAgcG9zaXRpb24gPSBwb3NpdGlvbiAhPT0gdW5kZWZpbmVkID8gcG9zaXRpb24gOiBtdG9rZW4ubWF0Y2hlcy5sZW5ndGg7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50LCBwb3NpdGlvbiwgY3VycmVudFRva2VuLm1hdGNoZXMubGVuZ3RoKTtcclxuICAgIC8vIGlmICh0eXBlb2Ygb3B0cy5wbGFjZWhvbGRlciA9PT0gXCJzdHJpbmdcIilcclxuICAgIC8vIFx0Y29uc29sZS5sb2cob3B0cy5wbGFjZWhvbGRlci5jaGFyQXQoY3VycmVudFRva2VuLm1hdGNoZXMubGVuZ3RoICUgb3B0cy5wbGFjZWhvbGRlci5sZW5ndGgpKTtcclxuICAgIGxldCBwcmV2TWF0Y2ggPSBtdG9rZW4ubWF0Y2hlc1twb3NpdGlvbiAtIDFdO1xyXG4gICAgaWYgKHJlZ2V4TWFzaykge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZWxlbWVudC5pbmRleE9mKFwiW1wiKSA9PT0gMCB8fFxyXG4gICAgICAgIChlc2NhcGVkICYmIC9cXFxcZHxcXFxcc3xcXFxcd3xcXFxccC9pLnRlc3QoZWxlbWVudCkpIHx8XHJcbiAgICAgICAgZWxlbWVudCA9PT0gXCIuXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGV0IGZsYWcgPSBvcHRzLmNhc2luZyA/IFwiaVwiIDogXCJcIjtcclxuICAgICAgICBpZiAoL1xcXFxwXFx7Lip9L2kudGVzdChlbGVtZW50KSkgZmxhZyArPSBcInVcIjtcclxuICAgICAgICBtdG9rZW4ubWF0Y2hlcy5zcGxpY2UocG9zaXRpb24rKywgMCwge1xyXG4gICAgICAgICAgZm46IG5ldyBSZWdFeHAoZWxlbWVudCwgZmxhZyksXHJcbiAgICAgICAgICBzdGF0aWM6IGZhbHNlLFxyXG4gICAgICAgICAgb3B0aW9uYWxpdHk6IGZhbHNlLFxyXG4gICAgICAgICAgbmV3QmxvY2tNYXJrZXI6XHJcbiAgICAgICAgICAgIHByZXZNYXRjaCA9PT0gdW5kZWZpbmVkID8gXCJtYXN0ZXJcIiA6IHByZXZNYXRjaC5kZWYgIT09IGVsZW1lbnQsXHJcbiAgICAgICAgICBjYXNpbmc6IG51bGwsXHJcbiAgICAgICAgICBkZWY6IGVsZW1lbnQsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjpcclxuICAgICAgICAgICAgdHlwZW9mIG9wdHMucGxhY2Vob2xkZXIgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICA/IG9wdHMucGxhY2Vob2xkZXJbY3VycmVudFRva2VuLm1hdGNoZXMubGVuZ3RoXVxyXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgbmF0aXZlRGVmOiBlbGVtZW50XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGVzY2FwZWQpIGVsZW1lbnQgPSBlbGVtZW50W2VsZW1lbnQubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgZWxlbWVudC5zcGxpdChcIlwiKS5mb3JFYWNoKGZ1bmN0aW9uIChsbW50LCBuZHgpIHtcclxuICAgICAgICAgIHByZXZNYXRjaCA9IG10b2tlbi5tYXRjaGVzW3Bvc2l0aW9uIC0gMV07XHJcbiAgICAgICAgICBtdG9rZW4ubWF0Y2hlcy5zcGxpY2UocG9zaXRpb24rKywgMCwge1xyXG4gICAgICAgICAgICBmbjogL1thLXpdL2kudGVzdChvcHRzLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgfHwgbG1udClcclxuICAgICAgICAgICAgICA/IG5ldyBSZWdFeHAoXHJcbiAgICAgICAgICAgICAgICAgIFwiW1wiICsgKG9wdHMuc3RhdGljRGVmaW5pdGlvblN5bWJvbCB8fCBsbW50KSArIFwiXVwiLFxyXG4gICAgICAgICAgICAgICAgICBvcHRzLmNhc2luZyA/IFwiaVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIDogbnVsbCxcclxuICAgICAgICAgICAgc3RhdGljOiB0cnVlLFxyXG4gICAgICAgICAgICBvcHRpb25hbGl0eTogZmFsc2UsXHJcbiAgICAgICAgICAgIG5ld0Jsb2NrTWFya2VyOlxyXG4gICAgICAgICAgICAgIHByZXZNYXRjaCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICA/IFwibWFzdGVyXCJcclxuICAgICAgICAgICAgICAgIDogcHJldk1hdGNoLmRlZiAhPT0gbG1udCAmJiBwcmV2TWF0Y2guc3RhdGljICE9PSB0cnVlLFxyXG4gICAgICAgICAgICBjYXNpbmc6IG51bGwsXHJcbiAgICAgICAgICAgIGRlZjogb3B0cy5zdGF0aWNEZWZpbml0aW9uU3ltYm9sIHx8IGxtbnQsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOlxyXG4gICAgICAgICAgICAgIG9wdHMuc3RhdGljRGVmaW5pdGlvblN5bWJvbCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICA/IGxtbnRcclxuICAgICAgICAgICAgICAgIDogdHlwZW9mIG9wdHMucGxhY2Vob2xkZXIgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgID8gb3B0cy5wbGFjZWhvbGRlcltjdXJyZW50VG9rZW4ubWF0Y2hlcy5sZW5ndGhdXHJcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgbmF0aXZlRGVmOiAoZXNjYXBlZCA/IFwiJ1wiIDogXCJcIikgKyBsbW50XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlc2NhcGVkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBtYXNrZGVmID1cclxuICAgICAgICAob3B0cy5kZWZpbml0aW9ucyAmJiBvcHRzLmRlZmluaXRpb25zW2VsZW1lbnRdKSB8fFxyXG4gICAgICAgIChvcHRzLnVzZVByb3RvdHlwZURlZmluaXRpb25zICYmXHJcbiAgICAgICAgICBJbnB1dG1hc2sucHJvdG90eXBlLmRlZmluaXRpb25zW2VsZW1lbnRdKTtcclxuICAgICAgaWYgKG1hc2tkZWYgJiYgIWVzY2FwZWQpIHtcclxuICAgICAgICBtdG9rZW4ubWF0Y2hlcy5zcGxpY2UocG9zaXRpb24rKywgMCwge1xyXG4gICAgICAgICAgZm46IG1hc2tkZWYudmFsaWRhdG9yXHJcbiAgICAgICAgICAgID8gdHlwZW9mIG1hc2tkZWYudmFsaWRhdG9yID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgPyBuZXcgUmVnRXhwKG1hc2tkZWYudmFsaWRhdG9yLCBvcHRzLmNhc2luZyA/IFwiaVwiIDogXCJcIilcclxuICAgICAgICAgICAgICA6IG5ldyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnRlc3QgPSBtYXNrZGVmLnZhbGlkYXRvcjtcclxuICAgICAgICAgICAgICAgIH0pKClcclxuICAgICAgICAgICAgOiAvLi8sXHJcbiAgICAgICAgICBzdGF0aWM6IG1hc2tkZWYuc3RhdGljIHx8IGZhbHNlLFxyXG4gICAgICAgICAgb3B0aW9uYWxpdHk6IG1hc2tkZWYub3B0aW9uYWwgfHwgZmFsc2UsXHJcbiAgICAgICAgICBkZWZPcHRpb25hbGl0eTogbWFza2RlZi5vcHRpb25hbCB8fCBmYWxzZSwgLy8gaW5kaWNhdG9yIGZvciBhbiBvcHRpb25hbCBmcm9tIHRoZSBkZWZpbml0aW9uXHJcbiAgICAgICAgICBuZXdCbG9ja01hcmtlcjpcclxuICAgICAgICAgICAgcHJldk1hdGNoID09PSB1bmRlZmluZWQgfHwgbWFza2RlZi5vcHRpb25hbFxyXG4gICAgICAgICAgICAgID8gXCJtYXN0ZXJcIlxyXG4gICAgICAgICAgICAgIDogcHJldk1hdGNoLmRlZiAhPT0gKG1hc2tkZWYuZGVmaW5pdGlvblN5bWJvbCB8fCBlbGVtZW50KSxcclxuICAgICAgICAgIGNhc2luZzogbWFza2RlZi5jYXNpbmcsXHJcbiAgICAgICAgICBkZWY6IG1hc2tkZWYuZGVmaW5pdGlvblN5bWJvbCB8fCBlbGVtZW50LFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IG1hc2tkZWYucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICBuYXRpdmVEZWY6IGVsZW1lbnQsXHJcbiAgICAgICAgICBnZW5lcmF0ZWQ6IG1hc2tkZWYuZ2VuZXJhdGVkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbXRva2VuLm1hdGNoZXMuc3BsaWNlKHBvc2l0aW9uKyssIDAsIHtcclxuICAgICAgICAgIGZuOiAvW2Etel0vaS50ZXN0KG9wdHMuc3RhdGljRGVmaW5pdGlvblN5bWJvbCB8fCBlbGVtZW50KVxyXG4gICAgICAgICAgICA/IG5ldyBSZWdFeHAoXHJcbiAgICAgICAgICAgICAgICBcIltcIiArIChvcHRzLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgfHwgZWxlbWVudCkgKyBcIl1cIixcclxuICAgICAgICAgICAgICAgIG9wdHMuY2FzaW5nID8gXCJpXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA6IG51bGwsXHJcbiAgICAgICAgICBzdGF0aWM6IHRydWUsXHJcbiAgICAgICAgICBvcHRpb25hbGl0eTogZmFsc2UsXHJcbiAgICAgICAgICBuZXdCbG9ja01hcmtlcjpcclxuICAgICAgICAgICAgcHJldk1hdGNoID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICA/IFwibWFzdGVyXCJcclxuICAgICAgICAgICAgICA6IHByZXZNYXRjaC5kZWYgIT09IGVsZW1lbnQgJiYgcHJldk1hdGNoLnN0YXRpYyAhPT0gdHJ1ZSxcclxuICAgICAgICAgIGNhc2luZzogbnVsbCxcclxuICAgICAgICAgIGRlZjogb3B0cy5zdGF0aWNEZWZpbml0aW9uU3ltYm9sIHx8IGVsZW1lbnQsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjpcclxuICAgICAgICAgICAgb3B0cy5zdGF0aWNEZWZpbml0aW9uU3ltYm9sICE9PSB1bmRlZmluZWQgPyBlbGVtZW50IDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgbmF0aXZlRGVmOiAoZXNjYXBlZCA/IFwiJ1wiIDogXCJcIikgKyBlbGVtZW50XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXNjYXBlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB2ZXJpZnlHcm91cE1hcmtlcihtYXNrVG9rZW4pIHtcclxuICAgIGlmIChtYXNrVG9rZW4gJiYgbWFza1Rva2VuLm1hdGNoZXMpIHtcclxuICAgICAgbWFza1Rva2VuLm1hdGNoZXMuZm9yRWFjaChmdW5jdGlvbiAodG9rZW4sIG5keCkge1xyXG4gICAgICAgIGNvbnN0IG5leHRUb2tlbiA9IG1hc2tUb2tlbi5tYXRjaGVzW25keCArIDFdO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIChuZXh0VG9rZW4gPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBuZXh0VG9rZW4ubWF0Y2hlcyA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIG5leHRUb2tlbi5pc1F1YW50aWZpZXIgPT09IGZhbHNlKSAmJlxyXG4gICAgICAgICAgdG9rZW4gJiZcclxuICAgICAgICAgIHRva2VuLmlzR3JvdXBcclxuICAgICAgICApIHtcclxuICAgICAgICAgIC8vIHRoaXMgaXMgbm90IGEgZ3JvdXAgYnV0IGEgbm9ybWFsIG1hc2sgPT4gY29udmVydFxyXG4gICAgICAgICAgdG9rZW4uaXNHcm91cCA9IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKCFyZWdleE1hc2spIHtcclxuICAgICAgICAgICAgaW5zZXJ0VGVzdERlZmluaXRpb24odG9rZW4sIG9wdHMuZ3JvdXBtYXJrZXJbMF0sIDApO1xyXG4gICAgICAgICAgICBpZiAodG9rZW4ub3Blbkdyb3VwICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgaW5zZXJ0VGVzdERlZmluaXRpb24odG9rZW4sIG9wdHMuZ3JvdXBtYXJrZXJbMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZlcmlmeUdyb3VwTWFya2VyKHRva2VuKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWZhdWx0Q2FzZSgpIHtcclxuICAgIGlmIChvcGVuZW5pbmdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY3VycmVudE9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXTtcclxuICAgICAgaW5zZXJ0VGVzdERlZmluaXRpb24oY3VycmVudE9wZW5pbmdUb2tlbiwgbSk7XHJcbiAgICAgIGlmIChjdXJyZW50T3BlbmluZ1Rva2VuLmlzQWx0ZXJuYXRvcikge1xyXG4gICAgICAgIC8vIGhhbmRsZSBhbHRlcm5hdG9yIGEgfCBiIGNhc2VcclxuICAgICAgICBhbHRlcm5hdG9yID0gb3BlbmVuaW5ncy5wb3AoKTtcclxuICAgICAgICBmb3IgKGxldCBtbmR4ID0gMDsgbW5keCA8IGFsdGVybmF0b3IubWF0Y2hlcy5sZW5ndGg7IG1uZHgrKykge1xyXG4gICAgICAgICAgaWYgKGFsdGVybmF0b3IubWF0Y2hlc1ttbmR4XS5pc0dyb3VwKVxyXG4gICAgICAgICAgICBhbHRlcm5hdG9yLm1hdGNoZXNbbW5keF0uaXNHcm91cCA9IGZhbHNlOyAvLyBkb24ndCBtYXJrIGFsdGVybmF0ZSBncm91cHMgYXMgZ3JvdXBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wZW5lbmluZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY3VycmVudE9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgIGN1cnJlbnRPcGVuaW5nVG9rZW4ubWF0Y2hlcy5wdXNoKGFsdGVybmF0b3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjdXJyZW50VG9rZW4ubWF0Y2hlcy5wdXNoKGFsdGVybmF0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5zZXJ0VGVzdERlZmluaXRpb24oY3VycmVudFRva2VuLCBtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJldmVyc2VUb2tlbnMobWFza1Rva2VuKSB7XHJcbiAgICBmdW5jdGlvbiByZXZlcnNlU3RhdGljKHN0KSB7XHJcbiAgICAgIGlmIChzdCA9PT0gb3B0cy5vcHRpb25hbG1hcmtlclswXSkge1xyXG4gICAgICAgIHN0ID0gb3B0cy5vcHRpb25hbG1hcmtlclsxXTtcclxuICAgICAgfSBlbHNlIGlmIChzdCA9PT0gb3B0cy5vcHRpb25hbG1hcmtlclsxXSkge1xyXG4gICAgICAgIHN0ID0gb3B0cy5vcHRpb25hbG1hcmtlclswXTtcclxuICAgICAgfSBlbHNlIGlmIChzdCA9PT0gb3B0cy5ncm91cG1hcmtlclswXSkge1xyXG4gICAgICAgIHN0ID0gb3B0cy5ncm91cG1hcmtlclsxXTtcclxuICAgICAgfSBlbHNlIGlmIChzdCA9PT0gb3B0cy5ncm91cG1hcmtlclsxXSkgc3QgPSBvcHRzLmdyb3VwbWFya2VyWzBdO1xyXG5cclxuICAgICAgcmV0dXJuIHN0O1xyXG4gICAgfVxyXG5cclxuICAgIG1hc2tUb2tlbi5tYXRjaGVzID0gbWFza1Rva2VuLm1hdGNoZXMucmV2ZXJzZSgpO1xyXG4gICAgZm9yIChjb25zdCBtYXRjaCBpbiBtYXNrVG9rZW4ubWF0Y2hlcykge1xyXG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1hc2tUb2tlbi5tYXRjaGVzLCBtYXRjaCkpIHtcclxuICAgICAgICBjb25zdCBpbnRNYXRjaCA9IHBhcnNlSW50KG1hdGNoKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBtYXNrVG9rZW4ubWF0Y2hlc1ttYXRjaF0uaXNRdWFudGlmaWVyICYmXHJcbiAgICAgICAgICBtYXNrVG9rZW4ubWF0Y2hlc1tpbnRNYXRjaCArIDFdICYmXHJcbiAgICAgICAgICBtYXNrVG9rZW4ubWF0Y2hlc1tpbnRNYXRjaCArIDFdLmlzR3JvdXBcclxuICAgICAgICApIHtcclxuICAgICAgICAgIC8vIHJlcG9zaXRpb24gcXVhbnRpZmllclxyXG4gICAgICAgICAgY29uc3QgcXQgPSBtYXNrVG9rZW4ubWF0Y2hlc1ttYXRjaF07XHJcbiAgICAgICAgICBtYXNrVG9rZW4ubWF0Y2hlcy5zcGxpY2UobWF0Y2gsIDEpO1xyXG4gICAgICAgICAgbWFza1Rva2VuLm1hdGNoZXMuc3BsaWNlKGludE1hdGNoICsgMSwgMCwgcXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWFza1Rva2VuLm1hdGNoZXNbbWF0Y2hdLm1hdGNoZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgbWFza1Rva2VuLm1hdGNoZXNbbWF0Y2hdID0gcmV2ZXJzZVRva2VucyhtYXNrVG9rZW4ubWF0Y2hlc1ttYXRjaF0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtYXNrVG9rZW4ubWF0Y2hlc1ttYXRjaF0gPSByZXZlcnNlU3RhdGljKG1hc2tUb2tlbi5tYXRjaGVzW21hdGNoXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1hc2tUb2tlbjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdyb3VwaWZ5KG1hdGNoZXMpIHtcclxuICAgIGNvbnN0IGdyb3VwVG9rZW4gPSBuZXcgTWFza1Rva2VuKHRydWUpO1xyXG4gICAgZ3JvdXBUb2tlbi5vcGVuR3JvdXAgPSBmYWxzZTtcclxuICAgIGdyb3VwVG9rZW4ubWF0Y2hlcyA9IG1hdGNoZXM7XHJcbiAgICByZXR1cm4gZ3JvdXBUb2tlbjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlR3JvdXAoKSB7XHJcbiAgICAvLyBHcm91cCBjbG9zaW5nXHJcbiAgICBvcGVuaW5nVG9rZW4gPSBvcGVuZW5pbmdzLnBvcCgpO1xyXG4gICAgb3BlbmluZ1Rva2VuLm9wZW5Hcm91cCA9IGZhbHNlOyAvLyBtYXJrIGdyb3VwIGFzIGNvbXBsZXRlXHJcbiAgICBpZiAob3BlbmluZ1Rva2VuICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKG9wZW5lbmluZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGN1cnJlbnRPcGVuaW5nVG9rZW4gPSBvcGVuZW5pbmdzW29wZW5lbmluZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgY3VycmVudE9wZW5pbmdUb2tlbi5tYXRjaGVzLnB1c2gob3BlbmluZ1Rva2VuKTtcclxuICAgICAgICBpZiAoY3VycmVudE9wZW5pbmdUb2tlbi5pc0FsdGVybmF0b3IpIHtcclxuICAgICAgICAgIC8vIGhhbmRsZSBhbHRlcm5hdG9yIChhKSB8IChiKSBjYXNlXHJcbiAgICAgICAgICBhbHRlcm5hdG9yID0gb3BlbmVuaW5ncy5wb3AoKTtcclxuICAgICAgICAgIGZvciAobGV0IG1uZHggPSAwOyBtbmR4IDwgYWx0ZXJuYXRvci5tYXRjaGVzLmxlbmd0aDsgbW5keCsrKSB7XHJcbiAgICAgICAgICAgIGFsdGVybmF0b3IubWF0Y2hlc1ttbmR4XS5pc0dyb3VwID0gZmFsc2U7IC8vIGRvbid0IG1hcmsgYWx0ZXJuYXRlIGdyb3VwcyBhcyBncm91cFxyXG4gICAgICAgICAgICBhbHRlcm5hdG9yLm1hdGNoZXNbbW5keF0uYWx0ZXJuYXRvckdyb3VwID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAob3BlbmVuaW5ncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRPcGVuaW5nVG9rZW4gPSBvcGVuZW5pbmdzW29wZW5lbmluZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIGN1cnJlbnRPcGVuaW5nVG9rZW4ubWF0Y2hlcy5wdXNoKGFsdGVybmF0b3IpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3VycmVudFRva2VuLm1hdGNoZXMucHVzaChhbHRlcm5hdG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3VycmVudFRva2VuLm1hdGNoZXMucHVzaChvcGVuaW5nVG9rZW4pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWZhdWx0Q2FzZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ3JvdXBRdWFudGlmaWVyKG1hdGNoZXMpIHtcclxuICAgIGxldCBsYXN0TWF0Y2ggPSBtYXRjaGVzLnBvcCgpO1xyXG4gICAgaWYgKGxhc3RNYXRjaC5pc1F1YW50aWZpZXIpIHtcclxuICAgICAgbGFzdE1hdGNoID0gZ3JvdXBpZnkoW21hdGNoZXMucG9wKCksIGxhc3RNYXRjaF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxhc3RNYXRjaDtcclxuICB9XHJcblxyXG4gIGlmIChyZWdleE1hc2spIHtcclxuICAgIG9wdHMub3B0aW9uYWxtYXJrZXJbMF0gPSB1bmRlZmluZWQ7XHJcbiAgICBvcHRzLm9wdGlvbmFsbWFya2VyWzFdID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuICAvLyBjb25zb2xlLmxvZyhtYXNrKTtcclxuICB3aGlsZSAoXHJcbiAgICAobWF0Y2ggPSByZWdleE1hc2sgPyByZWdleFRva2VuaXplci5leGVjKG1hc2spIDogdG9rZW5pemVyLmV4ZWMobWFzaykpXHJcbiAgKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtYXRjaCk7XHJcbiAgICBtID0gbWF0Y2hbMF07XHJcblxyXG4gICAgaWYgKHJlZ2V4TWFzaykge1xyXG4gICAgICBzd2l0Y2ggKG0uY2hhckF0KDApKSB7XHJcbiAgICAgICAgLy8gUXVhbnRpZmllclxyXG4gICAgICAgIGNhc2UgXCI/XCI6XHJcbiAgICAgICAgICBtID0gXCJ7MCwxfVwiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIitcIjpcclxuICAgICAgICBjYXNlIFwiKlwiOlxyXG4gICAgICAgICAgbSA9IFwie1wiICsgbSArIFwifVwiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInxcIjpcclxuICAgICAgICAgIC8vIHJlZ2V4IG1hc2sgYWx0ZXJuYXRvciAgZXg6IFswMV1bMC05XXwyWzAtM10gPT4gKFswMV1bMC05XXwyWzAtM10pXHJcbiAgICAgICAgICBpZiAob3BlbmVuaW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgLy8gd3JhcCB0aGUgbWFzayBpbiBhIGdyb3VwIHRvIGZvcm0gYSByZWdleCBhbHRlcm5hdG9yICAoWzAxXVswLTldfDJbMC0zXSlcclxuICAgICAgICAgICAgY29uc3QgYWx0UmVnZXhHcm91cCA9IGdyb3VwaWZ5KGN1cnJlbnRUb2tlbi5tYXRjaGVzKTtcclxuICAgICAgICAgICAgYWx0UmVnZXhHcm91cC5vcGVuR3JvdXAgPSB0cnVlO1xyXG4gICAgICAgICAgICBvcGVuZW5pbmdzLnB1c2goYWx0UmVnZXhHcm91cCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUb2tlbi5tYXRjaGVzID0gW107XHJcbiAgICAgICAgICAgIGNsb3NlUmVnZXhHcm91cCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBzd2l0Y2ggKG0pIHtcclxuICAgICAgICBjYXNlIFwiXFxcXGRcIjpcclxuICAgICAgICAgIG0gPSBcIlswLTldXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiXFxcXHBcIjogLy8gVW5pY29kZSBDYXRlZ29yaWVzXHJcbiAgICAgICAgICBtICs9IHJlZ2V4VG9rZW5pemVyLmV4ZWMobWFzaylbMF07IC8vIHtcclxuICAgICAgICAgIG0gKz0gcmVnZXhUb2tlbml6ZXIuZXhlYyhtYXNrKVswXTsgLy8gP31cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCIoPzpcIjogLy8gbm9uIGNhcHR1cmluZyBncm91cFxyXG4gICAgICAgIGNhc2UgXCIoPz1cIjogLy8gbG9va2FoZWFkXHJcbiAgICAgICAgY2FzZSBcIig/IVwiOiAvLyBuZWdhdGl2ZSBsb29rYWhlYWRcclxuICAgICAgICBjYXNlIFwiKD88PVwiOiAvLyBsb29rYmVoaW5kXHJcbiAgICAgICAgY2FzZSBcIig/PCFcIjogLy8gbmVnYXRpdmUgbG9va2JlaGluZFxyXG4gICAgICAgICAgLy8gdHJlYXQgYXMgZ3JvdXBcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVzY2FwZWQpIHtcclxuICAgICAgZGVmYXVsdENhc2UoKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKG0uY2hhckF0KDApKSB7XHJcbiAgICAgIGNhc2UgXCIkXCI6XHJcbiAgICAgIGNhc2UgXCJeXCI6XHJcbiAgICAgICAgLy8gaWdub3JlIGJlZ2luc3dpdGggYW5kIGVuZHN3aXRoIGFzIGluIG1hc2tpbmcgdGhpcyBtYWtlcyBubyBwb2ludFxyXG4gICAgICAgIGlmICghcmVnZXhNYXNrKSB7XHJcbiAgICAgICAgICBkZWZhdWx0Q2FzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBvcHRzLmVzY2FwZUNoYXI6XHJcbiAgICAgICAgZXNjYXBlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHJlZ2V4TWFzaykgZGVmYXVsdENhc2UoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gb3B0aW9uYWwgY2xvc2luZ1xyXG4gICAgICBjYXNlIG9wdHMub3B0aW9uYWxtYXJrZXJbMV06XHJcbiAgICAgIGNhc2Ugb3B0cy5ncm91cG1hcmtlclsxXTpcclxuICAgICAgICBjbG9zZUdyb3VwKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2Ugb3B0cy5vcHRpb25hbG1hcmtlclswXTpcclxuICAgICAgICAvLyBvcHRpb25hbCBvcGVuaW5nXHJcbiAgICAgICAgb3BlbmVuaW5ncy5wdXNoKG5ldyBNYXNrVG9rZW4oZmFsc2UsIHRydWUpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBvcHRzLmdyb3VwbWFya2VyWzBdOlxyXG4gICAgICAgIC8vIEdyb3VwIG9wZW5pbmdcclxuICAgICAgICBvcGVuZW5pbmdzLnB1c2gobmV3IE1hc2tUb2tlbih0cnVlKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2Ugb3B0cy5xdWFudGlmaWVybWFya2VyWzBdOlxyXG4gICAgICAgIC8vIFF1YW50aWZpZXJcclxuICAgICAgICB2YXIgcXVhbnRpZmllciA9IG5ldyBNYXNrVG9rZW4oZmFsc2UsIGZhbHNlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgbSA9IG0ucmVwbGFjZSgvW3t9P10vZywgXCJcIik7IC8vID8gbWF0Y2hlcyBsYXp5IHF1YW50aWZpZXJzXHJcbiAgICAgICAgdmFyIG1xaiA9IG0uc3BsaXQoXCJ8XCIpLFxyXG4gICAgICAgICAgbXEgPSBtcWpbMF0uc3BsaXQoXCIsXCIpLFxyXG4gICAgICAgICAgbXEwID0gaXNOYU4obXFbMF0pID8gbXFbMF0gOiBwYXJzZUludChtcVswXSksXHJcbiAgICAgICAgICBtcTEgPSBtcS5sZW5ndGggPT09IDEgPyBtcTAgOiBpc05hTihtcVsxXSkgPyBtcVsxXSA6IHBhcnNlSW50KG1xWzFdKSxcclxuICAgICAgICAgIG1xSml0ID0gaXNOYU4obXFqWzFdKSA/IG1xalsxXSA6IHBhcnNlSW50KG1xalsxXSk7XHJcbiAgICAgICAgaWYgKG1xMCA9PT0gXCIqXCIgfHwgbXEwID09PSBcIitcIikge1xyXG4gICAgICAgICAgbXEwID0gbXExID09PSBcIipcIiA/IDAgOiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBxdWFudGlmaWVyLnF1YW50aWZpZXIgPSB7XHJcbiAgICAgICAgICBtaW46IG1xMCxcclxuICAgICAgICAgIG1heDogbXExLFxyXG4gICAgICAgICAgaml0OiBtcUppdFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIG1hdGNoZXMgPVxyXG4gICAgICAgICAgb3BlbmVuaW5ncy5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgID8gb3BlbmVuaW5nc1tvcGVuZW5pbmdzLmxlbmd0aCAtIDFdLm1hdGNoZXNcclxuICAgICAgICAgICAgOiBjdXJyZW50VG9rZW4ubWF0Y2hlcztcclxuICAgICAgICBtYXRjaCA9IG1hdGNoZXMucG9wKCk7XHJcbiAgICAgICAgLy8gaWYgKG1hdGNoLmlzQWx0ZXJuYXRvcikgeyAvL2hhbmRsZSBxdWFudGlmaWVyIGluIGFuIGFsdGVybmF0aW9uIFswLTldezJ9fFswLTldezN9XHJcbiAgICAgICAgLy8gICAgIG1hdGNoZXMucHVzaChtYXRjaCk7IC8vcHVzaCBiYWNrIGFsdGVybmF0b3JcclxuICAgICAgICAvLyAgICAgbWF0Y2hlcyA9IG1hdGNoLm1hdGNoZXM7IC8vcmVtYXAgdGFyZ2V0IG1hdGNoZXNcclxuICAgICAgICAvLyAgICAgdmFyIGdyb3VwVG9rZW4gPSBuZXcgTWFza1Rva2VuKHRydWUpO1xyXG4gICAgICAgIC8vICAgICB2YXIgdG1wTWF0Y2ggPSBtYXRjaGVzLnBvcCgpO1xyXG4gICAgICAgIC8vICAgICBtYXRjaGVzLnB1c2goZ3JvdXBUb2tlbik7IC8vcHVzaCB0aGUgZ3JvdXBcclxuICAgICAgICAvLyAgICAgbWF0Y2hlcyA9IGdyb3VwVG9rZW4ubWF0Y2hlcztcclxuICAgICAgICAvLyAgICAgbWF0Y2ggPSB0bXBNYXRjaDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKCFtYXRjaC5pc0dyb3VwKSB7XHJcbiAgICAgICAgICBtYXRjaCA9IGdyb3VwaWZ5KFttYXRjaF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXRjaGVzLnB1c2gobWF0Y2gpO1xyXG4gICAgICAgIG1hdGNoZXMucHVzaChxdWFudGlmaWVyKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2Ugb3B0cy5hbHRlcm5hdG9ybWFya2VyOlxyXG4gICAgICAgIGlmIChvcGVuZW5pbmdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGN1cnJlbnRPcGVuaW5nVG9rZW4gPSBvcGVuZW5pbmdzW29wZW5lbmluZ3MubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICBjb25zdCBzdWJUb2tlbiA9XHJcbiAgICAgICAgICAgIGN1cnJlbnRPcGVuaW5nVG9rZW4ubWF0Y2hlc1tjdXJyZW50T3BlbmluZ1Rva2VuLm1hdGNoZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGN1cnJlbnRPcGVuaW5nVG9rZW4ub3Blbkdyb3VwICYmIC8vIHJlZ2V4cCBhbHQgc3ludGF4XHJcbiAgICAgICAgICAgIChzdWJUb2tlbi5tYXRjaGVzID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICAoc3ViVG9rZW4uaXNHcm91cCA9PT0gZmFsc2UgJiYgc3ViVG9rZW4uaXNBbHRlcm5hdG9yID09PSBmYWxzZSkpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gYWx0ZXJuYXRpb25zIHdpdGhpbiBncm91cFxyXG4gICAgICAgICAgICBsYXN0TWF0Y2ggPSBvcGVuZW5pbmdzLnBvcCgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGFzdE1hdGNoID0gZ3JvdXBRdWFudGlmaWVyKGN1cnJlbnRPcGVuaW5nVG9rZW4ubWF0Y2hlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxhc3RNYXRjaCA9IGdyb3VwUXVhbnRpZmllcihjdXJyZW50VG9rZW4ubWF0Y2hlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsYXN0TWF0Y2guaXNBbHRlcm5hdG9yKSB7XHJcbiAgICAgICAgICBvcGVuZW5pbmdzLnB1c2gobGFzdE1hdGNoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGxhc3RNYXRjaC5hbHRlcm5hdG9yR3JvdXApIHtcclxuICAgICAgICAgICAgYWx0ZXJuYXRvciA9IG9wZW5lbmluZ3MucG9wKCk7XHJcbiAgICAgICAgICAgIGxhc3RNYXRjaC5hbHRlcm5hdG9yR3JvdXAgPSBmYWxzZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsdGVybmF0b3IgPSBuZXcgTWFza1Rva2VuKGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYWx0ZXJuYXRvci5tYXRjaGVzLnB1c2gobGFzdE1hdGNoKTtcclxuICAgICAgICAgIG9wZW5lbmluZ3MucHVzaChhbHRlcm5hdG9yKTtcclxuICAgICAgICAgIGlmIChsYXN0TWF0Y2gub3Blbkdyb3VwKSB7XHJcbiAgICAgICAgICAgIC8vIHJlZ2V4cCBhbHQgc3ludGF4XHJcbiAgICAgICAgICAgIGxhc3RNYXRjaC5vcGVuR3JvdXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc3QgYWx0ZXJuYXRvckdyb3VwID0gbmV3IE1hc2tUb2tlbih0cnVlKTtcclxuICAgICAgICAgICAgYWx0ZXJuYXRvckdyb3VwLmFsdGVybmF0b3JHcm91cCA9IHRydWU7XHJcbiAgICAgICAgICAgIG9wZW5lbmluZ3MucHVzaChhbHRlcm5hdG9yR3JvdXApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBkZWZhdWx0Q2FzZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGNsb3NlUmVnZXhHcm91cCkgY2xvc2VHcm91cCgpO1xyXG5cclxuICB3aGlsZSAob3BlbmVuaW5ncy5sZW5ndGggPiAwKSB7XHJcbiAgICBvcGVuaW5nVG9rZW4gPSBvcGVuZW5pbmdzLnBvcCgpO1xyXG4gICAgY3VycmVudFRva2VuLm1hdGNoZXMucHVzaChvcGVuaW5nVG9rZW4pO1xyXG4gIH1cclxuICBpZiAoY3VycmVudFRva2VuLm1hdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgdmVyaWZ5R3JvdXBNYXJrZXIoY3VycmVudFRva2VuKTtcclxuICAgIG1hc2tUb2tlbnMucHVzaChjdXJyZW50VG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9wdHMubnVtZXJpY0lucHV0IHx8IG9wdHMuaXNSVEwpIHtcclxuICAgIHJldmVyc2VUb2tlbnMobWFza1Rva2Vuc1swXSk7XHJcbiAgfVxyXG4gIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG1hc2tUb2tlbnMpKTtcclxuICByZXR1cm4gbWFza1Rva2VucztcclxufVxyXG4iLCAiLypcclxuICogSW5wdXQgTWFzayBDb3JlXHJcbiAqIGh0dHA6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9qcXVlcnkuaW5wdXRtYXNrXHJcbiAqIENvcHlyaWdodCAoYykgUm9iaW4gSGVyYm90c1xyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICovXHJcblxyXG5pbXBvcnQgZGVmYXVsdHMgZnJvbSBcIi4vZGVmYXVsdHNcIjtcclxuaW1wb3J0IGRlZmluaXRpb25zIGZyb20gXCIuL2RlZmluaXRpb25zXCI7XHJcbmltcG9ydCAkIGZyb20gXCIuL2RlcGVuZGVuY3lMaWJzL2lucHV0bWFzay5kZXBlbmRlbmN5TGliXCI7XHJcbmltcG9ydCB7IEV2ZW50UnVsZXIgfSBmcm9tIFwiLi9ldmVudHJ1bGVyXCI7XHJcbmltcG9ydCB3aW5kb3cgZnJvbSBcIi4vZ2xvYmFsL3dpbmRvd1wiO1xyXG5pbXBvcnQgeyBjaGVja1ZhbCwgdW5tYXNrZWR2YWx1ZSB9IGZyb20gXCIuL2lucHV0SGFuZGxpbmdcIjtcclxuaW1wb3J0IHsgbWFzayB9IGZyb20gXCIuL21hc2tcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVNYXNrU2V0LCBhbmFseXNlTWFzayB9IGZyb20gXCIuL21hc2stbGV4ZXJcIjtcclxuaW1wb3J0IHtcclxuICBkZXRlcm1pbmVMYXN0UmVxdWlyZWRQb3NpdGlvbixcclxuICBnZXRCdWZmZXIsXHJcbiAgZ2V0QnVmZmVyVGVtcGxhdGUsXHJcbiAgaXNNYXNrXHJcbn0gZnJvbSBcIi4vcG9zaXRpb25pbmdcIjtcclxuaW1wb3J0IHsgaXNDb21wbGV0ZSB9IGZyb20gXCIuL3ZhbGlkYXRpb25cIjtcclxuaW1wb3J0IHsgZ2V0TWFza1RlbXBsYXRlIH0gZnJvbSBcIi4vdmFsaWRhdGlvbi10ZXN0c1wiO1xyXG5cclxuY29uc3QgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQsXHJcbiAgZGF0YUtleSA9IFwiX2lucHV0bWFza19vcHRzXCI7XHJcblxyXG5mdW5jdGlvbiBJbnB1dG1hc2soYWxpYXMsIG9wdGlvbnMsIGludGVybmFsKSB7XHJcbiAgLy8gYWxsb3cgaW5zdGFuY2lhdGluZyB3aXRob3V0IG5ld1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBJbnB1dG1hc2spKSB7XHJcbiAgICByZXR1cm4gbmV3IElucHV0bWFzayhhbGlhcywgb3B0aW9ucywgaW50ZXJuYWwpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5kZXBlbmRlbmN5TGliID0gJDtcclxuICB0aGlzLmVsID0gdW5kZWZpbmVkO1xyXG4gIHRoaXMuZXZlbnRzID0ge307XHJcbiAgdGhpcy5tYXNrc2V0ID0gdW5kZWZpbmVkO1xyXG5cclxuICBpZiAoaW50ZXJuYWwgIT09IHRydWUpIHtcclxuICAgIC8vIGluaXQgb3B0aW9uc1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhbGlhcykgPT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcclxuICAgICAgb3B0aW9ucyA9IGFsaWFzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgIGlmIChhbGlhcykgb3B0aW9ucy5hbGlhcyA9IGFsaWFzO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcHRzID0gJC5leHRlbmQodHJ1ZSwge30sIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5ub01hc2tzQ2FjaGUgPSBvcHRpb25zICYmIG9wdGlvbnMuZGVmaW5pdGlvbnMgIT09IHVuZGVmaW5lZDtcclxuICAgIHRoaXMudXNlck9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyB1c2VyIHBhc3NlZCBvcHRpb25zXHJcbiAgICByZXNvbHZlQWxpYXModGhpcy5vcHRzLmFsaWFzLCBvcHRpb25zLCB0aGlzLm9wdHMpO1xyXG4gIH1cclxuXHJcbiAgLy8gbWFza3Njb3BlIHByb3BlcnRpZXNcclxuICB0aGlzLnJlZnJlc2hWYWx1ZSA9IGZhbHNlOyAvLyBpbmRpY2F0ZSBhIHJlZnJlc2ggZnJvbSB0aGUgaW5wdXR2YWx1ZSBpcyBuZWVkZWQgKGZvcm0ucmVzZXQpXHJcbiAgdGhpcy51bmRvVmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgdGhpcy4kZWwgPSB1bmRlZmluZWQ7XHJcbiAgdGhpcy5za2lwSW5wdXRFdmVudCA9IGZhbHNlOyAvLyBza2lwIHdoZW4gdHJpZ2dlcmVkIGZyb20gd2l0aGluIGlucHV0bWFza1xyXG4gIHRoaXMudmFsaWRhdGlvbkV2ZW50ID0gZmFsc2U7XHJcbiAgdGhpcy5pZ25vcmFibGUgPSBmYWxzZTtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXHJcbiAgdGhpcy5tYXhMZW5ndGg7XHJcbiAgdGhpcy5tb3VzZUVudGVyID0gZmFsc2U7XHJcbiAgdGhpcy5jbGlja2VkID0gMDtcclxuICB0aGlzLm9yaWdpbmFsUGxhY2Vob2xkZXIgPSB1bmRlZmluZWQ7IC8vIG5lZWRlZCBmb3IgRkZcclxuICB0aGlzLmlzQ29tcG9zaW5nID0gZmFsc2U7IC8vIGtleWRvd25jb2RlID09IDIyOSAgY29tcG9zaXRpb25ldmVudCBmYWxsYmFja1xyXG4gIHRoaXMuaGFzQWx0ZXJuYXRvciA9IGZhbHNlO1xyXG59XHJcblxyXG5JbnB1dG1hc2sucHJvdG90eXBlID0ge1xyXG4gIGRhdGFBdHRyaWJ1dGU6IFwiZGF0YS1pbnB1dG1hc2tcIiwgLy8gZGF0YSBhdHRyaWJ1dGUgcHJlZml4IHVzZWQgZm9yIGF0dHJpYnV0ZSBiaW5kaW5nXHJcbiAgLy8gb3B0aW9ucyBkZWZhdWx0XHJcbiAgZGVmYXVsdHMsXHJcbiAgZGVmaW5pdGlvbnMsXHJcbiAgYWxpYXNlczoge30sIC8vIGFsaWFzZXMgZGVmaW5pdGlvbnNcclxuICBtYXNrc0NhY2hlOiB7fSxcclxuICBpMThuOiB7fSxcclxuICBnZXQgaXNSVEwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRzLmlzUlRMIHx8IHRoaXMub3B0cy5udW1lcmljSW5wdXQ7XHJcbiAgfSxcclxuICBtYXNrOiBmdW5jdGlvbiAoZWxlbXMpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgaWYgKHR5cGVvZiBlbGVtcyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBlbGVtcyA9XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbXMpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpO1xyXG4gICAgfVxyXG4gICAgZWxlbXMgPSBlbGVtcy5ub2RlTmFtZVxyXG4gICAgICA/IFtlbGVtc11cclxuICAgICAgOiBBcnJheS5pc0FycmF5KGVsZW1zKVxyXG4gICAgICA/IGVsZW1zXHJcbiAgICAgIDogW10uc2xpY2UuY2FsbChlbGVtcyk7IC8vIFtdLnNsaWNlIGFzIGFsdGVybmF0ZSBmb3IgQXJyYXkuZnJvbSAoWWFuZGV4IGJyb3dzZXIpXHJcbiAgICBlbGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgbmR4KSB7XHJcbiAgICAgIGNvbnN0IHNjb3BlZE9wdHMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgdGhhdC5vcHRzKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGltcG9ydEF0dHJpYnV0ZU9wdGlvbnMoXHJcbiAgICAgICAgICBlbCxcclxuICAgICAgICAgIHNjb3BlZE9wdHMsXHJcbiAgICAgICAgICAkLmV4dGVuZCh0cnVlLCB7fSwgdGhhdC51c2VyT3B0aW9ucyksXHJcbiAgICAgICAgICB0aGF0LmRhdGFBdHRyaWJ1dGVcclxuICAgICAgICApXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IG1hc2tzZXQgPSBnZW5lcmF0ZU1hc2tTZXQoc2NvcGVkT3B0cywgdGhhdC5ub01hc2tzQ2FjaGUpO1xyXG4gICAgICAgIGlmIChtYXNrc2V0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGlmIChlbC5pbnB1dG1hc2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBlbC5pbnB1dG1hc2sub3B0cy5hdXRvVW5tYXNrID0gdHJ1ZTsgLy8gZm9yY2UgYXV0b3VubWFza2luZyB3aGVuIHJlbWFza2luZ1xyXG4gICAgICAgICAgICBlbC5pbnB1dG1hc2sucmVtb3ZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBzdG9yZSBpbnB1dG1hc2sgaW5zdGFuY2Ugb24gdGhlIGlucHV0IHdpdGggZWxlbWVudCByZWZlcmVuY2VcclxuICAgICAgICAgIGVsLmlucHV0bWFzayA9IG5ldyBJbnB1dG1hc2sodW5kZWZpbmVkLCB1bmRlZmluZWQsIHRydWUpO1xyXG4gICAgICAgICAgZWwuaW5wdXRtYXNrLm9wdHMgPSBzY29wZWRPcHRzO1xyXG4gICAgICAgICAgZWwuaW5wdXRtYXNrLm5vTWFza3NDYWNoZSA9IHRoYXQubm9NYXNrc0NhY2hlO1xyXG4gICAgICAgICAgZWwuaW5wdXRtYXNrLnVzZXJPcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIHRoYXQudXNlck9wdGlvbnMpO1xyXG4gICAgICAgICAgLy8gZWwuaW5wdXRtYXNrLmlzUlRMID0gc2NvcGVkT3B0cy5pc1JUTCB8fCBzY29wZWRPcHRzLm51bWVyaWNJbnB1dDtcclxuICAgICAgICAgIGVsLmlucHV0bWFzay5lbCA9IGVsO1xyXG4gICAgICAgICAgZWwuaW5wdXRtYXNrLiRlbCA9ICQoZWwpO1xyXG4gICAgICAgICAgZWwuaW5wdXRtYXNrLm1hc2tzZXQgPSBtYXNrc2V0O1xyXG5cclxuICAgICAgICAgICQuZGF0YShlbCwgZGF0YUtleSwgdGhhdC51c2VyT3B0aW9ucyk7XHJcbiAgICAgICAgICBtYXNrLmNhbGwoZWwuaW5wdXRtYXNrKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGVsZW1zICYmIGVsZW1zWzBdID8gZWxlbXNbMF0uaW5wdXRtYXNrIHx8IHRoaXMgOiB0aGlzO1xyXG4gIH0sXHJcbiAgb3B0aW9uOiBmdW5jdGlvbiAob3B0aW9ucywgbm9yZW1hc2spIHtcclxuICAgIC8vIHNldCBleHRyYSBvcHRpb25zIHx8IHJldHJpZXZlIHZhbHVlIG9mIGEgY3VycmVudCBvcHRpb25cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5vcHRzW29wdGlvbnNdO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAkLmV4dGVuZCh0aGlzLnVzZXJPcHRpb25zLCBvcHRpb25zKTsgLy8gdXNlciBwYXNzZWQgb3B0aW9uc1xyXG4gICAgICAvLyByZW1hc2tcclxuICAgICAgaWYgKHRoaXMuZWwgJiYgbm9yZW1hc2sgIT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLm1hc2sodGhpcy5lbCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgfSxcclxuICB1bm1hc2tlZHZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIHRoaXMubWFza3NldCA9XHJcbiAgICAgIHRoaXMubWFza3NldCB8fCBnZW5lcmF0ZU1hc2tTZXQodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSk7XHJcbiAgICBpZiAodGhpcy5lbCA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgdmFsdWVCdWZmZXIgPSAoXHJcbiAgICAgICAgdHlwZW9mIHRoaXMub3B0cy5vbkJlZm9yZU1hc2sgPT09IFwiZnVuY3Rpb25cIlxyXG4gICAgICAgICAgPyB0aGlzLm9wdHMub25CZWZvcmVNYXNrLmNhbGwodGhpcywgdmFsdWUsIHRoaXMub3B0cykgfHwgdmFsdWVcclxuICAgICAgICAgIDogdmFsdWVcclxuICAgICAgKS5zcGxpdChcIlwiKTtcclxuICAgICAgY2hlY2tWYWwuY2FsbCh0aGlzLCB1bmRlZmluZWQsIGZhbHNlLCBmYWxzZSwgdmFsdWVCdWZmZXIpO1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0cy5vbkJlZm9yZVdyaXRlID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgdGhpcy5vcHRzLm9uQmVmb3JlV3JpdGUuY2FsbChcclxuICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICBnZXRCdWZmZXIuY2FsbCh0aGlzKSxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICB0aGlzLm9wdHNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVubWFza2VkdmFsdWUuY2FsbCh0aGlzLCB0aGlzLmVsKTtcclxuICB9LFxyXG4gIHJlbW92ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuZWwpIHtcclxuICAgICAgJC5kYXRhKHRoaXMuZWwsIGRhdGFLZXksIG51bGwpOyAvLyBpbnZhbGlkYXRlXHJcbiAgICAgIC8vIHdyaXRlb3V0IHRoZSB2YWx1ZVxyXG4gICAgICBjb25zdCBjdiA9IHRoaXMub3B0cy5hdXRvVW5tYXNrXHJcbiAgICAgICAgPyB1bm1hc2tlZHZhbHVlKHRoaXMuZWwpXHJcbiAgICAgICAgOiB0aGlzLl92YWx1ZUdldCh0aGlzLm9wdHMuYXV0b1VubWFzayk7XHJcbiAgICAgIGlmIChjdiAhPT0gZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbCh0aGlzKS5qb2luKFwiXCIpKVxyXG4gICAgICAgIHRoaXMuX3ZhbHVlU2V0KGN2LCB0aGlzLm9wdHMuYXV0b1VubWFzayk7XHJcbiAgICAgIGVsc2UgdGhpcy5fdmFsdWVTZXQoXCJcIik7XHJcbiAgICAgIC8vIHVuYmluZCBhbGwgZXZlbnRzXHJcbiAgICAgIEV2ZW50UnVsZXIub2ZmKHRoaXMuZWwpO1xyXG5cclxuICAgICAgLy8gcmVzdG9yZSB0aGUgdmFsdWUgcHJvcGVydHlcclxuICAgICAgbGV0IHZhbHVlUHJvcGVydHk7XHJcbiAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZikge1xyXG4gICAgICAgIHZhbHVlUHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxyXG4gICAgICAgICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMuZWwpLFxyXG4gICAgICAgICAgXCJ2YWx1ZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAodmFsdWVQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuX192YWx1ZUdldCkge1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5lbCwgXCJ2YWx1ZVwiLCB7XHJcbiAgICAgICAgICAgICAgZ2V0OiB0aGlzLl9fdmFsdWVHZXQsXHJcbiAgICAgICAgICAgICAgc2V0OiB0aGlzLl9fdmFsdWVTZXQsXHJcbiAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBkb2N1bWVudC5fX2xvb2t1cEdldHRlcl9fICYmXHJcbiAgICAgICAgdGhpcy5lbC5fX2xvb2t1cEdldHRlcl9fKFwidmFsdWVcIilcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX192YWx1ZUdldCkge1xyXG4gICAgICAgICAgdGhpcy5lbC5fX2RlZmluZUdldHRlcl9fKFwidmFsdWVcIiwgdGhpcy5fX3ZhbHVlR2V0KTtcclxuICAgICAgICAgIHRoaXMuZWwuX19kZWZpbmVTZXR0ZXJfXyhcInZhbHVlXCIsIHRoaXMuX192YWx1ZVNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIGNsZWFyIGRhdGFcclxuICAgICAgdGhpcy5lbC5pbnB1dG1hc2sgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5lbDtcclxuICB9LFxyXG4gIGdldGVtcHR5bWFzazogZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gcmV0dXJuIHRoZSBkZWZhdWx0IChlbXB0eSkgbWFzayB2YWx1ZSwgdXNlZnVsbCBmb3Igc2V0dGluZyB0aGUgZGVmYXVsdCB2YWx1ZSBpbiB2YWxpZGF0aW9uXHJcbiAgICB0aGlzLm1hc2tzZXQgPVxyXG4gICAgICB0aGlzLm1hc2tzZXQgfHwgZ2VuZXJhdGVNYXNrU2V0KHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5pc1JUTFxyXG4gICAgICAgID8gZ2V0QnVmZmVyVGVtcGxhdGUuY2FsbCh0aGlzKS5yZXZlcnNlKClcclxuICAgICAgICA6IGdldEJ1ZmZlclRlbXBsYXRlLmNhbGwodGhpcylcclxuICAgICkuam9pbihcIlwiKTtcclxuICB9LFxyXG4gIGhhc01hc2tlZFZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBjaGVjayB3aGV0ZXIgdGhlIHJldHVybmVkIHZhbHVlIGlzIG1hc2tlZCBvciBub3Q7IGN1cnJlbnRseSBvbmx5IHdvcmtzIHJlbGlhYmxlIHdoZW4gdXNpbmcganF1ZXJ5LnZhbCBmbiB0byByZXRyaWV2ZSB0aGUgdmFsdWVcclxuICAgIHJldHVybiAhdGhpcy5vcHRzLmF1dG9Vbm1hc2s7XHJcbiAgfSxcclxuICBpc0NvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLm1hc2tzZXQgPVxyXG4gICAgICB0aGlzLm1hc2tzZXQgfHwgZ2VuZXJhdGVNYXNrU2V0KHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpO1xyXG4gICAgcmV0dXJuIGlzQ29tcGxldGUuY2FsbCh0aGlzLCBnZXRCdWZmZXIuY2FsbCh0aGlzKSk7XHJcbiAgfSxcclxuICBnZXRtZXRhZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gcmV0dXJuIG1hc2sgbWV0YWRhdGEgaWYgZXhpc3RzXHJcbiAgICB0aGlzLm1hc2tzZXQgPVxyXG4gICAgICB0aGlzLm1hc2tzZXQgfHwgZ2VuZXJhdGVNYXNrU2V0KHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5tYXNrc2V0Lm1ldGFkYXRhKSkge1xyXG4gICAgICBsZXQgbWFza1RhcmdldCA9IGdldE1hc2tUZW1wbGF0ZS5jYWxsKHRoaXMsIHRydWUsIDAsIGZhbHNlKS5qb2luKFwiXCIpO1xyXG4gICAgICB0aGlzLm1hc2tzZXQubWV0YWRhdGEuZm9yRWFjaChmdW5jdGlvbiAobXRkdCkge1xyXG4gICAgICAgIGlmIChtdGR0Lm1hc2sgPT09IG1hc2tUYXJnZXQpIHtcclxuICAgICAgICAgIG1hc2tUYXJnZXQgPSBtdGR0O1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gbWFza1RhcmdldDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLm1hc2tzZXQubWV0YWRhdGE7XHJcbiAgfSxcclxuICBpc1ZhbGlkOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIHRoaXMubWFza3NldCA9XHJcbiAgICAgIHRoaXMubWFza3NldCB8fCBnZW5lcmF0ZU1hc2tTZXQodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSk7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgY29uc3QgdmFsdWVCdWZmZXIgPSAoXHJcbiAgICAgICAgdHlwZW9mIHRoaXMub3B0cy5vbkJlZm9yZU1hc2sgPT09IFwiZnVuY3Rpb25cIlxyXG4gICAgICAgICAgPyB0aGlzLm9wdHMub25CZWZvcmVNYXNrLmNhbGwodGhpcywgdmFsdWUsIHRoaXMub3B0cykgfHwgdmFsdWVcclxuICAgICAgICAgIDogdmFsdWVcclxuICAgICAgKS5zcGxpdChcIlwiKTtcclxuICAgICAgY2hlY2tWYWwuY2FsbCh0aGlzLCB1bmRlZmluZWQsIHRydWUsIGZhbHNlLCB2YWx1ZUJ1ZmZlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWx1ZSA9IHRoaXMuaXNSVExcclxuICAgICAgICA/IGdldEJ1ZmZlci5jYWxsKHRoaXMpLnNsaWNlKCkucmV2ZXJzZSgpLmpvaW4oXCJcIilcclxuICAgICAgICA6IGdldEJ1ZmZlci5jYWxsKHRoaXMpLmpvaW4oXCJcIik7XHJcbiAgICB9XHJcbiAgICBsZXQgYnVmZmVyID0gZ2V0QnVmZmVyLmNhbGwodGhpcyksXHJcbiAgICAgIHJsID0gZGV0ZXJtaW5lTGFzdFJlcXVpcmVkUG9zaXRpb24uY2FsbCh0aGlzKSxcclxuICAgICAgbG1pYiA9IGJ1ZmZlci5sZW5ndGggLSAxO1xyXG4gICAgZm9yICg7IGxtaWIgPiBybDsgbG1pYi0tKSB7XHJcbiAgICAgIGlmIChpc01hc2suY2FsbCh0aGlzLCBsbWliKSkgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBidWZmZXIuc3BsaWNlKHJsLCBsbWliICsgMSAtIHJsKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBpc0NvbXBsZXRlLmNhbGwodGhpcywgYnVmZmVyKSAmJlxyXG4gICAgICB2YWx1ZSA9PT1cclxuICAgICAgICAodGhpcy5pc1JUTFxyXG4gICAgICAgICAgPyBnZXRCdWZmZXIuY2FsbCh0aGlzKS5zbGljZSgpLnJldmVyc2UoKS5qb2luKFwiXCIpXHJcbiAgICAgICAgICA6IGdldEJ1ZmZlci5jYWxsKHRoaXMpLmpvaW4oXCJcIikpXHJcbiAgICApO1xyXG4gIH0sXHJcbiAgZm9ybWF0OiBmdW5jdGlvbiAodmFsdWUsIG1ldGFkYXRhKSB7XHJcbiAgICB0aGlzLm1hc2tzZXQgPVxyXG4gICAgICB0aGlzLm1hc2tzZXQgfHwgZ2VuZXJhdGVNYXNrU2V0KHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpO1xyXG4gICAgY29uc3QgdmFsdWVCdWZmZXIgPSAoXHJcbiAgICAgIHR5cGVvZiB0aGlzLm9wdHMub25CZWZvcmVNYXNrID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgICA/IHRoaXMub3B0cy5vbkJlZm9yZU1hc2suY2FsbCh0aGlzLCB2YWx1ZSwgdGhpcy5vcHRzKSB8fCB2YWx1ZVxyXG4gICAgICAgIDogdmFsdWVcclxuICAgICkuc3BsaXQoXCJcIik7XHJcbiAgICBjaGVja1ZhbC5jYWxsKHRoaXMsIHVuZGVmaW5lZCwgdHJ1ZSwgZmFsc2UsIHZhbHVlQnVmZmVyKTtcclxuICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gdGhpcy5pc1JUTFxyXG4gICAgICA/IGdldEJ1ZmZlci5jYWxsKHRoaXMpLnNsaWNlKCkucmV2ZXJzZSgpLmpvaW4oXCJcIilcclxuICAgICAgOiBnZXRCdWZmZXIuY2FsbCh0aGlzKS5qb2luKFwiXCIpO1xyXG4gICAgcmV0dXJuIG1ldGFkYXRhXHJcbiAgICAgID8ge1xyXG4gICAgICAgICAgdmFsdWU6IGZvcm1hdHRlZFZhbHVlLFxyXG4gICAgICAgICAgbWV0YWRhdGE6IHRoaXMuZ2V0bWV0YWRhdGEoKVxyXG4gICAgICAgIH1cclxuICAgICAgOiBmb3JtYXR0ZWRWYWx1ZTtcclxuICB9LFxyXG4gIHNldFZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIGlmICh0aGlzLmVsKSB7XHJcbiAgICAgICQodGhpcy5lbCkudHJpZ2dlcihcInNldHZhbHVlXCIsIFt2YWx1ZV0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYW5hbHlzZU1hc2tcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlc29sdmVBbGlhcyhhbGlhc1N0ciwgb3B0aW9ucywgb3B0cykge1xyXG4gIGNvbnN0IGFsaWFzRGVmaW5pdGlvbiA9IElucHV0bWFzay5wcm90b3R5cGUuYWxpYXNlc1thbGlhc1N0cl07XHJcbiAgaWYgKGFsaWFzRGVmaW5pdGlvbikge1xyXG4gICAgaWYgKGFsaWFzRGVmaW5pdGlvbi5hbGlhcylcclxuICAgICAgcmVzb2x2ZUFsaWFzKGFsaWFzRGVmaW5pdGlvbi5hbGlhcywgdW5kZWZpbmVkLCBvcHRzKTsgLy8gYWxpYXMgaXMgYW5vdGhlciBhbGlhc1xyXG4gICAgJC5leHRlbmQodHJ1ZSwgb3B0cywgYWxpYXNEZWZpbml0aW9uKTsgLy8gbWVyZ2UgYWxpYXMgZGVmaW5pdGlvbiBpbiB0aGUgb3B0aW9uc1xyXG4gICAgJC5leHRlbmQodHJ1ZSwgb3B0cywgb3B0aW9ucyk7IC8vIHJlYXBwbHkgZXh0cmEgZ2l2ZW4gb3B0aW9uc1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSAvLyBhbGlhcyBub3QgZm91bmQgLSB0cnkgYXMgbWFza1xyXG4gIGVsc2UgaWYgKG9wdHMubWFzayA9PT0gbnVsbCkge1xyXG4gICAgb3B0cy5tYXNrID0gYWxpYXNTdHI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGltcG9ydEF0dHJpYnV0ZU9wdGlvbnMobnB0LCBvcHRzLCB1c2VyT3B0aW9ucywgZGF0YUF0dHJpYnV0ZSkge1xyXG4gIGZ1bmN0aW9uIGltcG9ydE9wdGlvbihvcHRpb24sIG9wdGlvbkRhdGEpIHtcclxuICAgIGNvbnN0IGF0dHJPcHRpb24gPVxyXG4gICAgICBkYXRhQXR0cmlidXRlID09PSBcIlwiID8gb3B0aW9uIDogZGF0YUF0dHJpYnV0ZSArIFwiLVwiICsgb3B0aW9uO1xyXG4gICAgb3B0aW9uRGF0YSA9XHJcbiAgICAgIG9wdGlvbkRhdGEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbkRhdGEgOiBucHQuZ2V0QXR0cmlidXRlKGF0dHJPcHRpb24pO1xyXG4gICAgaWYgKG9wdGlvbkRhdGEgIT09IG51bGwpIHtcclxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25EYXRhID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbi5pbmRleE9mKFwib25cIikgPT09IDApIHtcclxuICAgICAgICAgIG9wdGlvbkRhdGEgPSB3aW5kb3dbb3B0aW9uRGF0YV07XHJcbiAgICAgICAgfSAvLyBnZXQgZnVuY3Rpb24gZGVmaW5pdGlvblxyXG4gICAgICAgIGVsc2UgaWYgKG9wdGlvbkRhdGEgPT09IFwiZmFsc2VcIikge1xyXG4gICAgICAgICAgb3B0aW9uRGF0YSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9uRGF0YSA9PT0gXCJ0cnVlXCIpIG9wdGlvbkRhdGEgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHVzZXJPcHRpb25zW29wdGlvbl0gPSBvcHRpb25EYXRhO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKG9wdHMuaW1wb3J0RGF0YUF0dHJpYnV0ZXMgPT09IHRydWUpIHtcclxuICAgIGxldCBhdHRyT3B0aW9ucyA9IG5wdC5nZXRBdHRyaWJ1dGUoZGF0YUF0dHJpYnV0ZSksXHJcbiAgICAgIG9wdGlvbixcclxuICAgICAgZGF0YW9wdGlvbnMsXHJcbiAgICAgIG9wdGlvbkRhdGEsXHJcbiAgICAgIHA7XHJcblxyXG4gICAgaWYgKGF0dHJPcHRpb25zICYmIGF0dHJPcHRpb25zICE9PSBcIlwiKSB7XHJcbiAgICAgIGF0dHJPcHRpb25zID0gYXR0ck9wdGlvbnMucmVwbGFjZSgvJy9nLCAnXCInKTtcclxuICAgICAgZGF0YW9wdGlvbnMgPSBKU09OLnBhcnNlKFwie1wiICsgYXR0ck9wdGlvbnMgKyBcIn1cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVzb2x2ZSBhbGlhc2VzXHJcbiAgICBpZiAoZGF0YW9wdGlvbnMpIHtcclxuICAgICAgLy8gcGlja3VwIGFsaWFzIGZyb20gZGF0YUF0dHJpYnV0ZVxyXG4gICAgICBvcHRpb25EYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgICBmb3IgKHAgaW4gZGF0YW9wdGlvbnMpIHtcclxuICAgICAgICBpZiAocC50b0xvd2VyQ2FzZSgpID09PSBcImFsaWFzXCIpIHtcclxuICAgICAgICAgIG9wdGlvbkRhdGEgPSBkYXRhb3B0aW9uc1twXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW1wb3J0T3B0aW9uKFwiYWxpYXNcIiwgb3B0aW9uRGF0YSk7IC8vIHBpY2t1cCBhbGlhcyBmcm9tIGRhdGFBdHRyaWJ1dGUtYWxpYXNcclxuICAgIGlmICh1c2VyT3B0aW9ucy5hbGlhcykge1xyXG4gICAgICByZXNvbHZlQWxpYXModXNlck9wdGlvbnMuYWxpYXMsIHVzZXJPcHRpb25zLCBvcHRzKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKG9wdGlvbiBpbiBvcHRzKSB7XHJcbiAgICAgIGlmIChkYXRhb3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbkRhdGEgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZm9yIChwIGluIGRhdGFvcHRpb25zKSB7XHJcbiAgICAgICAgICBpZiAocC50b0xvd2VyQ2FzZSgpID09PSBvcHRpb24udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICBvcHRpb25EYXRhID0gZGF0YW9wdGlvbnNbcF07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpbXBvcnRPcHRpb24ob3B0aW9uLCBvcHRpb25EYXRhKTtcclxuICAgIH1cclxuICB9XHJcbiAgJC5leHRlbmQodHJ1ZSwgb3B0cywgdXNlck9wdGlvbnMpO1xyXG5cclxuICAvLyBoYW5kbGUgZGlyPXJ0bFxyXG4gIGlmIChucHQuZGlyID09PSBcInJ0bFwiIHx8IG9wdHMucmlnaHRBbGlnbikge1xyXG4gICAgbnB0LnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIjtcclxuICB9XHJcblxyXG4gIGlmIChucHQuZGlyID09PSBcInJ0bFwiIHx8IG9wdHMubnVtZXJpY0lucHV0KSB7XHJcbiAgICBucHQuZGlyID0gXCJsdHJcIjtcclxuICAgIG5wdC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXJcIik7XHJcbiAgICBvcHRzLmlzUlRMID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3Qua2V5cyh1c2VyT3B0aW9ucykubGVuZ3RoO1xyXG59XHJcblxyXG4vLyBhcHBseSBkZWZhdWx0cywgZGVmaW5pdGlvbnMsIGFsaWFzZXNcclxuSW5wdXRtYXNrLmV4dGVuZERlZmF1bHRzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAkLmV4dGVuZCh0cnVlLCBJbnB1dG1hc2sucHJvdG90eXBlLmRlZmF1bHRzLCBvcHRpb25zKTtcclxufTtcclxuSW5wdXRtYXNrLmV4dGVuZERlZmluaXRpb25zID0gZnVuY3Rpb24gKGRlZmluaXRpb24pIHtcclxuICAkLmV4dGVuZCh0cnVlLCBJbnB1dG1hc2sucHJvdG90eXBlLmRlZmluaXRpb25zLCBkZWZpbml0aW9uKTtcclxufTtcclxuSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMgPSBmdW5jdGlvbiAoYWxpYXMpIHtcclxuICAkLmV4dGVuZCh0cnVlLCBJbnB1dG1hc2sucHJvdG90eXBlLmFsaWFzZXMsIGFsaWFzKTtcclxufTtcclxuLy8gc3RhdGljIGZuIG9uIGlucHV0bWFza1xyXG5JbnB1dG1hc2suZm9ybWF0ID0gZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zLCBtZXRhZGF0YSkge1xyXG4gIHJldHVybiBJbnB1dG1hc2sob3B0aW9ucykuZm9ybWF0KHZhbHVlLCBtZXRhZGF0YSk7XHJcbn07XHJcbklucHV0bWFzay51bm1hc2sgPSBmdW5jdGlvbiAodmFsdWUsIG9wdGlvbnMpIHtcclxuICByZXR1cm4gSW5wdXRtYXNrKG9wdGlvbnMpLnVubWFza2VkdmFsdWUodmFsdWUpO1xyXG59O1xyXG5JbnB1dG1hc2suaXNWYWxpZCA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xyXG4gIHJldHVybiBJbnB1dG1hc2sob3B0aW9ucykuaXNWYWxpZCh2YWx1ZSk7XHJcbn07XHJcbklucHV0bWFzay5yZW1vdmUgPSBmdW5jdGlvbiAoZWxlbXMpIHtcclxuICBpZiAodHlwZW9mIGVsZW1zID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICBlbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1zKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1zKTtcclxuICB9XHJcbiAgZWxlbXMgPSBlbGVtcy5ub2RlTmFtZSA/IFtlbGVtc10gOiBlbGVtcztcclxuICBlbGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgaWYgKGVsLmlucHV0bWFzaykgZWwuaW5wdXRtYXNrLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG59O1xyXG5JbnB1dG1hc2suc2V0VmFsdWUgPSBmdW5jdGlvbiAoZWxlbXMsIHZhbHVlKSB7XHJcbiAgaWYgKHR5cGVvZiBlbGVtcyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgZWxlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtcykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtcyk7XHJcbiAgfVxyXG4gIGVsZW1zID0gZWxlbXMubm9kZU5hbWUgPyBbZWxlbXNdIDogZWxlbXM7XHJcbiAgZWxlbXMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcclxuICAgIGlmIChlbC5pbnB1dG1hc2spIGVsLmlucHV0bWFzay5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICBlbHNlICQoZWwpLnRyaWdnZXIoXCJzZXR2YWx1ZVwiLCBbdmFsdWVdKTtcclxuICB9KTtcclxufTtcclxuXHJcbklucHV0bWFzay5kZXBlbmRlbmN5TGliID0gJDtcclxuXHJcbi8vIG1ha2UgaW5wdXRtYXNrIGF2YWlsYWJsZVxyXG53aW5kb3cuSW5wdXRtYXNrID0gSW5wdXRtYXNrO1xyXG5leHBvcnQgZGVmYXVsdCBJbnB1dG1hc2s7XHJcbiIsICJpbXBvcnQgXCJpbnB1dG1hc2svbGliL2pxdWVyeS5pbnB1dG1hc2suanNcIjtcblxuaW1wb3J0IHsgQmFzZVdpZGdldCB9IGZyb20gXCIuLi9jb3JlL2NvcmUud2lkZ2V0LmpzXCI7XG5cbi8qKlxuICogX19QcmltZUZhY2VzIElucHV0TWFzayBXaWRnZXRfX1xuICogXG4gKiBJbnB1dE1hc2sgZm9yY2VzIGFuIGlucHV0IHRvIGZpdCBpbiBhIGRlZmluZWQgbWFzayB0ZW1wbGF0ZS5cbiAqIFxuICogQGludGVyZmFjZSB7UHJpbWVGYWNlcy53aWRnZXQuSW5wdXRNYXNrQ2ZnfSBjZmcgVGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSB7QGxpbmsgIElucHV0TWFza3wgSW5wdXRNYXNrIHdpZGdldH0uXG4gKiBZb3UgY2FuIGFjY2VzcyB0aGlzIGNvbmZpZ3VyYXRpb24gdmlhIHtAbGluayBQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0LmNmZ3xCYXNlV2lkZ2V0LmNmZ30uIFBsZWFzZSBub3RlIHRoYXQgdGhpc1xuICogY29uZmlndXJhdGlvbiBpcyB1c3VhbGx5IG1lYW50IHRvIGJlIHJlYWQtb25seSBhbmQgc2hvdWxkIG5vdCBiZSBtb2RpZmllZC5cbiAqIEBleHRlbmRzIHtQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0Q2ZnfSBjZmdcbiAqIEBleHRlbmRzIHtJbnB1dG1hc2suT3B0aW9uc30gY2ZnXG4gKiBcbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy5tYXNrIFRoZSBtYXNrIHRlbXBsYXRlIHRvIHVzZS5cbiAqIEBwcm9wIHtib29sZWFufSBoYXNGbG9hdExhYmVsIElzIHRoaXMgY29tcG9uZW50IHdyYXBwZWQgaW4gYSBmbG9hdCBsYWJlbC5cbiAqL1xuZXhwb3J0IGNsYXNzIElucHV0TWFzayBleHRlbmRzIEJhc2VXaWRnZXQge1xuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMuUGFydGlhbFdpZGdldENmZzxUQ2ZnPn0gY2ZnXG4gICAgICovXG4gICAgaW5pdChjZmcpIHtcbiAgICAgICAgc3VwZXIuaW5pdChjZmcpO1xuICAgICAgICB0aGlzLmhhc0Zsb2F0TGFiZWwgPSBQcmltZUZhY2VzLnV0aWxzLmhhc0Zsb2F0TGFiZWwodGhpcy5qcSk7XG5cbiAgICAgICAgdGhpcy5hcHBseU1hc2soKTtcblxuICAgICAgICAvL1Zpc3VhbHNcbiAgICAgICAgUHJpbWVGYWNlcy5za2luSW5wdXQodGhpcy5qcSk7XG4gICAgfVxuICAgIFxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmpxLmlucHV0bWFzaygncmVtb3ZlJyk7XG5cbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5cyB0aGUgbWFzayB0byB0aGUgaW5wdXQuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhcHBseU1hc2soKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0Zsb2F0TGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuY2ZnLnNob3dNYXNrT25Ib3ZlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuY2ZnLm1hc2sgJiYgIXRoaXMuanEuaXMoJ1tyZWFkb25seV0nKSAmJiAhdGhpcy5qcS5pcygnOmRpc2FibGVkJykpIHtcbiAgICAgICAgICAgIHRoaXMuY2ZnLmNsZWFySW5jb21wbGV0ZSA9ICh0aGlzLmNmZy5hdXRvQ2xlYXIgPT09IHVuZGVmaW5lZCkgPyB0cnVlIDogdGhpcy5jZmcuYXV0b0NsZWFyO1xuICAgICAgICAgICAgdGhpcy5qcS5pbnB1dG1hc2soJ3JlbW92ZScpLmlucHV0bWFzayh0aGlzLmNmZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGlzIGlucHV0IGZpZWxkIHRvIHRoZSBnaXZlbiB2YWx1ZS4gSWYgdGhlIHZhbHVlIGRvZXMgbm90IGZpdCB0aGUgbWFzaywgaXQgaXMgYWRqdXN0ZWRcbiAgICAgKiBhcHByb3ByaWF0ZWx5LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBOZXcgdmFsdWUgdG8gc2V0IG9uIHRoaXMgaW5wdXQgZmllbGRcbiAgICAgKi9cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmpxLmlucHV0bWFzayhcInNldHZhbHVlXCIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoaXMgaW5wdXQgZmllbGQgaW5jbHVkaW5nIHRoZSBtYXNrIGxpa2UgXCIxMi8zMS8xOTk5XCIuXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgY3VycmVudCB2YWx1ZSBvZiB0aGlzIGlucHV0IGZpZWxkIHdpdGggbWFzay5cbiAgICAgKi9cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuanEudmFsKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGlzIGlucHV0IGZpZWxkIHdpdGhvdXQgdGhlIG1hc2sgbGlrZSBcIjEyMzExOTk5XCIuXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgY3VycmVudCB2YWx1ZSBvZiB0aGlzIGlucHV0IGZpZWxkIHdpdGhvdXQgbWFzay5cbiAgICAgKi9cbiAgICBnZXRWYWx1ZVVubWFza2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5qcS5pbnB1dG1hc2soJ3VubWFza2VkdmFsdWUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyB0aGlzIGlucHV0IHNvIHRoYXQgdGhlIHVzZXIgY2Fubm90IGVudGVyIGEgdmFsdWUgYW55bW9yZS5cbiAgICAgKi9cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICB0aGlzLmpxLmlucHV0bWFzaygncmVtb3ZlJyk7XG4gICAgICAgIFByaW1lRmFjZXMudXRpbHMuZGlzYWJsZUlucHV0V2lkZ2V0KHRoaXMuanEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgdGhpcyBpbnB1dCBzbyB0aGF0IHRoZSB1c2VyIGNhbiBlbnRlciBhIHZhbHVlLlxuICAgICAqL1xuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgUHJpbWVGYWNlcy51dGlscy5lbmFibGVJbnB1dFdpZGdldCh0aGlzLmpxKTtcbiAgICAgICAgdGhpcy5hcHBseU1hc2soKTtcbiAgICB9XG5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7QUFNQTs7O0FDTkEsSUFBTyxtQkFBUTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsYUFBYTtBQUFBLEVBQ2IsZ0JBQWdCLENBQUMsS0FBSyxHQUFHO0FBQUEsRUFDekIsa0JBQWtCLENBQUMsS0FBSyxHQUFHO0FBQUEsRUFDM0IsYUFBYSxDQUFDLEtBQUssR0FBRztBQUFBLEVBQ3RCLGtCQUFrQjtBQUFBLEVBQ2xCLFlBQVk7QUFBQSxFQUNaLE1BQU07QUFBQTtBQUFBLEVBQ04sT0FBTztBQUFBO0FBQUEsRUFDUCxZQUFZLE1BQU07QUFBQSxFQUFDO0FBQUE7QUFBQSxFQUNuQixjQUFjLE1BQU07QUFBQSxFQUFDO0FBQUE7QUFBQSxFQUNyQixXQUFXLE1BQU07QUFBQSxFQUFDO0FBQUE7QUFBQSxFQUNsQixRQUFRO0FBQUE7QUFBQSxFQUNSLFFBQVE7QUFBQTtBQUFBLEVBQ1IsWUFBWTtBQUFBO0FBQUEsRUFDWixvQkFBb0I7QUFBQTtBQUFBLEVBQ3BCLHNCQUFzQjtBQUFBLEVBQ3RCLFlBQVk7QUFBQTtBQUFBLEVBQ1osa0JBQWtCO0FBQUE7QUFBQSxFQUNsQixpQkFBaUI7QUFBQTtBQUFBLEVBQ2pCLE9BQU87QUFBQSxFQUNQLFdBQVcsTUFBTTtBQUFBLEVBQUM7QUFBQTtBQUFBLEVBQ2xCLGNBQWM7QUFBQTtBQUFBLEVBQ2QsZUFBZSxTQUFVLGFBQWEsTUFBTTtBQUMxQyxXQUFPLE9BQU8sS0FBSyxpQkFBaUIs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R0FBRyxVQUFVLFFBQVE7QUFFMUIsVUFBTSxRQUFRO0FBQUEsRUFDbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsWUFBWTtBQUNSLFFBQUksS0FBSyxlQUFlO0FBQ3BCLFdBQUssSUFBSSxrQkFBa0I7QUFBQSxJQUMvQjtBQUNBLFFBQUcsS0FBSyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxZQUFZLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxXQUFXLEdBQUc7QUFDdkUsV0FBSyxJQUFJLGtCQUFtQixLQUFLLElBQUksY0FBYyxTQUFhLE9BQU8sS0FBSyxJQUFJO0FBQ2hGLFdBQUssR0FBRyxVQUFVLFFBQVEsRUFBRSxVQUFVLEtBQUssR0FBRztBQUFBLElBQ2xEO0FBQUEsRUFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLFNBQVMsT0FBTztBQUNaLFNBQUssR0FBRyxVQUFVLFlBQVksS0FBSztBQUFBLEVBQ3ZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLFdBQVc7QUFDUCxXQUFPLEtBQUssR0FBRyxJQUFJO0FBQUEsRUFDdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsbUJBQW1CO0FBQ2YsV0FBTyxLQUFLLEdBQUcsVUFBVSxlQUFlO0FBQUEsRUFDNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFVBQVU7QUFDTixTQUFLLEdBQUcsVUFBVSxRQUFRO0FBQzFCLGVBQVcsTUFBTSxtQkFBbUIsS0FBSyxFQUFFO0FBQUEsRUFDL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFNBQVM7QUFDTCxlQUFXLE1BQU0sa0JBQWtCLEtBQUssRUFBRTtBQUMxQyxTQUFLLFVBQVU7QUFBQSxFQUNuQjtBQUVKOyIsCiAgIm5hbWVzIjogWyJkb2N1bWVudCIsICJoYW5kbGVyIiwgImRvY3VtZW50IiwgImNsZWFyT3B0aW9uYWxUYWlsIiwgInRzdCIsICJuZHhJbml0aWFsaXplciIsICJsb29wTmR4IiwgInF1YW50aWZpZXJSZWN1cnNlIiwgImxhdGVzdE1hdGNoIiwgIm1hdGNoIiwgInBvcyIsICJhbHRlcm5hdGVUb2tlbiIsICJjIiwgInN0cmljdCIsICJwb3MiLCAiaW5wdXRtYXNrIiwgImlucHV0IiwgImlucHV0VmFsdWUiLCAicGFzdGVkVmFsdWUiLCAiYnVmZmVyIiwgImNhcmV0UG9zIiwgImNoYXJDb2RlcyIsICJvcHRzIiwgIm5wdCIsICJpbnB1dCIsICJpc1N1cHBvcnRlZCIsICJlbCIsICJtYXNrIiwgIm9wdHMiLCAibWF0Y2giLCAibWF0Y2hlcyIsICJsYXN0TWF0Y2giLCAiZG9jdW1lbnQiXQp9Cg==

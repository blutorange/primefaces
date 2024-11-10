import {
  require_moment
} from "../chunk-DU4T2FPE.js";
import {
  __commonJS,
  __toESM
} from "../chunk-YRJTWU7C.js";

// ../../../../../../.yarn/berry/cache/moment-jdateformatparser-npm-1.2.1-cd11bb3246-10c0.zip/node_modules/moment-jdateformatparser/moment-jdateformatparser.js
var require_moment_jdateformatparser = __commonJS({
  "../../../../../../.yarn/berry/cache/moment-jdateformatparser-npm-1.2.1-cd11bb3246-10c0.zip/node_modules/moment-jdateformatparser/moment-jdateformatparser.js"(exports, module) {
    (function loadMomentJS(root, factory) {
      if (typeof define === "function" && define.amd) {
        define(["moment"], factory);
      } else if (typeof exports === "object") {
        try {
          module.exports = factory(require_moment());
        } catch (ignore) {
          module.exports = factory;
        }
      }
      if (root) {
        root.momentJDateFormatParserSetup = root.moment ? factory(root.moment) : factory;
      }
    })(exports, function loadPlugin(moment2) {
      var javaDateFormats = {};
      var momentDateFormats = {};
      var javaFormatMapping = {
        d: "D",
        dd: "DD",
        y: "YYYY",
        yy: "YY",
        yyy: "YYYY",
        yyyy: "YYYY",
        a: "a",
        A: "A",
        M: "M",
        MM: "MM",
        MMM: "MMM",
        MMMM: "MMMM",
        h: "h",
        hh: "hh",
        H: "H",
        HH: "HH",
        m: "m",
        mm: "mm",
        s: "s",
        ss: "ss",
        S: "SSS",
        SS: "SSS",
        SSS: "SSS",
        E: "ddd",
        EE: "ddd",
        EEE: "ddd",
        EEEE: "dddd",
        EEEEE: "dddd",
        EEEEEE: "dddd",
        D: "DDD",
        w: "W",
        ww: "WW",
        z: "ZZ",
        zzzz: "Z",
        Z: "ZZ",
        X: "ZZ",
        XX: "ZZ",
        XXX: "Z",
        u: "E"
      };
      var momentFormatMapping = {
        D: "d",
        DD: "dd",
        YY: "yy",
        YYY: "yyyy",
        YYYY: "yyyy",
        a: "a",
        A: "a",
        M: "M",
        MM: "MM",
        MMM: "MMM",
        MMMM: "MMMM",
        h: "h",
        hh: "hh",
        H: "H",
        HH: "HH",
        m: "m",
        mm: "mm",
        s: "s",
        ss: "ss",
        S: "S",
        SS: "S",
        SSS: "S",
        ddd: "E",
        dddd: "EEEE",
        DDD: "D",
        W: "w",
        WW: "ww",
        ZZ: "z",
        Z: "XXX",
        E: "u"
      };
      var translateFormat = function(formatString, mapping) {
        var len = formatString.length;
        var i = 0;
        var startIndex = -1;
        var lastChar = null;
        var currentChar = "";
        var resultString = "";
        for (; i < len; i++) {
          currentChar = formatString.charAt(i);
          if (lastChar === null || lastChar !== currentChar) {
            resultString = _appendMappedString(formatString, mapping, startIndex, i, resultString);
            startIndex = i;
          }
          lastChar = currentChar;
        }
        return _appendMappedString(formatString, mapping, startIndex, i, resultString);
      };
      var _appendMappedString = function(formatString, mapping, startIndex, currentIndex, resultString) {
        if (startIndex !== -1) {
          var tempString = formatString.substring(startIndex, currentIndex);
          if (mapping[tempString]) {
            tempString = mapping[tempString];
          }
          resultString += tempString;
        }
        return resultString;
      };
      function init(momentJS) {
        if (!momentJS) {
          throw new Error("Moment JDateFormatParser Plugin - Cannot find moment.js instance.");
        }
        momentJS.fn.__translateJavaFormat = translateFormat;
        momentJS.fn.toMomentFormatString = function(formatString) {
          if (!javaDateFormats[formatString]) {
            var mapped = "";
            var regexp = /[^']+|('[^']*')/g;
            var part = "";
            while (part = regexp.exec(formatString)) {
              part = part[0];
              if (part.match(/'.?'/)) {
                mapped += "[" + part.substring(1, part.length - 1) + "]";
              } else {
                mapped += translateFormat(part, javaFormatMapping);
              }
            }
            javaDateFormats[formatString] = mapped;
          }
          return javaDateFormats[formatString];
        };
        momentJS.fn.formatWithJDF = function(formatString) {
          return this.format(this.toMomentFormatString(formatString));
        };
        momentJS.fn.toJDFString = function(formatString) {
          if (!momentDateFormats[formatString]) {
            momentDateFormats[formatString] = translateFormat(formatString, momentFormatMapping);
          }
          return momentDateFormats[formatString];
        };
      }
      init(moment2);
      return init;
    });
  }
});

// bundles/all/moment/moment.ts
var import_moment = __toESM(require_moment());
var import_moment_jdateformatparser = __toESM(require_moment_jdateformatparser());
Object.assign(window, { moment: import_moment.default, momentJDateFormatParserSetup: import_moment_jdateformatparser.default });
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvbW9tZW50LWpkYXRlZm9ybWF0cGFyc2VyLW5wbS0xLjIuMS1jZDExYmIzMjQ2LTEwYzAuemlwL25vZGVfbW9kdWxlcy9tb21lbnQtamRhdGVmb3JtYXRwYXJzZXIvbW9tZW50LWpkYXRlZm9ybWF0cGFyc2VyLmpzIiwgIi4uLy4uL2J1bmRsZXMvYWxsL21vbWVudC9tb21lbnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIHRoaXMgbG9hZGluZyByb3V0aW5lIGlzIHNoYW1lbGVzc2x5IGNvcGllZCBmcm9tIHRoZSBcIm1vbWVudC1kdXJhdGlvbi1mb3JtYXRcIiBwbHVnaW5cclxuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vanNtcmVlc2UvbW9tZW50LWR1cmF0aW9uLWZvcm1hdFxyXG4oZnVuY3Rpb24gbG9hZE1vbWVudEpTIChyb290LCBmYWN0b3J5KSB7XHJcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgLy8gRGV0ZWN0ZWQgQU1EO1xyXG4gICAgLy8gd2lsbCByZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlXHJcbiAgICBkZWZpbmUoWydtb21lbnQnXSwgZmFjdG9yeSk7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgIC8vIERldGVjdGVkIG5vZGUuanM7XHJcbiAgICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dCBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzXHJcbiAgICAvLyB3aGljaHQgc3VwcG9ydCBgbW9kdWxlLmV4cG9ydHNgLCBsaWtlIG5vZGUuanMgZG9lc1xyXG4gICAgdHJ5IHtcclxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ21vbWVudCcpKTtcclxuICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xyXG4gICAgICAvLyBpZiBgbW9tZW50LmpzYCBpcyBub3QgYXZhaWxhYmxlLCBsZWF2ZSB0aGUgc2V0dXAgdG8gdGhlIHVzZXI7XHJcbiAgICAgIC8vIHRoaXMgaXMgbmVjZXNzYXJ5IGlmIHRoZSB1c2VyIHdvcmtzIHdpdGggb3RoZXIgcGx1Z2lucyB3aGljaCB3aWxsXHJcbiAgICAgIC8vIGNvbWUgd2l0aCBpdCdzIHZlcnkgb3duIHZlcnNpb24gb2YgYG1vbWVudC5qc2AgYXMgYSBwZWVyIGRlcGVuZGVuY3lcclxuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vaWNhbWJyb24vdHdpeC5qcy9pc3N1ZXMvMTAyXHJcbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChyb290KSB7XHJcbiAgICAvL3dvcmtpbmcgd2l0aCBnbG9iYWxzO1xyXG4gICAgcm9vdC5tb21lbnRKRGF0ZUZvcm1hdFBhcnNlclNldHVwID0gcm9vdC5tb21lbnQgPyBmYWN0b3J5KHJvb3QubW9tZW50KSA6IGZhY3Rvcnk7XHJcbiAgfVxyXG59KSh0aGlzLCBmdW5jdGlvbiBsb2FkUGx1Z2luIChtb21lbnQpIHtcclxuICAvKipcclxuICAgKiBUaGUgaW50ZXJuYWwgKipKYXZhKiogZGF0ZSBmb3JtYXRzIGNhY2hlLlxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IGphdmFEYXRlRm9ybWF0c1xyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXHJcbiAgdmFyIGphdmFEYXRlRm9ybWF0cyA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgaW50ZXJuYWwgKiptb21lbnQuanMqKiBkYXRlIGZvcm1hdHMgY2FjaGUuXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkgbW9tZW50RGF0ZUZvcm1hdHNcclxuICAgKiBAdHlwZSB7T2JqZWN0fVxyXG4gICAqL1xyXG4gIHZhciBtb21lbnREYXRlRm9ybWF0cyA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZm9ybWF0IHBhdHRlcm4gbWFwcGluZyBmcm9tIEphdmEgZm9ybWF0IHRvIG1vbWVudGpzLlxyXG4gICAqXHJcbiAgICogQHByb3BlcnR5IGphdmFGb3JtYXRNYXBwaW5nXHJcbiAgICogQHR5cGUge09iamVjdH1cclxuICAgKi9cclxuICB2YXIgamF2YUZvcm1hdE1hcHBpbmcgPSB7XHJcbiAgICBkOiAnRCcsXHJcbiAgICBkZDogJ0REJyxcclxuICAgIHk6ICdZWVlZJyxcclxuICAgIHl5OiAnWVknLFxyXG4gICAgeXl5OiAnWVlZWScsXHJcbiAgICB5eXl5OiAnWVlZWScsXHJcbiAgICBhOiAnYScsXHJcbiAgICBBOiAnQScsXHJcbiAgICBNOiAnTScsXHJcbiAgICBNTTogJ01NJyxcclxuICAgIE1NTTogJ01NTScsXHJcbiAgICBNTU1NOiAnTU1NTScsXHJcbiAgICBoOiAnaCcsXHJcbiAgICBoaDogJ2hoJyxcclxuICAgIEg6ICdIJyxcclxuICAgIEhIOiAnSEgnLFxyXG4gICAgbTogJ20nLFxyXG4gICAgbW06ICdtbScsXHJcbiAgICBzOiAncycsXHJcbiAgICBzczogJ3NzJyxcclxuICAgIFM6ICdTU1MnLFxyXG4gICAgU1M6ICdTU1MnLFxyXG4gICAgU1NTOiAnU1NTJyxcclxuICAgIEU6ICdkZGQnLFxyXG4gICAgRUU6ICdkZGQnLFxyXG4gICAgRUVFOiAnZGRkJyxcclxuICAgIEVFRUU6ICdkZGRkJyxcclxuICAgIEVFRUVFOiAnZGRkZCcsXHJcbiAgICBFRUVFRUU6ICdkZGRkJyxcclxuICAgIEQ6ICdEREQnLFxyXG4gICAgdzogJ1cnLFxyXG4gICAgd3c6ICdXVycsXHJcbiAgICB6OiAnWlonLFxyXG4gICAgenp6ejogJ1onLFxyXG4gICAgWjogJ1paJyxcclxuICAgIFg6ICdaWicsXHJcbiAgICBYWDogJ1paJyxcclxuICAgIFhYWDogJ1onLFxyXG4gICAgdTogJ0UnXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGZvcm1hdCBwYXR0ZXJuIG1hcHBpbmcgZnJvbSBKYXZhIGZvcm1hdCB0byBtb21lbnQuanMuXHJcbiAgICpcclxuICAgKiBAcHJvcGVydHkgbW9tZW50Rm9ybWF0TWFwcGluZ1xyXG4gICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICovXHJcbiAgdmFyIG1vbWVudEZvcm1hdE1hcHBpbmcgPSB7XHJcbiAgICBEOiAnZCcsXHJcbiAgICBERDogJ2RkJyxcclxuICAgIFlZOiAneXknLFxyXG4gICAgWVlZOiAneXl5eScsXHJcbiAgICBZWVlZOiAneXl5eScsXHJcbiAgICBhOiAnYScsXHJcbiAgICBBOiAnYScsXHJcbiAgICBNOiAnTScsXHJcbiAgICBNTTogJ01NJyxcclxuICAgIE1NTTogJ01NTScsXHJcbiAgICBNTU1NOiAnTU1NTScsXHJcbiAgICBoOiAnaCcsXHJcbiAgICBoaDogJ2hoJyxcclxuICAgIEg6ICdIJyxcclxuICAgIEhIOiAnSEgnLFxyXG4gICAgbTogJ20nLFxyXG4gICAgbW06ICdtbScsXHJcbiAgICBzOiAncycsXHJcbiAgICBzczogJ3NzJyxcclxuICAgIFM6ICdTJyxcclxuICAgIFNTOiAnUycsXHJcbiAgICBTU1M6ICdTJyxcclxuICAgIGRkZDogJ0UnLFxyXG4gICAgZGRkZDogJ0VFRUUnLFxyXG4gICAgREREOiAnRCcsXHJcbiAgICBXOiAndycsXHJcbiAgICBXVzogJ3d3JyxcclxuICAgIFpaOiAneicsXHJcbiAgICBaOiAnWFhYJyxcclxuICAgIEU6ICd1J1xyXG4gIH07XHJcblxyXG5cclxuICAvKipcclxuICAgKiBUcmFuc2xhdGVzIHRoZSBqYXZhIGRhdGUgZm9ybWF0IFN0cmluZyB0byBhIG1vbWVudGpzIGZvcm1hdCBTdHJpbmcuXHJcbiAgICpcclxuICAgKiBAZnVuY3Rpb24gdHJhbnNsYXRlRm9ybWF0XHJcbiAgICogQHBhcmFtIHtTdHJpbmd9ICBmb3JtYXRTdHJpbmcgICAgVGhlIHVubW9kaWZpZWQgZm9ybWF0IHN0cmluZ1xyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAgbWFwcGluZyAgICAgICAgIFRoZSBkYXRlIGZvcm1hdCBtYXBwaW5nIG9iamVjdFxyXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAgICovXHJcbiAgdmFyIHRyYW5zbGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXRTdHJpbmcsIG1hcHBpbmcpIHtcclxuICAgIHZhciBsZW4gPSBmb3JtYXRTdHJpbmcubGVuZ3RoO1xyXG4gICAgdmFyIGkgPSAwO1xyXG4gICAgdmFyIHN0YXJ0SW5kZXggPSAtMTtcclxuICAgIHZhciBsYXN0Q2hhciA9IG51bGw7XHJcbiAgICB2YXIgY3VycmVudENoYXIgPSBcIlwiO1xyXG4gICAgdmFyIHJlc3VsdFN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBjdXJyZW50Q2hhciA9IGZvcm1hdFN0cmluZy5jaGFyQXQoaSk7XHJcblxyXG4gICAgICBpZiAobGFzdENoYXIgPT09IG51bGwgfHwgbGFzdENoYXIgIT09IGN1cnJlbnRDaGFyKSB7XHJcbiAgICAgICAgLy8gY2hhbmdlIGRldGVjdGVkXHJcbiAgICAgICAgcmVzdWx0U3RyaW5nID0gX2FwcGVuZE1hcHBlZFN0cmluZyhmb3JtYXRTdHJpbmcsIG1hcHBpbmcsIHN0YXJ0SW5kZXgsIGksIHJlc3VsdFN0cmluZyk7XHJcblxyXG4gICAgICAgIHN0YXJ0SW5kZXggPSBpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsYXN0Q2hhciA9IGN1cnJlbnRDaGFyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBfYXBwZW5kTWFwcGVkU3RyaW5nKGZvcm1hdFN0cmluZywgbWFwcGluZywgc3RhcnRJbmRleCwgaSwgcmVzdWx0U3RyaW5nKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIHN1YnN0cmluZyBpcyBhIG1hcHBlZCBkYXRlIGZvcm1hdCBwYXR0ZXJuIGFuZCBhZGRzIGl0IHRvIHRoZSByZXN1bHQgZm9ybWF0IFN0cmluZy5cclxuICAgKlxyXG4gICAqIEBmdW5jdGlvbiBfYXBwZW5kTWFwcGVkU3RyaW5nXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9ICBmb3JtYXRTdHJpbmcgICAgVGhlIHVubW9kaWZpZWQgZm9ybWF0IFN0cmluZy5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gIG1hcHBpbmcgICAgICAgICBUaGUgZGF0ZSBmb3JtYXQgbWFwcGluZyBPYmplY3QuXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9ICBzdGFydEluZGV4ICAgICAgVGhlIGJlZ2luIGluZGV4IG9mIHRoZSBjb250aW51b3VzIGZvcm1hdCBjaGFyYWN0ZXJzLlxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSAgY3VycmVudEluZGV4ICAgIFRoZSBsYXN0IGluZGV4IG9mIHRoZSBjb250aW51b3VzIGZvcm1hdCBjaGFyYWN0ZXJzLlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSAgcmVzdWx0U3RyaW5nICAgIFRoZSByZXN1bHQgZm9ybWF0IFN0cmluZy5cclxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgdmFyIF9hcHBlbmRNYXBwZWRTdHJpbmcgPSBmdW5jdGlvbiAoZm9ybWF0U3RyaW5nLCBtYXBwaW5nLCBzdGFydEluZGV4LCBjdXJyZW50SW5kZXgsIHJlc3VsdFN0cmluZykge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHZhciB0ZW1wU3RyaW5nID0gZm9ybWF0U3RyaW5nLnN1YnN0cmluZyhzdGFydEluZGV4LCBjdXJyZW50SW5kZXgpO1xyXG5cclxuICAgICAgLy8gY2hlY2sgaWYgdGhlIHRlbXBvcmFyeSBzdHJpbmcgaGFzIGEga25vd24gbWFwcGluZ1xyXG4gICAgICBpZiAobWFwcGluZ1t0ZW1wU3RyaW5nXSkge1xyXG4gICAgICAgIHRlbXBTdHJpbmcgPSBtYXBwaW5nW3RlbXBTdHJpbmddO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXN1bHRTdHJpbmcgKz0gdGVtcFN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0U3RyaW5nO1xyXG4gIH07XHJcblxyXG4vLyBpbml0XHJcbiAgZnVuY3Rpb24gaW5pdCAobW9tZW50SlMpIHtcclxuICAgIGlmICghbW9tZW50SlMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTW9tZW50IEpEYXRlRm9ybWF0UGFyc2VyIFBsdWdpbiAtIENhbm5vdCBmaW5kIG1vbWVudC5qcyBpbnN0YW5jZS5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVnaXN0ZXIgYXMgcHJpdmF0ZSBmdW5jdGlvbiAoZ29vZCBmb3IgdGVzdGluZyBwdXJwb3NlcylcclxuICAgIG1vbWVudEpTLmZuLl9fdHJhbnNsYXRlSmF2YUZvcm1hdCA9IHRyYW5zbGF0ZUZvcm1hdDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYW5zbGF0ZXMgdGhlIG1vbWVudGpzIGZvcm1hdCBTdHJpbmcgdG8gYSBqYXZhIGRhdGUgZm9ybWF0IFN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBAZnVuY3Rpb24gdG9KREZTdHJpbmdcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSAgZm9ybWF0U3RyaW5nICAgIFRoZSBmb3JtYXQgU3RyaW5nIHRvIGJlIHRyYW5zbGF0ZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBtb21lbnRKUy5mbi50b01vbWVudEZvcm1hdFN0cmluZyA9IGZ1bmN0aW9uIChmb3JtYXRTdHJpbmcpIHtcclxuICAgICAgaWYgKCFqYXZhRGF0ZUZvcm1hdHNbZm9ybWF0U3RyaW5nXSkge1xyXG4gICAgICAgIHZhciBtYXBwZWQgPSBcIlwiO1xyXG4gICAgICAgIHZhciByZWdleHAgPSAvW14nXSt8KCdbXiddKicpL2c7XHJcbiAgICAgICAgdmFyIHBhcnQgPSAnJztcclxuXHJcbiAgICAgICAgd2hpbGUgKChwYXJ0ID0gcmVnZXhwLmV4ZWMoZm9ybWF0U3RyaW5nKSkpIHtcclxuICAgICAgICAgIHBhcnQgPSBwYXJ0WzBdO1xyXG5cclxuICAgICAgICAgIGlmIChwYXJ0Lm1hdGNoKC8nLj8nLykpIHtcclxuICAgICAgICAgICAgbWFwcGVkICs9IFwiW1wiICsgcGFydC5zdWJzdHJpbmcoMSwgcGFydC5sZW5ndGggLSAxKSArIFwiXVwiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWFwcGVkICs9IHRyYW5zbGF0ZUZvcm1hdChwYXJ0LCBqYXZhRm9ybWF0TWFwcGluZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBqYXZhRGF0ZUZvcm1hdHNbZm9ybWF0U3RyaW5nXSA9IG1hcHBlZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGphdmFEYXRlRm9ybWF0c1tmb3JtYXRTdHJpbmddO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZvcm1hdCB0aGUgbW9tZW50IHdpdGggdGhlIGdpdmVuIGphdmEgZGF0ZSBmb3JtYXQgU3RyaW5nLlxyXG4gICAgICpcclxuICAgICAqIEBmdW5jdGlvbiBmb3JtYXRXaXRoSkRGXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gIGZvcm1hdFN0cmluZyAgICBUaGUgZm9ybWF0IFN0cmluZyB0byBiZSB0cmFuc2xhdGVkLlxyXG4gICAgICogQHJldHVybnMge1N0cmluZ31cclxuICAgICAqL1xyXG4gICAgbW9tZW50SlMuZm4uZm9ybWF0V2l0aEpERiA9IGZ1bmN0aW9uIChmb3JtYXRTdHJpbmcpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0KHRoaXMudG9Nb21lbnRGb3JtYXRTdHJpbmcoZm9ybWF0U3RyaW5nKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNsYXRlcyB0aGUgbW9tZW50anMgZm9ybWF0IHN0cmluZyB0byBhIGphdmEgZGF0ZSBmb3JtYXQgc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICogQGZ1bmN0aW9uIHRvSkRGU3RyaW5nXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gIGZvcm1hdFN0cmluZyAgICBUaGUgZm9ybWF0IFN0cmluZyB0byBiZSB0cmFuc2xhdGVkLlxyXG4gICAgICogQHJldHVybnMge1N0cmluZ31cclxuICAgICAqL1xyXG4gICAgbW9tZW50SlMuZm4udG9KREZTdHJpbmcgPSBmdW5jdGlvbiAoZm9ybWF0U3RyaW5nKSB7XHJcbiAgICAgIGlmICghbW9tZW50RGF0ZUZvcm1hdHNbZm9ybWF0U3RyaW5nXSkge1xyXG4gICAgICAgIG1vbWVudERhdGVGb3JtYXRzW2Zvcm1hdFN0cmluZ10gPSB0cmFuc2xhdGVGb3JtYXQoZm9ybWF0U3RyaW5nLCBtb21lbnRGb3JtYXRNYXBwaW5nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG1vbWVudERhdGVGb3JtYXRzW2Zvcm1hdFN0cmluZ107XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gSW5pdGlhbGl6ZSBKRGF0ZUZvcm1hdFBhcnNlciBQbHVnaW4gb24gdGhlIGdsb2JhbCBtb21lbnQgaW5zdGFuY2UuXHJcbiAgaW5pdChtb21lbnQpO1xyXG5cclxuICAvLyBSZXR1cm4gdGhlIGluaXQgZnVuY3Rpb24gc28gdGhhdCB0aGUgSkRhdGVGb3JtYXRQYXJzZXIgUGx1Z2luIGNhbiBiZVxyXG4gIC8vIGluaXRpYWxpemVkIG9uIG90aGVyIG1vbWVudCBpbnN0YW5jZXMuXHJcbiAgcmV0dXJuIGluaXQ7XHJcbn0pOyIsICJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBtb21lbnRKRGF0ZUZvcm1hdFBhcnNlclNldHVwIGZyb20gXCJtb21lbnQtamRhdGVmb3JtYXRwYXJzZXJcIjtcblxuLy8gTm90IG5lZWRlZCBmb3Igb3VyIGNvZGUsIGJ1dCBtaWdodCBhbHJlYWR5IGJlIHVzZWQgYnkgZXh0ZXJuYWwgY29kZVxuT2JqZWN0LmFzc2lnbih3aW5kb3csIHsgbW9tZW50LCBtb21lbnRKRGF0ZUZvcm1h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QSxVQUNmO0FBRUEscUJBQVc7QUFBQSxRQUNiO0FBRUEsZUFBTyxvQkFBb0IsY0FBYyxTQUFTLFlBQVksR0FBRyxZQUFZO0FBQUEsTUFDL0U7QUFjQSxVQUFJLHNCQUFzQixTQUFVLGNBQWMsU0FBUyxZQUFZLGNBQWMsY0FBYztBQUNqRyxZQUFJLGVBQWUsSUFBSTtBQUNyQixjQUFJLGFBQWEsYUFBYSxVQUFVLFlBQVksWUFBWTtBQUdoRSxjQUFJLFFBQVEsVUFBVSxHQUFHO0FBQ3ZCLHlCQUFhLFFBQVEsVUFBVTtBQUFBLFVBQ2pDO0FBRUEsMEJBQWdCO0FBQUEsUUFDbEI7QUFFQSxlQUFPO0FBQUEsTUFDVDtBQUdBLGVBQVMsS0FBTSxVQUFVO0FBQ3ZCLFlBQUksQ0FBQyxVQUFVO0FBQ2IsZ0JBQU0sSUFBSSxNQUFNLG1FQUFtRTtBQUFBLFFBQ3JGO0FBR0EsaUJBQVMsR0FBRyx3QkFBd0I7QUFTcEMsaUJBQVMsR0FBRyx1QkFBdUIsU0FBVSxjQUFjO0FBQ3pELGNBQUksQ0FBQyxnQkFBZ0IsWUFBWSxHQUFHO0FBQ2xDLGdCQUFJLFNBQVM7QUFDYixnQkFBSSxTQUFTO0FBQ2IsZ0JBQUksT0FBTztBQUVYLG1CQUFRLE9BQU8sT0FBTyxLQUFLLFlBQVksR0FBSTtBQUN6QyxxQkFBTyxLQUFLLENBQUM7QUFFYixrQkFBSSxLQUFLLE1BQU0sTUFBTSxHQUFHO0FBQ3RCLDBCQUFVLE1BQU0sS0FBSyxVQUFVLEdBQUcsS0FBSyxTQUFTLENBQUMsSUFBSTtBQUFBLGNBQ3ZELE9BQU87QUFDTCwwQkFBVSxnQkFBZ0IsTUFBTSxpQkFBaUI7QUFBQSxjQUNuRDtBQUFBLFlBQ0Y7QUFFQSw0QkFBZ0IsWUFBWSxJQUFJO0FBQUEsVUFDbEM7QUFFQSxpQkFBTyxnQkFBZ0IsWUFBWTtBQUFBLFFBQ3JDO0FBU0EsaUJBQVMsR0FBRyxnQkFBZ0IsU0FBVSxjQUFjO0FBQ2xELGlCQUFPLEtBQUssT0FBTyxLQUFLLHFCQUFxQixZQUFZLENBQUM7QUFBQSxRQUM1RDtBQVNBLGlCQUFTLEdBQUcsY0FBYyxTQUFVLGNBQWM7QUFDaEQsY0FBSSxDQUFDLGtCQUFrQixZQUFZLEdBQUc7QUFDcEMsOEJBQWtCLFlBQVksSUFBSSxnQkFBZ0IsY0FBYyxtQkFBbUI7QUFBQSxVQUNyRjtBQUVBLGlCQUFPLGtCQUFrQixZQUFZO0FBQUEsUUFDdkM7QUFBQSxNQUNGO0FBR0EsV0FBS0EsT0FBTTtBQUlYLGFBQU87QUFBQSxJQUNULENBQUM7QUFBQTtBQUFBOzs7QUNyUUQsb0JBQW1CO0FBQ25CLHNDQUF5QztBQUd6QyxPQUFPLE9BQU8sUUFBUSxFQUFFLHNCQUFBQyxTQUFRLDhEQUFBQyxRQUE2QixDQUFDOyIsCiAgIm5hbWVzIjogWyJtb21lbnQiLCAibW9tZW50IiwgIm1vbWVudEpEYXRlRm9ybWF0UGFyc2VyU2V0dXAiXQp9Cg==

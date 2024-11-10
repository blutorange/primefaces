import {
  __commonJS
} from "./chunk-YRJTWU7C.js";

// src/hotkey/hotkey.js
var require_hotkey = __commonJS({
  "src/hotkey/hotkey.js"(exports) {
    (function(jQuery2) {
      jQuery2.hotkeys = {
        version: "0.2.0",
        specialKeys: {
          8: "backspace",
          9: "tab",
          10: "return",
          13: "return",
          16: "shift",
          17: "ctrl",
          18: "alt",
          19: "pause",
          20: "capslock",
          27: "esc",
          32: "space",
          33: "pageup",
          34: "pagedown",
          35: "end",
          36: "home",
          37: "left",
          38: "up",
          39: "right",
          40: "down",
          45: "insert",
          46: "del",
          59: ";",
          61: "=",
          96: "0",
          97: "1",
          98: "2",
          99: "3",
          100: "4",
          101: "5",
          102: "6",
          103: "7",
          104: "8",
          105: "9",
          106: "*",
          107: "+",
          109: "-",
          110: ".",
          111: "/",
          112: "f1",
          113: "f2",
          114: "f3",
          115: "f4",
          116: "f5",
          117: "f6",
          118: "f7",
          119: "f8",
          120: "f9",
          121: "f10",
          122: "f11",
          123: "f12",
          144: "numlock",
          145: "scroll",
          173: "-",
          186: ";",
          187: "=",
          188: ",",
          189: "-",
          190: ".",
          191: "/",
          192: "`",
          219: "[",
          220: "\\",
          221: "]",
          222: "'"
        },
        shiftNums: {
          "`": "~",
          "1": "!",
          "2": "@",
          "3": "#",
          "4": "$",
          "5": "%",
          "6": "^",
          "7": "&",
          "8": "*",
          "9": "(",
          "0": ")",
          "-": "_",
          "=": "+",
          ";": ": ",
          "'": '"',
          ",": "<",
          ".": ">",
          "/": "?",
          "\\": "|"
        },
        // excludes: button, checkbox, file, hidden, image, password, radio, reset, search, submit, url
        textAcceptingInputTypes: [
          "text",
          "password",
          "number",
          "email",
          "url",
          "range",
          "date",
          "month",
          "week",
          "time",
          "datetime",
          "datetime-local",
          "search",
          "color",
          "tel"
        ],
        // default input types not to bind to unless bound directly
        textInputTypes: /textarea|input|select/i,
        options: {
          filterInputAcceptingElements: true,
          filterTextInputs: true,
          filterContentEditable: true
        }
      };
      function keyHandler(handleObj) {
        if (typeof handleObj.data === "string") {
          handleObj.data = {
            keys: handleObj.data
          };
        }
        if (!handleObj.data || !handleObj.data.keys || typeof handleObj.data.keys !== "string") {
          return;
        }
        var origHandler = handleObj.handler, keys = handleObj.data.keys.toLowerCase().split(" ");
        handleObj.handler = function(event) {
          if (this !== event.target && (jQuery2.hotkeys.options.filterInputAcceptingElements && jQuery2.hotkeys.textInputTypes.test(event.target.nodeName) || jQuery2.hotkeys.options.filterContentEditable && jQuery2(event.target).attr("contenteditable") || jQuery2.hotkeys.options.filterTextInputs && jQuery2.inArray(event.target.type, jQuery2.hotkeys.textAcceptingInputTypes) > -1)) {
            return;
          }
          var special = event.type !== "keypress" && jQuery2.hotkeys.specialKeys[event.which], character = String.fromCharCode(event.which).toLowerCase(), modif = "", possible = {};
          jQuery2.each(["alt", "ctrl", "shift"], function(index, specialKey) {
            if (event[specialKey + "Key"] && special !== specialKey) {
              modif += specialKey + "+";
            }
          });
          if (event.metaKey && !event.ctrlKey && special !== "meta") {
            modif += "meta+";
          }
          if (event.metaKey && special !== "meta" && modif.indexOf("alt+ctrl+shift+") > -1) {
            modif = modif.replace("alt+ctrl+shift+", "hyper+");
          }
          if (special) {
            possible[modif + special] = true;
          } else {
            possible[modif + character] = true;
            possible[modif + jQuery2.hotkeys.shiftNums[character]] = true;
            if (modif === "shift+") {
              possible[jQuery2.hotkeys.shiftNums[character]] = true;
            }
          }
          for (var i = 0, l = keys.length; i < l; i++) {
            if (possible[keys[i]]) {
              return origHandler.apply(this, arguments);
            }
          }
        };
      }
      jQuery2.each(["keydown", "keyup", "keypress"], function() {
        jQuery2.event.special[this] = {
          add: keyHandler
        };
      });
    })(jQuery || exports.jQuery || window.jQuery);
  }
});
export default require_hotkey();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2hvdGtleS9ob3RrZXkuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qanNsaW50IGJyb3dzZXI6IHRydWUqL1xuLypqc2xpbnQganF1ZXJ5OiB0cnVlKi9cblxuLypcbiAqIGpRdWVyeSBIb3RrZXlzIFBsdWdpblxuICogQ29weXJpZ2h0IDIwMTAsIEpvaG4gUmVzaWdcbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBvciBHUEwgVmVyc2lvbiAyIGxpY2Vuc2VzLlxuICpcbiAqIEJhc2VkIHVwb24gdGhlIHBsdWdpbiBieSBUenVyeSBCYXIgWW9jaGF5OlxuICogaHR0cHM6Ly9naXRodWIuY29tL3R6dXJ5YnkvanF1ZXJ5LmhvdGtleXNcbiAqXG4gKiBPcmlnaW5hbCBpZGVhIGJ5OlxuICogQmlubnkgViBBLCBodHRwOi8vd3d3Lm9wZW5qcy5jb20vc2NyaXB0cy9ldmVudHMva2V5Ym9hcmRfc2hvcnRjdXRzL1xuICovXG5cbi8qXG4gKiBPbmUgc21hbGwgY2hhbmdlIGlzOiBub3cga2V5cyBhcmUgcGFzc2VkIGJ5IG9iamVjdCB7IGtleXM6ICcuLi4nIH1cbiAqIE1pZ2h0IGJlIHVzZWZ1bCwgd2hlbiB5b3Ugd2FudCB0byBwYXNzIHNvbWUgb3RoZXIgZGF0YSB0byB5b3VyIGhhbmRsZXJcbiAqL1xuXG4oZnVuY3Rpb24oalF1ZXJ5KSB7XG5cbiAgalF1ZXJ5LmhvdGtleXMgPSB7XG4gICAgdmVyc2lvbjogXCIwLjIuMFwiLFxuXG4gICAgc3BlY2lhbEtleXM6IHtcbiAgICAgIDg6IFwiYmFja3NwYWNlXCIsXG4gICAgICA5OiBcInRhYlwiLFxuICAgICAgMTA6IFwicmV0dXJuXCIsXG4gICAgICAxMzogXCJyZXR1cm5cIixcbiAgICAgIDE2OiBcInNoaWZ0XCIsXG4gICAgICAxNzogXCJjdHJsXCIsXG4gICAgICAxODogXCJhbHRcIixcbiAgICAgIDE5OiBcInBhdXNlXCIsXG4gICAgICAyMDogXCJjYXBzbG9ja1wiLFxuICAgICAgMjc6IFwiZXNjXCIsXG4gICAgICAzMjogXCJzcGFjZVwiLFxuICAgICAgMzM6IFwicGFnZXVwXCIsXG4gICAgICAzNDogXCJwYWdlZG93blwiLFxuICAgICAgMzU6IFwiZW5kXCIsXG4gICAgICAzNjogXCJob21lXCIsXG4gICAgICAzNzogXCJsZWZ0XCIsXG4gICAgICAzODogXCJ1cFwiLFxuICAgICAgMzk6IFwicmlnaHRcIixcbiAgICAgIDQwOiBcImRvd25cIixcbiAgICAgIDQ1OiBcImluc2VydFwiLFxuICAgICAgNDY6IFwiZGVsXCIsXG4gICAgICA1OTogXCI7XCIsXG4gICAgICA2MTogXCI9XCIsXG4gICAgICA5NjogXCIwXCIsXG4gICAgICA5NzogXCIxXCIsXG4gICAgICA5ODogXCIyXCIsXG4gICAgICA5OTogXCIzXCIsXG4gICAgICAxMDA6IFwiNFwiLFxuICAgICAgMTAxOiBcIjVcIixcbiAgICAgIDEwMjogXCI2XCIsXG4gICAgICAxMDM6IFwiN1wiLFxuICAgICAgMTA0OiBcIjhcIixcbiAgICAgIDEwNTogXCI5XCIsXG4gICAgICAxMDY6IFwiKlwiLFxuICAgICAgMTA3OiBcIitcIixcbiAgICAgIDEwOTogXCItXCIsXG4gICAgICAxMTA6IFwiLlwiLFxuICAgICAgMTExOiBcIi9cIixcbiAgICAgIDExMjogXCJmMVwiLFxuICAgICAgMTEzOiBcImYyXCIsXG4gICAgICAxMTQ6IFwiZjNcIixcbiAgICAgIDExNTogXCJmNFwiLFxuICAgICAgMTE2OiBcImY1XCIsXG4gICAgICAxMTc6IFwiZjZcIixcbiAgICAgIDExODogXCJmN1wiLFxuICAgICAgMTE5OiBcImY4XCIsXG4gICAgICAxMjA6IFwiZjlcIixcbiAgICAgIDEyMTogXCJmMTBcIixcbiAgICAgIDEyMjogXCJmMTFcIixcbiAgICAgIDEyMzogXCJmMTJcIixcbiAgICAgIDE0NDogXCJudW1sb2NrXCIsXG4gICAgICAxNDU6IFwic2Nyb2xsXCIsXG4gICAgICAxNzM6IFwiLVwiLFxuICAgICAgMTg2OiBcIjtcIixcbiAgICAgIDE4NzogXCI9XCIsXG4gICAgICAxODg6IFwiLFwiLFxuICAgICAgMTg5OiBcIi1cIixcbiAgICAgIDE5MDogXCIuXCIsXG4gICAgICAxOTE6IFwiL1wiLFxuICAgICAgMTkyOiBcImBcIixcbiAgICAgIDIxOTogXCJbXCIsXG4gICAgICAyMjA6IFwiXFxcXFwiLFxuICAgICAgMjIxOiBcIl1cIixcbiAgICAgIDIyMjogXCInXCJcbiAgICB9LFxuXG4gICAgc2hpZnROdW1zOiB7XG4gICAgICBcImBcIjogXCJ+XCIsXG4gICAgICBcIjFcIjogXCIhXCIsXG4gICAgICBcIjJcIjogXCJAXCIsXG4gICAgICBcIjNcIjogXCIjXCIsXG4gICAgICBcIjRcIjogXCIkXCIsXG4gICAgICBcIjVcIjogXCIlXCIsXG4gICAgICBcIjZcIjogXCJeXCIsXG4gICAgICBcIjdcIjogXCImXCIsXG4gICAgICBcIjhcIjogXCIqXCIsXG4gICAgICBcIjlcIjogXCIoXCIsXG4gICAgICBcIjBcIjogXCIpXCIsXG4gICAgICBcIi1cIjogXCJfXCIsXG4gICAgICBcIj1cIjogXCIrXCIsXG4gICAgICBcIjtcIjogXCI6IFwiLFxuICAgICAgXCInXCI6IFwiXFxcIlwiLFxuICAgICAgXCIsXCI6IFwiPFwiLFxuICAgICAgXCIuXCI6IFwiPlwiLFxuICAgICAgXCIvXCI6IFwiP1wiLFxuICAgICAgXCJcXFxcXCI6IFwifFwiXG4gICAgfSxcblxuICAgIC8vIGV4Y2x1ZGVzOiBidXR0b24sIGNoZWNrYm94LCBmaWxlLCBoaWRkZW4sIGltYWdlLCBwYXNzd29yZCwgcmFkaW8sIHJlc2V0LCBzZWFyY2gsIHN1Ym1pdCwgdXJsXG4gICAgdGV4dEFjY2VwdGluZ0lucHV0VHlwZXM6IFtcbiAgICAgIFwidGV4dFwiLCBcInBhc3N3b3JkXCIsIFwibnVtYmVyXCIsIFwiZW1haWxcIiwgXCJ1cmxcIiwgXCJyYW5nZVwiLCBcImRhdGVcIiwgXCJtb250aFwiLCBcIndlZWtcIiwgXCJ0aW1lXCIsIFwiZGF0ZXRpbWVcIixcbiAgICAgIFwiZGF0ZXRpbWUtbG9jYWxcIiwgXCJzZWFyY2hcIiwgXCJjb2xvclwiLCBcInRlbFwiXSxcblxuICAgIC8vIGRlZmF1bHQgaW5wdXQgdHlwZXMgbm90IHRvIGJpbmQgdG8gdW5sZXNzIGJvdW5kIGRpcmVjdGx5XG4gICAgdGV4dElucHV0VHlwZXM6IC90ZXh0YXJlYXxpbnB1dHxzZWxlY3QvaSxcblxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGZpbHRlcklucHV0QWNjZXB0aW5nRWxlbWVudHM6IHRydWUsXG4gICAgICBmaWx0ZXJUZXh0SW5wdXRzOiB0cnVlLFxuICAgICAgZmlsdGVyQ29udGVudEVkaXRhYmxlOiB0cnVlXG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGtleUhhbmRsZXIoaGFuZGxlT2JqKSB7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVPYmouZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaGFuZGxlT2JqLmRhdGEgPSB7XG4gICAgICAgIGtleXM6IGhhbmRsZU9iai5kYXRhXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIE9ubHkgY2FyZSB3aGVuIGEgcG9zc2libGUgaW5wdXQgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgaWYgKCFoYW5kbGVPYmouZGF0YSB8fCAhaGFuZGxlT2JqLmRhdGEua2V5cyB8fCB0eXBlb2YgaGFuZGxlT2JqLmRhdGEua2V5cyAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvcmlnSGFuZGxlciA9IGhhbmRsZU9iai5oYW5kbGVyLFxuICAgICAga2V5cyA9IGhhbmRsZU9iai5kYXRhLmtleXMudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIik7XG5cbiAgICBoYW5kbGVPYmouaGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAvLyAgICAgIERvbid0IGZpcmUgaW4gdGV4dC1hY2NlcHRpbmcgaW5wdXRzIHRoYXQgd2UgZGlkbid0IGRpcmVjdGx5IGJpbmQgdG9cbiAgICAgIGlmICh0aGlzICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgKGpRdWVyeS5ob3RrZXlzLm9wdGlvbnMuZmlsdGVySW5wdXRBY2NlcHRpbmdFbGVtZW50cyAmJlxuICAgICAgICAgIGpRdWVyeS5ob3RrZXlzLnRleHRJbnB1dFR5cGVzLnRlc3QoZXZlbnQudGFyZ2V0Lm5vZGVOYW1lKSB8fFxuICAgICAgICAgIChqUXVlcnkuaG90a2V5cy5vcHRpb25zLmZpbHRlckNvbnRlbnRFZGl0YWJsZSAmJiBqUXVlcnkoZXZlbnQudGFyZ2V0KS5hdHRyKCdjb250ZW50ZWRpdGFibGUnKSkgfHxcbiAgICAgICAgICAoalF1ZXJ5LmhvdGtleXMub3B0aW9ucy5maWx0ZXJUZXh0SW5wdXRzICYmXG4gICAgICAgICAgICBqUXVlcnkuaW5BcnJheShldmVudC50YXJnZXQudHlwZSwgalF1ZXJ5LmhvdGtleXMudGV4dEFjY2VwdGluZ0lucHV0VHlwZXMpID4gLTEpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzcGVjaWFsID0gZXZlbnQudHlwZSAhPT0gXCJrZXlwcmVzc1wiICYmIGpRdWVyeS5ob3RrZXlzLnNwZWNpYWxLZXlzW2V2ZW50LndoaWNoXSxcbiAgICAgICAgY2hhcmFjdGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC53aGljaCkudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgbW9kaWYgPSBcIlwiLFxuICAgICAgICBwb3NzaWJsZSA9IHt9O1xuXG4gICAgICBqUXVlcnkuZWFjaChbXCJhbHRcIiwgXCJjdHJsXCIsIFwic2hpZnRcIl0sIGZ1bmN0aW9uKGluZGV4LCBzcGVjaWFsS2V5KSB7XG5cbiAgICAgICAgaWYgKGV2ZW50W3NwZWNpYWxLZXkgKyAnS2V5J10gJiYgc3BlY2lhbCAhPT0gc3BlY2lhbEtleSkge1xuICAgICAgICAgIG1vZGlmICs9IHNwZWNpYWxLZXkgKyAnKyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBtZXRhS2V5IGlzIHRyaWdnZXJlZCBvZmYgY3RybEtleSBlcnJvbm91c2x5XG4gICAgICBpZiAoZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuY3RybEtleSAmJiBzcGVjaWFsICE9PSBcIm1ldGFcIikge1xuICAgICAgICBtb2RpZiArPSBcIm1ldGErXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC5tZXRhS2V5ICYmIHNwZWNpYWwgIT09IFwibWV0YVwiICYmIG1vZGlmLmluZGV4T2YoXCJhbHQrY3RybCtzaGlmdCtcIikgPiAtMSkge1xuICAgICAgICBtb2RpZiA9IG1vZGlmLnJlcGxhY2UoXCJhbHQrY3RybCtzaGlmdCtcIiwgXCJoeXBlcitcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzcGVjaWFsKSB7XG4gICAgICAgIHBvc3NpYmxlW21vZGlmICsgc3BlY2lhbF0gPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHBvc3NpYmxlW21vZGlmICsgY2hhcmFjdGVyXSA9IHRydWU7XG4gICAgICAgIHBvc3NpYmxlW21vZGlmICsgalF1ZXJ5LmhvdGtleXMuc2hpZnROdW1zW2NoYXJhY3Rlcl1dID0gdHJ1ZTtcblxuICAgICAgICAvLyBcIiRcIiBjYW4gYmUgdHJpZ2dlcmVkIGFzIFwiU2hpZnQrNFwiIG9yIFwiU2hpZnQrJFwiIG9yIGp1c3QgXCIkXCJcbiAgICAgICAgaWYgKG1vZGlmID09PSBcInNoaWZ0K1wiKSB7XG4gICAgICAgICAgcG9zc2libGVbalF1ZXJ5LmhvdGtleXMuc2hpZnROdW1zW2NoYXJhY3Rlcl1dID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChwb3NzaWJsZVtrZXlzW2ldXSkge1xuICAgICAgICAgIHJldHVybiBvcmlnSGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGpRdWVyeS5lYWNoKFtcImtleWRvd25cIiwgXCJrZXl1cFwiLCBcImtleXByZXNzXCJdLCBmdW5jdGlvbigpIHtcbiAgICBqUXVlcnkuZXZlbnQuc3BlY2lhbFt0aGlzXSA9IHtcbiAgICAgIGFkZDoga2V5SGFuZGxlclxuICAgIH07XG4gIH0pO1xuXG59KShqUXVlcnkgfHwgdGhpcy5qUXVlcnkgfHwgd2luZG93LmpRdWVyeSk7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7QUFBQTtBQUFBO0FBb0JBLEtBQUMsU0FBU0EsU0FBUTtBQUVoQixNQUFBQSxRQUFPLFVBQVU7QUFBQSxRQUNmLFNBQVM7QUFBQSxRQUVULGFBQWE7QUFBQSxVQUNYLEdBQUc7QUFBQSxVQUNILEdBQUc7QUFBQSxVQUNILElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLElBQUk7QUFBQSxVQUNKLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxRQUNQO0FBQUEsUUFFQSxXQUFXO0FBQUEsVUFDVCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBO0FBQUEsUUFHQSx5QkFBeUI7QUFBQSxVQUN2QjtBQUFBLFVBQVE7QUFBQSxVQUFZO0FBQUEsVUFBVTtBQUFBLFVBQVM7QUFBQSxVQUFPO0FBQUEsVUFBUztBQUFBLFVBQVE7QUFBQSxVQUFTO0FBQUEsVUFBUTtBQUFBLFVBQVE7QUFBQSxVQUN4RjtBQUFBLFVBQWtCO0FBQUEsVUFBVTtBQUFBLFVBQVM7QUFBQSxRQUFLO0FBQUE7QUFBQSxRQUc1QyxnQkFBZ0I7QUFBQSxRQUVoQixTQUFTO0FBQUEsVUFDUCw4QkFBOEI7QUFBQSxVQUM5QixrQkFBa0I7QUFBQSxVQUNsQix1QkFBdUI7QUFBQSxRQUN6QjtBQUFBLE1BQ0Y7QUFFQSxlQUFTLFdBQVcsV0FBVztBQUM3QixZQUFJLE9BQU8sVUFBVSxTQUFTLFVBQVU7QUFDdEMsb0JBQVUsT0FBTztBQUFBLFlBQ2YsTUFBTSxVQUFVO0FBQUEsVUFDbEI7QUFBQSxRQUNGO0FBR0EsWUFBSSxDQUFDLFVBQVUsUUFBUSxDQUFDLFVBQVUsS0FBSyxRQUFRLE9BQU8sVUFBVSxLQUFLLFNBQVMsVUFBVTtBQUN0RjtBQUFBLFFBQ0Y7QUFFQSxZQUFJLGNBQWMsVUFBVSxTQUMxQixPQUFPLFVBQVUsS0FBSyxLQUFLLFlBQVksRUFBRSxNQUFNLEdBQUc7QUFFcEQsa0JBQVUsVUFBVSxTQUFTLE9BQU87QUFFbEMsY0FBSSxTQUFTLE1BQU0sV0FDaEJBLFFBQU8sUUFBUSxRQUFRLGdDQUN0QkEsUUFBTyxRQUFRLGVBQWUsS0FBSyxNQUFNLE9BQU8sUUFBUSxLQUN2REEsUUFBTyxRQUFRLFFBQVEseUJBQXlCQSxRQUFPLE1BQU0sTUFBTSxFQUFFLEtBQUssaUJBQWlCLEtBQzNGQSxRQUFPLFFBQVEsUUFBUSxvQkFDdEJBLFFBQU8sUUFBUSxNQUFNLE9BQU8sTUFBTUEsUUFBTyxRQUFRLHVCQUF1QixJQUFJLEtBQU07QUFDdEY7QUFBQSxVQUNGO0FBRUEsY0FBSSxVQUFVLE1BQU0sU0FBUyxjQUFjQSxRQUFPLFFBQVEsWUFBWSxNQUFNLEtBQUssR0FDL0UsWUFBWSxPQUFPLGFBQWEsTUFBTSxLQUFLLEVBQUUsWUFBWSxHQUN6RCxRQUFRLElBQ1IsV0FBVyxDQUFDO0FBRWQsVUFBQUEsUUFBTyxLQUFLLENBQUMsT0FBTyxRQUFRLE9BQU8sR0FBRyxTQUFTLE9BQU8sWUFBWTtBQUVoRSxnQkFBSSxNQUFNLGFBQWEsS0FBSyxLQUFLLFlBQVksWUFBWTtBQUN2RCx1QkFBUyxhQUFhO0FBQUEsWUFDeEI7QUFBQSxVQUNGLENBQUM7QUFHRCxjQUFJLE1BQU0sV0FBVyxDQUFDLE1BQU0sV0FBVyxZQUFZLFFBQVE7QUFDekQscUJBQVM7QUFBQSxVQUNYO0FBRUEsY0FBSSxNQUFNLFdBQVcsWUFBWSxVQUFVLE1BQU0sUUFBUSxpQkFBaUIsSUFBSSxJQUFJO0FBQ2hGLG9CQUFRLE1BQU0sUUFBUSxtQkFBbUIsUUFBUTtBQUFBLFVBQ25EO0FBRUEsY0FBSSxTQUFTO0FBQ1gscUJBQVMsUUFBUSxPQUFPLElBQUk7QUFBQSxVQUM5QixPQUNLO0FBQ0gscUJBQVMsUUFBUSxTQUFTLElBQUk7QUFDOUIscUJBQVMsUUFBUUEsUUFBTyxRQUFRLFVBQVUsU0FBUyxDQUFDLElBQUk7QUFHeEQsZ0JBQUksVUFBVSxVQUFVO0FBQ3RCLHVCQUFTQSxRQUFPLFFBQVEsVUFBVSxTQUFTLENBQUMsSUFBSTtBQUFBLFlBQ2xEO0FBQUEsVUFDRjtBQUVBLG1CQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxJQUFJLEdBQUcsS0FBSztBQUMzQyxnQkFBSSxTQUFTLEtBQUssQ0FBQyxDQUFDLEdBQUc7QUFDckIscUJBQU8sWUFBWSxNQUFNLE1BQU0sU0FBUztBQUFBLFlBQzFDO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBRUEsTUFBQUEsUUFBTyxLQUFLLENBQUMsV0FBVyxTQUFTLFVBQVUsR0FBRyxXQUFXO0FBQ3ZELFFBQUFBLFFBQU8sTUFBTSxRQUFRLElBQUksSUFBSTtBQUFBLFVBQzNCLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFFSCxHQUFHLFVBQVUsUUFBSyxVQUFVLE9BQU8sTUFBTTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbImpRdWVyeSJdCn0K

import {
  __commonJS
} from "./chunk-YRJTWU7C.js";

// ../../../../../../.yarn/berry/cache/downloadjs-patch-7ebed16ecc-10c0.zip/node_modules/downloadjs/download.js
var require_download = __commonJS({
  "../../../../../../.yarn/berry/cache/downloadjs-patch-7ebed16ecc-10c0.zip/node_modules/downloadjs/download.js"(exports, module) {
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define([], factory);
      } else if (typeof exports === "object") {
        module.exports = factory();
      } else {
        root.download = factory();
      }
    })(exports, function() {
      return function download(data, strFileName, strMimeType) {
        var self = window, defaultMime = "application/octet-stream", mimeType = strMimeType || defaultMime, payload = data, url = !strFileName && !strMimeType && payload, anchor = document.createElement("a"), toString = function(a) {
          return String(a);
        }, myBlob = self.Blob || self.MozBlob || self.WebKitBlob || toString, fileName = strFileName || "download", blob, reader;
        myBlob = myBlob.call ? myBlob.bind(self) : Blob;
        if (String(this) === "true") {
          payload = [payload, mimeType];
          mimeType = payload[0];
          payload = payload[1];
        }
        if (url && url.length < 2048) {
          fileName = url.split("/").pop().split("?")[0];
          anchor.href = url;
          if (anchor.href.indexOf(url) !== -1) {
            var ajax = new XMLHttpRequest();
            ajax.open("GET", url, true);
            ajax.responseType = "blob";
            ajax.onload = function(e) {
              download(e.target.response, fileName, defaultMime);
            };
            setTimeout(function() {
              ajax.send();
            }, 0);
            return ajax;
          }
        }
        if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)) {
          if (payload.length > 1024 * 1024 * 1.999 && myBlob !== toString) {
            payload = dataUrlToBlob(payload);
            mimeType = payload.type || defaultMime;
          } else {
            return navigator.msSaveBlob ? (
              // IE10 can't do a[download], only Blobs:
              navigator.msSaveBlob(dataUrlToBlob(payload), fileName)
            ) : saver(payload);
          }
        } else {
          if (/([\x80-\xff])/.test(payload)) {
            var i = 0, tempUiArr = new Uint8Array(payload.length), mx = tempUiArr.length;
            for (i; i < mx; ++i) tempUiArr[i] = payload.charCodeAt(i);
            payload = new myBlob([tempUiArr], { type: mimeType });
          }
        }
        blob = payload instanceof myBlob ? payload : new myBlob([payload], { type: mimeType });
        function dataUrlToBlob(strUrl) {
          var parts = strUrl.split(/[:;,]/), type = parts[1], indexDecoder = strUrl.indexOf("charset") > 0 ? 3 : 2, decoder = parts[indexDecoder] == "base64" ? atob : decodeURIComponent, binData = decoder(parts.pop()), mx2 = binData.length, i2 = 0, uiArr = new Uint8Array(mx2);
          for (i2; i2 < mx2; ++i2) uiArr[i2] = binData.charCodeAt(i2);
          return new myBlob([uiArr], { type });
        }
        function saver(url2, winMode) {
          if ("download" in anchor) {
            anchor.href = url2;
            anchor.setAttribute("download", fileName);
            anchor.className = "download-js-link";
            anchor.innerHTML = "downloading...";
            anchor.style.display = "none";
            anchor.addEventListener("click", function(e) {
              e.stopPropagation();
              this.removeEventListener("click", arguments.callee);
            });
            document.body.appendChild(anchor);
            setTimeout(function() {
              anchor.click();
              document.body.removeChild(anchor);
              if (winMode === true) {
                setTimeout(function() {
                  self.URL.revokeObjectURL(anchor.href);
                }, 250);
              }
            }, 66);
            return true;
          }
          if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
            if (/^data:/.test(url2)) url2 = "data:" + url2.replace(/^data:([\w\/\-\+]+)/, defaultMime);
            if (!window.open(url2)) {
              if (confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")) {
                location.href = url2;
              }
            }
            return true;
          }
          var f = document.createElement("iframe");
          document.body.appendChild(f);
          if (!winMode && /^data:/.test(url2)) {
            url2 = "data:" + url2.replace(/^data:([\w\/\-\+]+)/, defaultMime);
          }
          f.src = url2;
          setTimeout(function() {
            document.body.removeChild(f);
          }, 333);
        }
        if (navigator.msSaveBlob) {
          return navigator.msSaveBlob(blob, fileName);
        }
        if (self.URL) {
          saver(self.URL.createObjectURL(blob), true);
        } else {
          if (typeof blob === "string" || blob.constructor === toString) {
            try {
              return saver("data:" + mimeType + ";base64," + self.btoa(blob));
            } catch (y) {
              return saver("data:" + mimeType + "," + encodeURIComponent(blob));
            }
          }
          reader = new FileReader();
          reader.onload = function(e) {
            saver(this.result);
          };
          reader.readAsDataURL(blob);
        }
        return true;
      };
    });
  }
});
export default require_download();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvZG93bmxvYWRqcy1wYXRjaC03ZWJlZDE2ZWNjLTEwYzAuemlwL25vZGVfbW9kdWxlcy9kb3dubG9hZGpzL2Rvd25sb2FkLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvL2Rvd25sb2FkLmpzIHY0LjIxLCBieSBkYW5kYXZpczsgMjAwOC0yMDE4LiBbTUlUXSBzZWUgaHR0cDovL2Rhbm1sLmNvbS9kb3dubG9hZC5odG1sIGZvciB0ZXN0cy91c2FnZVxuLy8gdjEgbGFuZGVkIGEgRkYrQ2hyb21lIGNvbXBhdGlibGUgd2F5IG9mIGRvd25sb2FkaW5nIHN0cmluZ3MgdG8gbG9jYWwgdW4tbmFtZWQgZmlsZXMsIHVwZ3JhZGVkIHRvIHVzZSBhIGhpZGRlbiBmcmFtZSBhbmQgb3B0aW9uYWwgbWltZVxuLy8gdjIgYWRkZWQgbmFtZWQgZmlsZXMgdmlhIGFbZG93bmxvYWRdLCBtc1NhdmVCbG9iLCBJRSAoMTArKSBzdXBwb3J0LCBhbmQgd2luZG93LlVSTCBzdXBwb3J0IGZvciBsYXJnZXIrZmFzdGVyIHNhdmVzIHRoYW4gZGF0YVVSTHNcbi8vIHYzIGFkZGVkIGRhdGFVUkwgYW5kIEJsb2IgSW5wdXQsIGJpbmQtdG9nZ2xlIGFyaXR5LCBhbmQgbGVnYWN5IGRhdGFVUkwgZmFsbGJhY2sgd2FzIGltcHJvdmVkIHdpdGggZm9yY2UtZG93bmxvYWQgbWltZSBhbmQgYmFzZTY0IHN1cHBvcnQuIDMuMSBpbXByb3ZlZCBzYWZhcmkgaGFuZGxpbmcuXG4vLyB2NCBhZGRzIEFNRC9VTUQsIGNvbW1vbkpTLCBhbmQgcGxhaW4gYnJvd3NlciBzdXBwb3J0XG4vLyB2NC4xIGFkZHMgdXJsIGRvd25sb2FkIGNhcGFiaWxpdHkgdmlhIHNvbG8gVVJMIGFyZ3VtZW50IChzYW1lIGRvbWFpbi9DT1JTIG9ubHkpXG4vLyB2NC4yIGFkZHMgc2VtYW50aWMgdmFyaWFibGUgbmFtZXMsIGxvbmcgKG92ZXIgMk1CKSBkYXRhVVJMIHN1cHBvcnQsIGFuZCBoaWRkZW4gYnkgZGVmYXVsdCB0ZW1wIGFuY2hvcnNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ybmRtZS9kb3dubG9hZFxuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuXHRcdC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuXHRcdC8vIGxpa2UgTm9kZS5cblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fSBlbHNlIHtcblx0XHQvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuXHRcdHJvb3QuZG93bmxvYWQgPSBmYWN0b3J5KCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuXG5cdHJldHVybiBmdW5jdGlvbiBkb3dubG9hZChkYXRhLCBzdHJGaWxlTmFtZSwgc3RyTWltZVR5cGUpIHtcblxuXHRcdHZhciBzZWxmID0gd2luZG93LCAvLyB0aGlzIHNjcmlwdCBpcyBvbmx5IGZvciBicm93c2VycyBhbnl3YXkuLi5cblx0XHRcdGRlZmF1bHRNaW1lID0gXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIiwgLy8gdGhpcyBkZWZhdWx0IG1pbWUgYWxzbyB0cmlnZ2VycyBpZnJhbWUgZG93bmxvYWRzXG5cdFx0XHRtaW1lVHlwZSA9IHN0ck1pbWVUeXBlIHx8IGRlZmF1bHRNaW1lLFxuXHRcdFx0cGF5bG9hZCA9IGRhdGEsXG5cdFx0XHR1cmwgPSAhc3RyRmlsZU5hbWUgJiYgIXN0ck1pbWVUeXBlICYmIHBheWxvYWQsXG5cdFx0XHRhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSxcblx0XHRcdHRvU3RyaW5nID0gZnVuY3Rpb24oYSl7cmV0dXJuIFN0cmluZyhhKTt9LFxuXHRcdFx0bXlCbG9iID0gKHNlbGYuQmxvYiB8fCBzZWxmLk1vekJsb2IgfHwgc2VsZi5XZWJLaXRCbG9iIHx8IHRvU3RyaW5nKSxcblx0XHRcdGZpbGVOYW1lID0gc3RyRmlsZU5hbWUgfHwgXCJkb3dubG9hZFwiLFxuXHRcdFx0YmxvYixcblx0XHRcdHJlYWRlcjtcblx0XHRcdG15QmxvYj0gbXlCbG9iLmNhbGwgPyBteUJsb2IuYmluZChzZWxmKSA6IEJsb2IgO1xuXHQgIFxuXHRcdGlmKFN0cmluZyh0aGlzKT09PVwidHJ1ZVwiKXsgLy9yZXZlcnNlIGFyZ3VtZW50cywgYWxsb3dpbmcgZG93bmxvYWQuYmluZCh0cnVlLCBcInRleHQveG1sXCIsIFwiZXhwb3J0LnhtbFwiKSB0byBhY3QgYXMgYSBjYWxsYmFja1xuXHRcdFx0cGF5bG9hZD1bcGF5bG9hZCwgbWltZVR5cGVdO1xuXHRcdFx0bWltZVR5cGU9cGF5bG9hZFswXTtcblx0XHRcdHBheWxvYWQ9cGF5bG9hZFsxXTtcblx0XHR9XG5cblxuXHRcdGlmKHVybCAmJiB1cmwubGVuZ3RoPCAyMDQ4KXsgLy8gaWYgbm8gZmlsZW5hbWUgYW5kIG5vIG1pbWUsIGFzc3VtZSBhIHVybCB3YXMgcGFzc2VkIGFzIHRoZSBvbmx5IGFyZ3VtZW50XG5cdFx0XHRmaWxlTmFtZSA9IHVybC5zcGxpdChcIi9cIikucG9wKCkuc3BsaXQoXCI/XCIpWzBdO1xuXHRcdFx0YW5jaG9yLmhyZWYgPSB1cmw7IC8vIGFzc2lnbiBocmVmIHByb3AgdG8gdGVtcCBhbmNob3Jcblx0XHQgIFx0aWYoYW5jaG9yLmhyZWYuaW5kZXhPZih1cmwpICE9PSAtMSl7IC8vIGlmIHRoZSBicm93c2VyIGRldGVybWluZXMgdGhhdCBpdCdzIGEgcG90ZW50aWFsbHkgdmFsaWQgdXJsIHBhdGg6XG4gICAgICAgIFx0XHR2YXIgYWpheD1uZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgXHRcdGFqYXgub3BlbiggXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgICAgICAgXHRcdGFqYXgucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuICAgICAgICBcdFx0YWpheC5vbmxvYWQ9IGZ1bmN0aW9uKGUpeyBcblx0XHRcdFx0ICBkb3dubG9hZChlLnRhcmdldC5yZXNwb25zZSwgZmlsZU5hbWUsIGRlZmF1bHRNaW1lKTtcblx0XHRcdFx0fTtcbiAgICAgICAgXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgYWpheC5zZW5kKCk7fSwgMCk7IC8vIGFsbG93cyBzZXR0aW5nIGN1c3RvbSBhamF4IGhlYWRlcnMgdXNpbmcgdGhlIHJldHVybjpcblx0XHRcdCAgICByZXR1cm4gYWpheDtcblx0XHRcdH0gLy8gZW5kIGlmIHZhbGlkIHVybD9cblx0XHR9IC8vIGVuZCBpZiB1cmw/XG5cblxuXHRcdC8vZ28gYWhlYWQgYW5kIGRvd25sb2FkIGRhdGFVUkxzIHJpZ2h0IGF3YXlcblx0XHRpZigvXmRhdGE6KFtcXHcrLV0rXFwvW1xcdysuLV0rKT9bLDtdLy50ZXN0KHBheWxvYWQpKXtcblx0XHRcblx0XHRcdGlmKHBheWxvYWQubGVuZ3RoID4gKDEwMjQqMTAyNCoxLjk5OSkgJiYgbXlCbG9iICE9PSB0b1N0cmluZyApe1xuXHRcdFx0XHRwYXlsb2FkPWRhdGFVcmxUb0Jsb2IocGF5bG9hZCk7XG5cdFx0XHRcdG1pbWVUeXBlPXBheWxvYWQudHlwZSB8fCBkZWZhdWx0TWltZTtcblx0XHRcdH1lbHNle1x0XHRcdFxuXHRcdFx0XHRyZXR1cm4gbmF2aWdhdG9yLm1zU2F2ZUJsb2IgPyAgLy8gSUUxMCBjYW4ndCBkbyBhW2Rvd25sb2FkXSwgb25seSBCbG9iczpcblx0XHRcdFx0XHRuYXZpZ2F0b3IubXNTYXZlQmxvYihkYXRhVXJsVG9CbG9iKHBheWxvYWQpLCBmaWxlTmFtZSkgOlxuXHRcdFx0XHRcdHNhdmVyKHBheWxvYWQpIDsgLy8gZXZlcnlvbmUgZWxzZSBjYW4gc2F2ZSBkYXRhVVJMcyB1bi1wcm9jZXNzZWRcblx0XHRcdH1cblx0XHRcdFxuXHRcdH1lbHNley8vbm90IGRhdGEgdXJsLCBpcyBpdCBhIHN0cmluZyB3aXRoIHNwZWNpYWwgbmVlZHM/XG5cdFx0XHRpZigvKFtcXHg4MC1cXHhmZl0pLy50ZXN0KHBheWxvYWQpKXtcdFx0XHQgIFxuXHRcdFx0XHR2YXIgaT0wLCB0ZW1wVWlBcnI9IG5ldyBVaW50OEFycmF5KHBheWxvYWQubGVuZ3RoKSwgbXg9dGVtcFVpQXJyLmxlbmd0aDtcblx0XHRcdFx0Zm9yKGk7aTxteDsrK2kpIHRlbXBVaUFycltpXT0gcGF5bG9hZC5jaGFyQ29kZUF0KGkpO1xuXHRcdFx0IFx0cGF5bG9hZD1uZXcgbXlCbG9iKFt0ZW1wVWlBcnJdLCB7dHlwZTogbWltZVR5cGV9KTtcblx0XHRcdH1cdFx0ICBcblx0XHR9XG5cdFx0YmxvYiA9IHBheWxvYWQgaW5zdGFuY2VvZiBteUJsb2IgP1xuXHRcdFx0cGF5bG9hZCA6XG5cdFx0XHRuZXcgbXlCbG9iKFtwYXlsb2FkXSwge3R5cGU6IG1pbWVUeXBlfSkgO1xuXG5cblx0XHRmdW5jdGlvbiBkYXRhVXJsVG9CbG9iKHN0clVybCkge1xuXHRcdFx0dmFyIHBhcnRzPSBzdHJVcmwuc3BsaXQoL1s6OyxdLyksXG5cdFx0XHR0eXBlPSBwYXJ0c1sxXSxcblx0XHRcdGluZGV4RGVjb2RlciA9IHN0clVybC5pbmRleE9mKFwiY2hhcnNldFwiKT4wID8gMzogMixcblx0XHRcdGRlY29kZXI9IHBhcnRzW2luZGV4RGVjb2Rlcl0gPT0gXCJiYXNlNjRcIiA/IGF0b2IgOiBkZWNvZGVVUklDb21wb25lbnQsXG5cdFx0XHRiaW5EYXRhPSBkZWNvZGVyKCBwYXJ0cy5wb3AoKSApLFxuXHRcdFx0bXg9IGJpbkRhdGEubGVuZ3RoLFxuXHRcdFx0aT0gMCxcblx0XHRcdHVpQXJyPSBuZXcgVWludDhBcnJheShteCk7XG5cblx0XHRcdGZvcihpO2k8bXg7KytpKSB1aUFycltpXT0gYmluRGF0YS5jaGFyQ29kZUF0KGkpO1xuXG5cdFx0XHRyZXR1cm4gbmV3IG15QmxvYihbdWlBcnJdLCB7dHlwZTogdHlwZX0pO1xuXHRcdCB9XG5cblx0XHRmdW5jdGlvbiBzYXZlcih1cmwsIHdpbk1vZGUpe1xuXG5cdFx0XHRpZiAoJ2Rvd25sb2FkJyBpbiBhbmNob3IpIHsgLy9odG1sNSBBW2Rvd25sb2FkXVxuXHRcdFx0XHRhbmNob3IuaHJlZiA9IHVybDtcblx0XHRcdFx0YW5jaG9yLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGZpbGVOYW1lKTtcblx0XHRcdFx0YW5jaG9yLmNsYXNzTmFtZSA9IFwiZG93bmxvYWQtanMtbGlua1wiO1xuXHRcdFx0XHRhbmNob3IuaW5uZXJIVE1MID0gXCJkb3dubG9hZGluZy4uLlwiO1xuXHRcdFx0XHRhbmNob3Iuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuIFx0XHRcdFx0YW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuIFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuIFx0XHRcdFx0XHR0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXJndW1lbnRzLmNhbGxlZSk7XG4gXHRcdFx0XHR9KTtcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhbmNob3IpO1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGFuY2hvci5jbGljaygpO1xuXHRcdFx0XHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYW5jaG9yKTtcblx0XHRcdFx0XHRpZih3aW5Nb2RlPT09dHJ1ZSl7c2V0VGltZW91dChmdW5jdGlvbigpeyBzZWxmLlVSTC5yZXZva2VPYmplY3RVUkwoYW5jaG9yLmhyZWYpO30sIDI1MCApO31cblx0XHRcdFx0fSwgNjYpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gaGFuZGxlIG5vbi1hW2Rvd25sb2FkXSBzYWZhcmkgYXMgYmVzdCB3ZSBjYW46XG5cdFx0XHRpZigvKFZlcnNpb24pXFwvKFxcZCspXFwuKFxcZCspKD86XFwuKFxcZCspKT8uKlNhZmFyaVxcLy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuXHRcdFx0XHRpZigvXmRhdGE6Ly50ZXN0KHVybCkpXHR1cmw9XCJkYXRhOlwiK3VybC5yZXBsYWNlKC9eZGF0YTooW1xcd1xcL1xcLVxcK10rKS8sIGRlZmF1bHRNaW1lKTtcblx0XHRcdFx0aWYoIXdpbmRvdy5vcGVuKHVybCkpeyAvLyBwb3B1cCBibG9ja2VkLCBvZmZlciBkaXJlY3QgZG93bmxvYWQ6XG5cdFx0XHRcdFx0aWYoY29uZmlybShcIkRpc3BsYXlpbmcgTmV3IERvY3VtZW50XFxuXFxuVXNlIFNhdmUgQXMuLi4gdG8gZG93bmxvYWQsIHRoZW4gY2xpY2sgYmFjayB0byByZXR1cm4gdG8gdGhpcyBwYWdlLlwiKSl7IGxvY2F0aW9uLmhyZWY9dXJsOyB9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vZG8gaWZyYW1lIGRhdGFVUkwgZG93bmxvYWQgKG9sZCBjaCtGRik6XG5cdFx0XHR2YXIgZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGYpO1xuXG5cdFx0XHRpZighd2luTW9kZSAmJiAvXmRhdGE6Ly50ZXN0KHVybCkpeyAvLyBmb3JjZSBhIG1pbWUgdGhhdCB3aWxsIGRvd25sb2FkOlxuXHRcdFx0XHR1cmw9XCJkYXRhOlwiK3VybC5yZXBsYWNlKC9eZGF0YTooW1xcd1xcL1xcLVxcK10rKS8sIGRlZmF1bHRNaW1lKTtcblx0XHRcdH1cblx0XHRcdGYuc3JjPXVybDtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChmKTsgfSwgMzMzKTtcblxuXHRcdH0vL2VuZCBzYXZlclxuXG5cblxuXG5cdFx0aWYgKG5hdmlnYXRvci5tc1NhdmVCbG9iKSB7IC8vIElFMTArIDogKGhhcyBCbG9iLCBidXQgbm90IGFbZG93bmxvYWRdIG9yIFVSTClcblx0XHRcdHJldHVybiBuYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlTmFtZSk7XG5cdFx0fVxuXG5cdFx0aWYoc2VsZi5VUkwpeyAvLyBzaW1wbGUgZmFzdCBhbmQgbW9kZXJuIHdheSB1c2luZyBCbG9iIGFuZCBVUkw6XG5cdFx0XHRzYXZlcihzZWxmLlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYiksIHRydWUpO1xuXHRcdH1lbHNle1xuXHRcdFx0Ly8gaGFuZGxlIG5vbi1CbG9iKCkrbm9uLVVSTCBicm93c2Vyczpcblx0XHRcdGlmKHR5cGVvZiBibG9iID09PSBcInN0cmluZ1wiIHx8IGJsb2IuY29uc3RydWN0b3I9PT10b1N0cmluZyApe1xuXHRcdFx0XHR0cnl7XG5cdFx0XHRcdFx0cmV0dXJuIHNhdmVyKCBcImRhdGE6XCIgKyAgbWltZVR5cGUgICArIFwiO2Jhc2U2NCxcIiAgKyAgc2VsZi5idG9hKGJsb2IpICApO1xuXHRcdFx0XHR9Y2F0Y2goeSl7XG5cdFx0XHRcdFx0cmV0dXJuIHNhdmVyKCBcImRhdGE6XCIgKyAgbWltZVR5cGUgICArIFwiLFwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGJsb2IpICApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEJsb2IgYnV0IG5vdCBVUkwgc3VwcG9ydDpcblx0XHRcdHJlYWRlcj1uZXcgRmlsZVJlYWRlcigpO1xuXHRcdFx0cmVhZGVyLm9ubG9hZD1mdW5jdGlvbihlKXtcblx0XHRcdFx0c2F2ZXIodGhpcy5yZXN1bHQpO1xuXHRcdFx0fTtcblx0XHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTsgLyogZW5kIGRv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

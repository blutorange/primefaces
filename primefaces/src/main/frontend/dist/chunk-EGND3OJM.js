import {
  require_jquery_bundler_require_wrapper
} from "./chunk-25GSMOF2.js";
import {
  __commonJS
} from "./chunk-YRJTWU7C.js";

// ../../../../../../.yarn/berry/cache/jquery.browser-npm-0.1.0-fc8d15c97e-10c0.zip/node_modules/jquery.browser/dist/jquery.browser.js
var require_jquery_browser = __commonJS({
  "../../../../../../.yarn/berry/cache/jquery.browser-npm-0.1.0-fc8d15c97e-10c0.zip/node_modules/jquery.browser/dist/jquery.browser.js"(exports, module) {
    (function(factory) {
      if (typeof define === "function" && define.amd) {
        define(["jquery"], function($) {
          return factory($);
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(require_jquery_bundler_require_wrapper());
      } else {
        factory(window.jQuery);
      }
    })(function(jQuery) {
      "use strict";
      function uaMatch(ua) {
        if (ua === void 0) {
          ua = window.navigator.userAgent;
        }
        ua = ua.toLowerCase();
        var match = /(edge)\/([\w.]+)/.exec(ua) || /(opr)[\/]([\w.]+)/.exec(ua) || /(chrome)[ \/]([\w.]+)/.exec(ua) || /(iemobile)[\/]([\w.]+)/.exec(ua) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
        var platform_match = /(ipad)/.exec(ua) || /(ipod)/.exec(ua) || /(windows phone)/.exec(ua) || /(iphone)/.exec(ua) || /(kindle)/.exec(ua) || /(silk)/.exec(ua) || /(android)/.exec(ua) || /(win)/.exec(ua) || /(mac)/.exec(ua) || /(linux)/.exec(ua) || /(cros)/.exec(ua) || /(playbook)/.exec(ua) || /(bb)/.exec(ua) || /(blackberry)/.exec(ua) || [];
        var browser = {}, matched = {
          browser: match[5] || match[3] || match[1] || "",
          version: match[2] || match[4] || "0",
          versionNumber: match[4] || match[2] || "0",
          platform: platform_match[0] || ""
        };
        if (matched.browser) {
          browser[matched.browser] = true;
          browser.version = matched.version;
          browser.versionNumber = parseInt(matched.versionNumber, 10);
        }
        if (matched.platform) {
          browser[matched.platform] = true;
        }
        if (browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone || browser.ipod || browser.kindle || browser.playbook || browser.silk || browser["windows phone"]) {
          browser.mobile = true;
        }
        if (browser.cros || browser.mac || browser.linux || browser.win) {
          browser.desktop = true;
        }
        if (browser.chrome || browser.opr || browser.safari) {
          browser.webkit = true;
        }
        if (browser.rv || browser.iemobile) {
          var ie = "msie";
          matched.browser = ie;
          browser[ie] = true;
        }
        if (browser.edge) {
          delete browser.edge;
          var msedge = "msedge";
          matched.browser = msedge;
          browser[msedge] = true;
        }
        if (browser.safari && browser.blackberry) {
          var blackberry = "blackberry";
          matched.browser = blackberry;
          browser[blackberry] = true;
        }
        if (browser.safari && browser.playbook) {
          var playbook = "playbook";
          matched.browser = playbook;
          browser[playbook] = true;
        }
        if (browser.bb) {
          var bb = "blackberry";
          matched.browser = bb;
          browser[bb] = true;
        }
        if (browser.opr) {
          var opera = "opera";
          matched.browser = opera;
          browser[opera] = true;
        }
        if (browser.safari && browser.android) {
          var android = "android";
          matched.browser = android;
          browser[android] = true;
        }
        if (browser.safari && browser.kindle) {
          var kindle = "kindle";
          matched.browser = kindle;
          browser[kindle] = true;
        }
        if (browser.safari && browser.silk) {
          var silk = "silk";
          matched.browser = silk;
          browser[silk] = true;
        }
        browser.name = matched.browser;
        browser.platform = matched.platform;
        return browser;
      }
      window.jQBrowser = uaMatch(window.navigator.userAgent);
      window.jQBrowser.uaMatch = uaMatch;
      if (jQuery) {
        jQuery.browser = window.jQBrowser;
      }
      return window.jQBrowser;
    });
  }
});

export {
  require_jquery_browser
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvanF1ZXJ5LmJyb3dzZXItbnBtLTAuMS4wLWZjOGQxNWM5N2UtMTBjMC56aXAvbm9kZV9tb2R1bGVzL2pxdWVyeS5icm93c2VyL2Rpc3QvanF1ZXJ5LmJyb3dzZXIuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qIVxuICogalF1ZXJ5IEJyb3dzZXIgUGx1Z2luIDAuMS4wXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ2FiY2ViL2pxdWVyeS1icm93c2VyLXBsdWdpblxuICpcbiAqIE9yaWdpbmFsIGpxdWVyeS1icm93c2VyIGNvZGUgQ29weXJpZ2h0IDIwMDUsIDIwMTUgalF1ZXJ5IEZvdW5kYXRpb24sIEluYy4gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIE1vZGlmaWNhdGlvbnMgQ29weXJpZ2h0IDIwMTUgR2FicmllbCBDZWJyaWFuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ2FiY2ViXG4gKlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKlxuICogRGF0ZTogMDUtMDctMjAxNVxuICovXG4vKmdsb2JhbCB3aW5kb3c6IGZhbHNlICovXG5cbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgIGRlZmluZShbJ2pxdWVyeSddLCBmdW5jdGlvbiAoJCkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoJCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIC8vIE5vZGUtbGlrZSBlbnZpcm9ubWVudFxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgZmFjdG9yeSh3aW5kb3cualF1ZXJ5KTtcbiAgfVxufShmdW5jdGlvbihqUXVlcnkpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgZnVuY3Rpb24gdWFNYXRjaCggdWEgKSB7XG4gICAgLy8gSWYgYW4gVUEgaXMgbm90IHByb3ZpZGVkLCBkZWZhdWx0IHRvIHRoZSBjdXJyZW50IGJyb3dzZXIgVUEuXG4gICAgaWYgKCB1YSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICB9XG4gICAgdWEgPSB1YS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgdmFyIG1hdGNoID0gLyhlZGdlKVxcLyhbXFx3Ll0rKS8uZXhlYyggdWEgKSB8fFxuICAgICAgICAvKG9wcilbXFwvXShbXFx3Ll0rKS8uZXhlYyggdWEgKSB8fFxuICAgICAgICAvKGNocm9tZSlbIFxcL10oW1xcdy5dKykvLmV4ZWMoIHVhICkgfHxcbiAgICAgICAgLyhpZW1vYmlsZSlbXFwvXShbXFx3Ll0rKS8uZXhlYyggdWEgKSB8fFxuICAgICAgICAvKHZlcnNpb24pKGFwcGxld2Via2l0KVsgXFwvXShbXFx3Ll0rKS4qKHNhZmFyaSlbIFxcL10oW1xcdy5dKykvLmV4ZWMoIHVhICkgfHxcbiAgICAgICAgLyh3ZWJraXQpWyBcXC9dKFtcXHcuXSspLioodmVyc2lvbilbIFxcL10oW1xcdy5dKykuKihzYWZhcmkpWyBcXC9dKFtcXHcuXSspLy5leGVjKCB1YSApIHx8XG4gICAgICAgIC8od2Via2l0KVsgXFwvXShbXFx3Ll0rKS8uZXhlYyggdWEgKSB8fFxuICAgICAgICAvKG9wZXJhKSg/Oi4qdmVyc2lvbnwpWyBcXC9dKFtcXHcuXSspLy5leGVjKCB1YSApIHx8XG4gICAgICAgIC8obXNpZSkgKFtcXHcuXSspLy5leGVjKCB1YSApIHx8XG4gICAgICAgIHVhLmluZGV4T2YoXCJ0cmlkZW50XCIpID49IDAgJiYgLyhydikoPzo6fCApKFtcXHcuXSspLy5leGVjKCB1YSApIHx8XG4gICAgICAgIHVhLmluZGV4T2YoXCJjb21wYXRpYmxlXCIpIDwgMCAmJiAvKG1vemlsbGEpKD86Lio/IHJ2OihbXFx3Ll0rKXwpLy5leGVjKCB1YSApIHx8XG4gICAgICAgIFtdO1xuXG4gICAgdmFyIHBsYXRmb3JtX21hdGNoID0gLyhpcGFkKS8uZXhlYyggdWEgKSB8fFxuICAgICAgICAvKGlwb2QpLy5leGVjKCB1YSApIHx8XG4gICAgICAgIC8od2luZG93cyBwaG9uZSkvLmV4ZWMoIHVhICkgfHxcbiAgICAgICAgLyhpcGhvbmUpLy5leGVjKCB1YSApIHx8XG4gICAgICAgIC8oa2luZGxlKS8uZXhlYyggdWEgKSB8fFxuICAgICAgICAvKHNpbGspLy5leGVjKCB1YSApIHx8XG4gICAgICAgIC8oYW5kcm9pZCkvLmV4ZWMoIHVhICkgfHxcbiAgICAgICAgLyh3aW4pLy5leGVjKCB1YSApIHx8XG4gICAgICAgIC8obWFjKS8uZXhlYyggdWEgKSB8fFxuICAgICAgICAvKGxpbnV4KS8uZXhlYyggdWEgKSB8fFxuICAgICAgICAvKGNyb3MpLy5leGVjKCB1YSApIHx8XG4gICAgICAgIC8ocGxheWJvb2spLy5leGVjKCB1YSApIHx8XG4gICAgICAgIC8oYmIpLy5leGVjKCB1YSApIHx8XG4gICAgICAgIC8oYmxhY2tiZXJyeSkvLmV4ZWMoIHVhICkgfHxcbiAgICAgICAgW107XG5cbiAgICB2YXIgYnJvd3NlciA9IHt9LFxuICAgICAgICBtYXRjaGVkID0ge1xuICAgICAgICAgIGJyb3dzZXI6IG1hdGNoWyA1IF0gfHwgbWF0Y2hbIDMgXSB8fCBtYXRjaFsgMSBdIHx8IFwiXCIsXG4gICAgICAgICAgdmVyc2lvbjogbWF0Y2hbIDIgXSB8fCBtYXRjaFsgNCBdIHx8IFwiMFwiLFxuICAgICAgICAgIHZlcnNpb25OdW1iZXI6IG1hdGNoWyA0IF0gfHwgbWF0Y2hbIDIgXSB8fCBcIjBcIixcbiAgICAgICAgICBwbGF0Zm9ybTogcGxhdGZvcm1fbWF0Y2hbIDAgXSB8fCBcIlwiXG4gICAgICAgIH07XG5cbiAgICBpZiAoIG1hdGNoZWQuYnJvd3NlciApIHtcbiAgICAgIGJyb3dzZXJbIG1hdGNoZWQuYnJvd3NlciBdID0gdHJ1ZTtcbiAgICAgIGJyb3dzZXIudmVyc2lvbiA9IG1hdGNoZWQudmVyc2lvbjtcbiAgICAgIGJyb3dzZXIudmVyc2lvbk51bWJlciA9IHBhcnNlSW50KG1hdGNoZWQudmVyc2lvbk51bWJlciwgMTApO1xuICAgIH1cblxuICAgIGlmICggbWF0Y2hlZC5wbGF0Zm9ybSApIHtcbiAgICAgIGJyb3dzZXJbIG1hdGNoZWQucGxhdGZvcm0gXSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gVGhlc2UgYXJlIGFsbCBjb25zaWRlcmVkIG1vYmlsZSBwbGF0Zm9ybXMsIG1lYW5pbmcgdGhleSBydW4gYSBtb2JpbGUgYnJvd3NlclxuICAgIGlmICggYnJvd3Nlci5hbmRyb2lkIHx8IGJyb3dzZXIuYmIgfHwgYnJvd3Nlci5ibGFja2JlcnJ5IHx8IGJyb3dzZXIuaXBhZCB8fCBicm93c2VyLmlwaG9uZSB8fFxuICAgICAgYnJvd3Nlci5pcG9kIHx8IGJyb3dzZXIua2luZGxlIHx8IGJyb3dzZXIucGxheWJvb2sgfHwgYnJvd3Nlci5zaWxrIHx8IGJyb3dzZXJbIFwid2luZG93cyBwaG9uZVwiIF0pIHtcbiAgICAgIGJyb3dzZXIubW9iaWxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBUaGVzZSBhcmUgYWxsIGNvbnNpZGVyZWQgZGVza3RvcCBwbGF0Zm9ybXMsIG1lYW5pbmcgdGhleSBydW4gYSBkZXNrdG9wIGJyb3dzZXJcbiAgICBpZiAoIGJyb3dzZXIuY3JvcyB8fCBicm93c2VyLm1hYyB8fCBicm93c2VyLmxpbnV4IHx8IGJyb3dzZXIud2luICkge1xuICAgICAgYnJvd3Nlci5kZXNrdG9wID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDaHJvbWUsIE9wZXJhIDE1KyBhbmQgU2FmYXJpIGFyZSB3ZWJraXQgYmFzZWQgYnJvd3NlcnNcbiAgICBpZiAoIGJyb3dzZXIuY2hyb21lIHx8IGJyb3dzZXIub3ByIHx8IGJyb3dzZXIuc2FmYXJpICkge1xuICAgICAgYnJvd3Nlci53ZWJraXQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIElFMTEgaGFzIGEgbmV3IHRva2VuIHNvIHdlIHdpbGwgYXNzaWduIGl0IG1zaWUgdG8gYXZvaWQgYnJlYWtpbmcgY2hhbmdlc1xuICAgIGlmICggYnJvd3Nlci5ydiB8fCBicm93c2VyLmllbW9iaWxlKSB7XG4gICAgICB2YXIgaWUgPSBcIm1zaWVcIjtcblxuICAgICAgbWF0Y2hlZC5icm93c2VyID0gaWU7XG4gICAgICBicm93c2VyW2llXSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gRWRnZSBpcyBvZmZpY2lhbGx5IGtub3duIGFzIE1pY3Jvc29mdCBFZGdlLCBzbyByZXdyaXRlIHRoZSBrZXkgdG8gbWF0Y2hcbiAgICBpZiAoIGJyb3dzZXIuZWRnZSApIHtcbiAgICAgIGRlbGV0ZSBicm93c2VyLmVkZ2U7XG4gICAgICB2YXIgbXNlZGdlID0gXCJtc2VkZ2VcIjtcblxuICAgICAgbWF0Y2hlZC5icm93c2VyID0gbXNlZGdlO1xuICAgICAgYnJvd3Nlclttc2VkZ2VdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBCbGFja2JlcnJ5IGJyb3dzZXJzIGFyZSBtYXJrZWQgYXMgU2FmYXJpIG9uIEJsYWNrQmVycnlcbiAgICBpZiAoIGJyb3dzZXIuc2FmYXJpICYmIGJyb3dzZXIuYmxhY2tiZXJyeSApIHtcbiAgICAgIHZhciBibGFja2JlcnJ5ID0gXCJibGFja2JlcnJ5XCI7XG5cbiAgICAgIG1hdGNoZWQuYnJvd3NlciA9IGJsYWNrYmVycnk7XG4gICAgICBicm93c2VyW2JsYWNrYmVycnldID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBQbGF5Ym9vayBicm93c2VycyBhcmUgbWFya2VkIGFzIFNhZmFyaSBvbiBQbGF5Ym9va1xuICAgIGlmICggYnJvd3Nlci5zYWZhcmkgJiYgYnJvd3Nlci5wbGF5Ym9vayApIHtcbiAgICAgIHZhciBwbGF5Ym9vayA9IFwicGxheWJvb2tcIjtcblxuICAgICAgbWF0Y2hlZC5icm93c2VyID0gcGxheWJvb2s7XG4gICAgICBicm93c2VyW3BsYXlib29rXSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQkIxMCBpcyBhIG5ld2VyIE9TIHZlcnNpb24gb2YgQmxhY2tCZXJyeVxuICAgIGlmICggYnJvd3Nlci5iYiApIHtcbiAgICAgIHZhciBiYiA9IFwiYmxhY2tiZXJyeVwiO1xuXG4gICAgICBtYXRjaGVkLmJyb3dzZXIgPSBiYjtcbiAgICAgIGJyb3dzZXJbYmJdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBPcGVyYSAxNSsgYXJlIGlkZW50aWZpZWQgYXMgb3ByXG4gICAgaWYgKCBicm93c2VyLm9wciApIHtcbiAgICAgIHZhciBvcGVyYSA9IFwib3BlcmFcIjtcblxuICAgICAgbWF0Y2hlZC5icm93c2VyID0gb3BlcmE7XG4gICAgICBicm93c2VyW29wZXJhXSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gU3RvY2sgQW5kcm9pZCBicm93c2VycyBhcmUgbWFya2VkIGFzIFNhZmFyaSBvbiBBbmRyb2lkLlxuICAgIGlmICggYnJvd3Nlci5zYWZhcmkgJiYgYnJvd3Nlci5hbmRyb2lkICkge1xuICAgICAgdmFyIGFuZHJvaWQgPSBcImFuZHJvaWRcIjtcblxuICAgICAgbWF0Y2hlZC5icm93c2VyID0gYW5kcm9pZDtcbiAgICAgIGJyb3dzZXJbYW5kcm9pZF0gPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEtpbmRsZSBicm93c2VycyBhcmUgbWFya2VkIGFzIFNhZmFyaSBvbiBLaW5kbGVcbiAgICBpZiAoIGJyb3dzZXIuc2FmYXJpICYmIGJyb3dzZXIua2luZGxlICkge1xuICAgICAgdmFyIGtpbmRsZSA9IFwia2luZGxlXCI7XG5cbiAgICAgIG1hdGNoZWQuYnJvd3NlciA9IGtpbmRsZTtcbiAgICAgIGJyb3dzZXJba2luZGxlXSA9IHRydWU7XG4gICAgfVxuXG4gICAgIC8vIEtpbmRsZSBTaWxrIGJyb3dzZXJzIGFyZSBtYXJrZWQgYXMgU2FmYXJpIG9uIEtpbmRsZVxuICAgIGlmICggYnJvd3Nlci5zYWZhcmkgJiYgYnJvd3Nlci5zaWxrICkge1xuICAgICAgdmFyIHNpbGsgPSBcInNpbGtcIjtcblxuICAgICAgbWF0Y2hlZC5icm93c2VyID0gc2lsaztcbiAgICAgIGJyb3dzZXJbc2lsa10gPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFzc2lnbiB0aGUgbmFtZSBhbmQgcGxhdGZvcm0gdmFyaWFibGVcbiAgICBicm93c2VyLm5hbWUgPSBtYXRjaGVkLmJyb3dzZXI7XG4gICAgYnJvd3Nlci5wbGF0Zm9ybSA9IG1hdGNoZWQucGxhdGZvcm07XG4gICAgcmV0dXJuIGJyb3dzZXI7XG4gIH1cblxuICAvLyBSdW4gdGhlIG1hdGNoaW5nIHByb2Nlc3MsIGFsc28gYXNzaWduIHRoZSBmdW5jdGlvbiB0byB0aGUgcmV0dXJuZWQgb2JqZWN0XG4gIC8vIGZvciBtYW51YWwsIGpRdWVyeS1mcmVlIHVzZSBpZiBkZXNpcmVkXG4gIHdpbmRvdy5qUUJyb3dzZXIgPSB1YU1hdGNoKCB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCApO1xuICB3aW5kb3cualFCcm93c2VyLnVhTWF0Y2ggPSB1YU1hdGNoO1xuXG4gIC8vIE9ubHkgYXNzaWduIHRvIGpRdWVyeS5icm93c2VyIGlmIGpRdWVyeSBpcyBsb2FkZWRcbiAgaWYgKCBqUXVlcnkgKSB7XG4gICAgalF1ZXJ5LmJyb3dzZXIgPSB3aW5kb3cualFCcm93c2VyO1xuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5qUUJyb3dzZXI7XG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7OztBQUFBO0FBQUE7QUFnQkEsS0FBQyxTQUFVLFNBQVM7QUFDbEIsVUFBSSxPQUFPLFdBQVcsY0FBYyxPQUFPLEtBQUs7QUFFOUMsZUFBTyxD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

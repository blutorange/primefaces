import {
  require_jquery_bundler_require_wrapper
} from "./chunk-25GSMOF2.js";
import "./chunk-AGY32TFX.js";
import {
  BaseWidget
} from "./chunk-HGD6GSK5.js";
import {
  __commonJS,
  __publicField,
  __toESM
} from "./chunk-YRJTWU7C.js";

// src/knob/1-jquery.knob.cjs
var require_jquery_knob = __commonJS({
  "src/knob/1-jquery.knob.cjs"(exports, module) {
    (function(factory) {
      if (typeof exports === "object") {
        module.exports = factory(require_jquery_bundler_require_wrapper());
      } else if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
      } else {
        factory(jQuery);
      }
    })(function($2) {
      "use strict";
      var k = {}, max = Math.max, min = Math.min;
      k.c = {};
      k.c.d = $2(document);
      k.c.t = function(e) {
        return e.originalEvent.touches.length - 1;
      };
      k.o = function() {
        var s = this;
        this.o = null;
        this.$ = null;
        this.i = null;
        this.g = null;
        this.v = null;
        this.cv = null;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.$c = null;
        this.c = null;
        this.t = 0;
        this.isInit = false;
        this.fgColor = null;
        this.pColor = null;
        this.dH = null;
        this.cH = null;
        this.eH = null;
        this.rH = null;
        this.scale = 1;
        this.relative = false;
        this.relativeWidth = false;
        this.relativeHeight = false;
        this.$div = null;
        this.run = function() {
          var cf = function(e, conf) {
            var k2;
            for (k2 in conf) {
              s.o[k2] = conf[k2];
            }
            s._carve().init();
            s._configure()._draw();
          };
          if (this.$.data("kontroled")) return;
          this.$.data("kontroled", true);
          this.extend();
          this.o = $2.extend(
            {
              // Config
              min: this.$.data("min") !== void 0 ? this.$.data("min") : 0,
              max: this.$.data("max") !== void 0 ? this.$.data("max") : 100,
              stopper: true,
              readOnly: this.$.data("readonly") || this.$.attr("readonly") === "readonly",
              // UI
              cursor: this.$.data("cursor") === true && 30 || this.$.data("cursor") || 0,
              thickness: this.$.data("thickness") && Math.max(Math.min(this.$.data("thickness"), 1), 0.01) || 0.35,
              lineCap: this.$.data("linecap") || "butt",
              width: this.$.data("width") || 200,
              height: this.$.data("height") || 200,
              displayInput: this.$.data("displayinput") == null || this.$.data("displayinput"),
              displayPrevious: this.$.data("displayprevious"),
              fgColor: this.$.data("fgcolor") || "#87CEEB",
              inputColor: this.$.data("inputcolor"),
              font: this.$.data("font") || "Arial",
              fontWeight: this.$.data("font-weight") || "bold",
              inline: false,
              step: this.$.data("step") || 1,
              rotation: this.$.data("rotation"),
              // Hooks
              draw: null,
              // function () {}
              change: null,
              // function (value) {}
              cancel: null,
              // function () {}
              release: null,
              // function (value) {}
              // Output formatting, allows to add unit: %, ms ...
              format: function(v) {
                return v;
              },
              parse: function(v) {
                return parseFloat(v);
              }
            },
            this.o
          );
          this.o.flip = this.o.rotation === "anticlockwise" || this.o.rotation === "acw";
          if (!this.o.inputColor) {
            this.o.inputColor = this.o.fgColor;
          }
          if (this.$.is("fieldset")) {
            this.v = {};
            this.i = this.$.find("input");
            this.i.each(function(k2) {
              var $this = $2(this);
              s.i[k2] = $this;
              s.v[k2] = s.o.parse($this.val());
              $this.on(
                "change blur",
                function() {
                  var val = {};
                  val[k2] = $this.val();
                  s.val(s._validate(val));
                }
              );
            });
            this.$.find("legend").remove();
          } else {
            this.i = this.$;
            this.v = this.o.parse(this.$.val());
            this.v === "" && (this.v = this.o.min);
            this.$.on(
              "change blur",
              function() {
                s.val(s._validate(s.o.parse(s.$.val())));
              }
            );
          }
          !this.o.displayInput && this.$.hide();
          this.$c = $2(document.createElement("canvas")).attr({
            width: this.o.width,
            height: this.o.height
          });
          this.$div = $2('<div style="' + (this.o.inline ? "display:inline;" : "") + "width:" + this.o.width + "px;height:" + this.o.height + 'px;"></div>');
          this.$.wrap(this.$div).before(this.$c);
          this.$div = this.$.parent();
          if (typeof G_vmlCanvasManager !== "undefined") {
            G_vmlCanvasManager.initElement(this.$c[0]);
          }
          this.c = this.$c[0].getContext ? this.$c[0].getContext("2d") : null;
          if (!this.c) {
            throw {
              name: "CanvasNotSupportedException",
              message: "Canvas not supported. Please use excanvas on IE8.0.",
              toString: function() {
                return this.name + ": " + this.message;
              }
            };
          }
          this.scale = (window.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1);
          this.relativeWidth = this.o.width % 1 !== 0 && this.o.width.indexOf("%");
          this.relativeHeight = this.o.height % 1 !== 0 && this.o.height.indexOf("%");
          this.relative = this.relativeWidth || this.relativeHeight;
          this._carve();
          if (this.v instanceof Object) {
            this.cv = {};
            this.copy(this.v, this.cv);
          } else {
            this.cv = this.v;
          }
          this.$.on("configure", cf).parent().on("configure", cf);
          this._listen()._configure()._xy().init();
          this.isInit = true;
          this.$.val(this.o.format(this.v));
          this._draw();
          return this;
        };
        this._carve = function() {
          if (this.relative) {
            var w = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100 : this.$div.parent().width(), h = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100 : this.$div.parent().height();
            this.w = this.h = Math.min(w, h);
          } else {
            this.w = this.o.width;
            this.h = this.o.height;
          }
          this.$div.css({
            "width": this.w + "px",
            "height": this.h + "px"
          });
          this.$c.attr({
            width: this.w,
            height: this.h
          });
          if (this.scale !== 1) {
            this.$c[0].width = this.$c[0].width * this.scale;
            this.$c[0].height = this.$c[0].height * this.scale;
            this.$c.width(this.w);
            this.$c.height(this.h);
          }
          return this;
        };
        this._draw = function() {
          var d = true;
          s.g = s.c;
          s.clear();
          s.dH && (d = s.dH());
          d !== false && s.draw();
        };
        this._touch = function(e) {
          var touchMove = function(e2) {
            var v = s.xy2val(
              e2.originalEvent.touches[s.t].pageX,
              e2.originalEvent.touches[s.t].pageY
            );
            if (v == s.cv) return;
            if (s.cH && s.cH(v) === false) return;
            s.change(s._validate(v));
            s._draw();
          };
          this.t = k.c.t(e);
          touchMove(e);
          k.c.d.on("touchmove.k", touchMove).on(
            "touchend.k",
            function() {
              k.c.d.off("touchmove.k touchend.k");
              s.val(s.cv);
            }
          );
          return this;
        };
        this._mouse = function(e) {
          var mouseMove = function(e2) {
            var v = s.xy2val(e2.pageX, e2.pageY);
            if (v == s.cv) return;
            if (s.cH && s.cH(v) === false) return;
            s.change(s._validate(v));
            s._draw();
          };
          mouseMove(e);
          k.c.d.on("mousemove.k", mouseMove).on(
            // Escape key cancel current change
            "keyup.k",
            function(e2) {
              if (e2.keyCode === 27) {
                k.c.d.off("mouseup.k mousemove.k keyup.k");
                if (s.eH && s.eH() === false)
                  return;
                s.cancel();
              }
            }
          ).on(
            "mouseup.k",
            function(e2) {
              k.c.d.off("mousemove.k mouseup.k keyup.k");
              s.val(s.cv);
            }
          );
          return this;
        };
        this._xy = function() {
          var o = this.$c.offset();
          this.x = o.left;
          this.y = o.top;
          return this;
        };
        this._listen = function() {
          if (!this.o.readOnly) {
            this.$c.on(
              "mousedown",
              function(e) {
                e.preventDefault();
                s._xy()._mouse(e);
              }
            ).on(
              "touchstart",
              function(e) {
                e.preventDefault();
                s._xy()._touch(e);
              }
            );
            this.listen();
          } else {
            this.$.attr("readonly", "readonly");
          }
          if (this.relative) {
            $2(window).on("resize", function() {
              s._carve().init();
              s._draw();
            });
          }
          return this;
        };
        this._configure = function() {
          if (this.o.draw) this.dH = this.o.draw;
          if (this.o.change) this.cH = this.o.change;
          if (this.o.cancel) this.eH = this.o.cancel;
          if (this.o.release) this.rH = this.o.release;
          if (this.o.displayPrevious) {
            this.pColor = this.h2rgba(this.o.fgColor, "0.4");
            this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
          } else {
            this.fgColor = this.o.fgColor;
          }
          return this;
        };
        this._clear = function() {
          this.$c[0].width = this.$c[0].width;
        };
        this._validate = function(v) {
          var val = ~~((v < 0 ? -0.5 : 0.5) + v / this.o.step) * this.o.step;
          return Math.round(val * 100) / 100;
        };
        this.listen = function() {
        };
        this.extend = function() {
        };
        this.init = function() {
        };
        this.change = function(v) {
        };
        this.val = function(v) {
        };
        this.xy2val = function(x, y) {
        };
        this.draw = function() {
        };
        this.clear = function() {
          this._clear();
        };
        this.h2rgba = function(h, a) {
          var rgb;
          h = h.substring(1, 7);
          rgb = [
            parseInt(h.substring(0, 2), 16),
            parseInt(h.substring(2, 4), 16),
            parseInt(h.substring(4, 6), 16)
          ];
          return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";
        };
        this.copy = function(f, t) {
          for (var i in f) {
            t[i] = f[i];
          }
        };
      };
      k.Dial = function() {
        k.o.call(this);
        this.startAngle = null;
        this.xy = null;
        this.radius = null;
        this.lineWidth = null;
        this.cursorExt = null;
        this.w2 = null;
        this.PI2 = 2 * Math.PI;
        this.extend = function() {
          this.o = $2.extend({
            bgColor: this.$.data("bgcolor") || "#EEEEEE",
            angleOffset: this.$.data("angleoffset") || 0,
            angleArc: this.$.data("anglearc") || 360,
            inline: true
          }, this.o);
        };
        this.val = function(v, triggerRelease) {
          if (null != v) {
            v = this.o.parse(v);
            if (triggerRelease !== false && v != this.v && this.rH && this.rH(v) === false) {
              return;
            }
            this.cv = this.o.stopper ? max(min(v, this.o.max), this.o.min) : v;
            this.v = this.cv;
            this.$.val(this.o.format(this.v));
            this._draw();
          } else {
            return this.v;
          }
        };
        this.xy2val = function(x, y) {
          var a, ret;
          a = Math.atan2(
            x - (this.x + this.w2),
            -(y - this.y - this.w2)
          ) - this.angleOffset;
          if (this.o.flip) {
            a = this.angleArc - a - this.PI2;
          }
          if (this.angleArc != this.PI2 && a < 0 && a > -0.5) {
            a = 0;
          } else if (a < 0) {
            a += this.PI2;
          }
          ret = a * (this.o.max - this.o.min) / this.angleArc + this.o.min;
          this.o.stopper && (ret = max(min(ret, this.o.max), this.o.min));
          return ret;
        };
        this.listen = function() {
          var s = this, mwTimerStop, mwTimerRelease, mw = function(e) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            var ori = e.originalEvent, deltaX = ori.detail || ori.wheelDeltaX, deltaY = ori.detail || ori.wheelDeltaY, v = s._validate(s.o.parse(s.$.val())) + (deltaX > 0 || deltaY > 0 ? s.o.step : deltaX < 0 || deltaY < 0 ? -s.o.step : 0);
            v = max(min(v, s.o.max), s.o.min);
            s.val(v, false);
            if (s.rH) {
              clearTimeout(mwTimerStop);
              mwTimerStop = setTimeout(function() {
                s.rH(v);
                mwTimerStop = null;
              }, 100);
              if (!mwTimerRelease) {
                mwTimerRelease = setTimeout(function() {
                  if (mwTimerStop)
                    s.rH(v);
                  mwTimerRelease = null;
                }, 200);
              }
            }
          }, kval, to, m = 1, kv = {
            37: -s.o.step,
            38: s.o.step,
            39: s.o.step,
            40: -s.o.step
          };
          this.$.on(
            "keydown",
            function(e) {
              var kc = e.keyCode;
              if (kc >= 96 && kc <= 105) {
                kc = e.keyCode = kc - 48;
              }
              kval = parseInt(String.fromCharCode(kc));
              if (isNaN(kval)) {
                kc !== 13 && kc !== 8 && kc !== 9 && kc !== 189 && (kc !== 190 || s.$.val().match(/\./)) && e.preventDefault();
                if ($2.inArray(kc, [37, 38, 39, 40]) > -1) {
                  e.preventDefault();
                  var v = s.o.parse(s.$.val()) + kv[kc] * m;
                  s.o.stopper && (v = max(min(v, s.o.max), s.o.min));
                  s.change(s._validate(v));
                  s._draw();
                  to = window.setTimeout(function() {
                    m *= 2;
                  }, 30);
                }
              }
            }
          ).on(
            "keyup",
            function(e) {
              if (isNaN(kval)) {
                if (to) {
                  window.clearTimeout(to);
                  to = null;
                  m = 1;
                  s.val(s.$.val());
                }
              } else {
                s.$.val() > s.o.max && s.$.val(s.o.max) || s.$.val() < s.o.min && s.$.val(s.o.min);
              }
            }
          );
          this.$c.on("mousewheel DOMMouseScroll", mw);
          this.$.on("mousewheel DOMMouseScroll", mw);
        };
        this.init = function() {
          if (this.v < this.o.min || this.v > this.o.max) {
            this.v = this.o.min;
          }
          this.$.val(this.v);
          this.w2 = this.w / 2;
          this.cursorExt = this.o.cursor / 100;
          this.xy = this.w2 * this.scale;
          this.lineWidth = this.xy * this.o.thickness;
          this.lineCap = this.o.lineCap;
          this.radius = this.xy - this.lineWidth / 2;
          this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);
          this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);
          this.angleOffset = this.o.angleOffset * Math.PI / 180;
          this.angleArc = this.o.angleArc * Math.PI / 180;
          this.startAngle = 1.5 * Math.PI + this.angleOffset;
          this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
          var s = max(
            String(Math.abs(this.o.max)).length,
            String(Math.abs(this.o.min)).length,
            2
          ) + 2;
          this.o.displayInput && this.i.css({
            "width": (this.w / 2 + 4 >> 0) + "px",
            "height": (this.w / 3 >> 0) + "px",
            "position": "absolute",
            "vertical-align": "middle",
            "margin-top": (this.w / 3 >> 0) + "px",
            "margin-left": "-" + (this.w * 3 / 4 + 2 >> 0) + "px",
            "border": 0,
            "background": "none",
            "font": this.o.fontWeight + " " + (this.w / s >> 0) + "px " + this.o.font,
            "text-align": "center",
            "color": this.o.inputColor || this.o.fgColor,
            "padding": "0px",
            "-webkit-appearance": "none"
          }) || this.i.css({
            "width": "0px",
            "visibility": "hidden"
          });
        };
        this.change = function(v) {
          this.cv = v;
          this.$.val(this.o.format(v));
        };
        this.angle = function(v) {
          return (v - this.o.min) * this.angleArc / (this.o.max - this.o.min);
        };
        this.arc = function(v) {
          var sa, ea;
          v = this.angle(v);
          if (this.o.flip) {
            sa = this.endAngle + 1e-5;
            ea = sa - v - 1e-5;
          } else {
            sa = this.startAngle - 1e-5;
            ea = sa + v + 1e-5;
          }
          this.o.cursor && (sa = ea - this.cursorExt) && (ea = ea + this.cursorExt);
          return {
            s: sa,
            e: ea,
            d: this.o.flip && !this.o.cursor
          };
        };
        this.draw = function() {
          var c = this.g, a = this.arc(this.cv), pa, r = 1;
          c.lineWidth = this.lineWidth;
          c.lineCap = this.lineCap;
          if (this.o.bgColor !== "none") {
            c.beginPath();
            c.strokeStyle = this.o.bgColor;
            c.arc(this.xy, this.xy, this.radius, this.endAngle - 1e-5, this.startAngle + 1e-5, true);
            c.stroke();
          }
          if (this.o.displayPrevious) {
            pa = this.arc(this.v);
            c.beginPath();
            c.strokeStyle = this.pColor;
            c.arc(this.xy, this.xy, this.radius, pa.s, pa.e, pa.d);
            c.stroke();
            r = this.cv == this.v;
          }
          c.beginPath();
          c.strokeStyle = r ? this.o.fgColor : this.fgColor;
          c.arc(this.xy, this.xy, this.radius, a.s, a.e, a.d);
          c.stroke();
        };
        this.cancel = function() {
          this.val(this.v);
        };
      };
      $2.fn.dial = $2.fn.knob = function(o) {
        return this.each(
          function() {
            var d = new k.Dial();
            d.o = o;
            d.$ = $2(this);
            d.run();
          }
        ).parent();
      };
    });
  }
});

// src/knob/2-knob.js
var import_jquery_knob = __toESM(require_jquery_knob());
var ColorThemes = {
  /**
   * The default afterdark theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  afterdark: {
    fgColor: "#8C9B8C",
    bgColor: "#535353"
  },
  /**
   * The default afternoon theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  afternoon: {
    fgColor: "#5E61B0",
    bgColor: "#EBF8FF"
  },
  /**
   * The default afterwork theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  afterwork: {
    fgColor: "#000000",
    bgColor: "#EBEBEB"
  },
  /**
   * The default aristo theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  aristo: {
    fgColor: "#000000",
    bgColor: "#E3E3E3"
  },
  /**
   * The default blitzer theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  blitzer: {
    fgColor: "#CC0505",
    bgColor: "#F1F1F1"
  },
  /**
   * The default bluesky theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  bluesky: {
    fgColor: "black",
    bgColor: "#E5EEFA"
  },
  /**
   * The default black tie theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  "black-tie": {
    fgColor: "black",
    bgColor: "white"
  },
  /**
   * The default bootstrap theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  bootstrap: {
    fgColor: "#000000",
    bgColor: "#EBEBEB"
  },
  /**
   * The default casablanca theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  casablanca: {
    fgColor: "#030303",
    bgColor: "#F9F8F5"
  },
  /**
   * The default cruze theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  cruze: {
    fgColor: "#C1C1C1",
    bgColor: "#3D3D3D"
  },
  /**
   * The default cupertino theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  cupertino: {
    fgColor: "#2A7BAB",
    bgColor: "#D8EBF9"
  },
  /**
   * The default dark hive theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  "dark-hive": {
    fgColor: "white",
    bgColor: "#5F5F5F"
  },
  /**
   * The default delta theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  delta: {
    fgColor: "#1B1D1F",
    bgColor: "#F9F9FC"
  },
  /**
   * The default dot luv theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  "dot-luv": {
    fgColor: "white",
    bgColor: "#083C6D"
  },
  /**
   * The default eggplant theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  eggplant: {
    fgColor: "white",
    bgColor: "#DFDCE1"
  },
  /**
   * The default excite bike theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  "excite-bike": {
    fgColor: "#E69700",
    bgColor: "#1E88E6"
  },
  /**
   * The default flick theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  flick: {
    fgColor: "#1980EC",
    bgColor: "#E0E0E0"
  },
  /**
   * The default glass x theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  "glass-x": {
    fgColor: "black",
    bgColor: "#D7E1E8"
  },
  /**
   * The default home theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  home: {
    fgColor: "#424548",
    bgColor: "#747C89"
  },
  /**
   * The default hot sneaks theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  "hot-sneaks": {
    fgColor: "#D2D660",
    bgColor: "#35414F"
  },
  /**
   * The default humanity theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  humanity: {
    fgColor: "white",
    bgColor: "#CB842F"
  },
  /**
   * The default le frog theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  "le-frog": {
    fgColor: "white",
    bgColor: "#5BA920"
  },
  /**
   * The default midnight theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  midnight: {
    fgColor: "white",
    bgColor: "#363641"
  },
  /**
   * The default mint choc theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  "mint-choc": {
    fgColor: "#E3DDC9",
    bgColor: "#59493D"
  },
  /**
   * The default overcast theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  overcast: {
    fgColor: "#3383BB",
    bgColor: "#F2F2F2"
  },
  /**
   * The default pepper grinder theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  "pepper-grinder": {
    fgColor: "#654B24",
    bgColor: "#F6F5F4"
  },
  /**
   * The default redmond theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  redmond: {
    fgColor: "#2E6E9E",
    bgColor: "#EAF4FD"
  },
  /**
   * The default rocket theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  rocket: {
    fgColor: "white",
    bgColor: "#292627"
  },
  /**
   * The default sam theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  sam: {
    fgColor: "#000000",
    bgColor: "#E3E3E3"
  },
  /**
   * The default smoothness theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  smoothness: {
    fgColor: "#000000",
    bgColor: "#E3E3E3"
  },
  /**
   * The default south street theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  "south-street": {
    fgColor: "white",
    bgColor: "#4CA109"
  },
  /**
   * The default start theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  start: {
    fgColor: "#222222",
    bgColor: "#2E90BD"
  },
  /**
   * The default sunny theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  sunny: {
    fgColor: "#9A9384",
    bgColor: "#FCDA66"
  },
  /**
   * The default swanky purse theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  "swanky-purse": {
    fgColor: "#EFEC9F",
    bgColor: "#261803"
  },
  /**
   * The default trontastic theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  trontastic: {
    fgColor: "white",
    bgColor: "#BEE590"
  },
  /**
   * The default ui darkness theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  "ui-darkness": {
    fgColor: "white",
    bgColor: "#585858"
  },
  /**
   * The default ui lightness theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  "ui-lightness": {
    fgColor: "white",
    bgColor: "#F7B13D"
  },
  /**
   * The default vader theme.
   * @type {PrimeFaces.widget.Knob.ColorTheme}
   */
  vader: {
    fgColor: "white",
    bgColor: "#AEAEAE"
  }
};
var _Knob = class _Knob extends BaseWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    this.colorTheme = this.cfg.colorTheme;
    this.input = $(this.jqId + "_hidden");
    this.min = parseInt(this.jq.data("min"), 10);
    this.max = parseInt(this.jq.data("max"), 10);
    this.step = parseInt(this.jq.data("step"), 10);
    this.createKnob();
  }
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  refresh(cfg) {
    if (this.knob) {
      this.knob.children("canvas").remove();
      this.input.remove();
      this.knob.children("input").unwrap();
    }
    this.init(cfg);
  }
  /**
   * Creates the knob widget and sets up all event listeners.
   * @private
   */
  createKnob() {
    var $this = this;
    this.themeObject = _Knob.colorThemes[this.colorTheme || "aristo"];
    this.jq.data("fgcolor", this.cfg.fgColor || this.themeObject.fgColor);
    this.jq.data("bgcolor", this.cfg.bgColor || this.themeObject.bgColor);
    this.jq.css({
      "pointer-events": "none",
      "-moz-user-select": "none"
    });
    this.knob = this.jq.knob({
      release: function(value) {
        $this.input.val(value);
        if ($this.cfg.onchange) {
          $this.cfg.onchange(value);
        }
        if ($this.hasBehavior("change")) {
          var ext = {
            params: [
              { name: $this.id + "_hidden", value }
            ]
          };
          $this.callBehavior("change", ext);
        }
      },
      format: function(value) {
        return $this.cfg.labelTemplate.replace("{value}", value);
      },
      draw: function() {
        if (this.$.data("skin") == "tron") {
          this.cursorExt = 0.3;
          var a = this.arc(this.cv), pa, r = 1;
          this.g.lineWidth = this.lineWidth;
          if (this.o.displayPrevious) {
            pa = this.arc(this.v);
            this.g.beginPath();
            this.g.strokeStyle = this.pColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
            this.g.stroke();
          }
          this.g.beginPath();
          this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
          this.g.stroke();
          this.g.lineWidth = 2;
          this.g.beginPath();
          this.g.strokeStyle = this.o.fgColor;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
          this.g.stroke();
          return false;
        }
      }
    });
    this.knob.addClass(this.cfg.styleClass);
  }
  /**
   * Sets the value of this knob widget to the given value.
   * @param {number} value Value to set on this knob.
   */
  setValue(value) {
    this.input.val(value);
    this.jq.val(value).trigger("change");
  }
  /**
   * Retrieves the current value of this knob, as a number.
   * @return {number} The current numerical value of this knob.
   */
  getValue() {
    return parseInt(this.jq.val());
  }
  /**
   * Increments the value of this knob by the current step size.
   */
  increment() {
    var value = this.getValue() + this.step;
    value = value <= this.max ? value : this.max;
    this.setValue(value);
  }
  /**
   * Decrements the value of this knob by the current step size.
   */
  decrement() {
    var value = this.getValue() - this.step;
    value = value >= this.min ? value : this.min;
    this.setValue(value);
  }
  /**
   * Disables this input so that the user cannot enter a value anymore.
   */
  disable() {
    PrimeFaces.utils.disableInputWidget(this.jq, this.input);
  }
  /**
   * Enables this input so that the user can enter a value.
   */
  enable() {
    PrimeFaces.utils.enableInputWidget(this.jq, this.input);
  }
};
/**
 * List of available builtin color themes for the {@link Knob} widget.
 */
__publicField(_Knob, "colorThemes", ColorThemes);
var Knob = _Knob;
export {
  Knob
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2tub2IvMS1qcXVlcnkua25vYi5janMiLCAiLi4vc3JjL2tub2IvMi1rbm9iLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKmpRdWVyeSBLbm9iKi9cbi8qKlxuICogRG93bndhcmQgY29tcGF0aWJsZSwgdG91Y2hhYmxlIGRpYWxcbiAqXG4gKiBWZXJzaW9uOiAxLjIuMTNcbiAqIFJlcXVpcmVzOiBqUXVlcnkgdjEuNytcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgQW50aG9ueSBUZXJyaWVuXG4gKiBVbmRlciBNSVQgTGljZW5zZSAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4gKlxuICogVGhhbmtzIHRvIHZvciwgZXNraW1vYmxvb2QsIHNwaWZmaXN0YW4sIEZhYnJpemlvQ1xuICovXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIC8vIENvbW1vbkpTXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICB9XG59KGZ1bmN0aW9uICgkKSB7XG5cbiAgICAvKipcbiAgICAgKiBLb250cm9sIGxpYnJhcnlcbiAgICAgKi9cbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIERlZmluaXRpb24gb2YgZ2xvYmFscyBhbmQgY29yZVxuICAgICAqL1xuICAgIHZhciBrID0ge30sIC8vIGtvbnRyb2xcbiAgICAgICAgbWF4ID0gTWF0aC5tYXgsXG4gICAgICAgIG1pbiA9IE1hdGgubWluO1xuXG4gICAgay5jID0ge307XG4gICAgay5jLmQgPSAkKGRvY3VtZW50KTtcbiAgICBrLmMudCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggLSAxO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBLb250cm9sIE9iamVjdFxuICAgICAqXG4gICAgICogRGVmaW5pdGlvbiBvZiBhbiBhYnN0cmFjdCBVSSBjb250cm9sXG4gICAgICpcbiAgICAgKiBFYWNoIGNvbmNyZXRlIGNvbXBvbmVudCBtdXN0IGNhbGwgdGhpcyBvbmUuXG4gICAgICogPGNvZGU+XG4gICAgICogay5vLmNhbGwodGhpcyk7XG4gICAgICogPC9jb2RlPlxuICAgICAqL1xuICAgIGsubyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHMgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMubyA9IG51bGw7IC8vIGFycmF5IG9mIG9wdGlvbnNcbiAgICAgICAgdGhpcy4kID0gbnVsbDsgLy8galF1ZXJ5IHdyYXBwZWQgZWxlbWVudFxuICAgICAgICB0aGlzLmkgPSBudWxsOyAvLyBtaXhlZCBIVE1MSW5wdXRFbGVtZW50IG9yIGFycmF5IG9mIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgdGhpcy5nID0gbnVsbDsgLy8gZGVwcmVjYXRlZCAyRCBncmFwaGljcyBjb250ZXh0IGZvciAncHJlLXJlbmRlcmluZydcbiAgICAgICAgdGhpcy52ID0gbnVsbDsgLy8gdmFsdWUgOyBtaXhlZCBhcnJheSBvciBpbnRlZ2VyXG4gICAgICAgIHRoaXMuY3YgPSBudWxsOyAvLyBjaGFuZ2UgdmFsdWUgOyBub3QgY29tbWl0ZWQgdmFsdWVcbiAgICAgICAgdGhpcy54ID0gMDsgLy8gY2FudmFzIHggcG9zaXRpb25cbiAgICAgICAgdGhpcy55ID0gMDsgLy8gY2FudmFzIHkgcG9zaXRpb25cbiAgICAgICAgdGhpcy53ID0gMDsgLy8gY2FudmFzIHdpZHRoXG4gICAgICAgIHRoaXMuaCA9IDA7IC8vIGNhbnZhcyBoZWlnaHRcbiAgICAgICAgdGhpcy4kYyA9IG51bGw7IC8vIGpRdWVyeSBjYW52YXMgZWxlbWVudFxuICAgICAgICB0aGlzLmMgPSBudWxsOyAvLyByZW5kZXJlZCBjYW52YXMgY29udGV4dFxuICAgICAgICB0aGlzLnQgPSAwOyAvLyB0b3VjaGVzIGluZGV4XG4gICAgICAgIHRoaXMuaXNJbml0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmdDb2xvciA9IG51bGw7IC8vIG1haW4gY29sb3JcbiAgICAgICAgdGhpcy5wQ29sb3IgPSBudWxsOyAvLyBwcmV2aW91cyBjb2xvclxuICAgICAgICB0aGlzLmRIID0gbnVsbDsgLy8gZHJhdyBob29rXG4gICAgICAgIHRoaXMuY0ggPSBudWxsOyAvLyBjaGFuZ2UgaG9va1xuICAgICAgICB0aGlzLmVIID0gbnVsbDsgLy8gY2FuY2VsIGhvb2tcbiAgICAgICAgdGhpcy5ySCA9IG51bGw7IC8vIHJlbGVhc2UgaG9va1xuICAgICAgICB0aGlzLnNjYWxlID0gMTsgLy8gc2NhbGUgZmFjdG9yXG4gICAgICAgIHRoaXMucmVsYXRpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWxhdGl2ZVdpZHRoID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVsYXRpdmVIZWlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kZGl2ID0gbnVsbDsgLy8gY29tcG9uZW50IGRpdlxuXG4gICAgICAgIHRoaXMucnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNmID0gZnVuY3Rpb24gKGUsIGNvbmYpIHtcbiAgICAgICAgICAgICAgICB2YXIgaztcbiAgICAgICAgICAgICAgICBmb3IgKGsgaW4gY29uZikge1xuICAgICAgICAgICAgICAgICAgICBzLm9ba10gPSBjb25mW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzLl9jYXJ2ZSgpLmluaXQoKTtcbiAgICAgICAgICAgICAgICBzLl9jb25maWd1cmUoKVxuICAgICAgICAgICAgICAgICAuX2RyYXcoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiQuZGF0YSgna29udHJvbGVkJykpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuJC5kYXRhKCdrb250cm9sZWQnLCB0cnVlKTtcblxuICAgICAgICAgICAgdGhpcy5leHRlbmQoKTtcbiAgICAgICAgICAgIHRoaXMubyA9ICQuZXh0ZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgIG1pbjogdGhpcy4kLmRhdGEoJ21pbicpICE9PSB1bmRlZmluZWQgPyB0aGlzLiQuZGF0YSgnbWluJykgOiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IHRoaXMuJC5kYXRhKCdtYXgnKSAhPT0gdW5kZWZpbmVkID8gdGhpcy4kLmRhdGEoJ21heCcpIDogMTAwLFxuICAgICAgICAgICAgICAgICAgICBzdG9wcGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICByZWFkT25seTogdGhpcy4kLmRhdGEoJ3JlYWRvbmx5JykgfHwgKHRoaXMuJC5hdHRyKCdyZWFkb25seScpID09PSAncmVhZG9ubHknKSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBVSVxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHRoaXMuJC5kYXRhKCdjdXJzb3InKSA9PT0gdHJ1ZSAmJiAzMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHRoaXMuJC5kYXRhKCdjdXJzb3InKSB8fCAwLFxuICAgICAgICAgICAgICAgICAgICB0aGlja25lc3M6IHRoaXMuJC5kYXRhKCd0aGlja25lc3MnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIE1hdGgubWF4KE1hdGgubWluKHRoaXMuJC5kYXRhKCd0aGlja25lc3MnKSwgMSksIDAuMDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgMC4zNSxcbiAgICAgICAgICAgICAgICAgICAgbGluZUNhcDogdGhpcy4kLmRhdGEoJ2xpbmVjYXAnKSB8fCAnYnV0dCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLiQuZGF0YSgnd2lkdGgnKSB8fCAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy4kLmRhdGEoJ2hlaWdodCcpIHx8IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUlucHV0OiB0aGlzLiQuZGF0YSgnZGlzcGxheWlucHV0JykgPT0gbnVsbCB8fCB0aGlzLiQuZGF0YSgnZGlzcGxheWlucHV0JyksXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQcmV2aW91czogdGhpcy4kLmRhdGEoJ2Rpc3BsYXlwcmV2aW91cycpLFxuICAgICAgICAgICAgICAgICAgICBmZ0NvbG9yOiB0aGlzLiQuZGF0YSgnZmdjb2xvcicpIHx8ICcjODdDRUVCJyxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDb2xvcjogdGhpcy4kLmRhdGEoJ2lucHV0Y29sb3InKSxcbiAgICAgICAgICAgICAgICAgICAgZm9udDogdGhpcy4kLmRhdGEoJ2ZvbnQnKSB8fCAnQXJpYWwnLFxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiB0aGlzLiQuZGF0YSgnZm9udC13ZWlnaHQnKSB8fCAnYm9sZCcsXG4gICAgICAgICAgICAgICAgICAgIGlubGluZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHRoaXMuJC5kYXRhKCdzdGVwJykgfHwgMSxcbiAgICAgICAgICAgICAgICAgICAgcm90YXRpb246IHRoaXMuJC5kYXRhKCdyb3RhdGlvbicpLFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhvb2tzXG4gICAgICAgICAgICAgICAgICAgIGRyYXc6IG51bGwsIC8vIGZ1bmN0aW9uICgpIHt9XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogbnVsbCwgLy8gZnVuY3Rpb24gKHZhbHVlKSB7fVxuICAgICAgICAgICAgICAgICAgICBjYW5jZWw6IG51bGwsIC8vIGZ1bmN0aW9uICgpIHt9XG4gICAgICAgICAgICAgICAgICAgIHJlbGVhc2U6IG51bGwsIC8vIGZ1bmN0aW9uICh2YWx1ZSkge31cblxuICAgICAgICAgICAgICAgICAgICAvLyBPdXRwdXQgZm9ybWF0dGluZywgYWxsb3dzIHRvIGFkZCB1bml0OiAlLCBtcyAuLi5cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2U6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh2KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRoaXMub1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gZmluYWxpemUgb3B0aW9uc1xuICAgICAgICAgICAgdGhpcy5vLmZsaXAgPSB0aGlzLm8ucm90YXRpb24gPT09ICdhbnRpY2xvY2t3aXNlJyB8fCB0aGlzLm8ucm90YXRpb24gPT09ICdhY3cnO1xuICAgICAgICAgICAgaWYgKCF0aGlzLm8uaW5wdXRDb2xvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuby5pbnB1dENvbG9yID0gdGhpcy5vLmZnQ29sb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJvdXRpbmcgdmFsdWVcbiAgICAgICAgICAgIGlmICh0aGlzLiQuaXMoJ2ZpZWxkc2V0JykpIHtcblxuICAgICAgICAgICAgICAgIC8vIGZpZWxkc2V0ID0gYXJyYXkgb2YgaW50ZWdlclxuICAgICAgICAgICAgICAgIHRoaXMudiA9IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMuaSA9IHRoaXMuJC5maW5kKCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuaS5lYWNoKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcy5pW2tdID0gJHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHMudltrXSA9IHMuby5wYXJzZSgkdGhpcy52YWwoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJHRoaXMub24oXG4gICAgICAgICAgICAgICAgICAgICAgICAnY2hhbmdlIGJsdXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxba10gPSAkdGhpcy52YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnZhbChzLl92YWxpZGF0ZSh2YWwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLiQuZmluZCgnbGVnZW5kJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgLy8gaW5wdXQgPSBpbnRlZ2VyXG4gICAgICAgICAgICAgICAgdGhpcy5pID0gdGhpcy4kO1xuICAgICAgICAgICAgICAgIHRoaXMudiA9IHRoaXMuby5wYXJzZSh0aGlzLiQudmFsKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMudiA9PT0gJycgJiYgKHRoaXMudiA9IHRoaXMuby5taW4pO1xuICAgICAgICAgICAgICAgIHRoaXMuJC5vbihcbiAgICAgICAgICAgICAgICAgICAgJ2NoYW5nZSBibHVyJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcy52YWwocy5fdmFsaWRhdGUocy5vLnBhcnNlKHMuJC52YWwoKSkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIXRoaXMuby5kaXNwbGF5SW5wdXQgJiYgdGhpcy4kLmhpZGUoKTtcblxuICAgICAgICAgICAgLy8gYWRkcyBuZWVkZWQgRE9NIGVsZW1lbnRzIChjYW52YXMsIGRpdilcbiAgICAgICAgICAgIHRoaXMuJGMgPSAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpKS5hdHRyKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5vLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5vLmhlaWdodFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHdyYXBzIGFsbCBlbGVtZW50cyBpbiBhIGRpdlxuICAgICAgICAgICAgLy8gYWRkIHRvIERPTSBiZWZvcmUgQ2FudmFzIGluaXQgaXMgdHJpZ2dlcmVkXG4gICAgICAgICAgICB0aGlzLiRkaXYgPSAkKCc8ZGl2IHN0eWxlPVwiJ1xuICAgICAgICAgICAgICAgICsgKHRoaXMuby5pbmxpbmUgPyAnZGlzcGxheTppbmxpbmU7JyA6ICcnKVxuICAgICAgICAgICAgICAgICsgJ3dpZHRoOicgKyB0aGlzLm8ud2lkdGggKyAncHg7aGVpZ2h0OicgKyB0aGlzLm8uaGVpZ2h0ICsgJ3B4OydcbiAgICAgICAgICAgICAgICArICdcIj48L2Rpdj4nKTtcblxuICAgICAgICAgICAgdGhpcy4kLndyYXAodGhpcy4kZGl2KS5iZWZvcmUodGhpcy4kYyk7XG4gICAgICAgICAgICB0aGlzLiRkaXYgPSB0aGlzLiQucGFyZW50KCk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgR192bWxDYW52YXNNYW5hZ2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIEdfdm1sQ2FudmFzTWFuYWdlci5pbml0RWxlbWVudCh0aGlzLiRjWzBdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jID0gdGhpcy4kY1swXS5nZXRDb250ZXh0ID8gdGhpcy4kY1swXS5nZXRDb250ZXh0KCcyZCcpIDogbnVsbDtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICAgICAgICBcIkNhbnZhc05vdFN1cHBvcnRlZEV4Y2VwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAgICAgXCJDYW52YXMgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHVzZSBleGNhbnZhcyBvbiBJRTguMC5cIixcbiAgICAgICAgICAgICAgICAgICAgdG9TdHJpbmc6ICAgIGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubmFtZSArIFwiOiBcIiArIHRoaXMubWVzc2FnZX1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGhkcGkgc3VwcG9ydFxuICAgICAgICAgICAgdGhpcy5zY2FsZSA9ICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSAvIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmMud2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYy5tb3pCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jLm1zQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYy5vQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYy5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBkZXRlY3RzIHJlbGF0aXZlIHdpZHRoIC8gaGVpZ2h0XG4gICAgICAgICAgICB0aGlzLnJlbGF0aXZlV2lkdGggPSAgdGhpcy5vLndpZHRoICUgMSAhPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuby53aWR0aC5pbmRleE9mKCclJyk7XG4gICAgICAgICAgICB0aGlzLnJlbGF0aXZlSGVpZ2h0ID0gdGhpcy5vLmhlaWdodCAlIDEgIT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLm8uaGVpZ2h0LmluZGV4T2YoJyUnKTtcbiAgICAgICAgICAgIHRoaXMucmVsYXRpdmUgPSB0aGlzLnJlbGF0aXZlV2lkdGggfHwgdGhpcy5yZWxhdGl2ZUhlaWdodDtcblxuICAgICAgICAgICAgLy8gY29tcHV0ZXMgc2l6ZSBhbmQgY2FydmVzIHRoZSBjb21wb25lbnRcbiAgICAgICAgICAgIHRoaXMuX2NhcnZlKCk7XG5cbiAgICAgICAgICAgIC8vIHByZXBhcmVzIHByb3BzIGZvciB0cmFuc2FjdGlvblxuICAgICAgICAgICAgaWYgKHRoaXMudiBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3YgPSB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcHkodGhpcy52LCB0aGlzLmN2KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdiA9IHRoaXMudjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYmluZHMgY29uZmlndXJlIGV2ZW50XG4gICAgICAgICAgICB0aGlzLiRcbiAgICAgICAgICAgICAgICAub24oXCJjb25maWd1cmVcIiwgY2YpXG4gICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgLm9uKFwiY29uZmlndXJlXCIsIGNmKTtcblxuICAgICAgICAgICAgLy8gZmluYWxpemUgaW5pdFxuICAgICAgICAgICAgdGhpcy5fbGlzdGVuKClcbiAgICAgICAgICAgICAgICAuX2NvbmZpZ3VyZSgpXG4gICAgICAgICAgICAgICAgLl94eSgpXG4gICAgICAgICAgICAgICAgLmluaXQoKTtcblxuICAgICAgICAgICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLiQudmFsKHRoaXMuby5mb3JtYXQodGhpcy52KSk7XG4gICAgICAgICAgICB0aGlzLl9kcmF3KCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2NhcnZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWxhdGl2ZSkge1xuICAgICAgICAgICAgICAgIHZhciB3ID0gdGhpcy5yZWxhdGl2ZVdpZHRoID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGRpdi5wYXJlbnQoKS53aWR0aCgpICpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHRoaXMuby53aWR0aCkgLyAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy4kZGl2LnBhcmVudCgpLndpZHRoKCksXG4gICAgICAgICAgICAgICAgICAgIGggPSB0aGlzLnJlbGF0aXZlSGVpZ2h0ID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGRpdi5wYXJlbnQoKS5oZWlnaHQoKSAqXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludCh0aGlzLm8uaGVpZ2h0KSAvIDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLiRkaXYucGFyZW50KCkuaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBhcHBseSByZWxhdGl2ZVxuICAgICAgICAgICAgICAgIHRoaXMudyA9IHRoaXMuaCA9IE1hdGgubWluKHcsIGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLncgPSB0aGlzLm8ud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5oID0gdGhpcy5vLmhlaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZmluYWxpemUgZGl2XG4gICAgICAgICAgICB0aGlzLiRkaXYuY3NzKHtcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiB0aGlzLncgKyAncHgnLFxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiB0aGlzLmggKyAncHgnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gZmluYWxpemUgY2FudmFzIHdpdGggY29tcHV0ZWQgd2lkdGhcbiAgICAgICAgICAgIHRoaXMuJGMuYXR0cih7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMudyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHNjYWxpbmdcbiAgICAgICAgICAgIGlmICh0aGlzLnNjYWxlICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY1swXS53aWR0aCA9IHRoaXMuJGNbMF0ud2lkdGggKiB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGNbMF0uaGVpZ2h0ID0gdGhpcy4kY1swXS5oZWlnaHQgKiB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGMud2lkdGgodGhpcy53KTtcbiAgICAgICAgICAgICAgICB0aGlzLiRjLmhlaWdodCh0aGlzLmgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9kcmF3ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvLyBjYW52YXMgcHJlLXJlbmRlcmluZ1xuICAgICAgICAgICAgdmFyIGQgPSB0cnVlO1xuXG4gICAgICAgICAgICBzLmcgPSBzLmM7XG5cbiAgICAgICAgICAgIHMuY2xlYXIoKTtcblxuICAgICAgICAgICAgcy5kSCAmJiAoZCA9IHMuZEgoKSk7XG5cbiAgICAgICAgICAgIGQgIT09IGZhbHNlICYmIHMuZHJhdygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3RvdWNoID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB0b3VjaE1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gcy54eTJ2YWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbcy50XS5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1tzLnRdLnBhZ2VZXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKHYgPT0gcy5jdikgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgaWYgKHMuY0ggJiYgcy5jSCh2KSA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHMuY2hhbmdlKHMuX3ZhbGlkYXRlKHYpKTtcbiAgICAgICAgICAgICAgICBzLl9kcmF3KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBnZXQgdG91Y2hlcyBpbmRleFxuICAgICAgICAgICAgdGhpcy50ID0gay5jLnQoZSk7XG5cbiAgICAgICAgICAgIC8vIEZpcnN0IHRvdWNoXG4gICAgICAgICAgICB0b3VjaE1vdmUoZSk7XG5cbiAgICAgICAgICAgIC8vIFRvdWNoIGV2ZW50cyBsaXN0ZW5lcnNcbiAgICAgICAgICAgIGsuYy5kXG4gICAgICAgICAgICAgICAgLm9uKFwidG91Y2htb3ZlLmtcIiwgdG91Y2hNb3ZlKVxuICAgICAgICAgICAgICAgIC5vbihcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3VjaGVuZC5rXCIsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGsuYy5kLm9mZigndG91Y2htb3ZlLmsgdG91Y2hlbmQuaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcy52YWwocy5jdik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9tb3VzZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgbW91c2VNb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IHMueHkydmFsKGUucGFnZVgsIGUucGFnZVkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHYgPT0gcy5jdikgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgaWYgKHMuY0ggJiYgKHMuY0godikgPT09IGZhbHNlKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgcy5jaGFuZ2Uocy5fdmFsaWRhdGUodikpO1xuICAgICAgICAgICAgICAgIHMuX2RyYXcoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIEZpcnN0IGNsaWNrXG4gICAgICAgICAgICBtb3VzZU1vdmUoZSk7XG5cbiAgICAgICAgICAgIC8vIE1vdXNlIGV2ZW50cyBsaXN0ZW5lcnNcbiAgICAgICAgICAgIGsuYy5kXG4gICAgICAgICAgICAgICAgLm9uKFwibW91c2Vtb3ZlLmtcIiwgbW91c2VNb3ZlKVxuICAgICAgICAgICAgICAgIC5vbihcbiAgICAgICAgICAgICAgICAgICAgLy8gRXNjYXBlIGtleSBjYW5jZWwgY3VycmVudCBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgXCJrZXl1cC5rXCIsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGsuYy5kLm9mZihcIm1vdXNldXAuayBtb3VzZW1vdmUuayBrZXl1cC5rXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMuZUggJiYgcy5lSCgpID09PSBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAub24oXG4gICAgICAgICAgICAgICAgICAgIFwibW91c2V1cC5rXCIsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrLmMuZC5vZmYoJ21vdXNlbW92ZS5rIG1vdXNldXAuayBrZXl1cC5rJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzLnZhbChzLmN2KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3h5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLiRjLm9mZnNldCgpO1xuICAgICAgICAgICAgdGhpcy54ID0gby5sZWZ0O1xuICAgICAgICAgICAgdGhpcy55ID0gby50b3A7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2xpc3RlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5vLnJlYWRPbmx5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY1xuICAgICAgICAgICAgICAgICAgICAub24oXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1vdXNlZG93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5feHkoKS5fbW91c2UoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgLm9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3VjaHN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLl94eSgpLl90b3VjaChlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJC5hdHRyKCdyZWFkb25seScsICdyZWFkb25seScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5yZWxhdGl2ZSkge1xuICAgICAgICAgICAgICAgICQod2luZG93KS5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5fY2FydmUoKS5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgIHMuX2RyYXcoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fY29uZmlndXJlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvLyBIb29rc1xuICAgICAgICAgICAgaWYgKHRoaXMuby5kcmF3KSB0aGlzLmRIID0gdGhpcy5vLmRyYXc7XG4gICAgICAgICAgICBpZiAodGhpcy5vLmNoYW5nZSkgdGhpcy5jSCA9IHRoaXMuby5jaGFuZ2U7XG4gICAgICAgICAgICBpZiAodGhpcy5vLmNhbmNlbCkgdGhpcy5lSCA9IHRoaXMuby5jYW5jZWw7XG4gICAgICAgICAgICBpZiAodGhpcy5vLnJlbGVhc2UpIHRoaXMuckggPSB0aGlzLm8ucmVsZWFzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuby5kaXNwbGF5UHJldmlvdXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBDb2xvciA9IHRoaXMuaDJyZ2JhKHRoaXMuby5mZ0NvbG9yLCBcIjAuNFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZnQ29sb3IgPSB0aGlzLmgycmdiYSh0aGlzLm8uZmdDb2xvciwgXCIwLjZcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZmdDb2xvciA9IHRoaXMuby5mZ0NvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGNbMF0ud2lkdGggPSB0aGlzLiRjWzBdLndpZHRoO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHZhciB2YWwgPSAofn4gKCgodiA8IDApID8gLTAuNSA6IDAuNSkgKyAodi90aGlzLm8uc3RlcCkpKSAqIHRoaXMuby5zdGVwO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsICogMTAwKSAvIDEwMDtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBYnN0cmFjdCBtZXRob2RzXG4gICAgICAgIHRoaXMubGlzdGVuID0gZnVuY3Rpb24gKCkge307IC8vIG9uIHN0YXJ0LCBvbmUgdGltZVxuICAgICAgICB0aGlzLmV4dGVuZCA9IGZ1bmN0aW9uICgpIHt9OyAvLyBlYWNoIHRpbWUgY29uZmlndXJlIHRyaWdnZXJlZFxuICAgICAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7fTsgLy8gZWFjaCB0aW1lIGNvbmZpZ3VyZSB0cmlnZ2VyZWRcbiAgICAgICAgdGhpcy5jaGFuZ2UgPSBmdW5jdGlvbiAodikge307IC8vIG9uIGNoYW5nZVxuICAgICAgICB0aGlzLnZhbCA9IGZ1bmN0aW9uICh2KSB7fTsgLy8gb24gcmVsZWFzZVxuICAgICAgICB0aGlzLnh5MnZhbCA9IGZ1bmN0aW9uICh4LCB5KSB7fTsgLy9cbiAgICAgICAgdGhpcy5kcmF3ID0gZnVuY3Rpb24gKCkge307IC8vIG9uIGNoYW5nZSAvIG9uIHJlbGVhc2VcbiAgICAgICAgdGhpcy5jbGVhciA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fY2xlYXIoKTsgfTtcblxuICAgICAgICAvLyBVdGlsc1xuICAgICAgICB0aGlzLmgycmdiYSA9IGZ1bmN0aW9uIChoLCBhKSB7XG4gICAgICAgICAgICB2YXIgcmdiO1xuICAgICAgICAgICAgaCA9IGguc3Vic3RyaW5nKDEsNyk7XG4gICAgICAgICAgICByZ2IgPSBbXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoaC5zdWJzdHJpbmcoMCwyKSwgMTYpLFxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGguc3Vic3RyaW5nKDIsNCksIDE2KSxcbiAgICAgICAgICAgICAgICBwYXJzZUludChoLnN1YnN0cmluZyg0LDYpLCAxNilcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIHJldHVybiBcInJnYmEoXCIgKyByZ2JbMF0gKyBcIixcIiArIHJnYlsxXSArIFwiLFwiICsgcmdiWzJdICsgXCIsXCIgKyBhICsgXCIpXCI7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb3B5ID0gZnVuY3Rpb24gKGYsIHQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZikge1xuICAgICAgICAgICAgICAgIHRbaV0gPSBmW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIGsuRGlhbFxuICAgICAqL1xuICAgIGsuRGlhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgay5vLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGFydEFuZ2xlID0gbnVsbDtcbiAgICAgICAgdGhpcy54eSA9IG51bGw7XG4gICAgICAgIHRoaXMucmFkaXVzID0gbnVsbDtcbiAgICAgICAgdGhpcy5saW5lV2lkdGggPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnNvckV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMudzIgPSBudWxsO1xuICAgICAgICB0aGlzLlBJMiA9IDIqTWF0aC5QSTtcblxuICAgICAgICB0aGlzLmV4dGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMubyA9ICQuZXh0ZW5kKHtcbiAgICAgICAgICAgICAgICBiZ0NvbG9yOiB0aGlzLiQuZGF0YSgnYmdjb2xvcicpIHx8ICcjRUVFRUVFJyxcbiAgICAgICAgICAgICAgICBhbmdsZU9mZnNldDogdGhpcy4kLmRhdGEoJ2FuZ2xlb2Zmc2V0JykgfHwgMCxcbiAgICAgICAgICAgICAgICBhbmdsZUFyYzogdGhpcy4kLmRhdGEoJ2FuZ2xlYXJjJykgfHwgMzYwLFxuICAgICAgICAgICAgICAgIGlubGluZTogdHJ1ZVxuICAgICAgICAgICAgfSwgdGhpcy5vKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnZhbCA9IGZ1bmN0aW9uICh2LCB0cmlnZ2VyUmVsZWFzZSkge1xuICAgICAgICAgICAgaWYgKG51bGwgIT0gdikge1xuXG4gICAgICAgICAgICAgICAgLy8gcmV2ZXJzZSBmb3JtYXRcbiAgICAgICAgICAgICAgICB2ID0gdGhpcy5vLnBhcnNlKHYpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRyaWdnZXJSZWxlYXNlICE9PSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAmJiB2ICE9IHRoaXMudlxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnJIXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuckgodikgPT09IGZhbHNlKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jdiA9IHRoaXMuby5zdG9wcGVyID8gbWF4KG1pbih2LCB0aGlzLm8ubWF4KSwgdGhpcy5vLm1pbikgOiB2O1xuICAgICAgICAgICAgICAgIHRoaXMudiA9IHRoaXMuY3Y7XG4gICAgICAgICAgICAgICAgdGhpcy4kLnZhbCh0aGlzLm8uZm9ybWF0KHRoaXMudikpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYXcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnh5MnZhbCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgICAgICB2YXIgYSwgcmV0O1xuXG4gICAgICAgICAgICBhID0gTWF0aC5hdGFuMihcbiAgICAgICAgICAgICAgICAgICAgICAgIHggLSAodGhpcy54ICsgdGhpcy53MiksXG4gICAgICAgICAgICAgICAgICAgICAgICAtICh5IC0gdGhpcy55IC0gdGhpcy53MilcbiAgICAgICAgICAgICAgICAgICAgKSAtIHRoaXMuYW5nbGVPZmZzZXQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm8uZmxpcCkge1xuICAgICAgICAgICAgICAgIGEgPSB0aGlzLmFuZ2xlQXJjIC0gYSAtIHRoaXMuUEkyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5hbmdsZUFyYyAhPSB0aGlzLlBJMiAmJiAoYSA8IDApICYmIChhID4gLTAuNSkpIHtcblxuICAgICAgICAgICAgICAgIC8vIGlmIGlzc2V0IGFuZ2xlQXJjIG9wdGlvbiwgc2V0IHRvIG1pbiBpZiAuNSB1bmRlciBtaW5cbiAgICAgICAgICAgICAgICBhID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYSA8IDApIHtcbiAgICAgICAgICAgICAgICBhICs9IHRoaXMuUEkyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXQgPSAoYSAqICh0aGlzLm8ubWF4IC0gdGhpcy5vLm1pbikgLyB0aGlzLmFuZ2xlQXJjKSArIHRoaXMuby5taW47XG5cbiAgICAgICAgICAgIHRoaXMuby5zdG9wcGVyICYmIChyZXQgPSBtYXgobWluKHJldCwgdGhpcy5vLm1heCksIHRoaXMuby5taW4pKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmxpc3RlbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgLy8gYmluZCBNb3VzZVdoZWVsXG4gICAgICAgICAgICB2YXIgcyA9IHRoaXMsIG13VGltZXJTdG9wLFxuICAgICAgICAgICAgICAgIG13VGltZXJSZWxlYXNlLFxuICAgICAgICAgICAgICAgIG13ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJpbWVGYWNlcyAjNDA5OFxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcmkgPSBlLm9yaWdpbmFsRXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YVggPSBvcmkuZGV0YWlsIHx8IG9yaS53aGVlbERlbHRhWCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhWSA9IG9yaS5kZXRhaWwgfHwgb3JpLndoZWVsRGVsdGFZLFxuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHMuX3ZhbGlkYXRlKHMuby5wYXJzZShzLiQudmFsKCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YVggPiAwIHx8IGRlbHRhWSA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzLm8uc3RlcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRlbHRhWCA8IDAgfHwgZGVsdGFZIDwgMCA/IC1zLm8uc3RlcCA6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgdiA9IG1heChtaW4odiwgcy5vLm1heCksIHMuby5taW4pO1xuXG4gICAgICAgICAgICAgICAgICAgIHMudmFsKHYsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocy5ySCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIG1vdXNld2hlZWwgc3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG13VGltZXJTdG9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG13VGltZXJTdG9wID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5ySCh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtd1RpbWVyU3RvcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgbW91c2V3aGVlbCByZWxlYXNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtd1RpbWVyUmVsZWFzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13VGltZXJSZWxlYXNlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtd1RpbWVyU3RvcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuckgodik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG13VGltZXJSZWxlYXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBrdmFsLFxuICAgICAgICAgICAgICAgIHRvLFxuICAgICAgICAgICAgICAgIG0gPSAxLFxuICAgICAgICAgICAgICAgIGt2ID0ge1xuICAgICAgICAgICAgICAgICAgICAzNzogLXMuby5zdGVwLFxuICAgICAgICAgICAgICAgICAgICAzODogcy5vLnN0ZXAsXG4gICAgICAgICAgICAgICAgICAgIDM5OiBzLm8uc3RlcCxcbiAgICAgICAgICAgICAgICAgICAgNDA6IC1zLm8uc3RlcFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuJFxuICAgICAgICAgICAgICAgIC5vbihcbiAgICAgICAgICAgICAgICAgICAgXCJrZXlkb3duXCIsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2MgPSBlLmtleUNvZGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG51bXBhZCBzdXBwb3J0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2MgPj0gOTYgJiYga2MgPD0gMTA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2MgPSBlLmtleUNvZGUgPSBrYyAtIDQ4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBrdmFsID0gcGFyc2VJbnQoU3RyaW5nLmZyb21DaGFyQ29kZShrYykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4oa3ZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2MgIT09IDEzKSAgICAgICAgICAgICAgICAgICAgIC8vIGVudGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYga2MgIT09IDggICAgICAgICAgICAgICAgICAgICAvLyBic1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGtjICE9PSA5ICAgICAgICAgICAgICAgICAgICAgLy8gdGFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYga2MgIT09IDE4OSAgICAgICAgICAgICAgICAgICAvLyAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgKGtjICE9PSAxOTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgcy4kLnZhbCgpLm1hdGNoKC9cXC4vKSkgICAvLyAuIGFsbG93ZWQgb25jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFycm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkLmluQXJyYXkoa2MsWzM3LDM4LDM5LDQwXSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHYgPSBzLm8ucGFyc2Uocy4kLnZhbCgpKSArIGt2W2tjXSAqIG07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuby5zdG9wcGVyICYmICh2ID0gbWF4KG1pbih2LCBzLm8ubWF4KSwgcy5vLm1pbikpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY2hhbmdlKHMuX3ZhbGlkYXRlKHYpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5fZHJhdygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvbmcgdGltZSBrZXlkb3duIHNwZWVkLXVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbSAqPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAzMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5vbihcbiAgICAgICAgICAgICAgICAgICAgXCJrZXl1cFwiLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKGt2YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0gPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnZhbChzLiQudmFsKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ga3ZhbCBwb3N0Y29uZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzLiQudmFsKCkgPiBzLm8ubWF4ICYmIHMuJC52YWwocy5vLm1heCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHMuJC52YWwoKSA8IHMuby5taW4gJiYgcy4kLnZhbChzLm8ubWluKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB0aGlzLiRjLm9uKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLCBtdyk7XG4gICAgICAgICAgICB0aGlzLiQub24oXCJtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsXCIsIG13KTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52IDwgdGhpcy5vLm1pblxuICAgICAgICAgICAgICAgIHx8IHRoaXMudiA+IHRoaXMuby5tYXgpIHsgdGhpcy52ID0gdGhpcy5vLm1pbjsgfVxuXG4gICAgICAgICAgICB0aGlzLiQudmFsKHRoaXMudik7XG4gICAgICAgICAgICB0aGlzLncyID0gdGhpcy53IC8gMjtcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yRXh0ID0gdGhpcy5vLmN1cnNvciAvIDEwMDtcbiAgICAgICAgICAgIHRoaXMueHkgPSB0aGlzLncyICogdGhpcy5zY2FsZTtcbiAgICAgICAgICAgIHRoaXMubGluZVdpZHRoID0gdGhpcy54eSAqIHRoaXMuby50aGlja25lc3M7XG4gICAgICAgICAgICB0aGlzLmxpbmVDYXAgPSB0aGlzLm8ubGluZUNhcDtcbiAgICAgICAgICAgIHRoaXMucmFkaXVzID0gdGhpcy54eSAtIHRoaXMubGluZVdpZHRoIC8gMjtcblxuICAgICAgICAgICAgdGhpcy5vLmFuZ2xlT2Zmc2V0XG4gICAgICAgICAgICAmJiAodGhpcy5vLmFuZ2xlT2Zmc2V0ID0gaXNOYU4odGhpcy5vLmFuZ2xlT2Zmc2V0KSA/IDAgOiB0aGlzLm8uYW5nbGVPZmZzZXQpO1xuXG4gICAgICAgICAgICB0aGlzLm8uYW5nbGVBcmNcbiAgICAgICAgICAgICYmICh0aGlzLm8uYW5nbGVBcmMgPSBpc05hTih0aGlzLm8uYW5nbGVBcmMpID8gdGhpcy5QSTIgOiB0aGlzLm8uYW5nbGVBcmMpO1xuXG4gICAgICAgICAgICAvLyBkZWcgdG8gcmFkXG4gICAgICAgICAgICB0aGlzLmFuZ2xlT2Zmc2V0ID0gdGhpcy5vLmFuZ2xlT2Zmc2V0ICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgICAgIHRoaXMuYW5nbGVBcmMgPSB0aGlzLm8uYW5nbGVBcmMgKiBNYXRoLlBJIC8gMTgwO1xuXG4gICAgICAgICAgICAvLyBjb21wdXRlIHN0YXJ0IGFuZCBlbmQgYW5nbGVzXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QW5nbGUgPSAxLjUgKiBNYXRoLlBJICsgdGhpcy5hbmdsZU9mZnNldDtcbiAgICAgICAgICAgIHRoaXMuZW5kQW5nbGUgPSAxLjUgKiBNYXRoLlBJICsgdGhpcy5hbmdsZU9mZnNldCArIHRoaXMuYW5nbGVBcmM7XG5cbiAgICAgICAgICAgIHZhciBzID0gbWF4KFxuICAgICAgICAgICAgICAgIFN0cmluZyhNYXRoLmFicyh0aGlzLm8ubWF4KSkubGVuZ3RoLFxuICAgICAgICAgICAgICAgIFN0cmluZyhNYXRoLmFicyh0aGlzLm8ubWluKSkubGVuZ3RoLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICkgKyAyO1xuXG4gICAgICAgICAgICB0aGlzLm8uZGlzcGxheUlucHV0XG4gICAgICAgICAgICAgICAgJiYgdGhpcy5pLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAnd2lkdGgnIDogKCh0aGlzLncgLyAyICsgNCkgPj4gMCkgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCcgOiAoKHRoaXMudyAvIDMpID4+IDApICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbicgOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZlcnRpY2FsLWFsaWduJyA6ICdtaWRkbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ21hcmdpbi10b3AnIDogKCh0aGlzLncgLyAzKSA+PiAwKSArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbWFyZ2luLWxlZnQnIDogJy0nICsgKCh0aGlzLncgKiAzIC8gNCArIDIpID4+IDApICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdib3JkZXInIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmb250JyA6IHRoaXMuby5mb250V2VpZ2h0ICsgJyAnICsgKCh0aGlzLncgLyBzKSA+PiAwKSArICdweCAnICsgdGhpcy5vLmZvbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1hbGlnbicgOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdjb2xvcicgOiB0aGlzLm8uaW5wdXRDb2xvciB8fCB0aGlzLm8uZmdDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICdwYWRkaW5nJyA6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkgfHwgdGhpcy5pLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAnaGlkZGVuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jaGFuZ2UgPSBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdGhpcy5jdiA9IHY7XG4gICAgICAgICAgICB0aGlzLiQudmFsKHRoaXMuby5mb3JtYXQodikpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYW5nbGUgPSBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgcmV0dXJuICh2IC0gdGhpcy5vLm1pbikgKiB0aGlzLmFuZ2xlQXJjIC8gKHRoaXMuby5tYXggLSB0aGlzLm8ubWluKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFyYyA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgdmFyIHNhLCBlYTtcbiAgICAgICAgICB2ID0gdGhpcy5hbmdsZSh2KTtcbiAgICAgICAgICBpZiAodGhpcy5vLmZsaXApIHtcbiAgICAgICAgICAgICAgc2EgPSB0aGlzLmVuZEFuZ2xlICsgMC4wMDAwMTtcbiAgICAgICAgICAgICAgZWEgPSBzYSAtIHYgLSAwLjAwMDAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNhID0gdGhpcy5zdGFydEFuZ2xlIC0gMC4wMDAwMTtcbiAgICAgICAgICAgICAgZWEgPSBzYSArIHYgKyAwLjAwMDAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm8uY3Vyc29yXG4gICAgICAgICAgICAgICYmIChzYSA9IGVhIC0gdGhpcy5jdXJzb3JFeHQpXG4gICAgICAgICAgICAgICYmIChlYSA9IGVhICsgdGhpcy5jdXJzb3JFeHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgczogc2EsXG4gICAgICAgICAgICAgIGU6IGVhLFxuICAgICAgICAgICAgICBkOiB0aGlzLm8uZmxpcCAmJiAhdGhpcy5vLmN1cnNvclxuICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGMgPSB0aGlzLmcsICAgICAgICAgICAgICAgICAvLyBjb250ZXh0XG4gICAgICAgICAgICAgICAgYSA9IHRoaXMuYXJjKHRoaXMuY3YpLCAgICAgIC8vIEFyY1xuICAgICAgICAgICAgICAgIHBhLCAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQcmV2aW91cyBhcmNcbiAgICAgICAgICAgICAgICByID0gMTtcblxuICAgICAgICAgICAgYy5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcbiAgICAgICAgICAgIGMubGluZUNhcCA9IHRoaXMubGluZUNhcDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuby5iZ0NvbG9yICE9PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSB0aGlzLm8uYmdDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYy5hcmModGhpcy54eSwgdGhpcy54eSwgdGhpcy5yYWRpdXMsIHRoaXMuZW5kQW5nbGUgLSAwLjAwMDAxLCB0aGlzLnN0YXJ0QW5nbGUgKyAwLjAwMDAxLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBjLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5vLmRpc3BsYXlQcmV2aW91cykge1xuICAgICAgICAgICAgICAgIHBhID0gdGhpcy5hcmModGhpcy52KTtcbiAgICAgICAgICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSB0aGlzLnBDb2xvcjtcbiAgICAgICAgICAgICAgICBjLmFyYyh0aGlzLnh5LCB0aGlzLnh5LCB0aGlzLnJhZGl1cywgcGEucywgcGEuZSwgcGEuZCk7XG4gICAgICAgICAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICByID0gdGhpcy5jdiA9PSB0aGlzLnY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gciA/IHRoaXMuby5mZ0NvbG9yIDogdGhpcy5mZ0NvbG9yIDtcbiAgICAgICAgICAgIGMuYXJjKHRoaXMueHksIHRoaXMueHksIHRoaXMucmFkaXVzLCBhLnMsIGEuZSwgYS5kKTtcbiAgICAgICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnZhbCh0aGlzLnYpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAkLmZuLmRpYWwgPSAkLmZuLmtub2IgPSBmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IGsuRGlhbCgpO1xuICAgICAgICAgICAgICAgIGQubyA9IG87XG4gICAgICAgICAgICAgICAgZC4kID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBkLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICApLnBhcmVudCgpO1xuICAgIH07XG5cbn0pKTtcbiIsICJpbXBvcnQgXCIuLzEtanF1ZXJ5Lmtub2IuY2pzXCI7XG5cbmltcG9ydCB7IEJhc2VXaWRnZXQgfSBmcm9tIFwiLi4vY29yZS9jb3JlLndpZGdldC5qc1wiO1xuXG5jb25zdCBDb2xvclRoZW1lcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBhZnRlcmRhcmsgdGhlbWUuXG4gICAgICogQHR5cGUge1ByaW1lRmFjZXMud2lkZ2V0Lktub2IuQ29sb3JUaGVtZX1cbiAgICAgKi9cbiAgICBhZnRlcmRhcms6IHtcbiAgICAgICAgZmdDb2xvcjogJyM4QzlCOEMnLFxuICAgICAgICBiZ0NvbG9yOiAnIzUzNTM1MydcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGFmdGVybm9vbiB0aGVtZS5cbiAgICAgKiBAdHlwZSB7UHJpbWVGYWNlcy53aWRnZXQuS25vYi5Db2xvclRoZW1lfVxuICAgICAqL1xuICAgIGFmdGVybm9vbjoge1xuICAgICAgICBmZ0NvbG9yOiAnIzVFNjFCMCcsXG4gICAgICAgIGJnQ29sb3I6ICcjRUJGOEZGJ1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgYWZ0ZXJ3b3JrIHRoZW1lLlxuICAgICAqIEB0eXBlIHtQcmltZUZhY2VzLndpZGdldC5Lbm9iLkNvbG9yVGhlbWV9XG4gICAgICovXG4gICAgYWZ0ZXJ3b3JrOiB7XG4gICAgICAgIGZnQ29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgYmdDb2xvcjogJyNFQkVCRUInXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBhcmlzdG8gdGhlbWUuXG4gICAgICogQHR5cGUge1ByaW1lRmFjZXMud2lkZ2V0Lktub2IuQ29sb3JUaGVtZX1cbiAgICAgKi9cbiAgICBhcmlzdG86IHtcbiAgICAgICAgZmdDb2xvcjogJyMwMDAwMDAnLFxuICAgICAgICBiZ0NvbG9yOiAnI0UzRTNFMydcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGJsaXR6ZXIgdGhlbWUuXG4gICAgICogQHR5cGUge1ByaW1lRmFjZXMud2lkZ2V0Lktub2IuQ29sb3JUaGVtZX1cbiAgICAgKi9cbiAgICBibGl0emVyOiB7XG4gICAgICAgIGZnQ29sb3I6ICcjQ0MwNTA1JyxcbiAgICAgICAgYmdDb2xvcjogJyNGMUYxRjEnXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBibHVlc2t5IHRoZW1lLlxuICAgICAqIEB0eXBlIHtQcmltZUZhY2VzLndpZGdldC5Lbm9iLkNvbG9yVGhlbWV9XG4gICAgICovXG4gICAgYmx1ZXNreToge1xuICAgICAgICBmZ0NvbG9yOiAnYmxhY2snLFxuICAgICAgICBiZ0NvbG9yOiAnI0U1RUVGQSdcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGJsYWNrIHRpZSB0aGVtZS5cbiAgICAgKiBAdHlwZSB7UHJpbWVGYWNlcy53aWRnZXQuS25vYi5Db2xvclRoZW1lfVxuICAgICAqL1xuICAgICdibGFjay10aWUnOiB7XG4gICAgICAgIGZnQ29sb3I6ICdibGFjaycsXG4gICAgICAgIGJnQ29sb3I6ICd3aGl0ZSdcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGJvb3RzdHJhcCB0aGVtZS5cbiAgICAgKiBAdHlwZSB7UHJpbWVGYWNlcy53aWRnZXQuS25vYi5Db2xvclRoZW1lfVxuICAgICAqL1xuICAgIGJvb3RzdHJhcDoge1xuICAgICAgICBmZ0NvbG9yOiAnIzAwMDAwMCcsXG4gICAgICAgIGJnQ29sb3I6ICcjRUJFQkVCJ1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgY2FzYWJsYW5jYSB0aGVtZS5cbiAgICAgKiBAdHlwZSB7UHJpbWVGYWNlcy53aWRnZXQuS25vYi5Db2xvclRoZW1lfVxuICAgICAqL1xuICAgIGNhc2FibGFuY2E6IHtcbiAgICAgICAgZmdDb2xvcjogJyMwMzAzMDMnLFxuICAgICAgICBiZ0NvbG9yOiAnI0Y5RjhGNSdcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGNydXplIHRoZW1lLlxuICAgICAqIEB0eXBlIHtQcmltZUZhY2VzLndpZGdldC5Lbm9iLkNvbG9yVGhlbWV9XG4gICAgICovXG4gICAgY3J1emU6IHtcbiAgICAgICAgZmdDb2xvcjogJyNDMUMxQzEnLFxuICAgICAgICBiZ0NvbG9yOiAnIzNEM0QzRCdcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGN1cGVydGlubyB0aGVtZS5cbiAgICAgKiBAdHlwZSB7UHJpbWVGYWNlcy53aWRnZXQuS25vYi5Db2xvclRoZW1lfVxuICAgICAqL1xuICAgIGN1cGVydGlubzoge1xuICAgICAgICBmZ0NvbG9yOiAnIzJBN0JBQicsXG4gICAgICAgIGJnQ29sb3I6ICcjRDhFQkY5J1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgZGFyayBoaXZlIHRoZW1lLlxuICAgICAqIEB0eXBlIHtQcmltZUZhY2VzLndpZGdldC5Lbm9iLkNvbG9yVGhlbWV9XG4gICAgICovXG4gICAgJ2RhcmstaGl2ZSc6IHtcbiAgICAgICAgZmdDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYmdDb2xvcjogJyM1RjVGNUYnXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBkZWx0YSB0aGVtZS5cbiAgICAgKiBAdHlwZSB7UHJpbWVGYWNlcy53aWRnZXQuS25vYi5Db2xvclRoZW1lfVxuICAgICAqL1xuICAgIGRlbHRhOiB7XG4gICAgICAgIGZnQ29sb3I6ICcjMUIxRDFGJyxcbiAgICAgICAgYmdDb2xvcjogJyNGOUY5RkMnXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBkb3QgbHV2IHRoZW1lLlxuICAgICAqIEB0eXBlIHtQcmltZUZhY2VzLndpZGdldC5Lbm9iLkNvbG9yVGhlbWV9XG4gICAgICovXG4gICAgJ2RvdC1sdXYnOiB7XG4gICAgICAgIGZnQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGJnQ29sb3I6ICcjMDgzQzZEJ1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgZWdncGxhbnQgdGhlbWUuXG4gICAgICogQHR5cGUge1ByaW1lRmFjZXMud2lkZ2V0Lktub2IuQ29sb3JUaGVtZX1cbiAgICAgKi9cbiAgICBlZ2dwbGFudDoge1xuICAgICAgICBmZ0NvbG9yOiAnd2hpdGUnLFxuICAgICAgICBiZ0NvbG9yOiAnI0RGRENFMSdcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGV4Y2l0ZSBiaWtlIHRoZW1lLlxuICAgICAqIEB0eXBlIHtQcmltZUZhY2VzLndpZGdldC5Lbm9iLkNvbG9yVGhlbWV9XG4gICAgICovXG4gICAgJ2V4Y2l0ZS1iaWtlJzoge1xuICAgICAgICBmZ0NvbG9yOiAnI0U2OTcwMCcsXG4gICAgICAgIGJnQ29sb3I6ICcjMUU4OEU2J1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgZmxpY2sgdGhlbWUuXG4gICAgICogQHR5cGUge1ByaW1lRmFjZXMud2lkZ2V0Lktub2IuQ29sb3JUaGVtZX1cbiAgICAgKi9cbiAgICBmbGljazoge1xuICAgICAgICBmZ0NvbG9yOiAnIzE5ODBFQycsXG4gICAgICAgIGJnQ29sb3I6ICcjRTBFMEUwJ1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgZ2xhc3MgeCB0aGVtZS5cbiAgICAgKiBAdHlwZSB7UHJpbWVGYWNlcy53aWRnZXQuS25vYi5Db2xvclRoZW1lfVxuICAgICAqL1xuICAgICdnbGFzcy14Jzoge1xuICAgICAgICBmZ0NvbG9yOiAnYmxhY2snLFxuICAgICAgICBiZ0NvbG9yOiAnI0Q3RTFFOCdcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGhvbWUgdGhlbWUuXG4gICAgICogQHR5cGUge1ByaW1lRmFjZXMud2lkZ2V0Lktub2IuQ29sb3JUaGVtZX1cbiAgICAgKi9cbiAgICBob21lOiB7XG4gICAgICAgIGZnQ29sb3I6ICcjNDI0NTQ4JyxcbiAgICAgICAgYmdDb2xvcjogJyM3NDdDODknXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBob3Qgc25lYWtzIHRoZW1lLlxuICAgICAqIEB0eXBlIHtQcmltZUZhY2VzLndpZGdldC5Lbm9iLkNvbG9yVGhlbWV9XG4gICAgICovXG4gICAgJ2hvdC1zbmVha3MnOiB7XG4gICAgICAgIGZnQ29sb3I6ICcjRDJENjYwJyxcbiAgICAgICAgYmdDb2xvcjogJyMzNTQxNEYnXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBodW1hbml0eSB0aGVtZS5cbiAgICAgKiBAdHlwZSB7UHJpbWVGYWNlcy53aWRnZXQuS25vYi5Db2xvclRoZW1lfVxuICAgICAqL1xuICAgIGh1bWFuaXR5OiB7XG4gICAgICAgIGZnQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGJnQ29sb3I6ICcjQ0I4NDJGJ1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgbGUgZnJvZyB0aGVtZS5cbiAgICAgKiBAdHlwZSB7UHJpbWVGYWNlcy53aWRnZXQuS25vYi5Db2xvclRoZW1lfVxuICAgICAqL1xuICAgICdsZS1mcm9nJzoge1xuICAgICAgICBmZ0NvbG9yOiAnd2hpdGUnLFxuICAgICAgICBiZ0NvbG9yOiAnIzVCQTkyMCdcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IG1pZG5pZ2h0IHRoZW1lLlxuICAgICAqIEB0eXBlIHtQcmltZUZhY2VzLndpZGdldC5Lbm9iLkNvbG9yVGhlbWV9XG4gICAgICovXG4gICAgbWlkbmlnaHQ6IHtcbiAgICAgICAgZmdDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYmdDb2xvcjogJyMzNjM2NDEnXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBtaW50IGNob2MgdGhlbWUuXG4gICAgICogQHR5cGUge1ByaW1lRmFjZXMud2lkZ2V0Lktub2IuQ29sb3JUaGVtZX1cbiAgICAgKi9cbiAgICAnbWludC1jaG9jJzoge1xuICAgICAgICBmZ0NvbG9yOiAnI0UzRERDOScsXG4gICAgICAgIGJnQ29sb3I6ICcjNTk0OTNEJ1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgb3ZlcmNhc3QgdGhlbWUuXG4gICAgICogQHR5cGUge1ByaW1lRmFjZXMud2lkZ2V0Lktub2IuQ29sb3JUaGVtZX1cbiAgICAgKi9cbiAgICBvdmVyY2FzdDoge1xuICAgICAgICBmZ0NvbG9yOiAnIzMzODNCQicsXG4gICAgICAgIGJnQ29sb3I6ICcjRjJGMkYyJ1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgcGVwcGVyIGdyaW5kZXIgdGhlbWUuXG4gICAgICogQHR5cGUge1ByaW1lRmFjZXMud2lkZ2V0Lktub2IuQ29sb3JUaGVtZX1cbiAgICAgKi9cbiAgICAncGVwcGVyLWdyaW5kZXInOiB7XG4gICAgICAgIGZnQ29sb3I6ICcjNjU0QjI0JyxcbiAgICAgICAgYmdDb2xvcjogJyNGNkY1RjQnXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCByZWRtb25kIHRoZW1lLlxuICAgICAqIEB0eXBlIHtQcmltZUZhY2VzLndpZGdldC5Lbm9iLkNvbG9yVGhlbWV9XG4gICAgICovXG4gICAgcmVkbW9uZDoge1xuICAgICAgICBmZ0NvbG9yOiAnIzJFNkU5RScsXG4gICAgICAgIGJnQ29sb3I6ICcjRUFGNEZEJ1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgcm9ja2V0IHRoZW1lLlxuICAgICAqIEB0eXBlIHtQcmltZUZhY2VzLndpZGdldC5Lbm9iLkNvbG9yVGhlbWV9XG4gICAgICovXG4gICAgcm9ja2V0OiB7XG4gICAgICAgIGZnQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGJnQ29sb3I6ICcjMjkyNjI3J1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgc2FtIHRoZW1lLlxuICAgICAqIEB0eXBlIHtQcmltZUZhY2VzLndpZGdldC5Lbm9iLkNvbG9yVGhlbWV9XG4gICAgICovXG4gICAgc2FtOiB7XG4gICAgICAgIGZnQ29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgYmdDb2xvcjogJyNFM0UzRTMnXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBzbW9vdGhuZXNzIHRoZW1lLlxuICAgICAqIEB0eXBlIHtQcmltZUZhY2VzLndpZGdldC5Lbm9iLkNvbG9yVGhlbWV9XG4gICAgICovXG4gICAgc21vb3RobmVzczoge1xuICAgICAgICBmZ0NvbG9yOiAnIzAwMDAwMCcsXG4gICAgICAgIGJnQ29sb3I6ICcjRTNFM0UzJ1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgc291dGggc3RyZWV0IHRoZW1lLlxuICAgICAqIEB0eXBlIHtQcmltZUZhY2VzLndpZGdldC5Lbm9iLkNvbG9yVGhlbWV9XG4gICAgICovXG4gICAgJ3NvdXRoLXN0cmVldCc6IHtcbiAgICAgICAgZmdDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYmdDb2xvcjogJyM0Q0ExMDknXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBzdGFydCB0aGVtZS5cbiAgICAgKiBAdHlwZSB7UHJpbWVGYWNlcy53aWRnZXQuS25vYi5Db2xvclRoZW1lfVxuICAgICAqL1xuICAgIHN0YXJ0OiB7XG4gICAgICAgIGZnQ29sb3I6ICcjMjIyMjIyJyxcbiAgICAgICAgYmdDb2xvcjogJyMyRTkwQkQnXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBzdW5ueSB0aGVtZS5cbiAgICAgKiBAdHlwZSB7UHJpbWVGYWNlcy53aWRnZXQuS25vYi5Db2xvclRoZW1lfVxuICAgICAqL1xuICAgIHN1bm55OiB7XG4gICAgICAgIGZnQ29sb3I6ICcjOUE5Mzg0JyxcbiAgICAgICAgYmdDb2xvcjogJyNGQ0RBNjYnXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBzd2Fua3kgcHVyc2UgdGhlbWUuXG4gICAgICogQHR5cGUge1ByaW1lRmFjZXMud2lkZ2V0Lktub2IuQ29sb3JUaGVtZX1cbiAgICAgKi9cbiAgICAnc3dhbmt5LXB1cnNlJzoge1xuICAgICAgICBmZ0NvbG9yOiAnI0VGRUM5RicsXG4gICAgICAgIGJnQ29sb3I6ICcjMjYxODAzJ1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgdHJvbnRhc3RpYyB0aGVtZS5cbiAgICAgKiBAdHlwZSB7UHJpbWVGYWNlcy53aWRnZXQuS25vYi5Db2xvclRoZW1lfVxuICAgICAqL1xuICAgIHRyb250YXN0aWM6IHtcbiAgICAgICAgZmdDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYmdDb2xvcjogJyNCRUU1OTAnXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCB1aSBkYXJrbmVzcyB0aGVtZS5cbiAgICAgKiBAdHlwZSB7UHJpbWVGYWNlcy53aWRnZXQuS25vYi5Db2xvclRoZW1lfVxuICAgICAqL1xuICAgICd1aS1kYXJrbmVzcyc6IHtcbiAgICAgICAgZmdDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYmdDb2xvcjogJyM1ODU4NTgnXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCB1aSBsaWdodG5lc3MgdGhlbWUuXG4gICAgICogQHR5cGUge1ByaW1lRmFjZXMud2lkZ2V0Lktub2IuQ29sb3JUaGVtZX1cbiAgICAgKi9cbiAgICAndWktbGlnaHRuZXNzJzoge1xuICAgICAgICBmZ0NvbG9yOiAnd2hpdGUnLFxuICAgICAgICBiZ0NvbG9yOiAnI0Y3QjEzRCdcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IHZhZGVyIHRoZW1lLlxuICAgICAqIEB0eXBlIHtQcmltZUZhY2VzLndpZGdldC5Lbm9iLkNvbG9yVGhlbWV9XG4gICAgICovXG4gICAgdmFkZXI6IHtcbiAgICAgICAgZmdDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYmdDb2xvcjogJyNBRUFFQUUnXG4gICAgfSxcbn1cblxuLyoqXG4gKiBfX1ByaW1lRmFjZXMgS25vYiBXaWRnZXRfX1xuICogXG4gKiBLbm9iIGlzIGFuIGlucHV0IGNvbXBvbmVudCB0byBpbnNlcnQgbnVtZXJpYyB2YWx1ZXMgaW4gYSByYW5nZS5cbiAqIFxuICogQHR5cGVkZWYgUHJpbWVGYWNlcy53aWRnZXQuS25vYi5PbkNoYW5nZUNhbGxiYWNrIENsaWVudCBzaWRlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHZhbHVlIGNoYW5nZXMuIFNlZSBhbHNvXG4gKiB7QGxpbmsgS25vYkNmZy5vbmNoYW5nZX0uXG4gKiBAcGFyYW0ge251bWJlcn0gUHJpbWVGYWNlcy53aWRnZXQuS25vYi5PbkNoYW5nZUNhbGxiYWNrLmN1cnJlbnRWYWx1ZSBDdXJyZW50IG51bWVyaWNhbCB2YWx1ZSBvZiB0aGUga25vYi5cbiAqIFxuICogQGludGVyZmFjZSB7UHJpbWVGYWNlcy53aWRnZXQuS25vYi5Db2xvclRoZW1lfSBDb2xvclRoZW1lIEEgY29sb3IgdGhlbWUgZm9yIHRoZSBrbm9iLCBjb25zaXN0aW5nIG9mIHRoZSBjb2xvciBmb3IgdGhlXG4gKiBmaWxsZWQgYW5kIHVuZmlsbGVkIHBhcnQgb2YgdGhlIGtub2IuXG4gKiBAcHJvcCB7c3RyaW5nfSBDb2xvclRoZW1lLmZnQ29sb3IgVGhlIGZvcmVncm91bmQgY29sb3IsIGkuZS4gdGhlIGNvbG9yIG9mIHRoZSBmaWxsZWQgcGFydCBvZiB0aGUga25vYi4gTXVzdCBiZSBhIENTU1xuICogY29sb3IsIGUuZy4sIGAjZmYwMDAwYC5cbiAqIEBwcm9wIHtzdHJpbmd9IENvbG9yVGhlbWUuYmdDb2xvciBUaGUgYmFja2dyb3VuZCBjb2xvciwgaS5lLiB0aGUgY29sb3Igb2YgdGhlIHVuZmlsbGVkIHBhcnQgb2YgdGhlIGtub2IuIE11c3QgYmUgYVxuICogQ1NTIGNvbG9yLCBlLmcuLCBgI2ZmMDAwMGAuXG4gKiBcbiAqIEBwcm9wIHtzdHJpbmd9IGNvbG9yVGhlbWUgTmFtZSBvZiB0aGUgY29sb3IgdGhlbWUgdG8gdXNlLiBZb3UgY2FuIHVzZSBvbiBvZiB0aGUga2V5cyBkZWZpbmVkIGluXG4gKiBgUHJpbWVGYWNlcy53aWRnZXQuS25vYi5Db2xvclRoZW1lc2AuXG4gKiBAcHJvcCB7SlF1ZXJ5fSBpbnB1dCBUaGUgRE9NIEVsZW1lbnQgZm9yIHRoZSBoaWRkZW4gaW5wdXQgdGhhdCBzdG9yZXMgdGhlIHZhbHVlIG9mIHRoaXMgd2lkZ2V0LlxuICogQHByb3Age0pRdWVyeX0ga25vYiBUaGUgRE9NIGVsZW1lbnQgb24gd2hpY2ggdGhlIEpRdWVyeSBrbm9iIHBsdWdpbiB3YXMgaW5pdGlhbGl6ZWQuXG4gKiBAcHJvcCB7bnVtYmVyfSBtaW4gTWluaW11bSBhbGxvd2VkIHZhbHVlIGZvciB0aGlzIGtub2IuXG4gKiBAcHJvcCB7bnVtYmVyfSBtYXggTWF4aW11bSBhbGxvd2VkIHZhbHVlIGZvciB0aGlzIGtub2IuXG4gKiBAcHJvcCB7bnVtYmVyfSBzdGVwIFN0ZXAgc2l6ZSBmb3IgaW5jcmVtZW50aW5nIG9yIGRlY3JlbWVudGluZyB0aGUgdmFsdWUgb2YgdGhpcyBrbm9iLlxuICogQHByb3Age1ByaW1lRmFjZXMud2lkZ2V0Lktub2IuQ29sb3JUaGVtZX0gdGhlbWVPYmplY3QgQ29sb3IgdGhlbWUgZGF0YSB0byBiZSB1c2VkLlxuICogXG4gKiBAaW50ZXJmYWNlIHtQcmltZUZhY2VzLndpZGdldC5Lbm9iQ2ZnfSBjZmcgVGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSB7QGxpbmsgIEtub2J8IEtub2Igd2lkZ2V0fS5cbiAqIFlvdSBjYW4gYWNjZXNzIHRoaXMgY29uZmlndXJhdGlvbiB2aWEge0BsaW5rIFByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXQuY2ZnfEJhc2VXaWRnZXQuY2ZnfS4gUGxlYXNlIG5vdGUgdGhhdCB0aGlzXG4gKiBjb25maWd1cmF0aW9uIGlzIHVzdWFsbHkgbWVhbnQgdG8gYmUgcmVhZC1vbmx5IGFuZCBzaG91bGQgbm90IGJlIG1vZGlmaWVkLlxuICogQGV4dGVuZHMge1ByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXRDZmd9IGNmZ1xuICogXG4gKiBAcHJvcCB7c3RyaW5nfSBjZmcuY29sb3JUaGVtZSBUaGVtZSBvZiB0aGUga25vYi5cbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy5iZ0NvbG9yIEZvcmVncm91bmQgY29sb3Igb2YgdGhlIGNvbXBvbmVudC5cbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy5mZ0NvbG9yIEJhY2tncm91bmQgY29sb3Igb2YgdGhlIGNvbXBvbmVudC5cbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy5sYWJlbFRlbXBsYXRlIFRlbXBsYXRlIG9mIHRoZSBwcm9ncmVzcyB2YWx1ZSBlLmcuIGB7dmFsdWV9JWAuXG4gKiBAcHJvcCB7UHJpbWVGYWNlcy53aWRnZXQuS25vYi5PbkNoYW5nZUNhbGxiYWNrfSBjZmcub25jaGFuZ2UgQ2xpZW50IHNpZGUgY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdmFsdWUgY2hhbmdlcy5cbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy5zdHlsZUNsYXNzIFN0eWxlIGNsYXNzIG9mIHRoZSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBLbm9iIGV4dGVuZHMgQmFzZVdpZGdldCB7XG4gICAgLyoqXG4gICAgICogTGlzdCBvZiBhdmFpbGFibGUgYnVpbHRpbiBjb2xvciB0aGVtZXMgZm9yIHRoZSB7QGxpbmsgS25vYn0gd2lkZ2V0LlxuICAgICAqL1xuICAgIHN0YXRpYyBjb2xvclRoZW1lcyA9IENvbG9yVGhlbWVzO1xuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMuUGFydGlhbFdpZGdldENmZzxUQ2ZnPn0gY2ZnXG4gICAgICovXG4gICAgaW5pdChjZmcpIHtcbiAgICAgICAgc3VwZXIuaW5pdChjZmcpO1xuXG4gICAgICAgIHRoaXMuY29sb3JUaGVtZSA9IHRoaXMuY2ZnLmNvbG9yVGhlbWU7XG4gICAgICAgIHRoaXMuaW5wdXQgPSAkKHRoaXMuanFJZCArIFwiX2hpZGRlblwiKTtcbiAgICAgICAgdGhpcy5taW4gPSBwYXJzZUludCh0aGlzLmpxLmRhdGEoJ21pbicpLCAxMCk7XG4gICAgICAgIHRoaXMubWF4ID0gcGFyc2VJbnQodGhpcy5qcS5kYXRhKCdtYXgnKSwgMTApO1xuICAgICAgICB0aGlzLnN0ZXAgPSBwYXJzZUludCh0aGlzLmpxLmRhdGEoJ3N0ZXAnKSwgMTApO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlS25vYigpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMuUGFydGlhbFdpZGdldENmZzxUQ2ZnPn0gY2ZnXG4gICAgICovXG4gICAgcmVmcmVzaChjZmcpIHtcbiAgICAgICAgaWYgKHRoaXMua25vYikge1xuICAgICAgICAgICAgdGhpcy5rbm9iLmNoaWxkcmVuKCdjYW52YXMnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmtub2IuY2hpbGRyZW4oJ2lucHV0JykudW53cmFwKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW5pdChjZmcpO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBrbm9iIHdpZGdldCBhbmQgc2V0cyB1cCBhbGwgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY3JlYXRlS25vYigpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcblxuICAgICAgICB0aGlzLnRoZW1lT2JqZWN0ID0gS25vYi5jb2xvclRoZW1lc1t0aGlzLmNvbG9yVGhlbWUgfHwgJ2FyaXN0byddO1xuXG4gICAgICAgIHRoaXMuanEuZGF0YSgnZmdjb2xvcicsIHRoaXMuY2ZnLmZnQ29sb3IgfHwgdGhpcy50aGVtZU9iamVjdC5mZ0NvbG9yKTtcbiAgICAgICAgdGhpcy5qcS5kYXRhKCdiZ2NvbG9yJywgdGhpcy5jZmcuYmdDb2xvciB8fCB0aGlzLnRoZW1lT2JqZWN0LmJnQ29sb3IpO1xuXG4gICAgICAgIC8qIFByaW1lRmFjZXMgR2l0aHViICM0MDg1ICovXG4gICAgICAgIHRoaXMuanEuY3NzKHtcbiAgICAgICAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJyxcbiAgICAgICAgICAgICctbW96LXVzZXItc2VsZWN0JzogJ25vbmUnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMua25vYiA9IHRoaXMuanEua25vYih7XG4gICAgICAgICAgICByZWxlYXNlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5pbnB1dC52YWwodmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCR0aGlzLmNmZy5vbmNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5jZmcub25jaGFuZ2UodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkdGhpcy5oYXNCZWhhdmlvcignY2hhbmdlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiAkdGhpcy5pZCArICdfaGlkZGVuJywgdmFsdWU6IHZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmNhbGxCZWhhdmlvcignY2hhbmdlJywgZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9ybWF0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJHRoaXMuY2ZnLmxhYmVsVGVtcGxhdGUucmVwbGFjZSgne3ZhbHVlfScsIHZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkcmF3OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBcInRyb25cIiBjYXNlXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJC5kYXRhKCdza2luJykgPT0gJ3Ryb24nKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJzb3JFeHQgPSAwLjM7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSB0aGlzLmFyYyh0aGlzLmN2KSAvLyBBcmNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIHBhIC8vIFByZXZpb3VzIGFyY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgciA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nLmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm8uZGlzcGxheVByZXZpb3VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYSA9IHRoaXMuYXJjKHRoaXMudik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmcuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmcuc3Ryb2tlU3R5bGUgPSB0aGlzLnBDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZy5hcmModGhpcy54eSwgdGhpcy54eSwgdGhpcy5yYWRpdXMgLSB0aGlzLmxpbmVXaWR0aCwgcGEucywgcGEuZSwgcGEuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmcuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmcuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZy5zdHJva2VTdHlsZSA9IHIgPyB0aGlzLm8uZmdDb2xvciA6IHRoaXMuZmdDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nLmFyYyh0aGlzLnh5LCB0aGlzLnh5LCB0aGlzLnJhZGl1cyAtIHRoaXMubGluZVdpZHRoLCBhLnMsIGEuZSwgYS5kKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nLnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZy5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmcuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZy5zdHJva2VTdHlsZSA9IHRoaXMuby5mZ0NvbG9yO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmcuYXJjKHRoaXMueHksIHRoaXMueHksIHRoaXMucmFkaXVzIC0gdGhpcy5saW5lV2lkdGggKyAxICsgdGhpcy5saW5lV2lkdGggKiAyIC8gMywgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nLnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5rbm9iLmFkZENsYXNzKHRoaXMuY2ZnLnN0eWxlQ2xhc3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoaXMga25vYiB3aWRnZXQgdG8gdGhlIGdpdmVuIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBWYWx1ZSB0byBzZXQgb24gdGhpcyBrbm9iLlxuICAgICAqL1xuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsKHZhbHVlKTtcbiAgICAgICAgdGhpcy5qcS52YWwodmFsdWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGlzIGtub2IsIGFzIGEgbnVtYmVyLlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGN1cnJlbnQgbnVtZXJpY2FsIHZhbHVlIG9mIHRoaXMga25vYi5cbiAgICAgKi9cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuanEudmFsKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluY3JlbWVudHMgdGhlIHZhbHVlIG9mIHRoaXMga25vYiBieSB0aGUgY3VycmVudCBzdGVwIHNpemUuXG4gICAgICovXG4gICAgaW5jcmVtZW50KCkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCkgKyB0aGlzLnN0ZXA7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgPD0gdGhpcy5tYXggPyB2YWx1ZSA6IHRoaXMubWF4O1xuICAgICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNyZW1lbnRzIHRoZSB2YWx1ZSBvZiB0aGlzIGtub2IgYnkgdGhlIGN1cnJlbnQgc3RlcCBzaXplLlxuICAgICAqL1xuICAgIGRlY3JlbWVudCgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpIC0gdGhpcy5zdGVwO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlID49IHRoaXMubWluID8gdmFsdWUgOiB0aGlzLm1pbjtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZXMgdGhpcyBpbnB1dCBzbyB0aGF0IHRoZSB1c2VyIGNhbm5vdCBlbnRlciBhIHZhbHVlIGFueW1vcmUuXG4gICAgICovXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgUHJpbWVGYWNlcy51dGlscy5kaXNhYmxlSW5wdXRXaWRnZXQodGhpcy5qcSwgdGhpcy5pbnB1dCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5hYmxlcyB0aGlzIGlucHV0IHNvIHRoYXQgdGhlIHVzZXIgY2FuIGVudGVyIGEgdmFsdWUuXG4gICAgICovXG4gICAgZW5hYmxlKCkge1xuICAgICAgICBQcmltZUZhY2VzLnV0aWxzLmVuYWJsZUlucHV0V2lkZ2V0KHRoaXMuanEsIHRoaXMuaW5wdXQpO1xuICAgIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQVlBLEtBQUMsU0FBVSxTQUFTO0FBQ2hCLFVBQUksT0FBTyxZQUFZLFVBQVU7QUFFN0IsZUFBTyxVQUFVLFFBQVEsd0NBQWlCO0FBQUEsTUFDOUMsV0FBVyxPQUFPLFdBQVcsY0FBYyxPQUFPLEtBQUs7QUFFbkQsZUFBTyxDQUFDLFFBQVEsR0FBRyxPQUFPO0FBQUEsTUFDOUIsT0FBTztBQUVILGdCQUFRLE1BQU07QUFBQSxNQUNsQjtBQUFBLElBQ0osR0FBRSxTQUFVQSxJQUFHO0FBS1g7QUFLQSxVQUFJLElBQUksQ0FBQyxHQUNMLE1BQU0sS0FBSyxLQUNYLE1BQU0sS0FBSztBQUVmLFFBQUUsSUFBSSxDQUFDO0FBQ1AsUUFBRSxFQUFFLElBQUlBLEdBQUUsUUFBUTtBQUNsQixRQUFFLEVBQUUsSUFBSSxTQUFVLEdBQUc7QUFDakIsZUFBTyxFQUFFLGNBQWMsUUFBUSxTQUFTO0FBQUEsTUFDNUM7QUFZQSxRQUFFLElBQUksV0FBWTtBQUNkLFlB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QSxJQUNKLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFNBQVM7QUFBQSxJQUNMLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFNBQVM7QUFBQSxJQUNMLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLGFBQWE7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFdBQVc7QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFlBQVk7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLE9BQU87QUFBQSxJQUNILFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFdBQVc7QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLGFBQWE7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLE9BQU87QUFBQSxJQUNILFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFdBQVc7QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFVBQVU7QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLGVBQWU7QUFBQSxJQUNYLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLE9BQU87QUFBQSxJQUNILFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFdBQVc7QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLE1BQU07QUFBQSxJQUNGLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLGNBQWM7QUFBQSxJQUNWLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFVBQVU7QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFdBQVc7QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFVBQVU7QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLGFBQWE7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFVBQVU7QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxFQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLGtCQUFrQjtBQUFBLElBQ2QsU0FBUztBQUFBLElBQ1QsU0FBUztBQUFBLEVBQ2I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsU0FBUztBQUFBLElBQ0wsU0FBUztBQUFBLElBQ1QsU0FBUztBQUFBLEVBQ2I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsUUFBUTtB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

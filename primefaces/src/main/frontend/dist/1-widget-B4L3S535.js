import {
  BaseWidget
} from "./chunk-HGD6GSK5.js";
import "./chunk-YRJTWU7C.js";

// src/signature/0-signature.js
(function($2) {
  "use strict";
  var signatureOverrides = {
    /** Be notified when a signature changes.
                @callback SignatureChange
                @global
                @this Signature
                @example change: function() {
      console.log('Signature changed');
    } */
    /** Global defaults for signature.
        @memberof Signature
        @property {number} [distance=0] The minimum distance to start a drag.
        @property {string} [background='#fff'] The background colour.
        @property {string} [color='#000'] The colour of the signature.
        @property {number} [thickness=2] The thickness of the lines.
        @property {boolean} [guideline=false] <code>true</code> to add a guideline.
        @property {string} [guidelineColor='#a0a0a0'] The guideline colour.
        @property {number} [guidelineOffset=50] The guideline offset (pixels) from the bottom.
        @property {number} [guidelineIndex=10] The guideline indent (pixels) from the edges.
        @property {string} [notAvailable='Your browser doesn\'t support signing']
                            The error message to show when no canvas is available.
        @property {number} [scale=1] A scaling factor for rendering the signature (only applies to redraws).
        @property {string|Element|jQuery} [syncField=null] The selector, DOM element, or jQuery object
                            for a field to automatically synchronise with a text version of the signature.
        @property {string} [syncFormat='JSON'] The output representation: 'JSON', 'SVG', 'PNG', 'JPEG'.
        @property {boolean} [svgStyles=false] <code>true</code> to use the <code>style</code> attribute in SVG.
        @property {SignatureChange} [change=null] A callback triggered when the signature changes.
        @example $.extend($.kbw.signature.options, {guideline: true}) */
    options: {
      distance: 0,
      background: "#fff",
      color: "#000",
      thickness: 2,
      guideline: false,
      guidelineColor: "#a0a0a0",
      guidelineOffset: 50,
      guidelineIndent: 10,
      notAvailable: "Your browser doesn't support signing",
      scale: 1,
      syncField: null,
      syncFormat: "JSON",
      svgStyles: false,
      change: null
    },
    /** Initialise a new signature area.
        @memberof Signature
        @private */
    _create: function() {
      this.element.addClass(this.widgetFullName || this.widgetBaseClass);
      try {
        this.canvas = $2('<canvas width="' + this.element.width() + '" height="' + this.element.height() + '">' + this.options.notAvailable + "</canvas>")[0];
        this.element.append(this.canvas);
      } catch (e) {
        $2(this.canvas).remove();
        this.resize = true;
        this.canvas = document.createElement("canvas");
        this.canvas.setAttribute("width", this.element.width());
        this.canvas.setAttribute("height", this.element.height());
        this.canvas.innerHTML = this.options.notAvailable;
        this.element.append(this.canvas);
      }
      this.ctx = this.canvas.getContext("2d");
      this._refresh(true);
      this._mouseInit();
    },
    /** Refresh the appearance of the signature area.
        @memberof Signature
        @private
        @param {boolean} init <code>true</code> if initialising. */
    _refresh: function(init) {
      if (this.resize) {
        var parent = $2(this.canvas);
        $2("div", this.canvas).css({ width: parent.width(), height: parent.height() });
      }
      this.ctx.fillStyle = this.options.background;
      this.ctx.strokeStyle = this.options.color;
      this.ctx.lineWidth = this.options.thickness;
      this.ctx.lineCap = "round";
      this.ctx.lineJoin = "round";
      this.clear(init);
    },
    /** Clear the signature area.
        @memberof Signature
        @param {boolean} init <code>true</code> if initialising - internal use only.
        @example $(selector).signature('clear') */
    clear: function(init) {
      if (this.options.disabled) {
        return;
      }
      this.ctx.clearRect(0, 0, this.element.width(), this.element.height());
      this.ctx.fillRect(0, 0, this.element.width(), this.element.height());
      if (this.options.guideline) {
        this.ctx.save();
        this.ctx.strokeStyle = this.options.guidelineColor;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(
          this.options.guidelineIndent,
          this.element.height() - this.options.guidelineOffset
        );
        this.ctx.lineTo(
          this.element.width() - this.options.guidelineIndent,
          this.element.height() - this.options.guidelineOffset
        );
        this.ctx.stroke();
        this.ctx.restore();
      }
      this.lines = [];
      if (!init) {
        this._changed();
      }
    },
    /** Synchronise changes and trigger a change event.
        @memberof Signature
        @private
        @param {Event} event The triggering event. */
    _changed: function(event) {
      if (this.options.syncField) {
        var output = "";
        switch (this.options.syncFormat) {
          case "PNG":
            output = this.toDataURL();
            break;
          case "JPEG":
            output = this.toDataURL("image/jpeg");
            break;
          case "SVG":
            output = this.toSVG();
            break;
          default:
            output = this.toJSON();
        }
        $2(this.options.syncField).val(output);
      }
      this._trigger("change", event, {});
    },
    /** Refresh the signature when options change.
        @memberof Signature
        @private
        @param {object} options The new option values. */
    _setOptions: function() {
      if (this._superApply) {
        this._superApply(arguments);
      } else {
        $2.Widget.prototype._setOptions.apply(this, arguments);
      }
      var count = 0;
      var onlyDisable = true;
      for (var name in arguments[0]) {
        if (arguments[0].hasOwnProperty(name)) {
          count++;
          onlyDisable = onlyDisable && name === "disabled";
        }
      }
      if (count > 1 || !onlyDisable) {
        this._refresh();
      }
    },
    /** Determine if dragging can start.
        @memberof Signature
        @private
        @param {Event} event The triggering mouse event.
        @return {boolean} <code>true</code> if allowed, <code>false</code> if not */
    _mouseCapture: function() {
      return !this.options.disabled;
    },
    /** Start a new line.
        @memberof Signature
        @private
        @param {Event} event The triggering mouse event. */
    _mouseStart: function(event) {
      this.offset = this.element.offset();
      this.offset.left -= document.documentElement.scrollLeft || document.body.scrollLeft;
      this.offset.top -= document.documentElement.scrollTop || document.body.scrollTop;
      this.lastPoint = [
        this._round(event.clientX - this.offset.left),
        this._round(event.clientY - this.offset.top)
      ];
      this.curLine = [this.lastPoint];
      this.lines.push(this.curLine);
    },
    /** Track the mouse.
        @memberof Signature
        @private
        @param {Event} event The triggering mouse event. */
    _mouseDrag: function(event) {
      var point = [
        this._round(event.clientX - this.offset.left),
        this._round(event.clientY - this.offset.top)
      ];
      this.curLine.push(point);
      this.ctx.beginPath();
      this.ctx.moveTo(this.lastPoint[0], this.lastPoint[1]);
      this.ctx.lineTo(point[0], point[1]);
      this.ctx.stroke();
      this.lastPoint = point;
    },
    /** End a line.
        @memberof Signature
        @private
        @param {Event} event The triggering mouse event. */
    _mouseStop: function(event) {
      if (this.curLine.length === 1) {
        event.clientY += this.options.thickness;
        this._mouseDrag(event);
      }
      this.lastPoint = null;
      this.curLine = null;
      this._changed(event);
    },
    /** Round to two decimal points.
        @memberof Signature
        @private
        @param {number} value The value to round.
        @return {number} The rounded value. */
    _round: function(value) {
      return Math.round(value * 100) / 100;
    },
    /** Convert the captured lines to JSON text.
        @memberof Signature
        @return {string} The JSON text version of the lines.
        @example var json = $(selector).signature('toJSON') */
    toJSON: function() {
      return '{"lines":[' + $2.map(this.lines, function(line) {
        return "[" + $2.map(line, function(point) {
          return "[" + point + "]";
        }) + "]";
      }) + "]}";
    },
    /** Convert the captured lines to SVG text.
        @memberof Signature
        @return {string} The SVG text version of the lines.
        @example var svg = $(selector).signature('toSVG') */
    toSVG: function() {
      var attrs1 = this.options.svgStyles ? 'style="fill: ' + this.options.background + ';"' : 'fill="' + this.options.background + '"';
      var attrs2 = this.options.svgStyles ? 'style="fill: none; stroke: ' + this.options.color + "; stroke-width: " + this.options.thickness + ';"' : 'fill="none" stroke="' + this.options.color + '" stroke-width="' + this.options.thickness + '"';
      return '<?xml version="1.0"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg xmlns="http://www.w3.org/2000/svg" width="15cm" height="15cm">\n	<g ' + attrs1 + '>\n		<rect x="0" y="0" width="' + this.canvas.width + '" height="' + this.canvas.height + '"/>\n		<g ' + attrs2 + ">\n" + $2.map(this.lines, function(line) {
        return '			<polyline points="' + $2.map(line, function(point) {
          return point + "";
        }).join(" ") + '"/>\n';
      }).join("") + "		</g>\n	</g>\n</svg>\n";
    },
    /** Convert the captured lines to an image encoded in a <code>data:</code> URL.
        @memberof Signature
        @param {string} [type='image/png'] The MIME type of the image.
        @param {number} [quality=0.92] The image quality, between 0 and 1.
        @return {string} The signature as a data: URL image.
        @example var data = $(selector).signature('toDataURL', 'image/jpeg') */
    toDataURL: function(type, quality) {
      return this.canvas.toDataURL(type, quality);
    },
    /** Draw a signature from its JSON or SVG description or <code>data:</code> URL.
        <p>Note that drawing a <code>data:</code> URL does not reconstruct the internal representation!</p>
        @memberof Signature
        @param {object|string} sig An object with attribute <code>lines</code> being an array of arrays of points
                        or the text version of the JSON or SVG or a <code>data:</code> URL containing an image.
        @example $(selector).signature('draw', sigAsJSON) */
    draw: function(sig) {
      if (this.options.disabled) {
        return;
      }
      this.clear(true);
      if (typeof sig === "string" && sig.indexOf("data:") === 0) {
        this._drawDataURL(sig, this.options.scale);
      } else if (typeof sig === "string" && sig.indexOf("<svg") > -1) {
        this._drawSVG(sig, this.options.scale);
      } else {
        this._drawJSON(sig, this.options.scale);
      }
      this._changed();
    },
    /** Draw a signature from its JSON description.
        @memberof Signature
        @private
        @param {object|string} sig An object with attribute <code>lines</code> being an array of arrays of points
                        or the text version of the JSON.
        @param {number} scale A scaling factor. */
    _drawJSON: function(sig, scale) {
      if (typeof sig === "string") {
        sig = JSON.parse(sig);
      }
      this.lines = sig.lines || [];
      var ctx = this.ctx;
      $2.each(this.lines, function() {
        ctx.beginPath();
        $2.each(this, function(i) {
          ctx[i === 0 ? "moveTo" : "lineTo"](this[0] * scale, this[1] * scale);
        });
        ctx.stroke();
      });
    },
    /** Draw a signature from its SVG description.
        @memberof Signature
        @private
        @param {string} sig The text version of the SVG.
        @param {number} scale A scaling factor. */
    _drawSVG: function(sig, scale) {
      var lines = this.lines = [];
      $2(sig).find("polyline").each(function() {
        var line = [];
        $2.each($2(this).attr("points").split(" "), function(i, point) {
          var xy = point.split(",");
          line.push([parseFloat(xy[0]), parseFloat(xy[1])]);
        });
        lines.push(line);
      });
      var ctx = this.ctx;
      $2.each(this.lines, function() {
        ctx.beginPath();
        $2.each(this, function(i) {
          ctx[i === 0 ? "moveTo" : "lineTo"](this[0] * scale, this[1] * scale);
        });
        ctx.stroke();
      });
    },
    /** Draw a signature from its <code>data:</code> URL.
        <p>Note that this does not reconstruct the internal representation!</p>
        @memberof Signature
        @private
        @param {string} sig The <code>data:</code> URL containing an image.
        @param {number} scale A scaling factor. */
    _drawDataURL: function(sig, scale) {
      var image = new Image();
      var context = this.ctx;
      image.onload = function() {
        context.drawImage(this, 0, 0, image.width * scale, image.height * scale);
      };
      image.src = sig;
    },
    /** Determine whether or not any drawing has occurred.
        @memberof Signature
        @return {boolean} <code>true</code> if not signed, <code>false</code> if signed.
        @example if ($(selector).signature('isEmpty')) ... */
    isEmpty: function() {
      return this.lines.length === 0;
    },
    /** Remove the signature functionality.
        @memberof Signature
        @private */
    _destroy: function() {
      this.element.removeClass(this.widgetFullName || this.widgetBaseClass);
      $2(this.canvas).remove();
      this.canvas = this.ctx = this.lines = null;
      this._mouseDestroy();
    }
  };
  if (!$2.Widget.prototype._destroy) {
    $2.extend(signatureOverrides, {
      /* Remove the signature functionality. */
      destroy: function() {
        this._destroy();
        $2.Widget.prototype.destroy.call(this);
      }
    });
  }
  if ($2.Widget.prototype._getCreateOptions === $2.noop) {
    $2.extend(signatureOverrides, {
      /* Restore the metadata functionality. */
      _getCreateOptions: function() {
        return $2.metadata && $2.metadata.get(this.element[0])[this.widgetName];
      }
    });
  }
  $2.widget("kbw.signature", $2.ui.mouse, signatureOverrides);
  $2.kbw.signature.options = $2.kbw.signature.prototype.options;
})(jQuery);

// src/signature/1-widget.js
var Signature = class extends BaseWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    this.inputJson = this.jq.children(this.jqId + "_value");
    this.inputText = this.jq.children(this.jqId + "_text");
    this.cfg.notAvailable = "<p>Your browser does NOT support signing</p>";
    this.cfg.syncField = this.inputJson;
    this.cfg.tabindex = this.cfg.tabindex || "0";
    this.cfg.fontSize = this.cfg.fontSize || 40;
    this.cfg.fontFamily = this.cfg.fontFamily || "Brush Script MT, cursive";
    this.render();
  }
  /**
   * @override
   * @inheritdoc
   */
  destroy() {
    super.destroy();
    this.clear();
    this.jq.signature("destroy");
  }
  /**
   * Renders the client-side parts of this widget.
   * @private
   */
  render() {
    var $this = this;
    this.setupBase64();
    this.cfg.change = function() {
      $this.handleChange();
    };
    this.jq.signature(this.cfg);
    if (this.cfg.readonly) {
      this.disable();
    }
    this.setupCanvas();
    this.bindEvents();
    const json = this.inputJson.val();
    if (json) {
      this.draw(json);
      if (!this.jq.signature("isEmpty")) {
        return;
      }
    }
    const textValue = this.inputText.val();
    if (textValue) {
      this.createSignatureFromText(textValue);
    }
  }
  /**
   * Sets up the base64 configuration for the signature widget.
   * @private
   */
  setupBase64() {
    if (this.cfg.base64) {
      this.cfg.svgStyles = true;
      this.inputBase64 = this.jq.children(this.jqId + "_base64");
    }
  }
  /**
   * Sets up the base64 configuration for the signature widget.
   * @private
   */
  setupCanvas() {
    this.canvas = this.jq.children("canvas");
    this.canvas.attr({
      "aria-label": PrimeFaces.getAriaLabel("signatureLabel", this.cfg.ariaLabel || "Sign here"),
      "aria-labelledby": this.cfg.ariaLabelledBy,
      "id": this.id + "_canvas",
      "role": "img",
      "tabindex": this.cfg.readonly ? "-1" : this.cfg.tabindex || "0"
    });
  }
  /**
   * Binds event handlers to the signature canvas.
   * @private
   */
  bindEvents() {
    var $this = this;
    if (this.cfg.readonly) {
      return;
    }
    if (this.cfg.ariaLabelledBy) {
      $(PrimeFaces.escapeClientId(this.cfg.ariaLabelledBy)).on("click", () => $this.canvas.trigger("focus"));
    }
    this.canvas.off("mouseenter mouseleave mousedown focus blur keydown").on("mouseenter", () => $this.jq.addClass("ui-state-hover")).on("mouseleave", () => $this.jq.removeClass("ui-state-hover")).on("mousedown", () => $this.canvas.trigger("focus")).on("focus", () => $this.jq.addClass("ui-state-focus")).on("blur", () => {
      $this.jq.removeClass("ui-state-hover ui-state-focus");
      $this.updateBase64();
    }).on("keydown", (event) => {
      let printedText = $this.inputText.val() || "";
      switch (event.code) {
        case "Backspace":
        case "Delete":
          if (printedText.length > 1) {
            printedText = printedText.slice(0, -1);
          } else {
            printedText = "";
            $this.clear();
          }
          break;
        case "Escape":
          $this.clear();
          break;
        default:
          if (PrimeFaces.utils.isPrintableKey(event)) {
            printedText += event.key;
          } else {
            return;
          }
      }
      event.preventDefault();
      if (printedText) {
        $this.inputText.val(printedText);
        $this.createSignatureFromText(printedText);
      }
    });
  }
  /**
   * Clears this signature widget, removing all drawn lines.
   */
  clear() {
    this.jq.signature("clear");
    this.inputJson.val("");
    this.inputText.val("");
    this.updateBase64(true);
  }
  /**
   * Draws the given line data to this signature widget viewport.
   * @param {string | JQuerySignature.SignatureJson} value The signatue data to draw.
   */
  draw(value) {
    if (value) {
      this.jq.signature("draw", value);
    }
  }
  /**
   * Callback for when the signature has changed.
   * @private
   */
  handleChange() {
    this.updateBase64();
    if (this.cfg.onchange) {
      this.cfg.onchange.call(this);
    }
  }
  /**
   * Updates the base64 value of the signature widget.
   * @param {boolean} clear - Whether to clear the base64 value.
   * @private
   */
  updateBase64(clear = false) {
    if (this.cfg.base64) {
      this.inputBase64.val(clear ? "" : this.canvas[0].toDataURL());
    }
  }
  /**
   * Creates a signature from the given text using SVG.
   * @param {string} text - The text to convert into a signature.
   */
  createSignatureFromText(text) {
    const canvas = this.canvas[0];
    const width = canvas.width;
    const height = canvas.height;
    const ctx = canvas.getContext("2d");
    ctx.save();
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = this.cfg.color || "black";
    ctx.font = `${this.cfg.fontSize}px ${this.cfg.fontFamily || "Brush Script MT, cursive"}`;
    ctx.fillText(text, 10, (height + this.cfg.fontSize) / 2);
    this.handleChange();
    ctx.restore();
    this.draw(canvas.toDataURL());
  }
  /**
   * Disables this input so that the user cannot enter a value anymore.
   */
  disable() {
    PrimeFaces.utils.disableInputWidget(this.jq, this.inputJson);
  }
  /**
   * Enables this input so that the user can enter a value.
   */
  enable() {
    PrimeFaces.utils.enableInputWidget(this.jq, this.inputJson);
  }
};
export {
  Signature
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3NpZ25hdHVyZS8wLXNpZ25hdHVyZS5qcyIsICIuLi9zcmMvc2lnbmF0dXJlLzEtd2lkZ2V0LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiBodHRwOi8va2VpdGgtd29vZC5uYW1lL3NpZ25hdHVyZS5odG1sXG4gICAgU2lnbmF0dXJlIHBsdWdpbiBmb3IgalF1ZXJ5IFVJIHYxLjIuMS5cbiAgICBSZXF1aXJlcyBleGNhbnZhcy5qcyBpbiBJRS5cbiAgICBXcml0dGVuIGJ5IEtlaXRoIFdvb2QgKHdvb2Qua2VpdGh7YXR9b3B0dXNuZXQuY29tLmF1KSBBcHJpbCAyMDEyLlxuICAgIEF2YWlsYWJsZSB1bmRlciB0aGUgTUlUIChodHRwOi8va2VpdGgtd29vZC5uYW1lL2xpY2VuY2UuaHRtbCkgbGljZW5zZS4gXG4gICAgUGxlYXNlIGF0dHJpYnV0ZSB0aGUgYXV0aG9yIGlmIHlvdSB1c2UgaXQuICovXG5cbi8qIGdsb2JhbHMgR192bWxDYW52YXNNYW5hZ2VyICovXG5cbihmdW5jdGlvbiAoJCkgeyAvLyBIaWRlIHNjb3BlLCBubyAkIGNvbmZsaWN0XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLyoqIFNpZ25hdHVyZSBjYXB0dXJlIGFuZCBkaXNwbGF5LlxuICAgICAgICA8cD5EZXBlbmRzIG9uIDxjb2RlPmpxdWVyeS51aS53aWRnZXQ8L2NvZGU+LCA8Y29kZT5qcXVlcnkudWkubW91c2U8L2NvZGU+LjwvcD5cbiAgICAgICAgPHA+RXhwZWN0cyBIVE1MIGxpa2U6PC9wPlxuICAgICAgICA8cHJlPiZsdDtkaXY+Jmx0Oy9kaXY+PC9wcmU+XG4gICAgICAgIEBuYW1lc3BhY2UgU2lnbmF0dXJlXG4gICAgICAgIEBhdWdtZW50cyAkLldpZGdldFxuICAgICAgICBAZXhhbXBsZSAkKHNlbGVjdG9yKS5zaWduYXR1cmUoKVxuJChzZWxlY3Rvcikuc2lnbmF0dXJlKHtjb2xvcjogJ2JsdWUnLCBndWlkZWxpbmU6IHRydWV9KSAqL1xuICAgIHZhciBzaWduYXR1cmVPdmVycmlkZXMgPSB7XG5cbiAgICAgICAgLyoqIEJlIG5vdGlmaWVkIHdoZW4gYSBzaWduYXR1cmUgY2hhbmdlcy5cbiAgICAgICAgICAgIEBjYWxsYmFjayBTaWduYXR1cmVDaGFuZ2VcbiAgICAgICAgICAgIEBnbG9iYWxcbiAgICAgICAgICAgIEB0aGlzIFNpZ25hdHVyZVxuICAgICAgICAgICAgQGV4YW1wbGUgY2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJ1NpZ25hdHVyZSBjaGFuZ2VkJyk7XG59ICovXG5cbiAgICAgICAgLyoqIEdsb2JhbCBkZWZhdWx0cyBmb3Igc2lnbmF0dXJlLlxuICAgICAgICAgICAgQG1lbWJlcm9mIFNpZ25hdHVyZVxuICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IFtkaXN0YW5jZT0wXSBUaGUgbWluaW11bSBkaXN0YW5jZSB0byBzdGFydCBhIGRyYWcuXG4gICAgICAgICAgICBAcHJvcGVydHkge3N0cmluZ30gW2JhY2tncm91bmQ9JyNmZmYnXSBUaGUgYmFja2dyb3VuZCBjb2xvdXIuXG4gICAgICAgICAgICBAcHJvcGVydHkge3N0cmluZ30gW2NvbG9yPScjMDAwJ10gVGhlIGNvbG91ciBvZiB0aGUgc2lnbmF0dXJlLlxuICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IFt0aGlja25lc3M9Ml0gVGhlIHRoaWNrbmVzcyBvZiB0aGUgbGluZXMuXG4gICAgICAgICAgICBAcHJvcGVydHkge2Jvb2xlYW59IFtndWlkZWxpbmU9ZmFsc2VdIDxjb2RlPnRydWU8L2NvZGU+IHRvIGFkZCBhIGd1aWRlbGluZS5cbiAgICAgICAgICAgIEBwcm9wZXJ0eSB7c3RyaW5nfSBbZ3VpZGVsaW5lQ29sb3I9JyNhMGEwYTAnXSBUaGUgZ3VpZGVsaW5lIGNvbG91ci5cbiAgICAgICAgICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZ3VpZGVsaW5lT2Zmc2V0PTUwXSBUaGUgZ3VpZGVsaW5lIG9mZnNldCAocGl4ZWxzKSBmcm9tIHRoZSBib3R0b20uXG4gICAgICAgICAgICBAcHJvcGVydHkge251bWJlcn0gW2d1aWRlbGluZUluZGV4PTEwXSBUaGUgZ3VpZGVsaW5lIGluZGVudCAocGl4ZWxzKSBmcm9tIHRoZSBlZGdlcy5cbiAgICAgICAgICAgIEBwcm9wZXJ0eSB7c3RyaW5nfSBbbm90QXZhaWxhYmxlPSdZb3VyIGJyb3dzZXIgZG9lc25cXCd0IHN1cHBvcnQgc2lnbmluZyddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBlcnJvciBtZXNzYWdlIHRvIHNob3cgd2hlbiBubyBjYW52YXMgaXMgYXZhaWxhYmxlLlxuICAgICAgICAgICAgQHByb3BlcnR5IHtudW1iZXJ9IFtzY2FsZT0xXSBBIHNjYWxpbmcgZmFjdG9yIGZvciByZW5kZXJpbmcgdGhlIHNpZ25hdHVyZSAob25seSBhcHBsaWVzIHRvIHJlZHJhd3MpLlxuICAgICAgICAgICAgQHByb3BlcnR5IHtzdHJpbmd8RWxlbWVudHxqUXVlcnl9IFtzeW5jRmllbGQ9bnVsbF0gVGhlIHNlbGVjdG9yLCBET00gZWxlbWVudCwgb3IgalF1ZXJ5IG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgYSBmaWVsZCB0byBhdXRvbWF0aWNhbGx5IHN5bmNocm9uaXNlIHdpdGggYSB0ZXh0IHZlcnNpb24gb2YgdGhlIHNpZ25hdHVyZS5cbiAgICAgICAgICAgIEBwcm9wZXJ0eSB7c3RyaW5nfSBbc3luY0Zvcm1hdD0nSlNPTiddIFRoZSBvdXRwdXQgcmVwcmVzZW50YXRpb246ICdKU09OJywgJ1NWRycsICdQTkcnLCAnSlBFRycuXG4gICAgICAgICAgICBAcHJvcGVydHkge2Jvb2xlYW59IFtzdmdTdHlsZXM9ZmFsc2VdIDxjb2RlPnRydWU8L2NvZGU+IHRvIHVzZSB0aGUgPGNvZGU+c3R5bGU8L2NvZGU+IGF0dHJpYnV0ZSBpbiBTVkcuXG4gICAgICAgICAgICBAcHJvcGVydHkge1NpZ25hdHVyZUNoYW5nZX0gW2NoYW5nZT1udWxsXSBBIGNhbGxiYWNrIHRyaWdnZXJlZCB3aGVuIHRoZSBzaWduYXR1cmUgY2hhbmdlcy5cbiAgICAgICAgICAgIEBleGFtcGxlICQuZXh0ZW5kKCQua2J3LnNpZ25hdHVyZS5vcHRpb25zLCB7Z3VpZGVsaW5lOiB0cnVlfSkgKi9cbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxuICAgICAgICAgICAgdGhpY2tuZXNzOiAyLFxuICAgICAgICAgICAgZ3VpZGVsaW5lOiBmYWxzZSxcbiAgICAgICAgICAgIGd1aWRlbGluZUNvbG9yOiAnI2EwYTBhMCcsXG4gICAgICAgICAgICBndWlkZWxpbmVPZmZzZXQ6IDUwLFxuICAgICAgICAgICAgZ3VpZGVsaW5lSW5kZW50OiAxMCxcbiAgICAgICAgICAgIG5vdEF2YWlsYWJsZTogJ1lvdXIgYnJvd3NlciBkb2VzblxcJ3Qgc3VwcG9ydCBzaWduaW5nJyxcbiAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgICAgc3luY0ZpZWxkOiBudWxsLFxuICAgICAgICAgICAgc3luY0Zvcm1hdDogJ0pTT04nLFxuICAgICAgICAgICAgc3ZnU3R5bGVzOiBmYWxzZSxcbiAgICAgICAgICAgIGNoYW5nZTogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKiBJbml0aWFsaXNlIGEgbmV3IHNpZ25hdHVyZSBhcmVhLlxuICAgICAgICAgICAgQG1lbWJlcm9mIFNpZ25hdHVyZVxuICAgICAgICAgICAgQHByaXZhdGUgKi9cbiAgICAgICAgX2NyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZENsYXNzKHRoaXMud2lkZ2V0RnVsbE5hbWUgfHwgdGhpcy53aWRnZXRCYXNlQ2xhc3MpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcyA9ICQoJzxjYW52YXMgd2lkdGg9XCInICsgdGhpcy5lbGVtZW50LndpZHRoKCkgKyAnXCIgaGVpZ2h0PVwiJyArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5oZWlnaHQoKSArICdcIj4nICsgdGhpcy5vcHRpb25zLm5vdEF2YWlsYWJsZSArICc8L2NhbnZhcz4nKVswXTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuY2FudmFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmNhbnZhcykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHRoaXMuZWxlbWVudC53aWR0aCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHRoaXMuZWxlbWVudC5oZWlnaHQoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLm5vdEF2YWlsYWJsZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKHRoaXMuY2FudmFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHRoaXMuX3JlZnJlc2godHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZUluaXQoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKiogUmVmcmVzaCB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgc2lnbmF0dXJlIGFyZWEuXG4gICAgICAgICAgICBAbWVtYmVyb2YgU2lnbmF0dXJlXG4gICAgICAgICAgICBAcHJpdmF0ZVxuICAgICAgICAgICAgQHBhcmFtIHtib29sZWFufSBpbml0IDxjb2RlPnRydWU8L2NvZGU+IGlmIGluaXRpYWxpc2luZy4gKi9cbiAgICAgICAgX3JlZnJlc2g6IGZ1bmN0aW9uIChpbml0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNpemUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gJCh0aGlzLmNhbnZhcyk7XG4gICAgICAgICAgICAgICAgJCgnZGl2JywgdGhpcy5jYW52YXMpLmNzcyh7IHdpZHRoOiBwYXJlbnQud2lkdGgoKSwgaGVpZ2h0OiBwYXJlbnQuaGVpZ2h0KCkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZDtcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5vcHRpb25zLmNvbG9yO1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5vcHRpb25zLnRoaWNrbmVzcztcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZUpvaW4gPSAncm91bmQnO1xuICAgICAgICAgICAgdGhpcy5jbGVhcihpbml0KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKiogQ2xlYXIgdGhlIHNpZ25hdHVyZSBhcmVhLlxuICAgICAgICAgICAgQG1lbWJlcm9mIFNpZ25hdHVyZVxuICAgICAgICAgICAgQHBhcmFtIHtib29sZWFufSBpbml0IDxjb2RlPnRydWU8L2NvZGU+IGlmIGluaXRpYWxpc2luZyAtIGludGVybmFsIHVzZSBvbmx5LlxuICAgICAgICAgICAgQGV4YW1wbGUgJChzZWxlY3Rvcikuc2lnbmF0dXJlKCdjbGVhcicpICovXG4gICAgICAgIGNsZWFyOiBmdW5jdGlvbiAoaW5pdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmVsZW1lbnQud2lkdGgoKSwgdGhpcy5lbGVtZW50LmhlaWdodCgpKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZWxlbWVudC53aWR0aCgpLCB0aGlzLmVsZW1lbnQuaGVpZ2h0KCkpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ndWlkZWxpbmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLm9wdGlvbnMuZ3VpZGVsaW5lQ29sb3I7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5vcHRpb25zLmd1aWRlbGluZUluZGVudCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmhlaWdodCgpIC0gdGhpcy5vcHRpb25zLmd1aWRlbGluZU9mZnNldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMuZWxlbWVudC53aWR0aCgpIC0gdGhpcy5vcHRpb25zLmd1aWRlbGluZUluZGVudCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmhlaWdodCgpIC0gdGhpcy5vcHRpb25zLmd1aWRlbGluZU9mZnNldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5saW5lcyA9IFtdO1xuICAgICAgICAgICAgaWYgKCFpbml0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKiBTeW5jaHJvbmlzZSBjaGFuZ2VzIGFuZCB0cmlnZ2VyIGEgY2hhbmdlIGV2ZW50LlxuICAgICAgICAgICAgQG1lbWJlcm9mIFNpZ25hdHVyZVxuICAgICAgICAgICAgQHByaXZhdGVcbiAgICAgICAgICAgIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSB0cmlnZ2VyaW5nIGV2ZW50LiAqL1xuICAgICAgICBfY2hhbmdlZDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN5bmNGaWVsZCkge1xuICAgICAgICAgICAgICAgIHZhciBvdXRwdXQgPSAnJztcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5zeW5jRm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BORyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSB0aGlzLnRvRGF0YVVSTCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0pQRUcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gdGhpcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdTVkcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gdGhpcy50b1NWRygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSB0aGlzLnRvSlNPTigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKHRoaXMub3B0aW9ucy5zeW5jRmllbGQpLnZhbChvdXRwdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fdHJpZ2dlcignY2hhbmdlJywgZXZlbnQsIHt9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKiogUmVmcmVzaCB0aGUgc2lnbmF0dXJlIHdoZW4gb3B0aW9ucyBjaGFuZ2UuXG4gICAgICAgICAgICBAbWVtYmVyb2YgU2lnbmF0dXJlXG4gICAgICAgICAgICBAcHJpdmF0ZVxuICAgICAgICAgICAgQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgVGhlIG5ldyBvcHRpb24gdmFsdWVzLiAqL1xuICAgICAgICBfc2V0T3B0aW9uczogZnVuY3Rpb24gKC8qIG9wdGlvbnMgKi8pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdXBlckFwcGx5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3VwZXJBcHBseShhcmd1bWVudHMpOyAvLyBCYXNlIHdpZGdldCBoYW5kbGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJC5XaWRnZXQucHJvdG90eXBlLl9zZXRPcHRpb25zLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIEJhc2Ugd2lkZ2V0IGhhbmRsaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICAgICAgdmFyIG9ubHlEaXNhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gYXJndW1lbnRzWzBdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50c1swXS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBvbmx5RGlzYWJsZSA9IG9ubHlEaXNhYmxlICYmIG5hbWUgPT09ICdkaXNhYmxlZCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50ID4gMSB8fCAhb25seURpc2FibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWZyZXNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqIERldGVybWluZSBpZiBkcmFnZ2luZyBjYW4gc3RhcnQuXG4gICAgICAgICAgICBAbWVtYmVyb2YgU2lnbmF0dXJlXG4gICAgICAgICAgICBAcHJpdmF0ZVxuICAgICAgICAgICAgQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIHRyaWdnZXJpbmcgbW91c2UgZXZlbnQuXG4gICAgICAgICAgICBAcmV0dXJuIHtib29sZWFufSA8Y29kZT50cnVlPC9jb2RlPiBpZiBhbGxvd2VkLCA8Y29kZT5mYWxzZTwvY29kZT4gaWYgbm90ICovXG4gICAgICAgIF9tb3VzZUNhcHR1cmU6IGZ1bmN0aW9uICgvKiBldmVudCAqLykge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLm9wdGlvbnMuZGlzYWJsZWQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqIFN0YXJ0IGEgbmV3IGxpbmUuXG4gICAgICAgICAgICBAbWVtYmVyb2YgU2lnbmF0dXJlXG4gICAgICAgICAgICBAcHJpdmF0ZVxuICAgICAgICAgICAgQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIHRyaWdnZXJpbmcgbW91c2UgZXZlbnQuICovXG4gICAgICAgIF9tb3VzZVN0YXJ0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5lbGVtZW50Lm9mZnNldCgpO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQubGVmdCAtPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG4gICAgICAgICAgICB0aGlzLm9mZnNldC50b3AgLT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgICAgIHRoaXMubGFzdFBvaW50ID0gW3RoaXMuX3JvdW5kKGV2ZW50LmNsaWVudFggLSB0aGlzLm9mZnNldC5sZWZ0KSxcbiAgICAgICAgICAgIHRoaXMuX3JvdW5kKGV2ZW50LmNsaWVudFkgLSB0aGlzLm9mZnNldC50b3ApXTtcbiAgICAgICAgICAgIHRoaXMuY3VyTGluZSA9IFt0aGlzLmxhc3RQb2ludF07XG4gICAgICAgICAgICB0aGlzLmxpbmVzLnB1c2godGhpcy5jdXJMaW5lKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKiogVHJhY2sgdGhlIG1vdXNlLlxuICAgICAgICAgICAgQG1lbWJlcm9mIFNpZ25hdHVyZVxuICAgICAgICAgICAgQHByaXZhdGVcbiAgICAgICAgICAgIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSB0cmlnZ2VyaW5nIG1vdXNlIGV2ZW50LiAqL1xuICAgICAgICBfbW91c2VEcmFnOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBwb2ludCA9IFt0aGlzLl9yb3VuZChldmVudC5jbGllbnRYIC0gdGhpcy5vZmZzZXQubGVmdCksXG4gICAgICAgICAgICB0aGlzLl9yb3VuZChldmVudC5jbGllbnRZIC0gdGhpcy5vZmZzZXQudG9wKV07XG4gICAgICAgICAgICB0aGlzLmN1ckxpbmUucHVzaChwb2ludCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLmxhc3RQb2ludFswXSwgdGhpcy5sYXN0UG9pbnRbMV0pO1xuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHBvaW50WzBdLCBwb2ludFsxXSk7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIHRoaXMubGFzdFBvaW50ID0gcG9pbnQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqIEVuZCBhIGxpbmUuXG4gICAgICAgICAgICBAbWVtYmVyb2YgU2lnbmF0dXJlXG4gICAgICAgICAgICBAcHJpdmF0ZVxuICAgICAgICAgICAgQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIHRyaWdnZXJpbmcgbW91c2UgZXZlbnQuICovXG4gICAgICAgIF9tb3VzZVN0b3A6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VyTGluZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBldmVudC5jbGllbnRZICs9IHRoaXMub3B0aW9ucy50aGlja25lc3M7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW91c2VEcmFnKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGFzdFBvaW50ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY3VyTGluZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9jaGFuZ2VkKGV2ZW50KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKiogUm91bmQgdG8gdHdvIGRlY2ltYWwgcG9pbnRzLlxuICAgICAgICAgICAgQG1lbWJlcm9mIFNpZ25hdHVyZVxuICAgICAgICAgICAgQHByaXZhdGVcbiAgICAgICAgICAgIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcm91bmQuXG4gICAgICAgICAgICBAcmV0dXJuIHtudW1iZXJ9IFRoZSByb3VuZGVkIHZhbHVlLiAqL1xuICAgICAgICBfcm91bmQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKiBDb252ZXJ0IHRoZSBjYXB0dXJlZCBsaW5lcyB0byBKU09OIHRleHQuXG4gICAgICAgICAgICBAbWVtYmVyb2YgU2lnbmF0dXJlXG4gICAgICAgICAgICBAcmV0dXJuIHtzdHJpbmd9IFRoZSBKU09OIHRleHQgdmVyc2lvbiBvZiB0aGUgbGluZXMuXG4gICAgICAgICAgICBAZXhhbXBsZSB2YXIganNvbiA9ICQoc2VsZWN0b3IpLnNpZ25hdHVyZSgndG9KU09OJykgKi9cbiAgICAgICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3tcImxpbmVzXCI6WycgKyAkLm1hcCh0aGlzLmxpbmVzLCBmdW5jdGlvbiAobGluZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnWycgKyAkLm1hcChsaW5lLCBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdbJyArIHBvaW50ICsgJ10nO1xuICAgICAgICAgICAgICAgIH0pICsgJ10nO1xuICAgICAgICAgICAgfSkgKyAnXX0nO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKiBDb252ZXJ0IHRoZSBjYXB0dXJlZCBsaW5lcyB0byBTVkcgdGV4dC5cbiAgICAgICAgICAgIEBtZW1iZXJvZiBTaWduYXR1cmVcbiAgICAgICAgICAgIEByZXR1cm4ge3N0cmluZ30gVGhlIFNWRyB0ZXh0IHZlcnNpb24gb2YgdGhlIGxpbmVzLlxuICAgICAgICAgICAgQGV4YW1wbGUgdmFyIHN2ZyA9ICQoc2VsZWN0b3IpLnNpZ25hdHVyZSgndG9TVkcnKSAqL1xuICAgICAgICB0b1NWRzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGF0dHJzMSA9ICh0aGlzLm9wdGlvbnMuc3ZnU3R5bGVzID8gJ3N0eWxlPVwiZmlsbDogJyArIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kICsgJztcIicgOlxuICAgICAgICAgICAgICAgICdmaWxsPVwiJyArIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kICsgJ1wiJyk7XG4gICAgICAgICAgICB2YXIgYXR0cnMyID0gKHRoaXMub3B0aW9ucy5zdmdTdHlsZXMgP1xuICAgICAgICAgICAgICAgICdzdHlsZT1cImZpbGw6IG5vbmU7IHN0cm9rZTogJyArIHRoaXMub3B0aW9ucy5jb2xvciArICc7IHN0cm9rZS13aWR0aDogJyArIHRoaXMub3B0aW9ucy50aGlja25lc3MgKyAnO1wiJyA6XG4gICAgICAgICAgICAgICAgJ2ZpbGw9XCJub25lXCIgc3Ryb2tlPVwiJyArIHRoaXMub3B0aW9ucy5jb2xvciArICdcIiBzdHJva2Utd2lkdGg9XCInICsgdGhpcy5vcHRpb25zLnRoaWNrbmVzcyArICdcIicpO1xuICAgICAgICAgICAgcmV0dXJuICc8P3htbCB2ZXJzaW9uPVwiMS4wXCI/PlxcbjwhRE9DVFlQRSBzdmcgUFVCTElDICcgK1xuICAgICAgICAgICAgICAgICdcIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGRcIj5cXG4nICtcbiAgICAgICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNWNtXCIgaGVpZ2h0PVwiMTVjbVwiPlxcbicgK1xuICAgICAgICAgICAgICAgICdcdDxnICcgKyBhdHRyczEgKyAnPlxcbicgK1xuICAgICAgICAgICAgICAgICdcdFx0PHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiJyArIHRoaXMuY2FudmFzLndpZHRoICsgJ1wiIGhlaWdodD1cIicgKyB0aGlzLmNhbnZhcy5oZWlnaHQgKyAnXCIvPlxcbicgK1xuICAgICAgICAgICAgICAgICdcdFx0PGcgJyArIGF0dHJzMiArICc+XFxuJyArXG4gICAgICAgICAgICAgICAgJC5tYXAodGhpcy5saW5lcywgZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdcdFx0XHQ8cG9seWxpbmUgcG9pbnRzPVwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAkLm1hcChsaW5lLCBmdW5jdGlvbiAocG9pbnQpIHsgcmV0dXJuIHBvaW50ICsgJyc7IH0pLmpvaW4oJyAnKSArICdcIi8+XFxuJztcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcnKSArXG4gICAgICAgICAgICAgICAgJ1x0XHQ8L2c+XFxuXHQ8L2c+XFxuPC9zdmc+XFxuJztcbiAgICAgICAgfSxcblxuICAgICAgICAvKiogQ29udmVydCB0aGUgY2FwdHVyZWQgbGluZXMgdG8gYW4gaW1hZ2UgZW5jb2RlZCBpbiBhIDxjb2RlPmRhdGE6PC9jb2RlPiBVUkwuXG4gICAgICAgICAgICBAbWVtYmVyb2YgU2lnbmF0dXJlXG4gICAgICAgICAgICBAcGFyYW0ge3N0cmluZ30gW3R5cGU9J2ltYWdlL3BuZyddIFRoZSBNSU1FIHR5cGUgb2YgdGhlIGltYWdlLlxuICAgICAgICAgICAgQHBhcmFtIHtudW1iZXJ9IFtxdWFsaXR5PTAuOTJdIFRoZSBpbWFnZSBxdWFsaXR5LCBiZXR3ZWVuIDAgYW5kIDEuXG4gICAgICAgICAgICBAcmV0dXJuIHtzdHJpbmd9IFRoZSBzaWduYXR1cmUgYXMgYSBkYXRhOiBVUkwgaW1hZ2UuXG4gICAgICAgICAgICBAZXhhbXBsZSB2YXIgZGF0YSA9ICQoc2VsZWN0b3IpLnNpZ25hdHVyZSgndG9EYXRhVVJMJywgJ2ltYWdlL2pwZWcnKSAqL1xuICAgICAgICB0b0RhdGFVUkw6IGZ1bmN0aW9uICh0eXBlLCBxdWFsaXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMudG9EYXRhVVJMKHR5cGUsIHF1YWxpdHkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKiBEcmF3IGEgc2lnbmF0dXJlIGZyb20gaXRzIEpTT04gb3IgU1ZHIGRlc2NyaXB0aW9uIG9yIDxjb2RlPmRhdGE6PC9jb2RlPiBVUkwuXG4gICAgICAgICAgICA8cD5Ob3RlIHRoYXQgZHJhd2luZyBhIDxjb2RlPmRhdGE6PC9jb2RlPiBVUkwgZG9lcyBub3QgcmVjb25zdHJ1Y3QgdGhlIGludGVybmFsIHJlcHJlc2VudGF0aW9uITwvcD5cbiAgICAgICAgICAgIEBtZW1iZXJvZiBTaWduYXR1cmVcbiAgICAgICAgICAgIEBwYXJhbSB7b2JqZWN0fHN0cmluZ30gc2lnIEFuIG9iamVjdCB3aXRoIGF0dHJpYnV0ZSA8Y29kZT5saW5lczwvY29kZT4gYmVpbmcgYW4gYXJyYXkgb2YgYXJyYXlzIG9mIHBvaW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIHRoZSB0ZXh0IHZlcnNpb24gb2YgdGhlIEpTT04gb3IgU1ZHIG9yIGEgPGNvZGU+ZGF0YTo8L2NvZGU+IFVSTCBjb250YWluaW5nIGFuIGltYWdlLlxuICAgICAgICAgICAgQGV4YW1wbGUgJChzZWxlY3Rvcikuc2lnbmF0dXJlKCdkcmF3Jywgc2lnQXNKU09OKSAqL1xuICAgICAgICBkcmF3OiBmdW5jdGlvbiAoc2lnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbGVhcih0cnVlKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2lnID09PSAnc3RyaW5nJyAmJiBzaWcuaW5kZXhPZignZGF0YTonKSA9PT0gMCkgeyAvLyBEYXRhIFVSTFxuICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdEYXRhVVJMKHNpZywgdGhpcy5vcHRpb25zLnNjYWxlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNpZyA9PT0gJ3N0cmluZycgJiYgc2lnLmluZGV4T2YoJzxzdmcnKSA+IC0xKSB7IC8vIFNWR1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdTVkcoc2lnLCB0aGlzLm9wdGlvbnMuc2NhbGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmF3SlNPTihzaWcsIHRoaXMub3B0aW9ucy5zY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jaGFuZ2VkKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqIERyYXcgYSBzaWduYXR1cmUgZnJvbSBpdHMgSlNPTiBkZXNjcmlwdGlvbi5cbiAgICAgICAgICAgIEBtZW1iZXJvZiBTaWduYXR1cmVcbiAgICAgICAgICAgIEBwcml2YXRlXG4gICAgICAgICAgICBAcGFyYW0ge29iamVjdHxzdHJpbmd9IHNpZyBBbiBvYmplY3Qgd2l0aCBhdHRyaWJ1dGUgPGNvZGU+bGluZXM8L2NvZGU+IGJlaW5nIGFuIGFycmF5IG9mIGFycmF5cyBvZiBwb2ludHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvciB0aGUgdGV4dCB2ZXJzaW9uIG9mIHRoZSBKU09OLlxuICAgICAgICAgICAgQHBhcmFtIHtudW1iZXJ9IHNjYWxlIEEgc2NhbGluZyBmYWN0b3IuICovXG4gICAgICAgIF9kcmF3SlNPTjogZnVuY3Rpb24gKHNpZywgc2NhbGUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2lnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHNpZyA9IEpTT04ucGFyc2Uoc2lnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGluZXMgPSBzaWcubGluZXMgfHwgW107XG4gICAgICAgICAgICB2YXIgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgICAgICAkLmVhY2godGhpcy5saW5lcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAkLmVhY2godGhpcywgZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4W2kgPT09IDAgPyAnbW92ZVRvJyA6ICdsaW5lVG8nXSh0aGlzWzBdICogc2NhbGUsIHRoaXNbMV0gKiBzY2FsZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqIERyYXcgYSBzaWduYXR1cmUgZnJvbSBpdHMgU1ZHIGRlc2NyaXB0aW9uLlxuICAgICAgICAgICAgQG1lbWJlcm9mIFNpZ25hdHVyZVxuICAgICAgICAgICAgQHByaXZhdGVcbiAgICAgICAgICAgIEBwYXJhbSB7c3RyaW5nfSBzaWcgVGhlIHRleHQgdmVyc2lvbiBvZiB0aGUgU1ZHLlxuICAgICAgICAgICAgQHBhcmFtIHtudW1iZXJ9IHNjYWxlIEEgc2NhbGluZyBmYWN0b3IuICovXG4gICAgICAgIF9kcmF3U1ZHOiBmdW5jdGlvbiAoc2lnLCBzY2FsZSkge1xuICAgICAgICAgICAgdmFyIGxpbmVzID0gdGhpcy5saW5lcyA9IFtdO1xuICAgICAgICAgICAgJChzaWcpLmZpbmQoJ3BvbHlsaW5lJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmUgPSBbXTtcbiAgICAgICAgICAgICAgICAkLmVhY2goJCh0aGlzKS5hdHRyKCdwb2ludHMnKS5zcGxpdCgnICcpLCBmdW5jdGlvbiAoaSwgcG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHh5ID0gcG9pbnQuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS5wdXNoKFtwYXJzZUZsb2F0KHh5WzBdKSwgcGFyc2VGbG9hdCh4eVsxXSldKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgICAgICAkLmVhY2godGhpcy5saW5lcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAkLmVhY2godGhpcywgZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4W2kgPT09IDAgPyAnbW92ZVRvJyA6ICdsaW5lVG8nXSh0aGlzWzBdICogc2NhbGUsIHRoaXNbMV0gKiBzY2FsZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqIERyYXcgYSBzaWduYXR1cmUgZnJvbSBpdHMgPGNvZGU+ZGF0YTo8L2NvZGU+IFVSTC5cbiAgICAgICAgICAgIDxwPk5vdGUgdGhhdCB0aGlzIGRvZXMgbm90IHJlY29uc3RydWN0IHRoZSBpbnRlcm5hbCByZXByZXNlbnRhdGlvbiE8L3A+XG4gICAgICAgICAgICBAbWVtYmVyb2YgU2lnbmF0dXJlXG4gICAgICAgICAgICBAcHJpdmF0ZVxuICAgICAgICAgICAgQHBhcmFtIHtzdHJpbmd9IHNpZyBUaGUgPGNvZGU+ZGF0YTo8L2NvZGU+IFVSTCBjb250YWluaW5nIGFuIGltYWdlLlxuICAgICAgICAgICAgQHBhcmFtIHtudW1iZXJ9IHNjYWxlIEEgc2NhbGluZyBmYWN0b3IuICovXG4gICAgICAgIF9kcmF3RGF0YVVSTDogZnVuY3Rpb24gKHNpZywgc2NhbGUpIHtcbiAgICAgICAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmN0eDtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLCAwLCAwLCBpbWFnZS53aWR0aCAqIHNjYWxlLCBpbWFnZS5oZWlnaHQgKiBzY2FsZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc2lnO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgYW55IGRyYXdpbmcgaGFzIG9jY3VycmVkLlxuICAgICAgICAgICAgQG1lbWJlcm9mIFNpZ25hdHVyZVxuICAgICAgICAgICAgQHJldHVybiB7Ym9vbGVhbn0gPGNvZGU+dHJ1ZTwvY29kZT4gaWYgbm90IHNpZ25lZCwgPGNvZGU+ZmFsc2U8L2NvZGU+IGlmIHNpZ25lZC5cbiAgICAgICAgICAgIEBleGFtcGxlIGlmICgkKHNlbGVjdG9yKS5zaWduYXR1cmUoJ2lzRW1wdHknKSkgLi4uICovXG4gICAgICAgIGlzRW1wdHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmVzLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKiogUmVtb3ZlIHRoZSBzaWduYXR1cmUgZnVuY3Rpb25hbGl0eS5cbiAgICAgICAgICAgIEBtZW1iZXJvZiBTaWduYXR1cmVcbiAgICAgICAgICAgIEBwcml2YXRlICovXG4gICAgICAgIF9kZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3ModGhpcy53aWRnZXRGdWxsTmFtZSB8fCB0aGlzLndpZGdldEJhc2VDbGFzcyk7XG4gICAgICAgICAgICAkKHRoaXMuY2FudmFzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5jdHggPSB0aGlzLmxpbmVzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX21vdXNlRGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGlmICghJC5XaWRnZXQucHJvdG90eXBlLl9kZXN0cm95KSB7XG4gICAgICAgICQuZXh0ZW5kKHNpZ25hdHVyZU92ZXJyaWRlcywge1xuICAgICAgICAgICAgLyogUmVtb3ZlIHRoZSBzaWduYXR1cmUgZnVuY3Rpb25hbGl0eS4gKi9cbiAgICAgICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgJC5XaWRnZXQucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTsgLy8gQmFzZSB3aWRnZXQgaGFuZGxpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCQuV2lkZ2V0LnByb3RvdHlwZS5fZ2V0Q3JlYXRlT3B0aW9ucyA9PT0gJC5ub29wKSB7XG4gICAgICAgICQuZXh0ZW5kKHNpZ25hdHVyZU92ZXJyaWRlcywge1xuICAgICAgICAgICAgLyogUmVzdG9yZSB0aGUgbWV0YWRhdGEgZnVuY3Rpb25hbGl0eS4gKi9cbiAgICAgICAgICAgIF9nZXRDcmVhdGVPcHRpb25zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICQubWV0YWRhdGEgJiYgJC5tZXRhZGF0YS5nZXQodGhpcy5lbGVtZW50WzBdKVt0aGlzLndpZGdldE5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkLndpZGdldCgna2J3LnNpZ25hdHVyZScsICQudWkubW91c2UsIHNpZ25hdHVyZU92ZXJyaWRlcyk7XG5cbiAgICAvLyBNYWtlIHNvbWUgdGhpbmdzIG1vcmUgYWNjZXNzaWJsZVxuICAgICQua2J3LnNpZ25hdHVyZS5vcHRpb25zID0gJC5rYncuc2lnbmF0dXJlLnByb3RvdHlwZS5vcHRpb25zO1xuXG59KShqUXVlcnkpOyIsICJpbXBvcnQgXCIuLzAtc2lnbmF0dXJlLmpzXCI7XG5cbmltcG9ydCB7IEJhc2VXaWRnZXQgfSBmcm9tIFwiLi4vY29yZS9jb3JlLndpZGdldC5qc1wiO1xuXG4vKipcbiAqIF9fUHJpbWVGYWNlcyBTaWduYXR1cmUgV2lkZ2V0X19cbiAqXG4gKiBTaWduYXR1cmUgaXMgdXNlZCB0byBkcmF3IGEgc2lnbmF0dXJlIGFzIGFuIGlucHV0LiBWYXJpb3VzIG9wdGlvbnMgc3VjaCBhcyBiYWNrZ3JvdW5kIGNvbG9yLCBmb3JlZ3JvdW5kIGNvbG9yLFxuICogdGhpY2tuZXNzIGFyZSBhdmFpbGFibGUgZm9yIGN1c3RvbWl6YXRpb24uIFNpZ25hdHVyZSBhbHNvIHN1cHBvcnRzIHRvdWNoIGVuYWJsZWQgZGV2aWNlcyBhbmQgbGVnYWN5IGJyb3dzZXJzIHdpdGhvdXRcbiAqIGNhbnZhcyBzdXBwb3J0LlxuICpcbiAqIEB0eXBlZGVmIFByaW1lRmFjZXMud2lkZ2V0LlNpZ25hdHVyZS5PbkNoYW5nZUNhbGxiYWNrIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIHRoZSBzaWduYXR1cmUgY2hhbmdlcy4gU2VlIGFsc29cbiAqIHtAbGluayBTaWduYXR1cmVDZmcub25jaGFuZ2V9LlxuICogQHRoaXMge1ByaW1lRmFjZXMud2lkZ2V0LlNpZ25hdHVyZX0gUHJpbWVGYWNlcy53aWRnZXQuU2lnbmF0dXJlLk9uQ2hhbmdlQ2FsbGJhY2tcbiAqXG4gKiBAcHJvcCB7SlF1ZXJ5fSBjYW52YXMgVGhlIGNhbnZhcyBlbGVtZW50IHdoZXJlIHRoZSBzaWduYXR1cmUgaXMgZHJhd24uXG4gKiBAcHJvcCB7SlF1ZXJ5fSBpbnB1dEJhc2U2NCBUaGUgRE9NIGVsZW1lbnQgZm9yIHRoZSBoaWRkZW4gaW5wdXQgZWxlbWVudCBzdG9yaW5nIHRoZSBiYXNlIDY0IHZhbHVlLlxuICogQHByb3Age0pRdWVyeX0gaW5wdXRKc29uIFRoZSBET00gZWxlbWVudCBmb3IgdGhlIGhpZGRlbiBpbnB1dCBzdG9yaW5nIHRoZSB2YWx1ZSBvZiB0aGlzIHdpZGdldC5cbiAqIEBwcm9wIHtKUXVlcnl9IGlucHV0VGV4dCBUaGUgRE9NIGVsZW1lbnQgZm9yIHRoZSBoaWRkZW4gaW5wdXQgc3RvcmluZyB0aGUgcHJpbnRlZCB0ZXh0IHZhbHVlIG9mIHRoaXMgd2lkZ2V0LlxuICpcbiAqIEBpbnRlcmZhY2Uge1ByaW1lRmFjZXMud2lkZ2V0LlNpZ25hdHVyZUNmZ30gY2ZnIFRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUge0BsaW5rICBTaWduYXR1cmV8IFNpZ25hdHVyZSB3aWRnZXR9LlxuICogWW91IGNhbiBhY2Nlc3MgdGhpcyBjb25maWd1cmF0aW9uIHZpYSB7QGxpbmsgUHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldC5jZmd8QmFzZVdpZGdldC5jZmd9LiBQbGVhc2Ugbm90ZSB0aGF0IHRoaXNcbiAqIGNvbmZpZ3VyYXRpb24gaXMgdXN1YWxseSBtZWFudCB0byBiZSByZWFkLW9ubHkgYW5kIHNob3VsZCBub3QgYmUgbW9kaWZpZWQuXG4gKiBAZXh0ZW5kcyB7UHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldENmZ30gY2ZnXG4gKiBAZXh0ZW5kcyB7SlF1ZXJ5U2lnbmF0dXJlLlNpZ25hdHVyZVNldHRpbmdzfSBjZmdcbiAqXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2ZnLmJhc2U2NCBXaGV0aGVyIHRoZSBzaWduYXR1cmUgZGF0YSBzaG91bGQgYmUgc2F2ZWQgYXMgYSBiYXNlIDY0IHN0cmluZy5cbiAqIEBwcm9wIHtQcmltZUZhY2VzLndpZGdldC5TaWduYXR1cmUuT25DaGFuZ2VDYWxsYmFja30gY2ZnLm9uY2hhbmdlIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIHRoZSBzaWduYXR1cmVcbiAqIGNoYW5nZXMuXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2ZnLnJlYWRvbmx5IFdoZXRoZXIgdGhlIHNpZ25hdHVyZSB3aWRnZXQgaXMgcmVhZG9ubHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBTaWduYXR1cmUgZXh0ZW5kcyBCYXNlV2lkZ2V0IHtcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLlBhcnRpYWxXaWRnZXRDZmc8VENmZz59IGNmZ1xuICAgICAqL1xuICAgIGluaXQoY2ZnKSB7XG4gICAgICAgIHN1cGVyLmluaXQoY2ZnKTtcbiAgICAgICAgdGhpcy5pbnB1dEpzb24gPSB0aGlzLmpxLmNoaWxkcmVuKHRoaXMuanFJZCArICdfdmFsdWUnKTtcbiAgICAgICAgdGhpcy5pbnB1dFRleHQgPSB0aGlzLmpxLmNoaWxkcmVuKHRoaXMuanFJZCArICdfdGV4dCcpO1xuICAgICAgICB0aGlzLmNmZy5ub3RBdmFpbGFibGUgPSAnPHA+WW91ciBicm93c2VyIGRvZXMgTk9UIHN1cHBvcnQgc2lnbmluZzwvcD4nO1xuICAgICAgICB0aGlzLmNmZy5zeW5jRmllbGQgPSB0aGlzLmlucHV0SnNvbjtcbiAgICAgICAgdGhpcy5jZmcudGFiaW5kZXggPSB0aGlzLmNmZy50YWJpbmRleCB8fCAnMCc7XG4gICAgICAgIHRoaXMuY2ZnLmZvbnRTaXplID0gdGhpcy5jZmcuZm9udFNpemUgfHwgNDA7XG4gICAgICAgIHRoaXMuY2ZnLmZvbnRGYW1pbHkgPSB0aGlzLmNmZy5mb250RmFtaWx5IHx8ICdCcnVzaCBTY3JpcHQgTVQsIGN1cnNpdmUnO1xuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5qcS5zaWduYXR1cmUoJ2Rlc3Ryb3knKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBjbGllbnQtc2lkZSBwYXJ0cyBvZiB0aGlzIHdpZGdldC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zZXR1cEJhc2U2NCgpO1xuXG4gICAgICAgIHRoaXMuY2ZnLmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICR0aGlzLmhhbmRsZUNoYW5nZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgc2lnbmF0dXJlIFxuICAgICAgICB0aGlzLmpxLnNpZ25hdHVyZSh0aGlzLmNmZyk7XG5cbiAgICAgICAgLy9kaXNhYmxlIHRoZSBzaWduYXR1cmVcbiAgICAgICAgaWYgKHRoaXMuY2ZnLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGJpbmQgYWNjZXNzaWJpbGl0eSBldmVudHNcbiAgICAgICAgdGhpcy5zZXR1cENhbnZhcygpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcblxuICAgICAgICAvLyBhdHRlbXB0IHRvIGRyYXcgdGhlIHNpZ25hdHVyZSBmcm9tIHRoZSBKU09OIHZhbHVlXG4gICAgICAgIGNvbnN0IGpzb24gPSB0aGlzLmlucHV0SnNvbi52YWwoKTtcbiAgICAgICAgaWYgKGpzb24pIHtcbiAgICAgICAgICAgIHRoaXMuZHJhdyhqc29uKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5qcS5zaWduYXR1cmUoJ2lzRW1wdHknKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHRoZSBKU09OIGxvYWQgZmFpbHMsIGF0dGVtcHQgdG8gZHJhdyB0aGUgc2lnbmF0dXJlIGZyb20gdGhlIHRleHQgdmFsdWVcbiAgICAgICAgY29uc3QgdGV4dFZhbHVlID0gdGhpcy5pbnB1dFRleHQudmFsKCk7XG4gICAgICAgIGlmICh0ZXh0VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2lnbmF0dXJlRnJvbVRleHQodGV4dFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIGJhc2U2NCBjb25maWd1cmF0aW9uIGZvciB0aGUgc2lnbmF0dXJlIHdpZGdldC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHNldHVwQmFzZTY0KCkge1xuICAgICAgICBpZiAodGhpcy5jZmcuYmFzZTY0KSB7XG4gICAgICAgICAgICB0aGlzLmNmZy5zdmdTdHlsZXMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pbnB1dEJhc2U2NCA9IHRoaXMuanEuY2hpbGRyZW4odGhpcy5qcUlkICsgJ19iYXNlNjQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIGJhc2U2NCBjb25maWd1cmF0aW9uIGZvciB0aGUgc2lnbmF0dXJlIHdpZGdldC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHNldHVwQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMuanEuY2hpbGRyZW4oJ2NhbnZhcycpO1xuXG4gICAgICAgIC8vIGFjY2Vzc2liaWxpdHlcbiAgICAgICAgdGhpcy5jYW52YXMuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6IFByaW1lRmFjZXMuZ2V0QXJpYUxhYmVsKCdzaWduYXR1cmVMYWJlbCcsIHRoaXMuY2ZnLmFyaWFMYWJlbCB8fCAnU2lnbiBoZXJlJyksXG4gICAgICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogdGhpcy5jZmcuYXJpYUxhYmVsbGVkQnksXG4gICAgICAgICAgICAnaWQnOiB0aGlzLmlkICsgJ19jYW52YXMnLFxuICAgICAgICAgICAgJ3JvbGUnOiAnaW1nJyxcbiAgICAgICAgICAgICd0YWJpbmRleCc6IHRoaXMuY2ZnLnJlYWRvbmx5ID8gXCItMVwiIDogKHRoaXMuY2ZnLnRhYmluZGV4IHx8ICcwJyksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGV2ZW50IGhhbmRsZXJzIHRvIHRoZSBzaWduYXR1cmUgY2FudmFzLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuY2ZnLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb2N1cyBmcm9tIGxhYmVsXG4gICAgICAgIGlmICh0aGlzLmNmZy5hcmlhTGFiZWxsZWRCeSkge1xuICAgICAgICAgICAgJChQcmltZUZhY2VzLmVzY2FwZUNsaWVudElkKHRoaXMuY2ZnLmFyaWFMYWJlbGxlZEJ5KSkub24oJ2NsaWNrJywgKCkgPT4gJHRoaXMuY2FudmFzLnRyaWdnZXIoJ2ZvY3VzJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXZlbnRzXG4gICAgICAgIHRoaXMuY2FudmFzLm9mZignbW91c2VlbnRlciBtb3VzZWxlYXZlIG1vdXNlZG93biBmb2N1cyBibHVyIGtleWRvd24nKVxuICAgICAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgKCkgPT4gJHRoaXMuanEuYWRkQ2xhc3MoJ3VpLXN0YXRlLWhvdmVyJykpXG4gICAgICAgICAgICAub24oJ21vdXNlbGVhdmUnLCAoKSA9PiAkdGhpcy5qcS5yZW1vdmVDbGFzcygndWktc3RhdGUtaG92ZXInKSlcbiAgICAgICAgICAgIC5vbignbW91c2Vkb3duJywgKCkgPT4gJHRoaXMuY2FudmFzLnRyaWdnZXIoJ2ZvY3VzJykpXG4gICAgICAgICAgICAub24oJ2ZvY3VzJywgKCkgPT4gJHRoaXMuanEuYWRkQ2xhc3MoJ3VpLXN0YXRlLWZvY3VzJykpXG4gICAgICAgICAgICAub24oJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJHRoaXMuanEucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWhvdmVyIHVpLXN0YXRlLWZvY3VzJyk7XG4gICAgICAgICAgICAgICAgJHRoaXMudXBkYXRlQmFzZTY0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHByaW50ZWRUZXh0ID0gJHRoaXMuaW5wdXRUZXh0LnZhbCgpIHx8ICcnO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdCYWNrc3BhY2UnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdEZWxldGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByaW50ZWRUZXh0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludGVkVGV4dCA9IHByaW50ZWRUZXh0LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnRlZFRleHQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoUHJpbWVGYWNlcy51dGlscy5pc1ByaW50YWJsZUtleShldmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludGVkVGV4dCArPSBldmVudC5rZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmIChwcmludGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5pbnB1dFRleHQudmFsKHByaW50ZWRUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuY3JlYXRlU2lnbmF0dXJlRnJvbVRleHQocHJpbnRlZFRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGlzIHNpZ25hdHVyZSB3aWRnZXQsIHJlbW92aW5nIGFsbCBkcmF3biBsaW5lcy5cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5qcS5zaWduYXR1cmUoJ2NsZWFyJyk7XG4gICAgICAgIHRoaXMuaW5wdXRKc29uLnZhbCgnJyk7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0LnZhbCgnJyk7XG4gICAgICAgIHRoaXMudXBkYXRlQmFzZTY0KHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYXdzIHRoZSBnaXZlbiBsaW5lIGRhdGEgdG8gdGhpcyBzaWduYXR1cmUgd2lkZ2V0IHZpZXdwb3J0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgSlF1ZXJ5U2lnbmF0dXJlLlNpZ25hdHVyZUpzb259IHZhbHVlIFRoZSBzaWduYXR1ZSBkYXRhIHRvIGRyYXcuXG4gICAgICovXG4gICAgZHJhdyh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuanEuc2lnbmF0dXJlKCdkcmF3JywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZm9yIHdoZW4gdGhlIHNpZ25hdHVyZSBoYXMgY2hhbmdlZC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGhhbmRsZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVCYXNlNjQoKTtcblxuICAgICAgICBpZiAodGhpcy5jZmcub25jaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuY2ZnLm9uY2hhbmdlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBiYXNlNjQgdmFsdWUgb2YgdGhlIHNpZ25hdHVyZSB3aWRnZXQuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjbGVhciAtIFdoZXRoZXIgdG8gY2xlYXIgdGhlIGJhc2U2NCB2YWx1ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHVwZGF0ZUJhc2U2NChjbGVhciA9IGZhbHNlKSB7XG4gICAgICAgIGlmICh0aGlzLmNmZy5iYXNlNjQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRCYXNlNjQudmFsKGNsZWFyID8gJycgOiB0aGlzLmNhbnZhc1swXS50b0RhdGFVUkwoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2lnbmF0dXJlIGZyb20gdGhlIGdpdmVuIHRleHQgdXNpbmcgU1ZHLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGhlIHRleHQgdG8gY29udmVydCBpbnRvIGEgc2lnbmF0dXJlLlxuICAgICAqL1xuICAgIGNyZWF0ZVNpZ25hdHVyZUZyb21UZXh0KHRleHQpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNbMF07XG4gICAgICAgIGNvbnN0IHdpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjdHguc2F2ZSgpXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNmZy5jb2xvciB8fCAnYmxhY2snO1xuICAgICAgICBjdHguZm9udCA9IGAke3RoaXMuY2ZnLmZvbnRTaXplfXB4ICR7dGhpcy5jZmcuZm9udEZhbWlseSB8fCAnQnJ1c2ggU2NyaXB0IE1ULCBjdXJzaXZlJ31gO1xuICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgMTAsIChoZWlnaHQgKyB0aGlzLmNmZy5mb250U2l6ZSkgLyAyKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoKTtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgdGhpcy5kcmF3KGNhbnZhcy50b0RhdGFVUkwoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZXMgdGhpcyBpbnB1dCBzbyB0aGF0IHRoZSB1c2VyIGNhbm5vdCBlbnRlciBhIHZhbHVlIGFueW1vcmUuXG4gICAgICovXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgUHJpbWVGYWNlcy51dGlscy5kaXNhYmxlSW5wdXRXaWRnZXQodGhpcy5qcSwgdGhpcy5pbnB1dEpzb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgdGhpcyBpbnB1dCBzbyB0aGF0IHRoZSB1c2VyIGNhbiBlbnRlciBhIHZhbHVlLlxuICAgICAqL1xuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgUHJpbWVGYWNlcy51dGlscy5lbmFibGVJbnB1dFdpZGdldCh0aGlzLmpxLCB0aGlzLmlucHV0SnNvbik7XG4gICAgfVxuXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Q0FTQyxTQUFVQSxJQUFHO0FBQ1Y7QUFVQSxNQUFJLHFCQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTZCckIsU0FBUztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsWUFBWTtBQUFBLE1BQ1osT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBLE1BQ1gsZ0JBQWdCO0FBQUEsTUFDaEIsaUJBQWlCO0FBQUEsTUFDakIsaUJBQWlCO0FBQUEsTUFDakIsY0FBYztBQUFBLE1BQ2QsT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBLE1BQ1gsWUFBWTtBQUFBLE1BQ1osV0FBVztBQUFBLE1BQ1gsUUFBUTtBQUFBLElBQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUtBLFNBQVMsV0FBWTtBQUNqQixXQUFLLFFBQVEsU0FBUyxLQUFLLGtCQUFrQixLQUFLLGVBQWU7QUFDakUsVUFBSTtBQUNBLGFBQUssU0FBU0EsR0FBRSxvQkFBb0IsS0FBSyxRQUFRLE1BQU0sSUFBSSxlQUN2RCxLQUFLLFFBQVEsT0FBTyxJQUFJLE9BQU8sS0FBSyxRQUFRLGVBQWUsV0FBVyxFQUFFLENBQUM7QUFDN0UsYUFBSyxRQUFRLE9BQU8sS0FBSyxNQUFNO0FBQUEsTUFDbkMsU0FDTyxHQUFHO0FBQ04sUUFBQUEsR0FBRSxLQUFLLE1BQU0sRUFBRSxPQUFPO0FBQ3RCLGFBQUssU0FBUztBQUNkLGFBQUssU0FB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

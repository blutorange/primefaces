import {
  BaseWidget
} from "./chunk-HGD6GSK5.js";
import "./chunk-YRJTWU7C.js";

// ../../../../../../.yarn/berry/cache/@melloware-coloris-npm-0.24.0-57e000fa81-10c0.zip/node_modules/@melloware/coloris/dist/esm/coloris.js
var Coloris = (() => {
  return ((window2, document2, Math2, undefined) => {
    const ctx = document2.createElement("canvas").getContext("2d");
    const currentColor = { r: 0, g: 0, b: 0, h: 0, s: 0, v: 0, a: 1 };
    let container, picker, colorArea, colorMarker, colorPreview, colorValue, clearButton, closeButton, hueSlider, hueMarker, alphaSlider, alphaMarker, currentEl, currentFormat, oldColor, keyboardNav, colorAreaDims = {};
    const settings = {
      el: "[data-coloris]",
      parent: "body",
      theme: "default",
      themeMode: "light",
      rtl: false,
      wrap: true,
      margin: 2,
      format: "hex",
      formatToggle: false,
      swatches: [],
      swatchesOnly: false,
      alpha: true,
      forceAlpha: false,
      focusInput: true,
      selectInput: false,
      inline: false,
      defaultColor: "#000000",
      clearButton: false,
      clearLabel: "Clear",
      closeButton: false,
      closeLabel: "Close",
      onChange: () => undefined,
      a11y: {
        open: "Open color picker",
        close: "Close color picker",
        clear: "Clear the selected color",
        marker: "Saturation: {s}. Brightness: {v}.",
        hueSlider: "Hue slider",
        alphaSlider: "Opacity slider",
        input: "Color value field",
        format: "Color format",
        swatch: "Color swatch",
        instruction: "Saturation and brightness selector. Use up, down, left and right arrow keys to select."
      }
    };
    const instances = {};
    let currentInstanceId = "";
    let defaultInstance = {};
    let hasInstance = false;
    function configure(options) {
      if (typeof options !== "object") {
        return;
      }
      for (const key in options) {
        switch (key) {
          case "el":
            bindFields(options.el);
            if (options.wrap !== false) {
              wrapFields(options.el);
            }
            break;
          case "parent":
            container = options.parent instanceof HTMLElement ? options.parent : document2.querySelector(options.parent);
            if (container) {
              container.appendChild(picker);
              settings.parent = options.parent;
              if (container === document2.body) {
                container = undefined;
              }
            }
            break;
          case "themeMode":
            settings.themeMode = options.themeMode;
            if (options.themeMode === "auto" && window2.matchMedia && window2.matchMedia("(prefers-color-scheme: dark)").matches) {
              settings.themeMode = "dark";
            }
          // The lack of a break statement is intentional
          case "theme":
            if (options.theme) {
              settings.theme = options.theme;
            }
            picker.className = "clr-picker clr-" + settings.theme + " clr-" + settings.themeMode;
            if (settings.inline) {
              updatePickerPosition();
            }
            break;
          case "rtl":
            settings.rtl = !!options.rtl;
            Array.from(document2.getElementsByClassName("clr-field")).forEach((field) => field.classList.toggle("clr-rtl", settings.rtl));
            break;
          case "margin":
            options.margin *= 1;
            settings.margin = !isNaN(options.margin) ? options.margin : settings.margin;
            break;
          case "wrap":
            if (options.el && options.wrap) {
              wrapFields(options.el);
            }
            break;
          case "formatToggle":
            settings.formatToggle = !!options.formatToggle;
            getEl("clr-format").style.display = settings.formatToggle ? "block" : "none";
            if (settings.formatToggle) {
              settings.format = "auto";
            }
            break;
          case "swatches":
            if (Array.isArray(options.swatches)) {
              const swatchesContainer = getEl("clr-swatches");
              const swatches = document2.createElement("div");
              swatchesContainer.textContent = "";
              options.swatches.forEach((swatch, i) => {
                const button = document2.createElement("button");
                button.setAttribute("type", "button");
                button.setAttribute("id", "clr-swatch-" + i);
                button.setAttribute("aria-labelledby", "clr-swatch-label clr-swatch-" + i);
                button.style.color = swatch;
                button.textContent = swatch;
                swatches.appendChild(button);
              });
              if (options.swatches.length) {
                swatchesContainer.appendChild(swatches);
              }
              settings.swatches = options.swatches.slice();
            }
            break;
          case "swatchesOnly":
            settings.swatchesOnly = !!options.swatchesOnly;
            picker.setAttribute("data-minimal", settings.swatchesOnly);
            break;
          case "alpha":
            settings.alpha = !!options.alpha;
            picker.setAttribute("data-alpha", settings.alpha);
            break;
          case "inline":
            settings.inline = !!options.inline;
            picker.setAttribute("data-inline", settings.inline);
            if (settings.inline) {
              const defaultColor = options.defaultColor || settings.defaultColor;
              currentFormat = getColorFormatFromStr(defaultColor);
              updatePickerPosition();
              setColorFromStr(defaultColor);
            }
            break;
          case "clearButton":
            if (typeof options.clearButton === "object") {
              if (options.clearButton.label) {
                settings.clearLabel = options.clearButton.label;
                clearButton.innerHTML = settings.clearLabel;
              }
              options.clearButton = options.clearButton.show;
            }
            settings.clearButton = !!options.clearButton;
            clearButton.style.display = settings.clearButton ? "block" : "none";
            break;
          case "clearLabel":
            settings.clearLabel = options.clearLabel;
            clearButton.innerHTML = settings.clearLabel;
            break;
          case "closeButton":
            settings.closeButton = !!options.closeButton;
            if (settings.closeButton) {
              picker.insertBefore(closeButton, colorPreview);
            } else {
              colorPreview.appendChild(closeButton);
            }
            break;
          case "closeLabel":
            settings.closeLabel = options.closeLabel;
            closeButton.innerHTML = settings.closeLabel;
            break;
          case "a11y":
            const labels = options.a11y;
            let update = false;
            if (typeof labels === "object") {
              for (const label in labels) {
                if (labels[label] && settings.a11y[label]) {
                  settings.a11y[label] = labels[label];
                  update = true;
                }
              }
            }
            if (update) {
              const openLabel = getEl("clr-open-label");
              const swatchLabel = getEl("clr-swatch-label");
              openLabel.innerHTML = settings.a11y.open;
              swatchLabel.innerHTML = settings.a11y.swatch;
              closeButton.setAttribute("aria-label", settings.a11y.close);
              clearButton.setAttribute("aria-label", settings.a11y.clear);
              hueSlider.setAttribute("aria-label", settings.a11y.hueSlider);
              alphaSlider.setAttribute("aria-label", settings.a11y.alphaSlider);
              colorValue.setAttribute("aria-label", settings.a11y.input);
              colorArea.setAttribute("aria-label", settings.a11y.instruction);
            }
            break;
          default:
            settings[key] = options[key];
        }
      }
    }
    function setVirtualInstance(selector, options) {
      if (typeof selector === "string" && typeof options === "object") {
        instances[selector] = options;
        hasInstance = true;
      }
    }
    function removeVirtualInstance(selector) {
      delete instances[selector];
      if (Object.keys(instances).length === 0) {
        hasInstance = false;
        if (selector === currentInstanceId) {
          resetVirtualInstance();
        }
      }
    }
    function attachVirtualInstance(element) {
      if (hasInstance) {
        const unsupportedOptions = ["el", "wrap", "rtl", "inline", "defaultColor", "a11y"];
        for (let selector in instances) {
          const options = instances[selector];
          if (element.matches(selector)) {
            currentInstanceId = selector;
            defaultInstance = {};
            unsupportedOptions.forEach((option) => delete options[option]);
            for (let option in options) {
              defaultInstance[option] = Array.isArray(settings[option]) ? settings[option].slice() : settings[option];
            }
            configure(options);
            break;
          }
        }
      }
    }
    function resetVirtualInstance() {
      if (Object.keys(defaultInstance).length > 0) {
        configure(defaultInstance);
        currentInstanceId = "";
        defaultInstance = {};
      }
    }
    function bindFields(selector) {
      if (selector instanceof HTMLElement) {
        selector = [selector];
      }
      if (Array.isArray(selector)) {
        selector.forEach((field) => {
          addListener(field, "click", openPicker);
          addListener(field, "input", updateColorPreview);
        });
      } else {
        addListener(document2, "click", selector, openPicker);
        addListener(document2, "input", selector, updateColorPreview);
      }
    }
    function openPicker(event) {
      if (settings.inline) {
        return;
      }
      attachVirtualInstance(event.target);
      currentEl = event.target;
      oldColor = currentEl.value;
      currentFormat = getColorFormatFromStr(oldColor);
      picker.classList.add("clr-open");
      updatePickerPosition();
      setColorFromStr(oldColor);
      if (settings.focusInput || settings.selectInput) {
        colorValue.focus({ preventScroll: true });
        colorValue.setSelectionRange(currentEl.selectionStart, currentEl.selectionEnd);
      }
      if (settings.selectInput) {
        colorValue.select();
      }
      if (keyboardNav || settings.swatchesOnly) {
        getFocusableElements().shift().focus();
      }
      currentEl.dispatchEvent(new Event("open", { bubbles: true }));
    }
    function updatePickerPosition() {
      if (!picker || !currentEl && !settings.inline) return;
      const parent = container;
      const scrollY = window2.scrollY;
      const pickerWidth = picker.offsetWidth;
      const pickerHeight = picker.offsetHeight;
      const reposition = { left: false, top: false };
      let parentStyle, parentMarginTop, parentBorderTop;
      let offset = { x: 0, y: 0 };
      if (parent) {
        parentStyle = window2.getComputedStyle(parent);
        parentMarginTop = parseFloat(parentStyle.marginTop);
        parentBorderTop = parseFloat(parentStyle.borderTopWidth);
        offset = parent.getBoundingClientRect();
        offset.y += parentBorderTop + scrollY;
      }
      if (!settings.inline) {
        const coords = currentEl.getBoundingClientRect();
        let left = coords.x;
        let top = scrollY + coords.y + coords.height + settings.margin;
        if (parent) {
          left -= offset.x;
          top -= offset.y;
          if (left + pickerWidth > parent.clientWidth) {
            left += coords.width - pickerWidth;
            reposition.left = true;
          }
          if (top + pickerHeight > parent.clientHeight - parentMarginTop) {
            if (pickerHeight + settings.margin <= coords.top - (offset.y - scrollY)) {
              top -= coords.height + pickerHeight + settings.margin * 2;
              reposition.top = true;
            }
          }
          top += parent.scrollTop;
        } else {
          if (left + pickerWidth > document2.documentElement.clientWidth) {
            left += coords.width - pickerWidth;
            reposition.left = true;
          }
          if (top + pickerHeight - scrollY > document2.documentElement.clientHeight) {
            if (pickerHeight + settings.margin <= coords.top) {
              top = scrollY + coords.y - pickerHeight - settings.margin;
              reposition.top = true;
            }
          }
        }
        picker.classList.toggle("clr-left", reposition.left);
        picker.classList.toggle("clr-top", reposition.top);
        picker.style.left = left + "px";
        picker.style.top = top + "px";
        offset.x += picker.offsetLeft;
        offset.y += picker.offsetTop;
      }
      colorAreaDims = {
        width: colorArea.offsetWidth,
        height: colorArea.offsetHeight,
        x: colorArea.offsetLeft + offset.x,
        y: colorArea.offsetTop + offset.y
      };
    }
    function wrapFields(selector) {
      if (selector instanceof HTMLElement) {
        wrapColorField(selector);
      } else if (Array.isArray(selector)) {
        selector.forEach(wrapColorField);
      } else {
        document2.querySelectorAll(selector).forEach(wrapColorField);
      }
    }
    function wrapColorField(field) {
      const parentNode = field.parentNode;
      if (!parentNode.classList.contains("clr-field")) {
        const wrapper = document2.createElement("div");
        let classes = "clr-field";
        if (settings.rtl || field.classList.contains("clr-rtl")) {
          classes += " clr-rtl";
        }
        wrapper.innerHTML = '<button type="button" aria-labelledby="clr-open-label"></button>';
        parentNode.insertBefore(wrapper, field);
        wrapper.className = classes;
        wrapper.style.color = field.value;
        wrapper.appendChild(field);
      }
    }
    function updateColorPreview(event) {
      const parent = event.target.parentNode;
      if (parent.classList.contains("clr-field")) {
        parent.style.color = event.target.value;
      }
    }
    function closePicker(revert) {
      if (currentEl && !settings.inline) {
        const prevEl = currentEl;
        if (revert) {
          currentEl = undefined;
          if (oldColor !== prevEl.value) {
            prevEl.value = oldColor;
            prevEl.dispatchEvent(new Event("input", { bubbles: true }));
          }
        }
        setTimeout(() => {
          if (oldColor !== prevEl.value) {
            prevEl.dispatchEvent(new Event("change", { bubbles: true }));
          }
        });
        picker.classList.remove("clr-open");
        if (hasInstance) {
          resetVirtualInstance();
        }
        prevEl.dispatchEvent(new Event("close", { bubbles: true }));
        if (settings.focusInput) {
          prevEl.focus({ preventScroll: true });
        }
        currentEl = undefined;
      }
    }
    function setColorFromStr(str) {
      const rgba = strToRGBA(str);
      const hsva = RGBAtoHSVA(rgba);
      updateMarkerA11yLabel(hsva.s, hsva.v);
      updateColor(rgba, hsva);
      hueSlider.value = hsva.h;
      picker.style.color = "hsl(" + hsva.h + ", 100%, 50%)";
      hueMarker.style.left = hsva.h / 360 * 100 + "%";
      colorMarker.style.left = colorAreaDims.width * hsva.s / 100 + "px";
      colorMarker.style.top = colorAreaDims.height - colorAreaDims.height * hsva.v / 100 + "px";
      alphaSlider.value = hsva.a * 100;
      alphaMarker.style.left = hsva.a * 100 + "%";
    }
    function getColorFormatFromStr(str) {
      const format = str.substring(0, 3).toLowerCase();
      if (format === "rgb" || format === "hsl") {
        return format;
      }
      return "hex";
    }
    function pickColor(color) {
      color = color !== undefined ? color : colorValue.value;
      if (currentEl) {
        currentEl.value = color;
        currentEl.dispatchEvent(new Event("input", { bubbles: true }));
      }
      if (settings.onChange) {
        settings.onChange.call(window2, color, currentEl);
      }
      document2.dispatchEvent(new CustomEvent("coloris:pick", { detail: { color, currentEl } }));
    }
    function setColorAtPosition(x, y) {
      const hsva = {
        h: hueSlider.value * 1,
        s: x / colorAreaDims.width * 100,
        v: 100 - y / colorAreaDims.height * 100,
        a: alphaSlider.value / 100
      };
      const rgba = HSVAtoRGBA(hsva);
      updateMarkerA11yLabel(hsva.s, hsva.v);
      updateColor(rgba, hsva);
      pickColor();
    }
    function updateMarkerA11yLabel(saturation, value) {
      let label = settings.a11y.marker;
      saturation = saturation.toFixed(1) * 1;
      value = value.toFixed(1) * 1;
      label = label.replace("{s}", saturation);
      label = label.replace("{v}", value);
      colorMarker.setAttribute("aria-label", label);
    }
    function getPointerPosition(event) {
      return {
        pageX: event.changedTouches ? event.changedTouches[0].pageX : event.pageX,
        pageY: event.changedTouches ? event.changedTouches[0].pageY : event.pageY
      };
    }
    function moveMarker(event) {
      const pointer = getPointerPosition(event);
      let x = pointer.pageX - colorAreaDims.x;
      let y = pointer.pageY - colorAreaDims.y;
      if (container) {
        y += container.scrollTop;
      }
      setMarkerPosition(x, y);
      event.preventDefault();
      event.stopPropagation();
    }
    function moveMarkerOnKeydown(offsetX, offsetY) {
      let x = colorMarker.style.left.replace("px", "") * 1 + offsetX;
      let y = colorMarker.style.top.replace("px", "") * 1 + offsetY;
      setMarkerPosition(x, y);
    }
    function setMarkerPosition(x, y) {
      x = x < 0 ? 0 : x > colorAreaDims.width ? colorAreaDims.width : x;
      y = y < 0 ? 0 : y > colorAreaDims.height ? colorAreaDims.height : y;
      colorMarker.style.left = x + "px";
      colorMarker.style.top = y + "px";
      setColorAtPosition(x, y);
      colorMarker.focus();
    }
    function updateColor(rgba, hsva) {
      if (rgba === void 0) {
        rgba = {};
      }
      if (hsva === void 0) {
        hsva = {};
      }
      let format = settings.format;
      for (const key in rgba) {
        currentColor[key] = rgba[key];
      }
      for (const key in hsva) {
        currentColor[key] = hsva[key];
      }
      const hex = RGBAToHex(currentColor);
      const opaqueHex = hex.substring(0, 7);
      colorMarker.style.color = opaqueHex;
      alphaMarker.parentNode.style.color = opaqueHex;
      alphaMarker.style.color = hex;
      colorPreview.style.color = hex;
      colorArea.style.display = "none";
      colorArea.offsetHeight;
      colorArea.style.display = "";
      alphaMarker.nextElementSibling.style.display = "none";
      alphaMarker.nextElementSibling.offsetHeight;
      alphaMarker.nextElementSibling.style.display = "";
      if (format === "mixed") {
        format = currentColor.a === 1 ? "hex" : "rgb";
      } else if (format === "auto") {
        format = currentFormat;
      }
      switch (format) {
        case "hex":
          colorValue.value = hex;
          break;
        case "rgb":
          colorValue.value = RGBAToStr(currentColor);
          break;
        case "hsl":
          colorValue.value = HSLAToStr(HSVAtoHSLA(currentColor));
          break;
      }
      document2.querySelector('.clr-format [value="' + format + '"]').checked = true;
    }
    function setHue() {
      const hue = hueSlider.value * 1;
      const x = colorMarker.style.left.replace("px", "") * 1;
      const y = colorMarker.style.top.replace("px", "") * 1;
      picker.style.color = "hsl(" + hue + ", 100%, 50%)";
      hueMarker.style.left = hue / 360 * 100 + "%";
      setColorAtPosition(x, y);
    }
    function setAlpha() {
      const alpha = alphaSlider.value / 100;
      alphaMarker.style.left = alpha * 100 + "%";
      updateColor({ a: alpha });
      pickColor();
    }
    function HSVAtoRGBA(hsva) {
      const saturation = hsva.s / 100;
      const value = hsva.v / 100;
      let chroma = saturation * value;
      let hueBy60 = hsva.h / 60;
      let x = chroma * (1 - Math2.abs(hueBy60 % 2 - 1));
      let m = value - chroma;
      chroma = chroma + m;
      x = x + m;
      const index = Math2.floor(hueBy60) % 6;
      const red = [chroma, x, m, m, x, chroma][index];
      const green = [x, chroma, chroma, x, m, m][index];
      const blue = [m, m, x, chroma, chroma, x][index];
      return {
        r: Math2.round(red * 255),
        g: Math2.round(green * 255),
        b: Math2.round(blue * 255),
        a: hsva.a
      };
    }
    function HSVAtoHSLA(hsva) {
      const value = hsva.v / 100;
      const lightness = value * (1 - hsva.s / 100 / 2);
      let saturation;
      if (lightness > 0 && lightness < 1) {
        saturation = Math2.round((value - lightness) / Math2.min(lightness, 1 - lightness) * 100);
      }
      return {
        h: hsva.h,
        s: saturation || 0,
        l: Math2.round(lightness * 100),
        a: hsva.a
      };
    }
    function RGBAtoHSVA(rgba) {
      const red = rgba.r / 255;
      const green = rgba.g / 255;
      const blue = rgba.b / 255;
      const xmax = Math2.max(red, green, blue);
      const xmin = Math2.min(red, green, blue);
      const chroma = xmax - xmin;
      const value = xmax;
      let hue = 0;
      let saturation = 0;
      if (chroma) {
        if (xmax === red) {
          hue = (green - blue) / chroma;
        }
        if (xmax === green) {
          hue = 2 + (blue - red) / chroma;
        }
        if (xmax === blue) {
          hue = 4 + (red - green) / chroma;
        }
        if (xmax) {
          saturation = chroma / xmax;
        }
      }
      hue = Math2.floor(hue * 60);
      return {
        h: hue < 0 ? hue + 360 : hue,
        s: Math2.round(saturation * 100),
        v: Math2.round(value * 100),
        a: rgba.a
      };
    }
    function strToRGBA(str) {
      const regex = /^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i;
      let match, rgba;
      ctx.fillStyle = "#000";
      ctx.fillStyle = str;
      match = regex.exec(ctx.fillStyle);
      if (match) {
        rgba = {
          r: match[3] * 1,
          g: match[4] * 1,
          b: match[5] * 1,
          a: match[6] * 1
        };
      } else {
        match = ctx.fillStyle.replace("#", "").match(/.{2}/g).map((h) => parseInt(h, 16));
        rgba = {
          r: match[0],
          g: match[1],
          b: match[2],
          a: 1
        };
      }
      return rgba;
    }
    function RGBAToHex(rgba) {
      let R = rgba.r.toString(16);
      let G = rgba.g.toString(16);
      let B = rgba.b.toString(16);
      let A = "";
      if (rgba.r < 16) {
        R = "0" + R;
      }
      if (rgba.g < 16) {
        G = "0" + G;
      }
      if (rgba.b < 16) {
        B = "0" + B;
      }
      if (settings.alpha && (rgba.a < 1 || settings.forceAlpha)) {
        const alpha = rgba.a * 255 | 0;
        A = alpha.toString(16);
        if (alpha < 16) {
          A = "0" + A;
        }
      }
      return "#" + R + G + B + A;
    }
    function RGBAToStr(rgba) {
      if (!settings.alpha || rgba.a === 1 && !settings.forceAlpha) {
        return "rgb(" + rgba.r + ", " + rgba.g + ", " + rgba.b + ")";
      } else {
        return "rgba(" + rgba.r + ", " + rgba.g + ", " + rgba.b + ", " + rgba.a + ")";
      }
    }
    function HSLAToStr(hsla) {
      if (!settings.alpha || hsla.a === 1 && !settings.forceAlpha) {
        return "hsl(" + hsla.h + ", " + hsla.s + "%, " + hsla.l + "%)";
      } else {
        return "hsla(" + hsla.h + ", " + hsla.s + "%, " + hsla.l + "%, " + hsla.a + ")";
      }
    }
    function init() {
      if (document2.getElementById("clr-picker")) return;
      container = undefined;
      picker = document2.createElement("div");
      picker.setAttribute("id", "clr-picker");
      picker.className = "clr-picker";
      picker.innerHTML = '<input id="clr-color-value" name="clr-color-value" class="clr-color" type="text" value="" spellcheck="false" aria-label="' + settings.a11y.input + '">' + ('<div id="clr-color-area" class="clr-gradient" role="application" aria-label="' + settings.a11y.instruction + '">') + '<div id="clr-color-marker" class="clr-marker" tabindex="0"></div></div><div class="clr-hue">' + ('<input id="clr-hue-slider" name="clr-hue-slider" type="range" min="0" max="360" step="1" aria-label="' + settings.a11y.hueSlider + '">') + '<div id="clr-hue-marker"></div></div><div class="clr-alpha">' + ('<input id="clr-alpha-slider" name="clr-alpha-slider" type="range" min="0" max="100" step="1" aria-label="' + settings.a11y.alphaSlider + '">') + '<div id="clr-alpha-marker"></div><span></span></div><div id="clr-format" class="clr-format"><fieldset class="clr-segmented">' + ("<legend>" + settings.a11y.format + "</legend>") + '<input id="clr-f1" type="radio" name="clr-format" value="hex"><label for="clr-f1">Hex</label><input id="clr-f2" type="radio" name="clr-format" value="rgb"><label for="clr-f2">RGB</label><input id="clr-f3" type="radio" name="clr-format" value="hsl"><label for="clr-f3">HSL</label><span></span></fieldset></div><div id="clr-swatches" class="clr-swatches"></div>' + ('<button type="button" id="clr-clear" class="clr-clear" aria-label="' + settings.a11y.clear + '">' + settings.clearLabel + "</button>") + '<div id="clr-color-preview" class="clr-preview">' + ('<button type="button" id="clr-close" class="clr-close" aria-label="' + settings.a11y.close + '">' + settings.closeLabel + "</button>") + "</div>" + ('<span id="clr-open-label" hidden>' + settings.a11y.open + "</span>") + ('<span id="clr-swatch-label" hidden>' + settings.a11y.swatch + "</span>");
      document2.body.appendChild(picker);
      colorArea = getEl("clr-color-area");
      colorMarker = getEl("clr-color-marker");
      clearButton = getEl("clr-clear");
      closeButton = getEl("clr-close");
      colorPreview = getEl("clr-color-preview");
      colorValue = getEl("clr-color-value");
      hueSlider = getEl("clr-hue-slider");
      hueMarker = getEl("clr-hue-marker");
      alphaSlider = getEl("clr-alpha-slider");
      alphaMarker = getEl("clr-alpha-marker");
      bindFields(settings.el);
      wrapFields(settings.el);
      addListener(picker, "mousedown", (event) => {
        picker.classList.remove("clr-keyboard-nav");
        event.stopPropagation();
      });
      addListener(colorArea, "mousedown", (event) => {
        addListener(document2, "mousemove", moveMarker);
      });
      addListener(colorArea, "contextmenu", (event) => {
        event.preventDefault();
      });
      addListener(colorArea, "touchstart", (event) => {
        document2.addEventListener("touchmove", moveMarker, { passive: false });
      });
      addListener(colorMarker, "mousedown", (event) => {
        addListener(document2, "mousemove", moveMarker);
      });
      addListener(colorMarker, "touchstart", (event) => {
        document2.addEventListener("touchmove", moveMarker, { passive: false });
      });
      addListener(colorValue, "change", (event) => {
        const value = colorValue.value;
        if (currentEl || settings.inline) {
          const color = value === "" ? value : setColorFromStr(value);
          pickColor(color);
        }
      });
      addListener(clearButton, "click", (event) => {
        pickColor("");
        closePicker();
      });
      addListener(closeButton, "click", (event) => {
        pickColor();
        closePicker();
      });
      addListener(getEl("clr-format"), "click", ".clr-format input", (event) => {
        currentFormat = event.target.value;
        updateColor();
        pickColor();
      });
      addListener(picker, "click", ".clr-swatches button", (event) => {
        setColorFromStr(event.target.textContent);
        pickColor();
        if (settings.swatchesOnly) {
          closePicker();
        }
      });
      addListener(document2, "mouseup", (event) => {
        document2.removeEventListener("mousemove", moveMarker);
      });
      addListener(document2, "touchend", (event) => {
        document2.removeEventListener("touchmove", moveMarker);
      });
      addListener(document2, "mousedown", (event) => {
        keyboardNav = false;
        picker.classList.remove("clr-keyboard-nav");
        closePicker();
      });
      addListener(document2, "keydown", (event) => {
        const key = event.key;
        const target = event.target;
        const shiftKey = event.shiftKey;
        const navKeys = ["Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
        if (key === "Escape") {
          closePicker(true);
        } else if (navKeys.includes(key)) {
          keyboardNav = true;
          picker.classList.add("clr-keyboard-nav");
        }
        if (key === "Tab" && target.matches(".clr-picker *")) {
          const focusables = getFocusableElements();
          const firstFocusable = focusables.shift();
          const lastFocusable = focusables.pop();
          if (shiftKey && target === firstFocusable) {
            lastFocusable.focus();
            event.preventDefault();
          } else if (!shiftKey && target === lastFocusable) {
            firstFocusable.focus();
            event.preventDefault();
          }
        }
      });
      addListener(document2, "click", ".clr-field button", (event) => {
        if (hasInstance) {
          resetVirtualInstance();
        }
        event.target.nextElementSibling.dispatchEvent(new Event("click", { bubbles: true }));
      });
      addListener(colorMarker, "keydown", (event) => {
        const movements = {
          ArrowUp: [0, -1],
          ArrowDown: [0, 1],
          ArrowLeft: [-1, 0],
          ArrowRight: [1, 0]
        };
        if (Object.keys(movements).includes(event.key)) {
          moveMarkerOnKeydown(...movements[event.key]);
          event.preventDefault();
        }
      });
      addListener(colorArea, "click", moveMarker);
      addListener(hueSlider, "input", setHue);
      addListener(alphaSlider, "input", setAlpha);
    }
    function getFocusableElements() {
      const controls = Array.from(picker.querySelectorAll("input, button"));
      const focusables = controls.filter((node) => !!node.offsetWidth);
      return focusables;
    }
    function getEl(id) {
      return document2.getElementById(id);
    }
    function addListener(context, type, selector, fn) {
      const matches = Element.prototype.matches || Element.prototype.msMatchesSelector;
      if (typeof selector === "string") {
        context.addEventListener(type, (event) => {
          if (matches.call(event.target, selector)) {
            fn.call(event.target, event);
          }
        });
      } else {
        fn = selector;
        context.addEventListener(type, fn);
      }
    }
    function DOMReady(fn, args) {
      args = args !== undefined ? args : [];
      if (document2.readyState !== "loading") {
        fn(...args);
      } else {
        document2.addEventListener("DOMContentLoaded", () => {
          fn(...args);
        });
      }
    }
    if (NodeList !== undefined && NodeList.prototype && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = Array.prototype.forEach;
    }
    function setColor(color, target) {
      currentEl = target;
      oldColor = currentEl.value;
      attachVirtualInstance(target);
      currentFormat = getColorFormatFromStr(color);
      updatePickerPosition();
      setColorFromStr(color);
      pickColor();
      if (oldColor !== color) {
        currentEl.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
    const Coloris2 = (() => {
      const methods = {
        init,
        set: configure,
        wrap: wrapFields,
        close: closePicker,
        setInstance: setVirtualInstance,
        setColor,
        removeInstance: removeVirtualInstance,
        updatePosition: updatePickerPosition,
        ready: DOMReady
      };
      function Coloris3(options) {
        DOMReady(() => {
          if (options) {
            if (typeof options === "string") {
              bindFields(options);
            } else {
              configure(options);
            }
          }
        });
      }
      for (const key in methods) {
        Coloris3[key] = function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          DOMReady(methods[key], args);
        };
      }
      DOMReady(() => {
        window2.addEventListener("resize", (event) => {
          Coloris3.updatePosition();
        });
        window2.addEventListener("scroll", (event) => {
          Coloris3.updatePosition();
        });
      });
      return Coloris3;
    })();
    Coloris2.coloris = Coloris2;
    return Coloris2;
  })(window, document, Math);
})();
var _coloris = Coloris.coloris;
var _init = Coloris.init;
var _set = Coloris.set;
var _wrap = Coloris.wrap;
var _close = Coloris.close;
var _setInstance = Coloris.setInstance;
var _removeInstance = Coloris.removeInstance;
var _updatePosition = Coloris.updatePosition;
var coloris_default = Coloris;

// src/colorpicker/1-colorpicker.js
var colorisInitialized = false;
var ColorPicker = class extends BaseWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    this.setupGlobalDefaults();
    this.setupPopup();
  }
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  refresh(cfg) {
    this._cleanup();
    super.refresh(cfg);
  }
  /**
   * @override
   * @inheritdoc
   */
  destroy() {
    super.destroy();
    this._cleanup();
  }
  /**
  * Clean up this widget and remove events from the DOM.
  * @private
  */
  _cleanup() {
    if (this.input) {
      this.input.removeClass("ui-colorpicker");
      this.input.parent().find("button").remove();
      coloris_default.removeInstance("." + this.cfg.instance);
    } else {
      this.jq.empty();
    }
  }
  /**
   * Only one instance of Coloris is allowed so ensure it only loads defaults once.
   * @private
   */
  setupGlobalDefaults() {
    this.popup = this.cfg.mode === "popup";
    if (colorisInitialized) {
      return;
    }
    var $this = this;
    this.configureLocale();
    this.cfg.inline = !this.popup;
    this.cfg.themeMode = this.cfg.themeMode || PrimeFaces.env.getThemeContrast();
    var settings = this.cfg;
    if (this.popup) {
      colorisInitialized = true;
      settings = {
        el: ".ui-colorpicker",
        inline: this.cfg.inline,
        a11y: this.cfg.a11y,
        clearLabel: this.cfg.clearLabel,
        closeLabel: this.cfg.closeLabel
      };
    } else {
      colorisInitialized = false;
      settings.el = null;
      settings.parent = this.jqId;
      this.bindInlineCallbacks();
    }
    $(document).ready(function() {
      coloris_default.init();
      coloris_default(settings);
      if ($this.cfg.inline) {
        coloris_default.updatePosition();
      }
      colorisInitialized = false;
    });
  }
  /**
   * Localizes the ARIA accessibility labels for the color picker.
   * @private
   */
  configureLocale() {
    var lang = PrimeFaces.getLocaleSettings(this.cfg.locale);
    if (!lang) {
      return;
    }
    if (lang.aria && lang.aria.close) {
      this.cfg.closeLabel = lang.aria.close;
    }
    if (lang.clear) {
      this.cfg.clearLabel = lang.clear;
    }
    if (lang.isRTL) {
      this.cfg.rtl = true;
    }
    if (lang.aria) {
      PrimeFaces.localeSettings = lang;
      var a11y = {};
      this.configureAriaLabel("colorpicker.OPEN", a11y, "open");
      this.configureAriaLabel("colorpicker.CLOSE", a11y, "close");
      this.configureAriaLabel("colorpicker.CLEAR", a11y, "clear");
      this.configureAriaLabel("colorpicker.MARKER", a11y, "marker");
      this.configureAriaLabel("colorpicker.HUESLIDER", a11y, "hueSlider");
      this.configureAriaLabel("colorpicker.ALPHASLIDER", a11y, "alphaSlider");
      this.configureAriaLabel("colorpicker.INPUT", a11y, "input");
      this.configureAriaLabel("colorpicker.FORMAT", a11y, "format");
      this.configureAriaLabel("colorpicker.SWATCH", a11y, "swatch");
      this.configureAriaLabel("colorpicker.INSTRUCTION", a11y, "instruction");
      this.cfg.a11y = a11y;
    }
  }
  /**
   * Configures a single ARIA label from PF locale to Coloris a11y.
   * @param {string} label the PF label to lookup in locale.js
   * @param {{key: string}} a11y the a11y JSON object for Coloris
   * @param {string} property the JSON property to set in a11y
   * @private
   */
  configureAriaLabel(label, a11y, property) {
    var ariaLabel = PrimeFaces.getAriaLabel(label);
    if (ariaLabel) {
      a11y[property] = ariaLabel;
    }
  }
  /**
   * Configure the color picker for popup mode.
   * @private
   */
  setupPopup() {
    if (!this.popup) {
      return;
    }
    var $this = this;
    this.input = this.jq;
    this.input.data(PrimeFaces.CLIENT_ID_DATA, this.id);
    PrimeFaces.skinInput(this.input);
    this.hasFloatLabel = PrimeFaces.utils.hasFloatLabel(this.input);
    this.setupDialogSupport();
    this.bindInputCallbacks();
    coloris_default.setInstance("." + this.cfg.instance, this.cfg);
    $(document).ready(function() {
      var triggerButton = $this.input.prev();
      if ($this.input.hasClass("ui-state-error")) {
        triggerButton.addClass("ui-inputfield ui-state-error");
      }
    });
  }
  /**
   * Sets up the event listeners required by this widget for inline mode.
   * @private
   */
  bindInlineCallbacks() {
    var $this = this;
    if ($this.hasBehavior("change")) {
      var pickNS = "coloris:pick";
      $(document).on(pickNS, function(e) {
        var ext = {
          params: [
            { name: $this.id + "_color", value: e.detail.color }
          ]
        };
        $this.callBehavior("change", ext);
      });
      this.addDestroyListener(function() {
        $(document).off(pickNS);
      });
    }
  }
  /**
   * Sets up the event listeners required by this widget.
   * @private
   */
  bindInputCallbacks() {
    var $this = this;
    if ($this.hasBehavior("change")) {
      $this.input.on("coloris:pick", function(e) {
        $this.callBehavior("change");
      });
    }
    if ($this.hasBehavior("open") || $this.cfg.parent) {
      $this.input.on("open.colorpicker", function(e) {
        $this.callBehavior("open");
        if ($this.cfg.parent) {
          var dialog = $($this.cfg.parent);
          var colorInput = dialog.find("#clr-color-value");
          var newZIndex = PrimeFaces.nextZindex();
          colorInput.zIndex(newZIndex);
          colorInput.parent().zIndex(newZIndex);
        }
      });
    }
    $this.input.on("close.colorpicker", function(e) {
      if ($this.hasBehavior("close")) {
        $this.callBehavior("close");
      }
      if ($this.hasFloatLabel) {
        var container = $this.input.parent();
        PrimeFaces.queueTask(function() {
          container.removeClass("ui-inputwrapper-focus");
          PrimeFaces.utils.updateFloatLabel(container, $this.input, $this.hasFloatLabel);
        });
      }
    });
    if ($this.hasFloatLabel) {
      $this.input.on("focus.colorpicker", function() {
        $this.input.parent().addClass("ui-inputwrapper-focus");
      });
    }
  }
  /**
   * Sets up support for using the overlay color picker within an overlay dialog.
   * @private
   */
  setupDialogSupport() {
    var dialog = this.input[0].closest(".ui-dialog");
    if (dialog) {
      this.cfg.parent = PrimeFaces.escapeClientId(dialog.id);
    }
  }
  /**
    * Gets the current color
    * @return {string} the current color
    */
  getColor() {
    var input = this.popup ? this.input : this.jq.find("#clr-color-value");
    return input.val();
  }
  /**
    * Sets the current color
    * @param {string} color the color to set
    */
  setColor(color) {
    if (!color) {
      return;
    }
    var newColor = color.toLowerCase();
    var input = this.popup ? this.input : this.jq.find("#clr-color-value");
    coloris_default.setColor(newColor, input[0]);
  }
  /**
   * Shows the popup panel.
   */
  show() {
    if (this.input) {
      this.input.trigger("click");
    }
  }
  /**
   * Close the dialog and revert the color to its original value.
   * @param {boolean | undefined} revert true to revert the color to its original value
   */
  hide(revert) {
    if (this.input) {
      coloris_default.close(revert);
    }
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
export {
  ColorPicker
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvQG1lbGxvd2FyZS1jb2xvcmlzLW5wbS0wLjI0LjAtNTdlMDAwZmE4MS0xMGMwLnppcC9ub2RlX21vZHVsZXMvQG1lbGxvd2FyZS9jb2xvcmlzL2Rpc3QvZXNtL2NvbG9yaXMuanMiLCAiLi4vc3JjL2NvbG9ycGlja2VyLzEtY29sb3JwaWNrZXIuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IENvbG9yaXMgPSAoKCkgPT4ge1xuICAvKiFcclxuICAqIENvcHlyaWdodCAoYykgMjAyMS0yMDI0IE1vbW8gQmFzc2l0LlxyXG4gICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcbiAgKiBodHRwczovL2dpdGh1Yi5jb20vbWRiYXNzaXQvQ29sb3Jpc1xyXG4gICogVmVyc2lvbjogMC4yNC4wXHJcbiAgKiBOUE06IGh0dHBzOi8vZ2l0aHViLmNvbS9tZWxsb3dhcmUvY29sb3Jpcy1ucG1cclxuICAqL1xuXG4gIHJldHVybiAoKHdpbmRvdywgZG9jdW1lbnQsIE1hdGgsIHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IGN0eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3QgY3VycmVudENvbG9yID0geyByOiAwLCBnOiAwLCBiOiAwLCBoOiAwLCBzOiAwLCB2OiAwLCBhOiAxIH07XG4gICAgbGV0IGNvbnRhaW5lcixwaWNrZXIsY29sb3JBcmVhLGNvbG9yTWFya2VyLGNvbG9yUHJldmlldyxjb2xvclZhbHVlLGNsZWFyQnV0dG9uLGNsb3NlQnV0dG9uLFxuICAgICAgaHVlU2xpZGVyLGh1ZU1hcmtlcixhbHBoYVNsaWRlcixhbHBoYU1hcmtlcixjdXJyZW50RWwsY3VycmVudEZvcm1hdCxvbGRDb2xvcixrZXlib2FyZE5hdixcbiAgICAgIGNvbG9yQXJlYURpbXMgPSB7fTtcblxuICAgIC8vIERlZmF1bHQgc2V0dGluZ3NcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgIGVsOiAnW2RhdGEtY29sb3Jpc10nLFxuICAgICAgcGFyZW50OiAnYm9keScsXG4gICAgICB0aGVtZTogJ2RlZmF1bHQnLFxuICAgICAgdGhlbWVNb2RlOiAnbGlnaHQnLFxuICAgICAgcnRsOiBmYWxzZSxcbiAgICAgIHdyYXA6IHRydWUsXG4gICAgICBtYXJnaW46IDIsXG4gICAgICBmb3JtYXQ6ICdoZXgnLFxuICAgICAgZm9ybWF0VG9nZ2xlOiBmYWxzZSxcbiAgICAgIHN3YXRjaGVzOiBbXSxcbiAgICAgIHN3YXRjaGVzT25seTogZmFsc2UsXG4gICAgICBhbHBoYTogdHJ1ZSxcbiAgICAgIGZvcmNlQWxwaGE6IGZhbHNlLFxuICAgICAgZm9jdXNJbnB1dDogdHJ1ZSxcbiAgICAgIHNlbGVjdElucHV0OiBmYWxzZSxcbiAgICAgIGlubGluZTogZmFsc2UsXG4gICAgICBkZWZhdWx0Q29sb3I6ICcjMDAwMDAwJyxcbiAgICAgIGNsZWFyQnV0dG9uOiBmYWxzZSxcbiAgICAgIGNsZWFyTGFiZWw6ICdDbGVhcicsXG4gICAgICBjbG9zZUJ1dHRvbjogZmFsc2UsXG4gICAgICBjbG9zZUxhYmVsOiAnQ2xvc2UnLFxuICAgICAgb25DaGFuZ2U6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgIGExMXk6IHtcbiAgICAgICAgb3BlbjogJ09wZW4gY29sb3IgcGlja2VyJyxcbiAgICAgICAgY2xvc2U6ICdDbG9zZSBjb2xvciBwaWNrZXInLFxuICAgICAgICBjbGVhcjogJ0NsZWFyIHRoZSBzZWxlY3RlZCBjb2xvcicsXG4gICAgICAgIG1hcmtlcjogJ1NhdHVyYXRpb246IHtzfS4gQnJpZ2h0bmVzczoge3Z9LicsXG4gICAgICAgIGh1ZVNsaWRlcjogJ0h1ZSBzbGlkZXInLFxuICAgICAgICBhbHBoYVNsaWRlcjogJ09wYWNpdHkgc2xpZGVyJyxcbiAgICAgICAgaW5wdXQ6ICdDb2xvciB2YWx1ZSBmaWVsZCcsXG4gICAgICAgIGZvcm1hdDogJ0NvbG9yIGZvcm1hdCcsXG4gICAgICAgIHN3YXRjaDogJ0NvbG9yIHN3YXRjaCcsXG4gICAgICAgIGluc3RydWN0aW9uOiAnU2F0dXJhdGlvbiBhbmQgYnJpZ2h0bmVzcyBzZWxlY3Rvci4gVXNlIHVwLCBkb3duLCBsZWZ0IGFuZCByaWdodCBhcnJvdyBrZXlzIHRvIHNlbGVjdC4nXG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFZpcnR1YWwgaW5zdGFuY2VzIGNhY2hlXG4gICAgY29uc3QgaW5zdGFuY2VzID0ge307XG4gICAgbGV0IGN1cnJlbnRJbnN0YW5jZUlkID0gJyc7XG4gICAgbGV0IGRlZmF1bHRJbnN0YW5jZSA9IHt9O1xuICAgIGxldCBoYXNJbnN0YW5jZSA9IGZhbHNlO1xuXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmUgdGhlIGNvbG9yIHBpY2tlci5cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZShvcHRpb25zKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgJ2VsJzpcbiAgICAgICAgICAgIGJpbmRGaWVsZHMob3B0aW9ucy5lbCk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy53cmFwICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICB3cmFwRmllbGRzKG9wdGlvbnMuZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncGFyZW50JzpcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IG9wdGlvbnMucGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBvcHRpb25zLnBhcmVudCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5wYXJlbnQpO1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGlja2VyKTtcbiAgICAgICAgICAgICAgc2V0dGluZ3MucGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG5cbiAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuYm9keSBpcyBzcGVjaWFsXG4gICAgICAgICAgICAgIGlmIChjb250YWluZXIgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3RoZW1lTW9kZSc6XG4gICAgICAgICAgICBzZXR0aW5ncy50aGVtZU1vZGUgPSBvcHRpb25zLnRoZW1lTW9kZTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRoZW1lTW9kZSA9PT0gJ2F1dG8nICYmIHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykge1xuICAgICAgICAgICAgICBzZXR0aW5ncy50aGVtZU1vZGUgPSAnZGFyayc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLy8gVGhlIGxhY2sgb2YgYSBicmVhayBzdGF0ZW1lbnQgaXMgaW50ZW50aW9uYWxcbiAgICAgICAgICBjYXNlICd0aGVtZSc6XG4gICAgICAgICAgICBpZiAob3B0aW9ucy50aGVtZSkge1xuICAgICAgICAgICAgICBzZXR0aW5ncy50aGVtZSA9IG9wdGlvbnMudGhlbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgdGhlbWUgYW5kIGNvbG9yIHNjaGVtZVxuICAgICAgICAgICAgcGlja2VyLmNsYXNzTmFtZSA9IFwiY2xyLXBpY2tlciBjbHItXCIgKyBzZXR0aW5ncy50aGVtZSArIFwiIGNsci1cIiArIHNldHRpbmdzLnRoZW1lTW9kZTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBjb2xvciBwaWNrZXIncyBwb3NpdGlvbiBpZiBpbmxpbmUgbW9kZSBpcyBpbiB1c2VcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5pbmxpbmUpIHtcbiAgICAgICAgICAgICAgdXBkYXRlUGlja2VyUG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3J0bCc6XG4gICAgICAgICAgICBzZXR0aW5ncy5ydGwgPSAhIW9wdGlvbnMucnRsO1xuICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbHItZmllbGQnKSkuZm9yRWFjaCgoZmllbGQpID0+IGZpZWxkLmNsYXNzTGlzdC50b2dnbGUoJ2Nsci1ydGwnLCBzZXR0aW5ncy5ydGwpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ21hcmdpbic6XG4gICAgICAgICAgICBvcHRpb25zLm1hcmdpbiAqPSAxO1xuICAgICAgICAgICAgc2V0dGluZ3MubWFyZ2luID0gIWlzTmFOKG9wdGlvbnMubWFyZ2luKSA/IG9wdGlvbnMubWFyZ2luIDogc2V0dGluZ3MubWFyZ2luO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnd3JhcCc6XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5lbCAmJiBvcHRpb25zLndyYXApIHtcbiAgICAgICAgICAgICAgd3JhcEZpZWxkcyhvcHRpb25zLmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Zvcm1hdFRvZ2dsZSc6XG4gICAgICAgICAgICBzZXR0aW5ncy5mb3JtYXRUb2dnbGUgPSAhIW9wdGlvbnMuZm9ybWF0VG9nZ2xlO1xuICAgICAgICAgICAgZ2V0RWwoJ2Nsci1mb3JtYXQnKS5zdHlsZS5kaXNwbGF5ID0gc2V0dGluZ3MuZm9ybWF0VG9nZ2xlID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5mb3JtYXRUb2dnbGUpIHtcbiAgICAgICAgICAgICAgc2V0dGluZ3MuZm9ybWF0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnc3dhdGNoZXMnOlxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5zd2F0Y2hlcykpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3dhdGNoZXNDb250YWluZXIgPSBnZXRFbCgnY2xyLXN3YXRjaGVzJyk7XG4gICAgICAgICAgICAgIGNvbnN0IHN3YXRjaGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgLy8gQ2xlYXIgY3VycmVudCBzd2F0Y2hlc1xuICAgICAgICAgICAgICBzd2F0Y2hlc0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgICAgICAgICAgIC8vIEJ1aWxkIG5ldyBzd2F0Y2hlc1xuICAgICAgICAgICAgICBvcHRpb25zLnN3YXRjaGVzLmZvckVhY2goKHN3YXRjaCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsIFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJjbHItc3dhdGNoLVwiICsgaSk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgXCJjbHItc3dhdGNoLWxhYmVsIGNsci1zd2F0Y2gtXCIgKyBpKTtcbiAgICAgICAgICAgICAgICBidXR0b24uc3R5bGUuY29sb3IgPSBzd2F0Y2g7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gc3dhdGNoO1xuXG4gICAgICAgICAgICAgICAgc3dhdGNoZXMuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgLy8gQXBwZW5kIG5ldyBzd2F0Y2hlcyBpZiBhbnlcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3dhdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc3dhdGNoZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3dhdGNoZXMpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2V0dGluZ3Muc3dhdGNoZXMgPSBvcHRpb25zLnN3YXRjaGVzLnNsaWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzd2F0Y2hlc09ubHknOlxuICAgICAgICAgICAgc2V0dGluZ3Muc3dhdGNoZXNPbmx5ID0gISFvcHRpb25zLnN3YXRjaGVzT25seTtcbiAgICAgICAgICAgIHBpY2tlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWluaW1hbCcsIHNldHRpbmdzLnN3YXRjaGVzT25seSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhbHBoYSc6XG4gICAgICAgICAgICBzZXR0aW5ncy5hbHBoYSA9ICEhb3B0aW9ucy5hbHBoYTtcbiAgICAgICAgICAgIHBpY2tlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWxwaGEnLCBzZXR0aW5ncy5hbHBoYSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdpbmxpbmUnOlxuICAgICAgICAgICAgc2V0dGluZ3MuaW5saW5lID0gISFvcHRpb25zLmlubGluZTtcbiAgICAgICAgICAgIHBpY2tlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5saW5lJywgc2V0dGluZ3MuaW5saW5lKTtcblxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmlubGluZSkge1xuICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0Q29sb3IgPSBvcHRpb25zLmRlZmF1bHRDb2xvciB8fCBzZXR0aW5ncy5kZWZhdWx0Q29sb3I7XG5cbiAgICAgICAgICAgICAgY3VycmVudEZvcm1hdCA9IGdldENvbG9yRm9ybWF0RnJvbVN0cihkZWZhdWx0Q29sb3IpO1xuICAgICAgICAgICAgICB1cGRhdGVQaWNrZXJQb3NpdGlvbigpO1xuICAgICAgICAgICAgICBzZXRDb2xvckZyb21TdHIoZGVmYXVsdENvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NsZWFyQnV0dG9uJzpcbiAgICAgICAgICAgIC8vIEJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jbGVhckJ1dHRvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY2xlYXJCdXR0b24ubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5jbGVhckxhYmVsID0gb3B0aW9ucy5jbGVhckJ1dHRvbi5sYWJlbDtcbiAgICAgICAgICAgICAgICBjbGVhckJ1dHRvbi5pbm5lckhUTUwgPSBzZXR0aW5ncy5jbGVhckxhYmVsO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb3B0aW9ucy5jbGVhckJ1dHRvbiA9IG9wdGlvbnMuY2xlYXJCdXR0b24uc2hvdztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0dGluZ3MuY2xlYXJCdXR0b24gPSAhIW9wdGlvbnMuY2xlYXJCdXR0b247XG4gICAgICAgICAgICBjbGVhckJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gc2V0dGluZ3MuY2xlYXJCdXR0b24gPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2xlYXJMYWJlbCc6XG4gICAgICAgICAgICBzZXR0aW5ncy5jbGVhckxhYmVsID0gb3B0aW9ucy5jbGVhckxhYmVsO1xuICAgICAgICAgICAgY2xlYXJCdXR0b24uaW5uZXJIVE1MID0gc2V0dGluZ3MuY2xlYXJMYWJlbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Nsb3NlQnV0dG9uJzpcbiAgICAgICAgICAgIHNldHRpbmdzLmNsb3NlQnV0dG9uID0gISFvcHRpb25zLmNsb3NlQnV0dG9uO1xuXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuY2xvc2VCdXR0b24pIHtcbiAgICAgICAgICAgICAgcGlja2VyLmluc2VydEJlZm9yZShjbG9zZUJ1dHRvbiwgY29sb3JQcmV2aWV3KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbG9yUHJldmlldy5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Nsb3NlTGFiZWwnOlxuICAgICAgICAgICAgc2V0dGluZ3MuY2xvc2VMYWJlbCA9IG9wdGlvbnMuY2xvc2VMYWJlbDtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9IHNldHRpbmdzLmNsb3NlTGFiZWw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdhMTF5JzpcbiAgICAgICAgICAgIGNvbnN0IGxhYmVscyA9IG9wdGlvbnMuYTExeTtcbiAgICAgICAgICAgIGxldCB1cGRhdGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsYWJlbHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgbGFiZWwgaW4gbGFiZWxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxhYmVsc1tsYWJlbF0gJiYgc2V0dGluZ3MuYTExeVtsYWJlbF0pIHtcbiAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmExMXlbbGFiZWxdID0gbGFiZWxzW2xhYmVsXTtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgICAgICAgY29uc3Qgb3BlbkxhYmVsID0gZ2V0RWwoJ2Nsci1vcGVuLWxhYmVsJyk7XG4gICAgICAgICAgICAgIGNvbnN0IHN3YXRjaExhYmVsID0gZ2V0RWwoJ2Nsci1zd2F0Y2gtbGFiZWwnKTtcblxuICAgICAgICAgICAgICBvcGVuTGFiZWwuaW5uZXJIVE1MID0gc2V0dGluZ3MuYTExeS5vcGVuO1xuICAgICAgICAgICAgICBzd2F0Y2hMYWJlbC5pbm5lckhUTUwgPSBzZXR0aW5ncy5hMTF5LnN3YXRjaDtcbiAgICAgICAgICAgICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgc2V0dGluZ3MuYTExeS5jbG9zZSk7XG4gICAgICAgICAgICAgIGNsZWFyQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHNldHRpbmdzLmExMXkuY2xlYXIpO1xuICAgICAgICAgICAgICBodWVTbGlkZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgc2V0dGluZ3MuYTExeS5odWVTbGlkZXIpO1xuICAgICAgICAgICAgICBhbHBoYVNsaWRlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBzZXR0aW5ncy5hMTF5LmFscGhhU2xpZGVyKTtcbiAgICAgICAgICAgICAgY29sb3JWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBzZXR0aW5ncy5hMTF5LmlucHV0KTtcbiAgICAgICAgICAgICAgY29sb3JBcmVhLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHNldHRpbmdzLmExMXkuaW5zdHJ1Y3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNldHRpbmdzW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEFkZCBvciB1cGRhdGUgYSB2aXJ0dWFsIGluc3RhbmNlLlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yIFRoZSBDU1Mgc2VsZWN0b3Igb2YgdGhlIGVsZW1lbnRzIHRvIHdoaWNoIHRoZSBpbnN0YW5jZSBpcyBhdHRhY2hlZC5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFBlci1pbnN0YW5jZSBvcHRpb25zIHRvIGFwcGx5LlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0VmlydHVhbEluc3RhbmNlKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaW5zdGFuY2VzW3NlbGVjdG9yXSA9IG9wdGlvbnM7XG4gICAgICAgIGhhc0luc3RhbmNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhIHZpcnR1YWwgaW5zdGFuY2UuXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgVGhlIENTUyBzZWxlY3RvciBvZiB0aGUgZWxlbWVudHMgdG8gd2hpY2ggdGhlIGluc3RhbmNlIGlzIGF0dGFjaGVkLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVtb3ZlVmlydHVhbEluc3RhbmNlKHNlbGVjdG9yKSB7XG4gICAgICBkZWxldGUgaW5zdGFuY2VzW3NlbGVjdG9yXTtcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGluc3RhbmNlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGhhc0luc3RhbmNlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yID09PSBjdXJyZW50SW5zdGFuY2VJZCkge1xuICAgICAgICAgIHJlc2V0VmlydHVhbEluc3RhbmNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEF0dGFjaCBhIHZpcnR1YWwgaW5zdGFuY2UgdG8gYW4gZWxlbWVudCBpZiBpdCBtYXRjaGVzIGEgc2VsZWN0b3IuXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCBUYXJnZXQgZWxlbWVudCB0aGF0IHdpbGwgcmVjZWl2ZSBhIHZpcnR1YWwgaW5zdGFuY2UgaWYgYXBwbGljYWJsZS5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGF0dGFjaFZpcnR1YWxJbnN0YW5jZShlbGVtZW50KSB7XG4gICAgICBpZiAoaGFzSW5zdGFuY2UpIHtcbiAgICAgICAgLy8gVGhlc2Ugb3B0aW9ucyBjYW4gb25seSBiZSBzZXQgZ2xvYmFsbHksIG5vdCBwZXIgaW5zdGFuY2VcbiAgICAgICAgY29uc3QgdW5zdXBwb3J0ZWRPcHRpb25zID0gWydlbCcsICd3cmFwJywgJ3J0bCcsICdpbmxpbmUnLCAnZGVmYXVsdENvbG9yJywgJ2ExMXknXTtcblxuICAgICAgICBmb3IgKGxldCBzZWxlY3RvciBpbiBpbnN0YW5jZXMpIHtcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gaW5zdGFuY2VzW3NlbGVjdG9yXTtcblxuICAgICAgICAgIC8vIElmIHRoZSBlbGVtZW50IG1hdGNoZXMgYW4gaW5zdGFuY2UncyBDU1Mgc2VsZWN0b3JcbiAgICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgY3VycmVudEluc3RhbmNlSWQgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGRlZmF1bHRJbnN0YW5jZSA9IHt9O1xuXG4gICAgICAgICAgICAvLyBEZWxldGUgdW5zdXBwb3J0ZWQgb3B0aW9uc1xuICAgICAgICAgICAgdW5zdXBwb3J0ZWRPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4gZGVsZXRlIG9wdGlvbnNbb3B0aW9uXSk7XG5cbiAgICAgICAgICAgIC8vIEJhY2sgdXAgdGhlIGRlZmF1bHQgb3B0aW9ucyBzbyB3ZSBjYW4gcmVzdG9yZSB0aGVtIGxhdGVyXG4gICAgICAgICAgICBmb3IgKGxldCBvcHRpb24gaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgICBkZWZhdWx0SW5zdGFuY2Vbb3B0aW9uXSA9IEFycmF5LmlzQXJyYXkoc2V0dGluZ3Nbb3B0aW9uXSkgPyBzZXR0aW5nc1tvcHRpb25dLnNsaWNlKCkgOiBzZXR0aW5nc1tvcHRpb25dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgdGhlIGluc3RhbmNlJ3Mgb3B0aW9uc1xuICAgICAgICAgICAgY29uZmlndXJlKG9wdGlvbnMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBSZXZlcnQgYW55IHBlci1pbnN0YW5jZSBvcHRpb25zIHRoYXQgd2VyZSBwcmV2aW91c2x5IGFwcGxpZWQuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZXNldFZpcnR1YWxJbnN0YW5jZSgpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhkZWZhdWx0SW5zdGFuY2UpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uZmlndXJlKGRlZmF1bHRJbnN0YW5jZSk7XG4gICAgICAgIGN1cnJlbnRJbnN0YW5jZUlkID0gJyc7XG4gICAgICAgIGRlZmF1bHRJbnN0YW5jZSA9IHt9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQmluZCB0aGUgY29sb3IgcGlja2VyIHRvIGlucHV0IGZpZWxkcyB0aGF0IG1hdGNoIHRoZSBzZWxlY3Rvci5cclxuICAgICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudHxIVE1MRWxlbWVudFtdKX0gc2VsZWN0b3IgQSBDU1Mgc2VsZWN0b3Igc3RyaW5nLCBhIERPTSBlbGVtZW50IG9yIGEgbGlzdCBvZiBET00gZWxlbWVudHMuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBiaW5kRmllbGRzKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBzZWxlY3RvciA9IFtzZWxlY3Rvcl07XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdG9yKSkge1xuICAgICAgICBzZWxlY3Rvci5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgIGFkZExpc3RlbmVyKGZpZWxkLCAnY2xpY2snLCBvcGVuUGlja2VyKTtcbiAgICAgICAgICBhZGRMaXN0ZW5lcihmaWVsZCwgJ2lucHV0JywgdXBkYXRlQ29sb3JQcmV2aWV3KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRMaXN0ZW5lcihkb2N1bWVudCwgJ2NsaWNrJywgc2VsZWN0b3IsIG9wZW5QaWNrZXIpO1xuICAgICAgICBhZGRMaXN0ZW5lcihkb2N1bWVudCwgJ2lucHV0Jywgc2VsZWN0b3IsIHVwZGF0ZUNvbG9yUHJldmlldyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBPcGVuIHRoZSBjb2xvciBwaWNrZXIuXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgb3BlbnMgdGhlIGNvbG9yIHBpY2tlci5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9wZW5QaWNrZXIoZXZlbnQpIHtcbiAgICAgIC8vIFNraXAgaWYgaW5saW5lIG1vZGUgaXMgaW4gdXNlXG4gICAgICBpZiAoc2V0dGluZ3MuaW5saW5lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwbHkgYW55IHBlci1pbnN0YW5jZSBvcHRpb25zIGZpcnN0XG4gICAgICBhdHRhY2hWaXJ0dWFsSW5zdGFuY2UoZXZlbnQudGFyZ2V0KTtcblxuICAgICAgY3VycmVudEVsID0gZXZlbnQudGFyZ2V0O1xuICAgICAgb2xkQ29sb3IgPSBjdXJyZW50RWwudmFsdWU7XG4gICAgICBjdXJyZW50Rm9ybWF0ID0gZ2V0Q29sb3JGb3JtYXRGcm9tU3RyKG9sZENvbG9yKTtcbiAgICAgIHBpY2tlci5jbGFzc0xpc3QuYWRkKCdjbHItb3BlbicpO1xuXG4gICAgICB1cGRhdGVQaWNrZXJQb3NpdGlvbigpO1xuICAgICAgc2V0Q29sb3JGcm9tU3RyKG9sZENvbG9yKTtcblxuICAgICAgaWYgKHNldHRpbmdzLmZvY3VzSW5wdXQgfHwgc2V0dGluZ3Muc2VsZWN0SW5wdXQpIHtcbiAgICAgICAgY29sb3JWYWx1ZS5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgIGNvbG9yVmFsdWUuc2V0U2VsZWN0aW9uUmFuZ2UoY3VycmVudEVsLnNlbGVjdGlvblN0YXJ0LCBjdXJyZW50RWwuc2VsZWN0aW9uRW5kKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNldHRpbmdzLnNlbGVjdElucHV0KSB7XG4gICAgICAgIGNvbG9yVmFsdWUuc2VsZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFsd2F5cyBmb2N1cyB0aGUgZmlyc3QgZWxlbWVudCB3aGVuIHVzaW5nIGtleWJvYXJkIG5hdmlnYXRpb25cbiAgICAgIGlmIChrZXlib2FyZE5hdiB8fCBzZXR0aW5ncy5zd2F0Y2hlc09ubHkpIHtcbiAgICAgICAgZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKS5zaGlmdCgpLmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRyaWdnZXIgYW4gXCJvcGVuXCIgZXZlbnRcbiAgICAgIGN1cnJlbnRFbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnb3BlbicsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGNvbG9yIHBpY2tlcidzIHBvc2l0aW9uIGFuZCB0aGUgY29sb3IgZ3JhZGllbnQncyBvZmZzZXRcclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZVBpY2tlclBvc2l0aW9uKCkge1xuICAgICAgaWYgKCFwaWNrZXIgfHwgIWN1cnJlbnRFbCAmJiAhc2V0dGluZ3MuaW5saW5lKSByZXR1cm47IC8vKiogRE8gTk9UIFJFTU9WRTogaW4gY2FzZSBjYWxsZWQgYmVmb3JlIGluaXRpYWxpemVkXG4gICAgICBjb25zdCBwYXJlbnQgPSBjb250YWluZXI7XG4gICAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBjb25zdCBwaWNrZXJXaWR0aCA9IHBpY2tlci5vZmZzZXRXaWR0aDtcbiAgICAgIGNvbnN0IHBpY2tlckhlaWdodCA9IHBpY2tlci5vZmZzZXRIZWlnaHQ7XG4gICAgICBjb25zdCByZXBvc2l0aW9uID0geyBsZWZ0OiBmYWxzZSwgdG9wOiBmYWxzZSB9O1xuICAgICAgbGV0IHBhcmVudFN0eWxlLCBwYXJlbnRNYXJnaW5Ub3AsIHBhcmVudEJvcmRlclRvcDtcbiAgICAgIGxldCBvZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBwYXJlbnRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCk7XG4gICAgICAgIHBhcmVudE1hcmdpblRvcCA9IHBhcnNlRmxvYXQocGFyZW50U3R5bGUubWFyZ2luVG9wKTtcbiAgICAgICAgcGFyZW50Qm9yZGVyVG9wID0gcGFyc2VGbG9hdChwYXJlbnRTdHlsZS5ib3JkZXJUb3BXaWR0aCk7XG5cbiAgICAgICAgb2Zmc2V0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBvZmZzZXQueSArPSBwYXJlbnRCb3JkZXJUb3AgKyBzY3JvbGxZO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNldHRpbmdzLmlubGluZSkge1xuICAgICAgICBjb25zdCBjb29yZHMgPSBjdXJyZW50RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCBsZWZ0ID0gY29vcmRzLng7XG4gICAgICAgIGxldCB0b3AgPSBzY3JvbGxZICsgY29vcmRzLnkgKyBjb29yZHMuaGVpZ2h0ICsgc2V0dGluZ3MubWFyZ2luO1xuXG4gICAgICAgIC8vIElmIHRoZSBjb2xvciBwaWNrZXIgaXMgaW5zaWRlIGEgY3VzdG9tIGNvbnRhaW5lclxuICAgICAgICAvLyBzZXQgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIGl0XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICBsZWZ0IC09IG9mZnNldC54O1xuICAgICAgICAgIHRvcCAtPSBvZmZzZXQueTtcblxuICAgICAgICAgIGlmIChsZWZ0ICsgcGlja2VyV2lkdGggPiBwYXJlbnQuY2xpZW50V2lkdGgpIHtcbiAgICAgICAgICAgIGxlZnQgKz0gY29vcmRzLndpZHRoIC0gcGlja2VyV2lkdGg7XG4gICAgICAgICAgICByZXBvc2l0aW9uLmxlZnQgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0b3AgKyBwaWNrZXJIZWlnaHQgPiBwYXJlbnQuY2xpZW50SGVpZ2h0IC0gcGFyZW50TWFyZ2luVG9wKSB7XG4gICAgICAgICAgICBpZiAocGlja2VySGVpZ2h0ICsgc2V0dGluZ3MubWFyZ2luIDw9IGNvb3Jkcy50b3AgLSAob2Zmc2V0LnkgLSBzY3JvbGxZKSkge1xuICAgICAgICAgICAgICB0b3AgLT0gY29vcmRzLmhlaWdodCArIHBpY2tlckhlaWdodCArIHNldHRpbmdzLm1hcmdpbiAqIDI7XG4gICAgICAgICAgICAgIHJlcG9zaXRpb24udG9wID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0b3AgKz0gcGFyZW50LnNjcm9sbFRvcDtcblxuICAgICAgICAgIC8vIE90aGVyd2lzZSBzZXQgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSB3aG9sZSBkb2N1bWVudFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChsZWZ0ICsgcGlja2VyV2lkdGggPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIHtcbiAgICAgICAgICAgIGxlZnQgKz0gY29vcmRzLndpZHRoIC0gcGlja2VyV2lkdGg7XG4gICAgICAgICAgICByZXBvc2l0aW9uLmxlZnQgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0b3AgKyBwaWNrZXJIZWlnaHQgLSBzY3JvbGxZID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgaWYgKHBpY2tlckhlaWdodCArIHNldHRpbmdzLm1hcmdpbiA8PSBjb29yZHMudG9wKSB7XG4gICAgICAgICAgICAgIHRvcCA9IHNjcm9sbFkgKyBjb29yZHMueSAtIHBpY2tlckhlaWdodCAtIHNldHRpbmdzLm1hcmdpbjtcbiAgICAgICAgICAgICAgcmVwb3NpdGlvbi50b3AgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBpY2tlci5jbGFzc0xpc3QudG9nZ2xlKCdjbHItbGVmdCcsIHJlcG9zaXRpb24ubGVmdCk7XG4gICAgICAgIHBpY2tlci5jbGFzc0xpc3QudG9nZ2xlKCdjbHItdG9wJywgcmVwb3NpdGlvbi50b3ApO1xuICAgICAgICBwaWNrZXIuc3R5bGUubGVmdCA9IGxlZnQgKyBcInB4XCI7XG4gICAgICAgIHBpY2tlci5zdHlsZS50b3AgPSB0b3AgKyBcInB4XCI7XG4gICAgICAgIG9mZnNldC54ICs9IHBpY2tlci5vZmZzZXRMZWZ0O1xuICAgICAgICBvZmZzZXQueSArPSBwaWNrZXIub2Zmc2V0VG9wO1xuICAgICAgfVxuXG4gICAgICBjb2xvckFyZWFEaW1zID0ge1xuICAgICAgICB3aWR0aDogY29sb3JBcmVhLm9mZnNldFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGNvbG9yQXJlYS5vZmZzZXRIZWlnaHQsXG4gICAgICAgIHg6IGNvbG9yQXJlYS5vZmZzZXRMZWZ0ICsgb2Zmc2V0LngsXG4gICAgICAgIHk6IGNvbG9yQXJlYS5vZmZzZXRUb3AgKyBvZmZzZXQueVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFdyYXAgdGhlIGxpbmtlZCBpbnB1dCBmaWVsZHMgaW4gYSBkaXYgdGhhdCBhZGRzIGEgY29sb3IgcHJldmlldy5cclxuICAgICAqIEBwYXJhbSB7KHN0cmluZ3xIVE1MRWxlbWVudHxIVE1MRWxlbWVudFtdKX0gc2VsZWN0b3IgQSBDU1Mgc2VsZWN0b3Igc3RyaW5nLCBhIERPTSBlbGVtZW50IG9yIGEgbGlzdCBvZiBET00gZWxlbWVudHMuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB3cmFwRmllbGRzKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICB3cmFwQ29sb3JGaWVsZChzZWxlY3Rvcik7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG4gICAgICAgIHNlbGVjdG9yLmZvckVhY2god3JhcENvbG9yRmllbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikuZm9yRWFjaCh3cmFwQ29sb3JGaWVsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgICAqIFdyYXAgYW4gaW5wdXQgZmllbGQgaW4gYSBkaXYgdGhhdCBhZGRzIGEgY29sb3IgcHJldmlldy5cclxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IGZpZWxkIFRoZSBpbnB1dCBmaWVsZC5cclxuICAgICAgICovXG4gICAgZnVuY3Rpb24gd3JhcENvbG9yRmllbGQoZmllbGQpIHtcbiAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBmaWVsZC5wYXJlbnROb2RlO1xuXG4gICAgICBpZiAoIXBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbHItZmllbGQnKSkge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBjbGFzc2VzID0gJ2Nsci1maWVsZCc7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLnJ0bCB8fCBmaWVsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsci1ydGwnKSkge1xuICAgICAgICAgIGNsYXNzZXMgKz0gJyBjbHItcnRsJztcbiAgICAgICAgfVxuXG4gICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWxsZWRieT1cImNsci1vcGVuLWxhYmVsXCI+PC9idXR0b24+JztcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZmllbGQpO1xuICAgICAgICB3cmFwcGVyLmNsYXNzTmFtZSA9IGNsYXNzZXM7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUuY29sb3IgPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChmaWVsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGNvbG9yIHByZXZpZXcgb2YgYW4gaW5wdXQgZmllbGRcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgXCJpbnB1dFwiIGV2ZW50IHRoYXQgdHJpZ2dlcnMgdGhlIGNvbG9yIGNoYW5nZS5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbG9yUHJldmlldyhldmVudCkge1xuICAgICAgY29uc3QgcGFyZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XG5cbiAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSBwcmV2aWV3IGlmIHRoZSBmaWVsZCBoYXMgYmVlbiBwcmV2aW91c2x5IHdyYXBwZWRcbiAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbHItZmllbGQnKSkge1xuICAgICAgICBwYXJlbnQuc3R5bGUuY29sb3IgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZSB0aGUgY29sb3IgcGlja2VyLlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcmV2ZXJ0XSBJZiB0cnVlLCByZXZlcnQgdGhlIGNvbG9yIHRvIHRoZSBvcmlnaW5hbCB2YWx1ZS5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNsb3NlUGlja2VyKHJldmVydCkge1xuICAgICAgaWYgKGN1cnJlbnRFbCAmJiAhc2V0dGluZ3MuaW5saW5lKSB7XG4gICAgICAgIGNvbnN0IHByZXZFbCA9IGN1cnJlbnRFbDtcblxuICAgICAgICAvLyBSZXZlcnQgdGhlIGNvbG9yIHRvIHRoZSBvcmlnaW5hbCB2YWx1ZSBpZiBuZWVkZWRcbiAgICAgICAgaWYgKHJldmVydCkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCBwcmV2ZW50IHRoZSBcImNoYW5nZVwiIGV2ZW50IG9uIHRoZSBjb2xvclZhbHVlIGlucHV0IHRvIGV4ZWN1dGUgaXRzIGhhbmRsZXJcbiAgICAgICAgICBjdXJyZW50RWwgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBpZiAob2xkQ29sb3IgIT09IHByZXZFbC52YWx1ZSkge1xuICAgICAgICAgICAgcHJldkVsLnZhbHVlID0gb2xkQ29sb3I7XG5cbiAgICAgICAgICAgIC8vIFRyaWdnZXIgYW4gXCJpbnB1dFwiIGV2ZW50IHRvIGZvcmNlIHVwZGF0ZSB0aGUgdGh1bWJuYWlsIG5leHQgdG8gdGhlIGlucHV0IGZpZWxkXG4gICAgICAgICAgICBwcmV2RWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JywgeyBidWJibGVzOiB0cnVlIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUcmlnZ2VyIGEgXCJjaGFuZ2VcIiBldmVudCBpZiBuZWVkZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7Ly8gQWRkIHRoaXMgdG8gdGhlIGVuZCBvZiB0aGUgZXZlbnQgbG9vcFxuICAgICAgICAgIGlmIChvbGRDb2xvciAhPT0gcHJldkVsLnZhbHVlKSB7XG4gICAgICAgICAgICBwcmV2RWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBIaWRlIHRoZSBwaWNrZXIgZGlhbG9nXG4gICAgICAgIHBpY2tlci5jbGFzc0xpc3QucmVtb3ZlKCdjbHItb3BlbicpO1xuXG4gICAgICAgIC8vIFJlc2V0IGFueSBwcmV2aW91c2x5IHNldCBwZXItaW5zdGFuY2Ugb3B0aW9uc1xuICAgICAgICBpZiAoaGFzSW5zdGFuY2UpIHtcbiAgICAgICAgICByZXNldFZpcnR1YWxJbnN0YW5jZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVHJpZ2dlciBhIFwiY2xvc2VcIiBldmVudFxuICAgICAgICBwcmV2RWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2Nsb3NlJywgeyBidWJibGVzOiB0cnVlIH0pKTtcblxuICAgICAgICBpZiAoc2V0dGluZ3MuZm9jdXNJbnB1dCkge1xuICAgICAgICAgIHByZXZFbC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGlzIGVzc2VudGlhbGx5IG1hcmtzIHRoZSBwaWNrZXIgYXMgY2xvc2VkXG4gICAgICAgIGN1cnJlbnRFbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgYWN0aXZlIGNvbG9yIGZyb20gYSBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIFN0cmluZyByZXByZXNlbnRpbmcgYSBjb2xvci5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldENvbG9yRnJvbVN0cihzdHIpIHtcbiAgICAgIGNvbnN0IHJnYmEgPSBzdHJUb1JHQkEoc3RyKTtcbiAgICAgIGNvbnN0IGhzdmEgPSBSR0JBdG9IU1ZBKHJnYmEpO1xuXG4gICAgICB1cGRhdGVNYXJrZXJBMTF5TGFiZWwoaHN2YS5zLCBoc3ZhLnYpO1xuICAgICAgdXBkYXRlQ29sb3IocmdiYSwgaHN2YSk7XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgVUlcbiAgICAgIGh1ZVNsaWRlci52YWx1ZSA9IGhzdmEuaDtcbiAgICAgIHBpY2tlci5zdHlsZS5jb2xvciA9IFwiaHNsKFwiICsgaHN2YS5oICsgXCIsIDEwMCUsIDUwJSlcIjtcbiAgICAgIGh1ZU1hcmtlci5zdHlsZS5sZWZ0ID0gaHN2YS5oIC8gMzYwICogMTAwICsgXCIlXCI7XG5cbiAgICAgIGNvbG9yTWFya2VyLnN0eWxlLmxlZnQgPSBjb2xvckFyZWFEaW1zLndpZHRoICogaHN2YS5zIC8gMTAwICsgXCJweFwiO1xuICAgICAgY29sb3JNYXJrZXIuc3R5bGUudG9wID0gY29sb3JBcmVhRGltcy5oZWlnaHQgLSBjb2xvckFyZWFEaW1zLmhlaWdodCAqIGhzdmEudiAvIDEwMCArIFwicHhcIjtcblxuICAgICAgYWxwaGFTbGlkZXIudmFsdWUgPSBoc3ZhLmEgKiAxMDA7XG4gICAgICBhbHBoYU1hcmtlci5zdHlsZS5sZWZ0ID0gaHN2YS5hICogMTAwICsgXCIlXCI7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBHdWVzcyB0aGUgY29sb3IgZm9ybWF0IGZyb20gYSBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIFN0cmluZyByZXByZXNlbnRpbmcgYSBjb2xvci5cclxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGNvbG9yIGZvcm1hdC5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldENvbG9yRm9ybWF0RnJvbVN0cihzdHIpIHtcbiAgICAgIGNvbnN0IGZvcm1hdCA9IHN0ci5zdWJzdHJpbmcoMCwgMykudG9Mb3dlckNhc2UoKTtcblxuICAgICAgaWYgKGZvcm1hdCA9PT0gJ3JnYicgfHwgZm9ybWF0ID09PSAnaHNsJykge1xuICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJ2hleCc7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDb3B5IHRoZSBhY3RpdmUgY29sb3IgdG8gdGhlIGxpbmtlZCBpbnB1dCBmaWVsZC5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbY29sb3JdIENvbG9yIHZhbHVlIHRvIG92ZXJyaWRlIHRoZSBhY3RpdmUgY29sb3IuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwaWNrQ29sb3IoY29sb3IpIHtcbiAgICAgIGNvbG9yID0gY29sb3IgIT09IHVuZGVmaW5lZCA/IGNvbG9yIDogY29sb3JWYWx1ZS52YWx1ZTtcblxuICAgICAgaWYgKGN1cnJlbnRFbCkge1xuICAgICAgICBjdXJyZW50RWwudmFsdWUgPSBjb2xvcjtcbiAgICAgICAgY3VycmVudEVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5ncy5vbkNoYW5nZSkge1xuICAgICAgICBzZXR0aW5ncy5vbkNoYW5nZS5jYWxsKHdpbmRvdywgY29sb3IsIGN1cnJlbnRFbCk7XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjb2xvcmlzOnBpY2snLCB7IGRldGFpbDogeyBjb2xvciwgY3VycmVudEVsIH0gfSkpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBhY3RpdmUgY29sb3IgYmFzZWQgb24gYSBzcGVjaWZpYyBwb2ludCBpbiB0aGUgY29sb3IgZ3JhZGllbnQuXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBMZWZ0IHBvc2l0aW9uLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgVG9wIHBvc2l0aW9uLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0Q29sb3JBdFBvc2l0aW9uKHgsIHkpIHtcbiAgICAgIGNvbnN0IGhzdmEgPSB7XG4gICAgICAgIGg6IGh1ZVNsaWRlci52YWx1ZSAqIDEsXG4gICAgICAgIHM6IHggLyBjb2xvckFyZWFEaW1zLndpZHRoICogMTAwLFxuICAgICAgICB2OiAxMDAgLSB5IC8gY29sb3JBcmVhRGltcy5oZWlnaHQgKiAxMDAsXG4gICAgICAgIGE6IGFscGhhU2xpZGVyLnZhbHVlIC8gMTAwXG4gICAgICB9O1xuICAgICAgY29uc3QgcmdiYSA9IEhTVkF0b1JHQkEoaHN2YSk7XG5cbiAgICAgIHVwZGF0ZU1hcmtlckExMXlMYWJlbChoc3ZhLnMsIGhzdmEudik7XG4gICAgICB1cGRhdGVDb2xvcihyZ2JhLCBoc3ZhKTtcbiAgICAgIHBpY2tDb2xvcigpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjb2xvciBtYXJrZXIncyBhY2Nlc3NpYmlsaXR5IGxhYmVsLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNhdHVyYXRpb25cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gdXBkYXRlTWFya2VyQTExeUxhYmVsKHNhdHVyYXRpb24sIHZhbHVlKSB7XG4gICAgICBsZXQgbGFiZWwgPSBzZXR0aW5ncy5hMTF5Lm1hcmtlcjtcblxuICAgICAgc2F0dXJhdGlvbiA9IHNhdHVyYXRpb24udG9GaXhlZCgxKSAqIDE7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnRvRml4ZWQoMSkgKiAxO1xuICAgICAgbGFiZWwgPSBsYWJlbC5yZXBsYWNlKCd7c30nLCBzYXR1cmF0aW9uKTtcbiAgICAgIGxhYmVsID0gbGFiZWwucmVwbGFjZSgne3Z9JywgdmFsdWUpO1xuICAgICAgY29sb3JNYXJrZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgIH1cblxuICAgIC8vXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHBhZ2VYIGFuZCBwYWdlWSBwb3NpdGlvbnMgb2YgdGhlIHBvaW50ZXIuXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIE1vdXNlRXZlbnQgb3IgVG91Y2hFdmVudCBvYmplY3QuXHJcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBwYWdlWCBhbmQgcGFnZVkgcG9zaXRpb25zLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0UG9pbnRlclBvc2l0aW9uKGV2ZW50KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlWDogZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LnBhZ2VYLFxuICAgICAgICBwYWdlWTogZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LnBhZ2VZXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogTW92ZSB0aGUgY29sb3IgbWFya2VyIHdoZW4gZHJhZ2dlZC5cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgTW91c2VFdmVudCBvYmplY3QuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtb3ZlTWFya2VyKGV2ZW50KSB7XG4gICAgICBjb25zdCBwb2ludGVyID0gZ2V0UG9pbnRlclBvc2l0aW9uKGV2ZW50KTtcbiAgICAgIGxldCB4ID0gcG9pbnRlci5wYWdlWCAtIGNvbG9yQXJlYURpbXMueDtcbiAgICAgIGxldCB5ID0gcG9pbnRlci5wYWdlWSAtIGNvbG9yQXJlYURpbXMueTtcblxuICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICB5ICs9IGNvbnRhaW5lci5zY3JvbGxUb3A7XG4gICAgICB9XG5cbiAgICAgIHNldE1hcmtlclBvc2l0aW9uKHgsIHkpO1xuXG4gICAgICAvLyBQcmV2ZW50IHNjcm9sbGluZyB3aGlsZSBkcmFnZ2luZyB0aGUgbWFya2VyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBNb3ZlIHRoZSBjb2xvciBtYXJrZXIgd2hlbiB0aGUgYXJyb3cga2V5cyBhcmUgcHJlc3NlZC5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRYIFRoZSBob3Jpem9udGFsIGFtb3VudCB0byBtb3ZlLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFkgVGhlIHZlcnRpY2FsIGFtb3VudCB0byBtb3ZlLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gbW92ZU1hcmtlck9uS2V5ZG93bihvZmZzZXRYLCBvZmZzZXRZKSB7XG4gICAgICBsZXQgeCA9IGNvbG9yTWFya2VyLnN0eWxlLmxlZnQucmVwbGFjZSgncHgnLCAnJykgKiAxICsgb2Zmc2V0WDtcbiAgICAgIGxldCB5ID0gY29sb3JNYXJrZXIuc3R5bGUudG9wLnJlcGxhY2UoJ3B4JywgJycpICogMSArIG9mZnNldFk7XG5cbiAgICAgIHNldE1hcmtlclBvc2l0aW9uKHgsIHkpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBjb2xvciBtYXJrZXIncyBwb3NpdGlvbi5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IExlZnQgcG9zaXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBUb3AgcG9zaXRpb24uXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRNYXJrZXJQb3NpdGlvbih4LCB5KSB7XG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIG1hcmtlciBkb2Vzbid0IGdvIG91dCBvZiBib3VuZHNcbiAgICAgIHggPSB4IDwgMCA/IDAgOiB4ID4gY29sb3JBcmVhRGltcy53aWR0aCA/IGNvbG9yQXJlYURpbXMud2lkdGggOiB4O1xuICAgICAgeSA9IHkgPCAwID8gMCA6IHkgPiBjb2xvckFyZWFEaW1zLmhlaWdodCA/IGNvbG9yQXJlYURpbXMuaGVpZ2h0IDogeTtcblxuICAgICAgLy8gU2V0IHRoZSBwb3NpdGlvblxuICAgICAgY29sb3JNYXJrZXIuc3R5bGUubGVmdCA9IHggKyBcInB4XCI7XG4gICAgICBjb2xvck1hcmtlci5zdHlsZS50b3AgPSB5ICsgXCJweFwiO1xuXG4gICAgICAvLyBVcGRhdGUgdGhlIGNvbG9yXG4gICAgICBzZXRDb2xvckF0UG9zaXRpb24oeCwgeSk7XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgbWFya2VyIGlzIGZvY3VzZWRcbiAgICAgIGNvbG9yTWFya2VyLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGNvbG9yIHBpY2tlcidzIGlucHV0IGZpZWxkIGFuZCBwcmV2aWV3IHRodW1iLlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJnYmEgUmVkLCBncmVlbiwgYmx1ZSBhbmQgYWxwaGEgdmFsdWVzLlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtoc3ZhXSBIdWUsIHNhdHVyYXRpb24sIHZhbHVlIGFuZCBhbHBoYSB2YWx1ZXMuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1cGRhdGVDb2xvcihyZ2JhLCBoc3ZhKSB7aWYgKHJnYmEgPT09IHZvaWQgMCkge3JnYmEgPSB7fTt9aWYgKGhzdmEgPT09IHZvaWQgMCkge2hzdmEgPSB7fTt9XG4gICAgICBsZXQgZm9ybWF0ID0gc2V0dGluZ3MuZm9ybWF0O1xuXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiByZ2JhKSB7XG4gICAgICAgIGN1cnJlbnRDb2xvcltrZXldID0gcmdiYVtrZXldO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBoc3ZhKSB7XG4gICAgICAgIGN1cnJlbnRDb2xvcltrZXldID0gaHN2YVtrZXldO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBoZXggPSBSR0JBVG9IZXgoY3VycmVudENvbG9yKTtcbiAgICAgIGNvbnN0IG9wYXF1ZUhleCA9IGhleC5zdWJzdHJpbmcoMCwgNyk7XG5cbiAgICAgIGNvbG9yTWFya2VyLnN0eWxlLmNvbG9yID0gb3BhcXVlSGV4O1xuICAgICAgYWxwaGFNYXJrZXIucGFyZW50Tm9kZS5zdHlsZS5jb2xvciA9IG9wYXF1ZUhleDtcbiAgICAgIGFscGhhTWFya2VyLnN0eWxlLmNvbG9yID0gaGV4O1xuICAgICAgY29sb3JQcmV2aWV3LnN0eWxlLmNvbG9yID0gaGV4O1xuXG4gICAgICAvLyBGb3JjZSByZXBhaW50IHRoZSBjb2xvciBhbmQgYWxwaGEgZ3JhZGllbnRzIGFzIGEgd29ya2Fyb3VuZCBmb3IgYSBHb29nbGUgQ2hyb21lIGJ1Z1xuICAgICAgY29sb3JBcmVhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBjb2xvckFyZWEub2Zmc2V0SGVpZ2h0O1xuICAgICAgY29sb3JBcmVhLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgIGFscGhhTWFya2VyLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgYWxwaGFNYXJrZXIubmV4dEVsZW1lbnRTaWJsaW5nLm9mZnNldEhlaWdodDtcbiAgICAgIGFscGhhTWFya2VyLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cbiAgICAgIGlmIChmb3JtYXQgPT09ICdtaXhlZCcpIHtcbiAgICAgICAgZm9ybWF0ID0gY3VycmVudENvbG9yLmEgPT09IDEgPyAnaGV4JyA6ICdyZ2InO1xuICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdhdXRvJykge1xuICAgICAgICBmb3JtYXQgPSBjdXJyZW50Rm9ybWF0O1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgICAgICBjYXNlICdoZXgnOlxuICAgICAgICAgIGNvbG9yVmFsdWUudmFsdWUgPSBoZXg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JnYic6XG4gICAgICAgICAgY29sb3JWYWx1ZS52YWx1ZSA9IFJHQkFUb1N0cihjdXJyZW50Q29sb3IpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdoc2wnOlxuICAgICAgICAgIGNvbG9yVmFsdWUudmFsdWUgPSBIU0xBVG9TdHIoSFNWQXRvSFNMQShjdXJyZW50Q29sb3IpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gU2VsZWN0IHRoZSBjdXJyZW50IGZvcm1hdCBpbiB0aGUgZm9ybWF0IHN3aXRjaGVyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsci1mb3JtYXQgW3ZhbHVlPVxcXCJcIiArIGZvcm1hdCArIFwiXFxcIl1cIikuY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGh1ZSB3aGVuIGl0cyBzbGlkZXIgaXMgbW92ZWQuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRIdWUoKSB7XG4gICAgICBjb25zdCBodWUgPSBodWVTbGlkZXIudmFsdWUgKiAxO1xuICAgICAgY29uc3QgeCA9IGNvbG9yTWFya2VyLnN0eWxlLmxlZnQucmVwbGFjZSgncHgnLCAnJykgKiAxO1xuICAgICAgY29uc3QgeSA9IGNvbG9yTWFya2VyLnN0eWxlLnRvcC5yZXBsYWNlKCdweCcsICcnKSAqIDE7XG5cbiAgICAgIHBpY2tlci5zdHlsZS5jb2xvciA9IFwiaHNsKFwiICsgaHVlICsgXCIsIDEwMCUsIDUwJSlcIjtcbiAgICAgIGh1ZU1hcmtlci5zdHlsZS5sZWZ0ID0gaHVlIC8gMzYwICogMTAwICsgXCIlXCI7XG5cbiAgICAgIHNldENvbG9yQXRQb3NpdGlvbih4LCB5KTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgYWxwaGEgd2hlbiBpdHMgc2xpZGVyIGlzIG1vdmVkLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0QWxwaGEoKSB7XG4gICAgICBjb25zdCBhbHBoYSA9IGFscGhhU2xpZGVyLnZhbHVlIC8gMTAwO1xuXG4gICAgICBhbHBoYU1hcmtlci5zdHlsZS5sZWZ0ID0gYWxwaGEgKiAxMDAgKyBcIiVcIjtcbiAgICAgIHVwZGF0ZUNvbG9yKHsgYTogYWxwaGEgfSk7XG4gICAgICBwaWNrQ29sb3IoKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgSFNWQSB0byBSR0JBLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGhzdmEgSHVlLCBzYXR1cmF0aW9uLCB2YWx1ZSBhbmQgYWxwaGEgdmFsdWVzLlxyXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBSZWQsIGdyZWVuLCBibHVlIGFuZCBhbHBoYSB2YWx1ZXMuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBIU1ZBdG9SR0JBKGhzdmEpIHtcbiAgICAgIGNvbnN0IHNhdHVyYXRpb24gPSBoc3ZhLnMgLyAxMDA7XG4gICAgICBjb25zdCB2YWx1ZSA9IGhzdmEudiAvIDEwMDtcbiAgICAgIGxldCBjaHJvbWEgPSBzYXR1cmF0aW9uICogdmFsdWU7XG4gICAgICBsZXQgaHVlQnk2MCA9IGhzdmEuaCAvIDYwO1xuICAgICAgbGV0IHggPSBjaHJvbWEgKiAoMSAtIE1hdGguYWJzKGh1ZUJ5NjAgJSAyIC0gMSkpO1xuICAgICAgbGV0IG0gPSB2YWx1ZSAtIGNocm9tYTtcblxuICAgICAgY2hyb21hID0gY2hyb21hICsgbTtcbiAgICAgIHggPSB4ICsgbTtcblxuICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKGh1ZUJ5NjApICUgNjtcbiAgICAgIGNvbnN0IHJlZCA9IFtjaHJvbWEsIHgsIG0sIG0sIHgsIGNocm9tYV1baW5kZXhdO1xuICAgICAgY29uc3QgZ3JlZW4gPSBbeCwgY2hyb21hLCBjaHJvbWEsIHgsIG0sIG1dW2luZGV4XTtcbiAgICAgIGNvbnN0IGJsdWUgPSBbbSwgbSwgeCwgY2hyb21hLCBjaHJvbWEsIHhdW2luZGV4XTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcjogTWF0aC5yb3VuZChyZWQgKiAyNTUpLFxuICAgICAgICBnOiBNYXRoLnJvdW5kKGdyZWVuICogMjU1KSxcbiAgICAgICAgYjogTWF0aC5yb3VuZChibHVlICogMjU1KSxcbiAgICAgICAgYTogaHN2YS5hXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBIU1ZBIHRvIEhTTEEuXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaHN2YSBIdWUsIHNhdHVyYXRpb24sIHZhbHVlIGFuZCBhbHBoYSB2YWx1ZXMuXHJcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IEh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzIGFuZCBhbHBoYSB2YWx1ZXMuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBIU1ZBdG9IU0xBKGhzdmEpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gaHN2YS52IC8gMTAwO1xuICAgICAgY29uc3QgbGlnaHRuZXNzID0gdmFsdWUgKiAoMSAtIGhzdmEucyAvIDEwMCAvIDIpO1xuICAgICAgbGV0IHNhdHVyYXRpb247XG5cbiAgICAgIGlmIChsaWdodG5lc3MgPiAwICYmIGxpZ2h0bmVzcyA8IDEpIHtcbiAgICAgICAgc2F0dXJhdGlvbiA9IE1hdGgucm91bmQoKHZhbHVlIC0gbGlnaHRuZXNzKSAvIE1hdGgubWluKGxpZ2h0bmVzcywgMSAtIGxpZ2h0bmVzcykgKiAxMDApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBoOiBoc3ZhLmgsXG4gICAgICAgIHM6IHNhdHVyYXRpb24gfHwgMCxcbiAgICAgICAgbDogTWF0aC5yb3VuZChsaWdodG5lc3MgKiAxMDApLFxuICAgICAgICBhOiBoc3ZhLmFcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IFJHQkEgdG8gSFNWQS5cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZ2JhIFJlZCwgZ3JlZW4sIGJsdWUgYW5kIGFscGhhIHZhbHVlcy5cclxuICAgICAqIEByZXR1cm4ge29iamVjdH0gSHVlLCBzYXR1cmF0aW9uLCB2YWx1ZSBhbmQgYWxwaGEgdmFsdWVzLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gUkdCQXRvSFNWQShyZ2JhKSB7XG4gICAgICBjb25zdCByZWQgPSByZ2JhLnIgLyAyNTU7XG4gICAgICBjb25zdCBncmVlbiA9IHJnYmEuZyAvIDI1NTtcbiAgICAgIGNvbnN0IGJsdWUgPSByZ2JhLmIgLyAyNTU7XG4gICAgICBjb25zdCB4bWF4ID0gTWF0aC5tYXgocmVkLCBncmVlbiwgYmx1ZSk7XG4gICAgICBjb25zdCB4bWluID0gTWF0aC5taW4ocmVkLCBncmVlbiwgYmx1ZSk7XG4gICAgICBjb25zdCBjaHJvbWEgPSB4bWF4IC0geG1pbjtcbiAgICAgIGNvbnN0IHZhbHVlID0geG1heDtcbiAgICAgIGxldCBodWUgPSAwO1xuICAgICAgbGV0IHNhdHVyYXRpb24gPSAwO1xuXG4gICAgICBpZiAoY2hyb21hKSB7XG4gICAgICAgIGlmICh4bWF4ID09PSByZWQpIHtodWUgPSAoZ3JlZW4gLSBibHVlKSAvIGNocm9tYTt9XG4gICAgICAgIGlmICh4bWF4ID09PSBncmVlbikge2h1ZSA9IDIgKyAoYmx1ZSAtIHJlZCkgLyBjaHJvbWE7fVxuICAgICAgICBpZiAoeG1heCA9PT0gYmx1ZSkge2h1ZSA9IDQgKyAocmVkIC0gZ3JlZW4pIC8gY2hyb21hO31cbiAgICAgICAgaWYgKHhtYXgpIHtzYXR1cmF0aW9uID0gY2hyb21hIC8geG1heDt9XG4gICAgICB9XG5cbiAgICAgIGh1ZSA9IE1hdGguZmxvb3IoaHVlICogNjApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBoOiBodWUgPCAwID8gaHVlICsgMzYwIDogaHVlLFxuICAgICAgICBzOiBNYXRoLnJvdW5kKHNhdHVyYXRpb24gKiAxMDApLFxuICAgICAgICB2OiBNYXRoLnJvdW5kKHZhbHVlICogMTAwKSxcbiAgICAgICAgYTogcmdiYS5hXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogUGFyc2UgYSBzdHJpbmcgdG8gUkdCQS5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgU3RyaW5nIHJlcHJlc2VudGluZyBhIGNvbG9yLlxyXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBSZWQsIGdyZWVuLCBibHVlIGFuZCBhbHBoYSB2YWx1ZXMuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzdHJUb1JHQkEoc3RyKSB7XG4gICAgICBjb25zdCByZWdleCA9IC9eKChyZ2JhKXxyZ2IpW1xcRF0rKFtcXGQuXSspW1xcRF0rKFtcXGQuXSspW1xcRF0rKFtcXGQuXSspW1xcRF0qPyhbXFxkLl0rfCQpL2k7XG4gICAgICBsZXQgbWF0Y2gsIHJnYmE7XG5cbiAgICAgIC8vIERlZmF1bHQgdG8gYmxhY2sgZm9yIGludmFsaWQgY29sb3Igc3RyaW5nc1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwJztcblxuICAgICAgLy8gVXNlIGNhbnZhcyB0byBjb252ZXJ0IHRoZSBzdHJpbmcgdG8gYSB2YWxpZCBjb2xvciBzdHJpbmdcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBzdHI7XG4gICAgICBtYXRjaCA9IHJlZ2V4LmV4ZWMoY3R4LmZpbGxTdHlsZSk7XG5cbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICByZ2JhID0ge1xuICAgICAgICAgIHI6IG1hdGNoWzNdICogMSxcbiAgICAgICAgICBnOiBtYXRjaFs0XSAqIDEsXG4gICAgICAgICAgYjogbWF0Y2hbNV0gKiAxLFxuICAgICAgICAgIGE6IG1hdGNoWzZdICogMVxuICAgICAgICB9O1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXRjaCA9IGN0eC5maWxsU3R5bGUucmVwbGFjZSgnIycsICcnKS5tYXRjaCgvLnsyfS9nKS5tYXAoKGgpID0+IHBhcnNlSW50KGgsIDE2KSk7XG4gICAgICAgIHJnYmEgPSB7XG4gICAgICAgICAgcjogbWF0Y2hbMF0sXG4gICAgICAgICAgZzogbWF0Y2hbMV0sXG4gICAgICAgICAgYjogbWF0Y2hbMl0sXG4gICAgICAgICAgYTogMVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmdiYTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgUkdCQSB0byBIZXguXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmdiYSBSZWQsIGdyZWVuLCBibHVlIGFuZCBhbHBoYSB2YWx1ZXMuXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IEhleCBjb2xvciBzdHJpbmcuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBSR0JBVG9IZXgocmdiYSkge1xuICAgICAgbGV0IFIgPSByZ2JhLnIudG9TdHJpbmcoMTYpO1xuICAgICAgbGV0IEcgPSByZ2JhLmcudG9TdHJpbmcoMTYpO1xuICAgICAgbGV0IEIgPSByZ2JhLmIudG9TdHJpbmcoMTYpO1xuICAgICAgbGV0IEEgPSAnJztcblxuICAgICAgaWYgKHJnYmEuciA8IDE2KSB7XG4gICAgICAgIFIgPSAnMCcgKyBSO1xuICAgICAgfVxuXG4gICAgICBpZiAocmdiYS5nIDwgMTYpIHtcbiAgICAgICAgRyA9ICcwJyArIEc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZ2JhLmIgPCAxNikge1xuICAgICAgICBCID0gJzAnICsgQjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNldHRpbmdzLmFscGhhICYmIChyZ2JhLmEgPCAxIHx8IHNldHRpbmdzLmZvcmNlQWxwaGEpKSB7XG4gICAgICAgIGNvbnN0IGFscGhhID0gcmdiYS5hICogMjU1IHwgMDtcbiAgICAgICAgQSA9IGFscGhhLnRvU3RyaW5nKDE2KTtcblxuICAgICAgICBpZiAoYWxwaGEgPCAxNikge1xuICAgICAgICAgIEEgPSAnMCcgKyBBO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnIycgKyBSICsgRyArIEIgKyBBO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQ29udmVydCBSR0JBIHZhbHVlcyB0byBhIENTUyByZ2IvcmdiYSBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmdiYSBSZWQsIGdyZWVuLCBibHVlIGFuZCBhbHBoYSB2YWx1ZXMuXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IENTUyBjb2xvciBzdHJpbmcuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBSR0JBVG9TdHIocmdiYSkge1xuICAgICAgaWYgKCFzZXR0aW5ncy5hbHBoYSB8fCByZ2JhLmEgPT09IDEgJiYgIXNldHRpbmdzLmZvcmNlQWxwaGEpIHtcbiAgICAgICAgcmV0dXJuIFwicmdiKFwiICsgcmdiYS5yICsgXCIsIFwiICsgcmdiYS5nICsgXCIsIFwiICsgcmdiYS5iICsgXCIpXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJyZ2JhKFwiICsgcmdiYS5yICsgXCIsIFwiICsgcmdiYS5nICsgXCIsIFwiICsgcmdiYS5iICsgXCIsIFwiICsgcmdiYS5hICsgXCIpXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IEhTTEEgdmFsdWVzIHRvIGEgQ1NTIGhzbC9oc2xhIHN0cmluZy5cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBoc2xhIEh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzIGFuZCBhbHBoYSB2YWx1ZXMuXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IENTUyBjb2xvciBzdHJpbmcuXHJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBIU0xBVG9TdHIoaHNsYSkge1xuICAgICAgaWYgKCFzZXR0aW5ncy5hbHBoYSB8fCBoc2xhLmEgPT09IDEgJiYgIXNldHRpbmdzLmZvcmNlQWxwaGEpIHtcbiAgICAgICAgcmV0dXJuIFwiaHNsKFwiICsgaHNsYS5oICsgXCIsIFwiICsgaHNsYS5zICsgXCIlLCBcIiArIGhzbGEubCArIFwiJSlcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcImhzbGEoXCIgKyBoc2xhLmggKyBcIiwgXCIgKyBoc2xhLnMgKyBcIiUsIFwiICsgaHNsYS5sICsgXCIlLCBcIiArIGhzbGEuYSArIFwiKVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogSW5pdCB0aGUgY29sb3IgcGlja2VyLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xyLXBpY2tlcicpKSByZXR1cm47IC8vKiogRE8gTk9UIFJFTU9WRTogUHJldmVudCBiaW5kaW5nIGV2ZW50cyBtdWx0aXBsZSB0aW1lc1xuICAgICAgLy8gUmVuZGVyIHRoZSBVSVxuICAgICAgY29udGFpbmVyID0gdW5kZWZpbmVkO1xuICAgICAgcGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwaWNrZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjbHItcGlja2VyJyk7XG4gICAgICBwaWNrZXIuY2xhc3NOYW1lID0gJ2Nsci1waWNrZXInO1xuICAgICAgcGlja2VyLmlubmVySFRNTCA9XG4gICAgICBcIjxpbnB1dCBpZD1cXFwiY2xyLWNvbG9yLXZhbHVlXFxcIiBuYW1lPVxcXCJjbHItY29sb3ItdmFsdWVcXFwiIGNsYXNzPVxcXCJjbHItY29sb3JcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJcXFwiIHNwZWxsY2hlY2s9XFxcImZhbHNlXFxcIiBhcmlhLWxhYmVsPVxcXCJcIiArIHNldHRpbmdzLmExMXkuaW5wdXQgKyBcIlxcXCI+XCIgKyAoXCI8ZGl2IGlkPVxcXCJjbHItY29sb3ItYXJlYVxcXCIgY2xhc3M9XFxcImNsci1ncmFkaWVudFxcXCIgcm9sZT1cXFwiYXBwbGljYXRpb25cXFwiIGFyaWEtbGFiZWw9XFxcIlwiICtcbiAgICAgIHNldHRpbmdzLmExMXkuaW5zdHJ1Y3Rpb24gKyBcIlxcXCI+XCIpICtcbiAgICAgICc8ZGl2IGlkPVwiY2xyLWNvbG9yLW1hcmtlclwiIGNsYXNzPVwiY2xyLW1hcmtlclwiIHRhYmluZGV4PVwiMFwiPjwvZGl2PicgK1xuICAgICAgJzwvZGl2PicgK1xuICAgICAgJzxkaXYgY2xhc3M9XCJjbHItaHVlXCI+JyArIChcIjxpbnB1dCBpZD1cXFwiY2xyLWh1ZS1zbGlkZXJcXFwiIG5hbWU9XFxcImNsci1odWUtc2xpZGVyXFxcIiB0eXBlPVxcXCJyYW5nZVxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjM2MFxcXCIgc3RlcD1cXFwiMVxcXCIgYXJpYS1sYWJlbD1cXFwiXCIgK1xuICAgICAgc2V0dGluZ3MuYTExeS5odWVTbGlkZXIgKyBcIlxcXCI+XCIpICtcbiAgICAgICc8ZGl2IGlkPVwiY2xyLWh1ZS1tYXJrZXJcIj48L2Rpdj4nICtcbiAgICAgICc8L2Rpdj4nICtcbiAgICAgICc8ZGl2IGNsYXNzPVwiY2xyLWFscGhhXCI+JyArIChcIjxpbnB1dCBpZD1cXFwiY2xyLWFscGhhLXNsaWRlclxcXCIgbmFtZT1cXFwiY2xyLWFscGhhLXNsaWRlclxcXCIgdHlwZT1cXFwicmFuZ2VcXFwiIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIxMDBcXFwiIHN0ZXA9XFxcIjFcXFwiIGFyaWEtbGFiZWw9XFxcIlwiICtcbiAgICAgIHNldHRpbmdzLmExMXkuYWxwaGFTbGlkZXIgKyBcIlxcXCI+XCIpICtcbiAgICAgICc8ZGl2IGlkPVwiY2xyLWFscGhhLW1hcmtlclwiPjwvZGl2PicgK1xuICAgICAgJzxzcGFuPjwvc3Bhbj4nICtcbiAgICAgICc8L2Rpdj4nICtcbiAgICAgICc8ZGl2IGlkPVwiY2xyLWZvcm1hdFwiIGNsYXNzPVwiY2xyLWZvcm1hdFwiPicgK1xuICAgICAgJzxmaWVsZHNldCBjbGFzcz1cImNsci1zZWdtZW50ZWRcIj4nICsgKFwiPGxlZ2VuZD5cIiArXG4gICAgICBzZXR0aW5ncy5hMTF5LmZvcm1hdCArIFwiPC9sZWdlbmQ+XCIpICtcbiAgICAgICc8aW5wdXQgaWQ9XCJjbHItZjFcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2xyLWZvcm1hdFwiIHZhbHVlPVwiaGV4XCI+JyArXG4gICAgICAnPGxhYmVsIGZvcj1cImNsci1mMVwiPkhleDwvbGFiZWw+JyArXG4gICAgICAnPGlucHV0IGlkPVwiY2xyLWYyXCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNsci1mb3JtYXRcIiB2YWx1ZT1cInJnYlwiPicgK1xuICAgICAgJzxsYWJlbCBmb3I9XCJjbHItZjJcIj5SR0I8L2xhYmVsPicgK1xuICAgICAgJzxpbnB1dCBpZD1cImNsci1mM1wiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjbHItZm9ybWF0XCIgdmFsdWU9XCJoc2xcIj4nICtcbiAgICAgICc8bGFiZWwgZm9yPVwiY2xyLWYzXCI+SFNMPC9sYWJlbD4nICtcbiAgICAgICc8c3Bhbj48L3NwYW4+JyArXG4gICAgICAnPC9maWVsZHNldD4nICtcbiAgICAgICc8L2Rpdj4nICtcbiAgICAgICc8ZGl2IGlkPVwiY2xyLXN3YXRjaGVzXCIgY2xhc3M9XCJjbHItc3dhdGNoZXNcIj48L2Rpdj4nICsgKFwiPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJjbHItY2xlYXJcXFwiIGNsYXNzPVxcXCJjbHItY2xlYXJcXFwiIGFyaWEtbGFiZWw9XFxcIlwiICtcbiAgICAgIHNldHRpbmdzLmExMXkuY2xlYXIgKyBcIlxcXCI+XCIgKyBzZXR0aW5ncy5jbGVhckxhYmVsICsgXCI8L2J1dHRvbj5cIikgK1xuICAgICAgJzxkaXYgaWQ9XCJjbHItY29sb3ItcHJldmlld1wiIGNsYXNzPVwiY2xyLXByZXZpZXdcIj4nICsgKFwiPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJjbHItY2xvc2VcXFwiIGNsYXNzPVxcXCJjbHItY2xvc2VcXFwiIGFyaWEtbGFiZWw9XFxcIlwiICtcbiAgICAgIHNldHRpbmdzLmExMXkuY2xvc2UgKyBcIlxcXCI+XCIgKyBzZXR0aW5ncy5jbG9zZUxhYmVsICsgXCI8L2J1dHRvbj5cIikgK1xuICAgICAgJzwvZGl2PicgKyAoXCI8c3BhbiBpZD1cXFwiY2xyLW9wZW4tbGFiZWxcXFwiIGhpZGRlbj5cIiArXG4gICAgICBzZXR0aW5ncy5hMTF5Lm9wZW4gKyBcIjwvc3Bhbj5cIikgKyAoXCI8c3BhbiBpZD1cXFwiY2xyLXN3YXRjaC1sYWJlbFxcXCIgaGlkZGVuPlwiICtcbiAgICAgIHNldHRpbmdzLmExMXkuc3dhdGNoICsgXCI8L3NwYW4+XCIpO1xuXG4gICAgICAvLyBBcHBlbmQgdGhlIGNvbG9yIHBpY2tlciB0byB0aGUgRE9NXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBpY2tlcik7XG5cbiAgICAgIC8vIFJlZmVyZW5jZSB0aGUgVUkgZWxlbWVudHNcbiAgICAgIGNvbG9yQXJlYSA9IGdldEVsKCdjbHItY29sb3ItYXJlYScpO1xuICAgICAgY29sb3JNYXJrZXIgPSBnZXRFbCgnY2xyLWNvbG9yLW1hcmtlcicpO1xuICAgICAgY2xlYXJCdXR0b24gPSBnZXRFbCgnY2xyLWNsZWFyJyk7XG4gICAgICBjbG9zZUJ1dHRvbiA9IGdldEVsKCdjbHItY2xvc2UnKTtcbiAgICAgIGNvbG9yUHJldmlldyA9IGdldEVsKCdjbHItY29sb3ItcHJldmlldycpO1xuICAgICAgY29sb3JWYWx1ZSA9IGdldEVsKCdjbHItY29sb3ItdmFsdWUnKTtcbiAgICAgIGh1ZVNsaWRlciA9IGdldEVsKCdjbHItaHVlLXNsaWRlcicpO1xuICAgICAgaHVlTWFya2VyID0gZ2V0RWwoJ2Nsci1odWUtbWFya2VyJyk7XG4gICAgICBhbHBoYVNsaWRlciA9IGdldEVsKCdjbHItYWxwaGEtc2xpZGVyJyk7XG4gICAgICBhbHBoYU1hcmtlciA9IGdldEVsKCdjbHItYWxwaGEtbWFya2VyJyk7XG5cbiAgICAgIC8vIEJpbmQgdGhlIHBpY2tlciB0byB0aGUgZGVmYXVsdCBzZWxlY3RvclxuICAgICAgYmluZEZpZWxkcyhzZXR0aW5ncy5lbCk7XG4gICAgICB3cmFwRmllbGRzKHNldHRpbmdzLmVsKTtcblxuICAgICAgYWRkTGlzdGVuZXIocGlja2VyLCAnbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHBpY2tlci5jbGFzc0xpc3QucmVtb3ZlKCdjbHIta2V5Ym9hcmQtbmF2Jyk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKGNvbG9yQXJlYSwgJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBhZGRMaXN0ZW5lcihkb2N1bWVudCwgJ21vdXNlbW92ZScsIG1vdmVNYXJrZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKGNvbG9yQXJlYSwgJ2NvbnRleHRtZW51JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcblxuICAgICAgYWRkTGlzdGVuZXIoY29sb3JBcmVhLCAndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBtb3ZlTWFya2VyLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKGNvbG9yTWFya2VyLCAnbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGFkZExpc3RlbmVyKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbW92ZU1hcmtlcik7XG4gICAgICB9KTtcblxuICAgICAgYWRkTGlzdGVuZXIoY29sb3JNYXJrZXIsICd0b3VjaHN0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG1vdmVNYXJrZXIsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgICB9KTtcblxuICAgICAgYWRkTGlzdGVuZXIoY29sb3JWYWx1ZSwgJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbG9yVmFsdWUudmFsdWU7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRFbCB8fCBzZXR0aW5ncy5pbmxpbmUpIHtcbiAgICAgICAgICBjb25zdCBjb2xvciA9IHZhbHVlID09PSAnJyA/IHZhbHVlIDogc2V0Q29sb3JGcm9tU3RyKHZhbHVlKTtcbiAgICAgICAgICBwaWNrQ29sb3IoY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgYWRkTGlzdGVuZXIoY2xlYXJCdXR0b24sICdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBwaWNrQ29sb3IoJycpO1xuICAgICAgICBjbG9zZVBpY2tlcigpO1xuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKGNsb3NlQnV0dG9uLCAnY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgcGlja0NvbG9yKCk7XG4gICAgICAgIGNsb3NlUGlja2VyKCk7XG4gICAgICB9KTtcblxuICAgICAgYWRkTGlzdGVuZXIoZ2V0RWwoJ2Nsci1mb3JtYXQnKSwgJ2NsaWNrJywgJy5jbHItZm9ybWF0IGlucHV0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGN1cnJlbnRGb3JtYXQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHVwZGF0ZUNvbG9yKCk7XG4gICAgICAgIHBpY2tDb2xvcigpO1xuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKHBpY2tlciwgJ2NsaWNrJywgJy5jbHItc3dhdGNoZXMgYnV0dG9uJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldENvbG9yRnJvbVN0cihldmVudC50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICBwaWNrQ29sb3IoKTtcblxuICAgICAgICBpZiAoc2V0dGluZ3Muc3dhdGNoZXNPbmx5KSB7XG4gICAgICAgICAgY2xvc2VQaWNrZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKGRvY3VtZW50LCAnbW91c2V1cCcsIChldmVudCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlTWFya2VyKTtcbiAgICAgIH0pO1xuXG4gICAgICBhZGRMaXN0ZW5lcihkb2N1bWVudCwgJ3RvdWNoZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG1vdmVNYXJrZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKGRvY3VtZW50LCAnbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGtleWJvYXJkTmF2ID0gZmFsc2U7XG4gICAgICAgIHBpY2tlci5jbGFzc0xpc3QucmVtb3ZlKCdjbHIta2V5Ym9hcmQtbmF2Jyk7XG4gICAgICAgIGNsb3NlUGlja2VyKCk7XG4gICAgICB9KTtcblxuICAgICAgYWRkTGlzdGVuZXIoZG9jdW1lbnQsICdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgICAgICBjb25zdCBuYXZLZXlzID0gWydUYWInLCAnQXJyb3dVcCcsICdBcnJvd0Rvd24nLCAnQXJyb3dMZWZ0JywgJ0Fycm93UmlnaHQnXTtcblxuICAgICAgICBpZiAoa2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgIGNsb3NlUGlja2VyKHRydWUpO1xuXG4gICAgICAgICAgLy8gRGlzcGxheSBmb2N1cyByaW5ncyB3aGVuIHVzaW5nIHRoZSBrZXlib2FyZFxuICAgICAgICB9IGVsc2UgaWYgKG5hdktleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGtleWJvYXJkTmF2ID0gdHJ1ZTtcbiAgICAgICAgICBwaWNrZXIuY2xhc3NMaXN0LmFkZCgnY2xyLWtleWJvYXJkLW5hdicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVHJhcCB0aGUgZm9jdXMgd2l0aGluIHRoZSBjb2xvciBwaWNrZXIgd2hpbGUgaXQncyBvcGVuXG4gICAgICAgIGlmIChrZXkgPT09ICdUYWInICYmIHRhcmdldC5tYXRjaGVzKCcuY2xyLXBpY2tlciAqJykpIHtcbiAgICAgICAgICBjb25zdCBmb2N1c2FibGVzID0gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKTtcbiAgICAgICAgICBjb25zdCBmaXJzdEZvY3VzYWJsZSA9IGZvY3VzYWJsZXMuc2hpZnQoKTtcbiAgICAgICAgICBjb25zdCBsYXN0Rm9jdXNhYmxlID0gZm9jdXNhYmxlcy5wb3AoKTtcblxuICAgICAgICAgIGlmIChzaGlmdEtleSAmJiB0YXJnZXQgPT09IGZpcnN0Rm9jdXNhYmxlKSB7XG4gICAgICAgICAgICBsYXN0Rm9jdXNhYmxlLmZvY3VzKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXNoaWZ0S2V5ICYmIHRhcmdldCA9PT0gbGFzdEZvY3VzYWJsZSkge1xuICAgICAgICAgICAgZmlyc3RGb2N1c2FibGUuZm9jdXMoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgYWRkTGlzdGVuZXIoZG9jdW1lbnQsICdjbGljaycsICcuY2xyLWZpZWxkIGJ1dHRvbicsIChldmVudCkgPT4ge1xuICAgICAgICAvLyBSZXNldCBhbnkgcHJldmlvdXNseSBzZXQgcGVyLWluc3RhbmNlIG9wdGlvbnNcbiAgICAgICAgaWYgKGhhc0luc3RhbmNlKSB7XG4gICAgICAgICAgcmVzZXRWaXJ0dWFsSW5zdGFuY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9wZW4gdGhlIGNvbG9yIHBpY2tlclxuICAgICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgICB9KTtcblxuICAgICAgYWRkTGlzdGVuZXIoY29sb3JNYXJrZXIsICdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG1vdmVtZW50cyA9IHtcbiAgICAgICAgICBBcnJvd1VwOiBbMCwgLTFdLFxuICAgICAgICAgIEFycm93RG93bjogWzAsIDFdLFxuICAgICAgICAgIEFycm93TGVmdDogWy0xLCAwXSxcbiAgICAgICAgICBBcnJvd1JpZ2h0OiBbMSwgMF1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMobW92ZW1lbnRzKS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICAgICAgbW92ZU1hcmtlck9uS2V5ZG93biguLi5tb3ZlbWVudHNbZXZlbnQua2V5XSk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGFkZExpc3RlbmVyKGNvbG9yQXJlYSwgJ2NsaWNrJywgbW92ZU1hcmtlcik7XG4gICAgICBhZGRMaXN0ZW5lcihodWVTbGlkZXIsICdpbnB1dCcsIHNldEh1ZSk7XG4gICAgICBhZGRMaXN0ZW5lcihhbHBoYVNsaWRlciwgJ2lucHV0Jywgc2V0QWxwaGEpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGEgbGlzdCBvZiBmb2N1c2FibGUgZWxlbWVudHMgd2l0aGluIHRoZSBjb2xvciBwaWNrZXIuXHJcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gVGhlIGxpc3Qgb2YgZm9jdXNhYmxlIERPTSBlbGVtbnRzLlxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKSB7XG4gICAgICBjb25zdCBjb250cm9scyA9IEFycmF5LmZyb20ocGlja2VyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCBidXR0b24nKSk7XG4gICAgICBjb25zdCBmb2N1c2FibGVzID0gY29udHJvbHMuZmlsdGVyKChub2RlKSA9PiAhIW5vZGUub2Zmc2V0V2lkdGgpO1xuXG4gICAgICByZXR1cm4gZm9jdXNhYmxlcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFNob3J0Y3V0IGZvciBnZXRFbGVtZW50QnlJZCB0byBvcHRpbWl6ZSB0aGUgbWluaWZpZWQgSlMuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGVsZW1lbnQgaWQuXHJcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBET00gZWxlbWVudCB3aXRoIHRoZSBwcm92aWRlZCBpZC5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldEVsKGlkKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogU2hvcnRjdXQgZm9yIGFkZEV2ZW50TGlzdGVuZXIgdG8gb3B0aW1pemUgdGhlIG1pbmlmaWVkIEpTLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gd2hpY2ggdGhlIGxpc3RlbmVyIGlzIGF0dGFjaGVkLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgRXZlbnQgdHlwZS5cclxuICAgICAqIEBwYXJhbSB7KHN0cmluZ3xmdW5jdGlvbil9IHNlbGVjdG9yIEV2ZW50IHRhcmdldCBpZiBkZWxlZ2F0aW9uIGlzIHVzZWQsIGV2ZW50IGhhbmRsZXIgaWYgbm90LlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2ZuXSBFdmVudCBoYW5kbGVyIGlmIGRlbGVnYXRpb24gaXMgdXNlZC5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVyKGNvbnRleHQsIHR5cGUsIHNlbGVjdG9yLCBmbikge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3I7XG5cbiAgICAgIC8vIERlbGVnYXRlIGV2ZW50IHRvIHRoZSB0YXJnZXQgb2YgdGhlIHNlbGVjdG9yXG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb250ZXh0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChldmVudC50YXJnZXQsIHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgZm4uY2FsbChldmVudC50YXJnZXQsIGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIElmIHRoZSBzZWxlY3RvciBpcyBub3QgYSBzdHJpbmcgdGhlbiBpdCdzIGEgZnVuY3Rpb25cbiAgICAgICAgLy8gaW4gd2hpY2ggY2FzZSB3ZSBuZWVkIGEgcmVndWxhciBldmVudCBsaXN0ZW5lclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm4gPSBzZWxlY3RvcjtcbiAgICAgICAgY29udGV4dC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIENhbGwgYSBmdW5jdGlvbiBvbmx5IHdoZW4gdGhlIERPTSBpcyByZWFkeS5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsLlxyXG4gICAgICogQHBhcmFtIHthcnJheX0gW2FyZ3NdIEFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZSBmdW5jdGlvbi5cclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIERPTVJlYWR5KGZuLCBhcmdzKSB7XG4gICAgICBhcmdzID0gYXJncyAhPT0gdW5kZWZpbmVkID8gYXJncyA6IFtdO1xuXG4gICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgIGZuKC4uLmFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICBmbiguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUG9seWZpbGwgZm9yIE5vZGVsaXN0LmZvckVhY2hcbiAgICBpZiAoTm9kZUxpc3QgIT09IHVuZGVmaW5lZCAmJiBOb2RlTGlzdC5wcm90b3R5cGUgJiYgIU5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gICAgICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuICAgIH1cblxuICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAvLyoqKioqKiogTlBNOiBDdXN0b20gY29kZSBzdGFydHMgaGVyZSAqKioqKioqKioqKioqKioqXG4gICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgLyoqXHJcbiAgICAgKiBDb3B5IHRoZSBhY3RpdmUgY29sb3IgdG8gdGhlIGxpbmtlZCBpbnB1dCBmaWVsZCBhbmQgc2V0IHRoZSBjb2xvci5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbY29sb3JdIENvbG9yIHZhbHVlIHRvIG92ZXJyaWRlIHRoZSBhY3RpdmUgY29sb3IuXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxlbGVtZW50fSBbdGFyZ2V0XSB0aGUgZWxlbWVudCBzZXR0aW5nIHRoZSBjb2xvciBvblxyXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0Q29sb3IoY29sb3IsIHRhcmdldCkge1xuICAgICAgY3VycmVudEVsID0gdGFyZ2V0O1xuICAgICAgb2xkQ29sb3IgPSBjdXJyZW50RWwudmFsdWU7XG4gICAgICBhdHRhY2hWaXJ0dWFsSW5zdGFuY2UodGFyZ2V0KTtcbiAgICAgIGN1cnJlbnRGb3JtYXQgPSBnZXRDb2xvckZvcm1hdEZyb21TdHIoY29sb3IpO1xuICAgICAgdXBkYXRlUGlja2VyUG9zaXRpb24oKTtcbiAgICAgIHNldENvbG9yRnJvbVN0cihjb2xvcik7XG4gICAgICBwaWNrQ29sb3IoKTtcbiAgICAgIGlmIChvbGRDb2xvciAhPT0gY29sb3IpIHtcbiAgICAgICAgY3VycmVudEVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEV4cG9zZSB0aGUgY29sb3IgcGlja2VyIHRvIHRoZSBnbG9iYWwgc2NvcGVcbiAgICBjb25zdCBDb2xvcmlzID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IG1ldGhvZHMgPSB7XG4gICAgICAgIGluaXQ6IGluaXQsXG4gICAgICAgIHNldDogY29uZmlndXJlLFxuICAgICAgICB3cmFwOiB3cmFwRmllbGRzLFxuICAgICAgICBjbG9zZTogY2xvc2VQaWNrZXIsXG4gICAgICAgIHNldEluc3RhbmNlOiBzZXRWaXJ0dWFsSW5zdGFuY2UsXG4gICAgICAgIHNldENvbG9yOiBzZXRDb2xvcixcbiAgICAgICAgcmVtb3ZlSW5zdGFuY2U6IHJlbW92ZVZpcnR1YWxJbnN0YW5jZSxcbiAgICAgICAgdXBkYXRlUG9zaXRpb246IHVwZGF0ZVBpY2tlclBvc2l0aW9uLFxuICAgICAgICByZWFkeTogRE9NUmVhZHlcbiAgICAgIH07XG5cbiAgICAgIGZ1bmN0aW9uIENvbG9yaXMob3B0aW9ucykge1xuICAgICAgICBET01SZWFkeSgoKSA9PiB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgYmluZEZpZWxkcyhvcHRpb25zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbmZpZ3VyZShvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBtZXRob2RzKSB7XG4gICAgICAgIENvbG9yaXNba2V5XSA9IGZ1bmN0aW9uICgpIHtmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHthcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO31cbiAgICAgICAgICBET01SZWFkeShtZXRob2RzW2tleV0sIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyBoYW5kbGUgd2luZG93IHJlc2l6ZSBldmVudHMgcmUtYWxpZ25pbmcgdGhlIHBhbmVsXG4gICAgICBET01SZWFkeSgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZXZlbnQpID0+IHtDb2xvcmlzLnVwZGF0ZVBvc2l0aW9uKCk7fSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXZlbnQpID0+IHtDb2xvcmlzLnVwZGF0ZVBvc2l0aW9uKCk7fSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIENvbG9yaXM7XG4gICAgfSkoKTtcblxuICAgIC8vIEVuc3VyZSBpbml0IGZ1bmN0aW9uIGlzIGF2YWlsYWJsZSBub3Qgb25seSBhcyBhcyBhIGRlZmF1bHQgaW1wb3J0XG4gICAgQ29sb3Jpcy5jb2xvcmlzID0gQ29sb3JpcztcblxuICAgIC8vIEluaXQgdGhlIGNvbG9yIHBpY2tlciB3aGVuIHRoZSBET00gaXMgcmVhZHlcbiAgICByZXR1cm4gQ29sb3JpcztcblxuICB9KSh3aW5kb3csIGRvY3VtZW50LCBNYXRoKTtcbn0pKCk7XG5cbmNvbnN0IF9jb2xvcmlzID0gQ29sb3Jpcy5jb2xvcmlzO1xuY29uc3QgX2luaXQgPSBDb2xvcmlzLmluaXQ7XG5jb25zdCBfc2V0ID0gQ29sb3Jpcy5zZXQ7XG5jb25zdCBfd3JhcCA9IENvbG9yaXMud3JhcDtcbmNvbnN0IF9jbG9zZSA9IENvbG9yaXMuY2xvc2U7XG5jb25zdCBfc2V0SW5zdGFuY2UgPSBDb2xvcmlzLnNldEluc3RhbmNlO1xuY29uc3QgX3JlbW92ZUluc3RhbmNlID0gQ29sb3Jpcy5yZW1vdmVJbnN0YW5jZTtcbmNvbnN0IF91cGRhdGVQb3NpdGlvbiA9IENvbG9yaXMudXBkYXRlUG9zaXRpb247XG5leHBvcnQgZGVmYXVsdCBDb2xvcmlzO1xuZXhwb3J0IHtcbiAgX2NvbG9yaXMgYXMgY29sb3JpcyxcbiAgX2Nsb3NlIGFzIGNsb3NlLFxuICBfaW5pdCBhcyBpbml0LFxuICBfc2V0IGFzIHNldCxcbiAgX3dyYXAgYXMgd3JhcCxcbiAgX3NldEluc3RhbmNlIGFzIHNldEluc3RhbmNlLFxuICBfcmVtb3ZlSW5zdGFuY2UgYXMgcmVtb3ZlSW5zdGFuY2UsXG4gIF91cGRhdGVQb3NpdGlvbiBhcyB1cGRhdGVQb3NpdGlvbiB9OyIsICJpbXBvcnQgQ29sb3JpcyBmcm9tIFwiQG1lbGxvd2FyZS9jb2xvcmlzXCI7XG5cbmltcG9ydCB7IEJhc2VXaWRnZXQgfSBmcm9tIFwiLi4vY29yZS9jb3JlLndpZGdldC5qc1wiO1xuXG4vLyBFbnN1cmUgQ29sb3JpcyBpcyBvbmx5IGluaXRpYWxpemVkIG9uY2VcbmxldCBjb2xvcmlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuLyoqXG4gKiBfX1ByaW1lRmFjZXMgQ29sb3IgUGlja2VyIFdpZGdldF9fXG4gKiBcbiAqIENvbG9yUGlja2VyIGlzIGFuIGlucHV0IGNvbXBvbmVudCB3aXRoIGEgY29sb3IgcGFsZXR0ZS5cbiAqIFxuICogVGhpcyB1c2VzIENvbG9yaXMgd3JpdHRlbiBpbiB2YW5pbGxhIEVTNi4gVG8gaW50ZXJhY3Qgd2l0aCB0aGUgY29sb3IgcGlja2VyLCB5b3UgY2FuIHVzZSB0aGUgZm9sbG93aW5nIGNvZGUuXG4gKiBcbiAqIGBgYGphdmFzY3JpcHRcbiAqIC8vIEFzc3VtaW5nIHRoZSB3aWRnZXQgdmFyaWFibGUgb2YgdGhlIGNvbG9yIHBpY2tlciB3YXMgc2V0IHRvIFwibXlDb2xvclBpY2tlclwiXG4gKiBjb25zdCBjb2xvclBpY2tlciA9IFBGKFwibXlDb2xvclBpY2tlclwiKTtcbiAqIFxuICogLy8gQnJpbmdzIHVwIHRoZSBjb2xvciBwaWNrZXIgKGlmIFwibW9kZVwiIHdhcyBzZXQgdG8gXCJwb3B1cFwiKVxuICogY29sb3JQaWNrZXIuc2hvdygpO1xuICogXG4gKiAvLyBIaWRlcyB1cCB0aGUgY29sb3IgcGlja2VyIChpZiBcIm1vZGVcIiB3YXMgc2V0IHRvIFwicG9wdXBcIilcbiAqIGNvbG9yUGlja2VyLmhpZGUoKTtcbiAqIFxuICogLy8gU2V0cyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGNvbG9yIHRvIFwiZ3JlZW5cIlxuICogY29sb3JQaWNrZXIuc2V0Q29sb3IoXCIwMEZGMDBcIik7XG4gKiBgYGBcbiAqIFxuICogQHR5cGVkZWYge1wiaW5saW5lXCIgfCBcInBvcHVwXCJ9IFByaW1lRmFjZXMud2lkZ2V0LkNvbG9yUGlja2VyLkRpc3BsYXlNb2RlIERpc3BsYXkgbW9kZSBvZiBhIGNvbG9yIHBpY2tlci4gYGlubGluZWBcbiAqIHJlbmRlcnMgdGhlIGNvbG9yIHBpY2tlciB3aXRoaW4gdGhlIG5vcm1hbCBjb250ZW50IGZsb3csIGBwb3B1cGAgY3JlYXRlcyBhbiBvdmVybGF5IHRoYXQgaXMgZGlzcGxheWVkIHdoZW4gdGhlIHVzZXJcbiAqIGNsaWNrcyBvbiB0aGUgY29sb3IuXG4gKiBcbiAqIEBwcm9wIHtKUXVlcnl9IGlucHV0IERPTSBlbGVtZW50IG9mIHRoZSBJTlBVVCBlbGVtZW50XG4gKiBAcHJvcCB7Ym9vbGVhbn0gcG9wdXAgVHJ1ZSBpZiBwb3B1cCBtb2RlLCBlbHNlIGlubGluZSBtb2RlXG4gKiBAcHJvcCB7Ym9vbGVhbn0gaGFzRmxvYXRMYWJlbCBJcyB0aGlzIGNvbXBvbmVudCB3cmFwcGVkIGluIGEgZmxvYXQgbGFiZWwuXG4gKiBcbiAqIEBpbnRlcmZhY2Uge1ByaW1lRmFjZXMud2lkZ2V0LkNvbG9yUGlja2VyQ2ZnfSBjZmcgVGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSB7QGxpbmsgIENvbG9yaXN9LlxuICogWW91IGNhbiBhY2Nlc3MgdGhpcyBjb25maWd1cmF0aW9uIHZpYSB7QGxpbmsgUHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldC5jZmd8QmFzZVdpZGdldC5jZmd9LiBQbGVhc2Ugbm90ZSB0aGF0IHRoaXNcbiAqIGNvbmZpZ3VyYXRpb24gaXMgdXN1YWxseSBtZWFudCB0byBiZSByZWFkLW9ubHkgYW5kIHNob3VsZCBub3QgYmUgbW9kaWZpZWQuXG4gKiBAZXh0ZW5kcyB7UHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldENmZ30gY2ZnXG4gKiBcbiAqIEBwcm9wIHtQcmltZUZhY2VzLndpZGdldC5Db2xvclBpY2tlci5EaXNwbGF5TW9kZX0gY2ZnLm1vZGUgV2hldGhlciB0aGUgY29sb3IgcGlja2VyIGlzIGRpc3BsYXllZCBpbmxpbmUgb3IgYXMgYSBwb3B1cC5cbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy5pbnN0YW5jZSBUaGUgaW5zdGFuY2Ugb2YgZm9yIGNvbmZpZ3VyaW5nIGluIHBvcHVwIG1vZGVcbiAqL1xuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyIGV4dGVuZHMgQmFzZVdpZGdldCB7XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy5QYXJ0aWFsV2lkZ2V0Q2ZnPFRDZmc+fSBjZmdcbiAgICAgKi9cbiAgICBpbml0KGNmZykge1xuICAgICAgICBzdXBlci5pbml0KGNmZyk7XG4gICAgICAgIHRoaXMuc2V0dXBHbG9iYWxEZWZhdWx0cygpO1xuICAgICAgICB0aGlzLnNldHVwUG9wdXAoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy5QYXJ0aWFsV2lkZ2V0Q2ZnPFRDZmc+fSBjZmdcbiAgICAgKi9cbiAgICByZWZyZXNoKGNmZykge1xuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG4gICAgICAgIHN1cGVyLnJlZnJlc2goY2ZnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ2xlYW4gdXAgdGhpcyB3aWRnZXQgYW5kIHJlbW92ZSBldmVudHMgZnJvbSB0aGUgRE9NLlxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICAgIF9jbGVhbnVwKCkge1xuICAgICAgICBpZiAodGhpcy5pbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5yZW1vdmVDbGFzcygndWktY29sb3JwaWNrZXInKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQucGFyZW50KCkuZmluZCgnYnV0dG9uJykucmVtb3ZlKCk7XG4gICAgICAgICAgICBDb2xvcmlzLnJlbW92ZUluc3RhbmNlKCcuJyArIHRoaXMuY2ZnLmluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgaW5saW5lIGZyb20gdGhlIERPTVxuICAgICAgICAgICAgdGhpcy5qcS5lbXB0eSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT25seSBvbmUgaW5zdGFuY2Ugb2YgQ29sb3JpcyBpcyBhbGxvd2VkIHNvIGVuc3VyZSBpdCBvbmx5IGxvYWRzIGRlZmF1bHRzIG9uY2UuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzZXR1cEdsb2JhbERlZmF1bHRzKCkge1xuICAgICAgICB0aGlzLnBvcHVwID0gdGhpcy5jZmcubW9kZSA9PT0gJ3BvcHVwJztcbiAgICAgICAgaWYgKGNvbG9yaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jb25maWd1cmVMb2NhbGUoKTtcbiAgICAgICAgdGhpcy5jZmcuaW5saW5lID0gIXRoaXMucG9wdXA7XG4gICAgICAgIHRoaXMuY2ZnLnRoZW1lTW9kZSA9IHRoaXMuY2ZnLnRoZW1lTW9kZSB8fCBQcmltZUZhY2VzLmVudi5nZXRUaGVtZUNvbnRyYXN0KCk7XG4gICAgICAgIHZhciBzZXR0aW5ncyA9IHRoaXMuY2ZnO1xuICAgICAgICBpZiAodGhpcy5wb3B1cCkge1xuICAgICAgICAgICAgY29sb3Jpc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldHRpbmdzID0ge1xuICAgICAgICAgICAgICAgIGVsOiAnLnVpLWNvbG9ycGlja2VyJyxcbiAgICAgICAgICAgICAgICBpbmxpbmU6IHRoaXMuY2ZnLmlubGluZSxcbiAgICAgICAgICAgICAgICBhMTF5OiB0aGlzLmNmZy5hMTF5LFxuICAgICAgICAgICAgICAgIGNsZWFyTGFiZWw6IHRoaXMuY2ZnLmNsZWFyTGFiZWwsXG4gICAgICAgICAgICAgICAgY2xvc2VMYWJlbDogdGhpcy5jZmcuY2xvc2VMYWJlbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbG9yaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2V0dGluZ3MuZWwgPSBudWxsO1xuICAgICAgICAgICAgc2V0dGluZ3MucGFyZW50ID0gdGhpcy5qcUlkO1xuICAgICAgICAgICAgdGhpcy5iaW5kSW5saW5lQ2FsbGJhY2tzKCk7XG4gICAgICAgIH1cbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBDb2xvcmlzLmluaXQoKTtcbiAgICAgICAgICAgIENvbG9yaXMoc2V0dGluZ3MpO1xuICAgICAgICAgICAgaWYgKCR0aGlzLmNmZy5pbmxpbmUpIHtcbiAgICAgICAgICAgICAgICBDb2xvcmlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb2xvcmlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9jYWxpemVzIHRoZSBBUklBIGFjY2Vzc2liaWxpdHkgbGFiZWxzIGZvciB0aGUgY29sb3IgcGlja2VyLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY29uZmlndXJlTG9jYWxlKCkge1xuICAgICAgICB2YXIgbGFuZyA9IFByaW1lRmFjZXMuZ2V0TG9jYWxlU2V0dGluZ3ModGhpcy5jZmcubG9jYWxlKTtcbiAgICAgICAgaWYgKCFsYW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhbmcuYXJpYSAmJiBsYW5nLmFyaWEuY2xvc2UpIHsgdGhpcy5jZmcuY2xvc2VMYWJlbCA9IGxhbmcuYXJpYS5jbG9zZTsgfVxuICAgICAgICBpZiAobGFuZy5jbGVhcikgeyB0aGlzLmNmZy5jbGVhckxhYmVsID0gbGFuZy5jbGVhcjsgfVxuICAgICAgICBpZiAobGFuZy5pc1JUTCkgeyB0aGlzLmNmZy5ydGwgPSB0cnVlOyB9XG4gICAgICAgIGlmIChsYW5nLmFyaWEpIHtcbiAgICAgICAgICAgIFByaW1lRmFjZXMubG9jYWxlU2V0dGluZ3MgPSBsYW5nO1xuICAgICAgICAgICAgdmFyIGExMXkgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJlQXJpYUxhYmVsKCdjb2xvcnBpY2tlci5PUEVOJywgYTExeSwgJ29wZW4nKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJlQXJpYUxhYmVsKCdjb2xvcnBpY2tlci5DTE9TRScsIGExMXksICdjbG9zZScpO1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmVBcmlhTGFiZWwoJ2NvbG9ycGlja2VyLkNMRUFSJywgYTExeSwgJ2NsZWFyJyk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyZUFyaWFMYWJlbCgnY29sb3JwaWNrZXIuTUFSS0VSJywgYTExeSwgJ21hcmtlcicpO1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmVBcmlhTGFiZWwoJ2NvbG9ycGlja2VyLkhVRVNMSURFUicsIGExMXksICdodWVTbGlkZXInKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJlQXJpYUxhYmVsKCdjb2xvcnBpY2tlci5BTFBIQVNMSURFUicsIGExMXksICdhbHBoYVNsaWRlcicpO1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmVBcmlhTGFiZWwoJ2NvbG9ycGlja2VyLklOUFVUJywgYTExeSwgJ2lucHV0Jyk7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyZUFyaWFMYWJlbCgnY29sb3JwaWNrZXIuRk9STUFUJywgYTExeSwgJ2Zvcm1hdCcpO1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmVBcmlhTGFiZWwoJ2NvbG9ycGlja2VyLlNXQVRDSCcsIGExMXksICdzd2F0Y2gnKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJlQXJpYUxhYmVsKCdjb2xvcnBpY2tlci5JTlNUUlVDVElPTicsIGExMXksICdpbnN0cnVjdGlvbicpO1xuICAgICAgICAgICAgdGhpcy5jZmcuYTExeSA9IGExMXk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQ29uZmlndXJlcyBhIHNpbmdsZSBBUklBIGxhYmVsIGZyb20gUEYgbG9jYWxlIHRvIENvbG9yaXMgYTExeS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgdGhlIFBGIGxhYmVsIHRvIGxvb2t1cCBpbiBsb2NhbGUuanNcbiAgICAgKiBAcGFyYW0ge3trZXk6IHN0cmluZ319IGExMXkgdGhlIGExMXkgSlNPTiBvYmplY3QgZm9yIENvbG9yaXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgdGhlIEpTT04gcHJvcGVydHkgdG8gc2V0IGluIGExMXlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGNvbmZpZ3VyZUFyaWFMYWJlbChsYWJlbCwgYTExeSwgcHJvcGVydHkpIHtcbiAgICAgICAgdmFyIGFyaWFMYWJlbCA9IFByaW1lRmFjZXMuZ2V0QXJpYUxhYmVsKGxhYmVsKTtcbiAgICAgICAgaWYgKGFyaWFMYWJlbCkge1xuICAgICAgICAgICAgYTExeVtwcm9wZXJ0eV0gPSBhcmlhTGFiZWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25maWd1cmUgdGhlIGNvbG9yIHBpY2tlciBmb3IgcG9wdXAgbW9kZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHNldHVwUG9wdXAoKSB7XG4gICAgICAgIGlmICghdGhpcy5wb3B1cCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgLy8gaW5wdXQgYW5kIHBmcyBtZXRhZGF0YVxuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy5qcTtcbiAgICAgICAgdGhpcy5pbnB1dC5kYXRhKFByaW1lRmFjZXMuQ0xJRU5UX0lEX0RBVEEsIHRoaXMuaWQpO1xuICAgICAgICBQcmltZUZhY2VzLnNraW5JbnB1dCh0aGlzLmlucHV0KTtcbiAgICAgICAgdGhpcy5oYXNGbG9hdExhYmVsID0gUHJpbWVGYWNlcy51dGlscy5oYXNGbG9hdExhYmVsKHRoaXMuaW5wdXQpO1xuXG4gICAgICAgIC8vIGNoZWNrIGlmIGJlaW5nIHVzZWQgaW4gZGlhbG9nIGFuZCBzZXQgdGhlIHBhcmVudFxuICAgICAgICB0aGlzLnNldHVwRGlhbG9nU3VwcG9ydCgpO1xuXG4gICAgICAgIC8vIHNldHVwIGV2ZW50IGNhbGxiYWNrc1xuICAgICAgICB0aGlzLmJpbmRJbnB1dENhbGxiYWNrcygpO1xuXG4gICAgICAgIC8vIGNvbmZpZ3VyZSBDb2xvcmlzIGZvciB0aGlzIGluc3RhbmNlXG4gICAgICAgIENvbG9yaXMuc2V0SW5zdGFuY2UoJy4nICsgdGhpcy5jZmcuaW5zdGFuY2UsIHRoaXMuY2ZnKTtcblxuICAgICAgICAvLyBhZGQgZXJyb3Igc3R5bGluZyB0byB0aHVtYm5haWwgYnV0dG9uIGlmIG5lY2Vzc2FyeVxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0cmlnZ2VyQnV0dG9uID0gJHRoaXMuaW5wdXQucHJldigpO1xuICAgICAgICAgICAgaWYgKCR0aGlzLmlucHV0Lmhhc0NsYXNzKCd1aS1zdGF0ZS1lcnJvcicpKSB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckJ1dHRvbi5hZGRDbGFzcygndWktaW5wdXRmaWVsZCB1aS1zdGF0ZS1lcnJvcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBldmVudCBsaXN0ZW5lcnMgcmVxdWlyZWQgYnkgdGhpcyB3aWRnZXQgZm9yIGlubGluZSBtb2RlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYmluZElubGluZUNhbGxiYWNrcygpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCR0aGlzLmhhc0JlaGF2aW9yKCdjaGFuZ2UnKSkge1xuICAgICAgICAgICAgdmFyIHBpY2tOUyA9ICdjb2xvcmlzOnBpY2snO1xuICAgICAgICAgICAgJChkb2N1bWVudCkub24ocGlja05TLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV4dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6ICR0aGlzLmlkICsgJ19jb2xvcicsIHZhbHVlOiBlLmRldGFpbC5jb2xvciB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICR0aGlzLmNhbGxCZWhhdmlvcignY2hhbmdlJywgZXh0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5hZGREZXN0cm95TGlzdGVuZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkub2ZmKHBpY2tOUyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIGV2ZW50IGxpc3RlbmVycyByZXF1aXJlZCBieSB0aGlzIHdpZGdldC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGJpbmRJbnB1dENhbGxiYWNrcygpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCR0aGlzLmhhc0JlaGF2aW9yKCdjaGFuZ2UnKSkge1xuICAgICAgICAgICAgJHRoaXMuaW5wdXQub24oJ2NvbG9yaXM6cGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5jYWxsQmVoYXZpb3IoJ2NoYW5nZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCR0aGlzLmhhc0JlaGF2aW9yKCdvcGVuJykgfHwgJHRoaXMuY2ZnLnBhcmVudCkge1xuICAgICAgICAgICAgJHRoaXMuaW5wdXQub24oJ29wZW4uY29sb3JwaWNrZXInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgJHRoaXMuY2FsbEJlaGF2aW9yKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCR0aGlzLmNmZy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAvLyAjMTEwNzYgZGlhbG9nIHN1cHBvcnQgb2YgaW5wdXRcbiAgICAgICAgICAgICAgICAgICB2YXIgZGlhbG9nID0gJCgkdGhpcy5jZmcucGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICB2YXIgY29sb3JJbnB1dCA9IGRpYWxvZy5maW5kKCcjY2xyLWNvbG9yLXZhbHVlJyk7XG4gICAgICAgICAgICAgICAgICAgdmFyIG5ld1pJbmRleCA9IFByaW1lRmFjZXMubmV4dFppbmRleCgpO1xuICAgICAgICAgICAgICAgICAgIGNvbG9ySW5wdXQuekluZGV4KG5ld1pJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgY29sb3JJbnB1dC5wYXJlbnQoKS56SW5kZXgobmV3WkluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICR0aGlzLmlucHV0Lm9uKCdjbG9zZS5jb2xvcnBpY2tlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmICgkdGhpcy5oYXNCZWhhdmlvcignY2xvc2UnKSkge1xuICAgICAgICAgICAgICAgICR0aGlzLmNhbGxCZWhhdmlvcignY2xvc2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkdGhpcy5oYXNGbG9hdExhYmVsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9ICR0aGlzLmlucHV0LnBhcmVudCgpO1xuICAgICAgICAgICAgICAgIFByaW1lRmFjZXMucXVldWVUYXNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3VpLWlucHV0d3JhcHBlci1mb2N1cycpO1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnV0aWxzLnVwZGF0ZUZsb2F0TGFiZWwoY29udGFpbmVyLCAkdGhpcy5pbnB1dCwgJHRoaXMuaGFzRmxvYXRMYWJlbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgkdGhpcy5oYXNGbG9hdExhYmVsKSB7XG4gICAgICAgICAgICAkdGhpcy5pbnB1dC5vbignZm9jdXMuY29sb3JwaWNrZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5pbnB1dC5wYXJlbnQoKS5hZGRDbGFzcygndWktaW5wdXR3cmFwcGVyLWZvY3VzJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgc3VwcG9ydCBmb3IgdXNpbmcgdGhlIG92ZXJsYXkgY29sb3IgcGlja2VyIHdpdGhpbiBhbiBvdmVybGF5IGRpYWxvZy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHNldHVwRGlhbG9nU3VwcG9ydCgpIHtcbiAgICAgICAgdmFyIGRpYWxvZyA9IHRoaXMuaW5wdXRbMF0uY2xvc2VzdCgnLnVpLWRpYWxvZycpO1xuICAgICAgICBpZiAoZGlhbG9nKSB7XG4gICAgICAgICAgICB0aGlzLmNmZy5wYXJlbnQgPSBQcmltZUZhY2VzLmVzY2FwZUNsaWVudElkKGRpYWxvZy5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgICogR2V0cyB0aGUgY3VycmVudCBjb2xvclxuICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBjdXJyZW50IGNvbG9yXG4gICAgICAqL1xuICAgIGdldENvbG9yKCkge1xuICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLnBvcHVwID8gdGhpcy5pbnB1dCA6IHRoaXMuanEuZmluZCgnI2Nsci1jb2xvci12YWx1ZScpO1xuICAgICAgICByZXR1cm4gaW5wdXQudmFsKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAqIFNldHMgdGhlIGN1cnJlbnQgY29sb3JcbiAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIHRoZSBjb2xvciB0byBzZXRcbiAgICAgICovXG4gICAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgaWYgKCFjb2xvcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdDb2xvciA9IGNvbG9yLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciBpbnB1dCA9IHRoaXMucG9wdXAgPyB0aGlzLmlucHV0IDogdGhpcy5qcS5maW5kKCcjY2xyLWNvbG9yLXZhbHVlJyk7XG4gICAgICAgIENvbG9yaXMuc2V0Q29sb3IobmV3Q29sb3IsIGlucHV0WzBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyB0aGUgcG9wdXAgcGFuZWwuXG4gICAgICovXG4gICAgc2hvdygpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlIHRoZSBkaWFsb2cgYW5kIHJldmVydCB0aGUgY29sb3IgdG8gaXRzIG9yaWdpbmFsIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbiB8IHVuZGVmaW5lZH0gcmV2ZXJ0IHRydWUgdG8gcmV2ZXJ0IHRoZSBjb2xvciB0byBpdHMgb3JpZ2luYWwgdmFsdWVcbiAgICAgKi9cbiAgICBoaWRlKHJldmVydCkge1xuICAgICAgICBpZiAodGhpcy5pbnB1dCkge1xuICAgICAgICAgICAgQ29sb3Jpcy5jbG9zZShyZXZlcnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZXMgdGhpcyBpbnB1dCBzbyB0aGF0IHRoZSB1c2VyIGNhbm5vdCBlbnRlciBhIHZhbHVlIGFueW1vcmUuXG4gICAgICovXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgUHJpbWVGYWNlcy51dGlscy5kaXNhYmxlSW5wdXRXaWRnZXQodGhpcy5qcSwgdGhpcy5pbnB1dCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5hYmxlcyB0aGlzIGlucHV0IHNvIHRoYXQgdGhlIHVzZXIgY2FuIGVudGVyIGEgdmFsdWUuXG4gICAgICovXG4gICAgZW5hYmxlKCkge1xuICAgICAgICBQcmltZUZhY2VzLnV0aWxzLmVuYWJsZUlucHV0V2lkZ2V0KHRoaXMuanEsIHRoaXMuaW5wdXQpO1xuICAgIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7OztBQUFBLElBQU0sV0FBVyxNQUFNO0FBU3JCLFVBQVEsQ0FBQ0EsU0FBUUMsV0FBVUMsT0FBTSxjQUFjO0FBQzdDLFVBQU0sTUFBTUQsVUFBUyxjQUFjLFFBQVEsRUFBRSxXQUFXLElBQUk7QUFDNUQsVUFBTSxlQUFlLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFO0FBQ2hFLFFBQUksV0FBVSxRQUFPLFdBQVUsYUFBWSxjQUFhLFlBQVcsYUFBWSxhQUM3RSxXQUFVLFdBQVUsYUFBWSxhQUFZLFdBQVUs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QkFBcUIsU0FBUyxHQUFHO0FBQzVDLFVBQUksTUFBTSxZQUFZLE9BQU8sR0FBRztBQUM1QixjQUFNLGFBQWEsT0FBTztBQUFBLE1BQzlCO0FBQ0EsVUFBSSxNQUFNLGVBQWU7QUFDckIsWUFBSSxZQUFZLE1BQU0sTUFBTSxPQUFPO0FBQ25DLG1CQUFXLFVBQVUsV0FBVztBQUM1QixvQkFBVSxZQUFZLHVCQUF1QjtBQUM3QyxxQkFBVyxNQUFNLGlCQUFpQixXQUFXLE1BQU0sT0FBTyxNQUFNLGFBQWE7QUFBQSxRQUNqRixDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0osQ0FBQztBQUVELFFBQUksTUFBTSxlQUFlO0FBQ3JCLFlBQU0sTUFBTSxHQUFHLHFCQUFxQixXQUFXO0FBQzNDLGNBQU0sTUFBTSxPQUFPLEVBQUUsU0FBUyx1QkFBdUI7QUFBQSxNQUN6RCxDQUFDO0FBQUEsSUFDTDtBQUFBLEVBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEscUJBQXFCO0FBQ2pCLFFBQUksU0FBUyxLQUFLLE1BQU0sQ0FBQyxFQUFFLFFBQVEsWUFBWTtBQUMvQyxRQUFJLFFBQVE7QUFDUixXQUFLLElBQUksU0FBUyxXQUFXLGVBQWUsT0FBTyxFQUFFO0FBQUEsSUFDekQ7QUFBQSxFQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLFdBQVc7QUFDUCxRQUFJLFFBQVEsS0FBSyxRQUFRLEtBQUssUUFBUSxLQUFLLEdBQUcsS0FBSyxrQkFBa0I7QUFDckUsV0FBTyxNQUFNLElBQUk7QUFBQSxFQUNyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxTQUFTLE9BQU87QUFDWixRQUFJLENBQUMsT0FBTztBQUNSO0FBQUEsSUFDSjtBQUNBLFFBQUksV0FBVyxNQUFNLFlBQVk7QUFDakMsUUFBSSxRQUFRLEtBQUssUUFBUSxLQUFLLFFBQVEsS0FBSyxHQUFHLEtBQUssa0JBQWtCO0FBQ3JFLG9CQUFRLFNBQVMsVUFBVSxNQUFNLENBQUMsQ0FBQztBQUFBLEVBQ3ZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxPQUFPO0FBQ0gsUUFBSSxLQUFLLE9BQU87QUFDWixXQUFLLE1BQU0sUUFBUSxPQUFPO0FBQUEsSUFDOUI7QUFBQSxFQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLEtBQUssUUFBUTtBQUNULFFBQUksS0FBSyxPQUFPO0FBQ1osc0JBQVEsTUFBTSxNQUFNO0FBQUEsSUFDeEI7QUFBQSxFQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxVQUFVO0FBQ04sZUFBVyxNQUFNLG1CQUFtQixLQUFLLElBQUksS0FBSyxLQUFLO0FBQUEsRUFDM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFNBQVM7QUFDTCxlQUFXLE1BQU0sa0JBQWtCLEtBQUssSUFBSSxLQUFLLEtBQUs7QUFBQSxFQUMxRDtBQUNKOyIsCiAgIm5hbWVzIjogWyJ3aW5kb3ciLCAiZG9jdW1lbnQiLCAiTWF0aCIsICJDb2xvcmlzIl0KfQo=

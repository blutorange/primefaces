import {
  BaseWidget
} from "./chunk-HGD6GSK5.js";
import "./chunk-YRJTWU7C.js";

// src/imagecompare/juxtapose.js
(function(document2, window2) {
  var juxtapose2 = {
    sliders: [],
    OPTIMIZATION_ACCEPTED: 1,
    OPTIMIZATION_WAS_CONSTRAINED: 2
  };
  var flickr_key = "d90fc2d1f4acc584e08b8eaea5bf4d6c";
  var FLICKR_SIZE_PREFERENCES = ["Large", "Medium"];
  function Graphic(properties, slider2) {
    var self = this;
    this.image = new Image();
    this.loaded = false;
    this.image.onload = function() {
      self.loaded = true;
      slider2._onLoaded();
    };
    this.image.src = properties.src;
    this.image.alt = properties.alt || "";
    this.label = properties.label || false;
    this.credit = properties.credit || false;
  }
  function FlickrGraphic(properties, slider2) {
    var self = this;
    this.image = new Image();
    this.loaded = false;
    this.image.onload = function() {
      self.loaded = true;
      slider2._onLoaded();
    };
    this.flickrID = this.getFlickrID(properties.src);
    this.callFlickrAPI(this.flickrID, self);
    this.label = properties.label || false;
    this.credit = properties.credit || false;
  }
  FlickrGraphic.prototype = {
    getFlickrID: function(url) {
      if (url.match(/flic.kr\/.+/i)) {
        var encoded = url.split("/").slice(-1)[0];
        return base58Decode(encoded);
      }
      var idx = url.indexOf("flickr.com/photos/");
      var pos = idx + "flickr.com/photos/".length;
      var photo_info = url.substr(pos);
      if (photo_info.indexOf("/") == -1) return null;
      if (photo_info.indexOf("/") === 0) photo_info = photo_info.substr(1);
      id = photo_info.split("/")[1];
      return id;
    },
    callFlickrAPI: function(id2, self) {
      var url = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + flickr_key + "&photo_id=" + id2 + "&format=json&nojsoncallback=1";
      var request = new XMLHttpRequest();
      request.open("GET", url, true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          data = JSON.parse(request.responseText);
          var flickr_url = self.bestFlickrUrl(data.sizes.size);
          self.setFlickrImage(flickr_url);
        } else {
          console.error("There was an error getting the picture from Flickr");
        }
      };
      request.onerror = function() {
        console.error("There was an error getting the picture from Flickr");
      };
      request.send();
    },
    setFlickrImage: function(src) {
      this.image.src = src;
    },
    bestFlickrUrl: function(ary) {
      var dict = {};
      for (var i = 0; i < ary.length; i++) {
        dict[ary[i].label] = ary[i].source;
      }
      for (var j = 0; j < FLICKR_SIZE_PREFERENCES.length; j++) {
        if (FLICKR_SIZE_PREFERENCES[j] in dict) {
          return dict[FLICKR_SIZE_PREFERENCES[j]];
        }
      }
      return ary[0].source;
    }
  };
  function getNaturalDimensions(DOMelement) {
    if (DOMelement.naturalWidth && DOMelement.naturalHeight) {
      return { width: DOMelement.naturalWidth, height: DOMelement.naturalHeight };
    }
    var img = new Image();
    img.src = DOMelement.src;
    return { width: img.width, height: img.height };
  }
  function getImageDimensions(img) {
    var dimensions = {
      width: getNaturalDimensions(img).width,
      height: getNaturalDimensions(img).height,
      aspect: function() {
        return this.width / this.height;
      }
    };
    return dimensions;
  }
  function addClass(element, c) {
    if (element.classList) {
      element.classList.add(c);
    } else {
      element.className += " " + c;
    }
  }
  function removeClass(element, c) {
    element.className = element.className.replace(/(\S+)\s*/g, function(w2, match) {
      if (match === c) {
        return "";
      }
      return w2;
    }).replace(/^\s+/, "");
  }
  function setText(element, text2) {
    if (document2.body.textContent) {
      element.textContent = text2;
    } else {
      element.innerText = text2;
    }
  }
  function getComputedWidthAndHeight(element) {
    if (window2.getComputedStyle) {
      return {
        width: parseInt(getComputedStyle(element).width, 10),
        height: parseInt(getComputedStyle(element).height, 10)
      };
    } else {
      w = element.getBoundingClientRect().right - element.getBoundingClientRect().left;
      h = element.getBoundingClientRect().bottom - element.getBoundingClientRect().top;
      return {
        width: parseInt(w, 10) || 0,
        height: parseInt(h, 10) || 0
      };
    }
  }
  function viewport() {
    var e = window2, a = "inner";
    if (!("innerWidth" in window2)) {
      a = "client";
      e = document2.documentElement || document2.body;
    }
    return { width: e[a + "Width"], height: e[a + "Height"] };
  }
  function getPageX(e) {
    var pageX;
    if (e.pageX) {
      pageX = e.pageX;
    } else if (e.touches) {
      pageX = e.touches[0].pageX;
    } else {
      pageX = e.clientX + document2.body.scrollLeft + document2.documentElement.scrollLeft;
    }
    return pageX;
  }
  function getPageY(e) {
    var pageY;
    if (e.pageY) {
      pageY = e.pageY;
    } else if (e.touches) {
      pageY = e.touches[0].pageY;
    } else {
      pageY = e.clientY + document2.body.scrollTop + document2.documentElement.scrollTop;
    }
    return pageY;
  }
  function checkFlickr(url) {
    if (url.match(/flic.kr\/.+/i)) {
      return true;
    }
    var idx = url.indexOf("flickr.com/photos/");
    if (idx == -1) {
      return false;
    } else {
      return true;
    }
  }
  function base58Decode(encoded) {
    var alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ", base = alphabet.length;
    if (typeof encoded !== "string") {
      throw '"base58Decode" only accepts strings.';
    }
    var decoded = 0;
    while (encoded) {
      var alphabetPosition = alphabet.indexOf(encoded[0]);
      if (alphabetPosition < 0) {
        throw `"base58Decode" can't find "` + encoded[0] + '" in the alphabet: "' + alphabet + '"';
      }
      var powerOf = encoded.length - 1;
      decoded += alphabetPosition * Math.pow(base, powerOf);
      encoded = encoded.substring(1);
    }
    return decoded.toString();
  }
  function getLeftPercent(slider2, input) {
    if (typeof input === "string" || typeof input === "number") {
      leftPercent = parseInt(input, 10);
    } else {
      var sliderRect = slider2.getBoundingClientRect();
      var offset = {
        top: sliderRect.top + document2.body.scrollTop + document2.documentElement.scrollTop,
        left: sliderRect.left + document2.body.scrollLeft + document2.documentElement.scrollLeft
      };
      var width = slider2.offsetWidth;
      var pageX = getPageX(input);
      var relativeX = pageX - offset.left;
      leftPercent = relativeX / width * 100;
    }
    return leftPercent;
  }
  function getTopPercent(slider2, input) {
    if (typeof input === "string" || typeof input === "number") {
      topPercent = parseInt(input, 10);
    } else {
      var sliderRect = slider2.getBoundingClientRect();
      var offset = {
        top: sliderRect.top + document2.body.scrollTop + document2.documentElement.scrollTop,
        left: sliderRect.left + document2.body.scrollLeft + document2.documentElement.scrollLeft
      };
      var width = slider2.offsetHeight;
      var pageY = getPageY(input);
      var relativeY = pageY - offset.top;
      topPercent = relativeY / width * 100;
    }
    return topPercent;
  }
  var BOOLEAN_OPTIONS = { "animate": true, "showLabels": true, "showCredits": true, "makeResponsive": true };
  function interpret_boolean(x) {
    if (typeof x != "string") {
      return Boolean(x);
    }
    return !(x === "false" || x === "");
  }
  function JXSlider(selector2, images, options) {
    this.selector = selector2;
    var i;
    this.options = {
      // new options must have default values set here.
      animate: true,
      showLabels: true,
      showCredits: true,
      makeResponsive: true,
      startingPosition: "50%",
      mode: "horizontal",
      callback: null
      // pass a callback function if you like
    };
    for (i in this.options) {
      if (i in options) {
        if (i in BOOLEAN_OPTIONS) {
          this.options[i] = interpret_boolean(options[i]);
        } else {
          this.options[i] = options[i];
        }
      }
    }
    if (images.length == 2) {
      if (checkFlickr(images[0].src)) {
        this.imgBefore = new FlickrGraphic(images[0], this);
      } else {
        this.imgBefore = new Graphic(images[0], this);
      }
      if (checkFlickr(images[1].src)) {
        this.imgAfter = new FlickrGraphic(images[1], this);
      } else {
        this.imgAfter = new Graphic(images[1], this);
      }
    } else {
      console.warn("The images parameter takes two Image objects.");
    }
    if (this.imgBefore.credit || this.imgAfter.credit) {
      this.options.showCredits = true;
    } else {
      this.options.showCredits = false;
    }
  }
  JXSlider.prototype = {
    updateSlider: function(input, animate2) {
      var leftPercent2, rightPercent;
      if (this.options.mode === "vertical") {
        leftPercent2 = getTopPercent(this.slider, input);
      } else {
        leftPercent2 = getLeftPercent(this.slider, input);
      }
      leftPercent2 = leftPercent2.toFixed(2) + "%";
      leftPercentNum = parseFloat(leftPercent2);
      rightPercent = 100 - leftPercentNum + "%";
      if (leftPercentNum > 0 && leftPercentNum < 100) {
        removeClass(this.handle, "transition");
        removeClass(this.rightImage, "transition");
        removeClass(this.leftImage, "transition");
        if (this.options.animate && animate2) {
          addClass(this.handle, "transition");
          addClass(this.leftImage, "transition");
          addClass(this.rightImage, "transition");
        }
        if (this.options.mode === "vertical") {
          this.handle.style.top = leftPercent2;
          this.leftImage.style.height = leftPercent2;
          this.rightImage.style.height = rightPercent;
        } else {
          this.handle.style.left = leftPercent2;
          this.leftImage.style.width = leftPercent2;
          this.rightImage.style.width = rightPercent;
        }
        this.sliderPosition = leftPercent2;
      }
    },
    getPosition: function() {
      return this.sliderPosition;
    },
    displayLabel: function(element, labelText) {
      label = document2.createElement("div");
      label.className = "jx-label";
      label.setAttribute("tabindex", 0);
      setText(label, labelText);
      element.appendChild(label);
    },
    displayCredits: function() {
      credit = document2.createElement("div");
      credit.className = "jx-credit";
      text = "<em>Photo Credits:</em>";
      if (this.imgBefore.credit) {
        text += " <em>Before</em> " + this.imgBefore.credit;
      }
      if (this.imgAfter.credit) {
        text += " <em>After</em> " + this.imgAfter.credit;
      }
      credit.innerHTML = text;
      this.wrapper.appendChild(credit);
    },
    setStartingPosition: function(s) {
      this.options.startingPosition = s;
    },
    checkImages: function() {
      if (getImageDimensions(this.imgBefore.image).aspect() == getImageDimensions(this.imgAfter.image).aspect()) {
        return true;
      } else {
        return false;
      }
    },
    calculateDims: function(width, height) {
      var ratio = getImageDimensions(this.imgBefore.image).aspect();
      if (width) {
        height = width / ratio;
      } else if (height) {
        width = height * ratio;
      }
      return {
        width,
        height,
        ratio
      };
    },
    responsivizeIframe: function(dims) {
      if (dims.height < window2.innerHeight) {
        if (dims.ratio >= 1) {
          this.wrapper.style.paddingTop = parseInt((window2.innerHeight - dims.height) / 2) + "px";
        }
      } else if (dims.height > window2.innerHeight) {
        dims = this.calculateDims(0, window2.innerHeight);
        this.wrapper.style.paddingLeft = parseInt((window2.innerWidth - dims.width) / 2) + "px";
      }
      if (this.options.showCredits) {
        dims.height -= 13;
      }
      return dims;
    },
    setWrapperDimensions: function() {
      var wrapperWidth = getComputedWidthAndHeight(this.wrapper).width;
      var wrapperHeight = getComputedWidthAndHeight(this.wrapper).height;
      var dims = this.calculateDims(wrapperWidth, wrapperHeight);
      if (window2.location !== window2.parent.location && !this.options.makeResponsive) {
        dims = this.responsivizeIframe(dims);
      }
      this.wrapper.style.height = parseInt(dims.height) + "px";
      this.wrapper.style.width = parseInt(dims.width) + "px";
    },
    optimizeWrapper: function(maxWidth) {
      var result = juxtapose2.OPTIMIZATION_ACCEPTED;
      if (this.imgBefore.image.naturalWidth >= maxWidth && this.imgAfter.image.naturalWidth >= maxWidth) {
        this.wrapper.style.width = maxWidth + "px";
        result = juxtapose2.OPTIMIZATION_WAS_CONSTRAINED;
      } else if (this.imgAfter.image.naturalWidth < maxWidth) {
        this.wrapper.style.width = this.imgAfter.image.naturalWidth + "px";
      } else {
        this.wrapper.style.width = this.imgBefore.image.naturalWidth + "px";
      }
      this.setWrapperDimensions();
      return result;
    },
    _onLoaded: function() {
      if (this.imgBefore && this.imgBefore.loaded === true && this.imgAfter && this.imgAfter.loaded === true) {
        this.wrapper = document2.querySelector(this.selector);
        addClass(this.wrapper, "juxtapose");
        this.wrapper.style.width = getNaturalDimensions(this.imgBefore.image).width;
        this.setWrapperDimensions();
        this.slider = document2.createElement("div");
        this.slider.className = "jx-slider";
        this.wrapper.appendChild(this.slider);
        if (this.options.mode != "horizontal") {
          addClass(this.slider, this.options.mode);
        }
        this.handle = document2.createElement("div");
        this.handle.className = "jx-handle";
        this.rightImage = document2.createElement("div");
        this.rightImage.className = "jx-image jx-right";
        this.rightImage.appendChild(this.imgAfter.image);
        this.leftImage = document2.createElement("div");
        this.leftImage.className = "jx-image jx-left";
        this.leftImage.appendChild(this.imgBefore.image);
        this.labCredit = document2.createElement("a");
        this.labCredit.setAttribute("href", "http://juxtapose.knightlab.com");
        this.labCredit.setAttribute("target", "_blank");
        this.labCredit.className = "jx-knightlab";
        this.labLogo = document2.createElement("div");
        this.labLogo.className = "knightlab-logo";
        this.labCredit.appendChild(this.labLogo);
        this.projectName = document2.createElement("span");
        this.projectName.className = "juxtapose-name";
        setText(this.projectName, "JuxtaposeJS");
        this.labCredit.appendChild(this.projectName);
        this.slider.appendChild(this.handle);
        this.slider.appendChild(this.leftImage);
        this.slider.appendChild(this.rightImage);
        this.slider.appendChild(this.labCredit);
        this.leftArrow = document2.createElement("div");
        this.rightArrow = document2.createElement("div");
        this.control = document2.createElement("div");
        this.controller = document2.createElement("div");
        this.leftArrow.className = "jx-arrow jx-left";
        this.rightArrow.className = "jx-arrow jx-right";
        this.control.className = "jx-control";
        this.controller.className = "jx-controller";
        this.controller.setAttribute("tabindex", 0);
        this.controller.setAttribute("role", "slider");
        this.controller.setAttribute("aria-valuenow", 50);
        this.controller.setAttribute("aria-valuemin", 0);
        this.controller.setAttribute("aria-valuemax", 100);
        this.handle.appendChild(this.leftArrow);
        this.handle.appendChild(this.control);
        this.handle.appendChild(this.rightArrow);
        this.control.appendChild(this.controller);
        this._init();
      }
    },
    _init: function() {
      if (this.checkImages() === false) {
        console.warn(this, "Check that the two images have the same aspect ratio for the slider to work correctly.");
      }
      this.updateSlider(this.options.startingPosition, false);
      if (this.options.showLabels === true) {
        if (this.imgBefore.label) {
          this.displayLabel(this.leftImage, this.imgBefore.label);
        }
        if (this.imgAfter.label) {
          this.displayLabel(this.rightImage, this.imgAfter.label);
        }
      }
      if (this.options.showCredits === true) {
        this.displayCredits();
      }
      var self = this;
      window2.addEventListener("resize", function() {
        self.setWrapperDimensions();
      });
      this.slider.addEventListener("mousedown", function(e) {
        e = e || window2.event;
        e.preventDefault();
        self.updateSlider(e, true);
        animate = true;
        this.addEventListener("mousemove", function(e2) {
          e2 = e2 || window2.event;
          e2.preventDefault();
          if (animate) {
            self.updateSlider(e2, false);
          }
        });
        this.addEventListener("mouseup", function(e2) {
          e2 = e2 || window2.event;
          e2.preventDefault();
          e2.stopPropagation();
          this.removeEventListener("mouseup", arguments.callee);
          animate = false;
        });
      });
      this.slider.addEventListener("touchstart", function(e) {
        e = e || window2.event;
        e.preventDefault();
        e.stopPropagation();
        self.updateSlider(e, true);
        this.addEventListener("touchmove", function(e2) {
          e2 = e2 || window2.event;
          e2.preventDefault();
          e2.stopPropagation();
          self.updateSlider(event, false);
        });
      });
      this.handle.addEventListener("keydown", function(e) {
        e = e || window2.event;
        var key = e.which || e.keyCode;
        var ariaValue = parseFloat(this.style.left);
        if (key == 37) {
          ariaValue = ariaValue - 1;
          var leftStart = parseFloat(this.style.left) - 1;
          self.updateSlider(leftStart, false);
          self.controller.setAttribute("aria-valuenow", ariaValue);
        }
        if (key == 39) {
          ariaValue = ariaValue + 1;
          var rightStart = parseFloat(this.style.left) + 1;
          self.updateSlider(rightStart, false);
          self.controller.setAttribute("aria-valuenow", ariaValue);
        }
      });
      this.leftImage.addEventListener("keydown", function(event2) {
        var key = event2.which || event2.keyCode;
        if (key == 13 || key == 32) {
          self.updateSlider("90%", true);
          self.controller.setAttribute("aria-valuenow", 90);
        }
      });
      this.rightImage.addEventListener("keydown", function(event2) {
        var key = event2.which || event2.keyCode;
        if (key == 13 || key == 32) {
          self.updateSlider("10%", true);
          self.controller.setAttribute("aria-valuenow", 10);
        }
      });
      juxtapose2.sliders.push(this);
      if (this.options.callback && typeof this.options.callback == "function") {
        this.options.callback(this);
      }
    }
  };
  juxtapose2.makeSlider = function(element, idx) {
    if (typeof idx == "undefined") {
      idx = juxtapose2.sliders.length;
    }
    var w2 = element;
    var images = w2.querySelectorAll("img");
    var options = {};
    if (w2.getAttribute("data-animate")) {
      options.animate = w2.getAttribute("data-animate");
    }
    if (w2.getAttribute("data-showlabels")) {
      options.showLabels = w2.getAttribute("data-showlabels");
    }
    if (w2.getAttribute("data-showcredits")) {
      options.showCredits = w2.getAttribute("data-showcredits");
    }
    if (w2.getAttribute("data-startingposition")) {
      options.startingPosition = w2.getAttribute("data-startingposition");
    }
    if (w2.getAttribute("data-mode")) {
      options.mode = w2.getAttribute("data-mode");
    }
    if (w2.getAttribute("data-makeresponsive")) {
      options.mode = w2.getAttribute("data-makeresponsive");
    }
    specificClass = "juxtapose-" + idx;
    addClass(element, specificClass);
    selector = "." + specificClass;
    if (w2.innerHTML) {
      w2.innerHTML = "";
    } else {
      w2.innerText = "";
    }
    slider = new juxtapose2.JXSlider(
      selector,
      [
        {
          src: images[0].src,
          label: images[0].getAttribute("data-label"),
          credit: images[0].getAttribute("data-credit"),
          alt: images[0].alt
        },
        {
          src: images[1].src,
          label: images[1].getAttribute("data-label"),
          credit: images[1].getAttribute("data-credit"),
          alt: images[1].alt
        }
      ],
      options
    );
  };
  juxtapose2.scanPage = function() {
    var elements = document2.querySelectorAll(".juxtapose");
    for (var i = 0; i < elements.length; i++) {
      juxtapose2.makeSlider(elements[i], i);
    }
  };
  juxtapose2.JXSlider = JXSlider;
  window2.juxtapose = juxtapose2;
  juxtapose2.scanPage();
})(document, window);
!window.addEventListener && function(WindowPrototype, DocumentPrototype, ElementPrototype, addEventListener, removeEventListener, dispatchEvent, registry) {
  WindowPrototype[addEventListener] = DocumentPrototype[addEventListener] = ElementPrototype[addEventListener] = function(type, listener) {
    var target = this;
    registry.unshift([target, type, listener, function(event2) {
      event2.currentTarget = target;
      event2.preventDefault = function() {
        event2.returnValue = false;
      };
      event2.stopPropagation = function() {
        event2.cancelBubble = true;
      };
      event2.target = event2.srcElement || target;
      listener.call(target, event2);
    }]);
    this.attachEvent("on" + type, registry[0][3]);
  };
  WindowPrototype[removeEventListener] = DocumentPrototype[removeEventListener] = ElementPrototype[removeEventListener] = function(type, listener) {
    for (var index = 0, register; register = registry[index]; ++index) {
      if (register[0] == this && register[1] == type && register[2] == listener) {
        return this.detachEvent("on" + type, registry.splice(index, 1)[0][3]);
      }
    }
  };
  WindowPrototype[dispatchEvent] = DocumentPrototype[dispatchEvent] = ElementPrototype[dispatchEvent] = function(eventObject) {
    return this.fireEvent("on" + eventObject.type, eventObject);
  };
}(Window.prototype, HTMLDocument.prototype, Element.prototype, "addEventListener", "removeEventListener", "dispatchEvent", []);

// src/imagecompare/imagecompare-widget.js
var ImageCompare = class extends BaseWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    this.cfg.showFullLinks = false;
    new juxtapose.JXSlider(
      "[id='" + this.cfg.id + "']",
      [
        {
          src: this.cfg.leftimage,
          label: "",
          credit: ""
        },
        {
          src: this.cfg.rightimage,
          label: "",
          credit: ""
        }
      ],
      {
        animate: true,
        showLabels: false,
        showCredits: false,
        startingPosition: "50%",
        makeResponsive: false
      }
    );
  }
};
export {
  ImageCompare
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ltYWdlY29tcGFyZS9qdXh0YXBvc2UuanMiLCAiLi4vc3JjL2ltYWdlY29tcGFyZS9pbWFnZWNvbXBhcmUtd2lkZ2V0LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiBqdXh0YXBvc2UgLSB2MS4yLjAgLSAyMDE3LTEyLTE4XG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgQWxleCBEdW5lciBhbmQgTm9ydGh3ZXN0ZXJuIFVuaXZlcnNpdHkgS25pZ2h0IExhYlxuICovXG4vKiBqdXh0YXBvc2UgLSB2MS4xLjIgLSAyMDE1LTA3LTE2XG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUgQWxleCBEdW5lciBhbmQgTm9ydGh3ZXN0ZXJuIFVuaXZlcnNpdHkgS25pZ2h0IExhYlxuICovXG5cbihmdW5jdGlvbiAoZG9jdW1lbnQsIHdpbmRvdykge1xuXG4gICAgdmFyIGp1eHRhcG9zZSA9IHtcbiAgICAgIHNsaWRlcnM6IFtdLFxuICAgICAgT1BUSU1JWkFUSU9OX0FDQ0VQVEVEOiAxLFxuICAgICAgT1BUSU1JWkFUSU9OX1dBU19DT05TVFJBSU5FRDogMlxuICAgIH07XG4gIFxuICAgIHZhciBmbGlja3Jfa2V5ID0gXCJkOTBmYzJkMWY0YWNjNTg0ZTA4YjhlYWVhNWJmNGQ2Y1wiO1xuICAgIHZhciBGTElDS1JfU0laRV9QUkVGRVJFTkNFUyA9IFsnTGFyZ2UnLCAnTWVkaXVtJ107XG4gIFxuICAgIGZ1bmN0aW9uIEdyYXBoaWMocHJvcGVydGllcywgc2xpZGVyKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gIFxuICAgICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgc2xpZGVyLl9vbkxvYWRlZCgpO1xuICAgICAgfTtcbiAgXG4gICAgICB0aGlzLmltYWdlLnNyYyA9IHByb3BlcnRpZXMuc3JjO1xuICAgICAgdGhpcy5pbWFnZS5hbHQgPSBwcm9wZXJ0aWVzLmFsdCB8fCAnJztcbiAgICAgIHRoaXMubGFiZWwgPSBwcm9wZXJ0aWVzLmxhYmVsIHx8IGZhbHNlO1xuICAgICAgdGhpcy5jcmVkaXQgPSBwcm9wZXJ0aWVzLmNyZWRpdCB8fCBmYWxzZTtcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIEZsaWNrckdyYXBoaWMocHJvcGVydGllcywgc2xpZGVyKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gIFxuICAgICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgc2xpZGVyLl9vbkxvYWRlZCgpO1xuICAgICAgfTtcbiAgXG4gICAgICB0aGlzLmZsaWNrcklEID0gdGhpcy5nZXRGbGlja3JJRChwcm9wZXJ0aWVzLnNyYyk7XG4gICAgICB0aGlzLmNhbGxGbGlja3JBUEkodGhpcy5mbGlja3JJRCwgc2VsZik7XG4gIFxuICAgICAgdGhpcy5sYWJlbCA9IHByb3BlcnRpZXMubGFiZWwgfHwgZmFsc2U7XG4gICAgICB0aGlzLmNyZWRpdCA9IHByb3BlcnRpZXMuY3JlZGl0IHx8IGZhbHNlO1xuICAgIH1cbiAgXG4gICAgRmxpY2tyR3JhcGhpYy5wcm90b3R5cGUgPSB7XG4gICAgICBnZXRGbGlja3JJRDogZnVuY3Rpb24odXJsKSB7XG4gICAgICAgIGlmICh1cmwubWF0Y2goL2ZsaWMua3JcXC8uKy9pKSkge1xuICAgICAgICAgIHZhciBlbmNvZGVkID0gdXJsLnNwbGl0KCcvJykuc2xpY2UoLTEpWzBdO1xuICAgICAgICAgIHJldHVybiBiYXNlNThEZWNvZGUoZW5jb2RlZCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlkeCA9IHVybC5pbmRleE9mKFwiZmxpY2tyLmNvbS9waG90b3MvXCIpO1xuICAgICAgICB2YXIgcG9zID0gaWR4ICsgXCJmbGlja3IuY29tL3Bob3Rvcy9cIi5sZW5ndGg7XG4gICAgICAgIHZhciBwaG90b19pbmZvID0gdXJsLnN1YnN0cihwb3MpO1xuICAgICAgICBpZiAocGhvdG9faW5mby5pbmRleE9mKCcvJykgPT0gLTEpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAocGhvdG9faW5mby5pbmRleE9mKCcvJykgPT09IDApIHBob3RvX2luZm8gPSBwaG90b19pbmZvLnN1YnN0cigxKTtcbiAgICAgICAgaWQgPSBwaG90b19pbmZvLnNwbGl0KFwiL1wiKVsxXTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfSxcbiAgXG4gICAgICBjYWxsRmxpY2tyQVBJOiBmdW5jdGlvbihpZCwgc2VsZikge1xuICAgICAgICB2YXIgdXJsID0gJ2h0dHBzOi8vYXBpLmZsaWNrci5jb20vc2VydmljZXMvcmVzdC8/bWV0aG9kPWZsaWNrci5waG90b3MuZ2V0U2l6ZXMnICtcbiAgICAgICAgICAgICcmYXBpX2tleT0nICsgZmxpY2tyX2tleSArXG4gICAgICAgICAgICAnJnBob3RvX2lkPScgKyBpZCArICcmZm9ybWF0PWpzb24mbm9qc29uY2FsbGJhY2s9MSc7XG4gIFxuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCl7XG4gICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB2YXIgZmxpY2tyX3VybCA9IHNlbGYuYmVzdEZsaWNrclVybChkYXRhLnNpemVzLnNpemUpO1xuICAgICAgICAgICAgc2VsZi5zZXRGbGlja3JJbWFnZShmbGlja3JfdXJsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhbiBlcnJvciBnZXR0aW5nIHRoZSBwaWN0dXJlIGZyb20gRmxpY2tyXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhbiBlcnJvciBnZXR0aW5nIHRoZSBwaWN0dXJlIGZyb20gRmxpY2tyXCIpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICAgIH0sXG4gIFxuICAgICAgc2V0RmxpY2tySW1hZ2U6IGZ1bmN0aW9uKHNyYykge1xuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IHNyYztcbiAgICAgIH0sXG4gIFxuICAgICAgYmVzdEZsaWNrclVybDogZnVuY3Rpb24oYXJ5KSB7XG4gICAgICAgIHZhciBkaWN0ID0ge307XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZGljdFthcnlbaV0ubGFiZWxdID0gYXJ5W2ldLnNvdXJjZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IEZMSUNLUl9TSVpFX1BSRUZFUkVOQ0VTLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgaWYgKEZMSUNLUl9TSVpFX1BSRUZFUkVOQ0VTW2pdIGluIGRpY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWN0W0ZMSUNLUl9TSVpFX1BSRUZFUkVOQ0VTW2pdXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyeVswXS5zb3VyY2U7XG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAgZnVuY3Rpb24gZ2V0TmF0dXJhbERpbWVuc2lvbnMoRE9NZWxlbWVudCkge1xuICAgICAgaWYgKERPTWVsZW1lbnQubmF0dXJhbFdpZHRoICYmIERPTWVsZW1lbnQubmF0dXJhbEhlaWdodCkge1xuICAgICAgICByZXR1cm4ge3dpZHRoOiBET01lbGVtZW50Lm5hdHVyYWxXaWR0aCwgaGVpZ2h0OiBET01lbGVtZW50Lm5hdHVyYWxIZWlnaHR9O1xuICAgICAgfVxuICAgICAgLy8gaHR0cDovL3d3dy5qYWNrbG1vb3JlLmNvbS9ub3Rlcy9uYXR1cmFsd2lkdGgtYW5kLW5hdHVyYWxoZWlnaHQtaW4taWUvXG4gICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gRE9NZWxlbWVudC5zcmM7XG4gICAgICByZXR1cm4ge3dpZHRoOiBpbWcud2lkdGgsIGhlaWdodDogaW1nLmhlaWdodH07XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBnZXRJbWFnZURpbWVuc2lvbnMoaW1nKSB7XG4gICAgICB2YXIgZGltZW5zaW9ucyA9IHtcbiAgICAgICAgd2lkdGg6IGdldE5hdHVyYWxEaW1lbnNpb25zKGltZykud2lkdGgsXG4gICAgICAgIGhlaWdodDogZ2V0TmF0dXJhbERpbWVuc2lvbnMoaW1nKS5oZWlnaHQsXG4gICAgICAgIGFzcGVjdDogZnVuY3Rpb24oKSB7IHJldHVybiAodGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0KTsgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiBkaW1lbnNpb25zO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgYykge1xuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIFwiICsgYztcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGMpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZSgvKFxcUyspXFxzKi9nLCBmdW5jdGlvbiAodywgbWF0Y2gpIHtcbiAgICAgICAgaWYgKG1hdGNoID09PSBjKSB7XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3O1xuICAgICAgfSkucmVwbGFjZSgvXlxccysvLCAnJyk7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBzZXRUZXh0KGVsZW1lbnQsIHRleHQpIHtcbiAgICAgIGlmIChkb2N1bWVudC5ib2R5LnRleHRDb250ZW50KSB7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRXaWR0aEFuZEhlaWdodChlbGVtZW50KSB7XG4gICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3aWR0aDogcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS53aWR0aCwgMTApLFxuICAgICAgICAgIGhlaWdodDogcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5oZWlnaHQsIDEwKVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQgLSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgIGggPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdpZHRoOiBwYXJzZUludCh3LCAxMCkgfHwgMCxcbiAgICAgICAgICBoZWlnaHQ6IHBhcnNlSW50KGgsIDEwKSB8fCAwXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiB2aWV3cG9ydCgpIHtcbiAgICAgIHZhciBlID0gd2luZG93LCBhID0gJ2lubmVyJztcbiAgICAgIGlmICggISggJ2lubmVyV2lkdGgnIGluIHdpbmRvdyApICkge1xuICAgICAgICBhID0gJ2NsaWVudCc7XG4gICAgICAgIGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IHdpZHRoIDogZVsgYSsnV2lkdGgnIF0gLCBoZWlnaHQgOiBlWyBhKydIZWlnaHQnIF0gfVxuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gZ2V0UGFnZVgoZSkge1xuICAgICAgdmFyIHBhZ2VYO1xuICAgICAgaWYgKGUucGFnZVgpIHtcbiAgICAgICAgcGFnZVggPSBlLnBhZ2VYO1xuICAgICAgfSBlbHNlIGlmIChlLnRvdWNoZXMpIHtcbiAgICAgICAgcGFnZVggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWdlWCA9IGUuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhZ2VYO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gZ2V0UGFnZVkoZSkge1xuICAgICAgdmFyIHBhZ2VZO1xuICAgICAgaWYgKGUucGFnZVkpIHtcbiAgICAgICAgcGFnZVkgPSBlLnBhZ2VZO1xuICAgICAgfSBlbHNlIGlmIChlLnRvdWNoZXMpIHtcbiAgICAgICAgcGFnZVkgPSBlLnRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWdlWSA9IGUuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYWdlWTtcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIGNoZWNrRmxpY2tyKHVybCkge1xuICAgICAgaWYgKHVybC5tYXRjaCgvZmxpYy5rclxcLy4rL2kpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgdmFyIGlkeCA9IHVybC5pbmRleE9mKFwiZmxpY2tyLmNvbS9waG90b3MvXCIpO1xuICAgICAgaWYgKGlkeCA9PSAtMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIGJhc2U1OERlY29kZShlbmNvZGVkKSB7XG4gICAgICB2YXIgYWxwaGFiZXQgPSAnMTIzNDU2Nzg5YWJjZGVmZ2hpamttbm9wcXJzdHV2d3h5ekFCQ0RFRkdISktMTU5QUVJTVFVWV1hZWicsXG4gICAgICAgICAgYmFzZSA9IGFscGhhYmV0Lmxlbmd0aDtcbiAgICAgIGlmICh0eXBlb2YgZW5jb2RlZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgJ1wiYmFzZTU4RGVjb2RlXCIgb25seSBhY2NlcHRzIHN0cmluZ3MuJztcbiAgICAgIH1cbiAgICAgIHZhciBkZWNvZGVkID0gMDtcbiAgICAgIHdoaWxlIChlbmNvZGVkKSB7XG4gICAgICAgIHZhciBhbHBoYWJldFBvc2l0aW9uID0gYWxwaGFiZXQuaW5kZXhPZihlbmNvZGVkWzBdKTtcbiAgICAgICAgaWYgKGFscGhhYmV0UG9zaXRpb24gPCAwKSB7XG4gICAgICAgICAgdGhyb3cgJ1wiYmFzZTU4RGVjb2RlXCIgY2FuXFwndCBmaW5kIFwiJyArIGVuY29kZWRbMF0gKyAnXCIgaW4gdGhlIGFscGhhYmV0OiBcIicgKyBhbHBoYWJldCArICdcIic7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvd2VyT2YgPSBlbmNvZGVkLmxlbmd0aCAtIDE7XG4gICAgICAgIGRlY29kZWQgKz0gYWxwaGFiZXRQb3NpdGlvbiAqIChNYXRoLnBvdyhiYXNlLCBwb3dlck9mKSk7XG4gICAgICAgIGVuY29kZWQgPSBlbmNvZGVkLnN1YnN0cmluZygxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWNvZGVkLnRvU3RyaW5nKCk7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBnZXRMZWZ0UGVyY2VudChzbGlkZXIsIGlucHV0KSB7XG4gICAgICBpZiAodHlwZW9mKGlucHV0KSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YoaW5wdXQpID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGxlZnRQZXJjZW50ID0gcGFyc2VJbnQoaW5wdXQsIDEwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzbGlkZXJSZWN0ID0gc2xpZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgb2Zmc2V0ID0ge1xuICAgICAgICAgIHRvcDogc2xpZGVyUmVjdC50b3AgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICAgICAgbGVmdDogc2xpZGVyUmVjdC5sZWZ0ICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnRcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHdpZHRoID0gc2xpZGVyLm9mZnNldFdpZHRoO1xuICAgICAgICB2YXIgcGFnZVggPSBnZXRQYWdlWChpbnB1dCk7XG4gICAgICAgIHZhciByZWxhdGl2ZVggPSBwYWdlWCAtIG9mZnNldC5sZWZ0O1xuICAgICAgICBsZWZ0UGVyY2VudCA9IChyZWxhdGl2ZVggLyB3aWR0aCkgKiAxMDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGVmdFBlcmNlbnQ7XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBnZXRUb3BQZXJjZW50KHNsaWRlciwgaW5wdXQpIHtcbiAgICAgIGlmICh0eXBlb2YoaW5wdXQpID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZihpbnB1dCkgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgdG9wUGVyY2VudCA9IHBhcnNlSW50KGlucHV0LCAxMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc2xpZGVyUmVjdCA9IHNsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIG9mZnNldCA9IHtcbiAgICAgICAgICB0b3A6IHNsaWRlclJlY3QudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgICAgICAgIGxlZnQ6IHNsaWRlclJlY3QubGVmdCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0XG4gICAgICAgIH07XG4gICAgICAgIHZhciB3aWR0aCA9IHNsaWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHZhciBwYWdlWSA9IGdldFBhZ2VZKGlucHV0KTtcbiAgICAgICAgdmFyIHJlbGF0aXZlWSA9IHBhZ2VZIC0gb2Zmc2V0LnRvcDtcbiAgICAgICAgdG9wUGVyY2VudCA9IChyZWxhdGl2ZVkgLyB3aWR0aCkgKiAxMDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9wUGVyY2VudDtcbiAgICB9XG4gIFxuICAgIC8vIHZhbHVlcyBvZiBCT09MRUFOX09QVElPTlMgYXJlIGlnbm9yZWQuIGp1c3QgdXNlZCBmb3IgJ2luJyB0ZXN0IG9uIGtleXNcbiAgICB2YXIgQk9PTEVBTl9PUFRJT05TID0gIHsnYW5pbWF0ZSc6IHRydWUsICdzaG93TGFiZWxzJzogdHJ1ZSwgJ3Nob3dDcmVkaXRzJzogdHJ1ZSwgJ21ha2VSZXNwb25zaXZlJzogdHJ1ZSB9O1xuICAgIGZ1bmN0aW9uIGludGVycHJldF9ib29sZWFuKHgpIHtcbiAgICAgIGlmICh0eXBlb2YoeCkgIT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oeCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gISh4ID09PSAnZmFsc2UnIHx8IHggPT09ICcnKTtcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIEpYU2xpZGVyKHNlbGVjdG9yLCBpbWFnZXMsIG9wdGlvbnMpIHtcbiAgXG4gICAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XG4gIFxuICAgICAgdmFyIGk7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB7IC8vIG5ldyBvcHRpb25zIG11c3QgaGF2ZSBkZWZhdWx0IHZhbHVlcyBzZXQgaGVyZS5cbiAgICAgICAgYW5pbWF0ZTogdHJ1ZSxcbiAgICAgICAgc2hvd0xhYmVsczogdHJ1ZSxcbiAgICAgICAgc2hvd0NyZWRpdHM6IHRydWUsXG4gICAgICAgIG1ha2VSZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICBzdGFydGluZ1Bvc2l0aW9uOiBcIjUwJVwiLFxuICAgICAgICBtb2RlOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgIGNhbGxiYWNrOiBudWxsIC8vIHBhc3MgYSBjYWxsYmFjayBmdW5jdGlvbiBpZiB5b3UgbGlrZVxuICAgICAgfTtcbiAgXG4gICAgICBmb3IgKGkgaW4gdGhpcy5vcHRpb25zKSB7XG4gICAgICAgIGlmKGkgaW4gb3B0aW9ucykge1xuICAgICAgICAgIGlmIChpIGluIEJPT0xFQU5fT1BUSU9OUykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zW2ldID0gaW50ZXJwcmV0X2Jvb2xlYW4ob3B0aW9uc1tpXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1tpXSA9IG9wdGlvbnNbaV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgaWYgKGltYWdlcy5sZW5ndGggPT0gMikge1xuICBcbiAgICAgICAgaWYoY2hlY2tGbGlja3IoaW1hZ2VzWzBdLnNyYykpIHtcbiAgICAgICAgICB0aGlzLmltZ0JlZm9yZSA9IG5ldyBGbGlja3JHcmFwaGljKGltYWdlc1swXSwgdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbWdCZWZvcmUgPSBuZXcgR3JhcGhpYyhpbWFnZXNbMF0sIHRoaXMpO1xuICAgICAgICB9XG4gIFxuICAgICAgICBpZihjaGVja0ZsaWNrcihpbWFnZXNbMV0uc3JjKSkge1xuICAgICAgICAgIHRoaXMuaW1nQWZ0ZXIgPSBuZXcgRmxpY2tyR3JhcGhpYyhpbWFnZXNbMV0sIHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaW1nQWZ0ZXIgPSBuZXcgR3JhcGhpYyhpbWFnZXNbMV0sIHRoaXMpO1xuICAgICAgICB9XG4gIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiVGhlIGltYWdlcyBwYXJhbWV0ZXIgdGFrZXMgdHdvIEltYWdlIG9iamVjdHMuXCIpO1xuICAgICAgfVxuICBcbiAgICAgIGlmICh0aGlzLmltZ0JlZm9yZS5jcmVkaXQgfHwgdGhpcy5pbWdBZnRlci5jcmVkaXQpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnNob3dDcmVkaXRzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5zaG93Q3JlZGl0cyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgSlhTbGlkZXIucHJvdG90eXBlID0ge1xuICBcbiAgICAgIHVwZGF0ZVNsaWRlcjogZnVuY3Rpb24oaW5wdXQsIGFuaW1hdGUpIHtcbiAgICAgICAgdmFyIGxlZnRQZXJjZW50LCByaWdodFBlcmNlbnQ7XG4gIFxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vZGUgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgIGxlZnRQZXJjZW50ID0gZ2V0VG9wUGVyY2VudCh0aGlzLnNsaWRlciwgaW5wdXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlZnRQZXJjZW50ID0gZ2V0TGVmdFBlcmNlbnQodGhpcy5zbGlkZXIsIGlucHV0KTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgbGVmdFBlcmNlbnQgPSBsZWZ0UGVyY2VudC50b0ZpeGVkKDIpICsgXCIlXCI7XG4gICAgICAgIGxlZnRQZXJjZW50TnVtID0gcGFyc2VGbG9hdChsZWZ0UGVyY2VudCk7XG4gICAgICAgIHJpZ2h0UGVyY2VudCA9ICgxMDAgLSBsZWZ0UGVyY2VudE51bSkgKyBcIiVcIjtcbiAgXG4gICAgICAgIGlmIChsZWZ0UGVyY2VudE51bSA+IDAgJiYgbGVmdFBlcmNlbnROdW0gPCAxMDApIHtcbiAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmhhbmRsZSwgJ3RyYW5zaXRpb24nKTtcbiAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLnJpZ2h0SW1hZ2UsICd0cmFuc2l0aW9uJyk7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5sZWZ0SW1hZ2UsICd0cmFuc2l0aW9uJyk7XG4gIFxuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0ZSAmJiBhbmltYXRlKSB7XG4gICAgICAgICAgICBhZGRDbGFzcyh0aGlzLmhhbmRsZSwgJ3RyYW5zaXRpb24nKTtcbiAgICAgICAgICAgIGFkZENsYXNzKHRoaXMubGVmdEltYWdlLCAndHJhbnNpdGlvbicpO1xuICAgICAgICAgICAgYWRkQ2xhc3ModGhpcy5yaWdodEltYWdlLCAndHJhbnNpdGlvbicpO1xuICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2RlID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlLnN0eWxlLnRvcCA9IGxlZnRQZXJjZW50O1xuICAgICAgICAgICAgdGhpcy5sZWZ0SW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gbGVmdFBlcmNlbnQ7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0SW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gcmlnaHRQZXJjZW50O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZS5zdHlsZS5sZWZ0ID0gbGVmdFBlcmNlbnQ7XG4gICAgICAgICAgICB0aGlzLmxlZnRJbWFnZS5zdHlsZS53aWR0aCA9IGxlZnRQZXJjZW50O1xuICAgICAgICAgICAgdGhpcy5yaWdodEltYWdlLnN0eWxlLndpZHRoID0gcmlnaHRQZXJjZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNsaWRlclBvc2l0aW9uID0gbGVmdFBlcmNlbnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gIFxuICAgICAgZ2V0UG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zbGlkZXJQb3NpdGlvbjtcbiAgICAgIH0sXG4gIFxuICAgICAgZGlzcGxheUxhYmVsOiBmdW5jdGlvbihlbGVtZW50LCBsYWJlbFRleHQpIHtcbiAgICAgICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsYWJlbC5jbGFzc05hbWUgPSAnangtbGFiZWwnO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7IC8vcHV0IHRoZSBjb250cm9sbGVyIGluIHRoZSBuYXR1cmFsIHRhYiBvcmRlciBvZiB0aGUgZG9jdW1lbnRcbiAgXG4gICAgICAgIHNldFRleHQobGFiZWwsIGxhYmVsVGV4dCk7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgfSxcbiAgXG4gICAgICBkaXNwbGF5Q3JlZGl0czogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNyZWRpdC5jbGFzc05hbWUgPSBcImp4LWNyZWRpdFwiO1xuICBcbiAgICAgICAgdGV4dCA9IFwiPGVtPlBob3RvIENyZWRpdHM6PC9lbT5cIjtcbiAgICAgICAgaWYgKHRoaXMuaW1nQmVmb3JlLmNyZWRpdCkgeyB0ZXh0ICs9IFwiIDxlbT5CZWZvcmU8L2VtPiBcIiArIHRoaXMuaW1nQmVmb3JlLmNyZWRpdDsgfVxuICAgICAgICBpZiAodGhpcy5pbWdBZnRlci5jcmVkaXQpIHsgdGV4dCArPSBcIiA8ZW0+QWZ0ZXI8L2VtPiBcIiArIHRoaXMuaW1nQWZ0ZXIuY3JlZGl0OyB9XG4gIFxuICAgICAgICBjcmVkaXQuaW5uZXJIVE1MID0gdGV4dDtcbiAgXG4gICAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZChjcmVkaXQpO1xuICAgICAgfSxcbiAgXG4gICAgICBzZXRTdGFydGluZ1Bvc2l0aW9uOiBmdW5jdGlvbihzKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5zdGFydGluZ1Bvc2l0aW9uID0gcztcbiAgICAgIH0sXG4gIFxuICAgICAgY2hlY2tJbWFnZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoZ2V0SW1hZ2VEaW1lbnNpb25zKHRoaXMuaW1nQmVmb3JlLmltYWdlKS5hc3BlY3QoKSA9PVxuICAgICAgICAgIGdldEltYWdlRGltZW5zaW9ucyh0aGlzLmltZ0FmdGVyLmltYWdlKS5hc3BlY3QoKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgXG4gICAgICBjYWxjdWxhdGVEaW1zOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KXtcbiAgICAgICAgdmFyIHJhdGlvID0gZ2V0SW1hZ2VEaW1lbnNpb25zKHRoaXMuaW1nQmVmb3JlLmltYWdlKS5hc3BlY3QoKTtcbiAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyByYXRpbztcbiAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICB3aWR0aCA9IGhlaWdodCAqIHJhdGlvO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgIHJhdGlvOiByYXRpb1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgXG4gICAgICByZXNwb25zaXZpemVJZnJhbWU6IGZ1bmN0aW9uKGRpbXMpe1xuICAgICAgICAvL0NoZWNrIHRoZSBzbGlkZXIgZGltZW5zaW9ucyBhZ2FpbnN0IHRoZSBpZnJhbWUgKHdpbmRvdykgZGltZW5zaW9uc1xuICAgICAgICBpZiAoZGltcy5oZWlnaHQgPCB3aW5kb3cuaW5uZXJIZWlnaHQpe1xuICAgICAgICAgIC8vSWYgdGhlIGFzcGVjdCByYXRpbyBpcyBncmVhdGVyIHRoYW4gMSwgaW1ncyBhcmUgbGFuZHNjYXBlLCBzbyBsZXR0ZXJib3ggdG9wIGFuZCBib3R0b21cbiAgICAgICAgICBpZiAoZGltcy5yYXRpbyA+PSAxKXtcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS5wYWRkaW5nVG9wID0gcGFyc2VJbnQoKHdpbmRvdy5pbm5lckhlaWdodCAtIGRpbXMuaGVpZ2h0KSAvIDIpICsgXCJweFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkaW1zLmhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICAgIC8qIElmIHRoZSBpbWFnZSBpcyB0b28gdGFsbCBmb3IgdGhlIHdpbmRvdywgd2hpY2ggaGFwcGVucyBhdCAxMDAlIHdpZHRoIG9uIGxhcmdlIHNjcmVlbnMsXG4gICAgICAgICAgICogZm9yY2UgZGltZW5zaW9uIHJlY2FsY3VsYXRpb24gYmFzZWQgb24gaGVpZ2h0IGluc3RlYWQgb2Ygd2lkdGggKi9cbiAgICAgICAgICBkaW1zID0gdGhpcy5jYWxjdWxhdGVEaW1zKDAsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgICAgdGhpcy53cmFwcGVyLnN0eWxlLnBhZGRpbmdMZWZ0ID0gcGFyc2VJbnQoKHdpbmRvdy5pbm5lcldpZHRoIC0gZGltcy53aWR0aCkgLyAyKSArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dDcmVkaXRzKSB7XG4gICAgICAgICAgLy8gYWNjb21tb2RhdGUgdGhlIGNyZWRpdHMgYm94IHdpdGhpbiB0aGUgaWZyYW1lXG4gICAgICAgICAgZGltcy5oZWlnaHQgLT0gMTM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpbXM7XG4gICAgICB9LFxuICBcbiAgICAgIHNldFdyYXBwZXJEaW1lbnNpb25zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHdyYXBwZXJXaWR0aCA9IGdldENvbXB1dGVkV2lkdGhBbmRIZWlnaHQodGhpcy53cmFwcGVyKS53aWR0aDtcbiAgICAgICAgdmFyIHdyYXBwZXJIZWlnaHQgPSBnZXRDb21wdXRlZFdpZHRoQW5kSGVpZ2h0KHRoaXMud3JhcHBlcikuaGVpZ2h0O1xuICAgICAgICB2YXIgZGltcyA9IHRoaXMuY2FsY3VsYXRlRGltcyh3cmFwcGVyV2lkdGgsIHdyYXBwZXJIZWlnaHQpO1xuICAgICAgICAvLyBpZiB3aW5kb3cgaXMgaW4gaWZyYW1lLCBtYWtlIHN1cmUgaW1hZ2VzIGRvbid0IG92ZXJmbG93IGJvdW5kYXJpZXNcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbiAhPT0gd2luZG93LnBhcmVudC5sb2NhdGlvbiAmJiAhdGhpcy5vcHRpb25zLm1ha2VSZXNwb25zaXZlKSB7XG4gICAgICAgICAgZGltcyA9IHRoaXMucmVzcG9uc2l2aXplSWZyYW1lKGRpbXMpO1xuICAgICAgICB9XG4gIFxuICAgICAgICB0aGlzLndyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gcGFyc2VJbnQoZGltcy5oZWlnaHQpICsgXCJweFwiO1xuICAgICAgICB0aGlzLndyYXBwZXIuc3R5bGUud2lkdGggPSBwYXJzZUludChkaW1zLndpZHRoKSArIFwicHhcIjtcbiAgICAgIH0sXG4gIFxuICAgICAgb3B0aW1pemVXcmFwcGVyOiBmdW5jdGlvbihtYXhXaWR0aCl7XG4gICAgICAgIHZhciByZXN1bHQgPSBqdXh0YXBvc2UuT1BUSU1JWkFUSU9OX0FDQ0VQVEVEO1xuICAgICAgICBpZiAoKHRoaXMuaW1nQmVmb3JlLmltYWdlLm5hdHVyYWxXaWR0aCA+PSBtYXhXaWR0aCkgJiYgKHRoaXMuaW1nQWZ0ZXIuaW1hZ2UubmF0dXJhbFdpZHRoID49IG1heFdpZHRoKSkge1xuICAgICAgICAgIHRoaXMud3JhcHBlci5zdHlsZS53aWR0aCA9IG1heFdpZHRoICsgXCJweFwiO1xuICAgICAgICAgIHJlc3VsdCA9IGp1eHRhcG9zZS5PUFRJTUlaQVRJT05fV0FTX0NPTlNUUkFJTkVEO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW1nQWZ0ZXIuaW1hZ2UubmF0dXJhbFdpZHRoIDwgbWF4V2lkdGgpIHtcbiAgICAgICAgICB0aGlzLndyYXBwZXIuc3R5bGUud2lkdGggPSB0aGlzLmltZ0FmdGVyLmltYWdlLm5hdHVyYWxXaWR0aCArIFwicHhcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLndyYXBwZXIuc3R5bGUud2lkdGggPSB0aGlzLmltZ0JlZm9yZS5pbWFnZS5uYXR1cmFsV2lkdGggKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRXcmFwcGVyRGltZW5zaW9ucygpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSxcbiAgXG4gICAgICBfb25Mb2FkZWQ6IGZ1bmN0aW9uKCkge1xuICBcbiAgICAgICAgaWYgKHRoaXMuaW1nQmVmb3JlICYmIHRoaXMuaW1nQmVmb3JlLmxvYWRlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICAgIHRoaXMuaW1nQWZ0ZXIgJiYgdGhpcy5pbWdBZnRlci5sb2FkZWQgPT09IHRydWUpIHtcbiAgXG4gICAgICAgICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcbiAgICAgICAgICBhZGRDbGFzcyh0aGlzLndyYXBwZXIsICdqdXh0YXBvc2UnKTtcbiAgXG4gICAgICAgICAgdGhpcy53cmFwcGVyLnN0eWxlLndpZHRoID0gZ2V0TmF0dXJhbERpbWVuc2lvbnModGhpcy5pbWdCZWZvcmUuaW1hZ2UpLndpZHRoO1xuICAgICAgICAgIHRoaXMuc2V0V3JhcHBlckRpbWVuc2lvbnMoKTtcbiAgXG4gICAgICAgICAgdGhpcy5zbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHRoaXMuc2xpZGVyLmNsYXNzTmFtZSA9ICdqeC1zbGlkZXInO1xuICAgICAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLnNsaWRlcik7XG4gIFxuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9kZSAhPSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgYWRkQ2xhc3ModGhpcy5zbGlkZXIsIHRoaXMub3B0aW9ucy5tb2RlKTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIHRoaXMuaGFuZGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICB0aGlzLmhhbmRsZS5jbGFzc05hbWUgPSAnangtaGFuZGxlJztcbiAgXG4gICAgICAgICAgdGhpcy5yaWdodEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICB0aGlzLnJpZ2h0SW1hZ2UuY2xhc3NOYW1lID0gJ2p4LWltYWdlIGp4LXJpZ2h0JztcbiAgICAgICAgICB0aGlzLnJpZ2h0SW1hZ2UuYXBwZW5kQ2hpbGQodGhpcy5pbWdBZnRlci5pbWFnZSk7XG4gIFxuICBcbiAgICAgICAgICB0aGlzLmxlZnRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgdGhpcy5sZWZ0SW1hZ2UuY2xhc3NOYW1lID0gJ2p4LWltYWdlIGp4LWxlZnQnO1xuICAgICAgICAgIHRoaXMubGVmdEltYWdlLmFwcGVuZENoaWxkKHRoaXMuaW1nQmVmb3JlLmltYWdlKTtcbiAgXG4gICAgICAgICAgdGhpcy5sYWJDcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICB0aGlzLmxhYkNyZWRpdC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cDovL2p1eHRhcG9zZS5rbmlnaHRsYWIuY29tJyk7XG4gICAgICAgICAgdGhpcy5sYWJDcmVkaXQuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgICAgICAgdGhpcy5sYWJDcmVkaXQuY2xhc3NOYW1lID0gJ2p4LWtuaWdodGxhYic7XG4gICAgICAgICAgdGhpcy5sYWJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICB0aGlzLmxhYkxvZ28uY2xhc3NOYW1lID0gJ2tuaWdodGxhYi1sb2dvJztcbiAgICAgICAgICB0aGlzLmxhYkNyZWRpdC5hcHBlbmRDaGlsZCh0aGlzLmxhYkxvZ28pO1xuICAgICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICB0aGlzLnByb2plY3ROYW1lLmNsYXNzTmFtZSA9ICdqdXh0YXBvc2UtbmFtZSc7XG4gICAgICAgICAgc2V0VGV4dCh0aGlzLnByb2plY3ROYW1lLCAnSnV4dGFwb3NlSlMnKTtcbiAgICAgICAgICB0aGlzLmxhYkNyZWRpdC5hcHBlbmRDaGlsZCh0aGlzLnByb2plY3ROYW1lKTtcbiAgXG4gICAgICAgICAgdGhpcy5zbGlkZXIuYXBwZW5kQ2hpbGQodGhpcy5oYW5kbGUpO1xuICAgICAgICAgIHRoaXMuc2xpZGVyLmFwcGVuZENoaWxkKHRoaXMubGVmdEltYWdlKTtcbiAgICAgICAgICB0aGlzLnNsaWRlci5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0SW1hZ2UpO1xuICAgICAgICAgIHRoaXMuc2xpZGVyLmFwcGVuZENoaWxkKHRoaXMubGFiQ3JlZGl0KTtcbiAgXG4gICAgICAgICAgdGhpcy5sZWZ0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHRoaXMucmlnaHRBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgdGhpcy5jb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBcbiAgICAgICAgICB0aGlzLmxlZnRBcnJvdy5jbGFzc05hbWUgPSAnangtYXJyb3cgangtbGVmdCc7XG4gICAgICAgICAgdGhpcy5yaWdodEFycm93LmNsYXNzTmFtZSA9ICdqeC1hcnJvdyBqeC1yaWdodCc7XG4gICAgICAgICAgdGhpcy5jb250cm9sLmNsYXNzTmFtZSA9ICdqeC1jb250cm9sJztcbiAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuY2xhc3NOYW1lID0gJ2p4LWNvbnRyb2xsZXInO1xuICBcbiAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApOyAvL3B1dCB0aGUgY29udHJvbGxlciBpbiB0aGUgbmF0dXJhbCB0YWIgb3JkZXIgb2YgdGhlIGRvY3VtZW50XG4gICAgICAgICAgdGhpcy5jb250cm9sbGVyLnNldEF0dHJpYnV0ZSgncm9sZScsICdzbGlkZXInKTtcbiAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93JywgNTApO1xuICAgICAgICAgIHRoaXMuY29udHJvbGxlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVtaW4nLCAwKTtcbiAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbWF4JywgMTAwKTtcbiAgXG4gICAgICAgICAgdGhpcy5oYW5kbGUuYXBwZW5kQ2hpbGQodGhpcy5sZWZ0QXJyb3cpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlLmFwcGVuZENoaWxkKHRoaXMuY29udHJvbCk7XG4gICAgICAgICAgdGhpcy5oYW5kbGUuYXBwZW5kQ2hpbGQodGhpcy5yaWdodEFycm93KTtcbiAgICAgICAgICB0aGlzLmNvbnRyb2wuYXBwZW5kQ2hpbGQodGhpcy5jb250cm9sbGVyKTtcbiAgXG4gICAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICBcbiAgICAgIF9pbml0OiBmdW5jdGlvbigpIHtcbiAgXG4gICAgICAgIGlmICh0aGlzLmNoZWNrSW1hZ2VzKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKHRoaXMsIFwiQ2hlY2sgdGhhdCB0aGUgdHdvIGltYWdlcyBoYXZlIHRoZSBzYW1lIGFzcGVjdCByYXRpbyBmb3IgdGhlIHNsaWRlciB0byB3b3JrIGNvcnJlY3RseS5cIik7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIHRoaXMudXBkYXRlU2xpZGVyKHRoaXMub3B0aW9ucy5zdGFydGluZ1Bvc2l0aW9uLCBmYWxzZSk7XG4gIFxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dMYWJlbHMgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5pbWdCZWZvcmUubGFiZWwpIHsgdGhpcy5kaXNwbGF5TGFiZWwodGhpcy5sZWZ0SW1hZ2UsIHRoaXMuaW1nQmVmb3JlLmxhYmVsKTsgfVxuICAgICAgICAgIGlmICh0aGlzLmltZ0FmdGVyLmxhYmVsKSB7IHRoaXMuZGlzcGxheUxhYmVsKHRoaXMucmlnaHRJbWFnZSwgdGhpcy5pbWdBZnRlci5sYWJlbCk7IH1cbiAgICAgICAgfVxuICBcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93Q3JlZGl0cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheUNyZWRpdHMoKTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLnNldFdyYXBwZXJEaW1lbnNpb25zKCk7XG4gICAgICAgIH0pO1xuICBcbiAgXG4gICAgICAgIC8vIFNldCB1cCBKYXZhc2NyaXB0IEV2ZW50c1xuICAgICAgICAvLyBPbiBtb3VzZWRvd24sIGNhbGwgdXBkYXRlU2xpZGVyIHRoZW4gc2V0IGFuaW1hdGUgdG8gZmFsc2VcbiAgICAgICAgLy8gKGlmIGFuaW1hdGUgaXMgdHJ1ZSwgYWRkcyBjc3MgdHJhbnNpdGlvbiB3aGVuIHVwZGF0aW5nKS5cbiAgXG4gICAgICAgIHRoaXMuc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgc2VsZi51cGRhdGVTbGlkZXIoZSwgdHJ1ZSk7XG4gICAgICAgICAgYW5pbWF0ZSA9IHRydWU7XG4gIFxuICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoYW5pbWF0ZSkgeyBzZWxmLnVwZGF0ZVNsaWRlcihlLCBmYWxzZSk7IH1cbiAgICAgICAgICB9KTtcbiAgXG4gICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGFyZ3VtZW50cy5jYWxsZWUpO1xuICAgICAgICAgICAgYW5pbWF0ZSA9IGZhbHNlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgXG4gICAgICAgIHRoaXMuc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgc2VsZi51cGRhdGVTbGlkZXIoZSwgdHJ1ZSk7XG4gIFxuICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgc2VsZi51cGRhdGVTbGlkZXIoZXZlbnQsIGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgXG4gICAgICAgIH0pO1xuICBcbiAgICAgICAgLyoga2V5Ym9hcmQgYWNjZXNzaWJpbGl0eSAqL1xuICBcbiAgICAgICAgdGhpcy5oYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgICAgdmFyIGtleSA9IGUud2hpY2ggfHwgZS5rZXlDb2RlO1xuICAgICAgICAgIHZhciBhcmlhVmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMuc3R5bGUubGVmdCk7XG4gIFxuICAgICAgICAgICAgLy9tb3ZlIGp4LWNvbnRyb2xsZXIgbGVmdFxuICAgICAgICAgICAgaWYgKGtleSA9PSAzNykge1xuICAgICAgICAgICAgICBhcmlhVmFsdWUgPSBhcmlhVmFsdWUgLSAxO1xuICAgICAgICAgICAgdmFyIGxlZnRTdGFydCA9IHBhcnNlRmxvYXQodGhpcy5zdHlsZS5sZWZ0KSAtIDE7XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZVNsaWRlcihsZWZ0U3RhcnQsIGZhbHNlKTtcbiAgICAgICAgICAgIHNlbGYuY29udHJvbGxlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVub3cnLCBhcmlhVmFsdWUpO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIC8vbW92ZSBqeC1jb250cm9sbGVyIHJpZ2h0XG4gICAgICAgICAgICBpZiAoa2V5ID09IDM5KSB7XG4gICAgICAgICAgICAgIGFyaWFWYWx1ZSA9IGFyaWFWYWx1ZSArIDE7XG4gICAgICAgICAgICB2YXIgcmlnaHRTdGFydCA9IHBhcnNlRmxvYXQodGhpcy5zdHlsZS5sZWZ0KSArIDE7XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZVNsaWRlcihyaWdodFN0YXJ0LCBmYWxzZSk7XG4gICAgICAgICAgICBzZWxmLmNvbnRyb2xsZXIuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93JywgYXJpYVZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gIFxuICAgICAgICAvL3RvZ2dsZSByaWdodC1oYW5kIGltYWdlIHZpc2liaWxpdHlcbiAgICAgICAgdGhpcy5sZWZ0SW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgdmFyIGtleSA9IGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGU7XG4gICAgICAgICAgICAgIGlmICgoa2V5ID09IDEzKSB8fCAoa2V5ID09MzIpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGVTbGlkZXIoXCI5MCVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICBzZWxmLmNvbnRyb2xsZXIuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbm93JywgOTApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICBcbiAgICAgICAgLy90b2dnbGUgbGVmdC1oYW5kIGltYWdlIHZpc2liaWxpdHlcbiAgICAgICAgdGhpcy5yaWdodEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgIHZhciBrZXkgPSBldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlO1xuICAgICAgICAgICAgICBpZiAoKGtleSA9PSAxMykgfHwgKGtleSA9PTMyKSkge1xuICAgICAgICAgICAgICBzZWxmLnVwZGF0ZVNsaWRlcihcIjEwJVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgc2VsZi5jb250cm9sbGVyLnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW5vdycsIDEwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgXG4gICAgICAgIGp1eHRhcG9zZS5zbGlkZXJzLnB1c2godGhpcyk7XG4gIFxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNhbGxiYWNrICYmIHR5cGVvZih0aGlzLm9wdGlvbnMuY2FsbGJhY2spID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2sodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgfTtcbiAgXG4gICAgLypcbiAgICAgIEdpdmVuIGFuIGVsZW1lbnQgdGhhdCBpcyBjb25maWd1cmVkIHdpdGggdGhlIHByb3BlciBkYXRhIGVsZW1lbnRzLCBtYWtlIGEgc2xpZGVyIG91dCBvZiBpdC5cbiAgICAgIE5vcm1hbGx5IHRoaXMgd2lsbCBqdXN0IGJlIHVzZWQgYnkgc2NhblBhZ2UuXG4gICAgKi9cbiAgICBqdXh0YXBvc2UubWFrZVNsaWRlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBpZHgpIHtcbiAgICAgIGlmICh0eXBlb2YgaWR4ID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlkeCA9IGp1eHRhcG9zZS5zbGlkZXJzLmxlbmd0aDsgLy8gbm90IHN1cGVyIHRocmVhZHNhZmUuLi5cbiAgICAgIH1cbiAgXG4gICAgICB2YXIgdyA9IGVsZW1lbnQ7XG4gIFxuICAgICAgdmFyIGltYWdlcyA9IHcucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XG4gIFxuICAgICAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgICAgIC8vIGRvbid0IHNldCBlbXB0eSBzdHJpbmcgaW50byBvcHRpb25zLCB0aGF0J3MgYSBmYWxzZSBmYWxzZS5cbiAgICAgIGlmICh3LmdldEF0dHJpYnV0ZSgnZGF0YS1hbmltYXRlJykpIHtcbiAgICAgICAgb3B0aW9ucy5hbmltYXRlID0gdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0ZScpO1xuICAgICAgfVxuICAgICAgaWYgKHcuZ2V0QXR0cmlidXRlKCdkYXRhLXNob3dsYWJlbHMnKSkge1xuICAgICAgICBvcHRpb25zLnNob3dMYWJlbHMgPSB3LmdldEF0dHJpYnV0ZSgnZGF0YS1zaG93bGFiZWxzJyk7XG4gICAgICB9XG4gICAgICBpZiAody5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2hvd2NyZWRpdHMnKSkge1xuICAgICAgICBvcHRpb25zLnNob3dDcmVkaXRzID0gdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2hvd2NyZWRpdHMnKTtcbiAgICAgIH1cbiAgICAgIGlmICh3LmdldEF0dHJpYnV0ZSgnZGF0YS1zdGFydGluZ3Bvc2l0aW9uJykpIHtcbiAgICAgICAgb3B0aW9ucy5zdGFydGluZ1Bvc2l0aW9uID0gdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhcnRpbmdwb3NpdGlvbicpO1xuICAgICAgfVxuICAgICAgaWYgKHcuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGUnKSkge1xuICAgICAgICBvcHRpb25zLm1vZGUgPSB3LmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RlJyk7XG4gICAgICB9XG4gICAgICBpZiAody5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWFrZXJlc3BvbnNpdmUnKSkge1xuICAgICAgICBvcHRpb25zLm1vZGUgPSB3LmdldEF0dHJpYnV0ZSgnZGF0YS1tYWtlcmVzcG9uc2l2ZScpO1xuICAgICAgfVxuICBcbiAgICAgIHNwZWNpZmljQ2xhc3MgPSAnanV4dGFwb3NlLScgKyBpZHg7XG4gICAgICBhZGRDbGFzcyhlbGVtZW50LCBzcGVjaWZpY0NsYXNzKTtcbiAgXG4gICAgICBzZWxlY3RvciA9ICcuJyArIHNwZWNpZmljQ2xhc3M7XG4gIFxuICAgICAgaWYgKHcuaW5uZXJIVE1MKSB7XG4gICAgICAgIHcuaW5uZXJIVE1MID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3LmlubmVyVGV4dCA9ICcnO1xuICAgICAgfVxuICBcbiAgICAgIHNsaWRlciA9IG5ldyBqdXh0YXBvc2UuSlhTbGlkZXIoXG4gICAgICAgIHNlbGVjdG9yLFxuICAgICAgICBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBpbWFnZXNbMF0uc3JjLFxuICAgICAgICAgICAgbGFiZWw6IGltYWdlc1swXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFiZWwnKSxcbiAgICAgICAgICAgIGNyZWRpdDogaW1hZ2VzWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS1jcmVkaXQnKSxcbiAgICAgICAgICAgIGFsdDogaW1hZ2VzWzBdLmFsdFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBpbWFnZXNbMV0uc3JjLFxuICAgICAgICAgICAgbGFiZWw6IGltYWdlc1sxXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFiZWwnKSxcbiAgICAgICAgICAgIGNyZWRpdDogaW1hZ2VzWzFdLmdldEF0dHJpYnV0ZSgnZGF0YS1jcmVkaXQnKSxcbiAgICAgICAgICAgIGFsdDogaW1hZ2VzWzFdLmFsdFxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICB9O1xuICBcbiAgICAvL0VuYWJsZSBIVE1MIEltcGxlbWVudGF0aW9uXG4gICAganV4dGFwb3NlLnNjYW5QYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qdXh0YXBvc2UnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBqdXh0YXBvc2UubWFrZVNsaWRlcihlbGVtZW50c1tpXSwgaSk7XG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAganV4dGFwb3NlLkpYU2xpZGVyID0gSlhTbGlkZXI7XG4gICAgd2luZG93Lmp1eHRhcG9zZSA9IGp1eHRhcG9zZTtcbiAgXG4gICAganV4dGFwb3NlLnNjYW5QYWdlKCk7XG4gIFxuICB9KGRvY3VtZW50LCB3aW5kb3cpKTtcbiAgXG4gIFxuICAvLyBhZGRFdmVudExpc3RlbmVyIHBvbHlmaWxsIC8gam9uYXRoYW50bmVhbFxuICAhd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgJiYgKGZ1bmN0aW9uIChXaW5kb3dQcm90b3R5cGUsIERvY3VtZW50UHJvdG90eXBlLCBFbGVtZW50UHJvdG90eXBlLCBhZGRFdmVudExpc3RlbmVyLCByZW1vdmVFdmVudExpc3RlbmVyLCBkaXNwYXRjaEV2ZW50LCByZWdpc3RyeSkge1xuICAgICAgV2luZG93UHJvdG90eXBlW2FkZEV2ZW50TGlzdGVuZXJdID0gRG9jdW1lbnRQcm90b3R5cGVbYWRkRXZlbnRMaXN0ZW5lcl0gPSBFbGVtZW50UHJvdG90eXBlW2FkZEV2ZW50TGlzdGVuZXJdID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gIFxuICAgICAgICAgIHJlZ2lzdHJ5LnVuc2hpZnQoW3RhcmdldCwgdHlwZSwgbGlzdGVuZXIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHsgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZSB9O1xuICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7IGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWUgfTtcbiAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0ID0gZXZlbnQuc3JjRWxlbWVudCB8fCB0YXJnZXQ7XG4gIFxuICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRhcmdldCwgZXZlbnQpO1xuICAgICAgICAgIH1dKTtcbiAgXG4gICAgICAgICAgdGhpcy5hdHRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCByZWdpc3RyeVswXVszXSk7XG4gICAgICB9O1xuICBcbiAgICAgIFdpbmRvd1Byb3RvdHlwZVtyZW1vdmVFdmVudExpc3RlbmVyXSA9IERvY3VtZW50UHJvdG90eXBlW3JlbW92ZUV2ZW50TGlzdGVuZXJdID0gRWxlbWVudFByb3RvdHlwZVtyZW1vdmVFdmVudExpc3RlbmVyXSA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMCwgcmVnaXN0ZXI7IHJlZ2lzdGVyID0gcmVnaXN0cnlbaW5kZXhdOyArK2luZGV4KSB7XG4gICAgICAgICAgICAgIGlmIChyZWdpc3RlclswXSA9PSB0aGlzICYmIHJlZ2lzdGVyWzFdID09IHR5cGUgJiYgcmVnaXN0ZXJbMl0gPT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRldGFjaEV2ZW50KFwib25cIiArIHR5cGUsIHJlZ2lzdHJ5LnNwbGljZShpbmRleCwgMSlbMF1bM10pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfTtcbiAgXG4gICAgICBXaW5kb3dQcm90b3R5cGVbZGlzcGF0Y2hFdmVudF0gPSBEb2N1bWVudFByb3RvdHlwZVtkaXNwYXRjaEV2ZW50XSA9IEVsZW1lbnRQcm90b3R5cGVbZGlzcGF0Y2hFdmVudF0gPSBmdW5jdGlvbiAoZXZlbnRPYmplY3QpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5maXJlRXZlbnQoXCJvblwiICsgZXZlbnRPYmplY3QudHlwZSwgZXZlbnRPYmplY3QpO1xuICAgICAgfTtcbiAgfSkoV2luZG93LnByb3RvdHlwZSwgSFRNTERvY3VtZW50LnByb3RvdHlwZSwgRWxlbWVudC5wcm90b3R5cGUsIFwiYWRkRXZlbnRMaXN0ZW5lclwiLCBcInJlbW92ZUV2ZW50TGlzdGVuZXJcIiwgXCJkaXNwYXRjaEV2ZW50XCIsIFtdKTsiLCAiaW1wb3J0IFwiLi9qdXh0YXBvc2UuanNcIjtcblxuaW1wb3J0IHsgQmFzZVdpZGdldCB9IGZyb20gXCIuLi9jb3JlL2NvcmUud2lkZ2V0LmpzXCI7XG5cbi8qKlxuICogX19QcmltZUZhY2VzIEltYWdlQ29tcGFyZSBXaWRnZXRfX1xuICogXG4gKiBJbWFnZUNvbXBhcmUgcHJvdmlkZXMgYSB1c2VyIGludGVyZmFjZSB0byBjb21wYXJlIHR3byBpbWFnZXMuIFVzZXMgdGhlIGBJbWFnZUNvbXBhcmVgIGxpYnJhcnkuIFRvIGFjY2VzcyBhbiBpbnN0YW5jZVxuICogb2YgdGhlIGltYWdlIHNsaWRlciBwcm9ncmFtbWF0aWNhbGx5LCB5b3UgY2FuIHVzZSB0aGUgbGlzdCBvZiBpbnN0YW50aWF0ZWQgc2xpZGVyczpcbiAqIFxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3Qgd2lkZ2V0ID0gUEYoXCJteUltYWdlQ29tcGFyZVdpZGdldFwiKTtcbiAqIGNvbnN0IHNsaWRlciA9IGp1eHRhcG9zZS5zbGlkZXJzLmZpbHRlcihzbGlkZXIgPT4gc2xpZGVyLndyYXBwZXIgPT09IGEuZ2V0SlEoKS5nZXQoMCkpWzBdO1xuICogXG4gKiAvLyBTbW9vdGhseSBtb3ZlIHRoZSBzbGlkZXIgdG8gdGhlIHJpZ2h0LlxuICogc2xpZGVyLnVwZGF0ZVNsaWRlcihcIjgwJVwiLCB0cnVlKTtcbiAqIGBgYFxuICogXG4gKiBAaW50ZXJmYWNlIHtQcmltZUZhY2VzLndpZGdldC5JbWFnZUNvbXBhcmVDZmd9IGNmZyBUaGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIHtAbGluayAgSW1hZ2VDb21wYXJlfCBJbWFnZUNvbXBhcmUgd2lkZ2V0fS5cbiAqIFlvdSBjYW4gYWNjZXNzIHRoaXMgY29uZmlndXJhdGlvbiB2aWEge0BsaW5rIFByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXQuY2ZnfEJhc2VXaWRnZXQuY2ZnfS4gUGxlYXNlIG5vdGUgdGhhdCB0aGlzXG4gKiBjb25maWd1cmF0aW9uIGlzIHVzdWFsbHkgbWVhbnQgdG8gYmUgcmVhZC1vbmx5IGFuZCBzaG91bGQgbm90IGJlIG1vZGlmaWVkLlxuICogQGV4dGVuZHMge1ByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXRDZmd9IGNmZ1xuICogXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2ZnLnNob3dGdWxsTGlua3MgV2hldGhlciBpbWFnZSBsaW5rcyBhcmUgc2hvd24gY29tcGxldGVseSBvciBhYmJyZXZpYXRlZC5cbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy5sZWZ0SW1hZ2UgVVJMIG9mIHRoZSBpbWFnZSB0byB0aGUgbGVmdFxuICogQHByb3Age3N0cmluZ30gY2ZnLnJpZ2h0SW1hZ2UgVVJMIG9mIHRoZSBpbWFnZSB0byB0aGUgcmlnaHRcbiAqL1xuZXhwb3J0IGNsYXNzIEltYWdlQ29tcGFyZSBleHRlbmRzIEJhc2VXaWRnZXQge1xuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMuUGFydGlhbFdpZGdldENmZzxUQ2ZnPn0gY2ZnXG4gICAgICovXG4gICAgaW5pdChjZmcpIHtcbiAgICAgICAgc3VwZXIuaW5pdChjZmcpO1xuICAgICAgICB0aGlzLmNmZy5zaG93RnVsbExpbmtzID0gZmFsc2U7XG5cbiAgICAgICAgbmV3IGp1eHRhcG9zZS5KWFNsaWRlcihcIltpZD0nXCIrdGhpcy5jZmcuaWQrXCInXVwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiB0aGlzLmNmZy5sZWZ0aW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY3JlZGl0OiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzcmM6IHRoaXMuY2ZnLnJpZ2h0aW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY3JlZGl0OiAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG93TGFiZWxzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93Q3JlZGl0czogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3RhcnRpbmdQb3NpdGlvbjogXCI1MCVcIixcbiAgICAgICAgICAgICAgICBtYWtlUmVzcG9uc2l2ZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuICAgIFxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7O0NBT0MsU0FBVUEsV0FBVUMsU0FBUTtBQUV6QixNQUFJQyxhQUFZO0FBQUEsSUFDZCxTQUFTLENBQUM7QUFBQSxJQUNWLHVCQUF1QjtBQUFBLElBQ3ZCLDhCQUE4QjtBQUFBLEVBQ2hDO0FBRUEsTUFBSSxhQUFhO0FBQ2pCLE1BQUksMEJBQTBCLENBQUMsU0FBUyxRQUFRO0FBRWhELFdBQVMsUUFBUSxZQUFZQyxTQUFRO0FBQ25DLFFBQUksT0FBTztBQUNYLFNBQUssUUFBUSxJQUFJLE1BQU07QUFFdkIsU0FBSyxTQUFTO0FBQ2QsU0FBSyxNQUFNLFNBQVMsV0FBVztBQUM3QixXQUFLLFNBQVM7QUFDZCxNQUFBQSxRQUFPLFVBQVU7QUFBQSxJQUNuQjtBQUVBLFNBQUssTUFBTSxNQUFNLFdBQVc7QUFDNUIsU0FBSyxNQUFNLE1BQU0sV0FBVyxPQUFPO0FBQ25DLFNBQUssUUFBUSxXQUFXLFNBQVM7QUFDakMsU0FBSyxTQUFTLFdBQVcsVUFBVTtBQUFBLEVBQ3JDO0FBRUEsV0FBUyxjQUFjLFlBQVlBLFNBQVE7QUFDekMsUUFBSSxPQUFPO0FBQ1gsU0FBSyxRQUFRLElBQUksTUFBTTtBQUV2QixT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QUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQUEsTUFDeEU7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUVBLGtCQUFnQixhQUFhLElBQUksa0JBQWtCLGFBQWEsSUFBSSxpQkFBaUIsYUFBYSxJQUFJLFNBQVUsYUFBYTtBQUN6SCxXQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxXQUFXO0FBQUEsRUFDOUQ7QUFDSixFQUFHLE9BQU8sV0FBVyxhQUFhLFdBQVcsUUFBUSxXQUFXLG9CQUFvQix1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQzs7O0FDM3RCekgsSUFBTSxlQUFOLGNBQTJCLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPekMsS0FBSyxLQUFLO0FBQ04sVUFBTSxLQUFLLEdBQUc7QUFDZCxTQUFLLElBQUksZ0JBQWdCO0FBRXpCLFFBQUksVUFBVTtBQUFBLE1BQVMsVUFBUSxLQUFLLElBQUksS0FBRztBQUFBLE1BQ3ZDO0FBQUEsUUFDSTtBQUFBLFVBQ0ksS0FBSyxLQUFLLElBQUk7QUFBQSxVQUNkLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxRQUNaO0FBQUEsUUFDQTtBQUFBLFVBQ0ksS0FBSyxLQUFLLElBQUk7QUFBQSxVQUNkLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxRQUNaO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxRQUNJLFNBQVM7QUFBQSxRQUNULFlBQVk7QUFBQSxRQUNaLGFBQWE7QUFBQSxRQUNiLGtCQUFrQjtBQUFBLFFBQ2xCLGdCQUFnQjtBQUFBLE1BQ3BCO0FBQUEsSUFBQztBQUFBLEVBRVQ7QUFFSjsiLAogICJuYW1lcyI6IFsiZG9jdW1lbnQiLCAid2luZG93IiwgImp1eHRhcG9zZSIsICJzbGlkZXIiLCAiaWQiLCAidyIsICJ0ZXh0IiwgInNlbGVjdG9yIiwgImFuaW1hdGUiLCAibGVmdFBlcmNlbnQiLCAiZSIsICJldmVudCJdCn0K

import {
  BaseWidget
} from "./chunk-HGD6GSK5.js";
import {
  __commonJS,
  __publicField,
  __toESM
} from "./chunk-YRJTWU7C.js";

// ../../../../../../.yarn/berry/cache/webcamjs-patch-0c6c689084-10c0.zip/node_modules/webcamjs/webcam.js
var require_webcam = __commonJS({
  "../../../../../../.yarn/berry/cache/webcamjs-patch-0c6c689084-10c0.zip/node_modules/webcamjs/webcam.js"(exports, module) {
    (function(window2) {
      var _userMedia;
      function FlashError() {
        var temp = Error.apply(this, arguments);
        temp.name = this.name = "FlashError";
        this.stack = temp.stack;
        this.message = temp.message;
      }
      function WebcamError() {
        var temp = Error.apply(this, arguments);
        temp.name = this.name = "WebcamError";
        this.stack = temp.stack;
        this.message = temp.message;
      }
      var IntermediateInheritor = function() {
      };
      IntermediateInheritor.prototype = Error.prototype;
      FlashError.prototype = new IntermediateInheritor();
      WebcamError.prototype = new IntermediateInheritor();
      var Webcam2 = {
        version: "1.0.26",
        // globals
        protocol: location.protocol.match(/https/i) ? "https" : "http",
        loaded: false,
        // true when webcam movie finishes loading
        live: false,
        // true when webcam is initialized and ready to snap
        userMedia: true,
        // true when getUserMedia is supported natively
        iOS: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window2.MSStream,
        params: {
          width: 0,
          height: 0,
          dest_width: 0,
          // size of captured image
          dest_height: 0,
          // these default to width/height
          image_format: "jpeg",
          // image format (may be jpeg or png)
          jpeg_quality: 90,
          // jpeg image quality from 0 (worst) to 100 (best)
          enable_flash: true,
          // enable flash fallback,
          force_flash: false,
          // force flash mode,
          flip_horiz: false,
          // flip image horiz (mirror mode)
          fps: 30,
          // camera frames per second
          upload_name: "webcam",
          // name of file in upload post data
          constraints: null,
          // custom user media constraints,
          swfURL: "",
          // URI to webcam.swf movie (defaults to the js location)
          flashNotDetectedText: "ERROR: No Adobe Flash Player detected.  Webcam.js relies on Flash for browsers that do not support getUserMedia (like yours).",
          noInterfaceFoundText: "No supported webcam interface found.",
          unfreeze_snap: true,
          // Whether to unfreeze the camera after snap (defaults to true)
          iosPlaceholderText: "Click here to open camera.",
          user_callback: null,
          // callback function for snapshot (used if no user_callback parameter given to snap function)
          user_canvas: null,
          // user provided canvas for snapshot (used if no user_canvas parameter given to snap function)
          device: null
          // selected device to grab images from
        },
        errors: {
          FlashError,
          WebcamError
        },
        hooks: {},
        // callback hook functions
        init: function() {
          var self = this;
          this.mediaDevices = navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? navigator.mediaDevices : navigator.mozGetUserMedia || navigator.webkitGetUserMedia ? {
            getUserMedia: function(c) {
              return new Promise(function(y, n2) {
                (navigator.mozGetUserMedia || navigator.webkitGetUserMedia).call(navigator, c, y, n2);
              });
            }
          } : null;
          window2.URL = window2.URL || window2.webkitURL || window2.mozURL || window2.msURL;
          this.userMedia = this.userMedia && !!this.mediaDevices && !!window2.URL;
          if (navigator.userAgent.match(/Firefox\D+(\d+)/)) {
            if (parseInt(RegExp.$1, 10) < 21) this.userMedia = null;
          }
          if (this.userMedia) {
            window2.addEventListener("beforeunload", function(event) {
              self.reset();
            });
          }
        },
        exifOrientation: function(binFile) {
          var dataView = new DataView(binFile);
          if (dataView.getUint8(0) != 255 || dataView.getUint8(1) != 216) {
            console.log("Not a valid JPEG file");
            return 0;
          }
          var offset = 2;
          var marker = null;
          while (offset < binFile.byteLength) {
            if (dataView.getUint8(offset) != 255) {
              console.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset));
              return 0;
            }
            marker = dataView.getUint8(offset + 1);
            if (marker == 225) {
              offset += 4;
              var str = "";
              for (n = 0; n < 4; n++) {
                str += String.fromCharCode(dataView.getUint8(offset + n));
              }
              if (str != "Exif") {
                console.log("Not valid EXIF data found");
                return 0;
              }
              offset += 6;
              var bigEnd = null;
              if (dataView.getUint16(offset) == 18761) {
                bigEnd = false;
              } else if (dataView.getUint16(offset) == 19789) {
                bigEnd = true;
              } else {
                console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
                return 0;
              }
              if (dataView.getUint16(offset + 2, !bigEnd) != 42) {
                console.log("Not valid TIFF data! (no 0x002A)");
                return 0;
              }
              var firstIFDOffset = dataView.getUint32(offset + 4, !bigEnd);
              if (firstIFDOffset < 8) {
                console.log("Not valid TIFF data! (First offset less than 8)", dataView.getUint32(offset + 4, !bigEnd));
                return 0;
              }
              var dataStart = offset + firstIFDOffset;
              var entries = dataView.getUint16(dataStart, !bigEnd);
              for (var i = 0; i < entries; i++) {
                var entryOffset = dataStart + i * 12 + 2;
                if (dataView.getUint16(entryOffset, !bigEnd) == 274) {
                  var valueType = dataView.getUint16(entryOffset + 2, !bigEnd);
                  var numValues = dataView.getUint32(entryOffset + 4, !bigEnd);
                  if (valueType != 3 && numValues != 1) {
                    console.log("Invalid EXIF orientation value type (" + valueType + ") or count (" + numValues + ")");
                    return 0;
                  }
                  var value = dataView.getUint16(entryOffset + 8, !bigEnd);
                  if (value < 1 || value > 8) {
                    console.log("Invalid EXIF orientation value (" + value + ")");
                    return 0;
                  }
                  return value;
                }
              }
            } else {
              offset += 2 + dataView.getUint16(offset + 2);
            }
          }
          return 0;
        },
        fixOrientation: function(origObjURL, orientation, targetImg) {
          var img = new Image();
          img.addEventListener("load", function(event) {
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            if (orientation < 5) {
              canvas.width = img.width;
              canvas.height = img.height;
            } else {
              canvas.width = img.height;
              canvas.height = img.width;
            }
            switch (orientation) {
              case 2:
                ctx.transform(-1, 0, 0, 1, img.width, 0);
                break;
              case 3:
                ctx.transform(-1, 0, 0, -1, img.width, img.height);
                break;
              case 4:
                ctx.transform(1, 0, 0, -1, 0, img.height);
                break;
              case 5:
                ctx.transform(0, 1, 1, 0, 0, 0);
                break;
              case 6:
                ctx.transform(0, 1, -1, 0, img.height, 0);
                break;
              case 7:
                ctx.transform(0, -1, -1, 0, img.height, img.width);
                break;
              case 8:
                ctx.transform(0, -1, 1, 0, 0, img.width);
                break;
            }
            ctx.drawImage(img, 0, 0);
            targetImg.src = canvas.toDataURL();
          }, false);
          img.src = origObjURL;
        },
        attach: function(elem) {
          if (typeof elem == "string") {
            elem = document.getElementById(elem) || document.querySelector(elem);
          }
          if (!elem) {
            return this.dispatch("error", new WebcamError("Could not locate DOM element to attach to."));
          }
          this.container = elem;
          elem.innerHTML = "";
          var peg = document.createElement("div");
          elem.appendChild(peg);
          this.peg = peg;
          if (!this.params.width) this.params.width = elem.offsetWidth;
          if (!this.params.height) this.params.height = elem.offsetHeight;
          if (!this.params.width || !this.params.height) {
            return this.dispatch("error", new WebcamError("No width and/or height for webcam.  Please call set() first, or attach to a visible element."));
          }
          if (!this.params.dest_width) this.params.dest_width = this.params.width;
          if (!this.params.dest_height) this.params.dest_height = this.params.height;
          this.userMedia = _userMedia === void 0 ? this.userMedia : _userMedia;
          if (this.params.force_flash) {
            _userMedia = this.userMedia;
            this.userMedia = null;
          }
          if (typeof this.params.fps !== "number") this.params.fps = 30;
          var scaleX = this.params.width / this.params.dest_width;
          var scaleY = this.params.height / this.params.dest_height;
          if (this.userMedia) {
            var video = document.createElement("video");
            video.setAttribute("autoplay", "autoplay");
            video.setAttribute("playsinline", "playsinline");
            video.style.width = "" + this.params.dest_width + "px";
            video.style.height = "" + this.params.dest_height + "px";
            if (scaleX != 1 || scaleY != 1) {
              elem.style.overflow = "hidden";
              video.style.webkitTransformOrigin = "0px 0px";
              video.style.mozTransformOrigin = "0px 0px";
              video.style.msTransformOrigin = "0px 0px";
              video.style.oTransformOrigin = "0px 0px";
              video.style.transformOrigin = "0px 0px";
              video.style.webkitTransform = "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
              video.style.mozTransform = "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
              video.style.msTransform = "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
              video.style.oTransform = "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
              video.style.transform = "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
            }
            elem.appendChild(video);
            this.video = video;
            var self = this;
            var constraints = this.params.constraints;
            if (!constraints) {
              constraints = {
                width: { min: this.params.dest_width },
                height: { min: this.params.dest_height }
              };
              if (this.params.device === "user" || this.params.device === "environment") {
                constraints.facingMode = this.params.device;
              } else if (this.params.device) {
                constraints.deviceId = this.params.device;
              }
            }
            this.mediaDevices.getUserMedia({
              "audio": false,
              "video": constraints
            }).then(function(stream) {
              video.onloadedmetadata = function(e) {
                self.stream = stream;
                self.loaded = true;
                self.live = true;
                self.dispatch("load");
                self.dispatch("live");
                self.flip();
              };
              if ("srcObject" in video) {
                video.srcObject = stream;
              } else {
                video.src = window2.URL.createObjectURL(stream);
              }
            }).catch(function(err) {
              if (self.params.enable_flash && self.detectFlash()) {
                setTimeout(function() {
                  self.params.force_flash = 1;
                  self.attach(elem);
                }, 1);
              } else {
                self.dispatch("error", err);
              }
            });
          } else if (this.iOS) {
            var div = document.createElement("div");
            div.id = this.container.id + "-ios_div";
            div.className = "webcamjs-ios-placeholder";
            div.style.width = "" + this.params.width + "px";
            div.style.height = "" + this.params.height + "px";
            div.style.textAlign = "center";
            div.style.display = "table-cell";
            div.style.verticalAlign = "middle";
            div.style.backgroundRepeat = "no-repeat";
            div.style.backgroundSize = "contain";
            div.style.backgroundPosition = "center";
            var span = document.createElement("span");
            span.className = "webcamjs-ios-text";
            span.innerHTML = this.params.iosPlaceholderText;
            div.appendChild(span);
            var img = document.createElement("img");
            img.id = this.container.id + "-ios_img";
            img.style.width = "" + this.params.dest_width + "px";
            img.style.height = "" + this.params.dest_height + "px";
            img.style.display = "none";
            div.appendChild(img);
            var input = document.createElement("input");
            input.id = this.container.id + "-ios_input";
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.setAttribute("capture", "camera");
            var self = this;
            var params = this.params;
            input.addEventListener("change", function(event) {
              if (event.target.files.length > 0 && event.target.files[0].type.indexOf("image/") == 0) {
                var objURL = URL.createObjectURL(event.target.files[0]);
                var image = new Image();
                image.addEventListener("load", function(event2) {
                  var canvas = document.createElement("canvas");
                  canvas.width = params.dest_width;
                  canvas.height = params.dest_height;
                  var ctx = canvas.getContext("2d");
                  ratio = Math.min(image.width / params.dest_width, image.height / params.dest_height);
                  var sw = params.dest_width * ratio;
                  var sh = params.dest_height * ratio;
                  var sx = (image.width - sw) / 2;
                  var sy = (image.height - sh) / 2;
                  ctx.drawImage(image, sx, sy, sw, sh, 0, 0, params.dest_width, params.dest_height);
                  var dataURL = canvas.toDataURL();
                  img.src = dataURL;
                  div.style.backgroundImage = "url('" + dataURL + "')";
                }, false);
                var fileReader = new FileReader();
                fileReader.addEventListener("load", function(e) {
                  var orientation = self.exifOrientation(e.target.result);
                  if (orientation > 1) {
                    self.fixOrientation(objURL, orientation, image);
                  } else {
                    image.src = objURL;
                  }
                }, false);
                var http = new XMLHttpRequest();
                http.open("GET", objURL, true);
                http.responseType = "blob";
                http.onload = function(e) {
                  if (this.status == 200 || this.status === 0) {
                    fileReader.readAsArrayBuffer(this.response);
                  }
                };
                http.send();
              }
            }, false);
            input.style.display = "none";
            elem.appendChild(input);
            div.addEventListener("click", function(event) {
              if (params.user_callback) {
                self.snap(params.user_callback, params.user_canvas);
              } else {
                input.style.display = "block";
                input.focus();
                input.click();
                input.style.display = "none";
              }
            }, false);
            elem.appendChild(div);
            this.loaded = true;
            this.live = true;
          } else if (this.params.enable_flash && this.detectFlash()) {
            window2.Webcam = Webcam2;
            var div = document.createElement("div");
            div.innerHTML = this.getSWFHTML();
            elem.appendChild(div);
          } else {
            this.dispatch("error", new WebcamError(this.params.noInterfaceFoundText));
          }
          if (this.params.crop_width && this.params.crop_height) {
            var scaled_crop_width = Math.floor(this.params.crop_width * scaleX);
            var scaled_crop_height = Math.floor(this.params.crop_height * scaleY);
            elem.style.width = "" + scaled_crop_width + "px";
            elem.style.height = "" + scaled_crop_height + "px";
            elem.style.overflow = "hidden";
            elem.scrollLeft = Math.floor(this.params.width / 2 - scaled_crop_width / 2);
            elem.scrollTop = Math.floor(this.params.height / 2 - scaled_crop_height / 2);
          } else {
            elem.style.width = "" + this.params.width + "px";
            elem.style.height = "" + this.params.height + "px";
          }
        },
        reset: function() {
          if (this.preview_active) this.unfreeze();
          this.unflip();
          if (this.userMedia) {
            if (this.stream) {
              if (this.stream.getVideoTracks) {
                var tracks = this.stream.getVideoTracks();
                if (tracks && tracks[0] && tracks[0].stop) tracks[0].stop();
              } else if (this.stream.stop) {
                this.stream.stop();
              }
            }
            delete this.stream;
            delete this.video;
          }
          if (this.userMedia !== true && this.loaded && !this.iOS) {
            var movie = this.getMovie();
            if (movie && movie._releaseCamera) movie._releaseCamera();
          }
          if (this.container) {
            this.container.innerHTML = "";
            delete this.container;
          }
          this.loaded = false;
          this.live = false;
        },
        set: function() {
          if (arguments.length == 1) {
            for (var key in arguments[0]) {
              this.params[key] = arguments[0][key];
            }
          } else {
            this.params[arguments[0]] = arguments[1];
          }
        },
        on: function(name, callback) {
          name = name.replace(/^on/i, "").toLowerCase();
          if (!this.hooks[name]) this.hooks[name] = [];
          this.hooks[name].push(callback);
        },
        off: function(name, callback) {
          name = name.replace(/^on/i, "").toLowerCase();
          if (this.hooks[name]) {
            if (callback) {
              var idx = this.hooks[name].indexOf(callback);
              if (idx > -1) this.hooks[name].splice(idx, 1);
            } else {
              this.hooks[name] = [];
            }
          }
        },
        dispatch: function() {
          var name = arguments[0].replace(/^on/i, "").toLowerCase();
          var args = Array.prototype.slice.call(arguments, 1);
          if (this.hooks[name] && this.hooks[name].length) {
            for (var idx = 0, len = this.hooks[name].length; idx < len; idx++) {
              var hook = this.hooks[name][idx];
              if (typeof hook == "function") {
                hook.apply(this, args);
              } else if (typeof hook == "object" && hook.length == 2) {
                hook[0][hook[1]].apply(hook[0], args);
              } else if (window2[hook]) {
                window2[hook].apply(window2, args);
              }
            }
            return true;
          } else if (name == "error") {
            var message;
            if (args[0] instanceof FlashError || args[0] instanceof WebcamError) {
              message = args[0].message;
            } else {
              message = "Could not access webcam: " + args[0].name + ": " + args[0].message + " " + args[0].toString();
            }
            alert("Webcam.js Error: " + message);
          }
          return false;
        },
        setSWFLocation: function(value) {
          this.set("swfURL", value);
        },
        detectFlash: function() {
          var SHOCKWAVE_FLASH = "Shockwave Flash", SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash", FLASH_MIME_TYPE = "application/x-shockwave-flash", win = window2, nav = navigator, hasFlash = false;
          if (typeof nav.plugins !== "undefined" && typeof nav.plugins[SHOCKWAVE_FLASH] === "object") {
            var desc = nav.plugins[SHOCKWAVE_FLASH].description;
            if (desc && (typeof nav.mimeTypes !== "undefined" && nav.mimeTypes[FLASH_MIME_TYPE] && nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) {
              hasFlash = true;
            }
          } else if (typeof win.ActiveXObject !== "undefined") {
            try {
              var ax = new ActiveXObject(SHOCKWAVE_FLASH_AX);
              if (ax) {
                var ver = ax.GetVariable("$version");
                if (ver) hasFlash = true;
              }
            } catch (e) {
              ;
            }
          }
          return hasFlash;
        },
        getSWFHTML: function() {
          var html = "", swfURL = this.params.swfURL;
          if (location.protocol.match(/file/)) {
            this.dispatch("error", new FlashError("Flash does not work from local disk.  Please run from a web server."));
            return '<h3 style="color:red">ERROR: the Webcam.js Flash fallback does not work from local disk.  Please run it from a web server.</h3>';
          }
          if (!this.detectFlash()) {
            this.dispatch("error", new FlashError("Adobe Flash Player not found.  Please install from get.adobe.com/flashplayer and try again."));
            return '<h3 style="color:red">' + this.params.flashNotDetectedText + "</h3>";
          }
          if (!swfURL) {
            var base_url = "";
            var scpts = document.getElementsByTagName("script");
            for (var idx = 0, len = scpts.length; idx < len; idx++) {
              var src = scpts[idx].getAttribute("src");
              if (src && src.match(/\/webcam(\.min)?\.js/)) {
                base_url = src.replace(/\/webcam(\.min)?\.js.*$/, "");
                idx = len;
              }
            }
            if (base_url) swfURL = base_url + "/webcam.swf";
            else swfURL = "webcam.swf";
          }
          if (window2.localStorage && !localStorage.getItem("visited")) {
            this.params.new_user = 1;
            localStorage.setItem("visited", 1);
          }
          var flashvars = "";
          for (var key in this.params) {
            if (flashvars) flashvars += "&";
            flashvars += key + "=" + escape(this.params[key]);
          }
          html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" type="application/x-shockwave-flash" codebase="' + this.protocol + '://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + this.params.width + '" height="' + this.params.height + '" id="webcam_movie_obj" align="middle"><param name="wmode" value="opaque"></param><param name="allowScriptAccess" value="always" ></param><param name="allowFullScreen" value="false" ></param><param name="movie" value="' + swfURL + '" ></param><param name="loop" value="false" ></param><param name="menu" value="false" ></param><param name="quality" value="best" ></param><param name="bgcolor" value="#ffffff" ></param><param name="flashvars" value="' + flashvars + '"></param><embed id="webcam_movie_embed" src="' + swfURL + '" wmode="opaque" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + this.params.width + '" height="' + this.params.height + '" name="webcam_movie_embed" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + flashvars + '"></embed></object>';
          return html;
        },
        getMovie: function() {
          if (!this.loaded) return this.dispatch("error", new FlashError("Flash Movie is not loaded yet"));
          var movie = document.getElementById("webcam_movie_obj");
          if (!movie || !movie._snap) movie = document.getElementById("webcam_movie_embed");
          if (!movie) this.dispatch("error", new FlashError("Cannot locate Flash movie in DOM"));
          return movie;
        },
        freeze: function() {
          var self = this;
          var params = this.params;
          if (this.preview_active) this.unfreeze();
          var scaleX = this.params.width / this.params.dest_width;
          var scaleY = this.params.height / this.params.dest_height;
          this.unflip();
          var final_width = params.crop_width || params.dest_width;
          var final_height = params.crop_height || params.dest_height;
          var preview_canvas = document.createElement("canvas");
          preview_canvas.width = final_width;
          preview_canvas.height = final_height;
          var preview_context = preview_canvas.getContext("2d");
          this.preview_canvas = preview_canvas;
          this.preview_context = preview_context;
          if (scaleX != 1 || scaleY != 1) {
            preview_canvas.style.webkitTransformOrigin = "0px 0px";
            preview_canvas.style.mozTransformOrigin = "0px 0px";
            preview_canvas.style.msTransformOrigin = "0px 0px";
            preview_canvas.style.oTransformOrigin = "0px 0px";
            preview_canvas.style.transformOrigin = "0px 0px";
            preview_canvas.style.webkitTransform = "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
            preview_canvas.style.mozTransform = "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
            preview_canvas.style.msTransform = "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
            preview_canvas.style.oTransform = "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
            preview_canvas.style.transform = "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
          }
          this.snap(function() {
            preview_canvas.style.position = "relative";
            preview_canvas.style.left = "" + self.container.scrollLeft + "px";
            preview_canvas.style.top = "" + self.container.scrollTop + "px";
            self.container.insertBefore(preview_canvas, self.peg);
            self.container.style.overflow = "hidden";
            self.preview_active = true;
          }, preview_canvas);
        },
        unfreeze: function() {
          if (this.preview_active) {
            this.container.removeChild(this.preview_canvas);
            delete this.preview_context;
            delete this.preview_canvas;
            this.preview_active = false;
            this.flip();
          }
        },
        flip: function() {
          if (this.params.flip_horiz) {
            var sty = this.container.style;
            sty.webkitTransform = "scaleX(-1)";
            sty.mozTransform = "scaleX(-1)";
            sty.msTransform = "scaleX(-1)";
            sty.oTransform = "scaleX(-1)";
            sty.transform = "scaleX(-1)";
            sty.filter = "FlipH";
            sty.msFilter = "FlipH";
          }
        },
        unflip: function() {
          if (this.params.flip_horiz) {
            var sty = this.container.style;
            sty.webkitTransform = "scaleX(1)";
            sty.mozTransform = "scaleX(1)";
            sty.msTransform = "scaleX(1)";
            sty.oTransform = "scaleX(1)";
            sty.transform = "scaleX(1)";
            sty.filter = "";
            sty.msFilter = "";
          }
        },
        savePreview: function(user_callback, user_canvas) {
          var params = this.params;
          var canvas = this.preview_canvas;
          var context = this.preview_context;
          if (user_canvas) {
            var user_context = user_canvas.getContext("2d");
            user_context.drawImage(canvas, 0, 0);
          }
          user_callback(
            user_canvas ? null : canvas.toDataURL("image/" + params.image_format, params.jpeg_quality / 100),
            canvas,
            context
          );
          if (this.params.unfreeze_snap) this.unfreeze();
        },
        snap: function(user_callback, user_canvas) {
          if (!user_callback) user_callback = this.params.user_callback;
          if (!user_canvas) user_canvas = this.params.user_canvas;
          var self = this;
          var params = this.params;
          if (!this.loaded) return this.dispatch("error", new WebcamError("Webcam is not loaded yet"));
          if (!user_callback) return this.dispatch("error", new WebcamError("Please provide a callback function or canvas to snap()"));
          if (this.preview_active) {
            this.savePreview(user_callback, user_canvas);
            return null;
          }
          var canvas = document.createElement("canvas");
          canvas.width = this.params.dest_width;
          canvas.height = this.params.dest_height;
          var context = canvas.getContext("2d");
          if (this.params.flip_horiz) {
            context.translate(params.dest_width, 0);
            context.scale(-1, 1);
          }
          var func = function() {
            if (this.src && this.width && this.height) {
              context.drawImage(this, 0, 0, params.dest_width, params.dest_height);
            }
            if (params.crop_width && params.crop_height) {
              var crop_canvas = document.createElement("canvas");
              crop_canvas.width = params.crop_width;
              crop_canvas.height = params.crop_height;
              var crop_context = crop_canvas.getContext("2d");
              crop_context.drawImage(
                canvas,
                Math.floor(params.dest_width / 2 - params.crop_width / 2),
                Math.floor(params.dest_height / 2 - params.crop_height / 2),
                params.crop_width,
                params.crop_height,
                0,
                0,
                params.crop_width,
                params.crop_height
              );
              context = crop_context;
              canvas = crop_canvas;
            }
            if (user_canvas) {
              var user_context = user_canvas.getContext("2d");
              user_context.drawImage(canvas, 0, 0);
            }
            user_callback(
              user_canvas ? null : canvas.toDataURL("image/" + params.image_format, params.jpeg_quality / 100),
              canvas,
              context
            );
          };
          if (this.userMedia) {
            context.drawImage(this.video, 0, 0, this.params.dest_width, this.params.dest_height);
            func();
          } else if (this.iOS) {
            var div = document.getElementById(this.container.id + "-ios_div");
            var img = document.getElementById(this.container.id + "-ios_img");
            var input = document.getElementById(this.container.id + "-ios_input");
            iFunc = function(event) {
              func.call(img);
              img.removeEventListener("load", iFunc);
              div.style.backgroundImage = "none";
              img.removeAttribute("src");
              input.value = null;
            };
            if (!input.value) {
              img.addEventListener("load", iFunc);
              input.style.display = "block";
              input.focus();
              input.click();
              input.style.display = "none";
            } else {
              iFunc(null);
            }
          } else {
            var raw_data = this.getMovie()._snap();
            var img = new Image();
            img.onload = func;
            img.src = "data:image/" + this.params.image_format + ";base64," + raw_data;
          }
          return null;
        },
        configure: function(panel) {
          if (!panel) panel = "camera";
          this.getMovie()._configure(panel);
        },
        flashNotify: function(type, msg) {
          switch (type) {
            case "flashLoadComplete":
              this.loaded = true;
              this.dispatch("load");
              break;
            case "cameraLive":
              this.live = true;
              this.dispatch("live");
              break;
            case "error":
              this.dispatch("error", new FlashError(msg));
              break;
            default:
              break;
          }
        },
        b64ToUint6: function(nChr) {
          return nChr > 64 && nChr < 91 ? nChr - 65 : nChr > 96 && nChr < 123 ? nChr - 71 : nChr > 47 && nChr < 58 ? nChr + 4 : nChr === 43 ? 62 : nChr === 47 ? 63 : 0;
        },
        base64DecToArr: function(sBase64, nBlocksSize) {
          var sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, ""), nInLen = sB64Enc.length, nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2, taBytes = new Uint8Array(nOutLen);
          for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
            nMod4 = nInIdx & 3;
            nUint24 |= this.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
            if (nMod4 === 3 || nInLen - nInIdx === 1) {
              for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
              }
              nUint24 = 0;
            }
          }
          return taBytes;
        },
        upload: function(image_data_uri, target_url, callback) {
          var form_elem_name = this.params.upload_name || "webcam";
          var image_fmt = "";
          if (image_data_uri.match(/^data\:image\/(\w+)/))
            image_fmt = RegExp.$1;
          else
            throw "Cannot locate image format in Data URI";
          var raw_image_data = image_data_uri.replace(/^data\:image\/\w+\;base64\,/, "");
          var http = new XMLHttpRequest();
          http.open("POST", target_url, true);
          if (http.upload && http.upload.addEventListener) {
            http.upload.addEventListener("progress", function(e) {
              if (e.lengthComputable) {
                var progress = e.loaded / e.total;
                Webcam2.dispatch("uploadProgress", progress, e);
              }
            }, false);
          }
          var self = this;
          http.onload = function() {
            if (callback) callback.apply(self, [http.status, http.responseText, http.statusText]);
            Webcam2.dispatch("uploadComplete", http.status, http.responseText, http.statusText);
          };
          var blob = new Blob([this.base64DecToArr(raw_image_data)], { type: "image/" + image_fmt });
          var form = new FormData();
          form.append(form_elem_name, blob, form_elem_name + "." + image_fmt.replace(/e/, ""));
          http.send(form);
        }
      };
      Webcam2.init();
      if (typeof define === "function" && define.amd) {
        define(function() {
          return Webcam2;
        });
      } else if (typeof module === "object" && module.exports) {
        module.exports = Webcam2;
      } else {
        window2.Webcam = Webcam2;
      }
    })(window);
  }
});

// src/photocam/1-photocam.js
var import_webcamjs = __toESM(require_webcam());
var PhotoCam = class extends BaseWidget {
  constructor() {
    super(...arguments);
    /**
     * Whether the camera is currently attached and can take photos.
     * @type {boolean}
     */
    __publicField(this, "attached", false);
  }
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    this.cfg.width = this.cfg.width || 320;
    this.cfg.height = this.cfg.height || 240;
    this.cfg.photoWidth = this.cfg.photoWidth || this.cfg.width;
    this.cfg.photoHeight = this.cfg.photoHeight || this.cfg.height;
    this.cfg.jpegQuality = this.cfg.jpegQuality || 90;
    if (!("autoStart" in this.cfg)) {
      this.cfg.autoStart = true;
    }
    if (this.cfg.onCameraError) {
      this.onCameraError = this.cfg.onCameraError;
    }
    this.device = this.cfg.device;
    if (this.cfg.autoStart) {
      this.attach();
    }
  }
  /**
   * @override
   * @inheritdoc
   */
  destroy() {
    super.destroy();
    this.detach();
  }
  /**
   * Attaches the web camera, requesting access to the camera of the user.
   */
  attach() {
    if (!this.attached) {
      import_webcamjs.default.reset();
      var $this = this;
      import_webcamjs.default.set({
        width: this.cfg.width,
        height: this.cfg.height,
        dest_width: this.cfg.photoWidth,
        dest_height: this.cfg.photoHeight,
        image_format: this.cfg.format,
        jpeg_quality: this.cfg.jpegQuality,
        force_flash: false,
        enable_flash: false,
        device: this.device,
        user_callback: function(data) {
          var options = {
            source: $this.id,
            process: $this.cfg.process ? $this.id + " " + $this.cfg.process : $this.id,
            update: $this.cfg.update,
            params: [
              { name: $this.id + "_data", value: data }
            ]
          };
          PrimeFaces.ajax.Request.handle(options);
        }
      });
      $this = this;
      import_webcamjs.default.on("error", this.onCameraError);
      import_webcamjs.default.attach(this.id);
      this.attached = true;
    }
  }
  /**
   * Default error handler for webcam events
   * @private
   * @param {Error} errorObj Error object containing message, stacktrace and so on.
   */
  onCameraError(errorObj) {
    var message;
    if (errorObj instanceof import_webcamjs.default.errors.WebcamError) {
      message = errorObj.message;
    } else {
      message = "Could not access webcam: " + errorObj.name + ": " + errorObj.message + " " + errorObj.toString();
    }
    alert("Webcam.js caught an error: " + message);
  }
  /**
   * Detaches the web camera so that no more photos can be taken.
   */
  detach() {
    if (this.attached) {
      import_webcamjs.default.reset();
      this.attached = false;
    }
  }
  /**
   * Takes a photo with the web cam. Logs an error if no photo can be takes, such as when the user does not have
   * a camera or did not allow access to the camera.
   */
  capture() {
    if (this.attached) {
      import_webcamjs.default.snap();
    } else {
      PrimeFaces.error("Capture error: AdvancedPhotoCam not attached to the camera");
    }
  }
  /**
   * Retrieves the available video input device list.
   * @return {Promise<MediaDeviceInfo[]> | null} The available video input device list, or `null` if the browser does
   * not support media devices enumeration.
   */
  getAvailableDevices() {
    var result = null;
    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
      result = navigator.mediaDevices.enumerateDevices().then(function(devices) {
        return devices.filter(
          function(device) {
            return device.kind === "videoinput";
          }
        );
      });
    }
    return result;
  }
  /**
   * Utility to detach and attach the video again.
   */
  reload() {
    if (this.attached) {
      this.detach();
      this.attach();
    }
  }
};
export {
  PhotoCam
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvd2ViY2FtanMtcGF0Y2gtMGM2YzY4OTA4NC0xMGMwLnppcC9ub2RlX21vZHVsZXMvd2ViY2FtanMvd2ViY2FtLmpzIiwgIi4uL3NyYy9waG90b2NhbS8xLXBob3RvY2FtLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBXZWJjYW1KUyB2MS4wLjI2XG4vLyBXZWJjYW0gbGlicmFyeSBmb3IgY2FwdHVyaW5nIEpQRUcvUE5HIGltYWdlcyBpbiBKYXZhU2NyaXB0XG4vLyBBdHRlbXB0cyBnZXRVc2VyTWVkaWEsIGZhbGxzIGJhY2sgdG8gRmxhc2hcbi8vIEF1dGhvcjogSm9zZXBoIEh1Y2thYnk6IGh0dHA6Ly9naXRodWIuY29tL2podWNrYWJ5XG4vLyBCYXNlZCBvbiBKUEVHQ2FtOiBodHRwOi8vY29kZS5nb29nbGUuY29tL3AvanBlZ2NhbS9cbi8vIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTkgSm9zZXBoIEh1Y2thYnlcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuXG4oZnVuY3Rpb24od2luZG93KSB7XG52YXIgX3VzZXJNZWRpYTtcblxuLy8gZGVjbGFyZSBlcnJvciB0eXBlc1xuXG4vLyBpbmhlcml0YW5jZSBwYXR0ZXJuIGhlcmU6XG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83ODM4MTgvaG93LWRvLWktY3JlYXRlLWEtY3VzdG9tLWVycm9yLWluLWphdmFzY3JpcHRcbmZ1bmN0aW9uIEZsYXNoRXJyb3IoKSB7XG5cdHZhciB0ZW1wID0gRXJyb3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0dGVtcC5uYW1lID0gdGhpcy5uYW1lID0gXCJGbGFzaEVycm9yXCI7XG5cdHRoaXMuc3RhY2sgPSB0ZW1wLnN0YWNrO1xuXHR0aGlzLm1lc3NhZ2UgPSB0ZW1wLm1lc3NhZ2U7XG59XG5cbmZ1bmN0aW9uIFdlYmNhbUVycm9yKCkge1xuXHR2YXIgdGVtcCA9IEVycm9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdHRlbXAubmFtZSA9IHRoaXMubmFtZSA9IFwiV2ViY2FtRXJyb3JcIjtcblx0dGhpcy5zdGFjayA9IHRlbXAuc3RhY2s7XG5cdHRoaXMubWVzc2FnZSA9IHRlbXAubWVzc2FnZTtcbn1cblxudmFyIEludGVybWVkaWF0ZUluaGVyaXRvciA9IGZ1bmN0aW9uKCkge307XG5JbnRlcm1lZGlhdGVJbmhlcml0b3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG5GbGFzaEVycm9yLnByb3RvdHlwZSA9IG5ldyBJbnRlcm1lZGlhdGVJbmhlcml0b3IoKTtcbldlYmNhbUVycm9yLnByb3RvdHlwZSA9IG5ldyBJbnRlcm1lZGlhdGVJbmhlcml0b3IoKTtcblxudmFyIFdlYmNhbSA9IHtcblx0dmVyc2lvbjogJzEuMC4yNicsXG5cdFxuXHQvLyBnbG9iYWxzXG5cdHByb3RvY29sOiBsb2NhdGlvbi5wcm90b2NvbC5tYXRjaCgvaHR0cHMvaSkgPyAnaHR0cHMnIDogJ2h0dHAnLFxuXHRsb2FkZWQ6IGZhbHNlLCAgIC8vIHRydWUgd2hlbiB3ZWJjYW0gbW92aWUgZmluaXNoZXMgbG9hZGluZ1xuXHRsaXZlOiBmYWxzZSwgICAgIC8vIHRydWUgd2hlbiB3ZWJjYW0gaXMgaW5pdGlhbGl6ZWQgYW5kIHJlYWR5IHRvIHNuYXBcblx0dXNlck1lZGlhOiB0cnVlLCAvLyB0cnVlIHdoZW4gZ2V0VXNlck1lZGlhIGlzIHN1cHBvcnRlZCBuYXRpdmVseVxuXG5cdGlPUzogL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIXdpbmRvdy5NU1N0cmVhbSxcblxuXHRwYXJhbXM6IHtcblx0XHR3aWR0aDogMCxcblx0XHRoZWlnaHQ6IDAsXG5cdFx0ZGVzdF93aWR0aDogMCwgICAgICAgICAvLyBzaXplIG9mIGNhcHR1cmVkIGltYWdlXG5cdFx0ZGVzdF9oZWlnaHQ6IDAsICAgICAgICAvLyB0aGVzZSBkZWZhdWx0IHRvIHdpZHRoL2hlaWdodFxuXHRcdGltYWdlX2Zvcm1hdDogJ2pwZWcnLCAgLy8gaW1hZ2UgZm9ybWF0IChtYXkgYmUganBlZyBvciBwbmcpXG5cdFx0anBlZ19xdWFsaXR5OiA5MCwgICAgICAvLyBqcGVnIGltYWdlIHF1YWxpdHkgZnJvbSAwICh3b3JzdCkgdG8gMTAwIChiZXN0KVxuXHRcdGVuYWJsZV9mbGFzaDogdHJ1ZSwgICAgLy8gZW5hYmxlIGZsYXNoIGZhbGxiYWNrLFxuXHRcdGZvcmNlX2ZsYXNoOiBmYWxzZSwgICAgLy8gZm9yY2UgZmxhc2ggbW9kZSxcblx0XHRmbGlwX2hvcml6OiBmYWxzZSwgICAgIC8vIGZsaXAgaW1hZ2UgaG9yaXogKG1pcnJvciBtb2RlKVxuXHRcdGZwczogMzAsICAgICAgICAgICAgICAgLy8gY2FtZXJhIGZyYW1lcyBwZXIgc2Vjb25kXG5cdFx0dXBsb2FkX25hbWU6ICd3ZWJjYW0nLCAvLyBuYW1lIG9mIGZpbGUgaW4gdXBsb2FkIHBvc3QgZGF0YVxuXHRcdGNvbnN0cmFpbnRzOiBudWxsLCAgICAgLy8gY3VzdG9tIHVzZXIgbWVkaWEgY29uc3RyYWludHMsXG5cdFx0c3dmVVJMOiAnJywgICAgICAgICAgICAvLyBVUkkgdG8gd2ViY2FtLnN3ZiBtb3ZpZSAoZGVmYXVsdHMgdG8gdGhlIGpzIGxvY2F0aW9uKVxuXHRcdGZsYXNoTm90RGV0ZWN0ZWRUZXh0OiAnRVJST1I6IE5vIEFkb2JlIEZsYXNoIFBsYXllciBkZXRlY3RlZC4gIFdlYmNhbS5qcyByZWxpZXMgb24gRmxhc2ggZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ2V0VXNlck1lZGlhIChsaWtlIHlvdXJzKS4nLFxuXHRcdG5vSW50ZXJmYWNlRm91bmRUZXh0OiAnTm8gc3VwcG9ydGVkIHdlYmNhbSBpbnRlcmZhY2UgZm91bmQuJyxcblx0XHR1bmZyZWV6ZV9zbmFwOiB0cnVlLCAgIC8vIFdoZXRoZXIgdG8gdW5mcmVlemUgdGhlIGNhbWVyYSBhZnRlciBzbmFwIChkZWZhdWx0cyB0byB0cnVlKVxuXHRcdGlvc1BsYWNlaG9sZGVyVGV4dDogJ0NsaWNrIGhlcmUgdG8gb3BlbiBjYW1lcmEuJyxcblx0XHR1c2VyX2NhbGxiYWNrOiBudWxsLCAgIC8vIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBzbmFwc2hvdCAodXNlZCBpZiBubyB1c2VyX2NhbGxiYWNrIHBhcmFtZXRlciBnaXZlbiB0byBzbmFwIGZ1bmN0aW9uKVxuXHRcdHVzZXJfY2FudmFzOiBudWxsLCAgICAgLy8gdXNlciBwcm92aWRlZCBjYW52YXMgZm9yIHNuYXBzaG90ICh1c2VkIGlmIG5vIHVzZXJfY2FudmFzIHBhcmFtZXRlciBnaXZlbiB0byBzbmFwIGZ1bmN0aW9uKVxuXHRcdGRldmljZTogbnVsbCAgICAgICAgICAgLy8gc2VsZWN0ZWQgZGV2aWNlIHRvIGdyYWIgaW1hZ2VzIGZyb21cblx0fSxcblxuXHRlcnJvcnM6IHtcblx0XHRGbGFzaEVycm9yOiBGbGFzaEVycm9yLFxuXHRcdFdlYmNhbUVycm9yOiBXZWJjYW1FcnJvclxuXHR9LFxuXHRcblx0aG9va3M6IHt9LCAvLyBjYWxsYmFjayBob29rIGZ1bmN0aW9uc1xuXHRcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gaW5pdGlhbGl6ZSwgY2hlY2sgZm9yIGdldFVzZXJNZWRpYSBzdXBwb3J0XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFxuXHRcdC8vIFNldHVwIGdldFVzZXJNZWRpYSwgd2l0aCBwb2x5ZmlsbCBmb3Igb2xkZXIgYnJvd3NlcnNcblx0XHQvLyBBZGFwdGVkIGZyb206IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9NZWRpYURldmljZXMvZ2V0VXNlck1lZGlhXG5cdFx0dGhpcy5tZWRpYURldmljZXMgPSAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkgPyBcblx0XHRcdG5hdmlnYXRvci5tZWRpYURldmljZXMgOiAoKG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSkgPyB7XG5cdFx0XHRcdGdldFVzZXJNZWRpYTogZnVuY3Rpb24oYykge1xuXHRcdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbih5LCBuKSB7XG5cdFx0XHRcdFx0XHQobmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSB8fFxuXHRcdFx0XHRcdFx0bmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSkuY2FsbChuYXZpZ2F0b3IsIGMsIHksIG4pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0fSA6IG51bGwpO1xuXHRcdFxuXHRcdHdpbmRvdy5VUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwgfHwgd2luZG93Lm1velVSTCB8fCB3aW5kb3cubXNVUkw7XG5cdFx0dGhpcy51c2VyTWVkaWEgPSB0aGlzLnVzZXJNZWRpYSAmJiAhIXRoaXMubWVkaWFEZXZpY2VzICYmICEhd2luZG93LlVSTDtcblx0XHRcblx0XHQvLyBPbGRlciB2ZXJzaW9ucyBvZiBmaXJlZm94ICg8IDIxKSBhcHBhcmVudGx5IGNsYWltIHN1cHBvcnQgYnV0IHVzZXIgbWVkaWEgZG9lcyBub3QgYWN0dWFsbHkgd29ya1xuXHRcdGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9GaXJlZm94XFxEKyhcXGQrKS8pKSB7XG5cdFx0XHRpZiAocGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPCAyMSkgdGhpcy51c2VyTWVkaWEgPSBudWxsO1xuXHRcdH1cblx0XHRcblx0XHQvLyBNYWtlIHN1cmUgbWVkaWEgc3RyZWFtIGlzIGNsb3NlZCB3aGVuIG5hdmlnYXRpbmcgYXdheSBmcm9tIHBhZ2Vcblx0XHRpZiAodGhpcy51c2VyTWVkaWEpIHtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnYmVmb3JldW5sb2FkJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0c2VsZi5yZXNldCgpO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fSxcblx0XG5cdGV4aWZPcmllbnRhdGlvbjogZnVuY3Rpb24oYmluRmlsZSkge1xuXHRcdC8vIGV4dHJhY3Qgb3JpZW50YXRpb24gaW5mb3JtYXRpb24gZnJvbSB0aGUgaW1hZ2UgcHJvdmlkZWQgYnkgaU9TXG5cdFx0Ly8gYWxnb3JpdGhtIGJhc2VkIG9uIGV4aWYtanNcblx0XHR2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYmluRmlsZSk7XG5cdFx0aWYgKChkYXRhVmlldy5nZXRVaW50OCgwKSAhPSAweEZGKSB8fCAoZGF0YVZpZXcuZ2V0VWludDgoMSkgIT0gMHhEOCkpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdOb3QgYSB2YWxpZCBKUEVHIGZpbGUnKTtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0XHR2YXIgb2Zmc2V0ID0gMjtcblx0XHR2YXIgbWFya2VyID0gbnVsbDtcblx0XHR3aGlsZSAob2Zmc2V0IDwgYmluRmlsZS5ieXRlTGVuZ3RoKSB7XG5cdFx0XHQvLyBmaW5kIDB4RkZFMSAoMjI1IG1hcmtlcilcblx0XHRcdGlmIChkYXRhVmlldy5nZXRVaW50OChvZmZzZXQpICE9IDB4RkYpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ05vdCBhIHZhbGlkIG1hcmtlciBhdCBvZmZzZXQgJyArIG9mZnNldCArICcsIGZvdW5kOiAnICsgZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0KSk7XG5cdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0fVxuXHRcdFx0bWFya2VyID0gZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgMSk7XG5cdFx0XHRpZiAobWFya2VyID09IDIyNSkge1xuXHRcdFx0XHRvZmZzZXQgKz0gNDtcblx0XHRcdFx0dmFyIHN0ciA9IFwiXCI7XG5cdFx0XHRcdGZvciAobiA9IDA7IG4gPCA0OyBuKyspIHtcblx0XHRcdFx0XHRzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShkYXRhVmlldy5nZXRVaW50OChvZmZzZXQrbikpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdHIgIT0gJ0V4aWYnKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ05vdCB2YWxpZCBFWElGIGRhdGEgZm91bmQnKTtcblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0b2Zmc2V0ICs9IDY7IC8vIHRpZmZPZmZzZXRcblx0XHRcdFx0dmFyIGJpZ0VuZCA9IG51bGw7XG5cblx0XHRcdFx0Ly8gdGVzdCBmb3IgVElGRiB2YWxpZGl0eSBhbmQgZW5kaWFubmVzc1xuXHRcdFx0XHRpZiAoZGF0YVZpZXcuZ2V0VWludDE2KG9mZnNldCkgPT0gMHg0OTQ5KSB7XG5cdFx0XHRcdFx0YmlnRW5kID0gZmFsc2U7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZGF0YVZpZXcuZ2V0VWludDE2KG9mZnNldCkgPT0gMHg0RDREKSB7XG5cdFx0XHRcdFx0YmlnRW5kID0gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIk5vdCB2YWxpZCBUSUZGIGRhdGEhIChubyAweDQ5NDkgb3IgMHg0RDREKVwiKTtcblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChkYXRhVmlldy5nZXRVaW50MTYob2Zmc2V0KzIsICFiaWdFbmQpICE9IDB4MDAyQSkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiTm90IHZhbGlkIFRJRkYgZGF0YSEgKG5vIDB4MDAyQSlcIik7XG5cdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgZmlyc3RJRkRPZmZzZXQgPSBkYXRhVmlldy5nZXRVaW50MzIob2Zmc2V0KzQsICFiaWdFbmQpO1xuXHRcdFx0XHRpZiAoZmlyc3RJRkRPZmZzZXQgPCAweDAwMDAwMDA4KSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJOb3QgdmFsaWQgVElGRiBkYXRhISAoRmlyc3Qgb2Zmc2V0IGxlc3MgdGhhbiA4KVwiLCBkYXRhVmlldy5nZXRVaW50MzIob2Zmc2V0KzQsICFiaWdFbmQpKTtcblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGV4dHJhY3Qgb3JpZW50YXRpb24gZGF0YVxuXHRcdFx0XHR2YXIgZGF0YVN0YXJ0ID0gb2Zmc2V0ICsgZmlyc3RJRkRPZmZzZXQ7XG5cdFx0XHRcdHZhciBlbnRyaWVzID0gZGF0YVZpZXcuZ2V0VWludDE2KGRhdGFTdGFydCwgIWJpZ0VuZCk7XG5cdFx0XHRcdGZvciAodmFyIGk9MDsgaTxlbnRyaWVzOyBpKyspIHtcblx0XHRcdFx0XHR2YXIgZW50cnlPZmZzZXQgPSBkYXRhU3RhcnQgKyBpKjEyICsgMjtcblx0XHRcdFx0XHRpZiAoZGF0YVZpZXcuZ2V0VWludDE2KGVudHJ5T2Zmc2V0LCAhYmlnRW5kKSA9PSAweDAxMTIpIHtcblx0XHRcdFx0XHRcdHZhciB2YWx1ZVR5cGUgPSBkYXRhVmlldy5nZXRVaW50MTYoZW50cnlPZmZzZXQrMiwgIWJpZ0VuZCk7XG5cdFx0XHRcdFx0XHR2YXIgbnVtVmFsdWVzID0gZGF0YVZpZXcuZ2V0VWludDMyKGVudHJ5T2Zmc2V0KzQsICFiaWdFbmQpO1xuXHRcdFx0XHRcdFx0aWYgKHZhbHVlVHlwZSAhPSAzICYmIG51bVZhbHVlcyAhPSAxKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdJbnZhbGlkIEVYSUYgb3JpZW50YXRpb24gdmFsdWUgdHlwZSAoJyt2YWx1ZVR5cGUrJykgb3IgY291bnQgKCcrbnVtVmFsdWVzKycpJyk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dmFyIHZhbHVlID0gZGF0YVZpZXcuZ2V0VWludDE2KGVudHJ5T2Zmc2V0ICsgOCwgIWJpZ0VuZCk7XG5cdFx0XHRcdFx0XHRpZiAodmFsdWUgPCAxIHx8IHZhbHVlID4gOCkge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnSW52YWxpZCBFWElGIG9yaWVudGF0aW9uIHZhbHVlICgnK3ZhbHVlKycpJyk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2Zmc2V0ICs9IDIrZGF0YVZpZXcuZ2V0VWludDE2KG9mZnNldCsyKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIDA7XG5cdH0sXG5cdFxuXHRmaXhPcmllbnRhdGlvbjogZnVuY3Rpb24ob3JpZ09ialVSTCwgb3JpZW50YXRpb24sIHRhcmdldEltZykge1xuXHRcdC8vIGZpeCBpbWFnZSBvcmllbnRhdGlvbiBiYXNlZCBvbiBleGlmIG9yaWVudGF0aW9uIGRhdGFcblx0XHQvLyBleGlmIG9yaWVudGF0aW9uIGluZm9ybWF0aW9uXG5cdFx0Ly8gICAgaHR0cDovL3d3dy5pbXB1bHNlYWR2ZW50dXJlLmNvbS9waG90by9leGlmLW9yaWVudGF0aW9uLmh0bWxcblx0XHQvLyAgICBsaW5rIHNvdXJjZSB3aWtpcGVkaWEgKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0V4aWYjY2l0ZV9ub3RlLTIwKVxuXHRcdHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdFx0XHR2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cdFx0XHRcblx0XHRcdC8vIHN3aXRjaCB3aWR0aCBoZWlnaHQgaWYgb3JpZW50YXRpb24gbmVlZGVkXG5cdFx0XHRpZiAob3JpZW50YXRpb24gPCA1KSB7XG5cdFx0XHRcdGNhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcblx0XHRcdFx0Y2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjYW52YXMud2lkdGggPSBpbWcuaGVpZ2h0O1xuXHRcdFx0XHRjYW52YXMuaGVpZ2h0ID0gaW1nLndpZHRoO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyB0cmFuc2Zvcm0gKHJvdGF0ZSkgaW1hZ2UgLSBzZWUgbGluayBhdCBiZWdpbm5pbmcgdGhpcyBtZXRob2Rcblx0XHRcdHN3aXRjaCAob3JpZW50YXRpb24pIHtcblx0XHRcdFx0Y2FzZSAyOiBjdHgudHJhbnNmb3JtKC0xLCAwLCAwLCAxLCBpbWcud2lkdGgsIDApOyBicmVhaztcblx0XHRcdFx0Y2FzZSAzOiBjdHgudHJhbnNmb3JtKC0xLCAwLCAwLCAtMSwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0KTsgYnJlYWs7XG5cdFx0XHRcdGNhc2UgNDogY3R4LnRyYW5zZm9ybSgxLCAwLCAwLCAtMSwgMCwgaW1nLmhlaWdodCk7IGJyZWFrO1xuXHRcdFx0XHRjYXNlIDU6IGN0eC50cmFuc2Zvcm0oMCwgMSwgMSwgMCwgMCwgMCk7IGJyZWFrO1xuXHRcdFx0XHRjYXNlIDY6IGN0eC50cmFuc2Zvcm0oMCwgMSwgLTEsIDAsIGltZy5oZWlnaHQgLCAwKTsgYnJlYWs7XG5cdFx0XHRcdGNhc2UgNzogY3R4LnRyYW5zZm9ybSgwLCAtMSwgLTEsIDAsIGltZy5oZWlnaHQsIGltZy53aWR0aCk7IGJyZWFrO1xuXHRcdFx0XHRjYXNlIDg6IGN0eC50cmFuc2Zvcm0oMCwgLTEsIDEsIDAsIDAsIGltZy53aWR0aCk7IGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG5cdFx0XHQvLyBwYXNzIHJvdGF0ZWQgaW1hZ2UgZGF0YSB0byB0aGUgdGFyZ2V0IGltYWdlIGNvbnRhaW5lclxuXHRcdFx0dGFyZ2V0SW1nLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcblx0XHR9LCBmYWxzZSk7XG5cdFx0Ly8gc3RhcnQgdHJhbnNmb3JtYXRpb24gYnkgbG9hZCBldmVudFxuXHRcdGltZy5zcmMgPSBvcmlnT2JqVVJMO1xuXHR9LFxuXHRcblx0YXR0YWNoOiBmdW5jdGlvbihlbGVtKSB7XG5cdFx0Ly8gY3JlYXRlIHdlYmNhbSBwcmV2aWV3IGFuZCBhdHRhY2ggdG8gRE9NIGVsZW1lbnRcblx0XHQvLyBwYXNzIGluIGFjdHVhbCBET00gcmVmZXJlbmNlLCBJRCwgb3IgQ1NTIHNlbGVjdG9yXG5cdFx0aWYgKHR5cGVvZihlbGVtKSA9PSAnc3RyaW5nJykge1xuXHRcdFx0ZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW0pIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG5cdFx0fVxuXHRcdGlmICghZWxlbSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZGlzcGF0Y2goJ2Vycm9yJywgbmV3IFdlYmNhbUVycm9yKFwiQ291bGQgbm90IGxvY2F0ZSBET00gZWxlbWVudCB0byBhdHRhY2ggdG8uXCIpKTtcblx0XHR9XG5cdFx0dGhpcy5jb250YWluZXIgPSBlbGVtO1xuXHRcdGVsZW0uaW5uZXJIVE1MID0gJyc7IC8vIHN0YXJ0IHdpdGggZW1wdHkgZWxlbWVudFxuXHRcdFxuXHRcdC8vIGluc2VydCBcInBlZ1wiIHNvIHdlIGNhbiBpbnNlcnQgb3VyIHByZXZpZXcgY2FudmFzIGFkamFjZW50IHRvIGl0IGxhdGVyIG9uXG5cdFx0dmFyIHBlZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGVsZW0uYXBwZW5kQ2hpbGQoIHBlZyApO1xuXHRcdHRoaXMucGVnID0gcGVnO1xuXHRcdFxuXHRcdC8vIHNldCB3aWR0aC9oZWlnaHQgaWYgbm90IGFscmVhZHkgc2V0XG5cdFx0aWYgKCF0aGlzLnBhcmFtcy53aWR0aCkgdGhpcy5wYXJhbXMud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuXHRcdGlmICghdGhpcy5wYXJhbXMuaGVpZ2h0KSB0aGlzLnBhcmFtcy5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcblx0XHRcblx0XHQvLyBtYWtlIHN1cmUgd2UgaGF2ZSBhIG5vbnplcm8gd2lkdGggYW5kIGhlaWdodCBhdCB0aGlzIHBvaW50XG5cdFx0aWYgKCF0aGlzLnBhcmFtcy53aWR0aCB8fCAhdGhpcy5wYXJhbXMuaGVpZ2h0KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kaXNwYXRjaCgnZXJyb3InLCBuZXcgV2ViY2FtRXJyb3IoXCJObyB3aWR0aCBhbmQvb3IgaGVpZ2h0IGZvciB3ZWJjYW0uICBQbGVhc2UgY2FsbCBzZXQoKSBmaXJzdCwgb3IgYXR0YWNoIHRvIGEgdmlzaWJsZSBlbGVtZW50LlwiKSk7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIHNldCBkZWZhdWx0cyBmb3IgZGVzdF93aWR0aCAvIGRlc3RfaGVpZ2h0IGlmIG5vdCBzZXRcblx0XHRpZiAoIXRoaXMucGFyYW1zLmRlc3Rfd2lkdGgpIHRoaXMucGFyYW1zLmRlc3Rfd2lkdGggPSB0aGlzLnBhcmFtcy53aWR0aDtcblx0XHRpZiAoIXRoaXMucGFyYW1zLmRlc3RfaGVpZ2h0KSB0aGlzLnBhcmFtcy5kZXN0X2hlaWdodCA9IHRoaXMucGFyYW1zLmhlaWdodDtcblx0XHRcblx0XHR0aGlzLnVzZXJNZWRpYSA9IF91c2VyTWVkaWEgPT09IHVuZGVmaW5lZCA/IHRoaXMudXNlck1lZGlhIDogX3VzZXJNZWRpYTtcblx0XHQvLyBpZiBmb3JjZV9mbGFzaCBpcyBzZXQsIGRpc2FibGUgdXNlck1lZGlhXG5cdFx0aWYgKHRoaXMucGFyYW1zLmZvcmNlX2ZsYXNoKSB7XG5cdFx0XHRfdXNlck1lZGlhID0gdGhpcy51c2VyTWVkaWE7XG5cdFx0XHR0aGlzLnVzZXJNZWRpYSA9IG51bGw7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIGNoZWNrIGZvciBkZWZhdWx0IGZwc1xuXHRcdGlmICh0eXBlb2YgdGhpcy5wYXJhbXMuZnBzICE9PSBcIm51bWJlclwiKSB0aGlzLnBhcmFtcy5mcHMgPSAzMDtcblxuXHRcdC8vIGFkanVzdCBzY2FsZSBpZiBkZXN0X3dpZHRoIG9yIGRlc3RfaGVpZ2h0IGlzIGRpZmZlcmVudFxuXHRcdHZhciBzY2FsZVggPSB0aGlzLnBhcmFtcy53aWR0aCAvIHRoaXMucGFyYW1zLmRlc3Rfd2lkdGg7XG5cdFx0dmFyIHNjYWxlWSA9IHRoaXMucGFyYW1zLmhlaWdodCAvIHRoaXMucGFyYW1zLmRlc3RfaGVpZ2h0O1xuXHRcdFxuXHRcdGlmICh0aGlzLnVzZXJNZWRpYSkge1xuXHRcdFx0Ly8gc2V0dXAgd2ViY2FtIHZpZGVvIGNvbnRhaW5lclxuXHRcdFx0dmFyIHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcblx0XHRcdHZpZGVvLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAnYXV0b3BsYXknKTtcblx0XHRcdHZpZGVvLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCAncGxheXNpbmxpbmUnKTtcblx0XHRcdHZpZGVvLnN0eWxlLndpZHRoID0gJycgKyB0aGlzLnBhcmFtcy5kZXN0X3dpZHRoICsgJ3B4Jztcblx0XHRcdHZpZGVvLnN0eWxlLmhlaWdodCA9ICcnICsgdGhpcy5wYXJhbXMuZGVzdF9oZWlnaHQgKyAncHgnO1xuXHRcdFx0XG5cdFx0XHRpZiAoKHNjYWxlWCAhPSAxLjApIHx8IChzY2FsZVkgIT0gMS4wKSkge1xuXHRcdFx0XHRlbGVtLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdFx0XHRcdHZpZGVvLnN0eWxlLndlYmtpdFRyYW5zZm9ybU9yaWdpbiA9ICcwcHggMHB4Jztcblx0XHRcdFx0dmlkZW8uc3R5bGUubW96VHJhbnNmb3JtT3JpZ2luID0gJzBweCAwcHgnO1xuXHRcdFx0XHR2aWRlby5zdHlsZS5tc1RyYW5zZm9ybU9yaWdpbiA9ICcwcHggMHB4Jztcblx0XHRcdFx0dmlkZW8uc3R5bGUub1RyYW5zZm9ybU9yaWdpbiA9ICcwcHggMHB4Jztcblx0XHRcdFx0dmlkZW8uc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJzBweCAwcHgnO1xuXHRcdFx0XHR2aWRlby5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnc2NhbGVYKCcrc2NhbGVYKycpIHNjYWxlWSgnK3NjYWxlWSsnKSc7XG5cdFx0XHRcdHZpZGVvLnN0eWxlLm1velRyYW5zZm9ybSA9ICdzY2FsZVgoJytzY2FsZVgrJykgc2NhbGVZKCcrc2NhbGVZKycpJztcblx0XHRcdFx0dmlkZW8uc3R5bGUubXNUcmFuc2Zvcm0gPSAnc2NhbGVYKCcrc2NhbGVYKycpIHNjYWxlWSgnK3NjYWxlWSsnKSc7XG5cdFx0XHRcdHZpZGVvLnN0eWxlLm9UcmFuc2Zvcm0gPSAnc2NhbGVYKCcrc2NhbGVYKycpIHNjYWxlWSgnK3NjYWxlWSsnKSc7XG5cdFx0XHRcdHZpZGVvLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZVgoJytzY2FsZVgrJykgc2NhbGVZKCcrc2NhbGVZKycpJztcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gYWRkIHZpZGVvIGVsZW1lbnQgdG8gZG9tXG5cdFx0XHRlbGVtLmFwcGVuZENoaWxkKCB2aWRlbyApO1xuXHRcdFx0dGhpcy52aWRlbyA9IHZpZGVvO1xuXHRcdFx0XG5cdFx0XHQvLyBhc2sgdXNlciBmb3IgYWNjZXNzIHRvIHRoZWlyIGNhbWVyYVxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0XG5cdFx0XHR2YXIgY29uc3RyYWludHMgPSB0aGlzLnBhcmFtcy5jb25zdHJhaW50cztcblx0XHRcdFxuXHRcdFx0aWYgKCFjb25zdHJhaW50cykge1xuXHRcdFx0XHRjb25zdHJhaW50cyA9IHtcblx0XHRcdFx0XHR3aWR0aDogeyBtaW46IHRoaXMucGFyYW1zLmRlc3Rfd2lkdGggfSxcblx0XHRcdFx0XHRoZWlnaHQ6IHsgbWluOiB0aGlzLnBhcmFtcy5kZXN0X2hlaWdodCB9XG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmICh0aGlzLnBhcmFtcy5kZXZpY2UgPT09IFwidXNlclwiIHx8IHRoaXMucGFyYW1zLmRldmljZSA9PT0gXCJlbnZpcm9ubWVudFwiKSB7XG5cdFx0XHRcdFx0Y29uc3RyYWludHMuZmFjaW5nTW9kZSA9IHRoaXMucGFyYW1zLmRldmljZTtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnBhcmFtcy5kZXZpY2UpIHtcblx0XHRcdFx0XHRjb25zdHJhaW50cy5kZXZpY2VJZCA9IHRoaXMucGFyYW1zLmRldmljZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcblx0XHRcdFx0XCJhdWRpb1wiOiBmYWxzZSxcblx0XHRcdFx0XCJ2aWRlb1wiOiBjb25zdHJhaW50c1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKCBmdW5jdGlvbihzdHJlYW0pIHtcblx0XHRcdFx0Ly8gZ290IGFjY2VzcywgYXR0YWNoIHN0cmVhbSB0byB2aWRlb1xuXHRcdFx0XHR2aWRlby5vbmxvYWRlZG1ldGFkYXRhID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdHNlbGYuc3RyZWFtID0gc3RyZWFtO1xuXHRcdFx0XHRcdHNlbGYubG9hZGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRzZWxmLmxpdmUgPSB0cnVlO1xuXHRcdFx0XHRcdHNlbGYuZGlzcGF0Y2goJ2xvYWQnKTtcblx0XHRcdFx0XHRzZWxmLmRpc3BhdGNoKCdsaXZlJyk7XG5cdFx0XHRcdFx0c2VsZi5mbGlwKCk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdC8vIGFzIHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKCkgaXMgZGVwcmVjYXRlZCwgYWRkaW5nIGEgY2hlY2sgc28gdGhhdCBpdCB3b3JrcyBpbiBTYWZhcmkuXG5cdFx0XHRcdC8vIG9sZGVyIGJyb3dzZXJzIG1heSBub3QgaGF2ZSBzcmNPYmplY3Rcblx0XHRcdFx0aWYgKFwic3JjT2JqZWN0XCIgaW4gdmlkZW8pIHtcblx0XHRcdFx0ICBcdHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0ICBcdC8vIHVzaW5nIFVSTC5jcmVhdGVPYmplY3RVUkwoKSBhcyBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzXG5cdFx0XHRcdCAgXHR2aWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKCBmdW5jdGlvbihlcnIpIHtcblx0XHRcdFx0Ly8gSkggMjAxNi0wNy0zMSBJbnN0ZWFkIG9mIGRpc3BhdGNoaW5nIGVycm9yLCBub3cgZmFsbGluZyBiYWNrIHRvIEZsYXNoIGlmIHVzZXJNZWRpYSBmYWlscyAodGh4IEBqb2huMjAxNClcblx0XHRcdFx0Ly8gSkggMjAxNi0wOC0wNyBCdXQgb25seSBpZiBmbGFzaCBpcyBhY3R1YWxseSBpbnN0YWxsZWQgLS0gaWYgbm90LCBkaXNwYXRjaCBlcnJvciBoZXJlIGFuZCBub3cuXG5cdFx0XHRcdGlmIChzZWxmLnBhcmFtcy5lbmFibGVfZmxhc2ggJiYgc2VsZi5kZXRlY3RGbGFzaCgpKSB7XG5cdFx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7IHNlbGYucGFyYW1zLmZvcmNlX2ZsYXNoID0gMTsgc2VsZi5hdHRhY2goZWxlbSk7IH0sIDEgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRzZWxmLmRpc3BhdGNoKCdlcnJvcicsIGVycik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRlbHNlIGlmICh0aGlzLmlPUykge1xuXHRcdFx0Ly8gcHJlcGFyZSBIVE1MIGVsZW1lbnRzXG5cdFx0XHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRkaXYuaWQgPSB0aGlzLmNvbnRhaW5lci5pZCsnLWlvc19kaXYnO1xuXHRcdFx0ZGl2LmNsYXNzTmFtZSA9ICd3ZWJjYW1qcy1pb3MtcGxhY2Vob2xkZXInO1xuXHRcdFx0ZGl2LnN0eWxlLndpZHRoID0gJycgKyB0aGlzLnBhcmFtcy53aWR0aCArICdweCc7XG5cdFx0XHRkaXYuc3R5bGUuaGVpZ2h0ID0gJycgKyB0aGlzLnBhcmFtcy5oZWlnaHQgKyAncHgnO1xuXHRcdFx0ZGl2LnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuXHRcdFx0ZGl2LnN0eWxlLmRpc3BsYXkgPSAndGFibGUtY2VsbCc7XG5cdFx0XHRkaXYuc3R5bGUudmVydGljYWxBbGlnbiA9ICdtaWRkbGUnO1xuXHRcdFx0ZGl2LnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0Jztcblx0XHRcdGRpdi5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb250YWluJztcblx0XHRcdGRpdi5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyJztcblx0XHRcdHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0c3Bhbi5jbGFzc05hbWUgPSAnd2ViY2FtanMtaW9zLXRleHQnO1xuXHRcdFx0c3Bhbi5pbm5lckhUTUwgPSB0aGlzLnBhcmFtcy5pb3NQbGFjZWhvbGRlclRleHQ7XG5cdFx0XHRkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cdFx0XHR2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0XHRpbWcuaWQgPSB0aGlzLmNvbnRhaW5lci5pZCsnLWlvc19pbWcnO1xuXHRcdFx0aW1nLnN0eWxlLndpZHRoID0gJycgKyB0aGlzLnBhcmFtcy5kZXN0X3dpZHRoICsgJ3B4Jztcblx0XHRcdGltZy5zdHlsZS5oZWlnaHQgPSAnJyArIHRoaXMucGFyYW1zLmRlc3RfaGVpZ2h0ICsgJ3B4Jztcblx0XHRcdGltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0ZGl2LmFwcGVuZENoaWxkKGltZyk7XG5cdFx0XHR2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdFx0aW5wdXQuaWQgPSB0aGlzLmNvbnRhaW5lci5pZCsnLWlvc19pbnB1dCc7XG5cdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpO1xuXHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKCdhY2NlcHQnLCAnaW1hZ2UvKicpO1xuXHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKCdjYXB0dXJlJywgJ2NhbWVyYScpO1xuXHRcdFx0XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHR2YXIgcGFyYW1zID0gdGhpcy5wYXJhbXM7XG5cdFx0XHQvLyBhZGQgaW5wdXQgbGlzdGVuZXIgdG8gbG9hZCB0aGUgc2VsZWN0ZWQgaW1hZ2Vcblx0XHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdGlmIChldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCAmJiBldmVudC50YXJnZXQuZmlsZXNbMF0udHlwZS5pbmRleE9mKCdpbWFnZS8nKSA9PSAwKSB7XG5cdFx0XHRcdFx0dmFyIG9ialVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcblxuXHRcdFx0XHRcdC8vIGxvYWQgaW1hZ2Ugd2l0aCBhdXRvIHNjYWxlIGFuZCBjcm9wXG5cdFx0XHRcdFx0dmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG5cdFx0XHRcdFx0aW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdFx0XHRcdFx0XHRjYW52YXMud2lkdGggPSBwYXJhbXMuZGVzdF93aWR0aDtcblx0XHRcdFx0XHRcdGNhbnZhcy5oZWlnaHQgPSBwYXJhbXMuZGVzdF9oZWlnaHQ7XG5cdFx0XHRcdFx0XHR2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cblx0XHRcdFx0XHRcdC8vIGNyb3AgYW5kIHNjYWxlIGltYWdlIGZvciBmaW5hbCBzaXplXG5cdFx0XHRcdFx0XHRyYXRpbyA9IE1hdGgubWluKGltYWdlLndpZHRoIC8gcGFyYW1zLmRlc3Rfd2lkdGgsIGltYWdlLmhlaWdodCAvIHBhcmFtcy5kZXN0X2hlaWdodCk7XG5cdFx0XHRcdFx0XHR2YXIgc3cgPSBwYXJhbXMuZGVzdF93aWR0aCAqIHJhdGlvO1xuXHRcdFx0XHRcdFx0dmFyIHNoID0gcGFyYW1zLmRlc3RfaGVpZ2h0ICogcmF0aW87XG5cdFx0XHRcdFx0XHR2YXIgc3ggPSAoaW1hZ2Uud2lkdGggLSBzdykgLyAyO1xuXHRcdFx0XHRcdFx0dmFyIHN5ID0gKGltYWdlLmhlaWdodCAtIHNoKSAvIDI7XG5cdFx0XHRcdFx0XHRjdHguZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHN3LCBzaCwgMCwgMCwgcGFyYW1zLmRlc3Rfd2lkdGgsIHBhcmFtcy5kZXN0X2hlaWdodCk7XG5cblx0XHRcdFx0XHRcdHZhciBkYXRhVVJMID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuXHRcdFx0XHRcdFx0aW1nLnNyYyA9IGRhdGFVUkw7XG5cdFx0XHRcdFx0XHRkaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ1wiK2RhdGFVUkwrXCInKVwiO1xuXHRcdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyByZWFkIEVYSUYgZGF0YVxuXHRcdFx0XHRcdHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRcdFx0XHRmaWxlUmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHR2YXIgb3JpZW50YXRpb24gPSBzZWxmLmV4aWZPcmllbnRhdGlvbihlLnRhcmdldC5yZXN1bHQpO1xuXHRcdFx0XHRcdFx0aWYgKG9yaWVudGF0aW9uID4gMSkge1xuXHRcdFx0XHRcdFx0XHQvLyBpbWFnZSBuZWVkIHRvIHJvdGF0ZSAoc2VlIGNvbW1lbnRzIG9uIGZpeE9yaWVudGF0aW9uIG1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbilcblx0XHRcdFx0XHRcdFx0Ly8gdHJhbnNmb3JtIGltYWdlIGFuZCBsb2FkIHRvIGltYWdlIG9iamVjdFxuXHRcdFx0XHRcdFx0XHRzZWxmLmZpeE9yaWVudGF0aW9uKG9ialVSTCwgb3JpZW50YXRpb24sIGltYWdlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIGxvYWQgaW1hZ2UgZGF0YSB0byBpbWFnZSBvYmplY3Rcblx0XHRcdFx0XHRcdFx0aW1hZ2Uuc3JjID0gb2JqVVJMO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyBDb252ZXJ0IGltYWdlIGRhdGEgdG8gYmxvYiBmb3JtYXRcblx0XHRcdFx0XHR2YXIgaHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdFx0XHRcdGh0dHAub3BlbihcIkdFVFwiLCBvYmpVUkwsIHRydWUpO1xuXHRcdFx0XHRcdGh0dHAucmVzcG9uc2VUeXBlID0gXCJibG9iXCI7XG5cdFx0XHRcdFx0aHR0cC5vbmxvYWQgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5zdGF0dXMgPT0gMjAwIHx8IHRoaXMuc3RhdHVzID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodGhpcy5yZXNwb25zZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRodHRwLnNlbmQoKTtcblxuXHRcdFx0XHR9XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHRpbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0ZWxlbS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cdFx0XHQvLyBtYWtlIGRpdiBjbGlja2FibGUgZm9yIG9wZW4gY2FtZXJhIGludGVyZmFjZVxuXHRcdFx0ZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0aWYgKHBhcmFtcy51c2VyX2NhbGxiYWNrKSB7XG5cdFx0XHRcdFx0Ly8gZ2xvYmFsIHVzZXJfY2FsbGJhY2sgZGVmaW5lZCAtIGNyZWF0ZSB0aGUgc25hcHNob3Rcblx0XHRcdFx0XHRzZWxmLnNuYXAocGFyYW1zLnVzZXJfY2FsbGJhY2ssIHBhcmFtcy51c2VyX2NhbnZhcyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gbm8gZ2xvYmFsIGNhbGxiYWNrIGRlZmluaWVkIGZvciBzbmFwc2hvdCwgbG9hZCBpbWFnZSBhbmQgd2FpdCBmb3IgZXh0ZXJuYWwgc25hcCBtZXRob2QgY2FsbFxuXHRcdFx0XHRcdGlucHV0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0XHRcdGlucHV0LmZvY3VzKCk7XG5cdFx0XHRcdFx0aW5wdXQuY2xpY2soKTtcblx0XHRcdFx0XHRpbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHRlbGVtLmFwcGVuZENoaWxkKGRpdik7XG5cdFx0XHR0aGlzLmxvYWRlZCA9IHRydWU7XG5cdFx0XHR0aGlzLmxpdmUgPSB0cnVlO1xuXHRcdH1cblx0XHRlbHNlIGlmICh0aGlzLnBhcmFtcy5lbmFibGVfZmxhc2ggJiYgdGhpcy5kZXRlY3RGbGFzaCgpKSB7XG5cdFx0XHQvLyBmbGFzaCBmYWxsYmFja1xuXHRcdFx0d2luZG93LldlYmNhbSA9IFdlYmNhbTsgLy8gbmVlZGVkIGZvciBmbGFzaC10by1qcyBpbnRlcmZhY2Vcblx0XHRcdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGRpdi5pbm5lckhUTUwgPSB0aGlzLmdldFNXRkhUTUwoKTtcblx0XHRcdGVsZW0uYXBwZW5kQ2hpbGQoIGRpdiApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuZGlzcGF0Y2goJ2Vycm9yJywgbmV3IFdlYmNhbUVycm9yKCB0aGlzLnBhcmFtcy5ub0ludGVyZmFjZUZvdW5kVGV4dCApKTtcblx0XHR9XG5cdFx0XG5cdFx0Ly8gc2V0dXAgZmluYWwgY3JvcCBmb3IgbGl2ZSBwcmV2aWV3XG5cdFx0aWYgKHRoaXMucGFyYW1zLmNyb3Bfd2lkdGggJiYgdGhpcy5wYXJhbXMuY3JvcF9oZWlnaHQpIHtcblx0XHRcdHZhciBzY2FsZWRfY3JvcF93aWR0aCA9IE1hdGguZmxvb3IoIHRoaXMucGFyYW1zLmNyb3Bfd2lkdGggKiBzY2FsZVggKTtcblx0XHRcdHZhciBzY2FsZWRfY3JvcF9oZWlnaHQgPSBNYXRoLmZsb29yKCB0aGlzLnBhcmFtcy5jcm9wX2hlaWdodCAqIHNjYWxlWSApO1xuXHRcdFx0XG5cdFx0XHRlbGVtLnN0eWxlLndpZHRoID0gJycgKyBzY2FsZWRfY3JvcF93aWR0aCArICdweCc7XG5cdFx0XHRlbGVtLnN0eWxlLmhlaWdodCA9ICcnICsgc2NhbGVkX2Nyb3BfaGVpZ2h0ICsgJ3B4Jztcblx0XHRcdGVsZW0uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblx0XHRcdFxuXHRcdFx0ZWxlbS5zY3JvbGxMZWZ0ID0gTWF0aC5mbG9vciggKHRoaXMucGFyYW1zLndpZHRoIC8gMikgLSAoc2NhbGVkX2Nyb3Bfd2lkdGggLyAyKSApO1xuXHRcdFx0ZWxlbS5zY3JvbGxUb3AgPSBNYXRoLmZsb29yKCAodGhpcy5wYXJhbXMuaGVpZ2h0IC8gMikgLSAoc2NhbGVkX2Nyb3BfaGVpZ2h0IC8gMikgKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQvLyBubyBjcm9wLCBzZXQgc2l6ZSB0byBkZXNpcmVkXG5cdFx0XHRlbGVtLnN0eWxlLndpZHRoID0gJycgKyB0aGlzLnBhcmFtcy53aWR0aCArICdweCc7XG5cdFx0XHRlbGVtLnN0eWxlLmhlaWdodCA9ICcnICsgdGhpcy5wYXJhbXMuaGVpZ2h0ICsgJ3B4Jztcblx0XHR9XG5cdH0sXG5cdFxuXHRyZXNldDogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gc2h1dGRvd24gY2FtZXJhLCByZXNldCB0byBwb3RlbnRpYWxseSBhdHRhY2ggYWdhaW5cblx0XHRpZiAodGhpcy5wcmV2aWV3X2FjdGl2ZSkgdGhpcy51bmZyZWV6ZSgpO1xuXHRcdFxuXHRcdC8vIGF0dGVtcHQgdG8gZml4IGlzc3VlICM2NFxuXHRcdHRoaXMudW5mbGlwKCk7XG5cdFx0XG5cdFx0aWYgKHRoaXMudXNlck1lZGlhKSB7XG5cdFx0XHRpZiAodGhpcy5zdHJlYW0pIHtcblx0XHRcdFx0aWYgKHRoaXMuc3RyZWFtLmdldFZpZGVvVHJhY2tzKSB7XG5cdFx0XHRcdFx0Ly8gZ2V0IHZpZGVvIHRyYWNrIHRvIGNhbGwgc3RvcCBvbiBpdFxuXHRcdFx0XHRcdHZhciB0cmFja3MgPSB0aGlzLnN0cmVhbS5nZXRWaWRlb1RyYWNrcygpO1xuXHRcdFx0XHRcdGlmICh0cmFja3MgJiYgdHJhY2tzWzBdICYmIHRyYWNrc1swXS5zdG9wKSB0cmFja3NbMF0uc3RvcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKHRoaXMuc3RyZWFtLnN0b3ApIHtcblx0XHRcdFx0XHQvLyBkZXByZWNhdGVkLCBtYXkgYmUgcmVtb3ZlZCBpbiBmdXR1cmVcblx0XHRcdFx0XHR0aGlzLnN0cmVhbS5zdG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGRlbGV0ZSB0aGlzLnN0cmVhbTtcblx0XHRcdGRlbGV0ZSB0aGlzLnZpZGVvO1xuXHRcdH1cblxuXHRcdGlmICgodGhpcy51c2VyTWVkaWEgIT09IHRydWUpICYmIHRoaXMubG9hZGVkICYmICF0aGlzLmlPUykge1xuXHRcdFx0Ly8gY2FsbCBmb3IgdHVybiBvZmYgY2FtZXJhIGluIGZsYXNoXG5cdFx0XHR2YXIgbW92aWUgPSB0aGlzLmdldE1vdmllKCk7XG5cdFx0XHRpZiAobW92aWUgJiYgbW92aWUuX3JlbGVhc2VDYW1lcmEpIG1vdmllLl9yZWxlYXNlQ2FtZXJhKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuY29udGFpbmVyKSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblx0XHRcdGRlbGV0ZSB0aGlzLmNvbnRhaW5lcjtcblx0XHR9XG5cdFxuXHRcdHRoaXMubG9hZGVkID0gZmFsc2U7XG5cdFx0dGhpcy5saXZlID0gZmFsc2U7XG5cdH0sXG5cdFxuXHRzZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIHNldCBvbmUgb3IgbW9yZSBwYXJhbXNcblx0XHQvLyB2YXJpYWJsZSBhcmd1bWVudCBsaXN0OiAxIHBhcmFtID0gaGFzaCwgMiBwYXJhbXMgPSBrZXksIHZhbHVlXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSkge1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1swXSkge1xuXHRcdFx0XHR0aGlzLnBhcmFtc1trZXldID0gYXJndW1lbnRzWzBdW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5wYXJhbXNbIGFyZ3VtZW50c1swXSBdID0gYXJndW1lbnRzWzFdO1xuXHRcdH1cblx0fSxcblx0XG5cdG9uOiBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaykge1xuXHRcdC8vIHNldCBjYWxsYmFjayBob29rXG5cdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgvXm9uL2ksICcnKS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICghdGhpcy5ob29rc1tuYW1lXSkgdGhpcy5ob29rc1tuYW1lXSA9IFtdO1xuXHRcdHRoaXMuaG9va3NbbmFtZV0ucHVzaCggY2FsbGJhY2sgKTtcblx0fSxcblx0XG5cdG9mZjogZnVuY3Rpb24obmFtZSwgY2FsbGJhY2spIHtcblx0XHQvLyByZW1vdmUgY2FsbGJhY2sgaG9va1xuXHRcdG5hbWUgPSBuYW1lLnJlcGxhY2UoL15vbi9pLCAnJykudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAodGhpcy5ob29rc1tuYW1lXSkge1xuXHRcdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHRcdC8vIHJlbW92ZSBvbmUgc2VsZWN0ZWQgY2FsbGJhY2sgZnJvbSBsaXN0XG5cdFx0XHRcdHZhciBpZHggPSB0aGlzLmhvb2tzW25hbWVdLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdFx0XHRpZiAoaWR4ID4gLTEpIHRoaXMuaG9va3NbbmFtZV0uc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Ly8gbm8gY2FsbGJhY2sgc3BlY2lmaWVkLCBzbyBjbGVhciBhbGxcblx0XHRcdFx0dGhpcy5ob29rc1tuYW1lXSA9IFtdO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0XG5cdGRpc3BhdGNoOiBmdW5jdGlvbigpIHtcblx0XHQvLyBmaXJlIGhvb2sgY2FsbGJhY2ssIHBhc3Npbmcgb3B0aW9uYWwgdmFsdWUgdG8gaXRcblx0XHR2YXIgbmFtZSA9IGFyZ3VtZW50c1swXS5yZXBsYWNlKC9eb24vaSwgJycpLnRvTG93ZXJDYXNlKCk7XG5cdFx0dmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXHRcdFxuXHRcdGlmICh0aGlzLmhvb2tzW25hbWVdICYmIHRoaXMuaG9va3NbbmFtZV0ubGVuZ3RoKSB7XG5cdFx0XHRmb3IgKHZhciBpZHggPSAwLCBsZW4gPSB0aGlzLmhvb2tzW25hbWVdLmxlbmd0aDsgaWR4IDwgbGVuOyBpZHgrKykge1xuXHRcdFx0XHR2YXIgaG9vayA9IHRoaXMuaG9va3NbbmFtZV1baWR4XTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmICh0eXBlb2YoaG9vaykgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdC8vIGNhbGxiYWNrIGlzIGZ1bmN0aW9uIHJlZmVyZW5jZSwgY2FsbCBkaXJlY3RseVxuXHRcdFx0XHRcdGhvb2suYXBwbHkodGhpcywgYXJncyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoKHR5cGVvZihob29rKSA9PSAnb2JqZWN0JykgJiYgKGhvb2subGVuZ3RoID09IDIpKSB7XG5cdFx0XHRcdFx0Ly8gY2FsbGJhY2sgaXMgUEhQLXN0eWxlIG9iamVjdCBpbnN0YW5jZSBtZXRob2Rcblx0XHRcdFx0XHRob29rWzBdW2hvb2tbMV1dLmFwcGx5KGhvb2tbMF0sIGFyZ3MpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKHdpbmRvd1tob29rXSkge1xuXHRcdFx0XHRcdC8vIGNhbGxiYWNrIGlzIGdsb2JhbCBmdW5jdGlvbiBuYW1lXG5cdFx0XHRcdFx0d2luZG93WyBob29rIF0uYXBwbHkod2luZG93LCBhcmdzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSAvLyBsb29wXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAobmFtZSA9PSAnZXJyb3InKSB7XG5cdFx0XHR2YXIgbWVzc2FnZTtcblx0XHRcdGlmICgoYXJnc1swXSBpbnN0YW5jZW9mIEZsYXNoRXJyb3IpIHx8IChhcmdzWzBdIGluc3RhbmNlb2YgV2ViY2FtRXJyb3IpKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBhcmdzWzBdLm1lc3NhZ2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZXNzYWdlID0gXCJDb3VsZCBub3QgYWNjZXNzIHdlYmNhbTogXCIgKyBhcmdzWzBdLm5hbWUgKyBcIjogXCIgKyBcblx0XHRcdFx0XHRhcmdzWzBdLm1lc3NhZ2UgKyBcIiBcIiArIGFyZ3NbMF0udG9TdHJpbmcoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZGVmYXVsdCBlcnJvciBoYW5kbGVyIGlmIG5vIGN1c3RvbSBvbmUgc3BlY2lmaWVkXG5cdFx0XHRhbGVydChcIldlYmNhbS5qcyBFcnJvcjogXCIgKyBtZXNzYWdlKTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIGZhbHNlOyAvLyBubyBob29rIGRlZmluZWRcblx0fSxcblxuXHRzZXRTV0ZMb2NhdGlvbjogZnVuY3Rpb24odmFsdWUpIHtcblx0XHQvLyBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eS5cblx0XHR0aGlzLnNldCgnc3dmVVJMJywgdmFsdWUpO1xuXHR9LFxuXHRcblx0ZGV0ZWN0Rmxhc2g6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIHJldHVybiB0cnVlIGlmIGJyb3dzZXIgc3VwcG9ydHMgZmxhc2gsIGZhbHNlIG90aGVyd2lzZVxuXHRcdC8vIENvZGUgc25pcHBldCBib3Jyb3dlZCBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vc3dmb2JqZWN0L3N3Zm9iamVjdFxuXHRcdHZhciBTSE9DS1dBVkVfRkxBU0ggPSBcIlNob2Nrd2F2ZSBGbGFzaFwiLFxuXHRcdFx0U0hPQ0tXQVZFX0ZMQVNIX0FYID0gXCJTaG9ja3dhdmVGbGFzaC5TaG9ja3dhdmVGbGFzaFwiLFxuICAgICAgICBcdEZMQVNIX01JTUVfVFlQRSA9IFwiYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2hcIixcbiAgICAgICAgXHR3aW4gPSB3aW5kb3csXG4gICAgICAgIFx0bmF2ID0gbmF2aWdhdG9yLFxuICAgICAgICBcdGhhc0ZsYXNoID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAodHlwZW9mIG5hdi5wbHVnaW5zICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBuYXYucGx1Z2luc1tTSE9DS1dBVkVfRkxBU0hdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIFx0dmFyIGRlc2MgPSBuYXYucGx1Z2luc1tTSE9DS1dBVkVfRkxBU0hdLmRlc2NyaXB0aW9uO1xuICAgICAgICBcdGlmIChkZXNjICYmICh0eXBlb2YgbmF2Lm1pbWVUeXBlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBuYXYubWltZVR5cGVzW0ZMQVNIX01JTUVfVFlQRV0gJiYgbmF2Lm1pbWVUeXBlc1tGTEFTSF9NSU1FX1RZUEVdLmVuYWJsZWRQbHVnaW4pKSB7XG4gICAgICAgIFx0XHRoYXNGbGFzaCA9IHRydWU7XG4gICAgICAgIFx0fVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB3aW4uQWN0aXZlWE9iamVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBcdHRyeSB7XG4gICAgICAgIFx0XHR2YXIgYXggPSBuZXcgQWN0aXZlWE9iamVjdChTSE9DS1dBVkVfRkxBU0hfQVgpO1xuICAgICAgICBcdFx0aWYgKGF4KSB7XG4gICAgICAgIFx0XHRcdHZhciB2ZXIgPSBheC5HZXRWYXJpYWJsZShcIiR2ZXJzaW9uXCIpO1xuICAgICAgICBcdFx0XHRpZiAodmVyKSBoYXNGbGFzaCA9IHRydWU7XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0fVxuICAgICAgICBcdGNhdGNoIChlKSB7O31cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGhhc0ZsYXNoO1xuXHR9LFxuXHRcblx0Z2V0U1dGSFRNTDogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gUmV0dXJuIEhUTUwgZm9yIGVtYmVkZGluZyBmbGFzaCBiYXNlZCB3ZWJjYW0gY2FwdHVyZSBtb3ZpZVx0XHRcblx0XHR2YXIgaHRtbCA9ICcnLFxuXHRcdFx0c3dmVVJMID0gdGhpcy5wYXJhbXMuc3dmVVJMO1xuXHRcdFxuXHRcdC8vIG1ha2Ugc3VyZSB3ZSBhcmVuJ3QgcnVubmluZyBsb2NhbGx5IChmbGFzaCBkb2Vzbid0IHdvcmspXG5cdFx0aWYgKGxvY2F0aW9uLnByb3RvY29sLm1hdGNoKC9maWxlLykpIHtcblx0XHRcdHRoaXMuZGlzcGF0Y2goJ2Vycm9yJywgbmV3IEZsYXNoRXJyb3IoXCJGbGFzaCBkb2VzIG5vdCB3b3JrIGZyb20gbG9jYWwgZGlzay4gIFBsZWFzZSBydW4gZnJvbSBhIHdlYiBzZXJ2ZXIuXCIpKTtcblx0XHRcdHJldHVybiAnPGgzIHN0eWxlPVwiY29sb3I6cmVkXCI+RVJST1I6IHRoZSBXZWJjYW0uanMgRmxhc2ggZmFsbGJhY2sgZG9lcyBub3Qgd29yayBmcm9tIGxvY2FsIGRpc2suICBQbGVhc2UgcnVuIGl0IGZyb20gYSB3ZWIgc2VydmVyLjwvaDM+Jztcblx0XHR9XG5cdFx0XG5cdFx0Ly8gbWFrZSBzdXJlIHdlIGhhdmUgZmxhc2hcblx0XHRpZiAoIXRoaXMuZGV0ZWN0Rmxhc2goKSkge1xuXHRcdFx0dGhpcy5kaXNwYXRjaCgnZXJyb3InLCBuZXcgRmxhc2hFcnJvcihcIkFkb2JlIEZsYXNoIFBsYXllciBub3QgZm91bmQuICBQbGVhc2UgaW5zdGFsbCBmcm9tIGdldC5hZG9iZS5jb20vZmxhc2hwbGF5ZXIgYW5kIHRyeSBhZ2Fpbi5cIikpO1xuXHRcdFx0cmV0dXJuICc8aDMgc3R5bGU9XCJjb2xvcjpyZWRcIj4nICsgdGhpcy5wYXJhbXMuZmxhc2hOb3REZXRlY3RlZFRleHQgKyAnPC9oMz4nO1xuXHRcdH1cblx0XHRcblx0XHQvLyBzZXQgZGVmYXVsdCBzd2ZVUkwgaWYgbm90IGV4cGxpY2l0bHkgc2V0XG5cdFx0aWYgKCFzd2ZVUkwpIHtcblx0XHRcdC8vIGZpbmQgb3VyIHNjcmlwdCB0YWcsIGFuZCB1c2UgdGhhdCBiYXNlIFVSTFxuXHRcdFx0dmFyIGJhc2VfdXJsID0gJyc7XG5cdFx0XHR2YXIgc2NwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG5cdFx0XHRmb3IgKHZhciBpZHggPSAwLCBsZW4gPSBzY3B0cy5sZW5ndGg7IGlkeCA8IGxlbjsgaWR4KyspIHtcblx0XHRcdFx0dmFyIHNyYyA9IHNjcHRzW2lkeF0uZ2V0QXR0cmlidXRlKCdzcmMnKTtcblx0XHRcdFx0aWYgKHNyYyAmJiBzcmMubWF0Y2goL1xcL3dlYmNhbShcXC5taW4pP1xcLmpzLykpIHtcblx0XHRcdFx0XHRiYXNlX3VybCA9IHNyYy5yZXBsYWNlKC9cXC93ZWJjYW0oXFwubWluKT9cXC5qcy4qJC8sICcnKTtcblx0XHRcdFx0XHRpZHggPSBsZW47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChiYXNlX3VybCkgc3dmVVJMID0gYmFzZV91cmwgKyAnL3dlYmNhbS5zd2YnO1xuXHRcdFx0ZWxzZSBzd2ZVUkwgPSAnd2ViY2FtLnN3Zic7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIGlmIHRoaXMgaXMgdGhlIHVzZXIncyBmaXJzdCB2aXNpdCwgc2V0IGZsYXNodmFyIHNvIGZsYXNoIHByaXZhY3kgc2V0dGluZ3MgcGFuZWwgaXMgc2hvd24gZmlyc3Rcblx0XHRpZiAod2luZG93LmxvY2FsU3RvcmFnZSAmJiAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Zpc2l0ZWQnKSkge1xuXHRcdFx0dGhpcy5wYXJhbXMubmV3X3VzZXIgPSAxO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Zpc2l0ZWQnLCAxKTtcblx0XHR9XG5cdFx0XG5cdFx0Ly8gY29uc3RydWN0IGZsYXNodmFycyBzdHJpbmdcblx0XHR2YXIgZmxhc2h2YXJzID0gJyc7XG5cdFx0Zm9yICh2YXIga2V5IGluIHRoaXMucGFyYW1zKSB7XG5cdFx0XHRpZiAoZmxhc2h2YXJzKSBmbGFzaHZhcnMgKz0gJyYnO1xuXHRcdFx0Zmxhc2h2YXJzICs9IGtleSArICc9JyArIGVzY2FwZSh0aGlzLnBhcmFtc1trZXldKTtcblx0XHR9XG5cdFx0XG5cdFx0Ly8gY29uc3RydWN0IG9iamVjdC9lbWJlZCB0YWdcblx0XHRodG1sICs9ICc8b2JqZWN0IGNsYXNzaWQ9XCJjbHNpZDpkMjdjZGI2ZS1hZTZkLTExY2YtOTZiOC00NDQ1NTM1NDAwMDBcIiB0eXBlPVwiYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2hcIiBjb2RlYmFzZT1cIicrdGhpcy5wcm90b2NvbCsnOi8vZG93bmxvYWQubWFjcm9tZWRpYS5jb20vcHViL3Nob2Nrd2F2ZS9jYWJzL2ZsYXNoL3N3Zmxhc2guY2FiI3ZlcnNpb249OSwwLDAsMFwiIHdpZHRoPVwiJyt0aGlzLnBhcmFtcy53aWR0aCsnXCIgaGVpZ2h0PVwiJyt0aGlzLnBhcmFtcy5oZWlnaHQrJ1wiIGlkPVwid2ViY2FtX21vdmllX29ialwiIGFsaWduPVwibWlkZGxlXCI+PHBhcmFtIG5hbWU9XCJ3bW9kZVwiIHZhbHVlPVwib3BhcXVlXCI+PC9wYXJhbT48cGFyYW0gbmFtZT1cImFsbG93U2NyaXB0QWNjZXNzXCIgdmFsdWU9XCJhbHdheXNcIiA+PC9wYXJhbT48cGFyYW0gbmFtZT1cImFsbG93RnVsbFNjcmVlblwiIHZhbHVlPVwiZmFsc2VcIiA+PC9wYXJhbT48cGFyYW0gbmFtZT1cIm1vdmllXCIgdmFsdWU9XCInK3N3ZlVSTCsnXCIgPjwvcGFyYW0+PHBhcmFtIG5hbWU9XCJsb29wXCIgdmFsdWU9XCJmYWxzZVwiID48L3BhcmFtPjxwYXJhbSBuYW1lPVwibWVudVwiIHZhbHVlPVwiZmFsc2VcIiA+PC9wYXJhbT48cGFyYW0gbmFtZT1cInF1YWxpdHlcIiB2YWx1ZT1cImJlc3RcIiA+PC9wYXJhbT48cGFyYW0gbmFtZT1cImJnY29sb3JcIiB2YWx1ZT1cIiNmZmZmZmZcIiA+PC9wYXJhbT48cGFyYW0gbmFtZT1cImZsYXNodmFyc1wiIHZhbHVlPVwiJytmbGFzaHZhcnMrJ1wiPjwvcGFyYW0+PGVtYmVkIGlkPVwid2ViY2FtX21vdmllX2VtYmVkXCIgc3JjPVwiJytzd2ZVUkwrJ1wiIHdtb2RlPVwib3BhcXVlXCIgbG9vcD1cImZhbHNlXCIgbWVudT1cImZhbHNlXCIgcXVhbGl0eT1cImJlc3RcIiBiZ2NvbG9yPVwiI2ZmZmZmZlwiIHdpZHRoPVwiJyt0aGlzLnBhcmFtcy53aWR0aCsnXCIgaGVpZ2h0PVwiJyt0aGlzLnBhcmFtcy5oZWlnaHQrJ1wiIG5hbWU9XCJ3ZWJjYW1fbW92aWVfZW1iZWRcIiBhbGlnbj1cIm1pZGRsZVwiIGFsbG93U2NyaXB0QWNjZXNzPVwiYWx3YXlzXCIgYWxsb3dGdWxsU2NyZWVuPVwiZmFsc2VcIiB0eXBlPVwiYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2hcIiBwbHVnaW5zcGFnZT1cImh0dHA6Ly93d3cubWFjcm9tZWRpYS5jb20vZ28vZ2V0Zmxhc2hwbGF5ZXJcIiBmbGFzaHZhcnM9XCInK2ZsYXNodmFycysnXCI+PC9lbWJlZD48L29iamVjdD4nO1xuXHRcdFxuXHRcdHJldHVybiBodG1sO1xuXHR9LFxuXHRcblx0Z2V0TW92aWU6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIGdldCByZWZlcmVuY2UgdG8gbW92aWUgb2JqZWN0L2VtYmVkIGluIERPTVxuXHRcdGlmICghdGhpcy5sb2FkZWQpIHJldHVybiB0aGlzLmRpc3BhdGNoKCdlcnJvcicsIG5ldyBGbGFzaEVycm9yKFwiRmxhc2ggTW92aWUgaXMgbm90IGxvYWRlZCB5ZXRcIikpO1xuXHRcdHZhciBtb3ZpZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJjYW1fbW92aWVfb2JqJyk7XG5cdFx0aWYgKCFtb3ZpZSB8fCAhbW92aWUuX3NuYXApIG1vdmllID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYmNhbV9tb3ZpZV9lbWJlZCcpO1xuXHRcdGlmICghbW92aWUpIHRoaXMuZGlzcGF0Y2goJ2Vycm9yJywgbmV3IEZsYXNoRXJyb3IoXCJDYW5ub3QgbG9jYXRlIEZsYXNoIG1vdmllIGluIERPTVwiKSk7XG5cdFx0cmV0dXJuIG1vdmllO1xuXHR9LFxuXHRcblx0ZnJlZXplOiBmdW5jdGlvbigpIHtcblx0XHQvLyBzaG93IHByZXZpZXcsIGZyZWV6ZSBjYW1lcmFcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dmFyIHBhcmFtcyA9IHRoaXMucGFyYW1zO1xuXHRcdFxuXHRcdC8vIGtpbGwgcHJldmlldyBpZiBhbHJlYWR5IGFjdGl2ZVxuXHRcdGlmICh0aGlzLnByZXZpZXdfYWN0aXZlKSB0aGlzLnVuZnJlZXplKCk7XG5cdFx0XG5cdFx0Ly8gZGV0ZXJtaW5lIHNjYWxlIGZhY3RvclxuXHRcdHZhciBzY2FsZVggPSB0aGlzLnBhcmFtcy53aWR0aCAvIHRoaXMucGFyYW1zLmRlc3Rfd2lkdGg7XG5cdFx0dmFyIHNjYWxlWSA9IHRoaXMucGFyYW1zLmhlaWdodCAvIHRoaXMucGFyYW1zLmRlc3RfaGVpZ2h0O1xuXHRcdFxuXHRcdC8vIG11c3QgdW5mbGlwIGNvbnRhaW5lciBhcyBwcmV2aWV3IGNhbnZhcyB3aWxsIGJlIHByZS1mbGlwcGVkXG5cdFx0dGhpcy51bmZsaXAoKTtcblx0XHRcblx0XHQvLyBjYWxjIGZpbmFsIHNpemUgb2YgaW1hZ2Vcblx0XHR2YXIgZmluYWxfd2lkdGggPSBwYXJhbXMuY3JvcF93aWR0aCB8fCBwYXJhbXMuZGVzdF93aWR0aDtcblx0XHR2YXIgZmluYWxfaGVpZ2h0ID0gcGFyYW1zLmNyb3BfaGVpZ2h0IHx8IHBhcmFtcy5kZXN0X2hlaWdodDtcblx0XHRcblx0XHQvLyBjcmVhdGUgY2FudmFzIGZvciBob2xkaW5nIHByZXZpZXdcblx0XHR2YXIgcHJldmlld19jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0XHRwcmV2aWV3X2NhbnZhcy53aWR0aCA9IGZpbmFsX3dpZHRoO1xuXHRcdHByZXZpZXdfY2FudmFzLmhlaWdodCA9IGZpbmFsX2hlaWdodDtcblx0XHR2YXIgcHJldmlld19jb250ZXh0ID0gcHJldmlld19jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblx0XHRcblx0XHQvLyBzYXZlIGZvciBsYXRlciB1c2Vcblx0XHR0aGlzLnByZXZpZXdfY2FudmFzID0gcHJldmlld19jYW52YXM7XG5cdFx0dGhpcy5wcmV2aWV3X2NvbnRleHQgPSBwcmV2aWV3X2NvbnRleHQ7XG5cdFx0XG5cdFx0Ly8gc2NhbGUgZm9yIHByZXZpZXcgc2l6ZVxuXHRcdGlmICgoc2NhbGVYICE9IDEuMCkgfHwgKHNjYWxlWSAhPSAxLjApKSB7XG5cdFx0XHRwcmV2aWV3X2NhbnZhcy5zdHlsZS53ZWJraXRUcmFuc2Zvcm1PcmlnaW4gPSAnMHB4IDBweCc7XG5cdFx0XHRwcmV2aWV3X2NhbnZhcy5zdHlsZS5tb3pUcmFuc2Zvcm1PcmlnaW4gPSAnMHB4IDBweCc7XG5cdFx0XHRwcmV2aWV3X2NhbnZhcy5zdHlsZS5tc1RyYW5zZm9ybU9yaWdpbiA9ICcwcHggMHB4Jztcblx0XHRcdHByZXZpZXdfY2FudmFzLnN0eWxlLm9UcmFuc2Zvcm1PcmlnaW4gPSAnMHB4IDBweCc7XG5cdFx0XHRwcmV2aWV3X2NhbnZhcy5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAnMHB4IDBweCc7XG5cdFx0XHRwcmV2aWV3X2NhbnZhcy5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnc2NhbGVYKCcrc2NhbGVYKycpIHNjYWxlWSgnK3NjYWxlWSsnKSc7XG5cdFx0XHRwcmV2aWV3X2NhbnZhcy5zdHlsZS5tb3pUcmFuc2Zvcm0gPSAnc2NhbGVYKCcrc2NhbGVYKycpIHNjYWxlWSgnK3NjYWxlWSsnKSc7XG5cdFx0XHRwcmV2aWV3X2NhbnZhcy5zdHlsZS5tc1RyYW5zZm9ybSA9ICdzY2FsZVgoJytzY2FsZVgrJykgc2NhbGVZKCcrc2NhbGVZKycpJztcblx0XHRcdHByZXZpZXdfY2FudmFzLnN0eWxlLm9UcmFuc2Zvcm0gPSAnc2NhbGVYKCcrc2NhbGVYKycpIHNjYWxlWSgnK3NjYWxlWSsnKSc7XG5cdFx0XHRwcmV2aWV3X2NhbnZhcy5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGVYKCcrc2NhbGVYKycpIHNjYWxlWSgnK3NjYWxlWSsnKSc7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIHRha2Ugc25hcHNob3QsIGJ1dCBmaXJlIG91ciBvd24gY2FsbGJhY2tcblx0XHR0aGlzLnNuYXAoIGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gYWRkIHByZXZpZXcgaW1hZ2UgdG8gZG9tLCBhZGp1c3QgZm9yIGNyb3Bcblx0XHRcdHByZXZpZXdfY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcblx0XHRcdHByZXZpZXdfY2FudmFzLnN0eWxlLmxlZnQgPSAnJyArIHNlbGYuY29udGFpbmVyLnNjcm9sbExlZnQgKyAncHgnO1xuXHRcdFx0cHJldmlld19jYW52YXMuc3R5bGUudG9wID0gJycgKyBzZWxmLmNvbnRhaW5lci5zY3JvbGxUb3AgKyAncHgnO1xuXHRcdFx0XG5cdFx0XHRzZWxmLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUoIHByZXZpZXdfY2FudmFzLCBzZWxmLnBlZyApO1xuXHRcdFx0c2VsZi5jb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblx0XHRcdFxuXHRcdFx0Ly8gc2V0IGZsYWcgZm9yIHVzZXIgY2FwdHVyZSAodXNlIHByZXZpZXcpXG5cdFx0XHRzZWxmLnByZXZpZXdfYWN0aXZlID0gdHJ1ZTtcblx0XHRcdFxuXHRcdH0sIHByZXZpZXdfY2FudmFzICk7XG5cdH0sXG5cdFxuXHR1bmZyZWV6ZTogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gY2FuY2VsIHByZXZpZXcgYW5kIHJlc3VtZSBsaXZlIHZpZGVvIGZlZWRcblx0XHRpZiAodGhpcy5wcmV2aWV3X2FjdGl2ZSkge1xuXHRcdFx0Ly8gcmVtb3ZlIHByZXZpZXcgY2FudmFzXG5cdFx0XHR0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCggdGhpcy5wcmV2aWV3X2NhbnZhcyApO1xuXHRcdFx0ZGVsZXRlIHRoaXMucHJldmlld19jb250ZXh0O1xuXHRcdFx0ZGVsZXRlIHRoaXMucHJldmlld19jYW52YXM7XG5cdFx0XHRcblx0XHRcdC8vIHVuZmxhZ1xuXHRcdFx0dGhpcy5wcmV2aWV3X2FjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XG5cdFx0XHQvLyByZS1mbGlwIGlmIHdlIHVuZmxpcHBlZCBiZWZvcmVcblx0XHRcdHRoaXMuZmxpcCgpO1xuXHRcdH1cblx0fSxcblx0XG5cdGZsaXA6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIGZsaXAgY29udGFpbmVyIGhvcml6IChtaXJyb3IgbW9kZSkgaWYgZGVzaXJlZFxuXHRcdGlmICh0aGlzLnBhcmFtcy5mbGlwX2hvcml6KSB7XG5cdFx0XHR2YXIgc3R5ID0gdGhpcy5jb250YWluZXIuc3R5bGU7XG5cdFx0XHRzdHkud2Via2l0VHJhbnNmb3JtID0gJ3NjYWxlWCgtMSknO1xuXHRcdFx0c3R5Lm1velRyYW5zZm9ybSA9ICdzY2FsZVgoLTEpJztcblx0XHRcdHN0eS5tc1RyYW5zZm9ybSA9ICdzY2FsZVgoLTEpJztcblx0XHRcdHN0eS5vVHJhbnNmb3JtID0gJ3NjYWxlWCgtMSknO1xuXHRcdFx0c3R5LnRyYW5zZm9ybSA9ICdzY2FsZVgoLTEpJztcblx0XHRcdHN0eS5maWx0ZXIgPSAnRmxpcEgnO1xuXHRcdFx0c3R5Lm1zRmlsdGVyID0gJ0ZsaXBIJztcblx0XHR9XG5cdH0sXG5cdFxuXHR1bmZsaXA6IGZ1bmN0aW9uKCkge1xuXHRcdC8vIHVuZmxpcCBjb250YWluZXIgaG9yaXogKG1pcnJvciBtb2RlKSBpZiBkZXNpcmVkXG5cdFx0aWYgKHRoaXMucGFyYW1zLmZsaXBfaG9yaXopIHtcblx0XHRcdHZhciBzdHkgPSB0aGlzLmNvbnRhaW5lci5zdHlsZTtcblx0XHRcdHN0eS53ZWJraXRUcmFuc2Zvcm0gPSAnc2NhbGVYKDEpJztcblx0XHRcdHN0eS5tb3pUcmFuc2Zvcm0gPSAnc2NhbGVYKDEpJztcblx0XHRcdHN0eS5tc1RyYW5zZm9ybSA9ICdzY2FsZVgoMSknO1xuXHRcdFx0c3R5Lm9UcmFuc2Zvcm0gPSAnc2NhbGVYKDEpJztcblx0XHRcdHN0eS50cmFuc2Zvcm0gPSAnc2NhbGVYKDEpJztcblx0XHRcdHN0eS5maWx0ZXIgPSAnJztcblx0XHRcdHN0eS5tc0ZpbHRlciA9ICcnO1xuXHRcdH1cblx0fSxcblx0XG5cdHNhdmVQcmV2aWV3OiBmdW5jdGlvbih1c2VyX2NhbGxiYWNrLCB1c2VyX2NhbnZhcykge1xuXHRcdC8vIHNhdmUgcHJldmlldyBmcmVlemUgYW5kIGZpcmUgdXNlciBjYWxsYmFja1xuXHRcdHZhciBwYXJhbXMgPSB0aGlzLnBhcmFtcztcblx0XHR2YXIgY2FudmFzID0gdGhpcy5wcmV2aWV3X2NhbnZhcztcblx0XHR2YXIgY29udGV4dCA9IHRoaXMucHJldmlld19jb250ZXh0O1xuXHRcdFxuXHRcdC8vIHJlbmRlciB0byB1c2VyIGNhbnZhcyBpZiBkZXNpcmVkXG5cdFx0aWYgKHVzZXJfY2FudmFzKSB7XG5cdFx0XHR2YXIgdXNlcl9jb250ZXh0ID0gdXNlcl9jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblx0XHRcdHVzZXJfY29udGV4dC5kcmF3SW1hZ2UoIGNhbnZhcywgMCwgMCApO1xuXHRcdH1cblx0XHRcblx0XHQvLyBmaXJlIHVzZXIgY2FsbGJhY2sgaWYgZGVzaXJlZFxuXHRcdHVzZXJfY2FsbGJhY2soXG5cdFx0XHR1c2VyX2NhbnZhcyA/IG51bGwgOiBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS8nICsgcGFyYW1zLmltYWdlX2Zvcm1hdCwgcGFyYW1zLmpwZWdfcXVhbGl0eSAvIDEwMCApLFxuXHRcdFx0Y2FudmFzLFxuXHRcdFx0Y29udGV4dFxuXHRcdCk7XG5cdFx0XG5cdFx0Ly8gcmVtb3ZlIHByZXZpZXdcblx0XHRpZiAodGhpcy5wYXJhbXMudW5mcmVlemVfc25hcCkgdGhpcy51bmZyZWV6ZSgpO1xuXHR9LFxuXHRcblx0c25hcDogZnVuY3Rpb24odXNlcl9jYWxsYmFjaywgdXNlcl9jYW52YXMpIHtcblx0XHQvLyB1c2UgZ2xvYmFsIGNhbGxiYWNrIGFuZCBjYW52YXMgaWYgbm90IGRlZmluZWQgYXMgcGFyYW1ldGVyXG5cdFx0aWYgKCF1c2VyX2NhbGxiYWNrKSB1c2VyX2NhbGxiYWNrID0gdGhpcy5wYXJhbXMudXNlcl9jYWxsYmFjaztcblx0XHRpZiAoIXVzZXJfY2FudmFzKSB1c2VyX2NhbnZhcyA9IHRoaXMucGFyYW1zLnVzZXJfY2FudmFzO1xuXHRcdFxuXHRcdC8vIHRha2Ugc25hcHNob3QgYW5kIHJldHVybiBpbWFnZSBkYXRhIHVyaVxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR2YXIgcGFyYW1zID0gdGhpcy5wYXJhbXM7XG5cdFx0XG5cdFx0aWYgKCF0aGlzLmxvYWRlZCkgcmV0dXJuIHRoaXMuZGlzcGF0Y2goJ2Vycm9yJywgbmV3IFdlYmNhbUVycm9yKFwiV2ViY2FtIGlzIG5vdCBsb2FkZWQgeWV0XCIpKTtcblx0XHQvLyBpZiAoIXRoaXMubGl2ZSkgcmV0dXJuIHRoaXMuZGlzcGF0Y2goJ2Vycm9yJywgbmV3IFdlYmNhbUVycm9yKFwiV2ViY2FtIGlzIG5vdCBsaXZlIHlldFwiKSk7XG5cdFx0aWYgKCF1c2VyX2NhbGxiYWNrKSByZXR1cm4gdGhpcy5kaXNwYXRjaCgnZXJyb3InLCBuZXcgV2ViY2FtRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBhIGNhbGxiYWNrIGZ1bmN0aW9uIG9yIGNhbnZhcyB0byBzbmFwKClcIikpO1xuXHRcdFxuXHRcdC8vIGlmIHdlIGhhdmUgYW4gYWN0aXZlIHByZXZpZXcgZnJlZXplLCB1c2UgdGhhdFxuXHRcdGlmICh0aGlzLnByZXZpZXdfYWN0aXZlKSB7XG5cdFx0XHR0aGlzLnNhdmVQcmV2aWV3KCB1c2VyX2NhbGxiYWNrLCB1c2VyX2NhbnZhcyApO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIGNyZWF0ZSBvZmZzY3JlZW4gY2FudmFzIGVsZW1lbnQgdG8gaG9sZCBwaXhlbHNcblx0XHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdFx0Y2FudmFzLndpZHRoID0gdGhpcy5wYXJhbXMuZGVzdF93aWR0aDtcblx0XHRjYW52YXMuaGVpZ2h0ID0gdGhpcy5wYXJhbXMuZGVzdF9oZWlnaHQ7XG5cdFx0dmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblx0XHRcblx0XHQvLyBmbGlwIGNhbnZhcyBob3Jpem9udGFsbHkgaWYgZGVzaXJlZFxuXHRcdGlmICh0aGlzLnBhcmFtcy5mbGlwX2hvcml6KSB7XG5cdFx0XHRjb250ZXh0LnRyYW5zbGF0ZSggcGFyYW1zLmRlc3Rfd2lkdGgsIDAgKTtcblx0XHRcdGNvbnRleHQuc2NhbGUoIC0xLCAxICk7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIGNyZWF0ZSBpbmxpbmUgZnVuY3Rpb24sIGNhbGxlZCBhZnRlciBpbWFnZSBsb2FkIChmbGFzaCkgb3IgaW1tZWRpYXRlbHkgKG5hdGl2ZSlcblx0XHR2YXIgZnVuYyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gcmVuZGVyIGltYWdlIGlmIG5lZWRlZCAoZmxhc2gpXG5cdFx0XHRpZiAodGhpcy5zcmMgJiYgdGhpcy53aWR0aCAmJiB0aGlzLmhlaWdodCkge1xuXHRcdFx0XHRjb250ZXh0LmRyYXdJbWFnZSh0aGlzLCAwLCAwLCBwYXJhbXMuZGVzdF93aWR0aCwgcGFyYW1zLmRlc3RfaGVpZ2h0KTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gY3JvcCBpZiBkZXNpcmVkXG5cdFx0XHRpZiAocGFyYW1zLmNyb3Bfd2lkdGggJiYgcGFyYW1zLmNyb3BfaGVpZ2h0KSB7XG5cdFx0XHRcdHZhciBjcm9wX2NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRcdFx0XHRjcm9wX2NhbnZhcy53aWR0aCA9IHBhcmFtcy5jcm9wX3dpZHRoO1xuXHRcdFx0XHRjcm9wX2NhbnZhcy5oZWlnaHQgPSBwYXJhbXMuY3JvcF9oZWlnaHQ7XG5cdFx0XHRcdHZhciBjcm9wX2NvbnRleHQgPSBjcm9wX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXHRcdFx0XHRcblx0XHRcdFx0Y3JvcF9jb250ZXh0LmRyYXdJbWFnZSggY2FudmFzLCBcblx0XHRcdFx0XHRNYXRoLmZsb29yKCAocGFyYW1zLmRlc3Rfd2lkdGggLyAyKSAtIChwYXJhbXMuY3JvcF93aWR0aCAvIDIpICksXG5cdFx0XHRcdFx0TWF0aC5mbG9vciggKHBhcmFtcy5kZXN0X2hlaWdodCAvIDIpIC0gKHBhcmFtcy5jcm9wX2hlaWdodCAvIDIpICksXG5cdFx0XHRcdFx0cGFyYW1zLmNyb3Bfd2lkdGgsXG5cdFx0XHRcdFx0cGFyYW1zLmNyb3BfaGVpZ2h0LFxuXHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRwYXJhbXMuY3JvcF93aWR0aCxcblx0XHRcdFx0XHRwYXJhbXMuY3JvcF9oZWlnaHRcblx0XHRcdFx0KTtcblx0XHRcdFx0XG5cdFx0XHRcdC8vIHN3YXAgY2FudmFzZXNcblx0XHRcdFx0Y29udGV4dCA9IGNyb3BfY29udGV4dDtcblx0XHRcdFx0Y2FudmFzID0gY3JvcF9jYW52YXM7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIHJlbmRlciB0byB1c2VyIGNhbnZhcyBpZiBkZXNpcmVkXG5cdFx0XHRpZiAodXNlcl9jYW52YXMpIHtcblx0XHRcdFx0dmFyIHVzZXJfY29udGV4dCA9IHVzZXJfY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cdFx0XHRcdHVzZXJfY29udGV4dC5kcmF3SW1hZ2UoIGNhbnZhcywgMCwgMCApO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBmaXJlIHVzZXIgY2FsbGJhY2sgaWYgZGVzaXJlZFxuXHRcdFx0dXNlcl9jYWxsYmFjayhcblx0XHRcdFx0dXNlcl9jYW52YXMgPyBudWxsIDogY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvJyArIHBhcmFtcy5pbWFnZV9mb3JtYXQsIHBhcmFtcy5qcGVnX3F1YWxpdHkgLyAxMDAgKSxcblx0XHRcdFx0Y2FudmFzLFxuXHRcdFx0XHRjb250ZXh0XG5cdFx0XHQpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gZ3JhYiBpbWFnZSBmcmFtZSBmcm9tIHVzZXJNZWRpYSBvciBmbGFzaCBtb3ZpZVxuXHRcdGlmICh0aGlzLnVzZXJNZWRpYSkge1xuXHRcdFx0Ly8gbmF0aXZlIGltcGxlbWVudGF0aW9uXG5cdFx0XHRjb250ZXh0LmRyYXdJbWFnZSh0aGlzLnZpZGVvLCAwLCAwLCB0aGlzLnBhcmFtcy5kZXN0X3dpZHRoLCB0aGlzLnBhcmFtcy5kZXN0X2hlaWdodCk7XG5cdFx0XHRcblx0XHRcdC8vIGZpcmUgY2FsbGJhY2sgcmlnaHQgYXdheVxuXHRcdFx0ZnVuYygpO1xuXHRcdH1cblx0XHRlbHNlIGlmICh0aGlzLmlPUykge1xuXHRcdFx0dmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVyLmlkKyctaW9zX2RpdicpO1xuXHRcdFx0dmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGFpbmVyLmlkKyctaW9zX2ltZycpO1xuXHRcdFx0dmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXIuaWQrJy1pb3NfaW5wdXQnKTtcblx0XHRcdC8vIGZ1bmN0aW9uIGZvciBoYW5kbGUgc25hcHNob3QgZXZlbnQgKGNhbGwgdXNlcl9jYWxsYmFjayBhbmQgcmVzZXQgdGhlIGludGVyZmFjZSlcblx0XHRcdGlGdW5jID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0ZnVuYy5jYWxsKGltZyk7XG5cdFx0XHRcdGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgaUZ1bmMpO1xuXHRcdFx0XHRkaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuXHRcdFx0XHRpbWcucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcblx0XHRcdFx0aW5wdXQudmFsdWUgPSBudWxsO1xuXHRcdFx0fTtcblx0XHRcdGlmICghaW5wdXQudmFsdWUpIHtcblx0XHRcdFx0Ly8gTm8gaW1hZ2Ugc2VsZWN0ZWQgeWV0LCBhY3RpdmF0ZSBpbnB1dCBmaWVsZFxuXHRcdFx0XHRpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGlGdW5jKTtcblx0XHRcdFx0aW5wdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRcdGlucHV0LmZvY3VzKCk7XG5cdFx0XHRcdGlucHV0LmNsaWNrKCk7XG5cdFx0XHRcdGlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBJbWFnZSBhbHJlYWR5IHNlbGVjdGVkXG5cdFx0XHRcdGlGdW5jKG51bGwpO1xuXHRcdFx0fVx0XHRcdFxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdC8vIGZsYXNoIGZhbGxiYWNrXG5cdFx0XHR2YXIgcmF3X2RhdGEgPSB0aGlzLmdldE1vdmllKCkuX3NuYXAoKTtcblx0XHRcdFxuXHRcdFx0Ly8gcmVuZGVyIHRvIGltYWdlLCBmaXJlIGNhbGxiYWNrIHdoZW4gY29tcGxldGVcblx0XHRcdHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdGltZy5vbmxvYWQgPSBmdW5jO1xuXHRcdFx0aW1nLnNyYyA9ICdkYXRhOmltYWdlLycrdGhpcy5wYXJhbXMuaW1hZ2VfZm9ybWF0Kyc7YmFzZTY0LCcgKyByYXdfZGF0YTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cdFxuXHRjb25maWd1cmU6IGZ1bmN0aW9uKHBhbmVsKSB7XG5cdFx0Ly8gb3BlbiBmbGFzaCBjb25maWd1cmF0aW9uIHBhbmVsIC0tIHNwZWNpZnkgdGFiIG5hbWU6XG5cdFx0Ly8gXCJjYW1lcmFcIiwgXCJwcml2YWN5XCIsIFwiZGVmYXVsdFwiLCBcImxvY2FsU3RvcmFnZVwiLCBcIm1pY3JvcGhvbmVcIiwgXCJzZXR0aW5nc01hbmFnZXJcIlxuXHRcdGlmICghcGFuZWwpIHBhbmVsID0gXCJjYW1lcmFcIjtcblx0XHR0aGlzLmdldE1vdmllKCkuX2NvbmZpZ3VyZShwYW5lbCk7XG5cdH0sXG5cdFxuXHRmbGFzaE5vdGlmeTogZnVuY3Rpb24odHlwZSwgbXNnKSB7XG5cdFx0Ly8gcmVjZWl2ZSBub3RpZmljYXRpb24gZnJvbSBmbGFzaCBhYm91dCBldmVudFxuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSAnZmxhc2hMb2FkQ29tcGxldGUnOlxuXHRcdFx0XHQvLyBtb3ZpZSBsb2FkZWQgc3VjY2Vzc2Z1bGx5XG5cdFx0XHRcdHRoaXMubG9hZGVkID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaCgnbG9hZCcpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdFxuXHRcdFx0Y2FzZSAnY2FtZXJhTGl2ZSc6XG5cdFx0XHRcdC8vIGNhbWVyYSBpcyBsaXZlIGFuZCByZWFkeSB0byBzbmFwXG5cdFx0XHRcdHRoaXMubGl2ZSA9IHRydWU7XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2goJ2xpdmUnKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2Vycm9yJzpcblx0XHRcdFx0Ly8gRmxhc2ggZXJyb3Jcblx0XHRcdFx0dGhpcy5kaXNwYXRjaCgnZXJyb3InLCBuZXcgRmxhc2hFcnJvcihtc2cpKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdC8vIGNhdGNoLWFsbCBldmVudCwganVzdCBpbiBjYXNlXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwid2ViY2FtIGZsYXNoX25vdGlmeTogXCIgKyB0eXBlICsgXCI6IFwiICsgbXNnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9LFxuXHRcblx0YjY0VG9VaW50NjogZnVuY3Rpb24obkNocikge1xuXHRcdC8vIGNvbnZlcnQgYmFzZTY0IGVuY29kZWQgY2hhcmFjdGVyIHRvIDYtYml0IGludGVnZXJcblx0XHQvLyBmcm9tOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L0Jhc2U2NF9lbmNvZGluZ19hbmRfZGVjb2Rpbmdcblx0XHRyZXR1cm4gbkNociA+IDY0ICYmIG5DaHIgPCA5MSA/IG5DaHIgLSA2NVxuXHRcdFx0OiBuQ2hyID4gOTYgJiYgbkNociA8IDEyMyA/IG5DaHIgLSA3MVxuXHRcdFx0OiBuQ2hyID4gNDcgJiYgbkNociA8IDU4ID8gbkNociArIDRcblx0XHRcdDogbkNociA9PT0gNDMgPyA2MiA6IG5DaHIgPT09IDQ3ID8gNjMgOiAwO1xuXHR9LFxuXG5cdGJhc2U2NERlY1RvQXJyOiBmdW5jdGlvbihzQmFzZTY0LCBuQmxvY2tzU2l6ZSkge1xuXHRcdC8vIGNvbnZlcnQgYmFzZTY0IGVuY29kZWQgc3RyaW5nIHRvIFVpbnRhcnJheVxuXHRcdC8vIGZyb206IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvQmFzZTY0X2VuY29kaW5nX2FuZF9kZWNvZGluZ1xuXHRcdHZhciBzQjY0RW5jID0gc0Jhc2U2NC5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL10vZywgXCJcIiksIG5JbkxlbiA9IHNCNjRFbmMubGVuZ3RoLFxuXHRcdFx0bk91dExlbiA9IG5CbG9ja3NTaXplID8gTWF0aC5jZWlsKChuSW5MZW4gKiAzICsgMSA+PiAyKSAvIG5CbG9ja3NTaXplKSAqIG5CbG9ja3NTaXplIDogbkluTGVuICogMyArIDEgPj4gMiwgXG5cdFx0XHR0YUJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobk91dExlbik7XG5cdFx0XG5cdFx0Zm9yICh2YXIgbk1vZDMsIG5Nb2Q0LCBuVWludDI0ID0gMCwgbk91dElkeCA9IDAsIG5JbklkeCA9IDA7IG5JbklkeCA8IG5JbkxlbjsgbkluSWR4KyspIHtcblx0XHRcdG5Nb2Q0ID0gbkluSWR4ICYgMztcblx0XHRcdG5VaW50MjQgfD0gdGhpcy5iNjRUb1VpbnQ2KHNCNjRFbmMuY2hhckNvZGVBdChuSW5JZHgpKSA8PCAxOCAtIDYgKiBuTW9kNDtcblx0XHRcdGlmIChuTW9kNCA9PT0gMyB8fCBuSW5MZW4gLSBuSW5JZHggPT09IDEpIHtcblx0XHRcdFx0Zm9yIChuTW9kMyA9IDA7IG5Nb2QzIDwgMyAmJiBuT3V0SWR4IDwgbk91dExlbjsgbk1vZDMrKywgbk91dElkeCsrKSB7XG5cdFx0XHRcdFx0dGFCeXRlc1tuT3V0SWR4XSA9IG5VaW50MjQgPj4+ICgxNiA+Pj4gbk1vZDMgJiAyNCkgJiAyNTU7XG5cdFx0XHRcdH1cblx0XHRcdFx0blVpbnQyNCA9IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0YUJ5dGVzO1xuXHR9LFxuXHRcblx0dXBsb2FkOiBmdW5jdGlvbihpbWFnZV9kYXRhX3VyaSwgdGFyZ2V0X3VybCwgY2FsbGJhY2spIHtcblx0XHQvLyBzdWJtaXQgaW1hZ2UgZGF0YSB0byBzZXJ2ZXIgdXNpbmcgYmluYXJ5IEFKQVhcblx0XHR2YXIgZm9ybV9lbGVtX25hbWUgPSB0aGlzLnBhcmFtcy51cGxvYWRfbmFtZSB8fCAnd2ViY2FtJztcblx0XHRcblx0XHQvLyBkZXRlY3QgaW1hZ2UgZm9ybWF0IGZyb20gd2l0aGluIGltYWdlX2RhdGFfdXJpXG5cdFx0dmFyIGltYWdlX2ZtdCA9ICcnO1xuXHRcdGlmIChpbWFnZV9kYXRhX3VyaS5tYXRjaCgvXmRhdGFcXDppbWFnZVxcLyhcXHcrKS8pKVxuXHRcdFx0aW1hZ2VfZm10ID0gUmVnRXhwLiQxO1xuXHRcdGVsc2Vcblx0XHRcdHRocm93IFwiQ2Fubm90IGxvY2F0ZSBpbWFnZSBmb3JtYXQgaW4gRGF0YSBVUklcIjtcblx0XHRcblx0XHQvLyBleHRyYWN0IHJhdyBiYXNlNjQgZGF0YSBmcm9tIERhdGEgVVJJXG5cdFx0dmFyIHJhd19pbWFnZV9kYXRhID0gaW1hZ2VfZGF0YV91cmkucmVwbGFjZSgvXmRhdGFcXDppbWFnZVxcL1xcdytcXDtiYXNlNjRcXCwvLCAnJyk7XG5cdFx0XG5cdFx0Ly8gY29udHJ1Y3QgdXNlIEFKQVggb2JqZWN0XG5cdFx0dmFyIGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHRodHRwLm9wZW4oXCJQT1NUXCIsIHRhcmdldF91cmwsIHRydWUpO1xuXHRcdFxuXHRcdC8vIHNldHVwIHByb2dyZXNzIGV2ZW50c1xuXHRcdGlmIChodHRwLnVwbG9hZCAmJiBodHRwLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKSB7XG5cdFx0XHRodHRwLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCAncHJvZ3Jlc3MnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLmxlbmd0aENvbXB1dGFibGUpIHtcblx0XHRcdFx0XHR2YXIgcHJvZ3Jlc3MgPSBlLmxvYWRlZCAvIGUudG90YWw7XG5cdFx0XHRcdFx0V2ViY2FtLmRpc3BhdGNoKCd1cGxvYWRQcm9ncmVzcycsIHByb2dyZXNzLCBlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgZmFsc2UgKTtcblx0XHR9XG5cdFx0XG5cdFx0Ly8gY29tcGxldGlvbiBoYW5kbGVyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdGh0dHAub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoY2FsbGJhY2spIGNhbGxiYWNrLmFwcGx5KCBzZWxmLCBbaHR0cC5zdGF0dXMsIGh0dHAucmVzcG9uc2VUZXh0LCBodHRwLnN0YXR1c1RleHRdICk7XG5cdFx0XHRXZWJjYW0uZGlzcGF0Y2goJ3VwbG9hZENvbXBsZXRlJywgaHR0cC5zdGF0dXMsIGh0dHAucmVzcG9uc2VUZXh0LCBodHRwLnN0YXR1c1RleHQpO1xuXHRcdH07XG5cdFx0XG5cdFx0Ly8gY3JlYXRlIGEgYmxvYiBhbmQgZGVjb2RlIG91ciBiYXNlNjQgdG8gYmluYXJ5XG5cdFx0dmFyIGJsb2IgPSBuZXcgQmxvYiggWyB0aGlzLmJhc2U2NERlY1RvQXJyKHJhd19pbWFnZV9kYXRhKSBdLCB7dHlwZTogJ2ltYWdlLycraW1hZ2VfZm10fSApO1xuXHRcdFxuXHRcdC8vIHN0dWZmIGludG8gYSBmb3JtLCBzbyBzZXJ2ZXJzIGNhbiBlYXNpbHkgcmVjZWl2ZSBpdCBhcyBhIHN0YW5kYXJkIGZpbGUgdXBsb2FkXG5cdFx0dmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcblx0XHRmb3JtLmFwcGVuZCggZm9ybV9lbGVtX25hbWUsIGJsb2IsIGZvcm1fZWxlbV9uYW1lK1wiLlwiK2ltYWdlX2ZtdC5yZXBsYWNlKC9lLywgJycpICk7XG5cdFx0XG5cdFx0Ly8gc2VuZCBkYXRhIHRvIHNlcnZlclxuXHRcdGh0dHAuc2VuZChmb3JtKTtcblx0fVxuXHRcbn07XG5cbldlYmNhbS5pbml0KCk7XG5cbmlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0ZGVmaW5lKCBmdW5jdGlvbigpIHsgcmV0dXJuIFdlYmNhbTsgfSApO1xufSBcbmVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gV2ViY2FtO1xufSBcbmVsc2Uge1xuXHR3aW5kb3cuV2ViY2FtID0gV2ViY2FtO1xufVxuXG59KHdpbmRvdykpO1xuIiwgImltcG9ydCBXZWJjYW0gZnJvbSBcIndlYmNhbWpzXCI7XG5cbmltcG9ydCB7IEJhc2VXaWRnZXQgfSBmcm9tIFwiLi4vY29yZS9jb3JlLndpZGdldC5qc1wiO1xuXG4vKipcbiAqIF9fUHJpbWVGYWNlcyBQaG90b0NhbSBXaWRnZXRfX1xuICpcbiAqIFBob3RvQ2FtIGlzIHVzZWQgdG8gdGFrZSBwaG90b3Mgd2l0aCB3ZWJjYW0gYW5kIHNlbmQgdGhlbSB0byB0aGUgSlNGIGJhY2tlbmQgbW9kZWwuXG4gKlxuICogQHR5cGVkZWYgUHJpbWVGYWNlcy53aWRnZXQuUGhvdG9DYW0ub25DYW1lcmFFcnJvciBDYWxsYmFjayBpbnZva2VkIHdoZW4gYW4gZXJyb3IgaXMgY2F1Z2h0IGJ5IHRoZSBXZWJjYW0uanMgZW5naW5lLlxuICogU2VlIGFsc28ge0BsaW5rIFBob3RvQ2FtQ2ZnLm9uQ2FtZXJhRXJyb3J9LlxuICogQHRoaXMge1ByaW1lRmFjZXMud2lkZ2V0LlBob3RvQ2FtfSBQcmltZUZhY2VzLndpZGdldC5QaG90b0NhbS5vbkNhbWVyYUVycm9yXG4gKiBAcGFyYW0ge0Vycm9yfSBQcmltZUZhY2VzLndpZGdldC5QaG90b0NhbS5vbkNhbWVyYUVycm9yLmVycm9yT2JqIFRoZSBlcnJvciBvYmplY3QgY29udGFpbmluZyB0aGUgZXJyb3IgaW5mb3JtYXRpb24uXG4gKlxuICogQHByb3Age3N0cmluZ30gZGV2aWNlIFRoZSBJRCBvZiBkZXZpY2UgdG8gcmV0cmlldmUgaW1hZ2VzLlxuICpcbiAqIEBpbnRlcmZhY2Uge1ByaW1lRmFjZXMud2lkZ2V0LlBob3RvQ2FtQ2ZnfSBjZmcgVGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSB7QGxpbmsgIFBob3RvQ2FtfCBQaG90b0NhbSB3aWRnZXR9LlxuICogWW91IGNhbiBhY2Nlc3MgdGhpcyBjb25maWd1cmF0aW9uIHZpYSB7QGxpbmsgUHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldC5jZmd8QmFzZVdpZGdldC5jZmd9LiBQbGVhc2Ugbm90ZSB0aGF0IHRoaXNcbiAqIGNvbmZpZ3VyYXRpb24gaXMgdXN1YWxseSBtZWFudCB0byBiZSByZWFkLW9ubHkgYW5kIHNob3VsZCBub3QgYmUgbW9kaWZpZWQuXG4gKiBAZXh0ZW5kcyB7UHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldENmZ30gY2ZnXG4gKlxuICogQHByb3Age2Jvb2xlYW59IGNmZy5hdXRvU3RhcnQgV2hldGhlciBhY2Nlc3MgdG8gdGhlIGNhbWVyYSBzaG91bGQgYmUgcmVxdWVzdGVkIGF1dG9tYXRpY2FsbHkgdXBvbiBwYWdlIGxvYWQuXG4gKiBAcHJvcCB7V2ViY2FtLkltYWdlRm9ybWF0fSBjZmcuZm9ybWF0IEZvcm1hdCBvZiB0aGUgaW1hZ2UgZmlsZS5cbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy5kZXZpY2UgVGhlIElEIG9mIGRldmljZSB0byByZXRyaWV2ZSBpbWFnZXNcbiAqIEBwcm9wIHtudW1iZXJ9IGNmZy5oZWlnaHQgSGVpZ2h0IG9mIHRoZSBjYW1lcmEgdmlld3BvcnQgaW4gcGl4ZWxzLlxuICogQHByb3Age251bWJlcn0gY2ZnLmpwZWdRdWFsaXR5IFF1YWxpdHkgb2YgdGhlIGltYWdlIGJldHdlZW4gYDBgIGFuZCBgMTAwYCB3aGVuIHRoZSBmb3JtYXQgaXMgYGpwZWdgLCBkZWZhdWx0IHZhbHVlIGlzIGA5MGAuXG4gKiBAcHJvcCB7bnVtYmVyfSBjZmcucGhvdG9IZWlnaHQgSGVpZ2h0IG9mIHRoZSBjYXB0dXJlZCBwaG90byBpbiBwaXhlbHMsIGRlZmF1bHRzIHRvIGhlaWdodC5cbiAqIEBwcm9wIHtudW1iZXJ9IGNmZy5waG90b1dpZHRoIFdpZHRoIG9mIHRoZSBjYXB0dXJlZCBwaG90byBpbiBwaXhlbHMsIGRlZmF1bHRzIHRvIHdpZHRoLlxuICogQHByb3Age3N0cmluZ30gY2ZnLnByb2Nlc3MgSWRlbnRpZmllcnMgb2YgY29tcG9uZW50cyB0byBwcm9jZXNzIGR1cmluZyBjYXB0dXJlLlxuICogQHByb3Age3N0cmluZ30gY2ZnLnVwZGF0ZSBJZGVudGlmaWVycyBvZiBjb21wb25lbnRzIHRvIHVwZGF0ZSBkdXJpbmcgY2FwdHVyZS5cbiAqIEBwcm9wIHtudW1iZXJ9IGNmZy53aWR0aCBXaWR0aCBvZiB0aGUgY2FtZXJhIHZpZXdwb3J0IGluIHBpeGVscy5cbiAqIEBwcm9wIHtQcmltZUZhY2VzLndpZGdldC5QaG90b0NhbS5vbkNhbWVyYUVycm9yfSBjZmcub25DYW1lcmFFcnJvciBDdXN0b20gV2ViY2FtLmpzIGVycm9yIGhhbmRsZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFBob3RvQ2FtIGV4dGVuZHMgQmFzZVdpZGdldCB7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgY2FtZXJhIGlzIGN1cnJlbnRseSBhdHRhY2hlZCBhbmQgY2FuIHRha2UgcGhvdG9zLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGF0dGFjaGVkPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLlBhcnRpYWxXaWRnZXRDZmc8VENmZz59IGNmZ1xuICAgICAqL1xuICAgIGluaXQoY2ZnKSB7XG4gICAgICAgIHN1cGVyLmluaXQoY2ZnKTtcbiAgICAgICAgdGhpcy5jZmcud2lkdGggPSB0aGlzLmNmZy53aWR0aHx8MzIwO1xuICAgICAgICB0aGlzLmNmZy5oZWlnaHQgPSB0aGlzLmNmZy5oZWlnaHR8fDI0MDtcbiAgICAgICAgdGhpcy5jZmcucGhvdG9XaWR0aCA9IHRoaXMuY2ZnLnBob3RvV2lkdGh8fHRoaXMuY2ZnLndpZHRoO1xuICAgICAgICB0aGlzLmNmZy5waG90b0hlaWdodCA9IHRoaXMuY2ZnLnBob3RvSGVpZ2h0fHx0aGlzLmNmZy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY2ZnLmpwZWdRdWFsaXR5ID0gdGhpcy5jZmcuanBlZ1F1YWxpdHkgfHw5MDtcbiAgICAgICAgaWYgKCEoXCJhdXRvU3RhcnRcIiBpbiB0aGlzLmNmZykpIHtcbiAgICAgICAgICAgIHRoaXMuY2ZnLmF1dG9TdGFydCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmNmZy5vbkNhbWVyYUVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2FtZXJhRXJyb3IgPSB0aGlzLmNmZy5vbkNhbWVyYUVycm9yO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZXZpY2UgPSB0aGlzLmNmZy5kZXZpY2U7XG5cbiAgICAgICAgaWYgKHRoaXMuY2ZnLmF1dG9TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5hdHRhY2goKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG5cbiAgICAgICAgdGhpcy5kZXRhY2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyB0aGUgd2ViIGNhbWVyYSwgcmVxdWVzdGluZyBhY2Nlc3MgdG8gdGhlIGNhbWVyYSBvZiB0aGUgdXNlci5cbiAgICAgKi9cbiAgICBhdHRhY2goKSB7XG4gICAgICAgIGlmICghdGhpcy5hdHRhY2hlZCkge1xuICAgICAgICAgICAgV2ViY2FtLnJlc2V0KCk7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICAgICAgV2ViY2FtLnNldCh7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuY2ZnLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5jZmcuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGRlc3Rfd2lkdGg6IHRoaXMuY2ZnLnBob3RvV2lkdGgsXG4gICAgICAgICAgICAgICAgZGVzdF9oZWlnaHQ6IHRoaXMuY2ZnLnBob3RvSGVpZ2h0LFxuICAgICAgICAgICAgICAgIGltYWdlX2Zvcm1hdDogdGhpcy5jZmcuZm9ybWF0LFxuICAgICAgICAgICAgICAgIGpwZWdfcXVhbGl0eTogdGhpcy5jZmcuanBlZ1F1YWxpdHksXG4gICAgICAgICAgICAgICAgZm9yY2VfZmxhc2g6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVuYWJsZV9mbGFzaDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGV2aWNlOiB0aGlzLmRldmljZSxcbiAgICAgICAgICAgICAgICB1c2VyX2NhbGxiYWNrOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiAkdGhpcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3M6ICR0aGlzLmNmZy5wcm9jZXNzID8gJHRoaXMuaWQgKyAnICcgKyAkdGhpcy5jZmcucHJvY2VzcyA6ICR0aGlzLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiAkdGhpcy5jZmcudXBkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6ICR0aGlzLmlkICsgJ19kYXRhJywgdmFsdWU6IGRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuYWpheC5SZXF1ZXN0LmhhbmRsZShvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJHRoaXMgPSB0aGlzO1xuICAgICAgICAgICAgV2ViY2FtLm9uKFwiZXJyb3JcIiwgdGhpcy5vbkNhbWVyYUVycm9yKTtcblxuICAgICAgICAgICAgV2ViY2FtLmF0dGFjaCh0aGlzLmlkKTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBlcnJvciBoYW5kbGVyIGZvciB3ZWJjYW0gZXZlbnRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0Vycm9yfSBlcnJvck9iaiBFcnJvciBvYmplY3QgY29udGFpbmluZyBtZXNzYWdlLCBzdGFja3RyYWNlIGFuZCBzbyBvbi5cbiAgICAgKi9cbiAgICBvbkNhbWVyYUVycm9yKGVycm9yT2JqKSB7XG4gICAgICAgIHZhciBtZXNzYWdlO1xuICAgICAgICBpZiAoZXJyb3JPYmogaW5zdGFuY2VvZiBXZWJjYW0uZXJyb3JzLldlYmNhbUVycm9yKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gZXJyb3JPYmoubWVzc2FnZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkNvdWxkIG5vdCBhY2Nlc3Mgd2ViY2FtOiBcIiArIGVycm9yT2JqLm5hbWUgKyBcIjogXCIgK1xuICAgICAgICAgICAgICAgIGVycm9yT2JqLm1lc3NhZ2UgKyBcIiBcIiArIGVycm9yT2JqLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICBhbGVydChcIldlYmNhbS5qcyBjYXVnaHQgYW4gZXJyb3I6IFwiICsgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0YWNoZXMgdGhlIHdlYiBjYW1lcmEgc28gdGhhdCBubyBtb3JlIHBob3RvcyBjYW4gYmUgdGFrZW4uXG4gICAgICovXG4gICAgZGV0YWNoKCkge1xuICAgICAgICBpZiAodGhpcy5hdHRhY2hlZCkge1xuICAgICAgICAgICAgV2ViY2FtLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhIHBob3RvIHdpdGggdGhlIHdlYiBjYW0uIExvZ3MgYW4gZXJyb3IgaWYgbm8gcGhvdG8gY2FuIGJlIHRha2VzLCBzdWNoIGFzIHdoZW4gdGhlIHVzZXIgZG9lcyBub3QgaGF2ZVxuICAgICAqIGEgY2FtZXJhIG9yIGRpZCBub3QgYWxsb3cgYWNjZXNzIHRvIHRoZSBjYW1lcmEuXG4gICAgICovXG4gICAgY2FwdHVyZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXR0YWNoZWQpIHtcbiAgICAgICAgICAgIFdlYmNhbS5zbmFwKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBQcmltZUZhY2VzLmVycm9yKCdDYXB0dXJlIGVycm9yOiBBZHZhbmNlZFBob3RvQ2FtIG5vdCBhdHRhY2hlZCB0byB0aGUgY2FtZXJhJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGF2YWlsYWJsZSB2aWRlbyBpbnB1dCBkZXZpY2UgbGlzdC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPE1lZGlhRGV2aWNlSW5mb1tdPiB8IG51bGx9IFRoZSBhdmFpbGFibGUgdmlkZW8gaW5wdXQgZGV2aWNlIGxpc3QsIG9yIGBudWxsYCBpZiB0aGUgYnJvd3NlciBkb2VzXG4gICAgICogbm90IHN1cHBvcnQgbWVkaWEgZGV2aWNlcyBlbnVtZXJhdGlvbi5cbiAgICAgKi9cbiAgICBnZXRBdmFpbGFibGVEZXZpY2VzKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKS50aGVuKGZ1bmN0aW9uIChkZXZpY2VzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRldmljZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGV2aWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGV2aWNlLmtpbmQgPT09IFwidmlkZW9pbnB1dFwiO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXRpbGl0eSB0byBkZXRhY2ggYW5kIGF0dGFjaCB0aGUgdmlkZW8gYWdhaW4uXG4gICAgICovXG4gICAgcmVsb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5hdHRhY2hlZCkge1xuICAgICAgICAgICAgdGhpcy5kZXRhY2goKTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQVFBLEtBQUMsU0FBU0EsU0FBUTtBQUNsQixVQUFJO0FBTUosZUFBUyxhQUFhO0FBQ3JCLFlBQUksT0FBTyxNQUFNLE1BQU0sTUFBTSxTQUFTO0FBQ3RDLGFB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LE1BQU07QUFBQSxZQUN4RSxRQUFRLE1BQU0sSUFBSTtBQUFBLFlBQ2xCLFFBQVE7QUFBQSxjQUNKLEVBQUMsTUFBTSxNQUFNLEtBQUssU0FBUyxPQUFPLEtBQUk7QUFBQSxZQUMxQztBQUFBLFVBQ0o7QUFDQSxxQkFBVyxLQUFLLFFBQVEsT0FBTyxPQUFPO0FBQUEsUUFDMUM7QUFBQSxNQUNKLENBQUM7QUFFRCxjQUFRO0FBQ1Isc0JBQUFBLFFBQU8sR0FBRyxTQUFTLEtBQUssYUFBYTtBQUVyQyxzQkFBQUEsUUFBTyxPQUFPLEtBQUssRUFBRTtBQUNyQixXQUFLLFdBQVc7QUFBQSxJQUNwQjtBQUFBLEVBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPQSxjQUFjLFVBQVU7QUFDcEIsUUFBSTtBQUNKLFFBQUksb0JBQW9CLGdCQUFBQSxRQUFPLE9BQU8sYUFBYTtBQUMvQyxnQkFBVSxTQUFTO0FBQUEsSUFDdkIsT0FBTztBQUNILGdCQUFVLDhCQUE4QixTQUFTLE9BQU8sT0FDcEQsU0FBUyxVQUFVLE1BQU0sU0FBUyxTQUFTO0FBQUEsSUFDbkQ7QUFFQSxVQUFNLGdDQUFnQyxPQUFPO0FBQUEsRUFDakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFNBQVM7QUFDTCxRQUFJLEtBQUssVUFBVTtBQUNmLHNCQUFBQSxRQUFPLE1BQU07QUFDYixXQUFLLFdBQVc7QUFBQSxJQUNwQjtBQUFBLEVBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsVUFBVTtBQUNOLFFBQUksS0FBSyxVQUFVO0FBQ2Ysc0JBQUFBLFFBQU8sS0FBSztBQUFBLElBQ2hCLE9BQU87QUFDSCxpQkFBVyxNQUFNLDREQUE0RDtBQUFBLElBQ2pGO0FBQUEsRUFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLHNCQUFzQjtBQUNsQixRQUFJLFNBQVM7QUFDYixRQUFJLFVBQVUsZ0JBQWdCLFVBQVUsYUFBYSxrQkFBa0I7QUFDbkUsZUFBUyxVQUFVLGFBQWEsaUJBQWlCLEVBQUUsS0FBSyxTQUFVLFNBQVM7QUFDdkUsZUFBTyxRQUFRO0FBQUEsVUFDWCxTQUFVLFFBQVE7QUFDZCxtQkFBTyxPQUFPLFNBQVM7QUFBQSxVQUMzQjtBQUFBLFFBQUM7QUFBQSxNQUNULENBQUM7QUFBQSxJQUNMO0FBQ0EsV0FBTztBQUFBLEVBQ1g7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFNBQVM7QUFDTCxRQUFJLEtBQUssVUFBVTtBQUNmLFdBQUssT0FBTztBQUNaLFdBQUssT0FBTztBQUFBLElBQ2hCO0FBQUEsRUFDSjtBQUVKOyIsCiAgIm5hbWVzIjogWyJ3aW5kb3ciLCAiV2ViY2FtIiwgIm4iLCAiZXZlbnQiLCAiV2ViY2FtIl0KfQo=

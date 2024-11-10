import {
  require_jquery_fileupload,
  require_jquery_iframe_transport
} from "./chunk-4TRJIR7U.js";
import "./chunk-25GSMOF2.js";
import "./chunk-AGY32TFX.js";
import {
  BaseWidget
} from "./chunk-HGD6GSK5.js";
import {
  __toESM
} from "./chunk-YRJTWU7C.js";

// src/fileupload/3-fileupload.simple.js
var import_blueimp_file_upload = __toESM(require_jquery_fileupload());
var import_jquery_iframe_transport = __toESM(require_jquery_iframe_transport());
var SimpleFileUpload = class extends BaseWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    if (this.cfg.disabled) {
      return;
    }
    this.cfg.messageTemplate = this.cfg.messageTemplate || "{name} {size}";
    this.cfg.global = this.cfg.global === true || this.cfg.global === void 0 ? true : false;
    this.form = this.jq.closest("form");
    this.input = $(this.jqId);
    if (this.cfg.skinSimple) {
      this.input = $(this.jqId + "_input");
      this.button = this.jq.children(".ui-button");
      this.display = this.jq.children(".ui-fileupload-filename");
      if (!this.input.prop("disabled")) {
        this.bindEvents();
        this.bindTriggers();
      }
    } else if (this.cfg.auto) {
      var $this = this;
      this.input.on("change.fileupload", function() {
        $this.upload();
      });
    }
  }
  /**
   * Sets up all events listeners for this file upload widget.
   * @private
   */
  bindEvents() {
    var $this = this;
    this.button.on("mouseover.fileupload", function() {
      var el = $(this);
      if (!el.prop("disabled")) {
        el.addClass("ui-state-hover");
      }
    }).on("mouseout.fileupload", function() {
      $(this).removeClass("ui-state-active ui-state-hover");
    }).on("mousedown.fileupload", function() {
      var el = $(this);
      if (!el.prop("disabled")) {
        el.addClass("ui-state-active").removeClass("ui-state-hover");
      }
    }).on("mouseup.fileupload", function() {
      $(this).removeClass("ui-state-active").addClass("ui-state-hover");
    });
    this.input.on("change.fileupload", function() {
      var files = $this.input[0].files;
      if (files) {
        if (files.length > 0 && $this.cfg.displayFilename) {
          var toDisplay = $this.cfg.messageTemplate.replace("{name}", files[0].name).replace("{size}", PrimeFaces.utils.formatBytes(files[0].size));
          if (files.length > 1) {
            toDisplay = toDisplay + " + " + (files.length - 1);
          }
          $this.display.text(toDisplay);
        } else {
          $this.display.text("");
        }
        if ($this.cfg.auto && files.length > 0) {
          $this.upload();
        }
      } else {
        $this.input.val("");
      }
    }).on("focus.fileupload", function() {
      $this.button.addClass("ui-state-focus");
    }).on("blur.fileupload", function() {
      $this.button.removeClass("ui-state-focus");
    });
  }
  /**
   * Sets up the global event listeners on the button.
   * @private
   */
  bindTriggers() {
    PrimeFaces.bindButtonInlineAjaxStatus(this, this.button);
  }
  /**
   * Brings up the native file selection dialog.
   */
  show() {
    if (this.cfg.skinSimple) {
      this.input.trigger("click");
    } else {
      this.jq.trigger("click");
    }
  }
  /**
   * Clears the currently selected file.
   */
  clear() {
    if (this.input) {
      this.input.val("");
    }
    if (this.display) {
      this.display.text("");
    }
  }
  /**
   * Uploads all selected files via AJAX.
   * @private
   */
  upload() {
    var $this = this;
    var process = this.cfg.process ? this.id + " " + PrimeFaces.expressions.SearchExpressionFacade.resolveComponents(this.jq, this.cfg.process).join(" ") : this.id;
    var update = this.cfg.update ? PrimeFaces.expressions.SearchExpressionFacade.resolveComponents(this.jq, this.cfg.update).join(" ") : null;
    var validationResult = PrimeFaces.validation.validate($this.jq, process, update, true, true, true, false, true);
    if (!validationResult.valid) {
      return;
    }
    var files = this.input[0].files;
    var parameterPrefix = PrimeFaces.ajax.Request.extractParameterNamespace(this.form);
    var formData = PrimeFaces.ajax.Request.createFacesAjaxFormData(this.form, parameterPrefix, this.id, process, update);
    if ($this.cfg.global) {
      $(document).trigger("pfAjaxStart");
    }
    for (var i = 0; i < files.length; i++) {
      formData.append(this.input.attr("id"), files[i]);
    }
    var xhrOptions = {
      url: PrimeFaces.ajax.Utils.getPostUrl(this.form),
      portletForms: PrimeFaces.ajax.Utils.getPorletForms(this.form, parameterPrefix),
      source: this.id,
      type: "POST",
      cache: false,
      dataType: "xml",
      data: formData,
      processData: false,
      contentType: false,
      global: false,
      beforeSend: function(xhr, settings) {
        xhr.setRequestHeader("Faces-Request", "partial/ajax");
        xhr.pfSettings = settings;
        xhr.pfArgs = {};
        if ($this.cfg.global) {
          $(document).trigger("pfAjaxSend", [xhr, this]);
        }
      }
    };
    var jqXhr = $.ajax(xhrOptions).fail(function(xhr, status, errorThrown) {
      var location = xhr.getResponseHeader("Location");
      if (xhr.status === 401 && location) {
        PrimeFaces.debug("Unauthorized status received. Redirecting to " + location);
        window.location = location;
        return;
      }
      if ($this.cfg.onerror) {
        $this.cfg.onerror.call(this, xhr, status, errorThrown);
      }
      $(document).trigger("pfAjaxError", [xhr, this, errorThrown]);
      PrimeFaces.error("Request return with error:" + status + ".");
    }).done(function(data, status, xhr) {
      PrimeFaces.debug("Response received successfully.");
      try {
        var parsed;
        if ($this.cfg.onsuccess) {
          parsed = $this.cfg.onsuccess.call(this, data, status, xhr);
        }
        if ($this.cfg.global) {
          $(document).trigger("pfAjaxSuccess", [xhr, this]);
        }
        if (parsed) {
          return;
        } else {
          PrimeFaces.ajax.Response.handle(data, status, xhr);
        }
      } catch (err) {
        PrimeFaces.error(err);
      }
      PrimeFaces.debug("DOM is updated.");
    }).always(function(data, status, xhr) {
      if ($this.cfg.oncomplete) {
        $this.cfg.oncomplete.call(this, xhr, status, xhr.pfArgs, data);
      }
      PrimeFaces.debug("Response completed.");
      $this.clear();
      if ($this.cfg.global) {
        $(document).trigger("pfAjaxComplete", [xhr, this, xhr.pfArgs]);
      }
    });
    PrimeFaces.ajax.Queue.addXHR(jqXhr);
  }
};
export {
  SimpleFileUpload
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZpbGV1cGxvYWQvMy1maWxldXBsb2FkLnNpbXBsZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFwiYmx1ZWltcC1maWxlLXVwbG9hZFwiO1xuaW1wb3J0IFwiYmx1ZWltcC1maWxlLXVwbG9hZC9qcy9qcXVlcnkuaWZyYW1lLXRyYW5zcG9ydC5qc1wiO1xuXG5pbXBvcnQgeyBCYXNlV2lkZ2V0IH0gZnJvbSBcIi4uL2NvcmUvY29yZS53aWRnZXQuanNcIjtcblxuLyoqXG4gKiBfX1ByaW1lRmFjZXMgU2ltcGxlIEZpbGVVcGxvYWQgV2lkZ2V0X19cbiAqXG4gKiBAcHJvcCB7SlF1ZXJ5fSBidXR0b24gVGhlIERPTSBlbGVtZW50IGZvciB0aGUgYnV0dG9uIGZvciBzZWxlY3RpbmcgYSBmaWxlLlxuICogQHByb3Age0pRdWVyeX0gZGlzcGxheSBUaGUgRE9NIGVsZW1lbnQgZm9yIHRoZSBVSSBkaXNwbGF5LlxuICogQHByb3Age0pRdWVyeX0gZm9ybSBUaGUgRE9NIGVsZW1lbnQgb2YgdGhlIChjbG9zZXN0KSBmb3JtIHRoYXQgY29udGFpbnMgdGhpcyBmaWxlIHVwbG9hZC5cbiAqIEBwcm9wIHtKUXVlcnl9IGlucHV0IFRoZSBET00gZWxlbWVudCBmb3IgdGhlIGZpbGUgaW5wdXQgZWxlbWVudC5cbiAqXG4gKiBAaW50ZXJmYWNlIHtQcmltZUZhY2VzLndpZGdldC5TaW1wbGVGaWxlVXBsb2FkQ2ZnfSBjZmcgVGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZVxuICoge0BsaW5rICBTaW1wbGVGaWxlVXBsb2FkfCBTaW1wbGVGaWxlVXBsb2FkIHdpZGdldH0uXG4gKiBZb3UgY2FuIGFjY2VzcyB0aGlzIGNvbmZpZ3VyYXRpb24gdmlhIHtAbGluayBQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0LmNmZ3xCYXNlV2lkZ2V0LmNmZ30uIFBsZWFzZSBub3RlIHRoYXQgdGhpc1xuICogY29uZmlndXJhdGlvbiBpcyB1c3VhbGx5IG1lYW50IHRvIGJlIHJlYWQtb25seSBhbmQgc2hvdWxkIG5vdCBiZSBtb2RpZmllZC5cbiAqIEBleHRlbmRzIHtQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0Q2ZnfSBjZmdcbiAqXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2ZnLmRpc2FibGVkIFdoZXRoZXIgdGhpcyBmaWxlIHVwbG9hZCBpcyBkaXNhYmxlZC5cbiAqIEBwcm9wIHtib29sZWFufSBjZmcuZ2xvYmFsIEdsb2JhbCBBSkFYIHJlcXVlc3RzIGFyZSBsaXN0ZW5lZCB0byBieSBgYWpheFN0YXR1c2AuIFdoZW4gYGZhbHNlYCwgYGFqYXhTdGF0dXNgIHdpbGwgbm90XG4gKiBnZXQgdHJpZ2dlcmVkLlxuICogQHByb3Age3N0cmluZ30gY2ZnLm1lc3NhZ2VUZW1wbGF0ZSBNZXNzYWdlIHRlbXBsYXRlIHRvIHVzZSB3aGVuIGRpc3BsYXlpbmcgZmlsZSB2YWxpZGF0aW9uIGVycm9ycy5cbiAqIEBwcm9wIHtib29sZWFufSBjZmcuc2tpblNpbXBsZSBXaGV0aGVyIHRvIGFwcGx5IHRoZW1pbmcgdG8gdGhlIHNpbXBsZSB1cGxvYWQgd2lkZ2V0LlxuICogQGZvcmNlZFByb3Age251bWJlcn0gW2FqYXhDb3VudF0gTnVtYmVyIG9mIGNvbmN1cnJlbnQgYWN0aXZlIEFqYXggcmVxdWVzdHMuXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2ZnLmRpc3BsYXlGaWxlbmFtZSBXaGV0ZXIgdGhlIGZpbGVuYW1lIHNob3VsZCBiZSBkaXNwbGF5ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBTaW1wbGVGaWxlVXBsb2FkIGV4dGVuZHMgQmFzZVdpZGdldCB7XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy5QYXJ0aWFsV2lkZ2V0Q2ZnPFRDZmc+fSBjZmdcbiAgICAgKi9cbiAgICBpbml0KGNmZykge1xuICAgICAgICBzdXBlci5pbml0KGNmZyk7XG4gICAgICAgIGlmKHRoaXMuY2ZnLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNmZy5tZXNzYWdlVGVtcGxhdGUgPSB0aGlzLmNmZy5tZXNzYWdlVGVtcGxhdGUgfHwgJ3tuYW1lfSB7c2l6ZX0nO1xuICAgICAgICB0aGlzLmNmZy5nbG9iYWwgPSAodGhpcy5jZmcuZ2xvYmFsID09PSB0cnVlIHx8IHRoaXMuY2ZnLmdsb2JhbCA9PT0gdW5kZWZpbmVkKSA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmpxLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgdGhpcy5pbnB1dCA9ICQodGhpcy5qcUlkKTtcblxuICAgICAgICBpZiAodGhpcy5jZmcuc2tpblNpbXBsZSkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dCA9ICQodGhpcy5qcUlkICsgJ19pbnB1dCcpO1xuICAgICAgICAgICAgdGhpcy5idXR0b24gPSB0aGlzLmpxLmNoaWxkcmVuKCcudWktYnV0dG9uJyk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0aGlzLmpxLmNoaWxkcmVuKCcudWktZmlsZXVwbG9hZC1maWxlbmFtZScpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5wdXQucHJvcCgnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZFRyaWdnZXJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jZmcuYXV0bykge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuaW5wdXQub24oJ2NoYW5nZS5maWxldXBsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJHRoaXMudXBsb2FkKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYWxsIGV2ZW50cyBsaXN0ZW5lcnMgZm9yIHRoaXMgZmlsZSB1cGxvYWQgd2lkZ2V0LlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcblxuICAgICAgICB0aGlzLmJ1dHRvbi5vbignbW91c2VvdmVyLmZpbGV1cGxvYWQnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGlmICghZWwucHJvcCgnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCd1aS1zdGF0ZS1ob3ZlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3V0LmZpbGV1cGxvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWFjdGl2ZSB1aS1zdGF0ZS1ob3ZlcicpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlZG93bi5maWxldXBsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKCFlbC5wcm9wKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ3VpLXN0YXRlLWFjdGl2ZScpLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1ob3ZlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNldXAuZmlsZXVwbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndWktc3RhdGUtYWN0aXZlJykuYWRkQ2xhc3MoJ3VpLXN0YXRlLWhvdmVyJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW5wdXQub24oJ2NoYW5nZS5maWxldXBsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZmlsZXMgPSAkdGhpcy5pbnB1dFswXS5maWxlcztcbiAgICAgICAgICAgIGlmIChmaWxlcykge1xuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgZmlsZW5hbWVcbiAgICAgICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID4gMCAmJiAkdGhpcy5jZmcuZGlzcGxheUZpbGVuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b0Rpc3BsYXkgPSAkdGhpcy5jZmcubWVzc2FnZVRlbXBsYXRlLnJlcGxhY2UoJ3tuYW1lfScsIGZpbGVzWzBdLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgne3NpemV9JywgUHJpbWVGYWNlcy51dGlscy5mb3JtYXRCeXRlcyhmaWxlc1swXS5zaXplKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0Rpc3BsYXkgPSB0b0Rpc3BsYXkgKyBcIiArIFwiICsgKGZpbGVzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmRpc3BsYXkudGV4dCh0b0Rpc3BsYXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuZGlzcGxheS50ZXh0KCcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJHRoaXMuY2ZnLmF1dG8gJiYgZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy51cGxvYWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXHQvLyBubyBkYXRhIHdhcyBmb3VuZCBzbyBjbGVhciB0aGUgaW5wdXRcbiAgICAgICAgICAgIFx0JHRoaXMuaW5wdXQudmFsKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdmb2N1cy5maWxldXBsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkdGhpcy5idXR0b24uYWRkQ2xhc3MoJ3VpLXN0YXRlLWZvY3VzJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignYmx1ci5maWxldXBsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkdGhpcy5idXR0b24ucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWZvY3VzJyk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCB0aGUgZ2xvYmFsIGV2ZW50IGxpc3RlbmVycyBvbiB0aGUgYnV0dG9uLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYmluZFRyaWdnZXJzKCkge1xuICAgICAgICBQcmltZUZhY2VzLmJpbmRCdXR0b25JbmxpbmVBamF4U3RhdHVzKHRoaXMsIHRoaXMuYnV0dG9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCcmluZ3MgdXAgdGhlIG5hdGl2ZSBmaWxlIHNlbGVjdGlvbiBkaWFsb2cuXG4gICAgICovXG4gICAgc2hvdygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2ZnLnNraW5TaW1wbGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudHJpZ2dlcihcImNsaWNrXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5qcS50cmlnZ2VyKFwiY2xpY2tcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBmaWxlLlxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICBpZiAodGhpcy5pbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC52YWwoJycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpc3BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheS50ZXh0KCcnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwbG9hZHMgYWxsIHNlbGVjdGVkIGZpbGVzIHZpYSBBSkFYLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdXBsb2FkKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcHJvY2VzcyA9IHRoaXMuY2ZnLnByb2Nlc3NcbiAgICAgICAgICAgID8gdGhpcy5pZCArICcgJyArIFByaW1lRmFjZXMuZXhwcmVzc2lvbnMuU2VhcmNoRXhwcmVzc2lvbkZhY2FkZS5yZXNvbHZlQ29tcG9uZW50cyh0aGlzLmpxLCB0aGlzLmNmZy5wcm9jZXNzKS5qb2luKCcgJylcbiAgICAgICAgICAgIDogdGhpcy5pZDtcbiAgICAgICAgdmFyIHVwZGF0ZSA9IHRoaXMuY2ZnLnVwZGF0ZVxuICAgICAgICAgICAgPyBQcmltZUZhY2VzLmV4cHJlc3Npb25zLlNlYXJjaEV4cHJlc3Npb25GYWNhZGUucmVzb2x2ZUNvbXBvbmVudHModGhpcy5qcSwgdGhpcy5jZmcudXBkYXRlKS5qb2luKCcgJylcbiAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICB2YXIgdmFsaWRhdGlvblJlc3VsdCA9IFByaW1lRmFjZXMudmFsaWRhdGlvbi52YWxpZGF0ZSgkdGhpcy5qcSwgcHJvY2VzcywgdXBkYXRlLCB0cnVlLCB0cnVlLCB0cnVlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIGlmICghdmFsaWRhdGlvblJlc3VsdC52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZpbGVzID0gdGhpcy5pbnB1dFswXS5maWxlcztcbiAgICAgICAgdmFyIHBhcmFtZXRlclByZWZpeCA9IFByaW1lRmFjZXMuYWpheC5SZXF1ZXN0LmV4dHJhY3RQYXJhbWV0ZXJOYW1lc3BhY2UodGhpcy5mb3JtKTtcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gUHJpbWVGYWNlcy5hamF4LlJlcXVlc3QuY3JlYXRlRmFjZXNBamF4Rm9ybURhdGEodGhpcy5mb3JtLCBwYXJhbWV0ZXJQcmVmaXgsIHRoaXMuaWQsIHByb2Nlc3MsIHVwZGF0ZSk7XG5cbiAgICAgICAgaWYoJHRoaXMuY2ZnLmdsb2JhbCkge1xuICAgICAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcigncGZBamF4U3RhcnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFwcGVuZCBmaWxlc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQodGhpcy5pbnB1dC5hdHRyKCdpZCcpLCBmaWxlc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgeGhyT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHVybDogUHJpbWVGYWNlcy5hamF4LlV0aWxzLmdldFBvc3RVcmwodGhpcy5mb3JtKSxcbiAgICAgICAgICAgIHBvcnRsZXRGb3JtczogUHJpbWVGYWNlcy5hamF4LlV0aWxzLmdldFBvcmxldEZvcm1zKHRoaXMuZm9ybSwgcGFyYW1ldGVyUHJlZml4KSxcbiAgICAgICAgICAgIHNvdXJjZTogdGhpcy5pZCxcbiAgICAgICAgICAgIHR5cGUgOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGNhY2hlIDogZmFsc2UsXG4gICAgICAgICAgICBkYXRhVHlwZSA6IFwieG1sXCIsXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgIGdsb2JhbDogZmFsc2UsXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbih4aHIsIHNldHRpbmdzKSB7XG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0ZhY2VzLVJlcXVlc3QnLCAncGFydGlhbC9hamF4Jyk7XG4gICAgICAgICAgICAgICAgeGhyLnBmU2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgICAgICAgICB4aHIucGZBcmdzID0ge307IC8vIGRlZmF1bHQgc2hvdWxkIGJlIGFuIGVtcHR5IG9iamVjdFxuICAgICAgICAgICAgICAgIGlmKCR0aGlzLmNmZy5nbG9iYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ3BmQWpheFNlbmQnLCBbeGhyLCB0aGlzXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBqcVhociA9ICQuYWpheCh4aHJPcHRpb25zKVxuICAgICAgICAgICAgLmZhaWwoZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKFwiTG9jYXRpb25cIik7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDQwMSAmJiBsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmRlYnVnKCdVbmF1dGhvcml6ZWQgc3RhdHVzIHJlY2VpdmVkLiBSZWRpcmVjdGluZyB0byAnICsgbG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZigkdGhpcy5jZmcub25lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5jZmcub25lcnJvci5jYWxsKHRoaXMsIHhociwgc3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcigncGZBamF4RXJyb3InLCBbeGhyLCB0aGlzLCBlcnJvclRocm93bl0pO1xuXG4gICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5lcnJvcignUmVxdWVzdCByZXR1cm4gd2l0aCBlcnJvcjonICsgc3RhdHVzICsgJy4nKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZG9uZShmdW5jdGlvbihkYXRhLCBzdGF0dXMsIHhocikge1xuICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuZGVidWcoJ1Jlc3BvbnNlIHJlY2VpdmVkIHN1Y2Nlc3NmdWxseS4nKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyc2VkO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vY2FsbCB1c2VyIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIGlmKCR0aGlzLmNmZy5vbnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZCA9ICR0aGlzLmNmZy5vbnN1Y2Nlc3MuY2FsbCh0aGlzLCBkYXRhLCBzdGF0dXMsIHhocik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZigkdGhpcy5jZmcuZ2xvYmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdwZkFqYXhTdWNjZXNzJywgW3hociwgdGhpc10pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy9kbyBub3QgZXhlY3V0ZSBkZWZhdWx0IGhhbmRsZXIgYXMgcmVzcG9uc2UgYWxyZWFkeSBoYXMgYmVlbiBwYXJzZWRcbiAgICAgICAgICAgICAgICAgICAgaWYocGFyc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVzcG9uc2UuaGFuZGxlKGRhdGEsIHN0YXR1cywgeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuZGVidWcoJ0RPTSBpcyB1cGRhdGVkLicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hbHdheXMoZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHtcbiAgICAgICAgICAgICAgICBpZigkdGhpcy5jZmcub25jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5jZmcub25jb21wbGV0ZS5jYWxsKHRoaXMsIHhociwgc3RhdHVzLCB4aHIucGZBcmdzLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmRlYnVnKCdSZXNwb25zZSBjb21wbGV0ZWQuJyk7XG4gICAgICAgICAgICAgICAgJHRoaXMuY2xlYXIoKTtcblxuICAgICAgICAgICAgICAgIGlmKCR0aGlzLmNmZy5nbG9iYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcigncGZBamF4Q29tcGxldGUnLCBbeGhyLCB0aGlzLCB4aHIucGZBcmdzXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgUHJpbWVGYWNlcy5hamF4LlF1ZXVlLmFkZFhIUihqcVhocik7XG5cbiAgICB9XG5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQU87QUFDUCxxQ0FBTztBQTBCQSxJQUFNLG1CQUFOLGNBQStCLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPN0MsS0FBSyxLQUFLO0FBQ04sVUFBTSxLQUFLLEdBQUc7QUFDZCxRQUFH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

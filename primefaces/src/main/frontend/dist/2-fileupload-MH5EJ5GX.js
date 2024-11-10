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
  __publicField,
  __toESM
} from "./chunk-YRJTWU7C.js";

// src/fileupload/2-fileupload.js
var import_blueimp_file_upload = __toESM(require_jquery_fileupload());
var import_jquery_iframe_transport = __toESM(require_jquery_iframe_transport());
var _FileUpload = class _FileUpload extends BaseWidget {
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
    this.ucfg = {};
    this.form = this.jq.closest("form");
    this.buttonBar = this.jq.children(".ui-fileupload-buttonbar");
    this.dragoverCount = 0;
    this.customDropZone = this.cfg.dropZone !== void 0 ? PrimeFaces.expressions.SearchExpressionFacade.resolveComponentsAsSelector(this.jq, this.cfg.dropZone) : null;
    this.dropZone = this.cfg.dnd === false ? null : this.customDropZone || this.jq;
    this.chooseButton = this.buttonBar.children(".ui-fileupload-choose");
    this.uploadButton = this.buttonBar.children(".ui-fileupload-upload");
    this.cancelButton = this.buttonBar.children(".ui-fileupload-cancel");
    this.content = this.jq.children(".ui-fileupload-content");
    this.filesTbody = this.content.find("> div.ui-fileupload-files > div");
    this.files = [];
    this.fileAddIndex = 0;
    this.cfg.previewWidth = this.cfg.previewWidth || 80;
    this.cfg.maxRetries = this.cfg.maxRetries || 30;
    this.cfg.retryTimeout = this.cfg.retryTimeout || 1e3;
    this.cfg.global = this.cfg.global !== false;
    this.uploadedFileCount = 0;
    this.fileId = 0;
    this.renderMessages();
    this.bindEvents();
    var $this = this;
    var parameterPrefix = PrimeFaces.ajax.Request.extractParameterNamespace(this.form);
    this.ucfg = {
      url: PrimeFaces.ajax.Utils.getPostUrl(this.form),
      portletForms: PrimeFaces.ajax.Utils.getPorletForms(this.form, parameterPrefix),
      paramName: Array.from({ length: 999 }, (_, i) => this.id),
      // required so drag´n´drop has for each file the id (Github #11879)
      dataType: "xml",
      dropZone: this.dropZone,
      sequentialUploads: this.cfg.sequentialUploads,
      maxChunkSize: this.cfg.maxChunkSize,
      maxRetries: this.cfg.maxRetries,
      retryTimeout: this.cfg.retryTimeout,
      source: $this.id,
      formData: function() {
        return $this.createPostData();
      },
      beforeSend: function(xhr, settings) {
        xhr.setRequestHeader("Faces-Request", "partial/ajax");
        xhr.pfSettings = settings;
        xhr.pfArgs = {};
        var file = settings.files ? settings.files[0] : null;
        if (file && file.webkitRelativePath) {
          settings.data.append("X-File-Webkit-Relative-Path", file.webkitRelativePath);
        }
        if ($this.cfg.global) {
          $(document).trigger("pfAjaxSend", [xhr, this]);
        }
      },
      start: function(e) {
        if ($this.cfg.onstart) {
          $this.cfg.onstart.call($this);
        }
      },
      add: function(e, data) {
        $this.chooseButton.removeClass("ui-state-hover ui-state-focus");
        if ($this.fileAddIndex === 0) {
          $this.clearMessages();
        }
        var update = PrimeFaces.expressions.SearchExpressionFacade.resolveComponentsAsSelector($this.jq, $this.cfg.update);
        var dataFileInput = data.fileInput;
        if (dataFileInput == null) {
          dataFileInput = $(PrimeFaces.escapeClientId(data.paramName + "_input"));
          const dataTransfer = new DataTransfer();
          data.files.forEach((item) => {
            dataTransfer.items.add(item);
          });
          dataFileInput[0].files = dataTransfer.files;
        }
        dataFileInput.data(PrimeFaces.CLIENT_ID_DATA, $this.id);
        var fileLimit = dataFileInput ? dataFileInput.data("p-filelimit") : null;
        if (fileLimit && $this.uploadedFileCount + $this.files.length + 1 > fileLimit) {
          $this.clearMessages();
          var vc = PrimeFaces.validation.ValidationContext;
          vc.clear();
          vc.addMessage($this.id, PrimeFaces.validation.Utils.getMessage("primefaces.FileValidator.FILE_LIMIT", [fileLimit]));
          PrimeFaces.validation.Utils.renderMessages(vc.messages, update);
          for (let clientId in vc.messages) {
            for (let msg of vc.messages[clientId]) {
              if (!msg.rendered) {
                $this.showMessage(msg);
              }
            }
          }
          vc.clear();
          return;
        }
        var file = data.files ? data.files[0] : null;
        if (file) {
          $this.clearMessages();
          var validationResult = PrimeFaces.validation.validate($this.jq, dataFileInput, update, true, true, true, true, false);
          if (!validationResult.valid) {
            for (let clientId in validationResult.messages) {
              for (let msg of validationResult.messages[clientId]) {
                if (!msg.rendered) {
                  $this.showMessage(msg);
                }
              }
            }
            $this.postSelectFile(data);
            if ($this.cfg.onvalidationfailure) {
              for (let clientId in validationResult.messages) {
                for (let msg of validationResult.messages[clientId]) {
                  $this.cfg.onvalidationfailure({
                    summary: msg.summary,
                    filename: file.name,
                    filesize: file.size
                  });
                }
              }
            }
          } else if ($this.cfg.onAdd) {
            $this.cfg.onAdd.call($this, file, function(processedFile) {
              file = processedFile;
              data.files[0] = processedFile;
              $this.addFileToRow(file, data);
            });
          } else {
            $this.addFileToRow(file, data);
          }
          if ($this.cfg.resumeContextPath && $this.cfg.maxChunkSize > 0) {
            $.getJSON($this.cfg.resumeContextPath, { "X-File-Id": $this.createXFileId(file) }, function(result) {
              var uploadedBytes = result.uploadedBytes;
              data.uploadedBytes = uploadedBytes;
            });
          }
        }
      },
      send: function(e, data) {
        if (!window.FormData) {
          for (const file of data.files) {
            if (file.row) {
              file.row.children(".ui-fileupload-progress").find("> .ui-progressbar > .ui-progressbar-value").addClass("ui-progressbar-value-legacy").css({
                width: "100%",
                display: "block"
              });
            }
          }
        }
      },
      fail: function(e, data) {
        if (data.errorThrown === "abort") {
          if ($this.cfg.resumeContextPath && $this.cfg.maxChunkSize > 0) {
            $.ajax({
              url: $this.cfg.resumeContextPath + "?" + $.param({ "X-File-Id": $this.createXFileId(data.files[0]) }),
              dataType: "json",
              type: "DELETE"
            });
          }
          if ($this.cfg.oncancel) {
            $this.cfg.oncancel.call($this);
          }
          return;
        }
        if ($this.cfg.resumeContextPath && $this.cfg.maxChunkSize > 0) {
          if (data.context === void 0) {
            data.context = $(this);
          }
          var fu = $(this).data("blueimp-fileupload") || $(this).data("fileupload");
          var retries = data.context.data("retries") || 0;
          var retry = function() {
            $.getJSON($this.cfg.resumeContextPath, { "X-File-Id": $this.createXFileId(data.files[0]) }).done(function(result) {
              var uploadedBytes = result.uploadedBytes;
              data.uploadedBytes = uploadedBytes;
              data.data = null;
              data.submit();
            }).fail(function() {
              fu._trigger("fail", e, data);
            });
          };
          if (data.errorThrown !== "abort" && data.uploadedBytes < data.files[0].size && retries < fu.options.maxRetries) {
            retries += 1;
            data.context.data("retries", retries);
            window.setTimeout(retry, retries * fu.options.retryTimeout);
            return;
          }
          data.context.removeData("retries");
        }
        if ($this.cfg.onerror) {
          $this.cfg.onerror.call($this, data.jqXHR, data.textStatus, data.jqXHR.pfArgs);
        }
      },
      progress: function(e, data) {
        if (window.FormData) {
          var progress = parseInt(data.loaded / data.total * 100, 10);
          for (const file of data.files) {
            if (file.row) {
              var fileuploadProgress = file.row.children(".ui-fileupload-progress").find("> .ui-progressbar");
              fileuploadProgress.attr("aria-valuenow", progress);
              fileuploadProgress.find("> .ui-progressbar-value").css({
                width: progress + "%",
                display: "block"
              });
            }
          }
        }
      },
      done: function(e, data) {
        $this.uploadedFileCount += data.files.length;
        $this.removeFiles(data.files);
        const dataFileInput = $(PrimeFaces.escapeClientId(data.paramName + "_input"));
        if (dataFileInput.length > 0) {
          let dataTransferCleaned = new DataTransfer();
          for (const file of dataFileInput[0].files) {
            if (!data.files.includes(file)) {
              dataTransferCleaned.items.add(file);
            }
          }
          dataFileInput[0].files = dataTransferCleaned.files;
        }
        PrimeFaces.ajax.Response.handle(data.result, data.textStatus, data.jqXHR, null);
        if ($this.cfg.global) {
          $(document).trigger("pfAjaxSuccess", [data.jqXHR, this]);
        }
      },
      always: function(e, data) {
        if ($this.cfg.global) {
          $(document).trigger("pfAjaxComplete", [data.jqXHR, this, data.jqXHR.pfArgs]);
        }
        if ($this.cfg.oncomplete) {
          $this.cfg.oncomplete.call($this, data.jqXHR.pfArgs, data);
        }
      },
      chunkbeforesend: function(e, data) {
        var params = $this.createPostData();
        var file = data.files[0];
        params.push({ name: "X-File-Id", value: $this.createXFileId(file) });
        data.formData = params;
      }
    };
    this.jq.fileupload(this.ucfg);
  }
  /**
   * @override
   * @inheritdoc
   */
  destroy() {
    try {
      this.jq.fileupload("destroy");
    } catch (err) {
      PrimeFaces.debug("Could not destroy FileUpload: " + err);
    }
    super.destroy();
  }
  /**
   * Adds a file selected by the user to this upload widget.
   * @private
   * @param {File} file A file to add.
   * @param {JQueryFileUpload.AddCallbackData} data The data from the selected file.
   */
  addFileToRow(file, data) {
    var $this = this, row = $('<div class="ui-fileupload-row"></div>').append('<div class="ui-fileupload-preview"></td>').append('<div class="ui-fileupload-filename">' + PrimeFaces.escapeHTML(file.name) + "</div>").append("<div>" + PrimeFaces.utils.formatBytes(file.size) + "</div>").append('<div class="ui-fileupload-progress"></div>').append('<div><button class="ui-fileupload-cancel ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only"><span class="ui-button-icon-left ui-icon ui-icon ui-icon-close"></span><span class="ui-button-text">ui-button</span></button></div>').appendTo(this.filesTbody);
    if (this.filesTbody.children(".ui-fileupload-row").length > 1) {
      $('<div class="ui-widget-content"></div>').prependTo(row);
    }
    if (window.File && window.FileReader && _FileUpload.IMAGE_TYPES.test(file.name)) {
      var imageCanvas = $("<canvas></canvas>").appendTo(row.children("div.ui-fileupload-preview")), context = imageCanvas.get(0).getContext("2d"), winURL = window.URL || window.webkitURL, url = winURL.createObjectURL(file), img = new Image();
      img.onload = function() {
        var imgWidth = null, imgHeight = null, scale = 1;
        if ($this.cfg.previewWidth > this.width) {
          imgWidth = this.width;
        } else {
          imgWidth = $this.cfg.previewWidth;
          scale = $this.cfg.previewWidth / this.width;
        }
        imgHeight = parseInt(this.height * scale);
        imageCanvas.attr({ width: imgWidth, height: imgHeight });
        context.drawImage(img, 0, 0, imgWidth, imgHeight);
      };
      img.src = url;
    }
    row.children("div.ui-fileupload-progress").append('<div class="ui-progressbar ui-widget ui-widget-content ui-corner-all" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div class="ui-progressbar-value ui-widget-header ui-corner-left" style="display: none; width: 0%;"></div></div>');
    file.row = row;
    file.row.data("fileId", this.fileId++);
    file.row.data("filedata", data);
    this.files.push(file);
    if (this.cfg.auto) {
      this.upload();
    }
    this.postSelectFile(data);
  }
  /**
   * Called after a file was added to this upload widget. Takes care of the UI buttons.
   * @private
   * @param {JQueryFileUpload.AddCallbackData} data Data of the selected file.
   */
  postSelectFile(data) {
    if (this.files.length > 0) {
      this.enableButton(this.uploadButton);
      this.enableButton(this.cancelButton);
    }
    this.fileAddIndex++;
    if (this.fileAddIndex === data.originalFiles.length) {
      this.fileAddIndex = 0;
    }
  }
  /**
   * Sets up all events listeners for this file upload widget.
   * @private
   */
  bindEvents() {
    var $this = this;
    PrimeFaces.skinButton(this.buttonBar.children("button"));
    var isChooseButtonClick = false;
    this.chooseButton.off("mouseover.fileupload mouseout.fileupload mouseup.fileupload focus.fileupload blur.fileupload mousedown.fileupload click.fileupload keydown.fileupload");
    this.chooseButton.on("mouseover.fileupload", function() {
      var el = $(this);
      if (!el.prop("disabled")) {
        el.addClass("ui-state-hover");
      }
    }).on("mouseout.fileupload", function() {
      $(this).removeClass("ui-state-active ui-state-hover");
    }).on("mouseup.fileupload", function() {
      $(this).removeClass("ui-state-active").addClass("ui-state-hover");
    }).on("focus.fileupload", function() {
      $(this).addClass("ui-state-focus");
    }).on("blur.fileupload", function() {
      $(this).removeClass("ui-state-focus");
      isChooseButtonClick = false;
    }).on("mousedown.fileupload", function() {
      var el = $(this);
      if (!el.prop("disabled")) {
        el.addClass("ui-state-active").removeClass("ui-state-hover");
      }
    }).on("click.fileupload", function(e) {
      $this.show();
    }).on("keydown.fileupload", function(e) {
      if (PrimeFaces.utils.isActionKey(e)) {
        $this.show();
        $(this).trigger("blur");
        e.preventDefault();
      }
    });
    this.chooseButton.children("input").off("click.fileupload").on("click.fileupload", function(e) {
      if (isChooseButtonClick) {
        isChooseButtonClick = false;
        e.preventDefault();
        e.stopPropagation();
      } else {
        isChooseButtonClick = true;
      }
    });
    this.uploadButton.off("click.fileupload").on("click.fileupload", function(e) {
      e.preventDefault();
      if ($this.cfg.onupload) {
        if ($this.cfg.onupload.call($this) === false) {
          return false;
        }
      }
      $this.disableButton($this.uploadButton);
      $this.disableButton($this.cancelButton);
      $this.upload();
    });
    this.cancelButton.off("click.fileupload").on("click.fileupload", function(e) {
      $this.clear();
      $this.disableButton($this.uploadButton);
      $this.disableButton($this.cancelButton);
      e.preventDefault();
    });
    this.clearMessageLink.off("click.fileupload").on("click.fileupload", function(e) {
      $this.messageContainer.fadeOut(function() {
        $this.messageList.children().remove();
      });
      e.preventDefault();
    });
    this.rowCancelActionSelector = this.jqId + " .ui-fileupload-files .ui-fileupload-cancel";
    var namespace = ".fileupload" + this.id;
    $(document).off(namespace, this.rowCancelActionSelector).on("mouseover" + namespace, this.rowCancelActionSelector, null, function(e) {
      $(this).addClass("ui-state-hover");
    }).on("mouseout" + namespace, this.rowCancelActionSelector, null, function(e) {
      $(this).removeClass("ui-state-hover ui-state-active");
    }).on("mousedown" + namespace, this.rowCancelActionSelector, null, function(e) {
      $(this).addClass("ui-state-active").removeClass("ui-state-hover");
    }).on("mouseup" + namespace, this.rowCancelActionSelector, null, function(e) {
      $(this).addClass("ui-state-hover").removeClass("ui-state-active");
    }).on("focus" + namespace, this.rowCancelActionSelector, null, function(e) {
      $(this).addClass("ui-state-focus");
    }).on("blur" + namespace, this.rowCancelActionSelector, null, function(e) {
      $(this).removeClass("ui-state-focus");
    }).on("click" + namespace, this.rowCancelActionSelector, null, function(e) {
      var row = $(this).closest(".ui-fileupload-row");
      var removedFile = $.grep($this.files, function(value) {
        return value.row.data("fileId") === row.data("fileId");
      });
      if (removedFile[0]) {
        if (removedFile[0].ajaxRequest) {
          removedFile[0].ajaxRequest.abort();
        }
        $this.removeFile(removedFile[0]);
        if ($this.files.length === 0) {
          $this.disableButton($this.uploadButton);
          $this.disableButton($this.cancelButton);
        }
      }
      e.preventDefault();
    });
    this.addDestroyListener(function() {
      $(document).off(namespace);
    });
    if (this.dropZone) {
      this.dropZone.off("dragover.fucdropzone dragenter.fucdropzone dragleave.fucdropzone drop.fucdropzone dragdrop.fucdropzone").on("dragover.fucdropzone", function(e) {
        e.preventDefault();
      }).on("dragenter.fucdropzone", function(e) {
        e.preventDefault();
        $this.dragoverCount++;
        $this.dropZone.addClass("ui-state-drag");
      }).on("dragleave.fucdropzone", function(e) {
        $this.dragoverCount--;
        if ($this.dragoverCount === 0) {
          $this.dropZone.removeClass("ui-state-drag");
        }
      }).on("drop.fucdropzone dragdrop.fucdropzone", function(e) {
        $this.dragoverCount = 0;
        $this.dropZone.removeClass("ui-state-drag");
      });
    }
  }
  /**
   * Uploads the selected files to the server.
   * @private
   */
  upload() {
    if (this.cfg.global) {
      $(document).trigger("pfAjaxStart");
    }
    for (const file of this.files) {
      file.ajaxRequest = file.row.data("filedata");
      file.ajaxRequest.submit();
    }
  }
  /**
   * Creates the HTML post data for uploading the selected files.
   * @private
   * @return {PrimeFaces.ajax.RequestParameter} Parameters to post when upload the files.
   */
  createPostData() {
    var process = this.cfg.process ? this.id + " " + PrimeFaces.expressions.SearchExpressionFacade.resolveComponents(this.jq, this.cfg.process).join(" ") : this.id;
    var params = this.form.serializeArray();
    var parameterPrefix = PrimeFaces.ajax.Request.extractParameterNamespace(this.form);
    PrimeFaces.ajax.Request.addParam(params, PrimeFaces.PARTIAL_REQUEST_PARAM, true, parameterPrefix);
    PrimeFaces.ajax.Request.addParam(params, PrimeFaces.PARTIAL_PROCESS_PARAM, process, parameterPrefix);
    PrimeFaces.ajax.Request.addParam(params, PrimeFaces.PARTIAL_SOURCE_PARAM, this.id, parameterPrefix);
    PrimeFaces.ajax.Request.addParam(params, this.id + "_totalFilesCount", this.files.length, parameterPrefix);
    if (this.cfg.update) {
      var update = PrimeFaces.expressions.SearchExpressionFacade.resolveComponents(this.jq, this.cfg.update).join(" ");
      PrimeFaces.ajax.Request.addParam(params, PrimeFaces.PARTIAL_UPDATE_PARAM, update, parameterPrefix);
    }
    return params;
  }
  /**
   * Creates a unique identifier (file key) for a given file. That identifier consists e.g. of the name of the
   * uploaded file, its last modified-attribute etc. This is used by the server to identify uploaded files.
   * @private
   * @param {File} file A file for which to create an identifier.
   * @return {string} An identifier for the given file.
   */
  createXFileId(file) {
    return [file.name, file.lastModified, file.type, file.size].join();
  }
  /**
   * Removes the given uploaded file from this upload widget.
   * @private
   * @param {PrimeFaces.widget.FileUpload.UploadFile[]} files Files to remove from this widget.
   */
  removeFiles(files) {
    for (const file of files) {
      this.removeFile(file);
    }
  }
  /**
   * Removes the given uploaded file from this upload widget.
   * @private
   * @param {PrimeFaces.widget.FileUpload.UploadFile} file File to remove from this widget.
   */
  removeFile(file) {
    var $this = this;
    this.files = $.grep(this.files, function(value) {
      return value.row.data("fileId") === file.row.data("fileId");
    }, true);
    $this.removeFileRow(file.row);
    file.row = null;
  }
  /**
   * Removes a row with an uploaded file form this upload widget.
   * @private
   * @param {JQuery} row Row of an uploaded file to remove.
   */
  removeFileRow(row) {
    if (row) {
      this.disableButton(row.find("> div:last-child").children(".ui-fileupload-cancel"));
      row.fadeOut(function() {
        $(this).remove();
      });
    }
  }
  /**
   * Clears this file upload field, i.e. removes all uploaded files.
   */
  clear() {
    for (const file of this.files) {
      this.removeFileRow(file.row);
      file.row = null;
    }
    this.clearMessages();
    this.files = [];
  }
  /**
   * Displays the current error messages on this widget.
   * @private
   */
  renderMessages() {
    var markup = '<div class="ui-messages ui-widget ui-helper-hidden ui-fileupload-messages"><div class="ui-messages-error ui-corner-all"><a class="ui-messages-close" href="#"><span class="ui-icon ui-icon-close"></span></a><span class="ui-messages-error-icon"></span><ul></ul></div></div>';
    this.messageContainer = $(markup).prependTo(this.content);
    this.messageList = this.messageContainer.find("> .ui-messages-error > ul");
    this.clearMessageLink = this.messageContainer.find("> .ui-messages-error > a.ui-messages-close");
  }
  /**
   * Removes all error messages that are shown for this widget.
   */
  clearMessages() {
    this.messageContainer.hide();
    this.messageList.children().remove();
  }
  /**
   * Shows the given error message
   * @param {PrimeFaces.FacesMessage} msg Error message to show.
   * @private
   */
  showMessage(msg) {
    this.messageList.append('<li><span class="ui-messages-error-summary">' + PrimeFaces.escapeHTML(msg.summary) + '</span><span class="ui-messages-error-detail">' + PrimeFaces.escapeHTML(msg.detail) + "</span></li>");
    this.messageContainer.show();
    msg.rendered = true;
  }
  /**
   * Disabled the given file upload button.
   * @param {JQuery} btn Button to disabled.
   * @private
   */
  disableButton(btn) {
    btn.prop("disabled", true).attr("aria-disabled", true).addClass("ui-state-disabled").removeClass("ui-state-hover ui-state-active ui-state-focus");
  }
  /**
   * Enables the given file upload button.
   * @param {JQuery} btn Button to enable.
   * @private
   */
  enableButton(btn) {
    btn.prop("disabled", false).attr("aria-disabled", false).removeClass("ui-state-disabled");
  }
  /**
   * Brings up the native file selection dialog.
   */
  show() {
    this.chooseButton.children("input").trigger("click");
  }
};
/**
 * Regular expression that matches image files for which a preview can be shown.
 * @type {RegExp}
 */
__publicField(_FileUpload, "IMAGE_TYPES", /([./])(gif|jpe?g|png)$/i);
var FileUpload = _FileUpload;
export {
  FileUpload
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ZpbGV1cGxvYWQvMi1maWxldXBsb2FkLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgXCJibHVlaW1wLWZpbGUtdXBsb2FkXCI7XG5pbXBvcnQgXCJibHVlaW1wLWZpbGUtdXBsb2FkL2pzL2pxdWVyeS5pZnJhbWUtdHJhbnNwb3J0LmpzXCI7XG5cbmltcG9ydCB7IEJhc2VXaWRnZXQgfSBmcm9tIFwiLi4vY29yZS9jb3JlLndpZGdldC5qc1wiO1xuXG4vKipcbiAqIF9fUHJpbWVGYWNlcyBGaWxlVXBsb2FkIFdpZGdldF9fXG4gKlxuICogRmlsZVVwbG9hZCBnb2VzIGJleW9uZCB0aGUgYnJvd3NlciBpbnB1dCBgdHlwZT1cImZpbGVcImAgZnVuY3Rpb25hbGl0eSBhbmQgZmVhdHVyZXMgYW4gSFRNTDUgcG93ZXJlZCByaWNoIHNvbHV0aW9uIHdpdGhcbiAqIGdyYWNlZnVsIGRlZ3JhZGF0aW9uIGZvciBsZWdhY3kgYnJvd3NlcnMuXG4gKlxuICogQHR5cGVkZWYgUHJpbWVGYWNlcy53aWRnZXQuRmlsZVVwbG9hZC5PbkFkZENhbGxiYWNrIENhbGxiYWNrIGludm9rZWQgd2hlbiBmaWxlIHdhcyBzZWxlY3RlZCBhbmQgaXMgYWRkZWQgdG8gdGhpc1xuICogd2lkZ2V0LiBTZWUgYWxzbyB7QGxpbmsgRmlsZVVwbG9hZENmZy5vbkFkZH0uXG4gKiBAdGhpcyB7UHJpbWVGYWNlcy53aWRnZXQuRmlsZVVwbG9hZH0gUHJpbWVGYWNlcy53aWRnZXQuRmlsZVVwbG9hZC5PbkFkZENhbGxiYWNrXG4gKiBAcGFyYW0ge0ZpbGV9IFByaW1lRmFjZXMud2lkZ2V0LkZpbGVVcGxvYWQuT25BZGRDYWxsYmFjay5maWxlIFRoZSBmaWxlIHRoYXQgd2FzIHNlbGVjdGVkIGZvciB0aGUgdXBsb2FkLlxuICogQHBhcmFtIHsocHJvY2Vzc2VkRmlsZTogRmlsZSkgPT4gdm9pZH0gUHJpbWVGYWNlcy53aWRnZXQuRmlsZVVwbG9hZC5PbkFkZENhbGxiYWNrLmNhbGxiYWNrIENhbGxiYWNrIHRoYXQgbmVlZHMgdG8gYmVcbiAqIGludm9rZWQgd2l0aCB0aGUgZmlsZSB0aGF0IHNob3VsZCBiZSBhZGRlZCB0byB0aGUgdXBsb2FkIHF1ZXVlLlxuICpcbiAqIEB0eXBlZGVmIFByaW1lRmFjZXMud2lkZ2V0LkZpbGVVcGxvYWQuT25DYW5jZWxDYWxsYmFjayBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBhIGZpbGUgdXBsb2FkIHdhcyBjYW5jZWxlZC4gU2VlXG4gKiBhbHNvIHtAbGluayBGaWxlVXBsb2FkQ2ZnLm9uY2FuY2VsfS5cbiAqIEB0aGlzIHtQcmltZUZhY2VzLndpZGdldC5GaWxlVXBsb2FkfSBQcmltZUZhY2VzLndpZGdldC5GaWxlVXBsb2FkLk9uQ2FuY2VsQ2FsbGJhY2tcbiAqXG4gKiBAdHlwZWRlZiBQcmltZUZhY2VzLndpZGdldC5GaWxlVXBsb2FkLk9uVXBsb2FkQ2FsbGJhY2sgQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgdGhlIGZpbGVzIGFyZSBzZW50LlxuICogSWYgdGhpcyBjYWxsYmFjayByZXR1cm5zIGZhbHNlLCB0aGUgZmlsZSB1cGxvYWQgcmVxdWVzdCBpcyBub3Qgc3RhcnRlZC4gU2VlIGFsc28ge0BsaW5rIEZpbGVVcGxvYWRDZmcub251cGxvYWR9LlxuICogQHRoaXMge1ByaW1lRmFjZXMud2lkZ2V0LkZpbGVVcGxvYWR9IFByaW1lRmFjZXMud2lkZ2V0LkZpbGVVcGxvYWQuT25VcGxvYWRDYWxsYmFja1xuICpcbiAqIEB0eXBlZGVmIFByaW1lRmFjZXMud2lkZ2V0LkZpbGVVcGxvYWQuT25Db21wbGV0ZUNhbGxiYWNrIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCBhZnRlciBhIGZpbGUgd2FzIHVwbG9hZGVkIHRvIHRoZVxuICogc2VydmVyIHN1Y2Nlc3NmdWxseS4gU2VlIGFsc28ge0BsaW5rIEZpbGVVcGxvYWRDZmcub25jb21wbGV0ZX0uXG4gKiBAdGhpcyB7UHJpbWVGYWNlcy53aWRnZXQuRmlsZVVwbG9hZH0gUHJpbWVGYWNlcy53aWRnZXQuRmlsZVVwbG9hZC5PbkNvbXBsZXRlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7UHJpbWVGYWNlcy5hamF4LlByaW1lRmFjZXNBcmdzfSBQcmltZUZhY2VzLndpZGdldC5GaWxlVXBsb2FkLk9uQ29tcGxldGVDYWxsYmFjay5wZkFyZ3MgVGhlIGFkZGl0aW9uYWxcbiAqIGFyZ3VtZW50cyBmcm9tIHRoZSBqUXVlcnkgWEhSIHJlcXVlc3RzLlxuICogQHBhcmFtIHtKUXVlcnlGaWxlVXBsb2FkLkpRdWVyeUFqYXhDYWxsYmFja0RhdGF9IFByaW1lRmFjZXMud2lkZ2V0LkZpbGVVcGxvYWQuT25Db21wbGV0ZUNhbGxiYWNrLmRhdGEgRGV0YWlscyBhYm91dFxuICogdGhlIHVwbG9hZGVkIGZpbGUgb3IgZmlsZXMuXG4gKlxuICogQHR5cGVkZWYgUHJpbWVGYWNlcy53aWRnZXQuRmlsZVVwbG9hZC5PbkVycm9yQ2FsbGJhY2sgQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gYSBmaWxlIGNvdWxkIG5vdCBiZSB1cGxvYWRlZCB0b1xuICogdGhlIHNlcnZlci4gU2VlIGFsc28ge0BsaW5rIEZpbGVVcGxvYWRDZmcub25lcnJvcn0uXG4gKiBAdGhpcyB7UHJpbWVGYWNlcy53aWRnZXQuRmlsZVVwbG9hZH0gUHJpbWVGYWNlcy53aWRnZXQuRmlsZVVwbG9hZC5PbkVycm9yQ2FsbGJhY2tcbiAqIEBwYXJhbSB7SlF1ZXJ5LmpxWEhSfSBQcmltZUZhY2VzLndpZGdldC5GaWxlVXBsb2FkLk9uRXJyb3JDYWxsYmFjay5qcVhIUiBUaGUgWEhSIG9iamVjdCBmcm9tIHRoZSBIVFRQIHJlcXVlc3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gUHJpbWVGYWNlcy53aWRnZXQuRmlsZVVwbG9hZC5PbkVycm9yQ2FsbGJhY2sudGV4dFN0YXR1cyBUaGUgSFRUUCBzdGF0dXMgdGV4dCBvZiB0aGUgZmFpbGVkIHJlcXVlc3QuXG4gKiBAcGFyYW0ge1ByaW1lRmFjZXMuYWpheC5QcmltZUZhY2VzQXJnc30gUHJpbWVGYWNlcy53aWRnZXQuRmlsZVVwbG9hZC5PbkVycm9yQ2FsbGJhY2sucGZBcmdzIFRoZSBhZGRpdGlvbmFsIGFyZ3VtZW50c1xuICogZnJvbSB0aGUgalF1ZXJ5IFhIUiByZXF1ZXN0LlxuICpcbiAqIEB0eXBlZGVmIFByaW1lRmFjZXMud2lkZ2V0LkZpbGVVcGxvYWQuT25TdGFydENhbGxiYWNrIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIGEgZmlsZSB1cGxvYWQsXG4gKiB3aGVuIGEgZmlsZSBpcyBzZW50IHRvIHRoZSBzZXJ2ZXIuIFNlZSBhbHNvIHtAbGluayBGaWxlVXBsb2FkQ2ZnLm9uc3RhcnR9LlxuICogQHRoaXMge1ByaW1lRmFjZXMud2lkZ2V0LkZpbGVVcGxvYWR9IFByaW1lRmFjZXMud2lkZ2V0LkZpbGVVcGxvYWQuT25TdGFydENhbGxiYWNrXG4gKlxuICogQGludGVyZmFjZSB7UHJpbWVGYWNlcy53aWRnZXQuRmlsZVVwbG9hZC5VcGxvYWRGaWxlfSBVcGxvYWRGaWxlIFJlcHJlc2VudHMgYW4gdXBsb2FkZWQgZmlsZSBhZGRlZCB0byB0aGUgdXBsb2FkXG4gKiB3aWRnZXQuXG4gKiBAcHJvcCB7SlF1ZXJ5fSBVcGxvYWRGaWxlLnJvdyBSb3cgb2YgYW4gdXBsb2FkZWQgZmlsZS5cbiAqXG4gKiBAcHJvcCB7SlF1ZXJ5fSBidXR0b25CYXIgVGhlIERPTSBlbGVtZW50IGZvciB0aGUgYmFyIHdpdGggdGhlIGJ1dHRvbnMgb2YgdGhpcyB3aWRnZXQuXG4gKiBAcHJvcCB7bnVtYmVyfSBkcmFnb3ZlckNvdW50IEFtb3VudCBvZiBkcmFnb3ZlciBvbiBkcm9wIHpvbmUgYW5kIGl0cyBjaGlsZHJlbi5cbiAqIEBwcm9wIHtzdHJpbmd9IGN1c3RvbURyb3Bab25lIEN1c3RvbSBkcm9wIHpvbmUgdG8gdXNlIGZvciBkcmFnIGFuZCBkcm9wLlxuICogQHByb3Age3N0cmluZ30gZHJvcFpvbmUgRHJvcCB6b25lIHRvIHVzZSBmb3IgZHJhZyBhbmQgZHJvcC5cbiAqIEBwcm9wIHtKUXVlcnl9IGNhbmNlbEJ1dHRvbiBUaGUgRE9NIGVsZW1lbnQgZm9yIHRoZSBidXR0b24gZm9yIGNhbmNlbGluZyBhIGZpbGUgdXBsb2FkLlxuICogQHByb3Age0pRdWVyeX0gY2hvb3NlQnV0dG9uIFRoZSBET00gZWxlbWVudCBmb3IgdGhlIGJ1dHRvbiBmb3Igc2VsZWN0aW5nIGEgZmlsZS5cbiAqIEBwcm9wIHtKUXVlcnl9IGNsZWFyTWVzc2FnZUxpbmsgVGhlIERPTSBlbGVtZW50IGZvciB0aGUgYnV0dG9uIHRvIGNsZWFyIHRoZSBmaWxlIHVwbG9hZCBtZXNzYWdlcyAod2hpY2ggaW5mb3JtIHRoZVxuICogdXNlciBhYm91dCB3aGV0aGVyIGEgZmlsZSB3YXMgdXBsb2FkZWQpLlxuICogQHByb3Age0pRdWVyeX0gY29udGVudCBUaGUgRE9NIGVsZW1lbnQgZm9yIHRoZSBjb250ZW50IG9mIHRoaXMgd2lkZ2V0LlxuICogQHByb3Age251bWJlcn0gZmlsZUFkZEluZGV4IEN1cnJlbnQgaW5kZXggd2hlcmUgdG8gYWRkIGZpbGVzLlxuICogQHByb3Age3N0cmluZ30gZmlsZUlkIElEIG9mIHRoZSBjdXJyZW50IGZpbGUuXG4gKiBAcHJvcCB7RmlsZVtdfSBmaWxlcyBMaXN0IG9mIGN1cnJlbnRseSBzZWxlY3RlZCBmaWxlcy5cbiAqIEBwcm9wIHtKUXVlcnl9IGZpbGVzVGJvZHkgVGhlIERPTSBlbGVtZW50IGZvciB0aGUgdGFibGUgdGJvZHkgd2l0aCB0aGUgZmlsZXMuXG4gKiBAcHJvcCB7SlF1ZXJ5fSBmb3JtIFRoZSBET00gZWxlbWVudCBmb3IgdGhlIGZvcm0gY29udGFpbmluZyB0aGlzIHVwbG9hZCB3aWRnZXQuXG4gKiBAcHJvcCB7SlF1ZXJ5fSBtZXNzYWdlQ29udGFpbmVyIFRoZSBET00gZWxlbWVudCBvZiB0aGUgY29udGFpbmVyIHdpdGggdGhlIGZpbGUgdXBsb2FkIG1lc3NhZ2VzIHdoaWNoIGluZm9ybSB0aGUgdXNlclxuICogYWJvdXQgd2hldGhlciBhIGZpbGUgd2FzIHVwbG9hZGVkLlxuICogQHByb3Age0pRdWVyeX0gbWVzc2FnZUxpc3QgVGhlIERPTSBlbGVtZW50IG9mIHRoZSBVTCBsaXN0IGVsZW1lbnQgd2l0aCB0aGUgZmlsZSB1cGxvYWQgbWVzc2FnZXMgd2hpY2ggaW5mb3JtIHRoZSB1c2VyXG4gKiBhYm91dCB3aGV0aGVyIGEgZmlsZSB3YXMgdXBsb2FkZWQuXG4gKiBAcHJvcCB7c3RyaW5nfSByb3dDYW5jZWxBY3Rpb25TZWxlY3RvciBTZWxlY3RvciBmb3IgdGhlIGJ1dHRvbiBmb3IgY2FuY2VsaW5nIGEgZmlsZSB1cGxvYWQuXG4gKiBAcHJvcCB7SlF1ZXJ5RmlsZVVwbG9hZC5GaWxlVXBsb2FkT3B0aW9uc30gdWNmZyBPcHRpb25zIGZvciB0aGUgQmx1ZUltcCBqUXVlcnkgZmlsZSB1cGxvYWQgcGx1Z2luLlxuICogQHByb3Age0pRdWVyeX0gdXBsb2FkQnV0dG9uIFRoZSBET00gZWxlbWVudCBmb3IgdGhlIGJ1dHRvbiBmb3Igc3RhcnRpbmcgdGhlIGZpbGUgdXBsb2FkLlxuICogQHByb3Age251bWJlcn0gdXBsb2FkZWRGaWxlQ291bnQgTnVtYmVyIG9mIGN1cnJlbnRseSB1cGxvYWRlZCBmaWxlcy5cbiAqXG4gKiBAaW50ZXJmYWNlIHtQcmltZUZhY2VzLndpZGdldC5GaWxlVXBsb2FkQ2ZnfSBjZmcgVGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSB7QGxpbmsgIEZpbGVVcGxvYWR8IEZpbGVVcGxvYWQgd2lkZ2V0fS5cbiAqIFlvdSBjYW4gYWNjZXNzIHRoaXMgY29uZmlndXJhdGlvbiB2aWEge0BsaW5rIFByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXQuY2ZnfEJhc2VXaWRnZXQuY2ZnfS4gUGxlYXNlIG5vdGUgdGhhdCB0aGlzXG4gKiBjb25maWd1cmF0aW9uIGlzIHVzdWFsbHkgbWVhbnQgdG8gYmUgcmVhZC1vbmx5IGFuZCBzaG91bGQgbm90IGJlIG1vZGlmaWVkLlxuICogQGV4dGVuZHMge1ByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXRDZmd9IGNmZ1xuICpcbiAqIEBwcm9wIHtSZWdFeHB9IGNmZy5hbGxvd1R5cGVzIFJlZ3VsYXIgZXhwcmVzc2lvbiBmb3IgYWNjZXB0ZWQgZmlsZSB0eXBlcy5cbiAqIEBwcm9wIHtib29sZWFufSBjZmcuYXV0byBXaGVuIHNldCB0byB0cnVlLCBzZWxlY3RpbmcgYSBmaWxlIHN0YXJ0cyB0aGUgdXBsb2FkIHByb2Nlc3MgaW1wbGljaXRseS5cbiAqIEBwcm9wIHtib29sZWFufSBjZmcuZG5kIFdoZXRoZXIgZHJhZyBhbmQgZHJvcCBpcyBlbmFibGVkLlxuICogQHByb3Age3N0cmluZ30gY2ZnLmRyb3Bab25lIEN1c3RvbSBkcm9wIHpvbmUgdG8gdXNlIGZvciBkcmFnIGFuZCBkcm9wLlxuICogQHByb3Age2Jvb2xlYW59IGNmZy5kaXNhYmxlZCBXaGV0aGVyIHRoaXMgZmlsZSB1cGxvYWQgaXMgZGlzYWJsZWQuXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2ZnLmdsb2JhbCBHbG9iYWwgQUpBWCByZXF1ZXN0cyBhcmUgbGlzdGVuZWQgdG8gYnkgYGFqYXhTdGF0dXNgLiBXaGVuIGBmYWxzZWAsIGBhamF4U3RhdHVzYCB3aWxsIG5vdFxuICogZ2V0IHRyaWdnZXJlZC5cbiAqIEBwcm9wIHtQcmltZUZhY2VzLndpZGdldC5GaWxlVXBsb2FkLk9uQWRkQ2FsbGJhY2t9IGNmZy5vbkFkZCBDYWxsYmFjayBpbnZva2VkIHdoZW4gYW4gdXBsb2FkZWQgZmlsZSBpcyBhZGRlZC5cbiAqIEBwcm9wIHtQcmltZUZhY2VzLndpZGdldC5GaWxlVXBsb2FkLk9uVXBsb2FkQ2FsbGJhY2t9IGNmZy5vbnVwbG9hZCBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSB0aGUgZmlsZXMgYXJlIHNlbnQuXG4gKiBJZiB0aGlzIGNhbGxiYWNrIHJldHVybnMgZmFsc2UsIHRoZSBmaWxlIHVwbG9hZCByZXF1ZXN0IGlzIG5vdCBzdGFydGVkLlxuICogQHByb3Age1ByaW1lRmFjZXMud2lkZ2V0LkZpbGVVcGxvYWQuT25DYW5jZWxDYWxsYmFja30gY2ZnLm9uY2FuY2VsIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuIGEgZmlsZSB1cGxvYWQgd2FzXG4gKiBjYW5jZWxlZC5cbiAqIEBwcm9wIHtQcmltZUZhY2VzLndpZGdldC5GaWxlVXBsb2FkLk9uQ29tcGxldGVDYWxsYmFja30gY2ZnLm9uY29tcGxldGUgQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIGFmdGVyIGEgZmlsZSB3YXNcbiAqIHVwbG9hZGVkIHRvIHRoZSBzZXJ2ZXIgc3VjY2Vzc2Z1bGx5LlxuICogQHByb3Age1ByaW1lRmFjZXMud2lkZ2V0LkZpbGVVcGxvYWQuT25FcnJvckNhbGxiYWNrfSBjZmcub25lcnJvciBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlbiBhIGZpbGUgY291bGQgbm90IGJlXG4gKiB1cGxvYWRlZCB0byB0aGUgc2VydmVyLlxuICogQHByb3Age1ByaW1lRmFjZXMud2lkZ2V0LkZpbGVVcGxvYWQuT25TdGFydENhbGxiYWNrfSBjZmcub25zdGFydCBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgYXQgdGhlIGJlZ2lubmluZyBvZiBhIGZpbGVcbiAqIHVwbG9hZCwgd2hlbiBhIGZpbGUgaXMgc2VudCB0byB0aGUgc2VydmVyLlxuICogQHByb3Age251bWJlcn0gY2ZnLnByZXZpZXdXaWR0aCBXaWR0aCBmb3IgaW1hZ2UgcHJldmlld3MgaW4gcGl4ZWxzLlxuICogQHByb3Age3N0cmluZ30gY2ZnLnByb2Nlc3MgQ29tcG9uZW50KHMpIHRvIHByb2Nlc3MgaW4gZmlsZXVwbG9hZCByZXF1ZXN0LlxuICogQHByb3Age2Jvb2xlYW59IGNmZy5zZXF1ZW50aWFsVXBsb2FkcyBgdHJ1ZWAgdG8gdXBsb2FkIGZpbGVzIG9uZSBhZnRlciBlYWNoIG90aGVyLCBgZmFsc2VgIHRvIHVwbG9hZCBpbiBwYXJhbGxlbC5cbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy51cGRhdGUgQ29tcG9uZW50KHMpIHRvIHVwZGF0ZSBhZnRlciBmaWxldXBsb2FkIGNvbXBsZXRlcy5cbiAqIEBwcm9wIHtudW1iZXJ9IGNmZy5tYXhDaHVua1NpemUgVG8gdXBsb2FkIGxhcmdlIGZpbGVzIGluIHNtYWxsZXIgY2h1bmtzLCBzZXQgdGhpcyBvcHRpb24gdG8gYSBwcmVmZXJyZWQgbWF4aW11bSBjaHVua1xuICogc2l6ZS4gSWYgc2V0IHRvIGAwYCwgYG51bGxgIG9yIGB1bmRlZmluZWRgLCBvciB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSByZXF1aXJlZCBCbG9iIEFQSSwgZmlsZXMgd2lsbCBiZVxuICogdXBsb2FkZWQgYXMgYSB3aG9sZS5cbiAqIEBwcm9wIHtudW1iZXJ9IGNmZy5tYXhSZXRyaWVzIE9ubHkgZm9yIGNodW5rZWQgZmlsZSB1cGxvYWQ6IEFtb3VudCBvZiByZXRyaWVzIHdoZW4gdXBsb2FkIGdldHMgaW50ZXJydXB0ZWQgZHVlIHRvXG4gKiBlLmcuIGFuIHVuc3RhYmxlIG5ldHdvcmsgY29ubmVjdGlvbi5cbiAqIEBwcm9wIHtudW1iZXJ9IGNmZy5yZXRyeVRpbWVvdXQgT25seSBmb3IgY2h1bmtlZCBmaWxlIHVwbG9hZDogKEJhc2UpIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIHdhaXQgdW50aWwgdGhlIG5leHRcbiAqIHJldHJ5LiBJdCBpcyBtdWx0aXBsaWVkIHdpdGggdGhlIHJldHJ5IGNvdW50LiAoZmlyc3QgcmV0cnk6IGByZXRyeVRpbWVvdXQgKiAxYCwgc2Vjb25kIHJldHJ5OiBgcmV0cnlUaW1lb3V0ICogMmAsXG4gKiAuLi4pXG4gKiBAcHJvcCB7c3RyaW5nfSBjZmcucmVzdW1lQ29udGV4dFBhdGggU2VydmVyLXNpZGUgcGF0aCB3aGljaCBwcm92aWRlcyBpbmZvcm1hdGlvbiB0byByZXN1bWUgY2h1bmtlZCBmaWxlIHVwbG9hZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWQgZXh0ZW5kcyBCYXNlV2lkZ2V0IHtcblxuICAgIC8qKlxuICAgICAqIFJlZ3VsYXIgZXhwcmVzc2lvbiB0aGF0IG1hdGNoZXMgaW1hZ2UgZmlsZXMgZm9yIHdoaWNoIGEgcHJldmlldyBjYW4gYmUgc2hvd24uXG4gICAgICogQHR5cGUge1JlZ0V4cH1cbiAgICAgKi9cbiAgICBzdGF0aWMgSU1BR0VfVFlQRVM9IC8oWy4vXSkoZ2lmfGpwZT9nfHBuZykkL2k7XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy5QYXJ0aWFsV2lkZ2V0Q2ZnPFRDZmc+fSBjZmdcbiAgICAgKi9cbiAgICBpbml0KGNmZykge1xuICAgICAgICBzdXBlci5pbml0KGNmZyk7XG4gICAgICAgIGlmKHRoaXMuY2ZnLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVjZmcgPSB7fTtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5qcS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uQmFyID0gdGhpcy5qcS5jaGlsZHJlbignLnVpLWZpbGV1cGxvYWQtYnV0dG9uYmFyJyk7XG4gICAgICAgIHRoaXMuZHJhZ292ZXJDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuY3VzdG9tRHJvcFpvbmUgPSB0aGlzLmNmZy5kcm9wWm9uZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IFByaW1lRmFjZXMuZXhwcmVzc2lvbnMuU2VhcmNoRXhwcmVzc2lvbkZhY2FkZS5yZXNvbHZlQ29tcG9uZW50c0FzU2VsZWN0b3IodGhpcy5qcSwgdGhpcy5jZmcuZHJvcFpvbmUpXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIHRoaXMuZHJvcFpvbmUgPSAodGhpcy5jZmcuZG5kID09PSBmYWxzZSkgPyBudWxsIDogdGhpcy5jdXN0b21Ecm9wWm9uZSB8fCB0aGlzLmpxO1xuICAgICAgICB0aGlzLmNob29zZUJ1dHRvbiA9IHRoaXMuYnV0dG9uQmFyLmNoaWxkcmVuKCcudWktZmlsZXVwbG9hZC1jaG9vc2UnKTtcbiAgICAgICAgdGhpcy51cGxvYWRCdXR0b24gPSB0aGlzLmJ1dHRvbkJhci5jaGlsZHJlbignLnVpLWZpbGV1cGxvYWQtdXBsb2FkJyk7XG4gICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uID0gdGhpcy5idXR0b25CYXIuY2hpbGRyZW4oJy51aS1maWxldXBsb2FkLWNhbmNlbCcpO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmpxLmNoaWxkcmVuKCcudWktZmlsZXVwbG9hZC1jb250ZW50Jyk7XG4gICAgICAgIHRoaXMuZmlsZXNUYm9keSA9IHRoaXMuY29udGVudC5maW5kKCc+IGRpdi51aS1maWxldXBsb2FkLWZpbGVzID4gZGl2Jyk7XG4gICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5maWxlQWRkSW5kZXggPSAwO1xuICAgICAgICB0aGlzLmNmZy5wcmV2aWV3V2lkdGggPSB0aGlzLmNmZy5wcmV2aWV3V2lkdGggfHwgODA7XG4gICAgICAgIHRoaXMuY2ZnLm1heFJldHJpZXMgPSB0aGlzLmNmZy5tYXhSZXRyaWVzIHx8IDMwO1xuICAgICAgICB0aGlzLmNmZy5yZXRyeVRpbWVvdXQgPSB0aGlzLmNmZy5yZXRyeVRpbWVvdXQgfHwgMTAwMDtcbiAgICAgICAgdGhpcy5jZmcuZ2xvYmFsID0gdGhpcy5jZmcuZ2xvYmFsICE9PSBmYWxzZTtcbiAgICAgICAgdGhpcy51cGxvYWRlZEZpbGVDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuZmlsZUlkID0gMDtcblxuICAgICAgICB0aGlzLnJlbmRlck1lc3NhZ2VzKCk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcblxuICAgICAgICB2YXIgcGFyYW1ldGVyUHJlZml4ID0gUHJpbWVGYWNlcy5hamF4LlJlcXVlc3QuZXh0cmFjdFBhcmFtZXRlck5hbWVzcGFjZSh0aGlzLmZvcm0pO1xuXG4gICAgICAgIHRoaXMudWNmZyA9IHtcbiAgICAgICAgICAgIHVybDogUHJpbWVGYWNlcy5hamF4LlV0aWxzLmdldFBvc3RVcmwodGhpcy5mb3JtKSxcbiAgICAgICAgICAgIHBvcnRsZXRGb3JtczogUHJpbWVGYWNlcy5hamF4LlV0aWxzLmdldFBvcmxldEZvcm1zKHRoaXMuZm9ybSwgcGFyYW1ldGVyUHJlZml4KSxcbiAgICAgICAgICAgIHBhcmFtTmFtZTogQXJyYXkuZnJvbSh7bGVuZ3RoOiA5OTl9LCAoXywgaSkgPT4gdGhpcy5pZCksIC8vIHJlcXVpcmVkIHNvIGRyYWfCtG7CtGRyb3AgaGFzIGZvciBlYWNoIGZpbGUgdGhlIGlkIChHaXRodWIgIzExODc5KVxuICAgICAgICAgICAgZGF0YVR5cGU6ICd4bWwnLFxuICAgICAgICAgICAgZHJvcFpvbmU6IHRoaXMuZHJvcFpvbmUsXG4gICAgICAgICAgICBzZXF1ZW50aWFsVXBsb2FkczogdGhpcy5jZmcuc2VxdWVudGlhbFVwbG9hZHMsXG4gICAgICAgICAgICBtYXhDaHVua1NpemU6IHRoaXMuY2ZnLm1heENodW5rU2l6ZSxcbiAgICAgICAgICAgIG1heFJldHJpZXM6IHRoaXMuY2ZnLm1heFJldHJpZXMsXG4gICAgICAgICAgICByZXRyeVRpbWVvdXQ6IHRoaXMuY2ZnLnJldHJ5VGltZW91dCxcbiAgICAgICAgICAgIHNvdXJjZTogJHRoaXMuaWQsXG4gICAgICAgICAgICBmb3JtRGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICR0aGlzLmNyZWF0ZVBvc3REYXRhKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oeGhyLCBzZXR0aW5ncykge1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdGYWNlcy1SZXF1ZXN0JywgJ3BhcnRpYWwvYWpheCcpO1xuICAgICAgICAgICAgICAgIHhoci5wZlNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgeGhyLnBmQXJncyA9IHt9OyAvLyBkZWZhdWx0IHNob3VsZCBiZSBhbiBlbXB0eSBvYmplY3RcblxuICAgICAgICAgICAgICAgIHZhciBmaWxlID0gc2V0dGluZ3MuZmlsZXMgPyBzZXR0aW5ncy5maWxlc1swXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUgJiYgZmlsZS53ZWJraXRSZWxhdGl2ZVBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuZGF0YS5hcHBlbmQoJ1gtRmlsZS1XZWJraXQtUmVsYXRpdmUtUGF0aCcsIGZpbGUud2Via2l0UmVsYXRpdmVQYXRoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZigkdGhpcy5jZmcuZ2xvYmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ3BmQWpheFNlbmQnLCBbeGhyLCB0aGlzXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXJ0OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYoJHRoaXMuY2ZnLm9uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuY2ZnLm9uc3RhcnQuY2FsbCgkdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZDogZnVuY3Rpb24oZSwgZGF0YSkge1xuICAgICAgICAgICAgICAgICR0aGlzLmNob29zZUJ1dHRvbi5yZW1vdmVDbGFzcygndWktc3RhdGUtaG92ZXIgdWktc3RhdGUtZm9jdXMnKTtcblxuICAgICAgICAgICAgICAgIGlmKCR0aGlzLmZpbGVBZGRJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5jbGVhck1lc3NhZ2VzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHVwZGF0ZSA9IFByaW1lRmFjZXMuZXhwcmVzc2lvbnMuU2VhcmNoRXhwcmVzc2lvbkZhY2FkZS5yZXNvbHZlQ29tcG9uZW50c0FzU2VsZWN0b3IoJHRoaXMuanEsICR0aGlzLmNmZy51cGRhdGUpO1xuXG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBmYWtlIHRoZSBmaWxlbGltaXQgYXMgdGhlIGpxdWVyeS1maWxldXBsb2FkIGlucHV0IGFsd2F5cyBvbmx5IGNvbnRhaW5zIDEgZmlsZVxuICAgICAgICAgICAgICAgIHZhciBkYXRhRmlsZUlucHV0ID0gZGF0YS5maWxlSW5wdXQ7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFGaWxlSW5wdXQgPT0gbnVsbCkgeyAvLyBkcmFnwrRuwrRkcm9wIC0gR2l0aHViICMxMTg3OVxuICAgICAgICAgICAgICAgICAgICBkYXRhRmlsZUlucHV0ID0gJChQcmltZUZhY2VzLmVzY2FwZUNsaWVudElkKGRhdGEucGFyYW1OYW1lICsgJ19pbnB1dCcpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YVRyYW5zZmVyID0gbmV3IERhdGFUcmFuc2ZlcigpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmZpbGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUcmFuc2Zlci5pdGVtcy5hZGQoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBkYXRhRmlsZUlucHV0WzBdLmZpbGVzID0gZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBDU1YgbWV0YWRhdGFcbiAgICAgICAgICAgICAgICBkYXRhRmlsZUlucHV0LmRhdGEoUHJpbWVGYWNlcy5DTElFTlRfSURfREFUQSwgJHRoaXMuaWQpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGZpbGVMaW1pdCA9IGRhdGFGaWxlSW5wdXQgPyBkYXRhRmlsZUlucHV0LmRhdGEoJ3AtZmlsZWxpbWl0JykgOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChmaWxlTGltaXQgJiYgKCR0aGlzLnVwbG9hZGVkRmlsZUNvdW50ICsgJHRoaXMuZmlsZXMubGVuZ3RoICsgMSkgPiBmaWxlTGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuY2xlYXJNZXNzYWdlcygpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyeSB0byByZW5kZXIgdGhlIG1zZyBmaXJzdCB3aXRoIG91ciBDU1YgZnJhbWV3b3JrXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YyA9IFByaW1lRmFjZXMudmFsaWRhdGlvbi5WYWxpZGF0aW9uQ29udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgdmMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdmMuYWRkTWVzc2FnZSgkdGhpcy5pZCwgUHJpbWVGYWNlcy52YWxpZGF0aW9uLlV0aWxzLmdldE1lc3NhZ2UoJ3ByaW1lZmFjZXMuRmlsZVZhbGlkYXRvci5GSUxFX0xJTUlUJywgWyBmaWxlTGltaXQgXSkpO1xuICAgICAgICAgICAgICAgICAgICBQcmltZUZhY2VzLnZhbGlkYXRpb24uVXRpbHMucmVuZGVyTWVzc2FnZXModmMubWVzc2FnZXMsIHVwZGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIG1lc3NhZ2VzIGhhc24ndCBiZWVuIHJlbmRlcmVkLCB1c2Ugb3VyIGludGVybmFsIG1lc3NhZ2VzIGRpc3BsYXlcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2xpZW50SWQgaW4gdmMubWVzc2FnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG1zZyBvZiB2Yy5tZXNzYWdlc1tjbGllbnRJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1zZy5yZW5kZXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5zaG93TWVzc2FnZShtc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZjLmNsZWFyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBmaWxlID0gZGF0YS5maWxlcyA/IGRhdGEuZmlsZXNbMF0gOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmNsZWFyTWVzc2FnZXMoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHBhc3MgdGhlIHJlYWwgaW52aXNpYmxlIGlucHV0LCB3aGljaCBjb250YWlucyB0aGUgZmlsZWxpc3RcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRpb25SZXN1bHQgPSBQcmltZUZhY2VzLnZhbGlkYXRpb24udmFsaWRhdGUoJHRoaXMuanEsIGRhdGFGaWxlSW5wdXQsIHVwZGF0ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQudmFsaWQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIG1lc3NhZ2VzIGhhc24ndCBiZWVuIHJlbmRlcmVkLCB1c2Ugb3VyIGludGVybmFsIG1lc3NhZ2VzIGRpc3BsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNsaWVudElkIGluIHZhbGlkYXRpb25SZXN1bHQubWVzc2FnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBtc2cgb2YgdmFsaWRhdGlvblJlc3VsdC5tZXNzYWdlc1tjbGllbnRJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtc2cucmVuZGVyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLnNob3dNZXNzYWdlKG1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLnBvc3RTZWxlY3RGaWxlKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHRoaXMuY2ZnLm9udmFsaWRhdGlvbmZhaWx1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjbGllbnRJZCBpbiB2YWxpZGF0aW9uUmVzdWx0Lm1lc3NhZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG1zZyBvZiB2YWxpZGF0aW9uUmVzdWx0Lm1lc3NhZ2VzW2NsaWVudElkXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMuY2ZnLm9udmFsaWRhdGlvbmZhaWx1cmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bW1hcnk6IG1zZy5zdW1tYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXNpemU6IGZpbGUuc2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoJHRoaXMuY2ZnLm9uQWRkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5jZmcub25BZGQuY2FsbCgkdGhpcywgZmlsZSwgZnVuY3Rpb24ocHJvY2Vzc2VkRmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUgPSBwcm9jZXNzZWRGaWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZmlsZXNbMF0gPSBwcm9jZXNzZWRGaWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLmFkZEZpbGVUb1JvdyhmaWxlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMuYWRkRmlsZVRvUm93KGZpbGUsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCR0aGlzLmNmZy5yZXN1bWVDb250ZXh0UGF0aCAmJiAkdGhpcy5jZmcubWF4Q2h1bmtTaXplID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5nZXRKU09OKCR0aGlzLmNmZy5yZXN1bWVDb250ZXh0UGF0aCwgeydYLUZpbGUtSWQnOiAkdGhpcy5jcmVhdGVYRmlsZUlkKGZpbGUpfSwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cGxvYWRlZEJ5dGVzID0gcmVzdWx0LnVwbG9hZGVkQnl0ZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS51cGxvYWRlZEJ5dGVzID0gdXBsb2FkZWRCeXRlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbmQ6IGZ1bmN0aW9uKGUsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZighd2luZG93LkZvcm1EYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBkYXRhLmZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihmaWxlLnJvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUucm93LmNoaWxkcmVuKCcudWktZmlsZXVwbG9hZC1wcm9ncmVzcycpLmZpbmQoJz4gLnVpLXByb2dyZXNzYmFyID4gLnVpLXByb2dyZXNzYmFyLXZhbHVlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygndWktcHJvZ3Jlc3NiYXItdmFsdWUtbGVnYWN5JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24oZSwgZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmVycm9yVGhyb3duID09PSAnYWJvcnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkdGhpcy5jZmcucmVzdW1lQ29udGV4dFBhdGggJiYgJHRoaXMuY2ZnLm1heENodW5rU2l6ZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAkdGhpcy5jZmcucmVzdW1lQ29udGV4dFBhdGggKyAnPycgKyAkLnBhcmFtKHsnWC1GaWxlLUlkJyA6ICR0aGlzLmNyZWF0ZVhGaWxlSWQoZGF0YS5maWxlc1swXSl9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdERUxFVEUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkdGhpcy5jZmcub25jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLmNmZy5vbmNhbmNlbC5jYWxsKCR0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgkdGhpcy5jZmcucmVzdW1lQ29udGV4dFBhdGggJiYgJHRoaXMuY2ZnLm1heENodW5rU2l6ZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNvbnRleHQgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8galF1ZXJ5IFdpZGdldCBGYWN0b3J5IHVzZXMgXCJuYW1lc3BhY2Utd2lkZ2V0bmFtZVwiIHNpbmNlIHZlcnNpb24gMS4xMC4wOlxuICAgICAgICAgICAgICAgICAgICB2YXIgZnUgPSAkKHRoaXMpLmRhdGEoJ2JsdWVpbXAtZmlsZXVwbG9hZCcpIHx8ICQodGhpcykuZGF0YSgnZmlsZXVwbG9hZCcpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmV0cmllcyA9IGRhdGEuY29udGV4dC5kYXRhKCdyZXRyaWVzJykgfHwgMDtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmV0cnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLmdldEpTT04oJHRoaXMuY2ZnLnJlc3VtZUNvbnRleHRQYXRoLCB7J1gtRmlsZS1JZCc6ICR0aGlzLmNyZWF0ZVhGaWxlSWQoZGF0YS5maWxlc1swXSl9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVwbG9hZGVkQnl0ZXMgPSByZXN1bHQudXBsb2FkZWRCeXRlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS51cGxvYWRlZEJ5dGVzID0gdXBsb2FkZWRCeXRlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xlYXIgdGhlIHByZXZpb3VzIGRhdGE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0YSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmFpbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1Ll90cmlnZ2VyKCdmYWlsJywgZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3JUaHJvd24gIT09ICdhYm9ydCcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudXBsb2FkZWRCeXRlcyA8IGRhdGEuZmlsZXNbMF0uc2l6ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0cmllcyA8IGZ1Lm9wdGlvbnMubWF4UmV0cmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0cmllcyArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jb250ZXh0LmRhdGEoJ3JldHJpZXMnLCByZXRyaWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHJldHJ5LCByZXRyaWVzICogZnUub3B0aW9ucy5yZXRyeVRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY29udGV4dC5yZW1vdmVEYXRhKCdyZXRyaWVzJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCR0aGlzLmNmZy5vbmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmNmZy5vbmVycm9yLmNhbGwoJHRoaXMsIGRhdGEuanFYSFIsIGRhdGEudGV4dFN0YXR1cywgZGF0YS5qcVhIUi5wZkFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9ncmVzczogZnVuY3Rpb24oZSwgZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5Gb3JtRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBwYXJzZUludChkYXRhLmxvYWRlZCAvIGRhdGEudG90YWwgKiAxMDAsIDEwKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZGF0YS5maWxlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUucm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbGV1cGxvYWRQcm9ncmVzcyA9IGZpbGUucm93LmNoaWxkcmVuKFwiLnVpLWZpbGV1cGxvYWQtcHJvZ3Jlc3NcIikuZmluZChcIj4gLnVpLXByb2dyZXNzYmFyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGV1cGxvYWRQcm9ncmVzcy5hdHRyKFwiYXJpYS12YWx1ZW5vd1wiLCBwcm9ncmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXVwbG9hZFByb2dyZXNzLmZpbmQoXCI+IC51aS1wcm9ncmVzc2Jhci12YWx1ZVwiKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcHJvZ3Jlc3MgKyBcIiVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG9uZTogZnVuY3Rpb24oZSwgZGF0YSkge1xuICAgICAgICAgICAgICAgICR0aGlzLnVwbG9hZGVkRmlsZUNvdW50ICs9IGRhdGEuZmlsZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICR0aGlzLnJlbW92ZUZpbGVzKGRhdGEuZmlsZXMpO1xuXG4gICAgICAgICAgICAgICAgLy8gZHJhZ8K0bsK0ZHJvcCAtIEdpdGh1YiAjMTE4NzksICMxMjIwN1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFGaWxlSW5wdXQgPSAkKFByaW1lRmFjZXMuZXNjYXBlQ2xpZW50SWQoZGF0YS5wYXJhbU5hbWUgKyAnX2lucHV0JykpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhRmlsZUlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFUcmFuc2ZlckNsZWFuZWQgPSBuZXcgRGF0YVRyYW5zZmVyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGRhdGFGaWxlSW5wdXRbMF0uZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS5maWxlcy5pbmNsdWRlcyhmaWxlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUcmFuc2ZlckNsZWFuZWQuaXRlbXMuYWRkKGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YUZpbGVJbnB1dFswXS5maWxlcyA9IGRhdGFUcmFuc2ZlckNsZWFuZWQuZmlsZXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlc3BvbnNlLmhhbmRsZShkYXRhLnJlc3VsdCwgZGF0YS50ZXh0U3RhdHVzLCBkYXRhLmpxWEhSLCBudWxsKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZigkdGhpcy5jZmcuZ2xvYmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ3BmQWpheFN1Y2Nlc3MnLCBbZGF0YS5qcVhIUiwgdGhpc10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbHdheXM6IGZ1bmN0aW9uKGUsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZigkdGhpcy5jZmcuZ2xvYmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ3BmQWpheENvbXBsZXRlJywgW2RhdGEuanFYSFIsIHRoaXMsIGRhdGEuanFYSFIucGZBcmdzXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCR0aGlzLmNmZy5vbmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmNmZy5vbmNvbXBsZXRlLmNhbGwoJHRoaXMsIGRhdGEuanFYSFIucGZBcmdzLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjaHVua2JlZm9yZXNlbmQ6IGZ1bmN0aW9uIChlLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9ICR0aGlzLmNyZWF0ZVBvc3REYXRhKCk7XG4gICAgICAgICAgICAgICAgdmFyIGZpbGUgPSBkYXRhLmZpbGVzWzBdO1xuICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKHtuYW1lIDogJ1gtRmlsZS1JZCcsIHZhbHVlOiAkdGhpcy5jcmVhdGVYRmlsZUlkKGZpbGUpfSk7XG4gICAgICAgICAgICAgICAgZGF0YS5mb3JtRGF0YSA9IHBhcmFtcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmpxLmZpbGV1cGxvYWQodGhpcy51Y2ZnKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5qcS5maWxldXBsb2FkKFwiZGVzdHJveVwiKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyB0aGlzIGNhbiB0aHJvdyBmaWxlIHVwbG9hZCBub3QgaW5pdGlhbGl6ZWQgeWV0IGlmIGFuIHVwbG9hZCB3YXMgbmV2ZXIgcGVyZm9ybWVkLlxuICAgICAgICAgICAgUHJpbWVGYWNlcy5kZWJ1ZyhcIkNvdWxkIG5vdCBkZXN0cm95IEZpbGVVcGxvYWQ6IFwiICsgZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGZpbGUgc2VsZWN0ZWQgYnkgdGhlIHVzZXIgdG8gdGhpcyB1cGxvYWQgd2lkZ2V0LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtGaWxlfSBmaWxlIEEgZmlsZSB0byBhZGQuXG4gICAgICogQHBhcmFtIHtKUXVlcnlGaWxlVXBsb2FkLkFkZENhbGxiYWNrRGF0YX0gZGF0YSBUaGUgZGF0YSBmcm9tIHRoZSBzZWxlY3RlZCBmaWxlLlxuICAgICAqL1xuICAgIGFkZEZpbGVUb1JvdyhmaWxlLCBkYXRhKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXMsXG4gICAgICAgICAgICByb3cgPSAkKCc8ZGl2IGNsYXNzPVwidWktZmlsZXVwbG9hZC1yb3dcIj48L2Rpdj4nKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJ1aS1maWxldXBsb2FkLXByZXZpZXdcIj48L3RkPicpXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgnPGRpdiBjbGFzcz1cInVpLWZpbGV1cGxvYWQtZmlsZW5hbWVcIj4nICsgUHJpbWVGYWNlcy5lc2NhcGVIVE1MKGZpbGUubmFtZSkgKyAnPC9kaXY+JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCc8ZGl2PicgKyBQcmltZUZhY2VzLnV0aWxzLmZvcm1hdEJ5dGVzKGZpbGUuc2l6ZSkgKyAnPC9kaXY+JylcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCc8ZGl2IGNsYXNzPVwidWktZmlsZXVwbG9hZC1wcm9ncmVzc1wiPjwvZGl2PicpXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgnPGRpdj48YnV0dG9uIGNsYXNzPVwidWktZmlsZXVwbG9hZC1jYW5jZWwgdWktYnV0dG9uIHVpLXdpZGdldCB1aS1zdGF0ZS1kZWZhdWx0IHVpLWNvcm5lci1hbGwgdWktYnV0dG9uLWljb24tb25seVwiPjxzcGFuIGNsYXNzPVwidWktYnV0dG9uLWljb24tbGVmdCB1aS1pY29uIHVpLWljb24gdWktaWNvbi1jbG9zZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInVpLWJ1dHRvbi10ZXh0XCI+dWktYnV0dG9uPC9zcGFuPjwvYnV0dG9uPjwvZGl2PicpXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKHRoaXMuZmlsZXNUYm9keSk7XG5cbiAgICAgICAgaWYodGhpcy5maWxlc1Rib2R5LmNoaWxkcmVuKCcudWktZmlsZXVwbG9hZC1yb3cnKS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAkKCc8ZGl2IGNsYXNzPVwidWktd2lkZ2V0LWNvbnRlbnRcIj48L2Rpdj4nKS5wcmVwZW5kVG8ocm93KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vcHJldmlld1xuICAgICAgICBpZih3aW5kb3cuRmlsZSAmJiB3aW5kb3cuRmlsZVJlYWRlciAmJiBGaWxlVXBsb2FkLklNQUdFX1RZUEVTLnRlc3QoZmlsZS5uYW1lKSkge1xuICAgICAgICAgICAgdmFyIGltYWdlQ2FudmFzID0gJCgnPGNhbnZhcz48L2NhbnZhcz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKHJvdy5jaGlsZHJlbignZGl2LnVpLWZpbGV1cGxvYWQtcHJldmlldycpKSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBpbWFnZUNhbnZhcy5nZXQoMCkuZ2V0Q29udGV4dCgnMmQnKSxcbiAgICAgICAgICAgIHdpblVSTCA9IHdpbmRvdy5VUkx8fHdpbmRvdy53ZWJraXRVUkwsXG4gICAgICAgICAgICB1cmwgPSB3aW5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpLFxuICAgICAgICAgICAgaW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW1nV2lkdGggPSBudWxsLCBpbWdIZWlnaHQgPSBudWxsLCBzY2FsZSA9IDE7XG5cbiAgICAgICAgICAgICAgICBpZigkdGhpcy5jZmcucHJldmlld1dpZHRoID4gdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBpbWdXaWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbWdXaWR0aCA9ICR0aGlzLmNmZy5wcmV2aWV3V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHNjYWxlID0gJHRoaXMuY2ZnLnByZXZpZXdXaWR0aCAvIHRoaXMud2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW1nSGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5oZWlnaHQgKiBzY2FsZSk7XG5cbiAgICAgICAgICAgICAgICBpbWFnZUNhbnZhcy5hdHRyKHt3aWR0aDppbWdXaWR0aCwgaGVpZ2h0OiBpbWdIZWlnaHR9KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZ1dpZHRoLCBpbWdIZWlnaHQpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1nLnNyYyA9IHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vcHJvZ3Jlc3NcbiAgICAgICAgcm93LmNoaWxkcmVuKCdkaXYudWktZmlsZXVwbG9hZC1wcm9ncmVzcycpXG4gICAgICAgICAgICAgICAgLmFwcGVuZCgnPGRpdiBjbGFzcz1cInVpLXByb2dyZXNzYmFyIHVpLXdpZGdldCB1aS13aWRnZXQtY29udGVudCB1aS1jb3JuZXItYWxsXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCIgYXJpYS12YWx1ZW5vdz1cIjBcIj48ZGl2IGNsYXNzPVwidWktcHJvZ3Jlc3NiYXItdmFsdWUgdWktd2lkZ2V0LWhlYWRlciB1aS1jb3JuZXItbGVmdFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTsgd2lkdGg6IDAlO1wiPjwvZGl2PjwvZGl2PicpO1xuXG4gICAgICAgIGZpbGUucm93ID0gcm93O1xuICAgICAgICBmaWxlLnJvdy5kYXRhKCdmaWxlSWQnLCB0aGlzLmZpbGVJZCsrKTtcbiAgICAgICAgZmlsZS5yb3cuZGF0YSgnZmlsZWRhdGEnLCBkYXRhKTtcblxuICAgICAgICB0aGlzLmZpbGVzLnB1c2goZmlsZSk7XG5cbiAgICAgICAgaWYodGhpcy5jZmcuYXV0bykge1xuICAgICAgICAgICAgdGhpcy51cGxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9zdFNlbGVjdEZpbGUoZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGFmdGVyIGEgZmlsZSB3YXMgYWRkZWQgdG8gdGhpcyB1cGxvYWQgd2lkZ2V0LiBUYWtlcyBjYXJlIG9mIHRoZSBVSSBidXR0b25zLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtKUXVlcnlGaWxlVXBsb2FkLkFkZENhbGxiYWNrRGF0YX0gZGF0YSBEYXRhIG9mIHRoZSBzZWxlY3RlZCBmaWxlLlxuICAgICAqL1xuICAgIHBvc3RTZWxlY3RGaWxlKGRhdGEpIHtcbiAgICAgICAgaWYodGhpcy5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZUJ1dHRvbih0aGlzLnVwbG9hZEJ1dHRvbik7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZUJ1dHRvbih0aGlzLmNhbmNlbEJ1dHRvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpbGVBZGRJbmRleCsrO1xuICAgICAgICBpZih0aGlzLmZpbGVBZGRJbmRleCA9PT0gKGRhdGEub3JpZ2luYWxGaWxlcy5sZW5ndGgpKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVBZGRJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGFsbCBldmVudHMgbGlzdGVuZXJzIGZvciB0aGlzIGZpbGUgdXBsb2FkIHdpZGdldC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgUHJpbWVGYWNlcy5za2luQnV0dG9uKHRoaXMuYnV0dG9uQmFyLmNoaWxkcmVuKCdidXR0b24nKSk7XG5cbiAgICAgICAgdmFyIGlzQ2hvb3NlQnV0dG9uQ2xpY2sgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmNob29zZUJ1dHRvbi5vZmYoJ21vdXNlb3Zlci5maWxldXBsb2FkIG1vdXNlb3V0LmZpbGV1cGxvYWQgbW91c2V1cC5maWxldXBsb2FkIGZvY3VzLmZpbGV1cGxvYWQgYmx1ci5maWxldXBsb2FkIG1vdXNlZG93bi5maWxldXBsb2FkIGNsaWNrLmZpbGV1cGxvYWQga2V5ZG93bi5maWxldXBsb2FkJyk7XG4gICAgICAgIHRoaXMuY2hvb3NlQnV0dG9uLm9uKCdtb3VzZW92ZXIuZmlsZXVwbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYoIWVsLnByb3AoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygndWktc3RhdGUtaG92ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW91dC5maWxldXBsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1hY3RpdmUgdWktc3RhdGUtaG92ZXInKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZXVwLmZpbGV1cGxvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWFjdGl2ZScpLmFkZENsYXNzKCd1aS1zdGF0ZS1ob3ZlcicpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2ZvY3VzLmZpbGV1cGxvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3VpLXN0YXRlLWZvY3VzJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignYmx1ci5maWxldXBsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1mb2N1cycpO1xuICAgICAgICAgICAgaXNDaG9vc2VCdXR0b25DbGljayA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlZG93bi5maWxldXBsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgaWYoIWVsLnByb3AoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygndWktc3RhdGUtYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWhvdmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2xpY2suZmlsZXVwbG9hZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICR0aGlzLnNob3coKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdrZXlkb3duLmZpbGV1cGxvYWQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoUHJpbWVGYWNlcy51dGlscy5pc0FjdGlvbktleShlKSkge1xuICAgICAgICAgICAgICAgICR0aGlzLnNob3coKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ2JsdXInKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hvb3NlQnV0dG9uLmNoaWxkcmVuKCdpbnB1dCcpLm9mZignY2xpY2suZmlsZXVwbG9hZCcpLm9uKCdjbGljay5maWxldXBsb2FkJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBpZiAoaXNDaG9vc2VCdXR0b25DbGljaykge1xuICAgICAgICAgICAgICAgIGlzQ2hvb3NlQnV0dG9uQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlzQ2hvb3NlQnV0dG9uQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVwbG9hZEJ1dHRvbi5vZmYoJ2NsaWNrLmZpbGV1cGxvYWQnKS5vbignY2xpY2suZmlsZXVwbG9hZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gR2l0SHViICM2Mzk2IGFsbG93IGNhbmNlbCBvZiB1cGxvYWQgd2l0aCBjYWxsYmFja1xuICAgICAgICAgICAgaWYgKCR0aGlzLmNmZy5vbnVwbG9hZCkge1xuICAgICAgICAgICAgICAgIGlmICgkdGhpcy5jZmcub251cGxvYWQuY2FsbCgkdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICR0aGlzLmRpc2FibGVCdXR0b24oJHRoaXMudXBsb2FkQnV0dG9uKTtcbiAgICAgICAgICAgICR0aGlzLmRpc2FibGVCdXR0b24oJHRoaXMuY2FuY2VsQnV0dG9uKTtcblxuICAgICAgICAgICAgJHRoaXMudXBsb2FkKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLm9mZignY2xpY2suZmlsZXVwbG9hZCcpLm9uKCdjbGljay5maWxldXBsb2FkJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICAgICR0aGlzLmRpc2FibGVCdXR0b24oJHRoaXMudXBsb2FkQnV0dG9uKTtcbiAgICAgICAgICAgICR0aGlzLmRpc2FibGVCdXR0b24oJHRoaXMuY2FuY2VsQnV0dG9uKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNsZWFyTWVzc2FnZUxpbmsub2ZmKCdjbGljay5maWxldXBsb2FkJykub24oJ2NsaWNrLmZpbGV1cGxvYWQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkdGhpcy5tZXNzYWdlQ29udGFpbmVyLmZhZGVPdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJHRoaXMubWVzc2FnZUxpc3QuY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucm93Q2FuY2VsQWN0aW9uU2VsZWN0b3IgPSB0aGlzLmpxSWQgKyBcIiAudWktZmlsZXVwbG9hZC1maWxlcyAudWktZmlsZXVwbG9hZC1jYW5jZWxcIjtcblxuICAgICAgICB2YXIgbmFtZXNwYWNlID0gJy5maWxldXBsb2FkJyArIHRoaXMuaWQ7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihuYW1lc3BhY2UsIHRoaXMucm93Q2FuY2VsQWN0aW9uU2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZW92ZXInK25hbWVzcGFjZSwgdGhpcy5yb3dDYW5jZWxBY3Rpb25TZWxlY3RvciwgbnVsbCwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd1aS1zdGF0ZS1ob3ZlcicpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZW91dCcrbmFtZXNwYWNlLCB0aGlzLnJvd0NhbmNlbEFjdGlvblNlbGVjdG9yLCBudWxsLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWhvdmVyIHVpLXN0YXRlLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWRvd24nK25hbWVzcGFjZSwgdGhpcy5yb3dDYW5jZWxBY3Rpb25TZWxlY3RvciwgbnVsbCwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd1aS1zdGF0ZS1hY3RpdmUnKS5yZW1vdmVDbGFzcygndWktc3RhdGUtaG92ZXInKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbignbW91c2V1cCcrbmFtZXNwYWNlLCB0aGlzLnJvd0NhbmNlbEFjdGlvblNlbGVjdG9yLCBudWxsLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3VpLXN0YXRlLWhvdmVyJykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKCdmb2N1cycrbmFtZXNwYWNlLCB0aGlzLnJvd0NhbmNlbEFjdGlvblNlbGVjdG9yLCBudWxsLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3VpLXN0YXRlLWZvY3VzJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oJ2JsdXInK25hbWVzcGFjZSwgdGhpcy5yb3dDYW5jZWxBY3Rpb25TZWxlY3RvciwgbnVsbCwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1mb2N1cycpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKCdjbGljaycrbmFtZXNwYWNlLCB0aGlzLnJvd0NhbmNlbEFjdGlvblNlbGVjdG9yLCBudWxsLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSAkKHRoaXMpLmNsb3Nlc3QoJy51aS1maWxldXBsb2FkLXJvdycpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlZEZpbGUgPSAkLmdyZXAoJHRoaXMuZmlsZXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsdWUucm93LmRhdGEoJ2ZpbGVJZCcpID09PSByb3cuZGF0YSgnZmlsZUlkJykpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVtb3ZlZEZpbGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdmVkRmlsZVswXS5hamF4UmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWRGaWxlWzBdLmFqYXhSZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLnJlbW92ZUZpbGUocmVtb3ZlZEZpbGVbMF0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHRoaXMuZmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMuZGlzYWJsZUJ1dHRvbigkdGhpcy51cGxvYWRCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLmRpc2FibGVCdXR0b24oJHRoaXMuY2FuY2VsQnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGREZXN0cm95TGlzdGVuZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYobmFtZXNwYWNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHJvcFpvbmUpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcFpvbmVcbiAgICAgICAgICAgICAgICAgICAgLm9mZignZHJhZ292ZXIuZnVjZHJvcHpvbmUgZHJhZ2VudGVyLmZ1Y2Ryb3B6b25lIGRyYWdsZWF2ZS5mdWNkcm9wem9uZSBkcm9wLmZ1Y2Ryb3B6b25lIGRyYWdkcm9wLmZ1Y2Ryb3B6b25lJylcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdkcmFnb3Zlci5mdWNkcm9wem9uZScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAub24oJ2RyYWdlbnRlci5mdWNkcm9wem9uZScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMuZHJhZ292ZXJDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMuZHJvcFpvbmUuYWRkQ2xhc3MoJ3VpLXN0YXRlLWRyYWcnKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdkcmFnbGVhdmUuZnVjZHJvcHpvbmUnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLmRyYWdvdmVyQ291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkdGhpcy5kcmFnb3ZlckNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMuZHJvcFpvbmUucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWRyYWcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm9uKCdkcm9wLmZ1Y2Ryb3B6b25lIGRyYWdkcm9wLmZ1Y2Ryb3B6b25lJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5kcmFnb3ZlckNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLmRyb3Bab25lLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1kcmFnJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBsb2FkcyB0aGUgc2VsZWN0ZWQgZmlsZXMgdG8gdGhlIHNlcnZlci5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHVwbG9hZCgpIHtcbiAgICAgICAgaWYodGhpcy5jZmcuZ2xvYmFsKSB7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdwZkFqYXhTdGFydCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIHRoaXMuZmlsZXMpIHtcbiAgICAgICAgICAgIGZpbGUuYWpheFJlcXVlc3QgPSBmaWxlLnJvdy5kYXRhKCdmaWxlZGF0YScpO1xuICAgICAgICAgICAgZmlsZS5hamF4UmVxdWVzdC5zdWJtaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIEhUTUwgcG9zdCBkYXRhIGZvciB1cGxvYWRpbmcgdGhlIHNlbGVjdGVkIGZpbGVzLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7UHJpbWVGYWNlcy5hamF4LlJlcXVlc3RQYXJhbWV0ZXJ9IFBhcmFtZXRlcnMgdG8gcG9zdCB3aGVuIHVwbG9hZCB0aGUgZmlsZXMuXG4gICAgICovXG4gICAgY3JlYXRlUG9zdERhdGEoKSB7XG4gICAgICAgIHZhciBwcm9jZXNzID0gdGhpcy5jZmcucHJvY2Vzc1xuICAgICAgICAgICAgPyB0aGlzLmlkICsgJyAnICsgUHJpbWVGYWNlcy5leHByZXNzaW9ucy5TZWFyY2hFeHByZXNzaW9uRmFjYWRlLnJlc29sdmVDb21wb25lbnRzKHRoaXMuanEsIHRoaXMuY2ZnLnByb2Nlc3MpLmpvaW4oJyAnKVxuICAgICAgICAgICAgOiB0aGlzLmlkO1xuICAgICAgICB2YXIgcGFyYW1zID0gdGhpcy5mb3JtLnNlcmlhbGl6ZUFycmF5KCk7XG5cbiAgICAgICAgdmFyIHBhcmFtZXRlclByZWZpeCA9IFByaW1lRmFjZXMuYWpheC5SZXF1ZXN0LmV4dHJhY3RQYXJhbWV0ZXJOYW1lc3BhY2UodGhpcy5mb3JtKTtcblxuICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5hZGRQYXJhbShwYXJhbXMsIFByaW1lRmFjZXMuUEFSVElBTF9SRVFVRVNUX1BBUkFNLCB0cnVlLCBwYXJhbWV0ZXJQcmVmaXgpO1xuICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5hZGRQYXJhbShwYXJhbXMsIFByaW1lRmFjZXMuUEFSVElBTF9QUk9DRVNTX1BBUkFNLCBwcm9jZXNzLCBwYXJhbWV0ZXJQcmVmaXgpO1xuICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVxdWVzdC5hZGRQYXJhbShwYXJhbXMsIFByaW1lRmFjZXMuUEFSVElBTF9TT1VSQ0VfUEFSQU0sIHRoaXMuaWQsIHBhcmFtZXRlclByZWZpeCk7XG4gICAgICAgIFByaW1lRmFjZXMuYWpheC5SZXF1ZXN0LmFkZFBhcmFtKHBhcmFtcywgdGhpcy5pZCArIFwiX3RvdGFsRmlsZXNDb3VudFwiLCB0aGlzLmZpbGVzLmxlbmd0aCwgcGFyYW1ldGVyUHJlZml4KTtcblxuICAgICAgICBpZiAodGhpcy5jZmcudXBkYXRlKSB7XG4gICAgICAgICAgICB2YXIgdXBkYXRlID0gUHJpbWVGYWNlcy5leHByZXNzaW9ucy5TZWFyY2hFeHByZXNzaW9uRmFjYWRlLnJlc29sdmVDb21wb25lbnRzKHRoaXMuanEsIHRoaXMuY2ZnLnVwZGF0ZSkuam9pbignICcpO1xuICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlcXVlc3QuYWRkUGFyYW0ocGFyYW1zLCBQcmltZUZhY2VzLlBBUlRJQUxfVVBEQVRFX1BBUkFNLCB1cGRhdGUsIHBhcmFtZXRlclByZWZpeCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHVuaXF1ZSBpZGVudGlmaWVyIChmaWxlIGtleSkgZm9yIGEgZ2l2ZW4gZmlsZS4gVGhhdCBpZGVudGlmaWVyIGNvbnNpc3RzIGUuZy4gb2YgdGhlIG5hbWUgb2YgdGhlXG4gICAgICogdXBsb2FkZWQgZmlsZSwgaXRzIGxhc3QgbW9kaWZpZWQtYXR0cmlidXRlIGV0Yy4gVGhpcyBpcyB1c2VkIGJ5IHRoZSBzZXJ2ZXIgdG8gaWRlbnRpZnkgdXBsb2FkZWQgZmlsZXMuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0ZpbGV9IGZpbGUgQSBmaWxlIGZvciB3aGljaCB0byBjcmVhdGUgYW4gaWRlbnRpZmllci5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IEFuIGlkZW50aWZpZXIgZm9yIHRoZSBnaXZlbiBmaWxlLlxuICAgICAqL1xuICAgIGNyZWF0ZVhGaWxlSWQoZmlsZSkge1xuICAgICAgICByZXR1cm4gW2ZpbGUubmFtZSwgZmlsZS5sYXN0TW9kaWZpZWQsIGZpbGUudHlwZSwgZmlsZS5zaXplXS5qb2luKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gdXBsb2FkZWQgZmlsZSBmcm9tIHRoaXMgdXBsb2FkIHdpZGdldC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy53aWRnZXQuRmlsZVVwbG9hZC5VcGxvYWRGaWxlW119IGZpbGVzIEZpbGVzIHRvIHJlbW92ZSBmcm9tIHRoaXMgd2lkZ2V0LlxuICAgICAqL1xuICAgIHJlbW92ZUZpbGVzKGZpbGVzKSB7XG4gICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVGaWxlKGZpbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gdXBsb2FkZWQgZmlsZSBmcm9tIHRoaXMgdXBsb2FkIHdpZGdldC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy53aWRnZXQuRmlsZVVwbG9hZC5VcGxvYWRGaWxlfSBmaWxlIEZpbGUgdG8gcmVtb3ZlIGZyb20gdGhpcyB3aWRnZXQuXG4gICAgICovXG4gICAgcmVtb3ZlRmlsZShmaWxlKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5maWxlcyA9ICQuZ3JlcCh0aGlzLmZpbGVzLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZS5yb3cuZGF0YSgnZmlsZUlkJykgPT09IGZpbGUucm93LmRhdGEoJ2ZpbGVJZCcpKTtcbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgJHRoaXMucmVtb3ZlRmlsZVJvdyhmaWxlLnJvdyk7XG4gICAgICAgIGZpbGUucm93ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgcm93IHdpdGggYW4gdXBsb2FkZWQgZmlsZSBmb3JtIHRoaXMgdXBsb2FkIHdpZGdldC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSByb3cgUm93IG9mIGFuIHVwbG9hZGVkIGZpbGUgdG8gcmVtb3ZlLlxuICAgICAqL1xuICAgIHJlbW92ZUZpbGVSb3cocm93KSB7XG4gICAgICAgIGlmKHJvdykge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlQnV0dG9uKHJvdy5maW5kKCc+IGRpdjpsYXN0LWNoaWxkJykuY2hpbGRyZW4oJy51aS1maWxldXBsb2FkLWNhbmNlbCcpKTtcblxuICAgICAgICAgICAgcm93LmZhZGVPdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoaXMgZmlsZSB1cGxvYWQgZmllbGQsIGkuZS4gcmVtb3ZlcyBhbGwgdXBsb2FkZWQgZmlsZXMuXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiB0aGlzLmZpbGVzKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZpbGVSb3coZmlsZS5yb3cpO1xuICAgICAgICAgICAgZmlsZS5yb3cgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbGVhck1lc3NhZ2VzKCk7XG5cbiAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3BsYXlzIHRoZSBjdXJyZW50IGVycm9yIG1lc3NhZ2VzIG9uIHRoaXMgd2lkZ2V0LlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcmVuZGVyTWVzc2FnZXMoKSB7XG4gICAgICAgIHZhciBtYXJrdXAgPSAnPGRpdiBjbGFzcz1cInVpLW1lc3NhZ2VzIHVpLXdpZGdldCB1aS1oZWxwZXItaGlkZGVuIHVpLWZpbGV1cGxvYWQtbWVzc2FnZXNcIj48ZGl2IGNsYXNzPVwidWktbWVzc2FnZXMtZXJyb3IgdWktY29ybmVyLWFsbFwiPicgK1xuICAgICAgICAgICAgICAgICc8YSBjbGFzcz1cInVpLW1lc3NhZ2VzLWNsb3NlXCIgaHJlZj1cIiNcIj48c3BhbiBjbGFzcz1cInVpLWljb24gdWktaWNvbi1jbG9zZVwiPjwvc3Bhbj48L2E+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidWktbWVzc2FnZXMtZXJyb3ItaWNvblwiPjwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAnPHVsPjwvdWw+JyArXG4gICAgICAgICAgICAgICAgJzwvZGl2PjwvZGl2Pic7XG5cbiAgICAgICAgdGhpcy5tZXNzYWdlQ29udGFpbmVyID0gJChtYXJrdXApLnByZXBlbmRUbyh0aGlzLmNvbnRlbnQpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VMaXN0ID0gdGhpcy5tZXNzYWdlQ29udGFpbmVyLmZpbmQoJz4gLnVpLW1lc3NhZ2VzLWVycm9yID4gdWwnKTtcbiAgICAgICAgdGhpcy5jbGVhck1lc3NhZ2VMaW5rID0gdGhpcy5tZXNzYWdlQ29udGFpbmVyLmZpbmQoJz4gLnVpLW1lc3NhZ2VzLWVycm9yID4gYS51aS1tZXNzYWdlcy1jbG9zZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGVycm9yIG1lc3NhZ2VzIHRoYXQgYXJlIHNob3duIGZvciB0aGlzIHdpZGdldC5cbiAgICAgKi9cbiAgICBjbGVhck1lc3NhZ2VzKCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VDb250YWluZXIuaGlkZSgpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VMaXN0LmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgdGhlIGdpdmVuIGVycm9yIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMuRmFjZXNNZXNzYWdlfSBtc2cgRXJyb3IgbWVzc2FnZSB0byBzaG93LlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc2hvd01lc3NhZ2UobXNnKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUxpc3QuYXBwZW5kKCc8bGk+PHNwYW4gY2xhc3M9XCJ1aS1tZXNzYWdlcy1lcnJvci1zdW1tYXJ5XCI+J1xuICAgICAgICAgICAgKyBQcmltZUZhY2VzLmVzY2FwZUhUTUwobXNnLnN1bW1hcnkpXG4gICAgICAgICAgICArICc8L3NwYW4+PHNwYW4gY2xhc3M9XCJ1aS1tZXNzYWdlcy1lcnJvci1kZXRhaWxcIj4nXG4gICAgICAgICAgICArIFByaW1lRmFjZXMuZXNjYXBlSFRNTChtc2cuZGV0YWlsKVxuICAgICAgICAgICAgKyAnPC9zcGFuPjwvbGk+Jyk7XG4gICAgICAgIHRoaXMubWVzc2FnZUNvbnRhaW5lci5zaG93KCk7XG4gICAgICAgIG1zZy5yZW5kZXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZWQgdGhlIGdpdmVuIGZpbGUgdXBsb2FkIGJ1dHRvbi5cbiAgICAgKiBAcGFyYW0ge0pRdWVyeX0gYnRuIEJ1dHRvbiB0byBkaXNhYmxlZC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGRpc2FibGVCdXR0b24oYnRuKSB7XG4gICAgICAgIGJ0bi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCB0cnVlKS5hZGRDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKS5yZW1vdmVDbGFzcygndWktc3RhdGUtaG92ZXIgdWktc3RhdGUtYWN0aXZlIHVpLXN0YXRlLWZvY3VzJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5hYmxlcyB0aGUgZ2l2ZW4gZmlsZSB1cGxvYWQgYnV0dG9uLlxuICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBidG4gQnV0dG9uIHRvIGVuYWJsZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGVuYWJsZUJ1dHRvbihidG4pIHtcbiAgICAgICAgYnRuLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCBmYWxzZSkucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWRpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnJpbmdzIHVwIHRoZSBuYXRpdmUgZmlsZSBzZWxlY3Rpb24gZGlhbG9nLlxuICAgICAqL1xuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMuY2hvb3NlQnV0dG9uLmNoaWxkcmVuKCdpbnB1dCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQU87QUFDUCxxQ0FBTztBQTZHQSxJQUFNLGNBQU4sTUFBTSxvQkFBbUIsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWF2QyxLQUFLLEtBQUs7QUFDTixVQUFNLEtBQUssR0FBRztBQUNkLFFBQUcsS0FBSyxJQUFJLFVBQVU7QUFDbEI7QUFBQSxJQUNKO0FBRUEsU0FBSyxPQUFPLENBQUM7QUFDYixTQUFLLE9BQU8sS0FBSyxHQUFHLFFBQVEsTUFBTTtBQUNsQyxTQUFLLFlBQVksS0FBSyxHQUFHLFNBQVMsMEJBQTBCO0FBQzVELFNBQUssZ0JBQWdCO0FBQ3JCLFNBQUssaUJBQWlCLEtBQUssSUFBSSxhQUFhLFNBQ3RDLFdBQVcsWUFBWSx1QkFBdUIsNEJBQTRCLEtBQUssSUFBSSxLQUFLLElBQUksUUFBUSxJQUNwRztBQUNOLFNBQUssV0FBWSxLQUFLLElBQUksUUFBUSxRQUFTLE9BQU8sS0FBSyxrQkFBa0IsS0FBSztBQUM5RSxTQUFLLGVBQWUsS0FBSyxVQUFVLFNBQVMsdUJBQXVCO0FBQ25FLFNBQUssZUFBZSxLQUFLLFVBQVUsU0FBUyx1QkFBdUI7QUFDbkUsU0FBSyxlQUFlLEtBQUssVUFBVSxTQUFTLHVCQUF1QjtBQUNuRSxTQUFLLFVBQVUsS0FBSyxHQUFHLFNBQVMsd0JBQXdCO0FBQ3hELFNBQUssYUFBYSxLQUFLLFFBQVEsS0FBSyxpQ0FBaUM7QUFDckUsU0FBSyxRQUFRLENBQUM7QUFDZCxTQUFLLGVBQWU7QUFDcEIsU0FBSyxJQUFJLGVBQWUsS0FBSyxJQUFJLGdCQUFnQjtBQUNqRCxTQUFLLElBQUksYUFBYSxLQUFLLElBQUksY0FBYztBQUM3QyxTQUFLLElBQUksZUFBZSxLQUFLLElBQUksZ0JBQWdCO0FBQ2pELFNBQUssSUFBSSxTQUFTLEtBQUssSUFBSSxXQUFXO0FBQ3RDLFNBQUssb0JBQW9CO0FBQ3pCLFNBQUssU0FBUztBQUVkLFNBQUssZUFBZTtBQUVwQixTQUFLLFdBQVc7QUFFaEIsUUFBSSxRQUFRO0FBRVosUUFBSSxrQkFBa0IsV0FBVyxLQUFLLFFBQVEsMEJBQTBCLEtBQUssSUFBSTtBQUVqRixTQUFLLE9BQU87QUFBQSxNQUNSLEtBQUssV0FBVyxLQUFLLE1BQU0sV0FBVyxLQUFLLElBQUk7QUFBQSxNQUMvQyxjQUFjLFdBQVcsS0FBSyxNQUFNLGVBQWUsS0FBSyxNQUFNLGVBQWU7QUFBQSxNQUM3RSxXQUFXLE1BQU0sS0FBSyxFQUFDLFFBQVEsSUFBRyxHQUFHLENBQUMsR0FBRyxNQUFNLEtBQUssRUFBRTtBQUFBO0FBQUEsTUFDdEQsVUFBVTtBQUFBLE1BQ1YsVUFBVSxLQUFLO0FBQUEsTUFDZixtQkFBbUIsS0FBSyxJQUFJO0FBQUEsTUFDNUIsY0FBYyxLQUFLLElBQUk7QUFBQSxNQUN2QixZQUFZLEtBQUssSUFBSTtBQUFBLE1BQ3JCLGNBQWMsS0FBSyxJQUFJO0FBQUEsTUFDdkIsUUFBUSxNQUFNO0FBQUEsTUFDZCxVQUFVLFdBQVc7QUFDakIsZUFBTyxNQUFNLGVBQWU7QUFBQSxNQUNoQztBQUFBLE1BQ0EsWUFBWSxTQUFTLEtBQUssVUFBVTtBQUNoQyxZQUFJLGlCQUFpQixpQkFBaUIsY0FBYztBQUNwRCxZQUFJLGFBQWE7QUFDakIsWUFBSSxTQUFTLENBQUM7QUFFZCxZQUFJLE9BQU8sU0FBUyxRQUFRLFNBQVMsTUFBTSxDQUFDLElBQUk7QUFDaEQsWUFBSSxRQUFRLEtBQUssb0JBQW9CO0FBQ2pDLG1CQUFTLEtBQUssT0FBTywrQkFBK0IsS0FBSyxrQkFBa0I7QUFBQSxRQUMvRTtBQUVBLFlBQUcsTUFBTSxJQUFJLFFBQVE7QUFDakIsWUFBRSxRQUFRLEVBQUUsUUFBUSxjQUFjLENBQUMsS0FBSyxJQUFJLENBQUM7QUFBQSxRQUNqRDtBQUFBLE1BQ0o7QUFBQSxNQUNBLE9BQU8sU0FBUyxHQUFHO0FBQ2YsWUFBRyxNQUFNLElBQUksU0FBUztBQUNsQixnQkFBTSxJQUFJLFFBQVEsS0FBSyxLQUFLO0FBQUEsUUFDaEM7QUFBQSxNQUNKO0FBQUEsTUFDQSxLQUFLLFNBQVMsR0FBRyxNQUFNO0FBQ25CLGNBQU0sYUFBYSxZQUFZLCtCQUErQjtBQUU5RCxZQUFHLE1BQU0saUJBQWlCLEdBQUc7QUFDekIsZ0JBQU0sY0FBYztBQUFBLFFBQ3hCO0FBRUEsWUFBSSxTQUFTLFdBQVcsWUFBWSx1QkFBdUIsNEJBQTRCLE1BQU0sSUFBSSxNQUFNLElBQUksTUFBTTtBQUdqSCxZQUFJLGdCQUFnQixLQUFLO0FBQ3pCLFlBQUksaUJBQWlCLE1BQU07QUFDdkIsMEJBQWdCLEVBQUUsV0FBVyxlQUFlLEtBQUssWUFBWSxRQUFRLENBQUM7QUFDdEUsZ0JBQU0sZUFBZSxJQUFJLGFBQWE7QUFDdEMsZUFBSyxNQUFNLFFBQVEsQ0FBQyxTQUFTO0FBQ3pCLHlCQUFhLE1BQU0sSUFBSSxJQUFJO0FBQUEsVUFDL0IsQ0FBQztBQUNELHdCQUFjLENBQUMsRUFBRSxRQUFRLGFBQWE7QUFBQSxRQUMxQztBQUVBLHNCQUFjLEtBQUssV0FBVyxnQkFBZ0IsTUFBTSxFQUFFO0FBRXRELFlBQUksWUFBWSxnQkFBZ0IsY0FBYyxLQUFLLGFBQWEsSUFBSTtBQUNwRSxZQUFJLGFBQWMsTUFBTSxvQkFBb0IsTUFBTSxNQUFNLFNBQVMsSUFBSyxXQUFXO0FBQzdFLGdCQUFNLGNBQWM7QUFHcEIsY0FBSSxLQUFLLFdBQVcsV0FBVztBQUMvQixhQUFHLE1BQU07QUFDVCxhQUFHLFdBQVcsTUFBTSxJQUFJLFdBQVcsV0FBVyxNQUFNLFdBQVcsdUNBQXVDLENBQUUsU0FBVSxDQUFDLENBQUM7QUFDcEgscUJBQVcsV0FBVyxNQUFNLGVBQWUsR0FBRyxVQUFVLE1BQU07QUFHOUQsbUJBQVMsWUFBWSxHQUFHLFVBQVU7QUFDOUIscUJBQVMsT0FBTyxHQUFHLFNBQVMsUUFBUSxHQUFHO0FBQ25DLGtCQUFJLENBQUMsSUFBSSxVQUFVO0FBQ2Ysc0JBQU0sWUFBWSxHQUFHO0FBQUEsY0FDekI7QUFBQSxZQUNKO0FBQUEsVUFDSjtBQUVBLGFBQUcsTUFBTTtBQUVUO0FBQUEsUUFDSjtBQUVBLFlBQUksT0FBTyxLQUFLLFFBQVEsS0FBSyxNQUFNLENBQUMsSUFBSTtBQUN4QyxZQUFJLE1BQU07QUFDTixnQkFBTSxjQUFjO0FBR3BCLGNBQUksbUJBQW1CLFdBQVcsV0FBVyxTQUFTLE1BQU0sSUFBSSxlQUFlLFFBQVEsTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLO0FBQ3BILGNBQUksQ0FBQyxpQkFBaUIsT0FBTztBQUd6QixxQkFBUyxZQUFZLGlCQUFpQixVQUFVO0FBQzVDLHVCQUFTLE9BQU8saUJBQWlCLFNBQVMsUUFBUSxHQUFHO0FBQ2pELG9CQUFJLENBQUMsSUFBSSxVQUFVO0FBQ2Ysd0JBQU0sWUFBWSxHQUFHO0FBQUEsZ0JBQ3pCO0FBQUEsY0FDSjtBQUFBLFlBQ0o7QUFFQSxrQkFBTSxlQUFlLElBQUk7QUFFekIsZ0JBQUksTUFBTSxJQUFJLHFCQUFxQjtBQUMvQix1QkFBUyxZQUFZLGlCQUFpQixVQUFVO0FBQzVDLHlCQUFTLE9BQU8saUJBQWlCLFNBQVMsUUFBUSxHQUFHO0FBQ2pELHdCQUFNLElBQUksb0JBQW9CO0FBQUEsb0JBQzFCLFNBQVMsSUFBSTtBQUFBLG9CQUNiLFVBQVUsS0FBSztBQUFBLG9CQUNmLFVBQVUsS0FBSztBQUFBLGtCQUNuQixDQUFDO0FBQUEsZ0JBQ0w7QUFBQSxjQUNKO0FBQUEsWUFDSjtBQUFBLFVBQ0osV0FDUyxNQUFNLElBQUksT0FBTztBQUN0QixrQkFBTSxJQUFJLE1BQU0sS0FBSyxPQUFPLE1BQU0sU0FBUyxlQUFlO0FBQ3RELHFCQUFPO0FBQ1AsbUJBQUssTUFBTSxDQUFDLElBQUk7QUFDaEIsb0JBQU0sYUFBYSxNQUFNLElBQUk7QUFBQSxZQUNqQyxDQUFDO0FBQUEsVUFDTCxPQUNLO0FBQ0Qsa0JBQU0sYUFBYSxNQUFNLElBQUk7QUFBQSxVQUNqQztBQUVBLGNBQUksTUFBTSxJQUFJLHFCQUFxQixNQUFNLElBQUksZUFBZSxHQUFHO0FBQzNELGNBQUUsUUFBUSxNQUFNLElBQUksbUJBQW1CLEVBQUMsYUFBYSxNQUFNLGNBQWMsSUFBSSxFQUFDLEdBQUcsU0FBVSxRQUFRO0FBQy9GLGtCQUFJLGdCQUFnQixPQUFPO0FBQzNCLG1CQUFLLGdCQUFnQjtBQUFBLFlBQ3pCLENBQUM7QUFBQSxVQUNMO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxNQUNBLE1BQU0sU0FBUyxHQUFHLE1BQU07QUFDcEIsWUFBRyxDQUFDLE9BQU8sVUFBVTtBQUNqQixxQkFBVyxRQUFRLEtBQUssT0FBTztBQUMzQixnQkFBRyxLQUFLLEtBQUs7QUFDVCxtQkFBSyxJQUFJLFNBQVMseUJBQXlCLEVBQUUsS0FBSywyQ0FBMkMsRUFDcEYsU0FBUyw2QkFBNkIsRUFDdEMsSUFBSTtBQUFBLGdCQUNELE9BQU87QUFBQSxnQkFDUCxTQUFTO0FBQUEsY0FDYixDQUFDO0FBQUEsWUFDYjtBQUFBLFVBQ0o7QUFBQSxRQUNKO0FBQUEsTUFDSjtBQUFBLE1BQ0EsTUFBTSxTQUFTLEdBQUcsTUFBTTtBQUNwQixZQUFJLEtBQUssZ0JBQWdCLFNBQVM7QUFDOUIsY0FBSSxNQUFNLElBQUkscUJBQXFCLE1BQU0sSUFBSSxlQUFlLEdBQUc7QUFDM0QsY0FBRSxLQUFLO0FBQUEsY0FDSCxLQUFLLE1BQU0sSUFBSSxvQkFBb0IsTUFBTSxFQUFFLE1BQU0sRUFBQyxhQUFjLE1BQU0sY0FBYyxLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQztBQUFBLGNBQ25HLFVBQVU7QUFBQSxjQUNWLE1BQU07QUFBQSxZQUNWLENBQUM7QUFBQSxVQUNMO0FBRUEsY0FBSSxNQUFNLElBQUksVUFBVTtBQUNwQixrQkFBTSxJQUFJLFNBQVMsS0FBSyxLQUFLO0FBQUEsVUFDakM7QUFDQTtBQUFBLFFBQ0o7QUFDQSxZQUFJLE1BQU0sSUFBSSxxQkFBcUIsTUFBTSxJQUFJLGVBQWUsR0FBRztBQUMzRCxjQUFJLEtBQUssWUFBWSxRQUFXO0FBQzVCLGlCQUFLLFVBQVUsRUFBRSxJQUFJO0FBQUEsVUFDekI7QUFHQSxjQUFJLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxvQkFBb0IsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLFlBQVk7QUFDeEUsY0FBSSxVQUFVLEtBQUssUUFBUSxLQUFLLFNBQVMsS0FBSztBQUU5QyxjQUFJLFFBQVEsV0FBWTtBQUNwQixjQUFFLFFBQVEsTUFBTSxJQUFJLG1CQUFtQixFQUFDLGFBQWEsTUFBTSxjQUFjLEtBQUssTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQ25GLEtBQUssU0FBVSxRQUFRO0FBQ3BCLGtCQUFJLGdCQUFnQixPQUFPO0FBQzNCLG1CQUFLLGdCQUFnQjtBQUVyQixtQkFBSyxPQUFPO0FBQ1osbUJBQUssT0FBTztBQUFBLFlBQ2hCLENBQUMsRUFDQSxLQUFLLFdBQVk7QUFDZCxpQkFBRyxTQUFTLFFBQVEsR0FBRyxJQUFJO0FBQUEsWUFDL0IsQ0FBQztBQUFBLFVBQ1Q7QUFFQSxjQUFJLEtBQUssZ0JBQWdCLFdBQ3JCLEtBQUssZ0JBQWdCLEtBQUssTUFBTSxDQUFDLEVBQUUsUUFDbkMsVUFBVSxHQUFHLFFBQVEsWUFBWTtBQUNqQyx1QkFBVztBQUNYLGlCQUFLLFFBQVEsS0FBSyxXQUFXLE9BQU87QUFDcEMsbUJBQU8sV0FBVyxPQUFPLFVBQVUsR0FBRyxRQUFRLFlBQVk7QUFDMUQ7QUFBQSxVQUNKO0FBQ0EsZUFBSyxRQUFRLFdBQVcsU0FBUztBQUFBLFFBQ3JDO0FBRUEsWUFBSSxNQUFNLElBQUksU0FBUztBQUNuQixnQkFBTSxJQUFJLFFBQVEsS0FBSyxPQUFPLEtBQUssT0FBTyxLQUFLLFlBQVksS0FBSyxNQUFNLE1BQU07QUFBQSxRQUNoRjtBQUFBLE1BQ0o7QUFBQSxNQUNBLFVBQVUsU0FBUyxHQUFHLE1BQU07QUFDeEIsWUFBRyxPQUFPLFVBQVU7QUFDaEIsY0FBSSxXQUFXLFNBQVMsS0FBSyxTQUFTLEtBQUssUUFBUSxLQUFLLEVBQUU7QUFFMUQscUJBQVcsUUFBUSxLQUFLLE9BQU87QUFDM0IsZ0JBQUksS0FBSyxLQUFLO0FBQ1Ysa0JBQUkscUJBQXFCLEtBQUssSUFBSSxTQUFTLHlCQUF5QixFQUFFLEtBQUssbUJBQW1CO0FBQzlGLGlDQUFtQixLQUFLLGlCQUFpQixRQUFRO0FBQ2pELGlDQUFtQixLQUFLLHlCQUF5QixFQUFFLElBQUk7QUFBQSxnQkFDbkQsT0FBTyxXQUFXO0FBQUEsZ0JBQ2xCLFNBQVM7QUFBQSxjQUNiLENBQUM7QUFBQSxZQUNMO0FBQUEsVUFDSjtBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBQUEsTUFDQSxNQUFNLFNBQVMsR0FBRyxNQUFNO0FBQ3BCLGNBQU0scUJBQXFCLEtBQUssTUFBTTtBQUN0QyxjQUFNLFlBQVksS0FBSyxLQUFLO0FBRzVCLGNBQU0sZ0JBQWdCLEVBQUUsV0FBVyxlQUFlLEtBQUssWUFBWSxRQUFRLENBQUM7QUFDNUUsWUFBSSxjQUFjLFNBQVMsR0FBRztBQUMxQixjQUFJLHNCQUFzQixJQUFJLGFBQWE7QUFFM0MscUJBQVcsUUFBUSxjQUFjLENBQUMsRUFBRSxPQUFPO0FBQ3ZDLGdCQUFJLENBQUMsS0FBSyxNQUFNLFNBQVMsSUFBSSxHQUFHO0FBQzVCLGtDQUFvQixNQUFNLElBQUksSUFBSTtBQUFBLFlBQ3RDO0FBQUEsVUFDSjtBQUVBLHdCQUFjLENBQUMsRUFBRSxRQUFRLG9CQUFvQjtBQUFBLFFBQ2pEO0FBRUEsbUJBQVcsS0FBSyxTQUFTLE9BQU8sS0FBSyxRQUFRLEtBQUssWUFBWSxLQUFLLE9BQU8sSUFBSTtBQUU5RSxZQUFHLE1BQU0sSUFBSSxRQUFRO0FBQ2pCLFlBQUUsUUFBUSxFQUFFLFFBQVEsaUJBQWlCLENBQUMsS0FBSyxPQUFPLElBQUksQ0FBQztBQUFBLFFBQzNEO0FBQUEsTUFDSjtBQUFBLE1BQ0EsUUFBUSxTQUFTLEdBQUcsTUFBTTtBQUN0QixZQUFHLE1BQU0sSUFBSSxRQUFRO0FBQ2pCLFlBQUUsUUFBUSxFQUFFLFFBQVEsa0JBQWtCLENBQUMsS0FBSyxPQUFPLE1BQU0sS0FBSyxNQUFNLE1BQU0sQ0FBQztBQUFBLFFBQy9FO0FBQ0EsWUFBRyxNQUFNLElBQUksWUFBWTtBQUNyQixnQkFBTSxJQUFJLFdBQVcsS0FBSyxPQUFPLEtBQUssTUFBTSxRQUFRLElBQUk7QUFBQSxRQUM1RDtBQUFBLE1BQ0o7QUFBQSxNQUVBLGlCQUFpQixTQUFVLEdBQUcsTUFBTTtBQUNoQyxZQUFJLFNBQVMsTUFBTSxlQUFlO0FBQ2xDLFlBQUksT0FBTyxLQUFLLE1BQU0sQ0FBQztBQUN2QixlQUFPLEtBQUssRUFBQyxNQUFPLGFBQWEsT0FBTyxNQUFNLGNBQWMsSUFBSSxFQUFDLENBQUM7QUFDbEUsYUFBSyxXQUFXO0FBQUEsTUFDcEI7QUFBQSxJQUNKO0FBRUEsU0FBSyxHQUFHLFdBQVcsS0FBSyxJQUFJO0FBQUEsRUFDaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsVUFBVTtBQUNOLFFBQUk7QUFDQSxXQUFLLEdBQUcsV0FBVyxTQUFTO0FBQUEsSUFDaEMsU0FBUyxLQUFLO0FBRVYsaUJBQVcsTUFBTSxtQ0FBbUMsR0FBRztBQUFBLElBQzNEO0FBQ0EsVUFBTSxRQUFRO0FBQUEsRUFDbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFBLGFBQWEsTUFBTSxNQUFNO0FBQ3JCLFFBQUksUUFBUSxNQUNSLE1BQU0sRUFBRSx1Q0FBdUMsRUFDMUMsT0FBTywwQ0FBMEMsRUFDakQsT0FBTyx5Q0FBeUMsV0FBVyxXQUFXLEtBQUssSUFBSSxJQUFJLFFBQVEsRUFDM0YsT0FBTyxVQUFVLFdBQVcsTUFBTSxZQUFZLEtBQUssSUFBSSxJQUFJLFFBQVEsRUFDbkUsT0FBTyw0Q0FBNEMsRUFDbkQsT0FBTyxzUEFBc1AsRUFDN1AsU0FBUyxLQUFLLFVBQVU7QUFFakMsUUFBRyxLQUFLLFdBQVcsU0FBUyxvQkFBb0IsRUFBRSxTQUFTLEdBQUc7QUFDMUQsUUFBRSx1Q0FBdUMsRUFBRSxVQUFVLEdBQUc7QUFBQSxJQUM1RDtBQUdBLFFBQUcsT0FBTyxRQUFRLE9BQU8sY0FBYyxZQUFXLFlBQVksS0FBSyxLQUFLLElBQUksR0FBRztBQUMzRSxVQUFJLGNBQWMsRUFBRSxtQkFBbUIsRUFDZCxTQUFTLElBQUksU0FBUywyQkFBMkIsQ0FBQyxHQUMzRSxVQUFVLFlBQVksSUFBSSxDQUFDLEVBQUUsV0FBVyxJQUFJLEdBQzVDLFNBQVMsT0FBTyxPQUFLLE9BQU8sV0FDNUIsTUFBTSxPQUFPLGdCQUFnQixJQUFJLEdBQ2pDLE1BQU0sSUFBSSxNQUFNO0FBRWhCLFVBQUksU0FBUyxXQUFXO0FBQ3BCLFlBQUksV0FBVyxNQUFNLFlBQVksTUFBTSxRQUFRO0FBRS9DLFlBQUcsTUFBTSxJQUFJLGVBQWUsS0FBSyxPQUFPO0FBQ3BDLHFCQUFXLEtBQUs7QUFBQSxRQUNwQixPQUNLO0FBQ0QscUJBQVcsTUFBTSxJQUFJO0FBQ3JCLGtCQUFRLE1BQU0sSUFBSSxlQUFlLEtBQUs7QUFBQSxRQUMxQztBQUVBLG9CQUFZLFNBQVMsS0FBSyxTQUFTLEtBQUs7QUFFeEMsb0JBQVksS0FBSyxFQUFDLE9BQU0sVUFBVSxRQUFRLFVBQVMsQ0FBQztBQUNwRCxnQkFBUSxVQUFVLEtBQUssR0FBRyxHQUFHLFVBQVUsU0FBUztBQUFBLE1BQ3BEO0FBRUEsVUFBSSxNQUFNO0FBQUEsSUFDZDtBQUdBLFFBQUksU0FBUyw0QkFBNEIsRUFDaEMsT0FBTyxtUUFBbVE7QUFFblIsU0FBSyxNQUFNO0FBQ1gsU0FBSyxJQUFJLEtBQUssVUFBVSxLQUFLLFFBQVE7QUFDckMsU0FBSyxJQUFJLEtBQUssWUFBWSxJQUFJO0FBRTlCLFNBQUssTUFBTSxLQUFLLElBQUk7QUFFcEIsUUFBRyxLQUFLLElBQUksTUFBTTtBQUNkLFdBQUssT0FBTztBQUFBLElBQ2hCO0FBRUEsU0FBSyxlQUFlLElBQUk7QUFBQSxFQUM1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLGVBQWUsTUFBTTtBQUNqQixRQUFHLEtBQUssTUFBTSxTQUFTLEdBQUc7QUFDdEIsV0FBSyxhQUFhLEtBQUssWUFBWTtBQUNuQyxXQUFLLGFBQWEsS0FBSyxZQUFZO0FBQUEsSUFDdkM7QUFFQSxTQUFLO0FBQ0wsUUFBRyxLQUFLLGlCQUFrQixLQUFLLGNBQWMsUUFBUztBQUNsRCxXQUFLLGVBQWU7QUFBQSxJQUN4QjtBQUFBLEVBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsYUFBYTtBQUNULFFBQUksUUFBUTtBQUVaLGVBQVcsV0FBVyxLQUFLLFVBQVUsU0FBUyxRQUFRLENBQUM7QUFFdkQsUUFBSSxzQkFBc0I7QUFFMUIsU0FBSyxhQUFhLElBQUksdUpBQXVKO0FBQzdLLFNBQUssYUFBYSxHQUFHLHdCQUF3QixXQUFVO0FBQ25ELFVBQUksS0FBSyxFQUFFLElBQUk7QUFDZixVQUFHLENBQUMsR0FBRyxLQUFLLFVBQVUsR0FBRztBQUNyQixXQUFHLFNBQVMsZ0JBQWdCO0FBQUEsTUFDaEM7QUFBQSxJQUNKLENBQUMsRUFDQSxHQUFHLHVCQUF1QixXQUFXO0FBQ2xDLFFBQUUsSUFBSSxFQUFFLFlBQVksZ0NBQWdDO0FBQUEsSUFDeEQsQ0FBQyxFQUNBLEdBQUcsc0JBQXNCLFdBQVc7QUFDakMsUUFBRSxJQUFJLEVBQUUsWUFBWSxpQkFBaUIsRUFBRSxTQUFTLGdCQUFnQjtBQUFBLElBQ3BFLENBQUMsRUFDQSxHQUFHLG9CQUFvQixXQUFXO0FBQy9CLFFBQUUsSUFBSSxFQUFFLFNBQVMsZ0JBQWdCO0FBQUEsSUFDckMsQ0FBQyxFQUNBLEdBQUcsbUJBQW1CLFdBQVc7QUFDOUIsUUFBRSxJQUFJLEVBQUUsWUFBWSxnQkFBZ0I7QUFDcEMsNEJBQXNCO0FBQUEsSUFDMUIsQ0FBQyxFQUNBLEdBQUcsd0JBQXdCLFdBQVc7QUFDbkMsVUFBSSxLQUFLLEVBQUUsSUFBSTtBQUNmLFVBQUcsQ0FBQyxHQUFHLEtBQUssVUFBVSxHQUFHO0FBQ3JCLFdBQUcsU0FBUyxpQkFBaUIsRUFBRSxZQUFZLGdCQUFnQjtBQUFBLE1BQy9EO0FBQUEsSUFDSixDQUFDLEVBQ0EsR0FBRyxvQkFBb0IsU0FBUyxHQUFHO0FBQ2hDLFlBQU0sS0FBSztBQUFBLElBQ2YsQ0FBQyxFQUNBLEdBQUcsc0JBQXNCLFNBQVMsR0FBRztBQUNsQyxVQUFJLFdBQVcsTUFBTSxZQUFZLENBQUMsR0FBRztBQUNqQyxjQUFNLEtBQUs7QUFDWCxVQUFFLElBQUksRUFBRSxRQUFRLE1BQU07QUFDdEIsVUFBRSxlQUFlO0FBQUEsTUFDckI7QUFBQSxJQUNKLENBQUM7QUFFRCxTQUFLLGFBQWEsU0FBUyxPQUFPLEVBQUUsSUFBSSxrQkFBa0IsRUFBRSxHQUFHLG9CQUFvQixTQUFTLEdBQUU7QUFDMUYsVUFBSSxxQkFBcUI7QUFDckIsOEJBQXNCO0FBQ3RCLFVBQUUsZUFBZTtBQUNqQixVQUFFLGdCQUFnQjtBQUFBLE1BQ3RCLE9BQ0s7QUFDRCw4QkFBc0I7QUFBQSxNQUMxQjtBQUFBLElBQ0osQ0FBQztBQUVELFNBQUssYUFBYSxJQUFJLGtCQUFrQixFQUFFLEdBQUcsb0JBQW9CLFNBQVMsR0FBRztBQUN6RSxRQUFFLGVBQWU7QUFHakIsVUFBSSxNQUFNLElBQUksVUFBVTtBQUNwQixZQUFJLE1BQU0sSUFBSSxTQUFTLEtBQUssS0FBSyxNQUFNLE9BQU87QUFDMUMsaUJBQU87QUFBQSxRQUNYO0FBQUEsTUFDSjtBQUVBLFlBQU0sY0FBYyxNQUFNLFlBQVk7QUFDdEMsWUFBTSxjQUFjLE1BQU0sWUFBWTtBQUV0QyxZQUFNLE9BQU87QUFBQSxJQUNqQixDQUFDO0FBRUQsU0FBSyxhQUFhLElBQUksa0JBQWtCLEVBQUUsR0FBRyxvQkFBb0IsU0FBUyxHQUFHO0FBQ3pFLFlBQU0sTUFBTTtBQUNaLFlBQU0sY0FBYyxNQUFNLFlBQVk7QUFDdEMsWUFBTSxjQUFjLE1BQU0sWUFBWTtBQUV0QyxRQUFFLGVBQWU7QUFBQSxJQUNyQixDQUFDO0FBRUQsU0FBSyxpQkFBaUIsSUFBSSxrQkFBa0IsRUFBRSxHQUFHLG9CQUFvQixTQUFTLEdBQUc7QUFDN0UsWUFBTSxpQkFBaUIsUUFBUSxXQUFXO0FBQ3RDLGNBQU0sWUFBWSxTQUFTLEVBQUUsT0FBTztBQUFBLE1BQ3hDLENBQUM7QUFFRCxRQUFFLGVBQWU7QUFBQSxJQUNyQixDQUFDO0FBRUQsU0FBSywwQkFBMEIsS0FBSyxPQUFPO0FBRTNDLFFBQUksWUFBWSxnQkFBZ0IsS0FBSztBQUNyQyxNQUFFLFFBQVEsRUFBRSxJQUFJLFdBQVcsS0FBSyx1QkFBdUIsRUFDOUMsR0FBRyxjQUFZLFdBQVcsS0FBSyx5QkFBeUIsTUFBTSxTQUFTLEdBQUc7QUFDdkUsUUFBRSxJQUFJLEVBQUUsU0FBUyxnQkFBZ0I7QUFBQSxJQUNyQyxDQUFDLEVBQ0EsR0FBRyxhQUFXLFdBQVcsS0FBSyx5QkFBeUIsTUFBTSxTQUFTLEdBQUc7QUFDdEUsUUFBRSxJQUFJLEVBQUUsWUFBWSxnQ0FBZ0M7QUFBQSxJQUN4RCxDQUFDLEVBQ0EsR0FBRyxjQUFZLFdBQVcsS0FBSyx5QkFBeUIsTUFBTSxTQUFTLEdBQUc7QUFDdkUsUUFBRSxJQUFJLEVBQUUsU0FBUyxpQkFBaUIsRUFBRSxZQUFZLGdCQUFnQjtBQUFBLElBQ3BFLENBQUMsRUFDQSxHQUFHLFlBQVUsV0FBVyxLQUFLLHlCQUF5QixNQUFNLFNBQVMsR0FBRztBQUNyRSxRQUFFLElBQUksRUFBRSxTQUFTLGdCQUFnQixFQUFFLFlBQVksaUJBQWlCO0FBQUEsSUFDcEUsQ0FBQyxFQUNBLEdBQUcsVUFBUSxXQUFXLEtBQUsseUJBQXlCLE1BQU0sU0FBUyxHQUFHO0FBQ25FLFFBQUUsSUFBSSxFQUFFLFNBQVMsZ0JBQWdCO0FBQUEsSUFDckMsQ0FBQyxFQUNBLEdBQUcsU0FBTyxXQUFXLEtBQUsseUJBQXlCLE1BQU0sU0FBUyxHQUFHO0FBQ2xFLFFBQUUsSUFBSSxFQUFFLFlBQVksZ0JBQWdCO0FBQUEsSUFDeEMsQ0FBQyxFQUNBLEdBQUcsVUFBUSxXQUFXLEtBQUsseUJBQXlCLE1BQU0sU0FBUyxHQUFHO0FBQ25FLFVBQUksTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLG9CQUFvQjtBQUM5QyxVQUFJLGNBQWMsRUFBRSxLQUFLLE1BQU0sT0FBTyxTQUFVLE9BQU87QUFDbEQsZUFBUSxNQUFNLElBQUksS0FBSyxRQUFRLE1BQU0sSUFBSSxLQUFLLFFBQVE7QUFBQSxNQUMzRCxDQUFDO0FBRUQsVUFBSSxZQUFZLENBQUMsR0FBRztBQUNoQixZQUFJLFlBQVksQ0FBQyxFQUFFLGFBQWE7QUFDNUIsc0JBQVksQ0FBQyxFQUFFLFlBQVksTUFBTTtBQUFBLFFBQ3JDO0FBRUEsY0FBTSxXQUFXLFlBQVksQ0FBQyxDQUFDO0FBRS9CLFlBQUksTUFBTSxNQUFNLFdBQVcsR0FBRztBQUMxQixnQkFBTSxjQUFjLE1BQU0sWUFBWTtBQUN0QyxnQkFBTSxjQUFjLE1BQU0sWUFBWTtBQUFBLFFBQzFDO0FBQUEsTUFDSjtBQUVBLFFBQUUsZUFBZTtBQUFBLElBQ3JCLENBQUM7QUFDVCxTQUFLLG1CQUFtQixXQUFXO0FBQy9CLFFBQUUsUUFBUSxFQUFFLElBQUksU0FBUztBQUFBLElBQzdCLENBQUM7QUFFRCxRQUFJLEtBQUssVUFBVTtBQUNmLFdBQUssU0FDSSxJQUFJLHdHQUF3RyxFQUM1RyxHQUFHLHdCQUF3QixTQUFTLEdBQUU7QUFDbkMsVUFBRSxlQUFlO0FBQUEsTUFDckIsQ0FBQyxFQUNBLEdBQUcseUJBQXlCLFNBQVMsR0FBRTtBQUNwQyxVQUFFLGVBQWU7QUFDakIsY0FBTTtBQUNOLGNBQU0sU0FBUyxTQUFTLGVBQWU7QUFBQSxNQUMzQyxDQUFDLEVBQ0EsR0FBRyx5QkFBeUIsU0FBUyxHQUFFO0FBQ3BDLGNBQU07QUFDTixZQUFJLE1BQU0sa0JBQWtCLEdBQUc7QUFDM0IsZ0JBQU0sU0FBUyxZQUFZLGVBQWU7QUFBQSxRQUM5QztBQUFBLE1BQ0osQ0FBQyxFQUNBLEdBQUcseUNBQXlDLFNBQVMsR0FBRTtBQUNwRCxjQUFNLGdCQUFnQjtBQUN0QixjQUFNLFNBQVMsWUFBWSxlQUFlO0FBQUEsTUFDOUMsQ0FBQztBQUFBLElBQ2I7QUFBQSxFQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLFNBQVM7QUFDTCxRQUFHLEtBQUssSUFBSSxRQUFRO0FBQ2hCLFFBQUUsUUFBUSxFQUFFLFFBQVEsYUFBYTtBQUFBLElBQ3JDO0FBRUEsZUFBVyxRQUFRLEtBQUssT0FBTztBQUMzQixXQUFLLGNBQWMsS0FBSyxJQUFJLEtBQUssVUFBVTtBQUMzQyxXQUFLLFlBQVksT0FBTztBQUFBLElBQzVCO0FBQUEsRUFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLGlCQUFpQjtBQUNiLFFBQUksVUFBVSxLQUFLLElBQUksVUFDakIsS0FBSyxLQUFLLE1BQU0sV0FBVyxZQUFZLHVCQUF1QixrQkFBa0IsS0FBSyxJQUFJLEtBQUssSUFBSSxPQUFPLEVBQUUsS0FBSyxHQUFHLElBQ25ILEtBQUs7QUFDWCxRQUFJLFNBQVMsS0FBSyxLQUFLLGVBQWU7QUFFdEMsUUFBSSxrQkFBa0IsV0FBVyxLQUFLLFFBQVEsMEJBQTBCLEtBQUssSUFBSTtBQUVqRixlQUFXLEtBQUssUUFBUSxTQUFTLFFBQVEsV0FBVyx1QkFBdUIsTUFBTSxlQUFlO0FBQ2hHLGVBQVcsS0FBSyxRQUFRLFNBQVMsUUFBUSxXQUFXLHVCQUF1QixTQUFTLGVBQWU7QUFDbkcsZUFBVyxLQUFLLFFBQVEsU0FBUyxRQUFRLFdBQVcsc0JBQXNCLEtBQUssSUFBSSxlQUFlO0FBQ2xHLGVBQVcsS0FBSyxRQUFRLFNBQVMsUUFBUSxLQUFLLEtBQUssb0JBQW9CLEtBQUssTUFBTSxRQUFRLGVBQWU7QUFFekcsUUFBSSxLQUFLLElBQUksUUFBUTtBQUNqQixVQUFJLFNBQVMsV0FBVyxZQUFZLHVCQUF1QixrQkFBa0IsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUUsS0FBSyxHQUFHO0FBQy9HLGlCQUFXLEtBQUssUUFBUSxTQUFTLFFBQVEsV0FBVyxzQkFBc0IsUUFBUSxlQUFlO0FBQUEsSUFDckc7QUFFQSxXQUFPO0FBQUEsRUFDWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFVQSxjQUFjLE1BQU07QUFDaEIsV0FBTyxDQUFDLEtBQUssTUFBTSxLQUFLLGNBQWMsS0FBSyxNQUFNLEtBQUssSUFBSSxFQUFFLEtBQUs7QUFBQSxFQUNyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLFlBQVksT0FBTztBQUNmLGVBQVcsUUFBUSxPQUFPO0FBQ3RCLFdBQUssV0FBVyxJQUFJO0FBQUEsSUFDeEI7QUFBQSxFQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsV0FBVyxNQUFNO0FBQ2IsUUFBSSxRQUFRO0FBRVosU0FBSyxRQUFRLEVBQUUsS0FBSyxLQUFLLE9BQU8sU0FBUyxPQUFPO0FBQzVDLGFBQVEsTUFBTSxJQUFJLEtBQUssUUFBUSxNQUFNLEtBQUssSUFBSSxLQUFLLFFBQVE7QUFBQSxJQUMvRCxHQUFHLElBQUk7QUFFUCxVQUFNLGNBQWMsS0FBSyxHQUFHO0FBQzVCLFNBQUssTUFBTTtBQUFBLEVBQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPQSxjQUFjLEtBQUs7QUFDZixRQUFHLEtBQUs7QUFDSixXQUFLLGNBQWMsSUFBSSxLQUFLLGtCQUFrQixFQUFFLFNBQVMsdUJBQXVCLENBQUM7QUFFakYsVUFBSSxRQUFRLFdBQVc7QUFDbkIsVUFBRSxJQUFJLEVBQUUsT0FBTztBQUFBLE1BQ25CLENBQUM7QUFBQSxJQUNMO0FBQUEsRUFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsUUFBUTtBQUNKLGVBQVcsUUFBUSxLQUFLLE9BQU87QUFDM0IsV0FBSyxjQUFjLEtBQUssR0FBRztBQUMzQixXQUFLLE1BQU07QUFBQSxJQUNmO0FBRUEsU0FBSyxjQUFjO0FBRW5CLFNBQUssUUFBUSxDQUFDO0FBQUEsRUFDbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsaUJBQWlCO0FBQ2IsUUFBSSxTQUFTO0FBTWIsU0FBSyxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxLQUFLLE9BQU87QUFDeEQsU0FBSyxjQUFjLEtBQUssaUJBQWlCLEtBQUssMkJBQTJCO0FBQ3pFLFNBQUssbUJBQW1CLEtBQUssaUJBQWlCLEtBQUssNENBQTRDO0FBQUEsRUFDbkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLGdCQUFnQjtBQUNaLFNBQUssaUJBQWlCLEtBQUs7QUFDM0IsU0FBSyxZQUFZLFNBQVMsRUFBRSxPQUFPO0FBQUEsRUFDdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPQSxZQUFZLEtBQUs7QUFDYixTQUFLLFlBQVksT0FBTyxpREFDbEIsV0FBVyxXQUFXLElBQUksT0FBTyxJQUNqQyxtREFDQSxXQUFXLFdBQVcsSUFBSSxNQUFNLElBQ2hDLGNBQWM7QUFDcEIsU0FBSyxpQkFBaUIsS0FBSztBQUMzQixRQUFJLFdBQVc7QUFBQSxFQUNuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLGNBQWMsS0FBSztBQUNmLFFBQUksS0FBSyxZQUFZLElBQUksRUFBRSxLQUFLLGlCQUFpQixJQUFJLEVBQUUsU0FBUyxtQkFBbUIsRUFBRSxZQUFZLCtDQUErQztBQUFBLEVBQ3BKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsYUFBYSxLQUFLO0FBQ2QsUUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFLEtBQUssaUJBQWlCLEtBQUssRUFBRSxZQUFZLG1CQUFtQjtBQUFBLEVBQzVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxPQUFPO0FBQ0gsU0FBSyxhQUFhLFNBQVMsT0FBTyxFQUFFLFFBQVEsT0FBTztBQUFBLEVBQ3ZEO0FBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTF0QkksY0FOUyxhQU1GLGVBQWE7QUFOakIsSUFBTSxhQUFOOyIsCiAgIm5hbWVzIjogW10KfQo=

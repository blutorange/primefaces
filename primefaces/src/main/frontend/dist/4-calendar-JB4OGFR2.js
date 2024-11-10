import {
  BaseWidget
} from "./chunk-HGD6GSK5.js";
import {
  __commonJS,
  __toESM
} from "./chunk-YRJTWU7C.js";

// ../../../../../../.yarn/berry/cache/jquery-ui-timepicker-addon-patch-e7c4f9559c-10c0.zip/node_modules/jquery-ui-timepicker-addon/dist/jquery-ui-timepicker-addon.js
var require_jquery_ui_timepicker_addon = __commonJS({
  "../../../../../../.yarn/berry/cache/jquery-ui-timepicker-addon-patch-e7c4f9559c-10c0.zip/node_modules/jquery-ui-timepicker-addon/dist/jquery-ui-timepicker-addon.js"(exports, module) {
    (function(factory) {
      if (typeof define === "function" && define.amd) {
        define(["jquery", "jquery-ui"], factory);
      } else {
        factory(jQuery);
      }
    })(function($) {
      $.ui.timepicker = $.ui.timepicker || {};
      if ($.ui.timepicker.version) {
        return;
      }
      $.extend($.ui, {
        timepicker: {
          version: "1.6.3"
        }
      });
      var Timepicker = function() {
        this.regional = [];
        this.regional[""] = {
          // Default regional settings
          currentText: "Now",
          closeText: "Done",
          amNames: ["AM", "A"],
          pmNames: ["PM", "P"],
          timeFormat: "HH:mm",
          timeSuffix: "",
          timeOnlyTitle: "Choose Time",
          timeText: "Time",
          hourText: "Hour",
          minuteText: "Minute",
          secondText: "Second",
          millisecText: "Millisecond",
          microsecText: "Microsecond",
          timezoneText: "Time Zone",
          isRTL: false
        };
        this._defaults = {
          // Global defaults for all the datetime picker instances
          showButtonPanel: true,
          timeOnly: false,
          timeOnlyShowDate: false,
          showHour: null,
          showMinute: null,
          showSecond: null,
          showMillisec: null,
          showMicrosec: null,
          showTimezone: null,
          showTime: true,
          stepHour: 1,
          stepMinute: 1,
          stepSecond: 1,
          stepMillisec: 1,
          stepMicrosec: 1,
          hour: 0,
          minute: 0,
          second: 0,
          millisec: 0,
          microsec: 0,
          timezone: null,
          hourMin: 0,
          minuteMin: 0,
          secondMin: 0,
          millisecMin: 0,
          microsecMin: 0,
          hourMax: 23,
          minuteMax: 59,
          secondMax: 59,
          millisecMax: 999,
          microsecMax: 999,
          minDateTime: null,
          maxDateTime: null,
          maxTime: null,
          minTime: null,
          onSelect: null,
          hourGrid: 0,
          minuteGrid: 0,
          secondGrid: 0,
          millisecGrid: 0,
          microsecGrid: 0,
          alwaysSetTime: true,
          separator: " ",
          altFieldTimeOnly: true,
          altTimeFormat: null,
          altSeparator: null,
          altTimeSuffix: null,
          altRedirectFocus: true,
          pickerTimeFormat: null,
          pickerTimeSuffix: null,
          showTimepicker: true,
          timezoneList: null,
          addSliderAccess: false,
          sliderAccessArgs: null,
          controlType: "slider",
          oneLine: false,
          defaultValue: null,
          parse: "strict",
          afterInject: null
        };
        $.extend(this._defaults, this.regional[""]);
      };
      $.extend(Timepicker.prototype, {
        $input: null,
        $altInput: null,
        $timeObj: null,
        inst: null,
        hour_slider: null,
        minute_slider: null,
        second_slider: null,
        millisec_slider: null,
        microsec_slider: null,
        timezone_select: null,
        maxTime: null,
        minTime: null,
        hour: 0,
        minute: 0,
        second: 0,
        millisec: 0,
        microsec: 0,
        timezone: null,
        hourMinOriginal: null,
        minuteMinOriginal: null,
        secondMinOriginal: null,
        millisecMinOriginal: null,
        microsecMinOriginal: null,
        hourMaxOriginal: null,
        minuteMaxOriginal: null,
        secondMaxOriginal: null,
        millisecMaxOriginal: null,
        microsecMaxOriginal: null,
        ampm: "",
        formattedDate: "",
        formattedTime: "",
        formattedDateTime: "",
        timezoneList: null,
        units: ["hour", "minute", "second", "millisec", "microsec"],
        support: {},
        control: null,
        /*
        * Override the default settings for all instances of the time picker.
        * @param  {Object} settings  object - the new settings to use as defaults (anonymous object)
        * @return {Object} the manager object
        */
        setDefaults: function(settings) {
          extendRemove(this._defaults, settings || {});
          return this;
        },
        /*
        * Create a new Timepicker instance
        */
        _newInst: function($input, opts) {
          var tp_inst = new Timepicker(), inlineSettings = {}, fns = {}, overrides, i;
          for (var attrName in this._defaults) {
            if (this._defaults.hasOwnProperty(attrName)) {
              var attrValue = $input.attr("time:" + attrName);
              if (attrValue) {
                try {
                  inlineSettings[attrName] = eval(attrValue);
                } catch (err) {
                  inlineSettings[attrName] = attrValue;
                }
              }
            }
          }
          overrides = {
            beforeShow: function(input, dp_inst) {
              if (typeof tp_inst._defaults.evnts.beforeShow === "function") {
                return tp_inst._defaults.evnts.beforeShow.call($input[0], input, dp_inst, tp_inst);
              }
            },
            onChangeMonthYear: function(year, month, dp_inst) {
              if (typeof tp_inst._defaults.evnts.onChangeMonthYear === "function") {
                tp_inst._defaults.evnts.onChangeMonthYear.call($input[0], year, month, dp_inst, tp_inst);
              }
            },
            onClose: function(dateText, dp_inst) {
              if (tp_inst.timeDefined === true && $input.val() !== "") {
                tp_inst._updateDateTime(dp_inst);
              }
              if (typeof tp_inst._defaults.evnts.onClose === "function") {
                tp_inst._defaults.evnts.onClose.call($input[0], dateText, dp_inst, tp_inst);
              }
            }
          };
          for (i in overrides) {
            if (overrides.hasOwnProperty(i)) {
              fns[i] = opts[i] || this._defaults[i] || null;
            }
          }
          tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, opts, overrides, {
            evnts: fns,
            timepicker: tp_inst
            // add timepicker as a property of datepicker: $.datepicker._get(dp_inst, 'timepicker');
          });
          tp_inst.amNames = $.map(tp_inst._defaults.amNames, function(val) {
            return val.toUpperCase();
          });
          tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function(val) {
            return val.toUpperCase();
          });
          tp_inst.support = detectSupport(
            tp_inst._defaults.timeFormat + (tp_inst._defaults.pickerTimeFormat ? tp_inst._defaults.pickerTimeFormat : "") + (tp_inst._defaults.altTimeFormat ? tp_inst._defaults.altTimeFormat : "")
          );
          if (typeof tp_inst._defaults.controlType === "string") {
            if (tp_inst._defaults.controlType === "slider" && typeof $.ui.slider === "undefined") {
              tp_inst._defaults.controlType = "select";
            }
            tp_inst.control = tp_inst._controls[tp_inst._defaults.controlType];
          } else {
            tp_inst.control = tp_inst._defaults.controlType;
          }
          var timezoneList = [
            -720,
            -660,
            -600,
            -570,
            -540,
            -480,
            -420,
            -360,
            -300,
            -270,
            -240,
            -210,
            -180,
            -120,
            -60,
            0,
            60,
            120,
            180,
            210,
            240,
            270,
            300,
            330,
            345,
            360,
            390,
            420,
            480,
            525,
            540,
            570,
            600,
            630,
            660,
            690,
            720,
            765,
            780,
            840
          ];
          if (tp_inst._defaults.timezoneList !== null) {
            timezoneList = tp_inst._defaults.timezoneList;
          }
          var tzl = timezoneList.length, tzi = 0, tzv = null;
          if (tzl > 0 && typeof timezoneList[0] !== "object") {
            for (; tzi < tzl; tzi++) {
              tzv = timezoneList[tzi];
              timezoneList[tzi] = { value: tzv, label: $.timepicker.timezoneOffsetString(tzv, tp_inst.support.iso8601) };
            }
          }
          tp_inst._defaults.timezoneList = timezoneList;
          tp_inst.timezone = tp_inst._defaults.timezone !== null ? $.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone) : (/* @__PURE__ */ new Date()).getTimezoneOffset() * -1;
          tp_inst.hour = tp_inst._defaults.hour < tp_inst._defaults.hourMin ? tp_inst._defaults.hourMin : tp_inst._defaults.hour > tp_inst._defaults.hourMax ? tp_inst._defaults.hourMax : tp_inst._defaults.hour;
          tp_inst.minute = tp_inst._defaults.minute < tp_inst._defaults.minuteMin ? tp_inst._defaults.minuteMin : tp_inst._defaults.minute > tp_inst._defaults.minuteMax ? tp_inst._defaults.minuteMax : tp_inst._defaults.minute;
          tp_inst.second = tp_inst._defaults.second < tp_inst._defaults.secondMin ? tp_inst._defaults.secondMin : tp_inst._defaults.second > tp_inst._defaults.secondMax ? tp_inst._defaults.secondMax : tp_inst._defaults.second;
          tp_inst.millisec = tp_inst._defaults.millisec < tp_inst._defaults.millisecMin ? tp_inst._defaults.millisecMin : tp_inst._defaults.millisec > tp_inst._defaults.millisecMax ? tp_inst._defaults.millisecMax : tp_inst._defaults.millisec;
          tp_inst.microsec = tp_inst._defaults.microsec < tp_inst._defaults.microsecMin ? tp_inst._defaults.microsecMin : tp_inst._defaults.microsec > tp_inst._defaults.microsecMax ? tp_inst._defaults.microsecMax : tp_inst._defaults.microsec;
          tp_inst.ampm = "";
          tp_inst.$input = $input;
          if (tp_inst._defaults.altField) {
            tp_inst.$altInput = $(tp_inst._defaults.altField);
            if (tp_inst._defaults.altRedirectFocus === true) {
              tp_inst.$altInput.css({
                cursor: "pointer"
              }).on("focus", function() {
                $input.trigger("focus");
              });
            }
          }
          if (tp_inst._defaults.minDate === 0 || tp_inst._defaults.minDateTime === 0) {
            tp_inst._defaults.minDate = /* @__PURE__ */ new Date();
          }
          if (tp_inst._defaults.maxDate === 0 || tp_inst._defaults.maxDateTime === 0) {
            tp_inst._defaults.maxDate = /* @__PURE__ */ new Date();
          }
          if (tp_inst._defaults.minDate !== void 0 && tp_inst._defaults.minDate instanceof Date) {
            tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime());
          }
          if (tp_inst._defaults.minDateTime !== void 0 && tp_inst._defaults.minDateTime instanceof Date) {
            tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime());
          }
          if (tp_inst._defaults.maxDate !== void 0 && tp_inst._defaults.maxDate instanceof Date) {
            tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime());
          }
          if (tp_inst._defaults.maxDateTime !== void 0 && tp_inst._defaults.maxDateTime instanceof Date) {
            tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime());
          }
          tp_inst.$input.on("focus", function() {
            tp_inst._onFocus();
          });
          return tp_inst;
        },
        /*
        * add our sliders to the calendar
        */
        _addTimePicker: function(dp_inst) {
          var currDT = PrimeFaces.trim(this.$altInput && this._defaults.altFieldTimeOnly ? this.$input.val() + " " + this.$altInput.val() : this.$input.val());
          this.timeDefined = this._parseTime(currDT);
          this._limitMinMaxDateTime(dp_inst, false);
          this._injectTimePicker();
          this._afterInject();
        },
        /*
        * parse the time string from input value or _setTime
        */
        _parseTime: function(timeString, withDate) {
          if (!this.inst) {
            this.inst = $.datepicker._getInst(this.$input[0]);
          }
          if (withDate || !this._defaults.timeOnly) {
            var dp_dateFormat = $.datepicker._get(this.inst, "dateFormat");
            try {
              var parseRes = parseDateTimeInternal(dp_dateFormat, this._defaults.timeFormat, timeString, $.datepicker._getFormatConfig(this.inst), this._defaults);
              if (!parseRes.timeObj) {
                return false;
              }
              $.extend(this, parseRes.timeObj);
            } catch (err) {
              $.timepicker.log("Error parsing the date/time string: " + err + "\ndate/time string = " + timeString + "\ntimeFormat = " + this._defaults.timeFormat + "\ndateFormat = " + dp_dateFormat);
              return false;
            }
            return true;
          } else {
            var timeObj = $.datepicker.parseTime(this._defaults.timeFormat, timeString, this._defaults);
            if (!timeObj) {
              return false;
            }
            $.extend(this, timeObj);
            return true;
          }
        },
        /*
        * Handle callback option after injecting timepicker
        */
        _afterInject: function() {
          var o = this.inst.settings;
          if (typeof o.afterInject === "function") {
            o.afterInject.call(this);
          }
        },
        /*
        * generate and inject html for timepicker into ui datepicker
        */
        _injectTimePicker: function() {
          var $dp = this.inst.dpDiv, o = this.inst.settings, tp_inst2 = this, litem = "", uitem = "", show = null, max = {}, gridSize = {}, size = null, i2 = 0, l = 0;
          if ($dp.find("div.ui-timepicker-div").length === 0 && o.showTimepicker) {
            var noDisplay = " ui_tpicker_unit_hide", html = '<div class="ui-timepicker-div' + (o.isRTL ? " ui-timepicker-rtl" : "") + (o.oneLine && o.controlType === "select" ? " ui-timepicker-oneLine" : "") + '"><dl><dt class="ui_tpicker_time_label' + (o.showTime ? "" : noDisplay) + '">' + o.timeText + '</dt><dd class="ui_tpicker_time ' + (o.showTime ? "" : noDisplay) + '"><input class="ui_tpicker_time_input" ' + (o.timeInput ? "" : "disabled") + "></input></dd>";
            for (i2 = 0, l = this.units.length; i2 < l; i2++) {
              litem = this.units[i2];
              uitem = litem.substr(0, 1).toUpperCase() + litem.substr(1);
              show = o["show" + uitem] !== null ? o["show" + uitem] : this.support[litem];
              max[litem] = parseInt(o[litem + "Max"] - (o[litem + "Max"] - o[litem + "Min"]) % o["step" + uitem], 10);
              gridSize[litem] = 0;
              html += '<dt class="ui_tpicker_' + litem + "_label" + (show ? "" : noDisplay) + '">' + o[litem + "Text"] + '</dt><dd class="ui_tpicker_' + litem + (show ? "" : noDisplay) + '"><div class="ui_tpicker_' + litem + "_slider" + (show ? "" : noDisplay) + '"></div>';
              if (show && o[litem + "Grid"] > 0) {
                html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';
                if (litem === "hour") {
                  for (var h = o[litem + "Min"]; h <= max[litem]; h += parseInt(o[litem + "Grid"], 10)) {
                    gridSize[litem]++;
                    var tmph = $.datepicker.formatTime(this.support.ampm ? "hht" : "HH", { hour: h }, o);
                    html += '<td data-for="' + litem + '">' + tmph + "</td>";
                  }
                } else {
                  for (var m = o[litem + "Min"]; m <= max[litem]; m += parseInt(o[litem + "Grid"], 10)) {
                    gridSize[litem]++;
                    html += '<td data-for="' + litem + '">' + (m < 10 ? "0" : "") + m + "</td>";
                  }
                }
                html += "</tr></table></div>";
              }
              html += "</dd>";
            }
            var showTz = o.showTimezone !== null ? o.showTimezone : this.support.timezone;
            html += '<dt class="ui_tpicker_timezone_label' + (showTz ? "" : noDisplay) + '">' + o.timezoneText + "</dt>";
            html += '<dd class="ui_tpicker_timezone' + (showTz ? "" : noDisplay) + '"></dd>';
            html += "</dl></div>";
            var $tp = $(html);
            if (o.timeOnly === true) {
              $tp.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ui-datepicker-title">' + PrimeFaces.escapeHTML(o.timeOnlyTitle) + "</div></div>");
              $dp.find(".ui-datepicker-header, .ui-datepicker-calendar").hide();
            }
            for (i2 = 0, l = tp_inst2.units.length; i2 < l; i2++) {
              litem = tp_inst2.units[i2];
              uitem = litem.substr(0, 1).toUpperCase() + litem.substr(1);
              show = o["show" + uitem] !== null ? o["show" + uitem] : this.support[litem];
              tp_inst2[litem + "_slider"] = tp_inst2.control.create(tp_inst2, $tp.find(".ui_tpicker_" + litem + "_slider"), litem, tp_inst2[litem], o[litem + "Min"], max[litem], o["step" + uitem]);
              if (show && o[litem + "Grid"] > 0) {
                size = 100 * gridSize[litem] * o[litem + "Grid"] / (max[litem] - o[litem + "Min"]);
                $tp.find(".ui_tpicker_" + litem + " table").css({
                  width: size + "%",
                  marginLeft: o.isRTL ? "0" : size / (-2 * gridSize[litem]) + "%",
                  marginRight: o.isRTL ? size / (-2 * gridSize[litem]) + "%" : "0px",
                  borderCollapse: "collapse"
                }).find("td").on("click", function(e) {
                  var $t = $(this), h2 = $t.html(), n = parseInt(h2.replace(/[^0-9]/g), 10), ap = h2.replace(/[^apm]/ig), f = $t.data("for");
                  if (f === "hour") {
                    if (ap.indexOf("p") !== -1 && n < 12) {
                      n += 12;
                    } else {
                      if (ap.indexOf("a") !== -1 && n === 12) {
                        n = 0;
                      }
                    }
                  }
                  tp_inst2.control.value(tp_inst2, tp_inst2[f + "_slider"], litem, n);
                  tp_inst2._onTimeChange();
                  tp_inst2._onSelectHandler();
                }).css({
                  cursor: "pointer",
                  width: 100 / gridSize[litem] + "%",
                  textAlign: "center",
                  overflow: "hidden"
                });
              }
            }
            this.timezone_select = $tp.find(".ui_tpicker_timezone").append("<select></select>").find("select");
            $.fn.append.apply(
              this.timezone_select,
              $.map(o.timezoneList, function(val, idx) {
                return $("<option></option>").val(typeof val === "object" ? val.value : val).text(typeof val === "object" ? val.label : val);
              })
            );
            if (typeof this.timezone !== "undefined" && this.timezone !== null && this.timezone !== "") {
              var local_timezone = new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12).getTimezoneOffset() * -1;
              if (local_timezone === this.timezone) {
                selectLocalTimezone(tp_inst2);
              } else {
                this.timezone_select.val(this.timezone);
              }
            } else {
              if (typeof this.hour !== "undefined" && this.hour !== null && this.hour !== "") {
                this.timezone_select.val(o.timezone);
              } else {
                selectLocalTimezone(tp_inst2);
              }
            }
            this.timezone_select.on("change", function() {
              tp_inst2._onTimeChange();
              tp_inst2._onSelectHandler();
              tp_inst2._afterInject();
            });
            var $buttonPanel = $dp.find(".ui-datepicker-buttonpane");
            if ($buttonPanel.length) {
              $buttonPanel.before($tp);
            } else {
              $dp.append($tp);
            }
            this.$timeObj = $tp.find(".ui_tpicker_time_input");
            this.$timeObj.on("change", function() {
              var timeFormat = tp_inst2.inst.settings.timeFormat;
              var parsedTime = $.datepicker.parseTime(timeFormat, this.value);
              var update = /* @__PURE__ */ new Date();
              if (parsedTime) {
                update.setHours(parsedTime.hour);
                update.setMinutes(parsedTime.minute);
                update.setSeconds(parsedTime.second);
                $.datepicker._setTime(tp_inst2.inst, update);
              } else {
                this.value = tp_inst2.formattedTime;
                this.trigger("blur");
              }
            });
            if (this.inst !== null) {
              var timeDefined = this.timeDefined;
              this._onTimeChange();
              this.timeDefined = timeDefined;
            }
            if (this._defaults.addSliderAccess) {
              var sliderAccessArgs = this._defaults.sliderAccessArgs, rtl = this._defaults.isRTL;
              sliderAccessArgs.isRTL = rtl;
              setTimeout(function() {
                if ($tp.find(".ui-slider-access").length === 0) {
                  $tp.find(".ui-slider:visible").sliderAccess(sliderAccessArgs);
                  var sliderAccessWidth = $tp.find(".ui-slider-access:eq(0)").outerWidth(true);
                  if (sliderAccessWidth) {
                    $tp.find("table:visible").each(function() {
                      var $g = $(this), oldWidth = $g.outerWidth(), oldMarginLeft = $g.css(rtl ? "marginRight" : "marginLeft").toString().replace("%", ""), newWidth = oldWidth - sliderAccessWidth, newMarginLeft = oldMarginLeft * newWidth / oldWidth + "%", css = { width: newWidth + "px", marginRight: "0px", marginLeft: "0px" };
                      css[rtl ? "marginRight" : "marginLeft"] = newMarginLeft;
                      $g.css(css);
                    });
                  }
                }
              }, 10);
            }
            tp_inst2._limitMinMaxDateTime(this.inst, true);
          }
        },
        /*
        * This function tries to limit the ability to go outside the
        * min/max date range
        */
        _limitMinMaxDateTime: function(dp_inst, adjustSliders) {
          var o = this._defaults, dp_date = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay);
          if (!this._defaults.showTimepicker) {
            return;
          }
          if ($.datepicker._get(dp_inst, "minDateTime") !== null && $.datepicker._get(dp_inst, "minDateTime") !== void 0 && dp_date) {
            var minDateTime = $.datepicker._get(dp_inst, "minDateTime"), minDateTimeDate = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), 0, 0, 0, 0);
            if (this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null || this.millisecMinOriginal === null || this.microsecMinOriginal === null) {
              this.hourMinOriginal = o.hourMin;
              this.minuteMinOriginal = o.minuteMin;
              this.secondMinOriginal = o.secondMin;
              this.millisecMinOriginal = o.millisecMin;
              this.microsecMinOriginal = o.microsecMin;
            }
            if (dp_inst.settings.timeOnly || minDateTimeDate.getTime() === dp_date.getTime()) {
              this._defaults.hourMin = minDateTime.getHours();
              if (this.hour <= this._defaults.hourMin) {
                this.hour = this._defaults.hourMin;
                this._defaults.minuteMin = minDateTime.getMinutes();
                if (this.minute <= this._defaults.minuteMin) {
                  this.minute = this._defaults.minuteMin;
                  this._defaults.secondMin = minDateTime.getSeconds();
                  if (this.second <= this._defaults.secondMin) {
                    this.second = this._defaults.secondMin;
                    this._defaults.millisecMin = minDateTime.getMilliseconds();
                    if (this.millisec <= this._defaults.millisecMin) {
                      this.millisec = this._defaults.millisecMin;
                      this._defaults.microsecMin = minDateTime.getMicroseconds();
                    } else {
                      if (this.microsec < this._defaults.microsecMin) {
                        this.microsec = this._defaults.microsecMin;
                      }
                      this._defaults.microsecMin = this.microsecMinOriginal;
                    }
                  } else {
                    this._defaults.millisecMin = this.millisecMinOriginal;
                    this._defaults.microsecMin = this.microsecMinOriginal;
                  }
                } else {
                  this._defaults.secondMin = this.secondMinOriginal;
                  this._defaults.millisecMin = this.millisecMinOriginal;
                  this._defaults.microsecMin = this.microsecMinOriginal;
                }
              } else {
                this._defaults.minuteMin = this.minuteMinOriginal;
                this._defaults.secondMin = this.secondMinOriginal;
                this._defaults.millisecMin = this.millisecMinOriginal;
                this._defaults.microsecMin = this.microsecMinOriginal;
              }
            } else {
              this._defaults.hourMin = this.hourMinOriginal;
              this._defaults.minuteMin = this.minuteMinOriginal;
              this._defaults.secondMin = this.secondMinOriginal;
              this._defaults.millisecMin = this.millisecMinOriginal;
              this._defaults.microsecMin = this.microsecMinOriginal;
            }
          }
          if ($.datepicker._get(dp_inst, "maxDateTime") !== null && $.datepicker._get(dp_inst, "maxDateTime") !== void 0 && dp_date) {
            var maxDateTime = $.datepicker._get(dp_inst, "maxDateTime"), maxDateTimeDate = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), 0, 0, 0, 0);
            if (this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null || this.millisecMaxOriginal === null) {
              this.hourMaxOriginal = o.hourMax;
              this.minuteMaxOriginal = o.minuteMax;
              this.secondMaxOriginal = o.secondMax;
              this.millisecMaxOriginal = o.millisecMax;
              this.microsecMaxOriginal = o.microsecMax;
            }
            if (dp_inst.settings.timeOnly || maxDateTimeDate.getTime() === dp_date.getTime()) {
              this._defaults.hourMax = maxDateTime.getHours();
              if (this.hour >= this._defaults.hourMax) {
                this.hour = this._defaults.hourMax;
                this._defaults.minuteMax = maxDateTime.getMinutes();
                if (this.minute >= this._defaults.minuteMax) {
                  this.minute = this._defaults.minuteMax;
                  this._defaults.secondMax = maxDateTime.getSeconds();
                  if (this.second >= this._defaults.secondMax) {
                    this.second = this._defaults.secondMax;
                    this._defaults.millisecMax = maxDateTime.getMilliseconds();
                    if (this.millisec >= this._defaults.millisecMax) {
                      this.millisec = this._defaults.millisecMax;
                      this._defaults.microsecMax = maxDateTime.getMicroseconds();
                    } else {
                      if (this.microsec > this._defaults.microsecMax) {
                        this.microsec = this._defaults.microsecMax;
                      }
                      this._defaults.microsecMax = this.microsecMaxOriginal;
                    }
                  } else {
                    this._defaults.millisecMax = this.millisecMaxOriginal;
                    this._defaults.microsecMax = this.microsecMaxOriginal;
                  }
                } else {
                  this._defaults.secondMax = this.secondMaxOriginal;
                  this._defaults.millisecMax = this.millisecMaxOriginal;
                  this._defaults.microsecMax = this.microsecMaxOriginal;
                }
              } else {
                this._defaults.minuteMax = this.minuteMaxOriginal;
                this._defaults.secondMax = this.secondMaxOriginal;
                this._defaults.millisecMax = this.millisecMaxOriginal;
                this._defaults.microsecMax = this.microsecMaxOriginal;
              }
            } else {
              this._defaults.hourMax = this.hourMaxOriginal;
              this._defaults.minuteMax = this.minuteMaxOriginal;
              this._defaults.secondMax = this.secondMaxOriginal;
              this._defaults.millisecMax = this.millisecMaxOriginal;
              this._defaults.microsecMax = this.microsecMaxOriginal;
            }
          }
          if (dp_inst.settings.minTime !== null) {
            var tempMinTime = /* @__PURE__ */ new Date("01/01/1970 " + dp_inst.settings.minTime);
            if (this.hour < tempMinTime.getHours()) {
              this.hour = this._defaults.hourMin = tempMinTime.getHours();
              this.minute = this._defaults.minuteMin = tempMinTime.getMinutes();
            } else if (this.hour === tempMinTime.getHours() && this.minute < tempMinTime.getMinutes()) {
              this.minute = this._defaults.minuteMin = tempMinTime.getMinutes();
            } else {
              if (this._defaults.hourMin < tempMinTime.getHours()) {
                this._defaults.hourMin = tempMinTime.getHours();
                this._defaults.minuteMin = tempMinTime.getMinutes();
              } else if (this._defaults.hourMin === tempMinTime.getHours() === this.hour && this._defaults.minuteMin < tempMinTime.getMinutes()) {
                this._defaults.minuteMin = tempMinTime.getMinutes();
              } else {
                this._defaults.minuteMin = 0;
              }
            }
          }
          if (dp_inst.settings.maxTime !== null) {
            var tempMaxTime = /* @__PURE__ */ new Date("01/01/1970 " + dp_inst.settings.maxTime);
            if (this.hour > tempMaxTime.getHours()) {
              this.hour = this._defaults.hourMax = tempMaxTime.getHours();
              this.minute = this._defaults.minuteMax = tempMaxTime.getMinutes();
            } else if (this.hour === tempMaxTime.getHours() && this.minute > tempMaxTime.getMinutes()) {
              this.minute = this._defaults.minuteMax = tempMaxTime.getMinutes();
            } else {
              if (this._defaults.hourMax > tempMaxTime.getHours()) {
                this._defaults.hourMax = tempMaxTime.getHours();
                this._defaults.minuteMax = tempMaxTime.getMinutes();
              } else if (this._defaults.hourMax === tempMaxTime.getHours() === this.hour && this._defaults.minuteMax > tempMaxTime.getMinutes()) {
                this._defaults.minuteMax = tempMaxTime.getMinutes();
              } else {
                this._defaults.minuteMax = 59;
              }
            }
          }
          if (adjustSliders !== void 0 && adjustSliders === true) {
            var hourMax = parseInt(this._defaults.hourMax - (this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour, 10), minMax = parseInt(this._defaults.minuteMax - (this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute, 10), secMax = parseInt(this._defaults.secondMax - (this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond, 10), millisecMax = parseInt(this._defaults.millisecMax - (this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec, 10), microsecMax = parseInt(this._defaults.microsecMax - (this._defaults.microsecMax - this._defaults.microsecMin) % this._defaults.stepMicrosec, 10);
            if (this.hour_slider) {
              this.control.options(this, this.hour_slider, "hour", { min: this._defaults.hourMin, max: hourMax, step: this._defaults.stepHour });
              this.control.value(this, this.hour_slider, "hour", this.hour - this.hour % this._defaults.stepHour);
            }
            if (this.minute_slider) {
              this.control.options(this, this.minute_slider, "minute", { min: this._defaults.minuteMin, max: minMax, step: this._defaults.stepMinute });
              this.control.value(this, this.minute_slider, "minute", this.minute - this.minute % this._defaults.stepMinute);
            }
            if (this.second_slider) {
              this.control.options(this, this.second_slider, "second", { min: this._defaults.secondMin, max: secMax, step: this._defaults.stepSecond });
              this.control.value(this, this.second_slider, "second", this.second - this.second % this._defaults.stepSecond);
            }
            if (this.millisec_slider) {
              this.control.options(this, this.millisec_slider, "millisec", { min: this._defaults.millisecMin, max: millisecMax, step: this._defaults.stepMillisec });
              this.control.value(this, this.millisec_slider, "millisec", this.millisec - this.millisec % this._defaults.stepMillisec);
            }
            if (this.microsec_slider) {
              this.control.options(this, this.microsec_slider, "microsec", { min: this._defaults.microsecMin, max: microsecMax, step: this._defaults.stepMicrosec });
              this.control.value(this, this.microsec_slider, "microsec", this.microsec - this.microsec % this._defaults.stepMicrosec);
            }
          }
        },
        /*
        * when a slider moves, set the internal time...
        * on time change is also called when the time is updated in the text field
        */
        _onTimeChange: function() {
          if (!this._defaults.showTimepicker) {
            return;
          }
          var hour = this.hour_slider ? this.control.value(this, this.hour_slider, "hour") : false, minute = this.minute_slider ? this.control.value(this, this.minute_slider, "minute") : false, second = this.second_slider ? this.control.value(this, this.second_slider, "second") : false, millisec = this.millisec_slider ? this.control.value(this, this.millisec_slider, "millisec") : false, microsec = this.microsec_slider ? this.control.value(this, this.microsec_slider, "microsec") : false, timezone = this.timezone_select ? this.timezone_select.val() : false, o = this._defaults, pickerTimeFormat = o.pickerTimeFormat || o.timeFormat, pickerTimeSuffix = o.pickerTimeSuffix || o.timeSuffix;
          if (typeof hour === "object") {
            hour = false;
          }
          if (typeof minute === "object") {
            minute = false;
          }
          if (typeof second === "object") {
            second = false;
          }
          if (typeof millisec === "object") {
            millisec = false;
          }
          if (typeof microsec === "object") {
            microsec = false;
          }
          if (typeof timezone === "object") {
            timezone = false;
          }
          if (hour !== false) {
            hour = parseInt(hour, 10);
          }
          if (minute !== false) {
            minute = parseInt(minute, 10);
          }
          if (second !== false) {
            second = parseInt(second, 10);
          }
          if (millisec !== false) {
            millisec = parseInt(millisec, 10);
          }
          if (microsec !== false) {
            microsec = parseInt(microsec, 10);
          }
          if (timezone !== false) {
            timezone = timezone.toString();
          }
          var ampm = o[hour < 12 ? "amNames" : "pmNames"][0];
          var hasChanged = hour !== parseInt(this.hour, 10) || // sliders should all be numeric
          minute !== parseInt(this.minute, 10) || second !== parseInt(this.second, 10) || millisec !== parseInt(this.millisec, 10) || microsec !== parseInt(this.microsec, 10) || this.ampm.length > 0 && hour < 12 !== ($.inArray(this.ampm.toUpperCase(), this.amNames) !== -1) || this.timezone !== null && timezone !== this.timezone.toString();
          if (hasChanged) {
            if (hour !== false) {
              this.hour = hour;
            }
            if (minute !== false) {
              this.minute = minute;
            }
            if (second !== false) {
              this.second = second;
            }
            if (millisec !== false) {
              this.millisec = millisec;
            }
            if (microsec !== false) {
              this.microsec = microsec;
            }
            if (timezone !== false) {
              this.timezone = timezone;
            }
            if (!this.inst) {
              this.inst = $.datepicker._getInst(this.$input[0]);
            }
            this._limitMinMaxDateTime(this.inst, true);
          }
          if (this.support.ampm) {
            this.ampm = ampm;
          }
          this.formattedTime = $.datepicker.formatTime(o.timeFormat, this, o);
          if (this.$timeObj) {
            if (pickerTimeFormat === o.timeFormat) {
              this.$timeObj.val(this.formattedTime + pickerTimeSuffix);
            } else {
              this.$timeObj.val($.datepicker.formatTime(pickerTimeFormat, this, o) + pickerTimeSuffix);
            }
            if (this.$timeObj[0].setSelectionRange) {
              var sPos = this.$timeObj[0].selectionStart;
              var ePos = this.$timeObj[0].selectionEnd;
            }
          }
          this.timeDefined = true;
          if (hasChanged) {
            this._updateDateTime();
          }
        },
        /*
        * call custom onSelect.
        * bind to sliders slidestop, and grid click.
        */
        _onSelectHandler: function() {
          var onSelect = this._defaults.onSelect || this.inst.settings.onSelect;
          var inputEl = this.$input ? this.$input[0] : null;
          if (onSelect && inputEl) {
            onSelect.apply(inputEl, [this.formattedDateTime, this]);
          }
        },
        /*
        * update our input with the new date time..
        */
        _updateDateTime: function(dp_inst) {
          dp_inst = this.inst || dp_inst;
          var dtTmp = dp_inst.currentYear > 0 ? new Date(dp_inst.currentYear, dp_inst.currentMonth, dp_inst.currentDay) : new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay), dt = $.datepicker._daylightSavingAdjust(dtTmp), dateFmt = $.datepicker._get(dp_inst, "dateFormat"), formatCfg = $.datepicker._getFormatConfig(dp_inst), timeAvailable = dt !== null && this.timeDefined;
          this.formattedDate = $.datepicker.formatDate(dateFmt, dt === null ? /* @__PURE__ */ new Date() : dt, formatCfg);
          var formattedDateTime = this.formattedDate;
          if (dp_inst.lastVal === "") {
            dp_inst.currentYear = dp_inst.selectedYear;
            dp_inst.currentMonth = dp_inst.selectedMonth;
            dp_inst.currentDay = dp_inst.selectedDay;
          }
          if (this._defaults.timeOnly === true && this._defaults.timeOnlyShowDate === false) {
            formattedDateTime = this.formattedTime;
          } else if (this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable) || this._defaults.timeOnly === true && this._defaults.timeOnlyShowDate === true) {
            formattedDateTime += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix;
          }
          this.formattedDateTime = formattedDateTime;
          if (!this._defaults.showTimepicker) {
            this.$input.val(this.formattedDate);
          } else if (this.$altInput && this._defaults.timeOnly === false && this._defaults.altFieldTimeOnly === true) {
            this.$altInput.val(this.formattedTime);
            this.$input.val(this.formattedDate);
          } else if (this.$altInput) {
            this.$input.val(formattedDateTime);
            var altFormattedDateTime = "", altSeparator = this._defaults.altSeparator !== null ? this._defaults.altSeparator : this._defaults.separator, altTimeSuffix = this._defaults.altTimeSuffix !== null ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;
            if (!this._defaults.timeOnly) {
              if (this._defaults.altFormat) {
                altFormattedDateTime = $.datepicker.formatDate(this._defaults.altFormat, dt === null ? /* @__PURE__ */ new Date() : dt, formatCfg);
              } else {
                altFormattedDateTime = this.formattedDate;
              }
              if (altFormattedDateTime) {
                altFormattedDateTime += altSeparator;
              }
            }
            if (this._defaults.altTimeFormat !== null) {
              altFormattedDateTime += $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + altTimeSuffix;
            } else {
              altFormattedDateTime += this.formattedTime + altTimeSuffix;
            }
            this.$altInput.val(altFormattedDateTime);
          } else {
            this.$input.val(formattedDateTime);
          }
          this.$input.trigger("change");
        },
        _onFocus: function() {
          if (!this.$input.val() && this._defaults.defaultValue) {
            this.$input.val(this._defaults.defaultValue);
            var inst = $.datepicker._getInst(this.$input.get(0)), tp_inst2 = $.datepicker._get(inst, "timepicker");
            if (tp_inst2) {
              if (tp_inst2._defaults.timeOnly && inst.input.val() !== inst.lastVal) {
                try {
                  $.datepicker._updateDatepicker(inst);
                } catch (err) {
                  $.timepicker.log(err);
                }
              }
            }
          }
        },
        /*
        * Small abstraction to control types
        * We can add more, just be sure to follow the pattern: create, options, value
        */
        _controls: {
          // slider methods
          slider: {
            create: function(tp_inst2, obj, unit, val, min, max, step) {
              var rtl = tp_inst2._defaults.isRTL;
              return obj.prop("slide", null).slider({
                orientation: "horizontal",
                value: rtl ? val * -1 : val,
                min: rtl ? max * -1 : min,
                max: rtl ? min * -1 : max,
                step,
                slide: function(event, ui) {
                  tp_inst2.control.value(tp_inst2, $(this), unit, rtl ? ui.value * -1 : ui.value);
                  tp_inst2._onTimeChange();
                },
                stop: function(event, ui) {
                  tp_inst2._onSelectHandler();
                }
              });
            },
            options: function(tp_inst2, obj, unit, opts2, val) {
              if (tp_inst2._defaults.isRTL) {
                if (typeof opts2 === "string") {
                  if (opts2 === "min" || opts2 === "max") {
                    if (val !== void 0) {
                      return obj.slider(opts2, val * -1);
                    }
                    return Math.abs(obj.slider(opts2));
                  }
                  return obj.slider(opts2);
                }
                var min = opts2.min, max = opts2.max;
                opts2.min = opts2.max = null;
                if (min !== void 0) {
                  opts2.max = min * -1;
                }
                if (max !== void 0) {
                  opts2.min = max * -1;
                }
                return obj.slider(opts2);
              }
              if (typeof opts2 === "string" && val !== void 0) {
                return obj.slider(opts2, val);
              }
              return obj.slider(opts2);
            },
            value: function(tp_inst2, obj, unit, val) {
              if (tp_inst2._defaults.isRTL) {
                if (val !== void 0) {
                  return obj.slider("value", val * -1);
                }
                return Math.abs(obj.slider("value"));
              }
              if (val !== void 0) {
                return obj.slider("value", val);
              }
              return obj.slider("value");
            }
          },
          // select methods
          select: {
            create: function(tp_inst2, obj, unit, val, min, max, step) {
              var sel = '<select class="ui-timepicker-select ui-state-default ui-corner-all" data-unit="' + unit + '" data-min="' + min + '" data-max="' + max + '" data-step="' + step + '">', format = tp_inst2._defaults.pickerTimeFormat || tp_inst2._defaults.timeFormat;
              for (var i2 = min; i2 <= max; i2 += step) {
                sel += '<option value="' + i2 + '"' + (i2 === val ? " selected" : "") + ">";
                if (unit === "hour") {
                  sel += $.datepicker.formatTime(PrimeFaces.trim(format.replace(/[^ht ]/ig, "")), { hour: i2 }, tp_inst2._defaults);
                } else if (unit === "millisec" || unit === "microsec" || i2 >= 10) {
                  sel += i2;
                } else {
                  sel += "0" + i2.toString();
                }
                sel += "</option>";
              }
              sel += "</select>";
              obj.children("select").remove();
              $(sel).appendTo(obj).on("change", function(e) {
                tp_inst2._onTimeChange();
                tp_inst2._onSelectHandler();
                tp_inst2._afterInject();
              });
              return obj;
            },
            options: function(tp_inst2, obj, unit, opts2, val) {
              var o = {}, $t = obj.children("select");
              if (typeof opts2 === "string") {
                if (val === void 0) {
                  return $t.data(opts2);
                }
                o[opts2] = val;
              } else {
                o = opts2;
              }
              return tp_inst2.control.create(tp_inst2, obj, $t.data("unit"), $t.val(), o.min >= 0 ? o.min : $t.data("min"), o.max || $t.data("max"), o.step || $t.data("step"));
            },
            value: function(tp_inst2, obj, unit, val) {
              var $t = obj.children("select");
              if (val !== void 0) {
                return $t.val(val);
              }
              return $t.val();
            }
          }
        }
        // end _controls
      });
      $.fn.extend({
        /*
        * shorthand just to use timepicker.
        */
        timepicker: function(o) {
          o = o || {};
          var tmp_args = Array.prototype.slice.call(arguments);
          if (typeof o === "object") {
            tmp_args[0] = $.extend(o, {
              timeOnly: true
            });
          }
          return $(this).each(function() {
            $.fn.datetimepicker.apply($(this), tmp_args);
          });
        },
        /*
        * extend timepicker to datepicker
        */
        datetimepicker: function(o) {
          o = o || {};
          var tmp_args = arguments;
          if (typeof o === "string") {
            if (o === "getDate" || o === "option" && tmp_args.length === 2 && typeof tmp_args[1] === "string") {
              return $.fn.datepicker.apply($(this[0]), tmp_args);
            } else {
              return this.each(function() {
                var $t = $(this);
                $t.datepicker.apply($t, tmp_args);
              });
            }
          } else {
            return this.each(function() {
              var $t = $(this);
              $t.datepicker($.timepicker._newInst($t, o)._defaults);
            });
          }
        }
      });
      $.datepicker.parseDateTime = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
        var parseRes = parseDateTimeInternal(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings);
        if (parseRes.timeObj) {
          var t = parseRes.timeObj;
          parseRes.date.setHours(t.hour, t.minute, t.second, t.millisec);
          parseRes.date.setMicroseconds(t.microsec);
        }
        return parseRes.date;
      };
      $.datepicker.parseTime = function(timeFormat, timeString, options) {
        var o = extendRemove(extendRemove({}, $.timepicker._defaults), options || {}), iso8601 = timeFormat.replace(/\'.*?\'/g, "").indexOf("Z") !== -1;
        var strictParse = function(f, s, o2) {
          var getPatternAmpm = function(amNames, pmNames) {
            var markers = [];
            if (amNames) {
              $.merge(markers, amNames);
            }
            if (pmNames) {
              $.merge(markers, pmNames);
            }
            markers = $.map(markers, function(val) {
              return val.replace(/[.*+?|()\[\]{}\\]/g, "\\$&");
            });
            return "(" + markers.join("|") + ")?";
          };
          var getFormatPositions = function(timeFormat2) {
            var finds = timeFormat2.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g), orders = {
              h: -1,
              m: -1,
              s: -1,
              l: -1,
              c: -1,
              t: -1,
              z: -1
            };
            if (finds) {
              for (var i2 = 0; i2 < finds.length; i2++) {
                if (orders[finds[i2].toString().charAt(0)] === -1) {
                  orders[finds[i2].toString().charAt(0)] = i2 + 1;
                }
              }
            }
            return orders;
          };
          var regstr = "^" + f.toString().replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function(match) {
            var ml = match.length;
            switch (match.charAt(0).toLowerCase()) {
              case "h":
                return ml === 1 ? "(\\d?\\d)" : "(\\d{" + ml + "})";
              case "m":
                return ml === 1 ? "(\\d?\\d)" : "(\\d{" + ml + "})";
              case "s":
                return ml === 1 ? "(\\d?\\d)" : "(\\d{" + ml + "})";
              case "l":
                return "(\\d?\\d?\\d)";
              case "c":
                return "(\\d?\\d?\\d)";
              case "z":
                return "(z|[-+]\\d\\d:?\\d\\d|\\S+)?";
              case "t":
                return getPatternAmpm(o2.amNames, o2.pmNames);
              default:
                return "(" + match.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function(m) {
                  return "\\" + m;
                }) + ")?";
            }
          }).replace(/\s/g, "\\s?") + o2.timeSuffix + "$", order = getFormatPositions(f), ampm = "", treg;
          treg = s.match(new RegExp(regstr, "i"));
          var resTime = {
            hour: 0,
            minute: 0,
            second: 0,
            millisec: 0,
            microsec: 0
          };
          if (treg) {
            if (order.t !== -1) {
              if (treg[order.t] === void 0 || treg[order.t].length === 0) {
                ampm = "";
                resTime.ampm = "";
              } else {
                ampm = $.inArray(treg[order.t].toUpperCase(), $.map(o2.amNames, function(x, i2) {
                  return x.toUpperCase();
                })) !== -1 ? "AM" : "PM";
                resTime.ampm = o2[ampm === "AM" ? "amNames" : "pmNames"][0];
              }
            }
            if (order.h !== -1) {
              if (ampm === "AM" && treg[order.h] === "12") {
                resTime.hour = 0;
              } else {
                if (ampm === "PM" && treg[order.h] !== "12") {
                  resTime.hour = parseInt(treg[order.h], 10) + 12;
                } else {
                  resTime.hour = Number(treg[order.h]);
                }
              }
            }
            if (order.m !== -1) {
              resTime.minute = Number(treg[order.m]);
            }
            if (order.s !== -1) {
              resTime.second = Number(treg[order.s]);
            }
            if (order.l !== -1) {
              resTime.millisec = Number(treg[order.l]);
            }
            if (order.c !== -1) {
              resTime.microsec = Number(treg[order.c]);
            }
            if (order.z !== -1 && treg[order.z] !== void 0) {
              resTime.timezone = $.timepicker.timezoneOffsetNumber(treg[order.z]);
            }
            return resTime;
          }
          return false;
        };
        var looseParse = function(f, s, o2) {
          try {
            var d = /* @__PURE__ */ new Date("2012-01-01 " + s);
            if (isNaN(d.getTime())) {
              d = /* @__PURE__ */ new Date("2012-01-01T" + s);
              if (isNaN(d.getTime())) {
                d = /* @__PURE__ */ new Date("01/01/2012 " + s);
                if (isNaN(d.getTime())) {
                  throw "Unable to parse time with native Date: " + s;
                }
              }
            }
            return {
              hour: d.getHours(),
              minute: d.getMinutes(),
              second: d.getSeconds(),
              millisec: d.getMilliseconds(),
              microsec: d.getMicroseconds(),
              timezone: d.getTimezoneOffset() * -1
            };
          } catch (err) {
            try {
              return strictParse(f, s, o2);
            } catch (err2) {
              $.timepicker.log("Unable to parse \ntimeString: " + s + "\ntimeFormat: " + f);
            }
          }
          return false;
        };
        if (typeof o.parse === "function") {
          return o.parse(timeFormat, timeString, o);
        }
        if (o.parse === "loose") {
          return looseParse(timeFormat, timeString, o);
        }
        return strictParse(timeFormat, timeString, o);
      };
      $.datepicker.formatTime = function(format, time, options) {
        options = options || {};
        options = $.extend({}, $.timepicker._defaults, options);
        time = $.extend({
          hour: 0,
          minute: 0,
          second: 0,
          millisec: 0,
          microsec: 0,
          timezone: null
        }, time);
        var tmptime = format, ampmName = options.amNames[0], hour = parseInt(time.hour, 10);
        if (hour > 11) {
          ampmName = options.pmNames[0];
        }
        tmptime = tmptime.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function(match) {
          switch (match) {
            case "HH":
              return ("0" + hour).slice(-2);
            case "H":
              return hour;
            case "hh":
              return ("0" + convert24to12(hour)).slice(-2);
            case "h":
              return convert24to12(hour);
            case "mm":
              return ("0" + time.minute).slice(-2);
            case "m":
              return time.minute;
            case "ss":
              return ("0" + time.second).slice(-2);
            case "s":
              return time.second;
            case "l":
              return ("00" + time.millisec).slice(-3);
            case "c":
              return ("00" + time.microsec).slice(-3);
            case "z":
              return $.timepicker.timezoneOffsetString(time.timezone === null ? options.timezone : time.timezone, false);
            case "Z":
              return $.timepicker.timezoneOffsetString(time.timezone === null ? options.timezone : time.timezone, true);
            case "T":
              return ampmName.charAt(0).toUpperCase();
            case "TT":
              return ampmName.toUpperCase();
            case "t":
              return ampmName.charAt(0).toLowerCase();
            case "tt":
              return ampmName.toLowerCase();
            default:
              return match.replace(/'/g, "");
          }
        });
        return tmptime;
      };
      $.datepicker._base_selectDate = $.datepicker._selectDate;
      $.datepicker._selectDate = function(id, dateStr) {
        var inst = this._getInst($(id)[0]), tp_inst2 = this._get(inst, "timepicker"), was_inline;
        if (tp_inst2 && inst.settings.showTimepicker) {
          tp_inst2._limitMinMaxDateTime(inst, true);
          was_inline = inst.inline;
          inst.inline = inst.stay_open = true;
          this._base_selectDate(id, dateStr);
          inst.inline = was_inline;
          inst.stay_open = false;
          this._notifyChange(inst);
          this._updateDatepicker(inst);
        } else {
          this._base_selectDate(id, dateStr);
        }
      };
      $.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker;
      $.datepicker._updateDatepicker = function(inst) {
        var input = inst.input[0];
        if ($.datepicker._curInst && $.datepicker._curInst !== inst && $.datepicker._datepickerShowing && $.datepicker._lastInput !== input) {
          return;
        }
        if (typeof inst.stay_open !== "boolean" || inst.stay_open === false) {
          this._base_updateDatepicker(inst);
          var tp_inst2 = this._get(inst, "timepicker");
          if (tp_inst2) {
            tp_inst2._addTimePicker(inst);
          }
        }
      };
      $.datepicker._base_doKeyPress = $.datepicker._doKeyPress;
      $.datepicker._doKeyPress = function(event) {
        var inst = $.datepicker._getInst(event.target), tp_inst2 = $.datepicker._get(inst, "timepicker");
        if (tp_inst2) {
          if ($.datepicker._get(inst, "constrainInput")) {
            var ampm = tp_inst2.support.ampm, tz = tp_inst2._defaults.showTimezone !== null ? tp_inst2._defaults.showTimezone : tp_inst2.support.timezone, dateChars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat")), datetimeChars = tp_inst2._defaults.timeFormat.toString().replace(/[hms]/g, "").replace(/TT/g, ampm ? "APM" : "").replace(/Tt/g, ampm ? "AaPpMm" : "").replace(/tT/g, ampm ? "AaPpMm" : "").replace(/T/g, ampm ? "AP" : "").replace(/tt/g, ampm ? "apm" : "").replace(/t/g, ampm ? "ap" : "") + " " + tp_inst2._defaults.separator + tp_inst2._defaults.timeSuffix + (tz ? tp_inst2._defaults.timezoneList.join("") : "") + tp_inst2._defaults.amNames.join("") + tp_inst2._defaults.pmNames.join("") + dateChars, chr = String.fromCharCode(event.charCode === void 0 ? event.keyCode : event.charCode);
            return event.ctrlKey || (chr < " " || !dateChars || datetimeChars.indexOf(chr) > -1);
          }
        }
        return $.datepicker._base_doKeyPress(event);
      };
      $.datepicker._base_updateAlternate = $.datepicker._updateAlternate;
      $.datepicker._updateAlternate = function(inst) {
        var tp_inst2 = this._get(inst, "timepicker");
        if (tp_inst2) {
          var altField = tp_inst2._defaults.altField;
          if (altField) {
            var altFormat = tp_inst2._defaults.altFormat || tp_inst2._defaults.dateFormat, date = this._getDate(inst), formatCfg = $.datepicker._getFormatConfig(inst), altFormattedDateTime = "", altSeparator = tp_inst2._defaults.altSeparator ? tp_inst2._defaults.altSeparator : tp_inst2._defaults.separator, altTimeSuffix = tp_inst2._defaults.altTimeSuffix ? tp_inst2._defaults.altTimeSuffix : tp_inst2._defaults.timeSuffix, altTimeFormat = tp_inst2._defaults.altTimeFormat !== null ? tp_inst2._defaults.altTimeFormat : tp_inst2._defaults.timeFormat;
            altFormattedDateTime += $.datepicker.formatTime(altTimeFormat, tp_inst2, tp_inst2._defaults) + altTimeSuffix;
            if (!tp_inst2._defaults.timeOnly && !tp_inst2._defaults.altFieldTimeOnly && date !== null) {
              if (tp_inst2._defaults.altFormat) {
                altFormattedDateTime = $.datepicker.formatDate(tp_inst2._defaults.altFormat, date, formatCfg) + altSeparator + altFormattedDateTime;
              } else {
                altFormattedDateTime = tp_inst2.formattedDate + altSeparator + altFormattedDateTime;
              }
            }
            $(altField).val(inst.input.val() ? altFormattedDateTime : "");
          }
        } else {
          $.datepicker._base_updateAlternate(inst);
        }
      };
      $.datepicker._base_doKeyUp = $.datepicker._doKeyUp;
      $.datepicker._doKeyUp = function(event) {
        var inst = $.datepicker._getInst(event.target), tp_inst2 = $.datepicker._get(inst, "timepicker");
        if (tp_inst2) {
          if (tp_inst2._defaults.timeOnly && inst.input.val() !== inst.lastVal) {
            try {
              $.datepicker._updateDatepicker(inst);
            } catch (err) {
              $.timepicker.log(err);
            }
          }
        }
        return $.datepicker._base_doKeyUp(event);
      };
      $.datepicker._base_gotoToday = $.datepicker._gotoToday;
      $.datepicker._gotoToday = function(id) {
        var inst = this._getInst($(id)[0]);
        this._base_gotoToday(id);
        var tp_inst2 = this._get(inst, "timepicker");
        if (!tp_inst2) {
          return;
        }
        var tzoffset = $.timepicker.timezoneOffsetNumber(tp_inst2.timezone);
        var now = /* @__PURE__ */ new Date();
        now.setMinutes(now.getMinutes() + now.getTimezoneOffset() + parseInt(tzoffset, 10));
        this._setTime(inst, now);
        this._setDate(inst, now);
        tp_inst2._onSelectHandler();
      };
      $.datepicker._disableTimepickerDatepicker = function(target) {
        var inst = this._getInst(target);
        if (!inst) {
          return;
        }
        var tp_inst2 = this._get(inst, "timepicker");
        $(target).datepicker("getDate");
        if (tp_inst2) {
          inst.settings.showTimepicker = false;
          tp_inst2._defaults.showTimepicker = false;
          tp_inst2._updateDateTime(inst);
        }
      };
      $.datepicker._enableTimepickerDatepicker = function(target) {
        var inst = this._getInst(target);
        if (!inst) {
          return;
        }
        var tp_inst2 = this._get(inst, "timepicker");
        $(target).datepicker("getDate");
        if (tp_inst2) {
          inst.settings.showTimepicker = true;
          tp_inst2._defaults.showTimepicker = true;
          tp_inst2._addTimePicker(inst);
          tp_inst2._updateDateTime(inst);
        }
      };
      $.datepicker._setTime = function(inst, date) {
        var tp_inst2 = this._get(inst, "timepicker");
        if (tp_inst2) {
          var defaults = tp_inst2._defaults;
          tp_inst2.hour = date ? date.getHours() : defaults.hour;
          tp_inst2.minute = date ? date.getMinutes() : defaults.minute;
          tp_inst2.second = date ? date.getSeconds() : defaults.second;
          tp_inst2.millisec = date ? date.getMilliseconds() : defaults.millisec;
          tp_inst2.microsec = date ? date.getMicroseconds() : defaults.microsec;
          tp_inst2._limitMinMaxDateTime(inst, true);
          tp_inst2._onTimeChange();
          tp_inst2._updateDateTime(inst);
        }
      };
      $.datepicker._setTimeDatepicker = function(target, date, withDate) {
        var inst = this._getInst(target);
        if (!inst) {
          return;
        }
        var tp_inst2 = this._get(inst, "timepicker");
        if (tp_inst2) {
          this._setDateFromField(inst);
          var tp_date;
          if (date) {
            if (typeof date === "string") {
              tp_inst2._parseTime(date, withDate);
              tp_date = /* @__PURE__ */ new Date();
              tp_date.setHours(tp_inst2.hour, tp_inst2.minute, tp_inst2.second, tp_inst2.millisec);
              tp_date.setMicroseconds(tp_inst2.microsec);
            } else {
              tp_date = new Date(date.getTime());
              tp_date.setMicroseconds(date.getMicroseconds());
            }
            if (tp_date.toString() === "Invalid Date") {
              tp_date = void 0;
            }
            this._setTime(inst, tp_date);
          }
        }
      };
      $.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker;
      $.datepicker._setDateDatepicker = function(target, _date) {
        var inst = this._getInst(target);
        var date = _date;
        if (!inst) {
          return;
        }
        if (typeof _date === "string") {
          date = new Date(_date);
          if (!date.getTime()) {
            this._base_setDateDatepicker.apply(this, arguments);
            date = $(target).datepicker("getDate");
          }
        }
        var tp_inst2 = this._get(inst, "timepicker");
        var tp_date;
        if (date instanceof Date) {
          tp_date = new Date(date.getTime());
          tp_date.setMicroseconds(date.getMicroseconds());
        } else {
          tp_date = date;
        }
        if (tp_inst2 && tp_date) {
          if (!tp_inst2.support.timezone && tp_inst2._defaults.timezone === null) {
            tp_inst2.timezone = tp_date.getTimezoneOffset() * -1;
          }
          date = $.timepicker.timezoneAdjust(date, $.timepicker.timezoneOffsetString(-date.getTimezoneOffset()), tp_inst2.timezone);
          tp_date = $.timepicker.timezoneAdjust(tp_date, $.timepicker.timezoneOffsetString(-tp_date.getTimezoneOffset()), tp_inst2.timezone);
        }
        this._updateDatepicker(inst);
        this._base_setDateDatepicker.apply(this, arguments);
        this._setTimeDatepicker(target, tp_date, true);
      };
      $.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker;
      $.datepicker._getDateDatepicker = function(target, noDefault) {
        var inst = this._getInst(target);
        if (!inst) {
          return;
        }
        var tp_inst2 = this._get(inst, "timepicker");
        if (tp_inst2) {
          if (inst.lastVal === void 0) {
            this._setDateFromField(inst, noDefault);
          }
          var date = this._getDate(inst);
          var currDT = null;
          if (tp_inst2.$altInput && tp_inst2._defaults.altFieldTimeOnly) {
            currDT = tp_inst2.$input.val() + " " + tp_inst2.$altInput.val();
          } else if (tp_inst2.$input.get(0).tagName !== "INPUT" && tp_inst2.$altInput) {
            currDT = tp_inst2.$altInput.val();
          } else {
            currDT = tp_inst2.$input.val();
          }
          if (date && tp_inst2._parseTime(currDT, !inst.settings.timeOnly)) {
            date.setHours(tp_inst2.hour, tp_inst2.minute, tp_inst2.second, tp_inst2.millisec);
            date.setMicroseconds(tp_inst2.microsec);
            if (tp_inst2.timezone != null) {
              if (!tp_inst2.support.timezone && tp_inst2._defaults.timezone === null) {
                tp_inst2.timezone = date.getTimezoneOffset() * -1;
              }
              date = $.timepicker.timezoneAdjust(date, tp_inst2.timezone, $.timepicker.timezoneOffsetString(-date.getTimezoneOffset()));
            }
          }
          return date;
        }
        return this._base_getDateDatepicker(target, noDefault);
      };
      $.datepicker._base_parseDate = $.datepicker.parseDate;
      $.datepicker.parseDate = function(format, value, settings) {
        var date;
        try {
          date = this._base_parseDate(format, value, settings);
        } catch (err) {
          if (err.indexOf(":") >= 0) {
            date = this._base_parseDate(format, value.substring(0, value.length - (err.length - err.indexOf(":") - 2)), settings);
            $.timepicker.log("Error parsing the date string: " + err + "\ndate string = " + value + "\ndate format = " + format);
          } else {
            throw err;
          }
        }
        return date;
      };
      $.datepicker._base_formatDate = $.datepicker._formatDate;
      $.datepicker._formatDate = function(inst, day, month, year) {
        var tp_inst2 = this._get(inst, "timepicker");
        if (tp_inst2) {
          tp_inst2._updateDateTime(inst);
          return tp_inst2.$input.val();
        }
        return this._base_formatDate(inst);
      };
      $.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker;
      $.datepicker._optionDatepicker = function(target, name, value) {
        var inst = this._getInst(target), name_clone;
        if (!inst) {
          return null;
        }
        var tp_inst2 = this._get(inst, "timepicker");
        if (tp_inst2) {
          var min = null, max = null, onselect = null, overrides2 = tp_inst2._defaults.evnts, fns2 = {}, prop, ret, oldVal, $target;
          if (typeof name === "string") {
            if (name === "minDate" || name === "minDateTime") {
              min = value;
            } else if (name === "maxDate" || name === "maxDateTime") {
              max = value;
            } else if (name === "onSelect") {
              onselect = value;
            } else if (overrides2.hasOwnProperty(name)) {
              if (typeof value === "undefined") {
                return overrides2[name];
              }
              fns2[name] = value;
              name_clone = {};
            }
          } else if (typeof name === "object") {
            if (name.minDate) {
              min = name.minDate;
            } else if (name.minDateTime) {
              min = name.minDateTime;
            } else if (name.maxDate) {
              max = name.maxDate;
            } else if (name.maxDateTime) {
              max = name.maxDateTime;
            }
            for (prop in overrides2) {
              if (overrides2.hasOwnProperty(prop) && name[prop]) {
                fns2[prop] = name[prop];
              }
            }
          }
          for (prop in fns2) {
            if (fns2.hasOwnProperty(prop)) {
              overrides2[prop] = fns2[prop];
              if (!name_clone) {
                name_clone = $.extend({}, name);
              }
              delete name_clone[prop];
            }
          }
          if (name_clone && isEmptyObject(name_clone)) {
            return;
          }
          if (min) {
            if (min === 0) {
              min = /* @__PURE__ */ new Date();
            } else {
              min = new Date(min);
            }
            tp_inst2._defaults.minDate = min;
            tp_inst2._defaults.minDateTime = min;
          } else if (max) {
            if (max === 0) {
              max = /* @__PURE__ */ new Date();
            } else {
              max = new Date(max);
            }
            tp_inst2._defaults.maxDate = max;
            tp_inst2._defaults.maxDateTime = max;
          } else if (onselect) {
            tp_inst2._defaults.onSelect = onselect;
          }
          if (min || max) {
            $target = $(target);
            oldVal = $target.datetimepicker("getDate");
            ret = this._base_optionDatepicker.call($.datepicker, target, name_clone || name, value);
            $target.datetimepicker("setDate", oldVal);
            return ret;
          }
        }
        if (value === void 0) {
          return this._base_optionDatepicker.call($.datepicker, target, name);
        }
        return this._base_optionDatepicker.call($.datepicker, target, name_clone || name, value);
      };
      var isEmptyObject = function(obj) {
        var prop;
        for (prop in obj) {
          if (obj.hasOwnProperty(prop)) {
            return false;
          }
        }
        return true;
      };
      var extendRemove = function(target, props) {
        $.extend(target, props);
        for (var name in props) {
          if (props[name] === null || props[name] === void 0) {
            target[name] = props[name];
          }
        }
        return target;
      };
      var detectSupport = function(timeFormat) {
        var tf = timeFormat.replace(/'.*?'/g, "").toLowerCase(), isIn = function(f, t) {
          return f.indexOf(t) !== -1 ? true : false;
        };
        return {
          hour: isIn(tf, "h"),
          minute: isIn(tf, "m"),
          second: isIn(tf, "s"),
          millisec: isIn(tf, "l"),
          microsec: isIn(tf, "c"),
          timezone: isIn(tf, "z"),
          ampm: isIn(tf, "t") && isIn(timeFormat, "h"),
          iso8601: isIn(timeFormat, "Z")
        };
      };
      var convert24to12 = function(hour) {
        hour %= 12;
        if (hour === 0) {
          hour = 12;
        }
        return String(hour);
      };
      var computeEffectiveSetting = function(settings, property) {
        return settings && settings[property] ? settings[property] : $.timepicker._defaults[property];
      };
      var splitDateTime = function(dateTimeString, timeSettings) {
        var separator = computeEffectiveSetting(timeSettings, "separator"), format = computeEffectiveSetting(timeSettings, "timeFormat"), timeParts = format.split(separator), timePartsLen = timeParts.length, allParts = dateTimeString.split(separator), allPartsLen = allParts.length;
        if (allPartsLen > 1) {
          return {
            dateString: allParts.splice(0, allPartsLen - timePartsLen).join(separator),
            timeString: allParts.splice(0, timePartsLen).join(separator)
          };
        }
        return {
          dateString: dateTimeString,
          timeString: ""
        };
      };
      var parseDateTimeInternal = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
        var date, parts, parsedTime;
        parts = splitDateTime(dateTimeString, timeSettings);
        date = $.datepicker._base_parseDate(dateFormat, parts.dateString, dateSettings);
        if (parts.timeString === "") {
          return {
            date
          };
        }
        parsedTime = $.datepicker.parseTime(timeFormat, parts.timeString, timeSettings);
        if (!parsedTime) {
          throw "Wrong time format";
        }
        return {
          date,
          timeObj: parsedTime
        };
      };
      var selectLocalTimezone = function(tp_inst2, date) {
        if (tp_inst2 && tp_inst2.timezone_select) {
          var now = date || /* @__PURE__ */ new Date();
          tp_inst2.timezone_select.val(-now.getTimezoneOffset());
        }
      };
      $.timepicker = new Timepicker();
      $.timepicker.timezoneOffsetString = function(tzMinutes, iso8601) {
        if (isNaN(tzMinutes) || tzMinutes > 840 || tzMinutes < -720) {
          return tzMinutes;
        }
        var off = tzMinutes, minutes = off % 60, hours = (off - minutes) / 60, iso = iso8601 ? ":" : "", tz = (off >= 0 ? "+" : "-") + ("0" + Math.abs(hours)).slice(-2) + iso + ("0" + Math.abs(minutes)).slice(-2);
        if (tz === "+00:00") {
          return "Z";
        }
        return tz;
      };
      $.timepicker.timezoneOffsetNumber = function(tzString) {
        var normalized = tzString.toString().replace(":", "");
        if (normalized.toUpperCase() === "Z") {
          return 0;
        }
        if (!/^(\-|\+)\d{4}$/.test(normalized)) {
          return parseInt(tzString, 10);
        }
        return (normalized.substr(0, 1) === "-" ? -1 : 1) * // plus or minus
        (parseInt(normalized.substr(1, 2), 10) * 60 + // hours (converted to minutes)
        parseInt(normalized.substr(3, 2), 10));
      };
      $.timepicker.timezoneAdjust = function(date, fromTimezone, toTimezone) {
        var fromTz = $.timepicker.timezoneOffsetNumber(fromTimezone);
        var toTz = $.timepicker.timezoneOffsetNumber(toTimezone);
        if (!isNaN(toTz)) {
          date.setMinutes(date.getMinutes() + -fromTz - -toTz);
        }
        return date;
      };
      $.timepicker.timeRange = function(startTime, endTime, options) {
        return $.timepicker.handleRange("timepicker", startTime, endTime, options);
      };
      $.timepicker.datetimeRange = function(startTime, endTime, options) {
        $.timepicker.handleRange("datetimepicker", startTime, endTime, options);
      };
      $.timepicker.dateRange = function(startTime, endTime, options) {
        $.timepicker.handleRange("datepicker", startTime, endTime, options);
      };
      $.timepicker.handleRange = function(method, startTime, endTime, options) {
        options = $.extend({}, {
          minInterval: 0,
          // min allowed interval in milliseconds
          maxInterval: 0,
          // max allowed interval in milliseconds
          start: {},
          // options for start picker
          end: {}
          // options for end picker
        }, options);
        var timeOnly = false;
        if (method === "timepicker") {
          timeOnly = true;
          method = "datetimepicker";
        }
        function checkDates(changed, other) {
          var startdt = startTime[method]("getDate"), enddt = endTime[method]("getDate"), changeddt = changed[method]("getDate");
          if (startdt !== null) {
            var minDate = new Date(startdt.getTime()), maxDate = new Date(startdt.getTime());
            minDate.setMilliseconds(minDate.getMilliseconds() + options.minInterval);
            maxDate.setMilliseconds(maxDate.getMilliseconds() + options.maxInterval);
            if (options.minInterval > 0 && minDate > enddt) {
              endTime[method]("setDate", minDate);
            } else if (options.maxInterval > 0 && maxDate < enddt) {
              endTime[method]("setDate", maxDate);
            } else if (startdt > enddt) {
              other[method]("setDate", changeddt);
            }
          }
        }
        function selected(changed, other, option) {
          if (!changed.val()) {
            return;
          }
          var date = changed[method].call(changed, "getDate");
          if (date !== null && options.minInterval > 0) {
            if (option === "minDate") {
              date.setMilliseconds(date.getMilliseconds() + options.minInterval);
            }
            if (option === "maxDate") {
              date.setMilliseconds(date.getMilliseconds() - options.minInterval);
            }
          }
          if (date.getTime) {
            other[method].call(other, "option", option, date);
          }
        }
        $.fn[method].call(startTime, $.extend({
          timeOnly,
          onClose: function(dateText, inst) {
            checkDates($(this), endTime);
          },
          onSelect: function(selectedDateTime) {
            selected($(this), endTime, "minDate");
          }
        }, options, options.start));
        $.fn[method].call(endTime, $.extend({
          timeOnly,
          onClose: function(dateText, inst) {
            checkDates($(this), startTime);
          },
          onSelect: function(selectedDateTime) {
            selected($(this), startTime, "maxDate");
          }
        }, options, options.end));
        checkDates(startTime, endTime);
        selected(startTime, endTime, "minDate");
        selected(endTime, startTime, "maxDate");
        return $([startTime.get(0), endTime.get(0)]);
      };
      $.timepicker.log = function() {
        if (window.console && window.console.log && window.console.log.apply) {
          window.console.log.apply(window.console, Array.prototype.slice.call(arguments));
        }
      };
      $.timepicker._util = {
        _extendRemove: extendRemove,
        _isEmptyObject: isEmptyObject,
        _convert24to12: convert24to12,
        _detectSupport: detectSupport,
        _selectLocalTimezone: selectLocalTimezone,
        _computeEffectiveSetting: computeEffectiveSetting,
        _splitDateTime: splitDateTime,
        _parseDateTimeInternal: parseDateTimeInternal
      };
      if (!Date.prototype.getMicroseconds) {
        Date.prototype.microseconds = 0;
        Date.prototype.getMicroseconds = function() {
          return this.microseconds;
        };
        Date.prototype.setMicroseconds = function(m) {
          this.setMilliseconds(this.getMilliseconds() + Math.floor(m / 1e3));
          this.microseconds = m % 1e3;
          return this;
        };
      }
      $.timepicker.version = "1.6.3";
    });
  }
});

// ../../../../../../.yarn/berry/cache/jquery-ui-npm-1.14.1-ce85202c00-10c0.zip/node_modules/jquery-ui/ui/keycode.js
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define(["jquery", "./version"], factory);
  } else {
    factory(jQuery);
  }
})(function($2) {
  "use strict";
  return $2.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  };
});

// ../../../../../../.yarn/berry/cache/jquery-ui-npm-1.14.1-ce85202c00-10c0.zip/node_modules/jquery-ui/ui/widgets/datepicker.js
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define([
      "jquery",
      "../version",
      "../keycode"
    ], factory);
  } else {
    factory(jQuery);
  }
})(function($2) {
  "use strict";
  $2.extend($2.ui, { datepicker: { version: "1.14.1" } });
  var datepicker_instActive;
  function datepicker_getZindex(elem) {
    var position, value;
    while (elem.length && elem[0] !== document) {
      position = elem.css("position");
      if (position === "absolute" || position === "relative" || position === "fixed") {
        value = parseInt(elem.css("zIndex"), 10);
        if (!isNaN(value) && value !== 0) {
          return value;
        }
      }
      elem = elem.parent();
    }
    return 0;
  }
  function Datepicker() {
    this._curInst = null;
    this._keyEvent = false;
    this._disabledInputs = [];
    this._datepickerShowing = false;
    this._inDialog = false;
    this._mainDivId = "ui-datepicker-div";
    this._inlineClass = "ui-datepicker-inline";
    this._appendClass = "ui-datepicker-append";
    this._triggerClass = "ui-datepicker-trigger";
    this._dialogClass = "ui-datepicker-dialog";
    this._disableClass = "ui-datepicker-disabled";
    this._unselectableClass = "ui-datepicker-unselectable";
    this._currentClass = "ui-datepicker-current-day";
    this._dayOverClass = "ui-datepicker-days-cell-over";
    this.regional = [];
    this.regional[""] = {
      // Default regional settings
      closeText: "Done",
      // Display text for close link
      prevText: "Prev",
      // Display text for previous month link
      nextText: "Next",
      // Display text for next month link
      currentText: "Today",
      // Display text for current month link
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      // Names of months for drop-down and formatting
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      // For formatting
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      // For formatting
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      // For formatting
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      // Column headings for days starting at Sunday
      weekHeader: "Wk",
      // Column header for week of the year
      dateFormat: "mm/dd/yy",
      // See format options on parseDate
      firstDay: 0,
      // The first day of the week, Sun = 0, Mon = 1, ...
      isRTL: false,
      // True if right-to-left language, false if left-to-right
      showMonthAfterYear: false,
      // True if the year select precedes month, false for month then year
      yearSuffix: "",
      // Additional text to append to the year in the month headers,
      selectMonthLabel: "Select month",
      // Invisible label for month selector
      selectYearLabel: "Select year"
      // Invisible label for year selector
    };
    this._defaults = {
      // Global defaults for all the date picker instances
      showOn: "focus",
      // "focus" for popup on focus,
      // "button" for trigger button, or "both" for either
      showAnim: "fadeIn",
      // Name of jQuery animation for popup
      showOptions: {},
      // Options for enhanced animations
      defaultDate: null,
      // Used when field is blank: actual date,
      // +/-number for offset from today, null for today
      appendText: "",
      // Display text following the input box, e.g. showing the format
      buttonText: "...",
      // Text for trigger button
      buttonImage: "",
      // URL for trigger button image
      buttonImageOnly: false,
      // True if the image appears alone, false if it appears on a button
      hideIfNoPrevNext: false,
      // True to hide next/previous month links
      // if not applicable, false to just disable them
      navigationAsDateFormat: false,
      // True if date formatting applied to prev/today/next links
      gotoCurrent: false,
      // True if today link goes back to current selection instead
      changeMonth: false,
      // True if month can be selected directly, false if only prev/next
      changeYear: false,
      // True if year can be selected directly, false if only prev/next
      yearRange: "c-10:c+10",
      // Range of years to display in drop-down,
      // either relative to today's year (-nn:+nn), relative to currently displayed year
      // (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
      showOtherMonths: false,
      // True to show dates in other months, false to leave blank
      selectOtherMonths: false,
      // True to allow selection of dates in other months, false for unselectable
      showWeek: false,
      // True to show week of the year, false to not show it
      calculateWeek: this.iso8601Week,
      // How to calculate the week of the year,
      // takes a Date and returns the number of the week for it
      shortYearCutoff: "+10",
      // Short year values < this are in the current century,
      // > this are in the previous century,
      // string value starting with "+" for current year + value
      minDate: null,
      // The earliest selectable date, or null for no limit
      maxDate: null,
      // The latest selectable date, or null for no limit
      duration: "fast",
      // Duration of display/closure
      beforeShowDay: null,
      // Function that takes a date and returns an array with
      // [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
      // [2] = cell title (optional), e.g. $.datepicker.noWeekends
      beforeShow: null,
      // Function that takes an input field and
      // returns a set of custom settings for the date picker
      onSelect: null,
      // Define a callback function when a date is selected
      onChangeMonthYear: null,
      // Define a callback function when the month or year is changed
      onClose: null,
      // Define a callback function when the datepicker is closed
      onUpdateDatepicker: null,
      // Define a callback function when the datepicker is updated
      numberOfMonths: 1,
      // Number of months to show at a time
      showCurrentAtPos: 0,
      // The position in multipe months at which to show the current month (starting at 0)
      stepMonths: 1,
      // Number of months to step back/forward
      stepBigMonths: 12,
      // Number of months to step back/forward for the big links
      altField: "",
      // Selector for an alternate field to store selected dates into
      altFormat: "",
      // The date format to use for the alternate field
      constrainInput: true,
      // The input is constrained by the current date format
      showButtonPanel: false,
      // True to show button panel, false to not show it
      autoSize: false,
      // True to size the input for the date format, false to leave as is
      disabled: false
      // The initial disabled state
    };
    $2.extend(this._defaults, this.regional[""]);
    this.regional.en = $2.extend(true, {}, this.regional[""]);
    this.regional["en-US"] = $2.extend(true, {}, this.regional.en);
    this.dpDiv = datepicker_bindHover($2("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
  }
  $2.extend(Datepicker.prototype, {
    /* Class name added to elements to indicate already configured with a date picker. */
    markerClassName: "hasDatepicker",
    //Keep track of the maximum number of rows displayed (see #7043)
    maxRows: 4,
    // TODO rename to "widget" when switching to widget factory
    _widgetDatepicker: function() {
      return this.dpDiv;
    },
    /* Override the default settings for all instances of the date picker.
     * @param  settings  object - the new settings to use as defaults (anonymous object)
     * @return the manager object
     */
    setDefaults: function(settings) {
      datepicker_extendRemove(this._defaults, settings || {});
      return this;
    },
    /* Attach the date picker to a jQuery selection.
     * @param  target	element - the target input field or division or span
     * @param  settings  object - the new settings to use for this date picker instance (anonymous)
     */
    _attachDatepicker: function(target, settings) {
      var nodeName, inline, inst;
      nodeName = target.nodeName.toLowerCase();
      inline = nodeName === "div" || nodeName === "span";
      if (!target.id) {
        this.uuid += 1;
        target.id = "dp" + this.uuid;
      }
      inst = this._newInst($2(target), inline);
      inst.settings = $2.extend({}, settings || {});
      if (nodeName === "input") {
        this._connectDatepicker(target, inst);
      } else if (inline) {
        this._inlineDatepicker(target, inst);
      }
    },
    /* Create a new instance object. */
    _newInst: function(target, inline) {
      var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id,
        input: target,
        // associated target
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        // current selection
        drawMonth: 0,
        drawYear: 0,
        // month being drawn
        inline,
        // is datepicker inline or not
        dpDiv: !inline ? this.dpDiv : (
          // presentation div
          datepicker_bindHover($2("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        )
      };
    },
    /* Attach the date picker to an input field. */
    _connectDatepicker: function(target, inst) {
      var input = $2(target);
      inst.append = $2([]);
      inst.trigger = $2([]);
      if (input.hasClass(this.markerClassName)) {
        return;
      }
      this._attachments(input, inst);
      input.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp);
      this._autoSize(inst);
      $2.data(target, "datepicker", inst);
      if (inst.settings.disabled) {
        this._disableDatepicker(target);
      }
    },
    /* Make attachments based on settings. */
    _attachments: function(input, inst) {
      var showOn, buttonText, buttonImage, appendText = this._get(inst, "appendText"), isRTL = this._get(inst, "isRTL");
      if (inst.append) {
        inst.append.remove();
      }
      if (appendText) {
        inst.append = $2("<span>").addClass(this._appendClass).text(appendText);
        input[isRTL ? "before" : "after"](inst.append);
      }
      input.off("focus", this._showDatepicker);
      if (inst.trigger) {
        inst.trigger.remove();
      }
      showOn = this._get(inst, "showOn");
      if (showOn === "focus" || showOn === "both") {
        input.on("focus", this._showDatepicker);
      }
      if (showOn === "button" || showOn === "both") {
        buttonText = this._get(inst, "buttonText");
        buttonImage = this._get(inst, "buttonImage");
        if (this._get(inst, "buttonImageOnly")) {
          inst.trigger = $2("<img>").addClass(this._triggerClass).attr({
            src: buttonImage,
            alt: buttonText,
            title: buttonText
          });
        } else {
          inst.trigger = $2("<button type='button'>").addClass(this._triggerClass);
          if (buttonImage) {
            inst.trigger.html(
              $2("<img>").attr({
                src: buttonImage,
                alt: buttonText,
                title: buttonText
              })
            );
          } else {
            inst.trigger.text(buttonText);
          }
        }
        input[isRTL ? "before" : "after"](inst.trigger);
        inst.trigger.on("click", function() {
          if ($2.datepicker._datepickerShowing && $2.datepicker._lastInput === input[0]) {
            $2.datepicker._hideDatepicker();
          } else if ($2.datepicker._datepickerShowing && $2.datepicker._lastInput !== input[0]) {
            $2.datepicker._hideDatepicker();
            $2.datepicker._showDatepicker(input[0]);
          } else {
            $2.datepicker._showDatepicker(input[0]);
          }
          return false;
        });
      }
    },
    /* Apply the maximum length for the date format. */
    _autoSize: function(inst) {
      if (this._get(inst, "autoSize") && !inst.inline) {
        var findMax, max, maxI, i2, date = new Date(2009, 12 - 1, 20), dateFormat = this._get(inst, "dateFormat");
        if (dateFormat.match(/[DM]/)) {
          findMax = function(names) {
            max = 0;
            maxI = 0;
            for (i2 = 0; i2 < names.length; i2++) {
              if (names[i2].length > max) {
                max = names[i2].length;
                maxI = i2;
              }
            }
            return maxI;
          };
          date.setMonth(findMax(this._get(inst, dateFormat.match(/MM/) ? "monthNames" : "monthNamesShort")));
          date.setDate(findMax(this._get(inst, dateFormat.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - date.getDay());
        }
        inst.input.attr("size", this._formatDate(inst, date).length);
      }
    },
    /* Attach an inline date picker to a div. */
    _inlineDatepicker: function(target, inst) {
      var divSpan = $2(target);
      if (divSpan.hasClass(this.markerClassName)) {
        return;
      }
      divSpan.addClass(this.markerClassName).append(inst.dpDiv);
      $2.data(target, "datepicker", inst);
      this._setDate(inst, this._getDefaultDate(inst), true);
      this._updateDatepicker(inst);
      this._updateAlternate(inst);
      if (inst.settings.disabled) {
        this._disableDatepicker(target);
      }
      inst.dpDiv.css("display", "block");
    },
    /* Pop-up the date picker in a "dialog" box.
     * @param  input element - ignored
     * @param  date	string or Date - the initial date to display
     * @param  onSelect  function - the function to call when a date is selected
     * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
     * @param  pos int[2] - coordinates for the dialog's position within the screen or
     *					event - with x/y coordinates or
     *					leave empty for default (screen centre)
     * @return the manager object
     */
    _dialogDatepicker: function(input, date, onSelect, settings, pos) {
      var id, browserWidth, browserHeight, scrollX, scrollY, inst = this._dialogInst;
      if (!inst) {
        this.uuid += 1;
        id = "dp" + this.uuid;
        this._dialogInput = $2("<input type='text' id='" + id + "' style='position: absolute; top: -100px; width: 0px;'/>");
        this._dialogInput.on("keydown", this._doKeyDown);
        $2("body").append(this._dialogInput);
        inst = this._dialogInst = this._newInst(this._dialogInput, false);
        inst.settings = {};
        $2.data(this._dialogInput[0], "datepicker", inst);
      }
      datepicker_extendRemove(inst.settings, settings || {});
      date = date && date.constructor === Date ? this._formatDate(inst, date) : date;
      this._dialogInput.val(date);
      this._pos = pos ? pos.length ? pos : [pos.pageX, pos.pageY] : null;
      if (!this._pos) {
        browserWidth = document.documentElement.clientWidth;
        browserHeight = document.documentElement.clientHeight;
        scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
        scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        this._pos = // should use actual width/height below
        [browserWidth / 2 - 100 + scrollX, browserHeight / 2 - 150 + scrollY];
      }
      this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
      inst.settings.onSelect = onSelect;
      this._inDialog = true;
      this.dpDiv.addClass(this._dialogClass);
      this._showDatepicker(this._dialogInput[0]);
      if ($2.blockUI) {
        $2.blockUI(this.dpDiv);
      }
      $2.data(this._dialogInput[0], "datepicker", inst);
      return this;
    },
    /* Detach a datepicker from its control.
     * @param  target	element - the target input field or division or span
     */
    _destroyDatepicker: function(target) {
      var nodeName, $target = $2(target), inst = $2.data(target, "datepicker");
      if (!$target.hasClass(this.markerClassName)) {
        return;
      }
      nodeName = target.nodeName.toLowerCase();
      $2.removeData(target, "datepicker");
      if (nodeName === "input") {
        inst.append.remove();
        inst.trigger.remove();
        $target.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp);
      } else if (nodeName === "div" || nodeName === "span") {
        $target.removeClass(this.markerClassName).empty();
      }
      $2.datepicker._hideDatepicker();
      if (datepicker_instActive === inst) {
        datepicker_instActive = null;
        this._curInst = null;
      }
    },
    /* Enable the date picker to a jQuery selection.
     * @param  target	element - the target input field or division or span
     */
    _enableDatepicker: function(target) {
      var nodeName, inline, $target = $2(target), inst = $2.data(target, "datepicker");
      if (!$target.hasClass(this.markerClassName)) {
        return;
      }
      nodeName = target.nodeName.toLowerCase();
      if (nodeName === "input") {
        target.disabled = false;
        inst.trigger.filter("button").each(function() {
          this.disabled = false;
        }).end().filter("img").css({ opacity: "1.0", cursor: "" });
      } else if (nodeName === "div" || nodeName === "span") {
        inline = $target.children("." + this._inlineClass);
        inline.children().removeClass("ui-state-disabled");
        inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false);
      }
      this._disabledInputs = $2.map(
        this._disabledInputs,
        // Delete entry
        function(value) {
          return value === target ? null : value;
        }
      );
    },
    /* Disable the date picker to a jQuery selection.
     * @param  target	element - the target input field or division or span
     */
    _disableDatepicker: function(target) {
      var nodeName, inline, $target = $2(target), inst = $2.data(target, "datepicker");
      if (!$target.hasClass(this.markerClassName)) {
        return;
      }
      nodeName = target.nodeName.toLowerCase();
      if (nodeName === "input") {
        target.disabled = true;
        inst.trigger.filter("button").each(function() {
          this.disabled = true;
        }).end().filter("img").css({ opacity: "0.5", cursor: "default" });
      } else if (nodeName === "div" || nodeName === "span") {
        inline = $target.children("." + this._inlineClass);
        inline.children().addClass("ui-state-disabled");
        inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true);
      }
      this._disabledInputs = $2.map(
        this._disabledInputs,
        // Delete entry
        function(value) {
          return value === target ? null : value;
        }
      );
      this._disabledInputs[this._disabledInputs.length] = target;
    },
    /* Is the first field in a jQuery collection disabled as a datepicker?
     * @param  target	element - the target input field or division or span
     * @return boolean - true if disabled, false if enabled
     */
    _isDisabledDatepicker: function(target) {
      if (!target) {
        return false;
      }
      for (var i2 = 0; i2 < this._disabledInputs.length; i2++) {
        if (this._disabledInputs[i2] === target) {
          return true;
        }
      }
      return false;
    },
    /* Retrieve the instance data for the target control.
     * @param  target  element - the target input field or division or span
     * @return  object - the associated instance data
     * @throws  error if a jQuery problem getting data
     */
    _getInst: function(target) {
      try {
        return $2.data(target, "datepicker");
      } catch (err) {
        throw "Missing instance data for this datepicker";
      }
    },
    /* Update or retrieve the settings for a date picker attached to an input field or division.
     * @param  target  element - the target input field or division or span
     * @param  name	object - the new settings to update or
     *				string - the name of the setting to change or retrieve,
     *				when retrieving also "all" for all instance settings or
     *				"defaults" for all global defaults
     * @param  value   any - the new value for the setting
     *				(omit if above is an object or to retrieve a value)
     */
    _optionDatepicker: function(target, name, value) {
      var settings, date, minDate, maxDate, inst = this._getInst(target);
      if (arguments.length === 2 && typeof name === "string") {
        return name === "defaults" ? $2.extend({}, $2.datepicker._defaults) : inst ? name === "all" ? $2.extend({}, inst.settings) : this._get(inst, name) : null;
      }
      settings = name || {};
      if (typeof name === "string") {
        settings = {};
        settings[name] = value;
      }
      if (inst) {
        if (this._curInst === inst) {
          this._hideDatepicker();
        }
        date = this._getDateDatepicker(target, true);
        minDate = this._getMinMaxDate(inst, "min");
        maxDate = this._getMinMaxDate(inst, "max");
        datepicker_extendRemove(inst.settings, settings);
        if (minDate !== null && settings.dateFormat !== void 0 && settings.minDate === void 0) {
          inst.settings.minDate = this._formatDate(inst, minDate);
        }
        if (maxDate !== null && settings.dateFormat !== void 0 && settings.maxDate === void 0) {
          inst.settings.maxDate = this._formatDate(inst, maxDate);
        }
        if ("disabled" in settings) {
          if (settings.disabled) {
            this._disableDatepicker(target);
          } else {
            this._enableDatepicker(target);
          }
        }
        this._attachments($2(target), inst);
        this._autoSize(inst);
        this._setDate(inst, date);
        this._updateAlternate(inst);
        this._updateDatepicker(inst);
      }
    },
    // Change method deprecated
    _changeDatepicker: function(target, name, value) {
      this._optionDatepicker(target, name, value);
    },
    /* Redraw the date picker attached to an input field or division.
     * @param  target  element - the target input field or division or span
     */
    _refreshDatepicker: function(target) {
      var inst = this._getInst(target);
      if (inst) {
        this._updateDatepicker(inst);
      }
    },
    /* Set the dates for a jQuery selection.
     * @param  target element - the target input field or division or span
     * @param  date	Date - the new date
     */
    _setDateDatepicker: function(target, date) {
      var inst = this._getInst(target);
      if (inst) {
        this._setDate(inst, date);
        this._updateDatepicker(inst);
        this._updateAlternate(inst);
      }
    },
    /* Get the date(s) for the first entry in a jQuery selection.
     * @param  target element - the target input field or division or span
     * @param  noDefault boolean - true if no default date is to be used
     * @return Date - the current date
     */
    _getDateDatepicker: function(target, noDefault) {
      var inst = this._getInst(target);
      if (inst && !inst.inline) {
        this._setDateFromField(inst, noDefault);
      }
      return inst ? this._getDate(inst) : null;
    },
    /* Handle keystrokes. */
    _doKeyDown: function(event) {
      var onSelect, dateStr, sel, inst = $2.datepicker._getInst(event.target), handled = true, isRTL = inst.dpDiv.is(".ui-datepicker-rtl");
      inst._keyEvent = true;
      if ($2.datepicker._datepickerShowing) {
        switch (event.keyCode) {
          case 9:
            $2.datepicker._hideDatepicker();
            handled = false;
            break;
          // hide on tab out
          case 13:
            sel = $2("td." + $2.datepicker._dayOverClass + ":not(." + $2.datepicker._currentClass + ")", inst.dpDiv);
            if (sel[0]) {
              $2.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
            }
            onSelect = $2.datepicker._get(inst, "onSelect");
            if (onSelect) {
              dateStr = $2.datepicker._formatDate(inst);
              onSelect.apply(inst.input ? inst.input[0] : null, [dateStr, inst]);
            } else {
              $2.datepicker._hideDatepicker();
            }
            return false;
          // don't submit the form
          case 27:
            $2.datepicker._hideDatepicker();
            break;
          // hide on escape
          case 33:
            $2.datepicker._adjustDate(event.target, event.ctrlKey ? -$2.datepicker._get(inst, "stepBigMonths") : -$2.datepicker._get(inst, "stepMonths"), "M");
            break;
          // previous month/year on page up/+ ctrl
          case 34:
            $2.datepicker._adjustDate(event.target, event.ctrlKey ? +$2.datepicker._get(inst, "stepBigMonths") : +$2.datepicker._get(inst, "stepMonths"), "M");
            break;
          // next month/year on page down/+ ctrl
          case 35:
            if (event.ctrlKey || event.metaKey) {
              $2.datepicker._clearDate(event.target);
            }
            handled = event.ctrlKey || event.metaKey;
            break;
          // clear on ctrl or command +end
          case 36:
            if (event.ctrlKey || event.metaKey) {
              $2.datepicker._gotoToday(event.target);
            }
            handled = event.ctrlKey || event.metaKey;
            break;
          // current on ctrl or command +home
          case 37:
            if (event.ctrlKey || event.metaKey) {
              $2.datepicker._adjustDate(event.target, isRTL ? 1 : -1, "D");
            }
            handled = event.ctrlKey || event.metaKey;
            if (event.originalEvent.altKey) {
              $2.datepicker._adjustDate(event.target, event.ctrlKey ? -$2.datepicker._get(inst, "stepBigMonths") : -$2.datepicker._get(inst, "stepMonths"), "M");
            }
            break;
          case 38:
            if (event.ctrlKey || event.metaKey) {
              $2.datepicker._adjustDate(event.target, -7, "D");
            }
            handled = event.ctrlKey || event.metaKey;
            break;
          // -1 week on ctrl or command +up
          case 39:
            if (event.ctrlKey || event.metaKey) {
              $2.datepicker._adjustDate(event.target, isRTL ? -1 : 1, "D");
            }
            handled = event.ctrlKey || event.metaKey;
            if (event.originalEvent.altKey) {
              $2.datepicker._adjustDate(event.target, event.ctrlKey ? +$2.datepicker._get(inst, "stepBigMonths") : +$2.datepicker._get(inst, "stepMonths"), "M");
            }
            break;
          case 40:
            if (event.ctrlKey || event.metaKey) {
              $2.datepicker._adjustDate(event.target, 7, "D");
            }
            handled = event.ctrlKey || event.metaKey;
            break;
          // +1 week on ctrl or command +down
          default:
            handled = false;
        }
      } else if (event.keyCode === 36 && event.ctrlKey) {
        $2.datepicker._showDatepicker(this);
      } else {
        handled = false;
      }
      if (handled) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    /* Filter entered characters - based on date format. */
    _doKeyPress: function(event) {
      var chars, chr, inst = $2.datepicker._getInst(event.target);
      if ($2.datepicker._get(inst, "constrainInput")) {
        chars = $2.datepicker._possibleChars($2.datepicker._get(inst, "dateFormat"));
        chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode);
        return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1);
      }
    },
    /* Synchronise manual entry and field/alternate field. */
    _doKeyUp: function(event) {
      var date, inst = $2.datepicker._getInst(event.target);
      if (inst.input.val() !== inst.lastVal) {
        try {
          date = $2.datepicker.parseDate(
            $2.datepicker._get(inst, "dateFormat"),
            inst.input ? inst.input.val() : null,
            $2.datepicker._getFormatConfig(inst)
          );
          if (date) {
            $2.datepicker._setDateFromField(inst);
            $2.datepicker._updateAlternate(inst);
            $2.datepicker._updateDatepicker(inst);
          }
        } catch (err) {
        }
      }
      return true;
    },
    /* Pop-up the date picker for a given input field.
     * If false returned from beforeShow event handler do not show.
     * @param  input  element - the input field attached to the date picker or
     *					event - if triggered by focus
     */
    _showDatepicker: function(input) {
      input = input.target || input;
      if (input.nodeName.toLowerCase() !== "input") {
        input = $2("input", input.parentNode)[0];
      }
      if ($2.datepicker._isDisabledDatepicker(input) || $2.datepicker._lastInput === input) {
        return;
      }
      var inst, beforeShow, beforeShowSettings, isFixed, offset, showAnim, duration;
      inst = $2.datepicker._getInst(input);
      if ($2.datepicker._curInst && $2.datepicker._curInst !== inst) {
        $2.datepicker._curInst.dpDiv.stop(true, true);
        if (inst && $2.datepicker._datepickerShowing) {
          $2.datepicker._hideDatepicker($2.datepicker._curInst.input[0]);
        }
      }
      beforeShow = $2.datepicker._get(inst, "beforeShow");
      beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
      if (beforeShowSettings === false) {
        return;
      }
      datepicker_extendRemove(inst.settings, beforeShowSettings);
      inst.lastVal = null;
      $2.datepicker._lastInput = input;
      $2.datepicker._setDateFromField(inst);
      if ($2.datepicker._inDialog) {
        input.value = "";
      }
      if (!$2.datepicker._pos) {
        $2.datepicker._pos = $2.datepicker._findPos(input);
        $2.datepicker._pos[1] += input.offsetHeight;
      }
      isFixed = false;
      $2(input).parents().each(function() {
        isFixed |= $2(this).css("position") === "fixed";
        return !isFixed;
      });
      offset = { left: $2.datepicker._pos[0], top: $2.datepicker._pos[1] };
      $2.datepicker._pos = null;
      inst.dpDiv.empty();
      inst.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" });
      $2.datepicker._updateDatepicker(inst);
      offset = $2.datepicker._checkOffset(inst, offset, isFixed);
      inst.dpDiv.css({
        position: $2.datepicker._inDialog && $2.blockUI ? "static" : isFixed ? "fixed" : "absolute",
        display: "none",
        left: offset.left + "px",
        top: offset.top + "px"
      });
      if (!inst.inline) {
        showAnim = $2.datepicker._get(inst, "showAnim");
        duration = $2.datepicker._get(inst, "duration");
        inst.dpDiv.css("z-index", datepicker_getZindex($2(input)) + 1);
        $2.datepicker._datepickerShowing = true;
        if ($2.effects && $2.effects.effect[showAnim]) {
          inst.dpDiv.show(showAnim, $2.datepicker._get(inst, "showOptions"), duration);
        } else {
          inst.dpDiv[showAnim || "show"](showAnim ? duration : null);
        }
        if ($2.datepicker._shouldFocusInput(inst)) {
          inst.input.trigger("focus");
        }
        $2.datepicker._curInst = inst;
      }
    },
    /* Generate the date picker content. */
    _updateDatepicker: function(inst) {
      this.maxRows = 4;
      datepicker_instActive = inst;
      inst.dpDiv.empty().append(this._generateHTML(inst));
      this._attachHandlers(inst);
      var origyearshtml, numMonths = this._getNumberOfMonths(inst), cols = numMonths[1], width = 17, activeCell = inst.dpDiv.find("." + this._dayOverClass + " a"), onUpdateDatepicker = $2.datepicker._get(inst, "onUpdateDatepicker");
      if (activeCell.length > 0) {
        datepicker_handleMouseover.apply(activeCell.get(0));
      }
      inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
      if (cols > 1) {
        inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", width * cols + "em");
      }
      inst.dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
      inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
      if (inst === $2.datepicker._curInst && $2.datepicker._datepickerShowing && $2.datepicker._shouldFocusInput(inst)) {
        inst.input.trigger("focus");
      }
      if (inst.yearshtml) {
        origyearshtml = inst.yearshtml;
        setTimeout(function() {
          if (origyearshtml === inst.yearshtml && inst.yearshtml) {
            inst.dpDiv.find("select.ui-datepicker-year").first().replaceWith(inst.yearshtml);
          }
          origyearshtml = inst.yearshtml = null;
        }, 0);
      }
      if (onUpdateDatepicker) {
        onUpdateDatepicker.apply(inst.input ? inst.input[0] : null, [inst]);
      }
    },
    _shouldFocusInput: function(inst) {
      return inst.input && inst.input.is(":visible") && !inst.input.is(":disabled");
    },
    /* Check positioning to remain on screen. */
    _checkOffset: function(inst, offset, isFixed) {
      var dpWidth = inst.dpDiv.outerWidth(), dpHeight = inst.dpDiv.outerHeight(), inputWidth = inst.input ? inst.input.outerWidth() : 0, inputHeight = inst.input ? inst.input.outerHeight() : 0, viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $2(document).scrollLeft()), viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $2(document).scrollTop());
      offset.left -= this._get(inst, "isRTL") ? dpWidth - inputWidth : 0;
      offset.left -= isFixed && offset.left === inst.input.offset().left ? $2(document).scrollLeft() : 0;
      offset.top -= isFixed && offset.top === inst.input.offset().top + inputHeight ? $2(document).scrollTop() : 0;
      offset.left -= Math.min(offset.left, offset.left + dpWidth > viewWidth && viewWidth > dpWidth ? Math.abs(offset.left + dpWidth - viewWidth) : 0);
      offset.top -= Math.min(offset.top, offset.top + dpHeight > viewHeight && viewHeight > dpHeight ? Math.abs(dpHeight + inputHeight) : 0);
      return offset;
    },
    /* Find an object's position on the screen. */
    _findPos: function(obj) {
      var position, inst = this._getInst(obj), isRTL = this._get(inst, "isRTL");
      while (obj && (obj.type === "hidden" || obj.nodeType !== 1 || $2.expr.pseudos.hidden(obj))) {
        obj = obj[isRTL ? "previousSibling" : "nextSibling"];
      }
      position = $2(obj).offset();
      return [position.left, position.top];
    },
    /* Hide the date picker from view.
     * @param  input  element - the input field attached to the date picker
     */
    _hideDatepicker: function(input) {
      var showAnim, duration, postProcess, onClose, inst = this._curInst;
      if (!inst || input && inst !== $2.data(input, "datepicker")) {
        return;
      }
      if (this._datepickerShowing) {
        showAnim = this._get(inst, "showAnim");
        duration = this._get(inst, "duration");
        postProcess = function() {
          $2.datepicker._tidyDialog(inst);
        };
        if ($2.effects && $2.effects.effect[showAnim]) {
          inst.dpDiv.hide(showAnim, $2.datepicker._get(inst, "showOptions"), duration, postProcess);
        } else {
          inst.dpDiv[showAnim === "slideDown" ? "slideUp" : showAnim === "fadeIn" ? "fadeOut" : "hide"](showAnim ? duration : null, postProcess);
        }
        if (!showAnim) {
          postProcess();
        }
        this._datepickerShowing = false;
        onClose = this._get(inst, "onClose");
        if (onClose) {
          onClose.apply(inst.input ? inst.input[0] : null, [inst.input ? inst.input.val() : "", inst]);
        }
        this._lastInput = null;
        if (this._inDialog) {
          this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" });
          if ($2.blockUI) {
            $2.unblockUI();
            $2("body").append(this.dpDiv);
          }
        }
        this._inDialog = false;
      }
    },
    /* Tidy up after a dialog display. */
    _tidyDialog: function(inst) {
      inst.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
    },
    /* Close date picker if clicked elsewhere. */
    _checkExternalClick: function(event) {
      if (!$2.datepicker._curInst) {
        return;
      }
      var $target = $2(event.target), inst = $2.datepicker._getInst($target[0]);
      if ($target[0].id !== $2.datepicker._mainDivId && $target.parents("#" + $2.datepicker._mainDivId).length === 0 && !$target.hasClass($2.datepicker.markerClassName) && !$target.closest("." + $2.datepicker._triggerClass).length && $2.datepicker._datepickerShowing && !($2.datepicker._inDialog && $2.blockUI) || $target.hasClass($2.datepicker.markerClassName) && $2.datepicker._curInst !== inst) {
        $2.datepicker._hideDatepicker();
      }
    },
    /* Adjust one of the date sub-fields. */
    _adjustDate: function(id, offset, period) {
      var target = $2(id), inst = this._getInst(target[0]);
      if (this._isDisabledDatepicker(target[0])) {
        return;
      }
      this._adjustInstDate(inst, offset, period);
      this._updateDatepicker(inst);
    },
    /* Action for current link. */
    _gotoToday: function(id) {
      var date, target = $2(id), inst = this._getInst(target[0]);
      if (this._get(inst, "gotoCurrent") && inst.currentDay) {
        inst.selectedDay = inst.currentDay;
        inst.drawMonth = inst.selectedMonth = inst.currentMonth;
        inst.drawYear = inst.selectedYear = inst.currentYear;
      } else {
        date = /* @__PURE__ */ new Date();
        inst.selectedDay = date.getDate();
        inst.drawMonth = inst.selectedMonth = date.getMonth();
        inst.drawYear = inst.selectedYear = date.getFullYear();
      }
      this._notifyChange(inst);
      this._adjustDate(target);
    },
    /* Action for selecting a new month/year. */
    _selectMonthYear: function(id, select, period) {
      var target = $2(id), inst = this._getInst(target[0]);
      inst["selected" + (period === "M" ? "Month" : "Year")] = inst["draw" + (period === "M" ? "Month" : "Year")] = parseInt(select.options[select.selectedIndex].value, 10);
      this._notifyChange(inst);
      this._adjustDate(target);
    },
    /* Action for selecting a day. */
    _selectDay: function(id, month, year, td) {
      var inst, target = $2(id);
      if ($2(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
        return;
      }
      inst = this._getInst(target[0]);
      inst.selectedDay = inst.currentDay = parseInt($2("a", td).attr("data-date"));
      inst.selectedMonth = inst.currentMonth = month;
      inst.selectedYear = inst.currentYear = year;
      this._selectDate(id, this._formatDate(
        inst,
        inst.currentDay,
        inst.currentMonth,
        inst.currentYear
      ));
    },
    /* Erase the input field and hide the date picker. */
    _clearDate: function(id) {
      var target = $2(id);
      this._selectDate(target, "");
    },
    /* Update the input field with the selected date. */
    _selectDate: function(id, dateStr) {
      var onSelect, target = $2(id), inst = this._getInst(target[0]);
      dateStr = dateStr != null ? dateStr : this._formatDate(inst);
      if (inst.input) {
        inst.input.val(dateStr);
      }
      this._updateAlternate(inst);
      onSelect = this._get(inst, "onSelect");
      if (onSelect) {
        onSelect.apply(inst.input ? inst.input[0] : null, [dateStr, inst]);
      } else if (inst.input) {
        inst.input.trigger("change");
      }
      if (inst.inline) {
        this._updateDatepicker(inst);
      } else {
        this._hideDatepicker();
        this._lastInput = inst.input[0];
        if (typeof inst.input[0] !== "object") {
          inst.input.trigger("focus");
        }
        this._lastInput = null;
      }
    },
    /* Update any alternate field to synchronise with the main field. */
    _updateAlternate: function(inst) {
      var altFormat, date, dateStr, altField = this._get(inst, "altField");
      if (altField) {
        altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
        date = this._getDate(inst);
        dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
        $2(document).find(altField).val(dateStr);
      }
    },
    /* Set as beforeShowDay function to prevent selection of weekends.
     * @param  date  Date - the date to customise
     * @return [boolean, string] - is this date selectable?, what is its CSS class?
     */
    noWeekends: function(date) {
      var day = date.getDay();
      return [day > 0 && day < 6, ""];
    },
    /* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
     * @param  date  Date - the date to get the week for
     * @return  number - the number of the week within the year that contains this date
     */
    iso8601Week: function(date) {
      var time, checkDate = new Date(date.getTime());
      checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
      time = checkDate.getTime();
      checkDate.setMonth(0);
      checkDate.setDate(1);
      return Math.floor(Math.round((time - checkDate) / 864e5) / 7) + 1;
    },
    /* Parse a string value into a date object.
     * See formatDate below for the possible formats.
     *
     * @param  format string - the expected format of the date
     * @param  value string - the date in the above format
     * @param  settings Object - attributes include:
     *					shortYearCutoff  number - the cutoff year for determining the century (optional)
     *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
     *					dayNames		string[7] - names of the days from Sunday (optional)
     *					monthNamesShort string[12] - abbreviated names of the months (optional)
     *					monthNames		string[12] - names of the months (optional)
     * @return  Date - the extracted date value or null if value is blank
     */
    parseDate: function(format, value, settings) {
      if (format == null || value == null) {
        throw "Invalid arguments";
      }
      value = typeof value === "object" ? value.toString() : value + "";
      if (value === "") {
        return null;
      }
      var iFormat, dim, extra, iValue = 0, shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff, shortYearCutoff = typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10), dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort, dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames, monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort, monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames, year = -1, month = -1, day = -1, doy = -1, literal = false, date, lookAhead = function(match) {
        var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
        if (matches) {
          iFormat++;
        }
        return matches;
      }, getNumber = function(match) {
        var isDoubled = lookAhead(match), size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2, minSize = match === "y" ? size : 1, digits = new RegExp("^\\d{" + minSize + "," + size + "}"), num = value.substring(iValue).match(digits);
        if (!num) {
          throw "Missing number at position " + iValue;
        }
        iValue += num[0].length;
        return parseInt(num[0], 10);
      }, getName = function(match, shortNames, longNames) {
        var index = -1, names = $2.map(lookAhead(match) ? longNames : shortNames, function(v, k) {
          return [[k, v]];
        }).sort(function(a, b) {
          return -(a[1].length - b[1].length);
        });
        $2.each(names, function(i2, pair) {
          var name = pair[1];
          if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
            index = pair[0];
            iValue += name.length;
            return false;
          }
        });
        if (index !== -1) {
          return index + 1;
        } else {
          throw "Unknown name at position " + iValue;
        }
      }, checkLiteral = function() {
        if (value.charAt(iValue) !== format.charAt(iFormat)) {
          throw "Unexpected literal at position " + iValue;
        }
        iValue++;
      };
      for (iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
            literal = false;
          } else {
            checkLiteral();
          }
        } else {
          switch (format.charAt(iFormat)) {
            case "d":
              day = getNumber("d");
              break;
            case "D":
              getName("D", dayNamesShort, dayNames);
              break;
            case "o":
              doy = getNumber("o");
              break;
            case "m":
              month = getNumber("m");
              break;
            case "M":
              month = getName("M", monthNamesShort, monthNames);
              break;
            case "y":
              year = getNumber("y");
              break;
            case "@":
              date = new Date(getNumber("@"));
              year = date.getFullYear();
              month = date.getMonth() + 1;
              day = date.getDate();
              break;
            case "!":
              date = new Date((getNumber("!") - this._ticksTo1970) / 1e4);
              year = date.getFullYear();
              month = date.getMonth() + 1;
              day = date.getDate();
              break;
            case "'":
              if (lookAhead("'")) {
                checkLiteral();
              } else {
                literal = true;
              }
              break;
            default:
              checkLiteral();
          }
        }
      }
      if (iValue < value.length) {
        extra = value.substr(iValue);
        if (!/^\s+/.test(extra)) {
          throw "Extra/unparsed characters found in date: " + extra;
        }
      }
      if (year === -1) {
        year = (/* @__PURE__ */ new Date()).getFullYear();
      } else if (year < 100) {
        year += (/* @__PURE__ */ new Date()).getFullYear() - (/* @__PURE__ */ new Date()).getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
      }
      if (doy > -1) {
        month = 1;
        day = doy;
        do {
          dim = this._getDaysInMonth(year, month - 1);
          if (day <= dim) {
            break;
          }
          month++;
          day -= dim;
        } while (true);
      }
      date = this._daylightSavingAdjust(new Date(year, month - 1, day));
      if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
        throw "Invalid date";
      }
      return date;
    },
    /* Standard date formats. */
    ATOM: "yy-mm-dd",
    // RFC 3339 (ISO 8601)
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    // RFC 822
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    // ISO 8601
    _ticksTo1970: ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 1e7,
    /* Format a date object into a string value.
     * The format can be combinations of the following:
     * d  - day of month (no leading zero)
     * dd - day of month (two digit)
     * o  - day of year (no leading zeros)
     * oo - day of year (three digit)
     * D  - day name short
     * DD - day name long
     * m  - month of year (no leading zero)
     * mm - month of year (two digit)
     * M  - month name short
     * MM - month name long
     * y  - year (two digit)
     * yy - year (four digit)
     * @ - Unix timestamp (ms since 01/01/1970)
     * ! - Windows ticks (100ns since 01/01/0001)
     * "..." - literal text
     * '' - single quote
     *
     * @param  format string - the desired format of the date
     * @param  date Date - the date value to format
     * @param  settings Object - attributes include:
     *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
     *					dayNames		string[7] - names of the days from Sunday (optional)
     *					monthNamesShort string[12] - abbreviated names of the months (optional)
     *					monthNames		string[12] - names of the months (optional)
     * @return  string - the date in the above format
     */
    formatDate: function(format, date, settings) {
      if (!date) {
        return "";
      }
      var iFormat, dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort, dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames, monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort, monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames, lookAhead = function(match) {
        var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
        if (matches) {
          iFormat++;
        }
        return matches;
      }, formatNumber = function(match, value, len) {
        var num = "" + value;
        if (lookAhead(match)) {
          while (num.length < len) {
            num = "0" + num;
          }
        }
        return num;
      }, formatName = function(match, value, shortNames, longNames) {
        return lookAhead(match) ? longNames[value] : shortNames[value];
      }, output = "", literal = false;
      if (date) {
        for (iFormat = 0; iFormat < format.length; iFormat++) {
          if (literal) {
            if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
              literal = false;
            } else {
              output += format.charAt(iFormat);
            }
          } else {
            switch (format.charAt(iFormat)) {
              case "d":
                output += formatNumber("d", date.getDate(), 2);
                break;
              case "D":
                output += formatName("D", date.getDay(), dayNamesShort, dayNames);
                break;
              case "o":
                output += formatNumber(
                  "o",
                  Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 864e5),
                  3
                );
                break;
              case "m":
                output += formatNumber("m", date.getMonth() + 1, 2);
                break;
              case "M":
                output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
                break;
              case "y":
                output += lookAhead("y") ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100;
                break;
              case "@":
                output += date.getTime();
                break;
              case "!":
                output += date.getTime() * 1e4 + this._ticksTo1970;
                break;
              case "'":
                if (lookAhead("'")) {
                  output += "'";
                } else {
                  literal = true;
                }
                break;
              default:
                output += format.charAt(iFormat);
            }
          }
        }
      }
      return output;
    },
    /* Extract all possible characters from the date format. */
    _possibleChars: function(format) {
      var iFormat, chars = "", literal = false, lookAhead = function(match) {
        var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
        if (matches) {
          iFormat++;
        }
        return matches;
      };
      for (iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
            literal = false;
          } else {
            chars += format.charAt(iFormat);
          }
        } else {
          switch (format.charAt(iFormat)) {
            case "d":
            case "m":
            case "y":
            case "@":
              chars += "0123456789";
              break;
            case "D":
            case "M":
              return null;
            // Accept anything
            case "'":
              if (lookAhead("'")) {
                chars += "'";
              } else {
                literal = true;
              }
              break;
            default:
              chars += format.charAt(iFormat);
          }
        }
      }
      return chars;
    },
    /* Get a setting value, defaulting if necessary. */
    _get: function(inst, name) {
      return inst.settings[name] !== void 0 ? inst.settings[name] : this._defaults[name];
    },
    /* Parse existing date and initialise date picker. */
    _setDateFromField: function(inst, noDefault) {
      if (inst.input.val() === inst.lastVal) {
        return;
      }
      var dateFormat = this._get(inst, "dateFormat"), dates = inst.lastVal = inst.input ? inst.input.val() : null, defaultDate = this._getDefaultDate(inst), date = defaultDate, settings = this._getFormatConfig(inst);
      try {
        date = this.parseDate(dateFormat, dates, settings) || defaultDate;
      } catch (event) {
        dates = noDefault ? "" : dates;
      }
      inst.selectedDay = date.getDate();
      inst.drawMonth = inst.selectedMonth = date.getMonth();
      inst.drawYear = inst.selectedYear = date.getFullYear();
      inst.currentDay = dates ? date.getDate() : 0;
      inst.currentMonth = dates ? date.getMonth() : 0;
      inst.currentYear = dates ? date.getFullYear() : 0;
      this._adjustInstDate(inst);
    },
    /* Retrieve the default date shown on opening. */
    _getDefaultDate: function(inst) {
      return this._restrictMinMax(
        inst,
        this._determineDate(inst, this._get(inst, "defaultDate"), /* @__PURE__ */ new Date())
      );
    },
    /* A date may be specified as an exact value or a relative one. */
    _determineDate: function(inst, date, defaultDate) {
      var offsetNumeric = function(offset) {
        var date2 = /* @__PURE__ */ new Date();
        date2.setDate(date2.getDate() + offset);
        return date2;
      }, offsetString = function(offset) {
        try {
          return $2.datepicker.parseDate(
            $2.datepicker._get(inst, "dateFormat"),
            offset,
            $2.datepicker._getFormatConfig(inst)
          );
        } catch (e) {
        }
        var date2 = (offset.toLowerCase().match(/^c/) ? $2.datepicker._getDate(inst) : null) || /* @__PURE__ */ new Date(), year = date2.getFullYear(), month = date2.getMonth(), day = date2.getDate(), pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, matches = pattern.exec(offset);
        while (matches) {
          switch (matches[2] || "d") {
            case "d":
            case "D":
              day += parseInt(matches[1], 10);
              break;
            case "w":
            case "W":
              day += parseInt(matches[1], 10) * 7;
              break;
            case "m":
            case "M":
              month += parseInt(matches[1], 10);
              day = Math.min(day, $2.datepicker._getDaysInMonth(year, month));
              break;
            case "y":
            case "Y":
              year += parseInt(matches[1], 10);
              day = Math.min(day, $2.datepicker._getDaysInMonth(year, month));
              break;
          }
          matches = pattern.exec(offset);
        }
        return new Date(year, month, day);
      }, newDate = date == null || date === "" ? defaultDate : typeof date === "string" ? offsetString(date) : typeof date === "number" ? isNaN(date) ? defaultDate : offsetNumeric(date) : new Date(date.getTime());
      newDate = newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate;
      if (newDate) {
        newDate.setHours(0);
        newDate.setMinutes(0);
        newDate.setSeconds(0);
        newDate.setMilliseconds(0);
      }
      return this._daylightSavingAdjust(newDate);
    },
    /* Handle switch to/from daylight saving.
     * Hours may be non-zero on daylight saving cut-over:
     * > 12 when midnight changeover, but then cannot generate
     * midnight datetime, so jump to 1AM, otherwise reset.
     * @param  date  (Date) the date to check
     * @return  (Date) the corrected date
     */
    _daylightSavingAdjust: function(date) {
      if (!date) {
        return null;
      }
      date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
      return date;
    },
    /* Set the date(s) directly. */
    _setDate: function(inst, date, noChange) {
      var clear = !date, origMonth = inst.selectedMonth, origYear = inst.selectedYear, newDate = this._restrictMinMax(inst, this._determineDate(inst, date, /* @__PURE__ */ new Date()));
      inst.selectedDay = inst.currentDay = newDate.getDate();
      inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
      inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
      if ((origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) && !noChange) {
        this._notifyChange(inst);
      }
      this._adjustInstDate(inst);
      if (inst.input) {
        inst.input.val(clear ? "" : this._formatDate(inst));
      }
    },
    /* Retrieve the date(s) directly. */
    _getDate: function(inst) {
      var startDate = !inst.currentYear || inst.input && inst.input.val() === "" ? null : this._daylightSavingAdjust(new Date(
        inst.currentYear,
        inst.currentMonth,
        inst.currentDay
      ));
      return startDate;
    },
    /* Attach the onxxx handlers.  These are declared statically so
     * they work with static code transformers like Caja.
     */
    _attachHandlers: function(inst) {
      var stepMonths = this._get(inst, "stepMonths"), id = "#" + inst.id.replace(/\\\\/g, "\\");
      inst.dpDiv.find("[data-handler]").map(function() {
        var handler = {
          prev: function() {
            $2.datepicker._adjustDate(id, -stepMonths, "M");
          },
          next: function() {
            $2.datepicker._adjustDate(id, +stepMonths, "M");
          },
          hide: function() {
            $2.datepicker._hideDatepicker();
          },
          today: function() {
            $2.datepicker._gotoToday(id);
          },
          selectDay: function() {
            $2.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
            return false;
          },
          selectMonth: function() {
            $2.datepicker._selectMonthYear(id, this, "M");
            return false;
          },
          selectYear: function() {
            $2.datepicker._selectMonthYear(id, this, "Y");
            return false;
          }
        };
        $2(this).on(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
      });
    },
    /* Generate the HTML for the current state of the date picker. */
    _generateHTML: function(inst) {
      var maxDraw, prevText, prev, nextText, next, currentText, gotoDate, controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin, monthNames, monthNamesShort, beforeShowDay, showOtherMonths, selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate, cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows, printDate, dRow, tbody, daySettings, otherMonth, unselectable, tempDate = /* @__PURE__ */ new Date(), today = this._daylightSavingAdjust(
        new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())
      ), isRTL = this._get(inst, "isRTL"), showButtonPanel = this._get(inst, "showButtonPanel"), hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"), navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"), numMonths = this._getNumberOfMonths(inst), showCurrentAtPos = this._get(inst, "showCurrentAtPos"), stepMonths = this._get(inst, "stepMonths"), isMultiMonth = numMonths[0] !== 1 || numMonths[1] !== 1, currentDate = this._daylightSavingAdjust(!inst.currentDay ? new Date(9999, 9, 9) : new Date(inst.currentYear, inst.currentMonth, inst.currentDay)), minDate = this._getMinMaxDate(inst, "min"), maxDate = this._getMinMaxDate(inst, "max"), drawMonth = inst.drawMonth - showCurrentAtPos, drawYear = inst.drawYear;
      if (drawMonth < 0) {
        drawMonth += 12;
        drawYear--;
      }
      if (maxDate) {
        maxDraw = this._daylightSavingAdjust(new Date(
          maxDate.getFullYear(),
          maxDate.getMonth() - numMonths[0] * numMonths[1] + 1,
          maxDate.getDate()
        ));
        maxDraw = minDate && maxDraw < minDate ? minDate : maxDraw;
        while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
          drawMonth--;
          if (drawMonth < 0) {
            drawMonth = 11;
            drawYear--;
          }
        }
      }
      inst.drawMonth = drawMonth;
      inst.drawYear = drawYear;
      prevText = this._get(inst, "prevText");
      prevText = !navigationAsDateFormat ? prevText : this.formatDate(
        prevText,
        this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
        this._getFormatConfig(inst)
      );
      if (this._canAdjustMonth(inst, -1, drawYear, drawMonth)) {
        prev = $2("<a>").attr({
          "class": "ui-datepicker-prev ui-corner-all",
          "data-handler": "prev",
          "data-event": "click",
          title: prevText
        }).append(
          $2("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w")).text(prevText)
        )[0].outerHTML;
      } else if (hideIfNoPrevNext) {
        prev = "";
      } else {
        prev = $2("<a>").attr({
          "class": "ui-datepicker-prev ui-corner-all ui-state-disabled",
          title: prevText
        }).append(
          $2("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w")).text(prevText)
        )[0].outerHTML;
      }
      nextText = this._get(inst, "nextText");
      nextText = !navigationAsDateFormat ? nextText : this.formatDate(
        nextText,
        this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
        this._getFormatConfig(inst)
      );
      if (this._canAdjustMonth(inst, 1, drawYear, drawMonth)) {
        next = $2("<a>").attr({
          "class": "ui-datepicker-next ui-corner-all",
          "data-handler": "next",
          "data-event": "click",
          title: nextText
        }).append(
          $2("<span>").addClass("ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e")).text(nextText)
        )[0].outerHTML;
      } else if (hideIfNoPrevNext) {
        next = "";
      } else {
        next = $2("<a>").attr({
          "class": "ui-datepicker-next ui-corner-all ui-state-disabled",
          title: nextText
        }).append(
          $2("<span>").attr("class", "ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e")).text(nextText)
        )[0].outerHTML;
      }
      currentText = this._get(inst, "currentText");
      gotoDate = this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today;
      currentText = !navigationAsDateFormat ? currentText : this.formatDate(currentText, gotoDate, this._getFormatConfig(inst));
      controls = "";
      if (!inst.inline) {
        controls = $2("<button>").attr({
          type: "button",
          "class": "ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all",
          "data-handler": "hide",
          "data-event": "click"
        }).text(this._get(inst, "closeText"))[0].outerHTML;
      }
      buttonPanel = "";
      if (showButtonPanel) {
        buttonPanel = $2("<div class='ui-datepicker-buttonpane ui-widget-content'>").append(isRTL ? controls : "").append(this._isInRange(inst, gotoDate) ? $2("<button>").attr({
          type: "button",
          "class": "ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all",
          "data-handler": "today",
          "data-event": "click"
        }).text(currentText) : "").append(isRTL ? "" : controls)[0].outerHTML;
      }
      firstDay = parseInt(this._get(inst, "firstDay"), 10);
      firstDay = isNaN(firstDay) ? 0 : firstDay;
      showWeek = this._get(inst, "showWeek");
      dayNames = this._get(inst, "dayNames");
      dayNamesMin = this._get(inst, "dayNamesMin");
      monthNames = this._get(inst, "monthNames");
      monthNamesShort = this._get(inst, "monthNamesShort");
      beforeShowDay = this._get(inst, "beforeShowDay");
      showOtherMonths = this._get(inst, "showOtherMonths");
      selectOtherMonths = this._get(inst, "selectOtherMonths");
      defaultDate = this._getDefaultDate(inst);
      html = "";
      for (row = 0; row < numMonths[0]; row++) {
        group = "";
        this.maxRows = 4;
        for (col = 0; col < numMonths[1]; col++) {
          selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
          cornerClass = " ui-corner-all";
          calender = "";
          if (isMultiMonth) {
            calender += "<div class='ui-datepicker-group";
            if (numMonths[1] > 1) {
              switch (col) {
                case 0:
                  calender += " ui-datepicker-group-first";
                  cornerClass = " ui-corner-" + (isRTL ? "right" : "left");
                  break;
                case numMonths[1] - 1:
                  calender += " ui-datepicker-group-last";
                  cornerClass = " ui-corner-" + (isRTL ? "left" : "right");
                  break;
                default:
                  calender += " ui-datepicker-group-middle";
                  cornerClass = "";
                  break;
              }
            }
            calender += "'>";
          }
          calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" + (/all|left/.test(cornerClass) && row === 0 ? isRTL ? next : prev : "") + (/all|right/.test(cornerClass) && row === 0 ? isRTL ? prev : next : "") + this._generateMonthYearHeader(
            inst,
            drawMonth,
            drawYear,
            minDate,
            maxDate,
            row > 0 || col > 0,
            monthNames,
            monthNamesShort
          ) + // draw month headers
          "</div><table class='ui-datepicker-calendar'><thead><tr>";
          thead = showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : "";
          for (dow = 0; dow < 7; dow++) {
            day = (dow + firstDay) % 7;
            thead += "<th scope='col'" + ((dow + firstDay + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + dayNames[day] + "'>" + dayNamesMin[day] + "</span></th>";
          }
          calender += thead + "</tr></thead><tbody>";
          daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
          if (drawYear === inst.selectedYear && drawMonth === inst.selectedMonth) {
            inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
          }
          leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
          curRows = Math.ceil((leadDays + daysInMonth) / 7);
          numRows = isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows;
          this.maxRows = numRows;
          printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
          for (dRow = 0; dRow < numRows; dRow++) {
            calender += "<tr>";
            tbody = !showWeek ? "" : "<td class='ui-datepicker-week-col'>" + this._get(inst, "calculateWeek")(printDate) + "</td>";
            for (dow = 0; dow < 7; dow++) {
              daySettings = beforeShowDay ? beforeShowDay.apply(inst.input ? inst.input[0] : null, [printDate]) : [true, ""];
              otherMonth = printDate.getMonth() !== drawMonth;
              unselectable = otherMonth && !selectOtherMonths || !daySettings[0] || minDate && printDate < minDate || maxDate && printDate > maxDate;
              tbody += "<td class='" + ((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + // highlight weekends
              (otherMonth ? " ui-datepicker-other-month" : "") + // highlight days from other months
              (printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent || // user pressed key
              defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime() ? (
                // or defaultDate is current printedDate and defaultDate is selectedDate
                " " + this._dayOverClass
              ) : "") + // highlight selected day
              (unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "") + // highlight unselectable days
              (otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + // highlight custom dates
              (printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") + // highlight selected day
              (printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" + // highlight today (if different)
              ((!otherMonth || showOtherMonths) && daySettings[2] ? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'" : "") + // cell title
              (unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + // actions
              (otherMonth && !showOtherMonths ? "&#xa0;" : (
                // display for other months
                unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" + (printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") + (printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") + // highlight selected day
                (otherMonth ? " ui-priority-secondary" : "") + // distinguish dates from other months
                "' href='#' aria-current='" + (printDate.getTime() === currentDate.getTime() ? "true" : "false") + // mark date as selected for screen reader
                "' data-date='" + printDate.getDate() + // store date as data
                "'>" + printDate.getDate() + "</a>"
              )) + "</td>";
              printDate.setDate(printDate.getDate() + 1);
              printDate = this._daylightSavingAdjust(printDate);
            }
            calender += tbody + "</tr>";
          }
          drawMonth++;
          if (drawMonth > 11) {
            drawMonth = 0;
            drawYear++;
          }
          calender += "</tbody></table>" + (isMultiMonth ? "</div>" + (numMonths[0] > 0 && col === numMonths[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
          group += calender;
        }
        html += group;
      }
      html += buttonPanel;
      inst._keyEvent = false;
      return html;
    },
    /* Generate the month and year header. */
    _generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
      var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear, changeMonth = this._get(inst, "changeMonth"), changeYear = this._get(inst, "changeYear"), showMonthAfterYear = this._get(inst, "showMonthAfterYear"), selectMonthLabel = this._get(inst, "selectMonthLabel"), selectYearLabel = this._get(inst, "selectYearLabel"), html = "<div class='ui-datepicker-title'>", monthHtml = "";
      if (secondary || !changeMonth) {
        monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>";
      } else {
        inMinYear = minDate && minDate.getFullYear() === drawYear;
        inMaxYear = maxDate && maxDate.getFullYear() === drawYear;
        monthHtml += "<select class='ui-datepicker-month' aria-label='" + selectMonthLabel + "' data-handler='selectMonth' data-event='change'>";
        for (month = 0; month < 12; month++) {
          if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
            monthHtml += "<option value='" + month + "'" + (month === drawMonth ? " selected='selected'" : "") + ">" + monthNamesShort[month] + "</option>";
          }
        }
        monthHtml += "</select>";
      }
      if (!showMonthAfterYear) {
        html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
      }
      if (!inst.yearshtml) {
        inst.yearshtml = "";
        if (secondary || !changeYear) {
          html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
        } else {
          years = this._get(inst, "yearRange").split(":");
          thisYear = (/* @__PURE__ */ new Date()).getFullYear();
          determineYear = function(value) {
            var year2 = value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) : value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10);
            return isNaN(year2) ? thisYear : year2;
          };
          year = determineYear(years[0]);
          endYear = Math.max(year, determineYear(years[1] || ""));
          year = minDate ? Math.max(year, minDate.getFullYear()) : year;
          endYear = maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear;
          inst.yearshtml += "<select class='ui-datepicker-year' aria-label='" + selectYearLabel + "' data-handler='selectYear' data-event='change'>";
          for (; year <= endYear; year++) {
            inst.yearshtml += "<option value='" + year + "'" + (year === drawYear ? " selected='selected'" : "") + ">" + year + "</option>";
          }
          inst.yearshtml += "</select>";
          html += inst.yearshtml;
          inst.yearshtml = null;
        }
      }
      html += this._get(inst, "yearSuffix");
      if (showMonthAfterYear) {
        html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
      }
      html += "</div>";
      return html;
    },
    /* Adjust one of the date sub-fields. */
    _adjustInstDate: function(inst, offset, period) {
      var year = inst.selectedYear + (period === "Y" ? offset : 0), month = inst.selectedMonth + (period === "M" ? offset : 0), day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period === "D" ? offset : 0), date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));
      inst.selectedDay = date.getDate();
      inst.drawMonth = inst.selectedMonth = date.getMonth();
      inst.drawYear = inst.selectedYear = date.getFullYear();
      if (period === "M" || period === "Y") {
        this._notifyChange(inst);
      }
    },
    /* Ensure a date is within any min/max bounds. */
    _restrictMinMax: function(inst, date) {
      var minDate = this._getMinMaxDate(inst, "min"), maxDate = this._getMinMaxDate(inst, "max"), newDate = minDate && date < minDate ? minDate : date;
      return maxDate && newDate > maxDate ? maxDate : newDate;
    },
    /* Notify change of month/year. */
    _notifyChange: function(inst) {
      var onChange = this._get(inst, "onChangeMonthYear");
      if (onChange) {
        onChange.apply(
          inst.input ? inst.input[0] : null,
          [inst.selectedYear, inst.selectedMonth + 1, inst]
        );
      }
    },
    /* Determine the number of months to show. */
    _getNumberOfMonths: function(inst) {
      var numMonths = this._get(inst, "numberOfMonths");
      return numMonths == null ? [1, 1] : typeof numMonths === "number" ? [1, numMonths] : numMonths;
    },
    /* Determine the current maximum date - ensure no time components are set. */
    _getMinMaxDate: function(inst, minMax) {
      return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
    },
    /* Find the number of days in a given month. */
    _getDaysInMonth: function(year, month) {
      return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
    },
    /* Find the day of the week of the first of a month. */
    _getFirstDayOfMonth: function(year, month) {
      return new Date(year, month, 1).getDay();
    },
    /* Determines if we should allow a "next/prev" month display change. */
    _canAdjustMonth: function(inst, offset, curYear, curMonth) {
      var numMonths = this._getNumberOfMonths(inst), date = this._daylightSavingAdjust(new Date(
        curYear,
        curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]),
        1
      ));
      if (offset < 0) {
        date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
      }
      return this._isInRange(inst, date);
    },
    /* Is the given date in the accepted range? */
    _isInRange: function(inst, date) {
      var yearSplit, currentYear, minDate = this._getMinMaxDate(inst, "min"), maxDate = this._getMinMaxDate(inst, "max"), minYear = null, maxYear = null, years = this._get(inst, "yearRange");
      if (years) {
        yearSplit = years.split(":");
        currentYear = (/* @__PURE__ */ new Date()).getFullYear();
        minYear = parseInt(yearSplit[0], 10);
        maxYear = parseInt(yearSplit[1], 10);
        if (yearSplit[0].match(/[+\-].*/)) {
          minYear += currentYear;
        }
        if (yearSplit[1].match(/[+\-].*/)) {
          maxYear += currentYear;
        }
      }
      return (!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime()) && (!minYear || date.getFullYear() >= minYear) && (!maxYear || date.getFullYear() <= maxYear);
    },
    /* Provide the configuration settings for formatting/parsing. */
    _getFormatConfig: function(inst) {
      var shortYearCutoff = this._get(inst, "shortYearCutoff");
      shortYearCutoff = typeof shortYearCutoff !== "string" ? shortYearCutoff : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(shortYearCutoff, 10);
      return {
        shortYearCutoff,
        dayNamesShort: this._get(inst, "dayNamesShort"),
        dayNames: this._get(inst, "dayNames"),
        monthNamesShort: this._get(inst, "monthNamesShort"),
        monthNames: this._get(inst, "monthNames")
      };
    },
    /* Format the given date for display. */
    _formatDate: function(inst, day, month, year) {
      if (!day) {
        inst.currentDay = inst.selectedDay;
        inst.currentMonth = inst.selectedMonth;
        inst.currentYear = inst.selectedYear;
      }
      var date = day ? typeof day === "object" ? day : this._daylightSavingAdjust(new Date(year, month, day)) : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
      return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
    }
  });
  function datepicker_bindHover(dpDiv) {
    var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return dpDiv.on("mouseout", selector, function() {
      $2(this).removeClass("ui-state-hover");
      if (this.className.indexOf("ui-datepicker-prev") !== -1) {
        $2(this).removeClass("ui-datepicker-prev-hover");
      }
      if (this.className.indexOf("ui-datepicker-next") !== -1) {
        $2(this).removeClass("ui-datepicker-next-hover");
      }
    }).on("mouseover", selector, datepicker_handleMouseover);
  }
  function datepicker_handleMouseover() {
    if (!$2.datepicker._isDisabledDatepicker(datepicker_instActive.inline ? datepicker_instActive.dpDiv.parent()[0] : datepicker_instActive.input[0])) {
      $2(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
      $2(this).addClass("ui-state-hover");
      if (this.className.indexOf("ui-datepicker-prev") !== -1) {
        $2(this).addClass("ui-datepicker-prev-hover");
      }
      if (this.className.indexOf("ui-datepicker-next") !== -1) {
        $2(this).addClass("ui-datepicker-next-hover");
      }
    }
  }
  function datepicker_extendRemove(target, props) {
    $2.extend(target, props);
    for (var name in props) {
      if (props[name] == null) {
        target[name] = props[name];
      }
    }
    return target;
  }
  $2.fn.datepicker = function(options) {
    if (!this.length) {
      return this;
    }
    if (!$2.datepicker.initialized) {
      $2(document).on("mousedown", $2.datepicker._checkExternalClick);
      $2.datepicker.initialized = true;
    }
    if ($2("#" + $2.datepicker._mainDivId).length === 0) {
      $2("body").append($2.datepicker.dpDiv);
    }
    var otherArgs = Array.prototype.slice.call(arguments, 1);
    if (typeof options === "string" && (options === "isDisabled" || options === "getDate" || options === "widget")) {
      return $2.datepicker["_" + options + "Datepicker"].apply($2.datepicker, [this[0]].concat(otherArgs));
    }
    if (options === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
      return $2.datepicker["_" + options + "Datepicker"].apply($2.datepicker, [this[0]].concat(otherArgs));
    }
    return this.each(function() {
      if (typeof options === "string") {
        $2.datepicker["_" + options + "Datepicker"].apply($2.datepicker, [this].concat(otherArgs));
      } else {
        $2.datepicker._attachDatepicker(this, options);
      }
    });
  };
  $2.datepicker = new Datepicker();
  $2.datepicker.initialized = false;
  $2.datepicker.uuid = (/* @__PURE__ */ new Date()).getTime();
  $2.datepicker.version = "1.14.1";
  return $2.datepicker;
});

// src/calendar/4-calendar.js
var import_jquery_ui_timepicker_addon = __toESM(require_jquery_ui_timepicker_addon());

// src/calendar/2-jquery.ui.pfextensions.js
(function() {
  var original_gotoToday = $.datepicker._gotoToday;
  $.datepicker._gotoToday = function(id) {
    var target = $(id), inst = this._getInst(target[0]);
    original_gotoToday.call(this, id);
    this._selectDate(id, this._formatDate(inst, inst.selectedDay, inst.drawMonth, inst.drawYear));
  };
  $.datepicker._attachHandlers = function(inst) {
    var stepMonths = this._get(inst, "stepMonths"), id = "#" + inst.id.replace(/\\\\/g, "\\");
    inst.dpDiv.find("[data-handler]").map(function() {
      var handler = {
        prev: function() {
          $.datepicker._adjustDate(id, -stepMonths, "M");
          $.datepicker._updateDatePickerPosition(inst);
        },
        next: function() {
          $.datepicker._adjustDate(id, +stepMonths, "M");
          $.datepicker._updateDatePickerPosition(inst);
        },
        hide: function() {
          $.datepicker._hideDatepicker();
        },
        today: function() {
          $.datepicker._gotoToday(id);
          $.datepicker._updateDatePickerPosition(inst);
        },
        selectDay: function() {
          $.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
          $.datepicker._updateDatePickerPosition(inst);
          return false;
        },
        selectMonth: function() {
          $.datepicker._selectMonthYear(id, this, "M");
          $.datepicker._updateDatePickerPosition(inst);
          return false;
        },
        selectYear: function() {
          $.datepicker._selectMonthYear(id, this, "Y");
          $.datepicker._updateDatePickerPosition(inst);
          return false;
        }
      };
      $(this).on(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
    });
  };
  $.datepicker._updateDatePickerPosition = function(inst) {
    if (inst.inline) {
      return;
    }
    var input = inst.input[0];
    if (!$.datepicker._pos) {
      $.datepicker._pos = $.datepicker._findPos(input);
      $.datepicker._pos[1] += input.offsetHeight;
    }
    var offset = { left: $.datepicker._pos[0], top: $.datepicker._pos[1] };
    $.datepicker._pos = null;
    var isFixed = false;
    $(input).parents().each(function() {
      isFixed |= $(this).css("position") === "fixed";
      return !isFixed;
    });
    var checkedOffset = $.datepicker._checkOffset(inst, offset, isFixed);
    inst.dpDiv.css({ top: checkedOffset.top + "px" });
  };
  $.datepicker._generateMonthYearHeader = function(inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
    var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear, changeMonth = this._get(inst, "changeMonth"), changeYear = this._get(inst, "changeYear"), showMonthAfterYear = this._get(inst, "showMonthAfterYear"), html = "<div class='ui-datepicker-title'>", monthHtml = "";
    if (secondary || !changeMonth) {
      monthHtml += "<span class='ui-datepicker-month' aria-label='select month'>" + monthNames[drawMonth] + "</span>";
    } else {
      inMinYear = minDate && minDate.getFullYear() === drawYear;
      inMaxYear = maxDate && maxDate.getFullYear() === drawYear;
      monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change' aria-label='select month'>";
      for (month = 0; month < 12; month++) {
        if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
          monthHtml += "<option value='" + month + "'" + (month === drawMonth ? " selected='selected'" : "") + ">" + monthNamesShort[month] + "</option>";
        }
      }
      monthHtml += "</select>";
    }
    if (!showMonthAfterYear) {
      html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
    }
    if (!inst.yearshtml) {
      inst.yearshtml = "";
      if (secondary || !changeYear) {
        html += "<span class='ui-datepicker-year' aria-label='select year'>" + drawYear + "</span>";
      } else {
        years = this._get(inst, "yearRange").split(":");
        thisYear = (/* @__PURE__ */ new Date()).getFullYear();
        determineYear = function(value) {
          var year2 = value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) : value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10);
          return isNaN(year2) ? thisYear : year2;
        };
        year = determineYear(years[0]);
        endYear = Math.max(year, determineYear(years[1] || ""));
        year = minDate ? Math.max(year, minDate.getFullYear()) : year;
        endYear = maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear;
        inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change' aria-label='select year'>";
        for (; year <= endYear; year++) {
          inst.yearshtml += "<option value='" + year + "'" + (year === drawYear ? " selected='selected'" : "") + ">" + year + "</option>";
        }
        inst.yearshtml += "</select>";
        html += inst.yearshtml;
        inst.yearshtml = null;
      }
    }
    html += this._get(inst, "yearSuffix");
    if (showMonthAfterYear) {
      html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
    }
    html += "</div>";
    return html;
  };
  $.datepicker._updateDatepicker = function(inst) {
    var input = inst.input[0];
    if ($.datepicker._curInst && $.datepicker._curInst !== inst && $.datepicker._datepickerShowing && $.datepicker._lastInput !== input) {
      return;
    }
    if (typeof inst.stay_open !== "boolean" || inst.stay_open === false) {
      var $this = this;
      setTimeout(function() {
        if (typeof $this._base_updateDatepicker === "function") {
          $this._base_updateDatepicker(inst);
        }
        var tp_inst2 = $this._get(inst, "timepicker");
        if (tp_inst2) {
          tp_inst2._addTimePicker(inst);
        }
        $this._updateDatePickerPosition(inst);
      }, 0);
    }
  };
  $.datepicker._base_disableDatepicker = $.datepicker._disableDatepicker;
  $.datepicker._disableDatepicker = function(target) {
    setTimeout(function() {
      $.datepicker._base_disableDatepicker(target);
    }, 0);
  };
})();
(function() {
  $.extend(Object.getPrototypeOf($.timepicker), {
    _updateDateTime: function(dp_inst) {
      dp_inst = this.inst || dp_inst;
      var dtTmp = dp_inst.currentYear > 0 ? new Date(dp_inst.currentYear, dp_inst.currentMonth, dp_inst.currentDay) : new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay), dt = $.datepicker._daylightSavingAdjust(dtTmp), dateFmt = $.datepicker._get(dp_inst, "dateFormat"), formatCfg = $.datepicker._getFormatConfig(dp_inst), timeAvailable = dt !== null && this.timeDefined;
      this.formattedDate = $.datepicker.formatDate(dateFmt, dt === null ? /* @__PURE__ */ new Date() : dt, formatCfg);
      var formattedDateTime = this.formattedDate;
      var originalValue = dp_inst.lastVal;
      if (originalValue === "") {
        dp_inst.currentYear = dp_inst.selectedYear;
        dp_inst.currentMonth = dp_inst.selectedMonth;
        dp_inst.currentDay = dp_inst.selectedDay;
      }
      if (this._defaults.timeOnly === true && this._defaults.timeOnlyShowDate === false) {
        formattedDateTime = this.formattedTime;
      } else if (this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable) || this._defaults.timeOnly === true && this._defaults.timeOnlyShowDate === true) {
        formattedDateTime += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix;
      }
      this.formattedDateTime = formattedDateTime;
      if (!this._defaults.showTimepicker) {
        this.$input.val(this.formattedDate);
      } else if (this.$altInput && this._defaults.timeOnly === false && this._defaults.altFieldTimeOnly === true) {
        this.$altInput.val(this.formattedTime);
        this.$input.val(this.formattedDate);
      } else if (this.$altInput) {
        this.$input.val(formattedDateTime);
        var altFormattedDateTime = "", altSeparator = this._defaults.altSeparator !== null ? this._defaults.altSeparator : this._defaults.separator, altTimeSuffix = this._defaults.altTimeSuffix !== null ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;
        if (!this._defaults.timeOnly) {
          if (this._defaults.altFormat) {
            altFormattedDateTime = $.datepicker.formatDate(this._defaults.altFormat, dt === null ? /* @__PURE__ */ new Date() : dt, formatCfg);
          } else {
            altFormattedDateTime = this.formattedDate;
          }
          if (altFormattedDateTime) {
            altFormattedDateTime += altSeparator;
          }
        }
        if (this._defaults.altTimeFormat !== null) {
          altFormattedDateTime += $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + altTimeSuffix;
        } else {
          altFormattedDateTime += this.formattedTime + altTimeSuffix;
        }
        this.$altInput.val(altFormattedDateTime);
      } else {
        this.$input.val(formattedDateTime);
      }
      if (originalValue != formattedDateTime) {
        this.$input.trigger("change");
      }
    },
    // PrimeFaces https://github.com/primefaces/primefaces/issues/3765
    _addTimePicker: function(dp_inst) {
      var currDT = PrimeFaces.trim(this.$altInput && this._defaults.altFieldTimeOnly ? this.$input.val() + " " + this.$altInput.val() : dp_inst.inline ? this.$input.next().val() : this.$input.val());
      this.timeDefined = this._parseTime(currDT);
      this._limitMinMaxDateTime(dp_inst, false);
      this._injectTimePicker();
      this._afterInject();
    },
    _controls: {
      // slider methods
      slider: {
        create: function(tp_inst2, obj, unit, val, min, max, step) {
          var rtl = tp_inst2._defaults.isRTL;
          return obj.prop("slide", null).slider({
            orientation: "horizontal",
            value: rtl ? val * -1 : val,
            min: rtl ? max * -1 : min,
            max: rtl ? min * -1 : max,
            step,
            slide: function(event, ui) {
              tp_inst2.control.value(tp_inst2, $(this), unit, rtl ? ui.value * -1 : ui.value);
              tp_inst2._onTimeChange();
            },
            stop: function(event, ui) {
              tp_inst2._onSelectHandler();
            }
          });
        },
        options: function(tp_inst2, obj, unit, opts2, val) {
          if (tp_inst2._defaults.isRTL) {
            if (typeof opts2 === "string") {
              if (opts2 === "min" || opts2 === "max") {
                if (val !== void 0) {
                  return obj.slider(opts2, val * -1);
                }
                return Math.abs(obj.slider(opts2));
              }
              return obj.slider(opts2);
            }
            var min = opts2.min, max = opts2.max;
            opts2.min = opts2.max = null;
            if (min !== void 0) {
              opts2.max = min * -1;
            }
            if (max !== void 0) {
              opts2.min = max * -1;
            }
            return obj.slider(opts2);
          }
          if (typeof opts2 === "string" && val !== void 0) {
            return obj.slider(opts2, val);
          }
          return obj.slider(opts2);
        },
        value: function(tp_inst2, obj, unit, val) {
          if (tp_inst2._defaults.isRTL) {
            if (val !== void 0) {
              return obj.slider("value", val * -1);
            }
            return Math.abs(obj.slider("value"));
          }
          if (val !== void 0) {
            return obj.slider("value", val);
          }
          return obj.slider("value");
        }
      },
      // select methods
      select: {
        create: function(tp_inst2, obj, unit, val, min, max, step) {
          var sel = '<select class="ui-timepicker-select ui-state-default ui-corner-all" data-unit="' + unit + '" data-min="' + min + '" data-max="' + max + '" data-step="' + step + '" aria-label="select ' + unit + '">', format = tp_inst2._defaults.pickerTimeFormat || tp_inst2._defaults.timeFormat;
          for (var i2 = min; i2 <= max; i2 += step) {
            sel += '<option value="' + i2 + '"' + (i2 === val ? " selected" : "") + ">";
            if (unit === "hour") {
              sel += $.datepicker.formatTime(PrimeFaces.trim(format.replace(/[^ht ]/ig, "")), { hour: i2 }, tp_inst2._defaults);
            } else if (unit === "millisec" || unit === "microsec" || i2 >= 10) {
              sel += i2;
            } else {
              sel += "0" + i2.toString();
            }
            sel += "</option>";
          }
          sel += "</select>";
          obj.children("select").remove();
          $(sel).appendTo(obj).on("change", function(e) {
            tp_inst2._onTimeChange();
            tp_inst2._onSelectHandler();
            tp_inst2._afterInject();
          });
          return obj;
        },
        options: function(tp_inst2, obj, unit, opts2, val) {
          var o = {}, $t = obj.children("select");
          if (typeof opts2 === "string") {
            if (val === void 0) {
              return $t.data(opts2);
            }
            o[opts2] = val;
          } else {
            o = opts2;
          }
          return tp_inst2.control.create(tp_inst2, obj, $t.data("unit"), $t.val(), o.min >= 0 ? o.min : $t.data("min"), o.max || $t.data("max"), o.step || $t.data("step"));
        },
        value: function(tp_inst2, obj, unit, val) {
          var $t = obj.children("select");
          if (val !== void 0) {
            return $t.val(val);
          }
          return $t.val();
        }
      }
    }
    // end _controls
  });
})();

// src/calendar/4-calendar.js
var Calendar = class extends BaseWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    this.input = $(this.jqId + "_input");
    this.jqEl = this.cfg.popup ? this.input : $(this.jqId + "_inline");
    var $this = this;
    this.configureLocale();
    this.bindDateSelectListener();
    this.bindViewChangeListener();
    this.bindCloseListener();
    this.applyMask();
    this.cfg.beforeShowDay = function(date) {
      if ($this.cfg.preShowDay) {
        return $this.cfg.preShowDay(date);
      } else if ($this.cfg.disabledWeekends) {
        return $.datepicker.noWeekends(date);
      } else {
        return [true, ""];
      }
    };
    var hasTimePicker = this.hasTimePicker();
    if (hasTimePicker) {
      this.configureTimePicker();
    }
    var touchEnabled = PrimeFaces.env.isTouchable(this.cfg) && !this.input.attr("readonly") && this.cfg.showOn && this.cfg.showOn === "button";
    if (this.cfg.popup) {
      PrimeFaces.skinInput(this.jqEl);
      if (this.cfg.behaviors) {
        PrimeFaces.attachBehaviors(this.jqEl, this.cfg.behaviors);
      }
      this.cfg.beforeShow = function(input, inst) {
        if ($this.refocusInput) {
          $this.refocusInput = false;
          return false;
        }
        if ($this.cfg.readonly) {
          return false;
        }
        setTimeout(function() {
          $("#ui-datepicker-div").addClass("ui-input-overlay").css("z-index", PrimeFaces.nextZindex());
          if ($this.cfg.showTodayButton === false) {
            $(input).datepicker("widget").find(".ui-datepicker-current").hide();
          }
          $this.alignPanel();
        }, 50);
        if (touchEnabled) {
          $(this).prop("readonly", true);
        }
        var preShow = $this.cfg.preShow;
        if (preShow) {
          return $this.cfg.preShow.call($this, input, inst);
        }
      };
      PrimeFaces.utils.registerResizeHandler(this, "resize." + this.id + "_hide", $("#ui-datepicker-div"), function() {
        $this.handleViewportChange();
      });
      PrimeFaces.utils.registerScrollHandler(this, "scroll." + this.id + "_hide", function() {
        $this.handleViewportChange();
      });
    }
    if (touchEnabled) {
      var fireCloseEvent = this.cfg.onClose;
      this.cfg.onClose = function(dateText, inst) {
        $(this).attr("readonly", false);
        if (fireCloseEvent) {
          fireCloseEvent();
        }
      };
    }
    if (hasTimePicker) {
      if (this.cfg.timeOnly)
        this.jqEl.timepicker(this.cfg);
      else
        this.jqEl.datetimepicker(this.cfg);
    } else {
      this.jqEl.datepicker(this.cfg);
    }
    if (this.cfg.popup && this.cfg.showOn) {
      var triggerButton = this.jqEl.siblings(".ui-datepicker-trigger:button");
      triggerButton.attr("aria-label", PrimeFaces.getLocaleLabel("chooseDate")).attr("aria-haspopup", true).html("").addClass("ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only").append('<span class="ui-button-icon-left ui-icon ui-icon-calendar"></span><span class="ui-button-text">ui-button</span>');
      var title = this.jqEl.attr("title");
      if (title) {
        triggerButton.attr("title", title);
      }
      if (this.cfg.disabled || this.readonly) {
        triggerButton.addClass("ui-state-disabled");
      }
      var buttonIndex = this.cfg.buttonTabindex || this.jqEl.attr("tabindex");
      if (buttonIndex) {
        triggerButton.attr("tabindex", buttonIndex);
      }
      PrimeFaces.skinButton(triggerButton);
      $("#ui-datepicker-div").addClass("ui-shadow");
      this.jq.addClass("ui-trigger-calendar");
    }
    if (this.cfg.popup) {
      this.jq.data("primefaces-overlay-target", this.id).find("*").data("primefaces-overlay-target", this.id);
    }
    if (!this.cfg.popup && this.cfg.showTodayButton === false) {
      this.jqEl.parent().find(".ui-datepicker-current").hide();
    }
    this.input.data(PrimeFaces.CLIENT_ID_DATA, this.id);
  }
  /**
   * Initializes the mask on the input if using a mask and not an inline picker.
   * @private
   */
  applyMask() {
    if (this.cfg.inline || this.input.is("[readonly]") || this.input.is(":disabled")) {
      return;
    }
    if (this.cfg.mask) {
      var isAutoClear = this.cfg.maskAutoClear === void 0 ? true : this.cfg.maskAutoClear;
      var maskCfg = {
        placeholder: this.cfg.maskSlotChar || "_",
        clearMaskOnLostFocus: isAutoClear,
        clearIncomplete: isAutoClear,
        autoUnmask: false
      };
      var pattern = /[mdyhs]/i;
      var isAlias = pattern.test(this.cfg.mask);
      if (isAlias) {
        maskCfg.alias = "datetime";
        maskCfg.inputFormat = this.cfg.mask;
      } else {
        maskCfg.mask = this.cfg.mask;
      }
      this.input.inputmask("remove").inputmask(maskCfg);
    }
  }
  /**
   * Fired when the browser viewport is resized or scrolled.  In Mobile environment we don't want to hider the overlay
   * we want to re-align it.  This is because on some mobile browser the popup may force the browser to trigger a 
   * resize immediately and close the overlay. See GitHub #7075.
   * @private
   */
  handleViewportChange() {
    if (PrimeFaces.env.mobile) {
      this.alignPanel();
    } else {
      $.datepicker._hideDatepicker();
    }
  }
  /**
   * Aligns the overlay panel with the date picker according to the current configuration. It is usually positioned
   * next to or below the input field to which it is attached.
   */
  alignPanel() {
    if ($.datepicker._lastInput && this.id + "_input" === $.datepicker._lastInput.id) {
      $("#ui-datepicker-div").css({ left: "", top: "" }).position({
        my: "left top",
        at: "left bottom",
        of: this.input,
        collision: "flipfit"
      });
    }
  }
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  refresh(cfg) {
    if (cfg.popup && $.datepicker._lastInput && cfg.id + "_input" === $.datepicker._lastInput.id) {
      $.datepicker._hideDatepicker();
    }
    super.refresh(cfg);
  }
  /**
   * @override
   * @inheritdoc
   */
  destroy() {
    if (this.cfg.popup && $.datepicker._lastInput && this.cfg.id + "_input" === $.datepicker._lastInput.id) {
      $.datepicker._hideDatepicker();
    }
    if ($.datepicker._curInst) $.datepicker._curInst.input = null;
    if ($.datepicker._lastInput) $.datepicker._lastInput = null;
    $.datepicker._disabledInputs = [];
    if (this.cfg.mask && this.input) {
      this.input.inputmask("remove");
      this.input.off();
    }
    super.destroy();
  }
  /**
   * Sets up the locale so that this calendar is displayed in the configured langauge.
   * @private
   */
  configureLocale() {
    var localeSettings = PrimeFaces.getLocaleSettings(this.cfg.locale);
    if (localeSettings) {
      for (var setting in localeSettings) {
        if (setting !== "dateFormat") {
          this.cfg[setting] = localeSettings[setting];
        }
      }
      ;
      Object.assign(this.cfg, {
        firstDay: localeSettings.firstDayOfWeek,
        closeText: localeSettings.aria.close,
        prevText: localeSettings.aria.previous,
        nextText: localeSettings.aria.next,
        currentText: localeSettings.today
      });
    }
  }
  /**
   * Sets up the event listeners for when the user selects a particular date.
   * @private
   */
  bindDateSelectListener() {
    var $this = this;
    this.cfg.onSelect = function() {
      if ($this.cfg.popup) {
        $this.fireDateSelectEvent();
        if ($this.cfg.focusOnSelect) {
          $this.refocusInput = true;
          $this.jqEl.trigger("focus");
          if (!($this.cfg.showOn && $this.cfg.showOn === "button")) {
            $this.jqEl.off("click.calendar").on("click.calendar", function() {
              $(this).datepicker("show");
            });
          }
          setTimeout(function() {
            $this.refocusInput = false;
          }, 10);
        }
      } else {
        var settingsObj = {
          settings: $this.cfg
        };
        var newDate = $this.cfg.timeOnly ? "" : $.datepicker.formatDate($this.cfg.dateFormat, $this.getDate(), $.datepicker._getFormatConfig(settingsObj));
        if ($this.cfg.timeFormat) {
          newDate += " " + $this.jqEl.find(".ui_tpicker_time_input")[0].value;
        }
        $this.input.val(newDate);
        $this.fireDateSelectEvent();
      }
    };
  }
  /**
   * Triggers the behaviors and event listener for when the user has selected a certain date.
   * @private
   */
  fireDateSelectEvent() {
    this.callBehavior("dateSelect");
  }
  /**
   * Sets up the event listeners for when the user switches to a different month or year.
   * @private
   */
  bindViewChangeListener() {
    if (this.hasBehavior("viewChange")) {
      var $this = this;
      this.cfg.onChangeMonthYear = function(year, month) {
        $this.fireViewChangeEvent(year, month);
      };
    }
  }
  /**
   * Triggers the behaviors and event listener for when the user has switched to a different month or year.
   * @private
   * @param {number} year New year for which a calendar is shown.
   * @param {number} month New month for which a calendar is shown (0=January).
   */
  fireViewChangeEvent(year, month) {
    if (this.hasBehavior("viewChange")) {
      var ext = {
        params: [
          { name: this.id + "_month", value: month },
          { name: this.id + "_year", value: year }
        ]
      };
      this.callBehavior("viewChange", ext);
    }
  }
  /**
   * Sets up the event listeners for when this calendar is closed.
   * @private
   */
  bindCloseListener() {
    if (this.hasBehavior("close")) {
      var $this = this;
      this.cfg.onClose = function() {
        $this.fireCloseEvent();
      };
    }
  }
  /**
   * Triggers the `close` event when this calendar is closed.
   * @private
   */
  fireCloseEvent() {
    this.callBehavior("close");
  }
  /**
   * Creates and initializes the confiugration options for the time picker.
   * @private
   */
  configureTimePicker() {
    var pattern = this.cfg.dateFormat, timeSeparatorIndex = pattern.toLowerCase().indexOf("h");
    this.cfg.dateFormat = pattern.substring(0, timeSeparatorIndex - 1);
    this.cfg.timeFormat = pattern.substring(timeSeparatorIndex, pattern.length);
    if (this.cfg.timeFormat.indexOf("TT") != -1) {
      this.cfg.ampm = true;
    }
    var timeSettings = {
      settings: this.cfg
    };
    var parseSettings = $.datepicker._getFormatConfig(timeSettings);
    if (this.cfg.minDate) {
      this.cfg.minDate = $.datepicker.parseDateTime(this.cfg.dateFormat, this.cfg.timeFormat, this.cfg.minDate, parseSettings, this.cfg);
    }
    if (this.cfg.maxDate) {
      this.cfg.maxDate = $.datepicker.parseDateTime(this.cfg.dateFormat, this.cfg.timeFormat, this.cfg.maxDate, parseSettings, this.cfg);
    }
    if (!this.cfg.showButtonPanel) {
      this.cfg.showButtonPanel = false;
    }
    if (this.cfg.controlType == "custom" && this.cfg.timeControlObject) {
      this.cfg.controlType = this.cfg.timeControlObject;
    }
    if (this.cfg.showHour) {
      this.cfg.showHour = this.cfg.showHour === "true";
    }
    if (this.cfg.showMinute) {
      this.cfg.showMinute = this.cfg.showMinute === "true";
    }
    if (this.cfg.showSecond) {
      this.cfg.showSecond = this.cfg.showSecond === "true";
    }
    if (this.cfg.showMillisec) {
      this.cfg.showMillisec = this.cfg.showMillisec === "true";
    }
  }
  /**
   * Checks whether this calendar lets the user specify a clock time (and not just a date).
   * @return {boolean} `true` when this calendar includes a clock time picker, `false` otherwise.
   */
  hasTimePicker() {
    return this.cfg.dateFormat.toLowerCase().indexOf("h") != -1;
  }
  /**
   * Sets the currently selected date of the datepicker.
   * @param {Date | null | undefined} date Date to display, or `null` or `undefined` to clear the date.
   */
  setDate(date) {
    this.jqEl.datetimepicker("setDate", date);
  }
  /**
   * Finds the currently selected date.
   * @return {Date | null} The selected date of the calendar, or `null` when no date is selected.
   */
  getDate() {
    return this.jqEl.datetimepicker("getDate");
  }
  /**
   * Enables the calendar, so that the user can select a date.
   */
  enable() {
    this.jqEl.datetimepicker("enable");
  }
  /**
   * Disables the calendar, so that the user can no longer select any date..
   */
  disable() {
    this.jqEl.datetimepicker("disable");
  }
};
export {
  Calendar
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvanF1ZXJ5LXVpLXRpbWVwaWNrZXItYWRkb24tcGF0Y2gtZTdjNGY5NTU5Yy0xMGMwLnppcC9ub2RlX21vZHVsZXMvanF1ZXJ5LXVpLXRpbWVwaWNrZXItYWRkb24vZGlzdC9qcXVlcnktdWktdGltZXBpY2tlci1hZGRvbi5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9qcXVlcnktdWktbnBtLTEuMTQuMS1jZTg1MjAyYzAwLTEwYzAuemlwL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkva2V5Y29kZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9qcXVlcnktdWktbnBtLTEuMTQuMS1jZTg1MjAyYzAwLTEwYzAuemlwL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvd2lkZ2V0cy9kYXRlcGlja2VyLmpzIiwgIi4uL3NyYy9jYWxlbmRhci80LWNhbGVuZGFyLmpzIiwgIi4uL3NyYy9jYWxlbmRhci8yLWpxdWVyeS51aS5wZmV4dGVuc2lvbnMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qISBqUXVlcnkgVGltZXBpY2tlciBBZGRvbiAtIHYxLjYuMyAtIDIwMTYtMDQtMjBcbiogaHR0cDovL3RyZW50cmljaGFyZHNvbi5jb20vZXhhbXBsZXMvdGltZXBpY2tlclxuKiBDb3B5cmlnaHQgKGMpIDIwMTYgVHJlbnQgUmljaGFyZHNvbjsgTGljZW5zZWQgTUlUICovXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShbJ2pxdWVyeScsICdqcXVlcnktdWknXSwgZmFjdG9yeSk7XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeShqUXVlcnkpO1xuXHR9XG59KGZ1bmN0aW9uICgkKSB7XG5cblx0Lypcblx0KiBMZXRzIG5vdCByZWRlZmluZSB0aW1lcGlja2VyLCBQcmV2ZW50IFwiVW5jYXVnaHQgUmFuZ2VFcnJvcjogTWF4aW11bSBjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIlxuXHQqL1xuXHQkLnVpLnRpbWVwaWNrZXIgPSAkLnVpLnRpbWVwaWNrZXIgfHwge307XG5cdGlmICgkLnVpLnRpbWVwaWNrZXIudmVyc2lvbikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8qXG5cdCogRXh0ZW5kIGpRdWVyeVVJLCBnZXQgaXQgc3RhcnRlZCB3aXRoIG91ciB2ZXJzaW9uIG51bWJlclxuXHQqL1xuXHQkLmV4dGVuZCgkLnVpLCB7XG5cdFx0dGltZXBpY2tlcjoge1xuXHRcdFx0dmVyc2lvbjogXCIxLjYuM1wiXG5cdFx0fVxuXHR9KTtcblxuXHQvKlxuXHQqIFRpbWVwaWNrZXIgbWFuYWdlci5cblx0KiBVc2UgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzLCAkLnRpbWVwaWNrZXIsIHRvIGludGVyYWN0IHdpdGggdGhlIHRpbWUgcGlja2VyLlxuXHQqIFNldHRpbmdzIGZvciAoZ3JvdXBzIG9mKSB0aW1lIHBpY2tlcnMgYXJlIG1haW50YWluZWQgaW4gYW4gaW5zdGFuY2Ugb2JqZWN0LFxuXHQqIGFsbG93aW5nIG11bHRpcGxlIGRpZmZlcmVudCBzZXR0aW5ncyBvbiB0aGUgc2FtZSBwYWdlLlxuXHQqL1xuXHR2YXIgVGltZXBpY2tlciA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnJlZ2lvbmFsID0gW107IC8vIEF2YWlsYWJsZSByZWdpb25hbCBzZXR0aW5ncywgaW5kZXhlZCBieSBsYW5ndWFnZSBjb2RlXG5cdFx0dGhpcy5yZWdpb25hbFsnJ10gPSB7IC8vIERlZmF1bHQgcmVnaW9uYWwgc2V0dGluZ3Ncblx0XHRcdGN1cnJlbnRUZXh0OiAnTm93Jyxcblx0XHRcdGNsb3NlVGV4dDogJ0RvbmUnLFxuXHRcdFx0YW1OYW1lczogWydBTScsICdBJ10sXG5cdFx0XHRwbU5hbWVzOiBbJ1BNJywgJ1AnXSxcblx0XHRcdHRpbWVGb3JtYXQ6ICdISDptbScsXG5cdFx0XHR0aW1lU3VmZml4OiAnJyxcblx0XHRcdHRpbWVPbmx5VGl0bGU6ICdDaG9vc2UgVGltZScsXG5cdFx0XHR0aW1lVGV4dDogJ1RpbWUnLFxuXHRcdFx0aG91clRleHQ6ICdIb3VyJyxcblx0XHRcdG1pbnV0ZVRleHQ6ICdNaW51dGUnLFxuXHRcdFx0c2Vjb25kVGV4dDogJ1NlY29uZCcsXG5cdFx0XHRtaWxsaXNlY1RleHQ6ICdNaWxsaXNlY29uZCcsXG5cdFx0XHRtaWNyb3NlY1RleHQ6ICdNaWNyb3NlY29uZCcsXG5cdFx0XHR0aW1lem9uZVRleHQ6ICdUaW1lIFpvbmUnLFxuXHRcdFx0aXNSVEw6IGZhbHNlXG5cdFx0fTtcblx0XHR0aGlzLl9kZWZhdWx0cyA9IHsgLy8gR2xvYmFsIGRlZmF1bHRzIGZvciBhbGwgdGhlIGRhdGV0aW1lIHBpY2tlciBpbnN0YW5jZXNcblx0XHRcdHNob3dCdXR0b25QYW5lbDogdHJ1ZSxcblx0XHRcdHRpbWVPbmx5OiBmYWxzZSxcblx0XHRcdHRpbWVPbmx5U2hvd0RhdGU6IGZhbHNlLFxuXHRcdFx0c2hvd0hvdXI6IG51bGwsXG5cdFx0XHRzaG93TWludXRlOiBudWxsLFxuXHRcdFx0c2hvd1NlY29uZDogbnVsbCxcblx0XHRcdHNob3dNaWxsaXNlYzogbnVsbCxcblx0XHRcdHNob3dNaWNyb3NlYzogbnVsbCxcblx0XHRcdHNob3dUaW1lem9uZTogbnVsbCxcblx0XHRcdHNob3dUaW1lOiB0cnVlLFxuXHRcdFx0c3RlcEhvdXI6IDEsXG5cdFx0XHRzdGVwTWludXRlOiAxLFxuXHRcdFx0c3RlcFNlY29uZDogMSxcblx0XHRcdHN0ZXBNaWxsaXNlYzogMSxcblx0XHRcdHN0ZXBNaWNyb3NlYzogMSxcblx0XHRcdGhvdXI6IDAsXG5cdFx0XHRtaW51dGU6IDAsXG5cdFx0XHRzZWNvbmQ6IDAsXG5cdFx0XHRtaWxsaXNlYzogMCxcblx0XHRcdG1pY3Jvc2VjOiAwLFxuXHRcdFx0dGltZXpvbmU6IG51bGwsXG5cdFx0XHRob3VyTWluOiAwLFxuXHRcdFx0bWludXRlTWluOiAwLFxuXHRcdFx0c2Vjb25kTWluOiAwLFxuXHRcdFx0bWlsbGlzZWNNaW46IDAsXG5cdFx0XHRtaWNyb3NlY01pbjogMCxcblx0XHRcdGhvdXJNYXg6IDIzLFxuXHRcdFx0bWludXRlTWF4OiA1OSxcblx0XHRcdHNlY29uZE1heDogNTksXG5cdFx0XHRtaWxsaXNlY01heDogOTk5LFxuXHRcdFx0bWljcm9zZWNNYXg6IDk5OSxcblx0XHRcdG1pbkRhdGVUaW1lOiBudWxsLFxuXHRcdFx0bWF4RGF0ZVRpbWU6IG51bGwsXG5cdFx0XHRtYXhUaW1lOiBudWxsLFxuXHRcdFx0bWluVGltZTogbnVsbCxcblx0XHRcdG9uU2VsZWN0OiBudWxsLFxuXHRcdFx0aG91ckdyaWQ6IDAsXG5cdFx0XHRtaW51dGVHcmlkOiAwLFxuXHRcdFx0c2Vjb25kR3JpZDogMCxcblx0XHRcdG1pbGxpc2VjR3JpZDogMCxcblx0XHRcdG1pY3Jvc2VjR3JpZDogMCxcblx0XHRcdGFsd2F5c1NldFRpbWU6IHRydWUsXG5cdFx0XHRzZXBhcmF0b3I6ICcgJyxcblx0XHRcdGFsdEZpZWxkVGltZU9ubHk6IHRydWUsXG5cdFx0XHRhbHRUaW1lRm9ybWF0OiBudWxsLFxuXHRcdFx0YWx0U2VwYXJhdG9yOiBudWxsLFxuXHRcdFx0YWx0VGltZVN1ZmZpeDogbnVsbCxcblx0XHRcdGFsdFJlZGlyZWN0Rm9jdXM6IHRydWUsXG5cdFx0XHRwaWNrZXJUaW1lRm9ybWF0OiBudWxsLFxuXHRcdFx0cGlja2VyVGltZVN1ZmZpeDogbnVsbCxcblx0XHRcdHNob3dUaW1lcGlja2VyOiB0cnVlLFxuXHRcdFx0dGltZXpvbmVMaXN0OiBudWxsLFxuXHRcdFx0YWRkU2xpZGVyQWNjZXNzOiBmYWxzZSxcblx0XHRcdHNsaWRlckFjY2Vzc0FyZ3M6IG51bGwsXG5cdFx0XHRjb250cm9sVHlwZTogJ3NsaWRlcicsXG5cdFx0XHRvbmVMaW5lOiBmYWxzZSxcblx0XHRcdGRlZmF1bHRWYWx1ZTogbnVsbCxcblx0XHRcdHBhcnNlOiAnc3RyaWN0Jyxcblx0XHRcdGFmdGVySW5qZWN0OiBudWxsXG5cdFx0fTtcblx0XHQkLmV4dGVuZCh0aGlzLl9kZWZhdWx0cywgdGhpcy5yZWdpb25hbFsnJ10pO1xuXHR9O1xuXG5cdCQuZXh0ZW5kKFRpbWVwaWNrZXIucHJvdG90eXBlLCB7XG5cdFx0JGlucHV0OiBudWxsLFxuXHRcdCRhbHRJbnB1dDogbnVsbCxcblx0XHQkdGltZU9iajogbnVsbCxcblx0XHRpbnN0OiBudWxsLFxuXHRcdGhvdXJfc2xpZGVyOiBudWxsLFxuXHRcdG1pbnV0ZV9zbGlkZXI6IG51bGwsXG5cdFx0c2Vjb25kX3NsaWRlcjogbnVsbCxcblx0XHRtaWxsaXNlY19zbGlkZXI6IG51bGwsXG5cdFx0bWljcm9zZWNfc2xpZGVyOiBudWxsLFxuXHRcdHRpbWV6b25lX3NlbGVjdDogbnVsbCxcblx0XHRtYXhUaW1lOiBudWxsLFxuXHRcdG1pblRpbWU6IG51bGwsXG5cdFx0aG91cjogMCxcblx0XHRtaW51dGU6IDAsXG5cdFx0c2Vjb25kOiAwLFxuXHRcdG1pbGxpc2VjOiAwLFxuXHRcdG1pY3Jvc2VjOiAwLFxuXHRcdHRpbWV6b25lOiBudWxsLFxuXHRcdGhvdXJNaW5PcmlnaW5hbDogbnVsbCxcblx0XHRtaW51dGVNaW5PcmlnaW5hbDogbnVsbCxcblx0XHRzZWNvbmRNaW5PcmlnaW5hbDogbnVsbCxcblx0XHRtaWxsaXNlY01pbk9yaWdpbmFsOiBudWxsLFxuXHRcdG1pY3Jvc2VjTWluT3JpZ2luYWw6IG51bGwsXG5cdFx0aG91ck1heE9yaWdpbmFsOiBudWxsLFxuXHRcdG1pbnV0ZU1heE9yaWdpbmFsOiBudWxsLFxuXHRcdHNlY29uZE1heE9yaWdpbmFsOiBudWxsLFxuXHRcdG1pbGxpc2VjTWF4T3JpZ2luYWw6IG51bGwsXG5cdFx0bWljcm9zZWNNYXhPcmlnaW5hbDogbnVsbCxcblx0XHRhbXBtOiAnJyxcblx0XHRmb3JtYXR0ZWREYXRlOiAnJyxcblx0XHRmb3JtYXR0ZWRUaW1lOiAnJyxcblx0XHRmb3JtYXR0ZWREYXRlVGltZTogJycsXG5cdFx0dGltZXpvbmVMaXN0OiBudWxsLFxuXHRcdHVuaXRzOiBbJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcsICdtaWxsaXNlYycsICdtaWNyb3NlYyddLFxuXHRcdHN1cHBvcnQ6IHt9LFxuXHRcdGNvbnRyb2w6IG51bGwsXG5cblx0XHQvKlxuXHRcdCogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2V0dGluZ3MgZm9yIGFsbCBpbnN0YW5jZXMgb2YgdGhlIHRpbWUgcGlja2VyLlxuXHRcdCogQHBhcmFtICB7T2JqZWN0fSBzZXR0aW5ncyAgb2JqZWN0IC0gdGhlIG5ldyBzZXR0aW5ncyB0byB1c2UgYXMgZGVmYXVsdHMgKGFub255bW91cyBvYmplY3QpXG5cdFx0KiBAcmV0dXJuIHtPYmplY3R9IHRoZSBtYW5hZ2VyIG9iamVjdFxuXHRcdCovXG5cdFx0c2V0RGVmYXVsdHM6IGZ1bmN0aW9uIChzZXR0aW5ncykge1xuXHRcdFx0ZXh0ZW5kUmVtb3ZlKHRoaXMuX2RlZmF1bHRzLCBzZXR0aW5ncyB8fCB7fSk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXG5cdFx0Lypcblx0XHQqIENyZWF0ZSBhIG5ldyBUaW1lcGlja2VyIGluc3RhbmNlXG5cdFx0Ki9cblx0XHRfbmV3SW5zdDogZnVuY3Rpb24gKCRpbnB1dCwgb3B0cykge1xuXHRcdFx0dmFyIHRwX2luc3QgPSBuZXcgVGltZXBpY2tlcigpLFxuXHRcdFx0XHRpbmxpbmVTZXR0aW5ncyA9IHt9LFxuXHRcdFx0XHRmbnMgPSB7fSxcblx0XHRcdFx0b3ZlcnJpZGVzLCBpO1xuXG5cdFx0XHRmb3IgKHZhciBhdHRyTmFtZSBpbiB0aGlzLl9kZWZhdWx0cykge1xuXHRcdFx0XHRpZiAodGhpcy5fZGVmYXVsdHMuaGFzT3duUHJvcGVydHkoYXR0ck5hbWUpKSB7XG5cdFx0XHRcdFx0dmFyIGF0dHJWYWx1ZSA9ICRpbnB1dC5hdHRyKCd0aW1lOicgKyBhdHRyTmFtZSk7XG5cdFx0XHRcdFx0aWYgKGF0dHJWYWx1ZSkge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0aW5saW5lU2V0dGluZ3NbYXR0ck5hbWVdID0gZXZhbChhdHRyVmFsdWUpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdGlubGluZVNldHRpbmdzW2F0dHJOYW1lXSA9IGF0dHJWYWx1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0b3ZlcnJpZGVzID0ge1xuXHRcdFx0XHRiZWZvcmVTaG93OiBmdW5jdGlvbiAoaW5wdXQsIGRwX2luc3QpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHRwX2luc3QuX2RlZmF1bHRzLmV2bnRzLmJlZm9yZVNob3cgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRwX2luc3QuX2RlZmF1bHRzLmV2bnRzLmJlZm9yZVNob3cuY2FsbCgkaW5wdXRbMF0sIGlucHV0LCBkcF9pbnN0LCB0cF9pbnN0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uQ2hhbmdlTW9udGhZZWFyOiBmdW5jdGlvbiAoeWVhciwgbW9udGgsIGRwX2luc3QpIHtcblx0XHRcdFx0XHQvLyBVcGRhdGUgdGhlIHRpbWUgYXMgd2VsbCA6IHRoaXMgcHJldmVudHMgdGhlIHRpbWUgZnJvbSBkaXNhcHBlYXJpbmcgZnJvbSB0aGUgJGlucHV0IGZpZWxkLlxuXHRcdFx0XHRcdC8vIHRwX2luc3QuX3VwZGF0ZURhdGVUaW1lKGRwX2luc3QpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgdHBfaW5zdC5fZGVmYXVsdHMuZXZudHMub25DaGFuZ2VNb250aFllYXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0dHBfaW5zdC5fZGVmYXVsdHMuZXZudHMub25DaGFuZ2VNb250aFllYXIuY2FsbCgkaW5wdXRbMF0sIHllYXIsIG1vbnRoLCBkcF9pbnN0LCB0cF9pbnN0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9uQ2xvc2U6IGZ1bmN0aW9uIChkYXRlVGV4dCwgZHBfaW5zdCkge1xuXHRcdFx0XHRcdGlmICh0cF9pbnN0LnRpbWVEZWZpbmVkID09PSB0cnVlICYmICRpbnB1dC52YWwoKSAhPT0gJycpIHtcblx0XHRcdFx0XHRcdHRwX2luc3QuX3VwZGF0ZURhdGVUaW1lKGRwX2luc3QpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodHlwZW9mIHRwX2luc3QuX2RlZmF1bHRzLmV2bnRzLm9uQ2xvc2UgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0dHBfaW5zdC5fZGVmYXVsdHMuZXZudHMub25DbG9zZS5jYWxsKCRpbnB1dFswXSwgZGF0ZVRleHQsIGRwX2luc3QsIHRwX2luc3QpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGZvciAoaSBpbiBvdmVycmlkZXMpIHtcblx0XHRcdFx0aWYgKG92ZXJyaWRlcy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuXHRcdFx0XHRcdGZuc1tpXSA9IG9wdHNbaV0gfHwgdGhpcy5fZGVmYXVsdHNbaV0gfHwgbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0cF9pbnN0Ll9kZWZhdWx0cyA9ICQuZXh0ZW5kKHt9LCB0aGlzLl9kZWZhdWx0cywgaW5saW5lU2V0dGluZ3MsIG9wdHMsIG92ZXJyaWRlcywge1xuXHRcdFx0XHRldm50czogZm5zLFxuXHRcdFx0XHR0aW1lcGlja2VyOiB0cF9pbnN0IC8vIGFkZCB0aW1lcGlja2VyIGFzIGEgcHJvcGVydHkgb2YgZGF0ZXBpY2tlcjogJC5kYXRlcGlja2VyLl9nZXQoZHBfaW5zdCwgJ3RpbWVwaWNrZXInKTtcblx0XHRcdH0pO1xuXHRcdFx0dHBfaW5zdC5hbU5hbWVzID0gJC5tYXAodHBfaW5zdC5fZGVmYXVsdHMuYW1OYW1lcywgZnVuY3Rpb24gKHZhbCkge1xuXHRcdFx0XHRyZXR1cm4gdmFsLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHR9KTtcblx0XHRcdHRwX2luc3QucG1OYW1lcyA9ICQubWFwKHRwX2luc3QuX2RlZmF1bHRzLnBtTmFtZXMsIGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdFx0cmV0dXJuIHZhbC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGRldGVjdCB3aGljaCB1bml0cyBhcmUgc3VwcG9ydGVkXG5cdFx0XHR0cF9pbnN0LnN1cHBvcnQgPSBkZXRlY3RTdXBwb3J0KFxuXHRcdFx0XHRcdHRwX2luc3QuX2RlZmF1bHRzLnRpbWVGb3JtYXQgK1xuXHRcdFx0XHRcdCh0cF9pbnN0Ll9kZWZhdWx0cy5waWNrZXJUaW1lRm9ybWF0ID8gdHBfaW5zdC5fZGVmYXVsdHMucGlja2VyVGltZUZvcm1hdCA6ICcnKSArXG5cdFx0XHRcdFx0KHRwX2luc3QuX2RlZmF1bHRzLmFsdFRpbWVGb3JtYXQgPyB0cF9pbnN0Ll9kZWZhdWx0cy5hbHRUaW1lRm9ybWF0IDogJycpKTtcblxuXHRcdFx0Ly8gY29udHJvbFR5cGUgaXMgc3RyaW5nIC0ga2V5IHRvIG91ciB0aGlzLl9jb250cm9sc1xuXHRcdFx0aWYgKHR5cGVvZih0cF9pbnN0Ll9kZWZhdWx0cy5jb250cm9sVHlwZSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGlmICh0cF9pbnN0Ll9kZWZhdWx0cy5jb250cm9sVHlwZSA9PT0gJ3NsaWRlcicgJiYgdHlwZW9mKCQudWkuc2xpZGVyKSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHR0cF9pbnN0Ll9kZWZhdWx0cy5jb250cm9sVHlwZSA9ICdzZWxlY3QnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRwX2luc3QuY29udHJvbCA9IHRwX2luc3QuX2NvbnRyb2xzW3RwX2luc3QuX2RlZmF1bHRzLmNvbnRyb2xUeXBlXTtcblx0XHRcdH1cblx0XHRcdC8vIGNvbnRyb2xUeXBlIGlzIGFuIG9iamVjdCBhbmQgbXVzdCBpbXBsZW1lbnQgY3JlYXRlLCBvcHRpb25zLCB2YWx1ZSBtZXRob2RzXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dHBfaW5zdC5jb250cm9sID0gdHBfaW5zdC5fZGVmYXVsdHMuY29udHJvbFR5cGU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHByZXAgdGhlIHRpbWV6b25lIG9wdGlvbnNcblx0XHRcdHZhciB0aW1lem9uZUxpc3QgPSBbLTcyMCwgLTY2MCwgLTYwMCwgLTU3MCwgLTU0MCwgLTQ4MCwgLTQyMCwgLTM2MCwgLTMwMCwgLTI3MCwgLTI0MCwgLTIxMCwgLTE4MCwgLTEyMCwgLTYwLFxuXHRcdFx0XHRcdDAsIDYwLCAxMjAsIDE4MCwgMjEwLCAyNDAsIDI3MCwgMzAwLCAzMzAsIDM0NSwgMzYwLCAzOTAsIDQyMCwgNDgwLCA1MjUsIDU0MCwgNTcwLCA2MDAsIDYzMCwgNjYwLCA2OTAsIDcyMCwgNzY1LCA3ODAsIDg0MF07XG5cdFx0XHRpZiAodHBfaW5zdC5fZGVmYXVsdHMudGltZXpvbmVMaXN0ICE9PSBudWxsKSB7XG5cdFx0XHRcdHRpbWV6b25lTGlzdCA9IHRwX2luc3QuX2RlZmF1bHRzLnRpbWV6b25lTGlzdDtcblx0XHRcdH1cblx0XHRcdHZhciB0emwgPSB0aW1lem9uZUxpc3QubGVuZ3RoLCB0emkgPSAwLCB0enYgPSBudWxsO1xuXHRcdFx0aWYgKHR6bCA+IDAgJiYgdHlwZW9mIHRpbWV6b25lTGlzdFswXSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICg7IHR6aSA8IHR6bDsgdHppKyspIHtcblx0XHRcdFx0XHR0enYgPSB0aW1lem9uZUxpc3RbdHppXTtcblx0XHRcdFx0XHR0aW1lem9uZUxpc3RbdHppXSA9IHsgdmFsdWU6IHR6diwgbGFiZWw6ICQudGltZXBpY2tlci50aW1lem9uZU9mZnNldFN0cmluZyh0enYsIHRwX2luc3Quc3VwcG9ydC5pc284NjAxKSB9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0cF9pbnN0Ll9kZWZhdWx0cy50aW1lem9uZUxpc3QgPSB0aW1lem9uZUxpc3Q7XG5cblx0XHRcdC8vIHNldCB0aGUgZGVmYXVsdCB1bml0c1xuXHRcdFx0dHBfaW5zdC50aW1lem9uZSA9IHRwX2luc3QuX2RlZmF1bHRzLnRpbWV6b25lICE9PSBudWxsID8gJC50aW1lcGlja2VyLnRpbWV6b25lT2Zmc2V0TnVtYmVyKHRwX2luc3QuX2RlZmF1bHRzLnRpbWV6b25lKSA6XG5cdFx0XHRcdFx0XHRcdCgobmV3IERhdGUoKSkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIC0xKTtcblx0XHRcdHRwX2luc3QuaG91ciA9IHRwX2luc3QuX2RlZmF1bHRzLmhvdXIgPCB0cF9pbnN0Ll9kZWZhdWx0cy5ob3VyTWluID8gdHBfaW5zdC5fZGVmYXVsdHMuaG91ck1pbiA6XG5cdFx0XHRcdFx0XHRcdHRwX2luc3QuX2RlZmF1bHRzLmhvdXIgPiB0cF9pbnN0Ll9kZWZhdWx0cy5ob3VyTWF4ID8gdHBfaW5zdC5fZGVmYXVsdHMuaG91ck1heCA6IHRwX2luc3QuX2RlZmF1bHRzLmhvdXI7XG5cdFx0XHR0cF9pbnN0Lm1pbnV0ZSA9IHRwX2luc3QuX2RlZmF1bHRzLm1pbnV0ZSA8IHRwX2luc3QuX2RlZmF1bHRzLm1pbnV0ZU1pbiA/IHRwX2luc3QuX2RlZmF1bHRzLm1pbnV0ZU1pbiA6XG5cdFx0XHRcdFx0XHRcdHRwX2luc3QuX2RlZmF1bHRzLm1pbnV0ZSA+IHRwX2luc3QuX2RlZmF1bHRzLm1pbnV0ZU1heCA/IHRwX2luc3QuX2RlZmF1bHRzLm1pbnV0ZU1heCA6IHRwX2luc3QuX2RlZmF1bHRzLm1pbnV0ZTtcblx0XHRcdHRwX2luc3Quc2Vjb25kID0gdHBfaW5zdC5fZGVmYXVsdHMuc2Vjb25kIDwgdHBfaW5zdC5fZGVmYXVsdHMuc2Vjb25kTWluID8gdHBfaW5zdC5fZGVmYXVsdHMuc2Vjb25kTWluIDpcblx0XHRcdFx0XHRcdFx0dHBfaW5zdC5fZGVmYXVsdHMuc2Vjb25kID4gdHBfaW5zdC5fZGVmYXVsdHMuc2Vjb25kTWF4ID8gdHBfaW5zdC5fZGVmYXVsdHMuc2Vjb25kTWF4IDogdHBfaW5zdC5fZGVmYXVsdHMuc2Vjb25kO1xuXHRcdFx0dHBfaW5zdC5taWxsaXNlYyA9IHRwX2luc3QuX2RlZmF1bHRzLm1pbGxpc2VjIDwgdHBfaW5zdC5fZGVmYXVsdHMubWlsbGlzZWNNaW4gPyB0cF9pbnN0Ll9kZWZhdWx0cy5taWxsaXNlY01pbiA6XG5cdFx0XHRcdFx0XHRcdHRwX2luc3QuX2RlZmF1bHRzLm1pbGxpc2VjID4gdHBfaW5zdC5fZGVmYXVsdHMubWlsbGlzZWNNYXggPyB0cF9pbnN0Ll9kZWZhdWx0cy5taWxsaXNlY01heCA6IHRwX2luc3QuX2RlZmF1bHRzLm1pbGxpc2VjO1xuXHRcdFx0dHBfaW5zdC5taWNyb3NlYyA9IHRwX2luc3QuX2RlZmF1bHRzLm1pY3Jvc2VjIDwgdHBfaW5zdC5fZGVmYXVsdHMubWljcm9zZWNNaW4gPyB0cF9pbnN0Ll9kZWZhdWx0cy5taWNyb3NlY01pbiA6XG5cdFx0XHRcdFx0XHRcdHRwX2luc3QuX2RlZmF1bHRzLm1pY3Jvc2VjID4gdHBfaW5zdC5fZGVmYXVsdHMubWljcm9zZWNNYXggPyB0cF9pbnN0Ll9kZWZhdWx0cy5taWNyb3NlY01heCA6IHRwX2luc3QuX2RlZmF1bHRzLm1pY3Jvc2VjO1xuXHRcdFx0dHBfaW5zdC5hbXBtID0gJyc7XG5cdFx0XHR0cF9pbnN0LiRpbnB1dCA9ICRpbnB1dDtcblxuXHRcdFx0aWYgKHRwX2luc3QuX2RlZmF1bHRzLmFsdEZpZWxkKSB7XG5cdFx0XHRcdHRwX2luc3QuJGFsdElucHV0ID0gJCh0cF9pbnN0Ll9kZWZhdWx0cy5hbHRGaWVsZCk7XG5cdFx0XHRcdGlmICh0cF9pbnN0Ll9kZWZhdWx0cy5hbHRSZWRpcmVjdEZvY3VzID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0dHBfaW5zdC4kYWx0SW5wdXQuY3NzKHtcblx0XHRcdFx0XHRcdGN1cnNvcjogJ3BvaW50ZXInXG5cdFx0XHRcdFx0fSkub24oXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQkaW5wdXQudHJpZ2dlcihcImZvY3VzXCIpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0cF9pbnN0Ll9kZWZhdWx0cy5taW5EYXRlID09PSAwIHx8IHRwX2luc3QuX2RlZmF1bHRzLm1pbkRhdGVUaW1lID09PSAwKSB7XG5cdFx0XHRcdHRwX2luc3QuX2RlZmF1bHRzLm1pbkRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRwX2luc3QuX2RlZmF1bHRzLm1heERhdGUgPT09IDAgfHwgdHBfaW5zdC5fZGVmYXVsdHMubWF4RGF0ZVRpbWUgPT09IDApIHtcblx0XHRcdFx0dHBfaW5zdC5fZGVmYXVsdHMubWF4RGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGRhdGVwaWNrZXIgbmVlZHMgbWluRGF0ZS9tYXhEYXRlLCB0aW1lcGlja2VyIG5lZWRzIG1pbkRhdGVUaW1lL21heERhdGVUaW1lLi5cblx0XHRcdGlmICh0cF9pbnN0Ll9kZWZhdWx0cy5taW5EYXRlICE9PSB1bmRlZmluZWQgJiYgdHBfaW5zdC5fZGVmYXVsdHMubWluRGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdFx0dHBfaW5zdC5fZGVmYXVsdHMubWluRGF0ZVRpbWUgPSBuZXcgRGF0ZSh0cF9pbnN0Ll9kZWZhdWx0cy5taW5EYXRlLmdldFRpbWUoKSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHBfaW5zdC5fZGVmYXVsdHMubWluRGF0ZVRpbWUgIT09IHVuZGVmaW5lZCAmJiB0cF9pbnN0Ll9kZWZhdWx0cy5taW5EYXRlVGltZSBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdFx0dHBfaW5zdC5fZGVmYXVsdHMubWluRGF0ZSA9IG5ldyBEYXRlKHRwX2luc3QuX2RlZmF1bHRzLm1pbkRhdGVUaW1lLmdldFRpbWUoKSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHBfaW5zdC5fZGVmYXVsdHMubWF4RGF0ZSAhPT0gdW5kZWZpbmVkICYmIHRwX2luc3QuX2RlZmF1bHRzLm1heERhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0XHRcdHRwX2luc3QuX2RlZmF1bHRzLm1heERhdGVUaW1lID0gbmV3IERhdGUodHBfaW5zdC5fZGVmYXVsdHMubWF4RGF0ZS5nZXRUaW1lKCkpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRwX2luc3QuX2RlZmF1bHRzLm1heERhdGVUaW1lICE9PSB1bmRlZmluZWQgJiYgdHBfaW5zdC5fZGVmYXVsdHMubWF4RGF0ZVRpbWUgaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0XHRcdHRwX2luc3QuX2RlZmF1bHRzLm1heERhdGUgPSBuZXcgRGF0ZSh0cF9pbnN0Ll9kZWZhdWx0cy5tYXhEYXRlVGltZS5nZXRUaW1lKCkpO1xuXHRcdFx0fVxuXHRcdFx0dHBfaW5zdC4kaW5wdXQub24oJ2ZvY3VzJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0cF9pbnN0Ll9vbkZvY3VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHRwX2luc3Q7XG5cdFx0fSxcblxuXHRcdC8qXG5cdFx0KiBhZGQgb3VyIHNsaWRlcnMgdG8gdGhlIGNhbGVuZGFyXG5cdFx0Ki9cblx0XHRfYWRkVGltZVBpY2tlcjogZnVuY3Rpb24gKGRwX2luc3QpIHtcblx0XHRcdHZhciBjdXJyRFQgPSBQcmltZUZhY2VzLnRyaW0oKHRoaXMuJGFsdElucHV0ICYmIHRoaXMuX2RlZmF1bHRzLmFsdEZpZWxkVGltZU9ubHkpID8gdGhpcy4kaW5wdXQudmFsKCkgKyAnICcgKyB0aGlzLiRhbHRJbnB1dC52YWwoKSA6IHRoaXMuJGlucHV0LnZhbCgpKTtcblxuXHRcdFx0dGhpcy50aW1lRGVmaW5lZCA9IHRoaXMuX3BhcnNlVGltZShjdXJyRFQpO1xuXHRcdFx0dGhpcy5fbGltaXRNaW5NYXhEYXRlVGltZShkcF9pbnN0LCBmYWxzZSk7XG5cdFx0XHR0aGlzLl9pbmplY3RUaW1lUGlja2VyKCk7XG5cdFx0XHR0aGlzLl9hZnRlckluamVjdCgpO1xuXHRcdH0sXG5cblx0XHQvKlxuXHRcdCogcGFyc2UgdGhlIHRpbWUgc3RyaW5nIGZyb20gaW5wdXQgdmFsdWUgb3IgX3NldFRpbWVcblx0XHQqL1xuXHRcdF9wYXJzZVRpbWU6IGZ1bmN0aW9uICh0aW1lU3RyaW5nLCB3aXRoRGF0ZSkge1xuXHRcdFx0aWYgKCF0aGlzLmluc3QpIHtcblx0XHRcdFx0dGhpcy5pbnN0ID0gJC5kYXRlcGlja2VyLl9nZXRJbnN0KHRoaXMuJGlucHV0WzBdKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHdpdGhEYXRlIHx8ICF0aGlzLl9kZWZhdWx0cy50aW1lT25seSkge1xuXHRcdFx0XHR2YXIgZHBfZGF0ZUZvcm1hdCA9ICQuZGF0ZXBpY2tlci5fZ2V0KHRoaXMuaW5zdCwgJ2RhdGVGb3JtYXQnKTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YXIgcGFyc2VSZXMgPSBwYXJzZURhdGVUaW1lSW50ZXJuYWwoZHBfZGF0ZUZvcm1hdCwgdGhpcy5fZGVmYXVsdHMudGltZUZvcm1hdCwgdGltZVN0cmluZywgJC5kYXRlcGlja2VyLl9nZXRGb3JtYXRDb25maWcodGhpcy5pbnN0KSwgdGhpcy5fZGVmYXVsdHMpO1xuXHRcdFx0XHRcdGlmICghcGFyc2VSZXMudGltZU9iaikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQkLmV4dGVuZCh0aGlzLCBwYXJzZVJlcy50aW1lT2JqKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0JC50aW1lcGlja2VyLmxvZyhcIkVycm9yIHBhcnNpbmcgdGhlIGRhdGUvdGltZSBzdHJpbmc6IFwiICsgZXJyICtcblx0XHRcdFx0XHRcdFx0XHRcdFwiXFxuZGF0ZS90aW1lIHN0cmluZyA9IFwiICsgdGltZVN0cmluZyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcIlxcbnRpbWVGb3JtYXQgPSBcIiArIHRoaXMuX2RlZmF1bHRzLnRpbWVGb3JtYXQgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XCJcXG5kYXRlRm9ybWF0ID0gXCIgKyBkcF9kYXRlRm9ybWF0KTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgdGltZU9iaiA9ICQuZGF0ZXBpY2tlci5wYXJzZVRpbWUodGhpcy5fZGVmYXVsdHMudGltZUZvcm1hdCwgdGltZVN0cmluZywgdGhpcy5fZGVmYXVsdHMpO1xuXHRcdFx0XHRpZiAoIXRpbWVPYmopIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0JC5leHRlbmQodGhpcywgdGltZU9iaik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKlxuXHRcdCogSGFuZGxlIGNhbGxiYWNrIG9wdGlvbiBhZnRlciBpbmplY3RpbmcgdGltZXBpY2tlclxuXHRcdCovXG5cdFx0X2FmdGVySW5qZWN0OiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBvID0gdGhpcy5pbnN0LnNldHRpbmdzO1xuXHRcdFx0aWYgKHR5cGVvZiBvLmFmdGVySW5qZWN0ID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0by5hZnRlckluamVjdC5jYWxsKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKlxuXHRcdCogZ2VuZXJhdGUgYW5kIGluamVjdCBodG1sIGZvciB0aW1lcGlja2VyIGludG8gdWkgZGF0ZXBpY2tlclxuXHRcdCovXG5cdFx0X2luamVjdFRpbWVQaWNrZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciAkZHAgPSB0aGlzLmluc3QuZHBEaXYsXG5cdFx0XHRcdG8gPSB0aGlzLmluc3Quc2V0dGluZ3MsXG5cdFx0XHRcdHRwX2luc3QgPSB0aGlzLFxuXHRcdFx0XHRsaXRlbSA9ICcnLFxuXHRcdFx0XHR1aXRlbSA9ICcnLFxuXHRcdFx0XHRzaG93ID0gbnVsbCxcblx0XHRcdFx0bWF4ID0ge30sXG5cdFx0XHRcdGdyaWRTaXplID0ge30sXG5cdFx0XHRcdHNpemUgPSBudWxsLFxuXHRcdFx0XHRpID0gMCxcblx0XHRcdFx0bCA9IDA7XG5cblx0XHRcdC8vIFByZXZlbnQgZGlzcGxheWluZyB0d2ljZVxuXHRcdFx0aWYgKCRkcC5maW5kKFwiZGl2LnVpLXRpbWVwaWNrZXItZGl2XCIpLmxlbmd0aCA9PT0gMCAmJiBvLnNob3dUaW1lcGlja2VyKSB7XG5cdFx0XHRcdHZhciBub0Rpc3BsYXkgPSAnIHVpX3RwaWNrZXJfdW5pdF9oaWRlJyxcblx0XHRcdFx0XHRodG1sID0gJzxkaXYgY2xhc3M9XCJ1aS10aW1lcGlja2VyLWRpdicgKyAoby5pc1JUTCA/ICcgdWktdGltZXBpY2tlci1ydGwnIDogJycpICsgKG8ub25lTGluZSAmJiBvLmNvbnRyb2xUeXBlID09PSAnc2VsZWN0JyA/ICcgdWktdGltZXBpY2tlci1vbmVMaW5lJyA6ICcnKSArICdcIj48ZGw+JyArICc8ZHQgY2xhc3M9XCJ1aV90cGlja2VyX3RpbWVfbGFiZWwnICsgKChvLnNob3dUaW1lKSA/ICcnIDogbm9EaXNwbGF5KSArICdcIj4nICsgby50aW1lVGV4dCArICc8L2R0PicgK1xuXHRcdFx0XHRcdFx0XHRcdCc8ZGQgY2xhc3M9XCJ1aV90cGlja2VyX3RpbWUgJysgKChvLnNob3dUaW1lKSA/ICcnIDogbm9EaXNwbGF5KSArICdcIj48aW5wdXQgY2xhc3M9XCJ1aV90cGlja2VyX3RpbWVfaW5wdXRcIiAnICsgKG8udGltZUlucHV0ID8gJycgOiAnZGlzYWJsZWQnKSArICc+PC9pbnB1dD48L2RkPic7XG5cblx0XHRcdFx0Ly8gQ3JlYXRlIHRoZSBtYXJrdXBcblx0XHRcdFx0Zm9yIChpID0gMCwgbCA9IHRoaXMudW5pdHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRcdFx0bGl0ZW0gPSB0aGlzLnVuaXRzW2ldO1xuXHRcdFx0XHRcdHVpdGVtID0gbGl0ZW0uc3Vic3RyKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBsaXRlbS5zdWJzdHIoMSk7XG5cdFx0XHRcdFx0c2hvdyA9IG9bJ3Nob3cnICsgdWl0ZW1dICE9PSBudWxsID8gb1snc2hvdycgKyB1aXRlbV0gOiB0aGlzLnN1cHBvcnRbbGl0ZW1dO1xuXG5cdFx0XHRcdFx0Ly8gQWRkZWQgYnkgUGV0ZXIgTWVkZWlyb3M6XG5cdFx0XHRcdFx0Ly8gLSBGaWd1cmUgb3V0IHdoYXQgdGhlIGhvdXIvbWludXRlL3NlY29uZCBtYXggc2hvdWxkIGJlIGJhc2VkIG9uIHRoZSBzdGVwIHZhbHVlcy5cblx0XHRcdFx0XHQvLyAtIEV4YW1wbGU6IGlmIHN0ZXBNaW51dGUgaXMgMTUsIHRoZW4gbWluTWF4IGlzIDQ1LlxuXHRcdFx0XHRcdG1heFtsaXRlbV0gPSBwYXJzZUludCgob1tsaXRlbSArICdNYXgnXSAtICgob1tsaXRlbSArICdNYXgnXSAtIG9bbGl0ZW0gKyAnTWluJ10pICUgb1snc3RlcCcgKyB1aXRlbV0pKSwgMTApO1xuXHRcdFx0XHRcdGdyaWRTaXplW2xpdGVtXSA9IDA7XG5cblx0XHRcdFx0XHRodG1sICs9ICc8ZHQgY2xhc3M9XCJ1aV90cGlja2VyXycgKyBsaXRlbSArICdfbGFiZWwnICsgKHNob3cgPyAnJyA6IG5vRGlzcGxheSkgKyAnXCI+JyArIG9bbGl0ZW0gKyAnVGV4dCddICsgJzwvZHQ+JyArXG5cdFx0XHRcdFx0XHRcdFx0JzxkZCBjbGFzcz1cInVpX3RwaWNrZXJfJyArIGxpdGVtICsgKHNob3cgPyAnJyA6IG5vRGlzcGxheSkgKyAnXCI+PGRpdiBjbGFzcz1cInVpX3RwaWNrZXJfJyArIGxpdGVtICsgJ19zbGlkZXInICsgKHNob3cgPyAnJyA6IG5vRGlzcGxheSkgKyAnXCI+PC9kaXY+JztcblxuXHRcdFx0XHRcdGlmIChzaG93ICYmIG9bbGl0ZW0gKyAnR3JpZCddID4gMCkge1xuXHRcdFx0XHRcdFx0aHRtbCArPSAnPGRpdiBzdHlsZT1cInBhZGRpbmctbGVmdDogMXB4XCI+PHRhYmxlIGNsYXNzPVwidWktdHBpY2tlci1ncmlkLWxhYmVsXCI+PHRyPic7XG5cblx0XHRcdFx0XHRcdGlmIChsaXRlbSA9PT0gJ2hvdXInKSB7XG5cdFx0XHRcdFx0XHRcdGZvciAodmFyIGggPSBvW2xpdGVtICsgJ01pbiddOyBoIDw9IG1heFtsaXRlbV07IGggKz0gcGFyc2VJbnQob1tsaXRlbSArICdHcmlkJ10sIDEwKSkge1xuXHRcdFx0XHRcdFx0XHRcdGdyaWRTaXplW2xpdGVtXSsrO1xuXHRcdFx0XHRcdFx0XHRcdHZhciB0bXBoID0gJC5kYXRlcGlja2VyLmZvcm1hdFRpbWUodGhpcy5zdXBwb3J0LmFtcG0gPyAnaGh0JyA6ICdISCcsIHtob3VyOiBofSwgbyk7XG5cdFx0XHRcdFx0XHRcdFx0aHRtbCArPSAnPHRkIGRhdGEtZm9yPVwiJyArIGxpdGVtICsgJ1wiPicgKyB0bXBoICsgJzwvdGQ+Jztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGZvciAodmFyIG0gPSBvW2xpdGVtICsgJ01pbiddOyBtIDw9IG1heFtsaXRlbV07IG0gKz0gcGFyc2VJbnQob1tsaXRlbSArICdHcmlkJ10sIDEwKSkge1xuXHRcdFx0XHRcdFx0XHRcdGdyaWRTaXplW2xpdGVtXSsrO1xuXHRcdFx0XHRcdFx0XHRcdGh0bWwgKz0gJzx0ZCBkYXRhLWZvcj1cIicgKyBsaXRlbSArICdcIj4nICsgKChtIDwgMTApID8gJzAnIDogJycpICsgbSArICc8L3RkPic7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aHRtbCArPSAnPC90cj48L3RhYmxlPjwvZGl2Pic7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGh0bWwgKz0gJzwvZGQ+Jztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFRpbWV6b25lXG5cdFx0XHRcdHZhciBzaG93VHogPSBvLnNob3dUaW1lem9uZSAhPT0gbnVsbCA/IG8uc2hvd1RpbWV6b25lIDogdGhpcy5zdXBwb3J0LnRpbWV6b25lO1xuXHRcdFx0XHRodG1sICs9ICc8ZHQgY2xhc3M9XCJ1aV90cGlja2VyX3RpbWV6b25lX2xhYmVsJyArIChzaG93VHogPyAnJyA6IG5vRGlzcGxheSkgKyAnXCI+JyArIG8udGltZXpvbmVUZXh0ICsgJzwvZHQ+Jztcblx0XHRcdFx0aHRtbCArPSAnPGRkIGNsYXNzPVwidWlfdHBpY2tlcl90aW1lem9uZScgKyAoc2hvd1R6ID8gJycgOiBub0Rpc3BsYXkpICsgJ1wiPjwvZGQ+JztcblxuXHRcdFx0XHQvLyBDcmVhdGUgdGhlIGVsZW1lbnRzIGZyb20gc3RyaW5nXG5cdFx0XHRcdGh0bWwgKz0gJzwvZGw+PC9kaXY+Jztcblx0XHRcdFx0dmFyICR0cCA9ICQoaHRtbCk7XG5cblx0XHRcdFx0Ly8gaWYgd2Ugb25seSB3YW50IHRpbWUgcGlja2VyLi4uXG5cdFx0XHRcdGlmIChvLnRpbWVPbmx5ID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0JHRwLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJ1aS13aWRnZXQtaGVhZGVyIHVpLWhlbHBlci1jbGVhcmZpeCB1aS1jb3JuZXItYWxsXCI+JyArICc8ZGl2IGNsYXNzPVwidWktZGF0ZXBpY2tlci10aXRsZVwiPicgKyBQcmltZUZhY2VzLmVzY2FwZUhUTUwoby50aW1lT25seVRpdGxlKSArICc8L2Rpdj4nICsgJzwvZGl2PicpO1xuXHRcdFx0XHRcdCRkcC5maW5kKCcudWktZGF0ZXBpY2tlci1oZWFkZXIsIC51aS1kYXRlcGlja2VyLWNhbGVuZGFyJykuaGlkZSgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gYWRkIHNsaWRlcnMsIGFkanVzdCBncmlkcywgYWRkIGV2ZW50c1xuXHRcdFx0XHRmb3IgKGkgPSAwLCBsID0gdHBfaW5zdC51bml0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0XHRsaXRlbSA9IHRwX2luc3QudW5pdHNbaV07XG5cdFx0XHRcdFx0dWl0ZW0gPSBsaXRlbS5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArIGxpdGVtLnN1YnN0cigxKTtcblx0XHRcdFx0XHRzaG93ID0gb1snc2hvdycgKyB1aXRlbV0gIT09IG51bGwgPyBvWydzaG93JyArIHVpdGVtXSA6IHRoaXMuc3VwcG9ydFtsaXRlbV07XG5cblx0XHRcdFx0XHQvLyBhZGQgdGhlIHNsaWRlclxuXHRcdFx0XHRcdHRwX2luc3RbbGl0ZW0gKyAnX3NsaWRlciddID0gdHBfaW5zdC5jb250cm9sLmNyZWF0ZSh0cF9pbnN0LCAkdHAuZmluZCgnLnVpX3RwaWNrZXJfJyArIGxpdGVtICsgJ19zbGlkZXInKSwgbGl0ZW0sIHRwX2luc3RbbGl0ZW1dLCBvW2xpdGVtICsgJ01pbiddLCBtYXhbbGl0ZW1dLCBvWydzdGVwJyArIHVpdGVtXSk7XG5cblx0XHRcdFx0XHQvLyBhZGp1c3QgdGhlIGdyaWQgYW5kIGFkZCBjbGljayBldmVudFxuXHRcdFx0XHRcdGlmIChzaG93ICYmIG9bbGl0ZW0gKyAnR3JpZCddID4gMCkge1xuXHRcdFx0XHRcdFx0c2l6ZSA9IDEwMCAqIGdyaWRTaXplW2xpdGVtXSAqIG9bbGl0ZW0gKyAnR3JpZCddIC8gKG1heFtsaXRlbV0gLSBvW2xpdGVtICsgJ01pbiddKTtcblx0XHRcdFx0XHRcdCR0cC5maW5kKCcudWlfdHBpY2tlcl8nICsgbGl0ZW0gKyAnIHRhYmxlJykuY3NzKHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IHNpemUgKyBcIiVcIixcblx0XHRcdFx0XHRcdFx0bWFyZ2luTGVmdDogby5pc1JUTCA/ICcwJyA6ICgoc2l6ZSAvICgtMiAqIGdyaWRTaXplW2xpdGVtXSkpICsgXCIlXCIpLFxuXHRcdFx0XHRcdFx0XHRtYXJnaW5SaWdodDogby5pc1JUTCA/ICgoc2l6ZSAvICgtMiAqIGdyaWRTaXplW2xpdGVtXSkpICsgXCIlXCIpIDogJzBweCcsXG5cdFx0XHRcdFx0XHRcdGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnXG5cdFx0XHRcdFx0XHR9KS5maW5kKFwidGRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciAkdCA9ICQodGhpcyksXG5cdFx0XHRcdFx0XHRcdFx0XHRoID0gJHQuaHRtbCgpLFxuXHRcdFx0XHRcdFx0XHRcdFx0biA9IHBhcnNlSW50KGgucmVwbGFjZSgvW14wLTldL2cpLCAxMCksXG5cdFx0XHRcdFx0XHRcdFx0XHRhcCA9IGgucmVwbGFjZSgvW15hcG1dL2lnKSxcblx0XHRcdFx0XHRcdFx0XHRcdGYgPSAkdC5kYXRhKCdmb3InKTsgLy8gbG9zZXMgc2NvcGUsIHNvIHdlIHVzZSBkYXRhLWZvclxuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGYgPT09ICdob3VyJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGFwLmluZGV4T2YoJ3AnKSAhPT0gLTEgJiYgbiA8IDEyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG4gKz0gMTI7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGFwLmluZGV4T2YoJ2EnKSAhPT0gLTEgJiYgbiA9PT0gMTIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuID0gMDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHRwX2luc3QuY29udHJvbC52YWx1ZSh0cF9pbnN0LCB0cF9pbnN0W2YgKyAnX3NsaWRlciddLCBsaXRlbSwgbik7XG5cblx0XHRcdFx0XHRcdFx0XHR0cF9pbnN0Ll9vblRpbWVDaGFuZ2UoKTtcblx0XHRcdFx0XHRcdFx0XHR0cF9pbnN0Ll9vblNlbGVjdEhhbmRsZXIoKTtcblx0XHRcdFx0XHRcdFx0fSkuY3NzKHtcblx0XHRcdFx0XHRcdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogKDEwMCAvIGdyaWRTaXplW2xpdGVtXSkgKyAnJScsXG5cdFx0XHRcdFx0XHRcdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogJ2hpZGRlbidcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSAvLyBlbmQgaWYgZ3JpZCA+IDBcblx0XHRcdFx0fSAvLyBlbmQgZm9yIGxvb3BcblxuXHRcdFx0XHQvLyBBZGQgdGltZXpvbmUgb3B0aW9uc1xuXHRcdFx0XHR0aGlzLnRpbWV6b25lX3NlbGVjdCA9ICR0cC5maW5kKCcudWlfdHBpY2tlcl90aW1lem9uZScpLmFwcGVuZCgnPHNlbGVjdD48L3NlbGVjdD4nKS5maW5kKFwic2VsZWN0XCIpO1xuXHRcdFx0XHQkLmZuLmFwcGVuZC5hcHBseSh0aGlzLnRpbWV6b25lX3NlbGVjdCxcblx0XHRcdFx0JC5tYXAoby50aW1lem9uZUxpc3QsIGZ1bmN0aW9uICh2YWwsIGlkeCkge1xuXHRcdFx0XHRcdHJldHVybiAkKFwiPG9wdGlvbj48L29wdGlvbj5cIikudmFsKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgPyB2YWwudmFsdWUgOiB2YWwpLnRleHQodHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIiA/IHZhbC5sYWJlbCA6IHZhbCk7XG5cdFx0XHRcdH0pKTtcblx0XHRcdFx0aWYgKHR5cGVvZih0aGlzLnRpbWV6b25lKSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLnRpbWV6b25lICE9PSBudWxsICYmIHRoaXMudGltZXpvbmUgIT09IFwiXCIpIHtcblx0XHRcdFx0XHR2YXIgbG9jYWxfdGltZXpvbmUgPSAobmV3IERhdGUodGhpcy5pbnN0LnNlbGVjdGVkWWVhciwgdGhpcy5pbnN0LnNlbGVjdGVkTW9udGgsIHRoaXMuaW5zdC5zZWxlY3RlZERheSwgMTIpKS5nZXRUaW1lem9uZU9mZnNldCgpICogLTE7XG5cdFx0XHRcdFx0aWYgKGxvY2FsX3RpbWV6b25lID09PSB0aGlzLnRpbWV6b25lKSB7XG5cdFx0XHRcdFx0XHRzZWxlY3RMb2NhbFRpbWV6b25lKHRwX2luc3QpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbWV6b25lX3NlbGVjdC52YWwodGhpcy50aW1lem9uZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YodGhpcy5ob3VyKSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLmhvdXIgIT09IG51bGwgJiYgdGhpcy5ob3VyICE9PSBcIlwiKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpbWV6b25lX3NlbGVjdC52YWwoby50aW1lem9uZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGVjdExvY2FsVGltZXpvbmUodHBfaW5zdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudGltZXpvbmVfc2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dHBfaW5zdC5fb25UaW1lQ2hhbmdlKCk7XG5cdFx0XHRcdFx0dHBfaW5zdC5fb25TZWxlY3RIYW5kbGVyKCk7XG5cdFx0XHRcdFx0dHBfaW5zdC5fYWZ0ZXJJbmplY3QoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIEVuZCB0aW1lem9uZSBvcHRpb25zXG5cblx0XHRcdFx0Ly8gaW5qZWN0IHRpbWVwaWNrZXIgaW50byBkYXRlcGlja2VyXG5cdFx0XHRcdHZhciAkYnV0dG9uUGFuZWwgPSAkZHAuZmluZCgnLnVpLWRhdGVwaWNrZXItYnV0dG9ucGFuZScpO1xuXHRcdFx0XHRpZiAoJGJ1dHRvblBhbmVsLmxlbmd0aCkge1xuXHRcdFx0XHRcdCRidXR0b25QYW5lbC5iZWZvcmUoJHRwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZHAuYXBwZW5kKCR0cCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLiR0aW1lT2JqID0gJHRwLmZpbmQoJy51aV90cGlja2VyX3RpbWVfaW5wdXQnKTtcblx0XHRcdFx0dGhpcy4kdGltZU9iai5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHZhciB0aW1lRm9ybWF0ID0gdHBfaW5zdC5pbnN0LnNldHRpbmdzLnRpbWVGb3JtYXQ7XG5cdFx0XHRcdFx0dmFyIHBhcnNlZFRpbWUgPSAkLmRhdGVwaWNrZXIucGFyc2VUaW1lKHRpbWVGb3JtYXQsIHRoaXMudmFsdWUpO1xuXHRcdFx0XHRcdHZhciB1cGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRcdGlmIChwYXJzZWRUaW1lKSB7XG5cdFx0XHRcdFx0XHR1cGRhdGUuc2V0SG91cnMocGFyc2VkVGltZS5ob3VyKTtcblx0XHRcdFx0XHRcdHVwZGF0ZS5zZXRNaW51dGVzKHBhcnNlZFRpbWUubWludXRlKTtcblx0XHRcdFx0XHRcdHVwZGF0ZS5zZXRTZWNvbmRzKHBhcnNlZFRpbWUuc2Vjb25kKTtcblx0XHRcdFx0XHRcdCQuZGF0ZXBpY2tlci5fc2V0VGltZSh0cF9pbnN0Lmluc3QsIHVwZGF0ZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMudmFsdWUgPSB0cF9pbnN0LmZvcm1hdHRlZFRpbWU7XG5cdFx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoJ2JsdXInKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmICh0aGlzLmluc3QgIT09IG51bGwpIHtcblx0XHRcdFx0XHR2YXIgdGltZURlZmluZWQgPSB0aGlzLnRpbWVEZWZpbmVkO1xuXHRcdFx0XHRcdHRoaXMuX29uVGltZUNoYW5nZSgpO1xuXHRcdFx0XHRcdHRoaXMudGltZURlZmluZWQgPSB0aW1lRGVmaW5lZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIHNsaWRlQWNjZXNzIGludGVncmF0aW9uOiBodHRwOi8vdHJlbnRyaWNoYXJkc29uLmNvbS8yMDExLzExLzExL2pxdWVyeS11aS1zbGlkZXJzLWFuZC10b3VjaC1hY2Nlc3NpYmlsaXR5L1xuXHRcdFx0XHRpZiAodGhpcy5fZGVmYXVsdHMuYWRkU2xpZGVyQWNjZXNzKSB7XG5cdFx0XHRcdFx0dmFyIHNsaWRlckFjY2Vzc0FyZ3MgPSB0aGlzLl9kZWZhdWx0cy5zbGlkZXJBY2Nlc3NBcmdzLFxuXHRcdFx0XHRcdFx0cnRsID0gdGhpcy5fZGVmYXVsdHMuaXNSVEw7XG5cdFx0XHRcdFx0c2xpZGVyQWNjZXNzQXJncy5pc1JUTCA9IHJ0bDtcblxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyAvLyBmaXggZm9yIGlubGluZSBtb2RlXG5cdFx0XHRcdFx0XHRpZiAoJHRwLmZpbmQoJy51aS1zbGlkZXItYWNjZXNzJykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdCR0cC5maW5kKCcudWktc2xpZGVyOnZpc2libGUnKS5zbGlkZXJBY2Nlc3Moc2xpZGVyQWNjZXNzQXJncyk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gZml4IGFueSBncmlkcyBzaW5jZSBzbGlkZXJzIGFyZSBzaG9ydGVyXG5cdFx0XHRcdFx0XHRcdHZhciBzbGlkZXJBY2Nlc3NXaWR0aCA9ICR0cC5maW5kKCcudWktc2xpZGVyLWFjY2VzczplcSgwKScpLm91dGVyV2lkdGgodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdGlmIChzbGlkZXJBY2Nlc3NXaWR0aCkge1xuXHRcdFx0XHRcdFx0XHRcdCR0cC5maW5kKCd0YWJsZTp2aXNpYmxlJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgJGcgPSAkKHRoaXMpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbGRXaWR0aCA9ICRnLm91dGVyV2lkdGgoKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0b2xkTWFyZ2luTGVmdCA9ICRnLmNzcyhydGwgPyAnbWFyZ2luUmlnaHQnIDogJ21hcmdpbkxlZnQnKS50b1N0cmluZygpLnJlcGxhY2UoJyUnLCAnJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5ld1dpZHRoID0gb2xkV2lkdGggLSBzbGlkZXJBY2Nlc3NXaWR0aCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmV3TWFyZ2luTGVmdCA9ICgob2xkTWFyZ2luTGVmdCAqIG5ld1dpZHRoKSAvIG9sZFdpZHRoKSArICclJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3NzID0geyB3aWR0aDogbmV3V2lkdGggKyAncHgnLCBtYXJnaW5SaWdodDogJzBweCcsIG1hcmdpbkxlZnQ6ICcwcHgnIH07XG5cdFx0XHRcdFx0XHRcdFx0XHRjc3NbcnRsID8gJ21hcmdpblJpZ2h0JyA6ICdtYXJnaW5MZWZ0J10gPSBuZXdNYXJnaW5MZWZ0O1xuXHRcdFx0XHRcdFx0XHRcdFx0JGcuY3NzKGNzcyk7XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCAxMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gZW5kIHNsaWRlQWNjZXNzIGludGVncmF0aW9uXG5cblx0XHRcdFx0dHBfaW5zdC5fbGltaXRNaW5NYXhEYXRlVGltZSh0aGlzLmluc3QsIHRydWUpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKlxuXHRcdCogVGhpcyBmdW5jdGlvbiB0cmllcyB0byBsaW1pdCB0aGUgYWJpbGl0eSB0byBnbyBvdXRzaWRlIHRoZVxuXHRcdCogbWluL21heCBkYXRlIHJhbmdlXG5cdFx0Ki9cblx0XHRfbGltaXRNaW5NYXhEYXRlVGltZTogZnVuY3Rpb24gKGRwX2luc3QsIGFkanVzdFNsaWRlcnMpIHtcblx0XHRcdHZhciBvID0gdGhpcy5fZGVmYXVsdHMsXG5cdFx0XHRcdGRwX2RhdGUgPSBuZXcgRGF0ZShkcF9pbnN0LnNlbGVjdGVkWWVhciwgZHBfaW5zdC5zZWxlY3RlZE1vbnRoLCBkcF9pbnN0LnNlbGVjdGVkRGF5KTtcblxuXHRcdFx0aWYgKCF0aGlzLl9kZWZhdWx0cy5zaG93VGltZXBpY2tlcikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9IC8vIE5vIHRpbWUgc28gbm90aGluZyB0byBjaGVjayBoZXJlXG5cblx0XHRcdGlmICgkLmRhdGVwaWNrZXIuX2dldChkcF9pbnN0LCAnbWluRGF0ZVRpbWUnKSAhPT0gbnVsbCAmJiAkLmRhdGVwaWNrZXIuX2dldChkcF9pbnN0LCAnbWluRGF0ZVRpbWUnKSAhPT0gdW5kZWZpbmVkICYmIGRwX2RhdGUpIHtcblx0XHRcdFx0dmFyIG1pbkRhdGVUaW1lID0gJC5kYXRlcGlja2VyLl9nZXQoZHBfaW5zdCwgJ21pbkRhdGVUaW1lJyksXG5cdFx0XHRcdFx0bWluRGF0ZVRpbWVEYXRlID0gbmV3IERhdGUobWluRGF0ZVRpbWUuZ2V0RnVsbFllYXIoKSwgbWluRGF0ZVRpbWUuZ2V0TW9udGgoKSwgbWluRGF0ZVRpbWUuZ2V0RGF0ZSgpLCAwLCAwLCAwLCAwKTtcblxuXHRcdFx0XHRpZiAodGhpcy5ob3VyTWluT3JpZ2luYWwgPT09IG51bGwgfHwgdGhpcy5taW51dGVNaW5PcmlnaW5hbCA9PT0gbnVsbCB8fCB0aGlzLnNlY29uZE1pbk9yaWdpbmFsID09PSBudWxsIHx8IHRoaXMubWlsbGlzZWNNaW5PcmlnaW5hbCA9PT0gbnVsbCB8fCB0aGlzLm1pY3Jvc2VjTWluT3JpZ2luYWwgPT09IG51bGwpIHtcblx0XHRcdFx0XHR0aGlzLmhvdXJNaW5PcmlnaW5hbCA9IG8uaG91ck1pbjtcblx0XHRcdFx0XHR0aGlzLm1pbnV0ZU1pbk9yaWdpbmFsID0gby5taW51dGVNaW47XG5cdFx0XHRcdFx0dGhpcy5zZWNvbmRNaW5PcmlnaW5hbCA9IG8uc2Vjb25kTWluO1xuXHRcdFx0XHRcdHRoaXMubWlsbGlzZWNNaW5PcmlnaW5hbCA9IG8ubWlsbGlzZWNNaW47XG5cdFx0XHRcdFx0dGhpcy5taWNyb3NlY01pbk9yaWdpbmFsID0gby5taWNyb3NlY01pbjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChkcF9pbnN0LnNldHRpbmdzLnRpbWVPbmx5IHx8IG1pbkRhdGVUaW1lRGF0ZS5nZXRUaW1lKCkgPT09IGRwX2RhdGUuZ2V0VGltZSgpKSB7XG5cdFx0XHRcdFx0dGhpcy5fZGVmYXVsdHMuaG91ck1pbiA9IG1pbkRhdGVUaW1lLmdldEhvdXJzKCk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuaG91ciA8PSB0aGlzLl9kZWZhdWx0cy5ob3VyTWluKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmhvdXIgPSB0aGlzLl9kZWZhdWx0cy5ob3VyTWluO1xuXHRcdFx0XHRcdFx0dGhpcy5fZGVmYXVsdHMubWludXRlTWluID0gbWluRGF0ZVRpbWUuZ2V0TWludXRlcygpO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMubWludXRlIDw9IHRoaXMuX2RlZmF1bHRzLm1pbnV0ZU1pbikge1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1pbnV0ZSA9IHRoaXMuX2RlZmF1bHRzLm1pbnV0ZU1pbjtcblx0XHRcdFx0XHRcdFx0dGhpcy5fZGVmYXVsdHMuc2Vjb25kTWluID0gbWluRGF0ZVRpbWUuZ2V0U2Vjb25kcygpO1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5zZWNvbmQgPD0gdGhpcy5fZGVmYXVsdHMuc2Vjb25kTWluKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zZWNvbmQgPSB0aGlzLl9kZWZhdWx0cy5zZWNvbmRNaW47XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fZGVmYXVsdHMubWlsbGlzZWNNaW4gPSBtaW5EYXRlVGltZS5nZXRNaWxsaXNlY29uZHMoKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5taWxsaXNlYyA8PSB0aGlzLl9kZWZhdWx0cy5taWxsaXNlY01pbikge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5taWxsaXNlYyA9IHRoaXMuX2RlZmF1bHRzLm1pbGxpc2VjTWluO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5fZGVmYXVsdHMubWljcm9zZWNNaW4gPSBtaW5EYXRlVGltZS5nZXRNaWNyb3NlY29uZHMoKTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMubWljcm9zZWMgPCB0aGlzLl9kZWZhdWx0cy5taWNyb3NlY01pbikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm1pY3Jvc2VjID0gdGhpcy5fZGVmYXVsdHMubWljcm9zZWNNaW47XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLl9kZWZhdWx0cy5taWNyb3NlY01pbiA9IHRoaXMubWljcm9zZWNNaW5PcmlnaW5hbDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fZGVmYXVsdHMubWlsbGlzZWNNaW4gPSB0aGlzLm1pbGxpc2VjTWluT3JpZ2luYWw7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fZGVmYXVsdHMubWljcm9zZWNNaW4gPSB0aGlzLm1pY3Jvc2VjTWluT3JpZ2luYWw7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2RlZmF1bHRzLnNlY29uZE1pbiA9IHRoaXMuc2Vjb25kTWluT3JpZ2luYWw7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2RlZmF1bHRzLm1pbGxpc2VjTWluID0gdGhpcy5taWxsaXNlY01pbk9yaWdpbmFsO1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9kZWZhdWx0cy5taWNyb3NlY01pbiA9IHRoaXMubWljcm9zZWNNaW5PcmlnaW5hbDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5fZGVmYXVsdHMubWludXRlTWluID0gdGhpcy5taW51dGVNaW5PcmlnaW5hbDtcblx0XHRcdFx0XHRcdHRoaXMuX2RlZmF1bHRzLnNlY29uZE1pbiA9IHRoaXMuc2Vjb25kTWluT3JpZ2luYWw7XG5cdFx0XHRcdFx0XHR0aGlzLl9kZWZhdWx0cy5taWxsaXNlY01pbiA9IHRoaXMubWlsbGlzZWNNaW5PcmlnaW5hbDtcblx0XHRcdFx0XHRcdHRoaXMuX2RlZmF1bHRzLm1pY3Jvc2VjTWluID0gdGhpcy5taWNyb3NlY01pbk9yaWdpbmFsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9kZWZhdWx0cy5ob3VyTWluID0gdGhpcy5ob3VyTWluT3JpZ2luYWw7XG5cdFx0XHRcdFx0dGhpcy5fZGVmYXVsdHMubWludXRlTWluID0gdGhpcy5taW51dGVNaW5PcmlnaW5hbDtcblx0XHRcdFx0XHR0aGlzLl9kZWZhdWx0cy5zZWNvbmRNaW4gPSB0aGlzLnNlY29uZE1pbk9yaWdpbmFsO1xuXHRcdFx0XHRcdHRoaXMuX2RlZmF1bHRzLm1pbGxpc2VjTWluID0gdGhpcy5taWxsaXNlY01pbk9yaWdpbmFsO1xuXHRcdFx0XHRcdHRoaXMuX2RlZmF1bHRzLm1pY3Jvc2VjTWluID0gdGhpcy5taWNyb3NlY01pbk9yaWdpbmFsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICgkLmRhdGVwaWNrZXIuX2dldChkcF9pbnN0LCAnbWF4RGF0ZVRpbWUnKSAhPT0gbnVsbCAmJiAkLmRhdGVwaWNrZXIuX2dldChkcF9pbnN0LCAnbWF4RGF0ZVRpbWUnKSAhPT0gdW5kZWZpbmVkICYmIGRwX2RhdGUpIHtcblx0XHRcdFx0dmFyIG1heERhdGVUaW1lID0gJC5kYXRlcGlja2VyLl9nZXQoZHBfaW5zdCwgJ21heERhdGVUaW1lJyksXG5cdFx0XHRcdFx0bWF4RGF0ZVRpbWVEYXRlID0gbmV3IERhdGUobWF4RGF0ZVRpbWUuZ2V0RnVsbFllYXIoKSwgbWF4RGF0ZVRpbWUuZ2V0TW9udGgoKSwgbWF4RGF0ZVRpbWUuZ2V0RGF0ZSgpLCAwLCAwLCAwLCAwKTtcblxuXHRcdFx0XHRpZiAodGhpcy5ob3VyTWF4T3JpZ2luYWwgPT09IG51bGwgfHwgdGhpcy5taW51dGVNYXhPcmlnaW5hbCA9PT0gbnVsbCB8fCB0aGlzLnNlY29uZE1heE9yaWdpbmFsID09PSBudWxsIHx8IHRoaXMubWlsbGlzZWNNYXhPcmlnaW5hbCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHRoaXMuaG91ck1heE9yaWdpbmFsID0gby5ob3VyTWF4O1xuXHRcdFx0XHRcdHRoaXMubWludXRlTWF4T3JpZ2luYWwgPSBvLm1pbnV0ZU1heDtcblx0XHRcdFx0XHR0aGlzLnNlY29uZE1heE9yaWdpbmFsID0gby5zZWNvbmRNYXg7XG5cdFx0XHRcdFx0dGhpcy5taWxsaXNlY01heE9yaWdpbmFsID0gby5taWxsaXNlY01heDtcblx0XHRcdFx0XHR0aGlzLm1pY3Jvc2VjTWF4T3JpZ2luYWwgPSBvLm1pY3Jvc2VjTWF4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGRwX2luc3Quc2V0dGluZ3MudGltZU9ubHkgfHwgbWF4RGF0ZVRpbWVEYXRlLmdldFRpbWUoKSA9PT0gZHBfZGF0ZS5nZXRUaW1lKCkpIHtcblx0XHRcdFx0XHR0aGlzLl9kZWZhdWx0cy5ob3VyTWF4ID0gbWF4RGF0ZVRpbWUuZ2V0SG91cnMoKTtcblx0XHRcdFx0XHRpZiAodGhpcy5ob3VyID49IHRoaXMuX2RlZmF1bHRzLmhvdXJNYXgpIHtcblx0XHRcdFx0XHRcdHRoaXMuaG91ciA9IHRoaXMuX2RlZmF1bHRzLmhvdXJNYXg7XG5cdFx0XHRcdFx0XHR0aGlzLl9kZWZhdWx0cy5taW51dGVNYXggPSBtYXhEYXRlVGltZS5nZXRNaW51dGVzKCk7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5taW51dGUgPj0gdGhpcy5fZGVmYXVsdHMubWludXRlTWF4KSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMubWludXRlID0gdGhpcy5fZGVmYXVsdHMubWludXRlTWF4O1xuXHRcdFx0XHRcdFx0XHR0aGlzLl9kZWZhdWx0cy5zZWNvbmRNYXggPSBtYXhEYXRlVGltZS5nZXRTZWNvbmRzKCk7XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnNlY29uZCA+PSB0aGlzLl9kZWZhdWx0cy5zZWNvbmRNYXgpIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNlY29uZCA9IHRoaXMuX2RlZmF1bHRzLnNlY29uZE1heDtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9kZWZhdWx0cy5taWxsaXNlY01heCA9IG1heERhdGVUaW1lLmdldE1pbGxpc2Vjb25kcygpO1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLm1pbGxpc2VjID49IHRoaXMuX2RlZmF1bHRzLm1pbGxpc2VjTWF4KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm1pbGxpc2VjID0gdGhpcy5fZGVmYXVsdHMubWlsbGlzZWNNYXg7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLl9kZWZhdWx0cy5taWNyb3NlY01heCA9IG1heERhdGVUaW1lLmdldE1pY3Jvc2Vjb25kcygpO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5taWNyb3NlYyA+IHRoaXMuX2RlZmF1bHRzLm1pY3Jvc2VjTWF4KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubWljcm9zZWMgPSB0aGlzLl9kZWZhdWx0cy5taWNyb3NlY01heDtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuX2RlZmF1bHRzLm1pY3Jvc2VjTWF4ID0gdGhpcy5taWNyb3NlY01heE9yaWdpbmFsO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9kZWZhdWx0cy5taWxsaXNlY01heCA9IHRoaXMubWlsbGlzZWNNYXhPcmlnaW5hbDtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9kZWZhdWx0cy5taWNyb3NlY01heCA9IHRoaXMubWljcm9zZWNNYXhPcmlnaW5hbDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5fZGVmYXVsdHMuc2Vjb25kTWF4ID0gdGhpcy5zZWNvbmRNYXhPcmlnaW5hbDtcblx0XHRcdFx0XHRcdFx0dGhpcy5fZGVmYXVsdHMubWlsbGlzZWNNYXggPSB0aGlzLm1pbGxpc2VjTWF4T3JpZ2luYWw7XG5cdFx0XHRcdFx0XHRcdHRoaXMuX2RlZmF1bHRzLm1pY3Jvc2VjTWF4ID0gdGhpcy5taWNyb3NlY01heE9yaWdpbmFsO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9kZWZhdWx0cy5taW51dGVNYXggPSB0aGlzLm1pbnV0ZU1heE9yaWdpbmFsO1xuXHRcdFx0XHRcdFx0dGhpcy5fZGVmYXVsdHMuc2Vjb25kTWF4ID0gdGhpcy5zZWNvbmRNYXhPcmlnaW5hbDtcblx0XHRcdFx0XHRcdHRoaXMuX2RlZmF1bHRzLm1pbGxpc2VjTWF4ID0gdGhpcy5taWxsaXNlY01heE9yaWdpbmFsO1xuXHRcdFx0XHRcdFx0dGhpcy5fZGVmYXVsdHMubWljcm9zZWNNYXggPSB0aGlzLm1pY3Jvc2VjTWF4T3JpZ2luYWw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuX2RlZmF1bHRzLmhvdXJNYXggPSB0aGlzLmhvdXJNYXhPcmlnaW5hbDtcblx0XHRcdFx0XHR0aGlzLl9kZWZhdWx0cy5taW51dGVNYXggPSB0aGlzLm1pbnV0ZU1heE9yaWdpbmFsO1xuXHRcdFx0XHRcdHRoaXMuX2RlZmF1bHRzLnNlY29uZE1heCA9IHRoaXMuc2Vjb25kTWF4T3JpZ2luYWw7XG5cdFx0XHRcdFx0dGhpcy5fZGVmYXVsdHMubWlsbGlzZWNNYXggPSB0aGlzLm1pbGxpc2VjTWF4T3JpZ2luYWw7XG5cdFx0XHRcdFx0dGhpcy5fZGVmYXVsdHMubWljcm9zZWNNYXggPSB0aGlzLm1pY3Jvc2VjTWF4T3JpZ2luYWw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGRwX2luc3Quc2V0dGluZ3MubWluVGltZSE9PW51bGwpIHtcblx0XHRcdFx0dmFyIHRlbXBNaW5UaW1lPW5ldyBEYXRlKFwiMDEvMDEvMTk3MCBcIiArIGRwX2luc3Quc2V0dGluZ3MubWluVGltZSk7XG5cdFx0XHRcdGlmICh0aGlzLmhvdXI8dGVtcE1pblRpbWUuZ2V0SG91cnMoKSkge1xuXHRcdFx0XHRcdHRoaXMuaG91cj10aGlzLl9kZWZhdWx0cy5ob3VyTWluPXRlbXBNaW5UaW1lLmdldEhvdXJzKCk7XG5cdFx0XHRcdFx0dGhpcy5taW51dGU9dGhpcy5fZGVmYXVsdHMubWludXRlTWluPXRlbXBNaW5UaW1lLmdldE1pbnV0ZXMoKTtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmhvdXI9PT10ZW1wTWluVGltZS5nZXRIb3VycygpICYmIHRoaXMubWludXRlPHRlbXBNaW5UaW1lLmdldE1pbnV0ZXMoKSkge1xuXHRcdFx0XHRcdHRoaXMubWludXRlPXRoaXMuX2RlZmF1bHRzLm1pbnV0ZU1pbj10ZW1wTWluVGltZS5nZXRNaW51dGVzKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX2RlZmF1bHRzLmhvdXJNaW48dGVtcE1pblRpbWUuZ2V0SG91cnMoKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5fZGVmYXVsdHMuaG91ck1pbj10ZW1wTWluVGltZS5nZXRIb3VycygpO1xuXHRcdFx0XHRcdFx0dGhpcy5fZGVmYXVsdHMubWludXRlTWluPXRlbXBNaW5UaW1lLmdldE1pbnV0ZXMoKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuX2RlZmF1bHRzLmhvdXJNaW49PT10ZW1wTWluVGltZS5nZXRIb3VycygpPT09dGhpcy5ob3VyICYmIHRoaXMuX2RlZmF1bHRzLm1pbnV0ZU1pbjx0ZW1wTWluVGltZS5nZXRNaW51dGVzKCkpIHtcblx0XHRcdFx0XHRcdHRoaXMuX2RlZmF1bHRzLm1pbnV0ZU1pbj10ZW1wTWluVGltZS5nZXRNaW51dGVzKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuX2RlZmF1bHRzLm1pbnV0ZU1pbj0wO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZHBfaW5zdC5zZXR0aW5ncy5tYXhUaW1lIT09bnVsbCkge1xuXHRcdFx0XHR2YXIgdGVtcE1heFRpbWU9bmV3IERhdGUoXCIwMS8wMS8xOTcwIFwiICsgZHBfaW5zdC5zZXR0aW5ncy5tYXhUaW1lKTtcblx0XHRcdFx0aWYgKHRoaXMuaG91cj50ZW1wTWF4VGltZS5nZXRIb3VycygpKSB7XG5cdFx0XHRcdFx0dGhpcy5ob3VyPXRoaXMuX2RlZmF1bHRzLmhvdXJNYXg9dGVtcE1heFRpbWUuZ2V0SG91cnMoKTtcblx0XHRcdFx0XHR0aGlzLm1pbnV0ZT10aGlzLl9kZWZhdWx0cy5taW51dGVNYXg9dGVtcE1heFRpbWUuZ2V0TWludXRlcygpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuaG91cj09PXRlbXBNYXhUaW1lLmdldEhvdXJzKCkgJiYgdGhpcy5taW51dGU+dGVtcE1heFRpbWUuZ2V0TWludXRlcygpKSB7XG5cdFx0XHRcdFx0dGhpcy5taW51dGU9dGhpcy5fZGVmYXVsdHMubWludXRlTWF4PXRlbXBNYXhUaW1lLmdldE1pbnV0ZXMoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAodGhpcy5fZGVmYXVsdHMuaG91ck1heD50ZW1wTWF4VGltZS5nZXRIb3VycygpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLl9kZWZhdWx0cy5ob3VyTWF4PXRlbXBNYXhUaW1lLmdldEhvdXJzKCk7XG5cdFx0XHRcdFx0XHR0aGlzLl9kZWZhdWx0cy5taW51dGVNYXg9dGVtcE1heFRpbWUuZ2V0TWludXRlcygpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5fZGVmYXVsdHMuaG91ck1heD09PXRlbXBNYXhUaW1lLmdldEhvdXJzKCk9PT10aGlzLmhvdXIgJiYgdGhpcy5fZGVmYXVsdHMubWludXRlTWF4PnRlbXBNYXhUaW1lLmdldE1pbnV0ZXMoKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5fZGVmYXVsdHMubWludXRlTWF4PXRlbXBNYXhUaW1lLmdldE1pbnV0ZXMoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5fZGVmYXVsdHMubWludXRlTWF4PTU5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYWRqdXN0U2xpZGVycyAhPT0gdW5kZWZpbmVkICYmIGFkanVzdFNsaWRlcnMgPT09IHRydWUpIHtcblx0XHRcdFx0dmFyIGhvdXJNYXggPSBwYXJzZUludCgodGhpcy5fZGVmYXVsdHMuaG91ck1heCAtICgodGhpcy5fZGVmYXVsdHMuaG91ck1heCAtIHRoaXMuX2RlZmF1bHRzLmhvdXJNaW4pICUgdGhpcy5fZGVmYXVsdHMuc3RlcEhvdXIpKSwgMTApLFxuXHRcdFx0XHRcdG1pbk1heCA9IHBhcnNlSW50KCh0aGlzLl9kZWZhdWx0cy5taW51dGVNYXggLSAoKHRoaXMuX2RlZmF1bHRzLm1pbnV0ZU1heCAtIHRoaXMuX2RlZmF1bHRzLm1pbnV0ZU1pbikgJSB0aGlzLl9kZWZhdWx0cy5zdGVwTWludXRlKSksIDEwKSxcblx0XHRcdFx0XHRzZWNNYXggPSBwYXJzZUludCgodGhpcy5fZGVmYXVsdHMuc2Vjb25kTWF4IC0gKCh0aGlzLl9kZWZhdWx0cy5zZWNvbmRNYXggLSB0aGlzLl9kZWZhdWx0cy5zZWNvbmRNaW4pICUgdGhpcy5fZGVmYXVsdHMuc3RlcFNlY29uZCkpLCAxMCksXG5cdFx0XHRcdFx0bWlsbGlzZWNNYXggPSBwYXJzZUludCgodGhpcy5fZGVmYXVsdHMubWlsbGlzZWNNYXggLSAoKHRoaXMuX2RlZmF1bHRzLm1pbGxpc2VjTWF4IC0gdGhpcy5fZGVmYXVsdHMubWlsbGlzZWNNaW4pICUgdGhpcy5fZGVmYXVsdHMuc3RlcE1pbGxpc2VjKSksIDEwKSxcblx0XHRcdFx0XHRtaWNyb3NlY01heCA9IHBhcnNlSW50KCh0aGlzLl9kZWZhdWx0cy5taWNyb3NlY01heCAtICgodGhpcy5fZGVmYXVsdHMubWljcm9zZWNNYXggLSB0aGlzLl9kZWZhdWx0cy5taWNyb3NlY01pbikgJSB0aGlzLl9kZWZhdWx0cy5zdGVwTWljcm9zZWMpKSwgMTApO1xuXG5cdFx0XHRcdGlmICh0aGlzLmhvdXJfc2xpZGVyKSB7XG5cdFx0XHRcdFx0dGhpcy5jb250cm9sLm9wdGlvbnModGhpcywgdGhpcy5ob3VyX3NsaWRlciwgJ2hvdXInLCB7IG1pbjogdGhpcy5fZGVmYXVsdHMuaG91ck1pbiwgbWF4OiBob3VyTWF4LCBzdGVwOiB0aGlzLl9kZWZhdWx0cy5zdGVwSG91ciB9KTtcblx0XHRcdFx0XHR0aGlzLmNvbnRyb2wudmFsdWUodGhpcywgdGhpcy5ob3VyX3NsaWRlciwgJ2hvdXInLCB0aGlzLmhvdXIgLSAodGhpcy5ob3VyICUgdGhpcy5fZGVmYXVsdHMuc3RlcEhvdXIpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5taW51dGVfc2xpZGVyKSB7XG5cdFx0XHRcdFx0dGhpcy5jb250cm9sLm9wdGlvbnModGhpcywgdGhpcy5taW51dGVfc2xpZGVyLCAnbWludXRlJywgeyBtaW46IHRoaXMuX2RlZmF1bHRzLm1pbnV0ZU1pbiwgbWF4OiBtaW5NYXgsIHN0ZXA6IHRoaXMuX2RlZmF1bHRzLnN0ZXBNaW51dGUgfSk7XG5cdFx0XHRcdFx0dGhpcy5jb250cm9sLnZhbHVlKHRoaXMsIHRoaXMubWludXRlX3NsaWRlciwgJ21pbnV0ZScsIHRoaXMubWludXRlIC0gKHRoaXMubWludXRlICUgdGhpcy5fZGVmYXVsdHMuc3RlcE1pbnV0ZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLnNlY29uZF9zbGlkZXIpIHtcblx0XHRcdFx0XHR0aGlzLmNvbnRyb2wub3B0aW9ucyh0aGlzLCB0aGlzLnNlY29uZF9zbGlkZXIsICdzZWNvbmQnLCB7IG1pbjogdGhpcy5fZGVmYXVsdHMuc2Vjb25kTWluLCBtYXg6IHNlY01heCwgc3RlcDogdGhpcy5fZGVmYXVsdHMuc3RlcFNlY29uZCB9KTtcblx0XHRcdFx0XHR0aGlzLmNvbnRyb2wudmFsdWUodGhpcywgdGhpcy5zZWNvbmRfc2xpZGVyLCAnc2Vjb25kJywgdGhpcy5zZWNvbmQgLSAodGhpcy5zZWNvbmQgJSB0aGlzLl9kZWZhdWx0cy5zdGVwU2Vjb25kKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMubWlsbGlzZWNfc2xpZGVyKSB7XG5cdFx0XHRcdFx0dGhpcy5jb250cm9sLm9wdGlvbnModGhpcywgdGhpcy5taWxsaXNlY19zbGlkZXIsICdtaWxsaXNlYycsIHsgbWluOiB0aGlzLl9kZWZhdWx0cy5taWxsaXNlY01pbiwgbWF4OiBtaWxsaXNlY01heCwgc3RlcDogdGhpcy5fZGVmYXVsdHMuc3RlcE1pbGxpc2VjIH0pO1xuXHRcdFx0XHRcdHRoaXMuY29udHJvbC52YWx1ZSh0aGlzLCB0aGlzLm1pbGxpc2VjX3NsaWRlciwgJ21pbGxpc2VjJywgdGhpcy5taWxsaXNlYyAtICh0aGlzLm1pbGxpc2VjICUgdGhpcy5fZGVmYXVsdHMuc3RlcE1pbGxpc2VjKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMubWljcm9zZWNfc2xpZGVyKSB7XG5cdFx0XHRcdFx0dGhpcy5jb250cm9sLm9wdGlvbnModGhpcywgdGhpcy5taWNyb3NlY19zbGlkZXIsICdtaWNyb3NlYycsIHsgbWluOiB0aGlzLl9kZWZhdWx0cy5taWNyb3NlY01pbiwgbWF4OiBtaWNyb3NlY01heCwgc3RlcDogdGhpcy5fZGVmYXVsdHMuc3RlcE1pY3Jvc2VjIH0pO1xuXHRcdFx0XHRcdHRoaXMuY29udHJvbC52YWx1ZSh0aGlzLCB0aGlzLm1pY3Jvc2VjX3NsaWRlciwgJ21pY3Jvc2VjJywgdGhpcy5taWNyb3NlYyAtICh0aGlzLm1pY3Jvc2VjICUgdGhpcy5fZGVmYXVsdHMuc3RlcE1pY3Jvc2VjKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH0sXG5cblx0XHQvKlxuXHRcdCogd2hlbiBhIHNsaWRlciBtb3Zlcywgc2V0IHRoZSBpbnRlcm5hbCB0aW1lLi4uXG5cdFx0KiBvbiB0aW1lIGNoYW5nZSBpcyBhbHNvIGNhbGxlZCB3aGVuIHRoZSB0aW1lIGlzIHVwZGF0ZWQgaW4gdGhlIHRleHQgZmllbGRcblx0XHQqL1xuXHRcdF9vblRpbWVDaGFuZ2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICghdGhpcy5fZGVmYXVsdHMuc2hvd1RpbWVwaWNrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGhvdXIgPSAodGhpcy5ob3VyX3NsaWRlcikgPyB0aGlzLmNvbnRyb2wudmFsdWUodGhpcywgdGhpcy5ob3VyX3NsaWRlciwgJ2hvdXInKSA6IGZhbHNlLFxuXHRcdFx0XHRtaW51dGUgPSAodGhpcy5taW51dGVfc2xpZGVyKSA/IHRoaXMuY29udHJvbC52YWx1ZSh0aGlzLCB0aGlzLm1pbnV0ZV9zbGlkZXIsICdtaW51dGUnKSA6IGZhbHNlLFxuXHRcdFx0XHRzZWNvbmQgPSAodGhpcy5zZWNvbmRfc2xpZGVyKSA/IHRoaXMuY29udHJvbC52YWx1ZSh0aGlzLCB0aGlzLnNlY29uZF9zbGlkZXIsICdzZWNvbmQnKSA6IGZhbHNlLFxuXHRcdFx0XHRtaWxsaXNlYyA9ICh0aGlzLm1pbGxpc2VjX3NsaWRlcikgPyB0aGlzLmNvbnRyb2wudmFsdWUodGhpcywgdGhpcy5taWxsaXNlY19zbGlkZXIsICdtaWxsaXNlYycpIDogZmFsc2UsXG5cdFx0XHRcdG1pY3Jvc2VjID0gKHRoaXMubWljcm9zZWNfc2xpZGVyKSA/IHRoaXMuY29udHJvbC52YWx1ZSh0aGlzLCB0aGlzLm1pY3Jvc2VjX3NsaWRlciwgJ21pY3Jvc2VjJykgOiBmYWxzZSxcblx0XHRcdFx0dGltZXpvbmUgPSAodGhpcy50aW1lem9uZV9zZWxlY3QpID8gdGhpcy50aW1lem9uZV9zZWxlY3QudmFsKCkgOiBmYWxzZSxcblx0XHRcdFx0byA9IHRoaXMuX2RlZmF1bHRzLFxuXHRcdFx0XHRwaWNrZXJUaW1lRm9ybWF0ID0gby5waWNrZXJUaW1lRm9ybWF0IHx8IG8udGltZUZvcm1hdCxcblx0XHRcdFx0cGlja2VyVGltZVN1ZmZpeCA9IG8ucGlja2VyVGltZVN1ZmZpeCB8fCBvLnRpbWVTdWZmaXg7XG5cblx0XHRcdGlmICh0eXBlb2YoaG91cikgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGhvdXIgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YobWludXRlKSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0bWludXRlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mKHNlY29uZCkgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdHNlY29uZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZihtaWxsaXNlYykgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdG1pbGxpc2VjID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mKG1pY3Jvc2VjKSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0bWljcm9zZWMgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YodGltZXpvbmUpID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHR0aW1lem9uZSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaG91ciAhPT0gZmFsc2UpIHtcblx0XHRcdFx0aG91ciA9IHBhcnNlSW50KGhvdXIsIDEwKTtcblx0XHRcdH1cblx0XHRcdGlmIChtaW51dGUgIT09IGZhbHNlKSB7XG5cdFx0XHRcdG1pbnV0ZSA9IHBhcnNlSW50KG1pbnV0ZSwgMTApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNlY29uZCAhPT0gZmFsc2UpIHtcblx0XHRcdFx0c2Vjb25kID0gcGFyc2VJbnQoc2Vjb25kLCAxMCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAobWlsbGlzZWMgIT09IGZhbHNlKSB7XG5cdFx0XHRcdG1pbGxpc2VjID0gcGFyc2VJbnQobWlsbGlzZWMsIDEwKTtcblx0XHRcdH1cblx0XHRcdGlmIChtaWNyb3NlYyAhPT0gZmFsc2UpIHtcblx0XHRcdFx0bWljcm9zZWMgPSBwYXJzZUludChtaWNyb3NlYywgMTApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRpbWV6b25lICE9PSBmYWxzZSkge1xuXHRcdFx0XHR0aW1lem9uZSA9IHRpbWV6b25lLnRvU3RyaW5nKCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBhbXBtID0gb1tob3VyIDwgMTIgPyAnYW1OYW1lcycgOiAncG1OYW1lcyddWzBdO1xuXG5cdFx0XHQvLyBJZiB0aGUgdXBkYXRlIHdhcyBkb25lIGluIHRoZSBpbnB1dCBmaWVsZCwgdGhlIGlucHV0IGZpZWxkIHNob3VsZCBub3QgYmUgdXBkYXRlZC5cblx0XHRcdC8vIElmIHRoZSB1cGRhdGUgd2FzIGRvbmUgdXNpbmcgdGhlIHNsaWRlcnMsIHVwZGF0ZSB0aGUgaW5wdXQgZmllbGQuXG5cdFx0XHR2YXIgaGFzQ2hhbmdlZCA9IChcblx0XHRcdFx0XHRcdGhvdXIgIT09IHBhcnNlSW50KHRoaXMuaG91ciwxMCkgfHwgLy8gc2xpZGVycyBzaG91bGQgYWxsIGJlIG51bWVyaWNcblx0XHRcdFx0XHRcdG1pbnV0ZSAhPT0gcGFyc2VJbnQodGhpcy5taW51dGUsMTApIHx8XG5cdFx0XHRcdFx0XHRzZWNvbmQgIT09IHBhcnNlSW50KHRoaXMuc2Vjb25kLDEwKSB8fFxuXHRcdFx0XHRcdFx0bWlsbGlzZWMgIT09IHBhcnNlSW50KHRoaXMubWlsbGlzZWMsMTApIHx8XG5cdFx0XHRcdFx0XHRtaWNyb3NlYyAhPT0gcGFyc2VJbnQodGhpcy5taWNyb3NlYywxMCkgfHxcblx0XHRcdFx0XHRcdCh0aGlzLmFtcG0ubGVuZ3RoID4gMCAmJiAoaG91ciA8IDEyKSAhPT0gKCQuaW5BcnJheSh0aGlzLmFtcG0udG9VcHBlckNhc2UoKSwgdGhpcy5hbU5hbWVzKSAhPT0gLTEpKSB8fFxuXHRcdFx0XHRcdFx0KHRoaXMudGltZXpvbmUgIT09IG51bGwgJiYgdGltZXpvbmUgIT09IHRoaXMudGltZXpvbmUudG9TdHJpbmcoKSkgLy8gY291bGQgYmUgbnVtZXJpYyBvciBcIkVTVFwiIGZvcm1hdCwgc28gdXNlIHRvU3RyaW5nKClcblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRpZiAoaGFzQ2hhbmdlZCkge1xuXG5cdFx0XHRcdGlmIChob3VyICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRoaXMuaG91ciA9IGhvdXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG1pbnV0ZSAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0aGlzLm1pbnV0ZSA9IG1pbnV0ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc2Vjb25kICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRoaXMuc2Vjb25kID0gc2Vjb25kO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChtaWxsaXNlYyAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0aGlzLm1pbGxpc2VjID0gbWlsbGlzZWM7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG1pY3Jvc2VjICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRoaXMubWljcm9zZWMgPSBtaWNyb3NlYztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGltZXpvbmUgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0dGhpcy50aW1lem9uZSA9IHRpbWV6b25lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCF0aGlzLmluc3QpIHtcblx0XHRcdFx0XHR0aGlzLmluc3QgPSAkLmRhdGVwaWNrZXIuX2dldEluc3QodGhpcy4kaW5wdXRbMF0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5fbGltaXRNaW5NYXhEYXRlVGltZSh0aGlzLmluc3QsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuc3VwcG9ydC5hbXBtKSB7XG5cdFx0XHRcdHRoaXMuYW1wbSA9IGFtcG07XG5cdFx0XHR9XG5cblx0XHRcdC8vIFVwZGF0ZXMgdGhlIHRpbWUgd2l0aGluIHRoZSB0aW1lcGlja2VyXG5cdFx0XHR0aGlzLmZvcm1hdHRlZFRpbWUgPSAkLmRhdGVwaWNrZXIuZm9ybWF0VGltZShvLnRpbWVGb3JtYXQsIHRoaXMsIG8pO1xuXHRcdFx0aWYgKHRoaXMuJHRpbWVPYmopIHtcblx0XHRcdFx0aWYgKHBpY2tlclRpbWVGb3JtYXQgPT09IG8udGltZUZvcm1hdCkge1xuXHRcdFx0XHRcdHRoaXMuJHRpbWVPYmoudmFsKHRoaXMuZm9ybWF0dGVkVGltZSArIHBpY2tlclRpbWVTdWZmaXgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuJHRpbWVPYmoudmFsKCQuZGF0ZXBpY2tlci5mb3JtYXRUaW1lKHBpY2tlclRpbWVGb3JtYXQsIHRoaXMsIG8pICsgcGlja2VyVGltZVN1ZmZpeCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuJHRpbWVPYmpbMF0uc2V0U2VsZWN0aW9uUmFuZ2UpIHtcblx0XHRcdFx0XHR2YXIgc1BvcyA9IHRoaXMuJHRpbWVPYmpbMF0uc2VsZWN0aW9uU3RhcnQ7XG5cdFx0XHRcdFx0dmFyIGVQb3MgPSB0aGlzLiR0aW1lT2JqWzBdLnNlbGVjdGlvbkVuZDtcblx0XHRcdFx0XHQvL3RoaXMuJHRpbWVPYmpbMF0uc2V0U2VsZWN0aW9uUmFuZ2Uoc1BvcywgZVBvcyk7IC8vIFByaW1lRmFjZXMgZ2l0aHViIGlzc3VlOyAjMTQyMVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMudGltZURlZmluZWQgPSB0cnVlO1xuXHRcdFx0aWYgKGhhc0NoYW5nZWQpIHtcblx0XHRcdFx0dGhpcy5fdXBkYXRlRGF0ZVRpbWUoKTtcblx0XHRcdFx0Ly90aGlzLiRpbnB1dC50cmlnZ2VyKCdmb2N1cycpOyAvLyBtYXkgYXV0b21hdGljYWxseSBvcGVuIHRoZSBwaWNrZXIgb24gc2V0RGF0ZVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKlxuXHRcdCogY2FsbCBjdXN0b20gb25TZWxlY3QuXG5cdFx0KiBiaW5kIHRvIHNsaWRlcnMgc2xpZGVzdG9wLCBhbmQgZ3JpZCBjbGljay5cblx0XHQqL1xuXHRcdF9vblNlbGVjdEhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBvblNlbGVjdCA9IHRoaXMuX2RlZmF1bHRzLm9uU2VsZWN0IHx8IHRoaXMuaW5zdC5zZXR0aW5ncy5vblNlbGVjdDtcblx0XHRcdHZhciBpbnB1dEVsID0gdGhpcy4kaW5wdXQgPyB0aGlzLiRpbnB1dFswXSA6IG51bGw7XG5cdFx0XHRpZiAob25TZWxlY3QgJiYgaW5wdXRFbCkge1xuXHRcdFx0XHRvblNlbGVjdC5hcHBseShpbnB1dEVsLCBbdGhpcy5mb3JtYXR0ZWREYXRlVGltZSwgdGhpc10pO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKlxuXHRcdCogdXBkYXRlIG91ciBpbnB1dCB3aXRoIHRoZSBuZXcgZGF0ZSB0aW1lLi5cblx0XHQqL1xuXHRcdF91cGRhdGVEYXRlVGltZTogZnVuY3Rpb24gKGRwX2luc3QpIHtcblx0XHRcdGRwX2luc3QgPSB0aGlzLmluc3QgfHwgZHBfaW5zdDtcblx0XHRcdHZhciBkdFRtcCA9IChkcF9pbnN0LmN1cnJlbnRZZWFyID4gMD9cblx0XHRcdFx0XHRcdFx0bmV3IERhdGUoZHBfaW5zdC5jdXJyZW50WWVhciwgZHBfaW5zdC5jdXJyZW50TW9udGgsIGRwX2luc3QuY3VycmVudERheSkgOlxuXHRcdFx0XHRcdFx0XHRuZXcgRGF0ZShkcF9pbnN0LnNlbGVjdGVkWWVhciwgZHBfaW5zdC5zZWxlY3RlZE1vbnRoLCBkcF9pbnN0LnNlbGVjdGVkRGF5KSksXG5cdFx0XHRcdGR0ID0gJC5kYXRlcGlja2VyLl9kYXlsaWdodFNhdmluZ0FkanVzdChkdFRtcCksXG5cdFx0XHRcdC8vZHQgPSAkLmRhdGVwaWNrZXIuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KG5ldyBEYXRlKGRwX2luc3Quc2VsZWN0ZWRZZWFyLCBkcF9pbnN0LnNlbGVjdGVkTW9udGgsIGRwX2luc3Quc2VsZWN0ZWREYXkpKSxcblx0XHRcdFx0Ly9kdCA9ICQuZGF0ZXBpY2tlci5fZGF5bGlnaHRTYXZpbmdBZGp1c3QobmV3IERhdGUoZHBfaW5zdC5jdXJyZW50WWVhciwgZHBfaW5zdC5jdXJyZW50TW9udGgsIGRwX2luc3QuY3VycmVudERheSkpLFxuXHRcdFx0XHRkYXRlRm10ID0gJC5kYXRlcGlja2VyLl9nZXQoZHBfaW5zdCwgJ2RhdGVGb3JtYXQnKSxcblx0XHRcdFx0Zm9ybWF0Q2ZnID0gJC5kYXRlcGlja2VyLl9nZXRGb3JtYXRDb25maWcoZHBfaW5zdCksXG5cdFx0XHRcdHRpbWVBdmFpbGFibGUgPSBkdCAhPT0gbnVsbCAmJiB0aGlzLnRpbWVEZWZpbmVkO1xuXHRcdFx0dGhpcy5mb3JtYXR0ZWREYXRlID0gJC5kYXRlcGlja2VyLmZvcm1hdERhdGUoZGF0ZUZtdCwgKGR0ID09PSBudWxsID8gbmV3IERhdGUoKSA6IGR0KSwgZm9ybWF0Q2ZnKTtcblx0XHRcdHZhciBmb3JtYXR0ZWREYXRlVGltZSA9IHRoaXMuZm9ybWF0dGVkRGF0ZTtcblxuXHRcdFx0Ly8gaWYgYSBzbGlkZXIgd2FzIGNoYW5nZWQgYnV0IGRhdGVwaWNrZXIgZG9lc24ndCBoYXZlIGEgdmFsdWUgeWV0LCBzZXQgaXRcblx0XHRcdGlmIChkcF9pbnN0Lmxhc3RWYWwgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBkcF9pbnN0LmN1cnJlbnRZZWFyID0gZHBfaW5zdC5zZWxlY3RlZFllYXI7XG4gICAgICAgICAgICAgICAgZHBfaW5zdC5jdXJyZW50TW9udGggPSBkcF9pbnN0LnNlbGVjdGVkTW9udGg7XG4gICAgICAgICAgICAgICAgZHBfaW5zdC5jdXJyZW50RGF5ID0gZHBfaW5zdC5zZWxlY3RlZERheTtcbiAgICAgICAgICAgIH1cblxuXHRcdFx0Lypcblx0XHRcdCogcmVtb3ZlIGZvbGxvd2luZyBsaW5lcyB0byBmb3JjZSBldmVyeSBjaGFuZ2VzIGluIGRhdGUgcGlja2VyIHRvIGNoYW5nZSB0aGUgaW5wdXQgdmFsdWVcblx0XHRcdCogQnVnIGRlc2NyaXB0aW9uczogd2hlbiBhbiBpbnB1dCBmaWVsZCBoYXMgYSBkZWZhdWx0IHZhbHVlLCBhbmQgY2xpY2sgb24gdGhlIGZpZWxkIHRvIHBvcCB1cCB0aGUgZGF0ZSBwaWNrZXIuXG5cdFx0XHQqIElmIHRoZSB1c2VyIG1hbnVhbGx5IGVtcHR5IHRoZSB2YWx1ZSBpbiB0aGUgaW5wdXQgZmllbGQsIHRoZSBkYXRlIHBpY2tlciB3aWxsIG5ldmVyIGNoYW5nZSBzZWxlY3RlZCB2YWx1ZS5cblx0XHRcdCovXG5cdFx0XHQvL2lmIChkcF9pbnN0Lmxhc3RWYWwgIT09IHVuZGVmaW5lZCAmJiAoZHBfaW5zdC5sYXN0VmFsLmxlbmd0aCA+IDAgJiYgdGhpcy4kaW5wdXQudmFsKCkubGVuZ3RoID09PSAwKSkge1xuXHRcdFx0Ly9cdHJldHVybjtcblx0XHRcdC8vfVxuXG5cdFx0XHRpZiAodGhpcy5fZGVmYXVsdHMudGltZU9ubHkgPT09IHRydWUgJiYgdGhpcy5fZGVmYXVsdHMudGltZU9ubHlTaG93RGF0ZSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0Zm9ybWF0dGVkRGF0ZVRpbWUgPSB0aGlzLmZvcm1hdHRlZFRpbWU7XG5cdFx0XHR9IGVsc2UgaWYgKCh0aGlzLl9kZWZhdWx0cy50aW1lT25seSAhPT0gdHJ1ZSAmJiAodGhpcy5fZGVmYXVsdHMuYWx3YXlzU2V0VGltZSB8fCB0aW1lQXZhaWxhYmxlKSkgfHwgKHRoaXMuX2RlZmF1bHRzLnRpbWVPbmx5ID09PSB0cnVlICYmIHRoaXMuX2RlZmF1bHRzLnRpbWVPbmx5U2hvd0RhdGUgPT09IHRydWUpKSB7XG5cdFx0XHRcdGZvcm1hdHRlZERhdGVUaW1lICs9IHRoaXMuX2RlZmF1bHRzLnNlcGFyYXRvciArIHRoaXMuZm9ybWF0dGVkVGltZSArIHRoaXMuX2RlZmF1bHRzLnRpbWVTdWZmaXg7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZm9ybWF0dGVkRGF0ZVRpbWUgPSBmb3JtYXR0ZWREYXRlVGltZTtcblxuXHRcdFx0aWYgKCF0aGlzLl9kZWZhdWx0cy5zaG93VGltZXBpY2tlcikge1xuXHRcdFx0XHR0aGlzLiRpbnB1dC52YWwodGhpcy5mb3JtYXR0ZWREYXRlKTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy4kYWx0SW5wdXQgJiYgdGhpcy5fZGVmYXVsdHMudGltZU9ubHkgPT09IGZhbHNlICYmIHRoaXMuX2RlZmF1bHRzLmFsdEZpZWxkVGltZU9ubHkgPT09IHRydWUpIHtcblx0XHRcdFx0dGhpcy4kYWx0SW5wdXQudmFsKHRoaXMuZm9ybWF0dGVkVGltZSk7XG5cdFx0XHRcdHRoaXMuJGlucHV0LnZhbCh0aGlzLmZvcm1hdHRlZERhdGUpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLiRhbHRJbnB1dCkge1xuXHRcdFx0XHR0aGlzLiRpbnB1dC52YWwoZm9ybWF0dGVkRGF0ZVRpbWUpO1xuXHRcdFx0XHR2YXIgYWx0Rm9ybWF0dGVkRGF0ZVRpbWUgPSAnJyxcblx0XHRcdFx0XHRhbHRTZXBhcmF0b3IgPSB0aGlzLl9kZWZhdWx0cy5hbHRTZXBhcmF0b3IgIT09IG51bGwgPyB0aGlzLl9kZWZhdWx0cy5hbHRTZXBhcmF0b3IgOiB0aGlzLl9kZWZhdWx0cy5zZXBhcmF0b3IsXG5cdFx0XHRcdFx0YWx0VGltZVN1ZmZpeCA9IHRoaXMuX2RlZmF1bHRzLmFsdFRpbWVTdWZmaXggIT09IG51bGwgPyB0aGlzLl9kZWZhdWx0cy5hbHRUaW1lU3VmZml4IDogdGhpcy5fZGVmYXVsdHMudGltZVN1ZmZpeDtcblxuXHRcdFx0XHRpZiAoIXRoaXMuX2RlZmF1bHRzLnRpbWVPbmx5KSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX2RlZmF1bHRzLmFsdEZvcm1hdCkge1xuXHRcdFx0XHRcdFx0YWx0Rm9ybWF0dGVkRGF0ZVRpbWUgPSAkLmRhdGVwaWNrZXIuZm9ybWF0RGF0ZSh0aGlzLl9kZWZhdWx0cy5hbHRGb3JtYXQsIChkdCA9PT0gbnVsbCA/IG5ldyBEYXRlKCkgOiBkdCksIGZvcm1hdENmZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0YWx0Rm9ybWF0dGVkRGF0ZVRpbWUgPSB0aGlzLmZvcm1hdHRlZERhdGU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGFsdEZvcm1hdHRlZERhdGVUaW1lKSB7XG5cdFx0XHRcdFx0XHRhbHRGb3JtYXR0ZWREYXRlVGltZSArPSBhbHRTZXBhcmF0b3I7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRoaXMuX2RlZmF1bHRzLmFsdFRpbWVGb3JtYXQgIT09IG51bGwpIHtcblx0XHRcdFx0XHRhbHRGb3JtYXR0ZWREYXRlVGltZSArPSAkLmRhdGVwaWNrZXIuZm9ybWF0VGltZSh0aGlzLl9kZWZhdWx0cy5hbHRUaW1lRm9ybWF0LCB0aGlzLCB0aGlzLl9kZWZhdWx0cykgKyBhbHRUaW1lU3VmZml4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGFsdEZvcm1hdHRlZERhdGVUaW1lICs9IHRoaXMuZm9ybWF0dGVkVGltZSArIGFsdFRpbWVTdWZmaXg7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy4kYWx0SW5wdXQudmFsKGFsdEZvcm1hdHRlZERhdGVUaW1lKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuJGlucHV0LnZhbChmb3JtYXR0ZWREYXRlVGltZSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJGlucHV0LnRyaWdnZXIoXCJjaGFuZ2VcIik7XG5cdFx0fSxcblxuXHRcdF9vbkZvY3VzOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoIXRoaXMuJGlucHV0LnZhbCgpICYmIHRoaXMuX2RlZmF1bHRzLmRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0XHR0aGlzLiRpbnB1dC52YWwodGhpcy5fZGVmYXVsdHMuZGVmYXVsdFZhbHVlKTtcblx0XHRcdFx0dmFyIGluc3QgPSAkLmRhdGVwaWNrZXIuX2dldEluc3QodGhpcy4kaW5wdXQuZ2V0KDApKSxcblx0XHRcdFx0XHR0cF9pbnN0ID0gJC5kYXRlcGlja2VyLl9nZXQoaW5zdCwgJ3RpbWVwaWNrZXInKTtcblx0XHRcdFx0aWYgKHRwX2luc3QpIHtcblx0XHRcdFx0XHRpZiAodHBfaW5zdC5fZGVmYXVsdHMudGltZU9ubHkgJiYgKGluc3QuaW5wdXQudmFsKCkgIT09IGluc3QubGFzdFZhbCkpIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdCQuZGF0ZXBpY2tlci5fdXBkYXRlRGF0ZXBpY2tlcihpbnN0KTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHQkLnRpbWVwaWNrZXIubG9nKGVycik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qXG5cdFx0KiBTbWFsbCBhYnN0cmFjdGlvbiB0byBjb250cm9sIHR5cGVzXG5cdFx0KiBXZSBjYW4gYWRkIG1vcmUsIGp1c3QgYmUgc3VyZSB0byBmb2xsb3cgdGhlIHBhdHRlcm46IGNyZWF0ZSwgb3B0aW9ucywgdmFsdWVcblx0XHQqL1xuXHRcdF9jb250cm9sczoge1xuXHRcdFx0Ly8gc2xpZGVyIG1ldGhvZHNcblx0XHRcdHNsaWRlcjoge1xuXHRcdFx0XHRjcmVhdGU6IGZ1bmN0aW9uICh0cF9pbnN0LCBvYmosIHVuaXQsIHZhbCwgbWluLCBtYXgsIHN0ZXApIHtcblx0XHRcdFx0XHR2YXIgcnRsID0gdHBfaW5zdC5fZGVmYXVsdHMuaXNSVEw7IC8vIGlmIHJ0bCBnbyAtNjAtPjAgaW5zdGVhZCBvZiAwLT42MFxuXHRcdFx0XHRcdHJldHVybiBvYmoucHJvcCgnc2xpZGUnLCBudWxsKS5zbGlkZXIoe1xuXHRcdFx0XHRcdFx0b3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuXHRcdFx0XHRcdFx0dmFsdWU6IHJ0bCA/IHZhbCAqIC0xIDogdmFsLFxuXHRcdFx0XHRcdFx0bWluOiBydGwgPyBtYXggKiAtMSA6IG1pbixcblx0XHRcdFx0XHRcdG1heDogcnRsID8gbWluICogLTEgOiBtYXgsXG5cdFx0XHRcdFx0XHRzdGVwOiBzdGVwLFxuXHRcdFx0XHRcdFx0c2xpZGU6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcblx0XHRcdFx0XHRcdFx0dHBfaW5zdC5jb250cm9sLnZhbHVlKHRwX2luc3QsICQodGhpcyksIHVuaXQsIHJ0bCA/IHVpLnZhbHVlICogLTEgOiB1aS52YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdHRwX2luc3QuX29uVGltZUNoYW5nZSgpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHN0b3A6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcblx0XHRcdFx0XHRcdFx0dHBfaW5zdC5fb25TZWxlY3RIYW5kbGVyKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9wdGlvbnM6IGZ1bmN0aW9uICh0cF9pbnN0LCBvYmosIHVuaXQsIG9wdHMsIHZhbCkge1xuXHRcdFx0XHRcdGlmICh0cF9pbnN0Ll9kZWZhdWx0cy5pc1JUTCkge1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZihvcHRzKSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdHMgPT09ICdtaW4nIHx8IG9wdHMgPT09ICdtYXgnKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gb2JqLnNsaWRlcihvcHRzLCB2YWwgKiAtMSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBNYXRoLmFicyhvYmouc2xpZGVyKG9wdHMpKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gb2JqLnNsaWRlcihvcHRzKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHZhciBtaW4gPSBvcHRzLm1pbixcblx0XHRcdFx0XHRcdFx0bWF4ID0gb3B0cy5tYXg7XG5cdFx0XHRcdFx0XHRvcHRzLm1pbiA9IG9wdHMubWF4ID0gbnVsbDtcblx0XHRcdFx0XHRcdGlmIChtaW4gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRvcHRzLm1heCA9IG1pbiAqIC0xO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKG1heCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdG9wdHMubWluID0gbWF4ICogLTE7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2JqLnNsaWRlcihvcHRzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHR5cGVvZihvcHRzKSA9PT0gJ3N0cmluZycgJiYgdmFsICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBvYmouc2xpZGVyKG9wdHMsIHZhbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBvYmouc2xpZGVyKG9wdHMpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWx1ZTogZnVuY3Rpb24gKHRwX2luc3QsIG9iaiwgdW5pdCwgdmFsKSB7XG5cdFx0XHRcdFx0aWYgKHRwX2luc3QuX2RlZmF1bHRzLmlzUlRMKSB7XG5cdFx0XHRcdFx0XHRpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG9iai5zbGlkZXIoJ3ZhbHVlJywgdmFsICogLTEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIE1hdGguYWJzKG9iai5zbGlkZXIoJ3ZhbHVlJykpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBvYmouc2xpZGVyKCd2YWx1ZScsIHZhbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBvYmouc2xpZGVyKCd2YWx1ZScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Ly8gc2VsZWN0IG1ldGhvZHNcblx0XHRcdHNlbGVjdDoge1xuXHRcdFx0XHRjcmVhdGU6IGZ1bmN0aW9uICh0cF9pbnN0LCBvYmosIHVuaXQsIHZhbCwgbWluLCBtYXgsIHN0ZXApIHtcblx0XHRcdFx0XHR2YXIgc2VsID0gJzxzZWxlY3QgY2xhc3M9XCJ1aS10aW1lcGlja2VyLXNlbGVjdCB1aS1zdGF0ZS1kZWZhdWx0IHVpLWNvcm5lci1hbGxcIiBkYXRhLXVuaXQ9XCInICsgdW5pdCArICdcIiBkYXRhLW1pbj1cIicgKyBtaW4gKyAnXCIgZGF0YS1tYXg9XCInICsgbWF4ICsgJ1wiIGRhdGEtc3RlcD1cIicgKyBzdGVwICsgJ1wiPicsXG5cdFx0XHRcdFx0XHRmb3JtYXQgPSB0cF9pbnN0Ll9kZWZhdWx0cy5waWNrZXJUaW1lRm9ybWF0IHx8IHRwX2luc3QuX2RlZmF1bHRzLnRpbWVGb3JtYXQ7XG5cblx0XHRcdFx0XHRmb3IgKHZhciBpID0gbWluOyBpIDw9IG1heDsgaSArPSBzdGVwKSB7XG5cdFx0XHRcdFx0XHRzZWwgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgaSArICdcIicgKyAoaSA9PT0gdmFsID8gJyBzZWxlY3RlZCcgOiAnJykgKyAnPic7XG5cdFx0XHRcdFx0XHRpZiAodW5pdCA9PT0gJ2hvdXInKSB7XG5cdFx0XHRcdFx0XHRcdHNlbCArPSAkLmRhdGVwaWNrZXIuZm9ybWF0VGltZShQcmltZUZhY2VzLnRyaW0oZm9ybWF0LnJlcGxhY2UoL1teaHQgXS9pZywgJycpKSwge2hvdXI6IGl9LCB0cF9pbnN0Ll9kZWZhdWx0cyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGlmICh1bml0ID09PSAnbWlsbGlzZWMnIHx8IHVuaXQgPT09ICdtaWNyb3NlYycgfHwgaSA+PSAxMCkgeyBzZWwgKz0gaTsgfVxuXHRcdFx0XHRcdFx0ZWxzZSB7c2VsICs9ICcwJyArIGkudG9TdHJpbmcoKTsgfVxuXHRcdFx0XHRcdFx0c2VsICs9ICc8L29wdGlvbj4nO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzZWwgKz0gJzwvc2VsZWN0Pic7XG5cblx0XHRcdFx0XHRvYmouY2hpbGRyZW4oJ3NlbGVjdCcpLnJlbW92ZSgpO1xuXG5cdFx0XHRcdFx0JChzZWwpLmFwcGVuZFRvKG9iaikub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0XHR0cF9pbnN0Ll9vblRpbWVDaGFuZ2UoKTtcblx0XHRcdFx0XHRcdHRwX2luc3QuX29uU2VsZWN0SGFuZGxlcigpO1xuXHRcdFx0XHRcdFx0dHBfaW5zdC5fYWZ0ZXJJbmplY3QoKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHJldHVybiBvYmo7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9wdGlvbnM6IGZ1bmN0aW9uICh0cF9pbnN0LCBvYmosIHVuaXQsIG9wdHMsIHZhbCkge1xuXHRcdFx0XHRcdHZhciBvID0ge30sXG5cdFx0XHRcdFx0XHQkdCA9IG9iai5jaGlsZHJlbignc2VsZWN0Jyk7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZihvcHRzKSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJHQuZGF0YShvcHRzKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG9bb3B0c10gPSB2YWw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgeyBvID0gb3B0czsgfVxuXHRcdFx0XHRcdHJldHVybiB0cF9pbnN0LmNvbnRyb2wuY3JlYXRlKHRwX2luc3QsIG9iaiwgJHQuZGF0YSgndW5pdCcpLCAkdC52YWwoKSwgby5taW4+PTAgPyBvLm1pbiA6ICR0LmRhdGEoJ21pbicpLCBvLm1heCB8fCAkdC5kYXRhKCdtYXgnKSwgby5zdGVwIHx8ICR0LmRhdGEoJ3N0ZXAnKSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHZhbHVlOiBmdW5jdGlvbiAodHBfaW5zdCwgb2JqLCB1bml0LCB2YWwpIHtcblx0XHRcdFx0XHR2YXIgJHQgPSBvYmouY2hpbGRyZW4oJ3NlbGVjdCcpO1xuXHRcdFx0XHRcdGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICR0LnZhbCh2YWwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gJHQudmFsKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IC8vIGVuZCBfY29udHJvbHNcblxuXHR9KTtcblxuXHQkLmZuLmV4dGVuZCh7XG5cdFx0Lypcblx0XHQqIHNob3J0aGFuZCBqdXN0IHRvIHVzZSB0aW1lcGlja2VyLlxuXHRcdCovXG5cdFx0dGltZXBpY2tlcjogZnVuY3Rpb24gKG8pIHtcblx0XHRcdG8gPSBvIHx8IHt9O1xuXHRcdFx0dmFyIHRtcF9hcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBvID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHR0bXBfYXJnc1swXSA9ICQuZXh0ZW5kKG8sIHtcblx0XHRcdFx0XHR0aW1lT25seTogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuICQodGhpcykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQuZm4uZGF0ZXRpbWVwaWNrZXIuYXBwbHkoJCh0aGlzKSwgdG1wX2FyZ3MpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdC8qXG5cdFx0KiBleHRlbmQgdGltZXBpY2tlciB0byBkYXRlcGlja2VyXG5cdFx0Ki9cblx0XHRkYXRldGltZXBpY2tlcjogZnVuY3Rpb24gKG8pIHtcblx0XHRcdG8gPSBvIHx8IHt9O1xuXHRcdFx0dmFyIHRtcF9hcmdzID0gYXJndW1lbnRzO1xuXG5cdFx0XHRpZiAodHlwZW9mKG8pID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRpZiAobyA9PT0gJ2dldERhdGUnICB8fCAobyA9PT0gJ29wdGlvbicgJiYgdG1wX2FyZ3MubGVuZ3RoID09PSAyICYmIHR5cGVvZiAodG1wX2FyZ3NbMV0pID09PSAnc3RyaW5nJykpIHtcblx0XHRcdFx0XHRyZXR1cm4gJC5mbi5kYXRlcGlja2VyLmFwcGx5KCQodGhpc1swXSksIHRtcF9hcmdzKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHZhciAkdCA9ICQodGhpcyk7XG5cdFx0XHRcdFx0XHQkdC5kYXRlcGlja2VyLmFwcGx5KCR0LCB0bXBfYXJncyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHZhciAkdCA9ICQodGhpcyk7XG5cdFx0XHRcdFx0JHQuZGF0ZXBpY2tlcigkLnRpbWVwaWNrZXIuX25ld0luc3QoJHQsIG8pLl9kZWZhdWx0cyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0Lypcblx0KiBQdWJsaWMgVXRpbGl0eSB0byBwYXJzZSBkYXRlIGFuZCB0aW1lXG5cdCovXG5cdCQuZGF0ZXBpY2tlci5wYXJzZURhdGVUaW1lID0gZnVuY3Rpb24gKGRhdGVGb3JtYXQsIHRpbWVGb3JtYXQsIGRhdGVUaW1lU3RyaW5nLCBkYXRlU2V0dGluZ3MsIHRpbWVTZXR0aW5ncykge1xuXHRcdHZhciBwYXJzZVJlcyA9IHBhcnNlRGF0ZVRpbWVJbnRlcm5hbChkYXRlRm9ybWF0LCB0aW1lRm9ybWF0LCBkYXRlVGltZVN0cmluZywgZGF0ZVNldHRpbmdzLCB0aW1lU2V0dGluZ3MpO1xuXHRcdGlmIChwYXJzZVJlcy50aW1lT2JqKSB7XG5cdFx0XHR2YXIgdCA9IHBhcnNlUmVzLnRpbWVPYmo7XG5cdFx0XHRwYXJzZVJlcy5kYXRlLnNldEhvdXJzKHQuaG91ciwgdC5taW51dGUsIHQuc2Vjb25kLCB0Lm1pbGxpc2VjKTtcblx0XHRcdHBhcnNlUmVzLmRhdGUuc2V0TWljcm9zZWNvbmRzKHQubWljcm9zZWMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBwYXJzZVJlcy5kYXRlO1xuXHR9O1xuXG5cdC8qXG5cdCogUHVibGljIHV0aWxpdHkgdG8gcGFyc2UgdGltZVxuXHQqL1xuXHQkLmRhdGVwaWNrZXIucGFyc2VUaW1lID0gZnVuY3Rpb24gKHRpbWVGb3JtYXQsIHRpbWVTdHJpbmcsIG9wdGlvbnMpIHtcblx0XHR2YXIgbyA9IGV4dGVuZFJlbW92ZShleHRlbmRSZW1vdmUoe30sICQudGltZXBpY2tlci5fZGVmYXVsdHMpLCBvcHRpb25zIHx8IHt9KSxcblx0XHRcdGlzbzg2MDEgPSAodGltZUZvcm1hdC5yZXBsYWNlKC9cXCcuKj9cXCcvZywgJycpLmluZGV4T2YoJ1onKSAhPT0gLTEpO1xuXG5cdFx0Ly8gU3RyaWN0IHBhcnNlIHJlcXVpcmVzIHRoZSB0aW1lU3RyaW5nIHRvIG1hdGNoIHRoZSB0aW1lRm9ybWF0IGV4YWN0bHlcblx0XHR2YXIgc3RyaWN0UGFyc2UgPSBmdW5jdGlvbiAoZiwgcywgbykge1xuXG5cdFx0XHQvLyBwYXR0ZXJuIGZvciBzdGFuZGFyZCBhbmQgbG9jYWxpemVkIEFNL1BNIG1hcmtlcnNcblx0XHRcdHZhciBnZXRQYXR0ZXJuQW1wbSA9IGZ1bmN0aW9uIChhbU5hbWVzLCBwbU5hbWVzKSB7XG5cdFx0XHRcdHZhciBtYXJrZXJzID0gW107XG5cdFx0XHRcdGlmIChhbU5hbWVzKSB7XG5cdFx0XHRcdFx0JC5tZXJnZShtYXJrZXJzLCBhbU5hbWVzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocG1OYW1lcykge1xuXHRcdFx0XHRcdCQubWVyZ2UobWFya2VycywgcG1OYW1lcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bWFya2VycyA9ICQubWFwKG1hcmtlcnMsIGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdFx0XHRyZXR1cm4gdmFsLnJlcGxhY2UoL1suKis/fCgpXFxbXFxde31cXFxcXS9nLCAnXFxcXCQmJyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gJygnICsgbWFya2Vycy5qb2luKCd8JykgKyAnKT8nO1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gZmlndXJlIG91dCBwb3NpdGlvbiBvZiB0aW1lIGVsZW1lbnRzLi4gY2F1c2UganMgY2FudCBkbyBuYW1lZCBjYXB0dXJlc1xuXHRcdFx0dmFyIGdldEZvcm1hdFBvc2l0aW9ucyA9IGZ1bmN0aW9uICh0aW1lRm9ybWF0KSB7XG5cdFx0XHRcdHZhciBmaW5kcyA9IHRpbWVGb3JtYXQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGh7MSwyfXxtezEsMn18c3sxLDJ9fGx7MX18Y3sxfXx0ezEsMn18enwnLio/JykvZyksXG5cdFx0XHRcdFx0b3JkZXJzID0ge1xuXHRcdFx0XHRcdFx0aDogLTEsXG5cdFx0XHRcdFx0XHRtOiAtMSxcblx0XHRcdFx0XHRcdHM6IC0xLFxuXHRcdFx0XHRcdFx0bDogLTEsXG5cdFx0XHRcdFx0XHRjOiAtMSxcblx0XHRcdFx0XHRcdHQ6IC0xLFxuXHRcdFx0XHRcdFx0ejogLTFcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdGlmIChmaW5kcykge1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZmluZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmIChvcmRlcnNbZmluZHNbaV0udG9TdHJpbmcoKS5jaGFyQXQoMCldID09PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRvcmRlcnNbZmluZHNbaV0udG9TdHJpbmcoKS5jaGFyQXQoMCldID0gaSArIDE7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBvcmRlcnM7XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgcmVnc3RyID0gJ14nICsgZi50b1N0cmluZygpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyhbaEhdezEsMn18bW0/fHNzP3xbdFRdezEsMn18W3paXXxbbGNdfCcuKj8nKS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcblx0XHRcdFx0XHRcdFx0dmFyIG1sID0gbWF0Y2gubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKG1hdGNoLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2gnOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBtbCA9PT0gMSA/ICcoXFxcXGQ/XFxcXGQpJyA6ICcoXFxcXGR7JyArIG1sICsgJ30pJztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnbSc6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIG1sID09PSAxID8gJyhcXFxcZD9cXFxcZCknIDogJyhcXFxcZHsnICsgbWwgKyAnfSknO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdzJzpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbWwgPT09IDEgPyAnKFxcXFxkP1xcXFxkKScgOiAnKFxcXFxkeycgKyBtbCArICd9KSc7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2wnOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAnKFxcXFxkP1xcXFxkP1xcXFxkKSc7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2MnOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAnKFxcXFxkP1xcXFxkP1xcXFxkKSc7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ3onOlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAnKHp8Wy0rXVxcXFxkXFxcXGQ6P1xcXFxkXFxcXGR8XFxcXFMrKT8nO1xuXHRcdFx0XHRcdFx0XHRjYXNlICd0Jzpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZ2V0UGF0dGVybkFtcG0oby5hbU5hbWVzLCBvLnBtTmFtZXMpO1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OiAgICAvLyBsaXRlcmFsIGVzY2FwZWQgaW4gcXVvdGVzXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuICcoJyArIG1hdGNoLnJlcGxhY2UoL1xcJy9nLCBcIlwiKS5yZXBsYWNlKC8oXFwufFxcJHxcXF58XFxcXHxcXC98XFwofFxcKXxcXFt8XFxdfFxcP3xcXCt8XFwqKS9nLCBmdW5jdGlvbiAobSkgeyByZXR1cm4gXCJcXFxcXCIgKyBtOyB9KSArICcpPyc7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xccy9nLCAnXFxcXHM/JykgK1xuXHRcdFx0XHRcdG8udGltZVN1ZmZpeCArICckJyxcblx0XHRcdFx0b3JkZXIgPSBnZXRGb3JtYXRQb3NpdGlvbnMoZiksXG5cdFx0XHRcdGFtcG0gPSAnJyxcblx0XHRcdFx0dHJlZztcblxuXHRcdFx0dHJlZyA9IHMubWF0Y2gobmV3IFJlZ0V4cChyZWdzdHIsICdpJykpO1xuXG5cdFx0XHR2YXIgcmVzVGltZSA9IHtcblx0XHRcdFx0aG91cjogMCxcblx0XHRcdFx0bWludXRlOiAwLFxuXHRcdFx0XHRzZWNvbmQ6IDAsXG5cdFx0XHRcdG1pbGxpc2VjOiAwLFxuXHRcdFx0XHRtaWNyb3NlYzogMFxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKHRyZWcpIHtcblx0XHRcdFx0aWYgKG9yZGVyLnQgIT09IC0xKSB7XG5cdFx0XHRcdFx0aWYgKHRyZWdbb3JkZXIudF0gPT09IHVuZGVmaW5lZCB8fCB0cmVnW29yZGVyLnRdLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0YW1wbSA9ICcnO1xuXHRcdFx0XHRcdFx0cmVzVGltZS5hbXBtID0gJyc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGFtcG0gPSAkLmluQXJyYXkodHJlZ1tvcmRlci50XS50b1VwcGVyQ2FzZSgpLCAkLm1hcChvLmFtTmFtZXMsIGZ1bmN0aW9uICh4LGkpIHsgcmV0dXJuIHgudG9VcHBlckNhc2UoKTsgfSkpICE9PSAtMSA/ICdBTScgOiAnUE0nO1xuXHRcdFx0XHRcdFx0cmVzVGltZS5hbXBtID0gb1thbXBtID09PSAnQU0nID8gJ2FtTmFtZXMnIDogJ3BtTmFtZXMnXVswXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAob3JkZXIuaCAhPT0gLTEpIHtcblx0XHRcdFx0XHRpZiAoYW1wbSA9PT0gJ0FNJyAmJiB0cmVnW29yZGVyLmhdID09PSAnMTInKSB7XG5cdFx0XHRcdFx0XHRyZXNUaW1lLmhvdXIgPSAwOyAvLyAxMmFtID0gMCBob3VyXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChhbXBtID09PSAnUE0nICYmIHRyZWdbb3JkZXIuaF0gIT09ICcxMicpIHtcblx0XHRcdFx0XHRcdFx0cmVzVGltZS5ob3VyID0gcGFyc2VJbnQodHJlZ1tvcmRlci5oXSwgMTApICsgMTI7IC8vIDEycG0gPSAxMiBob3VyLCBhbnkgb3RoZXIgcG0gPSBob3VyICsgMTJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJlc1RpbWUuaG91ciA9IE51bWJlcih0cmVnW29yZGVyLmhdKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAob3JkZXIubSAhPT0gLTEpIHtcblx0XHRcdFx0XHRyZXNUaW1lLm1pbnV0ZSA9IE51bWJlcih0cmVnW29yZGVyLm1dKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob3JkZXIucyAhPT0gLTEpIHtcblx0XHRcdFx0XHRyZXNUaW1lLnNlY29uZCA9IE51bWJlcih0cmVnW29yZGVyLnNdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob3JkZXIubCAhPT0gLTEpIHtcblx0XHRcdFx0XHRyZXNUaW1lLm1pbGxpc2VjID0gTnVtYmVyKHRyZWdbb3JkZXIubF0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvcmRlci5jICE9PSAtMSkge1xuXHRcdFx0XHRcdHJlc1RpbWUubWljcm9zZWMgPSBOdW1iZXIodHJlZ1tvcmRlci5jXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG9yZGVyLnogIT09IC0xICYmIHRyZWdbb3JkZXIuel0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHJlc1RpbWUudGltZXpvbmUgPSAkLnRpbWVwaWNrZXIudGltZXpvbmVPZmZzZXROdW1iZXIodHJlZ1tvcmRlci56XSk7XG5cdFx0XHRcdH1cblxuXG5cdFx0XHRcdHJldHVybiByZXNUaW1lO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07Ly8gZW5kIHN0cmljdFBhcnNlXG5cblx0XHQvLyBGaXJzdCB0cnkgSlMgRGF0ZSwgaWYgdGhhdCBmYWlscywgdXNlIHN0cmljdFBhcnNlXG5cdFx0dmFyIGxvb3NlUGFyc2UgPSBmdW5jdGlvbiAoZiwgcywgbykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIGQgPSBuZXcgRGF0ZSgnMjAxMi0wMS0wMSAnICsgcyk7XG5cdFx0XHRcdGlmIChpc05hTihkLmdldFRpbWUoKSkpIHtcblx0XHRcdFx0XHRkID0gbmV3IERhdGUoJzIwMTItMDEtMDFUJyArIHMpO1xuXHRcdFx0XHRcdGlmIChpc05hTihkLmdldFRpbWUoKSkpIHtcblx0XHRcdFx0XHRcdGQgPSBuZXcgRGF0ZSgnMDEvMDEvMjAxMiAnICsgcyk7XG5cdFx0XHRcdFx0XHRpZiAoaXNOYU4oZC5nZXRUaW1lKCkpKSB7XG5cdFx0XHRcdFx0XHRcdHRocm93IFwiVW5hYmxlIHRvIHBhcnNlIHRpbWUgd2l0aCBuYXRpdmUgRGF0ZTogXCIgKyBzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0aG91cjogZC5nZXRIb3VycygpLFxuXHRcdFx0XHRcdG1pbnV0ZTogZC5nZXRNaW51dGVzKCksXG5cdFx0XHRcdFx0c2Vjb25kOiBkLmdldFNlY29uZHMoKSxcblx0XHRcdFx0XHRtaWxsaXNlYzogZC5nZXRNaWxsaXNlY29uZHMoKSxcblx0XHRcdFx0XHRtaWNyb3NlYzogZC5nZXRNaWNyb3NlY29uZHMoKSxcblx0XHRcdFx0XHR0aW1lem9uZTogZC5nZXRUaW1lem9uZU9mZnNldCgpICogLTFcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGNhdGNoIChlcnIpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXR1cm4gc3RyaWN0UGFyc2UoZiwgcywgbyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHQkLnRpbWVwaWNrZXIubG9nKFwiVW5hYmxlIHRvIHBhcnNlIFxcbnRpbWVTdHJpbmc6IFwiICsgcyArIFwiXFxudGltZUZvcm1hdDogXCIgKyBmKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07IC8vIGVuZCBsb29zZVBhcnNlXG5cblx0XHRpZiAodHlwZW9mIG8ucGFyc2UgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0cmV0dXJuIG8ucGFyc2UodGltZUZvcm1hdCwgdGltZVN0cmluZywgbyk7XG5cdFx0fVxuXHRcdGlmIChvLnBhcnNlID09PSAnbG9vc2UnKSB7XG5cdFx0XHRyZXR1cm4gbG9vc2VQYXJzZSh0aW1lRm9ybWF0LCB0aW1lU3RyaW5nLCBvKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0cmljdFBhcnNlKHRpbWVGb3JtYXQsIHRpbWVTdHJpbmcsIG8pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBQdWJsaWMgdXRpbGl0eSB0byBmb3JtYXQgdGhlIHRpbWVcblx0ICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCBmb3JtYXQgb2YgdGhlIHRpbWVcblx0ICogQHBhcmFtIHtPYmplY3R9IHRpbWUgT2JqZWN0IG5vdCBhIERhdGUgZm9yIHRpbWV6b25lc1xuXHQgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIGVzc2VudGlhbGx5IHRoZSByZWdpb25hbFtdLi4gYW1OYW1lcywgcG1OYW1lcywgYW1wbVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgZm9ybWF0dGVkIHRpbWVcblx0ICovXG5cdCQuZGF0ZXBpY2tlci5mb3JtYXRUaW1lID0gZnVuY3Rpb24gKGZvcm1hdCwgdGltZSwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgJC50aW1lcGlja2VyLl9kZWZhdWx0cywgb3B0aW9ucyk7XG5cdFx0dGltZSA9ICQuZXh0ZW5kKHtcblx0XHRcdGhvdXI6IDAsXG5cdFx0XHRtaW51dGU6IDAsXG5cdFx0XHRzZWNvbmQ6IDAsXG5cdFx0XHRtaWxsaXNlYzogMCxcblx0XHRcdG1pY3Jvc2VjOiAwLFxuXHRcdFx0dGltZXpvbmU6IG51bGxcblx0XHR9LCB0aW1lKTtcblxuXHRcdHZhciB0bXB0aW1lID0gZm9ybWF0LFxuXHRcdFx0YW1wbU5hbWUgPSBvcHRpb25zLmFtTmFtZXNbMF0sXG5cdFx0XHRob3VyID0gcGFyc2VJbnQodGltZS5ob3VyLCAxMCk7XG5cblx0XHRpZiAoaG91ciA+IDExKSB7XG5cdFx0XHRhbXBtTmFtZSA9IG9wdGlvbnMucG1OYW1lc1swXTtcblx0XHR9XG5cblx0XHR0bXB0aW1lID0gdG1wdGltZS5yZXBsYWNlKC8oPzpISD98aGg/fG1tP3xzcz98W3RUXXsxLDJ9fFt6Wl18W2xjXXwnLio/JykvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG5cdFx0XHRzd2l0Y2ggKG1hdGNoKSB7XG5cdFx0XHRjYXNlICdISCc6XG5cdFx0XHRcdHJldHVybiAoJzAnICsgaG91cikuc2xpY2UoLTIpO1xuXHRcdFx0Y2FzZSAnSCc6XG5cdFx0XHRcdHJldHVybiBob3VyO1xuXHRcdFx0Y2FzZSAnaGgnOlxuXHRcdFx0XHRyZXR1cm4gKCcwJyArIGNvbnZlcnQyNHRvMTIoaG91cikpLnNsaWNlKC0yKTtcblx0XHRcdGNhc2UgJ2gnOlxuXHRcdFx0XHRyZXR1cm4gY29udmVydDI0dG8xMihob3VyKTtcblx0XHRcdGNhc2UgJ21tJzpcblx0XHRcdFx0cmV0dXJuICgnMCcgKyB0aW1lLm1pbnV0ZSkuc2xpY2UoLTIpO1xuXHRcdFx0Y2FzZSAnbSc6XG5cdFx0XHRcdHJldHVybiB0aW1lLm1pbnV0ZTtcblx0XHRcdGNhc2UgJ3NzJzpcblx0XHRcdFx0cmV0dXJuICgnMCcgKyB0aW1lLnNlY29uZCkuc2xpY2UoLTIpO1xuXHRcdFx0Y2FzZSAncyc6XG5cdFx0XHRcdHJldHVybiB0aW1lLnNlY29uZDtcblx0XHRcdGNhc2UgJ2wnOlxuXHRcdFx0XHRyZXR1cm4gKCcwMCcgKyB0aW1lLm1pbGxpc2VjKS5zbGljZSgtMyk7XG5cdFx0XHRjYXNlICdjJzpcblx0XHRcdFx0cmV0dXJuICgnMDAnICsgdGltZS5taWNyb3NlYykuc2xpY2UoLTMpO1xuXHRcdFx0Y2FzZSAneic6XG5cdFx0XHRcdHJldHVybiAkLnRpbWVwaWNrZXIudGltZXpvbmVPZmZzZXRTdHJpbmcodGltZS50aW1lem9uZSA9PT0gbnVsbCA/IG9wdGlvbnMudGltZXpvbmUgOiB0aW1lLnRpbWV6b25lLCBmYWxzZSk7XG5cdFx0XHRjYXNlICdaJzpcblx0XHRcdFx0cmV0dXJuICQudGltZXBpY2tlci50aW1lem9uZU9mZnNldFN0cmluZyh0aW1lLnRpbWV6b25lID09PSBudWxsID8gb3B0aW9ucy50aW1lem9uZSA6IHRpbWUudGltZXpvbmUsIHRydWUpO1xuXHRcdFx0Y2FzZSAnVCc6XG5cdFx0XHRcdHJldHVybiBhbXBtTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcblx0XHRcdGNhc2UgJ1RUJzpcblx0XHRcdFx0cmV0dXJuIGFtcG1OYW1lLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRjYXNlICd0Jzpcblx0XHRcdFx0cmV0dXJuIGFtcG1OYW1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0Y2FzZSAndHQnOlxuXHRcdFx0XHRyZXR1cm4gYW1wbU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBtYXRjaC5yZXBsYWNlKC8nL2csIFwiXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRtcHRpbWU7XG5cdH07XG5cblx0Lypcblx0KiB0aGUgYmFkIGhhY2sgOi8gb3ZlcnJpZGUgZGF0ZXBpY2tlciBzbyBpdCBkb2Vzbid0IGNsb3NlIG9uIHNlbGVjdFxuXHQvLyBpbnNwaXJlZDogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMjUyNTEyL2pxdWVyeS1kYXRlcGlja2VyLXByZXZlbnQtY2xvc2luZy1waWNrZXItd2hlbi1jbGlja2luZy1hLWRhdGUvMTc2MjM3OCMxNzYyMzc4XG5cdCovXG5cdCQuZGF0ZXBpY2tlci5fYmFzZV9zZWxlY3REYXRlID0gJC5kYXRlcGlja2VyLl9zZWxlY3REYXRlO1xuXHQkLmRhdGVwaWNrZXIuX3NlbGVjdERhdGUgPSBmdW5jdGlvbiAoaWQsIGRhdGVTdHIpIHtcblx0XHR2YXIgaW5zdCA9IHRoaXMuX2dldEluc3QoJChpZClbMF0pLFxuXHRcdFx0dHBfaW5zdCA9IHRoaXMuX2dldChpbnN0LCAndGltZXBpY2tlcicpLFxuXHRcdFx0d2FzX2lubGluZTtcblxuXHRcdGlmICh0cF9pbnN0ICYmIGluc3Quc2V0dGluZ3Muc2hvd1RpbWVwaWNrZXIpIHtcblx0XHRcdHRwX2luc3QuX2xpbWl0TWluTWF4RGF0ZVRpbWUoaW5zdCwgdHJ1ZSk7XG5cdFx0XHR3YXNfaW5saW5lID0gaW5zdC5pbmxpbmU7XG5cdFx0XHRpbnN0LmlubGluZSA9IGluc3Quc3RheV9vcGVuID0gdHJ1ZTtcblx0XHRcdC8vVGhpcyB3YXkgdGhlIG9uU2VsZWN0IGhhbmRsZXIgY2FsbGVkIGZyb20gY2FsZW5kYXJwaWNrZXIgZ2V0IHRoZSBmdWxsIGRhdGVUaW1lXG5cdFx0XHR0aGlzLl9iYXNlX3NlbGVjdERhdGUoaWQsIGRhdGVTdHIpO1xuXHRcdFx0aW5zdC5pbmxpbmUgPSB3YXNfaW5saW5lO1xuXHRcdFx0aW5zdC5zdGF5X29wZW4gPSBmYWxzZTtcblx0XHRcdHRoaXMuX25vdGlmeUNoYW5nZShpbnN0KTtcblx0XHRcdHRoaXMuX3VwZGF0ZURhdGVwaWNrZXIoaW5zdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2Jhc2Vfc2VsZWN0RGF0ZShpZCwgZGF0ZVN0cik7XG5cdFx0fVxuXHR9O1xuXG5cdC8qXG5cdCogc2Vjb25kIGJhZCBoYWNrIDovIG92ZXJyaWRlIGRhdGVwaWNrZXIgc28gaXQgdHJpZ2dlcnMgYW4gZXZlbnQgd2hlbiBjaGFuZ2luZyB0aGUgaW5wdXQgZmllbGRcblx0KiBhbmQgZG9lcyBub3QgcmVkcmF3IHRoZSBkYXRlcGlja2VyIG9uIGV2ZXJ5IHNlbGVjdERhdGUgZXZlbnRcblx0Ki9cblx0JC5kYXRlcGlja2VyLl9iYXNlX3VwZGF0ZURhdGVwaWNrZXIgPSAkLmRhdGVwaWNrZXIuX3VwZGF0ZURhdGVwaWNrZXI7XG5cdCQuZGF0ZXBpY2tlci5fdXBkYXRlRGF0ZXBpY2tlciA9IGZ1bmN0aW9uIChpbnN0KSB7XG5cblx0XHQvLyBkb24ndCBwb3B1cCB0aGUgZGF0ZXBpY2tlciBpZiB0aGVyZSBpcyBhbm90aGVyIGluc3RhbmNlIGFscmVhZHkgb3BlbmVkXG5cdFx0dmFyIGlucHV0ID0gaW5zdC5pbnB1dFswXTtcblx0XHRpZiAoJC5kYXRlcGlja2VyLl9jdXJJbnN0ICYmICQuZGF0ZXBpY2tlci5fY3VySW5zdCAhPT0gaW5zdCAmJiAkLmRhdGVwaWNrZXIuX2RhdGVwaWNrZXJTaG93aW5nICYmICQuZGF0ZXBpY2tlci5fbGFzdElucHV0ICE9PSBpbnB1dCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YoaW5zdC5zdGF5X29wZW4pICE9PSAnYm9vbGVhbicgfHwgaW5zdC5zdGF5X29wZW4gPT09IGZhbHNlKSB7XG5cblx0XHRcdHRoaXMuX2Jhc2VfdXBkYXRlRGF0ZXBpY2tlcihpbnN0KTtcblxuXHRcdFx0Ly8gUmVsb2FkIHRoZSB0aW1lIGNvbnRyb2wgd2hlbiBjaGFuZ2luZyBzb21ldGhpbmcgaW4gdGhlIGlucHV0IHRleHQgZmllbGQuXG5cdFx0XHR2YXIgdHBfaW5zdCA9IHRoaXMuX2dldChpbnN0LCAndGltZXBpY2tlcicpO1xuXHRcdFx0aWYgKHRwX2luc3QpIHtcblx0XHRcdFx0dHBfaW5zdC5fYWRkVGltZVBpY2tlcihpbnN0KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Lypcblx0KiB0aGlyZCBiYWQgaGFjayA6LyBvdmVycmlkZSBkYXRlcGlja2VyIHNvIGl0IGFsbG93cyBzcGFjZXMgYW5kIGNvbG9uIGluIHRoZSBpbnB1dCBmaWVsZFxuXHQqL1xuXHQkLmRhdGVwaWNrZXIuX2Jhc2VfZG9LZXlQcmVzcyA9ICQuZGF0ZXBpY2tlci5fZG9LZXlQcmVzcztcblx0JC5kYXRlcGlja2VyLl9kb0tleVByZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0dmFyIGluc3QgPSAkLmRhdGVwaWNrZXIuX2dldEluc3QoZXZlbnQudGFyZ2V0KSxcblx0XHRcdHRwX2luc3QgPSAkLmRhdGVwaWNrZXIuX2dldChpbnN0LCAndGltZXBpY2tlcicpO1xuXG5cdFx0aWYgKHRwX2luc3QpIHtcblx0XHRcdGlmICgkLmRhdGVwaWNrZXIuX2dldChpbnN0LCAnY29uc3RyYWluSW5wdXQnKSkge1xuXHRcdFx0XHR2YXIgYW1wbSA9IHRwX2luc3Quc3VwcG9ydC5hbXBtLFxuXHRcdFx0XHRcdHR6ID0gdHBfaW5zdC5fZGVmYXVsdHMuc2hvd1RpbWV6b25lICE9PSBudWxsID8gdHBfaW5zdC5fZGVmYXVsdHMuc2hvd1RpbWV6b25lIDogdHBfaW5zdC5zdXBwb3J0LnRpbWV6b25lLFxuXHRcdFx0XHRcdGRhdGVDaGFycyA9ICQuZGF0ZXBpY2tlci5fcG9zc2libGVDaGFycygkLmRhdGVwaWNrZXIuX2dldChpbnN0LCAnZGF0ZUZvcm1hdCcpKSxcblx0XHRcdFx0XHRkYXRldGltZUNoYXJzID0gdHBfaW5zdC5fZGVmYXVsdHMudGltZUZvcm1hdC50b1N0cmluZygpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoL1tobXNdL2csICcnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKC9UVC9nLCBhbXBtID8gJ0FQTScgOiAnJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgvVHQvZywgYW1wbSA/ICdBYVBwTW0nIDogJycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoL3RUL2csIGFtcG0gPyAnQWFQcE1tJyA6ICcnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKC9UL2csIGFtcG0gPyAnQVAnIDogJycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoL3R0L2csIGFtcG0gPyAnYXBtJyA6ICcnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKC90L2csIGFtcG0gPyAnYXAnIDogJycpICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIiBcIiArIHRwX2luc3QuX2RlZmF1bHRzLnNlcGFyYXRvciArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHBfaW5zdC5fZGVmYXVsdHMudGltZVN1ZmZpeCArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KHR6ID8gdHBfaW5zdC5fZGVmYXVsdHMudGltZXpvbmVMaXN0LmpvaW4oJycpIDogJycpICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQodHBfaW5zdC5fZGVmYXVsdHMuYW1OYW1lcy5qb2luKCcnKSkgKyAodHBfaW5zdC5fZGVmYXVsdHMucG1OYW1lcy5qb2luKCcnKSkgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGVDaGFycyxcblx0XHRcdFx0XHRjaHIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmNoYXJDb2RlID09PSB1bmRlZmluZWQgPyBldmVudC5rZXlDb2RlIDogZXZlbnQuY2hhckNvZGUpO1xuXHRcdFx0XHRyZXR1cm4gZXZlbnQuY3RybEtleSB8fCAoY2hyIDwgJyAnIHx8ICFkYXRlQ2hhcnMgfHwgZGF0ZXRpbWVDaGFycy5pbmRleE9mKGNocikgPiAtMSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuICQuZGF0ZXBpY2tlci5fYmFzZV9kb0tleVByZXNzKGV2ZW50KTtcblx0fTtcblxuXHQvKlxuXHQqIEZvdXJ0aCBiYWQgaGFjayA6LyBvdmVycmlkZSBfdXBkYXRlQWx0ZXJuYXRlIGZ1bmN0aW9uIHVzZWQgaW4gaW5saW5lIG1vZGUgdG8gaW5pdCBhbHRGaWVsZFxuXHQqIFVwZGF0ZSBhbnkgYWx0ZXJuYXRlIGZpZWxkIHRvIHN5bmNocm9uaXNlIHdpdGggdGhlIG1haW4gZmllbGQuXG5cdCovXG5cdCQuZGF0ZXBpY2tlci5fYmFzZV91cGRhdGVBbHRlcm5hdGUgPSAkLmRhdGVwaWNrZXIuX3VwZGF0ZUFsdGVybmF0ZTtcblx0JC5kYXRlcGlja2VyLl91cGRhdGVBbHRlcm5hdGUgPSBmdW5jdGlvbiAoaW5zdCkge1xuXHRcdHZhciB0cF9pbnN0ID0gdGhpcy5fZ2V0KGluc3QsICd0aW1lcGlja2VyJyk7XG5cdFx0aWYgKHRwX2luc3QpIHtcblx0XHRcdHZhciBhbHRGaWVsZCA9IHRwX2luc3QuX2RlZmF1bHRzLmFsdEZpZWxkO1xuXHRcdFx0aWYgKGFsdEZpZWxkKSB7IC8vIHVwZGF0ZSBhbHRlcm5hdGUgZmllbGQgdG9vXG5cdFx0XHRcdHZhciBhbHRGb3JtYXQgPSB0cF9pbnN0Ll9kZWZhdWx0cy5hbHRGb3JtYXQgfHwgdHBfaW5zdC5fZGVmYXVsdHMuZGF0ZUZvcm1hdCxcblx0XHRcdFx0XHRkYXRlID0gdGhpcy5fZ2V0RGF0ZShpbnN0KSxcblx0XHRcdFx0XHRmb3JtYXRDZmcgPSAkLmRhdGVwaWNrZXIuX2dldEZvcm1hdENvbmZpZyhpbnN0KSxcblx0XHRcdFx0XHRhbHRGb3JtYXR0ZWREYXRlVGltZSA9ICcnLFxuXHRcdFx0XHRcdGFsdFNlcGFyYXRvciA9IHRwX2luc3QuX2RlZmF1bHRzLmFsdFNlcGFyYXRvciA/IHRwX2luc3QuX2RlZmF1bHRzLmFsdFNlcGFyYXRvciA6IHRwX2luc3QuX2RlZmF1bHRzLnNlcGFyYXRvcixcblx0XHRcdFx0XHRhbHRUaW1lU3VmZml4ID0gdHBfaW5zdC5fZGVmYXVsdHMuYWx0VGltZVN1ZmZpeCA/IHRwX2luc3QuX2RlZmF1bHRzLmFsdFRpbWVTdWZmaXggOiB0cF9pbnN0Ll9kZWZhdWx0cy50aW1lU3VmZml4LFxuXHRcdFx0XHRcdGFsdFRpbWVGb3JtYXQgPSB0cF9pbnN0Ll9kZWZhdWx0cy5hbHRUaW1lRm9ybWF0ICE9PSBudWxsID8gdHBfaW5zdC5fZGVmYXVsdHMuYWx0VGltZUZvcm1hdCA6IHRwX2luc3QuX2RlZmF1bHRzLnRpbWVGb3JtYXQ7XG5cblx0XHRcdFx0YWx0Rm9ybWF0dGVkRGF0ZVRpbWUgKz0gJC5kYXRlcGlja2VyLmZvcm1hdFRpbWUoYWx0VGltZUZvcm1hdCwgdHBfaW5zdCwgdHBfaW5zdC5fZGVmYXVsdHMpICsgYWx0VGltZVN1ZmZpeDtcblx0XHRcdFx0aWYgKCF0cF9pbnN0Ll9kZWZhdWx0cy50aW1lT25seSAmJiAhdHBfaW5zdC5fZGVmYXVsdHMuYWx0RmllbGRUaW1lT25seSAmJiBkYXRlICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0aWYgKHRwX2luc3QuX2RlZmF1bHRzLmFsdEZvcm1hdCkge1xuXHRcdFx0XHRcdFx0YWx0Rm9ybWF0dGVkRGF0ZVRpbWUgPSAkLmRhdGVwaWNrZXIuZm9ybWF0RGF0ZSh0cF9pbnN0Ll9kZWZhdWx0cy5hbHRGb3JtYXQsIGRhdGUsIGZvcm1hdENmZykgKyBhbHRTZXBhcmF0b3IgKyBhbHRGb3JtYXR0ZWREYXRlVGltZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRhbHRGb3JtYXR0ZWREYXRlVGltZSA9IHRwX2luc3QuZm9ybWF0dGVkRGF0ZSArIGFsdFNlcGFyYXRvciArIGFsdEZvcm1hdHRlZERhdGVUaW1lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQkKGFsdEZpZWxkKS52YWwoIGluc3QuaW5wdXQudmFsKCkgPyBhbHRGb3JtYXR0ZWREYXRlVGltZSA6IFwiXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdCQuZGF0ZXBpY2tlci5fYmFzZV91cGRhdGVBbHRlcm5hdGUoaW5zdCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qXG5cdCogT3ZlcnJpZGUga2V5IHVwIGV2ZW50IHRvIHN5bmMgbWFudWFsIGlucHV0IGNoYW5nZXMuXG5cdCovXG5cdCQuZGF0ZXBpY2tlci5fYmFzZV9kb0tleVVwID0gJC5kYXRlcGlja2VyLl9kb0tleVVwO1xuXHQkLmRhdGVwaWNrZXIuX2RvS2V5VXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHR2YXIgaW5zdCA9ICQuZGF0ZXBpY2tlci5fZ2V0SW5zdChldmVudC50YXJnZXQpLFxuXHRcdFx0dHBfaW5zdCA9ICQuZGF0ZXBpY2tlci5fZ2V0KGluc3QsICd0aW1lcGlja2VyJyk7XG5cblx0XHRpZiAodHBfaW5zdCkge1xuXHRcdFx0aWYgKHRwX2luc3QuX2RlZmF1bHRzLnRpbWVPbmx5ICYmIChpbnN0LmlucHV0LnZhbCgpICE9PSBpbnN0Lmxhc3RWYWwpKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0JC5kYXRlcGlja2VyLl91cGRhdGVEYXRlcGlja2VyKGluc3QpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHQkLnRpbWVwaWNrZXIubG9nKGVycik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gJC5kYXRlcGlja2VyLl9iYXNlX2RvS2V5VXAoZXZlbnQpO1xuXHR9O1xuXG5cdC8qXG5cdCogb3ZlcnJpZGUgXCJUb2RheVwiIGJ1dHRvbiB0byBhbHNvIGdyYWIgdGhlIHRpbWUgYW5kIHNldCBpdCB0byBpbnB1dCBmaWVsZC5cblx0Ki9cblx0JC5kYXRlcGlja2VyLl9iYXNlX2dvdG9Ub2RheSA9ICQuZGF0ZXBpY2tlci5fZ290b1RvZGF5O1xuXHQkLmRhdGVwaWNrZXIuX2dvdG9Ub2RheSA9IGZ1bmN0aW9uIChpZCkge1xuXHRcdHZhciBpbnN0ID0gdGhpcy5fZ2V0SW5zdCgkKGlkKVswXSk7XG5cdFx0dGhpcy5fYmFzZV9nb3RvVG9kYXkoaWQpO1xuXHRcdHZhciB0cF9pbnN0ID0gdGhpcy5fZ2V0KGluc3QsICd0aW1lcGlja2VyJyk7XG5cdFx0aWYgKCF0cF9pbnN0KSB7XG5cdFx0ICByZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIHR6b2Zmc2V0ID0gJC50aW1lcGlja2VyLnRpbWV6b25lT2Zmc2V0TnVtYmVyKHRwX2luc3QudGltZXpvbmUpO1xuXHRcdHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdG5vdy5zZXRNaW51dGVzKG5vdy5nZXRNaW51dGVzKCkgKyBub3cuZ2V0VGltZXpvbmVPZmZzZXQoKSArIHBhcnNlSW50KHR6b2Zmc2V0LCAxMCkpO1xuXHRcdHRoaXMuX3NldFRpbWUoaW5zdCwgbm93KTtcblx0XHR0aGlzLl9zZXREYXRlKGluc3QsIG5vdyk7XG5cdFx0dHBfaW5zdC5fb25TZWxlY3RIYW5kbGVyKCk7XG5cdH07XG5cblx0Lypcblx0KiBEaXNhYmxlICYgZW5hYmxlIHRoZSBUaW1lIGluIHRoZSBkYXRldGltZXBpY2tlclxuXHQqL1xuXHQkLmRhdGVwaWNrZXIuX2Rpc2FibGVUaW1lcGlja2VyRGF0ZXBpY2tlciA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0XHR2YXIgaW5zdCA9IHRoaXMuX2dldEluc3QodGFyZ2V0KTtcblx0XHRpZiAoIWluc3QpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgdHBfaW5zdCA9IHRoaXMuX2dldChpbnN0LCAndGltZXBpY2tlcicpO1xuXHRcdCQodGFyZ2V0KS5kYXRlcGlja2VyKCdnZXREYXRlJyk7IC8vIEluaXQgc2VsZWN0ZWRbWWVhcnxNb250aHxEYXldXG5cdFx0aWYgKHRwX2luc3QpIHtcblx0XHRcdGluc3Quc2V0dGluZ3Muc2hvd1RpbWVwaWNrZXIgPSBmYWxzZTtcblx0XHRcdHRwX2luc3QuX2RlZmF1bHRzLnNob3dUaW1lcGlja2VyID0gZmFsc2U7XG5cdFx0XHR0cF9pbnN0Ll91cGRhdGVEYXRlVGltZShpbnN0KTtcblx0XHR9XG5cdH07XG5cblx0JC5kYXRlcGlja2VyLl9lbmFibGVUaW1lcGlja2VyRGF0ZXBpY2tlciA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0XHR2YXIgaW5zdCA9IHRoaXMuX2dldEluc3QodGFyZ2V0KTtcblx0XHRpZiAoIWluc3QpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgdHBfaW5zdCA9IHRoaXMuX2dldChpbnN0LCAndGltZXBpY2tlcicpO1xuXHRcdCQodGFyZ2V0KS5kYXRlcGlja2VyKCdnZXREYXRlJyk7IC8vIEluaXQgc2VsZWN0ZWRbWWVhcnxNb250aHxEYXldXG5cdFx0aWYgKHRwX2luc3QpIHtcblx0XHRcdGluc3Quc2V0dGluZ3Muc2hvd1RpbWVwaWNrZXIgPSB0cnVlO1xuXHRcdFx0dHBfaW5zdC5fZGVmYXVsdHMuc2hvd1RpbWVwaWNrZXIgPSB0cnVlO1xuXHRcdFx0dHBfaW5zdC5fYWRkVGltZVBpY2tlcihpbnN0KTsgLy8gQ291bGQgYmUgZGlzYWJsZWQgb24gcGFnZSBsb2FkXG5cdFx0XHR0cF9pbnN0Ll91cGRhdGVEYXRlVGltZShpbnN0KTtcblx0XHR9XG5cdH07XG5cblx0Lypcblx0KiBDcmVhdGUgb3VyIG93biBzZXQgdGltZSBmdW5jdGlvblxuXHQqL1xuXHQkLmRhdGVwaWNrZXIuX3NldFRpbWUgPSBmdW5jdGlvbiAoaW5zdCwgZGF0ZSkge1xuXHRcdHZhciB0cF9pbnN0ID0gdGhpcy5fZ2V0KGluc3QsICd0aW1lcGlja2VyJyk7XG5cdFx0aWYgKHRwX2luc3QpIHtcblx0XHRcdHZhciBkZWZhdWx0cyA9IHRwX2luc3QuX2RlZmF1bHRzO1xuXG5cdFx0XHQvLyBjYWxsaW5nIF9zZXRUaW1lIHdpdGggbm8gZGF0ZSBzZXRzIHRpbWUgdG8gZGVmYXVsdHNcblx0XHRcdHRwX2luc3QuaG91ciA9IGRhdGUgPyBkYXRlLmdldEhvdXJzKCkgOiBkZWZhdWx0cy5ob3VyO1xuXHRcdFx0dHBfaW5zdC5taW51dGUgPSBkYXRlID8gZGF0ZS5nZXRNaW51dGVzKCkgOiBkZWZhdWx0cy5taW51dGU7XG5cdFx0XHR0cF9pbnN0LnNlY29uZCA9IGRhdGUgPyBkYXRlLmdldFNlY29uZHMoKSA6IGRlZmF1bHRzLnNlY29uZDtcblx0XHRcdHRwX2luc3QubWlsbGlzZWMgPSBkYXRlID8gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSA6IGRlZmF1bHRzLm1pbGxpc2VjO1xuXHRcdFx0dHBfaW5zdC5taWNyb3NlYyA9IGRhdGUgPyBkYXRlLmdldE1pY3Jvc2Vjb25kcygpIDogZGVmYXVsdHMubWljcm9zZWM7XG5cblx0XHRcdC8vY2hlY2sgaWYgd2l0aGluIG1pbi9tYXggdGltZXMuLlxuXHRcdFx0dHBfaW5zdC5fbGltaXRNaW5NYXhEYXRlVGltZShpbnN0LCB0cnVlKTtcblxuXHRcdFx0dHBfaW5zdC5fb25UaW1lQ2hhbmdlKCk7XG5cdFx0XHR0cF9pbnN0Ll91cGRhdGVEYXRlVGltZShpbnN0KTtcblx0XHR9XG5cdH07XG5cblx0Lypcblx0KiBDcmVhdGUgbmV3IHB1YmxpYyBtZXRob2QgdG8gc2V0IG9ubHkgdGltZSwgY2FsbGFibGUgYXMgJCgpLmRhdGVwaWNrZXIoJ3NldFRpbWUnLCBkYXRlKVxuXHQqL1xuXHQkLmRhdGVwaWNrZXIuX3NldFRpbWVEYXRlcGlja2VyID0gZnVuY3Rpb24gKHRhcmdldCwgZGF0ZSwgd2l0aERhdGUpIHtcblx0XHR2YXIgaW5zdCA9IHRoaXMuX2dldEluc3QodGFyZ2V0KTtcblx0XHRpZiAoIWluc3QpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgdHBfaW5zdCA9IHRoaXMuX2dldChpbnN0LCAndGltZXBpY2tlcicpO1xuXG5cdFx0aWYgKHRwX2luc3QpIHtcblx0XHRcdHRoaXMuX3NldERhdGVGcm9tRmllbGQoaW5zdCk7XG5cdFx0XHR2YXIgdHBfZGF0ZTtcblx0XHRcdGlmIChkYXRlKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgZGF0ZSA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0XHRcdHRwX2luc3QuX3BhcnNlVGltZShkYXRlLCB3aXRoRGF0ZSk7XG5cdFx0XHRcdFx0dHBfZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdFx0dHBfZGF0ZS5zZXRIb3Vycyh0cF9pbnN0LmhvdXIsIHRwX2luc3QubWludXRlLCB0cF9pbnN0LnNlY29uZCwgdHBfaW5zdC5taWxsaXNlYyk7XG5cdFx0XHRcdFx0dHBfZGF0ZS5zZXRNaWNyb3NlY29uZHModHBfaW5zdC5taWNyb3NlYyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dHBfZGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcblx0XHRcdFx0XHR0cF9kYXRlLnNldE1pY3Jvc2Vjb25kcyhkYXRlLmdldE1pY3Jvc2Vjb25kcygpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodHBfZGF0ZS50b1N0cmluZygpID09PSAnSW52YWxpZCBEYXRlJykge1xuXHRcdFx0XHRcdHRwX2RhdGUgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fc2V0VGltZShpbnN0LCB0cF9kYXRlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fTtcblxuXHQvKlxuXHQqIG92ZXJyaWRlIHNldERhdGUoKSB0byBhbGxvdyBzZXR0aW5nIHRpbWUgdG9vIHdpdGhpbiBEYXRlIG9iamVjdFxuXHQqL1xuXHQkLmRhdGVwaWNrZXIuX2Jhc2Vfc2V0RGF0ZURhdGVwaWNrZXIgPSAkLmRhdGVwaWNrZXIuX3NldERhdGVEYXRlcGlja2VyO1xuXHQkLmRhdGVwaWNrZXIuX3NldERhdGVEYXRlcGlja2VyID0gZnVuY3Rpb24gKHRhcmdldCwgX2RhdGUpIHtcblx0XHR2YXIgaW5zdCA9IHRoaXMuX2dldEluc3QodGFyZ2V0KTtcblx0XHR2YXIgZGF0ZSA9IF9kYXRlO1xuXHRcdGlmICghaW5zdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YoX2RhdGUpID09PSAnc3RyaW5nJykge1xuXHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKF9kYXRlKTtcblx0XHRcdGlmICghZGF0ZS5nZXRUaW1lKCkpIHtcblx0XHRcdFx0dGhpcy5fYmFzZV9zZXREYXRlRGF0ZXBpY2tlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0XHRkYXRlID0gJCh0YXJnZXQpLmRhdGVwaWNrZXIoJ2dldERhdGUnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgdHBfaW5zdCA9IHRoaXMuX2dldChpbnN0LCAndGltZXBpY2tlcicpO1xuXHRcdHZhciB0cF9kYXRlO1xuXHRcdGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0dHBfZGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcblx0XHRcdHRwX2RhdGUuc2V0TWljcm9zZWNvbmRzKGRhdGUuZ2V0TWljcm9zZWNvbmRzKCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0cF9kYXRlID0gZGF0ZTtcblx0XHR9XG5cblx0XHQvLyBUaGlzIGlzIGltcG9ydGFudCBpZiB5b3UgYXJlIHVzaW5nIHRoZSB0aW1lem9uZSBvcHRpb24sIGphdmFzY3JpcHQncyBEYXRlXG5cdFx0Ly8gb2JqZWN0IHdpbGwgb25seSByZXR1cm4gdGhlIHRpbWV6b25lIG9mZnNldCBmb3IgdGhlIGN1cnJlbnQgbG9jYWxlLCBzbyB3ZVxuXHRcdC8vIGFkanVzdCBpdCBhY2NvcmRpbmdseS4gIElmIG5vdCB1c2luZyB0aW1lem9uZSBvcHRpb24gdGhpcyB3b24ndCBtYXR0ZXIuLlxuXHRcdC8vIElmIGEgdGltZXpvbmUgaXMgZGlmZmVyZW50IGluIHRwLCBrZWVwIHRoZSB0aW1lem9uZSBhcyBpc1xuXHRcdGlmICh0cF9pbnN0ICYmIHRwX2RhdGUpIHtcblx0XHRcdC8vIGxvb2sgb3V0IGZvciBEU1QgaWYgdHogd2Fzbid0IHNwZWNpZmllZFxuXHRcdFx0aWYgKCF0cF9pbnN0LnN1cHBvcnQudGltZXpvbmUgJiYgdHBfaW5zdC5fZGVmYXVsdHMudGltZXpvbmUgPT09IG51bGwpIHtcblx0XHRcdFx0dHBfaW5zdC50aW1lem9uZSA9IHRwX2RhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIC0xO1xuXHRcdFx0fVxuXHRcdFx0ZGF0ZSA9ICQudGltZXBpY2tlci50aW1lem9uZUFkanVzdChkYXRlLCAkLnRpbWVwaWNrZXIudGltZXpvbmVPZmZzZXRTdHJpbmcoLWRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSksIHRwX2luc3QudGltZXpvbmUpO1xuXHRcdFx0dHBfZGF0ZSA9ICQudGltZXBpY2tlci50aW1lem9uZUFkanVzdCh0cF9kYXRlLCAkLnRpbWVwaWNrZXIudGltZXpvbmVPZmZzZXRTdHJpbmcoLXRwX2RhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSksIHRwX2luc3QudGltZXpvbmUpO1xuXHRcdH1cblxuXHRcdHRoaXMuX3VwZGF0ZURhdGVwaWNrZXIoaW5zdCk7XG5cdFx0dGhpcy5fYmFzZV9zZXREYXRlRGF0ZXBpY2tlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHRoaXMuX3NldFRpbWVEYXRlcGlja2VyKHRhcmdldCwgdHBfZGF0ZSwgdHJ1ZSk7XG5cdH07XG5cblx0Lypcblx0KiBvdmVycmlkZSBnZXREYXRlKCkgdG8gYWxsb3cgZ2V0dGluZyB0aW1lIHRvbyB3aXRoaW4gRGF0ZSBvYmplY3Rcblx0Ki9cblx0JC5kYXRlcGlja2VyLl9iYXNlX2dldERhdGVEYXRlcGlja2VyID0gJC5kYXRlcGlja2VyLl9nZXREYXRlRGF0ZXBpY2tlcjtcblx0JC5kYXRlcGlja2VyLl9nZXREYXRlRGF0ZXBpY2tlciA9IGZ1bmN0aW9uICh0YXJnZXQsIG5vRGVmYXVsdCkge1xuXHRcdHZhciBpbnN0ID0gdGhpcy5fZ2V0SW5zdCh0YXJnZXQpO1xuXHRcdGlmICghaW5zdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciB0cF9pbnN0ID0gdGhpcy5fZ2V0KGluc3QsICd0aW1lcGlja2VyJyk7XG5cblx0XHRpZiAodHBfaW5zdCkge1xuXHRcdFx0Ly8gaWYgaXQgaGFzbid0IHlldCBiZWVuIGRlZmluZWQsIGdyYWIgZnJvbSBmaWVsZFxuXHRcdFx0aWYgKGluc3QubGFzdFZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuX3NldERhdGVGcm9tRmllbGQoaW5zdCwgbm9EZWZhdWx0KTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGRhdGUgPSB0aGlzLl9nZXREYXRlKGluc3QpO1xuXG5cdFx0XHR2YXIgY3VyckRUID0gbnVsbDtcblxuXHRcdFx0aWYgKHRwX2luc3QuJGFsdElucHV0ICYmIHRwX2luc3QuX2RlZmF1bHRzLmFsdEZpZWxkVGltZU9ubHkpIHtcblx0XHRcdFx0Y3VyckRUID0gdHBfaW5zdC4kaW5wdXQudmFsKCkgKyAnICcgKyB0cF9pbnN0LiRhbHRJbnB1dC52YWwoKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKHRwX2luc3QuJGlucHV0LmdldCgwKS50YWdOYW1lICE9PSAnSU5QVVQnICYmIHRwX2luc3QuJGFsdElucHV0KSB7XG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBpbiBjYXNlIHRoZSBkYXRldGltZXBpY2tlciBoYXMgYmVlbiBhcHBsaWVkIHRvIGEgbm9uLWlucHV0IHRhZyBmb3IgaW5saW5lIFVJLFxuXHRcdFx0XHQgKiBhbmQgdGhlIHVzZXIgaGFzIG5vdCBjb25maWd1cmVkIHRoZSBwbHVnaW4gdG8gZGlzcGxheSBvbmx5IHRpbWUgaW4gYWx0SW5wdXQsXG5cdFx0XHRcdCAqIHBpY2sgY3VycmVudCBkYXRlIHRpbWUgZnJvbSB0aGUgYWx0SW5wdXQgKGFuZCBob3BlIGZvciB0aGUgYmVzdCwgZm9yIG5vdywgdW50aWwgXCJFUjFcIiBpcyBhcHBsaWVkKVxuXHRcdFx0XHQgKlxuXHRcdFx0XHQgKiBAdG9kbyBFUjEuIFNpbmNlIGFsdElucHV0IGNhbiBoYXZlIGEgdG90YWxseSBkaWZmZXJlbmNlIGZvcm1hdCwgY29udmVydCBpdCB0byBzdGFuZGFyZCBmb3JtYXQgYnkgcmVhZGluZyBpbnB1dCBmb3JtYXQgZnJvbSBcImFsdEZvcm1hdFwiIGFuZCBcImFsdFRpbWVGb3JtYXRcIiBvcHRpb24gdmFsdWVzXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRjdXJyRFQgPSB0cF9pbnN0LiRhbHRJbnB1dC52YWwoKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjdXJyRFQgPSB0cF9pbnN0LiRpbnB1dC52YWwoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGRhdGUgJiYgdHBfaW5zdC5fcGFyc2VUaW1lKGN1cnJEVCwgIWluc3Quc2V0dGluZ3MudGltZU9ubHkpKSB7XG5cdFx0XHRcdGRhdGUuc2V0SG91cnModHBfaW5zdC5ob3VyLCB0cF9pbnN0Lm1pbnV0ZSwgdHBfaW5zdC5zZWNvbmQsIHRwX2luc3QubWlsbGlzZWMpO1xuXHRcdFx0XHRkYXRlLnNldE1pY3Jvc2Vjb25kcyh0cF9pbnN0Lm1pY3Jvc2VjKTtcblxuXHRcdFx0XHQvLyBUaGlzIGlzIGltcG9ydGFudCBpZiB5b3UgYXJlIHVzaW5nIHRoZSB0aW1lem9uZSBvcHRpb24sIGphdmFzY3JpcHQncyBEYXRlXG5cdFx0XHRcdC8vIG9iamVjdCB3aWxsIG9ubHkgcmV0dXJuIHRoZSB0aW1lem9uZSBvZmZzZXQgZm9yIHRoZSBjdXJyZW50IGxvY2FsZSwgc28gd2Vcblx0XHRcdFx0Ly8gYWRqdXN0IGl0IGFjY29yZGluZ2x5LiAgSWYgbm90IHVzaW5nIHRpbWV6b25lIG9wdGlvbiB0aGlzIHdvbid0IG1hdHRlci4uXG5cdFx0XHRcdGlmICh0cF9pbnN0LnRpbWV6b25lICE9IG51bGwpIHtcblx0XHRcdFx0XHQvLyBsb29rIG91dCBmb3IgRFNUIGlmIHR6IHdhc24ndCBzcGVjaWZpZWRcblx0XHRcdFx0XHRpZiAoIXRwX2luc3Quc3VwcG9ydC50aW1lem9uZSAmJiB0cF9pbnN0Ll9kZWZhdWx0cy50aW1lem9uZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0dHBfaW5zdC50aW1lem9uZSA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkYXRlID0gJC50aW1lcGlja2VyLnRpbWV6b25lQWRqdXN0KGRhdGUsIHRwX2luc3QudGltZXpvbmUsICQudGltZXBpY2tlci50aW1lem9uZU9mZnNldFN0cmluZygtZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBkYXRlO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fYmFzZV9nZXREYXRlRGF0ZXBpY2tlcih0YXJnZXQsIG5vRGVmYXVsdCk7XG5cdH07XG5cblx0Lypcblx0KiBvdmVycmlkZSBwYXJzZURhdGUoKSBiZWNhdXNlIFVJIDEuOC4xNCB0aHJvd3MgYW4gZXJyb3IgYWJvdXQgXCJFeHRyYSBjaGFyYWN0ZXJzXCJcblx0KiBBbiBvcHRpb24gaW4gZGF0YXBpY2tlciB0byBpZ25vcmUgZXh0cmEgZm9ybWF0IGNoYXJhY3RlcnMgd291bGQgYmUgbmljZXIuXG5cdCovXG5cdCQuZGF0ZXBpY2tlci5fYmFzZV9wYXJzZURhdGUgPSAkLmRhdGVwaWNrZXIucGFyc2VEYXRlO1xuXHQkLmRhdGVwaWNrZXIucGFyc2VEYXRlID0gZnVuY3Rpb24gKGZvcm1hdCwgdmFsdWUsIHNldHRpbmdzKSB7XG5cdFx0dmFyIGRhdGU7XG5cdFx0dHJ5IHtcblx0XHRcdGRhdGUgPSB0aGlzLl9iYXNlX3BhcnNlRGF0ZShmb3JtYXQsIHZhbHVlLCBzZXR0aW5ncyk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHQvLyBIYWNrISAgVGhlIGVycm9yIG1lc3NhZ2UgZW5kcyB3aXRoIGEgY29sb24sIGEgc3BhY2UsIGFuZFxuXHRcdFx0Ly8gdGhlIFwiZXh0cmFcIiBjaGFyYWN0ZXJzLiAgV2UgcmVseSBvbiB0aGF0IGluc3RlYWQgb2Zcblx0XHRcdC8vIGF0dGVtcHRpbmcgdG8gcGVyZmVjdGx5IHJlcHJvZHVjZSB0aGUgcGFyc2luZyBhbGdvcml0aG0uXG5cdFx0XHRpZiAoZXJyLmluZGV4T2YoXCI6XCIpID49IDApIHtcblx0XHRcdFx0ZGF0ZSA9IHRoaXMuX2Jhc2VfcGFyc2VEYXRlKGZvcm1hdCwgdmFsdWUuc3Vic3RyaW5nKDAsIHZhbHVlLmxlbmd0aCAtIChlcnIubGVuZ3RoIC0gZXJyLmluZGV4T2YoJzonKSAtIDIpKSwgc2V0dGluZ3MpO1xuXHRcdFx0XHQkLnRpbWVwaWNrZXIubG9nKFwiRXJyb3IgcGFyc2luZyB0aGUgZGF0ZSBzdHJpbmc6IFwiICsgZXJyICsgXCJcXG5kYXRlIHN0cmluZyA9IFwiICsgdmFsdWUgKyBcIlxcbmRhdGUgZm9ybWF0ID0gXCIgKyBmb3JtYXQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgZXJyO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZGF0ZTtcblx0fTtcblxuXHQvKlxuXHQqIG92ZXJyaWRlIGZvcm1hdERhdGUgdG8gc2V0IGRhdGUgd2l0aCB0aW1lIHRvIHRoZSBpbnB1dFxuXHQqL1xuXHQkLmRhdGVwaWNrZXIuX2Jhc2VfZm9ybWF0RGF0ZSA9ICQuZGF0ZXBpY2tlci5fZm9ybWF0RGF0ZTtcblx0JC5kYXRlcGlja2VyLl9mb3JtYXREYXRlID0gZnVuY3Rpb24gKGluc3QsIGRheSwgbW9udGgsIHllYXIpIHtcblx0XHR2YXIgdHBfaW5zdCA9IHRoaXMuX2dldChpbnN0LCAndGltZXBpY2tlcicpO1xuXHRcdGlmICh0cF9pbnN0KSB7XG5cdFx0XHR0cF9pbnN0Ll91cGRhdGVEYXRlVGltZShpbnN0KTtcblx0XHRcdHJldHVybiB0cF9pbnN0LiRpbnB1dC52YWwoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2Jhc2VfZm9ybWF0RGF0ZShpbnN0KTtcblx0fTtcblxuXHQvKlxuXHQqIG92ZXJyaWRlIG9wdGlvbnMgc2V0dGVyIHRvIGFkZCB0aW1lIHRvIG1heERhdGUoVGltZSkgYW5kIG1pbkRhdGUoVGltZSkuIE1heERhdGVcblx0Ki9cblx0JC5kYXRlcGlja2VyLl9iYXNlX29wdGlvbkRhdGVwaWNrZXIgPSAkLmRhdGVwaWNrZXIuX29wdGlvbkRhdGVwaWNrZXI7XG5cdCQuZGF0ZXBpY2tlci5fb3B0aW9uRGF0ZXBpY2tlciA9IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XG5cdFx0dmFyIGluc3QgPSB0aGlzLl9nZXRJbnN0KHRhcmdldCksXG5cdFx0XHRuYW1lX2Nsb25lO1xuXHRcdGlmICghaW5zdCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0dmFyIHRwX2luc3QgPSB0aGlzLl9nZXQoaW5zdCwgJ3RpbWVwaWNrZXInKTtcblx0XHRpZiAodHBfaW5zdCkge1xuXHRcdFx0dmFyIG1pbiA9IG51bGwsXG5cdFx0XHRcdG1heCA9IG51bGwsXG5cdFx0XHRcdG9uc2VsZWN0ID0gbnVsbCxcblx0XHRcdFx0b3ZlcnJpZGVzID0gdHBfaW5zdC5fZGVmYXVsdHMuZXZudHMsXG5cdFx0XHRcdGZucyA9IHt9LFxuXHRcdFx0XHRwcm9wLFxuXHRcdFx0XHRyZXQsXG5cdFx0XHRcdG9sZFZhbCxcblx0XHRcdFx0JHRhcmdldDtcblx0XHRcdGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHsgLy8gaWYgbWluL21heCB3YXMgc2V0IHdpdGggdGhlIHN0cmluZ1xuXHRcdFx0XHRpZiAobmFtZSA9PT0gJ21pbkRhdGUnIHx8IG5hbWUgPT09ICdtaW5EYXRlVGltZScpIHtcblx0XHRcdFx0XHRtaW4gPSB2YWx1ZTtcblx0XHRcdFx0fSBlbHNlIGlmIChuYW1lID09PSAnbWF4RGF0ZScgfHwgbmFtZSA9PT0gJ21heERhdGVUaW1lJykge1xuXHRcdFx0XHRcdG1heCA9IHZhbHVlO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG5hbWUgPT09ICdvblNlbGVjdCcpIHtcblx0XHRcdFx0XHRvbnNlbGVjdCA9IHZhbHVlO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG92ZXJyaWRlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgKHZhbHVlKSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHJldHVybiBvdmVycmlkZXNbbmFtZV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZuc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0XHRcdG5hbWVfY2xvbmUgPSB7fTsgLy9lbXB0eSByZXN1bHRzIGluIGV4aXRpbmcgZnVuY3Rpb24gYWZ0ZXIgb3ZlcnJpZGVzIHVwZGF0ZWRcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHsgLy9pZiBtaW4vbWF4IHdhcyBzZXQgd2l0aCB0aGUgSlNPTlxuXHRcdFx0XHRpZiAobmFtZS5taW5EYXRlKSB7XG5cdFx0XHRcdFx0bWluID0gbmFtZS5taW5EYXRlO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG5hbWUubWluRGF0ZVRpbWUpIHtcblx0XHRcdFx0XHRtaW4gPSBuYW1lLm1pbkRhdGVUaW1lO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG5hbWUubWF4RGF0ZSkge1xuXHRcdFx0XHRcdG1heCA9IG5hbWUubWF4RGF0ZTtcblx0XHRcdFx0fSBlbHNlIGlmIChuYW1lLm1heERhdGVUaW1lKSB7XG5cdFx0XHRcdFx0bWF4ID0gbmFtZS5tYXhEYXRlVGltZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKHByb3AgaW4gb3ZlcnJpZGVzKSB7XG5cdFx0XHRcdFx0aWYgKG92ZXJyaWRlcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiBuYW1lW3Byb3BdKSB7XG5cdFx0XHRcdFx0XHRmbnNbcHJvcF0gPSBuYW1lW3Byb3BdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Zm9yIChwcm9wIGluIGZucykge1xuXHRcdFx0XHRpZiAoZm5zLmhhc093blByb3BlcnR5KHByb3ApKSB7XG5cdFx0XHRcdFx0b3ZlcnJpZGVzW3Byb3BdID0gZm5zW3Byb3BdO1xuXHRcdFx0XHRcdGlmICghbmFtZV9jbG9uZSkgeyBuYW1lX2Nsb25lID0gJC5leHRlbmQoe30sIG5hbWUpOyB9XG5cdFx0XHRcdFx0ZGVsZXRlIG5hbWVfY2xvbmVbcHJvcF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChuYW1lX2Nsb25lICYmIGlzRW1wdHlPYmplY3QobmFtZV9jbG9uZSkpIHsgcmV0dXJuOyB9XG5cdFx0XHRpZiAobWluKSB7IC8vaWYgbWluIHdhcyBzZXRcblx0XHRcdFx0aWYgKG1pbiA9PT0gMCkge1xuXHRcdFx0XHRcdG1pbiA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWluID0gbmV3IERhdGUobWluKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0cF9pbnN0Ll9kZWZhdWx0cy5taW5EYXRlID0gbWluO1xuXHRcdFx0XHR0cF9pbnN0Ll9kZWZhdWx0cy5taW5EYXRlVGltZSA9IG1pbjtcblx0XHRcdH0gZWxzZSBpZiAobWF4KSB7IC8vaWYgbWF4IHdhcyBzZXRcblx0XHRcdFx0aWYgKG1heCA9PT0gMCkge1xuXHRcdFx0XHRcdG1heCA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWF4ID0gbmV3IERhdGUobWF4KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0cF9pbnN0Ll9kZWZhdWx0cy5tYXhEYXRlID0gbWF4O1xuXHRcdFx0XHR0cF9pbnN0Ll9kZWZhdWx0cy5tYXhEYXRlVGltZSA9IG1heDtcblx0XHRcdH0gZWxzZSBpZiAob25zZWxlY3QpIHtcblx0XHRcdFx0dHBfaW5zdC5fZGVmYXVsdHMub25TZWxlY3QgPSBvbnNlbGVjdDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRGF0ZXBpY2tlciB3aWxsIG92ZXJyaWRlIG91ciBkYXRlIHdoZW4gd2UgY2FsbCBfYmFzZV9vcHRpb25EYXRlcGlja2VyIHdoZW5cblx0XHRcdC8vIGNhbGxpbmcgbWluRGF0ZS9tYXhEYXRlLCBzbyB3ZSB3aWxsIGZpcnN0IGdyYWIgdGhlIHZhbHVlLCBjYWxsXG5cdFx0XHQvLyBfYmFzZV9vcHRpb25EYXRlcGlja2VyLCB0aGVuIHNldCBvdXIgdmFsdWUgYmFjay5cblx0XHRcdGlmKG1pbiB8fCBtYXgpe1xuXHRcdFx0XHQkdGFyZ2V0ID0gJCh0YXJnZXQpO1xuXHRcdFx0XHRvbGRWYWwgPSAkdGFyZ2V0LmRhdGV0aW1lcGlja2VyKCdnZXREYXRlJyk7XG5cdFx0XHRcdHJldCA9IHRoaXMuX2Jhc2Vfb3B0aW9uRGF0ZXBpY2tlci5jYWxsKCQuZGF0ZXBpY2tlciwgdGFyZ2V0LCBuYW1lX2Nsb25lIHx8IG5hbWUsIHZhbHVlKTtcblx0XHRcdFx0JHRhcmdldC5kYXRldGltZXBpY2tlcignc2V0RGF0ZScsIG9sZFZhbCk7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fYmFzZV9vcHRpb25EYXRlcGlja2VyLmNhbGwoJC5kYXRlcGlja2VyLCB0YXJnZXQsIG5hbWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fYmFzZV9vcHRpb25EYXRlcGlja2VyLmNhbGwoJC5kYXRlcGlja2VyLCB0YXJnZXQsIG5hbWVfY2xvbmUgfHwgbmFtZSwgdmFsdWUpO1xuXHR9O1xuXG5cdC8qXG5cdCogalF1ZXJ5IGlzRW1wdHlPYmplY3QgZG9lcyBub3QgY2hlY2sgaGFzT3duUHJvcGVydHkgLSBpZiBzb21lb25lIGhhcyBhZGRlZCB0byB0aGUgb2JqZWN0IHByb3RvdHlwZSxcblx0KiBpdCB3aWxsIHJldHVybiBmYWxzZSBmb3IgYWxsIG9iamVjdHNcblx0Ki9cblx0dmFyIGlzRW1wdHlPYmplY3QgPSBmdW5jdGlvbiAob2JqKSB7XG5cdFx0dmFyIHByb3A7XG5cdFx0Zm9yIChwcm9wIGluIG9iaikge1xuXHRcdFx0aWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXG5cdC8qXG5cdCogalF1ZXJ5IGV4dGVuZCBub3cgaWdub3JlcyBudWxscyFcblx0Ki9cblx0dmFyIGV4dGVuZFJlbW92ZSA9IGZ1bmN0aW9uICh0YXJnZXQsIHByb3BzKSB7XG5cdFx0JC5leHRlbmQodGFyZ2V0LCBwcm9wcyk7XG5cdFx0Zm9yICh2YXIgbmFtZSBpbiBwcm9wcykge1xuXHRcdFx0aWYgKHByb3BzW25hbWVdID09PSBudWxsIHx8IHByb3BzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGFyZ2V0W25hbWVdID0gcHJvcHNbbmFtZV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0YXJnZXQ7XG5cdH07XG5cblx0Lypcblx0KiBEZXRlcm1pbmUgYnkgdGhlIHRpbWUgZm9ybWF0IHdoaWNoIHVuaXRzIGFyZSBzdXBwb3J0ZWRcblx0KiBSZXR1cm5zIGFuIG9iamVjdCBvZiBib29sZWFucyBmb3IgZWFjaCB1bml0XG5cdCovXG5cdHZhciBkZXRlY3RTdXBwb3J0ID0gZnVuY3Rpb24gKHRpbWVGb3JtYXQpIHtcblx0XHR2YXIgdGYgPSB0aW1lRm9ybWF0LnJlcGxhY2UoLycuKj8nL2csICcnKS50b0xvd2VyQ2FzZSgpLCAvLyByZW1vdmVzIGxpdGVyYWxzXG5cdFx0XHRpc0luID0gZnVuY3Rpb24gKGYsIHQpIHsgLy8gZG9lcyB0aGUgZm9ybWF0IGNvbnRhaW4gdGhlIHRva2VuP1xuXHRcdFx0XHRcdHJldHVybiBmLmluZGV4T2YodCkgIT09IC0xID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdFx0XHR9O1xuXHRcdHJldHVybiB7XG5cdFx0XHRcdGhvdXI6IGlzSW4odGYsICdoJyksXG5cdFx0XHRcdG1pbnV0ZTogaXNJbih0ZiwgJ20nKSxcblx0XHRcdFx0c2Vjb25kOiBpc0luKHRmLCAncycpLFxuXHRcdFx0XHRtaWxsaXNlYzogaXNJbih0ZiwgJ2wnKSxcblx0XHRcdFx0bWljcm9zZWM6IGlzSW4odGYsICdjJyksXG5cdFx0XHRcdHRpbWV6b25lOiBpc0luKHRmLCAneicpLFxuXHRcdFx0XHRhbXBtOiBpc0luKHRmLCAndCcpICYmIGlzSW4odGltZUZvcm1hdCwgJ2gnKSxcblx0XHRcdFx0aXNvODYwMTogaXNJbih0aW1lRm9ybWF0LCAnWicpXG5cdFx0XHR9O1xuXHR9O1xuXG5cdC8qXG5cdCogQ29udmVydHMgMjQgaG91ciBmb3JtYXQgaW50byAxMiBob3VyXG5cdCogUmV0dXJucyAxMiBob3VyIHdpdGhvdXQgbGVhZGluZyAwXG5cdCovXG5cdHZhciBjb252ZXJ0MjR0bzEyID0gZnVuY3Rpb24gKGhvdXIpIHtcblx0XHRob3VyICU9IDEyO1xuXG5cdFx0aWYgKGhvdXIgPT09IDApIHtcblx0XHRcdGhvdXIgPSAxMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gU3RyaW5nKGhvdXIpO1xuXHR9O1xuXG5cdHZhciBjb21wdXRlRWZmZWN0aXZlU2V0dGluZyA9IGZ1bmN0aW9uIChzZXR0aW5ncywgcHJvcGVydHkpIHtcblx0XHRyZXR1cm4gc2V0dGluZ3MgJiYgc2V0dGluZ3NbcHJvcGVydHldID8gc2V0dGluZ3NbcHJvcGVydHldIDogJC50aW1lcGlja2VyLl9kZWZhdWx0c1twcm9wZXJ0eV07XG5cdH07XG5cblx0Lypcblx0KiBTcGxpdHMgZGF0ZXRpbWUgc3RyaW5nIGludG8gZGF0ZSBhbmQgdGltZSBzdWJzdHJpbmdzLlxuXHQqIFRocm93cyBleGNlcHRpb24gd2hlbiBkYXRlIGNhbid0IGJlIHBhcnNlZFxuXHQqIFJldHVybnMge2RhdGVTdHJpbmc6IGRhdGVTdHJpbmcsIHRpbWVTdHJpbmc6IHRpbWVTdHJpbmd9XG5cdCovXG5cdHZhciBzcGxpdERhdGVUaW1lID0gZnVuY3Rpb24gKGRhdGVUaW1lU3RyaW5nLCB0aW1lU2V0dGluZ3MpIHtcblx0XHQvLyBUaGUgaWRlYSBpcyB0byBnZXQgdGhlIG51bWJlciBzZXBhcmF0b3Igb2NjdXJyZW5jZXMgaW4gZGF0ZXRpbWUgYW5kIHRoZSB0aW1lIGZvcm1hdCByZXF1ZXN0ZWQgKHNpbmNlIHRpbWUgaGFzXG5cdFx0Ly8gZmV3ZXIgdW5rbm93bnMsIG1vc3RseSBudW1iZXJzIGFuZCBhbS9wbSkuIFdlIHdpbGwgdXNlIHRoZSB0aW1lIHBhdHRlcm4gdG8gc3BsaXQuXG5cdFx0dmFyIHNlcGFyYXRvciA9IGNvbXB1dGVFZmZlY3RpdmVTZXR0aW5nKHRpbWVTZXR0aW5ncywgJ3NlcGFyYXRvcicpLFxuXHRcdFx0Zm9ybWF0ID0gY29tcHV0ZUVmZmVjdGl2ZVNldHRpbmcodGltZVNldHRpbmdzLCAndGltZUZvcm1hdCcpLFxuXHRcdFx0dGltZVBhcnRzID0gZm9ybWF0LnNwbGl0KHNlcGFyYXRvciksIC8vIGhvdyBtYW55IG9jY3VycmVuY2VzIG9mIHNlcGFyYXRvciBtYXkgYmUgaW4gb3VyIGZvcm1hdD9cblx0XHRcdHRpbWVQYXJ0c0xlbiA9IHRpbWVQYXJ0cy5sZW5ndGgsXG5cdFx0XHRhbGxQYXJ0cyA9IGRhdGVUaW1lU3RyaW5nLnNwbGl0KHNlcGFyYXRvciksXG5cdFx0XHRhbGxQYXJ0c0xlbiA9IGFsbFBhcnRzLmxlbmd0aDtcblxuXHRcdGlmIChhbGxQYXJ0c0xlbiA+IDEpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGVTdHJpbmc6IGFsbFBhcnRzLnNwbGljZSgwLCBhbGxQYXJ0c0xlbiAtIHRpbWVQYXJ0c0xlbikuam9pbihzZXBhcmF0b3IpLFxuXHRcdFx0XHR0aW1lU3RyaW5nOiBhbGxQYXJ0cy5zcGxpY2UoMCwgdGltZVBhcnRzTGVuKS5qb2luKHNlcGFyYXRvcilcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGRhdGVTdHJpbmc6IGRhdGVUaW1lU3RyaW5nLFxuXHRcdFx0dGltZVN0cmluZzogJydcblx0XHR9O1xuXHR9O1xuXG5cdC8qXG5cdCogSW50ZXJuYWwgZnVuY3Rpb24gdG8gcGFyc2UgZGF0ZXRpbWUgaW50ZXJ2YWxcblx0KiBSZXR1cm5zOiB7ZGF0ZTogRGF0ZSwgdGltZU9iajogT2JqZWN0fSwgd2hlcmVcblx0KiAgIGRhdGUgLSBwYXJzZWQgZGF0ZSB3aXRob3V0IHRpbWUgKHR5cGUgRGF0ZSlcblx0KiAgIHRpbWVPYmogPSB7aG91cjogLCBtaW51dGU6ICwgc2Vjb25kOiAsIG1pbGxpc2VjOiAsIG1pY3Jvc2VjOiB9IC0gcGFyc2VkIHRpbWUuIE9wdGlvbmFsXG5cdCovXG5cdHZhciBwYXJzZURhdGVUaW1lSW50ZXJuYWwgPSBmdW5jdGlvbiAoZGF0ZUZvcm1hdCwgdGltZUZvcm1hdCwgZGF0ZVRpbWVTdHJpbmcsIGRhdGVTZXR0aW5ncywgdGltZVNldHRpbmdzKSB7XG5cdFx0dmFyIGRhdGUsXG5cdFx0XHRwYXJ0cyxcblx0XHRcdHBhcnNlZFRpbWU7XG5cblx0XHRwYXJ0cyA9IHNwbGl0RGF0ZVRpbWUoZGF0ZVRpbWVTdHJpbmcsIHRpbWVTZXR0aW5ncyk7XG5cdFx0ZGF0ZSA9ICQuZGF0ZXBpY2tlci5fYmFzZV9wYXJzZURhdGUoZGF0ZUZvcm1hdCwgcGFydHMuZGF0ZVN0cmluZywgZGF0ZVNldHRpbmdzKTtcblxuXHRcdGlmIChwYXJ0cy50aW1lU3RyaW5nID09PSAnJykge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0ZTogZGF0ZVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRwYXJzZWRUaW1lID0gJC5kYXRlcGlja2VyLnBhcnNlVGltZSh0aW1lRm9ybWF0LCBwYXJ0cy50aW1lU3RyaW5nLCB0aW1lU2V0dGluZ3MpO1xuXG5cdFx0aWYgKCFwYXJzZWRUaW1lKSB7XG5cdFx0XHR0aHJvdyAnV3JvbmcgdGltZSBmb3JtYXQnO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRkYXRlOiBkYXRlLFxuXHRcdFx0dGltZU9iajogcGFyc2VkVGltZVxuXHRcdH07XG5cdH07XG5cblx0Lypcblx0KiBJbnRlcm5hbCBmdW5jdGlvbiB0byBzZXQgdGltZXpvbmVfc2VsZWN0IHRvIHRoZSBsb2NhbCB0aW1lem9uZVxuXHQqL1xuXHR2YXIgc2VsZWN0TG9jYWxUaW1lem9uZSA9IGZ1bmN0aW9uICh0cF9pbnN0LCBkYXRlKSB7XG5cdFx0aWYgKHRwX2luc3QgJiYgdHBfaW5zdC50aW1lem9uZV9zZWxlY3QpIHtcblx0XHRcdHZhciBub3cgPSBkYXRlIHx8IG5ldyBEYXRlKCk7XG5cdFx0XHR0cF9pbnN0LnRpbWV6b25lX3NlbGVjdC52YWwoLW5vdy5nZXRUaW1lem9uZU9mZnNldCgpKTtcblx0XHR9XG5cdH07XG5cblx0Lypcblx0KiBDcmVhdGUgYSBTaW5nbGV0b24gSW5zdGFuY2Vcblx0Ki9cblx0JC50aW1lcGlja2VyID0gbmV3IFRpbWVwaWNrZXIoKTtcblxuXHQvKipcblx0ICogR2V0IHRoZSB0aW1lem9uZSBvZmZzZXQgYXMgc3RyaW5nIGZyb20gYSBkYXRlIG9iamVjdCAoZWcgJyswNTMwJyBmb3IgVVRDKzUuNSlcblx0ICogQHBhcmFtIHtudW1iZXJ9IHR6TWludXRlcyBpZiBub3QgYSBudW1iZXIsIGxlc3MgdGhhbiAtNzIwICgtMTIwMCksIG9yIGdyZWF0ZXIgdGhhbiA4NDAgKCsxNDAwKSB0aGlzIHZhbHVlIGlzIHJldHVybmVkXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNvODYwMSBpZiB0cnVlIGZvcm1hdHMgaW4gYWNjb3JkYW5jZSB0byBpc284NjAxIFwiKzEyOjQ1XCJcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0JC50aW1lcGlja2VyLnRpbWV6b25lT2Zmc2V0U3RyaW5nID0gZnVuY3Rpb24gKHR6TWludXRlcywgaXNvODYwMSkge1xuXHRcdGlmIChpc05hTih0ek1pbnV0ZXMpIHx8IHR6TWludXRlcyA+IDg0MCB8fCB0ek1pbnV0ZXMgPCAtNzIwKSB7XG5cdFx0XHRyZXR1cm4gdHpNaW51dGVzO1xuXHRcdH1cblxuXHRcdHZhciBvZmYgPSB0ek1pbnV0ZXMsXG5cdFx0XHRtaW51dGVzID0gb2ZmICUgNjAsXG5cdFx0XHRob3VycyA9IChvZmYgLSBtaW51dGVzKSAvIDYwLFxuXHRcdFx0aXNvID0gaXNvODYwMSA/ICc6JyA6ICcnLFxuXHRcdFx0dHogPSAob2ZmID49IDAgPyAnKycgOiAnLScpICsgKCcwJyArIE1hdGguYWJzKGhvdXJzKSkuc2xpY2UoLTIpICsgaXNvICsgKCcwJyArIE1hdGguYWJzKG1pbnV0ZXMpKS5zbGljZSgtMik7XG5cblx0XHRpZiAodHogPT09ICcrMDA6MDAnKSB7XG5cdFx0XHRyZXR1cm4gJ1onO1xuXHRcdH1cblx0XHRyZXR1cm4gdHo7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbnVtYmVyIGluIG1pbnV0ZXMgdGhhdCByZXByZXNlbnRzIGEgdGltZXpvbmUgc3RyaW5nXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gdHpTdHJpbmcgZm9ybWF0dGVkIGxpa2UgXCIrMDUwMFwiLCBcIi0xMjQ1XCIsIFwiWlwiXG5cdCAqIEByZXR1cm4ge251bWJlcn0gdGhlIG9mZnNldCBtaW51dGVzIG9yIHRoZSBvcmlnaW5hbCBzdHJpbmcgaWYgaXQgZG9lc24ndCBtYXRjaCBleHBlY3RhdGlvbnNcblx0ICovXG5cdCQudGltZXBpY2tlci50aW1lem9uZU9mZnNldE51bWJlciA9IGZ1bmN0aW9uICh0elN0cmluZykge1xuXHRcdHZhciBub3JtYWxpemVkID0gdHpTdHJpbmcudG9TdHJpbmcoKS5yZXBsYWNlKCc6JywgJycpOyAvLyBleGN1c2UgYW55IGlzbzg2MDEsIGVuZCB1cCB3aXRoIFwiKzEyNDVcIlxuXG5cdFx0aWYgKG5vcm1hbGl6ZWQudG9VcHBlckNhc2UoKSA9PT0gJ1onKSB7IC8vIGlmIGlzbzg2MDEgd2l0aCBaLCBpdHMgMCBtaW51dGUgb2Zmc2V0XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRpZiAoIS9eKFxcLXxcXCspXFxkezR9JC8udGVzdChub3JtYWxpemVkKSkgeyAvLyBwb3NzaWJseSBhIHVzZXIgZGVmaW5lZCB0eiwgc28ganVzdCBnaXZlIGl0IGJhY2tcblx0XHRcdHJldHVybiBwYXJzZUludCh0elN0cmluZywgMTApO1xuXHRcdH1cblxuXHRcdHJldHVybiAoKG5vcm1hbGl6ZWQuc3Vic3RyKDAsIDEpID09PSAnLScgPyAtMSA6IDEpICogLy8gcGx1cyBvciBtaW51c1xuXHRcdFx0XHRcdCgocGFyc2VJbnQobm9ybWFsaXplZC5zdWJzdHIoMSwgMiksIDEwKSAqIDYwKSArIC8vIGhvdXJzIChjb252ZXJ0ZWQgdG8gbWludXRlcylcblx0XHRcdFx0XHRwYXJzZUludChub3JtYWxpemVkLnN1YnN0cigzLCAyKSwgMTApKSk7IC8vIG1pbnV0ZXNcblx0fTtcblxuXHQvKipcblx0ICogTm8gd2F5IHRvIHNldCB0aW1lem9uZSBpbiBqcyBEYXRlLCBzbyB3ZSBtdXN0IGFkanVzdCB0aGUgbWludXRlcyB0byBjb21wZW5zYXRlLiAodGhpbmsgc2V0RGF0ZSwgZ2V0RGF0ZSlcblx0ICogQHBhcmFtICB7RGF0ZX0gZGF0ZVxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IGZyb21UaW1lem9uZSBmb3JtYXR0ZWQgbGlrZSBcIiswNTAwXCIsIFwiLTEyNDVcIlxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IHRvVGltZXpvbmUgZm9ybWF0dGVkIGxpa2UgXCIrMDUwMFwiLCBcIi0xMjQ1XCJcblx0ICogQHJldHVybiB7RGF0ZX1cblx0ICovXG5cdCQudGltZXBpY2tlci50aW1lem9uZUFkanVzdCA9IGZ1bmN0aW9uIChkYXRlLCBmcm9tVGltZXpvbmUsIHRvVGltZXpvbmUpIHtcblx0XHR2YXIgZnJvbVR6ID0gJC50aW1lcGlja2VyLnRpbWV6b25lT2Zmc2V0TnVtYmVyKGZyb21UaW1lem9uZSk7XG5cdFx0dmFyIHRvVHogPSAkLnRpbWVwaWNrZXIudGltZXpvbmVPZmZzZXROdW1iZXIodG9UaW1lem9uZSk7XG5cdFx0aWYgKCFpc05hTih0b1R6KSkge1xuXHRcdFx0ZGF0ZS5zZXRNaW51dGVzKGRhdGUuZ2V0TWludXRlcygpICsgKC1mcm9tVHopIC0gKC10b1R6KSk7XG5cdFx0fVxuXHRcdHJldHVybiBkYXRlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDYWxscyBgdGltZXBpY2tlcigpYCBvbiB0aGUgYHN0YXJ0VGltZWAgYW5kIGBlbmRUaW1lYCBlbGVtZW50cywgYW5kIGNvbmZpZ3VyZXMgdGhlbSB0b1xuXHQgKiBlbmZvcmNlIGRhdGUgcmFuZ2UgbGltaXRzLlxuXHQgKiBuLmIuIFRoZSBpbnB1dCB2YWx1ZSBtdXN0IGJlIGNvcnJlY3RseSBmb3JtYXR0ZWQgKHJlZm9ybWF0dGluZyBpcyBub3Qgc3VwcG9ydGVkKVxuXHQgKiBAcGFyYW0gIHtFbGVtZW50fSBzdGFydFRpbWVcblx0ICogQHBhcmFtICB7RWxlbWVudH0gZW5kVGltZVxuXHQgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBmb3IgdGhlIHRpbWVwaWNrZXIoKSBjYWxsXG5cdCAqIEByZXR1cm4ge2pRdWVyeX1cblx0ICovXG5cdCQudGltZXBpY2tlci50aW1lUmFuZ2UgPSBmdW5jdGlvbiAoc3RhcnRUaW1lLCBlbmRUaW1lLCBvcHRpb25zKSB7XG5cdFx0cmV0dXJuICQudGltZXBpY2tlci5oYW5kbGVSYW5nZSgndGltZXBpY2tlcicsIHN0YXJ0VGltZSwgZW5kVGltZSwgb3B0aW9ucyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIENhbGxzIGBkYXRldGltZXBpY2tlcmAgb24gdGhlIGBzdGFydFRpbWVgIGFuZCBgZW5kVGltZWAgZWxlbWVudHMsIGFuZCBjb25maWd1cmVzIHRoZW0gdG9cblx0ICogZW5mb3JjZSBkYXRlIHJhbmdlIGxpbWl0cy5cblx0ICogQHBhcmFtICB7RWxlbWVudH0gc3RhcnRUaW1lXG5cdCAqIEBwYXJhbSAge0VsZW1lbnR9IGVuZFRpbWVcblx0ICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgZm9yIHRoZSBgdGltZXBpY2tlcigpYCBjYWxsLiBBbHNvIHN1cHBvcnRzIGByZWZvcm1hdGAsXG5cdCAqICAgYSBib29sZWFuIHZhbHVlIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVmb3JtYXQgdGhlIGlucHV0IHZhbHVlcyB0byB0aGUgYGRhdGVGb3JtYXRgLlxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IG1ldGhvZCBDYW4gYmUgdXNlZCB0byBzcGVjaWZ5IHRoZSB0eXBlIG9mIHBpY2tlciB0byBiZSBhZGRlZFxuXHQgKiBAcmV0dXJuIHtqUXVlcnl9XG5cdCAqL1xuXHQkLnRpbWVwaWNrZXIuZGF0ZXRpbWVSYW5nZSA9IGZ1bmN0aW9uIChzdGFydFRpbWUsIGVuZFRpbWUsIG9wdGlvbnMpIHtcblx0XHQkLnRpbWVwaWNrZXIuaGFuZGxlUmFuZ2UoJ2RhdGV0aW1lcGlja2VyJywgc3RhcnRUaW1lLCBlbmRUaW1lLCBvcHRpb25zKTtcblx0fTtcblxuXHQvKipcblx0ICogQ2FsbHMgYGRhdGVwaWNrZXJgIG9uIHRoZSBgc3RhcnRUaW1lYCBhbmQgYGVuZFRpbWVgIGVsZW1lbnRzLCBhbmQgY29uZmlndXJlcyB0aGVtIHRvXG5cdCAqIGVuZm9yY2UgZGF0ZSByYW5nZSBsaW1pdHMuXG5cdCAqIEBwYXJhbSAge0VsZW1lbnR9IHN0YXJ0VGltZVxuXHQgKiBAcGFyYW0gIHtFbGVtZW50fSBlbmRUaW1lXG5cdCAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIGZvciB0aGUgYHRpbWVwaWNrZXIoKWAgY2FsbC4gQWxzbyBzdXBwb3J0cyBgcmVmb3JtYXRgLFxuXHQgKiAgIGEgYm9vbGVhbiB2YWx1ZSB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlZm9ybWF0IHRoZSBpbnB1dCB2YWx1ZXMgdG8gdGhlIGBkYXRlRm9ybWF0YC5cblx0ICogQHJldHVybiB7alF1ZXJ5fVxuXHQgKi9cblx0JC50aW1lcGlja2VyLmRhdGVSYW5nZSA9IGZ1bmN0aW9uIChzdGFydFRpbWUsIGVuZFRpbWUsIG9wdGlvbnMpIHtcblx0XHQkLnRpbWVwaWNrZXIuaGFuZGxlUmFuZ2UoJ2RhdGVwaWNrZXInLCBzdGFydFRpbWUsIGVuZFRpbWUsIG9wdGlvbnMpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDYWxscyBgbWV0aG9kYCBvbiB0aGUgYHN0YXJ0VGltZWAgYW5kIGBlbmRUaW1lYCBlbGVtZW50cywgYW5kIGNvbmZpZ3VyZXMgdGhlbSB0b1xuXHQgKiBlbmZvcmNlIGRhdGUgcmFuZ2UgbGltaXRzLlxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IG1ldGhvZCBDYW4gYmUgdXNlZCB0byBzcGVjaWZ5IHRoZSB0eXBlIG9mIHBpY2tlciB0byBiZSBhZGRlZFxuXHQgKiBAcGFyYW0gIHtFbGVtZW50fSBzdGFydFRpbWVcblx0ICogQHBhcmFtICB7RWxlbWVudH0gZW5kVGltZVxuXHQgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBmb3IgdGhlIGB0aW1lcGlja2VyKClgIGNhbGwuIEFsc28gc3VwcG9ydHMgYHJlZm9ybWF0YCxcblx0ICogICBhIGJvb2xlYW4gdmFsdWUgdGhhdCBjYW4gYmUgdXNlZCB0byByZWZvcm1hdCB0aGUgaW5wdXQgdmFsdWVzIHRvIHRoZSBgZGF0ZUZvcm1hdGAuXG5cdCAqIEByZXR1cm4ge2pRdWVyeX1cblx0ICovXG5cdCQudGltZXBpY2tlci5oYW5kbGVSYW5nZSA9IGZ1bmN0aW9uIChtZXRob2QsIHN0YXJ0VGltZSwgZW5kVGltZSwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwge1xuXHRcdFx0bWluSW50ZXJ2YWw6IDAsIC8vIG1pbiBhbGxvd2VkIGludGVydmFsIGluIG1pbGxpc2Vjb25kc1xuXHRcdFx0bWF4SW50ZXJ2YWw6IDAsIC8vIG1heCBhbGxvd2VkIGludGVydmFsIGluIG1pbGxpc2Vjb25kc1xuXHRcdFx0c3RhcnQ6IHt9LCAgICAgIC8vIG9wdGlvbnMgZm9yIHN0YXJ0IHBpY2tlclxuXHRcdFx0ZW5kOiB7fSAgICAgICAgIC8vIG9wdGlvbnMgZm9yIGVuZCBwaWNrZXJcblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdC8vIGZvciB0aGUgbWVhbiB0aW1lIHRoaXMgZml4ZXMgYW4gaXNzdWUgd2l0aCBjYWxsaW5nIGdldERhdGUgd2l0aCB0aW1lcGlja2VyKClcblx0XHR2YXIgdGltZU9ubHkgPSBmYWxzZTtcblx0XHRpZihtZXRob2QgPT09ICd0aW1lcGlja2VyJyl7XG5cdFx0XHR0aW1lT25seSA9IHRydWU7XG5cdFx0XHRtZXRob2QgPSAnZGF0ZXRpbWVwaWNrZXInO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGNoZWNrRGF0ZXMoY2hhbmdlZCwgb3RoZXIpIHtcblx0XHRcdHZhciBzdGFydGR0ID0gc3RhcnRUaW1lW21ldGhvZF0oJ2dldERhdGUnKSxcblx0XHRcdFx0ZW5kZHQgPSBlbmRUaW1lW21ldGhvZF0oJ2dldERhdGUnKSxcblx0XHRcdFx0Y2hhbmdlZGR0ID0gY2hhbmdlZFttZXRob2RdKCdnZXREYXRlJyk7XG5cblx0XHRcdGlmIChzdGFydGR0ICE9PSBudWxsKSB7XG5cdFx0XHRcdHZhciBtaW5EYXRlID0gbmV3IERhdGUoc3RhcnRkdC5nZXRUaW1lKCkpLFxuXHRcdFx0XHRcdG1heERhdGUgPSBuZXcgRGF0ZShzdGFydGR0LmdldFRpbWUoKSk7XG5cblx0XHRcdFx0bWluRGF0ZS5zZXRNaWxsaXNlY29uZHMobWluRGF0ZS5nZXRNaWxsaXNlY29uZHMoKSArIG9wdGlvbnMubWluSW50ZXJ2YWwpO1xuXHRcdFx0XHRtYXhEYXRlLnNldE1pbGxpc2Vjb25kcyhtYXhEYXRlLmdldE1pbGxpc2Vjb25kcygpICsgb3B0aW9ucy5tYXhJbnRlcnZhbCk7XG5cblx0XHRcdFx0aWYgKG9wdGlvbnMubWluSW50ZXJ2YWwgPiAwICYmIG1pbkRhdGUgPiBlbmRkdCkgeyAvLyBtaW5JbnRlcnZhbCBjaGVja1xuXHRcdFx0XHRcdGVuZFRpbWVbbWV0aG9kXSgnc2V0RGF0ZScsIG1pbkRhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKG9wdGlvbnMubWF4SW50ZXJ2YWwgPiAwICYmIG1heERhdGUgPCBlbmRkdCkgeyAvLyBtYXggaW50ZXJ2YWwgY2hlY2tcblx0XHRcdFx0XHRlbmRUaW1lW21ldGhvZF0oJ3NldERhdGUnLCBtYXhEYXRlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmIChzdGFydGR0ID4gZW5kZHQpIHtcblx0XHRcdFx0XHRvdGhlclttZXRob2RdKCdzZXREYXRlJywgY2hhbmdlZGR0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHNlbGVjdGVkKGNoYW5nZWQsIG90aGVyLCBvcHRpb24pIHtcblx0XHRcdGlmICghY2hhbmdlZC52YWwoKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgZGF0ZSA9IGNoYW5nZWRbbWV0aG9kXS5jYWxsKGNoYW5nZWQsICdnZXREYXRlJyk7XG5cdFx0XHRpZiAoZGF0ZSAhPT0gbnVsbCAmJiBvcHRpb25zLm1pbkludGVydmFsID4gMCkge1xuXHRcdFx0XHRpZiAob3B0aW9uID09PSAnbWluRGF0ZScpIHtcblx0XHRcdFx0XHRkYXRlLnNldE1pbGxpc2Vjb25kcyhkYXRlLmdldE1pbGxpc2Vjb25kcygpICsgb3B0aW9ucy5taW5JbnRlcnZhbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG9wdGlvbiA9PT0gJ21heERhdGUnKSB7XG5cdFx0XHRcdFx0ZGF0ZS5zZXRNaWxsaXNlY29uZHMoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAtIG9wdGlvbnMubWluSW50ZXJ2YWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChkYXRlLmdldFRpbWUpIHtcblx0XHRcdFx0b3RoZXJbbWV0aG9kXS5jYWxsKG90aGVyLCAnb3B0aW9uJywgb3B0aW9uLCBkYXRlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQkLmZuW21ldGhvZF0uY2FsbChzdGFydFRpbWUsICQuZXh0ZW5kKHtcblx0XHRcdHRpbWVPbmx5OiB0aW1lT25seSxcblx0XHRcdG9uQ2xvc2U6IGZ1bmN0aW9uIChkYXRlVGV4dCwgaW5zdCkge1xuXHRcdFx0XHRjaGVja0RhdGVzKCQodGhpcyksIGVuZFRpbWUpO1xuXHRcdFx0fSxcblx0XHRcdG9uU2VsZWN0OiBmdW5jdGlvbiAoc2VsZWN0ZWREYXRlVGltZSkge1xuXHRcdFx0XHRzZWxlY3RlZCgkKHRoaXMpLCBlbmRUaW1lLCAnbWluRGF0ZScpO1xuXHRcdFx0fVxuXHRcdH0sIG9wdGlvbnMsIG9wdGlvbnMuc3RhcnQpKTtcblx0XHQkLmZuW21ldGhvZF0uY2FsbChlbmRUaW1lLCAkLmV4dGVuZCh7XG5cdFx0XHR0aW1lT25seTogdGltZU9ubHksXG5cdFx0XHRvbkNsb3NlOiBmdW5jdGlvbiAoZGF0ZVRleHQsIGluc3QpIHtcblx0XHRcdFx0Y2hlY2tEYXRlcygkKHRoaXMpLCBzdGFydFRpbWUpO1xuXHRcdFx0fSxcblx0XHRcdG9uU2VsZWN0OiBmdW5jdGlvbiAoc2VsZWN0ZWREYXRlVGltZSkge1xuXHRcdFx0XHRzZWxlY3RlZCgkKHRoaXMpLCBzdGFydFRpbWUsICdtYXhEYXRlJyk7XG5cdFx0XHR9XG5cdFx0fSwgb3B0aW9ucywgb3B0aW9ucy5lbmQpKTtcblxuXHRcdGNoZWNrRGF0ZXMoc3RhcnRUaW1lLCBlbmRUaW1lKTtcblxuXHRcdHNlbGVjdGVkKHN0YXJ0VGltZSwgZW5kVGltZSwgJ21pbkRhdGUnKTtcblx0XHRzZWxlY3RlZChlbmRUaW1lLCBzdGFydFRpbWUsICdtYXhEYXRlJyk7XG5cblx0XHRyZXR1cm4gJChbc3RhcnRUaW1lLmdldCgwKSwgZW5kVGltZS5nZXQoMCldKTtcblx0fTtcblxuXHQvKipcblx0ICogTG9nIGVycm9yIG9yIGRhdGEgdG8gdGhlIGNvbnNvbGUgZHVyaW5nIGVycm9yIG9yIGRlYnVnZ2luZ1xuXHQgKiBAcGFyYW0gIHtPYmplY3R9IGVyciBwYXNzIGFueSB0eXBlIG9iamVjdCB0byBsb2cgdG8gdGhlIGNvbnNvbGUgZHVyaW5nIGVycm9yIG9yIGRlYnVnZ2luZ1xuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0JC50aW1lcGlja2VyLmxvZyA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBPbGRlciBJRSAoOSwgbWF5YmUgMTApIHRocm93IGVycm9yIG9uIGFjY2Vzc2luZyBgd2luZG93LmNvbnNvbGUubG9nLmFwcGx5YCwgc28gY2hlY2sgZmlyc3QuXG5cdFx0aWYgKHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLmxvZyAmJiB3aW5kb3cuY29uc29sZS5sb2cuYXBwbHkpIHtcblx0XHRcdHdpbmRvdy5jb25zb2xlLmxvZy5hcHBseSh3aW5kb3cuY29uc29sZSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qXG5cdCAqIEFkZCB1dGlsIG9iamVjdCB0byBhbGxvdyBhY2Nlc3MgdG8gcHJpdmF0ZSBtZXRob2RzIGZvciB0ZXN0YWJpbGl0eS5cblx0ICovXG5cdCQudGltZXBpY2tlci5fdXRpbCA9IHtcblx0XHRfZXh0ZW5kUmVtb3ZlOiBleHRlbmRSZW1vdmUsXG5cdFx0X2lzRW1wdHlPYmplY3Q6IGlzRW1wdHlPYmplY3QsXG5cdFx0X2NvbnZlcnQyNHRvMTI6IGNvbnZlcnQyNHRvMTIsXG5cdFx0X2RldGVjdFN1cHBvcnQ6IGRldGVjdFN1cHBvcnQsXG5cdFx0X3NlbGVjdExvY2FsVGltZXpvbmU6IHNlbGVjdExvY2FsVGltZXpvbmUsXG5cdFx0X2NvbXB1dGVFZmZlY3RpdmVTZXR0aW5nOiBjb21wdXRlRWZmZWN0aXZlU2V0dGluZyxcblx0XHRfc3BsaXREYXRlVGltZTogc3BsaXREYXRlVGltZSxcblx0XHRfcGFyc2VEYXRlVGltZUludGVybmFsOiBwYXJzZURhdGVUaW1lSW50ZXJuYWxcblx0fTtcblxuXHQvKlxuXHQqIE1pY3Jvc2Vjb25kIHN1cHBvcnRcblx0Ki9cblx0aWYgKCFEYXRlLnByb3RvdHlwZS5nZXRNaWNyb3NlY29uZHMpIHtcblx0XHREYXRlLnByb3RvdHlwZS5taWNyb3NlY29uZHMgPSAwO1xuXHRcdERhdGUucHJvdG90eXBlLmdldE1pY3Jvc2Vjb25kcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMubWljcm9zZWNvbmRzOyB9O1xuXHRcdERhdGUucHJvdG90eXBlLnNldE1pY3Jvc2Vjb25kcyA9IGZ1bmN0aW9uIChtKSB7XG5cdFx0XHR0aGlzLnNldE1pbGxpc2Vjb25kcyh0aGlzLmdldE1pbGxpc2Vjb25kcygpICsgTWF0aC5mbG9vcihtIC8gMTAwMCkpO1xuXHRcdFx0dGhpcy5taWNyb3NlY29uZHMgPSBtICUgMTAwMDtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cdH1cblxuXHQvKlxuXHQqIEtlZXAgdXAgd2l0aCB0aGUgdmVyc2lvblxuXHQqL1xuXHQkLnRpbWVwaWNrZXIudmVyc2lvbiA9IFwiMS42LjNcIjtcblxufSkpO1xuIiwgIi8qIVxuICogalF1ZXJ5IFVJIEtleWNvZGUgMS4xNC4xXG4gKiBodHRwczovL2pxdWVyeXVpLmNvbVxuICpcbiAqIENvcHlyaWdodCBPcGVuSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwczovL2pxdWVyeS5vcmcvbGljZW5zZVxuICovXG5cbi8vPj5sYWJlbDogS2V5Y29kZVxuLy8+Pmdyb3VwOiBDb3JlXG4vLz4+ZGVzY3JpcHRpb246IFByb3ZpZGUga2V5Y29kZXMgYXMga2V5bmFtZXNcbi8vPj5kb2NzOiBodHRwczovL2FwaS5qcXVlcnl1aS5jb20valF1ZXJ5LnVpLmtleUNvZGUvXG5cbiggZnVuY3Rpb24oIGZhY3RvcnkgKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdGlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKCBbIFwianF1ZXJ5XCIsIFwiLi92ZXJzaW9uXCIgXSwgZmFjdG9yeSApO1xuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzXG5cdFx0ZmFjdG9yeSggalF1ZXJ5ICk7XG5cdH1cbn0gKSggZnVuY3Rpb24oICQgKSB7XG5cInVzZSBzdHJpY3RcIjtcblxucmV0dXJuICQudWkua2V5Q29kZSA9IHtcblx0QkFDS1NQQUNFOiA4LFxuXHRDT01NQTogMTg4LFxuXHRERUxFVEU6IDQ2LFxuXHRET1dOOiA0MCxcblx0RU5EOiAzNSxcblx0RU5URVI6IDEzLFxuXHRFU0NBUEU6IDI3LFxuXHRIT01FOiAzNixcblx0TEVGVDogMzcsXG5cdFBBR0VfRE9XTjogMzQsXG5cdFBBR0VfVVA6IDMzLFxuXHRQRVJJT0Q6IDE5MCxcblx0UklHSFQ6IDM5LFxuXHRTUEFDRTogMzIsXG5cdFRBQjogOSxcblx0VVA6IDM4XG59O1xuXG59ICk7XG4iLCAiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiwgY2FtZWxjYXNlICovXG4vKiFcbiAqIGpRdWVyeSBVSSBEYXRlcGlja2VyIDEuMTQuMVxuICogaHR0cHM6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgT3BlbkpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cHM6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqL1xuXG4vLz4+bGFiZWw6IERhdGVwaWNrZXJcbi8vPj5ncm91cDogV2lkZ2V0c1xuLy8+PmRlc2NyaXB0aW9uOiBEaXNwbGF5cyBhIGNhbGVuZGFyIGZyb20gYW4gaW5wdXQgb3IgaW5saW5lIGZvciBzZWxlY3RpbmcgZGF0ZXMuXG4vLz4+ZG9jczogaHR0cHM6Ly9hcGkuanF1ZXJ5dWkuY29tL2RhdGVwaWNrZXIvXG4vLz4+ZGVtb3M6IGh0dHBzOi8vanF1ZXJ5dWkuY29tL2RhdGVwaWNrZXIvXG4vLz4+Y3NzLnN0cnVjdHVyZTogLi4vLi4vdGhlbWVzL2Jhc2UvY29yZS5jc3Ncbi8vPj5jc3Muc3RydWN0dXJlOiAuLi8uLi90aGVtZXMvYmFzZS9kYXRlcGlja2VyLmNzc1xuLy8+PmNzcy50aGVtZTogLi4vLi4vdGhlbWVzL2Jhc2UvdGhlbWUuY3NzXG5cbiggZnVuY3Rpb24oIGZhY3RvcnkgKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdGlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKCBbXG5cdFx0XHRcImpxdWVyeVwiLFxuXHRcdFx0XCIuLi92ZXJzaW9uXCIsXG5cdFx0XHRcIi4uL2tleWNvZGVcIlxuXHRcdF0sIGZhY3RvcnkgKTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xuXHRcdGZhY3RvcnkoIGpRdWVyeSApO1xuXHR9XG59ICkoIGZ1bmN0aW9uKCAkICkge1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbiQuZXh0ZW5kKCAkLnVpLCB7IGRhdGVwaWNrZXI6IHsgdmVyc2lvbjogXCIxLjE0LjFcIiB9IH0gKTtcblxudmFyIGRhdGVwaWNrZXJfaW5zdEFjdGl2ZTtcblxuZnVuY3Rpb24gZGF0ZXBpY2tlcl9nZXRaaW5kZXgoIGVsZW0gKSB7XG5cdHZhciBwb3NpdGlvbiwgdmFsdWU7XG5cdHdoaWxlICggZWxlbS5sZW5ndGggJiYgZWxlbVsgMCBdICE9PSBkb2N1bWVudCApIHtcblxuXHRcdC8vIElnbm9yZSB6LWluZGV4IGlmIHBvc2l0aW9uIGlzIHNldCB0byBhIHZhbHVlIHdoZXJlIHotaW5kZXggaXMgaWdub3JlZCBieSB0aGUgYnJvd3NlclxuXHRcdC8vIFRoaXMgbWFrZXMgYmVoYXZpb3Igb2YgdGhpcyBmdW5jdGlvbiBjb25zaXN0ZW50IGFjcm9zcyBicm93c2Vyc1xuXHRcdC8vIFdlYktpdCBhbHdheXMgcmV0dXJucyBhdXRvIGlmIHRoZSBlbGVtZW50IGlzIHBvc2l0aW9uZWRcblx0XHRwb3NpdGlvbiA9IGVsZW0uY3NzKCBcInBvc2l0aW9uXCIgKTtcblx0XHRpZiAoIHBvc2l0aW9uID09PSBcImFic29sdXRlXCIgfHwgcG9zaXRpb24gPT09IFwicmVsYXRpdmVcIiB8fCBwb3NpdGlvbiA9PT0gXCJmaXhlZFwiICkge1xuXG5cdFx0XHQvLyBJRSByZXR1cm5zIDAgd2hlbiB6SW5kZXggaXMgbm90IHNwZWNpZmllZFxuXHRcdFx0Ly8gb3RoZXIgYnJvd3NlcnMgcmV0dXJuIGEgc3RyaW5nXG5cdFx0XHQvLyB3ZSBpZ25vcmUgdGhlIGNhc2Ugb2YgbmVzdGVkIGVsZW1lbnRzIHdpdGggYW4gZXhwbGljaXQgdmFsdWUgb2YgMFxuXHRcdFx0Ly8gPGRpdiBzdHlsZT1cInotaW5kZXg6IC0xMDtcIj48ZGl2IHN0eWxlPVwiei1pbmRleDogMDtcIj48L2Rpdj48L2Rpdj5cblx0XHRcdHZhbHVlID0gcGFyc2VJbnQoIGVsZW0uY3NzKCBcInpJbmRleFwiICksIDEwICk7XG5cdFx0XHRpZiAoICFpc05hTiggdmFsdWUgKSAmJiB2YWx1ZSAhPT0gMCApIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbGVtID0gZWxlbS5wYXJlbnQoKTtcblx0fVxuXG5cdHJldHVybiAwO1xufVxuXG4vKiBEYXRlIHBpY2tlciBtYW5hZ2VyLlxuICAgVXNlIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcywgJC5kYXRlcGlja2VyLCB0byBpbnRlcmFjdCB3aXRoIHRoZSBkYXRlIHBpY2tlci5cbiAgIFNldHRpbmdzIGZvciAoZ3JvdXBzIG9mKSBkYXRlIHBpY2tlcnMgYXJlIG1haW50YWluZWQgaW4gYW4gaW5zdGFuY2Ugb2JqZWN0LFxuICAgYWxsb3dpbmcgbXVsdGlwbGUgZGlmZmVyZW50IHNldHRpbmdzIG9uIHRoZSBzYW1lIHBhZ2UuICovXG5cbmZ1bmN0aW9uIERhdGVwaWNrZXIoKSB7XG5cdHRoaXMuX2N1ckluc3QgPSBudWxsOyAvLyBUaGUgY3VycmVudCBpbnN0YW5jZSBpbiB1c2Vcblx0dGhpcy5fa2V5RXZlbnQgPSBmYWxzZTsgLy8gSWYgdGhlIGxhc3QgZXZlbnQgd2FzIGEga2V5IGV2ZW50XG5cdHRoaXMuX2Rpc2FibGVkSW5wdXRzID0gW107IC8vIExpc3Qgb2YgZGF0ZSBwaWNrZXIgaW5wdXRzIHRoYXQgaGF2ZSBiZWVuIGRpc2FibGVkXG5cdHRoaXMuX2RhdGVwaWNrZXJTaG93aW5nID0gZmFsc2U7IC8vIFRydWUgaWYgdGhlIHBvcHVwIHBpY2tlciBpcyBzaG93aW5nICwgZmFsc2UgaWYgbm90XG5cdHRoaXMuX2luRGlhbG9nID0gZmFsc2U7IC8vIFRydWUgaWYgc2hvd2luZyB3aXRoaW4gYSBcImRpYWxvZ1wiLCBmYWxzZSBpZiBub3Rcblx0dGhpcy5fbWFpbkRpdklkID0gXCJ1aS1kYXRlcGlja2VyLWRpdlwiOyAvLyBUaGUgSUQgb2YgdGhlIG1haW4gZGF0ZXBpY2tlciBkaXZpc2lvblxuXHR0aGlzLl9pbmxpbmVDbGFzcyA9IFwidWktZGF0ZXBpY2tlci1pbmxpbmVcIjsgLy8gVGhlIG5hbWUgb2YgdGhlIGlubGluZSBtYXJrZXIgY2xhc3Ncblx0dGhpcy5fYXBwZW5kQ2xhc3MgPSBcInVpLWRhdGVwaWNrZXItYXBwZW5kXCI7IC8vIFRoZSBuYW1lIG9mIHRoZSBhcHBlbmQgbWFya2VyIGNsYXNzXG5cdHRoaXMuX3RyaWdnZXJDbGFzcyA9IFwidWktZGF0ZXBpY2tlci10cmlnZ2VyXCI7IC8vIFRoZSBuYW1lIG9mIHRoZSB0cmlnZ2VyIG1hcmtlciBjbGFzc1xuXHR0aGlzLl9kaWFsb2dDbGFzcyA9IFwidWktZGF0ZXBpY2tlci1kaWFsb2dcIjsgLy8gVGhlIG5hbWUgb2YgdGhlIGRpYWxvZyBtYXJrZXIgY2xhc3Ncblx0dGhpcy5fZGlzYWJsZUNsYXNzID0gXCJ1aS1kYXRlcGlja2VyLWRpc2FibGVkXCI7IC8vIFRoZSBuYW1lIG9mIHRoZSBkaXNhYmxlZCBjb3ZlcmluZyBtYXJrZXIgY2xhc3Ncblx0dGhpcy5fdW5zZWxlY3RhYmxlQ2xhc3MgPSBcInVpLWRhdGVwaWNrZXItdW5zZWxlY3RhYmxlXCI7IC8vIFRoZSBuYW1lIG9mIHRoZSB1bnNlbGVjdGFibGUgY2VsbCBtYXJrZXIgY2xhc3Ncblx0dGhpcy5fY3VycmVudENsYXNzID0gXCJ1aS1kYXRlcGlja2VyLWN1cnJlbnQtZGF5XCI7IC8vIFRoZSBuYW1lIG9mIHRoZSBjdXJyZW50IGRheSBtYXJrZXIgY2xhc3Ncblx0dGhpcy5fZGF5T3ZlckNsYXNzID0gXCJ1aS1kYXRlcGlja2VyLWRheXMtY2VsbC1vdmVyXCI7IC8vIFRoZSBuYW1lIG9mIHRoZSBkYXkgaG92ZXIgbWFya2VyIGNsYXNzXG5cdHRoaXMucmVnaW9uYWwgPSBbXTsgLy8gQXZhaWxhYmxlIHJlZ2lvbmFsIHNldHRpbmdzLCBpbmRleGVkIGJ5IGxhbmd1YWdlIGNvZGVcblx0dGhpcy5yZWdpb25hbFsgXCJcIiBdID0geyAvLyBEZWZhdWx0IHJlZ2lvbmFsIHNldHRpbmdzXG5cdFx0Y2xvc2VUZXh0OiBcIkRvbmVcIiwgLy8gRGlzcGxheSB0ZXh0IGZvciBjbG9zZSBsaW5rXG5cdFx0cHJldlRleHQ6IFwiUHJldlwiLCAvLyBEaXNwbGF5IHRleHQgZm9yIHByZXZpb3VzIG1vbnRoIGxpbmtcblx0XHRuZXh0VGV4dDogXCJOZXh0XCIsIC8vIERpc3BsYXkgdGV4dCBmb3IgbmV4dCBtb250aCBsaW5rXG5cdFx0Y3VycmVudFRleHQ6IFwiVG9kYXlcIiwgLy8gRGlzcGxheSB0ZXh0IGZvciBjdXJyZW50IG1vbnRoIGxpbmtcblx0XHRtb250aE5hbWVzOiBbIFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIixcblx0XHRcdFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCIgXSwgLy8gTmFtZXMgb2YgbW9udGhzIGZvciBkcm9wLWRvd24gYW5kIGZvcm1hdHRpbmdcblx0XHRtb250aE5hbWVzU2hvcnQ6IFsgXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIiBdLCAvLyBGb3IgZm9ybWF0dGluZ1xuXHRcdGRheU5hbWVzOiBbIFwiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIiBdLCAvLyBGb3IgZm9ybWF0dGluZ1xuXHRcdGRheU5hbWVzU2hvcnQ6IFsgXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIiBdLCAvLyBGb3IgZm9ybWF0dGluZ1xuXHRcdGRheU5hbWVzTWluOiBbIFwiU3VcIiwgXCJNb1wiLCBcIlR1XCIsIFwiV2VcIiwgXCJUaFwiLCBcIkZyXCIsIFwiU2FcIiBdLCAvLyBDb2x1bW4gaGVhZGluZ3MgZm9yIGRheXMgc3RhcnRpbmcgYXQgU3VuZGF5XG5cdFx0d2Vla0hlYWRlcjogXCJXa1wiLCAvLyBDb2x1bW4gaGVhZGVyIGZvciB3ZWVrIG9mIHRoZSB5ZWFyXG5cdFx0ZGF0ZUZvcm1hdDogXCJtbS9kZC95eVwiLCAvLyBTZWUgZm9ybWF0IG9wdGlvbnMgb24gcGFyc2VEYXRlXG5cdFx0Zmlyc3REYXk6IDAsIC8vIFRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWssIFN1biA9IDAsIE1vbiA9IDEsIC4uLlxuXHRcdGlzUlRMOiBmYWxzZSwgLy8gVHJ1ZSBpZiByaWdodC10by1sZWZ0IGxhbmd1YWdlLCBmYWxzZSBpZiBsZWZ0LXRvLXJpZ2h0XG5cdFx0c2hvd01vbnRoQWZ0ZXJZZWFyOiBmYWxzZSwgLy8gVHJ1ZSBpZiB0aGUgeWVhciBzZWxlY3QgcHJlY2VkZXMgbW9udGgsIGZhbHNlIGZvciBtb250aCB0aGVuIHllYXJcblx0XHR5ZWFyU3VmZml4OiBcIlwiLCAvLyBBZGRpdGlvbmFsIHRleHQgdG8gYXBwZW5kIHRvIHRoZSB5ZWFyIGluIHRoZSBtb250aCBoZWFkZXJzLFxuXHRcdHNlbGVjdE1vbnRoTGFiZWw6IFwiU2VsZWN0IG1vbnRoXCIsIC8vIEludmlzaWJsZSBsYWJlbCBmb3IgbW9udGggc2VsZWN0b3Jcblx0XHRzZWxlY3RZZWFyTGFiZWw6IFwiU2VsZWN0IHllYXJcIiAvLyBJbnZpc2libGUgbGFiZWwgZm9yIHllYXIgc2VsZWN0b3Jcblx0fTtcblx0dGhpcy5fZGVmYXVsdHMgPSB7IC8vIEdsb2JhbCBkZWZhdWx0cyBmb3IgYWxsIHRoZSBkYXRlIHBpY2tlciBpbnN0YW5jZXNcblx0XHRzaG93T246IFwiZm9jdXNcIiwgLy8gXCJmb2N1c1wiIGZvciBwb3B1cCBvbiBmb2N1cyxcblx0XHRcdC8vIFwiYnV0dG9uXCIgZm9yIHRyaWdnZXIgYnV0dG9uLCBvciBcImJvdGhcIiBmb3IgZWl0aGVyXG5cdFx0c2hvd0FuaW06IFwiZmFkZUluXCIsIC8vIE5hbWUgb2YgalF1ZXJ5IGFuaW1hdGlvbiBmb3IgcG9wdXBcblx0XHRzaG93T3B0aW9uczoge30sIC8vIE9wdGlvbnMgZm9yIGVuaGFuY2VkIGFuaW1hdGlvbnNcblx0XHRkZWZhdWx0RGF0ZTogbnVsbCwgLy8gVXNlZCB3aGVuIGZpZWxkIGlzIGJsYW5rOiBhY3R1YWwgZGF0ZSxcblx0XHRcdC8vICsvLW51bWJlciBmb3Igb2Zmc2V0IGZyb20gdG9kYXksIG51bGwgZm9yIHRvZGF5XG5cdFx0YXBwZW5kVGV4dDogXCJcIiwgLy8gRGlzcGxheSB0ZXh0IGZvbGxvd2luZyB0aGUgaW5wdXQgYm94LCBlLmcuIHNob3dpbmcgdGhlIGZvcm1hdFxuXHRcdGJ1dHRvblRleHQ6IFwiLi4uXCIsIC8vIFRleHQgZm9yIHRyaWdnZXIgYnV0dG9uXG5cdFx0YnV0dG9uSW1hZ2U6IFwiXCIsIC8vIFVSTCBmb3IgdHJpZ2dlciBidXR0b24gaW1hZ2Vcblx0XHRidXR0b25JbWFnZU9ubHk6IGZhbHNlLCAvLyBUcnVlIGlmIHRoZSBpbWFnZSBhcHBlYXJzIGFsb25lLCBmYWxzZSBpZiBpdCBhcHBlYXJzIG9uIGEgYnV0dG9uXG5cdFx0aGlkZUlmTm9QcmV2TmV4dDogZmFsc2UsIC8vIFRydWUgdG8gaGlkZSBuZXh0L3ByZXZpb3VzIG1vbnRoIGxpbmtzXG5cdFx0XHQvLyBpZiBub3QgYXBwbGljYWJsZSwgZmFsc2UgdG8ganVzdCBkaXNhYmxlIHRoZW1cblx0XHRuYXZpZ2F0aW9uQXNEYXRlRm9ybWF0OiBmYWxzZSwgLy8gVHJ1ZSBpZiBkYXRlIGZvcm1hdHRpbmcgYXBwbGllZCB0byBwcmV2L3RvZGF5L25leHQgbGlua3Ncblx0XHRnb3RvQ3VycmVudDogZmFsc2UsIC8vIFRydWUgaWYgdG9kYXkgbGluayBnb2VzIGJhY2sgdG8gY3VycmVudCBzZWxlY3Rpb24gaW5zdGVhZFxuXHRcdGNoYW5nZU1vbnRoOiBmYWxzZSwgLy8gVHJ1ZSBpZiBtb250aCBjYW4gYmUgc2VsZWN0ZWQgZGlyZWN0bHksIGZhbHNlIGlmIG9ubHkgcHJldi9uZXh0XG5cdFx0Y2hhbmdlWWVhcjogZmFsc2UsIC8vIFRydWUgaWYgeWVhciBjYW4gYmUgc2VsZWN0ZWQgZGlyZWN0bHksIGZhbHNlIGlmIG9ubHkgcHJldi9uZXh0XG5cdFx0eWVhclJhbmdlOiBcImMtMTA6YysxMFwiLCAvLyBSYW5nZSBvZiB5ZWFycyB0byBkaXNwbGF5IGluIGRyb3AtZG93bixcblx0XHRcdC8vIGVpdGhlciByZWxhdGl2ZSB0byB0b2RheSdzIHllYXIgKC1ubjorbm4pLCByZWxhdGl2ZSB0byBjdXJyZW50bHkgZGlzcGxheWVkIHllYXJcblx0XHRcdC8vIChjLW5uOmMrbm4pLCBhYnNvbHV0ZSAobm5ubjpubm5uKSwgb3IgYSBjb21iaW5hdGlvbiBvZiB0aGUgYWJvdmUgKG5ubm46LW4pXG5cdFx0c2hvd090aGVyTW9udGhzOiBmYWxzZSwgLy8gVHJ1ZSB0byBzaG93IGRhdGVzIGluIG90aGVyIG1vbnRocywgZmFsc2UgdG8gbGVhdmUgYmxhbmtcblx0XHRzZWxlY3RPdGhlck1vbnRoczogZmFsc2UsIC8vIFRydWUgdG8gYWxsb3cgc2VsZWN0aW9uIG9mIGRhdGVzIGluIG90aGVyIG1vbnRocywgZmFsc2UgZm9yIHVuc2VsZWN0YWJsZVxuXHRcdHNob3dXZWVrOiBmYWxzZSwgLy8gVHJ1ZSB0byBzaG93IHdlZWsgb2YgdGhlIHllYXIsIGZhbHNlIHRvIG5vdCBzaG93IGl0XG5cdFx0Y2FsY3VsYXRlV2VlazogdGhpcy5pc284NjAxV2VlaywgLy8gSG93IHRvIGNhbGN1bGF0ZSB0aGUgd2VlayBvZiB0aGUgeWVhcixcblx0XHRcdC8vIHRha2VzIGEgRGF0ZSBhbmQgcmV0dXJucyB0aGUgbnVtYmVyIG9mIHRoZSB3ZWVrIGZvciBpdFxuXHRcdHNob3J0WWVhckN1dG9mZjogXCIrMTBcIiwgLy8gU2hvcnQgeWVhciB2YWx1ZXMgPCB0aGlzIGFyZSBpbiB0aGUgY3VycmVudCBjZW50dXJ5LFxuXHRcdFx0Ly8gPiB0aGlzIGFyZSBpbiB0aGUgcHJldmlvdXMgY2VudHVyeSxcblx0XHRcdC8vIHN0cmluZyB2YWx1ZSBzdGFydGluZyB3aXRoIFwiK1wiIGZvciBjdXJyZW50IHllYXIgKyB2YWx1ZVxuXHRcdG1pbkRhdGU6IG51bGwsIC8vIFRoZSBlYXJsaWVzdCBzZWxlY3RhYmxlIGRhdGUsIG9yIG51bGwgZm9yIG5vIGxpbWl0XG5cdFx0bWF4RGF0ZTogbnVsbCwgLy8gVGhlIGxhdGVzdCBzZWxlY3RhYmxlIGRhdGUsIG9yIG51bGwgZm9yIG5vIGxpbWl0XG5cdFx0ZHVyYXRpb246IFwiZmFzdFwiLCAvLyBEdXJhdGlvbiBvZiBkaXNwbGF5L2Nsb3N1cmVcblx0XHRiZWZvcmVTaG93RGF5OiBudWxsLCAvLyBGdW5jdGlvbiB0aGF0IHRha2VzIGEgZGF0ZSBhbmQgcmV0dXJucyBhbiBhcnJheSB3aXRoXG5cdFx0XHQvLyBbMF0gPSB0cnVlIGlmIHNlbGVjdGFibGUsIGZhbHNlIGlmIG5vdCwgWzFdID0gY3VzdG9tIENTUyBjbGFzcyBuYW1lKHMpIG9yIFwiXCIsXG5cdFx0XHQvLyBbMl0gPSBjZWxsIHRpdGxlIChvcHRpb25hbCksIGUuZy4gJC5kYXRlcGlja2VyLm5vV2Vla2VuZHNcblx0XHRiZWZvcmVTaG93OiBudWxsLCAvLyBGdW5jdGlvbiB0aGF0IHRha2VzIGFuIGlucHV0IGZpZWxkIGFuZFxuXHRcdFx0Ly8gcmV0dXJucyBhIHNldCBvZiBjdXN0b20gc2V0dGluZ3MgZm9yIHRoZSBkYXRlIHBpY2tlclxuXHRcdG9uU2VsZWN0OiBudWxsLCAvLyBEZWZpbmUgYSBjYWxsYmFjayBmdW5jdGlvbiB3aGVuIGEgZGF0ZSBpcyBzZWxlY3RlZFxuXHRcdG9uQ2hhbmdlTW9udGhZZWFyOiBudWxsLCAvLyBEZWZpbmUgYSBjYWxsYmFjayBmdW5jdGlvbiB3aGVuIHRoZSBtb250aCBvciB5ZWFyIGlzIGNoYW5nZWRcblx0XHRvbkNsb3NlOiBudWxsLCAvLyBEZWZpbmUgYSBjYWxsYmFjayBmdW5jdGlvbiB3aGVuIHRoZSBkYXRlcGlja2VyIGlzIGNsb3NlZFxuXHRcdG9uVXBkYXRlRGF0ZXBpY2tlcjogbnVsbCwgLy8gRGVmaW5lIGEgY2FsbGJhY2sgZnVuY3Rpb24gd2hlbiB0aGUgZGF0ZXBpY2tlciBpcyB1cGRhdGVkXG5cdFx0bnVtYmVyT2ZNb250aHM6IDEsIC8vIE51bWJlciBvZiBtb250aHMgdG8gc2hvdyBhdCBhIHRpbWVcblx0XHRzaG93Q3VycmVudEF0UG9zOiAwLCAvLyBUaGUgcG9zaXRpb24gaW4gbXVsdGlwZSBtb250aHMgYXQgd2hpY2ggdG8gc2hvdyB0aGUgY3VycmVudCBtb250aCAoc3RhcnRpbmcgYXQgMClcblx0XHRzdGVwTW9udGhzOiAxLCAvLyBOdW1iZXIgb2YgbW9udGhzIHRvIHN0ZXAgYmFjay9mb3J3YXJkXG5cdFx0c3RlcEJpZ01vbnRoczogMTIsIC8vIE51bWJlciBvZiBtb250aHMgdG8gc3RlcCBiYWNrL2ZvcndhcmQgZm9yIHRoZSBiaWcgbGlua3Ncblx0XHRhbHRGaWVsZDogXCJcIiwgLy8gU2VsZWN0b3IgZm9yIGFuIGFsdGVybmF0ZSBmaWVsZCB0byBzdG9yZSBzZWxlY3RlZCBkYXRlcyBpbnRvXG5cdFx0YWx0Rm9ybWF0OiBcIlwiLCAvLyBUaGUgZGF0ZSBmb3JtYXQgdG8gdXNlIGZvciB0aGUgYWx0ZXJuYXRlIGZpZWxkXG5cdFx0Y29uc3RyYWluSW5wdXQ6IHRydWUsIC8vIFRoZSBpbnB1dCBpcyBjb25zdHJhaW5lZCBieSB0aGUgY3VycmVudCBkYXRlIGZvcm1hdFxuXHRcdHNob3dCdXR0b25QYW5lbDogZmFsc2UsIC8vIFRydWUgdG8gc2hvdyBidXR0b24gcGFuZWwsIGZhbHNlIHRvIG5vdCBzaG93IGl0XG5cdFx0YXV0b1NpemU6IGZhbHNlLCAvLyBUcnVlIHRvIHNpemUgdGhlIGlucHV0IGZvciB0aGUgZGF0ZSBmb3JtYXQsIGZhbHNlIHRvIGxlYXZlIGFzIGlzXG5cdFx0ZGlzYWJsZWQ6IGZhbHNlIC8vIFRoZSBpbml0aWFsIGRpc2FibGVkIHN0YXRlXG5cdH07XG5cdCQuZXh0ZW5kKCB0aGlzLl9kZWZhdWx0cywgdGhpcy5yZWdpb25hbFsgXCJcIiBdICk7XG5cdHRoaXMucmVnaW9uYWwuZW4gPSAkLmV4dGVuZCggdHJ1ZSwge30sIHRoaXMucmVnaW9uYWxbIFwiXCIgXSApO1xuXHR0aGlzLnJlZ2lvbmFsWyBcImVuLVVTXCIgXSA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgdGhpcy5yZWdpb25hbC5lbiApO1xuXHR0aGlzLmRwRGl2ID0gZGF0ZXBpY2tlcl9iaW5kSG92ZXIoICQoIFwiPGRpdiBpZD0nXCIgKyB0aGlzLl9tYWluRGl2SWQgKyBcIicgY2xhc3M9J3VpLWRhdGVwaWNrZXIgdWktd2lkZ2V0IHVpLXdpZGdldC1jb250ZW50IHVpLWhlbHBlci1jbGVhcmZpeCB1aS1jb3JuZXItYWxsJz48L2Rpdj5cIiApICk7XG59XG5cbiQuZXh0ZW5kKCBEYXRlcGlja2VyLnByb3RvdHlwZSwge1xuXG5cdC8qIENsYXNzIG5hbWUgYWRkZWQgdG8gZWxlbWVudHMgdG8gaW5kaWNhdGUgYWxyZWFkeSBjb25maWd1cmVkIHdpdGggYSBkYXRlIHBpY2tlci4gKi9cblx0bWFya2VyQ2xhc3NOYW1lOiBcImhhc0RhdGVwaWNrZXJcIixcblxuXHQvL0tlZXAgdHJhY2sgb2YgdGhlIG1heGltdW0gbnVtYmVyIG9mIHJvd3MgZGlzcGxheWVkIChzZWUgIzcwNDMpXG5cdG1heFJvd3M6IDQsXG5cblx0Ly8gVE9ETyByZW5hbWUgdG8gXCJ3aWRnZXRcIiB3aGVuIHN3aXRjaGluZyB0byB3aWRnZXQgZmFjdG9yeVxuXHRfd2lkZ2V0RGF0ZXBpY2tlcjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZHBEaXY7XG5cdH0sXG5cblx0LyogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2V0dGluZ3MgZm9yIGFsbCBpbnN0YW5jZXMgb2YgdGhlIGRhdGUgcGlja2VyLlxuXHQgKiBAcGFyYW0gIHNldHRpbmdzICBvYmplY3QgLSB0aGUgbmV3IHNldHRpbmdzIHRvIHVzZSBhcyBkZWZhdWx0cyAoYW5vbnltb3VzIG9iamVjdClcblx0ICogQHJldHVybiB0aGUgbWFuYWdlciBvYmplY3Rcblx0ICovXG5cdHNldERlZmF1bHRzOiBmdW5jdGlvbiggc2V0dGluZ3MgKSB7XG5cdFx0ZGF0ZXBpY2tlcl9leHRlbmRSZW1vdmUoIHRoaXMuX2RlZmF1bHRzLCBzZXR0aW5ncyB8fCB7fSApO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdC8qIEF0dGFjaCB0aGUgZGF0ZSBwaWNrZXIgdG8gYSBqUXVlcnkgc2VsZWN0aW9uLlxuXHQgKiBAcGFyYW0gIHRhcmdldFx0ZWxlbWVudCAtIHRoZSB0YXJnZXQgaW5wdXQgZmllbGQgb3IgZGl2aXNpb24gb3Igc3BhblxuXHQgKiBAcGFyYW0gIHNldHRpbmdzICBvYmplY3QgLSB0aGUgbmV3IHNldHRpbmdzIHRvIHVzZSBmb3IgdGhpcyBkYXRlIHBpY2tlciBpbnN0YW5jZSAoYW5vbnltb3VzKVxuXHQgKi9cblx0X2F0dGFjaERhdGVwaWNrZXI6IGZ1bmN0aW9uKCB0YXJnZXQsIHNldHRpbmdzICkge1xuXHRcdHZhciBub2RlTmFtZSwgaW5saW5lLCBpbnN0O1xuXHRcdG5vZGVOYW1lID0gdGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0aW5saW5lID0gKCBub2RlTmFtZSA9PT0gXCJkaXZcIiB8fCBub2RlTmFtZSA9PT0gXCJzcGFuXCIgKTtcblx0XHRpZiAoICF0YXJnZXQuaWQgKSB7XG5cdFx0XHR0aGlzLnV1aWQgKz0gMTtcblx0XHRcdHRhcmdldC5pZCA9IFwiZHBcIiArIHRoaXMudXVpZDtcblx0XHR9XG5cdFx0aW5zdCA9IHRoaXMuX25ld0luc3QoICQoIHRhcmdldCApLCBpbmxpbmUgKTtcblx0XHRpbnN0LnNldHRpbmdzID0gJC5leHRlbmQoIHt9LCBzZXR0aW5ncyB8fCB7fSApO1xuXHRcdGlmICggbm9kZU5hbWUgPT09IFwiaW5wdXRcIiApIHtcblx0XHRcdHRoaXMuX2Nvbm5lY3REYXRlcGlja2VyKCB0YXJnZXQsIGluc3QgKTtcblx0XHR9IGVsc2UgaWYgKCBpbmxpbmUgKSB7XG5cdFx0XHR0aGlzLl9pbmxpbmVEYXRlcGlja2VyKCB0YXJnZXQsIGluc3QgKTtcblx0XHR9XG5cdH0sXG5cblx0LyogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9iamVjdC4gKi9cblx0X25ld0luc3Q6IGZ1bmN0aW9uKCB0YXJnZXQsIGlubGluZSApIHtcblx0XHR2YXIgaWQgPSB0YXJnZXRbIDAgXS5pZC5yZXBsYWNlKCAvKFteQS1aYS16MC05X1xcLV0pL2csIFwiXFxcXFxcXFwkMVwiICk7IC8vIGVzY2FwZSBqUXVlcnkgbWV0YSBjaGFyc1xuXHRcdHJldHVybiB7IGlkOiBpZCwgaW5wdXQ6IHRhcmdldCwgLy8gYXNzb2NpYXRlZCB0YXJnZXRcblx0XHRcdHNlbGVjdGVkRGF5OiAwLCBzZWxlY3RlZE1vbnRoOiAwLCBzZWxlY3RlZFllYXI6IDAsIC8vIGN1cnJlbnQgc2VsZWN0aW9uXG5cdFx0XHRkcmF3TW9udGg6IDAsIGRyYXdZZWFyOiAwLCAvLyBtb250aCBiZWluZyBkcmF3blxuXHRcdFx0aW5saW5lOiBpbmxpbmUsIC8vIGlzIGRhdGVwaWNrZXIgaW5saW5lIG9yIG5vdFxuXHRcdFx0ZHBEaXY6ICggIWlubGluZSA/IHRoaXMuZHBEaXYgOiAvLyBwcmVzZW50YXRpb24gZGl2XG5cdFx0XHRkYXRlcGlja2VyX2JpbmRIb3ZlciggJCggXCI8ZGl2IGNsYXNzPSdcIiArIHRoaXMuX2lubGluZUNsYXNzICsgXCIgdWktZGF0ZXBpY2tlciB1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktaGVscGVyLWNsZWFyZml4IHVpLWNvcm5lci1hbGwnPjwvZGl2PlwiICkgKSApIH07XG5cdH0sXG5cblx0LyogQXR0YWNoIHRoZSBkYXRlIHBpY2tlciB0byBhbiBpbnB1dCBmaWVsZC4gKi9cblx0X2Nvbm5lY3REYXRlcGlja2VyOiBmdW5jdGlvbiggdGFyZ2V0LCBpbnN0ICkge1xuXHRcdHZhciBpbnB1dCA9ICQoIHRhcmdldCApO1xuXHRcdGluc3QuYXBwZW5kID0gJCggW10gKTtcblx0XHRpbnN0LnRyaWdnZXIgPSAkKCBbXSApO1xuXHRcdGlmICggaW5wdXQuaGFzQ2xhc3MoIHRoaXMubWFya2VyQ2xhc3NOYW1lICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuX2F0dGFjaG1lbnRzKCBpbnB1dCwgaW5zdCApO1xuXHRcdGlucHV0LmFkZENsYXNzKCB0aGlzLm1hcmtlckNsYXNzTmFtZSApLm9uKCBcImtleWRvd25cIiwgdGhpcy5fZG9LZXlEb3duICkuXG5cdFx0XHRvbiggXCJrZXlwcmVzc1wiLCB0aGlzLl9kb0tleVByZXNzICkub24oIFwia2V5dXBcIiwgdGhpcy5fZG9LZXlVcCApO1xuXHRcdHRoaXMuX2F1dG9TaXplKCBpbnN0ICk7XG5cdFx0JC5kYXRhKCB0YXJnZXQsIFwiZGF0ZXBpY2tlclwiLCBpbnN0ICk7XG5cblx0XHQvL0lmIGRpc2FibGVkIG9wdGlvbiBpcyB0cnVlLCBkaXNhYmxlIHRoZSBkYXRlcGlja2VyIG9uY2UgaXQgaGFzIGJlZW4gYXR0YWNoZWQgdG8gdGhlIGlucHV0IChzZWUgdGlja2V0ICM1NjY1KVxuXHRcdGlmICggaW5zdC5zZXR0aW5ncy5kaXNhYmxlZCApIHtcblx0XHRcdHRoaXMuX2Rpc2FibGVEYXRlcGlja2VyKCB0YXJnZXQgKTtcblx0XHR9XG5cdH0sXG5cblx0LyogTWFrZSBhdHRhY2htZW50cyBiYXNlZCBvbiBzZXR0aW5ncy4gKi9cblx0X2F0dGFjaG1lbnRzOiBmdW5jdGlvbiggaW5wdXQsIGluc3QgKSB7XG5cdFx0dmFyIHNob3dPbiwgYnV0dG9uVGV4dCwgYnV0dG9uSW1hZ2UsXG5cdFx0XHRhcHBlbmRUZXh0ID0gdGhpcy5fZ2V0KCBpbnN0LCBcImFwcGVuZFRleHRcIiApLFxuXHRcdFx0aXNSVEwgPSB0aGlzLl9nZXQoIGluc3QsIFwiaXNSVExcIiApO1xuXG5cdFx0aWYgKCBpbnN0LmFwcGVuZCApIHtcblx0XHRcdGluc3QuYXBwZW5kLnJlbW92ZSgpO1xuXHRcdH1cblx0XHRpZiAoIGFwcGVuZFRleHQgKSB7XG5cdFx0XHRpbnN0LmFwcGVuZCA9ICQoIFwiPHNwYW4+XCIgKVxuXHRcdFx0XHQuYWRkQ2xhc3MoIHRoaXMuX2FwcGVuZENsYXNzIClcblx0XHRcdFx0LnRleHQoIGFwcGVuZFRleHQgKTtcblx0XHRcdGlucHV0WyBpc1JUTCA/IFwiYmVmb3JlXCIgOiBcImFmdGVyXCIgXSggaW5zdC5hcHBlbmQgKTtcblx0XHR9XG5cblx0XHRpbnB1dC5vZmYoIFwiZm9jdXNcIiwgdGhpcy5fc2hvd0RhdGVwaWNrZXIgKTtcblxuXHRcdGlmICggaW5zdC50cmlnZ2VyICkge1xuXHRcdFx0aW5zdC50cmlnZ2VyLnJlbW92ZSgpO1xuXHRcdH1cblxuXHRcdHNob3dPbiA9IHRoaXMuX2dldCggaW5zdCwgXCJzaG93T25cIiApO1xuXHRcdGlmICggc2hvd09uID09PSBcImZvY3VzXCIgfHwgc2hvd09uID09PSBcImJvdGhcIiApIHsgLy8gcG9wLXVwIGRhdGUgcGlja2VyIHdoZW4gaW4gdGhlIG1hcmtlZCBmaWVsZFxuXHRcdFx0aW5wdXQub24oIFwiZm9jdXNcIiwgdGhpcy5fc2hvd0RhdGVwaWNrZXIgKTtcblx0XHR9XG5cdFx0aWYgKCBzaG93T24gPT09IFwiYnV0dG9uXCIgfHwgc2hvd09uID09PSBcImJvdGhcIiApIHsgLy8gcG9wLXVwIGRhdGUgcGlja2VyIHdoZW4gYnV0dG9uIGNsaWNrZWRcblx0XHRcdGJ1dHRvblRleHQgPSB0aGlzLl9nZXQoIGluc3QsIFwiYnV0dG9uVGV4dFwiICk7XG5cdFx0XHRidXR0b25JbWFnZSA9IHRoaXMuX2dldCggaW5zdCwgXCJidXR0b25JbWFnZVwiICk7XG5cblx0XHRcdGlmICggdGhpcy5fZ2V0KCBpbnN0LCBcImJ1dHRvbkltYWdlT25seVwiICkgKSB7XG5cdFx0XHRcdGluc3QudHJpZ2dlciA9ICQoIFwiPGltZz5cIiApXG5cdFx0XHRcdFx0LmFkZENsYXNzKCB0aGlzLl90cmlnZ2VyQ2xhc3MgKVxuXHRcdFx0XHRcdC5hdHRyKCB7XG5cdFx0XHRcdFx0XHRzcmM6IGJ1dHRvbkltYWdlLFxuXHRcdFx0XHRcdFx0YWx0OiBidXR0b25UZXh0LFxuXHRcdFx0XHRcdFx0dGl0bGU6IGJ1dHRvblRleHRcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpbnN0LnRyaWdnZXIgPSAkKCBcIjxidXR0b24gdHlwZT0nYnV0dG9uJz5cIiApXG5cdFx0XHRcdFx0LmFkZENsYXNzKCB0aGlzLl90cmlnZ2VyQ2xhc3MgKTtcblx0XHRcdFx0aWYgKCBidXR0b25JbWFnZSApIHtcblx0XHRcdFx0XHRpbnN0LnRyaWdnZXIuaHRtbChcblx0XHRcdFx0XHRcdCQoIFwiPGltZz5cIiApXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCB7XG5cdFx0XHRcdFx0XHRcdFx0c3JjOiBidXR0b25JbWFnZSxcblx0XHRcdFx0XHRcdFx0XHRhbHQ6IGJ1dHRvblRleHQsXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGJ1dHRvblRleHRcblx0XHRcdFx0XHRcdFx0fSApXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpbnN0LnRyaWdnZXIudGV4dCggYnV0dG9uVGV4dCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlucHV0WyBpc1JUTCA/IFwiYmVmb3JlXCIgOiBcImFmdGVyXCIgXSggaW5zdC50cmlnZ2VyICk7XG5cdFx0XHRpbnN0LnRyaWdnZXIub24oIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggJC5kYXRlcGlja2VyLl9kYXRlcGlja2VyU2hvd2luZyAmJiAkLmRhdGVwaWNrZXIuX2xhc3RJbnB1dCA9PT0gaW5wdXRbIDAgXSApIHtcblx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX2hpZGVEYXRlcGlja2VyKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoICQuZGF0ZXBpY2tlci5fZGF0ZXBpY2tlclNob3dpbmcgJiYgJC5kYXRlcGlja2VyLl9sYXN0SW5wdXQgIT09IGlucHV0WyAwIF0gKSB7XG5cdFx0XHRcdFx0JC5kYXRlcGlja2VyLl9oaWRlRGF0ZXBpY2tlcigpO1xuXHRcdFx0XHRcdCQuZGF0ZXBpY2tlci5fc2hvd0RhdGVwaWNrZXIoIGlucHV0WyAwIF0gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX3Nob3dEYXRlcGlja2VyKCBpbnB1dFsgMCBdICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fSxcblxuXHQvKiBBcHBseSB0aGUgbWF4aW11bSBsZW5ndGggZm9yIHRoZSBkYXRlIGZvcm1hdC4gKi9cblx0X2F1dG9TaXplOiBmdW5jdGlvbiggaW5zdCApIHtcblx0XHRpZiAoIHRoaXMuX2dldCggaW5zdCwgXCJhdXRvU2l6ZVwiICkgJiYgIWluc3QuaW5saW5lICkge1xuXHRcdFx0dmFyIGZpbmRNYXgsIG1heCwgbWF4SSwgaSxcblx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKCAyMDA5LCAxMiAtIDEsIDIwICksIC8vIEVuc3VyZSBkb3VibGUgZGlnaXRzXG5cdFx0XHRcdGRhdGVGb3JtYXQgPSB0aGlzLl9nZXQoIGluc3QsIFwiZGF0ZUZvcm1hdFwiICk7XG5cblx0XHRcdGlmICggZGF0ZUZvcm1hdC5tYXRjaCggL1tETV0vICkgKSB7XG5cdFx0XHRcdGZpbmRNYXggPSBmdW5jdGlvbiggbmFtZXMgKSB7XG5cdFx0XHRcdFx0bWF4ID0gMDtcblx0XHRcdFx0XHRtYXhJID0gMDtcblx0XHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRcdFx0aWYgKCBuYW1lc1sgaSBdLmxlbmd0aCA+IG1heCApIHtcblx0XHRcdFx0XHRcdFx0bWF4ID0gbmFtZXNbIGkgXS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdG1heEkgPSBpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gbWF4STtcblx0XHRcdFx0fTtcblx0XHRcdFx0ZGF0ZS5zZXRNb250aCggZmluZE1heCggdGhpcy5fZ2V0KCBpbnN0LCAoIGRhdGVGb3JtYXQubWF0Y2goIC9NTS8gKSA/XG5cdFx0XHRcdFx0XCJtb250aE5hbWVzXCIgOiBcIm1vbnRoTmFtZXNTaG9ydFwiICkgKSApICk7XG5cdFx0XHRcdGRhdGUuc2V0RGF0ZSggZmluZE1heCggdGhpcy5fZ2V0KCBpbnN0LCAoIGRhdGVGb3JtYXQubWF0Y2goIC9ERC8gKSA/XG5cdFx0XHRcdFx0XCJkYXlOYW1lc1wiIDogXCJkYXlOYW1lc1Nob3J0XCIgKSApICkgKyAyMCAtIGRhdGUuZ2V0RGF5KCkgKTtcblx0XHRcdH1cblx0XHRcdGluc3QuaW5wdXQuYXR0ciggXCJzaXplXCIsIHRoaXMuX2Zvcm1hdERhdGUoIGluc3QsIGRhdGUgKS5sZW5ndGggKTtcblx0XHR9XG5cdH0sXG5cblx0LyogQXR0YWNoIGFuIGlubGluZSBkYXRlIHBpY2tlciB0byBhIGRpdi4gKi9cblx0X2lubGluZURhdGVwaWNrZXI6IGZ1bmN0aW9uKCB0YXJnZXQsIGluc3QgKSB7XG5cdFx0dmFyIGRpdlNwYW4gPSAkKCB0YXJnZXQgKTtcblx0XHRpZiAoIGRpdlNwYW4uaGFzQ2xhc3MoIHRoaXMubWFya2VyQ2xhc3NOYW1lICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGRpdlNwYW4uYWRkQ2xhc3MoIHRoaXMubWFya2VyQ2xhc3NOYW1lICkuYXBwZW5kKCBpbnN0LmRwRGl2ICk7XG5cdFx0JC5kYXRhKCB0YXJnZXQsIFwiZGF0ZXBpY2tlclwiLCBpbnN0ICk7XG5cdFx0dGhpcy5fc2V0RGF0ZSggaW5zdCwgdGhpcy5fZ2V0RGVmYXVsdERhdGUoIGluc3QgKSwgdHJ1ZSApO1xuXHRcdHRoaXMuX3VwZGF0ZURhdGVwaWNrZXIoIGluc3QgKTtcblx0XHR0aGlzLl91cGRhdGVBbHRlcm5hdGUoIGluc3QgKTtcblxuXHRcdC8vSWYgZGlzYWJsZWQgb3B0aW9uIGlzIHRydWUsIGRpc2FibGUgdGhlIGRhdGVwaWNrZXIgYmVmb3JlIHNob3dpbmcgaXQgKHNlZSB0aWNrZXQgIzU2NjUpXG5cdFx0aWYgKCBpbnN0LnNldHRpbmdzLmRpc2FibGVkICkge1xuXHRcdFx0dGhpcy5fZGlzYWJsZURhdGVwaWNrZXIoIHRhcmdldCApO1xuXHRcdH1cblxuXHRcdC8vIFNldCBkaXNwbGF5OmJsb2NrIGluIHBsYWNlIG9mIGluc3QuZHBEaXYuc2hvdygpIHdoaWNoIHdvbid0IHdvcmsgb24gZGlzY29ubmVjdGVkIGVsZW1lbnRzXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmpxdWVyeXVpLmNvbS90aWNrZXQvNzU1MiAtIEEgRGF0ZXBpY2tlciBjcmVhdGVkIG9uIGEgZGV0YWNoZWQgZGl2IGhhcyB6ZXJvIGhlaWdodFxuXHRcdGluc3QuZHBEaXYuY3NzKCBcImRpc3BsYXlcIiwgXCJibG9ja1wiICk7XG5cdH0sXG5cblx0LyogUG9wLXVwIHRoZSBkYXRlIHBpY2tlciBpbiBhIFwiZGlhbG9nXCIgYm94LlxuXHQgKiBAcGFyYW0gIGlucHV0IGVsZW1lbnQgLSBpZ25vcmVkXG5cdCAqIEBwYXJhbSAgZGF0ZVx0c3RyaW5nIG9yIERhdGUgLSB0aGUgaW5pdGlhbCBkYXRlIHRvIGRpc3BsYXlcblx0ICogQHBhcmFtICBvblNlbGVjdCAgZnVuY3Rpb24gLSB0aGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgZGF0ZSBpcyBzZWxlY3RlZFxuXHQgKiBAcGFyYW0gIHNldHRpbmdzICBvYmplY3QgLSB1cGRhdGUgdGhlIGRpYWxvZyBkYXRlIHBpY2tlciBpbnN0YW5jZSdzIHNldHRpbmdzIChhbm9ueW1vdXMgb2JqZWN0KVxuXHQgKiBAcGFyYW0gIHBvcyBpbnRbMl0gLSBjb29yZGluYXRlcyBmb3IgdGhlIGRpYWxvZydzIHBvc2l0aW9uIHdpdGhpbiB0aGUgc2NyZWVuIG9yXG5cdCAqXHRcdFx0XHRcdGV2ZW50IC0gd2l0aCB4L3kgY29vcmRpbmF0ZXMgb3Jcblx0ICpcdFx0XHRcdFx0bGVhdmUgZW1wdHkgZm9yIGRlZmF1bHQgKHNjcmVlbiBjZW50cmUpXG5cdCAqIEByZXR1cm4gdGhlIG1hbmFnZXIgb2JqZWN0XG5cdCAqL1xuXHRfZGlhbG9nRGF0ZXBpY2tlcjogZnVuY3Rpb24oIGlucHV0LCBkYXRlLCBvblNlbGVjdCwgc2V0dGluZ3MsIHBvcyApIHtcblx0XHR2YXIgaWQsIGJyb3dzZXJXaWR0aCwgYnJvd3NlckhlaWdodCwgc2Nyb2xsWCwgc2Nyb2xsWSxcblx0XHRcdGluc3QgPSB0aGlzLl9kaWFsb2dJbnN0OyAvLyBpbnRlcm5hbCBpbnN0YW5jZVxuXG5cdFx0aWYgKCAhaW5zdCApIHtcblx0XHRcdHRoaXMudXVpZCArPSAxO1xuXHRcdFx0aWQgPSBcImRwXCIgKyB0aGlzLnV1aWQ7XG5cdFx0XHR0aGlzLl9kaWFsb2dJbnB1dCA9ICQoIFwiPGlucHV0IHR5cGU9J3RleHQnIGlkPSdcIiArIGlkICtcblx0XHRcdFx0XCInIHN0eWxlPSdwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLTEwMHB4OyB3aWR0aDogMHB4OycvPlwiICk7XG5cdFx0XHR0aGlzLl9kaWFsb2dJbnB1dC5vbiggXCJrZXlkb3duXCIsIHRoaXMuX2RvS2V5RG93biApO1xuXHRcdFx0JCggXCJib2R5XCIgKS5hcHBlbmQoIHRoaXMuX2RpYWxvZ0lucHV0ICk7XG5cdFx0XHRpbnN0ID0gdGhpcy5fZGlhbG9nSW5zdCA9IHRoaXMuX25ld0luc3QoIHRoaXMuX2RpYWxvZ0lucHV0LCBmYWxzZSApO1xuXHRcdFx0aW5zdC5zZXR0aW5ncyA9IHt9O1xuXHRcdFx0JC5kYXRhKCB0aGlzLl9kaWFsb2dJbnB1dFsgMCBdLCBcImRhdGVwaWNrZXJcIiwgaW5zdCApO1xuXHRcdH1cblx0XHRkYXRlcGlja2VyX2V4dGVuZFJlbW92ZSggaW5zdC5zZXR0aW5ncywgc2V0dGluZ3MgfHwge30gKTtcblx0XHRkYXRlID0gKCBkYXRlICYmIGRhdGUuY29uc3RydWN0b3IgPT09IERhdGUgPyB0aGlzLl9mb3JtYXREYXRlKCBpbnN0LCBkYXRlICkgOiBkYXRlICk7XG5cdFx0dGhpcy5fZGlhbG9nSW5wdXQudmFsKCBkYXRlICk7XG5cblx0XHR0aGlzLl9wb3MgPSAoIHBvcyA/ICggcG9zLmxlbmd0aCA/IHBvcyA6IFsgcG9zLnBhZ2VYLCBwb3MucGFnZVkgXSApIDogbnVsbCApO1xuXHRcdGlmICggIXRoaXMuX3BvcyApIHtcblx0XHRcdGJyb3dzZXJXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcblx0XHRcdGJyb3dzZXJIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXHRcdFx0c2Nyb2xsWCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcblx0XHRcdHNjcm9sbFkgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuXHRcdFx0dGhpcy5fcG9zID0gLy8gc2hvdWxkIHVzZSBhY3R1YWwgd2lkdGgvaGVpZ2h0IGJlbG93XG5cdFx0XHRcdFsgKCBicm93c2VyV2lkdGggLyAyICkgLSAxMDAgKyBzY3JvbGxYLCAoIGJyb3dzZXJIZWlnaHQgLyAyICkgLSAxNTAgKyBzY3JvbGxZIF07XG5cdFx0fVxuXG5cdFx0Ly8gTW92ZSBpbnB1dCBvbiBzY3JlZW4gZm9yIGZvY3VzLCBidXQgaGlkZGVuIGJlaGluZCBkaWFsb2dcblx0XHR0aGlzLl9kaWFsb2dJbnB1dC5jc3MoIFwibGVmdFwiLCAoIHRoaXMuX3Bvc1sgMCBdICsgMjAgKSArIFwicHhcIiApLmNzcyggXCJ0b3BcIiwgdGhpcy5fcG9zWyAxIF0gKyBcInB4XCIgKTtcblx0XHRpbnN0LnNldHRpbmdzLm9uU2VsZWN0ID0gb25TZWxlY3Q7XG5cdFx0dGhpcy5faW5EaWFsb2cgPSB0cnVlO1xuXHRcdHRoaXMuZHBEaXYuYWRkQ2xhc3MoIHRoaXMuX2RpYWxvZ0NsYXNzICk7XG5cdFx0dGhpcy5fc2hvd0RhdGVwaWNrZXIoIHRoaXMuX2RpYWxvZ0lucHV0WyAwIF0gKTtcblx0XHRpZiAoICQuYmxvY2tVSSApIHtcblx0XHRcdCQuYmxvY2tVSSggdGhpcy5kcERpdiApO1xuXHRcdH1cblx0XHQkLmRhdGEoIHRoaXMuX2RpYWxvZ0lucHV0WyAwIF0sIFwiZGF0ZXBpY2tlclwiLCBpbnN0ICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0LyogRGV0YWNoIGEgZGF0ZXBpY2tlciBmcm9tIGl0cyBjb250cm9sLlxuXHQgKiBAcGFyYW0gIHRhcmdldFx0ZWxlbWVudCAtIHRoZSB0YXJnZXQgaW5wdXQgZmllbGQgb3IgZGl2aXNpb24gb3Igc3BhblxuXHQgKi9cblx0X2Rlc3Ryb3lEYXRlcGlja2VyOiBmdW5jdGlvbiggdGFyZ2V0ICkge1xuXHRcdHZhciBub2RlTmFtZSxcblx0XHRcdCR0YXJnZXQgPSAkKCB0YXJnZXQgKSxcblx0XHRcdGluc3QgPSAkLmRhdGEoIHRhcmdldCwgXCJkYXRlcGlja2VyXCIgKTtcblxuXHRcdGlmICggISR0YXJnZXQuaGFzQ2xhc3MoIHRoaXMubWFya2VyQ2xhc3NOYW1lICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bm9kZU5hbWUgPSB0YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHQkLnJlbW92ZURhdGEoIHRhcmdldCwgXCJkYXRlcGlja2VyXCIgKTtcblx0XHRpZiAoIG5vZGVOYW1lID09PSBcImlucHV0XCIgKSB7XG5cdFx0XHRpbnN0LmFwcGVuZC5yZW1vdmUoKTtcblx0XHRcdGluc3QudHJpZ2dlci5yZW1vdmUoKTtcblx0XHRcdCR0YXJnZXQucmVtb3ZlQ2xhc3MoIHRoaXMubWFya2VyQ2xhc3NOYW1lICkuXG5cdFx0XHRcdG9mZiggXCJmb2N1c1wiLCB0aGlzLl9zaG93RGF0ZXBpY2tlciApLlxuXHRcdFx0XHRvZmYoIFwia2V5ZG93blwiLCB0aGlzLl9kb0tleURvd24gKS5cblx0XHRcdFx0b2ZmKCBcImtleXByZXNzXCIsIHRoaXMuX2RvS2V5UHJlc3MgKS5cblx0XHRcdFx0b2ZmKCBcImtleXVwXCIsIHRoaXMuX2RvS2V5VXAgKTtcblx0XHR9IGVsc2UgaWYgKCBub2RlTmFtZSA9PT0gXCJkaXZcIiB8fCBub2RlTmFtZSA9PT0gXCJzcGFuXCIgKSB7XG5cdFx0XHQkdGFyZ2V0LnJlbW92ZUNsYXNzKCB0aGlzLm1hcmtlckNsYXNzTmFtZSApLmVtcHR5KCk7XG5cdFx0fVxuXG5cdFx0JC5kYXRlcGlja2VyLl9oaWRlRGF0ZXBpY2tlcigpO1xuXHRcdGlmICggZGF0ZXBpY2tlcl9pbnN0QWN0aXZlID09PSBpbnN0ICkge1xuXHRcdFx0ZGF0ZXBpY2tlcl9pbnN0QWN0aXZlID0gbnVsbDtcblx0XHRcdHRoaXMuX2N1ckluc3QgPSBudWxsO1xuXHRcdH1cblx0fSxcblxuXHQvKiBFbmFibGUgdGhlIGRhdGUgcGlja2VyIHRvIGEgalF1ZXJ5IHNlbGVjdGlvbi5cblx0ICogQHBhcmFtICB0YXJnZXRcdGVsZW1lbnQgLSB0aGUgdGFyZ2V0IGlucHV0IGZpZWxkIG9yIGRpdmlzaW9uIG9yIHNwYW5cblx0ICovXG5cdF9lbmFibGVEYXRlcGlja2VyOiBmdW5jdGlvbiggdGFyZ2V0ICkge1xuXHRcdHZhciBub2RlTmFtZSwgaW5saW5lLFxuXHRcdFx0JHRhcmdldCA9ICQoIHRhcmdldCApLFxuXHRcdFx0aW5zdCA9ICQuZGF0YSggdGFyZ2V0LCBcImRhdGVwaWNrZXJcIiApO1xuXG5cdFx0aWYgKCAhJHRhcmdldC5oYXNDbGFzcyggdGhpcy5tYXJrZXJDbGFzc05hbWUgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRub2RlTmFtZSA9IHRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdGlmICggbm9kZU5hbWUgPT09IFwiaW5wdXRcIiApIHtcblx0XHRcdHRhcmdldC5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0aW5zdC50cmlnZ2VyLmZpbHRlciggXCJidXR0b25cIiApLlxuXHRcdFx0XHRlYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHRcdH0gKS5lbmQoKS5cblx0XHRcdFx0ZmlsdGVyKCBcImltZ1wiICkuY3NzKCB7IG9wYWNpdHk6IFwiMS4wXCIsIGN1cnNvcjogXCJcIiB9ICk7XG5cdFx0fSBlbHNlIGlmICggbm9kZU5hbWUgPT09IFwiZGl2XCIgfHwgbm9kZU5hbWUgPT09IFwic3BhblwiICkge1xuXHRcdFx0aW5saW5lID0gJHRhcmdldC5jaGlsZHJlbiggXCIuXCIgKyB0aGlzLl9pbmxpbmVDbGFzcyApO1xuXHRcdFx0aW5saW5lLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoIFwidWktc3RhdGUtZGlzYWJsZWRcIiApO1xuXHRcdFx0aW5saW5lLmZpbmQoIFwic2VsZWN0LnVpLWRhdGVwaWNrZXItbW9udGgsIHNlbGVjdC51aS1kYXRlcGlja2VyLXllYXJcIiApLlxuXHRcdFx0XHRwcm9wKCBcImRpc2FibGVkXCIsIGZhbHNlICk7XG5cdFx0fVxuXHRcdHRoaXMuX2Rpc2FibGVkSW5wdXRzID0gJC5tYXAoIHRoaXMuX2Rpc2FibGVkSW5wdXRzLFxuXG5cdFx0XHQvLyBEZWxldGUgZW50cnlcblx0XHRcdGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdFx0cmV0dXJuICggdmFsdWUgPT09IHRhcmdldCA/IG51bGwgOiB2YWx1ZSApO1xuXHRcdFx0fSApO1xuXHR9LFxuXG5cdC8qIERpc2FibGUgdGhlIGRhdGUgcGlja2VyIHRvIGEgalF1ZXJ5IHNlbGVjdGlvbi5cblx0ICogQHBhcmFtICB0YXJnZXRcdGVsZW1lbnQgLSB0aGUgdGFyZ2V0IGlucHV0IGZpZWxkIG9yIGRpdmlzaW9uIG9yIHNwYW5cblx0ICovXG5cdF9kaXNhYmxlRGF0ZXBpY2tlcjogZnVuY3Rpb24oIHRhcmdldCApIHtcblx0XHR2YXIgbm9kZU5hbWUsIGlubGluZSxcblx0XHRcdCR0YXJnZXQgPSAkKCB0YXJnZXQgKSxcblx0XHRcdGluc3QgPSAkLmRhdGEoIHRhcmdldCwgXCJkYXRlcGlja2VyXCIgKTtcblxuXHRcdGlmICggISR0YXJnZXQuaGFzQ2xhc3MoIHRoaXMubWFya2VyQ2xhc3NOYW1lICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bm9kZU5hbWUgPSB0YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAoIG5vZGVOYW1lID09PSBcImlucHV0XCIgKSB7XG5cdFx0XHR0YXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0aW5zdC50cmlnZ2VyLmZpbHRlciggXCJidXR0b25cIiApLlxuXHRcdFx0XHRlYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR0aGlzLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fSApLmVuZCgpLlxuXHRcdFx0XHRmaWx0ZXIoIFwiaW1nXCIgKS5jc3MoIHsgb3BhY2l0eTogXCIwLjVcIiwgY3Vyc29yOiBcImRlZmF1bHRcIiB9ICk7XG5cdFx0fSBlbHNlIGlmICggbm9kZU5hbWUgPT09IFwiZGl2XCIgfHwgbm9kZU5hbWUgPT09IFwic3BhblwiICkge1xuXHRcdFx0aW5saW5lID0gJHRhcmdldC5jaGlsZHJlbiggXCIuXCIgKyB0aGlzLl9pbmxpbmVDbGFzcyApO1xuXHRcdFx0aW5saW5lLmNoaWxkcmVuKCkuYWRkQ2xhc3MoIFwidWktc3RhdGUtZGlzYWJsZWRcIiApO1xuXHRcdFx0aW5saW5lLmZpbmQoIFwic2VsZWN0LnVpLWRhdGVwaWNrZXItbW9udGgsIHNlbGVjdC51aS1kYXRlcGlja2VyLXllYXJcIiApLlxuXHRcdFx0XHRwcm9wKCBcImRpc2FibGVkXCIsIHRydWUgKTtcblx0XHR9XG5cdFx0dGhpcy5fZGlzYWJsZWRJbnB1dHMgPSAkLm1hcCggdGhpcy5fZGlzYWJsZWRJbnB1dHMsXG5cblx0XHRcdC8vIERlbGV0ZSBlbnRyeVxuXHRcdFx0ZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0XHRyZXR1cm4gKCB2YWx1ZSA9PT0gdGFyZ2V0ID8gbnVsbCA6IHZhbHVlICk7XG5cdFx0XHR9ICk7XG5cdFx0dGhpcy5fZGlzYWJsZWRJbnB1dHNbIHRoaXMuX2Rpc2FibGVkSW5wdXRzLmxlbmd0aCBdID0gdGFyZ2V0O1xuXHR9LFxuXG5cdC8qIElzIHRoZSBmaXJzdCBmaWVsZCBpbiBhIGpRdWVyeSBjb2xsZWN0aW9uIGRpc2FibGVkIGFzIGEgZGF0ZXBpY2tlcj9cblx0ICogQHBhcmFtICB0YXJnZXRcdGVsZW1lbnQgLSB0aGUgdGFyZ2V0IGlucHV0IGZpZWxkIG9yIGRpdmlzaW9uIG9yIHNwYW5cblx0ICogQHJldHVybiBib29sZWFuIC0gdHJ1ZSBpZiBkaXNhYmxlZCwgZmFsc2UgaWYgZW5hYmxlZFxuXHQgKi9cblx0X2lzRGlzYWJsZWREYXRlcGlja2VyOiBmdW5jdGlvbiggdGFyZ2V0ICkge1xuXHRcdGlmICggIXRhcmdldCApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGhpcy5fZGlzYWJsZWRJbnB1dHMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRpZiAoIHRoaXMuX2Rpc2FibGVkSW5wdXRzWyBpIF0gPT09IHRhcmdldCApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fSxcblxuXHQvKiBSZXRyaWV2ZSB0aGUgaW5zdGFuY2UgZGF0YSBmb3IgdGhlIHRhcmdldCBjb250cm9sLlxuXHQgKiBAcGFyYW0gIHRhcmdldCAgZWxlbWVudCAtIHRoZSB0YXJnZXQgaW5wdXQgZmllbGQgb3IgZGl2aXNpb24gb3Igc3BhblxuXHQgKiBAcmV0dXJuICBvYmplY3QgLSB0aGUgYXNzb2NpYXRlZCBpbnN0YW5jZSBkYXRhXG5cdCAqIEB0aHJvd3MgIGVycm9yIGlmIGEgalF1ZXJ5IHByb2JsZW0gZ2V0dGluZyBkYXRhXG5cdCAqL1xuXHRfZ2V0SW5zdDogZnVuY3Rpb24oIHRhcmdldCApIHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuICQuZGF0YSggdGFyZ2V0LCBcImRhdGVwaWNrZXJcIiApO1xuXHRcdH0gY2F0Y2ggKCBlcnIgKSB7XG5cdFx0XHR0aHJvdyBcIk1pc3NpbmcgaW5zdGFuY2UgZGF0YSBmb3IgdGhpcyBkYXRlcGlja2VyXCI7XG5cdFx0fVxuXHR9LFxuXG5cdC8qIFVwZGF0ZSBvciByZXRyaWV2ZSB0aGUgc2V0dGluZ3MgZm9yIGEgZGF0ZSBwaWNrZXIgYXR0YWNoZWQgdG8gYW4gaW5wdXQgZmllbGQgb3IgZGl2aXNpb24uXG5cdCAqIEBwYXJhbSAgdGFyZ2V0ICBlbGVtZW50IC0gdGhlIHRhcmdldCBpbnB1dCBmaWVsZCBvciBkaXZpc2lvbiBvciBzcGFuXG5cdCAqIEBwYXJhbSAgbmFtZVx0b2JqZWN0IC0gdGhlIG5ldyBzZXR0aW5ncyB0byB1cGRhdGUgb3Jcblx0ICpcdFx0XHRcdHN0cmluZyAtIHRoZSBuYW1lIG9mIHRoZSBzZXR0aW5nIHRvIGNoYW5nZSBvciByZXRyaWV2ZSxcblx0ICpcdFx0XHRcdHdoZW4gcmV0cmlldmluZyBhbHNvIFwiYWxsXCIgZm9yIGFsbCBpbnN0YW5jZSBzZXR0aW5ncyBvclxuXHQgKlx0XHRcdFx0XCJkZWZhdWx0c1wiIGZvciBhbGwgZ2xvYmFsIGRlZmF1bHRzXG5cdCAqIEBwYXJhbSAgdmFsdWUgICBhbnkgLSB0aGUgbmV3IHZhbHVlIGZvciB0aGUgc2V0dGluZ1xuXHQgKlx0XHRcdFx0KG9taXQgaWYgYWJvdmUgaXMgYW4gb2JqZWN0IG9yIHRvIHJldHJpZXZlIGEgdmFsdWUpXG5cdCAqL1xuXHRfb3B0aW9uRGF0ZXBpY2tlcjogZnVuY3Rpb24oIHRhcmdldCwgbmFtZSwgdmFsdWUgKSB7XG5cdFx0dmFyIHNldHRpbmdzLCBkYXRlLCBtaW5EYXRlLCBtYXhEYXRlLFxuXHRcdFx0aW5zdCA9IHRoaXMuX2dldEluc3QoIHRhcmdldCApO1xuXG5cdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0cmV0dXJuICggbmFtZSA9PT0gXCJkZWZhdWx0c1wiID8gJC5leHRlbmQoIHt9LCAkLmRhdGVwaWNrZXIuX2RlZmF1bHRzICkgOlxuXHRcdFx0XHQoIGluc3QgPyAoIG5hbWUgPT09IFwiYWxsXCIgPyAkLmV4dGVuZCgge30sIGluc3Quc2V0dGluZ3MgKSA6XG5cdFx0XHRcdHRoaXMuX2dldCggaW5zdCwgbmFtZSApICkgOiBudWxsICkgKTtcblx0XHR9XG5cblx0XHRzZXR0aW5ncyA9IG5hbWUgfHwge307XG5cdFx0aWYgKCB0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHNldHRpbmdzID0ge307XG5cdFx0XHRzZXR0aW5nc1sgbmFtZSBdID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0aWYgKCBpbnN0ICkge1xuXHRcdFx0aWYgKCB0aGlzLl9jdXJJbnN0ID09PSBpbnN0ICkge1xuXHRcdFx0XHR0aGlzLl9oaWRlRGF0ZXBpY2tlcigpO1xuXHRcdFx0fVxuXG5cdFx0XHRkYXRlID0gdGhpcy5fZ2V0RGF0ZURhdGVwaWNrZXIoIHRhcmdldCwgdHJ1ZSApO1xuXHRcdFx0bWluRGF0ZSA9IHRoaXMuX2dldE1pbk1heERhdGUoIGluc3QsIFwibWluXCIgKTtcblx0XHRcdG1heERhdGUgPSB0aGlzLl9nZXRNaW5NYXhEYXRlKCBpbnN0LCBcIm1heFwiICk7XG5cdFx0XHRkYXRlcGlja2VyX2V4dGVuZFJlbW92ZSggaW5zdC5zZXR0aW5ncywgc2V0dGluZ3MgKTtcblxuXHRcdFx0Ly8gcmVmb3JtYXQgdGhlIG9sZCBtaW5EYXRlL21heERhdGUgdmFsdWVzIGlmIGRhdGVGb3JtYXQgY2hhbmdlcyBhbmQgYSBuZXcgbWluRGF0ZS9tYXhEYXRlIGlzbid0IHByb3ZpZGVkXG5cdFx0XHRpZiAoIG1pbkRhdGUgIT09IG51bGwgJiYgc2V0dGluZ3MuZGF0ZUZvcm1hdCAhPT0gdW5kZWZpbmVkICYmIHNldHRpbmdzLm1pbkRhdGUgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0aW5zdC5zZXR0aW5ncy5taW5EYXRlID0gdGhpcy5fZm9ybWF0RGF0ZSggaW5zdCwgbWluRGF0ZSApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBtYXhEYXRlICE9PSBudWxsICYmIHNldHRpbmdzLmRhdGVGb3JtYXQgIT09IHVuZGVmaW5lZCAmJiBzZXR0aW5ncy5tYXhEYXRlID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGluc3Quc2V0dGluZ3MubWF4RGF0ZSA9IHRoaXMuX2Zvcm1hdERhdGUoIGluc3QsIG1heERhdGUgKTtcblx0XHRcdH1cblx0XHRcdGlmICggXCJkaXNhYmxlZFwiIGluIHNldHRpbmdzICkge1xuXHRcdFx0XHRpZiAoIHNldHRpbmdzLmRpc2FibGVkICkge1xuXHRcdFx0XHRcdHRoaXMuX2Rpc2FibGVEYXRlcGlja2VyKCB0YXJnZXQgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLl9lbmFibGVEYXRlcGlja2VyKCB0YXJnZXQgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5fYXR0YWNobWVudHMoICQoIHRhcmdldCApLCBpbnN0ICk7XG5cdFx0XHR0aGlzLl9hdXRvU2l6ZSggaW5zdCApO1xuXHRcdFx0dGhpcy5fc2V0RGF0ZSggaW5zdCwgZGF0ZSApO1xuXHRcdFx0dGhpcy5fdXBkYXRlQWx0ZXJuYXRlKCBpbnN0ICk7XG5cdFx0XHR0aGlzLl91cGRhdGVEYXRlcGlja2VyKCBpbnN0ICk7XG5cdFx0fVxuXHR9LFxuXG5cdC8vIENoYW5nZSBtZXRob2QgZGVwcmVjYXRlZFxuXHRfY2hhbmdlRGF0ZXBpY2tlcjogZnVuY3Rpb24oIHRhcmdldCwgbmFtZSwgdmFsdWUgKSB7XG5cdFx0dGhpcy5fb3B0aW9uRGF0ZXBpY2tlciggdGFyZ2V0LCBuYW1lLCB2YWx1ZSApO1xuXHR9LFxuXG5cdC8qIFJlZHJhdyB0aGUgZGF0ZSBwaWNrZXIgYXR0YWNoZWQgdG8gYW4gaW5wdXQgZmllbGQgb3IgZGl2aXNpb24uXG5cdCAqIEBwYXJhbSAgdGFyZ2V0ICBlbGVtZW50IC0gdGhlIHRhcmdldCBpbnB1dCBmaWVsZCBvciBkaXZpc2lvbiBvciBzcGFuXG5cdCAqL1xuXHRfcmVmcmVzaERhdGVwaWNrZXI6IGZ1bmN0aW9uKCB0YXJnZXQgKSB7XG5cdFx0dmFyIGluc3QgPSB0aGlzLl9nZXRJbnN0KCB0YXJnZXQgKTtcblx0XHRpZiAoIGluc3QgKSB7XG5cdFx0XHR0aGlzLl91cGRhdGVEYXRlcGlja2VyKCBpbnN0ICk7XG5cdFx0fVxuXHR9LFxuXG5cdC8qIFNldCB0aGUgZGF0ZXMgZm9yIGEgalF1ZXJ5IHNlbGVjdGlvbi5cblx0ICogQHBhcmFtICB0YXJnZXQgZWxlbWVudCAtIHRoZSB0YXJnZXQgaW5wdXQgZmllbGQgb3IgZGl2aXNpb24gb3Igc3BhblxuXHQgKiBAcGFyYW0gIGRhdGVcdERhdGUgLSB0aGUgbmV3IGRhdGVcblx0ICovXG5cdF9zZXREYXRlRGF0ZXBpY2tlcjogZnVuY3Rpb24oIHRhcmdldCwgZGF0ZSApIHtcblx0XHR2YXIgaW5zdCA9IHRoaXMuX2dldEluc3QoIHRhcmdldCApO1xuXHRcdGlmICggaW5zdCApIHtcblx0XHRcdHRoaXMuX3NldERhdGUoIGluc3QsIGRhdGUgKTtcblx0XHRcdHRoaXMuX3VwZGF0ZURhdGVwaWNrZXIoIGluc3QgKTtcblx0XHRcdHRoaXMuX3VwZGF0ZUFsdGVybmF0ZSggaW5zdCApO1xuXHRcdH1cblx0fSxcblxuXHQvKiBHZXQgdGhlIGRhdGUocykgZm9yIHRoZSBmaXJzdCBlbnRyeSBpbiBhIGpRdWVyeSBzZWxlY3Rpb24uXG5cdCAqIEBwYXJhbSAgdGFyZ2V0IGVsZW1lbnQgLSB0aGUgdGFyZ2V0IGlucHV0IGZpZWxkIG9yIGRpdmlzaW9uIG9yIHNwYW5cblx0ICogQHBhcmFtICBub0RlZmF1bHQgYm9vbGVhbiAtIHRydWUgaWYgbm8gZGVmYXVsdCBkYXRlIGlzIHRvIGJlIHVzZWRcblx0ICogQHJldHVybiBEYXRlIC0gdGhlIGN1cnJlbnQgZGF0ZVxuXHQgKi9cblx0X2dldERhdGVEYXRlcGlja2VyOiBmdW5jdGlvbiggdGFyZ2V0LCBub0RlZmF1bHQgKSB7XG5cdFx0dmFyIGluc3QgPSB0aGlzLl9nZXRJbnN0KCB0YXJnZXQgKTtcblx0XHRpZiAoIGluc3QgJiYgIWluc3QuaW5saW5lICkge1xuXHRcdFx0dGhpcy5fc2V0RGF0ZUZyb21GaWVsZCggaW5zdCwgbm9EZWZhdWx0ICk7XG5cdFx0fVxuXHRcdHJldHVybiAoIGluc3QgPyB0aGlzLl9nZXREYXRlKCBpbnN0ICkgOiBudWxsICk7XG5cdH0sXG5cblx0LyogSGFuZGxlIGtleXN0cm9rZXMuICovXG5cdF9kb0tleURvd246IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHR2YXIgb25TZWxlY3QsIGRhdGVTdHIsIHNlbCxcblx0XHRcdGluc3QgPSAkLmRhdGVwaWNrZXIuX2dldEluc3QoIGV2ZW50LnRhcmdldCApLFxuXHRcdFx0aGFuZGxlZCA9IHRydWUsXG5cdFx0XHRpc1JUTCA9IGluc3QuZHBEaXYuaXMoIFwiLnVpLWRhdGVwaWNrZXItcnRsXCIgKTtcblxuXHRcdGluc3QuX2tleUV2ZW50ID0gdHJ1ZTtcblx0XHRpZiAoICQuZGF0ZXBpY2tlci5fZGF0ZXBpY2tlclNob3dpbmcgKSB7XG5cdFx0XHRzd2l0Y2ggKCBldmVudC5rZXlDb2RlICkge1xuXHRcdFx0XHRjYXNlIDk6ICQuZGF0ZXBpY2tlci5faGlkZURhdGVwaWNrZXIoKTtcblx0XHRcdFx0XHRcdGhhbmRsZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGJyZWFrOyAvLyBoaWRlIG9uIHRhYiBvdXRcblx0XHRcdFx0Y2FzZSAxMzogc2VsID0gJCggXCJ0ZC5cIiArICQuZGF0ZXBpY2tlci5fZGF5T3ZlckNsYXNzICsgXCI6bm90KC5cIiArXG5cdFx0XHRcdFx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX2N1cnJlbnRDbGFzcyArIFwiKVwiLCBpbnN0LmRwRGl2ICk7XG5cdFx0XHRcdFx0XHRpZiAoIHNlbFsgMCBdICkge1xuXHRcdFx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX3NlbGVjdERheSggZXZlbnQudGFyZ2V0LCBpbnN0LnNlbGVjdGVkTW9udGgsIGluc3Quc2VsZWN0ZWRZZWFyLCBzZWxbIDAgXSApO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRvblNlbGVjdCA9ICQuZGF0ZXBpY2tlci5fZ2V0KCBpbnN0LCBcIm9uU2VsZWN0XCIgKTtcblx0XHRcdFx0XHRcdGlmICggb25TZWxlY3QgKSB7XG5cdFx0XHRcdFx0XHRcdGRhdGVTdHIgPSAkLmRhdGVwaWNrZXIuX2Zvcm1hdERhdGUoIGluc3QgKTtcblxuXHRcdFx0XHRcdFx0XHQvLyBUcmlnZ2VyIGN1c3RvbSBjYWxsYmFja1xuXHRcdFx0XHRcdFx0XHRvblNlbGVjdC5hcHBseSggKCBpbnN0LmlucHV0ID8gaW5zdC5pbnB1dFsgMCBdIDogbnVsbCApLCBbIGRhdGVTdHIsIGluc3QgXSApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0JC5kYXRlcGlja2VyLl9oaWRlRGF0ZXBpY2tlcigpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIGRvbid0IHN1Ym1pdCB0aGUgZm9ybVxuXHRcdFx0XHRjYXNlIDI3OiAkLmRhdGVwaWNrZXIuX2hpZGVEYXRlcGlja2VyKCk7XG5cdFx0XHRcdFx0XHRicmVhazsgLy8gaGlkZSBvbiBlc2NhcGVcblx0XHRcdFx0Y2FzZSAzMzogJC5kYXRlcGlja2VyLl9hZGp1c3REYXRlKCBldmVudC50YXJnZXQsICggZXZlbnQuY3RybEtleSA/XG5cdFx0XHRcdFx0XHRcdC0kLmRhdGVwaWNrZXIuX2dldCggaW5zdCwgXCJzdGVwQmlnTW9udGhzXCIgKSA6XG5cdFx0XHRcdFx0XHRcdC0kLmRhdGVwaWNrZXIuX2dldCggaW5zdCwgXCJzdGVwTW9udGhzXCIgKSApLCBcIk1cIiApO1xuXHRcdFx0XHRcdFx0YnJlYWs7IC8vIHByZXZpb3VzIG1vbnRoL3llYXIgb24gcGFnZSB1cC8rIGN0cmxcblx0XHRcdFx0Y2FzZSAzNDogJC5kYXRlcGlja2VyLl9hZGp1c3REYXRlKCBldmVudC50YXJnZXQsICggZXZlbnQuY3RybEtleSA/XG5cdFx0XHRcdFx0XHRcdCskLmRhdGVwaWNrZXIuX2dldCggaW5zdCwgXCJzdGVwQmlnTW9udGhzXCIgKSA6XG5cdFx0XHRcdFx0XHRcdCskLmRhdGVwaWNrZXIuX2dldCggaW5zdCwgXCJzdGVwTW9udGhzXCIgKSApLCBcIk1cIiApO1xuXHRcdFx0XHRcdFx0YnJlYWs7IC8vIG5leHQgbW9udGgveWVhciBvbiBwYWdlIGRvd24vKyBjdHJsXG5cdFx0XHRcdGNhc2UgMzU6IGlmICggZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5ICkge1xuXHRcdFx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX2NsZWFyRGF0ZSggZXZlbnQudGFyZ2V0ICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRoYW5kbGVkID0gZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5O1xuXHRcdFx0XHRcdFx0YnJlYWs7IC8vIGNsZWFyIG9uIGN0cmwgb3IgY29tbWFuZCArZW5kXG5cdFx0XHRcdGNhc2UgMzY6IGlmICggZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5ICkge1xuXHRcdFx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX2dvdG9Ub2RheSggZXZlbnQudGFyZ2V0ICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRoYW5kbGVkID0gZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5O1xuXHRcdFx0XHRcdFx0YnJlYWs7IC8vIGN1cnJlbnQgb24gY3RybCBvciBjb21tYW5kICtob21lXG5cdFx0XHRcdGNhc2UgMzc6IGlmICggZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5ICkge1xuXHRcdFx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX2FkanVzdERhdGUoIGV2ZW50LnRhcmdldCwgKCBpc1JUTCA/ICsxIDogLTEgKSwgXCJEXCIgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGhhbmRsZWQgPSBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXk7XG5cblx0XHRcdFx0XHRcdC8vIC0xIGRheSBvbiBjdHJsIG9yIGNvbW1hbmQgK2xlZnRcblx0XHRcdFx0XHRcdGlmICggZXZlbnQub3JpZ2luYWxFdmVudC5hbHRLZXkgKSB7XG5cdFx0XHRcdFx0XHRcdCQuZGF0ZXBpY2tlci5fYWRqdXN0RGF0ZSggZXZlbnQudGFyZ2V0LCAoIGV2ZW50LmN0cmxLZXkgP1xuXHRcdFx0XHRcdFx0XHRcdC0kLmRhdGVwaWNrZXIuX2dldCggaW5zdCwgXCJzdGVwQmlnTW9udGhzXCIgKSA6XG5cdFx0XHRcdFx0XHRcdFx0LSQuZGF0ZXBpY2tlci5fZ2V0KCBpbnN0LCBcInN0ZXBNb250aHNcIiApICksIFwiTVwiICk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIG5leHQgbW9udGgveWVhciBvbiBhbHQgK2xlZnQgb24gTWFjXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAzODogaWYgKCBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkgKSB7XG5cdFx0XHRcdFx0XHRcdCQuZGF0ZXBpY2tlci5fYWRqdXN0RGF0ZSggZXZlbnQudGFyZ2V0LCAtNywgXCJEXCIgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGhhbmRsZWQgPSBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXk7XG5cdFx0XHRcdFx0XHRicmVhazsgLy8gLTEgd2VlayBvbiBjdHJsIG9yIGNvbW1hbmQgK3VwXG5cdFx0XHRcdGNhc2UgMzk6IGlmICggZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5ICkge1xuXHRcdFx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX2FkanVzdERhdGUoIGV2ZW50LnRhcmdldCwgKCBpc1JUTCA/IC0xIDogKzEgKSwgXCJEXCIgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGhhbmRsZWQgPSBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXk7XG5cblx0XHRcdFx0XHRcdC8vICsxIGRheSBvbiBjdHJsIG9yIGNvbW1hbmQgK3JpZ2h0XG5cdFx0XHRcdFx0XHRpZiAoIGV2ZW50Lm9yaWdpbmFsRXZlbnQuYWx0S2V5ICkge1xuXHRcdFx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX2FkanVzdERhdGUoIGV2ZW50LnRhcmdldCwgKCBldmVudC5jdHJsS2V5ID9cblx0XHRcdFx0XHRcdFx0XHQrJC5kYXRlcGlja2VyLl9nZXQoIGluc3QsIFwic3RlcEJpZ01vbnRoc1wiICkgOlxuXHRcdFx0XHRcdFx0XHRcdCskLmRhdGVwaWNrZXIuX2dldCggaW5zdCwgXCJzdGVwTW9udGhzXCIgKSApLCBcIk1cIiApO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBuZXh0IG1vbnRoL3llYXIgb24gYWx0ICtyaWdodFxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgNDA6IGlmICggZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5ICkge1xuXHRcdFx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX2FkanVzdERhdGUoIGV2ZW50LnRhcmdldCwgKzcsIFwiRFwiICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRoYW5kbGVkID0gZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5O1xuXHRcdFx0XHRcdFx0YnJlYWs7IC8vICsxIHdlZWsgb24gY3RybCBvciBjb21tYW5kICtkb3duXG5cdFx0XHRcdGRlZmF1bHQ6IGhhbmRsZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCBldmVudC5rZXlDb2RlID09PSAzNiAmJiBldmVudC5jdHJsS2V5ICkgeyAvLyBkaXNwbGF5IHRoZSBkYXRlIHBpY2tlciBvbiBjdHJsK2hvbWVcblx0XHRcdCQuZGF0ZXBpY2tlci5fc2hvd0RhdGVwaWNrZXIoIHRoaXMgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGFuZGxlZCA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICggaGFuZGxlZCApIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cdH0sXG5cblx0LyogRmlsdGVyIGVudGVyZWQgY2hhcmFjdGVycyAtIGJhc2VkIG9uIGRhdGUgZm9ybWF0LiAqL1xuXHRfZG9LZXlQcmVzczogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdHZhciBjaGFycywgY2hyLFxuXHRcdFx0aW5zdCA9ICQuZGF0ZXBpY2tlci5fZ2V0SW5zdCggZXZlbnQudGFyZ2V0ICk7XG5cblx0XHRpZiAoICQuZGF0ZXBpY2tlci5fZ2V0KCBpbnN0LCBcImNvbnN0cmFpbklucHV0XCIgKSApIHtcblx0XHRcdGNoYXJzID0gJC5kYXRlcGlja2VyLl9wb3NzaWJsZUNoYXJzKCAkLmRhdGVwaWNrZXIuX2dldCggaW5zdCwgXCJkYXRlRm9ybWF0XCIgKSApO1xuXHRcdFx0Y2hyID0gU3RyaW5nLmZyb21DaGFyQ29kZSggZXZlbnQuY2hhckNvZGUgPT0gbnVsbCA/IGV2ZW50LmtleUNvZGUgOiBldmVudC5jaGFyQ29kZSApO1xuXHRcdFx0cmV0dXJuIGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSB8fCAoIGNociA8IFwiIFwiIHx8ICFjaGFycyB8fCBjaGFycy5pbmRleE9mKCBjaHIgKSA+IC0xICk7XG5cdFx0fVxuXHR9LFxuXG5cdC8qIFN5bmNocm9uaXNlIG1hbnVhbCBlbnRyeSBhbmQgZmllbGQvYWx0ZXJuYXRlIGZpZWxkLiAqL1xuXHRfZG9LZXlVcDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdHZhciBkYXRlLFxuXHRcdFx0aW5zdCA9ICQuZGF0ZXBpY2tlci5fZ2V0SW5zdCggZXZlbnQudGFyZ2V0ICk7XG5cblx0XHRpZiAoIGluc3QuaW5wdXQudmFsKCkgIT09IGluc3QubGFzdFZhbCApIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRhdGUgPSAkLmRhdGVwaWNrZXIucGFyc2VEYXRlKCAkLmRhdGVwaWNrZXIuX2dldCggaW5zdCwgXCJkYXRlRm9ybWF0XCIgKSxcblx0XHRcdFx0XHQoIGluc3QuaW5wdXQgPyBpbnN0LmlucHV0LnZhbCgpIDogbnVsbCApLFxuXHRcdFx0XHRcdCQuZGF0ZXBpY2tlci5fZ2V0Rm9ybWF0Q29uZmlnKCBpbnN0ICkgKTtcblxuXHRcdFx0XHRpZiAoIGRhdGUgKSB7IC8vIG9ubHkgaWYgdmFsaWRcblx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX3NldERhdGVGcm9tRmllbGQoIGluc3QgKTtcblx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX3VwZGF0ZUFsdGVybmF0ZSggaW5zdCApO1xuXHRcdFx0XHRcdCQuZGF0ZXBpY2tlci5fdXBkYXRlRGF0ZXBpY2tlciggaW5zdCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoICggZXJyICkge1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvKiBQb3AtdXAgdGhlIGRhdGUgcGlja2VyIGZvciBhIGdpdmVuIGlucHV0IGZpZWxkLlxuXHQgKiBJZiBmYWxzZSByZXR1cm5lZCBmcm9tIGJlZm9yZVNob3cgZXZlbnQgaGFuZGxlciBkbyBub3Qgc2hvdy5cblx0ICogQHBhcmFtICBpbnB1dCAgZWxlbWVudCAtIHRoZSBpbnB1dCBmaWVsZCBhdHRhY2hlZCB0byB0aGUgZGF0ZSBwaWNrZXIgb3Jcblx0ICpcdFx0XHRcdFx0ZXZlbnQgLSBpZiB0cmlnZ2VyZWQgYnkgZm9jdXNcblx0ICovXG5cdF9zaG93RGF0ZXBpY2tlcjogZnVuY3Rpb24oIGlucHV0ICkge1xuXHRcdGlucHV0ID0gaW5wdXQudGFyZ2V0IHx8IGlucHV0O1xuXHRcdGlmICggaW5wdXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJpbnB1dFwiICkgeyAvLyBmaW5kIGZyb20gYnV0dG9uL2ltYWdlIHRyaWdnZXJcblx0XHRcdGlucHV0ID0gJCggXCJpbnB1dFwiLCBpbnB1dC5wYXJlbnROb2RlIClbIDAgXTtcblx0XHR9XG5cblx0XHRpZiAoICQuZGF0ZXBpY2tlci5faXNEaXNhYmxlZERhdGVwaWNrZXIoIGlucHV0ICkgfHwgJC5kYXRlcGlja2VyLl9sYXN0SW5wdXQgPT09IGlucHV0ICkgeyAvLyBhbHJlYWR5IGhlcmVcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgaW5zdCwgYmVmb3JlU2hvdywgYmVmb3JlU2hvd1NldHRpbmdzLCBpc0ZpeGVkLFxuXHRcdFx0b2Zmc2V0LCBzaG93QW5pbSwgZHVyYXRpb247XG5cblx0XHRpbnN0ID0gJC5kYXRlcGlja2VyLl9nZXRJbnN0KCBpbnB1dCApO1xuXHRcdGlmICggJC5kYXRlcGlja2VyLl9jdXJJbnN0ICYmICQuZGF0ZXBpY2tlci5fY3VySW5zdCAhPT0gaW5zdCApIHtcblx0XHRcdCQuZGF0ZXBpY2tlci5fY3VySW5zdC5kcERpdi5zdG9wKCB0cnVlLCB0cnVlICk7XG5cdFx0XHRpZiAoIGluc3QgJiYgJC5kYXRlcGlja2VyLl9kYXRlcGlja2VyU2hvd2luZyApIHtcblx0XHRcdFx0JC5kYXRlcGlja2VyLl9oaWRlRGF0ZXBpY2tlciggJC5kYXRlcGlja2VyLl9jdXJJbnN0LmlucHV0WyAwIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRiZWZvcmVTaG93ID0gJC5kYXRlcGlja2VyLl9nZXQoIGluc3QsIFwiYmVmb3JlU2hvd1wiICk7XG5cdFx0YmVmb3JlU2hvd1NldHRpbmdzID0gYmVmb3JlU2hvdyA/IGJlZm9yZVNob3cuYXBwbHkoIGlucHV0LCBbIGlucHV0LCBpbnN0IF0gKSA6IHt9O1xuXHRcdGlmICggYmVmb3JlU2hvd1NldHRpbmdzID09PSBmYWxzZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZGF0ZXBpY2tlcl9leHRlbmRSZW1vdmUoIGluc3Quc2V0dGluZ3MsIGJlZm9yZVNob3dTZXR0aW5ncyApO1xuXG5cdFx0aW5zdC5sYXN0VmFsID0gbnVsbDtcblx0XHQkLmRhdGVwaWNrZXIuX2xhc3RJbnB1dCA9IGlucHV0O1xuXHRcdCQuZGF0ZXBpY2tlci5fc2V0RGF0ZUZyb21GaWVsZCggaW5zdCApO1xuXG5cdFx0aWYgKCAkLmRhdGVwaWNrZXIuX2luRGlhbG9nICkgeyAvLyBoaWRlIGN1cnNvclxuXHRcdFx0aW5wdXQudmFsdWUgPSBcIlwiO1xuXHRcdH1cblx0XHRpZiAoICEkLmRhdGVwaWNrZXIuX3BvcyApIHsgLy8gcG9zaXRpb24gYmVsb3cgaW5wdXRcblx0XHRcdCQuZGF0ZXBpY2tlci5fcG9zID0gJC5kYXRlcGlja2VyLl9maW5kUG9zKCBpbnB1dCApO1xuXHRcdFx0JC5kYXRlcGlja2VyLl9wb3NbIDEgXSArPSBpbnB1dC5vZmZzZXRIZWlnaHQ7IC8vIGFkZCB0aGUgaGVpZ2h0XG5cdFx0fVxuXG5cdFx0aXNGaXhlZCA9IGZhbHNlO1xuXHRcdCQoIGlucHV0ICkucGFyZW50cygpLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0aXNGaXhlZCB8PSAkKCB0aGlzICkuY3NzKCBcInBvc2l0aW9uXCIgKSA9PT0gXCJmaXhlZFwiO1xuXHRcdFx0cmV0dXJuICFpc0ZpeGVkO1xuXHRcdH0gKTtcblxuXHRcdG9mZnNldCA9IHsgbGVmdDogJC5kYXRlcGlja2VyLl9wb3NbIDAgXSwgdG9wOiAkLmRhdGVwaWNrZXIuX3Bvc1sgMSBdIH07XG5cdFx0JC5kYXRlcGlja2VyLl9wb3MgPSBudWxsO1xuXG5cdFx0Ly90byBhdm9pZCBmbGFzaGVzIG9uIEZpcmVmb3hcblx0XHRpbnN0LmRwRGl2LmVtcHR5KCk7XG5cblx0XHQvLyBkZXRlcm1pbmUgc2l6aW5nIG9mZnNjcmVlblxuXHRcdGluc3QuZHBEaXYuY3NzKCB7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiwgdG9wOiBcIi0xMDAwcHhcIiB9ICk7XG5cdFx0JC5kYXRlcGlja2VyLl91cGRhdGVEYXRlcGlja2VyKCBpbnN0ICk7XG5cblx0XHQvLyBmaXggd2lkdGggZm9yIGR5bmFtaWMgbnVtYmVyIG9mIGRhdGUgcGlja2Vyc1xuXHRcdC8vIGFuZCBhZGp1c3QgcG9zaXRpb24gYmVmb3JlIHNob3dpbmdcblx0XHRvZmZzZXQgPSAkLmRhdGVwaWNrZXIuX2NoZWNrT2Zmc2V0KCBpbnN0LCBvZmZzZXQsIGlzRml4ZWQgKTtcblx0XHRpbnN0LmRwRGl2LmNzcyggeyBwb3NpdGlvbjogKCAkLmRhdGVwaWNrZXIuX2luRGlhbG9nICYmICQuYmxvY2tVSSA/XG5cdFx0XHRcInN0YXRpY1wiIDogKCBpc0ZpeGVkID8gXCJmaXhlZFwiIDogXCJhYnNvbHV0ZVwiICkgKSwgZGlzcGxheTogXCJub25lXCIsXG5cdFx0XHRsZWZ0OiBvZmZzZXQubGVmdCArIFwicHhcIiwgdG9wOiBvZmZzZXQudG9wICsgXCJweFwiIH0gKTtcblxuXHRcdGlmICggIWluc3QuaW5saW5lICkge1xuXHRcdFx0c2hvd0FuaW0gPSAkLmRhdGVwaWNrZXIuX2dldCggaW5zdCwgXCJzaG93QW5pbVwiICk7XG5cdFx0XHRkdXJhdGlvbiA9ICQuZGF0ZXBpY2tlci5fZ2V0KCBpbnN0LCBcImR1cmF0aW9uXCIgKTtcblx0XHRcdGluc3QuZHBEaXYuY3NzKCBcInotaW5kZXhcIiwgZGF0ZXBpY2tlcl9nZXRaaW5kZXgoICQoIGlucHV0ICkgKSArIDEgKTtcblx0XHRcdCQuZGF0ZXBpY2tlci5fZGF0ZXBpY2tlclNob3dpbmcgPSB0cnVlO1xuXG5cdFx0XHRpZiAoICQuZWZmZWN0cyAmJiAkLmVmZmVjdHMuZWZmZWN0WyBzaG93QW5pbSBdICkge1xuXHRcdFx0XHRpbnN0LmRwRGl2LnNob3coIHNob3dBbmltLCAkLmRhdGVwaWNrZXIuX2dldCggaW5zdCwgXCJzaG93T3B0aW9uc1wiICksIGR1cmF0aW9uICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpbnN0LmRwRGl2WyBzaG93QW5pbSB8fCBcInNob3dcIiBdKCBzaG93QW5pbSA/IGR1cmF0aW9uIDogbnVsbCApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoICQuZGF0ZXBpY2tlci5fc2hvdWxkRm9jdXNJbnB1dCggaW5zdCApICkge1xuXHRcdFx0XHRpbnN0LmlucHV0LnRyaWdnZXIoIFwiZm9jdXNcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQkLmRhdGVwaWNrZXIuX2N1ckluc3QgPSBpbnN0O1xuXHRcdH1cblx0fSxcblxuXHQvKiBHZW5lcmF0ZSB0aGUgZGF0ZSBwaWNrZXIgY29udGVudC4gKi9cblx0X3VwZGF0ZURhdGVwaWNrZXI6IGZ1bmN0aW9uKCBpbnN0ICkge1xuXHRcdHRoaXMubWF4Um93cyA9IDQ7IC8vUmVzZXQgdGhlIG1heCBudW1iZXIgb2Ygcm93cyBiZWluZyBkaXNwbGF5ZWQgKHNlZSAjNzA0Mylcblx0XHRkYXRlcGlja2VyX2luc3RBY3RpdmUgPSBpbnN0OyAvLyBmb3IgZGVsZWdhdGUgaG92ZXIgZXZlbnRzXG5cdFx0aW5zdC5kcERpdi5lbXB0eSgpLmFwcGVuZCggdGhpcy5fZ2VuZXJhdGVIVE1MKCBpbnN0ICkgKTtcblx0XHR0aGlzLl9hdHRhY2hIYW5kbGVycyggaW5zdCApO1xuXG5cdFx0dmFyIG9yaWd5ZWFyc2h0bWwsXG5cdFx0XHRudW1Nb250aHMgPSB0aGlzLl9nZXROdW1iZXJPZk1vbnRocyggaW5zdCApLFxuXHRcdFx0Y29scyA9IG51bU1vbnRoc1sgMSBdLFxuXHRcdFx0d2lkdGggPSAxNyxcblx0XHRcdGFjdGl2ZUNlbGwgPSBpbnN0LmRwRGl2LmZpbmQoIFwiLlwiICsgdGhpcy5fZGF5T3ZlckNsYXNzICsgXCIgYVwiICksXG5cdFx0XHRvblVwZGF0ZURhdGVwaWNrZXIgPSAkLmRhdGVwaWNrZXIuX2dldCggaW5zdCwgXCJvblVwZGF0ZURhdGVwaWNrZXJcIiApO1xuXG5cdFx0aWYgKCBhY3RpdmVDZWxsLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRkYXRlcGlja2VyX2hhbmRsZU1vdXNlb3Zlci5hcHBseSggYWN0aXZlQ2VsbC5nZXQoIDAgKSApO1xuXHRcdH1cblxuXHRcdGluc3QuZHBEaXYucmVtb3ZlQ2xhc3MoIFwidWktZGF0ZXBpY2tlci1tdWx0aS0yIHVpLWRhdGVwaWNrZXItbXVsdGktMyB1aS1kYXRlcGlja2VyLW11bHRpLTRcIiApLndpZHRoKCBcIlwiICk7XG5cdFx0aWYgKCBjb2xzID4gMSApIHtcblx0XHRcdGluc3QuZHBEaXYuYWRkQ2xhc3MoIFwidWktZGF0ZXBpY2tlci1tdWx0aS1cIiArIGNvbHMgKS5jc3MoIFwid2lkdGhcIiwgKCB3aWR0aCAqIGNvbHMgKSArIFwiZW1cIiApO1xuXHRcdH1cblx0XHRpbnN0LmRwRGl2WyAoIG51bU1vbnRoc1sgMCBdICE9PSAxIHx8IG51bU1vbnRoc1sgMSBdICE9PSAxID8gXCJhZGRcIiA6IFwicmVtb3ZlXCIgKSArXG5cdFx0XHRcIkNsYXNzXCIgXSggXCJ1aS1kYXRlcGlja2VyLW11bHRpXCIgKTtcblx0XHRpbnN0LmRwRGl2WyAoIHRoaXMuX2dldCggaW5zdCwgXCJpc1JUTFwiICkgPyBcImFkZFwiIDogXCJyZW1vdmVcIiApICtcblx0XHRcdFwiQ2xhc3NcIiBdKCBcInVpLWRhdGVwaWNrZXItcnRsXCIgKTtcblxuXHRcdGlmICggaW5zdCA9PT0gJC5kYXRlcGlja2VyLl9jdXJJbnN0ICYmICQuZGF0ZXBpY2tlci5fZGF0ZXBpY2tlclNob3dpbmcgJiYgJC5kYXRlcGlja2VyLl9zaG91bGRGb2N1c0lucHV0KCBpbnN0ICkgKSB7XG5cdFx0XHRpbnN0LmlucHV0LnRyaWdnZXIoIFwiZm9jdXNcIiApO1xuXHRcdH1cblxuXHRcdC8vIERlZmZlcmVkIHJlbmRlciBvZiB0aGUgeWVhcnMgc2VsZWN0ICh0byBhdm9pZCBmbGFzaGVzIG9uIEZpcmVmb3gpXG5cdFx0aWYgKCBpbnN0LnllYXJzaHRtbCApIHtcblx0XHRcdG9yaWd5ZWFyc2h0bWwgPSBpbnN0LnllYXJzaHRtbDtcblx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdC8vYXNzdXJlIHRoYXQgaW5zdC55ZWFyc2h0bWwgZGlkbid0IGNoYW5nZS5cblx0XHRcdFx0aWYgKCBvcmlneWVhcnNodG1sID09PSBpbnN0LnllYXJzaHRtbCAmJiBpbnN0LnllYXJzaHRtbCApIHtcblx0XHRcdFx0XHRpbnN0LmRwRGl2LmZpbmQoIFwic2VsZWN0LnVpLWRhdGVwaWNrZXIteWVhclwiICkuZmlyc3QoKS5yZXBsYWNlV2l0aCggaW5zdC55ZWFyc2h0bWwgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRvcmlneWVhcnNodG1sID0gaW5zdC55ZWFyc2h0bWwgPSBudWxsO1xuXHRcdFx0fSwgMCApO1xuXHRcdH1cblxuXHRcdGlmICggb25VcGRhdGVEYXRlcGlja2VyICkge1xuXHRcdFx0b25VcGRhdGVEYXRlcGlja2VyLmFwcGx5KCAoIGluc3QuaW5wdXQgPyBpbnN0LmlucHV0WyAwIF0gOiBudWxsICksIFsgaW5zdCBdICk7XG5cdFx0fVxuXHR9LFxuXG5cdF9zaG91bGRGb2N1c0lucHV0OiBmdW5jdGlvbiggaW5zdCApIHtcblx0XHRyZXR1cm4gaW5zdC5pbnB1dCAmJiBpbnN0LmlucHV0LmlzKCBcIjp2aXNpYmxlXCIgKSAmJiAhaW5zdC5pbnB1dC5pcyggXCI6ZGlzYWJsZWRcIiApO1xuXHR9LFxuXG5cdC8qIENoZWNrIHBvc2l0aW9uaW5nIHRvIHJlbWFpbiBvbiBzY3JlZW4uICovXG5cdF9jaGVja09mZnNldDogZnVuY3Rpb24oIGluc3QsIG9mZnNldCwgaXNGaXhlZCApIHtcblx0XHR2YXIgZHBXaWR0aCA9IGluc3QuZHBEaXYub3V0ZXJXaWR0aCgpLFxuXHRcdFx0ZHBIZWlnaHQgPSBpbnN0LmRwRGl2Lm91dGVySGVpZ2h0KCksXG5cdFx0XHRpbnB1dFdpZHRoID0gaW5zdC5pbnB1dCA/IGluc3QuaW5wdXQub3V0ZXJXaWR0aCgpIDogMCxcblx0XHRcdGlucHV0SGVpZ2h0ID0gaW5zdC5pbnB1dCA/IGluc3QuaW5wdXQub3V0ZXJIZWlnaHQoKSA6IDAsXG5cdFx0XHR2aWV3V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggKyAoIGlzRml4ZWQgPyAwIDogJCggZG9jdW1lbnQgKS5zY3JvbGxMZWZ0KCkgKSxcblx0XHRcdHZpZXdIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgKCBpc0ZpeGVkID8gMCA6ICQoIGRvY3VtZW50ICkuc2Nyb2xsVG9wKCkgKTtcblxuXHRcdG9mZnNldC5sZWZ0IC09ICggdGhpcy5fZ2V0KCBpbnN0LCBcImlzUlRMXCIgKSA/ICggZHBXaWR0aCAtIGlucHV0V2lkdGggKSA6IDAgKTtcblx0XHRvZmZzZXQubGVmdCAtPSAoIGlzRml4ZWQgJiYgb2Zmc2V0LmxlZnQgPT09IGluc3QuaW5wdXQub2Zmc2V0KCkubGVmdCApID8gJCggZG9jdW1lbnQgKS5zY3JvbGxMZWZ0KCkgOiAwO1xuXHRcdG9mZnNldC50b3AgLT0gKCBpc0ZpeGVkICYmIG9mZnNldC50b3AgPT09ICggaW5zdC5pbnB1dC5vZmZzZXQoKS50b3AgKyBpbnB1dEhlaWdodCApICkgPyAkKCBkb2N1bWVudCApLnNjcm9sbFRvcCgpIDogMDtcblxuXHRcdC8vIE5vdyBjaGVjayBpZiBkYXRlcGlja2VyIGlzIHNob3dpbmcgb3V0c2lkZSB3aW5kb3cgdmlld3BvcnQgLSBtb3ZlIHRvIGEgYmV0dGVyIHBsYWNlIGlmIHNvLlxuXHRcdG9mZnNldC5sZWZ0IC09IE1hdGgubWluKCBvZmZzZXQubGVmdCwgKCBvZmZzZXQubGVmdCArIGRwV2lkdGggPiB2aWV3V2lkdGggJiYgdmlld1dpZHRoID4gZHBXaWR0aCApID9cblx0XHRcdE1hdGguYWJzKCBvZmZzZXQubGVmdCArIGRwV2lkdGggLSB2aWV3V2lkdGggKSA6IDAgKTtcblx0XHRvZmZzZXQudG9wIC09IE1hdGgubWluKCBvZmZzZXQudG9wLCAoIG9mZnNldC50b3AgKyBkcEhlaWdodCA+IHZpZXdIZWlnaHQgJiYgdmlld0hlaWdodCA+IGRwSGVpZ2h0ICkgP1xuXHRcdFx0TWF0aC5hYnMoIGRwSGVpZ2h0ICsgaW5wdXRIZWlnaHQgKSA6IDAgKTtcblxuXHRcdHJldHVybiBvZmZzZXQ7XG5cdH0sXG5cblx0LyogRmluZCBhbiBvYmplY3QncyBwb3NpdGlvbiBvbiB0aGUgc2NyZWVuLiAqL1xuXHRfZmluZFBvczogZnVuY3Rpb24oIG9iaiApIHtcblx0XHR2YXIgcG9zaXRpb24sXG5cdFx0XHRpbnN0ID0gdGhpcy5fZ2V0SW5zdCggb2JqICksXG5cdFx0XHRpc1JUTCA9IHRoaXMuX2dldCggaW5zdCwgXCJpc1JUTFwiICk7XG5cblx0XHR3aGlsZSAoIG9iaiAmJiAoIG9iai50eXBlID09PSBcImhpZGRlblwiIHx8IG9iai5ub2RlVHlwZSAhPT0gMSB8fCAkLmV4cHIucHNldWRvcy5oaWRkZW4oIG9iaiApICkgKSB7XG5cdFx0XHRvYmogPSBvYmpbIGlzUlRMID8gXCJwcmV2aW91c1NpYmxpbmdcIiA6IFwibmV4dFNpYmxpbmdcIiBdO1xuXHRcdH1cblxuXHRcdHBvc2l0aW9uID0gJCggb2JqICkub2Zmc2V0KCk7XG5cdFx0cmV0dXJuIFsgcG9zaXRpb24ubGVmdCwgcG9zaXRpb24udG9wIF07XG5cdH0sXG5cblx0LyogSGlkZSB0aGUgZGF0ZSBwaWNrZXIgZnJvbSB2aWV3LlxuXHQgKiBAcGFyYW0gIGlucHV0ICBlbGVtZW50IC0gdGhlIGlucHV0IGZpZWxkIGF0dGFjaGVkIHRvIHRoZSBkYXRlIHBpY2tlclxuXHQgKi9cblx0X2hpZGVEYXRlcGlja2VyOiBmdW5jdGlvbiggaW5wdXQgKSB7XG5cdFx0dmFyIHNob3dBbmltLCBkdXJhdGlvbiwgcG9zdFByb2Nlc3MsIG9uQ2xvc2UsXG5cdFx0XHRpbnN0ID0gdGhpcy5fY3VySW5zdDtcblxuXHRcdGlmICggIWluc3QgfHwgKCBpbnB1dCAmJiBpbnN0ICE9PSAkLmRhdGEoIGlucHV0LCBcImRhdGVwaWNrZXJcIiApICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLl9kYXRlcGlja2VyU2hvd2luZyApIHtcblx0XHRcdHNob3dBbmltID0gdGhpcy5fZ2V0KCBpbnN0LCBcInNob3dBbmltXCIgKTtcblx0XHRcdGR1cmF0aW9uID0gdGhpcy5fZ2V0KCBpbnN0LCBcImR1cmF0aW9uXCIgKTtcblx0XHRcdHBvc3RQcm9jZXNzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQuZGF0ZXBpY2tlci5fdGlkeURpYWxvZyggaW5zdCApO1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCAkLmVmZmVjdHMgJiYgKCAkLmVmZmVjdHMuZWZmZWN0WyBzaG93QW5pbSBdICkgKSB7XG5cdFx0XHRcdGluc3QuZHBEaXYuaGlkZSggc2hvd0FuaW0sICQuZGF0ZXBpY2tlci5fZ2V0KCBpbnN0LCBcInNob3dPcHRpb25zXCIgKSwgZHVyYXRpb24sIHBvc3RQcm9jZXNzICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpbnN0LmRwRGl2WyAoIHNob3dBbmltID09PSBcInNsaWRlRG93blwiID8gXCJzbGlkZVVwXCIgOlxuXHRcdFx0XHRcdCggc2hvd0FuaW0gPT09IFwiZmFkZUluXCIgPyBcImZhZGVPdXRcIiA6IFwiaGlkZVwiICkgKSBdKCAoIHNob3dBbmltID8gZHVyYXRpb24gOiBudWxsICksIHBvc3RQcm9jZXNzICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggIXNob3dBbmltICkge1xuXHRcdFx0XHRwb3N0UHJvY2VzcygpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fZGF0ZXBpY2tlclNob3dpbmcgPSBmYWxzZTtcblxuXHRcdFx0b25DbG9zZSA9IHRoaXMuX2dldCggaW5zdCwgXCJvbkNsb3NlXCIgKTtcblx0XHRcdGlmICggb25DbG9zZSApIHtcblx0XHRcdFx0b25DbG9zZS5hcHBseSggKCBpbnN0LmlucHV0ID8gaW5zdC5pbnB1dFsgMCBdIDogbnVsbCApLCBbICggaW5zdC5pbnB1dCA/IGluc3QuaW5wdXQudmFsKCkgOiBcIlwiICksIGluc3QgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9sYXN0SW5wdXQgPSBudWxsO1xuXHRcdFx0aWYgKCB0aGlzLl9pbkRpYWxvZyApIHtcblx0XHRcdFx0dGhpcy5fZGlhbG9nSW5wdXQuY3NzKCB7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGxlZnQ6IFwiMFwiLCB0b3A6IFwiLTEwMHB4XCIgfSApO1xuXHRcdFx0XHRpZiAoICQuYmxvY2tVSSApIHtcblx0XHRcdFx0XHQkLnVuYmxvY2tVSSgpO1xuXHRcdFx0XHRcdCQoIFwiYm9keVwiICkuYXBwZW5kKCB0aGlzLmRwRGl2ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuX2luRGlhbG9nID0gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXG5cdC8qIFRpZHkgdXAgYWZ0ZXIgYSBkaWFsb2cgZGlzcGxheS4gKi9cblx0X3RpZHlEaWFsb2c6IGZ1bmN0aW9uKCBpbnN0ICkge1xuXHRcdGluc3QuZHBEaXYucmVtb3ZlQ2xhc3MoIHRoaXMuX2RpYWxvZ0NsYXNzICkub2ZmKCBcIi51aS1kYXRlcGlja2VyLWNhbGVuZGFyXCIgKTtcblx0fSxcblxuXHQvKiBDbG9zZSBkYXRlIHBpY2tlciBpZiBjbGlja2VkIGVsc2V3aGVyZS4gKi9cblx0X2NoZWNrRXh0ZXJuYWxDbGljazogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdGlmICggISQuZGF0ZXBpY2tlci5fY3VySW5zdCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgJHRhcmdldCA9ICQoIGV2ZW50LnRhcmdldCApLFxuXHRcdFx0aW5zdCA9ICQuZGF0ZXBpY2tlci5fZ2V0SW5zdCggJHRhcmdldFsgMCBdICk7XG5cblx0XHRpZiAoICggKCAkdGFyZ2V0WyAwIF0uaWQgIT09ICQuZGF0ZXBpY2tlci5fbWFpbkRpdklkICYmXG5cdFx0XHRcdCR0YXJnZXQucGFyZW50cyggXCIjXCIgKyAkLmRhdGVwaWNrZXIuX21haW5EaXZJZCApLmxlbmd0aCA9PT0gMCAmJlxuXHRcdFx0XHQhJHRhcmdldC5oYXNDbGFzcyggJC5kYXRlcGlja2VyLm1hcmtlckNsYXNzTmFtZSApICYmXG5cdFx0XHRcdCEkdGFyZ2V0LmNsb3Nlc3QoIFwiLlwiICsgJC5kYXRlcGlja2VyLl90cmlnZ2VyQ2xhc3MgKS5sZW5ndGggJiZcblx0XHRcdFx0JC5kYXRlcGlja2VyLl9kYXRlcGlja2VyU2hvd2luZyAmJiAhKCAkLmRhdGVwaWNrZXIuX2luRGlhbG9nICYmICQuYmxvY2tVSSApICkgKSB8fFxuXHRcdFx0KCAkdGFyZ2V0Lmhhc0NsYXNzKCAkLmRhdGVwaWNrZXIubWFya2VyQ2xhc3NOYW1lICkgJiYgJC5kYXRlcGlja2VyLl9jdXJJbnN0ICE9PSBpbnN0ICkgKSB7XG5cdFx0XHRcdCQuZGF0ZXBpY2tlci5faGlkZURhdGVwaWNrZXIoKTtcblx0XHR9XG5cdH0sXG5cblx0LyogQWRqdXN0IG9uZSBvZiB0aGUgZGF0ZSBzdWItZmllbGRzLiAqL1xuXHRfYWRqdXN0RGF0ZTogZnVuY3Rpb24oIGlkLCBvZmZzZXQsIHBlcmlvZCApIHtcblx0XHR2YXIgdGFyZ2V0ID0gJCggaWQgKSxcblx0XHRcdGluc3QgPSB0aGlzLl9nZXRJbnN0KCB0YXJnZXRbIDAgXSApO1xuXG5cdFx0aWYgKCB0aGlzLl9pc0Rpc2FibGVkRGF0ZXBpY2tlciggdGFyZ2V0WyAwIF0gKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5fYWRqdXN0SW5zdERhdGUoIGluc3QsIG9mZnNldCwgcGVyaW9kICk7XG5cdFx0dGhpcy5fdXBkYXRlRGF0ZXBpY2tlciggaW5zdCApO1xuXHR9LFxuXG5cdC8qIEFjdGlvbiBmb3IgY3VycmVudCBsaW5rLiAqL1xuXHRfZ290b1RvZGF5OiBmdW5jdGlvbiggaWQgKSB7XG5cdFx0dmFyIGRhdGUsXG5cdFx0XHR0YXJnZXQgPSAkKCBpZCApLFxuXHRcdFx0aW5zdCA9IHRoaXMuX2dldEluc3QoIHRhcmdldFsgMCBdICk7XG5cblx0XHRpZiAoIHRoaXMuX2dldCggaW5zdCwgXCJnb3RvQ3VycmVudFwiICkgJiYgaW5zdC5jdXJyZW50RGF5ICkge1xuXHRcdFx0aW5zdC5zZWxlY3RlZERheSA9IGluc3QuY3VycmVudERheTtcblx0XHRcdGluc3QuZHJhd01vbnRoID0gaW5zdC5zZWxlY3RlZE1vbnRoID0gaW5zdC5jdXJyZW50TW9udGg7XG5cdFx0XHRpbnN0LmRyYXdZZWFyID0gaW5zdC5zZWxlY3RlZFllYXIgPSBpbnN0LmN1cnJlbnRZZWFyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdGluc3Quc2VsZWN0ZWREYXkgPSBkYXRlLmdldERhdGUoKTtcblx0XHRcdGluc3QuZHJhd01vbnRoID0gaW5zdC5zZWxlY3RlZE1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuXHRcdFx0aW5zdC5kcmF3WWVhciA9IGluc3Quc2VsZWN0ZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdH1cblx0XHR0aGlzLl9ub3RpZnlDaGFuZ2UoIGluc3QgKTtcblx0XHR0aGlzLl9hZGp1c3REYXRlKCB0YXJnZXQgKTtcblx0fSxcblxuXHQvKiBBY3Rpb24gZm9yIHNlbGVjdGluZyBhIG5ldyBtb250aC95ZWFyLiAqL1xuXHRfc2VsZWN0TW9udGhZZWFyOiBmdW5jdGlvbiggaWQsIHNlbGVjdCwgcGVyaW9kICkge1xuXHRcdHZhciB0YXJnZXQgPSAkKCBpZCApLFxuXHRcdFx0aW5zdCA9IHRoaXMuX2dldEluc3QoIHRhcmdldFsgMCBdICk7XG5cblx0XHRpbnN0WyBcInNlbGVjdGVkXCIgKyAoIHBlcmlvZCA9PT0gXCJNXCIgPyBcIk1vbnRoXCIgOiBcIlllYXJcIiApIF0gPVxuXHRcdGluc3RbIFwiZHJhd1wiICsgKCBwZXJpb2QgPT09IFwiTVwiID8gXCJNb250aFwiIDogXCJZZWFyXCIgKSBdID1cblx0XHRcdHBhcnNlSW50KCBzZWxlY3Qub3B0aW9uc1sgc2VsZWN0LnNlbGVjdGVkSW5kZXggXS52YWx1ZSwgMTAgKTtcblxuXHRcdHRoaXMuX25vdGlmeUNoYW5nZSggaW5zdCApO1xuXHRcdHRoaXMuX2FkanVzdERhdGUoIHRhcmdldCApO1xuXHR9LFxuXG5cdC8qIEFjdGlvbiBmb3Igc2VsZWN0aW5nIGEgZGF5LiAqL1xuXHRfc2VsZWN0RGF5OiBmdW5jdGlvbiggaWQsIG1vbnRoLCB5ZWFyLCB0ZCApIHtcblx0XHR2YXIgaW5zdCxcblx0XHRcdHRhcmdldCA9ICQoIGlkICk7XG5cblx0XHRpZiAoICQoIHRkICkuaGFzQ2xhc3MoIHRoaXMuX3Vuc2VsZWN0YWJsZUNsYXNzICkgfHwgdGhpcy5faXNEaXNhYmxlZERhdGVwaWNrZXIoIHRhcmdldFsgMCBdICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aW5zdCA9IHRoaXMuX2dldEluc3QoIHRhcmdldFsgMCBdICk7XG5cdFx0aW5zdC5zZWxlY3RlZERheSA9IGluc3QuY3VycmVudERheSA9IHBhcnNlSW50KCAkKCBcImFcIiwgdGQgKS5hdHRyKCBcImRhdGEtZGF0ZVwiICkgKTtcblx0XHRpbnN0LnNlbGVjdGVkTW9udGggPSBpbnN0LmN1cnJlbnRNb250aCA9IG1vbnRoO1xuXHRcdGluc3Quc2VsZWN0ZWRZZWFyID0gaW5zdC5jdXJyZW50WWVhciA9IHllYXI7XG5cdFx0dGhpcy5fc2VsZWN0RGF0ZSggaWQsIHRoaXMuX2Zvcm1hdERhdGUoIGluc3QsXG5cdFx0XHRpbnN0LmN1cnJlbnREYXksIGluc3QuY3VycmVudE1vbnRoLCBpbnN0LmN1cnJlbnRZZWFyICkgKTtcblx0fSxcblxuXHQvKiBFcmFzZSB0aGUgaW5wdXQgZmllbGQgYW5kIGhpZGUgdGhlIGRhdGUgcGlja2VyLiAqL1xuXHRfY2xlYXJEYXRlOiBmdW5jdGlvbiggaWQgKSB7XG5cdFx0dmFyIHRhcmdldCA9ICQoIGlkICk7XG5cdFx0dGhpcy5fc2VsZWN0RGF0ZSggdGFyZ2V0LCBcIlwiICk7XG5cdH0sXG5cblx0LyogVXBkYXRlIHRoZSBpbnB1dCBmaWVsZCB3aXRoIHRoZSBzZWxlY3RlZCBkYXRlLiAqL1xuXHRfc2VsZWN0RGF0ZTogZnVuY3Rpb24oIGlkLCBkYXRlU3RyICkge1xuXHRcdHZhciBvblNlbGVjdCxcblx0XHRcdHRhcmdldCA9ICQoIGlkICksXG5cdFx0XHRpbnN0ID0gdGhpcy5fZ2V0SW5zdCggdGFyZ2V0WyAwIF0gKTtcblxuXHRcdGRhdGVTdHIgPSAoIGRhdGVTdHIgIT0gbnVsbCA/IGRhdGVTdHIgOiB0aGlzLl9mb3JtYXREYXRlKCBpbnN0ICkgKTtcblx0XHRpZiAoIGluc3QuaW5wdXQgKSB7XG5cdFx0XHRpbnN0LmlucHV0LnZhbCggZGF0ZVN0ciApO1xuXHRcdH1cblx0XHR0aGlzLl91cGRhdGVBbHRlcm5hdGUoIGluc3QgKTtcblxuXHRcdG9uU2VsZWN0ID0gdGhpcy5fZ2V0KCBpbnN0LCBcIm9uU2VsZWN0XCIgKTtcblx0XHRpZiAoIG9uU2VsZWN0ICkge1xuXHRcdFx0b25TZWxlY3QuYXBwbHkoICggaW5zdC5pbnB1dCA/IGluc3QuaW5wdXRbIDAgXSA6IG51bGwgKSwgWyBkYXRlU3RyLCBpbnN0IF0gKTsgIC8vIHRyaWdnZXIgY3VzdG9tIGNhbGxiYWNrXG5cdFx0fSBlbHNlIGlmICggaW5zdC5pbnB1dCApIHtcblx0XHRcdGluc3QuaW5wdXQudHJpZ2dlciggXCJjaGFuZ2VcIiApOyAvLyBmaXJlIHRoZSBjaGFuZ2UgZXZlbnRcblx0XHR9XG5cblx0XHRpZiAoIGluc3QuaW5saW5lICkge1xuXHRcdFx0dGhpcy5fdXBkYXRlRGF0ZXBpY2tlciggaW5zdCApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9oaWRlRGF0ZXBpY2tlcigpO1xuXHRcdFx0dGhpcy5fbGFzdElucHV0ID0gaW5zdC5pbnB1dFsgMCBdO1xuXHRcdFx0aWYgKCB0eXBlb2YoIGluc3QuaW5wdXRbIDAgXSApICE9PSBcIm9iamVjdFwiICkge1xuXHRcdFx0XHRpbnN0LmlucHV0LnRyaWdnZXIoIFwiZm9jdXNcIiApOyAvLyByZXN0b3JlIGZvY3VzXG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9sYXN0SW5wdXQgPSBudWxsO1xuXHRcdH1cblx0fSxcblxuXHQvKiBVcGRhdGUgYW55IGFsdGVybmF0ZSBmaWVsZCB0byBzeW5jaHJvbmlzZSB3aXRoIHRoZSBtYWluIGZpZWxkLiAqL1xuXHRfdXBkYXRlQWx0ZXJuYXRlOiBmdW5jdGlvbiggaW5zdCApIHtcblx0XHR2YXIgYWx0Rm9ybWF0LCBkYXRlLCBkYXRlU3RyLFxuXHRcdFx0YWx0RmllbGQgPSB0aGlzLl9nZXQoIGluc3QsIFwiYWx0RmllbGRcIiApO1xuXG5cdFx0aWYgKCBhbHRGaWVsZCApIHsgLy8gdXBkYXRlIGFsdGVybmF0ZSBmaWVsZCB0b29cblx0XHRcdGFsdEZvcm1hdCA9IHRoaXMuX2dldCggaW5zdCwgXCJhbHRGb3JtYXRcIiApIHx8IHRoaXMuX2dldCggaW5zdCwgXCJkYXRlRm9ybWF0XCIgKTtcblx0XHRcdGRhdGUgPSB0aGlzLl9nZXREYXRlKCBpbnN0ICk7XG5cdFx0XHRkYXRlU3RyID0gdGhpcy5mb3JtYXREYXRlKCBhbHRGb3JtYXQsIGRhdGUsIHRoaXMuX2dldEZvcm1hdENvbmZpZyggaW5zdCApICk7XG5cdFx0XHQkKCBkb2N1bWVudCApLmZpbmQoIGFsdEZpZWxkICkudmFsKCBkYXRlU3RyICk7XG5cdFx0fVxuXHR9LFxuXG5cdC8qIFNldCBhcyBiZWZvcmVTaG93RGF5IGZ1bmN0aW9uIHRvIHByZXZlbnQgc2VsZWN0aW9uIG9mIHdlZWtlbmRzLlxuXHQgKiBAcGFyYW0gIGRhdGUgIERhdGUgLSB0aGUgZGF0ZSB0byBjdXN0b21pc2Vcblx0ICogQHJldHVybiBbYm9vbGVhbiwgc3RyaW5nXSAtIGlzIHRoaXMgZGF0ZSBzZWxlY3RhYmxlPywgd2hhdCBpcyBpdHMgQ1NTIGNsYXNzP1xuXHQgKi9cblx0bm9XZWVrZW5kczogZnVuY3Rpb24oIGRhdGUgKSB7XG5cdFx0dmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG5cdFx0cmV0dXJuIFsgKCBkYXkgPiAwICYmIGRheSA8IDYgKSwgXCJcIiBdO1xuXHR9LFxuXG5cdC8qIFNldCBhcyBjYWxjdWxhdGVXZWVrIHRvIGRldGVybWluZSB0aGUgd2VlayBvZiB0aGUgeWVhciBiYXNlZCBvbiB0aGUgSVNPIDg2MDEgZGVmaW5pdGlvbi5cblx0ICogQHBhcmFtICBkYXRlICBEYXRlIC0gdGhlIGRhdGUgdG8gZ2V0IHRoZSB3ZWVrIGZvclxuXHQgKiBAcmV0dXJuICBudW1iZXIgLSB0aGUgbnVtYmVyIG9mIHRoZSB3ZWVrIHdpdGhpbiB0aGUgeWVhciB0aGF0IGNvbnRhaW5zIHRoaXMgZGF0ZVxuXHQgKi9cblx0aXNvODYwMVdlZWs6IGZ1bmN0aW9uKCBkYXRlICkge1xuXHRcdHZhciB0aW1lLFxuXHRcdFx0Y2hlY2tEYXRlID0gbmV3IERhdGUoIGRhdGUuZ2V0VGltZSgpICk7XG5cblx0XHQvLyBGaW5kIFRodXJzZGF5IG9mIHRoaXMgd2VlayBzdGFydGluZyBvbiBNb25kYXlcblx0XHRjaGVja0RhdGUuc2V0RGF0ZSggY2hlY2tEYXRlLmdldERhdGUoKSArIDQgLSAoIGNoZWNrRGF0ZS5nZXREYXkoKSB8fCA3ICkgKTtcblxuXHRcdHRpbWUgPSBjaGVja0RhdGUuZ2V0VGltZSgpO1xuXHRcdGNoZWNrRGF0ZS5zZXRNb250aCggMCApOyAvLyBDb21wYXJlIHdpdGggSmFuIDFcblx0XHRjaGVja0RhdGUuc2V0RGF0ZSggMSApO1xuXHRcdHJldHVybiBNYXRoLmZsb29yKCBNYXRoLnJvdW5kKCAoIHRpbWUgLSBjaGVja0RhdGUgKSAvIDg2NDAwMDAwICkgLyA3ICkgKyAxO1xuXHR9LFxuXG5cdC8qIFBhcnNlIGEgc3RyaW5nIHZhbHVlIGludG8gYSBkYXRlIG9iamVjdC5cblx0ICogU2VlIGZvcm1hdERhdGUgYmVsb3cgZm9yIHRoZSBwb3NzaWJsZSBmb3JtYXRzLlxuXHQgKlxuXHQgKiBAcGFyYW0gIGZvcm1hdCBzdHJpbmcgLSB0aGUgZXhwZWN0ZWQgZm9ybWF0IG9mIHRoZSBkYXRlXG5cdCAqIEBwYXJhbSAgdmFsdWUgc3RyaW5nIC0gdGhlIGRhdGUgaW4gdGhlIGFib3ZlIGZvcm1hdFxuXHQgKiBAcGFyYW0gIHNldHRpbmdzIE9iamVjdCAtIGF0dHJpYnV0ZXMgaW5jbHVkZTpcblx0ICpcdFx0XHRcdFx0c2hvcnRZZWFyQ3V0b2ZmICBudW1iZXIgLSB0aGUgY3V0b2ZmIHllYXIgZm9yIGRldGVybWluaW5nIHRoZSBjZW50dXJ5IChvcHRpb25hbClcblx0ICpcdFx0XHRcdFx0ZGF5TmFtZXNTaG9ydFx0c3RyaW5nWzddIC0gYWJicmV2aWF0ZWQgbmFtZXMgb2YgdGhlIGRheXMgZnJvbSBTdW5kYXkgKG9wdGlvbmFsKVxuXHQgKlx0XHRcdFx0XHRkYXlOYW1lc1x0XHRzdHJpbmdbN10gLSBuYW1lcyBvZiB0aGUgZGF5cyBmcm9tIFN1bmRheSAob3B0aW9uYWwpXG5cdCAqXHRcdFx0XHRcdG1vbnRoTmFtZXNTaG9ydCBzdHJpbmdbMTJdIC0gYWJicmV2aWF0ZWQgbmFtZXMgb2YgdGhlIG1vbnRocyAob3B0aW9uYWwpXG5cdCAqXHRcdFx0XHRcdG1vbnRoTmFtZXNcdFx0c3RyaW5nWzEyXSAtIG5hbWVzIG9mIHRoZSBtb250aHMgKG9wdGlvbmFsKVxuXHQgKiBAcmV0dXJuICBEYXRlIC0gdGhlIGV4dHJhY3RlZCBkYXRlIHZhbHVlIG9yIG51bGwgaWYgdmFsdWUgaXMgYmxhbmtcblx0ICovXG5cdHBhcnNlRGF0ZTogZnVuY3Rpb24oIGZvcm1hdCwgdmFsdWUsIHNldHRpbmdzICkge1xuXHRcdGlmICggZm9ybWF0ID09IG51bGwgfHwgdmFsdWUgPT0gbnVsbCApIHtcblx0XHRcdHRocm93IFwiSW52YWxpZCBhcmd1bWVudHNcIjtcblx0XHR9XG5cblx0XHR2YWx1ZSA9ICggdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiID8gdmFsdWUudG9TdHJpbmcoKSA6IHZhbHVlICsgXCJcIiApO1xuXHRcdGlmICggdmFsdWUgPT09IFwiXCIgKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHR2YXIgaUZvcm1hdCwgZGltLCBleHRyYSxcblx0XHRcdGlWYWx1ZSA9IDAsXG5cdFx0XHRzaG9ydFllYXJDdXRvZmZUZW1wID0gKCBzZXR0aW5ncyA/IHNldHRpbmdzLnNob3J0WWVhckN1dG9mZiA6IG51bGwgKSB8fCB0aGlzLl9kZWZhdWx0cy5zaG9ydFllYXJDdXRvZmYsXG5cdFx0XHRzaG9ydFllYXJDdXRvZmYgPSAoIHR5cGVvZiBzaG9ydFllYXJDdXRvZmZUZW1wICE9PSBcInN0cmluZ1wiID8gc2hvcnRZZWFyQ3V0b2ZmVGVtcCA6XG5cdFx0XHRcdG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAlIDEwMCArIHBhcnNlSW50KCBzaG9ydFllYXJDdXRvZmZUZW1wLCAxMCApICksXG5cdFx0XHRkYXlOYW1lc1Nob3J0ID0gKCBzZXR0aW5ncyA/IHNldHRpbmdzLmRheU5hbWVzU2hvcnQgOiBudWxsICkgfHwgdGhpcy5fZGVmYXVsdHMuZGF5TmFtZXNTaG9ydCxcblx0XHRcdGRheU5hbWVzID0gKCBzZXR0aW5ncyA/IHNldHRpbmdzLmRheU5hbWVzIDogbnVsbCApIHx8IHRoaXMuX2RlZmF1bHRzLmRheU5hbWVzLFxuXHRcdFx0bW9udGhOYW1lc1Nob3J0ID0gKCBzZXR0aW5ncyA/IHNldHRpbmdzLm1vbnRoTmFtZXNTaG9ydCA6IG51bGwgKSB8fCB0aGlzLl9kZWZhdWx0cy5tb250aE5hbWVzU2hvcnQsXG5cdFx0XHRtb250aE5hbWVzID0gKCBzZXR0aW5ncyA/IHNldHRpbmdzLm1vbnRoTmFtZXMgOiBudWxsICkgfHwgdGhpcy5fZGVmYXVsdHMubW9udGhOYW1lcyxcblx0XHRcdHllYXIgPSAtMSxcblx0XHRcdG1vbnRoID0gLTEsXG5cdFx0XHRkYXkgPSAtMSxcblx0XHRcdGRveSA9IC0xLFxuXHRcdFx0bGl0ZXJhbCA9IGZhbHNlLFxuXHRcdFx0ZGF0ZSxcblxuXHRcdFx0Ly8gQ2hlY2sgd2hldGhlciBhIGZvcm1hdCBjaGFyYWN0ZXIgaXMgZG91YmxlZFxuXHRcdFx0bG9va0FoZWFkID0gZnVuY3Rpb24oIG1hdGNoICkge1xuXHRcdFx0XHR2YXIgbWF0Y2hlcyA9ICggaUZvcm1hdCArIDEgPCBmb3JtYXQubGVuZ3RoICYmIGZvcm1hdC5jaGFyQXQoIGlGb3JtYXQgKyAxICkgPT09IG1hdGNoICk7XG5cdFx0XHRcdGlmICggbWF0Y2hlcyApIHtcblx0XHRcdFx0XHRpRm9ybWF0Kys7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG1hdGNoZXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBFeHRyYWN0IGEgbnVtYmVyIGZyb20gdGhlIHN0cmluZyB2YWx1ZVxuXHRcdFx0Z2V0TnVtYmVyID0gZnVuY3Rpb24oIG1hdGNoICkge1xuXHRcdFx0XHR2YXIgaXNEb3VibGVkID0gbG9va0FoZWFkKCBtYXRjaCApLFxuXHRcdFx0XHRcdHNpemUgPSAoIG1hdGNoID09PSBcIkBcIiA/IDE0IDogKCBtYXRjaCA9PT0gXCIhXCIgPyAyMCA6XG5cdFx0XHRcdFx0KCBtYXRjaCA9PT0gXCJ5XCIgJiYgaXNEb3VibGVkID8gNCA6ICggbWF0Y2ggPT09IFwib1wiID8gMyA6IDIgKSApICkgKSxcblx0XHRcdFx0XHRtaW5TaXplID0gKCBtYXRjaCA9PT0gXCJ5XCIgPyBzaXplIDogMSApLFxuXHRcdFx0XHRcdGRpZ2l0cyA9IG5ldyBSZWdFeHAoIFwiXlxcXFxke1wiICsgbWluU2l6ZSArIFwiLFwiICsgc2l6ZSArIFwifVwiICksXG5cdFx0XHRcdFx0bnVtID0gdmFsdWUuc3Vic3RyaW5nKCBpVmFsdWUgKS5tYXRjaCggZGlnaXRzICk7XG5cdFx0XHRcdGlmICggIW51bSApIHtcblx0XHRcdFx0XHR0aHJvdyBcIk1pc3NpbmcgbnVtYmVyIGF0IHBvc2l0aW9uIFwiICsgaVZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlWYWx1ZSArPSBudW1bIDAgXS5sZW5ndGg7XG5cdFx0XHRcdHJldHVybiBwYXJzZUludCggbnVtWyAwIF0sIDEwICk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBFeHRyYWN0IGEgbmFtZSBmcm9tIHRoZSBzdHJpbmcgdmFsdWUgYW5kIGNvbnZlcnQgdG8gYW4gaW5kZXhcblx0XHRcdGdldE5hbWUgPSBmdW5jdGlvbiggbWF0Y2gsIHNob3J0TmFtZXMsIGxvbmdOYW1lcyApIHtcblx0XHRcdFx0dmFyIGluZGV4ID0gLTEsXG5cdFx0XHRcdFx0bmFtZXMgPSAkLm1hcCggbG9va0FoZWFkKCBtYXRjaCApID8gbG9uZ05hbWVzIDogc2hvcnROYW1lcywgZnVuY3Rpb24oIHYsIGsgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gWyBbIGssIHYgXSBdO1xuXHRcdFx0XHRcdH0gKS5zb3J0KCBmdW5jdGlvbiggYSwgYiApIHtcblx0XHRcdFx0XHRcdHJldHVybiAtKCBhWyAxIF0ubGVuZ3RoIC0gYlsgMSBdLmxlbmd0aCApO1xuXHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHQkLmVhY2goIG5hbWVzLCBmdW5jdGlvbiggaSwgcGFpciApIHtcblx0XHRcdFx0XHR2YXIgbmFtZSA9IHBhaXJbIDEgXTtcblx0XHRcdFx0XHRpZiAoIHZhbHVlLnN1YnN0ciggaVZhbHVlLCBuYW1lLmxlbmd0aCApLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKSApIHtcblx0XHRcdFx0XHRcdGluZGV4ID0gcGFpclsgMCBdO1xuXHRcdFx0XHRcdFx0aVZhbHVlICs9IG5hbWUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdFx0XHRpZiAoIGluZGV4ICE9PSAtMSApIHtcblx0XHRcdFx0XHRyZXR1cm4gaW5kZXggKyAxO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRocm93IFwiVW5rbm93biBuYW1lIGF0IHBvc2l0aW9uIFwiICsgaVZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBDb25maXJtIHRoYXQgYSBsaXRlcmFsIGNoYXJhY3RlciBtYXRjaGVzIHRoZSBzdHJpbmcgdmFsdWVcblx0XHRcdGNoZWNrTGl0ZXJhbCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIHZhbHVlLmNoYXJBdCggaVZhbHVlICkgIT09IGZvcm1hdC5jaGFyQXQoIGlGb3JtYXQgKSApIHtcblx0XHRcdFx0XHR0aHJvdyBcIlVuZXhwZWN0ZWQgbGl0ZXJhbCBhdCBwb3NpdGlvbiBcIiArIGlWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpVmFsdWUrKztcblx0XHRcdH07XG5cblx0XHRmb3IgKCBpRm9ybWF0ID0gMDsgaUZvcm1hdCA8IGZvcm1hdC5sZW5ndGg7IGlGb3JtYXQrKyApIHtcblx0XHRcdGlmICggbGl0ZXJhbCApIHtcblx0XHRcdFx0aWYgKCBmb3JtYXQuY2hhckF0KCBpRm9ybWF0ICkgPT09IFwiJ1wiICYmICFsb29rQWhlYWQoIFwiJ1wiICkgKSB7XG5cdFx0XHRcdFx0bGl0ZXJhbCA9IGZhbHNlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNoZWNrTGl0ZXJhbCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzd2l0Y2ggKCBmb3JtYXQuY2hhckF0KCBpRm9ybWF0ICkgKSB7XG5cdFx0XHRcdFx0Y2FzZSBcImRcIjpcblx0XHRcdFx0XHRcdGRheSA9IGdldE51bWJlciggXCJkXCIgKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgXCJEXCI6XG5cdFx0XHRcdFx0XHRnZXROYW1lKCBcIkRcIiwgZGF5TmFtZXNTaG9ydCwgZGF5TmFtZXMgKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgXCJvXCI6XG5cdFx0XHRcdFx0XHRkb3kgPSBnZXROdW1iZXIoIFwib1wiICk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwibVwiOlxuXHRcdFx0XHRcdFx0bW9udGggPSBnZXROdW1iZXIoIFwibVwiICk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwiTVwiOlxuXHRcdFx0XHRcdFx0bW9udGggPSBnZXROYW1lKCBcIk1cIiwgbW9udGhOYW1lc1Nob3J0LCBtb250aE5hbWVzICk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwieVwiOlxuXHRcdFx0XHRcdFx0eWVhciA9IGdldE51bWJlciggXCJ5XCIgKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgXCJAXCI6XG5cdFx0XHRcdFx0XHRkYXRlID0gbmV3IERhdGUoIGdldE51bWJlciggXCJAXCIgKSApO1xuXHRcdFx0XHRcdFx0eWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRcdFx0XHRcdG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcblx0XHRcdFx0XHRcdGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcIiFcIjpcblx0XHRcdFx0XHRcdGRhdGUgPSBuZXcgRGF0ZSggKCBnZXROdW1iZXIoIFwiIVwiICkgLSB0aGlzLl90aWNrc1RvMTk3MCApIC8gMTAwMDAgKTtcblx0XHRcdFx0XHRcdHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRcdFx0XHRtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG5cdFx0XHRcdFx0XHRkYXkgPSBkYXRlLmdldERhdGUoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgXCInXCI6XG5cdFx0XHRcdFx0XHRpZiAoIGxvb2tBaGVhZCggXCInXCIgKSApIHtcblx0XHRcdFx0XHRcdFx0Y2hlY2tMaXRlcmFsKCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRsaXRlcmFsID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRjaGVja0xpdGVyYWwoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggaVZhbHVlIDwgdmFsdWUubGVuZ3RoICkge1xuXHRcdFx0ZXh0cmEgPSB2YWx1ZS5zdWJzdHIoIGlWYWx1ZSApO1xuXHRcdFx0aWYgKCAhL15cXHMrLy50ZXN0KCBleHRyYSApICkge1xuXHRcdFx0XHR0aHJvdyBcIkV4dHJhL3VucGFyc2VkIGNoYXJhY3RlcnMgZm91bmQgaW4gZGF0ZTogXCIgKyBleHRyYTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIHllYXIgPT09IC0xICkge1xuXHRcdFx0eWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblx0XHR9IGVsc2UgaWYgKCB5ZWFyIDwgMTAwICkge1xuXHRcdFx0eWVhciArPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgJSAxMDAgK1xuXHRcdFx0XHQoIHllYXIgPD0gc2hvcnRZZWFyQ3V0b2ZmID8gMCA6IC0xMDAgKTtcblx0XHR9XG5cblx0XHRpZiAoIGRveSA+IC0xICkge1xuXHRcdFx0bW9udGggPSAxO1xuXHRcdFx0ZGF5ID0gZG95O1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRkaW0gPSB0aGlzLl9nZXREYXlzSW5Nb250aCggeWVhciwgbW9udGggLSAxICk7XG5cdFx0XHRcdGlmICggZGF5IDw9IGRpbSApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRtb250aCsrO1xuXHRcdFx0XHRkYXkgLT0gZGltO1xuXHRcdFx0fSB3aGlsZSAoIHRydWUgKTtcblx0XHR9XG5cblx0XHRkYXRlID0gdGhpcy5fZGF5bGlnaHRTYXZpbmdBZGp1c3QoIG5ldyBEYXRlKCB5ZWFyLCBtb250aCAtIDEsIGRheSApICk7XG5cdFx0aWYgKCBkYXRlLmdldEZ1bGxZZWFyKCkgIT09IHllYXIgfHwgZGF0ZS5nZXRNb250aCgpICsgMSAhPT0gbW9udGggfHwgZGF0ZS5nZXREYXRlKCkgIT09IGRheSApIHtcblx0XHRcdHRocm93IFwiSW52YWxpZCBkYXRlXCI7IC8vIEUuZy4gMzEvMDIvMDBcblx0XHR9XG5cdFx0cmV0dXJuIGRhdGU7XG5cdH0sXG5cblx0LyogU3RhbmRhcmQgZGF0ZSBmb3JtYXRzLiAqL1xuXHRBVE9NOiBcInl5LW1tLWRkXCIsIC8vIFJGQyAzMzM5IChJU08gODYwMSlcblx0Q09PS0lFOiBcIkQsIGRkIE0geXlcIixcblx0SVNPXzg2MDE6IFwieXktbW0tZGRcIixcblx0UkZDXzgyMjogXCJELCBkIE0geVwiLFxuXHRSRkNfODUwOiBcIkRELCBkZC1NLXlcIixcblx0UkZDXzEwMzY6IFwiRCwgZCBNIHlcIixcblx0UkZDXzExMjM6IFwiRCwgZCBNIHl5XCIsXG5cdFJGQ18yODIyOiBcIkQsIGQgTSB5eVwiLFxuXHRSU1M6IFwiRCwgZCBNIHlcIiwgLy8gUkZDIDgyMlxuXHRUSUNLUzogXCIhXCIsXG5cdFRJTUVTVEFNUDogXCJAXCIsXG5cdFczQzogXCJ5eS1tbS1kZFwiLCAvLyBJU08gODYwMVxuXG5cdF90aWNrc1RvMTk3MDogKCAoICggMTk3MCAtIDEgKSAqIDM2NSArIE1hdGguZmxvb3IoIDE5NzAgLyA0ICkgLSBNYXRoLmZsb29yKCAxOTcwIC8gMTAwICkgK1xuXHRcdE1hdGguZmxvb3IoIDE5NzAgLyA0MDAgKSApICogMjQgKiA2MCAqIDYwICogMTAwMDAwMDAgKSxcblxuXHQvKiBGb3JtYXQgYSBkYXRlIG9iamVjdCBpbnRvIGEgc3RyaW5nIHZhbHVlLlxuXHQgKiBUaGUgZm9ybWF0IGNhbiBiZSBjb21iaW5hdGlvbnMgb2YgdGhlIGZvbGxvd2luZzpcblx0ICogZCAgLSBkYXkgb2YgbW9udGggKG5vIGxlYWRpbmcgemVybylcblx0ICogZGQgLSBkYXkgb2YgbW9udGggKHR3byBkaWdpdClcblx0ICogbyAgLSBkYXkgb2YgeWVhciAobm8gbGVhZGluZyB6ZXJvcylcblx0ICogb28gLSBkYXkgb2YgeWVhciAodGhyZWUgZGlnaXQpXG5cdCAqIEQgIC0gZGF5IG5hbWUgc2hvcnRcblx0ICogREQgLSBkYXkgbmFtZSBsb25nXG5cdCAqIG0gIC0gbW9udGggb2YgeWVhciAobm8gbGVhZGluZyB6ZXJvKVxuXHQgKiBtbSAtIG1vbnRoIG9mIHllYXIgKHR3byBkaWdpdClcblx0ICogTSAgLSBtb250aCBuYW1lIHNob3J0XG5cdCAqIE1NIC0gbW9udGggbmFtZSBsb25nXG5cdCAqIHkgIC0geWVhciAodHdvIGRpZ2l0KVxuXHQgKiB5eSAtIHllYXIgKGZvdXIgZGlnaXQpXG5cdCAqIEAgLSBVbml4IHRpbWVzdGFtcCAobXMgc2luY2UgMDEvMDEvMTk3MClcblx0ICogISAtIFdpbmRvd3MgdGlja3MgKDEwMG5zIHNpbmNlIDAxLzAxLzAwMDEpXG5cdCAqIFwiLi4uXCIgLSBsaXRlcmFsIHRleHRcblx0ICogJycgLSBzaW5nbGUgcXVvdGVcblx0ICpcblx0ICogQHBhcmFtICBmb3JtYXQgc3RyaW5nIC0gdGhlIGRlc2lyZWQgZm9ybWF0IG9mIHRoZSBkYXRlXG5cdCAqIEBwYXJhbSAgZGF0ZSBEYXRlIC0gdGhlIGRhdGUgdmFsdWUgdG8gZm9ybWF0XG5cdCAqIEBwYXJhbSAgc2V0dGluZ3MgT2JqZWN0IC0gYXR0cmlidXRlcyBpbmNsdWRlOlxuXHQgKlx0XHRcdFx0XHRkYXlOYW1lc1Nob3J0XHRzdHJpbmdbN10gLSBhYmJyZXZpYXRlZCBuYW1lcyBvZiB0aGUgZGF5cyBmcm9tIFN1bmRheSAob3B0aW9uYWwpXG5cdCAqXHRcdFx0XHRcdGRheU5hbWVzXHRcdHN0cmluZ1s3XSAtIG5hbWVzIG9mIHRoZSBkYXlzIGZyb20gU3VuZGF5IChvcHRpb25hbClcblx0ICpcdFx0XHRcdFx0bW9udGhOYW1lc1Nob3J0IHN0cmluZ1sxMl0gLSBhYmJyZXZpYXRlZCBuYW1lcyBvZiB0aGUgbW9udGhzIChvcHRpb25hbClcblx0ICpcdFx0XHRcdFx0bW9udGhOYW1lc1x0XHRzdHJpbmdbMTJdIC0gbmFtZXMgb2YgdGhlIG1vbnRocyAob3B0aW9uYWwpXG5cdCAqIEByZXR1cm4gIHN0cmluZyAtIHRoZSBkYXRlIGluIHRoZSBhYm92ZSBmb3JtYXRcblx0ICovXG5cdGZvcm1hdERhdGU6IGZ1bmN0aW9uKCBmb3JtYXQsIGRhdGUsIHNldHRpbmdzICkge1xuXHRcdGlmICggIWRhdGUgKSB7XG5cdFx0XHRyZXR1cm4gXCJcIjtcblx0XHR9XG5cblx0XHR2YXIgaUZvcm1hdCxcblx0XHRcdGRheU5hbWVzU2hvcnQgPSAoIHNldHRpbmdzID8gc2V0dGluZ3MuZGF5TmFtZXNTaG9ydCA6IG51bGwgKSB8fCB0aGlzLl9kZWZhdWx0cy5kYXlOYW1lc1Nob3J0LFxuXHRcdFx0ZGF5TmFtZXMgPSAoIHNldHRpbmdzID8gc2V0dGluZ3MuZGF5TmFtZXMgOiBudWxsICkgfHwgdGhpcy5fZGVmYXVsdHMuZGF5TmFtZXMsXG5cdFx0XHRtb250aE5hbWVzU2hvcnQgPSAoIHNldHRpbmdzID8gc2V0dGluZ3MubW9udGhOYW1lc1Nob3J0IDogbnVsbCApIHx8IHRoaXMuX2RlZmF1bHRzLm1vbnRoTmFtZXNTaG9ydCxcblx0XHRcdG1vbnRoTmFtZXMgPSAoIHNldHRpbmdzID8gc2V0dGluZ3MubW9udGhOYW1lcyA6IG51bGwgKSB8fCB0aGlzLl9kZWZhdWx0cy5tb250aE5hbWVzLFxuXG5cdFx0XHQvLyBDaGVjayB3aGV0aGVyIGEgZm9ybWF0IGNoYXJhY3RlciBpcyBkb3VibGVkXG5cdFx0XHRsb29rQWhlYWQgPSBmdW5jdGlvbiggbWF0Y2ggKSB7XG5cdFx0XHRcdHZhciBtYXRjaGVzID0gKCBpRm9ybWF0ICsgMSA8IGZvcm1hdC5sZW5ndGggJiYgZm9ybWF0LmNoYXJBdCggaUZvcm1hdCArIDEgKSA9PT0gbWF0Y2ggKTtcblx0XHRcdFx0aWYgKCBtYXRjaGVzICkge1xuXHRcdFx0XHRcdGlGb3JtYXQrKztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbWF0Y2hlcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIEZvcm1hdCBhIG51bWJlciwgd2l0aCBsZWFkaW5nIHplcm8gaWYgbmVjZXNzYXJ5XG5cdFx0XHRmb3JtYXROdW1iZXIgPSBmdW5jdGlvbiggbWF0Y2gsIHZhbHVlLCBsZW4gKSB7XG5cdFx0XHRcdHZhciBudW0gPSBcIlwiICsgdmFsdWU7XG5cdFx0XHRcdGlmICggbG9va0FoZWFkKCBtYXRjaCApICkge1xuXHRcdFx0XHRcdHdoaWxlICggbnVtLmxlbmd0aCA8IGxlbiApIHtcblx0XHRcdFx0XHRcdG51bSA9IFwiMFwiICsgbnVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVtO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gRm9ybWF0IGEgbmFtZSwgc2hvcnQgb3IgbG9uZyBhcyByZXF1ZXN0ZWRcblx0XHRcdGZvcm1hdE5hbWUgPSBmdW5jdGlvbiggbWF0Y2gsIHZhbHVlLCBzaG9ydE5hbWVzLCBsb25nTmFtZXMgKSB7XG5cdFx0XHRcdHJldHVybiAoIGxvb2tBaGVhZCggbWF0Y2ggKSA/IGxvbmdOYW1lc1sgdmFsdWUgXSA6IHNob3J0TmFtZXNbIHZhbHVlIF0gKTtcblx0XHRcdH0sXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0bGl0ZXJhbCA9IGZhbHNlO1xuXG5cdFx0aWYgKCBkYXRlICkge1xuXHRcdFx0Zm9yICggaUZvcm1hdCA9IDA7IGlGb3JtYXQgPCBmb3JtYXQubGVuZ3RoOyBpRm9ybWF0KysgKSB7XG5cdFx0XHRcdGlmICggbGl0ZXJhbCApIHtcblx0XHRcdFx0XHRpZiAoIGZvcm1hdC5jaGFyQXQoIGlGb3JtYXQgKSA9PT0gXCInXCIgJiYgIWxvb2tBaGVhZCggXCInXCIgKSApIHtcblx0XHRcdFx0XHRcdGxpdGVyYWwgPSBmYWxzZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0b3V0cHV0ICs9IGZvcm1hdC5jaGFyQXQoIGlGb3JtYXQgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3dpdGNoICggZm9ybWF0LmNoYXJBdCggaUZvcm1hdCApICkge1xuXHRcdFx0XHRcdFx0Y2FzZSBcImRcIjpcblx0XHRcdFx0XHRcdFx0b3V0cHV0ICs9IGZvcm1hdE51bWJlciggXCJkXCIsIGRhdGUuZ2V0RGF0ZSgpLCAyICk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSBcIkRcIjpcblx0XHRcdFx0XHRcdFx0b3V0cHV0ICs9IGZvcm1hdE5hbWUoIFwiRFwiLCBkYXRlLmdldERheSgpLCBkYXlOYW1lc1Nob3J0LCBkYXlOYW1lcyApO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgXCJvXCI6XG5cdFx0XHRcdFx0XHRcdG91dHB1dCArPSBmb3JtYXROdW1iZXIoIFwib1wiLFxuXHRcdFx0XHRcdFx0XHRcdE1hdGgucm91bmQoICggbmV3IERhdGUoIGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSApLmdldFRpbWUoKSAtIG5ldyBEYXRlKCBkYXRlLmdldEZ1bGxZZWFyKCksIDAsIDAgKS5nZXRUaW1lKCkgKSAvIDg2NDAwMDAwICksIDMgKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIFwibVwiOlxuXHRcdFx0XHRcdFx0XHRvdXRwdXQgKz0gZm9ybWF0TnVtYmVyKCBcIm1cIiwgZGF0ZS5nZXRNb250aCgpICsgMSwgMiApO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgXCJNXCI6XG5cdFx0XHRcdFx0XHRcdG91dHB1dCArPSBmb3JtYXROYW1lKCBcIk1cIiwgZGF0ZS5nZXRNb250aCgpLCBtb250aE5hbWVzU2hvcnQsIG1vbnRoTmFtZXMgKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIFwieVwiOlxuXHRcdFx0XHRcdFx0XHRvdXRwdXQgKz0gKCBsb29rQWhlYWQoIFwieVwiICkgPyBkYXRlLmdldEZ1bGxZZWFyKCkgOlxuXHRcdFx0XHRcdFx0XHRcdCggZGF0ZS5nZXRGdWxsWWVhcigpICUgMTAwIDwgMTAgPyBcIjBcIiA6IFwiXCIgKSArIGRhdGUuZ2V0RnVsbFllYXIoKSAlIDEwMCApO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgXCJAXCI6XG5cdFx0XHRcdFx0XHRcdG91dHB1dCArPSBkYXRlLmdldFRpbWUoKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIFwiIVwiOlxuXHRcdFx0XHRcdFx0XHRvdXRwdXQgKz0gZGF0ZS5nZXRUaW1lKCkgKiAxMDAwMCArIHRoaXMuX3RpY2tzVG8xOTcwO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgXCInXCI6XG5cdFx0XHRcdFx0XHRcdGlmICggbG9va0FoZWFkKCBcIidcIiApICkge1xuXHRcdFx0XHRcdFx0XHRcdG91dHB1dCArPSBcIidcIjtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRsaXRlcmFsID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdG91dHB1dCArPSBmb3JtYXQuY2hhckF0KCBpRm9ybWF0ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH0sXG5cblx0LyogRXh0cmFjdCBhbGwgcG9zc2libGUgY2hhcmFjdGVycyBmcm9tIHRoZSBkYXRlIGZvcm1hdC4gKi9cblx0X3Bvc3NpYmxlQ2hhcnM6IGZ1bmN0aW9uKCBmb3JtYXQgKSB7XG5cdFx0dmFyIGlGb3JtYXQsXG5cdFx0XHRjaGFycyA9IFwiXCIsXG5cdFx0XHRsaXRlcmFsID0gZmFsc2UsXG5cblx0XHRcdC8vIENoZWNrIHdoZXRoZXIgYSBmb3JtYXQgY2hhcmFjdGVyIGlzIGRvdWJsZWRcblx0XHRcdGxvb2tBaGVhZCA9IGZ1bmN0aW9uKCBtYXRjaCApIHtcblx0XHRcdFx0dmFyIG1hdGNoZXMgPSAoIGlGb3JtYXQgKyAxIDwgZm9ybWF0Lmxlbmd0aCAmJiBmb3JtYXQuY2hhckF0KCBpRm9ybWF0ICsgMSApID09PSBtYXRjaCApO1xuXHRcdFx0XHRpZiAoIG1hdGNoZXMgKSB7XG5cdFx0XHRcdFx0aUZvcm1hdCsrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBtYXRjaGVzO1xuXHRcdFx0fTtcblxuXHRcdGZvciAoIGlGb3JtYXQgPSAwOyBpRm9ybWF0IDwgZm9ybWF0Lmxlbmd0aDsgaUZvcm1hdCsrICkge1xuXHRcdFx0aWYgKCBsaXRlcmFsICkge1xuXHRcdFx0XHRpZiAoIGZvcm1hdC5jaGFyQXQoIGlGb3JtYXQgKSA9PT0gXCInXCIgJiYgIWxvb2tBaGVhZCggXCInXCIgKSApIHtcblx0XHRcdFx0XHRsaXRlcmFsID0gZmFsc2U7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2hhcnMgKz0gZm9ybWF0LmNoYXJBdCggaUZvcm1hdCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzd2l0Y2ggKCBmb3JtYXQuY2hhckF0KCBpRm9ybWF0ICkgKSB7XG5cdFx0XHRcdFx0Y2FzZSBcImRcIjogY2FzZSBcIm1cIjogY2FzZSBcInlcIjogY2FzZSBcIkBcIjpcblx0XHRcdFx0XHRcdGNoYXJzICs9IFwiMDEyMzQ1Njc4OVwiO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcIkRcIjogY2FzZSBcIk1cIjpcblx0XHRcdFx0XHRcdHJldHVybiBudWxsOyAvLyBBY2NlcHQgYW55dGhpbmdcblx0XHRcdFx0XHRjYXNlIFwiJ1wiOlxuXHRcdFx0XHRcdFx0aWYgKCBsb29rQWhlYWQoIFwiJ1wiICkgKSB7XG5cdFx0XHRcdFx0XHRcdGNoYXJzICs9IFwiJ1wiO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0bGl0ZXJhbCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0Y2hhcnMgKz0gZm9ybWF0LmNoYXJBdCggaUZvcm1hdCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjaGFycztcblx0fSxcblxuXHQvKiBHZXQgYSBzZXR0aW5nIHZhbHVlLCBkZWZhdWx0aW5nIGlmIG5lY2Vzc2FyeS4gKi9cblx0X2dldDogZnVuY3Rpb24oIGluc3QsIG5hbWUgKSB7XG5cdFx0cmV0dXJuIGluc3Quc2V0dGluZ3NbIG5hbWUgXSAhPT0gdW5kZWZpbmVkID9cblx0XHRcdGluc3Quc2V0dGluZ3NbIG5hbWUgXSA6IHRoaXMuX2RlZmF1bHRzWyBuYW1lIF07XG5cdH0sXG5cblx0LyogUGFyc2UgZXhpc3RpbmcgZGF0ZSBhbmQgaW5pdGlhbGlzZSBkYXRlIHBpY2tlci4gKi9cblx0X3NldERhdGVGcm9tRmllbGQ6IGZ1bmN0aW9uKCBpbnN0LCBub0RlZmF1bHQgKSB7XG5cdFx0aWYgKCBpbnN0LmlucHV0LnZhbCgpID09PSBpbnN0Lmxhc3RWYWwgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIGRhdGVGb3JtYXQgPSB0aGlzLl9nZXQoIGluc3QsIFwiZGF0ZUZvcm1hdFwiICksXG5cdFx0XHRkYXRlcyA9IGluc3QubGFzdFZhbCA9IGluc3QuaW5wdXQgPyBpbnN0LmlucHV0LnZhbCgpIDogbnVsbCxcblx0XHRcdGRlZmF1bHREYXRlID0gdGhpcy5fZ2V0RGVmYXVsdERhdGUoIGluc3QgKSxcblx0XHRcdGRhdGUgPSBkZWZhdWx0RGF0ZSxcblx0XHRcdHNldHRpbmdzID0gdGhpcy5fZ2V0Rm9ybWF0Q29uZmlnKCBpbnN0ICk7XG5cblx0XHR0cnkge1xuXHRcdFx0ZGF0ZSA9IHRoaXMucGFyc2VEYXRlKCBkYXRlRm9ybWF0LCBkYXRlcywgc2V0dGluZ3MgKSB8fCBkZWZhdWx0RGF0ZTtcblx0XHR9IGNhdGNoICggZXZlbnQgKSB7XG5cdFx0XHRkYXRlcyA9ICggbm9EZWZhdWx0ID8gXCJcIiA6IGRhdGVzICk7XG5cdFx0fVxuXHRcdGluc3Quc2VsZWN0ZWREYXkgPSBkYXRlLmdldERhdGUoKTtcblx0XHRpbnN0LmRyYXdNb250aCA9IGluc3Quc2VsZWN0ZWRNb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcblx0XHRpbnN0LmRyYXdZZWFyID0gaW5zdC5zZWxlY3RlZFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0aW5zdC5jdXJyZW50RGF5ID0gKCBkYXRlcyA/IGRhdGUuZ2V0RGF0ZSgpIDogMCApO1xuXHRcdGluc3QuY3VycmVudE1vbnRoID0gKCBkYXRlcyA/IGRhdGUuZ2V0TW9udGgoKSA6IDAgKTtcblx0XHRpbnN0LmN1cnJlbnRZZWFyID0gKCBkYXRlcyA/IGRhdGUuZ2V0RnVsbFllYXIoKSA6IDAgKTtcblx0XHR0aGlzLl9hZGp1c3RJbnN0RGF0ZSggaW5zdCApO1xuXHR9LFxuXG5cdC8qIFJldHJpZXZlIHRoZSBkZWZhdWx0IGRhdGUgc2hvd24gb24gb3BlbmluZy4gKi9cblx0X2dldERlZmF1bHREYXRlOiBmdW5jdGlvbiggaW5zdCApIHtcblx0XHRyZXR1cm4gdGhpcy5fcmVzdHJpY3RNaW5NYXgoIGluc3QsXG5cdFx0XHR0aGlzLl9kZXRlcm1pbmVEYXRlKCBpbnN0LCB0aGlzLl9nZXQoIGluc3QsIFwiZGVmYXVsdERhdGVcIiApLCBuZXcgRGF0ZSgpICkgKTtcblx0fSxcblxuXHQvKiBBIGRhdGUgbWF5IGJlIHNwZWNpZmllZCBhcyBhbiBleGFjdCB2YWx1ZSBvciBhIHJlbGF0aXZlIG9uZS4gKi9cblx0X2RldGVybWluZURhdGU6IGZ1bmN0aW9uKCBpbnN0LCBkYXRlLCBkZWZhdWx0RGF0ZSApIHtcblx0XHR2YXIgb2Zmc2V0TnVtZXJpYyA9IGZ1bmN0aW9uKCBvZmZzZXQgKSB7XG5cdFx0XHRcdHZhciBkYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdFx0ZGF0ZS5zZXREYXRlKCBkYXRlLmdldERhdGUoKSArIG9mZnNldCApO1xuXHRcdFx0XHRyZXR1cm4gZGF0ZTtcblx0XHRcdH0sXG5cdFx0XHRvZmZzZXRTdHJpbmcgPSBmdW5jdGlvbiggb2Zmc2V0ICkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJldHVybiAkLmRhdGVwaWNrZXIucGFyc2VEYXRlKCAkLmRhdGVwaWNrZXIuX2dldCggaW5zdCwgXCJkYXRlRm9ybWF0XCIgKSxcblx0XHRcdFx0XHRcdG9mZnNldCwgJC5kYXRlcGlja2VyLl9nZXRGb3JtYXRDb25maWcoIGluc3QgKSApO1xuXHRcdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHRcdC8vIElnbm9yZVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIGRhdGUgPSAoIG9mZnNldC50b0xvd2VyQ2FzZSgpLm1hdGNoKCAvXmMvICkgP1xuXHRcdFx0XHRcdCQuZGF0ZXBpY2tlci5fZ2V0RGF0ZSggaW5zdCApIDogbnVsbCApIHx8IG5ldyBEYXRlKCksXG5cdFx0XHRcdFx0eWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSxcblx0XHRcdFx0XHRtb250aCA9IGRhdGUuZ2V0TW9udGgoKSxcblx0XHRcdFx0XHRkYXkgPSBkYXRlLmdldERhdGUoKSxcblx0XHRcdFx0XHRwYXR0ZXJuID0gLyhbK1xcLV0/WzAtOV0rKVxccyooZHxEfHd8V3xtfE18eXxZKT8vZyxcblx0XHRcdFx0XHRtYXRjaGVzID0gcGF0dGVybi5leGVjKCBvZmZzZXQgKTtcblxuXHRcdFx0XHR3aGlsZSAoIG1hdGNoZXMgKSB7XG5cdFx0XHRcdFx0c3dpdGNoICggbWF0Y2hlc1sgMiBdIHx8IFwiZFwiICkge1xuXHRcdFx0XHRcdFx0Y2FzZSBcImRcIiA6IGNhc2UgXCJEXCIgOlxuXHRcdFx0XHRcdFx0XHRkYXkgKz0gcGFyc2VJbnQoIG1hdGNoZXNbIDEgXSwgMTAgKTsgYnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIFwid1wiIDogY2FzZSBcIldcIiA6XG5cdFx0XHRcdFx0XHRcdGRheSArPSBwYXJzZUludCggbWF0Y2hlc1sgMSBdLCAxMCApICogNzsgYnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIFwibVwiIDogY2FzZSBcIk1cIiA6XG5cdFx0XHRcdFx0XHRcdG1vbnRoICs9IHBhcnNlSW50KCBtYXRjaGVzWyAxIF0sIDEwICk7XG5cdFx0XHRcdFx0XHRcdGRheSA9IE1hdGgubWluKCBkYXksICQuZGF0ZXBpY2tlci5fZ2V0RGF5c0luTW9udGgoIHllYXIsIG1vbnRoICkgKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlIFwieVwiOiBjYXNlIFwiWVwiIDpcblx0XHRcdFx0XHRcdFx0eWVhciArPSBwYXJzZUludCggbWF0Y2hlc1sgMSBdLCAxMCApO1xuXHRcdFx0XHRcdFx0XHRkYXkgPSBNYXRoLm1pbiggZGF5LCAkLmRhdGVwaWNrZXIuX2dldERheXNJbk1vbnRoKCB5ZWFyLCBtb250aCApICk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtYXRjaGVzID0gcGF0dGVybi5leGVjKCBvZmZzZXQgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbmV3IERhdGUoIHllYXIsIG1vbnRoLCBkYXkgKTtcblx0XHRcdH0sXG5cdFx0XHRuZXdEYXRlID0gKCBkYXRlID09IG51bGwgfHwgZGF0ZSA9PT0gXCJcIiA/IGRlZmF1bHREYXRlIDogKCB0eXBlb2YgZGF0ZSA9PT0gXCJzdHJpbmdcIiA/IG9mZnNldFN0cmluZyggZGF0ZSApIDpcblx0XHRcdFx0KCB0eXBlb2YgZGF0ZSA9PT0gXCJudW1iZXJcIiA/ICggaXNOYU4oIGRhdGUgKSA/IGRlZmF1bHREYXRlIDogb2Zmc2V0TnVtZXJpYyggZGF0ZSApICkgOiBuZXcgRGF0ZSggZGF0ZS5nZXRUaW1lKCkgKSApICkgKTtcblxuXHRcdG5ld0RhdGUgPSAoIG5ld0RhdGUgJiYgbmV3RGF0ZS50b1N0cmluZygpID09PSBcIkludmFsaWQgRGF0ZVwiID8gZGVmYXVsdERhdGUgOiBuZXdEYXRlICk7XG5cdFx0aWYgKCBuZXdEYXRlICkge1xuXHRcdFx0bmV3RGF0ZS5zZXRIb3VycyggMCApO1xuXHRcdFx0bmV3RGF0ZS5zZXRNaW51dGVzKCAwICk7XG5cdFx0XHRuZXdEYXRlLnNldFNlY29uZHMoIDAgKTtcblx0XHRcdG5ld0RhdGUuc2V0TWlsbGlzZWNvbmRzKCAwICk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9kYXlsaWdodFNhdmluZ0FkanVzdCggbmV3RGF0ZSApO1xuXHR9LFxuXG5cdC8qIEhhbmRsZSBzd2l0Y2ggdG8vZnJvbSBkYXlsaWdodCBzYXZpbmcuXG5cdCAqIEhvdXJzIG1heSBiZSBub24temVybyBvbiBkYXlsaWdodCBzYXZpbmcgY3V0LW92ZXI6XG5cdCAqID4gMTIgd2hlbiBtaWRuaWdodCBjaGFuZ2VvdmVyLCBidXQgdGhlbiBjYW5ub3QgZ2VuZXJhdGVcblx0ICogbWlkbmlnaHQgZGF0ZXRpbWUsIHNvIGp1bXAgdG8gMUFNLCBvdGhlcndpc2UgcmVzZXQuXG5cdCAqIEBwYXJhbSAgZGF0ZSAgKERhdGUpIHRoZSBkYXRlIHRvIGNoZWNrXG5cdCAqIEByZXR1cm4gIChEYXRlKSB0aGUgY29ycmVjdGVkIGRhdGVcblx0ICovXG5cdF9kYXlsaWdodFNhdmluZ0FkanVzdDogZnVuY3Rpb24oIGRhdGUgKSB7XG5cdFx0aWYgKCAhZGF0ZSApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRkYXRlLnNldEhvdXJzKCBkYXRlLmdldEhvdXJzKCkgPiAxMiA/IGRhdGUuZ2V0SG91cnMoKSArIDIgOiAwICk7XG5cdFx0cmV0dXJuIGRhdGU7XG5cdH0sXG5cblx0LyogU2V0IHRoZSBkYXRlKHMpIGRpcmVjdGx5LiAqL1xuXHRfc2V0RGF0ZTogZnVuY3Rpb24oIGluc3QsIGRhdGUsIG5vQ2hhbmdlICkge1xuXHRcdHZhciBjbGVhciA9ICFkYXRlLFxuXHRcdFx0b3JpZ01vbnRoID0gaW5zdC5zZWxlY3RlZE1vbnRoLFxuXHRcdFx0b3JpZ1llYXIgPSBpbnN0LnNlbGVjdGVkWWVhcixcblx0XHRcdG5ld0RhdGUgPSB0aGlzLl9yZXN0cmljdE1pbk1heCggaW5zdCwgdGhpcy5fZGV0ZXJtaW5lRGF0ZSggaW5zdCwgZGF0ZSwgbmV3IERhdGUoKSApICk7XG5cblx0XHRpbnN0LnNlbGVjdGVkRGF5ID0gaW5zdC5jdXJyZW50RGF5ID0gbmV3RGF0ZS5nZXREYXRlKCk7XG5cdFx0aW5zdC5kcmF3TW9udGggPSBpbnN0LnNlbGVjdGVkTW9udGggPSBpbnN0LmN1cnJlbnRNb250aCA9IG5ld0RhdGUuZ2V0TW9udGgoKTtcblx0XHRpbnN0LmRyYXdZZWFyID0gaW5zdC5zZWxlY3RlZFllYXIgPSBpbnN0LmN1cnJlbnRZZWFyID0gbmV3RGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdGlmICggKCBvcmlnTW9udGggIT09IGluc3Quc2VsZWN0ZWRNb250aCB8fCBvcmlnWWVhciAhPT0gaW5zdC5zZWxlY3RlZFllYXIgKSAmJiAhbm9DaGFuZ2UgKSB7XG5cdFx0XHR0aGlzLl9ub3RpZnlDaGFuZ2UoIGluc3QgKTtcblx0XHR9XG5cdFx0dGhpcy5fYWRqdXN0SW5zdERhdGUoIGluc3QgKTtcblx0XHRpZiAoIGluc3QuaW5wdXQgKSB7XG5cdFx0XHRpbnN0LmlucHV0LnZhbCggY2xlYXIgPyBcIlwiIDogdGhpcy5fZm9ybWF0RGF0ZSggaW5zdCApICk7XG5cdFx0fVxuXHR9LFxuXG5cdC8qIFJldHJpZXZlIHRoZSBkYXRlKHMpIGRpcmVjdGx5LiAqL1xuXHRfZ2V0RGF0ZTogZnVuY3Rpb24oIGluc3QgKSB7XG5cdFx0dmFyIHN0YXJ0RGF0ZSA9ICggIWluc3QuY3VycmVudFllYXIgfHwgKCBpbnN0LmlucHV0ICYmIGluc3QuaW5wdXQudmFsKCkgPT09IFwiXCIgKSA/IG51bGwgOlxuXHRcdFx0dGhpcy5fZGF5bGlnaHRTYXZpbmdBZGp1c3QoIG5ldyBEYXRlKFxuXHRcdFx0aW5zdC5jdXJyZW50WWVhciwgaW5zdC5jdXJyZW50TW9udGgsIGluc3QuY3VycmVudERheSApICkgKTtcblx0XHRcdHJldHVybiBzdGFydERhdGU7XG5cdH0sXG5cblx0LyogQXR0YWNoIHRoZSBvbnh4eCBoYW5kbGVycy4gIFRoZXNlIGFyZSBkZWNsYXJlZCBzdGF0aWNhbGx5IHNvXG5cdCAqIHRoZXkgd29yayB3aXRoIHN0YXRpYyBjb2RlIHRyYW5zZm9ybWVycyBsaWtlIENhamEuXG5cdCAqL1xuXHRfYXR0YWNoSGFuZGxlcnM6IGZ1bmN0aW9uKCBpbnN0ICkge1xuXHRcdHZhciBzdGVwTW9udGhzID0gdGhpcy5fZ2V0KCBpbnN0LCBcInN0ZXBNb250aHNcIiApLFxuXHRcdFx0aWQgPSBcIiNcIiArIGluc3QuaWQucmVwbGFjZSggL1xcXFxcXFxcL2csIFwiXFxcXFwiICk7XG5cdFx0aW5zdC5kcERpdi5maW5kKCBcIltkYXRhLWhhbmRsZXJdXCIgKS5tYXAoIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGhhbmRsZXIgPSB7XG5cdFx0XHRcdHByZXY6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCQuZGF0ZXBpY2tlci5fYWRqdXN0RGF0ZSggaWQsIC1zdGVwTW9udGhzLCBcIk1cIiApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRuZXh0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkLmRhdGVwaWNrZXIuX2FkanVzdERhdGUoIGlkLCArc3RlcE1vbnRocywgXCJNXCIgKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0aGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JC5kYXRlcGlja2VyLl9oaWRlRGF0ZXBpY2tlcigpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR0b2RheTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JC5kYXRlcGlja2VyLl9nb3RvVG9kYXkoIGlkICk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNlbGVjdERheTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JC5kYXRlcGlja2VyLl9zZWxlY3REYXkoIGlkLCArdGhpcy5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1tb250aFwiICksICt0aGlzLmdldEF0dHJpYnV0ZSggXCJkYXRhLXllYXJcIiApLCB0aGlzICk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZWxlY3RNb250aDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JC5kYXRlcGlja2VyLl9zZWxlY3RNb250aFllYXIoIGlkLCB0aGlzLCBcIk1cIiApO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0c2VsZWN0WWVhcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JC5kYXRlcGlja2VyLl9zZWxlY3RNb250aFllYXIoIGlkLCB0aGlzLCBcIllcIiApO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdCQoIHRoaXMgKS5vbiggdGhpcy5nZXRBdHRyaWJ1dGUoIFwiZGF0YS1ldmVudFwiICksIGhhbmRsZXJbIHRoaXMuZ2V0QXR0cmlidXRlKCBcImRhdGEtaGFuZGxlclwiICkgXSApO1xuXHRcdH0gKTtcblx0fSxcblxuXHQvKiBHZW5lcmF0ZSB0aGUgSFRNTCBmb3IgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGRhdGUgcGlja2VyLiAqL1xuXHRfZ2VuZXJhdGVIVE1MOiBmdW5jdGlvbiggaW5zdCApIHtcblx0XHR2YXIgbWF4RHJhdywgcHJldlRleHQsIHByZXYsIG5leHRUZXh0LCBuZXh0LCBjdXJyZW50VGV4dCwgZ290b0RhdGUsXG5cdFx0XHRjb250cm9scywgYnV0dG9uUGFuZWwsIGZpcnN0RGF5LCBzaG93V2VlaywgZGF5TmFtZXMsIGRheU5hbWVzTWluLFxuXHRcdFx0bW9udGhOYW1lcywgbW9udGhOYW1lc1Nob3J0LCBiZWZvcmVTaG93RGF5LCBzaG93T3RoZXJNb250aHMsXG5cdFx0XHRzZWxlY3RPdGhlck1vbnRocywgZGVmYXVsdERhdGUsIGh0bWwsIGRvdywgcm93LCBncm91cCwgY29sLCBzZWxlY3RlZERhdGUsXG5cdFx0XHRjb3JuZXJDbGFzcywgY2FsZW5kZXIsIHRoZWFkLCBkYXksIGRheXNJbk1vbnRoLCBsZWFkRGF5cywgY3VyUm93cywgbnVtUm93cyxcblx0XHRcdHByaW50RGF0ZSwgZFJvdywgdGJvZHksIGRheVNldHRpbmdzLCBvdGhlck1vbnRoLCB1bnNlbGVjdGFibGUsXG5cdFx0XHR0ZW1wRGF0ZSA9IG5ldyBEYXRlKCksXG5cdFx0XHR0b2RheSA9IHRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KFxuXHRcdFx0XHRuZXcgRGF0ZSggdGVtcERhdGUuZ2V0RnVsbFllYXIoKSwgdGVtcERhdGUuZ2V0TW9udGgoKSwgdGVtcERhdGUuZ2V0RGF0ZSgpICkgKSwgLy8gY2xlYXIgdGltZVxuXHRcdFx0aXNSVEwgPSB0aGlzLl9nZXQoIGluc3QsIFwiaXNSVExcIiApLFxuXHRcdFx0c2hvd0J1dHRvblBhbmVsID0gdGhpcy5fZ2V0KCBpbnN0LCBcInNob3dCdXR0b25QYW5lbFwiICksXG5cdFx0XHRoaWRlSWZOb1ByZXZOZXh0ID0gdGhpcy5fZ2V0KCBpbnN0LCBcImhpZGVJZk5vUHJldk5leHRcIiApLFxuXHRcdFx0bmF2aWdhdGlvbkFzRGF0ZUZvcm1hdCA9IHRoaXMuX2dldCggaW5zdCwgXCJuYXZpZ2F0aW9uQXNEYXRlRm9ybWF0XCIgKSxcblx0XHRcdG51bU1vbnRocyA9IHRoaXMuX2dldE51bWJlck9mTW9udGhzKCBpbnN0ICksXG5cdFx0XHRzaG93Q3VycmVudEF0UG9zID0gdGhpcy5fZ2V0KCBpbnN0LCBcInNob3dDdXJyZW50QXRQb3NcIiApLFxuXHRcdFx0c3RlcE1vbnRocyA9IHRoaXMuX2dldCggaW5zdCwgXCJzdGVwTW9udGhzXCIgKSxcblx0XHRcdGlzTXVsdGlNb250aCA9ICggbnVtTW9udGhzWyAwIF0gIT09IDEgfHwgbnVtTW9udGhzWyAxIF0gIT09IDEgKSxcblx0XHRcdGN1cnJlbnREYXRlID0gdGhpcy5fZGF5bGlnaHRTYXZpbmdBZGp1c3QoICggIWluc3QuY3VycmVudERheSA/IG5ldyBEYXRlKCA5OTk5LCA5LCA5ICkgOlxuXHRcdFx0XHRuZXcgRGF0ZSggaW5zdC5jdXJyZW50WWVhciwgaW5zdC5jdXJyZW50TW9udGgsIGluc3QuY3VycmVudERheSApICkgKSxcblx0XHRcdG1pbkRhdGUgPSB0aGlzLl9nZXRNaW5NYXhEYXRlKCBpbnN0LCBcIm1pblwiICksXG5cdFx0XHRtYXhEYXRlID0gdGhpcy5fZ2V0TWluTWF4RGF0ZSggaW5zdCwgXCJtYXhcIiApLFxuXHRcdFx0ZHJhd01vbnRoID0gaW5zdC5kcmF3TW9udGggLSBzaG93Q3VycmVudEF0UG9zLFxuXHRcdFx0ZHJhd1llYXIgPSBpbnN0LmRyYXdZZWFyO1xuXG5cdFx0aWYgKCBkcmF3TW9udGggPCAwICkge1xuXHRcdFx0ZHJhd01vbnRoICs9IDEyO1xuXHRcdFx0ZHJhd1llYXItLTtcblx0XHR9XG5cdFx0aWYgKCBtYXhEYXRlICkge1xuXHRcdFx0bWF4RHJhdyA9IHRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KCBuZXcgRGF0ZSggbWF4RGF0ZS5nZXRGdWxsWWVhcigpLFxuXHRcdFx0XHRtYXhEYXRlLmdldE1vbnRoKCkgLSAoIG51bU1vbnRoc1sgMCBdICogbnVtTW9udGhzWyAxIF0gKSArIDEsIG1heERhdGUuZ2V0RGF0ZSgpICkgKTtcblx0XHRcdG1heERyYXcgPSAoIG1pbkRhdGUgJiYgbWF4RHJhdyA8IG1pbkRhdGUgPyBtaW5EYXRlIDogbWF4RHJhdyApO1xuXHRcdFx0d2hpbGUgKCB0aGlzLl9kYXlsaWdodFNhdmluZ0FkanVzdCggbmV3IERhdGUoIGRyYXdZZWFyLCBkcmF3TW9udGgsIDEgKSApID4gbWF4RHJhdyApIHtcblx0XHRcdFx0ZHJhd01vbnRoLS07XG5cdFx0XHRcdGlmICggZHJhd01vbnRoIDwgMCApIHtcblx0XHRcdFx0XHRkcmF3TW9udGggPSAxMTtcblx0XHRcdFx0XHRkcmF3WWVhci0tO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGluc3QuZHJhd01vbnRoID0gZHJhd01vbnRoO1xuXHRcdGluc3QuZHJhd1llYXIgPSBkcmF3WWVhcjtcblxuXHRcdHByZXZUZXh0ID0gdGhpcy5fZ2V0KCBpbnN0LCBcInByZXZUZXh0XCIgKTtcblx0XHRwcmV2VGV4dCA9ICggIW5hdmlnYXRpb25Bc0RhdGVGb3JtYXQgPyBwcmV2VGV4dCA6IHRoaXMuZm9ybWF0RGF0ZSggcHJldlRleHQsXG5cdFx0XHR0aGlzLl9kYXlsaWdodFNhdmluZ0FkanVzdCggbmV3IERhdGUoIGRyYXdZZWFyLCBkcmF3TW9udGggLSBzdGVwTW9udGhzLCAxICkgKSxcblx0XHRcdHRoaXMuX2dldEZvcm1hdENvbmZpZyggaW5zdCApICkgKTtcblxuXHRcdGlmICggdGhpcy5fY2FuQWRqdXN0TW9udGgoIGluc3QsIC0xLCBkcmF3WWVhciwgZHJhd01vbnRoICkgKSB7XG5cdFx0XHRwcmV2ID0gJCggXCI8YT5cIiApXG5cdFx0XHRcdC5hdHRyKCB7XG5cdFx0XHRcdFx0XCJjbGFzc1wiOiBcInVpLWRhdGVwaWNrZXItcHJldiB1aS1jb3JuZXItYWxsXCIsXG5cdFx0XHRcdFx0XCJkYXRhLWhhbmRsZXJcIjogXCJwcmV2XCIsXG5cdFx0XHRcdFx0XCJkYXRhLWV2ZW50XCI6IFwiY2xpY2tcIixcblx0XHRcdFx0XHR0aXRsZTogcHJldlRleHRcblx0XHRcdFx0fSApXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0JCggXCI8c3Bhbj5cIiApXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoIFwidWktaWNvbiB1aS1pY29uLWNpcmNsZS10cmlhbmdsZS1cIiArXG5cdFx0XHRcdFx0XHRcdCggaXNSVEwgPyBcImVcIiA6IFwid1wiICkgKVxuXHRcdFx0XHRcdFx0LnRleHQoIHByZXZUZXh0IClcblx0XHRcdFx0KVsgMCBdLm91dGVySFRNTDtcblx0XHR9IGVsc2UgaWYgKCBoaWRlSWZOb1ByZXZOZXh0ICkge1xuXHRcdFx0cHJldiA9IFwiXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHByZXYgPSAkKCBcIjxhPlwiIClcblx0XHRcdFx0LmF0dHIoIHtcblx0XHRcdFx0XHRcImNsYXNzXCI6IFwidWktZGF0ZXBpY2tlci1wcmV2IHVpLWNvcm5lci1hbGwgdWktc3RhdGUtZGlzYWJsZWRcIixcblx0XHRcdFx0XHR0aXRsZTogcHJldlRleHRcblx0XHRcdFx0fSApXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0JCggXCI8c3Bhbj5cIiApXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoIFwidWktaWNvbiB1aS1pY29uLWNpcmNsZS10cmlhbmdsZS1cIiArXG5cdFx0XHRcdFx0XHRcdCggaXNSVEwgPyBcImVcIiA6IFwid1wiICkgKVxuXHRcdFx0XHRcdFx0LnRleHQoIHByZXZUZXh0IClcblx0XHRcdFx0KVsgMCBdLm91dGVySFRNTDtcblx0XHR9XG5cblx0XHRuZXh0VGV4dCA9IHRoaXMuX2dldCggaW5zdCwgXCJuZXh0VGV4dFwiICk7XG5cdFx0bmV4dFRleHQgPSAoICFuYXZpZ2F0aW9uQXNEYXRlRm9ybWF0ID8gbmV4dFRleHQgOiB0aGlzLmZvcm1hdERhdGUoIG5leHRUZXh0LFxuXHRcdFx0dGhpcy5fZGF5bGlnaHRTYXZpbmdBZGp1c3QoIG5ldyBEYXRlKCBkcmF3WWVhciwgZHJhd01vbnRoICsgc3RlcE1vbnRocywgMSApICksXG5cdFx0XHR0aGlzLl9nZXRGb3JtYXRDb25maWcoIGluc3QgKSApICk7XG5cblx0XHRpZiAoIHRoaXMuX2NhbkFkanVzdE1vbnRoKCBpbnN0LCArMSwgZHJhd1llYXIsIGRyYXdNb250aCApICkge1xuXHRcdFx0bmV4dCA9ICQoIFwiPGE+XCIgKVxuXHRcdFx0XHQuYXR0cigge1xuXHRcdFx0XHRcdFwiY2xhc3NcIjogXCJ1aS1kYXRlcGlja2VyLW5leHQgdWktY29ybmVyLWFsbFwiLFxuXHRcdFx0XHRcdFwiZGF0YS1oYW5kbGVyXCI6IFwibmV4dFwiLFxuXHRcdFx0XHRcdFwiZGF0YS1ldmVudFwiOiBcImNsaWNrXCIsXG5cdFx0XHRcdFx0dGl0bGU6IG5leHRUZXh0XG5cdFx0XHRcdH0gKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoIFwiPHNwYW4+XCIgKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCBcInVpLWljb24gdWktaWNvbi1jaXJjbGUtdHJpYW5nbGUtXCIgK1xuXHRcdFx0XHRcdFx0XHQoIGlzUlRMID8gXCJ3XCIgOiBcImVcIiApIClcblx0XHRcdFx0XHRcdC50ZXh0KCBuZXh0VGV4dCApXG5cdFx0XHRcdClbIDAgXS5vdXRlckhUTUw7XG5cdFx0fSBlbHNlIGlmICggaGlkZUlmTm9QcmV2TmV4dCApIHtcblx0XHRcdG5leHQgPSBcIlwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXh0ID0gJCggXCI8YT5cIiApXG5cdFx0XHRcdC5hdHRyKCB7XG5cdFx0XHRcdFx0XCJjbGFzc1wiOiBcInVpLWRhdGVwaWNrZXItbmV4dCB1aS1jb3JuZXItYWxsIHVpLXN0YXRlLWRpc2FibGVkXCIsXG5cdFx0XHRcdFx0dGl0bGU6IG5leHRUZXh0XG5cdFx0XHRcdH0gKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoIFwiPHNwYW4+XCIgKVxuXHRcdFx0XHRcdFx0LmF0dHIoIFwiY2xhc3NcIiwgXCJ1aS1pY29uIHVpLWljb24tY2lyY2xlLXRyaWFuZ2xlLVwiICtcblx0XHRcdFx0XHRcdFx0KCBpc1JUTCA/IFwid1wiIDogXCJlXCIgKSApXG5cdFx0XHRcdFx0XHQudGV4dCggbmV4dFRleHQgKVxuXHRcdFx0XHQpWyAwIF0ub3V0ZXJIVE1MO1xuXHRcdH1cblxuXHRcdGN1cnJlbnRUZXh0ID0gdGhpcy5fZ2V0KCBpbnN0LCBcImN1cnJlbnRUZXh0XCIgKTtcblx0XHRnb3RvRGF0ZSA9ICggdGhpcy5fZ2V0KCBpbnN0LCBcImdvdG9DdXJyZW50XCIgKSAmJiBpbnN0LmN1cnJlbnREYXkgPyBjdXJyZW50RGF0ZSA6IHRvZGF5ICk7XG5cdFx0Y3VycmVudFRleHQgPSAoICFuYXZpZ2F0aW9uQXNEYXRlRm9ybWF0ID8gY3VycmVudFRleHQgOlxuXHRcdFx0dGhpcy5mb3JtYXREYXRlKCBjdXJyZW50VGV4dCwgZ290b0RhdGUsIHRoaXMuX2dldEZvcm1hdENvbmZpZyggaW5zdCApICkgKTtcblxuXHRcdGNvbnRyb2xzID0gXCJcIjtcblx0XHRpZiAoICFpbnN0LmlubGluZSApIHtcblx0XHRcdGNvbnRyb2xzID0gJCggXCI8YnV0dG9uPlwiIClcblx0XHRcdFx0LmF0dHIoIHtcblx0XHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHRcdFwiY2xhc3NcIjogXCJ1aS1kYXRlcGlja2VyLWNsb3NlIHVpLXN0YXRlLWRlZmF1bHQgdWktcHJpb3JpdHktcHJpbWFyeSB1aS1jb3JuZXItYWxsXCIsXG5cdFx0XHRcdFx0XCJkYXRhLWhhbmRsZXJcIjogXCJoaWRlXCIsXG5cdFx0XHRcdFx0XCJkYXRhLWV2ZW50XCI6IFwiY2xpY2tcIlxuXHRcdFx0XHR9IClcblx0XHRcdFx0LnRleHQoIHRoaXMuX2dldCggaW5zdCwgXCJjbG9zZVRleHRcIiApIClbIDAgXS5vdXRlckhUTUw7XG5cdFx0fVxuXG5cdFx0YnV0dG9uUGFuZWwgPSBcIlwiO1xuXHRcdGlmICggc2hvd0J1dHRvblBhbmVsICkge1xuXHRcdFx0YnV0dG9uUGFuZWwgPSAkKCBcIjxkaXYgY2xhc3M9J3VpLWRhdGVwaWNrZXItYnV0dG9ucGFuZSB1aS13aWRnZXQtY29udGVudCc+XCIgKVxuXHRcdFx0XHQuYXBwZW5kKCBpc1JUTCA/IGNvbnRyb2xzIDogXCJcIiApXG5cdFx0XHRcdC5hcHBlbmQoIHRoaXMuX2lzSW5SYW5nZSggaW5zdCwgZ290b0RhdGUgKSA/XG5cdFx0XHRcdFx0JCggXCI8YnV0dG9uPlwiIClcblx0XHRcdFx0XHRcdC5hdHRyKCB7XG5cdFx0XHRcdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCIsXG5cdFx0XHRcdFx0XHRcdFwiY2xhc3NcIjogXCJ1aS1kYXRlcGlja2VyLWN1cnJlbnQgdWktc3RhdGUtZGVmYXVsdCB1aS1wcmlvcml0eS1zZWNvbmRhcnkgdWktY29ybmVyLWFsbFwiLFxuXHRcdFx0XHRcdFx0XHRcImRhdGEtaGFuZGxlclwiOiBcInRvZGF5XCIsXG5cdFx0XHRcdFx0XHRcdFwiZGF0YS1ldmVudFwiOiBcImNsaWNrXCJcblx0XHRcdFx0XHRcdH0gKVxuXHRcdFx0XHRcdFx0LnRleHQoIGN1cnJlbnRUZXh0ICkgOlxuXHRcdFx0XHRcdFwiXCIgKVxuXHRcdFx0XHQuYXBwZW5kKCBpc1JUTCA/IFwiXCIgOiBjb250cm9scyApWyAwIF0ub3V0ZXJIVE1MO1xuXHRcdH1cblxuXHRcdGZpcnN0RGF5ID0gcGFyc2VJbnQoIHRoaXMuX2dldCggaW5zdCwgXCJmaXJzdERheVwiICksIDEwICk7XG5cdFx0Zmlyc3REYXkgPSAoIGlzTmFOKCBmaXJzdERheSApID8gMCA6IGZpcnN0RGF5ICk7XG5cblx0XHRzaG93V2VlayA9IHRoaXMuX2dldCggaW5zdCwgXCJzaG93V2Vla1wiICk7XG5cdFx0ZGF5TmFtZXMgPSB0aGlzLl9nZXQoIGluc3QsIFwiZGF5TmFtZXNcIiApO1xuXHRcdGRheU5hbWVzTWluID0gdGhpcy5fZ2V0KCBpbnN0LCBcImRheU5hbWVzTWluXCIgKTtcblx0XHRtb250aE5hbWVzID0gdGhpcy5fZ2V0KCBpbnN0LCBcIm1vbnRoTmFtZXNcIiApO1xuXHRcdG1vbnRoTmFtZXNTaG9ydCA9IHRoaXMuX2dldCggaW5zdCwgXCJtb250aE5hbWVzU2hvcnRcIiApO1xuXHRcdGJlZm9yZVNob3dEYXkgPSB0aGlzLl9nZXQoIGluc3QsIFwiYmVmb3JlU2hvd0RheVwiICk7XG5cdFx0c2hvd090aGVyTW9udGhzID0gdGhpcy5fZ2V0KCBpbnN0LCBcInNob3dPdGhlck1vbnRoc1wiICk7XG5cdFx0c2VsZWN0T3RoZXJNb250aHMgPSB0aGlzLl9nZXQoIGluc3QsIFwic2VsZWN0T3RoZXJNb250aHNcIiApO1xuXHRcdGRlZmF1bHREYXRlID0gdGhpcy5fZ2V0RGVmYXVsdERhdGUoIGluc3QgKTtcblx0XHRodG1sID0gXCJcIjtcblxuXHRcdGZvciAoIHJvdyA9IDA7IHJvdyA8IG51bU1vbnRoc1sgMCBdOyByb3crKyApIHtcblx0XHRcdGdyb3VwID0gXCJcIjtcblx0XHRcdHRoaXMubWF4Um93cyA9IDQ7XG5cdFx0XHRmb3IgKCBjb2wgPSAwOyBjb2wgPCBudW1Nb250aHNbIDEgXTsgY29sKysgKSB7XG5cdFx0XHRcdHNlbGVjdGVkRGF0ZSA9IHRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KCBuZXcgRGF0ZSggZHJhd1llYXIsIGRyYXdNb250aCwgaW5zdC5zZWxlY3RlZERheSApICk7XG5cdFx0XHRcdGNvcm5lckNsYXNzID0gXCIgdWktY29ybmVyLWFsbFwiO1xuXHRcdFx0XHRjYWxlbmRlciA9IFwiXCI7XG5cdFx0XHRcdGlmICggaXNNdWx0aU1vbnRoICkge1xuXHRcdFx0XHRcdGNhbGVuZGVyICs9IFwiPGRpdiBjbGFzcz0ndWktZGF0ZXBpY2tlci1ncm91cFwiO1xuXHRcdFx0XHRcdGlmICggbnVtTW9udGhzWyAxIF0gPiAxICkge1xuXHRcdFx0XHRcdFx0c3dpdGNoICggY29sICkge1xuXHRcdFx0XHRcdFx0XHRjYXNlIDA6IGNhbGVuZGVyICs9IFwiIHVpLWRhdGVwaWNrZXItZ3JvdXAtZmlyc3RcIjtcblx0XHRcdFx0XHRcdFx0XHRjb3JuZXJDbGFzcyA9IFwiIHVpLWNvcm5lci1cIiArICggaXNSVEwgPyBcInJpZ2h0XCIgOiBcImxlZnRcIiApOyBicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSBudW1Nb250aHNbIDEgXSAtIDE6IGNhbGVuZGVyICs9IFwiIHVpLWRhdGVwaWNrZXItZ3JvdXAtbGFzdFwiO1xuXHRcdFx0XHRcdFx0XHRcdGNvcm5lckNsYXNzID0gXCIgdWktY29ybmVyLVwiICsgKCBpc1JUTCA/IFwibGVmdFwiIDogXCJyaWdodFwiICk7IGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OiBjYWxlbmRlciArPSBcIiB1aS1kYXRlcGlja2VyLWdyb3VwLW1pZGRsZVwiOyBjb3JuZXJDbGFzcyA9IFwiXCI7IGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYWxlbmRlciArPSBcIic+XCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FsZW5kZXIgKz0gXCI8ZGl2IGNsYXNzPSd1aS1kYXRlcGlja2VyLWhlYWRlciB1aS13aWRnZXQtaGVhZGVyIHVpLWhlbHBlci1jbGVhcmZpeFwiICsgY29ybmVyQ2xhc3MgKyBcIic+XCIgK1xuXHRcdFx0XHRcdCggL2FsbHxsZWZ0Ly50ZXN0KCBjb3JuZXJDbGFzcyApICYmIHJvdyA9PT0gMCA/ICggaXNSVEwgPyBuZXh0IDogcHJldiApIDogXCJcIiApICtcblx0XHRcdFx0XHQoIC9hbGx8cmlnaHQvLnRlc3QoIGNvcm5lckNsYXNzICkgJiYgcm93ID09PSAwID8gKCBpc1JUTCA/IHByZXYgOiBuZXh0ICkgOiBcIlwiICkgK1xuXHRcdFx0XHRcdHRoaXMuX2dlbmVyYXRlTW9udGhZZWFySGVhZGVyKCBpbnN0LCBkcmF3TW9udGgsIGRyYXdZZWFyLCBtaW5EYXRlLCBtYXhEYXRlLFxuXHRcdFx0XHRcdHJvdyA+IDAgfHwgY29sID4gMCwgbW9udGhOYW1lcywgbW9udGhOYW1lc1Nob3J0ICkgKyAvLyBkcmF3IG1vbnRoIGhlYWRlcnNcblx0XHRcdFx0XHRcIjwvZGl2Pjx0YWJsZSBjbGFzcz0ndWktZGF0ZXBpY2tlci1jYWxlbmRhcic+PHRoZWFkPlwiICtcblx0XHRcdFx0XHRcIjx0cj5cIjtcblx0XHRcdFx0dGhlYWQgPSAoIHNob3dXZWVrID8gXCI8dGggY2xhc3M9J3VpLWRhdGVwaWNrZXItd2Vlay1jb2wnPlwiICsgdGhpcy5fZ2V0KCBpbnN0LCBcIndlZWtIZWFkZXJcIiApICsgXCI8L3RoPlwiIDogXCJcIiApO1xuXHRcdFx0XHRmb3IgKCBkb3cgPSAwOyBkb3cgPCA3OyBkb3crKyApIHsgLy8gZGF5cyBvZiB0aGUgd2Vla1xuXHRcdFx0XHRcdGRheSA9ICggZG93ICsgZmlyc3REYXkgKSAlIDc7XG5cdFx0XHRcdFx0dGhlYWQgKz0gXCI8dGggc2NvcGU9J2NvbCdcIiArICggKCBkb3cgKyBmaXJzdERheSArIDYgKSAlIDcgPj0gNSA/IFwiIGNsYXNzPSd1aS1kYXRlcGlja2VyLXdlZWstZW5kJ1wiIDogXCJcIiApICsgXCI+XCIgK1xuXHRcdFx0XHRcdFx0XCI8c3BhbiB0aXRsZT0nXCIgKyBkYXlOYW1lc1sgZGF5IF0gKyBcIic+XCIgKyBkYXlOYW1lc01pblsgZGF5IF0gKyBcIjwvc3Bhbj48L3RoPlwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhbGVuZGVyICs9IHRoZWFkICsgXCI8L3RyPjwvdGhlYWQ+PHRib2R5PlwiO1xuXHRcdFx0XHRkYXlzSW5Nb250aCA9IHRoaXMuX2dldERheXNJbk1vbnRoKCBkcmF3WWVhciwgZHJhd01vbnRoICk7XG5cdFx0XHRcdGlmICggZHJhd1llYXIgPT09IGluc3Quc2VsZWN0ZWRZZWFyICYmIGRyYXdNb250aCA9PT0gaW5zdC5zZWxlY3RlZE1vbnRoICkge1xuXHRcdFx0XHRcdGluc3Quc2VsZWN0ZWREYXkgPSBNYXRoLm1pbiggaW5zdC5zZWxlY3RlZERheSwgZGF5c0luTW9udGggKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZWFkRGF5cyA9ICggdGhpcy5fZ2V0Rmlyc3REYXlPZk1vbnRoKCBkcmF3WWVhciwgZHJhd01vbnRoICkgLSBmaXJzdERheSArIDcgKSAlIDc7XG5cdFx0XHRcdGN1clJvd3MgPSBNYXRoLmNlaWwoICggbGVhZERheXMgKyBkYXlzSW5Nb250aCApIC8gNyApOyAvLyBjYWxjdWxhdGUgdGhlIG51bWJlciBvZiByb3dzIHRvIGdlbmVyYXRlXG5cdFx0XHRcdG51bVJvd3MgPSAoIGlzTXVsdGlNb250aCA/IHRoaXMubWF4Um93cyA+IGN1clJvd3MgPyB0aGlzLm1heFJvd3MgOiBjdXJSb3dzIDogY3VyUm93cyApOyAvL0lmIG11bHRpcGxlIG1vbnRocywgdXNlIHRoZSBoaWdoZXIgbnVtYmVyIG9mIHJvd3MgKHNlZSAjNzA0Mylcblx0XHRcdFx0dGhpcy5tYXhSb3dzID0gbnVtUm93cztcblx0XHRcdFx0cHJpbnREYXRlID0gdGhpcy5fZGF5bGlnaHRTYXZpbmdBZGp1c3QoIG5ldyBEYXRlKCBkcmF3WWVhciwgZHJhd01vbnRoLCAxIC0gbGVhZERheXMgKSApO1xuXHRcdFx0XHRmb3IgKCBkUm93ID0gMDsgZFJvdyA8IG51bVJvd3M7IGRSb3crKyApIHsgLy8gY3JlYXRlIGRhdGUgcGlja2VyIHJvd3Ncblx0XHRcdFx0XHRjYWxlbmRlciArPSBcIjx0cj5cIjtcblx0XHRcdFx0XHR0Ym9keSA9ICggIXNob3dXZWVrID8gXCJcIiA6IFwiPHRkIGNsYXNzPSd1aS1kYXRlcGlja2VyLXdlZWstY29sJz5cIiArXG5cdFx0XHRcdFx0XHR0aGlzLl9nZXQoIGluc3QsIFwiY2FsY3VsYXRlV2Vla1wiICkoIHByaW50RGF0ZSApICsgXCI8L3RkPlwiICk7XG5cdFx0XHRcdFx0Zm9yICggZG93ID0gMDsgZG93IDwgNzsgZG93KysgKSB7IC8vIGNyZWF0ZSBkYXRlIHBpY2tlciBkYXlzXG5cdFx0XHRcdFx0XHRkYXlTZXR0aW5ncyA9ICggYmVmb3JlU2hvd0RheSA/XG5cdFx0XHRcdFx0XHRcdGJlZm9yZVNob3dEYXkuYXBwbHkoICggaW5zdC5pbnB1dCA/IGluc3QuaW5wdXRbIDAgXSA6IG51bGwgKSwgWyBwcmludERhdGUgXSApIDogWyB0cnVlLCBcIlwiIF0gKTtcblx0XHRcdFx0XHRcdG90aGVyTW9udGggPSAoIHByaW50RGF0ZS5nZXRNb250aCgpICE9PSBkcmF3TW9udGggKTtcblx0XHRcdFx0XHRcdHVuc2VsZWN0YWJsZSA9ICggb3RoZXJNb250aCAmJiAhc2VsZWN0T3RoZXJNb250aHMgKSB8fCAhZGF5U2V0dGluZ3NbIDAgXSB8fFxuXHRcdFx0XHRcdFx0XHQoIG1pbkRhdGUgJiYgcHJpbnREYXRlIDwgbWluRGF0ZSApIHx8ICggbWF4RGF0ZSAmJiBwcmludERhdGUgPiBtYXhEYXRlICk7XG5cdFx0XHRcdFx0XHR0Ym9keSArPSBcIjx0ZCBjbGFzcz0nXCIgK1xuXHRcdFx0XHRcdFx0XHQoICggZG93ICsgZmlyc3REYXkgKyA2ICkgJSA3ID49IDUgPyBcIiB1aS1kYXRlcGlja2VyLXdlZWstZW5kXCIgOiBcIlwiICkgKyAvLyBoaWdobGlnaHQgd2Vla2VuZHNcblx0XHRcdFx0XHRcdFx0KCBvdGhlck1vbnRoID8gXCIgdWktZGF0ZXBpY2tlci1vdGhlci1tb250aFwiIDogXCJcIiApICsgLy8gaGlnaGxpZ2h0IGRheXMgZnJvbSBvdGhlciBtb250aHNcblx0XHRcdFx0XHRcdFx0KCAoIHByaW50RGF0ZS5nZXRUaW1lKCkgPT09IHNlbGVjdGVkRGF0ZS5nZXRUaW1lKCkgJiYgZHJhd01vbnRoID09PSBpbnN0LnNlbGVjdGVkTW9udGggJiYgaW5zdC5fa2V5RXZlbnQgKSB8fCAvLyB1c2VyIHByZXNzZWQga2V5XG5cdFx0XHRcdFx0XHRcdCggZGVmYXVsdERhdGUuZ2V0VGltZSgpID09PSBwcmludERhdGUuZ2V0VGltZSgpICYmIGRlZmF1bHREYXRlLmdldFRpbWUoKSA9PT0gc2VsZWN0ZWREYXRlLmdldFRpbWUoKSApID9cblxuXHRcdFx0XHRcdFx0XHQvLyBvciBkZWZhdWx0RGF0ZSBpcyBjdXJyZW50IHByaW50ZWREYXRlIGFuZCBkZWZhdWx0RGF0ZSBpcyBzZWxlY3RlZERhdGVcblx0XHRcdFx0XHRcdFx0XCIgXCIgKyB0aGlzLl9kYXlPdmVyQ2xhc3MgOiBcIlwiICkgKyAvLyBoaWdobGlnaHQgc2VsZWN0ZWQgZGF5XG5cdFx0XHRcdFx0XHRcdCggdW5zZWxlY3RhYmxlID8gXCIgXCIgKyB0aGlzLl91bnNlbGVjdGFibGVDbGFzcyArIFwiIHVpLXN0YXRlLWRpc2FibGVkXCIgOiBcIlwiICkgKyAgLy8gaGlnaGxpZ2h0IHVuc2VsZWN0YWJsZSBkYXlzXG5cdFx0XHRcdFx0XHRcdCggb3RoZXJNb250aCAmJiAhc2hvd090aGVyTW9udGhzID8gXCJcIiA6IFwiIFwiICsgZGF5U2V0dGluZ3NbIDEgXSArIC8vIGhpZ2hsaWdodCBjdXN0b20gZGF0ZXNcblx0XHRcdFx0XHRcdFx0KCBwcmludERhdGUuZ2V0VGltZSgpID09PSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkgPyBcIiBcIiArIHRoaXMuX2N1cnJlbnRDbGFzcyA6IFwiXCIgKSArIC8vIGhpZ2hsaWdodCBzZWxlY3RlZCBkYXlcblx0XHRcdFx0XHRcdFx0KCBwcmludERhdGUuZ2V0VGltZSgpID09PSB0b2RheS5nZXRUaW1lKCkgPyBcIiB1aS1kYXRlcGlja2VyLXRvZGF5XCIgOiBcIlwiICkgKSArIFwiJ1wiICsgLy8gaGlnaGxpZ2h0IHRvZGF5IChpZiBkaWZmZXJlbnQpXG5cdFx0XHRcdFx0XHRcdCggKCAhb3RoZXJNb250aCB8fCBzaG93T3RoZXJNb250aHMgKSAmJiBkYXlTZXR0aW5nc1sgMiBdID8gXCIgdGl0bGU9J1wiICsgZGF5U2V0dGluZ3NbIDIgXS5yZXBsYWNlKCAvJy9nLCBcIiYjMzk7XCIgKSArIFwiJ1wiIDogXCJcIiApICsgLy8gY2VsbCB0aXRsZVxuXHRcdFx0XHRcdFx0XHQoIHVuc2VsZWN0YWJsZSA/IFwiXCIgOiBcIiBkYXRhLWhhbmRsZXI9J3NlbGVjdERheScgZGF0YS1ldmVudD0nY2xpY2snIGRhdGEtbW9udGg9J1wiICsgcHJpbnREYXRlLmdldE1vbnRoKCkgKyBcIicgZGF0YS15ZWFyPSdcIiArIHByaW50RGF0ZS5nZXRGdWxsWWVhcigpICsgXCInXCIgKSArIFwiPlwiICsgLy8gYWN0aW9uc1xuXHRcdFx0XHRcdFx0XHQoIG90aGVyTW9udGggJiYgIXNob3dPdGhlck1vbnRocyA/IFwiJiN4YTA7XCIgOiAvLyBkaXNwbGF5IGZvciBvdGhlciBtb250aHNcblx0XHRcdFx0XHRcdFx0KCB1bnNlbGVjdGFibGUgPyBcIjxzcGFuIGNsYXNzPSd1aS1zdGF0ZS1kZWZhdWx0Jz5cIiArIHByaW50RGF0ZS5nZXREYXRlKCkgKyBcIjwvc3Bhbj5cIiA6IFwiPGEgY2xhc3M9J3VpLXN0YXRlLWRlZmF1bHRcIiArXG5cdFx0XHRcdFx0XHRcdCggcHJpbnREYXRlLmdldFRpbWUoKSA9PT0gdG9kYXkuZ2V0VGltZSgpID8gXCIgdWktc3RhdGUtaGlnaGxpZ2h0XCIgOiBcIlwiICkgK1xuXHRcdFx0XHRcdFx0XHQoIHByaW50RGF0ZS5nZXRUaW1lKCkgPT09IGN1cnJlbnREYXRlLmdldFRpbWUoKSA/IFwiIHVpLXN0YXRlLWFjdGl2ZVwiIDogXCJcIiApICsgLy8gaGlnaGxpZ2h0IHNlbGVjdGVkIGRheVxuXHRcdFx0XHRcdFx0XHQoIG90aGVyTW9udGggPyBcIiB1aS1wcmlvcml0eS1zZWNvbmRhcnlcIiA6IFwiXCIgKSArIC8vIGRpc3Rpbmd1aXNoIGRhdGVzIGZyb20gb3RoZXIgbW9udGhzXG5cdFx0XHRcdFx0XHRcdFwiJyBocmVmPScjJyBhcmlhLWN1cnJlbnQ9J1wiICsgKCBwcmludERhdGUuZ2V0VGltZSgpID09PSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkgPyBcInRydWVcIiA6IFwiZmFsc2VcIiApICsgLy8gbWFyayBkYXRlIGFzIHNlbGVjdGVkIGZvciBzY3JlZW4gcmVhZGVyXG5cdFx0XHRcdFx0XHRcdFwiJyBkYXRhLWRhdGU9J1wiICsgcHJpbnREYXRlLmdldERhdGUoKSArIC8vIHN0b3JlIGRhdGUgYXMgZGF0YVxuXHRcdFx0XHRcdFx0XHRcIic+XCIgKyBwcmludERhdGUuZ2V0RGF0ZSgpICsgXCI8L2E+XCIgKSApICsgXCI8L3RkPlwiOyAvLyBkaXNwbGF5IHNlbGVjdGFibGUgZGF0ZVxuXHRcdFx0XHRcdFx0cHJpbnREYXRlLnNldERhdGUoIHByaW50RGF0ZS5nZXREYXRlKCkgKyAxICk7XG5cdFx0XHRcdFx0XHRwcmludERhdGUgPSB0aGlzLl9kYXlsaWdodFNhdmluZ0FkanVzdCggcHJpbnREYXRlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhbGVuZGVyICs9IHRib2R5ICsgXCI8L3RyPlwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRyYXdNb250aCsrO1xuXHRcdFx0XHRpZiAoIGRyYXdNb250aCA+IDExICkge1xuXHRcdFx0XHRcdGRyYXdNb250aCA9IDA7XG5cdFx0XHRcdFx0ZHJhd1llYXIrKztcblx0XHRcdFx0fVxuXHRcdFx0XHRjYWxlbmRlciArPSBcIjwvdGJvZHk+PC90YWJsZT5cIiArICggaXNNdWx0aU1vbnRoID8gXCI8L2Rpdj5cIiArXG5cdFx0XHRcdFx0XHRcdCggKCBudW1Nb250aHNbIDAgXSA+IDAgJiYgY29sID09PSBudW1Nb250aHNbIDEgXSAtIDEgKSA/IFwiPGRpdiBjbGFzcz0ndWktZGF0ZXBpY2tlci1yb3ctYnJlYWsnPjwvZGl2PlwiIDogXCJcIiApIDogXCJcIiApO1xuXHRcdFx0XHRncm91cCArPSBjYWxlbmRlcjtcblx0XHRcdH1cblx0XHRcdGh0bWwgKz0gZ3JvdXA7XG5cdFx0fVxuXHRcdGh0bWwgKz0gYnV0dG9uUGFuZWw7XG5cdFx0aW5zdC5fa2V5RXZlbnQgPSBmYWxzZTtcblx0XHRyZXR1cm4gaHRtbDtcblx0fSxcblxuXHQvKiBHZW5lcmF0ZSB0aGUgbW9udGggYW5kIHllYXIgaGVhZGVyLiAqL1xuXHRfZ2VuZXJhdGVNb250aFllYXJIZWFkZXI6IGZ1bmN0aW9uKCBpbnN0LCBkcmF3TW9udGgsIGRyYXdZZWFyLCBtaW5EYXRlLCBtYXhEYXRlLFxuXHRcdFx0c2Vjb25kYXJ5LCBtb250aE5hbWVzLCBtb250aE5hbWVzU2hvcnQgKSB7XG5cblx0XHR2YXIgaW5NaW5ZZWFyLCBpbk1heFllYXIsIG1vbnRoLCB5ZWFycywgdGhpc1llYXIsIGRldGVybWluZVllYXIsIHllYXIsIGVuZFllYXIsXG5cdFx0XHRjaGFuZ2VNb250aCA9IHRoaXMuX2dldCggaW5zdCwgXCJjaGFuZ2VNb250aFwiICksXG5cdFx0XHRjaGFuZ2VZZWFyID0gdGhpcy5fZ2V0KCBpbnN0LCBcImNoYW5nZVllYXJcIiApLFxuXHRcdFx0c2hvd01vbnRoQWZ0ZXJZZWFyID0gdGhpcy5fZ2V0KCBpbnN0LCBcInNob3dNb250aEFmdGVyWWVhclwiICksXG5cdFx0XHRzZWxlY3RNb250aExhYmVsID0gdGhpcy5fZ2V0KCBpbnN0LCBcInNlbGVjdE1vbnRoTGFiZWxcIiApLFxuXHRcdFx0c2VsZWN0WWVhckxhYmVsID0gdGhpcy5fZ2V0KCBpbnN0LCBcInNlbGVjdFllYXJMYWJlbFwiICksXG5cdFx0XHRodG1sID0gXCI8ZGl2IGNsYXNzPSd1aS1kYXRlcGlja2VyLXRpdGxlJz5cIixcblx0XHRcdG1vbnRoSHRtbCA9IFwiXCI7XG5cblx0XHQvLyBNb250aCBzZWxlY3Rpb25cblx0XHRpZiAoIHNlY29uZGFyeSB8fCAhY2hhbmdlTW9udGggKSB7XG5cdFx0XHRtb250aEh0bWwgKz0gXCI8c3BhbiBjbGFzcz0ndWktZGF0ZXBpY2tlci1tb250aCc+XCIgKyBtb250aE5hbWVzWyBkcmF3TW9udGggXSArIFwiPC9zcGFuPlwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpbk1pblllYXIgPSAoIG1pbkRhdGUgJiYgbWluRGF0ZS5nZXRGdWxsWWVhcigpID09PSBkcmF3WWVhciApO1xuXHRcdFx0aW5NYXhZZWFyID0gKCBtYXhEYXRlICYmIG1heERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gZHJhd1llYXIgKTtcblx0XHRcdG1vbnRoSHRtbCArPSBcIjxzZWxlY3QgY2xhc3M9J3VpLWRhdGVwaWNrZXItbW9udGgnIGFyaWEtbGFiZWw9J1wiICsgc2VsZWN0TW9udGhMYWJlbCArIFwiJyBkYXRhLWhhbmRsZXI9J3NlbGVjdE1vbnRoJyBkYXRhLWV2ZW50PSdjaGFuZ2UnPlwiO1xuXHRcdFx0Zm9yICggbW9udGggPSAwOyBtb250aCA8IDEyOyBtb250aCsrICkge1xuXHRcdFx0XHRpZiAoICggIWluTWluWWVhciB8fCBtb250aCA+PSBtaW5EYXRlLmdldE1vbnRoKCkgKSAmJiAoICFpbk1heFllYXIgfHwgbW9udGggPD0gbWF4RGF0ZS5nZXRNb250aCgpICkgKSB7XG5cdFx0XHRcdFx0bW9udGhIdG1sICs9IFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBtb250aCArIFwiJ1wiICtcblx0XHRcdFx0XHRcdCggbW9udGggPT09IGRyYXdNb250aCA/IFwiIHNlbGVjdGVkPSdzZWxlY3RlZCdcIiA6IFwiXCIgKSArXG5cdFx0XHRcdFx0XHRcIj5cIiArIG1vbnRoTmFtZXNTaG9ydFsgbW9udGggXSArIFwiPC9vcHRpb24+XCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1vbnRoSHRtbCArPSBcIjwvc2VsZWN0PlwiO1xuXHRcdH1cblxuXHRcdGlmICggIXNob3dNb250aEFmdGVyWWVhciApIHtcblx0XHRcdGh0bWwgKz0gbW9udGhIdG1sICsgKCBzZWNvbmRhcnkgfHwgISggY2hhbmdlTW9udGggJiYgY2hhbmdlWWVhciApID8gXCImI3hhMDtcIiA6IFwiXCIgKTtcblx0XHR9XG5cblx0XHQvLyBZZWFyIHNlbGVjdGlvblxuXHRcdGlmICggIWluc3QueWVhcnNodG1sICkge1xuXHRcdFx0aW5zdC55ZWFyc2h0bWwgPSBcIlwiO1xuXHRcdFx0aWYgKCBzZWNvbmRhcnkgfHwgIWNoYW5nZVllYXIgKSB7XG5cdFx0XHRcdGh0bWwgKz0gXCI8c3BhbiBjbGFzcz0ndWktZGF0ZXBpY2tlci15ZWFyJz5cIiArIGRyYXdZZWFyICsgXCI8L3NwYW4+XCI7XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIGRldGVybWluZSByYW5nZSBvZiB5ZWFycyB0byBkaXNwbGF5XG5cdFx0XHRcdHllYXJzID0gdGhpcy5fZ2V0KCBpbnN0LCBcInllYXJSYW5nZVwiICkuc3BsaXQoIFwiOlwiICk7XG5cdFx0XHRcdHRoaXNZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0XHRkZXRlcm1pbmVZZWFyID0gZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0XHRcdHZhciB5ZWFyID0gKCB2YWx1ZS5tYXRjaCggL2NbK1xcLV0uKi8gKSA/IGRyYXdZZWFyICsgcGFyc2VJbnQoIHZhbHVlLnN1YnN0cmluZyggMSApLCAxMCApIDpcblx0XHRcdFx0XHRcdCggdmFsdWUubWF0Y2goIC9bK1xcLV0uKi8gKSA/IHRoaXNZZWFyICsgcGFyc2VJbnQoIHZhbHVlLCAxMCApIDpcblx0XHRcdFx0XHRcdHBhcnNlSW50KCB2YWx1ZSwgMTAgKSApICk7XG5cdFx0XHRcdFx0cmV0dXJuICggaXNOYU4oIHllYXIgKSA/IHRoaXNZZWFyIDogeWVhciApO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHR5ZWFyID0gZGV0ZXJtaW5lWWVhciggeWVhcnNbIDAgXSApO1xuXHRcdFx0XHRlbmRZZWFyID0gTWF0aC5tYXgoIHllYXIsIGRldGVybWluZVllYXIoIHllYXJzWyAxIF0gfHwgXCJcIiApICk7XG5cdFx0XHRcdHllYXIgPSAoIG1pbkRhdGUgPyBNYXRoLm1heCggeWVhciwgbWluRGF0ZS5nZXRGdWxsWWVhcigpICkgOiB5ZWFyICk7XG5cdFx0XHRcdGVuZFllYXIgPSAoIG1heERhdGUgPyBNYXRoLm1pbiggZW5kWWVhciwgbWF4RGF0ZS5nZXRGdWxsWWVhcigpICkgOiBlbmRZZWFyICk7XG5cdFx0XHRcdGluc3QueWVhcnNodG1sICs9IFwiPHNlbGVjdCBjbGFzcz0ndWktZGF0ZXBpY2tlci15ZWFyJyBhcmlhLWxhYmVsPSdcIiArIHNlbGVjdFllYXJMYWJlbCArIFwiJyBkYXRhLWhhbmRsZXI9J3NlbGVjdFllYXInIGRhdGEtZXZlbnQ9J2NoYW5nZSc+XCI7XG5cdFx0XHRcdGZvciAoIDsgeWVhciA8PSBlbmRZZWFyOyB5ZWFyKysgKSB7XG5cdFx0XHRcdFx0aW5zdC55ZWFyc2h0bWwgKz0gXCI8b3B0aW9uIHZhbHVlPSdcIiArIHllYXIgKyBcIidcIiArXG5cdFx0XHRcdFx0XHQoIHllYXIgPT09IGRyYXdZZWFyID8gXCIgc2VsZWN0ZWQ9J3NlbGVjdGVkJ1wiIDogXCJcIiApICtcblx0XHRcdFx0XHRcdFwiPlwiICsgeWVhciArIFwiPC9vcHRpb24+XCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5zdC55ZWFyc2h0bWwgKz0gXCI8L3NlbGVjdD5cIjtcblxuXHRcdFx0XHRodG1sICs9IGluc3QueWVhcnNodG1sO1xuXHRcdFx0XHRpbnN0LnllYXJzaHRtbCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aHRtbCArPSB0aGlzLl9nZXQoIGluc3QsIFwieWVhclN1ZmZpeFwiICk7XG5cdFx0aWYgKCBzaG93TW9udGhBZnRlclllYXIgKSB7XG5cdFx0XHRodG1sICs9ICggc2Vjb25kYXJ5IHx8ICEoIGNoYW5nZU1vbnRoICYmIGNoYW5nZVllYXIgKSA/IFwiJiN4YTA7XCIgOiBcIlwiICkgKyBtb250aEh0bWw7XG5cdFx0fVxuXHRcdGh0bWwgKz0gXCI8L2Rpdj5cIjsgLy8gQ2xvc2UgZGF0ZXBpY2tlcl9oZWFkZXJcblx0XHRyZXR1cm4gaHRtbDtcblx0fSxcblxuXHQvKiBBZGp1c3Qgb25lIG9mIHRoZSBkYXRlIHN1Yi1maWVsZHMuICovXG5cdF9hZGp1c3RJbnN0RGF0ZTogZnVuY3Rpb24oIGluc3QsIG9mZnNldCwgcGVyaW9kICkge1xuXHRcdHZhciB5ZWFyID0gaW5zdC5zZWxlY3RlZFllYXIgKyAoIHBlcmlvZCA9PT0gXCJZXCIgPyBvZmZzZXQgOiAwICksXG5cdFx0XHRtb250aCA9IGluc3Quc2VsZWN0ZWRNb250aCArICggcGVyaW9kID09PSBcIk1cIiA/IG9mZnNldCA6IDAgKSxcblx0XHRcdGRheSA9IE1hdGgubWluKCBpbnN0LnNlbGVjdGVkRGF5LCB0aGlzLl9nZXREYXlzSW5Nb250aCggeWVhciwgbW9udGggKSApICsgKCBwZXJpb2QgPT09IFwiRFwiID8gb2Zmc2V0IDogMCApLFxuXHRcdFx0ZGF0ZSA9IHRoaXMuX3Jlc3RyaWN0TWluTWF4KCBpbnN0LCB0aGlzLl9kYXlsaWdodFNhdmluZ0FkanVzdCggbmV3IERhdGUoIHllYXIsIG1vbnRoLCBkYXkgKSApICk7XG5cblx0XHRpbnN0LnNlbGVjdGVkRGF5ID0gZGF0ZS5nZXREYXRlKCk7XG5cdFx0aW5zdC5kcmF3TW9udGggPSBpbnN0LnNlbGVjdGVkTW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG5cdFx0aW5zdC5kcmF3WWVhciA9IGluc3Quc2VsZWN0ZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdGlmICggcGVyaW9kID09PSBcIk1cIiB8fCBwZXJpb2QgPT09IFwiWVwiICkge1xuXHRcdFx0dGhpcy5fbm90aWZ5Q2hhbmdlKCBpbnN0ICk7XG5cdFx0fVxuXHR9LFxuXG5cdC8qIEVuc3VyZSBhIGRhdGUgaXMgd2l0aGluIGFueSBtaW4vbWF4IGJvdW5kcy4gKi9cblx0X3Jlc3RyaWN0TWluTWF4OiBmdW5jdGlvbiggaW5zdCwgZGF0ZSApIHtcblx0XHR2YXIgbWluRGF0ZSA9IHRoaXMuX2dldE1pbk1heERhdGUoIGluc3QsIFwibWluXCIgKSxcblx0XHRcdG1heERhdGUgPSB0aGlzLl9nZXRNaW5NYXhEYXRlKCBpbnN0LCBcIm1heFwiICksXG5cdFx0XHRuZXdEYXRlID0gKCBtaW5EYXRlICYmIGRhdGUgPCBtaW5EYXRlID8gbWluRGF0ZSA6IGRhdGUgKTtcblx0XHRyZXR1cm4gKCBtYXhEYXRlICYmIG5ld0RhdGUgPiBtYXhEYXRlID8gbWF4RGF0ZSA6IG5ld0RhdGUgKTtcblx0fSxcblxuXHQvKiBOb3RpZnkgY2hhbmdlIG9mIG1vbnRoL3llYXIuICovXG5cdF9ub3RpZnlDaGFuZ2U6IGZ1bmN0aW9uKCBpbnN0ICkge1xuXHRcdHZhciBvbkNoYW5nZSA9IHRoaXMuX2dldCggaW5zdCwgXCJvbkNoYW5nZU1vbnRoWWVhclwiICk7XG5cdFx0aWYgKCBvbkNoYW5nZSApIHtcblx0XHRcdG9uQ2hhbmdlLmFwcGx5KCAoIGluc3QuaW5wdXQgPyBpbnN0LmlucHV0WyAwIF0gOiBudWxsICksXG5cdFx0XHRcdFsgaW5zdC5zZWxlY3RlZFllYXIsIGluc3Quc2VsZWN0ZWRNb250aCArIDEsIGluc3QgXSApO1xuXHRcdH1cblx0fSxcblxuXHQvKiBEZXRlcm1pbmUgdGhlIG51bWJlciBvZiBtb250aHMgdG8gc2hvdy4gKi9cblx0X2dldE51bWJlck9mTW9udGhzOiBmdW5jdGlvbiggaW5zdCApIHtcblx0XHR2YXIgbnVtTW9udGhzID0gdGhpcy5fZ2V0KCBpbnN0LCBcIm51bWJlck9mTW9udGhzXCIgKTtcblx0XHRyZXR1cm4gKCBudW1Nb250aHMgPT0gbnVsbCA/IFsgMSwgMSBdIDogKCB0eXBlb2YgbnVtTW9udGhzID09PSBcIm51bWJlclwiID8gWyAxLCBudW1Nb250aHMgXSA6IG51bU1vbnRocyApICk7XG5cdH0sXG5cblx0LyogRGV0ZXJtaW5lIHRoZSBjdXJyZW50IG1heGltdW0gZGF0ZSAtIGVuc3VyZSBubyB0aW1lIGNvbXBvbmVudHMgYXJlIHNldC4gKi9cblx0X2dldE1pbk1heERhdGU6IGZ1bmN0aW9uKCBpbnN0LCBtaW5NYXggKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2RldGVybWluZURhdGUoIGluc3QsIHRoaXMuX2dldCggaW5zdCwgbWluTWF4ICsgXCJEYXRlXCIgKSwgbnVsbCApO1xuXHR9LFxuXG5cdC8qIEZpbmQgdGhlIG51bWJlciBvZiBkYXlzIGluIGEgZ2l2ZW4gbW9udGguICovXG5cdF9nZXREYXlzSW5Nb250aDogZnVuY3Rpb24oIHllYXIsIG1vbnRoICkge1xuXHRcdHJldHVybiAzMiAtIHRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KCBuZXcgRGF0ZSggeWVhciwgbW9udGgsIDMyICkgKS5nZXREYXRlKCk7XG5cdH0sXG5cblx0LyogRmluZCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBmaXJzdCBvZiBhIG1vbnRoLiAqL1xuXHRfZ2V0Rmlyc3REYXlPZk1vbnRoOiBmdW5jdGlvbiggeWVhciwgbW9udGggKSB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKCB5ZWFyLCBtb250aCwgMSApLmdldERheSgpO1xuXHR9LFxuXG5cdC8qIERldGVybWluZXMgaWYgd2Ugc2hvdWxkIGFsbG93IGEgXCJuZXh0L3ByZXZcIiBtb250aCBkaXNwbGF5IGNoYW5nZS4gKi9cblx0X2NhbkFkanVzdE1vbnRoOiBmdW5jdGlvbiggaW5zdCwgb2Zmc2V0LCBjdXJZZWFyLCBjdXJNb250aCApIHtcblx0XHR2YXIgbnVtTW9udGhzID0gdGhpcy5fZ2V0TnVtYmVyT2ZNb250aHMoIGluc3QgKSxcblx0XHRcdGRhdGUgPSB0aGlzLl9kYXlsaWdodFNhdmluZ0FkanVzdCggbmV3IERhdGUoIGN1clllYXIsXG5cdFx0XHRjdXJNb250aCArICggb2Zmc2V0IDwgMCA/IG9mZnNldCA6IG51bU1vbnRoc1sgMCBdICogbnVtTW9udGhzWyAxIF0gKSwgMSApICk7XG5cblx0XHRpZiAoIG9mZnNldCA8IDAgKSB7XG5cdFx0XHRkYXRlLnNldERhdGUoIHRoaXMuX2dldERheXNJbk1vbnRoKCBkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSApICk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9pc0luUmFuZ2UoIGluc3QsIGRhdGUgKTtcblx0fSxcblxuXHQvKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgYWNjZXB0ZWQgcmFuZ2U/ICovXG5cdF9pc0luUmFuZ2U6IGZ1bmN0aW9uKCBpbnN0LCBkYXRlICkge1xuXHRcdHZhciB5ZWFyU3BsaXQsIGN1cnJlbnRZZWFyLFxuXHRcdFx0bWluRGF0ZSA9IHRoaXMuX2dldE1pbk1heERhdGUoIGluc3QsIFwibWluXCIgKSxcblx0XHRcdG1heERhdGUgPSB0aGlzLl9nZXRNaW5NYXhEYXRlKCBpbnN0LCBcIm1heFwiICksXG5cdFx0XHRtaW5ZZWFyID0gbnVsbCxcblx0XHRcdG1heFllYXIgPSBudWxsLFxuXHRcdFx0eWVhcnMgPSB0aGlzLl9nZXQoIGluc3QsIFwieWVhclJhbmdlXCIgKTtcblx0XHRcdGlmICggeWVhcnMgKSB7XG5cdFx0XHRcdHllYXJTcGxpdCA9IHllYXJzLnNwbGl0KCBcIjpcIiApO1xuXHRcdFx0XHRjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblx0XHRcdFx0bWluWWVhciA9IHBhcnNlSW50KCB5ZWFyU3BsaXRbIDAgXSwgMTAgKTtcblx0XHRcdFx0bWF4WWVhciA9IHBhcnNlSW50KCB5ZWFyU3BsaXRbIDEgXSwgMTAgKTtcblx0XHRcdFx0aWYgKCB5ZWFyU3BsaXRbIDAgXS5tYXRjaCggL1srXFwtXS4qLyApICkge1xuXHRcdFx0XHRcdG1pblllYXIgKz0gY3VycmVudFllYXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCB5ZWFyU3BsaXRbIDEgXS5tYXRjaCggL1srXFwtXS4qLyApICkge1xuXHRcdFx0XHRcdG1heFllYXIgKz0gY3VycmVudFllYXI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdHJldHVybiAoICggIW1pbkRhdGUgfHwgZGF0ZS5nZXRUaW1lKCkgPj0gbWluRGF0ZS5nZXRUaW1lKCkgKSAmJlxuXHRcdFx0KCAhbWF4RGF0ZSB8fCBkYXRlLmdldFRpbWUoKSA8PSBtYXhEYXRlLmdldFRpbWUoKSApICYmXG5cdFx0XHQoICFtaW5ZZWFyIHx8IGRhdGUuZ2V0RnVsbFllYXIoKSA+PSBtaW5ZZWFyICkgJiZcblx0XHRcdCggIW1heFllYXIgfHwgZGF0ZS5nZXRGdWxsWWVhcigpIDw9IG1heFllYXIgKSApO1xuXHR9LFxuXG5cdC8qIFByb3ZpZGUgdGhlIGNvbmZpZ3VyYXRpb24gc2V0dGluZ3MgZm9yIGZvcm1hdHRpbmcvcGFyc2luZy4gKi9cblx0X2dldEZvcm1hdENvbmZpZzogZnVuY3Rpb24oIGluc3QgKSB7XG5cdFx0dmFyIHNob3J0WWVhckN1dG9mZiA9IHRoaXMuX2dldCggaW5zdCwgXCJzaG9ydFllYXJDdXRvZmZcIiApO1xuXHRcdHNob3J0WWVhckN1dG9mZiA9ICggdHlwZW9mIHNob3J0WWVhckN1dG9mZiAhPT0gXCJzdHJpbmdcIiA/IHNob3J0WWVhckN1dG9mZiA6XG5cdFx0XHRuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgJSAxMDAgKyBwYXJzZUludCggc2hvcnRZZWFyQ3V0b2ZmLCAxMCApICk7XG5cdFx0cmV0dXJuIHsgc2hvcnRZZWFyQ3V0b2ZmOiBzaG9ydFllYXJDdXRvZmYsXG5cdFx0XHRkYXlOYW1lc1Nob3J0OiB0aGlzLl9nZXQoIGluc3QsIFwiZGF5TmFtZXNTaG9ydFwiICksIGRheU5hbWVzOiB0aGlzLl9nZXQoIGluc3QsIFwiZGF5TmFtZXNcIiApLFxuXHRcdFx0bW9udGhOYW1lc1Nob3J0OiB0aGlzLl9nZXQoIGluc3QsIFwibW9udGhOYW1lc1Nob3J0XCIgKSwgbW9udGhOYW1lczogdGhpcy5fZ2V0KCBpbnN0LCBcIm1vbnRoTmFtZXNcIiApIH07XG5cdH0sXG5cblx0LyogRm9ybWF0IHRoZSBnaXZlbiBkYXRlIGZvciBkaXNwbGF5LiAqL1xuXHRfZm9ybWF0RGF0ZTogZnVuY3Rpb24oIGluc3QsIGRheSwgbW9udGgsIHllYXIgKSB7XG5cdFx0aWYgKCAhZGF5ICkge1xuXHRcdFx0aW5zdC5jdXJyZW50RGF5ID0gaW5zdC5zZWxlY3RlZERheTtcblx0XHRcdGluc3QuY3VycmVudE1vbnRoID0gaW5zdC5zZWxlY3RlZE1vbnRoO1xuXHRcdFx0aW5zdC5jdXJyZW50WWVhciA9IGluc3Quc2VsZWN0ZWRZZWFyO1xuXHRcdH1cblx0XHR2YXIgZGF0ZSA9ICggZGF5ID8gKCB0eXBlb2YgZGF5ID09PSBcIm9iamVjdFwiID8gZGF5IDpcblx0XHRcdHRoaXMuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KCBuZXcgRGF0ZSggeWVhciwgbW9udGgsIGRheSApICkgKSA6XG5cdFx0XHR0aGlzLl9kYXlsaWdodFNhdmluZ0FkanVzdCggbmV3IERhdGUoIGluc3QuY3VycmVudFllYXIsIGluc3QuY3VycmVudE1vbnRoLCBpbnN0LmN1cnJlbnREYXkgKSApICk7XG5cdFx0cmV0dXJuIHRoaXMuZm9ybWF0RGF0ZSggdGhpcy5fZ2V0KCBpbnN0LCBcImRhdGVGb3JtYXRcIiApLCBkYXRlLCB0aGlzLl9nZXRGb3JtYXRDb25maWcoIGluc3QgKSApO1xuXHR9XG59ICk7XG5cbi8qXG4gKiBCaW5kIGhvdmVyIGV2ZW50cyBmb3IgZGF0ZXBpY2tlciBlbGVtZW50cy5cbiAqIERvbmUgdmlhIGRlbGVnYXRlIHNvIHRoZSBiaW5kaW5nIG9ubHkgb2NjdXJzIG9uY2UgaW4gdGhlIGxpZmV0aW1lIG9mIHRoZSBwYXJlbnQgZGl2LlxuICogR2xvYmFsIGRhdGVwaWNrZXJfaW5zdEFjdGl2ZSwgc2V0IGJ5IF91cGRhdGVEYXRlcGlja2VyIGFsbG93cyB0aGUgaGFuZGxlcnMgdG8gZmluZCB0aGVpciB3YXkgYmFjayB0byB0aGUgYWN0aXZlIHBpY2tlci5cbiAqL1xuZnVuY3Rpb24gZGF0ZXBpY2tlcl9iaW5kSG92ZXIoIGRwRGl2ICkge1xuXHR2YXIgc2VsZWN0b3IgPSBcImJ1dHRvbiwgLnVpLWRhdGVwaWNrZXItcHJldiwgLnVpLWRhdGVwaWNrZXItbmV4dCwgLnVpLWRhdGVwaWNrZXItY2FsZW5kYXIgdGQgYVwiO1xuXHRyZXR1cm4gZHBEaXYub24oIFwibW91c2VvdXRcIiwgc2VsZWN0b3IsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JCggdGhpcyApLnJlbW92ZUNsYXNzKCBcInVpLXN0YXRlLWhvdmVyXCIgKTtcblx0XHRcdGlmICggdGhpcy5jbGFzc05hbWUuaW5kZXhPZiggXCJ1aS1kYXRlcGlja2VyLXByZXZcIiApICE9PSAtMSApIHtcblx0XHRcdFx0JCggdGhpcyApLnJlbW92ZUNsYXNzKCBcInVpLWRhdGVwaWNrZXItcHJldi1ob3ZlclwiICk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIHRoaXMuY2xhc3NOYW1lLmluZGV4T2YoIFwidWktZGF0ZXBpY2tlci1uZXh0XCIgKSAhPT0gLTEgKSB7XG5cdFx0XHRcdCQoIHRoaXMgKS5yZW1vdmVDbGFzcyggXCJ1aS1kYXRlcGlja2VyLW5leHQtaG92ZXJcIiApO1xuXHRcdFx0fVxuXHRcdH0gKVxuXHRcdC5vbiggXCJtb3VzZW92ZXJcIiwgc2VsZWN0b3IsIGRhdGVwaWNrZXJfaGFuZGxlTW91c2VvdmVyICk7XG59XG5cbmZ1bmN0aW9uIGRhdGVwaWNrZXJfaGFuZGxlTW91c2VvdmVyKCkge1xuXHRpZiAoICEkLmRhdGVwaWNrZXIuX2lzRGlzYWJsZWREYXRlcGlja2VyKCBkYXRlcGlja2VyX2luc3RBY3RpdmUuaW5saW5lID8gZGF0ZXBpY2tlcl9pbnN0QWN0aXZlLmRwRGl2LnBhcmVudCgpWyAwIF0gOiBkYXRlcGlja2VyX2luc3RBY3RpdmUuaW5wdXRbIDAgXSApICkge1xuXHRcdCQoIHRoaXMgKS5wYXJlbnRzKCBcIi51aS1kYXRlcGlja2VyLWNhbGVuZGFyXCIgKS5maW5kKCBcImFcIiApLnJlbW92ZUNsYXNzKCBcInVpLXN0YXRlLWhvdmVyXCIgKTtcblx0XHQkKCB0aGlzICkuYWRkQ2xhc3MoIFwidWktc3RhdGUtaG92ZXJcIiApO1xuXHRcdGlmICggdGhpcy5jbGFzc05hbWUuaW5kZXhPZiggXCJ1aS1kYXRlcGlja2VyLXByZXZcIiApICE9PSAtMSApIHtcblx0XHRcdCQoIHRoaXMgKS5hZGRDbGFzcyggXCJ1aS1kYXRlcGlja2VyLXByZXYtaG92ZXJcIiApO1xuXHRcdH1cblx0XHRpZiAoIHRoaXMuY2xhc3NOYW1lLmluZGV4T2YoIFwidWktZGF0ZXBpY2tlci1uZXh0XCIgKSAhPT0gLTEgKSB7XG5cdFx0XHQkKCB0aGlzICkuYWRkQ2xhc3MoIFwidWktZGF0ZXBpY2tlci1uZXh0LWhvdmVyXCIgKTtcblx0XHR9XG5cdH1cbn1cblxuLyogalF1ZXJ5IGV4dGVuZCBub3cgaWdub3JlcyBudWxscyEgKi9cbmZ1bmN0aW9uIGRhdGVwaWNrZXJfZXh0ZW5kUmVtb3ZlKCB0YXJnZXQsIHByb3BzICkge1xuXHQkLmV4dGVuZCggdGFyZ2V0LCBwcm9wcyApO1xuXHRmb3IgKCB2YXIgbmFtZSBpbiBwcm9wcyApIHtcblx0XHRpZiAoIHByb3BzWyBuYW1lIF0gPT0gbnVsbCApIHtcblx0XHRcdHRhcmdldFsgbmFtZSBdID0gcHJvcHNbIG5hbWUgXTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRhcmdldDtcbn1cblxuLyogSW52b2tlIHRoZSBkYXRlcGlja2VyIGZ1bmN0aW9uYWxpdHkuXG4gICBAcGFyYW0gIG9wdGlvbnMgIHN0cmluZyAtIGEgY29tbWFuZCwgb3B0aW9uYWxseSBmb2xsb3dlZCBieSBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgb3Jcblx0XHRcdFx0XHRPYmplY3QgLSBzZXR0aW5ncyBmb3IgYXR0YWNoaW5nIG5ldyBkYXRlcGlja2VyIGZ1bmN0aW9uYWxpdHlcbiAgIEByZXR1cm4gIGpRdWVyeSBvYmplY3QgKi9cbiQuZm4uZGF0ZXBpY2tlciA9IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXG5cdC8qIFZlcmlmeSBhbiBlbXB0eSBjb2xsZWN0aW9uIHdhc24ndCBwYXNzZWQgLSBGaXhlcyAjNjk3NiAqL1xuXHRpZiAoICF0aGlzLmxlbmd0aCApIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qIEluaXRpYWxpc2UgdGhlIGRhdGUgcGlja2VyLiAqL1xuXHRpZiAoICEkLmRhdGVwaWNrZXIuaW5pdGlhbGl6ZWQgKSB7XG5cdFx0JCggZG9jdW1lbnQgKS5vbiggXCJtb3VzZWRvd25cIiwgJC5kYXRlcGlja2VyLl9jaGVja0V4dGVybmFsQ2xpY2sgKTtcblx0XHQkLmRhdGVwaWNrZXIuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHR9XG5cblx0LyogQXBwZW5kIGRhdGVwaWNrZXIgbWFpbiBjb250YWluZXIgdG8gYm9keSBpZiBub3QgZXhpc3QuICovXG5cdGlmICggJCggXCIjXCIgKyAkLmRhdGVwaWNrZXIuX21haW5EaXZJZCApLmxlbmd0aCA9PT0gMCApIHtcblx0XHQkKCBcImJvZHlcIiApLmFwcGVuZCggJC5kYXRlcGlja2VyLmRwRGl2ICk7XG5cdH1cblxuXHR2YXIgb3RoZXJBcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApO1xuXHRpZiAoIHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiICYmICggb3B0aW9ucyA9PT0gXCJpc0Rpc2FibGVkXCIgfHwgb3B0aW9ucyA9PT0gXCJnZXREYXRlXCIgfHwgb3B0aW9ucyA9PT0gXCJ3aWRnZXRcIiApICkge1xuXHRcdHJldHVybiAkLmRhdGVwaWNrZXJbIFwiX1wiICsgb3B0aW9ucyArIFwiRGF0ZXBpY2tlclwiIF0uXG5cdFx0XHRhcHBseSggJC5kYXRlcGlja2VyLCBbIHRoaXNbIDAgXSBdLmNvbmNhdCggb3RoZXJBcmdzICkgKTtcblx0fVxuXHRpZiAoIG9wdGlvbnMgPT09IFwib3B0aW9uXCIgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgYXJndW1lbnRzWyAxIF0gPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0cmV0dXJuICQuZGF0ZXBpY2tlclsgXCJfXCIgKyBvcHRpb25zICsgXCJEYXRlcGlja2VyXCIgXS5cblx0XHRcdGFwcGx5KCAkLmRhdGVwaWNrZXIsIFsgdGhpc1sgMCBdIF0uY29uY2F0KCBvdGhlckFyZ3MgKSApO1xuXHR9XG5cdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdGlmICggdHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHQkLmRhdGVwaWNrZXJbIFwiX1wiICsgb3B0aW9ucyArIFwiRGF0ZXBpY2tlclwiIF1cblx0XHRcdFx0LmFwcGx5KCAkLmRhdGVwaWNrZXIsIFsgdGhpcyBdLmNvbmNhdCggb3RoZXJBcmdzICkgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JC5kYXRlcGlja2VyLl9hdHRhY2hEYXRlcGlja2VyKCB0aGlzLCBvcHRpb25zICk7XG5cdFx0fVxuXHR9ICk7XG59O1xuXG4kLmRhdGVwaWNrZXIgPSBuZXcgRGF0ZXBpY2tlcigpOyAvLyBzaW5nbGV0b24gaW5zdGFuY2VcbiQuZGF0ZXBpY2tlci5pbml0aWFsaXplZCA9IGZhbHNlO1xuJC5kYXRlcGlja2VyLnV1aWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiQuZGF0ZXBpY2tlci52ZXJzaW9uID0gXCIxLjE0LjFcIjtcblxucmV0dXJuICQuZGF0ZXBpY2tlcjtcblxufSApO1xuIiwgImltcG9ydCBcImpxdWVyeS11aS91aS9rZXljb2RlLmpzXCI7XG5pbXBvcnQgXCJqcXVlcnktdWkvdWkvd2lkZ2V0cy9kYXRlcGlja2VyLmpzXCI7XG5pbXBvcnQgXCJqcXVlcnktdWktdGltZXBpY2tlci1hZGRvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi9zcmMvY2FsZW5kYXIvMi1qcXVlcnkudWkucGZleHRlbnNpb25zLmpzXCI7XG5cbmltcG9ydCB7IEJhc2VXaWRnZXQgfSBmcm9tIFwiLi4vY29yZS9jb3JlLndpZGdldC5qc1wiO1xuXG4vKipcbiAqIF9fUHJpbWVGYWNlcyBDYWxlbmRhciBXaWRnZXRfX1xuICpcbiAqIF9fRGVwcmVjYXRlZF9fOiBVc2UgdGhlIHtAbGluayBEYXRlUGlja2VyfHA6ZGF0ZVBpY2tlcn0gY29tcG9uZW50IGluc3RlYWQuXG4gKlxuICogQ2FsZW5kYXIgaXMgYW4gaW5wdXQgY29tcG9uZW50IHVzZWQgdG8gc2VsZWN0IGEgZGF0ZSBmZWF0dXJpbmcgZGlzcGxheSBtb2RlcywgcGFnaW5nLCBsb2NhbGl6YXRpb24sIGFqYXggc2VsZWN0aW9uXG4gKiBhbmQgbW9yZS5cbiAqXG4gKiBUbyBpbnRlcmFjdCB3aXRoIHRoZSBjYWxlbmRhciwgdXNlIHRoZSBgdGltZXBpY2tlcmAgb3IgYGRhdGV0aW1lcGlja2VyYCBKUXVlcnkgcGx1Z2luLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBQRihcImNhbGVuZGFyV2lkZ2V0XCIpLmpxRWwuZGF0ZXRpbWVwaWNrZXIoXCJnZXREYXRlXCIpO1xuICogUEYoXCJjYWxlbmRhcldpZGdldFwiKS5qcUVsLmRhdGV0aW1lcGlja2VyKFwic2V0RGF0ZVwiLCBuZXcgRGF0ZSgpKTtcbiAqIGBgYFxuICpcbiAqIEB0eXBlZGVmIHtcImZvY3VzXCIgfCBcImJ1dHRvblwiIHwgXCJib3RoXCJ9IFByaW1lRmFjZXMud2lkZ2V0LkNhbGVuZGFyLlNob3dPblR5cGUgQ2xpZW50LXNpZGUgZXZlbnQgdG8gZGlzcGxheSB0aGVcbiAqIGNhbGVuZGFyLiBgZm9jdXNgIGlzIHdoZW4gdGhlIGlucHV0IGZpZWxkIHJlY2VpdmVzIGZvY3VzLiBgcG9wdXBgIGlzIHdoZW4gdGhlIHBvcHVwIGJ1dHRvbiBpcyBjbGlja2VkLiBgYm90aGAgaXNcbiAqIGJvdGggYGZvY3VzYCBhbmQgYHBvcHVwYC5cbiAqXG4gKiBAdHlwZWRlZiBQcmltZUZhY2VzLndpZGdldC5DYWxlbmRhci5QcmVTaG93Q2FsbGJhY2sgQ2FsbGJhY2sgaW52b2tlZCBiZWZvcmUgdGhlIGNhbGVuZGFyIGlzIG9wZW5lZC5cbiAqIEB0aGlzIHtQcmltZUZhY2VzLndpZGdldC5DYWxlbmRhcn0gUHJpbWVGYWNlcy53aWRnZXQuQ2FsZW5kYXIuUHJlU2hvd0NhbGxiYWNrXG4gKiBAcGFyYW0ge0pRdWVyeX0gUHJpbWVGYWNlcy53aWRnZXQuQ2FsZW5kYXIuUHJlU2hvd0NhbGxiYWNrLmlucHV0IElucHV0IGVsZW1lbnQgZm9yIHRoZSBkYXRlLlxuICogQHBhcmFtIHtKUXVlcnlVSVRpbWVwaWNrZXJBZGRvbi5UaW1lcGlja2VyfSBQcmltZUZhY2VzLndpZGdldC5DYWxlbmRhci5QcmVTaG93Q2FsbGJhY2suaW5zdGFuY2UgQ3VycmVudCB0aW1lIHBpY2tlclxuICogaW5zdGFuY2UgY29udHJvbGxpbmcgdGhlIGNhbGVuZGFyLiBgZmFsc2VgIHRvIHByZXZlbnQgdGhlIHRpbWUgcGlja2VyIGZyb20gYmVpbmcgc2hvd24uXG4gKiBAcmV0dXJuIHtQYXJ0aWFsPEpRdWVyeVVJLkRhdGVwaWNrZXJPcHRpb25zPiB8IGJvb2xlYW4gfCB1bmRlZmluZWR9IFByaW1lRmFjZXMud2lkZ2V0LkNhbGVuZGFyLlByZVNob3dDYWxsYmFjayBBIG5ld1xuICogc2V0IG9mIG9wdGlvbnMgZm9yIHRoZSB0aW1lIHBpY2tlci5cbiAqXG4gKiBAdHlwZWRlZiBQcmltZUZhY2VzLndpZGdldC5DYWxlbmRhci5QcmVTaG93RGF5Q2FsbGJhY2sgQ2FsbGJhY2sgaW52b2tlZCBiZWZvcmUgYSBkYXkgaXMgc2hvd24uXG4gKiBAdGhpcyB7V2luZG93fSBQcmltZUZhY2VzLndpZGdldC5DYWxlbmRhci5QcmVTaG93RGF5Q2FsbGJhY2tcbiAqIEBwYXJhbSB7RGF0ZX0gUHJpbWVGYWNlcy53aWRnZXQuQ2FsZW5kYXIuUHJlU2hvd0RheUNhbGxiYWNrLmRhdGUgVGhlIGN1cnJlbnQgZGF0ZSBvZiB0aGUgY2FsZW5kYXIuXG4gKiBAcmV0dXJuIHtbYm9vbGVhbiwgc3RyaW5nXSB8IFtib29sZWFuLCBzdHJpbmcsIHN0cmluZ119IFByaW1lRmFjZXMud2lkZ2V0LkNhbGVuZGFyLlByZVNob3dEYXlDYWxsYmFjayBUd28gdG8gdGhyZWVcbiAqIHZhbHVlcyBpbmRpY2F0aW5nOlxuICogMS4gdHJ1ZS9mYWxzZSBpbmRpY2F0aW5nIHdoZXRoZXIgb3Igbm90IHRoaXMgZGF0ZSBpcyBzZWxlY3RhYmxlXG4gKiAxLiBhIENTUyBjbGFzcyBuYW1lIHRvIGFkZCB0byB0aGUgZGF0ZSdzIGNlbGwgb3IgXCJcIiBmb3IgdGhlIGRlZmF1bHQgcHJlc2VudGF0aW9uXG4gKiAxLiBhbiBvcHRpb25hbCBwb3B1cCB0b29sdGlwIGZvciB0aGlzIGRhdGVcbiAqXG4gKiBAcHJvcCB7SlF1ZXJ5fSBpbnB1dCBET00gZWxlbWVudCBvZiB0aGUgcGxhaW4tdGV4dCBpbnB1dCBmaWVsZCBmb3IgdGhlIGRhdGUgYW5kL29yIHRpbWUuXG4gKiBAcHJvcCB7SlF1ZXJ5fSBqcUVsIFRoZSBET00gZWxlbWVudCBvbiB3aGljaCB0aGUgSlF1ZXJ5IHBsdWdpbiBgZGF0ZXBpY2tlcmAgb3IgYGRhdGV0aW1lcGlja2VyYCB3YXMgaW5pdGlhbGl6ZWQuIFlvdVxuICogY2FuIHVzZSB0aGlzIGVsZW1lbnQgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgZGF0ZSBwaWNrZXIuXG4gKiBAcHJvcCB7Ym9vbGVhbn0gW3JlYWRvbmx5XSBXaGV0aGVyIHRoZSBjYWxlbmRhciBpcyByZWFkLW9ubHkgYW5kIGNhbm5vdCBiZSBlZGl0ZWQuXG4gKiBAcHJvcCB7Ym9vbGVhbn0gcmVmb2N1c0lucHV0IFdoZXRoZXIgdGhlIGlucHV0IG5lZWRzIHRvIGJlIHJlZm9jdXNlZC5cbiAqXG4gKiBAaW50ZXJmYWNlIHtQcmltZUZhY2VzLndpZGdldC5DYWxlbmRhckNmZ30gY2ZnIFRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUge0BsaW5rICBDYWxlbmRhcnwgQ2FsZW5kYXIgd2lkZ2V0fS5cbiAqIFlvdSBjYW4gYWNjZXNzIHRoaXMgY29uZmlndXJhdGlvbiB2aWEge0BsaW5rIFByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXQuY2ZnfEJhc2VXaWRnZXQuY2ZnfS4gUGxlYXNlIG5vdGUgdGhhdCB0aGlzXG4gKiBjb25maWd1cmF0aW9uIGlzIHVzdWFsbHkgbWVhbnQgdG8gYmUgcmVhZC1vbmx5IGFuZCBzaG91bGQgbm90IGJlIG1vZGlmaWVkLlxuICogQGV4dGVuZHMge1ByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXRDZmd9IGNmZ1xuICpcbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy5idXR0b25UYWJpbmRleCBQb3NpdGlvbiBvZiB0aGUgYnV0dG9uIGluIHRoZSB0YWJiaW5nIG9yZGVyLlxuICogQHByb3Age0pRdWVyeVVJVGltZXBpY2tlckFkZG9uLkNvbnRyb2xUeXBlIHwgXCJjdXN0b21cIn0gY2ZnLmNvbnRyb2xUeXBlIEhvdyB0aGUgdXNlciBzZWxlY3RzIGEgdGltZSAoaG91ciAvIG1pbnV0ZSAvXG4gKiBzZWNvbmQpLiBXaGVuIHNldCB0byBgY3VzdG9tYCwgdGhlIGB0aW1lQ29udHJvbE9iamVjdGAgbXVzdCBiZSBzZXQuXG4gKiBAcHJvcCB7c3RyaW5nfSBjZmcuZGF0ZUZvcm1hdCBEYXRlIGZvcm1hdCBwYXR0ZXJuIGZvciBsb2NhbGl6YXRpb25cbiAqIEBwcm9wIHtib29sZWFufSBjZmcuZGlzYWJsZWQgRGlzYWJsZXMgdGhlIGNhbGVuZGFyIHdoZW4gc2V0IHRvIHRydWUuXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2ZnLmRpc2FibGVkV2Vla2VuZHMgRGlzYWJsZXMgd2Vla2VuZCBjb2x1bW5zLlxuICogQHByb3Age3N0cmluZ30gY2ZnLmR1cmF0aW9uIER1cmF0aW9uIG9mIHRoZSBlZmZlY3QuXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2ZnLmZvY3VzT25TZWxlY3QgSWYgZW5hYmxlZCwgdGhlIGlucHV0IGlzIGZvY3VzZWQgYWdhaW4gYWZ0ZXIgc2VsZWN0aW5nIGEgZGF0ZS4gRGVmYXVsdCBpcyBmYWxzZS5cbiAqIEBwcm9wIHtudW1iZXJ9IGNmZy5ob3VyIERlZmF1bHQgZm9yIGhvdXIgc2VsZWN0aW9uLCBpZiBubyBkYXRlIGlzIGdpdmVuLiBEZWZhdWx0IGlzIDAuXG4gKiBAcHJvcCB7bnVtYmVyfSBjZmcuaG91ck1heCBNYXhpbXVtIGJvdW5kYXJ5IGZvciBob3VyIHNlbGVjdGlvbi5cbiAqIEBwcm9wIHtudW1iZXJ9IGNmZy5ob3VyTWluIE1pbmltdW0gYm91bmRhcnkgZm9yIGhvdXIgc2VsZWN0aW9uLlxuICogQHByb3Age3N0cmluZ30gY2ZnLmxvY2FsZSBMb2NhbGUgdG8gYmUgdXNlZCBmb3IgbGFiZWxzIGFuZCBjb252ZXJzaW9uLlxuICogQHByb3Age3N0cmluZ30gY2ZnLm1hc2sgQXBwbGllcyBhIG1hc2sgdXNpbmcgdGhlIHBhdHRlcm4uXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2ZnLm1hc2tBdXRvQ2xlYXIgQ2xlYXJzIHRoZSBmaWVsZCBvbiBibHVyIHdoZW4gaW5jb21wbGV0ZSBpbnB1dCBpcyBlbnRlcmVkXG4gKiBAcHJvcCB7c3RyaW5nfSBjZmcubWFza1Nsb3RDaGFyIFBsYWNlaG9sZGVyIGluIG1hc2sgdGVtcGxhdGUuXG4gKiBAcHJvcCB7c3RyaW5nfSBjZmcubWF4RGF0ZSBTZXRzIGNhbGVuZGFyJ3MgbWF4aW11bSB2aXNpYmxlIGRhdGU7IEFsc28gdXNlZCBmb3IgdmFsaWRhdGlvbiBvbiB0aGUgc2VydmVyLXNpZGUuXG4gKiBAcHJvcCB7bnVtYmVyfSBjZmcubWlsbGlzZWMgRGVmYXVsdCBmb3IgbWlsbGlzZWNvbmQgc2VsZWN0aW9uLCBpZiBubyBkYXRlIGlzIGdpdmVuLiBEZWZhdWx0IGlzIDAuXG4gKiBAcHJvcCB7c3RyaW5nfSBjZmcubWluRGF0ZSBTZXRzIGNhbGVuZGFyJ3MgbWluaW11bSB2aXNpYmxlIGRhdGU7IEFsc28gdXNlZCBmb3IgdmFsaWRhdGlvbiBvbiB0aGUgc2VydmVyLXNpZGUuXG4gKiBAcHJvcCB7bnVtYmVyfSBjZmcubWludXRlIERlZmF1bHQgZm9yIG1pbnV0ZSBzZWxlY3Rpb24sIGlmIG5vIGRhdGUgaXMgZ2l2ZW4uIERlZmF1bHQgaXMgMC5cbiAqIEBwcm9wIHtudW1iZXJ9IGNmZy5taW51dGVNYXggTWF4aW11bSBib3VuZGFyeSBmb3IgaG91ciBzZWxlY3Rpb24uXG4gKiBAcHJvcCB7bnVtYmVyfSBjZmcubWludXRlTWluIE1pbmltdW0gYm91bmRhcnkgZm9yIG1pbnV0ZSBzZWxlY3Rpb24uXG4gKiBAcHJvcCB7bnVtYmVyfSBjZmcubnVtYmVyT2ZNb250aHMgRW5hYmxlcyBtdWx0aXBsZSBwYWdlIHJlbmRlcmluZy5cbiAqIEBwcm9wIHtib29sZWFufSBjZmcub25lTGluZSBUcnkgdG8gc2hvdyB0aGUgdGltZSBkcm9wZG93bnMgYWxsIG9uIG9uZSBsaW5lLiBUaGlzIHNob3VsZCBiZSB1c2VkIHdpdGggdGhlXG4gKiBgY29udHJvbFR5cGVgIHNldCB0byBgc2VsZWN0YC5cbiAqIEBwcm9wIHtib29sZWFufSBjZmcucG9wdXAgYHRydWVgIGlmIGBtb2RlYCBpcyBzZXQgdG8gYHBvcHVwYC5cbiAqIEBwcm9wIHtQcmltZUZhY2VzLndpZGdldC5DYWxlbmRhci5QcmVTaG93Q2FsbGJhY2t9IGNmZy5wcmVTaG93IENhbGxiYWNrIGludm9rZWQgYmVmb3JlIHRoZSBjYWxlbmRhciBpcyBvcGVuZWQuXG4gKiBAcHJvcCB7UHJpbWVGYWNlcy53aWRnZXQuQ2FsZW5kYXIuUHJlU2hvd0RheUNhbGxiYWNrfSBjZmcucHJlU2hvd0RheSBDYWxsYmFjayBpbnZva2VkIGJlZm9yZSBhIGRheSBpcyBzaG93bi5cbiAqIEBwcm9wIHtib29sZWFufSBjZmcucmVhZG9ubHkgTWFrZXMgdGhlIGNhbGVuZGFyIHJlYWRvbmx5IHdoZW4gc2V0IHRvIHRydWUuXG4gKiBAcHJvcCB7bnVtYmVyfSBjZmcuc2Vjb25kIERlZmF1bHQgZm9yIHNlY29uZCBzZWxlY3Rpb24sIGlmIG5vIGRhdGUgaXMgZ2l2ZW4uIERlZmF1bHQgaXMgMC5cbiAqIEBwcm9wIHtudW1iZXJ9IGNmZy5zZWNvbmRNYXggTWF4aW11bSBib3VuZGFyeSBmb3Igc2Vjb25kIHNlbGVjdGlvbi5cbiAqIEBwcm9wIHtudW1iZXJ9IGNmZy5zZWNvbmRNaW4gTWluaW11bSBib3VuZGFyeSBmb3Igc2Vjb25kIHNlbGVjdGlvbi5cbiAqIEBwcm9wIHtib29sZWFufSBjZmcuc2VsZWN0T3RoZXJNb250aHMgRW5hYmxlcyBzZWxlY3Rpb24gb2YgZGF5cyBiZWxvbmdpbmcgdG8gb3RoZXIgbW9udGhzLlxuICogQHByb3Age3N0cmluZ30gY2ZnLnNob3dBbmltIEVmZmVjdCB0byB1c2Ugd2hlbiBkaXNwbGF5aW5nIGFuZCBzaG93aW5nIHRoZSBwb3B1cCBjYWxlbmRhci5cbiAqIEBwcm9wIHtib29sZWFufSBjZmcuc2hvd0J1dHRvblBhbmVsIFZpc2liaWxpdHkgb2YgYnV0dG9uIHBhbmVsIGNvbnRhaW5pbmcgdG9kYXkgYW5kIGRvbmUgYnV0dG9ucy5cbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy5zaG93SG91ciBXaGV0aGVyIHRvIHNob3cgdGhlIGhvdXIgY29udHJvbC5cbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy5zaG93TWlsbGlzZWMgV2hldGhlciB0byBzaG93IHRoZSBtaWxsaXNlYyBjb250cm9sXG4gKiBAcHJvcCB7c3RyaW5nfSBjZmcuc2hvd01pbnV0ZSBXaGV0aGVyIHRvIHNob3cgdGhlIG1pbnV0ZSBjb250cm9sLlxuICogQHByb3Age1ByaW1lRmFjZXMud2lkZ2V0LkNhbGVuZGFyLlNob3dPblR5cGV9IGNmZy5zaG93T24gQ2xpZW50IHNpZGUgZXZlbnQgdGhhdCBkaXNwbGF5cyB0aGUgcG9wdXAgY2FsZW5kYXIuXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2ZnLnNob3dPdGhlck1vbnRocyBEaXNwbGF5cyBkYXlzIGJlbG9uZ2luZyB0byBvdGhlciBtb250aHMuXG4gKiBAcHJvcCB7c3RyaW5nfSBjZmcuc2hvd1NlY29uZCBXaGV0aGVyIHRvIHNob3cgdGhlIHNlY29uZCBjb250cm9sLlxuICogQHByb3Age2Jvb2xlYW59IGNmZy5zaG93VG9kYXlCdXR0b24gV2hldGhlciB0byBzaG93IHRoZSBgQ3VycmVudCBEYXRlYCBidXR0b24gaWYgYHNob3dCdXR0b25QYW5lbGAgaXMgcmVuZGVyZWQuXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2ZnLnNob3dXZWVrIERpc3BsYXlzIHRoZSB3ZWVrIG51bWJlciBuZXh0IHRvIGVhY2ggd2Vlay5cbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy5zdGVwSG91ciBIb3VyIHN0ZXBzLlxuICogQHByb3Age251bWJlcn0gY2ZnLnN0ZXBNaW51dGUgTWludXRlIHN0ZXBzLlxuICogQHByb3Age251bWJlcn0gY2ZnLnN0ZXBTZWNvbmQgU2Vjb25kIHN0ZXBzLlxuICogQHByb3Age0pRdWVyeVVJVGltZXBpY2tlckFkZG9uLkN1c3RvbUNvbnRyb2x9IGNmZy50aW1lQ29udHJvbE9iamVjdCBXaGVuIGBjb250cm9sVHlwZWAgaXMgc2V0IHRvIGBjdXN0b21gLCBhblxuICogb2JqZWN0IGZvciBjcmVhdGluZyBhbmQgaGFuZGxpbmcgY3VzdG9tIGNvbnRyb2xzIGZvciB0aGUgaG91ciAvIG1pbnV0ZSAvIHNlY29uZCBpbnB1dHMuXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2ZnLnRpbWVJbnB1dCBBbGxvd3MgZGlyZWN0IGlucHV0IGluIHRpbWUgZmllbGQuXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2ZnLnRpbWVPbmx5IFNob3dzIG9ubHkgdGltZXBpY2tlciB3aXRob3V0IGRhdGUuXG4gKiBAcHJvcCB7c3RyaW5nfSBjZmcueWVhclJhbmdlIFllYXIgcmFuZ2UgZm9yIHRoZSBuYXZpZ2F0b3IsIGRlZmF1bHQgaXMgYGMtMTA6YysxMGAuXG4gKiBAcHJvcCB7c3RyaW5nfSBjZmcuc2hvcnRZZWFyQ3V0b2ZmIFRoZSBjdXRvZmYgeWVhciBmb3IgZGV0ZXJtaW5pbmcgdGhlIGNlbnR1cnkgZm9yIGEgZGF0ZS4gRGVmYXVsdCBpcyBgKzEwYC5cbiAqL1xuZXhwb3J0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgQmFzZVdpZGdldCB7XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy5QYXJ0aWFsV2lkZ2V0Q2ZnPFRDZmc+fSBjZmdcbiAgICAgKi9cbiAgICBpbml0KGNmZykge1xuICAgICAgICBzdXBlci5pbml0KGNmZyk7XG5cbiAgICAgICAgdGhpcy5pbnB1dCA9ICQodGhpcy5qcUlkICsgJ19pbnB1dCcpO1xuICAgICAgICB0aGlzLmpxRWwgPSB0aGlzLmNmZy5wb3B1cCA/IHRoaXMuaW5wdXQgOiAkKHRoaXMuanFJZCArICdfaW5saW5lJyk7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgLy9pMThuIGFuZCBsN25cbiAgICAgICAgdGhpcy5jb25maWd1cmVMb2NhbGUoKTtcblxuICAgICAgICAvL2V2ZW50c1xuICAgICAgICB0aGlzLmJpbmREYXRlU2VsZWN0TGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5iaW5kVmlld0NoYW5nZUxpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuYmluZENsb3NlTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5hcHBseU1hc2soKTtcblxuICAgICAgICAvL2Rpc2FibGVkIGRhdGVzXG4gICAgICAgIHRoaXMuY2ZnLmJlZm9yZVNob3dEYXkgPSBmdW5jdGlvbihkYXRlKSB7XG4gICAgICAgICAgICBpZigkdGhpcy5jZmcucHJlU2hvd0RheSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAkdGhpcy5jZmcucHJlU2hvd0RheShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoJHRoaXMuY2ZnLmRpc2FibGVkV2Vla2VuZHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJC5kYXRlcGlja2VyLm5vV2Vla2VuZHMoZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3RydWUsJyddO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vU2V0dXAgdGltZXBpY2tlclxuICAgICAgICB2YXIgaGFzVGltZVBpY2tlciA9IHRoaXMuaGFzVGltZVBpY2tlcigpO1xuICAgICAgICBpZihoYXNUaW1lUGlja2VyKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyZVRpbWVQaWNrZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlzIHRvdWNoIHN1cHBvcnQgZW5hYmxlZFxuICAgICAgICB2YXIgdG91Y2hFbmFibGVkID0gUHJpbWVGYWNlcy5lbnYuaXNUb3VjaGFibGUodGhpcy5jZmcpICYmICF0aGlzLmlucHV0LmF0dHIoXCJyZWFkb25seVwiKSAmJiB0aGlzLmNmZy5zaG93T24gJiYgdGhpcy5jZmcuc2hvd09uID09PSAnYnV0dG9uJztcblxuICAgICAgICAvL0NsaWVudCBiZWhhdmlvcnMsIGlucHV0IHNraW5uaW5nIGFuZCB6LWluZGV4XG4gICAgICAgIGlmKHRoaXMuY2ZnLnBvcHVwKSB7XG4gICAgICAgICAgICBQcmltZUZhY2VzLnNraW5JbnB1dCh0aGlzLmpxRWwpO1xuXG4gICAgICAgICAgICBpZih0aGlzLmNmZy5iZWhhdmlvcnMpIHtcbiAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmF0dGFjaEJlaGF2aW9ycyh0aGlzLmpxRWwsIHRoaXMuY2ZnLmJlaGF2aW9ycyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY2ZnLmJlZm9yZVNob3cgPSBmdW5jdGlvbihpbnB1dCwgaW5zdCkge1xuICAgICAgICAgICAgICAgIGlmKCR0aGlzLnJlZm9jdXNJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5yZWZvY3VzSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vICM0MTE5IGRvIG5vdCBwb3B1cCBpZiByZWFkb25seVxuICAgICAgICAgICAgICAgIGlmICgkdGhpcy5jZmcucmVhZG9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vZGlzcGxheSBvbiB0b3BcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcjdWktZGF0ZXBpY2tlci1kaXYnKS5hZGRDbGFzcygndWktaW5wdXQtb3ZlcmxheScpLmNzcygnei1pbmRleCcsIFByaW1lRmFjZXMubmV4dFppbmRleCgpKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJHRoaXMuY2ZnLnNob3dUb2RheUJ1dHRvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoaW5wdXQpLmRhdGVwaWNrZXIoXCJ3aWRnZXRcIikuZmluZChcIi51aS1kYXRlcGlja2VyLWN1cnJlbnRcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuYWxpZ25QYW5lbCgpO1xuICAgICAgICAgICAgICAgIH0sIDUwKTtcblxuICAgICAgICAgICAgICAgIC8vIHRvdWNoIHN1cHBvcnQgLSBwcmV2ZW50cyBrZXlib2FyZCBwb3B1cFxuICAgICAgICAgICAgICAgIGlmKHRvdWNoRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnByb3AoXCJyZWFkb25seVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL3VzZXIgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICB2YXIgcHJlU2hvdyA9ICR0aGlzLmNmZy5wcmVTaG93O1xuICAgICAgICAgICAgICAgIGlmKHByZVNob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICR0aGlzLmNmZy5wcmVTaG93LmNhbGwoJHRoaXMsIGlucHV0LCBpbnN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBQcmltZUZhY2VzLnV0aWxzLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLCAncmVzaXplLicgKyB0aGlzLmlkICsgJ19oaWRlJywgJCgnI3VpLWRhdGVwaWNrZXItZGl2JyksIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICR0aGlzLmhhbmRsZVZpZXdwb3J0Q2hhbmdlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFByaW1lRmFjZXMudXRpbHMucmVnaXN0ZXJTY3JvbGxIYW5kbGVyKHRoaXMsICdzY3JvbGwuJyArIHRoaXMuaWQgKyAnX2hpZGUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5oYW5kbGVWaWV3cG9ydENoYW5nZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0b3VjaCBzdXBwb3J0IC0gcHJldmVudHMga2V5Ym9hcmQgcG9wdXBcbiAgICAgICAgaWYgKHRvdWNoRW5hYmxlZCkge1xuICAgICAgICAgICAgdmFyIGZpcmVDbG9zZUV2ZW50ID0gdGhpcy5jZmcub25DbG9zZTtcbiAgICAgICAgICAgIHRoaXMuY2ZnLm9uQ2xvc2UgPSBmdW5jdGlvbihkYXRlVGV4dCwgaW5zdCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cihcInJlYWRvbmx5XCIsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIGlmIChmaXJlQ2xvc2VFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICBmaXJlQ2xvc2VFdmVudCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvL0luaXRpYWxpemUgY2FsZW5kYXJcbiAgICAgICAgaWYoaGFzVGltZVBpY2tlcikge1xuICAgICAgICAgICAgaWYodGhpcy5jZmcudGltZU9ubHkpXG4gICAgICAgICAgICAgICAgdGhpcy5qcUVsLnRpbWVwaWNrZXIodGhpcy5jZmcpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuanFFbC5kYXRldGltZXBpY2tlcih0aGlzLmNmZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmpxRWwuZGF0ZXBpY2tlcih0aGlzLmNmZyk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2V4dGVuc2lvbnNcbiAgICAgICAgaWYodGhpcy5jZmcucG9wdXAgJiYgdGhpcy5jZmcuc2hvd09uKSB7XG4gICAgICAgICAgICB2YXIgdHJpZ2dlckJ1dHRvbiA9IHRoaXMuanFFbC5zaWJsaW5ncygnLnVpLWRhdGVwaWNrZXItdHJpZ2dlcjpidXR0b24nKTtcbiAgICAgICAgICAgIHRyaWdnZXJCdXR0b24uYXR0cignYXJpYS1sYWJlbCcsUHJpbWVGYWNlcy5nZXRMb2NhbGVMYWJlbCgnY2hvb3NlRGF0ZScpKS5hdHRyKCdhcmlhLWhhc3BvcHVwJywgdHJ1ZSkuaHRtbCgnJykuYWRkQ2xhc3MoJ3VpLWJ1dHRvbiB1aS13aWRnZXQgdWktc3RhdGUtZGVmYXVsdCB1aS1jb3JuZXItYWxsIHVpLWJ1dHRvbi1pY29uLW9ubHknKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJ1aS1idXR0b24taWNvbi1sZWZ0IHVpLWljb24gdWktaWNvbi1jYWxlbmRhclwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInVpLWJ1dHRvbi10ZXh0XCI+dWktYnV0dG9uPC9zcGFuPicpO1xuXG4gICAgICAgICAgICB2YXIgdGl0bGUgPSB0aGlzLmpxRWwuYXR0cigndGl0bGUnKTtcbiAgICAgICAgICAgIGlmKHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckJ1dHRvbi5hdHRyKCd0aXRsZScsIHRpdGxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5jZmcuZGlzYWJsZWQgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgICAgIHRyaWdnZXJCdXR0b24uYWRkQ2xhc3MoJ3VpLXN0YXRlLWRpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBidXR0b25JbmRleCA9IHRoaXMuY2ZnLmJ1dHRvblRhYmluZGV4fHx0aGlzLmpxRWwuYXR0cigndGFiaW5kZXgnKTtcbiAgICAgICAgICAgIGlmKGJ1dHRvbkluZGV4KSB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckJ1dHRvbi5hdHRyKCd0YWJpbmRleCcsIGJ1dHRvbkluZGV4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUHJpbWVGYWNlcy5za2luQnV0dG9uKHRyaWdnZXJCdXR0b24pO1xuICAgICAgICAgICAgJCgnI3VpLWRhdGVwaWNrZXItZGl2JykuYWRkQ2xhc3MoJ3VpLXNoYWRvdycpO1xuICAgICAgICAgICAgdGhpcy5qcS5hZGRDbGFzcygndWktdHJpZ2dlci1jYWxlbmRhcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9tYXJrIHRhcmdldCBhbmQgZGVzY2FuZGFudHMgb2YgdGFyZ2V0IGFzIGEgdHJpZ2dlciBmb3IgYSBwcmltZWZhY2VzIG92ZXJsYXlcbiAgICAgICAgaWYodGhpcy5jZmcucG9wdXApIHtcbiAgICAgICAgICAgIHRoaXMuanEuZGF0YSgncHJpbWVmYWNlcy1vdmVybGF5LXRhcmdldCcsIHRoaXMuaWQpLmZpbmQoJyonKS5kYXRhKCdwcmltZWZhY2VzLW92ZXJsYXktdGFyZ2V0JywgdGhpcy5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuY2ZnLnBvcHVwICYmIHRoaXMuY2ZnLnNob3dUb2RheUJ1dHRvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuanFFbC5wYXJlbnQoKS5maW5kKFwiLnVpLWRhdGVwaWNrZXItY3VycmVudFwiKS5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL3BmcyBtZXRhZGF0YVxuICAgICAgICB0aGlzLmlucHV0LmRhdGEoUHJpbWVGYWNlcy5DTElFTlRfSURfREFUQSwgdGhpcy5pZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIG1hc2sgb24gdGhlIGlucHV0IGlmIHVzaW5nIGEgbWFzayBhbmQgbm90IGFuIGlubGluZSBwaWNrZXIuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhcHBseU1hc2soKSB7XG4gICAgICAgIGlmICh0aGlzLmNmZy5pbmxpbmUgfHwgdGhpcy5pbnB1dC5pcygnW3JlYWRvbmx5XScpIHx8IHRoaXMuaW5wdXQuaXMoJzpkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2ZnLm1hc2spIHtcbiAgICAgICAgICAgIHZhciBpc0F1dG9DbGVhciA9ICh0aGlzLmNmZy5tYXNrQXV0b0NsZWFyID09PSB1bmRlZmluZWQpID8gdHJ1ZSA6IHRoaXMuY2ZnLm1hc2tBdXRvQ2xlYXI7XG4gICAgICAgICAgICB2YXIgbWFza0NmZyA9IHtcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5jZmcubWFza1Nsb3RDaGFyfHwnXycsXG4gICAgICAgICAgICAgICAgY2xlYXJNYXNrT25Mb3N0Rm9jdXM6IGlzQXV0b0NsZWFyLFxuICAgICAgICAgICAgICAgIGNsZWFySW5jb21wbGV0ZTogaXNBdXRvQ2xlYXIsXG4gICAgICAgICAgICAgICAgYXV0b1VubWFzazogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IC9bbWR5aHNdL2k7XG4gICAgICAgICAgICB2YXIgaXNBbGlhcyA9IHBhdHRlcm4udGVzdCh0aGlzLmNmZy5tYXNrKTtcbiAgICAgICAgICAgIGlmIChpc0FsaWFzKSB7XG4gICAgICAgICAgICAgICAgbWFza0NmZy5hbGlhcyA9ICdkYXRldGltZSc7XG4gICAgICAgICAgICAgICAgbWFza0NmZy5pbnB1dEZvcm1hdCA9IHRoaXMuY2ZnLm1hc2s7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1hc2tDZmcubWFzayA9IHRoaXMuY2ZnLm1hc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlucHV0LmlucHV0bWFzaygncmVtb3ZlJykuaW5wdXRtYXNrKG1hc2tDZmcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlyZWQgd2hlbiB0aGUgYnJvd3NlciB2aWV3cG9ydCBpcyByZXNpemVkIG9yIHNjcm9sbGVkLiAgSW4gTW9iaWxlIGVudmlyb25tZW50IHdlIGRvbid0IHdhbnQgdG8gaGlkZXIgdGhlIG92ZXJsYXlcbiAgICAgKiB3ZSB3YW50IHRvIHJlLWFsaWduIGl0LiAgVGhpcyBpcyBiZWNhdXNlIG9uIHNvbWUgbW9iaWxlIGJyb3dzZXIgdGhlIHBvcHVwIG1heSBmb3JjZSB0aGUgYnJvd3NlciB0byB0cmlnZ2VyIGEgXG4gICAgICogcmVzaXplIGltbWVkaWF0ZWx5IGFuZCBjbG9zZSB0aGUgb3ZlcmxheS4gU2VlIEdpdEh1YiAjNzA3NS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGhhbmRsZVZpZXdwb3J0Q2hhbmdlKCkge1xuICAgICAgICBpZiAoUHJpbWVGYWNlcy5lbnYubW9iaWxlKSB7XG4gICAgICAgICAgICB0aGlzLmFsaWduUGFuZWwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQuZGF0ZXBpY2tlci5faGlkZURhdGVwaWNrZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsaWducyB0aGUgb3ZlcmxheSBwYW5lbCB3aXRoIHRoZSBkYXRlIHBpY2tlciBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgY29uZmlndXJhdGlvbi4gSXQgaXMgdXN1YWxseSBwb3NpdGlvbmVkXG4gICAgICogbmV4dCB0byBvciBiZWxvdyB0aGUgaW5wdXQgZmllbGQgdG8gd2hpY2ggaXQgaXMgYXR0YWNoZWQuXG4gICAgICovXG4gICAgYWxpZ25QYW5lbCgpIHtcbiAgICAgICAgaWYoJC5kYXRlcGlja2VyLl9sYXN0SW5wdXQgJiYgKHRoaXMuaWQgKyAnX2lucHV0JykgPT09ICQuZGF0ZXBpY2tlci5fbGFzdElucHV0LmlkKSB7XG4gICAgICAgICAgICAkKCcjdWktZGF0ZXBpY2tlci1kaXYnKS5jc3Moe2xlZnQ6ICcnLCB0b3A6ICcnfSkucG9zaXRpb24oe1xuICAgICAgICAgICAgICAgIG15OiAnbGVmdCB0b3AnXG4gICAgICAgICAgICAgICAgLCBhdDogJ2xlZnQgYm90dG9tJ1xuICAgICAgICAgICAgICAgICwgb2Y6IHRoaXMuaW5wdXRcbiAgICAgICAgICAgICAgICAsIGNvbGxpc2lvbjogJ2ZsaXBmaXQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLlBhcnRpYWxXaWRnZXRDZmc8VENmZz59IGNmZ1xuICAgICAqL1xuICAgIHJlZnJlc2goY2ZnKSB7XG4gICAgICAgIGlmKGNmZy5wb3B1cCAmJiAkLmRhdGVwaWNrZXIuX2xhc3RJbnB1dCAmJiAoY2ZnLmlkICsgJ19pbnB1dCcpID09PSAkLmRhdGVwaWNrZXIuX2xhc3RJbnB1dC5pZCkge1xuICAgICAgICAgICAgJC5kYXRlcGlja2VyLl9oaWRlRGF0ZXBpY2tlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIucmVmcmVzaChjZmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2ZnLnBvcHVwICYmICQuZGF0ZXBpY2tlci5fbGFzdElucHV0ICYmIHRoaXMuY2ZnLmlkICsgXCJfaW5wdXRcIiA9PT0gJC5kYXRlcGlja2VyLl9sYXN0SW5wdXQuaWQpIHtcbiAgICAgICAgICAgICQuZGF0ZXBpY2tlci5faGlkZURhdGVwaWNrZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJC5kYXRlcGlja2VyLl9jdXJJbnN0KSAkLmRhdGVwaWNrZXIuX2N1ckluc3QuaW5wdXQgPSBudWxsO1xuICAgICAgICBpZiAoJC5kYXRlcGlja2VyLl9sYXN0SW5wdXQpICQuZGF0ZXBpY2tlci5fbGFzdElucHV0ID0gbnVsbDtcbiAgICAgICAgJC5kYXRlcGlja2VyLl9kaXNhYmxlZElucHV0cyA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLmNmZy5tYXNrICYmIHRoaXMuaW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuaW5wdXRtYXNrKFwicmVtb3ZlXCIpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5vZmYoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBsb2NhbGUgc28gdGhhdCB0aGlzIGNhbGVuZGFyIGlzIGRpc3BsYXllZCBpbiB0aGUgY29uZmlndXJlZCBsYW5nYXVnZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGNvbmZpZ3VyZUxvY2FsZSgpIHtcbiAgICAgICAgdmFyIGxvY2FsZVNldHRpbmdzID0gUHJpbWVGYWNlcy5nZXRMb2NhbGVTZXR0aW5ncyh0aGlzLmNmZy5sb2NhbGUpO1xuXG4gICAgICAgIGlmIChsb2NhbGVTZXR0aW5ncykge1xuICAgICAgICAgICAgZm9yKHZhciBzZXR0aW5nIGluIGxvY2FsZVNldHRpbmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmcgIT09ICdkYXRlRm9ybWF0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNmZ1tzZXR0aW5nXSA9IGxvY2FsZVNldHRpbmdzW3NldHRpbmddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY2ZnLCB7XG4gICAgICAgICAgICAgICAgZmlyc3REYXk6IGxvY2FsZVNldHRpbmdzLmZpcnN0RGF5T2ZXZWVrLFxuICAgICAgICAgICAgICAgIGNsb3NlVGV4dDogbG9jYWxlU2V0dGluZ3MuYXJpYS5jbG9zZSxcbiAgICAgICAgICAgICAgICBwcmV2VGV4dDogbG9jYWxlU2V0dGluZ3MuYXJpYS5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICBuZXh0VGV4dDogbG9jYWxlU2V0dGluZ3MuYXJpYS5uZXh0LFxuICAgICAgICAgICAgICAgIGN1cnJlbnRUZXh0OiBsb2NhbGVTZXR0aW5ncy50b2RheVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBldmVudCBsaXN0ZW5lcnMgZm9yIHdoZW4gdGhlIHVzZXIgc2VsZWN0cyBhIHBhcnRpY3VsYXIgZGF0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGJpbmREYXRlU2VsZWN0TGlzdGVuZXIoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5jZmcub25TZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKCR0aGlzLmNmZy5wb3B1cCkge1xuICAgICAgICAgICAgICAgICR0aGlzLmZpcmVEYXRlU2VsZWN0RXZlbnQoKTtcblxuICAgICAgICAgICAgICAgIGlmKCR0aGlzLmNmZy5mb2N1c09uU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnJlZm9jdXNJbnB1dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmpxRWwudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoISgkdGhpcy5jZmcuc2hvd09uICYmICR0aGlzLmNmZy5zaG93T24gPT09ICdidXR0b24nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMuanFFbC5vZmYoJ2NsaWNrLmNhbGVuZGFyJykub24oJ2NsaWNrLmNhbGVuZGFyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5kYXRlcGlja2VyKFwic2hvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLnJlZm9jdXNJbnB1dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gR2l0SHViICMzNzYwIFBhc3MgdGhlIGNvbmZpZyBzZXR0aW5ncyB0byBUaW1lUGlja2VyXG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzT2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncyA6ICR0aGlzLmNmZ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIG5ld0RhdGUgPSAkdGhpcy5jZmcudGltZU9ubHkgPyAnJyA6ICQuZGF0ZXBpY2tlci5mb3JtYXREYXRlKCR0aGlzLmNmZy5kYXRlRm9ybWF0LCAkdGhpcy5nZXREYXRlKCksICQuZGF0ZXBpY2tlci5fZ2V0Rm9ybWF0Q29uZmlnKHNldHRpbmdzT2JqKSk7XG4gICAgICAgICAgICAgICAgaWYoJHRoaXMuY2ZnLnRpbWVGb3JtYXQpIHtcbiAgICAgICAgICAgICAgICAgICBuZXdEYXRlICs9ICcgJyArICR0aGlzLmpxRWwuZmluZCgnLnVpX3RwaWNrZXJfdGltZV9pbnB1dCcpWzBdLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICR0aGlzLmlucHV0LnZhbChuZXdEYXRlKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5maXJlRGF0ZVNlbGVjdEV2ZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIGJlaGF2aW9ycyBhbmQgZXZlbnQgbGlzdGVuZXIgZm9yIHdoZW4gdGhlIHVzZXIgaGFzIHNlbGVjdGVkIGEgY2VydGFpbiBkYXRlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZmlyZURhdGVTZWxlY3RFdmVudCgpIHtcbiAgICAgICAgdGhpcy5jYWxsQmVoYXZpb3IoJ2RhdGVTZWxlY3QnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBldmVudCBsaXN0ZW5lcnMgZm9yIHdoZW4gdGhlIHVzZXIgc3dpdGNoZXMgdG8gYSBkaWZmZXJlbnQgbW9udGggb3IgeWVhci5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGJpbmRWaWV3Q2hhbmdlTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmKHRoaXMuaGFzQmVoYXZpb3IoJ3ZpZXdDaGFuZ2UnKSkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuY2ZnLm9uQ2hhbmdlTW9udGhZZWFyID0gZnVuY3Rpb24oeWVhciwgbW9udGgpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5maXJlVmlld0NoYW5nZUV2ZW50KHllYXIsIG1vbnRoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyB0aGUgYmVoYXZpb3JzIGFuZCBldmVudCBsaXN0ZW5lciBmb3Igd2hlbiB0aGUgdXNlciBoYXMgc3dpdGNoZWQgdG8gYSBkaWZmZXJlbnQgbW9udGggb3IgeWVhci5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5ZWFyIE5ldyB5ZWFyIGZvciB3aGljaCBhIGNhbGVuZGFyIGlzIHNob3duLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtb250aCBOZXcgbW9udGggZm9yIHdoaWNoIGEgY2FsZW5kYXIgaXMgc2hvd24gKDA9SmFudWFyeSkuXG4gICAgICovXG4gICAgZmlyZVZpZXdDaGFuZ2VFdmVudCh5ZWFyLCBtb250aCkge1xuICAgICAgICBpZih0aGlzLmhhc0JlaGF2aW9yKCd2aWV3Q2hhbmdlJykpIHtcbiAgICAgICAgICAgIHZhciBleHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge25hbWU6IHRoaXMuaWQgKyAnX21vbnRoJywgdmFsdWU6IG1vbnRofSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiB0aGlzLmlkICsgJ195ZWFyJywgdmFsdWU6IHllYXJ9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuY2FsbEJlaGF2aW9yKCd2aWV3Q2hhbmdlJywgZXh0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIGV2ZW50IGxpc3RlbmVycyBmb3Igd2hlbiB0aGlzIGNhbGVuZGFyIGlzIGNsb3NlZC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGJpbmRDbG9zZUxpc3RlbmVyKCkge1xuICAgICAgICBpZih0aGlzLmhhc0JlaGF2aW9yKCdjbG9zZScpKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5jZmcub25DbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICR0aGlzLmZpcmVDbG9zZUV2ZW50KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIGBjbG9zZWAgZXZlbnQgd2hlbiB0aGlzIGNhbGVuZGFyIGlzIGNsb3NlZC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZpcmVDbG9zZUV2ZW50KCkge1xuICAgICAgICB0aGlzLmNhbGxCZWhhdmlvcignY2xvc2UnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCBpbml0aWFsaXplcyB0aGUgY29uZml1Z3JhdGlvbiBvcHRpb25zIGZvciB0aGUgdGltZSBwaWNrZXIuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjb25maWd1cmVUaW1lUGlja2VyKCkge1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRoaXMuY2ZnLmRhdGVGb3JtYXQsXG4gICAgICAgIHRpbWVTZXBhcmF0b3JJbmRleCA9IHBhdHRlcm4udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdoJyk7XG5cbiAgICAgICAgdGhpcy5jZmcuZGF0ZUZvcm1hdCA9IHBhdHRlcm4uc3Vic3RyaW5nKDAsIHRpbWVTZXBhcmF0b3JJbmRleCAtIDEpO1xuICAgICAgICB0aGlzLmNmZy50aW1lRm9ybWF0ID0gcGF0dGVybi5zdWJzdHJpbmcodGltZVNlcGFyYXRvckluZGV4LCBwYXR0ZXJuLmxlbmd0aCk7XG5cbiAgICAgICAgLy9hbXBtXG4gICAgICAgIGlmKHRoaXMuY2ZnLnRpbWVGb3JtYXQuaW5kZXhPZignVFQnKSAhPSAtMSkge1xuICAgICAgICAgICAgdGhpcy5jZmcuYW1wbSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHaXRIdWIgIzQzNjYgcGFzcyBkYXRlIGFuZCB0aW1lIHNldHRpbmdzIGZvciBtaW4vbWF4IGRhdGVcbiAgICAgICAgdmFyIHRpbWVTZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICAgICBzZXR0aW5ncyA6IHRoaXMuY2ZnXG4gICAgICAgIH07XG4gICAgICAgIHZhciBwYXJzZVNldHRpbmdzID0gJC5kYXRlcGlja2VyLl9nZXRGb3JtYXRDb25maWcodGltZVNldHRpbmdzKTtcblxuICAgICAgICAvL3Jlc3RyYWludHNcbiAgICAgICAgaWYodGhpcy5jZmcubWluRGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jZmcubWluRGF0ZSA9ICQuZGF0ZXBpY2tlci5wYXJzZURhdGVUaW1lKHRoaXMuY2ZnLmRhdGVGb3JtYXQsIHRoaXMuY2ZnLnRpbWVGb3JtYXQsIHRoaXMuY2ZnLm1pbkRhdGUsIHBhcnNlU2V0dGluZ3MsIHRoaXMuY2ZnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuY2ZnLm1heERhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2ZnLm1heERhdGUgPSAkLmRhdGVwaWNrZXIucGFyc2VEYXRlVGltZSh0aGlzLmNmZy5kYXRlRm9ybWF0LCB0aGlzLmNmZy50aW1lRm9ybWF0LCB0aGlzLmNmZy5tYXhEYXRlLCBwYXJzZVNldHRpbmdzLCB0aGlzLmNmZyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighdGhpcy5jZmcuc2hvd0J1dHRvblBhbmVsKSB7XG4gICAgICAgICAgICB0aGlzLmNmZy5zaG93QnV0dG9uUGFuZWwgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuY2ZnLmNvbnRyb2xUeXBlID09ICdjdXN0b20nICYmIHRoaXMuY2ZnLnRpbWVDb250cm9sT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmNmZy5jb250cm9sVHlwZSA9IHRoaXMuY2ZnLnRpbWVDb250cm9sT2JqZWN0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2ZnLnNob3dIb3VyKSB7XG4gICAgICAgICAgICB0aGlzLmNmZy5zaG93SG91ciA9IHRoaXMuY2ZnLnNob3dIb3VyID09PSBcInRydWVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNmZy5zaG93TWludXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNmZy5zaG93TWludXRlID0gdGhpcy5jZmcuc2hvd01pbnV0ZSA9PT0gXCJ0cnVlXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jZmcuc2hvd1NlY29uZCkge1xuICAgICAgICAgICAgdGhpcy5jZmcuc2hvd1NlY29uZCA9IHRoaXMuY2ZnLnNob3dTZWNvbmQgPT09IFwidHJ1ZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2ZnLnNob3dNaWxsaXNlYykge1xuICAgICAgICAgICAgdGhpcy5jZmcuc2hvd01pbGxpc2VjID0gdGhpcy5jZmcuc2hvd01pbGxpc2VjID09PSBcInRydWVcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoaXMgY2FsZW5kYXIgbGV0cyB0aGUgdXNlciBzcGVjaWZ5IGEgY2xvY2sgdGltZSAoYW5kIG5vdCBqdXN0IGEgZGF0ZSkuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIHdoZW4gdGhpcyBjYWxlbmRhciBpbmNsdWRlcyBhIGNsb2NrIHRpbWUgcGlja2VyLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBoYXNUaW1lUGlja2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jZmcuZGF0ZUZvcm1hdC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2gnKSAhPSAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZSBvZiB0aGUgZGF0ZXBpY2tlci5cbiAgICAgKiBAcGFyYW0ge0RhdGUgfCBudWxsIHwgdW5kZWZpbmVkfSBkYXRlIERhdGUgdG8gZGlzcGxheSwgb3IgYG51bGxgIG9yIGB1bmRlZmluZWRgIHRvIGNsZWFyIHRoZSBkYXRlLlxuICAgICAqL1xuICAgIHNldERhdGUoZGF0ZSkge1xuICAgICAgICB0aGlzLmpxRWwuZGF0ZXRpbWVwaWNrZXIoJ3NldERhdGUnLCBkYXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUuXG4gICAgICogQHJldHVybiB7RGF0ZSB8IG51bGx9IFRoZSBzZWxlY3RlZCBkYXRlIG9mIHRoZSBjYWxlbmRhciwgb3IgYG51bGxgIHdoZW4gbm8gZGF0ZSBpcyBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBnZXREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5qcUVsLmRhdGV0aW1lcGlja2VyKCdnZXREYXRlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5hYmxlcyB0aGUgY2FsZW5kYXIsIHNvIHRoYXQgdGhlIHVzZXIgY2FuIHNlbGVjdCBhIGRhdGUuXG4gICAgICovXG4gICAgZW5hYmxlKCkge1xuICAgICAgICB0aGlzLmpxRWwuZGF0ZXRpbWVwaWNrZXIoJ2VuYWJsZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc2FibGVzIHRoZSBjYWxlbmRhciwgc28gdGhhdCB0aGUgdXNlciBjYW4gbm8gbG9uZ2VyIHNlbGVjdCBhbnkgZGF0ZS4uXG4gICAgICovXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5qcUVsLmRhdGV0aW1lcGlja2VyKCdkaXNhYmxlJyk7XG4gICAgfVxuXG59XG4iLCAiLyogUHJpbWVGYWNlcyBFeHRlbnNpb25zICovXG4oZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcmlnaW5hbF9nb3RvVG9kYXkgPSAkLmRhdGVwaWNrZXIuX2dvdG9Ub2RheTtcblxuICAgICQuZGF0ZXBpY2tlci5fZ290b1RvZGF5ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSAkKGlkKSxcbiAgICAgICAgICAgICAgICBpbnN0ID0gdGhpcy5fZ2V0SW5zdCh0YXJnZXRbMF0pO1xuXG4gICAgICAgIG9yaWdpbmFsX2dvdG9Ub2RheS5jYWxsKHRoaXMsIGlkKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0RGF0ZShpZCwgdGhpcy5fZm9ybWF0RGF0ZShpbnN0LCBpbnN0LnNlbGVjdGVkRGF5LCBpbnN0LmRyYXdNb250aCwgaW5zdC5kcmF3WWVhcikpO1xuICAgIH07XG5cbiAgICAkLmRhdGVwaWNrZXIuX2F0dGFjaEhhbmRsZXJzID0gZnVuY3Rpb24gKGluc3QpIHtcbiAgICAgICAgdmFyIHN0ZXBNb250aHMgPSB0aGlzLl9nZXQoaW5zdCwgXCJzdGVwTW9udGhzXCIpLFxuICAgICAgICAgICAgICAgIGlkID0gXCIjXCIgKyBpbnN0LmlkLnJlcGxhY2UoL1xcXFxcXFxcL2csIFwiXFxcXFwiKTtcbiAgICAgICAgaW5zdC5kcERpdi5maW5kKFwiW2RhdGEtaGFuZGxlcl1cIikubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVyID0ge1xuICAgICAgICAgICAgICAgIHByZXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5kYXRlcGlja2VyLl9hZGp1c3REYXRlKGlkLCAtc3RlcE1vbnRocywgXCJNXCIpO1xuICAgICAgICAgICAgICAgICAgICAkLmRhdGVwaWNrZXIuX3VwZGF0ZURhdGVQaWNrZXJQb3NpdGlvbihpbnN0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5kYXRlcGlja2VyLl9hZGp1c3REYXRlKGlkLCArc3RlcE1vbnRocywgXCJNXCIpO1xuICAgICAgICAgICAgICAgICAgICAkLmRhdGVwaWNrZXIuX3VwZGF0ZURhdGVQaWNrZXJQb3NpdGlvbihpbnN0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5kYXRlcGlja2VyLl9oaWRlRGF0ZXBpY2tlcigpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9kYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5kYXRlcGlja2VyLl9nb3RvVG9kYXkoaWQpO1xuICAgICAgICAgICAgICAgICAgICAkLmRhdGVwaWNrZXIuX3VwZGF0ZURhdGVQaWNrZXJQb3NpdGlvbihpbnN0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlbGVjdERheTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkLmRhdGVwaWNrZXIuX3NlbGVjdERheShpZCwgK3RoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1tb250aFwiKSwgK3RoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS15ZWFyXCIpLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgJC5kYXRlcGlja2VyLl91cGRhdGVEYXRlUGlja2VyUG9zaXRpb24oaW5zdCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlbGVjdE1vbnRoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQuZGF0ZXBpY2tlci5fc2VsZWN0TW9udGhZZWFyKGlkLCB0aGlzLCBcIk1cIik7XG4gICAgICAgICAgICAgICAgICAgICQuZGF0ZXBpY2tlci5fdXBkYXRlRGF0ZVBpY2tlclBvc2l0aW9uKGluc3QpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZWxlY3RZZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQuZGF0ZXBpY2tlci5fc2VsZWN0TW9udGhZZWFyKGlkLCB0aGlzLCBcIllcIik7XG4gICAgICAgICAgICAgICAgICAgICQuZGF0ZXBpY2tlci5fdXBkYXRlRGF0ZVBpY2tlclBvc2l0aW9uKGluc3QpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICQodGhpcykub24odGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWV2ZW50XCIpLCBoYW5kbGVyW3RoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1oYW5kbGVyXCIpXSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkLmRhdGVwaWNrZXIuX3VwZGF0ZURhdGVQaWNrZXJQb3NpdGlvbiA9IGZ1bmN0aW9uIChpbnN0KSB7XG4gICAgICAgIGlmIChpbnN0LmlubGluZSkge1xuICAgICAgICAgICAgLy8gR2l0SHViICM1ODk4IGRvIG5vdCBmaXggaW5saW5lIGNhbGVuZGFyXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlucHV0ID0gaW5zdC5pbnB1dFswXTtcbiAgICAgICAgaWYgKCEkLmRhdGVwaWNrZXIuX3BvcykgeyAvLyBwb3NpdGlvbiBiZWxvdyBpbnB1dFxuICAgICAgICAgICAgJC5kYXRlcGlja2VyLl9wb3MgPSAkLmRhdGVwaWNrZXIuX2ZpbmRQb3MoaW5wdXQpO1xuICAgICAgICAgICAgJC5kYXRlcGlja2VyLl9wb3NbMV0gKz0gaW5wdXQub2Zmc2V0SGVpZ2h0OyAvLyBhZGQgdGhlIGhlaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IHtsZWZ0OiAkLmRhdGVwaWNrZXIuX3Bvc1swXSwgdG9wOiAkLmRhdGVwaWNrZXIuX3Bvc1sxXX07XG4gICAgICAgICQuZGF0ZXBpY2tlci5fcG9zID0gbnVsbDtcbiAgICAgICAgdmFyIGlzRml4ZWQgPSBmYWxzZTtcbiAgICAgICAgJChpbnB1dCkucGFyZW50cygpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaXNGaXhlZCB8PSAkKHRoaXMpLmNzcyhcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCI7XG4gICAgICAgICAgICByZXR1cm4gIWlzRml4ZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgY2hlY2tlZE9mZnNldCA9ICQuZGF0ZXBpY2tlci5fY2hlY2tPZmZzZXQoaW5zdCwgb2Zmc2V0LCBpc0ZpeGVkKTtcbiAgICAgICAgaW5zdC5kcERpdi5jc3Moe3RvcDogY2hlY2tlZE9mZnNldC50b3AgKyBcInB4XCJ9KTtcbiAgICB9O1xuXG4gICAgJC5kYXRlcGlja2VyLl9nZW5lcmF0ZU1vbnRoWWVhckhlYWRlciA9IGZ1bmN0aW9uIChpbnN0LCBkcmF3TW9udGgsIGRyYXdZZWFyLCBtaW5EYXRlLCBtYXhEYXRlLCBzZWNvbmRhcnksIG1vbnRoTmFtZXMsIG1vbnRoTmFtZXNTaG9ydCkge1xuXG4gICAgICAgIHZhciBpbk1pblllYXIsIGluTWF4WWVhciwgbW9udGgsIHllYXJzLCB0aGlzWWVhciwgZGV0ZXJtaW5lWWVhciwgeWVhciwgZW5kWWVhcixcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb250aCA9IHRoaXMuX2dldChpbnN0LCBcImNoYW5nZU1vbnRoXCIpLFxuICAgICAgICAgICAgICAgIGNoYW5nZVllYXIgPSB0aGlzLl9nZXQoaW5zdCwgXCJjaGFuZ2VZZWFyXCIpLFxuICAgICAgICAgICAgICAgIHNob3dNb250aEFmdGVyWWVhciA9IHRoaXMuX2dldChpbnN0LCBcInNob3dNb250aEFmdGVyWWVhclwiKSxcbiAgICAgICAgICAgICAgICBodG1sID0gXCI8ZGl2IGNsYXNzPSd1aS1kYXRlcGlja2VyLXRpdGxlJz5cIixcbiAgICAgICAgICAgICAgICBtb250aEh0bWwgPSBcIlwiO1xuXG4gICAgICAgIC8vIG1vbnRoIHNlbGVjdGlvblxuICAgICAgICBpZiAoc2Vjb25kYXJ5IHx8ICFjaGFuZ2VNb250aCkge1xuICAgICAgICAgICAgbW9udGhIdG1sICs9IFwiPHNwYW4gY2xhc3M9J3VpLWRhdGVwaWNrZXItbW9udGgnIGFyaWEtbGFiZWw9J3NlbGVjdCBtb250aCc+XCIgKyBtb250aE5hbWVzW2RyYXdNb250aF0gKyBcIjwvc3Bhbj5cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluTWluWWVhciA9IChtaW5EYXRlICYmIG1pbkRhdGUuZ2V0RnVsbFllYXIoKSA9PT0gZHJhd1llYXIpO1xuICAgICAgICAgICAgaW5NYXhZZWFyID0gKG1heERhdGUgJiYgbWF4RGF0ZS5nZXRGdWxsWWVhcigpID09PSBkcmF3WWVhcik7XG4gICAgICAgICAgICBtb250aEh0bWwgKz0gXCI8c2VsZWN0IGNsYXNzPSd1aS1kYXRlcGlja2VyLW1vbnRoJyBkYXRhLWhhbmRsZXI9J3NlbGVjdE1vbnRoJyBkYXRhLWV2ZW50PSdjaGFuZ2UnIGFyaWEtbGFiZWw9J3NlbGVjdCBtb250aCc+XCI7XG4gICAgICAgICAgICBmb3IgKG1vbnRoID0gMDsgbW9udGggPCAxMjsgbW9udGgrKykge1xuICAgICAgICAgICAgICAgIGlmICgoIWluTWluWWVhciB8fCBtb250aCA+PSBtaW5EYXRlLmdldE1vbnRoKCkpICYmICghaW5NYXhZZWFyIHx8IG1vbnRoIDw9IG1heERhdGUuZ2V0TW9udGgoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9udGhIdG1sICs9IFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBtb250aCArIFwiJ1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobW9udGggPT09IGRyYXdNb250aCA/IFwiIHNlbGVjdGVkPSdzZWxlY3RlZCdcIiA6IFwiXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIj5cIiArIG1vbnRoTmFtZXNTaG9ydFttb250aF0gKyBcIjwvb3B0aW9uPlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vbnRoSHRtbCArPSBcIjwvc2VsZWN0PlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzaG93TW9udGhBZnRlclllYXIpIHtcbiAgICAgICAgICAgIGh0bWwgKz0gbW9udGhIdG1sICsgKHNlY29uZGFyeSB8fCAhKGNoYW5nZU1vbnRoICYmIGNoYW5nZVllYXIpID8gXCImI3hhMDtcIiA6IFwiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8geWVhciBzZWxlY3Rpb25cbiAgICAgICAgaWYgKCFpbnN0LnllYXJzaHRtbCkge1xuICAgICAgICAgICAgaW5zdC55ZWFyc2h0bWwgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKHNlY29uZGFyeSB8fCAhY2hhbmdlWWVhcikge1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gXCI8c3BhbiBjbGFzcz0ndWktZGF0ZXBpY2tlci15ZWFyJyBhcmlhLWxhYmVsPSdzZWxlY3QgeWVhcic+XCIgKyBkcmF3WWVhciArIFwiPC9zcGFuPlwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBkZXRlcm1pbmUgcmFuZ2Ugb2YgeWVhcnMgdG8gZGlzcGxheVxuICAgICAgICAgICAgICAgIHllYXJzID0gdGhpcy5fZ2V0KGluc3QsIFwieWVhclJhbmdlXCIpLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgICAgICAgICB0aGlzWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICBkZXRlcm1pbmVZZWFyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB5ZWFyID0gKHZhbHVlLm1hdGNoKC9jWytcXC1dLiovKSA/IGRyYXdZZWFyICsgcGFyc2VJbnQodmFsdWUuc3Vic3RyaW5nKDEpLCAxMCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZS5tYXRjaCgvWytcXC1dLiovKSA/IHRoaXNZZWFyICsgcGFyc2VJbnQodmFsdWUsIDEwKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludCh2YWx1ZSwgMTApKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoaXNOYU4oeWVhcikgPyB0aGlzWWVhciA6IHllYXIpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeWVhciA9IGRldGVybWluZVllYXIoeWVhcnNbMF0pO1xuICAgICAgICAgICAgICAgIGVuZFllYXIgPSBNYXRoLm1heCh5ZWFyLCBkZXRlcm1pbmVZZWFyKHllYXJzWzFdIHx8IFwiXCIpKTtcbiAgICAgICAgICAgICAgICB5ZWFyID0gKG1pbkRhdGUgPyBNYXRoLm1heCh5ZWFyLCBtaW5EYXRlLmdldEZ1bGxZZWFyKCkpIDogeWVhcik7XG4gICAgICAgICAgICAgICAgZW5kWWVhciA9IChtYXhEYXRlID8gTWF0aC5taW4oZW5kWWVhciwgbWF4RGF0ZS5nZXRGdWxsWWVhcigpKSA6IGVuZFllYXIpO1xuICAgICAgICAgICAgICAgIGluc3QueWVhcnNodG1sICs9IFwiPHNlbGVjdCBjbGFzcz0ndWktZGF0ZXBpY2tlci15ZWFyJyBkYXRhLWhhbmRsZXI9J3NlbGVjdFllYXInIGRhdGEtZXZlbnQ9J2NoYW5nZScgYXJpYS1sYWJlbD0nc2VsZWN0IHllYXInPlwiO1xuICAgICAgICAgICAgICAgIGZvciAoOyB5ZWFyIDw9IGVuZFllYXI7IHllYXIrKykge1xuICAgICAgICAgICAgICAgICAgICBpbnN0LnllYXJzaHRtbCArPSBcIjxvcHRpb24gdmFsdWU9J1wiICsgeWVhciArIFwiJ1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoeWVhciA9PT0gZHJhd1llYXIgPyBcIiBzZWxlY3RlZD0nc2VsZWN0ZWQnXCIgOiBcIlwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI+XCIgKyB5ZWFyICsgXCI8L29wdGlvbj5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5zdC55ZWFyc2h0bWwgKz0gXCI8L3NlbGVjdD5cIjtcblxuICAgICAgICAgICAgICAgIGh0bWwgKz0gaW5zdC55ZWFyc2h0bWw7XG4gICAgICAgICAgICAgICAgaW5zdC55ZWFyc2h0bWwgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaHRtbCArPSB0aGlzLl9nZXQoaW5zdCwgXCJ5ZWFyU3VmZml4XCIpO1xuICAgICAgICBpZiAoc2hvd01vbnRoQWZ0ZXJZZWFyKSB7XG4gICAgICAgICAgICBodG1sICs9IChzZWNvbmRhcnkgfHwgIShjaGFuZ2VNb250aCAmJiBjaGFuZ2VZZWFyKSA/IFwiJiN4YTA7XCIgOiBcIlwiKSArIG1vbnRoSHRtbDtcbiAgICAgICAgfVxuICAgICAgICBodG1sICs9IFwiPC9kaXY+XCI7IC8vIENsb3NlIGRhdGVwaWNrZXJfaGVhZGVyXG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH07XG5cbiAgICAkLmRhdGVwaWNrZXIuX3VwZGF0ZURhdGVwaWNrZXIgPSBmdW5jdGlvbiAoaW5zdCkge1xuXG4gICAgICAgIC8vIGRvbid0IHBvcHVwIHRoZSBkYXRlcGlja2VyIGlmIHRoZXJlIGlzIGFub3RoZXIgaW5zdGFuY2UgYWxyZWFkeSBvcGVuZWRcbiAgICAgICAgdmFyIGlucHV0ID0gaW5zdC5pbnB1dFswXTtcbiAgICAgICAgaWYgKCQuZGF0ZXBpY2tlci5fY3VySW5zdCAmJiAkLmRhdGVwaWNrZXIuX2N1ckluc3QgIT09IGluc3QgJiYgJC5kYXRlcGlja2VyLl9kYXRlcGlja2VyU2hvd2luZyAmJiAkLmRhdGVwaWNrZXIuX2xhc3RJbnB1dCAhPT0gaW5wdXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mKGluc3Quc3RheV9vcGVuKSAhPT0gJ2Jvb2xlYW4nIHx8IGluc3Quc3RheV9vcGVuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgJHRoaXMuX2Jhc2VfdXBkYXRlRGF0ZXBpY2tlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMuX2Jhc2VfdXBkYXRlRGF0ZXBpY2tlcihpbnN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbG9hZCB0aGUgdGltZSBjb250cm9sIHdoZW4gY2hhbmdpbmcgc29tZXRoaW5nIGluIHRoZSBpbnB1dCB0ZXh0IGZpZWxkLlxuICAgICAgICAgICAgICAgICAgICB2YXIgdHBfaW5zdCA9ICR0aGlzLl9nZXQoaW5zdCwgJ3RpbWVwaWNrZXInKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRwX2luc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cF9pbnN0Ll9hZGRUaW1lUGlja2VyKGluc3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuX3VwZGF0ZURhdGVQaWNrZXJQb3NpdGlvbihpbnN0KTtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkLmRhdGVwaWNrZXIuX2Jhc2VfZGlzYWJsZURhdGVwaWNrZXIgPSAkLmRhdGVwaWNrZXIuX2Rpc2FibGVEYXRlcGlja2VyO1xuICAgICQuZGF0ZXBpY2tlci5fZGlzYWJsZURhdGVwaWNrZXIgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgLy8gR2l0SHViICM1Mzc0IENhbGVuZGVyIGlubGluZT10cnVlIG5vdCBzdHlsZWQgY29ycmVjdGx5XG4gICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICBcdCQuZGF0ZXBpY2tlci5fYmFzZV9kaXNhYmxlRGF0ZXBpY2tlcih0YXJnZXQpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAkLmV4dGVuZChPYmplY3QuZ2V0UHJvdG90eXBlT2YoJC50aW1lcGlja2VyKSwge1xuXG4gICAgICAgICAgICBfdXBkYXRlRGF0ZVRpbWU6IGZ1bmN0aW9uIChkcF9pbnN0KSB7XG4gICAgICAgICAgICAgICAgZHBfaW5zdCA9IHRoaXMuaW5zdCB8fCBkcF9pbnN0O1xuICAgICAgICAgICAgICAgIHZhciBkdFRtcCA9IChkcF9pbnN0LmN1cnJlbnRZZWFyID4gMD9cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKGRwX2luc3QuY3VycmVudFllYXIsIGRwX2luc3QuY3VycmVudE1vbnRoLCBkcF9pbnN0LmN1cnJlbnREYXkpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShkcF9pbnN0LnNlbGVjdGVkWWVhciwgZHBfaW5zdC5zZWxlY3RlZE1vbnRoLCBkcF9pbnN0LnNlbGVjdGVkRGF5KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHQgPSAkLmRhdGVwaWNrZXIuX2RheWxpZ2h0U2F2aW5nQWRqdXN0KGR0VG1wKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm10ID0gJC5kYXRlcGlja2VyLl9nZXQoZHBfaW5zdCwgJ2RhdGVGb3JtYXQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRDZmcgPSAkLmRhdGVwaWNrZXIuX2dldEZvcm1hdENvbmZpZyhkcF9pbnN0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lQXZhaWxhYmxlID0gZHQgIT09IG51bGwgJiYgdGhpcy50aW1lRGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1hdHRlZERhdGUgPSAkLmRhdGVwaWNrZXIuZm9ybWF0RGF0ZShkYXRlRm10LCAoZHQgPT09IG51bGwgPyBuZXcgRGF0ZSgpIDogZHQpLCBmb3JtYXRDZmcpO1xuICAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZWREYXRlVGltZSA9IHRoaXMuZm9ybWF0dGVkRGF0ZTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIGEgc2xpZGVyIHdhcyBjaGFuZ2VkIGJ1dCBkYXRlcGlja2VyIGRvZXNuJ3QgaGF2ZSBhIHZhbHVlIHlldCwgc2V0IGl0XG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBkcF9pbnN0Lmxhc3RWYWw7XG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsVmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZHBfaW5zdC5jdXJyZW50WWVhciA9IGRwX2luc3Quc2VsZWN0ZWRZZWFyO1xuICAgICAgICAgICAgICAgICAgICBkcF9pbnN0LmN1cnJlbnRNb250aCA9IGRwX2luc3Quc2VsZWN0ZWRNb250aDtcbiAgICAgICAgICAgICAgICAgICAgZHBfaW5zdC5jdXJyZW50RGF5ID0gZHBfaW5zdC5zZWxlY3RlZERheTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGVmYXVsdHMudGltZU9ubHkgPT09IHRydWUgJiYgdGhpcy5fZGVmYXVsdHMudGltZU9ubHlTaG93RGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZVRpbWUgPSB0aGlzLmZvcm1hdHRlZFRpbWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgodGhpcy5fZGVmYXVsdHMudGltZU9ubHkgIT09IHRydWUgJiYgKHRoaXMuX2RlZmF1bHRzLmFsd2F5c1NldFRpbWUgfHwgdGltZUF2YWlsYWJsZSkpIHx8ICh0aGlzLl9kZWZhdWx0cy50aW1lT25seSA9PT0gdHJ1ZSAmJiB0aGlzLl9kZWZhdWx0cy50aW1lT25seVNob3dEYXRlID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWREYXRlVGltZSArPSB0aGlzLl9kZWZhdWx0cy5zZXBhcmF0b3IgKyB0aGlzLmZvcm1hdHRlZFRpbWUgKyB0aGlzLl9kZWZhdWx0cy50aW1lU3VmZml4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybWF0dGVkRGF0ZVRpbWUgPSBmb3JtYXR0ZWREYXRlVGltZTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZGVmYXVsdHMuc2hvd1RpbWVwaWNrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaW5wdXQudmFsKHRoaXMuZm9ybWF0dGVkRGF0ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLiRhbHRJbnB1dCAmJiB0aGlzLl9kZWZhdWx0cy50aW1lT25seSA9PT0gZmFsc2UgJiYgdGhpcy5fZGVmYXVsdHMuYWx0RmllbGRUaW1lT25seSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhbHRJbnB1dC52YWwodGhpcy5mb3JtYXR0ZWRUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaW5wdXQudmFsKHRoaXMuZm9ybWF0dGVkRGF0ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLiRhbHRJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRpbnB1dC52YWwoZm9ybWF0dGVkRGF0ZVRpbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWx0Rm9ybWF0dGVkRGF0ZVRpbWUgPSAnJyxcbiAgICAgICAgICAgICAgICAgICAgYWx0U2VwYXJhdG9yID0gdGhpcy5fZGVmYXVsdHMuYWx0U2VwYXJhdG9yICE9PSBudWxsID8gdGhpcy5fZGVmYXVsdHMuYWx0U2VwYXJhdG9yIDogdGhpcy5fZGVmYXVsdHMuc2VwYXJhdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdFRpbWVTdWZmaXggPSB0aGlzLl9kZWZhdWx0cy5hbHRUaW1lU3VmZml4ICE9PSBudWxsID8gdGhpcy5fZGVmYXVsdHMuYWx0VGltZVN1ZmZpeCA6IHRoaXMuX2RlZmF1bHRzLnRpbWVTdWZmaXg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9kZWZhdWx0cy50aW1lT25seSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RlZmF1bHRzLmFsdEZvcm1hdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdEZvcm1hdHRlZERhdGVUaW1lID0gJC5kYXRlcGlja2VyLmZvcm1hdERhdGUodGhpcy5fZGVmYXVsdHMuYWx0Rm9ybWF0LCAoZHQgPT09IG51bGwgPyBuZXcgRGF0ZSgpIDogZHQpLCBmb3JtYXRDZmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0Rm9ybWF0dGVkRGF0ZVRpbWUgPSB0aGlzLmZvcm1hdHRlZERhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbHRGb3JtYXR0ZWREYXRlVGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdEZvcm1hdHRlZERhdGVUaW1lICs9IGFsdFNlcGFyYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kZWZhdWx0cy5hbHRUaW1lRm9ybWF0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRGb3JtYXR0ZWREYXRlVGltZSArPSAkLmRhdGVwaWNrZXIuZm9ybWF0VGltZSh0aGlzLl9kZWZhdWx0cy5hbHRUaW1lRm9ybWF0LCB0aGlzLCB0aGlzLl9kZWZhdWx0cykgKyBhbHRUaW1lU3VmZml4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWx0Rm9ybWF0dGVkRGF0ZVRpbWUgKz0gdGhpcy5mb3JtYXR0ZWRUaW1lICsgYWx0VGltZVN1ZmZpeDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhbHRJbnB1dC52YWwoYWx0Rm9ybWF0dGVkRGF0ZVRpbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGlucHV0LnZhbChmb3JtYXR0ZWREYXRlVGltZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsVmFsdWUgIT0gZm9ybWF0dGVkRGF0ZVRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaW5wdXQudHJpZ2dlcihcImNoYW5nZVwiKTsgLy8gUHJpbWVGYWNlcyBodHRwczovL2dpdGh1Yi5jb20vcHJpbWVmYWNlcy9wcmltZWZhY2VzL2lzc3Vlcy8yODExXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gUHJpbWVGYWNlcyBodHRwczovL2dpdGh1Yi5jb20vcHJpbWVmYWNlcy9wcmltZWZhY2VzL2lzc3Vlcy8zNzY1XG4gICAgICAgICAgICBfYWRkVGltZVBpY2tlcjogZnVuY3Rpb24gKGRwX2luc3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VyckRUID0gUHJpbWVGYWNlcy50cmltKCh0aGlzLiRhbHRJbnB1dCAmJiB0aGlzLl9kZWZhdWx0cy5hbHRGaWVsZFRpbWVPbmx5KSA/IHRoaXMuJGlucHV0LnZhbCgpICsgJyAnICsgdGhpcy4kYWx0SW5wdXQudmFsKCkgOiAoZHBfaW5zdC5pbmxpbmUgPyB0aGlzLiRpbnB1dC5uZXh0KCkudmFsKCkgOiB0aGlzLiRpbnB1dC52YWwoKSkpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lRGVmaW5lZCA9IHRoaXMuX3BhcnNlVGltZShjdXJyRFQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xpbWl0TWluTWF4RGF0ZVRpbWUoZHBfaW5zdCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2luamVjdFRpbWVQaWNrZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZnRlckluamVjdCgpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgX2NvbnRyb2xzOiB7XG4gICAgICAgICAgICAgICAgLy8gc2xpZGVyIG1ldGhvZHNcbiAgICAgICAgICAgICAgICBzbGlkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKHRwX2luc3QsIG9iaiwgdW5pdCwgdmFsLCBtaW4sIG1heCwgc3RlcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcnRsID0gdHBfaW5zdC5fZGVmYXVsdHMuaXNSVEw7IC8vIGlmIHJ0bCBnbyAtNjAtPjAgaW5zdGVhZCBvZiAwLT42MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqLnByb3AoJ3NsaWRlJywgbnVsbCkuc2xpZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJ0bCA/IHZhbCAqIC0xIDogdmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogcnRsID8gbWF4ICogLTEgOiBtaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBydGwgPyBtaW4gKiAtMSA6IG1heCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiBzdGVwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cF9pbnN0LmNvbnRyb2wudmFsdWUodHBfaW5zdCwgJCh0aGlzKSwgdW5pdCwgcnRsID8gdWkudmFsdWUgKiAtMSA6IHVpLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRwX2luc3QuX29uVGltZUNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcDogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHBfaW5zdC5fb25TZWxlY3RIYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBmdW5jdGlvbiAodHBfaW5zdCwgb2JqLCB1bml0LCBvcHRzLCB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRwX2luc3QuX2RlZmF1bHRzLmlzUlRMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZihvcHRzKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRzID09PSAnbWluJyB8fCBvcHRzID09PSAnbWF4Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqLnNsaWRlcihvcHRzLCB2YWwgKiAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKG9iai5zbGlkZXIob3B0cykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iai5zbGlkZXIob3B0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBvcHRzLm1pbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heCA9IG9wdHMubWF4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMubWluID0gb3B0cy5tYXggPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5tYXggPSBtaW4gKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1heCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzLm1pbiA9IG1heCAqIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqLnNsaWRlcihvcHRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mKG9wdHMpID09PSAnc3RyaW5nJyAmJiB2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmouc2xpZGVyKG9wdHMsIHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iai5zbGlkZXIob3B0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0cF9pbnN0LCBvYmosIHVuaXQsIHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHBfaW5zdC5fZGVmYXVsdHMuaXNSVEwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmouc2xpZGVyKCd2YWx1ZScsIHZhbCAqIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKG9iai5zbGlkZXIoJ3ZhbHVlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmouc2xpZGVyKCd2YWx1ZScsIHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iai5zbGlkZXIoJ3ZhbHVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyBzZWxlY3QgbWV0aG9kc1xuICAgICAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAodHBfaW5zdCwgb2JqLCB1bml0LCB2YWwsIG1pbiwgbWF4LCBzdGVwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWwgPSAnPHNlbGVjdCBjbGFzcz1cInVpLXRpbWVwaWNrZXItc2VsZWN0IHVpLXN0YXRlLWRlZmF1bHQgdWktY29ybmVyLWFsbFwiIGRhdGEtdW5pdD1cIicgKyB1bml0ICsgJ1wiIGRhdGEtbWluPVwiJyArIG1pbiArICdcIiBkYXRhLW1heD1cIicgKyBtYXggKyAnXCIgZGF0YS1zdGVwPVwiJyArIHN0ZXAgKyAnXCIgYXJpYS1sYWJlbD1cInNlbGVjdCAnICsgdW5pdCArICdcIj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdCA9IHRwX2luc3QuX2RlZmF1bHRzLnBpY2tlclRpbWVGb3JtYXQgfHwgdHBfaW5zdC5fZGVmYXVsdHMudGltZUZvcm1hdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gbWluOyBpIDw9IG1heDsgaSArPSBzdGVwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIGkgKyAnXCInICsgKGkgPT09IHZhbCA/ICcgc2VsZWN0ZWQnIDogJycpICsgJz4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bml0ID09PSAnaG91cicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbCArPSAkLmRhdGVwaWNrZXIuZm9ybWF0VGltZShQcmltZUZhY2VzLnRyaW0oZm9ybWF0LnJlcGxhY2UoL1teaHQgXS9pZywgJycpKSwge2hvdXI6IGl9LCB0cF9pbnN0Ll9kZWZhdWx0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVuaXQgPT09ICdtaWxsaXNlYycgfHwgdW5pdCA9PT0gJ21pY3Jvc2VjJyB8fCBpID49IDEwKSB7IHNlbCArPSBpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7c2VsICs9ICcwJyArIGkudG9TdHJpbmcoKTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbCArPSAnPC9vcHRpb24+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWwgKz0gJzwvc2VsZWN0Pic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmNoaWxkcmVuKCdzZWxlY3QnKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNlbCkuYXBwZW5kVG8ob2JqKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cF9pbnN0Ll9vblRpbWVDaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cF9pbnN0Ll9vblNlbGVjdEhhbmRsZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cF9pbnN0Ll9hZnRlckluamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IGZ1bmN0aW9uICh0cF9pbnN0LCBvYmosIHVuaXQsIG9wdHMsIHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0ID0gb2JqLmNoaWxkcmVuKCdzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZihvcHRzKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkdC5kYXRhKG9wdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvW29wdHNdID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgeyBvID0gb3B0czsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHBfaW5zdC5jb250cm9sLmNyZWF0ZSh0cF9pbnN0LCBvYmosICR0LmRhdGEoJ3VuaXQnKSwgJHQudmFsKCksIG8ubWluPj0wID8gby5taW4gOiAkdC5kYXRhKCdtaW4nKSwgby5tYXggfHwgJHQuZGF0YSgnbWF4JyksIG8uc3RlcCB8fCAkdC5kYXRhKCdzdGVwJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodHBfaW5zdCwgb2JqLCB1bml0LCB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICR0ID0gb2JqLmNoaWxkcmVuKCdzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICR0LnZhbCh2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkdC52YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0gLy8gZW5kIF9jb250cm9sc1xuICAgIH0pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7OztBQUFBO0FBQUE7QUFHQSxLQUFDLFNBQVUsU0FBUztBQUNuQixVQUFJLE9BQU8sV0FBVyxjQUFjLE9BQU8sS0FBSztBQUMvQyxlQUFPLENBQUMsVUFBVSxXQUFXLEdBQUcs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QWEsS0FBSyxJQUFJLGVBQWU7QUFBQSxJQUNsRDtBQUVBLFFBQUksS0FBSyxJQUFJLGNBQWM7QUFDdkIsV0FBSyxJQUFJLGVBQWUsS0FBSyxJQUFJLGlCQUFpQjtBQUFBLElBQ3REO0FBQUEsRUFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxnQkFBZ0I7QUFDWixXQUFPLEtBQUssSUFBSSxXQUFXLFlBQVksRUFBRSxRQUFRLEdBQUcsS0FBSztBQUFBLEVBQzdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLFFBQVEsTUFBTTtBQUNWLFNBQUssS0FBSyxlQUFlLFdBQVcsSUFBSTtBQUFBLEVBQzVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLFVBQVU7QUFDTixXQUFPLEtBQUssS0FBSyxlQUFlLFNBQVM7QUFBQSxFQUM3QztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsU0FBUztBQUNMLFNBQUssS0FBSyxlQUFlLFFBQVE7QUFBQSxFQUNyQztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsVUFBVTtBQUNOLFNBQUssS0FBSyxlQUFlLFNBQVM7QUFBQSxFQUN0QztBQUVKOyIsCiAgIm5hbWVzIjogWyJ0cF9pbnN0IiwgImkiLCAiaCIsICJvcHRzIiwgIm8iLCAidGltZUZvcm1hdCIsICJvdmVycmlkZXMiLCAiZm5zIiwgIiQiLCAiJCIsICJpIiwgImRhdGUiLCAieWVhciIsICJ5ZWFyIiwgInRwX2luc3QiLCAib3B0cyIsICJpIl0KfQo=

import {
  require_raphael_min
} from "./chunk-FCA5FDVA.js";
import {
  BaseWidget
} from "./chunk-HGD6GSK5.js";
import {
  __toESM
} from "./chunk-YRJTWU7C.js";

// src/clock/clock.js
var import_raphael = __toESM(require_raphael_min());
var SimpleDateFormat = class {
  /**
   * A widget class should not have an explicit constructor. Instead, this initialize method is called after the widget
   * was created. You can use this method to perform any initialization that is required. For widgets that need to create
   * custom HTML on the client-side this is also the place where you should call your render method.
   * 
   * @param {Partial<TCfg>} cfg The widget configuration to be used for this widget instance. This widget
   * configuration is usually created on the server by the `javax.faces.render.Renderer` for this component.
   */
  constructor(cfg) {
    this.cfg = cfg;
    this.cfg.regex = /('[^']*')|(G+|y+|M+|w+|W+|D+|d+|F+|E+|a+|H+|k+|K+|h+|m+|s+|S+|Z+)|([a-zA-Z]+)|([^a-zA-Z']+)/;
    this.cfg.TEXT2 = 0;
    this.cfg.TEXT3 = 1;
    this.cfg.NUMBER = 2;
    this.cfg.YEAR = 3;
    this.cfg.MONTH = 4;
    this.cfg.TIMEZONE = 6;
    this.cfg.types = {
      G: this.cfg.TEXT2,
      y: this.cfg.YEAR,
      M: this.cfg.MONTH,
      w: this.cfg.NUMBER,
      W: this.cfg.NUMBER,
      D: this.cfg.NUMBER,
      d: this.cfg.NUMBER,
      F: this.cfg.NUMBER,
      E: this.cfg.TEXT3,
      a: this.cfg.TEXT2,
      H: this.cfg.NUMBER,
      k: this.cfg.NUMBER,
      K: this.cfg.NUMBER,
      h: this.cfg.NUMBER,
      m: this.cfg.NUMBER,
      s: this.cfg.NUMBER,
      S: this.cfg.NUMBER,
      Z: this.cfg.TIMEZONE
    };
    this.cfg.ONE_DAY = 24 * 60 * 60 * 1e3;
    this.cfg.ONE_WEEK = 7 * this.cfg.ONE_DAY;
    this.cfg.DEFAULT_MINIMAL_DAYS_IN_FIRST_WEEK = 1;
    var localeSettings = PrimeFaces.getLocaleSettings(this.cfg.locale);
    if (localeSettings) {
      this.cfg.monthNames = localeSettings.monthNames;
      this.cfg.dayNames = localeSettings.dayNames;
    } else {
      this.cfg.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      this.cfg.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    }
  }
  /**
   * Creates a new date object that represents midnighht of the given year, month, and day.
   * @param {number} year A year to set. `0` repesents the year `1900`, `100` the year `2000`.
   * @param {number} month A month (of the year) to set. `0` is January, `11` is `December`.
   * @param {number} day  A day (of the month) to set, in the range `1...31`.
   * @return {Date} A date for the given year, month, and day at at midnight.
   */
  newDateAtMidnight(year, month, day) {
    var d = new Date(year, month, day, 0, 0, 0);
    d.setMilliseconds(0);
    return d;
  }
  /**
   * Computes the difference between the two given dates.
   * @param {Date} date1 First input date
   * @param  {Date} date2 Second input date
   * @return {number} Time in milliseconds between the two dates (`date1-date2`).
   */
  getDifference(date1, date2) {
    return date1.getTime() - date2.getTime();
  }
  /**
   * Checks whether the first given date lies before the second given date.
   * @param {Date} date1 First input date
   * @param {Date} date2 Second input date
   * @return {boolean} `true` if `date1` lies before `date2`, or `false` otherwise.
   */
  isBefore(date1, date2) {
    return date1.getTime() < date2.getTime();
  }
  /**
   * Converts the given date to UTC time, that is, the number of milliseconds between midnight, January 1, 1970
   * Universal Coordinated Time (UTC) (or GMT) and the given date.
   * @param {Date} date Date to convert to UTC.
   * @return {number} The given date, converted to UTC time.
   */
  getUTCTime(date) {
    if (date != void 0) {
      return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    }
  }
  /**
   * Finds the difference in milliseconds between the two given date (`date1-date2`).
   * @param {Date} date1 First input date
   * @param {Date} date2 Second input date
   * @return {number} The numer of milliseconds between the two given date (`date1-date2`).
   */
  getTimeSince(date1, date2) {
    return this.getUTCTime(date1) - this.getUTCTime(date2);
  }
  /**
   * Finds closest Sunday preceding the given date. If the date is already a Sunday, that day is returned.
   * @param {Date} date Input date.
   * @return {Date} The date at midnight of the first Sunday before the given date. If the given date is already a
   * Sunday, that day is returned.
   */
  getPreviousSunday(date) {
    var midday = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0);
    var previousSunday = new Date(midday.getTime() - date.getDay() * this.cfg.ONE_DAY);
    return this.newDateAtMidnight(previousSunday.getFullYear(), previousSunday.getMonth(), previousSunday.getDate());
  }
  /**
   * Computes the ordinal index of the week of the year of the given date.
   * @param {Date} date Date to check.
   * @param {number} minimalDaysInFirstWeek Minimal number of days the first week of the year is allowed to have. If
   * the first week contains less days, the returned output is decremented by one (if you do not want to count, say,
   * 2 days, as week).
   * @return {number} The week of the year of the given date, starting at `0`.
   */
  getWeekInYear(date, minimalDaysInFirstWeek) {
    var previousSunday = this.getPreviousSunday(date);
    var startOfYear = this.newDateAtMidnight(date.getFullYear(), 0, 1);
    var numberOfSundays = this.isBefore(previousSunday, startOfYear) ? 0 : 1 + Math.floor(this.getTimeSince(previousSunday, startOfYear) / this.cfg.ONE_WEEK);
    var numberOfDaysInFirstWeek = 7 - startOfYear.getDay();
    var weekInYear = numberOfSundays;
    if (numberOfDaysInFirstWeek < minimalDaysInFirstWeek) {
      weekInYear--;
    }
    return weekInYear;
  }
  /**
   * Computes the ordinal index of the week of the month of the given date.
   * @param {Date} date Date with a month to check.
   * @param {number} minimalDaysInFirstWeek Minimal number of days the first week of the month is allowed to have. If
   * the first week contains less days, the returned output is decremented by one (if you do not want to count, say,
   * 2 days, as week).
   * @return {number} The week of the month of the given date, starting at `0`.
   */
  getWeekInMonth(date, minimalDaysInFirstWeek) {
    var previousSunday = this.getPreviousSunday(date);
    var startOfMonth = this.newDateAtMidnight(date.getFullYear(), date.getMonth(), 1);
    var numberOfSundays = this.isBefore(previousSunday, startOfMonth) ? 0 : 1 + Math.floor(this.getTimeSince(previousSunday, startOfMonth) / this.cfg.ONE_WEEK);
    var numberOfDaysInFirstWeek = 7 - startOfMonth.getDay();
    var weekInMonth = numberOfSundays;
    if (numberOfDaysInFirstWeek >= minimalDaysInFirstWeek) {
      weekInMonth++;
    }
    return weekInMonth;
  }
  /**
   * Computes the ordinal index of the given day in the given year.
   * @param {Date} date A day to check.
   * @return {number} The ordinal index of the given day relative to the beginning of the year, starting at `1`.
   */
  getDayInYear(date) {
    var startOfYear = this.newDateAtMidnight(date.getFullYear(), 0, 1);
    return 1 + Math.floor(this.getTimeSince(date, startOfYear) / this.cfg.ONE_DAY);
  }
  /**
   * Finds the currently configured value of how many days a week must have at least to be considered a "full" week.
   * Weeks with less that that number of days are disregarded in `getWeekInMonth` and `getWeekInYear`.
   * @param {unknown} days Unused.
   * @return {number} The minimal number of days a week is allowed to have to be considered a "full" week. 
   */
  getMinimalDaysInFirstWeek(days) {
    return this.cfg.minimalDaysInFirstWeek ? this.cfg.DEFAULT_MINIMAL_DAYS_IN_FIRST_WEEK : this.cfg.minimalDaysInFirstWeek;
  }
  /**
   * Format sthe given given according to the pattern of the current widget configuration.
   * @param {Date} date A date to format
   * @return {string} The given date as a formatted string.
   */
  format(date) {
    var formattedString = "";
    var result;
    var padWithZeroes = function(str, len) {
      while (str.length < len) {
        str = "0" + str;
      }
      return str;
    };
    var formatText = function(data, numberOfLetters2, minLength) {
      return numberOfLetters2 >= 4 ? data : data.substr(0, Math.max(minLength, numberOfLetters2));
    };
    var formatNumber = function(data, numberOfLetters2) {
      var dataString2 = "" + data;
      return padWithZeroes(dataString2, numberOfLetters2);
    };
    var searchString = this.cfg.pattern;
    while (result = this.cfg.regex.exec(searchString)) {
      var matchedString = result[0];
      var quotedString = result[1];
      var patternLetters = result[2];
      var otherLetters = result[3];
      var otherCharacters = result[4];
      if (quotedString) {
        if (quotedString == "''") {
          formattedString += "'";
        } else {
          formattedString += quotedString.substring(1, quotedString.length - 1);
        }
      } else if (otherLetters) {
      } else if (otherCharacters) {
        formattedString += otherCharacters;
      } else if (patternLetters) {
        var patternLetter = patternLetters.charAt(0);
        var numberOfLetters = patternLetters.length;
        var rawData = "";
        switch (patternLetter) {
          case "G":
            rawData = "AD";
            break;
          case "y":
            rawData = date.getFullYear();
            break;
          case "M":
            rawData = date.getMonth();
            break;
          case "w":
            rawData = this.getWeekInYear(date, this.getMinimalDaysInFirstWeek());
            break;
          case "W":
            rawData = this.getWeekInMonth(date, this.getMinimalDaysInFirstWeek());
            break;
          case "D":
            rawData = this.getDayInYear(date);
            break;
          case "d":
            rawData = date.getDate();
            break;
          case "F":
            rawData = 1 + Math.floor((date.getDate() - 1) / 7);
            break;
          case "E":
            rawData = this.cfg.dayNames[date.getDay()];
            break;
          case "a":
            rawData = date.getHours() >= 12 ? "PM" : "AM";
            break;
          case "H":
            rawData = date.getHours();
            break;
          case "k":
            rawData = date.getHours() || 24;
            break;
          case "K":
            rawData = date.getHours() % 12;
            break;
          case "h":
            rawData = date.getHours() % 12 || 12;
            break;
          case "m":
            rawData = date.getMinutes();
            break;
          case "s":
            rawData = date.getSeconds();
            break;
          case "S":
            rawData = date.getMilliseconds();
            break;
          case "Z":
            rawData = date.getTimezoneOffset();
            break;
        }
        switch (this.cfg.types[patternLetter]) {
          case this.cfg.TEXT2:
            formattedString += formatText(rawData, numberOfLetters, 2);
            break;
          case this.cfg.TEXT3:
            formattedString += formatText(rawData, numberOfLetters, 3);
            break;
          case this.cfg.NUMBER:
            formattedString += formatNumber(rawData, numberOfLetters);
            break;
          case this.cfg.YEAR:
            if (numberOfLetters <= 3) {
              var dataString = "" + rawData;
              formattedString += dataString.substr(2, 2);
            } else {
              formattedString += formatNumber(rawData, numberOfLetters);
            }
            break;
          case this.cfg.MONTH:
            if (numberOfLetters >= 3) {
              formattedString += formatText(this.cfg.monthNames[rawData], numberOfLetters, numberOfLetters);
            } else {
              formattedString += formatNumber(rawData + 1, numberOfLetters);
            }
            break;
          case this.cfg.TIMEZONE:
            var isPositive = rawData > 0;
            var prefix = isPositive ? "-" : "+";
            var absData = Math.abs(rawData);
            var hours = "" + Math.floor(absData / 60);
            hours = padWithZeroes(hours, 2);
            var minutes = "" + absData % 60;
            minutes = padWithZeroes(minutes, 2);
            formattedString += prefix + hours + minutes;
            break;
        }
      }
      searchString = searchString.substr(result.index + result[0].length);
    }
    return formattedString;
  }
};
var Clock = class extends BaseWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    this.cfg.pattern = this.cfg.pattern || "MM/dd/yyyy HH:mm:ss";
    this.cfg.dateFormat = new SimpleDateFormat({
      pattern: this.cfg.pattern,
      locale: this.cfg.locale
    });
    this.current = this.isClient() ? /* @__PURE__ */ new Date() : new Date(this.cfg.value);
    var $this = this;
    if (this.isAnalogClock()) {
      this.interval = setInterval(function() {
        $this.update();
      }, 1e3);
      this.draw();
    } else {
      this.start();
    }
    if (!this.isClient() && this.cfg.autoSync) {
      setInterval(function() {
        $this.sync();
      }, this.cfg.syncInterval);
    }
  }
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  refresh(cfg) {
    clearInterval(this.interval);
    super.refresh(cfg);
  }
  /**
   * Checks whether the time of the client is used for this clock.
   * @return {boolean} `true` if the time of the client is used, or `false` if the time of the server is used.
   */
  isClient() {
    return this.cfg.mode === "client";
  }
  /**
   * Starts this clock if it is not already running.
   */
  start() {
    var $this = this;
    this.interval = setInterval(function() {
      $this.updateOutput();
    }, 1e3);
  }
  /**
   * Stops this clock it is currently running.
   */
  stop() {
    clearInterval(this.interval);
  }
  /**
   * Called after a tick of the clock, updates the visual display of this clock.
   * @private
   */
  updateOutput() {
    this.current.setSeconds(this.current.getSeconds() + 1);
    this.jq.text(this.cfg.dateFormat.format(this.current));
  }
  /**
   * Synchronizes this clock so that it shows the current time. This will trigger an AJAX update of this component.
   */
  sync() {
    if (!this.isAnalogClock()) {
      this.stop();
    }
    var $this = this, options = {
      source: this.id,
      process: this.id,
      async: true,
      global: false,
      params: [{
        name: this.id + "_sync",
        value: true
      }],
      oncomplete: function(xhr, status, args, data) {
        if ($this.isAnalogClock()) {
          $this.current = new Date(args.datetime);
        } else {
          $this.stop();
          $this.current = new Date(args.datetime);
          $this.jq.text($this.cfg.dateFormat.format($this.current));
          $this.start();
        }
      }
    };
    PrimeFaces.ajax.Request.handle(options);
  }
  /**
   * Draws this clock according the the current widget configuation.
   * @private
   */
  draw() {
    this.dimensions = this.getDimensions(this.jq.width());
    this.canvas = (0, import_raphael.default)(this.id, this.dimensions.size, this.dimensions.size);
    this.clock = this.canvas.circle(this.dimensions.half, this.dimensions.half, this.dimensions.clock_width);
    this.draw_hour_signs();
    this.draw_hands();
    this.pin = this.canvas.circle(this.dimensions.half, this.dimensions.half, this.dimensions.pin_width);
    this.clock.attr({
      "fill": "#ffffff",
      "stroke": "#4A4A4A",
      "stroke-width": "3"
    });
    for (var i = 0; i < this.hour_sign.length; i++) {
      this.hour_sign[i].attr({
        "stroke": "#000000",
        "stroke-width": this.dimensions.hour_sign_stroke_width
      });
    }
    this.hour_hand.attr({
      "stroke": "#4A4A4A",
      "stroke-width": this.dimensions.hour_hand_stroke_width
    });
    this.minute_hand.attr({
      "stroke": "#4A4A4A",
      "stroke-width": this.dimensions.minute_hand_stroke_width
    });
    this.second_hand.attr({
      "stroke": "#4A4A4A",
      "stroke-width": this.dimensions.second_hand_stroke_width
    });
    this.pin.attr({
      "fill": "#F58503"
    });
    this.update();
  }
  /**
   * Draws the hour marks for the analog clock.
   * @private
   */
  draw_hour_signs() {
    this.hour_sign = [];
    for (var i = 0; i < 12; i++) {
      (function(i2, that) {
        var start_x = that.dimensions.half + Math.round(that.dimensions.hour_sign_min_size * Math.cos(30 * i2 * Math.PI / 180));
        var start_y = that.dimensions.half + Math.round(that.dimensions.hour_sign_min_size * Math.sin(30 * i2 * Math.PI / 180));
        var end_x = that.dimensions.half + Math.round(that.dimensions.hour_sign_max_size * Math.cos(30 * i2 * Math.PI / 180));
        var end_y = that.dimensions.half + Math.round(that.dimensions.hour_sign_max_size * Math.sin(30 * i2 * Math.PI / 180));
        that.hour_sign.push(that.canvas.path("M" + start_x + " " + start_y + "L" + end_x + " " + end_y));
      })(i, this);
    }
  }
  /**
   * Draws the clock hands for the analog clock.
   * @private
   */
  draw_hands() {
    this.hour_hand = this.canvas.path("M" + this.dimensions.half + " " + this.dimensions.half + "L" + this.dimensions.half + " " + this.dimensions.hour_hand_start_position);
    this.minute_hand = this.canvas.path("M" + this.dimensions.half + " " + this.dimensions.half + "L" + this.dimensions.half + " " + this.dimensions.minute_hand_start_position);
    this.second_hand = this.canvas.path("M" + this.dimensions.half + " " + this.dimensions.half + "L" + this.dimensions.half + " " + this.dimensions.second_hand_start_position);
  }
  /**
   * Called each click of the clock, animates the clock hands.
   * @private
   */
  update() {
    this.hour_hand.animate({ transform: "R" + (30 * this.current.getHours() + this.current.getMinutes() / 2.5) + "," + this.dimensions.half + "," + this.dimensions.half }, 1);
    this.minute_hand.animate({ transform: "R" + 6 * this.current.getMinutes() + "," + this.dimensions.half + "," + this.dimensions.half }, 1);
    this.second_hand.animate({ transform: "R" + 6 * this.current.getSeconds() + "," + this.dimensions.half + "," + this.dimensions.half }, 1);
    this.current.setSeconds(this.current.getSeconds() + 1);
  }
  /**
   * Computes the width of the individual elements of the analog clock for the given target width.
   * @private
   * @param {number} size Target width of the clock in pixels
   * @return {PrimeFaces.widget.Clock.Dimensions} Calculated sizes for the analog clock elements.
   */
  getDimensions(size) {
    return {
      "size": size,
      "half": Math.floor(size / 2),
      "clock_width": Math.floor(size * 47.5 / 100),
      "hour_sign_min_size": Math.floor(size * 40 / 100),
      "hour_sign_max_size": Math.floor(size * 45 / 100),
      "hour_sign_stroke_width": Math.floor(size * 0.5 / 100) || 1,
      "hour_hand_start_position": Math.floor(size / 4),
      "hour_hand_stroke_width": Math.floor(size * 3 / 100) || 1,
      "minute_hand_start_position": Math.floor(size / 6),
      "minute_hand_stroke_width": Math.floor(size * 2 / 100) || 1,
      "second_hand_start_position": Math.floor(size * 12.5 / 100),
      "second_hand_stroke_width": Math.floor(size * 1 / 100) || 1,
      "pin_width": Math.floor(size * 2.5 / 100)
    };
  }
  /**
   * Checks whether this clock is displayed as an analog or digital clock.
   * @return {boolean} `true` if this clock is displayed as an analog clock, or `false` if it is displayed in an
   * INPUT field.
   */
  isAnalogClock() {
    return this.cfg.displayMode === "analog";
  }
};
PrimeFaces.widget.SimpleDateFormat = SimpleDateFormat;
export {
  Clock
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2Nsb2NrL2Nsb2NrLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmFwaGFlbCBmcm9tIFwicmFwaGFlbFwiO1xuXG5pbXBvcnQgeyBCYXNlV2lkZ2V0IH0gZnJvbSBcIi4uL2NvcmUvY29yZS53aWRnZXQuanNcIjtcblxuLyoqXG4gKiBDb2RlIHBvcnRlZCBmcm9tIFRpbSBEb3duJ3MgaHR0cDovL3d3dy50aW1kb3duLmNvLnVrL2NvZGUvc2ltcGxlZGF0ZWZvcm1hdC5waHBcbiAqIFxuICogSGVscGVyIGNsYXNzIGZvciB3b3JraW5nIHdpdGggYERhdGVgcyBhbmQgZGF0ZSBmb3JtYXRzLlxuICogXG4gKiBAdGVtcGxhdGUge1ByaW1lRmFjZXMud2lkZ2V0LlNpbXBsZURhdGVGb3JtYXRDZmd9IFtUQ2ZnPVByaW1lRmFjZXMud2lkZ2V0LlNpbXBsZURhdGVGb3JtYXRDZmddIFR5cGUgb2YgdGhlIGNvbmZpZ3VyYXRpb25cbiAqIG9iamVjdCBmb3IgdGhpcyB3aWRnZXQuXG4gKiBAaW50ZXJmYWNlIHtQcmltZUZhY2VzLndpZGdldC5TaW1wbGVEYXRlRm9ybWF0Q2ZnfSBjZmcgVGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZVxuICoge0BsaW5rICBTaW1wbGVEYXRlRm9ybWF0fCBTaW1wbGVEYXRlRm9ybWF0IHdpZGdldH0uIFlvdSBjYW4gYWNjZXNzIHRoaXMgY29uZmlndXJhdGlvbiB2aWFcbiAqIHtAbGluayBQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0LmNmZ3xCYXNlV2lkZ2V0LmNmZ30uIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBjb25maWd1cmF0aW9uIGlzIHVzdWFsbHkgbWVhbnQgdG8gYmVcbiAqIHJlYWQtb25seSBhbmQgc2hvdWxkIG5vdCBiZSBtb2RpZmllZC5cbiAqIFxuICogQHByb3Age1ByaW1lRmFjZXMuUGFydGlhbFdpZGdldENmZzxQcmltZUZhY2VzLndpZGdldC5TaW1wbGVEYXRlRm9ybWF0Q2ZnPn0gY2ZnIFRoZSBjb25maWd1cmF0aW9uIG9mIHRoaXMgd2lkZ2V0XG4gKiBpbnN0YW5jZS4gUGxlYXNlIG5vdGUgdGhhdCBubyBwcm9wZXJ0eSBpcyBndWFyYW50ZWVkIHRvIGJlIHByZXNlbnQsIHlvdSBzaG91bGQgYWx3YXlzIGNoZWNrIGZvciBgdW5kZWZpbmVkYCBiZWZvcmVcbiAqIGFjY2Vzc2luZyBhIHByb3BlcnR5LiBUaGlzIGlzIHBhcnRseSBiZWNhdXNlIHRoZSB2YWx1ZSBvZiBhIHByb3BlcnR5IGlzIG5vdCB0cmFuc21pdHRlZCBmcm9tIHRoZSBzZXJ2ZXIgdG8gdGhlIGNsaWVudFxuICogd2hlbiBpdCBlcXVhbHMgdGhlIGRlZmF1bHQuXG4gKiBcbiAqIEBwcm9wIHtzdHJpbmdbXX0gY2ZnLmRheU5hbWVzIExvY2FsaXplZCBkYXkgbmFtZXMgKGBNb25kYXlgLCBgVHVlc2RheWAgZXRjLilcbiAqIEBwcm9wIHtzdHJpbmcgfCBzdHJpbmdbXX0gY2ZnLmlkIFRoZSBjbGllbnQtc2lkZSBJRCBvZiB0aGlzIHdpZGdldCwgd2l0aCBhbGwgcGFyZW50IG5hbWluZyBjb250YWluZXJzLCBzdWNoIGFzXG4gKiBgbXlGb3JtOm15V2lkZ2V0YC4gVGhpcyBpcyBhbHNvIHRoZSBJRCBvZiB0aGUgY29udGFpbmVyIEhUTUwgZWxlbWVudCBmb3IgdGhpcyB3aWRnZXQuIEluIGNhc2UgdGhlIHdpZGdldCBuZWVkc1xuICogbXVsdGlwbGUgY29udGFpbmVyIGVsZW1lbnRzIChzdWNoIGFzIHtAbGluayBQYWdpbmF0b3J9KSwgdGhpcyBtYXkgYWxzbyBiZSBhbiBhcnJheSBpZiBJRHMuXG4gKiBAcHJvcCB7c3RyaW5nfSBjZmcubG9jYWxlIFRoZSBsb2NhbGUgZm9yIGZvcm1hdHRpbmcgZGF0ZXMuIFxuICogQHByb3Age251bWJlcn0gY2ZnLm1pbmltYWxEYXlzSW5GaXJzdFdlZWsgTWluaW1hbCBudW1iZXIgb2YgZGF5cyBhIHdlZWsgaXMgYWxsb3dlZCB0byBoYXZlIHRvIGJlIGNvbnNpZGVyZWQgYSBcImZ1bGxcIlxuICogd2VlaywgdXNlZCBieSBgZ2V0V2Vla0luTW9udGhgIGluIGBnZXRXZWVrSW5ZZWFyYC5cbiAqIEBwcm9wIHtzdHJpbmdbXX0gY2ZnLm1vbnRoTmFtZXMgTG9jYWxpemVkIG1vbnRoIG5hbWVzIChgSmFudWFyeWAsIGBGZWJydWFyeWAgZXRjLilcbiAqIEBwcm9wIHtSZWdFeHB9IGNmZy5yZWdleCBBIHJlZ2V4IGZvciBzcGxpdHRpbmcgYSBkYXRlIGZvcm1hdCBpbnRvIGl0cyBjb21wb25lbnRzLlxuICogQHByb3Age1JlY29yZDxzdHJpbmcsIG51bWJlcj59IGNmZy50eXBlcyBPYmplY3Qgd2l0aCB0aGUgZGlmZmVyZW50IGtleXdvcmRzIHVzZWQgYnkgdGhlIGRhdGUgZm9ybWF0LlxuICogQHByb3Age3N0cmluZ30gY2ZnLndpZGdldFZhciBUaGUgbmFtZSBvZiB0aGUgd2lkZ2V0IHZhcmlhYmxlcyBvZiB0aGlzIHdpZGdldC4gVGhlIHdpZGdldCB2YXJpYWJsZSBjYW4gYmUgdXNlZCB0b1xuICogYWNjZXNzIGEgd2lkZ2V0IGluc3RhbmNlIGJ5IGNhbGxpbmcgYFBGKCdteVdpZGdldFZhcicpYC5cbiAqL1xuY2xhc3MgU2ltcGxlRGF0ZUZvcm1hdCB7XG5cbiAgICAvKipcbiAgICAgKiBBIHdpZGdldCBjbGFzcyBzaG91bGQgbm90IGhhdmUgYW4gZXhwbGljaXQgY29uc3RydWN0b3IuIEluc3RlYWQsIHRoaXMgaW5pdGlhbGl6ZSBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIHRoZSB3aWRnZXRcbiAgICAgKiB3YXMgY3JlYXRlZC4gWW91IGNhbiB1c2UgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBhbnkgaW5pdGlhbGl6YXRpb24gdGhhdCBpcyByZXF1aXJlZC4gRm9yIHdpZGdldHMgdGhhdCBuZWVkIHRvIGNyZWF0ZVxuICAgICAqIGN1c3RvbSBIVE1MIG9uIHRoZSBjbGllbnQtc2lkZSB0aGlzIGlzIGFsc28gdGhlIHBsYWNlIHdoZXJlIHlvdSBzaG91bGQgY2FsbCB5b3VyIHJlbmRlciBtZXRob2QuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtQYXJ0aWFsPFRDZmc+fSBjZmcgVGhlIHdpZGdldCBjb25maWd1cmF0aW9uIHRvIGJlIHVzZWQgZm9yIHRoaXMgd2lkZ2V0IGluc3RhbmNlLiBUaGlzIHdpZGdldFxuICAgICAqIGNvbmZpZ3VyYXRpb24gaXMgdXN1YWxseSBjcmVhdGVkIG9uIHRoZSBzZXJ2ZXIgYnkgdGhlIGBqYXZheC5mYWNlcy5yZW5kZXIuUmVuZGVyZXJgIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjZmcpIHtcbiAgICAgICAgdGhpcy5jZmcgPSBjZmc7XG4gICAgICAgIHRoaXMuY2ZnLnJlZ2V4ID0gLygnW14nXSonKXwoRyt8eSt8TSt8dyt8Vyt8RCt8ZCt8Rit8RSt8YSt8SCt8ayt8Syt8aCt8bSt8cyt8Uyt8WispfChbYS16QS1aXSspfChbXmEtekEtWiddKykvXG4gICAgICAgIHRoaXMuY2ZnLlRFWFQyID0gMDtcbiAgICAgICAgdGhpcy5jZmcuVEVYVDMgPSAxO1xuICAgICAgICB0aGlzLmNmZy5OVU1CRVIgPSAyO1xuICAgICAgICB0aGlzLmNmZy5ZRUFSID0gMztcbiAgICAgICAgdGhpcy5jZmcuTU9OVEggPSA0O1xuICAgICAgICB0aGlzLmNmZy5USU1FWk9ORSA9IDY7XG4gICAgICAgIHRoaXMuY2ZnLnR5cGVzID0ge1xuICAgICAgICAgICAgRyA6IHRoaXMuY2ZnLlRFWFQyLFxuICAgICAgICAgICAgeSA6IHRoaXMuY2ZnLllFQVIsXG4gICAgICAgICAgICBNIDogdGhpcy5jZmcuTU9OVEgsXG4gICAgICAgICAgICB3IDogdGhpcy5jZmcuTlVNQkVSLFxuICAgICAgICAgICAgVyA6IHRoaXMuY2ZnLk5VTUJFUixcbiAgICAgICAgICAgIEQgOiB0aGlzLmNmZy5OVU1CRVIsXG4gICAgICAgICAgICBkIDogdGhpcy5jZmcuTlVNQkVSLFxuICAgICAgICAgICAgRiA6IHRoaXMuY2ZnLk5VTUJFUixcbiAgICAgICAgICAgIEUgOiB0aGlzLmNmZy5URVhUMyxcbiAgICAgICAgICAgIGEgOiB0aGlzLmNmZy5URVhUMixcbiAgICAgICAgICAgIEggOiB0aGlzLmNmZy5OVU1CRVIsXG4gICAgICAgICAgICBrIDogdGhpcy5jZmcuTlVNQkVSLFxuICAgICAgICAgICAgSyA6IHRoaXMuY2ZnLk5VTUJFUixcbiAgICAgICAgICAgIGggOiB0aGlzLmNmZy5OVU1CRVIsXG4gICAgICAgICAgICBtIDogdGhpcy5jZmcuTlVNQkVSLFxuICAgICAgICAgICAgcyA6IHRoaXMuY2ZnLk5VTUJFUixcbiAgICAgICAgICAgIFMgOiB0aGlzLmNmZy5OVU1CRVIsXG4gICAgICAgICAgICBaIDogdGhpcy5jZmcuVElNRVpPTkVcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNmZy5PTkVfREFZID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgICAgICAgdGhpcy5jZmcuT05FX1dFRUsgPSA3ICogdGhpcy5jZmcuT05FX0RBWTtcbiAgICAgICAgdGhpcy5jZmcuREVGQVVMVF9NSU5JTUFMX0RBWVNfSU5fRklSU1RfV0VFSyA9IDE7XG5cbiAgICAgICAgdmFyIGxvY2FsZVNldHRpbmdzID0gUHJpbWVGYWNlcy5nZXRMb2NhbGVTZXR0aW5ncyh0aGlzLmNmZy5sb2NhbGUpO1xuICAgICAgICBpZihsb2NhbGVTZXR0aW5ncykge1xuICAgICAgICAgICAgdGhpcy5jZmcubW9udGhOYW1lcyA9IGxvY2FsZVNldHRpbmdzLm1vbnRoTmFtZXM7XG4gICAgICAgICAgICB0aGlzLmNmZy5kYXlOYW1lcyA9IGxvY2FsZVNldHRpbmdzLmRheU5hbWVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jZmcubW9udGhOYW1lcyA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdO1xuICAgICAgICAgICAgdGhpcy5jZmcuZGF5TmFtZXMgPSBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgZGF0ZSBvYmplY3QgdGhhdCByZXByZXNlbnRzIG1pZG5pZ2hodCBvZiB0aGUgZ2l2ZW4geWVhciwgbW9udGgsIGFuZCBkYXkuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHllYXIgQSB5ZWFyIHRvIHNldC4gYDBgIHJlcGVzZW50cyB0aGUgeWVhciBgMTkwMGAsIGAxMDBgIHRoZSB5ZWFyIGAyMDAwYC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbW9udGggQSBtb250aCAob2YgdGhlIHllYXIpIHRvIHNldC4gYDBgIGlzIEphbnVhcnksIGAxMWAgaXMgYERlY2VtYmVyYC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGF5ICBBIGRheSAob2YgdGhlIG1vbnRoKSB0byBzZXQsIGluIHRoZSByYW5nZSBgMS4uLjMxYC5cbiAgICAgKiBAcmV0dXJuIHtEYXRlfSBBIGRhdGUgZm9yIHRoZSBnaXZlbiB5ZWFyLCBtb250aCwgYW5kIGRheSBhdCBhdCBtaWRuaWdodC5cbiAgICAgKi9cbiAgICBuZXdEYXRlQXRNaWRuaWdodCh5ZWFyLCBtb250aCwgZGF5KSB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSwgMCwgMCwgMCk7XG4gICAgICAgIGQuc2V0TWlsbGlzZWNvbmRzKDApO1xuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB0d28gZ2l2ZW4gZGF0ZXMuXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlMSBGaXJzdCBpbnB1dCBkYXRlXG4gICAgICogQHBhcmFtICB7RGF0ZX0gZGF0ZTIgU2Vjb25kIGlucHV0IGRhdGVcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRpbWUgaW4gbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIHR3byBkYXRlcyAoYGRhdGUxLWRhdGUyYCkuXG4gICAgICovXG4gICAgZ2V0RGlmZmVyZW5jZShkYXRlMSwgZGF0ZTIpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUxLmdldFRpbWUoKSAtIGRhdGUyLmdldFRpbWUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZmlyc3QgZ2l2ZW4gZGF0ZSBsaWVzIGJlZm9yZSB0aGUgc2Vjb25kIGdpdmVuIGRhdGUuXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlMSBGaXJzdCBpbnB1dCBkYXRlXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlMiBTZWNvbmQgaW5wdXQgZGF0ZVxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiBgZGF0ZTFgIGxpZXMgYmVmb3JlIGBkYXRlMmAsIG9yIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGlzQmVmb3JlKGRhdGUxLCBkYXRlMikge1xuICAgICAgICByZXR1cm4gZGF0ZTEuZ2V0VGltZSgpIDwgZGF0ZTIuZ2V0VGltZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHRoZSBnaXZlbiBkYXRlIHRvIFVUQyB0aW1lLCB0aGF0IGlzLCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIG1pZG5pZ2h0LCBKYW51YXJ5IDEsIDE5NzBcbiAgICAgKiBVbml2ZXJzYWwgQ29vcmRpbmF0ZWQgVGltZSAoVVRDKSAob3IgR01UKSBhbmQgdGhlIGdpdmVuIGRhdGUuXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlIERhdGUgdG8gY29udmVydCB0byBVVEMuXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgZ2l2ZW4gZGF0ZSwgY29udmVydGVkIHRvIFVUQyB0aW1lLlxuICAgICAqL1xuICAgIGdldFVUQ1RpbWUoZGF0ZSkge1xuICAgICAgICBpZihkYXRlICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICByZXR1cm4gRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIHRoZSBkaWZmZXJlbmNlIGluIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSB0d28gZ2l2ZW4gZGF0ZSAoYGRhdGUxLWRhdGUyYCkuXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlMSBGaXJzdCBpbnB1dCBkYXRlXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlMiBTZWNvbmQgaW5wdXQgZGF0ZVxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSB0d28gZ2l2ZW4gZGF0ZSAoYGRhdGUxLWRhdGUyYCkuXG4gICAgICovXG4gICAgZ2V0VGltZVNpbmNlKGRhdGUxLCBkYXRlMikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRVVENUaW1lKGRhdGUxKSAtIHRoaXMuZ2V0VVRDVGltZShkYXRlMik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgY2xvc2VzdCBTdW5kYXkgcHJlY2VkaW5nIHRoZSBnaXZlbiBkYXRlLiBJZiB0aGUgZGF0ZSBpcyBhbHJlYWR5IGEgU3VuZGF5LCB0aGF0IGRheSBpcyByZXR1cm5lZC5cbiAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUgSW5wdXQgZGF0ZS5cbiAgICAgKiBAcmV0dXJuIHtEYXRlfSBUaGUgZGF0ZSBhdCBtaWRuaWdodCBvZiB0aGUgZmlyc3QgU3VuZGF5IGJlZm9yZSB0aGUgZ2l2ZW4gZGF0ZS4gSWYgdGhlIGdpdmVuIGRhdGUgaXMgYWxyZWFkeSBhXG4gICAgICogU3VuZGF5LCB0aGF0IGRheSBpcyByZXR1cm5lZC5cbiAgICAgKi9cbiAgICBnZXRQcmV2aW91c1N1bmRheShkYXRlKSB7XG4gICAgICAgIC8vIFVzaW5nIG1pZGRheSBhdm9pZHMgYW55IHBvc3NpYmlsaXR5IG9mIERTVCBtZXNzaW5nIHRoaW5ncyB1cFxuICAgICAgICB2YXIgbWlkZGF5ID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCAxMiwgMCwgMCk7XG4gICAgICAgIHZhciBwcmV2aW91c1N1bmRheSA9IG5ldyBEYXRlKG1pZGRheS5nZXRUaW1lKCkgLSBkYXRlLmdldERheSgpICogdGhpcy5jZmcuT05FX0RBWSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubmV3RGF0ZUF0TWlkbmlnaHQocHJldmlvdXNTdW5kYXkuZ2V0RnVsbFllYXIoKSwgcHJldmlvdXNTdW5kYXkuZ2V0TW9udGgoKSwgcHJldmlvdXNTdW5kYXkuZ2V0RGF0ZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgb3JkaW5hbCBpbmRleCBvZiB0aGUgd2VlayBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUgRGF0ZSB0byBjaGVjay5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluaW1hbERheXNJbkZpcnN0V2VlayBNaW5pbWFsIG51bWJlciBvZiBkYXlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyIGlzIGFsbG93ZWQgdG8gaGF2ZS4gSWZcbiAgICAgKiB0aGUgZmlyc3Qgd2VlayBjb250YWlucyBsZXNzIGRheXMsIHRoZSByZXR1cm5lZCBvdXRwdXQgaXMgZGVjcmVtZW50ZWQgYnkgb25lIChpZiB5b3UgZG8gbm90IHdhbnQgdG8gY291bnQsIHNheSxcbiAgICAgKiAyIGRheXMsIGFzIHdlZWspLlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIHdlZWsgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUsIHN0YXJ0aW5nIGF0IGAwYC5cbiAgICAgKi9cbiAgICBnZXRXZWVrSW5ZZWFyKGRhdGUsIG1pbmltYWxEYXlzSW5GaXJzdFdlZWspIHtcbiAgICAgICAgdmFyIHByZXZpb3VzU3VuZGF5ID0gdGhpcy5nZXRQcmV2aW91c1N1bmRheShkYXRlKTtcbiAgICAgICAgdmFyIHN0YXJ0T2ZZZWFyID0gdGhpcy5uZXdEYXRlQXRNaWRuaWdodChkYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xuICAgICAgICB2YXIgbnVtYmVyT2ZTdW5kYXlzID0gdGhpcy5pc0JlZm9yZShwcmV2aW91c1N1bmRheSwgc3RhcnRPZlllYXIpID8gMCA6IDEgKyBNYXRoLmZsb29yKHRoaXMuZ2V0VGltZVNpbmNlKHByZXZpb3VzU3VuZGF5LHN0YXJ0T2ZZZWFyKSAvIHRoaXMuY2ZnLk9ORV9XRUVLKTtcbiAgICAgICAgdmFyIG51bWJlck9mRGF5c0luRmlyc3RXZWVrID0gIDcgLSBzdGFydE9mWWVhci5nZXREYXkoKTtcbiAgICAgICAgdmFyIHdlZWtJblllYXIgPSBudW1iZXJPZlN1bmRheXM7XG4gICAgICAgIGlmIChudW1iZXJPZkRheXNJbkZpcnN0V2VlayA8IG1pbmltYWxEYXlzSW5GaXJzdFdlZWspIHtcbiAgICAgICAgICAgIHdlZWtJblllYXItLTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB3ZWVrSW5ZZWFyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBvcmRpbmFsIGluZGV4IG9mIHRoZSB3ZWVrIG9mIHRoZSBtb250aCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUgRGF0ZSB3aXRoIGEgbW9udGggdG8gY2hlY2suXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbmltYWxEYXlzSW5GaXJzdFdlZWsgTWluaW1hbCBudW1iZXIgb2YgZGF5cyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgbW9udGggaXMgYWxsb3dlZCB0byBoYXZlLiBJZlxuICAgICAqIHRoZSBmaXJzdCB3ZWVrIGNvbnRhaW5zIGxlc3MgZGF5cywgdGhlIHJldHVybmVkIG91dHB1dCBpcyBkZWNyZW1lbnRlZCBieSBvbmUgKGlmIHlvdSBkbyBub3Qgd2FudCB0byBjb3VudCwgc2F5LFxuICAgICAqIDIgZGF5cywgYXMgd2VlaykuXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgd2VlayBvZiB0aGUgbW9udGggb2YgdGhlIGdpdmVuIGRhdGUsIHN0YXJ0aW5nIGF0IGAwYC5cbiAgICAgKi9cbiAgICBnZXRXZWVrSW5Nb250aChkYXRlLCBtaW5pbWFsRGF5c0luRmlyc3RXZWVrKSB7XG4gICAgICAgIHZhciBwcmV2aW91c1N1bmRheSA9IHRoaXMuZ2V0UHJldmlvdXNTdW5kYXkoZGF0ZSk7XG4gICAgICAgIHZhciBzdGFydE9mTW9udGggPSB0aGlzLm5ld0RhdGVBdE1pZG5pZ2h0KGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKTtcbiAgICAgICAgdmFyIG51bWJlck9mU3VuZGF5cyA9IHRoaXMuaXNCZWZvcmUocHJldmlvdXNTdW5kYXksc3RhcnRPZk1vbnRoKSA/IDAgOiAxICsgTWF0aC5mbG9vcigodGhpcy5nZXRUaW1lU2luY2UocHJldmlvdXNTdW5kYXksIHN0YXJ0T2ZNb250aCkpIC8gdGhpcy5jZmcuT05FX1dFRUspO1xuICAgICAgICB2YXIgbnVtYmVyT2ZEYXlzSW5GaXJzdFdlZWsgPSAgNyAtIHN0YXJ0T2ZNb250aC5nZXREYXkoKTtcbiAgICAgICAgdmFyIHdlZWtJbk1vbnRoID0gbnVtYmVyT2ZTdW5kYXlzO1xuICAgICAgICBpZiAobnVtYmVyT2ZEYXlzSW5GaXJzdFdlZWsgPj0gbWluaW1hbERheXNJbkZpcnN0V2Vlaykge1xuICAgICAgICAgICAgd2Vla0luTW9udGgrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB3ZWVrSW5Nb250aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgb3JkaW5hbCBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF5IGluIHRoZSBnaXZlbiB5ZWFyLlxuICAgICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBBIGRheSB0byBjaGVjay5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBvcmRpbmFsIGluZGV4IG9mIHRoZSBnaXZlbiBkYXkgcmVsYXRpdmUgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgeWVhciwgc3RhcnRpbmcgYXQgYDFgLlxuICAgICAqL1xuICAgIGdldERheUluWWVhcihkYXRlKSB7XG4gICAgICAgIHZhciBzdGFydE9mWWVhciA9IHRoaXMubmV3RGF0ZUF0TWlkbmlnaHQoZGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcblxuICAgICAgICByZXR1cm4gMSArIE1hdGguZmxvb3IodGhpcy5nZXRUaW1lU2luY2UoZGF0ZSwgc3RhcnRPZlllYXIpIC8gdGhpcy5jZmcuT05FX0RBWSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgdGhlIGN1cnJlbnRseSBjb25maWd1cmVkIHZhbHVlIG9mIGhvdyBtYW55IGRheXMgYSB3ZWVrIG11c3QgaGF2ZSBhdCBsZWFzdCB0byBiZSBjb25zaWRlcmVkIGEgXCJmdWxsXCIgd2Vlay5cbiAgICAgKiBXZWVrcyB3aXRoIGxlc3MgdGhhdCB0aGF0IG51bWJlciBvZiBkYXlzIGFyZSBkaXNyZWdhcmRlZCBpbiBgZ2V0V2Vla0luTW9udGhgIGFuZCBgZ2V0V2Vla0luWWVhcmAuXG4gICAgICogQHBhcmFtIHt1bmtub3dufSBkYXlzIFVudXNlZC5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtaW5pbWFsIG51bWJlciBvZiBkYXlzIGEgd2VlayBpcyBhbGxvd2VkIHRvIGhhdmUgdG8gYmUgY29uc2lkZXJlZCBhIFwiZnVsbFwiIHdlZWsuIFxuICAgICAqL1xuICAgIGdldE1pbmltYWxEYXlzSW5GaXJzdFdlZWsoZGF5cykge1xuICAgICAgICByZXR1cm4gdGhpcy5jZmcubWluaW1hbERheXNJbkZpcnN0V2Vla1x0PyB0aGlzLmNmZy5ERUZBVUxUX01JTklNQUxfREFZU19JTl9GSVJTVF9XRUVLIDogdGhpcy5jZmcubWluaW1hbERheXNJbkZpcnN0V2VlaztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb3JtYXQgc3RoZSBnaXZlbiBnaXZlbiBhY2NvcmRpbmcgdG8gdGhlIHBhdHRlcm4gb2YgdGhlIGN1cnJlbnQgd2lkZ2V0IGNvbmZpZ3VyYXRpb24uXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlIEEgZGF0ZSB0byBmb3JtYXRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBnaXZlbiBkYXRlIGFzIGEgZm9ybWF0dGVkIHN0cmluZy5cbiAgICAgKi9cbiAgICBmb3JtYXQoZGF0ZSkge1xuICAgICAgICB2YXIgZm9ybWF0dGVkU3RyaW5nID0gXCJcIjtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICB2YXIgcGFkV2l0aFplcm9lcyA9IGZ1bmN0aW9uKHN0ciwgbGVuKSB7XG4gICAgICAgICAgICB3aGlsZSAoc3RyLmxlbmd0aCA8IGxlbikge1xuICAgICAgICAgICAgICAgIHN0ciA9IFwiMFwiICsgc3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZm9ybWF0VGV4dCA9IGZ1bmN0aW9uKGRhdGEsIG51bWJlck9mTGV0dGVycywgbWluTGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gKG51bWJlck9mTGV0dGVycyA+PSA0KSA/IGRhdGEgOiBkYXRhLnN1YnN0cigwLCBNYXRoLm1heChtaW5MZW5ndGgsIG51bWJlck9mTGV0dGVycykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBmb3JtYXROdW1iZXIgPSBmdW5jdGlvbihkYXRhLCBudW1iZXJPZkxldHRlcnMpIHtcbiAgICAgICAgICAgIHZhciBkYXRhU3RyaW5nID0gXCJcIiArIGRhdGE7XG4gICAgICAgICAgICAvLyBQYWQgd2l0aCAwcyBhcyBuZWNlc3NhcnlcbiAgICAgICAgICAgIHJldHVybiBwYWRXaXRoWmVyb2VzKGRhdGFTdHJpbmcsIG51bWJlck9mTGV0dGVycyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHNlYXJjaFN0cmluZyA9IHRoaXMuY2ZnLnBhdHRlcm47XG4gICAgICAgIHdoaWxlICgocmVzdWx0ID0gdGhpcy5jZmcucmVnZXguZXhlYyhzZWFyY2hTdHJpbmcpKSkge1xuICAgICAgICAgICAgdmFyIG1hdGNoZWRTdHJpbmcgPSByZXN1bHRbMF07XG4gICAgICAgICAgICB2YXIgcXVvdGVkU3RyaW5nID0gcmVzdWx0WzFdO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5MZXR0ZXJzID0gcmVzdWx0WzJdO1xuICAgICAgICAgICAgdmFyIG90aGVyTGV0dGVycyA9IHJlc3VsdFszXTtcbiAgICAgICAgICAgIHZhciBvdGhlckNoYXJhY3RlcnMgPSByZXN1bHRbNF07XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBwYXR0ZXJuIG1hdGNoZWQgaXMgcXVvdGVkIHN0cmluZywgb3V0cHV0IHRoZSB0ZXh0IGJldHdlZW4gdGhlIHF1b3Rlc1xuICAgICAgICAgICAgaWYgKHF1b3RlZFN0cmluZykge1xuICAgICAgICAgICAgICAgIGlmIChxdW90ZWRTdHJpbmcgPT0gXCInJ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyArPSBcIidcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgKz0gcXVvdGVkU3RyaW5nLnN1YnN0cmluZygxLCBxdW90ZWRTdHJpbmcubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvdGhlckxldHRlcnMpIHtcbiAgICAgICAgICAgIC8vIFN3YWxsb3cgbm9uLXBhdHRlcm4gbGV0dGVycyBieSBkb2luZyBub3RoaW5nIGhlcmVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3RoZXJDaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICAgICAgLy8gU2ltcGx5IG91dHB1dCBvdGhlciBjaGFyYWN0ZXJzXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nICs9IG90aGVyQ2hhcmFjdGVycztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGF0dGVybkxldHRlcnMpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHBhdHRlcm4gbGV0dGVyc1xuICAgICAgICAgICAgICAgIHZhciBwYXR0ZXJuTGV0dGVyID0gcGF0dGVybkxldHRlcnMuY2hhckF0KDApO1xuICAgICAgICAgICAgICAgIHZhciBudW1iZXJPZkxldHRlcnMgPSBwYXR0ZXJuTGV0dGVycy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIHJhd0RhdGEgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocGF0dGVybkxldHRlcikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiR1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3RGF0YSA9IFwiQURcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3RGF0YSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3RGF0YSA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwid1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3RGF0YSA9IHRoaXMuZ2V0V2Vla0luWWVhcihkYXRlLCB0aGlzLmdldE1pbmltYWxEYXlzSW5GaXJzdFdlZWsoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd0RhdGEgPSB0aGlzLmdldFdlZWtJbk1vbnRoKGRhdGUsIHRoaXMuZ2V0TWluaW1hbERheXNJbkZpcnN0V2VlaygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3RGF0YSA9IHRoaXMuZ2V0RGF5SW5ZZWFyKGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByYXdEYXRhID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkZcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd0RhdGEgPSAxICsgTWF0aC5mbG9vcigoZGF0ZS5nZXREYXRlKCkgLSAxKSAvIDcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJFXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByYXdEYXRhID0gdGhpcy5jZmcuZGF5TmFtZXNbZGF0ZS5nZXREYXkoKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd0RhdGEgPSAoZGF0ZS5nZXRIb3VycygpID49IDEyKSA/IFwiUE1cIiA6IFwiQU1cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3RGF0YSA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwia1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3RGF0YSA9IGRhdGUuZ2V0SG91cnMoKSB8fCAyNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiS1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3RGF0YSA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByYXdEYXRhID0gKGRhdGUuZ2V0SG91cnMoKSAlIDEyKSB8fCAxMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3RGF0YSA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByYXdEYXRhID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlNcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd0RhdGEgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJaXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByYXdEYXRhID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpOyAvLyBUaGlzIGlzIHJldHVybnMgdGhlIG51bWJlciBvZiBtaW51dGVzIHNpbmNlIEdNVCB3YXMgdGhpcyB0aW1lLlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEZvcm1hdCB0aGUgcmF3IGRhdGEgZGVwZW5kaW5nIG9uIHRoZSB0eXBlXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmNmZy50eXBlc1twYXR0ZXJuTGV0dGVyXSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY2ZnLlRFWFQyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nICs9IGZvcm1hdFRleHQocmF3RGF0YSwgbnVtYmVyT2ZMZXR0ZXJzLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY2ZnLlRFWFQzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nICs9IGZvcm1hdFRleHQocmF3RGF0YSwgbnVtYmVyT2ZMZXR0ZXJzLCAzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY2ZnLk5VTUJFUjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyArPSBmb3JtYXROdW1iZXIocmF3RGF0YSwgbnVtYmVyT2ZMZXR0ZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY2ZnLllFQVI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtYmVyT2ZMZXR0ZXJzIDw9IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPdXRwdXQgYSAyLWRpZ2l0IHllYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YVN0cmluZyA9IFwiXCIgKyByYXdEYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFN0cmluZyArPSBkYXRhU3RyaW5nLnN1YnN0cigyLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkU3RyaW5nICs9IGZvcm1hdE51bWJlcihyYXdEYXRhLCBudW1iZXJPZkxldHRlcnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jZmcuTU9OVEg6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtYmVyT2ZMZXR0ZXJzID49IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgKz0gZm9ybWF0VGV4dCh0aGlzLmNmZy5tb250aE5hbWVzW3Jhd0RhdGFdLCBudW1iZXJPZkxldHRlcnMsIG51bWJlck9mTGV0dGVycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5CLiBNb250aHMgcmV0dXJuZWQgYnkgZ2V0TW9udGggYXJlIHplcm8tYmFzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgKz0gZm9ybWF0TnVtYmVyKHJhd0RhdGEgKyAxLCBudW1iZXJPZkxldHRlcnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jZmcuVElNRVpPTkU6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNQb3NpdGl2ZSA9IChyYXdEYXRhID4gMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgbG9va3MgbGlrZSBhIG1pc3Rha2UgYnV0IGlzbid0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBiZWNhdXNlIG9mIHRoZSB3YXkgZ2V0VGltZXpvbmVPZmZzZXQgbWVhc3VyZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJlZml4ID0gaXNQb3NpdGl2ZSA/IFwiLVwiIDogXCIrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWJzRGF0YSA9IE1hdGguYWJzKHJhd0RhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIb3Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhvdXJzID0gXCJcIiArIE1hdGguZmxvb3IoYWJzRGF0YSAvIDYwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzID0gcGFkV2l0aFplcm9lcyhob3VycywgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNaW51dGVzXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWludXRlcyA9IFwiXCIgKyAoYWJzRGF0YSAlIDYwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBwYWRXaXRoWmVyb2VzKG1pbnV0ZXMsIDIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRTdHJpbmcgKz0gcHJlZml4ICsgaG91cnMgKyBtaW51dGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWFyY2hTdHJpbmcgPSBzZWFyY2hTdHJpbmcuc3Vic3RyKHJlc3VsdC5pbmRleCArIHJlc3VsdFswXS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRTdHJpbmc7XG4gICAgfVxufVxuXG4vKipcbiAqIF9fUHJpbWVGYWNlcyBDbG9jayBXaWRnZXRfX1xuICogXG4gKiBDbG9jayBkaXNwbGF5cyBzZXJ2ZXIgb3IgY2xpZW50IGRhdGV0aW1lIGxpdmUuXG4gKiBcbiAqIEB0eXBlZGVmIHtcImNsaWVudFwiIHwgXCJzZXJ2ZXJcIn0gUHJpbWVGYWNlcy53aWRnZXQuQ2xvY2suVGltZU1vZGUgSW5kaWNhdGVzIHdoaWNoIHRpbWUgdGhlIGNsb2NrIHdpZGdldCB1c2VzLiBgY2xpZW50YFxuICogdXNlcyB0aGUgdGltZSBmcm9tIHRoZSBjbGllbnQgKGJyb3dzZXIpLCBgc2VydmVyYCB1c2VzIHRoZSB0aW1lIGZyb20gdGhlIHNlcnZlci5cbiAqIFxuICogQHR5cGVkZWYge1wiYW5hbG9nXCIgfCBcImRpZ2l0YWxcIn0gUHJpbWVGYWNlcy53aWRnZXQuQ2xvY2suRGlzcGxheU1vZGUgRGlzcGxheSBtb2RlIGZvciB0aGUgY2xvY2sgd2lkZ2V0LiBgYW5hbG9nYFxuICogZGlzcGxheXMgYW4gYW5hbG9nIGNsb2NrLCBgZGlnaXRhbGAgYSBkaWdpdGlhbCBjbG9jay5cbiAqIFxuICogQGludGVyZmFjZSB7UHJpbWVGYWNlcy53aWRnZXQuQ2xvY2suRGltZW5zaW9uc30gRGltZW5zaW9ucyBDb21wdXRlZCBkaW1lbnNpb25zIGZvciB0aGUgaW5kaXZpZHVhbCBwYXJ0cyBvZiB0aGUgYW5hbG9nXG4gKiBjbG9jaywgYWxsIGluIHBpeGVscy5cbiAqIEBwcm9wIHtudW1iZXJ9IERpbWVuc2lvbnMuc2l6ZSBXaWR0aCBvZiB0aGUgY2xvY2sgZWxlbWVudCBpbiBwaXhlbHMuXG4gKiBAcHJvcCB7bnVtYmVyfSBEaW1lbnNpb25zLmhhbGYgSGFsZiB3aWR0aCBvZiB0aGUgY2xvY2sgZWxlbWVudCBpbiBwaXhlbHMuXG4gKiBAcHJvcCB7bnVtYmVyfSBEaW1lbnNpb25zLmNsb2NrX3dpZHRoIFdpZHRoIG9mIHRoZSBjbG9jayBmYWNlIGluIHBpeGVscy5cbiAqIEBwcm9wIHtudW1iZXJ9IERpbWVuc2lvbnMuaG91cl9zaWduX21pbl9zaXplIERpc3RhbmNlIGluIHBpeGVscyBmcm9tIHRoZSBjZW50ZXIgb2YgdGhlIGNpcmNsZSB3aGVyZSB0aGUgaG91ciBtYXJrXG4gKiBzdGFydHMuXG4gKiBAcHJvcCB7bnVtYmVyfSBEaW1lbnNpb25zLmhvdXJfc2lnbl9tYXhfc2l6ZSBEaXN0YW5jZSBpbiBwaXhlbHMgZnJvbSB0aGUgY2VudGVyIG9mIHRoZSBjaXJjbGUgd2hlcmUgdGhlIGhvdXIgbWFya1xuICogZW5kcy5cbiAqIEBwcm9wIHtudW1iZXJ9IERpbWVuc2lvbnMuaG91cl9oYW5kX3N0YXJ0X3Bvc2l0aW9uIFJhZGlhbCBkaXN0YW5jZSBpbiBwaXhlbHMgZnJvbSB0aGUgY2lyY3VtZmVyZW5jZSBvZiB0aGUgY2lyY2xlXG4gKiB3aGVyZSB0aGUgaG91ciBoYW5kIHN0YXJ0cy4gXG4gKiBAcHJvcCB7bnVtYmVyfSBEaW1lbnNpb25zLmhvdXJfaGFuZF9zdHJva2Vfd2lkdGggU3Ryb2tlIHdpZHRoIGluIHBpeGVscyBvZiB0aGUgaG91ciBoYW5kLlxuICogQHByb3Age251bWJlcn0gRGltZW5zaW9ucy5taW51dGVfaGFuZF9zdGFydF9wb3NpdGlvbiBSYWRpYWwgZGlzdGFuY2UgaW4gcGl4ZWxzIGZyb20gdGhlIGNpcmN1bWZlcmVuY2Ugb2YgdGhlIGNpcmNsZVxuICogd2hlcmUgdGhlIG1pbnV0ZSBoYW5kIHN0YXJ0cy5cbiAqIEBwcm9wIHtudW1iZXJ9IERpbWVuc2lvbnMubWludXRlX2hhbmRfc3Ryb2tlX3dpZHRoIFN0cm9rZSB3aWR0aCBpbiBwaXhlbHMgb2YgdGhlIG1pbnV0ZSBoYW5kLlxuICogQHByb3Age251bWJlcn0gRGltZW5zaW9ucy5zZWNvbmRfaGFuZF9zdGFydF9wb3NpdGlvbiBSYWRpYWwgZGlzdGFuY2UgaW4gcGl4ZWxzIGZyb20gdGhlIGNpcmN1bWZlcmVuY2Ugb2YgdGhlIGNpcmNsZVxuICogd2hlcmUgdGhlIHNlY29uZHMgaGFuZCBzdGFydHMuIFxuICogQHByb3Age251bWJlcn0gRGltZW5zaW9ucy5zZWNvbmRfaGFuZF9zdHJva2Vfd2lkdGggU3Ryb2tlIHdpZHRoIGluIHBpeGVscyBvZiB0aGUgc2Vjb25kcyBoYW5kLlxuICogQHByb3Age251bWJlcn0gRGltZW5zaW9ucy5waW5fd2lkdGggUmFkaXVzIGluIHBpeGVscyBvZiB0aGUgcGluIGF0IHRoZSBjZW50ZXIgb2YgdGhlIGNsb2NrIGZhY2UuXG4gKiBcbiAqIEBwcm9wIHtpbXBvcnQoXCJyYXBoYWVsXCIpLlJhcGhhZWxQYXBlcn0gY2FudmFzIFRoZSBjYW52YXMgZm9yIHRoZSBhbmFsb2cgY2xvY2suXG4gKiBAcHJvcCB7aW1wb3J0KFwicmFwaGFlbFwiKS5SYXBoYWVsRWxlbWVudH0gY2xvY2sgVGhlIGRyYXduIGVsZW1lbnQgZm9yIHRoZSBjbG9jayBvdXRsaW5lLlxuICogQHByb3Age0RhdGV9IGN1cnJlbnQgVGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgdGltZS5cbiAqIEBwcm9wIHtQcmltZUZhY2VzLndpZGdldC5DbG9jay5EaW1lbnNpb25zfSBkaW1lbnNpb25zIENhbGN1bGF0ZWQgc2l6ZXMgZm9yIHRoZSBhbmFsb2cgY2xvY2sgZWxlbWVudHMuXG4gKiBAcHJvcCB7aW1wb3J0KFwicmFwaGFlbFwiKS5SYXBoYWVsRWxlbWVudFtdfSBob3VyX3NpZ24gVGhlIGRyYXduIGVsZW1lbnRzIGZvciB0aGUgaG91ciBzaWducyAoMS0xMikuXG4gKiBAcHJvcCB7aW1wb3J0KFwicmFwaGFlbFwiKS5SYXBoYWVsRWxlbWVudH0gaG91cl9oYW5kIFRoZSBkcmF3biBlbGVtZW50IGZvciB0aGUgaG91ciBoYW5kLlxuICogQHByb3Age251bWJlcn0gaW50ZXJ2YWwgVGhlIHNldC1pbnRlcnZhbCB0aW1lciBJRCBmb3IgdGhlIHRpY2tpbmcgb2YgdGhlIGNsb2NrLlxuICogQHByb3Age2ltcG9ydChcInJhcGhhZWxcIikuUmFwaGFlbEVsZW1lbnR9IG1pbnV0ZV9oYW5kIFRoZSBkcmF3biBlbGVtZW50IGZvciB0aGUgbWludXRlIGhhbmQuXG4gKiBAcHJvcCB7aW1wb3J0KFwicmFwaGFlbFwiKS5SYXBoYWVsRWxlbWVudH0gcGluIFRoZSBkcmF3biBlbGVtZW50IGZvciB0aGUgcGluIGF0IHRoZSBjZW50ZXIgb2YgdGhlIGNsb2NrLlxuICogQHByb3Age2ltcG9ydChcInJhcGhhZWxcIikuUmFwaGFlbEVsZW1lbnR9IHNlY29uZF9oYW5kIFRoZSBkcmF3biBlbGVtZW50IGZvciB0aGUgc2Vjb25kIGhhbmQuXG4gKiBcbiAqIEBpbnRlcmZhY2Uge1ByaW1lRmFjZXMud2lkZ2V0LkNsb2NrQ2ZnfSBjZmcgVGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSB7QGxpbmsgIENsb2NrfCBDbG9jayB3aWRnZXR9LlxuICogWW91IGNhbiBhY2Nlc3MgdGhpcyBjb25maWd1cmF0aW9uIHZpYSB7QGxpbmsgUHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldC5jZmd8QmFzZVdpZGdldC5jZmd9LiBQbGVhc2Ugbm90ZSB0aGF0IHRoaXNcbiAqIGNvbmZpZ3VyYXRpb24gaXMgdXN1YWxseSBtZWFudCB0byBiZSByZWFkLW9ubHkgYW5kIHNob3VsZCBub3QgYmUgbW9kaWZpZWQuXG4gKiBAZXh0ZW5kcyB7UHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldENmZ30gY2ZnXG4gKiBcbiAqIEBwcm9wIHtib29sZWFufSBjZmcuYXV0b1N5bmMgV2hlbiBgbW9kZWAgaXMgc2V0IHRvIGBzZXJ2ZXJgOiBgdHJ1ZWAgdG8gYXV0b21hdGljYWxseSBzeW5jIHRoZSB0aW1lIHdpdGggdGhlIHNlcnZlclxuICogYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgYHN5bmNJbnRlcnZhbGAsIG9yIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICogQHByb3Age1ByaW1lRmFjZXMud2lkZ2V0LkNsb2NrLkRpc3BsYXlNb2RlfSBjZmcuZGlzcGxheU1vZGUgV2hldGhlciB0aGUgY2xvY2sgaXMgZGlzcGxheWVkIGFzIGFuIGFuYWxvZyBvciBkaWdpdGFsXG4gKiBjbG9jay5cbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy5sb2NhbGUgTG9jYWxlIGZvciB0aGUgY2xvY2ssIGRldGVybWluZXMgdGhlIHRpbWUgZm9ybWF0LlxuICogQHByb3Age1ByaW1lRmFjZXMud2lkZ2V0LkNsb2NrLlRpbWVNb2RlfSBjZmcubW9kZSBXaGV0aGVyIHRoZSBjbG9jayB1c2VzIHRoZSB0aW1lIG9mIHRoZSBicm93c2VyIG9yIHRoZSB0aW1lIGZyb20gdGhlXG4gKiBzZXJ2ZXIuXG4gKiBAcHJvcCB7c3RyaW5nfSBjZmcucGF0dGVybiBEYXRldGltZSBmb3JtYXQuXG4gKiBAcHJvcCB7bnVtYmVyfSBjZmcuc3luY0ludGVydmFsIERlZmluZXMgdGhlIHN5bmMgaW4gbXMgaW50ZXJ2YWwgaW4gd2hlbiBgYXV0b1N5bmNgIGlzIHNldCB0byBgdHJ1ZWAuXG4gKiBAcHJvcCB7c3RyaW5nfSBjZmcudmFsdWUgVGhlIGluaXRpYWwgdGltZSB2YWx1ZSBmb3IgdGhlIGNsb2NrIHRvIGRpc3BsYXkuXG4gKi9cbmV4cG9ydCBjbGFzcyBDbG9jayBleHRlbmRzIEJhc2VXaWRnZXQge1xuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMuUGFydGlhbFdpZGdldENmZzxUQ2ZnPn0gY2ZnXG4gICAgICovXG4gICAgaW5pdChjZmcpIHtcbiAgICAgICAgc3VwZXIuaW5pdChjZmcpO1xuXG4gICAgICAgIHRoaXMuY2ZnLnBhdHRlcm4gPSB0aGlzLmNmZy5wYXR0ZXJufHxcIk1NL2RkL3l5eXkgSEg6bW06c3NcIjtcbiAgICAgICAgdGhpcy5jZmcuZGF0ZUZvcm1hdCA9IG5ldyBTaW1wbGVEYXRlRm9ybWF0KHtcbiAgICAgICAgICAgIHBhdHRlcm46IHRoaXMuY2ZnLnBhdHRlcm4sXG4gICAgICAgICAgICBsb2NhbGU6IHRoaXMuY2ZnLmxvY2FsZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5pc0NsaWVudCgpID8gbmV3IERhdGUoKSA6IG5ldyBEYXRlKHRoaXMuY2ZnLnZhbHVlKTtcblxuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICBpZih0aGlzLmlzQW5hbG9nQ2xvY2soKSkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICR0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXRoaXMuaXNDbGllbnQoKSAmJiB0aGlzLmNmZy5hdXRvU3luYykge1xuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJHRoaXMuc3luYygpO1xuICAgICAgICAgICAgfSwgdGhpcy5jZmcuc3luY0ludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLlBhcnRpYWxXaWRnZXRDZmc8VENmZz59IGNmZ1xuICAgICAqL1xuICAgIHJlZnJlc2goY2ZnKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG5cbiAgICAgICAgc3VwZXIucmVmcmVzaChjZmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSB0aW1lIG9mIHRoZSBjbGllbnQgaXMgdXNlZCBmb3IgdGhpcyBjbG9jay5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIHRpbWUgb2YgdGhlIGNsaWVudCBpcyB1c2VkLCBvciBgZmFsc2VgIGlmIHRoZSB0aW1lIG9mIHRoZSBzZXJ2ZXIgaXMgdXNlZC5cbiAgICAgKi9cbiAgICBpc0NsaWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2ZnLm1vZGUgPT09ICdjbGllbnQnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGlzIGNsb2NrIGlmIGl0IGlzIG5vdCBhbHJlYWR5IHJ1bm5pbmcuXG4gICAgICovXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICAgICAgJHRoaXMudXBkYXRlT3V0cHV0KCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3BzIHRoaXMgY2xvY2sgaXQgaXMgY3VycmVudGx5IHJ1bm5pbmcuXG4gICAgICovXG4gICAgc3RvcCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgYSB0aWNrIG9mIHRoZSBjbG9jaywgdXBkYXRlcyB0aGUgdmlzdWFsIGRpc3BsYXkgb2YgdGhpcyBjbG9jay5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHVwZGF0ZU91dHB1dCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50LnNldFNlY29uZHModGhpcy5jdXJyZW50LmdldFNlY29uZHMoKSArIDEpO1xuICAgICAgICB0aGlzLmpxLnRleHQodGhpcy5jZmcuZGF0ZUZvcm1hdC5mb3JtYXQodGhpcy5jdXJyZW50KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3luY2hyb25pemVzIHRoaXMgY2xvY2sgc28gdGhhdCBpdCBzaG93cyB0aGUgY3VycmVudCB0aW1lLiBUaGlzIHdpbGwgdHJpZ2dlciBhbiBBSkFYIHVwZGF0ZSBvZiB0aGlzIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBzeW5jKCkge1xuICAgICAgICBpZighdGhpcy5pc0FuYWxvZ0Nsb2NrKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyICR0aGlzID0gdGhpcyxcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHNvdXJjZTogdGhpcy5pZCxcbiAgICAgICAgICAgIHByb2Nlc3M6IHRoaXMuaWQsXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIGdsb2JhbDogZmFsc2UsXG4gICAgICAgICAgICBwYXJhbXM6IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5pZCArICdfc3luYycsIHZhbHVlOiB0cnVlXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIG9uY29tcGxldGU6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBhcmdzLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYoJHRoaXMuaXNBbmFsb2dDbG9jaygpKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmN1cnJlbnQgPSBuZXcgRGF0ZShhcmdzLmRhdGV0aW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuY3VycmVudCA9IG5ldyBEYXRlKGFyZ3MuZGF0ZXRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5qcS50ZXh0KCR0aGlzLmNmZy5kYXRlRm9ybWF0LmZvcm1hdCgkdGhpcy5jdXJyZW50KSk7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIFByaW1lRmFjZXMuYWpheC5SZXF1ZXN0LmhhbmRsZShvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyB0aGlzIGNsb2NrIGFjY29yZGluZyB0aGUgdGhlIGN1cnJlbnQgd2lkZ2V0IGNvbmZpZ3VhdGlvbi5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGRyYXcoKSB7XG5cbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gdGhpcy5nZXREaW1lbnNpb25zKHRoaXMuanEud2lkdGgoKSk7XG5cbiAgICAgICAgdGhpcy5jYW52YXMgPSBSYXBoYWVsKHRoaXMuaWQsIHRoaXMuZGltZW5zaW9ucy5zaXplLHRoaXMuZGltZW5zaW9ucy5zaXplKTtcblxuICAgICAgICB0aGlzLmNsb2NrID0gdGhpcy5jYW52YXMuY2lyY2xlKHRoaXMuZGltZW5zaW9ucy5oYWxmLHRoaXMuZGltZW5zaW9ucy5oYWxmLCB0aGlzLmRpbWVuc2lvbnMuY2xvY2tfd2lkdGgpO1xuXG4gICAgICAgIHRoaXMuZHJhd19ob3VyX3NpZ25zKCk7XG5cbiAgICAgICAgdGhpcy5kcmF3X2hhbmRzKCk7XG5cbiAgICAgICAgdGhpcy5waW4gPSB0aGlzLmNhbnZhcy5jaXJjbGUodGhpcy5kaW1lbnNpb25zLmhhbGYsdGhpcy5kaW1lbnNpb25zLmhhbGYsIHRoaXMuZGltZW5zaW9ucy5waW5fd2lkdGgpO1xuXG4gICAgICAgIHRoaXMuY2xvY2suYXR0cih7XG4gICAgICAgICAgICBcImZpbGxcIjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICBcInN0cm9rZVwiOiBcIiM0QTRBNEFcIixcbiAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IFwiM1wiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTx0aGlzLmhvdXJfc2lnbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ob3VyX3NpZ25baV0uYXR0cih7XG4gICAgICAgICAgICAgICAgXCJzdHJva2VcIjogXCIjMDAwMDAwXCIsXG4gICAgICAgICAgICAgICAgXCJzdHJva2Utd2lkdGhcIjogdGhpcy5kaW1lbnNpb25zLmhvdXJfc2lnbl9zdHJva2Vfd2lkdGhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ob3VyX2hhbmQuYXR0cih7XG4gICAgICAgICAgICBcInN0cm9rZVwiOiBcIiM0QTRBNEFcIixcbiAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IHRoaXMuZGltZW5zaW9ucy5ob3VyX2hhbmRfc3Ryb2tlX3dpZHRoXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWludXRlX2hhbmQuYXR0cih7XG4gICAgICAgICAgICBcInN0cm9rZVwiOiAnIzRBNEE0QScsXG4gICAgICAgICAgICBcInN0cm9rZS13aWR0aFwiOiB0aGlzLmRpbWVuc2lvbnMubWludXRlX2hhbmRfc3Ryb2tlX3dpZHRoXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2Vjb25kX2hhbmQuYXR0cih7XG4gICAgICAgICAgICBcInN0cm9rZVwiOiBcIiM0QTRBNEFcIixcbiAgICAgICAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IHRoaXMuZGltZW5zaW9ucy5zZWNvbmRfaGFuZF9zdHJva2Vfd2lkdGhcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5waW4uYXR0cih7XG4gICAgICAgICAgICBcImZpbGxcIjogXCIjRjU4NTAzXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyB0aGUgaG91ciBtYXJrcyBmb3IgdGhlIGFuYWxvZyBjbG9jay5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGRyYXdfaG91cl9zaWducygpIHtcbiAgICAgICAgdGhpcy5ob3VyX3NpZ24gPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgIChmdW5jdGlvbiAoaSx0aGF0KXtcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRfeCA9IHRoYXQuZGltZW5zaW9ucy5oYWxmICsgTWF0aC5yb3VuZCh0aGF0LmRpbWVuc2lvbnMuaG91cl9zaWduX21pbl9zaXplICogTWF0aC5jb3MoMzAgKiBpICogTWF0aC5QSSAvIDE4MCkpO1xuICAgICAgICAgICAgICAgIHZhciBzdGFydF95ID0gdGhhdC5kaW1lbnNpb25zLmhhbGYgKyBNYXRoLnJvdW5kKHRoYXQuZGltZW5zaW9ucy5ob3VyX3NpZ25fbWluX3NpemUgKiBNYXRoLnNpbigzMCAqIGkgKiBNYXRoLlBJIC8gMTgwKSk7XG4gICAgICAgICAgICAgICAgdmFyIGVuZF94ID0gdGhhdC5kaW1lbnNpb25zLmhhbGYgKyBNYXRoLnJvdW5kKHRoYXQuZGltZW5zaW9ucy5ob3VyX3NpZ25fbWF4X3NpemUgKiBNYXRoLmNvcygzMCAqIGkgKiBNYXRoLlBJIC8gMTgwKSk7XG4gICAgICAgICAgICAgICAgdmFyIGVuZF95ID0gdGhhdC5kaW1lbnNpb25zLmhhbGYgKyBNYXRoLnJvdW5kKHRoYXQuZGltZW5zaW9ucy5ob3VyX3NpZ25fbWF4X3NpemUgKiBNYXRoLnNpbigzMCAqIGkgKiBNYXRoLlBJIC8gMTgwKSk7XG5cbiAgICAgICAgICAgICAgICB0aGF0LmhvdXJfc2lnbi5wdXNoKHRoYXQuY2FudmFzLnBhdGgoXCJNXCIgKyBzdGFydF94ICsgXCIgXCIgKyBzdGFydF95ICsgXCJMXCIgKyBlbmRfeCArIFwiIFwiICsgZW5kX3kpKTtcbiAgICAgICAgICAgIH0pKGksdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEcmF3cyB0aGUgY2xvY2sgaGFuZHMgZm9yIHRoZSBhbmFsb2cgY2xvY2suXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBkcmF3X2hhbmRzKCkge1xuICAgICAgICB0aGlzLmhvdXJfaGFuZCA9IHRoaXMuY2FudmFzLnBhdGgoXCJNXCIgKyB0aGlzLmRpbWVuc2lvbnMuaGFsZiArIFwiIFwiICsgdGhpcy5kaW1lbnNpb25zLmhhbGYgKyBcIkxcIiArIHRoaXMuZGltZW5zaW9ucy5oYWxmICsgXCIgXCIgKyB0aGlzLmRpbWVuc2lvbnMuaG91cl9oYW5kX3N0YXJ0X3Bvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5taW51dGVfaGFuZCA9IHRoaXMuY2FudmFzLnBhdGgoXCJNXCIgKyB0aGlzLmRpbWVuc2lvbnMuaGFsZiArIFwiIFwiICsgdGhpcy5kaW1lbnNpb25zLmhhbGYgKyBcIkxcIiArIHRoaXMuZGltZW5zaW9ucy5oYWxmICsgXCIgXCIgKyB0aGlzLmRpbWVuc2lvbnMubWludXRlX2hhbmRfc3RhcnRfcG9zaXRpb24pO1xuICAgICAgICB0aGlzLnNlY29uZF9oYW5kID0gdGhpcy5jYW52YXMucGF0aChcIk1cIiArIHRoaXMuZGltZW5zaW9ucy5oYWxmICsgXCIgXCIgKyB0aGlzLmRpbWVuc2lvbnMuaGFsZiArIFwiTFwiICsgdGhpcy5kaW1lbnNpb25zLmhhbGYgKyBcIiBcIiArIHRoaXMuZGltZW5zaW9ucy5zZWNvbmRfaGFuZF9zdGFydF9wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGVhY2ggY2xpY2sgb2YgdGhlIGNsb2NrLCBhbmltYXRlcyB0aGUgY2xvY2sgaGFuZHMuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuaG91cl9oYW5kLmFuaW1hdGUoe3RyYW5zZm9ybTogXCJSXCIgKyAoMzAgKiB0aGlzLmN1cnJlbnQuZ2V0SG91cnMoKSArICh0aGlzLmN1cnJlbnQuZ2V0TWludXRlcygpIC8gMi41KSkgKyBcIixcIiArIHRoaXMuZGltZW5zaW9ucy5oYWxmICsgXCIsXCIgKyB0aGlzLmRpbWVuc2lvbnMuaGFsZn0sIDEpO1xuICAgICAgICB0aGlzLm1pbnV0ZV9oYW5kLmFuaW1hdGUoe3RyYW5zZm9ybTogXCJSXCIgKyAoNiAqIHRoaXMuY3VycmVudC5nZXRNaW51dGVzKCkpICsgXCIsXCIgKyB0aGlzLmRpbWVuc2lvbnMuaGFsZiArIFwiLFwiICsgdGhpcy5kaW1lbnNpb25zLmhhbGZ9LCAxKTtcbiAgICAgICAgdGhpcy5zZWNvbmRfaGFuZC5hbmltYXRlKHt0cmFuc2Zvcm06IFwiUlwiICsgKDYgKiB0aGlzLmN1cnJlbnQuZ2V0U2Vjb25kcygpKSArIFwiLFwiICsgdGhpcy5kaW1lbnNpb25zLmhhbGYgKyBcIixcIiArIHRoaXMuZGltZW5zaW9ucy5oYWxmfSwgMSk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50LnNldFNlY29uZHModGhpcy5jdXJyZW50LmdldFNlY29uZHMoKSArIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSB3aWR0aCBvZiB0aGUgaW5kaXZpZHVhbCBlbGVtZW50cyBvZiB0aGUgYW5hbG9nIGNsb2NrIGZvciB0aGUgZ2l2ZW4gdGFyZ2V0IHdpZHRoLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgVGFyZ2V0IHdpZHRoIG9mIHRoZSBjbG9jayBpbiBwaXhlbHNcbiAgICAgKiBAcmV0dXJuIHtQcmltZUZhY2VzLndpZGdldC5DbG9jay5EaW1lbnNpb25zfSBDYWxjdWxhdGVkIHNpemVzIGZvciB0aGUgYW5hbG9nIGNsb2NrIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIGdldERpbWVuc2lvbnMoc2l6ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3NpemUnOiBzaXplLFxuICAgICAgICAgICAgJ2hhbGYnOiBNYXRoLmZsb29yKHNpemUgLyAyKSxcbiAgICAgICAgICAgICdjbG9ja193aWR0aCc6IE1hdGguZmxvb3Ioc2l6ZSAqIDQ3LjUgLyAxMDApLFxuICAgICAgICAgICAgJ2hvdXJfc2lnbl9taW5fc2l6ZSc6IE1hdGguZmxvb3Ioc2l6ZSAqIDQwIC8gMTAwKSxcbiAgICAgICAgICAgICdob3VyX3NpZ25fbWF4X3NpemUnOiBNYXRoLmZsb29yKHNpemUgKiA0NSAvIDEwMCksXG4gICAgICAgICAgICAnaG91cl9zaWduX3N0cm9rZV93aWR0aCc6IE1hdGguZmxvb3Ioc2l6ZSAqIDAuNSAvIDEwMCkgfHwgMSxcbiAgICAgICAgICAgICdob3VyX2hhbmRfc3RhcnRfcG9zaXRpb24nOiBNYXRoLmZsb29yKHNpemUgLyA0KSxcbiAgICAgICAgICAgICdob3VyX2hhbmRfc3Ryb2tlX3dpZHRoJzogTWF0aC5mbG9vcihzaXplICogMyAvIDEwMCkgfHwgMSxcbiAgICAgICAgICAgICdtaW51dGVfaGFuZF9zdGFydF9wb3NpdGlvbic6IE1hdGguZmxvb3Ioc2l6ZSAvIDYpLFxuICAgICAgICAgICAgJ21pbnV0ZV9oYW5kX3N0cm9rZV93aWR0aCc6IE1hdGguZmxvb3Ioc2l6ZSAqIDIgLyAxMDApIHx8IDEsXG4gICAgICAgICAgICAnc2Vjb25kX2hhbmRfc3RhcnRfcG9zaXRpb24nOiBNYXRoLmZsb29yKHNpemUgKiAxMi41IC8gMTAwKSxcbiAgICAgICAgICAgICdzZWNvbmRfaGFuZF9zdHJva2Vfd2lkdGgnOiBNYXRoLmZsb29yKHNpemUgKiAxIC8gMTAwKSB8fCAxLFxuICAgICAgICAgICAgJ3Bpbl93aWR0aCc6IE1hdGguZmxvb3Ioc2l6ZSAqIDIuNSAvIDEwMClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGlzIGNsb2NrIGlzIGRpc3BsYXllZCBhcyBhbiBhbmFsb2cgb3IgZGlnaXRhbCBjbG9jay5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhpcyBjbG9jayBpcyBkaXNwbGF5ZWQgYXMgYW4gYW5hbG9nIGNsb2NrLCBvciBgZmFsc2VgIGlmIGl0IGlzIGRpc3BsYXllZCBpbiBhblxuICAgICAqIElOUFVUIGZpZWxkLlxuICAgICAqL1xuICAgIGlzQW5hbG9nQ2xvY2soKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNmZy5kaXNwbGF5TW9kZSA9PT0gXCJhbmFsb2dcIjtcbiAgICB9XG59XG5cbi8vIFRPRE8gU2ltcGxlRGF0ZUZvcm1hdCBpcyBOT1QgYSB3aWRnZXQsIGp1c3QgYSBjbGFzcywgYW5kIHNob3VsZCBub3QgYmUgYWRkZWQgdG8gdGhlIFByaW1lRmFjZXMud2lkZ2V0IHNjb3BlXG4vLyBBZGQgaXQgZm9yIG5vdyB0byBwcmVzZXJ2ZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBpbiBjYXNlIGV4dGVybmFsIGNvZGUgdXNlcyBpdC5cblByaW1lRmFjZXMud2lkZ2V0LlNpbXBsZURhdGVGb3JtYXQgPSBTaW1wbGVEYXRlRm9ybWF0O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0I7QUFrQ3BCLElBQU0sbUJBQU4sTUFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFVbkIsWUFBWSxLQUFLO0FBQ2IsU0FBSyxNQUFNO0FBQ1gsU0FBSyxJQUFJLFFBQVE7QUFDakIsU0FBSyxJQUFJLFFBQVE7QUFDakIsU0FBSyxJQUFJLFFBQVE7QUFDakIsU0FBSyxJQUFJLFNBQVM7QUFDbEIsU0FBSyxJQUFJLE9BQU87QUFDaEIsU0FBSyxJQUFJLFFBQVE7QUFDakIsU0FBSyxJQUFJLFdBQVc7QUFDcEIsU0FBSyxJQUFJLFFBQVE7QUFBQSxNQUNiLEdBQUksS0FBSyxJQUFJO0FBQUEsTUFDYixHQUFJLEtBQUssSUFBSTtBQUFBLE1BQ2IsR0FBSSxLQUFLLElBQUk7QUFBQSxNQUNiLEdBQUksS0FBSyxJQUFJO0FBQUEsTUFDYixHQUFJLEtBQUssSUFBSTtBQUFBLE1BQ2IsR0FBSSxLQUFLLElBQUk7QUFBQSxNQUNiLEdBQUksS0FBSyxJQUFJO0FBQUEsTUFDYixHQUFJLEtBQUssSUFBSTtBQUFBLE1BQ2IsR0FBSSxLQUFLLElBQUk7QUFBQSxNQUNiLEdBQUksS0FBSyxJQUFJO0FBQUEsTUFDYixHQUFJLEtBQUssSUFBSTtBQUFBLE1BQ2IsR0FBSSxLQUFLLElBQUk7QUFBQSxNQUNiLEdBQUksS0FBSyxJQUFJO0FBQUEsTUFDYixHQUFJLEtBQUssSUFBSTtBQUFBLE1BQ2IsR0FBSSxLQUFLLElBQUk7QUFBQSxNQUNiLEdBQUksS0FBSyxJQUFJO0FBQUEsTUFDYixHQUFJLEtBQUssSUFBSTtBQUFBLE1BQ2IsR0FBSSxLQUFLLElBQUk7QUFBQSxJQUNqQjtBQUVBLFNBQUssSUFBSSxVQUFVLEtBQUssS0FBSyxLQUFLO0FBQ2xDLFNBQUssSUFBSSxXQUFXLElBQUksS0FBSyxJQUFJO0FBQ2pDLFNBQUssSUFBSSxxQ0FBcUM7QUFFOUMsUUFBSSxpQkFBaUIsV0FBVyxrQkFBa0IsS0FBSyxJQUFJLE1BQU07QUFDakUsUUFBRyxnQkFBZ0I7QUFDZixXQUFLLElBQUksYUFBYSxlQUFlO0FBQ3JDLFdBQUssSUFBSSxXQUFXLGVBQWU7QUFBQSxJQUN2QyxPQUNLO0FBQ0QsV0FBSyxJQUFJLGFBQWEsQ0FBQyxXQUFXLFlBQVksU0FBUyxTQUFTLE9BQU8sUUFBUSxRQUFRLFVBQVUsYUFBYSxXQUFXLFlBQVksVUFBVTtBQUMvSSxXQUFLLElBQUksV0FBVyxDQUFDLFVBQVUsVUFBVSxXQUFXLGFBQWEsWUFBWSxVQUFVLFVBQVU7QUFBQSxJQUNyRztBQUFBLEVBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBU0Esa0JBQWtCLE1BQU0sT0FBTyxLQUFLO0FBQ2hDLFFBQUksSUFBSSxJQUFJLEtBQUssTUFBTSxPQUFPLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDMUMsTUFBRSxnQkFBZ0IsQ0FBQztBQUNuQixXQUFPO0FBQUEsRUFDWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUUEsY0FBYyxPQUFPLE9BQU87QUFDeEIsV0FBTyxNQUFNLFFBQVEsSUFBSSxNQUFNLFFBQVE7QUFBQSxFQUMzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUUEsU0FBUyxPQUFPLE9BQU87QUFDbkIsV0FBTyxNQUFNLFFBQVEsSUFBSSxNQUFNLFFBQVE7QUFBQSxFQUMzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUUEsV0FBVyxNQUFNO0FBQ2IsUUFBRyxRQUFRLFFBQVU7QUFDakIsYUFBTyxLQUFLLElBQUksS0FBSyxZQUFZLEdBQUcsS0FBSyxTQUFTLEdBQUcsS0FBSyxRQUFRLEdBQUcsS0FBSyxTQUFTLEdBQUcsS0FBSyxXQUFXLEdBQUcsS0FBSyxXQUFXLEdBQUcsS0FBSyxnQkFBZ0IsQ0FBQztBQUFBLElBQ3RKO0FBQUEsRUFFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUUEsYUFBYSxPQUFPLE9BQU87QUFDdkIsV0FBTyxLQUFLLFdBQVcsS0FBSyxJQUFJLEtBQUssV0FBVyxLQUFLO0FBQUEsRUFDekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFBLGtCQUFrQixNQUFNO0FBRXBCLFFBQUksU0FBUyxJQUFJLEtBQUssS0FBSyxZQUFZLEdBQUcsS0FBSyxTQUFTLEdBQUcsS0FBSyxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUM7QUFDbkYsUUFBSSxpQkFBaUIsSUFBSSxLQUFLLE9BQU8sUUFBUSxJQUFJLEtBQUssT0FBTyxJQUFJLEtBQUssSUFBSSxPQUFPO0FBRWpGLFdBQU8sS0FBSyxrQkFBa0IsZUFBZSxZQUFZLEdBQUcsZUFBZSxTQUFTLEdBQUcsZUFBZSxRQUFRLENBQUM7QUFBQSxFQUNuSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVVBLGNBQWMsTUFBTSx3QkFBd0I7QUFDeEMsUUFBSSxpQkFBaUIsS0FBSyxrQkFBa0IsSUFBSTtBQUNoRCxRQUFJLGNBQWMsS0FBSyxrQkFBa0IsS0FBSyxZQUFZLEdBQUcsR0FBRyxDQUFDO0FBQ2pFLFFBQUksa0JBQWtCLEtBQUssU0FBUyxnQkFBZ0IsV0FBVyxJQUFJLElBQUksSUFBSSxLQUFLLE1BQU0sS0FBSyxhQUFhLGdCQUFlLFdBQVcsSUFBSSxLQUFLLElBQUksUUFBUTtBQUN2SixRQUFJLDBCQUEyQixJQUFJLFlBQVksT0FBTztBQUN0RCxRQUFJLGFBQWE7QUFDakIsUUFBSSwwQkFBMEIsd0JBQXdCO0FBQ2xEO0FBQUEsSUFDSjtBQUVBLFdBQU87QUFBQSxFQUNYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBVUEsZUFBZSxNQUFNLHdCQUF3QjtBQUN6QyxRQUFJLGlCQUFpQixLQUFLLGtCQUFrQixJQUFJO0FBQ2hELFFBQUksZUFBZSxLQUFLLGtCQUFrQixLQUFLLFlBQVksR0FBRyxLQUFLLFNBQVMsR0FBRyxDQUFDO0FBQ2hGLFFBQUksa0JBQWtCLEtBQUssU0FBUyxnQkFBZSxZQUFZLElBQUksSUFBSSxJQUFJLEtBQUssTUFBTyxLQUFLLGFBQWEsZ0JBQWdCLFlBQVksSUFBSyxLQUFLLElBQUksUUFBUTtBQUMzSixRQUFJLDBCQUEyQixJQUFJLGFBQWEsT0FBTztBQUN2RCxRQUFJLGNBQWM7QUFDbEIsUUFBSSwyQkFBMkIsd0JBQXdCO0FBQ25EO0FBQUEsSUFDSjtBQUVBLFdBQU87QUFBQSxFQUNYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsYUFBYSxNQUFNO0FBQ2YsUUFBSSxjQUFjLEtBQUssa0JBQWtCLEtBQUssWUFBWSxHQUFHLEdBQUcsQ0FBQztBQUVqRSxXQUFPLElBQUksS0FBSyxNQUFNLEtBQUssYUFBYSxNQUFNLFdBQVcsSUFBSSxLQUFLLElBQUksT0FBTztBQUFBLEVBQ2pGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRQSwwQkFBMEIsTUFBTTtBQUM1QixXQUFPLEtBQUssSUFBSSx5QkFBeUIsS0FBSyxJQUFJLHFDQUFxQyxLQUFLLElBQUk7QUFBQSxFQUNwRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLE9BQU8sTUFBTTtBQUNULFFBQUksa0JBQWtCO0FBQ3RCLFFBQUk7QUFFSixRQUFJLGdCQUFnQixTQUFTLEtBQUssS0FBSztBQUNuQyxhQUFPLElBQUksU0FBUyxLQUFLO0FBQ3JCLGNBQU0sTUFBTTtBQUFBLE1BQ2hCO0FBQ0EsYUFBTztBQUFBLElBQ1g7QUFFQSxRQUFJLGFBQWEsU0FBUyxNQUFNQSxrQkFBaUIsV0FBVztBQUN4RCxhQUFRQSxvQkFBbUIsSUFBSyxPQUFPLEtBQUssT0FBTyxHQUFHLEtBQUssSUFBSSxXQUFXQSxnQkFBZSxDQUFDO0FBQUEsSUFDOUY7QUFFQSxRQUFJLGVBQWUsU0FBUyxNQUFNQSxrQkFBaUI7QUFDL0MsVUFBSUMsY0FBYSxLQUFLO0FBRXRCLGFBQU8sY0FBY0EsYUFBWUQsZ0JBQWU7QUFBQSxJQUNwRDtBQUVBLFFBQUksZUFBZSxLQUFLLElBQUk7QUFDNUIsV0FBUSxTQUFTLEtBQUssSUFBSSxNQUFNLEtBQUssWUFBWSxHQUFJO0FBQ2pELFVBQUksZ0JBQWdCLE9BQU8sQ0FBQztBQUM1QixVQUFJLGVBQWUsT0FBTyxDQUFDO0FBQzNCLFVBQUksaUJBQWlCLE9BQU8sQ0FBQztBQUM3QixVQUFJLGVBQWUsT0FBTyxDQUFDO0FBQzNCLFVBQUksa0JBQWtCLE9BQU8sQ0FBQztBQUc5QixVQUFJLGNBQWM7QUFDZCxZQUFJLGdCQUFnQixNQUFNO0FBQ3RCLDZCQUFtQjtBQUFBLFFBQ3ZCLE9BQU87QUFDSCw2QkFBbUIsYUFBYSxVQUFVLEdBQUcsYUFBYSxTQUFTLENBQUM7QUFBQSxRQUN4RTtBQUFBLE1BQ0osV0FBVyxjQUFjO0FBQUEsTUFFekIsV0FBVyxpQkFBaUI7QUFFeEIsMkJBQW1CO0FBQUEsTUFDdkIsV0FBVyxnQkFBZ0I7QUFFdkIsWUFBSSxnQkFBZ0IsZUFBZSxPQUFPLENBQUM7QUFDM0MsWUFBSSxrQkFBa0IsZUFBZTtBQUNyQyxZQUFJLFVBQVU7QUFDZCxnQkFBUSxlQUFlO0FBQUEsVUFDbkIsS0FBSztBQUNELHNCQUFVO0FBQ1Y7QUFBQSxVQUNKLEtBQUs7QUFDRCxzQkFBVSxLQUFLLFlBQVk7QUFDM0I7QUFBQSxVQUNKLEtBQUs7QUFDRCxzQkFBVSxLQUFLLFNBQVM7QUFDeEI7QUFBQSxVQUNKLEtBQUs7QUFDRCxzQkFBVSxLQUFLLGNBQWMsTUFBTSxLQUFLLDBCQUEwQixDQUFDO0FBQ25FO0FBQUEsVUFDSixLQUFLO0FBQ0Qsc0JBQVUsS0FBSyxlQUFlLE1BQU0sS0FBSywwQkFBMEIsQ0FBQztBQUNwRTtBQUFBLFVBQ0osS0FBSztBQUNELHNCQUFVLEtBQUssYUFBYSxJQUFJO0FBQ2hDO0FBQUEsVUFDSixLQUFLO0FBQ0Qsc0JBQVUsS0FBSyxRQUFRO0FBQ3ZCO0FBQUEsVUFDSixLQUFLO0FBQ0Qsc0JBQVUsSUFBSSxLQUFLLE9BQU8sS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDO0FBQ2pEO0FBQUEsVUFDSixLQUFLO0FBQ0Qsc0JBQVUsS0FBSyxJQUFJLFNBQVMsS0FBSyxPQUFPLENBQUM7QUFDekM7QUFBQSxVQUNKLEtBQUs7QUFDRCxzQkFBVyxLQUFLLFNBQVMsS0FBSyxLQUFNLE9BQU87QUFDM0M7QUFBQSxVQUNKLEtBQUs7QUFDRCxzQkFBVSxLQUFLLFNBQVM7QUFDeEI7QUFBQSxVQUNKLEtBQUs7QUFDRCxzQkFBVSxLQUFLLFNBQVMsS0FBSztBQUM3QjtBQUFBLFVBQ0osS0FBSztBQUNELHNCQUFVLEtBQUssU0FBUyxJQUFJO0FBQzVCO0FBQUEsVUFDSixLQUFLO0FBQ0Qsc0JBQVcsS0FBSyxTQUFTLElBQUksTUFBTztBQUNwQztBQUFBLFVBQ0osS0FBSztBQUNELHNCQUFVLEtBQUssV0FBVztBQUMxQjtBQUFBLFVBQ0osS0FBSztBQUNELHNCQUFVLEtBQUssV0FBVztBQUMxQjtBQUFBLFVBQ0osS0FBSztBQUNELHNCQUFVLEtBQUssZ0JBQWdCO0FBQy9CO0FBQUEsVUFDSixLQUFLO0FBQ0Qsc0JBQVUsS0FBSyxrQkFBa0I7QUFDakM7QUFBQSxRQUNSO0FBRUEsZ0JBQVEsS0FBSyxJQUFJLE1BQU0sYUFBYSxHQUFHO0FBQUEsVUFDbkMsS0FBSyxLQUFLLElBQUk7QUFDViwrQkFBbUIsV0FBVyxTQUFTLGlCQUFpQixDQUFDO0FBQ3pEO0FBQUEsVUFDSixLQUFLLEtBQUssSUFBSTtBQUNWLCtCQUFtQixXQUFXLFNBQVMsaUJBQWlCLENBQUM7QUFDekQ7QUFBQSxVQUNKLEtBQUssS0FBSyxJQUFJO0FBQ1YsK0JBQW1CLGFBQWEsU0FBUyxlQUFlO0FBQ3hEO0FBQUEsVUFDSixLQUFLLEtBQUssSUFBSTtBQUNWLGdCQUFJLG1CQUFtQixHQUFHO0FBRXRCLGtCQUFJLGFBQWEsS0FBSztBQUN0QixpQ0FBbUIsV0FBVyxPQUFPLEdBQUcsQ0FBQztBQUFBLFlBQzdDLE9BQU87QUFDSCxpQ0FBbUIsYUFBYSxTQUFTLGVBQWU7QUFBQSxZQUM1RDtBQUNBO0FBQUEsVUFDSixLQUFLLEtBQUssSUFBSTtBQUNWLGdCQUFJLG1CQUFtQixHQUFHO0FBQ3RCLGlDQUFtQixXQUFXLEtBQUssSUFBSSxXQUFXLE9BQU8sR0FBRyxpQkFBaUIsZUFBZTtBQUFBLFlBQ2hHLE9BQU87QUFFSCxpQ0FBbUIsYUFBYSxVQUFVLEdBQUcsZUFBZTtBQUFBLFlBQ2hFO0FBQ0E7QUFBQSxVQUNKLEtBQUssS0FBSyxJQUFJO0FBQ1YsZ0JBQUksYUFBYyxVQUFVO0FBRzVCLGdCQUFJLFNBQVMsYUFBYSxNQUFNO0FBQ2hDLGdCQUFJLFVBQVUsS0FBSyxJQUFJLE9BQU87QUFHOUIsZ0JBQUksUUFBUSxLQUFLLEtBQUssTUFBTSxVQUFVLEVBQUU7QUFDeEMsb0JBQVEsY0FBYyxPQUFPLENBQUM7QUFFOUIsZ0JBQUksVUFBVSxLQUFNLFVBQVU7QUFDOUIsc0JBQVUsY0FBYyxTQUFTLENBQUM7QUFFbEMsK0JBQW1CLFNBQVMsUUFBUTtBQUNwQztBQUFBLFFBQ1I7QUFBQSxNQUNKO0FBRUEscUJBQWUsYUFBYSxPQUFPLE9BQU8sUUFBUSxPQUFPLENBQUMsRUFBRSxNQUFNO0FBQUEsSUFDdEU7QUFDQSxXQUFPO0FBQUEsRUFDWDtBQUNKO0FBNERPLElBQU0sUUFBTixjQUFvQixXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT2xDLEtBQUssS0FBSztBQUNOLFVBQU0sS0FBSyxHQUFHO0FBRWQsU0FBSyxJQUFJLFVBQVUsS0FBSyxJQUFJLFdBQVM7QUFDckMsU0FBSyxJQUFJLGFBQWEsSUFBSSxpQkFBaUI7QUFBQSxNQUN2QyxTQUFTLEtBQUssSUFBSTtBQUFBLE1BQ2xCLFFBQVEsS0FBSyxJQUFJO0FBQUEsSUFDckIsQ0FBQztBQUNELFNBQUssVUFBVSxLQUFLLFNBQVMsSUFBSSxvQkFBSSxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxLQUFLO0FBRXJFLFFBQUksUUFBUTtBQUNaLFFBQUcsS0FBSyxjQUFjLEdBQUc7QUFDckIsV0FBSyxXQUFXLFlBQVksV0FBVztBQUNuQyxjQUFNLE9BQU87QUFBQSxNQUNqQixHQUFHLEdBQUk7QUFFUCxXQUFLLEtBQUs7QUFBQSxJQUNkLE9BQ0s7QUFDRCxXQUFLLE1BQU07QUFBQSxJQUNmO0FBRUEsUUFBRyxDQUFDLEtBQUssU0FBUyxLQUFLLEtBQUssSUFBSSxVQUFVO0FBQ3RDLGtCQUFZLFdBQVc7QUFDbkIsY0FBTSxLQUFLO0FBQUEsTUFDZixHQUFHLEtBQUssSUFBSSxZQUFZO0FBQUEsSUFDNUI7QUFBQSxFQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsUUFBUSxLQUFLO0FBQ1Qsa0JBQWMsS0FBSyxRQUFRO0FBRTNCLFVBQU0sUUFBUSxHQUFHO0FBQUEsRUFDckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsV0FBVztBQUNQLFdBQU8sS0FBSyxJQUFJLFNBQVM7QUFBQSxFQUM3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsUUFBUTtBQUNKLFFBQUksUUFBUTtBQUNaLFNBQUssV0FBVyxZQUFZLFdBQVU7QUFDbEMsWUFBTSxhQUFhO0FBQUEsSUFDdkIsR0FBRyxHQUFJO0FBQUEsRUFDWDtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsT0FBTztBQUNILGtCQUFjLEtBQUssUUFBUTtBQUFBLEVBQy9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLGVBQWU7QUFDWCxTQUFLLFFBQVEsV0FBVyxLQUFLLFFBQVEsV0FBVyxJQUFJLENBQUM7QUFDckQsU0FBSyxHQUFHLEtBQUssS0FBSyxJQUFJLFdBQVcsT0FBTyxLQUFLLE9BQU8sQ0FBQztBQUFBLEVBQ3pEO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxPQUFPO0FBQ0gsUUFBRyxDQUFDLEtBQUssY0FBYyxHQUFHO0FBQ3RCLFdBQUssS0FBSztBQUFBLElBQ2Q7QUFFQSxRQUFJLFFBQVEsTUFDWixVQUFVO0FBQUEsTUFDTixRQUFRLEtBQUs7QUFBQSxNQUNiLFNBQVMsS0FBSztBQUFBLE1BQ2QsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsUUFBUSxDQUFDO0FBQUEsUUFDTCxNQUFNLEtBQUssS0FBSztBQUFBLFFBQVMsT0FBTztBQUFBLE1BQ3BDLENBQUM7QUFBQSxNQUNELFlBQVksU0FBUyxLQUFLLFFBQVEsTUFBTSxNQUFNO0FBQzFDLFlBQUcsTUFBTSxjQUFjLEdBQUc7QUFDdEIsZ0JBQU0sVUFBVSxJQUFJLEtBQUssS0FBSyxRQUFRO0FBQUEsUUFDMUMsT0FDSztBQUNELGdCQUFNLEtBQUs7QUFDWCxnQkFBTSxVQUFVLElBQUksS0FBSyxLQUFLLFFBQVE7QUFDdEMsZ0JBQU0sR0FBRyxLQUFLLE1BQU0sSUFBSSxXQUFXLE9BQU8sTUFBTSxPQUFPLENBQUM7QUFDeEQsZ0JBQU0sTUFBTTtBQUFBLFFBQ2hCO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFFQSxlQUFXLEtBQUssUUFBUSxPQUFPLE9BQU87QUFBQSxFQUMxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxPQUFPO0FBRUgsU0FBSyxhQUFhLEtBQUssY0FBYyxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBRXBELFNBQUssYUFBUyxlQUFBRSxTQUFRLEtBQUssSUFBSSxLQUFLLFdBQVcsTUFBSyxLQUFLLFdBQVcsSUFBSTtBQUV4RSxTQUFLLFFBQVEsS0FBSyxPQUFPLE9BQU8sS0FBSyxXQUFXLE1BQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVc7QUFFdEcsU0FBSyxnQkFBZ0I7QUFFckIsU0FBSyxXQUFXO0FBRWhCLFNBQUssTUFBTSxLQUFLLE9BQU8sT0FBTyxLQUFLLFdBQVcsTUFBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsU0FBUztBQUVsRyxTQUFLLE1BQU0sS0FBSztBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsZ0JBQWdCO0FBQUEsSUFDcEIsQ0FBQztBQUVELGFBQVMsSUFBRSxHQUFHLElBQUUsS0FBSyxVQUFVLFFBQVEsS0FBSztBQUN4QyxXQUFLLFVBQVUsQ0FBQyxFQUFFLEtBQUs7QUFBQSxRQUNuQixVQUFVO0FBQUEsUUFDVixnQkFBZ0IsS0FBSyxXQUFXO0FBQUEsTUFDcEMsQ0FBQztBQUFBLElBQ0w7QUFFQSxTQUFLLFVBQVUsS0FBSztBQUFBLE1BQ2hCLFVBQVU7QUFBQSxNQUNWLGdCQUFnQixLQUFLLFdBQVc7QUFBQSxJQUNwQyxDQUFDO0FBRUQsU0FBSyxZQUFZLEtBQUs7QUFBQSxNQUNsQixVQUFVO0FBQUEsTUFDVixnQkFBZ0IsS0FBSyxXQUFXO0FBQUEsSUFDcEMsQ0FBQztBQUVELFNBQUssWUFBWSxLQUFLO0FBQUEsTUFDbEIsVUFBVTtBQUFBLE1BQ1YsZ0JBQWdCLEtBQUssV0FBVztBQUFBLElBQ3BDLENBQUM7QUFFRCxTQUFLLElBQUksS0FBSztBQUFBLE1BQ1YsUUFBUTtBQUFBLElBQ1osQ0FBQztBQUVELFNBQUssT0FBTztBQUFBLEVBQ2hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLGtCQUFrQjtBQUNkLFNBQUssWUFBWSxDQUFDO0FBRWxCLGFBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQ3pCLE9BQUMsU0FBVUMsSUFBRSxNQUFLO0FBQ2QsWUFBSSxVQUFVLEtBQUssV0FBVyxPQUFPLEtBQUssTUFBTSxLQUFLLFdBQVcscUJBQXFCLEtBQUssSUFBSSxLQUFLQSxLQUFJLEtBQUssS0FBSyxHQUFHLENBQUM7QUFDckgsWUFBSSxVQUFVLEtBQUssV0FBVyxPQUFPLEtBQUssTUFBTSxLQUFLLFdBQVcscUJBQXFCLEtBQUssSUFBSSxLQUFLQSxLQUFJLEtBQUssS0FBSyxHQUFHLENBQUM7QUFDckgsWUFBSSxRQUFRLEtBQUssV0FBVyxPQUFPLEtBQUssTUFBTSxLQUFLLFdBQVcscUJBQXFCLEtBQUssSUFBSSxLQUFLQSxLQUFJLEtBQUssS0FBSyxHQUFHLENBQUM7QUFDbkgsWUFBSSxRQUFRLEtBQUssV0FBVyxPQUFPLEtBQUssTUFBTSxLQUFLLFdBQVcscUJBQXFCLEtBQUssSUFBSSxLQUFLQSxLQUFJLEtBQUssS0FBSyxHQUFHLENBQUM7QUFFbkgsYUFBSyxVQUFVLEtBQUssS0FBSyxPQUFPLEtBQUssTUFBTSxVQUFVLE1BQU0sVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLENBQUM7QUFBQSxNQUNuRyxHQUFHLEdBQUUsSUFBSTtBQUFBLElBQ2I7QUFBQSxFQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLGFBQWE7QUFDVCxTQUFLLFlBQVksS0FBSyxPQUFPLEtBQUssTUFBTSxLQUFLLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsd0JBQXdCO0FBQ3ZLLFNBQUssY0FBYyxLQUFLLE9BQU8sS0FBSyxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVywwQkFBMEI7QUFDM0ssU0FBSyxjQUFjLEtBQUssT0FBTyxLQUFLLE1BQU0sS0FBSyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLDBCQUEwQjtBQUFBLEVBQy9LO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLFNBQVM7QUFDTCxTQUFLLFVBQVUsUUFBUSxFQUFDLFdBQVcsT0FBTyxLQUFLLEtBQUssUUFBUSxTQUFTLElBQUssS0FBSyxRQUFRLFdBQVcsSUFBSSxPQUFRLE1BQU0sS0FBSyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsS0FBSSxHQUFHLENBQUM7QUFDekssU0FBSyxZQUFZLFFBQVEsRUFBQyxXQUFXLE1BQU8sSUFBSSxLQUFLLFFBQVEsV0FBVyxJQUFLLE1BQU0sS0FBSyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsS0FBSSxHQUFHLENBQUM7QUFDeEksU0FBSyxZQUFZLFFBQVEsRUFBQyxXQUFXLE1BQU8sSUFBSSxLQUFLLFFBQVEsV0FBVyxJQUFLLE1BQU0sS0FBSyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsS0FBSSxHQUFHLENBQUM7QUFFeEksU0FBSyxRQUFRLFdBQVcsS0FBSyxRQUFRLFdBQVcsSUFBSSxDQUFDO0FBQUEsRUFDekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFBLGNBQWMsTUFBTTtBQUNoQixXQUFPO0FBQUEsTUFDSCxRQUFRO0FBQUEsTUFDUixRQUFRLEtBQUssTUFBTSxPQUFPLENBQUM7QUFBQSxNQUMzQixlQUFlLEtBQUssTUFBTSxPQUFPLE9BQU8sR0FBRztBQUFBLE1BQzNDLHNCQUFzQixLQUFLLE1BQU0sT0FBTyxLQUFLLEdBQUc7QUFBQSxNQUNoRCxzQkFBc0IsS0FBSyxNQUFNLE9BQU8sS0FBSyxHQUFHO0FBQUEsTUFDaEQsMEJBQTBCLEtBQUssTUFBTSxPQUFPLE1BQU0sR0FBRyxLQUFLO0FBQUEsTUFDMUQsNEJBQTRCLEtBQUssTUFBTSxPQUFPLENBQUM7QUFBQSxNQUMvQywwQkFBMEIsS0FBSyxNQUFNLE9BQU8sSUFBSSxHQUFHLEtBQUs7QUFBQSxNQUN4RCw4QkFBOEIsS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUFBLE1BQ2pELDRCQUE0QixLQUFLLE1BQU0sT0FBTyxJQUFJLEdBQUcsS0FBSztBQUFBLE1BQzFELDhCQUE4QixLQUFLLE1BQU0sT0FBTyxPQUFPLEdBQUc7QUFBQSxNQUMxRCw0QkFBNEIsS0FBSyxNQUFNLE9BQU8sSUFBSSxHQUFHLEtBQUs7QUFBQSxNQUMxRCxhQUFhLEtBQUssTUFBTSxPQUFPLE1BQU0sR0FBRztBQUFBLElBQzVDO0FBQUEsRUFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLGdCQUFnQjtBQUNaLFdBQU8sS0FBSyxJQUFJLGdCQUFnQjtBQUFBLEVBQ3BDO0FBQ0o7QUFJQSxXQUFXLE9BQU8sbUJBQW1COyIsCiAgIm5hbWVzIjogWyJudW1iZXJPZkxldHRlcnMiLCAiZGF0YVN0cmluZyIsICJSYXBoYWVsIiwgImkiXQp9Cg==

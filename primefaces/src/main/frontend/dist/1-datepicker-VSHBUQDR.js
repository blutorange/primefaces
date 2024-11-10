import {
  BaseWidget
} from "./chunk-HGD6GSK5.js";
import {
  __commonJS,
  __toESM
} from "./chunk-YRJTWU7C.js";

// src/datepicker/0-datepicker.cjs
var require_datepicker = __commonJS({
  "src/datepicker/0-datepicker.cjs"() {
    $.widget("prime.datePicker", {
      options: {
        id: null,
        name: null,
        defaultDate: null,
        defaultHour: 0,
        defaultMinute: 0,
        defaultSecond: 0,
        defaultMillisecond: 0,
        viewDate: null,
        style: null,
        styleClass: null,
        inline: false,
        flex: false,
        selectionMode: "single",
        rangeSeparator: "-",
        timeSeparator: ":",
        fractionSeparator: ".",
        inputId: null,
        inputStyle: null,
        inputStyleClass: null,
        required: false,
        readonly: false,
        readOnlyInput: false,
        disabled: false,
        valid: true,
        tabIndex: null,
        placeholder: null,
        showIcon: false,
        icon: "ui-icon ui-icon-calendar",
        showOnFocus: true,
        keepInvalid: false,
        numberOfMonths: 1,
        view: "date",
        touchUI: false,
        showWeek: false,
        weekCalculator: null,
        showTime: false,
        timeOnly: false,
        timeZone: null,
        showSeconds: false,
        showMilliseconds: false,
        hourFormat: "24",
        stepHour: 1,
        stepMinute: 1,
        stepSecond: 1,
        stepMillisecond: 1,
        shortYearCutoff: "+10",
        hideOnDateTimeSelect: false,
        hideOnRangeSelection: false,
        userLocale: null,
        locale: {
          firstDayOfWeek: 0,
          showMonthAfterYear: false,
          dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          today: "Today",
          clear: "Clear",
          now: "Now",
          year: "Year",
          month: "Month",
          week: "Week",
          day: "Day",
          hourText: "Hour",
          minuteText: "Minute",
          secondText: "Second",
          millisecondText: "Millisecond",
          am: "AM",
          pm: "PM",
          chooseDate: "Choose Date",
          prevDecade: "Previous Decade",
          nextDecade: "Next Decade",
          prevYear: "Previous Year",
          nextYear: "Next Year",
          prevMonth: "Previous Month",
          nextMonth: "Next Month",
          prevHour: "Previous Hour",
          nextHour: "Next Hour",
          prevMinute: "Previous Minute",
          nextMinute: "Next Minute",
          prevSecond: "Previous Second",
          nextSecond: "Next Second",
          prevMillisecond: "Previous Millisecond",
          nextMillisecond: "Next Millisecond"
        },
        dateFormat: "mm/dd/yy",
        yearRange: null,
        panelStyle: null,
        panelStyleClass: null,
        monthNavigator: false,
        yearNavigator: false,
        dateStyleClasses: null,
        disabledDates: null,
        enabledDates: null,
        disabledDays: null,
        minDate: null,
        maxDate: null,
        maxDateCount: null,
        showMinMaxRange: true,
        showOtherMonths: false,
        selectOtherMonths: false,
        autoMonthFormat: true,
        showButtonBar: false,
        todayButtonStyleClass: "ui-priority-secondary",
        clearButtonStyleClass: "ui-priority-secondary",
        appendTo: null,
        dateTemplate: null,
        timeInput: false,
        onFocus: null,
        onBlur: null,
        onInput: null,
        onSelect: null,
        onChange: null,
        onViewDateChange: null,
        onTodayButtonClick: null,
        onClearButtonClick: null,
        onBeforeShow: null,
        onBeforeHide: null,
        onMonthChange: null,
        onYearChange: null
      },
      _create: function() {
        this.container = this.element;
        this.inputfield = this.element.children("input");
        this.inputfield.addClass("hasDatepicker");
        this._setInitValues();
        this._render();
      },
      _setInitValues: function() {
        if (this.options.userLocale && typeof this.options.userLocale === "object") {
          $.extend(this.options.locale, this.options.userLocale);
        }
        if (this.options.timeOnly) {
          this.options.showTime = true;
        }
        if (this.options.showWeek && !this.options.weekCalculator) {
          this.options.weekCalculator = this.calculateWeekNumber.bind(this);
          var sundayIndex = this.getSundayIndex();
          if (this.options.locale.firstDayWeekOffset === void 0) {
            if (sundayIndex == 0) {
              this.options.locale.firstDayWeekOffset = 6;
            } else if (sundayIndex == 1) {
              this.options.locale.firstDayWeekOffset = 12;
            } else if (sundayIndex == 6) {
              this.options.locale.firstDayWeekOffset = 4;
            } else {
              this.options.showWeek = false;
            }
          }
        }
        var parsedDefaultDate = this.parseValue(this.options.defaultDate);
        var hasMultipleDates = (this.isMultipleSelection() || this.isRangeSelection()) && parsedDefaultDate instanceof Array;
        var viewDateDefaultsToNow = false;
        this.value = parsedDefaultDate;
        if (this.options.viewDate && !hasMultipleDates) {
          this.viewDate = this.parseValue(this.options.viewDate);
          if (!this.viewDate) {
            this.viewDate = this.getNow();
          }
        } else {
          if (hasMultipleDates) {
            this.viewDate = parsedDefaultDate[0];
          } else {
            this.viewDate = parsedDefaultDate;
          }
          if (this.viewDate === null) {
            this.viewDate = this.getNow();
            this.viewDate.setHours(this.options.defaultHour);
            this.viewDate.setMinutes(this.options.defaultMinute);
            if (!this.options.showSeconds && !this.options.showMilliseconds) {
              this.viewDate.setSeconds(0);
            } else {
              this.viewDate.setSeconds(this.options.defaultSecond);
            }
            if (!this.options.showMilliseconds) {
              this.viewDate.setMilliseconds(0);
            } else {
              this.viewDate.setMilliseconds(this.options.defaultMillisecond);
            }
            viewDateDefaultsToNow = true;
          }
        }
        this.viewDate = this.isDate(this.viewDate) ? new Date(this.viewDate) : this.getNow();
        this.viewDate.setMinutes(this.stepMinute(this.viewDate.getMinutes()));
        this.options.minDate = this.parseMinMaxValue(this.options.minDate);
        this.options.maxDate = this.parseMinMaxValue(this.options.maxDate);
        this.ticksTo1970 = ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 1e7;
        if (viewDateDefaultsToNow) {
          if (this.options.minDate) {
            if (this.viewDate < this.options.minDate) {
              this.viewDate = new Date(this.options.minDate.getTime());
            }
          }
          if (this.options.maxDate) {
            if (this.viewDate > this.options.maxDate) {
              this.viewDate = new Date(this.options.maxDate.getTime());
            }
          }
        }
        if (!this.options.viewDate) {
          this.options.viewDate = this.viewDate;
        }
        this.hasCustomYearRange = this.options.yearRange !== null;
        this.updateYearNavigator();
        if (this.options.disabledDates) {
          for (var i = 0; i < this.options.disabledDates.length; i++) {
            this.options.disabledDates[i] = this.parseOptionValue(this.options.disabledDates[i]);
          }
        }
        if (this.options.enabledDates && this.options.enabledDates.length > 0) {
          for (var i = 0; i < this.options.enabledDates.length; i++) {
            this.options.enabledDates[i] = this.parseOptionValue(this.options.enabledDates[i]);
          }
        }
        this.bindResponsiveResizeListener();
      },
      parseOptionValue: function(option) {
        if (option && typeof option === "string") {
          return this.parseDate(option, this.options.dateFormat);
        }
        return option;
      },
      parseMinMaxValue: function(option) {
        if (option && typeof option === "string") {
          return this.parseDateTime(option);
        }
        return option;
      },
      parseValue: function(option) {
        if (option && typeof option === "string") {
          return this.parseValueFromString(option);
        }
        return option;
      },
      setDate: function(date) {
        if (!date) {
          this.updateModel(null, null);
          return;
        }
        var newDate = this.parseValue(date);
        var newDateMeta = {
          day: newDate.getDate(),
          month: newDate.getMonth(),
          year: newDate.getFullYear(),
          selectable: true
          /*, today: true*/
        };
        this.value = newDate;
        this.updateViewDate(null, newDate);
        this.onDateSelect(null, newDateMeta);
      },
      getDate: function() {
        return this.value;
      },
      getFirstDayOfMonthIndex: function(month, year) {
        var day = this.getNow();
        day.setDate(1);
        day.setMonth(month);
        day.setFullYear(year);
        var dayIndex = day.getDay() + this.getSundayIndex();
        return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
      },
      getFirstDayOfWeek: function() {
        return this.options.locale.firstDayOfWeek;
      },
      getSundayIndex: function() {
        var firstDayOfWeek = this.getFirstDayOfWeek();
        return firstDayOfWeek > 0 ? 7 - firstDayOfWeek : 0;
      },
      getSaturdayIndex: function() {
        return 7 - this.getFirstDayOfWeek() - 1;
      },
      getDaysCountInMonth: function(month, year) {
        return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
      },
      getDaysCountInPrevMonth: function(month, year) {
        var prev = this.getPreviousMonthAndYear(month, year);
        return this.getDaysCountInMonth(prev.month, prev.year);
      },
      daylightSavingAdjust: function(date) {
        if (!date) {
          return null;
        }
        date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
        return date;
      },
      getPreviousMonthAndYear: function(month, year) {
        var m, y;
        if (month === 0) {
          m = 11;
          y = year - 1;
        } else {
          m = month - 1;
          y = year;
        }
        return { "month": m, "year": y };
      },
      getNextMonthAndYear: function(month, year) {
        var m, y;
        if (month === 11) {
          m = 0;
          y = year + 1;
        } else {
          m = month + 1;
          y = year;
        }
        return { "month": m, "year": y };
      },
      createWeekDaysInternal: function(dayNames) {
        var weekDays = [], dayIndex = this.getFirstDayOfWeek();
        for (var i = 0; i < 7; i++) {
          weekDays.push(dayNames[dayIndex]);
          dayIndex = dayIndex === 6 ? 0 : ++dayIndex;
        }
        return weekDays;
      },
      createWeekDaysMin: function() {
        return this.createWeekDaysInternal(this.options.locale.dayNamesMin);
      },
      createWeekDaysShort: function() {
        return this.createWeekDaysInternal(this.options.locale.dayNamesShort);
      },
      createWeekDays: function() {
        return this.createWeekDaysInternal(this.options.locale.dayNames);
      },
      createMonths: function(month, year) {
        var months = [];
        for (var i = 0; i < this.options.numberOfMonths; i++) {
          var m = month + i, y = year;
          if (m > 11) {
            y = year + Math.floor(m / 12);
            m = m % 12;
          }
          months.push(this.createMonth(m, y, i));
        }
        return months;
      },
      createMonth: function(month, year, index) {
        var dates = [];
        firstDay = this.getFirstDayOfMonthIndex(month, year);
        daysLength = this.getDaysCountInMonth(month, year);
        prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
        dayNo = 1;
        today = this.getNow();
        monthRows = Math.ceil((daysLength + firstDay) / 7);
        for (var i = 0; i < monthRows; i++) {
          var week = [];
          if (i === 0) {
            for (var j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
              var prev = this.getPreviousMonthAndYear(month, year);
              week.push({
                day: j,
                month: prev.month,
                year: prev.year,
                otherMonth: true,
                today: this.isToday(today, j, prev.month, prev.year),
                selectable: this.isSelectable(j, prev.month, prev.year, true)
              });
            }
            var remainingDaysLength = 7 - week.length;
            for (var j = 0; j < remainingDaysLength; j++) {
              week.push({
                day: dayNo,
                month,
                year,
                today: this.isToday(today, dayNo, month, year),
                selectable: this.isSelectable(dayNo, month, year, false)
              });
              dayNo++;
            }
          } else {
            for (var j = 0; j < 7; j++) {
              if (dayNo > daysLength) {
                var next = this.getNextMonthAndYear(month, year);
                week.push({
                  day: dayNo - daysLength,
                  month: next.month,
                  year: next.year,
                  otherMonth: true,
                  today: this.isToday(today, dayNo - daysLength, next.month, next.year),
                  selectable: this.isSelectable(dayNo - daysLength, next.month, next.year, true)
                });
              } else {
                week.push({
                  day: dayNo,
                  month,
                  year,
                  today: this.isToday(today, dayNo, month, year),
                  selectable: this.isSelectable(dayNo, month, year, false)
                });
              }
              dayNo++;
            }
          }
          dates.push(week);
        }
        return {
          month,
          year,
          dates,
          index
        };
      },
      isSelectable: function(day, month, year, otherMonth) {
        var validMin = true;
        validMax = true;
        validDate = true;
        validDay = true;
        validMonth = true;
        if (this.options.minDate) {
          if (this.options.minDate.getFullYear() > year) {
            validMin = false;
          } else if (this.options.minDate.getFullYear() === year) {
            if (this.options.minDate.getMonth() > month) {
              validMin = false;
            } else if (this.options.minDate.getMonth() === month) {
              if (this.options.minDate.getDate() > day) {
                validMin = false;
              }
            }
          }
        }
        if (this.options.maxDate) {
          if (this.options.maxDate.getFullYear() < year) {
            validMax = false;
          } else if (this.options.maxDate.getFullYear() === year) {
            if (this.options.maxDate.getMonth() < month) {
              validMax = false;
            } else if (this.options.maxDate.getMonth() === month) {
              if (this.options.maxDate.getDate() < day) {
                validMax = false;
              }
            }
          }
        }
        if (this.options.disabledDates) {
          validDate = !this.isDateDisabled(day, month, year);
        }
        if (this.options.enabledDates) {
          validDate = this.isDateEnabled(day, month, year);
        }
        if (this.options.disabledDays) {
          validDay = !this.isDayDisabled(day, month, year);
        }
        if (this.options.selectOtherMonths === false && otherMonth) {
          validMonth = false;
        }
        return validMin && validMax && validDate && validDay && validMonth;
      },
      isSelected: function(dateMeta) {
        if (this.value) {
          if (this.options.view === "week") {
            var currentDate = this.value[0];
            var currentDateMeta = { day: currentDate.getDate(), month: currentDate.getMonth(), year: currentDate.getFullYear() };
            var w1 = this.options.weekCalculator(currentDateMeta);
            var w2 = this.options.weekCalculator(dateMeta);
            return w1 == w2;
          }
          if (this.isSingleSelection()) {
            return this.isDateEquals(this.value, dateMeta);
          } else if (this.isMultipleSelection()) {
            var selected = false;
            for (var i = 0; i < this.value.length; i++) {
              var date = this.value[i];
              selected = this.isDateEquals(date, dateMeta);
              if (selected) {
                break;
              }
            }
            return selected;
          } else if (this.isRangeSelection()) {
            if (this.value[1])
              return this.isDateEquals(this.value[0], dateMeta) || this.isDateEquals(this.value[1], dateMeta) || this.isDateBetween(this.value[0], this.value[1], dateMeta);
            else
              return this.isDateEquals(this.value[0], dateMeta);
          }
        } else {
          return false;
        }
      },
      isMonthSelected: function(month) {
        if (this.value) {
          if (this.isRangeSelection()) {
            var dateMeta = { year: this.viewDate.getFullYear(), month, day: 1, selectable: true };
            if (this.value[1])
              return this.isDateEquals(this.value[0], dateMeta) || this.isDateEquals(this.value[1], dateMeta) || this.isDateBetween(this.value[0], this.value[1], dateMeta);
            else
              return this.isDateEquals(this.value[0], dateMeta);
          } else {
            return this.isDate(this.value) && this.value.getMonth() === month && this.value.getFullYear() === this.viewDate.getFullYear();
          }
        }
        return false;
      },
      isDateEquals: function(value, dateMeta) {
        if (this.isDate(value))
          return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
        else
          return false;
      },
      isDateBetween: function(start, end, dateMeta) {
        var between = false;
        if (this.isDate(start) && this.isDate(end)) {
          var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
          return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
        }
        return between;
      },
      isSingleSelection: function() {
        return this.options.selectionMode === "single";
      },
      isRangeSelection: function() {
        return this.options.selectionMode === "range";
      },
      isMultipleSelection: function() {
        return this.options.selectionMode === "multiple";
      },
      isToday: function(today2, day, month, year) {
        return today2.getDate() === day && today2.getMonth() === month && today2.getFullYear() === year;
      },
      isDateDisabled: function(day, month, year) {
        if (this.options.disabledDates) {
          for (var i = 0; i < this.options.disabledDates.length; i++) {
            var disabledDate = this.options.disabledDates[i];
            if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
              return true;
            }
          }
        }
        return false;
      },
      isDateEnabled: function(day, month, year) {
        if (this.options.enabledDates && this.options.enabledDates.length > 0) {
          for (var i = 0; i < this.options.enabledDates.length; i++) {
            var enabledDate = this.options.enabledDates[i];
            if (enabledDate.getFullYear() === year && enabledDate.getMonth() === month && enabledDate.getDate() === day) {
              return true;
            }
          }
          return false;
        }
        return true;
      },
      isDayDisabled: function(day, month, year) {
        if (this.options.disabledDays) {
          var weekday = new Date(year, month, day), weekdayNumber = weekday.getDay();
          return this.options.disabledDays.indexOf(weekdayNumber) !== -1;
        }
        return false;
      },
      getValueToRender: function() {
        var formattedValue = "";
        if (this.value) {
          try {
            if (this.isRangeSelection()) {
              if (this.value && this.value.length) {
                var startDate = this.value[0], endDate = this.value[1];
                formattedValue = this.formatDateTime(startDate);
                if (endDate) {
                  formattedValue += " " + this.options.rangeSeparator + " " + this.formatDateTime(endDate);
                }
                if (this.options.view === "week") {
                  var startDateMeta = { day: startDate.getDate(), month: startDate.getMonth(), year: startDate.getFullYear() };
                  var week = this.options.weekCalculator(startDateMeta);
                  formattedValue += " (" + this.options.locale.weekHeader + " " + week + ")";
                }
              }
            } else if (this.isSingleSelection()) {
              formattedValue = this.formatDateTime(this.value);
            } else if (this.isMultipleSelection()) {
              for (var i = 0; i < this.value.length; i++) {
                var dateAsString = this.formatDateTime(this.value[i]);
                formattedValue += dateAsString;
                if (i !== this.value.length - 1) {
                  formattedValue += ", ";
                }
              }
            }
          } catch (err) {
            formattedValue = this.value;
          }
        }
        return formattedValue;
      },
      formatDateTime: function(date) {
        var formattedValue = null;
        if (date) {
          if (this.options.timeOnly) {
            formattedValue = this.formatTime(date);
          } else {
            formattedValue = this.formatDate(date, this.options.dateFormat);
            if (this.options.showTime) {
              formattedValue += " " + this.formatTime(date);
            }
          }
        }
        return formattedValue;
      },
      // Ported from jquery-ui datepicker formatDate
      formatDate: function(date, format) {
        if (!date) {
          return "";
        }
        var iFormat, lookAhead = function(match) {
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
        };
        var output = "", literal = false;
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
                  var day = date.hasOwnProperty("day") ? date.day : date.getDate();
                  output += formatNumber("d", day, 2);
                  break;
                case "D":
                  output += formatName("D", date.getDay(), this.options.locale.dayNamesShort, this.options.locale.dayNames);
                  break;
                case "o":
                  output += formatNumber(
                    "o",
                    Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 864e5),
                    3
                  );
                  break;
                case "m":
                  var month = date.hasOwnProperty("month") ? date.month : date.getMonth();
                  output += formatNumber("m", month + 1, 2);
                  break;
                case "M":
                  var month = date.hasOwnProperty("month") ? date.month : date.getMonth();
                  output += formatName("M", month, this.options.locale.monthNamesShort, this.options.locale.monthNames);
                  break;
                case "y":
                  var year = date.hasOwnProperty("year") ? date.year : date.getFullYear();
                  output += lookAhead("y") ? year : (year % 100 < 10 ? "0" : "") + year % 100;
                  break;
                case "@":
                  output += date.getTime();
                  break;
                case "!":
                  output += date.getTime() * 1e4 + this.ticksTo1970;
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
      formatTime: function(date) {
        if (!date) {
          return "";
        }
        var output = "", hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds(), milliseconds = date.getMilliseconds();
        if (this.options.hourFormat === "12" && hours > 11 && hours !== 12) {
          hours -= 12;
        }
        if (this.options.hourFormat === "12") {
          output += hours === 0 ? 12 : hours < 10 ? "0" + hours : hours;
        } else {
          output += hours < 10 ? "0" + hours : hours;
        }
        output += this.options.timeSeparator;
        output += minutes < 10 ? "0" + minutes : minutes;
        if (this.options.showSeconds) {
          output += this.options.timeSeparator;
          output += seconds < 10 ? "0" + seconds : seconds;
        }
        if (this.options.showMilliseconds) {
          output += this.options.fractionSeparator;
          output += milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
        }
        if (this.options.hourFormat === "12") {
          output += date.getHours() > 11 ? " " + this.options.locale.pm : " " + this.options.locale.am;
        }
        return output;
      },
      parseTime: function(value, ampm) {
        var val = value.replace(this.options.fractionSeparator, this.options.timeSeparator), tokens = val.split(this.options.timeSeparator), showSeconds = this.options.showSeconds || this.options.showMilliseconds, validTokenLength = 2 + (showSeconds ? 1 : 0) + (this.options.showMilliseconds ? 1 : 0);
        if (tokens.length !== validTokenLength) {
          throw "Invalid time";
        }
        var h = parseInt(tokens[0]), m = parseInt(tokens[1]), s = showSeconds ? parseInt(tokens[2]) : null, ms = this.options.showMilliseconds ? parseInt(tokens[3]) : null;
        if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || this.options.hourFormat === "12" && h > 12 || this.options.showSeconds && (isNaN(s) || s > 59) || this.options.showMilliseconds && (isNaN(ms) || ms > 999)) {
          throw "Invalid time";
        } else {
          if (this.options.hourFormat === "12" && h !== 12 && ampm === this.options.locale.pm) {
            h += 12;
          } else if (this.options.hourFormat === "12" && h === 12 && ampm === this.options.locale.am) {
            h -= 12;
          }
          return { hour: h, minute: m, second: s, millisecond: ms };
        }
      },
      // Ported from jquery-ui datepicker parseDate
      parseDate: function(value, format) {
        if (format == null || value == null) {
          throw "Invalid arguments";
        }
        value = typeof value === "object" ? value.toString() : value + "";
        if (value === "") {
          return null;
        }
        var iFormat, dim, extra, iValue = 0, shortYearCutoff = typeof this.options.shortYearCutoff !== "string" ? this.options.shortYearCutoff : this.getNow().getFullYear() % 100 + parseInt(this.options.shortYearCutoff, 10), year = -1, month = -1, day = -1, doy = -1, literal = false, date, lookAhead = function(match) {
          var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
          if (matches) {
            iFormat++;
          }
          return matches;
        }, getNumber = function(match) {
          var isDoubled = lookAhead(match), size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2, minSize = match === "y" ? size : 1, digits = new RegExp("^\\d{" + minSize + "," + size + "}"), num = value.substring(iValue).match(digits);
          if (!num && match === "y" && isDoubled) {
            digits = new RegExp("^\\d{2," + size + "}"), num = value.substring(iValue).match(digits);
          }
          if (!num) {
            throw "Missing number at position " + iValue;
          }
          iValue += num[0].length;
          return parseInt(num[0], 10);
        }, getName = function(match, shortNames, longNames) {
          var index = -1, arr = lookAhead(match) ? longNames : shortNames, names = [];
          for (var i = 0; i < arr.length; i++) {
            names.push([i, arr[i]]);
          }
          names.sort(function(a, b) {
            return -(a[1].length - b[1].length);
          });
          for (var i = 0; i < names.length; i++) {
            var name = names[i][1];
            if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
              index = names[i][0];
              iValue += name.length;
              break;
            }
          }
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
        if (this.options.view === "month") {
          day = 1;
        }
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
                getName("D", this.options.locale.dayNamesShort, this.options.locale.dayNames);
                break;
              case "o":
                doy = getNumber("o");
                break;
              case "m":
                month = getNumber("m");
                break;
              case "M":
                month = getName("M", this.options.locale.monthNamesShort, this.options.locale.monthNames);
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
                date = new Date((getNumber("!") - this.ticksTo1970) / 1e4);
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
          year = this.getNow().getFullYear();
        } else if (year < 100) {
          year += this.getNow().getFullYear() - this.getNow().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
        }
        if (doy > -1) {
          month = 1;
          day = doy;
          do {
            dim = this.getDaysCountInMonth(year, month - 1);
            if (day <= dim) {
              break;
            }
            month++;
            day -= dim;
          } while (true);
        }
        date = this.daylightSavingAdjust(new Date(year, month - 1, day));
        if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
          throw "Invalid date";
        }
        return date;
      },
      parseValueFromString: function(text) {
        if (!text || text.trim().length === 0) {
          return null;
        }
        var value;
        try {
          if (this.isSingleSelection()) {
            value = this.parseDateTime(text);
          } else if (this.isMultipleSelection()) {
            var tokens = text.split(",");
            value = [];
            for (var i = 0; i < tokens.length; i++) {
              value.push(this.parseDateTime(tokens[i].trim()));
            }
          } else if (this.isRangeSelection()) {
            var tokens = text.split(new RegExp(this.options.rangeSeparator + "| " + this.options.rangeSeparator + " ", "g"));
            value = [];
            for (var i = 0; i < tokens.length; i++) {
              value[i] = this.parseDateTime(tokens[i].trim());
            }
          }
        } catch (error) {
          PrimeFaces.error("DatePicker Error: " + error);
        }
        return value;
      },
      parseDateTime: function(text) {
        var date, parts = text.split(" ");
        if (this.options.timeOnly) {
          date = this.getNow();
          this.populateTime(date, parts[0], parts[1]);
        } else {
          if (this.options.showTime) {
            var ampm = this.options.hourFormat === "12" ? parts.pop() : null;
            var timeString = parts.pop();
            if (/\d/.test(timeString) === false) {
              ampm = timeString + " " + ampm;
              timeString = parts.pop();
            }
            date = this.parseDate(parts.join(" "), this.options.dateFormat);
            this.populateTime(date, timeString, ampm);
          } else {
            date = this.parseDate(text, this.options.dateFormat);
          }
        }
        return date;
      },
      populateTime: function(value, timeString, ampm) {
        if (this.options.hourFormat === "12" && (ampm !== this.options.locale.pm && ampm !== this.options.locale.am)) {
          throw new Error("Invalid Time");
        }
        var time = this.parseTime(timeString, ampm);
        value.setHours(time.hour);
        value.setMinutes(this.stepMinute(time.minute));
        if (this.options.showSeconds || this.options.showMilliseconds) {
          value.setSeconds(time.second);
        } else {
          value.setSeconds(0);
        }
        if (this.options.showMilliseconds) {
          value.setMilliseconds(time.millisecond);
        } else {
          value.setMilliseconds(0);
        }
      },
      isInMinYear: function() {
        return this.options.minDate && this.options.minDate.getFullYear() === this.viewDate.getFullYear();
      },
      isInMaxYear: function() {
        return this.options.maxDate && this.options.maxDate.getFullYear() === this.viewDate.getFullYear();
      },
      _destroy: function() {
        this.hideOverlay();
        this.unbindResponsiveResizeListener();
        PrimeFaces.utils.cleanseDomElement(this.panel);
      },
      /**
       * @override
       * @protected
       */
      _render: function() {
        if (this.options.styleClass) {
          this.container.addClass(this.options.styleClass);
        }
        if (this.options.style) {
          this.container.attr("style", this.options.style);
        }
        if (!this.options.inline) {
          if (this.options.inputStyleClass) {
            this.inputfield.addClass(this.options.inputStyleClass);
          }
          if (this.options.inputStyle) {
            this.inputfield.attr("style", this.options.inputStyle);
          }
        }
        if (this.options.showIcon && !this.options.inline) {
          if (this.triggerButton) {
            this.triggerButton.remove();
          }
          this.renderTriggerButton();
          this.container.append(this.triggerButton);
          this.container.addClass("ui-trigger-calendar");
        }
        if (this.panel) {
          this.panel.remove();
        }
        this.renderDatePickerPanel();
        if (this.options.panelStyleClass) {
          this.panel.addClass(this.options.panelStyleClass);
        }
        if (this.options.panelStyle) {
          this.panel.attr("style", this.options.panelStyle);
        }
        if (!this.options.inline && this.options.appendTo) {
          $(this.options.appendTo).children("[id='" + $(this.container).attr("id") + "_panel']").not(this.panel).remove();
          this.panel.appendTo(this.options.appendTo);
        } else {
          this.panel.appendTo(this.container);
        }
        this._setInitOptionValues();
        this._bindEvents();
        this._bindPanelEvents();
        this.transition = PrimeFaces.utils.registerCSSTransition(this.panel, "ui-connected-overlay");
      },
      _setInitOptionValues: function() {
        if (this.options.yearNavigator) {
          var year = this.viewDate.getFullYear();
          var month = this.viewDate.getMonth();
          var yearElts = this.panel.find(".ui-datepicker-header > .ui-datepicker-title > .ui-datepicker-year");
          yearElts.each(function(index, yearElt) {
            $(yearElt).val(year);
            month = month + 1;
            if (month === 12) {
              month = 0;
              year = year + 1;
            }
          });
        }
        if (this.options.monthNavigator && this.options.view !== "month") {
          var month = this.viewDate.getMonth();
          var monthElts = this.panel.find(".ui-datepicker-header > .ui-datepicker-title > .ui-datepicker-month");
          monthElts.each(function(index, monthElt) {
            $(monthElt).val(month);
            month = month + 1;
            if (month === 12) {
              month = 0;
            }
          });
        }
        this.setNavigationState(this.viewDate);
      },
      renderTriggerButton: function() {
        var panelId = this.container.attr("id") + "_panel";
        var aria = ' aria-haspopup="dialog" aria-expanded="false" aria-controls="' + panelId + '" ';
        this.triggerButton = $('<button type="button" ' + aria + ' class="ui-datepicker-trigger ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only' + (this.options.disabled ? " ui-state-disabled" : "") + '" tabindex="0"><span class="ui-button-icon-left ' + this.options.icon + '"></span><span class="ui-button-text">ui-button</span></button>');
      },
      renderDatePickerPanel: function() {
        var _classes = this.getClassesToAdd({
          "ui-datepicker-inline": this.options.inline,
          "ui-shadow": !this.options.inline,
          "ui-input-overlay": !this.options.inline,
          "ui-state-disabled": this.options.disabled,
          "ui-state-error": this.options.inline && !this.options.valid,
          "ui-datepicker-timeonly": this.options.timeOnly,
          "ui-datepicker-multiple-month": this.options.numberOfMonths > 1,
          "ui-datepicker-monthpicker": this.options.view === "month",
          "ui-datepicker-touch-ui": this.options.touchUI
        });
        var panelId = this.container.attr("id") + "_panel";
        var _aria = ' role="dialog" aria-modal="true" aria-label="' + this.options.locale.chooseDate + '" ';
        this.panel = $('<div id="' + panelId + '"' + _aria + ' class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ' + _classes + '"></div>');
        this.panel.get(0).innerHTML = this.renderPanelElements();
        this.panel.css({
          "display": this.options.inline ? "block" : "none",
          "position": this.options.inline || this.options.touchUI ? "" : "absolute"
        });
        if (this.options.onPanelCreate) {
          this.options.onPanelCreate.call(this);
        }
      },
      renderPanelElements: function() {
        var elementsHtml = "";
        if (this.options.disabled) {
          this.panel.addClass("ui-state-disabled");
        } else {
          this.panel.removeClass("ui-state-disabled");
        }
        if (!this.options.timeOnly) {
          if (this.options.view === "date" || this.options.view === "week") {
            elementsHtml += this.renderDateView();
          } else if (this.options.view === "month") {
            elementsHtml += this.renderMonthView();
          }
        }
        if (this.options.showTime || this.options.timeOnly) {
          elementsHtml += this.renderTimePicker();
        }
        if (this.options.showButtonBar) {
          elementsHtml += this.renderButtonBar();
        }
        return elementsHtml;
      },
      renderDateView: function() {
        this.monthsMetadata = this.createMonths(this.viewDate.getMonth(), this.viewDate.getFullYear());
        var months = this.renderMonths(this.monthsMetadata);
        return months;
      },
      renderMonthView: function() {
        var backwardNavigator = this.renderBackwardNavigator(this.options.locale.prevYear), forwardNavigator = this.renderForwardNavigator(this.options.locale.nextYear), yearElement = this.renderTitleYearElement(this.viewDate.getFullYear()), months = this.renderMonthViewMonths();
        return '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">' + backwardNavigator + forwardNavigator + '<div class="ui-datepicker-title">' + yearElement + '</div></div><div class="ui-monthpicker">' + months + "</div></div>";
      },
      renderTimePicker: function() {
        var timepicker = '<div class="ui-timepicker ui-widget-header ui-corner-all' + (this.options.timeInput ? " ui-timepicker-timeinput" : "") + '">';
        timepicker += this.renderHourPicker();
        timepicker += this.renderSeparator();
        timepicker += this.renderMinutePicker();
        timepicker += this.options.showSeconds ? this.renderSeparator() : "";
        timepicker += this.renderSecondPicker();
        timepicker += this.options.showMilliseconds ? this.renderFractionSeparator() : "";
        timepicker += this.renderMillisecondPicker();
        timepicker += this.renderAmPmPicker();
        timepicker += "</div>";
        return timepicker;
      },
      renderButtonBar: function() {
        var grid = this.options.flex ? "grid" : "ui-g";
        var today2 = this.options.flex ? "col-6 text-left" : "ui-g-6";
        var clear = this.options.flex ? "col-6 text-right" : "ui-g-6";
        var todayLabel = this.options.locale.today;
        var now = this.getNow();
        var minDate = this.options.minDate;
        var maxDate = this.options.maxDate;
        var todayStyleClass = "ui-today-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only " + this.options.todayButtonStyleClass;
        if (this.options.showTime) {
          todayLabel = this.options.locale.now;
        } else {
          now = this.truncateDate(now);
        }
        if (minDate && minDate > now || maxDate && maxDate < now) {
          todayStyleClass += " ui-helper-hidden";
        }
        return '<div class="ui-datepicker-buttonbar ui-widget-header"><div class="' + grid + '"><div class="' + today2 + '"><button type="button" class="' + todayStyleClass + '"><span class="ui-button-text">' + todayLabel + '</span></button></div><div class="' + clear + '"><button type="button" class="ui-clear-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ' + this.options.clearButtonStyleClass + '"><span class="ui-button-text">' + this.options.locale.clear + "</span></button></div></div></div>";
      },
      renderMonthViewMonth: function(index) {
        var monthName = this.options.locale.monthNamesShort[index], content = this.options.dateTemplate ? this.options.dateTemplate.call(this, monthName) : this.escapeHTML(monthName), compareDate = new Date(this.viewDate.getFullYear(), index, 1), minDate = this.options.minDate, maxDate = this.options.maxDate, disabled = false;
        if (minDate && minDate > compareDate) {
          disabled = true;
        }
        if (maxDate && maxDate < compareDate) {
          disabled = true;
        }
        var monthClass = this.getClassesToAdd({
          "ui-state-active": this.isMonthSelected(index),
          "ui-state-disabled": disabled
        });
        return '<a tabindex="0" class="ui-monthpicker-month' + monthClass + '">' + content + "</a>";
      },
      renderMonthViewMonths: function() {
        var months = "";
        for (var i = 0; i <= 11; i++) {
          months += this.renderMonthViewMonth(i);
        }
        return months;
      },
      renderMonths: function(monthsMetadata) {
        var monthsHtml = "";
        for (var i = 0; i < monthsMetadata.length; i++) {
          monthsHtml += this.renderMonth(monthsMetadata[i], i);
        }
        return monthsHtml;
      },
      renderMonth: function(monthMetadata, index) {
        var weekDaysMin = this.createWeekDaysMin(), weekDays = this.createWeekDays(), backwardNavigator = index === 0 ? this.renderBackwardNavigator(this.options.locale.prevMonth) : "", forwardNavigator = this.options.numberOfMonths === 1 || index === this.options.numberOfMonths - 1 ? this.renderForwardNavigator(this.options.locale.nextMonth) : "", title = this.renderTitle(monthMetadata), dateViewGrid = this.renderDateViewGrid(monthMetadata, weekDaysMin, weekDays);
        return '<div class="ui-datepicker-group ui-widget-content"><div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">' + backwardNavigator + forwardNavigator + title + "</div>" + dateViewGrid + "</div>";
      },
      renderBackwardNavigator: function(ariaLabel) {
        return '<button type="button" aria-label="' + ariaLabel + '" class="ui-datepicker-prev ui-corner-all" tabindex="0"><span class="ui-icon ui-icon-circle-triangle-w"></span></button>';
      },
      renderForwardNavigator: function(ariaLabel) {
        return '<button type="button" aria-label="' + ariaLabel + '" class="ui-datepicker-next ui-corner-all" tabindex="0"><span class="ui-icon ui-icon-circle-triangle-e"></span></button>';
      },
      renderTitleMonthElement: function(month, index) {
        if (this.options.monthNavigator && this.options.view !== "month" && index === 0) {
          return '<select class="ui-datepicker-month" tabindex="0" aria-label="' + this.options.locale.month + '">' + this.renderTitleOptions("month", this.options.locale.monthNamesShort, month) + "</select>";
        } else {
          return '<span class="ui-datepicker-month">' + this.escapeHTML(this.options.locale.monthNames[month]) + "</span>";
        }
      },
      renderTitleYearElement: function(year, index) {
        if (this.options.yearNavigator && index === 0) {
          this.updateYearNavigator();
          var years = this.options.yearRange.split(":"), yearStart = parseInt(years[0], 10), yearEnd = parseInt(years[1], 10), minDate = this.options.minDate, maxDate = this.options.maxDate, minYear = yearStart, maxYear = yearEnd;
          if (minDate) {
            minYear = Math.max(minDate.getFullYear(), yearStart);
          }
          if (maxDate) {
            maxYear = Math.min(maxDate.getFullYear(), yearEnd);
          }
          return '<input class="ui-datepicker-year" size="6" maxlength="4" tabindex="0" aria-label="' + this.options.locale.year + '" type="number" min="' + minYear + '" max="' + maxYear + '" step="1" value="' + year + '"></input>';
        } else {
          return '<span class="ui-datepicker-year">' + year + "</span>";
        }
      },
      renderTitleOptions: function(name, options, current) {
        var _options = "", minDate = this.options.minDate, maxDate = this.options.maxDate;
        for (var i = 0; i < options.length; i++) {
          switch (name) {
            case "month":
              if (!this.options.showMinMaxRange || (!this.isInMinYear() || i >= minDate.getMonth()) && (!this.isInMaxYear() || i <= maxDate.getMonth())) {
                _options += '<option value="' + i + '"' + (i === current ? " selected" : "") + ">" + this.escapeHTML(options[i]) + "</option>";
              }
              break;
            case "year":
              var option = options[i];
              if (!this.options.showMinMaxRange || !(minDate && minDate.getFullYear() > option) && !(maxDate && maxDate.getFullYear() < option)) {
                _options += '<option value="' + option + '"' + (option === current ? " selected" : "") + ">" + option + "</option>";
              }
              break;
          }
        }
        return _options;
      },
      renderTitle: function(monthMetadata) {
        var month = this.renderTitleMonthElement(monthMetadata.month, monthMetadata.index), year = this.renderTitleYearElement(monthMetadata.year, monthMetadata.index), whitespace = "&#xa0;";
        var content = month + whitespace + year;
        if (this.options.locale.showMonthAfterYear) {
          content = year + whitespace + month;
        }
        return '<div class="ui-datepicker-title">' + content + "</div>";
      },
      renderDayNames: function(weekDaysMin, weekDays) {
        var dayNamesHtml = "";
        if (this.options.showWeek) {
          dayNamesHtml += '<th scope="col" abbr="' + this.options.locale.weekHeader + '"><span>' + this.options.locale.weekHeader + "</span></th>";
        }
        for (var i = 0; i < weekDaysMin.length; i++) {
          var weekDayLabel = this.escapeHTML(weekDays[i]);
          var weekDayMinLabel = weekDaysMin[i];
          dayNamesHtml += '<th scope="col" abbr="' + weekDayMinLabel + '"><span title="' + weekDayLabel + '">' + weekDayMinLabel + "</span></th>";
        }
        return dayNamesHtml;
      },
      // utility methods for calculateWeekNumber. Based on the implementation from moment.js
      // start-of-first-week - start-of-year
      firstWeekOffset: function(year, dow, doy) {
        var fwd = 7 + dow - doy, fwdlw = (7 + new Date(Date.UTC(year, 0, fwd)).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
      },
      dayOfYear: function(d) {
        return Math.round((new Date(d.year, d.month, d.day).getTime() - new Date(d.year, 0, 0).getTime()) / 864e5);
      },
      daysInYear: function(year) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
          return 366;
        }
        return 365;
      },
      weeksInYear: function(year, dow, doy) {
        var weekOffset = this.firstWeekOffset(year, dow, doy), weekOffsetNext = this.firstWeekOffset(year + 1, dow, doy);
        return (this.daysInYear(year) - weekOffset + weekOffsetNext) / 7;
      },
      calculateWeekNumber: function(d) {
        var firstDayOfWeek = this.getFirstDayOfWeek(), doy = this.options.locale.firstDayWeekOffset, weekOffset = this.firstWeekOffset(d.year, firstDayOfWeek, doy), week = Math.floor((this.dayOfYear(d) - weekOffset - 1) / 7) + 1;
        if (week < 1) {
          return week + this.weeksInYear(resYear, firstDayOfWeek, doy);
        } else if (week > this.weeksInYear(d.year, firstDayOfWeek, doy)) {
          return week - this.weeksInYear(d.year, firstDayOfWeek, doy);
        } else {
          return week;
        }
      },
      renderWeek: function(weekDates) {
        var weekHtml = "";
        if (this.options.showWeek) {
          var firstDate = weekDates[0], lastDate = weekDates[6], cellClass = firstDate.otherMonth && lastDate.otherMonth && !this.options.showOtherMonths ? " ui-datepicker-other-month-hidden" : "";
          weekHtml += '<td class="ui-datepicker-weeknumber' + cellClass + '"><span class="ui-state-disabled">' + this.options.weekCalculator(firstDate) + "</span></td>";
        }
        var saturdayIndex = this.getSaturdayIndex();
        var sundayIndex = this.getSundayIndex();
        for (var i = 0; i < weekDates.length; i++) {
          var date = weekDates[i], cellClass = this.getClassesToAdd({
            "ui-datepicker-other-month": date.otherMonth,
            "ui-datepicker-today": date.today,
            "ui-datepicker-week-end": i == sundayIndex || i == saturdayIndex,
            "ui-datepicker-other-month-hidden": date.otherMonth && !this.options.showOtherMonths
          }), dateClass = this.getClassesToAdd({
            "ui-state-default": true,
            "ui-state-active": this.isSelected(date),
            "ui-state-disabled": !date.selectable,
            "ui-state-highlight": date.today
          }), content = this.renderDateCellContent(date, dateClass);
          weekHtml += '<td class="' + cellClass + '" aria-label="' + this.options.locale.monthNames[date.month] + " " + date.day + '">' + content + "</td>";
        }
        return weekHtml;
      },
      renderDateCellContent: function(date, dateClass) {
        var content = this.options.dateTemplate ? this.options.dateTemplate.call(this, date) : date.day;
        var classes = this.options.dateStyleClasses;
        if (classes !== null) {
          var isoDateStr = this.toISODateString(new Date(date.year, date.month, date.day));
          if (classes[isoDateStr]) {
            dateClass += " " + classes[isoDateStr];
          }
        }
        if (date.selectable) {
          var selected = this.isSelected(date);
          return '<a tabindex="0" class="' + dateClass + '" aria-selected="' + selected + '">' + content + "</a>";
        } else {
          return '<span class="' + dateClass + '">' + content + "</span>";
        }
      },
      renderDates: function(monthMetadata) {
        var datesHtml = "";
        for (var i = 0; i < monthMetadata.dates.length; i++) {
          var week = monthMetadata.dates[i];
          datesHtml += "<tr>" + this.renderWeek(week) + "</tr>";
        }
        return datesHtml;
      },
      renderDateViewGrid: function(monthMetadata, weekDaysMin, weekDays) {
        var dayNames = this.renderDayNames(weekDaysMin, weekDays), dates = this.renderDates(monthMetadata);
        return '<div class="ui-datepicker-calendar-container"><table class="ui-datepicker-calendar" role="grid"><thead><tr>' + dayNames + "</tr></thead><tbody>" + dates + "</tbody></table></div>";
      },
      renderHourPicker: function() {
        var hour = this.isDate(this.value) ? this.value.getHours() : this.viewDate.getHours();
        var minHour = 0;
        var maxHour = 23;
        if (this.options.hourFormat === "12") {
          if (hour === 0) {
            hour = 12;
            maxHour = 12;
          } else if (hour > 11 && hour !== 12)
            hour = hour - 12;
        }
        var hourDisplay = hour < 10 ? "0" + hour : hour;
        var tabindex = "0";
        var html = this.options.timeInput ? '<input type="number" min="' + minHour + '" max="' + maxHour + '" value="' + hourDisplay + '" aria-label="' + this.options.locale.hourText + '" size="2" maxlength="2" tabindex="' + tabindex + '" class="ui-inputfield"></input>' : "<span>" + hourDisplay + "</span>";
        return this.renderTimeElements("ui-hour-picker", html, 0);
      },
      renderMinutePicker: function() {
        var minute = this.isDate(this.value) ? this.value.getMinutes() : this.viewDate.getMinutes(), minuteDisplay = minute < 10 ? "0" + minute : minute;
        var tabindex = "0";
        var html = this.options.timeInput ? '<input type="number" min="0" max="59" value="' + minuteDisplay + '" aria-label="' + this.options.locale.minuteText + '" size="2" maxlength="2" tabindex="' + tabindex + '" class="ui-inputfield"></input>' : "<span>" + minuteDisplay + "</span>";
        return this.renderTimeElements("ui-minute-picker", html, 1);
      },
      renderSecondPicker: function() {
        if (this.options.showSeconds) {
          var second = this.isDate(this.value) ? this.value.getSeconds() : this.viewDate.getSeconds(), secondDisplay = second < 10 ? "0" + second : second;
          var tabindex = "0";
          var html = this.options.timeInput ? '<input type="number" min="0" max="59" value="' + secondDisplay + '" aria-label="' + this.options.locale.secondText + '" size="2" maxlength="2" tabindex="' + tabindex + '" class="ui-inputfield"></input>' : "<span>" + secondDisplay + "</span>";
          return this.renderTimeElements("ui-second-picker", html, 2);
        }
        return "";
      },
      renderMillisecondPicker: function() {
        if (this.options.showMilliseconds) {
          var millisecond = this.isDate(this.value) ? this.value.getMilliseconds() : this.viewDate.getMilliseconds(), millisecondDisplay = millisecond < 10 ? "00" + millisecond : millisecond < 100 ? "0" + millisecond : millisecond;
          var tabindex = "0";
          var html = this.options.timeInput ? '<input type="number" min="0" max="999" value="' + millisecondDisplay + '" aria-label="' + this.options.locale.millisecondText + '" size="3" maxlength="3" tabindex="' + tabindex + '" class="ui-inputfield"></input>' : "<span>" + millisecondDisplay + "</span>";
          return this.renderTimeElements("ui-millisecond-picker", html, 3);
        }
        return "";
      },
      renderAmPmPicker: function() {
        if (this.options.hourFormat === "12") {
          var hour = this.isDate(this.value) ? this.value.getHours() : this.viewDate.getHours(), display = hour > 11 ? this.options.locale.pm : this.options.locale.am;
          return this.renderTimeElements("ui-ampm-picker", "<span>" + display + "</span>", 4);
        }
        return "";
      },
      renderSeparator: function() {
        return this.renderTimeElements("ui-separator", "<span>:</span>", -1);
      },
      renderFractionSeparator: function() {
        return this.renderTimeElements("ui-separator", "<span>.</span>", -1);
      },
      renderTimeElements: function(containerClass, text, type) {
        var container = '<div class="' + containerClass + '" data-type="' + type + '">';
        container += this.renderTimePickerUpButton(type);
        container += text;
        container += this.renderTimePickerDownButton(type);
        container += "</div>";
        return container;
      },
      renderTimePickerUpButton: function(type) {
        var ariaLabel = "";
        switch (type) {
          case 0:
            ariaLabel = this.options.locale.nextHour;
            break;
          case 1:
            ariaLabel = this.options.locale.nextMinute;
            break;
          case 2:
            ariaLabel = this.options.locale.nextSecond;
            break;
          case 3:
            ariaLabel = this.options.locale.nextMillisecond;
            break;
          case 4:
            ariaLabel = this.options.locale.am;
            break;
          default:
            ariaLabel = "";
        }
        return '<button type="button" aria-label="' + ariaLabel + '" class="ui-picker-up" tabindex="0"><span class="ui-icon ui-icon-carat-1-n"></span></button>';
      },
      renderTimePickerDownButton: function(type) {
        var ariaLabel = "";
        switch (type) {
          case 0:
            ariaLabel = this.options.locale.prevHour;
            break;
          case 1:
            ariaLabel = this.options.locale.prevMinute;
            break;
          case 2:
            ariaLabel = this.options.locale.prevSecond;
            break;
          case 3:
            ariaLabel = this.options.locale.prevMillisecond;
            break;
          case 4:
            ariaLabel = this.options.locale.pm;
            break;
          default:
            ariaLabel = "";
        }
        return '<button type="button" aria-label="' + ariaLabel + '" class="ui-picker-down" tabindex="0"><span class="ui-icon ui-icon-carat-1-s"></span></button>';
      },
      getClassesToAdd: function(classes) {
        var _classes = "";
        $.each(classes, function(key, value) {
          if (value) {
            _classes += " " + key;
          }
        });
        return _classes;
      },
      toISODateString: function(date) {
        return new Date(date.getTime() - date.getTimezoneOffset() * 6e4).toISOString().substring(0, 10);
      },
      _bindEvents: function() {
        if (this.options.readonly) {
          return;
        }
        var $this = this;
        if (!this.options.inline) {
          this.inputfield.off("focus.datePicker blur.datePicker change.datePicker keydown.datePicker input.datePicker click.datePicker").on("focus.datePicker", this.onInputFocus.bind($this)).on("blur.datePicker", this.onInputBlur.bind($this)).on("change.datePicker", this.onInputChange.bind($this)).on("keydown.datePicker", this.onInputKeyDown.bind($this)).on("input.datePicker", this.onUserInput.bind($this)).on("click.datePicker", this.onInputClick.bind($this));
          if (this.triggerButton) {
            this.triggerButton.off("click.datePicker-triggerButton").on("click.datePicker-triggerButton", this.onButtonClick.bind($this));
          }
        }
        this.panel.off("click.datePicker keydown.datePicker").on("click.datePicker", this.onPanelClick.bind($this)).on("keydown.datePicker", this.onPanelKeyDown.bind($this));
        var navBackwardSelector = ".ui-datepicker-header > .ui-datepicker-prev", navForwardSelector = ".ui-datepicker-header > .ui-datepicker-next";
        this.panel.off("click.datePicker-navBackward", navBackwardSelector).on("click.datePicker-navBackward", navBackwardSelector, null, this.navBackward.bind($this));
        this.panel.off("click.datePicker-navForward", navForwardSelector).on("click.datePicker-navForward", navForwardSelector, null, this.navForward.bind($this));
        var monthNavigatorSelector = ".ui-datepicker-header > .ui-datepicker-title > .ui-datepicker-month", yearNavigatorSelector = ".ui-datepicker-header > .ui-datepicker-title > .ui-datepicker-year";
        this.panel.off("change.datePicker-monthNav", monthNavigatorSelector).on("change.datePicker-monthNav", monthNavigatorSelector, null, this.onMonthDropdownChange.bind($this));
        this.panel.off("change.datePicker-yearnav keydown.datePicker-yearnav", yearNavigatorSelector).on("change.datePicker-yearnav", yearNavigatorSelector, null, this.onYearInputChange.bind($this)).on("keydown.datePicker-yearnav", yearNavigatorSelector, null, function(event) {
          $this.onTimeInputKeyDown(event);
        });
        var monthViewMonthSelector = ".ui-monthpicker > .ui-monthpicker-month";
        this.panel.off("click.datePicker-monthViewMonth", monthViewMonthSelector).on("click.datePicker-monthViewMonth", monthViewMonthSelector, null, function(e) {
          $this.onMonthSelect(e, $(this).index());
        }).on("keydown.datePicker-monthViewMonth", monthViewMonthSelector, null, function(event) {
          $this.onMonthKeyDown(event, $(this).index());
        });
        var timeSelector = ".ui-hour-picker > button,  .ui-minute-picker > button, .ui-second-picker > button, .ui-millisecond-picker > button", ampmSelector = ".ui-ampm-picker > button";
        this.panel.off("mousedown.timepicker mouseup.timepicker mouseout.timepicker keydown.timepicker keyup.timepicker click.timepicker-ampm", timeSelector).off("click.datePicker-ampm", ampmSelector).on("mousedown.timepicker keydown.timepicker", timeSelector, null, function(event) {
          var button = $(this), parentEl = button.parent();
          var isActionKey = PrimeFaces.utils.isActionKey(event);
          if (!event.key || isActionKey) {
            $this.onTimePickerElementMouseDown(event, parseInt(parentEl.data("type"), 10), button.hasClass("ui-picker-up") ? 1 : -1);
          }
        }).on("mouseup.timepicker keyup.timepicker", timeSelector, null, function(event) {
          $this.onTimePickerElementMouseUp(event);
        }).on("mouseout.timepicker", timeSelector, null, function(event) {
          if ($this.timePickerTimer) {
            $this.onTimePickerElementMouseUp(event);
          }
        }).on("click.timepicker-ampm", ampmSelector, null, function(event) {
          $this.toggleAmPm(event);
        });
        if (this.options.timeInput) {
          this.panel.off("focus", ".ui-hour-picker input").on("focus", ".ui-hour-picker input", null, function(event) {
            $this.oldHours = this.value;
          }).off("focus", ".ui-minute-picker input").on("focus", ".ui-minute-picker input", null, function(event) {
            $this.oldMinutes = this.value;
          }).off("focus", ".ui-second-picker input").on("focus", ".ui-second-picker input", null, function(event) {
            $this.oldSeconds = this.value;
          }).off("focus", ".ui-millisecond-picker input").on("focus", ".ui-millisecond-picker input", null, function(event) {
            $this.oldMilliseconds = this.value;
          }).off("change", ".ui-hour-picker input").on("change", ".ui-hour-picker input", null, function(event) {
            $this.handleHoursInput(this, event);
          }).off("keydown", ".ui-hour-picker input").on("keydown", ".ui-hour-picker input", null, function(event) {
            $this.onTimeInputKeyDown(event);
          }).off("change", ".ui-minute-picker input").on("change", ".ui-minute-picker input", null, function(event) {
            $this.handleMinutesInput(this, event);
          }).off("keydown", ".ui-minute-picker input").on("keydown", ".ui-minute-picker input", null, function(event) {
            $this.onTimeInputKeyDown(event);
          }).off("change", ".ui-second-picker input").on("change", ".ui-second-picker input", null, function(event) {
            $this.handleSecondsInput(this, event);
          }).off("keydown", ".ui-second-picker input").on("keydown", ".ui-second-picker input", null, function(event) {
            $this.onTimeInputKeyDown(event);
          }).off("change", ".ui-millisecond-picker input").on("change", ".ui-millisecond-picker input", null, function(event) {
            $this.handleMillisecondsInput(this, event);
          }).off("keydown", ".ui-millisecond-picker input").on("keydown", ".ui-millisecond-picker input", null, function(event) {
            $this.onTimeInputKeyDown(event);
          });
        }
        var todayButtonSelector = ".ui-datepicker-buttonbar .ui-today-button", clearButtonSelector = ".ui-datepicker-buttonbar .ui-clear-button";
        this.panel.off("click.datePicker-todayButton", todayButtonSelector).on("click.datePicker-todayButton", todayButtonSelector, null, this.onTodayButtonClick.bind($this));
        this.panel.off("click.datePicker-clearButton", clearButtonSelector).on("click.datePicker-clearButton", clearButtonSelector, null, this.onClearButtonClick.bind($this));
        var dateSelector = ".ui-datepicker-calendar td a";
        this.panel.off("click.datePicker-date keydown.datePicker-date", dateSelector).on("click.datePicker-date", dateSelector, null, function(event) {
          if ($this.monthsMetadata) {
            var dayEl = $(this), calendarIndex = dayEl.closest(".ui-datepicker-group").index(), weekIndex = dayEl.closest("tr").index(), dayIndex = dayEl.closest("td").index() - ($this.options.showWeek ? 1 : 0);
            $this.onDateSelect(event, $this.monthsMetadata[calendarIndex].dates[weekIndex][dayIndex]);
          }
        }).on("keydown.datePicker-date", dateSelector, null, function(event) {
          var dayEl = $(this), calendarIndex = dayEl.closest(".ui-datepicker-group").index(), weekIndex = dayEl.closest("tr").index(), dayIndex = dayEl.closest("td").index() - ($this.options.showWeek ? 1 : 0);
          $this.onDateKeyDown(event, $this.monthsMetadata[calendarIndex].dates[weekIndex][dayIndex]);
        });
      },
      _bindPanelEvents: function() {
        if (this.options.view === "week") {
          var row = this.panel.find(".ui-datepicker-calendar tr");
          row.mousemove(function() {
            $(this).find("td a").addClass("ui-state-hover");
          });
          row.mouseleave(function() {
            $(this).find("td a").removeClass("ui-state-hover");
          });
          var activeRow = this.panel.find(".ui-state-active").closest("tr");
          activeRow.find("td").each(function() {
            $(this).find("a").addClass("ui-state-active");
          });
        }
      },
      onDateKeyDown: function(event, dateMeta) {
        if (this.options.disabled || !dateMeta.selectable) {
          if (event) {
            event.preventDefault();
          }
          return;
        }
        var $this = this;
        var currentElement = $(event.currentTarget);
        var $tabbableElements = $this.panel.find("a:tabbable");
        var currentIndex = $tabbableElements.index(currentElement);
        switch (event.code) {
          case "Enter":
          case "NumpadEnter":
          case "Space":
            $this.onDateSelect(event, dateMeta);
            event.preventDefault();
            break;
          case "ArrowLeft":
            var prevIndex = (currentIndex - 1) % $tabbableElements.length;
            $tabbableElements.eq(prevIndex).trigger("focus");
            event.preventDefault();
            break;
          case "ArrowRight":
            var nextIndex = (currentIndex + 1) % $tabbableElements.length;
            $tabbableElements.eq(nextIndex).trigger("focus");
            event.preventDefault();
            break;
          case "ArrowDown":
            var nextIndex = (currentIndex + 7) % $tabbableElements.length;
            if (nextIndex < currentIndex) {
              $this.focusNextInterval(event);
            } else {
              $tabbableElements.eq(nextIndex).trigger("focus");
            }
            event.preventDefault();
            break;
          case "ArrowUp":
            var nextIndex = (currentIndex - 7) % $tabbableElements.length;
            if (nextIndex < 0) {
              $this.focusPreviousInterval(event);
            } else {
              $tabbableElements.eq(nextIndex).trigger("focus");
            }
            event.preventDefault();
            break;
          case "Home":
            var row = currentElement.closest("tr");
            $this.focusDate(row, "a:visible:first");
            event.preventDefault();
            break;
          case "End":
            var row = currentElement.closest("tr");
            $this.focusDate(row, "a:visible:last");
            event.preventDefault();
            break;
          case "PageUp":
            $this.focusPreviousInterval(event);
            break;
          case "PageDown":
            $this.focusNextInterval(event);
            break;
        }
        ;
      },
      onMonthKeyDown: function(event, index) {
        if (this.options.disabled) {
          if (event) {
            event.preventDefault();
          }
          return;
        }
        var $this = this;
        var currentElement = $(event.currentTarget);
        var $tabbableElements = $this.panel.find("a:tabbable");
        var currentIndex = $tabbableElements.index(currentElement);
        switch (event.code) {
          case "Enter":
          case "NumpadEnter":
          case "Space":
            $this.onMonthSelect(event, index);
            event.preventDefault();
            break;
          case "ArrowLeft":
            var prevIndex = (currentIndex - 1) % $tabbableElements.length;
            $tabbableElements.eq(prevIndex).trigger("focus");
            event.preventDefault();
            break;
          case "ArrowRight":
            var nextIndex = (currentIndex + 1) % $tabbableElements.length;
            $tabbableElements.eq(nextIndex).trigger("focus");
            event.preventDefault();
            break;
          case "ArrowDown":
            var nextIndex = (currentIndex + 3) % $tabbableElements.length;
            if (nextIndex < currentIndex) {
              $this.focusNextInterval(event);
            } else {
              $tabbableElements.eq(nextIndex).trigger("focus");
            }
            event.preventDefault();
            break;
          case "ArrowUp":
            var nextIndex = (currentIndex - 3) % $tabbableElements.length;
            if (nextIndex <= 0) {
              $this.focusPreviousInterval(event);
            } else {
              $tabbableElements.eq(nextIndex).trigger("focus");
            }
            event.preventDefault();
            break;
          case "Home":
            $this.focusDate($this.panel, "a:visible:first");
            event.preventDefault();
            break;
          case "End":
            $this.focusDate($this.panel, "a:visible:last");
            event.preventDefault();
            break;
          case "PageUp":
            $this.focusPreviousInterval(event);
            break;
          case "PageDown":
            $this.focusNextInterval(event);
            break;
        }
        ;
      },
      onTimeInputKeyDown: function(event) {
        if (PrimeFaces.env.android) {
          return;
        }
        if (this.options.disabled) {
          event.preventDefault();
          return;
        }
        switch (event.key) {
          case "ArrowDown":
          case "ArrowUp":
          case "Tab":
          case "Delete":
          case "Backspace":
            return true;
        }
        switch (event.key) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            var input = event.currentTarget;
            var newValue = input.value + event.key;
            if (input.maxLength === 4 && input.value.length === 4) {
              newValue = event.key;
              input.value = "";
            }
            if (input.value.length >= input.maxLength) {
              event.preventDefault();
              event.stopPropagation();
              return;
            }
            if (input.maxLength === 4 && newValue.length < 4) {
              return;
            }
            newValue = parseInt(newValue, 10);
            var inputMin = parseInt(input.min, 10);
            var inputMax = parseInt(input.max, 10);
            if (isNaN(newValue) || newValue < inputMin || newValue > inputMax) {
              event.preventDefault();
              event.stopPropagation();
            }
            break;
          default:
            event.preventDefault();
            event.stopPropagation();
        }
      },
      focusDate: function(jq, selector) {
        if (!jq || !selector) {
          return;
        }
        var focusable = jq.find(selector);
        if (focusable.length > 0) {
          focusable.trigger("focus");
        }
      },
      focusNextInterval: function(event) {
        this.navForward(event);
        this.focusDate(this.panel, "a:visible:first");
      },
      focusPreviousInterval: function(event) {
        this.navBackward(event);
        this.focusDate(this.panel, "a:visible:last");
      },
      onInputClick: function(event) {
        if (this.documentClickListener) {
          this.datepickerClick = true;
        }
        if (this.isPanelVisible()) {
          if (!this.datepickerFocus) {
            this.hideOverlay();
          }
        } else if (this.options.showOnFocus) {
          this.showOverlay();
        }
      },
      onInputFocus: function(event) {
        if (this.options.showOnFocus && !this.isPanelVisible() && !this.datepickerFocus) {
          this.datepickerFocus = true;
          this.showOverlay();
        }
        if (this.options.onFocus) {
          this.options.onFocus.call(this, event);
        }
        this.inputfield.addClass("ui-state-focus");
        this.container.addClass("ui-inputwrapper-focus");
      },
      onInputBlur: function(event) {
        if (this.options.onBlur && event) {
          this.options.onBlur.call(this, event);
        }
        this.inputfield.removeClass("ui-state-focus");
        this.container.removeClass("ui-inputwrapper-focus");
      },
      onInputChange: function(event) {
        if ((this.options.autoMonthFormat || !this.inputfield.val() || this.options.showMinMaxRange) && this.options.monthNavigator && this.options.view !== "month") {
          var viewMonth = this.viewDate.getMonth();
          viewMonth = this.isInMaxYear() && Math.min(this.options.maxDate.getMonth(), viewMonth) || this.isInMinYear() && Math.max(this.options.minDate.getMonth(), viewMonth) || viewMonth;
          this.viewDate.setMonth(viewMonth);
        }
        !this.options.keepInvalid && this.inputfield.val(this.getValueToRender());
        if (this.options.onChange) {
          this.options.onChange.call(this, event);
        }
      },
      onInputKeyDown: function(event) {
        switch (event.key) {
          case "ArrowDown":
          case "Enter":
            this.inputfield.val(this.getValueToRender());
            this.showOverlay();
            break;
          case "Escape":
            this.onEscapeKey(event);
            break;
        }
      },
      onPanelKeyDown: function(event) {
        if (event.key === "Escape") {
          this.onEscapeKey(event);
        }
      },
      onEscapeKey: function(event) {
        this.hideOverlay();
      },
      onUserInput: function(event) {
        var rawValue = event.target.value;
        try {
          var value = this.parseValueFromString(rawValue);
          this.updateModel(event, value, false);
          this.updateViewDate(event, value.length ? value[0] : value);
        } catch (err) {
          if (!this.options.mask) {
            this.updateModel(event, rawValue, false);
          }
        }
        if (this.options.onInput) {
          this.options.onInput.call(this, event);
        }
      },
      onButtonClick: function(event) {
        if (!this.isPanelVisible()) {
          this.showOverlay();
        } else {
          this.hideOverlay();
        }
      },
      onPanelClick: function(event) {
        if (this.documentClickListener) {
          this.datepickerClick = true;
        }
      },
      onMonthDropdownChange: function(event) {
        var newViewDate = new Date(this.viewDate.getTime());
        newViewDate.setDate(1);
        newViewDate.setMonth(parseInt(event.target.value, 10));
        if (this.options.onMonthChange) {
          this.options.onMonthChange.call(this, newViewDate.getMonth() + 1, newViewDate.getFullYear());
        }
        this.updateViewDate(event, newViewDate);
      },
      onYearInputChange: function(event) {
        var newViewDate = new Date(this.viewDate.getTime());
        newViewDate.setFullYear(parseInt(event.target.value, 10));
        if (this.options.onYearChange) {
          this.options.onYearChange.call(this, newViewDate.getMonth(), newViewDate.getFullYear());
        }
        this.updateViewDate(event, newViewDate);
      },
      onMonthSelect: function(event, month) {
        this.onDateSelect(event, { year: this.viewDate.getFullYear(), month, day: 1, selectable: true });
        event.preventDefault();
      },
      navBackward: function(event) {
        if (this.options.disabled) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        var newViewDate = new Date(this.viewDate.getTime());
        newViewDate.setDate(1);
        if (this.options.view === "date" || this.options.view === "week") {
          if (newViewDate.getMonth() === 0) {
            newViewDate.setMonth(11, 1);
            newViewDate.setFullYear(newViewDate.getFullYear() - 1);
          } else {
            newViewDate.setMonth(newViewDate.getMonth() - 1, 1);
          }
          newViewDate = this.truncateDate(newViewDate);
          var testDate = new Date(newViewDate.getTime()), minDate = this.options.minDate;
          testDate.setMonth(testDate.getMonth() + 1);
          testDate.setHours(-1);
          if (this.options.showMinMaxRange && minDate && minDate > testDate) {
            this.setNavigationState(newViewDate);
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          if (this.options.onMonthChange) {
            this.options.onMonthChange.call(this, newViewDate.getMonth() + 1, newViewDate.getFullYear());
          }
        } else if (this.options.view === "month") {
          var currentYear = newViewDate.getFullYear(), newYear = currentYear - 1;
          if (this.options.yearNavigator) {
            var minYear = parseInt(this.options.yearRange.split(":")[0], 10);
            if (newYear < minYear) {
              newYear = minYear;
            }
          }
          newViewDate.setFullYear(newYear);
          if (this.options.onYearChange) {
            this.options.onYearChange.call(this, newViewDate.getMonth(), newViewDate.getFullYear());
          }
        }
        this.updateViewDate(event, newViewDate);
        event.preventDefault();
        event.stopPropagation();
      },
      navForward: function(event) {
        if (this.options.disabled) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        var newViewDate = new Date(this.viewDate.getTime());
        newViewDate.setDate(1);
        if (this.options.view === "date" || this.options.view === "week") {
          if (newViewDate.getMonth() === 11) {
            newViewDate.setMonth(0, 1);
            newViewDate.setFullYear(newViewDate.getFullYear() + 1);
          } else {
            newViewDate.setMonth(newViewDate.getMonth() + 1, 1);
          }
          newViewDate = this.truncateDate(newViewDate);
          var maxDate = this.options.maxDate;
          if (this.options.showMinMaxRange && maxDate && maxDate < newViewDate) {
            this.setNavigationState(newViewDate);
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          if (this.options.onMonthChange) {
            this.options.onMonthChange.call(this, newViewDate.getMonth() + 1, newViewDate.getFullYear());
          }
        } else if (this.options.view === "month") {
          var currentYear = newViewDate.getFullYear(), newYear = currentYear + 1;
          if (this.options.yearNavigator) {
            var maxYear = parseInt(this.options.yearRange.split(":")[1], 10);
            if (newYear > maxYear) {
              newYear = maxYear;
            }
          }
          newViewDate.setFullYear(newYear);
          if (this.options.onYearChange) {
            this.options.onYearChange.call(this, newViewDate.getMonth(), newViewDate.getFullYear());
          }
        }
        this.updateViewDate(event, newViewDate);
        event.preventDefault();
        event.stopPropagation();
      },
      setNavigationState: function(newViewDate) {
        if (!newViewDate || !this.options.showMinMaxRange || this.options.view === "month") {
          return;
        }
        var navPrev = this.panel.find(".ui-datepicker-header > .ui-datepicker-prev");
        var navNext = this.panel.find(".ui-datepicker-header > .ui-datepicker-next");
        if (this.options.disabled) {
          navPrev.addClass("ui-state-disabled");
          navNext.addClass("ui-state-disabled");
          return;
        }
        if (this.options.minDate) {
          let firstDayOfMonth = new Date(newViewDate.getTime());
          firstDayOfMonth.setMonth(firstDayOfMonth.getMonth(), 1);
          firstDayOfMonth = this.truncateDate(firstDayOfMonth);
          if (this.options.minDate > firstDayOfMonth) {
            navPrev.addClass("ui-state-disabled");
          } else {
            navPrev.removeClass("ui-state-disabled");
          }
        }
        if (this.options.maxDate) {
          let lastDayOfMonth = new Date(newViewDate.getTime());
          lastDayOfMonth.setMonth(lastDayOfMonth.getMonth() + 1, 1);
          lastDayOfMonth = this.truncateDate(lastDayOfMonth);
          lastDayOfMonth.setSeconds(-1);
          if (this.options.maxDate < lastDayOfMonth) {
            navNext.addClass("ui-state-disabled");
          } else {
            navNext.removeClass("ui-state-disabled");
          }
        }
      },
      onTimePickerElementMouseDown: function(event, type, direction) {
        var isActionKey = PrimeFaces.utils.isActionKey(event);
        if (!this.options.disabled && (event.button === 0 || isActionKey)) {
          var interval = isActionKey ? -1 : null;
          this.repeat(event, interval, type, direction);
          if (!isActionKey) {
            event.preventDefault();
          }
        }
      },
      onTimePickerElementMouseUp: function(event) {
        if (!this.options.disabled) {
          this.clearTimePickerTimer();
          if (event.key === "Tab") return;
          if (this.options.onSelect && this.value) {
            this.options.onSelect.call(this, event, this.value);
          }
        }
      },
      repeat: function(event, interval, type, direction) {
        var i = interval || 500, $this = this;
        if (interval > -1) {
          this.clearTimePickerTimer();
          this.timePickerTimer = PrimeFaces.queueTask(function() {
            $this.repeat(event, 100, type, direction);
          }, i);
        }
        switch (type) {
          case 0:
            if (direction === 1)
              this.incrementHour(event);
            else
              this.decrementHour(event);
            break;
          case 1:
            if (direction === 1)
              this.incrementMinute(event);
            else
              this.decrementMinute(event);
            break;
          case 2:
            if (direction === 1)
              this.incrementSecond(event);
            else
              this.decrementSecond(event);
            break;
          case 3:
            if (direction === 1)
              this.incrementMillisecond(event);
            else
              this.decrementMillisecond(event);
            break;
        }
      },
      clearTimePickerTimer: function() {
        if (this.timePickerTimer) {
          clearTimeout(this.timePickerTimer);
          this.timePickerTimer = null;
        }
      },
      focusOverlay: function() {
        var $this = this;
        var focused = null;
        if ($this.options.view === "month") {
          focused = $this.panel.find("a.ui-monthpicker-month");
        }
        if ($this.options.view === "date" || $this.options.view === "week") {
          focused = $this.panel.find("a.ui-state-active");
          if (focused.length === 0) {
            focused = $this.panel.find(".ui-datepicker-today a");
          }
          if (focused.length === 0) {
            focused = $this.panel.find("a.ui-state-default");
          }
          if (focused.length === 0) {
            focused = $this.panel.find("a.ui-state-default");
          }
          if (focused.length === 0) {
            focused = $this.panel.find(":button, :input");
          }
        }
        if (focused) {
          focused.first().trigger("focus");
        }
        $this.inputfield.attr("aria-expanded", "true");
        $this.inputfield.removeClass("ui-state-focus");
        if ($this.triggerButton) {
          $this.triggerButton.attr("aria-expanded", "true");
        }
      },
      showOverlay: function() {
        if (this.documentClickListener || this.options.inline || this.isPanelVisible() || !this.transition) {
          return;
        }
        var $this = this;
        this.transition.show({
          onEnter: function() {
            if ($this.options.onBeforeShow) {
              $this.options.onBeforeShow.call($this);
            }
            $this.alignPanel();
          },
          onEntered: function() {
            $this.datepickerClick = true;
            PrimeFaces.queueTask(function() {
              $this.datepickerClick = false;
              $this.datepickerFocus = false;
            }, 200);
            $this.bindDocumentClickListener();
            $this.bindWindowResizeListener();
            if (!$this.options.inline) {
              $this.bindScrollListener();
            }
            $this.focusOverlay();
          }
        });
      },
      hideOverlay: function(event) {
        if (!this.documentClickListener || this.options.inline || !this.isPanelVisible() || !this.transition) {
          return;
        }
        var $this = this;
        if (!event) {
          $this.inputfield.trigger("focus");
        }
        $this.disableModality();
        this.transition.hide({
          onExit: function() {
            if ($this.options.onBeforeHide) {
              $this.options.onBeforeHide.call($this);
            }
            $this.unbindDocumentClickListener();
            $this.unbindWindowResizeListener();
            if (!$this.options.inline) {
              $this.unbindScrollListener();
            }
            $this.datepickerClick = false;
          },
          onExited: function() {
            var viewDate = $this.options.viewDate && !$this.value ? $this.parseValue($this.options.viewDate) : (($this.isMultipleSelection() || $this.isRangeSelection()) && $this.value instanceof Array ? $this.value[0] : $this.value) || $this.parseValue(this.getNow());
            if (viewDate instanceof Date) {
              $this.updateViewDate(null, viewDate);
            }
            if (!$this.options.inline) {
              $this.inputfield.attr("aria-expanded", "false");
              if ($this.triggerButton) {
                $this.triggerButton.attr("aria-expanded", "false");
              }
            }
          }
        });
      },
      bindDocumentClickListener: function() {
        var $this = this;
        if (!this.documentClickListener) {
          this.documentClickListener = function(event) {
            if (!$this.datepickerClick) {
              $this.hideOverlay(event);
              $this.onInputBlur();
              PrimeFaces.queueTask(function() {
                $(event.target).trigger("focus");
              }, 1);
            }
            $this.datepickerClick = false;
          };
          $(document).on("click", this.documentClickListener);
          PrimeFaces.utils.preventTabbing($this, $this.panel.id, $this.panel.zIndex(), function() {
            return $this.panel.find(":tabbable");
          });
        }
      },
      unbindDocumentClickListener: function() {
        if (this.documentClickListener) {
          $(document).off("click", this.documentClickListener);
          PrimeFaces.utils.enableTabbing(this, this.panel.id);
          this.documentClickListener = null;
        }
      },
      bindResponsiveResizeListener: function() {
        var $this = this;
        if (this.options.autoDetectDisplay && !this.options.inline) {
          var namespace = "resize.responsive" + this.options.id;
          $(window).off(namespace).on(namespace, function() {
            $this.updateResponsiveness();
          });
        }
      },
      unbindResponsiveResizeListener: function() {
        $(window).off("resize.responsive" + this.options.id);
      },
      bindWindowResizeListener: function() {
        if (this.options.inline || this.options.touchUI || PrimeFaces.env.mobile) {
          return;
        }
        var $this = this;
        $(window).on("resize." + $this.options.id, function() {
          if (!$this.options.lazyModel) {
            $this.hideOverlay();
          }
        });
      },
      unbindWindowResizeListener: function() {
        $(window).off("resize." + this.options.id);
      },
      bindScrollListener: function() {
        var $this = this;
        this.scrollableParents = PrimeFaces.utils.getScrollableParents(this.element.get(0));
        this.scrollableListener = function() {
          $this.hideOverlay();
        };
        for (var i = 0; i < this.scrollableParents.length; i++) {
          $(this.scrollableParents[i]).on("scroll", this.scrollableListener);
        }
      },
      unbindScrollListener: function() {
        if (this.scrollableParents && this.scrollableListener) {
          for (var i = 0; i < this.scrollableParents.length; i++) {
            $(this.scrollableParents[i]).off("scroll", this.scrollableListener);
          }
          this.scrollableListener = null;
        }
      },
      updateResponsiveness: function() {
        if (this.options.autoDetectDisplay && this.options.responsiveBreakpoint && !this.options.inline) {
          var currentUI = this.options.touchUI;
          var newUi = PrimeFaces.env.mobile || PrimeFaces.env.isScreenSizeLessThan(this.options.responsiveBreakpoint);
          if (currentUI !== newUi) {
            this.options.touchUI = newUi;
            this._render();
          }
        }
      },
      isPanelVisible: function() {
        return !this.options.disabled && this.panel && this.panel.is(":visible");
      },
      isDate: function(value) {
        return value && Object.prototype.toString.call(value) === "[object Date]" && !isNaN(value);
      },
      alignPanel: function() {
        if (!this.isPanelVisible()) {
          return;
        }
        if (this.options.touchUI) {
          this.enableModality();
        } else {
          if (this.options.appendTo) {
            this.panel.css("min-width", this.container.outerWidth() + "px");
          }
          if (this.panel.parent().is(this.container)) {
            this.panel.css({
              left: "0px",
              top: String(this.container.innerHeight()),
              "transform-origin": "center top"
            });
          } else {
            this.panel.css({ left: "", top: "", "transform-origin": "center top" }).position({
              my: "left top",
              at: "left bottom",
              of: this.container,
              collision: "flipfit",
              using: function(pos, directions) {
                $(this).css("transform-origin", "center " + directions.vertical).css(pos);
              }
            });
          }
        }
      },
      enableModality: function() {
        if (!this.mask) {
          this.mask = $('<div class="ui-widget-overlay ui-datepicker-mask ui-datepicker-mask-scrollblocker"></div>');
          this.mask.css("z-index", String(parseInt(this.panel.css("z-index"), 10) - 1));
          var $this = this;
          this.mask.on("click.datePicker-mask", function() {
            $this.disableModality();
          });
          $(document.body).append(this.mask).addClass("ui-overflow-hidden");
        }
      },
      disableModality: function() {
        if (this.mask) {
          this.mask.off("click.datePicker-mask");
          this.mask.remove();
          this.mask = null;
          var bodyChildren = $(document.body).children(".ui-datepicker-mask-scrollblocker");
          if (!bodyChildren.length) {
            $(document.body).removeClass("ui-overflow-hidden");
          }
        }
      },
      findWeekMetadata: function(dateMeta) {
        for (let month of this.monthsMetadata) {
          if (month.month === dateMeta.month && month.year === dateMeta.year) {
            for (let week of month.dates) {
              for (let day of week) {
                if (day.day === dateMeta.day) {
                  return week;
                }
              }
            }
            break;
          }
        }
        return null;
      },
      onDateSelect: function(event, dateMeta) {
        if (this.options.disabled || !dateMeta.selectable) {
          if (event) {
            event.preventDefault();
          }
          return;
        }
        var $this = this;
        if (this.options.view === "week") {
          var week = this.findWeekMetadata(dateMeta);
          this.selectDate(event, week[0]);
          this.selectDate(event, week[week.length - 1]);
          PrimeFaces.queueTask(function() {
            $this.hideOverlay();
          }, 100);
        } else if (this.isMultipleSelection()) {
          if (this.isSelected(dateMeta)) {
            var value = this.value.filter(function(date, i) {
              return !$this.isDateEquals(date, dateMeta);
            });
            this.updateModel(event, value);
            if (this.options.onSelect) {
              this.options.onSelect.call(this, event, value);
            }
          } else if (!this.options.maxDateCount || !this.value || this.options.maxDateCount > this.value.length) {
            this.selectDate(event, dateMeta);
          }
        } else {
          this.selectDate(event, dateMeta);
        }
        if (!this.options.inline && this.isSingleSelection() && (!this.options.showTime || this.options.hideOnDateTimeSelect)) {
          PrimeFaces.queueTask(function() {
            $this.hideOverlay();
          }, 100);
        }
        if (!this.options.inline && this.isRangeSelection() && this.options.hideOnRangeSelection && this.value && this.value[1]) {
          PrimeFaces.queueTask(function() {
            $this.hideOverlay();
          }, 100);
        }
        if (event) {
          event.preventDefault();
        }
      },
      selectDate: function(event, dateMeta) {
        var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
        if (this.options.showTime) {
          var time = this.isDate(this.value) ? this.value : this.getNow();
          date.setHours(time.getHours());
          date.setMinutes(this.stepMinute(time.getMinutes()));
          date.setSeconds(time.getSeconds());
          date.setMilliseconds(time.getMilliseconds());
        }
        if (this.options.minDate && this.options.minDate > date) {
          date = this.options.minDate;
        }
        if (this.options.maxDate && this.options.maxDate < date) {
          date = this.options.maxDate;
        }
        if (this.isSingleSelection()) {
          this.updateModel(event, date);
        } else if (this.isMultipleSelection()) {
          this.updateModel(event, this.value ? this.value.concat(date) : [date]);
        } else if (this.isRangeSelection()) {
          if (this.value && this.value.length) {
            var startDate = this.value[0], endDate = this.value[1];
            if (!endDate && date.getTime() >= startDate.getTime()) {
              endDate = date;
            } else {
              startDate = date;
              endDate = null;
            }
            this.updateModel(event, [startDate, endDate]);
          } else {
            this.updateModel(event, [date, null]);
          }
        }
        if (this.options.onSelect) {
          this.options.onSelect.call(this, event, date);
        }
      },
      incrementHour: function(event) {
        var currentTime = this.isDate(this.value) ? this.value : this.viewDate, currentHour = currentTime.getHours(), newHour = currentHour + this.options.stepHour;
        newHour = newHour >= 24 ? newHour - 24 : newHour;
        if (this.validateTime(newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds(), currentTime, "INCREMENT")) {
          this.updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
        }
        if (!PrimeFaces.utils.isActionKey(event)) event.preventDefault();
      },
      decrementHour: function(event) {
        var currentTime = this.isDate(this.value) ? this.value : this.viewDate, currentHour = currentTime.getHours(), newHour = currentHour - this.options.stepHour;
        newHour = newHour < 0 ? newHour + 24 : newHour;
        if (this.validateTime(newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds(), currentTime, "DECREMENT")) {
          this.updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
        }
        event.preventDefault();
      },
      incrementMinute: function(event) {
        var currentTime = this.isDate(this.value) ? this.value : this.viewDate, currentMinute = currentTime.getMinutes(), newMinute = this.stepMinute(currentMinute, this.options.stepMinute);
        newMinute = newMinute > 59 ? newMinute - 60 : newMinute;
        if (this.validateTime(currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds(), currentTime, "INCREMENT")) {
          this.updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
        }
        event.preventDefault();
      },
      decrementMinute: function(event) {
        var currentTime = this.isDate(this.value) ? this.value : this.viewDate, currentMinute = currentTime.getMinutes(), newMinute = this.stepMinute(currentMinute, -this.options.stepMinute);
        newMinute = newMinute < 0 ? newMinute + 60 : newMinute;
        if (this.validateTime(currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds(), currentTime, "DECREMENT")) {
          this.updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds(), currentTime.getMilliseconds());
        }
        event.preventDefault();
      },
      stepMinute: function(currentMinute, step) {
        if (this.options.stepMinute <= 1) {
          if (!step) {
            return currentMinute;
          } else {
            return currentMinute + step;
          }
        }
        if (!step) {
          step = this.options.stepMinute;
          if (currentMinute % step === 0) {
            return currentMinute;
          }
        }
        var newMinute = currentMinute + step;
        newMinute = Math.floor(newMinute / step) * step;
        return newMinute;
      },
      incrementSecond: function(event) {
        var currentTime = this.isDate(this.value) ? this.value : this.viewDate, currentSecond = currentTime.getSeconds(), newSecond = currentSecond + this.options.stepSecond;
        newSecond = newSecond > 59 ? newSecond - 60 : newSecond;
        if (this.validateTime(currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds(), currentTime, "INCREMENT")) {
          this.updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
        }
        event.preventDefault();
      },
      decrementSecond: function(event) {
        var currentTime = this.isDate(this.value) ? this.value : this.viewDate, currentSecond = currentTime.getSeconds(), newSecond = currentSecond - this.options.stepSecond;
        newSecond = newSecond < 0 ? newSecond + 60 : newSecond;
        if (this.validateTime(currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds(), currentTime, "DECREMENT")) {
          this.updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond, currentTime.getMilliseconds());
        }
        event.preventDefault();
      },
      incrementMillisecond: function(event) {
        var currentTime = this.isDate(this.value) ? this.value : this.viewDate, currentMillisecond = currentTime.getMilliseconds(), newMillisecond = currentMillisecond + this.options.stepMillisecond;
        newMillisecond = newMillisecond > 999 ? newMillisecond - 1e3 : newMillisecond;
        if (this.validateTime(currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds(), newMillisecond, currentTime, "INCREMENT")) {
          this.updateTime(event, currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds(), newMillisecond);
        }
        event.preventDefault();
      },
      decrementMillisecond: function(event) {
        var currentTime = this.isDate(this.value) ? this.value : this.viewDate, currentMillisecond = currentTime.getMilliseconds(), newMillisecond = currentMillisecond - this.options.stepMillisecond;
        newMillisecond = newMillisecond < 0 ? newMillisecond + 1e3 : newMillisecond;
        if (this.validateTime(currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds(), newMillisecond, currentTime, "DECREMENT")) {
          this.updateTime(event, currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds(), newMillisecond);
        }
        event.preventDefault();
      },
      toggleAmPm: function(event) {
        var currentTime = this.isDate(this.value) ? this.value : this.viewDate, currentHour = currentTime.getHours(), newHour = currentHour >= 12 ? currentHour - 12 : currentHour + 12;
        this.updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds());
        event.preventDefault();
      },
      handleHoursInput: function(input, event) {
        var currentTime = this.isDate(this.value) ? this.value : this.viewDate, value = input.value, valid = false, newHours;
        var reg = new RegExp("^([0-9]){1,2}$");
        if (reg.test(value)) {
          newHours = parseInt(value);
          if (this.options.hourFormat === "12") {
            if (newHours >= 1 && newHours <= 12) {
              valid = this.validateTime(newHours, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds(), currentTime);
            }
          } else {
            if (newHours >= 0 && newHours <= 23) {
              valid = this.validateTime(newHours, currentTime.getMinutes(), currentTime.getSeconds(), currentTime.getMilliseconds(), currentTime);
            }
          }
        }
        if (!valid) {
          event.preventDefault();
          input.value = this.oldHours;
          return;
        }
        var newDateTime = this.isDate(this.value) ? new Date(this.value) : this.getNow();
        newDateTime.setHours(newHours);
        this.updateTimeAfterInput(event, newDateTime);
      },
      handleMinutesInput: function(input, event) {
        var currentTime = this.isDate(this.value) ? this.value : this.viewDate, value = input.value, valid = false, newMinutes;
        var reg = new RegExp("^([0-9]){1,2}$");
        if (reg.test(value)) {
          newMinutes = parseInt(value);
          if (newMinutes >= 0 && newMinutes <= 59) {
            valid = this.validateTime(currentTime.getHours(), newMinutes, currentTime.getSeconds(), currentTime.getMilliseconds(), currentTime);
          }
        }
        if (!valid) {
          event.preventDefault();
          input.value = this.oldMinutes;
          return;
        }
        var newDateTime = this.isDate(this.value) ? new Date(this.value) : this.getNow();
        newDateTime.setMinutes(newMinutes);
        this.updateTimeAfterInput(event, newDateTime);
      },
      handleSecondsInput: function(input, event) {
        var currentTime = this.isDate(this.value) ? this.value : this.viewDate, value = input.value, valid = false, newSeconds;
        var reg = new RegExp("^([0-9]){1,2}$");
        if (reg.test(value)) {
          newSeconds = parseInt(value);
          if (newSeconds >= 0 && newSeconds <= 59) {
            valid = this.validateTime(currentTime.getHours(), currentTime.getMinutes(), newSeconds, currentTime.getMilliseconds(), currentTime);
          }
        }
        if (!valid) {
          event.preventDefault();
          input.value = this.oldSeconds;
          return;
        }
        var newDateTime = this.isDate(this.value) ? new Date(this.value) : this.getNow();
        newDateTime.setSeconds(newSeconds);
        this.updateTimeAfterInput(event, newDateTime);
      },
      handleMillisecondsInput: function(input, event) {
        var currentTime = this.isDate(this.value) ? this.value : this.viewDate, value = input.value, valid = false, newMilliseconds;
        var reg = new RegExp("^([0-9]){1,3}$");
        if (reg.test(value)) {
          newMilliseconds = parseInt(value);
          if (newMilliseconds >= 0 && newMilliseconds <= 999) {
            valid = this.validateTime(currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds(), newMilliseconds, currentTime);
          }
        }
        if (!valid) {
          event.preventDefault();
          input.value = this.oldMilliseconds;
          return;
        }
        var newDateTime = this.isDate(this.value) ? new Date(this.value) : this.getNow();
        newDateTime.setMilliseconds(newMilliseconds);
        this.updateTimeAfterInput(event, newDateTime);
      },
      validateTime: function(hour, minute, second, millisecond, value, direction) {
        var valid = true;
        var dateNew = new Date(value.getFullYear(), value.getMonth(), value.getDate(), hour, minute, second, millisecond);
        if (this.options.minDate && value) {
          if (this.options.minDate > dateNew) {
            if (direction === "INCREMENT" && this.options.minDate > value) {
              ;
            } else {
              valid = false;
            }
          }
        }
        if (this.options.maxDate && value) {
          if (this.options.maxDate < dateNew) {
            if (direction === "DECREMENT" && this.options.maxDate < value) {
              ;
            } else {
              valid = false;
            }
          }
        }
        return valid;
      },
      updateTime: function(event, hour, minute, second, millisecond) {
        var newDateTime = this.isDate(this.value) ? new Date(this.value) : this.getNow();
        newDateTime.setHours(hour);
        newDateTime.setMinutes(minute);
        newDateTime.setSeconds(second);
        newDateTime.setMilliseconds(millisecond);
        this.updateModel(event, newDateTime);
        if (this.options.onSelect) {
          if (this.timePickerTimer === "undefined" || this.timePickerTimer === null) {
            this.options.onSelect.call(this, event, newDateTime);
          }
        }
      },
      updateTimeAfterInput: function(event, newDateTime) {
        this.value = newDateTime;
        this.inputfield.val(this.getValueToRender());
        if (this.options.onSelect) {
          this.options.onSelect.call(this, event, newDateTime);
        }
      },
      /**
       * Gets the current date and time. If a time zone is specified in the options, 
       * it returns the current date and time adjusted to that time zone.
       * 
       * @returns {Date} The current date and time.
       */
      getNow: function() {
        var now = /* @__PURE__ */ new Date();
        if (this.options.timeZone) {
          var jsTimezone = this.convertTimeZone(this.options.timeZone);
          var localString = now.toLocaleString("en-GB", {
            // use English so we can parse it back
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZone: jsTimezone
          }).replace(" at ", ", ");
          now = new Date(localString);
        }
        return now;
      },
      /**
       * Converts a Java time zone string to an IANA time zone string.
       * 
       * @param {string} javaTimeZone - The Java time zone string to convert.
       * @returns {string} The corresponding IANA time zone string.
       * @throws {Error} If the input Java time zone string is in an invalid format.
       */
      convertTimeZone: function(javaTimeZone) {
        if (!javaTimeZone || ["ETC/UTC", "ETC/GMT", "UTC", "GMT"].includes(javaTimeZone.toUpperCase())) {
          return javaTimeZone;
        }
        const matches = javaTimeZone.match(/^(GMT|UTC)([+-])(\d{2}):(\d{2})$/);
        if (!matches) {
          return javaTimeZone;
        }
        const sign = matches[2];
        const hours = parseInt(matches[3]);
        let ianaTimeZone = `Etc/GMT`;
        if (hours !== 0) {
          ianaTimeZone = `${ianaTimeZone}${sign === "+" ? "-" : "+"}${hours}`;
        }
        return ianaTimeZone;
      },
      onTodayButtonClick: function(event) {
        var today2 = this.getNow();
        var dateMeta = { day: today2.getDate(), month: today2.getMonth(), year: today2.getFullYear(), today: true, selectable: true };
        this.updateViewDate(event, today2);
        if (this.options.showTime) {
          this.updateTime(event, today2.getHours(), today2.getMinutes(), today2.getSeconds(), today2.getMilliseconds());
        }
        this.onDateSelect(event, dateMeta);
        if (this.options.onTodayButtonClick) {
          this.options.onTodayButtonClick.call(this, event);
        }
      },
      onClearButtonClick: function(event) {
        this.updateViewDate(event, this.getNow());
        this.updateModel(event, null);
        if (this.options.onClearButtonClick) {
          this.options.onClearButtonClick.call(this, event);
        }
        this.hideOverlay();
      },
      escapeHTML: function(value) {
        var entityMap = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "/": "&#x2F;",
          "`": "&#x60;",
          "=": "&#x3D;"
        };
        return String(value).replace(/[&<>"'`=\/]/g, function(s) {
          return entityMap[s];
        });
      },
      truncateDate: function(value) {
        if (value) {
          value.setHours(0);
          value.setMinutes(0);
          value.setSeconds(0);
          value.setMilliseconds(0);
        }
        return value;
      },
      updateYearNavigator: function() {
        if (this.hasCustomYearRange || this.options.yearRange) {
          return;
        }
        if (this.options.yearNavigator) {
          var viewYear = this.viewDate.getFullYear();
          this.options.yearRange = viewYear - 1e3 + ":" + (viewYear + 1e3);
        }
      },
      updateViewDate: function(event, value, silent = false) {
        if (this.options.onViewDateChange && !silent) {
          this.options.onViewDateChange.call(this, event, value);
        }
        this.viewDate = value;
        if ((this.options.autoMonthFormat || !this.inputfield.val() || this.options.showMinMaxRange) && this.options.monthNavigator && this.options.view !== "month") {
          var viewMonth = this.viewDate.getMonth();
          viewMonth = this.isInMaxYear() && Math.min(this.options.maxDate.getMonth(), viewMonth) || this.isInMinYear() && Math.max(this.options.minDate.getMonth(), viewMonth) || viewMonth;
          this.viewDate.setMonth(viewMonth);
        }
        this.updatePanel();
      },
      updateModel: function(event, value, updateInput) {
        this.value = value === "" ? null : value;
        if (updateInput != false) {
          this.inputfield.val(this.getValueToRender());
        }
        this.updatePanel();
      },
      updatePanel: function() {
        var el = document.activeElement;
        this.panel.get(0).innerHTML = this.renderPanelElements();
        if (el && el.getAttribute("aria-label")) {
          var refocus = this.panel.find("[aria-label='" + el.getAttribute("aria-label") + "']");
          if (refocus.length) {
            PrimeFaces.queueTask(function() {
              refocus.first().trigger("focus");
            });
          }
        }
        this._setInitOptionValues();
        this._bindPanelEvents();
      }
    });
  }
});

// src/datepicker/1-datepicker.js
var import_datepicker = __toESM(require_datepicker());
var DatePicker = class extends BaseWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    this.input = $(this.jqId + "_input");
    this.jqEl = this.cfg.inline ? $(this.jqId + "_inline") : this.input;
    var $this = this;
    this.cfg.autoDetectDisplay = this.cfg.autoDetectDisplay === void 0 ? true : this.cfg.autoDetectDisplay;
    this.cfg.responsiveBreakpoint = this.cfg.responsiveBreakpoint || 576;
    this.cfg.defaultDate = this.input.val() || this.cfg.defaultDate;
    this.configureLocale();
    this.bindPanelCreationListener();
    this.bindDateSelectListener();
    this.bindClearButtonListener();
    this.bindViewChangeListener();
    this.bindCloseListener();
    var touchEnabled = PrimeFaces.env.isTouchable(this.cfg) && !this.input.attr("readonly") && this.cfg.showIcon;
    if (!this.cfg.inline) {
      PrimeFaces.skinInput(this.jqEl);
      if (this.cfg.behaviors) {
        PrimeFaces.attachBehaviors(this.jqEl, this.cfg.behaviors);
      }
      var events = this.input[0] ? $._data(this.input[0], "events") : null;
      var originalOnchange = this.input.prop("onchange");
      if (!originalOnchange && events && events.change) {
        originalOnchange = events.change[0].handler;
      }
      this.input.prop("onchange", null).off("change");
      this.cfg.onChange = function(event) {
        if (originalOnchange) {
          originalOnchange.call(this, event);
        }
      };
      this.cfg.onBeforeShow = function() {
        if ($this.refocusInput) {
          $this.refocusInput = false;
          return false;
        }
        this.panel.css("z-index", PrimeFaces.nextZindex());
        var inst = this;
        if (touchEnabled) {
          $this.jqEl.prop("readonly", true);
        }
        var preShow = $this.cfg.preShow;
        if (preShow) {
          return $this.cfg.preShow.call($this, inst);
        }
        if ($this.cfg.lazyModel) {
          $this.updateLazyModel();
        }
      };
    }
    if (touchEnabled) {
      this.cfg.onBeforeHide = function() {
        $this.jqEl.attr("readonly", false);
      };
    }
    this.cfg.panelStyleClass = (this.cfg.panelStyleClass || "") + " p-datepicker-panel";
    this.cfg.rangeSeparator = this.cfg.rangeSeparator || "-";
    this.cfg.timeSeparator = this.cfg.timeSeparator || ":";
    if (this.cfg.selectionMode === "range") {
      this.cfg.viewDate = this.viewDateOption;
    } else {
      this.cfg.viewDate = this.cfg.defaultDate;
    }
    this.applyMask();
    this.jq.datePicker(this.cfg);
    if (!this.cfg.inline && this.cfg.showIcon) {
      this.triggerButton = this.jqEl.siblings(".ui-datepicker-trigger:button");
      this.triggerButton.attr("aria-label", PrimeFaces.getLocaleLabel("chooseDate")).attr("aria-haspopup", true);
      var title = this.jqEl.attr("title");
      if (title) {
        this.triggerButton.attr("title", title);
      }
      var buttonIndex = this.cfg.buttonTabindex || this.jqEl.attr("tabindex");
      if (buttonIndex) {
        this.triggerButton.attr("tabindex", buttonIndex);
      }
      PrimeFaces.skinButton(this.triggerButton);
    }
    if (!this.cfg.inline) {
      this.jq.data("primefaces-overlay-target", this.id).find("*").data("primefaces-overlay-target", this.id);
    }
    this.jq.data().primeDatePicker.updateResponsiveness();
    this.input.data(PrimeFaces.CLIENT_ID_DATA, this.id);
    if (this.cfg.inline && this.cfg.lazyModel) {
      this.updateLazyModel();
    }
  }
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  refresh(cfg) {
    if (this.panel && this.cfg.appendTo) {
      var appendTo = PrimeFaces.utils.resolveDynamicOverlayContainer(this);
      PrimeFaces.utils.cleanupDynamicOverlay(this, this.panel, this.id + "_panel", appendTo);
    }
    super.refresh(cfg);
  }
  /**
   * @override
   * @inheritdoc
   */
  destroy() {
    if (this.panel && this.cfg.appendTo) {
      var appendTo = PrimeFaces.utils.resolveDynamicOverlayContainer(this);
      PrimeFaces.utils.removeDynamicOverlay(this, null, this.id + "_panel", appendTo);
    }
    this.jq.datePicker().data().primeDatePicker._destroy();
    for (var key in this.jq.data().primeDatePicker) {
      this.jq.data().primeDatePicker[key] = null;
    }
    if (this.cfg.mask && this.input) {
      this.input.inputmask("remove");
      this.input.off();
    }
    super.destroy();
  }
  /**
   * Initializes the localized messages for the currently configured language.
   * @private
   */
  configureLocale() {
    var localeSettings = PrimeFaces.getLocaleSettings(this.cfg.userLocale);
    if (localeSettings) {
      var locale = {};
      for (var setting in localeSettings) {
        locale[setting] = localeSettings[setting];
      }
      if (this.cfg.localeAm) {
        locale["am"] = this.cfg.localeAm;
      }
      if (this.cfg.localePm) {
        locale["pm"] = this.cfg.localePm;
      }
      this.cfg.userLocale = locale;
    }
  }
  /**
   * Initializes the mask on the input if using a mask and not an inline picker.
   * @private
   */
  applyMask() {
    if (this.cfg.inline || this.input.is("[readonly]") || this.input.is(":disabled")) {
      return;
    }
    var $this = this;
    if (this.cfg.mask) {
      var isAutoClear = this.cfg.maskAutoClear === void 0 ? true : this.cfg.maskAutoClear;
      var maskCfg = {
        placeholder: this.cfg.maskSlotChar || "_",
        clearMaskOnLostFocus: isAutoClear,
        clearIncomplete: isAutoClear,
        autoUnmask: false,
        showMaskOnHover: false,
        onBeforePaste: function(pastedValue, opts) {
          PrimeFaces.queueTask(function() {
            $this.input.trigger("input");
          }, 20);
          return pastedValue;
        }
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
      this.input.off("blur");
    }
  }
  /**
   * Callback for after the overlay panel is created.
   * @private
   */
  bindPanelCreationListener() {
    var $this = this;
    this.cfg.onPanelCreate = function() {
      $this.panel = this.panel;
      $this.cfg.appendTo = PrimeFaces.utils.resolveAppendTo($this, $this.jq, $this.panel);
      if ($this.cfg.inline) {
        $this.panel.css("position", "");
      }
      this.options.appendTo = PrimeFaces.expressions.SearchExpressionFacade.resolveComponentsAsSelector($this.jq, $this.cfg.appendTo);
    };
  }
  /**
   * Sets up the event listener for when another date was selected.
   * @private
   */
  bindDateSelectListener() {
    var $this = this;
    this.cfg.onSelect = function(event, date) {
      $this.viewDateOption = this.viewDate;
      $this.fireDateSelectEvent();
      if (!$this.cfg.inline && $this.cfg.focusOnSelect) {
        $this.refocusInput = true;
        $this.jqEl.trigger("focus");
        if (!$this.cfg.showIcon) {
          var inst = this;
          $this.jqEl.off("click.datepicker").on("click.datepicker", function() {
            inst.showOverlay();
          });
        }
        PrimeFaces.queueTask(function() {
          $this.refocusInput = false;
        }, 10);
      }
    };
  }
  /**
   * Sets up the event listener for when the Clear button is selected.
   * @private
   */
  bindClearButtonListener() {
    var $this = this;
    this.cfg.onClearButtonClick = function(event) {
      $this.input.trigger("change");
      $this.callBehavior("dateSelect");
    };
  }
  /**
   * Triggers the event for when another date was selected.
   * @private
   */
  fireDateSelectEvent() {
    if (this.cfg.selectionMode === "range" && this.input.val().indexOf(this.cfg.rangeSeparator) === -1) {
      return;
    }
    this.input.trigger("change");
    this.callBehavior("dateSelect");
  }
  /**
   * Sets up the event listener for when the date picker changes to a different month or year page.
   * @private
   */
  bindViewChangeListener() {
    var $this = this;
    this.cfg.onViewDateChange = function(event, date) {
      $this.viewDateOption = date;
      $this.fireViewChangeEvent(date);
    };
  }
  /**
   * Triggers the event for when the date picker changed to a different month or year page.
   * @private
   * @param {Date} date The date to which the date picker changed.
   */
  fireViewChangeEvent(date) {
    var $this = this;
    var lazy = this.cfg.lazyModel;
    var options = {
      params: [
        { name: this.id + "_year", value: date.getFullYear() },
        { name: this.id + "_month", value: date.getMonth() }
      ]
    };
    if (lazy) {
      if (!this.panel.parent().is("div.ui-state-disabled")) {
        this.panel.wrap("<div class='ui-state-disabled ui-datepicker-disabled'/>");
      }
      options.onsuccess = function(responseXML, status, xhr) {
        PrimeFaces.ajax.Response.handle(responseXML, status, xhr, {
          widget: $this,
          handle: function(content) {
            var dateMetadata = JSON.parse(content).dateMetadata;
            var pdp = $this.jq.data().primeDatePicker;
            var disabledDates = [];
            var enabledDates = [];
            var dateStyleClasses = {};
            for (date in dateMetadata) {
              var parsedDate = pdp.parseOptionValue(date);
              if (dateMetadata[date].disabled) {
                disabledDates.push(parsedDate);
              }
              if (dateMetadata[date].enabled) {
                enabledDates.push(parsedDate);
              }
              if (dateMetadata[date].styleClass) {
                dateStyleClasses[pdp.toISODateString(parsedDate)] = dateMetadata[date].styleClass;
              }
            }
            pdp.options.dateStyleClasses = dateStyleClasses;
            $this.setDisabledDates(disabledDates);
            $this.setEnabledDates(enabledDates);
            if ($this.panel.parent().is("div.ui-state-disabled")) {
              $this.panel.unwrap();
            }
            pdp.focusOverlay();
          }
        });
        return true;
      };
    }
    if (this.hasBehavior("viewChange")) {
      if (lazy) {
        options.update = (options.update || "") + " " + this.id;
      }
      this.callBehavior("viewChange", options);
    } else if (lazy) {
      options.event = "viewChange";
      options.source = this.id;
      options.process = this.id;
      options.update = this.id;
      options.formId = this.getParentFormId();
      PrimeFaces.ajax.Request.handle(options);
    }
  }
  /**
   * Triggers a viewChange event which updates the lazy model through an Ajax request using the current date.
   */
  updateLazyModel() {
    if (this.cfg.lazyModel) {
      this.fireViewChangeEvent(this.getViewDate());
    }
  }
  /**
   * Sets up the event listeners for when the date picker is closed.
   * @private
   */
  bindCloseListener() {
    if (this.hasBehavior("close")) {
      var $this = this;
      this.cfg.onBeforeHide = function() {
        $this.fireCloseEvent();
      };
    }
  }
  /**
   * Fires the close event when the date picker is closed.
   * @private
   */
  fireCloseEvent() {
    if (this.cfg.behaviors) {
      var closeBehavior = this.cfg.behaviors["close"];
      if (closeBehavior) {
        closeBehavior.call(this);
      }
    }
  }
  /**
   * Sets the date value the date picker.
   * @param {Date | string} date The new date for this widget.
   */
  setDate(date) {
    this.jq.datePicker("setDate", date);
  }
  /**
   * Gets the currently selected date value of the date picker.
   * @return {Date | string | null} The date, if one is currently selected. The empty `string` or `null` when no date
   * is selected.
   */
  getDate() {
    return this.jq.datePicker("getDate");
  }
  /**
   * Checks whether a date is selected.
   * @returns {boolean} true if a date is selected.
   */
  hasDate() {
    return this.getDate() instanceof Date;
  }
  /**
   * Sets the displayed visible calendar date. This refers to the currently displayed month page.
   * @param {string | Date | Date[]} date The date to be shown in the calendar.
   * @param {boolean} [silent=false] Whether to update the view date without triggering the AJAX viewChange event.
   */
  setViewDate(date, silent = false) {
    var viewDate = this.jq.data().primeDatePicker.parseValue(date);
    this.jq.datePicker("updateViewDate", null, viewDate, silent);
  }
  /**
   * Gets the displayed visible calendar date. This refers to the currently displayed month page.
   * @return {Date | Date[]} The currently displayed date or dates.
   */
  getViewDate() {
    return this.jq.datePicker().data().primeDatePicker.viewDate;
  }
  /**
   * Sets the disabled dates.
   * @param {string[] | Date[]} disabledDates The dates to disable.
   */
  setDisabledDates(disabledDates) {
    var pdp = this.jq.data().primeDatePicker;
    pdp.options.disabledDates = disabledDates;
    if (pdp.options.disabledDates) {
      for (var i = 0; i < pdp.options.disabledDates.length; i++) {
        pdp.options.disabledDates[i] = pdp.parseOptionValue(pdp.options.disabledDates[i]);
      }
    }
    this.updatePanel();
  }
  /**
   * Sets the enabled dates.
   * @param {string[] | Date[]} enabledDates The dates to enable.
   */
  setEnabledDates(enabledDates) {
    var pdp = this.jq.data().primeDatePicker;
    if (enabledDates != null && enabledDates.length > 0) {
      pdp.options.enabledDates = enabledDates;
      if (pdp.options.enabledDates) {
        for (var i = 0; i < pdp.options.enabledDates.length; i++) {
          pdp.options.enabledDates[i] = pdp.parseOptionValue(pdp.options.enabledDates[i]);
        }
      }
    }
    this.updatePanel();
  }
  /**
   * Sets the disabled days.
   * @param {number[]} disabledDays The days to disable.
   */
  setDisabledDays(disabledDays) {
    this.jq.data().primeDatePicker.options.disabledDays = disabledDays;
    this.updatePanel();
  }
  /**
   * Update panel.
   * @private
   */
  updatePanel() {
    var pdp = this.jq.data().primeDatePicker;
    pdp.panel.get(0).innerHTML = pdp.renderPanelElements();
  }
  /**
   * Shows the popup panel.
   */
  show() {
    this.jq.data().primeDatePicker.showOverlay();
  }
  /**
   * Hide the popup panel.
   */
  hide() {
    this.jq.data().primeDatePicker.hideOverlay();
  }
  /**
   * Enables the datepicker, so that the user can select a date.
   */
  enable() {
    this.jq.data().primeDatePicker.options.disabled = false;
    this.updatePanel();
    PrimeFaces.utils.enableInputWidget(this.input);
    PrimeFaces.utils.enableButton(this.triggerButton);
  }
  /**
   * Disables the datepicker, so that the user can no longer select any date.
   */
  disable() {
    this.hide();
    this.jq.data().primeDatePicker.options.disabled = true;
    this.updatePanel();
    PrimeFaces.utils.disableInputWidget(this.input);
    PrimeFaces.utils.disableButton(this.triggerButton);
  }
};
export {
  DatePicker
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2RhdGVwaWNrZXIvMC1kYXRlcGlja2VyLmNqcyIsICIuLi9zcmMvZGF0ZXBpY2tlci8xLWRhdGVwaWNrZXIuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBOT1RFOiBBbGwgdGhlIGRvY3VtZW50YXRpb24gYW5kIFR5cGVTY3JpcHQgZGVjbGFyYXRpb25zIGFyZSBpbiAwLWRhdGVwaWNrZXIuZC50c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBQcmltZSBEYXRlUGlja2VyIFdpZGdldFxuICovXG5cbiQud2lkZ2V0KFwicHJpbWUuZGF0ZVBpY2tlclwiLCB7XG5cbiAgICBvcHRpb25zOiB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICBkZWZhdWx0RGF0ZTogbnVsbCxcbiAgICAgICAgZGVmYXVsdEhvdXI6IDAsXG4gICAgICAgIGRlZmF1bHRNaW51dGU6IDAsXG4gICAgICAgIGRlZmF1bHRTZWNvbmQ6IDAsXG4gICAgICAgIGRlZmF1bHRNaWxsaXNlY29uZDogMCxcbiAgICAgICAgdmlld0RhdGU6IG51bGwsXG4gICAgICAgIHN0eWxlOiBudWxsLFxuICAgICAgICBzdHlsZUNsYXNzOiBudWxsLFxuICAgICAgICBpbmxpbmU6IGZhbHNlLFxuICAgICAgICBmbGV4OiBmYWxzZSxcbiAgICAgICAgc2VsZWN0aW9uTW9kZTogJ3NpbmdsZScsXG4gICAgICAgIHJhbmdlU2VwYXJhdG9yOiAnLScsXG4gICAgICAgIHRpbWVTZXBhcmF0b3I6ICc6JyxcbiAgICAgICAgZnJhY3Rpb25TZXBhcmF0b3I6ICcuJyxcbiAgICAgICAgaW5wdXRJZDogbnVsbCxcbiAgICAgICAgaW5wdXRTdHlsZTogbnVsbCxcbiAgICAgICAgaW5wdXRTdHlsZUNsYXNzOiBudWxsLFxuICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgIHJlYWRvbmx5OiBmYWxzZSxcbiAgICAgICAgcmVhZE9ubHlJbnB1dDogZmFsc2UsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgIHRhYkluZGV4OiBudWxsLFxuICAgICAgICBwbGFjZWhvbGRlcjogbnVsbCxcbiAgICAgICAgc2hvd0ljb246IGZhbHNlLFxuICAgICAgICBpY29uOiAndWktaWNvbiB1aS1pY29uLWNhbGVuZGFyJyxcbiAgICAgICAgc2hvd09uRm9jdXM6IHRydWUsXG4gICAgICAgIGtlZXBJbnZhbGlkOiBmYWxzZSxcbiAgICAgICAgbnVtYmVyT2ZNb250aHM6IDEsXG4gICAgICAgIHZpZXc6ICdkYXRlJyxcbiAgICAgICAgdG91Y2hVSTogZmFsc2UsXG4gICAgICAgIHNob3dXZWVrOiBmYWxzZSxcbiAgICAgICAgd2Vla0NhbGN1bGF0b3I6IG51bGwsXG4gICAgICAgIHNob3dUaW1lOiBmYWxzZSxcbiAgICAgICAgdGltZU9ubHk6IGZhbHNlLFxuICAgICAgICB0aW1lWm9uZTogbnVsbCxcbiAgICAgICAgc2hvd1NlY29uZHM6IGZhbHNlLFxuICAgICAgICBzaG93TWlsbGlzZWNvbmRzOiBmYWxzZSxcbiAgICAgICAgaG91ckZvcm1hdDogJzI0JyxcbiAgICAgICAgc3RlcEhvdXI6IDEsXG4gICAgICAgIHN0ZXBNaW51dGU6IDEsXG4gICAgICAgIHN0ZXBTZWNvbmQ6IDEsXG4gICAgICAgIHN0ZXBNaWxsaXNlY29uZDogMSxcbiAgICAgICAgc2hvcnRZZWFyQ3V0b2ZmOiAnKzEwJyxcbiAgICAgICAgaGlkZU9uRGF0ZVRpbWVTZWxlY3Q6IGZhbHNlLFxuICAgICAgICBoaWRlT25SYW5nZVNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgIHVzZXJMb2NhbGU6IG51bGwsXG4gICAgICAgIGxvY2FsZToge1xuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IDAsXG4gICAgICAgICAgICBzaG93TW9udGhBZnRlclllYXI6IGZhbHNlLFxuICAgICAgICAgICAgZGF5TmFtZXM6IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdLFxuICAgICAgICAgICAgZGF5TmFtZXNTaG9ydDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICAgICAgICAgICAgZGF5TmFtZXNNaW46IFtcIlN1XCIsIFwiTW9cIiwgXCJUdVwiLCBcIldlXCIsIFwiVGhcIiwgXCJGclwiLCBcIlNhXCJdLFxuICAgICAgICAgICAgbW9udGhOYW1lczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG4gICAgICAgICAgICBtb250aE5hbWVzU2hvcnQ6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXSxcbiAgICAgICAgICAgIHRvZGF5OiAnVG9kYXknLFxuICAgICAgICAgICAgY2xlYXI6ICdDbGVhcicsXG4gICAgICAgICAgICBub3c6ICdOb3cnLFxuICAgICAgICAgICAgeWVhcjogJ1llYXInLFxuICAgICAgICAgICAgbW9udGg6ICdNb250aCcsXG4gICAgICAgICAgICB3ZWVrOiAnV2VlaycsXG4gICAgICAgICAgICBkYXk6ICdEYXknLFxuICAgICAgICAgICAgaG91clRleHQ6ICdIb3VyJyxcbiAgICAgICAgICAgIG1pbnV0ZVRleHQ6ICdNaW51dGUnLFxuICAgICAgICAgICAgc2Vjb25kVGV4dDogJ1NlY29uZCcsXG4gICAgICAgICAgICBtaWxsaXNlY29uZFRleHQ6ICdNaWxsaXNlY29uZCcsXG4gICAgICAgICAgICBhbTogJ0FNJyxcbiAgICAgICAgICAgIHBtOiAnUE0nLFxuICAgICAgICAgICAgY2hvb3NlRGF0ZTogXCJDaG9vc2UgRGF0ZVwiLFxuICAgICAgICAgICAgcHJldkRlY2FkZTogXCJQcmV2aW91cyBEZWNhZGVcIixcbiAgICAgICAgICAgIG5leHREZWNhZGU6IFwiTmV4dCBEZWNhZGVcIixcbiAgICAgICAgICAgIHByZXZZZWFyOiBcIlByZXZpb3VzIFllYXJcIixcbiAgICAgICAgICAgIG5leHRZZWFyOiBcIk5leHQgWWVhclwiLFxuICAgICAgICAgICAgcHJldk1vbnRoOiBcIlByZXZpb3VzIE1vbnRoXCIsXG4gICAgICAgICAgICBuZXh0TW9udGg6IFwiTmV4dCBNb250aFwiLFxuICAgICAgICAgICAgcHJldkhvdXI6IFwiUHJldmlvdXMgSG91clwiLFxuICAgICAgICAgICAgbmV4dEhvdXI6IFwiTmV4dCBIb3VyXCIsXG4gICAgICAgICAgICBwcmV2TWludXRlOiBcIlByZXZpb3VzIE1pbnV0ZVwiLFxuICAgICAgICAgICAgbmV4dE1pbnV0ZTogXCJOZXh0IE1pbnV0ZVwiLFxuICAgICAgICAgICAgcHJldlNlY29uZDogXCJQcmV2aW91cyBTZWNvbmRcIixcbiAgICAgICAgICAgIG5leHRTZWNvbmQ6IFwiTmV4dCBTZWNvbmRcIixcbiAgICAgICAgICAgIHByZXZNaWxsaXNlY29uZDogXCJQcmV2aW91cyBNaWxsaXNlY29uZFwiLFxuICAgICAgICAgICAgbmV4dE1pbGxpc2Vjb25kOiBcIk5leHQgTWlsbGlzZWNvbmRcIlxuICAgICAgICB9LFxuICAgICAgICBkYXRlRm9ybWF0OiAnbW0vZGQveXknLFxuICAgICAgICB5ZWFyUmFuZ2U6IG51bGwsXG4gICAgICAgIHBhbmVsU3R5bGU6IG51bGwsXG4gICAgICAgIHBhbmVsU3R5bGVDbGFzczogbnVsbCxcbiAgICAgICAgbW9udGhOYXZpZ2F0b3I6IGZhbHNlLFxuICAgICAgICB5ZWFyTmF2aWdhdG9yOiBmYWxzZSxcbiAgICAgICAgZGF0ZVN0eWxlQ2xhc3NlczogbnVsbCxcbiAgICAgICAgZGlzYWJsZWREYXRlczogbnVsbCxcbiAgICAgICAgZW5hYmxlZERhdGVzOiBudWxsLFxuICAgICAgICBkaXNhYmxlZERheXM6IG51bGwsXG4gICAgICAgIG1pbkRhdGU6IG51bGwsXG4gICAgICAgIG1heERhdGU6IG51bGwsXG4gICAgICAgIG1heERhdGVDb3VudDogbnVsbCxcbiAgICAgICAgc2hvd01pbk1heFJhbmdlOiB0cnVlLFxuICAgICAgICBzaG93T3RoZXJNb250aHM6IGZhbHNlLFxuICAgICAgICBzZWxlY3RPdGhlck1vbnRoczogZmFsc2UsXG4gICAgICAgIGF1dG9Nb250aEZvcm1hdDogdHJ1ZSxcbiAgICAgICAgc2hvd0J1dHRvbkJhcjogZmFsc2UsXG4gICAgICAgIHRvZGF5QnV0dG9uU3R5bGVDbGFzczogJ3VpLXByaW9yaXR5LXNlY29uZGFyeScsXG4gICAgICAgIGNsZWFyQnV0dG9uU3R5bGVDbGFzczogJ3VpLXByaW9yaXR5LXNlY29uZGFyeScsXG4gICAgICAgIGFwcGVuZFRvOiBudWxsLFxuICAgICAgICBkYXRlVGVtcGxhdGU6IG51bGwsXG4gICAgICAgIHRpbWVJbnB1dDogZmFsc2UsXG4gICAgICAgIG9uRm9jdXM6IG51bGwsXG4gICAgICAgIG9uQmx1cjogbnVsbCxcbiAgICAgICAgb25JbnB1dDogbnVsbCxcbiAgICAgICAgb25TZWxlY3Q6IG51bGwsXG4gICAgICAgIG9uQ2hhbmdlOiBudWxsLFxuICAgICAgICBvblZpZXdEYXRlQ2hhbmdlOiBudWxsLFxuICAgICAgICBvblRvZGF5QnV0dG9uQ2xpY2s6IG51bGwsXG4gICAgICAgIG9uQ2xlYXJCdXR0b25DbGljazogbnVsbCxcbiAgICAgICAgb25CZWZvcmVTaG93OiBudWxsLFxuICAgICAgICBvbkJlZm9yZUhpZGU6IG51bGwsXG4gICAgICAgIG9uTW9udGhDaGFuZ2U6IG51bGwsXG4gICAgICAgIG9uWWVhckNoYW5nZTogbnVsbFxuICAgIH0sXG5cbiAgICBfY3JlYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5wdXRmaWVsZCA9IHRoaXMuZWxlbWVudC5jaGlsZHJlbignaW5wdXQnKTtcbiAgICAgICAgdGhpcy5pbnB1dGZpZWxkLmFkZENsYXNzKCdoYXNEYXRlcGlja2VyJyk7IC8vIG5lZWRlZCBmb3IgdWktZmxvYXQtbGFiZWxcblxuICAgICAgICB0aGlzLl9zZXRJbml0VmFsdWVzKCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcigpO1xuICAgIH0sXG5cbiAgICBfc2V0SW5pdFZhbHVlczogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudXNlckxvY2FsZSAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLnVzZXJMb2NhbGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAkLmV4dGVuZCh0aGlzLm9wdGlvbnMubG9jYWxlLCB0aGlzLm9wdGlvbnMudXNlckxvY2FsZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudGltZU9ubHkpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zaG93VGltZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dXZWVrICYmICF0aGlzLm9wdGlvbnMud2Vla0NhbGN1bGF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy53ZWVrQ2FsY3VsYXRvciA9IHRoaXMuY2FsY3VsYXRlV2Vla051bWJlci5iaW5kKHRoaXMpO1xuXG4gICAgICAgICAgICAvLyBpbml0aWFsaXplIHRoZSBwb3RlbnRpYWxseSBtaXNzaW5nIGZpcnN0RGF5V2Vla09mZnNldCBvcHRpb25cbiAgICAgICAgICAgIC8vIGJhc2VkIG9uIHRoZSBmaXJzdERheShPZldlZWspIG9wdGlvbjpcbiAgICAgICAgICAgIC8vICAtIGZpcnN0RGF5ID0gc2F0dXJkYXkgPT4gZmlyc3REYXlXZWVrT2Zmc2V0ID0gMTJcbiAgICAgICAgICAgIC8vICAtIGZpcnN0RGF5ID0gc3VuZGF5ID0+IGZpcnN0RGF5V2Vla09mZnNldCA9IDZcbiAgICAgICAgICAgIC8vICAtIGZpcnN0RGF5ID0gbW9uZGF5IChJU084NjAxKSA9PiBmaXJzdERheVdlZWtPZmZzZXQgPSA0XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gdGhvc2UgZGVmYXVsdHMgYXJlIGJhc2VkIG9uIHRoZSBsb2NhbGVzIG9uIHRoZSBsaWJyYXJ5XG4gICAgICAgICAgICAvLyBtb21lbnQuanMgYW5kIHdvbid0IGJlIGNvcnJlY3QgZm9yIF9hbGxfIGxvY2FsZXMuXG4gICAgICAgICAgICB2YXIgc3VuZGF5SW5kZXggPSB0aGlzLmdldFN1bmRheUluZGV4KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxvY2FsZS5maXJzdERheVdlZWtPZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChzdW5kYXlJbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5sb2NhbGUuZmlyc3REYXlXZWVrT2Zmc2V0ID0gNjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3VuZGF5SW5kZXggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubG9jYWxlLmZpcnN0RGF5V2Vla09mZnNldCA9IDEyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdW5kYXlJbmRleCA9PSA2KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5sb2NhbGUuZmlyc3REYXlXZWVrT2Zmc2V0ID0gNDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zaG93V2VlayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwYXJzZWREZWZhdWx0RGF0ZSA9IHRoaXMucGFyc2VWYWx1ZSh0aGlzLm9wdGlvbnMuZGVmYXVsdERhdGUpO1xuICAgICAgICB2YXIgaGFzTXVsdGlwbGVEYXRlcyA9ICh0aGlzLmlzTXVsdGlwbGVTZWxlY3Rpb24oKSB8fCB0aGlzLmlzUmFuZ2VTZWxlY3Rpb24oKSkgJiYgcGFyc2VkRGVmYXVsdERhdGUgaW5zdGFuY2VvZiBBcnJheTtcbiAgICAgICAgdmFyIHZpZXdEYXRlRGVmYXVsdHNUb05vdyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSBwYXJzZWREZWZhdWx0RGF0ZTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy52aWV3RGF0ZSAmJiAhaGFzTXVsdGlwbGVEYXRlcykge1xuICAgICAgICAgICAgdGhpcy52aWV3RGF0ZSA9IHRoaXMucGFyc2VWYWx1ZSh0aGlzLm9wdGlvbnMudmlld0RhdGUpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnZpZXdEYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3RGF0ZSA9IHRoaXMuZ2V0Tm93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaGFzTXVsdGlwbGVEYXRlcykge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0RhdGUgPSBwYXJzZWREZWZhdWx0RGF0ZVswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0RhdGUgPSBwYXJzZWREZWZhdWx0RGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnZpZXdEYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3RGF0ZSA9IHRoaXMuZ2V0Tm93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3RGF0ZS5zZXRIb3Vycyh0aGlzLm9wdGlvbnMuZGVmYXVsdEhvdXIpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0RhdGUuc2V0TWludXRlcyh0aGlzLm9wdGlvbnMuZGVmYXVsdE1pbnV0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuc2hvd1NlY29uZHMgJiYgIXRoaXMub3B0aW9ucy5zaG93TWlsbGlzZWNvbmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld0RhdGUuc2V0U2Vjb25kcygwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld0RhdGUuc2V0U2Vjb25kcyh0aGlzLm9wdGlvbnMuZGVmYXVsdFNlY29uZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLnNob3dNaWxsaXNlY29uZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3RGF0ZS5zZXRNaWxsaXNlY29uZHMoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdEYXRlLnNldE1pbGxpc2Vjb25kcyh0aGlzLm9wdGlvbnMuZGVmYXVsdE1pbGxpc2Vjb25kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmlld0RhdGVEZWZhdWx0c1RvTm93ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vICM2MDQ3IHJvdW5kIHRvIG5lYXJlc3Qgc3RlcE1pbnV0ZSBvbiBldmVuIGlmIGVkaXRpbmcgdXNpbmcga2V5Ym9hcmRcbiAgICAgICAgdGhpcy52aWV3RGF0ZSA9IHRoaXMuaXNEYXRlKHRoaXMudmlld0RhdGUpID8gbmV3IERhdGUodGhpcy52aWV3RGF0ZSkgOiB0aGlzLmdldE5vdygpO1xuICAgICAgICB0aGlzLnZpZXdEYXRlLnNldE1pbnV0ZXModGhpcy5zdGVwTWludXRlKHRoaXMudmlld0RhdGUuZ2V0TWludXRlcygpKSk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLm1pbkRhdGUgPSB0aGlzLnBhcnNlTWluTWF4VmFsdWUodGhpcy5vcHRpb25zLm1pbkRhdGUpO1xuICAgICAgICB0aGlzLm9wdGlvbnMubWF4RGF0ZSA9IHRoaXMucGFyc2VNaW5NYXhWYWx1ZSh0aGlzLm9wdGlvbnMubWF4RGF0ZSk7XG4gICAgICAgIHRoaXMudGlja3NUbzE5NzAgPSAoKCgxOTcwIC0gMSkgKiAzNjUgKyBNYXRoLmZsb29yKDE5NzAgLyA0KSAtIE1hdGguZmxvb3IoMTk3MCAvIDEwMCkgKyBNYXRoLmZsb29yKDE5NzAgLyA0MDApKSAqIDI0ICogNjAgKiA2MCAqIDEwMDAwMDAwKTtcblxuICAgICAgICBpZiAodmlld0RhdGVEZWZhdWx0c1RvTm93KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1pbkRhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3RGF0ZSA8IHRoaXMub3B0aW9ucy5taW5EYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld0RhdGUgPSBuZXcgRGF0ZSh0aGlzLm9wdGlvbnMubWluRGF0ZS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWF4RGF0ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpZXdEYXRlID4gdGhpcy5vcHRpb25zLm1heERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMub3B0aW9ucy5tYXhEYXRlLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMudmlld0RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy52aWV3RGF0ZSA9IHRoaXMudmlld0RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhc0N1c3RvbVllYXJSYW5nZSA9IHRoaXMub3B0aW9ucy55ZWFyUmFuZ2UgIT09IG51bGw7XG4gICAgICAgIHRoaXMudXBkYXRlWWVhck5hdmlnYXRvcigpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWREYXRlcykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMuZGlzYWJsZWREYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kaXNhYmxlZERhdGVzW2ldID0gdGhpcy5wYXJzZU9wdGlvblZhbHVlKHRoaXMub3B0aW9ucy5kaXNhYmxlZERhdGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZWREYXRlcyAmJiB0aGlzLm9wdGlvbnMuZW5hYmxlZERhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcHRpb25zLmVuYWJsZWREYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkRGF0ZXNbaV0gPSB0aGlzLnBhcnNlT3B0aW9uVmFsdWUodGhpcy5vcHRpb25zLmVuYWJsZWREYXRlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iaW5kUmVzcG9uc2l2ZVJlc2l6ZUxpc3RlbmVyKCk7XG4gICAgfSxcblxuICAgIHBhcnNlT3B0aW9uVmFsdWU6IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uICYmIHR5cGVvZiBvcHRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZURhdGUob3B0aW9uLCB0aGlzLm9wdGlvbnMuZGF0ZUZvcm1hdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH0sXG5cbiAgICBwYXJzZU1pbk1heFZhbHVlOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbiAmJiB0eXBlb2Ygb3B0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VEYXRlVGltZShvcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICB9LFxuXG4gICAgcGFyc2VWYWx1ZTogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24gJiYgdHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlVmFsdWVGcm9tU3RyaW5nKG9wdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH0sXG5cbiAgICBzZXREYXRlOiBmdW5jdGlvbihkYXRlKSB7XG4gICAgICAgIGlmICghZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RlbChudWxsLCBudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdEYXRlID0gdGhpcy5wYXJzZVZhbHVlKGRhdGUpO1xuICAgICAgICB2YXIgbmV3RGF0ZU1ldGEgPSB7IGRheTogbmV3RGF0ZS5nZXREYXRlKCksIG1vbnRoOiBuZXdEYXRlLmdldE1vbnRoKCksIHllYXI6IG5ld0RhdGUuZ2V0RnVsbFllYXIoKSwgc2VsZWN0YWJsZTogdHJ1ZSAvKiwgdG9kYXk6IHRydWUqLyB9O1xuXG4gICAgICAgIC8qIHNldCBjaGFuZ2VzICovXG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXdEYXRlO1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXdEYXRlKG51bGwsIG5ld0RhdGUpO1xuICAgICAgICB0aGlzLm9uRGF0ZVNlbGVjdChudWxsLCBuZXdEYXRlTWV0YSk7XG4gICAgfSxcblxuICAgIGdldERhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9LFxuXG4gICAgZ2V0Rmlyc3REYXlPZk1vbnRoSW5kZXg6IGZ1bmN0aW9uKG1vbnRoLCB5ZWFyKSB7XG4gICAgICAgIHZhciBkYXkgPSB0aGlzLmdldE5vdygpO1xuICAgICAgICBkYXkuc2V0RGF0ZSgxKTtcbiAgICAgICAgZGF5LnNldE1vbnRoKG1vbnRoKTtcbiAgICAgICAgZGF5LnNldEZ1bGxZZWFyKHllYXIpO1xuXG4gICAgICAgIHZhciBkYXlJbmRleCA9IGRheS5nZXREYXkoKSArIHRoaXMuZ2V0U3VuZGF5SW5kZXgoKTtcbiAgICAgICAgcmV0dXJuIGRheUluZGV4ID49IDcgPyBkYXlJbmRleCAtIDcgOiBkYXlJbmRleDtcbiAgICB9LFxuXG4gICAgZ2V0Rmlyc3REYXlPZldlZWs6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvY2FsZS5maXJzdERheU9mV2VlaztcbiAgICB9LFxuXG4gICAgZ2V0U3VuZGF5SW5kZXg6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZmlyc3REYXlPZldlZWsgPSB0aGlzLmdldEZpcnN0RGF5T2ZXZWVrKCk7XG4gICAgICAgIHJldHVybiBmaXJzdERheU9mV2VlayA+IDAgPyA3IC0gZmlyc3REYXlPZldlZWsgOiAwO1xuICAgIH0sXG5cbiAgICBnZXRTYXR1cmRheUluZGV4OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIDcgLSB0aGlzLmdldEZpcnN0RGF5T2ZXZWVrKCkgLSAxO1xuICAgIH0sXG5cbiAgICBnZXREYXlzQ291bnRJbk1vbnRoOiBmdW5jdGlvbihtb250aCwgeWVhcikge1xuICAgICAgICByZXR1cm4gMzIgLSB0aGlzLmRheWxpZ2h0U2F2aW5nQWRqdXN0KG5ldyBEYXRlKHllYXIsIG1vbnRoLCAzMikpLmdldERhdGUoKTtcbiAgICB9LFxuXG4gICAgZ2V0RGF5c0NvdW50SW5QcmV2TW9udGg6IGZ1bmN0aW9uKG1vbnRoLCB5ZWFyKSB7XG4gICAgICAgIHZhciBwcmV2ID0gdGhpcy5nZXRQcmV2aW91c01vbnRoQW5kWWVhcihtb250aCwgeWVhcik7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERheXNDb3VudEluTW9udGgocHJldi5tb250aCwgcHJldi55ZWFyKTtcbiAgICB9LFxuXG4gICAgZGF5bGlnaHRTYXZpbmdBZGp1c3Q6IGZ1bmN0aW9uKGRhdGUpIHtcbiAgICAgICAgaWYgKCFkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGUuc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpID4gMTIgPyBkYXRlLmdldEhvdXJzKCkgKyAyIDogMCk7XG5cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfSxcblxuICAgIGdldFByZXZpb3VzTW9udGhBbmRZZWFyOiBmdW5jdGlvbihtb250aCwgeWVhcikge1xuICAgICAgICB2YXIgbSwgeTtcblxuICAgICAgICBpZiAobW9udGggPT09IDApIHtcbiAgICAgICAgICAgIG0gPSAxMTtcbiAgICAgICAgICAgIHkgPSB5ZWFyIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG0gPSBtb250aCAtIDE7XG4gICAgICAgICAgICB5ID0geWVhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7ICdtb250aCc6IG0sICd5ZWFyJzogeSB9O1xuICAgIH0sXG5cbiAgICBnZXROZXh0TW9udGhBbmRZZWFyOiBmdW5jdGlvbihtb250aCwgeWVhcikge1xuICAgICAgICB2YXIgbSwgeTtcblxuICAgICAgICBpZiAobW9udGggPT09IDExKSB7XG4gICAgICAgICAgICBtID0gMDtcbiAgICAgICAgICAgIHkgPSB5ZWFyICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG0gPSBtb250aCArIDE7XG4gICAgICAgICAgICB5ID0geWVhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7ICdtb250aCc6IG0sICd5ZWFyJzogeSB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVXZWVrRGF5c0ludGVybmFsOiBmdW5jdGlvbihkYXlOYW1lcykge1xuICAgICAgICB2YXIgd2Vla0RheXMgPSBbXSxcbiAgICAgICAgICAgIGRheUluZGV4ID0gdGhpcy5nZXRGaXJzdERheU9mV2VlaygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgICAgd2Vla0RheXMucHVzaChkYXlOYW1lc1tkYXlJbmRleF0pO1xuICAgICAgICAgICAgZGF5SW5kZXggPSAoZGF5SW5kZXggPT09IDYpID8gMCA6ICsrZGF5SW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gd2Vla0RheXM7XG4gICAgfSxcblxuICAgIGNyZWF0ZVdlZWtEYXlzTWluOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlV2Vla0RheXNJbnRlcm5hbCh0aGlzLm9wdGlvbnMubG9jYWxlLmRheU5hbWVzTWluKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlV2Vla0RheXNTaG9ydDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVdlZWtEYXlzSW50ZXJuYWwodGhpcy5vcHRpb25zLmxvY2FsZS5kYXlOYW1lc1Nob3J0KTtcbiAgICB9LFxuXG4gICAgY3JlYXRlV2Vla0RheXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVXZWVrRGF5c0ludGVybmFsKHRoaXMub3B0aW9ucy5sb2NhbGUuZGF5TmFtZXMpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVNb250aHM6IGZ1bmN0aW9uKG1vbnRoLCB5ZWFyKSB7XG4gICAgICAgIHZhciBtb250aHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHM7IGkrKykge1xuICAgICAgICAgICAgdmFyIG0gPSBtb250aCArIGksXG4gICAgICAgICAgICAgICAgeSA9IHllYXI7XG4gICAgICAgICAgICBpZiAobSA+IDExKSB7XG4gICAgICAgICAgICAgICAgeSA9IHllYXIgKyBNYXRoLmZsb29yKG0gLyAxMik7XG4gICAgICAgICAgICAgICAgbSA9IG0gJSAxMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9udGhzLnB1c2godGhpcy5jcmVhdGVNb250aChtLCB5LCBpKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW9udGhzO1xuICAgIH0sXG5cbiAgICBjcmVhdGVNb250aDogZnVuY3Rpb24obW9udGgsIHllYXIsIGluZGV4KSB7XG4gICAgICAgIHZhciBkYXRlcyA9IFtdO1xuICAgICAgICBmaXJzdERheSA9IHRoaXMuZ2V0Rmlyc3REYXlPZk1vbnRoSW5kZXgobW9udGgsIHllYXIpO1xuICAgICAgICBkYXlzTGVuZ3RoID0gdGhpcy5nZXREYXlzQ291bnRJbk1vbnRoKG1vbnRoLCB5ZWFyKTtcbiAgICAgICAgcHJldk1vbnRoRGF5c0xlbmd0aCA9IHRoaXMuZ2V0RGF5c0NvdW50SW5QcmV2TW9udGgobW9udGgsIHllYXIpO1xuICAgICAgICBkYXlObyA9IDE7XG4gICAgICAgIHRvZGF5ID0gdGhpcy5nZXROb3coKTtcbiAgICAgICAgbW9udGhSb3dzID0gTWF0aC5jZWlsKChkYXlzTGVuZ3RoICsgZmlyc3REYXkpIC8gNyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb250aFJvd3M7IGkrKykge1xuICAgICAgICAgICAgdmFyIHdlZWsgPSBbXTtcblxuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gKHByZXZNb250aERheXNMZW5ndGggLSBmaXJzdERheSArIDEpOyBqIDw9IHByZXZNb250aERheXNMZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldiA9IHRoaXMuZ2V0UHJldmlvdXNNb250aEFuZFllYXIobW9udGgsIHllYXIpO1xuICAgICAgICAgICAgICAgICAgICB3ZWVrLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiBqLCBtb250aDogcHJldi5tb250aCwgeWVhcjogcHJldi55ZWFyLCBvdGhlck1vbnRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9kYXk6IHRoaXMuaXNUb2RheSh0b2RheSwgaiwgcHJldi5tb250aCwgcHJldi55ZWFyKSwgc2VsZWN0YWJsZTogdGhpcy5pc1NlbGVjdGFibGUoaiwgcHJldi5tb250aCwgcHJldi55ZWFyLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgcmVtYWluaW5nRGF5c0xlbmd0aCA9IDcgLSB3ZWVrLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlbWFpbmluZ0RheXNMZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB3ZWVrLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiBkYXlObywgbW9udGg6IG1vbnRoLCB5ZWFyOiB5ZWFyLCB0b2RheTogdGhpcy5pc1RvZGF5KHRvZGF5LCBkYXlObywgbW9udGgsIHllYXIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0YWJsZTogdGhpcy5pc1NlbGVjdGFibGUoZGF5Tm8sIG1vbnRoLCB5ZWFyLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGRheU5vKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRheU5vID4gZGF5c0xlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5leHQgPSB0aGlzLmdldE5leHRNb250aEFuZFllYXIobW9udGgsIHllYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2Vlay5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXk6IGRheU5vIC0gZGF5c0xlbmd0aCwgbW9udGg6IG5leHQubW9udGgsIHllYXI6IG5leHQueWVhciwgb3RoZXJNb250aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RheTogdGhpcy5pc1RvZGF5KHRvZGF5LCBkYXlObyAtIGRheXNMZW5ndGgsIG5leHQubW9udGgsIG5leHQueWVhciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0YWJsZTogdGhpcy5pc1NlbGVjdGFibGUoKGRheU5vIC0gZGF5c0xlbmd0aCksIG5leHQubW9udGgsIG5leHQueWVhciwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2Vlay5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXk6IGRheU5vLCBtb250aDogbW9udGgsIHllYXI6IHllYXIsIHRvZGF5OiB0aGlzLmlzVG9kYXkodG9kYXksIGRheU5vLCBtb250aCwgeWVhciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0YWJsZTogdGhpcy5pc1NlbGVjdGFibGUoZGF5Tm8sIG1vbnRoLCB5ZWFyLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZGF5Tm8rKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRhdGVzLnB1c2god2Vlayk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgICAgICAgeWVhcjogeWVhcixcbiAgICAgICAgICAgIGRhdGVzOiBkYXRlcyxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBpc1NlbGVjdGFibGU6IGZ1bmN0aW9uKGRheSwgbW9udGgsIHllYXIsIG90aGVyTW9udGgpIHtcbiAgICAgICAgdmFyIHZhbGlkTWluID0gdHJ1ZTtcbiAgICAgICAgdmFsaWRNYXggPSB0cnVlO1xuICAgICAgICB2YWxpZERhdGUgPSB0cnVlO1xuICAgICAgICB2YWxpZERheSA9IHRydWU7XG4gICAgICAgIHZhbGlkTW9udGggPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWluRGF0ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5taW5EYXRlLmdldEZ1bGxZZWFyKCkgPiB5ZWFyKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRNaW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMub3B0aW9ucy5taW5EYXRlLmdldEZ1bGxZZWFyKCkgPT09IHllYXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1pbkRhdGUuZ2V0TW9udGgoKSA+IG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkTWluID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMub3B0aW9ucy5taW5EYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWluRGF0ZS5nZXREYXRlKCkgPiBkYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkTWluID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1heERhdGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWF4RGF0ZS5nZXRGdWxsWWVhcigpIDwgeWVhcikge1xuICAgICAgICAgICAgICAgIHZhbGlkTWF4ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLm9wdGlvbnMubWF4RGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXhEYXRlLmdldE1vbnRoKCkgPCBtb250aCkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZE1heCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLm9wdGlvbnMubWF4RGF0ZS5nZXRNb250aCgpID09PSBtb250aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1heERhdGUuZ2V0RGF0ZSgpIDwgZGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZE1heCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZERhdGVzKSB7XG4gICAgICAgICAgICB2YWxpZERhdGUgPSAhdGhpcy5pc0RhdGVEaXNhYmxlZChkYXksIG1vbnRoLCB5ZWFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlZERhdGVzKSB7XG4gICAgICAgICAgICB2YWxpZERhdGUgPSB0aGlzLmlzRGF0ZUVuYWJsZWQoZGF5LCBtb250aCwgeWVhcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkRGF5cykge1xuICAgICAgICAgICAgdmFsaWREYXkgPSAhdGhpcy5pc0RheURpc2FibGVkKGRheSwgbW9udGgsIHllYXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RPdGhlck1vbnRocyA9PT0gZmFsc2UgJiYgb3RoZXJNb250aCkge1xuICAgICAgICAgICAgdmFsaWRNb250aCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkTWluICYmIHZhbGlkTWF4ICYmIHZhbGlkRGF0ZSAmJiB2YWxpZERheSAmJiB2YWxpZE1vbnRoO1xuICAgIH0sXG5cbiAgICBpc1NlbGVjdGVkOiBmdW5jdGlvbihkYXRlTWV0YSkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy52aWV3ID09PSAnd2VlaycpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudERhdGUgPSB0aGlzLnZhbHVlWzBdO1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50RGF0ZU1ldGEgPSB7IGRheTogY3VycmVudERhdGUuZ2V0RGF0ZSgpLCBtb250aDogY3VycmVudERhdGUuZ2V0TW9udGgoKSwgeWVhcjogY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSB9O1xuICAgICAgICAgICAgICAgIHZhciB3MSA9IHRoaXMub3B0aW9ucy53ZWVrQ2FsY3VsYXRvcihjdXJyZW50RGF0ZU1ldGEpO1xuICAgICAgICAgICAgICAgIHZhciB3MiA9IHRoaXMub3B0aW9ucy53ZWVrQ2FsY3VsYXRvcihkYXRlTWV0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHcxID09IHcyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZVNlbGVjdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNEYXRlRXF1YWxzKHRoaXMudmFsdWUsIGRhdGVNZXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNNdWx0aXBsZVNlbGVjdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRlID0gdGhpcy52YWx1ZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0aGlzLmlzRGF0ZUVxdWFscyhkYXRlLCBkYXRlTWV0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzUmFuZ2VTZWxlY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlWzFdKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc0RhdGVFcXVhbHModGhpcy52YWx1ZVswXSwgZGF0ZU1ldGEpIHx8IHRoaXMuaXNEYXRlRXF1YWxzKHRoaXMudmFsdWVbMV0sIGRhdGVNZXRhKSB8fCB0aGlzLmlzRGF0ZUJldHdlZW4odGhpcy52YWx1ZVswXSwgdGhpcy52YWx1ZVsxXSwgZGF0ZU1ldGEpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNEYXRlRXF1YWxzKHRoaXMudmFsdWVbMF0sIGRhdGVNZXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBpc01vbnRoU2VsZWN0ZWQ6IGZ1bmN0aW9uKG1vbnRoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1JhbmdlU2VsZWN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZU1ldGEgPSB7IHllYXI6IHRoaXMudmlld0RhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGg6IG1vbnRoLCBkYXk6IDEsIHNlbGVjdGFibGU6IHRydWUgfTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlWzFdKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc0RhdGVFcXVhbHModGhpcy52YWx1ZVswXSwgZGF0ZU1ldGEpIHx8IHRoaXMuaXNEYXRlRXF1YWxzKHRoaXMudmFsdWVbMV0sIGRhdGVNZXRhKSB8fCB0aGlzLmlzRGF0ZUJldHdlZW4odGhpcy52YWx1ZVswXSwgdGhpcy52YWx1ZVsxXSwgZGF0ZU1ldGEpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNEYXRlRXF1YWxzKHRoaXMudmFsdWVbMF0sIGRhdGVNZXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzRGF0ZSh0aGlzLnZhbHVlKSAmJiB0aGlzLnZhbHVlLmdldE1vbnRoKCkgPT09IG1vbnRoICYmIHRoaXMudmFsdWUuZ2V0RnVsbFllYXIoKSA9PT0gdGhpcy52aWV3RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICBpc0RhdGVFcXVhbHM6IGZ1bmN0aW9uKHZhbHVlLCBkYXRlTWV0YSkge1xuICAgICAgICBpZiAodGhpcy5pc0RhdGUodmFsdWUpKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmdldERhdGUoKSA9PT0gZGF0ZU1ldGEuZGF5ICYmIHZhbHVlLmdldE1vbnRoKCkgPT09IGRhdGVNZXRhLm1vbnRoICYmIHZhbHVlLmdldEZ1bGxZZWFyKCkgPT09IGRhdGVNZXRhLnllYXI7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgaXNEYXRlQmV0d2VlbjogZnVuY3Rpb24oc3RhcnQsIGVuZCwgZGF0ZU1ldGEpIHtcbiAgICAgICAgdmFyIGJldHdlZW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuaXNEYXRlKHN0YXJ0KSAmJiB0aGlzLmlzRGF0ZShlbmQpKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKGRhdGVNZXRhLnllYXIsIGRhdGVNZXRhLm1vbnRoLCBkYXRlTWV0YS5kYXkpO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXJ0LmdldFRpbWUoKSA8PSBkYXRlLmdldFRpbWUoKSAmJiBlbmQuZ2V0VGltZSgpID49IGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJldHdlZW47XG4gICAgfSxcblxuICAgIGlzU2luZ2xlU2VsZWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zZWxlY3Rpb25Nb2RlID09PSAnc2luZ2xlJztcbiAgICB9LFxuXG4gICAgaXNSYW5nZVNlbGVjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VsZWN0aW9uTW9kZSA9PT0gJ3JhbmdlJztcbiAgICB9LFxuXG4gICAgaXNNdWx0aXBsZVNlbGVjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VsZWN0aW9uTW9kZSA9PT0gJ211bHRpcGxlJztcbiAgICB9LFxuXG4gICAgaXNUb2RheTogZnVuY3Rpb24odG9kYXksIGRheSwgbW9udGgsIHllYXIpIHtcbiAgICAgICAgcmV0dXJuIHRvZGF5LmdldERhdGUoKSA9PT0gZGF5ICYmIHRvZGF5LmdldE1vbnRoKCkgPT09IG1vbnRoICYmIHRvZGF5LmdldEZ1bGxZZWFyKCkgPT09IHllYXI7XG4gICAgfSxcblxuICAgIGlzRGF0ZURpc2FibGVkOiBmdW5jdGlvbihkYXksIG1vbnRoLCB5ZWFyKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWREYXRlcykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMuZGlzYWJsZWREYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkaXNhYmxlZERhdGUgPSB0aGlzLm9wdGlvbnMuZGlzYWJsZWREYXRlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoZGlzYWJsZWREYXRlLmdldEZ1bGxZZWFyKCkgPT09IHllYXIgJiYgZGlzYWJsZWREYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoICYmIGRpc2FibGVkRGF0ZS5nZXREYXRlKCkgPT09IGRheSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIGlzRGF0ZUVuYWJsZWQ6IGZ1bmN0aW9uKGRheSwgbW9udGgsIHllYXIpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVkRGF0ZXMgJiYgdGhpcy5vcHRpb25zLmVuYWJsZWREYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3B0aW9ucy5lbmFibGVkRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZW5hYmxlZERhdGUgPSB0aGlzLm9wdGlvbnMuZW5hYmxlZERhdGVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChlbmFibGVkRGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyICYmIGVuYWJsZWREYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoICYmIGVuYWJsZWREYXRlLmdldERhdGUoKSA9PT0gZGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICBpc0RheURpc2FibGVkOiBmdW5jdGlvbihkYXksIG1vbnRoLCB5ZWFyKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWREYXlzKSB7XG4gICAgICAgICAgICB2YXIgd2Vla2RheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpLFxuICAgICAgICAgICAgICAgIHdlZWtkYXlOdW1iZXIgPSB3ZWVrZGF5LmdldERheSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kaXNhYmxlZERheXMuaW5kZXhPZih3ZWVrZGF5TnVtYmVyKSAhPT0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICBnZXRWYWx1ZVRvUmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gJyc7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSYW5nZVNlbGVjdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnREYXRlID0gdGhpcy52YWx1ZVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmREYXRlID0gdGhpcy52YWx1ZVsxXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSB0aGlzLmZvcm1hdERhdGVUaW1lKHN0YXJ0RGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW5kRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlICs9ICcgJyArIHRoaXMub3B0aW9ucy5yYW5nZVNlcGFyYXRvciArICcgJyArIHRoaXMuZm9ybWF0RGF0ZVRpbWUoZW5kRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudmlldyA9PT0gJ3dlZWsnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0RGF0ZU1ldGEgPSB7IGRheTogc3RhcnREYXRlLmdldERhdGUoKSwgbW9udGg6IHN0YXJ0RGF0ZS5nZXRNb250aCgpLCB5ZWFyOiBzdGFydERhdGUuZ2V0RnVsbFllYXIoKSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ZWVrID0gdGhpcy5vcHRpb25zLndlZWtDYWxjdWxhdG9yKHN0YXJ0RGF0ZU1ldGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlICs9ICcgKCcgKyB0aGlzLm9wdGlvbnMubG9jYWxlLndlZWtIZWFkZXIgKyAnICcgKyB3ZWVrICsgJyknO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTaW5nbGVTZWxlY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0RGF0ZVRpbWUodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNNdWx0aXBsZVNlbGVjdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGVBc1N0cmluZyA9IHRoaXMuZm9ybWF0RGF0ZVRpbWUodGhpcy52YWx1ZVtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSArPSBkYXRlQXNTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gKHRoaXMudmFsdWUubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSArPSAnLCAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRWYWx1ZTtcbiAgICB9LFxuXG4gICAgZm9ybWF0RGF0ZVRpbWU6IGZ1bmN0aW9uKGRhdGUpIHtcbiAgICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gbnVsbDtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudGltZU9ubHkpIHtcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0VGltZShkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXREYXRlKGRhdGUsIHRoaXMub3B0aW9ucy5kYXRlRm9ybWF0KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlICs9ICcgJyArIHRoaXMuZm9ybWF0VGltZShkYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkVmFsdWU7XG4gICAgfSxcblxuICAgIC8vIFBvcnRlZCBmcm9tIGpxdWVyeS11aSBkYXRlcGlja2VyIGZvcm1hdERhdGVcbiAgICBmb3JtYXREYXRlOiBmdW5jdGlvbihkYXRlLCBmb3JtYXQpIHtcbiAgICAgICAgaWYgKCFkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaUZvcm1hdCxcbiAgICAgICAgICAgIGxvb2tBaGVhZCA9IGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSAoaUZvcm1hdCArIDEgPCBmb3JtYXQubGVuZ3RoICYmIGZvcm1hdC5jaGFyQXQoaUZvcm1hdCArIDEpID09PSBtYXRjaCk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaUZvcm1hdCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtYXROdW1iZXIgPSBmdW5jdGlvbihtYXRjaCwgdmFsdWUsIGxlbikge1xuICAgICAgICAgICAgICAgIHZhciBudW0gPSAnJyArIHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChsb29rQWhlYWQobWF0Y2gpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChudW0ubGVuZ3RoIDwgbGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW0gPSAnMCcgKyBudW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtYXROYW1lID0gZnVuY3Rpb24obWF0Y2gsIHZhbHVlLCBzaG9ydE5hbWVzLCBsb25nTmFtZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGxvb2tBaGVhZChtYXRjaCkgPyBsb25nTmFtZXNbdmFsdWVdIDogc2hvcnROYW1lc1t2YWx1ZV0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgdmFyIG91dHB1dCA9ICcnLFxuICAgICAgICAgICAgbGl0ZXJhbCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBmb3IgKGlGb3JtYXQgPSAwOyBpRm9ybWF0IDwgZm9ybWF0Lmxlbmd0aDsgaUZvcm1hdCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpdGVyYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1hdC5jaGFyQXQoaUZvcm1hdCkgPT09ICdcXCcnICYmICFsb29rQWhlYWQoJ1xcJycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXRlcmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gZm9ybWF0LmNoYXJBdChpRm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZm9ybWF0LmNoYXJBdChpRm9ybWF0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRheSA9IGRhdGUuaGFzT3duUHJvcGVydHkoJ2RheScpID8gZGF0ZS5kYXkgOiBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gZm9ybWF0TnVtYmVyKCdkJywgZGF5LCAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBmb3JtYXROYW1lKCdEJywgZGF0ZS5nZXREYXkoKSwgdGhpcy5vcHRpb25zLmxvY2FsZS5kYXlOYW1lc1Nob3J0LCB0aGlzLm9wdGlvbnMubG9jYWxlLmRheU5hbWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ28nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBmb3JtYXROdW1iZXIoJ28nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSkuZ2V0VGltZSgpIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMCkuZ2V0VGltZSgpKSAvIDg2NDAwMDAwKSwgMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9udGggPSBkYXRlLmhhc093blByb3BlcnR5KCdtb250aCcpID8gZGF0ZS5tb250aCA6IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gZm9ybWF0TnVtYmVyKCdtJywgbW9udGggKyAxLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb250aCA9IGRhdGUuaGFzT3duUHJvcGVydHkoJ21vbnRoJykgPyBkYXRlLm1vbnRoIDogZGF0ZS5nZXRNb250aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBmb3JtYXROYW1lKCdNJywgbW9udGgsIHRoaXMub3B0aW9ucy5sb2NhbGUubW9udGhOYW1lc1Nob3J0LCB0aGlzLm9wdGlvbnMubG9jYWxlLm1vbnRoTmFtZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAneSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHllYXIgPSBkYXRlLmhhc093blByb3BlcnR5KCd5ZWFyJykgPyBkYXRlLnllYXIgOiBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ICs9IGxvb2tBaGVhZCgneScpID8geWVhciA6ICh5ZWFyICUgMTAwIDwgMTAgPyAnMCcgOiAnJykgKyAoeWVhciAlIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdAJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICchJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gZGF0ZS5nZXRUaW1lKCkgKiAxMDAwMCArIHRoaXMudGlja3NUbzE5NzA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdcXCcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb29rQWhlYWQoJ1xcJycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSAnXFwnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXRlcmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBmb3JtYXQuY2hhckF0KGlGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSxcblxuICAgIGZvcm1hdFRpbWU6IGZ1bmN0aW9uKGRhdGUpIHtcbiAgICAgICAgaWYgKCFkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3V0cHV0ID0gJycsXG4gICAgICAgICAgICBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSxcbiAgICAgICAgICAgIG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgICAgIHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKSxcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ob3VyRm9ybWF0ID09PSAnMTInICYmIGhvdXJzID4gMTEgJiYgaG91cnMgIT09IDEyKSB7XG4gICAgICAgICAgICBob3VycyAtPSAxMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaG91ckZvcm1hdCA9PT0gJzEyJykge1xuICAgICAgICAgICAgb3V0cHV0ICs9IGhvdXJzID09PSAwID8gMTIgOiAoaG91cnMgPCAxMCkgPyAnMCcgKyBob3VycyA6IGhvdXJzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0cHV0ICs9IChob3VycyA8IDEwKSA/ICcwJyArIGhvdXJzIDogaG91cnM7XG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0ICs9IHRoaXMub3B0aW9ucy50aW1lU2VwYXJhdG9yO1xuICAgICAgICBvdXRwdXQgKz0gKG1pbnV0ZXMgPCAxMCkgPyAnMCcgKyBtaW51dGVzIDogbWludXRlcztcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICBvdXRwdXQgKz0gdGhpcy5vcHRpb25zLnRpbWVTZXBhcmF0b3I7XG4gICAgICAgICAgICBvdXRwdXQgKz0gKHNlY29uZHMgPCAxMCkgPyAnMCcgKyBzZWNvbmRzIDogc2Vjb25kcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd01pbGxpc2Vjb25kcykge1xuICAgICAgICAgICAgb3V0cHV0ICs9IHRoaXMub3B0aW9ucy5mcmFjdGlvblNlcGFyYXRvcjtcbiAgICAgICAgICAgIG91dHB1dCArPSAobWlsbGlzZWNvbmRzIDwgMTApID8gJzAwJyArIG1pbGxpc2Vjb25kcyA6IChtaWxsaXNlY29uZHMgPCAxMDApID8gJzAnICsgbWlsbGlzZWNvbmRzIDogbWlsbGlzZWNvbmRzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ob3VyRm9ybWF0ID09PSAnMTInKSB7XG4gICAgICAgICAgICBvdXRwdXQgKz0gZGF0ZS5nZXRIb3VycygpID4gMTEgPyAnICcgKyB0aGlzLm9wdGlvbnMubG9jYWxlLnBtIDogJyAnICsgdGhpcy5vcHRpb25zLmxvY2FsZS5hbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSxcblxuICAgIHBhcnNlVGltZTogZnVuY3Rpb24odmFsdWUsIGFtcG0pIHtcbiAgICAgICAgdmFyIHZhbCA9IHZhbHVlLnJlcGxhY2UodGhpcy5vcHRpb25zLmZyYWN0aW9uU2VwYXJhdG9yLCB0aGlzLm9wdGlvbnMudGltZVNlcGFyYXRvciksXG4gICAgICAgICAgICB0b2tlbnMgPSB2YWwuc3BsaXQodGhpcy5vcHRpb25zLnRpbWVTZXBhcmF0b3IpLFxuICAgICAgICAgICAgc2hvd1NlY29uZHMgPSB0aGlzLm9wdGlvbnMuc2hvd1NlY29uZHMgfHwgdGhpcy5vcHRpb25zLnNob3dNaWxsaXNlY29uZHMsXG4gICAgICAgICAgICB2YWxpZFRva2VuTGVuZ3RoID0gMiArIChzaG93U2Vjb25kcyA/IDEgOiAwKSArICh0aGlzLm9wdGlvbnMuc2hvd01pbGxpc2Vjb25kcyA/IDEgOiAwKTtcblxuICAgICAgICBpZiAodG9rZW5zLmxlbmd0aCAhPT0gdmFsaWRUb2tlbkxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgXCJJbnZhbGlkIHRpbWVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoID0gcGFyc2VJbnQodG9rZW5zWzBdKSxcbiAgICAgICAgICAgIG0gPSBwYXJzZUludCh0b2tlbnNbMV0pLFxuICAgICAgICAgICAgcyA9IHNob3dTZWNvbmRzID8gcGFyc2VJbnQodG9rZW5zWzJdKSA6IG51bGwsXG4gICAgICAgICAgICBtcyA9IHRoaXMub3B0aW9ucy5zaG93TWlsbGlzZWNvbmRzID8gcGFyc2VJbnQodG9rZW5zWzNdKSA6IG51bGw7XG5cbiAgICAgICAgaWYgKGlzTmFOKGgpIHx8IGlzTmFOKG0pIHx8IGggPiAyMyB8fCBtID4gNTkgfHwgKHRoaXMub3B0aW9ucy5ob3VyRm9ybWF0ID09PSAnMTInICYmIGggPiAxMikgfHwgKHRoaXMub3B0aW9ucy5zaG93U2Vjb25kcyAmJiAoaXNOYU4ocykgfHwgcyA+IDU5KSkgfHwgKHRoaXMub3B0aW9ucy5zaG93TWlsbGlzZWNvbmRzICYmIChpc05hTihtcykgfHwgbXMgPiA5OTkpKSkge1xuICAgICAgICAgICAgdGhyb3cgXCJJbnZhbGlkIHRpbWVcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaG91ckZvcm1hdCA9PT0gJzEyJyAmJiBoICE9PSAxMiAmJiBhbXBtID09PSB0aGlzLm9wdGlvbnMubG9jYWxlLnBtKSB7XG4gICAgICAgICAgICAgICAgaCArPSAxMjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmhvdXJGb3JtYXQgPT09ICcxMicgJiYgaCA9PT0gMTIgJiYgYW1wbSA9PT0gdGhpcy5vcHRpb25zLmxvY2FsZS5hbSkge1xuICAgICAgICAgICAgICAgIGggLT0gMTI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7IGhvdXI6IGgsIG1pbnV0ZTogbSwgc2Vjb25kOiBzLCBtaWxsaXNlY29uZDogbXMgfTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBQb3J0ZWQgZnJvbSBqcXVlcnktdWkgZGF0ZXBpY2tlciBwYXJzZURhdGVcbiAgICBwYXJzZURhdGU6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQpIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PSBudWxsIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IFwiSW52YWxpZCBhcmd1bWVudHNcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiA/IHZhbHVlLnRvU3RyaW5nKCkgOiB2YWx1ZSArIFwiXCIpO1xuICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGlGb3JtYXQsIGRpbSwgZXh0cmEsXG4gICAgICAgICAgICBpVmFsdWUgPSAwLFxuICAgICAgICAgICAgc2hvcnRZZWFyQ3V0b2ZmID0gKHR5cGVvZiB0aGlzLm9wdGlvbnMuc2hvcnRZZWFyQ3V0b2ZmICE9PSBcInN0cmluZ1wiID8gdGhpcy5vcHRpb25zLnNob3J0WWVhckN1dG9mZiA6IHRoaXMuZ2V0Tm93KCkuZ2V0RnVsbFllYXIoKSAlIDEwMCArIHBhcnNlSW50KHRoaXMub3B0aW9ucy5zaG9ydFllYXJDdXRvZmYsIDEwKSksXG4gICAgICAgICAgICB5ZWFyID0gLTEsXG4gICAgICAgICAgICBtb250aCA9IC0xLFxuICAgICAgICAgICAgZGF5ID0gLTEsXG4gICAgICAgICAgICBkb3kgPSAtMSxcbiAgICAgICAgICAgIGxpdGVyYWwgPSBmYWxzZSxcbiAgICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgICBsb29rQWhlYWQgPSBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzID0gKGlGb3JtYXQgKyAxIDwgZm9ybWF0Lmxlbmd0aCAmJiBmb3JtYXQuY2hhckF0KGlGb3JtYXQgKyAxKSA9PT0gbWF0Y2gpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlGb3JtYXQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0TnVtYmVyID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNEb3VibGVkID0gbG9va0FoZWFkKG1hdGNoKSxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IChtYXRjaCA9PT0gXCJAXCIgPyAxNCA6IChtYXRjaCA9PT0gXCIhXCIgPyAyMCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAobWF0Y2ggPT09IFwieVwiICYmIGlzRG91YmxlZCA/IDQgOiAobWF0Y2ggPT09IFwib1wiID8gMyA6IDIpKSkpLFxuICAgICAgICAgICAgICAgICAgICBtaW5TaXplID0gKG1hdGNoID09PSBcInlcIiA/IHNpemUgOiAxKSxcbiAgICAgICAgICAgICAgICAgICAgZGlnaXRzID0gbmV3IFJlZ0V4cChcIl5cXFxcZHtcIiArIG1pblNpemUgKyBcIixcIiArIHNpemUgKyBcIn1cIiksXG4gICAgICAgICAgICAgICAgICAgIG51bSA9IHZhbHVlLnN1YnN0cmluZyhpVmFsdWUpLm1hdGNoKGRpZ2l0cyk7XG4gICAgICAgICAgICAgICAgaWYgKCFudW0gJiYgbWF0Y2ggPT09IFwieVwiICYmIGlzRG91YmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAvL2FsbG93IDIgZGlnaXQtaW5wdXRzIGZvciA0LWRpZ2l0LXllYXItcGF0dGVybiAoZ2V0cyByZWZvcm1hdGVkIHRvIDQgZGlnaXRzIG9uQmx1cilcbiAgICAgICAgICAgICAgICAgICAgZGlnaXRzID0gbmV3IFJlZ0V4cChcIl5cXFxcZHtcIiArIDIgKyBcIixcIiArIHNpemUgKyBcIn1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBudW0gPSB2YWx1ZS5zdWJzdHJpbmcoaVZhbHVlKS5tYXRjaChkaWdpdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIW51bSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIk1pc3NpbmcgbnVtYmVyIGF0IHBvc2l0aW9uIFwiICsgaVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpVmFsdWUgKz0gbnVtWzBdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQobnVtWzBdLCAxMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0TmFtZSA9IGZ1bmN0aW9uKG1hdGNoLCBzaG9ydE5hbWVzLCBsb25nTmFtZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgICAgICAgICAgICAgYXJyID0gbG9va0FoZWFkKG1hdGNoKSA/IGxvbmdOYW1lcyA6IHNob3J0TmFtZXMsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzID0gW107XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBuYW1lcy5wdXNoKFtpLCBhcnJbaV1dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmFtZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtKGFbMV0ubGVuZ3RoIC0gYlsxXS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IG5hbWVzW2ldWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuc3Vic3RyKGlWYWx1ZSwgbmFtZS5sZW5ndGgpLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBuYW1lc1tpXVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlWYWx1ZSArPSBuYW1lLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IFwiVW5rbm93biBuYW1lIGF0IHBvc2l0aW9uIFwiICsgaVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja0xpdGVyYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuY2hhckF0KGlWYWx1ZSkgIT09IGZvcm1hdC5jaGFyQXQoaUZvcm1hdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJVbmV4cGVjdGVkIGxpdGVyYWwgYXQgcG9zaXRpb24gXCIgKyBpVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlWYWx1ZSsrO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnZpZXcgPT09ICdtb250aCcpIHtcbiAgICAgICAgICAgIGRheSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGlGb3JtYXQgPSAwOyBpRm9ybWF0IDwgZm9ybWF0Lmxlbmd0aDsgaUZvcm1hdCsrKSB7XG4gICAgICAgICAgICBpZiAobGl0ZXJhbCkge1xuICAgICAgICAgICAgICAgIGlmIChmb3JtYXQuY2hhckF0KGlGb3JtYXQpID09PSBcIidcIiAmJiAhbG9va0FoZWFkKFwiJ1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBsaXRlcmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tMaXRlcmFsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGZvcm1hdC5jaGFyQXQoaUZvcm1hdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheSA9IGdldE51bWJlcihcImRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldE5hbWUoXCJEXCIsIHRoaXMub3B0aW9ucy5sb2NhbGUuZGF5TmFtZXNTaG9ydCwgdGhpcy5vcHRpb25zLmxvY2FsZS5kYXlOYW1lcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRveSA9IGdldE51bWJlcihcIm9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoID0gZ2V0TnVtYmVyKFwibVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGggPSBnZXROYW1lKFwiTVwiLCB0aGlzLm9wdGlvbnMubG9jYWxlLm1vbnRoTmFtZXNTaG9ydCwgdGhpcy5vcHRpb25zLmxvY2FsZS5tb250aE5hbWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgeWVhciA9IGdldE51bWJlcihcInlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkBcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShnZXROdW1iZXIoXCJAXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiIVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKChnZXROdW1iZXIoXCIhXCIpIC0gdGhpcy50aWNrc1RvMTk3MCkgLyAxMDAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIidcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb29rQWhlYWQoXCInXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tMaXRlcmFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpdGVyYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0xpdGVyYWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaVZhbHVlIDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICBleHRyYSA9IHZhbHVlLnN1YnN0cihpVmFsdWUpO1xuICAgICAgICAgICAgaWYgKCEvXlxccysvLnRlc3QoZXh0cmEpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJFeHRyYS91bnBhcnNlZCBjaGFyYWN0ZXJzIGZvdW5kIGluIGRhdGU6IFwiICsgZXh0cmE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeWVhciA9PT0gLTEpIHtcbiAgICAgICAgICAgIHllYXIgPSB0aGlzLmdldE5vdygpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoeWVhciA8IDEwMCkge1xuICAgICAgICAgICAgeWVhciArPSB0aGlzLmdldE5vdygpLmdldEZ1bGxZZWFyKCkgLSB0aGlzLmdldE5vdygpLmdldEZ1bGxZZWFyKCkgJSAxMDAgK1xuICAgICAgICAgICAgICAgICh5ZWFyIDw9IHNob3J0WWVhckN1dG9mZiA/IDAgOiAtMTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb3kgPiAtMSkge1xuICAgICAgICAgICAgbW9udGggPSAxO1xuICAgICAgICAgICAgZGF5ID0gZG95O1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGRpbSA9IHRoaXMuZ2V0RGF5c0NvdW50SW5Nb250aCh5ZWFyLCBtb250aCAtIDEpO1xuICAgICAgICAgICAgICAgIGlmIChkYXkgPD0gZGltKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtb250aCsrO1xuICAgICAgICAgICAgICAgIGRheSAtPSBkaW07XG4gICAgICAgICAgICB9IHdoaWxlICh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGUgPSB0aGlzLmRheWxpZ2h0U2F2aW5nQWRqdXN0KG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KSk7XG4gICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgIT09IHllYXIgfHwgZGF0ZS5nZXRNb250aCgpICsgMSAhPT0gbW9udGggfHwgZGF0ZS5nZXREYXRlKCkgIT09IGRheSkge1xuICAgICAgICAgICAgdGhyb3cgXCJJbnZhbGlkIGRhdGVcIjsgLy8gRS5nLiAzMS8wMi8wMFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfSxcblxuICAgIHBhcnNlVmFsdWVGcm9tU3RyaW5nOiBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgIGlmICghdGV4dCB8fCB0ZXh0LnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVTZWxlY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5wYXJzZURhdGVUaW1lKHRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc011bHRpcGxlU2VsZWN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gdGV4dC5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUucHVzaCh0aGlzLnBhcnNlRGF0ZVRpbWUodG9rZW5zW2ldLnRyaW0oKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNSYW5nZVNlbGVjdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IHRleHQuc3BsaXQobmV3IFJlZ0V4cCh0aGlzLm9wdGlvbnMucmFuZ2VTZXBhcmF0b3IgKyAnfCAnICsgdGhpcy5vcHRpb25zLnJhbmdlU2VwYXJhdG9yICsgJyAnLCAnZycpKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlW2ldID0gdGhpcy5wYXJzZURhdGVUaW1lKHRva2Vuc1tpXS50cmltKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIFByaW1lRmFjZXMuZXJyb3IoXCJEYXRlUGlja2VyIEVycm9yOiBcIiArIGVycm9yKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG5cbiAgICBwYXJzZURhdGVUaW1lOiBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgIHZhciBkYXRlLFxuICAgICAgICAgICAgcGFydHMgPSB0ZXh0LnNwbGl0KCcgJyk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50aW1lT25seSkge1xuICAgICAgICAgICAgZGF0ZSA9IHRoaXMuZ2V0Tm93KCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlVGltZShkYXRlLCBwYXJ0c1swXSwgcGFydHNbMV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93VGltZSkge1xuICAgICAgICAgICAgICAgIHZhciBhbXBtID0gdGhpcy5vcHRpb25zLmhvdXJGb3JtYXQgPT09ICcxMicgPyBwYXJ0cy5wb3AoKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIHRpbWVTdHJpbmcgPSBwYXJ0cy5wb3AoKTtcblxuICAgICAgICAgICAgICAgIC8vICM5NTU5IHNvbWUgbG9jYWxlcyBhcmUgXCJhLiBtLlwiIHdpdGggYSBzcGFjZSBcbiAgICAgICAgICAgICAgICBpZiAoL1xcZC8udGVzdCh0aW1lU3RyaW5nKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYW1wbSA9IHRpbWVTdHJpbmcgKyAnICcgKyBhbXBtO1xuICAgICAgICAgICAgICAgICAgICB0aW1lU3RyaW5nID0gcGFydHMucG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGF0ZSA9IHRoaXMucGFyc2VEYXRlKHBhcnRzLmpvaW4oJyAnKSwgdGhpcy5vcHRpb25zLmRhdGVGb3JtYXQpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdWxhdGVUaW1lKGRhdGUsIHRpbWVTdHJpbmcsIGFtcG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IHRoaXMucGFyc2VEYXRlKHRleHQsIHRoaXMub3B0aW9ucy5kYXRlRm9ybWF0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH0sXG5cbiAgICBwb3B1bGF0ZVRpbWU6IGZ1bmN0aW9uKHZhbHVlLCB0aW1lU3RyaW5nLCBhbXBtKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaG91ckZvcm1hdCA9PT0gJzEyJyAmJiAoYW1wbSAhPT0gdGhpcy5vcHRpb25zLmxvY2FsZS5wbSAmJiBhbXBtICE9PSB0aGlzLm9wdGlvbnMubG9jYWxlLmFtKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFRpbWUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0aW1lID0gdGhpcy5wYXJzZVRpbWUodGltZVN0cmluZywgYW1wbSk7XG4gICAgICAgIHZhbHVlLnNldEhvdXJzKHRpbWUuaG91cik7XG4gICAgICAgIHZhbHVlLnNldE1pbnV0ZXModGhpcy5zdGVwTWludXRlKHRpbWUubWludXRlKSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1NlY29uZHMgfHwgdGhpcy5vcHRpb25zLnNob3dNaWxsaXNlY29uZHMpIHtcbiAgICAgICAgICAgIHZhbHVlLnNldFNlY29uZHModGltZS5zZWNvbmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUuc2V0U2Vjb25kcygwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dNaWxsaXNlY29uZHMpIHtcbiAgICAgICAgICAgIHZhbHVlLnNldE1pbGxpc2Vjb25kcyh0aW1lLm1pbGxpc2Vjb25kKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlLnNldE1pbGxpc2Vjb25kcygwKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBpc0luTWluWWVhcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubWluRGF0ZSAmJiB0aGlzLm9wdGlvbnMubWluRGF0ZS5nZXRGdWxsWWVhcigpID09PSB0aGlzLnZpZXdEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgfSxcblxuICAgIGlzSW5NYXhZZWFyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5tYXhEYXRlICYmIHRoaXMub3B0aW9ucy5tYXhEYXRlLmdldEZ1bGxZZWFyKCkgPT09IHRoaXMudmlld0RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICB9LFxuXG4gICAgX2Rlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgIHRoaXMudW5iaW5kUmVzcG9uc2l2ZVJlc2l6ZUxpc3RlbmVyKCk7XG4gICAgICAgIFByaW1lRmFjZXMudXRpbHMuY2xlYW5zZURvbUVsZW1lbnQodGhpcy5wYW5lbCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdHlsZUNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuc3R5bGVDbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN0eWxlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hdHRyKCdzdHlsZScsIHRoaXMub3B0aW9ucy5zdHlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5pbmxpbmUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5wdXRTdHlsZUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dGZpZWxkLmFkZENsYXNzKHRoaXMub3B0aW9ucy5pbnB1dFN0eWxlQ2xhc3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlucHV0U3R5bGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0ZmllbGQuYXR0cignc3R5bGUnLCB0aGlzLm9wdGlvbnMuaW5wdXRTdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dJY29uICYmICF0aGlzLm9wdGlvbnMuaW5saW5lKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50cmlnZ2VyQnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyQnV0dG9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZW5kZXJUcmlnZ2VyQnV0dG9uKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQodGhpcy50cmlnZ2VyQnV0dG9uKTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENsYXNzKCd1aS10cmlnZ2VyLWNhbGVuZGFyJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wYW5lbCkge1xuICAgICAgICAgICAgdGhpcy5wYW5lbC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlckRhdGVQaWNrZXJQYW5lbCgpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFuZWxTdHlsZUNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLnBhbmVsLmFkZENsYXNzKHRoaXMub3B0aW9ucy5wYW5lbFN0eWxlQ2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wYW5lbFN0eWxlKSB7XG4gICAgICAgICAgICB0aGlzLnBhbmVsLmF0dHIoJ3N0eWxlJywgdGhpcy5vcHRpb25zLnBhbmVsU3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuaW5saW5lICYmIHRoaXMub3B0aW9ucy5hcHBlbmRUbykge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBvdmVybGF5IGZpcnN0XG4gICAgICAgICAgICAvLyBTZWUgUHJpbWVGYWNlcy51dGlscy5hcHBlbmREeW5hbWljT3ZlcmxheVxuICAgICAgICAgICAgJCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKFwiW2lkPSdcIiArICQodGhpcy5jb250YWluZXIpLmF0dHIoJ2lkJykgKyBcIl9wYW5lbCddXCIpXG4gICAgICAgICAgICAgICAgLm5vdCh0aGlzLnBhbmVsKVxuICAgICAgICAgICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgICAgICAgdGhpcy5wYW5lbC5hcHBlbmRUbyh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYW5lbC5hcHBlbmRUbyh0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZXRJbml0T3B0aW9uVmFsdWVzKCk7XG5cbiAgICAgICAgdGhpcy5fYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLl9iaW5kUGFuZWxFdmVudHMoKTtcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBQcmltZUZhY2VzLnV0aWxzLnJlZ2lzdGVyQ1NTVHJhbnNpdGlvbih0aGlzLnBhbmVsLCAndWktY29ubmVjdGVkLW92ZXJsYXknKTtcbiAgICB9LFxuXG4gICAgX3NldEluaXRPcHRpb25WYWx1ZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnllYXJOYXZpZ2F0b3IpIHtcbiAgICAgICAgICAgIHZhciB5ZWFyID0gdGhpcy52aWV3RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgdmFyIG1vbnRoID0gdGhpcy52aWV3RGF0ZS5nZXRNb250aCgpO1xuICAgICAgICAgICAgdmFyIHllYXJFbHRzID0gdGhpcy5wYW5lbC5maW5kKCcudWktZGF0ZXBpY2tlci1oZWFkZXIgPiAudWktZGF0ZXBpY2tlci10aXRsZSA+IC51aS1kYXRlcGlja2VyLXllYXInKTtcblxuICAgICAgICAgICAgeWVhckVsdHMuZWFjaChmdW5jdGlvbihpbmRleCwgeWVhckVsdCkge1xuICAgICAgICAgICAgICAgICQoeWVhckVsdCkudmFsKHllYXIpO1xuICAgICAgICAgICAgICAgIG1vbnRoID0gbW9udGggKyAxO1xuICAgICAgICAgICAgICAgIGlmIChtb250aCA9PT0gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9udGggPSAwO1xuICAgICAgICAgICAgICAgICAgICB5ZWFyID0geWVhciArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vbnRoTmF2aWdhdG9yICYmIHRoaXMub3B0aW9ucy52aWV3ICE9PSAnbW9udGgnKSB7XG4gICAgICAgICAgICB2YXIgbW9udGggPSB0aGlzLnZpZXdEYXRlLmdldE1vbnRoKCk7XG4gICAgICAgICAgICB2YXIgbW9udGhFbHRzID0gdGhpcy5wYW5lbC5maW5kKCcudWktZGF0ZXBpY2tlci1oZWFkZXIgPiAudWktZGF0ZXBpY2tlci10aXRsZSA+IC51aS1kYXRlcGlja2VyLW1vbnRoJyk7XG5cbiAgICAgICAgICAgIG1vbnRoRWx0cy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBtb250aEVsdCkge1xuICAgICAgICAgICAgICAgICQobW9udGhFbHQpLnZhbChtb250aCk7XG4gICAgICAgICAgICAgICAgbW9udGggPSBtb250aCArIDE7XG4gICAgICAgICAgICAgICAgaWYgKG1vbnRoID09PSAxMikge1xuICAgICAgICAgICAgICAgICAgICBtb250aCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAjNjM3OSBzZXQgc3RhdGUgb2YgbmF2aWdhdG9yIGJ1dHRvbnNcbiAgICAgICAgdGhpcy5zZXROYXZpZ2F0aW9uU3RhdGUodGhpcy52aWV3RGF0ZSk7XG4gICAgfSxcblxuICAgIHJlbmRlclRyaWdnZXJCdXR0b246IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGFuZWxJZCA9IHRoaXMuY29udGFpbmVyLmF0dHIoJ2lkJykgKyAnX3BhbmVsJztcbiAgICAgICAgdmFyIGFyaWEgPSAnIGFyaWEtaGFzcG9wdXA9XCJkaWFsb2dcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwiJyArIHBhbmVsSWQgKyAnXCIgJztcbiAgICAgICAgdGhpcy50cmlnZ2VyQnV0dG9uID0gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgJyArIGFyaWEgKyAnIGNsYXNzPVwidWktZGF0ZXBpY2tlci10cmlnZ2VyIHVpLWJ1dHRvbiB1aS13aWRnZXQgdWktc3RhdGUtZGVmYXVsdCB1aS1jb3JuZXItYWxsIHVpLWJ1dHRvbi1pY29uLW9ubHknICsgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCA/ICcgdWktc3RhdGUtZGlzYWJsZWQnIDogJycpICsgJ1wiIHRhYmluZGV4PVwiMFwiPicgK1xuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidWktYnV0dG9uLWljb24tbGVmdCAnICsgdGhpcy5vcHRpb25zLmljb24gKyAnXCI+PC9zcGFuPicgK1xuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidWktYnV0dG9uLXRleHRcIj51aS1idXR0b248L3NwYW4+JyArXG4gICAgICAgICAgICAnPC9idXR0b24+Jyk7XG4gICAgfSxcblxuICAgIHJlbmRlckRhdGVQaWNrZXJQYW5lbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vYWRkIGNsYXNzZXMgYWNjb3JkaW5nIHRvIGNvbmRpdGlvbnNcbiAgICAgICAgdmFyIF9jbGFzc2VzID0gdGhpcy5nZXRDbGFzc2VzVG9BZGQoe1xuICAgICAgICAgICAgJ3VpLWRhdGVwaWNrZXItaW5saW5lJzogdGhpcy5vcHRpb25zLmlubGluZSxcbiAgICAgICAgICAgICd1aS1zaGFkb3cnOiAhdGhpcy5vcHRpb25zLmlubGluZSxcbiAgICAgICAgICAgICd1aS1pbnB1dC1vdmVybGF5JzogIXRoaXMub3B0aW9ucy5pbmxpbmUsXG4gICAgICAgICAgICAndWktc3RhdGUtZGlzYWJsZWQnOiB0aGlzLm9wdGlvbnMuZGlzYWJsZWQsXG4gICAgICAgICAgICAndWktc3RhdGUtZXJyb3InOiB0aGlzLm9wdGlvbnMuaW5saW5lICYmICF0aGlzLm9wdGlvbnMudmFsaWQsXG4gICAgICAgICAgICAndWktZGF0ZXBpY2tlci10aW1lb25seSc6IHRoaXMub3B0aW9ucy50aW1lT25seSxcbiAgICAgICAgICAgICd1aS1kYXRlcGlja2VyLW11bHRpcGxlLW1vbnRoJzogdGhpcy5vcHRpb25zLm51bWJlck9mTW9udGhzID4gMSxcbiAgICAgICAgICAgICd1aS1kYXRlcGlja2VyLW1vbnRocGlja2VyJzogKHRoaXMub3B0aW9ucy52aWV3ID09PSAnbW9udGgnKSxcbiAgICAgICAgICAgICd1aS1kYXRlcGlja2VyLXRvdWNoLXVpJzogdGhpcy5vcHRpb25zLnRvdWNoVUlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHBhbmVsSWQgPSB0aGlzLmNvbnRhaW5lci5hdHRyKCdpZCcpICsgJ19wYW5lbCc7XG4gICAgICAgIHZhciBfYXJpYSA9ICcgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbW9kYWw9XCJ0cnVlXCIgYXJpYS1sYWJlbD1cIicgKyB0aGlzLm9wdGlvbnMubG9jYWxlLmNob29zZURhdGUgKyAnXCIgJztcbiAgICAgICAgdGhpcy5wYW5lbCA9ICQoJzxkaXYgaWQ9XCInICsgcGFuZWxJZCArICdcIicgKyBfYXJpYSArICcgY2xhc3M9XCJ1aS1kYXRlcGlja2VyIHVpLXdpZGdldCB1aS13aWRnZXQtY29udGVudCB1aS1oZWxwZXItY2xlYXJmaXggdWktY29ybmVyLWFsbCAnICsgX2NsYXNzZXMgKyAnXCI+PC9kaXY+Jyk7XG5cbiAgICAgICAgLy9yZW5kZXIgaW5uZXIgZWxlbWVudHNcbiAgICAgICAgdGhpcy5wYW5lbC5nZXQoMCkuaW5uZXJIVE1MID0gdGhpcy5yZW5kZXJQYW5lbEVsZW1lbnRzKCk7XG5cbiAgICAgICAgdGhpcy5wYW5lbC5jc3Moe1xuICAgICAgICAgICAgJ2Rpc3BsYXknOiB0aGlzLm9wdGlvbnMuaW5saW5lID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgICAgICAgICdwb3NpdGlvbic6IHRoaXMub3B0aW9ucy5pbmxpbmUgfHwgdGhpcy5vcHRpb25zLnRvdWNoVUkgPyAnJyA6ICdhYnNvbHV0ZSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vblBhbmVsQ3JlYXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMub25QYW5lbENyZWF0ZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlclBhbmVsRWxlbWVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWxlbWVudHNIdG1sID0gJyc7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5wYW5lbC5hZGRDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFuZWwucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWRpc2FibGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy50aW1lT25seSkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy52aWV3ID09PSAnZGF0ZScgfHwgdGhpcy5vcHRpb25zLnZpZXcgPT09ICd3ZWVrJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzSHRtbCArPSB0aGlzLnJlbmRlckRhdGVWaWV3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLm9wdGlvbnMudmlldyA9PT0gJ21vbnRoJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzSHRtbCArPSB0aGlzLnJlbmRlck1vbnRoVmlldygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93VGltZSB8fCB0aGlzLm9wdGlvbnMudGltZU9ubHkpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzSHRtbCArPSB0aGlzLnJlbmRlclRpbWVQaWNrZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd0J1dHRvbkJhcikge1xuICAgICAgICAgICAgZWxlbWVudHNIdG1sICs9IHRoaXMucmVuZGVyQnV0dG9uQmFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudHNIdG1sO1xuICAgIH0sXG5cbiAgICByZW5kZXJEYXRlVmlldzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMubW9udGhzTWV0YWRhdGEgPSB0aGlzLmNyZWF0ZU1vbnRocyh0aGlzLnZpZXdEYXRlLmdldE1vbnRoKCksIHRoaXMudmlld0RhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgIHZhciBtb250aHMgPSB0aGlzLnJlbmRlck1vbnRocyh0aGlzLm1vbnRoc01ldGFkYXRhKTtcblxuICAgICAgICByZXR1cm4gbW9udGhzO1xuICAgIH0sXG5cbiAgICByZW5kZXJNb250aFZpZXc6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYmFja3dhcmROYXZpZ2F0b3IgPSB0aGlzLnJlbmRlckJhY2t3YXJkTmF2aWdhdG9yKHRoaXMub3B0aW9ucy5sb2NhbGUucHJldlllYXIpLFxuICAgICAgICAgICAgZm9yd2FyZE5hdmlnYXRvciA9IHRoaXMucmVuZGVyRm9yd2FyZE5hdmlnYXRvcih0aGlzLm9wdGlvbnMubG9jYWxlLm5leHRZZWFyKSxcbiAgICAgICAgICAgIHllYXJFbGVtZW50ID0gdGhpcy5yZW5kZXJUaXRsZVllYXJFbGVtZW50KHRoaXMudmlld0RhdGUuZ2V0RnVsbFllYXIoKSksXG4gICAgICAgICAgICBtb250aHMgPSB0aGlzLnJlbmRlck1vbnRoVmlld01vbnRocygpO1xuXG4gICAgICAgIHJldHVybiAoJzxkaXYgY2xhc3M9XCJ1aS1kYXRlcGlja2VyLWhlYWRlciB1aS13aWRnZXQtaGVhZGVyIHVpLWhlbHBlci1jbGVhcmZpeCB1aS1jb3JuZXItYWxsXCI+JyArXG4gICAgICAgICAgICBiYWNrd2FyZE5hdmlnYXRvciArXG4gICAgICAgICAgICBmb3J3YXJkTmF2aWdhdG9yICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidWktZGF0ZXBpY2tlci10aXRsZVwiPicgK1xuICAgICAgICAgICAgeWVhckVsZW1lbnQgK1xuICAgICAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ1aS1tb250aHBpY2tlclwiPicgK1xuICAgICAgICAgICAgbW9udGhzICtcbiAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyVGltZVBpY2tlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0aW1lcGlja2VyID0gJzxkaXYgY2xhc3M9XCJ1aS10aW1lcGlja2VyIHVpLXdpZGdldC1oZWFkZXIgdWktY29ybmVyLWFsbCcgKyAodGhpcy5vcHRpb25zLnRpbWVJbnB1dCA/ICcgdWktdGltZXBpY2tlci10aW1laW5wdXQnIDogJycpICsgJ1wiPic7XG5cbiAgICAgICAgLy9ob3VyXG4gICAgICAgIHRpbWVwaWNrZXIgKz0gdGhpcy5yZW5kZXJIb3VyUGlja2VyKCk7XG4gICAgICAgIC8vc2VwYXJhdG9yXG4gICAgICAgIHRpbWVwaWNrZXIgKz0gdGhpcy5yZW5kZXJTZXBhcmF0b3IoKTtcbiAgICAgICAgLy9taW51dGVcbiAgICAgICAgdGltZXBpY2tlciArPSB0aGlzLnJlbmRlck1pbnV0ZVBpY2tlcigpO1xuICAgICAgICAvL3NlcGFyYXRvclxuICAgICAgICB0aW1lcGlja2VyICs9IHRoaXMub3B0aW9ucy5zaG93U2Vjb25kcyA/IHRoaXMucmVuZGVyU2VwYXJhdG9yKCkgOiAnJztcbiAgICAgICAgLy9zZWNvbmRcbiAgICAgICAgdGltZXBpY2tlciArPSB0aGlzLnJlbmRlclNlY29uZFBpY2tlcigpO1xuICAgICAgICAvL3NlcGFyYXRvclxuICAgICAgICB0aW1lcGlja2VyICs9IHRoaXMub3B0aW9ucy5zaG93TWlsbGlzZWNvbmRzID8gdGhpcy5yZW5kZXJGcmFjdGlvblNlcGFyYXRvcigpIDogJyc7XG4gICAgICAgIC8vbWlsbGlzZWNvbmRcbiAgICAgICAgdGltZXBpY2tlciArPSB0aGlzLnJlbmRlck1pbGxpc2Vjb25kUGlja2VyKCk7XG4gICAgICAgIC8vYW1wbVxuICAgICAgICB0aW1lcGlja2VyICs9IHRoaXMucmVuZGVyQW1QbVBpY2tlcigpO1xuXG4gICAgICAgIC8vZW5kXG4gICAgICAgIHRpbWVwaWNrZXIgKz0gJzwvZGl2Pic7XG5cbiAgICAgICAgcmV0dXJuIHRpbWVwaWNrZXI7XG4gICAgfSxcblxuICAgIHJlbmRlckJ1dHRvbkJhcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBncmlkID0gdGhpcy5vcHRpb25zLmZsZXggPyAnZ3JpZCcgOiAndWktZyc7XG4gICAgICAgIHZhciB0b2RheSA9IHRoaXMub3B0aW9ucy5mbGV4ID8gJ2NvbC02IHRleHQtbGVmdCcgOiAndWktZy02JztcbiAgICAgICAgdmFyIGNsZWFyID0gdGhpcy5vcHRpb25zLmZsZXggPyAnY29sLTYgdGV4dC1yaWdodCcgOiAndWktZy02JztcbiAgICAgICAgdmFyIHRvZGF5TGFiZWwgPSAgdGhpcy5vcHRpb25zLmxvY2FsZS50b2RheTtcbiAgICAgICAgdmFyIG5vdyA9IHRoaXMuZ2V0Tm93KCk7XG4gICAgICAgIHZhciBtaW5EYXRlID0gdGhpcy5vcHRpb25zLm1pbkRhdGU7XG4gICAgICAgIHZhciBtYXhEYXRlID0gdGhpcy5vcHRpb25zLm1heERhdGU7XG4gICAgICAgIHZhciB0b2RheVN0eWxlQ2xhc3MgPSAndWktdG9kYXktYnV0dG9uIHVpLWJ1dHRvbiB1aS13aWRnZXQgdWktc3RhdGUtZGVmYXVsdCB1aS1jb3JuZXItYWxsIHVpLWJ1dHRvbi10ZXh0LW9ubHkgJyArIHRoaXMub3B0aW9ucy50b2RheUJ1dHRvblN0eWxlQ2xhc3M7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93VGltZSl7XG4gICAgICAgICAgICB0b2RheUxhYmVsID0gdGhpcy5vcHRpb25zLmxvY2FsZS5ub3c7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBvbmx5IHVzZSBkYXRlIGF0IDAwOjAwIGZvciBjb21wYXJpc29uXG4gICAgICAgICAgICBub3cgPSB0aGlzLnRydW5jYXRlRGF0ZShub3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgobWluRGF0ZSAmJiBtaW5EYXRlID4gbm93KSB8fCAobWF4RGF0ZSAmJiBtYXhEYXRlIDwgbm93KSkge1xuICAgICAgICAgICAgdG9kYXlTdHlsZUNsYXNzICs9ICcgdWktaGVscGVyLWhpZGRlbic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwidWktZGF0ZXBpY2tlci1idXR0b25iYXIgdWktd2lkZ2V0LWhlYWRlclwiPicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCInICsgZ3JpZCArICdcIj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiJyArIHRvZGF5ICsgJ1wiPicgK1xuICAgICAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJyArIHRvZGF5U3R5bGVDbGFzcyArICdcIj48c3BhbiBjbGFzcz1cInVpLWJ1dHRvbi10ZXh0XCI+JyArIHRvZGF5TGFiZWwgKyAnPC9zcGFuPjwvYnV0dG9uPicgK1xuICAgICAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCInICsgY2xlYXIgKyAnXCI+JyArXG4gICAgICAgICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ1aS1jbGVhci1idXR0b24gdWktYnV0dG9uIHVpLXdpZGdldCB1aS1zdGF0ZS1kZWZhdWx0IHVpLWNvcm5lci1hbGwgdWktYnV0dG9uLXRleHQtb25seSAnICsgdGhpcy5vcHRpb25zLmNsZWFyQnV0dG9uU3R5bGVDbGFzcyArICdcIj48c3BhbiBjbGFzcz1cInVpLWJ1dHRvbi10ZXh0XCI+JyArIHRoaXMub3B0aW9ucy5sb2NhbGUuY2xlYXIgKyAnPC9zcGFuPjwvYnV0dG9uPicgK1xuICAgICAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2Pic7XG4gICAgfSxcblxuICAgIHJlbmRlck1vbnRoVmlld01vbnRoOiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICB2YXIgbW9udGhOYW1lID0gdGhpcy5vcHRpb25zLmxvY2FsZS5tb250aE5hbWVzU2hvcnRbaW5kZXhdLFxuICAgICAgICAgICAgY29udGVudCA9IHRoaXMub3B0aW9ucy5kYXRlVGVtcGxhdGUgPyB0aGlzLm9wdGlvbnMuZGF0ZVRlbXBsYXRlLmNhbGwodGhpcywgbW9udGhOYW1lKSA6IHRoaXMuZXNjYXBlSFRNTChtb250aE5hbWUpLFxuICAgICAgICAgICAgY29tcGFyZURhdGUgPSBuZXcgRGF0ZSh0aGlzLnZpZXdEYXRlLmdldEZ1bGxZZWFyKCksIGluZGV4LCAxKSxcbiAgICAgICAgICAgIG1pbkRhdGUgPSB0aGlzLm9wdGlvbnMubWluRGF0ZSxcbiAgICAgICAgICAgIG1heERhdGUgPSB0aGlzLm9wdGlvbnMubWF4RGF0ZSxcbiAgICAgICAgICAgIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKG1pbkRhdGUgJiYgbWluRGF0ZSA+IGNvbXBhcmVEYXRlKSB7XG4gICAgICAgICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF4RGF0ZSAmJiBtYXhEYXRlIDwgY29tcGFyZURhdGUpIHtcbiAgICAgICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtb250aENsYXNzID0gdGhpcy5nZXRDbGFzc2VzVG9BZGQoe1xuICAgICAgICAgICAgJ3VpLXN0YXRlLWFjdGl2ZSc6IHRoaXMuaXNNb250aFNlbGVjdGVkKGluZGV4KSxcbiAgICAgICAgICAgICd1aS1zdGF0ZS1kaXNhYmxlZCc6IGRpc2FibGVkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAnPGEgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJ1aS1tb250aHBpY2tlci1tb250aCcgKyBtb250aENsYXNzICsgJ1wiPicgKyBjb250ZW50ICsgJzwvYT4nO1xuICAgIH0sXG5cbiAgICByZW5kZXJNb250aFZpZXdNb250aHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbW9udGhzID0gJyc7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDExOyBpKyspIHtcbiAgICAgICAgICAgIG1vbnRocyArPSB0aGlzLnJlbmRlck1vbnRoVmlld01vbnRoKGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1vbnRocztcbiAgICB9LFxuXG4gICAgcmVuZGVyTW9udGhzOiBmdW5jdGlvbihtb250aHNNZXRhZGF0YSkge1xuICAgICAgICB2YXIgbW9udGhzSHRtbCA9ICcnO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9udGhzTWV0YWRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1vbnRoc0h0bWwgKz0gdGhpcy5yZW5kZXJNb250aChtb250aHNNZXRhZGF0YVtpXSwgaSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW9udGhzSHRtbDtcbiAgICB9LFxuXG4gICAgcmVuZGVyTW9udGg6IGZ1bmN0aW9uKG1vbnRoTWV0YWRhdGEsIGluZGV4KSB7XG4gICAgICAgIHZhciB3ZWVrRGF5c01pbiA9IHRoaXMuY3JlYXRlV2Vla0RheXNNaW4oKSxcbiAgICAgICAgICAgIHdlZWtEYXlzID0gdGhpcy5jcmVhdGVXZWVrRGF5cygpLFxuICAgICAgICAgICAgYmFja3dhcmROYXZpZ2F0b3IgPSAoaW5kZXggPT09IDApID8gdGhpcy5yZW5kZXJCYWNrd2FyZE5hdmlnYXRvcih0aGlzLm9wdGlvbnMubG9jYWxlLnByZXZNb250aCkgOiAnJyxcbiAgICAgICAgICAgIGZvcndhcmROYXZpZ2F0b3IgPSAodGhpcy5vcHRpb25zLm51bWJlck9mTW9udGhzID09PSAxKSB8fCAoaW5kZXggPT09IHRoaXMub3B0aW9ucy5udW1iZXJPZk1vbnRocyAtIDEpID8gdGhpcy5yZW5kZXJGb3J3YXJkTmF2aWdhdG9yKHRoaXMub3B0aW9ucy5sb2NhbGUubmV4dE1vbnRoKSA6ICcnLFxuICAgICAgICAgICAgdGl0bGUgPSB0aGlzLnJlbmRlclRpdGxlKG1vbnRoTWV0YWRhdGEpLFxuICAgICAgICAgICAgZGF0ZVZpZXdHcmlkID0gdGhpcy5yZW5kZXJEYXRlVmlld0dyaWQobW9udGhNZXRhZGF0YSwgd2Vla0RheXNNaW4sIHdlZWtEYXlzKTtcblxuICAgICAgICByZXR1cm4gKCc8ZGl2IGNsYXNzPVwidWktZGF0ZXBpY2tlci1ncm91cCB1aS13aWRnZXQtY29udGVudFwiPicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ1aS1kYXRlcGlja2VyLWhlYWRlciB1aS13aWRnZXQtaGVhZGVyIHVpLWhlbHBlci1jbGVhcmZpeCB1aS1jb3JuZXItYWxsXCI+JyArXG4gICAgICAgICAgICBiYWNrd2FyZE5hdmlnYXRvciArXG4gICAgICAgICAgICBmb3J3YXJkTmF2aWdhdG9yICtcbiAgICAgICAgICAgIHRpdGxlICtcbiAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgIGRhdGVWaWV3R3JpZCArXG4gICAgICAgICAgICAnPC9kaXY+Jyk7XG4gICAgfSxcblxuICAgIHJlbmRlckJhY2t3YXJkTmF2aWdhdG9yOiBmdW5jdGlvbihhcmlhTGFiZWwpIHtcbiAgICAgICAgcmV0dXJuICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiJyArIGFyaWFMYWJlbCArICdcIiBjbGFzcz1cInVpLWRhdGVwaWNrZXItcHJldiB1aS1jb3JuZXItYWxsXCIgdGFiaW5kZXg9XCIwXCI+JyArXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ1aS1pY29uIHVpLWljb24tY2lyY2xlLXRyaWFuZ2xlLXdcIj48L3NwYW4+JyArXG4gICAgICAgICAgICAnPC9idXR0b24+JztcbiAgICB9LFxuXG4gICAgcmVuZGVyRm9yd2FyZE5hdmlnYXRvcjogZnVuY3Rpb24oYXJpYUxhYmVsKSB7XG4gICAgICAgIHJldHVybiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cIicgKyBhcmlhTGFiZWwgKyAnXCIgY2xhc3M9XCJ1aS1kYXRlcGlja2VyLW5leHQgdWktY29ybmVyLWFsbFwiIHRhYmluZGV4PVwiMFwiPicgK1xuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidWktaWNvbiB1aS1pY29uLWNpcmNsZS10cmlhbmdsZS1lXCI+PC9zcGFuPicgK1xuICAgICAgICAgICAgJzwvYnV0dG9uPic7XG4gICAgfSxcblxuICAgIHJlbmRlclRpdGxlTW9udGhFbGVtZW50OiBmdW5jdGlvbihtb250aCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb250aE5hdmlnYXRvciAmJiB0aGlzLm9wdGlvbnMudmlldyAhPT0gJ21vbnRoJyAmJiBpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICc8c2VsZWN0IGNsYXNzPVwidWktZGF0ZXBpY2tlci1tb250aFwiIHRhYmluZGV4PVwiMFwiIGFyaWEtbGFiZWw9XCInICsgdGhpcy5vcHRpb25zLmxvY2FsZS5tb250aCArICdcIj4nICsgdGhpcy5yZW5kZXJUaXRsZU9wdGlvbnMoJ21vbnRoJywgdGhpcy5vcHRpb25zLmxvY2FsZS5tb250aE5hbWVzU2hvcnQsIG1vbnRoKSArICc8L3NlbGVjdD4nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cInVpLWRhdGVwaWNrZXItbW9udGhcIj4nICsgdGhpcy5lc2NhcGVIVE1MKHRoaXMub3B0aW9ucy5sb2NhbGUubW9udGhOYW1lc1ttb250aF0pICsgJzwvc3Bhbj4nO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlbmRlclRpdGxlWWVhckVsZW1lbnQ6IGZ1bmN0aW9uKHllYXIsIGluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMueWVhck5hdmlnYXRvciAmJiBpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVZZWFyTmF2aWdhdG9yKCk7XG4gICAgICAgICAgICB2YXIgeWVhcnMgPSB0aGlzLm9wdGlvbnMueWVhclJhbmdlLnNwbGl0KCc6JyksXG4gICAgICAgICAgICAgICAgeWVhclN0YXJ0ID0gcGFyc2VJbnQoeWVhcnNbMF0sIDEwKSxcbiAgICAgICAgICAgICAgICB5ZWFyRW5kID0gcGFyc2VJbnQoeWVhcnNbMV0sIDEwKSxcbiAgICAgICAgICAgICAgICBtaW5EYXRlID0gdGhpcy5vcHRpb25zLm1pbkRhdGUsXG4gICAgICAgICAgICAgICAgbWF4RGF0ZSA9IHRoaXMub3B0aW9ucy5tYXhEYXRlLFxuICAgICAgICAgICAgICAgIG1pblllYXIgPSB5ZWFyU3RhcnQsXG4gICAgICAgICAgICAgICAgbWF4WWVhciA9IHllYXJFbmQ7XG4gICAgICAgICAgICBpZiAobWluRGF0ZSkge1xuICAgICAgICAgICAgICAgIG1pblllYXIgPSBNYXRoLm1heChtaW5EYXRlLmdldEZ1bGxZZWFyKCksIHllYXJTdGFydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF4RGF0ZSkge1xuICAgICAgICAgICAgICAgIG1heFllYXIgPSBNYXRoLm1pbihtYXhEYXRlLmdldEZ1bGxZZWFyKCksIHllYXJFbmQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gJzxpbnB1dCBjbGFzcz1cInVpLWRhdGVwaWNrZXIteWVhclwiIHNpemU9XCI2XCIgbWF4bGVuZ3RoPVwiNFwiIHRhYmluZGV4PVwiMFwiIGFyaWEtbGFiZWw9XCInICsgdGhpcy5vcHRpb25zLmxvY2FsZS55ZWFyICsgJ1wiIHR5cGU9XCJudW1iZXJcIiBtaW49XCInICsgbWluWWVhciArICdcIiBtYXg9XCInICsgbWF4WWVhciArICdcIiBzdGVwPVwiMVwiIHZhbHVlPVwiJyArIHllYXIgKyAnXCInICsgJz48L2lucHV0Pic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwidWktZGF0ZXBpY2tlci15ZWFyXCI+JyArIHllYXIgKyAnPC9zcGFuPic7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVuZGVyVGl0bGVPcHRpb25zOiBmdW5jdGlvbihuYW1lLCBvcHRpb25zLCBjdXJyZW50KSB7XG4gICAgICAgIHZhciBfb3B0aW9ucyA9ICcnLFxuICAgICAgICAgICAgbWluRGF0ZSA9IHRoaXMub3B0aW9ucy5taW5EYXRlLFxuICAgICAgICAgICAgbWF4RGF0ZSA9IHRoaXMub3B0aW9ucy5tYXhEYXRlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5zaG93TWluTWF4UmFuZ2UgfHwgKCF0aGlzLmlzSW5NaW5ZZWFyKCkgfHwgaSA+PSBtaW5EYXRlLmdldE1vbnRoKCkpICYmICghdGhpcy5pc0luTWF4WWVhcigpIHx8IGkgPD0gbWF4RGF0ZS5nZXRNb250aCgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX29wdGlvbnMgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgaSArICdcIicgKyAoaSA9PT0gY3VycmVudCA/ICcgc2VsZWN0ZWQnIDogJycpICsgJz4nICsgdGhpcy5lc2NhcGVIVE1MKG9wdGlvbnNbaV0pICsgJzwvb3B0aW9uPic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSBvcHRpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5zaG93TWluTWF4UmFuZ2UgfHwgKCEobWluRGF0ZSAmJiBtaW5EYXRlLmdldEZ1bGxZZWFyKCkgPiBvcHRpb24pICYmICEobWF4RGF0ZSAmJiBtYXhEYXRlLmdldEZ1bGxZZWFyKCkgPCBvcHRpb24pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX29wdGlvbnMgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgb3B0aW9uICsgJ1wiJyArIChvcHRpb24gPT09IGN1cnJlbnQgPyAnIHNlbGVjdGVkJyA6ICcnKSArICc+JyArIG9wdGlvbiArICc8L29wdGlvbj4nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9vcHRpb25zO1xuICAgIH0sXG5cbiAgICByZW5kZXJUaXRsZTogZnVuY3Rpb24obW9udGhNZXRhZGF0YSkge1xuICAgICAgICB2YXIgbW9udGggPSB0aGlzLnJlbmRlclRpdGxlTW9udGhFbGVtZW50KG1vbnRoTWV0YWRhdGEubW9udGgsIG1vbnRoTWV0YWRhdGEuaW5kZXgpLFxuICAgICAgICAgICAgeWVhciA9IHRoaXMucmVuZGVyVGl0bGVZZWFyRWxlbWVudChtb250aE1ldGFkYXRhLnllYXIsIG1vbnRoTWV0YWRhdGEuaW5kZXgpLFxuICAgICAgICAgICAgd2hpdGVzcGFjZSA9ICcmI3hhMDsnO1xuXG4gICAgICAgIHZhciBjb250ZW50ID0gbW9udGggKyB3aGl0ZXNwYWNlICsgeWVhcjtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5sb2NhbGUuc2hvd01vbnRoQWZ0ZXJZZWFyKSB7XG4gICAgICAgICAgICBjb250ZW50ID0geWVhciArIHdoaXRlc3BhY2UgKyBtb250aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cInVpLWRhdGVwaWNrZXItdGl0bGVcIj4nICsgY29udGVudCArICc8L2Rpdj4nO1xuICAgIH0sXG5cbiAgICByZW5kZXJEYXlOYW1lczogZnVuY3Rpb24od2Vla0RheXNNaW4sIHdlZWtEYXlzKSB7XG4gICAgICAgIHZhciBkYXlOYW1lc0h0bWwgPSAnJztcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dXZWVrKSB7XG4gICAgICAgICAgICBkYXlOYW1lc0h0bWwgKz0gJzx0aCBzY29wZT1cImNvbFwiIGFiYnI9XCInICsgdGhpcy5vcHRpb25zLmxvY2FsZS53ZWVrSGVhZGVyICsgJ1wiPicgK1xuICAgICAgICAgICAgICAgICc8c3Bhbj4nICtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubG9jYWxlLndlZWtIZWFkZXIgK1xuICAgICAgICAgICAgICAgICc8L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgJzwvdGg+JztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd2Vla0RheXNNaW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB3ZWVrRGF5TGFiZWwgPSB0aGlzLmVzY2FwZUhUTUwod2Vla0RheXNbaV0pO1xuICAgICAgICAgICAgdmFyIHdlZWtEYXlNaW5MYWJlbCA9IHdlZWtEYXlzTWluW2ldO1xuICAgICAgICAgICAgZGF5TmFtZXNIdG1sICs9ICc8dGggc2NvcGU9XCJjb2xcIiBhYmJyPVwiJyArIHdlZWtEYXlNaW5MYWJlbCArICdcIj4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4gdGl0bGU9XCInICsgd2Vla0RheUxhYmVsICsgJ1wiPicgK1xuICAgICAgICAgICAgICAgIHdlZWtEYXlNaW5MYWJlbCArXG4gICAgICAgICAgICAgICAgJzwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAnPC90aD4nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRheU5hbWVzSHRtbDtcbiAgICB9LFxuXG4gICAgLy8gdXRpbGl0eSBtZXRob2RzIGZvciBjYWxjdWxhdGVXZWVrTnVtYmVyLiBCYXNlZCBvbiB0aGUgaW1wbGVtZW50YXRpb24gZnJvbSBtb21lbnQuanNcbiAgICAvLyBzdGFydC1vZi1maXJzdC13ZWVrIC0gc3RhcnQtb2YteWVhclxuICAgIGZpcnN0V2Vla09mZnNldDogZnVuY3Rpb24oeWVhciwgZG93LCBkb3kpIHtcbiAgICAgICAgLy8gZmlyc3Qtd2VlayBkYXkgLS0gd2hpY2ggamFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgKDQgZm9yIGlzbywgMSBmb3Igb3RoZXIpXG4gICAgICAgIHZhciBmd2QgPSA3ICsgZG93IC0gZG95LFxuICAgICAgICAgICAgLy8gZmlyc3Qtd2VlayBkYXkgbG9jYWwgd2Vla2RheSAtLSB3aGljaCBsb2NhbCB3ZWVrZGF5IGlzIGZ3ZFxuICAgICAgICAgICAgZndkbHcgPSAoNyArIG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIDAsIGZ3ZCkpLmdldFVUQ0RheSgpIC0gZG93KSAlIDc7XG5cbiAgICAgICAgcmV0dXJuIC1md2RsdyArIGZ3ZCAtIDE7XG4gICAgfSxcblxuICAgIGRheU9mWWVhcjogZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgobmV3IERhdGUoZC55ZWFyLCBkLm1vbnRoLCBkLmRheSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoZC55ZWFyLCAwLCAwKS5nZXRUaW1lKCkpIC8gODY0MDAwMDApO1xuICAgIH0sXG5cbiAgICBkYXlzSW5ZZWFyOiBmdW5jdGlvbih5ZWFyKSB7XG4gICAgICAgIGlmICgoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCkgfHwgeWVhciAlIDQwMCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDM2NjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMzY1O1xuICAgIH0sXG5cbiAgICB3ZWVrc0luWWVhcjogZnVuY3Rpb24oeWVhciwgZG93LCBkb3kpIHtcbiAgICAgICAgdmFyIHdlZWtPZmZzZXQgPSB0aGlzLmZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSksXG4gICAgICAgICAgICB3ZWVrT2Zmc2V0TmV4dCA9IHRoaXMuZmlyc3RXZWVrT2Zmc2V0KHllYXIgKyAxLCBkb3csIGRveSk7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLmRheXNJblllYXIoeWVhcikgLSB3ZWVrT2Zmc2V0ICsgd2Vla09mZnNldE5leHQpIC8gNztcbiAgICB9LFxuXG4gICAgY2FsY3VsYXRlV2Vla051bWJlcjogZnVuY3Rpb24oZCkge1xuICAgICAgICB2YXIgZmlyc3REYXlPZldlZWsgPSB0aGlzLmdldEZpcnN0RGF5T2ZXZWVrKCksXG4gICAgICAgICAgICBkb3kgPSB0aGlzLm9wdGlvbnMubG9jYWxlLmZpcnN0RGF5V2Vla09mZnNldCxcbiAgICAgICAgICAgIHdlZWtPZmZzZXQgPSB0aGlzLmZpcnN0V2Vla09mZnNldChkLnllYXIsIGZpcnN0RGF5T2ZXZWVrLCBkb3kpLFxuICAgICAgICAgICAgd2VlayA9IE1hdGguZmxvb3IoKHRoaXMuZGF5T2ZZZWFyKGQpIC0gd2Vla09mZnNldCAtIDEpIC8gNykgKyAxO1xuXG4gICAgICAgIGlmICh3ZWVrIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWsgKyB0aGlzLndlZWtzSW5ZZWFyKHJlc1llYXIsIGZpcnN0RGF5T2ZXZWVrLCBkb3kpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHdlZWsgPiB0aGlzLndlZWtzSW5ZZWFyKGQueWVhciwgZmlyc3REYXlPZldlZWssIGRveSkpIHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrIC0gdGhpcy53ZWVrc0luWWVhcihkLnllYXIsIGZpcnN0RGF5T2ZXZWVrLCBkb3kpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHdlZWs7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVuZGVyV2VlazogZnVuY3Rpb24od2Vla0RhdGVzKSB7XG4gICAgICAgIHZhciB3ZWVrSHRtbCA9ICcnO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1dlZWspIHtcbiAgICAgICAgICAgIHZhciBmaXJzdERhdGUgPSB3ZWVrRGF0ZXNbMF0sXG4gICAgICAgICAgICAgICAgbGFzdERhdGUgPSB3ZWVrRGF0ZXNbNl0sXG4gICAgICAgICAgICAgICAgY2VsbENsYXNzID0gZmlyc3REYXRlLm90aGVyTW9udGggJiYgbGFzdERhdGUub3RoZXJNb250aCAmJiAhdGhpcy5vcHRpb25zLnNob3dPdGhlck1vbnRocyA/ICcgdWktZGF0ZXBpY2tlci1vdGhlci1tb250aC1oaWRkZW4nIDogJyc7XG5cbiAgICAgICAgICAgIHdlZWtIdG1sICs9ICc8dGQgY2xhc3M9XCJ1aS1kYXRlcGlja2VyLXdlZWtudW1iZXInICsgY2VsbENsYXNzICsgJ1wiPjxzcGFuIGNsYXNzPVwidWktc3RhdGUtZGlzYWJsZWRcIj4nICtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMud2Vla0NhbGN1bGF0b3IoZmlyc3REYXRlKSArXG4gICAgICAgICAgICAgICAgJzwvc3Bhbj48L3RkPic7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2F0dXJkYXlJbmRleCA9IHRoaXMuZ2V0U2F0dXJkYXlJbmRleCgpO1xuICAgICAgICB2YXIgc3VuZGF5SW5kZXggPSB0aGlzLmdldFN1bmRheUluZGV4KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd2Vla0RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZSA9IHdlZWtEYXRlc1tpXSxcbiAgICAgICAgICAgICAgICBjZWxsQ2xhc3MgPSB0aGlzLmdldENsYXNzZXNUb0FkZCh7XG4gICAgICAgICAgICAgICAgICAgICd1aS1kYXRlcGlja2VyLW90aGVyLW1vbnRoJzogZGF0ZS5vdGhlck1vbnRoLFxuICAgICAgICAgICAgICAgICAgICAndWktZGF0ZXBpY2tlci10b2RheSc6IGRhdGUudG9kYXksXG4gICAgICAgICAgICAgICAgICAgICd1aS1kYXRlcGlja2VyLXdlZWstZW5kJzogaSA9PSBzdW5kYXlJbmRleCB8fCBpID09IHNhdHVyZGF5SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICd1aS1kYXRlcGlja2VyLW90aGVyLW1vbnRoLWhpZGRlbic6IGRhdGUub3RoZXJNb250aCAmJiAhdGhpcy5vcHRpb25zLnNob3dPdGhlck1vbnRoc1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGRhdGVDbGFzcyA9IHRoaXMuZ2V0Q2xhc3Nlc1RvQWRkKHtcbiAgICAgICAgICAgICAgICAgICAgJ3VpLXN0YXRlLWRlZmF1bHQnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAndWktc3RhdGUtYWN0aXZlJzogdGhpcy5pc1NlbGVjdGVkKGRhdGUpLFxuICAgICAgICAgICAgICAgICAgICAndWktc3RhdGUtZGlzYWJsZWQnOiAhZGF0ZS5zZWxlY3RhYmxlLFxuICAgICAgICAgICAgICAgICAgICAndWktc3RhdGUtaGlnaGxpZ2h0JzogZGF0ZS50b2RheVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLnJlbmRlckRhdGVDZWxsQ29udGVudChkYXRlLCBkYXRlQ2xhc3MpO1xuXG4gICAgICAgICAgICB3ZWVrSHRtbCArPSAoXG4gICAgICAgICAgICAgICAgJzx0ZCBjbGFzcz1cIicgKyBjZWxsQ2xhc3MgKyAnXCIgYXJpYS1sYWJlbD1cIicgKyB0aGlzLm9wdGlvbnMubG9jYWxlLm1vbnRoTmFtZXNbZGF0ZS5tb250aF0gKyAnICcgKyBkYXRlLmRheSArICdcIj4nICtcbiAgICAgICAgICAgICAgICBjb250ZW50ICtcbiAgICAgICAgICAgICAgICAnPC90ZD4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHdlZWtIdG1sO1xuICAgIH0sXG5cbiAgICByZW5kZXJEYXRlQ2VsbENvbnRlbnQ6IGZ1bmN0aW9uKGRhdGUsIGRhdGVDbGFzcykge1xuICAgICAgICB2YXIgY29udGVudCA9IHRoaXMub3B0aW9ucy5kYXRlVGVtcGxhdGUgPyB0aGlzLm9wdGlvbnMuZGF0ZVRlbXBsYXRlLmNhbGwodGhpcywgZGF0ZSkgOiBkYXRlLmRheTtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSB0aGlzLm9wdGlvbnMuZGF0ZVN0eWxlQ2xhc3NlcztcblxuICAgICAgICBpZiAoY2xhc3NlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIGlzb0RhdGVTdHIgPSB0aGlzLnRvSVNPRGF0ZVN0cmluZyhuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5KSk7XG4gICAgICAgICAgICBpZiAoY2xhc3Nlc1tpc29EYXRlU3RyXSkge1xuICAgICAgICAgICAgICAgIGRhdGVDbGFzcyArPSAnICcgKyBjbGFzc2VzW2lzb0RhdGVTdHJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlLnNlbGVjdGFibGUpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IHRoaXMuaXNTZWxlY3RlZChkYXRlKTtcbiAgICAgICAgICAgIHJldHVybiAnPGEgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCInICsgZGF0ZUNsYXNzICsgJ1wiIGFyaWEtc2VsZWN0ZWQ9XCInICsgc2VsZWN0ZWQgKyAnXCI+JyArIGNvbnRlbnQgKyAnPC9hPic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGRhdGVDbGFzcyArICdcIj4nICsgY29udGVudCArICc8L3NwYW4+JztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZW5kZXJEYXRlczogZnVuY3Rpb24obW9udGhNZXRhZGF0YSkge1xuICAgICAgICB2YXIgZGF0ZXNIdG1sID0gJyc7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb250aE1ldGFkYXRhLmRhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgd2VlayA9IG1vbnRoTWV0YWRhdGEuZGF0ZXNbaV07XG5cbiAgICAgICAgICAgIGRhdGVzSHRtbCArPSAnPHRyPicgK1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyV2Vlayh3ZWVrKSArXG4gICAgICAgICAgICAgICAgJzwvdHI+JztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRlc0h0bWw7XG4gICAgfSxcblxuICAgIHJlbmRlckRhdGVWaWV3R3JpZDogZnVuY3Rpb24obW9udGhNZXRhZGF0YSwgd2Vla0RheXNNaW4sIHdlZWtEYXlzKSB7XG4gICAgICAgIHZhciBkYXlOYW1lcyA9IHRoaXMucmVuZGVyRGF5TmFtZXMod2Vla0RheXNNaW4sIHdlZWtEYXlzKSxcbiAgICAgICAgICAgIGRhdGVzID0gdGhpcy5yZW5kZXJEYXRlcyhtb250aE1ldGFkYXRhKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ1aS1kYXRlcGlja2VyLWNhbGVuZGFyLWNvbnRhaW5lclwiPicgK1xuICAgICAgICAgICAgJzx0YWJsZSBjbGFzcz1cInVpLWRhdGVwaWNrZXItY2FsZW5kYXJcIiByb2xlPVwiZ3JpZFwiPicgK1xuICAgICAgICAgICAgJzx0aGVhZD4nICtcbiAgICAgICAgICAgICc8dHI+JyArXG4gICAgICAgICAgICBkYXlOYW1lcyArXG4gICAgICAgICAgICAnPC90cj4nICtcbiAgICAgICAgICAgICc8L3RoZWFkPicgK1xuICAgICAgICAgICAgJzx0Ym9keT4nICtcbiAgICAgICAgICAgIGRhdGVzICtcbiAgICAgICAgICAgICc8L3Rib2R5PicgK1xuICAgICAgICAgICAgJzwvdGFibGU+JyArXG4gICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICApO1xuICAgIH0sXG5cbiAgICByZW5kZXJIb3VyUGlja2VyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGhvdXIgPSB0aGlzLmlzRGF0ZSh0aGlzLnZhbHVlKSA/IHRoaXMudmFsdWUuZ2V0SG91cnMoKSA6IHRoaXMudmlld0RhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgdmFyIG1pbkhvdXIgPSAwO1xuICAgICAgICB2YXIgbWF4SG91ciA9IDIzO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaG91ckZvcm1hdCA9PT0gJzEyJykge1xuICAgICAgICAgICAgaWYgKGhvdXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICBob3VyID0gMTI7XG4gICAgICAgICAgICAgICAgbWF4SG91ciA9IDEyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaG91ciA+IDExICYmIGhvdXIgIT09IDEyKVxuICAgICAgICAgICAgICAgIGhvdXIgPSBob3VyIC0gMTI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaG91ckRpc3BsYXkgPSBob3VyIDwgMTAgPyAnMCcgKyBob3VyIDogaG91cjtcbiAgICAgICAgdmFyIHRhYmluZGV4ID0gJzAnO1xuICAgICAgICB2YXIgaHRtbCA9IHRoaXMub3B0aW9ucy50aW1lSW5wdXRcbiAgICAgICAgICAgID8gJzxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiJyArIG1pbkhvdXIgKyAnXCIgbWF4PVwiJyArIG1heEhvdXIgKyAnXCIgdmFsdWU9XCInICsgaG91ckRpc3BsYXkgKyAnXCIgYXJpYS1sYWJlbD1cIicgKyB0aGlzLm9wdGlvbnMubG9jYWxlLmhvdXJUZXh0ICsgJ1wiIHNpemU9XCIyXCIgbWF4bGVuZ3RoPVwiMlwiIHRhYmluZGV4PVwiJyArIHRhYmluZGV4ICsgJ1wiIGNsYXNzPVwidWktaW5wdXRmaWVsZFwiPjwvaW5wdXQ+J1xuICAgICAgICAgICAgOiAnPHNwYW4+JyArIGhvdXJEaXNwbGF5ICsgJzwvc3Bhbj4nO1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUaW1lRWxlbWVudHMoXCJ1aS1ob3VyLXBpY2tlclwiLCBodG1sLCAwKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyTWludXRlUGlja2VyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1pbnV0ZSA9IHRoaXMuaXNEYXRlKHRoaXMudmFsdWUpID8gdGhpcy52YWx1ZS5nZXRNaW51dGVzKCkgOiB0aGlzLnZpZXdEYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgICAgICAgIG1pbnV0ZURpc3BsYXkgPSBtaW51dGUgPCAxMCA/ICcwJyArIG1pbnV0ZSA6IG1pbnV0ZTtcbiAgICAgICAgdmFyIHRhYmluZGV4ID0gJzAnO1xuICAgICAgICB2YXIgaHRtbCA9IHRoaXMub3B0aW9ucy50aW1lSW5wdXRcbiAgICAgICAgICAgID8gJzxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIG1heD1cIjU5XCIgdmFsdWU9XCInICsgbWludXRlRGlzcGxheSArICdcIiBhcmlhLWxhYmVsPVwiJyArIHRoaXMub3B0aW9ucy5sb2NhbGUubWludXRlVGV4dCArICdcIiBzaXplPVwiMlwiIG1heGxlbmd0aD1cIjJcIiB0YWJpbmRleD1cIicgKyB0YWJpbmRleCArICdcIiBjbGFzcz1cInVpLWlucHV0ZmllbGRcIj48L2lucHV0PidcbiAgICAgICAgICAgIDogJzxzcGFuPicgKyBtaW51dGVEaXNwbGF5ICsgJzwvc3Bhbj4nO1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUaW1lRWxlbWVudHMoXCJ1aS1taW51dGUtcGlja2VyXCIsIGh0bWwsIDEpO1xuICAgIH0sXG5cbiAgICByZW5kZXJTZWNvbmRQaWNrZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgICB2YXIgc2Vjb25kID0gdGhpcy5pc0RhdGUodGhpcy52YWx1ZSkgPyB0aGlzLnZhbHVlLmdldFNlY29uZHMoKSA6IHRoaXMudmlld0RhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgICAgICAgICAgIHNlY29uZERpc3BsYXkgPSBzZWNvbmQgPCAxMCA/ICcwJyArIHNlY29uZCA6IHNlY29uZDtcbiAgICAgICAgICAgIHZhciB0YWJpbmRleCA9ICcwJztcbiAgICAgICAgICAgIHZhciBodG1sID0gdGhpcy5vcHRpb25zLnRpbWVJbnB1dFxuICAgICAgICAgICAgICAgID8gJzxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIG1heD1cIjU5XCIgdmFsdWU9XCInICsgc2Vjb25kRGlzcGxheSArICdcIiBhcmlhLWxhYmVsPVwiJyArIHRoaXMub3B0aW9ucy5sb2NhbGUuc2Vjb25kVGV4dCArICdcIiBzaXplPVwiMlwiIG1heGxlbmd0aD1cIjJcIiB0YWJpbmRleD1cIicgKyB0YWJpbmRleCArICdcIiBjbGFzcz1cInVpLWlucHV0ZmllbGRcIj48L2lucHV0PidcbiAgICAgICAgICAgICAgICA6ICc8c3Bhbj4nICsgc2Vjb25kRGlzcGxheSArICc8L3NwYW4+JztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRpbWVFbGVtZW50cyhcInVpLXNlY29uZC1waWNrZXJcIiwgaHRtbCwgMik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfSxcblxuICAgIHJlbmRlck1pbGxpc2Vjb25kUGlja2VyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93TWlsbGlzZWNvbmRzKSB7XG4gICAgICAgICAgICB2YXIgbWlsbGlzZWNvbmQgPSB0aGlzLmlzRGF0ZSh0aGlzLnZhbHVlKSA/IHRoaXMudmFsdWUuZ2V0TWlsbGlzZWNvbmRzKCkgOiB0aGlzLnZpZXdEYXRlLmdldE1pbGxpc2Vjb25kcygpLFxuICAgICAgICAgICAgICAgIG1pbGxpc2Vjb25kRGlzcGxheSA9IG1pbGxpc2Vjb25kIDwgMTAgPyAnMDAnICsgbWlsbGlzZWNvbmQgOiBtaWxsaXNlY29uZCA8IDEwMCA/ICcwJyArIG1pbGxpc2Vjb25kIDogbWlsbGlzZWNvbmQ7XG4gICAgICAgICAgICB2YXIgdGFiaW5kZXggPSAnMCc7XG4gICAgICAgICAgICB2YXIgaHRtbCA9IHRoaXMub3B0aW9ucy50aW1lSW5wdXRcbiAgICAgICAgICAgICAgICA/ICc8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBtYXg9XCI5OTlcIiB2YWx1ZT1cIicgKyBtaWxsaXNlY29uZERpc3BsYXkgKyAnXCIgYXJpYS1sYWJlbD1cIicgKyB0aGlzLm9wdGlvbnMubG9jYWxlLm1pbGxpc2Vjb25kVGV4dCArICdcIiBzaXplPVwiM1wiIG1heGxlbmd0aD1cIjNcIiB0YWJpbmRleD1cIicgKyB0YWJpbmRleCArICdcIiBjbGFzcz1cInVpLWlucHV0ZmllbGRcIj48L2lucHV0PicgOiAnPHNwYW4+JyArIG1pbGxpc2Vjb25kRGlzcGxheSArICc8L3NwYW4+JztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRpbWVFbGVtZW50cyhcInVpLW1pbGxpc2Vjb25kLXBpY2tlclwiLCBodG1sLCAzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9LFxuXG4gICAgcmVuZGVyQW1QbVBpY2tlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaG91ckZvcm1hdCA9PT0gJzEyJykge1xuICAgICAgICAgICAgdmFyIGhvdXIgPSB0aGlzLmlzRGF0ZSh0aGlzLnZhbHVlKSA/IHRoaXMudmFsdWUuZ2V0SG91cnMoKSA6IHRoaXMudmlld0RhdGUuZ2V0SG91cnMoKSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5ID0gaG91ciA+IDExID8gdGhpcy5vcHRpb25zLmxvY2FsZS5wbSA6IHRoaXMub3B0aW9ucy5sb2NhbGUuYW07XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRpbWVFbGVtZW50cyhcInVpLWFtcG0tcGlja2VyXCIsICc8c3Bhbj4nICsgZGlzcGxheSArICc8L3NwYW4+JywgNCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfSxcblxuICAgIHJlbmRlclNlcGFyYXRvcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRpbWVFbGVtZW50cyhcInVpLXNlcGFyYXRvclwiLCAnPHNwYW4+Ojwvc3Bhbj4nLCAtMSk7XG4gICAgfSxcblxuICAgIHJlbmRlckZyYWN0aW9uU2VwYXJhdG9yOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVGltZUVsZW1lbnRzKFwidWktc2VwYXJhdG9yXCIsICc8c3Bhbj4uPC9zcGFuPicsIC0xKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyVGltZUVsZW1lbnRzOiBmdW5jdGlvbihjb250YWluZXJDbGFzcywgdGV4dCwgdHlwZSkge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gJzxkaXYgY2xhc3M9XCInICsgY29udGFpbmVyQ2xhc3MgKyAnXCIgZGF0YS10eXBlPVwiJyArIHR5cGUgKyAnXCI+JztcblxuICAgICAgICAvL3VwXG4gICAgICAgIGNvbnRhaW5lciArPSB0aGlzLnJlbmRlclRpbWVQaWNrZXJVcEJ1dHRvbih0eXBlKTtcbiAgICAgICAgLy90ZXh0XG4gICAgICAgIGNvbnRhaW5lciArPSB0ZXh0O1xuICAgICAgICAvL2Rvd25cbiAgICAgICAgY29udGFpbmVyICs9IHRoaXMucmVuZGVyVGltZVBpY2tlckRvd25CdXR0b24odHlwZSk7XG5cbiAgICAgICAgLy9lbmRcbiAgICAgICAgY29udGFpbmVyICs9ICc8L2Rpdj4nO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfSxcblxuICAgIHJlbmRlclRpbWVQaWNrZXJVcEJ1dHRvbjogZnVuY3Rpb24odHlwZSkge1xuICAgICAgICB2YXIgYXJpYUxhYmVsID0gJyc7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGFyaWFMYWJlbCA9IHRoaXMub3B0aW9ucy5sb2NhbGUubmV4dEhvdXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgYXJpYUxhYmVsID0gdGhpcy5vcHRpb25zLmxvY2FsZS5uZXh0TWludXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGFyaWFMYWJlbCA9IHRoaXMub3B0aW9ucy5sb2NhbGUubmV4dFNlY29uZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBhcmlhTGFiZWwgPSB0aGlzLm9wdGlvbnMubG9jYWxlLm5leHRNaWxsaXNlY29uZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBhcmlhTGFiZWwgPSB0aGlzLm9wdGlvbnMubG9jYWxlLmFtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBhcmlhTGFiZWwgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCInICsgYXJpYUxhYmVsICsgJ1wiIGNsYXNzPVwidWktcGlja2VyLXVwXCIgdGFiaW5kZXg9XCIwXCI+JyArXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ1aS1pY29uIHVpLWljb24tY2FyYXQtMS1uXCI+PC9zcGFuPicgK1xuICAgICAgICAgICAgJzwvYnV0dG9uPic7XG4gICAgfSxcblxuICAgIHJlbmRlclRpbWVQaWNrZXJEb3duQnV0dG9uOiBmdW5jdGlvbih0eXBlKSB7XG4gICAgICAgIHZhciBhcmlhTGFiZWwgPSAnJztcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgYXJpYUxhYmVsID0gdGhpcy5vcHRpb25zLmxvY2FsZS5wcmV2SG91cjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBhcmlhTGFiZWwgPSB0aGlzLm9wdGlvbnMubG9jYWxlLnByZXZNaW51dGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgYXJpYUxhYmVsID0gdGhpcy5vcHRpb25zLmxvY2FsZS5wcmV2U2Vjb25kO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGFyaWFMYWJlbCA9IHRoaXMub3B0aW9ucy5sb2NhbGUucHJldk1pbGxpc2Vjb25kO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGFyaWFMYWJlbCA9IHRoaXMub3B0aW9ucy5sb2NhbGUucG07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGFyaWFMYWJlbCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cIicgKyBhcmlhTGFiZWwgKyAnXCIgY2xhc3M9XCJ1aS1waWNrZXItZG93blwiIHRhYmluZGV4PVwiMFwiPicgK1xuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidWktaWNvbiB1aS1pY29uLWNhcmF0LTEtc1wiPjwvc3Bhbj4nICtcbiAgICAgICAgICAgICc8L2J1dHRvbj4nO1xuICAgIH0sXG5cbiAgICBnZXRDbGFzc2VzVG9BZGQ6IGZ1bmN0aW9uKGNsYXNzZXMpIHtcbiAgICAgICAgdmFyIF9jbGFzc2VzID0gJyc7XG4gICAgICAgICQuZWFjaChjbGFzc2VzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBfY2xhc3NlcyArPSAnICcgKyBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBfY2xhc3NlcztcbiAgICB9LFxuXG4gICAgdG9JU09EYXRlU3RyaW5nOiBmdW5jdGlvbihkYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSAtIChkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKTtcbiAgICB9LFxuXG4gICAgX2JpbmRFdmVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICAvLyAjMTIzODUgcmVhZG9ubHkgaW5wdXQgc2hvdWxkIG5vdCBhbGxvdyBhbnkgZXZlbnRzXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuaW5saW5lKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0ZmllbGQub2ZmKCdmb2N1cy5kYXRlUGlja2VyIGJsdXIuZGF0ZVBpY2tlciBjaGFuZ2UuZGF0ZVBpY2tlciBrZXlkb3duLmRhdGVQaWNrZXIgaW5wdXQuZGF0ZVBpY2tlciBjbGljay5kYXRlUGlja2VyJylcbiAgICAgICAgICAgICAgICAub24oJ2ZvY3VzLmRhdGVQaWNrZXInLCB0aGlzLm9uSW5wdXRGb2N1cy5iaW5kKCR0aGlzKSlcbiAgICAgICAgICAgICAgICAub24oJ2JsdXIuZGF0ZVBpY2tlcicsIHRoaXMub25JbnB1dEJsdXIuYmluZCgkdGhpcykpXG4gICAgICAgICAgICAgICAgLm9uKCdjaGFuZ2UuZGF0ZVBpY2tlcicsIHRoaXMub25JbnB1dENoYW5nZS5iaW5kKCR0aGlzKSlcbiAgICAgICAgICAgICAgICAub24oJ2tleWRvd24uZGF0ZVBpY2tlcicsIHRoaXMub25JbnB1dEtleURvd24uYmluZCgkdGhpcykpXG4gICAgICAgICAgICAgICAgLm9uKCdpbnB1dC5kYXRlUGlja2VyJywgdGhpcy5vblVzZXJJbnB1dC5iaW5kKCR0aGlzKSlcbiAgICAgICAgICAgICAgICAub24oJ2NsaWNrLmRhdGVQaWNrZXInLCB0aGlzLm9uSW5wdXRDbGljay5iaW5kKCR0aGlzKSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRyaWdnZXJCdXR0b24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJCdXR0b24ub2ZmKCdjbGljay5kYXRlUGlja2VyLXRyaWdnZXJCdXR0b24nKS5vbignY2xpY2suZGF0ZVBpY2tlci10cmlnZ2VyQnV0dG9uJywgdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQoJHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGFuZWwub2ZmKCdjbGljay5kYXRlUGlja2VyIGtleWRvd24uZGF0ZVBpY2tlcicpXG4gICAgICAgICAgICAub24oJ2NsaWNrLmRhdGVQaWNrZXInLCB0aGlzLm9uUGFuZWxDbGljay5iaW5kKCR0aGlzKSlcbiAgICAgICAgICAgIC5vbigna2V5ZG93bi5kYXRlUGlja2VyJywgdGhpcy5vblBhbmVsS2V5RG93bi5iaW5kKCR0aGlzKSk7XG5cbiAgICAgICAgdmFyIG5hdkJhY2t3YXJkU2VsZWN0b3IgPSAnLnVpLWRhdGVwaWNrZXItaGVhZGVyID4gLnVpLWRhdGVwaWNrZXItcHJldicsXG4gICAgICAgICAgICBuYXZGb3J3YXJkU2VsZWN0b3IgPSAnLnVpLWRhdGVwaWNrZXItaGVhZGVyID4gLnVpLWRhdGVwaWNrZXItbmV4dCc7XG4gICAgICAgIHRoaXMucGFuZWwub2ZmKCdjbGljay5kYXRlUGlja2VyLW5hdkJhY2t3YXJkJywgbmF2QmFja3dhcmRTZWxlY3RvcilcbiAgICAgICAgICAgIC5vbignY2xpY2suZGF0ZVBpY2tlci1uYXZCYWNrd2FyZCcsIG5hdkJhY2t3YXJkU2VsZWN0b3IsIG51bGwsIHRoaXMubmF2QmFja3dhcmQuYmluZCgkdGhpcykpO1xuICAgICAgICB0aGlzLnBhbmVsLm9mZignY2xpY2suZGF0ZVBpY2tlci1uYXZGb3J3YXJkJywgbmF2Rm9yd2FyZFNlbGVjdG9yKVxuICAgICAgICAgICAgLm9uKCdjbGljay5kYXRlUGlja2VyLW5hdkZvcndhcmQnLCBuYXZGb3J3YXJkU2VsZWN0b3IsIG51bGwsIHRoaXMubmF2Rm9yd2FyZC5iaW5kKCR0aGlzKSk7XG5cbiAgICAgICAgdmFyIG1vbnRoTmF2aWdhdG9yU2VsZWN0b3IgPSAnLnVpLWRhdGVwaWNrZXItaGVhZGVyID4gLnVpLWRhdGVwaWNrZXItdGl0bGUgPiAudWktZGF0ZXBpY2tlci1tb250aCcsXG4gICAgICAgICAgICB5ZWFyTmF2aWdhdG9yU2VsZWN0b3IgPSAnLnVpLWRhdGVwaWNrZXItaGVhZGVyID4gLnVpLWRhdGVwaWNrZXItdGl0bGUgPiAudWktZGF0ZXBpY2tlci15ZWFyJztcbiAgICAgICAgdGhpcy5wYW5lbC5vZmYoJ2NoYW5nZS5kYXRlUGlja2VyLW1vbnRoTmF2JywgbW9udGhOYXZpZ2F0b3JTZWxlY3RvcilcbiAgICAgICAgICAgIC5vbignY2hhbmdlLmRhdGVQaWNrZXItbW9udGhOYXYnLCBtb250aE5hdmlnYXRvclNlbGVjdG9yLCBudWxsLCB0aGlzLm9uTW9udGhEcm9wZG93bkNoYW5nZS5iaW5kKCR0aGlzKSk7XG4gICAgICAgIHRoaXMucGFuZWwub2ZmKCdjaGFuZ2UuZGF0ZVBpY2tlci15ZWFybmF2IGtleWRvd24uZGF0ZVBpY2tlci15ZWFybmF2JywgeWVhck5hdmlnYXRvclNlbGVjdG9yKVxuICAgICAgICAgICAgLm9uKCdjaGFuZ2UuZGF0ZVBpY2tlci15ZWFybmF2JywgeWVhck5hdmlnYXRvclNlbGVjdG9yLCBudWxsLCB0aGlzLm9uWWVhcklucHV0Q2hhbmdlLmJpbmQoJHRoaXMpKVxuICAgICAgICAgICAgLm9uKCdrZXlkb3duLmRhdGVQaWNrZXIteWVhcm5hdicsIHllYXJOYXZpZ2F0b3JTZWxlY3RvciwgbnVsbCwgZnVuY3Rpb24oZXZlbnQpIHskdGhpcy5vblRpbWVJbnB1dEtleURvd24oZXZlbnQpO30pO1xuXG4gICAgICAgIHZhciBtb250aFZpZXdNb250aFNlbGVjdG9yID0gJy51aS1tb250aHBpY2tlciA+IC51aS1tb250aHBpY2tlci1tb250aCc7XG4gICAgICAgIHRoaXMucGFuZWwub2ZmKCdjbGljay5kYXRlUGlja2VyLW1vbnRoVmlld01vbnRoJywgbW9udGhWaWV3TW9udGhTZWxlY3Rvcikub24oJ2NsaWNrLmRhdGVQaWNrZXItbW9udGhWaWV3TW9udGgnLCBtb250aFZpZXdNb250aFNlbGVjdG9yLCBudWxsLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkdGhpcy5vbk1vbnRoU2VsZWN0KGUsICQodGhpcykuaW5kZXgoKSk7XG4gICAgICAgIH0pLm9uKCdrZXlkb3duLmRhdGVQaWNrZXItbW9udGhWaWV3TW9udGgnLCBtb250aFZpZXdNb250aFNlbGVjdG9yLCBudWxsLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgJHRoaXMub25Nb250aEtleURvd24oZXZlbnQsICQodGhpcykuaW5kZXgoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB0aW1lU2VsZWN0b3IgPSAnLnVpLWhvdXItcGlja2VyID4gYnV0dG9uLCAgLnVpLW1pbnV0ZS1waWNrZXIgPiBidXR0b24sIC51aS1zZWNvbmQtcGlja2VyID4gYnV0dG9uLCAudWktbWlsbGlzZWNvbmQtcGlja2VyID4gYnV0dG9uJyxcbiAgICAgICAgICAgIGFtcG1TZWxlY3RvciA9ICcudWktYW1wbS1waWNrZXIgPiBidXR0b24nO1xuICAgICAgICB0aGlzLnBhbmVsLm9mZignbW91c2Vkb3duLnRpbWVwaWNrZXIgbW91c2V1cC50aW1lcGlja2VyIG1vdXNlb3V0LnRpbWVwaWNrZXIga2V5ZG93bi50aW1lcGlja2VyIGtleXVwLnRpbWVwaWNrZXIgY2xpY2sudGltZXBpY2tlci1hbXBtJywgdGltZVNlbGVjdG9yKS5vZmYoJ2NsaWNrLmRhdGVQaWNrZXItYW1wbScsIGFtcG1TZWxlY3RvcilcbiAgICAgICAgICAgIC5vbignbW91c2Vkb3duLnRpbWVwaWNrZXIga2V5ZG93bi50aW1lcGlja2VyJywgdGltZVNlbGVjdG9yLCBudWxsLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBidXR0b24gPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbCA9IGJ1dHRvbi5wYXJlbnQoKTtcblxuICAgICAgICAgICAgICAgIHZhciBpc0FjdGlvbktleSA9IFByaW1lRmFjZXMudXRpbHMuaXNBY3Rpb25LZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGlmICghZXZlbnQua2V5IHx8IGlzQWN0aW9uS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLm9uVGltZVBpY2tlckVsZW1lbnRNb3VzZURvd24oZXZlbnQsIHBhcnNlSW50KHBhcmVudEVsLmRhdGEoJ3R5cGUnKSwgMTApLCBidXR0b24uaGFzQ2xhc3MoJ3VpLXBpY2tlci11cCcpID8gMSA6IC0xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZXVwLnRpbWVwaWNrZXIga2V5dXAudGltZXBpY2tlcicsIHRpbWVTZWxlY3RvciwgbnVsbCwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5vblRpbWVQaWNrZXJFbGVtZW50TW91c2VVcChldmVudCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW91dC50aW1lcGlja2VyJywgdGltZVNlbGVjdG9yLCBudWxsLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkdGhpcy50aW1lUGlja2VyVGltZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMub25UaW1lUGlja2VyRWxlbWVudE1vdXNlVXAoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ2NsaWNrLnRpbWVwaWNrZXItYW1wbScsIGFtcG1TZWxlY3RvciwgbnVsbCwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy50b2dnbGVBbVBtKGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudGltZUlucHV0KSB7XG4gICAgICAgICAgICB0aGlzLnBhbmVsLm9mZignZm9jdXMnLCAnLnVpLWhvdXItcGlja2VyIGlucHV0Jykub24oJ2ZvY3VzJywgJy51aS1ob3VyLXBpY2tlciBpbnB1dCcsIG51bGwsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgJHRoaXMub2xkSG91cnMgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgfSkub2ZmKCdmb2N1cycsICcudWktbWludXRlLXBpY2tlciBpbnB1dCcpLm9uKCdmb2N1cycsICcudWktbWludXRlLXBpY2tlciBpbnB1dCcsIG51bGwsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgJHRoaXMub2xkTWludXRlcyA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB9KS5vZmYoJ2ZvY3VzJywgJy51aS1zZWNvbmQtcGlja2VyIGlucHV0Jykub24oJ2ZvY3VzJywgJy51aS1zZWNvbmQtcGlja2VyIGlucHV0JywgbnVsbCwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5vbGRTZWNvbmRzID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIH0pLm9mZignZm9jdXMnLCAnLnVpLW1pbGxpc2Vjb25kLXBpY2tlciBpbnB1dCcpLm9uKCdmb2N1cycsICcudWktbWlsbGlzZWNvbmQtcGlja2VyIGlucHV0JywgbnVsbCwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5vbGRNaWxsaXNlY29uZHMgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgfSkub2ZmKCdjaGFuZ2UnLCAnLnVpLWhvdXItcGlja2VyIGlucHV0Jykub24oJ2NoYW5nZScsICcudWktaG91ci1waWNrZXIgaW5wdXQnLCBudWxsLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICR0aGlzLmhhbmRsZUhvdXJzSW5wdXQodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgfSkub2ZmKCdrZXlkb3duJywgJy51aS1ob3VyLXBpY2tlciBpbnB1dCcpLm9uKCdrZXlkb3duJywgJy51aS1ob3VyLXBpY2tlciBpbnB1dCcsIG51bGwsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgJHRoaXMub25UaW1lSW5wdXRLZXlEb3duKGV2ZW50KTtcbiAgICAgICAgICAgIH0pLm9mZignY2hhbmdlJywgJy51aS1taW51dGUtcGlja2VyIGlucHV0Jykub24oJ2NoYW5nZScsICcudWktbWludXRlLXBpY2tlciBpbnB1dCcsIG51bGwsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgJHRoaXMuaGFuZGxlTWludXRlc0lucHV0KHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgIH0pLm9mZigna2V5ZG93bicsICcudWktbWludXRlLXBpY2tlciBpbnB1dCcpLm9uKCdrZXlkb3duJywgJy51aS1taW51dGUtcGlja2VyIGlucHV0JywgbnVsbCwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5vblRpbWVJbnB1dEtleURvd24oZXZlbnQpO1xuICAgICAgICAgICAgfSkub2ZmKCdjaGFuZ2UnLCAnLnVpLXNlY29uZC1waWNrZXIgaW5wdXQnKS5vbignY2hhbmdlJywgJy51aS1zZWNvbmQtcGlja2VyIGlucHV0JywgbnVsbCwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5oYW5kbGVTZWNvbmRzSW5wdXQodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgfSkub2ZmKCdrZXlkb3duJywgJy51aS1zZWNvbmQtcGlja2VyIGlucHV0Jykub24oJ2tleWRvd24nLCAnLnVpLXNlY29uZC1waWNrZXIgaW5wdXQnLCBudWxsLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICR0aGlzLm9uVGltZUlucHV0S2V5RG93bihldmVudCk7XG4gICAgICAgICAgICB9KS5vZmYoJ2NoYW5nZScsICcudWktbWlsbGlzZWNvbmQtcGlja2VyIGlucHV0Jykub24oJ2NoYW5nZScsICcudWktbWlsbGlzZWNvbmQtcGlja2VyIGlucHV0JywgbnVsbCwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5oYW5kbGVNaWxsaXNlY29uZHNJbnB1dCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICB9KS5vZmYoJ2tleWRvd24nLCAnLnVpLW1pbGxpc2Vjb25kLXBpY2tlciBpbnB1dCcpLm9uKCdrZXlkb3duJywgJy51aS1taWxsaXNlY29uZC1waWNrZXIgaW5wdXQnLCBudWxsLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICR0aGlzLm9uVGltZUlucHV0S2V5RG93bihldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b2RheUJ1dHRvblNlbGVjdG9yID0gJy51aS1kYXRlcGlja2VyLWJ1dHRvbmJhciAudWktdG9kYXktYnV0dG9uJyxcbiAgICAgICAgICAgIGNsZWFyQnV0dG9uU2VsZWN0b3IgPSAnLnVpLWRhdGVwaWNrZXItYnV0dG9uYmFyIC51aS1jbGVhci1idXR0b24nO1xuICAgICAgICB0aGlzLnBhbmVsLm9mZignY2xpY2suZGF0ZVBpY2tlci10b2RheUJ1dHRvbicsIHRvZGF5QnV0dG9uU2VsZWN0b3IpLm9uKCdjbGljay5kYXRlUGlja2VyLXRvZGF5QnV0dG9uJywgdG9kYXlCdXR0b25TZWxlY3RvciwgbnVsbCwgdGhpcy5vblRvZGF5QnV0dG9uQ2xpY2suYmluZCgkdGhpcykpO1xuICAgICAgICB0aGlzLnBhbmVsLm9mZignY2xpY2suZGF0ZVBpY2tlci1jbGVhckJ1dHRvbicsIGNsZWFyQnV0dG9uU2VsZWN0b3IpLm9uKCdjbGljay5kYXRlUGlja2VyLWNsZWFyQnV0dG9uJywgY2xlYXJCdXR0b25TZWxlY3RvciwgbnVsbCwgdGhpcy5vbkNsZWFyQnV0dG9uQ2xpY2suYmluZCgkdGhpcykpO1xuXG4gICAgICAgIHZhciBkYXRlU2VsZWN0b3IgPSAnLnVpLWRhdGVwaWNrZXItY2FsZW5kYXIgdGQgYSc7XG4gICAgICAgIHRoaXMucGFuZWwub2ZmKCdjbGljay5kYXRlUGlja2VyLWRhdGUga2V5ZG93bi5kYXRlUGlja2VyLWRhdGUnLCBkYXRlU2VsZWN0b3IpXG4gICAgICAgICAgICAub24oJ2NsaWNrLmRhdGVQaWNrZXItZGF0ZScsIGRhdGVTZWxlY3RvciwgbnVsbCwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJHRoaXMubW9udGhzTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRheUVsID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGVuZGFySW5kZXggPSBkYXlFbC5jbG9zZXN0KCcudWktZGF0ZXBpY2tlci1ncm91cCcpLmluZGV4KCksXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWVrSW5kZXggPSBkYXlFbC5jbG9zZXN0KCd0cicpLmluZGV4KCksXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlJbmRleCA9IGRheUVsLmNsb3Nlc3QoJ3RkJykuaW5kZXgoKSAtICgkdGhpcy5vcHRpb25zLnNob3dXZWVrID8gMSA6IDApO1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5vbkRhdGVTZWxlY3QoZXZlbnQsICR0aGlzLm1vbnRoc01ldGFkYXRhW2NhbGVuZGFySW5kZXhdLmRhdGVzW3dlZWtJbmRleF1bZGF5SW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5vbigna2V5ZG93bi5kYXRlUGlja2VyLWRhdGUnLCBkYXRlU2VsZWN0b3IsIG51bGwsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGRheUVsID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgY2FsZW5kYXJJbmRleCA9IGRheUVsLmNsb3Nlc3QoJy51aS1kYXRlcGlja2VyLWdyb3VwJykuaW5kZXgoKSxcbiAgICAgICAgICAgICAgICAgICAgd2Vla0luZGV4ID0gZGF5RWwuY2xvc2VzdCgndHInKS5pbmRleCgpLFxuICAgICAgICAgICAgICAgICAgICBkYXlJbmRleCA9IGRheUVsLmNsb3Nlc3QoJ3RkJykuaW5kZXgoKSAtICgkdGhpcy5vcHRpb25zLnNob3dXZWVrID8gMSA6IDApO1xuICAgICAgICAgICAgICAgICR0aGlzLm9uRGF0ZUtleURvd24oZXZlbnQsICR0aGlzLm1vbnRoc01ldGFkYXRhW2NhbGVuZGFySW5kZXhdLmRhdGVzW3dlZWtJbmRleF1bZGF5SW5kZXhdKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBfYmluZFBhbmVsRXZlbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy52aWV3ID09PSAnd2VlaycpIHtcbiAgICAgICAgICAgIC8vIEFkZCBldmVudHMgdG8gaGlnaGxpZ2h0IHdob2xlIHdlZWtcbiAgICAgICAgICAgIHZhciByb3cgPSB0aGlzLnBhbmVsLmZpbmQoJy51aS1kYXRlcGlja2VyLWNhbGVuZGFyIHRyJyk7XG4gICAgICAgICAgICByb3cubW91c2Vtb3ZlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgndGQgYScpLmFkZENsYXNzKCd1aS1zdGF0ZS1ob3ZlcicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByb3cubW91c2VsZWF2ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ3RkIGEnKS5yZW1vdmVDbGFzcygndWktc3RhdGUtaG92ZXInKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBIaWdobGlnaHQgYWN0aXZlIHdlZWtcbiAgICAgICAgICAgIHZhciBhY3RpdmVSb3cgPSB0aGlzLnBhbmVsLmZpbmQoJy51aS1zdGF0ZS1hY3RpdmUnKS5jbG9zZXN0KCd0cicpO1xuICAgICAgICAgICAgYWN0aXZlUm93LmZpbmQoJ3RkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdhJykuYWRkQ2xhc3MoJ3VpLXN0YXRlLWFjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25EYXRlS2V5RG93bjogZnVuY3Rpb24oZXZlbnQsIGRhdGVNZXRhKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQgfHwgIWRhdGVNZXRhLnNlbGVjdGFibGUpIHtcbiAgICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY3VycmVudEVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICB2YXIgJHRhYmJhYmxlRWxlbWVudHMgPSAkdGhpcy5wYW5lbC5maW5kKCdhOnRhYmJhYmxlJyk7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSAkdGFiYmFibGVFbGVtZW50cy5pbmRleChjdXJyZW50RWxlbWVudCk7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgICAgY2FzZSAnTnVtcGFkRW50ZXInOlxuICAgICAgICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICAgICAgICAgICR0aGlzLm9uRGF0ZVNlbGVjdChldmVudCwgZGF0ZU1ldGEpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICAgICAgLy8gTW92ZXMgZm9jdXMgdG8gdGhlIHByZXZpb3VzIGRheS5cbiAgICAgICAgICAgICAgICB2YXIgcHJldkluZGV4ID0gKGN1cnJlbnRJbmRleCAtIDEpICUgJHRhYmJhYmxlRWxlbWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICR0YWJiYWJsZUVsZW1lbnRzLmVxKHByZXZJbmRleCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAgICAgICAvLyBNb3ZlcyBmb2N1cyB0byB0aGUgbmV4dCBkYXkuXG4gICAgICAgICAgICAgICAgdmFyIG5leHRJbmRleCA9IChjdXJyZW50SW5kZXggKyAxKSAlICR0YWJiYWJsZUVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAkdGFiYmFibGVFbGVtZW50cy5lcShuZXh0SW5kZXgpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgICAgICAvLyBNb3ZlcyBmb2N1cyB0byB0aGUgc2FtZSBkYXkgb2YgdGhlIG5leHQgd2Vlay5cbiAgICAgICAgICAgICAgICB2YXIgbmV4dEluZGV4ID0gKGN1cnJlbnRJbmRleCArIDcpICUgJHRhYmJhYmxlRWxlbWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmIChuZXh0SW5kZXggPCBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuZm9jdXNOZXh0SW50ZXJ2YWwoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHRhYmJhYmxlRWxlbWVudHMuZXEobmV4dEluZGV4KS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICAvLyBNb3ZlcyBmb2N1cyB0byB0aGUgc2FtZSBkYXkgb2YgdGhlIHByZXZpb3VzIHdlZWsuXG4gICAgICAgICAgICAgICAgdmFyIG5leHRJbmRleCA9IChjdXJyZW50SW5kZXggLSA3KSAlICR0YWJiYWJsZUVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAobmV4dEluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5mb2N1c1ByZXZpb3VzSW50ZXJ2YWwoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHRhYmJhYmxlRWxlbWVudHMuZXEobmV4dEluZGV4KS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCB3aXRoaW4gdGhlIHJvd1xuICAgICAgICAgICAgICAgIHZhciByb3cgPSBjdXJyZW50RWxlbWVudC5jbG9zZXN0KCd0cicpO1xuICAgICAgICAgICAgICAgICR0aGlzLmZvY3VzRGF0ZShyb3csICdhOnZpc2libGU6Zmlyc3QnKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdFbmQnOlxuICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIGxhc3QgZm9jdXNhYmxlIGVsZW1lbnQgd2l0aGluIHRoZSByb3dcbiAgICAgICAgICAgICAgICB2YXIgcm93ID0gY3VycmVudEVsZW1lbnQuY2xvc2VzdCgndHInKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5mb2N1c0RhdGUocm93LCAnYTp2aXNpYmxlOmxhc3QnKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdQYWdlVXAnOlxuICAgICAgICAgICAgICAgICR0aGlzLmZvY3VzUHJldmlvdXNJbnRlcnZhbChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1BhZ2VEb3duJzpcbiAgICAgICAgICAgICAgICAkdGhpcy5mb2N1c05leHRJbnRlcnZhbChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIG9uTW9udGhLZXlEb3duOiBmdW5jdGlvbihldmVudCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjdXJyZW50RWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIHZhciAkdGFiYmFibGVFbGVtZW50cyA9ICR0aGlzLnBhbmVsLmZpbmQoJ2E6dGFiYmFibGUnKTtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9ICR0YWJiYWJsZUVsZW1lbnRzLmluZGV4KGN1cnJlbnRFbGVtZW50KTtcbiAgICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgICBjYXNlICdOdW1wYWRFbnRlcic6XG4gICAgICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgICAgICAgJHRoaXMub25Nb250aFNlbGVjdChldmVudCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICAgICAgLy8gTW92ZXMgZm9jdXMgdG8gdGhlIHByZXZpb3VzIG1vbnRoLlxuICAgICAgICAgICAgICAgIHZhciBwcmV2SW5kZXggPSAoY3VycmVudEluZGV4IC0gMSkgJSAkdGFiYmFibGVFbGVtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgJHRhYmJhYmxlRWxlbWVudHMuZXEocHJldkluZGV4KS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIC8vIE1vdmVzIGZvY3VzIHRvIHRoZSBuZXh0IG1vbnRoLlxuICAgICAgICAgICAgICAgIHZhciBuZXh0SW5kZXggPSAoY3VycmVudEluZGV4ICsgMSkgJSAkdGFiYmFibGVFbGVtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgJHRhYmJhYmxlRWxlbWVudHMuZXEobmV4dEluZGV4KS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAgICAgLy8gTW92ZXMgZm9jdXMgdG8gdGhlIG5leHQgcm93XG4gICAgICAgICAgICAgICAgdmFyIG5leHRJbmRleCA9IChjdXJyZW50SW5kZXggKyAzKSAlICR0YWJiYWJsZUVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAobmV4dEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmZvY3VzTmV4dEludGVydmFsKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICR0YWJiYWJsZUVsZW1lbnRzLmVxKG5leHRJbmRleCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICAgICAgLy8gTW92ZXMgZm9jdXMgdG8gcHJldmlvdXMgcm93XG4gICAgICAgICAgICAgICAgdmFyIG5leHRJbmRleCA9IChjdXJyZW50SW5kZXggLSAzKSAlICR0YWJiYWJsZUVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAobmV4dEluZGV4IDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuZm9jdXNQcmV2aW91c0ludGVydmFsKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICR0YWJiYWJsZUVsZW1lbnRzLmVxKG5leHRJbmRleCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgZmlyc3QgbW9udGhcbiAgICAgICAgICAgICAgICAkdGhpcy5mb2N1c0RhdGUoJHRoaXMucGFuZWwsICdhOnZpc2libGU6Zmlyc3QnKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdFbmQnOlxuICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIGxhc3QgbW9udGhcbiAgICAgICAgICAgICAgICAkdGhpcy5mb2N1c0RhdGUoJHRoaXMucGFuZWwsICdhOnZpc2libGU6bGFzdCcpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ1BhZ2VVcCc6XG4gICAgICAgICAgICAgICAgJHRoaXMuZm9jdXNQcmV2aW91c0ludGVydmFsKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnUGFnZURvd24nOlxuICAgICAgICAgICAgICAgICR0aGlzLmZvY3VzTmV4dEludGVydmFsKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgb25UaW1lSW5wdXRLZXlEb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoUHJpbWVGYWNlcy5lbnYuYW5kcm9pZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgY2FzZSAnVGFiJzpcbiAgICAgICAgICAgIGNhc2UgJ0RlbGV0ZSc6XG4gICAgICAgICAgICBjYXNlICdCYWNrc3BhY2UnOlxuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZXNlIGtleXNcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICBjYXNlICcwJzpcbiAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgY2FzZSAnMic6XG4gICAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgIGNhc2UgJzQnOlxuICAgICAgICAgICAgY2FzZSAnNSc6XG4gICAgICAgICAgICBjYXNlICc2JzpcbiAgICAgICAgICAgIGNhc2UgJzcnOlxuICAgICAgICAgICAgY2FzZSAnOCc6XG4gICAgICAgICAgICBjYXNlICc5JzpcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IGlucHV0LnZhbHVlICsgZXZlbnQua2V5O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIGlucHV0IGlzIGZvciB5ZWFyIGFuZCBhbHJlYWR5IGZ1bGwsIHJlc2V0IHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0Lm1heExlbmd0aCA9PT0gNCAmJiBpbnB1dC52YWx1ZS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBldmVudC5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCBhZGRpbmcgbW9yZSBjaGFyYWN0ZXJzIGlmIGlucHV0IGlzIGF0IG1heCBsZW5ndGhcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID49IGlucHV0Lm1heExlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBGb3IgeWVhciBpbnB1dCwgb25seSBldmFsdWF0ZSBpZiB0aGUgaW5wdXQgaXMgNCBkaWdpdHMgbG9uZ1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5tYXhMZW5ndGggPT09IDQgJiYgbmV3VmFsdWUubGVuZ3RoIDwgNCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFBhcnNlIG5ldyB2YWx1ZSBhbmQgbWluL21heCBsaW1pdHMgZm9yIGNvbXBhcmlzb25cbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHBhcnNlSW50KG5ld1ZhbHVlLCAxMCk7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0TWluID0gIHBhcnNlSW50KGlucHV0Lm1pbiwgMTApO1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dE1heCA9ICBwYXJzZUludChpbnB1dC5tYXgsIDEwKTtcblxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgaW5wdXQgaWYgbmV3IHZhbHVlIGlzIG91dHNpZGUgdGhlIG1pbi9tYXggcmFuZ2VcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4obmV3VmFsdWUpIHx8IG5ld1ZhbHVlIDwgaW5wdXRNaW4gfHwgbmV3VmFsdWUgPiBpbnB1dE1heCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmb2N1c0RhdGU6IGZ1bmN0aW9uKGpxLCBzZWxlY3Rvcikge1xuICAgICAgICBpZiAoIWpxIHx8ICFzZWxlY3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmb2N1c2FibGUgPSBqcS5maW5kKHNlbGVjdG9yKTtcbiAgICAgICAgLy8gRm9jdXMgb24gdGhlIGZvdW5kIGVsZW1lbnRcbiAgICAgICAgaWYgKGZvY3VzYWJsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb2N1c2FibGUudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmb2N1c05leHRJbnRlcnZhbDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5uYXZGb3J3YXJkKGV2ZW50KTtcbiAgICAgICAgLy8gRmluZCB0aGUgZmlyc3QgZm9jdXNhYmxlIGRheSBvZiB0aGUgbW9udGhcbiAgICAgICAgdGhpcy5mb2N1c0RhdGUodGhpcy5wYW5lbCwgJ2E6dmlzaWJsZTpmaXJzdCcpO1xuICAgIH0sXG5cbiAgICBmb2N1c1ByZXZpb3VzSW50ZXJ2YWw6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHRoaXMubmF2QmFja3dhcmQoZXZlbnQpO1xuICAgICAgICAvLyBGaW5kIHRoZSBsYXN0IGZvY3VzYWJsZSBkYXkgb2YgdGhlIG1vbnRoXG4gICAgICAgIHRoaXMuZm9jdXNEYXRlKHRoaXMucGFuZWwsICdhOnZpc2libGU6bGFzdCcpO1xuICAgIH0sXG5cbiAgICBvbklucHV0Q2xpY2s6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5kYXRlcGlja2VyQ2xpY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5pc1BhbmVsVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAvLyAjMTE5MjggYWxsb3cgdGhlIGlucHV0IHRvIGJlIGNsaWNrZWQgYWdhaW4gdG8gY2xvc2UgcGFuZWwgYW5kIGFsbG93IHR5cGluZyBvZiBkYXRlXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0ZXBpY2tlckZvY3VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc2hvd09uRm9jdXMpIHtcbiAgICAgICAgICAgIC8vICMxMjM2MSBhbGxvdyB0aGUgaW5wdXQgdG8gYmUgY2xpY2tlZCBhZ2FpbiB0byBvcGVuIHRoZSBwYW5lbCBpZiBzaG93T25Gb2N1cyBpcyB0cnVlXG4gICAgICAgICAgICB0aGlzLnNob3dPdmVybGF5KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25JbnB1dEZvY3VzOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dPbkZvY3VzICYmICF0aGlzLmlzUGFuZWxWaXNpYmxlKCkgJiYgIXRoaXMuZGF0ZXBpY2tlckZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGVwaWNrZXJGb2N1cyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNob3dPdmVybGF5KClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9uRm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkZvY3VzLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5wdXRmaWVsZC5hZGRDbGFzcygndWktc3RhdGUtZm9jdXMnKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3MoJ3VpLWlucHV0d3JhcHBlci1mb2N1cycpO1xuICAgIH0sXG5cbiAgICBvbklucHV0Qmx1cjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vbkJsdXIgJiYgZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkJsdXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlucHV0ZmllbGQucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWZvY3VzJyk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNsYXNzKCd1aS1pbnB1dHdyYXBwZXItZm9jdXMnKTtcbiAgICB9LFxuXG4gICAgb25JbnB1dENoYW5nZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKCh0aGlzLm9wdGlvbnMuYXV0b01vbnRoRm9ybWF0IHx8ICF0aGlzLmlucHV0ZmllbGQudmFsKCkgfHwgdGhpcy5vcHRpb25zLnNob3dNaW5NYXhSYW5nZSkgJiYgdGhpcy5vcHRpb25zLm1vbnRoTmF2aWdhdG9yICYmIHRoaXMub3B0aW9ucy52aWV3ICE9PSAnbW9udGgnKSB7IFxuICAgICAgICAgICAgdmFyIHZpZXdNb250aCA9IHRoaXMudmlld0RhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgIHZpZXdNb250aCA9ICh0aGlzLmlzSW5NYXhZZWFyKCkgJiYgTWF0aC5taW4odGhpcy5vcHRpb25zLm1heERhdGUuZ2V0TW9udGgoKSwgdmlld01vbnRoKSkgfHwgKHRoaXMuaXNJbk1pblllYXIoKSAmJiBNYXRoLm1heCh0aGlzLm9wdGlvbnMubWluRGF0ZS5nZXRNb250aCgpLCB2aWV3TW9udGgpKSB8fCB2aWV3TW9udGg7XG4gICAgICAgICAgICB0aGlzLnZpZXdEYXRlLnNldE1vbnRoKHZpZXdNb250aCk7XG4gICAgICAgIH1cblxuICAgICAgICAhdGhpcy5vcHRpb25zLmtlZXBJbnZhbGlkICYmIHRoaXMuaW5wdXRmaWVsZC52YWwodGhpcy5nZXRWYWx1ZVRvUmVuZGVyKCkpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkNoYW5nZS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbklucHV0S2V5RG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dGZpZWxkLnZhbCh0aGlzLmdldFZhbHVlVG9SZW5kZXIoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93T3ZlcmxheSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXNjYXBlS2V5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvblBhbmVsS2V5RG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgIHRoaXMub25Fc2NhcGVLZXkoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uRXNjYXBlS2V5OiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgfSxcblxuICAgIG9uVXNlcklucHV0OiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICB2YXIgcmF3VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZUZyb21TdHJpbmcocmF3VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RlbChldmVudCwgdmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlld0RhdGUoZXZlbnQsIHZhbHVlLmxlbmd0aCA/IHZhbHVlWzBdIDogdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIC8vaW52YWxpZCBkYXRlIC0gVE9ETzogVXBkYXRlIGFjY29yZGluZyB0byBQcmltZU5HL1JlYWN0L1Z1ZSBsaWJyYXJ5IGluIGZ1dHVyZSB2ZXJzaW9ucy5cbiAgICAgICAgICAgIC8vIHZhciB2YWx1ZSA9IHRoaXMub3B0aW9ucy5rZWVwSW52YWxpZCA/IHJhd1ZhbHVlIDogbnVsbDtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubWFzaykge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kZWwoZXZlbnQsIHJhd1ZhbHVlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9uSW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbklucHV0LmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uQnV0dG9uQ2xpY2s6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1BhbmVsVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dPdmVybGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25QYW5lbENsaWNrOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAodGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZXBpY2tlckNsaWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbk1vbnRoRHJvcGRvd25DaGFuZ2U6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBuZXdWaWV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMudmlld0RhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgbmV3Vmlld0RhdGUuc2V0RGF0ZSgxKTsgLy9hbHdheXMgc2V0IHRvIGZpcnN0IG9mIG1vbnRoXG4gICAgICAgIG5ld1ZpZXdEYXRlLnNldE1vbnRoKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9uTW9udGhDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbk1vbnRoQ2hhbmdlLmNhbGwodGhpcywgbmV3Vmlld0RhdGUuZ2V0TW9udGgoKSArIDEsIG5ld1ZpZXdEYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlVmlld0RhdGUoZXZlbnQsIG5ld1ZpZXdEYXRlKTtcbiAgICB9LFxuXG4gICAgb25ZZWFySW5wdXRDaGFuZ2U6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBuZXdWaWV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMudmlld0RhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgbmV3Vmlld0RhdGUuc2V0RnVsbFllYXIocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCkpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMub25ZZWFyQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMub25ZZWFyQ2hhbmdlLmNhbGwodGhpcywgbmV3Vmlld0RhdGUuZ2V0TW9udGgoKSwgbmV3Vmlld0RhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVWaWV3RGF0ZShldmVudCwgbmV3Vmlld0RhdGUpO1xuICAgIH0sXG5cbiAgICBvbk1vbnRoU2VsZWN0OiBmdW5jdGlvbihldmVudCwgbW9udGgpIHtcbiAgICAgICAgdGhpcy5vbkRhdGVTZWxlY3QoZXZlbnQsIHsgeWVhcjogdGhpcy52aWV3RGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aDogbW9udGgsIGRheTogMSwgc2VsZWN0YWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9LFxuXG4gICAgbmF2QmFja3dhcmQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdWaWV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMudmlld0RhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgbmV3Vmlld0RhdGUuc2V0RGF0ZSgxKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnZpZXcgPT09ICdkYXRlJyB8fCB0aGlzLm9wdGlvbnMudmlldyA9PT0gJ3dlZWsnKSB7XG4gICAgICAgICAgICBpZiAobmV3Vmlld0RhdGUuZ2V0TW9udGgoKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5ld1ZpZXdEYXRlLnNldE1vbnRoKDExLCAxKTtcbiAgICAgICAgICAgICAgICBuZXdWaWV3RGF0ZS5zZXRGdWxsWWVhcihuZXdWaWV3RGF0ZS5nZXRGdWxsWWVhcigpIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdWaWV3RGF0ZS5zZXRNb250aChuZXdWaWV3RGF0ZS5nZXRNb250aCgpIC0gMSwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHByZXZpb3VzIChjaGVjayBmaXJzdCBkYXkgb2YgbW9udGggYXQgMDA6MDA6MDApXG4gICAgICAgICAgICBuZXdWaWV3RGF0ZSA9IHRoaXMudHJ1bmNhdGVEYXRlKG5ld1ZpZXdEYXRlKTtcblxuICAgICAgICAgICAgLy8gIzU5NjcgY2hlY2sgaWYgbW9udGggY2FuIGJlIG5hdmlnYXRlZCB0byBieSBjaGVja2luZyBsYXN0IGRheSBpbiBtb250aFxuICAgICAgICAgICAgdmFyIHRlc3REYXRlID0gbmV3IERhdGUobmV3Vmlld0RhdGUuZ2V0VGltZSgpKSxcbiAgICAgICAgICAgICAgICBtaW5EYXRlID0gdGhpcy5vcHRpb25zLm1pbkRhdGU7XG4gICAgICAgICAgICB0ZXN0RGF0ZS5zZXRNb250aCh0ZXN0RGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICB0ZXN0RGF0ZS5zZXRIb3VycygtMSk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dNaW5NYXhSYW5nZSAmJiBtaW5EYXRlICYmIG1pbkRhdGUgPiB0ZXN0RGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TmF2aWdhdGlvblN0YXRlKG5ld1ZpZXdEYXRlKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vbk1vbnRoQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uTW9udGhDaGFuZ2UuY2FsbCh0aGlzLCBuZXdWaWV3RGF0ZS5nZXRNb250aCgpICsgMSwgbmV3Vmlld0RhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5vcHRpb25zLnZpZXcgPT09ICdtb250aCcpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50WWVhciA9IG5ld1ZpZXdEYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICAgICAgbmV3WWVhciA9IGN1cnJlbnRZZWFyIC0gMTtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy55ZWFyTmF2aWdhdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1pblllYXIgPSBwYXJzZUludCh0aGlzLm9wdGlvbnMueWVhclJhbmdlLnNwbGl0KCc6JylbMF0sIDEwKTtcblxuICAgICAgICAgICAgICAgIGlmIChuZXdZZWFyIDwgbWluWWVhcikge1xuICAgICAgICAgICAgICAgICAgICBuZXdZZWFyID0gbWluWWVhcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5ld1ZpZXdEYXRlLnNldEZ1bGxZZWFyKG5ld1llYXIpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9uWWVhckNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vblllYXJDaGFuZ2UuY2FsbCh0aGlzLCBuZXdWaWV3RGF0ZS5nZXRNb250aCgpLCBuZXdWaWV3RGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlVmlld0RhdGUoZXZlbnQsIG5ld1ZpZXdEYXRlKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9LFxuXG4gICAgbmF2Rm9yd2FyZDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5ld1ZpZXdEYXRlID0gbmV3IERhdGUodGhpcy52aWV3RGF0ZS5nZXRUaW1lKCkpO1xuICAgICAgICBuZXdWaWV3RGF0ZS5zZXREYXRlKDEpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudmlldyA9PT0gJ2RhdGUnIHx8IHRoaXMub3B0aW9ucy52aWV3ID09PSAnd2VlaycpIHtcbiAgICAgICAgICAgIGlmIChuZXdWaWV3RGF0ZS5nZXRNb250aCgpID09PSAxMSkge1xuICAgICAgICAgICAgICAgIG5ld1ZpZXdEYXRlLnNldE1vbnRoKDAsIDEpO1xuICAgICAgICAgICAgICAgIG5ld1ZpZXdEYXRlLnNldEZ1bGxZZWFyKG5ld1ZpZXdEYXRlLmdldEZ1bGxZZWFyKCkgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1ZpZXdEYXRlLnNldE1vbnRoKG5ld1ZpZXdEYXRlLmdldE1vbnRoKCkgKyAxLCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbmV4dCAoY2hlY2sgbGFzdCBkYXkgb2YgbW9udGgpXG4gICAgICAgICAgICBuZXdWaWV3RGF0ZSA9IHRoaXMudHJ1bmNhdGVEYXRlKG5ld1ZpZXdEYXRlKTtcblxuICAgICAgICAgICAgLy8gIzU5NjcgY2hlY2sgaWYgbW9udGggY2FuIGJlIG5hdmlnYXRlZCB0byBieSBjaGVja2luZyBmaXJzdCBkYXkgbmV4dCBtb250aFxuICAgICAgICAgICAgdmFyIG1heERhdGUgPSB0aGlzLm9wdGlvbnMubWF4RGF0ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd01pbk1heFJhbmdlICYmIG1heERhdGUgJiYgbWF4RGF0ZSA8IG5ld1ZpZXdEYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXROYXZpZ2F0aW9uU3RhdGUobmV3Vmlld0RhdGUpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9uTW9udGhDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub25Nb250aENoYW5nZS5jYWxsKHRoaXMsIG5ld1ZpZXdEYXRlLmdldE1vbnRoKCkgKyAxLCBuZXdWaWV3RGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLm9wdGlvbnMudmlldyA9PT0gJ21vbnRoJykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRZZWFyID0gbmV3Vmlld0RhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICBuZXdZZWFyID0gY3VycmVudFllYXIgKyAxO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnllYXJOYXZpZ2F0b3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF4WWVhciA9IHBhcnNlSW50KHRoaXMub3B0aW9ucy55ZWFyUmFuZ2Uuc3BsaXQoJzonKVsxXSwgMTApO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5ld1llYXIgPiBtYXhZZWFyKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1llYXIgPSBtYXhZZWFyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV3Vmlld0RhdGUuc2V0RnVsbFllYXIobmV3WWVhcik7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMub25ZZWFyQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uWWVhckNoYW5nZS5jYWxsKHRoaXMsIG5ld1ZpZXdEYXRlLmdldE1vbnRoKCksIG5ld1ZpZXdEYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVWaWV3RGF0ZShldmVudCwgbmV3Vmlld0RhdGUpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0sXG5cbiAgICBzZXROYXZpZ2F0aW9uU3RhdGU6IGZ1bmN0aW9uKG5ld1ZpZXdEYXRlKSB7XG4gICAgICAgIGlmICghbmV3Vmlld0RhdGUgfHwgIXRoaXMub3B0aW9ucy5zaG93TWluTWF4UmFuZ2UgfHwgdGhpcy5vcHRpb25zLnZpZXcgPT09ICdtb250aCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuYXZQcmV2ID0gdGhpcy5wYW5lbC5maW5kKCcudWktZGF0ZXBpY2tlci1oZWFkZXIgPiAudWktZGF0ZXBpY2tlci1wcmV2Jyk7XG4gICAgICAgIHZhciBuYXZOZXh0ID0gdGhpcy5wYW5lbC5maW5kKCcudWktZGF0ZXBpY2tlci1oZWFkZXIgPiAudWktZGF0ZXBpY2tlci1uZXh0Jyk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgbmF2UHJldi5hZGRDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIG5hdk5leHQuYWRkQ2xhc3MoJ3VpLXN0YXRlLWRpc2FibGVkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcmV2aW91c1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1pbkRhdGUpIHtcbiAgICAgICAgICAgIGxldCBmaXJzdERheU9mTW9udGggPSBuZXcgRGF0ZShuZXdWaWV3RGF0ZS5nZXRUaW1lKCkpO1xuXG4gICAgICAgICAgICBmaXJzdERheU9mTW9udGguc2V0TW9udGgoZmlyc3REYXlPZk1vbnRoLmdldE1vbnRoKCksIDEpO1xuICAgICAgICAgICAgZmlyc3REYXlPZk1vbnRoID0gdGhpcy50cnVuY2F0ZURhdGUoZmlyc3REYXlPZk1vbnRoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5taW5EYXRlID4gZmlyc3REYXlPZk1vbnRoKSB7XG4gICAgICAgICAgICAgICAgbmF2UHJldi5hZGRDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmF2UHJldi5yZW1vdmVDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIG5leHQgKGNoZWNrIGxhc3QgZGF5IG9mIG1vbnRoIGF0IDExOjU5OjU5KVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1heERhdGUpIHtcbiAgICAgICAgICAgIGxldCBsYXN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKG5ld1ZpZXdEYXRlLmdldFRpbWUoKSk7XG5cbiAgICAgICAgICAgIGxhc3REYXlPZk1vbnRoLnNldE1vbnRoKGxhc3REYXlPZk1vbnRoLmdldE1vbnRoKCkgKyAxLCAxKTtcbiAgICAgICAgICAgIGxhc3REYXlPZk1vbnRoID0gdGhpcy50cnVuY2F0ZURhdGUobGFzdERheU9mTW9udGgpO1xuICAgICAgICAgICAgbGFzdERheU9mTW9udGguc2V0U2Vjb25kcygtMSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWF4RGF0ZSA8IGxhc3REYXlPZk1vbnRoKSB7XG4gICAgICAgICAgICAgICAgbmF2TmV4dC5hZGRDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmF2TmV4dC5yZW1vdmVDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvblRpbWVQaWNrZXJFbGVtZW50TW91c2VEb3duOiBmdW5jdGlvbihldmVudCwgdHlwZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIC8vIG9ubHkgbGVmdCBidXR0b24sIEVudGVyIGFuZCBTcGFjZSBrZXkgYWxsb3dlZFxuICAgICAgICB2YXIgaXNBY3Rpb25LZXkgPSBQcmltZUZhY2VzLnV0aWxzLmlzQWN0aW9uS2V5KGV2ZW50KTtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZGlzYWJsZWQgJiYgKGV2ZW50LmJ1dHRvbiA9PT0gMCB8fCBpc0FjdGlvbktleSkpIHtcbiAgICAgICAgICAgIHZhciBpbnRlcnZhbCA9IGlzQWN0aW9uS2V5ID8gLTEgOiBudWxsO1xuICAgICAgICAgICAgdGhpcy5yZXBlYXQoZXZlbnQsIGludGVydmFsLCB0eXBlLCBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgaWYgKCFpc0FjdGlvbktleSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25UaW1lUGlja2VyRWxlbWVudE1vdXNlVXA6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyVGltZVBpY2tlclRpbWVyKCk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInKSByZXR1cm47XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMub25TZWxlY3QgJiYgdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vblNlbGVjdC5jYWxsKHRoaXMsIGV2ZW50LCB0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZXBlYXQ6IGZ1bmN0aW9uKGV2ZW50LCBpbnRlcnZhbCwgdHlwZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBpID0gaW50ZXJ2YWwgfHwgNTAwLFxuICAgICAgICAgICAgJHRoaXMgPSB0aGlzO1xuXG4gICAgICAgIGlmIChpbnRlcnZhbCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyVGltZVBpY2tlclRpbWVyKCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVQaWNrZXJUaW1lciA9IFByaW1lRmFjZXMucXVldWVUYXNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICR0aGlzLnJlcGVhdChldmVudCwgMTAwLCB0eXBlLCBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgfSwgaSk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAxKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluY3JlbWVudEhvdXIoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWNyZW1lbnRIb3VyKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50TWludXRlKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50TWludXRlKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50U2Vjb25kKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50U2Vjb25kKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50TWlsbGlzZWNvbmQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWNyZW1lbnRNaWxsaXNlY29uZChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY2xlYXJUaW1lUGlja2VyVGltZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy50aW1lUGlja2VyVGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVQaWNrZXJUaW1lcik7XG4gICAgICAgICAgICB0aGlzLnRpbWVQaWNrZXJUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZm9jdXNPdmVybGF5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGZvY3VzZWQgPSBudWxsO1xuICAgICAgICBpZiAoJHRoaXMub3B0aW9ucy52aWV3ID09PSAnbW9udGgnKSB7XG4gICAgICAgICAgICBmb2N1c2VkID0gJHRoaXMucGFuZWwuZmluZCgnYS51aS1tb250aHBpY2tlci1tb250aCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkdGhpcy5vcHRpb25zLnZpZXcgPT09ICdkYXRlJyB8fCAkdGhpcy5vcHRpb25zLnZpZXcgPT09ICd3ZWVrJykge1xuICAgICAgICAgICAgLy8gZm9jdXMgZmlyc3Qgc2VsZWN0ZWQgZGF5IG9yIHRvZGF5XG4gICAgICAgICAgICBmb2N1c2VkID0gJHRoaXMucGFuZWwuZmluZCgnYS51aS1zdGF0ZS1hY3RpdmUnKTtcblxuICAgICAgICAgICAgaWYgKGZvY3VzZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9jdXNlZCA9ICR0aGlzLnBhbmVsLmZpbmQoJy51aS1kYXRlcGlja2VyLXRvZGF5IGEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmb2N1c2VkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGZvY3VzZWQgPSAkdGhpcy5wYW5lbC5maW5kKCdhLnVpLXN0YXRlLWRlZmF1bHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmb2N1c2VkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGZvY3VzZWQgPSAkdGhpcy5wYW5lbC5maW5kKCdhLnVpLXN0YXRlLWRlZmF1bHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmb2N1c2VkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGZvY3VzZWQgPSAkdGhpcy5wYW5lbC5maW5kKCc6YnV0dG9uLCA6aW5wdXQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9jdXNlZCkge1xuICAgICAgICAgICAgZm9jdXNlZC5maXJzdCgpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIH1cblxuICAgICAgICAkdGhpcy5pbnB1dGZpZWxkLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICAkdGhpcy5pbnB1dGZpZWxkLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1mb2N1cycpO1xuXG4gICAgICAgIGlmICgkdGhpcy50cmlnZ2VyQnV0dG9uKSB7XG4gICAgICAgICAgICAkdGhpcy50cmlnZ2VyQnV0dG9uLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNob3dPdmVybGF5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gUmV0dXJuIGltbWVkaWF0ZWx5IGlmIGEgZG9jdW1lbnQgY2xpY2sgbGlzdGVuZXIgaXMgc2V0LCBvciBpZiB0aGUgZGF0ZXBpY2tlciBpcyBpbmxpbmUsIGFscmVhZHkgdmlzaWJsZSwgb3IgbGFja3MgYSB0cmFuc2l0aW9uXG4gICAgICAgIGlmICh0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lciB8fCB0aGlzLm9wdGlvbnMuaW5saW5lIHx8IHRoaXMuaXNQYW5lbFZpc2libGUoKSB8fCAhdGhpcy50cmFuc2l0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcblxuICAgICAgICB0aGlzLnRyYW5zaXRpb24uc2hvdyh7XG4gICAgICAgICAgICBvbkVudGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoJHRoaXMub3B0aW9ucy5vbkJlZm9yZVNob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMub3B0aW9ucy5vbkJlZm9yZVNob3cuY2FsbCgkdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICR0aGlzLmFsaWduUGFuZWwoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkVudGVyZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICR0aGlzLmRhdGVwaWNrZXJDbGljayA9IHRydWU7XG4gICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5xdWV1ZVRhc2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmRhdGVwaWNrZXJDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5kYXRlcGlja2VyRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICR0aGlzLmJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5iaW5kV2luZG93UmVzaXplTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoISR0aGlzLm9wdGlvbnMuaW5saW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkdGhpcy5mb2N1c092ZXJsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGhpZGVPdmVybGF5OiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAvLyBSZXR1cm4gaW1tZWRpYXRlbHkgaWYgbm8gZG9jdW1lbnQgY2xpY2sgbGlzdGVuZXIgaXMgc2V0LCBvciBpZiB0aGUgZGF0ZXBpY2tlciBpcyBpbmxpbmUsIG5vdCB2aXNpYmxlLCBvciBsYWNrcyBhIHRyYW5zaXRpb25cbiAgICAgICAgaWYgKCF0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lciB8fCB0aGlzLm9wdGlvbnMuaW5saW5lIHx8ICF0aGlzLmlzUGFuZWxWaXNpYmxlKCkgfHwgIXRoaXMudHJhbnNpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcblxuICAgICAgICAvL3B1dCB0aGUgZm9jdXMgYmFjayB0byB0aGUgaW5wdXRmaWVsZFxuICAgICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgICAgICAkdGhpcy5pbnB1dGZpZWxkLnRyaWdnZXIoJ2ZvY3VzJyk7IFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBpZiB1c2luZyBtYXNrIGRpc2FibGUgdGhlIG1vZGFsaXR5XG4gICAgICAgICR0aGlzLmRpc2FibGVNb2RhbGl0eSgpO1xuXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbi5oaWRlKHtcbiAgICAgICAgICAgIG9uRXhpdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCR0aGlzLm9wdGlvbnMub25CZWZvcmVIaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLm9wdGlvbnMub25CZWZvcmVIaWRlLmNhbGwoJHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICR0aGlzLnVuYmluZERvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgICR0aGlzLnVuYmluZFdpbmRvd1Jlc2l6ZUxpc3RlbmVyKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISR0aGlzLm9wdGlvbnMuaW5saW5lKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnVuYmluZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHRoaXMuZGF0ZXBpY2tlckNsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FeGl0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB2aWV3RGF0ZSA9ICR0aGlzLm9wdGlvbnMudmlld0RhdGUgJiYgISR0aGlzLnZhbHVlID9cbiAgICAgICAgICAgICAgICAgICAgJHRoaXMucGFyc2VWYWx1ZSgkdGhpcy5vcHRpb25zLnZpZXdEYXRlKVxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICgoKCgkdGhpcy5pc011bHRpcGxlU2VsZWN0aW9uKCkgfHwgJHRoaXMuaXNSYW5nZVNlbGVjdGlvbigpKSAmJiAkdGhpcy52YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSA/ICR0aGlzLnZhbHVlWzBdIDogJHRoaXMudmFsdWUpIHx8ICR0aGlzLnBhcnNlVmFsdWUodGhpcy5nZXROb3coKSkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZpZXdEYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy51cGRhdGVWaWV3RGF0ZShudWxsLCB2aWV3RGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCEkdGhpcy5vcHRpb25zLmlubGluZSkge1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5pbnB1dGZpZWxkLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJHRoaXMudHJpZ2dlckJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMudHJpZ2dlckJ1dHRvbi5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBiaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICghJHRoaXMuZGF0ZXBpY2tlckNsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmhpZGVPdmVybGF5KGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMub25JbnB1dEJsdXIoKTtcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5xdWV1ZVRhc2soZnVuY3Rpb24oKSB7ICQoZXZlbnQudGFyZ2V0KS50cmlnZ2VyKCdmb2N1cycpIH0sIDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICR0aGlzLmRhdGVwaWNrZXJDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIpO1xuXG4gICAgICAgICAgICAvLyBwcmV2ZW50IHRhYmJpbmcgb3V0c2lkZSBvZiBwYW5lbFxuICAgICAgICAgICAgUHJpbWVGYWNlcy51dGlscy5wcmV2ZW50VGFiYmluZygkdGhpcywgJHRoaXMucGFuZWwuaWQsICR0aGlzLnBhbmVsLnpJbmRleCgpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJHRoaXMucGFuZWwuZmluZCgnOnRhYmJhYmxlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1bmJpbmREb2N1bWVudENsaWNrTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5kb2N1bWVudENsaWNrTGlzdGVuZXIpIHtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLCB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcik7XG4gICAgICAgICAgICBQcmltZUZhY2VzLnV0aWxzLmVuYWJsZVRhYmJpbmcodGhpcywgdGhpcy5wYW5lbC5pZCk7XG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYmluZFJlc3BvbnNpdmVSZXNpemVMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b0RldGVjdERpc3BsYXkgJiYgIXRoaXMub3B0aW9ucy5pbmxpbmUpIHtcbiAgICAgICAgICAgIHZhciBuYW1lc3BhY2UgPSAncmVzaXplLnJlc3BvbnNpdmUnICsgdGhpcy5vcHRpb25zLmlkO1xuICAgICAgICAgICAgJCh3aW5kb3cpLm9mZihuYW1lc3BhY2UpLm9uKG5hbWVzcGFjZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJHRoaXMudXBkYXRlUmVzcG9uc2l2ZW5lc3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICB1bmJpbmRSZXNwb25zaXZlUmVzaXplTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUucmVzcG9uc2l2ZScgKyB0aGlzLm9wdGlvbnMuaWQpO1xuICAgIH0sXG5cbiAgICBiaW5kV2luZG93UmVzaXplTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlubGluZSB8fCB0aGlzLm9wdGlvbnMudG91Y2hVSSB8fCBQcmltZUZhY2VzLmVudi5tb2JpbGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplLicgKyAkdGhpcy5vcHRpb25zLmlkLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGxhenkgbW9kZWwgZm9yIHNvbWUgcmVhc29uIHRyaWdnZXJzIGEgd2luZG93cyByZXNpemVcbiAgICAgICAgICAgIGlmICghJHRoaXMub3B0aW9ucy5sYXp5TW9kZWwpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgdW5iaW5kV2luZG93UmVzaXplTGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuJyArIHRoaXMub3B0aW9ucy5pZCk7XG4gICAgfSxcblxuICAgIGJpbmRTY3JvbGxMaXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxhYmxlUGFyZW50cyA9IFByaW1lRmFjZXMudXRpbHMuZ2V0U2Nyb2xsYWJsZVBhcmVudHModGhpcy5lbGVtZW50LmdldCgwKSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsYWJsZUxpc3RlbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zY3JvbGxhYmxlUGFyZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgJCh0aGlzLnNjcm9sbGFibGVQYXJlbnRzW2ldKS5vbignc2Nyb2xsJywgdGhpcy5zY3JvbGxhYmxlTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVuYmluZFNjcm9sbExpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsYWJsZVBhcmVudHMgJiYgdGhpcy5zY3JvbGxhYmxlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zY3JvbGxhYmxlUGFyZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICQodGhpcy5zY3JvbGxhYmxlUGFyZW50c1tpXSkub2ZmKCdzY3JvbGwnLCB0aGlzLnNjcm9sbGFibGVMaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsYWJsZUxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVSZXNwb25zaXZlbmVzczogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b0RldGVjdERpc3BsYXkgJiYgdGhpcy5vcHRpb25zLnJlc3BvbnNpdmVCcmVha3BvaW50ICYmICF0aGlzLm9wdGlvbnMuaW5saW5lKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFVJID0gdGhpcy5vcHRpb25zLnRvdWNoVUk7XG4gICAgICAgICAgICB2YXIgbmV3VWkgPSBQcmltZUZhY2VzLmVudi5tb2JpbGUgfHwgUHJpbWVGYWNlcy5lbnYuaXNTY3JlZW5TaXplTGVzc1RoYW4odGhpcy5vcHRpb25zLnJlc3BvbnNpdmVCcmVha3BvaW50KTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VUkgIT09IG5ld1VpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoVUkgPSBuZXdVaTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBpc1BhbmVsVmlzaWJsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5vcHRpb25zLmRpc2FibGVkICYmIHRoaXMucGFuZWwgJiYgdGhpcy5wYW5lbC5pcyhcIjp2aXNpYmxlXCIpO1xuICAgIH0sXG5cbiAgICBpc0RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgRGF0ZV1cIiAmJiAhaXNOYU4odmFsdWUpO1xuICAgIH0sXG5cbiAgICBhbGlnblBhbmVsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUGFuZWxWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudG91Y2hVSSkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVNb2RhbGl0eSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hcHBlbmRUbykge1xuICAgICAgICAgICAgICAgIHRoaXMucGFuZWwuY3NzKCdtaW4td2lkdGgnLCB0aGlzLmNvbnRhaW5lci5vdXRlcldpZHRoKCkgKyAncHgnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucGFuZWwucGFyZW50KCkuaXModGhpcy5jb250YWluZXIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBTdHJpbmcodGhpcy5jb250YWluZXIuaW5uZXJIZWlnaHQoKSksXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJ2NlbnRlciB0b3AnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmVsLmNzcyh7IGxlZnQ6ICcnLCB0b3A6ICcnLCAndHJhbnNmb3JtLW9yaWdpbic6ICdjZW50ZXIgdG9wJyB9KS5wb3NpdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIG15OiAnbGVmdCB0b3AnXG4gICAgICAgICAgICAgICAgICAgICwgYXQ6ICdsZWZ0IGJvdHRvbSdcbiAgICAgICAgICAgICAgICAgICAgLCBvZjogdGhpcy5jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgLCBjb2xsaXNpb246ICdmbGlwZml0J1xuICAgICAgICAgICAgICAgICAgICAsIHVzaW5nOiBmdW5jdGlvbihwb3MsIGRpcmVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCd0cmFuc2Zvcm0tb3JpZ2luJywgJ2NlbnRlciAnICsgZGlyZWN0aW9ucy52ZXJ0aWNhbCkuY3NzKHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBlbmFibGVNb2RhbGl0eTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5tYXNrKSB7XG4gICAgICAgICAgICB0aGlzLm1hc2sgPSAkKCc8ZGl2IGNsYXNzPVwidWktd2lkZ2V0LW92ZXJsYXkgdWktZGF0ZXBpY2tlci1tYXNrIHVpLWRhdGVwaWNrZXItbWFzay1zY3JvbGxibG9ja2VyXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICB0aGlzLm1hc2suY3NzKCd6LWluZGV4JywgU3RyaW5nKHBhcnNlSW50KHRoaXMucGFuZWwuY3NzKCd6LWluZGV4JyksIDEwKSAtIDEpKTtcblxuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMubWFzay5vbignY2xpY2suZGF0ZVBpY2tlci1tYXNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJHRoaXMuZGlzYWJsZU1vZGFsaXR5KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5tYXNrKS5hZGRDbGFzcygndWktb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGlzYWJsZU1vZGFsaXR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMubWFzaykge1xuICAgICAgICAgICAgdGhpcy5tYXNrLm9mZignY2xpY2suZGF0ZVBpY2tlci1tYXNrJyk7XG4gICAgICAgICAgICB0aGlzLm1hc2sucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLm1hc2sgPSBudWxsO1xuXG4gICAgICAgICAgICB2YXIgYm9keUNoaWxkcmVuID0gJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbignLnVpLWRhdGVwaWNrZXItbWFzay1zY3JvbGxibG9ja2VyJyk7XG5cbiAgICAgICAgICAgIGlmICghYm9keUNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoJ3VpLW92ZXJmbG93LWhpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGZpbmRXZWVrTWV0YWRhdGE6IGZ1bmN0aW9uKGRhdGVNZXRhKSB7XG4gICAgICAgIGZvciAobGV0IG1vbnRoIG9mIHRoaXMubW9udGhzTWV0YWRhdGEpIHtcbiAgICAgICAgICAgIGlmIChtb250aC5tb250aCA9PT0gZGF0ZU1ldGEubW9udGggJiYgbW9udGgueWVhciA9PT0gZGF0ZU1ldGEueWVhcikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHdlZWsgb2YgbW9udGguZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZGF5IG9mIHdlZWspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXkuZGF5ID09PSBkYXRlTWV0YS5kYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2VlaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICBvbkRhdGVTZWxlY3Q6IGZ1bmN0aW9uKGV2ZW50LCBkYXRlTWV0YSkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVkIHx8ICFkYXRlTWV0YS5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnZpZXcgPT09ICd3ZWVrJykge1xuICAgICAgICAgICAgLy8gc2ltdWxhdGUgY2xpY2sgb24gc3RhcnQgYW5kIGVuZCBkYXkgb2YgdGhlIHdlZWtcbiAgICAgICAgICAgIHZhciB3ZWVrID0gdGhpcy5maW5kV2Vla01ldGFkYXRhKGRhdGVNZXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RGF0ZShldmVudCwgd2Vla1swXSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdERhdGUoZXZlbnQsIHdlZWtbd2Vlay5sZW5ndGggLSAxXSk7XG5cbiAgICAgICAgICAgIFByaW1lRmFjZXMucXVldWVUYXNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICR0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNNdWx0aXBsZVNlbGVjdGlvbigpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGVkKGRhdGVNZXRhKSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWUuZmlsdGVyKGZ1bmN0aW9uKGRhdGUsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEkdGhpcy5pc0RhdGVFcXVhbHMoZGF0ZSwgZGF0ZU1ldGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kZWwoZXZlbnQsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyAjMTA4NTAgbm90aWZ5IHVuc2VsZWN0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vblNlbGVjdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub25TZWxlY3QuY2FsbCh0aGlzLCBldmVudCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMubWF4RGF0ZUNvdW50IHx8ICF0aGlzLnZhbHVlIHx8IHRoaXMub3B0aW9ucy5tYXhEYXRlQ291bnQgPiB0aGlzLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RGF0ZShldmVudCwgZGF0ZU1ldGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3REYXRlKGV2ZW50LCBkYXRlTWV0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5pbmxpbmUgJiYgdGhpcy5pc1NpbmdsZVNlbGVjdGlvbigpICYmICghdGhpcy5vcHRpb25zLnNob3dUaW1lIHx8IHRoaXMub3B0aW9ucy5oaWRlT25EYXRlVGltZVNlbGVjdCkpIHtcbiAgICAgICAgICAgIFByaW1lRmFjZXMucXVldWVUYXNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICR0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5pbmxpbmUgJiYgdGhpcy5pc1JhbmdlU2VsZWN0aW9uKCkgJiYgdGhpcy5vcHRpb25zLmhpZGVPblJhbmdlU2VsZWN0aW9uICYmIHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZVsxXSkge1xuICAgICAgICAgICAgUHJpbWVGYWNlcy5xdWV1ZVRhc2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2VsZWN0RGF0ZTogZnVuY3Rpb24oZXZlbnQsIGRhdGVNZXRhKSB7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoZGF0ZU1ldGEueWVhciwgZGF0ZU1ldGEubW9udGgsIGRhdGVNZXRhLmRheSk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93VGltZSkge1xuICAgICAgICAgICAgdmFyIHRpbWUgPSB0aGlzLmlzRGF0ZSh0aGlzLnZhbHVlKSA/IHRoaXMudmFsdWUgOiB0aGlzLmdldE5vdygpO1xuICAgICAgICAgICAgZGF0ZS5zZXRIb3Vycyh0aW1lLmdldEhvdXJzKCkpO1xuICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKHRoaXMuc3RlcE1pbnV0ZSh0aW1lLmdldE1pbnV0ZXMoKSkpO1xuICAgICAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKHRpbWUuZ2V0U2Vjb25kcygpKTtcbiAgICAgICAgICAgIGRhdGUuc2V0TWlsbGlzZWNvbmRzKHRpbWUuZ2V0TWlsbGlzZWNvbmRzKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5taW5EYXRlICYmIHRoaXMub3B0aW9ucy5taW5EYXRlID4gZGF0ZSkge1xuICAgICAgICAgICAgZGF0ZSA9IHRoaXMub3B0aW9ucy5taW5EYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXhEYXRlICYmIHRoaXMub3B0aW9ucy5tYXhEYXRlIDwgZGF0ZSkge1xuICAgICAgICAgICAgZGF0ZSA9IHRoaXMub3B0aW9ucy5tYXhEYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVTZWxlY3Rpb24oKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RlbChldmVudCwgZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc011bHRpcGxlU2VsZWN0aW9uKCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kZWwoZXZlbnQsIHRoaXMudmFsdWUgPyB0aGlzLnZhbHVlLmNvbmNhdChkYXRlKSA6IFtkYXRlXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1JhbmdlU2VsZWN0aW9uKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IHRoaXMudmFsdWVbMF0sXG4gICAgICAgICAgICAgICAgICAgIGVuZERhdGUgPSB0aGlzLnZhbHVlWzFdO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFlbmREYXRlICYmIGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0RGF0ZS5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdGFydERhdGUgPSBkYXRlO1xuICAgICAgICAgICAgICAgICAgICBlbmREYXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsKGV2ZW50LCBbc3RhcnREYXRlLCBlbmREYXRlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsKGV2ZW50LCBbZGF0ZSwgbnVsbF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vblNlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uU2VsZWN0LmNhbGwodGhpcywgZXZlbnQsIGRhdGUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGluY3JlbWVudEhvdXI6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IHRoaXMuaXNEYXRlKHRoaXMudmFsdWUpID8gdGhpcy52YWx1ZSA6IHRoaXMudmlld0RhdGUsXG4gICAgICAgICAgICBjdXJyZW50SG91ciA9IGN1cnJlbnRUaW1lLmdldEhvdXJzKCksXG4gICAgICAgICAgICBuZXdIb3VyID0gY3VycmVudEhvdXIgKyB0aGlzLm9wdGlvbnMuc3RlcEhvdXI7XG4gICAgICAgIG5ld0hvdXIgPSAobmV3SG91ciA+PSAyNCkgPyAobmV3SG91ciAtIDI0KSA6IG5ld0hvdXI7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVUaW1lKG5ld0hvdXIsIGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKSwgY3VycmVudFRpbWUuZ2V0U2Vjb25kcygpLCBjdXJyZW50VGltZS5nZXRNaWxsaXNlY29uZHMoKSwgY3VycmVudFRpbWUsIFwiSU5DUkVNRU5UXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWUoZXZlbnQsIG5ld0hvdXIsIGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKSwgY3VycmVudFRpbWUuZ2V0U2Vjb25kcygpLCBjdXJyZW50VGltZS5nZXRNaWxsaXNlY29uZHMoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIVByaW1lRmFjZXMudXRpbHMuaXNBY3Rpb25LZXkoZXZlbnQpKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sXG5cbiAgICBkZWNyZW1lbnRIb3VyOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSB0aGlzLmlzRGF0ZSh0aGlzLnZhbHVlKSA/IHRoaXMudmFsdWUgOiB0aGlzLnZpZXdEYXRlLFxuICAgICAgICAgICAgY3VycmVudEhvdXIgPSBjdXJyZW50VGltZS5nZXRIb3VycygpLFxuICAgICAgICAgICAgbmV3SG91ciA9IGN1cnJlbnRIb3VyIC0gdGhpcy5vcHRpb25zLnN0ZXBIb3VyO1xuICAgICAgICBuZXdIb3VyID0gKG5ld0hvdXIgPCAwKSA/IChuZXdIb3VyICsgMjQpIDogbmV3SG91cjtcblxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZVRpbWUobmV3SG91ciwgY3VycmVudFRpbWUuZ2V0TWludXRlcygpLCBjdXJyZW50VGltZS5nZXRTZWNvbmRzKCksIGN1cnJlbnRUaW1lLmdldE1pbGxpc2Vjb25kcygpLCBjdXJyZW50VGltZSwgXCJERUNSRU1FTlRcIikpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZShldmVudCwgbmV3SG91ciwgY3VycmVudFRpbWUuZ2V0TWludXRlcygpLCBjdXJyZW50VGltZS5nZXRTZWNvbmRzKCksIGN1cnJlbnRUaW1lLmdldE1pbGxpc2Vjb25kcygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSxcblxuICAgIGluY3JlbWVudE1pbnV0ZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gdGhpcy5pc0RhdGUodGhpcy52YWx1ZSkgPyB0aGlzLnZhbHVlIDogdGhpcy52aWV3RGF0ZSxcbiAgICAgICAgICAgIGN1cnJlbnRNaW51dGUgPSBjdXJyZW50VGltZS5nZXRNaW51dGVzKCksXG4gICAgICAgICAgICBuZXdNaW51dGUgPSB0aGlzLnN0ZXBNaW51dGUoY3VycmVudE1pbnV0ZSwgdGhpcy5vcHRpb25zLnN0ZXBNaW51dGUpO1xuICAgICAgICBuZXdNaW51dGUgPSAobmV3TWludXRlID4gNTkpID8gKG5ld01pbnV0ZSAtIDYwKSA6IG5ld01pbnV0ZTtcblxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZVRpbWUoY3VycmVudFRpbWUuZ2V0SG91cnMoKSwgbmV3TWludXRlLCBjdXJyZW50VGltZS5nZXRTZWNvbmRzKCksIGN1cnJlbnRUaW1lLmdldE1pbGxpc2Vjb25kcygpLCBjdXJyZW50VGltZSwgXCJJTkNSRU1FTlRcIikpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZShldmVudCwgY3VycmVudFRpbWUuZ2V0SG91cnMoKSwgbmV3TWludXRlLCBjdXJyZW50VGltZS5nZXRTZWNvbmRzKCksIGN1cnJlbnRUaW1lLmdldE1pbGxpc2Vjb25kcygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSxcblxuICAgIGRlY3JlbWVudE1pbnV0ZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gdGhpcy5pc0RhdGUodGhpcy52YWx1ZSkgPyB0aGlzLnZhbHVlIDogdGhpcy52aWV3RGF0ZSxcbiAgICAgICAgICAgIGN1cnJlbnRNaW51dGUgPSBjdXJyZW50VGltZS5nZXRNaW51dGVzKCksXG4gICAgICAgICAgICBuZXdNaW51dGUgPSB0aGlzLnN0ZXBNaW51dGUoY3VycmVudE1pbnV0ZSwgLXRoaXMub3B0aW9ucy5zdGVwTWludXRlKTtcbiAgICAgICAgbmV3TWludXRlID0gKG5ld01pbnV0ZSA8IDApID8gKG5ld01pbnV0ZSArIDYwKSA6IG5ld01pbnV0ZTtcblxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZVRpbWUoY3VycmVudFRpbWUuZ2V0SG91cnMoKSwgbmV3TWludXRlLCBjdXJyZW50VGltZS5nZXRTZWNvbmRzKCksIGN1cnJlbnRUaW1lLmdldE1pbGxpc2Vjb25kcygpLCBjdXJyZW50VGltZSwgXCJERUNSRU1FTlRcIikpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZShldmVudCwgY3VycmVudFRpbWUuZ2V0SG91cnMoKSwgbmV3TWludXRlLCBjdXJyZW50VGltZS5nZXRTZWNvbmRzKCksIGN1cnJlbnRUaW1lLmdldE1pbGxpc2Vjb25kcygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSxcblxuICAgIHN0ZXBNaW51dGU6IGZ1bmN0aW9uKGN1cnJlbnRNaW51dGUsIHN0ZXApIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGVwTWludXRlIDw9IDEpIHtcbiAgICAgICAgICAgIGlmICghc3RlcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50TWludXRlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudE1pbnV0ZSArIHN0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdGVwKSB7XG4gICAgICAgICAgICBzdGVwID0gdGhpcy5vcHRpb25zLnN0ZXBNaW51dGU7XG4gICAgICAgICAgICBpZiAoY3VycmVudE1pbnV0ZSAlIHN0ZXAgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudE1pbnV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdNaW51dGUgPSBjdXJyZW50TWludXRlICsgc3RlcDtcbiAgICAgICAgbmV3TWludXRlID0gTWF0aC5mbG9vcihuZXdNaW51dGUgLyBzdGVwKSAqIHN0ZXA7XG4gICAgICAgIHJldHVybiBuZXdNaW51dGU7XG4gICAgfSxcblxuICAgIGluY3JlbWVudFNlY29uZDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gdGhpcy5pc0RhdGUodGhpcy52YWx1ZSkgPyB0aGlzLnZhbHVlIDogdGhpcy52aWV3RGF0ZSxcbiAgICAgICAgICAgIGN1cnJlbnRTZWNvbmQgPSBjdXJyZW50VGltZS5nZXRTZWNvbmRzKCksXG4gICAgICAgICAgICBuZXdTZWNvbmQgPSBjdXJyZW50U2Vjb25kICsgdGhpcy5vcHRpb25zLnN0ZXBTZWNvbmQ7XG4gICAgICAgIG5ld1NlY29uZCA9IChuZXdTZWNvbmQgPiA1OSkgPyAobmV3U2Vjb25kIC0gNjApIDogbmV3U2Vjb25kO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlVGltZShjdXJyZW50VGltZS5nZXRIb3VycygpLCBjdXJyZW50VGltZS5nZXRNaW51dGVzKCksIG5ld1NlY29uZCwgY3VycmVudFRpbWUuZ2V0TWlsbGlzZWNvbmRzKCksIGN1cnJlbnRUaW1lLCBcIklOQ1JFTUVOVFwiKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUaW1lKGV2ZW50LCBjdXJyZW50VGltZS5nZXRIb3VycygpLCBjdXJyZW50VGltZS5nZXRNaW51dGVzKCksIG5ld1NlY29uZCwgY3VycmVudFRpbWUuZ2V0TWlsbGlzZWNvbmRzKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9LFxuXG4gICAgZGVjcmVtZW50U2Vjb25kOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSB0aGlzLmlzRGF0ZSh0aGlzLnZhbHVlKSA/IHRoaXMudmFsdWUgOiB0aGlzLnZpZXdEYXRlLFxuICAgICAgICAgICAgY3VycmVudFNlY29uZCA9IGN1cnJlbnRUaW1lLmdldFNlY29uZHMoKSxcbiAgICAgICAgICAgIG5ld1NlY29uZCA9IGN1cnJlbnRTZWNvbmQgLSB0aGlzLm9wdGlvbnMuc3RlcFNlY29uZDtcbiAgICAgICAgbmV3U2Vjb25kID0gKG5ld1NlY29uZCA8IDApID8gKG5ld1NlY29uZCArIDYwKSA6IG5ld1NlY29uZDtcblxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZVRpbWUoY3VycmVudFRpbWUuZ2V0SG91cnMoKSwgY3VycmVudFRpbWUuZ2V0TWludXRlcygpLCBuZXdTZWNvbmQsIGN1cnJlbnRUaW1lLmdldE1pbGxpc2Vjb25kcygpLCBjdXJyZW50VGltZSwgXCJERUNSRU1FTlRcIikpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZShldmVudCwgY3VycmVudFRpbWUuZ2V0SG91cnMoKSwgY3VycmVudFRpbWUuZ2V0TWludXRlcygpLCBuZXdTZWNvbmQsIGN1cnJlbnRUaW1lLmdldE1pbGxpc2Vjb25kcygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSxcblxuICAgIGluY3JlbWVudE1pbGxpc2Vjb25kOiBmdW5jdGlvbihldmVudCkge1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSB0aGlzLmlzRGF0ZSh0aGlzLnZhbHVlKSA/IHRoaXMudmFsdWUgOiB0aGlzLnZpZXdEYXRlLFxuICAgICAgICAgICAgY3VycmVudE1pbGxpc2Vjb25kID0gY3VycmVudFRpbWUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICAgICAgICAgICBuZXdNaWxsaXNlY29uZCA9IGN1cnJlbnRNaWxsaXNlY29uZCArIHRoaXMub3B0aW9ucy5zdGVwTWlsbGlzZWNvbmQ7XG4gICAgICAgIG5ld01pbGxpc2Vjb25kID0gKG5ld01pbGxpc2Vjb25kID4gOTk5KSA/IChuZXdNaWxsaXNlY29uZCAtIDEwMDApIDogbmV3TWlsbGlzZWNvbmQ7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVUaW1lKGN1cnJlbnRUaW1lLmdldEhvdXJzKCksIGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKSwgY3VycmVudFRpbWUuZ2V0U2Vjb25kcygpLCBuZXdNaWxsaXNlY29uZCwgY3VycmVudFRpbWUsIFwiSU5DUkVNRU5UXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWUoZXZlbnQsIGN1cnJlbnRUaW1lLmdldEhvdXJzKCksIGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKSwgY3VycmVudFRpbWUuZ2V0U2Vjb25kcygpLCBuZXdNaWxsaXNlY29uZCk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sXG5cbiAgICBkZWNyZW1lbnRNaWxsaXNlY29uZDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gdGhpcy5pc0RhdGUodGhpcy52YWx1ZSkgPyB0aGlzLnZhbHVlIDogdGhpcy52aWV3RGF0ZSxcbiAgICAgICAgICAgIGN1cnJlbnRNaWxsaXNlY29uZCA9IGN1cnJlbnRUaW1lLmdldE1pbGxpc2Vjb25kcygpLFxuICAgICAgICAgICAgbmV3TWlsbGlzZWNvbmQgPSBjdXJyZW50TWlsbGlzZWNvbmQgLSB0aGlzLm9wdGlvbnMuc3RlcE1pbGxpc2Vjb25kO1xuICAgICAgICBuZXdNaWxsaXNlY29uZCA9IChuZXdNaWxsaXNlY29uZCA8IDApID8gKG5ld01pbGxpc2Vjb25kICsgMTAwMCkgOiBuZXdNaWxsaXNlY29uZDtcblxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZVRpbWUoY3VycmVudFRpbWUuZ2V0SG91cnMoKSwgY3VycmVudFRpbWUuZ2V0TWludXRlcygpLCBjdXJyZW50VGltZS5nZXRTZWNvbmRzKCksIG5ld01pbGxpc2Vjb25kLCBjdXJyZW50VGltZSwgXCJERUNSRU1FTlRcIikpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZShldmVudCwgY3VycmVudFRpbWUuZ2V0SG91cnMoKSwgY3VycmVudFRpbWUuZ2V0TWludXRlcygpLCBjdXJyZW50VGltZS5nZXRTZWNvbmRzKCksIG5ld01pbGxpc2Vjb25kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSxcblxuICAgIHRvZ2dsZUFtUG06IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IHRoaXMuaXNEYXRlKHRoaXMudmFsdWUpID8gdGhpcy52YWx1ZSA6IHRoaXMudmlld0RhdGUsXG4gICAgICAgICAgICBjdXJyZW50SG91ciA9IGN1cnJlbnRUaW1lLmdldEhvdXJzKCksXG4gICAgICAgICAgICBuZXdIb3VyID0gKGN1cnJlbnRIb3VyID49IDEyKSA/IGN1cnJlbnRIb3VyIC0gMTIgOiBjdXJyZW50SG91ciArIDEyO1xuXG4gICAgICAgIHRoaXMudXBkYXRlVGltZShldmVudCwgbmV3SG91ciwgY3VycmVudFRpbWUuZ2V0TWludXRlcygpLCBjdXJyZW50VGltZS5nZXRTZWNvbmRzKCksIGN1cnJlbnRUaW1lLmdldE1pbGxpc2Vjb25kcygpKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9LFxuXG4gICAgaGFuZGxlSG91cnNJbnB1dDogZnVuY3Rpb24oaW5wdXQsIGV2ZW50KSB7XG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IHRoaXMuaXNEYXRlKHRoaXMudmFsdWUpID8gdGhpcy52YWx1ZSA6IHRoaXMudmlld0RhdGUsXG4gICAgICAgICAgICB2YWx1ZSA9IGlucHV0LnZhbHVlLFxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZSxcbiAgICAgICAgICAgIG5ld0hvdXJzO1xuXG4gICAgICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKCdeKFswLTldKXsxLDJ9JCcpO1xuICAgICAgICBpZiAocmVnLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICBuZXdIb3VycyA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaG91ckZvcm1hdCA9PT0gJzEyJykge1xuICAgICAgICAgICAgICAgIGlmIChuZXdIb3VycyA+PSAxICYmIG5ld0hvdXJzIDw9IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gdGhpcy52YWxpZGF0ZVRpbWUobmV3SG91cnMsIGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKSwgY3VycmVudFRpbWUuZ2V0U2Vjb25kcygpLCBjdXJyZW50VGltZS5nZXRNaWxsaXNlY29uZHMoKSwgY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0hvdXJzID49IDAgJiYgbmV3SG91cnMgPD0gMjMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSB0aGlzLnZhbGlkYXRlVGltZShuZXdIb3VycywgY3VycmVudFRpbWUuZ2V0TWludXRlcygpLCBjdXJyZW50VGltZS5nZXRTZWNvbmRzKCksIGN1cnJlbnRUaW1lLmdldE1pbGxpc2Vjb25kcygpLCBjdXJyZW50VGltZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdGhpcy5vbGRIb3VycztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdEYXRlVGltZSA9IHRoaXMuaXNEYXRlKHRoaXMudmFsdWUpID8gbmV3IERhdGUodGhpcy52YWx1ZSkgOiB0aGlzLmdldE5vdygpO1xuICAgICAgICBuZXdEYXRlVGltZS5zZXRIb3VycyhuZXdIb3Vycyk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVUaW1lQWZ0ZXJJbnB1dChldmVudCwgbmV3RGF0ZVRpbWUpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVNaW51dGVzSW5wdXQ6IGZ1bmN0aW9uKGlucHV0LCBldmVudCkge1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSB0aGlzLmlzRGF0ZSh0aGlzLnZhbHVlKSA/IHRoaXMudmFsdWUgOiB0aGlzLnZpZXdEYXRlLFxuICAgICAgICAgICAgdmFsdWUgPSBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2UsXG4gICAgICAgICAgICBuZXdNaW51dGVzO1xuXG4gICAgICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKCdeKFswLTldKXsxLDJ9JCcpO1xuICAgICAgICBpZiAocmVnLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICBuZXdNaW51dGVzID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICAgICAgaWYgKG5ld01pbnV0ZXMgPj0gMCAmJiBuZXdNaW51dGVzIDw9IDU5KSB7XG4gICAgICAgICAgICAgICAgdmFsaWQgPSB0aGlzLnZhbGlkYXRlVGltZShjdXJyZW50VGltZS5nZXRIb3VycygpLCBuZXdNaW51dGVzLCBjdXJyZW50VGltZS5nZXRTZWNvbmRzKCksIGN1cnJlbnRUaW1lLmdldE1pbGxpc2Vjb25kcygpLCBjdXJyZW50VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLm9sZE1pbnV0ZXM7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV3RGF0ZVRpbWUgPSB0aGlzLmlzRGF0ZSh0aGlzLnZhbHVlKSA/IG5ldyBEYXRlKHRoaXMudmFsdWUpIDogdGhpcy5nZXROb3coKTtcbiAgICAgICAgbmV3RGF0ZVRpbWUuc2V0TWludXRlcyhuZXdNaW51dGVzKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVBZnRlcklucHV0KGV2ZW50LCBuZXdEYXRlVGltZSk7XG4gICAgfSxcblxuICAgIGhhbmRsZVNlY29uZHNJbnB1dDogZnVuY3Rpb24oaW5wdXQsIGV2ZW50KSB7XG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IHRoaXMuaXNEYXRlKHRoaXMudmFsdWUpID8gdGhpcy52YWx1ZSA6IHRoaXMudmlld0RhdGUsXG4gICAgICAgICAgICB2YWx1ZSA9IGlucHV0LnZhbHVlLFxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZSxcbiAgICAgICAgICAgIG5ld1NlY29uZHM7XG5cbiAgICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoJ14oWzAtOV0pezEsMn0kJyk7XG4gICAgICAgIGlmIChyZWcudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIG5ld1NlY29uZHMgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAobmV3U2Vjb25kcyA+PSAwICYmIG5ld1NlY29uZHMgPD0gNTkpIHtcbiAgICAgICAgICAgICAgICB2YWxpZCA9IHRoaXMudmFsaWRhdGVUaW1lKGN1cnJlbnRUaW1lLmdldEhvdXJzKCksIGN1cnJlbnRUaW1lLmdldE1pbnV0ZXMoKSwgbmV3U2Vjb25kcywgY3VycmVudFRpbWUuZ2V0TWlsbGlzZWNvbmRzKCksIGN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHRoaXMub2xkU2Vjb25kcztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdEYXRlVGltZSA9IHRoaXMuaXNEYXRlKHRoaXMudmFsdWUpID8gbmV3IERhdGUodGhpcy52YWx1ZSkgOiB0aGlzLmdldE5vdygpO1xuICAgICAgICBuZXdEYXRlVGltZS5zZXRTZWNvbmRzKG5ld1NlY29uZHMpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlVGltZUFmdGVySW5wdXQoZXZlbnQsIG5ld0RhdGVUaW1lKTtcbiAgICB9LFxuXG4gICAgaGFuZGxlTWlsbGlzZWNvbmRzSW5wdXQ6IGZ1bmN0aW9uKGlucHV0LCBldmVudCkge1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSB0aGlzLmlzRGF0ZSh0aGlzLnZhbHVlKSA/IHRoaXMudmFsdWUgOiB0aGlzLnZpZXdEYXRlLFxuICAgICAgICAgICAgdmFsdWUgPSBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2UsXG4gICAgICAgICAgICBuZXdNaWxsaXNlY29uZHM7XG5cbiAgICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoJ14oWzAtOV0pezEsM30kJyk7XG4gICAgICAgIGlmIChyZWcudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIG5ld01pbGxpc2Vjb25kcyA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChuZXdNaWxsaXNlY29uZHMgPj0gMCAmJiBuZXdNaWxsaXNlY29uZHMgPD0gOTk5KSB7XG4gICAgICAgICAgICAgICAgdmFsaWQgPSB0aGlzLnZhbGlkYXRlVGltZShjdXJyZW50VGltZS5nZXRIb3VycygpLCBjdXJyZW50VGltZS5nZXRNaW51dGVzKCksIGN1cnJlbnRUaW1lLmdldFNlY29uZHMoKSwgbmV3TWlsbGlzZWNvbmRzLCBjdXJyZW50VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLm9sZE1pbGxpc2Vjb25kcztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdEYXRlVGltZSA9IHRoaXMuaXNEYXRlKHRoaXMudmFsdWUpID8gbmV3IERhdGUodGhpcy52YWx1ZSkgOiB0aGlzLmdldE5vdygpO1xuICAgICAgICBuZXdEYXRlVGltZS5zZXRNaWxsaXNlY29uZHMobmV3TWlsbGlzZWNvbmRzKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVBZnRlcklucHV0KGV2ZW50LCBuZXdEYXRlVGltZSk7XG4gICAgfSxcblxuICAgIHZhbGlkYXRlVGltZTogZnVuY3Rpb24oaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kLCB2YWx1ZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciB2YWxpZCA9IHRydWU7XG4gICAgICAgIHZhciBkYXRlTmV3ID0gbmV3IERhdGUodmFsdWUuZ2V0RnVsbFllYXIoKSwgdmFsdWUuZ2V0TW9udGgoKSwgdmFsdWUuZ2V0RGF0ZSgpLCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmQpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWluRGF0ZSAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5taW5EYXRlID4gZGF0ZU5ldykge1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiSU5DUkVNRU5UXCIgJiYgdGhpcy5vcHRpb25zLm1pbkRhdGUgPiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICA7IC8vdGhlIG5ldyB0aW1lIGlzIHN0aWxsIG91dHNpZGUgdGhlIGFsbG93ZWQgcmFuZ2UsIGJ1dCB3ZSBjb21lIG5lYXJlciB0byBpdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1heERhdGUgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWF4RGF0ZSA8IGRhdGVOZXcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcIkRFQ1JFTUVOVFwiICYmIHRoaXMub3B0aW9ucy5tYXhEYXRlIDwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgOyAvL3RoZSBuZXcgdGltZSBpcyBzdGlsbCBvdXRzaWRlIHRoZSBhbGxvd2VkIHJhbmdlLCBidXQgd2UgY29tZSBuZWFyZXIgdG8gaXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH0sXG5cbiAgICB1cGRhdGVUaW1lOiBmdW5jdGlvbihldmVudCwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kKSB7XG4gICAgICAgIHZhciBuZXdEYXRlVGltZSA9IHRoaXMuaXNEYXRlKHRoaXMudmFsdWUpID8gbmV3IERhdGUodGhpcy52YWx1ZSkgOiB0aGlzLmdldE5vdygpO1xuXG4gICAgICAgIG5ld0RhdGVUaW1lLnNldEhvdXJzKGhvdXIpO1xuICAgICAgICBuZXdEYXRlVGltZS5zZXRNaW51dGVzKG1pbnV0ZSk7XG4gICAgICAgIG5ld0RhdGVUaW1lLnNldFNlY29uZHMoc2Vjb25kKTtcbiAgICAgICAgbmV3RGF0ZVRpbWUuc2V0TWlsbGlzZWNvbmRzKG1pbGxpc2Vjb25kKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsKGV2ZW50LCBuZXdEYXRlVGltZSk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vblNlbGVjdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZVBpY2tlclRpbWVyID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLnRpbWVQaWNrZXJUaW1lciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vblNlbGVjdC5jYWxsKHRoaXMsIGV2ZW50LCBuZXdEYXRlVGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlVGltZUFmdGVySW5wdXQ6IGZ1bmN0aW9uKGV2ZW50LCBuZXdEYXRlVGltZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gbmV3RGF0ZVRpbWU7XG4gICAgICAgIHRoaXMuaW5wdXRmaWVsZC52YWwodGhpcy5nZXRWYWx1ZVRvUmVuZGVyKCkpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMub25TZWxlY3QpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vblNlbGVjdC5jYWxsKHRoaXMsIGV2ZW50LCBuZXdEYXRlVGltZSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBkYXRlIGFuZCB0aW1lLiBJZiBhIHRpbWUgem9uZSBpcyBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMsIFxuICAgICAqIGl0IHJldHVybnMgdGhlIGN1cnJlbnQgZGF0ZSBhbmQgdGltZSBhZGp1c3RlZCB0byB0aGF0IHRpbWUgem9uZS5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7RGF0ZX0gVGhlIGN1cnJlbnQgZGF0ZSBhbmQgdGltZS5cbiAgICAgKi9cbiAgICBnZXROb3c6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50aW1lWm9uZSkge1xuICAgICAgICAgICAgdmFyIGpzVGltZXpvbmUgPSB0aGlzLmNvbnZlcnRUaW1lWm9uZSh0aGlzLm9wdGlvbnMudGltZVpvbmUpO1xuICAgICAgICAgICAgdmFyIGxvY2FsU3RyaW5nID0gbm93LnRvTG9jYWxlU3RyaW5nKCdlbi1HQicsIHsgLy8gdXNlIEVuZ2xpc2ggc28gd2UgY2FuIHBhcnNlIGl0IGJhY2tcbiAgICAgICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgICAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgICAgICBtaW51dGU6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgICAgIHNlY29uZDogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgICAgdGltZVpvbmU6IGpzVGltZXpvbmVcbiAgICAgICAgICAgIH0pLnJlcGxhY2UoJyBhdCAnLCAnLCAnKTtcbiAgICAgICAgICAgIG5vdyA9IG5ldyBEYXRlKGxvY2FsU3RyaW5nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm93O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIEphdmEgdGltZSB6b25lIHN0cmluZyB0byBhbiBJQU5BIHRpbWUgem9uZSBzdHJpbmcuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGphdmFUaW1lWm9uZSAtIFRoZSBKYXZhIHRpbWUgem9uZSBzdHJpbmcgdG8gY29udmVydC5cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29ycmVzcG9uZGluZyBJQU5BIHRpbWUgem9uZSBzdHJpbmcuXG4gICAgICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBpbnB1dCBKYXZhIHRpbWUgem9uZSBzdHJpbmcgaXMgaW4gYW4gaW52YWxpZCBmb3JtYXQuXG4gICAgICovXG4gICAgY29udmVydFRpbWVab25lOiBmdW5jdGlvbiAoamF2YVRpbWVab25lKSB7XG4gICAgICAgIGlmICghamF2YVRpbWVab25lIHx8IFsnRVRDL1VUQycsICdFVEMvR01UJywgJ1VUQycsICdHTVQnXS5pbmNsdWRlcyhqYXZhVGltZVpvbmUudG9VcHBlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBqYXZhVGltZVpvbmU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFeHRyYWN0IHRoZSBzaWduIGFuZCB0aGUgb2Zmc2V0IChob3VycyBhbmQgbWludXRlcylcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGphdmFUaW1lWm9uZS5tYXRjaCgvXihHTVR8VVRDKShbKy1dKShcXGR7Mn0pOihcXGR7Mn0pJC8pO1xuICAgICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBqYXZhVGltZVpvbmU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaWduID0gbWF0Y2hlc1syXTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBwYXJzZUludChtYXRjaGVzWzNdKTtcblxuICAgICAgICAvLyBDb252ZXJ0IEdNVCBvZmZzZXQgdG8gSUFOQSB0aW1lIHpvbmUgZm9ybWF0XG4gICAgICAgIGxldCBpYW5hVGltZVpvbmUgPSBgRXRjL0dNVGA7XG4gICAgICAgIGlmIChob3VycyAhPT0gMCkge1xuICAgICAgICAgICAgaWFuYVRpbWVab25lID0gYCR7aWFuYVRpbWVab25lfSR7c2lnbiA9PT0gJysnID8gJy0nIDogJysnfSR7aG91cnN9YFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpYW5hVGltZVpvbmU7XG4gICAgfSxcblxuICAgIG9uVG9kYXlCdXR0b25DbGljazogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIHRvZGF5ID0gdGhpcy5nZXROb3coKTtcbiAgICAgICAgdmFyIGRhdGVNZXRhID0geyBkYXk6IHRvZGF5LmdldERhdGUoKSwgbW9udGg6IHRvZGF5LmdldE1vbnRoKCksIHllYXI6IHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5OiB0cnVlLCBzZWxlY3RhYmxlOiB0cnVlIH07XG5cbiAgICAgICAgdGhpcy51cGRhdGVWaWV3RGF0ZShldmVudCwgdG9kYXkpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWUoZXZlbnQsIHRvZGF5LmdldEhvdXJzKCksIHRvZGF5LmdldE1pbnV0ZXMoKSwgdG9kYXkuZ2V0U2Vjb25kcygpLCB0b2RheS5nZXRNaWxsaXNlY29uZHMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkRhdGVTZWxlY3QoZXZlbnQsIGRhdGVNZXRhKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9uVG9kYXlCdXR0b25DbGljaykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uVG9kYXlCdXR0b25DbGljay5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkNsZWFyQnV0dG9uQ2xpY2s6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlld0RhdGUoZXZlbnQsIHRoaXMuZ2V0Tm93KCkpO1xuICAgICAgICB0aGlzLnVwZGF0ZU1vZGVsKGV2ZW50LCBudWxsKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9uQ2xlYXJCdXR0b25DbGljaykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uQ2xlYXJCdXR0b25DbGljay5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgfSxcblxuICAgIGVzY2FwZUhUTUw6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHZhciBlbnRpdHlNYXAgPSB7XG4gICAgICAgICAgICAnJic6ICcmYW1wOycsXG4gICAgICAgICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICAgICAgICc+JzogJyZndDsnLFxuICAgICAgICAgICAgJ1wiJzogJyZxdW90OycsXG4gICAgICAgICAgICBcIidcIjogJyYjMzk7JyxcbiAgICAgICAgICAgICcvJzogJyYjeDJGOycsXG4gICAgICAgICAgICAnYCc6ICcmI3g2MDsnLFxuICAgICAgICAgICAgJz0nOiAnJiN4M0Q7J1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZywgZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgcmV0dXJuIGVudGl0eU1hcFtzXTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBcbiAgICB0cnVuY2F0ZURhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgLy8gb25seSB1c2UgZGF0ZSBhdCAwMDowMCBmb3IgY29tcGFyaXNvblxuICAgICAgICAgICAgdmFsdWUuc2V0SG91cnMoMCk7XG4gICAgICAgICAgICB2YWx1ZS5zZXRNaW51dGVzKDApO1xuICAgICAgICAgICAgdmFsdWUuc2V0U2Vjb25kcygwKTtcbiAgICAgICAgICAgIHZhbHVlLnNldE1pbGxpc2Vjb25kcygwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcblxuICAgIHVwZGF0ZVllYXJOYXZpZ2F0b3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5oYXNDdXN0b21ZZWFyUmFuZ2UgfHwgdGhpcy5vcHRpb25zLnllYXJSYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMueWVhck5hdmlnYXRvcikge1xuICAgICAgICAgICAgdmFyIHZpZXdZZWFyID0gdGhpcy52aWV3RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnllYXJSYW5nZSA9ICh2aWV3WWVhciAtIDEwMDApICsgJzonICsgKHZpZXdZZWFyICsgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlVmlld0RhdGU6IGZ1bmN0aW9uKGV2ZW50LCB2YWx1ZSwgc2lsZW50ID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vblZpZXdEYXRlQ2hhbmdlICYmICFzaWxlbnQpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vblZpZXdEYXRlQ2hhbmdlLmNhbGwodGhpcywgZXZlbnQsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmlld0RhdGUgPSB2YWx1ZTtcblxuICAgICAgICBpZiAoKHRoaXMub3B0aW9ucy5hdXRvTW9udGhGb3JtYXQgfHwgIXRoaXMuaW5wdXRmaWVsZC52YWwoKSB8fCB0aGlzLm9wdGlvbnMuc2hvd01pbk1heFJhbmdlKSAmJiB0aGlzLm9wdGlvbnMubW9udGhOYXZpZ2F0b3IgJiYgdGhpcy5vcHRpb25zLnZpZXcgIT09ICdtb250aCcpIHtcbiAgICAgICAgICAgIHZhciB2aWV3TW9udGggPSB0aGlzLnZpZXdEYXRlLmdldE1vbnRoKCk7XG4gICAgICAgICAgICB2aWV3TW9udGggPSAodGhpcy5pc0luTWF4WWVhcigpICYmIE1hdGgubWluKHRoaXMub3B0aW9ucy5tYXhEYXRlLmdldE1vbnRoKCksIHZpZXdNb250aCkpIHx8ICh0aGlzLmlzSW5NaW5ZZWFyKCkgJiYgTWF0aC5tYXgodGhpcy5vcHRpb25zLm1pbkRhdGUuZ2V0TW9udGgoKSwgdmlld01vbnRoKSkgfHwgdmlld01vbnRoO1xuICAgICAgICAgICAgdGhpcy52aWV3RGF0ZS5zZXRNb250aCh2aWV3TW9udGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVQYW5lbCgpO1xuICAgIH0sXG5cbiAgICB1cGRhdGVNb2RlbDogZnVuY3Rpb24oZXZlbnQsIHZhbHVlLCB1cGRhdGVJbnB1dCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gKHZhbHVlID09PSAnJyA/IG51bGwgOiB2YWx1ZSk7XG4gICAgICAgIGlmICh1cGRhdGVJbnB1dCAhPSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dGZpZWxkLnZhbCh0aGlzLmdldFZhbHVlVG9SZW5kZXIoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVBhbmVsKCk7XG4gICAgfSxcblxuICAgIHVwZGF0ZVBhbmVsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gUmVtZW1iZXIgdGhlIGZvY3VzZWQgZWxlbWVudCBiZWZvcmUgd2UgZGVzdHJveSB0aGUgaW5uZXIgZWxlbWVudHNcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgICAgICAvLyByZS1yZW5kZXIgdGhlIHBhbmVscyBjb250ZW50c1xuICAgICAgICB0aGlzLnBhbmVsLmdldCgwKS5pbm5lckhUTUwgPSB0aGlzLnJlbmRlclBhbmVsRWxlbWVudHMoKTtcblxuICAgICAgICAvLyBhdHRlbXB0IHRvIHJlZm9jdXMgdGhlIG5ld2x5IGNyZWF0ZWQgdmVyc2lvbiBvZiB0aGUgc2FtZSBlbGVtZW50XG4gICAgICAgIGlmIChlbCAmJiBlbC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpKSB7XG4gICAgICAgICAgICB2YXIgcmVmb2N1cyA9IHRoaXMucGFuZWwuZmluZChcIlthcmlhLWxhYmVsPSdcIiArIGVsLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikgKyBcIiddXCIpO1xuICAgICAgICAgICAgaWYgKHJlZm9jdXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5xdWV1ZVRhc2soZnVuY3Rpb24oKSB7IHJlZm9jdXMuZmlyc3QoKS50cmlnZ2VyKCdmb2N1cycpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0SW5pdE9wdGlvblZhbHVlcygpO1xuICAgICAgICB0aGlzLl9iaW5kUGFuZWxFdmVudHMoKTtcbiAgICB9XG5cbn0pO1xuIiwgImltcG9ydCBcIi4vMC1kYXRlcGlja2VyLmNqc1wiO1xuXG5pbXBvcnQgeyBCYXNlV2lkZ2V0IH0gZnJvbSBcIi4uL2NvcmUvY29yZS53aWRnZXQuanNcIjtcblxuLyoqXG4gKiBfX1ByaW1lRmFjZXMgRGF0ZVBpY2tlciBXaWRnZXRfX1xuICpcbiAqIERhdGVQaWNrZXIgaXMgYW4gaW5wdXQgY29tcG9uZW50IHVzZWQgdG8gc2VsZWN0IGEgZGF0ZSBmZWF0dXJpbmcgZGlzcGxheSBtb2RlcywgcGFnaW5nLCBsb2NhbGl6YXRpb24sIGFqYXggc2VsZWN0aW9uXG4gKiBhbmQgbW9yZS5cbiAqXG4gKiBEYXRlUGlja2VyIGlzIGRlc2lnbmVkIHRvIHJlcGxhY2UgdGhlIG9sZCB7QGxpbmsgQ2FsZW5kYXJ8cDpjYWxlbmRhcn0gY29tcG9uZW50LlxuICpcbiAqIFRvIGludGVyYWN0IHdpdGggdGhlIGNhbGVuZGFyLCB1c2UgdGhlIG1ldGhvZHMgb2YgdGhpcyB3aWRnZXQsIG9yIGZvciBtb3JlIGFkdmFuY2VkIHVzYWdlcywgdXNlIHRoZSBgZGF0ZVBpY2tlcmBcbiAqIEpRdWVyeVVJIHdpZGdldCBwbHVnaW4sIGZvciBleGFtcGxlOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIFBGKFwiZGF0ZVBpY2tlcldpZGdldFwiKS5nZXREYXRlKCk7XG4gKiBQRihcImRhdGVQaWNrZXJXaWRnZXRcIikuanEuZGF0ZVBpY2tlcihcImdldERhdGVcIik7XG4gKlxuICogUEYoXCJkYXRlUGlja2VyV2lkZ2V0XCIpLnNldERhdGUobmV3IERhdGUoKSk7XG4gKiBQRihcImRhdGVQaWNrZXJXaWRnZXRcIikuanEuZGF0ZVBpY2tlcihcInNldERhdGVcIiwgbmV3IERhdGUoKSk7XG4gKlxuICogUEYoXCJkYXRlUGlja2VyV2lkZ2V0XCIpLmpxLmRhdGVQaWNrZXIoXCJlbmFibGVNb2RhbGl0eVwiKTtcbiAqIGBgYFxuICpcbiAqIEB0eXBlZGVmIFByaW1lRmFjZXMud2lkZ2V0LkRhdGVQaWNrZXIuUHJlU2hvd0NhbGxiYWNrIFVzZXItZGVmaW5lZCBjYWxsYmFjayBpbnZva2VkIGJlZm9yZSB0aGUgZGF0ZSBwaWNrZXIgb3ZlcmxheSBpc1xuICogc2hvd24uXG4gKiBAdGhpcyB7UHJpbWVGYWNlcy53aWRnZXQuRGF0ZVBpY2tlckNmZ30gUHJpbWVGYWNlcy53aWRnZXQuRGF0ZVBpY2tlci5QcmVTaG93Q2FsbGJhY2tcbiAqIEBwYXJhbSB7SlF1ZXJ5UHJpbWVEYXRlUGlja2VyLlBpY2tlckluc3RhbmNlfSBQcmltZUZhY2VzLndpZGdldC5EYXRlUGlja2VyLlByZVNob3dDYWxsYmFjay5kYXRlUGlja2VyIFRoZSBjdXJyZW50XG4gKiBkYXRlIHBpY2tlciBpbnN0YW5jZS5cbiAqXG4gKiBAcHJvcCB7SlF1ZXJ5fSBpbnB1dCBUaGUgRE9NIGVsZW1lbnQgZm9yIHRoZSBoaWRkZW4gaW5wdXQgZWxlbWVudCB3aXRoIHRoZSBzZWxlY3RlZCBkYXRlLlxuICogQHByb3Age0pRdWVyeX0gdHJpZ2dlckJ1dHRvbiBUaGUgRE9NIGVsZW1lbnQgZm9yIHRoZSB0cmlnZ2VyIGJ1dHRvbiBpZiB1c2luZyBzaG93SWNvbi5cbiAqIEBwcm9wIHtKUXVlcnl9IGpxRWwgVGhlIERPTSBlbGVtZW50IGZvciB0aGUgaW5saW5lIHBpY2tlciBvciB0aGUgaW5wdXQuXG4gKiBAcHJvcCB7SlF1ZXJ5fSBbcGFuZWxdIFRoZSBET00gZWxlbWVudCBmb3IgdGhlIHBhbmVsIHdpdGggdGhlIGRhdGVwaWNrZXIuXG4gKiBAcHJvcCB7Ym9vbGVhbn0gcmVmb2N1c0lucHV0IFdoZXRoZXIgZm9jdXMgc2hvdWxkIGJlIHB1dCBvbiB0aGUgaW5wdXQgYWdhaW4uXG4gKiBAcHJvcCB7RGF0ZSB8IERhdGVbXX0gdmlld0RhdGVPcHRpb24gVGhlIGRhdGUgdGhhdCBpcyBkaXNwbGF5ZWQgaW4gdGhlIGRhdGUgcGlja2VyLlxuICpcbiAqIEBpbnRlcmZhY2Uge1ByaW1lRmFjZXMud2lkZ2V0LkRhdGVQaWNrZXJDZmd9IGNmZyBUaGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIHtAbGluayAgRGF0ZVBpY2tlcnwgRGF0ZVBpY2tlciB3aWRnZXR9LlxuICogWW91IGNhbiBhY2Nlc3MgdGhpcyBjb25maWd1cmF0aW9uIHZpYSB7QGxpbmsgUHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldC5jZmd8QmFzZVdpZGdldC5jZmd9LiBQbGVhc2Ugbm90ZSB0aGF0IHRoaXNcbiAqIGNvbmZpZ3VyYXRpb24gaXMgdXN1YWxseSBtZWFudCB0byBiZSByZWFkLW9ubHkgYW5kIHNob3VsZCBub3QgYmUgbW9kaWZpZWQuXG4gKiBAZXh0ZW5kcyB7UHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldENmZ30gY2ZnXG4gKiBAZXh0ZW5kcyB7SlF1ZXJ5UHJpbWVEYXRlUGlja2VyLlBpY2tlck9wdGlvbnN9IGNmZ1xuICpcbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy5hcHBlbmRUbyBUaGUgc2VhcmNoIGV4cHJlc3Npb24gZm9yIHRoZSBlbGVtZW50IHRvIHdoaWNoIHRoZSBvdmVybGF5IHBhbmVsIHNob3VsZCBiZSBhcHBlbmRlZC5cbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy5idXR0b25UYWJpbmRleCBUYWJpbmRleCBvZiB0aGUgZGF0ZXBpY2tlciBidXR0b25cbiAqIEBwcm9wIHtib29sZWFufSBjZmcuZm9jdXNPblNlbGVjdCBXaGVuIGVuYWJsZWQsIGlucHV0IHJlY2VpdmVzIGZvY3VzIGFmdGVyIGEgdmFsdWUgaXMgcGlja2VkLlxuICogQHByb3Age2Jvb2xlYW59IGNmZy5pbmxpbmUgV2hldGhlciB0aGUgZGF0ZXBpY2tlciBpcyByZW5kZXJlZCBpbmxpbmUgb3IgYXMgYW4gb3ZlcmxheS5cbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy5tYXNrIEFwcGxpZXMgYSBtYXNrIHVzaW5nIHRoZSBwYXR0ZXJuLlxuICogQHByb3Age2Jvb2xlYW59IGNmZy5tYXNrQXV0b0NsZWFyIENsZWFycyB0aGUgZmllbGQgb24gYmx1ciB3aGVuIGluY29tcGxldGUgaW5wdXQgaXMgZW50ZXJlZFxuICogQHByb3Age3N0cmluZ30gY2ZnLm1hc2tTbG90Q2hhciBQbGFjZWhvbGRlciBpbiBtYXNrIHRlbXBsYXRlLlxuICogQHByb3Age0pRdWVyeVByaW1lRGF0ZVBpY2tlci5CYXNlQ2FsbGJhY2t9IGNmZy5vblBhbmVsQ3JlYXRlIENhbGxiYWNrIGludm9rZWQgYWZ0ZXIgdGhlIGRhdGVwaWNrZXIgcGFuZWwgd2FzIGNyZWF0ZWQuXG4gKiBAcHJvcCB7UHJpbWVGYWNlcy53aWRnZXQuRGF0ZVBpY2tlci5QcmVTaG93Q2FsbGJhY2t9IGNmZy5wcmVTaG93IFVzZXItZGVmaW5lZCBjYWxsYmFjayB0aGF0IG1heSBiZSBvdmVycmlkZGVuIGJ5IHRoZVxuICogdXNlci4gSW52b2tlZCBiZWZvcmUgdGhlIGRhdGUgcGlja2VyIG92ZXJsYXkgaXMgc2hvd24uXG4gKiBAcHJvcCB7c3RyaW5nfSBjZmcucmFuZ2VTZXBhcmF0b3IgU2VwYXJhdG9yIGZvciBqb2luaW5nIHN0YXJ0IGFuZCBlbmQgZGF0ZXMgd2hlbiBzZWxlY3Rpb24gbW9kZSBpcyBgcmFuZ2VgLCBkZWZhdWx0c1xuICogdG8gYC1gLlxuICogQHByb3Age3N0cmluZ30gY2ZnLnRpbWVTZXBhcmF0b3IgU2VwYXJhdG9yIGZvciBqb2luaW5nIGhvdXIgYW5kIG1pbnV0ZSwgZGVmYXVsdHMgdG8gYDpgLlxuICogQHByb3Age3N0cmluZ30gY2ZnLnRyaWdnZXJCdXR0b25JY29uIEljb24gb2YgdGhlIGRhdGVwaWNrZXIgZWxlbWVudCB0aGF0IHRvZ2dsZXMgdGhlIHZpc2liaWxpdHkgaW4gcG9wdXAgbW9kZS5cbiAqL1xuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBCYXNlV2lkZ2V0IHtcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLlBhcnRpYWxXaWRnZXRDZmc8VENmZz59IGNmZ1xuICAgICAqL1xuICAgIGluaXQoY2ZnKSB7XG4gICAgICAgIHN1cGVyLmluaXQoY2ZnKTtcbiAgICAgICAgdGhpcy5pbnB1dCA9ICQodGhpcy5qcUlkICsgJ19pbnB1dCcpO1xuICAgICAgICB0aGlzLmpxRWwgPSB0aGlzLmNmZy5pbmxpbmUgPyAkKHRoaXMuanFJZCArICdfaW5saW5lJykgOiB0aGlzLmlucHV0O1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuXG4gICAgICAgIC8vIGF1dG8gZGV0ZWN0IHRvdWNoIGludGVyZmFjZSBmb3IgbW9iaWxlXG4gICAgICAgIHRoaXMuY2ZnLmF1dG9EZXRlY3REaXNwbGF5ID0gKHRoaXMuY2ZnLmF1dG9EZXRlY3REaXNwbGF5ID09PSB1bmRlZmluZWQpID8gdHJ1ZSA6IHRoaXMuY2ZnLmF1dG9EZXRlY3REaXNwbGF5O1xuICAgICAgICB0aGlzLmNmZy5yZXNwb25zaXZlQnJlYWtwb2ludCA9IHRoaXMuY2ZnLnJlc3BvbnNpdmVCcmVha3BvaW50IHx8IDU3NjtcbiAgICAgICAgXG4gICAgICAgIC8vIGRlZmF1bHQgZGF0ZSBzaG91bGQgYmUgaW5wdXQgdmFsdWUgYmVmb3JlIHdpZGdldCB2YWx1ZVxuICAgICAgICB0aGlzLmNmZy5kZWZhdWx0RGF0ZSA9IHRoaXMuaW5wdXQudmFsKCkgfHwgdGhpcy5jZmcuZGVmYXVsdERhdGU7XG5cbiAgICAgICAgLy9pMThuIGFuZCBsN25cbiAgICAgICAgdGhpcy5jb25maWd1cmVMb2NhbGUoKTtcblxuICAgICAgICAvL2V2ZW50c1xuICAgICAgICB0aGlzLmJpbmRQYW5lbENyZWF0aW9uTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5iaW5kRGF0ZVNlbGVjdExpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuYmluZENsZWFyQnV0dG9uTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5iaW5kVmlld0NoYW5nZUxpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuYmluZENsb3NlTGlzdGVuZXIoKTtcblxuICAgICAgICAvLyBpcyB0b3VjaCBzdXBwb3J0IGVuYWJsZWRcbiAgICAgICAgdmFyIHRvdWNoRW5hYmxlZCA9IFByaW1lRmFjZXMuZW52LmlzVG91Y2hhYmxlKHRoaXMuY2ZnKSAmJiAhdGhpcy5pbnB1dC5hdHRyKFwicmVhZG9ubHlcIikgJiYgdGhpcy5jZmcuc2hvd0ljb247XG5cbiAgICAgICAgLy9DbGllbnQgYmVoYXZpb3JzLCBpbnB1dCBza2lubmluZyBhbmQgei1pbmRleFxuICAgICAgICBpZighdGhpcy5jZmcuaW5saW5lKSB7XG4gICAgICAgICAgICBQcmltZUZhY2VzLnNraW5JbnB1dCh0aGlzLmpxRWwpO1xuXG4gICAgICAgICAgICBpZih0aGlzLmNmZy5iZWhhdmlvcnMpIHtcbiAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmF0dGFjaEJlaGF2aW9ycyh0aGlzLmpxRWwsIHRoaXMuY2ZnLmJlaGF2aW9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBhdHRhY2hlZCBldmVudHMgaWYgdXNpbmcgQ1NQXG4gICAgICAgICAgICB2YXIgZXZlbnRzID0gdGhpcy5pbnB1dFswXSA/ICQuX2RhdGEodGhpcy5pbnB1dFswXSwgXCJldmVudHNcIikgOiBudWxsO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIHVzZSBET00gaWYgbm9uLUNTUCBhbmQgSlEgZXZlbnQgaWYgQ1NQXG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxPbmNoYW5nZSA9IHRoaXMuaW5wdXQucHJvcCgnb25jaGFuZ2UnKTtcbiAgICAgICAgICAgIGlmICghb3JpZ2luYWxPbmNoYW5nZSAmJiBldmVudHMgJiYgZXZlbnRzLmNoYW5nZSkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsT25jaGFuZ2UgPSBldmVudHMuY2hhbmdlWzBdLmhhbmRsZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlucHV0LnByb3AoJ29uY2hhbmdlJywgbnVsbCkub2ZmKCdjaGFuZ2UnKTtcblxuICAgICAgICAgICAgdGhpcy5jZmcub25DaGFuZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbE9uY2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsT25jaGFuZ2UuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5jZmcub25CZWZvcmVTaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYoJHRoaXMucmVmb2N1c0lucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnJlZm9jdXNJbnB1dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbC5jc3MoJ3otaW5kZXgnLCBQcmltZUZhY2VzLm5leHRaaW5kZXgoKSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgaW5zdCA9IHRoaXM7IC8vIHRoZSBpbnN0YW5jZSBvZiBwcmltZS5kYXRlUGlja2VyIEFQSVxuXG4gICAgICAgICAgICAgICAgLy8gdG91Y2ggc3VwcG9ydCAtIHByZXZlbnRzIGtleWJvYXJkIHBvcHVwXG4gICAgICAgICAgICAgICAgaWYodG91Y2hFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmpxRWwucHJvcChcInJlYWRvbmx5XCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHVzZXIgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICB2YXIgcHJlU2hvdyA9ICR0aGlzLmNmZy5wcmVTaG93O1xuICAgICAgICAgICAgICAgIGlmKHByZVNob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICR0aGlzLmNmZy5wcmVTaG93LmNhbGwoJHRoaXMsIGluc3QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vICM3NDU3IHRyaWdnZXIgdmlldyBjaGFuZ2UgaWYgbGF6eSBtb2RlbCBpcyB1c2VkXG4gICAgICAgICAgICAgICAgaWYgKCR0aGlzLmNmZy5sYXp5TW9kZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMudXBkYXRlTGF6eU1vZGVsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvdWNoIHN1cHBvcnQgLSBwcmV2ZW50cyBrZXlib2FyZCBwb3B1cFxuICAgICAgICBpZiAodG91Y2hFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNmZy5vbkJlZm9yZUhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5qcUVsLmF0dHIoXCJyZWFkb25seVwiLCBmYWxzZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy9Jbml0aWFsaXplIGRhdGVwaWNrZXJcbiAgICAgICAgdGhpcy5jZmcucGFuZWxTdHlsZUNsYXNzID0gKHRoaXMuY2ZnLnBhbmVsU3R5bGVDbGFzcyB8fCAnJykgKyAnIHAtZGF0ZXBpY2tlci1wYW5lbCc7XG4gICAgICAgIHRoaXMuY2ZnLnJhbmdlU2VwYXJhdG9yID0gdGhpcy5jZmcucmFuZ2VTZXBhcmF0b3J8fCctJztcbiAgICAgICAgdGhpcy5jZmcudGltZVNlcGFyYXRvciA9IHRoaXMuY2ZnLnRpbWVTZXBhcmF0b3J8fCc6JztcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmNmZy5zZWxlY3Rpb25Nb2RlID09PSBcInJhbmdlXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY2ZnLnZpZXdEYXRlID0gdGhpcy52aWV3RGF0ZU9wdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2ZnLnZpZXdEYXRlID0gdGhpcy5jZmcuZGVmYXVsdERhdGU7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5hcHBseU1hc2soKTsgLy8gbXVzdCBiZSBiZWZvcmUgZGF0ZXBpY2tlciBzZWUgIzY0NDUgYW5kICM3MTc2XG4gICAgICAgIHRoaXMuanEuZGF0ZVBpY2tlcih0aGlzLmNmZyk7XG5cbiAgICAgICAgLy9leHRlbnNpb25zXG4gICAgICAgIGlmKCF0aGlzLmNmZy5pbmxpbmUgJiYgdGhpcy5jZmcuc2hvd0ljb24pIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckJ1dHRvbiA9IHRoaXMuanFFbC5zaWJsaW5ncygnLnVpLWRhdGVwaWNrZXItdHJpZ2dlcjpidXR0b24nKTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckJ1dHRvbi5hdHRyKCdhcmlhLWxhYmVsJyxQcmltZUZhY2VzLmdldExvY2FsZUxhYmVsKCdjaG9vc2VEYXRlJykpLmF0dHIoJ2FyaWEtaGFzcG9wdXAnLCB0cnVlKTtcblxuICAgICAgICAgICAgdmFyIHRpdGxlID0gdGhpcy5qcUVsLmF0dHIoJ3RpdGxlJyk7XG4gICAgICAgICAgICBpZih0aXRsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckJ1dHRvbi5hdHRyKCd0aXRsZScsIHRpdGxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGJ1dHRvbkluZGV4ID0gdGhpcy5jZmcuYnV0dG9uVGFiaW5kZXh8fHRoaXMuanFFbC5hdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgaWYoYnV0dG9uSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJCdXR0b24uYXR0cigndGFiaW5kZXgnLCBidXR0b25JbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFByaW1lRmFjZXMuc2tpbkJ1dHRvbih0aGlzLnRyaWdnZXJCdXR0b24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9tYXJrIHRhcmdldCBhbmQgZGVzY2VuZGFudHMgb2YgdGFyZ2V0IGFzIGEgdHJpZ2dlciBmb3IgYSBQcmltZUZhY2VzIG92ZXJsYXlcbiAgICAgICAgaWYoIXRoaXMuY2ZnLmlubGluZSkge1xuICAgICAgICAgICAgdGhpcy5qcS5kYXRhKCdwcmltZWZhY2VzLW92ZXJsYXktdGFyZ2V0JywgdGhpcy5pZCkuZmluZCgnKicpLmRhdGEoJ3ByaW1lZmFjZXMtb3ZlcmxheS10YXJnZXQnLCB0aGlzLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCBvcmlnaW5hbCByZXNwb25zaXZlIGRpc3BsYXlcbiAgICAgICAgdGhpcy5qcS5kYXRhKCkucHJpbWVEYXRlUGlja2VyLnVwZGF0ZVJlc3BvbnNpdmVuZXNzKCk7XG5cbiAgICAgICAgLy9wZnMgbWV0YWRhdGFcbiAgICAgICAgdGhpcy5pbnB1dC5kYXRhKFByaW1lRmFjZXMuQ0xJRU5UX0lEX0RBVEEsIHRoaXMuaWQpO1xuXG4gICAgICAgIC8vICMxMTY0NSB0cmlnZ2VyIHZpZXcgY2hhbmdlIGlmIGxhenkgbW9kZWwgaXMgdXNlZFxuICAgICAgICBpZiAodGhpcy5jZmcuaW5saW5lICYmIHRoaXMuY2ZnLmxhenlNb2RlbCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVMYXp5TW9kZWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLlBhcnRpYWxXaWRnZXRDZmc8VENmZz59IGNmZ1xuICAgICAqL1xuICAgIHJlZnJlc2goY2ZnKSB7XG4gICAgICAgIGlmICh0aGlzLnBhbmVsICYmIHRoaXMuY2ZnLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICB2YXIgYXBwZW5kVG8gPSBQcmltZUZhY2VzLnV0aWxzLnJlc29sdmVEeW5hbWljT3ZlcmxheUNvbnRhaW5lcih0aGlzKTtcbiAgICAgICAgICAgIFByaW1lRmFjZXMudXRpbHMuY2xlYW51cER5bmFtaWNPdmVybGF5KHRoaXMsIHRoaXMucGFuZWwsIHRoaXMuaWQgKyAnX3BhbmVsJywgYXBwZW5kVG8pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIucmVmcmVzaChjZmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFuZWwgJiYgdGhpcy5jZmcuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgIHZhciBhcHBlbmRUbyA9IFByaW1lRmFjZXMudXRpbHMucmVzb2x2ZUR5bmFtaWNPdmVybGF5Q29udGFpbmVyKHRoaXMpO1xuICAgICAgICAgICAgUHJpbWVGYWNlcy51dGlscy5yZW1vdmVEeW5hbWljT3ZlcmxheSh0aGlzLCBudWxsLCB0aGlzLmlkICsgXCJfcGFuZWxcIiwgYXBwZW5kVG8pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5qcS5kYXRlUGlja2VyKCkuZGF0YSgpLnByaW1lRGF0ZVBpY2tlci5fZGVzdHJveSgpO1xuICAgICAgICAvLyBET00gZGUtcmVmZXJlbmNlIG1lbW9yeSBjbGVhbiB1cFxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5qcS5kYXRhKCkucHJpbWVEYXRlUGlja2VyKSB7XG4gICAgICAgICAgICB0aGlzLmpxLmRhdGEoKS5wcmltZURhdGVQaWNrZXJba2V5XSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jZmcubWFzayAmJiB0aGlzLmlucHV0KSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmlucHV0bWFzayhcInJlbW92ZVwiKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQub2ZmKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIGxvY2FsaXplZCBtZXNzYWdlcyBmb3IgdGhlIGN1cnJlbnRseSBjb25maWd1cmVkIGxhbmd1YWdlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY29uZmlndXJlTG9jYWxlKCkge1xuICAgICAgICB2YXIgbG9jYWxlU2V0dGluZ3MgPSBQcmltZUZhY2VzLmdldExvY2FsZVNldHRpbmdzKHRoaXMuY2ZnLnVzZXJMb2NhbGUpO1xuXG4gICAgICAgIGlmKGxvY2FsZVNldHRpbmdzKSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxlID0ge307XG4gICAgICAgICAgICBmb3IodmFyIHNldHRpbmcgaW4gbG9jYWxlU2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICBsb2NhbGVbc2V0dGluZ10gPSBsb2NhbGVTZXR0aW5nc1tzZXR0aW5nXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNmZy5sb2NhbGVBbSkge1xuICAgICAgICAgICAgICAgIGxvY2FsZVtcImFtXCJdID0gdGhpcy5jZmcubG9jYWxlQW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jZmcubG9jYWxlUG0pIHtcbiAgICAgICAgICAgICAgICBsb2NhbGVbXCJwbVwiXSA9IHRoaXMuY2ZnLmxvY2FsZVBtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jZmcudXNlckxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRoZSBtYXNrIG9uIHRoZSBpbnB1dCBpZiB1c2luZyBhIG1hc2sgYW5kIG5vdCBhbiBpbmxpbmUgcGlja2VyLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXBwbHlNYXNrKCkge1xuICAgICAgICBpZiAodGhpcy5jZmcuaW5saW5lIHx8IHRoaXMuaW5wdXQuaXMoJ1tyZWFkb25seV0nKSB8fCB0aGlzLmlucHV0LmlzKCc6ZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmNmZy5tYXNrKSB7XG4gICAgICAgICAgICB2YXIgaXNBdXRvQ2xlYXIgPSAodGhpcy5jZmcubWFza0F1dG9DbGVhciA9PT0gdW5kZWZpbmVkKSA/IHRydWUgOiB0aGlzLmNmZy5tYXNrQXV0b0NsZWFyO1xuICAgICAgICAgICAgdmFyIG1hc2tDZmcgPSB7XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMuY2ZnLm1hc2tTbG90Q2hhcnx8J18nLFxuICAgICAgICAgICAgICAgIGNsZWFyTWFza09uTG9zdEZvY3VzOiBpc0F1dG9DbGVhcixcbiAgICAgICAgICAgICAgICBjbGVhckluY29tcGxldGU6IGlzQXV0b0NsZWFyLFxuICAgICAgICAgICAgICAgIGF1dG9Vbm1hc2s6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dNYXNrT25Ib3ZlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25CZWZvcmVQYXN0ZTogZnVuY3Rpb24gKHBhc3RlZFZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdpdEh1YiAjODMxOSBpc3N1ZSB3aXRoIHBhc3RpbmcgbWFza1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW1vdmUgaWYgSW5wdXRNYXNrIDUuMC44KyBmaXhlcyB0aGUgaXNzdWVcbiAgICAgICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5xdWV1ZVRhc2soZnVuY3Rpb24oKXsgJHRoaXMuaW5wdXQudHJpZ2dlcihcImlucHV0XCIpfSwgMjApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFzdGVkVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gL1ttZHloc10vaTtcbiAgICAgICAgICAgIHZhciBpc0FsaWFzID0gcGF0dGVybi50ZXN0KHRoaXMuY2ZnLm1hc2spO1xuICAgICAgICAgICAgaWYgKGlzQWxpYXMpIHtcbiAgICAgICAgICAgICAgICBtYXNrQ2ZnLmFsaWFzID0gJ2RhdGV0aW1lJztcbiAgICAgICAgICAgICAgICBtYXNrQ2ZnLmlucHV0Rm9ybWF0ID0gdGhpcy5jZmcubWFzaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWFza0NmZy5tYXNrID0gdGhpcy5jZmcubWFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5wdXQuaW5wdXRtYXNrKCdyZW1vdmUnKS5pbnB1dG1hc2sobWFza0NmZyk7XG4gICAgICAgICAgICB0aGlzLmlucHV0Lm9mZihcImJsdXJcIik7IC8vIEdpdEh1YiAjOTI1OS8jMTI0MjhcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZvciBhZnRlciB0aGUgb3ZlcmxheSBwYW5lbCBpcyBjcmVhdGVkLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYmluZFBhbmVsQ3JlYXRpb25MaXN0ZW5lcigpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcblxuICAgICAgICB0aGlzLmNmZy5vblBhbmVsQ3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkdGhpcy5wYW5lbCA9IHRoaXMucGFuZWw7XG4gICAgICAgICAgICAkdGhpcy5jZmcuYXBwZW5kVG8gPSBQcmltZUZhY2VzLnV0aWxzLnJlc29sdmVBcHBlbmRUbygkdGhpcywgJHRoaXMuanEsICR0aGlzLnBhbmVsKTtcbiAgICAgICAgICAgIC8vICM4NDIzXG4gICAgICAgICAgICBpZiAoJHRoaXMuY2ZnLmlubGluZSkge1xuICAgICAgICAgICAgICAgICR0aGlzLnBhbmVsLmNzcygncG9zaXRpb24nLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXBwZW5kVG8gPSBQcmltZUZhY2VzLmV4cHJlc3Npb25zLlNlYXJjaEV4cHJlc3Npb25GYWNhZGUucmVzb2x2ZUNvbXBvbmVudHNBc1NlbGVjdG9yKCR0aGlzLmpxLCAkdGhpcy5jZmcuYXBwZW5kVG8pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIGV2ZW50IGxpc3RlbmVyIGZvciB3aGVuIGFub3RoZXIgZGF0ZSB3YXMgc2VsZWN0ZWQuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBiaW5kRGF0ZVNlbGVjdExpc3RlbmVyKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuY2ZnLm9uU2VsZWN0ID0gZnVuY3Rpb24oZXZlbnQsIGRhdGUpIHtcbiAgICAgICAgICAgICR0aGlzLnZpZXdEYXRlT3B0aW9uID0gdGhpcy52aWV3RGF0ZTtcblxuICAgICAgICAgICAgJHRoaXMuZmlyZURhdGVTZWxlY3RFdmVudCgpO1xuXG4gICAgICAgICAgICBpZighJHRoaXMuY2ZnLmlubGluZSAmJiAkdGhpcy5jZmcuZm9jdXNPblNlbGVjdCkge1xuICAgICAgICAgICAgICAgICR0aGlzLnJlZm9jdXNJbnB1dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgJHRoaXMuanFFbC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgIGlmKCEkdGhpcy5jZmcuc2hvd0ljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluc3QgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmpxRWwub2ZmKCdjbGljay5kYXRlcGlja2VyJykub24oJ2NsaWNrLmRhdGVwaWNrZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3Quc2hvd092ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgUHJpbWVGYWNlcy5xdWV1ZVRhc2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnJlZm9jdXNJbnB1dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBldmVudCBsaXN0ZW5lciBmb3Igd2hlbiB0aGUgQ2xlYXIgYnV0dG9uIGlzIHNlbGVjdGVkLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYmluZENsZWFyQnV0dG9uTGlzdGVuZXIoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5jZmcub25DbGVhckJ1dHRvbkNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICR0aGlzLmlucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJHRoaXMuY2FsbEJlaGF2aW9yKCdkYXRlU2VsZWN0Jyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIGV2ZW50IGZvciB3aGVuIGFub3RoZXIgZGF0ZSB3YXMgc2VsZWN0ZWQuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmaXJlRGF0ZVNlbGVjdEV2ZW50KCkge1xuICAgICAgICAvLyAjNTgzMDogZG8gbm90IGZpcmUgaW4gcmFuZ2UgbW9kZSBpZiBvbmx5IHRoZSBmaXJzdCB2YWx1ZSBpcyBzZXRcbiAgICAgICAgaWYgKHRoaXMuY2ZnLnNlbGVjdGlvbk1vZGUgPT09IFwicmFuZ2VcIiAmJiB0aGlzLmlucHV0LnZhbCgpLmluZGV4T2YodGhpcy5jZmcucmFuZ2VTZXBhcmF0b3IpID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgdGhpcy5jYWxsQmVoYXZpb3IoJ2RhdGVTZWxlY3QnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBldmVudCBsaXN0ZW5lciBmb3Igd2hlbiB0aGUgZGF0ZSBwaWNrZXIgY2hhbmdlcyB0byBhIGRpZmZlcmVudCBtb250aCBvciB5ZWFyIHBhZ2UuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBiaW5kVmlld0NoYW5nZUxpc3RlbmVyKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmNmZy5vblZpZXdEYXRlQ2hhbmdlID0gZnVuY3Rpb24oZXZlbnQsIGRhdGUpIHtcbiAgICAgICAgICAgICR0aGlzLnZpZXdEYXRlT3B0aW9uID0gZGF0ZTtcbiAgICAgICAgICAgICR0aGlzLmZpcmVWaWV3Q2hhbmdlRXZlbnQoZGF0ZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIGV2ZW50IGZvciB3aGVuIHRoZSBkYXRlIHBpY2tlciBjaGFuZ2VkIHRvIGEgZGlmZmVyZW50IG1vbnRoIG9yIHllYXIgcGFnZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBUaGUgZGF0ZSB0byB3aGljaCB0aGUgZGF0ZSBwaWNrZXIgY2hhbmdlZC5cbiAgICAgKi9cbiAgICBmaXJlVmlld0NoYW5nZUV2ZW50KGRhdGUpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGxhenkgPSB0aGlzLmNmZy5sYXp5TW9kZWw7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgcGFyYW1zOiBbXG4gICAgICAgICAgICAgICAge25hbWU6IHRoaXMuaWQgKyAnX3llYXInLCB2YWx1ZTogZGF0ZS5nZXRGdWxsWWVhcigpfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogdGhpcy5pZCArICdfbW9udGgnLCB2YWx1ZTogZGF0ZS5nZXRNb250aCgpfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICAgIGlmIChsYXp5KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucGFuZWwucGFyZW50KCkuaXMoXCJkaXYudWktc3RhdGUtZGlzYWJsZWRcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhbmVsLndyYXAoXCI8ZGl2IGNsYXNzPSd1aS1zdGF0ZS1kaXNhYmxlZCB1aS1kYXRlcGlja2VyLWRpc2FibGVkJy8+XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9ucy5vbnN1Y2Nlc3MgPSBmdW5jdGlvbihyZXNwb25zZVhNTCwgc3RhdHVzLCB4aHIpIHtcbiAgICAgICAgICAgICAgICBQcmltZUZhY2VzLmFqYXguUmVzcG9uc2UuaGFuZGxlKHJlc3BvbnNlWE1MLCBzdGF0dXMsIHhociwge1xuICAgICAgICAgICAgICAgICAgICB3aWRnZXQ6ICR0aGlzLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGU6IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRlTWV0YWRhdGEgPSBKU09OLnBhcnNlKGNvbnRlbnQpLmRhdGVNZXRhZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwZHAgPSAkdGhpcy5qcS5kYXRhKCkucHJpbWVEYXRlUGlja2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpc2FibGVkRGF0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmFibGVkRGF0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRlU3R5bGVDbGFzc2VzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGRhdGUgaW4gZGF0ZU1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnNlZERhdGUgPSBwZHAucGFyc2VPcHRpb25WYWx1ZShkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0ZU1ldGFkYXRhW2RhdGVdLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkRGF0ZXMucHVzaChwYXJzZWREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGVNZXRhZGF0YVtkYXRlXS5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWREYXRlcy5wdXNoKHBhcnNlZERhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0ZU1ldGFkYXRhW2RhdGVdLnN0eWxlQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVN0eWxlQ2xhc3Nlc1twZHAudG9JU09EYXRlU3RyaW5nKHBhcnNlZERhdGUpXSA9IGRhdGVNZXRhZGF0YVtkYXRlXS5zdHlsZUNsYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBkcC5vcHRpb25zLmRhdGVTdHlsZUNsYXNzZXMgPSBkYXRlU3R5bGVDbGFzc2VzO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMuc2V0RGlzYWJsZWREYXRlcyhkaXNhYmxlZERhdGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLnNldEVuYWJsZWREYXRlcyhlbmFibGVkRGF0ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCR0aGlzLnBhbmVsLnBhcmVudCgpLmlzKFwiZGl2LnVpLXN0YXRlLWRpc2FibGVkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMucGFuZWwudW53cmFwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzIHRoZSBvdmVybHkgY29ycmVjdCBpdGVtIGZvciBhY2Nlc3NpYmlsaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICBwZHAuZm9jdXNPdmVybGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oYXNCZWhhdmlvcigndmlld0NoYW5nZScpKSB7XG4gICAgICAgICAgICBpZiAobGF6eSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMudXBkYXRlID0gKG9wdGlvbnMudXBkYXRlIHx8ICcnKSArICcgJyArIHRoaXMuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhbGxCZWhhdmlvcigndmlld0NoYW5nZScsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxhenkpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZXZlbnQgPSAndmlld0NoYW5nZSc7XG4gICAgICAgICAgICBvcHRpb25zLnNvdXJjZSA9IHRoaXMuaWQ7XG4gICAgICAgICAgICBvcHRpb25zLnByb2Nlc3MgPSB0aGlzLmlkO1xuICAgICAgICAgICAgb3B0aW9ucy51cGRhdGUgPSB0aGlzLmlkO1xuICAgICAgICAgICAgb3B0aW9ucy5mb3JtSWQgPSB0aGlzLmdldFBhcmVudEZvcm1JZCgpO1xuICAgICAgICAgICAgUHJpbWVGYWNlcy5hamF4LlJlcXVlc3QuaGFuZGxlKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgYSB2aWV3Q2hhbmdlIGV2ZW50IHdoaWNoIHVwZGF0ZXMgdGhlIGxhenkgbW9kZWwgdGhyb3VnaCBhbiBBamF4IHJlcXVlc3QgdXNpbmcgdGhlIGN1cnJlbnQgZGF0ZS5cbiAgICAgKi9cbiAgICB1cGRhdGVMYXp5TW9kZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLmNmZy5sYXp5TW9kZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZVZpZXdDaGFuZ2VFdmVudCh0aGlzLmdldFZpZXdEYXRlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCB0aGUgZXZlbnQgbGlzdGVuZXJzIGZvciB3aGVuIHRoZSBkYXRlIHBpY2tlciBpcyBjbG9zZWQuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBiaW5kQ2xvc2VMaXN0ZW5lcigpIHtcbiAgICAgICAgaWYodGhpcy5oYXNCZWhhdmlvcignY2xvc2UnKSkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuY2ZnLm9uQmVmb3JlSGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICR0aGlzLmZpcmVDbG9zZUV2ZW50KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlyZXMgdGhlIGNsb3NlIGV2ZW50IHdoZW4gdGhlIGRhdGUgcGlja2VyIGlzIGNsb3NlZC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZpcmVDbG9zZUV2ZW50KCkge1xuICAgICAgICBpZih0aGlzLmNmZy5iZWhhdmlvcnMpIHtcbiAgICAgICAgICAgIHZhciBjbG9zZUJlaGF2aW9yID0gdGhpcy5jZmcuYmVoYXZpb3JzWydjbG9zZSddO1xuICAgICAgICAgICAgaWYoY2xvc2VCZWhhdmlvcikge1xuICAgICAgICAgICAgICAgIGNsb3NlQmVoYXZpb3IuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGRhdGUgdmFsdWUgdGhlIGRhdGUgcGlja2VyLlxuICAgICAqIEBwYXJhbSB7RGF0ZSB8IHN0cmluZ30gZGF0ZSBUaGUgbmV3IGRhdGUgZm9yIHRoaXMgd2lkZ2V0LlxuICAgICAqL1xuICAgIHNldERhdGUoZGF0ZSkge1xuICAgICAgICB0aGlzLmpxLmRhdGVQaWNrZXIoJ3NldERhdGUnLCBkYXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZSB2YWx1ZSBvZiB0aGUgZGF0ZSBwaWNrZXIuXG4gICAgICogQHJldHVybiB7RGF0ZSB8IHN0cmluZyB8IG51bGx9IFRoZSBkYXRlLCBpZiBvbmUgaXMgY3VycmVudGx5IHNlbGVjdGVkLiBUaGUgZW1wdHkgYHN0cmluZ2Agb3IgYG51bGxgIHdoZW4gbm8gZGF0ZVxuICAgICAqIGlzIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIGdldERhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmpxLmRhdGVQaWNrZXIoJ2dldERhdGUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciBhIGRhdGUgaXMgc2VsZWN0ZWQuXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgYSBkYXRlIGlzIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIGhhc0RhdGUoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5nZXREYXRlKCkgaW5zdGFuY2VvZiBEYXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBkaXNwbGF5ZWQgdmlzaWJsZSBjYWxlbmRhciBkYXRlLiBUaGlzIHJlZmVycyB0byB0aGUgY3VycmVudGx5IGRpc3BsYXllZCBtb250aCBwYWdlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgRGF0ZSB8IERhdGVbXX0gZGF0ZSBUaGUgZGF0ZSB0byBiZSBzaG93biBpbiB0aGUgY2FsZW5kYXIuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbc2lsZW50PWZhbHNlXSBXaGV0aGVyIHRvIHVwZGF0ZSB0aGUgdmlldyBkYXRlIHdpdGhvdXQgdHJpZ2dlcmluZyB0aGUgQUpBWCB2aWV3Q2hhbmdlIGV2ZW50LlxuICAgICAqL1xuICAgIHNldFZpZXdEYXRlKGRhdGUsIHNpbGVudCA9IGZhbHNlKSB7XG4gICAgICAgIHZhciB2aWV3RGF0ZSA9IHRoaXMuanEuZGF0YSgpLnByaW1lRGF0ZVBpY2tlci5wYXJzZVZhbHVlKGRhdGUpO1xuICAgICAgICB0aGlzLmpxLmRhdGVQaWNrZXIoJ3VwZGF0ZVZpZXdEYXRlJywgbnVsbCwgdmlld0RhdGUsIHNpbGVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZGlzcGxheWVkIHZpc2libGUgY2FsZW5kYXIgZGF0ZS4gVGhpcyByZWZlcnMgdG8gdGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgbW9udGggcGFnZS5cbiAgICAgKiBAcmV0dXJuIHtEYXRlIHwgRGF0ZVtdfSBUaGUgY3VycmVudGx5IGRpc3BsYXllZCBkYXRlIG9yIGRhdGVzLlxuICAgICAqL1xuICAgIGdldFZpZXdEYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5qcS5kYXRlUGlja2VyKCkuZGF0YSgpLnByaW1lRGF0ZVBpY2tlci52aWV3RGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBkaXNhYmxlZCBkYXRlcy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdIHwgRGF0ZVtdfSBkaXNhYmxlZERhdGVzIFRoZSBkYXRlcyB0byBkaXNhYmxlLlxuICAgICAqL1xuICAgIHNldERpc2FibGVkRGF0ZXMoZGlzYWJsZWREYXRlcykge1xuICAgICAgICB2YXIgcGRwID0gdGhpcy5qcS5kYXRhKCkucHJpbWVEYXRlUGlja2VyO1xuICAgICAgICBwZHAub3B0aW9ucy5kaXNhYmxlZERhdGVzID0gZGlzYWJsZWREYXRlcztcbiAgICAgICAgaWYgKHBkcC5vcHRpb25zLmRpc2FibGVkRGF0ZXMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGRwLm9wdGlvbnMuZGlzYWJsZWREYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBkcC5vcHRpb25zLmRpc2FibGVkRGF0ZXNbaV0gPSBwZHAucGFyc2VPcHRpb25WYWx1ZShwZHAub3B0aW9ucy5kaXNhYmxlZERhdGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVBhbmVsKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZW5hYmxlZCBkYXRlcy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdIHwgRGF0ZVtdfSBlbmFibGVkRGF0ZXMgVGhlIGRhdGVzIHRvIGVuYWJsZS5cbiAgICAgKi9cbiAgICBzZXRFbmFibGVkRGF0ZXMoZW5hYmxlZERhdGVzKSB7XG4gICAgICAgIHZhciBwZHAgPSB0aGlzLmpxLmRhdGEoKS5wcmltZURhdGVQaWNrZXI7XG5cbiAgICAgICAgaWYgKGVuYWJsZWREYXRlcyAhPSBudWxsICYmIGVuYWJsZWREYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwZHAub3B0aW9ucy5lbmFibGVkRGF0ZXMgPSBlbmFibGVkRGF0ZXM7XG4gICAgICAgICAgICBpZiAocGRwLm9wdGlvbnMuZW5hYmxlZERhdGVzKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwZHAub3B0aW9ucy5lbmFibGVkRGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcGRwLm9wdGlvbnMuZW5hYmxlZERhdGVzW2ldID0gcGRwLnBhcnNlT3B0aW9uVmFsdWUocGRwLm9wdGlvbnMuZW5hYmxlZERhdGVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVQYW5lbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGRpc2FibGVkIGRheXMuXG4gICAgICogQHBhcmFtIHtudW1iZXJbXX0gZGlzYWJsZWREYXlzIFRoZSBkYXlzIHRvIGRpc2FibGUuXG4gICAgICovXG4gICAgc2V0RGlzYWJsZWREYXlzKGRpc2FibGVkRGF5cykge1xuICAgICAgICB0aGlzLmpxLmRhdGEoKS5wcmltZURhdGVQaWNrZXIub3B0aW9ucy5kaXNhYmxlZERheXMgPSBkaXNhYmxlZERheXM7XG4gICAgICAgIHRoaXMudXBkYXRlUGFuZWwoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgcGFuZWwuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB1cGRhdGVQYW5lbCgpIHtcbiAgICAgICAgdmFyIHBkcCA9IHRoaXMuanEuZGF0YSgpLnByaW1lRGF0ZVBpY2tlcjtcbiAgICAgICAgcGRwLnBhbmVsLmdldCgwKS5pbm5lckhUTUwgPSBwZHAucmVuZGVyUGFuZWxFbGVtZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIHRoZSBwb3B1cCBwYW5lbC5cbiAgICAgKi9cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLmpxLmRhdGEoKS5wcmltZURhdGVQaWNrZXIuc2hvd092ZXJsYXkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIHRoZSBwb3B1cCBwYW5lbC5cbiAgICAgKi9cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLmpxLmRhdGEoKS5wcmltZURhdGVQaWNrZXIuaGlkZU92ZXJsYXkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGVzIHRoZSBkYXRlcGlja2VyLCBzbyB0aGF0IHRoZSB1c2VyIGNhbiBzZWxlY3QgYSBkYXRlLlxuICAgICAqL1xuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5qcS5kYXRhKCkucHJpbWVEYXRlUGlja2VyLm9wdGlvbnMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cGRhdGVQYW5lbCgpO1xuICAgICAgICBQcmltZUZhY2VzLnV0aWxzLmVuYWJsZUlucHV0V2lkZ2V0KHRoaXMuaW5wdXQpO1xuICAgICAgICBQcmltZUZhY2VzLnV0aWxzLmVuYWJsZUJ1dHRvbih0aGlzLnRyaWdnZXJCdXR0b24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc2FibGVzIHRoZSBkYXRlcGlja2VyLCBzbyB0aGF0IHRoZSB1c2VyIGNhbiBubyBsb25nZXIgc2VsZWN0IGFueSBkYXRlLlxuICAgICAqL1xuICAgIGRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB0aGlzLmpxLmRhdGEoKS5wcmltZURhdGVQaWNrZXIub3B0aW9ucy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudXBkYXRlUGFuZWwoKTtcbiAgICAgICAgUHJpbWVGYWNlcy51dGlscy5kaXNhYmxlSW5wdXRXaWRnZXQodGhpcy5pbnB1dCk7XG4gICAgICAgIFByaW1lRmFjZXMudXRpbHMuZGlzYWJsZUJ1dHRvbih0aGlzLnRyaWdnZXJCdXR0b24pO1xuICAgIH1cblxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7O0FBQUE7QUFBQTtBQVFBLE1BQUUsT0FBTyxvQkFBb0I7QUFBQSxNQUV6QixTQUFTO0FBQUEsUUFDTCxJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixlQUFlO0FBQUEsUUFDZixlQUFlO0FBQUEsUUFDZixvQkFBb0I7QUFBQSxRQUNwQixVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxZQUFZO0FBQUEsUUFDWixRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixlQUFlO0FBQUEsUUFDZixnQkFBZ0I7QUFBQSxRQUNoQixlQUFlO0FBQUEsUUFDZixtQkFBbUI7QUFBQSxRQUNuQixTQUFTO0FBQUEsUUFDVCxZQUFZO0FBQUEsUUFDWixpQkFBaUI7QUFBQSxRQUNqQixVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixlQUFlO0FBQUEsUUFDZixVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixhQUFhO0FBQUEsUUFDYixVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixnQkFBZ0I7QUFBQSxRQUNoQixNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixnQkFBZ0I7QUFBQSxRQUNoQixVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixhQUFhO0FBQUEsUUFDYixrQkFBa0I7QUFBQSxRQUNsQixZQUFZO0FBQUEsUUFDWixVQUFVO0FBQUEsUUFDVixZQUFZO0FBQUEsUUFDWixZQUFZO0FBQUEsUUFDWixpQkFBaUI7QUFBQSxRQUNqQixpQkFBaUI7QUFBQSxRQUNqQixzQkFBc0I7QUFBQSxRQUN0QixzQkFBc0I7QUFBQSxRQUN0QixZQUFZ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QUFZO0FBQUEsRUFDckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsZ0JBQWdCLGNBQWM7QUFDMUIsUUFBSSxNQUFNLEtBQUssR0FBRyxLQUFLLEVBQUU7QUFFekIsUUFBSSxnQkFBZ0IsUUFBUSxhQUFhLFNBQVMsR0FBRztBQUNqRCxVQUFJLFFBQVEsZUFBZTtBQUMzQixVQUFJLElBQUksUUFBUSxjQUFjO0FBQzFCLGlCQUFTLElBQUksR0FBRyxJQUFJLElBQUksUUFBUSxhQUFhLFFBQVEsS0FBSztBQUN0RCxjQUFJLFFBQVEsYUFBYSxDQUFDLElBQUksSUFBSSxpQkFBaUIsSUFBSSxRQUFRLGFBQWEsQ0FBQyxDQUFDO0FBQUEsUUFDbEY7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUNBLFNBQUssWUFBWTtBQUFBLEVBQ3JCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLGdCQUFnQixjQUFjO0FBQzFCLFNBQUssR0FBRyxLQUFLLEVBQUUsZ0JBQWdCLFFBQVEsZUFBZTtBQUN0RCxTQUFLLFlBQVk7QUFBQSxFQUNyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxjQUFjO0FBQ1YsUUFBSSxNQUFNLEtBQUssR0FBRyxLQUFLLEVBQUU7QUFDekIsUUFBSSxNQUFNLElBQUksQ0FBQyxFQUFFLFlBQVksSUFBSSxvQkFBb0I7QUFBQSxFQUN6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsT0FBTztBQUNILFNBQUssR0FBRyxLQUFLLEVBQUUsZ0JBQWdCLFlBQVk7QUFBQSxFQUMvQztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsT0FBTztBQUNILFNBQUssR0FBRyxLQUFLLEVBQUUsZ0JBQWdCLFlBQVk7QUFBQSxFQUMvQztBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsU0FBUztBQUNMLFNBQUssR0FBRyxLQUFLLEVBQUUsZ0JBQWdCLFFBQVEsV0FBVztBQUNsRCxTQUFLLFlBQVk7QUFDakIsZUFBVyxNQUFNLGtCQUFrQixLQUFLLEtBQUs7QUFDN0MsZUFBVyxNQUFNLGFBQWEsS0FBSyxhQUFhO0FBQUEsRUFDcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFVBQVU7QUFDTixTQUFLLEtBQUs7QUFDVixTQUFLLEdBQUcsS0FBSyxFQUFFLGdCQUFnQixRQUFRLFdBQVc7QUFDbEQsU0FBSyxZQUFZO0FBQ2pCLGVBQVcsTUFBTSxtQkFBbUIsS0FBSyxLQUFLO0FBQzlDLGVBQVcsTUFBTSxjQUFjLEtBQUssYUFBYTtBQUFBLEVBQ3JEO0FBRUo7IiwKICAibmFtZXMiOiBbInRvZGF5Il0KfQo=

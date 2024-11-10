import {
  BaseWidget
} from "./chunk-HGD6GSK5.js";
import "./chunk-YRJTWU7C.js";

// src/imageswitch/0-jquery-imageswitch.js
(function($) {
  var ver = "2.88";
  if ($.support == void 0) {
    $.support = {
      opacity: !$.browser.msie
    };
  }
  function debug(s) {
    if ($.fn.cycle.debug)
      log(s);
  }
  function log() {
    if (window.console && window.console.log)
      window.console.log("[cycle] " + Array.prototype.join.call(arguments, " "));
  }
  ;
  $.fn.cycle = function(options, arg2) {
    var o = { s: this.selector, c: this.context };
    if (this.length === 0 && options != "stop") {
      if (!$.isReady && o.s) {
        log("DOM not ready, queuing slideshow");
        $(function() {
          $(o.s, o.c).cycle(options, arg2);
        });
        return this;
      }
      log("terminating; zero elements found by selector" + ($.isReady ? "" : " (DOM not ready)"));
      return this;
    }
    return this.each(function() {
      var opts = handleArguments(this, options, arg2);
      if (opts === false)
        return;
      opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
      if (this.cycleTimeout)
        clearTimeout(this.cycleTimeout);
      this.cycleTimeout = this.cyclePause = 0;
      var $cont = $(this);
      var $slides2 = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
      var els = $slides2.get();
      if (els.length < 2) {
        log("terminating; too few slides: " + els.length);
        return;
      }
      var opts2 = buildOptions($cont, $slides2, els, opts, o);
      if (opts2 === false)
        return;
      var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.rev);
      if (startTime) {
        startTime += opts2.delay || 0;
        if (startTime < 10)
          startTime = 10;
        debug("first timeout: " + startTime);
        this.cycleTimeout = setTimeout(function() {
          go(els, opts2, 0, !opts2.rev && !opts.backwards);
        }, startTime);
      }
    });
  };
  function handleArguments(cont, options, arg2) {
    if (cont.cycleStop == void 0)
      cont.cycleStop = 0;
    if (options === void 0 || options === null)
      options = {};
    if (options.constructor == String) {
      switch (options) {
        case "destroy":
        case "stop":
          var opts = $(cont).data("cycle.opts");
          if (!opts)
            return false;
          cont.cycleStop++;
          if (cont.cycleTimeout)
            clearTimeout(cont.cycleTimeout);
          cont.cycleTimeout = 0;
          $(cont).removeData("cycle.opts");
          if (options == "destroy")
            destroy(opts);
          return false;
        case "toggle":
          cont.cyclePause = cont.cyclePause === 1 ? 0 : 1;
          checkInstantResume(cont.cyclePause, arg2, cont);
          return false;
        case "pause":
          cont.cyclePause = 1;
          return false;
        case "resume":
          cont.cyclePause = 0;
          checkInstantResume(false, arg2, cont);
          return false;
        case "prev":
        case "next":
          var opts = $(cont).data("cycle.opts");
          if (!opts) {
            log('options not found, "prev/next" ignored');
            return false;
          }
          $.fn.cycle[options](opts);
          return false;
        default:
          options = { fx: options };
      }
      ;
      return options;
    } else if (options.constructor == Number) {
      var num = options;
      options = $(cont).data("cycle.opts");
      if (!options) {
        log("options not found, can not advance slide");
        return false;
      }
      if (num < 0 || num >= options.elements.length) {
        log("invalid slide index: " + num);
        return false;
      }
      options.nextSlide = num;
      if (cont.cycleTimeout) {
        clearTimeout(cont.cycleTimeout);
        cont.cycleTimeout = 0;
      }
      if (typeof arg2 == "string")
        options.oneTimeFx = arg2;
      go(options.elements, options, 1, num >= options.currSlide);
      return false;
    }
    return options;
    function checkInstantResume(isPaused, arg22, cont2) {
      if (!isPaused && arg22 === true) {
        var options2 = $(cont2).data("cycle.opts");
        if (!options2) {
          log("options not found, can not resume");
          return false;
        }
        if (cont2.cycleTimeout) {
          clearTimeout(cont2.cycleTimeout);
          cont2.cycleTimeout = 0;
        }
        go(options2.elements, options2, 1, !opts.rev && !opts.backwards);
      }
    }
  }
  ;
  function removeFilter(el, opts) {
    if (!$.support.opacity && opts.cleartype && el.style.filter) {
      try {
        el.style.removeAttribute("filter");
      } catch (smother) {
      }
    }
  }
  ;
  function destroy(opts) {
    if (opts.next)
      $(opts.next).off(opts.prevNextEvent);
    if (opts.prev)
      $(opts.prev).off(opts.prevNextEvent);
    if (opts.pager || opts.pagerAnchorBuilder)
      $.each(opts.pagerAnchors || [], function() {
        this.off().remove();
      });
    opts.pagerAnchors = null;
    if (opts.destroy)
      opts.destroy(opts);
  }
  ;
  function buildOptions($cont, $slides2, els, options, o) {
    var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
    if (opts.autostop)
      opts.countdown = opts.autostopCount || els.length;
    var cont = $cont[0];
    $cont.data("cycle.opts", opts);
    opts.$cont = $cont;
    opts.stopCount = cont.cycleStop;
    opts.elements = els;
    opts.before = opts.before ? [opts.before] : [];
    opts.after = opts.after ? [opts.after] : [];
    opts.after.unshift(function() {
      opts.busy = 0;
    });
    if (!$.support.opacity && opts.cleartype)
      opts.after.push(function() {
        removeFilter(this, opts);
      });
    if (opts.continuous)
      opts.after.push(function() {
        go(els, opts, 0, !opts.rev && !opts.backwards);
      });
    saveOriginalOpts(opts);
    if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
      clearTypeFix($slides2);
    if ($cont.css("position") == "static")
      $cont.css("position", "relative");
    if (opts.width)
      $cont.width(opts.width);
    if (opts.height && opts.height != "auto")
      $cont.height(opts.height);
    if (opts.startingSlide)
      opts.startingSlide = parseInt(opts.startingSlide);
    else if (opts.backwards)
      opts.startingSlide = els.length - 1;
    if (opts.random) {
      opts.randomMap = [];
      for (var i = 0; i < els.length; i++)
        opts.randomMap.push(i);
      opts.randomMap.sort(function(a, b) {
        return Math.random() - 0.5;
      });
      opts.randomIndex = 1;
      opts.startingSlide = opts.randomMap[1];
    } else if (opts.startingSlide >= els.length)
      opts.startingSlide = 0;
    opts.currSlide = opts.startingSlide || 0;
    var first = opts.startingSlide;
    $slides2.css({ position: "absolute", top: "0px", left: "0px" }).hide().each(function(i2) {
      var z;
      if (opts.backwards)
        z = first ? i2 <= first ? els.length + (i2 - first) : first - i2 : els.length - i2;
      else
        z = first ? i2 >= first ? els.length - (i2 - first) : first - i2 : els.length - i2;
      $(this).css("z-index", String(z));
    });
    $(els[first]).css("opacity", "1").show();
    removeFilter(els[first], opts);
    if (opts.fit && opts.width)
      $slides2.width(opts.width);
    if (opts.fit && opts.height && opts.height != "auto")
      $slides2.height(opts.height);
    var reshape = opts.containerResize && !$cont.innerHeight();
    if (reshape) {
      var maxw = 0, maxh = 0;
      for (var j = 0; j < els.length; j++) {
        var $e = $(els[j]), e = $e[0], w = $e.outerWidth(), h = $e.outerHeight();
        if (!w) w = e.offsetWidth || e.width || $e.attr("width");
        if (!h) h = e.offsetHeight || e.height || $e.attr("height");
        maxw = w > maxw ? w : maxw;
        maxh = h > maxh ? h : maxh;
      }
      if (maxw > 0 && maxh > 0)
        $cont.css({ width: maxw + "px", height: maxh + "px" });
    }
    if (opts.pause)
      $cont.on("mouseenter", function() {
        this.cyclePause++;
      }).on("mouseleave", function() {
        this.cyclePause--;
      });
    if (supportMultiTransitions(opts) === false)
      return false;
    var requeue = false;
    options.requeueAttempts = options.requeueAttempts || 0;
    $slides2.each(function() {
      var $el = $(this);
      this.cycleH = opts.fit && opts.height ? opts.height : $el.height() || this.offsetHeight || this.height || $el.attr("height") || 0;
      this.cycleW = opts.fit && opts.width ? opts.width : $el.width() || this.offsetWidth || this.width || $el.attr("width") || 0;
      if ($el.is("img")) {
        var loadingIE = $.browser.msie && this.cycleW == 28 && this.cycleH == 30 && !this.complete;
        var loadingFF = $.browser.mozilla && this.cycleW == 34 && this.cycleH == 19 && !this.complete;
        var loadingOp = $.browser.opera && (this.cycleW == 42 && this.cycleH == 19 || this.cycleW == 37 && this.cycleH == 17) && !this.complete;
        var loadingOther = this.cycleH == 0 && this.cycleW == 0 && !this.complete;
        if (loadingIE || loadingFF || loadingOp || loadingOther) {
          if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) {
            log(options.requeueAttempts, " - img slide not loaded, requeuing slideshow: ", this.src, this.cycleW, this.cycleH);
            setTimeout(function() {
              $(o.s, o.c).cycle(options);
            }, opts.requeueTimeout);
            requeue = true;
            return false;
          } else {
            log("could not determine size of image: " + this.src, this.cycleW, this.cycleH);
          }
        }
      }
      return true;
    });
    if (requeue)
      return false;
    opts.cssBefore = opts.cssBefore || {};
    opts.animIn = opts.animIn || {};
    opts.animOut = opts.animOut || {};
    $slides2.not(":eq(" + first + ")").css(opts.cssBefore);
    if (opts.cssFirst)
      $($slides2[first]).css(opts.cssFirst);
    if (opts.timeout) {
      opts.timeout = parseInt(opts.timeout);
      if (opts.speed.constructor == String)
        opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed);
      if (!opts.sync)
        opts.speed = opts.speed / 2;
      var buffer = opts.fx == "shuffle" ? 500 : 250;
      while (opts.timeout - opts.speed < buffer)
        opts.timeout += opts.speed;
    }
    if (opts.easing)
      opts.easeIn = opts.easeOut = opts.easing;
    if (!opts.speedIn)
      opts.speedIn = opts.speed;
    if (!opts.speedOut)
      opts.speedOut = opts.speed;
    opts.slideCount = els.length;
    opts.currSlide = opts.lastSlide = first;
    if (opts.random) {
      if (++opts.randomIndex == els.length)
        opts.randomIndex = 0;
      opts.nextSlide = opts.randomMap[opts.randomIndex];
    } else if (opts.backwards)
      opts.nextSlide = opts.startingSlide == 0 ? els.length - 1 : opts.startingSlide - 1;
    else
      opts.nextSlide = opts.startingSlide >= els.length - 1 ? 0 : opts.startingSlide + 1;
    if (!opts.multiFx) {
      var init = $.fn.cycle.transitions[opts.fx];
      if (typeof init === "function")
        init($cont, $slides2, opts);
      else if (opts.fx != "custom" && !opts.multiFx) {
        log("unknown transition: " + opts.fx, "; slideshow terminating");
        return false;
      }
    }
    var e0 = $slides2[first];
    if (opts.before.length)
      opts.before[0].apply(e0, [e0, e0, opts, true]);
    if (opts.after.length > 1)
      opts.after[1].apply(e0, [e0, e0, opts, true]);
    if (opts.next)
      $(opts.next).on(opts.prevNextEvent, function() {
        return advance(opts, opts.rev ? -1 : 1);
      });
    if (opts.prev)
      $(opts.prev).on(opts.prevNextEvent, function() {
        return advance(opts, opts.rev ? 1 : -1);
      });
    if (opts.pager || opts.pagerAnchorBuilder)
      buildPager(els, opts);
    exposeAddSlide(opts, els);
    return opts;
  }
  ;
  function saveOriginalOpts(opts) {
    opts.original = { before: [], after: [] };
    opts.original.cssBefore = $.extend({}, opts.cssBefore);
    opts.original.cssAfter = $.extend({}, opts.cssAfter);
    opts.original.animIn = $.extend({}, opts.animIn);
    opts.original.animOut = $.extend({}, opts.animOut);
    $.each(opts.before, function() {
      opts.original.before.push(this);
    });
    $.each(opts.after, function() {
      opts.original.after.push(this);
    });
  }
  ;
  function supportMultiTransitions(opts) {
    var i, tx, txs = $.fn.cycle.transitions;
    if (opts.fx.indexOf(",") > 0) {
      opts.multiFx = true;
      opts.fxs = opts.fx.replace(/\s*/g, "").split(",");
      for (i = 0; i < opts.fxs.length; i++) {
        var fx = opts.fxs[i];
        tx = txs[fx];
        if (!tx || !txs.hasOwnProperty(fx) || typeof tx !== "function") {
          log("discarding unknown transition: ", fx);
          opts.fxs.splice(i, 1);
          i--;
        }
      }
      if (!opts.fxs.length) {
        log("No valid transitions named; slideshow terminating.");
        return false;
      }
    } else if (opts.fx == "all") {
      opts.multiFx = true;
      opts.fxs = [];
      for (p in txs) {
        tx = txs[p];
        if (txs.hasOwnProperty(p) && typeof tx === "function")
          opts.fxs.push(p);
      }
    }
    if (opts.multiFx && opts.randomizeEffects) {
      var r1 = Math.floor(Math.random() * 20) + 30;
      for (i = 0; i < r1; i++) {
        var r2 = Math.floor(Math.random() * opts.fxs.length);
        opts.fxs.push(opts.fxs.splice(r2, 1)[0]);
      }
      debug("randomized fx sequence: ", opts.fxs);
    }
    return true;
  }
  ;
  function exposeAddSlide(opts, els) {
    opts.addSlide = function(newSlide, prepend) {
      var $s = $(newSlide), s = $s[0];
      if (!opts.autostopCount)
        opts.countdown++;
      els[prepend ? "unshift" : "push"](s);
      if (opts.els)
        opts.els[prepend ? "unshift" : "push"](s);
      opts.slideCount = els.length;
      $s.css("position", "absolute");
      $s[prepend ? "prependTo" : "appendTo"](opts.$cont);
      if (prepend) {
        opts.currSlide++;
        opts.nextSlide++;
      }
      if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
        clearTypeFix($s);
      if (opts.fit && opts.width)
        $s.width(opts.width);
      if (opts.fit && opts.height && opts.height != "auto")
        $slides.height(opts.height);
      s.cycleH = opts.fit && opts.height ? opts.height : $s.height();
      s.cycleW = opts.fit && opts.width ? opts.width : $s.width();
      $s.css(opts.cssBefore);
      if (opts.pager || opts.pagerAnchorBuilder)
        $.fn.cycle.createPagerAnchor(els.length - 1, s, $(opts.pager), els, opts);
      if (typeof opts.onAddSlide === "function")
        opts.onAddSlide($s);
      else
        $s.hide();
    };
  }
  $.fn.cycle.resetState = function(opts, fx) {
    fx = fx || opts.fx;
    opts.before = [];
    opts.after = [];
    opts.cssBefore = $.extend({}, opts.original.cssBefore);
    opts.cssAfter = $.extend({}, opts.original.cssAfter);
    opts.animIn = $.extend({}, opts.original.animIn);
    opts.animOut = $.extend({}, opts.original.animOut);
    opts.fxFn = null;
    $.each(opts.original.before, function() {
      opts.before.push(this);
    });
    $.each(opts.original.after, function() {
      opts.after.push(this);
    });
    var init = $.fn.cycle.transitions[fx];
    if (typeof init === "function")
      init(opts.$cont, $(opts.elements), opts);
  };
  function go(els, opts, manual, fwd) {
    if (manual && opts.busy && opts.manualTrump) {
      debug("manualTrump in go(), stopping active transition");
      $(els).stop(true, true);
      opts.busy = false;
    }
    if (opts.busy) {
      debug("transition active, ignoring new tx request");
      return;
    }
    var p2 = opts.$cont[0], curr = els[opts.currSlide], next = els[opts.nextSlide];
    if (p2.cycleStop != opts.stopCount || p2.cycleTimeout === 0 && !manual)
      return;
    if (!manual && !p2.cyclePause && !opts.bounce && (opts.autostop && --opts.countdown <= 0 || opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide)) {
      if (opts.end)
        opts.end(opts);
      return;
    }
    var changed = false;
    if ((manual || !p2.cyclePause) && opts.nextSlide != opts.currSlide) {
      changed = true;
      var fx = opts.fx;
      curr.cycleH = curr.cycleH || $(curr).height();
      curr.cycleW = curr.cycleW || $(curr).width();
      next.cycleH = next.cycleH || $(next).height();
      next.cycleW = next.cycleW || $(next).width();
      if (opts.multiFx) {
        if (opts.lastFx == void 0 || ++opts.lastFx >= opts.fxs.length)
          opts.lastFx = 0;
        fx = opts.fxs[opts.lastFx];
        opts.currFx = fx;
      }
      if (opts.oneTimeFx) {
        fx = opts.oneTimeFx;
        opts.oneTimeFx = null;
      }
      $.fn.cycle.resetState(opts, fx);
      if (opts.before.length)
        $.each(opts.before, function(i, o) {
          if (p2.cycleStop != opts.stopCount) return;
          o.apply(next, [curr, next, opts, fwd]);
        });
      var after = function() {
        $.each(opts.after, function(i, o) {
          if (p2.cycleStop != opts.stopCount) return;
          o.apply(next, [curr, next, opts, fwd]);
        });
      };
      debug("tx firing; currSlide: " + opts.currSlide + "; nextSlide: " + opts.nextSlide);
      opts.busy = 1;
      if (opts.fxFn)
        opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
      else if (typeof $.fn.cycle[opts.fx] === "function")
        $.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
      else
        $.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
    }
    if (changed || opts.nextSlide == opts.currSlide) {
      opts.lastSlide = opts.currSlide;
      if (opts.random) {
        opts.currSlide = opts.nextSlide;
        if (++opts.randomIndex == els.length)
          opts.randomIndex = 0;
        opts.nextSlide = opts.randomMap[opts.randomIndex];
        if (opts.nextSlide == opts.currSlide)
          opts.nextSlide = opts.currSlide == opts.slideCount - 1 ? 0 : opts.currSlide + 1;
      } else if (opts.backwards) {
        var roll = opts.nextSlide - 1 < 0;
        if (roll && opts.bounce) {
          opts.backwards = !opts.backwards;
          opts.nextSlide = 1;
          opts.currSlide = 0;
        } else {
          opts.nextSlide = roll ? els.length - 1 : opts.nextSlide - 1;
          opts.currSlide = roll ? 0 : opts.nextSlide + 1;
        }
      } else {
        var roll = opts.nextSlide + 1 == els.length;
        if (roll && opts.bounce) {
          opts.backwards = !opts.backwards;
          opts.nextSlide = els.length - 2;
          opts.currSlide = els.length - 1;
        } else {
          opts.nextSlide = roll ? 0 : opts.nextSlide + 1;
          opts.currSlide = roll ? els.length - 1 : opts.nextSlide - 1;
        }
      }
    }
    if (changed && opts.pager)
      opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);
    var ms = 0;
    if (opts.timeout && !opts.continuous)
      ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
    else if (opts.continuous && p2.cyclePause)
      ms = 10;
    if (ms > 0)
      p2.cycleTimeout = setTimeout(function() {
        go(els, opts, 0, !opts.rev && !opts.backwards);
      }, ms);
  }
  ;
  $.fn.cycle.updateActivePagerLink = function(pager, currSlide, clsName) {
    $(pager).each(function() {
      $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
    });
  };
  function getTimeout(curr, next, opts, fwd) {
    if (opts.timeoutFn) {
      var t = opts.timeoutFn.call(curr, curr, next, opts, fwd);
      while (t - opts.speed < 250)
        t += opts.speed;
      debug("calculated timeout: " + t + "; speed: " + opts.speed);
      if (t !== false)
        return t;
    }
    return opts.timeout;
  }
  ;
  $.fn.cycle.next = function(opts) {
    advance(opts, opts.rev ? -1 : 1);
  };
  $.fn.cycle.prev = function(opts) {
    advance(opts, opts.rev ? 1 : -1);
  };
  function advance(opts, val) {
    var els = opts.elements;
    var p2 = opts.$cont[0], timeout = p2.cycleTimeout;
    if (timeout) {
      clearTimeout(timeout);
      p2.cycleTimeout = 0;
    }
    if (opts.random && val < 0) {
      opts.randomIndex--;
      if (--opts.randomIndex == -2)
        opts.randomIndex = els.length - 2;
      else if (opts.randomIndex == -1)
        opts.randomIndex = els.length - 1;
      opts.nextSlide = opts.randomMap[opts.randomIndex];
    } else if (opts.random) {
      opts.nextSlide = opts.randomMap[opts.randomIndex];
    } else {
      opts.nextSlide = opts.currSlide + val;
      if (opts.nextSlide < 0) {
        if (opts.nowrap) return false;
        opts.nextSlide = els.length - 1;
      } else if (opts.nextSlide >= els.length) {
        if (opts.nowrap) return false;
        opts.nextSlide = 0;
      }
    }
    var cb = opts.onPrevNextEvent || opts.prevNextClick;
    if (typeof cb === "function")
      cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
    go(els, opts, 1, val >= 0);
    return false;
  }
  ;
  function buildPager(els, opts) {
    var $p = $(opts.pager);
    $.each(els, function(i, o) {
      $.fn.cycle.createPagerAnchor(i, o, $p, els, opts);
    });
    opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
  }
  ;
  $.fn.cycle.createPagerAnchor = function(i, el, $p, els, opts) {
    var a;
    if (typeof opts.pagerAnchorBuilder === "function") {
      a = opts.pagerAnchorBuilder(i, el);
      debug("pagerAnchorBuilder(" + i + ", el) returned: " + a);
    } else
      a = '<a href="#">' + (i + 1) + "</a>";
    if (!a)
      return;
    var $a = $(a);
    if ($a.parents("body").length === 0) {
      var arr = [];
      if ($p.length > 1) {
        $p.each(function() {
          var $clone = $a.clone(true);
          $(this).append($clone);
          arr.push($clone[0]);
        });
        $a = $(arr);
      } else {
        $a.appendTo($p);
      }
    }
    opts.pagerAnchors = opts.pagerAnchors || [];
    opts.pagerAnchors.push($a);
    $a.on(opts.pagerEvent, function(e) {
      e.preventDefault();
      opts.nextSlide = i;
      var p2 = opts.$cont[0], timeout = p2.cycleTimeout;
      if (timeout) {
        clearTimeout(timeout);
        p2.cycleTimeout = 0;
      }
      var cb = opts.onPagerEvent || opts.pagerClick;
      if (typeof cb === "function")
        cb(opts.nextSlide, els[opts.nextSlide]);
      go(els, opts, 1, opts.currSlide < i);
    });
    if (!/^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble)
      $a.on("click.cycle", function() {
        return false;
      });
    if (opts.pauseOnPagerHover)
      $a.on("mouseenter", function() {
        opts.$cont[0].cyclePause++;
      }).on("mouseleave", function() {
        opts.$cont[0].cyclePause--;
      });
  };
  $.fn.cycle.hopsFromLast = function(opts, fwd) {
    var hops, l = opts.lastSlide, c = opts.currSlide;
    if (fwd)
      hops = c > l ? c - l : opts.slideCount - l;
    else
      hops = c < l ? l - c : l + opts.slideCount - c;
    return hops;
  };
  function clearTypeFix($slides2) {
    debug("applying clearType background-color hack");
    function hex(s) {
      s = parseInt(s).toString(16);
      return s.length < 2 ? "0" + s : s;
    }
    ;
    function getBg(e) {
      for (; e && e.nodeName.toLowerCase() != "html"; e = e.parentNode) {
        var v = $.css(e, "background-color");
        if (v.indexOf("rgb") >= 0) {
          var rgb = v.match(/\d+/g);
          return "#" + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
        }
        if (v && v != "transparent")
          return v;
      }
      return "#ffffff";
    }
    ;
    $slides2.each(function() {
      $(this).css("background-color", getBg(this));
    });
  }
  ;
  $.fn.cycle.commonReset = function(curr, next, opts, w, h, rev) {
    $(opts.elements).not(curr).hide();
    opts.cssBefore.opacity = 1;
    opts.cssBefore.display = "block";
    if (w !== false && next.cycleW > 0)
      opts.cssBefore.width = next.cycleW;
    if (h !== false && next.cycleH > 0)
      opts.cssBefore.height = next.cycleH;
    opts.cssAfter = opts.cssAfter || {};
    opts.cssAfter.display = "none";
    $(curr).css("zIndex", opts.slideCount + (rev === true ? 1 : 0));
    $(next).css("zIndex", opts.slideCount + (rev === true ? 0 : 1));
  };
  $.fn.cycle.custom = function(curr, next, opts, cb, fwd, speedOverride) {
    var $l = $(curr), $n = $(next);
    var speedIn = opts.speedIn, speedOut = opts.speedOut, easeIn = opts.easeIn, easeOut = opts.easeOut;
    $n.css(opts.cssBefore);
    if (speedOverride) {
      if (typeof speedOverride == "number")
        speedIn = speedOut = speedOverride;
      else
        speedIn = speedOut = 1;
      easeIn = easeOut = null;
    }
    var fn = function() {
      $n.animate(opts.animIn, speedIn, easeIn, cb);
    };
    $l.animate(opts.animOut, speedOut, easeOut, function() {
      if (opts.cssAfter) $l.css(opts.cssAfter);
      if (!opts.sync) fn();
    });
    if (opts.sync) fn();
  };
  $.fn.cycle.transitions = {
    fade: function($cont, $slides2, opts) {
      $slides2.not(":eq(" + opts.currSlide + ")").css("opacity", "0");
      opts.before.push(function(curr, next, opts2) {
        $.fn.cycle.commonReset(curr, next, opts2);
        opts2.cssBefore.opacity = 0;
      });
      opts.animIn = { opacity: 1 };
      opts.animOut = { opacity: 0 };
      opts.cssBefore = { top: 0, left: 0 };
    }
  };
  $.fn.cycle.ver = function() {
    return ver;
  };
  $.fn.cycle.defaults = {
    fx: "fade",
    // name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle')
    timeout: 4e3,
    // milliseconds between slide transitions (0 to disable auto advance)
    timeoutFn: null,
    // callback for determining per-slide timeout value:  function(currSlideElement, nextSlideElement, options, forwardFlag)
    continuous: 0,
    // true to start next transition immediately after current one completes
    speed: 1e3,
    // speed of the transition (any valid fx speed value)
    speedIn: null,
    // speed of the 'in' transition
    speedOut: null,
    // speed of the 'out' transition
    next: null,
    // selector for element to use as event trigger for next slide
    prev: null,
    // selector for element to use as event trigger for previous slide
    //	prevNextClick: null,  // @deprecated; please use onPrevNextEvent instead
    onPrevNextEvent: null,
    // callback fn for prev/next events: function(isNext, zeroBasedSlideIndex, slideElement)
    prevNextEvent: "click.cycle",
    // event which drives the manual transition to the previous or next slide
    pager: null,
    // selector for element to use as pager container
    //pagerClick   null,  // @deprecated; please use onPagerEvent instead
    onPagerEvent: null,
    // callback fn for pager events: function(zeroBasedSlideIndex, slideElement)
    pagerEvent: "click.cycle",
    // name of event which drives the pager navigation
    allowPagerClickBubble: false,
    // allows or prevents click event on pager anchors from bubbling
    pagerAnchorBuilder: null,
    // callback fn for building anchor links:  function(index, DOMelement)
    before: null,
    // transition callback (scope set to element to be shown):	 function(currSlideElement, nextSlideElement, options, forwardFlag)
    after: null,
    // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
    end: null,
    // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
    easing: null,
    // easing method for both in and out transitions
    easeIn: null,
    // easing for "in" transition
    easeOut: null,
    // easing for "out" transition
    shuffle: null,
    // coords for shuffle animation, ex: { top:15, left: 200 }
    animIn: null,
    // properties that define how the slide animates in
    animOut: null,
    // properties that define how the slide animates out
    cssBefore: null,
    // properties that define the initial state of the slide before transitioning in
    cssAfter: null,
    // properties that defined the state of the slide after transitioning out
    fxFn: null,
    // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
    height: "auto",
    // container height
    startingSlide: 0,
    // zero-based index of the first slide to be displayed
    sync: 1,
    // true if in/out transitions should occur simultaneously
    random: 0,
    // true for random, false for sequence (not applicable to shuffle fx)
    fit: 0,
    // force slides to fit container
    containerResize: 1,
    // resize container to fit largest slide
    pause: 0,
    // true to enable "pause on hover"
    pauseOnPagerHover: 0,
    // true to pause when hovering over pager link
    autostop: 0,
    // true to end slideshow after X transitions (where X == slide count)
    autostopCount: 0,
    // number of transitions (optionally used with autostop to define X)
    delay: 0,
    // additional delay (in ms) for first transition (hint: can be negative)
    slideExpr: null,
    // expression for selecting slides (if something other than all children is required)
    cleartype: !$.support.opacity,
    // true if clearType corrections should be applied (for IE)
    cleartypeNoBg: false,
    // set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
    nowrap: 0,
    // true to prevent slideshow from wrapping
    fastOnEvent: 0,
    // force fast transitions when triggered manually (via pager or prev/next); value == time in ms
    randomizeEffects: 1,
    // valid when multiple effects are used; true to make the effect sequence random
    rev: 0,
    // causes animations to transition in reverse
    manualTrump: true,
    // causes manual transition to stop an active transition instead of being ignored
    requeueOnImageNotLoaded: true,
    // requeue the slideshow if any image slides are not yet loaded
    requeueTimeout: 250,
    // ms delay for requeue
    activePagerClass: "activeSlide",
    // class name used for the active pager link
    updateActivePagerLink: null,
    // callback fn invoked to update the active pager link (adds/removes activePagerClass style)
    backwards: false
    // true to start slideshow at last slide and move backwards through the stack
  };
})(jQuery);
(function($) {
  $.fn.cycle.transitions.none = function($cont, $slides2, opts) {
    opts.fxFn = function(curr, next, opts2, after) {
      $(next).show();
      $(curr).hide();
      after();
    };
  };
  $.fn.cycle.transitions.scrollUp = function($cont, $slides2, opts) {
    $cont.css("overflow", "hidden");
    opts.before.push($.fn.cycle.commonReset);
    var h = $cont.height();
    opts.cssBefore = { top: h, left: 0 };
    opts.cssFirst = { top: 0 };
    opts.animIn = { top: 0 };
    opts.animOut = { top: -h };
  };
  $.fn.cycle.transitions.scrollDown = function($cont, $slides2, opts) {
    $cont.css("overflow", "hidden");
    opts.before.push($.fn.cycle.commonReset);
    var h = $cont.height();
    opts.cssFirst = { top: 0 };
    opts.cssBefore = { top: -h, left: 0 };
    opts.animIn = { top: 0 };
    opts.animOut = { top: h };
  };
  $.fn.cycle.transitions.scrollLeft = function($cont, $slides2, opts) {
    $cont.css("overflow", "hidden");
    opts.before.push($.fn.cycle.commonReset);
    var w = $cont.width();
    opts.cssFirst = { left: 0 };
    opts.cssBefore = { left: w, top: 0 };
    opts.animIn = { left: 0 };
    opts.animOut = { left: 0 - w };
  };
  $.fn.cycle.transitions.scrollRight = function($cont, $slides2, opts) {
    $cont.css("overflow", "hidden");
    opts.before.push($.fn.cycle.commonReset);
    var w = $cont.width();
    opts.cssFirst = { left: 0 };
    opts.cssBefore = { left: -w, top: 0 };
    opts.animIn = { left: 0 };
    opts.animOut = { left: w };
  };
  $.fn.cycle.transitions.scrollHorz = function($cont, $slides2, opts) {
    $cont.css("overflow", "hidden").width();
    opts.before.push(function(curr, next, opts2, fwd) {
      $.fn.cycle.commonReset(curr, next, opts2);
      opts2.cssBefore.left = fwd ? next.cycleW - 1 : 1 - next.cycleW;
      opts2.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
    });
    opts.cssFirst = { left: 0 };
    opts.cssBefore = { top: 0 };
    opts.animIn = { left: 0 };
    opts.animOut = { top: 0 };
  };
  $.fn.cycle.transitions.scrollVert = function($cont, $slides2, opts) {
    $cont.css("overflow", "hidden");
    opts.before.push(function(curr, next, opts2, fwd) {
      $.fn.cycle.commonReset(curr, next, opts2);
      opts2.cssBefore.top = fwd ? 1 - next.cycleH : next.cycleH - 1;
      opts2.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
    });
    opts.cssFirst = { top: 0 };
    opts.cssBefore = { left: 0 };
    opts.animIn = { top: 0 };
    opts.animOut = { left: 0 };
  };
  $.fn.cycle.transitions.slideX = function($cont, $slides2, opts) {
    opts.before.push(function(curr, next, opts2) {
      $(opts2.elements).not(curr).hide();
      $.fn.cycle.commonReset(curr, next, opts2, false, true);
      opts2.animIn.width = next.cycleW;
    });
    opts.cssBefore = { left: 0, top: 0, width: 0 };
    opts.animIn = { width: "show" };
    opts.animOut = { width: 0 };
  };
  $.fn.cycle.transitions.slideY = function($cont, $slides2, opts) {
    opts.before.push(function(curr, next, opts2) {
      $(opts2.elements).not(curr).hide();
      $.fn.cycle.commonReset(curr, next, opts2, true, false);
      opts2.animIn.height = next.cycleH;
    });
    opts.cssBefore = { left: 0, top: 0, height: 0 };
    opts.animIn = { height: "show" };
    opts.animOut = { height: 0 };
  };
  $.fn.cycle.transitions.shuffle = function($cont, $slides2, opts) {
    var i, w = $cont.css("overflow", "visible").width();
    $slides2.css({ left: 0, top: 0 });
    opts.before.push(function(curr, next, opts2) {
      $.fn.cycle.commonReset(curr, next, opts2, true, true, true);
    });
    if (!opts.speedAdjusted) {
      opts.speed = opts.speed / 2;
      opts.speedAdjusted = true;
    }
    opts.random = 0;
    opts.shuffle = opts.shuffle || { left: -w, top: 15 };
    opts.els = [];
    for (i = 0; i < $slides2.length; i++)
      opts.els.push($slides2[i]);
    for (i = 0; i < opts.currSlide; i++)
      opts.els.push(opts.els.shift());
    opts.fxFn = function(curr, next, opts2, cb, fwd) {
      var $el = fwd ? $(curr) : $(next);
      $(next).css(opts2.cssBefore);
      var count = opts2.slideCount;
      $el.animate(opts2.shuffle, opts2.speedIn, opts2.easeIn, function() {
        var hops = $.fn.cycle.hopsFromLast(opts2, fwd);
        for (var k = 0; k < hops; k++)
          fwd ? opts2.els.push(opts2.els.shift()) : opts2.els.unshift(opts2.els.pop());
        if (fwd) {
          for (var i2 = 0, len = opts2.els.length; i2 < len; i2++)
            $(opts2.els[i2]).css("z-index", len - i2 + count);
        } else {
          var z = $(curr).css("z-index");
          $el.css("z-index", parseInt(z) + 1 + count);
        }
        $el.animate({ left: 0, top: 0 }, opts2.speedOut, opts2.easeOut, function() {
          $(fwd ? this : curr).hide();
          if (cb) cb();
        });
      });
    };
    opts.cssBefore = { display: "block", opacity: 1, top: 0, left: 0 };
  };
  $.fn.cycle.transitions.turnUp = function($cont, $slides2, opts) {
    opts.before.push(function(curr, next, opts2) {
      $.fn.cycle.commonReset(curr, next, opts2, true, false);
      opts2.cssBefore.top = next.cycleH;
      opts2.animIn.height = next.cycleH;
    });
    opts.cssFirst = { top: 0 };
    opts.cssBefore = { left: 0, height: 0 };
    opts.animIn = { top: 0 };
    opts.animOut = { height: 0 };
  };
  $.fn.cycle.transitions.turnDown = function($cont, $slides2, opts) {
    opts.before.push(function(curr, next, opts2) {
      $.fn.cycle.commonReset(curr, next, opts2, true, false);
      opts2.animIn.height = next.cycleH;
      opts2.animOut.top = curr.cycleH;
    });
    opts.cssFirst = { top: 0 };
    opts.cssBefore = { left: 0, top: 0, height: 0 };
    opts.animOut = { height: 0 };
  };
  $.fn.cycle.transitions.turnLeft = function($cont, $slides2, opts) {
    opts.before.push(function(curr, next, opts2) {
      $.fn.cycle.commonReset(curr, next, opts2, false, true);
      opts2.cssBefore.left = next.cycleW;
      opts2.animIn.width = next.cycleW;
    });
    opts.cssBefore = { top: 0, width: 0 };
    opts.animIn = { left: 0 };
    opts.animOut = { width: 0 };
  };
  $.fn.cycle.transitions.turnRight = function($cont, $slides2, opts) {
    opts.before.push(function(curr, next, opts2) {
      $.fn.cycle.commonReset(curr, next, opts2, false, true);
      opts2.animIn.width = next.cycleW;
      opts2.animOut.left = curr.cycleW;
    });
    opts.cssBefore = { top: 0, left: 0, width: 0 };
    opts.animIn = { left: 0 };
    opts.animOut = { width: 0 };
  };
  $.fn.cycle.transitions.zoom = function($cont, $slides2, opts) {
    opts.before.push(function(curr, next, opts2) {
      $.fn.cycle.commonReset(curr, next, opts2, false, false, true);
      opts2.cssBefore.top = next.cycleH / 2;
      opts2.cssBefore.left = next.cycleW / 2;
      opts2.animIn = { top: 0, left: 0, width: next.cycleW, height: next.cycleH };
      opts2.animOut = { width: 0, height: 0, top: curr.cycleH / 2, left: curr.cycleW / 2 };
    });
    opts.cssFirst = { top: 0, left: 0 };
    opts.cssBefore = { width: 0, height: 0 };
  };
  $.fn.cycle.transitions.fadeZoom = function($cont, $slides2, opts) {
    opts.before.push(function(curr, next, opts2) {
      $.fn.cycle.commonReset(curr, next, opts2, false, false);
      opts2.cssBefore.left = next.cycleW / 2;
      opts2.cssBefore.top = next.cycleH / 2;
      opts2.animIn = { top: 0, left: 0, width: next.cycleW, height: next.cycleH };
    });
    opts.cssBefore = { width: 0, height: 0 };
    opts.animOut = { opacity: 0 };
  };
  $.fn.cycle.transitions.blindX = function($cont, $slides2, opts) {
    var w = $cont.css("overflow", "hidden").width();
    opts.before.push(function(curr, next, opts2) {
      $.fn.cycle.commonReset(curr, next, opts2);
      opts2.animIn.width = next.cycleW;
      opts2.animOut.left = curr.cycleW;
    });
    opts.cssBefore = { left: w, top: 0 };
    opts.animIn = { left: 0 };
    opts.animOut = { left: w };
  };
  $.fn.cycle.transitions.blindY = function($cont, $slides2, opts) {
    var h = $cont.css("overflow", "hidden").height();
    opts.before.push(function(curr, next, opts2) {
      $.fn.cycle.commonReset(curr, next, opts2);
      opts2.animIn.height = next.cycleH;
      opts2.animOut.top = curr.cycleH;
    });
    opts.cssBefore = { top: h, left: 0 };
    opts.animIn = { top: 0 };
    opts.animOut = { top: h };
  };
  $.fn.cycle.transitions.blindZ = function($cont, $slides2, opts) {
    var h = $cont.css("overflow", "hidden").height();
    var w = $cont.width();
    opts.before.push(function(curr, next, opts2) {
      $.fn.cycle.commonReset(curr, next, opts2);
      opts2.animIn.height = next.cycleH;
      opts2.animOut.top = curr.cycleH;
    });
    opts.cssBefore = { top: h, left: w };
    opts.animIn = { top: 0, left: 0 };
    opts.animOut = { top: h, left: w };
  };
  $.fn.cycle.transitions.growX = function($cont, $slides2, opts) {
    opts.before.push(function(curr, next, opts2) {
      $.fn.cycle.commonReset(curr, next, opts2, false, true);
      opts2.cssBefore.left = this.cycleW / 2;
      opts2.animIn = { left: 0, width: this.cycleW };
      opts2.animOut = { left: 0 };
    });
    opts.cssBefore = { width: 0, top: 0 };
  };
  $.fn.cycle.transitions.growY = function($cont, $slides2, opts) {
    opts.before.push(function(curr, next, opts2) {
      $.fn.cycle.commonReset(curr, next, opts2, true, false);
      opts2.cssBefore.top = this.cycleH / 2;
      opts2.animIn = { top: 0, height: this.cycleH };
      opts2.animOut = { top: 0 };
    });
    opts.cssBefore = { height: 0, left: 0 };
  };
  $.fn.cycle.transitions.curtainX = function($cont, $slides2, opts) {
    opts.before.push(function(curr, next, opts2) {
      $.fn.cycle.commonReset(curr, next, opts2, false, true, true);
      opts2.cssBefore.left = next.cycleW / 2;
      opts2.animIn = { left: 0, width: this.cycleW };
      opts2.animOut = { left: curr.cycleW / 2, width: 0 };
    });
    opts.cssBefore = { top: 0, width: 0 };
  };
  $.fn.cycle.transitions.curtainY = function($cont, $slides2, opts) {
    opts.before.push(function(curr, next, opts2) {
      $.fn.cycle.commonReset(curr, next, opts2, true, false, true);
      opts2.cssBefore.top = next.cycleH / 2;
      opts2.animIn = { top: 0, height: next.cycleH };
      opts2.animOut = { top: curr.cycleH / 2, height: 0 };
    });
    opts.cssBefore = { left: 0, height: 0 };
  };
  $.fn.cycle.transitions.cover = function($cont, $slides2, opts) {
    var d = opts.direction || "left";
    var w = $cont.css("overflow", "hidden").width();
    var h = $cont.height();
    opts.before.push(function(curr, next, opts2) {
      $.fn.cycle.commonReset(curr, next, opts2);
      if (d == "right")
        opts2.cssBefore.left = -w;
      else if (d == "up")
        opts2.cssBefore.top = h;
      else if (d == "down")
        opts2.cssBefore.top = -h;
      else
        opts2.cssBefore.left = w;
    });
    opts.animIn = { left: 0, top: 0 };
    opts.animOut = { opacity: 1 };
    opts.cssBefore = { top: 0, left: 0 };
  };
  $.fn.cycle.transitions.uncover = function($cont, $slides2, opts) {
    var d = opts.direction || "left";
    var w = $cont.css("overflow", "hidden").width();
    var h = $cont.height();
    opts.before.push(function(curr, next, opts2) {
      $.fn.cycle.commonReset(curr, next, opts2, true, true, true);
      if (d == "right")
        opts2.animOut.left = w;
      else if (d == "up")
        opts2.animOut.top = -h;
      else if (d == "down")
        opts2.animOut.top = h;
      else
        opts2.animOut.left = -w;
    });
    opts.animIn = { left: 0, top: 0 };
    opts.animOut = { opacity: 1 };
    opts.cssBefore = { top: 0, left: 0 };
  };
  $.fn.cycle.transitions.toss = function($cont, $slides2, opts) {
    var w = $cont.css("overflow", "visible").width();
    var h = $cont.height();
    opts.before.push(function(curr, next, opts2) {
      $.fn.cycle.commonReset(curr, next, opts2, true, true, true);
      if (!opts2.animOut.left && !opts2.animOut.top)
        opts2.animOut = { left: w * 2, top: -h / 2, opacity: 0 };
      else
        opts2.animOut.opacity = 0;
    });
    opts.cssBefore = { left: 0, top: 0 };
    opts.animIn = { left: 0 };
  };
  $.fn.cycle.transitions.wipe = function($cont, $slides2, opts) {
    var w = $cont.css("overflow", "hidden").width();
    var h = $cont.height();
    opts.cssBefore = opts.cssBefore || {};
    var clip;
    if (opts.clip) {
      if (/l2r/.test(opts.clip))
        clip = "rect(0px 0px " + h + "px 0px)";
      else if (/r2l/.test(opts.clip))
        clip = "rect(0px " + w + "px " + h + "px " + w + "px)";
      else if (/t2b/.test(opts.clip))
        clip = "rect(0px " + w + "px 0px 0px)";
      else if (/b2t/.test(opts.clip))
        clip = "rect(" + h + "px " + w + "px " + h + "px 0px)";
      else if (/zoom/.test(opts.clip)) {
        var top = parseInt(h / 2);
        var left = parseInt(w / 2);
        clip = "rect(" + top + "px " + left + "px " + top + "px " + left + "px)";
      }
    }
    opts.cssBefore.clip = opts.cssBefore.clip || clip || "rect(0px 0px 0px 0px)";
    var d = opts.cssBefore.clip.match(/(\d+)/g);
    var t = parseInt(d[0]), r = parseInt(d[1]), b = parseInt(d[2]), l = parseInt(d[3]);
    opts.before.push(function(curr, next, opts2) {
      if (curr == next) return;
      var $curr = $(curr), $next = $(next);
      $.fn.cycle.commonReset(curr, next, opts2, true, true, false);
      opts2.cssAfter.display = "block";
      var step = 1, count = parseInt(opts2.speedIn / 13) - 1;
      (function f() {
        var tt = t ? t - parseInt(step * (t / count)) : 0;
        var ll = l ? l - parseInt(step * (l / count)) : 0;
        var bb = b < h ? b + parseInt(step * ((h - b) / count || 1)) : h;
        var rr = r < w ? r + parseInt(step * ((w - r) / count || 1)) : w;
        $next.css({ clip: "rect(" + tt + "px " + rr + "px " + bb + "px " + ll + "px)" });
        step++ <= count ? setTimeout(f, 13) : $curr.css("display", "none");
      })();
    });
    opts.cssBefore = { display: "block", opacity: 1, top: 0, left: 0 };
    opts.animIn = { left: 0 };
    opts.animOut = { left: 0 };
  };
})(jQuery);

// src/imageswitch/1-imageswitch.js
var ImageSwitch = class extends BaseWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    this.jq.cycle(this.cfg);
  }
  /**
   * Starts slideshow mode.
   */
  resumeSlideshow() {
    this.jq.cycle("resume");
  }
  /**
   * Stops slideshow mode.
   */
  stopSlideshow() {
    this.jq.cycle("stop");
  }
  /**
   * Stops or starts slideshow mode.
   */
  toggleSlideshow() {
    this.jq.cycle("toggle");
  }
  /**
   * Pauses slideshow mode.
   */
  pauseSlideshow() {
    this.jq.cycle("pause");
  }
  /**
   * Switches to the next image.
   */
  next() {
    this.jq.cycle("next");
  }
  /**
   * Switches to the previous image.
   */
  previous() {
    this.jq.cycle("prev");
  }
  /**
   * Switches to the image with given index.
   * @param {number} index 0-based index of the image to switch to.
   */
  switchTo(index) {
    this.jq.cycle(index);
  }
};
export {
  ImageSwitch
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2ltYWdlc3dpdGNoLzAtanF1ZXJ5LWltYWdlc3dpdGNoLmpzIiwgIi4uL3NyYy9pbWFnZXN3aXRjaC8xLWltYWdlc3dpdGNoLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKlxuICogalF1ZXJ5IEN5Y2xlIFBsdWdpbiAod2l0aCBUcmFuc2l0aW9uIERlZmluaXRpb25zKVxuICogRXhhbXBsZXMgYW5kIGRvY3VtZW50YXRpb24gYXQ6IGh0dHA6Ly9qcXVlcnkubWFsc3VwLmNvbS9jeWNsZS9cbiAqIENvcHlyaWdodCAoYykgMjAwNy0yMDEwIE0uIEFsc3VwXG4gKiBWZXJzaW9uOiAyLjg4ICgwOC1KVU4tMjAxMClcbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBhbmQgR1BMIGxpY2Vuc2VzLlxuICogaHR0cDovL2pxdWVyeS5tYWxzdXAuY29tL2xpY2Vuc2UuaHRtbFxuICogUmVxdWlyZXM6IGpRdWVyeSB2MS4yLjYgb3IgbGF0ZXJcbiAqL1xuOyhmdW5jdGlvbigkKSB7XG5cbnZhciB2ZXIgPSAnMi44OCc7XG5cbi8vIGlmICQuc3VwcG9ydCBpcyBub3QgZGVmaW5lZCAocHJlIGpRdWVyeSAxLjMpIGFkZCB3aGF0IEkgbmVlZFxuaWYgKCQuc3VwcG9ydCA9PSB1bmRlZmluZWQpIHtcblx0JC5zdXBwb3J0ID0ge1xuXHRcdG9wYWNpdHk6ICEoJC5icm93c2VyLm1zaWUpXG5cdH07XG59XG5cbmZ1bmN0aW9uIGRlYnVnKHMpIHtcblx0aWYgKCQuZm4uY3ljbGUuZGVidWcpXG5cdFx0bG9nKHMpO1xufVxuZnVuY3Rpb24gbG9nKCkge1xuXHRpZiAod2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUubG9nKVxuXHRcdHdpbmRvdy5jb25zb2xlLmxvZygnW2N5Y2xlXSAnICsgQXJyYXkucHJvdG90eXBlLmpvaW4uY2FsbChhcmd1bWVudHMsJyAnKSk7XG59O1xuXG4vLyB0aGUgb3B0aW9ucyBhcmcgY2FuIGJlLi4uXG4vLyAgIGEgbnVtYmVyICAtIGluZGljYXRlcyBhbiBpbW1lZGlhdGUgdHJhbnNpdGlvbiBzaG91bGQgb2NjdXIgdG8gdGhlIGdpdmVuIHNsaWRlIGluZGV4XG4vLyAgIGEgc3RyaW5nICAtICdwYXVzZScsICdyZXN1bWUnLCAndG9nZ2xlJywgJ25leHQnLCAncHJldicsICdzdG9wJywgJ2Rlc3Ryb3knIG9yIHRoZSBuYW1lIG9mIGEgdHJhbnNpdGlvbiBlZmZlY3QgKGllLCAnZmFkZScsICd6b29tJywgZXRjKVxuLy8gICBhbiBvYmplY3QgLSBwcm9wZXJ0aWVzIHRvIGNvbnRyb2wgdGhlIHNsaWRlc2hvd1xuLy9cbi8vIHRoZSBhcmcyIGFyZyBjYW4gYmUuLi5cbi8vICAgdGhlIG5hbWUgb2YgYW4gZnggKG9ubHkgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGEgbnVtZXJpYyB2YWx1ZSBmb3IgJ29wdGlvbnMnKVxuLy8gICB0aGUgdmFsdWUgdHJ1ZSAob25seSB1c2VkIGluIGZpcnN0IGFyZyA9PSAncmVzdW1lJykgYW5kIGluZGljYXRlc1xuLy9cdCB0aGF0IHRoZSByZXN1bWUgc2hvdWxkIG9jY3VyIGltbWVkaWF0ZWx5IChub3Qgd2FpdCBmb3IgbmV4dCB0aW1lb3V0KVxuXG4kLmZuLmN5Y2xlID0gZnVuY3Rpb24ob3B0aW9ucywgYXJnMikge1xuXHR2YXIgbyA9IHtzOiB0aGlzLnNlbGVjdG9yLCBjOiB0aGlzLmNvbnRleHR9O1xuXG5cdC8vIGluIDEuMysgd2UgY2FuIGZpeCBtaXN0YWtlcyB3aXRoIHRoZSByZWFkeSBzdGF0ZVxuXHRpZiAodGhpcy5sZW5ndGggPT09IDAgJiYgb3B0aW9ucyAhPSAnc3RvcCcpIHtcblx0XHRpZiAoISQuaXNSZWFkeSAmJiBvLnMpIHtcblx0XHRcdGxvZygnRE9NIG5vdCByZWFkeSwgcXVldWluZyBzbGlkZXNob3cnKTtcblx0XHRcdCQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoby5zLG8uYykuY3ljbGUob3B0aW9ucyxhcmcyKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdC8vIGlzIHlvdXIgRE9NIHJlYWR5PyAgaHR0cDovL2RvY3MuanF1ZXJ5LmNvbS9UdXRvcmlhbHM6SW50cm9kdWNpbmdfJChkb2N1bWVudCkucmVhZHkoKVxuXHRcdGxvZygndGVybWluYXRpbmc7IHplcm8gZWxlbWVudHMgZm91bmQgYnkgc2VsZWN0b3InICsgKCQuaXNSZWFkeSA/ICcnIDogJyAoRE9NIG5vdCByZWFkeSknKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvLyBpdGVyYXRlIHRoZSBtYXRjaGVkIG5vZGVzZXRcblx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHR2YXIgb3B0cyA9IGhhbmRsZUFyZ3VtZW50cyh0aGlzLCBvcHRpb25zLCBhcmcyKTtcblx0XHRpZiAob3B0cyA9PT0gZmFsc2UpXG5cdFx0XHRyZXR1cm47XG5cblx0XHRvcHRzLnVwZGF0ZUFjdGl2ZVBhZ2VyTGluayA9IG9wdHMudXBkYXRlQWN0aXZlUGFnZXJMaW5rIHx8ICQuZm4uY3ljbGUudXBkYXRlQWN0aXZlUGFnZXJMaW5rO1xuXG5cdFx0Ly8gc3RvcCBleGlzdGluZyBzbGlkZXNob3cgZm9yIHRoaXMgY29udGFpbmVyIChpZiB0aGVyZSBpcyBvbmUpXG5cdFx0aWYgKHRoaXMuY3ljbGVUaW1lb3V0KVxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuY3ljbGVUaW1lb3V0KTtcblx0XHR0aGlzLmN5Y2xlVGltZW91dCA9IHRoaXMuY3ljbGVQYXVzZSA9IDA7XG5cblx0XHR2YXIgJGNvbnQgPSAkKHRoaXMpO1xuXHRcdHZhciAkc2xpZGVzID0gb3B0cy5zbGlkZUV4cHIgPyAkKG9wdHMuc2xpZGVFeHByLCB0aGlzKSA6ICRjb250LmNoaWxkcmVuKCk7XG5cdFx0dmFyIGVscyA9ICRzbGlkZXMuZ2V0KCk7XG5cdFx0aWYgKGVscy5sZW5ndGggPCAyKSB7XG5cdFx0XHRsb2coJ3Rlcm1pbmF0aW5nOyB0b28gZmV3IHNsaWRlczogJyArIGVscy5sZW5ndGgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBvcHRzMiA9IGJ1aWxkT3B0aW9ucygkY29udCwgJHNsaWRlcywgZWxzLCBvcHRzLCBvKTtcblx0XHRpZiAob3B0czIgPT09IGZhbHNlKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0dmFyIHN0YXJ0VGltZSA9IG9wdHMyLmNvbnRpbnVvdXMgPyAxMCA6IGdldFRpbWVvdXQoZWxzW29wdHMyLmN1cnJTbGlkZV0sIGVsc1tvcHRzMi5uZXh0U2xpZGVdLCBvcHRzMiwgIW9wdHMyLnJldik7XG5cblx0XHQvLyBpZiBpdCdzIGFuIGF1dG8gc2xpZGVzaG93LCBraWNrIGl0IG9mZlxuXHRcdGlmIChzdGFydFRpbWUpIHtcblx0XHRcdHN0YXJ0VGltZSArPSAob3B0czIuZGVsYXkgfHwgMCk7XG5cdFx0XHRpZiAoc3RhcnRUaW1lIDwgMTApXG5cdFx0XHRcdHN0YXJ0VGltZSA9IDEwO1xuXHRcdFx0ZGVidWcoJ2ZpcnN0IHRpbWVvdXQ6ICcgKyBzdGFydFRpbWUpO1xuXHRcdFx0dGhpcy5jeWNsZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Z28oZWxzLG9wdHMyLDAsKCFvcHRzMi5yZXYgJiYgIW9wdHMuYmFja3dhcmRzKSl9LCBzdGFydFRpbWUpO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vLyBwcm9jZXNzIHRoZSBhcmdzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIHBsdWdpbiBmblxuZnVuY3Rpb24gaGFuZGxlQXJndW1lbnRzKGNvbnQsIG9wdGlvbnMsIGFyZzIpIHtcblx0aWYgKGNvbnQuY3ljbGVTdG9wID09IHVuZGVmaW5lZClcblx0XHRjb250LmN5Y2xlU3RvcCA9IDA7XG5cdGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucyA9PT0gbnVsbClcblx0XHRvcHRpb25zID0ge307XG5cdGlmIChvcHRpb25zLmNvbnN0cnVjdG9yID09IFN0cmluZykge1xuXHRcdHN3aXRjaChvcHRpb25zKSB7XG5cdFx0Y2FzZSAnZGVzdHJveSc6XG5cdFx0Y2FzZSAnc3RvcCc6XG5cdFx0XHR2YXIgb3B0cyA9ICQoY29udCkuZGF0YSgnY3ljbGUub3B0cycpO1xuXHRcdFx0aWYgKCFvcHRzKVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRjb250LmN5Y2xlU3RvcCsrOyAvLyBjYWxsYmFja3MgbG9vayBmb3IgY2hhbmdlXG5cdFx0XHRpZiAoY29udC5jeWNsZVRpbWVvdXQpXG5cdFx0XHRcdGNsZWFyVGltZW91dChjb250LmN5Y2xlVGltZW91dCk7XG5cdFx0XHRjb250LmN5Y2xlVGltZW91dCA9IDA7XG5cdFx0XHQkKGNvbnQpLnJlbW92ZURhdGEoJ2N5Y2xlLm9wdHMnKTtcblx0XHRcdGlmIChvcHRpb25zID09ICdkZXN0cm95Jylcblx0XHRcdFx0ZGVzdHJveShvcHRzKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRjYXNlICd0b2dnbGUnOlxuXHRcdFx0Y29udC5jeWNsZVBhdXNlID0gKGNvbnQuY3ljbGVQYXVzZSA9PT0gMSkgPyAwIDogMTtcblx0XHRcdGNoZWNrSW5zdGFudFJlc3VtZShjb250LmN5Y2xlUGF1c2UsIGFyZzIsIGNvbnQpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdGNhc2UgJ3BhdXNlJzpcblx0XHRcdGNvbnQuY3ljbGVQYXVzZSA9IDE7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0Y2FzZSAncmVzdW1lJzpcblx0XHRcdGNvbnQuY3ljbGVQYXVzZSA9IDA7XG5cdFx0XHRjaGVja0luc3RhbnRSZXN1bWUoZmFsc2UsIGFyZzIsIGNvbnQpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdGNhc2UgJ3ByZXYnOlxuXHRcdGNhc2UgJ25leHQnOlxuXHRcdFx0dmFyIG9wdHMgPSAkKGNvbnQpLmRhdGEoJ2N5Y2xlLm9wdHMnKTtcblx0XHRcdGlmICghb3B0cykge1xuXHRcdFx0XHRsb2coJ29wdGlvbnMgbm90IGZvdW5kLCBcInByZXYvbmV4dFwiIGlnbm9yZWQnKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0JC5mbi5jeWNsZVtvcHRpb25zXShvcHRzKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0b3B0aW9ucyA9IHtmeDogb3B0aW9uc307XG5cdFx0fTtcblx0XHRyZXR1cm4gb3B0aW9ucztcblx0fVxuXHRlbHNlIGlmIChvcHRpb25zLmNvbnN0cnVjdG9yID09IE51bWJlcikge1xuXHRcdC8vIGdvIHRvIHRoZSByZXF1ZXN0ZWQgc2xpZGVcblx0XHR2YXIgbnVtID0gb3B0aW9ucztcblx0XHRvcHRpb25zID0gJChjb250KS5kYXRhKCdjeWNsZS5vcHRzJyk7XG5cdFx0aWYgKCFvcHRpb25zKSB7XG5cdFx0XHRsb2coJ29wdGlvbnMgbm90IGZvdW5kLCBjYW4gbm90IGFkdmFuY2Ugc2xpZGUnKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKG51bSA8IDAgfHwgbnVtID49IG9wdGlvbnMuZWxlbWVudHMubGVuZ3RoKSB7XG5cdFx0XHRsb2coJ2ludmFsaWQgc2xpZGUgaW5kZXg6ICcgKyBudW0pO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRvcHRpb25zLm5leHRTbGlkZSA9IG51bTtcblx0XHRpZiAoY29udC5jeWNsZVRpbWVvdXQpIHtcblx0XHRcdGNsZWFyVGltZW91dChjb250LmN5Y2xlVGltZW91dCk7XG5cdFx0XHRjb250LmN5Y2xlVGltZW91dCA9IDA7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgYXJnMiA9PSAnc3RyaW5nJylcblx0XHRcdG9wdGlvbnMub25lVGltZUZ4ID0gYXJnMjtcblx0XHRnbyhvcHRpb25zLmVsZW1lbnRzLCBvcHRpb25zLCAxLCBudW0gPj0gb3B0aW9ucy5jdXJyU2xpZGUpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gb3B0aW9ucztcblxuXHRmdW5jdGlvbiBjaGVja0luc3RhbnRSZXN1bWUoaXNQYXVzZWQsIGFyZzIsIGNvbnQpIHtcblx0XHRpZiAoIWlzUGF1c2VkICYmIGFyZzIgPT09IHRydWUpIHsgLy8gcmVzdW1lIG5vdyFcblx0XHRcdHZhciBvcHRpb25zID0gJChjb250KS5kYXRhKCdjeWNsZS5vcHRzJyk7XG5cdFx0XHRpZiAoIW9wdGlvbnMpIHtcblx0XHRcdFx0bG9nKCdvcHRpb25zIG5vdCBmb3VuZCwgY2FuIG5vdCByZXN1bWUnKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNvbnQuY3ljbGVUaW1lb3V0KSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dChjb250LmN5Y2xlVGltZW91dCk7XG5cdFx0XHRcdGNvbnQuY3ljbGVUaW1lb3V0ID0gMDtcblx0XHRcdH1cblx0XHRcdGdvKG9wdGlvbnMuZWxlbWVudHMsIG9wdGlvbnMsIDEsICghb3B0cy5yZXYgJiYgIW9wdHMuYmFja3dhcmRzKSk7XG5cdFx0fVxuXHR9XG59O1xuXG5mdW5jdGlvbiByZW1vdmVGaWx0ZXIoZWwsIG9wdHMpIHtcblx0aWYgKCEkLnN1cHBvcnQub3BhY2l0eSAmJiBvcHRzLmNsZWFydHlwZSAmJiBlbC5zdHlsZS5maWx0ZXIpIHtcblx0XHR0cnkge2VsLnN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnZmlsdGVyJyk7fVxuXHRcdGNhdGNoKHNtb3RoZXIpIHt9IC8vIGhhbmRsZSBvbGQgb3BlcmEgdmVyc2lvbnNcblx0fVxufTtcblxuLy8gdW5iaW5kIGV2ZW50IGhhbmRsZXJzXG5mdW5jdGlvbiBkZXN0cm95KG9wdHMpIHtcblx0aWYgKG9wdHMubmV4dClcblx0XHQkKG9wdHMubmV4dCkub2ZmKG9wdHMucHJldk5leHRFdmVudCk7XG5cdGlmIChvcHRzLnByZXYpXG5cdFx0JChvcHRzLnByZXYpLm9mZihvcHRzLnByZXZOZXh0RXZlbnQpO1xuXG5cdGlmIChvcHRzLnBhZ2VyIHx8IG9wdHMucGFnZXJBbmNob3JCdWlsZGVyKVxuXHRcdCQuZWFjaChvcHRzLnBhZ2VyQW5jaG9ycyB8fCBbXSwgZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLm9mZigpLnJlbW92ZSgpO1xuXHRcdH0pO1xuXHRvcHRzLnBhZ2VyQW5jaG9ycyA9IG51bGw7XG5cdGlmIChvcHRzLmRlc3Ryb3kpIC8vIGNhbGxiYWNrXG5cdFx0b3B0cy5kZXN0cm95KG9wdHMpO1xufTtcblxuLy8gb25lLXRpbWUgaW5pdGlhbGl6YXRpb25cbmZ1bmN0aW9uIGJ1aWxkT3B0aW9ucygkY29udCwgJHNsaWRlcywgZWxzLCBvcHRpb25zLCBvKSB7XG5cdC8vIHN1cHBvcnQgbWV0YWRhdGEgcGx1Z2luICh2MS4wIGFuZCB2Mi4wKVxuXHR2YXIgb3B0cyA9ICQuZXh0ZW5kKHt9LCAkLmZuLmN5Y2xlLmRlZmF1bHRzLCBvcHRpb25zIHx8IHt9LCAkLm1ldGFkYXRhID8gJGNvbnQubWV0YWRhdGEoKSA6ICQubWV0YSA/ICRjb250LmRhdGEoKSA6IHt9KTtcblx0aWYgKG9wdHMuYXV0b3N0b3ApXG5cdFx0b3B0cy5jb3VudGRvd24gPSBvcHRzLmF1dG9zdG9wQ291bnQgfHwgZWxzLmxlbmd0aDtcblxuXHR2YXIgY29udCA9ICRjb250WzBdO1xuXHQkY29udC5kYXRhKCdjeWNsZS5vcHRzJywgb3B0cyk7XG5cdG9wdHMuJGNvbnQgPSAkY29udDtcblx0b3B0cy5zdG9wQ291bnQgPSBjb250LmN5Y2xlU3RvcDtcblx0b3B0cy5lbGVtZW50cyA9IGVscztcblx0b3B0cy5iZWZvcmUgPSBvcHRzLmJlZm9yZSA/IFtvcHRzLmJlZm9yZV0gOiBbXTtcblx0b3B0cy5hZnRlciA9IG9wdHMuYWZ0ZXIgPyBbb3B0cy5hZnRlcl0gOiBbXTtcblx0b3B0cy5hZnRlci51bnNoaWZ0KGZ1bmN0aW9uKCl7b3B0cy5idXN5PTA7fSk7XG5cblx0Ly8gcHVzaCBzb21lIGFmdGVyIGNhbGxiYWNrc1xuXHRpZiAoISQuc3VwcG9ydC5vcGFjaXR5ICYmIG9wdHMuY2xlYXJ0eXBlKVxuXHRcdG9wdHMuYWZ0ZXIucHVzaChmdW5jdGlvbigpIHtyZW1vdmVGaWx0ZXIodGhpcywgb3B0cyk7fSk7XG5cdGlmIChvcHRzLmNvbnRpbnVvdXMpXG5cdFx0b3B0cy5hZnRlci5wdXNoKGZ1bmN0aW9uKCkge2dvKGVscyxvcHRzLDAsKCFvcHRzLnJldiAmJiAhb3B0cy5iYWNrd2FyZHMpKTt9KTtcblxuXHRzYXZlT3JpZ2luYWxPcHRzKG9wdHMpO1xuXG5cdC8vIGNsZWFyVHlwZSBjb3JyZWN0aW9uc1xuXHRpZiAoISQuc3VwcG9ydC5vcGFjaXR5ICYmIG9wdHMuY2xlYXJ0eXBlICYmICFvcHRzLmNsZWFydHlwZU5vQmcpXG5cdFx0Y2xlYXJUeXBlRml4KCRzbGlkZXMpO1xuXG5cdC8vIGNvbnRhaW5lciByZXF1aXJlcyBub24tc3RhdGljIHBvc2l0aW9uIHNvIHRoYXQgc2xpZGVzIGNhbiBiZSBwb3NpdGlvbiB3aXRoaW5cblx0aWYgKCRjb250LmNzcygncG9zaXRpb24nKSA9PSAnc3RhdGljJylcblx0XHQkY29udC5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG5cdGlmIChvcHRzLndpZHRoKVxuXHRcdCRjb250LndpZHRoKG9wdHMud2lkdGgpO1xuXHRpZiAob3B0cy5oZWlnaHQgJiYgb3B0cy5oZWlnaHQgIT0gJ2F1dG8nKVxuXHRcdCRjb250LmhlaWdodChvcHRzLmhlaWdodCk7XG5cblx0aWYgKG9wdHMuc3RhcnRpbmdTbGlkZSlcblx0XHRvcHRzLnN0YXJ0aW5nU2xpZGUgPSBwYXJzZUludChvcHRzLnN0YXJ0aW5nU2xpZGUpO1xuXHRlbHNlIGlmIChvcHRzLmJhY2t3YXJkcylcblx0XHRvcHRzLnN0YXJ0aW5nU2xpZGUgPSBlbHMubGVuZ3RoIC0gMTtcblxuXHQvLyBpZiByYW5kb20sIG1peCB1cCB0aGUgc2xpZGUgYXJyYXlcblx0aWYgKG9wdHMucmFuZG9tKSB7XG5cdFx0b3B0cy5yYW5kb21NYXAgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKylcblx0XHRcdG9wdHMucmFuZG9tTWFwLnB1c2goaSk7XG5cdFx0b3B0cy5yYW5kb21NYXAuc29ydChmdW5jdGlvbihhLGIpIHtyZXR1cm4gTWF0aC5yYW5kb20oKSAtIDAuNTt9KTtcblx0XHRvcHRzLnJhbmRvbUluZGV4ID0gMTtcblx0XHRvcHRzLnN0YXJ0aW5nU2xpZGUgPSBvcHRzLnJhbmRvbU1hcFsxXTtcblx0fVxuXHRlbHNlIGlmIChvcHRzLnN0YXJ0aW5nU2xpZGUgPj0gZWxzLmxlbmd0aClcblx0XHRvcHRzLnN0YXJ0aW5nU2xpZGUgPSAwOyAvLyBjYXRjaCBib2d1cyBpbnB1dFxuXHRvcHRzLmN1cnJTbGlkZSA9IG9wdHMuc3RhcnRpbmdTbGlkZSB8fCAwO1xuXHR2YXIgZmlyc3QgPSBvcHRzLnN0YXJ0aW5nU2xpZGU7XG5cblx0Ly8gc2V0IHBvc2l0aW9uIGFuZCB6SW5kZXggb24gYWxsIHRoZSBzbGlkZXNcblx0JHNsaWRlcy5jc3Moe3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6JzBweCcsIGxlZnQ6JzBweCd9KS5oaWRlKCkuZWFjaChmdW5jdGlvbihpKSB7XG5cdFx0dmFyIHo7XG5cdFx0aWYgKG9wdHMuYmFja3dhcmRzKVxuXHRcdFx0eiA9IGZpcnN0ID8gaSA8PSBmaXJzdCA/IGVscy5sZW5ndGggKyAoaS1maXJzdCkgOiBmaXJzdC1pIDogZWxzLmxlbmd0aC1pO1xuXHRcdGVsc2Vcblx0XHRcdHogPSBmaXJzdCA/IGkgPj0gZmlyc3QgPyBlbHMubGVuZ3RoIC0gKGktZmlyc3QpIDogZmlyc3QtaSA6IGVscy5sZW5ndGgtaTtcblx0XHQkKHRoaXMpLmNzcygnei1pbmRleCcsIFN0cmluZyh6KSlcblx0fSk7XG5cblx0Ly8gbWFrZSBzdXJlIGZpcnN0IHNsaWRlIGlzIHZpc2libGVcblx0JChlbHNbZmlyc3RdKS5jc3MoJ29wYWNpdHknLCcxJykuc2hvdygpOyAvLyBvcGFjaXR5IGJpdCBuZWVkZWQgdG8gaGFuZGxlIHJlc3RhcnQgdXNlIGNhc2Vcblx0cmVtb3ZlRmlsdGVyKGVsc1tmaXJzdF0sIG9wdHMpO1xuXG5cdC8vIHN0cmV0Y2ggc2xpZGVzXG5cdGlmIChvcHRzLmZpdCAmJiBvcHRzLndpZHRoKVxuXHRcdCRzbGlkZXMud2lkdGgob3B0cy53aWR0aCk7XG5cdGlmIChvcHRzLmZpdCAmJiBvcHRzLmhlaWdodCAmJiBvcHRzLmhlaWdodCAhPSAnYXV0bycpXG5cdFx0JHNsaWRlcy5oZWlnaHQob3B0cy5oZWlnaHQpO1xuXG5cdC8vIHN0cmV0Y2ggY29udGFpbmVyXG5cdHZhciByZXNoYXBlID0gb3B0cy5jb250YWluZXJSZXNpemUgJiYgISRjb250LmlubmVySGVpZ2h0KCk7XG5cdGlmIChyZXNoYXBlKSB7IC8vIGRvIHRoaXMgb25seSBpZiBjb250YWluZXIgaGFzIG5vIHNpemUgaHR0cDovL3Rpbnl1cmwuY29tL2RhMm9hOVxuXHRcdHZhciBtYXh3ID0gMCwgbWF4aCA9IDA7XG5cdFx0Zm9yKHZhciBqPTA7IGogPCBlbHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciAkZSA9ICQoZWxzW2pdKSwgZSA9ICRlWzBdLCB3ID0gJGUub3V0ZXJXaWR0aCgpLCBoID0gJGUub3V0ZXJIZWlnaHQoKTtcblx0XHRcdGlmICghdykgdyA9IGUub2Zmc2V0V2lkdGggfHwgZS53aWR0aCB8fCAkZS5hdHRyKCd3aWR0aCcpXG5cdFx0XHRpZiAoIWgpIGggPSBlLm9mZnNldEhlaWdodCB8fCBlLmhlaWdodCB8fCAkZS5hdHRyKCdoZWlnaHQnKTtcblx0XHRcdG1heHcgPSB3ID4gbWF4dyA/IHcgOiBtYXh3O1xuXHRcdFx0bWF4aCA9IGggPiBtYXhoID8gaCA6IG1heGg7XG5cdFx0fVxuXHRcdGlmIChtYXh3ID4gMCAmJiBtYXhoID4gMClcblx0XHRcdCRjb250LmNzcyh7d2lkdGg6bWF4dysncHgnLGhlaWdodDptYXhoKydweCd9KTtcblx0fVxuXG5cdGlmIChvcHRzLnBhdXNlKVxuXHRcdCRjb250Lm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbigpIHt0aGlzLmN5Y2xlUGF1c2UrKzt9KS5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7dGhpcy5jeWNsZVBhdXNlLS07fSk7XG5cblx0aWYgKHN1cHBvcnRNdWx0aVRyYW5zaXRpb25zKG9wdHMpID09PSBmYWxzZSlcblx0XHRyZXR1cm4gZmFsc2U7XG5cblx0Ly8gYXBwYXJlbnRseSBhIGxvdCBvZiBwZW9wbGUgdXNlIGltYWdlIHNsaWRlc2hvd3Mgd2l0aG91dCBoZWlnaHQvd2lkdGggYXR0cmlidXRlcyBvbiB0aGUgaW1hZ2VzLlxuXHQvLyBDeWNsZSAyLjUwKyByZXF1aXJlcyB0aGUgc2l6aW5nIGluZm8gZm9yIGV2ZXJ5IHNsaWRlOyB0aGlzIGJsb2NrIHRyaWVzIHRvIGRlYWwgd2l0aCB0aGF0LlxuXHR2YXIgcmVxdWV1ZSA9IGZhbHNlO1xuXHRvcHRpb25zLnJlcXVldWVBdHRlbXB0cyA9IG9wdGlvbnMucmVxdWV1ZUF0dGVtcHRzIHx8IDA7XG5cdCRzbGlkZXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHQvLyB0cnkgdG8gZ2V0IGhlaWdodC93aWR0aCBvZiBlYWNoIHNsaWRlXG5cdFx0dmFyICRlbCA9ICQodGhpcyk7XG5cdFx0dGhpcy5jeWNsZUggPSAob3B0cy5maXQgJiYgb3B0cy5oZWlnaHQpID8gb3B0cy5oZWlnaHQgOiAoJGVsLmhlaWdodCgpIHx8IHRoaXMub2Zmc2V0SGVpZ2h0IHx8IHRoaXMuaGVpZ2h0IHx8ICRlbC5hdHRyKCdoZWlnaHQnKSB8fCAwKTtcblx0XHR0aGlzLmN5Y2xlVyA9IChvcHRzLmZpdCAmJiBvcHRzLndpZHRoKSA/IG9wdHMud2lkdGggOiAoJGVsLndpZHRoKCkgfHwgdGhpcy5vZmZzZXRXaWR0aCB8fCB0aGlzLndpZHRoIHx8ICRlbC5hdHRyKCd3aWR0aCcpIHx8IDApO1xuXG5cdFx0aWYgKCAkZWwuaXMoJ2ltZycpICkge1xuXHRcdFx0Ly8gc2lnaC4uICBzbmlmZmluZywgaGFja2luZywgc2hydWdnaW5nLi4uICB0aGlzIGNyYXBweSBoYWNrIHRyaWVzIHRvIGFjY291bnQgZm9yIHdoYXQgYnJvd3NlcnMgZG8gd2hlblxuXHRcdFx0Ly8gYW4gaW1hZ2UgaXMgYmVpbmcgZG93bmxvYWRlZCBhbmQgdGhlIG1hcmt1cCBkaWQgbm90IGluY2x1ZGUgc2l6aW5nIGluZm8gKGhlaWdodC93aWR0aCBhdHRyaWJ1dGVzKTtcblx0XHRcdC8vIHRoZXJlIHNlZW1zIHRvIGJlIHNvbWUgXCJkZWZhdWx0XCIgc2l6ZXMgdXNlZCBpbiB0aGlzIHNpdHVhdGlvblxuXHRcdFx0dmFyIGxvYWRpbmdJRVx0PSAoJC5icm93c2VyLm1zaWUgICYmIHRoaXMuY3ljbGVXID09IDI4ICYmIHRoaXMuY3ljbGVIID09IDMwICYmICF0aGlzLmNvbXBsZXRlKTtcblx0XHRcdHZhciBsb2FkaW5nRkZcdD0gKCQuYnJvd3Nlci5tb3ppbGxhICYmIHRoaXMuY3ljbGVXID09IDM0ICYmIHRoaXMuY3ljbGVIID09IDE5ICYmICF0aGlzLmNvbXBsZXRlKTtcblx0XHRcdHZhciBsb2FkaW5nT3BcdD0gKCQuYnJvd3Nlci5vcGVyYSAmJiAoKHRoaXMuY3ljbGVXID09IDQyICYmIHRoaXMuY3ljbGVIID09IDE5KSB8fCAodGhpcy5jeWNsZVcgPT0gMzcgJiYgdGhpcy5jeWNsZUggPT0gMTcpKSAmJiAhdGhpcy5jb21wbGV0ZSk7XG5cdFx0XHR2YXIgbG9hZGluZ090aGVyID0gKHRoaXMuY3ljbGVIID09IDAgJiYgdGhpcy5jeWNsZVcgPT0gMCAmJiAhdGhpcy5jb21wbGV0ZSk7XG5cdFx0XHQvLyBkb24ndCByZXF1ZXVlIGZvciBpbWFnZXMgdGhhdCBhcmUgc3RpbGwgbG9hZGluZyBidXQgaGF2ZSBhIHZhbGlkIHNpemVcblx0XHRcdGlmIChsb2FkaW5nSUUgfHwgbG9hZGluZ0ZGIHx8IGxvYWRpbmdPcCB8fCBsb2FkaW5nT3RoZXIpIHtcblx0XHRcdFx0aWYgKG8ucyAmJiBvcHRzLnJlcXVldWVPbkltYWdlTm90TG9hZGVkICYmICsrb3B0aW9ucy5yZXF1ZXVlQXR0ZW1wdHMgPCAxMDApIHsgLy8gdHJhY2sgcmV0cnkgY291bnQgc28gd2UgZG9uJ3QgbG9vcCBmb3JldmVyXG5cdFx0XHRcdFx0bG9nKG9wdGlvbnMucmVxdWV1ZUF0dGVtcHRzLCcgLSBpbWcgc2xpZGUgbm90IGxvYWRlZCwgcmVxdWV1aW5nIHNsaWRlc2hvdzogJywgdGhpcy5zcmMsIHRoaXMuY3ljbGVXLCB0aGlzLmN5Y2xlSCk7XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHskKG8ucyxvLmMpLmN5Y2xlKG9wdGlvbnMpfSwgb3B0cy5yZXF1ZXVlVGltZW91dCk7XG5cdFx0XHRcdFx0cmVxdWV1ZSA9IHRydWU7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBicmVhayBlYWNoIGxvb3Bcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRsb2coJ2NvdWxkIG5vdCBkZXRlcm1pbmUgc2l6ZSBvZiBpbWFnZTogJyt0aGlzLnNyYywgdGhpcy5jeWNsZVcsIHRoaXMuY3ljbGVIKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSk7XG5cblx0aWYgKHJlcXVldWUpXG5cdFx0cmV0dXJuIGZhbHNlO1xuXG5cdG9wdHMuY3NzQmVmb3JlID0gb3B0cy5jc3NCZWZvcmUgfHwge307XG5cdG9wdHMuYW5pbUluID0gb3B0cy5hbmltSW4gfHwge307XG5cdG9wdHMuYW5pbU91dCA9IG9wdHMuYW5pbU91dCB8fCB7fTtcblxuXHQkc2xpZGVzLm5vdCgnOmVxKCcrZmlyc3QrJyknKS5jc3Mob3B0cy5jc3NCZWZvcmUpO1xuXHRpZiAob3B0cy5jc3NGaXJzdClcblx0XHQkKCRzbGlkZXNbZmlyc3RdKS5jc3Mob3B0cy5jc3NGaXJzdCk7XG5cblx0aWYgKG9wdHMudGltZW91dCkge1xuXHRcdG9wdHMudGltZW91dCA9IHBhcnNlSW50KG9wdHMudGltZW91dCk7XG5cdFx0Ly8gZW5zdXJlIHRoYXQgdGltZW91dCBhbmQgc3BlZWQgc2V0dGluZ3MgYXJlIHNhbmVcblx0XHRpZiAob3B0cy5zcGVlZC5jb25zdHJ1Y3RvciA9PSBTdHJpbmcpXG5cdFx0XHRvcHRzLnNwZWVkID0gJC5meC5zcGVlZHNbb3B0cy5zcGVlZF0gfHwgcGFyc2VJbnQob3B0cy5zcGVlZCk7XG5cdFx0aWYgKCFvcHRzLnN5bmMpXG5cdFx0XHRvcHRzLnNwZWVkID0gb3B0cy5zcGVlZCAvIDI7XG5cblx0XHR2YXIgYnVmZmVyID0gb3B0cy5meCA9PSAnc2h1ZmZsZScgPyA1MDAgOiAyNTA7XG5cdFx0d2hpbGUoKG9wdHMudGltZW91dCAtIG9wdHMuc3BlZWQpIDwgYnVmZmVyKSAvLyBzYW5pdGl6ZSB0aW1lb3V0XG5cdFx0XHRvcHRzLnRpbWVvdXQgKz0gb3B0cy5zcGVlZDtcblx0fVxuXHRpZiAob3B0cy5lYXNpbmcpXG5cdFx0b3B0cy5lYXNlSW4gPSBvcHRzLmVhc2VPdXQgPSBvcHRzLmVhc2luZztcblx0aWYgKCFvcHRzLnNwZWVkSW4pXG5cdFx0b3B0cy5zcGVlZEluID0gb3B0cy5zcGVlZDtcblx0aWYgKCFvcHRzLnNwZWVkT3V0KVxuXHRcdG9wdHMuc3BlZWRPdXQgPSBvcHRzLnNwZWVkO1xuXG5cdG9wdHMuc2xpZGVDb3VudCA9IGVscy5sZW5ndGg7XG5cdG9wdHMuY3VyclNsaWRlID0gb3B0cy5sYXN0U2xpZGUgPSBmaXJzdDtcblx0aWYgKG9wdHMucmFuZG9tKSB7XG5cdFx0aWYgKCsrb3B0cy5yYW5kb21JbmRleCA9PSBlbHMubGVuZ3RoKVxuXHRcdFx0b3B0cy5yYW5kb21JbmRleCA9IDA7XG5cdFx0b3B0cy5uZXh0U2xpZGUgPSBvcHRzLnJhbmRvbU1hcFtvcHRzLnJhbmRvbUluZGV4XTtcblx0fVxuXHRlbHNlIGlmIChvcHRzLmJhY2t3YXJkcylcblx0XHRvcHRzLm5leHRTbGlkZSA9IG9wdHMuc3RhcnRpbmdTbGlkZSA9PSAwID8gKGVscy5sZW5ndGgtMSkgOiBvcHRzLnN0YXJ0aW5nU2xpZGUtMTtcblx0ZWxzZVxuXHRcdG9wdHMubmV4dFNsaWRlID0gb3B0cy5zdGFydGluZ1NsaWRlID49IChlbHMubGVuZ3RoLTEpID8gMCA6IG9wdHMuc3RhcnRpbmdTbGlkZSsxO1xuXG5cdC8vIHJ1biB0cmFuc2l0aW9uIGluaXQgZm5cblx0aWYgKCFvcHRzLm11bHRpRngpIHtcblx0XHR2YXIgaW5pdCA9ICQuZm4uY3ljbGUudHJhbnNpdGlvbnNbb3B0cy5meF07XG5cdFx0aWYgKHR5cGVvZiBpbml0ID09PSBcImZ1bmN0aW9uXCIpXG5cdFx0XHRpbml0KCRjb250LCAkc2xpZGVzLCBvcHRzKTtcblx0XHRlbHNlIGlmIChvcHRzLmZ4ICE9ICdjdXN0b20nICYmICFvcHRzLm11bHRpRngpIHtcblx0XHRcdGxvZygndW5rbm93biB0cmFuc2l0aW9uOiAnICsgb3B0cy5meCwnOyBzbGlkZXNob3cgdGVybWluYXRpbmcnKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvLyBmaXJlIGFydGlmaWNpYWwgZXZlbnRzXG5cdHZhciBlMCA9ICRzbGlkZXNbZmlyc3RdO1xuXHRpZiAob3B0cy5iZWZvcmUubGVuZ3RoKVxuXHRcdG9wdHMuYmVmb3JlWzBdLmFwcGx5KGUwLCBbZTAsIGUwLCBvcHRzLCB0cnVlXSk7XG5cdGlmIChvcHRzLmFmdGVyLmxlbmd0aCA+IDEpXG5cdFx0b3B0cy5hZnRlclsxXS5hcHBseShlMCwgW2UwLCBlMCwgb3B0cywgdHJ1ZV0pO1xuXG5cdGlmIChvcHRzLm5leHQpXG5cdFx0JChvcHRzLm5leHQpLm9uKG9wdHMucHJldk5leHRFdmVudCxmdW5jdGlvbigpe3JldHVybiBhZHZhbmNlKG9wdHMsb3B0cy5yZXY/LTE6MSl9KTtcblx0aWYgKG9wdHMucHJldilcblx0XHQkKG9wdHMucHJldikub24ob3B0cy5wcmV2TmV4dEV2ZW50LGZ1bmN0aW9uKCl7cmV0dXJuIGFkdmFuY2Uob3B0cyxvcHRzLnJldj8xOi0xKX0pO1xuXHRpZiAob3B0cy5wYWdlciB8fCBvcHRzLnBhZ2VyQW5jaG9yQnVpbGRlcilcblx0XHRidWlsZFBhZ2VyKGVscyxvcHRzKTtcblxuXHRleHBvc2VBZGRTbGlkZShvcHRzLCBlbHMpO1xuXG5cdHJldHVybiBvcHRzO1xufTtcblxuLy8gc2F2ZSBvZmYgb3JpZ2luYWwgb3B0cyBzbyB3ZSBjYW4gcmVzdG9yZSBhZnRlciBjbGVhcmluZyBzdGF0ZVxuZnVuY3Rpb24gc2F2ZU9yaWdpbmFsT3B0cyhvcHRzKSB7XG5cdG9wdHMub3JpZ2luYWwgPSB7YmVmb3JlOiBbXSwgYWZ0ZXI6IFtdfTtcblx0b3B0cy5vcmlnaW5hbC5jc3NCZWZvcmUgPSAkLmV4dGVuZCh7fSwgb3B0cy5jc3NCZWZvcmUpO1xuXHRvcHRzLm9yaWdpbmFsLmNzc0FmdGVyICA9ICQuZXh0ZW5kKHt9LCBvcHRzLmNzc0FmdGVyKTtcblx0b3B0cy5vcmlnaW5hbC5hbmltSW5cdD0gJC5leHRlbmQoe30sIG9wdHMuYW5pbUluKTtcblx0b3B0cy5vcmlnaW5hbC5hbmltT3V0ICAgPSAkLmV4dGVuZCh7fSwgb3B0cy5hbmltT3V0KTtcblx0JC5lYWNoKG9wdHMuYmVmb3JlLCBmdW5jdGlvbigpIHtvcHRzLm9yaWdpbmFsLmJlZm9yZS5wdXNoKHRoaXMpO30pO1xuXHQkLmVhY2gob3B0cy5hZnRlciwgIGZ1bmN0aW9uKCkge29wdHMub3JpZ2luYWwuYWZ0ZXIucHVzaCh0aGlzKTt9KTtcbn07XG5cbmZ1bmN0aW9uIHN1cHBvcnRNdWx0aVRyYW5zaXRpb25zKG9wdHMpIHtcblx0dmFyIGksIHR4LCB0eHMgPSAkLmZuLmN5Y2xlLnRyYW5zaXRpb25zO1xuXHQvLyBsb29rIGZvciBtdWx0aXBsZSBlZmZlY3RzXG5cdGlmIChvcHRzLmZ4LmluZGV4T2YoJywnKSA+IDApIHtcblx0XHRvcHRzLm11bHRpRnggPSB0cnVlO1xuXHRcdG9wdHMuZnhzID0gb3B0cy5meC5yZXBsYWNlKC9cXHMqL2csJycpLnNwbGl0KCcsJyk7XG5cdFx0Ly8gZGlzY2FyZCBhbnkgYm9ndXMgZWZmZWN0IG5hbWVzXG5cdFx0Zm9yIChpPTA7IGkgPCBvcHRzLmZ4cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGZ4ID0gb3B0cy5meHNbaV07XG5cdFx0XHR0eCA9IHR4c1tmeF07XG5cdFx0XHRpZiAoIXR4IHx8ICF0eHMuaGFzT3duUHJvcGVydHkoZngpIHx8IHR5cGVvZiB0eCAhPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdGxvZygnZGlzY2FyZGluZyB1bmtub3duIHRyYW5zaXRpb246ICcsZngpO1xuXHRcdFx0XHRvcHRzLmZ4cy5zcGxpY2UoaSwxKTtcblx0XHRcdFx0aS0tO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBpZiB3ZSBoYXZlIGFuIGVtcHR5IGxpc3QgdGhlbiB3ZSB0aHJldyBldmVyeXRoaW5nIGF3YXkhXG5cdFx0aWYgKCFvcHRzLmZ4cy5sZW5ndGgpIHtcblx0XHRcdGxvZygnTm8gdmFsaWQgdHJhbnNpdGlvbnMgbmFtZWQ7IHNsaWRlc2hvdyB0ZXJtaW5hdGluZy4nKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0ZWxzZSBpZiAob3B0cy5meCA9PSAnYWxsJykgeyAgLy8gYXV0by1nZW4gdGhlIGxpc3Qgb2YgdHJhbnNpdGlvbnNcblx0XHRvcHRzLm11bHRpRnggPSB0cnVlO1xuXHRcdG9wdHMuZnhzID0gW107XG5cdFx0Zm9yIChwIGluIHR4cykge1xuXHRcdFx0dHggPSB0eHNbcF07XG5cdFx0XHRpZiAodHhzLmhhc093blByb3BlcnR5KHApICYmIHR5cGVvZiB0eCA9PT0gXCJmdW5jdGlvblwiKVxuXHRcdFx0XHRvcHRzLmZ4cy5wdXNoKHApO1xuXHRcdH1cblx0fVxuXHRpZiAob3B0cy5tdWx0aUZ4ICYmIG9wdHMucmFuZG9taXplRWZmZWN0cykge1xuXHRcdC8vIG11bmdlIHRoZSBmeHMgYXJyYXkgdG8gbWFrZSBlZmZlY3Qgc2VsZWN0aW9uIHJhbmRvbVxuXHRcdHZhciByMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKSArIDMwO1xuXHRcdGZvciAoaSA9IDA7IGkgPCByMTsgaSsrKSB7XG5cdFx0XHR2YXIgcjIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcHRzLmZ4cy5sZW5ndGgpO1xuXHRcdFx0b3B0cy5meHMucHVzaChvcHRzLmZ4cy5zcGxpY2UocjIsMSlbMF0pO1xuXHRcdH1cblx0XHRkZWJ1ZygncmFuZG9taXplZCBmeCBzZXF1ZW5jZTogJyxvcHRzLmZ4cyk7XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyBwcm92aWRlIGEgbWVjaGFuaXNtIGZvciBhZGRpbmcgc2xpZGVzIGFmdGVyIHRoZSBzbGlkZXNob3cgaGFzIHN0YXJ0ZWRcbmZ1bmN0aW9uIGV4cG9zZUFkZFNsaWRlKG9wdHMsIGVscykge1xuXHRvcHRzLmFkZFNsaWRlID0gZnVuY3Rpb24obmV3U2xpZGUsIHByZXBlbmQpIHtcblx0XHR2YXIgJHMgPSAkKG5ld1NsaWRlKSwgcyA9ICRzWzBdO1xuXHRcdGlmICghb3B0cy5hdXRvc3RvcENvdW50KVxuXHRcdFx0b3B0cy5jb3VudGRvd24rKztcblx0XHRlbHNbcHJlcGVuZD8ndW5zaGlmdCc6J3B1c2gnXShzKTtcblx0XHRpZiAob3B0cy5lbHMpXG5cdFx0XHRvcHRzLmVsc1twcmVwZW5kPyd1bnNoaWZ0JzoncHVzaCddKHMpOyAvLyBzaHVmZmxlIG5lZWRzIHRoaXNcblx0XHRvcHRzLnNsaWRlQ291bnQgPSBlbHMubGVuZ3RoO1xuXG5cdFx0JHMuY3NzKCdwb3NpdGlvbicsJ2Fic29sdXRlJyk7XG5cdFx0JHNbcHJlcGVuZD8ncHJlcGVuZFRvJzonYXBwZW5kVG8nXShvcHRzLiRjb250KTtcblxuXHRcdGlmIChwcmVwZW5kKSB7XG5cdFx0XHRvcHRzLmN1cnJTbGlkZSsrO1xuXHRcdFx0b3B0cy5uZXh0U2xpZGUrKztcblx0XHR9XG5cblx0XHRpZiAoISQuc3VwcG9ydC5vcGFjaXR5ICYmIG9wdHMuY2xlYXJ0eXBlICYmICFvcHRzLmNsZWFydHlwZU5vQmcpXG5cdFx0XHRjbGVhclR5cGVGaXgoJHMpO1xuXG5cdFx0aWYgKG9wdHMuZml0ICYmIG9wdHMud2lkdGgpXG5cdFx0XHQkcy53aWR0aChvcHRzLndpZHRoKTtcblx0XHRpZiAob3B0cy5maXQgJiYgb3B0cy5oZWlnaHQgJiYgb3B0cy5oZWlnaHQgIT0gJ2F1dG8nKVxuXHRcdFx0JHNsaWRlcy5oZWlnaHQob3B0cy5oZWlnaHQpO1xuXHRcdHMuY3ljbGVIID0gKG9wdHMuZml0ICYmIG9wdHMuaGVpZ2h0KSA/IG9wdHMuaGVpZ2h0IDogJHMuaGVpZ2h0KCk7XG5cdFx0cy5jeWNsZVcgPSAob3B0cy5maXQgJiYgb3B0cy53aWR0aCkgPyBvcHRzLndpZHRoIDogJHMud2lkdGgoKTtcblxuXHRcdCRzLmNzcyhvcHRzLmNzc0JlZm9yZSk7XG5cblx0XHRpZiAob3B0cy5wYWdlciB8fCBvcHRzLnBhZ2VyQW5jaG9yQnVpbGRlcilcblx0XHRcdCQuZm4uY3ljbGUuY3JlYXRlUGFnZXJBbmNob3IoZWxzLmxlbmd0aC0xLCBzLCAkKG9wdHMucGFnZXIpLCBlbHMsIG9wdHMpO1xuXG5cdFx0aWYgKHR5cGVvZiBvcHRzLm9uQWRkU2xpZGUgPT09IFwiZnVuY3Rpb25cIilcblx0XHRcdG9wdHMub25BZGRTbGlkZSgkcyk7XG5cdFx0ZWxzZVxuXHRcdFx0JHMuaGlkZSgpOyAvLyBkZWZhdWx0IGJlaGF2aW9yXG5cdH07XG59XG5cbi8vIHJlc2V0IGludGVybmFsIHN0YXRlOyB3ZSBkbyB0aGlzIG9uIGV2ZXJ5IHBhc3MgaW4gb3JkZXIgdG8gc3VwcG9ydCBtdWx0aXBsZSBlZmZlY3RzXG4kLmZuLmN5Y2xlLnJlc2V0U3RhdGUgPSBmdW5jdGlvbihvcHRzLCBmeCkge1xuXHRmeCA9IGZ4IHx8IG9wdHMuZng7XG5cdG9wdHMuYmVmb3JlID0gW107b3B0cy5hZnRlciA9IFtdO1xuXHRvcHRzLmNzc0JlZm9yZSA9ICQuZXh0ZW5kKHt9LCBvcHRzLm9yaWdpbmFsLmNzc0JlZm9yZSk7XG5cdG9wdHMuY3NzQWZ0ZXIgID0gJC5leHRlbmQoe30sIG9wdHMub3JpZ2luYWwuY3NzQWZ0ZXIpO1xuXHRvcHRzLmFuaW1Jblx0PSAkLmV4dGVuZCh7fSwgb3B0cy5vcmlnaW5hbC5hbmltSW4pO1xuXHRvcHRzLmFuaW1PdXQgICA9ICQuZXh0ZW5kKHt9LCBvcHRzLm9yaWdpbmFsLmFuaW1PdXQpO1xuXHRvcHRzLmZ4Rm4gPSBudWxsO1xuXHQkLmVhY2gob3B0cy5vcmlnaW5hbC5iZWZvcmUsIGZ1bmN0aW9uKCkge29wdHMuYmVmb3JlLnB1c2godGhpcyk7fSk7XG5cdCQuZWFjaChvcHRzLm9yaWdpbmFsLmFmdGVyLCAgZnVuY3Rpb24oKSB7b3B0cy5hZnRlci5wdXNoKHRoaXMpO30pO1xuXG5cdC8vIHJlLWluaXRcblx0dmFyIGluaXQgPSAkLmZuLmN5Y2xlLnRyYW5zaXRpb25zW2Z4XTtcblx0aWYgKHR5cGVvZiBpbml0ID09PSBcImZ1bmN0aW9uXCIpXG5cdFx0aW5pdChvcHRzLiRjb250LCAkKG9wdHMuZWxlbWVudHMpLCBvcHRzKTtcbn07XG5cbi8vIHRoaXMgaXMgdGhlIG1haW4gZW5naW5lIGZuLCBpdCBoYW5kbGVzIHRoZSB0aW1lb3V0cywgY2FsbGJhY2tzIGFuZCBzbGlkZSBpbmRleCBtZ210XG5mdW5jdGlvbiBnbyhlbHMsIG9wdHMsIG1hbnVhbCwgZndkKSB7XG5cdC8vIG9wdHMuYnVzeSBpcyB0cnVlIGlmIHdlJ3JlIGluIHRoZSBtaWRkbGUgb2YgYW4gYW5pbWF0aW9uXG5cdGlmIChtYW51YWwgJiYgb3B0cy5idXN5ICYmIG9wdHMubWFudWFsVHJ1bXApIHtcblx0XHQvLyBsZXQgbWFudWFsIHRyYW5zaXRpb25zIHJlcXVlc3RzIHRydW1wIGFjdGl2ZSBvbmVzXG5cdFx0ZGVidWcoJ21hbnVhbFRydW1wIGluIGdvKCksIHN0b3BwaW5nIGFjdGl2ZSB0cmFuc2l0aW9uJyk7XG5cdFx0JChlbHMpLnN0b3AodHJ1ZSx0cnVlKTtcblx0XHRvcHRzLmJ1c3kgPSBmYWxzZTtcblx0fVxuXHQvLyBkb24ndCBiZWdpbiBhbm90aGVyIHRpbWVvdXQtYmFzZWQgdHJhbnNpdGlvbiBpZiB0aGVyZSBpcyBvbmUgYWN0aXZlXG5cdGlmIChvcHRzLmJ1c3kpIHtcblx0XHRkZWJ1ZygndHJhbnNpdGlvbiBhY3RpdmUsIGlnbm9yaW5nIG5ldyB0eCByZXF1ZXN0Jyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIHAgPSBvcHRzLiRjb250WzBdLCBjdXJyID0gZWxzW29wdHMuY3VyclNsaWRlXSwgbmV4dCA9IGVsc1tvcHRzLm5leHRTbGlkZV07XG5cblx0Ly8gc3RvcCBjeWNsaW5nIGlmIHdlIGhhdmUgYW4gb3V0c3RhbmRpbmcgc3RvcCByZXF1ZXN0XG5cdGlmIChwLmN5Y2xlU3RvcCAhPSBvcHRzLnN0b3BDb3VudCB8fCBwLmN5Y2xlVGltZW91dCA9PT0gMCAmJiAhbWFudWFsKVxuXHRcdHJldHVybjtcblxuXHQvLyBjaGVjayB0byBzZWUgaWYgd2Ugc2hvdWxkIHN0b3AgY3ljbGluZyBiYXNlZCBvbiBhdXRvc3RvcCBvcHRpb25zXG5cdGlmICghbWFudWFsICYmICFwLmN5Y2xlUGF1c2UgJiYgIW9wdHMuYm91bmNlICYmXG5cdFx0KChvcHRzLmF1dG9zdG9wICYmICgtLW9wdHMuY291bnRkb3duIDw9IDApKSB8fFxuXHRcdChvcHRzLm5vd3JhcCAmJiAhb3B0cy5yYW5kb20gJiYgb3B0cy5uZXh0U2xpZGUgPCBvcHRzLmN1cnJTbGlkZSkpKSB7XG5cdFx0aWYgKG9wdHMuZW5kKVxuXHRcdFx0b3B0cy5lbmQob3B0cyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gaWYgc2xpZGVzaG93IGlzIHBhdXNlZCwgb25seSB0cmFuc2l0aW9uIG9uIGEgbWFudWFsIHRyaWdnZXJcblx0dmFyIGNoYW5nZWQgPSBmYWxzZTtcblx0aWYgKChtYW51YWwgfHwgIXAuY3ljbGVQYXVzZSkgJiYgKG9wdHMubmV4dFNsaWRlICE9IG9wdHMuY3VyclNsaWRlKSkge1xuXHRcdGNoYW5nZWQgPSB0cnVlO1xuXHRcdHZhciBmeCA9IG9wdHMuZng7XG5cdFx0Ly8ga2VlcCB0cnlpbmcgdG8gZ2V0IHRoZSBzbGlkZSBzaXplIGlmIHdlIGRvbid0IGhhdmUgaXQgeWV0XG5cdFx0Y3Vyci5jeWNsZUggPSBjdXJyLmN5Y2xlSCB8fCAkKGN1cnIpLmhlaWdodCgpO1xuXHRcdGN1cnIuY3ljbGVXID0gY3Vyci5jeWNsZVcgfHwgJChjdXJyKS53aWR0aCgpO1xuXHRcdG5leHQuY3ljbGVIID0gbmV4dC5jeWNsZUggfHwgJChuZXh0KS5oZWlnaHQoKTtcblx0XHRuZXh0LmN5Y2xlVyA9IG5leHQuY3ljbGVXIHx8ICQobmV4dCkud2lkdGgoKTtcblxuXHRcdC8vIHN1cHBvcnQgbXVsdGlwbGUgdHJhbnNpdGlvbiB0eXBlc1xuXHRcdGlmIChvcHRzLm11bHRpRngpIHtcblx0XHRcdGlmIChvcHRzLmxhc3RGeCA9PSB1bmRlZmluZWQgfHwgKytvcHRzLmxhc3RGeCA+PSBvcHRzLmZ4cy5sZW5ndGgpXG5cdFx0XHRcdG9wdHMubGFzdEZ4ID0gMDtcblx0XHRcdGZ4ID0gb3B0cy5meHNbb3B0cy5sYXN0RnhdO1xuXHRcdFx0b3B0cy5jdXJyRnggPSBmeDtcblx0XHR9XG5cblx0XHQvLyBvbmUtdGltZSBmeCBvdmVycmlkZXMgYXBwbHkgdG86ICAkKCdkaXYnKS5jeWNsZSgzLCd6b29tJyk7XG5cdFx0aWYgKG9wdHMub25lVGltZUZ4KSB7XG5cdFx0XHRmeCA9IG9wdHMub25lVGltZUZ4O1xuXHRcdFx0b3B0cy5vbmVUaW1lRnggPSBudWxsO1xuXHRcdH1cblxuXHRcdCQuZm4uY3ljbGUucmVzZXRTdGF0ZShvcHRzLCBmeCk7XG5cblx0XHQvLyBydW4gdGhlIGJlZm9yZSBjYWxsYmFja3Ncblx0XHRpZiAob3B0cy5iZWZvcmUubGVuZ3RoKVxuXHRcdFx0JC5lYWNoKG9wdHMuYmVmb3JlLCBmdW5jdGlvbihpLG8pIHtcblx0XHRcdFx0aWYgKHAuY3ljbGVTdG9wICE9IG9wdHMuc3RvcENvdW50KSByZXR1cm47XG5cdFx0XHRcdG8uYXBwbHkobmV4dCwgW2N1cnIsIG5leHQsIG9wdHMsIGZ3ZF0pO1xuXHRcdFx0fSk7XG5cblx0XHQvLyBzdGFnZSB0aGUgYWZ0ZXIgY2FsbGFja3Ncblx0XHR2YXIgYWZ0ZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdCQuZWFjaChvcHRzLmFmdGVyLCBmdW5jdGlvbihpLG8pIHtcblx0XHRcdFx0aWYgKHAuY3ljbGVTdG9wICE9IG9wdHMuc3RvcENvdW50KSByZXR1cm47XG5cdFx0XHRcdG8uYXBwbHkobmV4dCwgW2N1cnIsIG5leHQsIG9wdHMsIGZ3ZF0pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdGRlYnVnKCd0eCBmaXJpbmc7IGN1cnJTbGlkZTogJyArIG9wdHMuY3VyclNsaWRlICsgJzsgbmV4dFNsaWRlOiAnICsgb3B0cy5uZXh0U2xpZGUpO1xuXG5cdFx0Ly8gZ2V0IHJlYWR5IHRvIHBlcmZvcm0gdGhlIHRyYW5zaXRpb25cblx0XHRvcHRzLmJ1c3kgPSAxO1xuXHRcdGlmIChvcHRzLmZ4Rm4pIC8vIGZ4IGZ1bmN0aW9uIHByb3ZpZGVkP1xuXHRcdFx0b3B0cy5meEZuKGN1cnIsIG5leHQsIG9wdHMsIGFmdGVyLCBmd2QsIG1hbnVhbCAmJiBvcHRzLmZhc3RPbkV2ZW50KTtcblx0XHRlbHNlIGlmICh0eXBlb2YgJC5mbi5jeWNsZVtvcHRzLmZ4XSA9PT0gXCJmdW5jdGlvblwiKSAvLyBmeCBwbHVnaW4gP1xuXHRcdFx0JC5mbi5jeWNsZVtvcHRzLmZ4XShjdXJyLCBuZXh0LCBvcHRzLCBhZnRlciwgZndkLCBtYW51YWwgJiYgb3B0cy5mYXN0T25FdmVudCk7XG5cdFx0ZWxzZVxuXHRcdFx0JC5mbi5jeWNsZS5jdXN0b20oY3VyciwgbmV4dCwgb3B0cywgYWZ0ZXIsIGZ3ZCwgbWFudWFsICYmIG9wdHMuZmFzdE9uRXZlbnQpO1xuXHR9XG5cblx0aWYgKGNoYW5nZWQgfHwgb3B0cy5uZXh0U2xpZGUgPT0gb3B0cy5jdXJyU2xpZGUpIHtcblx0XHQvLyBjYWxjdWxhdGUgdGhlIG5leHQgc2xpZGVcblx0XHRvcHRzLmxhc3RTbGlkZSA9IG9wdHMuY3VyclNsaWRlO1xuXHRcdGlmIChvcHRzLnJhbmRvbSkge1xuXHRcdFx0b3B0cy5jdXJyU2xpZGUgPSBvcHRzLm5leHRTbGlkZTtcblx0XHRcdGlmICgrK29wdHMucmFuZG9tSW5kZXggPT0gZWxzLmxlbmd0aClcblx0XHRcdFx0b3B0cy5yYW5kb21JbmRleCA9IDA7XG5cdFx0XHRvcHRzLm5leHRTbGlkZSA9IG9wdHMucmFuZG9tTWFwW29wdHMucmFuZG9tSW5kZXhdO1xuXHRcdFx0aWYgKG9wdHMubmV4dFNsaWRlID09IG9wdHMuY3VyclNsaWRlKVxuXHRcdFx0XHRvcHRzLm5leHRTbGlkZSA9IChvcHRzLmN1cnJTbGlkZSA9PSBvcHRzLnNsaWRlQ291bnQgLSAxKSA/IDAgOiBvcHRzLmN1cnJTbGlkZSArIDE7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKG9wdHMuYmFja3dhcmRzKSB7XG5cdFx0XHR2YXIgcm9sbCA9IChvcHRzLm5leHRTbGlkZSAtIDEpIDwgMDtcblx0XHRcdGlmIChyb2xsICYmIG9wdHMuYm91bmNlKSB7XG5cdFx0XHRcdG9wdHMuYmFja3dhcmRzID0gIW9wdHMuYmFja3dhcmRzO1xuXHRcdFx0XHRvcHRzLm5leHRTbGlkZSA9IDE7XG5cdFx0XHRcdG9wdHMuY3VyclNsaWRlID0gMDtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRvcHRzLm5leHRTbGlkZSA9IHJvbGwgPyAoZWxzLmxlbmd0aC0xKSA6IG9wdHMubmV4dFNsaWRlLTE7XG5cdFx0XHRcdG9wdHMuY3VyclNsaWRlID0gcm9sbCA/IDAgOiBvcHRzLm5leHRTbGlkZSsxO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHsgLy8gc2VxdWVuY2Vcblx0XHRcdHZhciByb2xsID0gKG9wdHMubmV4dFNsaWRlICsgMSkgPT0gZWxzLmxlbmd0aDtcblx0XHRcdGlmIChyb2xsICYmIG9wdHMuYm91bmNlKSB7XG5cdFx0XHRcdG9wdHMuYmFja3dhcmRzID0gIW9wdHMuYmFja3dhcmRzO1xuXHRcdFx0XHRvcHRzLm5leHRTbGlkZSA9IGVscy5sZW5ndGgtMjtcblx0XHRcdFx0b3B0cy5jdXJyU2xpZGUgPSBlbHMubGVuZ3RoLTE7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0b3B0cy5uZXh0U2xpZGUgPSByb2xsID8gMCA6IG9wdHMubmV4dFNsaWRlKzE7XG5cdFx0XHRcdG9wdHMuY3VyclNsaWRlID0gcm9sbCA/IGVscy5sZW5ndGgtMSA6IG9wdHMubmV4dFNsaWRlLTE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGlmIChjaGFuZ2VkICYmIG9wdHMucGFnZXIpXG5cdFx0b3B0cy51cGRhdGVBY3RpdmVQYWdlckxpbmsob3B0cy5wYWdlciwgb3B0cy5jdXJyU2xpZGUsIG9wdHMuYWN0aXZlUGFnZXJDbGFzcyk7XG5cblx0Ly8gc3RhZ2UgdGhlIG5leHQgdHJhbnNpdGlvblxuXHR2YXIgbXMgPSAwO1xuXHRpZiAob3B0cy50aW1lb3V0ICYmICFvcHRzLmNvbnRpbnVvdXMpXG5cdFx0bXMgPSBnZXRUaW1lb3V0KGVsc1tvcHRzLmN1cnJTbGlkZV0sIGVsc1tvcHRzLm5leHRTbGlkZV0sIG9wdHMsIGZ3ZCk7XG5cdGVsc2UgaWYgKG9wdHMuY29udGludW91cyAmJiBwLmN5Y2xlUGF1c2UpIC8vIGNvbnRpbnVvdXMgc2hvd3Mgd29yayBvZmYgYW4gYWZ0ZXIgY2FsbGJhY2ssIG5vdCB0aGlzIHRpbWVyIGxvZ2ljXG5cdFx0bXMgPSAxMDtcblx0aWYgKG1zID4gMClcblx0XHRwLmN5Y2xlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtnbyhlbHMsIG9wdHMsIDAsICghb3B0cy5yZXYgJiYgIW9wdHMuYmFja3dhcmRzKSl9LCBtcyk7XG59O1xuXG4vLyBpbnZva2VkIGFmdGVyIHRyYW5zaXRpb25cbiQuZm4uY3ljbGUudXBkYXRlQWN0aXZlUGFnZXJMaW5rID0gZnVuY3Rpb24ocGFnZXIsIGN1cnJTbGlkZSwgY2xzTmFtZSkge1xuICAgJChwYWdlcikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoY2xzTmFtZSkuZXEoY3VyclNsaWRlKS5hZGRDbGFzcyhjbHNOYW1lKTtcbiAgIH0pO1xufTtcblxuLy8gY2FsY3VsYXRlIHRpbWVvdXQgdmFsdWUgZm9yIGN1cnJlbnQgdHJhbnNpdGlvblxuZnVuY3Rpb24gZ2V0VGltZW91dChjdXJyLCBuZXh0LCBvcHRzLCBmd2QpIHtcblx0aWYgKG9wdHMudGltZW91dEZuKSB7XG5cdFx0Ly8gY2FsbCB1c2VyIHByb3ZpZGVkIGNhbGMgZm5cblx0XHR2YXIgdCA9IG9wdHMudGltZW91dEZuLmNhbGwoY3VycixjdXJyLG5leHQsb3B0cyxmd2QpO1xuXHRcdHdoaWxlICgodCAtIG9wdHMuc3BlZWQpIDwgMjUwKSAvLyBzYW5pdGl6ZSB0aW1lb3V0XG5cdFx0XHR0ICs9IG9wdHMuc3BlZWQ7XG5cdFx0ZGVidWcoJ2NhbGN1bGF0ZWQgdGltZW91dDogJyArIHQgKyAnOyBzcGVlZDogJyArIG9wdHMuc3BlZWQpO1xuXHRcdGlmICh0ICE9PSBmYWxzZSlcblx0XHRcdHJldHVybiB0O1xuXHR9XG5cdHJldHVybiBvcHRzLnRpbWVvdXQ7XG59O1xuXG4vLyBleHBvc2UgbmV4dC9wcmV2IGZ1bmN0aW9uLCBjYWxsZXIgbXVzdCBwYXNzIGluIHN0YXRlXG4kLmZuLmN5Y2xlLm5leHQgPSBmdW5jdGlvbihvcHRzKSB7YWR2YW5jZShvcHRzLCBvcHRzLnJldj8tMToxKTt9O1xuJC5mbi5jeWNsZS5wcmV2ID0gZnVuY3Rpb24ob3B0cykge2FkdmFuY2Uob3B0cywgb3B0cy5yZXY/MTotMSk7fTtcblxuLy8gYWR2YW5jZSBzbGlkZSBmb3J3YXJkIG9yIGJhY2tcbmZ1bmN0aW9uIGFkdmFuY2Uob3B0cywgdmFsKSB7XG5cdHZhciBlbHMgPSBvcHRzLmVsZW1lbnRzO1xuXHR2YXIgcCA9IG9wdHMuJGNvbnRbMF0sIHRpbWVvdXQgPSBwLmN5Y2xlVGltZW91dDtcblx0aWYgKHRpbWVvdXQpIHtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0cC5jeWNsZVRpbWVvdXQgPSAwO1xuXHR9XG5cdGlmIChvcHRzLnJhbmRvbSAmJiB2YWwgPCAwKSB7XG5cdFx0Ly8gbW92ZSBiYWNrIHRvIHRoZSBwcmV2aW91c2x5IGRpc3BsYXkgc2xpZGVcblx0XHRvcHRzLnJhbmRvbUluZGV4LS07XG5cdFx0aWYgKC0tb3B0cy5yYW5kb21JbmRleCA9PSAtMilcblx0XHRcdG9wdHMucmFuZG9tSW5kZXggPSBlbHMubGVuZ3RoLTI7XG5cdFx0ZWxzZSBpZiAob3B0cy5yYW5kb21JbmRleCA9PSAtMSlcblx0XHRcdG9wdHMucmFuZG9tSW5kZXggPSBlbHMubGVuZ3RoLTE7XG5cdFx0b3B0cy5uZXh0U2xpZGUgPSBvcHRzLnJhbmRvbU1hcFtvcHRzLnJhbmRvbUluZGV4XTtcblx0fVxuXHRlbHNlIGlmIChvcHRzLnJhbmRvbSkge1xuXHRcdG9wdHMubmV4dFNsaWRlID0gb3B0cy5yYW5kb21NYXBbb3B0cy5yYW5kb21JbmRleF07XG5cdH1cblx0ZWxzZSB7XG5cdFx0b3B0cy5uZXh0U2xpZGUgPSBvcHRzLmN1cnJTbGlkZSArIHZhbDtcblx0XHRpZiAob3B0cy5uZXh0U2xpZGUgPCAwKSB7XG5cdFx0XHRpZiAob3B0cy5ub3dyYXApIHJldHVybiBmYWxzZTtcblx0XHRcdG9wdHMubmV4dFNsaWRlID0gZWxzLmxlbmd0aCAtIDE7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKG9wdHMubmV4dFNsaWRlID49IGVscy5sZW5ndGgpIHtcblx0XHRcdGlmIChvcHRzLm5vd3JhcCkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0b3B0cy5uZXh0U2xpZGUgPSAwO1xuXHRcdH1cblx0fVxuXG5cdHZhciBjYiA9IG9wdHMub25QcmV2TmV4dEV2ZW50IHx8IG9wdHMucHJldk5leHRDbGljazsgLy8gcHJldk5leHRDbGljayBpcyBkZXByZWNhdGVkXG5cdGlmICh0eXBlb2YgY2IgPT09IFwiZnVuY3Rpb25cIilcblx0XHRjYih2YWwgPiAwLCBvcHRzLm5leHRTbGlkZSwgZWxzW29wdHMubmV4dFNsaWRlXSk7XG5cdGdvKGVscywgb3B0cywgMSwgdmFsPj0wKTtcblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZnVuY3Rpb24gYnVpbGRQYWdlcihlbHMsIG9wdHMpIHtcblx0dmFyICRwID0gJChvcHRzLnBhZ2VyKTtcblx0JC5lYWNoKGVscywgZnVuY3Rpb24oaSxvKSB7XG5cdFx0JC5mbi5jeWNsZS5jcmVhdGVQYWdlckFuY2hvcihpLG8sJHAsZWxzLG9wdHMpO1xuXHR9KTtcblx0b3B0cy51cGRhdGVBY3RpdmVQYWdlckxpbmsob3B0cy5wYWdlciwgb3B0cy5zdGFydGluZ1NsaWRlLCBvcHRzLmFjdGl2ZVBhZ2VyQ2xhc3MpO1xufTtcblxuJC5mbi5jeWNsZS5jcmVhdGVQYWdlckFuY2hvciA9IGZ1bmN0aW9uKGksIGVsLCAkcCwgZWxzLCBvcHRzKSB7XG5cdHZhciBhO1xuXHRpZiAodHlwZW9mIG9wdHMucGFnZXJBbmNob3JCdWlsZGVyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRhID0gb3B0cy5wYWdlckFuY2hvckJ1aWxkZXIoaSxlbCk7XG5cdFx0ZGVidWcoJ3BhZ2VyQW5jaG9yQnVpbGRlcignK2krJywgZWwpIHJldHVybmVkOiAnICsgYSk7XG5cdH1cblx0ZWxzZVxuXHRcdGEgPSAnPGEgaHJlZj1cIiNcIj4nKyhpKzEpKyc8L2E+JztcblxuXHRpZiAoIWEpXG5cdFx0cmV0dXJuO1xuXHR2YXIgJGEgPSAkKGEpO1xuXHQvLyBkb24ndCByZXBhcmVudCBpZiBhbmNob3IgaXMgaW4gdGhlIGRvbVxuXHRpZiAoJGEucGFyZW50cygnYm9keScpLmxlbmd0aCA9PT0gMCkge1xuXHRcdHZhciBhcnIgPSBbXTtcblx0XHRpZiAoJHAubGVuZ3RoID4gMSkge1xuXHRcdFx0JHAuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyICRjbG9uZSA9ICRhLmNsb25lKHRydWUpO1xuXHRcdFx0XHQkKHRoaXMpLmFwcGVuZCgkY2xvbmUpO1xuXHRcdFx0XHRhcnIucHVzaCgkY2xvbmVbMF0pO1xuXHRcdFx0fSk7XG5cdFx0XHQkYSA9ICQoYXJyKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQkYS5hcHBlbmRUbygkcCk7XG5cdFx0fVxuXHR9XG5cblx0b3B0cy5wYWdlckFuY2hvcnMgPSAgb3B0cy5wYWdlckFuY2hvcnMgfHwgW107XG5cdG9wdHMucGFnZXJBbmNob3JzLnB1c2goJGEpO1xuXHQkYS5vbihvcHRzLnBhZ2VyRXZlbnQsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0b3B0cy5uZXh0U2xpZGUgPSBpO1xuXHRcdHZhciBwID0gb3B0cy4kY29udFswXSwgdGltZW91dCA9IHAuY3ljbGVUaW1lb3V0O1xuXHRcdGlmICh0aW1lb3V0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0XHRwLmN5Y2xlVGltZW91dCA9IDA7XG5cdFx0fVxuXHRcdHZhciBjYiA9IG9wdHMub25QYWdlckV2ZW50IHx8IG9wdHMucGFnZXJDbGljazsgLy8gcGFnZXJDbGljayBpcyBkZXByZWNhdGVkXG5cdFx0aWYgKHR5cGVvZiBjYiA9PT0gXCJmdW5jdGlvblwiKVxuXHRcdFx0Y2Iob3B0cy5uZXh0U2xpZGUsIGVsc1tvcHRzLm5leHRTbGlkZV0pO1xuXHRcdGdvKGVscyxvcHRzLDEsb3B0cy5jdXJyU2xpZGUgPCBpKTsgLy8gdHJpZ2dlciB0aGUgdHJhbnNcbi8vXHRcdHJldHVybiBmYWxzZTsgLy8gPD09IGFsbG93IGJ1YmJsZVxuXHR9KTtcblxuXHRpZiAoICEgL15jbGljay8udGVzdChvcHRzLnBhZ2VyRXZlbnQpICYmICFvcHRzLmFsbG93UGFnZXJDbGlja0J1YmJsZSlcblx0XHQkYS5vbignY2xpY2suY3ljbGUnLCBmdW5jdGlvbigpe3JldHVybiBmYWxzZTt9KTsgLy8gc3VwcHJlc3MgY2xpY2tcblxuXHRpZiAob3B0cy5wYXVzZU9uUGFnZXJIb3Zlcilcblx0XHQkYS5vbihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oKSB7b3B0cy4kY29udFswXS5jeWNsZVBhdXNlKys7fSkub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge29wdHMuJGNvbnRbMF0uY3ljbGVQYXVzZS0tO30pO1xufTtcblxuLy8gaGVscGVyIGZuIHRvIGNhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIHNsaWRlcyBiZXR3ZWVuIHRoZSBjdXJyZW50IGFuZCB0aGUgbmV4dFxuJC5mbi5jeWNsZS5ob3BzRnJvbUxhc3QgPSBmdW5jdGlvbihvcHRzLCBmd2QpIHtcblx0dmFyIGhvcHMsIGwgPSBvcHRzLmxhc3RTbGlkZSwgYyA9IG9wdHMuY3VyclNsaWRlO1xuXHRpZiAoZndkKVxuXHRcdGhvcHMgPSBjID4gbCA/IGMgLSBsIDogb3B0cy5zbGlkZUNvdW50IC0gbDtcblx0ZWxzZVxuXHRcdGhvcHMgPSBjIDwgbCA/IGwgLSBjIDogbCArIG9wdHMuc2xpZGVDb3VudCAtIGM7XG5cdHJldHVybiBob3BzO1xufTtcblxuLy8gZml4IGNsZWFyVHlwZSBwcm9ibGVtcyBpbiBpZTYgYnkgc2V0dGluZyBhbiBleHBsaWNpdCBiZyBjb2xvclxuLy8gKG90aGVyd2lzZSB0ZXh0IHNsaWRlcyBsb29rIGhvcnJpYmxlIGR1cmluZyBhIGZhZGUgdHJhbnNpdGlvbilcbmZ1bmN0aW9uIGNsZWFyVHlwZUZpeCgkc2xpZGVzKSB7XG5cdGRlYnVnKCdhcHBseWluZyBjbGVhclR5cGUgYmFja2dyb3VuZC1jb2xvciBoYWNrJyk7XG5cdGZ1bmN0aW9uIGhleChzKSB7XG5cdFx0cyA9IHBhcnNlSW50KHMpLnRvU3RyaW5nKDE2KTtcblx0XHRyZXR1cm4gcy5sZW5ndGggPCAyID8gJzAnK3MgOiBzO1xuXHR9O1xuXHRmdW5jdGlvbiBnZXRCZyhlKSB7XG5cdFx0Zm9yICggOyBlICYmIGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPSAnaHRtbCc7IGUgPSBlLnBhcmVudE5vZGUpIHtcblx0XHRcdHZhciB2ID0gJC5jc3MoZSwnYmFja2dyb3VuZC1jb2xvcicpO1xuXHRcdFx0aWYgKHYuaW5kZXhPZigncmdiJykgPj0gMCApIHtcblx0XHRcdFx0dmFyIHJnYiA9IHYubWF0Y2goL1xcZCsvZyk7XG5cdFx0XHRcdHJldHVybiAnIycrIGhleChyZ2JbMF0pICsgaGV4KHJnYlsxXSkgKyBoZXgocmdiWzJdKTtcblx0XHRcdH1cblx0XHRcdGlmICh2ICYmIHYgIT0gJ3RyYW5zcGFyZW50Jylcblx0XHRcdFx0cmV0dXJuIHY7XG5cdFx0fVxuXHRcdHJldHVybiAnI2ZmZmZmZic7XG5cdH07XG5cdCRzbGlkZXMuZWFjaChmdW5jdGlvbigpIHskKHRoaXMpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGdldEJnKHRoaXMpKTt9KTtcbn07XG5cbi8vIHJlc2V0IGNvbW1vbiBwcm9wcyBiZWZvcmUgdGhlIG5leHQgdHJhbnNpdGlvblxuJC5mbi5jeWNsZS5jb21tb25SZXNldCA9IGZ1bmN0aW9uKGN1cnIsbmV4dCxvcHRzLHcsaCxyZXYpIHtcblx0JChvcHRzLmVsZW1lbnRzKS5ub3QoY3VycikuaGlkZSgpO1xuXHRvcHRzLmNzc0JlZm9yZS5vcGFjaXR5ID0gMTtcblx0b3B0cy5jc3NCZWZvcmUuZGlzcGxheSA9ICdibG9jayc7XG5cdGlmICh3ICE9PSBmYWxzZSAmJiBuZXh0LmN5Y2xlVyA+IDApXG5cdFx0b3B0cy5jc3NCZWZvcmUud2lkdGggPSBuZXh0LmN5Y2xlVztcblx0aWYgKGggIT09IGZhbHNlICYmIG5leHQuY3ljbGVIID4gMClcblx0XHRvcHRzLmNzc0JlZm9yZS5oZWlnaHQgPSBuZXh0LmN5Y2xlSDtcblx0b3B0cy5jc3NBZnRlciA9IG9wdHMuY3NzQWZ0ZXIgfHwge307XG5cdG9wdHMuY3NzQWZ0ZXIuZGlzcGxheSA9ICdub25lJztcblx0JChjdXJyKS5jc3MoJ3pJbmRleCcsb3B0cy5zbGlkZUNvdW50ICsgKHJldiA9PT0gdHJ1ZSA/IDEgOiAwKSk7XG5cdCQobmV4dCkuY3NzKCd6SW5kZXgnLG9wdHMuc2xpZGVDb3VudCArIChyZXYgPT09IHRydWUgPyAwIDogMSkpO1xufTtcblxuLy8gdGhlIGFjdHVhbCBmbiBmb3IgZWZmZWN0aW5nIGEgdHJhbnNpdGlvblxuJC5mbi5jeWNsZS5jdXN0b20gPSBmdW5jdGlvbihjdXJyLCBuZXh0LCBvcHRzLCBjYiwgZndkLCBzcGVlZE92ZXJyaWRlKSB7XG5cdHZhciAkbCA9ICQoY3VyciksICRuID0gJChuZXh0KTtcblx0dmFyIHNwZWVkSW4gPSBvcHRzLnNwZWVkSW4sIHNwZWVkT3V0ID0gb3B0cy5zcGVlZE91dCwgZWFzZUluID0gb3B0cy5lYXNlSW4sIGVhc2VPdXQgPSBvcHRzLmVhc2VPdXQ7XG5cdCRuLmNzcyhvcHRzLmNzc0JlZm9yZSk7XG5cdGlmIChzcGVlZE92ZXJyaWRlKSB7XG5cdFx0aWYgKHR5cGVvZiBzcGVlZE92ZXJyaWRlID09ICdudW1iZXInKVxuXHRcdFx0c3BlZWRJbiA9IHNwZWVkT3V0ID0gc3BlZWRPdmVycmlkZTtcblx0XHRlbHNlXG5cdFx0XHRzcGVlZEluID0gc3BlZWRPdXQgPSAxO1xuXHRcdGVhc2VJbiA9IGVhc2VPdXQgPSBudWxsO1xuXHR9XG5cdHZhciBmbiA9IGZ1bmN0aW9uKCkgeyRuLmFuaW1hdGUob3B0cy5hbmltSW4sIHNwZWVkSW4sIGVhc2VJbiwgY2IpfTtcblx0JGwuYW5pbWF0ZShvcHRzLmFuaW1PdXQsIHNwZWVkT3V0LCBlYXNlT3V0LCBmdW5jdGlvbigpIHtcblx0XHRpZiAob3B0cy5jc3NBZnRlcikgJGwuY3NzKG9wdHMuY3NzQWZ0ZXIpO1xuXHRcdGlmICghb3B0cy5zeW5jKSBmbigpO1xuXHR9KTtcblx0aWYgKG9wdHMuc3luYykgZm4oKTtcbn07XG5cbi8vIHRyYW5zaXRpb24gZGVmaW5pdGlvbnMgLSBvbmx5IGZhZGUgaXMgZGVmaW5lZCBoZXJlLCB0cmFuc2l0aW9uIHBhY2sgZGVmaW5lcyB0aGUgcmVzdFxuJC5mbi5jeWNsZS50cmFuc2l0aW9ucyA9IHtcblx0ZmFkZTogZnVuY3Rpb24oJGNvbnQsICRzbGlkZXMsIG9wdHMpIHtcblx0XHQkc2xpZGVzLm5vdCgnOmVxKCcrb3B0cy5jdXJyU2xpZGUrJyknKS5jc3MoJ29wYWNpdHknLCcwJyk7XG5cdFx0b3B0cy5iZWZvcmUucHVzaChmdW5jdGlvbihjdXJyLG5leHQsb3B0cykge1xuXHRcdFx0JC5mbi5jeWNsZS5jb21tb25SZXNldChjdXJyLG5leHQsb3B0cyk7XG5cdFx0XHRvcHRzLmNzc0JlZm9yZS5vcGFjaXR5ID0gMDtcblx0XHR9KTtcblx0XHRvcHRzLmFuaW1Jblx0ICAgPSB7b3BhY2l0eTogMX07XG5cdFx0b3B0cy5hbmltT3V0ICAgPSB7b3BhY2l0eTogMH07XG5cdFx0b3B0cy5jc3NCZWZvcmUgPSB7dG9wOiAwLCBsZWZ0OiAwfTtcblx0fVxufTtcblxuJC5mbi5jeWNsZS52ZXIgPSBmdW5jdGlvbigpIHtyZXR1cm4gdmVyO307XG5cbi8vIG92ZXJyaWRlIHRoZXNlIGdsb2JhbGx5IGlmIHlvdSBsaWtlICh0aGV5IGFyZSBhbGwgb3B0aW9uYWwpXG4kLmZuLmN5Y2xlLmRlZmF1bHRzID0ge1xuXHRmeDpcdFx0XHQgICdmYWRlJywgLy8gbmFtZSBvZiB0cmFuc2l0aW9uIGVmZmVjdCAob3IgY29tbWEgc2VwYXJhdGVkIG5hbWVzLCBleDogJ2ZhZGUsc2Nyb2xsVXAsc2h1ZmZsZScpXG5cdHRpbWVvdXQ6XHQgICA0MDAwLCAgLy8gbWlsbGlzZWNvbmRzIGJldHdlZW4gc2xpZGUgdHJhbnNpdGlvbnMgKDAgdG8gZGlzYWJsZSBhdXRvIGFkdmFuY2UpXG5cdHRpbWVvdXRGbjogICAgIG51bGwsICAvLyBjYWxsYmFjayBmb3IgZGV0ZXJtaW5pbmcgcGVyLXNsaWRlIHRpbWVvdXQgdmFsdWU6ICBmdW5jdGlvbihjdXJyU2xpZGVFbGVtZW50LCBuZXh0U2xpZGVFbGVtZW50LCBvcHRpb25zLCBmb3J3YXJkRmxhZylcblx0Y29udGludW91czpcdCAgIDAsXHQgIC8vIHRydWUgdG8gc3RhcnQgbmV4dCB0cmFuc2l0aW9uIGltbWVkaWF0ZWx5IGFmdGVyIGN1cnJlbnQgb25lIGNvbXBsZXRlc1xuXHRzcGVlZDpcdFx0ICAgMTAwMCwgIC8vIHNwZWVkIG9mIHRoZSB0cmFuc2l0aW9uIChhbnkgdmFsaWQgZnggc3BlZWQgdmFsdWUpXG5cdHNwZWVkSW46XHQgICBudWxsLCAgLy8gc3BlZWQgb2YgdGhlICdpbicgdHJhbnNpdGlvblxuXHRzcGVlZE91dDpcdCAgIG51bGwsICAvLyBzcGVlZCBvZiB0aGUgJ291dCcgdHJhbnNpdGlvblxuXHRuZXh0Olx0XHQgICBudWxsLCAgLy8gc2VsZWN0b3IgZm9yIGVsZW1lbnQgdG8gdXNlIGFzIGV2ZW50IHRyaWdnZXIgZm9yIG5leHQgc2xpZGVcblx0cHJldjpcdFx0ICAgbnVsbCwgIC8vIHNlbGVjdG9yIGZvciBlbGVtZW50IHRvIHVzZSBhcyBldmVudCB0cmlnZ2VyIGZvciBwcmV2aW91cyBzbGlkZVxuLy9cdHByZXZOZXh0Q2xpY2s6IG51bGwsICAvLyBAZGVwcmVjYXRlZDsgcGxlYXNlIHVzZSBvblByZXZOZXh0RXZlbnQgaW5zdGVhZFxuXHRvblByZXZOZXh0RXZlbnQ6IG51bGwsICAvLyBjYWxsYmFjayBmbiBmb3IgcHJldi9uZXh0IGV2ZW50czogZnVuY3Rpb24oaXNOZXh0LCB6ZXJvQmFzZWRTbGlkZUluZGV4LCBzbGlkZUVsZW1lbnQpXG5cdHByZXZOZXh0RXZlbnQ6J2NsaWNrLmN5Y2xlJywvLyBldmVudCB3aGljaCBkcml2ZXMgdGhlIG1hbnVhbCB0cmFuc2l0aW9uIHRvIHRoZSBwcmV2aW91cyBvciBuZXh0IHNsaWRlXG5cdHBhZ2VyOlx0XHQgICBudWxsLCAgLy8gc2VsZWN0b3IgZm9yIGVsZW1lbnQgdG8gdXNlIGFzIHBhZ2VyIGNvbnRhaW5lclxuXHQvL3BhZ2VyQ2xpY2sgICBudWxsLCAgLy8gQGRlcHJlY2F0ZWQ7IHBsZWFzZSB1c2Ugb25QYWdlckV2ZW50IGluc3RlYWRcblx0b25QYWdlckV2ZW50OiAgbnVsbCwgIC8vIGNhbGxiYWNrIGZuIGZvciBwYWdlciBldmVudHM6IGZ1bmN0aW9uKHplcm9CYXNlZFNsaWRlSW5kZXgsIHNsaWRlRWxlbWVudClcblx0cGFnZXJFdmVudDpcdCAgJ2NsaWNrLmN5Y2xlJywgLy8gbmFtZSBvZiBldmVudCB3aGljaCBkcml2ZXMgdGhlIHBhZ2VyIG5hdmlnYXRpb25cblx0YWxsb3dQYWdlckNsaWNrQnViYmxlOiBmYWxzZSwgLy8gYWxsb3dzIG9yIHByZXZlbnRzIGNsaWNrIGV2ZW50IG9uIHBhZ2VyIGFuY2hvcnMgZnJvbSBidWJibGluZ1xuXHRwYWdlckFuY2hvckJ1aWxkZXI6IG51bGwsIC8vIGNhbGxiYWNrIGZuIGZvciBidWlsZGluZyBhbmNob3IgbGlua3M6ICBmdW5jdGlvbihpbmRleCwgRE9NZWxlbWVudClcblx0YmVmb3JlOlx0XHQgICBudWxsLCAgLy8gdHJhbnNpdGlvbiBjYWxsYmFjayAoc2NvcGUgc2V0IHRvIGVsZW1lbnQgdG8gYmUgc2hvd24pOlx0IGZ1bmN0aW9uKGN1cnJTbGlkZUVsZW1lbnQsIG5leHRTbGlkZUVsZW1lbnQsIG9wdGlvbnMsIGZvcndhcmRGbGFnKVxuXHRhZnRlcjpcdFx0ICAgbnVsbCwgIC8vIHRyYW5zaXRpb24gY2FsbGJhY2sgKHNjb3BlIHNldCB0byBlbGVtZW50IHRoYXQgd2FzIHNob3duKTogIGZ1bmN0aW9uKGN1cnJTbGlkZUVsZW1lbnQsIG5leHRTbGlkZUVsZW1lbnQsIG9wdGlvbnMsIGZvcndhcmRGbGFnKVxuXHRlbmQ6XHRcdCAgIG51bGwsICAvLyBjYWxsYmFjayBpbnZva2VkIHdoZW4gdGhlIHNsaWRlc2hvdyB0ZXJtaW5hdGVzICh1c2Ugd2l0aCBhdXRvc3RvcCBvciBub3dyYXAgb3B0aW9ucyk6IGZ1bmN0aW9uKG9wdGlvbnMpXG5cdGVhc2luZzpcdFx0ICAgbnVsbCwgIC8vIGVhc2luZyBtZXRob2QgZm9yIGJvdGggaW4gYW5kIG91dCB0cmFuc2l0aW9uc1xuXHRlYXNlSW46XHRcdCAgIG51bGwsICAvLyBlYXNpbmcgZm9yIFwiaW5cIiB0cmFuc2l0aW9uXG5cdGVhc2VPdXQ6XHQgICBudWxsLCAgLy8gZWFzaW5nIGZvciBcIm91dFwiIHRyYW5zaXRpb25cblx0c2h1ZmZsZTpcdCAgIG51bGwsICAvLyBjb29yZHMgZm9yIHNodWZmbGUgYW5pbWF0aW9uLCBleDogeyB0b3A6MTUsIGxlZnQ6IDIwMCB9XG5cdGFuaW1JbjpcdFx0ICAgbnVsbCwgIC8vIHByb3BlcnRpZXMgdGhhdCBkZWZpbmUgaG93IHRoZSBzbGlkZSBhbmltYXRlcyBpblxuXHRhbmltT3V0Olx0ICAgbnVsbCwgIC8vIHByb3BlcnRpZXMgdGhhdCBkZWZpbmUgaG93IHRoZSBzbGlkZSBhbmltYXRlcyBvdXRcblx0Y3NzQmVmb3JlOlx0ICAgbnVsbCwgIC8vIHByb3BlcnRpZXMgdGhhdCBkZWZpbmUgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIHNsaWRlIGJlZm9yZSB0cmFuc2l0aW9uaW5nIGluXG5cdGNzc0FmdGVyOlx0ICAgbnVsbCwgIC8vIHByb3BlcnRpZXMgdGhhdCBkZWZpbmVkIHRoZSBzdGF0ZSBvZiB0aGUgc2xpZGUgYWZ0ZXIgdHJhbnNpdGlvbmluZyBvdXRcblx0ZnhGbjpcdFx0ICAgbnVsbCwgIC8vIGZ1bmN0aW9uIHVzZWQgdG8gY29udHJvbCB0aGUgdHJhbnNpdGlvbjogZnVuY3Rpb24oY3VyclNsaWRlRWxlbWVudCwgbmV4dFNsaWRlRWxlbWVudCwgb3B0aW9ucywgYWZ0ZXJDYWxiYWNrLCBmb3J3YXJkRmxhZylcblx0aGVpZ2h0Olx0XHQgICdhdXRvJywgLy8gY29udGFpbmVyIGhlaWdodFxuXHRzdGFydGluZ1NsaWRlOiAwLFx0ICAvLyB6ZXJvLWJhc2VkIGluZGV4IG9mIHRoZSBmaXJzdCBzbGlkZSB0byBiZSBkaXNwbGF5ZWRcblx0c3luYzpcdFx0ICAgMSxcdCAgLy8gdHJ1ZSBpZiBpbi9vdXQgdHJhbnNpdGlvbnMgc2hvdWxkIG9jY3VyIHNpbXVsdGFuZW91c2x5XG5cdHJhbmRvbTpcdFx0ICAgMCxcdCAgLy8gdHJ1ZSBmb3IgcmFuZG9tLCBmYWxzZSBmb3Igc2VxdWVuY2UgKG5vdCBhcHBsaWNhYmxlIHRvIHNodWZmbGUgZngpXG5cdGZpdDpcdFx0ICAgMCxcdCAgLy8gZm9yY2Ugc2xpZGVzIHRvIGZpdCBjb250YWluZXJcblx0Y29udGFpbmVyUmVzaXplOiAxLFx0ICAvLyByZXNpemUgY29udGFpbmVyIHRvIGZpdCBsYXJnZXN0IHNsaWRlXG5cdHBhdXNlOlx0XHQgICAwLFx0ICAvLyB0cnVlIHRvIGVuYWJsZSBcInBhdXNlIG9uIGhvdmVyXCJcblx0cGF1c2VPblBhZ2VySG92ZXI6IDAsIC8vIHRydWUgdG8gcGF1c2Ugd2hlbiBob3ZlcmluZyBvdmVyIHBhZ2VyIGxpbmtcblx0YXV0b3N0b3A6XHQgICAwLFx0ICAvLyB0cnVlIHRvIGVuZCBzbGlkZXNob3cgYWZ0ZXIgWCB0cmFuc2l0aW9ucyAod2hlcmUgWCA9PSBzbGlkZSBjb3VudClcblx0YXV0b3N0b3BDb3VudDogMCxcdCAgLy8gbnVtYmVyIG9mIHRyYW5zaXRpb25zIChvcHRpb25hbGx5IHVzZWQgd2l0aCBhdXRvc3RvcCB0byBkZWZpbmUgWClcblx0ZGVsYXk6XHRcdCAgIDAsXHQgIC8vIGFkZGl0aW9uYWwgZGVsYXkgKGluIG1zKSBmb3IgZmlyc3QgdHJhbnNpdGlvbiAoaGludDogY2FuIGJlIG5lZ2F0aXZlKVxuXHRzbGlkZUV4cHI6XHQgICBudWxsLCAgLy8gZXhwcmVzc2lvbiBmb3Igc2VsZWN0aW5nIHNsaWRlcyAoaWYgc29tZXRoaW5nIG90aGVyIHRoYW4gYWxsIGNoaWxkcmVuIGlzIHJlcXVpcmVkKVxuXHRjbGVhcnR5cGU6XHQgICAhJC5zdXBwb3J0Lm9wYWNpdHksICAvLyB0cnVlIGlmIGNsZWFyVHlwZSBjb3JyZWN0aW9ucyBzaG91bGQgYmUgYXBwbGllZCAoZm9yIElFKVxuXHRjbGVhcnR5cGVOb0JnOiBmYWxzZSwgLy8gc2V0IHRvIHRydWUgdG8gZGlzYWJsZSBleHRyYSBjbGVhcnR5cGUgZml4aW5nIChsZWF2ZSBmYWxzZSB0byBmb3JjZSBiYWNrZ3JvdW5kIGNvbG9yIHNldHRpbmcgb24gc2xpZGVzKVxuXHRub3dyYXA6XHRcdCAgIDAsXHQgIC8vIHRydWUgdG8gcHJldmVudCBzbGlkZXNob3cgZnJvbSB3cmFwcGluZ1xuXHRmYXN0T25FdmVudDogICAwLFx0ICAvLyBmb3JjZSBmYXN0IHRyYW5zaXRpb25zIHdoZW4gdHJpZ2dlcmVkIG1hbnVhbGx5ICh2aWEgcGFnZXIgb3IgcHJldi9uZXh0KTsgdmFsdWUgPT0gdGltZSBpbiBtc1xuXHRyYW5kb21pemVFZmZlY3RzOiAxLCAgLy8gdmFsaWQgd2hlbiBtdWx0aXBsZSBlZmZlY3RzIGFyZSB1c2VkOyB0cnVlIHRvIG1ha2UgdGhlIGVmZmVjdCBzZXF1ZW5jZSByYW5kb21cblx0cmV2Olx0XHQgICAwLFx0IC8vIGNhdXNlcyBhbmltYXRpb25zIHRvIHRyYW5zaXRpb24gaW4gcmV2ZXJzZVxuXHRtYW51YWxUcnVtcDogICB0cnVlLCAgLy8gY2F1c2VzIG1hbnVhbCB0cmFuc2l0aW9uIHRvIHN0b3AgYW4gYWN0aXZlIHRyYW5zaXRpb24gaW5zdGVhZCBvZiBiZWluZyBpZ25vcmVkXG5cdHJlcXVldWVPbkltYWdlTm90TG9hZGVkOiB0cnVlLCAvLyByZXF1ZXVlIHRoZSBzbGlkZXNob3cgaWYgYW55IGltYWdlIHNsaWRlcyBhcmUgbm90IHlldCBsb2FkZWRcblx0cmVxdWV1ZVRpbWVvdXQ6IDI1MCwgIC8vIG1zIGRlbGF5IGZvciByZXF1ZXVlXG5cdGFjdGl2ZVBhZ2VyQ2xhc3M6ICdhY3RpdmVTbGlkZScsIC8vIGNsYXNzIG5hbWUgdXNlZCBmb3IgdGhlIGFjdGl2ZSBwYWdlciBsaW5rXG5cdHVwZGF0ZUFjdGl2ZVBhZ2VyTGluazogbnVsbCwgLy8gY2FsbGJhY2sgZm4gaW52b2tlZCB0byB1cGRhdGUgdGhlIGFjdGl2ZSBwYWdlciBsaW5rIChhZGRzL3JlbW92ZXMgYWN0aXZlUGFnZXJDbGFzcyBzdHlsZSlcblx0YmFja3dhcmRzOiAgICAgZmFsc2UgIC8vIHRydWUgdG8gc3RhcnQgc2xpZGVzaG93IGF0IGxhc3Qgc2xpZGUgYW5kIG1vdmUgYmFja3dhcmRzIHRocm91Z2ggdGhlIHN0YWNrXG59O1xuXG59KShqUXVlcnkpO1xuXG5cbi8qXG4gKiBqUXVlcnkgQ3ljbGUgUGx1Z2luIFRyYW5zaXRpb24gRGVmaW5pdGlvbnNcbiAqIFRoaXMgc2NyaXB0IGlzIGEgcGx1Z2luIGZvciB0aGUgalF1ZXJ5IEN5Y2xlIFBsdWdpblxuICogRXhhbXBsZXMgYW5kIGRvY3VtZW50YXRpb24gYXQ6IGh0dHA6Ly9tYWxzdXAuY29tL2pxdWVyeS9jeWNsZS9cbiAqIENvcHlyaWdodCAoYykgMjAwNy0yMDEwIE0uIEFsc3VwXG4gKiBWZXJzaW9uOlx0IDIuNzJcbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBhbmQgR1BMIGxpY2Vuc2VzOlxuICogaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAqIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9ncGwuaHRtbFxuICovXG4oZnVuY3Rpb24oJCkge1xuXG4vL1xuLy8gVGhlc2UgZnVuY3Rpb25zIGRlZmluZSBvbmUtdGltZSBzbGlkZSBpbml0aWFsaXphdGlvbiBmb3IgdGhlIG5hbWVkXG4vLyB0cmFuc2l0aW9ucy4gVG8gc2F2ZSBmaWxlIHNpemUgZmVlbCBmcmVlIHRvIHJlbW92ZSBhbnkgb2YgdGhlc2UgdGhhdCB5b3Vcbi8vIGRvbid0IG5lZWQuXG4vL1xuJC5mbi5jeWNsZS50cmFuc2l0aW9ucy5ub25lID0gZnVuY3Rpb24oJGNvbnQsICRzbGlkZXMsIG9wdHMpIHtcblx0b3B0cy5meEZuID0gZnVuY3Rpb24oY3VycixuZXh0LG9wdHMsYWZ0ZXIpe1xuXHRcdCQobmV4dCkuc2hvdygpO1xuXHRcdCQoY3VycikuaGlkZSgpO1xuXHRcdGFmdGVyKCk7XG5cdH07XG59XG5cbi8vIHNjcm9sbFVwL0Rvd24vTGVmdC9SaWdodFxuJC5mbi5jeWNsZS50cmFuc2l0aW9ucy5zY3JvbGxVcCA9IGZ1bmN0aW9uKCRjb250LCAkc2xpZGVzLCBvcHRzKSB7XG5cdCRjb250LmNzcygnb3ZlcmZsb3cnLCdoaWRkZW4nKTtcblx0b3B0cy5iZWZvcmUucHVzaCgkLmZuLmN5Y2xlLmNvbW1vblJlc2V0KTtcblx0dmFyIGggPSAkY29udC5oZWlnaHQoKTtcblx0b3B0cy5jc3NCZWZvcmUgPXt0b3A6IGgsIGxlZnQ6IDB9O1xuXHRvcHRzLmNzc0ZpcnN0ID0ge3RvcDogMH07XG5cdG9wdHMuYW5pbUluXHQgID0ge3RvcDogMH07XG5cdG9wdHMuYW5pbU91dCAgPSB7dG9wOiAtaH07XG59O1xuJC5mbi5jeWNsZS50cmFuc2l0aW9ucy5zY3JvbGxEb3duID0gZnVuY3Rpb24oJGNvbnQsICRzbGlkZXMsIG9wdHMpIHtcblx0JGNvbnQuY3NzKCdvdmVyZmxvdycsJ2hpZGRlbicpO1xuXHRvcHRzLmJlZm9yZS5wdXNoKCQuZm4uY3ljbGUuY29tbW9uUmVzZXQpO1xuXHR2YXIgaCA9ICRjb250LmhlaWdodCgpO1xuXHRvcHRzLmNzc0ZpcnN0ID0ge3RvcDogMH07XG5cdG9wdHMuY3NzQmVmb3JlPSB7dG9wOiAtaCwgbGVmdDogMH07XG5cdG9wdHMuYW5pbUluXHQgID0ge3RvcDogMH07XG5cdG9wdHMuYW5pbU91dCAgPSB7dG9wOiBofTtcbn07XG4kLmZuLmN5Y2xlLnRyYW5zaXRpb25zLnNjcm9sbExlZnQgPSBmdW5jdGlvbigkY29udCwgJHNsaWRlcywgb3B0cykge1xuXHQkY29udC5jc3MoJ292ZXJmbG93JywnaGlkZGVuJyk7XG5cdG9wdHMuYmVmb3JlLnB1c2goJC5mbi5jeWNsZS5jb21tb25SZXNldCk7XG5cdHZhciB3ID0gJGNvbnQud2lkdGgoKTtcblx0b3B0cy5jc3NGaXJzdCA9IHtsZWZ0OiAwfTtcblx0b3B0cy5jc3NCZWZvcmU9IHtsZWZ0OiB3LCB0b3A6IDB9O1xuXHRvcHRzLmFuaW1Jblx0ICA9IHtsZWZ0OiAwfTtcblx0b3B0cy5hbmltT3V0ICA9IHtsZWZ0OiAwLXd9O1xufTtcbiQuZm4uY3ljbGUudHJhbnNpdGlvbnMuc2Nyb2xsUmlnaHQgPSBmdW5jdGlvbigkY29udCwgJHNsaWRlcywgb3B0cykge1xuXHQkY29udC5jc3MoJ292ZXJmbG93JywnaGlkZGVuJyk7XG5cdG9wdHMuYmVmb3JlLnB1c2goJC5mbi5jeWNsZS5jb21tb25SZXNldCk7XG5cdHZhciB3ID0gJGNvbnQud2lkdGgoKTtcblx0b3B0cy5jc3NGaXJzdCA9IHtsZWZ0OiAwfTtcblx0b3B0cy5jc3NCZWZvcmU9IHtsZWZ0OiAtdywgdG9wOiAwfTtcblx0b3B0cy5hbmltSW5cdCAgPSB7bGVmdDogMH07XG5cdG9wdHMuYW5pbU91dCAgPSB7bGVmdDogd307XG59O1xuJC5mbi5jeWNsZS50cmFuc2l0aW9ucy5zY3JvbGxIb3J6ID0gZnVuY3Rpb24oJGNvbnQsICRzbGlkZXMsIG9wdHMpIHtcblx0JGNvbnQuY3NzKCdvdmVyZmxvdycsJ2hpZGRlbicpLndpZHRoKCk7XG5cdG9wdHMuYmVmb3JlLnB1c2goZnVuY3Rpb24oY3VyciwgbmV4dCwgb3B0cywgZndkKSB7XG5cdFx0JC5mbi5jeWNsZS5jb21tb25SZXNldChjdXJyLG5leHQsb3B0cyk7XG5cdFx0b3B0cy5jc3NCZWZvcmUubGVmdCA9IGZ3ZCA/IChuZXh0LmN5Y2xlVy0xKSA6ICgxLW5leHQuY3ljbGVXKTtcblx0XHRvcHRzLmFuaW1PdXQubGVmdCA9IGZ3ZCA/IC1jdXJyLmN5Y2xlVyA6IGN1cnIuY3ljbGVXO1xuXHR9KTtcblx0b3B0cy5jc3NGaXJzdCA9IHtsZWZ0OiAwfTtcblx0b3B0cy5jc3NCZWZvcmU9IHt0b3A6IDB9O1xuXHRvcHRzLmFuaW1JbiAgID0ge2xlZnQ6IDB9O1xuXHRvcHRzLmFuaW1PdXQgID0ge3RvcDogMH07XG59O1xuJC5mbi5jeWNsZS50cmFuc2l0aW9ucy5zY3JvbGxWZXJ0ID0gZnVuY3Rpb24oJGNvbnQsICRzbGlkZXMsIG9wdHMpIHtcblx0JGNvbnQuY3NzKCdvdmVyZmxvdycsJ2hpZGRlbicpO1xuXHRvcHRzLmJlZm9yZS5wdXNoKGZ1bmN0aW9uKGN1cnIsIG5leHQsIG9wdHMsIGZ3ZCkge1xuXHRcdCQuZm4uY3ljbGUuY29tbW9uUmVzZXQoY3VycixuZXh0LG9wdHMpO1xuXHRcdG9wdHMuY3NzQmVmb3JlLnRvcCA9IGZ3ZCA/ICgxLW5leHQuY3ljbGVIKSA6IChuZXh0LmN5Y2xlSC0xKTtcblx0XHRvcHRzLmFuaW1PdXQudG9wID0gZndkID8gY3Vyci5jeWNsZUggOiAtY3Vyci5jeWNsZUg7XG5cdH0pO1xuXHRvcHRzLmNzc0ZpcnN0ID0ge3RvcDogMH07XG5cdG9wdHMuY3NzQmVmb3JlPSB7bGVmdDogMH07XG5cdG9wdHMuYW5pbUluICAgPSB7dG9wOiAwfTtcblx0b3B0cy5hbmltT3V0ICA9IHtsZWZ0OiAwfTtcbn07XG5cbi8vIHNsaWRlWC9zbGlkZVlcbiQuZm4uY3ljbGUudHJhbnNpdGlvbnMuc2xpZGVYID0gZnVuY3Rpb24oJGNvbnQsICRzbGlkZXMsIG9wdHMpIHtcblx0b3B0cy5iZWZvcmUucHVzaChmdW5jdGlvbihjdXJyLCBuZXh0LCBvcHRzKSB7XG5cdFx0JChvcHRzLmVsZW1lbnRzKS5ub3QoY3VycikuaGlkZSgpO1xuXHRcdCQuZm4uY3ljbGUuY29tbW9uUmVzZXQoY3VycixuZXh0LG9wdHMsZmFsc2UsdHJ1ZSk7XG5cdFx0b3B0cy5hbmltSW4ud2lkdGggPSBuZXh0LmN5Y2xlVztcblx0fSk7XG5cdG9wdHMuY3NzQmVmb3JlID0ge2xlZnQ6IDAsIHRvcDogMCwgd2lkdGg6IDB9O1xuXHRvcHRzLmFuaW1Jblx0ID0ge3dpZHRoOiAnc2hvdyd9O1xuXHRvcHRzLmFuaW1PdXQgPSB7d2lkdGg6IDB9O1xufTtcbiQuZm4uY3ljbGUudHJhbnNpdGlvbnMuc2xpZGVZID0gZnVuY3Rpb24oJGNvbnQsICRzbGlkZXMsIG9wdHMpIHtcblx0b3B0cy5iZWZvcmUucHVzaChmdW5jdGlvbihjdXJyLCBuZXh0LCBvcHRzKSB7XG5cdFx0JChvcHRzLmVsZW1lbnRzKS5ub3QoY3VycikuaGlkZSgpO1xuXHRcdCQuZm4uY3ljbGUuY29tbW9uUmVzZXQoY3VycixuZXh0LG9wdHMsdHJ1ZSxmYWxzZSk7XG5cdFx0b3B0cy5hbmltSW4uaGVpZ2h0ID0gbmV4dC5jeWNsZUg7XG5cdH0pO1xuXHRvcHRzLmNzc0JlZm9yZSA9IHtsZWZ0OiAwLCB0b3A6IDAsIGhlaWdodDogMH07XG5cdG9wdHMuYW5pbUluXHQgPSB7aGVpZ2h0OiAnc2hvdyd9O1xuXHRvcHRzLmFuaW1PdXQgPSB7aGVpZ2h0OiAwfTtcbn07XG5cbi8vIHNodWZmbGVcbiQuZm4uY3ljbGUudHJhbnNpdGlvbnMuc2h1ZmZsZSA9IGZ1bmN0aW9uKCRjb250LCAkc2xpZGVzLCBvcHRzKSB7XG5cdHZhciBpLCB3ID0gJGNvbnQuY3NzKCdvdmVyZmxvdycsICd2aXNpYmxlJykud2lkdGgoKTtcblx0JHNsaWRlcy5jc3Moe2xlZnQ6IDAsIHRvcDogMH0pO1xuXHRvcHRzLmJlZm9yZS5wdXNoKGZ1bmN0aW9uKGN1cnIsbmV4dCxvcHRzKSB7XG5cdFx0JC5mbi5jeWNsZS5jb21tb25SZXNldChjdXJyLG5leHQsb3B0cyx0cnVlLHRydWUsdHJ1ZSk7XG5cdH0pO1xuXHQvLyBvbmx5IGFkanVzdCBzcGVlZCBvbmNlIVxuXHRpZiAoIW9wdHMuc3BlZWRBZGp1c3RlZCkge1xuXHRcdG9wdHMuc3BlZWQgPSBvcHRzLnNwZWVkIC8gMjsgLy8gc2h1ZmZsZSBoYXMgMiB0cmFuc2l0aW9uc1xuXHRcdG9wdHMuc3BlZWRBZGp1c3RlZCA9IHRydWU7XG5cdH1cblx0b3B0cy5yYW5kb20gPSAwO1xuXHRvcHRzLnNodWZmbGUgPSBvcHRzLnNodWZmbGUgfHwge2xlZnQ6LXcsIHRvcDoxNX07XG5cdG9wdHMuZWxzID0gW107XG5cdGZvciAoaT0wOyBpIDwgJHNsaWRlcy5sZW5ndGg7IGkrKylcblx0XHRvcHRzLmVscy5wdXNoKCRzbGlkZXNbaV0pO1xuXG5cdGZvciAoaT0wOyBpIDwgb3B0cy5jdXJyU2xpZGU7IGkrKylcblx0XHRvcHRzLmVscy5wdXNoKG9wdHMuZWxzLnNoaWZ0KCkpO1xuXG5cdC8vIGN1c3RvbSB0cmFuc2l0aW9uIGZuIChoYXQgdGlwIHRvIEJlbmphbWluIFN0ZXJsaW5nIGZvciB0aGlzIGJpdCBvZiBzd2VldG5lc3MhKVxuXHRvcHRzLmZ4Rm4gPSBmdW5jdGlvbihjdXJyLCBuZXh0LCBvcHRzLCBjYiwgZndkKSB7XG5cdFx0dmFyICRlbCA9IGZ3ZCA/ICQoY3VycikgOiAkKG5leHQpO1xuXHRcdCQobmV4dCkuY3NzKG9wdHMuY3NzQmVmb3JlKTtcblx0XHR2YXIgY291bnQgPSBvcHRzLnNsaWRlQ291bnQ7XG5cdFx0JGVsLmFuaW1hdGUob3B0cy5zaHVmZmxlLCBvcHRzLnNwZWVkSW4sIG9wdHMuZWFzZUluLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBob3BzID0gJC5mbi5jeWNsZS5ob3BzRnJvbUxhc3Qob3B0cywgZndkKTtcblx0XHRcdGZvciAodmFyIGs9MDsgayA8IGhvcHM7IGsrKylcblx0XHRcdFx0ZndkID8gb3B0cy5lbHMucHVzaChvcHRzLmVscy5zaGlmdCgpKSA6IG9wdHMuZWxzLnVuc2hpZnQob3B0cy5lbHMucG9wKCkpO1xuXHRcdFx0aWYgKGZ3ZCkge1xuXHRcdFx0XHRmb3IgKHZhciBpPTAsIGxlbj1vcHRzLmVscy5sZW5ndGg7IGkgPCBsZW47IGkrKylcblx0XHRcdFx0XHQkKG9wdHMuZWxzW2ldKS5jc3MoJ3otaW5kZXgnLCBsZW4taStjb3VudCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dmFyIHogPSAkKGN1cnIpLmNzcygnei1pbmRleCcpO1xuXHRcdFx0XHQkZWwuY3NzKCd6LWluZGV4JywgcGFyc2VJbnQoeikrMStjb3VudCk7XG5cdFx0XHR9XG5cdFx0XHQkZWwuYW5pbWF0ZSh7bGVmdDowLCB0b3A6MH0sIG9wdHMuc3BlZWRPdXQsIG9wdHMuZWFzZU91dCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoZndkID8gdGhpcyA6IGN1cnIpLmhpZGUoKTtcblx0XHRcdFx0aWYgKGNiKSBjYigpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cdG9wdHMuY3NzQmVmb3JlID0ge2Rpc3BsYXk6ICdibG9jaycsIG9wYWNpdHk6IDEsIHRvcDogMCwgbGVmdDogMH07XG59O1xuXG4vLyB0dXJuVXAvRG93bi9MZWZ0L1JpZ2h0XG4kLmZuLmN5Y2xlLnRyYW5zaXRpb25zLnR1cm5VcCA9IGZ1bmN0aW9uKCRjb250LCAkc2xpZGVzLCBvcHRzKSB7XG5cdG9wdHMuYmVmb3JlLnB1c2goZnVuY3Rpb24oY3VyciwgbmV4dCwgb3B0cykge1xuXHRcdCQuZm4uY3ljbGUuY29tbW9uUmVzZXQoY3VycixuZXh0LG9wdHMsdHJ1ZSxmYWxzZSk7XG5cdFx0b3B0cy5jc3NCZWZvcmUudG9wID0gbmV4dC5jeWNsZUg7XG5cdFx0b3B0cy5hbmltSW4uaGVpZ2h0ID0gbmV4dC5jeWNsZUg7XG5cdH0pO1xuXHRvcHRzLmNzc0ZpcnN0ICA9IHt0b3A6IDB9O1xuXHRvcHRzLmNzc0JlZm9yZSA9IHtsZWZ0OiAwLCBoZWlnaHQ6IDB9O1xuXHRvcHRzLmFuaW1Jblx0ICAgPSB7dG9wOiAwfTtcblx0b3B0cy5hbmltT3V0ICAgPSB7aGVpZ2h0OiAwfTtcbn07XG4kLmZuLmN5Y2xlLnRyYW5zaXRpb25zLnR1cm5Eb3duID0gZnVuY3Rpb24oJGNvbnQsICRzbGlkZXMsIG9wdHMpIHtcblx0b3B0cy5iZWZvcmUucHVzaChmdW5jdGlvbihjdXJyLCBuZXh0LCBvcHRzKSB7XG5cdFx0JC5mbi5jeWNsZS5jb21tb25SZXNldChjdXJyLG5leHQsb3B0cyx0cnVlLGZhbHNlKTtcblx0XHRvcHRzLmFuaW1Jbi5oZWlnaHQgPSBuZXh0LmN5Y2xlSDtcblx0XHRvcHRzLmFuaW1PdXQudG9wICAgPSBjdXJyLmN5Y2xlSDtcblx0fSk7XG5cdG9wdHMuY3NzRmlyc3QgID0ge3RvcDogMH07XG5cdG9wdHMuY3NzQmVmb3JlID0ge2xlZnQ6IDAsIHRvcDogMCwgaGVpZ2h0OiAwfTtcblx0b3B0cy5hbmltT3V0ICAgPSB7aGVpZ2h0OiAwfTtcbn07XG4kLmZuLmN5Y2xlLnRyYW5zaXRpb25zLnR1cm5MZWZ0ID0gZnVuY3Rpb24oJGNvbnQsICRzbGlkZXMsIG9wdHMpIHtcblx0b3B0cy5iZWZvcmUucHVzaChmdW5jdGlvbihjdXJyLCBuZXh0LCBvcHRzKSB7XG5cdFx0JC5mbi5jeWNsZS5jb21tb25SZXNldChjdXJyLG5leHQsb3B0cyxmYWxzZSx0cnVlKTtcblx0XHRvcHRzLmNzc0JlZm9yZS5sZWZ0ID0gbmV4dC5jeWNsZVc7XG5cdFx0b3B0cy5hbmltSW4ud2lkdGggPSBuZXh0LmN5Y2xlVztcblx0fSk7XG5cdG9wdHMuY3NzQmVmb3JlID0ge3RvcDogMCwgd2lkdGg6IDB9O1xuXHRvcHRzLmFuaW1Jblx0ICAgPSB7bGVmdDogMH07XG5cdG9wdHMuYW5pbU91dCAgID0ge3dpZHRoOiAwfTtcbn07XG4kLmZuLmN5Y2xlLnRyYW5zaXRpb25zLnR1cm5SaWdodCA9IGZ1bmN0aW9uKCRjb250LCAkc2xpZGVzLCBvcHRzKSB7XG5cdG9wdHMuYmVmb3JlLnB1c2goZnVuY3Rpb24oY3VyciwgbmV4dCwgb3B0cykge1xuXHRcdCQuZm4uY3ljbGUuY29tbW9uUmVzZXQoY3VycixuZXh0LG9wdHMsZmFsc2UsdHJ1ZSk7XG5cdFx0b3B0cy5hbmltSW4ud2lkdGggPSBuZXh0LmN5Y2xlVztcblx0XHRvcHRzLmFuaW1PdXQubGVmdCA9IGN1cnIuY3ljbGVXO1xuXHR9KTtcblx0b3B0cy5jc3NCZWZvcmUgPSB7dG9wOiAwLCBsZWZ0OiAwLCB3aWR0aDogMH07XG5cdG9wdHMuYW5pbUluXHQgICA9IHtsZWZ0OiAwfTtcblx0b3B0cy5hbmltT3V0ICAgPSB7d2lkdGg6IDB9O1xufTtcblxuLy8gem9vbVxuJC5mbi5jeWNsZS50cmFuc2l0aW9ucy56b29tID0gZnVuY3Rpb24oJGNvbnQsICRzbGlkZXMsIG9wdHMpIHtcblx0b3B0cy5iZWZvcmUucHVzaChmdW5jdGlvbihjdXJyLCBuZXh0LCBvcHRzKSB7XG5cdFx0JC5mbi5jeWNsZS5jb21tb25SZXNldChjdXJyLG5leHQsb3B0cyxmYWxzZSxmYWxzZSx0cnVlKTtcblx0XHRvcHRzLmNzc0JlZm9yZS50b3AgPSBuZXh0LmN5Y2xlSC8yO1xuXHRcdG9wdHMuY3NzQmVmb3JlLmxlZnQgPSBuZXh0LmN5Y2xlVy8yO1xuXHRcdG9wdHMuYW5pbUluXHQgICA9IHt0b3A6IDAsIGxlZnQ6IDAsIHdpZHRoOiBuZXh0LmN5Y2xlVywgaGVpZ2h0OiBuZXh0LmN5Y2xlSH07XG5cdFx0b3B0cy5hbmltT3V0ICAgPSB7d2lkdGg6IDAsIGhlaWdodDogMCwgdG9wOiBjdXJyLmN5Y2xlSC8yLCBsZWZ0OiBjdXJyLmN5Y2xlVy8yfTtcblx0fSk7XG5cdG9wdHMuY3NzRmlyc3QgPSB7dG9wOjAsIGxlZnQ6IDB9O1xuXHRvcHRzLmNzc0JlZm9yZSA9IHt3aWR0aDogMCwgaGVpZ2h0OiAwfTtcbn07XG5cbi8vIGZhZGVab29tXG4kLmZuLmN5Y2xlLnRyYW5zaXRpb25zLmZhZGVab29tID0gZnVuY3Rpb24oJGNvbnQsICRzbGlkZXMsIG9wdHMpIHtcblx0b3B0cy5iZWZvcmUucHVzaChmdW5jdGlvbihjdXJyLCBuZXh0LCBvcHRzKSB7XG5cdFx0JC5mbi5jeWNsZS5jb21tb25SZXNldChjdXJyLG5leHQsb3B0cyxmYWxzZSxmYWxzZSk7XG5cdFx0b3B0cy5jc3NCZWZvcmUubGVmdCA9IG5leHQuY3ljbGVXLzI7XG5cdFx0b3B0cy5jc3NCZWZvcmUudG9wID0gbmV4dC5jeWNsZUgvMjtcblx0XHRvcHRzLmFuaW1Jblx0PSB7dG9wOiAwLCBsZWZ0OiAwLCB3aWR0aDogbmV4dC5jeWNsZVcsIGhlaWdodDogbmV4dC5jeWNsZUh9O1xuXHR9KTtcblx0b3B0cy5jc3NCZWZvcmUgPSB7d2lkdGg6IDAsIGhlaWdodDogMH07XG5cdG9wdHMuYW5pbU91dCAgPSB7b3BhY2l0eTogMH07XG59O1xuXG4vLyBibGluZFhcbiQuZm4uY3ljbGUudHJhbnNpdGlvbnMuYmxpbmRYID0gZnVuY3Rpb24oJGNvbnQsICRzbGlkZXMsIG9wdHMpIHtcblx0dmFyIHcgPSAkY29udC5jc3MoJ292ZXJmbG93JywnaGlkZGVuJykud2lkdGgoKTtcblx0b3B0cy5iZWZvcmUucHVzaChmdW5jdGlvbihjdXJyLCBuZXh0LCBvcHRzKSB7XG5cdFx0JC5mbi5jeWNsZS5jb21tb25SZXNldChjdXJyLG5leHQsb3B0cyk7XG5cdFx0b3B0cy5hbmltSW4ud2lkdGggPSBuZXh0LmN5Y2xlVztcblx0XHRvcHRzLmFuaW1PdXQubGVmdCAgID0gY3Vyci5jeWNsZVc7XG5cdH0pO1xuXHRvcHRzLmNzc0JlZm9yZSA9IHtsZWZ0OiB3LCB0b3A6IDB9O1xuXHRvcHRzLmFuaW1JbiA9IHtsZWZ0OiAwfTtcblx0b3B0cy5hbmltT3V0ICA9IHtsZWZ0OiB3fTtcbn07XG4vLyBibGluZFlcbiQuZm4uY3ljbGUudHJhbnNpdGlvbnMuYmxpbmRZID0gZnVuY3Rpb24oJGNvbnQsICRzbGlkZXMsIG9wdHMpIHtcblx0dmFyIGggPSAkY29udC5jc3MoJ292ZXJmbG93JywnaGlkZGVuJykuaGVpZ2h0KCk7XG5cdG9wdHMuYmVmb3JlLnB1c2goZnVuY3Rpb24oY3VyciwgbmV4dCwgb3B0cykge1xuXHRcdCQuZm4uY3ljbGUuY29tbW9uUmVzZXQoY3VycixuZXh0LG9wdHMpO1xuXHRcdG9wdHMuYW5pbUluLmhlaWdodCA9IG5leHQuY3ljbGVIO1xuXHRcdG9wdHMuYW5pbU91dC50b3AgICA9IGN1cnIuY3ljbGVIO1xuXHR9KTtcblx0b3B0cy5jc3NCZWZvcmUgPSB7dG9wOiBoLCBsZWZ0OiAwfTtcblx0b3B0cy5hbmltSW4gPSB7dG9wOiAwfTtcblx0b3B0cy5hbmltT3V0ICA9IHt0b3A6IGh9O1xufTtcbi8vIGJsaW5kWlxuJC5mbi5jeWNsZS50cmFuc2l0aW9ucy5ibGluZFogPSBmdW5jdGlvbigkY29udCwgJHNsaWRlcywgb3B0cykge1xuXHR2YXIgaCA9ICRjb250LmNzcygnb3ZlcmZsb3cnLCdoaWRkZW4nKS5oZWlnaHQoKTtcblx0dmFyIHcgPSAkY29udC53aWR0aCgpO1xuXHRvcHRzLmJlZm9yZS5wdXNoKGZ1bmN0aW9uKGN1cnIsIG5leHQsIG9wdHMpIHtcblx0XHQkLmZuLmN5Y2xlLmNvbW1vblJlc2V0KGN1cnIsbmV4dCxvcHRzKTtcblx0XHRvcHRzLmFuaW1Jbi5oZWlnaHQgPSBuZXh0LmN5Y2xlSDtcblx0XHRvcHRzLmFuaW1PdXQudG9wICAgPSBjdXJyLmN5Y2xlSDtcblx0fSk7XG5cdG9wdHMuY3NzQmVmb3JlID0ge3RvcDogaCwgbGVmdDogd307XG5cdG9wdHMuYW5pbUluID0ge3RvcDogMCwgbGVmdDogMH07XG5cdG9wdHMuYW5pbU91dCAgPSB7dG9wOiBoLCBsZWZ0OiB3fTtcbn07XG5cbi8vIGdyb3dYIC0gZ3JvdyBob3Jpem9udGFsbHkgZnJvbSBjZW50ZXJlZCAwIHdpZHRoXG4kLmZuLmN5Y2xlLnRyYW5zaXRpb25zLmdyb3dYID0gZnVuY3Rpb24oJGNvbnQsICRzbGlkZXMsIG9wdHMpIHtcblx0b3B0cy5iZWZvcmUucHVzaChmdW5jdGlvbihjdXJyLCBuZXh0LCBvcHRzKSB7XG5cdFx0JC5mbi5jeWNsZS5jb21tb25SZXNldChjdXJyLG5leHQsb3B0cyxmYWxzZSx0cnVlKTtcblx0XHRvcHRzLmNzc0JlZm9yZS5sZWZ0ID0gdGhpcy5jeWNsZVcvMjtcblx0XHRvcHRzLmFuaW1JbiA9IHtsZWZ0OiAwLCB3aWR0aDogdGhpcy5jeWNsZVd9O1xuXHRcdG9wdHMuYW5pbU91dCA9IHtsZWZ0OiAwfTtcblx0fSk7XG5cdG9wdHMuY3NzQmVmb3JlID0ge3dpZHRoOiAwLCB0b3A6IDB9O1xufTtcbi8vIGdyb3dZIC0gZ3JvdyB2ZXJ0aWNhbGx5IGZyb20gY2VudGVyZWQgMCBoZWlnaHRcbiQuZm4uY3ljbGUudHJhbnNpdGlvbnMuZ3Jvd1kgPSBmdW5jdGlvbigkY29udCwgJHNsaWRlcywgb3B0cykge1xuXHRvcHRzLmJlZm9yZS5wdXNoKGZ1bmN0aW9uKGN1cnIsIG5leHQsIG9wdHMpIHtcblx0XHQkLmZuLmN5Y2xlLmNvbW1vblJlc2V0KGN1cnIsbmV4dCxvcHRzLHRydWUsZmFsc2UpO1xuXHRcdG9wdHMuY3NzQmVmb3JlLnRvcCA9IHRoaXMuY3ljbGVILzI7XG5cdFx0b3B0cy5hbmltSW4gPSB7dG9wOiAwLCBoZWlnaHQ6IHRoaXMuY3ljbGVIfTtcblx0XHRvcHRzLmFuaW1PdXQgPSB7dG9wOiAwfTtcblx0fSk7XG5cdG9wdHMuY3NzQmVmb3JlID0ge2hlaWdodDogMCwgbGVmdDogMH07XG59O1xuXG4vLyBjdXJ0YWluWCAtIHNxdWVlemUgaW4gYm90aCBlZGdlcyBob3Jpem9udGFsbHlcbiQuZm4uY3ljbGUudHJhbnNpdGlvbnMuY3VydGFpblggPSBmdW5jdGlvbigkY29udCwgJHNsaWRlcywgb3B0cykge1xuXHRvcHRzLmJlZm9yZS5wdXNoKGZ1bmN0aW9uKGN1cnIsIG5leHQsIG9wdHMpIHtcblx0XHQkLmZuLmN5Y2xlLmNvbW1vblJlc2V0KGN1cnIsbmV4dCxvcHRzLGZhbHNlLHRydWUsdHJ1ZSk7XG5cdFx0b3B0cy5jc3NCZWZvcmUubGVmdCA9IG5leHQuY3ljbGVXLzI7XG5cdFx0b3B0cy5hbmltSW4gPSB7bGVmdDogMCwgd2lkdGg6IHRoaXMuY3ljbGVXfTtcblx0XHRvcHRzLmFuaW1PdXQgPSB7bGVmdDogY3Vyci5jeWNsZVcvMiwgd2lkdGg6IDB9O1xuXHR9KTtcblx0b3B0cy5jc3NCZWZvcmUgPSB7dG9wOiAwLCB3aWR0aDogMH07XG59O1xuLy8gY3VydGFpblkgLSBzcXVlZXplIGluIGJvdGggZWRnZXMgdmVydGljYWxseVxuJC5mbi5jeWNsZS50cmFuc2l0aW9ucy5jdXJ0YWluWSA9IGZ1bmN0aW9uKCRjb250LCAkc2xpZGVzLCBvcHRzKSB7XG5cdG9wdHMuYmVmb3JlLnB1c2goZnVuY3Rpb24oY3VyciwgbmV4dCwgb3B0cykge1xuXHRcdCQuZm4uY3ljbGUuY29tbW9uUmVzZXQoY3VycixuZXh0LG9wdHMsdHJ1ZSxmYWxzZSx0cnVlKTtcblx0XHRvcHRzLmNzc0JlZm9yZS50b3AgPSBuZXh0LmN5Y2xlSC8yO1xuXHRcdG9wdHMuYW5pbUluID0ge3RvcDogMCwgaGVpZ2h0OiBuZXh0LmN5Y2xlSH07XG5cdFx0b3B0cy5hbmltT3V0ID0ge3RvcDogY3Vyci5jeWNsZUgvMiwgaGVpZ2h0OiAwfTtcblx0fSk7XG5cdG9wdHMuY3NzQmVmb3JlID0ge2xlZnQ6IDAsIGhlaWdodDogMH07XG59O1xuXG4vLyBjb3ZlciAtIGN1cnIgc2xpZGUgY292ZXJlZCBieSBuZXh0IHNsaWRlXG4kLmZuLmN5Y2xlLnRyYW5zaXRpb25zLmNvdmVyID0gZnVuY3Rpb24oJGNvbnQsICRzbGlkZXMsIG9wdHMpIHtcblx0dmFyIGQgPSBvcHRzLmRpcmVjdGlvbiB8fCAnbGVmdCc7XG5cdHZhciB3ID0gJGNvbnQuY3NzKCdvdmVyZmxvdycsJ2hpZGRlbicpLndpZHRoKCk7XG5cdHZhciBoID0gJGNvbnQuaGVpZ2h0KCk7XG5cdG9wdHMuYmVmb3JlLnB1c2goZnVuY3Rpb24oY3VyciwgbmV4dCwgb3B0cykge1xuXHRcdCQuZm4uY3ljbGUuY29tbW9uUmVzZXQoY3VycixuZXh0LG9wdHMpO1xuXHRcdGlmIChkID09ICdyaWdodCcpXG5cdFx0XHRvcHRzLmNzc0JlZm9yZS5sZWZ0ID0gLXc7XG5cdFx0ZWxzZSBpZiAoZCA9PSAndXAnKVxuXHRcdFx0b3B0cy5jc3NCZWZvcmUudG9wID0gaDtcblx0XHRlbHNlIGlmIChkID09ICdkb3duJylcblx0XHRcdG9wdHMuY3NzQmVmb3JlLnRvcCA9IC1oO1xuXHRcdGVsc2Vcblx0XHRcdG9wdHMuY3NzQmVmb3JlLmxlZnQgPSB3O1xuXHR9KTtcblx0b3B0cy5hbmltSW4gPSB7bGVmdDogMCwgdG9wOiAwfTtcblx0b3B0cy5hbmltT3V0ID0ge29wYWNpdHk6IDF9O1xuXHRvcHRzLmNzc0JlZm9yZSA9IHt0b3A6IDAsIGxlZnQ6IDB9O1xufTtcblxuLy8gdW5jb3ZlciAtIGN1cnIgc2xpZGUgbW92ZXMgb2ZmIG5leHQgc2xpZGVcbiQuZm4uY3ljbGUudHJhbnNpdGlvbnMudW5jb3ZlciA9IGZ1bmN0aW9uKCRjb250LCAkc2xpZGVzLCBvcHRzKSB7XG5cdHZhciBkID0gb3B0cy5kaXJlY3Rpb24gfHwgJ2xlZnQnO1xuXHR2YXIgdyA9ICRjb250LmNzcygnb3ZlcmZsb3cnLCdoaWRkZW4nKS53aWR0aCgpO1xuXHR2YXIgaCA9ICRjb250LmhlaWdodCgpO1xuXHRvcHRzLmJlZm9yZS5wdXNoKGZ1bmN0aW9uKGN1cnIsIG5leHQsIG9wdHMpIHtcblx0XHQkLmZuLmN5Y2xlLmNvbW1vblJlc2V0KGN1cnIsbmV4dCxvcHRzLHRydWUsdHJ1ZSx0cnVlKTtcblx0XHRpZiAoZCA9PSAncmlnaHQnKVxuXHRcdFx0b3B0cy5hbmltT3V0LmxlZnQgPSB3O1xuXHRcdGVsc2UgaWYgKGQgPT0gJ3VwJylcblx0XHRcdG9wdHMuYW5pbU91dC50b3AgPSAtaDtcblx0XHRlbHNlIGlmIChkID09ICdkb3duJylcblx0XHRcdG9wdHMuYW5pbU91dC50b3AgPSBoO1xuXHRcdGVsc2Vcblx0XHRcdG9wdHMuYW5pbU91dC5sZWZ0ID0gLXc7XG5cdH0pO1xuXHRvcHRzLmFuaW1JbiA9IHtsZWZ0OiAwLCB0b3A6IDB9O1xuXHRvcHRzLmFuaW1PdXQgPSB7b3BhY2l0eTogMX07XG5cdG9wdHMuY3NzQmVmb3JlID0ge3RvcDogMCwgbGVmdDogMH07XG59O1xuXG4vLyB0b3NzIC0gbW92ZSB0b3Agc2xpZGUgYW5kIGZhZGUgYXdheVxuJC5mbi5jeWNsZS50cmFuc2l0aW9ucy50b3NzID0gZnVuY3Rpb24oJGNvbnQsICRzbGlkZXMsIG9wdHMpIHtcblx0dmFyIHcgPSAkY29udC5jc3MoJ292ZXJmbG93JywndmlzaWJsZScpLndpZHRoKCk7XG5cdHZhciBoID0gJGNvbnQuaGVpZ2h0KCk7XG5cdG9wdHMuYmVmb3JlLnB1c2goZnVuY3Rpb24oY3VyciwgbmV4dCwgb3B0cykge1xuXHRcdCQuZm4uY3ljbGUuY29tbW9uUmVzZXQoY3VycixuZXh0LG9wdHMsdHJ1ZSx0cnVlLHRydWUpO1xuXHRcdC8vIHByb3ZpZGUgZGVmYXVsdCB0b3NzIHNldHRpbmdzIGlmIGFuaW1PdXQgbm90IHByb3ZpZGVkXG5cdFx0aWYgKCFvcHRzLmFuaW1PdXQubGVmdCAmJiAhb3B0cy5hbmltT3V0LnRvcClcblx0XHRcdG9wdHMuYW5pbU91dCA9IHtsZWZ0OiB3KjIsIHRvcDogLWgvMiwgb3BhY2l0eTogMH07XG5cdFx0ZWxzZVxuXHRcdFx0b3B0cy5hbmltT3V0Lm9wYWNpdHkgPSAwO1xuXHR9KTtcblx0b3B0cy5jc3NCZWZvcmUgPSB7bGVmdDogMCwgdG9wOiAwfTtcblx0b3B0cy5hbmltSW4gPSB7bGVmdDogMH07XG59O1xuXG4vLyB3aXBlIC0gY2xpcCBhbmltYXRpb25cbiQuZm4uY3ljbGUudHJhbnNpdGlvbnMud2lwZSA9IGZ1bmN0aW9uKCRjb250LCAkc2xpZGVzLCBvcHRzKSB7XG5cdHZhciB3ID0gJGNvbnQuY3NzKCdvdmVyZmxvdycsJ2hpZGRlbicpLndpZHRoKCk7XG5cdHZhciBoID0gJGNvbnQuaGVpZ2h0KCk7XG5cdG9wdHMuY3NzQmVmb3JlID0gb3B0cy5jc3NCZWZvcmUgfHwge307XG5cdHZhciBjbGlwO1xuXHRpZiAob3B0cy5jbGlwKSB7XG5cdFx0aWYgKC9sMnIvLnRlc3Qob3B0cy5jbGlwKSlcblx0XHRcdGNsaXAgPSAncmVjdCgwcHggMHB4ICcraCsncHggMHB4KSc7XG5cdFx0ZWxzZSBpZiAoL3IybC8udGVzdChvcHRzLmNsaXApKVxuXHRcdFx0Y2xpcCA9ICdyZWN0KDBweCAnK3crJ3B4ICcraCsncHggJyt3KydweCknO1xuXHRcdGVsc2UgaWYgKC90MmIvLnRlc3Qob3B0cy5jbGlwKSlcblx0XHRcdGNsaXAgPSAncmVjdCgwcHggJyt3KydweCAwcHggMHB4KSc7XG5cdFx0ZWxzZSBpZiAoL2IydC8udGVzdChvcHRzLmNsaXApKVxuXHRcdFx0Y2xpcCA9ICdyZWN0KCcraCsncHggJyt3KydweCAnK2grJ3B4IDBweCknO1xuXHRcdGVsc2UgaWYgKC96b29tLy50ZXN0KG9wdHMuY2xpcCkpIHtcblx0XHRcdHZhciB0b3AgPSBwYXJzZUludChoLzIpO1xuXHRcdFx0dmFyIGxlZnQgPSBwYXJzZUludCh3LzIpO1xuXHRcdFx0Y2xpcCA9ICdyZWN0KCcrdG9wKydweCAnK2xlZnQrJ3B4ICcrdG9wKydweCAnK2xlZnQrJ3B4KSc7XG5cdFx0fVxuXHR9XG5cblx0b3B0cy5jc3NCZWZvcmUuY2xpcCA9IG9wdHMuY3NzQmVmb3JlLmNsaXAgfHwgY2xpcCB8fCAncmVjdCgwcHggMHB4IDBweCAwcHgpJztcblxuXHR2YXIgZCA9IG9wdHMuY3NzQmVmb3JlLmNsaXAubWF0Y2goLyhcXGQrKS9nKTtcblx0dmFyIHQgPSBwYXJzZUludChkWzBdKSwgciA9IHBhcnNlSW50KGRbMV0pLCBiID0gcGFyc2VJbnQoZFsyXSksIGwgPSBwYXJzZUludChkWzNdKTtcblxuXHRvcHRzLmJlZm9yZS5wdXNoKGZ1bmN0aW9uKGN1cnIsIG5leHQsIG9wdHMpIHtcblx0XHRpZiAoY3VyciA9PSBuZXh0KSByZXR1cm47XG5cdFx0dmFyICRjdXJyID0gJChjdXJyKSwgJG5leHQgPSAkKG5leHQpO1xuXHRcdCQuZm4uY3ljbGUuY29tbW9uUmVzZXQoY3VycixuZXh0LG9wdHMsdHJ1ZSx0cnVlLGZhbHNlKTtcblx0XHRvcHRzLmNzc0FmdGVyLmRpc3BsYXkgPSAnYmxvY2snO1xuXG5cdFx0dmFyIHN0ZXAgPSAxLCBjb3VudCA9IHBhcnNlSW50KChvcHRzLnNwZWVkSW4gLyAxMykpIC0gMTtcblx0XHQoZnVuY3Rpb24gZigpIHtcblx0XHRcdHZhciB0dCA9IHQgPyB0IC0gcGFyc2VJbnQoc3RlcCAqICh0L2NvdW50KSkgOiAwO1xuXHRcdFx0dmFyIGxsID0gbCA/IGwgLSBwYXJzZUludChzdGVwICogKGwvY291bnQpKSA6IDA7XG5cdFx0XHR2YXIgYmIgPSBiIDwgaCA/IGIgKyBwYXJzZUludChzdGVwICogKChoLWIpL2NvdW50IHx8IDEpKSA6IGg7XG5cdFx0XHR2YXIgcnIgPSByIDwgdyA/IHIgKyBwYXJzZUludChzdGVwICogKCh3LXIpL2NvdW50IHx8IDEpKSA6IHc7XG5cdFx0XHQkbmV4dC5jc3Moe2NsaXA6ICdyZWN0KCcrdHQrJ3B4ICcrcnIrJ3B4ICcrYmIrJ3B4ICcrbGwrJ3B4KSd9KTtcblx0XHRcdChzdGVwKysgPD0gY291bnQpID8gc2V0VGltZW91dChmLCAxMykgOiAkY3Vyci5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdH0pKCk7XG5cdH0pO1xuXHRvcHRzLmNzc0JlZm9yZSA9IHtkaXNwbGF5OiAnYmxvY2snLCBvcGFjaXR5OiAxLCB0b3A6IDAsIGxlZnQ6IDB9O1xuXHRvcHRzLmFuaW1Jblx0ICAgPSB7bGVmdDogMH07XG5cdG9wdHMuYW5pbU91dCAgID0ge2xlZnQ6IDB9O1xufTtcblxufSkoalF1ZXJ5KTtcbiIsICJpbXBvcnQgXCIuLzAtanF1ZXJ5LWltYWdlc3dpdGNoLmpzXCI7XG5cbmltcG9ydCB7IEJhc2VXaWRnZXQgfSBmcm9tIFwiLi4vY29yZS9jb3JlLndpZGdldC5qc1wiO1xuXG4vKipcbiAqIF9fUHJpbWVGYWNlcyBJbWFnZVN3aXRjaCBXaWRnZXRfX1xuICpcbiAqIEltYWdlU3dpdGNoIGlzIGFuIGltYWdlIGdhbGxlcnkgY29tcG9uZW50IHdpdGggMjUrIGVmZmVjdHMuIFVzZSB0aGUgSlF1ZXJ5IGN5Y2xlIHBsdWdpbi4gWW91IGNhbiBhbHNvIGludGVyYWN0IHdpdGhcbiAqIHRoZSBpbWFnZXN3aXRjaCBwcm9ncmFtYXRpY2FsbHkgdmlhIGAkLmZuLmN5Y2xlYDpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBjb25zdCB3aWRnZXQgPSBQRihcIm15SW1hZ2VTd2l0Y2hXaWRnZXRcIik7XG4gKiB3aWRnZXQuZ2V0SlEoKS5jeWNsZShcInJlc3VtZVwiKTtcbiAqIGBgYFxuICpcbiAqIEBpbnRlcmZhY2Uge1ByaW1lRmFjZXMud2lkZ2V0LkltYWdlU3dpdGNoQ2ZnfSBjZmcgVGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSB7QGxpbmsgIEltYWdlU3dpdGNofCBJbWFnZVN3aXRjaCB3aWRnZXR9LlxuICogWW91IGNhbiBhY2Nlc3MgdGhpcyBjb25maWd1cmF0aW9uIHZpYSB7QGxpbmsgUHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldC5jZmd8QmFzZVdpZGdldC5jZmd9LiBQbGVhc2Ugbm90ZSB0aGF0IHRoaXNcbiAqIGNvbmZpZ3VyYXRpb24gaXMgdXN1YWxseSBtZWFudCB0byBiZSByZWFkLW9ubHkgYW5kIHNob3VsZCBub3QgYmUgbW9kaWZpZWQuXG4gKiBAZXh0ZW5kcyB7UHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldENmZ30gY2ZnXG4gKiBAZXh0ZW5kcyB7SlF1ZXJ5Q3ljbGUuQ29uZmlndXJhdGlvbn0gY2ZnXG4gKi9cbmV4cG9ydCBjbGFzcyBJbWFnZVN3aXRjaCBleHRlbmRzIEJhc2VXaWRnZXQge1xuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMuUGFydGlhbFdpZGdldENmZzxUQ2ZnPn0gY2ZnXG4gICAgICovXG4gICAgaW5pdChjZmcpIHtcbiAgICAgICAgc3VwZXIuaW5pdChjZmcpO1xuXG4gICAgICAgIHRoaXMuanEuY3ljbGUodGhpcy5jZmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyBzbGlkZXNob3cgbW9kZS5cbiAgICAgKi9cbiAgICByZXN1bWVTbGlkZXNob3coKSB7XG4gICAgICAgIHRoaXMuanEuY3ljbGUoJ3Jlc3VtZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3BzIHNsaWRlc2hvdyBtb2RlLlxuICAgICAqL1xuICAgIHN0b3BTbGlkZXNob3coKSB7XG4gICAgICAgIHRoaXMuanEuY3ljbGUoJ3N0b3AnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wcyBvciBzdGFydHMgc2xpZGVzaG93IG1vZGUuXG4gICAgICovXG4gICAgdG9nZ2xlU2xpZGVzaG93KCkge1xuICAgICAgICB0aGlzLmpxLmN5Y2xlKCd0b2dnbGUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXVzZXMgc2xpZGVzaG93IG1vZGUuXG4gICAgICovXG4gICAgcGF1c2VTbGlkZXNob3coKSB7XG4gICAgICAgIHRoaXMuanEuY3ljbGUoJ3BhdXNlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3dpdGNoZXMgdG8gdGhlIG5leHQgaW1hZ2UuXG4gICAgICovXG4gICAgbmV4dCgpIHtcbiAgICAgICAgdGhpcy5qcS5jeWNsZSgnbmV4dCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN3aXRjaGVzIHRvIHRoZSBwcmV2aW91cyBpbWFnZS5cbiAgICAgKi9cbiAgICBwcmV2aW91cygpIHtcbiAgICAgICAgdGhpcy5qcS5jeWNsZSgncHJldicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN3aXRjaGVzIHRvIHRoZSBpbWFnZSB3aXRoIGdpdmVuIGluZGV4LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAwLWJhc2VkIGluZGV4IG9mIHRoZSBpbWFnZSB0byBzd2l0Y2ggdG8uXG4gICAgICovXG4gICAgc3dpdGNoVG8oaW5kZXgpIHtcbiAgICAgICAgdGhpcy5qcS5jeWNsZShpbmRleCk7XG4gICAgfVxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7OztDQVNFLFNBQVMsR0FBRztBQUVkLE1BQUksTUFBTTtBQUdWLE1BQUksRUFBRSxXQUFXLFFBQVc7QUFDM0IsTUFBRSxVQUFVO0FBQUEsTUFDWCxTQUFTLENBQUUsRUFBRSxRQUFRO0FBQUEsSUFDdEI7QUFBQSxFQUNEO0FBRUEsV0FBUyxNQUFNLEdBQUc7QUFDakIsUUFBSSxFQUFFLEdBQUcsTUFBTTtBQUNkLFVBQUksQ0FBQztBQUFBLEVBQ1A7QUFDQSxXQUFTLE1BQU07QUFDZCxRQUFJLE9BQU8sV0FBVyxPQUFPLFFBQVE7QUFDcEMsYUFBTyxRQUFRLElBQUksYUFBYSxNQUFNLFVBQVUsS0FBSyxLQUFLLFdBQVUsR0FBRyxDQUFDO0FBQUEsRUFDMUU7QUFBQztBQVlELElBQUUsR0FBRyxRQUFRLFNBQVMsU0FBUyxNQUFNO0FBQ3BDLFFBQUksSUFBSSxFQUFDLEdBQUcsS0FBSyxVQUFVLEdBQUcsS0FBSyxRQUFPO0FBRzFDLFFBQUksS0FBSyxXQUFXLEtBQUssV0FBVyxRQUFRO0FBQzNDLFVBQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxHQUFHO0FBQ3RCLFlBQUksa0NBQWtDO0FBQ3RDLFVBQUUsV0FBVztBQUNaLFlBQUUsRUFBRSxHQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sU0FBUSxJQUFJO0FBQUEsUUFDOUIsQ0FBQztBQUNELGVBQU87QUFBQSxNQUNSO0FBRUEsVUFBSSxrREFBa0QsRUFBRSxVQUFVLEtBQUssbUJBQW1CO0FBQzFGLGFBQU87QUFBQSxJQUNSO0FBR0EsV0FBTyxLQUFLLEtBQUssV0FBVztBQUMzQixV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LEVBQUM7QUFBQSxFQUMxQjtBQUVBLEdBQUcsTUFBTTs7O0FDN3hDRixJQUFNLGNBQU4sY0FBMEIsV0FBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU94QyxLQUFLLEtBQUs7QUFDTixVQUFNLEtBQUssR0FBRztBQUVkLFNBQUssR0FBRyxNQUFNLEtBQUssR0FBRztBQUFBLEVBQzFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxrQkFBa0I7QUFDZCxTQUFLLEdBQUcsTUFBTSxRQUFRO0FBQUEsRUFDMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLGdCQUFnQjtBQUNaLFNBQUssR0FBRyxNQUFNLE1BQU07QUFBQSxFQUN4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0Esa0JBQWtCO0FBQ2QsU0FBSyxHQUFHLE1BQU0sUUFBUTtBQUFBLEVBQzFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLQSxpQkFBaUI7QUFDYixTQUFLLEdBQUcsTUFBTSxPQUFPO0FBQUEsRUFDekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLE9BQU87QUFDSCxTQUFLLEdBQUcsTUFBTSxNQUFNO0FBQUEsRUFDeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLFdBQVc7QUFDUCxTQUFLLEdBQUcsTUFBTSxNQUFNO0FBQUEsRUFDeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsU0FBUyxPQUFPO0FBQ1osU0FBSyxHQUFHLE1BQU0sS0FBSztBQUFBLEVBQ3ZCO0FBQ0o7IiwKICAibmFtZXMiOiBbIiRzbGlkZXMiLCAiYXJnMiIsICJjb250IiwgIm9wdGlvbnMiLCAiaSIsICJwIiwgIm9wdHMiXQp9Cg==

import {
  DeferredWidget
} from "./chunk-HGD6GSK5.js";
import "./chunk-YRJTWU7C.js";

// src/galleria/0-galleria.js
$.widget("prime.galleria", {
  options: {
    id: null,
    selector: null,
    value: null,
    style: null,
    styleClass: null,
    activeIndex: 0,
    fullScreen: false,
    closeIcon: "pi pi-times",
    numVisible: 3,
    responsiveOptions: null,
    showThumbnails: true,
    showIndicators: false,
    showIndicatorsOnItem: false,
    showCaption: false,
    showItemNavigators: false,
    showThumbnailNavigators: true,
    showItemNavigatorsOnHover: false,
    changeItemOnIndicatorHover: false,
    circular: false,
    autoPlay: false,
    transitionInterval: 4e3,
    thumbnailsPosition: "bottom",
    verticalViewPortHeight: "450px",
    indicatorsPosition: "bottom",
    onItemChange: null,
    onShow: null,
    onHide: null
  },
  _create: function() {
    this.container = this.element;
    this.content = this.container.children(".ui-galleria-content");
    this.itemsContainer = this.content.children(".ui-galleria-items");
    this.captionContainer = this.content.children(".ui-galleria-caption-items");
    this.thumbnailContainer = this.content.children(".ui-galleria-thumbnail-items");
    this.items = this.itemsContainer.children(".ui-galleria-item");
    if (this.options.fullScreen) {
      this.container.css("display", "none");
    }
    if (this.items.length > 0) {
      this._setInitValues();
      this._render();
      this.mask = this.container.parent(".ui-galleria-mask");
      this.itemWidget = this.itemsContainer.data("prime-galleriaItem");
      this.thumbnailWidget = this.thumbnailContainer.data("prime-galleriaThumbnail");
      this.transition = PrimeFaces.utils.registerCSSTransition(this.container, "ui-galleria");
      this._bindEvents();
      this.mounted();
    }
  },
  _setInitValues: function() {
    this.state = {
      visible: false,
      slideShowActive: false,
      activeIndex: this.options.activeIndex
    };
    this.prevState = Object.assign({}, this.state);
    this.prevOptions = this.options;
  },
  setState: function(newState, callback) {
    var $this = this;
    var isUpdated = false;
    Object.keys(newState).forEach(function(key) {
      if ($this.state[key] !== newState[key]) {
        $this.prevState[key] = $this.state[key];
        $this.state[key] = newState[key];
        isUpdated = true;
      }
    });
    if (isUpdated) {
      this.updated();
      callback && callback();
    }
  },
  onActiveIndexChange: function(event) {
    var $this = this;
    this.setState({
      activeIndex: event.index
    }, function() {
      if ($this.options.onItemChange) {
        $this.options.onItemChange(event);
      }
    });
  },
  show: function() {
    var $this = this;
    this.setState({ visible: true }, function() {
      if ($this.transition) {
        $this.transition.show({
          onEnter: function() {
            $(document.body).addClass("ui-overflow-hidden");
          },
          onEntering: function() {
            $this.mask.addClass("ui-widget-overlay").css("z-index", PrimeFaces.nextZindex());
          },
          onEntered: function() {
            if ($this.options.onShow) {
              $this.options.onShow();
            }
          }
        });
      }
    });
  },
  hide: function() {
    var $this = this;
    this.setState({ visible: false }, function() {
      if ($this.transition) {
        $this.transition.hide({
          onExit: function() {
            $(document.body).removeClass("ui-overflow-hidden");
            $this.mask.addClass("ui-galleria-mask-leave");
          },
          onExited: function() {
            $this.mask.removeClass("ui-galleria-mask-leave ui-widget-overlay").css("z-index", "");
            if ($this.options.onHide) {
              $this.options.onHide();
            }
          }
        });
      }
    });
  },
  next: function() {
    var nextActiveIndex = this.state.activeIndex === this.items.length - 1 ? this.options.circular ? 0 : this.state.activeIndex : this.state.activeIndex + 1;
    this.setState({
      activeIndex: nextActiveIndex
    });
  },
  prev: function() {
    var prevActiveIndex = this.state.activeIndex === 0 ? this.options.circular ? this.items.length - 1 : this.state.activeIndex : this.state.activeIndex - 1;
    this.setState({
      activeIndex: prevActiveIndex
    });
  },
  isAutoPlayActive: function() {
    return this.state.slideShowActive;
  },
  startSlideShow: function() {
    var $this = this;
    this.interval = setInterval(function() {
      var activeIndex = $this.options.circular && $this.items.length - 1 === $this.state.activeIndex ? 0 : $this.state.activeIndex + 1;
      $this.onActiveIndexChange({ index: activeIndex });
    }, this.options.transitionInterval);
    this.setState({ slideShowActive: true });
  },
  stopSlideShow: function() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.setState({ slideShowActive: false });
  },
  getPositionStyleClass: function(preClassName, position) {
    var positions = ["top", "left", "bottom", "right"];
    var pos = positions.filter(function(item) {
      return item === position;
    })[0];
    return pos ? preClassName + "-" + pos : "";
  },
  isVertical: function() {
    return this.options.thumbnailsPosition === "left" || this.options.thumbnailsPosition === "right";
  },
  mounted: function() {
    if (this.isVertical()) {
      this.content.css("height", this.options.verticalViewPortHeight);
    }
    if (this.options.autoPlay) {
      this.startSlideShow();
    }
  },
  updated: function() {
    this.itemWidget.option(this.state);
    if (this.thumbnailWidget) {
      this.thumbnailWidget.option(this.state);
    }
    if (this.state.visible)
      this.mask.addClass("ui-galleria-visible");
    else
      this.mask.removeClass("ui-galleria-visible");
  },
  _destroy: function() {
    $(document.body).removeClass("ui-overflow-hidden");
    if (this.state && this.state.slideShowActive) {
      this.stopSlideShow();
    }
  },
  _bindEvents: function() {
    var $this = this;
    this.container.children(".ui-galleria-close").off("click.galleria").on("click.galleria", this.hide.bind($this));
  },
  _renderCloseButton: function() {
    if (this.options.fullScreen) {
      return '<button type="button" class="ui-galleria-close ui-corner-all ui-galleria-link" aria-label="' + PrimeFaces.getAriaLabel("close") + '"><span class="ui-button-icon-left ui-galleria-close-icon ' + this.options.closeIcon + '"></span></button>';
    }
  },
  _renderItems: function() {
    this.itemsContainer.galleriaItem({
      circular: this.options.circular,
      isVertical: this.isVertical(),
      showCaption: this.options.showCaption,
      showIndicators: this.options.showIndicators,
      showItemNavigators: this.options.showItemNavigators,
      changeItemOnIndicatorHover: this.options.changeItemOnIndicatorHover,
      autoPlay: this.options.autoPlay,
      slideShowActive: this.state.slideShowActive,
      activeIndex: this.state.activeIndex,
      onActiveIndexChange: this.onActiveIndexChange.bind(this),
      stopSlideShow: this.stopSlideShow.bind(this)
    });
  },
  _renderThumbnails: function() {
    this.thumbnailContainer.galleriaThumbnail({
      id: this.options.id,
      selector: this.options.selector,
      showThumbnails: this.options.showThumbnails,
      numVisible: this.options.numVisible,
      responsiveOptions: this.options.responsiveOptions,
      circular: this.options.circular,
      isVertical: this.isVertical(),
      showThumbnailNavigators: this.options.showThumbnailNavigators,
      slideShowActive: this.state.slideShowActive,
      activeIndex: this.state.activeIndex,
      onActiveIndexChange: this.onActiveIndexChange.bind(this),
      stopSlideShow: this.stopSlideShow.bind(this)
    });
  },
  _renderElement: function() {
    var thumbnailsPosStyleClass = this.options.showThumbnails && this.getPositionStyleClass("ui-galleria-thumbnails", this.options.thumbnailsPosition);
    var indicatorPosStyleClass = this.options.showIndicators && this.getPositionStyleClass("ui-galleria-indicators", this.options.indicatorsPosition);
    var galleriaStyleClass = PrimeFaces.utils.styleClass(this.options.styleClass, {
      "ui-galleria-fullscreen": this.options.fullScreen,
      "ui-galleria-indicator-onitem": this.options.showIndicatorsOnItem,
      "ui-galleria-item-nav-onhover": this.options.showItemNavigatorsOnHover && !this.options.fullScreen
    }, thumbnailsPosStyleClass, indicatorPosStyleClass);
    this.container.addClass(galleriaStyleClass);
    if (this.options.style) this.container.attr("style", this.options.style);
    this.closeButton = this._renderCloseButton();
    this.container.prepend(this.closeButton);
    this._renderThumbnails();
    this._renderItems();
    return this.container;
  },
  _render: function() {
    var element = this._renderElement();
    if (this.options.fullScreen) {
      element.unwrap(".ui-galleria-mask").wrap('<div class="ui-galleria-mask"></div>');
    }
  }
});

// src/galleria/0-galleriaitem.js
$.widget("prime.galleriaItem", {
  options: {
    id: null,
    circular: false,
    isVertical: false,
    showCaption: false,
    showIndicators: false,
    showItemNavigators: false,
    changeItemOnIndicatorHover: false,
    autoPlay: false,
    slideShowActive: false,
    activeIndex: 0,
    onActiveIndexChange: null,
    stopSlideShow: null
  },
  _create: function() {
    this.container = this.element;
    this.captionContainer = this.container.nextAll(".ui-galleria-caption-items");
    this.indicatorContainer = this.container.nextAll(".ui-galleria-indicators");
    this.indicators = this.indicatorContainer.children(".ui-galleria-indicator");
    this.items = this.container.children(".ui-galleria-item");
    this._setInitValues();
    this._render();
    this.wrapper = this.container.closest(".ui-galleria-item-wrapper");
    this.containerInWrapper = this.wrapper.children(".ui-galleria-item-container");
    this.navBackwardBtn = this.containerInWrapper.children(".ui-galleria-item-prev");
    this.navBackwardBtn.attr("aria-label", PrimeFaces.getAriaLabel("previous"));
    this.navForwardBtn = this.containerInWrapper.children(".ui-galleria-item-next");
    this.navForwardBtn.attr("aria-label", PrimeFaces.getAriaLabel("next"));
    if (this.indicatorContainer.length === 0) {
      this.indicators = this.wrapper.find("> .ui-galleria-indicators > .ui-galleria-indicator");
    }
    this.indicators.each(function(index, item) {
      var indicator = $(item).find("button");
      indicator.attr("aria-label", PrimeFaces.getAriaLabel("pageLabel").replace("{page}", index + 1));
    });
    this._bindEvents();
    this.mounted();
  },
  _setInitValues: function() {
    this.prevOptions = this.options;
  },
  next: function() {
    var nextItemIndex = this.options.activeIndex + 1;
    this.options.onActiveIndexChange({
      index: this.options.circular && this.items.length - 1 === this.options.activeIndex ? 0 : nextItemIndex
    });
  },
  prev: function() {
    var prevItemIndex = this.options.activeIndex !== 0 ? this.options.activeIndex - 1 : 0;
    this.options.onActiveIndexChange({
      index: this.options.circular && this.options.activeIndex === 0 ? this.items.length - 1 : prevItemIndex
    });
  },
  stopSlideShow: function() {
    if (this.options.slideShowActive && this.options.stopSlideShow) {
      this.options.stopSlideShow();
    }
  },
  navBackward: function(e) {
    this.stopSlideShow();
    this.prev();
    e.preventDefault();
  },
  navForward: function(e) {
    this.stopSlideShow();
    this.next();
    e.preventDefault();
  },
  onIndicatorClick: function(e) {
    var index = $(e.currentTarget).index();
    this.stopSlideShow();
    this.options.onActiveIndexChange({
      index
    });
  },
  onIndicatorMouseEnter: function(e) {
    if (this.options.changeItemOnIndicatorHover) {
      var index = $(e.currentTarget).index();
      this.stopSlideShow();
      this.options.onActiveIndexChange({
        index
      });
    }
  },
  onIndicatorKeyDown: function(e) {
    if (e.key === "Enter") {
      var index = $(e.currentTarget).index();
      this.stopSlideShow();
      this.options.onActiveIndexChange({
        index
      });
    }
  },
  mounted: function() {
    this._updateUI();
  },
  updated: function(prevOptions) {
    if (prevOptions.activeIndex !== this.options.activeIndex) {
      this._updateUI();
    }
  },
  _setOption: function(key, value) {
    this._super(key, value);
    this.updated(this.prevOptions);
  },
  _setOptions: function(options) {
    var $this = this;
    this.prevOptions = Object.assign({}, this.options);
    $.each(options, function(key, value) {
      $this._setOption(key, value);
    });
    this.prevOptions = options;
  },
  _updateUI: function() {
    var transform = this.options.isVertical ? "translate3d(0, " + this.options.activeIndex * -100 + "%, 0)" : "translate3d(" + this.options.activeIndex * -100 + "%, 0, 0)";
    var transition = "transform 500ms ease 0s";
    this.container.css({ "transform": transform, "transition": transition });
    this.captionContainer.css({ "transform": transform, "transition": transition });
    if (this.options.showItemNavigators) {
      var isNavBackwardBtnDisabled = !this.options.circular && this.options.activeIndex === 0;
      var isNavForwardBtnDisabled = !this.options.circular && this.options.activeIndex === this.items.length - 1;
      var toggleDisabled = function(el, disabled) {
        if (disabled)
          el.attr("disabled", "disabled").addClass("ui-state-disabled");
        else
          el.removeAttr("disabled").removeClass("ui-state-disabled");
      };
      toggleDisabled(this.navBackwardBtn, isNavBackwardBtnDisabled);
      toggleDisabled(this.navForwardBtn, isNavForwardBtnDisabled);
    }
    if (this.options.showIndicators) {
      this.indicators.removeClass("ui-state-highlight");
      for (var index = 0; index < this.indicators.length; index++) {
        if (this.options.activeIndex === index) {
          var indicator = this.indicators.eq(index);
          indicator.addClass("ui-state-highlight");
          break;
        }
      }
    }
  },
  _bindEvents: function() {
    var $this = this;
    if (this.options.showItemNavigators) {
      this.navBackwardBtn.off("click.galleria-item-nav").on("click.galleria-item-nav", this.navBackward.bind($this));
      this.navForwardBtn.off("click.galleria-item-nav").on("click.galleria-item-nav", this.navForward.bind($this));
    }
    this.indicators.off("click.galleria-indicator mouseenter.galleria-indicator keydown.galleria-indicator").on("click.galleria-indicator", this.onIndicatorClick.bind($this)).on("mouseenter.galleria-indicator", this.onIndicatorMouseEnter.bind($this)).on("keydown.galleria-indicator", this.onIndicatorKeyDown.bind($this));
  },
  _renderBackwardNavigator: function() {
    if (this.options.showItemNavigators) {
      return '<button type="button" class="ui-galleria-item-prev ui-galleria-item-nav ui-corner-all ui-galleria-link"><span class="ui-galleria-item-prev-icon ui-icon ui-icon-circle-triangle-w"></span></button>';
    }
    return "";
  },
  _renderForwardNavigator: function() {
    if (this.options.showItemNavigators) {
      return '<button type="button" class="ui-galleria-item-next ui-galleria-item-nav ui-corner-all ui-galleria-link"><span class="ui-galleria-item-next-icon ui-icon ui-icon-circle-triangle-e"></span></button>';
    }
    return "";
  },
  _renderCaption: function() {
    if (this.options.showCaption) {
      this.captionContainer.show();
    }
    return this.captionContainer;
  },
  _renderIndicator: function() {
    return '<li class="ui-galleria-indicator" tabindex="0"><button type="button" tabindex="-1" class="ui-galleria-link"></button></li>';
  },
  _renderIndicators: function() {
    if (this.options.showIndicators) {
      var indicators = "";
      for (var i = 0; i < this.items.length; i++) {
        indicators += this._renderIndicator();
      }
      return '<ul class="ui-galleria-indicators">' + indicators + "</ul>";
    }
    return "";
  },
  _render: function() {
    var backwardNavigator = this._renderBackwardNavigator();
    var forwardNavigator = this._renderForwardNavigator();
    var caption = this._renderCaption();
    var indicators = this.indicatorContainer.length ? this.indicatorContainer : this._renderIndicators();
    this.container.wrap(
      '<div class="ui-galleria-item-wrapper"><div class="ui-galleria-item-container"></div></div>'
    );
    this.container.before(backwardNavigator);
    this.container.after(forwardNavigator, caption);
    this.container.parent().after(indicators);
  }
});

// src/galleria/0-galleriathumbnail.js
$.widget("prime.galleriaThumbnail", {
  options: {
    id: null,
    selector: null,
    showThumbnails: true,
    numVisible: 3,
    responsiveOptions: null,
    circular: false,
    isVertical: false,
    showThumbnailNavigators: true,
    slideShowActive: false,
    activeIndex: 0,
    onActiveIndexChange: null,
    stopSlideShow: null
  },
  _create: function() {
    this.container = this.element;
    if (this.options.showThumbnails) {
      this.thumbnailItems = this.container.children(".ui-galleria-thumbnail-item");
      this._setInitValues();
      this._render();
      this.wrapper = this.container.closest(".ui-galleria-thumbnail-wrapper");
      this.containerInWrapper = this.wrapper.children(".ui-galleria-thumbnail-container");
      this.navBackwardBtn = this.containerInWrapper.children(".ui-galleria-thumbnail-prev");
      this.navForwardBtn = this.containerInWrapper.children(".ui-galleria-thumbnail-next");
      this._bindEvents();
      this.mounted();
    } else {
      this.container.hide();
    }
  },
  _setInitValues: function() {
    this.state = {
      numVisible: this.options.numVisible,
      totalShiftedItems: 0
    };
    this.prevState = Object.assign({}, this.state);
    this.prevOptions = this.options;
  },
  setState: function(newState, callback) {
    var $this = this;
    var isUpdated = false;
    Object.keys(newState).forEach(function(key) {
      if ($this.state[key] !== newState[key]) {
        $this.prevState[key] = $this.state[key];
        $this.state[key] = newState[key];
        isUpdated = true;
      }
    });
    if (isUpdated) {
      this.updated(this.options, this.prevState);
      callback && callback();
    }
  },
  step: function(dir) {
    var totalShiftedItems = this.state.totalShiftedItems + dir;
    if (dir < 0 && -1 * totalShiftedItems + this.state.numVisible > this.thumbnailItems.length - 1) {
      totalShiftedItems = this.state.numVisible - this.thumbnailItems.length;
    } else if (dir > 0 && totalShiftedItems > 0) {
      totalShiftedItems = 0;
    }
    if (this.options.circular) {
      if (dir < 0 && this.thumbnailItems.length - 1 === this.options.activeIndex) {
        totalShiftedItems = 0;
      } else if (dir > 0 && this.options.activeIndex === 0) {
        totalShiftedItems = this.state.numVisible - this.thumbnailItems.length;
      }
    }
    if (this.container) {
      var transform = this.options.isVertical ? "translate3d(0," + totalShiftedItems * (100 / this.state.numVisible) + "%, 0)" : "translate3d(" + totalShiftedItems * (100 / this.state.numVisible) + "%, 0, 0)";
      var transition = "transform 500ms ease 0s";
      this.container.removeClass("ui-items-hidden").css({ "transform": transform, "transition": transition });
    }
    this.setState({
      totalShiftedItems
    });
  },
  stopSlideShow: function() {
    if (this.options.slideShowActive && this.options.stopSlideShow) {
      this.options.stopSlideShow();
    }
  },
  getMedianIndex: function() {
    var index = Math.floor(this.state.numVisible / 2);
    return this.state.numVisible % 2 ? index : index - 1;
  },
  navBackward: function(e) {
    this.stopSlideShow();
    var prevItemIndex = this.options.activeIndex !== 0 ? this.options.activeIndex - 1 : 0;
    var diff = prevItemIndex + this.state.totalShiftedItems;
    if (this.state.numVisible - diff - 1 > this.getMedianIndex() && (-1 * this.state.totalShiftedItems !== 0 || this.options.circular)) {
      this.step(1);
    }
    this.options.onActiveIndexChange({
      index: this.options.circular && this.options.activeIndex === 0 ? this.thumbnailItems.length - 1 : prevItemIndex
    });
    e.preventDefault();
  },
  navForward: function(e) {
    this.stopSlideShow();
    var nextItemIndex = this.options.activeIndex + 1;
    if (nextItemIndex + this.state.totalShiftedItems > this.getMedianIndex() && (-1 * this.state.totalShiftedItems < this.getTotalPageNumber() - 1 || this.options.circular)) {
      this.step(-1);
    }
    this.options.onActiveIndexChange({
      index: this.options.circular && this.thumbnailItems.length - 1 === this.options.activeIndex ? 0 : nextItemIndex
    });
    e.preventDefault();
  },
  onItemClick: function(event) {
    this.stopSlideShow();
    var selectedItemIndex = $(event.currentTarget).index();
    if (selectedItemIndex !== this.options.activeIndex) {
      var diff = selectedItemIndex + this.state.totalShiftedItems;
      var dir = 0;
      if (selectedItemIndex < this.options.activeIndex) {
        dir = this.state.numVisible - diff - 1 - this.getMedianIndex();
        if (dir > 0 && -1 * this.state.totalShiftedItems !== 0) {
          this.step(dir);
        }
      } else {
        dir = this.getMedianIndex() - diff;
        if (dir < 0 && -1 * this.state.totalShiftedItems < this.getTotalPageNumber() - 1) {
          this.step(dir);
        }
      }
      this.options.onActiveIndexChange({
        index: selectedItemIndex
      });
    }
  },
  onTransitionEnd: function(e) {
    if (this.container && e.originalEvent && e.originalEvent.propertyName === "transform") {
      this.container.addClass("ui-items-hidden").css("transition", "");
    }
  },
  onTouchStart: function(e) {
    var touchobj = e.changedTouches[0];
    this.startPos = {
      x: touchobj.pageX,
      y: touchobj.pageY
    };
  },
  onTouchMove: function(e) {
    e.preventDefault();
  },
  onTouchEnd: function(e) {
    var touchobj = e.changedTouches[0];
    if (this.options.isVertical) {
      this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
    } else {
      this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
    }
  },
  changePageOnTouch: function(e, diff) {
    if (diff < 0) {
      this.navForward(e);
    } else {
      this.navBackward(e);
    }
  },
  getTotalPageNumber: function() {
    return this.thumbnailItems.length > this.state.numVisible ? this.thumbnailItems.length - this.state.numVisible + 1 : 0;
  },
  createStyle: function() {
    if (!this.thumbnailsStyle) {
      this.thumbnailsStyle = document.createElement("style");
      document.body.appendChild(this.thumbnailsStyle);
    }
    var galleriaSelector = this.options.selector ? this.options.selector : "#" + this.options.id;
    var innerHTML = galleriaSelector + " .ui-galleria-thumbnail-items .ui-galleria-thumbnail-item { flex: 1 0 " + 100 / this.state.numVisible + "%; }";
    if (this.options.responsiveOptions) {
      this.responsiveOptions = Array.from(this.options.responsiveOptions);
      this.responsiveOptions.sort(function(data1, data2) {
        var value1 = data1.breakpoint;
        var value2 = data2.breakpoint;
        var result = null;
        if (value1 == null && value2 != null)
          result = -1;
        else if (value1 != null && value2 == null)
          result = 1;
        else if (value1 == null && value2 == null)
          result = 0;
        else if (typeof value1 === "string" && typeof value2 === "string")
          result = value1.localeCompare(value2, void 0, { numeric: true });
        else
          result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return -1 * result;
      });
      for (var i = 0; i < this.responsiveOptions.length; i++) {
        var res = this.responsiveOptions[i];
        innerHTML += "@media screen and (max-width:" + res.breakpoint + ") { " + galleriaSelector + " .ui-galleria-thumbnail-items .ui-galleria-thumbnail-item { flex: 1 0 " + 100 / res.numVisible + "%; }}";
      }
    }
    this.thumbnailsStyle.innerHTML = innerHTML;
  },
  calculatePosition: function() {
    if (this.container && this.responsiveOptions) {
      var windowWidth = window.innerWidth;
      var matchedResponsiveData = {
        numVisible: this.options.numVisible
      };
      for (var i = 0; i < this.responsiveOptions.length; i++) {
        var res = this.responsiveOptions[i];
        if (parseInt(res.breakpoint, 10) >= windowWidth) {
          matchedResponsiveData = res;
        }
      }
      if (this.state.numVisible !== matchedResponsiveData.numVisible) {
        this.setState({
          numVisible: matchedResponsiveData.numVisible
        });
      }
    }
  },
  bindDocumentListeners: function() {
    if (!this.documentResizeListener) {
      var $this = this;
      this.documentResizeListener = function() {
        $this.calculatePosition();
      };
      window.addEventListener("resize", this.documentResizeListener);
    }
  },
  unbindDocumentListeners: function() {
    if (this.documentResizeListener) {
      window.removeEventListener("resize", this.documentResizeListener);
      this.documentResizeListener = null;
    }
  },
  mounted: function() {
    this.createStyle();
    this.calculatePosition();
    if (this.options.responsiveOptions) {
      this.bindDocumentListeners();
    }
    this._updateUI();
  },
  updated: function(prevOptions, prevState) {
    var totalShiftedItems = this.state.totalShiftedItems;
    if (prevState.numVisible !== this.state.numVisible || prevOptions.activeIndex !== this.options.activeIndex) {
      if (this.options.activeIndex <= this.getMedianIndex() || this.thumbnailItems.length <= this.state.numVisible) {
        totalShiftedItems = 0;
      } else if (this.thumbnailItems.length - this.state.numVisible + this.getMedianIndex() < this.options.activeIndex) {
        totalShiftedItems = this.state.numVisible - this.thumbnailItems.length;
      } else if (this.thumbnailItems.length - this.state.numVisible < this.options.activeIndex && this.state.numVisible % 2 === 0) {
        totalShiftedItems = this.options.activeIndex * -1 + this.getMedianIndex() + 1;
      } else {
        totalShiftedItems = this.options.activeIndex * -1 + this.getMedianIndex();
      }
      if (totalShiftedItems !== this.state.totalShiftedItems) {
        this.setState({
          totalShiftedItems
        });
      }
      var transform = this.options.isVertical ? "translate3d(0, " + totalShiftedItems * (100 / this.state.numVisible) + "%, 0)" : "translate3d(" + totalShiftedItems * (100 / this.state.numVisible) + "%, 0, 0)";
      this.container.css("transform", transform);
      if (prevOptions.activeIndex !== this.options.activeIndex) {
        this.container.removeClass("ui-items-hidden").css("transition", "transform 500ms ease 0s");
      }
      this._updateUI();
    }
  },
  _setOption: function(key, value) {
    this._super(key, value);
    this.updated(this.prevOptions, this.state);
  },
  _setOptions: function(options) {
    if (this.options.showThumbnails) {
      var $this = this;
      this.prevOptions = Object.assign({}, this.options);
      $.each(options, function(key, value) {
        $this._setOption(key, value);
      });
      this.prevOptions = options;
    }
  },
  _updateUI: function() {
    var firstIndex = this.state.totalShiftedItems * -1;
    var lastIndex = firstIndex + this.state.numVisible - 1;
    this.thumbnailItems.removeClass("ui-galleria-thumbnail-item-current ui-galleria-thumbnail-item-active ui-galleria-thumbnail-item-start ui-galleria-thumbnail-item-end");
    for (var index = 0; index < this.thumbnailItems.length; index++) {
      var item = this.thumbnailItems.eq(index);
      var active = firstIndex <= index && lastIndex >= index;
      var start = firstIndex === index;
      var end = lastIndex === index;
      var current = this.options.activeIndex === index;
      var itemClass = PrimeFaces.utils.styleClass({
        "ui-galleria-thumbnail-item-current": current,
        "ui-galleria-thumbnail-item-active": active,
        "ui-galleria-thumbnail-item-start": start,
        "ui-galleria-thumbnail-item-end": end
      });
      item.addClass(itemClass).children(".ui-galleria-thumbnail-item-content").attr("tabindex", active ? "0" : "");
    }
    if (this.options.showThumbnailNavigators) {
      var isNavBackwardBtnDisabled = !this.options.circular && this.options.activeIndex === 0 || this.thumbnailItems.length <= this.state.numVisible;
      var isNavForwardBtnDisabled = !this.options.circular && this.options.activeIndex === this.thumbnailItems.length - 1 || this.thumbnailItems.length <= this.state.numVisible;
      var toggleDisabled = function(el, disabled) {
        if (disabled)
          el.attr("disabled", "disabled").addClass("ui-state-disabled");
        else
          el.removeAttr("disabled").removeClass("ui-state-disabled");
      };
      toggleDisabled(this.navBackwardBtn, isNavBackwardBtnDisabled);
      toggleDisabled(this.navForwardBtn, isNavForwardBtnDisabled);
    }
  },
  _destroy: function() {
    if (this.options.responsiveOptions) {
      this.unbindDocumentListeners();
    }
  },
  _bindEvents: function() {
    var $this = this;
    if (this.options.showThumbnailNavigators) {
      this.navBackwardBtn.off("click.galleria-thumbnail-nav").on("click.galleria-thumbnail-nav", this.navBackward.bind($this));
      this.navForwardBtn.off("click.galleria-thumbnail-nav").on("click.galleria-thumbnail-nav", this.navForward.bind($this));
    }
    this.container.off("transitionend.galleria-thumbnail touchstart.galleria-thumbnail touchmove.galleria-thumbnail touchend.galleria-thumbnail").on("transitionend.galleria-thumbnail", this.onTransitionEnd.bind($this)).on("touchstart.galleria-thumbnail", this.onTouchStart.bind($this)).on("touchmove.galleria-thumbnail", this.onTouchMove.bind($this)).on("touchend.galleria-thumbnail", this.onTouchEnd.bind($this));
    this.container.children().off("click.galleria-thumbnail-item keydown.galleria-thumbnail-item").on("click.galleria-thumbnail-item", this.onItemClick.bind($this)).on("keydown.galleria-thumbnail-item", function(e) {
      if (e.key === "Enter") {
        $this.onItemClick(e);
      }
    });
  },
  _renderBackwardNavigator: function() {
    if (this.options.showThumbnailNavigators) {
      var iconStyleClass = PrimeFaces.utils.styleClass("ui-galleria-thumbnail-prev-icon ui-icon", {
        "ui-icon-circle-triangle-w": !this.options.isVertical,
        "ui-icon-circle-triangle-n": this.options.isVertical
      });
      return '<button type="button" class="ui-galleria-thumbnail-prev ui-corner-all ui-galleria-link"><span class="' + iconStyleClass + '"></span></button>';
    }
    return "";
  },
  _renderForwardNavigator: function() {
    if (this.options.showThumbnailNavigators) {
      var iconStyleClass = PrimeFaces.utils.styleClass("ui-galleria-thumbnail-next-icon ui-icon", {
        "ui-icon-circle-triangle-e": !this.options.isVertical,
        "ui-icon-circle-triangle-s": this.options.isVertical
      });
      return '<button type="button" class="ui-galleria-thumbnail-next ui-corner-all ui-galleria-link"><span class="' + iconStyleClass + '"></span></button>';
    }
    return "";
  },
  _renderContent: function() {
    var backwardNavigator = this._renderBackwardNavigator();
    var forwardNavigator = this._renderForwardNavigator();
    this.container.wrap(
      '<div class="ui-galleria-thumbnail-container"><div class="ui-galleria-thumbnail-items-container"></div></div>'
    );
    this.container.parent().before(backwardNavigator).after(forwardNavigator);
    return this.container.closest(".ui-galleria-thumbnail-container");
  },
  _render: function() {
    var content = this._renderContent();
    content.wrap('<div class="ui-galleria-thumbnail-wrapper"></div>');
  }
});

// src/galleria/1-galleria.js
var Galleria = class extends DeferredWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    this.cfg.selector = this.jqId;
    this.renderDeferred();
  }
  /**
   * @include
   * @override
   * @protected
   * @inheritdoc
   */
  _render() {
    this.primeGalleriaWidget = this.jq.galleria(this.cfg).data("prime-galleria");
  }
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  refresh(cfg) {
    if (this.primeGalleriaWidget) {
      this.primeGalleriaWidget.destroy();
    }
    super.refresh(cfg);
  }
  /**
   * @override
   * @inheritdoc
   */
  destroy() {
    super.destroy();
    if (this.primeGalleriaWidget) {
      this.primeGalleriaWidget.destroy();
    }
  }
  /**
   * Displays content in fullscreen mode. The index will correspond to the item to be shown, otherwise,
   * it will default to the last loaded image.
   * @param {number} [index] optional index of the item to show
   */
  show(index) {
    if (index !== void 0) {
      this.primeGalleriaWidget.setState({ activeIndex: index });
    }
    this.primeGalleriaWidget.show();
  }
  /**
   * Hides content on fullscreen mode.
   */
  hide() {
    this.primeGalleriaWidget.hide();
  }
  /**
   * Moves to the next content that comes after the currently shown content.
   */
  next() {
    this.primeGalleriaWidget.next();
  }
  /**
   * Moves to the previous content that comes before the currently shown content.
   */
  prev() {
    this.primeGalleriaWidget.prev();
  }
};
export {
  Galleria
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2dhbGxlcmlhLzAtZ2FsbGVyaWEuanMiLCAiLi4vc3JjL2dhbGxlcmlhLzAtZ2FsbGVyaWFpdGVtLmpzIiwgIi4uL3NyYy9nYWxsZXJpYS8wLWdhbGxlcmlhdGh1bWJuYWlsLmpzIiwgIi4uL3NyYy9nYWxsZXJpYS8xLWdhbGxlcmlhLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTk9URTogQWxsIHRoZSBkb2N1bWVudGF0aW9uIGFuZCBUeXBlU2NyaXB0IGRlY2xhcmF0aW9ucyBhcmUgaW4gMC1nYWxsZXJpYS5kLnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIFByaW1lIEdhbGxlcmlhIFdpZGdldFxuICovXG4kLndpZGdldChcInByaW1lLmdhbGxlcmlhXCIsIHtcblxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIHNlbGVjdG9yOiBudWxsLFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgc3R5bGU6IG51bGwsXG4gICAgICAgIHN0eWxlQ2xhc3M6IG51bGwsXG4gICAgICAgIGFjdGl2ZUluZGV4OiAwLFxuICAgICAgICBmdWxsU2NyZWVuOiBmYWxzZSxcbiAgICAgICAgY2xvc2VJY29uOiAncGkgcGktdGltZXMnLFxuICAgICAgICBudW1WaXNpYmxlOiAzLFxuICAgICAgICByZXNwb25zaXZlT3B0aW9uczogbnVsbCxcbiAgICAgICAgc2hvd1RodW1ibmFpbHM6IHRydWUsXG4gICAgICAgIHNob3dJbmRpY2F0b3JzOiBmYWxzZSxcbiAgICAgICAgc2hvd0luZGljYXRvcnNPbkl0ZW06IGZhbHNlLFxuICAgICAgICBzaG93Q2FwdGlvbjogZmFsc2UsXG4gICAgICAgIHNob3dJdGVtTmF2aWdhdG9yczogZmFsc2UsXG4gICAgICAgIHNob3dUaHVtYm5haWxOYXZpZ2F0b3JzOiB0cnVlLFxuICAgICAgICBzaG93SXRlbU5hdmlnYXRvcnNPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgY2hhbmdlSXRlbU9uSW5kaWNhdG9ySG92ZXI6IGZhbHNlLFxuICAgICAgICBjaXJjdWxhcjogZmFsc2UsXG4gICAgICAgIGF1dG9QbGF5OiBmYWxzZSxcbiAgICAgICAgdHJhbnNpdGlvbkludGVydmFsOiA0MDAwLFxuICAgICAgICB0aHVtYm5haWxzUG9zaXRpb246IFwiYm90dG9tXCIsXG4gICAgICAgIHZlcnRpY2FsVmlld1BvcnRIZWlnaHQ6IFwiNDUwcHhcIixcbiAgICAgICAgaW5kaWNhdG9yc1Bvc2l0aW9uOiBcImJvdHRvbVwiLFxuICAgICAgICBvbkl0ZW1DaGFuZ2U6IG51bGwsXG4gICAgICAgIG9uU2hvdzogbnVsbCxcbiAgICAgICAgb25IaWRlOiBudWxsXG4gICAgfSxcblxuICAgIF9jcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGFpbmVyLmNoaWxkcmVuKCcudWktZ2FsbGVyaWEtY29udGVudCcpO1xuICAgICAgICB0aGlzLml0ZW1zQ29udGFpbmVyID0gdGhpcy5jb250ZW50LmNoaWxkcmVuKCcudWktZ2FsbGVyaWEtaXRlbXMnKTtcbiAgICAgICAgdGhpcy5jYXB0aW9uQ29udGFpbmVyID0gdGhpcy5jb250ZW50LmNoaWxkcmVuKCcudWktZ2FsbGVyaWEtY2FwdGlvbi1pdGVtcycpO1xuICAgICAgICB0aGlzLnRodW1ibmFpbENvbnRhaW5lciA9IHRoaXMuY29udGVudC5jaGlsZHJlbignLnVpLWdhbGxlcmlhLXRodW1ibmFpbC1pdGVtcycpO1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtc0NvbnRhaW5lci5jaGlsZHJlbignLnVpLWdhbGxlcmlhLWl0ZW0nKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZnVsbFNjcmVlbikge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3NldEluaXRWYWx1ZXMoKTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcigpO1xuXG4gICAgICAgICAgICB0aGlzLm1hc2sgPSB0aGlzLmNvbnRhaW5lci5wYXJlbnQoJy51aS1nYWxsZXJpYS1tYXNrJyk7XG4gICAgICAgICAgICB0aGlzLml0ZW1XaWRnZXQgPSB0aGlzLml0ZW1zQ29udGFpbmVyLmRhdGEoJ3ByaW1lLWdhbGxlcmlhSXRlbScpO1xuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxXaWRnZXQgPSB0aGlzLnRodW1ibmFpbENvbnRhaW5lci5kYXRhKCdwcmltZS1nYWxsZXJpYVRodW1ibmFpbCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb24gPSBQcmltZUZhY2VzLnV0aWxzLnJlZ2lzdGVyQ1NTVHJhbnNpdGlvbih0aGlzLmNvbnRhaW5lciwgJ3VpLWdhbGxlcmlhJyk7XG5cbiAgICAgICAgICAgIHRoaXMuX2JpbmRFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMubW91bnRlZCgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9zZXRJbml0VmFsdWVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHNsaWRlU2hvd0FjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBhY3RpdmVJbmRleDogdGhpcy5vcHRpb25zLmFjdGl2ZUluZGV4XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5wcmV2U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlKTtcbiAgICAgICAgdGhpcy5wcmV2T3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICB9LFxuXG4gICAgc2V0U3RhdGU6IGZ1bmN0aW9uIChuZXdTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGlzVXBkYXRlZCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgT2JqZWN0LmtleXMobmV3U3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKCR0aGlzLnN0YXRlW2tleV0gIT09IG5ld1N0YXRlW2tleV0pIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5wcmV2U3RhdGVba2V5XSA9ICR0aGlzLnN0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgJHRoaXMuc3RhdGVba2V5XSA9IG5ld1N0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaXNVcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlzVXBkYXRlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVkKCk7XG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uQWN0aXZlSW5kZXhDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVJbmRleDogZXZlbnQuaW5kZXhcbiAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJHRoaXMub3B0aW9ucy5vbkl0ZW1DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5vcHRpb25zLm9uSXRlbUNoYW5nZShldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogdHJ1ZSB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJHRoaXMudHJhbnNpdGlvbikge1xuICAgICAgICAgICAgICAgICR0aGlzLnRyYW5zaXRpb24uc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIG9uRW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoJ3VpLW92ZXJmbG93LWhpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbkVudGVyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5tYXNrLmFkZENsYXNzKCd1aS13aWRnZXQtb3ZlcmxheScpLmNzcygnei1pbmRleCcsIFByaW1lRmFjZXMubmV4dFppbmRleCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb25FbnRlcmVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHRoaXMub3B0aW9ucy5vblNob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5vcHRpb25zLm9uU2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogZmFsc2UgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCR0aGlzLnRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAkdGhpcy50cmFuc2l0aW9uLmhpZGUoe1xuICAgICAgICAgICAgICAgICAgICBvbkV4aXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoJ3VpLW92ZXJmbG93LWhpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMubWFzay5hZGRDbGFzcygndWktZ2FsbGVyaWEtbWFzay1sZWF2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbkV4aXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMubWFzay5yZW1vdmVDbGFzcygndWktZ2FsbGVyaWEtbWFzay1sZWF2ZSB1aS13aWRnZXQtb3ZlcmxheScpLmNzcygnei1pbmRleCcsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCR0aGlzLm9wdGlvbnMub25IaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMub3B0aW9ucy5vbkhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFxuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5leHRBY3RpdmVJbmRleCA9ICh0aGlzLnN0YXRlLmFjdGl2ZUluZGV4ID09PSB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpID8gXG4gICAgICAgICAgICAodGhpcy5vcHRpb25zLmNpcmN1bGFyID8gMCA6IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXgpIDogdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCArIDE7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVJbmRleDogbmV4dEFjdGl2ZUluZGV4XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgXG4gICAgcHJldjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcHJldkFjdGl2ZUluZGV4ID0gKHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggPT09IDApID8gXG4gICAgICAgICAgICAodGhpcy5vcHRpb25zLmNpcmN1bGFyID8gdGhpcy5pdGVtcy5sZW5ndGggLSAxIDogdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCkgOiB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4IC0gMTtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4OiBwcmV2QWN0aXZlSW5kZXhcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGlzQXV0b1BsYXlBY3RpdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc2xpZGVTaG93QWN0aXZlO1xuICAgIH0sXG5cbiAgICBzdGFydFNsaWRlU2hvdzogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gKCR0aGlzLm9wdGlvbnMuY2lyY3VsYXIgJiYgKCR0aGlzLml0ZW1zLmxlbmd0aCAtIDEpID09PSAkdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCkgPyAwIDogKCR0aGlzLnN0YXRlLmFjdGl2ZUluZGV4ICsgMSk7XG4gICAgICAgICAgICAkdGhpcy5vbkFjdGl2ZUluZGV4Q2hhbmdlKHsgaW5kZXg6IGFjdGl2ZUluZGV4IH0pO1xuICAgICAgICB9LCB0aGlzLm9wdGlvbnMudHJhbnNpdGlvbkludGVydmFsKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2xpZGVTaG93QWN0aXZlOiB0cnVlIH0pO1xuICAgIH0sXG5cbiAgICBzdG9wU2xpZGVTaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmludGVydmFsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNsaWRlU2hvd0FjdGl2ZTogZmFsc2UgfSk7XG4gICAgfSxcblxuICAgIGdldFBvc2l0aW9uU3R5bGVDbGFzczogZnVuY3Rpb24gKHByZUNsYXNzTmFtZSwgcG9zaXRpb24pIHtcbiAgICAgICAgdmFyIHBvc2l0aW9ucyA9IFsndG9wJywgJ2xlZnQnLCAnYm90dG9tJywgJ3JpZ2h0J107XG4gICAgICAgIHZhciBwb3MgPSBwb3NpdGlvbnMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHsgcmV0dXJuIGl0ZW0gPT09IHBvc2l0aW9uOyB9KVswXTtcblxuICAgICAgICByZXR1cm4gcG9zID8gcHJlQ2xhc3NOYW1lICsgJy0nICsgcG9zIDogJyc7XG4gICAgfSxcblxuICAgIGlzVmVydGljYWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnRodW1ibmFpbHNQb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IHRoaXMub3B0aW9ucy50aHVtYm5haWxzUG9zaXRpb24gPT09ICdyaWdodCc7XG4gICAgfSxcblxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNWZXJ0aWNhbCgpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuY3NzKCdoZWlnaHQnLCB0aGlzLm9wdGlvbnMudmVydGljYWxWaWV3UG9ydEhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b1BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTbGlkZVNob3coKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXRlbVdpZGdldC5vcHRpb24odGhpcy5zdGF0ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMudGh1bWJuYWlsV2lkZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnRodW1ibmFpbFdpZGdldC5vcHRpb24odGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS52aXNpYmxlKSBcbiAgICAgICAgICAgIHRoaXMubWFzay5hZGRDbGFzcygndWktZ2FsbGVyaWEtdmlzaWJsZScpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLm1hc2sucmVtb3ZlQ2xhc3MoJ3VpLWdhbGxlcmlhLXZpc2libGUnKTtcbiAgICB9LFxuXG4gICAgX2Rlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5yZW1vdmVDbGFzcygndWktb3ZlcmZsb3ctaGlkZGVuJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAmJiB0aGlzLnN0YXRlLnNsaWRlU2hvd0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5zdG9wU2xpZGVTaG93KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2JpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jaGlsZHJlbignLnVpLWdhbGxlcmlhLWNsb3NlJykub2ZmKCdjbGljay5nYWxsZXJpYScpLm9uKCdjbGljay5nYWxsZXJpYScsIHRoaXMuaGlkZS5iaW5kKCR0aGlzKSk7XG4gICAgfSxcblxuICAgIF9yZW5kZXJDbG9zZUJ1dHRvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidWktZ2FsbGVyaWEtY2xvc2UgdWktY29ybmVyLWFsbCB1aS1nYWxsZXJpYS1saW5rXCIgYXJpYS1sYWJlbD1cIicrUHJpbWVGYWNlcy5nZXRBcmlhTGFiZWwoJ2Nsb3NlJykrJ1wiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ1aS1idXR0b24taWNvbi1sZWZ0IHVpLWdhbGxlcmlhLWNsb3NlLWljb24gJyArIHRoaXMub3B0aW9ucy5jbG9zZUljb24gKyAnXCI+PC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICc8L2J1dHRvbj4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9yZW5kZXJJdGVtczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaXRlbXNDb250YWluZXIuZ2FsbGVyaWFJdGVtKHsgXG4gICAgICAgICAgICBjaXJjdWxhcjogdGhpcy5vcHRpb25zLmNpcmN1bGFyLFxuICAgICAgICAgICAgaXNWZXJ0aWNhbDogdGhpcy5pc1ZlcnRpY2FsKCksXG4gICAgICAgICAgICBzaG93Q2FwdGlvbjogdGhpcy5vcHRpb25zLnNob3dDYXB0aW9uLFxuICAgICAgICAgICAgc2hvd0luZGljYXRvcnM6IHRoaXMub3B0aW9ucy5zaG93SW5kaWNhdG9ycyxcbiAgICAgICAgICAgIHNob3dJdGVtTmF2aWdhdG9yczogdGhpcy5vcHRpb25zLnNob3dJdGVtTmF2aWdhdG9ycyxcbiAgICAgICAgICAgIGNoYW5nZUl0ZW1PbkluZGljYXRvckhvdmVyOiB0aGlzLm9wdGlvbnMuY2hhbmdlSXRlbU9uSW5kaWNhdG9ySG92ZXIsXG4gICAgICAgICAgICBhdXRvUGxheTogdGhpcy5vcHRpb25zLmF1dG9QbGF5LFxuICAgICAgICAgICAgc2xpZGVTaG93QWN0aXZlOiB0aGlzLnN0YXRlLnNsaWRlU2hvd0FjdGl2ZSxcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4OiB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4LFxuICAgICAgICAgICAgb25BY3RpdmVJbmRleENoYW5nZTogdGhpcy5vbkFjdGl2ZUluZGV4Q2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgICAgICBzdG9wU2xpZGVTaG93OiB0aGlzLnN0b3BTbGlkZVNob3cuYmluZCh0aGlzKVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgX3JlbmRlclRodW1ibmFpbHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50aHVtYm5haWxDb250YWluZXIuZ2FsbGVyaWFUaHVtYm5haWwoe1xuICAgICAgICAgICAgaWQ6IHRoaXMub3B0aW9ucy5pZCxcbiAgICAgICAgICAgIHNlbGVjdG9yOiB0aGlzLm9wdGlvbnMuc2VsZWN0b3IsXG4gICAgICAgICAgICBzaG93VGh1bWJuYWlsczogdGhpcy5vcHRpb25zLnNob3dUaHVtYm5haWxzLFxuICAgICAgICAgICAgbnVtVmlzaWJsZTogdGhpcy5vcHRpb25zLm51bVZpc2libGUsXG4gICAgICAgICAgICByZXNwb25zaXZlT3B0aW9uczogdGhpcy5vcHRpb25zLnJlc3BvbnNpdmVPcHRpb25zLFxuICAgICAgICAgICAgY2lyY3VsYXI6IHRoaXMub3B0aW9ucy5jaXJjdWxhcixcbiAgICAgICAgICAgIGlzVmVydGljYWw6IHRoaXMuaXNWZXJ0aWNhbCgpLFxuICAgICAgICAgICAgc2hvd1RodW1ibmFpbE5hdmlnYXRvcnM6IHRoaXMub3B0aW9ucy5zaG93VGh1bWJuYWlsTmF2aWdhdG9ycyxcbiAgICAgICAgICAgIHNsaWRlU2hvd0FjdGl2ZTogdGhpcy5zdGF0ZS5zbGlkZVNob3dBY3RpdmUsXG4gICAgICAgICAgICBhY3RpdmVJbmRleDogdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCxcbiAgICAgICAgICAgIG9uQWN0aXZlSW5kZXhDaGFuZ2U6IHRoaXMub25BY3RpdmVJbmRleENoYW5nZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgc3RvcFNsaWRlU2hvdzogdGhpcy5zdG9wU2xpZGVTaG93LmJpbmQodGhpcylcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIF9yZW5kZXJFbGVtZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRodW1ibmFpbHNQb3NTdHlsZUNsYXNzID0gdGhpcy5vcHRpb25zLnNob3dUaHVtYm5haWxzICYmIHRoaXMuZ2V0UG9zaXRpb25TdHlsZUNsYXNzKCd1aS1nYWxsZXJpYS10aHVtYm5haWxzJywgdGhpcy5vcHRpb25zLnRodW1ibmFpbHNQb3NpdGlvbik7XG4gICAgICAgIHZhciBpbmRpY2F0b3JQb3NTdHlsZUNsYXNzID0gdGhpcy5vcHRpb25zLnNob3dJbmRpY2F0b3JzICYmIHRoaXMuZ2V0UG9zaXRpb25TdHlsZUNsYXNzKCd1aS1nYWxsZXJpYS1pbmRpY2F0b3JzJywgdGhpcy5vcHRpb25zLmluZGljYXRvcnNQb3NpdGlvbik7XG4gICAgICAgIHZhciBnYWxsZXJpYVN0eWxlQ2xhc3MgPSBQcmltZUZhY2VzLnV0aWxzLnN0eWxlQ2xhc3ModGhpcy5vcHRpb25zLnN0eWxlQ2xhc3MsIHtcbiAgICAgICAgICAgICd1aS1nYWxsZXJpYS1mdWxsc2NyZWVuJzogdGhpcy5vcHRpb25zLmZ1bGxTY3JlZW4sXG4gICAgICAgICAgICAndWktZ2FsbGVyaWEtaW5kaWNhdG9yLW9uaXRlbSc6IHRoaXMub3B0aW9ucy5zaG93SW5kaWNhdG9yc09uSXRlbSxcbiAgICAgICAgICAgICd1aS1nYWxsZXJpYS1pdGVtLW5hdi1vbmhvdmVyJzogdGhpcy5vcHRpb25zLnNob3dJdGVtTmF2aWdhdG9yc09uSG92ZXIgJiYgIXRoaXMub3B0aW9ucy5mdWxsU2NyZWVuXG4gICAgICAgIH0sIHRodW1ibmFpbHNQb3NTdHlsZUNsYXNzLCBpbmRpY2F0b3JQb3NTdHlsZUNsYXNzKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcyhnYWxsZXJpYVN0eWxlQ2xhc3MpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN0eWxlKSB0aGlzLmNvbnRhaW5lci5hdHRyKCdzdHlsZScsIHRoaXMub3B0aW9ucy5zdHlsZSk7XG5cbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IHRoaXMuX3JlbmRlckNsb3NlQnV0dG9uKCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIucHJlcGVuZCh0aGlzLmNsb3NlQnV0dG9uKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyVGh1bWJuYWlscygpO1xuICAgICAgICB0aGlzLl9yZW5kZXJJdGVtcygpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgICB9LFxuXG4gICAgX3JlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuX3JlbmRlckVsZW1lbnQoKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICAgIGVsZW1lbnQudW53cmFwKCcudWktZ2FsbGVyaWEtbWFzaycpLndyYXAoJzxkaXYgY2xhc3M9XCJ1aS1nYWxsZXJpYS1tYXNrXCI+PC9kaXY+Jyk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTk9URTogQWxsIHRoZSBkb2N1bWVudGF0aW9uIGFuZCBUeXBlU2NyaXB0IGRlY2xhcmF0aW9ucyBhcmUgaW4gMC1nYWxsZXJpYS5kLnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIFByaW1lIEl0ZW0gV2lkZ2V0IEZvciBHYWxsZXJpYVxuICovXG5cbiQud2lkZ2V0KFwicHJpbWUuZ2FsbGVyaWFJdGVtXCIsIHtcblxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIGNpcmN1bGFyOiBmYWxzZSxcbiAgICAgICAgaXNWZXJ0aWNhbDogZmFsc2UsXG4gICAgICAgIHNob3dDYXB0aW9uOiBmYWxzZSxcbiAgICAgICAgc2hvd0luZGljYXRvcnM6IGZhbHNlLFxuICAgICAgICBzaG93SXRlbU5hdmlnYXRvcnM6IGZhbHNlLFxuICAgICAgICBjaGFuZ2VJdGVtT25JbmRpY2F0b3JIb3ZlcjogZmFsc2UsXG4gICAgICAgIGF1dG9QbGF5OiBmYWxzZSxcbiAgICAgICAgc2xpZGVTaG93QWN0aXZlOiBmYWxzZSxcbiAgICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICAgIG9uQWN0aXZlSW5kZXhDaGFuZ2U6IG51bGwsXG4gICAgICAgIHN0b3BTbGlkZVNob3c6IG51bGxcbiAgICB9LFxuXG4gICAgX2NyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgdGhpcy5jYXB0aW9uQ29udGFpbmVyID0gdGhpcy5jb250YWluZXIubmV4dEFsbCgnLnVpLWdhbGxlcmlhLWNhcHRpb24taXRlbXMnKTtcbiAgICAgICAgdGhpcy5pbmRpY2F0b3JDb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5uZXh0QWxsKCcudWktZ2FsbGVyaWEtaW5kaWNhdG9ycycpO1xuICAgICAgICB0aGlzLmluZGljYXRvcnMgPSB0aGlzLmluZGljYXRvckNvbnRhaW5lci5jaGlsZHJlbignLnVpLWdhbGxlcmlhLWluZGljYXRvcicpO1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5jb250YWluZXIuY2hpbGRyZW4oJy51aS1nYWxsZXJpYS1pdGVtJyk7XG5cbiAgICAgICAgdGhpcy5fc2V0SW5pdFZhbHVlcygpO1xuICAgICAgICB0aGlzLl9yZW5kZXIoKTtcblxuICAgICAgICB0aGlzLndyYXBwZXIgPSB0aGlzLmNvbnRhaW5lci5jbG9zZXN0KCcudWktZ2FsbGVyaWEtaXRlbS13cmFwcGVyJyk7XG4gICAgICAgIHRoaXMuY29udGFpbmVySW5XcmFwcGVyID0gdGhpcy53cmFwcGVyLmNoaWxkcmVuKCcudWktZ2FsbGVyaWEtaXRlbS1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy5uYXZCYWNrd2FyZEJ0biA9IHRoaXMuY29udGFpbmVySW5XcmFwcGVyLmNoaWxkcmVuKCcudWktZ2FsbGVyaWEtaXRlbS1wcmV2Jyk7XG4gICAgICAgIHRoaXMubmF2QmFja3dhcmRCdG4uYXR0cignYXJpYS1sYWJlbCcsIFByaW1lRmFjZXMuZ2V0QXJpYUxhYmVsKCdwcmV2aW91cycpKTtcbiAgICAgICAgdGhpcy5uYXZGb3J3YXJkQnRuID0gdGhpcy5jb250YWluZXJJbldyYXBwZXIuY2hpbGRyZW4oJy51aS1nYWxsZXJpYS1pdGVtLW5leHQnKTtcbiAgICAgICAgdGhpcy5uYXZGb3J3YXJkQnRuLmF0dHIoJ2FyaWEtbGFiZWwnLCBQcmltZUZhY2VzLmdldEFyaWFMYWJlbCgnbmV4dCcpKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmluZGljYXRvckNvbnRhaW5lci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9ycyA9IHRoaXMud3JhcHBlci5maW5kKCc+IC51aS1nYWxsZXJpYS1pbmRpY2F0b3JzID4gLnVpLWdhbGxlcmlhLWluZGljYXRvcicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5kaWNhdG9ycy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICB2YXIgaW5kaWNhdG9yID0gJChpdGVtKS5maW5kKCdidXR0b24nKTtcbiAgICAgICAgICAgIGluZGljYXRvci5hdHRyKCdhcmlhLWxhYmVsJywgUHJpbWVGYWNlcy5nZXRBcmlhTGFiZWwoJ3BhZ2VMYWJlbCcpLnJlcGxhY2UoJ3twYWdlfScsIChpbmRleCArIDEpKSk7XG4gICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgIHRoaXMuX2JpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5tb3VudGVkKCk7XG4gICAgfSxcblxuICAgIF9zZXRJbml0VmFsdWVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucHJldk9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgfSxcblxuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5leHRJdGVtSW5kZXggPSB0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXggKyAxO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucy5vbkFjdGl2ZUluZGV4Q2hhbmdlKHtcbiAgICAgICAgICAgIGluZGV4OiB0aGlzLm9wdGlvbnMuY2lyY3VsYXIgJiYgKHRoaXMuaXRlbXMubGVuZ3RoIC0gMSkgPT09IHRoaXMub3B0aW9ucy5hY3RpdmVJbmRleCA/IDAgOiBuZXh0SXRlbUluZGV4XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBwcmV2OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwcmV2SXRlbUluZGV4ID0gdGhpcy5vcHRpb25zLmFjdGl2ZUluZGV4ICE9PSAwID8gdGhpcy5vcHRpb25zLmFjdGl2ZUluZGV4IC0gMSA6IDA7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLm9uQWN0aXZlSW5kZXhDaGFuZ2Uoe1xuICAgICAgICAgICAgaW5kZXg6IHRoaXMub3B0aW9ucy5jaXJjdWxhciAmJiB0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXggPT09IDAgPyB0aGlzLml0ZW1zLmxlbmd0aCAtIDEgOiBwcmV2SXRlbUluZGV4XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzdG9wU2xpZGVTaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2xpZGVTaG93QWN0aXZlICYmIHRoaXMub3B0aW9ucy5zdG9wU2xpZGVTaG93KSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc3RvcFNsaWRlU2hvdygpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG5hdkJhY2t3YXJkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGlzLnN0b3BTbGlkZVNob3coKTtcbiAgICAgICAgdGhpcy5wcmV2KCk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sXG5cbiAgICBuYXZGb3J3YXJkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGlzLnN0b3BTbGlkZVNob3coKTtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sXG5cbiAgICBvbkluZGljYXRvckNsaWNrOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgaW5kZXggPSAkKGUuY3VycmVudFRhcmdldCkuaW5kZXgoKTtcblxuICAgICAgICB0aGlzLnN0b3BTbGlkZVNob3coKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLm9uQWN0aXZlSW5kZXhDaGFuZ2Uoe1xuICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbkluZGljYXRvck1vdXNlRW50ZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2hhbmdlSXRlbU9uSW5kaWNhdG9ySG92ZXIpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9ICQoZS5jdXJyZW50VGFyZ2V0KS5pbmRleCgpO1xuXG4gICAgICAgICAgICB0aGlzLnN0b3BTbGlkZVNob3coKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkFjdGl2ZUluZGV4Q2hhbmdlKHtcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uSW5kaWNhdG9yS2V5RG93bjogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAkKGUuY3VycmVudFRhcmdldCkuaW5kZXgoKTtcblxuICAgICAgICAgICAgdGhpcy5zdG9wU2xpZGVTaG93KCk7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMub25BY3RpdmVJbmRleENoYW5nZSh7XG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVVJKCk7XG4gICAgfSxcblxuICAgIHVwZGF0ZWQ6IGZ1bmN0aW9uIChwcmV2T3B0aW9ucykge1xuICAgICAgICBpZiAocHJldk9wdGlvbnMuYWN0aXZlSW5kZXggIT09IHRoaXMub3B0aW9ucy5hY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVUkoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfc2V0T3B0aW9uOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9zdXBlcihrZXksIHZhbHVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVkKHRoaXMucHJldk9wdGlvbnMpO1xuICAgIH0sXG5cbiAgICBfc2V0T3B0aW9uczogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5wcmV2T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIFxuICAgICAgICAkLmVhY2gob3B0aW9ucywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICR0aGlzLl9zZXRPcHRpb24oa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJldk9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH0sXG5cbiAgICBfdXBkYXRlVUk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRyYW5zZm9ybSA9IHRoaXMub3B0aW9ucy5pc1ZlcnRpY2FsID8gJ3RyYW5zbGF0ZTNkKDAsICcgKyAodGhpcy5vcHRpb25zLmFjdGl2ZUluZGV4ICogLTEwMCkgKyAnJSwgMCknIDogJ3RyYW5zbGF0ZTNkKCcgKyAodGhpcy5vcHRpb25zLmFjdGl2ZUluZGV4ICogLTEwMCkgKyAnJSwgMCwgMCknO1xuICAgICAgICB2YXIgdHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gNTAwbXMgZWFzZSAwcyc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNzcyh7ICd0cmFuc2Zvcm0nOiB0cmFuc2Zvcm0sICd0cmFuc2l0aW9uJzogdHJhbnNpdGlvbiB9KTtcbiAgICAgICAgdGhpcy5jYXB0aW9uQ29udGFpbmVyLmNzcyh7ICd0cmFuc2Zvcm0nOiB0cmFuc2Zvcm0sICd0cmFuc2l0aW9uJzogdHJhbnNpdGlvbiB9KTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dJdGVtTmF2aWdhdG9ycykge1xuICAgICAgICAgICAgdmFyIGlzTmF2QmFja3dhcmRCdG5EaXNhYmxlZCA9ICF0aGlzLm9wdGlvbnMuY2lyY3VsYXIgJiYgdGhpcy5vcHRpb25zLmFjdGl2ZUluZGV4ID09PSAwO1xuICAgICAgICAgICAgdmFyIGlzTmF2Rm9yd2FyZEJ0bkRpc2FibGVkID0gIXRoaXMub3B0aW9ucy5jaXJjdWxhciAmJiB0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXggPT09ICh0aGlzLml0ZW1zLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgdmFyIHRvZ2dsZURpc2FibGVkID0gZnVuY3Rpb24gKGVsLCBkaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGlmIChkaXNhYmxlZClcbiAgICAgICAgICAgICAgICAgICAgZWwuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKS5hZGRDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWRpc2FibGVkJyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0b2dnbGVEaXNhYmxlZCh0aGlzLm5hdkJhY2t3YXJkQnRuLCBpc05hdkJhY2t3YXJkQnRuRGlzYWJsZWQpO1xuICAgICAgICAgICAgdG9nZ2xlRGlzYWJsZWQodGhpcy5uYXZGb3J3YXJkQnRuLCBpc05hdkZvcndhcmRCdG5EaXNhYmxlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dJbmRpY2F0b3JzKSB7XG4gICAgICAgICAgICB0aGlzLmluZGljYXRvcnMucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWhpZ2hsaWdodCcpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pbmRpY2F0b3JzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRpY2F0b3IgPSB0aGlzLmluZGljYXRvcnMuZXEoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3IuYWRkQ2xhc3MoJ3VpLXN0YXRlLWhpZ2hsaWdodCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2JpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dJdGVtTmF2aWdhdG9ycykge1xuICAgICAgICAgICAgdGhpcy5uYXZCYWNrd2FyZEJ0bi5vZmYoJ2NsaWNrLmdhbGxlcmlhLWl0ZW0tbmF2Jykub24oJ2NsaWNrLmdhbGxlcmlhLWl0ZW0tbmF2JywgdGhpcy5uYXZCYWNrd2FyZC5iaW5kKCR0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLm5hdkZvcndhcmRCdG4ub2ZmKCdjbGljay5nYWxsZXJpYS1pdGVtLW5hdicpLm9uKCdjbGljay5nYWxsZXJpYS1pdGVtLW5hdicsIHRoaXMubmF2Rm9yd2FyZC5iaW5kKCR0aGlzKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluZGljYXRvcnMub2ZmKCdjbGljay5nYWxsZXJpYS1pbmRpY2F0b3IgbW91c2VlbnRlci5nYWxsZXJpYS1pbmRpY2F0b3Iga2V5ZG93bi5nYWxsZXJpYS1pbmRpY2F0b3InKVxuICAgICAgICAgICAgLm9uKCdjbGljay5nYWxsZXJpYS1pbmRpY2F0b3InLCB0aGlzLm9uSW5kaWNhdG9yQ2xpY2suYmluZCgkdGhpcykpXG4gICAgICAgICAgICAub24oJ21vdXNlZW50ZXIuZ2FsbGVyaWEtaW5kaWNhdG9yJywgdGhpcy5vbkluZGljYXRvck1vdXNlRW50ZXIuYmluZCgkdGhpcykpXG4gICAgICAgICAgICAub24oJ2tleWRvd24uZ2FsbGVyaWEtaW5kaWNhdG9yJywgdGhpcy5vbkluZGljYXRvcktleURvd24uYmluZCgkdGhpcykpO1xuICAgIH0sXG5cbiAgICBfcmVuZGVyQmFja3dhcmROYXZpZ2F0b3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93SXRlbU5hdmlnYXRvcnMpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidWktZ2FsbGVyaWEtaXRlbS1wcmV2IHVpLWdhbGxlcmlhLWl0ZW0tbmF2IHVpLWNvcm5lci1hbGwgdWktZ2FsbGVyaWEtbGlua1wiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ1aS1nYWxsZXJpYS1pdGVtLXByZXYtaWNvbiB1aS1pY29uIHVpLWljb24tY2lyY2xlLXRyaWFuZ2xlLXdcIj48L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgJzwvYnV0dG9uPidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfSxcblxuICAgIF9yZW5kZXJGb3J3YXJkTmF2aWdhdG9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd0l0ZW1OYXZpZ2F0b3JzKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInVpLWdhbGxlcmlhLWl0ZW0tbmV4dCB1aS1nYWxsZXJpYS1pdGVtLW5hdiB1aS1jb3JuZXItYWxsIHVpLWdhbGxlcmlhLWxpbmtcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidWktZ2FsbGVyaWEtaXRlbS1uZXh0LWljb24gdWktaWNvbiB1aS1pY29uLWNpcmNsZS10cmlhbmdsZS1lXCI+PC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICc8L2J1dHRvbj4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH0sXG5cbiAgICBfcmVuZGVyQ2FwdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dDYXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNhcHRpb25Db250YWluZXIuc2hvdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FwdGlvbkNvbnRhaW5lcjtcbiAgICB9LFxuXG4gICAgX3JlbmRlckluZGljYXRvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgJzxsaSBjbGFzcz1cInVpLWdhbGxlcmlhLWluZGljYXRvclwiIHRhYmluZGV4PVwiMFwiPicgK1xuICAgICAgICAgICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0YWJpbmRleD1cIi0xXCIgY2xhc3M9XCJ1aS1nYWxsZXJpYS1saW5rXCI+PC9idXR0b24+JyArXG4gICAgICAgICAgICAnPC9saT4nXG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIF9yZW5kZXJJbmRpY2F0b3JzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd0luZGljYXRvcnMpIHtcbiAgICAgICAgICAgIHZhciBpbmRpY2F0b3JzID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGluZGljYXRvcnMgKz0gdGhpcy5fcmVuZGVySW5kaWNhdG9yKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgJzx1bCBjbGFzcz1cInVpLWdhbGxlcmlhLWluZGljYXRvcnNcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9ycyArXG4gICAgICAgICAgICAgICAgJzwvdWw+J1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9LFxuXG4gICAgX3JlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYmFja3dhcmROYXZpZ2F0b3IgPSB0aGlzLl9yZW5kZXJCYWNrd2FyZE5hdmlnYXRvcigpO1xuICAgICAgICB2YXIgZm9yd2FyZE5hdmlnYXRvciA9IHRoaXMuX3JlbmRlckZvcndhcmROYXZpZ2F0b3IoKTtcbiAgICAgICAgdmFyIGNhcHRpb24gPSB0aGlzLl9yZW5kZXJDYXB0aW9uKCk7XG4gICAgICAgIHZhciBpbmRpY2F0b3JzID0gdGhpcy5pbmRpY2F0b3JDb250YWluZXIubGVuZ3RoID8gdGhpcy5pbmRpY2F0b3JDb250YWluZXIgOiB0aGlzLl9yZW5kZXJJbmRpY2F0b3JzKCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIud3JhcChcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidWktZ2FsbGVyaWEtaXRlbS13cmFwcGVyXCI+JyArXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ1aS1nYWxsZXJpYS1pdGVtLWNvbnRhaW5lclwiPicgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYmVmb3JlKGJhY2t3YXJkTmF2aWdhdG9yKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWZ0ZXIoZm9yd2FyZE5hdmlnYXRvciwgY2FwdGlvbik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnBhcmVudCgpLmFmdGVyKGluZGljYXRvcnMpO1xuICAgIH1cbn0pO1xuXG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE5PVEU6IEFsbCB0aGUgZG9jdW1lbnRhdGlvbiBhbmQgVHlwZVNjcmlwdCBkZWNsYXJhdGlvbnMgYXJlIGluIDAtZ2FsbGVyaWEuZC50c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLyoqXG4gKiBQcmltZSBUaHVtYm5haWwgV2lkZ2V0IEZvciBHYWxsZXJpYVxuICovXG5cbiQud2lkZ2V0KFwicHJpbWUuZ2FsbGVyaWFUaHVtYm5haWxcIiwge1xuXG4gICAgb3B0aW9uczoge1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgc2VsZWN0b3I6IG51bGwsXG4gICAgICAgIHNob3dUaHVtYm5haWxzOiB0cnVlLFxuICAgICAgICBudW1WaXNpYmxlOiAzLFxuICAgICAgICByZXNwb25zaXZlT3B0aW9uczogbnVsbCxcbiAgICAgICAgY2lyY3VsYXI6IGZhbHNlLFxuICAgICAgICBpc1ZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgc2hvd1RodW1ibmFpbE5hdmlnYXRvcnM6IHRydWUsXG4gICAgICAgIHNsaWRlU2hvd0FjdGl2ZTogZmFsc2UsXG4gICAgICAgIGFjdGl2ZUluZGV4OiAwLFxuICAgICAgICBvbkFjdGl2ZUluZGV4Q2hhbmdlOiBudWxsLFxuICAgICAgICBzdG9wU2xpZGVTaG93OiBudWxsXG4gICAgfSxcblxuICAgIF9jcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93VGh1bWJuYWlscykge1xuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxJdGVtcyA9IHRoaXMuY29udGFpbmVyLmNoaWxkcmVuKCcudWktZ2FsbGVyaWEtdGh1bWJuYWlsLWl0ZW0nKTtcblxuICAgICAgICAgICAgdGhpcy5fc2V0SW5pdFZhbHVlcygpO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyKCk7XG5cbiAgICAgICAgICAgIHRoaXMud3JhcHBlciA9IHRoaXMuY29udGFpbmVyLmNsb3Nlc3QoJy51aS1nYWxsZXJpYS10aHVtYm5haWwtd3JhcHBlcicpO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJJbldyYXBwZXIgPSB0aGlzLndyYXBwZXIuY2hpbGRyZW4oJy51aS1nYWxsZXJpYS10aHVtYm5haWwtY29udGFpbmVyJyk7XG4gICAgICAgICAgICB0aGlzLm5hdkJhY2t3YXJkQnRuID0gdGhpcy5jb250YWluZXJJbldyYXBwZXIuY2hpbGRyZW4oJy51aS1nYWxsZXJpYS10aHVtYm5haWwtcHJldicpO1xuICAgICAgICAgICAgdGhpcy5uYXZGb3J3YXJkQnRuID0gdGhpcy5jb250YWluZXJJbldyYXBwZXIuY2hpbGRyZW4oJy51aS1nYWxsZXJpYS10aHVtYm5haWwtbmV4dCcpO1xuXG4gICAgICAgICAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLm1vdW50ZWQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfc2V0SW5pdFZhbHVlczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbnVtVmlzaWJsZTogdGhpcy5vcHRpb25zLm51bVZpc2libGUsXG4gICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtczogMFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucHJldlN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSk7XG4gICAgICAgIHRoaXMucHJldk9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgfSxcbiAgICBcbiAgICBzZXRTdGF0ZTogZnVuY3Rpb24gKG5ld1N0YXRlLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaXNVcGRhdGVkID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBPYmplY3Qua2V5cyhuZXdTdGF0ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoJHRoaXMuc3RhdGVba2V5XSAhPT0gbmV3U3RhdGVba2V5XSkge1xuICAgICAgICAgICAgICAgICR0aGlzLnByZXZTdGF0ZVtrZXldID0gJHRoaXMuc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICAkdGhpcy5zdGF0ZVtrZXldID0gbmV3U3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpc1VwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXNVcGRhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZWQodGhpcy5vcHRpb25zLCB0aGlzLnByZXZTdGF0ZSk7XG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0ZXA6IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgdmFyIHRvdGFsU2hpZnRlZEl0ZW1zID0gdGhpcy5zdGF0ZS50b3RhbFNoaWZ0ZWRJdGVtcyArIGRpcjtcblxuICAgICAgICBpZiAoZGlyIDwgMCAmJiAoLTEgKiB0b3RhbFNoaWZ0ZWRJdGVtcykgKyB0aGlzLnN0YXRlLm51bVZpc2libGUgPiAodGhpcy50aHVtYm5haWxJdGVtcy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgdG90YWxTaGlmdGVkSXRlbXMgPSB0aGlzLnN0YXRlLm51bVZpc2libGUgLSB0aGlzLnRodW1ibmFpbEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXIgPiAwICYmIHRvdGFsU2hpZnRlZEl0ZW1zID4gMCkge1xuICAgICAgICAgICAgdG90YWxTaGlmdGVkSXRlbXMgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jaXJjdWxhcikge1xuICAgICAgICAgICAgaWYgKGRpciA8IDAgJiYgdGhpcy50aHVtYm5haWxJdGVtcy5sZW5ndGggLSAxID09PSB0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtcyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkaXIgPiAwICYmIHRoaXMub3B0aW9ucy5hY3RpdmVJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRvdGFsU2hpZnRlZEl0ZW1zID0gdGhpcy5zdGF0ZS5udW1WaXNpYmxlIC0gdGhpcy50aHVtYm5haWxJdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHZhciB0cmFuc2Zvcm0gPSB0aGlzLm9wdGlvbnMuaXNWZXJ0aWNhbCA/ICd0cmFuc2xhdGUzZCgwLCcgKyAodG90YWxTaGlmdGVkSXRlbXMgKiAoMTAwLyB0aGlzLnN0YXRlLm51bVZpc2libGUpKSArICclLCAwKScgOiAndHJhbnNsYXRlM2QoJyArICh0b3RhbFNoaWZ0ZWRJdGVtcyAqICgxMDAvIHRoaXMuc3RhdGUubnVtVmlzaWJsZSkpICsgJyUsIDAsIDApJztcbiAgICAgICAgICAgIHZhciB0cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSA1MDBtcyBlYXNlIDBzJztcblxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2xhc3MoJ3VpLWl0ZW1zLWhpZGRlbicpLmNzcyh7ICd0cmFuc2Zvcm0nOiB0cmFuc2Zvcm0sICd0cmFuc2l0aW9uJzogdHJhbnNpdGlvbiB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdG90YWxTaGlmdGVkSXRlbXM6IHRvdGFsU2hpZnRlZEl0ZW1zXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzdG9wU2xpZGVTaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2xpZGVTaG93QWN0aXZlICYmIHRoaXMub3B0aW9ucy5zdG9wU2xpZGVTaG93KSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc3RvcFNsaWRlU2hvdygpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldE1lZGlhbkluZGV4OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbmRleCA9IE1hdGguZmxvb3IodGhpcy5zdGF0ZS5udW1WaXNpYmxlIC8gMik7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLnN0YXRlLm51bVZpc2libGUgJSAyKSA/IGluZGV4IDogaW5kZXggLSAxO1xuICAgIH0sXG5cbiAgICBuYXZCYWNrd2FyZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhpcy5zdG9wU2xpZGVTaG93KCk7XG5cbiAgICAgICAgdmFyIHByZXZJdGVtSW5kZXggPSB0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXggIT09IDAgPyB0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXggLSAxIDogMDtcbiAgICAgICAgdmFyIGRpZmYgPSBwcmV2SXRlbUluZGV4ICsgdGhpcy5zdGF0ZS50b3RhbFNoaWZ0ZWRJdGVtcztcbiAgICAgICAgaWYgKCh0aGlzLnN0YXRlLm51bVZpc2libGUgLSBkaWZmIC0gMSkgPiB0aGlzLmdldE1lZGlhbkluZGV4KCkgJiYgKCgtMSAqIHRoaXMuc3RhdGUudG90YWxTaGlmdGVkSXRlbXMpICE9PSAwIHx8IHRoaXMub3B0aW9ucy5jaXJjdWxhcikpIHtcbiAgICAgICAgICAgIHRoaXMuc3RlcCgxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3B0aW9ucy5vbkFjdGl2ZUluZGV4Q2hhbmdlKHtcbiAgICAgICAgICAgIGluZGV4OiB0aGlzLm9wdGlvbnMuY2lyY3VsYXIgJiYgdGhpcy5vcHRpb25zLmFjdGl2ZUluZGV4ID09PSAwID8gdGhpcy50aHVtYm5haWxJdGVtcy5sZW5ndGggLSAxIDogcHJldkl0ZW1JbmRleFxuICAgICAgICB9KTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSxcblxuICAgIG5hdkZvcndhcmQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMuc3RvcFNsaWRlU2hvdygpO1xuXG4gICAgICAgIHZhciBuZXh0SXRlbUluZGV4ID0gdGhpcy5vcHRpb25zLmFjdGl2ZUluZGV4ICsgMTtcbiAgICAgICAgaWYgKG5leHRJdGVtSW5kZXggKyB0aGlzLnN0YXRlLnRvdGFsU2hpZnRlZEl0ZW1zID4gdGhpcy5nZXRNZWRpYW5JbmRleCgpICYmICgoLTEgKiB0aGlzLnN0YXRlLnRvdGFsU2hpZnRlZEl0ZW1zKSA8IHRoaXMuZ2V0VG90YWxQYWdlTnVtYmVyKCkgLSAxIHx8IHRoaXMub3B0aW9ucy5jaXJjdWxhcikpIHtcbiAgICAgICAgICAgIHRoaXMuc3RlcCgtMSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wdGlvbnMub25BY3RpdmVJbmRleENoYW5nZSh7XG4gICAgICAgICAgICBpbmRleDogdGhpcy5vcHRpb25zLmNpcmN1bGFyICYmICh0aGlzLnRodW1ibmFpbEl0ZW1zLmxlbmd0aCAtIDEpID09PSB0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXggPyAwIDogbmV4dEl0ZW1JbmRleFxuICAgICAgICB9KTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSxcblxuICAgIG9uSXRlbUNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zdG9wU2xpZGVTaG93KCk7XG5cbiAgICAgICAgdmFyIHNlbGVjdGVkSXRlbUluZGV4ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5pbmRleCgpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtSW5kZXggIT09IHRoaXMub3B0aW9ucy5hY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgdmFyIGRpZmYgPSBzZWxlY3RlZEl0ZW1JbmRleCArIHRoaXMuc3RhdGUudG90YWxTaGlmdGVkSXRlbXM7XG4gICAgICAgICAgICB2YXIgZGlyID0gMDtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW1JbmRleCA8IHRoaXMub3B0aW9ucy5hY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgICAgIGRpciA9ICh0aGlzLnN0YXRlLm51bVZpc2libGUgLSBkaWZmIC0gMSkgLSB0aGlzLmdldE1lZGlhbkluZGV4KCk7XG4gICAgICAgICAgICAgICAgaWYgKGRpciA+IDAgJiYgKC0xICogdGhpcy5zdGF0ZS50b3RhbFNoaWZ0ZWRJdGVtcykgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwKGRpcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlyID0gdGhpcy5nZXRNZWRpYW5JbmRleCgpIC0gZGlmZjtcbiAgICAgICAgICAgICAgICBpZiAoZGlyIDwgMCAmJiAoLTEgKiB0aGlzLnN0YXRlLnRvdGFsU2hpZnRlZEl0ZW1zKSA8IHRoaXMuZ2V0VG90YWxQYWdlTnVtYmVyKCkgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcChkaXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uQWN0aXZlSW5kZXhDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIGluZGV4OiBzZWxlY3RlZEl0ZW1JbmRleFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25UcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAodGhpcy5jb250YWluZXIgJiYgZS5vcmlnaW5hbEV2ZW50ICYmIGUub3JpZ2luYWxFdmVudC5wcm9wZXJ0eU5hbWUgPT09ICd0cmFuc2Zvcm0nKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcygndWktaXRlbXMtaGlkZGVuJykuY3NzKCd0cmFuc2l0aW9uJywgJycpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHRvdWNob2JqID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcblxuICAgICAgICB0aGlzLnN0YXJ0UG9zID0ge1xuICAgICAgICAgICAgeDogdG91Y2hvYmoucGFnZVgsXG4gICAgICAgICAgICB5OiB0b3VjaG9iai5wYWdlWVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBvblRvdWNoTW92ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sXG5cbiAgICBvblRvdWNoRW5kOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdG91Y2hvYmogPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYWdlT25Ub3VjaChlLCAodG91Y2hvYmoucGFnZVkgLSB0aGlzLnN0YXJ0UG9zLnkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUGFnZU9uVG91Y2goZSwgKHRvdWNob2JqLnBhZ2VYIC0gdGhpcy5zdGFydFBvcy54KSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY2hhbmdlUGFnZU9uVG91Y2g6IGZ1bmN0aW9uIChlLCBkaWZmKSB7XG4gICAgICAgIGlmIChkaWZmIDwgMCkgeyAgICAgICAgICAgLy8gbGVmdFxuICAgICAgICAgICAgdGhpcy5uYXZGb3J3YXJkKGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgeyAgICAgICAgICAgICAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgICAgIHRoaXMubmF2QmFja3dhcmQoZSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0VG90YWxQYWdlTnVtYmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRodW1ibmFpbEl0ZW1zLmxlbmd0aCA+IHRoaXMuc3RhdGUubnVtVmlzaWJsZSA/ICh0aGlzLnRodW1ibmFpbEl0ZW1zLmxlbmd0aCAtIHRoaXMuc3RhdGUubnVtVmlzaWJsZSkgKyAxIDogMDtcbiAgICB9LFxuXG4gICAgY3JlYXRlU3R5bGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRodW1ibmFpbHNTdHlsZSkge1xuICAgICAgICAgICAgdGhpcy50aHVtYm5haWxzU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnRodW1ibmFpbHNTdHlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZ2FsbGVyaWFTZWxlY3RvciA9IHRoaXMub3B0aW9ucy5zZWxlY3RvciA/IHRoaXMub3B0aW9ucy5zZWxlY3RvciA6ICcjJyArIHRoaXMub3B0aW9ucy5pZDtcbiAgICAgICAgdmFyIGlubmVySFRNTCA9ICBnYWxsZXJpYVNlbGVjdG9yICsgJyAudWktZ2FsbGVyaWEtdGh1bWJuYWlsLWl0ZW1zIC51aS1nYWxsZXJpYS10aHVtYm5haWwtaXRlbSB7IGZsZXg6IDEgMCAnICsgKDEwMC8gdGhpcy5zdGF0ZS5udW1WaXNpYmxlKSArICclOyB9JztcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlc3BvbnNpdmVPcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNpdmVPcHRpb25zID0gQXJyYXkuZnJvbSh0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZU9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zaXZlT3B0aW9ucy5zb3J0KGZ1bmN0aW9uIChkYXRhMSwgZGF0YTIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUxID0gZGF0YTEuYnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUyID0gZGF0YTIuYnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZTEgPT0gbnVsbCAmJiB2YWx1ZTIgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gLTE7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUxICE9IG51bGwgJiYgdmFsdWUyID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IDE7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUxID09IG51bGwgJiYgdmFsdWUyID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlMSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhbHVlMiA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlMS5sb2NhbGVDb21wYXJlKHZhbHVlMiwgdW5kZWZpbmVkLCB7IG51bWVyaWM6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAodmFsdWUxIDwgdmFsdWUyKSA/IC0xIDogKHZhbHVlMSA+IHZhbHVlMikgPyAxIDogMDtcblxuICAgICAgICAgICAgICAgIHJldHVybiAtMSAqIHJlc3VsdDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzID0gdGhpcy5yZXNwb25zaXZlT3B0aW9uc1tpXTtcblxuICAgICAgICAgICAgICAgIGlubmVySFRNTCArPSAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDonICsgcmVzLmJyZWFrcG9pbnQgKyAnKSB7ICcgKyBnYWxsZXJpYVNlbGVjdG9yICsgJyAudWktZ2FsbGVyaWEtdGh1bWJuYWlsLWl0ZW1zIC51aS1nYWxsZXJpYS10aHVtYm5haWwtaXRlbSB7IGZsZXg6IDEgMCAnICsgKDEwMC8gcmVzLm51bVZpc2libGUpICsgJyU7IH19JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGh1bWJuYWlsc1N0eWxlLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgICB9LFxuXG4gICAgY2FsY3VsYXRlUG9zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyICYmIHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgdmFyIG1hdGNoZWRSZXNwb25zaXZlRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBudW1WaXNpYmxlOiB0aGlzLm9wdGlvbnMubnVtVmlzaWJsZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlc3BvbnNpdmVPcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlcyA9IHRoaXMucmVzcG9uc2l2ZU9wdGlvbnNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQocmVzLmJyZWFrcG9pbnQsIDEwKSA+PSB3aW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVkUmVzcG9uc2l2ZURhdGEgPSByZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5udW1WaXNpYmxlICE9PSBtYXRjaGVkUmVzcG9uc2l2ZURhdGEubnVtVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBudW1WaXNpYmxlOiBtYXRjaGVkUmVzcG9uc2l2ZURhdGEubnVtVmlzaWJsZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGJpbmREb2N1bWVudExpc3RlbmVyczogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lcikge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5jYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdW5iaW5kRG9jdW1lbnRMaXN0ZW5lcnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYodGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kb2N1bWVudFJlc2l6ZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnRSZXNpemVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkgeyAgICBcbiAgICAgICAgdGhpcy5jcmVhdGVTdHlsZSgpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZXNwb25zaXZlT3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5iaW5kRG9jdW1lbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3VwZGF0ZVVJKCk7XG4gICAgfSxcblxuICAgIHVwZGF0ZWQ6IGZ1bmN0aW9uIChwcmV2T3B0aW9ucywgcHJldlN0YXRlKSB7XG4gICAgICAgIHZhciB0b3RhbFNoaWZ0ZWRJdGVtcyA9IHRoaXMuc3RhdGUudG90YWxTaGlmdGVkSXRlbXM7XG5cbiAgICAgICAgaWYgKHByZXZTdGF0ZS5udW1WaXNpYmxlICE9PSB0aGlzLnN0YXRlLm51bVZpc2libGUgfHwgcHJldk9wdGlvbnMuYWN0aXZlSW5kZXggIT09IHRoaXMub3B0aW9ucy5hY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hY3RpdmVJbmRleCA8PSB0aGlzLmdldE1lZGlhbkluZGV4KCkgfHwgdGhpcy50aHVtYm5haWxJdGVtcy5sZW5ndGggPD0gdGhpcy5zdGF0ZS5udW1WaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdG90YWxTaGlmdGVkSXRlbXMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50aHVtYm5haWxJdGVtcy5sZW5ndGggLSB0aGlzLnN0YXRlLm51bVZpc2libGUgKyB0aGlzLmdldE1lZGlhbkluZGV4KCkgPCB0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtcyA9IHRoaXMuc3RhdGUubnVtVmlzaWJsZSAtIHRoaXMudGh1bWJuYWlsSXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50aHVtYm5haWxJdGVtcy5sZW5ndGggLSB0aGlzLnN0YXRlLm51bVZpc2libGUgPCB0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXggJiYgdGhpcy5zdGF0ZS5udW1WaXNpYmxlICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRvdGFsU2hpZnRlZEl0ZW1zID0gKHRoaXMub3B0aW9ucy5hY3RpdmVJbmRleCAqIC0xKSArIHRoaXMuZ2V0TWVkaWFuSW5kZXgoKSArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtcyA9ICh0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXggKiAtMSkgKyB0aGlzLmdldE1lZGlhbkluZGV4KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b3RhbFNoaWZ0ZWRJdGVtcyAhPT0gdGhpcy5zdGF0ZS50b3RhbFNoaWZ0ZWRJdGVtcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0b3RhbFNoaWZ0ZWRJdGVtczogdG90YWxTaGlmdGVkSXRlbXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHRyYW5zZm9ybSA9IHRoaXMub3B0aW9ucy5pc1ZlcnRpY2FsID8gJ3RyYW5zbGF0ZTNkKDAsICcgKyAodG90YWxTaGlmdGVkSXRlbXMgKiAoMTAwLyB0aGlzLnN0YXRlLm51bVZpc2libGUpKSArICclLCAwKScgOiAndHJhbnNsYXRlM2QoJyArICh0b3RhbFNoaWZ0ZWRJdGVtcyAqICgxMDAvIHRoaXMuc3RhdGUubnVtVmlzaWJsZSkpICsgJyUsIDAsIDApJztcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNzcygndHJhbnNmb3JtJywgdHJhbnNmb3JtKTtcblxuICAgICAgICAgICAgaWYgKHByZXZPcHRpb25zLmFjdGl2ZUluZGV4ICE9PSB0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDbGFzcygndWktaXRlbXMtaGlkZGVuJykuY3NzKCd0cmFuc2l0aW9uJywgJ3RyYW5zZm9ybSA1MDBtcyBlYXNlIDBzJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVVJKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX3NldE9wdGlvbjogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fc3VwZXIoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlZCh0aGlzLnByZXZPcHRpb25zLCB0aGlzLnN0YXRlKTtcbiAgICB9LFxuXG4gICAgX3NldE9wdGlvbnM6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1RodW1ibmFpbHMpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnByZXZPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJC5lYWNoKG9wdGlvbnMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgJHRoaXMuX3NldE9wdGlvbihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnByZXZPcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBfdXBkYXRlVUk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZpcnN0SW5kZXggPSB0aGlzLnN0YXRlLnRvdGFsU2hpZnRlZEl0ZW1zICogLTE7XG4gICAgICAgIHZhciBsYXN0SW5kZXggPSBmaXJzdEluZGV4ICsgdGhpcy5zdGF0ZS5udW1WaXNpYmxlIC0gMTtcblxuICAgICAgICB0aGlzLnRodW1ibmFpbEl0ZW1zLnJlbW92ZUNsYXNzKCd1aS1nYWxsZXJpYS10aHVtYm5haWwtaXRlbS1jdXJyZW50IHVpLWdhbGxlcmlhLXRodW1ibmFpbC1pdGVtLWFjdGl2ZSB1aS1nYWxsZXJpYS10aHVtYm5haWwtaXRlbS1zdGFydCB1aS1nYWxsZXJpYS10aHVtYm5haWwtaXRlbS1lbmQnKTtcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnRodW1ibmFpbEl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLnRodW1ibmFpbEl0ZW1zLmVxKGluZGV4KTtcbiAgICAgICAgICAgIHZhciBhY3RpdmUgPSBmaXJzdEluZGV4IDw9IGluZGV4ICYmIGxhc3RJbmRleCA+PSBpbmRleDtcbiAgICAgICAgICAgIHZhciBzdGFydCA9IGZpcnN0SW5kZXggPT09IGluZGV4O1xuICAgICAgICAgICAgdmFyIGVuZCA9IGxhc3RJbmRleCA9PT0gaW5kZXg7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHRoaXMub3B0aW9ucy5hY3RpdmVJbmRleCA9PT0gaW5kZXg7XG5cbiAgICAgICAgICAgIHZhciBpdGVtQ2xhc3MgPSBQcmltZUZhY2VzLnV0aWxzLnN0eWxlQ2xhc3Moe1xuICAgICAgICAgICAgICAgICd1aS1nYWxsZXJpYS10aHVtYm5haWwtaXRlbS1jdXJyZW50JzogY3VycmVudCxcbiAgICAgICAgICAgICAgICAndWktZ2FsbGVyaWEtdGh1bWJuYWlsLWl0ZW0tYWN0aXZlJzogYWN0aXZlLFxuICAgICAgICAgICAgICAgICd1aS1nYWxsZXJpYS10aHVtYm5haWwtaXRlbS1zdGFydCc6IHN0YXJ0LFxuICAgICAgICAgICAgICAgICd1aS1nYWxsZXJpYS10aHVtYm5haWwtaXRlbS1lbmQnOiBlbmRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdGVtLmFkZENsYXNzKGl0ZW1DbGFzcykuY2hpbGRyZW4oJy51aS1nYWxsZXJpYS10aHVtYm5haWwtaXRlbS1jb250ZW50JykuYXR0cigndGFiaW5kZXgnLCAoYWN0aXZlID8gJzAnIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93VGh1bWJuYWlsTmF2aWdhdG9ycykge1xuICAgICAgICAgICAgdmFyIGlzTmF2QmFja3dhcmRCdG5EaXNhYmxlZCA9ICghdGhpcy5vcHRpb25zLmNpcmN1bGFyICYmIHRoaXMub3B0aW9ucy5hY3RpdmVJbmRleCA9PT0gMCkgfHwgKHRoaXMudGh1bWJuYWlsSXRlbXMubGVuZ3RoIDw9IHRoaXMuc3RhdGUubnVtVmlzaWJsZSk7XG4gICAgICAgICAgICB2YXIgaXNOYXZGb3J3YXJkQnRuRGlzYWJsZWQgPSAoIXRoaXMub3B0aW9ucy5jaXJjdWxhciAmJiB0aGlzLm9wdGlvbnMuYWN0aXZlSW5kZXggPT09ICh0aGlzLnRodW1ibmFpbEl0ZW1zLmxlbmd0aCAtIDEpKSB8fCAodGhpcy50aHVtYm5haWxJdGVtcy5sZW5ndGggPD0gdGhpcy5zdGF0ZS5udW1WaXNpYmxlKTtcbiAgICAgICAgICAgIHZhciB0b2dnbGVEaXNhYmxlZCA9IGZ1bmN0aW9uIChlbCwgZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlzYWJsZWQpXG4gICAgICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJykuYWRkQ2xhc3MoJ3VpLXN0YXRlLWRpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1kaXNhYmxlZCcpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdG9nZ2xlRGlzYWJsZWQodGhpcy5uYXZCYWNrd2FyZEJ0biwgaXNOYXZCYWNrd2FyZEJ0bkRpc2FibGVkKTtcbiAgICAgICAgICAgIHRvZ2dsZURpc2FibGVkKHRoaXMubmF2Rm9yd2FyZEJ0biwgaXNOYXZGb3J3YXJkQnRuRGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9kZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZXNwb25zaXZlT3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy51bmJpbmREb2N1bWVudExpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9iaW5kRXZlbnRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dUaHVtYm5haWxOYXZpZ2F0b3JzKSB7XG4gICAgICAgICAgICB0aGlzLm5hdkJhY2t3YXJkQnRuLm9mZignY2xpY2suZ2FsbGVyaWEtdGh1bWJuYWlsLW5hdicpLm9uKCdjbGljay5nYWxsZXJpYS10aHVtYm5haWwtbmF2JywgdGhpcy5uYXZCYWNrd2FyZC5iaW5kKCR0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLm5hdkZvcndhcmRCdG4ub2ZmKCdjbGljay5nYWxsZXJpYS10aHVtYm5haWwtbmF2Jykub24oJ2NsaWNrLmdhbGxlcmlhLXRodW1ibmFpbC1uYXYnLCB0aGlzLm5hdkZvcndhcmQuYmluZCgkdGhpcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIub2ZmKCd0cmFuc2l0aW9uZW5kLmdhbGxlcmlhLXRodW1ibmFpbCB0b3VjaHN0YXJ0LmdhbGxlcmlhLXRodW1ibmFpbCB0b3VjaG1vdmUuZ2FsbGVyaWEtdGh1bWJuYWlsIHRvdWNoZW5kLmdhbGxlcmlhLXRodW1ibmFpbCcpXG4gICAgICAgICAgICAub24oJ3RyYW5zaXRpb25lbmQuZ2FsbGVyaWEtdGh1bWJuYWlsJywgdGhpcy5vblRyYW5zaXRpb25FbmQuYmluZCgkdGhpcykpXG4gICAgICAgICAgICAub24oJ3RvdWNoc3RhcnQuZ2FsbGVyaWEtdGh1bWJuYWlsJywgdGhpcy5vblRvdWNoU3RhcnQuYmluZCgkdGhpcykpXG4gICAgICAgICAgICAub24oJ3RvdWNobW92ZS5nYWxsZXJpYS10aHVtYm5haWwnLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQoJHRoaXMpKVxuICAgICAgICAgICAgLm9uKCd0b3VjaGVuZC5nYWxsZXJpYS10aHVtYm5haWwnLCB0aGlzLm9uVG91Y2hFbmQuYmluZCgkdGhpcykpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2hpbGRyZW4oKS5vZmYoJ2NsaWNrLmdhbGxlcmlhLXRodW1ibmFpbC1pdGVtIGtleWRvd24uZ2FsbGVyaWEtdGh1bWJuYWlsLWl0ZW0nKVxuICAgICAgICAgICAgLm9uKCdjbGljay5nYWxsZXJpYS10aHVtYm5haWwtaXRlbScsIHRoaXMub25JdGVtQ2xpY2suYmluZCgkdGhpcykpXG4gICAgICAgICAgICAub24oJ2tleWRvd24uZ2FsbGVyaWEtdGh1bWJuYWlsLWl0ZW0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5vbkl0ZW1DbGljayhlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgX3JlbmRlckJhY2t3YXJkTmF2aWdhdG9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1RodW1ibmFpbE5hdmlnYXRvcnMpIHtcbiAgICAgICAgICAgIHZhciBpY29uU3R5bGVDbGFzcyA9IFByaW1lRmFjZXMudXRpbHMuc3R5bGVDbGFzcygndWktZ2FsbGVyaWEtdGh1bWJuYWlsLXByZXYtaWNvbiB1aS1pY29uJywge1xuICAgICAgICAgICAgICAgICd1aS1pY29uLWNpcmNsZS10cmlhbmdsZS13JzogIXRoaXMub3B0aW9ucy5pc1ZlcnRpY2FsLFxuICAgICAgICAgICAgICAgICd1aS1pY29uLWNpcmNsZS10cmlhbmdsZS1uJzogdGhpcy5vcHRpb25zLmlzVmVydGljYWxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInVpLWdhbGxlcmlhLXRodW1ibmFpbC1wcmV2IHVpLWNvcm5lci1hbGwgdWktZ2FsbGVyaWEtbGlua1wiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCInICsgaWNvblN0eWxlQ2xhc3MgKyAnXCI+PC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICc8L2J1dHRvbj4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH0sXG5cbiAgICBfcmVuZGVyRm9yd2FyZE5hdmlnYXRvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dUaHVtYm5haWxOYXZpZ2F0b3JzKSB7XG4gICAgICAgICAgICB2YXIgaWNvblN0eWxlQ2xhc3MgPSBQcmltZUZhY2VzLnV0aWxzLnN0eWxlQ2xhc3MoJ3VpLWdhbGxlcmlhLXRodW1ibmFpbC1uZXh0LWljb24gdWktaWNvbicsIHtcbiAgICAgICAgICAgICAgICAndWktaWNvbi1jaXJjbGUtdHJpYW5nbGUtZSc6ICF0aGlzLm9wdGlvbnMuaXNWZXJ0aWNhbCxcbiAgICAgICAgICAgICAgICAndWktaWNvbi1jaXJjbGUtdHJpYW5nbGUtcyc6IHRoaXMub3B0aW9ucy5pc1ZlcnRpY2FsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ1aS1nYWxsZXJpYS10aHVtYm5haWwtbmV4dCB1aS1jb3JuZXItYWxsIHVpLWdhbGxlcmlhLWxpbmtcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiJyArIGljb25TdHlsZUNsYXNzICsgJ1wiPjwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAnPC9idXR0b24+J1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9LFxuXG4gICAgX3JlbmRlckNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJhY2t3YXJkTmF2aWdhdG9yID0gdGhpcy5fcmVuZGVyQmFja3dhcmROYXZpZ2F0b3IoKTtcbiAgICAgICAgdmFyIGZvcndhcmROYXZpZ2F0b3IgPSB0aGlzLl9yZW5kZXJGb3J3YXJkTmF2aWdhdG9yKCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIud3JhcChcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidWktZ2FsbGVyaWEtdGh1bWJuYWlsLWNvbnRhaW5lclwiPicgK1xuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidWktZ2FsbGVyaWEtdGh1bWJuYWlsLWl0ZW1zLWNvbnRhaW5lclwiPicgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIucGFyZW50KCkuYmVmb3JlKGJhY2t3YXJkTmF2aWdhdG9yKS5hZnRlcihmb3J3YXJkTmF2aWdhdG9yKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXIuY2xvc2VzdCgnLnVpLWdhbGxlcmlhLXRodW1ibmFpbC1jb250YWluZXInKTtcbiAgICB9LFxuXG4gICAgX3JlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29udGVudCA9IHRoaXMuX3JlbmRlckNvbnRlbnQoKTtcblxuICAgICAgICBjb250ZW50LndyYXAoJzxkaXYgY2xhc3M9XCJ1aS1nYWxsZXJpYS10aHVtYm5haWwtd3JhcHBlclwiPjwvZGl2PicpO1xuICAgIH1cbn0pO1xuIiwgImltcG9ydCBcIi4uLy4uL3NyYy9nYWxsZXJpYS8wLWdhbGxlcmlhLmpzXCI7XG5pbXBvcnQgXCIuLi8uLi9zcmMvZ2FsbGVyaWEvMC1nYWxsZXJpYWl0ZW0uanNcIjtcbmltcG9ydCBcIi4uLy4uL3NyYy9nYWxsZXJpYS8wLWdhbGxlcmlhdGh1bWJuYWlsLmpzXCI7XG5cbmltcG9ydCB7IERlZmVycmVkV2lkZ2V0IH0gZnJvbSBcIi4uL2NvcmUvY29yZS53aWRnZXQuanNcIjtcblxuLyoqXG4gKiBfX1ByaW1lRmFjZXMgR2FsbGVyaWEgV2lkZ2V0X19cbiAqXG4gKiBHYWxsZXJpYSBpcyBhIGNvbnRlbnQgZ2FsbGVyeSBjb21wb25lbnQuXG4gKlxuICogQHByb3Age0pRdWVyeX0gcHJpbWVHYWxsZXJpYVdpZGdldCBUaGUgRE9NIGVsZW1lbnQgZm9yIHRoZSBjYXB0aW9uIGJlbG93IHRoZSBpbWFnZS5cbiAqXG4gKiBAaW50ZXJmYWNlIHtQcmltZUZhY2VzLndpZGdldC5HYWxsZXJpYUNmZ30gY2ZnIFRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUge0BsaW5rICBHYWxsZXJpYXwgR2FsbGVyaWEgd2lkZ2V0fS5cbiAqIFlvdSBjYW4gYWNjZXNzIHRoaXMgY29uZmlndXJhdGlvbiB2aWEge0BsaW5rIFByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXQuY2ZnfEJhc2VXaWRnZXQuY2ZnfS4gUGxlYXNlIG5vdGUgdGhhdCB0aGlzXG4gKiBjb25maWd1cmF0aW9uIGlzIHVzdWFsbHkgbWVhbnQgdG8gYmUgcmVhZC1vbmx5IGFuZCBzaG91bGQgbm90IGJlIG1vZGlmaWVkLlxuICogQGV4dGVuZHMge1ByaW1lRmFjZXMud2lkZ2V0LkRlZmVycmVkV2lkZ2V0Q2ZnfSBjZmdcbiAqXG4gKiBAcHJvcCB7bnVtYmVyfSBjZmcuYWN0aXZlSW5kZXggSW5kZXggb2YgdGhlIGZpcnN0IGl0ZW0uXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2ZnLmZ1bGxTY3JlZW4gV2hldGhlciB0byBkaXNwbGF5IHRoZSBjb21wb25lbnQgb24gZnVsbHNjcmVlbi5cbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy5jbG9zZUljb24gQ2xvc2UgaWNvbiBvbiBmdWxsc2NyZWVuIG1vZGUuXG4gKiBAcHJvcCB7bnVtYmVyfSBjZmcubnVtVmlzaWJsZSBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UuXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2ZnLnNob3dUaHVtYm5haWxzIFdoZXRoZXIgdG8gZGlzcGxheSB0aHVtYm5haWwgY29udGFpbmVyLlxuICogQHByb3Age2Jvb2xlYW59IGNmZy5zaG93SW5kaWNhdG9ycyBXaGV0aGVyIHRvIGRpc3BsYXkgaW5kaWNhdG9yIGNvbnRhaW5lci5cbiAqIEBwcm9wIHtib29sZWFufSBjZmcuc2hvd0luZGljYXRvcnNPbkl0ZW0gV2hlbiBlbmFibGVkLCBpbmRpY2F0b3IgY29udGFpbmVyIGlzIGRpc3BsYXllZCBvbiBpdGVtIGNvbnRhaW5lci5cbiAqIEBwcm9wIHtib29sZWFufSBjZmcuc2hvd0NhcHRpb24gV2hldGhlciB0byBkaXNwbGF5IGNhcHRpb24gY29udGFpbmVyLlxuICogQHByb3Age2Jvb2xlYW59IGNmZy5zaG93SXRlbU5hdmlnYXRvcnMgV2hldGhlciB0byBkaXNwbGF5IG5hdmlnYXRpb24gYnV0dG9ucyBpbiBpdGVtIGNvbnRhaW5lci5cbiAqIEBwcm9wIHtib29sZWFufSBjZmcuc2hvd1RodW1ibmFpbE5hdmlnYXRvcnMgV2hldGhlciB0byBkaXNwbGF5IG5hdmlnYXRpb24gYnV0dG9ucyBpbiB0aHVtYm5haWwgY29udGFpbmVyLlxuICogQHByb3Age2Jvb2xlYW59IGNmZy5zaG93SXRlbU5hdmlnYXRvcnNPbkhvdmVyIFdoZXRoZXIgdG8gZGlzcGxheSBuYXZpZ2F0aW9uIGJ1dHRvbnMgb24gaXRlbSBjb250YWluZXIncyBob3Zlci5cbiAqIEBwcm9wIHtib29sZWFufSBjZmcuY2hhbmdlSXRlbU9uSW5kaWNhdG9ySG92ZXIgV2hlbiBlbmFibGVkLCBpdGVtIGlzIGNoYW5nZWQgb24gaW5kaWNhdG9yIGl0ZW0ncyBob3Zlci5cbiAqIEBwcm9wIHtib29sZWFufSBjZmcuY2lyY3VsYXIgRGVmaW5lcyBpZiBzY3JvbGxpbmcgd291bGQgYmUgaW5maW5pdGUuXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2ZnLmF1dG9QbGF5IEl0ZW1zIGFyZSBkaXNwbGF5ZWQgd2l0aCBhIHNsaWRlc2hvdyBpbiBhdXRvUGxheSBtb2RlLlxuICogQHByb3Age251bWJlcn0gY2ZnLnRyYW5zaXRpb25JbnRlcnZhbCBUaW1lIGluIG1pbGxpc2Vjb25kcyB0byBzY3JvbGwgaXRlbXMuXG4gKiBAcHJvcCB7c3RyaW5nfSBjZmcudGh1bWJuYWlsc1Bvc2l0aW9uIFBvc2l0aW9uIG9mIHRodW1ibmFpbHMuIFZhbGlkIHZhbHVlcyBhcmUgXCJib3R0b21cIiwgXCJ0b3BcIiwgXCJsZWZ0XCIgYW5kIFwicmlnaHRcIi5cbiAqIEBwcm9wIHtzdHJpbmd9IGNmZy52ZXJ0aWNhbFZpZXdQb3J0SGVpZ2h0IEhlaWdodCBvZiB0aGUgdmlld3BvcnQgaW4gdmVydGljYWwgbGF5b3V0LlxuICogQHByb3Age3N0cmluZ30gY2ZnLmluZGljYXRvcnNQb3NpdGlvbiBQb3NpdGlvbiBvZiBpbmRpY2F0b3JzLiBWYWxpZCB2YWx1ZXMgYXJlIFwiYm90dG9tXCIsIFwidG9wXCIsIFwibGVmdFwiIGFuZCBcInJpZ2h0XCIuXG4gKiBAcHJvcCB7e2JyZWFrcG9pbnQ6c3RyaW5nLCBudW1WaXNpYmxlOm51bWJlcn1bXX0gY2ZnLnJlc3BvbnNpdmVPcHRpb25zIEEgbW9kZWwgb2Ygb3B0aW9ucyBmb3IgcmVzcG9uc2l2ZSBkZXNpZ24uXG4gKi9cbmV4cG9ydCBjbGFzcyBHYWxsZXJpYSBleHRlbmRzIERlZmVycmVkV2lkZ2V0IHtcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLlBhcnRpYWxXaWRnZXRDZmc8VENmZz59IGNmZ1xuICAgICAqL1xuICAgIGluaXQoY2ZnKSB7XG4gICAgICAgIHN1cGVyLmluaXQoY2ZnKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2ZnLnNlbGVjdG9yID0gdGhpcy5qcUlkO1xuXG4gICAgICAgIHRoaXMucmVuZGVyRGVmZXJyZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5jbHVkZVxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIF9yZW5kZXIoKSB7XG4gICAgICAgIHRoaXMucHJpbWVHYWxsZXJpYVdpZGdldCA9IHRoaXMuanEuZ2FsbGVyaWEodGhpcy5jZmcpLmRhdGEoJ3ByaW1lLWdhbGxlcmlhJyk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLlBhcnRpYWxXaWRnZXRDZmc8VENmZz59IGNmZ1xuICAgICAqL1xuICAgIHJlZnJlc2goY2ZnKSB7XG4gICAgICAgIGlmKHRoaXMucHJpbWVHYWxsZXJpYVdpZGdldCkge1xuICAgICAgICAgICAgdGhpcy5wcmltZUdhbGxlcmlhV2lkZ2V0LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnJlZnJlc2goY2ZnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcblxuICAgICAgICBpZiAodGhpcy5wcmltZUdhbGxlcmlhV2lkZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnByaW1lR2FsbGVyaWFXaWRnZXQuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERpc3BsYXlzIGNvbnRlbnQgaW4gZnVsbHNjcmVlbiBtb2RlLiBUaGUgaW5kZXggd2lsbCBjb3JyZXNwb25kIHRvIHRoZSBpdGVtIHRvIGJlIHNob3duLCBvdGhlcndpc2UsXG4gICAgICogaXQgd2lsbCBkZWZhdWx0IHRvIHRoZSBsYXN0IGxvYWRlZCBpbWFnZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2luZGV4XSBvcHRpb25hbCBpbmRleCBvZiB0aGUgaXRlbSB0byBzaG93XG4gICAgICovXG4gICAgc2hvdyhpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5wcmltZUdhbGxlcmlhV2lkZ2V0LnNldFN0YXRlKHsgYWN0aXZlSW5kZXg6IGluZGV4IH0pOyBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByaW1lR2FsbGVyaWFXaWRnZXQuc2hvdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGVzIGNvbnRlbnQgb24gZnVsbHNjcmVlbiBtb2RlLlxuICAgICAqL1xuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMucHJpbWVHYWxsZXJpYVdpZGdldC5oaWRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZXMgdG8gdGhlIG5leHQgY29udGVudCB0aGF0IGNvbWVzIGFmdGVyIHRoZSBjdXJyZW50bHkgc2hvd24gY29udGVudC5cbiAgICAgKi9cbiAgICBuZXh0KCkge1xuICAgICAgICB0aGlzLnByaW1lR2FsbGVyaWFXaWRnZXQubmV4dCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmVzIHRvIHRoZSBwcmV2aW91cyBjb250ZW50IHRoYXQgY29tZXMgYmVmb3JlIHRoZSBjdXJyZW50bHkgc2hvd24gY29udGVudC5cbiAgICAgKi9cbiAgICBwcmV2KCkge1xuICAgICAgICB0aGlzLnByaW1lR2FsbGVyaWFXaWRnZXQucHJldigpO1xuICAgIH1cbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7QUFPQSxFQUFFLE9BQU8sa0JBQWtCO0FBQUEsRUFFdkIsU0FBUztBQUFBLElBQ0wsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFB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LFVBQVU7QUFBQSxNQUNYO0FBQUEsSUFJSjtBQUVBLFNBQUssVUFBVSxPQUFPLEVBQUUsT0FBTyxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQjtBQUV4RSxXQUFPLEtBQUssVUFBVSxRQUFRLGtDQUFrQztBQUFBLEVBQ3BFO0FBQUEsRUFFQSxTQUFTLFdBQVk7QUFDakIsUUFBSSxVQUFVLEtBQUssZUFBZTtBQUVsQyxZQUFRLEtBQUssbURBQW1EO0FBQUEsRUFDcEU7QUFDSixDQUFDOzs7QUMvYk0sSUFBTSxXQUFOLGNBQXVCLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPekMsS0FBSyxLQUFLO0FBQ04sVUFBTSxLQUFLLEdBQUc7QUFFZCxTQUFLLElBQUksV0FBVyxLQUFLO0FBRXpCLFNBQUssZUFBZTtBQUFBLEVBQ3hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFRQSxVQUFVO0FBQ04sU0FBSyxzQkFBc0IsS0FBSyxHQUFHLFNBQVMsS0FBSyxHQUFHLEVBQUUsS0FBSyxnQkFBZ0I7QUFBQSxFQUMvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLFFBQVEsS0FBSztBQUNULFFBQUcsS0FBSyxxQkFBcUI7QUFDekIsV0FBSyxvQkFBb0IsUUFBUTtBQUFBLElBQ3JDO0FBRUEsVUFBTSxRQUFRLEdBQUc7QUFBQSxFQUNyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxVQUFVO0FBQ04sVUFBTSxRQUFRO0FBRWQsUUFBSSxLQUFLLHFCQUFxQjtBQUMxQixXQUFLLG9CQUFvQixRQUFRO0FBQUEsSUFDckM7QUFBQSxFQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsS0FBSyxPQUFPO0FBQ1IsUUFBSSxVQUFVLFFBQVc7QUFDckIsV0FBSyxvQkFBb0IsU0FBUyxFQUFFLGFBQWEsTUFBTSxDQUFDO0FBQUEsSUFDNUQ7QUFDQSxTQUFLLG9CQUFvQixLQUFLO0FBQUEsRUFDbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLE9BQU87QUFDSCxTQUFLLG9CQUFvQixLQUFLO0FBQUEsRUFDbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLE9BQU87QUFDSCxTQUFLLG9CQUFvQixLQUFLO0FBQUEsRUFDbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLE9BQU87QUFDSCxTQUFLLG9CQUFvQixLQUFLO0FBQUEsRUFDbEM7QUFDSjsiLAogICJuYW1lcyI6IFtdCn0K

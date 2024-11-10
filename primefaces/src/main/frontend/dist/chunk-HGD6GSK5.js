// src/ajaxstatus/ajaxstatus.js
var AjaxStatus = class extends BaseWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    this.hasSuccessOrErrorFacet = false;
    this.bind();
  }
  /**
   * Listen to the relevant events on the document element.
   * @private
   */
  bind() {
    var $this = this;
    var namespace = ".status" + this.id;
    $(document).on("pfAjaxStart" + namespace, function() {
      $this.timeout = PrimeFaces.queueTask(function() {
        $this.trigger("start", arguments);
      }, $this.cfg.delay);
    }).on("pfAjaxError" + namespace, function(e, xhr, settings, error) {
      $this.trigger("error", [xhr, settings, error]);
    }).on("pfAjaxSuccess" + namespace, function(e, xhr, settings) {
      $this.trigger("success", [xhr, settings]);
    }).on("pfAjaxComplete" + namespace, function(e, xhr, settings, args) {
      if ($this.timeout && args && !args.redirect) {
        $this.deleteTimeout();
      }
      $this.trigger("complete", [xhr, settings, args]);
    });
    this.addDestroyListener(function() {
      $(document).off(namespace);
    });
    if (window.jsf && jsf.ajax) {
      jsf.ajax.addOnEvent(function(data) {
        if (data.status === "begin") {
          $this.timeout = PrimeFaces.queueTask(function() {
            $this.trigger("start", arguments);
          }, $this.cfg.delay);
        } else if (data.status === "complete") {
        } else if (data.status === "success") {
          $this.deleteTimeout();
          $this.trigger("success", arguments);
          $this.trigger("facesComplete", arguments);
        }
      });
      jsf.ajax.addOnError(function(data) {
        $this.deleteTimeout();
        $this.trigger("error", arguments);
        $this.trigger("facesComplete", arguments);
      });
    }
  }
  /**
   * Triggers the given event by invoking the event handler, usually defined on the `<p:ajaxStatus/>` tag.
   * @template {PrimeFaces.widget.AjaxStatus.AjaxStatusEventType} K A name of one of the supported events that should
   * be triggered.
   * @param {K} event A name of one of the supported events that should
   * be triggered.
   * @param {Parameters<PrimeFaces.widget.AjaxStatus.EventToCallbackMap[K]>} args Arguments that are passed to the
   * event handler.
   */
  trigger(event, args) {
    var callback = this.cfg[event];
    if (callback) {
      callback.apply(document, args);
    }
    var facets = this.jq.children();
    var facet = facets.filter(this.toFacetId(event));
    var hasFacet = facet && facet.length > 0;
    switch (event) {
      case "start":
        facets.hide();
        if (hasFacet) {
          facet.show();
        }
        break;
      case "success":
      case "error":
        if (hasFacet) {
          facets.hide();
          facet.show();
          this.hasSuccessOrErrorFacet = true;
        }
        break;
      case "complete":
        var pfArgs = args[2];
        if (!pfArgs || pfArgs.redirect) {
          return;
        }
      // Fallthrough intentional to handle both PF and JSF complete events
      case "facesComplete":
        if (this.hasSuccessOrErrorFacet === false || hasFacet) {
          facets.hide();
        }
        if (hasFacet) {
          facet.show();
        }
        break;
    }
  }
  /**
   * Finds the facet ID of the given event.
   * @private
   * @param {PrimeFaces.widget.AjaxStatus.AjaxStatusEventType} event One of the supported event
   * @return {string} The ID of the facet element for the given event
   */
  toFacetId(event) {
    if (event === "facesComplete") {
      event = "complete";
    }
    return this.jqId + "_" + event;
  }
  /**
   * Clears the ste-timeout timer for the delay.
   * @private
   */
  deleteTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
};

// src/poll/poll.js
var Poll = class extends BaseWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  init(cfg) {
    super.init(cfg);
    this.active = false;
    if (this.cfg.autoStart) {
      this.start();
    }
  }
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  refresh(cfg) {
    this.stop();
    super.refresh(cfg);
  }
  /**
   * @override
   * @inheritdoc
   */
  destroy() {
    super.destroy();
    this.stop();
  }
  /**
   * Starts the polling, sending AJAX requests in periodic intervals.
   * @return {boolean} `true` if polling was started, or `false` otherwise.
   */
  start() {
    if (!this.active) {
      if (this.cfg.onActivated && this.cfg.onActivated.call(this) === false) {
        return false;
      }
      var frequency = this.cfg.intervalType == "millisecond" ? this.cfg.frequency : this.cfg.frequency * 1e3;
      this.timer = setInterval(this.cfg.fn, frequency);
      this.active = true;
    }
    return true;
  }
  /**
   * Stops the polling so that no more AJAX requests are made.
   * @return {boolean} `true` if polling wsa stopped, or `false` otherwise.
   */
  stop() {
    if (this.active) {
      if (this.cfg.onDeactivated && this.cfg.onDeactivated.call(this) === false) {
        return false;
      }
      clearInterval(this.timer);
      this.active = false;
    }
    return true;
  }
  /**
   * Checks whether polling is active or whether it was stopped.
   * @return {boolean} `true` if polling is currently active, or `false` otherwise.
   */
  isActive() {
    return this.active;
  }
};

// src/core/core.widget.registry.ts
var LoadingWidgets = /* @__PURE__ */ new Map();
var StaticLoader = {
  load: (callback) => {
    callback({ status: "fulfilled", value: { AjaxStatus, BaseWidget, DeferredWidget, DynamicOverlayWidget, Poll } });
  },
  widgetNames: {
    AjaxStatus: true,
    BaseWidget: true,
    DeferredWidget: true,
    DynamicOverlayWidget: true,
    Poll: true
  }
};
var CommonLoader = {
  load: (callback) => {
    import("./core.widget.common-X3VK3A7I.js").then(
      (widgets) => callback({ status: "fulfilled", value: widgets }),
      (error) => callback({ status: "rejected", reason: error })
    );
  },
  widgetNames: {
    AccordionPanel: true,
    AutoComplete: true,
    BaseTree: true,
    BlockUI: true,
    BreadCrumb: true,
    Button: true,
    Carousel: true,
    CascadeSelect: true,
    Chip: true,
    Chips: true,
    ColumnToggler: true,
    CommandButton: true,
    CommandLink: true,
    ContextMenu: true,
    ConfirmDialog: true,
    ConfirmPopup: true,
    Dashboard: true,
    DataGrid: true,
    DataList: true,
    DataScroller: true,
    DataTable: true,
    DataView: true,
    DefaultCommand: true,
    Dialog: true,
    Draggable: true,
    Droppable: true,
    DynamicDialog: true,
    Effect: true,
    Growl: true,
    HorizontalTree: true,
    Inplace: true,
    Fieldset: true,
    FrozenDataTable: true,
    InputText: true,
    InputTextarea: true,
    LinkButton: true,
    Menu: true,
    Menubar: true,
    MenuButton: true,
    MegaMenu: true,
    Message: true,
    Messages: true,
    MultiSelectListbox: true,
    NotificationBar: true,
    OrderList: true,
    OutputPanel: true,
    OverlayPanel: true,
    Paginator: true,
    Panel: true,
    PanelMenu: true,
    Password: true,
    PickList: true,
    PlainMenu: true,
    ProgressBar: true,
    Rating: true,
    Resizable: true,
    ScrollTop: true,
    SelectBooleanButton: true,
    SelectBooleanCheckbox: true,
    SelectCheckboxMenu: true,
    SelectListbox: true,
    SelectManyButton: true,
    SelectManyCheckbox: true,
    SelectManyMenu: true,
    SelectOneButton: true,
    SelectOneListbox: true,
    SelectOneMenu: true,
    SelectOneRadio: true,
    Sidebar: true,
    Slider: true,
    SlideMenu: true,
    SpeedDial: true,
    SplitButton: true,
    Spinner: true,
    Splitter: true,
    Spotlight: true,
    StaticMessage: true,
    Sticky: true,
    TabMenu: true,
    TagCloud: true,
    TabView: true,
    TieredMenu: true,
    Tooltip: true,
    ToggleSwitch: true,
    TreeTable: true,
    TriStateCheckbox: true,
    VerticalTree: true,
    Wizard: true
  }
};
function recordEntries(record) {
  return Object.entries(record);
}
function SingleLoader(widgetName, load) {
  return {
    load: (callback) => {
      load().then(
        (widgets) => callback({ status: "fulfilled", value: widgets }),
        (error) => callback({ status: "rejected", reason: error })
      );
    },
    widgetNames: { [widgetName]: true }
  };
}
function insertLoadedWidgets(loader, result) {
  var _a;
  const allCallbacks = [];
  for (const [widgetName, include] of recordEntries(loader.widgetNames)) {
    if (!include) {
      continue;
    }
    const registryEntry = getWidgetRegistryEntry(widgetName);
    if (registryEntry === void 0) {
      PrimeFaces.error(`Widget '${widgetName}' not registered`);
      continue;
    }
    if (registryEntry.value !== void 0) {
      PrimeFaces.warn(`Widget '${widgetName}' already loaded (or failed to load)`);
      continue;
    }
    let widgetResult;
    if (result.status === "fulfilled") {
      const widget = result.value[widgetName];
      widgetResult = widget !== void 0 ? { status: "fulfilled", value: widget } : { status: "rejected", reason: new Error(`Widget '${widgetName}' missing in the loader result!`) };
    } else {
      widgetResult = result;
    }
    registryEntry.value = widgetResult;
    const callbacks = (_a = LoadingWidgets.get(widgetName)) != null ? _a : [];
    LoadingWidgets.delete(widgetName);
    allCallbacks.push(...callbacks.map((callback) => () => callback(widgetResult)));
  }
  for (const callback of allCallbacks) {
    try {
      callback();
    } catch (error) {
      PrimeFaces.error("Error in widget callback: " + error);
    }
  }
}
function getWidgetRegistryEntry(widgetName) {
  return WidgetRegistry[widgetName];
}
function getWidgetIfPresent(widgetName) {
  var _a;
  const entry = getWidgetRegistryEntry(widgetName);
  return ((_a = entry == null ? void 0 : entry.value) == null ? void 0 : _a.status) === "fulfilled" ? entry.value.value : void 0;
}
function loadWidget(widgetName, callback) {
  const registryEntry = getWidgetRegistryEntry(widgetName);
  if (registryEntry === void 0) {
    callback({ status: "rejected", reason: new Error(`Widget ${widgetName} not registered`) });
    return;
  }
  const loadResult = registryEntry.value;
  if (loadResult !== void 0) {
    callback(loadResult);
    return;
  }
  const alreadyLoading = LoadingWidgets.get(widgetName);
  if (alreadyLoading !== void 0) {
    alreadyLoading.push(callback);
    return;
  }
  const loader = registryEntry.loader;
  if (loader !== void 0) {
    for (const [widgetName2, include] of recordEntries(loader.widgetNames)) {
      if (include) {
        LoadingWidgets.set(widgetName2, [callback]);
      }
    }
    loader.load((result) => insertLoadedWidgets(loader, result));
    return;
  }
  callback({ status: "rejected", reason: new Error("Widget class '" + widgetName + "' not found!") });
}
var WidgetRegistry = {
  AccordionPanel: { value: void 0, loader: CommonLoader },
  AjaxStatus: { value: void 0, loader: StaticLoader },
  AutoComplete: { value: void 0, loader: CommonLoader },
  BaseTree: { value: void 0, loader: CommonLoader },
  BaseWidget: { value: void 0, loader: StaticLoader },
  BlockUI: { value: void 0, loader: CommonLoader },
  BreadCrumb: { value: void 0, loader: CommonLoader },
  Button: { value: void 0, loader: CommonLoader },
  CascadeSelect: { value: void 0, loader: CommonLoader },
  Calendar: { value: void 0, loader: SingleLoader("Calendar", () => import("./4-calendar-JB4OGFR2.js")) },
  Captcha: { value: void 0, loader: SingleLoader("Captcha", () => import("./captcha-AAFXUBSU.js")) },
  Carousel: { value: void 0, loader: CommonLoader },
  Chart: { value: void 0, loader: SingleLoader("Chart", () => import("./9-chartjs-widget-NALKG6HK.js")) },
  Chip: { value: void 0, loader: CommonLoader },
  Chips: { value: void 0, loader: CommonLoader },
  Clock: { value: void 0, loader: SingleLoader("Clock", () => import("./clock-RVMVSURX.js")) },
  ColorPicker: { value: void 0, loader: SingleLoader("ColorPicker", () => import("./1-colorpicker-U4ZZABRB.js")) },
  ColumnToggler: { value: void 0, loader: CommonLoader },
  CommandButton: { value: void 0, loader: CommonLoader },
  CommandLink: { value: void 0, loader: CommonLoader },
  ConfirmPopup: { value: void 0, loader: CommonLoader },
  ConfirmDialog: { value: void 0, loader: CommonLoader },
  ContextMenu: { value: void 0, loader: CommonLoader },
  Dashboard: { value: void 0, loader: CommonLoader },
  DataView: { value: void 0, loader: CommonLoader },
  DataGrid: { value: void 0, loader: CommonLoader },
  DataList: { value: void 0, loader: CommonLoader },
  DataScroller: { value: void 0, loader: CommonLoader },
  DataTable: { value: void 0, loader: CommonLoader },
  DatePicker: { value: void 0, loader: SingleLoader("DatePicker", () => import("./1-datepicker-VSHBUQDR.js")) },
  DefaultCommand: { value: void 0, loader: CommonLoader },
  DeferredWidget: { value: void 0, loader: StaticLoader },
  Diagram: { value: void 0, loader: SingleLoader("Diagram", () => import("./1-diagram-FGMVJQY6.js")) },
  Dialog: { value: void 0, loader: CommonLoader },
  Dock: { value: void 0, loader: SingleLoader("Dock", () => import("./dock-VFFLT5O5.js")) },
  Draggable: { value: void 0, loader: CommonLoader },
  Droppable: { value: void 0, loader: CommonLoader },
  DynamicDialog: { value: void 0, loader: CommonLoader },
  DynamicOverlayWidget: { value: void 0, loader: StaticLoader },
  Effect: { value: void 0, loader: CommonLoader },
  Fieldset: { value: void 0, loader: CommonLoader },
  FileUpload: { value: void 0, loader: SingleLoader("FileUpload", () => import("./2-fileupload-MH5EJ5GX.js")) },
  FrozenDataTable: { value: void 0, loader: CommonLoader },
  Galleria: { value: void 0, loader: SingleLoader("Galleria", () => import("./1-galleria-OALTV6CC.js")) },
  GMap: { value: void 0, loader: SingleLoader("GMap", () => import("./gmap-5JFJDC4B.js")) },
  Growl: { value: void 0, loader: CommonLoader },
  HorizontalTree: { value: void 0, loader: CommonLoader },
  IdleMonitor: { value: void 0, loader: SingleLoader("IdleMonitor", () => import("./1-idlemonitor-DBZURIOZ.js")) },
  ImageCompare: { value: void 0, loader: SingleLoader("ImageCompare", () => import("./imagecompare-widget-TA5SSIFO.js")) },
  ImageCropper: { value: void 0, loader: SingleLoader("ImageCropper", () => import("./imagecropper-ZTPPMLXD.js")) },
  ImageSwitch: { value: void 0, loader: SingleLoader("ImageSwitch", () => import("./1-imageswitch-KHNYQ6EN.js")) },
  Inplace: { value: void 0, loader: CommonLoader },
  InputMask: { value: void 0, loader: SingleLoader("InputMask", () => import("./1-inputmask-NRX5DKXD.js")) },
  InputNumber: { value: void 0, loader: SingleLoader("InputNumber", () => import("./1-inputnumber-RVWIZYAC.js")) },
  InputText: { value: void 0, loader: CommonLoader },
  InputTextarea: { value: void 0, loader: CommonLoader },
  Keyboard: { value: void 0, loader: SingleLoader("Keyboard", () => import("./2-keyboard-VBSCN46U.js")) },
  KeyFilter: { value: void 0, loader: SingleLoader("KeyFilter", () => import("./1-keyfilter-FXLGGUPG.js")) },
  Knob: { value: void 0, loader: SingleLoader("Knob", () => import("./2-knob-B3IW55ZM.js")) },
  Lifecycle: { value: void 0, loader: SingleLoader("Lifecycle", () => import("./lifecycle-XQ2EXPAI.js")) },
  LinkButton: { value: void 0, loader: CommonLoader },
  Log: { value: void 0, loader: SingleLoader("Log", () => import("./log-FZHHO37K.js")) },
  MegaMenu: { value: void 0, loader: CommonLoader },
  Menu: { value: void 0, loader: CommonLoader },
  Menubar: { value: void 0, loader: CommonLoader },
  MenuButton: { value: void 0, loader: CommonLoader },
  Message: { value: void 0, loader: CommonLoader },
  Messages: { value: void 0, loader: CommonLoader },
  Mindmap: { value: void 0, loader: SingleLoader("Mindmap", () => import("./mindmap-X6BNG5LY.js")) },
  MultiSelectListbox: { value: void 0, loader: CommonLoader },
  NotificationBar: { value: void 0, loader: CommonLoader },
  OrderList: { value: void 0, loader: CommonLoader },
  Organigram: { value: void 0, loader: SingleLoader("Organigram", () => import("./organigram-EXSNBDYA.js")) },
  OutputPanel: { value: void 0, loader: CommonLoader },
  OverlayPanel: { value: void 0, loader: CommonLoader },
  Paginator: { value: void 0, loader: CommonLoader },
  Panel: { value: void 0, loader: CommonLoader },
  PanelMenu: { value: void 0, loader: CommonLoader },
  Password: { value: void 0, loader: CommonLoader },
  PhotoCam: { value: void 0, loader: SingleLoader("PhotoCam", () => import("./1-photocam-FYNFDU4D.js")) },
  PickList: { value: void 0, loader: CommonLoader },
  PlainMenu: { value: void 0, loader: CommonLoader },
  Poll: { value: void 0, loader: StaticLoader },
  ProgressBar: { value: void 0, loader: CommonLoader },
  Rating: { value: void 0, loader: CommonLoader },
  Resizable: { value: void 0, loader: CommonLoader },
  Schedule: { value: void 0, loader: SingleLoader("Schedule", () => import("./1-schedule-3ZN3QD2Z.js")) },
  ScrollTop: { value: void 0, loader: CommonLoader },
  ScrollPanel: { value: void 0, loader: SingleLoader("ScrollPanel", () => import("./1-scrollpanel-3OK3VIDZ.js")) },
  SelectBooleanButton: { value: void 0, loader: CommonLoader },
  SelectBooleanCheckbox: { value: void 0, loader: CommonLoader },
  SelectCheckboxMenu: { value: void 0, loader: CommonLoader },
  SelectListbox: { value: void 0, loader: CommonLoader },
  SelectManyButton: { value: void 0, loader: CommonLoader },
  SelectManyCheckbox: { value: void 0, loader: CommonLoader },
  SelectManyMenu: { value: void 0, loader: CommonLoader },
  SelectOneButton: { value: void 0, loader: CommonLoader },
  SelectOneMenu: { value: void 0, loader: CommonLoader },
  SelectOneListbox: { value: void 0, loader: CommonLoader },
  SelectOneRadio: { value: void 0, loader: CommonLoader },
  Sidebar: { value: void 0, loader: CommonLoader },
  Signature: { value: void 0, loader: SingleLoader("Signature", () => import("./1-widget-B4L3S535.js")) },
  SimpleFileUpload: { value: void 0, loader: SingleLoader("SimpleFileUpload", () => import("./3-fileupload.simple-ACQHIMWF.js")) },
  SlideMenu: { value: void 0, loader: CommonLoader },
  Slider: { value: void 0, loader: CommonLoader },
  SpeedDial: { value: void 0, loader: CommonLoader },
  Spinner: { value: void 0, loader: CommonLoader },
  Splitter: { value: void 0, loader: CommonLoader },
  SplitButton: { value: void 0, loader: CommonLoader },
  Spotlight: { value: void 0, loader: CommonLoader },
  Stack: { value: void 0, loader: SingleLoader("Stack", () => import("./stack-ZYSWCAB2.js")) },
  StaticMessage: { value: void 0, loader: CommonLoader },
  Sticky: { value: void 0, loader: CommonLoader },
  TabMenu: { value: void 0, loader: CommonLoader },
  TabView: { value: void 0, loader: CommonLoader },
  TagCloud: { value: void 0, loader: CommonLoader },
  Terminal: { value: void 0, loader: SingleLoader("Terminal", () => import("./terminal-KSBKO2IJ.js")) },
  TextEditor: { value: void 0, loader: SingleLoader("TextEditor", () => import("./1-texteditor-HJNTZB56.js")) },
  TieredMenu: { value: void 0, loader: CommonLoader },
  Timeline: { value: void 0, loader: SingleLoader("Timeline", () => import("./1-timeline-UJQ27QM7.js")) },
  Tooltip: { value: void 0, loader: CommonLoader },
  TreeTable: { value: void 0, loader: CommonLoader },
  TriStateCheckbox: { value: void 0, loader: CommonLoader },
  ToggleSwitch: { value: void 0, loader: CommonLoader },
  VerticalTree: { value: void 0, loader: CommonLoader },
  Wizard: { value: void 0, loader: CommonLoader }
};

// src/core/core.widget.js
PrimeFaces.widget = {};
var BaseWidget = class {
  /**
   * Creates a new instance of this widget. Please note that you should __NOT__ override this constructor.
   * Instead, override the {@link init} method, which is called by the framework once the widget instance was
   * created.
   *
   * Note: This is mainly due to legacy concerns. We may remove the init method in the future and simply use the
   * constructor.
   *
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg The widget configuration to be used for this widget
   * instance. This widget configuration is usually created on the server by the `javax.faces.render.Renderer` for
   * this component.
   */
  constructor(cfg) {
    this.init(cfg);
  }
  /**
   * A widget class should not declare an explicit constructor, the default constructor provided by this base
   * widget should be used. Instead, override this initialize method which is called after the widget instance
   * was constructed. You can use this method to perform any initialization that is required. For widgets that
   * need to create custom HTML on the client-side this is also the place where you should call your render
   * method.
   *
   * Please make sure to call the super method first before adding your own custom logic to the init method:
   *
   * ```javascript
   * import { BaseWidget } from "@primefaces/primefaces";
   * class MyWidget extends BaseWidget {
   *   init: function(cfg) {
   *     super.init(cfg);
   *     // custom initialization
   *   }
   * }
   * ```
   *
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg The widget configuration to be used for this widget instance.
   * This widget configuration is usually created on the server by the `javax.faces.render.Renderer` for this
   * component.
   */
  init(cfg) {
    this.cfg = cfg;
    this.id = cfg.id;
    if (Array.isArray(this.id)) {
      this.jqId = $.map(this.id, function(id) {
        return PrimeFaces.escapeClientId(id);
      }).join(",");
    } else {
      this.jqId = PrimeFaces.escapeClientId(this.id);
    }
    this.jq = $(this.jqId);
    this.widgetVar = cfg.widgetVar;
    this.destroyListeners = [];
    this.refreshListeners = [];
    this.removeScriptElement(this.id);
    if (this.widgetVar) {
      var $this = this;
      this.jq.on("remove", function() {
        if (!PrimeFaces.detachedWidgets.includes($this.widgetVar)) {
          PrimeFaces.detachedWidgets.push($this.widgetVar);
        }
      });
    }
  }
  /**
   * Used in ajax updates, reloads the widget configuration.
   *
   * When an AJAX call is made and this component is updated, the DOM element is replaced with the newly rendered
   * content. However, no new instance of the widget is created. Instead, after the DOM element was replaced, this
   * method is called with the new widget configuration from the server. This makes it possible to persist
   * client-side state during an update, such as the currently selected tab.
   *
   * Please note that instead of overriding this method, you should consider adding a refresh listener instead
   * via {@link addRefreshListener}. This has the advantage of letting you add multiple listeners, and makes it
   * possible to add additional listeners from code outside this widget.
   *
   * By default, this method calls all refresh listeners, then reinitializes the widget by calling the `init`
   * method.
   *
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg The new widget configuration from the server.
   * @return {unknown} The value as returned by the `init` method, which is often `undefined`.
   */
  refresh(cfg) {
    this.destroyListeners = [];
    if (this.refreshListeners) {
      for (var i = 0; i < this.refreshListeners.length; i++) {
        var refreshListener = this.refreshListeners[i];
        refreshListener.call(this, this);
      }
    }
    this.refreshListeners = [];
    var returnValue = this.init(cfg);
    return returnValue;
  }
  /**
   * Will be called after an AJAX request if the widget container will be detached.
   *
   * When an AJAX call is made and this component is updated, the DOM element is replaced with the newly rendered
   * content. When the element is removed from the DOM by the update, the DOM element is detached from the DOM and
   * this method gets called.
   *
   * Please note that instead of overriding this method, you should consider adding a destroy listener instead
   * via {@link addDestroyListener}. This has the advantage of letting you add multiple listeners, and makes it
   * possible to add additional listeners from code outside this widget.
   *
   * By default, this method just calls all destroy listeners.
   */
  destroy() {
    if (this.cfg.preDestroy) {
      this.cfg.preDestroy.call(this, this);
    }
    PrimeFaces.debug("Destroyed detached widget: " + this.widgetVar);
    if (this.destroyListeners) {
      for (var i = 0; i < this.destroyListeners.length; i++) {
        var destroyListener = this.destroyListeners[i];
        destroyListener.call(this, this);
      }
    }
    this.destroyListeners = [];
    for (var key in this) {
      var jq = this[key];
      if (jq instanceof jQuery) {
        jq.children().off();
        jq.off();
      }
    }
  }
  /**
   * Checks if this widget is detached, ie whether the HTML element of this widget is currently contained within
   * the DOM (the HTML body element). A widget may become detached during an AJAX update, and it may remain
   * detached in case the update removed this component from the component tree.
   * @return {boolean} `true` if this widget is currently detached, or `false` otherwise.
   */
  isDetached() {
    var element = document.getElementById(this.id);
    if (typeof element !== "undefined" && element !== null) {
      return false;
    }
    return true;
  }
  /**
   * Each widget has got a container element, this method returns that container. This container element is
   * usually also the element whose ID is the client-side ID of the JSF component.
   * @return {JQuery} The jQuery instance representing the main HTML container element of this widget.
   */
  getJQ() {
    return this.jq;
  }
  /**
   * Removes the widget's script block from the DOM. Currently, the ID of this script block consists of the
   * client-side ID of this widget with the prefix `_s`, but this is subject to change.
   *
   * @param {string | string[]} clientId The client-side ID of the widget.
   */
  removeScriptElement(clientId) {
    if (Array.isArray(clientId)) {
      $.each(clientId, function(_, id) {
        $(PrimeFaces.escapeClientId(id) + "_s").remove();
      });
    } else {
      $(PrimeFaces.escapeClientId(clientId) + "_s").remove();
    }
  }
  /**
   * Each widget may have one or several behaviors attached to it. This method checks whether this widget has got
   * at least one behavior associated with given event name.
   *
   * A behavior is a way for associating client-side scripts with UI components that opens all sorts of
   * possibilities, including client-side validation, DOM and style manipulation, keyboard handling, and more.
   * When the behavior is triggered, the configured JavaScript gets executed.
   *
   * Behaviors are often, but not necessarily, AJAX behavior. When triggered, it initiates a request the server
   * and processes the response once it is received. This enables several features such as updating or replacing
   * elements dynamically. You can add an AJAX behavior via
   * `<p:ajax event="name" actionListener="#{...}" onstart="..." />`.
   *
   * @param {string} event The name of an event to check.
   * @return {boolean} `true` if this widget has the given behavior, `false` otherwise.
   */
  hasBehavior(event) {
    if (this.cfg.behaviors) {
      return this.cfg.behaviors[event] != void 0;
    }
    return false;
  }
  /**
   * Each widget may have one or several behaviors attached to it. This method calls all attached behaviors for
   * the given event name. In case no such behavior exists, this method does nothing and returns immediately.
   *
   * A behavior is a way for associating client-side scripts with UI components that opens all sorts of
   * possibilities, including client-side validation, DOM and style manipulation, keyboard handling, and more.
   * When the behavior is triggered, the configured JavaScript gets executed.
   *
   * Behaviors are often, but not necessarily, AJAX behavior. When triggered, it initiates a request the server
   * and processes the response once it is received. This enables several features such as updating or replacing
   * elements dynamically. You can add an AJAX behavior via
   * `<p:ajax event="name" actionListener="#{...}" onstart="..." />`.
   *
   * @param {string} event The name of an event to call.
   * @param {Partial<PrimeFaces.ajax.ConfigurationExtender>} [ext] Additional configuration that is passed to the
   * AJAX request for the server-side callback.
   * @since 7.0
   */
  callBehavior(event, ext) {
    if (this.hasBehavior(event)) {
      this.cfg.behaviors[event].call(this, ext);
    }
  }
  /**
   * Each widget may have one or several behaviors attached to it. This method returns the callback function for
   * the given event.
   *
   * __Note__: Do not call the method directly, the recommended way to invoke a behavior is via
   * {@link callBehavior}.
   *
   * A behavior is a way for associating client-side scripts with UI components that opens all sorts of
   * possibilities, including client-side validation, DOM and style manipulation, keyboard handling, and more.
   * When the behavior is triggered, the configured JavaScript gets executed.
   *
   * Behaviors are often, but not necessarily, AJAX behavior. When triggered, it initiates a request the server
   * and processes the response once it is received. This enables several features such as updating or replacing
   * elements dynamically. You can add an AJAX behavior via
   * `<p:ajax event="name" actionListener="#{...}" onstart="..." />`.
   *
   * @param {string} name The name of an event for which to retrieve the behavior.
   * @return {PrimeFaces.Behavior | null} The behavior with the given name, or `null` if no such behavior
   * exists.
   */
  getBehavior(name) {
    return this.cfg.behaviors ? this.cfg.behaviors[name] : null;
  }
  /**
   * Lets you register a listener that is called before the component is destroyed.
   *
   * When an AJAX call is made and this component is updated, the DOM element is replaced with the newly rendered
   * content. When the element is removed from the DOM by the update, the DOM element is detached from the DOM and
   * all destroy listeners are called. This makes it possible to add listeners from outside the widget code.
   *
   * If you call this method twice with the same listener, it will be registered twice and later also called
   * twice.
   *
   * Note that for this to work, you must not override the `destroy` method; or if you do, call `super`.
   *
   * Also, after this widget was detached is done, all destroy listeners will be unregistered.
   *
   * @param {PrimeFaces.widget.DestroyListener<this>} listener A destroy listener to be registered.
   * @since 7.0
   */
  addDestroyListener(listener) {
    if (!this.destroyListeners) {
      this.destroyListeners = [];
    }
    this.destroyListeners.push(listener);
  }
  /**
   * When an AJAX call is made and this component is updated, the DOM element is replaced with the newly rendered
   * content. However, no new instance of the widget is created. Instead, after the DOM element was replaced, all
   * refresh listeners are called. This makes it possible to add listeners from outside the widget code.
   *
   * If you call this method twice with the same listener, it will be registered twice and later also called
   * twice.
   *
   * Note that for this to work, you must not override the `refresh` method; or if you do, call `super`.
   *
   * Also, after the refresh is done, all refresh listeners will be deregistered. If you added the listeners from
   * within this widget, consider adding the refresh listeners not only in the `init` method, but also again in
   * the `refresh` method after calling `super`.
   *
   * @param {PrimeFaces.widget.RefreshListener<this>} listener A refresh listener to be registered.
   * @since 7.0.0
   */
  addRefreshListener(listener) {
    if (!this.refreshListeners) {
      this.refreshListeners = [];
    }
    this.refreshListeners.push(listener);
  }
  /**
   * Gets the closest parent form for this widget.
   *
   * @return {JQuery} A JQuery instance that either contains the form when found, or an empty JQuery instance when
   * the form could not be found.
   * @since 10.0.0
   */
  getParentForm() {
    return this.jq.closest("form");
  }
  /**
   * Gets the closest parent form ID for this widget lazily so it can be used in AJAX requests.
   *
   * @return {string | undefined} Either the form ID or `undefined` if no form can be found.
   * @since 10.0.0
   */
  getParentFormId() {
    if (this.cfg.formId) {
      return this.cfg.formId;
    }
    var form = this.getParentForm();
    if (form.length > 0) {
      this.cfg.formId = form.attr("id");
    }
    return this.cfg.formId;
  }
};
var DynamicOverlayWidget = class extends BaseWidget {
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg the widget configuraton
   * @param {JQuery} [overlay] The DOM element for the overlay.
   * @param {string} [overlayId] The ID of the overlay, usually the widget ID.
   * @param {JQuery} [target] The DOM element that is the target of this overlay
   */
  init(cfg, overlay, overlayId, target) {
    super.init(cfg);
    if (this.cfg.disabled === true) {
      return;
    }
    if (!overlay) {
      overlay = this.jq;
    }
    if (!overlayId) {
      overlayId = this.id;
    }
    if (!target) {
      target = this.jq;
    }
    const Dialog = getWidgetIfPresent("Dialog");
    var ignoreAppendTo = Dialog !== void 0 && this instanceof Dialog;
    if (!ignoreAppendTo) {
      this.cfg.appendTo = PrimeFaces.utils.resolveAppendTo(this, target, overlay);
    }
    PrimeFaces.utils.registerDynamicOverlay(this, overlay, overlayId);
  }
  /**
   * @override
   * @inheritdoc
   * @param {PrimeFaces.PartialWidgetCfg<TCfg>} cfg
   */
  refresh(cfg) {
    PrimeFaces.utils.removeModal(this, this.modalOverlay);
    this.appendTo = null;
    this.modalOverlay = null;
    super.refresh(cfg);
  }
  /**
   * @override
   * @inheritdoc
   */
  destroy() {
    super.destroy();
    PrimeFaces.utils.removeModal(this);
    this.appendTo = null;
    this.modalOverlay = null;
  }
  /**
   * Enables modality for this widget and creates the modal overlay element, but does not change whether the
   * overlay is currently displayed.
   * @param {JQuery | null} [overlay] The target overlay, if not given default to
   * {@link PrimeFaces.widget.BaseWidget.jq | this.jq}.
   */
  enableModality(overlay) {
    var target = overlay || this.jq;
    this.modalOverlay = PrimeFaces.utils.addModal(
      this,
      target,
      $.proxy(function() {
        return this.getModalTabbables();
      }, this)
    );
  }
  /**
   * Disabled modality for this widget and removes the modal overlay element, but does not change whether the
   * overlay is currently displayed.
   * @param {JQuery | null} [overlay] The target overlay, if not given default to
   * {@link PrimeFaces.widget.BaseWidget.jq | this.jq}.
   */
  disableModality(overlay) {
    var target = overlay || this.jq;
    PrimeFaces.utils.removeModal(this, target);
    this.modalOverlay = null;
  }
  /**
   * This class makes sure a user cannot tab out of the modal and it stops events from targets outside of the
   * overlay element. This requires that we switch back to the modal in case a user tabs out of it. What must
   * be returned by this method are the elements to which the user may switch via tabbing.
   * @protected
   * @return {JQuery} The DOM elements which are allowed to be focused via tabbing. May be an empty `jQuery`
   * instance when the modal contains no tabbable elements, but must not be `undefined`.
   */
  getModalTabbables() {
    return null;
  }
};
var DeferredWidget = class extends BaseWidget {
  /**
   * Call this method in the {@link init} method if you want deferred rendering support. This method checks
   * whether the container of this widget is visible and call {@link _render} only once it is.
   */
  renderDeferred() {
    if (this.jq.is(":visible")) {
      this._render();
      this.postRender();
    } else if (this.jq[0]) {
      var container = this.jq[0].closest(".ui-hidden-container");
      if (container) {
        var $container = $(container);
        if ($container.length) {
          var $this = this;
          this.addDeferredRender(this.id, $container, function() {
            return $this.render();
          });
        }
      }
    }
  }
  /**
   * This render method to check whether the widget container is visible. Do not override this method, or the
   * deferred widget functionality may not work properly anymore.
   *
   * @return {PrimeFaces.ReturnOrVoid<boolean|undefined>} `true` if the widget container is visible, `false` or
   * `undefined` otherwise.
   */
  render() {
    if (this.jq.is(":visible")) {
      this._render();
      this.postRender();
      return true;
    } else {
      return false;
    }
  }
  /**
   * This render method is called by this deferred widget once the widget container has become visible. You may
   * now proceed with widget initialization.
   *
   * __Must be overridden__, or an error will be thrown.
   *
   * @include
   * @protected
   */
  _render() {
    throw "Unsupported Operation";
  }
  /**
   * Called after the widget has become visible and after it was rendered. May be overridden, the default
   * implementation is a no-op.
   * @protected
   */
  postRender() {
  }
  /**
   * Cleans up deferred render tasks. When you extend this class and override this method, make sure to call
   * `super`.
   * @override
   */
  destroy() {
    super.destroy();
    PrimeFaces.removeDeferredRenders(this.id);
  }
  /**
   * Adds a deferred rendering task for the given widget to the queue.
   * @protected
   * @param {string} widgetId The ID of a deferred widget.
   * @param {JQuery} container The container element that should be visible.
   * @param {() => boolean} callback Callback that is invoked when the widget _may_ possibly have become visible.
   * Should return `true` when the widget was rendered, or `false` when the widget still needs to be rendered
   * later.
   */
  addDeferredRender(widgetId, container, callback) {
    PrimeFaces.addDeferredRender(widgetId, container.attr("id"), callback);
    if (container.is(":hidden")) {
      var parentContainer = this.jq.closest(".ui-hidden-container");
      if (parentContainer.length) {
        this.addDeferredRender(widgetId, container.parent().closest(".ui-hidden-container"), callback);
      }
    }
  }
};

export {
  BaseWidget,
  DynamicOverlayWidget,
  DeferredWidget,
  getWidgetIfPresent,
  loadWidget
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2FqYXhzdGF0dXMvYWpheHN0YXR1cy5qcyIsICIuLi9zcmMvcG9sbC9wb2xsLmpzIiwgIi4uL3NyYy9jb3JlL2NvcmUud2lkZ2V0LnJlZ2lzdHJ5LnRzIiwgIi4uL3NyYy9jb3JlL2NvcmUud2lkZ2V0LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBCYXNlV2lkZ2V0IH0gZnJvbSBcIi4uL2NvcmUvY29yZS53aWRnZXQuanNcIjtcblxuLyoqXG4gKiBfX1ByaW1lRmFjZXMgQWpheFN0YXR1cyBXaWRnZXRfX1xuICogXG4gKiBBamF4U3RhdHVzIGlzIGEgZ2xvYmFsIG5vdGlmaWVyIGZvciBBSkFYIHJlcXVlc3RzLlxuICogXG4gKiBGb3IgdGhlIGNhbGxiYWNrcyB0aGF0IGNhbiBiZSBzZXQgdmlhIHRoZSBgb25zdGFydGAsIGBvbnN1Y2Nlc3NgLCBgb25lcnJvcmAgYW5kIGBvbmNvbXBsZXRlYCBhdHRyaWJ1dGVzLCBzZWVcbiAqIHtAbGluayBQZkFqYXhTdGFydENhbGxiYWNrfSwge0BsaW5rIFBmQWpheFN1Y2Nlc3NDYWxsYmFja30sIHtAbGluayBQZkFqYXhFcnJvckNhbGxiYWNrfSwgYW5kXG4gKiB7QGxpbmsgUGZBamF4Q29tcGxldGVDYWxsYmFja30uXG4gKiBcbiAqIEB0eXBlZGVmIHtcInN0YXJ0XCIgfCBcInN1Y2Nlc3NcIiB8IFwiZXJyb3JcIiB8IFwiY29tcGxldGVcIn0gUHJpbWVGYWNlcy53aWRnZXQuQWpheFN0YXR1cy5BamF4U3RhdHVzRXZlbnRUeXBlIEF2YWlsYWJsZVxuICogdHlwZXMgb2YgQUpBWCByZWxhdGVkIGV2ZW50cyB0byB3aGljaCB5b3UgY2FuIGxpc3Rlbi5cbiAqIFxuICogQHR5cGVkZWYgUHJpbWVGYWNlcy53aWRnZXQuQWpheFN0YXR1cy5QZkFqYXhTdGFydENhbGxiYWNrIENhbGxiYWNrIGZvciB3aGVuIGFuIEFKQVggcmVxdWVzdCBzdGFydHMuIFVzdWFsbHkgc2V0IHZpYVxuICogYDxwOmFqYXhTdGF0dXMgb25zdGFydD1cIi4uLlwiLz5gLiBUaGlzIGNhbGxiYWNrIGFwcGxpZXMgd2hlbiBgPHA6YWpheCAvPmAgaXMgdXNlZC5cbiAqIEB0aGlzIHtEb2N1bWVudH0gUHJpbWVGYWNlcy53aWRnZXQuQWpheFN0YXR1cy5QZkFqYXhTdGFydENhbGxiYWNrXG4gKiBcbiAqIEB0eXBlZGVmIFByaW1lRmFjZXMud2lkZ2V0LkFqYXhTdGF0dXMuUGZBamF4RXJyb3JDYWxsYmFjayBDYWxsYmFjayBmb3Igd2hlbiBhbiBBSkFYIHJlcXVlc3QgZmFpbHMuIFVzdWFsbHkgc2V0IHZpYVxuICogYDxwOmFqYXhTdGF0dXMgb25lcnJvcj1cIi4uLlwiLz5gLiBUaGlzIGNhbGxiYWNrIGFwcGxpZXMgd2hlbiBgPHA6YWpheCAvPmAgaXMgdXNlZC5cbiAqIEB0aGlzIHtEb2N1bWVudH0gUHJpbWVGYWNlcy53aWRnZXQuQWpheFN0YXR1cy5QZkFqYXhFcnJvckNhbGxiYWNrXG4gKiBAcGFyYW0ge0pRdWVyeS5qcVhIUn0gUHJpbWVGYWNlcy53aWRnZXQuQWpheFN0YXR1cy5QZkFqYXhFcnJvckNhbGxiYWNrLnhociBUaGUgcmVxdWVzdCB0aGF0IGZhaWxlZC5cbiAqIEBwYXJhbSB7SlF1ZXJ5LkFqYXhTZXR0aW5nc30gUHJpbWVGYWNlcy53aWRnZXQuQWpheFN0YXR1cy5QZkFqYXhFcnJvckNhbGxiYWNrLnNldHRpbmdzIFRoZSBzZXR0aW5ncyBvZiB0aGUgalF1ZXJ5XG4gKiBBSkFYIHJlcXVlc3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gUHJpbWVGYWNlcy53aWRnZXQuQWpheFN0YXR1cy5QZkFqYXhFcnJvckNhbGxiYWNrLmVycm9yVGhyb3duIFRoZSBlcnJvciB0aGF0IGNhdXNlIHRoZSByZXF1ZXN0IHRvXG4gKiBmYWlsLlxuXG4gKiBAdHlwZWRlZiBQcmltZUZhY2VzLndpZGdldC5BamF4U3RhdHVzLlBmQWpheFN1Y2Nlc3NDYWxsYmFjayBDYWxsYmFjayBmb3Igd2hlbiBhbiBBSkFYIHJlcXVlc3Qgc3VjY2VlZHMuIFVzdWFsbHkgc2V0XG4gKiB2aWEgYDxwOmFqYXhTdGF0dXMgb25zdWNjZXNzPVwiLi4uXCIvPmAuIFRoaXMgY2FsbGJhY2sgYXBwbGllcyB3aGVuIGA8cDphamF4IC8+YCBpcyB1c2VkLlxuICogQHRoaXMge0RvY3VtZW50fSBQcmltZUZhY2VzLndpZGdldC5BamF4U3RhdHVzLlBmQWpheFN1Y2Nlc3NDYWxsYmFja1xuICogQHBhcmFtIHtKUXVlcnkuanFYSFJ9IFByaW1lRmFjZXMud2lkZ2V0LkFqYXhTdGF0dXMuUGZBamF4U3VjY2Vzc0NhbGxiYWNrLnhociBUaGUgcmVxdWVzdCB0aGF0IHN1Y2NlZWRlZC5cbiAqIEBwYXJhbSB7SlF1ZXJ5LkFqYXhTZXR0aW5nc30gUHJpbWVGYWNlcy53aWRnZXQuQWpheFN0YXR1cy5QZkFqYXhTdWNjZXNzQ2FsbGJhY2suc2V0dGluZ3MgVGhlIHNldHRpbmdzIG9mIHRoZSBqUXVlcnlcbiAqIEFKQVggcmVxdWVzdC5cbiAqIFxuICogQHR5cGVkZWYgUHJpbWVGYWNlcy53aWRnZXQuQWpheFN0YXR1cy5QZkFqYXhDb21wbGV0ZUNhbGxiYWNrIENhbGxiYWNrIGZvciB3aGVuIGFuIEFKQVggcmVxdWVzdCBjb21wbGV0ZXMsIGVpdGhlclxuICogc3VjY2Vzc2Z1bGx5IG9yIHdpdGggYW4gZXJyb3IuIFVzdWFsbHkgc2V0IHZpYSBgPHA6YWpheFN0YXR1cyBvbmNvbXBsZXRlPVwiLi4uXCIvPmAuIFRoaXMgY2FsbGJhY2sgYXBwbGllcyB3aGVuXG4gKiBgPHA6YWpheCAvPmAgaXMgdXNlZC5cbiAqIEB0aGlzIHtEb2N1bWVudH0gUHJpbWVGYWNlcy53aWRnZXQuQWpheFN0YXR1cy5QZkFqYXhDb21wbGV0ZUNhbGxiYWNrXG4gKiBAcGFyYW0ge0pRdWVyeS5qcVhIUn0gUHJpbWVGYWNlcy53aWRnZXQuQWpheFN0YXR1cy5QZkFqYXhDb21wbGV0ZUNhbGxiYWNrLnhociBUaGUgcmVxdWVzdCB0aGF0IHN1Y2NlZWRlZC5cbiAqIEBwYXJhbSB7SlF1ZXJ5LkFqYXhTZXR0aW5nc30gUHJpbWVGYWNlcy53aWRnZXQuQWpheFN0YXR1cy5QZkFqYXhDb21wbGV0ZUNhbGxiYWNrLnNldHRpbmdzIFRoZSBzZXR0aW5ncyBvZiB0aGUgalF1ZXJ5XG4gKiBBSkFYIHJlcXVlc3QuXG4gKiBcbiAqIEBpbnRlcmZhY2Uge1ByaW1lRmFjZXMud2lkZ2V0LkFqYXhTdGF0dXMuRXZlbnRUb0NhbGxiYWNrTWFwfSBFdmVudFRvQ2FsbGJhY2tNYXAgTWFwcyBiZXR3ZWVuIHRoZVxuICoge0BsaW5rIEFqYXhTdGF0dXNFdmVudFR5cGV9IGFuZCB0aGUgY29ycmVzcG9uZGluZyBldmVudCBoYW5kbGVycy4gVXNlZCBieSB0aGUge0BsaW5rIEFqYXhTdGF0dXN9IGNvbXBvbmVudC5cbiAqIEBwcm9wIHtQcmltZUZhY2VzLndpZGdldC5BamF4U3RhdHVzLlBmQWpheENvbXBsZXRlQ2FsbGJhY2sgfCBqc2YuYWpheC5PbkV2ZW50Q2FsbGJhY2sgfCBqc2YuYWpheC5PbkVycm9yQ2FsbGJhY2t9IEV2ZW50VG9DYWxsYmFja01hcC5jb21wbGV0ZVxuICogQ2FsbGJhY2sgZm9yIHdoZW4gYW4gQUpBWCByZXF1ZXN0IGNvbXBsZXRlcywgZWl0aGVyIHN1Y2Nlc3NmdWxseSBvciB3aXRoIGFuIGVycm9yLiBVc3VhbGx5IHNldCB2aWFcbiAqIGA8cDphamF4U3RhdHVzIG9uY29tcGxldGU9XCIuLi5cIi8+YC5cbiAqIEBwcm9wIHtQcmltZUZhY2VzLndpZGdldC5BamF4U3RhdHVzLlBmQWpheEVycm9yQ2FsbGJhY2sgfCBqc2YuYWpheC5PbkVycm9yQ2FsbGJhY2t9IEV2ZW50VG9DYWxsYmFja01hcC5lcnJvciBDYWxsYmFja1xuICogZm9yIHdoZW4gYW4gQUpBWCByZXF1ZXN0IGZhaWxzLiBVc3VhbGx5IHNldCB2aWEgYDxwOmFqYXhTdGF0dXMgb25lcnJvcj1cIi4uLlwiLz5gLlxuICogQHByb3Age1ByaW1lRmFjZXMud2lkZ2V0LkFqYXhTdGF0dXMuUGZBamF4U3RhcnRDYWxsYmFjayB8IGpzZi5hamF4Lk9uRXZlbnRDYWxsYmFja30gRXZlbnRUb0NhbGxiYWNrTWFwLnN0YXJ0IENhbGxiYWNrXG4gKiBmb3Igd2hlbiBhbiBBSkFYIHJlcXVlc3Qgc3RhcnRzLiBVc3VhbGx5IHNldCB2aWEgYDxwOmFqYXhTdGF0dXMgb25zdGFydD1cIi4uLlwiLz5gLlxuICogQHByb3Age1ByaW1lRmFjZXMud2lkZ2V0LkFqYXhTdGF0dXMuUGZBamF4U3VjY2Vzc0NhbGxiYWNrIHwganNmLmFqYXguT25FdmVudENhbGxiYWNrfSBFdmVudFRvQ2FsbGJhY2tNYXAuc3VjY2Vzc1xuICogQ2FsbGJhY2sgZm9yIHdoZW4gYW4gQUpBWCByZXF1ZXN0IHN1Y2NlZWRzLiBVc3VhbGx5IHNldCB2aWEgYDxwOmFqYXhTdGF0dXMgb25zdWNjZXNzPVwiLi4uXCIvPmAuXG4gKiBcbiAqIEBwcm9wIHtudW1iZXIgfCBudWxsfSB0aW1lb3V0IFRoZSBzZXQtdGltZW91dCB0aW1lciBJRCBmb3IgdGhlIHRpbWVyIG9mIHRoZSBkZWxheSBiZWZvcmUgdGhlIEFKQVggc3RhdHVzIGlzXG4gKiB0cmlnZ2VyZWQuXG4gKiBAcHJvcCB7Ym9vbGVhbn0gaGFzU3VjY2Vzc09yRXJyb3JGYWNldCBUcnVlIGlmIHRoaXMgY29tcG9uZW50IGNvbnRhaW5zIGEgc3VjY2Vzcy9lcnJvciBmYWNldC5cbiAqIFxuICogQGludGVyZmFjZSB7UHJpbWVGYWNlcy53aWRnZXQuQWpheFN0YXR1c0NmZ30gY2ZnIFRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUge0BsaW5rICBBamF4U3RhdHVzfCBBamF4U3RhdHVzIHdpZGdldH0uXG4gKiBZb3UgY2FuIGFjY2VzcyB0aGlzIGNvbmZpZ3VyYXRpb24gdmlhIHtAbGluayBQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0LmNmZ3xCYXNlV2lkZ2V0LmNmZ30uIFBsZWFzZSBub3RlIHRoYXQgdGhpc1xuICogY29uZmlndXJhdGlvbiBpcyB1c3VhbGx5IG1lYW50IHRvIGJlIHJlYWQtb25seSBhbmQgc2hvdWxkIG5vdCBiZSBtb2RpZmllZC5cbiAqIEBleHRlbmRzIHtQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0Q2ZnfSBjZmdcbiAqIFxuICogQHByb3Age1ByaW1lRmFjZXMud2lkZ2V0LkFqYXhTdGF0dXMuUGZBamF4Q29tcGxldGVDYWxsYmFjayB8IGpzZi5hamF4Lk9uRXZlbnRDYWxsYmFjayB8IGpzZi5hamF4Lk9uRXJyb3JDYWxsYmFja30gY2ZnLmNvbXBsZXRlXG4gKiBDbGllbnQtc2lkZSBjYWxsYmFjayBmb3Igd2hlbiB0aGUgQUpBWCBiZWhhdmlvciBjb21wbGV0ZXMsIGkuZS4gd2hlbiB0aGUgcmVxdWVzdCBmaW5pc2hlcywgaXJyZXNwZWN0aXZlIG9mIHdoZXRoZXIgaXRcbiAqIHN1Y2NlZWRlZCBvciBmYWlsZWQuIFxuICogQHByb3Age1ByaW1lRmFjZXMud2lkZ2V0LkFqYXhTdGF0dXMuUGZBamF4RXJyb3JDYWxsYmFjayB8IGpzZi5hamF4Lk9uRXJyb3JDYWxsYmFja30gY2ZnLmVycm9yIENsaWVudC1zaWRlIGNhbGxiYWNrXG4gKiBmb3Igd2hlbiB0aGUgQUpBWCBiZWhhdmlvciBmYWlscywgaS5lLiB3aGVuIHRoZSByZXF1ZXN0IGZhaWxzLlxuICogQHByb3Age251bWJlcn0gY2ZnLmRlbGF5IERlbGF5IGluIG1pbGxpc2Vjb25kcyBiZWZvcmUgZGlzcGxheWluZyB0aGUgQUpBWCBzdGF0dXMuIERlZmF1bHQgaXMgYDBgLCBtZWFuaW5nIGltbWVkaWF0ZS5cbiAqIEBwcm9wIHtQcmltZUZhY2VzLndpZGdldC5BamF4U3RhdHVzLlBmQWpheFN0YXJ0Q2FsbGJhY2sgfCBqc2YuYWpheC5PbkV2ZW50Q2FsbGJhY2t9IGNmZy5zdGFydCBDbGllbnQtc2lkZSBjYWxsYmFja1xuICogZm9yIHdoZW4gdGhlIEFKQVggYmVoYXZpb3Igc3RhcnRzLCBpLmUuIHRoZSByZXF1ZXN0IGlzIGFib3V0IHRvIGJlIHNlbnQuXG4gKiBAcHJvcCB7UHJpbWVGYWNlcy53aWRnZXQuQWpheFN0YXR1cy5QZkFqYXhTdWNjZXNzQ2FsbGJhY2sgfCBqc2YuYWpheC5PbkV2ZW50Q2FsbGJhY2t9IGNmZy5zdWNjZXNzIENsaWVudC1zaWRlXG4gKiBjYWxsYmFjayBmb3Igd2hlbiB0aGUgQUpBWCAgYmVoYXZpb3IgY29tcGxldGVzIHN1Y2Nlc3NmdWxseSwgaS5lLiB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY2xhc3MgQWpheFN0YXR1cyBleHRlbmRzIEJhc2VXaWRnZXQge1xuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMuUGFydGlhbFdpZGdldENmZzxUQ2ZnPn0gY2ZnXG4gICAgICovXG4gICAgaW5pdChjZmcpIHtcbiAgICAgICAgc3VwZXIuaW5pdChjZmcpO1xuICAgICAgICB0aGlzLmhhc1N1Y2Nlc3NPckVycm9yRmFjZXQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmJpbmQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gdGhlIHJlbGV2YW50IGV2ZW50cyBvbiB0aGUgZG9jdW1lbnQgZWxlbWVudC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGJpbmQoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSAnLnN0YXR1cycgKyB0aGlzLmlkO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigncGZBamF4U3RhcnQnICsgbmFtZXNwYWNlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICR0aGlzLnRpbWVvdXQgPSBQcmltZUZhY2VzLnF1ZXVlVGFzayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy50cmlnZ2VyKCdzdGFydCcsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9LCAkdGhpcy5jZmcuZGVsYXkpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ3BmQWpheEVycm9yJyArIG5hbWVzcGFjZSwgZnVuY3Rpb24oZSwgeGhyLCBzZXR0aW5ncywgZXJyb3IpIHtcbiAgICAgICAgICAgICR0aGlzLnRyaWdnZXIoJ2Vycm9yJywgW3hociwgc2V0dGluZ3MsIGVycm9yXSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbigncGZBamF4U3VjY2VzcycgKyBuYW1lc3BhY2UsIGZ1bmN0aW9uKGUsIHhociwgc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICR0aGlzLnRyaWdnZXIoJ3N1Y2Nlc3MnLCBbeGhyLCBzZXR0aW5nc10pO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ3BmQWpheENvbXBsZXRlJyArIG5hbWVzcGFjZSwgZnVuY3Rpb24oZSwgeGhyLCBzZXR0aW5ncywgYXJncykge1xuICAgICAgICAgICAgaWYoJHRoaXMudGltZW91dCAmJiBhcmdzICYmICFhcmdzLnJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgJHRoaXMuZGVsZXRlVGltZW91dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJHRoaXMudHJpZ2dlcignY29tcGxldGUnLCBbeGhyLCBzZXR0aW5ncywgYXJnc10pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGREZXN0cm95TGlzdGVuZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYobmFtZXNwYWNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYWxzbyBiaW5kIHRvIEpTRiAoZjphamF4KSBldmVudHNcbiAgICAgICAgLy8gTk9URTogUEYgYWx3YXlzIGZpcmVzIFwiY29tcGxldGVcIiBhcyBsYXN0IGV2ZW50LCB3aGVyZWFzIEpTRiBsYXN0IGV2ZW50cyBhcmUgZWl0aGVyIFwic3VjY2Vzc1wiIG9yIFwiZXJyb3JcIlxuICAgICAgICBpZiAod2luZG93LmpzZiAmJiBqc2YuYWpheCkge1xuICAgICAgICAgICAganNmLmFqYXguYWRkT25FdmVudChmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT09ICdiZWdpbicpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMudGltZW91dCA9IFByaW1lRmFjZXMucXVldWVUYXNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMudHJpZ2dlcignc3RhcnQnLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9LCAkdGhpcy5jZmcuZGVsYXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGRhdGEuc3RhdHVzID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSBQRiBjb21wbGV0ZSBldmVudCB3aGVuIEpTRiBzdWNjZXNzL2Vycm9yIGV2ZW50IGlzIGZpcmVkIHJpZ2h0IGFmdGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5kZWxldGVUaW1lb3V0KCk7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnRyaWdnZXIoJ3N1Y2Nlc3MnLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy50cmlnZ2VyKCdmYWNlc0NvbXBsZXRlJywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAganNmLmFqYXguYWRkT25FcnJvcihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgJHRoaXMuZGVsZXRlVGltZW91dCgpO1xuICAgICAgICAgICAgICAgICR0aGlzLnRyaWdnZXIoJ2Vycm9yJywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAkdGhpcy50cmlnZ2VyKCdmYWNlc0NvbXBsZXRlJywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIGdpdmVuIGV2ZW50IGJ5IGludm9raW5nIHRoZSBldmVudCBoYW5kbGVyLCB1c3VhbGx5IGRlZmluZWQgb24gdGhlIGA8cDphamF4U3RhdHVzLz5gIHRhZy5cbiAgICAgKiBAdGVtcGxhdGUge1ByaW1lRmFjZXMud2lkZ2V0LkFqYXhTdGF0dXMuQWpheFN0YXR1c0V2ZW50VHlwZX0gSyBBIG5hbWUgb2Ygb25lIG9mIHRoZSBzdXBwb3J0ZWQgZXZlbnRzIHRoYXQgc2hvdWxkXG4gICAgICogYmUgdHJpZ2dlcmVkLlxuICAgICAqIEBwYXJhbSB7S30gZXZlbnQgQSBuYW1lIG9mIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGV2ZW50cyB0aGF0IHNob3VsZFxuICAgICAqIGJlIHRyaWdnZXJlZC5cbiAgICAgKiBAcGFyYW0ge1BhcmFtZXRlcnM8UHJpbWVGYWNlcy53aWRnZXQuQWpheFN0YXR1cy5FdmVudFRvQ2FsbGJhY2tNYXBbS10+fSBhcmdzIEFyZ3VtZW50cyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlXG4gICAgICogZXZlbnQgaGFuZGxlci5cbiAgICAgKi9cbiAgICB0cmlnZ2VyKGV2ZW50LCBhcmdzKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRoaXMuY2ZnW2V2ZW50XTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseShkb2N1bWVudCwgYXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgdGhlIGZhY2V0IGJhc2VkIG9uIHRoZSBldmVudFxuICAgICAgICB2YXIgZmFjZXRzID0gdGhpcy5qcS5jaGlsZHJlbigpO1xuICAgICAgICB2YXIgZmFjZXQgPSBmYWNldHMuZmlsdGVyKHRoaXMudG9GYWNldElkKGV2ZW50KSk7XG4gICAgICAgIHZhciBoYXNGYWNldCA9IGZhY2V0ICYmIGZhY2V0Lmxlbmd0aCA+IDA7XG5cbiAgICAgICAgLy8gV2UgaGF2ZSB0aGUgZm9sbG93aW5nIGV2ZW50czpcbiAgICAgICAgLy8gMSkgc3RhcnRcbiAgICAgICAgLy8gMikgc3VjY2VzcyBvciBlcnJvclxuICAgICAgICAvLyAzKSBjb21wbGV0ZVxuICAgICAgICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgLy8gYWx3YXlzIGhpZGUgb3RoZXIgZmFjZXRzIG9uIHN0YXJ0XG4gICAgICAgICAgICAgICAgZmFjZXRzLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNGYWNldCkge1xuICAgICAgICAgICAgICAgICAgICBmYWNldC5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgICAgICAvLyB3ZSBub3cgZXhwZWN0IHRoYXQgZWl0aGVyIGEgY29tcGxldGUgb3Igc3VjY2Vzcy9lcnJvciBmYWNldCBpcyBkZWZpbmVkXG4gICAgICAgICAgICAgICAgLy8gaWYgbm8gc3VjY2Vzcy9lcnJvciBpcyBkZWZpbmVkLCBsZXRzIGp1c3QgcmVseSB1cG9uIHRoZSBjb21wbGV0ZS1mYWNldFxuICAgICAgICAgICAgICAgIGlmIChoYXNGYWNldCkge1xuICAgICAgICAgICAgICAgICAgICBmYWNldHMuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBmYWNldC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzU3VjY2Vzc09yRXJyb3JGYWNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdjb21wbGV0ZSc6XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGN1cnJlbnQgcmVxdWVzdCBsZWFkcyBpbiBhIHJlZGlyZWN0LCBza2lwIGhpZGluZyB0aGUgcHJldmlvdXMgZmFjZXQgKGluIGJlc3QgY2FzZSB0aGlzIGlzIHRoZSBzdGFydC1mYWNldClcbiAgICAgICAgICAgICAgICAvLyB3aGVuIGEgc3VjZXNzL2Vycm9yLWZhY2V0IGlzIGRlZmluZWQsIHRoaXMgd29udCB3b3JrIGFzIGV4cGVjdGVkIGFzIHRoZSAncmVkaXJlY3QnIGluZm9ybWF0aW9uIGlzIG5vdCBhdmFpbGFibGUgYmVmb3JlXG4gICAgICAgICAgICAgICAgdmFyIHBmQXJncyA9IGFyZ3NbMl07XG4gICAgICAgICAgICAgICAgaWYgKCFwZkFyZ3MgfHwgcGZBcmdzLnJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRmFsbHRocm91Z2ggaW50ZW50aW9uYWwgdG8gaGFuZGxlIGJvdGggUEYgYW5kIEpTRiBjb21wbGV0ZSBldmVudHNcbiAgICAgICAgICAgIGNhc2UgJ2ZhY2VzQ29tcGxldGUnOlxuICAgICAgICAgICAgICAgIC8vICMxMTgyNCBoaWRlIHRoZSBzdGFydCBmYWNldCBpZiB0aGVyZSB3YXMgbm8gZXJyb3Ivc3VjY2VzcyBmYWNldCBvciB0aGVyZSBpcyBhIGNvbXBsZXRlIGZhY2V0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzU3VjY2Vzc09yRXJyb3JGYWNldCA9PT0gZmFsc2UgfHwgaGFzRmFjZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZmFjZXRzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2hvdyBjb21wbGV0ZS1mYWNldCBpZiBkZWZpbmVkXG4gICAgICAgICAgICAgICAgaWYgKGhhc0ZhY2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZhY2V0LnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aGUgZmFjZXQgSUQgb2YgdGhlIGdpdmVuIGV2ZW50LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLndpZGdldC5BamF4U3RhdHVzLkFqYXhTdGF0dXNFdmVudFR5cGV9IGV2ZW50IE9uZSBvZiB0aGUgc3VwcG9ydGVkIGV2ZW50XG4gICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgSUQgb2YgdGhlIGZhY2V0IGVsZW1lbnQgZm9yIHRoZSBnaXZlbiBldmVudFxuICAgICAqL1xuICAgIHRvRmFjZXRJZChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQgPT09ICdmYWNlc0NvbXBsZXRlJykge1xuICAgICAgICAgICAgZXZlbnQgPSAnY29tcGxldGUnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmpxSWQgKyAnXycgKyBldmVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIHN0ZS10aW1lb3V0IHRpbWVyIGZvciB0aGUgZGVsYXkuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBkZWxldGVUaW1lb3V0KCkge1xuICAgICAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCAiaW1wb3J0IHsgQmFzZVdpZGdldCB9IGZyb20gXCIuLi9jb3JlL2NvcmUud2lkZ2V0LmpzXCI7XG5cbi8qKlxuICogX19QcmltZUZhY2VzIFBvbGwgV2lkZ2V0X19cbiAqIFxuICogUG9sbCBpcyBhbiBhamF4IGNvbXBvbmVudCB0aGF0IGhhcyB0aGUgYWJpbGl0eSB0byBzZW5kIHBlcmlvZGljYWwgYWpheCByZXF1ZXN0cy5cbiAqIFxuICogQHR5cGVkZWYge1wibWlsbGlzZWNvbmRcIiB8IFwic2Vjb25kXCJ9IFByaW1lRmFjZXMud2lkZ2V0LlBvbGwuSW50ZXJ2YWxUeXBlIFRpbWUgdW5pdCBmb3IgdGhlIHBvbGxpbmcgaW50ZXJ2YWwuXG4gKiBcbiAqIEB0eXBlZGVmIHsoKSA9PiB2b2lkfSBQcmltZUZhY2VzLndpZGdldC5Qb2xsLlBvbGxpbmdBY3Rpb24gQ2FsbGJhY2sgdGhhdCBwZXJmb3JtcyB0aGUgcG9sbGluZyBhY3Rpb24uIFNlZSBhbHNvXG4gKiB7QGxpbmsgUG9sbENmZy5mbn0uXG4gKiBcbiAqIEBwcm9wIHtib29sZWFufSBhY3RpdmUgV2hldGhlciBwb2xsaW5nIGlzIGN1cnJlbnRseSBhY3RpdmUuXG4gKiBAcHJvcCB7bnVtYmVyfSB0aW1lciBUaGUgc2V0LWludGVydmFsIHRpbWVyIElEIG9mIHRoZSB0aW1lciB1c2VkIGZvciBwb2xsaW5nLlxuICogXG4gKiBAaW50ZXJmYWNlIHtQcmltZUZhY2VzLndpZGdldC5Qb2xsQ2ZnfSBjZmcgVGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSB7QGxpbmsgIFBvbGx8IFBvbGwgd2lkZ2V0fS5cbiAqIFlvdSBjYW4gYWNjZXNzIHRoaXMgY29uZmlndXJhdGlvbiB2aWEge0BsaW5rIFByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXQuY2ZnfEJhc2VXaWRnZXQuY2ZnfS4gUGxlYXNlIG5vdGUgdGhhdCB0aGlzXG4gKiBjb25maWd1cmF0aW9uIGlzIHVzdWFsbHkgbWVhbnQgdG8gYmUgcmVhZC1vbmx5IGFuZCBzaG91bGQgbm90IGJlIG1vZGlmaWVkLlxuICogQGV4dGVuZHMge1ByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXRDZmd9IGNmZ1xuICogXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2ZnLmF1dG9TdGFydCBJbiBhdXRvIHN0YXJ0IG1vZGUsIHBvbGxpbmcgc3RhcnRzIGF1dG9tYXRpY2FsbHkgb24gcGFnZSBsb2FkLiBUbyBzdGFydCBwb2xsaW5nIG9uXG4gKiBkZW1hbmQgc2V0IHRvIGZhbHNlLlxuICogQHByb3Age1ByaW1lRmFjZXMud2lkZ2V0LlBvbGwuSW50ZXJ2YWxUeXBlfSBjZmcuaW50ZXJ2YWxUeXBlIFRpbWUgdW5pdCBmb3IgdGhlIGZyZXF1ZW5jeS5cbiAqIEBwcm9wIHtudW1iZXJ9IGNmZy5mcmVxdWVuY3kgRHVyYXRpb24gYmV0d2VlbiB0d28gc3VjY2Vzc2l2ZSBBSkFYIHBvbGwgcmVxdWVzdCwgZWl0aGVyIGluIG1pbGxpc2Vjb25kcyBvciBzZWNvbmRzLFxuICogZGVwZW5kaW5nIG9uIHRoZSBjb25maWd1cmUgYGludGVydmFsVHlwZWAuXG4gKiBAcHJvcCB7UHJpbWVGYWNlcy53aWRnZXQuUG9sbC5Qb2xsaW5nQWN0aW9ufSBjZmcuZm4gQ2FsbGJhY2sgdGhhdCBwZXJmb3JtcyB0aGUgcG9sbGluZyBhY3Rpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBQb2xsIGV4dGVuZHMgQmFzZVdpZGdldCB7XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy5QYXJ0aWFsV2lkZ2V0Q2ZnPFRDZmc+fSBjZmdcbiAgICAgKi9cbiAgICBpbml0KGNmZykge1xuICAgICAgICBzdXBlci5pbml0KGNmZyk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5jZmcuYXV0b1N0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqIEBwYXJhbSB7UHJpbWVGYWNlcy5QYXJ0aWFsV2lkZ2V0Q2ZnPFRDZmc+fSBjZmdcbiAgICAgKi9cbiAgICByZWZyZXNoKGNmZykge1xuICAgICAgICB0aGlzLnN0b3AoKTtcblxuICAgICAgICBzdXBlci5yZWZyZXNoKGNmZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG5cbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRoZSBwb2xsaW5nLCBzZW5kaW5nIEFKQVggcmVxdWVzdHMgaW4gcGVyaW9kaWMgaW50ZXJ2YWxzLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiBwb2xsaW5nIHdhcyBzdGFydGVkLCBvciBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgLy9DYWxsIHVzZXIgb25hY3RpdmF0ZWQgY2FsbGJhY2sgYW5kIGJsb2NrIGlmIHRoZXkgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICBpZiAodGhpcy5jZmcub25BY3RpdmF0ZWQgJiYgdGhpcy5jZmcub25BY3RpdmF0ZWQuY2FsbCh0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBmcmVxdWVuY3kgPSB0aGlzLmNmZy5pbnRlcnZhbFR5cGUgPT0gJ21pbGxpc2Vjb25kJyA/IHRoaXMuY2ZnLmZyZXF1ZW5jeSA6ICh0aGlzLmNmZy5mcmVxdWVuY3kgKiAxMDAwKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLmNmZy5mbiwgZnJlcXVlbmN5KTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wcyB0aGUgcG9sbGluZyBzbyB0aGF0IG5vIG1vcmUgQUpBWCByZXF1ZXN0cyBhcmUgbWFkZS5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgcG9sbGluZyB3c2Egc3RvcHBlZCwgb3IgYGZhbHNlYCBvdGhlcndpc2UuXG4gICAgICovXG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAvL0NhbGwgdXNlciBvbmRlYWN0aXZhdGVkIGNhbGxiYWNrIGFuZCBibG9jayBpZiB0aGV5IHJldHVybiBmYWxzZVxuICAgICAgICAgICAgaWYgKHRoaXMuY2ZnLm9uRGVhY3RpdmF0ZWQgJiYgdGhpcy5jZmcub25EZWFjdGl2YXRlZC5jYWxsKHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgcG9sbGluZyBpcyBhY3RpdmUgb3Igd2hldGhlciBpdCB3YXMgc3RvcHBlZC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgcG9sbGluZyBpcyBjdXJyZW50bHkgYWN0aXZlLCBvciBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBpc0FjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlO1xuICAgIH1cbn0iLCAiaW1wb3J0IHsgQWpheFN0YXR1cyB9IGZyb20gXCIuLi9hamF4c3RhdHVzL2FqYXhzdGF0dXMuanNcIjtcbmltcG9ydCB7IEJhc2VXaWRnZXQsIERlZmVycmVkV2lkZ2V0LCBEeW5hbWljT3ZlcmxheVdpZGdldCB9IGZyb20gXCIuLi9jb3JlL2NvcmUud2lkZ2V0LmpzXCI7XG5pbXBvcnQgeyBQb2xsIH0gZnJvbSBcIi4uL3BvbGwvcG9sbC5qc1wiO1xuXG5pbXBvcnQgdHlwZSB7IEFjY29yZGlvblBhbmVsIH0gZnJvbSBcIi4uL2FjY29yZGlvbi9hY2NvcmRpb24uanNcIjtcbmltcG9ydCB0eXBlIHsgQXV0b0NvbXBsZXRlIH0gZnJvbSBcIi4uL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuanNcIjtcblxuaW1wb3J0IHR5cGUgeyBCYXNlVHJlZSB9IGZyb20gXCIuLi90cmVlL3RyZWUuYmFzZS5qc1wiO1xuaW1wb3J0IHR5cGUgeyBCbG9ja1VJIH0gZnJvbSBcIi4uL2Jsb2NrdWkvYmxvY2t1aS5qc1wiO1xuaW1wb3J0IHR5cGUgeyBCcmVhZENydW1iIH0gZnJvbSBcIi4uL21lbnUvbWVudS5icmVhZGNydW1iLmpzXCI7XG5pbXBvcnQgdHlwZSB7IEJ1dHRvbiB9IGZyb20gXCIuLi9mb3Jtcy9mb3Jtcy5idXR0b24uanNcIjtcblxuaW1wb3J0IHR5cGUgeyBDYXNjYWRlU2VsZWN0IH0gZnJvbSBcIi4uL2Zvcm1zL2Zvcm1zLmNhc2NhZGVzZWxlY3QuanNcIjtcbmltcG9ydCB0eXBlIHsgQ2FsZW5kYXIgfSBmcm9tIFwiLi4vY2FsZW5kYXIvNC1jYWxlbmRhci5qc1wiO1xuaW1wb3J0IHR5cGUgeyBDYXB0Y2hhIH0gZnJvbSBcIi4uL2NhcHRjaGEvY2FwdGNoYS5qc1wiO1xuaW1wb3J0IHR5cGUgeyBDYXJvdXNlbCB9IGZyb20gXCIuLi9jYXJvdXNlbC9jYXJvdXNlbC5qc1wiO1xuaW1wb3J0IHR5cGUgeyBDaGFydCB9IGZyb20gXCIuLi9jaGFydC85LWNoYXJ0anMtd2lkZ2V0LmpzXCI7XG5pbXBvcnQgdHlwZSB7IENoaXAgfSBmcm9tIFwiLi4vY2hpcC9jaGlwLmpzXCI7XG5pbXBvcnQgdHlwZSB7IENoaXBzIH0gZnJvbSBcIi4uL2NoaXBzL2NoaXBzLmpzXCI7XG5pbXBvcnQgdHlwZSB7IENsb2NrIH0gZnJvbSBcIi4uL2Nsb2NrL2Nsb2NrLmpzXCI7XG5pbXBvcnQgdHlwZSB7IENvbmZpcm1Qb3B1cCB9IGZyb20gXCIuLi9jb25maXJtcG9wdXAvY29uZmlybXBvcHVwLmpzXCI7XG5pbXBvcnQgdHlwZSB7IENvbG9yUGlja2VyIH0gZnJvbSBcIi4uL2NvbG9ycGlja2VyLzEtY29sb3JwaWNrZXIuanNcIjtcbmltcG9ydCB0eXBlIHsgQ29sdW1uVG9nZ2xlciB9IGZyb20gXCIuLi9jb2x1bW50b2dnbGVyL2NvbHVtbnRvZ2dsZXIuanNcIjtcbmltcG9ydCB0eXBlIHsgQ29tbWFuZEJ1dHRvbiB9IGZyb20gXCIuLi9mb3Jtcy9mb3Jtcy5jb21tYW5kYnV0dG9uLmpzXCI7XG5pbXBvcnQgdHlwZSB7IENvbW1hbmRMaW5rIH0gZnJvbSBcIi4uL2Zvcm1zL2Zvcm1zLmNvbW1hbmRsaW5rLmpzXCI7XG5pbXBvcnQgdHlwZSB7IENvbnRleHRNZW51IH0gZnJvbSBcIi4uL21lbnUvbWVudS5jb250ZXh0bWVudS5qc1wiO1xuXG5pbXBvcnQgdHlwZSB7IERhc2hib2FyZCB9IGZyb20gXCIuLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzXCI7XG5pbXBvcnQgdHlwZSB7IERhdGFWaWV3IH0gZnJvbSBcIi4uL2RhdGF2aWV3L2RhdGF2aWV3LmpzXCI7XG5pbXBvcnQgdHlwZSB7IERhdGFHcmlkIH0gZnJvbSBcIi4uL2RhdGFncmlkL2RhdGFncmlkLmpzXCI7XG5pbXBvcnQgdHlwZSB7IERhdGFMaXN0IH0gZnJvbSBcIi4uL2RhdGFsaXN0L2RhdGFsaXN0LmpzXCI7XG5pbXBvcnQgdHlwZSB7IERhdGFTY3JvbGxlciB9IGZyb20gXCIuLi9kYXRhc2Nyb2xsZXIvZGF0YXNjcm9sbGVyLmpzXCI7XG5pbXBvcnQgdHlwZSB7IERhdGFUYWJsZSB9IGZyb20gXCIuLi9kYXRhdGFibGUvZGF0YXRhYmxlLmpzXCI7XG5pbXBvcnQgdHlwZSB7IERhdGVQaWNrZXIgfSBmcm9tIFwiLi4vZGF0ZXBpY2tlci8xLWRhdGVwaWNrZXIuanNcIjtcbmltcG9ydCB0eXBlIHsgRGVmYXVsdENvbW1hbmQgfSBmcm9tIFwiLi4vZm9ybXMvZm9ybXMuZGVmYXVsdGNvbW1hbmQuanNcIjtcbmltcG9ydCB0eXBlIHsgRGlhZ3JhbSB9IGZyb20gXCIuLi9kaWFncmFtLzEtZGlhZ3JhbS5qc1wiO1xuaW1wb3J0IHR5cGUgeyBEaWFsb2csIENvbmZpcm1EaWFsb2csIER5bmFtaWNEaWFsb2cgfSBmcm9tIFwiLi4vZGlhbG9nL2RpYWxvZy5qc1wiO1xuaW1wb3J0IHR5cGUgeyBEb2NrIH0gZnJvbSBcIi4uL2RvY2svZG9jay5qc1wiO1xuaW1wb3J0IHR5cGUgeyBEcmFnZ2FibGUsIERyb3BwYWJsZSB9IGZyb20gXCIuLi9kcmFnZHJvcC9kcmFnZHJvcC5qc1wiO1xuXG5pbXBvcnQgdHlwZSB7IEVmZmVjdCB9IGZyb20gXCIuLi9lZmZlY3QvZWZmZWN0LmpzXCI7XG5cbmltcG9ydCB0eXBlIHsgRmllbGRzZXQgfSBmcm9tIFwiLi4vZmllbGRzZXQvZmllbGRzZXQuanNcIjtcbmltcG9ydCB0eXBlIHsgRmlsZVVwbG9hZCB9IGZyb20gXCIuLi9maWxldXBsb2FkLzItZmlsZXVwbG9hZC5qc1wiO1xuaW1wb3J0IHR5cGUgeyBGcm96ZW5EYXRhVGFibGUgfSBmcm9tIFwiLi4vZGF0YXRhYmxlL2RhdGF0YWJsZS5mcm96ZW4uanNcIjtcblxuaW1wb3J0IHR5cGUgeyBHYWxsZXJpYSB9IGZyb20gXCIuLi9nYWxsZXJpYS8xLWdhbGxlcmlhLmpzXCI7XG5pbXBvcnQgdHlwZSB7IEdNYXAgfSBmcm9tIFwiLi4vZ21hcC9nbWFwLmpzXCI7XG5pbXBvcnQgdHlwZSB7IEdyb3dsIH0gZnJvbSBcIi4uL2dyb3dsL2dyb3dsLmpzXCI7XG5cbmltcG9ydCB0eXBlIHsgSG9yaXpvbnRhbFRyZWUgfSBmcm9tIFwiLi4vdHJlZS90cmVlLmhvcml6b250YWwuanNcIjtcblxuaW1wb3J0IHR5cGUgeyBJZGxlTW9uaXRvciB9IGZyb20gXCIuLi9pZGxlbW9uaXRvci8xLWlkbGVtb25pdG9yLmpzXCI7XG5pbXBvcnQgdHlwZSB7IEltYWdlQ29tcGFyZSB9IGZyb20gXCIuLi9pbWFnZWNvbXBhcmUvaW1hZ2Vjb21wYXJlLXdpZGdldC5qc1wiO1xuaW1wb3J0IHR5cGUgeyBJbWFnZUNyb3BwZXIgfSBmcm9tIFwiLi4vaW1hZ2Vjcm9wcGVyL2ltYWdlY3JvcHBlci5qc1wiO1xuaW1wb3J0IHR5cGUgeyBJbWFnZVN3aXRjaCB9IGZyb20gXCIuLi9pbWFnZXN3aXRjaC8xLWltYWdlc3dpdGNoLmpzXCI7XG5pbXBvcnQgdHlwZSB7IElucGxhY2UgfSBmcm9tIFwiLi4vaW5wbGFjZS9pbnBsYWNlLmpzXCI7XG5pbXBvcnQgdHlwZSB7IElucHV0TWFzayB9IGZyb20gXCIuLi9pbnB1dG1hc2svMS1pbnB1dG1hc2suanNcIjtcbmltcG9ydCB0eXBlIHsgSW5wdXROdW1iZXIgfSBmcm9tIFwiLi4vaW5wdXRudW1iZXIvMS1pbnB1dG51bWJlci5qc1wiO1xuaW1wb3J0IHR5cGUgeyBJbnB1dFRleHQgfSBmcm9tIFwiLi4vZm9ybXMvZm9ybXMuaW5wdXR0ZXh0LmpzXCI7XG5pbXBvcnQgdHlwZSB7IElucHV0VGV4dGFyZWEgfSBmcm9tIFwiLi4vZm9ybXMvZm9ybXMuaW5wdXR0ZXh0YXJlYS5qc1wiO1xuXG5pbXBvcnQgdHlwZSB7IEtleWJvYXJkIH0gZnJvbSBcIi4uL2tleWJvYXJkLzIta2V5Ym9hcmQuanNcIjtcbmltcG9ydCB0eXBlIHsgS2V5RmlsdGVyIH0gZnJvbSBcIi4uL2tleWZpbHRlci8xLWtleWZpbHRlci5qc1wiO1xuaW1wb3J0IHR5cGUgeyBLbm9iIH0gZnJvbSBcIi4uL2tub2IvMi1rbm9iLmpzXCI7XG5cbmltcG9ydCB0eXBlIHsgTGlmZWN5Y2xlIH0gZnJvbSBcIi4uL2xpZmVjeWNsZS9saWZlY3ljbGUuanNcIjtcbmltcG9ydCB0eXBlIHsgTGlua0J1dHRvbiB9IGZyb20gXCIuLi9mb3Jtcy9mb3Jtcy5saW5rYnV0dG9uLmpzXCI7XG5pbXBvcnQgdHlwZSB7IExvZyB9IGZyb20gXCIuLi9sb2cvbG9nLmpzXCI7XG5cbmltcG9ydCB0eXBlIHsgTWVnYU1lbnUgfSBmcm9tIFwiLi4vbWVudS9tZW51Lm1lZ2FtZW51LmpzXCI7XG5pbXBvcnQgdHlwZSB7IE1lbnUgfSBmcm9tIFwiLi4vbWVudS9tZW51LmJhc2UuanNcIjtcbmltcG9ydCB0eXBlIHsgTWVudWJhciB9IGZyb20gXCIuLi9tZW51L21lbnUubWVudWJhci5qc1wiO1xuaW1wb3J0IHR5cGUgeyBNZW51QnV0dG9uIH0gZnJvbSBcIi4uL21lbnUvbWVudS5tZW51YnV0dG9uLmpzXCI7XG5pbXBvcnQgdHlwZSB7IE1lc3NhZ2UgfSBmcm9tIFwiLi4vbWVzc2FnZS9tZXNzYWdlLmpzXCI7XG5pbXBvcnQgdHlwZSB7IE1lc3NhZ2VzIH0gZnJvbSBcIi4uL21lc3NhZ2VzL21lc3NhZ2VzLmpzXCI7XG5pbXBvcnQgdHlwZSB7IE1pbmRtYXAgfSBmcm9tIFwiLi4vbWluZG1hcC9taW5kbWFwLmpzXCI7XG5pbXBvcnQgdHlwZSB7IE11bHRpU2VsZWN0TGlzdGJveCB9IGZyb20gXCIuLi9mb3Jtcy9mb3Jtcy5tdWx0aXNlbGVjdGxpc3Rib3guanNcIjtcblxuaW1wb3J0IHR5cGUgeyBOb3RpZmljYXRpb25CYXIgfSBmcm9tIFwiLi4vbm90aWZpY2F0aW9uYmFyL25vdGlmaWNhdGlvbmJhci5qc1wiO1xuXG5pbXBvcnQgdHlwZSB7IE9yZGVyTGlzdCB9IGZyb20gXCIuLi9vcmRlcmxpc3Qvb3JkZXJsaXN0LmpzXCI7XG5pbXBvcnQgdHlwZSB7IE9yZ2FuaWdyYW0gfSBmcm9tIFwiLi4vb3JnYW5pZ3JhbS9vcmdhbmlncmFtLmpzXCI7XG5pbXBvcnQgdHlwZSB7IE91dHB1dFBhbmVsIH0gZnJvbSBcIi4uL291dHB1dHBhbmVsL291dHB1dHBhbmVsLmpzXCI7XG5pbXBvcnQgdHlwZSB7IE92ZXJsYXlQYW5lbCB9IGZyb20gXCIuLi9vdmVybGF5cGFuZWwvb3ZlcmxheXBhbmVsLmpzXCI7XG5cbmltcG9ydCB0eXBlIHsgUGFnaW5hdG9yIH0gZnJvbSBcIi4uL3BhZ2luYXRvci9wYWdpbmF0b3IuanNcIjtcbmltcG9ydCB0eXBlIHsgUGFuZWwgfSBmcm9tIFwiLi4vcGFuZWwvcGFuZWwuanNcIjtcbmltcG9ydCB0eXBlIHsgUGFuZWxNZW51IH0gZnJvbSBcIi4uL21lbnUvbWVudS5wYW5lbG1lbnUuanNcIjtcbmltcG9ydCB0eXBlIHsgUGFzc3dvcmQgfSBmcm9tIFwiLi4vZm9ybXMvZm9ybXMucGFzc3dvcmQuanNcIjtcbmltcG9ydCB0eXBlIHsgUGhvdG9DYW0gfSBmcm9tIFwiLi4vcGhvdG9jYW0vMS1waG90b2NhbS5qc1wiO1xuaW1wb3J0IHR5cGUgeyBQaWNrTGlzdCB9IGZyb20gXCIuLi9waWNrbGlzdC9waWNrbGlzdC5qc1wiO1xuaW1wb3J0IHR5cGUgeyBQbGFpbk1lbnUgfSBmcm9tIFwiLi4vbWVudS9tZW51LnBsYWlubWVudS5qc1wiO1xuaW1wb3J0IHR5cGUgeyBQcm9ncmVzc0JhciB9IGZyb20gXCIuLi9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5qc1wiO1xuXG5pbXBvcnQgdHlwZSB7IFJhdGluZyB9IGZyb20gXCIuLi9yYXRpbmcvcmF0aW5nLmpzXCI7XG5pbXBvcnQgdHlwZSB7IFJlc2l6YWJsZSB9IGZyb20gXCIuLi9yZXNpemFibGUvcmVzaXphYmxlLmpzXCI7XG5cbmltcG9ydCB0eXBlIHsgU2NoZWR1bGUgfSBmcm9tIFwiLi4vc2NoZWR1bGUvMS1zY2hlZHVsZS5qc1wiO1xuaW1wb3J0IHR5cGUgeyBTY3JvbGxQYW5lbCB9IGZyb20gXCIuLi9zY3JvbGxwYW5lbC8xLXNjcm9sbHBhbmVsLmpzXCI7XG5pbXBvcnQgdHlwZSB7IFNjcm9sbFRvcCB9IGZyb20gXCIuLi9zY3JvbGx0b3Avc2Nyb2xsdG9wLmpzXCI7XG5pbXBvcnQgdHlwZSB7IFNlbGVjdEJvb2xlYW5CdXR0b24gfSBmcm9tIFwiLi4vZm9ybXMvZm9ybXMuc2VsZWN0Ym9vbGVhbmJ1dHRvbi5qc1wiO1xuaW1wb3J0IHR5cGUgeyBTZWxlY3RCb29sZWFuQ2hlY2tib3ggfSBmcm9tIFwiLi4vZm9ybXMvZm9ybXMuc2VsZWN0Ym9vbGVhbmNoZWNrYm94LmpzXCI7XG5pbXBvcnQgdHlwZSB7IFNlbGVjdENoZWNrYm94TWVudSB9IGZyb20gXCIuLi9mb3Jtcy9mb3Jtcy5zZWxlY3RjaGVja2JveG1lbnUuanNcIjtcbmltcG9ydCB0eXBlIHsgU2VsZWN0TGlzdGJveCB9IGZyb20gXCIuLi9mb3Jtcy9mb3Jtcy5zZWxlY3RsaXN0Ym94LmpzXCI7XG5pbXBvcnQgdHlwZSB7IFNlbGVjdE1hbnlCdXR0b24gfSBmcm9tIFwiLi4vZm9ybXMvZm9ybXMuc2VsZWN0bWFueWJ1dHRvbi5qc1wiO1xuaW1wb3J0IHR5cGUgeyBTZWxlY3RNYW55Q2hlY2tib3ggfSBmcm9tIFwiLi4vZm9ybXMvZm9ybXMuc2VsZWN0bWFueWNoZWNrYm94LmpzXCI7XG5pbXBvcnQgdHlwZSB7IFNlbGVjdE1hbnlNZW51IH0gZnJvbSBcIi4uL2Zvcm1zL2Zvcm1zLnNlbGVjdG1hbnltZW51LmpzXCI7XG5pbXBvcnQgdHlwZSB7IFNlbGVjdE9uZUJ1dHRvbiB9IGZyb20gXCIuLi9mb3Jtcy9mb3Jtcy5zZWxlY3RvbmVidXR0b24uanNcIjtcbmltcG9ydCB0eXBlIHsgU2VsZWN0T25lTWVudSB9IGZyb20gXCIuLi9mb3Jtcy9mb3Jtcy5zZWxlY3RvbmVtZW51LmpzXCI7XG5pbXBvcnQgdHlwZSB7IFNlbGVjdE9uZUxpc3Rib3ggfSBmcm9tIFwiLi4vZm9ybXMvZm9ybXMuc2VsZWN0b25lbGlzdGJveC5qc1wiO1xuaW1wb3J0IHR5cGUgeyBTZWxlY3RPbmVSYWRpbyB9IGZyb20gXCIuLi9mb3Jtcy9mb3Jtcy5zZWxlY3RvbmVyYWRpby5qc1wiO1xuaW1wb3J0IHR5cGUgeyBTaWRlYmFyIH0gZnJvbSBcIi4uL3NpZGViYXIvc2lkZWJhci5qc1wiO1xuaW1wb3J0IHR5cGUgeyBTaWduYXR1cmUgfSBmcm9tIFwiLi4vc2lnbmF0dXJlLzEtd2lkZ2V0LmpzXCI7XG5pbXBvcnQgdHlwZSB7IFNpbXBsZUZpbGVVcGxvYWQgfSBmcm9tIFwiLi4vZmlsZXVwbG9hZC8zLWZpbGV1cGxvYWQuc2ltcGxlLmpzXCI7XG5pbXBvcnQgdHlwZSB7IFNsaWRlTWVudSB9IGZyb20gXCIuLi9tZW51L21lbnUuc2xpZGVtZW51LmpzXCI7XG5pbXBvcnQgdHlwZSB7IFNsaWRlciB9IGZyb20gXCIuLi9zbGlkZXIvc2xpZGVyLmpzXCI7XG5pbXBvcnQgdHlwZSB7IFNwZWVkRGlhbCB9IGZyb20gXCIuLi9zcGVlZGRpYWwvc3BlZWRkaWFsLmpzXCI7XG5pbXBvcnQgdHlwZSB7IFNwaW5uZXIgfSBmcm9tIFwiLi4vc3Bpbm5lci9zcGlubmVyLmpzXCI7XG5pbXBvcnQgdHlwZSB7IFNwbGl0dGVyIH0gZnJvbSBcIi4uL3NwbGl0dGVyL3NwbGl0dGVyLmpzXCI7XG5pbXBvcnQgdHlwZSB7IFNwbGl0QnV0dG9uIH0gZnJvbSBcIi4uL2Zvcm1zL2Zvcm1zLnNwbGl0YnV0dG9uLmpzXCI7XG5pbXBvcnQgdHlwZSB7IFNwb3RsaWdodCB9IGZyb20gXCIuLi9zcG90bGlnaHQvc3BvdGxpZ2h0LmpzXCI7XG5pbXBvcnQgdHlwZSB7IFN0YXRpY01lc3NhZ2UgfSBmcm9tIFwiLi4vc3RhdGljbWVzc2FnZS9zdGF0aWNtZXNzYWdlLmpzXCI7XG5pbXBvcnQgdHlwZSB7IFN0YWNrIH0gZnJvbSBcIi4uL3N0YWNrL3N0YWNrLmpzXCI7XG5pbXBvcnQgdHlwZSB7IFN0aWNreSB9IGZyb20gXCIuLi9zdGlja3kvc3RpY2t5LmpzXCI7XG5cbmltcG9ydCB0eXBlIHsgVGFiTWVudSB9IGZyb20gXCIuLi9tZW51L21lbnUudGFibWVudS5qc1wiO1xuaW1wb3J0IHR5cGUgeyBUYWJWaWV3IH0gZnJvbSBcIi4uL3RhYnZpZXcvdGFidmlldy5qc1wiO1xuaW1wb3J0IHR5cGUgeyBUYWdDbG91ZCB9IGZyb20gXCIuLi90YWdjbG91ZC90YWdjbG91ZC5qc1wiO1xuaW1wb3J0IHR5cGUgeyBUZXJtaW5hbCB9IGZyb20gXCIuLi90ZXJtaW5hbC90ZXJtaW5hbC5qc1wiO1xuaW1wb3J0IHR5cGUgeyBUZXh0RWRpdG9yIH0gZnJvbSBcIi4uL3RleHRlZGl0b3IvMS10ZXh0ZWRpdG9yLmpzXCI7XG5pbXBvcnQgdHlwZSB7IFRpZXJlZE1lbnUgfSBmcm9tIFwiLi4vbWVudS9tZW51LnRpZXJlZG1lbnUuanNcIjtcbmltcG9ydCB0eXBlIHsgVGltZWxpbmUgfSBmcm9tIFwiLi4vdGltZWxpbmUvMS10aW1lbGluZS5qc1wiO1xuaW1wb3J0IHR5cGUgeyBUb29sdGlwIH0gZnJvbSBcIi4uL3Rvb2x0aXAvdG9vbHRpcC5qc1wiO1xuaW1wb3J0IHR5cGUgeyBUcmVlVGFibGUgfSBmcm9tIFwiLi4vdHJlZXRhYmxlL3RyZWV0YWJsZS5qc1wiO1xuaW1wb3J0IHR5cGUgeyBUcmlTdGF0ZUNoZWNrYm94IH0gZnJvbSBcIi4uL3RyaXN0YXRlY2hlY2tib3gvdHJpc3RhdGVjaGVja2JveC5qc1wiO1xuaW1wb3J0IHR5cGUgeyBUb2dnbGVTd2l0Y2ggfSBmcm9tIFwiLi4vdG9nZ2xlc3dpdGNoL3RvZ2dsZXN3aXRjaC5qc1wiO1xuXG5pbXBvcnQgdHlwZSB7IFZlcnRpY2FsVHJlZSB9IGZyb20gXCIuLi90cmVlL3RyZWUudmVydGljYWwuanNcIjtcblxuaW1wb3J0IHR5cGUgeyBXaXphcmQgfSBmcm9tIFwiLi4vd2l6YXJkL3dpemFyZC5qc1wiO1xuXG4vKipcbiAqIE1hcHBpbmcgZnJvbSB0aGUgd2lkZ2V0IG5hbWUgdG8gdGhlIGNvcnJlc3BvbmRpbmcgd2lkZ2V0IGNsYXNzLlxuICogXG4gKiBJZiB5b3UgYXJlIHdyaXRpbmcgY3VzdG9tIFByaW1lRmFjZXMgd2lkZ2V0cyBhbmQgYXJlIHVzaW5nIFR5cGVTY3JpcHQsIHlvdSBjYW5cbiAqIGV4dGVuZCB0aGlzIGludGVyZmFjZSB2aWEgbW9kdWxlIGF1Z21lbnRhdGlvbiB0byBhZGQgeW91ciBjdXN0b20gd2lkZ2V0cyB0b1xuICogdGhlIHJlZ2lzdHJ5IGxpa2UgdGhpczpcbiAqIFxuICogYGBgdHNcbiAqIGltcG9ydCB7IFdpZGdldE1hcCB9IGZyb20gXCJwcmltZWZhY2VzL3ByaW1lZmFjZXNcIjtcbiAqIGRlY2xhcmUgbW9kdWxlIFwicHJpbWVmYWNlcy9wcmltZWZhY2VzXCIge1xuICogICBpbnRlcmZhY2UgV2lkZ2V0TWFwIHtcbiAqICAgICBZb3VDdXN0b21XaWRnZXQ/OiB0eXBlb2YgWW91ckN1c3RvbVdpZGdldDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgV2lkZ2V0TWFwIHtcbiAgICBBY2NvcmRpb25QYW5lbD86IHR5cGVvZiBBY2NvcmRpb25QYW5lbDtcbiAgICBBamF4U3RhdHVzPzogdHlwZW9mIEFqYXhTdGF0dXM7XG4gICAgQXV0b0NvbXBsZXRlPzogdHlwZW9mIEF1dG9Db21wbGV0ZTtcbiAgICBCYXNlVHJlZT86IHR5cGVvZiBCYXNlVHJlZTtcbiAgICBCYXNlV2lkZ2V0PzogdHlwZW9mIEJhc2VXaWRnZXQ7XG4gICAgQmxvY2tVST86IHR5cGVvZiBCbG9ja1VJO1xuICAgIEJyZWFkQ3J1bWI/OiB0eXBlb2YgQnJlYWRDcnVtYjtcbiAgICBCdXR0b24/OiB0eXBlb2YgQnV0dG9uO1xuICAgIENhc2NhZGVTZWxlY3Q/OiB0eXBlb2YgQ2FzY2FkZVNlbGVjdDtcbiAgICBDYWxlbmRhcj86IHR5cGVvZiBDYWxlbmRhcjtcbiAgICBDYXB0Y2hhPzogdHlwZW9mIENhcHRjaGE7XG4gICAgQ2Fyb3VzZWw/OiB0eXBlb2YgQ2Fyb3VzZWw7XG4gICAgQ2hhcnQ/OiB0eXBlb2YgQ2hhcnQ7XG4gICAgQ2hpcD86IHR5cGVvZiBDaGlwO1xuICAgIENoaXBzPzogdHlwZW9mIENoaXBzO1xuICAgIENsb2NrPzogdHlwZW9mIENsb2NrO1xuICAgIENvbG9yUGlja2VyPzogdHlwZW9mIENvbG9yUGlja2VyO1xuICAgIENvbHVtblRvZ2dsZXI/OiB0eXBlb2YgQ29sdW1uVG9nZ2xlcjtcbiAgICBDb21tYW5kQnV0dG9uPzogdHlwZW9mIENvbW1hbmRCdXR0b247XG4gICAgQ29tbWFuZExpbms/OiB0eXBlb2YgQ29tbWFuZExpbms7XG4gICAgQ29uZmlybVBvcHVwPzogdHlwZW9mIENvbmZpcm1Qb3B1cDtcbiAgICBDb25maXJtRGlhbG9nPzogdHlwZW9mIENvbmZpcm1EaWFsb2c7XG4gICAgQ29udGV4dE1lbnU/OiB0eXBlb2YgQ29udGV4dE1lbnU7XG4gICAgRGFzaGJvYXJkPzogdHlwZW9mIERhc2hib2FyZDtcbiAgICBEYXRhVmlldz86IHR5cGVvZiBEYXRhVmlldztcbiAgICBEYXRhR3JpZD86IHR5cGVvZiBEYXRhR3JpZDtcbiAgICBEYXRhTGlzdD86IHR5cGVvZiBEYXRhTGlzdDtcbiAgICBEYXRhU2Nyb2xsZXI/OiB0eXBlb2YgRGF0YVNjcm9sbGVyO1xuICAgIERhdGFUYWJsZT86IHR5cGVvZiBEYXRhVGFibGU7XG4gICAgRGF0ZVBpY2tlcj86IHR5cGVvZiBEYXRlUGlja2VyO1xuICAgIERlZmF1bHRDb21tYW5kPzogdHlwZW9mIERlZmF1bHRDb21tYW5kO1xuICAgIERlZmVycmVkV2lkZ2V0PzogdHlwZW9mIERlZmVycmVkV2lkZ2V0O1xuICAgIERpYWdyYW0/OiB0eXBlb2YgRGlhZ3JhbTtcbiAgICBEaWFsb2c/OiB0eXBlb2YgRGlhbG9nO1xuICAgIERvY2s/OiB0eXBlb2YgRG9jaztcbiAgICBEcmFnZ2FibGU/OiB0eXBlb2YgRHJhZ2dhYmxlO1xuICAgIERyb3BwYWJsZT86IHR5cGVvZiBEcm9wcGFibGU7XG4gICAgRHluYW1pY0RpYWxvZz86IHR5cGVvZiBEeW5hbWljRGlhbG9nO1xuICAgIER5bmFtaWNPdmVybGF5V2lkZ2V0PzogdHlwZW9mIER5bmFtaWNPdmVybGF5V2lkZ2V0O1xuICAgIEVmZmVjdD86IHR5cGVvZiBFZmZlY3Q7XG4gICAgRmllbGRzZXQ/OiB0eXBlb2YgRmllbGRzZXQ7XG4gICAgRmlsZVVwbG9hZD86IHR5cGVvZiBGaWxlVXBsb2FkO1xuICAgIEZyb3plbkRhdGFUYWJsZT86IHR5cGVvZiBGcm96ZW5EYXRhVGFibGU7XG4gICAgR2FsbGVyaWE/OiB0eXBlb2YgR2FsbGVyaWE7XG4gICAgR01hcD86IHR5cGVvZiBHTWFwO1xuICAgIEdyb3dsPzogdHlwZW9mIEdyb3dsO1xuICAgIEhvcml6b250YWxUcmVlPzogdHlwZW9mIEhvcml6b250YWxUcmVlO1xuICAgIElkbGVNb25pdG9yPzogdHlwZW9mIElkbGVNb25pdG9yO1xuICAgIEltYWdlQ29tcGFyZT86IHR5cGVvZiBJbWFnZUNvbXBhcmU7XG4gICAgSW1hZ2VDcm9wcGVyPzogdHlwZW9mIEltYWdlQ3JvcHBlcjtcbiAgICBJbWFnZVN3aXRjaD86IHR5cGVvZiBJbWFnZVN3aXRjaDtcbiAgICBJbnBsYWNlPzogdHlwZW9mIElucGxhY2U7XG4gICAgSW5wdXRNYXNrPzogdHlwZW9mIElucHV0TWFzaztcbiAgICBJbnB1dE51bWJlcj86IHR5cGVvZiBJbnB1dE51bWJlcjtcbiAgICBJbnB1dFRleHQ/OiB0eXBlb2YgSW5wdXRUZXh0O1xuICAgIElucHV0VGV4dGFyZWE/OiB0eXBlb2YgSW5wdXRUZXh0YXJlYTtcbiAgICBLZXlib2FyZD86IHR5cGVvZiBLZXlib2FyZDtcbiAgICBLZXlGaWx0ZXI/OiB0eXBlb2YgS2V5RmlsdGVyO1xuICAgIEtub2I/OiB0eXBlb2YgS25vYjtcbiAgICBMaWZlY3ljbGU/OiB0eXBlb2YgTGlmZWN5Y2xlO1xuICAgIExpbmtCdXR0b24/OiB0eXBlb2YgTGlua0J1dHRvbjtcbiAgICBMb2c/OiB0eXBlb2YgTG9nO1xuICAgIE1lZ2FNZW51PzogdHlwZW9mIE1lZ2FNZW51O1xuICAgIE1lbnU/OiB0eXBlb2YgTWVudTtcbiAgICBNZW51YmFyPzogdHlwZW9mIE1lbnViYXI7XG4gICAgTWVudUJ1dHRvbj86IHR5cGVvZiBNZW51QnV0dG9uO1xuICAgIE1lc3NhZ2U/OiB0eXBlb2YgTWVzc2FnZTtcbiAgICBNZXNzYWdlcz86IHR5cGVvZiBNZXNzYWdlcztcbiAgICBNaW5kbWFwPzogdHlwZW9mIE1pbmRtYXA7XG4gICAgTXVsdGlTZWxlY3RMaXN0Ym94PzogdHlwZW9mIE11bHRpU2VsZWN0TGlzdGJveDtcbiAgICBOb3RpZmljYXRpb25CYXI/OiB0eXBlb2YgTm90aWZpY2F0aW9uQmFyO1xuICAgIE9yZGVyTGlzdD86IHR5cGVvZiBPcmRlckxpc3Q7XG4gICAgT3JnYW5pZ3JhbT86IHR5cGVvZiBPcmdhbmlncmFtO1xuICAgIE91dHB1dFBhbmVsPzogdHlwZW9mIE91dHB1dFBhbmVsO1xuICAgIE92ZXJsYXlQYW5lbD86IHR5cGVvZiBPdmVybGF5UGFuZWw7XG4gICAgUGFnaW5hdG9yPzogdHlwZW9mIFBhZ2luYXRvcjtcbiAgICBQYW5lbD86IHR5cGVvZiBQYW5lbDtcbiAgICBQYW5lbE1lbnU/OiB0eXBlb2YgUGFuZWxNZW51O1xuICAgIFBhc3N3b3JkPzogdHlwZW9mIFBhc3N3b3JkO1xuICAgIFBob3RvQ2FtPzogdHlwZW9mIFBob3RvQ2FtO1xuICAgIFBpY2tMaXN0PzogdHlwZW9mIFBpY2tMaXN0O1xuICAgIFBsYWluTWVudT86IHR5cGVvZiBQbGFpbk1lbnU7XG4gICAgUG9sbD86IHR5cGVvZiBQb2xsO1xuICAgIFByb2dyZXNzQmFyPzogdHlwZW9mIFByb2dyZXNzQmFyO1xuICAgIFJhdGluZz86IHR5cGVvZiBSYXRpbmc7XG4gICAgUmVzaXphYmxlPzogdHlwZW9mIFJlc2l6YWJsZTtcbiAgICBTY2hlZHVsZT86IHR5cGVvZiBTY2hlZHVsZTtcbiAgICBTY3JvbGxUb3A/OiB0eXBlb2YgU2Nyb2xsVG9wO1xuICAgIFNjcm9sbFBhbmVsPzogdHlwZW9mIFNjcm9sbFBhbmVsO1xuICAgIFNlbGVjdEJvb2xlYW5CdXR0b24/OiB0eXBlb2YgU2VsZWN0Qm9vbGVhbkJ1dHRvbjtcbiAgICBTZWxlY3RCb29sZWFuQ2hlY2tib3g/OiB0eXBlb2YgU2VsZWN0Qm9vbGVhbkNoZWNrYm94O1xuICAgIFNlbGVjdENoZWNrYm94TWVudT86IHR5cGVvZiBTZWxlY3RDaGVja2JveE1lbnU7XG4gICAgU2VsZWN0TGlzdGJveD86IHR5cGVvZiBTZWxlY3RMaXN0Ym94O1xuICAgIFNlbGVjdE1hbnlCdXR0b24/OiB0eXBlb2YgU2VsZWN0TWFueUJ1dHRvbjtcbiAgICBTZWxlY3RNYW55Q2hlY2tib3g/OiB0eXBlb2YgU2VsZWN0TWFueUNoZWNrYm94O1xuICAgIFNlbGVjdE1hbnlNZW51PzogdHlwZW9mIFNlbGVjdE1hbnlNZW51O1xuICAgIFNlbGVjdE9uZUJ1dHRvbj86IHR5cGVvZiBTZWxlY3RPbmVCdXR0b247XG4gICAgU2VsZWN0T25lTWVudT86IHR5cGVvZiBTZWxlY3RPbmVNZW51O1xuICAgIFNlbGVjdE9uZUxpc3Rib3g/OiB0eXBlb2YgU2VsZWN0T25lTGlzdGJveDtcbiAgICBTZWxlY3RPbmVSYWRpbz86IHR5cGVvZiBTZWxlY3RPbmVSYWRpbztcbiAgICBTaWRlYmFyPzogdHlwZW9mIFNpZGViYXI7XG4gICAgU2lnbmF0dXJlPzogdHlwZW9mIFNpZ25hdHVyZTtcbiAgICBTaW1wbGVGaWxlVXBsb2FkPzogdHlwZW9mIFNpbXBsZUZpbGVVcGxvYWQ7XG4gICAgU2xpZGVNZW51PzogdHlwZW9mIFNsaWRlTWVudTtcbiAgICBTbGlkZXI/OiB0eXBlb2YgU2xpZGVyO1xuICAgIFNwZWVkRGlhbD86IHR5cGVvZiBTcGVlZERpYWw7XG4gICAgU3Bpbm5lcj86IHR5cGVvZiBTcGlubmVyO1xuICAgIFNwbGl0dGVyPzogdHlwZW9mIFNwbGl0dGVyO1xuICAgIFNwbGl0QnV0dG9uPzogdHlwZW9mIFNwbGl0QnV0dG9uO1xuICAgIFNwb3RsaWdodD86IHR5cGVvZiBTcG90bGlnaHQ7XG4gICAgU3RhY2s/OiB0eXBlb2YgU3RhY2s7XG4gICAgU3RhdGljTWVzc2FnZT86IHR5cGVvZiBTdGF0aWNNZXNzYWdlO1xuICAgIFN0aWNreT86IHR5cGVvZiBTdGlja3k7XG4gICAgVGFiTWVudT86IHR5cGVvZiBUYWJNZW51O1xuICAgIFRhYlZpZXc/OiB0eXBlb2YgVGFiVmlldztcbiAgICBUYWdDbG91ZD86IHR5cGVvZiBUYWdDbG91ZDtcbiAgICBUZXJtaW5hbD86IHR5cGVvZiBUZXJtaW5hbDtcbiAgICBUZXh0RWRpdG9yPzogdHlwZW9mIFRleHRFZGl0b3I7XG4gICAgVGllcmVkTWVudT86IHR5cGVvZiBUaWVyZWRNZW51O1xuICAgIFRpbWVsaW5lPzogdHlwZW9mIFRpbWVsaW5lO1xuICAgIFRvb2x0aXA/OiB0eXBlb2YgVG9vbHRpcDtcbiAgICBUcmVlVGFibGU/OiB0eXBlb2YgVHJlZVRhYmxlO1xuICAgIFRyaVN0YXRlQ2hlY2tib3g/OiB0eXBlb2YgVHJpU3RhdGVDaGVja2JveDtcbiAgICBUb2dnbGVTd2l0Y2g/OiB0eXBlb2YgVG9nZ2xlU3dpdGNoO1xuICAgIFZlcnRpY2FsVHJlZT86IHR5cGVvZiBWZXJ0aWNhbFRyZWU7XG4gICAgV2l6YXJkPzogdHlwZW9mIFdpemFyZDtcbn1cblxuLyoqXG4gKiBDYWxsYmFjayBmb3Ige0BsaW5rIGxvYWRXaWRnZXR9LiBUaGUgY2FsbGJhY2sgaXMgY2FsbGVkIG9uY2UgdGhlIHdpZGdldCB3YXMgbG9hZGVkLlxuICogQHR5cGVQYXJhbSBLIFRoZSBuYW1lIG9mIHRoZSB3aWRnZXQgdGhhdCB3YXMgbG9hZGVkLlxuICovXG5leHBvcnQgdHlwZSBPbldpZGdldExvYWRlZDxXaWRnZXROYW1lIGV4dGVuZHMga2V5b2YgV2lkZ2V0TWFwPiA9IChyZXN1bHQ6IFByb21pc2VTZXR0bGVkUmVzdWx0PFdpZGdldE1hcFtXaWRnZXROYW1lXT4pID0+IHZvaWQ7XG5cbi8qKlxuICogVGhlIHJlc3VsdCBvZiBhIHdpZGdldCBsb2FkaW5nIG9wZXJhdGlvbi4gVGhlIHJlc3VsdCBpcyBlaXRoZXIgXCJmdWxmaWxsZWRcIiB3aXRoXG4gKiB0aGUgbG9hZGVkIHdpZGdldHMsIG9yIFwicmVqZWN0ZWRcIiB3aXRoIHRoZSByZWFzb24gd2h5IHRoZSB3aWRnZXQgY291bGQgbm90IGJlIGxvYWRlZC5cbiAqIEB0eXBlUGFyYW0gQnVuZGxlIFR5cGUgb2YgdGhlIHdpZGdldHMgdGhhdCB3ZXJlIGxvYWRlZC5cbiAqL1xuZXhwb3J0IHR5cGUgV2lkZ2V0TG9hZGVyUmVzdWx0PEJ1bmRsZSBleHRlbmRzIFdpZGdldE1hcD4gPSBQcm9taXNlU2V0dGxlZFJlc3VsdDxCdW5kbGU+O1xuXG4vKipcbiAqIEEgY2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIG9uY2UgdGhlIHdpZGdldCB3YXMgbG9hZGVkLiBJdCBpcyBnaXZlbiB0aGUgcmVzdWx0XG4gKiB3aXRoIHRoZSB3aWRnZXRzLiBUaGUgcmVzdWx0IGlzIGVpdGhlciBcImZ1bGZpbGxlZFwiIHdpdGggdGhlIGxvYWRlZCB3aWRnZXQsIG9yXG4gKiBcInJlamVjdGVkXCIgd2l0aCB0aGUgcmVhc29uIHdoeSB0aGUgd2lkZ2V0IGNvdWxkIG5vdCBiZSBsb2FkZWQuXG4gKiBAdHlwZVBhcmFtIEJ1bmRsZSBUeXBlIG9mIHRoZSB3aWRnZXRzIHRoYXQgd2VyZSBsb2FkZWQuXG4gKiBAcGFyYW0gcmVzdWx0IFRoZSByZXN1bHQgb2YgdGhlIHdpZGdldCBsb2FkaW5nLlxuICovXG5leHBvcnQgdHlwZSBXaWRnZXRMb2FkZXJDYWxsYmFjazxCdW5kbGUgZXh0ZW5kcyBXaWRnZXRNYXA+ID0gKHJlc3VsdDogV2lkZ2V0TG9hZGVyUmVzdWx0PEJ1bmRsZT4pID0+IHZvaWQ7XG5cbi8qKlxuICogTG9hZGVyIGZvciB3aWRnZXRzLiBUaGUgaW1wbGVtZW50YXRpb24gbWF5IGVpdGhlciBsb2FkIHRoZSB3aWRnZXRzIHN5bmNocm9ub3VzbHlcbiAqIG9yIGFzeW5jaHJvbm91c2x5LiBUaGUgbG9hZGVyIG11c3QgY2FsbCB0aGUgcHJvdmlkZWQgY2FsbGJhY2sgd2hlbiBkb25lLCBlaXRoZXJcbiAqIHdpdGggdGhlIGxvYWRlZCB3aWRnZXQgb3Igd2l0aCB0aGUgcmVhc29uIHdoeSB0aGUgd2lkZ2V0IGNvdWxkIG5vdCBiZSBsb2FkZWQuXG4gKiBcbiAqIEEgbG9hZGVyIG1heSBsb2FkIG11bHRpcGxlIHdpZGdldHMgYXQgb25jZSBieSByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggbXVsdGlwbGVcbiAqIGVudHJpZXMsIG9uZSBmb3IgZWFjaCBsb2FkZWQgd2lkZ2V0LlxuICogXG4gKiBBIGxvYWRlciBtdXN0IHNwZWNpZnkgdGhlIHdpZGV0cyB3aGljaCBpdCBjYW4gbG9hZC4gVGhpcyBpcyB1c2VkIHRvIHByZXZlbnRcbiAqIGxvYWRpbmcgdGhlIHdpZGdldCBtdWx0aXBsZSB0aW1lcyAod2hpY2ggY291bGQgaGFwcGVuIHdoZW4gbXVsdGlwbGUgZGlmZmVyZW50XG4gKiB3aWRnZXRzIGFyZSByZXF1ZXN0ZWQgYXQgdGhlIHNhbWUgdGltZSkuXG4gKiBcbiAqIEB0eXBlUGFyYW0gQnVuZGxlIFR5cGUgb2YgdGhlIHdpZGdldHMgdGhhdCBjYW4gYmUgbG9hZGVkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFdpZGdldExvYWRlcjxCdW5kbGUgZXh0ZW5kcyBXaWRnZXRNYXA+IHtcbiAgICAvKipcbiAgICAgKiBUaGUgZnVuY3Rpb24gdGhhdCBsb2FkcyB0aGUgd2lkZ2V0cy4gVGhlIGZ1bmN0aW9uIG11c3QgY2FsbCB0aGUgcHJvdmlkZWRcbiAgICAgKiBjYWxsYmFjayBvbmNlIHRoZSB3aWRnZXRzIGFyZSBsb2FkZWQsIGVpdGhlciB3aXRoIHRoZSBsb2FkZWQgd2lkZ2V0cyBvclxuICAgICAqIHdpdGggdGhlIHJlYXNvbiB3aHkgdGhlIHdpZGdldHMgY291bGQgbm90IGJlIGxvYWRlZC5cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRvIGNhbGwgb25jZSB0aGUgd2lkZ2V0cyBhcmUgbG9hZGVkLlxuICAgICAqIEByZXR1cm5zIFRoZSBsb2FkZWQgd2lkZ2V0cywgb3IgdGhlIHJlYXNvbiB3aHkgdGhlIHdpZGdldHMgY291bGQgbm90IGJlIGxvYWRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2FkOiAoY2FsbGJhY2s6IFdpZGdldExvYWRlckNhbGxiYWNrPEJ1bmRsZT4pID0+IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQWxsIG5hbWVzIHRoYXQgdGhlIGxvYWRlciBjYW4gbG9hZC4gVGhpcyBpcyByZXF1aXJlZCB0byBwcmV2ZW50IGNhbGxpbmdcbiAgICAgKiB0aGUgbG9hZGVyIG11bHRpcGxlIHRpbWVzIGZvciBkaWZmZXJlbnQgd2lkZ2V0cyB0aGF0IGFyZSBsb2FkZWQgYnkgdGhlXG4gICAgICogc2FtZSBsb2FkZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd2lkZ2V0TmFtZXM6IFJlY29yZDxrZXlvZiBCdW5kbGUsIGJvb2xlYW4+O1xufTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgc2luZ2xlIGVudHJ5IGluIHRoZSB7QGxpbmsgV2lkZ2V0UmVnaXN0cnl9LiBUaGUgZW50cnkgY29udGFpbnMgdGhlXG4gKiBsb2FkZXIgdG8gbG9hZCB0aGUgd2lkZ2V0LiBJZiB0aGUgd2lkZ2V0IHdhcyBhbHJlYWR5IGxvYWRlZCwgdGhlIGVudHJ5IGFsc28gY29udGFpbnNcbiAqIHRoZSBsb2FkZWQgd2lkZ2V0LiBJZiB0aGUgd2lkZ2V0IGNvdWxkIG5vdCBiZSBsb2FkZWQsIHRoZSBlbnRyeSBjb250YWlucyB0aGUgZXJyb3JcbiAqIHRoYXQgb2NjdXJyZWQgZHVyaW5nIGxvYWRpbmcuXG4gKiBAdHlwZVBhcmFtIEsgVGhlIG5hbWUgb2YgdGhlIHdpZGdldC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBXaWRnZXRSZWdpc3RyeUVudHJ5PEsgZXh0ZW5kcyBrZXlvZiBXaWRnZXRNYXA+IHtcbiAgICByZWFkb25seSBsb2FkZXI6IFdpZGdldExvYWRlcjxSZWNvcmQ8SywgV2lkZ2V0TWFwW0tdPj47XG4gICAgdmFsdWU6IFByb21pc2VTZXR0bGVkUmVzdWx0PFdpZGdldE1hcFtLXT4gfCB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogUmVnaXN0cnkgd2l0aCBhbGwgd2lkZ2V0IHR5cGVzLiBUaGUga2V5IGlzIHRoZSB3aWRnZXQgbmFtZSwgc2VlIHtAbGluayBXaWRnZXRNYXB9LlxuICogVGhlIHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIHRoZSBsb2FkZXIgZm9yIHRoZSB3aWRnZXQsIGFuZCB0aGUgbG9hZGVkIGlmIHdpZGdldFxuICogaWYgYWxyZWFkeSBsb2FkZWQuXG4gKi9cbmV4cG9ydCB0eXBlIFdpZGdldFJlZ2lzdHJ5ID0ge1xuICAgIHJlYWRvbmx5IFtQIGluIGtleW9mIFdpZGdldE1hcF0tPzogV2lkZ2V0UmVnaXN0cnlFbnRyeTxQPjtcbn07XG5cbi8qKlxuICogRm9yIHdpZGdldHMgdGhhdCBhcmUgY3VycmVudGx5IGJlaW5nIGxvYWRlZDogTWFwIGZyb20gYSB3aWRnZXQgbmFtZSB0byBhIHNldCBvZlxuICogcGVuZGluZyBjYWxsYmFja3MgdG8gYmUgaW52b2tlZCBvbmNlIHRoZSB3aWRnZXQgZmluaXNoZXMgbG9hZGluZy5cbiAqL1xuY29uc3QgTG9hZGluZ1dpZGdldHM6IE1hcDxrZXlvZiBXaWRnZXRNYXAsIE9uV2lkZ2V0TG9hZGVkPGtleW9mIFdpZGdldE1hcD5bXT4gPSBuZXcgTWFwKCk7XG5cbi8qKiBBbGwgd2lkZ2V0cyB0aGF0IGFyZSBpbmNsdWRlZCBpbiB0aGUgbWFpbiBidW5kbGUgKGFuZCBhcmUgdGh1cyBub3QgbG9hZGVkIGR5bmFtaWNhbGx5KSAqL1xuY29uc3QgU3RhdGljV2lkZ2V0cyA9IHsgQWpheFN0YXR1cywgQmFzZVdpZGdldCwgRGVmZXJyZWRXaWRnZXQsIER5bmFtaWNPdmVybGF5V2lkZ2V0LCBQb2xsIH07XG5cbi8qKiBcIkxvYWRlclwiIGZvciBhbGwgd2lkZ2V0cyB0aGF0IGFyZSBpbmNsdWRlZCBpbiB0aGUgbWFpbiBidW5kbGUgKGFuZCBhcmUgdGh1cyBub3QgbG9hZGVkIGR5bmFtaWNhbGx5KSAqL1xuY29uc3QgU3RhdGljTG9hZGVyOiBXaWRnZXRMb2FkZXI8dHlwZW9mIFN0YXRpY1dpZGdldHM+ID0ge1xuICAgIGxvYWQ6IGNhbGxiYWNrID0+IHtcbiAgICAgICAgY2FsbGJhY2soeyBzdGF0dXM6IFwiZnVsZmlsbGVkXCIsIHZhbHVlOiB7IEFqYXhTdGF0dXMsIEJhc2VXaWRnZXQsIERlZmVycmVkV2lkZ2V0LCBEeW5hbWljT3ZlcmxheVdpZGdldCwgUG9sbCB9IH0pO1xuICAgIH0sXG4gICAgd2lkZ2V0TmFtZXM6IHtcbiAgICAgICAgQWpheFN0YXR1czogdHJ1ZSxcbiAgICAgICAgQmFzZVdpZGdldDogdHJ1ZSxcbiAgICAgICAgRGVmZXJyZWRXaWRnZXQ6IHRydWUsXG4gICAgICAgIER5bmFtaWNPdmVybGF5V2lkZ2V0OiB0cnVlLFxuICAgICAgICBQb2xsOiB0cnVlLFxuICAgIH0sXG59O1xuXG4vKipcbiAqIExvYWRlciBmb3IgYWxsIHdpZGdldHMgaW4gdGhlIGNvbW1vbiBidW5kbGUuIEFsbCBjb21tb24gd2lkZ2V0cyBhcmUgaW5jbHVkZWQgaW4gXG4gKiBhIHNpbmdsZSBzY3JpcHQgZmlsZS5cbiAqL1xuY29uc3QgQ29tbW9uTG9hZGVyOiBXaWRnZXRMb2FkZXI8dHlwZW9mIGltcG9ydChcIi4vY29yZS53aWRnZXQuY29tbW9uLmpzXCIpPiA9IHtcbiAgICBsb2FkOiAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgaW1wb3J0KFwiLi9jb3JlLndpZGdldC5jb21tb24uanNcIikudGhlbihcbiAgICAgICAgICAgIHdpZGdldHMgPT4gY2FsbGJhY2soeyBzdGF0dXM6IFwiZnVsZmlsbGVkXCIsIHZhbHVlOiB3aWRnZXRzIH0pLFxuICAgICAgICAgICAgZXJyb3IgPT4gY2FsbGJhY2soeyBzdGF0dXM6IFwicmVqZWN0ZWRcIiwgcmVhc29uOiBlcnJvciB9KSxcbiAgICAgICAgKTtcbiAgICB9LFxuICAgIHdpZGdldE5hbWVzOiB7XG4gICAgICAgIEFjY29yZGlvblBhbmVsOiB0cnVlLFxuICAgICAgICBBdXRvQ29tcGxldGU6IHRydWUsXG4gICAgICAgIEJhc2VUcmVlOiB0cnVlLFxuICAgICAgICBCbG9ja1VJOiB0cnVlLFxuICAgICAgICBCcmVhZENydW1iOiB0cnVlLFxuICAgICAgICBCdXR0b246IHRydWUsXG4gICAgICAgIENhcm91c2VsOiB0cnVlLFxuICAgICAgICBDYXNjYWRlU2VsZWN0OiB0cnVlLFxuICAgICAgICBDaGlwOiB0cnVlLFxuICAgICAgICBDaGlwczogdHJ1ZSxcbiAgICAgICAgQ29sdW1uVG9nZ2xlcjogdHJ1ZSxcbiAgICAgICAgQ29tbWFuZEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgQ29tbWFuZExpbms6IHRydWUsXG4gICAgICAgIENvbnRleHRNZW51OiB0cnVlLFxuICAgICAgICBDb25maXJtRGlhbG9nOiB0cnVlLFxuICAgICAgICBDb25maXJtUG9wdXA6IHRydWUsXG4gICAgICAgIERhc2hib2FyZDogdHJ1ZSxcbiAgICAgICAgRGF0YUdyaWQ6IHRydWUsXG4gICAgICAgIERhdGFMaXN0OiB0cnVlLFxuICAgICAgICBEYXRhU2Nyb2xsZXI6IHRydWUsXG4gICAgICAgIERhdGFUYWJsZTogdHJ1ZSxcbiAgICAgICAgRGF0YVZpZXc6IHRydWUsXG4gICAgICAgIERlZmF1bHRDb21tYW5kOiB0cnVlLFxuICAgICAgICBEaWFsb2c6IHRydWUsXG4gICAgICAgIERyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgRHJvcHBhYmxlOiB0cnVlLFxuICAgICAgICBEeW5hbWljRGlhbG9nOiB0cnVlLFxuICAgICAgICBFZmZlY3Q6IHRydWUsXG4gICAgICAgIEdyb3dsOiB0cnVlLFxuICAgICAgICBIb3Jpem9udGFsVHJlZTogdHJ1ZSxcbiAgICAgICAgSW5wbGFjZTogdHJ1ZSxcbiAgICAgICAgRmllbGRzZXQ6IHRydWUsXG4gICAgICAgIEZyb3plbkRhdGFUYWJsZTogdHJ1ZSxcbiAgICAgICAgSW5wdXRUZXh0OiB0cnVlLFxuICAgICAgICBJbnB1dFRleHRhcmVhOiB0cnVlLFxuICAgICAgICBMaW5rQnV0dG9uOiB0cnVlLFxuICAgICAgICBNZW51OiB0cnVlLFxuICAgICAgICBNZW51YmFyOiB0cnVlLFxuICAgICAgICBNZW51QnV0dG9uOiB0cnVlLFxuICAgICAgICBNZWdhTWVudTogdHJ1ZSxcbiAgICAgICAgTWVzc2FnZTogdHJ1ZSxcbiAgICAgICAgTWVzc2FnZXM6IHRydWUsXG4gICAgICAgIE11bHRpU2VsZWN0TGlzdGJveDogdHJ1ZSxcbiAgICAgICAgTm90aWZpY2F0aW9uQmFyOiB0cnVlLFxuICAgICAgICBPcmRlckxpc3Q6IHRydWUsXG4gICAgICAgIE91dHB1dFBhbmVsOiB0cnVlLFxuICAgICAgICBPdmVybGF5UGFuZWw6IHRydWUsXG4gICAgICAgIFBhZ2luYXRvcjogdHJ1ZSxcbiAgICAgICAgUGFuZWw6IHRydWUsXG4gICAgICAgIFBhbmVsTWVudTogdHJ1ZSxcbiAgICAgICAgUGFzc3dvcmQ6IHRydWUsXG4gICAgICAgIFBpY2tMaXN0OiB0cnVlLFxuICAgICAgICBQbGFpbk1lbnU6IHRydWUsXG4gICAgICAgIFByb2dyZXNzQmFyOiB0cnVlLFxuICAgICAgICBSYXRpbmc6IHRydWUsXG4gICAgICAgIFJlc2l6YWJsZTogdHJ1ZSxcbiAgICAgICAgU2Nyb2xsVG9wOiB0cnVlLFxuICAgICAgICBTZWxlY3RCb29sZWFuQnV0dG9uOiB0cnVlLFxuICAgICAgICBTZWxlY3RCb29sZWFuQ2hlY2tib3g6IHRydWUsXG4gICAgICAgIFNlbGVjdENoZWNrYm94TWVudTogdHJ1ZSxcbiAgICAgICAgU2VsZWN0TGlzdGJveDogdHJ1ZSxcbiAgICAgICAgU2VsZWN0TWFueUJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgU2VsZWN0TWFueUNoZWNrYm94OiB0cnVlLFxuICAgICAgICBTZWxlY3RNYW55TWVudTogdHJ1ZSxcbiAgICAgICAgU2VsZWN0T25lQnV0dG9uOiB0cnVlLFxuICAgICAgICBTZWxlY3RPbmVMaXN0Ym94OiB0cnVlLFxuICAgICAgICBTZWxlY3RPbmVNZW51OiB0cnVlLFxuICAgICAgICBTZWxlY3RPbmVSYWRpbzogdHJ1ZSxcbiAgICAgICAgU2lkZWJhcjogdHJ1ZSxcbiAgICAgICAgU2xpZGVyOiB0cnVlLFxuICAgICAgICBTbGlkZU1lbnU6IHRydWUsXG4gICAgICAgIFNwZWVkRGlhbDogdHJ1ZSxcbiAgICAgICAgU3BsaXRCdXR0b246IHRydWUsXG4gICAgICAgIFNwaW5uZXI6IHRydWUsXG4gICAgICAgIFNwbGl0dGVyOiB0cnVlLFxuICAgICAgICBTcG90bGlnaHQ6IHRydWUsXG4gICAgICAgIFN0YXRpY01lc3NhZ2U6IHRydWUsXG4gICAgICAgIFN0aWNreTogdHJ1ZSxcbiAgICAgICAgVGFiTWVudTogdHJ1ZSxcbiAgICAgICAgVGFnQ2xvdWQ6IHRydWUsXG4gICAgICAgIFRhYlZpZXc6IHRydWUsXG4gICAgICAgIFRpZXJlZE1lbnU6IHRydWUsXG4gICAgICAgIFRvb2x0aXA6IHRydWUsXG4gICAgICAgIFRvZ2dsZVN3aXRjaDogdHJ1ZSxcbiAgICAgICAgVHJlZVRhYmxlOiB0cnVlLFxuICAgICAgICBUcmlTdGF0ZUNoZWNrYm94OiB0cnVlLFxuICAgICAgICBWZXJ0aWNhbFRyZWU6IHRydWUsXG4gICAgICAgIFdpemFyZDogdHJ1ZSxcbiAgICB9LFxufTtcblxuZnVuY3Rpb24gcmVjb3JkRW50cmllczxSIGV4dGVuZHMgUmVjb3JkPFByb3BlcnR5S2V5LCB1bmtub3duPj4ocmVjb3JkOiBSKTogcmVhZG9ubHkgeyBbUCBpbiBrZXlvZiBSXTogW1AsIFJbUF1dIH1ba2V5b2YgUl1bXSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHJlY29yZCkgYXMgcmVhZG9ubHkgeyBbUCBpbiBrZXlvZiBSXTogW1AsIFJbUF1dIH1ba2V5b2YgUl1bXTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbG9hZGVyIGZvciBhIHNpbmdsZSB3aWRnZXQsIGxvYWRlZCBkeW5hbWljYWxseS5cbiAqIEBwYXJhbSBsb2FkIFRoZSBmdW5jdGlvbiB0aGF0IGxvYWRzIHRoZSB3aWRnZXQuXG4gKiBAcmV0dXJucyBUaGUgbG9hZGVyIGZvciB0aGUgd2lkZ2V0LlxuICovXG5mdW5jdGlvbiBTaW5nbGVMb2FkZXI8SyBleHRlbmRzIGtleW9mIFdpZGdldE1hcD4od2lkZ2V0TmFtZTogSywgbG9hZDogKCkgPT4gUHJvbWlzZTxSZWNvcmQ8SywgV2lkZ2V0TWFwW0tdPj4pOiBXaWRnZXRMb2FkZXI8UmVjb3JkPEssIFdpZGdldE1hcFtLXT4+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkOiBjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICBsb2FkKCkudGhlbihcbiAgICAgICAgICAgICAgICB3aWRnZXRzID0+IGNhbGxiYWNrKHsgc3RhdHVzOiBcImZ1bGZpbGxlZFwiLCB2YWx1ZTogd2lkZ2V0cyB9KSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjYWxsYmFjayh7IHN0YXR1czogXCJyZWplY3RlZFwiLCByZWFzb246IGVycm9yIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2lkZ2V0TmFtZXM6IHsgW3dpZGdldE5hbWVdOiB0cnVlIH0gYXMgUmVjb3JkPEssIGJvb2xlYW4+LFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGluc2VydExvYWRlZFdpZGdldHMoXG4gICAgbG9hZGVyOiBXaWRnZXRMb2FkZXI8UGFydGlhbDxXaWRnZXRNYXA+PixcbiAgICByZXN1bHQ6IFdpZGdldExvYWRlclJlc3VsdDxQYXJ0aWFsPFdpZGdldE1hcD4+XG4pOiB2b2lkIHtcbiAgICBjb25zdCBhbGxDYWxsYmFja3M6ICgoKSA9PiB2b2lkKVtdID0gW107XG5cbiAgICAvLyBTdG9yZSB0aGUgbG9hZGVkIHdpZGdldCB0eXBlcyBpbiB0aGUgd2lkZ2V0IGNhY2hlXG4gICAgLy8gSWYgdGhlIHdpZGdldCBmYWlsZWQgdG8gbG9hZCwgc3RvcmUgdGhlIGVycm9yIHNvIHdlIGRvbid0IHRyeSB0byBsb2FkIGl0IGFnYWluLlxuICAgIGZvciAoY29uc3QgW3dpZGdldE5hbWUsIGluY2x1ZGVdIG9mIHJlY29yZEVudHJpZXMobG9hZGVyLndpZGdldE5hbWVzKSkge1xuICAgICAgICBpZiAoIWluY2x1ZGUpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVnaXN0cnlFbnRyeSA9IGdldFdpZGdldFJlZ2lzdHJ5RW50cnkod2lkZ2V0TmFtZSk7XG4gICAgICAgIGlmIChyZWdpc3RyeUVudHJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIFByaW1lRmFjZXMuZXJyb3IoYFdpZGdldCAnJHt3aWRnZXROYW1lfScgbm90IHJlZ2lzdGVyZWRgKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWdpc3RyeUVudHJ5LnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIFByaW1lRmFjZXMud2FybihgV2lkZ2V0ICcke3dpZGdldE5hbWV9JyBhbHJlYWR5IGxvYWRlZCAob3IgZmFpbGVkIHRvIGxvYWQpYCk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB3aWRnZXRSZXN1bHQ6IFByb21pc2VTZXR0bGVkUmVzdWx0PFdpZGdldE1hcFtrZXlvZiBXaWRnZXRNYXBdPjtcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwiZnVsZmlsbGVkXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZGdldCA9IHJlc3VsdC52YWx1ZVt3aWRnZXROYW1lXTtcbiAgICAgICAgICAgIHdpZGdldFJlc3VsdCA9IHdpZGdldCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyB7IHN0YXR1czogXCJmdWxmaWxsZWRcIiwgdmFsdWU6IHdpZGdldCB9XG4gICAgICAgICAgICAgICAgOiB7IHN0YXR1czogXCJyZWplY3RlZFwiLCByZWFzb246IG5ldyBFcnJvcihgV2lkZ2V0ICcke3dpZGdldE5hbWV9JyBtaXNzaW5nIGluIHRoZSBsb2FkZXIgcmVzdWx0IWApIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aWRnZXRSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RyeUVudHJ5LnZhbHVlID0gd2lkZ2V0UmVzdWx0O1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSBMb2FkaW5nV2lkZ2V0cy5nZXQod2lkZ2V0TmFtZSkgPz8gW107XG4gICAgICAgIExvYWRpbmdXaWRnZXRzLmRlbGV0ZSh3aWRnZXROYW1lKTtcbiAgICAgICAgYWxsQ2FsbGJhY2tzLnB1c2goLi4uY2FsbGJhY2tzLm1hcChjYWxsYmFjayA9PiAoKSA9PiBjYWxsYmFjayh3aWRnZXRSZXN1bHQpKSk7XG4gICAgfVxuXG4gICAgLy8gSW52b2tlIGNhbGxiYWNrcyBhZnRlciBzdG9yaW5nIHRoZSBsb2FkZWQgd2lkZ2V0cyBpbiB0aGUgV2lkZ2V0UmVnaXN0cnksXG4gICAgLy8gaW4gY2FzZSBhIGNhbGxiYWNrcyBjYWxscyB0aGUgbG9hZFdpZGdldCBmdW5jdGlvbiBhZ2Fpbi5cbiAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIGFsbENhbGxiYWNrcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIFByaW1lRmFjZXMuZXJyb3IoXCJFcnJvciBpbiB3aWRnZXQgY2FsbGJhY2s6IFwiICsgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRXaWRnZXRSZWdpc3RyeUVudHJ5PEsgZXh0ZW5kcyBrZXlvZiBXaWRnZXRNYXA+KHdpZGdldE5hbWU6IEspOiBXaWRnZXRSZWdpc3RyeUVudHJ5PEs+IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gV2lkZ2V0UmVnaXN0cnlbd2lkZ2V0TmFtZV0gYXMgV2lkZ2V0UmVnaXN0cnlFbnRyeTxLPiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdpZGdldElmUHJlc2VudDxLIGV4dGVuZHMga2V5b2YgV2lkZ2V0TWFwPih3aWRnZXROYW1lOiBLKTogV2lkZ2V0TWFwW0tdIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBlbnRyeSA9IGdldFdpZGdldFJlZ2lzdHJ5RW50cnkod2lkZ2V0TmFtZSk7XG4gICAgcmV0dXJuIGVudHJ5Py52YWx1ZT8uc3RhdHVzID09PSBcImZ1bGZpbGxlZFwiID8gZW50cnkudmFsdWUudmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogTG9hZHMgYSB3aWRnZXQgYW5kIGNhbGxzIHRoZSBjYWxsYmFjayB3aXRoIHRoZSBsb2FkZWQgd2lkZ2V0LiBJZiB0aGUgd2lkZ2V0IGlzIGF2YWlsYWJsZVxuICogc3luY2hyb25vdXNseSwgdGhlIGNhbGxiYWNrIGlzIGNhbGxlZCBpbW1lZGlhdGVseS4gT3RoZXJ3aXNlLCB0aGUgY2FsbGJhY2sgaXMgY2FsbGVkIHdoZW5cbiAqIG9uY2UgdGhlIHdpZGdldCBpcyBhdmFpbGFibGUuXG4gKiBAdHlwZVBhcmFtIEsgVGhlIG5hbWUgb2YgdGhlIHdpZGdldCB0byBsb2FkLlxuICogQHBhcmFtIHdpZGdldE5hbWUgTmFtZSBvZiB0aGUgd2lkZ2V0IHRvIGxvYWQsIGUuLmcgYElucHV0VGV4dGAuXG4gKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdpdGggdGhlIGxvYWRlZCB3aWRnZXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkV2lkZ2V0PEsgZXh0ZW5kcyBrZXlvZiBXaWRnZXRNYXA+KHdpZGdldE5hbWU6IEssIGNhbGxiYWNrOiBPbldpZGdldExvYWRlZDxLPik6IHZvaWQge1xuICAgIGNvbnN0IHJlZ2lzdHJ5RW50cnkgPSBnZXRXaWRnZXRSZWdpc3RyeUVudHJ5KHdpZGdldE5hbWUpO1xuICAgIGlmIChyZWdpc3RyeUVudHJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2FsbGJhY2soeyBzdGF0dXM6IFwicmVqZWN0ZWRcIiwgcmVhc29uOiBuZXcgRXJyb3IoYFdpZGdldCAke3dpZGdldE5hbWV9IG5vdCByZWdpc3RlcmVkYCkgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBXYXMgdGhlIHdpZGdldCBhbHJlYWR5IGxvYWRlZD8gVGhlbiBqdXN0IGNhbGwgdGhlIGNhbGxiYWNrIHdpdGggdGhlIGxvYWQgcmVzdWx0LlxuICAgIGNvbnN0IGxvYWRSZXN1bHQgPSByZWdpc3RyeUVudHJ5LnZhbHVlO1xuICAgIGlmIChsb2FkUmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2FsbGJhY2sobG9hZFJlc3VsdCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJcyB0aGUgd2lkZ2V0IGFscmVhZHkgbG9hZGluZz8gSWYgc28sIGRvbid0IGxvYWQgaXQgYWdhaW4uXG4gICAgY29uc3QgYWxyZWFkeUxvYWRpbmcgPSBMb2FkaW5nV2lkZ2V0cy5nZXQod2lkZ2V0TmFtZSk7XG4gICAgaWYgKGFscmVhZHlMb2FkaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYWxyZWFkeUxvYWRpbmcucHVzaChjYWxsYmFjayBhcyBPbldpZGdldExvYWRlZDxrZXlvZiBXaWRnZXRNYXA+KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFdpZGdldCBuZWVkcyB0byBiZSBsb2FkZWQuXG4gICAgY29uc3QgbG9hZGVyID0gcmVnaXN0cnlFbnRyeS5sb2FkZXI7XG4gICAgaWYgKGxvYWRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZvciAoY29uc3QgW3dpZGdldE5hbWUsIGluY2x1ZGVdIG9mIHJlY29yZEVudHJpZXMobG9hZGVyLndpZGdldE5hbWVzKSkge1xuICAgICAgICAgICAgaWYgKGluY2x1ZGUpIHtcbiAgICAgICAgICAgICAgICBMb2FkaW5nV2lkZ2V0cy5zZXQod2lkZ2V0TmFtZSwgW2NhbGxiYWNrIGFzIE9uV2lkZ2V0TG9hZGVkPGtleW9mIFdpZGdldE1hcD5dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsb2FkZXIubG9hZChyZXN1bHQgPT4gaW5zZXJ0TG9hZGVkV2lkZ2V0cyhsb2FkZXIsIHJlc3VsdCkpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gV2lkZ2V0IG5vdCBmb3VuZC5cbiAgICBjYWxsYmFjayh7IHN0YXR1czogXCJyZWplY3RlZFwiLCByZWFzb246IG5ldyBFcnJvcihcIldpZGdldCBjbGFzcyAnXCIgKyB3aWRnZXROYW1lICsgXCInIG5vdCBmb3VuZCFcIikgfSk7XG59XG5cbi8qKlxuICogUmVnaXN0cnkgd2l0aCBhbGwgd2lkZ2V0IHR5cGVzLiBUaGUga2V5IGlzIHRoZSB3aWRnZXQgbmFtZSwgc2VlIHtAbGluayBXaWRnZXRNYXB9LlxuICogVGhlIHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIHRoZSBsb2FkZXIgZm9yIHRoZSB3aWRnZXQsIGFuZCB0aGUgbG9hZGVkIGlmIHdpZGdldFxuICogaWYgYWxyZWFkeSBsb2FkZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBXaWRnZXRSZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnkgPSB7XG4gICAgQWNjb3JkaW9uUGFuZWw6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBBamF4U3RhdHVzOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogU3RhdGljTG9hZGVyIH0sXG4gICAgQXV0b0NvbXBsZXRlOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgQmFzZVRyZWU6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBCYXNlV2lkZ2V0OiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogU3RhdGljTG9hZGVyIH0sXG4gICAgQmxvY2tVSTogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIEJyZWFkQ3J1bWI6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBCdXR0b246IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBDYXNjYWRlU2VsZWN0OiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgQ2FsZW5kYXI6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBTaW5nbGVMb2FkZXIoXCJDYWxlbmRhclwiLCAoKSA9PiBpbXBvcnQoXCIuLi9jYWxlbmRhci80LWNhbGVuZGFyLmpzXCIpKSB9LFxuICAgIENhcHRjaGE6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBTaW5nbGVMb2FkZXIoXCJDYXB0Y2hhXCIsICgpID0+IGltcG9ydChcIi4uL2NhcHRjaGEvY2FwdGNoYS5qc1wiKSkgfSxcbiAgICBDYXJvdXNlbDogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIENoYXJ0OiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogU2luZ2xlTG9hZGVyKFwiQ2hhcnRcIiwgKCkgPT4gaW1wb3J0KFwiLi4vY2hhcnQvOS1jaGFydGpzLXdpZGdldC5qc1wiKSkgfSxcbiAgICBDaGlwOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgQ2hpcHM6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBDbG9jazogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IFNpbmdsZUxvYWRlcihcIkNsb2NrXCIsICgpID0+IGltcG9ydChcIi4uL2Nsb2NrL2Nsb2NrLmpzXCIpKSB9LFxuICAgIENvbG9yUGlja2VyOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogU2luZ2xlTG9hZGVyKFwiQ29sb3JQaWNrZXJcIiwgKCkgPT4gaW1wb3J0KFwiLi4vY29sb3JwaWNrZXIvMS1jb2xvcnBpY2tlci5qc1wiKSkgfSxcbiAgICBDb2x1bW5Ub2dnbGVyOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgQ29tbWFuZEJ1dHRvbjogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIENvbW1hbmRMaW5rOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgQ29uZmlybVBvcHVwOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgQ29uZmlybURpYWxvZzogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIENvbnRleHRNZW51OiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgRGFzaGJvYXJkOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgRGF0YVZpZXc6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBEYXRhR3JpZDogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIERhdGFMaXN0OiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgRGF0YVNjcm9sbGVyOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgRGF0YVRhYmxlOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgRGF0ZVBpY2tlcjogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IFNpbmdsZUxvYWRlcihcIkRhdGVQaWNrZXJcIiwgKCkgPT4gaW1wb3J0KFwiLi4vZGF0ZXBpY2tlci8xLWRhdGVwaWNrZXIuanNcIikpIH0sXG4gICAgRGVmYXVsdENvbW1hbmQ6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBEZWZlcnJlZFdpZGdldDogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IFN0YXRpY0xvYWRlciB9LFxuICAgIERpYWdyYW06IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBTaW5nbGVMb2FkZXIoXCJEaWFncmFtXCIsICgpID0+IGltcG9ydChcIi4uL2RpYWdyYW0vMS1kaWFncmFtLmpzXCIpKSB9LFxuICAgIERpYWxvZzogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIERvY2s6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBTaW5nbGVMb2FkZXIoXCJEb2NrXCIsICgpID0+IGltcG9ydChcIi4uL2RvY2svZG9jay5qc1wiKSkgfSxcbiAgICBEcmFnZ2FibGU6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBEcm9wcGFibGU6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBEeW5hbWljRGlhbG9nOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgRHluYW1pY092ZXJsYXlXaWRnZXQ6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBTdGF0aWNMb2FkZXIgfSxcbiAgICBFZmZlY3Q6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBGaWVsZHNldDogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIEZpbGVVcGxvYWQ6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBTaW5nbGVMb2FkZXIoXCJGaWxlVXBsb2FkXCIsICgpID0+IGltcG9ydChcIi4uL2ZpbGV1cGxvYWQvMi1maWxldXBsb2FkLmpzXCIpKSB9LFxuICAgIEZyb3plbkRhdGFUYWJsZTogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIEdhbGxlcmlhOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogU2luZ2xlTG9hZGVyKFwiR2FsbGVyaWFcIiwgKCkgPT4gaW1wb3J0KFwiLi4vZ2FsbGVyaWEvMS1nYWxsZXJpYS5qc1wiKSkgfSxcbiAgICBHTWFwOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogU2luZ2xlTG9hZGVyKFwiR01hcFwiLCAoKSA9PiBpbXBvcnQoXCIuLi9nbWFwL2dtYXAuanNcIikpIH0sXG4gICAgR3Jvd2w6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBIb3Jpem9udGFsVHJlZTogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIElkbGVNb25pdG9yOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogU2luZ2xlTG9hZGVyKFwiSWRsZU1vbml0b3JcIiwgKCkgPT4gaW1wb3J0KFwiLi4vaWRsZW1vbml0b3IvMS1pZGxlbW9uaXRvci5qc1wiKSkgfSxcbiAgICBJbWFnZUNvbXBhcmU6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBTaW5nbGVMb2FkZXIoXCJJbWFnZUNvbXBhcmVcIiwgKCkgPT4gaW1wb3J0KFwiLi4vaW1hZ2Vjb21wYXJlL2ltYWdlY29tcGFyZS13aWRnZXQuanNcIikpIH0sXG4gICAgSW1hZ2VDcm9wcGVyOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogU2luZ2xlTG9hZGVyKFwiSW1hZ2VDcm9wcGVyXCIsICgpID0+IGltcG9ydChcIi4uL2ltYWdlY3JvcHBlci9pbWFnZWNyb3BwZXIuanNcIikpIH0sXG4gICAgSW1hZ2VTd2l0Y2g6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBTaW5nbGVMb2FkZXIoXCJJbWFnZVN3aXRjaFwiLCAoKSA9PiBpbXBvcnQoXCIuLi9pbWFnZXN3aXRjaC8xLWltYWdlc3dpdGNoLmpzXCIpKSB9LFxuICAgIElucGxhY2U6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBJbnB1dE1hc2s6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBTaW5nbGVMb2FkZXIoXCJJbnB1dE1hc2tcIiwgKCkgPT4gaW1wb3J0KFwiLi4vaW5wdXRtYXNrLzEtaW5wdXRtYXNrLmpzXCIpKSB9LFxuICAgIElucHV0TnVtYmVyOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogU2luZ2xlTG9hZGVyKFwiSW5wdXROdW1iZXJcIiwgKCkgPT4gaW1wb3J0KFwiLi4vaW5wdXRudW1iZXIvMS1pbnB1dG51bWJlci5qc1wiKSkgfSxcbiAgICBJbnB1dFRleHQ6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBJbnB1dFRleHRhcmVhOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgS2V5Ym9hcmQ6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBTaW5nbGVMb2FkZXIoXCJLZXlib2FyZFwiLCAoKSA9PiBpbXBvcnQoXCIuLi9rZXlib2FyZC8yLWtleWJvYXJkLmpzXCIpKSB9LFxuICAgIEtleUZpbHRlcjogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IFNpbmdsZUxvYWRlcihcIktleUZpbHRlclwiLCAoKSA9PiBpbXBvcnQoXCIuLi9rZXlmaWx0ZXIvMS1rZXlmaWx0ZXIuanNcIikpIH0sXG4gICAgS25vYjogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IFNpbmdsZUxvYWRlcihcIktub2JcIiwgKCkgPT4gaW1wb3J0KFwiLi4va25vYi8yLWtub2IuanNcIikpIH0sXG4gICAgTGlmZWN5Y2xlOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogU2luZ2xlTG9hZGVyKFwiTGlmZWN5Y2xlXCIsICgpID0+IGltcG9ydChcIi4uL2xpZmVjeWNsZS9saWZlY3ljbGUuanNcIikpIH0sXG4gICAgTGlua0J1dHRvbjogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIExvZzogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IFNpbmdsZUxvYWRlcihcIkxvZ1wiLCAoKSA9PiBpbXBvcnQoXCIuLi9sb2cvbG9nLmpzXCIpKSB9LFxuICAgIE1lZ2FNZW51OiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgTWVudTogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIE1lbnViYXI6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBNZW51QnV0dG9uOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgTWVzc2FnZTogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIE1lc3NhZ2VzOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgTWluZG1hcDogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IFNpbmdsZUxvYWRlcihcIk1pbmRtYXBcIiwgKCkgPT4gaW1wb3J0KFwiLi4vbWluZG1hcC9taW5kbWFwLmpzXCIpKSB9LFxuICAgIE11bHRpU2VsZWN0TGlzdGJveDogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIE5vdGlmaWNhdGlvbkJhcjogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIE9yZGVyTGlzdDogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIE9yZ2FuaWdyYW06IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBTaW5nbGVMb2FkZXIoXCJPcmdhbmlncmFtXCIsICgpID0+IGltcG9ydChcIi4uL29yZ2FuaWdyYW0vb3JnYW5pZ3JhbS5qc1wiKSkgfSxcbiAgICBPdXRwdXRQYW5lbDogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIE92ZXJsYXlQYW5lbDogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIFBhZ2luYXRvcjogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIFBhbmVsOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgUGFuZWxNZW51OiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgUGFzc3dvcmQ6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBQaG90b0NhbTogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IFNpbmdsZUxvYWRlcihcIlBob3RvQ2FtXCIsICgpID0+IGltcG9ydChcIi4uL3Bob3RvY2FtLzEtcGhvdG9jYW0uanNcIikpIH0sXG4gICAgUGlja0xpc3Q6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBQbGFpbk1lbnU6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBQb2xsOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogU3RhdGljTG9hZGVyIH0sXG4gICAgUHJvZ3Jlc3NCYXI6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBSYXRpbmc6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBSZXNpemFibGU6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBTY2hlZHVsZTogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IFNpbmdsZUxvYWRlcihcIlNjaGVkdWxlXCIsICgpID0+IGltcG9ydChcIi4uL3NjaGVkdWxlLzEtc2NoZWR1bGUuanNcIikpIH0sXG4gICAgU2Nyb2xsVG9wOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgU2Nyb2xsUGFuZWw6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBTaW5nbGVMb2FkZXIoXCJTY3JvbGxQYW5lbFwiLCAoKSA9PiBpbXBvcnQoXCIuLi9zY3JvbGxwYW5lbC8xLXNjcm9sbHBhbmVsLmpzXCIpKSB9LFxuICAgIFNlbGVjdEJvb2xlYW5CdXR0b246IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBTZWxlY3RCb29sZWFuQ2hlY2tib3g6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBTZWxlY3RDaGVja2JveE1lbnU6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBTZWxlY3RMaXN0Ym94OiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgU2VsZWN0TWFueUJ1dHRvbjogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIFNlbGVjdE1hbnlDaGVja2JveDogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIFNlbGVjdE1hbnlNZW51OiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgU2VsZWN0T25lQnV0dG9uOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgU2VsZWN0T25lTWVudTogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIFNlbGVjdE9uZUxpc3Rib3g6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBTZWxlY3RPbmVSYWRpbzogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIFNpZGViYXI6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBTaWduYXR1cmU6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBTaW5nbGVMb2FkZXIoXCJTaWduYXR1cmVcIiwgKCkgPT4gaW1wb3J0KFwiLi4vc2lnbmF0dXJlLzEtd2lkZ2V0LmpzXCIpKSB9LFxuICAgIFNpbXBsZUZpbGVVcGxvYWQ6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBTaW5nbGVMb2FkZXIoXCJTaW1wbGVGaWxlVXBsb2FkXCIsICgpID0+IGltcG9ydChcIi4uL2ZpbGV1cGxvYWQvMy1maWxldXBsb2FkLnNpbXBsZS5qc1wiKSkgfSxcbiAgICBTbGlkZU1lbnU6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBTbGlkZXI6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBTcGVlZERpYWw6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBTcGlubmVyOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgU3BsaXR0ZXI6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBTcGxpdEJ1dHRvbjogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIFNwb3RsaWdodDogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIFN0YWNrOiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogU2luZ2xlTG9hZGVyKFwiU3RhY2tcIiwgKCkgPT4gaW1wb3J0KFwiLi4vc3RhY2svc3RhY2suanNcIikpIH0sXG4gICAgU3RhdGljTWVzc2FnZTogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIFN0aWNreTogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIFRhYk1lbnU6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBUYWJWaWV3OiB7IHZhbHVlOiB1bmRlZmluZWQsIGxvYWRlcjogQ29tbW9uTG9hZGVyIH0sXG4gICAgVGFnQ2xvdWQ6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBUZXJtaW5hbDogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IFNpbmdsZUxvYWRlcihcIlRlcm1pbmFsXCIsICgpID0+IGltcG9ydChcIi4uL3Rlcm1pbmFsL3Rlcm1pbmFsLmpzXCIpKSB9LFxuICAgIFRleHRFZGl0b3I6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBTaW5nbGVMb2FkZXIoXCJUZXh0RWRpdG9yXCIsICgpID0+IGltcG9ydChcIi4uL3RleHRlZGl0b3IvMS10ZXh0ZWRpdG9yLmpzXCIpKSB9LFxuICAgIFRpZXJlZE1lbnU6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBUaW1lbGluZTogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IFNpbmdsZUxvYWRlcihcIlRpbWVsaW5lXCIsICgpID0+IGltcG9ydChcIi4uL3RpbWVsaW5lLzEtdGltZWxpbmUuanNcIikpIH0sXG4gICAgVG9vbHRpcDogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIFRyZWVUYWJsZTogeyB2YWx1ZTogdW5kZWZpbmVkLCBsb2FkZXI6IENvbW1vbkxvYWRlciB9LFxuICAgIFRyaVN0YXRlQ2hlY2tib3g6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBUb2dnbGVTd2l0Y2g6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBWZXJ0aWNhbFRyZWU6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbiAgICBXaXphcmQ6IHsgdmFsdWU6IHVuZGVmaW5lZCwgbG9hZGVyOiBDb21tb25Mb2FkZXIgfSxcbn07XG4iLCAiaW1wb3J0IHsgZ2V0V2lkZ2V0SWZQcmVzZW50IH0gZnJvbSBcIi4vY29yZS53aWRnZXQucmVnaXN0cnlcIjtcblxuLyoqXG4gKiBUaGlzIG9iamVjdCBjb250YWlucyB0aGUgIHdpZGdldCBjbGFzc2VzIHRoYXQgYXJlIGN1cnJlbnRseSBhdmFpbGFibGUuIFRoZSBrZXkgaXMgdGhlIG5hbWUgb2YgdGhlIHdpZGdldCwgdGhlXG4gKiB2YWx1ZSB0aGUgY2xhc3MgKGNvbnN0cnVjdG9yKSBvZiB0aGUgd2lkZ2V0LiBQbGVhc2Ugbm90ZSB0aGF0IHdpZGdldHMgYXJlIHVzdWFsbHkgY3JlYXRlZCBieSB0aGUgUHJpbWVGYWNlc1xuICogZnJhbWV3b3JrIGFuZCBzaG91bGQgbm90IGJlIGNyZWF0ZWQgbWFudWFsbHkuXG4gKlxuICogVGhlcmUgYXJlIGEgZmV3IGJhc2UgY2xhc3NlcyBkZWZpbmVkIGJ5IFByaW1lRmFjZXMgdGhhdCB5b3UgY2FuIHVzZSB3aGVuIHdyaXRpbmcgdGhlIGNsaWVudC1zaWRlIHBhcnQgb2YgeW91clxuICogY3VzdG9tIHdpZGdldDpcbiAqXG4gKiAtIHtAbGluayBCYXNlV2lkZ2V0fTogQmFzZSBjbGFzcyB0aGF0IHlvdSBzaG91bGQgZXh0ZW5kIGlmIHlvdSBkbyBub3QgcmVxdWlyZSBhbnkgYWR2YW5jZWQgZnVuY3Rpb25hbGl0eS5cbiAqIC0ge0BsaW5rIERlZmVycmVkV2lkZ2V0fTogV2hlbiB5b3Ugd2lkZ2V0IG5lZWRzIHRvIGJlIGluaXRpYWxpemVkIG9uIHRoZSBjbGllbnQgaW4gYSB3YXkgdGhhdCByZXF1aXJlcyB0aGVcbiAqIGVsZW1lbnQgdG8gYmUgdmlzaWJsZSwgeW91IGNhbiB1c2UgdGhpcyBjbGFzcyBhcyBhIGJhc2UuIEEgd2lkZ2V0IG1heSBub3QgYmUgdmlzaWJsZSwgZm9yIGV4YW1wbGUsIHdoZW4gaXQgaXNcbiAqIGluc2lkZSBhIGRpYWxvZyBvciB0YWIuIFRoZSBkZWZlcnJlZCB3aWRnZXQgcHJvdmlkZXMgdGhlIG1ldGhvZCB7QGxpbmsgRGVmZXJyZWRXaWRnZXQuYWRkRGVmZXJyZWRSZW5kZXJ9XG4gKiAodG8gcmVnaXN0ZXIgYSBsaXN0ZW5lcikgYW5kIHtAbGluayBEZWZlcnJlZFdpZGdldC5yZW5kZXJEZWZlcnJlZH0gKHRvIHJlbmRlciB0aGUgd2lkZ2V0IG9uY2UgaXQgaXMgdmlzaWJsZSkuXG4gKiAtIHtAbGluayBEeW5hbWljT3ZlcmxheVdpZGdldH06IFdoZW4geW91ciB3aWRnZXQgaXMgYW4gb3ZlcmxheSB3aXRoIGR5bmFtaWNhbGx5IGxvYWRlZCBjb250ZW50LCB5b3UgY2FuIHVzZSB0aGlzXG4gKiBiYXNlIGNsYXNzLlxuICpcbiAqIE5vdGUgdG8gVHlwZVNjcmlwdCB1c2VyczogeW91IGNvdWxkIHVzZSB0aGVzZSB3aWRnZXQgY2xhc3NlcyB0byBjaGVjayB3aGV0aGVyIGEgd2lkZ2V0IGluc3RhbmNlIGlzIG9mIGEgY2VydGFpblxuICogdHlwZTpcbiAqXG4gKiA8ZGV0YWlscz5cbiAqXG4gKiA8c3VtbWFyeT5DbGljayB0byB2aWV3PC9zdW1tYXJ5PlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIHR5cGUgQ29uc3RydWN0b3I8VD4gPSBuZXcgKC4uLmFyZ3M6IGFueSkgPT4gVDtcbiAqXG4gKiBmdW5jdGlvbiBnZXRXaWRnZXROYW1lKFxuICogICB3aWRnZXRUeXBlOlxuICogICAgIFByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXRcbiAqICAgICB8IENvbnN0cnVjdG9yPFByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXQ+XG4gKiApOiBzdHJpbmcge1xuICogICBpZiAodHlwZW9mIHdpZGdldFR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICogICAgIGZvciAoY29uc3QgW25hbWUsIHR5cGVdIG9mIE9iamVjdC5lbnRyaWVzKFByaW1lRmFjZXMud2lkZ2V0KSkge1xuICogICAgICAgaWYgKHR5cGUgPT09IHdpZGdldFR5cGUpIHtcbiAqICAgICAgICAgcmV0dXJuIG5hbWU7XG4gKiAgICAgICB9XG4gKiAgICAgfVxuICogICB9XG4gKiAgIGVsc2Uge1xuICogICAgIGNvbnN0IHdpZGdldENsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHdpZGdldFR5cGUpO1xuICogICAgIGZvciAoY29uc3QgW25hbWUsIHR5cGVdIG9mIE9iamVjdC5lbnRyaWVzKFByaW1lRmFjZXMud2lkZ2V0KSkge1xuICogICAgICAgaWYgKFxuICogICAgICAgICBcInByb3RvdHlwZVwiIGluIHR5cGUgJiYgd2lkZ2V0Q2xhc3MgPT09IHR5cGUucHJvdG90eXBlXG4gKiAgICAgICAgIHx8IHdpZGdldENsYXNzID09PSB0eXBlXG4gKiAgICAgICApIHtcbiAqICAgICAgICAgcmV0dXJuIG5hbWU7XG4gKiAgICAgICB9XG4gKiAgICAgfVxuICogICB9XG4gKiAgIHJldHVybiBcIkJhc2VXaWRnZXRcIjtcbiAqIH1cbiAqXG4gKiBmdW5jdGlvbiBnZXRXaWRnZXRPZlR5cGU8XG4gKiAgIEMgZXh0ZW5kcyBDb25zdHJ1Y3Rvcjxhbnk+ID0gQ29uc3RydWN0b3I8UHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldD5cbiAqID4od2lkZ2V0VmFyOiBzdHJpbmcsIHdpZGdldFR5cGU6IEMpOiBJbnN0YW5jZVR5cGU8Qz4gfCB1bmRlZmluZWQge1xuICogICBjb25zdCB3aWRnZXQgPSBQRih3aWRnZXRWYXIpO1xuICogICBpZiAod2lkZ2V0ICE9PSB1bmRlZmluZWQgJiYgd2lkZ2V0ICE9PSBudWxsKSB7XG4gKiAgICAgaWYgKHdpZGdldCBpbnN0YW5jZW9mIHdpZGdldFR5cGUpIHtcbiAqICAgICAgIC8vIEB0cy1pZ25vcmVcbiAqICAgICAgIHJldHVybiB3aWRnZXQ7XG4gKiAgICAgfVxuICogICAgIGVsc2Uge1xuICogICAgICAgUHJpbWVGYWNlcy5lcnJvcihbXG4gKiAgICAgICAgIGBXaWRnZXQgZm9yIHZhciAnJHt3aWRnZXRWYXJ9JyBvZiB0eXBlICcke2dldFdpZGdldE5hbWUod2lkZ2V0KX0nYCxcbiAqICAgICAgICAgYHdhcyBmb3VuZCwgYnV0IGV4cGVjdGVkIHR5cGUgJyR7Z2V0V2lkZ2V0TmFtZSh3aWRnZXRUeXBlKX0nIWBcbiAqICAgICAgIF0uam9pbihcIiBcIikpO1xuICogICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAqICAgICB9XG4gKiAgIH1cbiAqICAgZWxzZSB7XG4gKiAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKlxuICogPC9kZXRhaWxzPlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gY291bGQgdGhlbiBiZSBjYWxsZWQgbGlrZSB0aGlzOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIC8vIEF1dG9tYXRpY2FsbHkgaW5mZXJyZWQgdG8gYmUgb2YgdHlwZSBcIlByaW1lRmFjZXMud2lkZ2V0LkNoYXJ0IHwgdW5kZWZpbmVkXCJcbiAqIGNvbnN0IGNoYXJ0ID0gZ2V0V2lkZ2V0QnlWYXIoXCJjaGFyV2lkZ2V0VmFyXCIsIFByaW1lRmFjZXMud2lkZ2V0LkNoYXJ0KTtcbiAqIGBgYFxuICpcbiAqIEBuYW1lc3BhY2VcbiAqL1xuUHJpbWVGYWNlcy53aWRnZXQgPSB7fTtcblxuLyoqXG4gKiBfX1ByaW1lRmFjZXMgQmFzZSBXaWRnZXRfX1xuICpcbiAqIEJhc2VXaWRnZXQgZm9yIHRoZSBQcmltZUZhY2VzIHdpZGdldHMgZnJhbWV3b3JrLlxuICpcbiAqIEl0IHByb3ZpZGVzIHNvbWUgY29tbW9uIGZ1bmN0aW9uYWxpdHkgZm9yIG90aGVyIHdpZGdldHMuIEFsbCB3aWRnZXRzIHNob3VsZCBpbmhlcml0IGZyb20gdGhpcyBjbGFzcywgb3IgYW5cbiAqIGFwcHJvcHJpYXRlIHN1YmNsYXNzIGluIHRoZSBmb2xsb3dpbmcgbWFubmVyOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IEJhc2VXaWRnZXQgfSBmcm9tIFwiQHByaW1lZmFjZXMvcHJpbWVmYWNlc1wiO1xuICogY2xhc3MgTXlXaWRnZXQgZXh0ZW5kcyBCYXNlV2lkZ2V0IHtcbiAqXG4gKiAgIGluaXQoY2ZnKSB7XG4gKiAgICAgc3VwZXIuaW5pdChjZmcpO1xuICogICAgIC8vIGN1c3RvbSBpbml0aWFsaXphdGlvblxuICogICB9XG4gKlxuICogICAvLyBtb3JlIG1ldGhvZHMgcmVxdWlyZWQgYnkgeW91ciB3aWRnZXRcbiAqXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBJZiB5b3VyIHdpZGdldCBuZWVkcyB0byBiZSB2aXNpYmxlIGJlZm9yZSBpdCBjYW4gYmUgcmVuZGVyZWQsIGNvbnNpZGVyIHVzaW5nIHRoZSB7QGxpbmsgRGVmZXJyZWRXaWRnZXR9IGFzIGFcbiAqIGJhc2UgY2xhc3MgaW5zdGVhZC5cbiAqXG4gKiBAdHlwZWRlZiBQcmltZUZhY2VzLndpZGdldC5SZWZyZXNoTGlzdGVuZXIgQSByZWZyZXNoIGxpc3RlbmVyIGZvciBhIFByaW1lRmFjZXMgd2lkZ2V0LiBJdCBpcyBpbnZva2VkIHdoZW4gdGhlXG4gKiB3aWRnZXQgaXMgcmVsb2FkZWQsIHN1Y2ggYXMgZHVyaW5nIEFKQVggdXBkYXRlcy4gVXNlIHtAbGluayBCYXNlV2lkZ2V0LmFkZFJlZnJlc2hMaXN0ZW5lcn0gdG8gYWRkIGEgcmVmcmVzaFxuICogbGlzdGVuZXIuXG4gKiBAdGVtcGxhdGUgUHJpbWVGYWNlcy53aWRnZXQuUmVmcmVzaExpc3RlbmVyLlRXaWRnZXQgVGhlIHR5cGUgb2YgdGhlIHdpZGdldCB0aGF0IGlzIGJlaW5nIHJlZnJlc2hlZC5cbiAqIEB0aGlzIHtUV2lkZ2V0fSBQcmltZUZhY2VzLndpZGdldC5SZWZyZXNoTGlzdGVuZXJcbiAqIEBwYXJhbSB7VFdpZGdldH0gUHJpbWVGYWNlcy53aWRnZXQuUmVmcmVzaExpc3RlbmVyLndpZGdldCBUaGUgd2lkZ2V0IHRoYXQgaXMgYmVpbmcgcmVmcmVzaGVkLlxuICpcbiAqIEB0eXBlZGVmIFByaW1lRmFjZXMud2lkZ2V0LkRlc3Ryb3lMaXN0ZW5lciBBIGRlc3Ryb3kgbGlzdGVuZXIgZm9yIGEgUHJpbWVGYWNlcyB3aWRnZXQuIEl0IGlzIGludm9rZWQgd2hlbiB0aGVcbiAqIHdpZGdldCBpcyByZW1vdmVkLCBzdWNoIGFzIGR1cmluZyBBSkFYIHVwZGF0ZXMuIFVzZSB7QGxpbmsgQmFzZVdpZGdldC5hZGREZXN0cm95TGlzdGVuZXJ9IHRvIGFkZCBhIGRlc3Ryb3lcbiAqIGxpc3RlbmVyLlxuICogQHRlbXBsYXRlIFByaW1lRmFjZXMud2lkZ2V0LkRlc3Ryb3lMaXN0ZW5lci5UV2lkZ2V0IFRoZSB0eXBlIG9mIHRoZSB3aWRnZXQgdGhhdCBpcyBiZWluZyBkZXN0cm95ZWQuXG4gKiBAdGhpcyB7VFdpZGdldH0gUHJpbWVGYWNlcy53aWRnZXQuRGVzdHJveUxpc3RlbmVyXG4gKiBAcGFyYW0ge1RXaWRnZXR9IFByaW1lRmFjZXMud2lkZ2V0LkRlc3Ryb3lMaXN0ZW5lci53aWRnZXQgVGhlIHdpZGdldCB0aGF0IGlzIGJlaW5nIGRlc3Ryb3llZC5cbiAqIFxuICogQHR5cGVkZWYgUHJpbWVGYWNlcy53aWRnZXQuUHJlQ29uc3RydWN0Q2FsbGJhY2sgQSBjYWxsYmFjayBmb3IgYSBQcmltZUZhY2VzIHdpZGdldC4gQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCBpc1xuICogaW52b2tlZCBiZWZvcmUgYSB3aWRnZXQgaXMgY3JlYXRlZCwgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUge0BsaW5rIEJhc2VXaWRnZXQuaW5pdCB8IGluaXR9IG1ldGhvZC4gVGhpcyBpc1xuICogdXN1YWxseSBzcGVjaWZpZWQgdmlhIHRoZSBgd2lkZ2V0UHJlQ29uc3RydWN0YCBhdHRyaWJ1dGUgb24gdGhlIEpTRiBjb21wb25lbnQuXG4gKiBAdGhpcyB7QmFzZVdpZGdldH0gUHJpbWVGYWNlcy53aWRnZXQuUHJlQ29uc3RydWN0Q2FsbGJhY2tcbiAqIEBwYXJhbSB7QmFzZVdpZGdldH0gUHJpbWVGYWNlcy53aWRnZXQuUHJlQ29uc3RydWN0Q2FsbGJhY2suY2ZnIFRoZSB3aWRnZXQgY29uZmlndXJhdGlvbi5cbiAqIFxuICogQHR5cGVkZWYgUHJpbWVGYWNlcy53aWRnZXQuUG9zdENvbnN0cnVjdENhbGxiYWNrIEEgY2FsbGJhY2sgZm9yIGEgUHJpbWVGYWNlcyB3aWRnZXQuIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgaXNcbiAqIGludm9rZWQgYWZ0ZXIgYSB3aWRnZXQgd2FzIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LCBhdCB0aGUgZW5kIG9mIHRoZSB7QGxpbmsgQmFzZVdpZGdldC5pbml0IHwgaW5pdH0gbWV0aG9kLiBUaGlzIGlzXG4gKiB1c3VhbGx5IHNwZWNpZmllZCB2aWEgdGhlIGB3aWRnZXRQb3N0Q29uc3RydWN0YCBhdHRyaWJ1dGUgb24gdGhlIEpTRiBjb21wb25lbnQuIE5vdGUgdGhhdCB0aGlzIGlzIGFsc28gY2FsbGVkXG4gKiBkdXJpbmcgYSBgcmVmcmVzaGAgKEFKQVggdXBkYXRlKS5cbiAqIEB0aGlzIHtCYXNlV2lkZ2V0fSBQcmltZUZhY2VzLndpZGdldC5Qb3N0Q29uc3RydWN0Q2FsbGJhY2tcbiAqIEBwYXJhbSB7QmFzZVdpZGdldH0gUHJpbWVGYWNlcy53aWRnZXQuUG9zdENvbnN0cnVjdENhbGxiYWNrLndpZGdldCBUaGUgd2lkZ2V0IHRoYXQgd2FzIGNvbnN0cnVjdGVkLlxuICogXG4gKiBAdHlwZWRlZiBQcmltZUZhY2VzLndpZGdldC5Qb3N0UmVmcmVzaENhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCBhZnRlciBhIHdpZGdldCB3YXMgcmVmcmVzaGVkXG4gKiBhZnRlciBhbiBBSkFYIHVwZGF0ZSwgYXQgdGhlIGVuZCBvZiB0aGUge0BsaW5rIEJhc2VXaWRnZXQucmVmcmVzaCB8IHJlZnJlc2h9IG1ldGhvZC4gVGhpcyBpcyB1c3VhbGx5IHNwZWNpZmllZFxuICogdmlhIHRoZSBgd2lkZ2V0UG9zdFJlZnJlc2hgIGF0dHJpYnV0ZSBvbiB0aGUgSlNGIGNvbXBvbmVudC5cbiAqIEB0aGlzIHtCYXNlV2lkZ2V0fSBQcmltZUZhY2VzLndpZGdldC5Qb3N0UmVmcmVzaENhbGxiYWNrXG4gKiBAcGFyYW0ge0Jhc2VXaWRnZXR9IFByaW1lRmFjZXMud2lkZ2V0LlBvc3RSZWZyZXNoQ2FsbGJhY2sud2lkZ2V0IFRoZSB3aWRnZXQgdGhhdCB3YXMgcmVmcmVzaGVkLlxuICogXG4gKiBAdHlwZWRlZiBQcmltZUZhY2VzLndpZGdldC5QcmVEZXN0cm95Q2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIGJlZm9yZSBhIHdpZGdldCBpcyBhYm91dCB0byBiZVxuICogZGVzdHJveWVkLCBlLmcuLCB3aGVuIHRoZSBjb21wb25lbnQgd2FzIHJlbW92ZWQgYXQgdGhlIGVuZCBvZiBhbiBBSkFYIHVwZGF0ZS4gVGhpcyBpcyBjYWxsZWQgYXQgdGhlIGJlZ2lubmluZ1xuICogb2YgdGhlIHtAbGluayBCYXNlV2lkZ2V0LmRlc3Ryb3kgfCBkZXN0cm95fSBtZXRob2QuIFRoaXMgaXMgdXN1YWxseSBzcGVjaWZpZWQgdmlhIHRoZSBgd2lkZ2V0UHJlRGVzdHJveWBcbiAqIGF0dHJpYnV0ZSBvbiB0aGUgSlNGIGNvbXBvbmVudC5cbiAqIEB0aGlzIHtCYXNlV2lkZ2V0fSBQcmltZUZhY2VzLndpZGdldC5QcmVEZXN0cm95Q2FsbGJhY2tcbiAqIEBwYXJhbSB7QmFzZVdpZGdldH0gUHJpbWVGYWNlcy53aWRnZXQuUHJlRGVzdHJveUNhbGxiYWNrLndpZGdldCBUaGUgd2lkZ2V0IHRoYXQgaXMgYWJvdXQgdG8gYmUgZGVzdHJveWVkLlxuICogXG4gKiBAdGVtcGxhdGUge1ByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXRDZmd9IFtUQ2ZnPVByaW1lRmFjZXMud2lkZ2V0LkJhc2VXaWRnZXRDZmddIFR5cGUgb2YgdGhlIGNvbmZpZ3VyYXRpb25cbiAqIG9iamVjdCBmb3IgdGhpcyB3aWRnZXQuXG4gKlxuICogQHByb3Age1ByaW1lRmFjZXMuUGFydGlhbFdpZGdldENmZzxUQ2ZnPn0gY2ZnIFRoZSBjb25maWd1cmF0aW9uIG9mIHRoaXMgd2lkZ2V0IGluc3RhbmNlLiBQbGVhc2Ugbm90ZSB0aGF0XG4gKiBubyBwcm9wZXJ0eSBpcyBndWFyYW50ZWVkIHRvIGJlIHByZXNlbnQsIHlvdSBzaG91bGQgYWx3YXlzIGNoZWNrIGZvciBgdW5kZWZpbmVkYCBiZWZvcmUgYWNjZXNzaW5nIGEgcHJvcGVydHkuXG4gKiBUaGlzIGlzIHBhcnRseSBiZWNhdXNlIHRoZSB2YWx1ZSBvZiBhIHByb3BlcnR5IGlzIG5vdCB0cmFuc21pdHRlZCBmcm9tIHRoZSBzZXJ2ZXIgdG8gdGhlIGNsaWVudCB3aGVuIGl0IGVxdWFsc1xuICogdGhlIGRlZmF1bHQuXG4gKiBAcHJvcCB7UHJpbWVGYWNlcy53aWRnZXQuRGVzdHJveUxpc3RlbmVyPEJhc2VXaWRnZXQ+W119IGRlc3Ryb3lMaXN0ZW5lcnMgQXJyYXkgb2YgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMgaW52b2tlZFxuICogd2hlbiB0aGlzIHdpZGdldCBpcyBkZXN0cm95ZWQuIFlvdSBzaG91bGQgbm9ybWFsbHkgbm90IHVzZSBtb2RpZnkgdGhpcyBkaXJlY3RseSwgdXNlIHtAbGluayBhZGREZXN0cm95TGlzdGVuZXJ9XG4gKiBpbnN0ZWFkLlxuICogQHByb3Age3N0cmluZyB8IHN0cmluZ1tdfSBpZCBUaGUgY2xpZW50LXNpZGUgSUQgb2YgdGhpcyB3aWRnZXQsIHdpdGggYWxsIHBhcmVudCBuYW1pbmcgY29udGFpbmVycywgc3VjaCBhc1xuICogYG15Rm9ybTpteVdpZGdldGAuIFRoaXMgaXMgYWxzbyB0aGUgSUQgb2YgdGhlIGNvbnRhaW5lciBIVE1MIGVsZW1lbnQgZm9yIHRoaXMgd2lkZ2V0LiBJbiBjYXNlIHRoZSB3aWRnZXQgbmVlZHNcbiAqIG11bHRpcGxlIGNvbnRhaW5lciBlbGVtZW50cyAoc3VjaCBhcyB7QGxpbmsgUGFnaW5hdG9yfSksIHRoaXMgbWF5IGFsc28gYmUgYW4gYXJyYXkgaWYgSURzLlxuICogQHByb3Age0pRdWVyeX0ganEgVGhlIGpRdWVyeSBpbnN0YW5jZSBvZiB0aGUgY29udGFpbmVyIGVsZW1lbnQgb2YgdGhpcyB3aWRnZXQuIEluIGNhc2Uge0BsaW5rIGlkfSBpcyBhbiBhcnJheSwgaXRcbiAqIHdpbGwgY29udGFpbiBtdWx0aXBsZSBlbGVtZW50cy4gUGxlYXNlIG5vdGUgdGhhdCBzb21lIHdpZGdldHMgaGF2ZSBnb3Qgbm90IERPTSBlbGVtZW50cyBhdCBhbGwsIGluIHRoaXMgY2FzZSB0aGlzXG4gKiB3aWxsIGJlIGFuIGVtcHR5IGpRdWVyeSBpbnN0YW5jZS5cbiAqIEBwcm9wIHtzdHJpbmd9IGpxSWQgQSBDU1Mgc2VsZWN0b3IgZm9yIHRoZSBjb250YWluZXIgZWxlbWVudCAob3IgZWxlbWVudHMsIGluIGNhc2Uge0BsaW5rIGlkfSBpcyBhbiBhcnJheSkgb2ZcbiAqIHRoaXMgd2lkZ2V0LCBUaGlzIGlzIHVzdWFsbHkgYW4gSUQgc2VsZWN0b3IgKHRoYXQgaXMgcHJvcGVybHkgZXNjYXBlZCkuIFlvdSBjYW4gc2VsZWN0IHRoZSBjb250YWluZXIgZWxlbWVudCBvclxuICogZWxlbWVudHMgbGlrZSB0aGlzOiBgJCh3aWRnZXQuanFJZClgLlxuICogQHByb3Age1ByaW1lRmFjZXMud2lkZ2V0LlJlZnJlc2hMaXN0ZW5lcjxCYXNlV2lkZ2V0PltdfSByZWZyZXNoTGlzdGVuZXJzIEFycmF5IG9mIHJlZ2lzdGVyZWQgbGlzdGVuZXJzIGludm9rZWRcbiAqIHdoZW4gdGhpcyB3aWRnZXQgaXMgcmVmcmVzaGVkLiBZb3Ugc2hvdWxkIG5vcm1hbGx5IG5vdCB1c2UgbW9kaWZ5IHRoaXMgZGlyZWN0bHksIHVzZSB7QGxpbmsgYWRkUmVmcmVzaExpc3RlbmVyfVxuICogaW5zdGVhZC5cbiAqIEBwcm9wIHtzdHJpbmd9IHdpZGdldFZhciBUaGUgbmFtZSBvZiB0aGUgd2lkZ2V0IHZhcmlhYmxlcyBvZiB0aGlzIHdpZGdldC4gVGhlIHdpZGdldCB2YXJpYWJsZSBjYW4gYmUgdXNlZCB0b1xuICogYWNjZXNzIGEgd2lkZ2V0IGluc3RhbmNlIGJ5IGNhbGxpbmcgYFBGKCdteVdpZGdldFZhcicpYC5cbiAqIEBwcm9wIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBKU09OIG9iamVjdC5cbiAqIFxuICogQGludGVyZmFjZSB7UHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldENmZ30gY2ZnIFRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUge0BsaW5rICBCYXNlV2lkZ2V0fCBCYXNlV2lkZ2V0IHdpZGdldH0uXG4gKiBZb3UgY2FuIGFjY2VzcyB0aGlzIGNvbmZpZ3VyYXRpb24gdmlhIHtAbGluayBQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0LmNmZ3xCYXNlV2lkZ2V0LmNmZ30uIFBsZWFzZSBub3RlIHRoYXQgdGhpc1xuICogY29uZmlndXJhdGlvbiBpcyB1c3VhbGx5IG1lYW50IHRvIGJlIHJlYWQtb25seSBhbmQgc2hvdWxkIG5vdCBiZSBtb2RpZmllZC4gVGhpcyBjb25maWd1cmF0aW9uIGlzXG4gKiBhbHdheXMgYWNjZXNzaWJsZSB2aWEgdGhlIGBjZmdgIHByb3BlcnR5IG9mIGEgd2lkZ2V0IGFuZCBjb25zaXN0cyBvZiBrZXktdmFsdWUgcGFpcnMuIFBsZWFzZSBub3RlIHRoYXQsIGluIG9yZGVyXG4gKiB0byBzYXZlIGJhbmR3aWR0aCwgdGhlIHNlcnZlciBvbmx5IHNlbmRzIGEgdmFsdWUgZm9yIGEgZ2l2ZW4gY29uZmlndXJhdGlvbiBrZXkgd2hlbiB0aGUgdmFsdWUgZGlmZmVycyBmcm9tIHRoZVxuICogZGVmYXVsdCB2YWx1ZS4gVGhhdCBpcywgeW91IG11c3QgZXhwZWN0IGFueSBjb25maWd1cmF0aW9uIHZhbHVlIHRvIGJlIGFic2VudCBhbmQgbWFrZSBzdXJlIHlvdSBjaGVjayBmb3IgaXRzXG4gKiBwcmVzZW5jZSBiZWZvcmUgYWNjZXNzaW5nIGl0LlxuICpcbiAqIEBwcm9wIHtSZWNvcmQ8c3RyaW5nLCBQcmltZUZhY2VzLkJlaGF2aW9yPn0gY2ZnLmJlaGF2aW9ycyBBIG1hcCB3aXRoIGFsbCBiZWhhdmlvcnMgdGhhdFxuICogd2VyZSBkZWZpbmVkIGZvciB0aGlzIHdpZGdldC4gVGhlIGtleSBpcyB0aGUgbmFtZSBvZiB0aGUgYmVoYXZpb3IsIHRoZSB2YWx1ZSBpcyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpc1xuICogaW52b2tlZCB3aGVuIHRoZSBiZWhhdmlvciBpcyBjYWxsZWQuXG4gKiBAcHJvcCB7c3RyaW5nfSBbY2ZnLmZvcm1JZF0gSUQgb2YgdGhlIGZvcm0gdG8gdXNlIGZvciBBSkFYIHJlcXVlc3RzLlxuICogQHByb3Age3N0cmluZyB8IHN0cmluZ1tdfSBjZmcuaWQgVGhlIGNsaWVudC1zaWRlIElEIG9mIHRoZSB3aWRnZXQsIHdpdGggYWxsIHBhcmVudCBuYW1pbmcgY29udGFpbmVycywgc3VjaCBhc1xuICogYG15Rm9ybTpteVdpZGdldGAuIFRoaXMgaXMgYWxzbyB0aGUgSUQgb2YgdGhlIGNvbnRhaW5lciBIVE1MIGVsZW1lbnQgZm9yIHRoaXMgd2lkZ2V0LiBJbiBjYXNlIHRoZSB3aWRnZXQgbmVlZHNcbiAqIG11bHRpcGxlIGNvbnRhaW5lciBlbGVtZW50cyAoc3VjaCBhcyB7QGxpbmsgUGFnaW5hdG9yfSksIHRoaXMgbWF5IGFsc28gYmUgYW4gYXJyYXkgaWYgSURzLlxuICogQHByb3Age1ByaW1lRmFjZXMud2lkZ2V0LlBvc3RDb25zdHJ1Y3RDYWxsYmFja30gY2ZnLnBvc3RDb25zdHJ1Y3QgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkXG4gKiBhZnRlciB0aGlzIHdpZGdldCB3YXMgY3JlYXRlZCBzdWNjZXNzZnVsbHksIGF0IHRoZSBlbmQgb2YgdGhlIHtAbGluayBCYXNlV2lkZ2V0LmluaXQgfCBpbml0fSBtZXRob2QuIFRoaXMgaXNcbiAqIHVzdWFsbHkgc3BlY2lmaWVkIHZpYSB0aGUgYHdpZGdldFBvc3RDb25zdHJ1Y3RgIGF0dHJpYnV0ZSBvbiB0aGUgSlNGIGNvbXBvbmVudC4gTm90ZSB0aGF0IHRoaXMgaXMgYWxzbyBjYWxsZWRcbiAqIGR1cmluZyBhIGByZWZyZXNoYCAoQUpBWCB1cGRhdGUpLlxuICogQHByb3Age1ByaW1lRmFjZXMud2lkZ2V0LlBvc3RSZWZyZXNoQ2FsbGJhY2t9IGNmZy5wb3N0UmVmcmVzaCBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IGlzIGludm9rZWQgYWZ0ZXJcbiAqIHRoaXMgd2lkZ2V0IHdhcyByZWZyZXNoZWQgYWZ0ZXIgYW4gQUpBWCB1cGRhdGUsIGF0IHRoZSBlbmQgb2YgdGhlIHtAbGluayBCYXNlV2lkZ2V0LnJlZnJlc2ggfCByZWZyZXNofSBtZXRob2QuXG4gKiBUaGlzIGlzIHVzdWFsbHkgc3BlY2lmaWVkIHZpYSB0aGUgYHdpZGdldFBvc3RSZWZyZXNoYCBhdHRyaWJ1dGUgb24gdGhlIEpTRiBjb21wb25lbnQuXG4gKiBAcHJvcCB7UHJpbWVGYWNlcy53aWRnZXQuUHJlRGVzdHJveUNhbGxiYWNrfSBjZmcucHJlRGVzdHJveSBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IGlzIGludm9rZWQgYmVmb3JlXG4gKiB0aGlzIHdpZGdldCBpcyBhYm91dCB0byBiZSBkZXN0cm95ZWQsIGUuZy4sIHdoZW4gdGhlIGNvbXBvbmVudCB3YXMgcmVtb3ZlZCBhdCB0aGUgZW5kIG9mIGFuIEFKQVggdXBkYXRlLiBUaGlzIGlzXG4gKiBjYWxsZWQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUge0BsaW5rIEJhc2VXaWRnZXQuZGVzdHJveSB8IGRlc3Ryb3l9IG1ldGhvZC4gVGhpcyBpcyB1c3VhbGx5IHNwZWNpZmllZCB2aWEgdGhlXG4gKiBgd2lkZ2V0UHJlRGVzdHJveWAgYXR0cmlidXRlIG9uIHRoZSBKU0YgY29tcG9uZW50LlxuICogQHByb3Age3N0cmluZ30gY2ZnLndpZGdldFZhciBUaGUgbmFtZSBvZiB0aGUgd2lkZ2V0IHZhcmlhYmxlcyBvZiB0aGlzIHdpZGdldC4gVGhlIHdpZGdldCB2YXJpYWJsZSBjYW4gYmUgdXNlZCB0b1xuICogYWNjZXNzIGEgd2lkZ2V0IGluc3RhbmNlIGJ5IGNhbGxpbmcgYFBGKFwibXlXaWRnZXRWYXJcIilgLlxuICovXG5leHBvcnQgY2xhc3MgQmFzZVdpZGdldCB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIHdpZGdldC4gUGxlYXNlIG5vdGUgdGhhdCB5b3Ugc2hvdWxkIF9fTk9UX18gb3ZlcnJpZGUgdGhpcyBjb25zdHJ1Y3Rvci5cbiAgICAgKiBJbnN0ZWFkLCBvdmVycmlkZSB0aGUge0BsaW5rIGluaXR9IG1ldGhvZCwgd2hpY2ggaXMgY2FsbGVkIGJ5IHRoZSBmcmFtZXdvcmsgb25jZSB0aGUgd2lkZ2V0IGluc3RhbmNlIHdhc1xuICAgICAqIGNyZWF0ZWQuXG4gICAgICpcbiAgICAgKiBOb3RlOiBUaGlzIGlzIG1haW5seSBkdWUgdG8gbGVnYWN5IGNvbmNlcm5zLiBXZSBtYXkgcmVtb3ZlIHRoZSBpbml0IG1ldGhvZCBpbiB0aGUgZnV0dXJlIGFuZCBzaW1wbHkgdXNlIHRoZVxuICAgICAqIGNvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLlBhcnRpYWxXaWRnZXRDZmc8VENmZz59IGNmZyBUaGUgd2lkZ2V0IGNvbmZpZ3VyYXRpb24gdG8gYmUgdXNlZCBmb3IgdGhpcyB3aWRnZXRcbiAgICAgKiBpbnN0YW5jZS4gVGhpcyB3aWRnZXQgY29uZmlndXJhdGlvbiBpcyB1c3VhbGx5IGNyZWF0ZWQgb24gdGhlIHNlcnZlciBieSB0aGUgYGphdmF4LmZhY2VzLnJlbmRlci5SZW5kZXJlcmAgZm9yXG4gICAgICogdGhpcyBjb21wb25lbnQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2ZnKSB7XG4gICAgICAgIHRoaXMuaW5pdChjZmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgd2lkZ2V0IGNsYXNzIHNob3VsZCBub3QgZGVjbGFyZSBhbiBleHBsaWNpdCBjb25zdHJ1Y3RvciwgdGhlIGRlZmF1bHQgY29uc3RydWN0b3IgcHJvdmlkZWQgYnkgdGhpcyBiYXNlXG4gICAgICogd2lkZ2V0IHNob3VsZCBiZSB1c2VkLiBJbnN0ZWFkLCBvdmVycmlkZSB0aGlzIGluaXRpYWxpemUgbWV0aG9kIHdoaWNoIGlzIGNhbGxlZCBhZnRlciB0aGUgd2lkZ2V0IGluc3RhbmNlXG4gICAgICogd2FzIGNvbnN0cnVjdGVkLiBZb3UgY2FuIHVzZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGFueSBpbml0aWFsaXphdGlvbiB0aGF0IGlzIHJlcXVpcmVkLiBGb3Igd2lkZ2V0cyB0aGF0XG4gICAgICogbmVlZCB0byBjcmVhdGUgY3VzdG9tIEhUTUwgb24gdGhlIGNsaWVudC1zaWRlIHRoaXMgaXMgYWxzbyB0aGUgcGxhY2Ugd2hlcmUgeW91IHNob3VsZCBjYWxsIHlvdXIgcmVuZGVyXG4gICAgICogbWV0aG9kLlxuICAgICAqXG4gICAgICogUGxlYXNlIG1ha2Ugc3VyZSB0byBjYWxsIHRoZSBzdXBlciBtZXRob2QgZmlyc3QgYmVmb3JlIGFkZGluZyB5b3VyIG93biBjdXN0b20gbG9naWMgdG8gdGhlIGluaXQgbWV0aG9kOlxuICAgICAqXG4gICAgICogYGBgamF2YXNjcmlwdFxuICAgICAqIGltcG9ydCB7IEJhc2VXaWRnZXQgfSBmcm9tIFwiQHByaW1lZmFjZXMvcHJpbWVmYWNlc1wiO1xuICAgICAqIGNsYXNzIE15V2lkZ2V0IGV4dGVuZHMgQmFzZVdpZGdldCB7XG4gICAgICogICBpbml0OiBmdW5jdGlvbihjZmcpIHtcbiAgICAgKiAgICAgc3VwZXIuaW5pdChjZmcpO1xuICAgICAqICAgICAvLyBjdXN0b20gaW5pdGlhbGl6YXRpb25cbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMuUGFydGlhbFdpZGdldENmZzxUQ2ZnPn0gY2ZnIFRoZSB3aWRnZXQgY29uZmlndXJhdGlvbiB0byBiZSB1c2VkIGZvciB0aGlzIHdpZGdldCBpbnN0YW5jZS5cbiAgICAgKiBUaGlzIHdpZGdldCBjb25maWd1cmF0aW9uIGlzIHVzdWFsbHkgY3JlYXRlZCBvbiB0aGUgc2VydmVyIGJ5IHRoZSBgamF2YXguZmFjZXMucmVuZGVyLlJlbmRlcmVyYCBmb3IgdGhpc1xuICAgICAqIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBpbml0KGNmZykge1xuICAgICAgICB0aGlzLmNmZyA9IGNmZztcbiAgICAgICAgdGhpcy5pZCA9IGNmZy5pZDtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5pZCkpIHtcbiAgICAgICAgICAgIHRoaXMuanFJZCA9ICQubWFwKHRoaXMuaWQsIGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByaW1lRmFjZXMuZXNjYXBlQ2xpZW50SWQoaWQpO1xuICAgICAgICAgICAgfSkuam9pbihcIixcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmpxSWQgPSBQcmltZUZhY2VzLmVzY2FwZUNsaWVudElkKHRoaXMuaWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuanEgPSAkKHRoaXMuanFJZCk7XG4gICAgICAgIHRoaXMud2lkZ2V0VmFyID0gY2ZnLndpZGdldFZhcjtcbiAgICAgICAgdGhpcy5kZXN0cm95TGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMucmVmcmVzaExpc3RlbmVycyA9IFtdO1xuXG4gICAgICAgIC8vcmVtb3ZlIHNjcmlwdCB0YWdcbiAgICAgICAgdGhpcy5yZW1vdmVTY3JpcHRFbGVtZW50KHRoaXMuaWQpO1xuXG4gICAgICAgIGlmICh0aGlzLndpZGdldFZhcikge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuanEub24oXCJyZW1vdmVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFQcmltZUZhY2VzLmRldGFjaGVkV2lkZ2V0cy5pbmNsdWRlcygkdGhpcy53aWRnZXRWYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIFByaW1lRmFjZXMuZGV0YWNoZWRXaWRnZXRzLnB1c2goJHRoaXMud2lkZ2V0VmFyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZWQgaW4gYWpheCB1cGRhdGVzLCByZWxvYWRzIHRoZSB3aWRnZXQgY29uZmlndXJhdGlvbi5cbiAgICAgKlxuICAgICAqIFdoZW4gYW4gQUpBWCBjYWxsIGlzIG1hZGUgYW5kIHRoaXMgY29tcG9uZW50IGlzIHVwZGF0ZWQsIHRoZSBET00gZWxlbWVudCBpcyByZXBsYWNlZCB3aXRoIHRoZSBuZXdseSByZW5kZXJlZFxuICAgICAqIGNvbnRlbnQuIEhvd2V2ZXIsIG5vIG5ldyBpbnN0YW5jZSBvZiB0aGUgd2lkZ2V0IGlzIGNyZWF0ZWQuIEluc3RlYWQsIGFmdGVyIHRoZSBET00gZWxlbWVudCB3YXMgcmVwbGFjZWQsIHRoaXNcbiAgICAgKiBtZXRob2QgaXMgY2FsbGVkIHdpdGggdGhlIG5ldyB3aWRnZXQgY29uZmlndXJhdGlvbiBmcm9tIHRoZSBzZXJ2ZXIuIFRoaXMgbWFrZXMgaXQgcG9zc2libGUgdG8gcGVyc2lzdFxuICAgICAqIGNsaWVudC1zaWRlIHN0YXRlIGR1cmluZyBhbiB1cGRhdGUsIHN1Y2ggYXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0YWIuXG4gICAgICpcbiAgICAgKiBQbGVhc2Ugbm90ZSB0aGF0IGluc3RlYWQgb2Ygb3ZlcnJpZGluZyB0aGlzIG1ldGhvZCwgeW91IHNob3VsZCBjb25zaWRlciBhZGRpbmcgYSByZWZyZXNoIGxpc3RlbmVyIGluc3RlYWRcbiAgICAgKiB2aWEge0BsaW5rIGFkZFJlZnJlc2hMaXN0ZW5lcn0uIFRoaXMgaGFzIHRoZSBhZHZhbnRhZ2Ugb2YgbGV0dGluZyB5b3UgYWRkIG11bHRpcGxlIGxpc3RlbmVycywgYW5kIG1ha2VzIGl0XG4gICAgICogcG9zc2libGUgdG8gYWRkIGFkZGl0aW9uYWwgbGlzdGVuZXJzIGZyb20gY29kZSBvdXRzaWRlIHRoaXMgd2lkZ2V0LlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgdGhpcyBtZXRob2QgY2FsbHMgYWxsIHJlZnJlc2ggbGlzdGVuZXJzLCB0aGVuIHJlaW5pdGlhbGl6ZXMgdGhlIHdpZGdldCBieSBjYWxsaW5nIHRoZSBgaW5pdGBcbiAgICAgKiBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMuUGFydGlhbFdpZGdldENmZzxUQ2ZnPn0gY2ZnIFRoZSBuZXcgd2lkZ2V0IGNvbmZpZ3VyYXRpb24gZnJvbSB0aGUgc2VydmVyLlxuICAgICAqIEByZXR1cm4ge3Vua25vd259IFRoZSB2YWx1ZSBhcyByZXR1cm5lZCBieSB0aGUgYGluaXRgIG1ldGhvZCwgd2hpY2ggaXMgb2Z0ZW4gYHVuZGVmaW5lZGAuXG4gICAgICovXG4gICAgcmVmcmVzaChjZmcpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95TGlzdGVuZXJzID0gW107XG5cbiAgICAgICAgaWYgKHRoaXMucmVmcmVzaExpc3RlbmVycykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlZnJlc2hMaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmcmVzaExpc3RlbmVyID0gdGhpcy5yZWZyZXNoTGlzdGVuZXJzW2ldO1xuICAgICAgICAgICAgICAgIHJlZnJlc2hMaXN0ZW5lci5jYWxsKHRoaXMsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVmcmVzaExpc3RlbmVycyA9IFtdO1xuXG4gICAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHRoaXMuaW5pdChjZmcpO1xuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2lsbCBiZSBjYWxsZWQgYWZ0ZXIgYW4gQUpBWCByZXF1ZXN0IGlmIHRoZSB3aWRnZXQgY29udGFpbmVyIHdpbGwgYmUgZGV0YWNoZWQuXG4gICAgICpcbiAgICAgKiBXaGVuIGFuIEFKQVggY2FsbCBpcyBtYWRlIGFuZCB0aGlzIGNvbXBvbmVudCBpcyB1cGRhdGVkLCB0aGUgRE9NIGVsZW1lbnQgaXMgcmVwbGFjZWQgd2l0aCB0aGUgbmV3bHkgcmVuZGVyZWRcbiAgICAgKiBjb250ZW50LiBXaGVuIHRoZSBlbGVtZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgRE9NIGJ5IHRoZSB1cGRhdGUsIHRoZSBET00gZWxlbWVudCBpcyBkZXRhY2hlZCBmcm9tIHRoZSBET00gYW5kXG4gICAgICogdGhpcyBtZXRob2QgZ2V0cyBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBQbGVhc2Ugbm90ZSB0aGF0IGluc3RlYWQgb2Ygb3ZlcnJpZGluZyB0aGlzIG1ldGhvZCwgeW91IHNob3VsZCBjb25zaWRlciBhZGRpbmcgYSBkZXN0cm95IGxpc3RlbmVyIGluc3RlYWRcbiAgICAgKiB2aWEge0BsaW5rIGFkZERlc3Ryb3lMaXN0ZW5lcn0uIFRoaXMgaGFzIHRoZSBhZHZhbnRhZ2Ugb2YgbGV0dGluZyB5b3UgYWRkIG11bHRpcGxlIGxpc3RlbmVycywgYW5kIG1ha2VzIGl0XG4gICAgICogcG9zc2libGUgdG8gYWRkIGFkZGl0aW9uYWwgbGlzdGVuZXJzIGZyb20gY29kZSBvdXRzaWRlIHRoaXMgd2lkZ2V0LlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgdGhpcyBtZXRob2QganVzdCBjYWxscyBhbGwgZGVzdHJveSBsaXN0ZW5lcnMuXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2ZnLnByZURlc3Ryb3kpIHtcbiAgICAgICAgICAgIHRoaXMuY2ZnLnByZURlc3Ryb3kuY2FsbCh0aGlzLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFByaW1lRmFjZXMuZGVidWcoXCJEZXN0cm95ZWQgZGV0YWNoZWQgd2lkZ2V0OiBcIiArIHRoaXMud2lkZ2V0VmFyKTtcblxuICAgICAgICBpZiAodGhpcy5kZXN0cm95TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGVzdHJveUxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkZXN0cm95TGlzdGVuZXIgPSB0aGlzLmRlc3Ryb3lMaXN0ZW5lcnNbaV07XG4gICAgICAgICAgICAgICAgZGVzdHJveUxpc3RlbmVyLmNhbGwodGhpcywgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0cm95TGlzdGVuZXJzID0gW107XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGFsbCBzdG9yZWQgdmFyaWFibGVzIHdpdGhpbiB0aGlzIHdpZGdldC4gSWYgYW55IG9mIHRoZW0gYXJlIGpRdWVyeSBvYmplY3RzLCBcbiAgICAgICAgLy8gaXQgaXMgaW1wZXJhdGl2ZSB0byB1bmJpbmQgdGhlaXIgZXZlbnQgbGlzdGVuZXJzIHRvIGF2b2lkIG1lbW9yeSBsZWFrcyBpbiB0aGUgRE9NLlxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcykge1xuICAgICAgICAgICAgdmFyIGpxID0gdGhpc1trZXldO1xuICAgICAgICAgICAgaWYgKGpxIGluc3RhbmNlb2YgalF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGV2ZW50cyBvbiBhbGwgZGVzY2VuZGFudHNcbiAgICAgICAgICAgICAgICBqcS5jaGlsZHJlbigpLm9mZigpO1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBldmVudHMgZnJvbSBlbGVtZW50XG4gICAgICAgICAgICAgICAganEub2ZmKCk7XG4gICAgICAgICAgICAgICAgLy8gTk9URTogZG8gbm90IG51bGwgb3V0IHRoZSB2YWx1ZSBoZXJlIGFzIGlzIGl0IG5lZWRlZCBzb21ldGltZXMgc3RpbGwgYWZ0ZXIgZGVzdHJveSBoYXBwZW5zXG4gICAgICAgICAgICAgICAgLy8gdGhpc1trZXldID0gbnVsbDsgRE8gTk9UIEVOQUJMRSBUSElTXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhpcyB3aWRnZXQgaXMgZGV0YWNoZWQsIGllIHdoZXRoZXIgdGhlIEhUTUwgZWxlbWVudCBvZiB0aGlzIHdpZGdldCBpcyBjdXJyZW50bHkgY29udGFpbmVkIHdpdGhpblxuICAgICAqIHRoZSBET00gKHRoZSBIVE1MIGJvZHkgZWxlbWVudCkuIEEgd2lkZ2V0IG1heSBiZWNvbWUgZGV0YWNoZWQgZHVyaW5nIGFuIEFKQVggdXBkYXRlLCBhbmQgaXQgbWF5IHJlbWFpblxuICAgICAqIGRldGFjaGVkIGluIGNhc2UgdGhlIHVwZGF0ZSByZW1vdmVkIHRoaXMgY29tcG9uZW50IGZyb20gdGhlIGNvbXBvbmVudCB0cmVlLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGlzIHdpZGdldCBpcyBjdXJyZW50bHkgZGV0YWNoZWQsIG9yIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGlzRGV0YWNoZWQoKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIGlmICh0eXBlb2YoZWxlbWVudCkgIT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVhY2ggd2lkZ2V0IGhhcyBnb3QgYSBjb250YWluZXIgZWxlbWVudCwgdGhpcyBtZXRob2QgcmV0dXJucyB0aGF0IGNvbnRhaW5lci4gVGhpcyBjb250YWluZXIgZWxlbWVudCBpc1xuICAgICAqIHVzdWFsbHkgYWxzbyB0aGUgZWxlbWVudCB3aG9zZSBJRCBpcyB0aGUgY2xpZW50LXNpZGUgSUQgb2YgdGhlIEpTRiBjb21wb25lbnQuXG4gICAgICogQHJldHVybiB7SlF1ZXJ5fSBUaGUgalF1ZXJ5IGluc3RhbmNlIHJlcHJlc2VudGluZyB0aGUgbWFpbiBIVE1MIGNvbnRhaW5lciBlbGVtZW50IG9mIHRoaXMgd2lkZ2V0LlxuICAgICAqL1xuICAgIGdldEpRKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmpxO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIHdpZGdldCdzIHNjcmlwdCBibG9jayBmcm9tIHRoZSBET00uIEN1cnJlbnRseSwgdGhlIElEIG9mIHRoaXMgc2NyaXB0IGJsb2NrIGNvbnNpc3RzIG9mIHRoZVxuICAgICAqIGNsaWVudC1zaWRlIElEIG9mIHRoaXMgd2lkZ2V0IHdpdGggdGhlIHByZWZpeCBgX3NgLCBidXQgdGhpcyBpcyBzdWJqZWN0IHRvIGNoYW5nZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgc3RyaW5nW119IGNsaWVudElkIFRoZSBjbGllbnQtc2lkZSBJRCBvZiB0aGUgd2lkZ2V0LlxuICAgICAqL1xuICAgIHJlbW92ZVNjcmlwdEVsZW1lbnQoY2xpZW50SWQpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2xpZW50SWQpKSB7XG4gICAgICAgICAgICAkLmVhY2goY2xpZW50SWQsIGZ1bmN0aW9uKF8sIGlkKSB7XG4gICAgICAgICAgICAgICAgJChQcmltZUZhY2VzLmVzY2FwZUNsaWVudElkKGlkKSArICdfcycpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAkKFByaW1lRmFjZXMuZXNjYXBlQ2xpZW50SWQoY2xpZW50SWQpICsgJ19zJykucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFYWNoIHdpZGdldCBtYXkgaGF2ZSBvbmUgb3Igc2V2ZXJhbCBiZWhhdmlvcnMgYXR0YWNoZWQgdG8gaXQuIFRoaXMgbWV0aG9kIGNoZWNrcyB3aGV0aGVyIHRoaXMgd2lkZ2V0IGhhcyBnb3RcbiAgICAgKiBhdCBsZWFzdCBvbmUgYmVoYXZpb3IgYXNzb2NpYXRlZCB3aXRoIGdpdmVuIGV2ZW50IG5hbWUuXG4gICAgICpcbiAgICAgKiBBIGJlaGF2aW9yIGlzIGEgd2F5IGZvciBhc3NvY2lhdGluZyBjbGllbnQtc2lkZSBzY3JpcHRzIHdpdGggVUkgY29tcG9uZW50cyB0aGF0IG9wZW5zIGFsbCBzb3J0cyBvZlxuICAgICAqIHBvc3NpYmlsaXRpZXMsIGluY2x1ZGluZyBjbGllbnQtc2lkZSB2YWxpZGF0aW9uLCBET00gYW5kIHN0eWxlIG1hbmlwdWxhdGlvbiwga2V5Ym9hcmQgaGFuZGxpbmcsIGFuZCBtb3JlLlxuICAgICAqIFdoZW4gdGhlIGJlaGF2aW9yIGlzIHRyaWdnZXJlZCwgdGhlIGNvbmZpZ3VyZWQgSmF2YVNjcmlwdCBnZXRzIGV4ZWN1dGVkLlxuICAgICAqXG4gICAgICogQmVoYXZpb3JzIGFyZSBvZnRlbiwgYnV0IG5vdCBuZWNlc3NhcmlseSwgQUpBWCBiZWhhdmlvci4gV2hlbiB0cmlnZ2VyZWQsIGl0IGluaXRpYXRlcyBhIHJlcXVlc3QgdGhlIHNlcnZlclxuICAgICAqIGFuZCBwcm9jZXNzZXMgdGhlIHJlc3BvbnNlIG9uY2UgaXQgaXMgcmVjZWl2ZWQuIFRoaXMgZW5hYmxlcyBzZXZlcmFsIGZlYXR1cmVzIHN1Y2ggYXMgdXBkYXRpbmcgb3IgcmVwbGFjaW5nXG4gICAgICogZWxlbWVudHMgZHluYW1pY2FsbHkuIFlvdSBjYW4gYWRkIGFuIEFKQVggYmVoYXZpb3IgdmlhXG4gICAgICogYDxwOmFqYXggZXZlbnQ9XCJuYW1lXCIgYWN0aW9uTGlzdGVuZXI9XCIjey4uLn1cIiBvbnN0YXJ0PVwiLi4uXCIgLz5gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBuYW1lIG9mIGFuIGV2ZW50IHRvIGNoZWNrLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGlzIHdpZGdldCBoYXMgdGhlIGdpdmVuIGJlaGF2aW9yLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBoYXNCZWhhdmlvcihldmVudCkge1xuICAgICAgICBpZih0aGlzLmNmZy5iZWhhdmlvcnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNmZy5iZWhhdmlvcnNbZXZlbnRdICE9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFYWNoIHdpZGdldCBtYXkgaGF2ZSBvbmUgb3Igc2V2ZXJhbCBiZWhhdmlvcnMgYXR0YWNoZWQgdG8gaXQuIFRoaXMgbWV0aG9kIGNhbGxzIGFsbCBhdHRhY2hlZCBiZWhhdmlvcnMgZm9yXG4gICAgICogdGhlIGdpdmVuIGV2ZW50IG5hbWUuIEluIGNhc2Ugbm8gc3VjaCBiZWhhdmlvciBleGlzdHMsIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZyBhbmQgcmV0dXJucyBpbW1lZGlhdGVseS5cbiAgICAgKlxuICAgICAqIEEgYmVoYXZpb3IgaXMgYSB3YXkgZm9yIGFzc29jaWF0aW5nIGNsaWVudC1zaWRlIHNjcmlwdHMgd2l0aCBVSSBjb21wb25lbnRzIHRoYXQgb3BlbnMgYWxsIHNvcnRzIG9mXG4gICAgICogcG9zc2liaWxpdGllcywgaW5jbHVkaW5nIGNsaWVudC1zaWRlIHZhbGlkYXRpb24sIERPTSBhbmQgc3R5bGUgbWFuaXB1bGF0aW9uLCBrZXlib2FyZCBoYW5kbGluZywgYW5kIG1vcmUuXG4gICAgICogV2hlbiB0aGUgYmVoYXZpb3IgaXMgdHJpZ2dlcmVkLCB0aGUgY29uZmlndXJlZCBKYXZhU2NyaXB0IGdldHMgZXhlY3V0ZWQuXG4gICAgICpcbiAgICAgKiBCZWhhdmlvcnMgYXJlIG9mdGVuLCBidXQgbm90IG5lY2Vzc2FyaWx5LCBBSkFYIGJlaGF2aW9yLiBXaGVuIHRyaWdnZXJlZCwgaXQgaW5pdGlhdGVzIGEgcmVxdWVzdCB0aGUgc2VydmVyXG4gICAgICogYW5kIHByb2Nlc3NlcyB0aGUgcmVzcG9uc2Ugb25jZSBpdCBpcyByZWNlaXZlZC4gVGhpcyBlbmFibGVzIHNldmVyYWwgZmVhdHVyZXMgc3VjaCBhcyB1cGRhdGluZyBvciByZXBsYWNpbmdcbiAgICAgKiBlbGVtZW50cyBkeW5hbWljYWxseS4gWW91IGNhbiBhZGQgYW4gQUpBWCBiZWhhdmlvciB2aWFcbiAgICAgKiBgPHA6YWpheCBldmVudD1cIm5hbWVcIiBhY3Rpb25MaXN0ZW5lcj1cIiN7Li4ufVwiIG9uc3RhcnQ9XCIuLi5cIiAvPmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIG5hbWUgb2YgYW4gZXZlbnQgdG8gY2FsbC5cbiAgICAgKiBAcGFyYW0ge1BhcnRpYWw8UHJpbWVGYWNlcy5hamF4LkNvbmZpZ3VyYXRpb25FeHRlbmRlcj59IFtleHRdIEFkZGl0aW9uYWwgY29uZmlndXJhdGlvbiB0aGF0IGlzIHBhc3NlZCB0byB0aGVcbiAgICAgKiBBSkFYIHJlcXVlc3QgZm9yIHRoZSBzZXJ2ZXItc2lkZSBjYWxsYmFjay5cbiAgICAgKiBAc2luY2UgNy4wXG4gICAgICovXG4gICAgY2FsbEJlaGF2aW9yKGV2ZW50LCBleHQpIHtcbiAgICAgICAgaWYodGhpcy5oYXNCZWhhdmlvcihldmVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2ZnLmJlaGF2aW9yc1tldmVudF0uY2FsbCh0aGlzLCBleHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRWFjaCB3aWRnZXQgbWF5IGhhdmUgb25lIG9yIHNldmVyYWwgYmVoYXZpb3JzIGF0dGFjaGVkIHRvIGl0LiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBmb3JcbiAgICAgKiB0aGUgZ2l2ZW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBfX05vdGVfXzogRG8gbm90IGNhbGwgdGhlIG1ldGhvZCBkaXJlY3RseSwgdGhlIHJlY29tbWVuZGVkIHdheSB0byBpbnZva2UgYSBiZWhhdmlvciBpcyB2aWFcbiAgICAgKiB7QGxpbmsgY2FsbEJlaGF2aW9yfS5cbiAgICAgKlxuICAgICAqIEEgYmVoYXZpb3IgaXMgYSB3YXkgZm9yIGFzc29jaWF0aW5nIGNsaWVudC1zaWRlIHNjcmlwdHMgd2l0aCBVSSBjb21wb25lbnRzIHRoYXQgb3BlbnMgYWxsIHNvcnRzIG9mXG4gICAgICogcG9zc2liaWxpdGllcywgaW5jbHVkaW5nIGNsaWVudC1zaWRlIHZhbGlkYXRpb24sIERPTSBhbmQgc3R5bGUgbWFuaXB1bGF0aW9uLCBrZXlib2FyZCBoYW5kbGluZywgYW5kIG1vcmUuXG4gICAgICogV2hlbiB0aGUgYmVoYXZpb3IgaXMgdHJpZ2dlcmVkLCB0aGUgY29uZmlndXJlZCBKYXZhU2NyaXB0IGdldHMgZXhlY3V0ZWQuXG4gICAgICpcbiAgICAgKiBCZWhhdmlvcnMgYXJlIG9mdGVuLCBidXQgbm90IG5lY2Vzc2FyaWx5LCBBSkFYIGJlaGF2aW9yLiBXaGVuIHRyaWdnZXJlZCwgaXQgaW5pdGlhdGVzIGEgcmVxdWVzdCB0aGUgc2VydmVyXG4gICAgICogYW5kIHByb2Nlc3NlcyB0aGUgcmVzcG9uc2Ugb25jZSBpdCBpcyByZWNlaXZlZC4gVGhpcyBlbmFibGVzIHNldmVyYWwgZmVhdHVyZXMgc3VjaCBhcyB1cGRhdGluZyBvciByZXBsYWNpbmdcbiAgICAgKiBlbGVtZW50cyBkeW5hbWljYWxseS4gWW91IGNhbiBhZGQgYW4gQUpBWCBiZWhhdmlvciB2aWFcbiAgICAgKiBgPHA6YWpheCBldmVudD1cIm5hbWVcIiBhY3Rpb25MaXN0ZW5lcj1cIiN7Li4ufVwiIG9uc3RhcnQ9XCIuLi5cIiAvPmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiBhbiBldmVudCBmb3Igd2hpY2ggdG8gcmV0cmlldmUgdGhlIGJlaGF2aW9yLlxuICAgICAqIEByZXR1cm4ge1ByaW1lRmFjZXMuQmVoYXZpb3IgfCBudWxsfSBUaGUgYmVoYXZpb3Igd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgb3IgYG51bGxgIGlmIG5vIHN1Y2ggYmVoYXZpb3JcbiAgICAgKiBleGlzdHMuXG4gICAgICovXG4gICAgZ2V0QmVoYXZpb3IobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jZmcuYmVoYXZpb3JzID8gdGhpcy5jZmcuYmVoYXZpb3JzW25hbWVdIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMZXRzIHlvdSByZWdpc3RlciBhIGxpc3RlbmVyIHRoYXQgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cbiAgICAgKlxuICAgICAqIFdoZW4gYW4gQUpBWCBjYWxsIGlzIG1hZGUgYW5kIHRoaXMgY29tcG9uZW50IGlzIHVwZGF0ZWQsIHRoZSBET00gZWxlbWVudCBpcyByZXBsYWNlZCB3aXRoIHRoZSBuZXdseSByZW5kZXJlZFxuICAgICAqIGNvbnRlbnQuIFdoZW4gdGhlIGVsZW1lbnQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET00gYnkgdGhlIHVwZGF0ZSwgdGhlIERPTSBlbGVtZW50IGlzIGRldGFjaGVkIGZyb20gdGhlIERPTSBhbmRcbiAgICAgKiBhbGwgZGVzdHJveSBsaXN0ZW5lcnMgYXJlIGNhbGxlZC4gVGhpcyBtYWtlcyBpdCBwb3NzaWJsZSB0byBhZGQgbGlzdGVuZXJzIGZyb20gb3V0c2lkZSB0aGUgd2lkZ2V0IGNvZGUuXG4gICAgICpcbiAgICAgKiBJZiB5b3UgY2FsbCB0aGlzIG1ldGhvZCB0d2ljZSB3aXRoIHRoZSBzYW1lIGxpc3RlbmVyLCBpdCB3aWxsIGJlIHJlZ2lzdGVyZWQgdHdpY2UgYW5kIGxhdGVyIGFsc28gY2FsbGVkXG4gICAgICogdHdpY2UuXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgZm9yIHRoaXMgdG8gd29yaywgeW91IG11c3Qgbm90IG92ZXJyaWRlIHRoZSBgZGVzdHJveWAgbWV0aG9kOyBvciBpZiB5b3UgZG8sIGNhbGwgYHN1cGVyYC5cbiAgICAgKlxuICAgICAqIEFsc28sIGFmdGVyIHRoaXMgd2lkZ2V0IHdhcyBkZXRhY2hlZCBpcyBkb25lLCBhbGwgZGVzdHJveSBsaXN0ZW5lcnMgd2lsbCBiZSB1bnJlZ2lzdGVyZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMud2lkZ2V0LkRlc3Ryb3lMaXN0ZW5lcjx0aGlzPn0gbGlzdGVuZXIgQSBkZXN0cm95IGxpc3RlbmVyIHRvIGJlIHJlZ2lzdGVyZWQuXG4gICAgICogQHNpbmNlIDcuMFxuICAgICAqL1xuICAgIGFkZERlc3Ryb3lMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICBpZiAoIXRoaXMuZGVzdHJveUxpc3RlbmVycykge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95TGlzdGVuZXJzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0cm95TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZW4gYW4gQUpBWCBjYWxsIGlzIG1hZGUgYW5kIHRoaXMgY29tcG9uZW50IGlzIHVwZGF0ZWQsIHRoZSBET00gZWxlbWVudCBpcyByZXBsYWNlZCB3aXRoIHRoZSBuZXdseSByZW5kZXJlZFxuICAgICAqIGNvbnRlbnQuIEhvd2V2ZXIsIG5vIG5ldyBpbnN0YW5jZSBvZiB0aGUgd2lkZ2V0IGlzIGNyZWF0ZWQuIEluc3RlYWQsIGFmdGVyIHRoZSBET00gZWxlbWVudCB3YXMgcmVwbGFjZWQsIGFsbFxuICAgICAqIHJlZnJlc2ggbGlzdGVuZXJzIGFyZSBjYWxsZWQuIFRoaXMgbWFrZXMgaXQgcG9zc2libGUgdG8gYWRkIGxpc3RlbmVycyBmcm9tIG91dHNpZGUgdGhlIHdpZGdldCBjb2RlLlxuICAgICAqXG4gICAgICogSWYgeW91IGNhbGwgdGhpcyBtZXRob2QgdHdpY2Ugd2l0aCB0aGUgc2FtZSBsaXN0ZW5lciwgaXQgd2lsbCBiZSByZWdpc3RlcmVkIHR3aWNlIGFuZCBsYXRlciBhbHNvIGNhbGxlZFxuICAgICAqIHR3aWNlLlxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IGZvciB0aGlzIHRvIHdvcmssIHlvdSBtdXN0IG5vdCBvdmVycmlkZSB0aGUgYHJlZnJlc2hgIG1ldGhvZDsgb3IgaWYgeW91IGRvLCBjYWxsIGBzdXBlcmAuXG4gICAgICpcbiAgICAgKiBBbHNvLCBhZnRlciB0aGUgcmVmcmVzaCBpcyBkb25lLCBhbGwgcmVmcmVzaCBsaXN0ZW5lcnMgd2lsbCBiZSBkZXJlZ2lzdGVyZWQuIElmIHlvdSBhZGRlZCB0aGUgbGlzdGVuZXJzIGZyb21cbiAgICAgKiB3aXRoaW4gdGhpcyB3aWRnZXQsIGNvbnNpZGVyIGFkZGluZyB0aGUgcmVmcmVzaCBsaXN0ZW5lcnMgbm90IG9ubHkgaW4gdGhlIGBpbml0YCBtZXRob2QsIGJ1dCBhbHNvIGFnYWluIGluXG4gICAgICogdGhlIGByZWZyZXNoYCBtZXRob2QgYWZ0ZXIgY2FsbGluZyBgc3VwZXJgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLndpZGdldC5SZWZyZXNoTGlzdGVuZXI8dGhpcz59IGxpc3RlbmVyIEEgcmVmcmVzaCBsaXN0ZW5lciB0byBiZSByZWdpc3RlcmVkLlxuICAgICAqIEBzaW5jZSA3LjAuMFxuICAgICAqL1xuICAgIGFkZFJlZnJlc2hMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICBpZiAoIXRoaXMucmVmcmVzaExpc3RlbmVycykge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoTGlzdGVuZXJzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWZyZXNoTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNsb3Nlc3QgcGFyZW50IGZvcm0gZm9yIHRoaXMgd2lkZ2V0LlxuICAgICAqXG4gICAgICogQHJldHVybiB7SlF1ZXJ5fSBBIEpRdWVyeSBpbnN0YW5jZSB0aGF0IGVpdGhlciBjb250YWlucyB0aGUgZm9ybSB3aGVuIGZvdW5kLCBvciBhbiBlbXB0eSBKUXVlcnkgaW5zdGFuY2Ugd2hlblxuICAgICAqIHRoZSBmb3JtIGNvdWxkIG5vdCBiZSBmb3VuZC5cbiAgICAgKiBAc2luY2UgMTAuMC4wXG4gICAgICovXG4gICAgZ2V0UGFyZW50Rm9ybSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuanEuY2xvc2VzdCgnZm9ybScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGNsb3Nlc3QgcGFyZW50IGZvcm0gSUQgZm9yIHRoaXMgd2lkZ2V0IGxhemlseSBzbyBpdCBjYW4gYmUgdXNlZCBpbiBBSkFYIHJlcXVlc3RzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nIHwgdW5kZWZpbmVkfSBFaXRoZXIgdGhlIGZvcm0gSUQgb3IgYHVuZGVmaW5lZGAgaWYgbm8gZm9ybSBjYW4gYmUgZm91bmQuXG4gICAgICogQHNpbmNlIDEwLjAuMFxuICAgICAqL1xuICAgIGdldFBhcmVudEZvcm1JZCgpIHtcbiAgICAgICAgaWYodGhpcy5jZmcuZm9ybUlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jZmcuZm9ybUlkO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL2xvb2sgZm9yIGEgcGFyZW50IG9mIHNvdXJjZVxuICAgICAgICB2YXIgZm9ybSA9IHRoaXMuZ2V0UGFyZW50Rm9ybSgpO1xuICAgICAgICBpZiAoZm9ybS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNmZy5mb3JtSWQgPSBmb3JtLmF0dHIoJ2lkJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmNmZy5mb3JtSWQ7XG4gICAgfVxufVxuXG4vKipcbiAqIF9fUHJpbWVGYWNlcyBEeW5hbWljT3ZlcmxheSBXaWRnZXRfX1xuICpcbiAqIEJhc2UgY2xhc3MgZm9yIHdpZGdldHMgdGhhdCBhcmUgZGlzcGxheWVkIGFzIGFuIG92ZXJsYXkuIEF0IGFueSBnaXZlbiB0aW1lLCBzZXZlcmFsIG92ZXJsYXlzIG1heSBiZSBhY3RpdmUuIFRoaXNcbiAqIHJlcXVpcmVzIHRoYXQgdGhlIHotaW5kZXggb2YgdGhlIG92ZXJsYXlzIGlzIG1hbmFnZWQgZ2xvYmFsbHkuIFRoaXMgYmFzZSBjbGFzcyB0YWtlcyBjYXJlIG9mIHRoYXQuXG4gKlxuICogQHByb3Age3N0cmluZyB8IG51bGx9IGFwcGVuZFRvIFRoZSBzZWFyY2ggZXhwcmVzc2lvbiBmb3IgdGhlIGVsZW1lbnQgdG8gd2hpY2ggdGhlIG92ZXJsYXkgcGFuZWwgc2hvdWxkIGJlIGFwcGVuZGVkLlxuICogQHByb3Age0pRdWVyeX0gbW9kYWxPdmVybGF5IFRoZSBET00gZWxlbWVudCB0aGF0IGlzIGRpc3BsYXllZCBhcyBhbiBvdmVybGF5IHdpdGggdGhlIGFwcHJvcHJpYXRlIGB6LWluZGV4YCBhbmRcbiAqIGBwb3NpdGlvbmAuIEl0IGlzIHVzdWFsbHkgYSBjaGlsZCBvZiB0aGUgYGJvZHlgIGVsZW1lbnQuXG4gKlxuICogQGludGVyZmFjZSB7UHJpbWVGYWNlcy53aWRnZXQuRHluYW1pY092ZXJsYXlXaWRnZXRDZmd9IGNmZyBUaGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIHtAbGluayAgRHluYW1pY092ZXJsYXlXaWRnZXR8IER5bmFtaWNPdmVybGF5V2lkZ2V0IHdpZGdldH0uXG4gKiBZb3UgY2FuIGFjY2VzcyB0aGlzIGNvbmZpZ3VyYXRpb24gdmlhIHtAbGluayBQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0LmNmZ3xCYXNlV2lkZ2V0LmNmZ30uIFBsZWFzZSBub3RlIHRoYXQgdGhpc1xuICogY29uZmlndXJhdGlvbiBpcyB1c3VhbGx5IG1lYW50IHRvIGJlIHJlYWQtb25seSBhbmQgc2hvdWxkIG5vdCBiZSBtb2RpZmllZC5cbiAqIEBleHRlbmRzIHtQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0Q2ZnfSBjZmdcbiAqXG4gKiBAcHJvcCB7Ym9vbGVhbn0gY2ZnLmJsb2NrU2Nyb2xsIGB0cnVlYCB0byBwcmV2ZW50IHRoZSBib2R5IGZyb20gYmVpbmcgc2Nyb2xsZWQsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICovXG5leHBvcnQgY2xhc3MgRHluYW1pY092ZXJsYXlXaWRnZXQgZXh0ZW5kcyBCYXNlV2lkZ2V0IHtcblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqIEBpbmhlcml0ZG9jXG4gICAgICogQHBhcmFtIHtQcmltZUZhY2VzLlBhcnRpYWxXaWRnZXRDZmc8VENmZz59IGNmZyB0aGUgd2lkZ2V0IGNvbmZpZ3VyYXRvblxuICAgICAqIEBwYXJhbSB7SlF1ZXJ5fSBbb3ZlcmxheV0gVGhlIERPTSBlbGVtZW50IGZvciB0aGUgb3ZlcmxheS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW292ZXJsYXlJZF0gVGhlIElEIG9mIHRoZSBvdmVybGF5LCB1c3VhbGx5IHRoZSB3aWRnZXQgSUQuXG4gICAgICogQHBhcmFtIHtKUXVlcnl9IFt0YXJnZXRdIFRoZSBET00gZWxlbWVudCB0aGF0IGlzIHRoZSB0YXJnZXQgb2YgdGhpcyBvdmVybGF5XG4gICAgICovXG4gICAgaW5pdChjZmcsIG92ZXJsYXksIG92ZXJsYXlJZCwgdGFyZ2V0KSB7XG4gICAgICAgIHN1cGVyLmluaXQoY2ZnKTtcblxuICAgICAgICAvLyBkbyBub3QgYmluZCBvdmVybGF5IGlmIHdpZGdldCBkaXNhYmxlZFxuICAgICAgICBpZih0aGlzLmNmZy5kaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIW92ZXJsYXkpIHtcbiAgICAgICAgICAgIG92ZXJsYXkgPSB0aGlzLmpxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIW92ZXJsYXlJZCkge1xuICAgICAgICAgICAgb3ZlcmxheUlkID0gdGhpcy5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuanE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBEaWFsb2cgPSBnZXRXaWRnZXRJZlByZXNlbnQoXCJEaWFsb2dcIik7XG4gICAgICAgIHZhciBpZ25vcmVBcHBlbmRUbyA9IERpYWxvZyAhPT0gdW5kZWZpbmVkICYmIHRoaXMgaW5zdGFuY2VvZiBEaWFsb2c7XG4gICAgICAgIGlmICghaWdub3JlQXBwZW5kVG8pIHtcbiAgICAgICAgICAgIHRoaXMuY2ZnLmFwcGVuZFRvID0gUHJpbWVGYWNlcy51dGlscy5yZXNvbHZlQXBwZW5kVG8odGhpcywgdGFyZ2V0LCBvdmVybGF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIFByaW1lRmFjZXMudXRpbHMucmVnaXN0ZXJEeW5hbWljT3ZlcmxheSh0aGlzLCBvdmVybGF5LCBvdmVybGF5SWQpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKiBAcGFyYW0ge1ByaW1lRmFjZXMuUGFydGlhbFdpZGdldENmZzxUQ2ZnPn0gY2ZnXG4gICAgICovXG4gICAgcmVmcmVzaChjZmcpIHtcbiAgICAgICAgUHJpbWVGYWNlcy51dGlscy5yZW1vdmVNb2RhbCh0aGlzLCB0aGlzLm1vZGFsT3ZlcmxheSk7XG5cbiAgICAgICAgdGhpcy5hcHBlbmRUbyA9IG51bGw7XG4gICAgICAgIHRoaXMubW9kYWxPdmVybGF5ID0gbnVsbDtcblxuICAgICAgICBzdXBlci5yZWZyZXNoKGNmZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG5cbiAgICAgICAgUHJpbWVGYWNlcy51dGlscy5yZW1vdmVNb2RhbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmFwcGVuZFRvID0gbnVsbDtcbiAgICAgICAgdGhpcy5tb2RhbE92ZXJsYXkgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgbW9kYWxpdHkgZm9yIHRoaXMgd2lkZ2V0IGFuZCBjcmVhdGVzIHRoZSBtb2RhbCBvdmVybGF5IGVsZW1lbnQsIGJ1dCBkb2VzIG5vdCBjaGFuZ2Ugd2hldGhlciB0aGVcbiAgICAgKiBvdmVybGF5IGlzIGN1cnJlbnRseSBkaXNwbGF5ZWQuXG4gICAgICogQHBhcmFtIHtKUXVlcnkgfCBudWxsfSBbb3ZlcmxheV0gVGhlIHRhcmdldCBvdmVybGF5LCBpZiBub3QgZ2l2ZW4gZGVmYXVsdCB0b1xuICAgICAqIHtAbGluayBQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0LmpxIHwgdGhpcy5qcX0uXG4gICAgICovXG4gICAgZW5hYmxlTW9kYWxpdHkob3ZlcmxheSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gb3ZlcmxheXx8dGhpcy5qcTtcbiAgICAgICAgdGhpcy5tb2RhbE92ZXJsYXkgPSBQcmltZUZhY2VzLnV0aWxzLmFkZE1vZGFsKHRoaXMsXG4gICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICAkLnByb3h5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE1vZGFsVGFiYmFibGVzKCk7XG4gICAgICAgICAgICB9LCB0aGlzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZWQgbW9kYWxpdHkgZm9yIHRoaXMgd2lkZ2V0IGFuZCByZW1vdmVzIHRoZSBtb2RhbCBvdmVybGF5IGVsZW1lbnQsIGJ1dCBkb2VzIG5vdCBjaGFuZ2Ugd2hldGhlciB0aGVcbiAgICAgKiBvdmVybGF5IGlzIGN1cnJlbnRseSBkaXNwbGF5ZWQuXG4gICAgICogQHBhcmFtIHtKUXVlcnkgfCBudWxsfSBbb3ZlcmxheV0gVGhlIHRhcmdldCBvdmVybGF5LCBpZiBub3QgZ2l2ZW4gZGVmYXVsdCB0b1xuICAgICAqIHtAbGluayBQcmltZUZhY2VzLndpZGdldC5CYXNlV2lkZ2V0LmpxIHwgdGhpcy5qcX0uXG4gICAgICovXG4gICAgZGlzYWJsZU1vZGFsaXR5KG92ZXJsYXkpe1xuICAgICAgICB2YXIgdGFyZ2V0ID0gb3ZlcmxheXx8dGhpcy5qcTtcbiAgICAgICAgUHJpbWVGYWNlcy51dGlscy5yZW1vdmVNb2RhbCh0aGlzLCB0YXJnZXQpO1xuICAgICAgICB0aGlzLm1vZGFsT3ZlcmxheSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBjbGFzcyBtYWtlcyBzdXJlIGEgdXNlciBjYW5ub3QgdGFiIG91dCBvZiB0aGUgbW9kYWwgYW5kIGl0IHN0b3BzIGV2ZW50cyBmcm9tIHRhcmdldHMgb3V0c2lkZSBvZiB0aGVcbiAgICAgKiBvdmVybGF5IGVsZW1lbnQuIFRoaXMgcmVxdWlyZXMgdGhhdCB3ZSBzd2l0Y2ggYmFjayB0byB0aGUgbW9kYWwgaW4gY2FzZSBhIHVzZXIgdGFicyBvdXQgb2YgaXQuIFdoYXQgbXVzdFxuICAgICAqIGJlIHJldHVybmVkIGJ5IHRoaXMgbWV0aG9kIGFyZSB0aGUgZWxlbWVudHMgdG8gd2hpY2ggdGhlIHVzZXIgbWF5IHN3aXRjaCB2aWEgdGFiYmluZy5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybiB7SlF1ZXJ5fSBUaGUgRE9NIGVsZW1lbnRzIHdoaWNoIGFyZSBhbGxvd2VkIHRvIGJlIGZvY3VzZWQgdmlhIHRhYmJpbmcuIE1heSBiZSBhbiBlbXB0eSBgalF1ZXJ5YFxuICAgICAqIGluc3RhbmNlIHdoZW4gdGhlIG1vZGFsIGNvbnRhaW5zIG5vIHRhYmJhYmxlIGVsZW1lbnRzLCBidXQgbXVzdCBub3QgYmUgYHVuZGVmaW5lZGAuXG4gICAgICovXG4gICAgZ2V0TW9kYWxUYWJiYWJsZXMoKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG4vKipcbiAqIF9fUHJpbWVGYWNlcyBEZWZlcnJlZCBXaWRnZXRfX1xuICpcbiAqIEJhc2UgY2xhc3MgZm9yIHdpZGdldHMgdGhhdCByZXF1aXJlIHRoZWlyIGNvbnRhaW5lciB0byBiZSB2aXNpYmxlIHRvIGluaXRpYWxpemUgcHJvcGVybHkuXG4gKlxuICogRm9yIGV4YW1wbGUsIGEgd2lkZ2V0IG1heSBuZWVkIHRvIGtub3cgdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgaXRzIGNvbnRhaW5lciBzbyB0aGF0IGl0IGNhbiByZXNpemUgaXRzZWxmXG4gKiBwcm9wZXJseS5cbiAqXG4gKiBEbyBub3QgY2FsbCB0aGUge0BsaW5rIHJlbmRlcn0gb3Ige0BsaW5rIF9yZW5kZXJ9IG1ldGhvZCBkaXJlY3RseSBpbiB0aGUge0BsaW5rIGluaXR9IG1ldGhvZC4gSW5zdGVhZCwgY2FsbFxuICoge0BsaW5rIHJlbmRlckRlZmVycmVkfS4gUHJpbWVGYWNlcyB3aWxsIHRoZW4gY2hlY2sgd2hldGhlciB0aGUgd2lkZ2V0IGlzIHZpc2libGUgYW5kIGNhbGwgdGhlIHtAbGluayBfcmVuZGVyfVxuICogbWV0aG9kIG9uY2UgaXQgaXMuIE1ha2Ugc3VyZSB5b3UgYWN0dWFsbHkgb3ZlcnJpZGUgdGhlIHtAbGluayBfcmVuZGVyfSBtZXRob2QsIGFzIHRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uXG4gKiB0aHJvd3MgYW4gZXJyb3IuXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogaW1wb3J0IHsgRGVmZXJyZWRXaWRnZXQgfSBmcm9tICdAcHJpbWVmYWNlcy9wcmltZWZhY2VzJztcbiAqIGNsYXNzIE15V2lkZ2V0IGV4dGVuZHMgRGVmZXJyZWRXaWRnZXQge1xuICogICBpbml0KGNmZykge1xuICogICAgIHN1cGVyLmluaXQoY2ZnKTtcbiAqXG4gKiAgICAgLy8gbW9yZSBjb2RlIGlmIG5lZWRlZFxuICogICAgIC8vIC4uLlxuICpcbiAqICAgICAvLyBSZW5kZXIgdGhpcyB3aWRnZXQgb25jZSBpdHMgY29udGFpbmVyIGlzIHZpc2libGUuXG4gKiAgICAgdGhpcy5yZW5kZXJEZWZlcnJlZCgpO1xuICogICB9XG4gKlxuICogICBfcmVuZGVyKCkge1xuICogICAgIC8vIFBlcmZvcm0geW91ciByZW5kZXIgbG9naWMgaGVyZSwgY3JlYXRlIERPTSBlbGVtZW50cyBldGMuXG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBpbnRlcmZhY2Uge1ByaW1lRmFjZXMud2lkZ2V0LkRlZmVycmVkV2lkZ2V0Q2ZnfSBjZmcgVGhlIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSB7QGxpbmsgIERlZmVycmVkV2lkZ2V0fCBEZWZlcnJlZFdpZGdldCB3aWRnZXR9LlxuICogWW91IGNhbiBhY2Nlc3MgdGhpcyBjb25maWd1cmF0aW9uIHZpYSB7QGxpbmsgUHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldC5jZmd8QmFzZVdpZGdldC5jZmd9LiBQbGVhc2Ugbm90ZSB0aGF0XG4gKiB0aGlzIGNvbmZpZ3VyYXRpb24gaXMgdXN1YWxseSBtZWFudCB0byBiZSByZWFkLW9ubHkgYW5kIHNob3VsZCBub3QgYmUgbW9kaWZpZWQuXG4gKiBAZXh0ZW5kcyB7UHJpbWVGYWNlcy53aWRnZXQuQmFzZVdpZGdldENmZ30gY2ZnXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWZlcnJlZFdpZGdldCBleHRlbmRzIEJhc2VXaWRnZXQge1xuXG4gICAgLyoqXG4gICAgICogQ2FsbCB0aGlzIG1ldGhvZCBpbiB0aGUge0BsaW5rIGluaXR9IG1ldGhvZCBpZiB5b3Ugd2FudCBkZWZlcnJlZCByZW5kZXJpbmcgc3VwcG9ydC4gVGhpcyBtZXRob2QgY2hlY2tzXG4gICAgICogd2hldGhlciB0aGUgY29udGFpbmVyIG9mIHRoaXMgd2lkZ2V0IGlzIHZpc2libGUgYW5kIGNhbGwge0BsaW5rIF9yZW5kZXJ9IG9ubHkgb25jZSBpdCBpcy5cbiAgICAgKi9cbiAgICByZW5kZXJEZWZlcnJlZCgpIHtcbiAgICAgICAgaWYodGhpcy5qcS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnBvc3RSZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmpxWzBdKSB7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5qcVswXS5jbG9zZXN0KCcudWktaGlkZGVuLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHZhciAkY29udGFpbmVyID0gJChjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGlmKCRjb250YWluZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRGVmZXJyZWRSZW5kZXIodGhpcy5pZCwgJGNvbnRhaW5lciwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgcmVuZGVyIG1ldGhvZCB0byBjaGVjayB3aGV0aGVyIHRoZSB3aWRnZXQgY29udGFpbmVyIGlzIHZpc2libGUuIERvIG5vdCBvdmVycmlkZSB0aGlzIG1ldGhvZCwgb3IgdGhlXG4gICAgICogZGVmZXJyZWQgd2lkZ2V0IGZ1bmN0aW9uYWxpdHkgbWF5IG5vdCB3b3JrIHByb3Blcmx5IGFueW1vcmUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcmltZUZhY2VzLlJldHVybk9yVm9pZDxib29sZWFufHVuZGVmaW5lZD59IGB0cnVlYCBpZiB0aGUgd2lkZ2V0IGNvbnRhaW5lciBpcyB2aXNpYmxlLCBgZmFsc2VgIG9yXG4gICAgICogYHVuZGVmaW5lZGAgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYodGhpcy5qcS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnBvc3RSZW5kZXIoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyByZW5kZXIgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGlzIGRlZmVycmVkIHdpZGdldCBvbmNlIHRoZSB3aWRnZXQgY29udGFpbmVyIGhhcyBiZWNvbWUgdmlzaWJsZS4gWW91IG1heVxuICAgICAqIG5vdyBwcm9jZWVkIHdpdGggd2lkZ2V0IGluaXRpYWxpemF0aW9uLlxuICAgICAqXG4gICAgICogX19NdXN0IGJlIG92ZXJyaWRkZW5fXywgb3IgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gICAgICpcbiAgICAgKiBAaW5jbHVkZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfcmVuZGVyKCkge1xuICAgICAgICB0aHJvdyAnVW5zdXBwb3J0ZWQgT3BlcmF0aW9uJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgYWZ0ZXIgdGhlIHdpZGdldCBoYXMgYmVjb21lIHZpc2libGUgYW5kIGFmdGVyIGl0IHdhcyByZW5kZXJlZC4gTWF5IGJlIG92ZXJyaWRkZW4sIHRoZSBkZWZhdWx0XG4gICAgICogaW1wbGVtZW50YXRpb24gaXMgYSBuby1vcC5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcG9zdFJlbmRlcigpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFucyB1cCBkZWZlcnJlZCByZW5kZXIgdGFza3MuIFdoZW4geW91IGV4dGVuZCB0aGlzIGNsYXNzIGFuZCBvdmVycmlkZSB0aGlzIG1ldGhvZCwgbWFrZSBzdXJlIHRvIGNhbGxcbiAgICAgKiBgc3VwZXJgLlxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICAgICAgUHJpbWVGYWNlcy5yZW1vdmVEZWZlcnJlZFJlbmRlcnModGhpcy5pZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGRlZmVycmVkIHJlbmRlcmluZyB0YXNrIGZvciB0aGUgZ2l2ZW4gd2lkZ2V0IHRvIHRoZSBxdWV1ZS5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHdpZGdldElkIFRoZSBJRCBvZiBhIGRlZmVycmVkIHdpZGdldC5cbiAgICAgKiBAcGFyYW0ge0pRdWVyeX0gY29udGFpbmVyIFRoZSBjb250YWluZXIgZWxlbWVudCB0aGF0IHNob3VsZCBiZSB2aXNpYmxlLlxuICAgICAqIEBwYXJhbSB7KCkgPT4gYm9vbGVhbn0gY2FsbGJhY2sgQ2FsbGJhY2sgdGhhdCBpcyBpbnZva2VkIHdoZW4gdGhlIHdpZGdldCBfbWF5XyBwb3NzaWJseSBoYXZlIGJlY29tZSB2aXNpYmxlLlxuICAgICAqIFNob3VsZCByZXR1cm4gYHRydWVgIHdoZW4gdGhlIHdpZGdldCB3YXMgcmVuZGVyZWQsIG9yIGBmYWxzZWAgd2hlbiB0aGUgd2lkZ2V0IHN0aWxsIG5lZWRzIHRvIGJlIHJlbmRlcmVkXG4gICAgICogbGF0ZXIuXG4gICAgICovXG4gICAgYWRkRGVmZXJyZWRSZW5kZXIod2lkZ2V0SWQsIGNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICAgICAgUHJpbWVGYWNlcy5hZGREZWZlcnJlZFJlbmRlcih3aWRnZXRJZCwgY29udGFpbmVyLmF0dHIoJ2lkJyksIGNhbGxiYWNrKTtcblxuICAgICAgICBpZihjb250YWluZXIuaXMoJzpoaWRkZW4nKSkge1xuICAgICAgICAgICAgdmFyIHBhcmVudENvbnRhaW5lciA9IHRoaXMuanEuY2xvc2VzdCgnLnVpLWhpZGRlbi1jb250YWluZXInKTtcblxuICAgICAgICAgICAgaWYocGFyZW50Q29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRGVmZXJyZWRSZW5kZXIod2lkZ2V0SWQsIGNvbnRhaW5lci5wYXJlbnQoKS5jbG9zZXN0KCcudWktaGlkZGVuLWNvbnRhaW5lcicpLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBMEVPLElBQU0sYUFBTixjQUF5QixXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT3ZDLEtBQUssS0FBSztBQUNOLFVBQU0sS0FBSyxHQUFHO0FBQ2QsU0FBSyx5QkFBeUI7QUFFOUIsU0FBSyxLQUFLO0FBQUEsRUFDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxPQUFPO0FBQ0gsUUFBSSxRQUFRO0FBQ1osUUFBSSxZQUFZLFlBQVksS0FBSztBQUNqQyxNQUFFLFFBQVEsRUFBRSxH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QUFBLElBQ2YsY0FBYztBQUFBLElBQ2QsV0FBVztBQUFBLElBQ1gsVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLElBQ2QsV0FBVztBQUFBLElBQ1gsVUFBVTtBQUFBLElBQ1YsZ0JBQWdCO0FBQUEsSUFDaEIsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsV0FBVztBQUFBLElBQ1gsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsZ0JBQWdCO0FBQUEsSUFDaEIsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLElBQ1YsaUJBQWlCO0FBQUEsSUFDakIsV0FBVztBQUFBLElBQ1gsZUFBZTtBQUFBLElBQ2YsWUFBWTtBQUFBLElBQ1osTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsWUFBWTtBQUFBLElBQ1osVUFBVTtBQUFBLElBQ1YsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLElBQ1Ysb0JBQW9CO0FBQUEsSUFDcEIsaUJBQWlCO0FBQUEsSUFDakIsV0FBVztBQUFBLElBQ1gsYUFBYTtBQUFBLElBQ2IsY0FBYztBQUFBLElBQ2QsV0FBVztBQUFBLElBQ1gsT0FBTztBQUFBLElBQ1AsV0FBVztBQUFBLElBQ1gsVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsV0FBVztBQUFBLElBQ1gsYUFBYTtBQUFBLElBQ2IsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsV0FBVztBQUFBLElBQ1gscUJBQXFCO0FBQUEsSUFDckIsdUJBQXVCO0FBQUEsSUFDdkIsb0JBQW9CO0FBQUEsSUFDcEIsZUFBZTtBQUFBLElBQ2Ysa0JBQWtCO0FBQUEsSUFDbEIsb0JBQW9CO0FBQUEsSUFDcEIsZ0JBQWdCO0FBQUEsSUFDaEIsaUJBQWlCO0FBQUEsSUFDakIsa0JBQWtCO0FBQUEsSUFDbEIsZUFBZTtBQUFBLElBQ2YsZ0JBQWdCO0FBQUEsSUFDaEIsU0FBUztBQUFBLElBQ1QsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsV0FBVztBQUFB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

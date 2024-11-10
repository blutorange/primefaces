import { AjaxStatus } from "../ajaxstatus/ajaxstatus.js";
import { BaseWidget, DeferredWidget, DynamicOverlayWidget } from "../core/core.widget.js";
import { Poll } from "../poll/poll.js";

import type { AccordionPanel } from "../accordion/accordion.js";
import type { AutoComplete } from "../autocomplete/autocomplete.js";

import type { BaseTree } from "../tree/tree.base.js";
import type { BlockUI } from "../blockui/blockui.js";
import type { BreadCrumb } from "../menu/menu.breadcrumb.js";
import type { Button } from "../forms/forms.button.js";

import type { CascadeSelect } from "../forms/forms.cascadeselect.js";
import type { Calendar } from "../calendar/4-calendar.js";
import type { Captcha } from "../captcha/captcha.js";
import type { Carousel } from "../carousel/carousel.js";
import type { Chart } from "../chart/9-chartjs-widget.js";
import type { Chip } from "../chip/chip.js";
import type { Chips } from "../chips/chips.js";
import type { Clock } from "../clock/clock.js";
import type { ConfirmPopup } from "../confirmpopup/confirmpopup.js";
import type { ColorPicker } from "../colorpicker/1-colorpicker.js";
import type { ColumnToggler } from "../columntoggler/columntoggler.js";
import type { CommandButton } from "../forms/forms.commandbutton.js";
import type { CommandLink } from "../forms/forms.commandlink.js";
import type { ContextMenu } from "../menu/menu.contextmenu.js";

import type { Dashboard } from "../dashboard/dashboard.js";
import type { DataView } from "../dataview/dataview.js";
import type { DataGrid } from "../datagrid/datagrid.js";
import type { DataList } from "../datalist/datalist.js";
import type { DataScroller } from "../datascroller/datascroller.js";
import type { DataTable } from "../datatable/datatable.js";
import type { DatePicker } from "../datepicker/1-datepicker.js";
import type { DefaultCommand } from "../forms/forms.defaultcommand.js";
import type { Diagram } from "../diagram/1-diagram.js";
import type { Dialog, ConfirmDialog, DynamicDialog } from "../dialog/dialog.js";
import type { Dock } from "../dock/dock.js";
import type { Draggable, Droppable } from "../dragdrop/dragdrop.js";

import type { Effect } from "../effect/effect.js";

import type { Fieldset } from "../fieldset/fieldset.js";
import type { FileUpload } from "../fileupload/2-fileupload.js";
import type { FrozenDataTable } from "../datatable/datatable.frozen.js";

import type { Galleria } from "../galleria/1-galleria.js";
import type { GMap } from "../gmap/gmap.js";
import type { Growl } from "../growl/growl.js";

import type { HorizontalTree } from "../tree/tree.horizontal.js";

import type { IdleMonitor } from "../idlemonitor/1-idlemonitor.js";
import type { ImageCompare } from "../imagecompare/imagecompare-widget.js";
import type { ImageCropper } from "../imagecropper/imagecropper.js";
import type { ImageSwitch } from "../imageswitch/1-imageswitch.js";
import type { Inplace } from "../inplace/inplace.js";
import type { InputMask } from "../inputmask/1-inputmask.js";
import type { InputNumber } from "../inputnumber/1-inputnumber.js";
import type { InputText } from "../forms/forms.inputtext.js";
import type { InputTextarea } from "../forms/forms.inputtextarea.js";

import type { Keyboard } from "../keyboard/2-keyboard.js";
import type { KeyFilter } from "../keyfilter/1-keyfilter.js";
import type { Knob } from "../knob/2-knob.js";

import type { Lifecycle } from "../lifecycle/lifecycle.js";
import type { LinkButton } from "../forms/forms.linkbutton.js";
import type { Log } from "../log/log.js";

import type { MegaMenu } from "../menu/menu.megamenu.js";
import type { Menu } from "../menu/menu.base.js";
import type { Menubar } from "../menu/menu.menubar.js";
import type { MenuButton } from "../menu/menu.menubutton.js";
import type { Message } from "../message/message.js";
import type { Messages } from "../messages/messages.js";
import type { Mindmap } from "../mindmap/mindmap.js";
import type { MultiSelectListbox } from "../forms/forms.multiselectlistbox.js";

import type { NotificationBar } from "../notificationbar/notificationbar.js";

import type { OrderList } from "../orderlist/orderlist.js";
import type { Organigram } from "../organigram/organigram.js";
import type { OutputPanel } from "../outputpanel/outputpanel.js";
import type { OverlayPanel } from "../overlaypanel/overlaypanel.js";

import type { Paginator } from "../paginator/paginator.js";
import type { Panel } from "../panel/panel.js";
import type { PanelMenu } from "../menu/menu.panelmenu.js";
import type { Password } from "../forms/forms.password.js";
import type { PhotoCam } from "../photocam/1-photocam.js";
import type { PickList } from "../picklist/picklist.js";
import type { PlainMenu } from "../menu/menu.plainmenu.js";
import type { ProgressBar } from "../progressbar/progressbar.js";

import type { Rating } from "../rating/rating.js";
import type { Resizable } from "../resizable/resizable.js";

import type { Schedule } from "../schedule/1-schedule.js";
import type { ScrollPanel } from "../scrollpanel/1-scrollpanel.js";
import type { ScrollTop } from "../scrolltop/scrolltop.js";
import type { SelectBooleanButton } from "../forms/forms.selectbooleanbutton.js";
import type { SelectBooleanCheckbox } from "../forms/forms.selectbooleancheckbox.js";
import type { SelectCheckboxMenu } from "../forms/forms.selectcheckboxmenu.js";
import type { SelectListbox } from "../forms/forms.selectlistbox.js";
import type { SelectManyButton } from "../forms/forms.selectmanybutton.js";
import type { SelectManyCheckbox } from "../forms/forms.selectmanycheckbox.js";
import type { SelectManyMenu } from "../forms/forms.selectmanymenu.js";
import type { SelectOneButton } from "../forms/forms.selectonebutton.js";
import type { SelectOneMenu } from "../forms/forms.selectonemenu.js";
import type { SelectOneListbox } from "../forms/forms.selectonelistbox.js";
import type { SelectOneRadio } from "../forms/forms.selectoneradio.js";
import type { Sidebar } from "../sidebar/sidebar.js";
import type { Signature } from "../signature/1-widget.js";
import type { SimpleFileUpload } from "../fileupload/3-fileupload.simple.js";
import type { SlideMenu } from "../menu/menu.slidemenu.js";
import type { Slider } from "../slider/slider.js";
import type { SpeedDial } from "../speeddial/speeddial.js";
import type { Spinner } from "../spinner/spinner.js";
import type { Splitter } from "../splitter/splitter.js";
import type { SplitButton } from "../forms/forms.splitbutton.js";
import type { Spotlight } from "../spotlight/spotlight.js";
import type { StaticMessage } from "../staticmessage/staticmessage.js";
import type { Stack } from "../stack/stack.js";
import type { Sticky } from "../sticky/sticky.js";

import type { TabMenu } from "../menu/menu.tabmenu.js";
import type { TabView } from "../tabview/tabview.js";
import type { TagCloud } from "../tagcloud/tagcloud.js";
import type { Terminal } from "../terminal/terminal.js";
import type { TextEditor } from "../texteditor/1-texteditor.js";
import type { TieredMenu } from "../menu/menu.tieredmenu.js";
import type { Timeline } from "../timeline/1-timeline.js";
import type { Tooltip } from "../tooltip/tooltip.js";
import type { TreeTable } from "../treetable/treetable.js";
import type { TriStateCheckbox } from "../tristatecheckbox/tristatecheckbox.js";
import type { ToggleSwitch } from "../toggleswitch/toggleswitch.js";

import type { VerticalTree } from "../tree/tree.vertical.js";

import type { Wizard } from "../wizard/wizard.js";

/**
 * Mapping from the widget name to the corresponding widget class.
 * 
 * If you are writing custom PrimeFaces widgets and are using TypeScript, you can
 * extend this interface via module augmentation to add your custom widgets to
 * the registry like this:
 * 
 * ```ts
 * import { WidgetMap } from "primefaces/primefaces";
 * declare module "primefaces/primefaces" {
 *   interface WidgetMap {
 *     YouCustomWidget?: typeof YourCustomWidget;
 *   }
 * }
 * ```
 */
export interface WidgetMap {
    AccordionPanel?: typeof AccordionPanel;
    AjaxStatus?: typeof AjaxStatus;
    AutoComplete?: typeof AutoComplete;
    BaseTree?: typeof BaseTree;
    BaseWidget?: typeof BaseWidget;
    BlockUI?: typeof BlockUI;
    BreadCrumb?: typeof BreadCrumb;
    Button?: typeof Button;
    CascadeSelect?: typeof CascadeSelect;
    Calendar?: typeof Calendar;
    Captcha?: typeof Captcha;
    Carousel?: typeof Carousel;
    Chart?: typeof Chart;
    Chip?: typeof Chip;
    Chips?: typeof Chips;
    Clock?: typeof Clock;
    ColorPicker?: typeof ColorPicker;
    ColumnToggler?: typeof ColumnToggler;
    CommandButton?: typeof CommandButton;
    CommandLink?: typeof CommandLink;
    ConfirmPopup?: typeof ConfirmPopup;
    ConfirmDialog?: typeof ConfirmDialog;
    ContextMenu?: typeof ContextMenu;
    Dashboard?: typeof Dashboard;
    DataView?: typeof DataView;
    DataGrid?: typeof DataGrid;
    DataList?: typeof DataList;
    DataScroller?: typeof DataScroller;
    DataTable?: typeof DataTable;
    DatePicker?: typeof DatePicker;
    DefaultCommand?: typeof DefaultCommand;
    DeferredWidget?: typeof DeferredWidget;
    Diagram?: typeof Diagram;
    Dialog?: typeof Dialog;
    Dock?: typeof Dock;
    Draggable?: typeof Draggable;
    Droppable?: typeof Droppable;
    DynamicDialog?: typeof DynamicDialog;
    DynamicOverlayWidget?: typeof DynamicOverlayWidget;
    Effect?: typeof Effect;
    Fieldset?: typeof Fieldset;
    FileUpload?: typeof FileUpload;
    FrozenDataTable?: typeof FrozenDataTable;
    Galleria?: typeof Galleria;
    GMap?: typeof GMap;
    Growl?: typeof Growl;
    HorizontalTree?: typeof HorizontalTree;
    IdleMonitor?: typeof IdleMonitor;
    ImageCompare?: typeof ImageCompare;
    ImageCropper?: typeof ImageCropper;
    ImageSwitch?: typeof ImageSwitch;
    Inplace?: typeof Inplace;
    InputMask?: typeof InputMask;
    InputNumber?: typeof InputNumber;
    InputText?: typeof InputText;
    InputTextarea?: typeof InputTextarea;
    Keyboard?: typeof Keyboard;
    KeyFilter?: typeof KeyFilter;
    Knob?: typeof Knob;
    Lifecycle?: typeof Lifecycle;
    LinkButton?: typeof LinkButton;
    Log?: typeof Log;
    MegaMenu?: typeof MegaMenu;
    Menu?: typeof Menu;
    Menubar?: typeof Menubar;
    MenuButton?: typeof MenuButton;
    Message?: typeof Message;
    Messages?: typeof Messages;
    Mindmap?: typeof Mindmap;
    MultiSelectListbox?: typeof MultiSelectListbox;
    NotificationBar?: typeof NotificationBar;
    OrderList?: typeof OrderList;
    Organigram?: typeof Organigram;
    OutputPanel?: typeof OutputPanel;
    OverlayPanel?: typeof OverlayPanel;
    Paginator?: typeof Paginator;
    Panel?: typeof Panel;
    PanelMenu?: typeof PanelMenu;
    Password?: typeof Password;
    PhotoCam?: typeof PhotoCam;
    PickList?: typeof PickList;
    PlainMenu?: typeof PlainMenu;
    Poll?: typeof Poll;
    ProgressBar?: typeof ProgressBar;
    Rating?: typeof Rating;
    Resizable?: typeof Resizable;
    Schedule?: typeof Schedule;
    ScrollTop?: typeof ScrollTop;
    ScrollPanel?: typeof ScrollPanel;
    SelectBooleanButton?: typeof SelectBooleanButton;
    SelectBooleanCheckbox?: typeof SelectBooleanCheckbox;
    SelectCheckboxMenu?: typeof SelectCheckboxMenu;
    SelectListbox?: typeof SelectListbox;
    SelectManyButton?: typeof SelectManyButton;
    SelectManyCheckbox?: typeof SelectManyCheckbox;
    SelectManyMenu?: typeof SelectManyMenu;
    SelectOneButton?: typeof SelectOneButton;
    SelectOneMenu?: typeof SelectOneMenu;
    SelectOneListbox?: typeof SelectOneListbox;
    SelectOneRadio?: typeof SelectOneRadio;
    Sidebar?: typeof Sidebar;
    Signature?: typeof Signature;
    SimpleFileUpload?: typeof SimpleFileUpload;
    SlideMenu?: typeof SlideMenu;
    Slider?: typeof Slider;
    SpeedDial?: typeof SpeedDial;
    Spinner?: typeof Spinner;
    Splitter?: typeof Splitter;
    SplitButton?: typeof SplitButton;
    Spotlight?: typeof Spotlight;
    Stack?: typeof Stack;
    StaticMessage?: typeof StaticMessage;
    Sticky?: typeof Sticky;
    TabMenu?: typeof TabMenu;
    TabView?: typeof TabView;
    TagCloud?: typeof TagCloud;
    Terminal?: typeof Terminal;
    TextEditor?: typeof TextEditor;
    TieredMenu?: typeof TieredMenu;
    Timeline?: typeof Timeline;
    Tooltip?: typeof Tooltip;
    TreeTable?: typeof TreeTable;
    TriStateCheckbox?: typeof TriStateCheckbox;
    ToggleSwitch?: typeof ToggleSwitch;
    VerticalTree?: typeof VerticalTree;
    Wizard?: typeof Wizard;
}

/**
 * Callback for {@link loadWidget}. The callback is called once the widget was loaded.
 * @typeParam K The name of the widget that was loaded.
 */
export type OnWidgetLoaded<WidgetName extends keyof WidgetMap> = (result: PromiseSettledResult<WidgetMap[WidgetName]>) => void;

/**
 * The result of a widget loading operation. The result is either "fulfilled" with
 * the loaded widgets, or "rejected" with the reason why the widget could not be loaded.
 * @typeParam Bundle Type of the widgets that were loaded.
 */
export type WidgetLoaderResult<Bundle extends WidgetMap> = PromiseSettledResult<Bundle>;

/**
 * A callback that is invoked once the widget was loaded. It is given the result
 * with the widgets. The result is either "fulfilled" with the loaded widget, or
 * "rejected" with the reason why the widget could not be loaded.
 * @typeParam Bundle Type of the widgets that were loaded.
 * @param result The result of the widget loading.
 */
export type WidgetLoaderCallback<Bundle extends WidgetMap> = (result: WidgetLoaderResult<Bundle>) => void;

/**
 * Loader for widgets. The implementation may either load the widgets synchronously
 * or asynchronously. The loader must call the provided callback when done, either
 * with the loaded widget or with the reason why the widget could not be loaded.
 * 
 * A loader may load multiple widgets at once by returning an object with multiple
 * entries, one for each loaded widget.
 * 
 * A loader must specify the widets which it can load. This is used to prevent
 * loading the widget multiple times (which could happen when multiple different
 * widgets are requested at the same time).
 * 
 * @typeParam Bundle Type of the widgets that can be loaded.
 */
export interface WidgetLoader<Bundle extends WidgetMap> {
    /**
     * The function that loads the widgets. The function must call the provided
     * callback once the widgets are loaded, either with the loaded widgets or
     * with the reason why the widgets could not be loaded.
     * @param callback The callback to call once the widgets are loaded.
     * @returns The loaded widgets, or the reason why the widgets could not be loaded.
     */
    readonly load: (callback: WidgetLoaderCallback<Bundle>) => void;
    /**
     * All names that the loader can load. This is required to prevent calling
     * the loader multiple times for different widgets that are loaded by the
     * same loader.
     */
    readonly widgetNames: Record<keyof Bundle, boolean>;
};

/**
 * Represents a single entry in the {@link WidgetRegistry}. The entry contains the
 * loader to load the widget. If the widget was already loaded, the entry also contains
 * the loaded widget. If the widget could not be loaded, the entry contains the error
 * that occurred during loading.
 * @typeParam K The name of the widget.
 */
export interface WidgetRegistryEntry<K extends keyof WidgetMap> {
    readonly loader: WidgetLoader<Record<K, WidgetMap[K]>>;
    value: PromiseSettledResult<WidgetMap[K]> | undefined;
}

/**
 * Registry with all widget types. The key is the widget name, see {@link WidgetMap}.
 * The value is an object with the loader for the widget, and the loaded if widget
 * if already loaded.
 */
export type WidgetRegistry = {
    readonly [P in keyof WidgetMap]-?: WidgetRegistryEntry<P>;
};

/**
 * For widgets that are currently being loaded: Map from a widget name to a set of
 * pending callbacks to be invoked once the widget finishes loading.
 */
const LoadingWidgets: Map<keyof WidgetMap, OnWidgetLoaded<keyof WidgetMap>[]> = new Map();

/** All widgets that are included in the main bundle (and are thus not loaded dynamically) */
const StaticWidgets = { AjaxStatus, BaseWidget, DeferredWidget, DynamicOverlayWidget, Poll };

/** "Loader" for all widgets that are included in the main bundle (and are thus not loaded dynamically) */
const StaticLoader: WidgetLoader<typeof StaticWidgets> = {
    load: callback => {
        callback({ status: "fulfilled", value: { AjaxStatus, BaseWidget, DeferredWidget, DynamicOverlayWidget, Poll } });
    },
    widgetNames: {
        AjaxStatus: true,
        BaseWidget: true,
        DeferredWidget: true,
        DynamicOverlayWidget: true,
        Poll: true,
    },
};

/**
 * Loader for all widgets in the common bundle. All common widgets are included in 
 * a single script file.
 */
const CommonLoader: WidgetLoader<typeof import("./core.widget.common.js")> = {
    load: (callback) => {
        import("./core.widget.common.js").then(
            widgets => callback({ status: "fulfilled", value: widgets }),
            error => callback({ status: "rejected", reason: error }),
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
        Wizard: true,
    },
};

function recordEntries<R extends Record<PropertyKey, unknown>>(record: R): readonly { [P in keyof R]: [P, R[P]] }[keyof R][] {
    return Object.entries(record) as readonly { [P in keyof R]: [P, R[P]] }[keyof R][];
}

/**
 * Creates a loader for a single widget, loaded dynamically.
 * @param load The function that loads the widget.
 * @returns The loader for the widget.
 */
function SingleLoader<K extends keyof WidgetMap>(widgetName: K, load: () => Promise<Record<K, WidgetMap[K]>>): WidgetLoader<Record<K, WidgetMap[K]>> {
    return {
        load: callback => {
            load().then(
                widgets => callback({ status: "fulfilled", value: widgets }),
                error => callback({ status: "rejected", reason: error }),
            );
        },
        widgetNames: { [widgetName]: true } as Record<K, boolean>,
    };
}

function insertLoadedWidgets(
    loader: WidgetLoader<Partial<WidgetMap>>,
    result: WidgetLoaderResult<Partial<WidgetMap>>
): void {
    const allCallbacks: (() => void)[] = [];

    // Store the loaded widget types in the widget cache
    // If the widget failed to load, store the error so we don't try to load it again.
    for (const [widgetName, include] of recordEntries(loader.widgetNames)) {
        if (!include) {
            continue;
        }

        const registryEntry = getWidgetRegistryEntry(widgetName);
        if (registryEntry === undefined) {
            PrimeFaces.error(`Widget '${widgetName}' not registered`);
            continue;
        }
        if (registryEntry.value !== undefined) {
            PrimeFaces.warn(`Widget '${widgetName}' already loaded (or failed to load)`);
            continue;
        }

        let widgetResult: PromiseSettledResult<WidgetMap[keyof WidgetMap]>;
        if (result.status === "fulfilled") {
            const widget = result.value[widgetName];
            widgetResult = widget !== undefined
                ? { status: "fulfilled", value: widget }
                : { status: "rejected", reason: new Error(`Widget '${widgetName}' missing in the loader result!`) };
        } else {
            widgetResult = result;
        }

        registryEntry.value = widgetResult;
        const callbacks = LoadingWidgets.get(widgetName) ?? [];
        LoadingWidgets.delete(widgetName);
        allCallbacks.push(...callbacks.map(callback => () => callback(widgetResult)));
    }

    // Invoke callbacks after storing the loaded widgets in the WidgetRegistry,
    // in case a callbacks calls the loadWidget function again.
    for (const callback of allCallbacks) {
        try {
            callback();
        } catch (error) {
            PrimeFaces.error("Error in widget callback: " + error);
        }
    }
}

function getWidgetRegistryEntry<K extends keyof WidgetMap>(widgetName: K): WidgetRegistryEntry<K> | undefined {
    return WidgetRegistry[widgetName] as WidgetRegistryEntry<K> | undefined;
}

export function getWidgetIfPresent<K extends keyof WidgetMap>(widgetName: K): WidgetMap[K] | undefined {
    const entry = getWidgetRegistryEntry(widgetName);
    return entry?.value?.status === "fulfilled" ? entry.value.value : undefined;
}

/**
 * Loads a widget and calls the callback with the loaded widget. If the widget is available
 * synchronously, the callback is called immediately. Otherwise, the callback is called when
 * once the widget is available.
 * @typeParam K The name of the widget to load.
 * @param widgetName Name of the widget to load, e..g `InputText`.
 * @param callback Callback to be called with the loaded widget.
 */
export function loadWidget<K extends keyof WidgetMap>(widgetName: K, callback: OnWidgetLoaded<K>): void {
    const registryEntry = getWidgetRegistryEntry(widgetName);
    if (registryEntry === undefined) {
        callback({ status: "rejected", reason: new Error(`Widget ${widgetName} not registered`) });
        return;
    }

    // Was the widget already loaded? Then just call the callback with the load result.
    const loadResult = registryEntry.value;
    if (loadResult !== undefined) {
        callback(loadResult);
        return;
    }

    // Is the widget already loading? If so, don't load it again.
    const alreadyLoading = LoadingWidgets.get(widgetName);
    if (alreadyLoading !== undefined) {
        alreadyLoading.push(callback as OnWidgetLoaded<keyof WidgetMap>);
        return;
    }

    // Widget needs to be loaded.
    const loader = registryEntry.loader;
    if (loader !== undefined) {
        for (const [widgetName, include] of recordEntries(loader.widgetNames)) {
            if (include) {
                LoadingWidgets.set(widgetName, [callback as OnWidgetLoaded<keyof WidgetMap>]);
            }
        }
        loader.load(result => insertLoadedWidgets(loader, result));
        return;
    }

    // Widget not found.
    callback({ status: "rejected", reason: new Error("Widget class '" + widgetName + "' not found!") });
}

/**
 * Registry with all widget types. The key is the widget name, see {@link WidgetMap}.
 * The value is an object with the loader for the widget, and the loaded if widget
 * if already loaded.
 */
export const WidgetRegistry: WidgetRegistry = {
    AccordionPanel: { value: undefined, loader: CommonLoader },
    AjaxStatus: { value: undefined, loader: StaticLoader },
    AutoComplete: { value: undefined, loader: CommonLoader },
    BaseTree: { value: undefined, loader: CommonLoader },
    BaseWidget: { value: undefined, loader: StaticLoader },
    BlockUI: { value: undefined, loader: CommonLoader },
    BreadCrumb: { value: undefined, loader: CommonLoader },
    Button: { value: undefined, loader: CommonLoader },
    CascadeSelect: { value: undefined, loader: CommonLoader },
    Calendar: { value: undefined, loader: SingleLoader("Calendar", () => import("../calendar/4-calendar.js")) },
    Captcha: { value: undefined, loader: SingleLoader("Captcha", () => import("../captcha/captcha.js")) },
    Carousel: { value: undefined, loader: CommonLoader },
    Chart: { value: undefined, loader: SingleLoader("Chart", () => import("../chart/9-chartjs-widget.js")) },
    Chip: { value: undefined, loader: CommonLoader },
    Chips: { value: undefined, loader: CommonLoader },
    Clock: { value: undefined, loader: SingleLoader("Clock", () => import("../clock/clock.js")) },
    ColorPicker: { value: undefined, loader: SingleLoader("ColorPicker", () => import("../colorpicker/1-colorpicker.js")) },
    ColumnToggler: { value: undefined, loader: CommonLoader },
    CommandButton: { value: undefined, loader: CommonLoader },
    CommandLink: { value: undefined, loader: CommonLoader },
    ConfirmPopup: { value: undefined, loader: CommonLoader },
    ConfirmDialog: { value: undefined, loader: CommonLoader },
    ContextMenu: { value: undefined, loader: CommonLoader },
    Dashboard: { value: undefined, loader: CommonLoader },
    DataView: { value: undefined, loader: CommonLoader },
    DataGrid: { value: undefined, loader: CommonLoader },
    DataList: { value: undefined, loader: CommonLoader },
    DataScroller: { value: undefined, loader: CommonLoader },
    DataTable: { value: undefined, loader: CommonLoader },
    DatePicker: { value: undefined, loader: SingleLoader("DatePicker", () => import("../datepicker/1-datepicker.js")) },
    DefaultCommand: { value: undefined, loader: CommonLoader },
    DeferredWidget: { value: undefined, loader: StaticLoader },
    Diagram: { value: undefined, loader: SingleLoader("Diagram", () => import("../diagram/1-diagram.js")) },
    Dialog: { value: undefined, loader: CommonLoader },
    Dock: { value: undefined, loader: SingleLoader("Dock", () => import("../dock/dock.js")) },
    Draggable: { value: undefined, loader: CommonLoader },
    Droppable: { value: undefined, loader: CommonLoader },
    DynamicDialog: { value: undefined, loader: CommonLoader },
    DynamicOverlayWidget: { value: undefined, loader: StaticLoader },
    Effect: { value: undefined, loader: CommonLoader },
    Fieldset: { value: undefined, loader: CommonLoader },
    FileUpload: { value: undefined, loader: SingleLoader("FileUpload", () => import("../fileupload/2-fileupload.js")) },
    FrozenDataTable: { value: undefined, loader: CommonLoader },
    Galleria: { value: undefined, loader: SingleLoader("Galleria", () => import("../galleria/1-galleria.js")) },
    GMap: { value: undefined, loader: SingleLoader("GMap", () => import("../gmap/gmap.js")) },
    Growl: { value: undefined, loader: CommonLoader },
    HorizontalTree: { value: undefined, loader: CommonLoader },
    IdleMonitor: { value: undefined, loader: SingleLoader("IdleMonitor", () => import("../idlemonitor/1-idlemonitor.js")) },
    ImageCompare: { value: undefined, loader: SingleLoader("ImageCompare", () => import("../imagecompare/imagecompare-widget.js")) },
    ImageCropper: { value: undefined, loader: SingleLoader("ImageCropper", () => import("../imagecropper/imagecropper.js")) },
    ImageSwitch: { value: undefined, loader: SingleLoader("ImageSwitch", () => import("../imageswitch/1-imageswitch.js")) },
    Inplace: { value: undefined, loader: CommonLoader },
    InputMask: { value: undefined, loader: SingleLoader("InputMask", () => import("../inputmask/1-inputmask.js")) },
    InputNumber: { value: undefined, loader: SingleLoader("InputNumber", () => import("../inputnumber/1-inputnumber.js")) },
    InputText: { value: undefined, loader: CommonLoader },
    InputTextarea: { value: undefined, loader: CommonLoader },
    Keyboard: { value: undefined, loader: SingleLoader("Keyboard", () => import("../keyboard/2-keyboard.js")) },
    KeyFilter: { value: undefined, loader: SingleLoader("KeyFilter", () => import("../keyfilter/1-keyfilter.js")) },
    Knob: { value: undefined, loader: SingleLoader("Knob", () => import("../knob/2-knob.js")) },
    Lifecycle: { value: undefined, loader: SingleLoader("Lifecycle", () => import("../lifecycle/lifecycle.js")) },
    LinkButton: { value: undefined, loader: CommonLoader },
    Log: { value: undefined, loader: SingleLoader("Log", () => import("../log/log.js")) },
    MegaMenu: { value: undefined, loader: CommonLoader },
    Menu: { value: undefined, loader: CommonLoader },
    Menubar: { value: undefined, loader: CommonLoader },
    MenuButton: { value: undefined, loader: CommonLoader },
    Message: { value: undefined, loader: CommonLoader },
    Messages: { value: undefined, loader: CommonLoader },
    Mindmap: { value: undefined, loader: SingleLoader("Mindmap", () => import("../mindmap/mindmap.js")) },
    MultiSelectListbox: { value: undefined, loader: CommonLoader },
    NotificationBar: { value: undefined, loader: CommonLoader },
    OrderList: { value: undefined, loader: CommonLoader },
    Organigram: { value: undefined, loader: SingleLoader("Organigram", () => import("../organigram/organigram.js")) },
    OutputPanel: { value: undefined, loader: CommonLoader },
    OverlayPanel: { value: undefined, loader: CommonLoader },
    Paginator: { value: undefined, loader: CommonLoader },
    Panel: { value: undefined, loader: CommonLoader },
    PanelMenu: { value: undefined, loader: CommonLoader },
    Password: { value: undefined, loader: CommonLoader },
    PhotoCam: { value: undefined, loader: SingleLoader("PhotoCam", () => import("../photocam/1-photocam.js")) },
    PickList: { value: undefined, loader: CommonLoader },
    PlainMenu: { value: undefined, loader: CommonLoader },
    Poll: { value: undefined, loader: StaticLoader },
    ProgressBar: { value: undefined, loader: CommonLoader },
    Rating: { value: undefined, loader: CommonLoader },
    Resizable: { value: undefined, loader: CommonLoader },
    Schedule: { value: undefined, loader: SingleLoader("Schedule", () => import("../schedule/1-schedule.js")) },
    ScrollTop: { value: undefined, loader: CommonLoader },
    ScrollPanel: { value: undefined, loader: SingleLoader("ScrollPanel", () => import("../scrollpanel/1-scrollpanel.js")) },
    SelectBooleanButton: { value: undefined, loader: CommonLoader },
    SelectBooleanCheckbox: { value: undefined, loader: CommonLoader },
    SelectCheckboxMenu: { value: undefined, loader: CommonLoader },
    SelectListbox: { value: undefined, loader: CommonLoader },
    SelectManyButton: { value: undefined, loader: CommonLoader },
    SelectManyCheckbox: { value: undefined, loader: CommonLoader },
    SelectManyMenu: { value: undefined, loader: CommonLoader },
    SelectOneButton: { value: undefined, loader: CommonLoader },
    SelectOneMenu: { value: undefined, loader: CommonLoader },
    SelectOneListbox: { value: undefined, loader: CommonLoader },
    SelectOneRadio: { value: undefined, loader: CommonLoader },
    Sidebar: { value: undefined, loader: CommonLoader },
    Signature: { value: undefined, loader: SingleLoader("Signature", () => import("../signature/1-widget.js")) },
    SimpleFileUpload: { value: undefined, loader: SingleLoader("SimpleFileUpload", () => import("../fileupload/3-fileupload.simple.js")) },
    SlideMenu: { value: undefined, loader: CommonLoader },
    Slider: { value: undefined, loader: CommonLoader },
    SpeedDial: { value: undefined, loader: CommonLoader },
    Spinner: { value: undefined, loader: CommonLoader },
    Splitter: { value: undefined, loader: CommonLoader },
    SplitButton: { value: undefined, loader: CommonLoader },
    Spotlight: { value: undefined, loader: CommonLoader },
    Stack: { value: undefined, loader: SingleLoader("Stack", () => import("../stack/stack.js")) },
    StaticMessage: { value: undefined, loader: CommonLoader },
    Sticky: { value: undefined, loader: CommonLoader },
    TabMenu: { value: undefined, loader: CommonLoader },
    TabView: { value: undefined, loader: CommonLoader },
    TagCloud: { value: undefined, loader: CommonLoader },
    Terminal: { value: undefined, loader: SingleLoader("Terminal", () => import("../terminal/terminal.js")) },
    TextEditor: { value: undefined, loader: SingleLoader("TextEditor", () => import("../texteditor/1-texteditor.js")) },
    TieredMenu: { value: undefined, loader: CommonLoader },
    Timeline: { value: undefined, loader: SingleLoader("Timeline", () => import("../timeline/1-timeline.js")) },
    Tooltip: { value: undefined, loader: CommonLoader },
    TreeTable: { value: undefined, loader: CommonLoader },
    TriStateCheckbox: { value: undefined, loader: CommonLoader },
    ToggleSwitch: { value: undefined, loader: CommonLoader },
    VerticalTree: { value: undefined, loader: CommonLoader },
    Wizard: { value: undefined, loader: CommonLoader },
};

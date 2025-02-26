import autosize from "autosize";

import "./src/forms/forms.inputtext.widget.js";
import "./src/forms/forms.inputtextarea.widget.js";
import "./src/forms/forms.selectonemenu.widget.js";
import "./src/forms/forms.selectoneradio.widget.js";
import "./src/forms/forms.selectbooleancheckbox.widget.js";
import "./src/forms/forms.selectmanycheckbox.widget.js";
import "./src/forms/forms.selectlistbox.widget.js";
import "./src/forms/forms.selectonelistbox.widget.js";
import "./src/forms/forms.selectmanymenu.widget.js";
import "./src/forms/forms.cascadeselect.widget.js";
import { CommandButton } from "./src/forms/forms.commandbutton.widget.js";
import "./src/forms/forms.commandlink.widget.js";
import "./src/forms/forms.button.widget.js";
import "./src/forms/forms.linkbutton.widget.js";
import "./src/forms/forms.selectmanybutton.widget.js";
import "./src/forms/forms.selectonebutton.widget.js";
import "./src/forms/forms.selectbooleanbutton.widget.js";
import "./src/forms/forms.selectcheckboxmenu.widget.js";
import "./src/forms/forms.password.widget.js";
import "./src/forms/forms.defaultcommand.widget.js";
import { SplitButton } from "./src/forms/forms.splitbutton.widget.js";
import "./src/forms/forms.multiselectlistbox.widget.js";

import { BreadCrumb } from "./src/menu/menu.breadcrumb.widget.js";
import { ContextMenu } from "./src/menu/menu.contextmenu.widget.js";
import { MegaMenu } from "./src/menu/menu.megamenu.widget.js";
import { Menu } from "./src/menu/menu.base.widget.js";
import { Menubar } from "./src/menu/menu.menubar.widget.js";
import { MenuButton } from "./src/menu/menu.menubutton.widget.js";
import { PanelMenu } from "./src/menu/menu.panelmenu.widget.js";
import { PlainMenu } from "./src/menu/menu.plainmenu.widget.js";
import { SlideMenu } from "./src/menu/menu.slidemenu.widget.js";
import { Steps } from "./src/menu/menu.steps.widget.js";
import { TabMenu } from "./src/menu/menu.tabmenu.widget.js";
import { TieredMenu } from "./src/menu/menu.tieredmenu.widget.js";

import "./src/core.dialog.js";
import "./src/accordion/accordion.widget.js";
import "./src/autocomplete/autocomplete.widget.js";
import "./src/blockui/blockui.widget.js";
import "./src/carousel/carousel.widget.js";
import "./src/confirmpopup/confirmpopup.widget.js";
import "./src/columntoggler/columntoggler.widget.js";
import "./src/dashboard/dashboard.widget.js";
import "./src/datagrid/datagrid.widget.js";
import "./src/datalist/datalist.widget.js";
import "./src/datascroller/datascroller.widget.js";

import "./src/datatable/datatable.widget.js";
import "./src/datatable/datatable.frozen.widget.js";
import "./src/dialog/dialog.widget.js";
import "./src/dragdrop/dragdrop.widget.js";
import "./src/effect/effect.widget.js";
import "./src/fieldset/fieldset.widget.js";
import "./src/growl/growl.widget.js";
import "./src/inplace/inplace.widget.js";
import "./src/message/message.widget.js";
import "./src/messages/messages.widget.js";
import "./src/notificationbar/notificationbar.widget.js";
import "./src/panel/panel.widget.js";
import "./src/orderlist/orderlist.widget.js";
import "./src/outputpanel/outputpanel.widget.js";
import "./src/overlaypanel/overlaypanel.widget.js";
import "./src/paginator/paginator.widget.js";
import "./src/picklist/picklist.widget.js";
import "./src/progressbar/progressbar.widget.js";
import "./src/rating/rating.widget.js";
import "./src/resizable/resizable.widget.js";
import "./src/slider/slider.widget.js";
import "./src/spinner/spinner.widget.js";
import "./src/splitter/splitter.widget.js";
import "./src/spotlight/spotlight.widget.js";
import "./src/speeddial/speeddial.widget.js";
import "./src/staticmessage/staticmessage.widget.js";
import "./src/sticky/sticky.widget.js";
import "./src/tabview/tabview.widget.js";
import "./src/tagcloud/tagcloud.widget.js";
import "./src/tooltip/tooltip.widget.js";

import "./src/tree/tree.base.widget.js";
import "./src/tree/tree.vertical.widget.js";
import "./src/tree/tree.horizontal.widget.js";
import "./src/treetable/treetable.widget.js";

import "./src/wizard/wizard.widget.js";
import "./src/tristatecheckbox/tristatecheckbox.widget.js";
import "./src/chip/chip.widget.js";
import "./src/chips/chips.widget.js";
import "./src/scrolltop/scrolltop.widget.js";
import "./src/sidebar/sidebar.widget.js";
import "./src/dataview/dataview.widget.js";
import "./src/toggleswitch/toggleswitch.widget.js";

// Expose autosize to the global scope
Object.assign(window, { autosize });

// Expose widgets to the global scope

// src/forms
PrimeFaces.widget.CommandButton = CommandButton;
PrimeFaces.widget.SplitButton = SplitButton;

// src/menu
PrimeFaces.widget.BreadCrumb = BreadCrumb;
PrimeFaces.widget.MegaMenu = MegaMenu;
PrimeFaces.widget.Menu = Menu;
PrimeFaces.widget.MenuButton = MenuButton;
PrimeFaces.widget.Menubar = Menubar;
PrimeFaces.widget.PanelMenu = PanelMenu;
PrimeFaces.widget.PlainMenu = PlainMenu;
PrimeFaces.widget.SlideMenu = SlideMenu;
PrimeFaces.widget.Steps = Steps;
PrimeFaces.widget.TabMenu = TabMenu;
PrimeFaces.widget.TieredMenu = TieredMenu;

// Other

// Global extensions
declare global {
    namespace PrimeType {
        interface WindowExtensions {
            autosize: typeof autosize;
        }
    }
}

// Types (src/forms)
declare global {
    namespace PrimeType {
        export interface WidgetRegistry {
            CommandButton: typeof CommandButton;
            SplitButton: typeof SplitButton;
        }
    }

    namespace PrimeType.widget {
        export type CommandButtonCfg = import("./src/forms/forms.commandbutton.widget.js").CommandButtonCfg;
        export type SplitButtonCfg = import("./src/forms/forms.splitbutton.widget.js").SplitButtonCfg;
    }

    namespace PrimeType.widget.SplitButton {
        /**
         * Available modes for filtering the options of the available buttons actions of a split button. When `custom` is set, a
         * `filterFunction` must be specified.
         */
        export type FilterMatchMode = "startsWith" | "contains" | "endsWith" | "custom";

        /**
         * A filter function that takes a term and returns whether the
         * search term matches the value.
         */
        export type FilterFunction =
            /**
             * @param value A value to check.
             * @param query A search term against which the value is checked.
             * @return `true` if the search term matches the value, or `false`
             * otherwise.
             */
            (value: string, query: string) => boolean;
    }
}

// Types (src/menu)
declare global {
    namespace PrimeType {
        export interface WidgetRegistry {
            BreadCrumb: typeof BreadCrumb;
            MegaMenu: typeof MegaMenu;
            Menu: typeof Menu;
            Menubar: typeof Menubar;
            MenuButton: typeof MenuButton;
            PanelMenu: typeof PanelMenu;
            PlainMenu: typeof PlainMenu;
            SlideMenu: typeof SlideMenu;
            Steps: typeof Steps;
            TabMenu: typeof TabMenu;
            TieredMenu: typeof TieredMenu;
        }
    }

    namespace PrimeType.widget {
        export type BreadCrumbCfg = import("./src/menu/menu.breadcrumb.widget.js").BreadCrumbCfg;
        export type ContextMenuCfg = import("./src/menu/menu.contextmenu.widget.js").ContextMenuCfg;
        export type MegaMenuCfg = import("./src/menu/menu.megamenu.widget.js").MegaMenuCfg;
        export type MenuCfg = import("./src/menu/menu.base.widget.js").MenuCfg;
        export type MenubarCfg = import("./src/menu/menu.menubar.widget.js").MenubarCfg;
        export type MenuButtonCfg = import("./src/menu/menu.menubutton.widget.js").MenuButtonCfg;
        export type PanelMenuCfg = import("./src/menu/menu.panelmenu.widget.js").PanelMenuCfg;
        export type PlainMenuCfg = import("./src/menu/menu.plainmenu.widget.js").PlainMenuCfg;
        export type SlideMenuCfg = import("./src/menu/menu.slidemenu.widget.js").SlideMenuCfg;
        export type StepsCfg = import("./src/menu/menu.steps.widget.js").StepsCfg;
        export type TabMenuCfg = import("./src/menu/menu.tabmenu.widget.js").TabMenuCfg;
        export type TieredMenuCfg = import("./src/menu/menu.tieredmenu.widget.js").TieredMenuCfg;
    }

    namespace PrimeType.widget.ContextMenu {
        /**
         * Client side callback invoked before the context menu is
         * shown.
         */
        export type BeforeShowCallback =
            /**
             * @param event Event that triggered the context menu to
             * be shown (e.g. a mouse click).
             * @return ` true` to show the context menu, `false` to
             * prevent is from getting displayed.
             */
            (this: ContextMenu<ContextMenuCfg>, event: JQuery.TriggeredEvent) => boolean;

        /**
         * Selection mode for the context, whether the user may select only
         * one or multiple items at the same time.
         */
        export type SelectionMode = "single" | "multiple";
    }

    namespace PrimeType.widget.PlainMenu {
        /**
         * The direction in which to navigate, either to the next menu item
         * or to the previous menu item.
         */
        export type NavigationDirection = "prev" | "next";
    }

    namespace PrimeType.widget.TieredMenu {
        /**
         * Allowed event types for toggling a tiered menu.
         */
        export type ToggleEvent = "hover" | "click";
    }
}

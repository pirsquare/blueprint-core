/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Alignment } from "./alignment";
import { Elevation } from "./elevation";
import { Intent } from "./intent";
import { Position } from "./position";
var NS = "bp";
if (typeof BLUEPRINT_NAMESPACE !== "undefined") {
    NS = BLUEPRINT_NAMESPACE;
}
else if (typeof REACT_APP_BLUEPRINT_NAMESPACE !== "undefined") {
    NS = REACT_APP_BLUEPRINT_NAMESPACE;
}
// modifiers
export var ACTIVE = "".concat(NS, "-active");
export var ALIGN_LEFT = "".concat(NS, "-align-left");
export var ALIGN_RIGHT = "".concat(NS, "-align-right");
export var COMPACT = "".concat(NS, "-compact");
export var DARK = "".concat(NS, "-dark");
export var DISABLED = "".concat(NS, "-disabled");
export var FILL = "".concat(NS, "-fill");
export var FIXED = "".concat(NS, "-fixed");
export var FIXED_TOP = "".concat(NS, "-fixed-top");
export var INLINE = "".concat(NS, "-inline");
export var INTERACTIVE = "".concat(NS, "-interactive");
export var LARGE = "".concat(NS, "-large");
export var LOADING = "".concat(NS, "-loading");
export var MINIMAL = "".concat(NS, "-minimal");
export var OUTLINED = "".concat(NS, "-outlined");
export var PADDED = "".concat(NS, "-padded");
export var MULTILINE = "".concat(NS, "-multiline");
export var READ_ONLY = "".concat(NS, "-read-only");
export var ROUND = "".concat(NS, "-round");
export var SELECTED = "".concat(NS, "-selected");
export var SMALL = "".concat(NS, "-small");
export var VERTICAL = "".concat(NS, "-vertical");
export var POSITION_TOP = positionClass(Position.TOP);
export var POSITION_BOTTOM = positionClass(Position.BOTTOM);
export var POSITION_LEFT = positionClass(Position.LEFT);
export var POSITION_RIGHT = positionClass(Position.RIGHT);
export var ELEVATION_0 = elevationClass(Elevation.ZERO);
export var ELEVATION_1 = elevationClass(Elevation.ONE);
export var ELEVATION_2 = elevationClass(Elevation.TWO);
export var ELEVATION_3 = elevationClass(Elevation.THREE);
export var ELEVATION_4 = elevationClass(Elevation.FOUR);
export var INTENT_PRIMARY = intentClass(Intent.PRIMARY);
export var INTENT_SUCCESS = intentClass(Intent.SUCCESS);
export var INTENT_WARNING = intentClass(Intent.WARNING);
export var INTENT_DANGER = intentClass(Intent.DANGER);
export var FOCUS_DISABLED = "".concat(NS, "-focus-disabled");
export var FOCUS_STYLE_MANAGER_IGNORE = "".concat(NS, "-focus-style-manager-ignore");
// text utilities
export var UI_TEXT = "".concat(NS, "-ui-text");
export var RUNNING_TEXT = "".concat(NS, "-running-text");
export var MONOSPACE_TEXT = "".concat(NS, "-monospace-text");
export var TEXT_LARGE = "".concat(NS, "-text-large");
export var TEXT_SMALL = "".concat(NS, "-text-small");
export var TEXT_MUTED = "".concat(NS, "-text-muted");
export var TEXT_DISABLED = "".concat(NS, "-text-disabled");
export var TEXT_OVERFLOW_ELLIPSIS = "".concat(NS, "-text-overflow-ellipsis");
// textual elements
export var BLOCKQUOTE = "".concat(NS, "-blockquote");
export var CODE = "".concat(NS, "-code");
export var CODE_BLOCK = "".concat(NS, "-code-block");
export var HEADING = "".concat(NS, "-heading");
export var LIST = "".concat(NS, "-list");
export var LIST_UNSTYLED = "".concat(NS, "-list-unstyled");
export var RTL = "".concat(NS, "-rtl");
// components
export var ALERT = "".concat(NS, "-alert");
export var ALERT_BODY = "".concat(ALERT, "-body");
export var ALERT_CONTENTS = "".concat(ALERT, "-contents");
export var ALERT_FOOTER = "".concat(ALERT, "-footer");
export var BREADCRUMB = "".concat(NS, "-breadcrumb");
export var BREADCRUMB_CURRENT = "".concat(BREADCRUMB, "-current");
export var BREADCRUMBS = "".concat(BREADCRUMB, "s");
export var BREADCRUMBS_COLLAPSED = "".concat(BREADCRUMB, "s-collapsed");
export var BUTTON = "".concat(NS, "-button");
export var BUTTON_GROUP = "".concat(BUTTON, "-group");
export var BUTTON_SPINNER = "".concat(BUTTON, "-spinner");
export var BUTTON_TEXT = "".concat(BUTTON, "-text");
export var CALLOUT = "".concat(NS, "-callout");
export var CALLOUT_HAS_BODY_CONTENT = "".concat(CALLOUT, "-has-body-content");
export var CALLOUT_ICON = "".concat(CALLOUT, "-icon");
export var CARD = "".concat(NS, "-card");
export var CONTROL_CARD = "".concat(NS, "-control-card");
export var CONTROL_CARD_LABEL = "".concat(CONTROL_CARD, "-label");
export var SWITCH_CONTROL_CARD = "".concat(NS, "-switch-control-card");
export var CHECKBOX_CONTROL_CARD = "".concat(NS, "-checkbox-control-card");
export var RADIO_CONTROL_CARD = "".concat(NS, "-radio-control-card");
export var CARD_LIST = "".concat(NS, "-card-list");
export var CARD_LIST_BORDERED = "".concat(CARD_LIST, "-bordered");
export var COLLAPSE = "".concat(NS, "-collapse");
export var COLLAPSE_BODY = "".concat(COLLAPSE, "-body");
export var CONTEXT_MENU = "".concat(NS, "-context-menu");
export var CONTEXT_MENU_VIRTUAL_TARGET = "".concat(CONTEXT_MENU, "-virtual-target");
export var CONTEXT_MENU_POPOVER = "".concat(CONTEXT_MENU, "-popover");
export var CONTEXT_MENU_BACKDROP = "".concat(CONTEXT_MENU, "-backdrop");
export var CONTROL_GROUP = "".concat(NS, "-control-group");
export var DIALOG = "".concat(NS, "-dialog");
export var DIALOG_CONTAINER = "".concat(DIALOG, "-container");
export var DIALOG_HEADER = "".concat(DIALOG, "-header");
export var DIALOG_BODY = "".concat(DIALOG, "-body");
export var DIALOG_BODY_SCROLL_CONTAINER = "".concat(DIALOG, "-body-scroll-container");
export var DIALOG_CLOSE_BUTTON = "".concat(DIALOG, "-close-button");
export var DIALOG_FOOTER = "".concat(DIALOG, "-footer");
export var DIALOG_FOOTER_FIXED = "".concat(DIALOG, "-footer-fixed");
export var DIALOG_FOOTER_MAIN_SECTION = "".concat(DIALOG, "-footer-main-section");
export var DIALOG_FOOTER_ACTIONS = "".concat(DIALOG, "-footer-actions");
export var DIALOG_STEP = "".concat(NS, "-dialog-step");
export var DIALOG_STEP_CONTAINER = "".concat(DIALOG_STEP, "-container");
export var DIALOG_STEP_TITLE = "".concat(DIALOG_STEP, "-title");
export var DIALOG_STEP_ICON = "".concat(DIALOG_STEP, "-icon");
export var DIALOG_STEP_VIEWED = "".concat(DIALOG_STEP, "-viewed");
export var DIVIDER = "".concat(NS, "-divider");
export var DRAWER = "".concat(NS, "-drawer");
export var DRAWER_BODY = "".concat(DRAWER, "-body");
export var DRAWER_FOOTER = "".concat(DRAWER, "-footer");
export var DRAWER_HEADER = "".concat(DRAWER, "-header");
export var EDITABLE_TEXT = "".concat(NS, "-editable-text");
export var EDITABLE_TEXT_CONTENT = "".concat(EDITABLE_TEXT, "-content");
export var EDITABLE_TEXT_EDITING = "".concat(EDITABLE_TEXT, "-editing");
export var EDITABLE_TEXT_INPUT = "".concat(EDITABLE_TEXT, "-input");
export var EDITABLE_TEXT_PLACEHOLDER = "".concat(EDITABLE_TEXT, "-placeholder");
export var FLEX_EXPANDER = "".concat(NS, "-flex-expander");
export var HTML_SELECT = "".concat(NS, "-html-select");
/** @deprecated use `<HTMLSelect>` component or `Classes.HTML_SELECT` instead */
export var SELECT = "".concat(NS, "-select");
export var HTML_TABLE = "".concat(NS, "-html-table");
export var HTML_TABLE_BORDERED = "".concat(HTML_TABLE, "-bordered");
export var HTML_TABLE_STRIPED = "".concat(HTML_TABLE, "-striped");
export var INPUT = "".concat(NS, "-input");
export var INPUT_GHOST = "".concat(INPUT, "-ghost");
export var INPUT_GROUP = "".concat(INPUT, "-group");
export var INPUT_LEFT_CONTAINER = "".concat(INPUT, "-left-container");
export var INPUT_ACTION = "".concat(INPUT, "-action");
export var RESIZABLE_INPUT_SPAN = "".concat(NS, "-resizable-input-span");
export var TEXT_AREA = "".concat(NS, "-text-area");
export var TEXT_AREA_AUTO_RESIZE = "".concat(TEXT_AREA, "-auto-resize");
export var CONTROL = "".concat(NS, "-control");
export var CONTROL_INDICATOR = "".concat(CONTROL, "-indicator");
export var CONTROL_INDICATOR_CHILD = "".concat(CONTROL_INDICATOR, "-child");
export var CHECKBOX = "".concat(NS, "-checkbox");
export var RADIO = "".concat(NS, "-radio");
export var RADIO_GROUP = "".concat(NS, "-radio-group");
export var SWITCH = "".concat(NS, "-switch");
export var SWITCH_INNER_TEXT = "".concat(SWITCH, "-inner-text");
export var FILE_INPUT = "".concat(NS, "-file-input");
export var FILE_INPUT_HAS_SELECTION = "".concat(NS, "-file-input-has-selection");
export var FILE_UPLOAD_INPUT = "".concat(NS, "-file-upload-input");
export var FILE_UPLOAD_INPUT_CUSTOM_TEXT = "".concat(NS, "-file-upload-input-custom-text");
export var KEY = "".concat(NS, "-key");
export var KEY_COMBO = "".concat(KEY, "-combo");
export var MODIFIER_KEY = "".concat(NS, "-modifier-key");
export var HOTKEY = "".concat(NS, "-hotkey");
export var HOTKEY_LABEL = "".concat(HOTKEY, "-label");
export var HOTKEY_COLUMN = "".concat(HOTKEY, "-column");
export var HOTKEY_DIALOG = "".concat(HOTKEY, "-dialog");
export var LABEL = "".concat(NS, "-label");
export var FORM_GROUP = "".concat(NS, "-form-group");
export var FORM_CONTENT = "".concat(NS, "-form-content");
export var FORM_HELPER_TEXT = "".concat(NS, "-form-helper-text");
export var FORM_GROUP_SUB_LABEL = "".concat(NS, "-form-group-sub-label");
export var MENU = "".concat(NS, "-menu");
export var MENU_ITEM = "".concat(MENU, "-item");
export var MENU_ITEM_IS_SELECTABLE = "".concat(MENU_ITEM, "-is-selectable");
export var MENU_ITEM_SELECTED_ICON = "".concat(MENU_ITEM, "-selected-icon");
export var MENU_ITEM_ICON = "".concat(MENU_ITEM, "-icon");
export var MENU_ITEM_LABEL = "".concat(MENU_ITEM, "-label");
export var MENU_SUBMENU = "".concat(NS, "-submenu");
export var MENU_SUBMENU_ICON = "".concat(MENU_SUBMENU, "-icon");
export var MENU_DIVIDER = "".concat(MENU, "-divider");
export var MENU_HEADER = "".concat(MENU, "-header");
export var MULTISTEP_DIALOG = "".concat(NS, "-multistep-dialog");
export var MULTISTEP_DIALOG_PANELS = "".concat(MULTISTEP_DIALOG, "-panels");
export var MULTISTEP_DIALOG_LEFT_PANEL = "".concat(MULTISTEP_DIALOG, "-left-panel");
export var MULTISTEP_DIALOG_RIGHT_PANEL = "".concat(MULTISTEP_DIALOG, "-right-panel");
export var MULTISTEP_DIALOG_NAV_TOP = "".concat(MULTISTEP_DIALOG, "-nav-top");
export var MULTISTEP_DIALOG_NAV_RIGHT = "".concat(MULTISTEP_DIALOG, "-nav-right");
export var SECTION = "".concat(NS, "-section");
export var SECTION_COLLAPSED = "".concat(SECTION, "-collapsed");
export var SECTION_HEADER = "".concat(SECTION, "-header");
export var SECTION_HEADER_LEFT = "".concat(SECTION_HEADER, "-left");
export var SECTION_HEADER_TITLE = "".concat(SECTION_HEADER, "-title");
export var SECTION_HEADER_SUB_TITLE = "".concat(SECTION_HEADER, "-sub-title");
export var SECTION_HEADER_DIVIDER = "".concat(SECTION_HEADER, "-divider");
export var SECTION_HEADER_TABS = "".concat(SECTION_HEADER, "-tabs");
export var SECTION_HEADER_RIGHT = "".concat(SECTION_HEADER, "-right");
export var SECTION_CARD = "".concat(SECTION, "-card");
export var NAVBAR = "".concat(NS, "-navbar");
export var NAVBAR_GROUP = "".concat(NAVBAR, "-group");
export var NAVBAR_HEADING = "".concat(NAVBAR, "-heading");
export var NAVBAR_DIVIDER = "".concat(NAVBAR, "-divider");
export var NON_IDEAL_STATE = "".concat(NS, "-non-ideal-state");
export var NON_IDEAL_STATE_VISUAL = "".concat(NON_IDEAL_STATE, "-visual");
export var NON_IDEAL_STATE_TEXT = "".concat(NON_IDEAL_STATE, "-text");
export var NUMERIC_INPUT = "".concat(NS, "-numeric-input");
export var OVERFLOW_LIST = "".concat(NS, "-overflow-list");
export var OVERFLOW_LIST_SPACER = "".concat(OVERFLOW_LIST, "-spacer");
export var OVERLAY = "".concat(NS, "-overlay");
export var OVERLAY_BACKDROP = "".concat(OVERLAY, "-backdrop");
export var OVERLAY_CONTAINER = "".concat(OVERLAY, "-container");
export var OVERLAY_CONTENT = "".concat(OVERLAY, "-content");
export var OVERLAY_INLINE = "".concat(OVERLAY, "-inline");
export var OVERLAY_OPEN = "".concat(OVERLAY, "-open");
export var OVERLAY_SCROLL_CONTAINER = "".concat(OVERLAY, "-scroll-container");
export var OVERLAY_START_FOCUS_TRAP = "".concat(OVERLAY, "-start-focus-trap");
export var OVERLAY_END_FOCUS_TRAP = "".concat(OVERLAY, "-end-focus-trap");
export var PANEL_STACK = "".concat(NS, "-panel-stack");
export var PANEL_STACK_HEADER = "".concat(PANEL_STACK, "-header");
export var PANEL_STACK_HEADER_BACK = "".concat(PANEL_STACK, "-header-back");
export var PANEL_STACK_VIEW = "".concat(PANEL_STACK, "-view");
export var PANEL_STACK2 = "".concat(NS, "-panel-stack2");
export var PANEL_STACK2_HEADER = "".concat(PANEL_STACK, "-header");
export var PANEL_STACK2_HEADER_BACK = "".concat(PANEL_STACK, "-header-back");
export var PANEL_STACK2_VIEW = "".concat(PANEL_STACK, "-view");
export var POPOVER = "".concat(NS, "-popover");
export var POPOVER_ARROW = "".concat(POPOVER, "-arrow");
export var POPOVER_BACKDROP = "".concat(POPOVER, "-backdrop");
export var POPOVER_CAPTURING_DISMISS = "".concat(POPOVER, "-capturing-dismiss");
export var POPOVER_CONTENT = "".concat(POPOVER, "-content");
export var POPOVER_CONTENT_PLACEMENT = "".concat(POPOVER, "-placement");
export var POPOVER_CONTENT_SIZING = "".concat(POPOVER_CONTENT, "-sizing");
export var POPOVER_DISMISS = "".concat(POPOVER, "-dismiss");
export var POPOVER_DISMISS_OVERRIDE = "".concat(POPOVER_DISMISS, "-override");
export var POPOVER_MATCH_TARGET_WIDTH = "".concat(POPOVER, "-match-target-width");
export var POPOVER_OPEN = "".concat(POPOVER, "-open");
export var POPOVER_POPPER_ESCAPED = "".concat(POPOVER, "-popper-escaped");
export var POPOVER_REFERENCE_HIDDEN = "".concat(POPOVER, "-reference-hidden");
export var POPOVER_TARGET = "".concat(POPOVER, "-target");
export var POPOVER_TRANSITION_CONTAINER = "".concat(POPOVER, "-transition-container");
/** @deprecated, no longer used in Blueprint v5.x */
export var POPOVER_WRAPPER = "".concat(POPOVER, "-wrapper");
export var PROGRESS_BAR = "".concat(NS, "-progress-bar");
export var PROGRESS_METER = "".concat(NS, "-progress-meter");
export var PROGRESS_NO_STRIPES = "".concat(NS, "-no-stripes");
export var PROGRESS_NO_ANIMATION = "".concat(NS, "-no-animation");
export var PORTAL = "".concat(NS, "-portal");
export var SKELETON = "".concat(NS, "-skeleton");
export var SLIDER = "".concat(NS, "-slider");
export var SLIDER_AXIS = "".concat(SLIDER, "-axis");
export var SLIDER_HANDLE = "".concat(SLIDER, "-handle");
export var SLIDER_LABEL = "".concat(SLIDER, "-label");
export var SLIDER_TRACK = "".concat(SLIDER, "-track");
export var SLIDER_PROGRESS = "".concat(SLIDER, "-progress");
export var START = "".concat(NS, "-start");
export var END = "".concat(NS, "-end");
export var SPINNER = "".concat(NS, "-spinner");
export var SPINNER_ANIMATION = "".concat(SPINNER, "-animation");
export var SPINNER_HEAD = "".concat(SPINNER, "-head");
export var SPINNER_NO_SPIN = "".concat(NS, "-no-spin");
export var SPINNER_TRACK = "".concat(SPINNER, "-track");
export var SEGMENTED_CONTROL = "".concat(NS, "-segmented-control");
export var TAB = "".concat(NS, "-tab");
export var TAB_ICON = "".concat(TAB, "-icon");
export var TAB_TAG = "".concat(TAB, "-tag");
export var TAB_INDICATOR = "".concat(TAB, "-indicator");
export var TAB_INDICATOR_WRAPPER = "".concat(TAB_INDICATOR, "-wrapper");
export var TAB_LIST = "".concat(TAB, "-list");
export var TAB_PANEL = "".concat(TAB, "-panel");
export var TABS = "".concat(TAB, "s");
export var TAG = "".concat(NS, "-tag");
export var TAG_REMOVE = "".concat(TAG, "-remove");
export var TAG_INPUT = "".concat(NS, "-tag-input");
export var TAG_INPUT_ICON = "".concat(TAG_INPUT, "-icon");
export var TAG_INPUT_VALUES = "".concat(TAG_INPUT, "-values");
export var TOAST = "".concat(NS, "-toast");
export var TOAST_CONTAINER = "".concat(TOAST, "-container");
export var TOAST_MESSAGE = "".concat(TOAST, "-message");
export var TOOLTIP = "".concat(NS, "-tooltip");
export var TOOLTIP_INDICATOR = "".concat(TOOLTIP, "-indicator");
export var TREE = "".concat(NS, "-tree");
export var TREE_NODE = "".concat(NS, "-tree-node");
export var TREE_NODE_CARET = "".concat(TREE_NODE, "-caret");
export var TREE_NODE_CARET_CLOSED = "".concat(TREE_NODE_CARET, "-closed");
export var TREE_NODE_CARET_NONE = "".concat(TREE_NODE_CARET, "-none");
export var TREE_NODE_CARET_OPEN = "".concat(TREE_NODE_CARET, "-open");
export var TREE_NODE_CONTENT = "".concat(TREE_NODE, "-content");
export var TREE_NODE_EXPANDED = "".concat(TREE_NODE, "-expanded");
export var TREE_NODE_ICON = "".concat(TREE_NODE, "-icon");
export var TREE_NODE_LABEL = "".concat(TREE_NODE, "-label");
export var TREE_NODE_LIST = "".concat(TREE_NODE, "-list");
export var TREE_NODE_SECONDARY_LABEL = "".concat(TREE_NODE, "-secondary-label");
export var TREE_NODE_SELECTED = "".concat(TREE_NODE, "-selected");
export var TREE_ROOT = "".concat(NS, "-tree-root");
export var ICON = "".concat(NS, "-icon");
export var ICON_STANDARD = "".concat(ICON, "-standard");
export var ICON_LARGE = "".concat(ICON, "-large");
/**
 * Returns the namespace prefix for all Blueprint CSS classes.
 * Customize this namespace at build time by defining it with `webpack.DefinePlugin`.
 */
export function getClassNamespace() {
    return NS;
}
/** Return CSS class for alignment. */
export function alignmentClass(alignment) {
    switch (alignment) {
        case Alignment.LEFT:
            return ALIGN_LEFT;
        case Alignment.RIGHT:
            return ALIGN_RIGHT;
        default:
            return undefined;
    }
}
export function elevationClass(elevation) {
    if (elevation === undefined) {
        return undefined;
    }
    return "".concat(NS, "-elevation-").concat(elevation);
}
export function iconClass(iconName) {
    if (iconName == null) {
        return undefined;
    }
    return iconName.indexOf("".concat(NS, "-icon-")) === 0 ? iconName : "".concat(NS, "-icon-").concat(iconName);
}
export function intentClass(intent) {
    if (intent == null || intent === Intent.NONE) {
        return undefined;
    }
    return "".concat(NS, "-intent-").concat(intent.toLowerCase());
}
export function positionClass(position) {
    if (position === undefined) {
        return undefined;
    }
    return "".concat(NS, "-position-").concat(position);
}
//# sourceMappingURL=classes.js.map

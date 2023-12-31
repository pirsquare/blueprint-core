"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIST = exports.HEADING = exports.CODE_BLOCK = exports.CODE = exports.BLOCKQUOTE = exports.TEXT_OVERFLOW_ELLIPSIS = exports.TEXT_DISABLED = exports.TEXT_MUTED = exports.TEXT_SMALL = exports.TEXT_LARGE = exports.MONOSPACE_TEXT = exports.RUNNING_TEXT = exports.UI_TEXT = exports.FOCUS_STYLE_MANAGER_IGNORE = exports.FOCUS_DISABLED = exports.INTENT_DANGER = exports.INTENT_WARNING = exports.INTENT_SUCCESS = exports.INTENT_PRIMARY = exports.ELEVATION_4 = exports.ELEVATION_3 = exports.ELEVATION_2 = exports.ELEVATION_1 = exports.ELEVATION_0 = exports.POSITION_RIGHT = exports.POSITION_LEFT = exports.POSITION_BOTTOM = exports.POSITION_TOP = exports.VERTICAL = exports.SMALL = exports.SELECTED = exports.ROUND = exports.READ_ONLY = exports.MULTILINE = exports.PADDED = exports.OUTLINED = exports.MINIMAL = exports.LOADING = exports.LARGE = exports.INTERACTIVE = exports.INLINE = exports.FIXED_TOP = exports.FIXED = exports.FILL = exports.DISABLED = exports.DARK = exports.COMPACT = exports.ALIGN_RIGHT = exports.ALIGN_LEFT = exports.ACTIVE = void 0;
exports.DRAWER_BODY = exports.DRAWER = exports.DIVIDER = exports.DIALOG_STEP_VIEWED = exports.DIALOG_STEP_ICON = exports.DIALOG_STEP_TITLE = exports.DIALOG_STEP_CONTAINER = exports.DIALOG_STEP = exports.DIALOG_FOOTER_ACTIONS = exports.DIALOG_FOOTER_MAIN_SECTION = exports.DIALOG_FOOTER_FIXED = exports.DIALOG_FOOTER = exports.DIALOG_CLOSE_BUTTON = exports.DIALOG_BODY_SCROLL_CONTAINER = exports.DIALOG_BODY = exports.DIALOG_HEADER = exports.DIALOG_CONTAINER = exports.DIALOG = exports.CONTROL_GROUP = exports.CONTEXT_MENU_BACKDROP = exports.CONTEXT_MENU_POPOVER = exports.CONTEXT_MENU_VIRTUAL_TARGET = exports.CONTEXT_MENU = exports.COLLAPSE_BODY = exports.COLLAPSE = exports.CARD_LIST_BORDERED = exports.CARD_LIST = exports.RADIO_CONTROL_CARD = exports.CHECKBOX_CONTROL_CARD = exports.SWITCH_CONTROL_CARD = exports.CONTROL_CARD_LABEL = exports.CONTROL_CARD = exports.CARD = exports.CALLOUT_ICON = exports.CALLOUT_HAS_BODY_CONTENT = exports.CALLOUT = exports.BUTTON_TEXT = exports.BUTTON_SPINNER = exports.BUTTON_GROUP = exports.BUTTON = exports.BREADCRUMBS_COLLAPSED = exports.BREADCRUMBS = exports.BREADCRUMB_CURRENT = exports.BREADCRUMB = exports.ALERT_FOOTER = exports.ALERT_CONTENTS = exports.ALERT_BODY = exports.ALERT = exports.RTL = exports.LIST_UNSTYLED = void 0;
exports.MENU_ITEM_ICON = exports.MENU_ITEM_SELECTED_ICON = exports.MENU_ITEM_IS_SELECTABLE = exports.MENU_ITEM = exports.MENU = exports.FORM_GROUP_SUB_LABEL = exports.FORM_HELPER_TEXT = exports.FORM_CONTENT = exports.FORM_GROUP = exports.LABEL = exports.HOTKEY_DIALOG = exports.HOTKEY_COLUMN = exports.HOTKEY_LABEL = exports.HOTKEY = exports.MODIFIER_KEY = exports.KEY_COMBO = exports.KEY = exports.FILE_UPLOAD_INPUT_CUSTOM_TEXT = exports.FILE_UPLOAD_INPUT = exports.FILE_INPUT_HAS_SELECTION = exports.FILE_INPUT = exports.SWITCH_INNER_TEXT = exports.SWITCH = exports.RADIO_GROUP = exports.RADIO = exports.CHECKBOX = exports.CONTROL_INDICATOR_CHILD = exports.CONTROL_INDICATOR = exports.CONTROL = exports.TEXT_AREA_AUTO_RESIZE = exports.TEXT_AREA = exports.RESIZABLE_INPUT_SPAN = exports.INPUT_ACTION = exports.INPUT_LEFT_CONTAINER = exports.INPUT_GROUP = exports.INPUT_GHOST = exports.INPUT = exports.HTML_TABLE_STRIPED = exports.HTML_TABLE_BORDERED = exports.HTML_TABLE = exports.SELECT = exports.HTML_SELECT = exports.FLEX_EXPANDER = exports.EDITABLE_TEXT_PLACEHOLDER = exports.EDITABLE_TEXT_INPUT = exports.EDITABLE_TEXT_EDITING = exports.EDITABLE_TEXT_CONTENT = exports.EDITABLE_TEXT = exports.DRAWER_HEADER = exports.DRAWER_FOOTER = void 0;
exports.POPOVER_ARROW = exports.POPOVER = exports.PANEL_STACK2_VIEW = exports.PANEL_STACK2_HEADER_BACK = exports.PANEL_STACK2_HEADER = exports.PANEL_STACK2 = exports.PANEL_STACK_VIEW = exports.PANEL_STACK_HEADER_BACK = exports.PANEL_STACK_HEADER = exports.PANEL_STACK = exports.OVERLAY_END_FOCUS_TRAP = exports.OVERLAY_START_FOCUS_TRAP = exports.OVERLAY_SCROLL_CONTAINER = exports.OVERLAY_OPEN = exports.OVERLAY_INLINE = exports.OVERLAY_CONTENT = exports.OVERLAY_CONTAINER = exports.OVERLAY_BACKDROP = exports.OVERLAY = exports.OVERFLOW_LIST_SPACER = exports.OVERFLOW_LIST = exports.NUMERIC_INPUT = exports.NON_IDEAL_STATE_TEXT = exports.NON_IDEAL_STATE_VISUAL = exports.NON_IDEAL_STATE = exports.NAVBAR_DIVIDER = exports.NAVBAR_HEADING = exports.NAVBAR_GROUP = exports.NAVBAR = exports.SECTION_CARD = exports.SECTION_HEADER_RIGHT = exports.SECTION_HEADER_TABS = exports.SECTION_HEADER_DIVIDER = exports.SECTION_HEADER_SUB_TITLE = exports.SECTION_HEADER_TITLE = exports.SECTION_HEADER_LEFT = exports.SECTION_HEADER = exports.SECTION_COLLAPSED = exports.SECTION = exports.MULTISTEP_DIALOG_NAV_RIGHT = exports.MULTISTEP_DIALOG_NAV_TOP = exports.MULTISTEP_DIALOG_RIGHT_PANEL = exports.MULTISTEP_DIALOG_LEFT_PANEL = exports.MULTISTEP_DIALOG_PANELS = exports.MULTISTEP_DIALOG = exports.MENU_HEADER = exports.MENU_DIVIDER = exports.MENU_SUBMENU_ICON = exports.MENU_SUBMENU = exports.MENU_ITEM_LABEL = void 0;
exports.TOAST_MESSAGE = exports.TOAST_CONTAINER = exports.TOAST = exports.TAG_INPUT_VALUES = exports.TAG_INPUT_ICON = exports.TAG_INPUT = exports.TAG_REMOVE = exports.TAG = exports.TABS = exports.TAB_PANEL = exports.TAB_LIST = exports.TAB_INDICATOR_WRAPPER = exports.TAB_INDICATOR = exports.TAB_TAG = exports.TAB_ICON = exports.TAB = exports.SEGMENTED_CONTROL = exports.SPINNER_TRACK = exports.SPINNER_NO_SPIN = exports.SPINNER_HEAD = exports.SPINNER_ANIMATION = exports.SPINNER = exports.END = exports.START = exports.SLIDER_PROGRESS = exports.SLIDER_TRACK = exports.SLIDER_LABEL = exports.SLIDER_HANDLE = exports.SLIDER_AXIS = exports.SLIDER = exports.SKELETON = exports.PORTAL = exports.PROGRESS_NO_ANIMATION = exports.PROGRESS_NO_STRIPES = exports.PROGRESS_METER = exports.PROGRESS_BAR = exports.POPOVER_WRAPPER = exports.POPOVER_TRANSITION_CONTAINER = exports.POPOVER_TARGET = exports.POPOVER_REFERENCE_HIDDEN = exports.POPOVER_POPPER_ESCAPED = exports.POPOVER_OPEN = exports.POPOVER_MATCH_TARGET_WIDTH = exports.POPOVER_DISMISS_OVERRIDE = exports.POPOVER_DISMISS = exports.POPOVER_CONTENT_SIZING = exports.POPOVER_CONTENT_PLACEMENT = exports.POPOVER_CONTENT = exports.POPOVER_CAPTURING_DISMISS = exports.POPOVER_BACKDROP = void 0;
exports.positionClass = exports.intentClass = exports.iconClass = exports.elevationClass = exports.alignmentClass = exports.getClassNamespace = exports.ICON_LARGE = exports.ICON_STANDARD = exports.ICON = exports.TREE_ROOT = exports.TREE_NODE_SELECTED = exports.TREE_NODE_SECONDARY_LABEL = exports.TREE_NODE_LIST = exports.TREE_NODE_LABEL = exports.TREE_NODE_ICON = exports.TREE_NODE_EXPANDED = exports.TREE_NODE_CONTENT = exports.TREE_NODE_CARET_OPEN = exports.TREE_NODE_CARET_NONE = exports.TREE_NODE_CARET_CLOSED = exports.TREE_NODE_CARET = exports.TREE_NODE = exports.TREE = exports.TOOLTIP_INDICATOR = exports.TOOLTIP = void 0;
var alignment_1 = require("./alignment");
var elevation_1 = require("./elevation");
var intent_1 = require("./intent");
var position_1 = require("./position");
var NS = "bp";
if (typeof BLUEPRINT_NAMESPACE !== "undefined") {
    NS = BLUEPRINT_NAMESPACE;
}
else if (typeof REACT_APP_BLUEPRINT_NAMESPACE !== "undefined") {
    NS = REACT_APP_BLUEPRINT_NAMESPACE;
}
// modifiers
exports.ACTIVE = "".concat(NS, "-active");
exports.ALIGN_LEFT = "".concat(NS, "-align-left");
exports.ALIGN_RIGHT = "".concat(NS, "-align-right");
exports.COMPACT = "".concat(NS, "-compact");
exports.DARK = "".concat(NS, "-dark");
exports.DISABLED = "".concat(NS, "-disabled");
exports.FILL = "".concat(NS, "-fill");
exports.FIXED = "".concat(NS, "-fixed");
exports.FIXED_TOP = "".concat(NS, "-fixed-top");
exports.INLINE = "".concat(NS, "-inline");
exports.INTERACTIVE = "".concat(NS, "-interactive");
exports.LARGE = "".concat(NS, "-large");
exports.LOADING = "".concat(NS, "-loading");
exports.MINIMAL = "".concat(NS, "-minimal");
exports.OUTLINED = "".concat(NS, "-outlined");
exports.PADDED = "".concat(NS, "-padded");
exports.MULTILINE = "".concat(NS, "-multiline");
exports.READ_ONLY = "".concat(NS, "-read-only");
exports.ROUND = "".concat(NS, "-round");
exports.SELECTED = "".concat(NS, "-selected");
exports.SMALL = "".concat(NS, "-small");
exports.VERTICAL = "".concat(NS, "-vertical");
exports.POSITION_TOP = positionClass(position_1.Position.TOP);
exports.POSITION_BOTTOM = positionClass(position_1.Position.BOTTOM);
exports.POSITION_LEFT = positionClass(position_1.Position.LEFT);
exports.POSITION_RIGHT = positionClass(position_1.Position.RIGHT);
exports.ELEVATION_0 = elevationClass(elevation_1.Elevation.ZERO);
exports.ELEVATION_1 = elevationClass(elevation_1.Elevation.ONE);
exports.ELEVATION_2 = elevationClass(elevation_1.Elevation.TWO);
exports.ELEVATION_3 = elevationClass(elevation_1.Elevation.THREE);
exports.ELEVATION_4 = elevationClass(elevation_1.Elevation.FOUR);
exports.INTENT_PRIMARY = intentClass(intent_1.Intent.PRIMARY);
exports.INTENT_SUCCESS = intentClass(intent_1.Intent.SUCCESS);
exports.INTENT_WARNING = intentClass(intent_1.Intent.WARNING);
exports.INTENT_DANGER = intentClass(intent_1.Intent.DANGER);
exports.FOCUS_DISABLED = "".concat(NS, "-focus-disabled");
exports.FOCUS_STYLE_MANAGER_IGNORE = "".concat(NS, "-focus-style-manager-ignore");
// text utilities
exports.UI_TEXT = "".concat(NS, "-ui-text");
exports.RUNNING_TEXT = "".concat(NS, "-running-text");
exports.MONOSPACE_TEXT = "".concat(NS, "-monospace-text");
exports.TEXT_LARGE = "".concat(NS, "-text-large");
exports.TEXT_SMALL = "".concat(NS, "-text-small");
exports.TEXT_MUTED = "".concat(NS, "-text-muted");
exports.TEXT_DISABLED = "".concat(NS, "-text-disabled");
exports.TEXT_OVERFLOW_ELLIPSIS = "".concat(NS, "-text-overflow-ellipsis");
// textual elements
exports.BLOCKQUOTE = "".concat(NS, "-blockquote");
exports.CODE = "".concat(NS, "-code");
exports.CODE_BLOCK = "".concat(NS, "-code-block");
exports.HEADING = "".concat(NS, "-heading");
exports.LIST = "".concat(NS, "-list");
exports.LIST_UNSTYLED = "".concat(NS, "-list-unstyled");
exports.RTL = "".concat(NS, "-rtl");
// components
exports.ALERT = "".concat(NS, "-alert");
exports.ALERT_BODY = "".concat(exports.ALERT, "-body");
exports.ALERT_CONTENTS = "".concat(exports.ALERT, "-contents");
exports.ALERT_FOOTER = "".concat(exports.ALERT, "-footer");
exports.BREADCRUMB = "".concat(NS, "-breadcrumb");
exports.BREADCRUMB_CURRENT = "".concat(exports.BREADCRUMB, "-current");
exports.BREADCRUMBS = "".concat(exports.BREADCRUMB, "s");
exports.BREADCRUMBS_COLLAPSED = "".concat(exports.BREADCRUMB, "s-collapsed");
exports.BUTTON = "".concat(NS, "-button");
exports.BUTTON_GROUP = "".concat(exports.BUTTON, "-group");
exports.BUTTON_SPINNER = "".concat(exports.BUTTON, "-spinner");
exports.BUTTON_TEXT = "".concat(exports.BUTTON, "-text");
exports.CALLOUT = "".concat(NS, "-callout");
exports.CALLOUT_HAS_BODY_CONTENT = "".concat(exports.CALLOUT, "-has-body-content");
exports.CALLOUT_ICON = "".concat(exports.CALLOUT, "-icon");
exports.CARD = "".concat(NS, "-card");
exports.CONTROL_CARD = "".concat(NS, "-control-card");
exports.CONTROL_CARD_LABEL = "".concat(exports.CONTROL_CARD, "-label");
exports.SWITCH_CONTROL_CARD = "".concat(NS, "-switch-control-card");
exports.CHECKBOX_CONTROL_CARD = "".concat(NS, "-checkbox-control-card");
exports.RADIO_CONTROL_CARD = "".concat(NS, "-radio-control-card");
exports.CARD_LIST = "".concat(NS, "-card-list");
exports.CARD_LIST_BORDERED = "".concat(exports.CARD_LIST, "-bordered");
exports.COLLAPSE = "".concat(NS, "-collapse");
exports.COLLAPSE_BODY = "".concat(exports.COLLAPSE, "-body");
exports.CONTEXT_MENU = "".concat(NS, "-context-menu");
exports.CONTEXT_MENU_VIRTUAL_TARGET = "".concat(exports.CONTEXT_MENU, "-virtual-target");
exports.CONTEXT_MENU_POPOVER = "".concat(exports.CONTEXT_MENU, "-popover");
exports.CONTEXT_MENU_BACKDROP = "".concat(exports.CONTEXT_MENU, "-backdrop");
exports.CONTROL_GROUP = "".concat(NS, "-control-group");
exports.DIALOG = "".concat(NS, "-dialog");
exports.DIALOG_CONTAINER = "".concat(exports.DIALOG, "-container");
exports.DIALOG_HEADER = "".concat(exports.DIALOG, "-header");
exports.DIALOG_BODY = "".concat(exports.DIALOG, "-body");
exports.DIALOG_BODY_SCROLL_CONTAINER = "".concat(exports.DIALOG, "-body-scroll-container");
exports.DIALOG_CLOSE_BUTTON = "".concat(exports.DIALOG, "-close-button");
exports.DIALOG_FOOTER = "".concat(exports.DIALOG, "-footer");
exports.DIALOG_FOOTER_FIXED = "".concat(exports.DIALOG, "-footer-fixed");
exports.DIALOG_FOOTER_MAIN_SECTION = "".concat(exports.DIALOG, "-footer-main-section");
exports.DIALOG_FOOTER_ACTIONS = "".concat(exports.DIALOG, "-footer-actions");
exports.DIALOG_STEP = "".concat(NS, "-dialog-step");
exports.DIALOG_STEP_CONTAINER = "".concat(exports.DIALOG_STEP, "-container");
exports.DIALOG_STEP_TITLE = "".concat(exports.DIALOG_STEP, "-title");
exports.DIALOG_STEP_ICON = "".concat(exports.DIALOG_STEP, "-icon");
exports.DIALOG_STEP_VIEWED = "".concat(exports.DIALOG_STEP, "-viewed");
exports.DIVIDER = "".concat(NS, "-divider");
exports.DRAWER = "".concat(NS, "-drawer");
exports.DRAWER_BODY = "".concat(exports.DRAWER, "-body");
exports.DRAWER_FOOTER = "".concat(exports.DRAWER, "-footer");
exports.DRAWER_HEADER = "".concat(exports.DRAWER, "-header");
exports.EDITABLE_TEXT = "".concat(NS, "-editable-text");
exports.EDITABLE_TEXT_CONTENT = "".concat(exports.EDITABLE_TEXT, "-content");
exports.EDITABLE_TEXT_EDITING = "".concat(exports.EDITABLE_TEXT, "-editing");
exports.EDITABLE_TEXT_INPUT = "".concat(exports.EDITABLE_TEXT, "-input");
exports.EDITABLE_TEXT_PLACEHOLDER = "".concat(exports.EDITABLE_TEXT, "-placeholder");
exports.FLEX_EXPANDER = "".concat(NS, "-flex-expander");
exports.HTML_SELECT = "".concat(NS, "-html-select");
/** @deprecated use `<HTMLSelect>` component or `Classes.HTML_SELECT` instead */
exports.SELECT = "".concat(NS, "-select");
exports.HTML_TABLE = "".concat(NS, "-html-table");
exports.HTML_TABLE_BORDERED = "".concat(exports.HTML_TABLE, "-bordered");
exports.HTML_TABLE_STRIPED = "".concat(exports.HTML_TABLE, "-striped");
exports.INPUT = "".concat(NS, "-input");
exports.INPUT_GHOST = "".concat(exports.INPUT, "-ghost");
exports.INPUT_GROUP = "".concat(exports.INPUT, "-group");
exports.INPUT_LEFT_CONTAINER = "".concat(exports.INPUT, "-left-container");
exports.INPUT_ACTION = "".concat(exports.INPUT, "-action");
exports.RESIZABLE_INPUT_SPAN = "".concat(NS, "-resizable-input-span");
exports.TEXT_AREA = "".concat(NS, "-text-area");
exports.TEXT_AREA_AUTO_RESIZE = "".concat(exports.TEXT_AREA, "-auto-resize");
exports.CONTROL = "".concat(NS, "-control");
exports.CONTROL_INDICATOR = "".concat(exports.CONTROL, "-indicator");
exports.CONTROL_INDICATOR_CHILD = "".concat(exports.CONTROL_INDICATOR, "-child");
exports.CHECKBOX = "".concat(NS, "-checkbox");
exports.RADIO = "".concat(NS, "-radio");
exports.RADIO_GROUP = "".concat(NS, "-radio-group");
exports.SWITCH = "".concat(NS, "-switch");
exports.SWITCH_INNER_TEXT = "".concat(exports.SWITCH, "-inner-text");
exports.FILE_INPUT = "".concat(NS, "-file-input");
exports.FILE_INPUT_HAS_SELECTION = "".concat(NS, "-file-input-has-selection");
exports.FILE_UPLOAD_INPUT = "".concat(NS, "-file-upload-input");
exports.FILE_UPLOAD_INPUT_CUSTOM_TEXT = "".concat(NS, "-file-upload-input-custom-text");
exports.KEY = "".concat(NS, "-key");
exports.KEY_COMBO = "".concat(exports.KEY, "-combo");
exports.MODIFIER_KEY = "".concat(NS, "-modifier-key");
exports.HOTKEY = "".concat(NS, "-hotkey");
exports.HOTKEY_LABEL = "".concat(exports.HOTKEY, "-label");
exports.HOTKEY_COLUMN = "".concat(exports.HOTKEY, "-column");
exports.HOTKEY_DIALOG = "".concat(exports.HOTKEY, "-dialog");
exports.LABEL = "".concat(NS, "-label");
exports.FORM_GROUP = "".concat(NS, "-form-group");
exports.FORM_CONTENT = "".concat(NS, "-form-content");
exports.FORM_HELPER_TEXT = "".concat(NS, "-form-helper-text");
exports.FORM_GROUP_SUB_LABEL = "".concat(NS, "-form-group-sub-label");
exports.MENU = "".concat(NS, "-menu");
exports.MENU_ITEM = "".concat(exports.MENU, "-item");
exports.MENU_ITEM_IS_SELECTABLE = "".concat(exports.MENU_ITEM, "-is-selectable");
exports.MENU_ITEM_SELECTED_ICON = "".concat(exports.MENU_ITEM, "-selected-icon");
exports.MENU_ITEM_ICON = "".concat(exports.MENU_ITEM, "-icon");
exports.MENU_ITEM_LABEL = "".concat(exports.MENU_ITEM, "-label");
exports.MENU_SUBMENU = "".concat(NS, "-submenu");
exports.MENU_SUBMENU_ICON = "".concat(exports.MENU_SUBMENU, "-icon");
exports.MENU_DIVIDER = "".concat(exports.MENU, "-divider");
exports.MENU_HEADER = "".concat(exports.MENU, "-header");
exports.MULTISTEP_DIALOG = "".concat(NS, "-multistep-dialog");
exports.MULTISTEP_DIALOG_PANELS = "".concat(exports.MULTISTEP_DIALOG, "-panels");
exports.MULTISTEP_DIALOG_LEFT_PANEL = "".concat(exports.MULTISTEP_DIALOG, "-left-panel");
exports.MULTISTEP_DIALOG_RIGHT_PANEL = "".concat(exports.MULTISTEP_DIALOG, "-right-panel");
exports.MULTISTEP_DIALOG_NAV_TOP = "".concat(exports.MULTISTEP_DIALOG, "-nav-top");
exports.MULTISTEP_DIALOG_NAV_RIGHT = "".concat(exports.MULTISTEP_DIALOG, "-nav-right");
exports.SECTION = "".concat(NS, "-section");
exports.SECTION_COLLAPSED = "".concat(exports.SECTION, "-collapsed");
exports.SECTION_HEADER = "".concat(exports.SECTION, "-header");
exports.SECTION_HEADER_LEFT = "".concat(exports.SECTION_HEADER, "-left");
exports.SECTION_HEADER_TITLE = "".concat(exports.SECTION_HEADER, "-title");
exports.SECTION_HEADER_SUB_TITLE = "".concat(exports.SECTION_HEADER, "-sub-title");
exports.SECTION_HEADER_DIVIDER = "".concat(exports.SECTION_HEADER, "-divider");
exports.SECTION_HEADER_TABS = "".concat(exports.SECTION_HEADER, "-tabs");
exports.SECTION_HEADER_RIGHT = "".concat(exports.SECTION_HEADER, "-right");
exports.SECTION_CARD = "".concat(exports.SECTION, "-card");
exports.NAVBAR = "".concat(NS, "-navbar");
exports.NAVBAR_GROUP = "".concat(exports.NAVBAR, "-group");
exports.NAVBAR_HEADING = "".concat(exports.NAVBAR, "-heading");
exports.NAVBAR_DIVIDER = "".concat(exports.NAVBAR, "-divider");
exports.NON_IDEAL_STATE = "".concat(NS, "-non-ideal-state");
exports.NON_IDEAL_STATE_VISUAL = "".concat(exports.NON_IDEAL_STATE, "-visual");
exports.NON_IDEAL_STATE_TEXT = "".concat(exports.NON_IDEAL_STATE, "-text");
exports.NUMERIC_INPUT = "".concat(NS, "-numeric-input");
exports.OVERFLOW_LIST = "".concat(NS, "-overflow-list");
exports.OVERFLOW_LIST_SPACER = "".concat(exports.OVERFLOW_LIST, "-spacer");
exports.OVERLAY = "".concat(NS, "-overlay");
exports.OVERLAY_BACKDROP = "".concat(exports.OVERLAY, "-backdrop");
exports.OVERLAY_CONTAINER = "".concat(exports.OVERLAY, "-container");
exports.OVERLAY_CONTENT = "".concat(exports.OVERLAY, "-content");
exports.OVERLAY_INLINE = "".concat(exports.OVERLAY, "-inline");
exports.OVERLAY_OPEN = "".concat(exports.OVERLAY, "-open");
exports.OVERLAY_SCROLL_CONTAINER = "".concat(exports.OVERLAY, "-scroll-container");
exports.OVERLAY_START_FOCUS_TRAP = "".concat(exports.OVERLAY, "-start-focus-trap");
exports.OVERLAY_END_FOCUS_TRAP = "".concat(exports.OVERLAY, "-end-focus-trap");
exports.PANEL_STACK = "".concat(NS, "-panel-stack");
exports.PANEL_STACK_HEADER = "".concat(exports.PANEL_STACK, "-header");
exports.PANEL_STACK_HEADER_BACK = "".concat(exports.PANEL_STACK, "-header-back");
exports.PANEL_STACK_VIEW = "".concat(exports.PANEL_STACK, "-view");
exports.PANEL_STACK2 = "".concat(NS, "-panel-stack2");
exports.PANEL_STACK2_HEADER = "".concat(exports.PANEL_STACK, "-header");
exports.PANEL_STACK2_HEADER_BACK = "".concat(exports.PANEL_STACK, "-header-back");
exports.PANEL_STACK2_VIEW = "".concat(exports.PANEL_STACK, "-view");
exports.POPOVER = "".concat(NS, "-popover");
exports.POPOVER_ARROW = "".concat(exports.POPOVER, "-arrow");
exports.POPOVER_BACKDROP = "".concat(exports.POPOVER, "-backdrop");
exports.POPOVER_CAPTURING_DISMISS = "".concat(exports.POPOVER, "-capturing-dismiss");
exports.POPOVER_CONTENT = "".concat(exports.POPOVER, "-content");
exports.POPOVER_CONTENT_PLACEMENT = "".concat(exports.POPOVER, "-placement");
exports.POPOVER_CONTENT_SIZING = "".concat(exports.POPOVER_CONTENT, "-sizing");
exports.POPOVER_DISMISS = "".concat(exports.POPOVER, "-dismiss");
exports.POPOVER_DISMISS_OVERRIDE = "".concat(exports.POPOVER_DISMISS, "-override");
exports.POPOVER_MATCH_TARGET_WIDTH = "".concat(exports.POPOVER, "-match-target-width");
exports.POPOVER_OPEN = "".concat(exports.POPOVER, "-open");
exports.POPOVER_POPPER_ESCAPED = "".concat(exports.POPOVER, "-popper-escaped");
exports.POPOVER_REFERENCE_HIDDEN = "".concat(exports.POPOVER, "-reference-hidden");
exports.POPOVER_TARGET = "".concat(exports.POPOVER, "-target");
exports.POPOVER_TRANSITION_CONTAINER = "".concat(exports.POPOVER, "-transition-container");
/** @deprecated, no longer used in Blueprint v5.x */
exports.POPOVER_WRAPPER = "".concat(exports.POPOVER, "-wrapper");
exports.PROGRESS_BAR = "".concat(NS, "-progress-bar");
exports.PROGRESS_METER = "".concat(NS, "-progress-meter");
exports.PROGRESS_NO_STRIPES = "".concat(NS, "-no-stripes");
exports.PROGRESS_NO_ANIMATION = "".concat(NS, "-no-animation");
exports.PORTAL = "".concat(NS, "-portal");
exports.SKELETON = "".concat(NS, "-skeleton");
exports.SLIDER = "".concat(NS, "-slider");
exports.SLIDER_AXIS = "".concat(exports.SLIDER, "-axis");
exports.SLIDER_HANDLE = "".concat(exports.SLIDER, "-handle");
exports.SLIDER_LABEL = "".concat(exports.SLIDER, "-label");
exports.SLIDER_TRACK = "".concat(exports.SLIDER, "-track");
exports.SLIDER_PROGRESS = "".concat(exports.SLIDER, "-progress");
exports.START = "".concat(NS, "-start");
exports.END = "".concat(NS, "-end");
exports.SPINNER = "".concat(NS, "-spinner");
exports.SPINNER_ANIMATION = "".concat(exports.SPINNER, "-animation");
exports.SPINNER_HEAD = "".concat(exports.SPINNER, "-head");
exports.SPINNER_NO_SPIN = "".concat(NS, "-no-spin");
exports.SPINNER_TRACK = "".concat(exports.SPINNER, "-track");
exports.SEGMENTED_CONTROL = "".concat(NS, "-segmented-control");
exports.TAB = "".concat(NS, "-tab");
exports.TAB_ICON = "".concat(exports.TAB, "-icon");
exports.TAB_TAG = "".concat(exports.TAB, "-tag");
exports.TAB_INDICATOR = "".concat(exports.TAB, "-indicator");
exports.TAB_INDICATOR_WRAPPER = "".concat(exports.TAB_INDICATOR, "-wrapper");
exports.TAB_LIST = "".concat(exports.TAB, "-list");
exports.TAB_PANEL = "".concat(exports.TAB, "-panel");
exports.TABS = "".concat(exports.TAB, "s");
exports.TAG = "".concat(NS, "-tag");
exports.TAG_REMOVE = "".concat(exports.TAG, "-remove");
exports.TAG_INPUT = "".concat(NS, "-tag-input");
exports.TAG_INPUT_ICON = "".concat(exports.TAG_INPUT, "-icon");
exports.TAG_INPUT_VALUES = "".concat(exports.TAG_INPUT, "-values");
exports.TOAST = "".concat(NS, "-toast");
exports.TOAST_CONTAINER = "".concat(exports.TOAST, "-container");
exports.TOAST_MESSAGE = "".concat(exports.TOAST, "-message");
exports.TOOLTIP = "".concat(NS, "-tooltip");
exports.TOOLTIP_INDICATOR = "".concat(exports.TOOLTIP, "-indicator");
exports.TREE = "".concat(NS, "-tree");
exports.TREE_NODE = "".concat(NS, "-tree-node");
exports.TREE_NODE_CARET = "".concat(exports.TREE_NODE, "-caret");
exports.TREE_NODE_CARET_CLOSED = "".concat(exports.TREE_NODE_CARET, "-closed");
exports.TREE_NODE_CARET_NONE = "".concat(exports.TREE_NODE_CARET, "-none");
exports.TREE_NODE_CARET_OPEN = "".concat(exports.TREE_NODE_CARET, "-open");
exports.TREE_NODE_CONTENT = "".concat(exports.TREE_NODE, "-content");
exports.TREE_NODE_EXPANDED = "".concat(exports.TREE_NODE, "-expanded");
exports.TREE_NODE_ICON = "".concat(exports.TREE_NODE, "-icon");
exports.TREE_NODE_LABEL = "".concat(exports.TREE_NODE, "-label");
exports.TREE_NODE_LIST = "".concat(exports.TREE_NODE, "-list");
exports.TREE_NODE_SECONDARY_LABEL = "".concat(exports.TREE_NODE, "-secondary-label");
exports.TREE_NODE_SELECTED = "".concat(exports.TREE_NODE, "-selected");
exports.TREE_ROOT = "".concat(NS, "-tree-root");
exports.ICON = "".concat(NS, "-icon");
exports.ICON_STANDARD = "".concat(exports.ICON, "-standard");
exports.ICON_LARGE = "".concat(exports.ICON, "-large");
/**
 * Returns the namespace prefix for all Blueprint CSS classes.
 * Customize this namespace at build time by defining it with `webpack.DefinePlugin`.
 */
function getClassNamespace() {
    return NS;
}
exports.getClassNamespace = getClassNamespace;
/** Return CSS class for alignment. */
function alignmentClass(alignment) {
    switch (alignment) {
        case alignment_1.Alignment.LEFT:
            return exports.ALIGN_LEFT;
        case alignment_1.Alignment.RIGHT:
            return exports.ALIGN_RIGHT;
        default:
            return undefined;
    }
}
exports.alignmentClass = alignmentClass;
function elevationClass(elevation) {
    if (elevation === undefined) {
        return undefined;
    }
    return "".concat(NS, "-elevation-").concat(elevation);
}
exports.elevationClass = elevationClass;
function iconClass(iconName) {
    if (iconName == null) {
        return undefined;
    }
    return iconName.indexOf("".concat(NS, "-icon-")) === 0 ? iconName : "".concat(NS, "-icon-").concat(iconName);
}
exports.iconClass = iconClass;
function intentClass(intent) {
    if (intent == null || intent === intent_1.Intent.NONE) {
        return undefined;
    }
    return "".concat(NS, "-intent-").concat(intent.toLowerCase());
}
exports.intentClass = intentClass;
function positionClass(position) {
    if (position === undefined) {
        return undefined;
    }
    return "".concat(NS, "-position-").concat(position);
}
exports.positionClass = positionClass;
//# sourceMappingURL=classes.js.map

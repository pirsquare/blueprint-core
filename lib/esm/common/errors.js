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
var ns = "[Blueprint]";
export var CLAMP_MIN_MAX = ns + " clamp: max cannot be less than min";
export var ALERT_WARN_CANCEL_PROPS = ns + " <Alert> cancelButtonText and onCancel should be set together.";
export var ALERT_WARN_CANCEL_ESCAPE_KEY = ns + " <Alert> canEscapeKeyCancel enabled without onCancel or onClose handler.";
export var ALERT_WARN_CANCEL_OUTSIDE_CLICK = ns + " <Alert> canOutsideClickCancel enabled without onCancel or onClose handler.";
export var HOTKEYS_HOTKEY_CHILDREN = ns + " <Hotkeys> only accepts <Hotkey> children.";
export var HOTKEYS_PROVIDER_NOT_FOUND = ns +
    " useHotkeys() was used outside of a <HotkeysProvider> context. These hotkeys will not be shown in the hotkeys help dialog.";
export var HOTKEYS_TARGET_CHILDREN_LOCAL_HOTKEYS = ns +
    " <HotkeysTarget2> was configured with local hotkeys, but you did not use the generated event handlers to bind their event handlers. Try using a render function as the child of this component.";
export var INPUT_WARN_LEFT_ELEMENT_LEFT_ICON_MUTEX = ns + " <InputGroup> leftElement and leftIcon prop are mutually exclusive, with leftElement taking priority.";
export var NUMERIC_INPUT_MIN_MAX = ns + " <NumericInput> requires min to be no greater than max if both are defined.";
export var NUMERIC_INPUT_MINOR_STEP_SIZE_BOUND = ns + " <NumericInput> requires minorStepSize to be no greater than stepSize.";
export var NUMERIC_INPUT_MAJOR_STEP_SIZE_BOUND = ns + " <NumericInput> requires stepSize to be no greater than majorStepSize.";
export var NUMERIC_INPUT_MINOR_STEP_SIZE_NON_POSITIVE = ns + " <NumericInput> requires minorStepSize to be strictly greater than zero.";
export var NUMERIC_INPUT_MAJOR_STEP_SIZE_NON_POSITIVE = ns + " <NumericInput> requires majorStepSize to be strictly greater than zero.";
export var NUMERIC_INPUT_STEP_SIZE_NON_POSITIVE = ns + " <NumericInput> requires stepSize to be strictly greater than zero.";
export var NUMERIC_INPUT_CONTROLLED_VALUE_INVALID = ns + " <NumericInput> controlled value prop does not adhere to stepSize, min, and/or max constraints.";
export var PANEL_STACK_INITIAL_PANEL_STACK_MUTEX = ns + " <PanelStack> requires exactly one of initialPanel and stack prop";
export var PANEL_STACK_REQUIRES_PANEL = ns + " <PanelStack> requires at least one panel in the stack";
export var OVERFLOW_LIST_OBSERVE_PARENTS_CHANGED = ns + " <OverflowList> does not support changing observeParents after mounting.";
export var POPOVER_REQUIRES_TARGET = "".concat(ns, " <Popover> requires renderTarget prop or a child element.");
export var POPOVER_HAS_BACKDROP_INTERACTION = "".concat(ns, " <Popover hasBackdrop={true}> requires interactionKind=\"click\".");
export var POPOVER_WARN_TOO_MANY_CHILDREN = "".concat(ns, " <Popover> supports only one child which is rendered as its target; additional children are ignored.");
export var POPOVER_WARN_DOUBLE_TARGET = ns + " <Popover> with children ignores renderTarget prop; use either prop or children.";
export var POPOVER_WARN_EMPTY_CONTENT = ns + " Disabling <Popover> with empty/whitespace content...";
export var POPOVER_WARN_HAS_BACKDROP_INLINE = ns + " <Popover usePortal={false}> ignores hasBackdrop";
export var POPOVER_WARN_PLACEMENT_AND_POSITION_MUTEX = ns + " <Popover> supports either placement or position prop, not both.";
export var POPOVER_WARN_UNCONTROLLED_ONINTERACTION = ns + " <Popover> onInteraction is ignored when uncontrolled.";
export var POPOVER_WARN_TARGET_PROPS_WITH_RENDER_TARGET = ns + " <Popover> targetProps value is ignored when renderTarget API is used.";
export var PORTAL_CONTEXT_CLASS_NAME_STRING = ns + " <Portal> context blueprintPortalClassName must be string";
export var PORTAL_LEGACY_CONTEXT_API = ns + " setting blueprintPortalClassName via legacy React context API is deprecated, use <PortalProvider> instead.";
export var RADIOGROUP_WARN_CHILDREN_OPTIONS_MUTEX = ns + " <RadioGroup> children and options prop are mutually exclusive, with options taking priority.";
export var SLIDER_ZERO_STEP = ns + " <Slider> stepSize must be greater than zero.";
export var SLIDER_ZERO_LABEL_STEP = ns + " <Slider> labelStepSize must be greater than zero.";
export var SLIDER_MIN = ns + " <Slider> min prop must be a finite number.";
export var SLIDER_MAX = ns + " <Slider> max prop must be a finite number.";
export var RANGESLIDER_NULL_VALUE = ns + " <RangeSlider> value prop must be an array of two non-null numbers.";
export var MULTISLIDER_INVALID_CHILD = ns + " <MultiSlider> children must be <SliderHandle>s or <SliderTrackStop>s";
export var MULTISLIDER_WARN_LABEL_STEP_SIZE_LABEL_VALUES_MUTEX = ns +
    " <MultiSlider> labelStepSize and labelValues prop are mutually exclusive, with labelStepSize taking priority.";
export var SPINNER_WARN_CLASSES_SIZE = ns + " <Spinner> Classes.SMALL/LARGE are ignored if size prop is set.";
export var TOASTER_CREATE_NULL = ns +
    " OverlayToaster.create() is not supported inside React lifecycle methods in React 16." +
    " See usage example on the docs site.";
export var TOASTER_MAX_TOASTS_INVALID = ns + " <OverlayToaster> maxToasts is set to an invalid number, must be greater than 0";
export var TOASTER_WARN_INLINE = ns + " OverlayToaster.create() ignores inline prop as it always creates a new element.";
export var DIALOG_WARN_NO_HEADER_ICON = ns + " <Dialog> iconName is ignored if title is omitted.";
export var DIALOG_WARN_NO_HEADER_CLOSE_BUTTON = ns + " <Dialog> isCloseButtonShown prop is ignored if title is omitted.";
export var DRAWER_ANGLE_POSITIONS_ARE_CASTED = ns + " <Drawer> all angle positions are casted into pure position (TOP, BOTTOM, LEFT or RIGHT)";
//# sourceMappingURL=errors.js.map
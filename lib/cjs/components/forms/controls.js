"use strict";
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
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
exports.Checkbox = exports.Radio = exports.Switch = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var common_1 = require("../../common");
var props_1 = require("../../common/props");
/**
 * Renders common control elements, with additional props to customize appearance.
 * This component is not exported and is only used within this module for `Checkbox`, `Radio`, and `Switch` below.
 */
var ControlInternal = React.forwardRef(function (props, ref) {
    var _a;
    var alignIndicator = props.alignIndicator, children = props.children, className = props.className, indicatorChildren = props.indicatorChildren, inline = props.inline, inputRef = props.inputRef, label = props.label, labelElement = props.labelElement, large = props.large, style = props.style, type = props.type, typeClassName = props.typeClassName, _b = props.tagName, tagName = _b === void 0 ? "label" : _b, htmlProps = tslib_1.__rest(props, ["alignIndicator", "children", "className", "indicatorChildren", "inline", "inputRef", "label", "labelElement", "large", "style", "type", "typeClassName", "tagName"]);
    var classes = (0, classnames_1.default)(common_1.Classes.CONTROL, typeClassName, (_a = {},
        _a[common_1.Classes.DISABLED] = htmlProps.disabled,
        _a[common_1.Classes.INLINE] = inline,
        _a[common_1.Classes.LARGE] = large,
        _a), common_1.Classes.alignmentClass(alignIndicator), className);
    return React.createElement(tagName, { className: classes, style: style, ref: ref }, React.createElement("input", tslib_1.__assign({}, htmlProps, { ref: inputRef, type: type })), React.createElement("span", { className: common_1.Classes.CONTROL_INDICATOR }, indicatorChildren), label, labelElement, children);
});
ControlInternal.displayName = "".concat(props_1.DISPLAYNAME_PREFIX, ".Control");
/**
 * Switch component.
 *
 * @see https://blueprintjs.com/docs/#core/components/switch
 */
exports.Switch = React.forwardRef(function (_a, ref) {
    var innerLabelChecked = _a.innerLabelChecked, innerLabel = _a.innerLabel, controlProps = tslib_1.__rest(_a, ["innerLabelChecked", "innerLabel"]);
    var switchLabels = innerLabel || innerLabelChecked
        ? [
            React.createElement("div", { key: "checked", className: common_1.Classes.CONTROL_INDICATOR_CHILD },
                React.createElement("div", { className: common_1.Classes.SWITCH_INNER_TEXT }, innerLabelChecked ? innerLabelChecked : innerLabel)),
            React.createElement("div", { key: "unchecked", className: common_1.Classes.CONTROL_INDICATOR_CHILD },
                React.createElement("div", { className: common_1.Classes.SWITCH_INNER_TEXT }, innerLabel)),
        ]
        : null;
    return (React.createElement(ControlInternal, tslib_1.__assign({}, controlProps, { indicatorChildren: switchLabels, ref: ref, type: "checkbox", typeClassName: common_1.Classes.SWITCH })));
});
exports.Switch.displayName = "".concat(props_1.DISPLAYNAME_PREFIX, ".Switch");
/**
 * Radio component.
 *
 * @see https://blueprintjs.com/docs/#core/components/radio
 */
exports.Radio = React.forwardRef(function (props, ref) { return (React.createElement(ControlInternal, tslib_1.__assign({}, props, { ref: ref, type: "radio", typeClassName: common_1.Classes.RADIO }))); });
exports.Radio.displayName = "".concat(props_1.DISPLAYNAME_PREFIX, ".Radio");
/**
 * Checkbox component.
 *
 * @see https://blueprintjs.com/docs/#core/components/checkbox
 */
exports.Checkbox = React.forwardRef(function (props, ref) {
    var defaultIndeterminate = props.defaultIndeterminate, indeterminate = props.indeterminate, onChange = props.onChange, controlProps = tslib_1.__rest(props, ["defaultIndeterminate", "indeterminate", "onChange"]);
    var _a = React.useState(indeterminate || defaultIndeterminate || false), isIndeterminate = _a[0], setIsIndeterminate = _a[1];
    var localInputRef = React.useRef(null);
    var inputRef = props.inputRef === undefined ? localInputRef : (0, common_1.mergeRefs)(props.inputRef, localInputRef);
    var handleChange = React.useCallback(function (evt) {
        // update state immediately only if uncontrolled
        if (indeterminate === undefined) {
            setIsIndeterminate(evt.target.indeterminate);
        }
        // otherwise wait for props change. always invoke handler.
        onChange === null || onChange === void 0 ? void 0 : onChange(evt);
    }, [indeterminate, onChange]);
    React.useEffect(function () {
        if (indeterminate !== undefined) {
            setIsIndeterminate(indeterminate);
        }
    }, [indeterminate]);
    React.useEffect(function () {
        if (localInputRef.current != null) {
            localInputRef.current.indeterminate = isIndeterminate;
        }
    }, [localInputRef, isIndeterminate]);
    return (React.createElement(ControlInternal, tslib_1.__assign({}, controlProps, { inputRef: inputRef, onChange: handleChange, ref: ref, type: "checkbox", typeClassName: common_1.Classes.CHECKBOX })));
});
exports.Checkbox.displayName = "".concat(props_1.DISPLAYNAME_PREFIX, ".Checkbox");
//# sourceMappingURL=controls.js.map
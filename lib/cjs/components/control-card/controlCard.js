"use strict";
/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
exports.ControlCard = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var common_1 = require("../../common");
var props_1 = require("../../common/props");
var card_1 = require("../card/card");
var controls_1 = require("../forms/controls");
var useCheckedControl_1 = require("./useCheckedControl");
/**
 * ControlCard component, used to render a {@link Card} with a form control.
 *
 * @internal
 */
exports.ControlCard = React.forwardRef(function (props, ref) {
    var _a;
    var alignIndicator = props.alignIndicator, _checked = props.checked, children = props.children, className = props.className, controlKind = props.controlKind, _defaultChecked = props.defaultChecked, disabled = props.disabled, inputProps = props.inputProps, inputRef = props.inputRef, label = props.label, _onChange = props.onChange, showAsSelectedWhenChecked = props.showAsSelectedWhenChecked, value = props.value, cardProps = tslib_1.__rest(props, ["alignIndicator", "checked", "children", "className", "controlKind", "defaultChecked", "disabled", "inputProps", "inputRef", "label", "onChange", "showAsSelectedWhenChecked", "value"]);
    var _b = (0, useCheckedControl_1.useCheckedControl)(props), checked = _b.checked, onChange = _b.onChange;
    // use a container element to achieve a good flex layout
    var labelElement = React.createElement("div", { className: common_1.Classes.CONTROL_CARD_LABEL }, children !== null && children !== void 0 ? children : label);
    var controlProps = tslib_1.__assign({ alignIndicator: alignIndicator, checked: checked, disabled: disabled, inline: true, inputRef: inputRef, labelElement: labelElement, onChange: onChange, value: value }, inputProps);
    var classes = (0, classnames_1.default)(common_1.Classes.CONTROL_CARD, className, (_a = {},
        _a[common_1.Classes.SELECTED] = showAsSelectedWhenChecked && checked,
        _a));
    return (React.createElement(card_1.Card, tslib_1.__assign({ interactive: !disabled, className: classes, ref: ref }, cardProps), controlKind === "switch" ? (React.createElement(controls_1.Switch, tslib_1.__assign({}, controlProps))) : controlKind === "checkbox" ? (React.createElement(controls_1.Checkbox, tslib_1.__assign({}, controlProps))) : controlKind === "radio" ? (React.createElement(controls_1.Radio, tslib_1.__assign({}, controlProps))) : (labelElement)));
});
exports.ControlCard.defaultProps = {
    alignIndicator: "right",
    showAsSelectedWhenChecked: true,
};
exports.ControlCard.displayName = "".concat(props_1.DISPLAYNAME_PREFIX, ".ControlCard");
//# sourceMappingURL=controlCard.js.map
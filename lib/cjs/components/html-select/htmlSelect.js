"use strict";
/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
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
exports.HTMLSelect = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var icons_1 = require("@blueprintjs/icons");
var classes_1 = require("../../common/classes");
var props_1 = require("../../common/props");
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
/**
 * HTML select component
 *
 * @see https://blueprintjs.com/docs/#core/components/html-select
 */
exports.HTMLSelect = React.forwardRef(function (props, ref) {
    var _a;
    var className = props.className, children = props.children, disabled = props.disabled, fill = props.fill, _b = props.iconName, iconName = _b === void 0 ? "double-caret-vertical" : _b, iconProps = props.iconProps, large = props.large, minimal = props.minimal, _c = props.options, options = _c === void 0 ? [] : _c, value = props.value, htmlProps = tslib_1.__rest(props, ["className", "children", "disabled", "fill", "iconName", "iconProps", "large", "minimal", "options", "value"]);
    var classes = (0, classnames_1.default)(classes_1.HTML_SELECT, (_a = {},
        _a[classes_1.DISABLED] = disabled,
        _a[classes_1.FILL] = fill,
        _a[classes_1.LARGE] = large,
        _a[classes_1.MINIMAL] = minimal,
        _a), className);
    var iconTitle = "Open dropdown";
    var rightIcon = iconName === "double-caret-vertical" ? (React.createElement(icons_1.DoubleCaretVertical, tslib_1.__assign({ title: iconTitle }, iconProps))) : (React.createElement(icons_1.CaretDown, tslib_1.__assign({ title: iconTitle }, iconProps)));
    var optionChildren = options.map(function (option) {
        var optionProps = typeof option === "object" ? option : { value: option };
        return React.createElement("option", tslib_1.__assign({}, optionProps, { key: optionProps.value, children: optionProps.label || optionProps.value }));
    });
    return (React.createElement("div", { className: classes },
        React.createElement("select", tslib_1.__assign({ disabled: disabled, ref: ref, value: value }, htmlProps, { multiple: false }),
            optionChildren,
            children),
        rightIcon));
});
exports.HTMLSelect.displayName = "".concat(props_1.DISPLAYNAME_PREFIX, ".HTMLSelect");
//# sourceMappingURL=htmlSelect.js.map
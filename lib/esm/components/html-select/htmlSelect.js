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
import { __assign, __rest } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { CaretDown, DoubleCaretVertical } from "@blueprintjs/icons";
import { DISABLED, FILL, HTML_SELECT, LARGE, MINIMAL } from "../../common/classes";
import { DISPLAYNAME_PREFIX } from "../../common/props";
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
/**
 * HTML select component
 *
 * @see https://blueprintjs.com/docs/#core/components/html-select
 */
export var HTMLSelect = React.forwardRef(function (props, ref) {
    var _a;
    var className = props.className, children = props.children, disabled = props.disabled, fill = props.fill, _b = props.iconName, iconName = _b === void 0 ? "double-caret-vertical" : _b, iconProps = props.iconProps, large = props.large, minimal = props.minimal, _c = props.options, options = _c === void 0 ? [] : _c, value = props.value, htmlProps = __rest(props, ["className", "children", "disabled", "fill", "iconName", "iconProps", "large", "minimal", "options", "value"]);
    var classes = classNames(HTML_SELECT, (_a = {},
        _a[DISABLED] = disabled,
        _a[FILL] = fill,
        _a[LARGE] = large,
        _a[MINIMAL] = minimal,
        _a), className);
    var iconTitle = "Open dropdown";
    var rightIcon = iconName === "double-caret-vertical" ? (React.createElement(DoubleCaretVertical, __assign({ title: iconTitle }, iconProps))) : (React.createElement(CaretDown, __assign({ title: iconTitle }, iconProps)));
    var optionChildren = options.map(function (option) {
        var optionProps = typeof option === "object" ? option : { value: option };
        return React.createElement("option", __assign({}, optionProps, { key: optionProps.value, children: optionProps.label || optionProps.value }));
    });
    return (React.createElement("div", { className: classes },
        React.createElement("select", __assign({ disabled: disabled, ref: ref, value: value }, htmlProps, { multiple: false }),
            optionChildren,
            children),
        rightIcon));
});
HTMLSelect.displayName = "".concat(DISPLAYNAME_PREFIX, ".HTMLSelect");
//# sourceMappingURL=htmlSelect.js.map
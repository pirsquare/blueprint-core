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
export const HTMLSelect = React.forwardRef((props, ref) => {
    const { className, children, disabled, fill, iconName = "double-caret-vertical", iconProps, large, minimal, options = [], value, ...htmlProps } = props;
    const classes = classNames(HTML_SELECT, {
        [DISABLED]: disabled,
        [FILL]: fill,
        [LARGE]: large,
        [MINIMAL]: minimal,
    }, className);
    const iconTitle = "Open dropdown";
    const rightIcon = iconName === "double-caret-vertical" ? (React.createElement(DoubleCaretVertical, { title: iconTitle, ...iconProps })) : (React.createElement(CaretDown, { title: iconTitle, ...iconProps }));
    const optionChildren = options.map(option => {
        const optionProps = typeof option === "object" ? option : { value: option };
        return React.createElement("option", { ...optionProps, key: optionProps.value, children: optionProps.label || optionProps.value });
    });
    return (React.createElement("div", { className: classes },
        React.createElement("select", { disabled: disabled, ref: ref, value: value, ...htmlProps, multiple: false },
            optionChildren,
            children),
        rightIcon));
});
HTMLSelect.displayName = `${DISPLAYNAME_PREFIX}.HTMLSelect`;
//# sourceMappingURL=htmlSelect.js.map
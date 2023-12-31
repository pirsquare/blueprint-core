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
import classNames from "classnames";
import * as React from "react";
import { Classes } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { Card } from "../card/card";
import { Checkbox, Radio, Switch } from "../forms/controls";
import { useCheckedControl } from "./useCheckedControl";
/**
 * ControlCard component, used to render a {@link Card} with a form control.
 *
 * @internal
 */
export const ControlCard = React.forwardRef((props, ref) => {
    const { alignIndicator, checked: _checked, children, className, controlKind, defaultChecked: _defaultChecked, disabled, inputProps, inputRef, label, onChange: _onChange, showAsSelectedWhenChecked, value, ...cardProps } = props;
    const { checked, onChange } = useCheckedControl(props);
    // use a container element to achieve a good flex layout
    const labelElement = React.createElement("div", { className: Classes.CONTROL_CARD_LABEL }, children ?? label);
    const controlProps = {
        alignIndicator,
        checked,
        disabled,
        inline: true,
        inputRef,
        labelElement,
        onChange,
        value,
        ...inputProps,
    };
    const classes = classNames(Classes.CONTROL_CARD, className, {
        [Classes.SELECTED]: showAsSelectedWhenChecked && checked,
    });
    return (React.createElement(Card, { interactive: !disabled, className: classes, ref: ref, ...cardProps }, controlKind === "switch" ? (React.createElement(Switch, { ...controlProps })) : controlKind === "checkbox" ? (React.createElement(Checkbox, { ...controlProps })) : controlKind === "radio" ? (React.createElement(Radio, { ...controlProps })) : (labelElement)));
});
ControlCard.defaultProps = {
    alignIndicator: "right",
    showAsSelectedWhenChecked: true,
};
ControlCard.displayName = `${DISPLAYNAME_PREFIX}.ControlCard`;
//# sourceMappingURL=controlCard.js.map
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
import classNames from "classnames";
import * as React from "react";
import { AbstractPureComponent, Classes, DISPLAYNAME_PREFIX } from "../../common";
import * as Errors from "../../common/errors";
import { isElementOfType } from "../../common/utils";
import { RadioCard } from "../control-card/radioCard";
import { Radio } from "./controls";
let counter = 0;
function nextName() {
    return `${RadioGroup.displayName}-${counter++}`;
}
/**
 * Radio group component.
 *
 * @see https://blueprintjs.com/docs/#core/components/radio.radiogroup
 */
export class RadioGroup extends AbstractPureComponent {
    static displayName = `${DISPLAYNAME_PREFIX}.RadioGroup`;
    // a unique name for this group, which can be overridden by `name` prop.
    autoGroupName = nextName();
    render() {
        const { label } = this.props;
        return (React.createElement("div", { className: classNames(Classes.RADIO_GROUP, this.props.className) },
            label == null ? null : React.createElement("label", { className: Classes.LABEL }, label),
            Array.isArray(this.props.options) ? this.renderOptions() : this.renderChildren()));
    }
    validateProps() {
        if (this.props.children != null && this.props.options != null) {
            console.warn(Errors.RADIOGROUP_WARN_CHILDREN_OPTIONS_MUTEX);
        }
    }
    renderChildren() {
        return React.Children.map(this.props.children, child => {
            if (isElementOfType(child, Radio) || isElementOfType(child, RadioCard)) {
                return React.cloneElement(
                // Need this cast here to suppress a TS error caused by differing `ref` types for the Radio and
                // RadioCard components. We aren't injecting a ref, so we don't need to be strict about that
                // incompatibility.
                child, this.getRadioProps(child.props));
            }
            else {
                return child;
            }
        });
    }
    renderOptions() {
        return this.props.options?.map(option => (React.createElement(Radio, { ...this.getRadioProps(option), key: option.value, labelElement: option.label || option.value })));
    }
    getRadioProps(optionProps) {
        const { name } = this.props;
        const { className, disabled, value } = optionProps;
        return {
            checked: value === this.props.selectedValue,
            className,
            disabled: disabled || this.props.disabled,
            inline: this.props.inline,
            name: name == null ? this.autoGroupName : name,
            onChange: this.props.onChange,
            value,
        };
    }
}
//# sourceMappingURL=radioGroup.js.map
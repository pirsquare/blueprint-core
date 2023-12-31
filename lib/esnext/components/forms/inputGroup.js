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
import { AbstractPureComponent, Classes } from "../../common";
import * as Errors from "../../common/errors";
import { DISPLAYNAME_PREFIX, removeNonHTMLProps, } from "../../common/props";
import { Icon } from "../icon/icon";
import { AsyncControllableInput } from "./asyncControllableInput";
const NON_HTML_PROPS = ["onValueChange"];
/**
 * Input group component.
 *
 * @see https://blueprintjs.com/docs/#core/components/input-group
 */
export class InputGroup extends AbstractPureComponent {
    static displayName = `${DISPLAYNAME_PREFIX}.InputGroup`;
    state = {};
    leftElement = null;
    rightElement = null;
    refHandlers = {
        leftElement: (ref) => (this.leftElement = ref),
        rightElement: (ref) => (this.rightElement = ref),
    };
    render() {
        const { asyncControl = false, className, disabled, fill, inputClassName, inputRef, intent, large, readOnly, round, small, tagName = "div", } = this.props;
        const inputGroupClasses = classNames(Classes.INPUT_GROUP, Classes.intentClass(intent), {
            [Classes.DISABLED]: disabled,
            [Classes.READ_ONLY]: readOnly,
            [Classes.FILL]: fill,
            [Classes.LARGE]: large,
            [Classes.SMALL]: small,
            [Classes.ROUND]: round,
        }, className);
        const style = {
            ...this.props.style,
            paddingLeft: this.state.leftElementWidth,
            paddingRight: this.state.rightElementWidth,
        };
        const inputProps = {
            type: "text",
            ...removeNonHTMLProps(this.props, NON_HTML_PROPS, true),
            "aria-disabled": disabled,
            className: classNames(Classes.INPUT, inputClassName),
            onChange: this.handleInputChange,
            style,
        };
        const inputElement = asyncControl ? (React.createElement(AsyncControllableInput, { ...inputProps, inputRef: inputRef })) : (React.createElement("input", { ...inputProps, ref: inputRef }));
        return React.createElement(tagName, { className: inputGroupClasses }, this.maybeRenderLeftElement(), inputElement, this.maybeRenderRightElement());
    }
    componentDidMount() {
        this.updateInputWidth();
    }
    componentDidUpdate(prevProps) {
        const { leftElement, rightElement } = this.props;
        if (prevProps.leftElement !== leftElement || prevProps.rightElement !== rightElement) {
            this.updateInputWidth();
        }
    }
    validateProps(props) {
        if (props.leftElement != null && props.leftIcon != null) {
            console.warn(Errors.INPUT_WARN_LEFT_ELEMENT_LEFT_ICON_MUTEX);
        }
    }
    handleInputChange = (event) => {
        const value = event.target.value;
        this.props.onChange?.(event);
        this.props.onValueChange?.(value, event.target);
    };
    maybeRenderLeftElement() {
        const { leftElement, leftIcon } = this.props;
        if (leftElement != null) {
            return (React.createElement("span", { className: Classes.INPUT_LEFT_CONTAINER, ref: this.refHandlers.leftElement }, leftElement));
        }
        else if (leftIcon != null) {
            return React.createElement(Icon, { icon: leftIcon, "aria-hidden": true, tabIndex: -1 });
        }
        return undefined;
    }
    maybeRenderRightElement() {
        const { rightElement } = this.props;
        if (rightElement == null) {
            return undefined;
        }
        return (React.createElement("span", { className: Classes.INPUT_ACTION, ref: this.refHandlers.rightElement }, rightElement));
    }
    updateInputWidth() {
        const { leftElementWidth, rightElementWidth } = this.state;
        if (this.leftElement != null) {
            const { clientWidth } = this.leftElement;
            // small threshold to prevent infinite loops
            if (leftElementWidth === undefined || Math.abs(clientWidth - leftElementWidth) > 2) {
                this.setState({ leftElementWidth: clientWidth });
            }
        }
        else {
            this.setState({ leftElementWidth: undefined });
        }
        if (this.rightElement != null) {
            const { clientWidth } = this.rightElement;
            // small threshold to prevent infinite loops
            if (rightElementWidth === undefined || Math.abs(clientWidth - rightElementWidth) > 2) {
                this.setState({ rightElementWidth: clientWidth });
            }
        }
        else {
            this.setState({ rightElementWidth: undefined });
        }
    }
}
//# sourceMappingURL=inputGroup.js.map
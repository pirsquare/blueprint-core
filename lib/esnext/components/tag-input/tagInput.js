/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
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
import { IconSize } from "@blueprintjs/icons";
import { AbstractPureComponent, Classes, refHandler, setRef, Utils } from "../../common";
import { DISPLAYNAME_PREFIX, } from "../../common/props";
import { getActiveElement } from "../../common/utils";
import { Icon } from "../icon/icon";
import { Tag } from "../tag/tag";
import { ResizableInput } from "./resizableInput";
/** special value for absence of active tag */
const NONE = -1;
/**
 * Tag input component.
 *
 * @see https://blueprintjs.com/docs/#core/components/tag-input
 */
export class TagInput extends AbstractPureComponent {
    static displayName = `${DISPLAYNAME_PREFIX}.TagInput`;
    static defaultProps = {
        addOnBlur: false,
        addOnPaste: true,
        autoResize: false,
        inputProps: {},
        separator: /[,\n\r]/,
        tagProps: {},
    };
    static getDerivedStateFromProps(props, state) {
        if (props.inputValue !== state.prevInputValueProp) {
            return {
                inputValue: props.inputValue,
                prevInputValueProp: props.inputValue,
            };
        }
        return null;
    }
    state = {
        activeIndex: NONE,
        inputValue: this.props.inputValue || "",
        isInputFocused: false,
    };
    inputElement = null;
    handleRef = refHandler(this, "inputElement", this.props.inputRef);
    render() {
        const { autoResize, className, disabled, fill, inputProps, intent, large, leftIcon, placeholder, values } = this.props;
        const classes = classNames(Classes.INPUT, Classes.TAG_INPUT, {
            [Classes.ACTIVE]: this.state.isInputFocused,
            [Classes.DISABLED]: disabled,
            [Classes.FILL]: fill,
            [Classes.LARGE]: large,
        }, Classes.intentClass(intent), className);
        const isLarge = classes.indexOf(Classes.LARGE) > NONE;
        // use placeholder prop only if it's defined and values list is empty or contains only falsy values
        const isSomeValueDefined = values.some(val => !!val);
        const resolvedPlaceholder = placeholder == null || isSomeValueDefined ? inputProps?.placeholder : placeholder;
        // final props that may be sent to <input> or <ResizableInput>
        const resolvedInputProps = {
            value: this.state.inputValue,
            ...inputProps,
            className: classNames(Classes.INPUT_GHOST, inputProps?.className),
            disabled,
            onChange: this.handleInputChange,
            onFocus: this.handleInputFocus,
            onKeyDown: this.handleInputKeyDown,
            onKeyUp: this.handleInputKeyUp,
            onPaste: this.handleInputPaste,
            placeholder: resolvedPlaceholder,
            ref: this.handleRef,
        };
        return (React.createElement("div", { className: classes, onBlur: this.handleContainerBlur, onClick: this.handleContainerClick },
            React.createElement(Icon, { className: Classes.TAG_INPUT_ICON, icon: leftIcon, size: isLarge ? IconSize.LARGE : IconSize.STANDARD }),
            React.createElement("div", { className: Classes.TAG_INPUT_VALUES },
                values.map(this.maybeRenderTag),
                this.props.children,
                autoResize ? React.createElement(ResizableInput, { ...resolvedInputProps }) : React.createElement("input", { ...resolvedInputProps })),
            this.props.rightElement));
    }
    componentDidUpdate(prevProps) {
        if (prevProps.inputRef !== this.props.inputRef) {
            setRef(prevProps.inputRef, null);
            this.handleRef = refHandler(this, "inputElement", this.props.inputRef);
            setRef(this.props.inputRef, this.inputElement);
        }
    }
    addTags = (value, method = "default") => {
        const { inputValue, onAdd, onChange, values } = this.props;
        const newValues = this.getValues(value);
        let shouldClearInput = onAdd?.(newValues, method) !== false && inputValue === undefined;
        // avoid a potentially expensive computation if this prop is omitted
        if (Utils.isFunction(onChange)) {
            shouldClearInput = onChange([...values, ...newValues]) !== false && shouldClearInput;
        }
        // only explicit return false cancels text clearing
        if (shouldClearInput) {
            this.setState({ inputValue: "" });
        }
    };
    maybeRenderTag = (tag, index) => {
        if (!tag) {
            return null;
        }
        const { large, tagProps } = this.props;
        const props = Utils.isFunction(tagProps) ? tagProps(tag, index) : tagProps;
        return (React.createElement(Tag, { active: index === this.state.activeIndex, "data-tag-index": index, key: tag + "__" + index, large: large, onRemove: this.props.disabled ? undefined : this.handleRemoveTag, ...props }, tag));
    };
    getNextActiveIndex(direction) {
        const { activeIndex } = this.state;
        if (activeIndex === NONE) {
            // nothing active & moving left: select last defined value. otherwise select nothing.
            return direction < 0 ? this.findNextIndex(this.props.values.length, -1) : NONE;
        }
        else {
            // otherwise, move in direction and clamp to bounds.
            // note that upper bound allows going one beyond last item
            // so focus can move off the right end, into the text input.
            return this.findNextIndex(activeIndex, direction);
        }
    }
    findNextIndex(startIndex, direction) {
        const { values } = this.props;
        let index = startIndex + direction;
        while (index > 0 && index < values.length && !values[index]) {
            index += direction;
        }
        return Utils.clamp(index, 0, values.length);
    }
    /**
     * Splits inputValue on separator prop,
     * trims whitespace from each new value,
     * and ignores empty values.
     */
    getValues(inputValue) {
        const { separator } = this.props;
        // NOTE: split() typings define two overrides for string and RegExp.
        // this does not play well with our union prop type, so we'll just declare it as a valid type.
        return (separator === false ? [inputValue] : inputValue.split(separator))
            .map(val => val.trim())
            .filter(val => val.length > 0);
    }
    handleContainerClick = () => {
        this.inputElement?.focus();
    };
    handleContainerBlur = ({ currentTarget }) => {
        this.requestAnimationFrame(() => {
            // we only care if the blur event is leaving the container.
            // defer this check using rAF so activeElement will have updated.
            const isFocusInsideContainer = currentTarget.contains(getActiveElement(this.inputElement));
            if (!isFocusInsideContainer) {
                if (this.props.addOnBlur && this.state.inputValue !== undefined && this.state.inputValue.length > 0) {
                    this.addTags(this.state.inputValue, "blur");
                }
                this.setState({ activeIndex: NONE, isInputFocused: false });
            }
        });
    };
    handleInputFocus = (event) => {
        this.setState({ isInputFocused: true });
        this.props.inputProps?.onFocus?.(event);
    };
    handleInputChange = (event) => {
        this.setState({ activeIndex: NONE, inputValue: event.currentTarget.value });
        this.props.onInputChange?.(event);
        this.props.inputProps?.onChange?.(event);
    };
    handleInputKeyDown = (event) => {
        const { selectionEnd, value } = event.currentTarget;
        const { activeIndex } = this.state;
        let activeIndexToEmit = activeIndex;
        if (event.key === "Enter" && value.length > 0) {
            this.addTags(value, "default");
        }
        else if (selectionEnd === 0 && this.props.values.length > 0) {
            // cursor at beginning of input allows interaction with tags.
            // use selectionEnd to verify cursor position and no text selection.
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                const nextActiveIndex = this.getNextActiveIndex(event.key === "ArrowRight" ? 1 : -1);
                if (nextActiveIndex !== activeIndex) {
                    event.stopPropagation();
                    activeIndexToEmit = nextActiveIndex;
                    this.setState({ activeIndex: nextActiveIndex });
                }
            }
            else if (event.key === "Backspace") {
                this.handleBackspaceToRemove(event);
            }
            else if (event.key === "Delete") {
                this.handleDeleteToRemove(event);
            }
        }
        this.invokeKeyPressCallback("onKeyDown", event, activeIndexToEmit);
    };
    handleInputKeyUp = (event) => {
        this.invokeKeyPressCallback("onKeyUp", event, this.state.activeIndex);
    };
    handleInputPaste = (event) => {
        const { separator } = this.props;
        const value = event.clipboardData.getData("text");
        if (!this.props.addOnPaste || value.length === 0) {
            return;
        }
        // special case as a UX nicety: if the user pasted only one value with no delimiters in it, leave that value in
        // the input field so that the user can refine it before converting it to a tag manually.
        if (separator === false || value.split(separator).length === 1) {
            return;
        }
        event.preventDefault();
        this.addTags(value, "paste");
    };
    handleRemoveTag = (event) => {
        // using data attribute to simplify callback logic -- one handler for all children
        const index = +event.currentTarget.parentElement.getAttribute("data-tag-index");
        this.removeIndexFromValues(index);
    };
    handleBackspaceToRemove(event) {
        const previousActiveIndex = this.state.activeIndex;
        // always move leftward one item (this will focus last item if nothing is focused)
        this.setState({ activeIndex: this.getNextActiveIndex(-1) });
        // delete item if there was a previous valid selection (ignore first backspace to focus last item)
        if (this.isValidIndex(previousActiveIndex)) {
            event.stopPropagation();
            this.removeIndexFromValues(previousActiveIndex);
        }
    }
    handleDeleteToRemove(event) {
        const { activeIndex } = this.state;
        if (this.isValidIndex(activeIndex)) {
            event.stopPropagation();
            this.removeIndexFromValues(activeIndex);
        }
    }
    /** Remove the item at the given index by invoking `onRemove` and `onChange` accordingly. */
    removeIndexFromValues(index) {
        const { onChange, onRemove, values } = this.props;
        onRemove?.(values[index], index);
        onChange?.(values.filter((_, i) => i !== index));
    }
    invokeKeyPressCallback(propCallbackName, event, activeIndex) {
        this.props[propCallbackName]?.(event, activeIndex === NONE ? undefined : activeIndex);
        this.props.inputProps[propCallbackName]?.(event);
    }
    /** Returns whether the given index represents a valid item in `this.props.values`. */
    isValidIndex(index) {
        return index !== NONE && index < this.props.values.length;
    }
}
//# sourceMappingURL=tagInput.js.map
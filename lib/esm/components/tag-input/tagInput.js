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
import { __assign, __extends, __spreadArray } from "tslib";
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
var NONE = -1;
/**
 * Tag input component.
 *
 * @see https://blueprintjs.com/docs/#core/components/tag-input
 */
var TagInput = /** @class */ (function (_super) {
    __extends(TagInput, _super);
    function TagInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeIndex: NONE,
            inputValue: _this.props.inputValue || "",
            isInputFocused: false,
        };
        _this.inputElement = null;
        _this.handleRef = refHandler(_this, "inputElement", _this.props.inputRef);
        _this.addTags = function (value, method) {
            if (method === void 0) { method = "default"; }
            var _a = _this.props, inputValue = _a.inputValue, onAdd = _a.onAdd, onChange = _a.onChange, values = _a.values;
            var newValues = _this.getValues(value);
            var shouldClearInput = (onAdd === null || onAdd === void 0 ? void 0 : onAdd(newValues, method)) !== false && inputValue === undefined;
            // avoid a potentially expensive computation if this prop is omitted
            if (Utils.isFunction(onChange)) {
                shouldClearInput = onChange(__spreadArray(__spreadArray([], values, true), newValues, true)) !== false && shouldClearInput;
            }
            // only explicit return false cancels text clearing
            if (shouldClearInput) {
                _this.setState({ inputValue: "" });
            }
        };
        _this.maybeRenderTag = function (tag, index) {
            if (!tag) {
                return null;
            }
            var _a = _this.props, large = _a.large, tagProps = _a.tagProps;
            var props = Utils.isFunction(tagProps) ? tagProps(tag, index) : tagProps;
            return (React.createElement(Tag, __assign({ active: index === _this.state.activeIndex, "data-tag-index": index, key: tag + "__" + index, large: large, onRemove: _this.props.disabled ? undefined : _this.handleRemoveTag }, props), tag));
        };
        _this.handleContainerClick = function () {
            var _a;
            (_a = _this.inputElement) === null || _a === void 0 ? void 0 : _a.focus();
        };
        _this.handleContainerBlur = function (_a) {
            var currentTarget = _a.currentTarget;
            _this.requestAnimationFrame(function () {
                // we only care if the blur event is leaving the container.
                // defer this check using rAF so activeElement will have updated.
                var isFocusInsideContainer = currentTarget.contains(getActiveElement(_this.inputElement));
                if (!isFocusInsideContainer) {
                    if (_this.props.addOnBlur && _this.state.inputValue !== undefined && _this.state.inputValue.length > 0) {
                        _this.addTags(_this.state.inputValue, "blur");
                    }
                    _this.setState({ activeIndex: NONE, isInputFocused: false });
                }
            });
        };
        _this.handleInputFocus = function (event) {
            var _a, _b;
            _this.setState({ isInputFocused: true });
            (_b = (_a = _this.props.inputProps) === null || _a === void 0 ? void 0 : _a.onFocus) === null || _b === void 0 ? void 0 : _b.call(_a, event);
        };
        _this.handleInputChange = function (event) {
            var _a, _b, _c, _d;
            _this.setState({ activeIndex: NONE, inputValue: event.currentTarget.value });
            (_b = (_a = _this.props).onInputChange) === null || _b === void 0 ? void 0 : _b.call(_a, event);
            (_d = (_c = _this.props.inputProps) === null || _c === void 0 ? void 0 : _c.onChange) === null || _d === void 0 ? void 0 : _d.call(_c, event);
        };
        _this.handleInputKeyDown = function (event) {
            var _a = event.currentTarget, selectionEnd = _a.selectionEnd, value = _a.value;
            var activeIndex = _this.state.activeIndex;
            var activeIndexToEmit = activeIndex;
            if (event.key === "Enter" && value.length > 0) {
                _this.addTags(value, "default");
            }
            else if (selectionEnd === 0 && _this.props.values.length > 0) {
                // cursor at beginning of input allows interaction with tags.
                // use selectionEnd to verify cursor position and no text selection.
                if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                    var nextActiveIndex = _this.getNextActiveIndex(event.key === "ArrowRight" ? 1 : -1);
                    if (nextActiveIndex !== activeIndex) {
                        event.stopPropagation();
                        activeIndexToEmit = nextActiveIndex;
                        _this.setState({ activeIndex: nextActiveIndex });
                    }
                }
                else if (event.key === "Backspace") {
                    _this.handleBackspaceToRemove(event);
                }
                else if (event.key === "Delete") {
                    _this.handleDeleteToRemove(event);
                }
            }
            _this.invokeKeyPressCallback("onKeyDown", event, activeIndexToEmit);
        };
        _this.handleInputKeyUp = function (event) {
            _this.invokeKeyPressCallback("onKeyUp", event, _this.state.activeIndex);
        };
        _this.handleInputPaste = function (event) {
            var separator = _this.props.separator;
            var value = event.clipboardData.getData("text");
            if (!_this.props.addOnPaste || value.length === 0) {
                return;
            }
            // special case as a UX nicety: if the user pasted only one value with no delimiters in it, leave that value in
            // the input field so that the user can refine it before converting it to a tag manually.
            if (separator === false || value.split(separator).length === 1) {
                return;
            }
            event.preventDefault();
            _this.addTags(value, "paste");
        };
        _this.handleRemoveTag = function (event) {
            // using data attribute to simplify callback logic -- one handler for all children
            var index = +event.currentTarget.parentElement.getAttribute("data-tag-index");
            _this.removeIndexFromValues(index);
        };
        return _this;
    }
    TagInput.getDerivedStateFromProps = function (props, state) {
        if (props.inputValue !== state.prevInputValueProp) {
            return {
                inputValue: props.inputValue,
                prevInputValueProp: props.inputValue,
            };
        }
        return null;
    };
    TagInput.prototype.render = function () {
        var _a;
        var _b = this.props, autoResize = _b.autoResize, className = _b.className, disabled = _b.disabled, fill = _b.fill, inputProps = _b.inputProps, intent = _b.intent, large = _b.large, leftIcon = _b.leftIcon, placeholder = _b.placeholder, values = _b.values;
        var classes = classNames(Classes.INPUT, Classes.TAG_INPUT, (_a = {},
            _a[Classes.ACTIVE] = this.state.isInputFocused,
            _a[Classes.DISABLED] = disabled,
            _a[Classes.FILL] = fill,
            _a[Classes.LARGE] = large,
            _a), Classes.intentClass(intent), className);
        var isLarge = classes.indexOf(Classes.LARGE) > NONE;
        // use placeholder prop only if it's defined and values list is empty or contains only falsy values
        var isSomeValueDefined = values.some(function (val) { return !!val; });
        var resolvedPlaceholder = placeholder == null || isSomeValueDefined ? inputProps === null || inputProps === void 0 ? void 0 : inputProps.placeholder : placeholder;
        // final props that may be sent to <input> or <ResizableInput>
        var resolvedInputProps = __assign(__assign({ value: this.state.inputValue }, inputProps), { className: classNames(Classes.INPUT_GHOST, inputProps === null || inputProps === void 0 ? void 0 : inputProps.className), disabled: disabled, onChange: this.handleInputChange, onFocus: this.handleInputFocus, onKeyDown: this.handleInputKeyDown, onKeyUp: this.handleInputKeyUp, onPaste: this.handleInputPaste, placeholder: resolvedPlaceholder, ref: this.handleRef });
        return (React.createElement("div", { className: classes, onBlur: this.handleContainerBlur, onClick: this.handleContainerClick },
            React.createElement(Icon, { className: Classes.TAG_INPUT_ICON, icon: leftIcon, size: isLarge ? IconSize.LARGE : IconSize.STANDARD }),
            React.createElement("div", { className: Classes.TAG_INPUT_VALUES },
                values.map(this.maybeRenderTag),
                this.props.children,
                autoResize ? React.createElement(ResizableInput, __assign({}, resolvedInputProps)) : React.createElement("input", __assign({}, resolvedInputProps))),
            this.props.rightElement));
    };
    TagInput.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.inputRef !== this.props.inputRef) {
            setRef(prevProps.inputRef, null);
            this.handleRef = refHandler(this, "inputElement", this.props.inputRef);
            setRef(this.props.inputRef, this.inputElement);
        }
    };
    TagInput.prototype.getNextActiveIndex = function (direction) {
        var activeIndex = this.state.activeIndex;
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
    };
    TagInput.prototype.findNextIndex = function (startIndex, direction) {
        var values = this.props.values;
        var index = startIndex + direction;
        while (index > 0 && index < values.length && !values[index]) {
            index += direction;
        }
        return Utils.clamp(index, 0, values.length);
    };
    /**
     * Splits inputValue on separator prop,
     * trims whitespace from each new value,
     * and ignores empty values.
     */
    TagInput.prototype.getValues = function (inputValue) {
        var separator = this.props.separator;
        // NOTE: split() typings define two overrides for string and RegExp.
        // this does not play well with our union prop type, so we'll just declare it as a valid type.
        return (separator === false ? [inputValue] : inputValue.split(separator))
            .map(function (val) { return val.trim(); })
            .filter(function (val) { return val.length > 0; });
    };
    TagInput.prototype.handleBackspaceToRemove = function (event) {
        var previousActiveIndex = this.state.activeIndex;
        // always move leftward one item (this will focus last item if nothing is focused)
        this.setState({ activeIndex: this.getNextActiveIndex(-1) });
        // delete item if there was a previous valid selection (ignore first backspace to focus last item)
        if (this.isValidIndex(previousActiveIndex)) {
            event.stopPropagation();
            this.removeIndexFromValues(previousActiveIndex);
        }
    };
    TagInput.prototype.handleDeleteToRemove = function (event) {
        var activeIndex = this.state.activeIndex;
        if (this.isValidIndex(activeIndex)) {
            event.stopPropagation();
            this.removeIndexFromValues(activeIndex);
        }
    };
    /** Remove the item at the given index by invoking `onRemove` and `onChange` accordingly. */
    TagInput.prototype.removeIndexFromValues = function (index) {
        var _a = this.props, onChange = _a.onChange, onRemove = _a.onRemove, values = _a.values;
        onRemove === null || onRemove === void 0 ? void 0 : onRemove(values[index], index);
        onChange === null || onChange === void 0 ? void 0 : onChange(values.filter(function (_, i) { return i !== index; }));
    };
    TagInput.prototype.invokeKeyPressCallback = function (propCallbackName, event, activeIndex) {
        var _a, _b, _c, _d;
        (_b = (_a = this.props)[propCallbackName]) === null || _b === void 0 ? void 0 : _b.call(_a, event, activeIndex === NONE ? undefined : activeIndex);
        (_d = (_c = this.props.inputProps)[propCallbackName]) === null || _d === void 0 ? void 0 : _d.call(_c, event);
    };
    /** Returns whether the given index represents a valid item in `this.props.values`. */
    TagInput.prototype.isValidIndex = function (index) {
        return index !== NONE && index < this.props.values.length;
    };
    TagInput.displayName = "".concat(DISPLAYNAME_PREFIX, ".TagInput");
    TagInput.defaultProps = {
        addOnBlur: false,
        addOnPaste: true,
        autoResize: false,
        inputProps: {},
        separator: /[,\n\r]/,
        tagProps: {},
    };
    return TagInput;
}(AbstractPureComponent));
export { TagInput };
//# sourceMappingURL=tagInput.js.map
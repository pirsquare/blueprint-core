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
import { __assign, __extends } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { AbstractPureComponent, Classes, DISPLAYNAME_PREFIX, Intent, Utils, } from "../../common";
import * as Errors from "../../common/errors";
import { Handle } from "./handle";
import { HandleInteractionKind, HandleType } from "./handleProps";
import { argMin, fillValues, formatPercentage } from "./sliderUtils";
/**
 * SFC used to pass slider handle props to a `MultiSlider`.
 * This element is not rendered directly.
 */
var MultiSliderHandle = function () { return null; };
MultiSliderHandle.displayName = "".concat(DISPLAYNAME_PREFIX, ".MultiSliderHandle");
/**
 * Multi slider component.
 *
 * @see https://blueprintjs.com/docs/#core/components/sliders.multi-slider
 */
var MultiSlider = /** @class */ (function (_super) {
    __extends(MultiSlider, _super);
    function MultiSlider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            labelPrecision: getLabelPrecision(_this.props),
            tickSize: 0,
            tickSizeRatio: 0,
        };
        _this.handleElements = [];
        _this.trackElement = null;
        _this.addHandleRef = function (ref) {
            if (ref != null) {
                _this.handleElements.push(ref);
            }
        };
        _this.maybeHandleTrackClick = function (event) {
            if (_this.canHandleTrackEvent(event)) {
                var foundHandle = _this.nearestHandleForValue(_this.handleElements, function (handle) {
                    return handle.mouseEventClientOffset(event);
                });
                if (foundHandle) {
                    foundHandle.beginHandleMovement(event);
                }
            }
        };
        _this.maybeHandleTrackTouch = function (event) {
            if (_this.canHandleTrackEvent(event)) {
                var foundHandle = _this.nearestHandleForValue(_this.handleElements, function (handle) {
                    return handle.touchEventClientOffset(event);
                });
                if (foundHandle) {
                    foundHandle.beginHandleTouchMovement(event);
                }
            }
        };
        _this.canHandleTrackEvent = function (event) {
            var target = event.target;
            // ensure event does not come from inside the handle
            return !_this.props.disabled && target.closest(".".concat(Classes.SLIDER_HANDLE)) == null;
        };
        _this.getHandlerForIndex = function (index, callback) {
            return function (newValue) {
                callback === null || callback === void 0 ? void 0 : callback(_this.getNewHandleValues(newValue, index));
            };
        };
        _this.handleChange = function (newValues) {
            var _a, _b;
            var handleProps = getSortedInteractiveHandleProps(_this.props);
            var oldValues = handleProps.map(function (handle) { return handle.value; });
            if (!Utils.arraysEqual(newValues, oldValues)) {
                (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, newValues);
                handleProps.forEach(function (handle, index) {
                    var _a;
                    if (oldValues[index] !== newValues[index]) {
                        (_a = handle.onChange) === null || _a === void 0 ? void 0 : _a.call(handle, newValues[index]);
                    }
                });
            }
        };
        _this.handleRelease = function (newValues) {
            var _a, _b;
            var handleProps = getSortedInteractiveHandleProps(_this.props);
            (_b = (_a = _this.props).onRelease) === null || _b === void 0 ? void 0 : _b.call(_a, newValues);
            handleProps.forEach(function (handle, index) {
                var _a;
                (_a = handle.onRelease) === null || _a === void 0 ? void 0 : _a.call(handle, newValues[index]);
            });
        };
        return _this;
    }
    MultiSlider.getDerivedStateFromProps = function (props) {
        return { labelPrecision: MultiSlider.getLabelPrecision(props) };
    };
    MultiSlider.getLabelPrecision = function (_a) {
        var labelPrecision = _a.labelPrecision, stepSize = _a.stepSize;
        // infer default label precision from stepSize because that's how much the handle moves.
        return labelPrecision == null ? Utils.countDecimalPlaces(stepSize) : labelPrecision;
    };
    MultiSlider.prototype.getSnapshotBeforeUpdate = function (prevProps) {
        var prevHandleProps = getSortedInteractiveHandleProps(prevProps);
        var newHandleProps = getSortedInteractiveHandleProps(this.props);
        if (newHandleProps.length !== prevHandleProps.length) {
            // clear refs
            this.handleElements = [];
        }
        return null;
    };
    MultiSlider.prototype.render = function () {
        var _a;
        var _this = this;
        var classes = classNames(Classes.SLIDER, (_a = {},
            _a[Classes.DISABLED] = this.props.disabled,
            _a["".concat(Classes.SLIDER, "-unlabeled")] = this.props.labelRenderer === false,
            _a[Classes.VERTICAL] = this.props.vertical,
            _a), this.props.className);
        return (React.createElement("div", { className: classes, onMouseDown: this.maybeHandleTrackClick, onTouchStart: this.maybeHandleTrackTouch },
            React.createElement("div", { className: Classes.SLIDER_TRACK, ref: function (ref) { return (_this.trackElement = ref); } }, this.renderTracks()),
            React.createElement("div", { className: Classes.SLIDER_AXIS }, this.renderLabels()),
            this.renderHandles()));
    };
    MultiSlider.prototype.componentDidMount = function () {
        this.updateTickSize();
    };
    MultiSlider.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.updateTickSize();
    };
    MultiSlider.prototype.validateProps = function (props) {
        if (props.stepSize <= 0) {
            throw new Error(Errors.SLIDER_ZERO_STEP);
        }
        if (props.labelStepSize !== undefined && props.labelValues !== undefined) {
            throw new Error(Errors.MULTISLIDER_WARN_LABEL_STEP_SIZE_LABEL_VALUES_MUTEX);
        }
        if (props.labelStepSize !== undefined && props.labelStepSize <= 0) {
            throw new Error(Errors.SLIDER_ZERO_LABEL_STEP);
        }
        if (props.min !== undefined && !isFinite(props.min)) {
            throw new Error(Errors.SLIDER_MIN);
        }
        if (props.max !== undefined && !isFinite(props.max)) {
            throw new Error(Errors.SLIDER_MAX);
        }
        var anyInvalidChildren = false;
        React.Children.forEach(props.children, function (child) {
            // allow boolean coercion to omit nulls and false values
            if (child && !Utils.isElementOfType(child, MultiSlider.Handle)) {
                anyInvalidChildren = true;
            }
        });
        if (anyInvalidChildren) {
            throw new Error(Errors.MULTISLIDER_INVALID_CHILD);
        }
    };
    MultiSlider.prototype.formatLabel = function (value, isHandleTooltip) {
        if (isHandleTooltip === void 0) { isHandleTooltip = false; }
        var labelRenderer = this.props.labelRenderer;
        if (labelRenderer === false) {
            return undefined;
        }
        else if (Utils.isFunction(labelRenderer)) {
            return labelRenderer(value, { isHandleTooltip: isHandleTooltip });
        }
        else {
            return value.toFixed(this.state.labelPrecision);
        }
    };
    MultiSlider.prototype.renderLabels = function () {
        var _this = this;
        if (this.props.labelRenderer === false) {
            return null;
        }
        var values = this.getLabelValues();
        var _a = this.props, max = _a.max, min = _a.min;
        var labels = values.map(function (step, i) {
            var offsetPercentage = formatPercentage((step - min) / (max - min));
            var style = _this.props.vertical ? { bottom: offsetPercentage } : { left: offsetPercentage };
            return (React.createElement("div", { className: Classes.SLIDER_LABEL, key: i, style: style }, _this.formatLabel(step)));
        });
        return labels;
    };
    MultiSlider.prototype.renderTracks = function () {
        var trackStops = getSortedHandleProps(this.props);
        trackStops.push({ value: this.props.max });
        // render from current to previous, then increment previous
        var previous = { value: this.props.min };
        var handles = [];
        for (var index = 0; index < trackStops.length; index++) {
            var current = trackStops[index];
            handles.push(this.renderTrackFill(index, previous, current));
            previous = current;
        }
        return handles;
    };
    MultiSlider.prototype.renderTrackFill = function (index, start, end) {
        // ensure startRatio <= endRatio
        var _a = [this.getOffsetRatio(start.value), this.getOffsetRatio(end.value)].sort(function (left, right) { return left - right; }), startRatio = _a[0], endRatio = _a[1];
        var startOffset = formatPercentage(startRatio);
        var endOffset = formatPercentage(1 - endRatio);
        var orientationStyle = this.props.vertical
            ? { bottom: startOffset, top: endOffset, left: 0 }
            : { left: startOffset, right: endOffset, top: 0 };
        var style = __assign(__assign({}, orientationStyle), (start.trackStyleAfter || end.trackStyleBefore || {}));
        var classes = classNames(Classes.SLIDER_PROGRESS, Classes.intentClass(this.getTrackIntent(start, end)));
        return React.createElement("div", { key: "track-".concat(index), className: classes, style: style });
    };
    MultiSlider.prototype.renderHandles = function () {
        var _this = this;
        var _a = this.props, disabled = _a.disabled, max = _a.max, min = _a.min, stepSize = _a.stepSize, vertical = _a.vertical;
        var handleProps = getSortedInteractiveHandleProps(this.props);
        if (handleProps.length === 0) {
            return null;
        }
        return handleProps.map(function (_a, index) {
            var _b;
            var value = _a.value, type = _a.type, className = _a.className, htmlProps = _a.htmlProps;
            return (React.createElement(Handle, { htmlProps: htmlProps, className: classNames((_b = {},
                    _b[Classes.START] = type === HandleType.START,
                    _b[Classes.END] = type === HandleType.END,
                    _b), className), disabled: disabled, key: "".concat(index, "-").concat(handleProps.length), label: _this.formatLabel(value, true), max: max, min: min, onChange: _this.getHandlerForIndex(index, _this.handleChange), onRelease: _this.getHandlerForIndex(index, _this.handleRelease), ref: _this.addHandleRef, stepSize: stepSize, tickSize: _this.state.tickSize, tickSizeRatio: _this.state.tickSizeRatio, value: value, vertical: vertical }));
        });
    };
    MultiSlider.prototype.nearestHandleForValue = function (handles, getOffset) {
        return argMin(handles, function (handle) {
            var offset = getOffset(handle);
            var offsetValue = handle.clientToValue(offset);
            var handleValue = handle.props.value;
            return Math.abs(offsetValue - handleValue);
        });
    };
    MultiSlider.prototype.getNewHandleValues = function (newValue, oldIndex) {
        var handleProps = getSortedInteractiveHandleProps(this.props);
        var oldValues = handleProps.map(function (handle) { return handle.value; });
        var newValues = oldValues.slice();
        newValues[oldIndex] = newValue;
        newValues.sort(function (left, right) { return left - right; });
        var newIndex = newValues.indexOf(newValue);
        var lockIndex = this.findFirstLockedHandleIndex(oldIndex, newIndex);
        if (lockIndex === -1) {
            fillValues(newValues, oldIndex, newIndex, newValue);
        }
        else {
            // If pushing past a locked handle, discard the new value and only make the updates to clamp values against the lock.
            var lockValue = oldValues[lockIndex];
            fillValues(oldValues, oldIndex, lockIndex, lockValue);
            return oldValues;
        }
        return newValues;
    };
    MultiSlider.prototype.findFirstLockedHandleIndex = function (startIndex, endIndex) {
        var inc = startIndex < endIndex ? 1 : -1;
        var handleProps = getSortedInteractiveHandleProps(this.props);
        for (var index = startIndex + inc; index !== endIndex + inc; index += inc) {
            if (handleProps[index].interactionKind !== HandleInteractionKind.PUSH) {
                return index;
            }
        }
        return -1;
    };
    MultiSlider.prototype.getLabelValues = function () {
        var _a = this.props, labelStepSize = _a.labelStepSize, labelValues = _a.labelValues, min = _a.min, max = _a.max;
        var values = [];
        if (labelValues !== undefined) {
            values = labelValues.slice();
        }
        else {
            for (var i = min; i < max || Utils.approxEqual(i, max); i += labelStepSize !== null && labelStepSize !== void 0 ? labelStepSize : 1) {
                values.push(i);
            }
        }
        return values;
    };
    MultiSlider.prototype.getOffsetRatio = function (value) {
        return Utils.clamp((value - this.props.min) * this.state.tickSizeRatio, 0, 1);
    };
    MultiSlider.prototype.getTrackIntent = function (start, end) {
        if (!this.props.showTrackFill) {
            return Intent.NONE;
        }
        if (start.intentAfter !== undefined) {
            return start.intentAfter;
        }
        else if (end !== undefined && end.intentBefore !== undefined) {
            return end.intentBefore;
        }
        return this.props.defaultTrackIntent;
    };
    MultiSlider.prototype.updateTickSize = function () {
        if (this.trackElement != null) {
            var trackSize = this.props.vertical ? this.trackElement.clientHeight : this.trackElement.clientWidth;
            var tickSizeRatio = 1 / (this.props.max - this.props.min);
            var tickSize = trackSize * tickSizeRatio;
            this.setState({ tickSize: tickSize, tickSizeRatio: tickSizeRatio });
        }
    };
    MultiSlider.defaultSliderProps = {
        disabled: false,
        max: 10,
        min: 0,
        showTrackFill: true,
        stepSize: 1,
        vertical: false,
    };
    MultiSlider.defaultProps = __assign(__assign({}, MultiSlider.defaultSliderProps), { defaultTrackIntent: Intent.NONE });
    MultiSlider.displayName = "".concat(DISPLAYNAME_PREFIX, ".MultiSlider");
    MultiSlider.Handle = MultiSliderHandle;
    return MultiSlider;
}(AbstractPureComponent));
export { MultiSlider };
function getLabelPrecision(_a) {
    var labelPrecision = _a.labelPrecision, _b = _a.stepSize, stepSize = _b === void 0 ? MultiSlider.defaultSliderProps.stepSize : _b;
    // infer default label precision from stepSize because that's how much the handle moves.
    return labelPrecision == null ? Utils.countDecimalPlaces(stepSize) : labelPrecision;
}
function getSortedInteractiveHandleProps(props) {
    return getSortedHandleProps(props, function (childProps) { return childProps.interactionKind !== HandleInteractionKind.NONE; });
}
function getSortedHandleProps(_a, predicate) {
    var children = _a.children;
    if (predicate === void 0) { predicate = function () { return true; }; }
    var maybeHandles = React.Children.map(children, function (child) {
        return Utils.isElementOfType(child, MultiSlider.Handle) && predicate(child.props) ? child.props : null;
    });
    var handles = maybeHandles != null ? maybeHandles : [];
    handles = handles.filter(function (handle) { return handle !== null; });
    handles.sort(function (left, right) { return left.value - right.value; });
    return handles;
}
//# sourceMappingURL=multiSlider.js.map
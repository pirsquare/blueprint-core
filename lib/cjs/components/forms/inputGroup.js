"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputGroup = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var common_1 = require("../../common");
var Errors = tslib_1.__importStar(require("../../common/errors"));
var props_1 = require("../../common/props");
var icon_1 = require("../icon/icon");
var asyncControllableInput_1 = require("./asyncControllableInput");
var NON_HTML_PROPS = ["onValueChange"];
/**
 * Input group component.
 *
 * @see https://blueprintjs.com/docs/#core/components/input-group
 */
var InputGroup = /** @class */ (function (_super) {
    tslib_1.__extends(InputGroup, _super);
    function InputGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        _this.leftElement = null;
        _this.rightElement = null;
        _this.refHandlers = {
            leftElement: function (ref) { return (_this.leftElement = ref); },
            rightElement: function (ref) { return (_this.rightElement = ref); },
        };
        _this.handleInputChange = function (event) {
            var _a, _b, _c, _d;
            var value = event.target.value;
            (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, event);
            (_d = (_c = _this.props).onValueChange) === null || _d === void 0 ? void 0 : _d.call(_c, value, event.target);
        };
        return _this;
    }
    InputGroup.prototype.render = function () {
        var _a;
        var _b = this.props, _c = _b.asyncControl, asyncControl = _c === void 0 ? false : _c, className = _b.className, disabled = _b.disabled, fill = _b.fill, inputClassName = _b.inputClassName, inputRef = _b.inputRef, intent = _b.intent, large = _b.large, readOnly = _b.readOnly, round = _b.round, small = _b.small, _d = _b.tagName, tagName = _d === void 0 ? "div" : _d;
        var inputGroupClasses = (0, classnames_1.default)(common_1.Classes.INPUT_GROUP, common_1.Classes.intentClass(intent), (_a = {},
            _a[common_1.Classes.DISABLED] = disabled,
            _a[common_1.Classes.READ_ONLY] = readOnly,
            _a[common_1.Classes.FILL] = fill,
            _a[common_1.Classes.LARGE] = large,
            _a[common_1.Classes.SMALL] = small,
            _a[common_1.Classes.ROUND] = round,
            _a), className);
        var style = tslib_1.__assign(tslib_1.__assign({}, this.props.style), { paddingLeft: this.state.leftElementWidth, paddingRight: this.state.rightElementWidth });
        var inputProps = tslib_1.__assign(tslib_1.__assign({ type: "text" }, (0, props_1.removeNonHTMLProps)(this.props, NON_HTML_PROPS, true)), { "aria-disabled": disabled, className: (0, classnames_1.default)(common_1.Classes.INPUT, inputClassName), onChange: this.handleInputChange, style: style });
        var inputElement = asyncControl ? (React.createElement(asyncControllableInput_1.AsyncControllableInput, tslib_1.__assign({}, inputProps, { inputRef: inputRef }))) : (React.createElement("input", tslib_1.__assign({}, inputProps, { ref: inputRef })));
        return React.createElement(tagName, { className: inputGroupClasses }, this.maybeRenderLeftElement(), inputElement, this.maybeRenderRightElement());
    };
    InputGroup.prototype.componentDidMount = function () {
        this.updateInputWidth();
    };
    InputGroup.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, leftElement = _a.leftElement, rightElement = _a.rightElement;
        if (prevProps.leftElement !== leftElement || prevProps.rightElement !== rightElement) {
            this.updateInputWidth();
        }
    };
    InputGroup.prototype.validateProps = function (props) {
        if (props.leftElement != null && props.leftIcon != null) {
            console.warn(Errors.INPUT_WARN_LEFT_ELEMENT_LEFT_ICON_MUTEX);
        }
    };
    InputGroup.prototype.maybeRenderLeftElement = function () {
        var _a = this.props, leftElement = _a.leftElement, leftIcon = _a.leftIcon;
        if (leftElement != null) {
            return (React.createElement("span", { className: common_1.Classes.INPUT_LEFT_CONTAINER, ref: this.refHandlers.leftElement }, leftElement));
        }
        else if (leftIcon != null) {
            return React.createElement(icon_1.Icon, { icon: leftIcon, "aria-hidden": true, tabIndex: -1 });
        }
        return undefined;
    };
    InputGroup.prototype.maybeRenderRightElement = function () {
        var rightElement = this.props.rightElement;
        if (rightElement == null) {
            return undefined;
        }
        return (React.createElement("span", { className: common_1.Classes.INPUT_ACTION, ref: this.refHandlers.rightElement }, rightElement));
    };
    InputGroup.prototype.updateInputWidth = function () {
        var _a = this.state, leftElementWidth = _a.leftElementWidth, rightElementWidth = _a.rightElementWidth;
        if (this.leftElement != null) {
            var clientWidth = this.leftElement.clientWidth;
            // small threshold to prevent infinite loops
            if (leftElementWidth === undefined || Math.abs(clientWidth - leftElementWidth) > 2) {
                this.setState({ leftElementWidth: clientWidth });
            }
        }
        else {
            this.setState({ leftElementWidth: undefined });
        }
        if (this.rightElement != null) {
            var clientWidth = this.rightElement.clientWidth;
            // small threshold to prevent infinite loops
            if (rightElementWidth === undefined || Math.abs(clientWidth - rightElementWidth) > 2) {
                this.setState({ rightElementWidth: clientWidth });
            }
        }
        else {
            this.setState({ rightElementWidth: undefined });
        }
    };
    InputGroup.displayName = "".concat(props_1.DISPLAYNAME_PREFIX, ".InputGroup");
    return InputGroup;
}(common_1.AbstractPureComponent));
exports.InputGroup = InputGroup;
//# sourceMappingURL=inputGroup.js.map
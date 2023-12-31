"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextArea = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var common_1 = require("../../common");
var props_1 = require("../../common/props");
var asyncControllableTextArea_1 = require("./asyncControllableTextArea");
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
/**
 * Text area component.
 *
 * @see https://blueprintjs.com/docs/#core/components/text-area
 */
var TextArea = /** @class */ (function (_super) {
    tslib_1.__extends(TextArea, _super);
    function TextArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        // used to measure and set the height of the component on first mount
        _this.textareaElement = null;
        _this.handleRef = (0, common_1.refHandler)(_this, "textareaElement", _this.props.inputRef);
        _this.maybeSyncHeightToScrollHeight = function () {
            // eslint-disable-next-line deprecation/deprecation
            var _a = _this.props, autoResize = _a.autoResize, growVertically = _a.growVertically;
            if (_this.textareaElement != null) {
                var scrollHeight = _this.textareaElement.scrollHeight;
                if (autoResize) {
                    // set height to 0 to force scrollHeight to be the minimum height to fit
                    // the content of the textarea
                    _this.textareaElement.style.height = "0px";
                    _this.textareaElement.style.height = scrollHeight.toString() + "px";
                    _this.setState({ height: scrollHeight });
                }
                else if (growVertically && scrollHeight > 0) {
                    // N.B. this code path will be deleted in Blueprint v6.0 when `growVertically` is removed
                    _this.setState({ height: scrollHeight });
                }
            }
            if (_this.props.autoResize && _this.textareaElement != null) {
                // set height to 0 to force scrollHeight to be the minimum height to fit
                // the content of the textarea
                _this.textareaElement.style.height = "0px";
                var scrollHeight = _this.textareaElement.scrollHeight;
                _this.textareaElement.style.height = scrollHeight.toString() + "px";
                _this.setState({ height: scrollHeight });
            }
        };
        _this.handleChange = function (e) {
            var _a, _b;
            _this.maybeSyncHeightToScrollHeight();
            (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        };
        return _this;
    }
    TextArea.prototype.componentDidMount = function () {
        this.maybeSyncHeightToScrollHeight();
    };
    TextArea.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.inputRef !== this.props.inputRef) {
            (0, common_1.setRef)(prevProps.inputRef, null);
            this.handleRef = (0, common_1.refHandler)(this, "textareaElement", this.props.inputRef);
            (0, common_1.setRef)(this.props.inputRef, this.textareaElement);
        }
        if (prevProps.value !== this.props.value || prevProps.style !== this.props.style) {
            this.maybeSyncHeightToScrollHeight();
        }
    };
    TextArea.prototype.render = function () {
        var _a;
        var _b = this.props, asyncControl = _b.asyncControl, autoResize = _b.autoResize, className = _b.className, fill = _b.fill, 
        // eslint-disable-next-line deprecation/deprecation
        growVertically = _b.growVertically, inputRef = _b.inputRef, intent = _b.intent, large = _b.large, small = _b.small, htmlProps = tslib_1.__rest(_b, ["asyncControl", "autoResize", "className", "fill", "growVertically", "inputRef", "intent", "large", "small"]);
        var rootClasses = (0, classnames_1.default)(common_1.Classes.INPUT, common_1.Classes.TEXT_AREA, common_1.Classes.intentClass(intent), (_a = {},
            _a[common_1.Classes.FILL] = fill,
            _a[common_1.Classes.LARGE] = large,
            _a[common_1.Classes.SMALL] = small,
            _a[common_1.Classes.TEXT_AREA_AUTO_RESIZE] = autoResize,
            _a), className);
        // add explicit height style while preserving user-supplied styles if they exist
        var _c = htmlProps.style, style = _c === void 0 ? {} : _c;
        if ((autoResize || growVertically) && this.state.height != null) {
            // this style object becomes non-extensible when mounted (at least in the enzyme renderer),
            // so we make a new one to add a property
            style = tslib_1.__assign(tslib_1.__assign({}, style), { height: "".concat(this.state.height, "px") });
        }
        var TextAreaComponent = asyncControl ? asyncControllableTextArea_1.AsyncControllableTextArea : "textarea";
        return (React.createElement(TextAreaComponent, tslib_1.__assign({}, htmlProps, { className: rootClasses, onChange: this.handleChange, style: style, ref: this.handleRef })));
    };
    TextArea.defaultProps = {
        autoResize: false,
        fill: false,
        large: false,
        small: false,
    };
    TextArea.displayName = "".concat(props_1.DISPLAYNAME_PREFIX, ".TextArea");
    return TextArea;
}(common_1.AbstractPureComponent));
exports.TextArea = TextArea;
//# sourceMappingURL=textArea.js.map
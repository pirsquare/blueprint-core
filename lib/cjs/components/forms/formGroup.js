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
exports.FormGroup = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var common_1 = require("../../common");
var props_1 = require("../../common/props");
/**
 * Form group component.
 *
 * @see https://blueprintjs.com/docs/#core/components/form-group
 */
var FormGroup = /** @class */ (function (_super) {
    tslib_1.__extends(FormGroup, _super);
    function FormGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormGroup.prototype.render = function () {
        var _a = this.props, children = _a.children, contentClassName = _a.contentClassName, helperText = _a.helperText, label = _a.label, labelFor = _a.labelFor, labelInfo = _a.labelInfo, style = _a.style, subLabel = _a.subLabel;
        return (React.createElement("div", { className: this.getClassName(), style: style },
            label && (React.createElement("label", { className: common_1.Classes.LABEL, htmlFor: labelFor },
                label,
                " ",
                React.createElement("span", { className: common_1.Classes.TEXT_MUTED }, labelInfo))),
            subLabel && React.createElement("div", { className: common_1.Classes.FORM_GROUP_SUB_LABEL }, subLabel),
            React.createElement("div", { className: (0, classnames_1.default)(common_1.Classes.FORM_CONTENT, contentClassName) },
                children,
                helperText && React.createElement("div", { className: common_1.Classes.FORM_HELPER_TEXT }, helperText))));
    };
    FormGroup.prototype.getClassName = function () {
        var _a;
        var _b = this.props, className = _b.className, disabled = _b.disabled, fill = _b.fill, inline = _b.inline, intent = _b.intent;
        return (0, classnames_1.default)(common_1.Classes.FORM_GROUP, common_1.Classes.intentClass(intent), (_a = {},
            _a[common_1.Classes.DISABLED] = disabled,
            _a[common_1.Classes.FILL] = fill,
            _a[common_1.Classes.INLINE] = inline,
            _a), className);
    };
    FormGroup.displayName = "".concat(props_1.DISPLAYNAME_PREFIX, ".FormGroup");
    return FormGroup;
}(common_1.AbstractPureComponent));
exports.FormGroup = FormGroup;
//# sourceMappingURL=formGroup.js.map
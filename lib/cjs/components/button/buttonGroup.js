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
exports.ButtonGroup = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var common_1 = require("../../common");
var props_1 = require("../../common/props");
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
/**
 * Button group component.
 *
 * @see https://blueprintjs.com/docs/#core/components/button-group
 */
exports.ButtonGroup = React.forwardRef(function (props, ref) {
    var _a;
    var alignText = props.alignText, className = props.className, fill = props.fill, minimal = props.minimal, large = props.large, vertical = props.vertical, htmlProps = tslib_1.__rest(props, ["alignText", "className", "fill", "minimal", "large", "vertical"]);
    var buttonGroupClasses = (0, classnames_1.default)(common_1.Classes.BUTTON_GROUP, (_a = {},
        _a[common_1.Classes.FILL] = fill,
        _a[common_1.Classes.LARGE] = large,
        _a[common_1.Classes.MINIMAL] = minimal,
        _a[common_1.Classes.VERTICAL] = vertical,
        _a), common_1.Classes.alignmentClass(alignText), className);
    return (React.createElement("div", tslib_1.__assign({}, htmlProps, { ref: ref, className: buttonGroupClasses }), props.children));
});
exports.ButtonGroup.displayName = "".concat(props_1.DISPLAYNAME_PREFIX, ".ButtonGroup");
//# sourceMappingURL=buttonGroup.js.map
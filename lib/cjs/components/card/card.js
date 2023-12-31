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
exports.Card = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var common_1 = require("../../common");
var props_1 = require("../../common/props");
/**
 * Card component.
 *
 * @see https://blueprintjs.com/docs/#core/components/card
 */
exports.Card = React.forwardRef(function (props, ref) {
    var _a;
    var className = props.className, elevation = props.elevation, interactive = props.interactive, selected = props.selected, compact = props.compact, htmlProps = tslib_1.__rest(props, ["className", "elevation", "interactive", "selected", "compact"]);
    var classes = (0, classnames_1.default)(className, common_1.Classes.CARD, common_1.Classes.elevationClass(elevation), (_a = {},
        _a[common_1.Classes.INTERACTIVE] = interactive,
        _a[common_1.Classes.COMPACT] = compact,
        _a[common_1.Classes.SELECTED] = selected,
        _a));
    return React.createElement("div", tslib_1.__assign({ className: classes, ref: ref }, htmlProps));
});
exports.Card.defaultProps = {
    elevation: common_1.Elevation.ZERO,
    interactive: false,
};
exports.Card.displayName = "".concat(props_1.DISPLAYNAME_PREFIX, ".Card");
//# sourceMappingURL=card.js.map
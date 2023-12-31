"use strict";
/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
exports.CardList = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var common_1 = require("../../common");
var card_1 = require("../card/card");
exports.CardList = React.forwardRef(function (props, ref) {
    var _a;
    var bordered = props.bordered, className = props.className, children = props.children, compact = props.compact, htmlProps = tslib_1.__rest(props, ["bordered", "className", "children", "compact"]);
    var classes = (0, classnames_1.default)(className, common_1.Classes.CARD_LIST, (_a = {},
        _a[common_1.Classes.CARD_LIST_BORDERED] = bordered,
        _a[common_1.Classes.COMPACT] = compact,
        _a));
    return (React.createElement(card_1.Card, tslib_1.__assign({ role: "list", elevation: common_1.Elevation.ZERO, className: classes }, htmlProps, { ref: ref }), children));
});
exports.CardList.defaultProps = {
    bordered: true,
    compact: false,
};
exports.CardList.displayName = "".concat(common_1.DISPLAYNAME_PREFIX, ".CardList");
//# sourceMappingURL=cardList.js.map
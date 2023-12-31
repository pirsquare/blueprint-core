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
exports.Tag = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var icons_1 = require("@blueprintjs/icons");
var common_1 = require("../../common");
var utils_1 = require("../../common/utils");
var icon_1 = require("../icon/icon");
var text_1 = require("../text/text");
/**
 * Tag component.
 *
 * @see https://blueprintjs.com/docs/#core/components/tag
 */
exports.Tag = React.forwardRef(function (props, ref) {
    var _a;
    var active = props.active, children = props.children, className = props.className, fill = props.fill, icon = props.icon, intent = props.intent, interactive = props.interactive, large = props.large, minimal = props.minimal, multiline = props.multiline, onRemove = props.onRemove, rightIcon = props.rightIcon, round = props.round, _b = props.tabIndex, tabIndex = _b === void 0 ? 0 : _b, htmlTitle = props.htmlTitle, htmlProps = tslib_1.__rest(props, ["active", "children", "className", "fill", "icon", "intent", "interactive", "large", "minimal", "multiline", "onRemove", "rightIcon", "round", "tabIndex", "htmlTitle"]);
    var isRemovable = common_1.Utils.isFunction(onRemove);
    var tagClasses = (0, classnames_1.default)(common_1.Classes.TAG, common_1.Classes.intentClass(intent), (_a = {},
        _a[common_1.Classes.ACTIVE] = active,
        _a[common_1.Classes.FILL] = fill,
        _a[common_1.Classes.INTERACTIVE] = interactive,
        _a[common_1.Classes.LARGE] = large,
        _a[common_1.Classes.MINIMAL] = minimal,
        _a[common_1.Classes.ROUND] = round,
        _a), className);
    var isLarge = large || tagClasses.indexOf(common_1.Classes.LARGE) >= 0;
    var handleRemoveClick = function (e) {
        var _a;
        (_a = props.onRemove) === null || _a === void 0 ? void 0 : _a.call(props, e, props);
    };
    var removeButton = isRemovable ? (React.createElement("button", { "aria-label": "Remove tag", type: "button", className: common_1.Classes.TAG_REMOVE, onClick: handleRemoveClick, tabIndex: tabIndex },
        React.createElement(icons_1.SmallCross, { size: isLarge ? icons_1.IconSize.LARGE : icons_1.IconSize.STANDARD }))) : null;
    return (React.createElement("span", tslib_1.__assign({}, htmlProps, { className: tagClasses, tabIndex: interactive ? tabIndex : undefined, ref: ref }),
        React.createElement(icon_1.Icon, { icon: icon }),
        !(0, utils_1.isReactNodeEmpty)(children) && (React.createElement(text_1.Text, { className: common_1.Classes.FILL, ellipsize: !multiline, tagName: "span", title: htmlTitle }, children)),
        React.createElement(icon_1.Icon, { icon: rightIcon }),
        removeButton));
});
exports.Tag.displayName = "".concat(common_1.DISPLAYNAME_PREFIX, ".Tag");
//# sourceMappingURL=tag.js.map
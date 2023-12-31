"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
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
exports.generateTabTitleId = exports.generateTabPanelId = exports.TabTitle = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var common_1 = require("../../common");
var props_1 = require("../../common/props");
var icon_1 = require("../icon/icon");
var tag_1 = require("../tag/tag");
var TabTitle = /** @class */ (function (_super) {
    tslib_1.__extends(TabTitle, _super);
    function TabTitle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (e) { return _this.props.onClick(_this.props.id, e); };
        return _this;
    }
    TabTitle.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, disabled = _a.disabled, id = _a.id, parentId = _a.parentId, selected = _a.selected, title = _a.title, icon = _a.icon, tagContent = _a.tagContent, tagProps = _a.tagProps, htmlProps = tslib_1.__rest(_a, ["className", "children", "disabled", "id", "parentId", "selected", "title", "icon", "tagContent", "tagProps"]);
        var intent = selected ? common_1.Intent.PRIMARY : common_1.Intent.NONE;
        return (React.createElement("div", tslib_1.__assign({}, (0, props_1.removeNonHTMLProps)(htmlProps), { "aria-controls": generateTabPanelId(parentId, id), "aria-disabled": disabled, "aria-expanded": selected, "aria-selected": selected, className: (0, classnames_1.default)(common_1.Classes.TAB, className), "data-tab-id": id, id: generateTabTitleId(parentId, id), onClick: disabled ? undefined : this.handleClick, role: "tab", tabIndex: disabled ? undefined : selected ? 0 : -1 }),
            icon != null && React.createElement(icon_1.Icon, { icon: icon, intent: intent, className: common_1.Classes.TAB_ICON }),
            title,
            children,
            tagContent != null && (React.createElement(tag_1.Tag, tslib_1.__assign({ minimal: true, intent: intent }, tagProps, { className: (0, classnames_1.default)(common_1.Classes.TAB_TAG, tagProps === null || tagProps === void 0 ? void 0 : tagProps.className) }), tagContent))));
    };
    TabTitle.displayName = "".concat(props_1.DISPLAYNAME_PREFIX, ".TabTitle");
    return TabTitle;
}(common_1.AbstractPureComponent));
exports.TabTitle = TabTitle;
function generateTabPanelId(parentId, tabId) {
    return "".concat(common_1.Classes.TAB_PANEL, "_").concat(parentId, "_").concat(tabId);
}
exports.generateTabPanelId = generateTabPanelId;
function generateTabTitleId(parentId, tabId) {
    return "".concat(common_1.Classes.TAB, "-title_").concat(parentId, "_").concat(tabId);
}
exports.generateTabTitleId = generateTabTitleId;
//# sourceMappingURL=tabTitle.js.map
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
import { __assign, __extends, __rest } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { AbstractPureComponent, Classes, Intent } from "../../common";
import { DISPLAYNAME_PREFIX, removeNonHTMLProps } from "../../common/props";
import { Icon } from "../icon/icon";
import { Tag } from "../tag/tag";
var TabTitle = /** @class */ (function (_super) {
    __extends(TabTitle, _super);
    function TabTitle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (e) { return _this.props.onClick(_this.props.id, e); };
        return _this;
    }
    TabTitle.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, disabled = _a.disabled, id = _a.id, parentId = _a.parentId, selected = _a.selected, title = _a.title, icon = _a.icon, tagContent = _a.tagContent, tagProps = _a.tagProps, htmlProps = __rest(_a, ["className", "children", "disabled", "id", "parentId", "selected", "title", "icon", "tagContent", "tagProps"]);
        var intent = selected ? Intent.PRIMARY : Intent.NONE;
        return (React.createElement("div", __assign({}, removeNonHTMLProps(htmlProps), { "aria-controls": generateTabPanelId(parentId, id), "aria-disabled": disabled, "aria-expanded": selected, "aria-selected": selected, className: classNames(Classes.TAB, className), "data-tab-id": id, id: generateTabTitleId(parentId, id), onClick: disabled ? undefined : this.handleClick, role: "tab", tabIndex: disabled ? undefined : selected ? 0 : -1 }),
            icon != null && React.createElement(Icon, { icon: icon, intent: intent, className: Classes.TAB_ICON }),
            title,
            children,
            tagContent != null && (React.createElement(Tag, __assign({ minimal: true, intent: intent }, tagProps, { className: classNames(Classes.TAB_TAG, tagProps === null || tagProps === void 0 ? void 0 : tagProps.className) }), tagContent))));
    };
    TabTitle.displayName = "".concat(DISPLAYNAME_PREFIX, ".TabTitle");
    return TabTitle;
}(AbstractPureComponent));
export { TabTitle };
export function generateTabPanelId(parentId, tabId) {
    return "".concat(Classes.TAB_PANEL, "_").concat(parentId, "_").concat(tabId);
}
export function generateTabTitleId(parentId, tabId) {
    return "".concat(Classes.TAB, "-title_").concat(parentId, "_").concat(tabId);
}
//# sourceMappingURL=tabTitle.js.map
"use strict";
/*
 * Copyright 2022 Palantir Technologies, Inc. All rights reserved.
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
exports.MenuItem = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var icons_1 = require("@blueprintjs/icons");
var common_1 = require("../../common");
var props_1 = require("../../common/props");
var utils_1 = require("../../common/utils");
var icon_1 = require("../icon/icon");
var popover_1 = require("../popover/popover");
var text_1 = require("../text/text");
var menu_1 = require("./menu");
/**
 * Menu item component.
 *
 * @see https://blueprintjs.com/docs/#core/components/menu.menu-item
 */
exports.MenuItem = React.forwardRef(function (props, ref) {
    var _a, _b;
    var active = props.active, className = props.className, children = props.children, disabled = props.disabled, icon = props.icon, intent = props.intent, labelClassName = props.labelClassName, labelElement = props.labelElement, multiline = props.multiline, popoverProps = props.popoverProps, _c = props.roleStructure, roleStructure = _c === void 0 ? "menuitem" : _c, selected = props.selected, shouldDismissPopover = props.shouldDismissPopover, submenuProps = props.submenuProps, text = props.text, textClassName = props.textClassName, _d = props.tagName, tagName = _d === void 0 ? "a" : _d, htmlTitle = props.htmlTitle, htmlProps = tslib_1.__rest(props, ["active", "className", "children", "disabled", "icon", "intent", "labelClassName", "labelElement", "multiline", "popoverProps", "roleStructure", "selected", "shouldDismissPopover", "submenuProps", "text", "textClassName", "tagName", "htmlTitle"]);
    var _e = roleStructure === "listoption" // "listoption": parent has listbox role, or is a <select>
        ? [
            "option",
            undefined,
            Boolean(selected), // aria-selected prop
        ]
        : roleStructure === "menuitem" // "menuitem": parent has menu role
            ? [
                "none",
                "menuitem",
                undefined, // don't set aria-selected prop
            ]
            : roleStructure === "none" // "none": allows wrapping MenuItem in custom <li>
                ? [
                    "none",
                    undefined,
                    undefined, // don't set aria-selected prop
                ]
                : // roleStructure === "listitem"
                    [
                        undefined,
                        undefined,
                        undefined, // don't set aria-selected prop
                    ], liRole = _e[0], targetRole = _e[1], ariaSelected = _e[2];
    var isSelectable = roleStructure === "listoption";
    var isSelected = isSelectable && selected;
    var hasIcon = icon != null;
    var hasSubmenu = children != null;
    var intentClass = common_1.Classes.intentClass(intent);
    var anchorClasses = (0, classnames_1.default)(common_1.Classes.MENU_ITEM, intentClass, (_a = {},
        _a[common_1.Classes.ACTIVE] = active,
        _a[common_1.Classes.DISABLED] = disabled,
        // prevent popover from closing when clicking on submenu trigger or disabled item
        _a[common_1.Classes.POPOVER_DISMISS] = shouldDismissPopover && !disabled && !hasSubmenu,
        _a[common_1.Classes.MENU_ITEM_IS_SELECTABLE] = isSelectable,
        _a[common_1.Classes.SELECTED] = isSelected,
        _a), className);
    var maybeLabel = props.label == null && labelElement == null ? null : (React.createElement("span", { className: (0, classnames_1.default)(common_1.Classes.MENU_ITEM_LABEL, labelClassName) },
        props.label,
        labelElement));
    var target = React.createElement(tagName, tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ 
        // for menuitems, onClick when enter key pressed doesn't take effect like it does for a button-- fix this
        onKeyDown: (0, utils_1.clickElementOnKeyPress)(["Enter", " "]), 
        // if hasSubmenu, must apply correct role and tabIndex to the outer popover target <span> instead of this target element
        role: hasSubmenu ? "none" : targetRole, tabIndex: hasSubmenu ? -1 : 0 }, (0, props_1.removeNonHTMLProps)(htmlProps)), (disabled ? DISABLED_PROPS : {})), { className: anchorClasses }), isSelected ? React.createElement(icons_1.SmallTick, { className: common_1.Classes.MENU_ITEM_SELECTED_ICON }) : undefined, hasIcon ? (
    // wrap icon in a <span> in case `icon` is a custom element rather than a built-in icon identifier,
    // so that we always render this class
    React.createElement("span", { className: common_1.Classes.MENU_ITEM_ICON },
        React.createElement(icon_1.Icon, { icon: icon, "aria-hidden": true, tabIndex: -1 }))) : undefined, React.createElement(text_1.Text, { className: (0, classnames_1.default)(common_1.Classes.FILL, textClassName), ellipsize: !multiline, title: htmlTitle }, text), maybeLabel, hasSubmenu ? React.createElement(icons_1.CaretRight, { className: common_1.Classes.MENU_SUBMENU_ICON, title: "Open sub menu" }) : undefined);
    var liClasses = (0, classnames_1.default)((_b = {}, _b[common_1.Classes.MENU_SUBMENU] = hasSubmenu, _b));
    return (React.createElement("li", { className: liClasses, ref: ref, role: liRole, "aria-selected": ariaSelected }, children == null ? (target) : (React.createElement(popover_1.Popover, tslib_1.__assign({ autoFocus: false, captureDismiss: false, disabled: disabled, enforceFocus: false, hoverCloseDelay: 0, interactionKind: "hover", modifiers: SUBMENU_POPOVER_MODIFIERS, targetProps: { role: targetRole, tabIndex: 0 }, placement: "right-start", usePortal: false }, popoverProps, { content: React.createElement(menu_1.Menu, tslib_1.__assign({}, submenuProps), children), minimal: true, popoverClassName: (0, classnames_1.default)(common_1.Classes.MENU_SUBMENU, popoverProps === null || popoverProps === void 0 ? void 0 : popoverProps.popoverClassName) }), target))));
});
exports.MenuItem.defaultProps = {
    active: false,
    disabled: false,
    multiline: false,
    popoverProps: {},
    selected: undefined,
    shouldDismissPopover: true,
    text: "",
};
exports.MenuItem.displayName = "".concat(props_1.DISPLAYNAME_PREFIX, ".MenuItem");
var SUBMENU_POPOVER_MODIFIERS = {
    // 20px padding - scrollbar width + a bit
    flip: { options: { rootBoundary: "viewport", padding: 20 }, enabled: true },
    // shift popover up 5px so MenuItems align
    offset: { options: { offset: [-5, 0] }, enabled: true },
    preventOverflow: { options: { rootBoundary: "viewport", padding: 20 }, enabled: true },
};
// props to ignore when disabled
var DISABLED_PROPS = {
    "aria-disabled": true,
    href: undefined,
    onClick: undefined,
    onMouseDown: undefined,
    onMouseEnter: undefined,
    onMouseLeave: undefined,
    tabIndex: -1,
};
//# sourceMappingURL=menuItem.js.map
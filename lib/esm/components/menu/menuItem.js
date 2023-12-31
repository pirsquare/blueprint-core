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
import { __assign, __rest } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { CaretRight, SmallTick } from "@blueprintjs/icons";
import { Classes } from "../../common";
import { DISPLAYNAME_PREFIX, removeNonHTMLProps } from "../../common/props";
import { clickElementOnKeyPress } from "../../common/utils";
import { Icon } from "../icon/icon";
import { Popover } from "../popover/popover";
import { Text } from "../text/text";
import { Menu } from "./menu";
/**
 * Menu item component.
 *
 * @see https://blueprintjs.com/docs/#core/components/menu.menu-item
 */
export var MenuItem = React.forwardRef(function (props, ref) {
    var _a, _b;
    var active = props.active, className = props.className, children = props.children, disabled = props.disabled, icon = props.icon, intent = props.intent, labelClassName = props.labelClassName, labelElement = props.labelElement, multiline = props.multiline, popoverProps = props.popoverProps, _c = props.roleStructure, roleStructure = _c === void 0 ? "menuitem" : _c, selected = props.selected, shouldDismissPopover = props.shouldDismissPopover, submenuProps = props.submenuProps, text = props.text, textClassName = props.textClassName, _d = props.tagName, tagName = _d === void 0 ? "a" : _d, htmlTitle = props.htmlTitle, htmlProps = __rest(props, ["active", "className", "children", "disabled", "icon", "intent", "labelClassName", "labelElement", "multiline", "popoverProps", "roleStructure", "selected", "shouldDismissPopover", "submenuProps", "text", "textClassName", "tagName", "htmlTitle"]);
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
    var intentClass = Classes.intentClass(intent);
    var anchorClasses = classNames(Classes.MENU_ITEM, intentClass, (_a = {},
        _a[Classes.ACTIVE] = active,
        _a[Classes.DISABLED] = disabled,
        // prevent popover from closing when clicking on submenu trigger or disabled item
        _a[Classes.POPOVER_DISMISS] = shouldDismissPopover && !disabled && !hasSubmenu,
        _a[Classes.MENU_ITEM_IS_SELECTABLE] = isSelectable,
        _a[Classes.SELECTED] = isSelected,
        _a), className);
    var maybeLabel = props.label == null && labelElement == null ? null : (React.createElement("span", { className: classNames(Classes.MENU_ITEM_LABEL, labelClassName) },
        props.label,
        labelElement));
    var target = React.createElement(tagName, __assign(__assign(__assign({ 
        // for menuitems, onClick when enter key pressed doesn't take effect like it does for a button-- fix this
        onKeyDown: clickElementOnKeyPress(["Enter", " "]), 
        // if hasSubmenu, must apply correct role and tabIndex to the outer popover target <span> instead of this target element
        role: hasSubmenu ? "none" : targetRole, tabIndex: hasSubmenu ? -1 : 0 }, removeNonHTMLProps(htmlProps)), (disabled ? DISABLED_PROPS : {})), { className: anchorClasses }), isSelected ? React.createElement(SmallTick, { className: Classes.MENU_ITEM_SELECTED_ICON }) : undefined, hasIcon ? (
    // wrap icon in a <span> in case `icon` is a custom element rather than a built-in icon identifier,
    // so that we always render this class
    React.createElement("span", { className: Classes.MENU_ITEM_ICON },
        React.createElement(Icon, { icon: icon, "aria-hidden": true, tabIndex: -1 }))) : undefined, React.createElement(Text, { className: classNames(Classes.FILL, textClassName), ellipsize: !multiline, title: htmlTitle }, text), maybeLabel, hasSubmenu ? React.createElement(CaretRight, { className: Classes.MENU_SUBMENU_ICON, title: "Open sub menu" }) : undefined);
    var liClasses = classNames((_b = {}, _b[Classes.MENU_SUBMENU] = hasSubmenu, _b));
    return (React.createElement("li", { className: liClasses, ref: ref, role: liRole, "aria-selected": ariaSelected }, children == null ? (target) : (React.createElement(Popover, __assign({ autoFocus: false, captureDismiss: false, disabled: disabled, enforceFocus: false, hoverCloseDelay: 0, interactionKind: "hover", modifiers: SUBMENU_POPOVER_MODIFIERS, targetProps: { role: targetRole, tabIndex: 0 }, placement: "right-start", usePortal: false }, popoverProps, { content: React.createElement(Menu, __assign({}, submenuProps), children), minimal: true, popoverClassName: classNames(Classes.MENU_SUBMENU, popoverProps === null || popoverProps === void 0 ? void 0 : popoverProps.popoverClassName) }), target))));
});
MenuItem.defaultProps = {
    active: false,
    disabled: false,
    multiline: false,
    popoverProps: {},
    selected: undefined,
    shouldDismissPopover: true,
    text: "",
};
MenuItem.displayName = "".concat(DISPLAYNAME_PREFIX, ".MenuItem");
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
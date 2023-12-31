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
import { __assign, __rest } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { Classes, DISPLAYNAME_PREFIX } from "../../common";
import { Popover } from "../popover/popover";
import { Portal } from "../portal/portal";
/**
 * A floating popover which is positioned at a given target offset inside its parent element container.
 * Used to display context menus. Note that this behaves differently from other popover components like
 * Popover and Tooltip, which wrap their children with interaction handlers -- if you're looking for the whole
 * interaction package, use ContextMenu instead.
 *
 * @see https://blueprintjs.com/docs/#core/components/context-menu-popover
 */
export var ContextMenuPopover = React.memo(function _ContextMenuPopover(props) {
    var _a;
    var content = props.content, popoverClassName = props.popoverClassName, onClose = props.onClose, _b = props.isDarkTheme, isDarkTheme = _b === void 0 ? false : _b, _c = props.rootBoundary, rootBoundary = _c === void 0 ? "viewport" : _c, targetOffset = props.targetOffset, _d = props.transitionDuration, transitionDuration = _d === void 0 ? 100 : _d, popoverProps = __rest(props, ["content", "popoverClassName", "onClose", "isDarkTheme", "rootBoundary", "targetOffset", "transitionDuration"]);
    var cancelContextMenu = React.useCallback(function (e) { return e.preventDefault(); }, []);
    // Popover should attach its ref to the virtual target we render inside a Portal, not the "inline" child target
    var renderTarget = React.useCallback(function (_a) {
        var ref = _a.ref;
        return (React.createElement(Portal, null,
            React.createElement("div", { className: Classes.CONTEXT_MENU_VIRTUAL_TARGET, style: targetOffset, ref: ref })));
    }, [targetOffset]);
    var handleInteraction = React.useCallback(function (nextOpenState) {
        if (!nextOpenState) {
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }
    }, []);
    return (React.createElement(Popover, __assign({ placement: "right-start", rootBoundary: rootBoundary, transitionDuration: transitionDuration }, popoverProps, { content: 
        // this prevents right-clicking inside our context menu
        React.createElement("div", { onContextMenu: cancelContextMenu }, content), enforceFocus: false, 
        // Generate key based on offset so that a new Popover instance is created
        // when offset changes, to force recomputing position.
        key: getPopoverKey(targetOffset), hasBackdrop: true, backdropProps: { className: Classes.CONTEXT_MENU_BACKDROP }, minimal: true, onInteraction: handleInteraction, popoverClassName: classNames(Classes.CONTEXT_MENU_POPOVER, popoverClassName, (_a = {},
            _a[Classes.DARK] = isDarkTheme,
            _a)), positioningStrategy: "fixed", renderTarget: renderTarget })));
});
ContextMenuPopover.displayName = "".concat(DISPLAYNAME_PREFIX, ".ContextMenuPopover");
function getPopoverKey(targetOffset) {
    return targetOffset === undefined ? "default" : "".concat(targetOffset.left, "x").concat(targetOffset.top);
}
//# sourceMappingURL=contextMenuPopover.js.map
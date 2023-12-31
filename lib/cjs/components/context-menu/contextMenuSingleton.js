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
exports.hideContextMenu = exports.showContextMenu = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ReactDOM = tslib_1.__importStar(require("react-dom"));
var common_1 = require("../../common");
var contextMenuPopover_1 = require("./contextMenuPopover");
/** DOM element which contains the context menu singleton instance for the imperative ContextMenu APIs. */
var contextMenuElement;
/**
 * Show a context menu at a particular offset from the top-left corner of the document.
 * The menu will appear below-right of this point and will flip to below-left if there is not enough
 * room onscreen. Additional props like `onClose`, `isDarkTheme`, etc. can be forwarded to the `<ContextMenuPopover>`.
 *
 * Context menus created with this API will automatically close when a user clicks outside the popover.
 * You may force them to close by using `hideContextMenu()`.
 *
 * Note that this API relies on global state in the @blueprintjs/core package, and should be used with caution,
 * especially if your build system allows multiple copies of Blueprint libraries to be bundled into an application at
 * once.
 *
 * Alternative APIs to consider which do not have the limitations of global state:
 *  - `<ContextMenu>`
 *  - `<ContextMenuPopover>`
 *
 * @see https://blueprintjs.com/docs/#core/components/context-menu-popover.imperative-api
 */
function showContextMenu(props) {
    if (contextMenuElement === undefined) {
        contextMenuElement = document.createElement("div");
        contextMenuElement.classList.add(common_1.Classes.CONTEXT_MENU);
        document.body.appendChild(contextMenuElement);
    }
    else {
        // N.B. It's important to unmount previous instances of the ContextMenuPopover rendered by this function.
        // Otherwise, React will detect no change in props sent to the already-mounted component, and therefore
        // do nothing after the first call to this function, leading to bugs like https://github.com/palantir/blueprint/issues/5949
        ReactDOM.unmountComponentAtNode(contextMenuElement);
    }
    ReactDOM.render(React.createElement(UncontrolledContextMenuPopover, tslib_1.__assign({}, props)), contextMenuElement);
}
exports.showContextMenu = showContextMenu;
/**
 * Hide a context menu that was created using `showContextMenu()`.
 *
 * Note that this API relies on global state in the @blueprintjs/core package, and should be used with caution.
 *
 * @see https://blueprintjs.com/docs/#core/components/context-menu-popover.imperative-api
 */
function hideContextMenu() {
    if (contextMenuElement !== undefined) {
        ReactDOM.unmountComponentAtNode(contextMenuElement);
        contextMenuElement = undefined;
    }
}
exports.hideContextMenu = hideContextMenu;
/**
 * A simple wrapper around `ContextMenuPopover` which is open by default and uncontrolled.
 * It closes when a user clicks outside the popover.
 */
function UncontrolledContextMenuPopover(props) {
    var _a = React.useState(true), isOpen = _a[0], setIsOpen = _a[1];
    var handleClose = React.useCallback(function () {
        var _a;
        setIsOpen(false);
        (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
    }, [props.onClose]);
    return React.createElement(contextMenuPopover_1.ContextMenuPopover, tslib_1.__assign({ isOpen: isOpen }, props, { onClose: handleClose }));
}
//# sourceMappingURL=contextMenuSingleton.js.map
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
/**
 * @fileoverview This component is DEPRECATED, and the code is frozen.
 * All changes & bugfixes should be made to ContextMenu2 instead.
 */
/* eslint-disable deprecation/deprecation */
import classNames from "classnames";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AbstractPureComponent, Classes } from "../common";
import { Popover } from "../components/popover/popover";
const TRANSITION_DURATION = 100;
/* istanbul ignore next */
/** @deprecated use ContextMenu */
class ContextMenuLegacy extends AbstractPureComponent {
    state = {
        isDarkTheme: false,
        isOpen: false,
    };
    render() {
        // prevent right-clicking in a context menu
        const content = React.createElement("div", { onContextMenu: this.cancelContextMenu }, this.state.menu);
        const popoverClassName = classNames({ [Classes.DARK]: this.state.isDarkTheme });
        // HACKHACK: workaround until we have access to Popper#scheduleUpdate().
        // https://github.com/palantir/blueprint/issues/692
        // Generate key based on offset so a new Popover instance is created
        // when offset changes, to force recomputing position.
        const key = this.state.offset === undefined ? "" : `${this.state.offset.left}x${this.state.offset.top}`;
        // wrap the popover in a positioned div to make sure it is properly
        // offset on the screen.
        return (React.createElement("div", { className: Classes.CONTEXT_MENU, style: this.state.offset },
            React.createElement(Popover, { ...this.props, backdropProps: { onContextMenu: this.handleBackdropContextMenu }, content: content, enforceFocus: false, key: key, hasBackdrop: true, isOpen: this.state.isOpen, minimal: true, rootBoundary: "viewport", onInteraction: this.handlePopoverInteraction, placement: "right-start", popoverClassName: popoverClassName, transitionDuration: TRANSITION_DURATION },
                React.createElement("div", null))));
    }
    show(menu, offset, onClose, isDarkTheme = false) {
        this.setState({ isOpen: true, menu, offset, onClose, isDarkTheme });
    }
    hide() {
        this.state.onClose?.();
        this.setState({ isOpen: false, onClose: undefined });
    }
    cancelContextMenu = (e) => e.preventDefault();
    handleBackdropContextMenu = (e) => {
        // React function to remove from the event pool, useful when using a event within a callback
        e.persist();
        e.preventDefault();
        // wait for backdrop to disappear so we can find the "real" element at event coordinates.
        // timeout duration is equivalent to transition duration so we know it's animated out.
        this.setTimeout(() => {
            // retrigger context menu event at the element beneath the backdrop.
            // if it has a `contextmenu` event handler then it'll be invoked.
            // if it doesn't, no native menu will show (at least on OSX) :(
            const newTarget = document.elementFromPoint(e.clientX, e.clientY);
            const { view, ...newEventInit } = e;
            newTarget?.dispatchEvent(new MouseEvent("contextmenu", newEventInit));
        }, TRANSITION_DURATION);
    };
    handlePopoverInteraction = (nextOpenState) => {
        if (!nextOpenState) {
            // delay the actual hiding till the event queue clears
            // to avoid flicker of opening twice
            this.requestAnimationFrame(() => this.hide());
        }
    };
}
let contextMenuElement;
let contextMenu;
/**
 * Show the given menu element at the given offset from the top-left corner of the viewport.
 * The menu will appear below-right of this point and will flip to below-left if there is not enough
 * room onscreen. The optional callback will be invoked when this menu closes.
 *
 * @deprecated use ContextMenu2
 */
export function show(menu, offset, onClose, isDarkTheme) {
    if (contextMenuElement === undefined) {
        contextMenuElement = document.createElement("div");
        contextMenuElement.classList.add(Classes.CONTEXT_MENU);
        document.body.appendChild(contextMenuElement);
        contextMenu = ReactDOM.render(React.createElement(ContextMenuLegacy, { onClosed: remove }), contextMenuElement);
    }
    contextMenu.show(menu, offset, onClose, isDarkTheme);
}
/** Hide the open context menu. */
export function hide() {
    contextMenu?.hide();
}
/** Return whether a context menu is currently open. */
export function isOpen() {
    return contextMenu != null && contextMenu.state.isOpen;
}
function remove() {
    if (contextMenuElement != null) {
        ReactDOM.unmountComponentAtNode(contextMenuElement);
        contextMenuElement.remove();
        contextMenuElement = undefined;
        contextMenu = undefined;
    }
}
//# sourceMappingURL=contextMenuLegacy.js.map
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
import classNames from "classnames";
import * as React from "react";
import { IconSize, SmallCross } from "@blueprintjs/icons";
import { AbstractPureComponent, Classes, DISPLAYNAME_PREFIX } from "../../common";
import * as Errors from "../../common/errors";
import { uniqueId } from "../../common/utils";
import { Button } from "../button/buttons";
import { H6 } from "../html/html";
import { Icon } from "../icon/icon";
import { Overlay } from "../overlay/overlay";
/**
 * Dialog component.
 *
 * @see https://blueprintjs.com/docs/#core/components/dialog
 */
export class Dialog extends AbstractPureComponent {
    static defaultProps = {
        canOutsideClickClose: true,
        isOpen: false,
    };
    titleId;
    static displayName = `${DISPLAYNAME_PREFIX}.Dialog`;
    constructor(props) {
        super(props);
        const id = uniqueId("bp-dialog");
        this.titleId = `title-${id}`;
    }
    render() {
        return (React.createElement(Overlay, { ...this.props, className: Classes.OVERLAY_SCROLL_CONTAINER, hasBackdrop: true },
            React.createElement("div", { className: Classes.DIALOG_CONTAINER, ref: this.props.containerRef },
                React.createElement("div", { className: classNames(Classes.DIALOG, this.props.className), role: "dialog", "aria-labelledby": this.props["aria-labelledby"] || (this.props.title ? this.titleId : undefined), "aria-describedby": this.props["aria-describedby"], style: this.props.style },
                    this.maybeRenderHeader(),
                    this.props.children))));
    }
    validateProps(props) {
        if (props.title == null) {
            if (props.icon != null) {
                console.warn(Errors.DIALOG_WARN_NO_HEADER_ICON);
            }
            if (props.isCloseButtonShown != null) {
                console.warn(Errors.DIALOG_WARN_NO_HEADER_CLOSE_BUTTON);
            }
        }
    }
    maybeRenderCloseButton() {
        // show close button if prop is undefined or null
        // this gives us a behavior as if the default value were `true`
        if (this.props.isCloseButtonShown !== false) {
            return (React.createElement(Button, { "aria-label": "Close", className: Classes.DIALOG_CLOSE_BUTTON, icon: React.createElement(SmallCross, { size: IconSize.STANDARD }), minimal: true, onClick: this.props.onClose }));
        }
        else {
            return undefined;
        }
    }
    maybeRenderHeader() {
        const { icon, title } = this.props;
        if (title == null) {
            return undefined;
        }
        return (React.createElement("div", { className: Classes.DIALOG_HEADER },
            React.createElement(Icon, { icon: icon, size: IconSize.STANDARD, "aria-hidden": true, tabIndex: -1 }),
            React.createElement(H6, { id: this.titleId }, title),
            this.maybeRenderCloseButton()));
    }
}
//# sourceMappingURL=dialog.js.map
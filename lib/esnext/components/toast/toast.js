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
import classNames from "classnames";
import * as React from "react";
import { Cross } from "@blueprintjs/icons";
import { AbstractPureComponent, Classes } from "../../common";
import { DISPLAYNAME_PREFIX, } from "../../common/props";
import { ButtonGroup } from "../button/buttonGroup";
import { AnchorButton, Button } from "../button/buttons";
import { Icon } from "../icon/icon";
/**
 * Toast component.
 *
 * @see https://blueprintjs.com/docs/#core/components/toast
 */
export class Toast extends AbstractPureComponent {
    static defaultProps = {
        className: "",
        isCloseButtonShown: true,
        message: "",
        timeout: 5000,
    };
    static displayName = `${DISPLAYNAME_PREFIX}.Toast`;
    render() {
        const { className, icon, intent, message, isCloseButtonShown } = this.props;
        return (React.createElement("div", { className: classNames(Classes.TOAST, Classes.intentClass(intent), className), onBlur: this.startTimeout, onFocus: this.clearTimeouts, onMouseEnter: this.clearTimeouts, onMouseLeave: this.startTimeout, tabIndex: 0 },
            React.createElement(Icon, { icon: icon }),
            React.createElement("span", { className: Classes.TOAST_MESSAGE, role: "alert" }, message),
            React.createElement(ButtonGroup, { minimal: true },
                this.maybeRenderActionButton(),
                isCloseButtonShown && (React.createElement(Button, { "aria-label": "Close", icon: React.createElement(Cross, null), onClick: this.handleCloseClick })))));
    }
    componentDidMount() {
        this.startTimeout();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.timeout !== this.props.timeout) {
            if (this.props.timeout > 0) {
                this.startTimeout();
            }
            else {
                this.clearTimeouts();
            }
        }
    }
    componentWillUnmount() {
        this.clearTimeouts();
    }
    maybeRenderActionButton() {
        const { action } = this.props;
        if (action == null) {
            return undefined;
        }
        else {
            return React.createElement(AnchorButton, { ...action, intent: undefined, onClick: this.handleActionClick });
        }
    }
    handleActionClick = (e) => {
        this.props.action?.onClick?.(e);
        this.triggerDismiss(false);
    };
    handleCloseClick = () => this.triggerDismiss(false);
    triggerDismiss(didTimeoutExpire) {
        this.clearTimeouts();
        this.props.onDismiss?.(didTimeoutExpire);
    }
    startTimeout = () => {
        this.clearTimeouts();
        if (this.props.timeout > 0) {
            this.setTimeout(() => this.triggerDismiss(true), this.props.timeout);
        }
    };
}
//# sourceMappingURL=toast.js.map
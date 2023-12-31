/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
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
import { __assign } from "tslib";
import * as React from "react";
import { Classes, DISPLAYNAME_PREFIX } from "../../common";
import { Button } from "../button/buttons";
import { Text } from "../text/text";
// eslint-disable-next-line @typescript-eslint/ban-types
export var PanelView2 = function (props) {
    var handleClose = React.useCallback(function () { return props.onClose(props.panel); }, [props.onClose, props.panel]);
    var maybeBackButton = props.previousPanel === undefined ? null : (React.createElement(Button, { "aria-label": "Back", className: Classes.PANEL_STACK_HEADER_BACK, icon: "chevron-left", minimal: true, onClick: handleClose, small: true, text: props.previousPanel.title, title: props.previousPanel.htmlTitle }));
    // `props.panel.renderPanel` is simply a function that returns a JSX.Element. It may be an FC which
    // uses hooks. In order to avoid React errors due to inconsistent hook calls, we must encapsulate
    // those hooks with their own lifecycle through a very simple wrapper component.
    var PanelWrapper = React.useMemo(function () { return function () {
        // N.B. A type cast is required because of error TS2345, where technically `panel.props` could be
        // instantiated with a type unrelated to our generic constraint `T` here. We know
        // we're sending the right values here though, and it makes the consumer API for this
        // component type safe, so it's ok to do this...
        return props.panel.renderPanel(__assign({ closePanel: handleClose, openPanel: props.onOpen }, props.panel.props));
    }; }, [props.panel, props.onOpen]);
    return (React.createElement("div", { className: Classes.PANEL_STACK2_VIEW },
        props.showHeader && (React.createElement("div", { className: Classes.PANEL_STACK2_HEADER },
            React.createElement("span", null, maybeBackButton),
            React.createElement(Text, { className: Classes.HEADING, ellipsize: true, title: props.panel.htmlTitle }, props.panel.title),
            React.createElement("span", null))),
        React.createElement(PanelWrapper, null)));
};
PanelView2.displayName = "".concat(DISPLAYNAME_PREFIX, ".PanelView2");
//# sourceMappingURL=panelView2.js.map
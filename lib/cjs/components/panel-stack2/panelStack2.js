"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanelStack2 = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_transition_group_1 = require("react-transition-group");
var common_1 = require("../../common");
var panelView2_1 = require("./panelView2");
/**
 * Panel stack (v2) component.
 *
 * @see https://blueprintjs.com/docs/#core/components/panel-stack2
 * @template T type union of all possible panels in this stack
 */
// eslint-disable-next-line @typescript-eslint/ban-types
var PanelStack2 = function (props) {
    var initialPanel = props.initialPanel, onClose = props.onClose, onOpen = props.onOpen, _a = props.renderActivePanelOnly, renderActivePanelOnly = _a === void 0 ? true : _a, _b = props.showPanelHeader, showPanelHeader = _b === void 0 ? true : _b, propsStack = props.stack;
    var isControlled = propsStack != null;
    var _c = React.useState("push"), direction = _c[0], setDirection = _c[1];
    var _d = React.useState(initialPanel !== undefined ? [initialPanel] : []), localStack = _d[0], setLocalStack = _d[1];
    var stack = React.useMemo(function () { return (isControlled ? propsStack.slice().reverse() : localStack); }, [localStack, isControlled, propsStack]);
    var stackLength = React.useRef(stack.length);
    React.useEffect(function () {
        if (stack.length !== stackLength.current) {
            // Adjust the direction in case the stack size has changed, controlled or uncontrolled
            setDirection(stack.length - stackLength.current < 0 ? "pop" : "push");
        }
        stackLength.current = stack.length;
    }, [stack]);
    var handlePanelOpen = React.useCallback(function (panel) {
        onOpen === null || onOpen === void 0 ? void 0 : onOpen(panel);
        if (!isControlled) {
            setLocalStack(function (prevStack) { return tslib_1.__spreadArray([panel], prevStack, true); });
        }
    }, [onOpen, isControlled]);
    var handlePanelClose = React.useCallback(function (panel) {
        // only remove this panel if it is at the top and not the only one.
        if (stack[0] !== panel || stack.length <= 1) {
            return;
        }
        onClose === null || onClose === void 0 ? void 0 : onClose(panel);
        if (!isControlled) {
            setLocalStack(function (prevStack) { return prevStack.slice(1); });
        }
    }, [stack, onClose, isControlled]);
    // early return, after all hooks are called
    if (stack.length === 0) {
        return null;
    }
    var panelsToRender = renderActivePanelOnly ? [stack[0]] : stack;
    var panels = panelsToRender
        .map(function (panel, index) {
        // With renderActivePanelOnly={false} we would keep all the CSSTransitions rendered,
        // therefore they would not trigger the "enter" transition event as they were entered.
        // To force the enter event, we want to change the key, but stack.length is not enough
        // and a single panel should not rerender as long as it's hidden.
        // This key contains two parts: first one, stack.length - index is constant (and unique) for each panel,
        // second one, active changes only when the panel becomes or stops being active.
        var layer = stack.length - index;
        var key = renderActivePanelOnly ? stack.length : layer;
        return (React.createElement(react_transition_group_1.CSSTransition, { classNames: common_1.Classes.PANEL_STACK2, key: key, timeout: 400 },
            React.createElement(panelView2_1.PanelView2, { onClose: handlePanelClose, onOpen: handlePanelOpen, panel: panel, previousPanel: stack[index + 1], showHeader: showPanelHeader })));
    })
        .reverse();
    var classes = (0, classnames_1.default)(common_1.Classes.PANEL_STACK2, "".concat(common_1.Classes.PANEL_STACK2, "-").concat(direction), props.className);
    return (React.createElement(react_transition_group_1.TransitionGroup, { className: classes, component: "div" }, panels));
};
exports.PanelStack2 = PanelStack2;
exports.PanelStack2.displayName = "".concat(common_1.DISPLAYNAME_PREFIX, ".PanelStack2");
//# sourceMappingURL=panelStack2.js.map
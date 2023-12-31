"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = exports.Expander = exports.TabsExpander = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var common_1 = require("../../common");
var tab_1 = require("./tab");
var tabTitle_1 = require("./tabTitle");
/**
 * Component that may be inserted between any two children of `<Tabs>` to right-align all subsequent children.
 */
var TabsExpander = function () { return React.createElement("div", { className: common_1.Classes.FLEX_EXPANDER }); };
exports.TabsExpander = TabsExpander;
/** @deprecated use `TabsExpander` instead */
exports.Expander = exports.TabsExpander;
var TAB_SELECTOR = ".".concat(common_1.Classes.TAB);
/**
 * Tabs component.
 *
 * @see https://blueprintjs.com/docs/#core/components/tabs
 */
var Tabs = /** @class */ (function (_super) {
    tslib_1.__extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.tablistElement = null;
        _this.refHandlers = {
            tablist: function (tabElement) { return (_this.tablistElement = tabElement); },
        };
        _this.handleKeyDown = function (e) {
            var _a;
            var focusedElement = (_a = common_1.Utils.getActiveElement(_this.tablistElement)) === null || _a === void 0 ? void 0 : _a.closest(TAB_SELECTOR);
            // rest of this is potentially expensive and futile, so bail if no tab is focused
            if (focusedElement == null) {
                return;
            }
            // must rely on DOM state because we have no way of mapping `focusedElement` to a JSX.Element
            var enabledTabElements = _this.getTabElements().filter(function (el) { return el.getAttribute("aria-disabled") === "false"; });
            var focusedIndex = enabledTabElements.indexOf(focusedElement);
            var direction = _this.getKeyCodeDirection(e);
            if (focusedIndex >= 0 && direction !== undefined) {
                e.preventDefault();
                var length_1 = enabledTabElements.length;
                // auto-wrapping at 0 and `length`
                var nextFocusedIndex = (focusedIndex + direction + length_1) % length_1;
                enabledTabElements[nextFocusedIndex].focus();
            }
        };
        _this.handleKeyPress = function (e) {
            var targetTabElement = e.target.closest(TAB_SELECTOR);
            if (targetTabElement != null && common_1.Utils.isKeyboardClick(e)) {
                e.preventDefault();
                targetTabElement.click();
            }
        };
        _this.handleTabClick = function (newTabId, event) {
            var _a, _b;
            (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, newTabId, _this.state.selectedTabId, event);
            if (_this.props.selectedTabId === undefined) {
                _this.setState({ selectedTabId: newTabId });
            }
        };
        _this.renderTabPanel = function (tab) {
            var _a = tab.props, className = _a.className, panel = _a.panel, id = _a.id, panelClassName = _a.panelClassName;
            if (panel === undefined) {
                return undefined;
            }
            return (React.createElement("div", { "aria-labelledby": (0, tabTitle_1.generateTabTitleId)(_this.props.id, id), "aria-hidden": id !== _this.state.selectedTabId, className: (0, classnames_1.default)(common_1.Classes.TAB_PANEL, className, panelClassName), id: (0, tabTitle_1.generateTabPanelId)(_this.props.id, id), key: id, role: "tabpanel" }, panel));
        };
        _this.renderTabTitle = function (child) {
            if (isTabElement(child)) {
                var id = child.props.id;
                return (React.createElement(tabTitle_1.TabTitle, tslib_1.__assign({}, child.props, { parentId: _this.props.id, onClick: _this.handleTabClick, selected: id === _this.state.selectedTabId })));
            }
            return child;
        };
        var selectedTabId = _this.getInitialSelectedTabId();
        _this.state = { selectedTabId: selectedTabId };
        return _this;
    }
    Tabs.getDerivedStateFromProps = function (_a) {
        var selectedTabId = _a.selectedTabId;
        if (selectedTabId !== undefined) {
            // keep state in sync with controlled prop, so state is canonical source of truth
            return { selectedTabId: selectedTabId };
        }
        return null;
    };
    Tabs.prototype.render = function () {
        var _a, _b;
        var _c = this.state, indicatorWrapperStyle = _c.indicatorWrapperStyle, selectedTabId = _c.selectedTabId;
        var tabTitles = React.Children.map(this.props.children, this.renderTabTitle);
        var tabPanels = this.getTabChildren()
            .filter(this.props.renderActiveTabPanelOnly ? function (tab) { return tab.props.id === selectedTabId; } : function () { return true; })
            .map(this.renderTabPanel);
        var tabIndicator = this.props.animate ? (React.createElement("div", { className: common_1.Classes.TAB_INDICATOR_WRAPPER, style: indicatorWrapperStyle },
            React.createElement("div", { className: common_1.Classes.TAB_INDICATOR }))) : null;
        var classes = (0, classnames_1.default)(common_1.Classes.TABS, this.props.className, (_a = {},
            _a[common_1.Classes.VERTICAL] = this.props.vertical,
            _a[common_1.Classes.FILL] = this.props.fill,
            _a));
        var tabListClasses = (0, classnames_1.default)(common_1.Classes.TAB_LIST, (_b = {},
            _b[common_1.Classes.LARGE] = this.props.large,
            _b));
        return (React.createElement("div", { className: classes },
            React.createElement("div", { className: tabListClasses, onKeyDown: this.handleKeyDown, onKeyPress: this.handleKeyPress, ref: this.refHandlers.tablist, role: "tablist" },
                tabIndicator,
                tabTitles),
            tabPanels));
    };
    Tabs.prototype.componentDidMount = function () {
        this.moveSelectionIndicator(false);
    };
    Tabs.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.state.selectedTabId !== prevState.selectedTabId) {
            this.moveSelectionIndicator();
        }
        else if (prevState.selectedTabId != null) {
            // comparing React nodes is difficult to do with simple logic, so
            // shallowly compare just their props as a workaround.
            var didChildrenChange = !common_1.Utils.arraysEqual(this.getTabChildrenProps(prevProps), this.getTabChildrenProps(), common_1.Utils.shallowCompareKeys);
            if (didChildrenChange) {
                this.moveSelectionIndicator();
            }
        }
    };
    Tabs.prototype.getInitialSelectedTabId = function () {
        // NOTE: providing an unknown ID will hide the selection
        var _a = this.props, defaultSelectedTabId = _a.defaultSelectedTabId, selectedTabId = _a.selectedTabId;
        if (selectedTabId !== undefined) {
            return selectedTabId;
        }
        else if (defaultSelectedTabId !== undefined) {
            return defaultSelectedTabId;
        }
        else {
            // select first tab in absence of user input
            var tabs = this.getTabChildren();
            return tabs.length === 0 ? undefined : tabs[0].props.id;
        }
    };
    Tabs.prototype.getKeyCodeDirection = function (e) {
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            return -1;
        }
        else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            return 1;
        }
        return undefined;
    };
    Tabs.prototype.getTabChildrenProps = function (props) {
        if (props === void 0) { props = this.props; }
        return this.getTabChildren(props).map(function (child) { return child.props; });
    };
    /** Filters children to only `<Tab>`s */
    Tabs.prototype.getTabChildren = function (props) {
        if (props === void 0) { props = this.props; }
        return React.Children.toArray(props.children).filter(isTabElement);
    };
    /** Queries root HTML element for all tabs with optional filter selector */
    Tabs.prototype.getTabElements = function (subselector) {
        if (subselector === void 0) { subselector = ""; }
        if (this.tablistElement == null) {
            return [];
        }
        return Array.from(this.tablistElement.querySelectorAll(TAB_SELECTOR + subselector));
    };
    /**
     * Calculate the new height, width, and position of the tab indicator.
     * Store the CSS values so the transition animation can start.
     */
    Tabs.prototype.moveSelectionIndicator = function (animate) {
        if (animate === void 0) { animate = true; }
        if (this.tablistElement == null || !this.props.animate) {
            return;
        }
        var tabIdSelector = "".concat(TAB_SELECTOR, "[data-tab-id=\"").concat(this.state.selectedTabId, "\"]");
        var selectedTabElement = this.tablistElement.querySelector(tabIdSelector);
        var indicatorWrapperStyle = { display: "none" };
        if (selectedTabElement != null) {
            var clientHeight = selectedTabElement.clientHeight, clientWidth = selectedTabElement.clientWidth, offsetLeft = selectedTabElement.offsetLeft, offsetTop = selectedTabElement.offsetTop;
            indicatorWrapperStyle = {
                height: clientHeight,
                transform: "translateX(".concat(Math.floor(offsetLeft), "px) translateY(").concat(Math.floor(offsetTop), "px)"),
                width: clientWidth,
            };
            if (!animate) {
                indicatorWrapperStyle.transition = "none";
            }
        }
        this.setState({ indicatorWrapperStyle: indicatorWrapperStyle });
    };
    /**
     * Insert a `TabsExpander` between any two children to right-align all subsequent children.
     *
     * @deprecated use `TabsExpander`
     */
    Tabs.Expander = exports.TabsExpander;
    Tabs.Tab = tab_1.Tab;
    Tabs.defaultProps = {
        animate: true,
        fill: false,
        large: false,
        renderActiveTabPanelOnly: false,
        vertical: false,
    };
    Tabs.displayName = "".concat(common_1.DISPLAYNAME_PREFIX, ".Tabs");
    return Tabs;
}(common_1.AbstractPureComponent));
exports.Tabs = Tabs;
function isTabElement(child) {
    return common_1.Utils.isElementOfType(child, tab_1.Tab);
}
//# sourceMappingURL=tabs.js.map
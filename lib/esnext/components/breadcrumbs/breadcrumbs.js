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
import classNames from "classnames";
import * as React from "react";
import { AbstractPureComponent, Boundary, Classes, removeNonHTMLProps } from "../../common";
import { Menu } from "../menu/menu";
import { MenuItem } from "../menu/menuItem";
import { OverflowList } from "../overflow-list/overflowList";
import { Popover } from "../popover/popover";
import { Breadcrumb } from "./breadcrumb";
/**
 * Breadcrumbs component.
 *
 * @see https://blueprintjs.com/docs/#core/components/breadcrumbs
 */
export class Breadcrumbs extends AbstractPureComponent {
    static defaultProps = {
        collapseFrom: Boundary.START,
    };
    render() {
        const { className, collapseFrom, items, minVisibleItems, overflowListProps = {} } = this.props;
        return (React.createElement(OverflowList, { collapseFrom: collapseFrom, minVisibleItems: minVisibleItems, tagName: "ul", ...overflowListProps, className: classNames(Classes.BREADCRUMBS, overflowListProps.className, className), items: items, overflowRenderer: this.renderOverflow, visibleItemRenderer: this.renderBreadcrumbWrapper }));
    }
    renderOverflow = (items) => {
        const { collapseFrom, popoverProps } = this.props;
        let orderedItems = items;
        if (collapseFrom === Boundary.START) {
            // If we're collapsing from the start, the menu should be read from the bottom to the
            // top, continuing with the breadcrumbs to the right. Since this means the first
            // breadcrumb in the props must be the last in the menu, we need to reverse the overlow
            // order.
            orderedItems = items.slice().reverse();
        }
        return (React.createElement("li", null,
            React.createElement(Popover, { placement: collapseFrom === Boundary.END ? "bottom-end" : "bottom-start", disabled: orderedItems.length === 0, content: React.createElement(Menu, null, orderedItems.map(this.renderOverflowBreadcrumb)), ...popoverProps },
                React.createElement("span", { className: Classes.BREADCRUMBS_COLLAPSED }))));
    };
    renderOverflowBreadcrumb = (props, index) => {
        const isClickable = props.href != null || props.onClick != null;
        const htmlProps = removeNonHTMLProps(props);
        return React.createElement(MenuItem, { disabled: !isClickable, ...htmlProps, text: props.text, key: index });
    };
    renderBreadcrumbWrapper = (props, index) => {
        const isCurrent = this.props.items[this.props.items.length - 1] === props;
        return React.createElement("li", { key: index }, this.renderBreadcrumb(props, isCurrent));
    };
    renderBreadcrumb(props, isCurrent) {
        if (isCurrent && this.props.currentBreadcrumbRenderer != null) {
            return this.props.currentBreadcrumbRenderer(props);
        }
        else if (this.props.breadcrumbRenderer != null) {
            return this.props.breadcrumbRenderer(props);
        }
        else {
            // allow user to override 'current' prop
            return React.createElement(Breadcrumb, { current: isCurrent, ...props });
        }
    }
}
//# sourceMappingURL=breadcrumbs.js.map
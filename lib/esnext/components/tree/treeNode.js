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
import { ChevronRight } from "@blueprintjs/icons";
import { Classes, DISPLAYNAME_PREFIX } from "../../common";
import { Collapse } from "../collapse/collapse";
import { Icon } from "../icon/icon";
/**
 * Tree node component.
 *
 * @see https://blueprintjs.com/docs/#core/components/tree.tree-node
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export class TreeNode extends React.Component {
    static displayName = `${DISPLAYNAME_PREFIX}.TreeNode`;
    /** @deprecated no longer necessary now that the TypeScript parser supports type arguments on JSX element tags */
    static ofType() {
        return TreeNode;
    }
    render() {
        const { children, className, disabled, icon, isExpanded, isSelected, label } = this.props;
        const classes = classNames(Classes.TREE_NODE, {
            [Classes.DISABLED]: disabled,
            [Classes.TREE_NODE_SELECTED]: isSelected,
            [Classes.TREE_NODE_EXPANDED]: isExpanded,
        }, className);
        const contentClasses = classNames(Classes.TREE_NODE_CONTENT, `${Classes.TREE_NODE_CONTENT}-${this.props.depth}`);
        const eventHandlers = disabled === true
            ? {}
            : {
                onClick: this.handleClick,
                onContextMenu: this.handleContextMenu,
                onDoubleClick: this.handleDoubleClick,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
            };
        return (React.createElement("li", { className: classes },
            React.createElement("div", { className: contentClasses, ref: this.handleContentRef, ...eventHandlers },
                this.maybeRenderCaret(),
                React.createElement(Icon, { className: Classes.TREE_NODE_ICON, icon: icon, "aria-hidden": true, tabIndex: -1 }),
                React.createElement("span", { className: Classes.TREE_NODE_LABEL }, label),
                this.maybeRenderSecondaryLabel()),
            React.createElement(Collapse, { isOpen: isExpanded }, children)));
    }
    maybeRenderCaret() {
        const { children, isExpanded, disabled, hasCaret = React.Children.count(children) > 0 } = this.props;
        if (hasCaret) {
            const caretClasses = classNames(Classes.TREE_NODE_CARET, isExpanded ? Classes.TREE_NODE_CARET_OPEN : Classes.TREE_NODE_CARET_CLOSED);
            return (React.createElement(ChevronRight, { title: isExpanded ? "Collapse group" : "Expand group", className: caretClasses, onClick: disabled === true ? undefined : this.handleCaretClick }));
        }
        return React.createElement("span", { className: Classes.TREE_NODE_CARET_NONE });
    }
    maybeRenderSecondaryLabel() {
        if (this.props.secondaryLabel != null) {
            return React.createElement("span", { className: Classes.TREE_NODE_SECONDARY_LABEL }, this.props.secondaryLabel);
        }
        else {
            return undefined;
        }
    }
    handleCaretClick = (e) => {
        e.stopPropagation();
        const { isExpanded, onCollapse, onExpand } = this.props;
        (isExpanded ? onCollapse : onExpand)?.(this.props, this.props.path, e);
    };
    handleClick = (e) => {
        this.props.onClick?.(this.props, this.props.path, e);
    };
    handleContentRef = (element) => {
        this.props.contentRef?.(this.props, element);
    };
    handleContextMenu = (e) => {
        this.props.onContextMenu?.(this.props, this.props.path, e);
    };
    handleDoubleClick = (e) => {
        this.props.onDoubleClick?.(this.props, this.props.path, e);
    };
    handleMouseEnter = (e) => {
        this.props.onMouseEnter?.(this.props, this.props.path, e);
    };
    handleMouseLeave = (e) => {
        this.props.onMouseLeave?.(this.props, this.props.path, e);
    };
}
//# sourceMappingURL=treeNode.js.map
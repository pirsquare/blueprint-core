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
import { __assign, __extends } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { Classes, DISPLAYNAME_PREFIX } from "../../common";
import { TreeNode } from "./treeNode";
/**
 * Tree component.
 *
 * @see https://blueprintjs.com/docs/#core/components/tree
 */
// eslint-disable-next-line @typescript-eslint/ban-types
var Tree = /** @class */ (function (_super) {
    __extends(Tree, _super);
    function Tree() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeRefs = {};
        _this.handleContentRef = function (node, element) {
            if (element != null) {
                _this.nodeRefs[node.id] = element;
            }
            else {
                // don't want our object to get bloated with old keys
                delete _this.nodeRefs[node.id];
            }
        };
        _this.handleNodeCollapse = function (node, path, e) {
            var _a, _b;
            (_b = (_a = _this.props).onNodeCollapse) === null || _b === void 0 ? void 0 : _b.call(_a, node, path, e);
        };
        _this.handleNodeClick = function (node, path, e) {
            var _a, _b;
            (_b = (_a = _this.props).onNodeClick) === null || _b === void 0 ? void 0 : _b.call(_a, node, path, e);
        };
        _this.handleNodeContextMenu = function (node, path, e) {
            var _a, _b;
            (_b = (_a = _this.props).onNodeContextMenu) === null || _b === void 0 ? void 0 : _b.call(_a, node, path, e);
        };
        _this.handleNodeDoubleClick = function (node, path, e) {
            var _a, _b;
            (_b = (_a = _this.props).onNodeDoubleClick) === null || _b === void 0 ? void 0 : _b.call(_a, node, path, e);
        };
        _this.handleNodeExpand = function (node, path, e) {
            var _a, _b;
            (_b = (_a = _this.props).onNodeExpand) === null || _b === void 0 ? void 0 : _b.call(_a, node, path, e);
        };
        _this.handleNodeMouseEnter = function (node, path, e) {
            var _a, _b;
            (_b = (_a = _this.props).onNodeMouseEnter) === null || _b === void 0 ? void 0 : _b.call(_a, node, path, e);
        };
        _this.handleNodeMouseLeave = function (node, path, e) {
            var _a, _b;
            (_b = (_a = _this.props).onNodeMouseLeave) === null || _b === void 0 ? void 0 : _b.call(_a, node, path, e);
        };
        return _this;
    }
    Tree.ofType = function () {
        return Tree;
    };
    Tree.nodeFromPath = function (path, treeNodes) {
        if (path.length === 1) {
            return treeNodes[path[0]];
        }
        else {
            return Tree.nodeFromPath(path.slice(1), treeNodes[path[0]].childNodes);
        }
    };
    Tree.prototype.render = function () {
        return (React.createElement("div", { className: classNames(Classes.TREE, this.props.className) }, this.renderNodes(this.props.contents, [], Classes.TREE_ROOT)));
    };
    /**
     * Returns the underlying HTML element of the `Tree` node with an id of `nodeId`.
     * This element does not contain the children of the node, only its label and controls.
     * If the node is not currently mounted, `undefined` is returned.
     */
    Tree.prototype.getNodeContentElement = function (nodeId) {
        return this.nodeRefs[nodeId];
    };
    Tree.prototype.renderNodes = function (treeNodes, currentPath, className) {
        var _this = this;
        if (treeNodes == null) {
            return null;
        }
        var nodeItems = treeNodes.map(function (node, i) {
            var elementPath = currentPath.concat(i);
            return (React.createElement(TreeNode, __assign({}, node, { key: node.id, contentRef: _this.handleContentRef, depth: elementPath.length - 1, onClick: _this.handleNodeClick, onContextMenu: _this.handleNodeContextMenu, onCollapse: _this.handleNodeCollapse, onDoubleClick: _this.handleNodeDoubleClick, onExpand: _this.handleNodeExpand, onMouseEnter: _this.handleNodeMouseEnter, onMouseLeave: _this.handleNodeMouseLeave, path: elementPath }), _this.renderNodes(node.childNodes, elementPath)));
        });
        return React.createElement("ul", { className: classNames(Classes.TREE_NODE_LIST, className) }, nodeItems);
    };
    Tree.displayName = "".concat(DISPLAYNAME_PREFIX, ".Tree");
    return Tree;
}(React.Component));
export { Tree };
//# sourceMappingURL=tree.js.map
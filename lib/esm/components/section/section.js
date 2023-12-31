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
import { __assign, __rest } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { ChevronDown, ChevronUp } from "@blueprintjs/icons";
import { Classes, Elevation, Utils } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { uniqueId } from "../../common/utils";
import { Card } from "../card/card";
import { Collapse } from "../collapse/collapse";
import { H6 } from "../html/html";
import { Icon } from "../icon/icon";
/**
 * Section component.
 *
 * @see https://blueprintjs.com/docs/#core/components/section
 */
export var Section = React.forwardRef(function (props, ref) {
    var _a, _b;
    var _c;
    var children = props.children, className = props.className, collapseProps = props.collapseProps, collapsible = props.collapsible, compact = props.compact, elevation = props.elevation, icon = props.icon, rightElement = props.rightElement, subtitle = props.subtitle, title = props.title, _d = props.titleRenderer, titleRenderer = _d === void 0 ? H6 : _d, htmlProps = __rest(props, ["children", "className", "collapseProps", "collapsible", "compact", "elevation", "icon", "rightElement", "subtitle", "title", "titleRenderer"]);
    // Determine whether to use controlled or uncontrolled state.
    var isControlled = (collapseProps === null || collapseProps === void 0 ? void 0 : collapseProps.isOpen) != null;
    // The initial useState value is negated in order to conform to the `isCollapsed` expectation.
    var _e = React.useState(!((_c = collapseProps === null || collapseProps === void 0 ? void 0 : collapseProps.defaultIsOpen) !== null && _c !== void 0 ? _c : true)), isCollapsedUncontrolled = _e[0], setIsCollapsed = _e[1];
    var isCollapsed = isControlled ? !(collapseProps === null || collapseProps === void 0 ? void 0 : collapseProps.isOpen) : isCollapsedUncontrolled;
    var toggleIsCollapsed = React.useCallback(function () {
        var _a;
        if (isControlled) {
            (_a = collapseProps === null || collapseProps === void 0 ? void 0 : collapseProps.onToggle) === null || _a === void 0 ? void 0 : _a.call(collapseProps);
        }
        else {
            setIsCollapsed(!isCollapsed);
        }
    }, [collapseProps, isCollapsed, isControlled]);
    var isHeaderRightContainerVisible = rightElement != null || collapsible;
    var sectionId = uniqueId("section");
    var sectionTitleId = title ? uniqueId("section-title") : undefined;
    return (React.createElement(Card, __assign({ className: classNames(className, Classes.SECTION, (_a = {},
            _a[Classes.COMPACT] = compact,
            _a[Classes.SECTION_COLLAPSED] = (collapsible && isCollapsed) || Utils.isReactNodeEmpty(children),
            _a)), elevation: elevation, ref: ref, "aria-labelledby": sectionTitleId }, htmlProps, { id: sectionId }),
        title && (React.createElement("div", { role: collapsible ? "button" : undefined, "aria-pressed": collapsible ? isCollapsed : undefined, "aria-expanded": collapsible ? isCollapsed : undefined, "aria-controls": collapsible ? sectionId : undefined, className: classNames(Classes.SECTION_HEADER, (_b = {},
                _b[Classes.INTERACTIVE] = collapsible,
                _b)), onClick: collapsible ? toggleIsCollapsed : undefined },
            React.createElement("div", { className: Classes.SECTION_HEADER_LEFT },
                icon && React.createElement(Icon, { icon: icon, "aria-hidden": true, tabIndex: -1, className: Classes.TEXT_MUTED }),
                React.createElement("div", null,
                    React.createElement(titleRenderer, { className: Classes.SECTION_HEADER_TITLE, id: sectionTitleId }, title),
                    subtitle && (React.createElement("div", { className: classNames(Classes.TEXT_MUTED, Classes.SECTION_HEADER_SUB_TITLE) }, subtitle)))),
            isHeaderRightContainerVisible && (React.createElement("div", { className: Classes.SECTION_HEADER_RIGHT },
                rightElement,
                collapsible &&
                    (isCollapsed ? (React.createElement(ChevronDown, { className: Classes.TEXT_MUTED })) : (React.createElement(ChevronUp, { className: Classes.TEXT_MUTED }))))))),
        collapsible ? (React.createElement(Collapse, __assign({}, collapseProps, { isOpen: !isCollapsed }), children)) : (children)));
});
Section.defaultProps = {
    compact: false,
    elevation: Elevation.ZERO,
};
Section.displayName = "".concat(DISPLAYNAME_PREFIX, ".Section");
//# sourceMappingURL=section.js.map
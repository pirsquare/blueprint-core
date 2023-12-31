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
export const Section = React.forwardRef((props, ref) => {
    const { children, className, collapseProps, collapsible, compact, elevation, icon, rightElement, subtitle, title, titleRenderer = H6, ...htmlProps } = props;
    // Determine whether to use controlled or uncontrolled state.
    const isControlled = collapseProps?.isOpen != null;
    // The initial useState value is negated in order to conform to the `isCollapsed` expectation.
    const [isCollapsedUncontrolled, setIsCollapsed] = React.useState(!(collapseProps?.defaultIsOpen ?? true));
    const isCollapsed = isControlled ? !collapseProps?.isOpen : isCollapsedUncontrolled;
    const toggleIsCollapsed = React.useCallback(() => {
        if (isControlled) {
            collapseProps?.onToggle?.();
        }
        else {
            setIsCollapsed(!isCollapsed);
        }
    }, [collapseProps, isCollapsed, isControlled]);
    const isHeaderRightContainerVisible = rightElement != null || collapsible;
    const sectionId = uniqueId("section");
    const sectionTitleId = title ? uniqueId("section-title") : undefined;
    return (React.createElement(Card, { className: classNames(className, Classes.SECTION, {
            [Classes.COMPACT]: compact,
            [Classes.SECTION_COLLAPSED]: (collapsible && isCollapsed) || Utils.isReactNodeEmpty(children),
        }), elevation: elevation, ref: ref, "aria-labelledby": sectionTitleId, ...htmlProps, id: sectionId },
        title && (React.createElement("div", { role: collapsible ? "button" : undefined, "aria-pressed": collapsible ? isCollapsed : undefined, "aria-expanded": collapsible ? isCollapsed : undefined, "aria-controls": collapsible ? sectionId : undefined, className: classNames(Classes.SECTION_HEADER, {
                [Classes.INTERACTIVE]: collapsible,
            }), onClick: collapsible ? toggleIsCollapsed : undefined },
            React.createElement("div", { className: Classes.SECTION_HEADER_LEFT },
                icon && React.createElement(Icon, { icon: icon, "aria-hidden": true, tabIndex: -1, className: Classes.TEXT_MUTED }),
                React.createElement("div", null,
                    React.createElement(titleRenderer, { className: Classes.SECTION_HEADER_TITLE, id: sectionTitleId }, title),
                    subtitle && (React.createElement("div", { className: classNames(Classes.TEXT_MUTED, Classes.SECTION_HEADER_SUB_TITLE) }, subtitle)))),
            isHeaderRightContainerVisible && (React.createElement("div", { className: Classes.SECTION_HEADER_RIGHT },
                rightElement,
                collapsible &&
                    (isCollapsed ? (React.createElement(ChevronDown, { className: Classes.TEXT_MUTED })) : (React.createElement(ChevronUp, { className: Classes.TEXT_MUTED }))))))),
        collapsible ? (React.createElement(Collapse, { ...collapseProps, isOpen: !isCollapsed }, children)) : (children)));
});
Section.defaultProps = {
    compact: false,
    elevation: Elevation.ZERO,
};
Section.displayName = `${DISPLAYNAME_PREFIX}.Section`;
//# sourceMappingURL=section.js.map
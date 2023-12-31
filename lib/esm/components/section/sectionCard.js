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
import { Classes } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
/**
 * Section card component.
 *
 * @see https://blueprintjs.com/docs/#core/components/section.section-card
 */
export var SectionCard = React.forwardRef(function (props, ref) {
    var _a;
    var className = props.className, children = props.children, padded = props.padded, htmlProps = __rest(props, ["className", "children", "padded"]);
    var classes = classNames(Classes.SECTION_CARD, (_a = {}, _a[Classes.PADDED] = padded, _a), className);
    return (React.createElement("div", __assign({ className: classes, ref: ref }, htmlProps), children));
});
SectionCard.defaultProps = {
    padded: true,
};
SectionCard.displayName = "".concat(DISPLAYNAME_PREFIX, ".SectionCard");
//# sourceMappingURL=sectionCard.js.map
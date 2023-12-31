/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
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
import { Classes, Elevation } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
/**
 * Card component.
 *
 * @see https://blueprintjs.com/docs/#core/components/card
 */
export var Card = React.forwardRef(function (props, ref) {
    var _a;
    var className = props.className, elevation = props.elevation, interactive = props.interactive, selected = props.selected, compact = props.compact, htmlProps = __rest(props, ["className", "elevation", "interactive", "selected", "compact"]);
    var classes = classNames(className, Classes.CARD, Classes.elevationClass(elevation), (_a = {},
        _a[Classes.INTERACTIVE] = interactive,
        _a[Classes.COMPACT] = compact,
        _a[Classes.SELECTED] = selected,
        _a));
    return React.createElement("div", __assign({ className: classes, ref: ref }, htmlProps));
});
Card.defaultProps = {
    elevation: Elevation.ZERO,
    interactive: false,
};
Card.displayName = "".concat(DISPLAYNAME_PREFIX, ".Card");
//# sourceMappingURL=card.js.map
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
import classNames from "classnames";
import * as React from "react";
import { Classes, Elevation } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
/**
 * Card component.
 *
 * @see https://blueprintjs.com/docs/#core/components/card
 */
export const Card = React.forwardRef((props, ref) => {
    const { className, elevation, interactive, selected, compact, ...htmlProps } = props;
    const classes = classNames(className, Classes.CARD, Classes.elevationClass(elevation), {
        [Classes.INTERACTIVE]: interactive,
        [Classes.COMPACT]: compact,
        [Classes.SELECTED]: selected,
    });
    return React.createElement("div", { className: classes, ref: ref, ...htmlProps });
});
Card.defaultProps = {
    elevation: Elevation.ZERO,
    interactive: false,
};
Card.displayName = `${DISPLAYNAME_PREFIX}.Card`;
//# sourceMappingURL=card.js.map
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
import { Classes } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
/**
 * Button group component.
 *
 * @see https://blueprintjs.com/docs/#core/components/button-group
 */
export const ButtonGroup = React.forwardRef((props, ref) => {
    const { alignText, className, fill, minimal, large, vertical, ...htmlProps } = props;
    const buttonGroupClasses = classNames(Classes.BUTTON_GROUP, {
        [Classes.FILL]: fill,
        [Classes.LARGE]: large,
        [Classes.MINIMAL]: minimal,
        [Classes.VERTICAL]: vertical,
    }, Classes.alignmentClass(alignText), className);
    return (React.createElement("div", { ...htmlProps, ref: ref, className: buttonGroupClasses }, props.children));
});
ButtonGroup.displayName = `${DISPLAYNAME_PREFIX}.ButtonGroup`;
//# sourceMappingURL=buttonGroup.js.map
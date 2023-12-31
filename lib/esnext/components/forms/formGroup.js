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
import { AbstractPureComponent, Classes } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
/**
 * Form group component.
 *
 * @see https://blueprintjs.com/docs/#core/components/form-group
 */
export class FormGroup extends AbstractPureComponent {
    static displayName = `${DISPLAYNAME_PREFIX}.FormGroup`;
    render() {
        const { children, contentClassName, helperText, label, labelFor, labelInfo, style, subLabel } = this.props;
        return (React.createElement("div", { className: this.getClassName(), style: style },
            label && (React.createElement("label", { className: Classes.LABEL, htmlFor: labelFor },
                label,
                " ",
                React.createElement("span", { className: Classes.TEXT_MUTED }, labelInfo))),
            subLabel && React.createElement("div", { className: Classes.FORM_GROUP_SUB_LABEL }, subLabel),
            React.createElement("div", { className: classNames(Classes.FORM_CONTENT, contentClassName) },
                children,
                helperText && React.createElement("div", { className: Classes.FORM_HELPER_TEXT }, helperText))));
    }
    getClassName() {
        const { className, disabled, fill, inline, intent } = this.props;
        return classNames(Classes.FORM_GROUP, Classes.intentClass(intent), {
            [Classes.DISABLED]: disabled,
            [Classes.FILL]: fill,
            [Classes.INLINE]: inline,
        }, className);
    }
}
//# sourceMappingURL=formGroup.js.map
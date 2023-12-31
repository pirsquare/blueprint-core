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
const NS = Classes.getClassNamespace();
// this is a simple component, unit tests would be mostly tautological
/* istanbul ignore next */
/**
 * File input component.
 *
 * @see https://blueprintjs.com/docs/#core/components/file-input
 */
export class FileInput extends AbstractPureComponent {
    static displayName = `${DISPLAYNAME_PREFIX}.FileInput`;
    static defaultProps = {
        hasSelection: false,
        inputProps: {},
        text: "Choose file...",
    };
    render() {
        const { buttonText, className, disabled, fill, hasSelection, inputProps, large, onInputChange, small, text, ...htmlProps } = this.props;
        const rootClasses = classNames(className, Classes.FILE_INPUT, {
            [Classes.FILE_INPUT_HAS_SELECTION]: hasSelection,
            [Classes.DISABLED]: disabled,
            [Classes.FILL]: fill,
            [Classes.LARGE]: large,
            [Classes.SMALL]: small,
        });
        const uploadProps = {
            [`${NS}-button-text`]: buttonText,
            className: classNames(Classes.FILE_UPLOAD_INPUT, {
                [Classes.FILE_UPLOAD_INPUT_CUSTOM_TEXT]: !!buttonText,
            }),
        };
        return (React.createElement("label", { ...htmlProps, className: rootClasses },
            React.createElement("input", { ...inputProps, onChange: this.handleInputChange, type: "file", disabled: disabled }),
            React.createElement("span", { ...uploadProps }, text)));
    }
    handleInputChange = (e) => {
        this.props.onInputChange?.(e);
        this.props.inputProps?.onChange?.(e);
    };
}
//# sourceMappingURL=fileInput.js.map
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
import { AbstractPureComponent, Classes, refHandler, setRef } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { AsyncControllableTextArea } from "./asyncControllableTextArea";
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
/**
 * Text area component.
 *
 * @see https://blueprintjs.com/docs/#core/components/text-area
 */
export class TextArea extends AbstractPureComponent {
    static defaultProps = {
        autoResize: false,
        fill: false,
        large: false,
        small: false,
    };
    static displayName = `${DISPLAYNAME_PREFIX}.TextArea`;
    state = {};
    // used to measure and set the height of the component on first mount
    textareaElement = null;
    handleRef = refHandler(this, "textareaElement", this.props.inputRef);
    maybeSyncHeightToScrollHeight = () => {
        // eslint-disable-next-line deprecation/deprecation
        const { autoResize, growVertically } = this.props;
        if (this.textareaElement != null) {
            const { scrollHeight } = this.textareaElement;
            if (autoResize) {
                // set height to 0 to force scrollHeight to be the minimum height to fit
                // the content of the textarea
                this.textareaElement.style.height = "0px";
                this.textareaElement.style.height = scrollHeight.toString() + "px";
                this.setState({ height: scrollHeight });
            }
            else if (growVertically && scrollHeight > 0) {
                // N.B. this code path will be deleted in Blueprint v6.0 when `growVertically` is removed
                this.setState({ height: scrollHeight });
            }
        }
        if (this.props.autoResize && this.textareaElement != null) {
            // set height to 0 to force scrollHeight to be the minimum height to fit
            // the content of the textarea
            this.textareaElement.style.height = "0px";
            const { scrollHeight } = this.textareaElement;
            this.textareaElement.style.height = scrollHeight.toString() + "px";
            this.setState({ height: scrollHeight });
        }
    };
    componentDidMount() {
        this.maybeSyncHeightToScrollHeight();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.inputRef !== this.props.inputRef) {
            setRef(prevProps.inputRef, null);
            this.handleRef = refHandler(this, "textareaElement", this.props.inputRef);
            setRef(this.props.inputRef, this.textareaElement);
        }
        if (prevProps.value !== this.props.value || prevProps.style !== this.props.style) {
            this.maybeSyncHeightToScrollHeight();
        }
    }
    render() {
        const { asyncControl, autoResize, className, fill, 
        // eslint-disable-next-line deprecation/deprecation
        growVertically, inputRef, intent, large, small, ...htmlProps } = this.props;
        const rootClasses = classNames(Classes.INPUT, Classes.TEXT_AREA, Classes.intentClass(intent), {
            [Classes.FILL]: fill,
            [Classes.LARGE]: large,
            [Classes.SMALL]: small,
            [Classes.TEXT_AREA_AUTO_RESIZE]: autoResize,
        }, className);
        // add explicit height style while preserving user-supplied styles if they exist
        let { style = {} } = htmlProps;
        if ((autoResize || growVertically) && this.state.height != null) {
            // this style object becomes non-extensible when mounted (at least in the enzyme renderer),
            // so we make a new one to add a property
            style = {
                ...style,
                height: `${this.state.height}px`,
            };
        }
        const TextAreaComponent = asyncControl ? AsyncControllableTextArea : "textarea";
        return (React.createElement(TextAreaComponent, { ...htmlProps, className: rootClasses, onChange: this.handleChange, style: style, ref: this.handleRef }));
    }
    handleChange = (e) => {
        this.maybeSyncHeightToScrollHeight();
        this.props.onChange?.(e);
    };
}
//# sourceMappingURL=textArea.js.map
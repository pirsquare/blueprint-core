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
import { Classes, mergeRefs } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
/**
 * Text component.
 *
 * @see https://blueprintjs.com/docs/#core/components/text
 */
export const Text = React.forwardRef(({ children, tagName = "div", title, className, ellipsize, ...htmlProps }, forwardedRef) => {
    const contentMeasuringRef = React.useRef();
    const textRef = React.useMemo(() => mergeRefs(contentMeasuringRef, forwardedRef), [forwardedRef]);
    const [textContent, setTextContent] = React.useState("");
    const [isContentOverflowing, setIsContentOverflowing] = React.useState();
    // try to be conservative about running this effect, since querying scrollWidth causes the browser to reflow / recalculate styles,
    // which can be very expensive for long lists (for example, in long Menus)
    React.useLayoutEffect(() => {
        if (contentMeasuringRef.current?.textContent != null) {
            setIsContentOverflowing(ellipsize && contentMeasuringRef.current.scrollWidth > contentMeasuringRef.current.clientWidth);
            setTextContent(contentMeasuringRef.current.textContent);
        }
    }, [contentMeasuringRef, children, ellipsize]);
    return React.createElement(tagName, {
        ...htmlProps,
        className: classNames({
            [Classes.TEXT_OVERFLOW_ELLIPSIS]: ellipsize,
        }, className),
        ref: textRef,
        title: title ?? (isContentOverflowing ? textContent : undefined),
    }, children);
});
Text.defaultProps = {
    ellipsize: false,
};
Text.displayName = `${DISPLAYNAME_PREFIX}.Text`;
//# sourceMappingURL=text.js.map
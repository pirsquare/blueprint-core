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
import { Classes, mergeRefs } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
/**
 * Text component.
 *
 * @see https://blueprintjs.com/docs/#core/components/text
 */
export var Text = React.forwardRef(function (_a, forwardedRef) {
    var _b;
    var children = _a.children, _c = _a.tagName, tagName = _c === void 0 ? "div" : _c, title = _a.title, className = _a.className, ellipsize = _a.ellipsize, htmlProps = __rest(_a, ["children", "tagName", "title", "className", "ellipsize"]);
    var contentMeasuringRef = React.useRef();
    var textRef = React.useMemo(function () { return mergeRefs(contentMeasuringRef, forwardedRef); }, [forwardedRef]);
    var _d = React.useState(""), textContent = _d[0], setTextContent = _d[1];
    var _e = React.useState(), isContentOverflowing = _e[0], setIsContentOverflowing = _e[1];
    // try to be conservative about running this effect, since querying scrollWidth causes the browser to reflow / recalculate styles,
    // which can be very expensive for long lists (for example, in long Menus)
    React.useLayoutEffect(function () {
        var _a;
        if (((_a = contentMeasuringRef.current) === null || _a === void 0 ? void 0 : _a.textContent) != null) {
            setIsContentOverflowing(ellipsize && contentMeasuringRef.current.scrollWidth > contentMeasuringRef.current.clientWidth);
            setTextContent(contentMeasuringRef.current.textContent);
        }
    }, [contentMeasuringRef, children, ellipsize]);
    return React.createElement(tagName, __assign(__assign({}, htmlProps), { className: classNames((_b = {},
            _b[Classes.TEXT_OVERFLOW_ELLIPSIS] = ellipsize,
            _b), className), ref: textRef, title: title !== null && title !== void 0 ? title : (isContentOverflowing ? textContent : undefined) }), children);
});
Text.defaultProps = {
    ellipsize: false,
};
Text.displayName = "".concat(DISPLAYNAME_PREFIX, ".Text");
//# sourceMappingURL=text.js.map
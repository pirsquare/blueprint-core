/* !
 * (c) Copyright 2023 Palantir Technologies Inc. All rights reserved.
 */
import { __assign, __rest } from "tslib";
import * as React from "react";
import { DISPLAYNAME_PREFIX } from "../../common";
import { useAsyncControllableValue } from "../../hooks/useAsyncControllableValue";
/**
 * A wrapper around the low-level <textarea> component which works around a React bug
 * the same way <AsyncControllableInput> does.
 */
export var AsyncControllableTextArea = React.forwardRef(function _AsyncControllableTextArea(props, ref) {
    var parentValue = props.value, parentOnChange = props.onChange, parentOnCompositionStart = props.onCompositionStart, parentOnCompositionEnd = props.onCompositionEnd, restProps = __rest(props, ["value", "onChange", "onCompositionStart", "onCompositionEnd"]);
    var _a = useAsyncControllableValue({
        onChange: parentOnChange,
        onCompositionEnd: parentOnCompositionEnd,
        onCompositionStart: parentOnCompositionStart,
        value: parentValue,
    }), value = _a.value, onChange = _a.onChange, onCompositionStart = _a.onCompositionStart, onCompositionEnd = _a.onCompositionEnd;
    return (React.createElement("textarea", __assign({}, restProps, { value: value, onChange: onChange, onCompositionStart: onCompositionStart, onCompositionEnd: onCompositionEnd, ref: ref })));
});
AsyncControllableTextArea.displayName = "".concat(DISPLAYNAME_PREFIX, ".AsyncControllableTextArea");
//# sourceMappingURL=asyncControllableTextArea.js.map
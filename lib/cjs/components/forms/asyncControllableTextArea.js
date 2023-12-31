"use strict";
/* !
 * (c) Copyright 2023 Palantir Technologies Inc. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncControllableTextArea = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var common_1 = require("../../common");
var useAsyncControllableValue_1 = require("../../hooks/useAsyncControllableValue");
/**
 * A wrapper around the low-level <textarea> component which works around a React bug
 * the same way <AsyncControllableInput> does.
 */
exports.AsyncControllableTextArea = React.forwardRef(function _AsyncControllableTextArea(props, ref) {
    var parentValue = props.value, parentOnChange = props.onChange, parentOnCompositionStart = props.onCompositionStart, parentOnCompositionEnd = props.onCompositionEnd, restProps = tslib_1.__rest(props, ["value", "onChange", "onCompositionStart", "onCompositionEnd"]);
    var _a = (0, useAsyncControllableValue_1.useAsyncControllableValue)({
        onChange: parentOnChange,
        onCompositionEnd: parentOnCompositionEnd,
        onCompositionStart: parentOnCompositionStart,
        value: parentValue,
    }), value = _a.value, onChange = _a.onChange, onCompositionStart = _a.onCompositionStart, onCompositionEnd = _a.onCompositionEnd;
    return (React.createElement("textarea", tslib_1.__assign({}, restProps, { value: value, onChange: onChange, onCompositionStart: onCompositionStart, onCompositionEnd: onCompositionEnd, ref: ref })));
});
exports.AsyncControllableTextArea.displayName = "".concat(common_1.DISPLAYNAME_PREFIX, ".AsyncControllableTextArea");
//# sourceMappingURL=asyncControllableTextArea.js.map
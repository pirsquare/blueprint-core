"use strict";
/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCheckedControl = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
/**
 * Keep track of a control's checked state in both controlled and uncontrolled modes
 */
function useCheckedControl(props) {
    var _a = React.useState(function () { var _a; return (_a = props.defaultChecked) !== null && _a !== void 0 ? _a : false; }), checked = _a[0], setChecked = _a[1];
    React.useEffect(function () {
        if (props.checked !== undefined) {
            setChecked(props.checked);
        }
    }, [props.checked]);
    var onChange = React.useCallback(function (e) {
        var _a;
        setChecked(function (c) { return !c; });
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.onChange]);
    return { checked: checked, onChange: onChange };
}
exports.useCheckedControl = useCheckedControl;
//# sourceMappingURL=useCheckedControl.js.map
"use strict";
/*
 * Copyright 2022 Palantir Technologies, Inc. All rights reserved.
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
exports.usePrevious = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
function usePrevious(value) {
    var ref = React.useRef();
    React.useEffect(function () {
        ref.current = value; // assign the value of ref to the argument
    }, [value]); // this code will run when the value of 'value' changes
    return ref.current; // in the end, return the current ref value.
}
exports.usePrevious = usePrevious;
//# sourceMappingURL=usePrevious.js.map
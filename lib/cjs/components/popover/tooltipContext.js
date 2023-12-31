"use strict";
/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
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
exports.TooltipProvider = exports.TooltipContext = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var noOpDispatch = function () { return null; };
exports.TooltipContext = React.createContext([
    {},
    noOpDispatch,
]);
var tooltipContextReducer = function (state, action) {
    switch (action.type) {
        case "FORCE_DISABLED_STATE":
            return { forceDisabled: true };
        case "RESET_DISABLED_STATE":
            return {};
        default:
            return state;
    }
};
var TooltipProvider = function (_a) {
    var children = _a.children, forceDisable = _a.forceDisable;
    var _b = React.useReducer(tooltipContextReducer, {}), state = _b[0], dispatch = _b[1];
    React.useEffect(function () {
        if (forceDisable) {
            dispatch({ type: "FORCE_DISABLED_STATE" });
        }
        else {
            dispatch({ type: "RESET_DISABLED_STATE" });
        }
    }, [forceDisable]);
    return (React.createElement(exports.TooltipContext.Provider, { value: [state, dispatch] }, typeof children === "function" ? children(state) : children));
};
exports.TooltipProvider = TooltipProvider;
//# sourceMappingURL=tooltipContext.js.map
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
import { __assign, __spreadArray } from "tslib";
import * as React from "react";
import { shallowCompareKeys } from "../../common/utils";
import { HotkeysDialog2 } from "../../components/hotkeys/hotkeysDialog2";
var initialHotkeysState = { hasProvider: false, hotkeys: [], isDialogOpen: false };
var noOpDispatch = function () { return null; };
/**
 * A React context used to register and deregister hotkeys as components are mounted and unmounted in an application.
 * Users should take care to make sure that only _one_ of these is instantiated and used within an application, especially
 * if using global hotkeys.
 *
 * You will likely not be using this HotkeysContext directly, except in cases where you need to get a direct handle on an
 * existing context instance for advanced use cases involving nested HotkeysProviders.
 *
 * For more information, see the [HotkeysProvider documentation](https://blueprintjs.com/docs/#core/context/hotkeys-provider).
 */
export var HotkeysContext = React.createContext([initialHotkeysState, noOpDispatch]);
var hotkeysReducer = function (state, action) {
    switch (action.type) {
        case "ADD_HOTKEYS":
            // only pick up unique hotkeys which haven't been registered already
            var newUniqueHotkeys = [];
            for (var _i = 0, _a = action.payload; _i < _a.length; _i++) {
                var a = _a[_i];
                var isUnique = true;
                for (var _b = 0, _c = state.hotkeys; _b < _c.length; _b++) {
                    var b = _c[_b];
                    isUnique && (isUnique = !shallowCompareKeys(a, b, { exclude: ["onKeyDown", "onKeyUp"] }));
                }
                if (isUnique) {
                    newUniqueHotkeys.push(a);
                }
            }
            return __assign(__assign({}, state), { hotkeys: __spreadArray(__spreadArray([], state.hotkeys, true), newUniqueHotkeys, true) });
        case "REMOVE_HOTKEYS":
            return __assign(__assign({}, state), { hotkeys: state.hotkeys.filter(function (key) { return action.payload.indexOf(key) === -1; }) });
        case "OPEN_DIALOG":
            return __assign(__assign({}, state), { isDialogOpen: true });
        case "CLOSE_DIALOG":
            return __assign(__assign({}, state), { isDialogOpen: false });
        default:
            return state;
    }
};
/**
 * Hotkeys context provider, necessary for the `useHotkeys` hook.
 *
 * @see https://blueprintjs.com/docs/#core/context/hotkeys-provider
 */
export var HotkeysProvider = function (_a) {
    var _b;
    var children = _a.children, dialogProps = _a.dialogProps, renderDialog = _a.renderDialog, value = _a.value;
    var hasExistingContext = value != null;
    var fallbackReducer = React.useReducer(hotkeysReducer, __assign(__assign({}, initialHotkeysState), { hasProvider: true }));
    var _c = value !== null && value !== void 0 ? value : fallbackReducer, state = _c[0], dispatch = _c[1];
    var handleDialogClose = React.useCallback(function () { return dispatch({ type: "CLOSE_DIALOG" }); }, [dispatch]);
    var dialog = (_b = renderDialog === null || renderDialog === void 0 ? void 0 : renderDialog(state, { handleDialogClose: handleDialogClose })) !== null && _b !== void 0 ? _b : (React.createElement(HotkeysDialog2, __assign({}, dialogProps, { isOpen: state.isDialogOpen, hotkeys: state.hotkeys, onClose: handleDialogClose })));
    // if we are working with an existing context, we don't need to generate our own dialog
    return (React.createElement(HotkeysContext.Provider, { value: [state, dispatch] },
        children,
        hasExistingContext ? undefined : dialog));
};
//# sourceMappingURL=hotkeysProvider.js.map
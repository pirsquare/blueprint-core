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
exports.useHotkeys = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var errors_1 = require("../../common/errors");
var domUtils_1 = require("../../common/utils/domUtils");
var hotkeyParser_1 = require("../../components/hotkeys/hotkeyParser");
var context_1 = require("../../context");
/**
 * React hook to register global and local hotkeys for a component.
 *
 * @see https://blueprintjs.com/docs/#core/hooks/use-hotkeys
 * @param keys list of hotkeys to configure
 * @param options hook options
 */
function useHotkeys(keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.document, document = _a === void 0 ? getDefaultDocument() : _a, _b = options.showDialogKeyCombo, showDialogKeyCombo = _b === void 0 ? "?" : _b;
    var localKeys = React.useMemo(function () {
        return keys
            .filter(function (k) { return !k.global; })
            .map(function (k) { return ({
            combo: (0, hotkeyParser_1.parseKeyCombo)(k.combo),
            config: k,
        }); });
    }, [keys]);
    var globalKeys = React.useMemo(function () {
        return keys
            .filter(function (k) { return k.global; })
            .map(function (k) { return ({
            combo: (0, hotkeyParser_1.parseKeyCombo)(k.combo),
            config: k,
        }); });
    }, [keys]);
    // register keys with global context
    var _c = React.useContext(context_1.HotkeysContext), state = _c[0], dispatch = _c[1];
    React.useEffect(function () {
        if (!state.hasProvider) {
            console.warn(errors_1.HOTKEYS_PROVIDER_NOT_FOUND);
        }
    }, [state.hasProvider]);
    // we can still bind the hotkeys if there is no HotkeysProvider, they just won't show up in the dialog
    React.useEffect(function () {
        var payload = tslib_1.__spreadArray(tslib_1.__spreadArray([], globalKeys.map(function (k) { return k.config; }), true), localKeys.map(function (k) { return k.config; }), true);
        dispatch({ type: "ADD_HOTKEYS", payload: payload });
        return function () { return dispatch({ type: "REMOVE_HOTKEYS", payload: payload }); };
    }, [dispatch, globalKeys, localKeys]);
    var invokeNamedCallbackIfComboRecognized = React.useCallback(function (global, combo, callbackName, e) {
        var _a, _b;
        var isTextInput = (0, domUtils_1.elementIsTextInput)(e.target);
        for (var _i = 0, _c = global ? globalKeys : localKeys; _i < _c.length; _i++) {
            var key = _c[_i];
            var _d = key.config, _e = _d.allowInInput, allowInInput = _e === void 0 ? false : _e, _f = _d.disabled, disabled = _f === void 0 ? false : _f, _g = _d.preventDefault, preventDefault = _g === void 0 ? false : _g, _h = _d.stopPropagation, stopPropagation = _h === void 0 ? false : _h;
            var shouldIgnore = (isTextInput && !allowInInput) || disabled;
            if (!shouldIgnore && (0, hotkeyParser_1.comboMatches)(key.combo, combo)) {
                if (preventDefault) {
                    e.preventDefault();
                }
                if (stopPropagation) {
                    // set a flag just for unit testing. not meant to be referenced in feature work.
                    e.isPropagationStopped = true;
                    e.stopPropagation();
                }
                (_b = (_a = key.config)[callbackName]) === null || _b === void 0 ? void 0 : _b.call(_a, e);
            }
        }
    }, [globalKeys, localKeys]);
    var handleGlobalKeyDown = React.useCallback(function (e) {
        // special case for global keydown: if '?' is pressed, open the hotkeys dialog
        var combo = (0, hotkeyParser_1.getKeyCombo)(e);
        var isTextInput = (0, domUtils_1.elementIsTextInput)(e.target);
        if (!isTextInput && (0, hotkeyParser_1.comboMatches)((0, hotkeyParser_1.parseKeyCombo)(showDialogKeyCombo), combo)) {
            dispatch({ type: "OPEN_DIALOG" });
        }
        else {
            invokeNamedCallbackIfComboRecognized(true, (0, hotkeyParser_1.getKeyCombo)(e), "onKeyDown", e);
        }
    }, [dispatch, invokeNamedCallbackIfComboRecognized, showDialogKeyCombo]);
    var handleGlobalKeyUp = React.useCallback(function (e) { return invokeNamedCallbackIfComboRecognized(true, (0, hotkeyParser_1.getKeyCombo)(e), "onKeyUp", e); }, [invokeNamedCallbackIfComboRecognized]);
    var handleLocalKeyDown = React.useCallback(function (e) {
        return invokeNamedCallbackIfComboRecognized(false, (0, hotkeyParser_1.getKeyCombo)(e.nativeEvent), "onKeyDown", e.nativeEvent);
    }, [invokeNamedCallbackIfComboRecognized]);
    var handleLocalKeyUp = React.useCallback(function (e) {
        return invokeNamedCallbackIfComboRecognized(false, (0, hotkeyParser_1.getKeyCombo)(e.nativeEvent), "onKeyUp", e.nativeEvent);
    }, [invokeNamedCallbackIfComboRecognized]);
    React.useEffect(function () {
        // document is guaranteed to be defined inside effects
        document.addEventListener("keydown", handleGlobalKeyDown);
        document.addEventListener("keyup", handleGlobalKeyUp);
        return function () {
            document.removeEventListener("keydown", handleGlobalKeyDown);
            document.removeEventListener("keyup", handleGlobalKeyUp);
        };
    }, [handleGlobalKeyDown, handleGlobalKeyUp]);
    return { handleKeyDown: handleLocalKeyDown, handleKeyUp: handleLocalKeyUp };
}
exports.useHotkeys = useHotkeys;
function getDefaultDocument() {
    if (typeof window === "undefined") {
        return undefined;
    }
    return window.document;
}
//# sourceMappingURL=useHotkeys.js.map
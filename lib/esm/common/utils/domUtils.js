/*
 * Copyright 2020 Palantir Technologies, Inc. All rights reserved.
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
import { __assign } from "tslib";
export function elementIsOrContains(element, testElement) {
    return element === testElement || element.contains(testElement);
}
/**
 * Checks whether the given element is inside something that looks like a text input.
 * This is particularly useful to determine if a keyboard event inside this element should take priority over hotkey
 * bindings / keyboard shortcut handlers.
 *
 * @returns true if the element is inside a text input
 */
export function elementIsTextInput(elem) {
    // we check these cases for unit testing, but this should not happen
    // during normal operation
    if (elem == null || elem.closest == null) {
        return false;
    }
    var editable = elem.closest("input, textarea, [contenteditable=true]");
    if (editable == null) {
        return false;
    }
    // don't let checkboxes, switches, and radio buttons prevent hotkey behavior
    if (editable.tagName.toLowerCase() === "input") {
        var inputType = editable.type;
        if (inputType === "checkbox" || inputType === "radio") {
            return false;
        }
    }
    // don't let read-only fields prevent hotkey behavior
    if (editable.readOnly) {
        return false;
    }
    return true;
}
/**
 * Gets the active element in the document or shadow root (if an element is provided, and it's in the shadow DOM).
 */
export function getActiveElement(element, options) {
    var _a;
    if (element == null) {
        return document.activeElement;
    }
    var rootNode = ((_a = element.getRootNode(options)) !== null && _a !== void 0 ? _a : document);
    return rootNode.activeElement;
}
/**
 * Throttle an event on an EventTarget by wrapping it in a
 * `requestAnimationFrame` call. Returns the event handler that was bound to
 * given eventName so you can clean up after yourself.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/Events/scroll
 */
/* istanbul ignore next */
export function throttleEvent(target, eventName, newEventName) {
    var throttledFunc = throttleImpl(function (event) {
        target.dispatchEvent(new CustomEvent(newEventName, event));
    });
    target.addEventListener(eventName, throttledFunc);
    return throttledFunc;
}
/**
 * Throttle a callback by wrapping it in a `requestAnimationFrame` call. Returns
 * the throttled function.
 *
 * @see https://www.html5rocks.com/en/tutorials/speed/animations/
 */
export function throttleReactEventCallback(callback, options) {
    if (options === void 0) { options = {}; }
    var throttledFunc = throttleImpl(callback, function (event2) {
        if (options.preventDefault) {
            event2.preventDefault();
        }
    }, 
    // prevent React from reclaiming the event object before we reference it
    function (event2) { return event2.persist(); });
    return throttledFunc;
}
/**
 * Throttle a method by wrapping it in a `requestAnimationFrame` call. Returns
 * the throttled function.
 */
/* istanbul ignore next */
// eslint-disable-next-line @typescript-eslint/ban-types
export function throttle(method) {
    return throttleImpl(method);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function throttleImpl(onAnimationFrameRequested, onBeforeIsRunningCheck, onAfterIsRunningCheck) {
    var isRunning = false;
    var func = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        onBeforeIsRunningCheck === null || onBeforeIsRunningCheck === void 0 ? void 0 : onBeforeIsRunningCheck.apply(void 0, args);
        if (isRunning) {
            return;
        }
        isRunning = true;
        onAfterIsRunningCheck === null || onAfterIsRunningCheck === void 0 ? void 0 : onAfterIsRunningCheck.apply(void 0, args);
        requestAnimationFrame(function () {
            onAnimationFrameRequested.apply(void 0, args);
            isRunning = false;
        });
    };
    return func;
}
export function clickElementOnKeyPress(keys) {
    return function (e) {
        return keys.some(function (key) { return e.key === key; }) && e.target.dispatchEvent(new MouseEvent("click", __assign(__assign({}, e), { view: undefined })));
    };
}
//# sourceMappingURL=domUtils.js.map
/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
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
/**
 * @fileoverview This component is DEPRECATED, and the code is frozen.
 * All changes & bugfixes should be made to HotkeysTarget2 instead.
 */
/* eslint-disable deprecation/deprecation */
import * as React from "react";
import { isFunction } from "../common/utils";
import { HotkeyScope, HotkeysEvents } from "./hotkeysEvents";
import { getDisplayName } from "./legacyCommon";
const HOTKEYS_WARN_DECORATOR_NO_METHOD = `[Blueprint] @HotkeysTargetLegacy-decorated class should implement renderHotkeys.`;
const HOTKEYS_WARN_DECORATOR_NEEDS_REACT_ELEMENT = `[Blueprint] "@HotkeysTargetLegacy-decorated components must return a single JSX.Element or an empty render.`;
/** @deprecated use `useHotkeys` hook or `<HotkeysTarget2>` component */
export function HotkeysTargetLegacy(WrappedComponent) {
    if (!isFunction(WrappedComponent.prototype.renderHotkeys)) {
        console.warn(HOTKEYS_WARN_DECORATOR_NO_METHOD);
    }
    return class HotkeysTargetClass extends WrappedComponent {
        static displayName = `HotkeysTarget(${getDisplayName(WrappedComponent)})`;
        /** @internal */
        globalHotkeysEvents = new HotkeysEvents(HotkeyScope.GLOBAL);
        /** @internal */
        localHotkeysEvents = new HotkeysEvents(HotkeyScope.LOCAL);
        componentDidMount() {
            if (super.componentDidMount != null) {
                super.componentDidMount();
            }
            // attach global key event listeners
            document.addEventListener("keydown", this.globalHotkeysEvents.handleKeyDown);
            document.addEventListener("keyup", this.globalHotkeysEvents.handleKeyUp);
        }
        componentWillUnmount() {
            super.componentWillUnmount?.();
            document.removeEventListener("keydown", this.globalHotkeysEvents.handleKeyDown);
            document.removeEventListener("keyup", this.globalHotkeysEvents.handleKeyUp);
            this.globalHotkeysEvents.clear();
            this.localHotkeysEvents.clear();
        }
        render() {
            const element = super.render();
            if (element == null) {
                // always return `element` in case caller is distinguishing between `null` and `undefined`
                return element;
            }
            if (!React.isValidElement(element)) {
                console.warn(HOTKEYS_WARN_DECORATOR_NEEDS_REACT_ELEMENT);
                return element;
            }
            if (isFunction(this.renderHotkeys)) {
                const hotkeys = this.renderHotkeys();
                if (this.localHotkeysEvents) {
                    this.localHotkeysEvents.setHotkeys(hotkeys.props);
                }
                if (this.globalHotkeysEvents) {
                    this.globalHotkeysEvents.setHotkeys(hotkeys.props);
                }
                if (this.localHotkeysEvents.count() > 0) {
                    const tabIndex = hotkeys.props.tabIndex === undefined ? 0 : hotkeys.props.tabIndex;
                    const { onKeyDown: existingKeyDown, onKeyUp: existingKeyUp } = element.props;
                    const handleKeyDownWrapper = (e) => {
                        this.localHotkeysEvents.handleKeyDown(e.nativeEvent);
                        existingKeyDown?.(e);
                    };
                    const handleKeyUpWrapper = (e) => {
                        this.localHotkeysEvents.handleKeyUp(e.nativeEvent);
                        existingKeyUp?.(e);
                    };
                    return React.cloneElement(element, {
                        onKeyDown: handleKeyDownWrapper,
                        onKeyUp: handleKeyUpWrapper,
                        tabIndex,
                    });
                }
            }
            return element;
        }
    };
}
//# sourceMappingURL=hotkeysTargetLegacy.js.map
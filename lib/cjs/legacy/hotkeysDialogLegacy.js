"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.hideHotkeysDialogAfterDelay = exports.hideHotkeysDialog = exports.showHotkeysDialog = exports.setHotkeysDialogProps = exports.isHotkeysDialogShowing = void 0;
var tslib_1 = require("tslib");
/**
 * @fileoverview This component is DEPRECATED, and the code is frozen.
 * All changes & bugfixes should be made to HotkeysDialog2 instead.
 */
/* eslint-disable deprecation/deprecation */
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var ReactDOM = tslib_1.__importStar(require("react-dom"));
var common_1 = require("../common");
var components_1 = require("../components");
/**
 * The delay before showing or hiding the dialog. Should be long enough to
 * allow all registered hotkey listeners to execute first.
 */
var DELAY_IN_MS = 10;
/** @deprecated use HotkeysDialog2 */
var HotkeysDialogLegacy = /** @class */ (function () {
    function HotkeysDialogLegacy() {
        var _this = this;
        this.componentProps = {
            globalHotkeysGroup: "Global hotkeys",
        };
        this.container = null;
        this.hotkeysQueue = [];
        this.isDialogShowing = false;
        this.show = function () {
            _this.isDialogShowing = true;
            _this.render();
        };
        this.hide = function () {
            _this.isDialogShowing = false;
            _this.render();
        };
    }
    HotkeysDialogLegacy.prototype.render = function () {
        if (this.container == null) {
            this.container = this.getContainer();
        }
        ReactDOM.render(this.renderComponent(), this.container);
    };
    HotkeysDialogLegacy.prototype.unmount = function () {
        if (this.container != null) {
            ReactDOM.unmountComponentAtNode(this.container);
            this.container.remove();
            this.container = null;
        }
    };
    /**
     * Because hotkeys can be registered globally and locally and because
     * event ordering cannot be guaranteed, we use this debouncing method to
     * allow all hotkey listeners to fire and add their hotkeys to the dialog.
     *
     * 10msec after the last listener adds their hotkeys, we render the dialog
     * and clear the queue.
     */
    HotkeysDialogLegacy.prototype.enqueueHotkeysForDisplay = function (hotkeys) {
        this.hotkeysQueue.push(hotkeys);
        // reset timeout for debounce
        window.clearTimeout(this.showTimeoutToken);
        this.showTimeoutToken = window.setTimeout(this.show, DELAY_IN_MS);
    };
    HotkeysDialogLegacy.prototype.hideAfterDelay = function () {
        window.clearTimeout(this.hideTimeoutToken);
        this.hideTimeoutToken = window.setTimeout(this.hide, DELAY_IN_MS);
    };
    HotkeysDialogLegacy.prototype.isShowing = function () {
        return this.isDialogShowing;
    };
    HotkeysDialogLegacy.prototype.getContainer = function () {
        if (this.container == null) {
            this.container = document.createElement("div");
            this.container.classList.add(common_1.Classes.PORTAL);
            document.body.appendChild(this.container);
        }
        return this.container;
    };
    HotkeysDialogLegacy.prototype.renderComponent = function () {
        return (React.createElement(components_1.Dialog, tslib_1.__assign({}, this.componentProps, { className: (0, classnames_1.default)(common_1.Classes.HOTKEY_DIALOG, this.componentProps.className), isOpen: this.isDialogShowing, onClose: this.hide }),
            React.createElement("div", { className: common_1.Classes.DIALOG_BODY }, this.renderHotkeys())));
    };
    HotkeysDialogLegacy.prototype.renderHotkeys = function () {
        var _this = this;
        var hotkeys = this.emptyHotkeyQueue();
        var elements = hotkeys.map(function (hotkey, index) {
            var group = hotkey.global === true && hotkey.group == null ? _this.componentProps.globalHotkeysGroup : hotkey.group;
            return React.createElement(components_1.Hotkey, tslib_1.__assign({ key: index }, hotkey, { group: group }));
        });
        return React.createElement(components_1.Hotkeys, null, elements);
    };
    HotkeysDialogLegacy.prototype.emptyHotkeyQueue = function () {
        // flatten then empty the hotkeys queue
        var hotkeys = this.hotkeysQueue.reduce(function (arr, queued) { return arr.concat(queued); }, []);
        this.hotkeysQueue.length = 0;
        return hotkeys;
    };
    return HotkeysDialogLegacy;
}());
// singleton instance
var HOTKEYS_DIALOG = new HotkeysDialogLegacy();
/** @deprecated use HotkeysProvider */
function isHotkeysDialogShowing() {
    return HOTKEYS_DIALOG.isShowing();
}
exports.isHotkeysDialogShowing = isHotkeysDialogShowing;
/** @deprecated use HotkeysProvider */
function setHotkeysDialogProps(props) {
    for (var key in props) {
        if (props.hasOwnProperty(key)) {
            HOTKEYS_DIALOG.componentProps[key] = props[key];
        }
    }
}
exports.setHotkeysDialogProps = setHotkeysDialogProps;
/** @deprecated use HotkeysProvider */
function showHotkeysDialog(hotkeys) {
    HOTKEYS_DIALOG.enqueueHotkeysForDisplay(hotkeys);
}
exports.showHotkeysDialog = showHotkeysDialog;
/** @deprecated use HotkeysProvider */
function hideHotkeysDialog() {
    HOTKEYS_DIALOG.hide();
}
exports.hideHotkeysDialog = hideHotkeysDialog;
/**
 * Use this function instead of `hideHotkeysDialog` if you need to ensure that all hotkey listeners
 * have time to execute with the dialog in a consistent open state. This can avoid flickering the
 * dialog between open and closed states as successive listeners fire.
 *
 * @deprecated use HotkeysProvider
 */
function hideHotkeysDialogAfterDelay() {
    HOTKEYS_DIALOG.hideAfterDelay();
}
exports.hideHotkeysDialogAfterDelay = hideHotkeysDialogAfterDelay;
//# sourceMappingURL=hotkeysDialogLegacy.js.map
"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
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
exports.Dialog = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var icons_1 = require("@blueprintjs/icons");
var common_1 = require("../../common");
var Errors = tslib_1.__importStar(require("../../common/errors"));
var utils_1 = require("../../common/utils");
var buttons_1 = require("../button/buttons");
var html_1 = require("../html/html");
var icon_1 = require("../icon/icon");
var overlay_1 = require("../overlay/overlay");
/**
 * Dialog component.
 *
 * @see https://blueprintjs.com/docs/#core/components/dialog
 */
var Dialog = /** @class */ (function (_super) {
    tslib_1.__extends(Dialog, _super);
    function Dialog(props) {
        var _this = _super.call(this, props) || this;
        var id = (0, utils_1.uniqueId)("bp-dialog");
        _this.titleId = "title-".concat(id);
        return _this;
    }
    Dialog.prototype.render = function () {
        return (React.createElement(overlay_1.Overlay, tslib_1.__assign({}, this.props, { className: common_1.Classes.OVERLAY_SCROLL_CONTAINER, hasBackdrop: true }),
            React.createElement("div", { className: common_1.Classes.DIALOG_CONTAINER, ref: this.props.containerRef },
                React.createElement("div", { className: (0, classnames_1.default)(common_1.Classes.DIALOG, this.props.className), role: "dialog", "aria-labelledby": this.props["aria-labelledby"] || (this.props.title ? this.titleId : undefined), "aria-describedby": this.props["aria-describedby"], style: this.props.style },
                    this.maybeRenderHeader(),
                    this.props.children))));
    };
    Dialog.prototype.validateProps = function (props) {
        if (props.title == null) {
            if (props.icon != null) {
                console.warn(Errors.DIALOG_WARN_NO_HEADER_ICON);
            }
            if (props.isCloseButtonShown != null) {
                console.warn(Errors.DIALOG_WARN_NO_HEADER_CLOSE_BUTTON);
            }
        }
    };
    Dialog.prototype.maybeRenderCloseButton = function () {
        // show close button if prop is undefined or null
        // this gives us a behavior as if the default value were `true`
        if (this.props.isCloseButtonShown !== false) {
            return (React.createElement(buttons_1.Button, { "aria-label": "Close", className: common_1.Classes.DIALOG_CLOSE_BUTTON, icon: React.createElement(icons_1.SmallCross, { size: icons_1.IconSize.STANDARD }), minimal: true, onClick: this.props.onClose }));
        }
        else {
            return undefined;
        }
    };
    Dialog.prototype.maybeRenderHeader = function () {
        var _a = this.props, icon = _a.icon, title = _a.title;
        if (title == null) {
            return undefined;
        }
        return (React.createElement("div", { className: common_1.Classes.DIALOG_HEADER },
            React.createElement(icon_1.Icon, { icon: icon, size: icons_1.IconSize.STANDARD, "aria-hidden": true, tabIndex: -1 }),
            React.createElement(html_1.H6, { id: this.titleId }, title),
            this.maybeRenderCloseButton()));
    };
    Dialog.defaultProps = {
        canOutsideClickClose: true,
        isOpen: false,
    };
    Dialog.displayName = "".concat(common_1.DISPLAYNAME_PREFIX, ".Dialog");
    return Dialog;
}(common_1.AbstractPureComponent));
exports.Dialog = Dialog;
//# sourceMappingURL=dialog.js.map
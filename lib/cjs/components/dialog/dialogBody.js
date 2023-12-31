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
exports.DialogBody = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var common_1 = require("../../common");
/**
 * Dialog body component.
 *
 * @see https://blueprintjs.com/docs/#core/components/dialog.dialog-body-props
 */
var DialogBody = /** @class */ (function (_super) {
    tslib_1.__extends(DialogBody, _super);
    function DialogBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogBody.prototype.render = function () {
        var _a;
        return (React.createElement("div", { className: (0, classnames_1.default)(common_1.Classes.DIALOG_BODY, this.props.className, (_a = {},
                _a[common_1.Classes.DIALOG_BODY_SCROLL_CONTAINER] = this.props.useOverflowScrollContainer,
                _a)) }, this.props.children));
    };
    DialogBody.defaultProps = {
        useOverflowScrollContainer: true,
    };
    return DialogBody;
}(common_1.AbstractPureComponent));
exports.DialogBody = DialogBody;
//# sourceMappingURL=dialogBody.js.map
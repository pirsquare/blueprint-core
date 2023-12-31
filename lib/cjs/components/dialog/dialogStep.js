"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogStep = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var common_1 = require("../../common");
var props_1 = require("../../common/props");
/**
 * Dialog step component.
 *
 * @see https://blueprintjs.com/docs/#core/components/dialog.dialogstep
 */
var DialogStep = /** @class */ (function (_super) {
    tslib_1.__extends(DialogStep, _super);
    function DialogStep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // this component is never rendered directly; see MultistepDialog#renderDialogStepPanel()
    /* istanbul ignore next */
    DialogStep.prototype.render = function () {
        var className = this.props.className;
        return (React.createElement("div", { className: common_1.Classes.DIALOG_STEP_CONTAINER, role: "tab" },
            React.createElement("div", { className: (0, classnames_1.default)(common_1.Classes.DIALOG_STEP, className) })));
    };
    DialogStep.displayName = "".concat(props_1.DISPLAYNAME_PREFIX, ".DialogStep");
    return DialogStep;
}(common_1.AbstractPureComponent));
exports.DialogStep = DialogStep;
//# sourceMappingURL=dialogStep.js.map
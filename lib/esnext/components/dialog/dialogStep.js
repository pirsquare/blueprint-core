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
import classNames from "classnames";
import * as React from "react";
import { AbstractPureComponent, Classes } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
/**
 * Dialog step component.
 *
 * @see https://blueprintjs.com/docs/#core/components/dialog.dialogstep
 */
export class DialogStep extends AbstractPureComponent {
    static displayName = `${DISPLAYNAME_PREFIX}.DialogStep`;
    // this component is never rendered directly; see MultistepDialog#renderDialogStepPanel()
    /* istanbul ignore next */
    render() {
        const { className } = this.props;
        return (React.createElement("div", { className: Classes.DIALOG_STEP_CONTAINER, role: "tab" },
            React.createElement("div", { className: classNames(Classes.DIALOG_STEP, className) })));
    }
}
//# sourceMappingURL=dialogStep.js.map
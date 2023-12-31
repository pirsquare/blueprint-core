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
import { __extends } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { AbstractPureComponent, Classes } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
import { clamp } from "../../common/utils";
/**
 * Progress bar component.
 *
 * @see https://blueprintjs.com/docs/#core/components/progress-bar
 */
var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBar.prototype.render = function () {
        var _a;
        var _b = this.props, _c = _b.animate, animate = _c === void 0 ? true : _c, className = _b.className, intent = _b.intent, _d = _b.stripes, stripes = _d === void 0 ? true : _d, value = _b.value;
        var classes = classNames(Classes.PROGRESS_BAR, Classes.intentClass(intent), (_a = {}, _a[Classes.PROGRESS_NO_ANIMATION] = !animate, _a[Classes.PROGRESS_NO_STRIPES] = !stripes, _a), className);
        var percent = value == null ? undefined : 100 * clamp(value, 0, 1);
        // don't set width if value is null (rely on default CSS value)
        var width = percent == null ? undefined : percent + "%";
        return (React.createElement("div", { "aria-valuemax": 100, "aria-valuemin": 0, "aria-valuenow": percent == null ? undefined : Math.round(percent), className: classes, role: "progressbar" },
            React.createElement("div", { className: Classes.PROGRESS_METER, style: { width: width } })));
    };
    ProgressBar.displayName = "".concat(DISPLAYNAME_PREFIX, ".ProgressBar");
    return ProgressBar;
}(AbstractPureComponent));
export { ProgressBar };
//# sourceMappingURL=progressBar.js.map
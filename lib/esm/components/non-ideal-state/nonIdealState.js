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
import { IconSize } from "@blueprintjs/icons";
import { AbstractPureComponent, Classes, DISPLAYNAME_PREFIX } from "../../common";
import { ensureElement } from "../../common/utils";
import { H4 } from "../html/html";
import { Icon } from "../icon/icon";
export var NonIdealStateIconSize;
(function (NonIdealStateIconSize) {
    NonIdealStateIconSize[NonIdealStateIconSize["STANDARD"] = 48] = "STANDARD";
    NonIdealStateIconSize[NonIdealStateIconSize["SMALL"] = 32] = "SMALL";
    NonIdealStateIconSize[NonIdealStateIconSize["EXTRA_SMALL"] = 20] = "EXTRA_SMALL";
})(NonIdealStateIconSize || (NonIdealStateIconSize = {}));
/**
 * Non-ideal state component.
 *
 * @see https://blueprintjs.com/docs/#core/components/non-ideal-state
 */
var NonIdealState = /** @class */ (function (_super) {
    __extends(NonIdealState, _super);
    function NonIdealState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NonIdealState.prototype.render = function () {
        var _a = this.props, action = _a.action, children = _a.children, className = _a.className, layout = _a.layout;
        return (React.createElement("div", { className: classNames(Classes.NON_IDEAL_STATE, "".concat(Classes.NON_IDEAL_STATE, "-").concat(layout), className) },
            this.maybeRenderVisual(),
            this.maybeRenderText(),
            action,
            children));
    };
    NonIdealState.prototype.maybeRenderVisual = function () {
        var _a = this.props, icon = _a.icon, iconSize = _a.iconSize;
        if (icon == null) {
            return undefined;
        }
        else {
            return (React.createElement("div", { className: Classes.NON_IDEAL_STATE_VISUAL, style: { fontSize: "".concat(iconSize, "px"), lineHeight: "".concat(iconSize, "px") } },
                React.createElement(Icon, { icon: icon, size: iconSize, "aria-hidden": true, tabIndex: -1 })));
        }
    };
    NonIdealState.prototype.maybeRenderText = function () {
        var _a = this.props, description = _a.description, title = _a.title;
        if (title == null && description == null) {
            return undefined;
        }
        else {
            return (React.createElement("div", { className: Classes.NON_IDEAL_STATE_TEXT },
                title && React.createElement(H4, null, title),
                description && ensureElement(description, "div")));
        }
    };
    NonIdealState.displayName = "".concat(DISPLAYNAME_PREFIX, ".NonIdealState");
    NonIdealState.defaultProps = {
        iconSize: NonIdealStateIconSize.STANDARD,
        layout: "vertical",
    };
    return NonIdealState;
}(AbstractPureComponent));
export { NonIdealState };
//# sourceMappingURL=nonIdealState.js.map
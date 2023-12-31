/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
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
import { __assign, __extends, __rest } from "tslib";
import classNames from "classnames";
import * as React from "react";
import { AbstractPureComponent } from "../../common";
import { DIVIDER } from "../../common/classes";
import { DISPLAYNAME_PREFIX } from "../../common/props";
// this component is simple enough that tests would be purely tautological.
/* istanbul ignore next */
/**
 * Divider component.
 *
 * @see https://blueprintjs.com/docs/#core/components/divider
 */
var Divider = /** @class */ (function (_super) {
    __extends(Divider, _super);
    function Divider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Divider.prototype.render = function () {
        var _a = this.props, className = _a.className, _b = _a.tagName, tagName = _b === void 0 ? "div" : _b, htmlProps = __rest(_a, ["className", "tagName"]);
        var classes = classNames(DIVIDER, className);
        return React.createElement(tagName, __assign(__assign({}, htmlProps), { className: classes }));
    };
    Divider.displayName = "".concat(DISPLAYNAME_PREFIX, ".Divider");
    return Divider;
}(AbstractPureComponent));
export { Divider };
//# sourceMappingURL=divider.js.map
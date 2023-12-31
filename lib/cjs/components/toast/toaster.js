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
exports.Toaster = void 0;
var overlayToaster_1 = require("./overlayToaster");
// merges with declaration of `Toaster` type in `toasterTypes.ts`
// kept for backwards-compatibility with v4.x
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.Toaster = {
    // eslint-disable-next-line deprecation/deprecation
    create: deprecatedToasterCreate,
};
/** @deprecated use OverlayToaster.create() instead */
function deprecatedToasterCreate(props, container) {
    if (container === void 0) { container = document.body; }
    return overlayToaster_1.OverlayToaster.create(props, container);
}
//# sourceMappingURL=toaster.js.map
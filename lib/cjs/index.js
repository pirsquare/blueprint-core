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
exports.ContextMenuTargetLegacy = exports.hideHotkeysDialogAfterDelay = exports.hideHotkeysDialog = exports.showHotkeysDialog = exports.setHotkeysDialogProps = exports.isHotkeysDialogShowing = exports.HotkeysTarget = exports.FocusStyleManager = void 0;
var tslib_1 = require("tslib");
var focusStyleManager_1 = require("./accessibility/focusStyleManager");
Object.defineProperty(exports, "FocusStyleManager", { enumerable: true, get: function () { return focusStyleManager_1.FocusStyleManager; } });
tslib_1.__exportStar(require("./common"), exports);
tslib_1.__exportStar(require("./components"), exports);
tslib_1.__exportStar(require("./context"), exports);
tslib_1.__exportStar(require("./hooks"), exports);
/* eslint-disable deprecation/deprecation */
tslib_1.__exportStar(require("./deprecatedTypeAliases"), exports);
var hotkeysTargetLegacy_1 = require("./legacy/hotkeysTargetLegacy");
Object.defineProperty(exports, "HotkeysTarget", { enumerable: true, get: function () { return hotkeysTargetLegacy_1.HotkeysTargetLegacy; } });
var hotkeysDialogLegacy_1 = require("./legacy/hotkeysDialogLegacy");
Object.defineProperty(exports, "isHotkeysDialogShowing", { enumerable: true, get: function () { return hotkeysDialogLegacy_1.isHotkeysDialogShowing; } });
Object.defineProperty(exports, "setHotkeysDialogProps", { enumerable: true, get: function () { return hotkeysDialogLegacy_1.setHotkeysDialogProps; } });
Object.defineProperty(exports, "showHotkeysDialog", { enumerable: true, get: function () { return hotkeysDialogLegacy_1.showHotkeysDialog; } });
Object.defineProperty(exports, "hideHotkeysDialog", { enumerable: true, get: function () { return hotkeysDialogLegacy_1.hideHotkeysDialog; } });
Object.defineProperty(exports, "hideHotkeysDialogAfterDelay", { enumerable: true, get: function () { return hotkeysDialogLegacy_1.hideHotkeysDialogAfterDelay; } });
var contextMenuTargetLegacy_1 = require("./legacy/contextMenuTargetLegacy");
Object.defineProperty(exports, "ContextMenuTargetLegacy", { enumerable: true, get: function () { return contextMenuTargetLegacy_1.ContextMenuTargetLegacy; } });
//# sourceMappingURL=index.js.map
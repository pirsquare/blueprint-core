"use strict";
/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
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
exports.positionToPlacement = void 0;
var popoverPosition_1 = require("./popoverPosition");
/**
 * Convert a position to a placement.
 *
 * @param position the position to convert
 */
function positionToPlacement(position) {
    /* istanbul ignore next */
    switch (position) {
        case popoverPosition_1.PopoverPosition.TOP_LEFT:
            return "top-start";
        case popoverPosition_1.PopoverPosition.TOP:
            return "top";
        case popoverPosition_1.PopoverPosition.TOP_RIGHT:
            return "top-end";
        case popoverPosition_1.PopoverPosition.RIGHT_TOP:
            return "right-start";
        case popoverPosition_1.PopoverPosition.RIGHT:
            return "right";
        case popoverPosition_1.PopoverPosition.RIGHT_BOTTOM:
            return "right-end";
        case popoverPosition_1.PopoverPosition.BOTTOM_RIGHT:
            return "bottom-end";
        case popoverPosition_1.PopoverPosition.BOTTOM:
            return "bottom";
        case popoverPosition_1.PopoverPosition.BOTTOM_LEFT:
            return "bottom-start";
        case popoverPosition_1.PopoverPosition.LEFT_BOTTOM:
            return "left-end";
        case popoverPosition_1.PopoverPosition.LEFT:
            return "left";
        case popoverPosition_1.PopoverPosition.LEFT_TOP:
            return "left-start";
        case "auto":
        case "auto-start":
        case "auto-end":
            // Return the string unchanged.
            return position;
        default:
            return assertNever(position);
    }
}
exports.positionToPlacement = positionToPlacement;
/* istanbul ignore next */
function assertNever(x) {
    throw new Error("Unexpected position: " + x);
}
//# sourceMappingURL=popoverPlacementUtils.js.map
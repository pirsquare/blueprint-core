"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.IconSize = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var icons_1 = require("@blueprintjs/icons");
Object.defineProperty(exports, "IconSize", { enumerable: true, get: function () { return icons_1.IconSize; } });
var common_1 = require("../../common");
/**
 * Icon component.
 *
 * @see https://blueprintjs.com/docs/#core/components/icon
 */
// eslint-disable-next-line prefer-arrow-callback
exports.Icon = React.forwardRef(function (props, ref) {
    var _a, _b;
    var autoLoad = props.autoLoad, className = props.className, color = props.color, icon = props.icon, intent = props.intent, tagName = props.tagName, svgProps = props.svgProps, title = props.title, htmlTitle = props.htmlTitle, htmlProps = tslib_1.__rest(props, ["autoLoad", "className", "color", "icon", "intent", "tagName", "svgProps", "title", "htmlTitle"]);
    // Preserve Blueprint v4.x behavior: iconSize prop takes predecence, then size prop, then fall back to default value
    // eslint-disable-next-line deprecation/deprecation
    var size = (_b = (_a = props.iconSize) !== null && _a !== void 0 ? _a : props.size) !== null && _b !== void 0 ? _b : icons_1.IconSize.STANDARD;
    var _c = React.useState(function () {
        return typeof icon === "string" ? icons_1.Icons.getPaths(icon, size) : undefined;
    }), iconPaths = _c[0], setIconPaths = _c[1];
    React.useEffect(function () {
        var shouldCancelIconLoading = false;
        if (typeof icon === "string") {
            // The icon may have been loaded already, in which case we can simply grab it.
            // N.B. when `autoLoad={true}`, we can't rely on simply calling Icons.load() here to re-load an icon module
            // which has already been loaded & cached, since it may have been loaded with special loading options which
            // this component knows nothing about.
            var loadedIconPaths = icons_1.Icons.getPaths(icon, size);
            if (loadedIconPaths !== undefined) {
                setIconPaths(loadedIconPaths);
            }
            else if (autoLoad) {
                icons_1.Icons.load(icon, size)
                    .then(function () {
                    // if this effect expired by the time icon loaded, then don't set state
                    if (!shouldCancelIconLoading) {
                        setIconPaths(icons_1.Icons.getPaths(icon, size));
                    }
                })
                    .catch(function (reason) {
                    console.error("[Blueprint] Icon '".concat(icon, "' (").concat(size, "px) could not be loaded."), reason);
                });
            }
            else {
                console.error("[Blueprint] Icon '".concat(icon, "' (").concat(size, "px) is not loaded yet and autoLoad={false}, did you call Icons.load('").concat(icon, "', ").concat(size, ")?"));
            }
        }
        return function () {
            shouldCancelIconLoading = true;
        };
    }, [autoLoad, icon, size]);
    if (icon == null || typeof icon === "boolean") {
        return null;
    }
    else if (typeof icon !== "string") {
        return icon;
    }
    if (iconPaths == null) {
        // fall back to icon font if unloaded or unable to load SVG implementation
        var sizeClass = size === icons_1.IconSize.STANDARD
            ? common_1.Classes.ICON_STANDARD
            : size === icons_1.IconSize.LARGE
                ? common_1.Classes.ICON_LARGE
                : undefined;
        return React.createElement(tagName, tslib_1.__assign(tslib_1.__assign({ "aria-hidden": title ? undefined : true }, (0, common_1.removeNonHTMLProps)(htmlProps)), { className: (0, classnames_1.default)(common_1.Classes.ICON, sizeClass, common_1.Classes.iconClass(icon), common_1.Classes.intentClass(intent), className), "data-icon": icon, ref: ref, title: htmlTitle }));
    }
    else {
        var pathElements = iconPaths.map(function (d, i) { return React.createElement("path", { d: d, key: i, fillRule: "evenodd" }); });
        // HACKHACK: there is no good way to narrow the type of SVGIconContainerProps here because of the use
        // of a conditional type within the type union that defines that interface. So we cast to <any>.
        // see https://github.com/microsoft/TypeScript/issues/24929, https://github.com/microsoft/TypeScript/issues/33014
        return (React.createElement(icons_1.SVGIconContainer, tslib_1.__assign({ children: pathElements, 
            // don't forward Classes.iconClass(icon) here, since the container will render that class
            className: (0, classnames_1.default)(common_1.Classes.intentClass(intent), className), color: color, htmlTitle: htmlTitle, iconName: icon, ref: ref, size: size, svgProps: svgProps, tagName: tagName, title: title }, (0, common_1.removeNonHTMLProps)(htmlProps))));
    }
});
exports.Icon.defaultProps = {
    autoLoad: true,
    tagName: "span",
};
exports.Icon.displayName = "".concat(common_1.DISPLAYNAME_PREFIX, ".Icon");
//# sourceMappingURL=icon.js.map
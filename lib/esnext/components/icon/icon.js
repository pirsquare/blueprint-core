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
import classNames from "classnames";
import * as React from "react";
import { Icons, IconSize, SVGIconContainer, } from "@blueprintjs/icons";
import { Classes, DISPLAYNAME_PREFIX, removeNonHTMLProps, } from "../../common";
// re-export for convenience, since some users won't be importing from or have a direct dependency on the icons package
export { IconSize };
/**
 * Icon component.
 *
 * @see https://blueprintjs.com/docs/#core/components/icon
 */
// eslint-disable-next-line prefer-arrow-callback
export const Icon = React.forwardRef(function (props, ref) {
    const { autoLoad, className, color, icon, intent, tagName, svgProps, title, htmlTitle, ...htmlProps } = props;
    // Preserve Blueprint v4.x behavior: iconSize prop takes predecence, then size prop, then fall back to default value
    // eslint-disable-next-line deprecation/deprecation
    const size = props.iconSize ?? props.size ?? IconSize.STANDARD;
    const [iconPaths, setIconPaths] = React.useState(() => typeof icon === "string" ? Icons.getPaths(icon, size) : undefined);
    React.useEffect(() => {
        let shouldCancelIconLoading = false;
        if (typeof icon === "string") {
            // The icon may have been loaded already, in which case we can simply grab it.
            // N.B. when `autoLoad={true}`, we can't rely on simply calling Icons.load() here to re-load an icon module
            // which has already been loaded & cached, since it may have been loaded with special loading options which
            // this component knows nothing about.
            const loadedIconPaths = Icons.getPaths(icon, size);
            if (loadedIconPaths !== undefined) {
                setIconPaths(loadedIconPaths);
            }
            else if (autoLoad) {
                Icons.load(icon, size)
                    .then(() => {
                    // if this effect expired by the time icon loaded, then don't set state
                    if (!shouldCancelIconLoading) {
                        setIconPaths(Icons.getPaths(icon, size));
                    }
                })
                    .catch(reason => {
                    console.error(`[Blueprint] Icon '${icon}' (${size}px) could not be loaded.`, reason);
                });
            }
            else {
                console.error(`[Blueprint] Icon '${icon}' (${size}px) is not loaded yet and autoLoad={false}, did you call Icons.load('${icon}', ${size})?`);
            }
        }
        return () => {
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
        const sizeClass = size === IconSize.STANDARD
            ? Classes.ICON_STANDARD
            : size === IconSize.LARGE
                ? Classes.ICON_LARGE
                : undefined;
        return React.createElement(tagName, {
            "aria-hidden": title ? undefined : true,
            ...removeNonHTMLProps(htmlProps),
            className: classNames(Classes.ICON, sizeClass, Classes.iconClass(icon), Classes.intentClass(intent), className),
            "data-icon": icon,
            ref,
            title: htmlTitle,
        });
    }
    else {
        const pathElements = iconPaths.map((d, i) => React.createElement("path", { d: d, key: i, fillRule: "evenodd" }));
        // HACKHACK: there is no good way to narrow the type of SVGIconContainerProps here because of the use
        // of a conditional type within the type union that defines that interface. So we cast to <any>.
        // see https://github.com/microsoft/TypeScript/issues/24929, https://github.com/microsoft/TypeScript/issues/33014
        return (React.createElement(SVGIconContainer, { children: pathElements, 
            // don't forward Classes.iconClass(icon) here, since the container will render that class
            className: classNames(Classes.intentClass(intent), className), color: color, htmlTitle: htmlTitle, iconName: icon, ref: ref, size: size, svgProps: svgProps, tagName: tagName, title: title, ...removeNonHTMLProps(htmlProps) }));
    }
});
Icon.defaultProps = {
    autoLoad: true,
    tagName: "span",
};
Icon.displayName = `${DISPLAYNAME_PREFIX}.Icon`;
//# sourceMappingURL=icon.js.map
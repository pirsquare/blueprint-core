/*
 * Copyright 2022 Palantir Technologies, Inc. All rights reserved.
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
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Classes, DISPLAYNAME_PREFIX } from "../../common";
import * as Errors from "../../common/errors";
import { PortalContext } from "../../context/portal/portalProvider";
/** @deprecated will be removed in Blueprint v6.0 */
var PORTAL_LEGACY_CONTEXT_TYPES = {
    blueprintPortalClassName: function (obj, key) {
        if (obj[key] != null && typeof obj[key] !== "string") {
            return new Error(Errors.PORTAL_CONTEXT_CLASS_NAME_STRING);
        }
        return undefined;
    },
};
/**
 * Portal component.
 *
 * This component detaches its contents and re-attaches them to document.body.
 * Use it when you need to circumvent DOM z-stacking (for dialogs, popovers, etc.).
 * Any class names passed to this element will be propagated to the new container element on document.body.
 *
 * Portal supports both the newer React context API and the legacy context API.
 * Support for the legacy context API will be removed in Blueprint v6.0.
 *
 * @see https://blueprintjs.com/docs/#core/components/portal
 */
export function Portal(_a, legacyContext) {
    var _b;
    var className = _a.className, stopPropagationEvents = _a.stopPropagationEvents, container = _a.container, onChildrenMount = _a.onChildrenMount, children = _a.children;
    if (legacyContext === void 0) { legacyContext = {}; }
    var context = React.useContext(PortalContext);
    var portalContainer = (_b = container !== null && container !== void 0 ? container : context.portalContainer) !== null && _b !== void 0 ? _b : (typeof document !== "undefined" ? document.body : undefined);
    var _c = React.useState(), portalElement = _c[0], setPortalElement = _c[1];
    var createPortalElement = React.useCallback(function () {
        var newPortalElement = document.createElement("div");
        newPortalElement.classList.add(Classes.PORTAL);
        maybeAddClass(newPortalElement.classList, className); // directly added to this portal element
        maybeAddClass(newPortalElement.classList, context.portalClassName); // added via PortalProvider context
        addStopPropagationListeners(newPortalElement, stopPropagationEvents);
        // TODO: remove legacy context support in Blueprint v6.0
        var blueprintPortalClassName = legacyContext.blueprintPortalClassName;
        if (blueprintPortalClassName != null && blueprintPortalClassName !== "") {
            console.error(Errors.PORTAL_LEGACY_CONTEXT_API);
            maybeAddClass(newPortalElement.classList, blueprintPortalClassName); // added via legacy context
        }
        return newPortalElement;
    }, [className, context.portalClassName, legacyContext.blueprintPortalClassName, stopPropagationEvents]);
    // create the container element & attach it to the DOM
    React.useEffect(function () {
        if (portalContainer == null) {
            return;
        }
        var newPortalElement = createPortalElement();
        portalContainer.appendChild(newPortalElement);
        setPortalElement(newPortalElement);
        return function () {
            removeStopPropagationListeners(newPortalElement, stopPropagationEvents);
            newPortalElement.remove();
            setPortalElement(undefined);
        };
    }, [portalContainer, createPortalElement, stopPropagationEvents]);
    // wait until next successful render to invoke onChildrenMount callback
    React.useEffect(function () {
        if (portalElement != null) {
            onChildrenMount === null || onChildrenMount === void 0 ? void 0 : onChildrenMount();
        }
    }, [portalElement, onChildrenMount]);
    React.useEffect(function () {
        if (portalElement != null) {
            maybeAddClass(portalElement.classList, className);
            return function () { return maybeRemoveClass(portalElement.classList, className); };
        }
        return undefined;
    }, [className, portalElement]);
    React.useEffect(function () {
        if (portalElement != null) {
            addStopPropagationListeners(portalElement, stopPropagationEvents);
            return function () { return removeStopPropagationListeners(portalElement, stopPropagationEvents); };
        }
        return undefined;
    }, [portalElement, stopPropagationEvents]);
    // Only render `children` once this component has mounted in a browser environment, so they are
    // immediately attached to the DOM tree and can do DOM things like measuring or `autoFocus`.
    // See long comment on componentDidMount in https://reactjs.org/docs/portals.html#event-bubbling-through-portals
    if (typeof document === "undefined" || portalElement == null) {
        return null;
    }
    else {
        return ReactDOM.createPortal(children, portalElement);
    }
}
Portal.displayName = "".concat(DISPLAYNAME_PREFIX, ".Portal");
// eslint-disable-next-line deprecation/deprecation
Portal.contextTypes = PORTAL_LEGACY_CONTEXT_TYPES;
function maybeRemoveClass(classList, className) {
    if (className != null && className !== "") {
        classList.remove.apply(classList, className.split(" "));
    }
}
function maybeAddClass(classList, className) {
    if (className != null && className !== "") {
        classList.add.apply(classList, className.split(" "));
    }
}
function addStopPropagationListeners(portalElement, eventNames) {
    eventNames === null || eventNames === void 0 ? void 0 : eventNames.forEach(function (event) { return portalElement.addEventListener(event, handleStopProgation); });
}
function removeStopPropagationListeners(portalElement, events) {
    events === null || events === void 0 ? void 0 : events.forEach(function (event) { return portalElement.removeEventListener(event, handleStopProgation); });
}
function handleStopProgation(e) {
    e.stopPropagation();
}
//# sourceMappingURL=portal.js.map
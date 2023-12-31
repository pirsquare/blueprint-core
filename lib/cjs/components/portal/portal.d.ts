import * as React from "react";
import { type Props } from "../../common";
import type { ValidationMap } from "../../common/context";
export interface PortalProps extends Props {
    /** Contents to send through the portal. */
    children: React.ReactNode;
    /**
     * Callback invoked when the children of this `Portal` have been added to the DOM.
     */
    onChildrenMount?: () => void;
    /**
     * The HTML element that children will be mounted to.
     *
     * @default PortalProvider#portalContainer ?? document.body
     */
    container?: HTMLElement;
    /**
     * A list of DOM events which should be stopped from propagating through this portal element.
     *
     * @see https://legacy.reactjs.org/docs/portals.html#event-bubbling-through-portals
     * @see https://github.com/palantir/blueprint/issues/6124
     */
    stopPropagationEvents?: Array<keyof HTMLElementEventMap>;
}
export interface PortalLegacyContext {
    /** Additional CSS classes to add to all `Portal` elements in this React context. */
    blueprintPortalClassName?: string;
}
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
export declare function Portal({ className, stopPropagationEvents, container, onChildrenMount, children }: PortalProps, legacyContext?: PortalLegacyContext): React.ReactPortal | null;
export declare namespace Portal {
    var displayName: string;
    var contextTypes: ValidationMap<PortalLegacyContext>;
}

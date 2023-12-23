import * as React from "react";
import { type Props } from "../../common";
import type { ContextMenuPopoverOptions, Offset } from "./contextMenuShared";
/**
 * Render props relevant to the _content_ of a context menu (rendered as the underlying Popover's content).
 */
export interface ContextMenuContentProps {
    /** Whether the context menu is currently open. */
    isOpen: boolean;
    /**
     * The computed target offset (x, y) coordinates for the context menu click event.
     * On first render, before any context menu click event has occurred, this will be undefined.
     */
    targetOffset: Offset | undefined;
    /** The context menu click event. If isOpen is false, this will be undefined. */
    mouseEvent: React.MouseEvent<HTMLElement> | undefined;
}
/**
 * Render props for advanced usage of ContextMenu.
 */
export interface ContextMenuChildrenProps {
    /** Context menu container element class */
    className: string;
    /** Render props relevant to the content of this context menu */
    contentProps: ContextMenuContentProps;
    /** Context menu handler which implements the custom context menu interaction */
    onContextMenu: React.MouseEventHandler<HTMLElement>;
    /** Popover element rendered by ContextMenu, used to establish a click target to position the menu */
    popover: JSX.Element | undefined;
    /** DOM ref for the context menu target, used to detect dark theme */
    ref: React.Ref<any>;
}
export interface ContextMenuProps extends Omit<React.HTMLAttributes<HTMLElement>, "children" | "className" | "content" | "onContextMenu">, React.RefAttributes<any>, Props {
    /**
     * Menu content. This will usually be a Blueprint `<Menu>` component.
     * This optionally functions as a render prop so you can use component state to render content.
     */
    content: JSX.Element | ((props: ContextMenuContentProps) => JSX.Element | undefined) | undefined;
    /**
     * The context menu target. This may optionally be a render function so you can use
     * component state to render the target.
     */
    children: React.ReactNode | ((props: ContextMenuChildrenProps) => React.ReactElement);
    /**
     * Whether the context menu is disabled.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * Callback invoked when the popover overlay closes.
     */
    onClose?: () => void;
    /**
     * An optional context menu event handler. This can be useful if you want to do something with the
     * mouse event unrelated to rendering the context menu itself, especially if that involves setting
     * React state (which is an error to do in the render code path of this component).
     */
    onContextMenu?: React.MouseEventHandler<HTMLElement>;
    /**
     * A limited subset of props to forward along to the popover overlay generated by this component.
     */
    popoverProps?: ContextMenuPopoverOptions;
    /**
     * HTML tag to use for container element. Only used if this component's children are specified as
     * React node(s), not when it is a render function (in that case, you get to render whatever tag
     * you wish).
     *
     * @default "div"
     */
    tagName?: keyof JSX.IntrinsicElements;
}
/**
 * Context menu component.
 *
 * @see https://blueprintjs.com/docs/#core/components/context-menu
 */
export declare const ContextMenu: React.FC<ContextMenuProps>;

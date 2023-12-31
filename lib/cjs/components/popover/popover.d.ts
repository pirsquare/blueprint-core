import type { State as PopperState, PositioningStrategy } from "@popperjs/core";
import * as React from "react";
import { AbstractPureComponent } from "../../common";
import type { DefaultPopoverTargetHTMLProps, PopoverSharedProps } from "./popoverSharedProps";
import type { PopupKind } from "./popupKind";
export declare const PopoverInteractionKind: {
    CLICK: "click";
    CLICK_TARGET_ONLY: "click-target";
    HOVER: "hover";
    HOVER_TARGET_ONLY: "hover-target";
};
export type PopoverInteractionKind = (typeof PopoverInteractionKind)[keyof typeof PopoverInteractionKind];
export interface PopoverProps<TProps extends DefaultPopoverTargetHTMLProps = DefaultPopoverTargetHTMLProps> extends PopoverSharedProps<TProps> {
    /**
     * Whether the popover/tooltip should acquire application focus when it first opens.
     *
     * @default true for click interactions, false for hover interactions
     */
    autoFocus?: boolean;
    /** HTML props for the backdrop element. Can be combined with `backdropClassName`. */
    backdropProps?: React.HTMLProps<HTMLDivElement>;
    /**
     * The content displayed inside the popover.
     */
    content?: string | JSX.Element;
    /**
     * The kind of interaction that triggers the display of the popover.
     *
     * @default "click"
     */
    interactionKind?: PopoverInteractionKind;
    /**
     * The kind of popup displayed by the popover. This property is ignored if
     * `interactionKind` is {@link PopoverInteractionKind.HOVER_TARGET_ONLY}.
     * This controls the `aria-haspopup` attribute of the target element. The
     * default is "menu" (technically, `aria-haspopup` will be set to "true",
     * which is the same as "menu", for backwards compatibility).
     *
     * @default "menu" or undefined
     */
    popupKind?: PopupKind;
    /**
     * Enables an invisible overlay beneath the popover that captures clicks and
     * prevents interaction with the rest of the document until the popover is
     * closed. This prop is only available when `interactionKind` is
     * `PopoverInteractionKind.CLICK`. When popovers with backdrop are opened,
     * they become focused.
     *
     * @default false
     */
    hasBackdrop?: boolean;
    /**
     * Whether the application should return focus to the last active element in the
     * document after this popover closes.
     *
     * This is automatically set (overridden) to:
     *  - `false` for hover interaction popovers
     *  - `true` when a popover closes due to an ESC keypress
     *
     * If you are attaching a popover _and_ a tooltip to the same target, you must take
     * care to either disable this prop for the popover _or_ disable the tooltip's
     * `openOnTargetFocus` prop.
     *
     * @default false
     */
    shouldReturnFocusOnClose?: boolean;
    /**
     * Popper.js positioning strategy.
     *
     * @see https://popper.js.org/docs/v2/constructors/#strategy
     * @default "absolute"
     */
    positioningStrategy?: PositioningStrategy;
}
export interface PopoverState {
    hasDarkParent: boolean;
    isClosingViaEscapeKeypress: boolean;
    isOpen: boolean;
}
/**
 * Popover component, used to display a floating UI next to and tethered to a target element.
 *
 * @template T target element props interface. Consumers wishing to stay in sync with Blueprint's default target HTML
 * props interface should use the `DefaultPopoverTargetHTMLProps` type (although this is already the default type for
 * this type param).
 * @see https://blueprintjs.com/docs/#core/components/popover
 */
export declare class Popover<T extends DefaultPopoverTargetHTMLProps = DefaultPopoverTargetHTMLProps> extends AbstractPureComponent<PopoverProps<T>, PopoverState> {
    static displayName: string;
    static defaultProps: PopoverProps;
    state: PopoverState;
    /**
     * DOM element that contains the popover.
     * When `usePortal={true}`, this element will be portaled outside the usual DOM flow,
     * so this reference can be very useful for testing.
     *
     * @public for testing
     */
    popoverElement: HTMLElement | null;
    /** Popover ref handler */
    private popoverRef;
    /**
     * Target DOM element ref.
     *
     * N.B. this must be a ref object since we pass it to `<ResizeSensor>`, which needs to know about the target
     * DOM element in order to observe its dimensions.
     *
     * @public for testing
     */
    targetRef: React.RefObject<HTMLElement>;
    private cancelOpenTimeout?;
    private isMouseInTargetOrPopover;
    private lostFocusOnSamePage;
    private popperScheduleUpdate?;
    private isControlled;
    private isArrowEnabled;
    private isHoverInteractionKind;
    private getPopoverElement;
    private getIsOpen;
    render(): JSX.Element | null;
    componentDidMount(): void;
    componentDidUpdate(props: PopoverProps<T>, state: PopoverState): void;
    protected validateProps(props: PopoverProps<T> & {
        children?: React.ReactNode;
    }): void;
    /**
     * Instance method to instruct the `Popover` to recompute its position.
     *
     * This method should only be used if you are updating the target in a way
     * that does not cause it to re-render, such as changing its _position_
     * without changing its _size_ (since `Popover` already repositions when it
     * detects a resize).
     */
    reposition: () => Promise<Partial<PopperState> | null> | undefined;
    private renderTarget;
    private renderPopover;
    private getPopperModifiers;
    private handleTargetFocus;
    private handleTargetBlur;
    private handleTargetContextMenu;
    private handleMouseEnter;
    private handleMouseLeave;
    private handlePopoverClick;
    private handleOverlayClose;
    private handleKeyDown;
    private handleTargetClick;
    private isSimulatedButtonClick;
    private setOpenState;
    private updateDarkParent;
    private isElementInPopover;
}

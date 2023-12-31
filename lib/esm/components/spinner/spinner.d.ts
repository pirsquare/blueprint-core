import * as React from "react";
import { AbstractPureComponent } from "../../common";
import { type IntentProps, type Props } from "../../common/props";
export declare enum SpinnerSize {
    SMALL = 20,
    STANDARD = 50,
    LARGE = 100
}
export interface SpinnerProps<T extends HTMLElement = HTMLElement> extends Props, IntentProps, React.HTMLAttributes<T> {
    /**
     * Width and height of the spinner in pixels. The size cannot be less than
     * 10px.
     *
     * Constants are available for common sizes:
     * - `SpinnerSize.SMALL = 20px`
     * - `SpinnerSize.STANDARD = 50px`
     * - `SpinnerSize.LARGE = 100px`
     *
     * @default SpinnerSize.STANDARD = 50
     */
    size?: number;
    /**
     * HTML tag for the two wrapper elements. If rendering a `<Spinner>` inside
     * an `<svg>`, change this to an SVG element like `"g"`.
     *
     * @default "div"
     */
    tagName?: keyof JSX.IntrinsicElements;
    /**
     * A value between 0 and 1 (inclusive) representing how far along the operation is.
     * Values below 0 or above 1 will be interpreted as 0 or 1 respectively.
     * Omitting this prop will result in an "indeterminate" spinner where the head spins indefinitely.
     */
    value?: number;
}
/**
 * Spinner component.
 *
 * @see https://blueprintjs.com/docs/#core/components/spinner
 */
export declare class Spinner extends AbstractPureComponent<SpinnerProps> {
    static displayName: string;
    componentDidUpdate(prevProps: SpinnerProps): void;
    render(): React.DOMElement<{
        size?: number | undefined;
        defaultChecked?: boolean | undefined;
        defaultValue?: string | number | readonly string[] | undefined;
        suppressContentEditableWarning?: boolean | undefined;
        suppressHydrationWarning?: boolean | undefined;
        accessKey?: string | undefined;
        contentEditable?: "inherit" | (boolean | "false" | "true") | undefined;
        contextMenu?: string | undefined;
        dir?: string | undefined;
        draggable?: (boolean | "false" | "true") | undefined;
        hidden?: boolean | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        placeholder?: string | undefined;
        slot?: string | undefined;
        spellCheck?: (boolean | "false" | "true") | undefined;
        style?: React.CSSProperties | undefined;
        tabIndex?: number | undefined;
        title?: string | undefined;
        translate?: "yes" | "no" | undefined;
        radioGroup?: string | undefined;
        role: string;
        about?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        resource?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;
        autoCapitalize?: string | undefined;
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        color?: string | undefined;
        itemProp?: string | undefined;
        itemScope?: boolean | undefined;
        itemType?: string | undefined;
        itemID?: string | undefined;
        itemRef?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: "off" | "on" | undefined;
        inputMode?: "search" | "numeric" | "none" | "url" | "text" | "email" | "tel" | "decimal" | undefined;
        is?: string | undefined;
        'aria-activedescendant'?: string | undefined;
        'aria-atomic'?: boolean | "false" | "true" | undefined;
        'aria-autocomplete'?: "inline" | "both" | "none" | "list" | undefined;
        'aria-busy'?: boolean | "false" | "true" | undefined;
        'aria-checked'?: boolean | "false" | "mixed" | "true" | undefined;
        'aria-colcount'?: number | undefined;
        'aria-colindex'?: number | undefined;
        'aria-colspan'?: number | undefined;
        'aria-controls'?: string | undefined;
        'aria-current'?: boolean | "false" | "time" | "location" | "page" | "true" | "step" | "date" | undefined;
        'aria-describedby'?: string | undefined;
        'aria-details'?: string | undefined;
        'aria-disabled'?: boolean | "false" | "true" | undefined;
        'aria-dropeffect'?: "link" | "none" | "copy" | "move" | "execute" | "popup" | undefined;
        'aria-errormessage'?: string | undefined;
        'aria-expanded'?: boolean | "false" | "true" | undefined;
        'aria-flowto'?: string | undefined;
        'aria-grabbed'?: boolean | "false" | "true" | undefined;
        'aria-haspopup'?: boolean | "false" | "grid" | "dialog" | "menu" | "listbox" | "true" | "tree" | undefined;
        'aria-hidden'?: boolean | "false" | "true" | undefined;
        'aria-invalid'?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
        'aria-keyshortcuts'?: string | undefined;
        "aria-label": string;
        'aria-labelledby'?: string | undefined;
        'aria-level'?: number | undefined;
        'aria-live'?: "off" | "assertive" | "polite" | undefined;
        'aria-modal'?: boolean | "false" | "true" | undefined;
        'aria-multiline'?: boolean | "false" | "true" | undefined;
        'aria-multiselectable'?: boolean | "false" | "true" | undefined;
        'aria-orientation'?: "horizontal" | "vertical" | undefined;
        'aria-owns'?: string | undefined;
        'aria-placeholder'?: string | undefined;
        'aria-posinset'?: number | undefined;
        'aria-pressed'?: boolean | "false" | "mixed" | "true" | undefined;
        'aria-readonly'?: boolean | "false" | "true" | undefined;
        'aria-relevant'?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
        'aria-required'?: boolean | "false" | "true" | undefined;
        'aria-roledescription'?: string | undefined;
        'aria-rowcount'?: number | undefined;
        'aria-rowindex'?: number | undefined;
        'aria-rowspan'?: number | undefined;
        'aria-selected'?: boolean | "false" | "true" | undefined;
        'aria-setsize'?: number | undefined;
        'aria-sort'?: "none" | "other" | "ascending" | "descending" | undefined;
        "aria-valuemax": number;
        "aria-valuemin": number;
        "aria-valuenow": number | undefined;
        'aria-valuetext'?: string | undefined;
        children?: React.ReactNode;
        dangerouslySetInnerHTML?: {
            __html: string;
        } | undefined;
        onCopy?: React.ClipboardEventHandler<HTMLElement> | undefined;
        onCopyCapture?: React.ClipboardEventHandler<HTMLElement> | undefined;
        onCut?: React.ClipboardEventHandler<HTMLElement> | undefined;
        onCutCapture?: React.ClipboardEventHandler<HTMLElement> | undefined;
        onPaste?: React.ClipboardEventHandler<HTMLElement> | undefined;
        onPasteCapture?: React.ClipboardEventHandler<HTMLElement> | undefined;
        onCompositionEnd?: React.CompositionEventHandler<HTMLElement> | undefined;
        onCompositionEndCapture?: React.CompositionEventHandler<HTMLElement> | undefined;
        onCompositionStart?: React.CompositionEventHandler<HTMLElement> | undefined;
        onCompositionStartCapture?: React.CompositionEventHandler<HTMLElement> | undefined;
        onCompositionUpdate?: React.CompositionEventHandler<HTMLElement> | undefined;
        onCompositionUpdateCapture?: React.CompositionEventHandler<HTMLElement> | undefined;
        onFocus?: React.FocusEventHandler<HTMLElement> | undefined;
        onFocusCapture?: React.FocusEventHandler<HTMLElement> | undefined;
        onBlur?: React.FocusEventHandler<HTMLElement> | undefined;
        onBlurCapture?: React.FocusEventHandler<HTMLElement> | undefined;
        onChange?: React.FormEventHandler<HTMLElement> | undefined;
        onChangeCapture?: React.FormEventHandler<HTMLElement> | undefined;
        onBeforeInput?: React.FormEventHandler<HTMLElement> | undefined;
        onBeforeInputCapture?: React.FormEventHandler<HTMLElement> | undefined;
        onInput?: React.FormEventHandler<HTMLElement> | undefined;
        onInputCapture?: React.FormEventHandler<HTMLElement> | undefined;
        onReset?: React.FormEventHandler<HTMLElement> | undefined;
        onResetCapture?: React.FormEventHandler<HTMLElement> | undefined;
        onSubmit?: React.FormEventHandler<HTMLElement> | undefined;
        onSubmitCapture?: React.FormEventHandler<HTMLElement> | undefined;
        onInvalid?: React.FormEventHandler<HTMLElement> | undefined;
        onInvalidCapture?: React.FormEventHandler<HTMLElement> | undefined;
        onLoad?: React.ReactEventHandler<HTMLElement> | undefined;
        onLoadCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onError?: React.ReactEventHandler<HTMLElement> | undefined;
        onErrorCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onKeyDown?: React.KeyboardEventHandler<HTMLElement> | undefined;
        onKeyDownCapture?: React.KeyboardEventHandler<HTMLElement> | undefined;
        onKeyPress?: React.KeyboardEventHandler<HTMLElement> | undefined;
        onKeyPressCapture?: React.KeyboardEventHandler<HTMLElement> | undefined;
        onKeyUp?: React.KeyboardEventHandler<HTMLElement> | undefined;
        onKeyUpCapture?: React.KeyboardEventHandler<HTMLElement> | undefined;
        onAbort?: React.ReactEventHandler<HTMLElement> | undefined;
        onAbortCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onCanPlay?: React.ReactEventHandler<HTMLElement> | undefined;
        onCanPlayCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onCanPlayThrough?: React.ReactEventHandler<HTMLElement> | undefined;
        onCanPlayThroughCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onDurationChange?: React.ReactEventHandler<HTMLElement> | undefined;
        onDurationChangeCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onEmptied?: React.ReactEventHandler<HTMLElement> | undefined;
        onEmptiedCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onEncrypted?: React.ReactEventHandler<HTMLElement> | undefined;
        onEncryptedCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onEnded?: React.ReactEventHandler<HTMLElement> | undefined;
        onEndedCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onLoadedData?: React.ReactEventHandler<HTMLElement> | undefined;
        onLoadedDataCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onLoadedMetadata?: React.ReactEventHandler<HTMLElement> | undefined;
        onLoadedMetadataCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onLoadStart?: React.ReactEventHandler<HTMLElement> | undefined;
        onLoadStartCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onPause?: React.ReactEventHandler<HTMLElement> | undefined;
        onPauseCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onPlay?: React.ReactEventHandler<HTMLElement> | undefined;
        onPlayCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onPlaying?: React.ReactEventHandler<HTMLElement> | undefined;
        onPlayingCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onProgress?: React.ReactEventHandler<HTMLElement> | undefined;
        onProgressCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onRateChange?: React.ReactEventHandler<HTMLElement> | undefined;
        onRateChangeCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onSeeked?: React.ReactEventHandler<HTMLElement> | undefined;
        onSeekedCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onSeeking?: React.ReactEventHandler<HTMLElement> | undefined;
        onSeekingCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onStalled?: React.ReactEventHandler<HTMLElement> | undefined;
        onStalledCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onSuspend?: React.ReactEventHandler<HTMLElement> | undefined;
        onSuspendCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onTimeUpdate?: React.ReactEventHandler<HTMLElement> | undefined;
        onTimeUpdateCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onVolumeChange?: React.ReactEventHandler<HTMLElement> | undefined;
        onVolumeChangeCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onWaiting?: React.ReactEventHandler<HTMLElement> | undefined;
        onWaitingCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onAuxClick?: React.MouseEventHandler<HTMLElement> | undefined;
        onAuxClickCapture?: React.MouseEventHandler<HTMLElement> | undefined;
        onClick?: React.MouseEventHandler<HTMLElement> | undefined;
        onClickCapture?: React.MouseEventHandler<HTMLElement> | undefined;
        onContextMenu?: React.MouseEventHandler<HTMLElement> | undefined;
        onContextMenuCapture?: React.MouseEventHandler<HTMLElement> | undefined;
        onDoubleClick?: React.MouseEventHandler<HTMLElement> | undefined;
        onDoubleClickCapture?: React.MouseEventHandler<HTMLElement> | undefined;
        onDrag?: React.DragEventHandler<HTMLElement> | undefined;
        onDragCapture?: React.DragEventHandler<HTMLElement> | undefined;
        onDragEnd?: React.DragEventHandler<HTMLElement> | undefined;
        onDragEndCapture?: React.DragEventHandler<HTMLElement> | undefined;
        onDragEnter?: React.DragEventHandler<HTMLElement> | undefined;
        onDragEnterCapture?: React.DragEventHandler<HTMLElement> | undefined;
        onDragExit?: React.DragEventHandler<HTMLElement> | undefined;
        onDragExitCapture?: React.DragEventHandler<HTMLElement> | undefined;
        onDragLeave?: React.DragEventHandler<HTMLElement> | undefined;
        onDragLeaveCapture?: React.DragEventHandler<HTMLElement> | undefined;
        onDragOver?: React.DragEventHandler<HTMLElement> | undefined;
        onDragOverCapture?: React.DragEventHandler<HTMLElement> | undefined;
        onDragStart?: React.DragEventHandler<HTMLElement> | undefined;
        onDragStartCapture?: React.DragEventHandler<HTMLElement> | undefined;
        onDrop?: React.DragEventHandler<HTMLElement> | undefined;
        onDropCapture?: React.DragEventHandler<HTMLElement> | undefined;
        onMouseDown?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseDownCapture?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseEnter?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseLeave?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseMove?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseMoveCapture?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseOut?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseOutCapture?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseOver?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseOverCapture?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseUp?: React.MouseEventHandler<HTMLElement> | undefined;
        onMouseUpCapture?: React.MouseEventHandler<HTMLElement> | undefined;
        onSelect?: React.ReactEventHandler<HTMLElement> | undefined;
        onSelectCapture?: React.ReactEventHandler<HTMLElement> | undefined;
        onTouchCancel?: React.TouchEventHandler<HTMLElement> | undefined;
        onTouchCancelCapture?: React.TouchEventHandler<HTMLElement> | undefined;
        onTouchEnd?: React.TouchEventHandler<HTMLElement> | undefined;
        onTouchEndCapture?: React.TouchEventHandler<HTMLElement> | undefined;
        onTouchMove?: React.TouchEventHandler<HTMLElement> | undefined;
        onTouchMoveCapture?: React.TouchEventHandler<HTMLElement> | undefined;
        onTouchStart?: React.TouchEventHandler<HTMLElement> | undefined;
        onTouchStartCapture?: React.TouchEventHandler<HTMLElement> | undefined;
        onPointerDown?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerDownCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerMove?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerMoveCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerUp?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerUpCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerCancel?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerCancelCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerEnter?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerEnterCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerLeave?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerLeaveCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerOver?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerOverCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerOut?: React.PointerEventHandler<HTMLElement> | undefined;
        onPointerOutCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onGotPointerCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onGotPointerCaptureCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onLostPointerCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onLostPointerCaptureCapture?: React.PointerEventHandler<HTMLElement> | undefined;
        onScroll?: React.UIEventHandler<HTMLElement> | undefined;
        onScrollCapture?: React.UIEventHandler<HTMLElement> | undefined;
        onWheel?: React.WheelEventHandler<HTMLElement> | undefined;
        onWheelCapture?: React.WheelEventHandler<HTMLElement> | undefined;
        onAnimationStart?: React.AnimationEventHandler<HTMLElement> | undefined;
        onAnimationStartCapture?: React.AnimationEventHandler<HTMLElement> | undefined;
        onAnimationEnd?: React.AnimationEventHandler<HTMLElement> | undefined;
        onAnimationEndCapture?: React.AnimationEventHandler<HTMLElement> | undefined;
        onAnimationIteration?: React.AnimationEventHandler<HTMLElement> | undefined;
        onAnimationIterationCapture?: React.AnimationEventHandler<HTMLElement> | undefined;
        onTransitionEnd?: React.TransitionEventHandler<HTMLElement> | undefined;
        onTransitionEndCapture?: React.TransitionEventHandler<HTMLElement> | undefined;
        className: string;
    }, Element>;
    protected validateProps({ className, size }: SpinnerProps): void;
    /**
     * Resolve size to a pixel value.
     * Size can be set by className, props, default, or minimum constant.
     */
    private getSize;
    /** Compute viewbox such that stroked track sits exactly at edge of image frame. */
    private getViewBox;
}

/// <reference types="react" />
export interface Offset {
    left: number;
    top: number;
}
/**
 * Show the given menu element at the given offset from the top-left corner of the viewport.
 * The menu will appear below-right of this point and will flip to below-left if there is not enough
 * room onscreen. The optional callback will be invoked when this menu closes.
 *
 * @deprecated use ContextMenu2
 */
export declare function show(menu: JSX.Element, offset: Offset, onClose?: () => void, isDarkTheme?: boolean): void;
/** Hide the open context menu. */
export declare function hide(): void;
/** Return whether a context menu is currently open. */
export declare function isOpen(): boolean;

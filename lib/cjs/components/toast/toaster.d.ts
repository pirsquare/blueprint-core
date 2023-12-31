import type { OverlayToasterProps } from "./overlayToasterProps";
import type { ToastProps } from "./toast";
export type ToastOptions = ToastProps & {
    key: string;
};
/** Instance methods available on a toaster component instance. */
export interface Toaster {
    /**
     * Shows a new toast to the user, or updates an existing toast corresponding to the provided key (optional).
     *
     * Returns the unique key of the toast.
     */
    show(props: ToastProps, key?: string): string;
    /** Dismiss the given toast instantly. */
    dismiss(key: string): void;
    /** Dismiss all toasts instantly. */
    clear(): void;
    /** Returns the props for all current toasts. */
    getToasts(): ToastOptions[];
}
export type ToasterInstance = Toaster;
export declare const Toaster: {
    create: typeof deprecatedToasterCreate;
};
/** @deprecated use OverlayToaster.create() instead */
declare function deprecatedToasterCreate(props?: OverlayToasterProps, container?: HTMLElement): Toaster;
export {};

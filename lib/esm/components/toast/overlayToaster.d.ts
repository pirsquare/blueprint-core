/// <reference types="react" />
import { AbstractPureComponent } from "../../common";
import type { OverlayToasterProps } from "./overlayToasterProps";
import { type ToastProps } from "./toast";
import type { Toaster, ToastOptions } from "./toaster";
export interface OverlayToasterState {
    toasts: ToastOptions[];
}
/**
 * OverlayToaster component.
 *
 * @see https://blueprintjs.com/docs/#core/components/toast
 */
export declare class OverlayToaster extends AbstractPureComponent<OverlayToasterProps, OverlayToasterState> implements Toaster {
    static displayName: string;
    static defaultProps: OverlayToasterProps;
    /**
     * Create a new `Toaster` instance that can be shared around your application.
     * The `Toaster` will be rendered into a new element appended to the given container.
     */
    static create(props?: OverlayToasterProps, container?: HTMLElement): Toaster;
    state: OverlayToasterState;
    private toastId;
    show(props: ToastProps, key?: string): string;
    dismiss(key: string, timeoutExpired?: boolean): void;
    clear(): void;
    getToasts(): ToastOptions[];
    render(): JSX.Element;
    protected validateProps({ maxToasts }: OverlayToasterProps): void;
    private isNewToastKey;
    private dismissIfAtLimit;
    private renderToast;
    private createToastOptions;
    private getPositionClasses;
    private getDismissHandler;
    private handleClose;
}

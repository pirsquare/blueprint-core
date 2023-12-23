import type * as React from "react";
import type { ActionProps, Alignment, MaybeElement } from "../../common";
import type { IconName } from "../icon/icon";
export interface ButtonSharedProps extends ActionProps<HTMLElement> {
    /**
     * If set to `true`, the button will display in an active state.
     * This is equivalent to setting `className={Classes.ACTIVE}`.
     *
     * @default false
     */
    active?: boolean;
    /**
     * Text alignment within button. By default, icons and text will be centered
     * within the button. Passing `"left"` or `"right"` will align the button
     * text to that side and push `icon` and `rightIcon` to either edge. Passing
     * `"center"` will center the text and icons together.
     *
     * @default Alignment.CENTER
     */
    alignText?: Alignment;
    /** Button contents. */
    children?: React.ReactNode;
    /**
     * If set to `true`, the button text element will hide overflow text that does not fit into a
     * single line and show a trailing ellipsis, similar to the `Text` component.
     *
     * @default false
     */
    ellipsizeText?: boolean;
    /** Whether this button should expand to fill its container. */
    fill?: boolean;
    /** Whether this button should use large styles. */
    large?: boolean;
    /**
     * If set to `true`, the button will display a centered loading spinner instead of its contents
     * and the button will be disabled (_even if_ `disabled={false}`). The width of the button is
     * not affected by the value of this prop.
     *
     * @default false
     */
    loading?: boolean;
    /** Whether this button should use minimal styles. */
    minimal?: boolean;
    /** Whether this button should use outlined styles. */
    outlined?: boolean;
    /** Name of a Blueprint UI icon (or an icon element) to render after the text. */
    rightIcon?: IconName | MaybeElement;
    /** Whether this button should use small styles. */
    small?: boolean;
    /** Class name(s) to apply to the text span element. */
    textClassName?: string;
    /**
     * HTML `type` attribute of button. Accepted values are `"button"`, `"submit"`, and `"reset"`.
     * Note that this prop has no effect on `AnchorButton`; it only affects `Button`.
     *
     * @default "button"
     */
    type?: "submit" | "reset" | "button";
}
/**
 * Props interface assignable to both the Button and AnchorButton components.
 *
 * It is useful for the props for the two components to be assignable to each other because the components
 * are so similar and distinguishing between them in their event handlers is usually unnecessary.
 */
export type ButtonSharedPropsAndAttributes = ButtonSharedProps & React.HTMLAttributes<HTMLElement>;
export type ButtonProps = ButtonSharedProps & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>;
export type AnchorButtonProps = ButtonSharedProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>;

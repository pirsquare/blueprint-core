import * as React from "react";
import { type Alignment } from "../../common";
import { type HTMLDivProps, type Props } from "../../common/props";
export interface ButtonGroupProps extends Props, HTMLDivProps, React.RefAttributes<HTMLDivElement> {
    /**
     * Text alignment within button. By default, icons and text will be centered
     * within the button. Passing `"left"` or `"right"` will align the button
     * text to that side and push `icon` and `rightIcon` to either edge. Passing
     * `"center"` will center the text and icons together.
     */
    alignText?: Alignment;
    /** Buttons in this group. */
    children: React.ReactNode;
    /**
     * Whether the button group should take up the full width of its container.
     *
     * @default false
     */
    fill?: boolean;
    /**
     * Whether the child buttons should appear with minimal styling.
     *
     * @default false
     */
    minimal?: boolean;
    /**
     * Whether the child buttons should appear with large styling.
     *
     * @default false
     */
    large?: boolean;
    /**
     * Whether the button group should appear with vertical styling.
     *
     * @default false
     */
    vertical?: boolean;
}
/**
 * Button group component.
 *
 * @see https://blueprintjs.com/docs/#core/components/button-group
 */
export declare const ButtonGroup: React.FC<ButtonGroupProps>;

import * as React from "react";
import { AbstractPureComponent } from "../../common";
import { type ControlledValueProps, type HTMLInputProps } from "../../common/props";
import type { InputSharedProps } from "./inputSharedProps";
type ControlledInputValueProps = ControlledValueProps<string, HTMLInputElement>;
export interface InputGroupProps extends Omit<HTMLInputProps, keyof ControlledInputValueProps>, ControlledInputValueProps, InputSharedProps {
    /**
     * Set this to `true` if you will be controlling the `value` of this input with asynchronous updates.
     * These may occur if you do not immediately call setState in a parent component with the value from
     * the `onChange` handler, or if working with certain libraries like __redux-form__.
     *
     * @default false
     */
    asyncControl?: boolean;
    /** Whether this input should use large styles. */
    large?: boolean;
    /** Whether this input should use small styles. */
    small?: boolean;
    /** Whether the input (and any buttons) should appear with rounded caps. */
    round?: boolean;
    /**
     * Name of the HTML tag that contains the input group.
     *
     * @default "div"
     */
    tagName?: keyof JSX.IntrinsicElements;
    /**
     * HTML `input` type attribute.
     *
     * @default "text"
     */
    type?: string;
}
export interface InputGroupState {
    leftElementWidth?: number;
    rightElementWidth?: number;
}
/**
 * Input group component.
 *
 * @see https://blueprintjs.com/docs/#core/components/input-group
 */
export declare class InputGroup extends AbstractPureComponent<InputGroupProps, InputGroupState> {
    static displayName: string;
    state: InputGroupState;
    private leftElement;
    private rightElement;
    private refHandlers;
    render(): React.ReactElement<{
        className: string;
    }, string | React.JSXElementConstructor<any>>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: InputGroupProps): void;
    protected validateProps(props: InputGroupProps): void;
    private handleInputChange;
    private maybeRenderLeftElement;
    private maybeRenderRightElement;
    private updateInputWidth;
}
export {};

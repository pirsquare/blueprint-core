import * as React from "react";
import { AbstractPureComponent } from "../../common";
import { type Props } from "../../common/props";
export interface FileInputProps extends React.LabelHTMLAttributes<HTMLLabelElement>, Props {
    /**
     * Whether the file input is non-interactive.
     * Setting this to `true` will automatically disable the child input too.
     */
    disabled?: boolean;
    /**
     * Whether the file input should take up the full width of its container.
     */
    fill?: boolean;
    /**
     * Whether the user has made a selection in the input. This will affect the component's
     * text styling. Make sure to set a non-empty value for the text prop as well.
     *
     * @default false
     */
    hasSelection?: boolean;
    /**
     * The props to pass to the child input.
     * `disabled` will be ignored in favor of the top-level prop.
     * `type` will be ignored, because the input _must_ be `type="file"`.
     * Pass `onChange` here to be notified when the user selects a file.
     */
    inputProps?: React.HTMLProps<HTMLInputElement>;
    /**
     * Whether the file input should appear with large styling.
     */
    large?: boolean;
    /**
     * Callback invoked on `<input>` `change` events.
     *
     * This callback is offered as a convenience; it is equivalent to `inputProps.onChange`.
     *
     * __Note:__ The top-level `onChange` prop is passed to the `<label>` element rather than the `<input>`,
     * which may not be what you expect.
     */
    onInputChange?: React.FormEventHandler<HTMLInputElement>;
    /**
     * Whether the file input should appear with small styling.
     */
    small?: boolean;
    /**
     * The text to display inside the input.
     *
     * @default "Choose file..."
     */
    text?: React.ReactNode;
    /**
     * The button text to display on the right side of the input.
     *
     * @default "Browse"
     */
    buttonText?: string;
}
/**
 * File input component.
 *
 * @see https://blueprintjs.com/docs/#core/components/file-input
 */
export declare class FileInput extends AbstractPureComponent<FileInputProps> {
    static displayName: string;
    static defaultProps: FileInputProps;
    render(): JSX.Element;
    private handleInputChange;
}

/// <reference types="react" />
import { AbstractPureComponent, type Props } from "../../common";
import type { HotkeyConfig } from "../../hooks";
export type HotkeyProps = Props & HotkeyConfig;
/**
 * Hotkey component used to display a hotkey in the HotkeysDialog.
 * Should not be used by consumers directly.
 */
export declare class Hotkey extends AbstractPureComponent<HotkeyProps> {
    static displayName: string;
    static defaultProps: {
        allowInInput: boolean;
        disabled: boolean;
        global: boolean;
        preventDefault: boolean;
        stopPropagation: boolean;
    };
    render(): JSX.Element;
    protected validateProps(props: HotkeyProps): void;
}

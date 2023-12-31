/// <reference types="react" />
import { AbstractPureComponent, type Props } from "../../common";
/** Reverse table of some CONFIG_ALIASES fields, for display by KeyComboTag */
export declare const DISPLAY_ALIASES: Record<string, string>;
export interface KeyComboTagProps extends Props {
    /** The key combo to display, such as `"cmd + s"`. */
    combo: string;
    /**
     * Whether to render in a minimal style.
     * If `false`, each key in the combo will be rendered inside a `<kbd>` tag.
     * If `true`, only the icon or short name of a key will be rendered with no wrapper styles.
     *
     * @default false
     */
    minimal?: boolean;
}
export declare class KeyComboTag extends AbstractPureComponent<KeyComboTagProps> {
    static displayName: string;
    render(): JSX.Element;
    private renderKey;
    private renderMinimalKey;
}

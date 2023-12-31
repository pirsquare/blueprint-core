import * as React from "react";
import { AbstractPureComponent } from "../../common";
import { type Props } from "../../common/props";
export interface MenuProps extends Props, React.HTMLAttributes<HTMLUListElement> {
    /** Menu items. */
    children?: React.ReactNode;
    /** Whether the menu items in this menu should use a large appearance. */
    large?: boolean;
    /** Whether the menu items in this menu should use a small appearance. */
    small?: boolean;
    /** Ref handler that receives the HTML `<ul>` element backing this component. */
    ulRef?: React.Ref<HTMLUListElement>;
}
/**
 * Menu component.
 *
 * @see https://blueprintjs.com/docs/#core/components/menu
 */
export declare class Menu extends AbstractPureComponent<MenuProps> {
    static displayName: string;
    render(): JSX.Element;
}

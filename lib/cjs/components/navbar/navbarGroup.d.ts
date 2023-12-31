import * as React from "react";
import { AbstractPureComponent, Alignment } from "../../common";
import { type HTMLDivProps, type Props } from "../../common/props";
export interface NavbarGroupProps extends Props, HTMLDivProps {
    /**
     * The side of the navbar on which the group should appear.
     * The `Alignment` enum provides constants for these values.
     *
     * @default Alignment.LEFT
     */
    align?: Alignment;
    children?: React.ReactNode;
}
export declare class NavbarGroup extends AbstractPureComponent<NavbarGroupProps> {
    static displayName: string;
    static defaultProps: NavbarGroupProps;
    render(): JSX.Element;
}

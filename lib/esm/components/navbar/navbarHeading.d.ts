import * as React from "react";
import { AbstractPureComponent } from "../../common";
import { type HTMLDivProps, type Props } from "../../common/props";
export interface NavbarHeadingProps extends Props, HTMLDivProps {
    children?: React.ReactNode;
}
export declare class NavbarHeading extends AbstractPureComponent<NavbarHeadingProps> {
    static displayName: string;
    render(): JSX.Element;
}

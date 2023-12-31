import * as React from "react";
import { type IconName } from "@blueprintjs/icons";
import { AbstractPureComponent, type MaybeElement, type Props } from "../../common";
export declare enum NonIdealStateIconSize {
    STANDARD = 48,
    SMALL = 32,
    EXTRA_SMALL = 20
}
export interface NonIdealStateProps extends Props {
    /** An action to resolve the non-ideal state which appears after `description`. */
    action?: JSX.Element;
    /**
     * Advanced usage: React `children` will appear last (after `action`).
     * Avoid passing raw strings as they will not receive margins and disrupt the layout flow.
     */
    children?: React.ReactNode;
    /**
     * A longer description of the non-ideal state.
     * A string or number value will be wrapped in a `<div>` to preserve margins.
     */
    description?: React.ReactChild;
    /** The name of a Blueprint icon or a JSX Element (such as `<Spinner/>`) to render above the title. */
    icon?: IconName | MaybeElement;
    /**
     * How large the icon visual should be.
     *
     * @default NonIdealStateIconSize.STANDARD
     */
    iconSize?: NonIdealStateIconSize;
    /**
     * Component layout, either vertical or horizontal.
     *
     * @default "vertical"
     */
    layout?: "vertical" | "horizontal";
    /** The title of the non-ideal state. */
    title?: React.ReactNode;
}
/**
 * Non-ideal state component.
 *
 * @see https://blueprintjs.com/docs/#core/components/non-ideal-state
 */
export declare class NonIdealState extends AbstractPureComponent<NonIdealStateProps> {
    static displayName: string;
    static defaultProps: Partial<NonIdealStateProps>;
    render(): JSX.Element;
    private maybeRenderVisual;
    private maybeRenderText;
}

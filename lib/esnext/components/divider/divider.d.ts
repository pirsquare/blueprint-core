import * as React from "react";
import { AbstractPureComponent } from "../../common";
import { type Props } from "../../common/props";
export interface DividerProps extends Props, React.HTMLAttributes<HTMLElement> {
    /**
     * HTML tag to use for element.
     *
     * @default "div"
     */
    tagName?: keyof JSX.IntrinsicElements;
}
/**
 * Divider component.
 *
 * @see https://blueprintjs.com/docs/#core/components/divider
 */
export declare class Divider extends AbstractPureComponent<DividerProps> {
    static displayName: string;
    render(): JSX.Element;
}

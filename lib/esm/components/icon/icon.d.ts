import * as React from "react";
import { type DefaultSVGIconProps, type IconName, IconSize, type SVGIconProps } from "@blueprintjs/icons";
import { type IntentProps, type MaybeElement, type Props } from "../../common";
export { type IconName, IconSize };
export interface IconOwnProps {
    /**
     * Whether the component should automatically load icon contents using an async import.
     *
     * @default true
     */
    autoLoad?: boolean;
    /**
     * Name of a Blueprint UI icon, or an icon element, to render. This prop is
     * required because it determines the content of the component, but it can
     * be explicitly set to falsy values to render nothing.
     *
     * - If `null` or `undefined` or `false`, this component will render nothing.
     * - If given an `IconName` (a string literal union of all icon names), that
     *   icon will be rendered as an `<svg>` with `<path>` tags. Unknown strings
     *   will render a blank icon to occupy space.
     * - If given a `JSX.Element`, that element will be rendered and _all other
     *   props on this component are ignored._ This type is supported to
     *   simplify icon support in other Blueprint components. As a consumer, you
     *   should avoid using `<Icon icon={<Element />}` directly; simply render
     *   `<Element />` instead.
     */
    icon: IconName | MaybeElement;
    /**
     * Alias for `size` prop. Kept around for backwards-compatibility with Blueprint v4.x,
     * will be removed in v6.0.
     *
     * @deprecated use `size` prop instead
     */
    iconSize?: number;
    /** Props to apply to the `SVG` element */
    svgProps?: React.HTMLAttributes<SVGElement>;
}
/**
 * Generic interface for the `<Icon>` component which may be parameterized by its root element type.
 *
 * @see https://blueprintjs.com/docs/#core/components/icon.dom-attributes
 */
export type IconProps<T extends Element = Element> = IntentProps & Props & SVGIconProps<T> & IconOwnProps;
/**
 * The default `<Icon>` props interface, equivalent to `IconProps` with its default type parameter.
 * This is primarly exported for documentation purposes; users should reference `IconProps<T>` instead.
 */
export interface DefaultIconProps extends IntentProps, Props, DefaultSVGIconProps, IconOwnProps {
}
/**
 * Generic icon component type. This is essentially a type hack required to make forwardRef work with generic
 * components. Note that this slows down TypeScript compilation, but it better than the alternative of globally
 * augmenting "@types/react".
 *
 * @see https://stackoverflow.com/a/73795494/7406866
 */
export interface IconComponent extends React.FC<IconProps<Element>> {
    <T extends Element = Element>(props: IconProps<T>): React.ReactElement | null;
}
/**
 * Icon component.
 *
 * @see https://blueprintjs.com/docs/#core/components/icon
 */
export declare const Icon: IconComponent;

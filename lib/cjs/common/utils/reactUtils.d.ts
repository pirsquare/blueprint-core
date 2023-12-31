import * as React from "react";
/**
 * Returns true if `node` is null/undefined, false, empty string, or an array
 * composed of those. If `node` is an array, only one level of the array is
 * checked, for performance reasons.
 */
export declare function isReactNodeEmpty(node?: React.ReactNode, skipArray?: boolean): boolean;
/**
 * Converts a React node to an element: non-empty string or number or
 * `React.Fragment` (React 16.3+) is wrapped in given tag name; empty strings
 * and booleans are discarded.
 */
export declare function ensureElement(child: React.ReactNode | undefined, tagName?: keyof JSX.IntrinsicElements): React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
/**
 * Returns true if the given JSX element matches the given component type.
 *
 * NOTE: This function only checks equality of `displayName` for performance and
 * to tolerate multiple minor versions of a component being included in one
 * application bundle.
 *
 * @param element JSX element in question
 * @param ComponentType desired component type of element
 */
export declare function isElementOfType<P = {}>(element: any, ComponentType: React.ComponentType<P>): element is React.ReactElement<P>;

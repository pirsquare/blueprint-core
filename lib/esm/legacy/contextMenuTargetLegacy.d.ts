/**
 * @fileoverview This component is DEPRECATED, and the code is frozen.
 * All changes & bugfixes should be made to ContextMenu2 instead.
 */
import * as React from "react";
import { type Constructor } from "./legacyCommon";
export declare const CONTEXTMENU_WARN_DECORATOR_NO_METHOD = "[Blueprint] @ContextMenuTarget-decorated class should implement renderContextMenu.";
export declare const CONTEXTMENU_WARN_DECORATOR_NEEDS_REACT_ELEMENT = "[Blueprint] \"@ContextMenuTarget-decorated components must return a single JSX.Element or an empty render.";
export interface ContextMenuTargetLegacyComponent extends React.Component {
    render(): React.ReactElement<any> | null | undefined;
    renderContextMenu: (e: React.MouseEvent<HTMLElement>) => JSX.Element | undefined;
    onContextMenuClose?: () => void;
}
/**
 * ContextMenuTarget decorator.
 *
 * @see https://blueprintjs.com/docs/#core/components/context-menu.decorator-usage
 * @deprecated use ContextMenu2
 */
export declare function ContextMenuTargetLegacy<T extends Constructor<ContextMenuTargetLegacyComponent>>(WrappedComponent: T): {
    new (...args: any[]): {
        render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined;
        renderContextMenu: (e: React.MouseEvent<HTMLElement, MouseEvent>) => JSX.Element | undefined;
        onContextMenuClose?: (() => void) | undefined;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
    };
    displayName: string;
} & T;

/**
 * @fileoverview This component is DEPRECATED, and the code is frozen.
 * All changes & bugfixes should be made to HotkeysTarget2 instead.
 */
import * as React from "react";
import type { HotkeysProps } from "../components/hotkeys";
import { HotkeysEvents } from "./hotkeysEvents";
import { type Constructor } from "./legacyCommon";
export interface HotkeysTargetLegacyComponent extends React.Component {
    /** Components decorated with the `@HotkeysTargetLegacy` decorator must implement React's component `render` function. */
    render(): React.ReactElement<any> | null | undefined;
    /**
     * Components decorated with the `@HotkeysTargetLegacy` decorator must implement
     * this method, and it must return a `Hotkeys` React element.
     */
    renderHotkeys: () => React.ReactElement<HotkeysProps>;
}
/** @deprecated use `useHotkeys` hook or `<HotkeysTarget2>` component */
export declare function HotkeysTargetLegacy<T extends Constructor<HotkeysTargetLegacyComponent>>(WrappedComponent: T): {
    new (...args: any[]): {
        /** @internal */
        globalHotkeysEvents: HotkeysEvents;
        /** @internal */
        localHotkeysEvents: HotkeysEvents;
        componentDidMount(): void;
        componentWillUnmount(): void;
        render(): JSX.Element;
        /**
         * Components decorated with the `@HotkeysTargetLegacy` decorator must implement
         * this method, and it must return a `Hotkeys` React element.
         */
        renderHotkeys: () => React.ReactElement<HotkeysProps, string | React.JSXElementConstructor<any>>;
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
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
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

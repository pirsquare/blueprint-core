import * as React from "react";
import { AbstractPureComponent } from "../../common";
import type { TabId, TabProps } from "./tab";
export interface TabTitleProps extends TabProps {
    /** Optional contents. */
    children?: React.ReactNode;
    /** Handler invoked when this tab is clicked. */
    onClick: (id: TabId, event: React.MouseEvent<HTMLElement>) => void;
    /** ID of the parent `Tabs` to which this tab belongs. Used to generate ID for ARIA attributes. */
    parentId: TabId;
    /** Whether the tab is currently selected. */
    selected: boolean;
}
export declare class TabTitle extends AbstractPureComponent<TabTitleProps> {
    static displayName: string;
    render(): JSX.Element;
    private handleClick;
}
export declare function generateTabPanelId(parentId: TabId, tabId: TabId): string;
export declare function generateTabTitleId(parentId: TabId, tabId: TabId): string;

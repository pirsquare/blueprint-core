/// <reference types="react" />
import { AbstractPureComponent } from "../../common";
import type { Props } from "../../common/props";
import type { IPanel } from "./panelProps";
export interface PanelStackProps extends Props {
    /**
     * The initial panel to show on mount. This panel cannot be removed from the
     * stack and will appear when the stack is empty.
     * This prop is only used in uncontrolled mode and is thus mutually
     * exclusive with the `stack` prop.
     */
    initialPanel?: IPanel<any>;
    /**
     * Callback invoked when the user presses the back button or a panel invokes
     * the `closePanel()` injected prop method.
     */
    onClose?: (removedPanel: IPanel) => void;
    /**
     * Callback invoked when a panel invokes the `openPanel(panel)` injected
     * prop method.
     */
    onOpen?: (addedPanel: IPanel) => void;
    /**
     * If false, PanelStack will render all panels in the stack to the DOM, allowing their
     * React component trees to maintain state as a user navigates through the stack.
     * Panels other than the currently active one will be invisible.
     *
     * @default true
     */
    renderActivePanelOnly?: boolean;
    /**
     * Whether to show the header with the "back" button in each panel.
     *
     * @default true
     */
    showPanelHeader?: boolean;
    /**
     * The full stack of panels in controlled mode. The last panel in the stack
     * will be displayed.
     */
    stack?: Array<IPanel<any>>;
}
export interface PanelStackState {
    /** Whether the stack is currently animating the push or pop of a panel. */
    direction: "push" | "pop";
    /** The current stack of panels. The first panel in the stack will be displayed. */
    stack: IPanel[];
}
/**
 * Panel stack component.
 *
 * @see https://blueprintjs.com/docs/#core/components/panel-stack
 * @deprecated use `PanelStack2<T>`
 */
export declare class PanelStack extends AbstractPureComponent<PanelStackProps, PanelStackState> {
    state: PanelStackState;
    componentDidUpdate(prevProps: PanelStackProps, prevState: PanelStackState): void;
    render(): JSX.Element;
    protected validateProps(props: PanelStackProps): void;
    private renderPanels;
    private renderPanel;
    private handlePanelClose;
    private handlePanelOpen;
}

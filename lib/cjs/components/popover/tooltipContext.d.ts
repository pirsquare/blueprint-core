import * as React from "react";
export interface TooltipContextState {
    forceDisabled?: boolean;
}
type TooltipAction = {
    type: "FORCE_DISABLED_STATE";
} | {
    type: "RESET_DISABLED_STATE";
};
export declare const TooltipContext: React.Context<[TooltipContextState, React.Dispatch<TooltipAction>]>;
interface TooltipProviderProps {
    children: React.ReactNode | ((ctxState: TooltipContextState) => React.ReactNode);
    forceDisable?: boolean;
}
export declare const TooltipProvider: ({ children, forceDisable }: TooltipProviderProps) => JSX.Element;
export {};

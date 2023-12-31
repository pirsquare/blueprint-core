"use strict";
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overlay = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_transition_group_1 = require("react-transition-group");
var common_1 = require("../../common");
var props_1 = require("../../common/props");
var utils_1 = require("../../common/utils");
var portal_1 = require("../portal/portal");
/**
 * Overlay component.
 *
 * @see https://blueprintjs.com/docs/#core/components/overlay
 */
var Overlay = /** @class */ (function (_super) {
    tslib_1.__extends(Overlay, _super);
    function Overlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAutoFocusing = false;
        _this.state = {
            hasEverOpened: _this.props.isOpen,
        };
        /** Ref for container element, containing all children and the backdrop */
        _this.containerElement = React.createRef();
        // An empty, keyboard-focusable div at the beginning of the Overlay content
        _this.startFocusTrapElement = React.createRef();
        // An empty, keyboard-focusable div at the end of the Overlay content
        _this.endFocusTrapElement = React.createRef();
        _this.maybeRenderChild = function (child) {
            if ((0, utils_1.isFunction)(child)) {
                child = child();
            }
            if (child == null) {
                return null;
            }
            // decorate the child with a few injected props
            var tabIndex = _this.props.enforceFocus || _this.props.autoFocus ? 0 : undefined;
            var decoratedChild = typeof child === "object" ? (React.cloneElement(child, {
                className: (0, classnames_1.default)(child.props.className, common_1.Classes.OVERLAY_CONTENT),
                tabIndex: tabIndex,
            })) : (React.createElement("span", { className: common_1.Classes.OVERLAY_CONTENT, tabIndex: tabIndex }, child));
            var _a = _this.props, onOpening = _a.onOpening, onOpened = _a.onOpened, onClosing = _a.onClosing, transitionDuration = _a.transitionDuration, transitionName = _a.transitionName;
            return (React.createElement(react_transition_group_1.CSSTransition, { classNames: transitionName, onEntering: onOpening, onEntered: onOpened, onExiting: onClosing, onExited: _this.handleTransitionExited, timeout: transitionDuration, addEndListener: _this.handleTransitionAddEnd }, decoratedChild));
        };
        /**
         * Ensures repeatedly pressing shift+tab keeps focus inside the Overlay. Moves focus to
         * the `endFocusTrapElement` or the first keyboard-focusable element in the Overlay (excluding
         * the `startFocusTrapElement`), depending on whether the element losing focus is inside the
         * Overlay.
         */
        _this.handleStartFocusTrapElementFocus = function (e) {
            var _a, _b;
            if (!_this.props.enforceFocus || _this.isAutoFocusing) {
                return;
            }
            // e.relatedTarget will not be defined if this was a programmatic focus event, as is the
            // case when we call this.bringFocusInsideOverlay() after a user clicked on the backdrop.
            // Otherwise, we're handling a user interaction, and we should wrap around to the last
            // element in this transition group.
            if (e.relatedTarget != null &&
                ((_a = _this.containerElement.current) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget)) &&
                e.relatedTarget !== _this.endFocusTrapElement.current) {
                (_b = _this.endFocusTrapElement.current) === null || _b === void 0 ? void 0 : _b.focus({ preventScroll: true });
            }
        };
        /**
         * Wrap around to the end of the dialog if `enforceFocus` is enabled.
         */
        _this.handleStartFocusTrapElementKeyDown = function (e) {
            var _a;
            if (!_this.props.enforceFocus) {
                return;
            }
            if (e.shiftKey && e.key === "Tab") {
                var lastFocusableElement = _this.getKeyboardFocusableElements().pop();
                if (lastFocusableElement != null) {
                    lastFocusableElement.focus();
                }
                else {
                    (_a = _this.endFocusTrapElement.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
                }
            }
        };
        /**
         * Ensures repeatedly pressing tab keeps focus inside the Overlay. Moves focus to the
         * `startFocusTrapElement` or the last keyboard-focusable element in the Overlay (excluding the
         * `startFocusTrapElement`), depending on whether the element losing focus is inside the
         * Overlay.
         */
        _this.handleEndFocusTrapElementFocus = function (e) {
            var _a, _b, _c;
            // No need for this.props.enforceFocus check here because this element is only rendered
            // when that prop is true.
            // During user interactions, e.relatedTarget will be defined, and we should wrap around to the
            // "start focus trap" element.
            // Otherwise, we're handling a programmatic focus event, which can only happen after a user
            // presses shift+tab from the first focusable element in the overlay.
            if (e.relatedTarget != null &&
                ((_a = _this.containerElement.current) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget)) &&
                e.relatedTarget !== _this.startFocusTrapElement.current) {
                var firstFocusableElement = _this.getKeyboardFocusableElements().shift();
                // ensure we don't re-focus an already active element by comparing against e.relatedTarget
                if (!_this.isAutoFocusing && firstFocusableElement != null && firstFocusableElement !== e.relatedTarget) {
                    firstFocusableElement.focus();
                }
                else {
                    (_b = _this.startFocusTrapElement.current) === null || _b === void 0 ? void 0 : _b.focus({ preventScroll: true });
                }
            }
            else {
                var lastFocusableElement = _this.getKeyboardFocusableElements().pop();
                if (lastFocusableElement != null) {
                    lastFocusableElement.focus();
                }
                else {
                    // Keeps focus within Overlay even if there are no keyboard-focusable children
                    (_c = _this.startFocusTrapElement.current) === null || _c === void 0 ? void 0 : _c.focus({ preventScroll: true });
                }
            }
        };
        _this.handleTransitionExited = function (node) {
            var _a, _b;
            if (_this.props.shouldReturnFocusOnClose && _this.lastActiveElementBeforeOpened instanceof HTMLElement) {
                _this.lastActiveElementBeforeOpened.focus();
            }
            (_b = (_a = _this.props).onClosed) === null || _b === void 0 ? void 0 : _b.call(_a, node);
        };
        _this.handleBackdropMouseDown = function (e) {
            var _a;
            var _b = _this.props, backdropProps = _b.backdropProps, canOutsideClickClose = _b.canOutsideClickClose, enforceFocus = _b.enforceFocus, onClose = _b.onClose;
            if (canOutsideClickClose) {
                onClose === null || onClose === void 0 ? void 0 : onClose(e);
            }
            if (enforceFocus) {
                _this.bringFocusInsideOverlay();
            }
            (_a = backdropProps === null || backdropProps === void 0 ? void 0 : backdropProps.onMouseDown) === null || _a === void 0 ? void 0 : _a.call(backdropProps, e);
        };
        _this.handleDocumentClick = function (e) {
            var _a = _this.props, canOutsideClickClose = _a.canOutsideClickClose, isOpen = _a.isOpen, onClose = _a.onClose;
            // get the actual target even in the Shadow DOM
            // see https://github.com/palantir/blueprint/issues/4220
            var eventTarget = (e.composed ? e.composedPath()[0] : e.target);
            var stackIndex = Overlay.openStack.indexOf(_this);
            var isClickInThisOverlayOrDescendant = Overlay.openStack
                .slice(stackIndex)
                .some(function (_a) {
                var _b;
                var elem = _a.containerElement;
                // `elem` is the container of backdrop & content, so clicking directly on that container
                // should not count as being "inside" the overlay.
                return ((_b = elem.current) === null || _b === void 0 ? void 0 : _b.contains(eventTarget)) && !elem.current.isSameNode(eventTarget);
            });
            if (isOpen && !isClickInThisOverlayOrDescendant && canOutsideClickClose) {
                // casting to any because this is a native event
                onClose === null || onClose === void 0 ? void 0 : onClose(e);
            }
        };
        /**
         * When multiple Overlays are open, this event handler is only active for the most recently
         * opened one to avoid Overlays competing with each other for focus.
         */
        _this.handleDocumentFocus = function (e) {
            // get the actual target even in the Shadow DOM
            // see https://github.com/palantir/blueprint/issues/4220
            var eventTarget = e.composed ? e.composedPath()[0] : e.target;
            if (_this.props.enforceFocus &&
                _this.containerElement.current != null &&
                eventTarget instanceof Node &&
                !_this.containerElement.current.contains(eventTarget)) {
                // prevent default focus behavior (sometimes auto-scrolls the page)
                e.preventDefault();
                e.stopImmediatePropagation();
                _this.bringFocusInsideOverlay();
            }
        };
        _this.handleKeyDown = function (e) {
            var _a = _this.props, canEscapeKeyClose = _a.canEscapeKeyClose, onClose = _a.onClose;
            if (e.key === "Escape" && canEscapeKeyClose) {
                onClose === null || onClose === void 0 ? void 0 : onClose(e);
                // prevent other overlays from closing
                e.stopPropagation();
                // prevent browser-specific escape key behavior (Safari exits fullscreen)
                e.preventDefault();
            }
        };
        _this.handleTransitionAddEnd = function () {
            // no-op
        };
        return _this;
    }
    Overlay.getDerivedStateFromProps = function (_a) {
        var hasEverOpened = _a.isOpen;
        if (hasEverOpened) {
            return { hasEverOpened: hasEverOpened };
        }
        return null;
    };
    Overlay.prototype.render = function () {
        var _a;
        var _b;
        // oh snap! no reason to render anything at all if we're being truly lazy
        if (this.props.lazy && !this.state.hasEverOpened) {
            return null;
        }
        var _c = this.props, autoFocus = _c.autoFocus, children = _c.children, className = _c.className, enforceFocus = _c.enforceFocus, usePortal = _c.usePortal, isOpen = _c.isOpen;
        // TransitionGroup types require single array of children; does not support nested arrays.
        // So we must collapse backdrop and children into one array, and every item must be wrapped in a
        // Transition element (no ReactText allowed).
        var childrenWithTransitions = isOpen ? (_b = React.Children.map(children, this.maybeRenderChild)) !== null && _b !== void 0 ? _b : [] : [];
        var maybeBackdrop = this.maybeRenderBackdrop();
        if (maybeBackdrop !== null) {
            childrenWithTransitions.unshift(maybeBackdrop);
        }
        if (isOpen && (autoFocus || enforceFocus) && childrenWithTransitions.length > 0) {
            childrenWithTransitions.unshift(this.renderDummyElement("__start", {
                className: common_1.Classes.OVERLAY_START_FOCUS_TRAP,
                onFocus: this.handleStartFocusTrapElementFocus,
                onKeyDown: this.handleStartFocusTrapElementKeyDown,
                ref: this.startFocusTrapElement,
            }));
            if (enforceFocus) {
                childrenWithTransitions.push(this.renderDummyElement("__end", {
                    className: common_1.Classes.OVERLAY_END_FOCUS_TRAP,
                    onFocus: this.handleEndFocusTrapElementFocus,
                    ref: this.endFocusTrapElement,
                }));
            }
        }
        var containerClasses = (0, classnames_1.default)(common_1.Classes.OVERLAY, (_a = {},
            _a[common_1.Classes.OVERLAY_OPEN] = isOpen,
            _a[common_1.Classes.OVERLAY_INLINE] = !usePortal,
            _a), className);
        var transitionGroup = (React.createElement("div", { "aria-live": "polite", className: containerClasses, onKeyDown: this.handleKeyDown, ref: this.containerElement },
            React.createElement(react_transition_group_1.TransitionGroup, { appear: true, component: null }, childrenWithTransitions)));
        if (usePortal) {
            return (React.createElement(portal_1.Portal, { className: this.props.portalClassName, container: this.props.portalContainer, stopPropagationEvents: this.props.portalStopPropagationEvents }, transitionGroup));
        }
        else {
            return transitionGroup;
        }
    };
    Overlay.prototype.componentDidMount = function () {
        if (this.props.isOpen) {
            this.overlayWillOpen();
        }
    };
    Overlay.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.isOpen && !this.props.isOpen) {
            this.overlayWillClose();
        }
        else if (!prevProps.isOpen && this.props.isOpen) {
            this.overlayWillOpen();
        }
    };
    Overlay.prototype.componentWillUnmount = function () {
        this.overlayWillClose();
    };
    /**
     * @public for testing
     * @internal
     */
    Overlay.prototype.bringFocusInsideOverlay = function () {
        var _this = this;
        // always delay focus manipulation to just before repaint to prevent scroll jumping
        return this.requestAnimationFrame(function () {
            var _a;
            // container element may be undefined between component mounting and Portal rendering
            // activeElement may be undefined in some rare cases in IE
            var activeElement = (0, utils_1.getActiveElement)(_this.containerElement.current);
            if (_this.containerElement.current == null || activeElement == null || !_this.props.isOpen) {
                return;
            }
            var container = _this.containerElement.current;
            var isFocusOutsideModal = !container.contains(activeElement);
            if (isFocusOutsideModal) {
                (_a = _this.startFocusTrapElement.current) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
                _this.isAutoFocusing = false;
            }
        });
    };
    Overlay.prototype.maybeRenderBackdrop = function () {
        var _a = this.props, backdropClassName = _a.backdropClassName, backdropProps = _a.backdropProps, hasBackdrop = _a.hasBackdrop, isOpen = _a.isOpen, transitionDuration = _a.transitionDuration, transitionName = _a.transitionName;
        if (hasBackdrop && isOpen) {
            return (React.createElement(react_transition_group_1.CSSTransition, { classNames: transitionName, key: "__backdrop", timeout: transitionDuration, addEndListener: this.handleTransitionAddEnd },
                React.createElement("div", tslib_1.__assign({}, backdropProps, { className: (0, classnames_1.default)(common_1.Classes.OVERLAY_BACKDROP, backdropClassName, backdropProps === null || backdropProps === void 0 ? void 0 : backdropProps.className), onMouseDown: this.handleBackdropMouseDown }))));
        }
        else {
            return null;
        }
    };
    Overlay.prototype.renderDummyElement = function (key, props) {
        var _a = this.props, transitionDuration = _a.transitionDuration, transitionName = _a.transitionName;
        return (React.createElement(react_transition_group_1.CSSTransition, { classNames: transitionName, key: key, addEndListener: this.handleTransitionAddEnd, timeout: transitionDuration, unmountOnExit: true },
            React.createElement("div", tslib_1.__assign({ tabIndex: 0 }, props))));
    };
    Overlay.prototype.getKeyboardFocusableElements = function () {
        var focusableElements = this.containerElement.current !== null
            ? Array.from(
            // Order may not be correct if children elements use tabindex values > 0.
            // Selectors derived from this SO question:
            // https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus
            this.containerElement.current.querySelectorAll([
                'a[href]:not([tabindex="-1"])',
                'button:not([disabled]):not([tabindex="-1"])',
                'details:not([tabindex="-1"])',
                'input:not([disabled]):not([tabindex="-1"])',
                'select:not([disabled]):not([tabindex="-1"])',
                'textarea:not([disabled]):not([tabindex="-1"])',
                '[tabindex]:not([tabindex="-1"])',
            ].join(",")))
            : [];
        return focusableElements.filter(function (el) {
            return !el.classList.contains(common_1.Classes.OVERLAY_START_FOCUS_TRAP) &&
                !el.classList.contains(common_1.Classes.OVERLAY_END_FOCUS_TRAP);
        });
    };
    Overlay.prototype.overlayWillClose = function () {
        document.removeEventListener("focus", this.handleDocumentFocus, /* useCapture */ true);
        document.removeEventListener("mousedown", this.handleDocumentClick);
        var openStack = Overlay.openStack;
        var stackIndex = openStack.indexOf(this);
        if (stackIndex !== -1) {
            openStack.splice(stackIndex, 1);
            if (openStack.length > 0) {
                var lastOpenedOverlay = Overlay.getLastOpened();
                // Only bring focus back to last overlay if it had autoFocus _and_ enforceFocus enabled.
                // If `autoFocus={false}`, it's likely that the overlay never received focus in the first place,
                // so it would be surprising for us to send it there. See https://github.com/palantir/blueprint/issues/4921
                if (lastOpenedOverlay.props.autoFocus && lastOpenedOverlay.props.enforceFocus) {
                    lastOpenedOverlay.bringFocusInsideOverlay();
                    document.addEventListener("focus", lastOpenedOverlay.handleDocumentFocus, /* useCapture */ true);
                }
            }
            if (openStack.filter(function (o) { return o.props.usePortal && o.props.hasBackdrop; }).length === 0) {
                document.body.classList.remove(common_1.Classes.OVERLAY_OPEN);
            }
        }
    };
    Overlay.prototype.overlayWillOpen = function () {
        var getLastOpened = Overlay.getLastOpened, openStack = Overlay.openStack;
        if (openStack.length > 0) {
            document.removeEventListener("focus", getLastOpened().handleDocumentFocus, /* useCapture */ true);
        }
        openStack.push(this);
        if (this.props.autoFocus) {
            this.isAutoFocusing = true;
            this.bringFocusInsideOverlay();
        }
        if (this.props.enforceFocus) {
            // Focus events do not bubble, but setting useCapture allows us to listen in and execute
            // our handler before all others
            document.addEventListener("focus", this.handleDocumentFocus, /* useCapture */ true);
        }
        if (this.props.canOutsideClickClose && !this.props.hasBackdrop) {
            document.addEventListener("mousedown", this.handleDocumentClick);
        }
        if (this.props.hasBackdrop && this.props.usePortal) {
            // add a class to the body to prevent scrolling of content below the overlay
            document.body.classList.add(common_1.Classes.OVERLAY_OPEN);
        }
        this.lastActiveElementBeforeOpened = (0, utils_1.getActiveElement)(this.containerElement.current);
    };
    Overlay.displayName = "".concat(props_1.DISPLAYNAME_PREFIX, ".Overlay");
    Overlay.defaultProps = {
        autoFocus: true,
        backdropProps: {},
        canEscapeKeyClose: true,
        canOutsideClickClose: true,
        enforceFocus: true,
        hasBackdrop: true,
        isOpen: false,
        lazy: true,
        shouldReturnFocusOnClose: true,
        transitionDuration: 300,
        transitionName: common_1.Classes.OVERLAY,
        usePortal: true,
    };
    Overlay.openStack = [];
    Overlay.getLastOpened = function () { return Overlay.openStack[Overlay.openStack.length - 1]; };
    return Overlay;
}(common_1.AbstractPureComponent));
exports.Overlay = Overlay;
//# sourceMappingURL=overlay.js.map
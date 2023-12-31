/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
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
import classNames from "classnames";
import * as React from "react";
import {
  Error,
  InfoSign,
  Tick,
  WarningSign
} from "@blueprintjs/icons";
import {
  AbstractPureComponent,
  Classes,
  DISPLAYNAME_PREFIX,
  Intent,
  Utils,
} from "../../common";
import {
  H5
} from "../html/html";
import {
  Icon
} from "../icon/icon";
/**
 * Callout component.
 *
 * @see https://blueprintjs.com/docs/#core/components/callout
 */
export class Callout extends AbstractPureComponent {
  static displayName = `${DISPLAYNAME_PREFIX}.Callout`;
  render() {
    const {
      className,
      children,
      icon,
      intent,
      title,
      ...htmlProps
    } = this.props;
    const iconElement = this.renderIcon(icon, intent);
    const classes = classNames(Classes.CALLOUT, Classes.intentClass(intent), className, {
      [Classes.CALLOUT_HAS_BODY_CONTENT]: !Utils.isReactNodeEmpty(children),
      [Classes.CALLOUT_ICON]: iconElement != null,
    });
    return (React.createElement("div", {
        className: classes,
        ...htmlProps
      },
      iconElement,
      title && React.createElement(H5, null, title),
      children));
  }
  renderIcon(icon, intent) {
    // 1. no icon
    if (icon === null || icon === false) {
      return undefined;
    }
    const iconProps = {
      "aria-hidden": true,
      tabIndex: -1,
      size: 20
    };
    // 2. icon specified by name or as a custom SVG element
    if (icon !== undefined) {
      return React.createElement(Icon, {
        icon: icon,
        ...iconProps
      });
    }
    // 3. icon specified by intent prop
    switch (intent) {
      case Intent.DANGER:
        return React.createElement(Error, {...iconProps
        });
      case Intent.PRIMARY:
        return React.createElement(InfoSign, {...iconProps
        });
      case Intent.WARNING:
        return React.createElement(WarningSign, {...iconProps
        });
      case Intent.SUCCESS:
        return React.createElement(Tick, {...iconProps
        });
      default:
        return undefined;
    }
  }
}
//# sourceMappingURL=callout.js.map

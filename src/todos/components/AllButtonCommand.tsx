import * as React from "react";
import {
  CommandButton,
  IButtonProps
} from "office-ui-fabric-react/lib/Button";

export class AllButtonCommand extends React.Component<IButtonProps, any> {
  public constructor() {
    super();
  }

  public render() {
    let { disabled } = this.props;

    return (
        <CommandButton
          iconProps={ { iconName: "AddFriend" } }
          disabled={ disabled }
        >
          All
        </CommandButton>
    );
  }
}
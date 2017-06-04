import * as React from "react";
import * as classNames from "classnames";
import { PrimaryButton, DefaultButton } from "office-ui-fabric-react/lib/Button";
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import { IContextualMenuItem } from "office-ui-fabric-react/lib/ContextualMenu";

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from "../constants/TodoFilters";

interface IFooterProps {
  completedCount: number;
  activeCount: number;
  filter: string;
  onClearCompleted: ()=>void;
  onShow: (filter:string)=>void;
}

class Footer extends React.Component<IFooterProps, void> {
  renderTodoCount() {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? "item" : "items";

    return (
      <div className="itemCountDisplay">
        <span className="ms-font-s">
          <strong>{activeCount || "No"}</strong> {itemWord} left
        </span>
      </div>
    );
  }

  render(): JSX.Element {

    const { completedCount, onClearCompleted, onShow } = this.props;
    const items: IContextualMenuItem[] = [
      {
          key: "allTodos",
          iconProps: {
            iconName: "DietPlanNotebook"
          },
          name: "Show All",
          onClick: () => onShow(SHOW_ALL)
      },
      {
          key: "activeTodos",
          iconProps: {
            iconName: "Play"
          },
          name: "Hide Completed",
          onClick: () => onShow(SHOW_ACTIVE)
      },
      {
          key: "completeTodos",
          iconProps: {
            iconName: "CheckMark"
          },
          name: "Show Completed",
          onClick: () => onShow(SHOW_COMPLETED)
      }];

      if (completedCount > 0) {
        items.push({
          key: "clearCompleted",
          iconProps: {
            iconName: "Delete"
          },
          name: "Clear completed",
          onClick: () => onClearCompleted()
        });
      }

    return (
      <footer className="footer">
        <CommandBar
          isSearchBoxVisible={ false }
          items={ items }
          farItems={ [] } />
        {this.renderTodoCount()}
      </footer>
    );
  }
}

export default Footer;
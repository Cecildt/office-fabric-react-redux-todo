import * as React from "react";
import * as classNames from "classnames";
import { PrimaryButton, DefaultButton } from "office-ui-fabric-react/lib/Button";

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from "../constants/TodoFilters";

const FILTER_TITLES = {
  [SHOW_ALL]: "All",
  [SHOW_ACTIVE]: "Active",
  [SHOW_COMPLETED]: "Completed"
};


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
      <span className="ms-font-s">
        <strong>{activeCount || "No"}</strong> {itemWord} left
      </span>
    );
  }

  renderFilterLink(filter) {
    const title: string = FILTER_TITLES[filter];
    const { filter: selectedFilter, onShow } = this.props;

    return (
      <DefaultButton className={classNames({ selected: filter === selectedFilter })}
         style={{ cursor: "pointer" }}
         onClick={() => onShow(filter)}
         text={title} />
    );
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props;
    if (completedCount > 0) {
      return (
        <PrimaryButton
          onClick={() => onClearCompleted()}
          text="Clear completed" />
      );
    }
  }

  render(): JSX.Element {
    return (
      <footer className="footer">
        {this.renderTodoCount()}
        <ul className="filters">
          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }
}

export default Footer;
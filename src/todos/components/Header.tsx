import * as React from "react";

import TodoTextInput from "./TodoTextInput";

interface IHeaderProps {
  addTodo: (text:string)=> any;
};

class Header extends React.Component<IHeaderProps, void> {
  handleSave(text: string): void {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render(): JSX.Element {
    return (
      <header className="header">
          <h1 className="ms-font-su">Office Todos</h1>
          <TodoTextInput
            newTodo
            onSave={this.handleSave.bind(this)}
            placeholder="What needs to be done?" />
      </header>
    );
  }
}

export default Header;
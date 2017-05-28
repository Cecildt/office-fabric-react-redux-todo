import * as React from "react";
import * as classNames from "classnames";
import { Checkbox } from "office-ui-fabric-react/lib/Checkbox";
import { IconButton } from "office-ui-fabric-react/lib/Button";

import { Todo } from "../model";
import TodoTextInput from "./TodoTextInput";

interface ITodoItemProps {
  todo: Todo;
  editTodo: (todo:Todo, text:string)=>void;
  deleteTodo: (todo:Todo)=>void;
  completeTodo: (todo:Todo)=>void;
  key?: any;
}

interface ITodoItemState {
  editing: boolean;
};

class TodoItem extends React.Component<ITodoItemProps, ITodoItemState> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleDoubleClick(): void {
    this.setState({ editing: true });
  }

  handleSave(todo:Todo, text:string): void {
    if (text.length === 0) {
      this.props.deleteTodo(todo);
    } else {
      this.props.editTodo(todo, text);
    }
    this.setState({ editing: false });
  }

  render(): JSX.Element {
    const {todo, completeTodo, deleteTodo}: any = this.props;

    let element: JSX.Element;
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(todo, text)}/>
      );
    } else {
      element = (
        <div className="view">
          <Checkbox
            label={todo.text}
            defaultChecked={ todo.completed }
            onChange={ () => completeTodo(todo) }
            inputProps={ {
              onDoubleClick: () => {this.handleDoubleClick.bind(this); }
            }} />
          <IconButton
            iconProps={ { iconName: "Cancel" } }
            title="Cancel"
            ariaLabel="Cancel"
            onClick={() => deleteTodo(todo)} />
            <IconButton
              iconProps={ { iconName: "Edit" } }
              title="Edit"
              ariaLabel="Edit"
              onClick={this.handleDoubleClick.bind(this)} />
        </div>
      );
    }

    return (
      <li className={classNames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    );
  }
}

export default TodoItem;
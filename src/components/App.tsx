import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as React from "react";

import {
  Header,
  MainSection,
  model,
  addTodo,
  editTodo,
  clearCompleted,
  completeAll,
  completeTodo,
  deleteTodo
} from "../todos";

interface IAppProps {
  todos: model.Todo[];
  dispatch: Dispatch<{}>;
}

class App extends React.Component<IAppProps, void> {
  render(): JSX.Element {
    const { todos, dispatch } : IAppProps = this.props;

    return (
      <div className="ms-Grid ms-bgColor-neutralTertiaryAlt">
        <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-u-sm6 ms-u-md8 ms-u-lg10">
              <Header
                addTodo={(text: string) => dispatch(addTodo(text))} />
              <MainSection
                  todos={todos}
                  editTodo={(t,s) => dispatch(editTodo(t, s))}
                  deleteTodo={(t: model.Todo) => dispatch(deleteTodo(t))}
                  completeTodo={(t: model.Todo) => dispatch(completeTodo(t))}
                  clearCompleted={() => dispatch(clearCompleted())}
                  completeAll={() => dispatch(completeAll())}/>
              </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps : any = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);

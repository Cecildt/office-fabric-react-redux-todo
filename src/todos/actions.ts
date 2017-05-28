import { createAction, Action } from "redux-actions";
import { assign } from "lodash";

import { Todo } from "./model";

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from "./constants/ActionTypes";

const addTodo: ReduxActions.ActionFunction1<string, Action<Todo>> = createAction<Todo, string>(
  ADD_TODO,
  (text: string) => ({ text, completed: false })
);

const deleteTodo: ReduxActions.ActionFunction1<Todo, Action<Todo>> = createAction<Todo, Todo>(
  DELETE_TODO,
  (todo: Todo) => todo
);

const editTodo: ReduxActions.ActionFunction2<Todo, string, Action<Todo>> = createAction<Todo, Todo, string>(
  EDIT_TODO,
  (todo: Todo, newText: string) => <Todo>assign(todo, { text: newText })
);

const completeTodo: ReduxActions.ActionFunction1<Todo, Action<Todo>> = createAction<Todo, Todo>(
  COMPLETE_TODO,
  (todo: Todo) => todo
);

const completeAll: ReduxActions.ActionFunction0<Action<void>> = createAction<void>(
  COMPLETE_ALL,
  () => { }
);

const clearCompleted: ReduxActions.ActionFunction0<Action<void>> = createAction<void>(
  CLEAR_COMPLETED,
  () => { }
);

export {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  completeAll,
  clearCompleted
}
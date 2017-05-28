import { combineReducers, Reducer } from "redux";

import todos from "./todos";

const rootReducer : Reducer<object> = combineReducers({
  todos
});

export default rootReducer;

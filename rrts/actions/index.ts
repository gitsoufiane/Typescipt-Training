import { ActionType } from "./types";
import axios from "axios";
import { Dispatch } from "redux";
const url = "https://jsonplaceholder.typicode.com/todos";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface fetchTodosAction {
  type: ActionType.fetchTodos;
  payload: Todo[];
}
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    dispatch<fetchTodosAction>({
      type: ActionType.fetchTodos,
      payload: response.data,
    });
  };
};

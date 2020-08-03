import ToDoListState from "../todolist/ToDoListState";
import ToDoDetailState from "../todo/ToDoDetailsState";
import IState from "./IState";

export default interface AppState {
  todoList: ToDoListState,
  detail: ToDoDetailState
}
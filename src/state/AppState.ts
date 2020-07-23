import ToDoListState from "./ToDoListState";
import ToDoDetailState from "./todo/ToDoDetailsState";

export default interface AppState  {
    todoList: ToDoListState,
    detail: ToDoDetailState
  }
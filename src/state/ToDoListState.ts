import { ToDos } from "../model/ToDo";

export default interface ToDoListState  {
    todos: ToDos,
    currentToDoName: string | null,
  }
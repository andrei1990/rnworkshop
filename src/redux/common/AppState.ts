import ToDoDetailState from '../todo/ToDoDetailsState'
import ToDoListState from '../todolist/ToDoListState'

export default interface AppState {
  todoList: ToDoListState,
  detail: ToDoDetailState
}

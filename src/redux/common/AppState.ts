import ToDoDetailState from '../todo/ToDoDetailsState'
import ToDoListState from '../todolist/ToDoListState'
import AuthState from '../login/AuthState'

export default interface AppState {
  todoList: ToDoListState,
  detail: ToDoDetailState,
  auth: AuthState
}

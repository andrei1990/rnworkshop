import ToDoListState from "../state/ToDoListState"
import IAction from "../actions/IAction"
import ToDo, { ToDos } from "../model/ToDo"
import AppAction from "../actions/AppAction"
import generateId from "../utils/Utils"



export default class ToDosReducerNew {
    private static readonly _initialState: ToDoListState = {
        todos: [{ name: 'now', id: "3" }, { name: 'then', id: "4" }]
    }

    public static reducer(state: ToDoListState = ToDosReducerNew._initialState, action: IAction<any, ToDo>): ToDoListState {
        switch (action.type) {
            case AppAction.ADD_TODO:
                let todoName = action.payload;
                console.log({ state });
                return {
                    todos: [...state.todos, { name: todoName, id: generateId(), completed: false }]
                };

            case AppAction.DISPLAY_TODO:
                let nameValue = action.payload;
                console.log('name is')
                console.log(nameValue)

                return {
                    ...state
                }

            case AppAction.NAVIGATE_BACK:
                console.log('navigate back')
                return {
                    ...state
                }
            case AppAction.COMPLETE_TODO:
                console.log('marking as completed')
                let todoAction = action.data
                let newToDos = state.todos.map(todo => 
                    todo.id === todoAction!.id ? {...todo, completed: !todo.completed} : todo
                    )
                return {
                    todos: newToDos
                }

            default:
                return state
        }
    }

}
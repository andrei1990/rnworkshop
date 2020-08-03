import ToDo from "../../model/ToDo"
import generateId from "../../utils/Utils"
import AppActions from "./ToDoListActions"
import IAction from "../common/IAction"
import ToDoListState from "./ToDoListState"
import { AppActionsTypes } from "./types"



export default class AppReducer {
    private static readonly _initialState: ToDoListState = {
        todos: [{ name: 'now', id: "3" }, { name: 'then', id: "4" }]
    }

    public static reducer(state: ToDoListState = AppReducer._initialState, action: IAction<any, ToDo, AppActionsTypes>): ToDoListState {
        console.log(action);

        switch (action.type) {
            case AppActionsTypes.ADD_TODO:
                let todoName = action.payload;
                console.log({ state });
                console.log('added to do')
                return {
                    todos: [...state.todos, { name: todoName, id: generateId(), completed: false }]
                };
            case AppActionsTypes.COMPLETE_TODO:
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
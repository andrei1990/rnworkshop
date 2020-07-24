import ToDoListState from "../state/ToDoListState"
import IAction from "../actions/IAction"
import ToDo from "../model/ToDo"
import AppAction from "../actions/AppAction"
import generateId from "../utils/Utils"



export default class ToDosReducerNew {
    private static readonly _initialState: ToDoListState = {
        todos: [{ name: 'now', id: "3" }, { name: 'then', id: "4" }],
        currentToDoName: null
    }

    public static reducer(state: ToDoListState = ToDosReducerNew._initialState, action: IAction<any, ToDo>): ToDoListState {
        switch (action.type) {
            case AppAction.ADD_TODO:
                let todoName = action.payload;
                console.log({ state });
                return {
                    todos: [...state.todos, { name :todoName, id: generateId()}],
                    currentToDoName: null
                };

            case AppAction.DISPLAY_TODO:
                let nameValue = action.payload;
                console.log('name is')
                console.log(nameValue)

                return {
                    ...state,
                    currentToDoName: nameValue
                }

            case AppAction.NAVIGATE_BACK:
                console.log('navigate back')
                return {
                    ...state,
                    currentToDoName: null
                }
            default:
                return state
        }
    }

}
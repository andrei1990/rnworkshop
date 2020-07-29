import ToDoListState from "../state/ToDoListState"
import IAction from "../actions/IAction"
import ToDo from "../model/ToDo"
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
                    todos: [...state.todos, { name :todoName, id: generateId()}]
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
                console.log('completing todo')
                let todo = action.data
                var dataList = state.todos.filter((item) => item.name != todo?.name);
                return {
                    todos: dataList
                }
                default:
                return state
        }
    }

}
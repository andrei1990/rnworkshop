import ToDoDetailState from "../state/todo/ToDoDetailsState"
import { iDataState } from "../state/IState"
import ToDo from "../model/ToDo"
import ToDoDetailAction from "../actions/tododetail/ToDoDetailAction"
import UtilAction from "../actions/UtilAction"
import IAction from "../actions/IAction"
import AppAction from "../actions/AppAction"


export default class ToDoDetailReducer {
    private static readonly _initialState: ToDoDetailState = {
        todo: undefined,
        state: iDataState.loading,
        errorMessage: ""
    }

    public static reducer(state: ToDoDetailState = ToDoDetailReducer._initialState, action: IAction<any, ToDo>): ToDoDetailState {
        switch (action.type) {
            case ToDoDetailAction.TODO_FETCH_DETAIL:
            return {
                ...state,
                state: iDataState.loading,
                errorMessage: ""
            }

          case ToDoDetailAction.TODO_FETCHED:
            return {
                ...state,
                todo: action.data,
                state: iDataState.loaded,
                errorMessage: ""
            }

          case UtilAction.ERROR:
            return {
                ...state,
                state: iDataState.error,
                errorMessage: action.error
            }
          case ToDoDetailAction.RESET_STATE:
            return {
                ...state,
                todo: null,
                state: iDataState.loaded,
                errorMessage: ""
            }
            default:
                return state
        }
    }

}
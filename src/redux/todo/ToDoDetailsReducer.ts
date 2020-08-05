import ToDo from '../../model/ToDo'
import IAction from '../common/IAction'
import {iDataState} from '../common/IState'
import ToDoDetailState from './ToDoDetailsState'
import {ToDoDetailsActionTypes} from './Types'

export default class ToDoDetailReducer {
  private static readonly _initialState: ToDoDetailState = {
    todo: undefined,
    state: iDataState.loading,
    errorMessage: '',
  };

  public static reducer(
    state: ToDoDetailState = ToDoDetailReducer._initialState,
    action: IAction<any, ToDo, ToDoDetailsActionTypes>,
  ): ToDoDetailState {
    switch (action.type) {
      case ToDoDetailsActionTypes.TODO_FETCH_DETAIL:
        return {
          ...state,
          state: iDataState.loading,
          errorMessage: '',
        }

      case ToDoDetailsActionTypes.TODO_FETCHED:
        return {
          ...state,
          todo: action.data,
          state: iDataState.loaded,
          errorMessage: '',
        }

      case ToDoDetailsActionTypes.ERROR:
        return {
          ...state,
          state: iDataState.error,
          errorMessage: action.error,
        }
      case ToDoDetailsActionTypes.RESET_STATE:
        return {
          ...state,
          todo: null,
          state: iDataState.loaded,
          errorMessage: '',
        }
      default:
        return state
    }
  }
}

import AuthState from "./AuthState";
import { iDataState } from "../common/IState";
import IAction from "../common/IAction";
import { AuthActionTypes } from "./Types";

export default class AuthReducer {
  private static readonly _initialState: AuthState = {
    token: undefined,
    state: iDataState.loading,
    errorMessage: "",
  };

  public static reducer(
    state: AuthState = AuthReducer._initialState,
    action: IAction<string, void, AuthActionTypes>
  ): AuthState {
    switch (action.type) {
      case AuthActionTypes.USER_LOGGED_IN:
        return {
          ...state,
          state: iDataState.loading,
          token: action.payload,
          errorMessage: "",
        };
      case AuthActionTypes.SIGN_OUT:
          console.log('sign out')
        return {
          ...state,
          state: iDataState.loading,
          token: null,
          errorMessage: "",
        };
      default:
        return state;
    }
  }
}

import IAction from "../common/IAction";
import { AuthActionTypes } from "./Types";

export default class AuthActions {
    public static userLoggedIn = (
        token: string,
      ): IAction<string, void, AuthActionTypes> => {
        return {
          payload: token,
          type: AuthActionTypes.USER_LOGGED_IN,
        }
      };

      public static signOut = (): IAction<void, void, AuthActionTypes> => {
        return {
          type: AuthActionTypes.SIGN_OUT,
        }
      };
}
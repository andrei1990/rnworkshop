import IState from "../common/IState";

export default interface AuthState extends IState {
    token?: string | null;
  }
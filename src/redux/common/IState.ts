export default interface IState {
  state?: iDataState;
  errorMessage?: String;
}

export enum iDataState {
  loading,
  loaded,
  error,
}

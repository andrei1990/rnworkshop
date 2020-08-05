export default interface IAction<P, D, A> {
  type: A,
  payload?: P,
  data?: D,
  error?: string
}

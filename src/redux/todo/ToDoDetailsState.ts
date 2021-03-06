import IState from '../common/IState'
import ToDo from '../../model/ToDo'

export default interface ToDoDetailState extends IState {
  todo?: ToDo | null;
}

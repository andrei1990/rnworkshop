import ToDo from '../../model/ToDo'
import IAction from '../common/IAction'
import {ToDoDetailsActionTypes} from './Types'
import {put} from 'redux-saga/effects'

function* findToDo(action: IAction<string, ToDo, ToDoDetailsActionTypes>) {
  const mockApiCall = (ms: number, todo: ToDo) => {
    return new Promise<ToDo>((resolve) => {
      console.log('waiting promise')
      setTimeout(() => {
        console.log('executing')
        resolve(todo)
      }, ms)
    })
  }

  try {
    const data = yield mockApiCall(3000, action.data!)
    yield put({type: ToDoDetailsActionTypes.TODO_FETCHED, data: data})
  } catch (e) {
    yield put({
      type: ToDoDetailsActionTypes.ERROR,
      error: 'Cannot process data',
    })
  }
}

export default findToDo

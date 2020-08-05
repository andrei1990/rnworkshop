import {ToDoDetailsActionTypes} from '../todo/Types'
import findToDo from '../todo/ToDoDetailsSaga'
import {takeEvery} from 'redux-saga/effects'

function* dataSaga() {
  yield takeEvery(ToDoDetailsActionTypes.TODO_FETCH_DETAIL, findToDo)
}

export default dataSaga

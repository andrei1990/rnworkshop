import { combineReducers } from 'redux'
import todos from './ToDosReducer'
import ToDoDetailReducer from './ToDoDetailsReducer'

const ReducerFactory = combineReducers({
    appData: todos,
    detail: ToDoDetailReducer.reducer
})

export default ReducerFactory
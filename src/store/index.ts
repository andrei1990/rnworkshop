import {createStore} from 'redux'
import {combineReducers} from 'redux'
import todoList from '../reducers/todos'
import AppState from '../state/AppState';

const rootReducer = combineReducers({appData: todoList})


const store = () => {
 	return createStore(
        rootReducer  // this is the todo-list reducer
 );
};

export default store();
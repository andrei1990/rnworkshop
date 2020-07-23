import {createStore} from 'redux'
import {combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import ToDoDetailReducer from '../reducers/ToDoDetailsReducer';
import ToDosReducesNew from '../reducers/ToDosReducesNew'


const rootReducer = combineReducers({appData: ToDosReducesNew.reducer, detail: ToDoDetailReducer.reducer})


const store = () => {
 	return createStore(
        rootReducer , applyMiddleware(thunk) // this is the todo-list reducer
 );
};

export default store()
import {  DisplayToDoAction, AddToDoAction, ToDoListAction } from '../types/types'
import TODO_LIST_ACTION_TYPES from '../actions/Actions'
import ToDoListState from '../state/ToDoListState';
import AppState from '../state/AppState';

export const initialState: ToDoListState = {
        todos: [{name: 'now'}, {name: 'then'}],
        currentToDoName: null
  };
const todoList = (
    state: ToDoListState = initialState,
    action: ToDoListAction
): ToDoListState => {
    const newState: ToDoListState = state; 
    switch (action.type){
        case 'add':
            // pay attention to type-casting on action
            const { name } = <AddToDoAction>action.data.name;
            console.log({newState});
            return {
                        todos: [...newState.todos, { name }],
                        currentToDoName: null
            };
        case 'display':
            let nameValue = <DisplayToDoAction>action.name;
            console.log('name is')
            console.log(nameValue)
            
            return {
                ...state,
                currentToDoName: nameValue
            }
        case 'back':
            return {
                ...state,
                currentToDoName: null
            }
            // define rest of actions here
        default:
            console.log('defaults state');
            return state;
    }
}

export default todoList;
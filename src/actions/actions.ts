import {AddToDoAction, DisplayToDoAction} from '../types/types'




export const  addTodo = (name: string): AddToDoAction => ({
    type: 'add',
    data: {
        name
    }
});

export const  displayToDo = (name: string): DisplayToDoAction => ({
    type: 'display',
    name: name
});




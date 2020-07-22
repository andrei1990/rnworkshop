import {AddToDoAction} from '../types/types'




const  addTodo = (name: string): AddToDoAction => ({
    type: 'add',
    data: {
        name
    }
});

export default addTodo;
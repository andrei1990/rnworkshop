import ToDo from "../model/ToDo"


export type AddToDoAction = {
    type: string;
    data: ToDo;
}

export type DisplayToDoAction = {
    type: string;
    payload: string;
}

export type ToDoListAction = AddToDoAction | DisplayToDoAction


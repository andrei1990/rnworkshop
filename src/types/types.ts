export type ToDo = {
    name: string;
}

export type AddToDoAction = {
    type: string;
    data: ToDo;
}

export type ToDoListAction = AddToDoAction


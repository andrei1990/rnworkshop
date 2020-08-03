import IAction from "../common/IAction"
import ToDo from "../../model/ToDo"
import { AppActionsTypes } from "./types"

export default class AppActions {
   


    public static addToDo = (todoName: string): IAction<string, void, AppActionsTypes> => {
        return {
            payload: todoName,
            type: AppActionsTypes.ADD_TODO
        }
    }


    public static completeToDo = (todo: ToDo): IAction<string, ToDo, AppActionsTypes> => {
        return {
            data: todo,
            type: AppActionsTypes.COMPLETE_TODO
        }
    }

}
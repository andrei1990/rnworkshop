import IAction from "./IAction"
import ToDo from "../model/ToDo"

export default class AppAction {
    public static readonly ADD_TODO: string = 'add'
    public static readonly DISPLAY_TODO: string = 'display'
    public static readonly NAVIGATE_BACK: string = 'back'
    public static readonly COMPLETE_TODO: string = 'complete'


    public static addToDo = (todoName: string): IAction<string, void> => {
        return {
            payload: todoName,
            type: AppAction.ADD_TODO
        }
    }

    public static displayToDo = (todoName: string): IAction<string, void> => {
        return {
            payload: todoName,
            type: AppAction.DISPLAY_TODO
        }
    }

    public static completeToDo = (todo: ToDo): IAction<string, ToDo> => {
        return {
            data: todo,
            type: AppAction.COMPLETE_TODO
        }
    }

    public static navigateBack = (): IAction<void, void> => {
        console.log('back')
        return {
            type: AppAction.NAVIGATE_BACK
        }
    }
}
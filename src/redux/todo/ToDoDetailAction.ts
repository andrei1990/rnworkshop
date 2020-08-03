import ToDo from '../../model/ToDo'
import IAction from '../common/IAction'
import { ToDoDetailsActionTypes } from './Types'

export default class ToDoDetailAction {


    // public static fetchDetail(todo: ToDo): any {
    //     return async (dispatch: any) => {
    //         try {
    //             dispatch({
    //                 type: ToDoDetailsActionTypes.TODO_FETCH_DETAIL
    //             })
    //             dispatch({
    //                 type: ToDoDetailsActionTypes.TODO_FETCHED,
    //                 data: await this.mockApiCall(3000, todo)
    //             })
    //         }
    //         catch (_) {
    //             dispatch({
    //                 type: UtilAction.ERROR,
    //                 errorMessage: "Cannot process data"
    //             })
    //         }
    //     }
    // }

    public static fetchDetail(todo: ToDo): IAction<void, ToDo, ToDoDetailsActionTypes> {
        return {
            data: todo,
            type: ToDoDetailsActionTypes.TODO_FETCH_DETAIL
        }
    }

    public static resetState = (): IAction<void, void, ToDoDetailsActionTypes> => {
        console.log('reset state')
        return {
            type: ToDoDetailsActionTypes.RESET_STATE
        }
    }
    static mockApiCall(ms: number, todo: ToDo) {
        return new Promise<ToDo>((resolve) => {
            console.log('waiting promise')
            setTimeout(() => {
                console.log('executing')
                resolve(todo)
            }, ms);
        }
        )
    }

}

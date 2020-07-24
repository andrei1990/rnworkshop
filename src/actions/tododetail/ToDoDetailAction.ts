import ToDo from '../../model/ToDo'
import UtilAction from "../UtilAction"
import IAction from '../IAction'

export default class ToDoDetailAction {
    public static readonly TODO_FETCHED: string = 'ToDoDetailAction.TODO_FETCHED'
    public static readonly TODO_FETCH_DETAIL: string = 'ToDoDetailAction.TODO_FETCH_DETAIL'
    public static readonly RESET_STATE: string = 'ToDoDetailAction.RESET_STATE'


    public static fetchDetail(todo: ToDo): any {
        return async (dispatch: any) => {
            try {
                dispatch({
                    type: ToDoDetailAction.TODO_FETCH_DETAIL
                })
                dispatch({
                    type: ToDoDetailAction.TODO_FETCHED,
                    data: await this.mockApiCall(3000, todo)
                })
            }
            catch (_) {
                dispatch({
                    type: UtilAction.ERROR,
                    errorMessage: "Cannot process data"
                })
            }
        }
    }

    public static resetState = (): IAction<void, void> => {
        console.log('reset state')
        return {
            type: ToDoDetailAction.RESET_STATE
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

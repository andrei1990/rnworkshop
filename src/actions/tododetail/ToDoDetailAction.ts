import ToDo from '../../model/ToDo'
import UtilAction from "../UtilAction"
import todoList from '../../reducers/todos'

export default class ToDoDetailAction {
    public static readonly TODO_FETCHED: string = 'ToDoDetailAction.TODO_FETCHED'
    public static readonly TODO_FETCH_DETAIL: string = 'ToDoDetailAction.TODO_FETCH_DETAIL'

    public static fetchDetail(todo: ToDo): any {
        return async (dispatch: any)  => {
            try {
                dispatch({
                    type: ToDoDetailAction.TODO_FETCH_DETAIL
                })
                dispatch({
                    type: ToDoDetailAction.TODO_FETCHED,
                    data: await this.apiCall(300, todo)
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
    static apiCall(ms: number, todo: ToDo) {
        return new Promise<ToDo>((resolve) => {
            setTimeout(resolve, ms);
            resolve(todo);
         }
        )
    }

}

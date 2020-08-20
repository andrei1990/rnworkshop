import ToDo from "../../model/ToDo";
import AppActions from "../../redux/todolist/ToDoListActions";
import { connect } from "react-redux";
import ToDoItem from "./ToDoItem";

function mapDispatchToProps(dispatch: any) {
    return {
      completeToDo: (todo: ToDo) => {
        dispatch(AppActions.completeToDo(todo));
      },
    };
  }
  
  export default connect(null, mapDispatchToProps)(ToDoItem);
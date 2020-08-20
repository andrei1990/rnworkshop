import AppActions from "../../redux/todolist/ToDoListActions";
import { Dispatch } from "react";
import AdToDo from "./AdToDo";
import { connect } from "react-redux";

const mapDipatchToProps = (dispatch: Dispatch) => ({
    onAddToDo: (name: string) => {
      dispatch(AppActions.addToDo(name));
    },
  });
  
 export default connect(null, mapDipatchToProps)(AdToDo);
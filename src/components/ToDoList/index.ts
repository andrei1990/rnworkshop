import { connect } from "react-redux";
import ToDoList from "./ToDoList";

const mapStateToProps = (state: any) => ({
  todos: state.todoList.todos,
});

export default connect(mapStateToProps, null)(ToDoList);

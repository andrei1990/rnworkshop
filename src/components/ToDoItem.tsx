import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import ToDo from "../model/ToDo";
import AppActions from "../redux/todolist/ToDoListActions";
import DoubleTap from "./common/DoubleTap";
import strings from "res/strings";
import Colors from "res/colors";
import pallete from "res/pallete";

type ToDoItemProps = {
  todo: ToDo;
  completeToDo: (todo: ToDo) => any;
};

const ToDoItem: FunctionComponent<ToDoItemProps> = ({ todo, completeToDo }) => {
  const _completeToDo = () => {
    console.log("complete to do");
    completeToDo(todo);
  };

  const textDecorationLine = (): string => {
    console.log("is todo completed");
    console.log(todo.completed);
    const strokeType = todo.completed
      ? strings.textDecoration.strikeThrough
      : strings.textDecoration.none;
    return strokeType;
  };

  return (
    <View style={styles.container}>
      <DoubleTap onDoubleTap={_completeToDo}>
        <Text
          style={[styles.title, { textDecorationLine: textDecorationLine() }]}
        >
          {todo.name}
        </Text>
      </DoubleTap>
    </View>
  );
};

function mapDispatchToProps(dispatch: any) {
  return {
    completeToDo: (todo: ToDo) => {
      dispatch(AppActions.completeToDo(todo));
    },
  };
}

export default connect(null, mapDispatchToProps)(ToDoItem);

const styles = StyleSheet.create({
  todoCompletion: {
    width: "100%",
  },
  container: {
    margin: 5,
    backgroundColor: Colors.listItem.background,
    borderRadius: 5,
    borderWidth: 0.5,
  },
  title: { ...pallete.title, paddingStart: 10, marginBottom: 3 },
});

import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import strings from "res/strings";
import ToDo from "../../model/ToDo";
import DoubleTap from "../common/DoubleTap";
import styles from "./styles";





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
export default ToDoItem




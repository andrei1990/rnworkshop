import { useNavigation } from "@react-navigation/native";
import React, { FunctionComponent, useState, useEffect } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import ToDo from "../model/ToDo";
import AppActions from "../redux/todolist/ToDoListActions";
import { HomeScreenNavigationProp } from "../screens/MainScreen";

type ToDoItemProps = {
  todo: ToDo;
  completeToDo: (todo: ToDo) => any;
};

const ToDoItem: FunctionComponent<ToDoItemProps> = ({ todo, completeToDo }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [message, setMessage] = useState("");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const completedStatusMessage = (): string => {
      console.log("is todo completed");
      console.log(todo.completed);
      // eslint-disable-next-line no-shadow
      const message = todo.completed ? "completed" : "in progress";
      return message;
    };
    setMessage(completedStatusMessage());
  }, [todo.completed]);

  const handlePress = () => {
    navigation.navigate("Details", {
      itemName: todo.name,
    });
  };

  const _completeToDo = () => {
    console.log("complete to do");
    completeToDo(todo);
  };

  const _handlerLongClick = () => {
    // handler for Long Click
    Alert.alert(
      "",
      alertMessage(),
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            console.log("complete to do");
            _completeToDo();
          },
        },
      ],
      { cancelable: false }
    );
  };

  const completedStatusColor = (): string => {
    console.log("is todo completed");
    console.log(todo.completed);
    const color = todo.completed ? "#bbbfff" : "#b88e1f";
    return color;
  };

  const alertMessage = (): string => {
    const color = todo.completed ? "Undo ToDo" : "Complete To Do";
    return color;
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      onLongPress={_handlerLongClick}
      style={styles.container}
    >
      <Text style={styles.title}>{todo.name}</Text>
      <Text
        style={[
          styles.todoCompletion,
          { backgroundColor: completedStatusColor() },
        ]}
      >
        {message}
      </Text>
    </TouchableOpacity>
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
    backgroundColor: "#fff",
    borderColor: "#bbb",
    borderWidth: 1,
    borderTopWidth: 0,
  },
  title: {
    paddingStart: 5,
    fontSize: 16,
    fontWeight: "bold",
    borderColor: "#bbb1ef",
    backgroundColor: "#fff123",
    marginBottom: 5,
  },
});

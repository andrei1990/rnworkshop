import { useNavigation } from "@react-navigation/native";
import React, { FunctionComponent } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import ToDo from "../model/ToDo";
import { HomeScreenNavigationProp } from "../screens/MainScreen";
import AppActions from "../redux/todolist/ToDoListActions";
import { connect } from "react-redux";

type ToDoItemProps = {
  todo: ToDo;
  completeToDo: (todo: ToDo) => any;
};

const ToDoItem: FunctionComponent<ToDoItemProps> = ({ todo, completeToDo }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

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
      style={styles.todo}
      onPress={handlePress}
      onLongPress={_handlerLongClick}
    >
      <View style={styles.info}>
        <Text style={styles.title}>{todo.name}</Text>
        <View
          style={{
            backgroundColor: completedStatusColor(),
            width: "100%",
            height: 15,
          }}
        />
      </View>
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
  todo: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  image: {
    width: "100%",
    height: 150,
    backgroundColor: "#ccc",
  },
  info: {
    padding: 10,
    backgroundColor: "#fff",
    borderColor: "#bbb",
    borderWidth: 1,
    borderTopWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  footer: {
    flexDirection: "row",
  },
  cause: {
    flex: 2,
  },
  price: {
    flex: 1,
    textAlign: "right",
  },
});

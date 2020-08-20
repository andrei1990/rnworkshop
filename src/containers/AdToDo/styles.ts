import { StyleSheet } from "react-native";
import Colors from "../../../res/colors";

export default StyleSheet.create({
  todoInput: {
    borderWidth: 1,
    borderColor: Colors.background,
    flex: 1,
  },
  container: {
    flexDirection: "row",
    marginHorizontal: 5,
    backgroundColor: Colors.background,
    alignItems: "center",
  },
});

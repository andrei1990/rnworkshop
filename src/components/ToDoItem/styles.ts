import { StyleSheet } from "react-native";
import Colors from "../../../res/colors";
import pallete from "res/pallete";


export default  StyleSheet.create({
    todoCompletion: {
      width: "100%",
      height: 15
    },
    container: { 
      margin: 5,
      backgroundColor: Colors.listItem.background,
      borderRadius: 5,
      borderWidth: 0.5,
    },
    title: { ...pallete.title, paddingStart: 10, marginBottom: 3 },
  });
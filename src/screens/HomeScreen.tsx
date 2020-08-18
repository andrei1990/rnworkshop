import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { Component } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from "react-native";
import { RootStackParamList } from "../../App";
import ToDoListNew from "../components/ToDoList";
import AdToDo from "../containers/AdToDo";
import AuthActions from "../redux/login/Actions";
import { connect } from "react-redux";

export type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Details"
>;


export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

export type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Register"
>;

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;


class Home extends Component {


  render() {
    return (
      <SafeAreaView>
        <AdToDo />
        <ToDoListNew />
      </SafeAreaView>
    );
  }

}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

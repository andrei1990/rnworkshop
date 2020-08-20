import React, { Component } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ToDoList from "../../components/ToDoList";
import AdToDo from "../../containers/AdToDo";

class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <AdToDo />
        <ToDoList />
      </SafeAreaView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

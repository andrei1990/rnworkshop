import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import AdToDo from './containers/AdToDo';
import ToDoList from './components/ToDoList';
import { connect } from 'react-redux';
import { ToDos } from './model/ToDo';
import TODOList from './components/ToDoListNew';
import AppState from './state/AppState';
import ToDoListState from './state/ToDoListState';

type Props = {
  appState: ToDoListState;
}



const ToDoApp = ({
  appState
}: Props) => {
    return (
        <View style={styles.container}>
          <AdToDo/>
          <View style={{backgroundColor : '#00f0fe'}}>
            <ToDoList todos={appState.todos}/>
          </View>
        </View>
    );
};

const mapStateToProps = (state: any) => ({
  appState: state.appData
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefee4',
    paddingTop: 10
  }
});



export default connect(
  mapStateToProps,
  null
)(ToDoApp)
import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import AdToDo from './containers/AdToDo';
import ToDoList from './components/ToDoList';
import { connect } from 'react-redux';
import { ToDos } from './model/ToDo';
import TODOList from './components/ToDoListNew';
import AppState from './state/AppState';
import ToDoListState from './state/ToDoListState';
import ToDoListNew from './components/ToDoList';
import {displayToDo} from './actions/actions'



interface AppProps {
  appData: ToDoListState
  displayToDo: (name: string) => any
}


class ToDoAppNew extends Component<AppProps>{

  render(){
    return (
      <View style={styles.container}>
        <AdToDo/>
        <View style={{backgroundColor : '#00f0fe'}}>
          <ToDoListNew todos={this.props.appData.todos} onItemPress={this.props.displayToDo}/>
        </View>
      </View>
  );
  }

}


const mapStateToProps = (state: any) => ({
  appData: state.appData
});

function mapDispatchToProps(dispatch: any) {
  return {
    displayToDo: (name: string) => dispatch(displayToDo(name)),
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefee4',
    paddingTop: 10
  }
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoAppNew)
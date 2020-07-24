import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import AdToDo from './containers/AdToDo';
import ToDoList from './components/ToDoList';
import { connect } from 'react-redux';
import ToDo, { ToDos } from './model/ToDo';
import AppState from './state/AppState';
import ToDoListState from './state/ToDoListState';
import ToDoListNew from './components/ToDoList';
import ToDoDetails from './components/ToDoDetails';
import AppAction from './actions/AppAction';
import ToDoDetailAction from './actions/tododetail/ToDoDetailAction';



interface AppProps {
  appData: ToDoListState
  displayToDo: (name: string) => any
  navigateBack: () => any
}


class ToDoAppNew extends Component<AppProps>{

  currentToDo = (): ToDo => {
    return {name :this.props.appData.currentToDoName }
  }

  render(){
    if (this.props.appData.currentToDoName) {
      console.log('displaying details')
      return (
        <View>
         {this.currentToDo() && (
          <ToDoDetails
            initialToDoData={this.currentToDo()}
            onBack={this.props.navigateBack}
          />
         )}
        </View>
      )
    }
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
    displayToDo: (name: string) => dispatch(AppAction.displayToDo(name)),
    navigateBack: () => {
      dispatch(AppAction.navigateBack())
      dispatch(ToDoDetailAction.resetState())
    }
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
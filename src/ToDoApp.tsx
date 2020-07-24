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
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { RouteProp } from '@react-navigation/native';



export type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

interface AppProps {
  appData: ToDoListState
  displayToDo: (name: string) => any
  navigateBack: () => any,
  navigation: HomeScreenNavigationProp
}


class ToDoAppNew extends Component<AppProps>{

  
  currentToDo = (): ToDo => {
    return {name :this.props.appData.currentToDoName }
  }

  render(){
    return (
      <View style={styles.container}>
        <AdToDo/>
        <View style={{backgroundColor : '#00f0fe'}}>
          <ToDoListNew todos={this.props.appData.todos} onItemPress={this.props.displayToDo} navigation={this.props.navigation}/>
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
    displayToDo: (name: string) => {},
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
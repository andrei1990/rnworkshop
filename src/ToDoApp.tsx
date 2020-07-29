import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { RootStackParamList } from '../App';
import ToDoListNew from './components/ToDoList';
import AdToDo from './containers/AdToDo';



export type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;



export default class ToDoAppNew extends Component{

  

  render(){
    return (
      <View style={styles.container}>
        <AdToDo/>
        <View style={{backgroundColor : '#00f0fe'}}>
          <ToDoListNew/>
        </View>
      </View>
  );
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefee4',
    paddingTop: 10
  }
});


import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Text} from 'react-native';
import { connect } from 'react-redux'
import {ToDoItem} from './ToDoItem';
import ToDo, { ToDos } from '../model/ToDo';
import { HomeScreenNavigationProp } from '../ToDoApp';


interface ToDoListProps {
    todos: ToDos,
    onItemPress: any,
    navigation: HomeScreenNavigationProp
  }
  
export default class ToDoListNew extends Component<ToDoListProps> {
  
    constructor(props: ToDoListProps) {
      super(props)
    }
    _keyExtractor = (item: ToDo, index: Number) => (item.id);

  
    render() {
      return (
        <View style={styles.list}>
          <FlatList
            data={this.props.todos}
            keyExtractor={this._keyExtractor}
            renderItem={({ item }) => (
              <ToDoItem todo={item}  navigation={this.props.navigation}/>
            )}
          />
        </View>
      )
    }
  }




const styles = StyleSheet.create({
    list: {
      backgroundColor: '#eeeaaa'
    },
  })
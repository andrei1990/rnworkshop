import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Text} from 'react-native';
import { connect } from 'react-redux'
import ToDoItem from './ToDoItem';
import ToDo, { ToDos } from '../model/ToDo';
import ToDoItemNew from './ToDoItem';


interface ToDoListProps {
    todos: ToDos,
    onItemPress: any
  }
  
export default class ToDoListNew extends Component<ToDoListProps> {
  
    constructor(props: ToDoListProps) {
      super(props)
    }
    _keyExtractor = (item: ToDo, index: Number) => (item.name + index.toString);

  
    render() {
      return (
        <View style={styles.list}>
          <FlatList
            data={this.props.todos}
            keyExtractor={this._keyExtractor}
            renderItem={({ item }) => (
              <ToDoItemNew todo={item} onPress={this.props.onItemPress} />
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
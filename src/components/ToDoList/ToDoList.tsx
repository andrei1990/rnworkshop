import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ToDo, { ToDos } from '../../model/ToDo';
import ToDoItem from '../ToDoItem';

interface ToDoListProps {
  todos?: ToDos
}

class ToDoList extends Component<ToDoListProps> {

  _keyExtractor = (item: ToDo) => item.id;

  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.todos}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => <ToDoItem todo={item} />}
        />
      </View>
    )
  }
}


export default ToDoList

const styles = StyleSheet.create({
  list: {
  },
})

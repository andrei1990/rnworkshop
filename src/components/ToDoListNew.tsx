import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { ToDos } from '../model/ToDo'
import ToDoItem from './ToDoItem'

interface DealListProps {
  todos: ToDos,
}

export default class TODOList extends Component<DealListProps> {

  constructor(props: DealListProps) {
    super(props)
  }

  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.todos}
          renderItem={({ item }) => (
            <ToDoItem todo={item} />
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee'
  },
})

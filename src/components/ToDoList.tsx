import React, {Component} from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {connect} from 'react-redux'
import ToDo, {ToDos} from '../model/ToDo'
import ToDoItem from './ToDoItem'

interface ToDoListProps {
  todos: ToDos
}

class ToDoListNew extends Component<ToDoListProps> {

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

const mapStateToProps = (state: any) => ({
  todos: state.todoList.todos,
})

export default connect(mapStateToProps, null)(ToDoListNew)

const styles = StyleSheet.create({
  list: {
  },
})

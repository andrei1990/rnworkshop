import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import ToDo from '../model/ToDo'



type Props = {
    todo: ToDo;
}

const ToDoItem = ({
    todo
}: Props)=> {
    return (
        <TouchableOpacity style={styles.deal}>
          <View style={styles.info}>
            <Text style={styles.title}>{todo.name}</Text>
          </View>
        </TouchableOpacity>
      )
}

export default ToDoItem;

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 16,
    marginTop: 16
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc'
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  footer: {
    flexDirection: 'row'
  },
  cause: {
    flex: 2,
  },
  price: {
    flex: 1,
    textAlign: 'right'
  },
})

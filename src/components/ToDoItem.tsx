import React, { Component, FunctionComponent } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import ToDo from '../model/ToDo'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '../ToDoApp'




type ToDoItemProps = {
  todo: ToDo
}

export const  ToDoItem: FunctionComponent<ToDoItemProps> = ({todo}) => {

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handlePress = () => {
    navigation.navigate('Details', {
      itemName: todo.name
    })
  }

  return (
    <TouchableOpacity style={styles.todo} onPress={handlePress}>
      <View style={styles.info}>
        <Text style={styles.title}>{todo.name}</Text>
      </View>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  todo: {
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

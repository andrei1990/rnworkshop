import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import ToDo from '../model/ToDo'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '../ToDoApp'




interface ToDoItemProps  {
  todo: ToDo,
  onPress: any,
  navigation: HomeScreenNavigationProp
}

export default class ToDoItemNew extends Component<ToDoItemProps>{


  constructor(props: ToDoItemProps) {
    super(props)
  }

  handlePress: any = () => {
    console.log('pressed item')
    console.log(this.props.todo.name)
    this.props.navigation.navigate('Details', {
      itemName: this.props.todo.name
    });
  }

  render() {
    const { todo } = this.props
    return (
      <TouchableOpacity style={styles.todo} onPress={this.handlePress}>
        <View style={styles.info}>
          <Text style={styles.title}>{todo.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

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

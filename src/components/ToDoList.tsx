import React from 'react';
import { FlatList, View, StyleSheet, Text} from 'react-native';
import { connect } from 'react-redux'
import ToDoItem from './ToDoItem';
import ToDo, { ToDos } from '../model/ToDo';

type Props = {
    todos: ToDos;
}

const ToDoList = ({
    todos
}: Props)=> {
    return (
        <View style={{backgroundColor : '#ff223f', marginHorizontal: 15}}>
            <Text>{todos.length}</Text>
          	<FlatList<ToDo>
              data={todos}
              renderItem={({ item }) => (<ToDoItem todo={item}></ToDoItem>)}/>
        </View>
    );
};


export default ToDoList;
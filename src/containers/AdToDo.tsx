import React from 'react';
import { TextInput, View, Button, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ionicons'
import { connect } from 'react-redux'
import addTodo from '../actions/actions'
import { Dispatch } from 'redux';


type Props = {
    onAddToDo: (name: string) => any;
    name: string
}


const AdToDoBase = ({
    onAddToDo,
    name
}: Props) => {
    return (
        <View style={{flexDirection : 'row', marginHorizontal: 15}}>
          	<TextInput
                  placeholder = 'Create new to do'
                  onChange={(value) => name=value.nativeEvent.text}
          		style={{borderWidth: 1, borderColor : '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5}}
          	/>
          	<TouchableOpacity onPress={() => onAddToDo(name)}>
          		<View style={{backgroundColor: '#eaeaea', height: 50}}>
          			<Icon name="add" />
          		</View>
            </TouchableOpacity>
        </View>
    );
};


const mapDipatchToProps = (dispatch: Dispatch) => ({
    onAddToDo: (name: string) => {
        dispatch(addTodo({name}));
    }
});

const AdToDo = connect(
	null,
    mapDipatchToProps
)(AdToDoBase);

export default AdToDo;

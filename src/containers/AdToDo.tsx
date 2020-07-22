import React, { Component } from 'react';
import { TextInput, View, Button, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ionicons'
import { connect } from 'react-redux'
import {addTodo} from '../actions/actions'
import { Dispatch } from 'redux';


interface AdToDoProps{
    onAddToDo: (name: string) => any,
}

class AdToDoNew extends Component<AdToDoProps>{

    constructor(props: AdToDoProps) {
        super(props)
      }

    state = {
        name: ''
    }

    _onAdToDo = () => {
        this.props.onAddToDo(this.state.name)
    }
    
    render() {
        return (
            <View style={{flexDirection : 'row', marginHorizontal: 15}}>
                  <TextInput
                      placeholder = 'Create new to do'
                      onChangeText={(name) => this.setState({name})}
                      style={{borderWidth: 1, borderColor : '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5}}
                  />
                  <TouchableOpacity onPress={() => this._onAdToDo()}>
                      <View style={{backgroundColor: '#eaeaea', height: 50}}>
                          <Icon name="add" />
                      </View>
                </TouchableOpacity>
            </View>
        );
    }

}


const mapDipatchToProps = (dispatch: Dispatch) => ({
    onAddToDo: (name: string) => {
        dispatch(addTodo({name}));
    }
});

const AdToDo = connect(
	null,
    mapDipatchToProps
)(AdToDoNew);

export default AdToDo;


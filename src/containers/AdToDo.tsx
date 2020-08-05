import React, {Component, RefObject} from 'react'
import {Keyboard, TextInput, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-ionicons'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import AppActions from '../redux/todolist/ToDoListActions'

interface AdToDoProps {
  onAddToDo: (name: string) => any;
}

class AdToDoNew extends Component<AdToDoProps> {
  textInput: RefObject<TextInput>;

  constructor(props: AdToDoProps) {
    super(props)
    this.state = {
      name: ''
    }
    this.textInput = React.createRef()
  }

  _onAdToDo = () => {
    console.log('todo is')
    console.log('adding to do')
    console.log(this.state.name)
    this.props.onAddToDo(this.state.name)
    this.setState({name: ''})
    this.textInput.current!.clear()
    Keyboard.dismiss()
  };

  _handleTextChange = (text: string) => {
    console.log('text changed')
    console.log(text)
    this.setState({name: text})
  };

  render() {
    return (
      <View style={{flexDirection: 'row', marginHorizontal: 15}}>
        <TextInput
          ref={this.textInput}
          placeholder="Create new to do"
          onChangeText={(value) => this._handleTextChange(value)}
          style={{
            borderWidth: 1,
            borderColor: '#f2f2e1',
            backgroundColor: '#eaeaea',
            height: 50,
            flex: 1,
            padding: 5,
          }}
        />
        <TouchableOpacity onPress={() => this._onAdToDo()}>
          <View style={{backgroundColor: '#eaeaea', height: 50}}>
            <Icon name="add" />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapDipatchToProps = (dispatch: Dispatch) => ({
  onAddToDo: (name: string) => {
    dispatch(AppActions.addToDo(name))
  },
})

const AdToDo = connect(null, mapDipatchToProps)(AdToDoNew)

export default AdToDo

import React, { Component, RefObject } from "react";
import { Keyboard, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-ionicons";
import strings from "res/strings";
import styles from "./styles";

interface AdToDoProps {
  onAddToDo: (name: string) => any;
}

class AdToDo extends Component<AdToDoProps> {
  textInput: RefObject<TextInput>;

  constructor(props: AdToDoProps) {
    super(props);
    this.state = {
      name: "",
    };
    this.textInput = React.createRef();
  }

  _onAdToDo = () => {
    if (this.state.name === "") {
      return;
    }
    this.props.onAddToDo(this.state.name);
    this.setState({ name: "" });
    this.textInput.current!.clear();
    Keyboard.dismiss();
  };

  _handleTextChange = (text: string) => {
    this.setState({ name: text });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref={this.textInput}
          placeholder={strings.addToDo}
          onChangeText={(value) => this._handleTextChange(value)}
          onSubmitEditing={this._onAdToDo}
          style={styles.todoInput}
        />
        <TouchableOpacity onPress={() => this._onAdToDo()}>
          <Icon name={strings.iconAdd} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default AdToDo;

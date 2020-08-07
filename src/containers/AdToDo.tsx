import React, { Component, RefObject } from "react";
import {
  Keyboard,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import Icon from "react-native-ionicons";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import AppActions from "../redux/todolist/ToDoListActions";
import Colors from "res/colors";
import strings from 'res/strings'

interface AdToDoProps {
  onAddToDo: (name: string) => any;
}

class AdToDoNew extends Component<AdToDoProps> {
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

const mapDipatchToProps = (dispatch: Dispatch) => ({
  onAddToDo: (name: string) => {
    dispatch(AppActions.addToDo(name));
  },
});

const AdToDo = connect(null, mapDipatchToProps)(AdToDoNew);

export default AdToDo;

const styles = StyleSheet.create({
  todoInput: {
    borderWidth: 1,
    borderColor: Colors.background,
    flex: 1,
  },
  container: {
    flexDirection: "row",
    marginHorizontal: 5,
    backgroundColor: Colors.background,
    alignItems: "center",
  },
});

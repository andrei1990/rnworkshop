import React, { Component } from "react";
import { TouchableWithoutFeedback, Text, View } from "react-native";
import styles from "./styles";

type Props = {
  onPress: () => any;
  text: string;
  style?: any;
  titleStyle?: any;
};

export default class CustomButton extends Component<Props> {
  render() {
    return (
      <View style={{...styles.buttonDefault, ...this.props.style}}>
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          <Text style={{...styles.buttonTitleDefault, ...this.props.titleStyle}}>{this.props.text}</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

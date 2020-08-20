import React, { Component } from "react";
import { TouchableWithoutFeedback, Text, View } from "react-native";

type Props = {
  onPress: () => any;
  text: string;
  style: any,
  titleStyle: any
};

export default class CustomButton extends Component<Props> {
  render() {
    return (
      <View style={this.props.style}>
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          <Text style={this.props.titleStyle}>{this.props.text}</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

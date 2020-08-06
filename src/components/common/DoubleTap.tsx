import React, { Component } from "react";
import { TouchableWithoutFeedback } from "react-native";

type Props = {
  delay: number;
  onDoubleTap: () => any;
};

export default class DoubleTap extends Component<Props> {
  static defaultProps = {
    delay: 200,
    onDoubleTap: () => null,
  };

  lastTap: number = 0;

  handleDoubleTap = () => {
    const now = Date.now();
    if (this.lastTap && now - this.lastTap < this.props.delay) {
      this.props.onDoubleTap();
    } else {
      this.lastTap = now;
    }                                                                                                                                                      
  };     

  render() {
    return ( 
      <TouchableWithoutFeedback onPress={this.handleDoubleTap}>{this.props.children}</TouchableWithoutFeedback>
    )
  }
}

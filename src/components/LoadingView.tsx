import { FunctionComponent } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import React from "react";


export const  LoadingView: FunctionComponent<any> = () => {

    return (
      <TouchableOpacity>
        <View>
          <Text>Loading</Text>
        </View>
      </TouchableOpacity>
    )
  }
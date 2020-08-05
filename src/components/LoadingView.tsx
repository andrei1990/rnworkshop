import React, {FunctionComponent} from 'react'
import {TouchableOpacity, View, Text} from 'react-native'

export const LoadingView: FunctionComponent<any> = () => {
  return (
    <TouchableOpacity>
      <View>
        <Text>Loading</Text>
      </View>
    </TouchableOpacity>
  )
}

import 'react-native-gesture-handler';
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import ToDoAppNew from './src/ToDoApp';
import ToDoDetails from './src/components/ToDoDetails';
import rootReducer from './src/store';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReducerFactory from './src/reducers/ReducerFactory';
import store from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from 'react-native/Libraries/NewAppScreen';

export type RootStackParamList = {
  Home: undefined;
  Details: { itemName: string | null };
};

const Stack = createStackNavigator<RootStackParamList>();




const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode='none'>
          <Stack.Screen name="Home" component={ToDoAppNew} />
          <Stack.Screen name="Details" component={ToDoDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
};

export default App;
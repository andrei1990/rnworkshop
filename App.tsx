import 'react-native-gesture-handler';
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import ToDoAppNew from './src/ToDoApp';
import ToDoDetails from './src/components/ToDoDetails';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReducerFactory from './src/reducers/ReducerFactory';
import {store, persistor} from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { PersistGate } from 'redux-persist/integration/react';
import { LoadingView } from './src/components/LoadingView';

export type RootStackParamList = {
  Home: undefined;
  Details: { itemName: string | null };
};

const Stack = createStackNavigator<RootStackParamList>();




const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" headerMode='none'>
            <Stack.Screen name="Home" component={ToDoAppNew} />
            <Stack.Screen name="Details" component={ToDoDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>

  );
};

export default App;
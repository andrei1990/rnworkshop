import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { LoadingView } from './src/components/LoadingView';
import ToDoDetails from './src/screens/ToDoDetails';
import { persistor, store } from './src/redux/store';
import ToDoAppNew from './src/screens/MainScreen';

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
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { LoadingView } from "./src/components/LoadingView";
import { persistor, store } from "./src/redux/store";
import Home from "./src/screens/MainScreen";
import RegistrationScreen from "./src/screens/RegistrationScreen/RegistrationScreen";
import AppState from "./src/redux/common/AppState";
import LoginScreen from "./src/screens/LoginScreen";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const token = useSelector(state => state.auth.token);

  return (
    <NavigationContainer>
    <Stack.Navigator>
      {token ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegistrationScreen} />
        </>
      )}
    </Stack.Navigator>
  </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
       <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;

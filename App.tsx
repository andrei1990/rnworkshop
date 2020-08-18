import React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { LoadingView } from "./src/components/LoadingView";
import AppNavigator from "./src/navigations/AppNavigator";
import { persistor, store } from "./src/redux/store";



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

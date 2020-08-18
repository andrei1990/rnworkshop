import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";


const AppNavigator = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <NavigationContainer>
      {token ? (
        <DrawerNavigator />
      ) : (
        <AuthNavigator/>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;

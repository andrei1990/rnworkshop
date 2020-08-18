import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/HomeScreen";
import Profile from "../screens/ProfileScreen/ProfileScreen";



const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
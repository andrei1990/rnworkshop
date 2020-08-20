import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/HomeScreen/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import Icon from "react-native-ionicons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type HomeStackParamList = {
  Home: undefined;
};

type ProfileStackParamList = {
  Profile: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, "Home">;

type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  "Profile"
>;

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

 const HamburgerIcon = (navigation: NavigationProp) => {
  return (
    <Icon
      name="menu"
      size={35}
      onPress={() => navigation.openDrawer()}
    />
  );
};

const HomeStackComponent = () => {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => HamburgerIcon(navigation),
        }}
      />
    </HomeStack.Navigator>
  );
};

const ProfileStackComponent = () => {
  const navigation = useNavigation();
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerLeft: () => HamburgerIcon(navigation),
        }}
      />
    </ProfileStack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStackComponent} />
      <Drawer.Screen name="Profile" component={ProfileStackComponent} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

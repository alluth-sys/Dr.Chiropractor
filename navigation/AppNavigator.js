import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AuthNavigator } from "./stackNavigator";
import { MainNavigator } from "./tabNavigator";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
      {/* <MainNavigator /> */}
    </NavigationContainer>
  );
};

export default AppNavigator;

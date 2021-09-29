import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StyleSheet, View, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

//Main Flow
import { HomeScreenNavigator } from "./MainStackNavigator";
import { SearchScreenNavigator } from "./MainStackNavigator";
import { AppointmentScreenNavigator } from "./MainStackNavigator";
import { AccountScreenNavigator } from "./MainStackNavigator";

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          position: "absolute",
          bottom: Platform.OS === "ios" ? 25 : 0,
          left: Platform.OS === "ios" ? 20 : 0,
          right: Platform.OS === "ios" ? 20 : 0,
          backgroundColor: "black",
          borderRadius: Platform.OS === "ios" ? 15 : 0,
          height: Platform.OS === "ios" ? 90 : 70,
          elevation: 2,
        },
        activeTintColor: "white",
        ...styles.shadow,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <View style={Platform.OS === "ios" ? styles.iconContainer : null}>
                <Feather name="home" size={24} color={color} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <View style={Platform.OS === "ios" ? styles.iconContainer : null}>
                <Feather name="search" size={24} color={color} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={AppointmentScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <View style={Platform.OS === "ios" ? styles.iconContainer : null}>
                <Feather name="list" size={24} color={color} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <View style={Platform.OS === "ios" ? styles.iconContainer : null}>
                <MaterialIcons name="account-circle" size={24} color={color} />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "30%",
  },
});

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

//Main Flow
import Account from "../screens/Main/Account";
import HomeScreen, {
  screenOptions as HomeScreenScreenOptions,
} from "../screens/Main/HomeScreen";
import Appointment from "../screens/Main/AppointmentScreen";
import AppointmentDetail from "../screens/Main/AppointmentDetail";
import SearchScreen from "../screens/Main/SearchScreen";
import TrainerDetailScreen from "../screens/Main/TrainerDetailScreen";

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
        activeTintColor: "#007AFE",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
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
        component={SearchScreen}
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
        component={Appointment}
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
        component={Account}
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

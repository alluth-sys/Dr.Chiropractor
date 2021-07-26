import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

//Auth Flow
import WelcomeScreen from "./screens/Auth/WelcomeScreen";
import SigninScreen from "./screens/Auth/SigninScreen";
import SignUpScreen from "./screens/Auth/SignUpScreen";
import OTPScreen from "./screens/Auth/OTPScreen";

//Main Flow
import Account from "./screens/Main/Account";
import HomeScreen from "./screens/Main/HomeScreen";
import Appointment from "./screens/Main/AppointmentScreen";
import AppointmentDetail from "./screens/Main/AppointmentDetail";
import SearchScreen from "./screens/Main/SearchScreen";
import TrainerDetailScreen from "./screens/Main/TrainerDetailScreen";

//load font from ./assets/fonts
const getFonts = () => {
  return Font.loadAsync({
    rufina_regular: require("./assets/fonts/Rufina-Regular.ttf"),
    rufina_bold: require("./assets/fonts/Rufina-Bold.ttf"),
    opensans_regular: require("./assets/fonts/OpenSans-Regular.ttf"),
    opensans_bold: require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Welcome: WelcomeScreen,
    Signup: SignUpScreen,
    Signin: SigninScreen,
    OTP: OTPScreen,
  }),
  mainFlow: createBottomTabNavigator({
    Home: HomeScreen,
    Search: SearchScreen,
    AppointmentFlow: createStackNavigator({
      Appointment: Appointment,
      AppointmentDetail: AppointmentDetail,
    }),
    Account: Account,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  [fontsLoaded, setFontsLoaded] = useState(false); //set initial load font state as false

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  } else {
    return (
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    );
  }
};

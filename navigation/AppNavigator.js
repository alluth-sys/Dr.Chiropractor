import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Auth Flow
import WelcomeScreen, {
  screenOptions as WelcomeScreenOptions,
} from "../screens/WelcomeScreen";
import SigninScreen, {
  screenOptions as SignInScreenOptions,
} from "../screens/Auth/SigninScreen";
import SignUpScreen, {
  screenOptions as SignUpScreenOptions,
} from "../screens/Auth/SignUpScreen";
import OTPScreen, {
  screenOptions as OTPScreenOptions,
} from "../screens/Auth/OTPScreen";
import OTPReceivedScreen, {
  screenOptions as OTPReceivedScreenOptions,
} from "../screens/Auth/OTPReceivedScreen";

//Main Flow
import Account from "../screens/Main/Account";
import HomeScreen from "../screens/Main/HomeScreen";
import Appointment from "../screens/Main/AppointmentScreen";
import AppointmentDetail from "../screens/Main/AppointmentDetail";
import SearchScreen from "../screens/Main/SearchScreen";
import TrainerDetailScreen from "../screens/Main/TrainerDetailScreen";

const defaultNavigationOptions = {
  headerTitleStyle: {
    fontFamily: "opensans_bold",
  },
  headerBackTitleStyle: {
    fontFamily: "opensans_regular",
  },
};

const AuthStackNavigator = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavigationOptions}>
      <AuthStackNavigator.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={WelcomeScreenOptions}
      />
      <AuthStackNavigator.Screen
        name="OTP"
        component={OTPScreen}
        options={OTPScreenOptions}
      />
      <AuthStackNavigator.Screen
        name="OTPReceived"
        component={OTPReceivedScreen}
        options={OTPReceivedScreenOptions}
      />
      <AuthStackNavigator.Screen
        name="Signup"
        component={SignUpScreen}
        options={SignUpScreenOptions}
      />
      <AuthStackNavigator.Screen
        name="Signin"
        component={SigninScreen}
        options={SignInScreenOptions}
      />
    </AuthStackNavigator.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Appointment" component={AppointmentDetail} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
      {/* <MainNavigator /> */}
    </NavigationContainer>
  );
};

export default AppNavigator;

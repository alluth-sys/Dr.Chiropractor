import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

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

const defaultNavigationOptions = {
  headerTitleStyle: {
    fontFamily: "opensans_bold",
  },
  headerBackTitleStyle: {
    fontFamily: "opensans_regular",
  },
};

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator
      screenOptions={defaultNavigationOptions}
      initialRouteName={"Welcome"}
    >
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
        name="Signin"
        component={SigninScreen}
        options={SignInScreenOptions}
      />
      <AuthStackNavigator.Screen
        name="Signup"
        component={SignUpScreen}
        options={SignUpScreenOptions}
      />
    </AuthStackNavigator.Navigator>
  );
};

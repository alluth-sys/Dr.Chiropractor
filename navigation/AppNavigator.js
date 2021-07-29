import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { Transition } from "react-native-reanimated";

//Auth Flow
import WelcomeScreen from "../screens/Auth/WelcomeScreen";
import SigninScreen from "../screens/Auth/SigninScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import OTPScreen from "../screens/Auth/OTPScreen";
import OTPReceivedScreen from "../screens/Auth/OTPReceivedScreen";

//Main Flow
import Account from "../screens/Main/Account";
import HomeScreen from "../screens/Main/HomeScreen";
import Appointment from "../screens/Main/AppointmentScreen";
import AppointmentDetail from "../screens/Main/AppointmentDetail";
import SearchScreen from "../screens/Main/SearchScreen";
import TrainerDetailScreen from "../screens/Main/TrainerDetailScreen";

const switchNavigator = createAnimatedSwitchNavigator(
  {
    Welcome: WelcomeScreen,
    OTP: OTPScreen,
    OTPReceived: OTPReceivedScreen,
    loginFlow: createStackNavigator({
      Signup: SignUpScreen,
      Signin: SigninScreen,
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
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-left"
          durationMs={500}
          interpolation="linear"
        />
        <Transition.In type="scale" durationMs={700} />
      </Transition.Together>
    ),
  }
);

const AppNavigator = createAppContainer(switchNavigator);

export default AppNavigator;

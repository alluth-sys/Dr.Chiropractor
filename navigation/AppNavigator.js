import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

//Auth Flow
import WelcomeScreen from "../screens/Auth/WelcomeScreen";
import SigninScreen from "../screens/Auth/SigninScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import OTPScreen from "../screens/Auth/OTPScreen";

//Main Flow
import Account from "../screens/Main/Account";
import HomeScreen from "../screens/Main/HomeScreen";
import Appointment from "../screens/Main/AppointmentScreen";
import AppointmentDetail from "../screens/Main/AppointmentDetail";
import SearchScreen from "../screens/Main/SearchScreen";
import TrainerDetailScreen from "../screens/Main/TrainerDetailScreen";

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

const AppNavigator = createAppContainer(switchNavigator);

export default AppNavigator;

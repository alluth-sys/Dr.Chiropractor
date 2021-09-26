import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Main Flow
import HomeScreen, {
  screenOptions as HomeScreenOptions,
} from "../screens/Main/HomeScreen";
import SearchScreen, {
  screenOptions as SearchScreenOptions,
} from "../screens/Main/SearchScreen";
import AppointmentScreen, {
  screenOptions as AppointmentScreenOptions,
} from "../screens/Main/AppointmentScreen";
import AppointmentDetail, {
  screenOptions as AppointmentDetailOptions,
} from "../screens/Main/AppointmentDetail";
import TrainerDetailScreen, {
  screenOptions as TrainerDetailScreenOptions,
} from "../screens/Main/TrainerDetailScreen";
import ServiceDetailScreen, {
  screenOptions as ServiceDetailScreenOptions,
} from "../screens/Main/ServiceDetailScreen";
import Account, {
  screenOptions as AccountScreenOptions,
} from "../screens/Main/Account";

const MainStackNavigator = createStackNavigator();

export const HomeScreenNavigator = () => {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={HomeScreenOptions}
      />
      <MainStackNavigator.Screen
        name="TrainerDetail"
        component={TrainerDetailScreen}
        options={TrainerDetailScreenOptions}
      />
      <MainStackNavigator.Screen
        name="ServiceDetail"
        component={ServiceDetailScreen}
        options={ServiceDetailScreenOptions}
      />
    </MainStackNavigator.Navigator>
  );
};

export const SearchScreenNavigator = () => {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen
        name="Search Screen"
        component={SearchScreen}
        options={SearchScreenOptions}
      />
      <MainStackNavigator.Screen
        name="Trainer Detail"
        component={TrainerDetailScreen}
        options={TrainerDetailScreenOptions}
      />
    </MainStackNavigator.Navigator>
  );
};

export const AppointmentScreenNavigator = () => {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen
        name="Appointment Screen"
        component={AppointmentScreen}
        options={AppointmentScreenOptions}
      />
      <MainStackNavigator.Screen
        name="Appointment Detail"
        component={AppointmentDetail}
        options={AppointmentDetailOptions}
      />
    </MainStackNavigator.Navigator>
  );
};

export const AccountScreenNavigator = () => {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen
        name="Account"
        component={Account}
        options={AccountScreenOptions}
      />
    </MainStackNavigator.Navigator>
  );
};

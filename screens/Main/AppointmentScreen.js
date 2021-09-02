import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import SafeAreaView from "react-native-safe-area-view";

const AppointmentScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>AppointmentScreen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const screenOptions = () => {
  return {
    title: "Appointment",
    headerTitleAlign: "center",
    headerTitleStyle: { fontFamily: "rufina_bold" },
  };
};

export default AppointmentScreen;

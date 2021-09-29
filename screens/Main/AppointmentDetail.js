import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import SafeAreaView from "react-native-safe-area-view";

const AppointmentDetail = (props) => {
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    setAppointment(props.route.params);
  }, [props.route.params]);

  if (appointment) {
    return (
      <SafeAreaView>
        <View>
          <Text>#ID:{appointment.id}</Text>
        </View>
      </SafeAreaView>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({});

export const screenOptions = () => {
  return {
    title: "Detail",
    headerTitleAlign: "center",
    headerTitleStyle: { fontFamily: "rufina_bold" },
  };
};

export default AppointmentDetail;

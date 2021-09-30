import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import SafeAreaView from "react-native-safe-area-view";
import { APPOINTMENTS } from "../../data/dummyAppointmentData";
import { ListItem, Avatar } from "react-native-elements";

const AppointmentScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {APPOINTMENTS.map((appoinment, index) => (
          <ListItem
            key={index}
            bottomDivider
            onPress={() =>
              props.navigation.navigate("AppointmentDetail", appoinment)
            }
            animation={{ type: "timing", duration: 350 }}
          >
            <Avatar
              source={{ uri: appoinment.imageUrl }}
              avatarStyle={{ borderRadius: 50 }}
              size={70}
            />
            <ListItem.Content>
              <ListItem.Title style={{ fontFamily: "rufina_bold" }}>
                {appoinment.doctor}
              </ListItem.Title>
              <ListItem.Subtitle style={styles.textStyle}>
                NTD {appoinment.price}
              </ListItem.Subtitle>
              <View style={{ flexDirection: "row" }}>
                <ListItem.Subtitle
                  style={{ ...styles.textStyle, marginRight: 10 }}
                >
                  {appoinment.date}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={styles.textStyle}>
                  {appoinment.isFinished}
                </ListItem.Subtitle>
              </View>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontFamily: "rufina_regular",
  },
});

export const screenOptions = () => {
  return {
    title: "Appointments",
    headerTitleAlign: "center",
    headerTitleStyle: { fontFamily: "rufina_bold" },
  };
};

export default AppointmentScreen;

import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "react-native-elements";

const WelcomeScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar StatusBarStyle="white" />
      <View>
        <Text style={styles.text}>Chiropractor</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Get Started"
          buttonStyle={styles.buttonStyle}
          titleStyle={{ fontFamily: "opensans_bold" }}
          onPress={() => props.navigation.navigate("OTP")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    fontFamily: "rufina_bold",
    fontSize: RFValue(35),
  },
  buttonText: {
    fontFamily: "opensans_bold",
    fontSize: RFValue(15),
    color: "white",
  },
  buttonContainer: {
    height: "100%",
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonStyle: {
    backgroundColor: "#007AFE",
    borderRadius: 50,
    marginBottom: 100,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export const screenOptions = () => {
  return {
    headerShown: false,
  };
};

export default WelcomeScreen;

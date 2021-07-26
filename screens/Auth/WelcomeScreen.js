import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import SafeAreaView from "react-native-safe-area-view";
import { RFValue } from "react-native-responsive-fontsize";

const WelcomeScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar StatusBarStyle="white" />
      <View>
        <Text style={styles.text}>Chiropractor</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            props.navigation.navigate("Signup");
          }}
        >
          <Text style={styles.buttonText}>Sign up / Log in</Text>
        </TouchableOpacity>
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
    marginBottom: 40,
    paddingVertical: "4%",
    paddingHorizontal: "28%",
  },
});

WelcomeScreen.navigationOptions = () => {};

export default WelcomeScreen;

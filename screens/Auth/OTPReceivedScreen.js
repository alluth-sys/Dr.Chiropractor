import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { Button } from "react-native-elements";
import Spacer from "../../components/Spacer";

const OTPReceivedScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const onChangePhoneNumberHandler = (inputText) => {
    if (inputText === "") {
      //Check the Phone Number is empty or not
      setPhoneNumber("");
    } else {
      setPhoneNumber(inputText);
      const PhoneNumber = parseInt(inputText);
      //check the validity of the Phone Number
      //if Valid send data to backend
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "android" ? "padding" : "height"}
      >
        <SafeAreaView>
          <View>
            <Text style={{ fontFamily: "opensans_bold" }}>
              Input the verfication code sent to you
            </Text>
            <Spacer />

            <TextInput
              style={styles.inputStyle}
              keyboardType="phone-pad"
              maxLength={6}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />

            <Spacer />
            <Button
              title="Confirm"
              titleStyle={{ fontFamily: "opensans_bold" }}
              buttonStyle={{
                backgroundColor: "#007AFE",
                borderRadius: 10,
                width: 200,
                alignSelf: "center",
              }}
              onPress={() => navigation.navigate("Signup")}
            />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 5,
    width: 200,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    alignSelf: "center",
  },
  inputStyle: {
    height: 40,
    width: 100,
    fontFamily: "opensans_bold",
    textAlign: "center",
    padding: 5,
    width: 200,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    alignSelf: "center",
    alignContent: "space-between",
  },
});

export const screenOptions = () => {
  return {
    headerShown: false,
  };
};

export default OTPReceivedScreen;

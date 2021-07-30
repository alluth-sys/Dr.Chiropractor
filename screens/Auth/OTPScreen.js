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

const OTPScreen = ({ navigation }) => {
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
              Input your phone number to verify
            </Text>
            <Spacer />
            <View style={styles.inputContainer}>
              <View style={{ height: 40, justifyContent: "center" }}>
                <Text style={{ fontFamily: "opensans_bold" }}>{"+886 | "}</Text>
              </View>

              <TextInput
                style={styles.inputStyle}
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>

            <Spacer />
            <Button
              title="Verify"
              titleStyle={{ fontFamily: "opensans_bold" }}
              buttonStyle={{ backgroundColor: "#007AFE", borderRadius: 10 }}
              onPress={() => navigation.navigate("OTPReceived")}
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
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
  },
  inputStyle: {
    height: 40,
    width: 100,
  },
});

export const screenOptions = () => {
  return {
    headerShown: false,
  };
};

export default OTPScreen;

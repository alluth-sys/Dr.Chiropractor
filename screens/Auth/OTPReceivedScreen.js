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
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase";

const OTPReceivedScreen = ({ navigation }) => {
  const [code, setCode] = useState("");
  const recaptchaVerifier = useRef(null);
  const confirmCode = () => {};

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
          <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebase.app().options}
          />
          <View>
            <Text style={{ fontFamily: "opensans_bold" }}>
              Input the verfication code sent to you
            </Text>
            <Spacer />

            <TextInput
              style={styles.inputStyle}
              keyboardType="number-pad"
              maxLength={6}
              value={code}
              onChangeText={setCode}
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
              onPress={() => {
                confirmCode();
                navigation.navigate("Signup");
              }}
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

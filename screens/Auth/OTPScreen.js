import React, { useState, useRef } from "react";
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

const OTPScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [code, setCode] = useState("");
  const recaptchaVerifier = useRef(null);

  const sendVerification = async () => {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider
        .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
        .then(setVerificationId);
    } catch (err) {
      console.log(err);
    }
  };

  const confirmCode = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
      );
      await firebase.auth().signInWithCredential(credential);
      navigation.navigate("Signup");
    } catch (err) {
      console.log(err);
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
            <FirebaseRecaptchaVerifierModal
              ref={recaptchaVerifier}
              firebaseConfig={firebase.app().options}
              attemptInvisibleVerification={true}
            />
            <Text style={{ fontFamily: "opensans_bold" }}>Phone Number:</Text>
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
              title="Send Verification"
              titleStyle={{ fontFamily: "opensans_bold" }}
              buttonStyle={{ backgroundColor: "#007AFE", borderRadius: 10 }}
              onPress={sendVerification}
            />
            <Spacer />
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontFamily: "opensans_bold" }}>
                Enter Code sent by SMS:
              </Text>
              <TextInput
                style={styles.inputCodeStyle}
                keyboardType="number-pad"
                maxLength={6}
                value={code}
                onChangeText={setCode}
              />
            </View>

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
              onPress={confirmCode}
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
    paddingLeft: 5,
    borderWidth: 2,
    borderRadius: 10,
    width: 300,
    backgroundColor: "#F5F5F5",
  },
  inputStyle: {
    height: 40,
    width: 300,
  },
  inputCodeStyle: {
    height: 40,
    width: 200,
    padding: 5,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    textAlign: "center",
  },
});

export const screenOptions = () => {
  return {
    headerShown: false,
  };
};

export default OTPScreen;

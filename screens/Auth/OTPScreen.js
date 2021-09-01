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
  Alert,
  ActivityIndicator,
  SafeAreaView
} from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../../components/Spacer";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase";

const OTPScreen = ({ navigation }) => {
  let [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [code, setCode] = useState("");
  const recaptchaVerifier = useRef(null);
  const [phoneButtonEnable, setPhoneButtonEnable] = useState(true);
  const [confirmButtonEnable, setConfirmButtonEnable] = useState(true);
  const codeFieldRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const codeHandler = (code) => {
    if (code.length == 6) {
      setConfirmButtonEnable(false);
    } else {
      setConfirmButtonEnable(true);
    }
    setCode(code);
  };

  const phoneNumberHandler = (phoneNumber) => {
    if (phoneNumber.length == 10) {
      setPhoneButtonEnable(false);
    } else {
      setPhoneButtonEnable(true);
    }
    setPhoneNumber(phoneNumber);
  };

  const phoneAlert = () => {
    Alert.alert("Error", "Please check again your phone number", [
      { text: "Confirm", onPress: () => null },
    ]);
  };

  const codeAlert = () => {
    Alert.alert("Error", "Please enter the correct verfication code", [
      { text: "Confirm", onPress: () => null },
    ]);
  };

  const sendVerification = async () => {
    if (phoneNumber[0] === "0") {
      phoneNumber = "+886" + phoneNumber.substring(1);
      //console.log(phoneNumber);
    } else if (phoneNumber[0] !== "0") {
      phoneNumber = "+886" + phoneNumber;
      //console.log(phoneNumber);
    }
    Keyboard.dismiss();
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
    } catch (err) {
      phoneAlert();
    }
  };

  const confirmCode = async () => {
    setIsLoading(true);
    Keyboard.dismiss();
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        code
      );
      await firebase.auth().signInWithCredential(credential);
      navigation.navigate("Signup");
    } catch (err) {
      setIsLoading(false);
      codeAlert();
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
        behavior={Platform.OS === "android" ? "height" : "height"}
      >
        <SafeAreaView>
          <View>
            <FirebaseRecaptchaVerifierModal
              ref={recaptchaVerifier}
              firebaseConfig={firebase.app().options}
              attemptInvisibleVerification={true}
            />
            <View style={styles.card}>
              {/* Phone Verification */}

              <Text style={{ fontFamily: "opensans_regular", marginBottom: 5 }}>
                Phone Number:
              </Text>
              <TextInput
                style={styles.inputStyle}
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={phoneNumberHandler}
                placeholder="Ex: 0926745987"
                maxLength={13}
                blurOnSubmit={false}
              />

              <Spacer />
              <Button
                title="Send Verification"
                titleStyle={{ fontFamily: "opensans_bold" }}
                buttonStyle={{
                  backgroundColor: "#007AFE",
                  borderRadius: 10,
                  width: 200,
                }}
                onPress={sendVerification}
                disabled={phoneButtonEnable}
              />
              <Spacer />

              <View
                style={{
                  borderBottomColor: "#A9A9A9",
                  borderBottomWidth: 1,
                }}
              />
              <Spacer />
              {/* Code Verification */}

              <Text style={{ fontFamily: "opensans_regular", marginBottom: 5 }}>
                Enter Code sent by SMS:
              </Text>
              <TextInput
                ref={codeFieldRef}
                style={styles.inputCodeStyle}
                keyboardType="number-pad"
                maxLength={6}
                value={code}
                onChangeText={codeHandler}
                blurOnSubmit={false}
              />
              <Spacer />
              <View>
                {isLoading ? (
                  <ActivityIndicator size="large" color={"#007AFE"} />
                ) : (
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
                    disabled={confirmButtonEnable}
                  />
                )}
              </View>
            </View>
            <View style={styles.textStyle}>
              <Text
                style={{ fontFamily: "opensans_bold", color: "#007AFE" }}
                onPress={() => navigation.navigate("Signin")}
              >
                {"Sign in Using Email and Password"}
              </Text>
            </View>
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
  card: {
    borderWidth: 2,
    borderColor: "#A9A9A9",
    padding: 40,
    borderRadius: 10,
    shadowColor: "#7F5DF0",
    elevation: 2,
  },
  inputContainer: {
    paddingLeft: 5,
    borderWidth: 2,
    borderRadius: 10,
    width: 200,
    backgroundColor: "#F5F5F5",
  },
  inputStyle: {
    height: 40,
    width: 200,
    padding: 5,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    textAlign: "center",
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
  textStyle: {
    paddingTop: 20,
    alignItems: "center",
  },
});

export const screenOptions = () => {
  return {
    headerShown: false,
  };
};

export default OTPScreen;

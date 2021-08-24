import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../../components/Spacer";
import DefaultInput from "../../components/DefaultInput";
import firebase from "firebase";

const SignUpScreen = ({ navigation }) => {
  //console.log(navigation);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            username,
            email,
          });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //For validating User Input
  const emailInputHandler = (inputText) => {
    if (inputText === "") {
      //Input Check
      setEmail("");
    } else {
      setEmail(inputText);
    }
  };
  const passwordInputHandler = (inputText) => {
    if (inputText === "") {
      //Input Check
      setPassword("");
    } else {
      setPassword(inputText);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <View style={styles.inner}>
          <View style={styles.card}>
            <DefaultInput
              iconType="mail"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={emailInputHandler}
              value={email}
            />
            <Spacer />
            <View>
              <DefaultInput
                iconType="lock"
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={passwordInputHandler}
                value={password}
              />
            </View>

            <Spacer />
            <Button
              title="Sign Up"
              onPress={onSignUp}
              titleStyle={{ fontFamily: "opensans_bold" }}
              buttonStyle={{
                backgroundColor: "#007AFE",
              }}
            />
            <Spacer />
            <Text
              onPress={() => navigation.navigate("Signin")}
              style={{ fontFamily: "opensans_regular" }}
            >
              Already have an account? Sign in here
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    padding: 30,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    flex: 1,
    paddingBottom: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const screenOptions = () => {
  return {
    headerTitle: "Sign Up",
    headerLeft: () => null,
  };
};

export default SignUpScreen;

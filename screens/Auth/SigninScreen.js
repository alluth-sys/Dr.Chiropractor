import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../../components/Spacer";
import DefaultInput from "../../components/DefaultInput";
import firebase from "firebase";

const SignUpScreen = ({ navigation }) => {
  //console.log(navigation);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
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
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "android" ? "padding" : "height"}
      >
        <View style={styles.inner}>
          <Text style={{ fontFamily: "opensans_bold" }}>
            Enter your email and password to Sign In!
          </Text>
          <Spacer />
          <DefaultInput
            label="Email"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={emailInputHandler}
            value={email}
          />
          <Spacer />
          <View>
            <DefaultInput
              label="Password"
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
            title="Sign In"
            onPress={() => {
              //onSignIn();
            }}
            titleStyle={{ fontFamily: "opensans_bold" }}
            buttonStyle={{
              backgroundColor: "#007AFE",
              borderRadius: 50,
              width: 100,
            }}
          />
          <Spacer />
          <Text
            onPress={() => navigation.navigate("Signup")}
            style={{ fontFamily: "opensans_regular" }}
          >
            Don't have an account? Sign Up here
          </Text>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    headerTitle: "Sign In",
  };
};

export default SignUpScreen;

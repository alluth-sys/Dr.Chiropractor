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
          <Text style={{ fontFamily: "opensans_bold" }}>
            Your phone have been confirmed{"\n"}Let us know more about you!
          </Text>
          <Spacer />
          <DefaultInput
            label="Email"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={emailInputHandler}
            value={email}
            //autoCompleteType="email"
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
            title="Sign Up"
            onPress={onSignUp}
            titleStyle={{ fontFamily: "opensans_bold" }}
            buttonStyle={{ backgroundColor: "#007AFE", borderRadius: 50 }}
          />
          <Spacer />
          <Text
            onPress={() => navigation.navigate("Signin")}
            style={{ fontFamily: "opensans_regular" }}
          >
            Already have an account? Sign in here
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
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    marginBottom: "45%",
    paddingBottom: 10,
  },
});

SignUpScreen.navigationOptions = () => {
  return {
    title: "Sign Up",
    headerTitleStyle: {
      fontFamily: "opensans_bold",
    },
  };
};

export default SignUpScreen;

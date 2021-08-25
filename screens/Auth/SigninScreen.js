import React, { useState, useContext } from "react";
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
import SocialButton from "../../components/SocialButton";

import firebase from "firebase";
import { AuthContext } from "../../provider/AuthProvider";

const SignUpScreen = ({ navigation }) => {
  //console.log(navigation);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

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
        <View style={styles.inner}>
          <View style={styles.card}>
            <DefaultInput
              iconType="mail"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={setEmail}
              value={email}
              autoFocus={true}
              blurOnSubmit={false}
              autoCompleteType="email"
            />
            <Spacer />
            <DefaultInput
              iconType="lock"
              placeholder="Password"
              onChangeText={setPassword}
              value={password}
              autoCorrect={false}
              secureTextEntry={true}
              blurOnSubmit={false}
            />

            <Spacer />
            <Button
              title="Sign In"
              onPress={() => {
                login(email, password);
              }}
              titleStyle={{ fontFamily: "opensans_bold" }}
              buttonStyle={{
                backgroundColor: "#007AFE",
              }}
            />
            <View style={{ alignItems: "center" }}>
              <Text
                onPress={() => null}
                style={{
                  fontFamily: "opensans_bold",
                  color: "#2e64e5",
                  marginTop: 10,
                }}
              >
                Forgot Password?
              </Text>
            </View>
          </View>
          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => null}
          />
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => null}
          />
          <Spacer />
          <Text
            onPress={() => navigation.navigate("Signup")}
            style={{ fontFamily: "opensans_bold", color: "#2e64e5" }}
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
  card: {
    width: "80%",
    padding: 30,
    //borderRadius: 5,
  },
});

export const screenOptions = () => {
  return {
    headerTitle: "Sign In",
    headerLeft: () => null,
  };
};

export default SignUpScreen;

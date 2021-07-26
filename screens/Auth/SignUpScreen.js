import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { Button } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import SafeAreaView from "react-native-safe-area-view";
import Spacer from "../../components/Spacer";

const SignUpScreen = ({ navigation }) => {
  //console.log(navigation);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Text style={styles.textStyle}>
          Your phone have been confirmed{"\n"}Let us know more about you
        </Text>
        <Spacer />
        <View>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            autoCorrect={false}
          />
        </View>
        <Spacer />
        <View>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>

        <Spacer />
        <Button title="Sign Up" />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "opensans_bold",
  },
  input: {
    height: 50,
    width: 300,
    padding: 5,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
  },
  label: {
    marginBottom: 10,
    fontSize: 15,
    fontFamily: "opensans_bold",
  },
});

SignUpScreen.navigationOptions = () => {
  return {
    title: "Sign Up",
    headerLeft: () => null,
  };
};

export default SignUpScreen;

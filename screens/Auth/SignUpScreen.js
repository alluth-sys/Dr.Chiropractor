import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../../components/Spacer";
import DefaultInput from "../../components/DefaultInput";
import firebase from "firebase";
import { AuthContext } from "../../provider/AuthProvider";
import SocialButton from "../../components/SocialButton";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useContext(AuthContext);

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
              onChangeText={setEmail}
              value={email}
            />
            <Spacer />

            <DefaultInput
              iconType="lock"
              placeholder="Password"
              onChangeText={setPassword}
              value={password}
              autoCorrect={false}
              secureTextEntry={true}
            />

            <View style={styles.textPrivate}>
              <Text style={styles.color_textPrivate}>
                By registering, you confirm that you accept our{" "}
              </Text>
              <TouchableOpacity onPress={() => alert("Terms Clicked!")}>
                <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
                  Terms of service
                </Text>
              </TouchableOpacity>
              <Text style={styles.color_textPrivate}> and </Text>
              <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
                Privacy Policy
              </Text>
            </View>

            <View>
              {isLoading ? (
                <ActivityIndicator size="large" color={"#007AFE"} />
              ) : (
                <Button
                  title="Sign Up"
                  onPress={() => {
                    try {
                      setIsLoading(true);
                      register(email, password);
                    } catch {
                      setIsLoading(false);
                    }
                  }}
                  titleStyle={{ fontFamily: "opensans_bold" }}
                  buttonStyle={{
                    backgroundColor: "#007AFE",
                  }}
                />
              )}
            </View>
          </View>
          <SocialButton
            buttonTitle="Sign Up with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => null}
          />
          <SocialButton
            buttonTitle="Sign Up with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => null}
          />
          <Spacer />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    //borderWidth: 2,
    marginTop: 120,
    padding: 30,
    borderRadius: 5,
    width: "90%",
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
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 35,
    justifyContent: "center",
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: "400",
    fontFamily: "opensans_regular",
    color: "grey",
  },
});

export const screenOptions = () => {
  return {
    headerTitle: "Sign Up",
    headerLeft: () => null,
  };
};

export default SignUpScreen;

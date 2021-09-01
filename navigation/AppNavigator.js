import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, StyleSheet } from "react-native";

import { AuthNavigator } from "./AuthStackNavigator";
import { MainNavigator } from "./MainTabNavigator";

import { AuthContext } from "../provider/AuthProvider";
import firebase from "firebase";
import "@firebase/auth";
import { View } from "react-native";

const AppNavigator = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing)
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <NavigationContainer>
      {<AuthNavigator />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppNavigator;

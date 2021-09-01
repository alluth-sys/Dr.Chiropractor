import React, { createContext, useState } from "react";
import firebase from "firebase";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const storeData = async (value) => {
    try {
      const userData = JSON.stringify(value);
      await AsyncStorage.setItem("userData", userData);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async (data) => {
    try {
      const jsonValue = await AsyncStorage.getItem(data);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            const response = await firebase
              .auth()
              .signInWithEmailAndPassword(email, password);

            console.log(await response.user);
            if (response) {
              //storeData(response.user);
              //getData("userData");
            }
          } catch (e) {
            setIsLoading(false);
            Alert.alert("Error", "No user found", [
              { text: "Confirm", onPress: () => null },
            ]);
          }
        },
        register: async (email, password) => {
          try {
            const response = await firebase
              .auth()
              .createUserWithEmailAndPassword(email, password);
            console.log(response);
          } catch (error) {
            setIsLoading(false);
            Alert.alert(
              "Error",
              "The email address is already in use by another account.",
              [{ text: "Confirm", onPress: () => null }]
            );
            console.log(error);
          }
        },
        logout: async () => {
          try {
            await firebase.auth().signOut();
          } catch (error) {
            console.log(error);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};



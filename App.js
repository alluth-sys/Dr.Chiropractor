import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./navigation/AppNavigator";

import firebase from "firebase";

//firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZkvSaynnAFJT88VxR2sDYZUCGhFDR2Ok",
  authDomain: "massage-app-70e85.firebaseapp.com",
  projectId: "massage-app-70e85",
  storageBucket: "massage-app-70e85.appspot.com",
  messagingSenderId: "128399159185",
  appId: "1:128399159185:web:6ec4fea917a7213a4e7430",
  measurementId: "G-71XD0V2NLX",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

//load font from ./assets/fonts
const getFonts = () => {
  return Font.loadAsync({
    rufina_regular: require("./assets/fonts/Rufina-Regular.ttf"),
    rufina_bold: require("./assets/fonts/Rufina-Bold.ttf"),
    opensans_regular: require("./assets/fonts/OpenSans-Regular.ttf"),
    opensans_bold: require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  [fontsLoaded, setFontsLoaded] = useState(false); //set initial load font state as false
  [userIsLoaded, setUserIsLoaded] = useState(false);
  [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setUserIsLoggedIn(false);
        setUserIsLoaded(true);
      } else {
        setUserIsLoggedIn(true);
        setUserIsLoaded(true);
      }
    });
  }, []);

  if (!fontsLoaded) {
    return (
      <>
        <AppLoading
          startAsync={getFonts}
          onFinish={() => {
            setFontsLoaded(true);
          }}
          onError={console.warn}
        />
      </>
    );
  } else {
    return (
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    );
  }
}

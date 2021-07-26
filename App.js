import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./navigation/AppNavigator";

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

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  } else {
    return (
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    );
  }
}

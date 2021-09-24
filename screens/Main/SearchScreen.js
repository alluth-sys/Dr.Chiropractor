import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { SearchBar } from "react-native-elements";

const SearchScreen = (props) => {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ bottom: "never" }}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "android" ? "height" : "height"}
        >
          {/* {Platform.OS === "ios" ? (
            <StatusBar barStyle={"dark-content"} />
          ) : null} */}
          <View style={styles.searchBarContainer}>
            <SearchBar
              placeholder="Type here"
              onChangeText={setSearch}
              value={search}
              platform={Platform.OS === "ios" ? "ios" : "android"}
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  searchBarContainer: {
    flex: 1,
    width: "80%",
    borderRadius: 5,
  },
});

export const screenOptions = () => {
  return {
    title: "Search",
    headerTitleAlign: "center",
    headerTitleStyle: { fontFamily: "rufina_bold" },
  };
};

export default SearchScreen;

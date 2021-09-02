import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import SafeAreaView from "react-native-safe-area-view";
import { AuthContext } from "../../provider/AuthProvider";

const HomeScreen = (props) => {
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>HomeScreen</Text>
        <TouchableOpacity onPress={logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const screenOptions = () => {
  return {
    title: "Home",
    headerTitleAlign: "center",
    headerTitleStyle: { fontFamily: "rufina_bold" },
  };
};

export default HomeScreen;

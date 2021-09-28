import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import SafeAreaView from "react-native-safe-area-view";
import { AuthContext } from "../../provider/AuthProvider";

const Account = (props) => {
  const { user } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{AuthContext.user}</Text>
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
    title: "Account",
    headerTitleAlign: "center",
    headerTitleStyle: { fontFamily: "rufina_bold" },
  };
};

export default Account;

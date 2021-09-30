import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import SafeAreaView from "react-native-safe-area-view";
import { AuthContext } from "../../provider/AuthProvider";
import { Button } from "react-native-elements";

const Account = (props) => {
  const { logout } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoStyle}>
        <Image source={require("../../assets/user/user.png")} style={styles.imageStyle} />
        <View>
          <Text style={{ ...styles.textStyle, marginLeft: 20, }}>Firstname Lastname</Text>
          <Text style={{ ...styles.textStyle, marginLeft: 20, color: "#007AFE" }}>View Account</Text>
        </View>
      </View>
      <TouchableOpacity style={{ ...styles.pageContainer, borderTopWidth: 1, }}>
        <Text style={styles.textStyle}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.pageContainer}>
        <Text style={styles.textStyle}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.pageContainer}>
        <Text style={styles.textStyle}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.pageContainer}>
        <Text style={styles.textStyle}>Are you a Certified Chiropractor?</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <Button
          title="Logout"
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.textStyle}
          onPress={logout}
        />

      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  buttonStyle: {
    backgroundColor: "#007AFE",
    borderRadius: 15,
    width: 100,
  },
  buttonContainer: {
    flex: 1,
    position: "absolute",
    alignSelf: "center",
    bottom: 350,

  },
  imageStyle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#A9A9A9"
  },
  userInfoStyle: {
    padding: 25,
    flexDirection: "row",
    alignItems: "center"
  },
  textStyle: {
    fontFamily: "rufina_regular"
  },
  pageContainer: {
    padding: 20,
    borderColor: "#C0C0C0",
    borderBottomWidth: 1,
  }
});

export const screenOptions = () => {
  return {
    title: "Account",
    headerTitleAlign: "center",
    headerTitleStyle: { fontFamily: "rufina_bold" },
  };
};

export default Account;
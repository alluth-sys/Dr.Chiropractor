import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const DefaultInput = (props) => {
  const { label } = props;
  const { iconType } = props;

  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <Feather name={iconType} size={24} color="#666" />
      </View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={{ ...styles.input, ...props.style }} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderWidth: 2,
  },
  iconStyle: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 2,
    borderRightColor: "#ccc",
  },
  input: {
    padding: 5,
    flex: 1,
  },
  label: {
    marginBottom: 10,
    fontSize: 15,
    fontFamily: "opensans_bold",
  },
});

export default DefaultInput;

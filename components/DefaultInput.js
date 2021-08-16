import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const DefaultInput = (props) => {
  const { label } = props;

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={{ ...styles.input, ...props.style }} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,
    padding: 5,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
  },
  label: {
    marginBottom: 10,
    fontSize: 15,
    fontFamily: "opensans_bold",
  },
});

export default DefaultInput;

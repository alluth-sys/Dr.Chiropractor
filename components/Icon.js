import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

const Icon = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image source={props.imageUrl} style={styles.imageStyle} />
        <Text style={styles.textStyle}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 20,
    width: 100,
    height: 100,
    marginTop: 10,
    marginLeft: 20,
    backgroundColor: "#ffffff",
    shadowColor: "#A9A9A9",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  imageStyle: {
    height: 100,
    width: 100,
  },
  textStyle: {
    marginTop: 10,
    fontFamily: "opensans_regular",
  },
});

export default Icon;

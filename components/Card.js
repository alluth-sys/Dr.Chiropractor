import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { DOCTORS } from "../data/dummyDoctorData";
import { AntDesign } from "@expo/vector-icons";

const Card = (props) => {
  const { doctor } = props;
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        source={{ uri: doctor.imageUrl }}
        style={styles.imageStyle}
      >
        <View style={styles.textContainer}>
          <Text style={styles.nameStyle}>Dr {doctor.name}</Text>
          <Text style={styles.textStyle}>{doctor.trainerType}</Text>
          <View style={styles.ratingStyle}>
            <AntDesign name="staro" size={18} color="rgba(255, 214, 0, 1)" />
            <Text style={{ ...styles.textStyle, marginLeft: 10 }}>
              {doctor.rating}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    //borderWidth: 2,
    borderRadius: 10,
    height: 270,
    width: 270,
    marginLeft: 10,
    marginTop: 10,
    overflow: "hidden",
    resizeMode: "contain",
  },
  imageStyle: {
    height: 270,
    width: 270,
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    backgroundColor: "rgba(0, 122, 254, 0.6)",
    width: "100%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  nameStyle: {
    color: "#ffffff",
    fontFamily: "opensans_bold",
  },
  textStyle: {
    color: "#ffffff",
    fontFamily: "opensans_regular",
  },
  ratingStyle: {
    flexDirection: "row",
  },
});

export default Card;

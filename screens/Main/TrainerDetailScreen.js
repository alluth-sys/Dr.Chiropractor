import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { StatusBar } from "expo-status-bar";
import SafeAreaView from "react-native-safe-area-view";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { SmallSpacer, Spacer } from "../../components/Spacer";

const TrainerDetailScreen = (props) => {
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    setDoctor(props.route.params);
  }, [props.route.params]);

  useEffect(() => {
    const parent = props.navigation.dangerouslyGetParent();
    parent.setOptions({
      tabBarVisible: false,
      bottom: 0,
    });

    return () =>
      parent.setOptions({
        tabBarVisible: true,
        bottom: 25,
      });
  }, []);

  if (doctor) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cardStyle}>
            <Image
              source={{ uri: doctor.imageUrl }}
              style={styles.imageStyle}
            />
            <Text style={{ ...styles.textStyle, marginTop: 10 }}>
              Dr.{doctor.name}
            </Text>
            <SmallSpacer />
            <View style={styles.ratingStyle}>
              <AntDesign name="star" size={18} color="rgba(255, 214, 0, 1)" />
              <Text style={{ fontFamily: "rufina_regular", marginLeft: 10 }}>
                {doctor.rating}
              </Text>
              <Text
                style={{
                  marginLeft: 15,
                  fontFamily: "rufina_regular",
                  color: "rgba(0, 122, 254, 1)",
                }}
              >
                see reviews
              </Text>
            </View>
            <SmallSpacer />
            <Text style={{ fontFamily: "rufina_regular" }}>
              {doctor.trainerType}
            </Text>
            <SmallSpacer />
            <Text style={{ fontFamily: "rufina_regular", fontSize: 11 }}>
              {doctor.description}
            </Text>

            <View style={styles.buttonContainer}>
              <Button
                title="See Schedule"
                buttonStyle={{
                  backgroundColor: "#007AFE",
                  borderRadius: 15,
                  width: 100,
                }}
                titleStyle={{ fontFamily: "opensans_bold", fontSize: 11 }}
              />
            </View>
          </View>
          <View style={styles.cardStyle}>
            <Text style={styles.textStyle}>Certifications</Text>
          </View>
          <View style={styles.cardStyle}>
            <Text style={styles.textStyle}>Location</Text>
            <SmallSpacer />
            <MapView
              style={{
                height: 150,
                width: "100%",
              }}
              initialRegion={{
                latitude: 25.05974430133827,
                longitude: 121.48544555421637,
                latitudeDelta: 0.02,
                longitudeDelta: 0.01,
              }}
              scrollEnabled={false}
            >
              <Marker
                coordinate={{
                  latitude: 25.05974430133827,
                  longitude: 121.48544555421637,
                }}
              />
            </MapView>
          </View>
          <Spacer />
          <View style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Button
              title="Book"
              buttonStyle={{
                backgroundColor: "#007AFE",
                borderRadius: 100,
                height: 50,
              }}
              titleStyle={{ fontFamily: "opensans_bold" }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return <ActivityIndicator size="large" />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardStyle: {
    margin: 20,
    marginBottom: 0,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 15,
  },
  imageStyle: {
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
    borderColor: "#007AFE",
    borderWidth: 3,
  },
  textStyle: {
    fontFamily: "rufina_regular",
  },
  ratingStyle: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    position: "absolute",
    marginLeft: 230,
    marginTop: 80,
  },
});

export const screenOptions = () => {
  return {
    title: "Booking",
    headerTitleAlign: "center",
    headerTitleStyle: { fontFamily: "rufina_bold" },
  };
};

export default TrainerDetailScreen;

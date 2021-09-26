import React from "react";
import { StyleSheet, View, Text, FlatList, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import SafeAreaView from "react-native-safe-area-view";
import { DOCTORS } from "../../data/dummyDoctorData";
import Card from "../../components/Card";

const HomeScreen = (props) => {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 0 }}
      forceInset={{ bottom: "never" }}
    >
      <View style={styles.container}>
        {Platform.OS === "ios" ? (
          <StatusBar barStyle={"dark-content"} translucent={true} />
        ) : null}
        <Text style={styles.textStyle}>Our Top Picks</Text>

        <FlatList
          data={DOCTORS}
          keyExtractor={(item) => item.name}
          horizontal
          style={{ flexGrow: 0 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <Card doctor={item} navigation={props.navigation} />;
          }}
        />
        <Text style={styles.textStyle}>Our Services</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  doctorList: {
    flex: 1,
  },
  textStyle: {
    marginLeft: 10,
    marginTop: 10,
    fontFamily: "opensans_bold",
    fontSize: 16,
    color: "#434343",
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

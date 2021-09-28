import React, { useContext, useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View, Text, TouchableOpacity , FlatList, Image, Platform} from "react-native";
import { StatusBar } from "expo-status-bar";
import SafeAreaView from "react-native-safe-area-view";
import { DOCTORS } from "../../data/dummyDoctorData";
import Card from "../../components/Card";

const HomeScreen = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getDoctor = async () => {
    try {
     const response = await fetch('http://192.168.2.133:8000/api/doctor/list');
     const json = await response.json();
     setData(json);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
  }
  useEffect(() => {
    getDoctor();
  }, []);

  const HandleRefresh = async() => {
    setLoading(true);
    getDoctor();
  };

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
        {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id.toString()}
          horizontal
          style={{ flexGrow: 0 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <Card doctor={item} navigation={props.navigation}
          onRefresh={HandleRefresh}
          refreshing={isLoading}
          />;
          }}
        />)}
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

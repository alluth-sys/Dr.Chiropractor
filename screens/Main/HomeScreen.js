import React, { useContext, useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View, Text, TouchableOpacity , FlatList, Image} from "react-native";
import { StatusBar } from "expo-status-bar";
import SafeAreaView from "react-native-safe-area-view";
import { AuthContext } from "../../provider/AuthProvider";

const HomeScreen = (props) => {
  const { logout } = useContext(AuthContext);
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
    <SafeAreaView style={styles.container}>
      <View>
        {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (
            <><Image source={{uri:item.imgurl}} /* Use item to set the image source */
              key={item.id} /* Important to set a key for list items,
                   but it's wrong to use indexes as keys, see below */

              style={{
                width: 200,
                height: 200,
                borderWidth: 2,
                borderColor: '#d35647',
                resizeMode: 'contain',
                margin: 8
              }} /><Text>{item.surname}, {item.name}</Text></>
          )}
          onRefresh={HandleRefresh}
          refreshing={isLoading}
        />
        )}
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

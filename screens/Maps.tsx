import React, { FunctionComponent, useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

interface WelcomeProps {
  navigation: any; // Type this properly with React Navigation types if available
}

const Waiting_Driver_Screen: FunctionComponent<WelcomeProps> = ({
  navigation,
}) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigateHome = () => {
    // Replace 'HomeScreen' with the name of your home screen in the navigation stack
    navigation.navigate("Home");
  };

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location.coords);

        setInitialRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        });
      } catch (error) {
        console.error("Error getting location", error);
      } finally {
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  return (
    <>
      <View style={styles.container}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          initialRegion && (
            <MapView style={styles.map} initialRegion={initialRegion}>
              {currentLocation && (
                <Marker
                  coordinate={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                  }}
                  title="Your Location"
                />
              )}
            </MapView>
          )
        )}
        {/* Additional UI components or logic can be added here */}
      </View>
      <TouchableOpacity style={styles.button} onPress={navigateHome}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
});

export default Waiting_Driver_Screen;

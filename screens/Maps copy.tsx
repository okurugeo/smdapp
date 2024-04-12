import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

const Waiting_Driver_Screen = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      try {
        // Replace this with logic to get the coordinates for the specific area name
        // For simplicity, I'm setting a static location for the "Area Name"
        const areaCoordinates = await Location.geocodeAsync("Area Name");

        if (areaCoordinates.length > 0) {
          setCurrentLocation({
            latitude: areaCoordinates[0].latitude,
            longitude: areaCoordinates[0].longitude,
          });

          setInitialRegion({
            latitude: areaCoordinates[0].latitude,
            longitude: areaCoordinates[0].longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          });
        } else {
          console.warn("Coordinates not found for the specified area name");
        }
      } catch (error) {
        console.error("Error getting location", error);
      } finally {
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  const navigateHome = () => {
    // Replace 'HomeScreen' with the name of your home screen in the navigation stack
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        initialRegion && (
          <>
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
            <TouchableOpacity style={styles.button} onPress={navigateHome}>
              <Text>Go to Home</Text>
            </TouchableOpacity>
          </>
        )
      )}
      {/* Additional UI components or logic can be added here */}
    </View>
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
    height: "80%", // Adjust the height based on your layout
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
});

export default Waiting_Driver_Screen;

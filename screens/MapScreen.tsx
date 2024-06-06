import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from "expo-location";
import RegularButton from "../components/Button";

interface MapsProps {
  navigation: any; // Update with the correct type for navigation
}

const MapsScreen: React.FC<MapsProps> = ({ navigation }) => {
  const [initialRegion, setInitialRegion] = useState<Region>({
    latitude: -34.397,
    longitude: 150.644,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [selectedLocation, setSelectedLocation] = useState<Region | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      setSelectedLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  const handleMapPress = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  const handleConfirmLocation = () => {
    if (selectedLocation) {
      console.log("Confirmed Location:", selectedLocation);
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={initialRegion}
        onPress={handleMapPress}
      >
        {/* Display the selected location marker */}
        {selectedLocation && <Marker coordinate={selectedLocation} />}
      </MapView>

      <RegularButton onPress={handleConfirmLocation}>
        Confirm Location
      </RegularButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapsScreen;

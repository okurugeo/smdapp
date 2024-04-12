import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Button } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import RegularButton from "../components/Button";

interface MapsProps {
  navigation: any; // Update with the correct type for navigation
}

const MapsScreen: React.FC<MapsProps> = ({ navigation }) => {
  const initialRegion = {
    latitude: -34.397,
    longitude: 150.644,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [selectedLocation, setSelectedLocation] = useState<Region | null>(null);

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

  const navigateToMapScreen = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onPress={handleMapPress}
      >
        {/* Display the selected location marker */}
        {selectedLocation && <Marker coordinate={selectedLocation} />}
      </MapView>

      <RegularButton onPress={navigateToMapScreen}>
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
  confirmButton: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
    position: "absolute",
    bottom: 20,
  },
  confirmButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MapsScreen;

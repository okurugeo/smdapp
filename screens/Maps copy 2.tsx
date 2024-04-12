import React, { FC, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MapView, { Region } from "react-native-maps";

interface AppProps {
  navigation: any;
}

const App: FC<AppProps> = ({ navigation }) => {
  const [currentRegion, setCurrentRegion] = useState<Region | undefined>(
    undefined
  );

  const setDefaultRegion = () => {
    setCurrentRegion({
      latitude: 24.4539,
      longitude: 54.3773,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  const pickCurrentLocation = () => {
    navigation.navigate("Home");
    // Implement the logic to get the user's current location and update the state
    // For example, you can use the Geolocation API or a third-party library
  };

  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        region={currentRegion}
        showsUserLocation={true}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={setDefaultRegion}>
          <Text>Set Abu Dhabi as Default Location</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={pickCurrentLocation}>
          <Text>Pick Current Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 16,
    left: 16,
    flexDirection: "row",
  },
  button: {
    marginRight: 8,
    padding: 8,
    backgroundColor: "lightblue",
    borderRadius: 8,
  },
});

export default App;

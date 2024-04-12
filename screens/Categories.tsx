// HomeScreen.tsx
import React, { useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { BottomNavigation } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { Row } from "../components/Shared";
import Ionicons from "react-native-vector-icons/Ionicons";
import Services from "./Home/Services/Services";
import CategoriesCards from "./Categories/CategoriesCards";
import Welcome from "./Welcome";
// import { ScrollView } from "react-native-gesture-handler";

// import { AdMobBanner } from 'react-native-admob-native-ads';

interface HomeScreenProps {
  navigation: any; // Update with the correct type for navigation
}

const CategoriesPage: React.FC<HomeScreenProps> = ({ navigation }) => {
  const screenHeight = Dimensions.get("window").height;
  return (
    <View>
      <ScrollView>
        <View style={styles.bannerContainer}>
          <CategoriesCards navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
});

export default CategoriesPage;

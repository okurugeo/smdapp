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
  Image,
} from "react-native";
 
import Icon from "react-native-vector-icons/Ionicons";
import { Container, Row } from "../components/Shared";
import Ionicons from "react-native-vector-icons/Ionicons";
import Services from "./Home/Services/Services";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreenPage: React.FC<HomeScreenProps> = ({ navigation }) => {
  const screenHeight = Dimensions.get("window").height;
  const bannerImages = [
    "https://visme.co/blog/wp-content/uploads/2020/12/Business-Banner-Design-Ideas-1.jpg",
    "https://visme.co/blog/wp-content/uploads/2020/12/Business-Banner-Design-Ideas-1.jpg",
    "https://visme.co/blog/wp-content/uploads/2020/12/Business-Banner-Design-Ideas-1.jpg",
  ];

  const handleCategoryPress = () => {
    // Navigate to HomeServicesPage when a category is pressed
    navigation.navigate("HomeServices");
  };

  return (
    <View>
      <ScrollView>
        <Container>
          <View style={styles.bannerContainer}>
            <Text style={{ fontFamily: "Box", fontSize: 18 }}>
              Todays Top orders
            </Text>
            <Text style={{ fontFamily: "Box" }}>
              Grab the lastest & save more
            </Text>
            <View style={{ margin: 10 }}></View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {bannerImages.map((imageUrl, index) => (
                <View key={index} style={styles.bannerItem}>
                  <Image
                    source={{ uri: imageUrl }}
                    style={styles.bannerImage}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
          <View>
            <Row>
              <View>
                <Text
                  style={{ fontFamily: "Box", fontSize: 18, color: "#2d438e" }}
                >
                  Smartbox Categories
                </Text>
              </View>
            </Row>
            <View>
              <View style={styles.iconNavigator}>
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => navigation.navigate("Home Side")}
                >
                  <View
                    style={[
                      styles.iconBackground,
                      { backgroundColor: "#fc9421" },
                    ]}
                  >
                    <Ionicons name="home" size={20} color="white" />
                  </View>
                  <Text style={styles.iconText}>Home Services</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => navigation.navigate("Resturant")}
                >
                  <View
                    style={[
                      styles.iconBackground,
                      { backgroundColor: "#787bcc" },
                    ]}
                  >
                    <Ionicons name="restaurant" size={20} color="white" />
                  </View>
                  <Text style={styles.iconText}>Restaurants</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => navigation.navigate("Electronics")}
                >
                  <View
                    style={[
                      styles.iconBackground,
                      { backgroundColor: "#01cb81" },
                    ]}
                  >
                    <Ionicons
                      name="phone-portrait-outline"
                      size={20}
                      color="white"
                    />
                  </View>

                  <Text style={styles.iconText}>Electronics</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => navigation.navigate("Beauty")}
                >
                  <View
                    style={[
                      styles.iconBackground,
                      { backgroundColor: "#fb2e7b" },
                    ]}
                  >
                    <Ionicons name="ios-cut-outline" size={20} color="white" />
                  </View>
                  <Text style={styles.iconText}>Beauty</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => navigation.navigate("CarsCards")}
                >
                  <View
                    style={[
                      styles.iconBackground,
                      { backgroundColor: "#1a90e7" },
                    ]}
                  >
                    <Ionicons name="car" size={20} color="white" />
                  </View>
                  <Text style={styles.iconText}>Car Services</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                  <View
                    style={[
                      styles.iconBackground,
                      { backgroundColor: "#d49d89" },
                    ]}
                  >
                    <Ionicons name="keypad" size={20} color="white" />
                  </View>
                  <Text style={styles.iconText}>More</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Row>
              <View>
                <Text
                  style={{ fontFamily: "Box", fontSize: 18, color: "#2d438e" }}
                >
                  Explore Smartboxes
                </Text>
                <Text style={{ fontFamily: "Box", color: "#df252a" }}>
                  View the best offers in Smartbox
                </Text>
              </View>
              <View style={{ margin: 10 }}></View>
              <Text style={{ fontFamily: "Box" }}>View All</Text>
            </Row>
            <View style={{ margin: 10 }}></View>
            <Services />
            <View style={{ margin: 10 }}></View>
          </View>
        </Container>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    // alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  iconNavigator: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  icon: {
    alignItems: "center",
    width: "30%", // Adjust the width to fit 3 icons per row
    marginVertical: 10,
  },
  iconBackground: {
    backgroundColor: "blue", // Change background color as needed
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 10,
    fontFamily: "Box",
  },
  bannerItem: {
    width: 200, // Set the width of each banner item
    marginRight: 10,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "grey",
  },
  bannerImage: {
    width: "100%",
    height: 100, // Set the height of each banner item
    aspectRatio: 2, // Adjust the aspect ratio as needed
  },
});

export default HomeScreenPage;

Icon;

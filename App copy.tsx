// App.tsx
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { BottomNavigation } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreenPage from "./screens/HomeScreens";
import CategoriesPage from "./screens/Categories";
import { useFonts } from "expo-font";
// import GoogleMapComponent from "./screens/MapScreen";
import MapsScreen from "./screens/MapScreen";
import Welcome from "./screens/Welcome";
import ProfileScreen from "./screens/ProfileScreen";
import logo from "./assets/logo.png";

import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components";
import HomeServicesPage from "./screens/Categories/Pages/Homeservices";
import Accleaning from "./screens/Categories/Pages/Accleaning";
import Maps from "./screens/Maps";
import Sofacleaning from "./screens/Categories/Pages/Homeservices";
import DeepCleaning from "./screens/Categories/Pages/Sofacleaning";
import VisaPaymentPage from "./screens/Categories/Pay/Payment";
import SofaCleaning from "./screens/Categories/Pages/Sofacleaning";
import Carwash from "./screens/Categories/Pages/Cars/Carwash";
import Resturant from "./screens/Categories/Pages/Resturant/Resturant";
import Electronics from "./screens/Categories/Pages/Electronines/Electronis";
import Beauty from "./screens/Categories/Pages/Beauty/Baeuty";
import CarsCards from "./screens/Categories/Pages/Car/Cars";
import HomeTab from "./screens/Categories/Pages/Carwash";
import CarpetCleaning from "./screens/Categories/Pages/Carpetcleaning";

interface WelcomeScreenProps {
  navigation: any; // Update with the correct type for navigation
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to My App!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Maps")} />
    </View>
  );
};

interface HomeScreenProps {
  navigation: any; // Update with the correct type for navigation
  image?: string;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "categories", title: "Categories", icon: "apps" },
    { key: "favorites", title: "Favorites", icon: "star" },
    { key: "profile", title: "Profile", icon: "person" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => <HomeScreenPage navigation={navigation} />,
    categories: () => <CategoriesPage navigation={navigation} />,
    favorites: () => <Text>Favorites</Text>,
    profile: () => <ProfileScreen />,
  });

  const renderIcon = ({ route, focused, color }: any) => {
    const iconName = focused ? route.icon : `${route.icon}-outline`;
    return <Icon name={iconName} size={18} color={color} />;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f7f8f8", paddingTop: "10%" }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={logo} style={{ height: 60, width: "40%", margin: 0 }} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#f7f8f8",
        }}
      >
        <Icon name="menu-outline" size={30} style={{ margin: 10 }} />
        <TextInput
          placeholder="Enter text..."
          style={{
            width: "70%",
            backgroundColor: "white",
            borderRadius: 10,
            height: 40,
            paddingLeft: 14,
            fontFamily: "Box",
          }} // This sets the width of the TextInput to 70%
        />
        <Icon name="cart-outline" size={30} style={{ margin: 10 }} />
      </View>
      <View>
        <Text style={{ margin: 10, fontFamily: "Box" }}>
          <Icon name="location-outline" size={18} style={{ margin: 10 }} />{" "}
          Location :{" "}
          <Text style={{ color: "purple" }}>
            Abu dhabi Mall main entrance .......
          </Text>
        </Text>
      </View>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={renderIcon}
      />
    </View>
  );
};

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [isWelcomeDone, setIsWelcomeDone] = useState(false);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., checking if the user has seen the welcome screen)
    setTimeout(() => {
      setIsWelcomeDone(true);
    }, 2000);
  }, []);

  const [loaded] = useFonts({
    Box: require("./assets/Font/WorkSans.ttf"),
    BoxBold: require("./assets/Font/WorkSans.ttf"),
  });

  if (!loaded) {
    return null; // Return a loading indicator or an empty component until fonts are loaded
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isWelcomeDone ? "Home" : "Welcome"}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home Services" component={HomeServicesPage} />
        <Stack.Screen name="Home Side" component={HomeTab} />
        <Stack.Screen name="Ac Cleaning" component={Accleaning} />
        <Stack.Screen name="Sofa Cleaning" component={SofaCleaning} />
        <Stack.Screen name="Deep Cleaning" component={DeepCleaning} />
        <Stack.Screen name="Car Wash" component={Carwash} />
        <Stack.Screen name="Visa Payment" component={VisaPaymentPage} />
        <Stack.Screen name="Resturant" component={Resturant} />
        <Stack.Screen name="Electronics" component={Electronics} />
        <Stack.Screen name="Carpet Cleaning" component={CarpetCleaning} />
        <Stack.Screen name="Beauty" component={Beauty} />
        <Stack.Screen name="CarsCards" component={CarsCards} />
        {/* <Stack.Screen name="M" component={Accleaning} /> */}
        <Stack.Screen name="Maps" component={Maps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

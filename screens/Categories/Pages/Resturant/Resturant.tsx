import React, { memo } from "react";
import ac from "./img/PICS/ac.jpg";
// import bl from "./img/PICS/build.jpg";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Container } from "../../../../components/Shared";
// import { BorderlessButton } from "react-native-gesture-handler";

type Home = {
  name: string;
  image?: string;
  link?: string;
};

const items: Home[] = [
  {
    name: "Eastgate Resturant",
    link: "Eastgate Resturant",
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/clean-up-the-house-5705891-4781457.png?f=webp",
  },
  {
    name: "Kampala Uganda",
    link: "Kampala Uganda",
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/clean-up-the-house-5705891-4781457.png?f=webp",
  },
  {
    name: "Kenzi Palance",
    link: "Kampala Uganda",
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/clean-up-the-house-5705891-4781457.png?f=webp",
  },
];

interface HomeScreenProps {
  navigation: any;
}
const Resturant: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleCategoryPress = (data: Home) => {
    navigation.navigate(data.link);
  };

  return (
    <Container>
      <Text
        style={{
          fontFamily: "Box",
        }}
      >
        Resturants
      </Text>
      <View style={styles.tabs}>
        {items.map((a) => (
          <View style={styles.viewSection} key={a.name}>
            <TouchableOpacity onPress={() => handleCategoryPress(a)}>
              <Image source={{ uri: a.image }} style={styles.itemImage} />
              <Text
                style={{
                  textTransform: "capitalize",
                  fontSize: 12,
                  textAlign: "center",
                  fontFamily: "Box",
                  color: "black",
                }}
              >
                {a.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
    flexWrap: "wrap",
  },
  viewSection: {
    backgroundColor: "#f7f8f8",
    padding: 10,
    width: "30%",
    marginTop: 10,
    marginRight: 10,
  },
  cardContainer: {
    backgroundColor: "green",
    padding: 10,
  },
  itemImage: {
    width: "100%",
    height: 90,
    borderRadius: 10,
    marginRight: 10,
  },
});
export default Resturant;

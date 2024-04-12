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

const Cars: Home[] = [
  {
    name: "Car Wash",
    link: "Car Wash",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKFiPUK5ip1If-2i-T1OGBEQ-5n-QpBTvsw&usqp=CAU",
  },
  {
    name: "Battrey Change",
    link: "Battrey Change",
    image:
      "https://assets.shriramgi.com/webassets/blogs/19748417-9733-42d8-ac6b-e9046fbafea3_electric-vehicle-battery-insurance-coverage.png",
  },
  {
    name: "Car Tower",
    link: "Battrey Change",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZShCFaC0cgt2qBvXXfNORtgtluY40Dda-_w&usqp=CAU",
  },
];

interface HomeScreenProps {
  navigation: any;
}
const CarsCards: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleCategoryPress = (data: Home) => {
    navigation.navigate(data.link);
  };

  return (
    <Container>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontFamily: "Box",
          }}
        >
          Cars Services
        </Text>
        <View style={styles.tabs}>
          {Cars.map((a) => (
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
export default CarsCards;

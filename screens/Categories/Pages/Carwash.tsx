import React, { memo } from "react";
import ac from "./img/PICS/ac.jpg";
// import bl from "./img/PICS/build.jpg";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Container } from "../../../components/Shared";
// import { BorderlessButton } from "react-native-gesture-handler";

type Home = {
  name: string;
  image?: string;
  link?: string;
};

const items: Home[] = [
  {
    name: "Home cleaning",
    link: "Home Services",
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/clean-up-the-house-5705891-4781457.png?f=webp",
  },
  {
    name: "AC cleaning",
    link: "Ac Cleaning",
    image:
      "https://img.freepik.com/premium-vector/engineer-fixing-cleaning-air-conditioner-living-room-repairman-repairing-ac-heating-cooling-system-unit-home-flat-vector-illustration-repair-service-hvac-technology-concept_778687-1608.jpg",
  },
  {
    name: "Deep cleaning",
    link: "Deep Cleaning",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmEElzlfJMdqVO7DiJWLuvkuP2WzfK_WmLw&usqp=CAU",
  },
  {
    name: "Sofa cleaning",
    link: "Sofa Cleaning",
    image:
      "https://elements-cover-images-0.imgix.net/f96c8c19-5d5d-4712-948f-cc34db6fdb5e?q=80&w=316&fit=max&fm=jpeg&s=ba7555ecd1aebd889272f89cce9dd6de",
  },
  {
    name: "Carpet cleaning",
    link: "Sofa Cleaning",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQk7fvefZ7tytHpNM2-FsEeeP1ahfOzrnv3Uu5NoLBwn7-A7p_FyP6_8Iv2jKW60eUabQ&usqp=CAU",
  },
  {
    name: "Car Services",
    link: "Car Services",
    image:
      "https://5.imimg.com/data5/LV/AF/HD/SELLER-12008754/car-repair-service.png",
  },
];

interface HomeScreenProps {
  navigation: any;
}
const HomeTab: React.FC<HomeScreenProps> = ({ navigation }) => {
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
        Home Services
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
export default HomeTab;

import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const List = [
  { label: "My Bookings", icon: "calendar" },
  { label: "Profile", icon: "user" },
  { label: "Notification", icon: "bell" },
  { label: "Country", icon: "globe" },
  { label: "Languages", icon: "language" },
  { label: "Privacy Policy", icon: "lock" },
  { label: "Terms and Conditions", icon: "file-text" },
  { label: "Contact Us", icon: "envelope" },
  { label: "Help Center", icon: "question-circle" },
  { label: "Invite Friends", icon: "users" },
  { label: "Log Out", icon: "sign-out" },
];

interface ListItemProps {
  item: { label: string; icon: string };
}

const ListItem: React.FC<ListItemProps> = ({ item }) => (
  <View style={styles.listItem}>
    <Icon name={item.icon} size={20} color="purple" style={styles.icon} />
    <Text style={styles.itemText}>{item.label}</Text>
  </View>
);

const ProfileScreen: React.FC = () => {
  const renderItem = ({ item }: { item: { label: string; icon: string } }) => (
    <ListItem item={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={List}
        renderItem={renderItem}
        keyExtractor={(item) => item.label}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  list: {
    width: "100%",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginTop: 25,
  },
  icon: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    fontFamily: "Box",
  },
});

export default ProfileScreen;

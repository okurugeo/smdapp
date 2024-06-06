import React, { FunctionComponent, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";
import CalendarPicker from "react-native-calendar-picker";
interface WelcomeProps {
  navigation: any;
}
const Accleaning: FunctionComponent<WelcomeProps> = ({ navigation }) => {
  const [oneHourChecked, setOneHourChecked] = useState(false);
  const [select, setUnit] = useState(0);
  const [twoHoursChecked, setTwoHoursChecked] = useState(false);
  const [threeHoursChecked, setThreeHoursChecked] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const onDateChange = (date: any) => {
    setSelectedStartDate(date);
  };
  const startDate = selectedStartDate ? selectedStartDate.toString() : "";
  const handleCheckBoxToggle = (option: any) => {
    switch (option) {
      case "oneHour":
        setOneHourChecked(!oneHourChecked);
        break;
      case "twoHours":
        setTwoHoursChecked(!twoHoursChecked);
        break;
      case "threeHours":
        setThreeHoursChecked(!threeHoursChecked);
        break;
      default:
        break;
    }
  };
  const handleCategoryPress = () => {
    navigation.navigate("Visa Payment");
  };
  return (
    <View style={styles.container}>
      <Text>Check Link</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: "white",
  },
  page: {
    width: "90%",
    flex: 1,
  },
  pagex: {
    width: "90%",
    flex: 1,
  },
  checkboxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    width: "40%",
    fontFamily: "Box",
  },
  checkboxText: {
    fontSize: 15,
    fontFamily: "Box",
  },
  boxes: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  textBox: {
    fontWeight: "bold",
    // fontSize: 30,
  },
  calendarText: {
    fontFamily: "Box",
    fontSize: 13,
  },
  todayStyle: {
    backgroundColor: "green",
  },
  todayTextStyle: {
    color: "white",
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
  fixedBottom: {
    position: "absolute",
    bottom: 0,
    left: 4,
    right: 4,
    backgroundColor: "#df252a",
    padding: 20,
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  codepage: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  TabsX: {
    width: 80,
    padding: 10,
    backgroundColor: "lightgrey",
    alignItems: "center",
    marginRight: 20,
    marginBottom: 20,
  },
  TabsX2: {
    width: "46%",
    padding: 10,
    backgroundColor: "lightgrey",
    alignItems: "center",
    marginRight: 10,
    marginBottom: 20,
  },
});
[];
export default Accleaning;

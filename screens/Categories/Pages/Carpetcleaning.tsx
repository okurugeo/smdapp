import React, { FunctionComponent, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";
import CalendarPicker from "react-native-calendar-picker"; // DateCallbackHandler,

interface WelcomeProps {
  navigation: any; // Type this properly with React Navigation types if available
}

const CarpetCleaning: FunctionComponent<WelcomeProps> = ({ navigation }) => {
  const [oneHourChecked, setOneHourChecked] = useState(false);
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
      <View style={styles.page}>
        <View style={{}}>
          <Text style={{ fontFamily: "Box" }}>
            1 . Small size (1 upto 5 sq m).
          </Text>
          <View>
            <Text>80 min</Text>
          </View>
        </View>
        <View style={{}}>
          <Text style={{ fontFamily: "Box" }}>
            2. Meduim size (1 upto 10 sq m). .
          </Text>
          <View>
            <Text>120 min</Text>
          </View>
        </View>

        <View style={{}}>
          <Text style={{ fontFamily: "Box", marginTop: 20 }}>
            4. Large size ( 1 upto 15 sq m)?
          </Text>
          <View>
            <Text>320 min</Text>
          </View>
        </View>
        <View style={{}}>
          <Text style={{ fontFamily: "Box", marginTop: 20 }}>
            4. Extra Large size (1 upto 12 sq m)?
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          ></View>
        </View>
        <View style={{}}>
          <Text style={{ fontFamily: "Box", marginTop: 20 }}>
            5 . Schedule ?
          </Text>
          <View>
            <CalendarPicker
              onDateChange={onDateChange}
              textStyle={styles.calendarText}
              customDatesStyles={[
                {
                  date: new Date(), // Customize styles for today
                  style: styles.todayStyle,
                  textStyle: styles.todayTextStyle,
                },
              ]}
            />
          </View>
        </View>
        <View>{/* <Text>Time ?</Text> */}</View>

        <TouchableOpacity
          style={styles.fixedBottom}
          onPress={() => handleCategoryPress()}
        >
          <View>
            <Text style={{ color: "white" }}>CHECK OUT</Text>
          </View>
          <Text style={{ color: "white" }}>500 AED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: "white",
    // paddingRight: 20,
  },
  page: {
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
    // padding: 10,
  },
  textBox: {
    fontWeight: "bold",
    // fontSize: 30,
  },
  calendarText: {
    fontFamily: "Box", // Replace with your custom font family
    fontSize: 13,
  },
  todayStyle: {
    backgroundColor: "green", // Customize background color for today
  },
  todayTextStyle: {
    color: "white", // Customize text color for today
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1", // Example background color
  },
  fixedBottom: {
    position: "absolute",
    bottom: 0,
    left: 4,
    right: 4,
    backgroundColor: "#df252a", // Example background color
    padding: 20,
    // justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CarpetCleaning;

import React, { FunctionComponent, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";
import CalendarPicker from "react-native-calendar-picker"; // DateCallbackHandler,

interface WelcomeProps {
  navigation: any; // Type this properly with React Navigation types if available
}

const DeepCleaning: FunctionComponent<WelcomeProps> = ({ navigation }) => {
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
        <View style={{ borderBottomWidth: 1, borderBottomColor: "black" }}>
          <Text style={{ fontSize: 14, fontFamily: "Box" }}>
            1 . How often.
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <CheckBox
              title="One hour"
              checked={oneHourChecked}
              onPress={() => handleCheckBoxToggle("oneHour")}
              containerStyle={styles.checkboxContainer}
              textStyle={styles.checkboxText}
            />
            <CheckBox
              title="Weekly once"
              checked={oneHourChecked}
              onPress={() => handleCheckBoxToggle("oneHour")}
              containerStyle={styles.checkboxContainer}
              textStyle={styles.checkboxText}
            />
            <CheckBox
              title="Two Times"
              checked={twoHoursChecked}
              onPress={() => handleCheckBoxToggle("twoHours")}
              containerStyle={styles.checkboxContainer}
              textStyle={styles.checkboxText}
            />
            <CheckBox
              title="Monthly"
              checked={threeHoursChecked}
              onPress={() => handleCheckBoxToggle("threeHours")}
              containerStyle={styles.checkboxContainer}
              textStyle={styles.checkboxText}
            />
          </View>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "black" }}>
          <Text style={{ fontSize: 14, fontFamily: "Box" }}>
            2. How often .
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "20%",
              height: 40,
              display: "flex",
              alignItems: "center",
            }}
          >
            <View style={styles.boxes}>
              <Text style={styles.textBox}> - </Text>
            </View>
            <View style={{ width: 40, display: "flex", alignItems: "center" }}>
              <Text>8</Text>
            </View>
            <View style={styles.boxes}>
              <Text style={styles.textBox}> + </Text>
            </View>
          </View>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "black" }}>
          <Text style={{ fontSize: 14, fontFamily: "Box", marginTop: 20 }}>
            3. Number of Cleaners.
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "20%",
              height: 40,
              display: "flex",
              alignItems: "center",
            }}
          >
            <View style={styles.boxes}>
              <Text style={styles.textBox}> - </Text>
            </View>
            <View style={{ width: 40, display: "flex", alignItems: "center" }}>
              <Text>8</Text>
            </View>
            <View style={styles.boxes}>
              <Text style={styles.textBox}> + </Text>
            </View>
          </View>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "black" }}>
          <Text style={{ fontSize: 14, fontFamily: "Box", marginTop: 20 }}>
            4. Extra Cleaning Materials?
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <CheckBox
              title="Yes"
              checked={oneHourChecked}
              onPress={() => handleCheckBoxToggle("oneHour")}
              containerStyle={styles.checkboxContainer}
              textStyle={styles.checkboxText}
            />
            <CheckBox
              title="No"
              checked={oneHourChecked}
              onPress={() => handleCheckBoxToggle("oneHour")}
              containerStyle={styles.checkboxContainer}
              textStyle={styles.checkboxText}
            />
          </View>
        </View>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "black" }}>
          <Text style={{ fontSize: 14, fontFamily: "Box", marginTop: 20 }}>
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

        <View style={styles.fixedBottom}>
          <View>
            <Text style={{ color: "white" }}>CHECK OUT</Text>
          </View>
          <Text style={{ color: "white" }}>500 AED</Text>
        </View>
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

export default DeepCleaning;

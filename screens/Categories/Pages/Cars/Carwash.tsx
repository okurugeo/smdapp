import React, { FunctionComponent, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";
import CalendarPicker from "react-native-calendar-picker";
interface WelcomeProps {
  navigation: any;
}
const Carwash: FunctionComponent<WelcomeProps> = ({ navigation }) => {
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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <View
          style={
            select == 0
              ? { backgroundColor: "green", padding: 10, width: "30%" }
              : { backgroundColor: "white", padding: 10, width: "30%" }
          }
        >
          <TouchableOpacity onPress={() => setUnit(0)}>
            <Text>SEDAN</Text>
          </TouchableOpacity>
        </View>
        <View
          style={
            select == 1
              ? { backgroundColor: "green", padding: 10, width: "30%" }
              : { backgroundColor: "white", padding: 10, width: "30%" }
          }
        >
          <TouchableOpacity onPress={() => setUnit(1)}>
            <Text>SUV 5 SEATER</Text>
          </TouchableOpacity>
        </View>
        <View
          style={
            select == 2
              ? { backgroundColor: "green", padding: 20, width: "30%" }
              : { backgroundColor: "white", padding: 20, width: "30%" }
          }
        >
          <TouchableOpacity onPress={() => setUnit(2)}>
            <Text>SUV 8 SEATER</Text>
          </TouchableOpacity>
        </View>
      </View>

      {select == 0 ? (
        <View style={styles.page}>
          <View>
            <Text style={{ fontSize: 14, fontFamily: "Box", marginTop: 20 }}>
              1 . Exterior and Interior Cleaning?
            </Text>

            <View>
              <CheckBox
                title="Cleaning"
                checked={oneHourChecked}
                onPress={() => handleCheckBoxToggle("oneHour")}
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkboxText}
              />
              <CheckBox
                title="Cleaning with poolishing"
                checked={oneHourChecked}
                onPress={() => handleCheckBoxToggle("oneHour")}
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkboxText}
              />
            </View>
            <Text style={{ fontSize: 14, fontFamily: "Box", marginTop: 20 }}>
              2 . Monthly?
            </Text>
            <CheckBox
              title="Monthly Option"
              checked={oneHourChecked}
              onPress={() => handleCheckBoxToggle("oneHour")}
              containerStyle={styles.checkboxContainer}
              textStyle={styles.checkboxText}
            />
          </View>

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
      ) : select == 1 ? (
        <View style={styles.page}>
          <View>
            <Text style={{ fontSize: 14, fontFamily: "Box", marginTop: 20 }}>
              1 . Exterior and Interior Cleaning (SUV)?
            </Text>

            <View>
              <CheckBox
                title="Cleaning"
                checked={oneHourChecked}
                onPress={() => handleCheckBoxToggle("oneHour")}
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkboxText}
              />
              <CheckBox
                title="Cleaning with poolishing"
                checked={oneHourChecked}
                onPress={() => handleCheckBoxToggle("oneHour")}
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkboxText}
              />
            </View>
            <Text style={{ fontSize: 14, fontFamily: "Box", marginTop: 20 }}>
              2 . Monthly?
            </Text>
            <CheckBox
              title="Monthly Option"
              checked={oneHourChecked}
              onPress={() => handleCheckBoxToggle("oneHour")}
              containerStyle={styles.checkboxContainer}
              textStyle={styles.checkboxText}
            />
          </View>

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
      ) : (
        <View style={styles.page}>
          <View>
            <Text style={{ fontSize: 14, fontFamily: "Box", marginTop: 20 }}>
              1 . Exterior and Interior Cleaning?
            </Text>

            <View>
              <CheckBox
                title="Cleaning"
                checked={oneHourChecked}
                onPress={() => handleCheckBoxToggle("oneHour")}
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkboxText}
              />
              <CheckBox
                title="Cleaning with poolishing"
                checked={oneHourChecked}
                onPress={() => handleCheckBoxToggle("oneHour")}
                containerStyle={styles.checkboxContainer}
                textStyle={styles.checkboxText}
              />
            </View>

            <Text style={{ fontSize: 14, fontFamily: "Box", marginTop: 20 }}>
              2 . Monthly?
            </Text>
            <CheckBox
              title="Monthly Option"
              checked={oneHourChecked}
              onPress={() => handleCheckBoxToggle("oneHour")}
              containerStyle={styles.checkboxContainer}
              textStyle={styles.checkboxText}
            />
          </View>

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
      )}

      <View style={styles.page}>
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
export default Carwash;

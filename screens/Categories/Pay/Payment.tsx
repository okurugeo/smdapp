import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Card, Image } from "react-native-elements";

const VisaPaymentPage: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [cvv, setCVV] = useState<string>("");

  const handlePayment = () => {
    // Implement your payment logic here
    console.log("Processing payment...");
  };

  return (
    <View style={styles.container}>
      <Card title="Visa Payment" containerStyle={styles.card}>
        <Image
          style={styles.cardImage}
          source="https://media.licdn.com/dms/image/C5112AQF1W-0nJQwgOg/article-cover_image-shrink_600_2000/0/1568010011757?e=2147483647&v=beta&t=va_38ashZLgDr7aEvyRbLKv3MQZxONBdFTdaodG9Dlw"
          resizeMode="contain"
        />
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Expiry Date (MM/YY)"
            value={expiryDate}
            onChangeText={(text) => setExpiryDate(text)}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="CVV"
            keyboardType="numeric"
            value={cvv}
            onChangeText={(text) => setCVV(text)}
          />
        </View>
        <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  card: {
    width: "80%",
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    flex: 1,
    marginRight: 5,
  },
  payButton: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  payButtonText: {
    color: "white",
    textAlign: "center",
  },
  cardImage: {
    height: 60,
    marginVertical: 10,
  },
});

export default VisaPaymentPage;

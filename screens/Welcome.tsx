import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { Container } from "../components/Shared";
import { Colors } from "../components/Colors";
import styled from "styled-components/native";
import { Text } from "react-native";
import logo from "../assets/logo.png";
import crew from "../assets/crew.png";
import RegularButton from "../components/Button";

interface WelcomeProps {
  navigation: any; // Type this properly with React Navigation types if available
}

const WelcomeContainer = styled(Container)`
  flex: 1;
  height: 100%;
  width: 100%;
  padding: 20px;

  align-items: center;
  padding-bottom: 50px;
`;
const LogoView = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const WelcomeCompany = styled.Text`
  font-size: 20px;
  font-weight: bold;
  fontfamily: Box;
`;
const TopLogo = styled.Image`
  width: 150;
  height: 100;
  resize-mode: contain;
`;
const CrewLogo = styled.Image`
  height: 50%;
  resize-mode: contain;
  margin: 20px;
`;
const WelcomeDesc = styled.Text`
  font-size: 15px;

  margin: 20px;
  color: green;
  fontfamily: Box;
`;

const Welcome: FunctionComponent<WelcomeProps> = ({ navigation }) => {
  const navigateToMapScreen = () => {
    navigation.navigate("Home");
  };
  return (
    <>
      <StatusBar />
      <LogoView>
        <TopLogo source={logo} />
      </LogoView>
      <WelcomeContainer>
        <CrewLogo source={crew} />
        <Text style={{ fontFamily: "Box" }}>Best</Text>
        <Text style={{ fontFamily: "Box" }}> Solution For Your Home</Text>
        <RegularButton onPress={navigateToMapScreen}>
          Continue as guest
        </RegularButton>
        <WelcomeDesc style={{ fontFamily: "Box" }}>
          You already have an account ? Log in
        </WelcomeDesc>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;

import styled from "styled-components/native";
import { Colors } from "./Colors";
import { Dimensions } from "react-native";

export const Container = styled.View`
  flex: 1;
  fontfamily: Box;
  padding: 20px;
  backgroundcolor: red;
`;
export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ScreenWidth = Dimensions.get("screen").width;
export const ScreenHeight = Dimensions.get("screen").height;

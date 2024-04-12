import { FunctionComponent } from "react";
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import styled from "styled-components/native";

const ButtonView = styled.TouchableOpacity`
  text-align: center;
  background-color: #c1d6ff;
  padding: 20px;
  border-radius: 60px;
  width: 90%;
  align-items: center;
  margin: 20px;
`;

interface ButtonProps {
  btnStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  children: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress}>
      <Text>{props.children}</Text>
    </ButtonView>
  );
};
export default RegularButton;

import React from "react";
import { Text } from "react-native";

export default function Message(props) {
  return <Text style={props.style} onPress={props.press} color="#841584" />;
}

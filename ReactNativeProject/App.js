import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Message from "./components/Message";

export default function App() {
  const [state, setState] = useState("one");

  return (
    <View style={styles.container}>
      <Text style={styles.yellow}>{state}</Text>
      {/* <Message
        style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
        press={() => {
          setState("one");
        }}
        name={"one"}
      />
      <Message
        style={{ width: 100, height: 100, backgroundColor: "skyblue" }}
        press={() => {
          setState("two");
        }}
        name={"two"}
      />
      <Message
        style={{ width: 150, height: 150, backgroundColor: "steelblue" }}
        press={() => {
          setState("three");
        }}
        name={"three"}
      /> */}
      <TextInput
        placeholder="Input Text!!"
        onChangeText={text => setState(text)}
        value={state}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center"
  },
  yellow: {
    fontSize: 40
  }
});

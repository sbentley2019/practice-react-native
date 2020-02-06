import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

export default function App() {
  const [state, setState] = useState([
    { name: "alpha", key: 1 },
    { name: "bravo", key: 2 },
    { name: "charlie", key: 3 },
    { name: "delta", key: 4 },
    { name: "echo", key: 5 },
    { name: "foxtrot", key: 6 },
    { name: "golden", key: 7 }
  ]);

  return (
    <View style={styles.container}>
      {/* <ScrollView>
        {state.map(item => (
          <View key={item.key}>
            <Text style={styles.itemContainer}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
      <FlatList
        data={state}
        renderItem={({ item }) => (
          <Text style={styles.itemContainer}>{item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",

    justifyContent: "center"
  },
  yellow: {
    fontSize: 40
  },
  itemContainer: {
    paddingVertical: 50,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "black"
  }
});

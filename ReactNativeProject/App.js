import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

export default function App() {
  const [state, setState] = useState([
    { name: "alpha", id: 1 },
    { name: "bravo", id: 2 },
    { name: "charlie", id: 3 },
    { name: "delta", id: 4 },
    { name: "echo", id: 5 },
    { name: "foxtrot", id: 6 },
    { name: "golden", id: 7 }
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
        keyExtractor={item => item.id}
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

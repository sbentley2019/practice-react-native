import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Button
} from "react-native";

export default function App() {
  const [state, setState] = useState([
    { name: "alpha", id: 1 },
    { name: "bravo", id: 2 },
    { name: "charlie", id: 3 },
    { name: "delta", id: 4 },
    { name: "echo", id: 5 },
    { name: "foxtrot", id: 6 },
    { name: "golden", id: 7 },
    { name: "helix", id: 8 }
  ]);
  let id = state.length;
  const [newText, setNewText] = useState("");

  const handleButton = function() {
    setState(prev => prev.concat({ name: newText, id: ++id }));
    setNewText("");
  };

  const handleClick = function(id) {
    setState(prev => prev.filter(x => x.id != id));
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter a name"
          onChangeText={text => setNewText(text)}
          value={newText}
        />
        <Button title="Submit" onPress={() => handleButton()} />
      </View>
      <FlatList
        keyExtractor={item => item.id}
        data={state}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleClick(item.id)}>
            <Text style={styles.itemContainer}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  yellow: {
    fontSize: 40
  },
  itemContainer: {
    backgroundColor: "yellow",
    paddingVertical: 50,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "black"
  },
  input: {
    height: 50,
    marginTop: 25
  }
});

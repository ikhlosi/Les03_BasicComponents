// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import MyTextInput from "./src/components/MyTextInput";

export default function App() {
  const data = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Alice" },
  ];
  const [people, setPeople] = useState(data);

  // gebruik FlatList om data te tonen

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={people}
        renderItem={(props) => (
          <Text style={styles.item}>{props.item.name}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});

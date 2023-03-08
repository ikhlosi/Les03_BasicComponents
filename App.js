// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import MyTextInput from "./src/components/MyTextInput";

export default function App() {
  // voeg 2 textinput comps en koppel ze met de juiste states
  const [name, setName] = useState("Joris");
  const [age, setAge] = useState("30");
  const [text, onChangeText] = useState("");

  // handig op die manier om controles uit te voeren alvorens de Name te veranderen
  const nameChangeHandler = (value) => setName(value);

  return (
    <View style={styles.container}>
      <MyTextInput
        caption="Name:"
        myOnChangeText={nameChangeHandler}
        myPlaceholder="Enter your name"
      />
      <MyTextInput
        caption="Age:"
        myOnChangeText={(value) => setAge(value)}
        myPlaceholder="Enter your age"
        isNumeric={true}
      />
      {/* <Text> name: {name}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        // onChangeText={setName}
        // better:
        onChangeText={(value) => setName(value)}
        keyboardType="email-address"
      />
      <Text> age: {age}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        onChangeText={setAge}
        keyboardType="numeric"
        secureTextEntry={true} // standaard op `true`
      /> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

// TODO: styles in MyTextInput component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 3,
    padding: 8,
    margin: 10,
    width: 200,
  },
  inputFocus: {
    borderWidth: 3,
    borderColor: "red",
    padding: 12,
  },
});

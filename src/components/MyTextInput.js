import { View, Text } from "react-native";
import React, { useState } from "react";

const MyTextInput = (props) => {
  const [focused, setFocused] = useState(false);

  return (
    <>
      <Text>{props.caption}</Text>
      <TextInput
        style={[styles.input, focused && styles.inputFocus]}
        placeholder={props.myPlaceholder}
        // onChangeText={setName}
        // better:
        onChangeText={(value) => props.myOnChangeText(value)}
        keyboardType={props.isNumeric && "numeric"}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </>
  );
};

// TODO styles
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
});

export default MyTextInput;

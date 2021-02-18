import * as React from "react";
import { Header } from "react-native-elements";
import { View,StyleSheet,Text,TextInput,TouchableOpacity } from "react-native";

export default class WriteStoryScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <Header
          backgroundColor={"lightblue"}
          centerComponent={{
            text: "Story Hub / Write your story",
            style: { fontSize: 28, color: "black" },
          }}
        />
        <TextInput style={styles.inputBox} placeholder="Your stories title" />
        <TextInput style={styles.inputBox} placeholder="The author" />
        <TextInput
          style={styles.inputBoxMultiline}
          placeholder="Your story..."
          multiline="true"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    width: "90%",
    height: 40,
    borderWidth: 2,
    margin: 20,
    padding: 5,
  },

  inputBoxMultiline: {
    width: "90%",
    height: "35%",
    borderWidth: 2,
    margin: 20,
    padding: 5,
  },

  button: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    width: 200,
    height: 50,
    alignSelf: "center",
  },

  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

});

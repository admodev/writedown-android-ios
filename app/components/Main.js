import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>WriteDown</Text>
          </View>
          <ScrollView style={styles.scrollContainer}></ScrollView>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              placeholder="> note"
              placeholderTextColor="white"
              underlineColorAndroid="transparent"
            ></TextInput>
          </View>
        </View>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#E91E63",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 26,
    textTransform: "uppercase",
    fontWeight: 700,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor: "#E91E63",
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    marginBottom: -45,
    zIndex: 10,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    paddingTop: 46,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#ededed",
  },
});

AppRegistry.registerComponent("todosapp", () => todosapp);

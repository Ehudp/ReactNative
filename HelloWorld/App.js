/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Grid from "./src/Grid";
import HelloComponent from "./src/Hello";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Grid /> */}
        <HelloComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

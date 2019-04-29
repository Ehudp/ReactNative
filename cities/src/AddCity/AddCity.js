import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import uuidV4 from "uuid/v4";
import { colors } from "../theme";
import { TextInput } from "react-native-gesture-handler";
const cityName = "Tel Aviv";
const countyName = "Israel";
export default class AddCity extends React.Component {
  state = {
    city: cityName,
    country: countyName
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  };
  submit = () => {
    if (this.state.city === "" || this.state.country === "") return;

    const city = {
      city: this.state.city,
      country: this.state.country,
      locations: [],
      id: uuidV4()
    };

    this.props.screenProps.addCity(city);

    this.setState(
      {
        city: cityName,
        country: countyName
      },
      () => {
        this.props.navigation.navigate("Cities");
      }
    );
  };
  render() {
    // console.log("props:", this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.heading}> Cities App</Text>
        <TextInput
          style={styles.input}
          placeholder="City name"
          value={this.state.city}
          onChange={val => this.onChangeText("city", val)}
        />
        <TextInput
          placeholder="Country name"
          value={this.state.country}
          onChange={val => this.onChangeText("country", val)}
          style={styles.input}
        />

        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add City</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    margin: 10,
    paddingHorizontal: 8,
    height: 50
  },
  button: {
    height: 50,
    backgroundColor: "#666",
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  buttonText: {
    color: "white"
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: "center"
  },
  heading: {
    fontSize: 40,
    textAlign: "center",
    margin: 10,
    color: "white"
  }
});

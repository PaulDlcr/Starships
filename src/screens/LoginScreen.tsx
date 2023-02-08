/* eslint-disable import/no-default-export */

import * as React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { TextInput, Button } from "react-native-paper";

import { Header } from "../components/Header";
import { Routes } from "../navigation/Routes";


export default function LoginScreen({ navigation } : any) {

  function navigateToTerms() {  
    navigation.navigate(Routes.TERMS_SCREEN);
  }
  
  function navigateToStarship() {  
    navigation.navigate(Routes.STARSHIP_FEED_SCREEN);
  }

  const [, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <Header title="Spacecraft" />
      <TextInput label="Email" onChangeText={(text) => setText(text)} />
      <TextInput label="Password" onChangeText={(text) => setText(text)} />
      <Button onPress={navigateToStarship} mode="contained">Login</Button>
      <Button onPress={navigateToTerms} mode="text" textColor="lightgrey">
        Read Terms and Conditions
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});

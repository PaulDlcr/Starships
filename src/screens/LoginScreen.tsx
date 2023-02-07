import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Text, TextInput, Button } from 'react-native-paper';
import {Header} from '../components/Header';


export default function App() {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <Header title="Spacecraft" />
      <TextInput
        label="Email"
        onChangeText={text => setText(text)}
      />
      <TextInput
        label="Password"
        onChangeText={text => setText(text)}
      />
      <Button mode="contained">
      Login
      </Button>
      <Button mode="text" textColor='lightgrey'>
      Read Terms and Conditions
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
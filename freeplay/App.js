import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Interactable from 'react-native-interactable';
import { Gyroscope } from 'react-native-sensors';

const gyroObservable = new Gyroscope()

export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

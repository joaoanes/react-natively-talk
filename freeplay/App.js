import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Interactable from 'react-native-interactable';
import { Gyroscope } from 'react-native-sensors';

const gyroObservable = new Gyroscope()

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{position: 'absolute', top: 0, width: 25, height: 580, backgroundColor: 'grey'}} />

        <View style={{backgroundColor: 'red', width: 100, height: 100, borderRadius: 10005}} />

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

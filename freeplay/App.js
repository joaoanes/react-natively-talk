import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Interactable from 'react-native-interactable';
import { Gyroscope } from 'react-native-sensors';

const gyroObservable = new Gyroscope()

export default class App extends React.Component {

  constructor() {
    super()

    this.state = {
      maxY : 0,
      y: 0
    }

    gyroObservable
    .map(({x, y, z}) => ({x: x*1000, y: y*1000, z: z*1000}))
    .subscribe(({x, y, z}) =>
      this.refs.ball.setVelocity({y: -1 * Math.abs(x+y+z)})
    )
  }

  checkMax = ({nativeEvent: {x, y}}) => {
    this.setState({y: -y+200})
    if (-y+200 > this.state.maxY) {
      this.setState({maxY: -y+200}) //y starts at 400
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{position: 'absolute', top: 0, width: 25, height: 580, backgroundColor: 'grey'}} />
        <Interactable.View
          ref='ball'
          onDrag={this.checkMax}
          gravityPoints={[{x: 0, y: 200, strength: 150, falloff: 800, damping: 0.5}]}
          initialPosition={{x: 0, y: 400}}
          verticalOnly={true}
          boundaries={{top: -400, bottom: 200, bounce: 0.5}}
        >
          <View style={{backgroundColor: 'red', width: 100, height: 100, borderRadius: 10005}} />
        </Interactable.View>
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

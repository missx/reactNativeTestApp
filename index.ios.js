import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapScreen from './app/containers/MapScreen';

export default class reactNativeTestMap extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('reactNativeTestMap', () => reactNativeTestMap);

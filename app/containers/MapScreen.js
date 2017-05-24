import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Map from '../components/Map';

export default class MapScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Map</Text>
                <Map />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
  }
});

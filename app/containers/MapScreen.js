import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Map from '../components/Map';

export default class MapScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                
                <Map />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  }
});

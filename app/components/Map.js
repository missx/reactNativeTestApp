import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MapView from 'react-native-maps';

export default class Map extends Component {

    state = {
        lastPosition: 'unknown',
    };

    watchID = null;

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
        (position) => {
            var lastPosition = JSON.stringify(position);
            console.log(lastPosition);
            this.setState({lastPosition});
        },
        (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lastPosition = JSON.stringify(position);
            this.setState({lastPosition});
        });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    render() {
        return (
            <View  style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  map: {
    flex: 1
  },
});
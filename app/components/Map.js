import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MapView from 'react-native-maps';

export default class Map extends Component {

    state = {
        lastPosition: 'unknown',
        coordinates: {
            latitude: -34.901410,
            longitude: -56.174996
        },
    };

    watchID = null;

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
        (position) => {
            
            this.setState({
                coordinates: {
                    latitude: parseFloat(position.coords.latitude),
                    longitude: parseFloat(position.coords.longitude)
                }
            });
        },
        (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            
            this.setState({
                coordinates: {
                    latitude: parseFloat(position.coords.latitude),
                    longitude: parseFloat(position.coords.longitude)
                }
            });
            
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
                    region={{
                        latitude: this.state.coordinates.latitude,
                        longitude: this.state.coordinates.longitude,
                        latitudeDelta: 0.0800,
                        longitudeDelta: 0.0400,
                    }}
                >
                    <MapView.Marker
                        coordinate={this.state.coordinates}
                    />
                </MapView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 700,
    width: 400,
    justifyContent: 'flex-end', 
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
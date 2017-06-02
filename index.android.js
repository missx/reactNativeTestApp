import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import MapScreen from './app/containers/MapScreen';

export default class reactNativeTestMap extends Component {

  static navigationOptions = {
		title: 'Home'
	};

  render() {
		const { navigate } = this.props.navigation;
		return (
			<View >
			<Button
				onPress={() => navigate('Map')}
				title="See My Location"
			/>
			</View>
		);
  }
}

const mapApp = StackNavigator({
	Home: {screen: reactNativeTestMap},
	Map: {screen: MapScreen}
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});

AppRegistry.registerComponent('reactNativeTestMap', () => mapApp);

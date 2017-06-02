import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppReducer from './app/reducers/index';

import AppWithNavigationState from './app/navigators/AppNavigator';



export default class reactNativeTestMap extends Component {
  store = createStore(AppReducer);
  
  render() {
    return (
      <Provider store={this.store} >
        <AppWithNavigationState />
      </Provider>
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

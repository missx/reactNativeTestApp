import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import MapScreen from '../containers/MapScreen';
import DirectionsScreen from '../containers/DirectionsScreen';
import Counter from '../components/Counter';

export const AppNavigator = StackNavigator({
    Map: {screen: MapScreen}
});

const AppWithNavigationState = ({ dispatch, nav }) => {
    return (<AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />);
};

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Map');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Directions');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Directions':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

counterActions = (state = {
    value: 0
}, action) => {
    switch (action.type) {
        case 'ADD':
            return _.assign({}, state, {
                value: state.value++
            })
        case 'REDUCE':
            return _.assign({}, state, {
                value: state.value--
            })
        default:
            return state;
    }
}

const AppReducer = combineReducers({
  nav,
  counterActions,
});

export default AppReducer;




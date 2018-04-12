import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import sessionReducer from '../session/sessionReducer';
import socialReducer from '../social/socialReducer';
import itemReducer from '../items/itemReducer';
import { AppNavigator } from '../../components/navigation/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction,
  tempNavState
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'SESSION_SUCCESS':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
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

const AppReducer = combineReducers({
  nav,
  sessionReducer,
  itemReducer,
  socialReducer
});

export default AppReducer;
import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';

const NavMiddleware = createReactNavigationReduxMiddleware(
  "root", thunk, 
  state => state.nav,
);

const middleware = [thunk, NavMiddleware]

const addListener = createReduxBoundAddListener("root");

export {
  middleware,
  addListener,
};
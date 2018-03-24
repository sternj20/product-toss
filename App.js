import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AppReducer from './app/reducers/navigation/navigationReducer';

import AppWithNavigationState from './app/components/navigation/AppNavigator';
import { middleware } from './app/utils/redux';

const store = createStore(
  AppReducer,
  applyMiddleware(...middleware),
);

// // Susbcription
// store.subscribe(() => {
//   console.log('[Susbcription]', store.getState());
// });

class ReduxExampleApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReduxExample', () => ReduxExampleApp);

export default ReduxExampleApp;
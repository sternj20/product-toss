import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import firebase from './src/firebase.js';
import configureStore from './src/store/configureStore';
import ItemList from './src/components/ItemList.js';
import Login from "./src/components/auth/Login.js"

const store = configureStore();
export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
        <Login/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
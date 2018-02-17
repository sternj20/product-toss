import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { vote } from '../actions/counter.js';
import { connect } from 'react-redux';


class Counter extends Component {
  render() {
    return (
      <View style={styles.counterView}>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = (dispatch, props) => ({
  vote: (id, val) => dispatch(vote(id, val)),
})

const styles = StyleSheet.create({
  counterView:{
    flexDirection: 'row'
  },
  counter: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
  voteImg:{
    width:200,
    height:300
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

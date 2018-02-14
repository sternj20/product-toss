import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { posVote, negVote, reset } from '../actions/counter.js';


export default class Counter extends Component {
  render() {
    return (
      <View style={styles.counterView}>
        <Text
          style={styles.counter}
          onPress={reset}>
          Total Votes: {this.props.count}
        </Text>
        <View style={styles.thumbContainer}>
          <Icon name={'thumbs-down'} size={80} onPress={this.props.decrement} style={styles.thumbsDown} />
          <Icon name={'thumbs-up'} size={80} onPress={this.props.increment} style={styles.thumbsUp}/>
        </View>
      </View>
    );
  }
}

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
  },
  thumbContainer:{
    flex:1,
    flexDirection: 'row'
  },
  thumbsUp:{
    color:'green'
  },
  thumbsDown:{
    color:'red'
  }
});
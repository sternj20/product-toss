import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Counter extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('./../../assets/img/elf.jpg')}
          style={styles.voteImg}
        />
        <Text
          style={styles.counter}
          onPress={this.props.reset}>
          Total Votes: {this.props.count}
        </Text>
        <View style={styles.thumbContainer}>
          <Icon name={'thumbs-up'} size={100} onPress={this.props.increment} style={styles.thumbs}/>
          <Icon name={'thumbs-down'} size={100} onPress={this.props.decrement} style={styles.thumbs} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  }
});
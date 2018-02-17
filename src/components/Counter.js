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
import { connect } from 'react-redux';


class Counter extends Component {
  render() {
    return (
      <View style={styles.counterView}>
        <View style={styles.thumbContainer}>
          <Icon name={'thumbs-down'} size={80} onPress={this.props.decrement} style={styles.thumbsDown} />
          <Icon name={'thumbs-up'} size={80} onPress={() => this.props.fetchData(this.props.items._id, this.props.items.posVotes)} style={styles.thumbsUp}/>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = (dispatch, props) => ({
  fetchData: (id, val) => dispatch(posVote(id, val)),
  increment: () => { dispatch({ type: 'DECREMENT' }) },
  decrement: () => { dispatch({ type: 'DECREMENT' }) },
  reset: () => { dispatch({ type: 'RESET' }) },
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { vote } from '../../actions/vote/vote';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
class VotingBar extends Component{
    render(){
      return(
        <View style={styles.container}>
            {this.props.items.map((item, index) => {
                return(
                    <View key={`${index}container`}>
                      <TouchableOpacity onPress={() => this.props.vote(this.props.user.uid, item._id, item.votes)}>
                        <Icon
                          key={`thumb${index}`}
                          name={voteIcon(index, this.props.items.length)}
                          size={80}
                          
                          style={styles.thumbsUp}>
                          </Icon>
                          </TouchableOpacity>
                    </View>
                )
                })}

        </View>
      )
    }
}

const voteIcon = (index, length) => {
  if(index===0 && length > 1) return 'arrow-up'
    return 'arrow-down'
}
const mapStateToProps = state => ({
  items: state.itemReducer.votedImages,
  user: state.sessionReducer.user
})

const mapDispatchToProps = (dispatch, props) => ({
  vote: (uID, val, votes) => dispatch(vote(uID, val, votes))
})

const styles = StyleSheet.create({
  container: {
  marginBottom: 50,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(VotingBar)
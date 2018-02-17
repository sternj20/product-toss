import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { vote } from '../actions/vote.js';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native'
class VotingBar extends Component{
		render(){
			return(
				<View style={styles.view} style={styles.container}>
            {this.props.items.map((item, index) => {
            		return(
            				<View key={`${index}container`}>
        								<Icon
        									key={`thumb${index}`}
        									name={voteIcon(index, this.props.items.length)}
        									size={80}
        									onPress={() => this.props.vote(item._id, item.posVotes)}
        									style={styles.thumbsUp}>
        									</Icon>
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
  items: state.items
})

const mapDispatchToProps = (dispatch, props) => ({
  vote: (id, val) => dispatch(vote(id, val)),
})

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'row',
   top:'-80%'
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(VotingBar)

import React, { Component } from 'react';
import { View, Button, Image, Text, TouchableOpacity } from 'react-native';
import  VotingBar  from '../votingBar/votingBar';
import { itemsFetchData } from '../../actions/items/items'
import { chooseContestToSee } from '../../actions/vote/vote'

import { connect } from 'react-redux';
import { styles } from './styles';


class VotingGallery extends React.Component {

	render(){
		return(
			<View>
		        {this.props.contests.map((item, index) => {

		          return (
		            <View key={`${index}Container`} style={styles.container}>
		            <Image 
		            source={{uri:item.url}} 
		            key={item._id}    
		            style={styles.image}/>
		            </View>
		            )
		        })}
		        <View style={styles.votingBar}>
		          <VotingBar/>
		        </View>
                {this.props.contestToSee.map((submission,index) => {
                    return(
                    <View key={`${index}Container`} style={styles.container}>
                    <Image 
                    source={{uri:submission.url}} 
                    key={submission._id} 
                    style={styles.image}/>
                    </View>
                    )
                })}
                {this.props.contestToSee ? this.props.contestToSee.name : ''}
	        </View>
		)
	}
}

const mapStateToProps = state => ({
	contests: state.itemReducer.contests,
    contestToSee: state.itemReducer.contestToSee
})

const mapDispatchToProps =  {
  fetchData: itemsFetchData,
  chooseContestToSee
};

export default connect(mapStateToProps, mapDispatchToProps)(VotingGallery);

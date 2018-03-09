import React, { Component } from 'react';
import { View, Button, Image, Text } from 'react-native';
import  VotingBar  from '../votingBar/votingBar';
import { itemsFetchData } from '../../actions/items/items'
import { connect } from 'react-redux';
import { styles } from './styles';

class VotingGallery extends React.Component {
	render(){
		return(
			<View>
		        {this.props.items.map((item, index) => {
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
	        </View>
		)
	}
}

const mapStateToProps = state => ({
	items: state.itemReducer.votedImages	
})

const mapDispatchToProps =  {
  fetchData: itemsFetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(VotingGallery);

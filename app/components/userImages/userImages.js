import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';

class userImages extends React.Component {
	render(){
		return(
			<View>
		        <TouchableOpacity style={styles.button} onPress={Actions.home}>
		          <Text style={styles.button}>Back to gallery</Text>
		        </TouchableOpacity>
		        {this.props.userUploads.map((item, index) => {
		          return (
		            <View key={`${index}Container`} style={styles.container}>
		            <Text>{item._id}</Text>
		            <Image 
		            source={{uri:item.url}} 
		            key={item._id} 
		            style={styles.image}/>
		            </View>
		            )
		        })}

			</View>
		)

	}
}

const mapStateToProps = state => ({
	user: state.sessionReducer.user,
	userUploads: state.itemReducer.userUploads
})

const mapDispatchToProps = (dispatch, props) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(userImages)

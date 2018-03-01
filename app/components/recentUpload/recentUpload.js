import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';

class recentUpload extends Component{
	render(){
		return(
			<View>
	            <Image 
	            source={{uri:this.props.recentUpload}} 
	            style={styles.image}/>
		        <TouchableOpacity style={styles.button} onPress={Actions.home}>
		          <Text style={styles.button}>Back to gallery</Text>
		        </TouchableOpacity>
			</View>
		)
	}
}

const mapStateToProps = state => ({
	recentUpload: state.itemReducer.recentUpload
})

export default connect(mapStateToProps)(recentUpload)

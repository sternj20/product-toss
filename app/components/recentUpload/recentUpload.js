import React, { Component } from 'react';
import { View, Text, Image } from "react-native";
import { connect } from 'react-redux';
import { styles } from './styles';

class recentUpload extends Component{
	render(){
		return(
			<View>
	            <Image 
	            source={{uri:this.props.recentUpload}} 
	            style={styles.image}/>
			</View>
		)
	}
}

const mapStateToProps = state => ({
	recentUpload: state.itemReducer.recentUpload
})

export default connect(mapStateToProps)(recentUpload)

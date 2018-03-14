import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { getSingleItem } from "../../actions/items/items"
class userImages extends Component {
	render(){
		return(
			<View>
  			<TouchableOpacity style={styles.button} onPress={Actions.home}>
  		  	<Text style={styles.button}>Back to gallery</Text>
  			</TouchableOpacity>
        <Row size={12}>
    			{this.props.userUploads.map((item, index) => {
    				return (
              <Col key={item._id} sm={4} md={4} lg={3}>
      					<Image 
      					source={{uri:item.url}} 
      					key={item._id} 
                        onPress={this.test}
      					style={styles.image}/>
                        <TouchableOpacity>
                        <Button onPress={() => this.props.getSingleItem(item._id)}  title="show"/>
                        </TouchableOpacity>

    					</Col>
    				)
    			})}
        </Row>      
			</View>
		)
	}
}


const mapStateToProps = state => ({
	user: state.sessionReducer.user,
	userUploads: state.itemReducer.userUploads
})

const mapDispatchToProps = {
    getSingleItem
}


export default connect(mapStateToProps, mapDispatchToProps)(userImages)

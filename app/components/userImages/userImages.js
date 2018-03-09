import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Image, Text } from 'react-native';
import { itemsFetchData } from '../../actions/items/items';
import { styles } from './styles';

class userImages extends React.Component {

    componentDidMount() {
    this.props.fetchData(`https://product-toss-backend.herokuapp.com/api/imgs/${this.props.user.uid}`, 'user');
  }
	render(){
		return(
			<View>

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
  fetchData: itemsFetchData

})

export default connect(mapStateToProps, mapDispatchToProps)(userImages)

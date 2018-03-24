import React, { Component } from 'react';
import { View, Button, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { chooseContestToSee } from '../../actions/vote/vote'
import { connect } from 'react-redux';
import { styles } from './styles';
import { itemsFetchData} from '../../actions/items/items';


class preVsWorld extends React.Component {
    componentDidMount(){
    this.props.fetchData(`http://product-toss-backend.herokuapp.com/api/user/${this.props.user.uid}`);

    }
	render(){
		return(
			<ScrollView>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('vsWorld')}>
                    <Text style={styles.button}>Submission Gallery</Text>
                </TouchableOpacity>
                <Text style={styles.header}>Winner's from last weeks theme: {this.props.contestToSee.name}</Text>
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
	        </ScrollView>
		)                                                                                                                                                                                 
	}
}

const mapStateToProps = state => ({
    user: state.sessionReducer.user,
    archivedContests: state.itemReducer.archivedContests,
    contestToSee: state.itemReducer.contestToSee
})  

const mapDispatchToProps =  {
    fetchData: itemsFetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(preVsWorld);

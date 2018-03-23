import React, { Component } from 'react';
import { View, Button, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { chooseContestToSee } from '../../actions/vote/vote'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { styles } from './styles';


class preVsWorld extends React.Component {

	render(){
		return(
			<ScrollView>
                <TouchableOpacity style={styles.button} onPress={Actions.home}>
                    <Text style={styles.button}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={Actions.vsWorld}>
                    <Text style={styles.button}>Submission Gallery</Text>
                </TouchableOpacity>
                <Text style={styles.header}>Winner's from last weeks theme: {this.props.contestToSee.name}</Text>
                {this.props.contestToSee.submissions.map((submission,index) => {
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
	archivedContests: state.itemReducer.archivedContests,
    contestToSee: state.itemReducer.contestToSee
})  

const mapDispatchToProps =  {
};

export default connect(mapStateToProps, mapDispatchToProps)(preVsWorld);

import React, { Component } from 'react';
import { View, Button, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { chooseContestToSee } from '../../actions/vote/vote'
import { connect } from 'react-redux';
import { styles } from './styles';
import { itemsFetchData, showSingleImageFromOther} from '../../actions/items/items';


class preVsWorld extends React.Component {
	render(){
		return(
			<ScrollView>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('vsWorld')}>
                    <Text style={styles.button}>Submission Gallery</Text>
                </TouchableOpacity>
                <Text style={styles.header}>Winner's from last weeks theme: {this.props.contestToSee.name}</Text>
                {this.props.contestToSee.submissions.map((submission,index) => {
                    let user = {
                        userName: submission.userName,
                        uid: submission.createdBy
                    }
                    return(
                    <TouchableOpacity onPress={() => this.props.showSingleImageFromOther(submission, this.props.navigation, user)} key={`${index}Container`} style={styles.container} >
                    <Image 
                    source={{uri:submission.url}} 
                    key={submission._id} 
                    style={styles.image}
                    />
                    </TouchableOpacity>
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
    showSingleImageFromOther
};

export default connect(mapStateToProps, mapDispatchToProps)(preVsWorld);

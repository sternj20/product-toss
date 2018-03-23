import React, { Component } from 'react';
import { View, Button, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import  VotingBar  from '../votingBar/votingBar';
import { chooseContestToSee } from '../../actions/vote/vote'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { styles } from './styles';


class vsWorld extends React.Component {

    render(){
        return(
            <ScrollView>
                <TouchableOpacity style={styles.button} onPress={Actions.home}>
                    <Text style={styles.button}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={Actions.votingGallery}>
                    <Text style={styles.button}>Submission Gallery</Text>
                </TouchableOpacity>
                <Text style={styles.header}>This week's theme is {this.props.images[0].name}</Text>
                {this.props.images[0].submissions.map((submission,index) => {
                    return(
                    <View key={`${index}Container`} style={styles.container}>
                    <Image 
                    source={{uri:submission.url}} 
                    key={submission._id} 
                    style={styles.image}/>

                    </View>
                    )
                })}
                <VotingBar/>
            </ScrollView>
        )                                                                                                                                                                                 
    }
}

const mapStateToProps = state => ({
    images: state.itemReducer.activeContest
})  

const mapDispatchToProps =  {

};

export default connect(mapStateToProps, mapDispatchToProps)(vsWorld);

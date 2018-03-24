import React, { Component } from 'react';
import { View, Button, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import  VotingBar  from '../votingBar/votingBar';
import { chooseContestToSee } from '../../actions/vote/vote'
import { connect } from 'react-redux';
import { styles } from './styles';


class vsWorld extends React.Component {

    render(){
        return(
            <ScrollView>
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

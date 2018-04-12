import React, { Component } from 'react';
import { View, Button, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { chooseContestToSee } from '../../actions/vote/vote'
import { connect } from 'react-redux';
import { styles } from './styles';
import { itemsFetchData, showSingleImageFromOther, showSingleImage} from '../../actions/items/items';
import { imgNavHelper } from "../../utils/helpers.js"


class preVsWorld extends React.Component {
    static navigationOptions = ({navigation}) => {
    const { params } = navigation.state;
    return{
        headerTitle: () => (
          <View style={styles.headerWrapper}>
            <Text
              adjustsFontSizeToFit
              style={styles.headerText}>VS-world</Text>
          </View>
        )
    }
}
	render(){
		return(
            <View style={styles.container}>
    			<ScrollView>
                    {this.props.contestToSee.submissions.map((submission,index) => {
                        let user = {
                            userName: submission.userName,
                            uid: submission.createdBy
                        }
                        return(
                        <TouchableOpacity onPress={() => imgNavHelper(submission, this.props, user)} key={`${index}Container`} style={styles.container} >
                        <Image 
                        source={{uri:submission.url}} 
                        key={submission._id} 
                        style={styles.image}
                        />
                        </TouchableOpacity>
                        )
                    })}
    	        </ScrollView>
                <TouchableOpacity style={styles.submissionGallery} onPress={() => this.props.navigation.navigate('vsWorld')}>
                    <Text style={styles.headerText}>Submissions Gallery</Text>
                </TouchableOpacity>
            </View>
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
    showSingleImageFromOther,
    showSingleImage
};

export default connect(mapStateToProps, mapDispatchToProps)(preVsWorld);

// this.props.contestToSee.name
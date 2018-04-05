import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { seeFriendsData, deleteImage} from '../../actions/items/items'
import {navigateToComponent} from "../../utils/helpers.js"

class singleImage extends Component {

    componentDidMount() {

        this.props.navigation.setParams({
            singleImage: this.props.singleImage,
        });
    }


    static navigationOptions = ({navigation}) => {
        const navigationHelper = (params) => {
            if (params.otherUser){
                navigation.dispatch(seeFriendsData(navigation, params.otherUser))
            } else {
                navigateToComponent(navigation, params.user, 'userImages')
            }
    }
    const { params } = navigation.state;
    return{
        headerTitle: () => (
          <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={()=>navigationHelper(params)}>
            <Text
              adjustsFontSizeToFit
              style={styles.headerText}>{params.otherUser ? params.otherUser.userName : params.user.email.split('@')[0] }</Text>
            </TouchableOpacity>
          </View>
        )
    }
}

    render(){
        return(
            <View>
                <View>
                    <Image 
                    source={{uri:this.props.singleImage.url}} 
                    style={styles.image}/>
                </View>
                <Button onPress={() => deleteImage(this.props.user.uid, this.props.singleImage.url, this.props.singleImage._id)}  title="delete"/>

            </View>
        )
    }
}


const mapStateToProps = state => ({
    singleImage: state.itemReducer.singleImage,
    user: state.sessionReducer.user
})

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(singleImage)

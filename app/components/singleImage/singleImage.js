import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { seeFriendsData, deleteImage } from '../../actions/items/items'
import {navigateToComponent} from "../../utils/helpers.js"

class singleImage extends Component {
    componentDidMount(){
        this.props.navigation.setParams({
            navigateToComponent,
            user: this.props.user
        });
    }
    render(){
        return(
            <View>
                <TouchableOpacity onPress={() => navigateToComponent(this.props.navigation, this.props.user, 'userImages')}>
                    <View style={styles.user}>
                        <MaterialIcons name="face" size={50}/>
                        <Text style={styles.userHeader}>{this.props.singleImage.userName}</Text>
                    </View>
                </TouchableOpacity>
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
    seeFriendsData
}


export default connect(mapStateToProps, mapDispatchToProps)(singleImage)

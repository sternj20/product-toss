import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { seeFriendsData } from '../../actions/items/items'

class singleImage extends Component {
    render(){
        return(
            <View>
                <TouchableOpacity onPress={()=>this.props.seeFriendsData(this.props, this.props.singleImage.createdBy)}>
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

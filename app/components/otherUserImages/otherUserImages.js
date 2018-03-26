import React, { Component } from 'react';
import { View, Button, Image, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

 class otherUserImages extends Component {
    render(){

        return(
            <View><Text>Hi</Text></View>
        )
    }
}


const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(otherUserImages)
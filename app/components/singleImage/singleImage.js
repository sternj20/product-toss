import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
class singleImage extends Component {
    render(){
        return(
            <View><Text>hi</Text></View>
        )
    }
}


const mapStateToProps = state => ({

})

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(singleImage)

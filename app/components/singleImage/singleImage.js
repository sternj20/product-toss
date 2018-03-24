import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

class singleImage extends Component {
    render(){
        return(
            <View>
                <TouchableOpacity style={styles.button} onPress={Actions.userImages}>
                <Text style={styles.button}>Back to your images</Text>
                </TouchableOpacity>
                <Image 
                source={{uri:this.props.singleImage.url}} 
                style={styles.image}/>
                <Text>hi</Text>
            </View>
        )
    }
}


const mapStateToProps = state => ({
    singleImage: state.itemReducer.singleImage
})

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(singleImage)

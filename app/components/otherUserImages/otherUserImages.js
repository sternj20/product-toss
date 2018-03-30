import React, { Component } from 'react';
import { View, Button, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import { styles } from './styles';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux';


export class otherUserImages extends Component {



    render(){
        return(
            <View style={styles.container}> 
                <Text>Hi</Text>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            </View>
        )
    }
}


const mapStateToProps = state => ({


})
 
const mapDispatchToProps = {


}

export default connect(mapStateToProps, mapDispatchToProps)(otherUserImages);

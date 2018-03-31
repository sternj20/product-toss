import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Button, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import { styles } from './styles';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


export class OtherUserImages extends Component {
    static navigationOptions = ({navigation}) => {
    const { params } = navigation.state;
    return{
        headerStyle: {
        backgroundColor: '#f4511e'
        },
        headerTitle: () => (
          <View style={styles.headerWrapper}>
            <Text
              adjustsFontSizeToFit
              style={styles.headerText}></Text>
          </View>
        )
    }
}

    render(){
        return(
            <View style={styles.container}> 
                <View>
                    <Row size={12}>
                        <Col sm={3}>
                            <View>
                                <MaterialIcons name="face" size={100}/>
                            </View>
                        </Col>
                        <Col sm={9}>
                            <Row size={12}>
                                <Col sm={12}>
                                <Text style={styles.followOrEditHeader}>Edit your profile</Text>
                                </Col>
                            </Row>
                            <Row size={12}>
                                <Col sm={4}>
                                    <Text style={styles.userInfoNumbers}>00</Text>
                                </Col>
                                <Col sm={4}>
                                    <Text style={styles.userInfoNumbers}>00</Text>
                                </Col>
                                <Col sm={4}>
                                    <Text style={styles.userInfoNumbers}>00</Text>
                                </Col>
                            </Row>
                            <Row size={12}>
                                <Col sm={4}>
                                    <Text style={styles.userInfoHeader}>Following</Text>
                                </Col>
                                <Col sm={4}>
                                    <Text style={styles.userInfoHeader}>Posts</Text>
                                </Col>
                                <Col sm={4}>
                                    <Text style={styles.userInfoHeader}>Followers</Text>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row size={12}>
                        <Col sm={10}>
                            <Text style={styles.writtenText}>Written text here will be found</Text>
                        </Col>
                        <Col sm={2}>
                            <FontAwesome name="flag-checkered" size={50} color="#f4511e"/>
                        </Col>
                    </Row>
                </View>
                <ScrollView>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                    <Row size={12}>
                    {this.props.othersData.map((item, index) => {
                        return (
                            <Col key={item._id} sm={4} md={4} lg={3}>
                                <TouchableOpacity onPress={() => this.props.showSingleImage(item, this.props.navigation, this.props.user)}>
                                <Image 
                                source={{uri:item.url}} 
                                key={item._id} 
                                style={styles.image}/>
                                </TouchableOpacity>
                            </Col>
                          )
                    })}
                    </Row>
                </ScrollView>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
            </View>
        )
    }
}

                            // <TouchableOpacity>
                            //     <Button onPress={() => this.props.showSingleImage(item, this.props)}  title="show"/>
                            //     <Button onPress={() => this.props.selectContest(item)}  title="submit"/>
                            //     <Button onPress={() => deleteImage(this.props.user.uid, item.url, item._id)}  title="delete"/>

                            // </TouchableOpacity>


import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Button, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import { styles } from './styles';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { followUser} from "../../actions/social/social"


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
              style={styles.headerText}>{params.otherUser.userName}</Text>
          </View>
        )
    }
}

    helper = (props) => {
        let followers = props.othersData.followers
        if(followers.indexOf(props.userID)){
            return true
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
                                <TouchableOpacity onPress={() => this.props.followUser(this.props.userID, this.props.otherID)}>
                                    <Text style={styles.followOrEditHeader}>{this.props.following > -1 ? ' Following' : 'Follow'}</Text>
                                </TouchableOpacity>
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
                    </Row>
                </View>
                <ScrollView>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                    <Row size={12}>
                    {this.props.othersData.map((item, index) => {
                        let user = {
                            userName: item.userName,
                            uid: item.createdBy
                        }
                        return (
                            <Col key={item._id} sm={4} md={4} lg={3}>
                                <TouchableOpacity onPress={() => this.props.showSingleImageFromOther(item, this.props.navigation, user)}>
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



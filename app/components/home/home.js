import React, { Component } from 'react';
import { View, Button, Image, Text } from 'react-native';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator';
import  VotingBar  from '../votingBar/votingBar';
import  VotingGallery  from '../votingGallery/votingGallery';
import { ImagePicker, FileSystem } from 'expo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'



export class Home extends React.Component {
  componentDidMount() {
    this.props.fetchData(`https://product-toss-backend.herokuapp.com/api/user/${this.props.user.uid}`);
  }

  constructor(props) {
    super(props);
  }

  choosePhoto = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      exif: true,
      allowsEditing: false,
      quality: 0.7,
      base64: true
    })
    this.props.upload(pickerResult.uri, this.props.user.uid)
  }
  logout() {
    this.props.logout();
    setTimeout(() => {
      Actions.reset('login');
    }, 100);
  }

  showImages(){
    Actions.reset('userImages')
  }

  createContest(){
    Actions.reset('createContest')
  }

  render() {
    const { loading } = this.props;

    return (
        <View >
            {loading ? <LoadingIndicator color="#ffffff" size="large"/> : 
            <View >
                <Text style={styles.title}>Welcome {this.props.user.email}</Text>
                <Button onPress={this.logout.bind(this)} title="Logout"></Button>
                <Button onPress={this.showImages} title="Your Images"/>
                <Button onPress={this.createContest} title="Create Contest"/>
                <Button onPress={this.choosePhoto.bind(this)} title="Upload Photo"/>
                <VotingGallery/>
                <View style={{ height: 54, backgroundColor: 'white', flexDirection: 'row'}}>
                  <Ionicons name="ios-home" size={34} color="black" style={{ marginTop: 12, marginLeft: 15 }} />
                  <Ionicons name="ios-search" size={34} color="black" style={{ marginTop: 12, marginLeft: 20 }} />
                  <FontAwesome name="diamond" size={34} color="blue" style={{ marginTop: 12, marginLeft: 20 }} />
                  <Ionicons onPress={this.choosePhoto.bind(this)} name="ios-camera" size={34} color="black" style={{ marginTop: 12, marginLeft: 20 }} />
                  <Ionicons name="ios-chatbubbles" size={34} color="black" style={{ marginTop: 12, marginLeft: 20 }} />
                </View>
            </View>}
        </View>
      );
  }
}

import React, { Component } from 'react';
import { View, Button, Image, Text } from 'react-native';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator';
import  VotingBar  from '../votingBar/votingBar';
import  VotingGallery  from '../votingGallery/votingGallery';
import { ImagePicker, FileSystem } from 'expo'

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


  render() {
    const { loading } = this.props;

    return (
      <View >

        {loading ? <LoadingIndicator color="#ffffff"
                                       size="large"/> : <View >
              <Text style={styles.title}>Welcome {this.props.user.email}</Text>
              <Button onPress={this.logout.bind(this)} title="Logout"></Button>
              <Button onPress={this.showImages} title="Your Images"/>
              <Button onPress={this.choosePhoto.bind(this)} title="Upload Photo"/>
            <VotingGallery/></View>}
      </View>
      );
  }
}

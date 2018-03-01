import React, { Component } from 'react';
import { View, Button, Image, Text } from 'react-native';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator';
import  VotingBar  from '../votingBar/votingBar';
import { ImagePicker, FileSystem } from 'expo'

export class Home extends React.Component {
  componentDidMount() {
    this.props.fetchData('https://product-toss-backend.herokuapp.com/api/imgs');
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
    this.props.upload(pickerResult.uri)
  }
  logout() {
    this.props.logout();
    setTimeout(() => {
      Actions.reset('login');
    }, 100);
  }


  render() {
    return (
      <View >
        <View >
          <Text style={styles.title}>Welcome {this.props.user.email}</Text>
          <Button onPress={this.logout.bind(this)} title="Logout"></Button>
          <Button onPress={this.choosePhoto} title="Upload Photo"/>
        </View>
        {this.props.items.map((item, index) => {
          return (
            <View key={`${index}Container`} style={styles.container}>
            <Image 
            source={{uri:item.url}} 
            key={item._id} 
            style={styles.image}/>
            </View>
            )
        })}
        <View style={styles.votingBar}>
          <VotingBar/>
          <Text>{this.props.recentUpload}</Text>
        </View>
      </View>
      );
  }
}

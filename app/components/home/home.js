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
  


  upload = async (uri) => {
    // console.log(uri)
    let apiUrl = 'https://product-toss-backend.herokuapp.com/api/imgs/';

  // Note:
  // Uncomment this if you want to experiment with local server
  //
  // if (Constants.isDevice) {
  //   apiUrl = `https://your-ngrok-subdomain.ngrok.io/upload`;
  // } else {
  //   apiUrl = `http://localhost:3000/upload`
  // }

  let uriParts = uri.split('.');
  let fileType = uriParts[uriParts.length - 1];

  let formData = new FormData();
  formData.append('photo', {
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`,
  });
  console.log(formData)
  let options = {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };

  return fetch(apiUrl, options);
}
choosePhoto = async () => {
  let pickerResult = await ImagePicker.launchImageLibraryAsync({
    exif: true,
    allowsEditing: false,
    quality: 0.7,
    base64: true
  })
  this.upload(pickerResult.uri)
}
logout() {
    // console.log('working')
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
        </View>
      </View>
      );
  }
}

import React, { Component } from 'react';
import { View, Button, Image, Text, TouchableOpacity, Picker, ScrollView } from 'react-native';
import { styles } from './styles';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator';
import  VotingBar  from '../votingBar/votingBar';
import  preVsWorld  from '../preVsWorld/preVsWorld';
import { ImagePicker, FileSystem } from 'expo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'




export class Home extends React.Component {
  componentDidMount() {
    this.props.fetchData(`http://product-toss-backend.herokuapp.com/api/user/${this.props.user.uid}`);
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
    this.props.upload(pickerResult.uri, this.props.user.uid, this.props.user.email)
  }
  logout() {
    this.props.logout();
    setTimeout(() => {
     this.props.navigation.navigate('Main')
    }, 100);
  }



  createContest(){
    Actions.reset('createContest')
  }


  render() {
    const { loading } = this.props;

    return (
        <View style={{flex:1, flexDirection: 'column'}}>
            {loading ? <LoadingIndicator color="#ffffff" size="large"/> : 
            <View >
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('userImages')} style={{flexDirection:'row'}}>
                        <MaterialIcons name="face" size={50}/>
                        <Text style={styles.title}>{this.props.user.email ? this.props.user.email.split('@')[0] : ''}</Text>
                    </TouchableOpacity>

                    <Button style={styles.smallButton} onPress={this.logout.bind(this)} title="Logout"></Button>
                    <Button style={styles.smallButton} onPress={this.createContest} title="Create Contest"/>
                    <FontAwesome name="bars" size={50} color="black" style={{ marginTop: 12, marginLeft:10 }}/>

                </View>
                <ScrollView style={{height:480}}>
                {this.props.followingImages.length > 0 ? this.props.followingImages.map((item, index) => {
                    return(

                        <View key={item._id}>
                            <Text>{item.userName}</Text>
                            <Image 
                            source={{uri:item.url}} 
                            key={item._id} 
                            style={styles.image}/>
                        </View>
                    )
                }) : <Text>'You don't have any friends in your feed! Add some friends you lonely fool!</Text>}


                </ScrollView>
                <View style={{height: 54, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Ionicons name="ios-home" size={50} color="black" style={{ marginTop: 12, marginRight:10 }} />
                    <Ionicons name="ios-search" size={50} color="black" style={{ marginTop: 12, marginLeft: 35 }} />
                    <FontAwesome onPress={() => this.props.navigation.navigate('preVsWorld')} name="diamond" size={50} color="blue" style={{ marginTop: 12, marginLeft: 35 }} />
                    <Ionicons onPress={this.choosePhoto.bind(this)} name="ios-camera" size={50} color="black" style={{ marginTop: 12, marginLeft: 35 }} />
                    <Ionicons name="ios-chatbubbles" size={50} color="black" style={{ marginTop: 12, marginLeft: 35 }} />
                </View>
            </View>

            }
        </View>
      );
  }
}

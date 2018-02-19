import React, { Component } from 'react';
import { View, Button, Image, Text } from 'react-native';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator';
import  VotingBar  from '../votingBar/votingBar';

export class Home extends React.Component {
  componentDidMount() {
      this.props.fetchData('https://product-toss-backend.herokuapp.com/api/imgs');
  }

  constructor(props) {
    super(props);
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
        <View style={styles.container}>

        <View style={styles.marginBox}>
          <Text style={styles.title}>Welcome {this.props.user.email}</Text>
          <Button onPress={this.logout.bind(this)} title="Logout"></Button>
        </View>
        <VotingBar/>
          {this.props.items.map((item, index) => {
              return (
                  <View key={`${index}Container`}>
                      <Image 
                          source={{uri:item.url}} 
                          key={item._id} 
                          style={styles.image}/>
                      <Text key={index}>Votes:{item.votes}</Text>
                  </View>
              )
          })}

      </View>
    );
  }
}

import React, { Component } from 'react';
import { View, Button, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';
import { LoadingIndicator } from '../loadingIndicator/loadingIndicator';

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
        if (!this.props.items) {
            return <Text>Sorry! There was an error loading the items</Text>;
        }

        if (this.props.isLoading) {
            return <Text>Loading…</Text>;
        }

        return (
        <View style={styles.container}>

        <View style={styles.marginBox}>
          <Button onPress={this.logout.bind(this)} title="Logout"></Button>
        </View>
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
        <View>
          <Text style={styles.title}>Welcome {this.props.user.email}</Text>
          <Button onPress={Actions.search} title="Go to Search"></Button>
          <Button onPress={Actions.todolist} title="Start To-Do List"></Button>
        </View>

        <View style={styles.marginBox}>
          <Icon name="logo-github" size={40}/>
          <Text>@skantus</Text>
        </View>

      </View>
    );
  }
}

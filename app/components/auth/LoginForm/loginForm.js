import React, { Component } from 'react';
import { View, Alert, Image, Button, TouchableOpacity, Text } from 'react-native';
import { BasicFormComponent } from '../BasicForm/basicForm';
import { LoadingIndicator } from '../../loadingIndicator/loadingIndicator';
import { styles } from '../BasicForm/styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';

export class LoginFormComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.restore();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.error && this.props.error) {
      Alert.alert('error', this.props.error);
    }
    if(this.props.logged) {
      Actions.reset('home');
    }
  }

  render() {
    const { login, loginDemoUser, loading } = this.props;
    return (
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={{ uri: 'https://lh3.googleusercontent.com/-whXBCDVxIto/Vz2Rsyz-UjI/AAAAAAAAiJc/UjvR-M2b9tY5SyKFkDY6Q_MbusEINRXkQ/w530-h530-n/Firebase_16-logo.png' }}/>
        </View>
        <View style={styles.loginBox}>
          {loading ? <LoadingIndicator color="#ffffff"
                                       size="large"/> :
            <BasicFormComponent buttonTitle={'login'}
                                onButtonPress={login} /> }
        </View>
        <View>
        {loading ? null :

        <View>
        <TouchableOpacity style={styles.button} onPress={Actions.signup}>
          <Text style={styles.buttonTitle}>signup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={loginDemoUser}>
          <Text style={styles.buttonTitle}>demo</Text>
        </TouchableOpacity>
        </View>
   }
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

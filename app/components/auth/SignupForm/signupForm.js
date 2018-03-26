import React, { Component } from 'react';
import { View, Alert, Image } from 'react-native';
import { BasicFormComponent } from '../BasicForm/basicForm';
import { LoadingIndicator } from '../../loadingIndicator/loadingIndicator';
import { styles } from '../BasicForm/styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export class SignupFormComponent extends Component {

  constructor(props) {
    super(props);
  }
  

  render() {
    const { signup, loading } = this.props;
    return (
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={{ uri: 'https://bitbucket.org/repo/e96xBk/images/270609031-Product%20Toss%20Logo.jpg' }}/>
        </View>
        <View style={styles.loginBox}>
            {loading ? <LoadingIndicator color="#ffffff"
                                         size="large"/> :
              <BasicFormComponent buttonTitle={'signup'}
                                  onButtonPress={signup} /> }
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

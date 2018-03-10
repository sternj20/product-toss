import React, {Component} from 'react';
import { styles } from './styles';
import { Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';

import HomeContainer from '../../containers/home/homeContainer';
import SessionContainer from '../../containers/session/sessionContainer';
import SignupContainer from '../../containers/session/signupContainer';
import recentUpload from "../../components/recentUpload/recentUpload.js";
import userImages from "../../components/userImages/userImages.js";

import { RouterRedux } from '../../containers/routes/routesContainer';
import { configureStore } from '../../store/store';

const store = configureStore();

export class Routes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterRedux navigationBarStyle={styles.navBar} tintColor='#ffffff' titleStyle={styles.barButtonTextStyle}>
          <Scene key="root">
            <Scene key="login" component={SessionContainer} title="Login" initial={true}/>
            <Scene key="signup" component={SignupContainer} title="Signup"/>
            <Scene key="home" component={HomeContainer} title="Home"/>
            <Scene key="userImages" component={userImages} title="Your Images"/>
            
            <Scene key="recentUpload" component={recentUpload} title="Recent Upload"/>


          </Scene>
        </RouterRedux>
      </ Provider>
    );
  }
}

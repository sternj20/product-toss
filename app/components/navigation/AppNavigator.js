import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import HomeContainer from "../../containers/home/homeContainer"
import SessionContainer from '../../containers/session/sessionContainer';
import SignupContainer from '../../containers/session/signupContainer';
import { restoreSession } from '../../actions/session/actions';
import preVsWorld from "../preVsWorld/preVsWorld"
import vsWorld from "../vsWorld/vsWorld"

import { addListener } from '../../utils/redux';

export const AppNavigator = StackNavigator({
    Main: { screen: SessionContainer},
    preVsWorld: { screen: preVsWorld },
    vsWorld: { screen: vsWorld },
    signup: { screen: SignupContainer}
});

class AppWithNavigationState extends React.Component {

  componentDidMount() {
    this.props.dispatch(restoreSession());

    
  }
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});


export default connect(mapStateToProps)(AppWithNavigationState);
import React from 'react';
import { View, Text, Button} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session/actions';


class editProfile extends React.Component {

constructor(props) {
    super(props);
}

logout() {
    this.props.logout();
    setTimeout(() => {
        this.props.navigation.navigate('Main')
    }, 100);
}
render() {
    return(
      <View >
      <Text> Edit Profile </Text>
      <Button onPress={this.logout.bind(this)} title="Logout"></Button>

      </View>
      );
}
}

const mapStateToProps = state => ({

})  

const mapDispatchToProps =  {
    logout: logoutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(editProfile);

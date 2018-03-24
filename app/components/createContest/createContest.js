import React, { Component } from 'react';
import { View, Button, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { styles } from './styles';
import { submitContest } from '../../actions/admin/admin';

class createContest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

	render(){
		return(
			<View>
        <TouchableOpacity style={styles.button} onPress={Actions.home}>
          <Text style={styles.button}>Back to gallery</Text>
        </TouchableOpacity>
        <Text>Contest Name:</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <Button onPress={() => this.props.submitContest(this.state.text)} title="Create Contest"/>
      </View>
      )
	}
}

const mapStateToProps = state => ({
  user: state.sessionReducer.user,
  userUploads: state.itemReducer.userUploads
})

const mapDispatchToProps = (dispatch, props) => ({
  submitContest
})

export default connect(mapStateToProps, mapDispatchToProps)(createContest)

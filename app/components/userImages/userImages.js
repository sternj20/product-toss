import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Image, Text, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import { Actions } from 'react-native-router-flux';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { getSingleImage, hideModal } from "../../actions/items/items"
import { submitImageToContest, seeContests} from "../../actions/vote/vote"


class userImages extends Component {

    render(){
        return(
            <View>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                }}>
                    <View style={styles.container}>
                        <View>
                            {this.props.contests.map((item, index) => {
                                return(
                                <Button key={index} title={item.name} onPress={() => this.props.submitImageToContest(item._id, this.props.imageToSubmit)}></Button>
                                )
                            })}
                            <TouchableHighlight
                            onPress={this.props.hideModal}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <TouchableHighlight
                    onPress={() => {
                    this.setModalVisible(true);
                }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>       
                <Row size={12}>
                {this.props.userUploads.map((item, index) => {
                    return (
                        <Col key={item._id} sm={4} md={4} lg={3}>
                            <Image 
                            source={{uri:item.url}} 
                            key={item._id} 
                            onPress={this.test}
                            style={styles.image}/>
                            <TouchableOpacity>
                                <Button onPress={() => this.props.getSingleImage(item._id)}  title="show"/>
                                <Button onPress={() => this.props.seeContests(item)}  title="submit"/>
                            </TouchableOpacity>
                        </Col>
                      )
                })}
                </Row>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            </View>
        )
    }
}


const mapStateToProps = state => ({
	user: state.sessionReducer.user,
	userUploads: state.itemReducer.userUploads,
    contests: state.itemReducer.contests,
    imageToSubmit: state.itemReducer.imageToSubmit,
    modalVisible: state.itemReducer.modalVisible
})

const mapDispatchToProps = {
    getSingleImage,
    submitImageToContest,
    hideModal,
    seeContests
}


export default connect(mapStateToProps, mapDispatchToProps)(userImages)

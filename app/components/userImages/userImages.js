import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Image, Text, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { showSingleImage, hideModal, deleteImage } from "../../actions/items/items"
import { submitImageToContest, selectContest} from "../../actions/vote/vote"


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
                            <Button title={this.props.contest.name} onPress={() => this.props.submitImageToContest(this.props.contest._id, this.props.imageToSubmit)}></Button>
                            <TouchableHighlight
                            onPress={this.props.hideModal}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>      
                <Row size={12}>
                {this.props.userUploads.map((item, index) => {
                    return (
                        <Col key={item._id} sm={4} md={4} lg={3}>
                            <Image 
                            source={{uri:item.url}} 
                            key={item._id} 
                            style={styles.image}/>
                            <TouchableOpacity>
                                <Button onPress={() => this.props.showSingleImage(item, this.props)}  title="show"/>
                                <Button onPress={() => this.props.selectContest(item)}  title="submit"/>
                                <Button onPress={() => deleteImage(this.props.user.uid, item.url, item._id)}  title="delete"/>

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
    contest: state.itemReducer.activeContest,
    imageToSubmit: state.itemReducer.imageToSubmit,
    singleImage: state.itemReducer.singleImage,
    modalVisible: state.itemReducer.modalVisible
})

const mapDispatchToProps = {
    showSingleImage,
    submitImageToContest,
    hideModal,
    selectContest
}


export default connect(mapStateToProps, mapDispatchToProps)(userImages)

import React, { Component } from 'react';
import { View, Button, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import { styles } from './styles';
import {Column as Col, Row} from 'react-native-flexbox-grid';

export class userImages extends Component {

    static navigationOptions = ({navigation}) => {
    const { params } = navigation.state;
    return{
    headerTitle: () => (
      <View style={styles.headerWrapper}>
        <Text
          adjustsFontSizeToFit
          style={styles.headerText}>{params.user.split('@')[0]}</Text>
      </View>
    )
}
  }

    render(){
        return(
            <View style={styles.container}> 
                <View>
                    <Text>Hi</Text>
                    <Text>Hi</Text>
                    <Text>Hi</Text>
                    <Text>Hi</Text>
                    <Text>Hi</Text>
                    <Text>Hi</Text>
                </View>
                <ScrollView>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                    <Row size={12}>
                    {this.props.userUploads.map((item, index) => {
                        return (
                            <Col key={item._id} sm={4} md={4} lg={3}>
                                <Image 
                                source={{uri:item.url}} 
                                key={item._id} 
                                style={styles.image}/>
                            </Col>
                          )
                    })}
                    </Row>
                </ScrollView>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
            </View>
        )
    }
}

                            // <TouchableOpacity>
                            //     <Button onPress={() => this.props.showSingleImage(item, this.props)}  title="show"/>
                            //     <Button onPress={() => this.props.selectContest(item)}  title="submit"/>
                            //     <Button onPress={() => deleteImage(this.props.user.uid, item.url, item._id)}  title="delete"/>

                            // </TouchableOpacity>
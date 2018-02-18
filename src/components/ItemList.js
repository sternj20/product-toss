import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import VotingBar from './VotingBar.js'
class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('https://product-toss-backend.herokuapp.com/api/imgs');
    }
    render() {
        if (this.props.hasErrored) {
            return <Text>Sorry! There was an error loading the items</Text>;
        }

        if (this.props.isLoading) {
            return <Text>Loading…</Text>;
        }

        return (
            <View style={styles.container}>
                <View>
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
                </View>
                <VotingBar/>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop:100,
    width:300,
    height: 200
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
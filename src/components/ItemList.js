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
            <View>
                <View>
                    <Image source={{uri: this.props.items.url}} style={{width:300, height: 300}}/>
                </View>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
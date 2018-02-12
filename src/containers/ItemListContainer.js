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
import ItemList from "../components/ItemList.js"
class ItemListContainer extends Component {
    componentDidMount() {
        itemsFetchData('https://product-toss-backend.herokuapp.com/items');
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
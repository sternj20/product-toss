import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Counter from '../components/Counter.js';


const mapStateToProps = state => ({
  count: state.counter,
  items: state.items
})

const mapDispatchToProps = (dispatch) => ({

  increment: () => { 
  	fetch(`https://product-toss-backend.herokuapp.com/api/imgs/${id}/positive`, {
  		method: 'PUT'
  	}).then((response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
  	dispatch({ type: 'INCREMENT' }) 
  	})
  },
  decrement: () => { dispatch({ type: 'DECREMENT' }) },
  reset: () => { dispatch({ type: 'RESET' }) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
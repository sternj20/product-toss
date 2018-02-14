import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { counter } from './counter.js'

export default combineReducers({
		counter,
    items,
    itemsHasErrored,
    itemsIsLoading
});
import { combineReducers } from 'redux';

import routesReducer from '../reducers/routes/routesReducer';
import sessionReducer from '../reducers/session/sessionReducer';
import itemReducer from '../reducers/items/itemReducer';

export default combineReducers({
	itemReducer,
	routesReducer,
	sessionReducer,
});

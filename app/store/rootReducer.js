import { combineReducers } from 'redux';

import routesReducer from '../reducers/routes/routesReducer';
import counterReducer from '../reducers/counter/counterReducer';
import sessionReducer from '../reducers/session/sessionReducer';
import todolistReducer from '../reducers/todolist/todolistReducer';
import itemReducer from '../reducers/items/itemReducer';

export default combineReducers({
	itemReducer,
	routesReducer,
	counterReducer,
	sessionReducer,
	todolistReducer
});

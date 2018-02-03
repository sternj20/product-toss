import { combineReducers } from 'redux';

import routesReducer from '../reducers/routes/routesReducer';
import counterReducer from '../reducers/counter/counterReducer';
import sessionReducer from '../reducers/session/sessionReducer';

export default combineReducers({
  routesReducer,
  counterReducer,
  sessionReducer,
});

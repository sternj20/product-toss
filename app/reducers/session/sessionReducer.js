import * as types from '../../actions/session/actionsTypes';

const initialState = {
  restoring: false,
  loading: false,
  user: null,
  error: null,
  logged: false
};

const sessionReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SESSION_RESTORING:
      return { ...state, restoring: true, logged: false }
    case types.SESSION_LOADING:
      return { ...state, restoring: false, loading: true, error: null, logged: false }
    case types.SESSION_SUCCESS:
      return { restoring: false, loading: false, user: action.user, error: null, logged: true }
    case types.SESSION_ERROR:
      return { restoring: false, loading: false, user: null, error: action.error, logged: false }
    case types.SESSION_LOGOUT:
      return initialState
    default:
      return state
  }
}

export default sessionReducer;

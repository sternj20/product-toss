import firebaseService from '../../enviroments/firebase';
import * as types from './actionsTypes';

export const restoreSession = () => (
  dispatch => {
    dispatch(sessionLoading());
    dispatch(sessionRestoring());

    firebaseService.auth()
      .onAuthStateChanged(user => {
        if (user) {
          dispatch(sessionSuccess(user));
        } else {
          dispatch(sessionLogout());
        }
      });
  }
);

export const loginUser = (email, password) => (
  dispatch => {
    dispatch(sessionLoading());

    firebaseService.auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch(sessionSuccess(user));
      })
      .catch(error => {
        dispatch(sessionError(error.message));
      });

  }
);

export const loginDemoUser = (email, password) => (
  dispatch => {
    dispatch(sessionLoading());

    firebaseService.auth()
      .signInWithEmailAndPassword('test@test.com', 'testing')
      .then(user => {
        dispatch(sessionSuccess(user));
      })
      .catch(error => {
        dispatch(sessionError(error.message));
      });

  }
);

export const signupUser = (email, password) => (
  dispatch => {
    dispatch(sessionLoading());

    firebaseService.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        let options = {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
        };
        return fetch('https://product-toss-backend.herokuapp.com/api/user/new/', options)
        dispatch(signupSuccess(user));

      })
      .catch(error => {
        dispatch(sessionError(error.message));
      });
  }
);

export const logoutUser = () => (
  dispatch => {
    dispatch(sessionLoading());

    firebaseService.auth()
      .signOut()
      .then(() => {
        dispatch(sessionLogout());
      })
      .catch(error => {
        dispatch(sessionError(error.message));
      });
  }
);

const sessionRestoring = () => ({
  type: types.SESSION_RESTORING
});

export const sessionLoading = () => ({
  type: types.SESSION_LOADING
});

export const loadingSuccess = () => ({
  type: types.LOADING_SUCCESS
});

const sessionSuccess = user => ({
  type: types.SESSION_SUCCESS,
  user
});

const signupSuccess = user => ({
  type: types.SIGNUP_SUCCESS,
  user
});

const sessionError = error => ({
  type: types.SESSION_ERROR,
  error
});

const sessionLogout = () => ({
  type: types.SESSION_LOGOUT
});

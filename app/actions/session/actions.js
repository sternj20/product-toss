import firebaseService from '../../enviroments/firebase';
import { SESSION_RESTORING,
         SESSION_LOADING,
         SESSION_SUCCESS,
         SESSION_ERROR,
         SESSION_LOGOUT } from './actionsTypes';

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

export const signupUser = (email, password) => (
  dispatch => {
    dispatch(sessionLoading());

    firebaseService.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        dispatch(sessionSuccess(user));
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
  type: SESSION_RESTORING
});

const sessionLoading = () => ({
  type: SESSION_LOADING
});

const sessionSuccess = user => ({
  type: SESSION_SUCCESS,
  user
});

const sessionError = error => ({
  type: SESSION_ERROR,
  error
});

const sessionLogout = () => ({
  type: SESSION_LOGOUT
});

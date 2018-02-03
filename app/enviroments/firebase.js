import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBx0YuFCeqedFUGgpmdZOr7T7wGzyXXXX",
  authDomain: "XXXX-XXXX.firebaseapp.com",
  databaseURL: "https://XXXX-XXXX.firebaseio.com",
  projectId: "XXXX-XXXX",
  storageBucket: "XXXX-XXXX.appspot.com",
  messagingSenderId: "67797471XXXX"
}

let instance = null;

class FirebaseService {
  constructor() {
    if (!instance) {
      this.app = firebase.initializeApp(config);
      instance = this;
    }
    return instance;
  }
}

const firebaseService = new FirebaseService().app;
export default firebaseService;

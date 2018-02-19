import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBkAyVaVZGKE4uexiuCzvwAfSWJ_56tELg",
  authDomain: "product-toss.firebaseapp.com",
  databaseURL: "https://product-toss.firebaseio.com",
  projectId: "product-toss",
  storageBucket: "product-toss.appspot.com",
  messagingSenderId: "621287710137"
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


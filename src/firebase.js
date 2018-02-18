import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBkAyVaVZGKE4uexiuCzvwAfSWJ_56tELg",
    authDomain: "product-toss.firebaseapp.com",
    databaseURL: "https://product-toss.firebaseio.com",
    projectId: "product-toss",
    storageBucket: "",
    messagingSenderId: "621287710137"
};
firebase.initializeApp(config);

export default firebase;
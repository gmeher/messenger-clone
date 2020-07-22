import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAAQDxJ75X4MnDSmCRb36hjAiZMT4LbG0Q",
    authDomain: "messenger-clone-gmeher360.firebaseapp.com",
    databaseURL: "https://messenger-clone-gmeher360.firebaseio.com",
    projectId: "messenger-clone-gmeher360",
    storageBucket: "messenger-clone-gmeher360.appspot.com",
    messagingSenderId: "601122241624",
    appId: "1:601122241624:web:3b93c9419232c6042cde2d"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
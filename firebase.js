import firebase from './firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA0S3kqei5RKgQx11SrogPskeAoogtnsjk",
    authDomain: "twitter-clone-aa567.firebaseapp.com",
    projectId: "twitter-clone-aa567",
    storageBucket: "twitter-clone-aa567.appspot.com",
    messagingSenderId: "357717468031",
    appId: "1:357717468031:web:88669f8281d509877eb04a",
    measurementId: "G-VJ5GKBY4NL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
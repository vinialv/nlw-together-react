import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGIN_SENDER_ID,
    appId: process.env.APP_ID
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export {firebase, auth, database}
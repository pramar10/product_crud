import * as firebase from 'firebase';
const firebaseConf = {
  apiKey: 'AIzaSyAqfDeL2Xg2EFGV6TOaFEpqAytmUPCPWtI',
  authDomain: 'product-app-be689.firebaseapp.com',
  databaseURL: 'https://product-app-be689-default-rtdb.firebaseio.com',
  projectId: 'product-app-be689',
  storageBucket: 'product-app-be689.appspot.com',
  messagingSenderId: '526856561627',
  appId: '1:526856561627:web:b5a9e9c868363b0b61fdfe',
  measurementId: 'G-87L2SVQL0N',
};

// Initialize Firebase
firebase.initializeApp(firebaseConf);

export default firebase;

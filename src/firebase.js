import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBYRExjLb9EZqlr-OHkBXpbKWPLrjf-vKU",
  authDomain: "backup3-cc72b.firebaseapp.com",
  projectId: "backup3-cc72b",
  storageBucket: "backup3-cc72b.appspot.com",
  messagingSenderId: "87944667159",
  appId: "1:87944667159:web:9c6bf7c5174126f1ecbc52",
  measurementId: "G-CGQPGM0GLQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider , firebaseApp};
export default db;

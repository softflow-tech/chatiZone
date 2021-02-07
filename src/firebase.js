import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDoVvhdN7KxKH2hVkZlEBUJ8l_aIaPUeCo",
  authDomain: "chatizone-backend.firebaseapp.com",
  databaseURL: "https://chatizone-backend-default-rtdb.firebaseio.com",
  projectId: "chatizone-backend",
  storageBucket: "chatizone-backend.appspot.com",
  messagingSenderId: "48748900817",
  appId: "1:48748900817:web:e4b4133c8ec6150396f0f0",
  measurementId: "G-CTDT2YMVQ0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider , firebaseApp};
export default db;

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKWT1YwxRtyXC9r9C8pzByFmh315rYX1k",
  authDomain: "clone-b035e.firebaseapp.com",
  databaseURL: "https://clone-b035e.firebaseio.com",
  projectId: "clone-b035e",
  storageBucket: "clone-b035e.appspot.com",
  messagingSenderId: "140284323159",
  appId: "1:140284323159:web:bd2bdea13d47fbe5234a12",
  measurementId: "G-6B5SQ8E56Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

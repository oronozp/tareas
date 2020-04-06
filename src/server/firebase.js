import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDwHhsyHKeVLJNGyzIhc3gRbNZ8r9ldp28",
  authDomain: "todo-3cbc9.firebaseapp.com",
  databaseURL: "https://todo-3cbc9.firebaseio.com",
  projectId: "todo-3cbc9",
  storageBucket: "todo-3cbc9.appspot.com",
  messagingSenderId: "661368629080",
  appId: "1:661368629080:web:bd16a9789d1c17da84a72d",
  measurementId: "G-LXWK5CDLNG",
};
firebase.initializeApp(firebaseConfig);

export default firebase;

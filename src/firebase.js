import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBSMuOqsNxzRX62hoDYpnRil1gDs7FbmsE",
  authDomain: "fishstore-57c7d.firebaseapp.com",
  projectId: "fishstore-57c7d",
  storageBucket: "fishstore-57c7d.appspot.com",
  messagingSenderId: "159902122469",
  appId: "1:159902122469:web:d60f92bfc62b87e3782f0c",
  measurementId: "G-9QRB66M2LV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

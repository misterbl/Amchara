import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyDlGJ-JP-hhX4lFMhivAxvSM3Eb2FpUiMk",
  authDomain: "amcharadashboard.firebaseapp.com",
  databaseURL: "https://amcharadashboard.firebaseio.com",
  projectId: "amcharadashboard",
  storageBucket: "",
  messagingSenderId: "829462459365"
};
firebase.initializeApp(config);

export default firebase;

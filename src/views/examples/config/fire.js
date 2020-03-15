import firebase from 'firebase';


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDnbrghr4c8eGh_aTSLTUvCwvNR-PMiwMc",
    authDomain: "argonapp-38794.firebaseapp.com",
    databaseURL: "https://argonapp-38794.firebaseio.com",
    projectId: "argonapp-38794",
    storageBucket: "argonapp-38794.appspot.com",
    messagingSenderId: "734211003267",
    appId: "1:734211003267:web:f982d9483ef30fb11e1cb6",
    measurementId: "G-G0D6KG8KF1"
  };
  // Initialize Firebase
var Fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default Fire;

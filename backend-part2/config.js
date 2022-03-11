// Import the functions you need from the SDKs you need
const firebase = require("firebase");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu2LgZA_nGgzjsWgAzV3B6ZW5Qwj8MOHc",
  authDomain: "full-5e037.firebaseapp.com",
  databaseURL: "https://full-5e037-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "full-5e037",
  storageBucket: "full-5e037.appspot.com",
  messagingSenderId: "1053637252489",
  appId: "1:1053637252489:web:51b35bc567fb26ef1f7d58",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const User = db.collection("Users");
const Fleet = db.collection("Fleets");
const Vehicule = db.collection("Vehicules");

module.exports = {
  User,
  Fleet,
  Vehicule,
};

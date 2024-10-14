const firebase = require("firebase");
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByIps1wDChv-Car3QyvGHJapYQUnauLic",
  authDomain: "telematicaiii.firebaseapp.com",
  projectId: "telematicaiii",
  storageBucket: "telematicaiii.appspot.com",
  messagingSenderId: "934017795194",
  appId: "1:934017795194:web:1be2025138580061f8e7c3"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
module.exports = db
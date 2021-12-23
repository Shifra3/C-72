import  firebase from "firebase"
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyAa0ClvmXjHRSVA9TJxBF9DcfGOt6EDt6I",
    authDomain: "wily-app-60ac0.firebaseapp.com",
    projectId: "wily-app-60ac0",
    storageBucket: "wily-app-60ac0.appspot.com",
    messagingSenderId: "612106340884",
    appId: "1:612106340884:web:329ddf02a0b4410e2ff501"
}
firebase.initializeApp(firebaseConfig)
export default firebase.firestore()
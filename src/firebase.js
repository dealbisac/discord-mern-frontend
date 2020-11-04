import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA6sqaxwSh6wVy0Mi_Vp1zYOY4WKMxuqOM",
    authDomain: "discord-clone-mern-003.firebaseapp.com",
    databaseURL: "https://discord-clone-mern-003.firebaseio.com",
    projectId: "discord-clone-mern-003",
    storageBucket: "discord-clone-mern-003.appspot.com",
    messagingSenderId: "1039030218315",
    appId: "1:1039030218315:web:e91a576c1a786332c567ce",
    measurementId: "G-720KZREXWG"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
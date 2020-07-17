import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyCNcnJQoEB82HHi3Z1rpbPig6s8Nk41mvc",
  authDomain: "clone-7a5ff.firebaseapp.com",
  databaseURL: "https://clone-7a5ff.firebaseio.com",
  projectId: "clone-7a5ff",
  storageBucket: "clone-7a5ff.appspot.com",
  messagingSenderId: "311817984990",
  appId: "1:311817984990:web:4829575fd693f1d5f45b4f",
  measurementId: "G-JWQNTZFWZ7",
});

const auth = firebase.auth();

export { auth };

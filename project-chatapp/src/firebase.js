import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBPRYBFGlsa6aYs47oGWwTh-BJUkBxdzQU",
    authDomain: "messenger-74281.firebaseapp.com",
    projectId: "messenger-74281",
    storageBucket: "messenger-74281.appspot.com",
    messagingSenderId: "359023173546",
    appId: "1:359023173546:web:bfcdf64a67ee4b33c0d5d3",
  })
  .auth();

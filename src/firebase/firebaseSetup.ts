import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBbOjOurOfuittjRY8MDXPhiN26XqD0oao",
  authDomain: "typescript-project-83712.firebaseapp.com",
  databaseURL: "https://typescript-project-83712.firebaseio.com",
  projectId: "typescript-project-83712",
  storageBucket: "typescript-project-83712.appspot.com",
  messagingSenderId: "978950169825",
  appId: "1:978950169825:web:a9a9dc1ae4f7117a7003a0",
  measurementId: "G-0HHK6DTFWD",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();

export const getPersonList = (id: any) => {
  return db.collection("persons").doc(id).get();
};

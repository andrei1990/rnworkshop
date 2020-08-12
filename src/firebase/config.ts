import * as firebaseApp from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd8peQea8JxhpefVPlVi4-uhBKMxCvn_s",
  authDomain: "todo-reactnative-5afe2.firebaseapp.com",
  databaseURL: "https://todo-reactnative-5afe2.firebaseio.com",
  projectId: "todo-reactnative-5afe2",
  storageBucket: "todo-reactnative-5afe2.appspot.com",
  messagingSenderId: "349727030788",
  appId: "1:349727030788:web:04530bb250ec82c860bf51",
};

if (!firebaseApp.apps.length) {
  firebaseApp.initializeApp(firebaseConfig);
}

export default firebaseApp;

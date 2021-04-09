import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import './App.css';

firebase.initializeApp({
  apiKey: "AIzaSyApOEHiPjIFKd27s4J-z0oRzMKAANFvjYU",
  authDomain: "fire-chat-7274f.firebaseapp.com",
  projectId: "fire-chat-7274f",
  storageBucket: "fire-chat-7274f.appspot.com",
  messagingSenderId: "668383367706",
  appId: "1:668383367706:web:309d353d544bbddce077a3",
  measurementId: "G-02WLXWX251"
});

const FireChat = () => {
  return (
    <div className="App">
      Welcome to Fire Chat
    </div>
  );
}

export default FireChat;

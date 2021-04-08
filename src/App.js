import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import './App.css';

firebase.initializeApp({});

const FireChat = () => {
  return (
    <div className="App">
      Welcome to Fire Chat
    </div>
  );
}

export default FireChat;

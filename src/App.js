import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Button from "./Button";
import "./App.css";
import ChatBox from "./ChatBox";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fire-chat-7274f.firebaseapp.com",
  projectId: "fire-chat-7274f",
  storageBucket: "fire-chat-7274f.appspot.com",
  messagingSenderId: "668383367706",
  appId: "1:668383367706:web:309d353d544bbddce077a3",
  measurementId: "G-02WLXWX251",
});

const fireChatAuth = firebase.auth();
const datatbase = firebase.firestore();

const FireChat = () => {
  const [user, setUser] = useState(() => fireChatAuth.currentUser);
  const [initialization, setInitialization] = useState(true);
  const signInWithGoogle = async () => {
    //fetch google auth provider
    const googleAuth = new firebase.auth.GoogleAuthProvider();
    //set the default language
    firebase.auth().useDeviceLanguage();
    //start the sign in process
    try {
      await fireChatAuth.signInWithPopup(googleAuth);
    } catch (err) {
      console.error(err.message);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const subscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
      if (initialization) {
        setInitialization(false);
      }
      //cleanup OR componentWillUnmount
      return subscribe;
    });
  }, [initialization]);

  return (
    <div className="App">
      {user ? (
        <Button onClick={signOut}>Sign Out</Button>
      ) : (
        <Button onClick={signInWithGoogle}>Sign In With Google</Button>
      )}
      <ChatBox user={user} db={datatbase} />
    </div>
  );
};

export default FireChat;

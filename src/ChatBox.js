import React, { useState, useEffect } from "react";
import firebase from "firebase/app";

const ChatBox = ({ user = null, db = null }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { uid, displayName, photoUrl } = user;

  useEffect(() => {
    if (db) {
      const getNewMessages = db
        .collection("messages")
        .orderBy("createdAt")
        .limit(100)
        .onSnapshot((newMessages) => {
          const data = newMessages.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          console.log(data);
          setMessages(data);
        });
      return getNewMessages;
    } else {
      console.log("No Database");
    }
  }, [db]);

  const handleOnChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    db.collection("messages").add({
      text: newMessage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      displayName,
      photoUrl,
    });
  };

  return (
    <>
      <ul>
        {messages.length > 0
          ? messages.map((message) => (
              <li style={{ textAlign: "left" }} key={message.id}>
                {message.text}
              </li>
            ))
          : console.log("No Messages Available!")}
      </ul>
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={handleOnChange}
          value={newMessage}
          type="text"
          placeholder="Type your new message here"
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default ChatBox;

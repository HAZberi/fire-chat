import React, {useState} from "react"

const ChatBox = ({user = null, db = null}) => {
    const [messages, setMessages] = useState([]);
    console.log(user, db);
    return (
        <ul>Lorauser</ul>
    )
}

export default ChatBox;
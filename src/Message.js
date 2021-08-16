import React from 'react';
import "./Message.css";

function Message({message,userImage,user,timestamp}) {
    return (
        <div className="message">
            {<img src={userImage} alt="/"></img>}
            <div className="message_info">
                {<h4>{user} <span className="message_timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span> </h4>}
                {<p>{message}</p>}
            </div>
            
        </div>
    )
}

export default Message

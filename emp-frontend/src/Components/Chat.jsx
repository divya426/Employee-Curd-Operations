import React from 'react'
import { useState } from 'react'

const Chat = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const[listMessages, setListMessages] = useState([]);
    const [response, setResponse] = useState('This is a response from the chat bot.');

   function closeChatButton(){
    setIsOpen(false);
    setMessage('')
    setListMessages([]);
   }


   function handleSubmit(){  
    setListMessages([...listMessages, message]);
    console.log(listMessages);
    setMessage('');
    
   } 

   function handleResponse(){
    setListMessages([...listMessages, response]);

   }



    
  return (
    <div>

      <button className='chat-button' onClick={()=>setIsOpen(!isOpen)}>Chat</button>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Chat</span>
            <button className="close-btn" onClick={() => closeChatButton()}>✖</button>
          </div>
          <div className="chat-body">
            <p>Welcome! How can I help you?</p>
             {listMessages.length > 0 &&
            listMessages.map((msg, index) => (
              <p key={index}>{msg}</p>
              ))
         }

          
            
          </div>
          <div className="chat-footer">
            <input type="text" placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value) } />
            <button className="send-btn" onClick={()=>handleSubmit()}>Send</button>
          </div>
        </div>
      )}

    </div>
  )
}

export default Chat;
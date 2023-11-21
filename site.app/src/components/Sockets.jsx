"use client"

import React, { useEffect, useRef, useState } from 'react'

//async function doSockets() {
//}

console.log('init component');

export default function Sockets() {
  const isSocketConnected = useRef(true);

  const [chat, setChat] = useState('');
  //const ws = useRef(null);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    if (isSocketConnected.current) {
      // open ws connection
      setWs(new window.WebSocket(`ws://127.0.0.1:9876/websocket`));
    }
    isSocketConnected.current = false;
  }, [])

  useEffect(() => {
    if (ws) {
      ws.onopen = () => {
        console.log('connection is on!!');

        // send message
        //ws.send('hello, from next js!!');
      }

      // on: server sending a message
      ws.onmessage = (event) => {
        console.log(event);
        console.log(event.data);
      }
    }
  }, [ws])

  return (
    <div>
      <form 
      onSubmit={(e) => {
        e.preventDefault();
        
        if (ws) {
          ws.send(chat);
        }
      }}
      >
        <input 
        id="chat"
        type="text" 
        name="chat" 
        value={chat}
        onChange={(e) => setChat(e.target.value)}
        />
        <button 
        className={`
        ${!ws ? "bg-red-200" : "bg-green-200"}
        `}
        disabled={!ws}
        type="submit">
          send
        </button>
      </form>
    </div>
  )
}

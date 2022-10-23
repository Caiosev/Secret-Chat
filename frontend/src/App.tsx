import ChatHistory from './components/ChatHistory'
import ChatInput from './components/ChatInput'
import Message from './components/Message'
import {connection, sendMessage} from './api'
import './App.scss'
import { useState } from 'react'

export interface Message {
  timeStamp: string,
  data: string
}


function App() {
  const [chatHistory, setChatHistory] = useState<Message[]>([])
  
  connection((msg : Message)=> {
    console.log('nova mensagem');
    setChatHistory([...chatHistory, msg])
  })
  
  function send (event: React.KeyboardEvent<HTMLInputElement>): void {
    const input = event.target as HTMLInputElement
    if (event.key === 'Enter') {
      sendMessage(input.value);
      input.value = "";
    }
  };
    
  return (
    <div className="App">
      <ChatHistory chatHistory={chatHistory}></ChatHistory>
      <ChatInput send={send}></ChatInput>
    </div>
  )
}

export default App

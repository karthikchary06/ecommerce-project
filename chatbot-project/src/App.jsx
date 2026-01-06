import { useState } from 'react'
import ChatInput from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
import './index.css'
import './App.css'

function App() {
  const [chatMessages, setchatMessages] = useState([{
    message: 'hello chatbot',
    sender: 'user',
    id: 'id1'
  }, {
    message: 'Hello! How can I help you?',
    sender: 'robot',
    id: 'id2'
  }, {
    message: 'can you get me todays date?',
    sender: 'user',
    id: 'id3'
  }, {
    message: 'Today is january 06',
    sender: 'robot',
    id: 'id4'
  }])
  // const chatMessages = array[0]
  // const setchatMessages = array[1]
  // const [chatMessages , setchatMessages] = array
  return (
    <div className="app-container">

      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setchatMessages={setchatMessages} />
    </div>
  )
}
export default App

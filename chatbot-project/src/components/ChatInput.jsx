import { useState } from 'react'
import { chatbot } from 'supersimpledev'

function ChatInput({ chatMessages, setchatMessages }) {
    const [inputText, setInputText] = useState('')

    function saveInputText(event) {
        setInputText(event.target.value)

    }

    function sendMessage() {
        const newChatMessages = [
            ...chatMessages, {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
            }
        ]
        setchatMessages(newChatMessages)

        const response = chatbot.getResponse(inputText)
        setchatMessages([
            ...newChatMessages, {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ]);
        setInputText('')
    }
    return (
        <div className='chat-input-container'>
            <input
                placeholder="Send a message to Chatbot"
                size="30"
                className='chat-input'
                onChange={saveInputText}
                value={inputText}
            />
            <button

                onClick={sendMessage}
                className='send-button'
            >Send</button>
        </div>

    )
}
export default ChatInput
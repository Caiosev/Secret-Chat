import Message from '../Message'
import './styles.scss'

export interface Message {
  timeStamp: string,
  data: string
}

export interface Props {
    chatHistory : Message[],
}

export default function ChatHistory({chatHistory}:Props) {
  
  return (
    <div>
      ChatHistory
      <div className="">
        {chatHistory.map((msg) => <Message key={msg.timeStamp} message={msg.data} />)}
      </div>
    </div>
  )
}

import './styles.scss'

interface Props {
    send: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function ChatInput({send}:Props) {
  return (
    <div className='chat-input'>
        <input type="text" onKeyDown={send}/>
    </div>
  )
}

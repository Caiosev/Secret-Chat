import { useState } from 'react'
import './styles.scss'

export default function Message({message}:any) {
  const [ msg,setMsg ] = useState(JSON.parse(message))

  return (
    <div>{msg.body}</div>
  )
}

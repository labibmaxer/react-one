import { useState } from 'react'
import './App.css'
import Countries from './counties'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Countries />
    </div>
  )
}
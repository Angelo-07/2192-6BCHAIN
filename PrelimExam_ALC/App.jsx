import { useState } from 'react'
import './App.css'
import Demo1 from './components/Demo1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Demo1/>
    <div class="container">
    </div>
    </div>
  )
}

export default App
import { useState } from 'react'
import './App.css'

import Todolist from './components/TodoList'
import './components/Todolist.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Todolist></Todolist>
        
      </div>
      
    </>
  )
}

export default App

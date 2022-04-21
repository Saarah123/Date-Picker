import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { DateRange } from './components/DateRange'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <DateRange/>
    </div>
  )
}

export default App
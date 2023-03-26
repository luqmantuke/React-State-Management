import { useState,useMemo } from 'react'

import './App.css'

function App() {

  const [numbers, setnumbers] = useState([10,20,30])
  const total = useMemo(() => numbers.reduce((acc,number)=> acc+number,0), [numbers])
  const [names, setnames] = useState(['John', "Paul", "George", "Ringo"])
  const sortedNames = useMemo(() => [...names].sort(), [names])

  return (
    <div className="App">
      <div>Total: {total}</div>
      <div>Names: {names.join(", ")}</div>
      <div>SortedNames: {sortedNames.join(", ")}</div>
    </div>
  )
}

export default App

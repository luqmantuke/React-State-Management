import { useState,useMemo } from 'react'

import './App.css'

function SortedList({names}){
  const sortedNames = useMemo(() => {
    [...names].sort()
    console.log("sorted")
  }, [names])
  return       <div>SortedNames: {sortedNames.join(", ")}</div>

}

function App() {

  const [numbers, setnumbers] = useState([10,20,30])
  const total = useMemo(() => numbers.reduce((acc,number)=> acc+number,0), [numbers])
  const [names, setnames] = useState(['John', "Paul", "George", "Ringo"])


  return (
    <div className="App">
      <div>Total: {total}</div>
      <div>Names: {names.join(", ")}</div>
      <SortedList names={names}/>
    </div>
  )
}

export default App

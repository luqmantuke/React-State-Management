import { useState,useEffect } from 'react'


function App() {
  const [names, setnames] = useState([])
  useEffect(() => {
    fetch("/names.json").then((response)=>response.json()).then((data)=>setnames(data))
   
  }, [])
  const [selectedName, setselectedName] = useState(null)
  const [selectedNameDetails, setselectedNameDetails] = useState(null)

  useEffect(() => {
    fetch(`/${selectedName}.json`).then((data)=>setselectedNameDetails(data))
  }, [selectedName])
  console.log({selectedNameDetails})

  return (
    <div className="App">
    <div>Selected Name: {selectedName}</div>
      <div>
        {names.map((name,index)=>(<button onClick={()=>setselectedName(name)} key={index}>{name}</button>))}
      </div>
      <div>
        {JSON.stringify(selectedNameDetails)}
      </div>
    </div>
  )
}

export default App

import { useState,useEffect } from 'react'

function StopWatch(){
  const [time, settime] = useState(0)
  useEffect(() => {
  setInterval(() => {
    settime((time)=>time+1)
  }, 1000);
  }, [])
  
  return <div>Time: {time}</div>
}

function App() {
  const [names, setnames] = useState([])
  useEffect(() => {
    fetch("/names.json").then((response)=>response.json()).then((data)=>setnames(data))
   
  }, [])
  const [selectedNameDetails, setselectedNameDetails] = useState(null)

  const onSelectedNameChange = (name)=>{
    fetch(`/${name}.json`).then((response)=>response.json()).then((data)=>setselectedNameDetails(data))
  
  }
  

  return (
    <div className="App">
      <StopWatch />
      <div>
        {names.map((name,index)=>(<button onClick={()=>onSelectedNameChange(name)} key={index}>{name}</button>))}
      </div>
      <div>
        
        {JSON.stringify(selectedNameDetails)}
      </div>
    </div>
  )
}

export default App

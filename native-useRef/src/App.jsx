import { useEffect,useRef,useState } from 'react'

import './App.css'

function App() {
  const inputRef = useRef(null)
  const idRef = useRef(1);

  const [names, setNames] = useState([
    {'id': idRef.current++, 'name': 'John'},
    {'id': idRef.current++, 'name': 'Jane'}
  ])

  
  useEffect(() => {
      inputRef.current.focus()
  
  }, [])

  const onAddNames = ()=>{
    setNames([...names, {'id': idRef.current++, 'name': inputRef.current.value}])
    inputRef.current.value = ""
   }
  
   console.log({names})
  return (
    <div className="App">
      <div>
        <div>
        {names.map((name) => (
          <div key={name.id}>
            {name.id}-{name.name}
          </div>
        ))}
      </div>
      </div>
      <div>
<input type="text" ref={inputRef} />

      </div>
    <button onClick={onAddNames}>
    Add Name
    </button>
    </div>
  )
}

export default App

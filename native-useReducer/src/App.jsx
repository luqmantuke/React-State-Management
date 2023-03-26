import { useReducer } from 'react'


function App() {
  const [state, dispatch] = useReducer((state,action)=>{
    switch (action.type) {
      case "SET_NAME":
        
        return {...state,name:action.payload};
      case "ADD_NAME":
        return {...state, names: [...state.names, state.name], name: ""}
      default:
        break;
    }
  },{
    names: [],
    name: ""
  })
  return (
    <div >
     <input type="text" value={state.name} onChange={(e) => dispatch({type: "SET_NAME", payload: e.target.value})} />
     <div>Names: {state.names.map((name,index)=>{

 <div key={index}>{name}</div>
console.log(name)
     }
      )} </div>

     <button onClick={()=> dispatch({type: "ADD_NAME",})}>Add Name</button>
    </div>
  )
}

export default App

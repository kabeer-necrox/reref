import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  let [val, setVal] = useState("")
  let [item, setItem] = useState("")



  
  return (
    <div className="App">
     <h1>this is usseref</h1>
     <input type='text' value={val} onChange={(e)=>setVal(e.target.value)}/>
     <input type='text' value={item} onChange={(e)=>setItem(e.target.value)}/>
    

  <h3> this is the item{val}</h3>
  <h1> this is the value{item}</h1>
    </div>
  );
}

export default App;

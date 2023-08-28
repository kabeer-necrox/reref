import logo from './logo.svg';
import './App.css';
import React,{useRef} from 'react';

function App() {

  let inputRef = useRef(null) 

  function handleinput(){
    inputRef.current.value= "100"
    inputRef.current.focus()
    console.log("yes it is working")

  }
  return (
    <div className="App">
     <h1>this is usseref</h1>
     <input type='text' ref={inputRef}/>
    

     <button onClick={handleinput}> handle input</button>
    </div>
  );
}

export default App;

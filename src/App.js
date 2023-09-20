import logo from './logo.svg';
import './App.css';
import Todolistref from './Todolistref'
import React, { useEffect } from 'react';
function App() {
  
  var [todo,setTodo]= React.useState([])



    var firstRef = React.useRef()
    var  lasttRef = React.useRef()
    var  ageRef = React.useRef()
  
    useEffect(()=>{
      firstRef.current.focus()
    },[])

  


 function checkEnter(e){
  if(e.key==="Enter")
  lasttRef.current.focus()
 }


  
 
  function checkNext(e){
    
  if(e.key==="Enter")
  ageRef.current.focus()
 }


  return (
    <div className="App">
      <h1>Hello Creating a new Todolist</h1>
      <input type='text' ref= { firstRef} onKeyUp={(ev)=>{checkEnter(ev)}}/>
      <br/>
      <input type='text' ref={lasttRef} onKeyUp={(ev)=>{checkNext(ev)}} />
      <br/>
      
      <Todolistref ref={ageRef}></Todolistref>
    </div>
  );
}

export default App;

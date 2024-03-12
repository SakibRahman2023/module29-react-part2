import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';


function App() {
  
  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = ()=>{
    alert('button clicked2')
  }

    const addToFive = (num) =>{
      alert(num + 5);
    }
  return (
    <>
      
      <h3>React Core Concepts 2</h3>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={()=>{alert('button 3 clicked')}}>third </button>
      <button onClick={() => addToFive(3)}>Four</button>
      
    </>
  )
}

export default App

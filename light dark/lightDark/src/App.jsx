import React, { useState } from 'react'
import Component1 from './components/Component1'
import { createContext } from 'react'

export const Mode=createContext();

const App = () => {
  const [color,setColor]=useState("light");
  return (
    <>
      <button onClick={(e)=>{
        e.preventDefault();
        if(color=="light"){
          setColor("dark")
        }
        else{
          setColor("light")
        }
      }}>Change color</button>

      <Mode.Provider value={color}>
      <Component1/>
      </Mode.Provider>
      
    </>
  )
}

export default App
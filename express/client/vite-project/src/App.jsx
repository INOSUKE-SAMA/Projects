import React from 'react'
import axios from 'axios'

const App = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <form action="">
        <label htmlFor="input">Name : </label>
        <input type="text" placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
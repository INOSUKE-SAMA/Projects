import React from 'react'

const tasks = ({index,element,handleRemove}) => {
  return (
    <>
          <div key={index} className='bg-[#434469] w-[400px] flex justify-between items-center p-2 text-2xl text-white'>
                  <li >{element}</li>
                  <button onClick={handleRemove(index)} className='bg-orange-400' rounded>Remove</button>
                  
                </div>
    </>
  )
}

export default tasks
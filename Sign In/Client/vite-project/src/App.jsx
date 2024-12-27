import React from 'react'

const Login=()=>{
    return(
      <div className='min-h-screen flex justify-center items-center bg-gray-100'>
        
        {/* Login Page */}
        <div className='flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden'>
          
          {/* Left Section */}
          <div className='w-1/2'>
            <img 
              src="image.jpg" 
              alt="Anime" 
              className='w-full h-full object-cover'/>
          </div>
          
          {/* Right Section */}
          <div className='w-1/2 flex flex-col justify-center relative'>

          {/* Upper right nav bar */}
            <div className='absolute top-3 right-3 items-center space-x-4'>
              <select className='bg-gradient-to-r from-red-700 to-orange-600 px-4 py-2 focus:outline-none rounded-full text-purple-50 text-xs transition-all ease-in-out duration-300 appearance-none'>
                <option value="en">Englsih</option>
                <option value="ne">Nepali</option>
              </select>
              <div className='bg-gradient-to-r from-red-700 to-orange-600 px-4 py-2 focus:outline-none transition-all ease-in-out duration-300 rounded-full text-white text-xs hover:scale-105'>Sign Up</div>
            </div>
          </div>

          {/* Form section */}
          <div className='mt-12'>
          <h1 className='text-2xl text-center text-bold text-gray-950 mb-6'>Sign In</h1>
          <form className='space-y-4'>

          </form>
          </div>
        </div>
      </div>
    )
}

export default Login
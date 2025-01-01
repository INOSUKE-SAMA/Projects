import Navbar from "./components/navbar/navbar"
import Home from "./components/Navbar/Home/Home"

function App(){
      return(
        <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
          <Navbar/>
          <Home/>
        </div>
      )
}

export default App
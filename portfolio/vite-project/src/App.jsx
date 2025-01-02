import About from "./components/About/About"
import Navbar from "./components/navbar/navbar"
import Home from "./components/Navbar/Home/Home"
import Experience from "./components/Experience/Experience"


function App(){
      return(
        <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
          <Navbar/>
          <Home/>
          <About/>
          <Experience/>
        </div>
      )
}

export default App
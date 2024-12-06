export  default  function App(){
  return(
    <div className="min-h-screen bg-teal-100 flex items-center justify-center font-sans">
      <div className="bg-white rounded-xl shodow-lg p-8 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 max-w-4xl w-full ">

        {/*Left section*/}
        
      <div className="flex-1 space-y-4">
        
        {/* Bill input */}
        <div>
          <label className="Block text-gray-950 tex-sm mb-4" htmlFor="Bill">Bill</label>
          <input type="number" id="bill" className="w-full bg-teal-50 text-right p-3 rounded-lg border border-gray-300  focus: outline-none focus: ring-2 focus: ring-teal-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"placeholder="0"/>
        </div>

        {/* Tip Selection */}
        <div>
          <p className="text-gray-950 mb-2 text-sm">Select Tip%</p>
          <div className="grid grid-cols-3 gap-3">
            {["5%","10%","15%","25%","50%","Custom"].map((tip,index)=>{
              return <button key={index} className="bg-teal-700 text-white border p-3 rounded-lg hover:bg-teal-500 focus:outline-none">{tip} </button>}
            )}
          </div>
        </div>

        {/* Number of People */}
        <div>
          <label htmlFor="people" className=" text-gray-950 mb-2 text-sm"> Number of people</label>
          <input type="number" id="people" className="w-full bg-teal-50 text-right p-3 rounded-lg border border-gray-300 focus: outline-none focus: ring-2 focus: ring-teal-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="0"/>
        </div>
      </div>

      {/* Right Section */}
    <div className="flex-1 bg-teal-700 text-white rounded-lg p-6 flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm">Tip Amount</p>
          <p className="text-xs text-teal-300">/ Person</p>
        </div>

        <p className="text-3xl font-bold">$0.00</p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm">Total</p>
          <p className="text-xs text-teal-300">/ Person</p>
        </div>
        <p className="text-3xl font-bold">$0.00</p>
        
      </div>
      <button className="mt-auto w-full bg-teal-500 hover:bg-teal-400 text-teal-900 font font-semibold rounded-lg p-3 focus:outline-none">RESET</button>
    </div>
  
  </div>
  </div>
  )
}
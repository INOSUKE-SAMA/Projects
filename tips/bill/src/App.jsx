import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(""); 
  const [tip, setTip] = useState(null); 
  const [customTip, setCustomTip] = useState(""); 
  const [people, setPeople] = useState(""); 

  // Derived values
  const billAmount = parseFloat(bill);
  const numPeople = parseInt(people);
  const effectiveTip = tip === "Custom" ? parseFloat(customTip)  : tip ;
  const tipAmount = numPeople > 0 ? (billAmount * (effectiveTip / 100)) / numPeople : 0;
  const totalPerPerson = numPeople > 0 ? billAmount / numPeople + tipAmount : 0;

  // Reset function
  const resetHandler = () => {
    setBill("");
    setTip(null);
    setCustomTip("");
    setPeople("");
  };

  return (
    <div className="min-h-screen bg-teal-100 flex items-center justify-center font-sans">
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 max-w-4xl w-full ">

        {/* Left Section */}
        <div className="flex-1 space-y-4">
          {/* Bill Input */}
          <div>
            <label className="block text-gray-950 text-sm mb-2" htmlFor="bill">Bill</label>
            <input
              type="number"
              id="bill"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              className="w-full bg-teal-50 text-right p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder=""
            />
          </div>

          {/* Tip Selection */}
          <div>
            <p className="text-gray-950 mb-2 text-sm">Select Tip %</p>
            <div className="grid grid-cols-3 gap-3">
              {["5%", "10%", "15%", "25%", "50%", "Custom"].map((label, index) => (
                <button
                  key={index}
                  onClick={() => setTip(label === "Custom" ? "Custom" : parseFloat(label))}
                  className={`p-3 rounded-lg border text-white ${
                    tip === label ? "bg-teal-500" : "bg-teal-700 hover:bg-teal-500"
                  } focus:outline-none`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Custom Tip Input */}
            {tip === "Custom" && (
              <input
                type="number"
                value={customTip}
                onChange={(e) => setCustomTip(e.target.value)}
                className="w-full mt-3 bg-teal-50 text-right p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="Enter Custom Tip %"
              />
            )}
          </div>
          {/* Number of People */}
          <div>
            <label className="block text-gray-950 mb-2 text-sm" htmlFor="people">Number of People</label>
            <input
              type="number"
              id="people"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="w-full bg-teal-50 text-right p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder=""
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-teal-700 text-white rounded-lg p-6 flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm">Tip Amount</p>
              <p className="text-xs text-teal-300">/ Person</p>
            </div>
            <p className="text-3xl font-bold">${tipAmount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm">Total</p>
              <p className="text-xs text-teal-300">/ Person</p>
            </div>
            <p className="text-3xl font-bold">${totalPerPerson.toFixed(2)}</p>
          </div>
          <button
            onClick={resetHandler}
            className="mt-auto w-full bg-teal-500 hover:bg-teal-400 text-teal-900 font-semibold rounded-lg p-3 focus:outline-none"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

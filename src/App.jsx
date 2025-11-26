import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState("usd");
  const [currencyTo, setCurrencyTo] = useState("pkr");

  const data = useCurrencyInfo(currencyFrom, currencyTo);

  const converted = data ? (amount * data).toFixed(2) : "Loading...";

  return (
    <>
      <div className='flex justify-center'>
        <div className='w-[700px] p-4 bg-gray-400 rounded mt-10 text-black'>
          <div>
            <p className='font-semibold text-[24px]'>CurrencyConverter</p>
          </div>
          <div className='mt-8'>
            <p>Enter Amount: </p>
          </div>
          <div>
            <input
              type="number"
              className='bg-white'
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className='flex justify-between px-4 pt-3'>
            <p>Convert From: </p>
            <p>Convert To: </p>
          </div>

          <div className='flex justify-between px-4'>
            <select className='bg-blue-400 px-5 py-2' onChange={(e) => setCurrencyFrom(e.target.value)}>
              <option value="usd">USD</option>
              <option value="pkr">PKR</option>
              <option value="eur">EUR</option>
            </select>
            <select className='bg-blue-400 px-5 py-2' onChange={(e) => setCurrencyTo(e.target.value)}>
              <option value="pkr">PKR</option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
            </select>
          </div>

          <div className='mt-5'>
            <p>
              {data
                ? `${amount} ${currencyFrom.toUpperCase()} = ${converted} ${currencyTo.toUpperCase()}`
                : "Fetching latest exchange rate..."
              }
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  // const [count, setCount] = useState(0)
  
  let currency = "usd";

  const data = useCurrencyInfo(currency);

  return (
    <>
      <div className='flex justify-center'>
        <div className='w-[700px] p-4 bg-gray-400'>
          <div>
            <p>CurrencyConverter</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

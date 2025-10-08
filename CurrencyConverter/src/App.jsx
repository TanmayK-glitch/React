import { useState } from 'react'
import './App.css'
import { InputBox } from './Components';
import useCurrencyInfo from './Hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr")
  const [to, setTo] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo, loading } = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo).length > 0 ? Object.keys(currencyInfo) : ['usd', 'inr', 'eur', 'gbp'];

  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    } else {
      // Fallback conversion rates (approximate)
      const fallbackRates = {
        'usd': 1,
        'inr': 83,
        'eur': 0.85,
        'gbp': 0.73
      };
      if (fallbackRates[to] && fallbackRates[from]) {
        setConvertedAmount((amount / fallbackRates[from]) * fallbackRates[to]);
      }
    }
  }
 
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gray-100">
        <div className="text-2xl font-bold text-blue-600">Loading currencies...</div>
      </div>
    );
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url(https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg)`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            onAmountChange={setAmount}
                            onCurrencyChange={setFrom}
                            currencyOptions={options}
                            selectCurency={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            onAmountChange={setConvertedAmount}
                            onCurrencyChange={setTo}
                            currencyOptions={options}
                            selectCurency={to}
                            amountDisable={true}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App

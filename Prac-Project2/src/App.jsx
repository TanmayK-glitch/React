import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h2 className='text-3xl bg-red-400 p-2 mt-10 rounded'>Practice Project</h2>
    </div>
    </>
  );
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="flex justify-center gap-4 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="w-32 h-32 transition-transform duration-300 hover:scale-110"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="w-32 h-32 transition-transform duration-300 hover:scale-110 animate-spin"
            alt="React logo"
            style={{ animationDuration: '10s' }}
          />
        </a>
      </div>
      
      <h1 className="text-4xl font-bold text-center mb-8 text-slate-800">
        Vite + React + Tailwind
      </h1>
      
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto mb-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="w-full bg-slate-900 text-white px-6 py-3 rounded-lg 
                   hover:bg-slate-700 transition-colors duration-200 font-medium"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-600 text-center">
          Edit <code className="font-mono bg-gray-100 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="text-center text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

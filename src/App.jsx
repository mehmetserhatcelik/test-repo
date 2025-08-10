import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  const increment = () => {
    setCount(count + 2)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Simple Counter App</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Counter: {count}</h2>
        <button onClick={increment} style={{ marginRight: '10px', padding: '8px 16px' }}>
          Increment
        </button>
        <button onClick={decrement} style={{ marginRight: '10px', padding: '8px 16px' }}>
          Decrement
        </button>
        <button onClick={reset} style={{ padding: '8px 16px' }}>
          Reset
        </button>
      </div>

      <div>
        <h3>Name Input</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ padding: '8px', marginRight: '10px' }}
        />
        {name && <p>Hello, {name}!</p>}
      </div>
    </div>
  )
}

export default App

import React from 'react'
import { useState } from 'react'

const StepControl = () => {
  const [count, setCount] = useState(1)
  const [step, setStep] = useState(1)
  const [show, setShow] = useState(true)

  const handleChange = (e) => {
    setStep(Number(e.target.value))
  }

  const increment = () => {
    setCount(count + step);
  }

  const decrement = () => {
    setCount(count - step);
  }

  const reset = () => {
    setCount(step);
  }

  const visible = () => {
    setShow(!show)
  }

  return (
    <div>
      <h1>Step Control</h1>
      <input
        type="text"
        value={step}
        placeholder='type a number for step count'
        onChange={handleChange}
      />
      {show && <h5>Current count: {count}</h5>}
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
      <button onClick={reset}>
        Reset
      </button>
      <button onClick={visible}>
        {show ? "Hide counter" : "Show counter"}
      </button>
    </div>
  )
}

export default StepControl
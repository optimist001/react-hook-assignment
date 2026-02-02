import React from 'react'
import { useState } from 'react'

const StepControl = () => {
    const [step, setStep] = useState(1)
    const [input, setInput] = useState(0)

    let stepCount = Number(input);
  return (
    <div>
        <h1>Step Control</h1>
        <input 
        type="text" 
        value={stepCount}
        placeholder='type a number for step' 
        onChange={(e) => setInput(Number(e.target.value))}
        />
        <h5>Current count: {step}</h5>
        <button onClick={() => setStep(step + stepCount)}>
          Increment
        </button>
        <button onClick={() => setStep(step - stepCount)}>
          Decrement
        </button>
        <button onClick={() => setStep(1)}>
          Reset
        </button>
        </div>
  )
}

export default StepControl
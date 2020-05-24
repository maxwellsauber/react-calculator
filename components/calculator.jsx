import React, { useState } from 'react'

export default () => {
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')
  const [numOne, setNumOne] = useState('')
  const [numTwo, setNumTwo] = useState('')
  const [operator, setOperator] = useState('')

  const runCalculation = () => {
    const n1 = Number(numOne)
    const n2 = Number(numTwo)
    if (n1 && n2) {
      if (error) setError('')
      switch (operator) {
        case 'devide':
          setAnswer(n1 / n2)
          break
        case 'multiply':
          setAnswer(n1 * n2)
          break
        case 'subtract':
          setAnswer(n1 - n2)
          break
        default:
          setAnswer(n1 + n2)
      }
    } else {
      setError('Please provide a number for both operands.')
      setAnswer('')
    }
  }
  return (
    <div className="page">
      <h1>React Calculator</h1>
      <input type="text" onChange={(e) => { setNumOne(e.target.value) }} />
      <select className="operator" defaultValue="add" onChange={(e) => { setOperator(e.target.value) }}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="devide"> / </option>
      </select>
      <input type="text" onChange={(e) => { setNumTwo(e.target.value) }} />
      <button type="button" className="equals" onClick={runCalculation}> = </button>
      <input name="answer" disabled defaultValue={answer} />
      <div className="error">{error ? `${error}` : null}</div>
    </div>
  )
}

import React, { useState } from 'react'

export const Calculator2 = () => {
  const [inputValues, setInputValues] = useState({
    input1: 1,
    input2: 1,
    result: 0,
  })

  const inputHandler = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value })
    console.log(inputValues)
  }
  const onPlus = () => {
    setInputValues({
      ...inputValues,
      result: parseInt(inputValues.input1) + parseInt(inputValues.input2),
    })
  }
  const onSh = () => {
    setInputValues({
      ...inputValues,
      result: parseInt(inputValues.input1) / parseInt(inputValues.input2),
    })
  }
  const onMul = () => {
    setInputValues({
      ...inputValues,
      result: parseInt(inputValues.input1) * parseInt(inputValues.input2),
    })
  }
  const onMinus = () => {
    setInputValues({
      ...inputValues,
      result: parseInt(inputValues.input1) - parseInt(inputValues.input2),
    })
  }

  return (
    <div>
      <h1>test</h1>

      <input
        type="number"
        value={inputValues.input1}
        onChange={inputHandler}
        name="input1"
      />
      <button onClick={onPlus}>+</button>

      <button onClick={onSh}>/</button>

      <button onClick={onMinus}>-</button>

      <button onClick={onMul}>*</button>

      <input
        type="number"
        value={inputValues.input2}
        onChange={inputHandler}
        name="input2"
      />
      <h3>Sum:{inputValues.result}</h3>
    </div>
  )
}

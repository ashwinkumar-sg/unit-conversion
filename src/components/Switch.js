import React from 'react'

const Switch = ({unitA, unitB, setUnitA, setUnitB, setOutput,setInput}) => {
  const onSwitch = (event) => {
    event.preventDefault()
    setUnitA(unitB)
    setUnitB(unitA)
    setOutput("")
    setInput("")
    //why it doesn't work??  
    //const output = calculate(input,unitA,unitB)
    //setOutput(output)
  }

  return (
    <div className="switch">
      <button type="button" className="pure-button button-small" onClick={onSwitch}>
        <i className="fas fa-exchange-alt"></i> 
      </button>
    </div>
  )
}

export default Switch 
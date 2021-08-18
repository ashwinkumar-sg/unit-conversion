import React from 'react'

const MeasureSelect = ({ setMeasurement ,setInput,setOutput,setUnitA,setUnitB}) => {
  const onSelectChange = (value) => {
    setMeasurement(value)
    setInput("")
    setOutput("")
    setUnitA("")
    setUnitB("")
  }

  return (
    <div className="mid">
        <select className="select " name="measurements"  onChange={({target}) => onSelectChange(target.value)}>
          <option value="weight">Weight</option>
          <option value="length">Length</option>
          <option value="temperature">temperature</option>
        </select>
        
        
    </div>
  )
}
export default MeasureSelect
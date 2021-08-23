import React from 'react'

const Input = ({measurement,handleChange,changeUnitA,changeUnitB,unitA, unitB, input, output}) => {

  let Data = {
    weights:{
    name: "weights",
    values: ["kilogram","gram","ounce"]
  },
  lengths:{
    name: "lengths",
    values: ["feet", "inches","meter"]
  },
  temperature:{
    name: "temperature",
    values:["fahrenheit","celsius"]
  }
} 
  const selectFirst = (props) => (
      <select className="select" name={props.name} id="select" value={unitA} onChange={changeUnitA}>
        <option  value = "select">select</option>
        {props.values.map((ele) => {
          return <option key={ele} value={ele}>{ele}</option>
        })}
      </select>
  )
  const selectSecond  = (props) => (
       <select className="select" name={props.name} value={unitB} onChange={changeUnitB}>
        <option value = "select">select</option>
        {props.values.map((ele) => {
          return <option  key={ele} value={ele}>{ele}</option>
        })}
      </select>
  )
  return (
    <div>

    <div className="input">
      <input htmlFor="select" type="number"  value={input} placeholder={unitA} onChange={handleChange}/>
      <input type="number"  value={output} placeholder={unitB} readOnly/>
    </div>


    <div className="divselect">
    
    {  measurement === "weight" ? selectFirst(Data.weights) 
      :measurement === "length" ? selectFirst(Data.lengths)
      :measurement === "temperature" ? selectFirst(Data.temperature)
      :selectFirst("")
    }
    {  measurement === "weight" ? selectSecond(Data.weights) 
      :measurement ==="length" ? selectSecond(Data.lengths)
      :measurement === "temperature" ? selectSecond(Data.temperature)
      :selectSecond("")
    }
    

    {/*(()=>{   
      console.log(why this way does't work here)
      switch(measurement){
      case "weight" :
        selectFirst(Data.weights)
        selectSecond(Data.weights)
        break
      case "length" :
        selectFirst(Data.lengths)
        selectSecond(Data.lengths)
        break
      case "temperature" :
        selectFirst(Data.temperature)
        selectSecond(Data.temperature)
      default:
        break
      }})*/}
    </div>

    </div>
  )
}

export default Input

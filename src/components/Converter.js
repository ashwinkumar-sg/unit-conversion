import React, { useState } from 'react'
import MeasureSelect from './MeasureSelect'
import Switch from './Switch'
import Input from './Input'

const Converter = () => {
  const [unitA, setUnitA] = useState("select")
  const [unitB, setUnitB] = useState("select")
  const [measurement, setMeasurement] = useState("weight")
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  
  const calculate = (input,unitA,unitB) =>{
    console.log(`${unitA}&${unitB}`)
    let output = ""
    switch (`${unitA}&${unitB}`) {    
      case "kilogram&gram":
        return input *1000

      case "gram&kilogram":
        return input / 1000;
          
      case "ounce&kilogram":
        return input * 0.02835;
      
      case "ounce&gram":
        return input * 28.349;
      
      case "gram&ounce":
        return input / 28.359;

      case "kilogram&ounce":
        output = input / 0.02835;

      case "meter&feet":
        return input * 3.281;
             
      case "feet&meter":
        return input / 3.281;
        
      case "feet&inches":
        return input *12;

      case "inches&feet":
        return input / 12;

      case "meter&inches":
        return input * 39.37;
          
      case "inches&meter":
        return input / 39.37;
          
      case "fahrenheit&celsius" :
        return (input-32)*0.5556

      case "celsius&fahrenheit" :
        return (input*1.8)+32
      default:
        break 
    }
        
  }

  const changeUnitA = (e) => {
    const unitA = e.target.value
    console.log(unitA,"unitA")
    setUnitA(unitA)

    if(unitA && input && unitB){
      const found = calculate(input,unitA,unitB)
      setOutput(found)
    }
  }

  const changeUnitB = (e) => {
    setOutput("")    
    const unitB = e.target.value
    console.log(unitB,"unitB")
    setUnitB(unitB)

    if(unitA && input && unitB){
      const found = calculate(input,unitA,unitB)
      setOutput(found)
    }
  }
  const handleChange = (e) =>{
    const input1 = e.target.value
    const output2 = calculate(input1,unitA,unitB)
    setOutput(output2)
    setInput(input1)
  }
    /*console.log(input1,"how")
    setInput(input1);
    console.log("input",input)
    calculate(input)
  } */
  
  return (
    
    <div className="container">
      <form className="pure-form"> 
        <fieldset>
          <MeasureSelect 
            measurement={measurement}
            setMeasurement={setMeasurement}
            setInput={setInput}
            setOutput={setOutput}
            setUnitA={setUnitA}
            setUnitB={setUnitB}/>

          <Switch 
            unitA={unitA} 
            unitB={unitB} 
            setUnitA={setUnitA} 
            setUnitB={setUnitB} 
            setOutput={setOutput}
            setInput={setInput}
            input={input}
            calculate={calculate}
            />
          <Input
            handleChange={handleChange}
            measurement={measurement}
            changeUnitA={changeUnitA}
            changeUnitB={changeUnitB}
            unitA={unitA}
            unitB={unitB}
            input={input}
            output={output}
            setInput={setInput}/>
        </fieldset>
      </form>
    </div>
  )
}

export default Converter
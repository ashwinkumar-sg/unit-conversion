const calculate = (input,setOutput,unitA,unitB) =>{
    console.log(`${unitA}&${unitB}`)
    let output = ""
    switch (`${unitA}&${unitB}`) {    
      case "kilogram&gram":
        output = input *1000
        setOutput(output)
        break
      case "gram&kilogram":
        output = input / 1000;
        setOutput(output)
        break    
      case "ounce&kilogram":
        output = input * 0.02835;
        setOutput(output)
        break 
      case "kilogram&ounce":
        output = input / 0.02835;
        setOutput(output)
        break 
      case "meter&feet":
        output = input * 3.281;
        setOutput(output)
        break          
      case "feet&meter":
        output = input / 3.281;
        setOutput(output)
        break  
      case "feet&inches":
        output = input *12;
        setOutput(output)
        break 
      case "inches&feet":
        output = input / 12;
        setOutput(output)
        break
      case "meter&inches":
        output = input * 39.37;
        setOutput(output)
        break      
      case "inches&meter":
        output = input / 39.37;
        setOutput(output)
        break     
      case "fahrenheit&celsius" :
        output = (input-32)*0.5556
        setOutput(output)
      case "celsius&fahrenheit" :
        output = (input*1.8)+32
        setOutput(output)
      default:
        break
    }
        
  }
export default calculate
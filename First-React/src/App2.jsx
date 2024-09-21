import React, { useState } from "react";
import "./App2.css";
import CustomInput from "../public/CustomInput";


const COLORS = ["pink", "green", "blue", "yellow", "purple"];

  function App() {
    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");

  const [person, setPerson] = useState({name: 'John', age: 100})  
  
  const [colorArr] = useState([])

  const[count] = useState([]);
  // alert("b4 onclik: " + count)
  
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    alert("AFTA onclik: " + count)
    //alert(colorArr)
    
    setBackgroundColor(color);
    
    colorArr.push(color);
  

    // alert('count before ifs:  ' + count)
    // alert('colorArr before ifs:  ' + colorArr)
    // alert('whole thing:  ' + colorArr)
    // alert(colorArr[colorArr.length - 1])
    // alert('arr length is:  ' + colorArr.length)

    
    
    if (colorArr.length == 1 && colorArr[0] == COLORS[0]){
      alert('counter not going up cause same color: ' + colorArr[colorArr.length - 1])
    } else if (colorArr.length == 1 && colorArr[0] !== COLORS[0]){
      // alert('it is not he pink and count b4 ++  is: ' + count)
        count.push(1)
        // count = count.length
        // alert('it is not he pink and count is: '+ count)

      }else if (colorArr.length > 1 && color == colorArr[colorArr.length - 2]){
        alert('counter not going up cause same color: ' + colorArr[colorArr.length - 1])
        
      } else if (colorArr.length > 1 && color !== colorArr[colorArr.length - 2]){
        count.push(1)
        // count = count.length
        // alert('it is not he pink and count is: ' + count)
      }
    

      // alert('count After ifs:  ' + count)
      // alert('clourArr After ifs:  ' + colorArr)

    
    
    count++

    setPerson((person) => ({ ...person, age: person.age + 1 }));
    
    setPerson((person) => ({ ...person, age: person.age + 1 }));
    

  };

  // const onButtonClick2 = (count) => () => {
  //   setCount(count++);
    

  // };

  return (
    <>
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
         
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
       
      ))}
     
    </div>
    <div>
      <h1>{person.name} : {person.age}</h1>
      <h1><input
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
    <input
      type="text"
      value={value2}
      onChange={(event) => setValue2(event.target.value)}
    /></h1>
    </div>
    <label className="CountboxLabel"  for="CountBox">Count:</label>
    <div className="CountBox">
      {count.length
      }
      
    </div>
    <div className="CustomInput"><CustomInput /></div>
    
    </>
  );
}

export default App


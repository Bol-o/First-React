import React, { useState } from "react";
import "./App2.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

 export function App() {
  
  const [colorArr] = useState([])

  const[count, setCount] = useState(0);
  
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color, count) => () => {
   
    //alert(colorArr)
    
    setBackgroundColor(color);
    
    colorArr.push(color);

    // alert('whole thing:  ' + colorArr)
    // alert('whole thing:  ' + colorArr)
    // alert(colorArr[colorArr.length - 1])
    // alert('arr length is:  ' + colorArr.length)

    
    
    if (colorArr.length == 1 && colorArr[0] !== COLORS[0]){
        count++

      }else if (colorArr.length > 1 && color == colorArr[colorArr.length - 2]){
        alert('counter not going up cause same color: ' + colorArr[colorArr.length - 1])
      } else if (colorArr.length > 1 && color !== colorArr[colorArr.length - 2]){
        count++
      }
    

    

    
    
    setCount(count)
    

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
          onClick={onButtonClick(color, count)}
         
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
       
      ))}
     
    </div>
    <label className="CountboxLabel"  for="CountBox">Count:</label>
    <div className="CountBox">
      {count}
    </div>
    </>
  );
}

export function CustomInput() {
  const [value, setValue] = useState("");

  return (
    <input
      className="CustomInput"
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}


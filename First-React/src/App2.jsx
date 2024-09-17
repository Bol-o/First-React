import React, { useState } from "react";
import "./App2.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

 function App() {
  
  const [colorArr, setArr] = useState([])

  const[count, setCount] = useState(0);
  
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color, count) => () => {
   
    //alert(colorArr)
    
    setBackgroundColor(color);
    
    colorArr.push(color);

    alert('whole thing:  ' + colorArr)
    alert(colorArr[colorArr.length - 1])
    alert('arr length is:  ' + colorArr.length)

    
    
    
      if (colorArr.length > 1 && color == colorArr[colorArr.length - 2]){
        alert('conter not going up case same color' + colorArr[colorArr.length - 1])
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


export default App

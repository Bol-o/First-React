import React, { useState } from "react";




 function CustomInput() {
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
  export default CustomInput
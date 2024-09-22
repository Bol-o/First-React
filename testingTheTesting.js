function calculate(a, b) {
    
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
    const addAgain = a + b;
    const add = a - b;
  
    return [add, subtract, multiply, divide, addAgain];
  }
  
  const [add, subtract, multiply, divide, addAgain] = calculate(4, 7);
  console.log(addAgain, subtract);
  console.log(add);
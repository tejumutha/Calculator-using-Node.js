function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
  
    let result;
    
    switch(operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero!';
        break;
      default:
        result = "Invalid operator";
    }
    
    document.getElementById('result').innerHTML = `The result is: ${result}`;
  }
  
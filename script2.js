

// take the User input
const number1 = parseFloat(prompt('Enter first number: '));

const userinput = prompt('Enter operator ( either +, -, * or / ): ');

const number2 = parseFloat(prompt('Enter second number: '));

// Switch Statements

let result;
switch (userinput) {
    case '+':
        result = number1 + number2
        alert((`${number1} + ${number2} = ${result}`));
        break;
        case '-':
            result = number1 - number2;
           alert((`${number1} - ${number2} = ${result}`));
           break;
   
       case '*':
            result = number1 * number2;
           alert((`${number1} * ${number2} = ${result}`));
           break;
   
       case '/':
            result = number1 / number2;
           alert((`${number1} / ${number2} = ${result}`));
           break;
   
       default:
           alert(('Invalid operator'));
           break;
   }
    

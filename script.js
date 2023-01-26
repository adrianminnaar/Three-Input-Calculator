

// take the operator input
const userinput = prompt('Enter operator ( either +, -, * or / ): ');



// take the User input
const number1 = parseFloat(prompt('Enter first number: '));
if (typeof userinput=== 'number') {
    console.log('Its a number');
    
    }
    else{
        alert('Please enter a number')
    }

if () {

    const number1 = parseFloat(prompt('Enter first number: '));
} else {
    
}

const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if/else 
if (userinput == '+') {
    result = number1 + number2;
}
else if (userinput == '-') {
    result = number1 - number2;
}
else if (userinput == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result

userinput= window.prompt(`${number1} ${userinput} ${number2} = ${result}`); 
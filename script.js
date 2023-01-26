

// take the User input

const number1 = parseFloat(prompt('Enter first number: '));

const userinput = prompt('Enter operator ( either +, -, * or / ): ');

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

userinput = window.prompt(`${number1} ${userinput} ${number2} = ${result}`); 

function reset(){
    document.getElementById('number1').reset();
}

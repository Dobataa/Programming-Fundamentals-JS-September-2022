function simpleCalculator(firstNumber, secondNumber , operator){
    
    let sum = 0;

    switch(operator){
        case 'multiply':
            sum = firstNumber * secondNumber;
            break;
        case 'divide':
            sum = firstNumber / secondNumber;
            break;
        case 'add':
            sum = firstNumber + secondNumber;
            break;
        case 'subtract':
            sum = firstNumber - secondNumber;
            break;
    }
    console.log(sum);
}
simpleCalculator(5,5,'multiply');
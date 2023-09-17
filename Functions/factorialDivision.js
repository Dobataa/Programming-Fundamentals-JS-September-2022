function factorialDivision(firstNumber, secondNumber) {

    let firstNumberFactorial = firstNumber;
    let secondNumberFactorial = secondNumber;

    for (let i = firstNumber - 1; i > 1; i--) {
        firstNumberFactorial *= i;
    }

    for (let i = secondNumber - 1; i > 1; i--) {
        secondNumberFactorial *= i;
    }
    
    let divison = firstNumberFactorial / secondNumberFactorial;
    console.log(divison.toFixed(2));
}
factorialDivision(6, 2);
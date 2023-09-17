function addAndSubtract(firstNumber, secondNumber, thirdNumber) {

    function add(firstNum, secondNum) {

        let sumOfTwoNumbers = firstNum + secondNum;
        return sumOfTwoNumbers;
    }
    let sum = add(firstNumber, secondNumber);


    function subtract(firstNum, secondNum) {

        let subtraction = firstNum - secondNum;
        return subtraction;
    }
    let result = subtract(sum, thirdNumber);

    console.log(result);
}
addAndSubtract(23, 6, 10);
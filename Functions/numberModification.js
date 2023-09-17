function numberModification(number) {

    let numberInText = number.toString();
    let numberSumOfDigits = 0;

    for (let i = 0; i < numberInText.length; i++) {
        let currentDigit = Number(numberInText[i])
        numberSumOfDigits += currentDigit;
    }
    for (let i = 0; i < numberInText.length; i++){
        if (numberSumOfDigits / numberInText.length < 5) {
            numberInText += 9;
            let currentDigit = Number(numberInText[i + (numberInText.length - 1 - i)]);
            numberSumOfDigits += currentDigit;
        } else {
            console.log(numberInText);
            break;
        }
    }
}
numberModification(101);
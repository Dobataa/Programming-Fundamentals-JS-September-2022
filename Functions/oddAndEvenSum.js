function oddAndEvenSum(number){

    let numberInText = number.toString();
    let oddSum = 0;
    let evenSum = 0;

    for(let i = 0; i < numberInText.length; i++){
        let currentNumber = Number(numberInText[i])
        if(currentNumber % 2 === 0){
            evenSum += currentNumber;
        }else{
            oddSum += currentNumber;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(3495892137259234);
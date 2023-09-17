function singCheck(firstNumber, secondNumber, thirdNumber){

    let plusCounter = 0;
    let arr = [];
    arr.push(firstNumber, secondNumber, thirdNumber);

    for(let i = 0; i < arr.length; i++){
        if(arr[i] <= 0){
            plusCounter++;
        }
    }

    if(plusCounter % 2 === 0){
        console.log(`Positive`);
    }else{
        console.log(`Negative`);
    }

}
singCheck(5,12,-15);
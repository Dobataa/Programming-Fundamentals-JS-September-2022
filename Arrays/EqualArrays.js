function solve(firstArray, secondArray) {
    let firstArrayLength = firstArray.length;
    let secondArrayLength = secondArray.length;
    let areEqual = true;
    let sum = 0;

    for (let i = 0; i < firstArrayLength; i++){
        firstArray[i] = Number(firstArray[i]);
        sum += firstArray[i];
    }

    for (let i = 0; i < secondArrayLength; i++){
        secondArray[i] = Number(secondArray[i]);
    }

    for(let i = 0 ; i < firstArrayLength; i++){
        if(firstArray[i] !== secondArray[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    }
    if(areEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}
solve(['10', '20', '30'], ['10', '20', '30']);
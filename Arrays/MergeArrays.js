function solve(firstArray, secondArray){
    let firstArrayLength = firstArray.length;
    let secondArrayLength = secondArray.length;
    let finalArray = [];

    for(let i = 0; i < firstArrayLength; i++){
        for(let j = 0; j < secondArrayLength; j++){
            if(i === j && i % 2 === 0){
                let tempNumber = Number(firstArray[i]) + Number(secondArray[j]);
                finalArray.push(tempNumber);
            }else if(i === j && i % 2 !== 0){
                let tempNumberr = firstArray[i] + secondArray[j];
                finalArray.push(tempNumberr);
            }
        }
    }
    console.log(finalArray.join(` - `));
}
solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);
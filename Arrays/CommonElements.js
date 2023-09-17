function solve(firstArray, secondArray){
    let firstArrayLength = firstArray.length;
    let secondArrayLength = secondArray.length;

    for(let i = 0; i < firstArrayLength; i++){
        for(let j = 0; j < secondArrayLength; j++){
            if(firstArray[i] === secondArray[j]){
                console.log(firstArray[i]);
            }
        }
    }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);
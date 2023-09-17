function solve(arr){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        let currentNumber = arr[i];
        if(i % 2 !== 0){
            currentNumber *= 2;
            result.unshift(currentNumber);
        }
    }
    console.log(result.join(` `));
}
solve([3, 0, 10, 4, 7, 3]);
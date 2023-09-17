function solve(input){
    
    let arrLength = input.length;
    let arr = []

    for(let i = 0; i < arrLength; i++){

        let currentNumber = input[i];
        let isBigger = true;

        for(let j = i + 1;j < arrLength; j++){
            if(currentNumber <= input[j]){
                isBigger = false;
            }
        }
        if(isBigger){
            arr.push(input[i]);
        }
    }
    console.log(arr.join(` `));
}
solve([27, 19, 42, 2, 13, 45, 48]);
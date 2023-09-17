function solve(input, number){

    let arrLength = input.length;

    for(let i = 0; i < arrLength; i++){
        for(let j = i + 1; j < arrLength; j++){
            let sum = input[i] + input[j];
            if(sum === number){
                console.log(`${input[i]} ${input[j]}`);
                sum = 0;
            }
        }
    }
}
solve([1, 7, 6, 2, 19, 23],8);
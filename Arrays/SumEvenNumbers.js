function solve(input){
    let arrLength = input.length;
    let sum = 0;
    for(let i = 0; i < arrLength; i++){
        if(Number(input[i]) % 2 === 0){
            sum+=Number(input[i]);
        }
    }
    console.log(sum);
}
solve(['1','2','3','4','5','6']);
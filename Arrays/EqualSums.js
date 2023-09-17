function solve(input){

    let arrLength = input.length;
    let foundIndex = `no`;

    for(let i = 0; i < arrLength; i++){
        let rightSum = 0;
        let leftSum = 0;

        for(let l = 0; l < i; l++){
            leftSum += Number(input[l]);
        }

        for(let r = i + 1; r < arrLength; r++){
            rightSum += Number(input[r]);
        }

        if(leftSum === rightSum){
            foundIndex = i;
        }
    }
    console.log(foundIndex);
}
solve([1, 2, 3, 3]);
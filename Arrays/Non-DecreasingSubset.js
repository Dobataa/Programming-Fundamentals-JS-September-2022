function solve(input){
    let arrLength = input.length;
    let finalArray = [];
    let biggestNumber = input[0];
    finalArray.push(biggestNumber);

        for(let j = 1; j < arrLength; j++){

            let nextNumber = input[j];

            if(biggestNumber > nextNumber){ 
                continue;
            }else{
                biggestNumber = nextNumber;
                finalArray.push(biggestNumber);
            }
    }
    console.log(finalArray.join(` `));
}
solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
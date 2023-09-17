function solve(input) {
    arrLength = input.length;
    let step = Number(input[arrLength - 1]);
    let finalArray = [];

    for (let i = 0; i < arrLength - 1; i++) {
        if(i % step === 0){
            finalArray.push(input[i]);
        }

    }
    console.log(finalArray.join(` `));
}
solve(['1', '2', '3', '4', '5', '6']);
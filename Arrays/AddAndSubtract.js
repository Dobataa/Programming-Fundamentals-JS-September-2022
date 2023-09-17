function solve(input) {
    let arrLength = input.length;
    let originalSum = 0;
    let modifiedSum = 0;

    for (let i = 0; i < arrLength; i++) {
        originalSum += input[i];
        if (input[i] % 2 === 0) {
            input[i] += i;
        } else {
            input[i] -= i;
        }
    }
    
    for (let i = 0; i < arrLength; i++) {
        modifiedSum += input[i];
    }

    console.log(input);
    console.log(originalSum);
    console.log(modifiedSum);

}
solve([5, 15, 23, 56, 35]);
function solve(input) {
    let arrLength = input.length;
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arrLength; i++) {
        if (Number(input[i]) % 2 === 0) {
            sumEven += Number(input[i]);
        } else {
            sumOdd += Number(input[i]);
        }
    }
    let finalSum = sumEven - sumOdd;
    console.log(finalSum);
}
solve([1, 2, 3, 4, 5, 6]);
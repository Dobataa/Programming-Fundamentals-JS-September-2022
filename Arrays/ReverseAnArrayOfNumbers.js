function reverse(count, numbers) {
    // create new array
    let reversedNumbers = []; // create empty array

    // take count elements from numbers
    // reverse the elements
    for (let i = 0; i < count; i++) {
        // result[count - 1 - i] = numbers[i];
        reversedNumbers[i] = numbers[count - 1 - i];
    }

    // print for winners :) 
    let result = '';
    let arrLength = reversedNumbers.length;
    for (let i = 0; i < arrLength; i++) {
        result += reversedNumbers[i];

        if (i < arrLength - 1) {
            result += ' ';
        }
    }

    console.log(result);
}
reverse(3, [10, 20, 30, 40, 50]);
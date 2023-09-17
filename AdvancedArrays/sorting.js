function solve(arr) {

    let sortedArray = arr.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let lastElement = sortedArray.pop();
        let fistElement = sortedArray.shift();

        result.push(lastElement);
        result.push(fistElement);
    }

    result.push(sortedArray.pop());
    result.push(sortedArray.shift());

    console.log(result.join(` `));
}
solve([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
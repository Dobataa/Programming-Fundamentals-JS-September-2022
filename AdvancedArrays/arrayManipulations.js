function solve(arr) {

    let numbers = arr.shift().split(` `).map(Number);

    for (let i = 0; i < arr.length; i++) {
        let [command, firstNumber, secondNumber] = arr[i].split(` `);
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);

        switch (command) {
            case `Add`:
                numbers.push(firstNumber);
                break;
            case `Remove`:
                numbers = numbers.filter(x => x !== firstNumber)
                break;
            case `RemoveAt`:
                numbers.splice(firstNumber, 1);
                break;
            case `Insert`:
                numbers.splice(secondNumber, 0, firstNumber);
                break;
        }
    }
    console.log(numbers.join(` `));
}
solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);
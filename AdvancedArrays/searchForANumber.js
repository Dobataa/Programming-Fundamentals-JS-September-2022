function solve(numbers, actions) {
    let numbersToGet = actions[0];
    let numbersToDelete = actions[1];
    let specialNumber = actions[2];

    let takenNumbers = numbers.slice(0, numbersToGet);
    takenNumbers.splice(0, numbersToDelete);

    let counter = 0;

    for (const el of takenNumbers) {
        if (el === specialNumber) {
            counter++
        }
    }
    console.log(`Number ${specialNumber} occurs ${counter} times.`);
}
solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);
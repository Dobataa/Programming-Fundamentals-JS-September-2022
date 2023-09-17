function solve(arr) {

    let vangonNumbers = arr.shift().split(` `).map(Number);
    let maxCapacity = arr.shift().split(` `).map(Number);

    for (let i = 0; i < arr.length; i++) {
        let [command, number] = arr[i].split(` `);

        if (command === `Add`) {
            vangonNumbers.push(Number(number));
        } else {
            for (let j = 0; j < vangonNumbers.length; j++) {
                if (vangonNumbers[j] + Number(command) <= maxCapacity) {
                    vangonNumbers[j] += Number(command);
                    break;
                }
            }
        }
    }
    console.log(vangonNumbers.join(` `));
}
solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);
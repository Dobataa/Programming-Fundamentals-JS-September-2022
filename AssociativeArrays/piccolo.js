function solve(input) {

    let list = {};

    for (const line of input) {
        let [command, carNumber] = line.split(`, `);
        if(command === `IN`){
            list[carNumber] = command;
        }else if(command === `OUT`){
            delete list[carNumber];
        }
    }
    
    let listEntries = Object.entries(list);
    let sorted = listEntries.sort((a,b) => a[0].localeCompare(b[0]));

    if(sorted.length === 0){
        console.log(`Parking Lot is Empty`);
    }

    for (const line of sorted) {
        console.log(line[0]);
    }
}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
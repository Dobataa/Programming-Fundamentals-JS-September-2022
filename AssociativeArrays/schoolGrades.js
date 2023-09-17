function solve(input) {

    let list = {};

    for (const line of input) {
        let studentArr = line.split(` `);
        let name = studentArr.shift();
        let grades = studentArr.map(x => Number(x));

        if (!list.hasOwnProperty(name)) {
            list[name] = [];
        }
        list[name] = list[name].concat(grades);
    }

    let listEntries = Object.entries(list);
    let sorted = listEntries.sort((a, b) => a[0].localeCompare(b[0]))

    for (const [name, grades] of sorted) {
        let sum = 0;

        for (const grade of grades) {
            sum += grade;
        }

        let average = sum / grades.length;

        console.log(`${name}: ${average.toFixed(2)}`);
    }

}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
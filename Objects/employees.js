function solve(people){

    let list = {};

    people.forEach(person => {
        list[person] = person.length;
    });

    for (const key in list) {
        console.log(`Name: ${key} -- Personal Number: ${list[key]}`);
    }
}
solve(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);
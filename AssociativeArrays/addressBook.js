function solve(input) {
    let addressBook = {};

    for (const line of input) {
        let [name, addres] = line.split(`:`);
        addressBook[name] = addres;
    }

    let addressBookEntries = Object.entries(addressBook);

    addressBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]))

    for (const entry of addressBookEntries) {
        let name = entry[0];
        let address = entry[1];

        console.log(`${name} -> ${address}`);
    }
}
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);
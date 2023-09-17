function solve(input){

    let dictionery = {};

    for (const line of input) {
        let currentObject = JSON.parse(line);
        dictionery = Object.assign(dictionery, currentObject);
    }
    
    let sortedKeys = Object.keys(dictionery);
    sortedKeys.sort((a, b) => a.localeCompare(b)); 

    for (const term of sortedKeys) {            
        console.log(`Term: ${term} => Definition: ${dictionery[term]}`);
    }
}
solve([
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Coffee":"Nigger"}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);
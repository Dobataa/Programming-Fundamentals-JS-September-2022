function solve(input){

    let list = {};

    for (const word of input) {
        if(!list.hasOwnProperty(word)){
            list[word] = 0;
        }
        list[word]++;
    }
    let listEntries = Object.entries(list);
    let sorted = listEntries.sort((a,b) => b[1] - a[1]);

    for (const [word, count] of sorted) {
        console.log(`${word} -> ${count} times`);
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", 
        "sentence", "And", "finally", "the", "third", "sentence"]);
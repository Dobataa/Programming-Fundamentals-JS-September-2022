function solve(input) {

    let result = {};
    let words = input
        .shift()
        .split(` `);

    for (const word of words) {
        result[word] = 0;
    }

    for (const word of input) {
        if(result.hasOwnProperty(word)){
            result[word]++;
        }
    }

    let resultEntries = Object.entries(result);
    let sorted = resultEntries.sort((a,b) => b[1]-a[1]);

    for (const [word, times] of sorted) {
        console.log(`${word} - ${times}`);
    }
}
solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );
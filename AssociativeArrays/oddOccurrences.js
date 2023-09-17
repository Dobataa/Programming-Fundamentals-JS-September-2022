function solve(input) {

    let result = {};
    let words = input
        .split(` `)
        .map(w => w.toLowerCase());

    for (const word of words) {
        if (!result.hasOwnProperty(word)) {
            result[word] = 0;
        }
        result[word]++;
    }

    let finalString = ``;

    for (const word of words) {
        if (result[word] % 2 === 1) {
            finalString += `${word} `;
            delete result[word];
        }
    }

    console.log(finalString);
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
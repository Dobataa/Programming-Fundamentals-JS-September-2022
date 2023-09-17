function solve(word, letter, result){
    let finalWord = word.replace(`_`,letter);
    let output = finalWord === result ? `Matched` : `Not Matched`;
    console.log(output);
}
solve('Str_ng', 'i', 'String');
function solve(input) {

    let length = input.shift();
    let pattern = /(?<surroundings>[@][#]+)(?<word>[A-Za-z0-9]{4,}[A-Z])\1/;
    let patternDigit = /\d/;

    for (let i = 0; i < length; i++) {
        let currentLine = input.shift();
        let match = pattern.exec(currentLine);
        if (match) {
            let code = ``;
            let word = match.groups[`word`];
            let wordLength = word.length;
            for (let i = 0; i < wordLength; i++) {
                if(word.charCodeAt(i) >= 48 && word.charCodeAt(i) <= 57){
                    code += wordLength[i];
                }else{
                    code = `00`;
                }
            }
            console.log(code);
        } else {
            console.log(`Invalid barcode`);
        }
    }
}
solve((["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]));
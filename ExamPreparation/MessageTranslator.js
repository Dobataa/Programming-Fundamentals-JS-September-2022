function solve(input) {

    let n = input.shift();
    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<name>[^[][]a-zA-z]{8,}[^\]])\]/g;
    let string = input.shift();
    let regex = pattern.exec(string);

    for (let i = 0; i < n; i++) {
        if(regex === null){
            console.log(`The message is invalid`);
            string = input.shift();
            regex = pattern.exec(string);
            continue;
        }
        let text = regex.groups[`name`];
        let command = regex.groups[`command`];
        let numbers = ``;
        for (let i = 1; i < text.length - 1; i++) {
            let currentChar = text[i].charCodeAt();
            if(i !== text.length - 1){
            numbers += `${currentChar} `;
            }else{
            numbers += `${currentChar}`;
            }
        }

        console.log(`${command}: ${numbers}`);

        string = input.shift();
        regex = pattern.exec(string);
    }
}
solve(["1",
"!Watch!:[LordofTheRings]"]);
function solve(input) {

    let word = input.shift();
    input.pop();
    for (const line of input) {
        command = line.split(`|`);
        let currentCommand = command[0];

        if (currentCommand.includes(`Move`)) {
            let letters = command[1];
            let slicedLetters = word.slice(0, letters);
            let remaining = word.slice(letters)
            word = remaining + slicedLetters

        } else if (currentCommand.includes(`Insert`)) {
            let index = command[1];
            let value = command[2];
            let sliced = word.slice(0, index);
            let remaining = word.slice(index);
            sliced += value;
            word = sliced + remaining;

        } else if (currentCommand.includes(`ChangeAll`)) {
            let substing = command[1];
            let replacement = command[2];
            while (word.includes(substing)) {
                word = word.replace(substing, replacement);
            }
        }
    }
    console.log(`The decrypted message is: ${word}`);
}
solve(['zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',]);
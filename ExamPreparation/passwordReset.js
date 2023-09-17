function solve(input) {

    let rawPassword = input.shift();
    let currentCommand = input.shift();

    while (currentCommand !== `Done`) {
        currentCommand = currentCommand.split(` `);

        if (currentCommand[0] === `TakeOdd`) {
            let passwordLength = rawPassword.length;
            let newPassword = ``;

            for (let i = 1; i < passwordLength; i += 2) {
                newPassword += rawPassword[i];
            }
            rawPassword = newPassword;
            console.log(rawPassword);

        } else if (currentCommand[0] === `Cut`) {
            let index = Number(currentCommand[1]);
            let length = Number(currentCommand[2]);
            let cutLetters = rawPassword.slice(0, index);
            let remaning = rawPassword.slice(index + length);
            rawPassword = cutLetters + remaning;
            console.log(rawPassword);

        } else if(currentCommand[0] === `Substitute`){
            let substring = currentCommand[1];
            let substitute = currentCommand[2];

            if(rawPassword.includes(substring)){
                while(rawPassword.includes(substring)){
                    rawPassword = rawPassword.replace(substring, substitute);
                }
                console.log(rawPassword);
            }else{
                console.log(`Nothing to replace!`);
            }
        }
        currentCommand = input.shift();
    }
    console.log(`Your password is: ${rawPassword}`);
}
solve((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
);
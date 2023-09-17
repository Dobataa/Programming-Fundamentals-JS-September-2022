function solve(input) {

    let password = input.shift();
    let currentCommand = input.shift();

    while (currentCommand !== `Complete`) {
        currentCommand = currentCommand.split(` `);

        switch (currentCommand[0]) {
            case `Make`:
                if (currentCommand[1] === `Upper`) {
                    let index = Number(currentCommand[2]);
                    let upper = password[index].toUpperCase();
                    let sliced = password.slice(0, index);
                    let remaining = password.slice(index + 1);
                    sliced += upper;
                    password = sliced + remaining;
                    console.log(password);

                } else if (currentCommand[1] === `Lower`) {
                    let index = Number(currentCommand[2]);
                    let lower = password[index].toLowerCase();
                    let sliced = password.slice(0, index);
                    let remaining = password.slice(index + 1);
                    sliced += lower;
                    password = sliced + remaining;
                    console.log(password);

                }
                break;
            case `Insert`:
                let index = Number(currentCommand[1]);
                let charr = currentCommand[2];

                if (index < 0 || index > password.length) {
                    break;
                }

                let sliced = password.slice(0, index);
                let remaining = password.slice(index);
                sliced += charr;
                password = sliced + remaining;
                console.log(password);

                break;
            case `Replace`:
                let charToChange = currentCommand[1];
                let value = Number(currentCommand[2]);

                if (!password.includes(charToChange)) {
                    break;
                }

                let charAsciiCode = charToChange.charCodeAt();
                let newChar = String.fromCharCode(charAsciiCode + value);

                while(password.includes(charToChange)){
                    password = password.replace(charToChange, newChar)
                }
                console.log(password);
                break;
            case `Validation`:
                if(password.length < 8){
                    console.log(`Password must be at least 8 characters long!`);
                }
                
                let isCorrect = false;
                let isUpper = false;
                let isLower = false;
                let isDigit = false;

                for(let i = 0; i < password.length;i++){
                    let currentCharCode = password[i].charCodeAt();

                    if(currentCharCode >= 48 && currentCharCode <= 57){
                        isCorrect = true;
                        isDigit = true;

                    }else if(currentCharCode >= 65 && currentCharCode <= 90){
                        isCorrect = true;
                        isUpper = true;

                    }else if(currentCharCode >= 97 && currentCharCode <= 122){
                        isCorrect = true;
                        isLower = true;

                    }else if(currentCharCode === 95){
                        isCorrect = true;

                    }

                }

                if(password.match(/[^A-Za-z\d_]/g) !== null) {
                    console.log(`Password must consist only of letters, digits and _!`);
                
                }
                if(!isUpper){
                    console.log(`Password must consist at least one uppercase letter!`);
                } 

                if(!isLower){
                    console.log(`Password must consist at least one lowercase letter!`);
                }

                if(!isDigit){
                    console.log(`Password must consist at least one digit!`);
                }
                break;

        }
        currentCommand = input.shift();
    }
}
solve((['*aaA9_)',
    'Validation',
    'Complete']))
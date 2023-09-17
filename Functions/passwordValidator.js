function passwordValidator(password){

    let isSymbol = false;
    let isDigitOrLetter = false;
    let lengthCounter = 0;
    let digitCounter = 0;

    for(let i = 0 ; i < password.length; i++){

        let currentChar = password[i].charCodeAt();
        lengthCounter++;

        if(currentChar >= 48 && currentChar < 58 || currentChar >= 65 && currentChar < 91 ||
            currentChar >= 97 && currentChar < 123){
            isDigitOrLetter = true
        }else{
            isSymbol = true;
        }

        if(currentChar >= 48 && currentChar < 58){
            digitCounter++;
        }
    }

    if(lengthCounter < 6 || lengthCounter > 12){
        console.log(`Password must be between 6 and 10 characters`);
    }

    if(isSymbol){
        console.log(`Password must consist only of letters and digits`);
    }

    if(digitCounter < 2){
        console.log(`Password must have at least 2 digits`);
    }

    if(lengthCounter >= 6 && lengthCounter <= 12 && !isSymbol && digitCounter >= 2){
        console.log(`Password is valid`);
    }
} 
passwordValidator('Pa$s$s');
function palindromeIntegers(numbersArray){

    let arrLength = numbersArray.length;

    for(let i = 0 ; i < arrLength; i++){

        let numberAsString = numbersArray[i].toString()
        let reversedString = numberAsString.split(``).reverse().join(``);
        
        if(numberAsString === reversedString){
            console.log(`true`);
        }else{
            console.log(`false`);
        }
    }    
}
palindromeIntegers([123,323,421,121]);
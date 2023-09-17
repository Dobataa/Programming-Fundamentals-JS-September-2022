function repeatString(word, repeats){

    let finalWord = ``;

    for(let i = 0; i < repeats;i++){
        finalWord += word;
    }
    
    console.log(finalWord);
} 
repeatString("abc", 3);
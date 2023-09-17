function matrix(number){

    let arr = [];
    let row = ``;

    for(let i = 0 ;i < number;i++){
        for(let j = 0; j < number; j++){
            row += `${number} `;
        }
        arr.push(row);
        row = ``;
    }
    console.log(arr.join(`\n`));
}
matrix(3);
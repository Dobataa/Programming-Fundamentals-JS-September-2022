function solve(input){
    let firstRow = input[0];
    let firstRowSum = 0;
    let secondRow = input[1];
    let secondRowSum = 0;
    let thirdRow = input[2];
    let thirdRowSum = 0;
    let firstCollumSum = 0;
    let secondCollumSum = 0;
    let thirdCollumSum = 0;

    for(let i = 0; i < firstRow.length; i++ ){
        firstRowSum += firstRow[i];
        secondRowSum += secondRow[i];
        thirdRowSum += thirdRow[i];
    }
    
    for(let i = 0; i < firstRow.length; i++ ){
        if(i === 0){
            firstCollumSum = firstRow[i] + secondRow[i] + thirdRow[i];
            if(firstCollumSum !== firstRowSum){
                isMagic = false;
                break;
            }
        }else if (i === 1){
            secondCollumSum = firstRow[i] + secondRow[i] + thirdRow[i];
            if(secondCollumSum !== firstRowSum){
                isMagic = false;
                break;
            }
        }else if (i === 2){
            thirdCollumSum = firstRow[i] + secondRow[i] + thirdRow[i];
            if(thirdCollumSum !== firstRowSum){
                isMagic = false;
                break;
            }
        }
    }
    if(isMagic){
        console.log(`true`);
    }else{
        console.log(`false`);
    }
}
solve([ [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]]);
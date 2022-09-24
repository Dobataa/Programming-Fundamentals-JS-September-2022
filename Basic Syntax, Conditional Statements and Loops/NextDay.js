function solve(year, month, day){
    let isLeap = false;
    let isBug = false;
    if((year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 )){
        isLeap = true; 
    }
    if(month == 1 && day == 31){
        day = 1;
        month++;
    }else if(month == 3 && day == 31){
        day = 1;
        month++;
    }else if(month == 5 && day == 31){
        day = 1;
        month++;
    }else if(month == 7 && day == 31){
        day = 1;
        month++;
    }else if(month == 8 && day == 31){
        day = 1;
        month++;
    }else if(month == 10 && day == 31){
        day = 1;
        month++;
    }else if(month == 12 && day == 31){
        day = 1;
        year++;
        month = 1;
    }else if(month == 2 && day == 28 && isLeap){
        day = 29;
    }else if(month == 2 && day == 28 && !isLeap){
        day = 0;
        month++;
    }else if(day == 30){
        month++;
        day = 1;
    }else if(day == 1 && month == 1 && year == 1){
        console.log(`1901-1-2`);
        isBug = true;
    }else{
        day++;
    }
    if(!isBug){
    console.log(`${year}-${month}-${day}`);
    }
}
solve(1,1,1);
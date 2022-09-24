function solve(people, group, day){
    let FrdPrice = 0;
    let SatPrice = 0;
    let SunPrice = 0;
    let sum = 0
    switch(group){
        case `Students`:
            switch(day){
                case `Friday`:
                    FrdPrice = 8.45;
                    sum = FrdPrice * people;
                    if(people >= 30){
                        sum = sum * 0.85;
                    }
                    break;
                case `Saturday`:
                    SatPrice = 9.8;
                    sum = SatPrice * people;
                    if(people >= 30){
                        sum = sum * 0.85;
                    }
                    break;
                case `Sunday`:
                    SunPrice = 10.46;
                    sum = SunPrice * people;
                    if(people >= 30){
                        sum = sum * 0.85;
                    }
                    break;
            }
            break;
        case `Business`:  
            switch(day){
                case `Friday`:
                    FrdPrice = 10.9;
                    if(people >= 100){
                        sum = FrdPrice * (people - 10);
                    }else{
                        sum = FrdPrice * people;
                    }
                    break;
                case `Saturday`:
                    SatPrice = 15.6;
                    if(people >= 100){
                        sum = SatPrice * (people - 10);
                    }else{
                        sum = SatPrice * people;
                    }
                    break;
                case `Sunday`:
                    SunPrice = 16;
                    if(people >= 100){
                        sum = SunPrice * (people - 10);
                    }else{
                        sum = SunPrice * people;
                    }
                    break;
            }
            break;
        case `Regular`:
            switch(day){
                case `Friday`:
                    FrdPrice = 15;
                    sum = FrdPrice * people;
                    if(people >= 10 && people < 21){
                        sum = sum * 0.95;
                    }
                    break;
                case `Saturday`:
                    SatPrice = 20;
                    sum = SatPrice * people;
                    if(people >= 10 && people < 21){
                        sum = sum * 0.95;
                    }
                    break;
                case `Sunday`:
                    SunPrice = 22.5;
                    sum = SunPrice * people;
                    if(people >= 10 && people < 21){
                        sum = sum * 0.95;
                    }
                    break;
            }
            break;
    }
    console.log(`Total price: ${sum.toFixed(2)}`);
}
solve(30,
    "Students",
    "Sunday"
    );
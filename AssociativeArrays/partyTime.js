function solve(guestList) {

    let vipList = [];
    let regularList= [];
    let currentGuest = guestList.shift();

    while(currentGuest !== `PARTY`){

        let isVip = isNaN(currentGuest[0]);

        if(!isVip){
            vipList.push(currentGuest);
        }else{
            regularList.push(currentGuest);
        }

        currentGuest = guestList.shift();
    }
    
    let allGuests = vipList.concat(regularList);

    for (const guest of guestList) {
        allGuests.splice(allGuests.indexOf(guest),1);
    }

    console.log(allGuests.length);

    for (const guest of allGuests) {
        console.log(guest);
    }

}
solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
);
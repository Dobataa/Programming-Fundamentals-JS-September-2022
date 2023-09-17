function solve(sequence, bomb) {

    let bombNumber = bomb[0];
    let bombPower = bomb[1];

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === bombNumber) {
            if(i - bombPower < 0){
                sequence.splice(0, (bombPower * 2 + 1));
            }else{
                sequence.splice((i - bombPower), (bombPower * 2 + 1));
            i = 0;
            }
        }
    }
    
    sequence = sequence.filter(x => x !== bombNumber);
    
    let result = 0;

    for (const el of sequence) {
        result += el;
    }

    console.log(result);
}
solve([1, 7, 7, 1, 2, 3],[7, 1]);
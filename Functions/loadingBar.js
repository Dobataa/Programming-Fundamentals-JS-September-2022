function loadingBar(number) {

    let arr = [];
    let digit = number / 10;

    if (digit === 10) {
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    } else {
        for (let i = 0; i < digit; i++) {
            arr.push(`%`);
        }
        for (let i = digit; i < 10; i++) {
            arr.push('.')
        }
        console.log(`${number}% [${arr.join(``)}]`);
        console.log(`Still loading...`);
    }
}
loadingBar(30);
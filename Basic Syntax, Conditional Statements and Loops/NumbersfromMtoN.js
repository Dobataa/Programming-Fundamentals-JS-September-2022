function solve(M, N) {
    let min = Number(N);
    for (let max = Number(M); max >= min; max--) {
        console.log(max);
    }
}
solve(6, 2);
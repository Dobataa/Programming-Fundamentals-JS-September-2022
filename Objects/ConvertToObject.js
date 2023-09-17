function solve(info){

    let personInfo = JSON.parse(info);
    
    for (const key in personInfo) {
        console.log(`${key}: ${personInfo[key]}`);
    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}');
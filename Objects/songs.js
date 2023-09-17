function solve(input){

    class Song{
        constructor(type, name){
            this.type = type;
            this.name = name;
        }
    }

    let songs = [];
    const numberOfSongs = Number(input[0]);
    const inputLength = input.length;
    let type = input[inputLength-1];

    for(let i = 1; i < numberOfSongs + 1; i++){
        let [typeList, name] = input[i].split(`_`);
        let song = new Song(typeList, name);
        songs.push(song);
    }

    if(type === `all`){
        songs.forEach((el) => console.log(el.name));
    }else{
        let filtered = songs.filter((el) => el.type === type);
        filtered.forEach((el) => console.log(el.name));
    }
}
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
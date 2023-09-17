function solve(input) {

    let genres = input.shift().split(" | ");
    let command = input.shift();

    while (command !== "Stop!") {
        let [action, first, second] = command.split(" ");

        switch (action) {
            case `Join`:
                if (!genres.includes(first)) {
                    genres.push(first);
                }
                break;
            case `Drop`:
                if (genres.includes(first)) {
                    let index = genres.indexOf(first);
                    genres.splice(index, 1);
                }
                break;
            case `Replace`:
                if (genres.includes(first) && !genres.includes(second)) {
                    let index = genres.indexOf(first);
                    genres.splice(index, 1, second);
                }
                break;
            case `Prefer`:
                if (genres[first] && genres[second]) {
                    let firstGenre = genres[first];
                    let secondGenre = genres[second];
                    genres.splice(first, 1, secondGenre);
                    genres.splice(second, 1, firstGenre);
                }
                break;
        }

        command = input.shift();

    }
    console.log(genres.join(" "));
}
solve(["Poetry | Romance", 
"Drop Children", 
"Replace Fantasy Crime", 
"Stop!"]);

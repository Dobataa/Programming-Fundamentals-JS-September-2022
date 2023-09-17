function solve(info){

    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const line of info) {
        let args = line.split(` `)

        let name = args[0];
        let age = args[1];

        let cat = new Cat(name, age);
        cat.meow();
    }
}
solve(['Mellow 2', 'Tom 5']);
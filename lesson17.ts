class Person{
    run(){
        console.log('Person is running...')
    }
}

let p1 = new Person();

console.log(p1.run === Person.prototype.run);
//console.log(p1.run());
function greetPerson(name) {
    let greet;
    if (name === "Chandler") {
        greet = "Hello Chandler";
    } else {
        greet = "Hi there";
    }
    console.log(greet);

}
greetPerson("Chandler");

var a = 1;
let b = 2;

if (a === 1) {
    let b = 10;
    var a = 20;
}
console.log(a);
console.log(b);
var Person = (function () {
    function Person(name) {
        this.name = name;
        console.log(this.name + " constructor.");
    }
    Person.talk = function () {
        console.log('This static method is talk');
    };
    Person.prototype.run = function () {
        console.log('Person running...');
    };
    return Person;
}());
var p = new Person("TEDU");
p.run();
Person.talk();
//# sourceMappingURL=lesson18.js.map
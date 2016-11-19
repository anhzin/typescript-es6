class Person {
    public fname: string;
    public lname: string;
    constructor(fname: string, lname: string) {
        this.fname = fname;
        this.lname = lname;
    }
}

class Person1 {
    constructor(public fname: string, public lname: string) {

    }
}

let p = new Person1("TEDU","Online");
console.log(p.fname + " " + p.lname);
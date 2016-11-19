interface Person {
    fname: string,
    lname: string,
    age?: number
}

var p1 : Person = {
    fname: "Tedu",
    lname : "Online",
    age:2
}

var p2 : Person = {
    fname: "Tedu 2",
    lname : "Online 2"
}

interface LabelledValue {
   readonly label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
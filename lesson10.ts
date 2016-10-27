let getPercent = ()=>2;
let getBonus = function (value = 10, tax = value *getPercent(),salary = 1) {
    console.log(value + tax);
    console.log(arguments.length);
}
getBonus();
getBonus(60);
getBonus(20,40);
getBonus(20,40,10);
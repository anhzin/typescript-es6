let calculateSalary = function(){
    return 1000000;
}

let calculateSalaryArrow = (bonus:number,tax:number) => 2000000+bonus-tax;

console.log(calculateSalary());
console.log(calculateSalaryArrow(100000,10000));
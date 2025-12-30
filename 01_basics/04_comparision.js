// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1); // automatically convert string into number 
console.log("02" > 1); // same as above 

/* the problem is when you convert two different datatypes then some time it will not give
much predictable result so it is good to not compare two different data types*/
// in typescript it does not allow you to do that js allow you but you should not


//b  ***imp***
/* in js equality check and compersions work differently 
as in EC null do not convert into zero 
in compersion check null convert into zero */

console.log(null == 0)
console.log(null > 0)
console.log(null < 0)
console.log(null >= 0)

console.log(undefined >= 0) // for undefine ans will always false

console.log("2"==2) // true
console.log("2"=== 2) // false as === is strict check it check value as well as its datatype



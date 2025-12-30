const score =400.5325 // js itself define it as number
const scoreone=new Number(400) // both ways are correct
console.log(score);
console.log(scoreone);

console.log(scoreone.toString().length)
console.log(score.toFixed(2)) //  specified number of decimal places.
console.log(score.toPrecision(2)); // 4.0e+2 specified number of significant digits.

const hundreds = 10000000
console.log(hundreds.toLocaleString()) // as us standards 
console.log(hundreds.toLocaleString('en-IN')); // indian system (for more mdn docm)

// we can go to console and type Number. and find the different property of Number object its min value , max value safe value and all ss


//++++++++++++++++++++++++++++++++
// go to console and console.log(Math) from there you will its its finction and properties 

//console.log(Math);
//console.log(Math.abs(-4));
//console.log(Math.round(4.6));
//console.log(Math.ceil(4.2));
//console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //its value is 1>mr>=0
// to get our desired range we multiply it with some thing and to avoid the zero case in our required rande we add 1 and then take its floor 
// if we want a range in 1 to 10 
console.log(Math.floor((Math.random()*10)+1));

// if we have a given range and we want a formula to get random interger in that range 

const min=10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min); // **very important formula andd logic must read

 


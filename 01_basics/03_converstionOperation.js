let score="33"
let score_1="33abc"
// some times data come form backend and u are working in fend so its imp to find its datatype
console.log(typeof score)
console.log(typeof (score))

let scoreInNumbers = Number(score) // capital N
let scoreInNumbers_1 = Number(score_1)
console.log(typeof scoreInNumbers)
console.log(typeof scoreInNumbers_1) // this will not show error it will show number
console.log(scoreInNumbers_1)// this will show NAN
/*
so in js never relai on Numbers() it can be NAN (not a number) always check the value
null will convert into 0 ** very crusial and it will still convert into number
undefine convert into NAN and also convert itno number 

for boolean 
1 => true
0 => false
"" => false
"aditya" => true
*/ 

let isnum=33
let isstring = String(isnum)
console.log(typeof isstring)
console.log(isstring)

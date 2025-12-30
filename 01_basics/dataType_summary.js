/*
in js datatypes are divided majorly into two types on basis of who it store in memory and 
how we can ascces them 
1th primitive (by values)
2nd nonprimitives (by reference)
in js we do not have to always declare the datatype of our variable 
JavaScript is a dynamically typed language
Type Checking	Performed during runtime (when the program is executing).
You do not need to explicitly declare a variable's data type.
*/

// Primitive 
// 7 types : string , number, boolean, null, undefine, bigINT, Symbol

const score = 100
const scoreValue=100.3  // typeof number 

const loggedin = false  // typeof bollean 
const outTemp = null    // typeof object  
let useEmail;           // typeof undefine

// symbol is use to make things unique
const id = Symbol('123')
const anotherID = Symbol('123') // typeof symbol
console.log(id == anotherID)
console.log(id)
console.log(anotherID)

const bigNumber = 3545412655241223333n // if we add n in last it will convert into bigint
console.log(typeof bigNumber)  // typeof bigINT


// Reference(Non primitive)
// Array, Object, Function  there datatype is always object 

const heros = ["arjun velly", "bagat singh", "subhash chandra boss "] // array  typeof object

// any thing in {} is object and data type can be anything and store in key value pairs
let myObj= {
    name : "aditya",      // typeof object
    age : 21,
    sex : "male"
}
console.log(myObj)

// function 

const myFunction = function(){       // typeof function or (function object)
    console.log("Hello world")
}
console.log(typeof myFunction)

//  when we do type of any variable which is not define yet or do not have define value 
// then typeof output will be undefine 
console.log(typeof fuckyou) // typeof is undefine

// if you want to read its documentation 
//// https://262.ecma-international.org/5.1/#sec-11.4.3


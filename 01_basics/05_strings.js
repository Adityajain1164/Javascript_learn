// use the morden syntex of string 
const name = "aditya"
const repocount=50

console.log(name + repocount+ " repos" )
// never use above syntax for concatination 

// always use backtricks `` string interpolation
console.log(`hello my is ${name} and i have ${repocount} reposetry `);  // we can also use string methods on the go 

// there is one more method to use string 
// we can call its object and constructure
const gamename = new String("aditya-gotam-jain")
console.log(gamename);
// ***** go to console in browser and use this to string in key value pairs and understand different types of methods or function

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase()); // it does not chage the orignal string due to primitive data type
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));


// sclice of string 
const newstring = gamename.substring(0,4) // will not include the last one
console.log(newstring);

const newstringone = gamename.slice(-5, -1) // in sclice we can add negative values also 
console.log(newstringone);

// trim the white spaces 

const constumerName = "   aditya   "
console.log(constumerName);

console.log(constumerName.trim());// when you go to its documenttion we have trim start and trim end as well 


// ********* replce method or function **********

const url ="https://aditya.com/aditya%20jain"
console.log(url.replace('%20', '-'));

console.log(url.includes('jain'));
console.log(url.includes('neha'));

// if i want to crate a array from a string based on any conditon 

console.log(gamename.split("-"));
console.log(gamename.split(''))

// go and read about the different function of string , it is very imp to get hold on the function of strings




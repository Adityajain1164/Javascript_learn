//* forof loop
let myarr=[1,2,3,4,5,6]
for (const num of myarr) {
    //console.log(num);
    
}
const greeting ="Hello World"
for (const greet of greeting) {
    //console.log(`Each char is ${greet}`);
    
}

//* ******************* Maps in js ************************

/*The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
A key in the Map may only occur once; it is unique in the Map's collection*/
const map=new Map()
map.set("in","india")
map.set("usa","united state of america")
map.set("fr","france")
console.log(map);

//* now lets understand how to apply loop on these map

for (const key of map) {
    //console.log(key); //* it will give array of [key, value]
    
}

for (const [key, value] of map) {
    //console.log(key,":-",value);       //* in :- india
    //console.log(value);                 //* will only print values
    //console.log(key);                     //* only print values
    
}

//*************** forof loop on objects *********************
//*forof loop does not work on objects
const obj ={
    ind : "india",
    usa : "united state of america",
    fr: "france"
}

for (const [key, value] of obj) {
    //console.log(key, ":-", value);  //* error  object are  not iterable 
    
}




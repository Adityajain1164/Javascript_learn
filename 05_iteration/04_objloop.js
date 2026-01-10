const myObject ={
    js : "javascript",
    cpp: "C++",
    rb: "rubby",
    swift: "swift by apple"
}
//* forin loop
for (const key in myObject) {
    
    //console.log(key);    //* to get all the keys
    //console.log(myObject[key]) //* for all values
    //console.log(`${key} is shortcut for ${myObject[key]}`);
    
}

//* can we use forin loop on arrays?? 

let myArray = [1,2,3,4,5]
for (const key in myArray) {
    
    //console.log(key); //* it is printing index value 0 to 4
    console.log(myArray[key]); //* it is giving the values
    
}

//* can we allpy forin loop on maps       no 
const map=new Map()
map.set("in","india")
map.set("usa","united state of america")
map.set("fr","france")
//console.log(map);

for (const key in map) {
    console.log(key);//* it will not give any output as maps are not iterable 
}

for (const [key, value] in map) {
    console.log(key); //* it will also not give any value 
    
}